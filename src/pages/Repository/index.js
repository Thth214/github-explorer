import React, { useState, useEffect } from "react";

import { Header, RepositoryInfo, Issues  } from "./style";
import { FiChevronsLeft } from "react-icons/fi";
import { Link, useRouteMatch } from "react-router-dom";

import api from "../../services/api";

function Repository() {

    const { params } = useRouteMatch();
    const [repository, SetRepositories] = useState(null);
    const [issues, setIssues] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const response = await api.get(`/repos/${params.repository}`);
            SetRepositories(response.data);

            const issuesResponse = await api.get(`/repos/${params.repository}/issues`);
            setIssues(issuesResponse.data);
        }

        fetchData();
    }, [params.repository])

    return (
        <>
            <Header>
                <img src="https://image.flaticon.com/icons/png/512/25/25231.png" alt="Github Explorer" />
                <Link to="/">
                    <FiChevronsLeft size={16} />
                    <span>Voltar</span>
                </Link>
            </Header>
            {
                repository != null ? (
                    <RepositoryInfo>
                        <header>
                            <img src={repository.owner.avatar_url} alt={repository.owner.login} />
                            <div>
                                <strong>{repository.full_name}</strong>
                                <p>{repository.description}</p>
                            </div>
                        </header>
                        <ul>
                            <li>
                                <strong>{repository.stargazers_count}</strong>
                                <span>Stars</span>
                            </li>
                            <li>
                                <strong>{repository.forks_count}</strong>
                                <span>Forks</span>
                            </li>
                            <li>
                                <strong>{repository.open_issues_count}</strong>
                                <span>Open Issues</span>
                            </li>
                        </ul>
                    </RepositoryInfo>
                ) : null
            }
            <Issues>
        {
          issues.map(issue => {
            return (
              <a key={issue.id} href={issue.html_url}>
                <div>
                  <strong>{issue.title}</strong>
                  <p>{issue.login}</p>
                </div>
              </a>
            )
          })
        }
      </Issues>

        </>
    )
}

export default Repository;