import { useState,useContext, useEffect } from "react"
import FeedbackContext from "../context/FeedbackContext";

export default function  Ratingselect({select}){

    const [selected,setSelected] = useState(10);
    const handleChange = (e) => {
        setSelected(+e.target.value);
        select(+e.target.value);
    };
    const feedbackNumbers = [1,2,3,4,5,6,7,8,9,10];

    const {feedbackEdit} = useContext(FeedbackContext);

    useEffect(() => {
        if(feedbackEdit.edit === true){
            setSelected(feedbackEdit.item.rating);
        }
    },[feedbackEdit]);

    return(
        <ul className="rating" >
            {feedbackNumbers.map((num) => (
                <li>
                    <input type="radio" 
                    name="rating" 
                    value={num}
                    onChange={handleChange}
                    checked={selected === num}
                    id={`num${num}`} />
                    <label htmlFor={`num${num}`}>{num}</label>
                </li>
            ))}
        </ul>
    )
}