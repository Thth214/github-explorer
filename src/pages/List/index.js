import React, { useState } from "react";
import api from "../../services/api";
import {Link} from "react-router-dom";
import {FiChevronRight} from "react-icons/fi"
import {
  Container,
  TitleContainer,
  Icon,
  Title,
  Input,
  Repository,
} from "./style"


function List() {
  const [newRepo, setNewRepo] = useState("");
  const [repositorys, setRepositorys] = useState([]);

  async function handleAddRepository() {
    // eslint-disable-next-line no-restricted-globals
    event.preventDefault();
    try {
      const response = await api.get(`/repos/${newRepo}`);

      const repository = response.data;

      setRepositorys([...repositorys, repository]);
    } catch {
      alert("Erro na busca deste repositório.");
    }
  }

  return (
    <Container>
      <TitleContainer>
      <Icon src="https://image.flaticon.com/icons/png/512/25/25231.png" />
        <Title>GitHub Explorer</Title>
      </TitleContainer>

      <form onSubmit={handleAddRepository}>
        <Input
          placeholder="Digite o nome do repositorio..."
          onChange={(e) => setNewRepo(e.target.value)}
        />
      </form>
      {
        repositorys.map(repositories => {
          return (
            <Repository key={repositories.full_name}>
              <Link to={`/repository/${repositories.full_name}`}>
              <img src={repositories.owner.avatar_url} alt={repositories.owner.login} />
              <div>
                <strong>
                  {repositories.full_name}
                </strong>
                <p>
                  {repositories.description}
                </p>
              </div>
              <FiChevronRight size={30}/>
              </Link>
              
            </Repository>
          )
        })
      }
    </Container>
  );
}

export default List;
