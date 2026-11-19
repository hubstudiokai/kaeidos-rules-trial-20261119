import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)

  return (
    <main>
      <h1>Votre application est prête</h1>
      <p>
        Décrivez dans KAEIDOS ce que vous voulez changer : l’agent construit à partir de cette
        page.
      </p>
      <button type="button" onClick={() => setCount((current) => current + 1)}>
        Compteur : {count}
      </button>
    </main>
  )
}

export default App
