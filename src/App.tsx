// App.tsx
import React from 'react'
import MyFirstComponent from './components/home';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';

const App: React.FC = () => {
  return (
    <div>
      <MyFirstComponent />
    </div>
  )
}

export default App