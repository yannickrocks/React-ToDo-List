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
                if(item.checked){
                    checkBoxImage = <Done className="app__tickedbox" 
                        alt="Ticked Square"
                    onClick={() => this.props.changeImage(item, item.key)} />
                }
                else{
                    checkBoxImage = <CheckBox className="app__untickedbox" alt="Unticked Square"
                                onClick={() => this.props.changeImage(item, item.key)} />
                }
                return( 
                        <li className="app__item" key={item.key}>
                            <div className="app__checkboxinput">
                                {checkBoxImage}
                                <div className="app__iteminput" 
                                        contentEditable="true"                                        
                                        type="text" 
                                        id={item.text} 
                                        onChange={(e) => {
                                            this.props.setUpdate(e.target.value, item.key)
                                        }}>{item.text}</div>
                            </div>
                            <TrashCan className="app__trashcan" alt="Trash Can Icon"
                                        onClick = { () => this.props.deleteItem(item.key)} />
                        </li>
                        )
            })
            
        return(
            <ul className="app__list" >{listItems}</ul>
        );
    }
}