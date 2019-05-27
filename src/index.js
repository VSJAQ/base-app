import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class Pikcha extends React.Component {
    render() {
        return (
            <div className="Telo">
                <div className="Header">
                <img class="first" src={"https://media.wired.com/photos/5a970eb4927dc94e67685b0e/master/pass/matterhorn-802950172.jpg"} alt="Аватар" />
                <h1>Images</h1>
                </div>
            <div className="Section">
            <div className="Section-head">
            <h2>Mountains</h2>
            <button className="Button">delete</button>
            </div>
            <img class="Second" src={"https://cdn-image.travelandleisure.com/sites/default/files/styles/1600x1000/public/1507062474/hotel-everest-namche-nepal-mountain-lodge-MOUNTAIN1017.jpg?itok=g-S4SL9n"} alt="Картинка" />
            </div>
        </div>
        )
    }
}



ReactDOM.render(
<Pikcha/>,
    document.getElementById('root')
);
