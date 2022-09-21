import Card from "./Card"
import { useState, useContext , useEffect } from "react"
import Button from "./Button";
import {FaExclamationCircle} from "react-icons/fa"
import Ratingselect from "./Ratingselect";
import FeedbackContext from "../context/FeedbackContext";

export default function  FeedbackForm(){

    const [text,setText] = useState('');
    const [rating,setRating] = useState(10);
    const [btnDisabled,setBtnDisabled] = useState(true);
    const [message,setMessage] = useState('')

    const {addFeedback , feedbackEdit , updateFeedback} = useContext(FeedbackContext);

    const handleTextChange = (event) => {
        let value = event.target.value;
        setText(value);
        if(value === ''){
            setBtnDisabled(true);
            setMessage(null);
        }else if(value !== '' && value.trim().length < 10){
            setBtnDisabled(true);
            setMessage('Warning');
        }else{
            setBtnDisabled(false);
            setMessage(null);
        }
    } 
    
    useEffect(() =>{
        if(feedbackEdit.edit === true){
            setBtnDisabled(false);
            setText(feedbackEdit.item.text);
            setRating(feedbackEdit.item.rating);
        }
    },[feedbackEdit])

    const handleSubmit = (event) => {
        event.preventDefault()
        if(text.trim().length > 10){
            const newFeedback = {
                text : text,
                rating : rating,
            }

            if(feedbackEdit.edit === true){
                updateFeedback(feedbackEdit.item.id,newFeedback);
            }else{
            addFeedback(newFeedback);
            setText('');
            }}
    }

    return(
        <Card>
            <form onSubmit={handleSubmit}>
                <h2>How would you rate your service with us?</h2>
                <Ratingselect select={(rating) => setRating(rating)} />
                <div className="input-group">
                    <input type='text' onChange={handleTextChange} placeholder="Write a review" value={text}></input>
                    
                    <Button type="Submit" version="secondary" isDisabled={btnDisabled}>Send</Button>
                </div>
                {message && <div className="message"><FaExclamationCircle color="Red"/> Need atleast 10 Characters</div>}
            </form>
        </Card>
    )
}