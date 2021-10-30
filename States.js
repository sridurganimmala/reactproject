import React, { Component } from 'react'

export default class States extends Component {
    constructor(props){
        super(props)

        this.state={
            name:"sri Durga"
        }
    }
    render() {

        setTimeout(()=>{
            this.setState({name:"sri Durga Nimmala"})
        },1000)
        return (
            <div>
                <h1>
                    {this.state.name}
                </h1>
                
            </div>
        )
    }
}
