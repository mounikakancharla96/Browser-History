import './index.css'

const BrowserTodo = props => {
  const {browserDetails, deleteTodo} = props

  const {id, timeAccessed, logoUrl, title, domainUrl} = browserDetails

  const onDelete = () => {
    deleteTodo(id)
  }

  return (
    <li className="todos">
      <div className="sequence">
        <p className="para">{timeAccessed}</p>
        <img src={logoUrl} alt="domain logo" className="image" />
        <p className="para">{title}</p>
        <p className="domain">{domainUrl}</p>
      </div>
      <div>
        <button type="button" className="button" testid="delete" onClick={onDelete}>
          <img
            src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
            alt="delete"
            className="delete-icon"
          />
        </button>
      </div>
    </li>
  )
}

export default BrowserTodo
