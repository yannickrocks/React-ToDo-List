import React from 'react'

export default class Form extends React.Component {
    render() {
        const newItem = this.props.value;
        return (
        <form className="app__todoform" onSubmit={(e) => this.props.addItem(e)} >
            <input className="app__input" 
                    placeholder="Add a new task"
                    contentEditable="true"
                    value = {newItem}
                    onChange = {(e) => this.props.handleInput(e)}/>
            <button className="app__button" type="submit">+</button>
        </form>
        )}
};