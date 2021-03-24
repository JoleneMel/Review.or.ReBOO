import React from 'react';


export default class Stars extends React.Component {
    //the constructor is going to take in the props 
    constructor(props) {
        super(props);

        this.handleClick = this.handleClick.bind(this);
        //that now allows us to bind handleClick to the this and we can now us it 
    }

//so this is where it is defined, ABOVE is where it is bind this and use it by name 
handleClick() {
    //this will also be changed greatly by the new terms of the business 
    console.log('got inside handleClick');
    console.log(`${this.props} is my this.props`);
    console.log(this.props);
    console.log(`${this.props.value} is my this.props.value`);
    this.props.onClick(this.props.value);

}
    render() {
        //return a JSX button, w/bootstrap 
        return(
            <button
            className="btn btn-warning"
            //w/ our method we now can use that within here 
            onClick={this.handleClick}>
           
            {/* // state will now be changed to reflect that we now have no state only props within our constructor aka state = props  
            this ensures that the state is handled thru the PARENT component*/}
            {this.props.name} 
            </button>
        );
    }
}
