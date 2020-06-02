import React from 'react'

export default class Form extends React.Component {
    render() {
        const newItem = this.props.value;
        return (
        <form className="app__todoform" onSubmit={(e) => this.props.addItem(e)} >
            <label for="app__input" className="app__label">Add a new Task</label>
            <input className="app__input"
                    id="app__input"
                    placeholder="Add a new task"
                    contentEditable="true"
                    value = {newItem}
                    onChange = {(e) => this.props.handleInput(e)}/>
            <button className="app__button" type="submit">+</button>
        </form>
        )}
};