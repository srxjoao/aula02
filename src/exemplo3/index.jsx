import { useEffect, useState } from "react";

export default function App() {
  
  const [user,Setuser] = useState([]);

  useEffect(() => { 

    const searchuser  = async () => {
        const resposta = await fetch('https://randomuser.me/api');
        const dados = await resposta.json();
        Setuser(dados.results[0]);
      }
      searchuser();
  }, []);

  return (
    <>
      <h1>Usuário</h1>
      <ul>
        {
          <li>
            {user(user=>(
              <li>
                <p>{user?.name.title}</p>
                <p>{user?.name.first}</p>
                <p>{user?.name.email}</p>
              </li>
              
            ))}
            
          </li>
        }
      </ul>
    </>
  );
}

