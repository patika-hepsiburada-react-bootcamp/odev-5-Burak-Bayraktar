import '../styles.scss'

const ToDoInput = () => {
    return (
        <div className="to-do-input-wrapper">
            <input className="mark-all-button" type="button" value="✓" />
            <input className="text" type="text" placeholder="What needs to be done?" />
        </div>
    )
}

export default ToDoInput
