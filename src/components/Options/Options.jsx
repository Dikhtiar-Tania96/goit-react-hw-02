const Options = ({onLeaveFeedback, onReset, totalFeedback}) => {
    return (
        <div>
        <button type="button" onClick={()=> onLeaveFeedback('good')}>Good</button>
        <button type="button"  onClick={() => onLeaveFeedback('neutral')}>Neutral</button>
        <button type="button" onClick={() =>onLeaveFeedback ('bad')}>Bad</button>
        {totalFeedback > 0 && <button onClick={onReset}>Reset</button>}
        </div>
    )
}

export default Options;