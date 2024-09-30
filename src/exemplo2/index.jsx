import { useEffect, useState } from "react";

export default function App() {
  
  const [usuarios,setUsuario] = useState([]);

  useEffect(() => { 

    const buscarUsuario  = async () => {
      const respsota = await fetch('https://jsonplaceholder.typicode.com/todos');
        const dados =  await respsota.json();
        setUsuario(dados);
    }
    buscarUsuario();
  },[]);

  return (
    <>
      <h1>Usuário</h1>
      <li>
        {usuarios.map(usuarios =>(
        <li key={usuarios.id}>
        <h2>{usuarios.title}</h2>
        </li>
      ))}
      </li>
    </>
  );
}
