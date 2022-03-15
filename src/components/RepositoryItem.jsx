export function RepositoryItem(props){
    return(
        <li>
            <div>
                <strong>{props.repository.name}</strong>
                <p>{props.repository.description}</p>

                <a href={props.repository.html_url}>
                    access repository
                </a>
            </div>
        </li>
    );
}