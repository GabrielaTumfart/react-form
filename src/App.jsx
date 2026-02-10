import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

export default function App() {

  const [articles, setArticles] = useState([
    "Primo articolo",
    "Secondo articolo",
    "Terzo articolo"





  ]);

  

  return (
    <div style={
      
      { padding: "20px" }
      
      }>

        <h1>React Blog</h1>
        <h2>Lista articoli</h2>

        <ul>

        {articles.map((title, index) => (

          <li key={index}>{title}>


          </li>


             ))}
              

        </ul>
        
    
      
    </div>

  )
}


