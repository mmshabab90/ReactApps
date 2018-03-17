import React,{Component} from 'react';

class Header extends Component{

    constructor(props){
        super(props);

        //create state inside the constructor
        this.state = {
            title: 'The keywords are: ',
            keywords: ''
        }

    }

    inputChange(event){
        this.setState({keywords:event.target.value})
        this.props.newsSearch(event.target.value)
    }
    
    render(){
        return(
            <header>
                <div className = "logo">Logo</div>
                <input onChange = {this.inputChange.bind(this)} placeholder = "Search"/>
                
            </header>
        )
    }
}

export default Header;