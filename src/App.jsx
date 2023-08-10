import CarForm from './components/CarForm'
import CarList from './components/CarList'
import CarSearch from './components/CarSearch'
import GarageValue from './components/GarageValue'

function App() {
  return (
    <main className="max-w-screen-md mx-auto my-6">
      <CarForm />
      <CarSearch />
      <CarList />
      <GarageValue />
    </main>
  )
}

export default App
