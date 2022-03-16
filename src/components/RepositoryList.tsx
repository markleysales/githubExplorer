import { useState, useEffect } from "react";
import { RepositoryItem } from "./RepositoryItem";

import "../styles/repositories.scss";

interface Repository{
    name: string,
    description: string,
    html_url: string
}

export function RepositoryList(){
    const [repositories, setRepositories] = useState<Repository[]>([])

    useEffect(() => {
        fetch("https://api.github.com/users/markleysales/repos")
        .then(response => response.json())
        .then(data => setRepositories(data))
    }, []);

    return(
        <section className = "repository-list">
            <h1>
                GitHub Repository List
                <img src="./assets/githubicon.svg"></img>
            </h1>

            <ul>
                {repositories.map(repository => {
                    return <RepositoryItem key={repository.name} repository={repository} />
                })}
            </ul>

            <footer>
                <p>Developed by Markley Sales</p>
                <img src="./assets/logo_ms2.svg"></img>
                <p><sup>
                    <a href=" https://www.linkedin.com/in/markley-sales">
                    https://www.linkedin.com/in/markley-sales</a>
                </sup></p>
                <p><sup>
                    <a href="mailto:marksales.dev.eng@gmail.com">
                    marksales.dev.eng@gmail.com</a>
                </sup></p>
            </footer>
        </section>
    );
}