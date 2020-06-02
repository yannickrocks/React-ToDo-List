import React from 'react';
import {ReactComponent as TrashCan} from './assets/trash-can.svg';
import {ReactComponent as CheckBox} from './assets/checkbox.svg';
import {ReactComponent as Done} from './assets/done.svg';

export default class ListItems extends React.Component {

    render() {
        const items = this.props.items;
        const listItems = items.map(item => 
            {
                let checkBoxImage;
                if(item.strike === "") {
                    checkBoxImage = <CheckBox className="app__icon app__icon--checkbox" 
                                    alt="Unticked Square" tabIndex="0"
                                    onKeyPress={() => this.props.changeImage(item, item.key)}
                                    onClick={() => this.props.changeImage(item, item.key)} />
                }
                else {
                    checkBoxImage = <Done className="app__icon app__icon--checkbox" 
                                    alt="Ticked Square" tabIndex="0"
                                    onKeyPress={() => this.props.changeImage(item, item.key)}
                                    onClick={() => this.props.changeImage(item, item.key)} />
                }
                return( 
                        <li className="app__item" key={item.key}>
                            <div className="app__checkboxinput">
                                {checkBoxImage}
                                <div className={"app__iteminput " + item.strike } 
                                        contentEditable="true"
                                        suppressContentEditableWarning="true"
                                        type="text" 
                                        id={item.text} 
                                        onChange={(e) => {
                                            this.props.setUpdate(e.target.value, item.key)
                                        }}>{item.text}</div>
                            </div>
                            <TrashCan className="app__icon app__icon--trashcan" 
                                        alt="Trash Can Icon" tabIndex="0"
                                        onKeyPress = { () => this.props.deleteItem(item.key)}
                                        onClick = { () => this.props.deleteItem(item.key)} />
                        </li>
                        )
            })
            
        return(
            <ul className="app__list" >{listItems}</ul>
        );
    }
}