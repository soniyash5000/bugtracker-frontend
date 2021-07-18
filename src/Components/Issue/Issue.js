
import { useLocation } from "react-router";

const Issue = (props) => {
    const location = useLocation();
    const issue = location.state.fromDashboard; 
    console.log(issue);
    return (
        <div>
            <p><b>Title:- </b>{issue.title}</p>
            <p><b>Index:- </b>{issue.index}</p>
            <p><b>Description:- </b>{issue.description}</p>
            <p><b>Priority:- </b>{issue.priority}</p>
            <p><b>Author:- </b>{issue.author}</p>
            <p><b>Assignee:- </b>{issue.assignee}</p>
            <p><b>Author Email:- </b>{issue["author-email"]}</p>
            <p>
                <b>Tags:- </b>
                {
                    issue.tags.map(tag => {
                        return <span> {tag} </span>
                    })
                }
            </p>
        </div>
    );
}

export default Issue;