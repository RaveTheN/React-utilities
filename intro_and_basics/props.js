import React from "react";

export class Welcome extends React.Component {
    render() {
        return <h2>Hello, {this.props.name}</h2>//props stands for properties, e lo uso ogni volta che voglio
    }                                           //instanziare una proprietà del componente che sto scrivendo
}

//props are applied from parents to children

//then in the app.js file i would write <Welcome name="Peppe" />, passing the prop as a string
//if I wanted to pass the prop as somehting other than a string I would need to use {}
//e.g. age={21}
//a prop within a component cannot be modified by the component itself, is unmutable