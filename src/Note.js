import React, {Component} from 'react'
import FaPencil from 'react-icons/lib/fa/pencil'
import FaTrash from 'react-icons/lib/fa/trash'
import FaFloppyO from 'react-icons/lib/fa/floppy-o'

class Note extends Component{
    constructor(props) {
        super(props);
        this.state={
            text: '#MakeANote',
            editing:false
        }

        this.renderForm = this.renderForm.bind(this)
        this.renderDisplay = this.renderDisplay.bind(this)
        this.save = this.save.bind(this)
        this.edit = this.edit.bind(this)
        this.complete = this.complete.bind(this)
        this.remove = this.remove.bind(this)
    }

    save(){
        let newText = this._newText.value === '' ? '#MakeANote' : this._newText.value
        this.setState({
            text: newText,
            editing:false
        })
    }

    edit(){
        this.setState({
            editing:true
        })
    }

    complete(){
        alert('item completed')
    }

    remove(){
        alert('removing note')
    }

    renderForm(){
        return(
            <div className="note">
                <textarea name="edit-form"
                          id="edit-form"
                          defaultValue={this.state.text}
                          ref={input => this._newText = input}
                          cols="1"
                          rows="3" />
                <span className="btn-row">
                    <button onClick={this.save}
                            id="save">
                        <FaFloppyO />
                    </button>
                </span>
            </div>
        )
    }

    renderDisplay(){
        return(

            <div className="note">
                <p>{this.state.text}</p>
                <span className="btn-row">
                    <button id="edit"
                            onClick={this.edit}>
                        <FaPencil />
                    </button>
                    <button id="remove"
                            onClick={this.remove}>
                        <FaTrash />
                    </button>
                </span>
            </div>
        )
    }

    render(){
        return(
            this.state.editing ? this.renderForm() : this.renderDisplay()
        )
    }

}

export default Note