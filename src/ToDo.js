import React, {Component} from 'react';

class ToDo extends Component {
    constructor() {
        super();

        this.state = {
            todos: [
                {content: "todo 1", id: 1},
                {content: "todo 2", id: 2},
                {content: "todo 3", id: 3},
                {content: "todo 4", id: 4},
            ],
            t: ""
        };
        this.todoChange = this.todoChange.bind(this);
        this.addToList = this.addToList.bind(this);
        this.removeItem = this.removeItem.bind(this);
    }

    // componentWillMount
    // componentDidMount
    // shouldComponentUpdate
    // componentWillUpdate
    // componentWillReceiveProps
    // componentDidUpdate
    // componentWillUnmount

    todoChange(e) {
        this.setState({t: e.target.value})
    }

    addToList() {
        let n = this.state.todos.slice();
        n.push({content: this.state.t, id: this.getRandomInt()})
        this.setState({todos: n, t: ""});
    }

    getRandomInt() {
        return Math.floor(Math.random() * Math.floor(1000000000));
    }

    removeItem(e) {
        let nl = this.state.todos.filter((v, i) => {
            return parseInt(e.target.name) !== v.id;
        });

        console.log(nl);

        this.setState({todos: nl});
    }

    render(){
        return(
            <div>
                <ToDoForm value={this.state.t} change={this.todoChange} add={this.addToList}/>
                <ToDoList todos={this.state.todos} remove={this.removeItem}/>
            </div>
        );
    }
}

class ToDoForm extends Component {
    constructor() {
        super();
    }
    render() {
        return (
            <div>
                <input value={this.props.value} onChange={this.props.change} />
                <button onClick={this.props.add}>Add to list</button>
            </div>
        );
    }
}

class ToDoList extends Component {
    constructor(){
        super();
    }
    render() {
        return (
            <ul>
                {this.props.todos.map((v) => <ToDoItem todo={v.content} key={v.id} item={v.id} remove={this.props.remove} />)}
            </ul>
        );
    }
}

class ToDoItem extends Component {
    render() {
        return (
            <li>
                {this.props.todo} 
                <button name={this.props.item} onClick={this.props.remove} >&times;</button>
            </li>
        )
    }
}

export default ToDo;