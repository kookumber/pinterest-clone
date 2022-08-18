import React from "react";
import PinIndexContainer from "../pin/pinIndexContainer";
import { Helmet } from "react-helmet";
import SignupFormContainer from "../sessionForm/signupFormContainer";


class HomePage extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        const { pins } = this.props

        const splash = () => {
            return (
                <div className="splash-wrapper">
                    <Helmet>
                        <script src="script.js"></script>
                    </Helmet>
                    {/* welcome-inspiration */}
                    <section className="home-text-wrap"> 
                        <h2 className="home-text">Get your next</h2>

                        <div className="idea-text-container">
                            <div className="text-change">
                                <h2 className="home-text animate-before" id="surf-spot">surf destination idea</h2>
                            </div>
                            <div className="text-change">
                                <h2 className="home-text animate-before" id="board-fin">surfboard fin design</h2>
                            </div>
                            <div className="text-change">
                                <h2 className="home-text animate-before" id="green-thumb">green thumb idea</h2>
                            </div>
                        </div>

                        <div className="splash-pics-container">
                            <div className="splash-grid">
                                <div className="grid">
                                    <div className="splash-col animate-before">
                                        <div className="splash-pic"><img src="https://finterest-project-dev.s3.us-west-1.amazonaws.com/blue-surf-1.jpg" /></div>
                                        <div className="splash-pic"><img src="https://finterest-project-dev.s3.us-west-1.amazonaws.com/blue-surf-2.jpg" /></div>
                                        {/* <div className="splash-pic"><img src="https://finterest-project-dev.s3.us-west-1.amazonaws.com/blue-surf-3.jpg" /></div> */}
                                    </div>
                                    <div className="splash-col animate-before">
                                        <div className="splash-pic"><img src="https://finterest-project-dev.s3.us-west-1.amazonaws.com/blue-surf-4.jpg" /></div>
                                        <div className="splash-pic"><img src="https://finterest-project-dev.s3.us-west-1.amazonaws.com/blue-surf-5.jpg" /></div>
                                        {/* <div className="splash-pic"><img src="https://finterest-project-dev.s3.us-west-1.amazonaws.com/blue-surf-6.jpg" /></div> */}
                                    </div>
                                    <div className="splash-col animate-before">
                                        <div className="splash-pic"><img src="https://finterest-project-dev.s3.us-west-1.amazonaws.com/blue-surf-7.jpg" /></div>
                                        <div className="splash-pic"><img src="https://finterest-project-dev.s3.us-west-1.amazonaws.com/blue-surf-8.jpg" /></div>
                                        {/* <div className="splash-pic"><img src="https://finterest-project-dev.s3.us-west-1.amazonaws.com/blue-surf-9.jpg" /></div> */}
                                    </div>
                                    <div className="splash-col animate-before">
                                        <div className="splash-pic"><img src="https://finterest-project-dev.s3.us-west-1.amazonaws.com/blue-surf-10.jpg" /></div>
                                        <div className="splash-pic"><img src="https://finterest-project-dev.s3.us-west-1.amazonaws.com/blue-surf-11.jpg" /></div>
                                        {/* <div className="splash-pic"><img src="https://finterest-project-dev.s3.us-west-1.amazonaws.com/blue-surf-12.jpg" /></div> */}
                                    </div>
                                    <div className="splash-col animate-before">
                                        <div className="splash-pic"><img src="https://finterest-project-dev.s3.us-west-1.amazonaws.com/blue-surf-13.jpg" /></div>
                                        <div className="splash-pic"><img src="https://finterest-project-dev.s3.us-west-1.amazonaws.com/blue-surf-14.jpg" /></div>
                                        {/* <div className="splash-pic"><img src="https://finterest-project-dev.s3.us-west-1.amazonaws.com/blue-surf-15.jpg" /></div> */}
                                    </div>
                                    <div className="splash-col animate-before">
                                        <div className="splash-pic"><img src="https://finterest-project-dev.s3.us-west-1.amazonaws.com/blue-surf-16.jpg" /></div>
                                        <div className="splash-pic"><img src="https://finterest-project-dev.s3.us-west-1.amazonaws.com/blue-surf-17.jpg" /></div>
                                        {/* <div className="splash-pic"><img src="https://finterest-project-dev.s3.us-west-1.amazonaws.com/blue-surf-18.jpg" /></div> */}
                                    </div>
                                    <div className="splash-col animate-before">
                                        <div className="splash-pic"><img src="https://finterest-project-dev.s3.us-west-1.amazonaws.com/blue-surf-19.jpg" /></div>
                                        <div className="splash-pic"><img src="https://finterest-project-dev.s3.us-west-1.amazonaws.com/blue-surf-20.jpg" /></div>
                                        {/* <div className="splash-pic"><img src="https://finterest-project-dev.s3.us-west-1.amazonaws.com/blue-surf-21.jpg" /></div> */}
                                    </div>
                                </div>

                                <div className="grid">
                                    <div className="splash-col animate-before">
                                        <div className="splash-pic"><img src="https://finterest-project-dev.s3.us-west-1.amazonaws.com/fin-1.jpeg" /></div>
                                        <div className="splash-pic"><img src="https://finterest-project-dev.s3.us-west-1.amazonaws.com/fin-2.jpeg" /></div>
                                        {/* <div className="splash-pic"><img src="https://finterest-project-dev.s3.us-west-1.amazonaws.com/fin-3.jpeg" /></div> */}
                                    </div>
                                    <div className="splash-col animate-before">
                                        <div className="splash-pic"><img src="https://finterest-project-dev.s3.us-west-1.amazonaws.com/fin-4.png" /></div>
                                        <div className="splash-pic"><img src="https://finterest-project-dev.s3.us-west-1.amazonaws.com/fin-5.jpeg" /></div>
                                        {/* <div className="splash-pic"><img src="https://finterest-project-dev.s3.us-west-1.amazonaws.com/fin-6.jpeg" /></div> */}
                                    </div>
                                    <div className="splash-col animate-before">
                                        <div className="splash-pic"><img src="https://finterest-project-dev.s3.us-west-1.amazonaws.com/fin-7.jpg" /></div>
                                        <div className="splash-pic"><img src="https://finterest-project-dev.s3.us-west-1.amazonaws.com/fin-8.jpg" /></div>
                                        {/* <div className="splash-pic"><img src="https://finterest-project-dev.s3.us-west-1.amazonaws.com/fin-9.jpg" /></div> */}
                                    </div>
                                    <div className="splash-col animate-before">
                                        <div className="splash-pic"><img src="https://finterest-project-dev.s3.us-west-1.amazonaws.com/fin-10.jpg" /></div>
                                        <div className="splash-pic"><img src="https://finterest-project-dev.s3.us-west-1.amazonaws.com/fin-11.jpg" /></div>
                                        {/* <div className="splash-pic"><img src="https://finterest-project-dev.s3.us-west-1.amazonaws.com/fin-12.jpeg" /></div> */}
                                    </div>
                                    <div className="splash-col animate-before">
                                        <div className="splash-pic"><img src="https://finterest-project-dev.s3.us-west-1.amazonaws.com/fin-13.jpg" /></div>
                                        <div className="splash-pic"><img src="https://finterest-project-dev.s3.us-west-1.amazonaws.com/fin-14.jpeg" /></div>
                                        {/* <div className="splash-pic"><img src="https://finterest-project-dev.s3.us-west-1.amazonaws.com/fin-15.jpg" /></div> */}
                                    </div>
                                    <div className="splash-col animate-before">
                                        <div className="splash-pic"><img src="https://finterest-project-dev.s3.us-west-1.amazonaws.com/fin-16.jpg" /></div>
                                        <div className="splash-pic"><img src="https://finterest-project-dev.s3.us-west-1.amazonaws.com/fin-17.jpg" /></div>
                                        {/* <div className="splash-pic"><img src="https://finterest-project-dev.s3.us-west-1.amazonaws.com/fin-18.jpg" /></div> */}
                                    </div>
                                    <div className="splash-col animate-before">
                                        <div className="splash-pic"><img src="https://finterest-project-dev.s3.us-west-1.amazonaws.com/fin-19.jpg" /></div>
                                        <div className="splash-pic"><img src="https://finterest-project-dev.s3.us-west-1.amazonaws.com/fin-20.jpeg" /></div>
                                        {/* <div className="splash-pic"><img src="https://finterest-project-dev.s3.us-west-1.amazonaws.com/fin-21.jpeg" /></div> */}
                                    </div>
                                </div>

                                <div className="grid">
                                    <div className="splash-col animate-before">
                                        <div className="splash-pic"><img src="https://finterest-project-dev.s3.us-west-1.amazonaws.com/green-plant-1.jpg" /></div>
                                        <div className="splash-pic"><img src="https://finterest-project-dev.s3.us-west-1.amazonaws.com/green-plant-2.jpg" /></div>
                                    </div>
                                    <div className="splash-col animate-before">
                                        <div className="splash-pic"><img src="https://finterest-project-dev.s3.us-west-1.amazonaws.com/green-plant-3.jpg" /></div>
                                        <div className="splash-pic"><img src="https://finterest-project-dev.s3.us-west-1.amazonaws.com/green-plant-4.jpg" /></div>
                                    </div>
                                    <div className="splash-col animate-before">
                                        <div className="splash-pic"><img src="https://finterest-project-dev.s3.us-west-1.amazonaws.com/green-plant-5.jpg" /></div>
                                        <div className="splash-pic"><img src="https://finterest-project-dev.s3.us-west-1.amazonaws.com/green-plant-6.jpg" /></div>
                                    </div>
                                    <div className="splash-col animate-before">
                                        <div className="splash-pic"><img src="https://finterest-project-dev.s3.us-west-1.amazonaws.com/green-plant-7.jpg" /></div>
                                        <div className="splash-pic"><img src="https://finterest-project-dev.s3.us-west-1.amazonaws.com/green-plant-8.jpg" /></div>
                                    </div>
                                    <div className="splash-col animate-before">
                                        <div className="splash-pic"><img src="https://finterest-project-dev.s3.us-west-1.amazonaws.com/green-plant-9.jpg" /></div>
                                        <div className="splash-pic"><img src="https://finterest-project-dev.s3.us-west-1.amazonaws.com/green-plant-10.jpg" /></div>
                                    </div>
                                    <div className="splash-col animate-before">
                                        <div className="splash-pic"><img src="https://finterest-project-dev.s3.us-west-1.amazonaws.com/green-plant-11.jpg" /></div>
                                        <div className="splash-pic"><img src="https://finterest-project-dev.s3.us-west-1.amazonaws.com/green-plant-12.jpg" /></div>
                                    </div>
                                    <div className="splash-col animate-before">
                                        <div className="splash-pic"><img src="https://finterest-project-dev.s3.us-west-1.amazonaws.com/green-plant-13.jpg" /></div>
                                        <div className="splash-pic"><img src="https://finterest-project-dev.s3.us-west-1.amazonaws.com/green-plant-14.jpg" /></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    {/* End home text inspiration section */}

                    <section className="second-page">
                        <div className="left-half">

                        </div>
                        <div className="right-half">
                            <div className="splash-text-container">
                                <h1>Search for an idea and the ones you like</h1>
                                <div>What are you interested in? Search for something like "surf spots" and see what you find.</div>
                            </div>
                        </div>
                    </section>

                    <section className="third-page">
                        <div className="left-half">
                            <div>Sign up to get your ideas</div>
                        </div>
                        <div className="right-half"><SignupFormContainer /></div>
                    </section>

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