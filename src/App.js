import Header from "./components/Header";
import FeedbackList from "./components/FeedbackList";
import { BrowserRouter as Router , Route,Routes} from "react-router-dom";
import {useState} from 'react';
import FeedbackData from './data/FeedbackData';
import FeedbackStats from "./components/FeedbackStats";
import FeedbackForm from "./components/FeedbackForm";
import AboutPage from "./pages/AboutPage";
import AboutIconLink from "./components/AboutIconLink";
import { FeedbackProvider } from "./context/FeedbackContext";

function App(){

    const [feedback,setFeedback] = useState(FeedbackData);
    const title = 'My App'.toUpperCase();
    
    return (
        // Need only ! parent i.e div, but if you dont want div we can also use <></>
        <FeedbackProvider>
                <Router>
                    <Header/>
                    <div className="Container">
                    <Routes>
                        <Route exact path="/" element={<>
                            <FeedbackForm/>
                            <FeedbackStats />
                        <FeedbackList/>
                        </>}>  
                        </Route>
                            {/* This should be a route page so... */}
                        <Route path='/about' element={<AboutPage />} />
                    </Routes>
                    <AboutIconLink />
                </div>
            </Router >
        </FeedbackProvider>
    );
}

export default App;