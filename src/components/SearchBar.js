import React from 'react';

class SearchBar extends React.Component{
    state={term : ''};

    onFormSubmit=(event)=>{
        event.preventDefault();
        this.props.onSubmit (this.state.term)
    }

    render(){
        return (
        <div className="ui segment" style={{margin:"20px", background:"transparent"}}>
            <form onSubmit={this.onFormSubmit} className="ui form">
                <div className="field">
                    <label style={{textAlign:"center",textShadow:"2px 2px #ff616f", color:"#ff1744",height:"50px", fontSize:"40px", margin:"10px"}}>WEATHER DETAILS</label>
                <input type ="text" placeholder="Enter your city" value={this.state.term} onChange = {(e) => this.setState ({term: e.target.value}) }/>
               
                </div>
            </form>

        </div>
        );
    }
}

export default SearchBar;