import { useEffect, useRef } from 'react';
import yunnan from '../../assets/yunnan.json';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import styles from './Map.module.css';
import { TileServer } from '../../types';

interface MapProps {
    center: [number, number];
    zoom: number;
    tileServer: TileServer;
}

export function Map({
  center,
  zoom,
  tileServer
}: MapProps) {
    const mapRef = useRef<HTMLDivElement>(null);
    const mapInstanceRef = useRef<L.Map | null>(null);

    useEffect(() => {
        if (mapRef.current && !mapInstanceRef.current) {
            // Initialize map
            const map = L.map(mapRef.current).setView(center, zoom);
            mapInstanceRef.current = map;

            const baseLayer = L.tileLayer(tileServer.url, {
                minZoom: 6,
                maxZoom: 12,
                attribution: tileServer.attribution
            }).addTo(map);

            baseLayer.on('loading', () => {
                console.log('Tiles are loading...');
            });
            baseLayer.on('load', () => {
                console.log('All tiles loaded!');
            });

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

            // Create a feature group for interactive elements
            const interactiveLayer = L.featureGroup().addTo(map);

            // Add various elements to the interactive layer
            L.marker(center).addTo(interactiveLayer);
            
            // Add a permanent label
            L.marker(center, {
                icon: L.divIcon({
                    className: 'my-label',
                    html: '<div style="color: blue;">My Label</div>',
                    iconSize: [100, 20],
                    iconAnchor: [50, 10],
                })
            }).addTo(interactiveLayer);

            // Fit map bounds to show all elements
            map.fitBounds(interactiveLayer.getBounds());

            // Add layer controls
            const overlays = {
                "Tile Layer": baseLayer,
                "Interactive Elements": interactiveLayer
            };
            baseLayer.on('tileload', (event) => {
                console.log(`Loaded tile at zoom ${event.coords.z}, x: ${event.coords.x}, y: ${event.coords.y}`);
            });
            L.control.layers({}, overlays).addTo(map);
        }

        return () => {
            mapInstanceRef.current?.remove();
            mapInstanceRef.current = null;
        };
    }, [center, zoom, tileServer]);

    return <div ref={mapRef} className={styles.mapContainer} />;
}
