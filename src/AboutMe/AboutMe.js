import React from "react";
import './AboutMe.css'


class AboutMe extends React.Component {
    constructor() {
        super();
    }
    render() {
        return (
            <>
                <div className="container">
                    <div className="backcolor grid row p-3">
                        <div className="col-3" >
                            <h1>About Me</h1>
                        </div>
                        <div className="col-8">
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                                when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                                It has survived not only five centuries, but also the leap into electronic typesetting,
                                remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,
                                and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                            </p>
                            <button className="btn btn-dark btn-lg"><a href="cv.pdf" download>Download Resume</a></button>
                        </div>
                    </div>
                </div>

            </>
        );
    }
}
export default AboutMe;