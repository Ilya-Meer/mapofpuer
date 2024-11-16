import { Map } from './components/Map'
export function App() {
  return (
    <>
      <div>
        <Map
          center={[24.673088, 101.996663]}
          zoom={3}
        />
      </div>
    </>
  )
}