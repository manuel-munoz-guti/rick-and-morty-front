import { useRickAndMortyContext } from 'rick-and-morty-lib';
import './App.css'

function DisplayLocations({ loading, error, data }) {

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;
  return data.characters.results.map(({ id, name, species, image }) => (
    <div key={id}>
      <h3>{name}</h3>
      <img width="400" height="250" alt="location-reference" src={`${image}`} />
      <br />
      <b>Specie:</b>
      <p>{species}</p>
      <br />
    </div>
  ));
}

function App() {
  const { page, loading, error, data, loadMore } = useRickAndMortyContext();

  return (
    <>
      <div className="card">
      <div>
      <h1>
        Rick and Morty Apollo app
        <span role="img" aria-label="rocket">
          🚀
          Page: { page }
        </span>
      </h1>
      <br />
      <button onClick={loadMore}>
        Load More....
      </button>
      <DisplayLocations loading={loading} error={error} data={data}/>
    </div>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
