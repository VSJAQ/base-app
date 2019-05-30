import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Item from "./Item";
import items from "./Items";

class Root extends React.Component {
    state = {
        items: items
    };

    removeItem = (id) => {
        this.setState( ({items}) => ({
            items: items.filter(el => el.id !== id)
        }))
    };

    addItem = (id) => {
        this.setState(({items}) => ({
            items: items.map(el => el.id = id+1)
        }))
    };


    render() {
        const {items} = this.state;
        return (
            <div className="Telo">
            <div className="Header">
            <img className="first"
        src={"https://media.wired.com/photos/5a970eb4927dc94e67685b0e/master/pass/matterhorn-802950172.jpg"}
        alt="Аватар"/>
            <h1>Images</h1>
            </div>
            <div className="Add-Section">
            <button className="Add-Button" onClick={() => this.addItem}>Add</button>
        </div>
        {items.map( el => <Item removeItem={this.removeItem} {...el}/>)}
            </div>
        )
    }
}



ReactDOM.render(
    <Root/>,
    document.getElementById('root')
);
