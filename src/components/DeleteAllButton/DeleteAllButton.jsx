import './DeleteAllButton.scss'

const DeleteAllButton = ({ onClick }) => {
  return (
    <button className="delete-all-button" onClick={onClick}>
      Eliminar todo
    </button>
  )
}

export default DeleteAllButton