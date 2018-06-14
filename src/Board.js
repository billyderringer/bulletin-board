import React, {Component} from 'react'
import Note from "./Note"
import FaPlus from 'react-icons/lib/fa/plus'

class Board extends Component{
    constructor(props) {
        super(props);
        this.state={
            notes:[]
        }
        this.eachNote = this.eachNote.bind(this)
        this.add = this.add.bind(this)
        this.update = this.update.bind(this)
        this.remove = this.remove.bind(this)
        this.nextId = this.nextId.bind(this)
    }

    eachNote(note, i){
        return(
            <Note key={note.id}
                  index={i}
                  onRemove={this.remove}
                  onChange={this.update}>
                {note.note}
            </Note>
        )
    }

    add(text){
        this.setState(prevState => ({
            notes: [
                ...prevState.notes,
                {
                    id: this.nextId(),
                    note: text
                }
            ]
        }))
    }

    nextId(){
        this.uniqueId = this.uniqueId || 0
        return this.uniqueId++
    }

    update(newText, i){
        console.log('updating item at index ', i, newText)
        this.setState(prevState => ({
            notes:prevState.notes.map(
                note => (note.id !== i) ? note : {...note, note: newText}
            )
        }))
    }

    remove(id){
        console.log('removing item at ', id)
        this.setState(prevState => ({
            notes: prevState.notes.filter(note => note.id !== id)
        }))
    }


    render(){
        return(
            <div className="board">
                <div id="add-container">
                    <button onClick={this.add.bind(null, "#MakeANote")}
                            id="add-btn">
                        Add Note <FaPlus />
                    </button>
                </div>

                <div id="note-container">
                    {this.state.notes.map(this.eachNote)}
                </div>

            </div>
        )
    }
}

export default Board