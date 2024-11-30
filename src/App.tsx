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
  const [locationSearch, setLocationSearch] = useState('')
  const [submittedLocationSearch, setSubmittedLocationSearch] = useState('')

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmittedLocationSearch(locationSearch)
  }

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
        <form
          className={styles.searchForm}
          onSubmit={handleFormSubmit}
        >
          <label>Search location:</label>
          <input type="text" value={locationSearch} onChange={(e) => setLocationSearch(e.target.value)}/>
          <button type="submit">Go!</button>
        </form>
        <Map
          tileServer={activeTileServer}
          locationSearch={submittedLocationSearch}
        />
      </div>
    </>
  )
}
