import React from "react";
import background from './background.jpg';
import './HeroSection.css'


class HeroSection extends React.Component {
    constructor() {
        super();
    }
    render() {
        return (
            <>
                <div className="card bg-dark text-white col-12">
                    <img src={background} alt="background" />
                    <div className="card-img-overlay card-edit col-6 ">
                        <div className="container">
                            <h1 className="card-title font-edit">Yasmina Mohamed</h1>
                            <h4 className="card-text edit-h4">Full Stack Devoloper</h4>
                            <button type="button" class="btn btn-outline-light btn-lg">Contact Me</button>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}
export default HeroSection;