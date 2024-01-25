"use client"

import { api } from "./services/api";
import { Formulario } from "./forms";
import { useState } from "react";
import { deleteForms } from "./deleteForms";

interface Movies {
  id: number,
  name: string,
  director: string,
  ano: string
}

export default function Home() {
  const [movies, setMovies] = useState<Movies[]>([]);

  async function getMovies() {
    try {
      const response = await api.get("/movies")
      console.log(response.data)
      setMovies(response.data)
    } catch (error) {
      console.log(error);
    } 
  }

  return (
    
    <main>
      <div className="flex min-h-screen flex-col items-center">
        <button onClick={getMovies} className="m-5 bg-yellow-500 hover:bg-yellow-700 text-black font-bold py-2 px-4 rounded">Lista de Filmes</button>
        
        <ul>
          {movies.map((item) =>
            <div>
              <li key={item.id}>Filme: {item.name} <br />Diretor: {item.name}<br />Ano de lançamento: {item.name} <br /></li>
              <br />
            </div>
          )}
        </ul>

        <Formulario></Formulario>

        { deleteForms() }
      </div>

    </main>
  );
}
