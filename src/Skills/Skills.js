import React from "react";
import './Skills.css'


class Skills extends React.Component {
    constructor() {
        super();
    }
    render() {
        let myCourse = [
            { corNmae: "HTML", progress: 95 },
            { corNmae: "CSS", progress: 90 },
            { corNmae: "Java Script", progress: 75 },
            { corNmae: "React", progress: 65 },
            { corNmae: "PhotoShop", progress: 90 },
            { corNmae: "Node js", progress: 40 }
        ]
        let mystyle = {
            width: '50%',
            color: "white"
        }
        return (
            <>
                <div className="p-3 mb-2 bg-dark text-white">
                    <div class="d-grid gap-3" style={{ margin: '5%' }}>
                        <div class="p-2"><h1>Skills</h1></div>

                        <div class="p-2 col-8 offset-2">
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                                when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                                It has survived not only five centuries, but also the leap into electronic typesetting,
                                remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,
                                and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                            </p>
                        </div>

                        <div className="row p-2">
                            <div className="offset-1 col-4 text-center d-grid gap-1" style={{ fontFamily: 'serif' }}>
                                <h4 className="p-1">My Focus</h4>
                                <hr></hr>
                                <h6 className="p-1">UI/UX Designer</h6>
                                <h6 className="p-1">Responsive Design</h6>
                                <h6 className="p-1">Web Design</h6>
                                <h6 className="p-1">Mobile App Design </h6>
                            </div>
                            <div className="col-5 d-grid gap-2">
                                {myCourse.map((item) => {
                                    return (
                                        <div className="progress mt-2" style={{ height: '5vh' }}>
                                            <div
                                                className="progress-bar"
                                                role="progressbar"
                                                style={{ width: `${item.progress}%`, backgroundColor: '#bfbfbf' }}
                                                aria-valuenow={item.progress}
                                                aria-valuemin="0"
                                                aria-valuemax="100"
                                            ><span>
                                                    <div className="innerprog">
                                                        {item.corNmae}

                                                    </div>
                                                </span>
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    </div>

                </div>

            </>
        );
    }
}
export default Skills;