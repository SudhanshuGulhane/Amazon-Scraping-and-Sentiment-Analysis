import React from 'react'
import {Link} from "react-router-dom";
import "./LinkSentiment.css";
import {motion} from 'framer-motion' 
import {animationThree} from '../Animations/Animations'

function LinkSentiment(props) {
    return (
        <motion.div
            initial='out'
            animate='end'
            exit='out'
            variants={animationThree}>
            <div className="container">
                <div className="row">
                    <div className="col-sm">
                    <Link className="link_class" to={{
                            pathname:'/sentimentbylink/positivereviews',
                            ReviewProps:{
                                positiveList:props.location.state.positiveList
                            }
                        }}>View Positive Reviews</Link>
                    </div>
                    <div className="col-sm">
                        <Link className="link_class" to={{
                            pathname:'/sentimentbylink/negativereviews',
                            ReviewProps:{
                                negativeList:props.location.state.negativeList
                            }
                        }}>View Negative Reviews</Link>
                    </div>
                    <div className="col-sm">
                        <Link className="link_class" to={{
                            pathname:'/sentimentbylink/graph',
                            ReviewsData:{
                                labels:['Positive','Negative'],
                                datasets:[
                                    {
                                        label:'Reviews',
                                        data:[
                                            Object.keys(props.location.state.positiveList).length,
                                            Object.keys(props.location.state.negativeList).length
                                        ],
                                        backgroundColor:[
                                            'rgba(69, 209, 41, 0.86)',
                                            'rgba(239, 26, 26, 0.78)'
                                        ],
                                        borderWidth:5,
                                    }
                                ]
                            }
                        }}>View Graph</Link>
                    </div>
                </div>
            </div>
        </motion.div>
    )
}

export default LinkSentiment
