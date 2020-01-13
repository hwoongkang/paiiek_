import React, { Component } from 'react'
import './AddDesign.css'


class AddDesign extends Component {
    constructor(props){
        super(props);
        this.state = {
            categoryId: -1,
            projectName: "",
            figureName: ""
        }
    }
    onSubmit = (event) =>{
        event.preventDefault();
        console.log(this.state)
        fetch('/api/designs/add', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(this.state)
        })
    }
    handleChange = (event) =>{
        this.setState({value: event.target.value})
    }
    render() {
        return (
            
                <form onSubmit = {this.onSubmit}>
                    <select name="category" value={this.state.categoryId} onChange={(event) => {this.setState({categoryId:event.target.value*1})}}>
                        <option value = "-1">select category</option>
                        <option value = "1">band nah</option>
                        <option value = "2">others</option>
                    </select>
                <input
                    type="text"
                    value={this.state.projectName}
                    onChange={(event)=>{
                        this.setState({projectName: event.target.value})
                    }}
                    placeholder="project name"
                />
                <input
                type="text"
                value={this.state.figureName}
                onChange={event=>{
                    this.setState({
                        figureName: event.target.value
                    })
                }}
                placeholder="figure name"
                />
                <input
                type="submit"
                value="Submit"
                
                />
                </form>
           
        )
    }
}

export default AddDesign;