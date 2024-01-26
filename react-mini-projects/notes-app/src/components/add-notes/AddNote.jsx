import './AddNote.css'

const AddNote = () => {
    return (
        <div className="add-note">
            <h1>Add New Note</h1>
            <div className='input-wrapper'>
                <input type="text"  placeholder='Add Note'/>
                <input type="submit" value="Add New Note" />
            </div>
            <div className='notes-img'></div>
            
        </div>
    )
}
export default AddNote;