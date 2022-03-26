import React from "react";
import './Portofolio.css'

class Portofolio extends React.Component {
    constructor() {
        super();
    }
    render() {
        let cards = [
            { cardTitle: "Web Design", color: "  #797d7f " },
            { cardTitle: "Mobile Design", color: "#17202a" },
            { cardTitle: "Logo Design", color: "#797d7f" },
            { cardTitle: "Web Application Devolpment ", color: "#17202a" },
            { cardTitle: "Mobile Application Devolpment", color: " #797d7f" },
            { cardTitle: "PWA Devolpment", color: "#17202a" },

        ];
        return (
            <>
                <h1 className="offset-1 p-3 text-start"> Portfolio</h1>
                <div className="container portcards">
                    {cards.map((item) => {
                        return (
                            <div className="col-3 m-3">
                                <div className="card h-100" style={{ "background-color": `${item.color}` }}>
                                    <div className="card-body cardbody" style={{ "background-color": `${item.color}` }} >
                                        <h5 className="card-title" style={{ "color": '#ecf0f1' }}>{item.cardTitle}</h5>
                                        <hr></hr>
                                    </div>
                                </div>
                            </div>
                        );
                    })}

                </div>
            </>
        );
    }
}
export default Portofolio;