import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { CakeView } from './features/cake/CakeView'
import { IceCreamView } from './features/icecream/IceCreamView'
import { UserView } from './features/user/UserView'

function App() {
  return (
    <div className='App'>
      <CakeView />
      <IceCreamView />
      <UserView />
    </div>
  )
}

export default App
