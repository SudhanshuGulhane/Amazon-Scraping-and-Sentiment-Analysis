import React from 'react'
import {Bar,Pie} from 'react-chartjs-2';
import "./Graph.css"

function Graph(props) {
    return (
            <div className="graph">
                <div className="heading">
                    <h2 className="header">Reviews Anaylsis By graphs</h2>
                </div>
                <hr style={{
                        position:"absolute",
                        left:"400px",
                        right:"400px",
                        height:"2px",
                        borderWidth:"2px",
                        borderColor:'purple'
                    }}
                />
                <br/>
                <div className="chart">
                    <Pie
                        data={props.location.ReviewsData}
                        options={{
                            maintainAspectRatio:false
                        }}
                        width={50}
                        height={350}
                    />
                </div>

                <br/>

                <div className="chart">
                    <Bar
                        data={props.location.ReviewsData}
                        options={{
                            maintainAspectRatio:false,
                            borderColor:'ghostwhite',
                            plugins: {
                                legend: {
                                    labels: {
                                        font: {
                                            size: 20
                                        }
                                    }
                                }
                            }
                        }}
                        height={350}
                    />
                </div>

                <br/>
                <br/>

            </div>
    )
}

export default Graph
