import React from 'react';
import CheckBox from './assets/checkbox.svg';
import Done from './assets/done.svg';
import ListItems from './ListItems.js'
import Form from './Form.js'

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      items: [],
      currentItem: {
        text:'',
        key: '',
        checked: false,
        img: CheckBox,
        strike: ""
      }
    }
    this.handleInput = this.handleInput.bind(this);
    this.addItem = this.addItem.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
    this.changeImage = this.changeImage.bind(this);
    this.setUpdate = this.setUpdate.bind(this);
  }

  handleInput(e) {
    this.setState({
      currentItem:{
        text: e.target.value,
        key: Date.now(),
        checked: false,
        img: CheckBox,
        strike: ""
      }
    })
  };

  addItem(e){
    e.preventDefault();
    const newItem = this.state.currentItem;
    if(newItem.text !== "") {
      const newItems=[newItem,...this.state.items];
      this.setState({
        items:newItems,
        currentItem: {
          text:'',
          key:'',
          checked: false,
          img: CheckBox,
          strike: ""
        }
      })
    }
  };

  deleteItem(key){
    const filteredItems = this.state.items.filter(item => item.key !== key);
    this.setState({
      items:filteredItems
    })
  };

  changeImage(item, key){
    const itemIndex = this.state.items.findIndex(item => item.key === key)
    let newItems = [...this.state.items];
    const newItemImage = this.state.items.find(item => item.key === key);
    if(newItemImage.checked) {
      newItemImage.checked = false;
      newItemImage.img = CheckBox;
      newItemImage.strike = ""
    }
    else {
      newItemImage.checked = true;
      newItemImage.img = Done
      newItemImage.strike = "app__iteminput--strikethrough"
    }
    console.log(newItemImage);

    newItems[itemIndex] = newItemImage;
      this.setState({
        items: newItems
    })
  }

  setUpdate(text, key){
    const items = this.state.items;
    items.filter(item => item.key === key)
    .map(item =>  item.text=text )

    this.setState({
      items:items
    })
  }


  render(){
    return(
     <div className="app">
        <Form addItem = {this.addItem}
              handleInput = {this.handleInput}
              value = {this.state.currentItem.text}
          />
        <ListItems items = {this.state.items}
          deleteItem = {this.deleteItem}
          changeImage = {this.changeImage}
          setUpdate ={this.setUpdate}  />
     </div>
    );
  }
};

export default App;
