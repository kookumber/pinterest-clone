import React from "react";
import PinIndexContainer from "../pin/pinIndexContainer";
import { Helmet } from "react-helmet";

class HomePage extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        const { pins } = this.props

        const splash = () => {
            return (
                <div className="splash-wrapper">
                    {/* Home text inspiration section */}
                    
                    <div className="home-text-wrap">
                        <div>
                            <h2 className="home-text">Get your next</h2>
                        </div>

                        <div className="idea-text-container">
                            {/* <div className="text-change">
                                <h2 className="home-text animation" id="surf-spot">surf spot destination</h2>
                            </div> */}
                            <div className="text-change">
                                <h2 className="home-text animation" id="board-fin">surfboard fin design</h2>
                            </div>
                        </div>

                    </div>
                    {/* End home text inspiration section */}

                    <div className="splash-pics-container">
                        <div className="splash-grid">
                            {/* <div className="grid">
                                <div className="splash-col animation">
                                    <div className="splash-pic"><img scr="https://finterest-project-dev.s3.us-west-1.amazonaws.com/blue-surf-1.jpg" /></div>
                                    <div className="splash-pic"><img scr="https://finterest-project-dev.s3.us-west-1.amazonaws.com/blue-surf-2.jpg" /></div>
                                    <div className="splash-pic"><img scr="https://finterest-project-dev.s3.us-west-1.amazonaws.com/blue-surf-3.jpg" /></div>
                                </div>
                                <div className="splash-col animation">
                                    <div className="splash-pic"><img scr="https://finterest-project-dev.s3.us-west-1.amazonaws.com/blue-surf-4.jpg" /></div>
                                    <div className="splash-pic"><img scr="https://finterest-project-dev.s3.us-west-1.amazonaws.com/blue-surf-5.jpg" /></div>
                                    <div className="splash-pic"><img scr="https://finterest-project-dev.s3.us-west-1.amazonaws.com/blue-surf-6.jpg" /></div>
                                </div>
                                <div className="splash-col animation">
                                    <div className="splash-pic"><img scr="https://finterest-project-dev.s3.us-west-1.amazonaws.com/blue-surf-7.jpg" /></div>
                                    <div className="splash-pic"><img scr="https://finterest-project-dev.s3.us-west-1.amazonaws.com/blue-surf-8.jpg" /></div>
                                    <div className="splash-pic"><img scr="https://finterest-project-dev.s3.us-west-1.amazonaws.com/blue-surf-9.jpg" /></div>
                                </div>
                                <div className="splash-col animation">
                                    <div className="splash-pic"><img scr="https://finterest-project-dev.s3.us-west-1.amazonaws.com/blue-surf-10.jpg" /></div>
                                    <div className="splash-pic"><img scr="https://finterest-project-dev.s3.us-west-1.amazonaws.com/blue-surf-11.jpg" /></div>
                                    <div className="splash-pic"><img scr="https://finterest-project-dev.s3.us-west-1.amazonaws.com/blue-surf-12.jpg" /></div>
                                </div>
                                <div className="splash-col animation">
                                    <div className="splash-pic"><img scr="https://finterest-project-dev.s3.us-west-1.amazonaws.com/blue-surf-13.jpg" /></div>
                                    <div className="splash-pic"><img scr="https://finterest-project-dev.s3.us-west-1.amazonaws.com/blue-surf-14.jpg" /></div>
                                    <div className="splash-pic"><img scr="https://finterest-project-dev.s3.us-west-1.amazonaws.com/blue-surf-15.jpg" /></div>
                                </div>
                                <div className="splash-col animation">
                                    <div className="splash-pic"><img scr="https://finterest-project-dev.s3.us-west-1.amazonaws.com/blue-surf-16.jpg" /></div>
                                    <div className="splash-pic"><img scr="https://finterest-project-dev.s3.us-west-1.amazonaws.com/blue-surf-17.jpg" /></div>
                                    <div className="splash-pic"><img scr="https://finterest-project-dev.s3.us-west-1.amazonaws.com/blue-surf-18.jpg" /></div>
                                </div>
                                <div className="splash-col animation">
                                    <div className="splash-pic"><img scr="https://finterest-project-dev.s3.us-west-1.amazonaws.com/blue-surf-19.jpg" /></div>
                                    <div className="splash-pic"><img scr="https://finterest-project-dev.s3.us-west-1.amazonaws.com/blue-surf-20.jpg" /></div>
                                    <div className="splash-pic"><img scr="https://finterest-project-dev.s3.us-west-1.amazonaws.com/blue-surf-21.jpg" /></div>
                                </div>
                            </div> */}
                            <div className="grid">
                                <div className="splash-col">
                                    <div className="splash-pic"><img src="https://finterest-project-dev.s3.us-west-1.amazonaws.com/fin-1.jpeg" /></div>
                                    <div className="splash-pic"><img src="https://finterest-project-dev.s3.us-west-1.amazonaws.com/fin-2.jpeg" /></div>
                                    <div className="splash-pic"><img src="https://finterest-project-dev.s3.us-west-1.amazonaws.com/fin-3.jpeg" /></div>
                                </div>
                                <div className="splash-col">
                                    <div className="splash-pic"><img src="https://finterest-project-dev.s3.us-west-1.amazonaws.com/fin-4.png" /></div>
                                    <div className="splash-pic"><img src="https://finterest-project-dev.s3.us-west-1.amazonaws.com/fin-5.jpeg" /></div>
                                    <div className="splash-pic"><img src="https://finterest-project-dev.s3.us-west-1.amazonaws.com/fin-6.jpeg" /></div>
                                </div>
                                <div className="splash-col">
                                    <div className="splash-pic"><img src="https://finterest-project-dev.s3.us-west-1.amazonaws.com/fin-7.jpg" /></div>
                                    <div className="splash-pic"><img src="https://finterest-project-dev.s3.us-west-1.amazonaws.com/fin-8.jpg" /></div>
                                    <div className="splash-pic"><img src="https://finterest-project-dev.s3.us-west-1.amazonaws.com/fin-9.jpg" /></div>
                                </div>
                                <div className="splash-col">
                                    <div className="splash-pic"><img src="https://finterest-project-dev.s3.us-west-1.amazonaws.com/fin-10.jpg" /></div>
                                    <div className="splash-pic"><img src="https://finterest-project-dev.s3.us-west-1.amazonaws.com/fin-11.jpg" /></div>
                                    <div className="splash-pic"><img src="https://finterest-project-dev.s3.us-west-1.amazonaws.com/fin-12.jpeg" /></div>
                                </div>
                                <div className="splash-col">
                                    <div className="splash-pic"><img src="https://finterest-project-dev.s3.us-west-1.amazonaws.com/fin-13.jpg" /></div>
                                    <div className="splash-pic"><img src="https://finterest-project-dev.s3.us-west-1.amazonaws.com/fin-14.jpeg" /></div>
                                    <div className="splash-pic"><img src="https://finterest-project-dev.s3.us-west-1.amazonaws.com/fin-15.jpg" /></div>
                                </div>
                                <div className="splash-col">
                                    <div className="splash-pic"><img src="https://finterest-project-dev.s3.us-west-1.amazonaws.com/fin-16.jpg" /></div>
                                    <div className="splash-pic"><img src="https://finterest-project-dev.s3.us-west-1.amazonaws.com/fin-17.jpg" /></div>
                                    <div className="splash-pic"><img src="https://finterest-project-dev.s3.us-west-1.amazonaws.com/fin-18.jpg" /></div>
                                </div>
                                <div className="splash-col">
                                    <div className="splash-pic"><img src="https://finterest-project-dev.s3.us-west-1.amazonaws.com/fin-19.jpg" /></div>
                                    <div className="splash-pic"><img src="https://finterest-project-dev.s3.us-west-1.amazonaws.com/fin-20.jpeg" /></div>
                                    <div className="splash-pic"><img src="https://finterest-project-dev.s3.us-west-1.amazonaws.com/fin-21.jpeg" /></div>
                                </div>
                            </div>
                        </div>
                    </div>
                
                </div>
            )
        }

        return (
            <div>
                {this.props.currentUser ? <PinIndexContainer /> : splash()}
            </div>
        )

    }
}

export default HomePage