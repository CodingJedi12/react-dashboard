function AvgRating(props) {
    return (
        <div className="rating">
            <h3>Average Rating</h3>
            <h2>{props.rating}</h2>
        </div>
    );
}

export default AvgRating;