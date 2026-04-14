import { Component} from 'react';
import check from './check.jpg'

export class ToDoList extends Component {
    state = {
        userInput: "",
        ToDoList: []

    }

    onChangeEvent (e) {
        this.setState ({userInput:e})
    }

    addItem(input){
        if (input ==="") {
            alert ("Please enter an item")
        }
        else{
        let ListArray = this.state.ToDoList;
        ListArray.push(input);
        this.setState ({toDoList:ListArray, userInput:''})
        }
    }

    deleteItem (){
        let ListArray = this.state.ToDoList;
        ListArray = [];
        this.setState ({ToDoList:ListArray})
    }

    crossedWord (event){
        const li = event.target;
        li.classList.toggle('crossed');
    }
    onFormSubmit (e) {
        e.preventDefault();
    }
    render () {
        return(
            <div>
                <form onSubmit={this.onFormSubmit}>
                <div className='container' >
                    <input type="text" 
                    placeholder="What is your plan for today?"
                    onChange= {(e) => {this.onChangeEvent (e.target.value)}}
                    value={this.state.userInput} />
                </div>

                <div className='container'>
                    <button onClick ={()=> this.addItem(this.state.userInput)} className='btn add'>Add</button>
                </div>
                <ul>
                    {this.state.ToDoList.map((item,index) =>(
                        <li onClick={this.crossedWord} key={index}>
                            <img src={check} width="40px" alt="check" />
                            {item}
                        </li>
                    ))}
                </ul>
                <div className='container'>
                <button onClick = {()=> this.deleteItem ()} className='btn delete'>Delete</button>
                </div>
                </form>
            </div>
        )
    }
}