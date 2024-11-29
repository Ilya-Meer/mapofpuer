import { useState } from 'react'
import { Map } from './components/Map'
import { TileServer } from './types'
import styles from './App.module.css'
import Legend from './components/Legend'

export function App() {
  const tileServers: Record<string, TileServer> = {
    stadia: {
      url: 'https://tiles.stadiamaps.com/tiles/alidade_smooth/{z}/{x}/{y}{r}.png',
      attribution: '&copy; <a href="https://stadiamaps.com/">Stadia Maps</a>'
    },
    openStreetMap: {
      url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png',
      attribution: '© OpenStreetMap'
    }
  }

  const [activeTileServer, setActiveTileServer] = useState<TileServer>(tileServers.stadia)

  return (
    <>
      <div className={styles.appContainer}>
        <h1>Map of Puer</h1>
        <div className={styles.auxiliaryDetails}>
          <div className={styles.legendContainer}>
            <Legend />
          </div>
          <div className={styles.buttonContainer}>
            <button onClick={() => setActiveTileServer(tileServers.stadia)}>Stadia Maps</button>
            <button onClick={() => setActiveTileServer(tileServers.openStreetMap)}>OpenStreetMap</button>
          </div>
        </div>
        <Map tileServer={activeTileServer} />
      </div>
    </>
  )
}
