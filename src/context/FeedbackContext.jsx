import { createContext,useState } from "react";
import { v4 as uuidv4 } from 'uuid';

const FeedbackContext = createContext();

export const FeedbackProvider = ({children}) => {
    const [feedback,setFeedback] = useState([{
        id : 11,
        text : 'This is from the Context',
        rating : 8,
},{
        id : 12,
        text : 'This is also from Context',
        rating : 9
}])

    const [feedbackEdit,setFeedbackEdit] = useState({
        item : {},
        edit : false
    })

    //Set item to delete
    const deleteFeedback = (id) => {
        if(window.confirm('Are you sure about your life choices?')) {
            setFeedback(feedback.filter((item) => item.id !== id))
        }
}

    //Set item to add
    const addFeedback = (newFeedback) => {
        newFeedback.id = uuidv4();
        setFeedback([newFeedback,...feedback]);
    }

    //Set item to update
    const editFeedback = (item) => {
        setFeedbackEdit({
            item : item,
            edit : true
        })
    }

    //Set item to update
    const updateFeedback = (id, updItem) => {
        const newFeedback = feedback.map(item => {
            if (item.id === id) {
                return { ...item, text: updItem.text, rating: updItem.rating };
            }
            return item;
        });
        setFeedback(newFeedback);
    }

    return <FeedbackContext.Provider value={{
        feedback,
        addFeedback,
        deleteFeedback,
        editFeedback,
        feedbackEdit,
        updateFeedback,
    }}>{children}</FeedbackContext.Provider>
}

export default FeedbackContext;