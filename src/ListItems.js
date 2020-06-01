import React from 'react';
import './styles/ListItems.css';
import TrashCan from './assets/trash-can.svg';

class ListItems extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const items = this.props.items;
        const listItems = items.map(item => 
            {
                return <div className="list" key={item.key}>
                        <p className="itemText"> 
                         <img className="checkBox" 
                            src={item.img}
                            onClick={() => this.props.changeImage(item, item.key)} />
                         <input className="textInput" 
                                type="text" 
                                id={item.text} 
                                value={item.text}
                                onChange={(e) => {
                                    this.props.setUpdate(e.target.value, item.key)
                                }}
                                />                          
                        <span>
                            <img className="trashCan"
                                src={TrashCan}
                                onClick = { () => this.props.deleteItem(item.key)} />
                            </span>
                        </p>
                </div>
            })
        return(
            <div>{listItems}</div>
        );
    }
}

export default ListItems;