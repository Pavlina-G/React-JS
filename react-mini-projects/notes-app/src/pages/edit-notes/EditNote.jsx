import React, { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
// import '../add-notes/AddNote.css'
import Button from '../../components/button/Button';

const EditNote = ({ notes, setNotes }) => {

    const navigate = useNavigate();

    const { id } = useParams();                         // String
    const note = notes.find((note) => note.id == id);
    const [name, setName] = useState(note.name)


    const handleBtnClick = (e) => {
        e.preventDefault()
        if (name) {
            const note = {
                id: Number(id),
                name
            }
            const newNotes = notes.map(n => {if (
                n.id === note.id) {
                n = note;
            }
                return n;}
            )
            setNotes(newNotes);
            setName('');
            navigate('/')
        }
    }

    return (
        <div className="add-note">
            <h1>Edit Note</h1>
            <div className='input-form-wrapper'>
                <textarea rows="4" value={name} placeholder='Add Note' onChange={(e) => setName(e.target.value)}></textarea>
                <Button text={'Save'} handleClick={handleBtnClick} />
            </div>
            <div className='notes-img'></div>

        </div>
    )
}

export default EditNote