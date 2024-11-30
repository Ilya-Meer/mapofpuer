import { useEffect, useRef } from 'react';
import { renderToString } from 'react-dom/server';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import yunnan from '../../assets/yunnan.json';
import styles from './Map.module.css';
import { TileServer } from '../../types';
import { locations } from '../../assets/locations'
import { Popup } from '../Popup';
import { LOCATION_TYPE } from '../../constants';

interface MapProps {
  tileServer: TileServer;
  locationSearch: string;
}

const classByType = {
  [LOCATION_TYPE.VILLAGE]: styles.village,
  [LOCATION_TYPE.TOWN]: styles.town,
  [LOCATION_TYPE.CITY]: styles.city,
  [LOCATION_TYPE.MOUNTAIN]: styles.mountain,
  [LOCATION_TYPE.POI]: styles.poi,
}

// Create a masked version of the GeoJSON to grey out the area outside of Yunnan
const maskedGeoJSON: GeoJSON.FeatureCollection = {
  type: "FeatureCollection",
  features: [{
    type: "Feature",
    properties: {},
    geometry: {
      type: "Polygon",
      coordinates: [
        // Outer ring (covers entire world)
        [
          [0, 90], [180, 90], [180, -90],
          [0, -90], [-180, -90], [-180, 0],
          [-180, 90], [0, 90]
        ],
        // Inner rings (holes) from all features
        ...(yunnan as GeoJSON.FeatureCollection).features
          .flatMap(feature => {
            const geom = feature.geometry;
            if (geom.type === 'Polygon') {
              return geom.coordinates;
            }
            if (geom.type === 'MultiPolygon') {
              return geom.coordinates.flat();
            }
            return [];
          })
      ]
    }
  }]
};

const init = ({
  map,
  tileServer
}: {
  map: L.Map
  tileServer: TileServer
}) => {
  /////
  ///// Init base layer
  /////
  const baseLayer = L.tileLayer(tileServer.url, {
    maxZoom: 16,
    attribution: tileServer.attribution
  }).addTo(map);

  baseLayer.on('loading', () => {
    console.log('Tiles are loading...');
  });
  baseLayer.on('load', () => {
    console.log('All tiles loaded!');
  });
  baseLayer.on('tileload', (event) => {
    console.log(`Loaded tile at zoom ${event.coords.z}, x: ${event.coords.x}, y: ${event.coords.y}`);
  });

  /////
  ///// Init GeoJSON
  /////

  // Add the mask
  L.geoJSON(maskedGeoJSON, {
    style: {
      fillColor: 'grey',
      fillOpacity: 0.5,
      stroke: false,
      interactive: false
    }
  }).addTo(map);

  // Add the Yunnan GeoJSON layer to show the boundary of Yunnan
  L.geoJSON(yunnan as GeoJSON.FeatureCollection, {
    style: {
      fillOpacity: 0,
      stroke: true,
      color: '#1e1e1e',
      weight: 1,
      interactive: false
    }
  }).addTo(map);

  /////
  ///// Init interactive elements
  /////

  // Create a feature group for interactive elements
  const interactiveLayer = L.featureGroup().addTo(map);

  // Add location markers
  for (const location of locations) {
    const popup = <Popup {...location} />
    L.marker(location.coordinates)
      .bindTooltip(location.name, {
        permanent: true,
        className: `${styles.tooltip} ${classByType[location.type]}`,
        direction: 'bottom'
      })
      .bindPopup(renderToString(popup))
      .addTo(interactiveLayer);
  }

  // Fit map bounds to show all elements
  map.fitBounds(interactiveLayer.getBounds());

  // Add layer controls
  const overlays = {
    "Tile Layer": baseLayer,
    "Interactive Elements": interactiveLayer
  };

  L.control.layers({}, overlays).addTo(map);
}

export function Map({
  tileServer,
  locationSearch
}: MapProps) {
  const mapRef = useRef<HTMLDivElement>(null);
  const mapInstanceRef = useRef<L.Map | null>(null);

  useEffect(() => {
    // Initialize map
    if (mapRef.current && !mapInstanceRef.current) {
      const map = L.map(mapRef.current)
      mapInstanceRef.current = map;

      init({
        map,
        tileServer
      })

      return () => {
        mapInstanceRef.current?.remove();
        mapInstanceRef.current = null;
      };
    }
  }, [tileServer]);

  useEffect(() => {
    const location = locations.find(l => l.name.toLowerCase() === locationSearch.toLowerCase())
    if (location && location.coordinates) {
      mapInstanceRef.current?.flyTo(location.coordinates, 12)
    }
  }, [locationSearch])

  return (
    <>
      <div>
      </div>
      <div ref={mapRef} className={styles.mapContainer} />
    </>
  )
}
