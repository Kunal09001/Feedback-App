import { useContext } from "react";
import FeedbackContext from "../context/FeedbackContext";

export default function  FeedbackStats(){

    const {feedback} = useContext(FeedbackContext);
    const count = feedback.length;
    let average = feedback.reduce((acc,cur) => {
        return acc + cur.rating
    },0) / count ;

    average = Number.isInteger(average) ? average : average.toFixed(1);

    console.log(average);
    return (
        <div className="feedback-stats">
            <h4>{count} Reviews</h4>
            <h4>Average : {isNaN(average) ? 0 : average}</h4>
        </div>
    )
}