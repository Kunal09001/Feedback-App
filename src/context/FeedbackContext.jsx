import { createContext,useState, useEffect } from "react";

const FeedbackContext = createContext();

export const FeedbackProvider = ({children}) => {
    const [feedback,setFeedback] = useState([])
    const [isLoading,setIsLoading] = useState(true);

    const [feedbackEdit,setFeedbackEdit] = useState({
        item : {},
        edit : false
    })

    useEffect(() => {
        fetchFeedback()
    },[])

    //Fetching Data
    const fetchFeedback = async () => {
        const response = await fetch("/feedback?_sort=id&_order=desc");
        const data = await response.json();
        setFeedback(data)
        setIsLoading(false);
    }

    //Set item to delete
    const deleteFeedback = async (id) => {
        if(window.confirm('Are you sure about your life choices?')) {

            await fetch(`/feedback/${id}`,{method : 'DELETE'});

            setFeedback(feedback.filter((item) => item.id !== id))
        }
}

    //Set item to add
    const addFeedback = async (newFeedback) => {
        const response = await fetch('/feedback',{
            method:"POST",
            headers:{
                'Content-Type' : 'application/json'
            },
            body : JSON.stringify(newFeedback),
        });

        const data = await response.json();
        setFeedback([data,...feedback]);
    }

    //Set item to update
    const editFeedback = (item) => {
        setFeedbackEdit({
            item : item,
            edit : true
        })
    }

    //Set item to update
    const updateFeedback = async (id, updItem) => {

        const response = await fetch(`/feedback/${id}`,{method : 'PUT',headers : {
            'Content-Type' : 'application/json',
        },body: JSON.stringify(updItem)});

        const data = await response.json();

        const newFeedback = feedback.map(item => {
            if (item.id === id) {
                return { ...item, text: data.text, rating: data.rating };
            }
            return item;
        });
        setFeedback(newFeedback);
    }

    return <FeedbackContext.Provider value={{
        feedback,
        isLoading,
        addFeedback,
        deleteFeedback,
        editFeedback,
        feedbackEdit,
        updateFeedback,
    }}>{children}</FeedbackContext.Provider>
}

export default FeedbackContext;