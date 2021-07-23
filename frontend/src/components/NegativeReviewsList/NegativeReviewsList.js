import React from 'react'
import {motion} from 'framer-motion' 
import {animationTwo} from '../Animations/Animations'

function NegativeReviewsList(props) {
    return (
        <motion.div
            initial='out' 
            animate='in'
            exit='out' 
            variants={animationTwo}
        >
            <h2 style={{marginLeft:'20%',marginTop:'1%'}}>Negative Reviews</h2>
            <div>
                <ol style={{marginLeft:"3%",
                            marginRight:"3%",
                            marginTop:"2%",
                            marginBottom:"3%",
                            fontFamily:"cursive",
                            }}>
                    {
                        props.location.ReviewProps.negativeList.map(function(review){
                            return <><li>{review}</li><br/></>
                        })
                    }
                </ol>
            </div>
        </motion.div>
    )
}

export default NegativeReviewsList
