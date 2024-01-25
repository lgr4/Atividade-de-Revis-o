import { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form"
import { api } from "./services/api";

interface Movies {
    id: number,
    name: string,
    director: string,
    ano: string
}

export function deleteForms() {
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
        
    const { register, handleSubmit } = useForm()

    async function submit(data) {
    try {
        const response = await api.delete(`/movies/${data.id}`);
    } catch (error) {
        console.log(error);
    };
    }
    return (
        <div className="create items-center">
            <form onSubmit={handleSubmit(submit)}>
                <button onClick={getMovies}>Atualizar lista</button>
                <br />
                <select>
                    {movies.map((item) =>
                        <option 
                        key={item.id}
                        {...register("id")}
                        >{item.id}</option>
                    )}
                </select>
                <br />
                <button>Confirmar</button>
            </form>
        </div>
    )
}