import css from './Options.module.css'
const Options = ({onLeaveFeedback, onReset, totalFeedback}) => {
    return (
        <div>
        <button className={css.optionsBtn} type="button" onClick={()=> onLeaveFeedback('good')}>Good</button>
        <button  className={css.optionsBtn} type="button"  onClick={() => onLeaveFeedback('neutral')}>Neutral</button>
        <button  className={css.optionsBtn} type="button" onClick={() =>onLeaveFeedback ('bad')}>Bad</button>
        {totalFeedback > 0 && <button onClick={onReset} className={css.optionsBtnRes}>Reset</button>}
        </div>
    )
}

export default Options;