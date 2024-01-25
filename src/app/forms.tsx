import { useForm, SubmitHandler } from "react-hook-form"
import { useState } from "react"
import { movie } from "./data";
import { api } from "./services/api";

export function Formulario() {
    const [name, setName] = useState('');
    const [director, setDirector] = useState('');
    const [ano, setAno] = useState('');
    
    const { register, handleSubmit } = useForm()

    async function submit(data) {
    try {
        const response = await api.post("/movies", {
            name: data.name,
            director: data.director,
            ano: parseInt(data.ano)
        });
    } catch (error) {
        console.log(error);
    };
}
    return (
        <div className="create items-center">
            <form onSubmit={handleSubmit(submit)}>

                <h1 className="m-8">Informações sobre o filme</h1>

                <label htmlFor="" className="">Nome do Filme:</label> <br />
                <input 
                    type="text"
                    placeholder="Filme" 
                    required
                    {...register("name")}
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                /> <br />

                <label htmlFor="">Diretor:</label> <br />
                <input 
                    type="text"
                    placeholder="Diretor" 
                    required
                    {...register("director")}
                    value={director}
                    onChange={(e) => setDirector(e.target.value)}
                /> <br />

                <label htmlFor="">Ano de lançamento:</label> <br />
                <input 
                    type="text" 
                    placeholder="Ano de lançamento"
                    required
                    {...register("ano")}
                    value={ano}
                    onChange={(e) => setAno(e.target.value)}
                /> <br />

                <button>Confirmar</button>
            </form>
        </div>
    )
}