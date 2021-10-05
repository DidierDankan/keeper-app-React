import React from "react";

//componenti
import Header from "./Header";
import Note from "./Note";
import Footer from "./Footer"

function App() {
    return(
        <div>
            <Header />
            <section>
                <Note />
            </section>
            <Footer />
        </div>
    )
}

export default App;