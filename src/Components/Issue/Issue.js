
import { useLocation } from "react-router";

const Issue = (props) => {
    const location = useLocation();
    const issue = location.state.fromDashboard; 
    console.log(issue);
    return (
        <div>
            <p>{issue.title}</p>

        </div>
    );
}

export default Issue;