

const issue = (props) => {
    const str = props.location.pathname;
    const len = str.length;
    return (
        <div>
            {str.slice(7,len)} 
        </div>
    );
}

export default issue;