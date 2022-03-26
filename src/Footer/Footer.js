import React from "react";
import './Footer.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhoneSquare } from "@fortawesome/free-solid-svg-icons";
import {
    faFacebook,
    faGithub,
    faTwitter,
    faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

class Footer extends React.Component {
    constructor() {
        super();
    }
    render() {
        return (
            <>
                <div className="bg-dark text-white footer p-3">
                    <div className="col-2 offset-2" style={{textAlign: 'left'}}>
                        <h4>GET IN TOUCH</h4>
                        <div><FontAwesomeIcon className="me-3" icon={faEnvelope} />y.m123@gmail.com</div>
                        <div><FontAwesomeIcon icon={faPhoneSquare} /> 01155554444</div>
                    </div>
                    <div className="col-4 text-center">
                        <button type="button" class="btn btn-outline-light btn-lg">Contact Me</button>
                    </div>
                    <div className="col-4 text-center">
                        <p>
                            <FontAwesomeIcon className="me-3" icon={faFacebook} />
                            <FontAwesomeIcon className="me-3" icon={faTwitter} />
                            <FontAwesomeIcon className="me-3" icon={faLinkedin} />
                        </p>
                        <p>CopyRight©2019KR</p>

                    </div>

                </div>


            </>
        );
    }
}
export default Footer;