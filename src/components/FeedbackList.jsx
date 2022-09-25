import FeedbackItem from "./FeedbackItem";
import Spinner from "./Spinner";
import {motion,AnimatePresence} from 'framer-motion';
import { useContext } from "react";
import FeedbackContext from "../context/FeedbackContext";

function FeedbackList(){

    const {feedback,isLoading} = useContext(FeedbackContext)

    if(!isLoading && (!feedback ||feedback.length) === 0){
        return <h2>No FeedBack Yet</h2>
    }

    return isLoading ? <Spinner /> : (
    <div className="feedback-list">
    <AnimatePresence>
        {feedback.map((item) => (
            <><motion.div
                key={item.id}
                initial={{ opactiy: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}><FeedbackItem
                    item={item}
                    /></motion.div></>
        ) )}
    </AnimatePresence>     
</div>
)

}

export default FeedbackList;