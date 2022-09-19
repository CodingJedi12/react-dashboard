function Visitors(props) {
    return (
        <div className="visitors">
            <h3>Website Visitors</h3>
            <h2>{props.numVisitors}</h2>
            <div className="graphic">

            </div>
        </div>
    );
}

export default Visitors;