import React, { Component} from 'react'
import axios from 'axios'
import Punch from './Punch'
import '../Css/Body.css'
//import ReactHtmlParser, { processNodes, convertNodeToElement, htmlparser2 } from 'react-html-parser';


class Body extends Component {
    constructor(){
        super()
        this.state={
            data: []
        }
    }

    async componentDidMount () {
        let that = this;
        axios.get("https://hacker-news.firebaseio.com/v0/topstories.json")
        .then(res=>{
            let data_id=res.data;
            let m=[]

            for(let i=0;i<12;i++){
                let y=data_id[i]
                let z=""
                z="https://hacker-news.firebaseio.com/v0/item/"+y+".json"
                axios.get(z)
                .then(response=>{
                  let  c=response.data;
                    // axios.get(c.url)
                    // .then(
                    //     res => {
                    //         c.htmlData = res;
                            
                    //     }
                    // )

                    m.push(c)
                            that.setState({ 
                                data:m
                            })
                    
                  
                })
            }
            
        });        
    }

    render(){
        if (!this.state.data || !this.state.data.length) {
            return <p>Loading</p>
        }


        return (
            <div className="body">
                <Punch/>
                <div className="articles">      
                    { this.state.data.map((data)=>(
                       <div className="box">
                           <a  target="_blank" href={data.url} className="title"><h3>{data.title}</h3></a>
                           <iframe src={data.url} allow className="frame" title={data.title}/>
                           {/* <div>{ReactHtmlParser(data.htmlData)}</div>*/}
                        </div>   
                    ))}
                </div>

            </div>
        )
    }
}
export default Body