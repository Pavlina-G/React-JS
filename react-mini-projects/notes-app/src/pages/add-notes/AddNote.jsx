import { useState } from 'react'
import './AddNote.css'
import Button from '../../components/button/Button';
import { useNavigate } from 'react-router-dom';


let num = 0;
const AddNote = ({ setNotes }) => {

    const [name, setName] = useState('');
    const navigate = useNavigate();

    function getKeyId() {
        let id = num + 1;
        num += 1;
        return id
    }

    const handleBtnClick = (e) => {
        e.preventDefault()
        if (name) {
            const note = {
                id: getKeyId(),
                name
            }

            setNotes(prevNotes => [note, ...prevNotes])
            setName('');
            navigate('/')
        }
    }

    return (
        <div className="add-note">
            <h1>Add New Note</h1>
            <div className='input-form-wrapper'>
                <textarea rows="4" value={name} placeholder='Add Note' onChange={(e) => setName(e.target.value)}></textarea>
                <Button text={'Add New Note'} handleClick={handleBtnClick} />
            </div>
            <div className='notes-img'></div>

        </div>
    )
}
export default AddNote;