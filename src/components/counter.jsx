import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
class Counter extends Component {
    state = {
        count:0,
        tags: ['tag1', 'tag2', 'tag3']
      };

      styles={
          fontSize:30,
          fontWeight:'bold'
      }

    render() { 
        


        return (
            //react.fragment is a replacement of div which can be hidden in html page for clean code......................................
        <React.Fragment>
        
            <span style={this.styles} className ={this.getBadgeColors()}>{this.formatCount()}</span>
            <button style = {{fontSize:20}} className="btn btn-secondary btn-sm">Click me</button>
            <h2>Welcome to React !!!</h2>
            <ul>{this.state.tags.map(tag=> <li key={tag}>{tag}</li>)}

            </ul>

        </React.Fragment>
     );

    }
    getBadgeColors() {
        let classes = "badge m-2 badge-";
        classes += (this.state.count === 0) ? "warning" : "primary";
        return classes;
    }

formatCount(){
    // const count = this.state.count;    #can be written as below..........
    const {count} = this.state;
    return count === 0 ? 'Zero' : count;
}

}
 
export default Counter;