import React from 'react'
import {motion} from 'framer-motion' 
import {animationTwo} from '../Animations/Animations'

function ReviewSentiment(props) {
    return (
        <motion.div
            initial='out' 
            animate='in'
            exit='out' 
            variants={animationTwo}
        >
            <div className="container" style={{marginLeft:'30%',fontFamily:'cursive'}}>
                <h2>input text : {props.location.state.text}</h2>
                <br/>
                <h2>text classified as : {props.location.state.sentiment}</h2>
            </div>
        </motion.div>
    )
}

export default ReviewSentiment
