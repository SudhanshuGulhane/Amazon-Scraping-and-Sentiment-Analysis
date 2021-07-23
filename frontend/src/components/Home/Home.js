import axios from 'axios';
import React, { Component } from 'react'
import "./Home.css"
import {motion} from 'framer-motion'
import {animationOne,Transition} from '../Animations/Animations'

export class Home extends Component {

    constructor(props){
      super(props);
      this.state = {
        fields:{
          isSub:false,
          reviewText:'',
          sentiment:'',
          reviewLink:'',
          postivearray:[],
          negativearray:[],
          isLoading:false
        }
      }
      this.onHandleChange =  this.onHandleChange.bind(this);
      this.submitReview = this.submitReview.bind(this);
      this.submitLink = this.submitLink.bind(this);
    }

    onHandleChange(e){
        let fields = this.state.fields; 
        fields[e.target.name] = e.target.value; 
        this.setState({fields});
    }

    submitReview = (event) =>{
        event.preventDefault()
            axios.get(`http://127.0.0.1:5000/sentimentbyonereview?text=${this.state.fields.reviewText}`)
            .then(res=>{
                if(res.status === 200) {
                let fields = this.state.fields; 
                fields["sentiment"]=res.data["classificationType"]
                fields["isSub"]=true
                this.setState({fields})
                this.props.history.push({
                        pathname:"/sentimentbyreview",
                        state:{
                            sentiment:this.state.fields.sentiment, 
                            text:this.state.fields.reviewText
                        }
                })
                }
            })
    }

    submitLink = (event) =>{
        event.preventDefault()
        let fields = this.state.fields
        fields["isLoading"]=true
        this.setState({fields})
        axios.get(`http://127.0.0.1:5000/sentimentbylink?link=${this.state.fields.reviewLink}`)
        .then(res=>{
            if(res.status === 200) {
                let fields = this.state.fields
                fields["postivearray"]=res.data["positive_reviews"]
                fields["negativearray"]=res.data["negative_reviews"]
                this.setState({fields})
                this.props.history.push({
                    pathname:"/sentimentbylink",
                    state:{
                        positiveList:this.state.fields.postivearray,
                        negativeList:this.state.fields.negativearray
                    }
               })
            }
        })

    }

    render() {
        return (
            <>
                {this.state.fields.isLoading ? 
                    <>
                    <img src='/spin.gif' alt="isitnecessary" style={{marginTop:'18%',marginLeft:'45%'}} />
                    <h2 style={{marginTop:'1%',marginLeft:'40%',fontFamily:'cursive'}}>Loading Data</h2>
                    </>
                    :
                    <motion.div
                        initial='out'
                        animate='in'
                        exit='out'
                        variants={animationOne}
                        transition={Transition}   
                    >
                        <div className="home">    
                            <h2 className="title">Sentimental Analysis on Amazon reviews</h2>
                            <hr style={{
                                position:"absolute",
                                left:"200px",
                                right:"150px",
                                height:"2px",
                                borderWidth:"2px",
                                borderColor:'purple'
                            }}
                            />
                            <br/>
                            <br/>
                            <form className="form-inline" id="formbylink" onSubmit={this.submitLink}>
                                <label htmlFor="reviewText" style={{fontFamily:'cursive'}}>Review Link</label>
                                <input type="text" style={{borderRadius:'10px',width:'400px',outline:'none'}} name="reviewLink" value={this.state.fields.reviewLink} onChange={this.onHandleChange} placeholder="Enter review link"  />
                                <button type="submit" style={{borderRadius:'10px',outline:'none'}}>
                                    Submit
                                </button>
                            </form>
                            <br/>
                            <form className="form-inline" id="formbyonereview" onSubmit={this.submitReview}>
                                <label htmlFor="reviewText" style={{fontFamily:'cursive'}}>Review Text</label>
                                <input type="text" style={{borderRadius:'10px',width:'400px',outline:'none'}} name="reviewText" value={this.state.fields.reviewText} onChange={this.onHandleChange} placeholder="Enter review text"  />
                                <button type="submit" style={{borderRadius:'10px',outline:'none'}}>
                                    Submit
                                </button>
                            </form>
                        </div>
                    </motion.div>
                }
            </>
        )
    }
}

export default Home
