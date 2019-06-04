import React from "react";

class Todo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      text: ""
    };
  }
  render() {
    return (
      <div>
        <div>This is a Todo List</div>
        <TodoList items={this.state.items} />
        <form onSubmit={this.handleClick}>
          <input
            type="text"
            id="new-todo"
            value={this.state.text}
            onChange={this.handleChange}
          />
          <button>Click Me</button>
        </form>
      </div>
    );
  }
  handleClick = e => {
    e.preventDefault();
    if (!this.state.text.length) {
      return;
    }
    const newItem = {
      text: this.state.text,
      id: Date.now()
    };
    this.setState(state => ({
      items: state.items.concat(newItem),
      text: ""
    }));
    
    console.log(this.state);
  };

  handleChange = e => {
    this.setState({ text: e.target.value });
  };
}

class TodoList extends React.Component {
  render() {
    return (
      <ul>
        {this.props.items.map(item => (
          <li key={item.id}>{item.text}</li>
        ))}
      </ul>
    );
  }
}

export default Todo;
