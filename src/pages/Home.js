import Separator from "../components/Seperator";
import ArticlesList from "./ArticlesList";

const Home = () => {
    return (
        <>
            <h1>Rant Palace</h1>
            <div className="subheading">
                A safe space for kings to vent. 
            </div>
            <p>
                Men deserves a space where he can express himself freely without judgment or reservation.
                In a world where societal norms often dictate how men should behave and feel, 
                it's crucial to have a sanctuary where they can let their guard down and speak their minds.

                We understand that men, just like anyone else, face their own unique set of challenges, 
                pressures, and emotions. Yet, too often, they're expected to keep these feelings bottled up, 
                leading to stress, anxiety, and even mental health issues. 
                That's why we've created this blog - a safe haven where men can rant, vent, 
                or simply share what's on their minds without fear of criticism or ridicule.
            </p>

            <Separator height={2}/>
            
            <div className="side-panel">
                <div>
                    <ArticlesList />
                </div>
            </div>
        </>
    )
}

export default Home;