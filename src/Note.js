import React, {Component} from 'react'
import FaPencil from 'react-icons/lib/fa/pencil'
import FaTrash from 'react-icons/lib/fa/trash'
import FaFloppyO from 'react-icons/lib/fa/floppy-o'

class Note extends Component{
    constructor(props) {
        super(props);
        this.state={
            editing:false
        }

        this.renderForm = this.renderForm.bind(this)
        this.renderDisplay = this.renderDisplay.bind(this)
        this.save = this.save.bind(this)
        this.edit = this.edit.bind(this)
        this.remove = this.remove.bind(this)
    }

    save(e){
        e.preventDefault()
        this.props.onChange(this._newText.value, this.props.index)
        this.setState({
            editing:false
        })
    }

    edit(){
        this.setState({
            editing:true
        })
    }

    remove(){
        this.props.onRemove(this.props.index)
    }

    renderForm(){
        return(
            <div className="note">
                <form onSubmit={this.save}>
                    <textarea name="edit-form"
                              id="edit-form"
                              defaultValue={this.props.children}
                              ref={input => this._newText = input}
                              cols="1"
                              rows="3" />
                    <span className="btn-row">
                        <button onClick={this.save}
                                id="save">
                            <FaFloppyO />
                        </button>
                     </span>
                </form>
            </div>
        )
    }

    renderDisplay(){
        return(
            <div className="note drop-shadow lifted">
                <p>{this.props.children}</p>
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