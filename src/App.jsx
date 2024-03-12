import { RequireAuth } from "./components/RequireAuth"
import { PocketProvider } from "./contexts/PocketContext"

function App() {

  return (
    <PocketProvider>
      <RequireAuth />
    </PocketProvider>
  )
}

export default App
