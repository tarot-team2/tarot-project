import './DeleteEditButton.scss'

// Props expected from parent:
// variant - 'edit' | 'delete'
// onClick - function

const DeleteEditButton = ({ variant, onClick }) => {
    return (
        <button
            className={`delete-edit-button delete-edit-button--${variant}`}
            onClick={onClick}
            aria-label={variant === 'edit' ? 'Editar' : 'Eliminar'}
        >
            {variant === 'edit' ? (
                <svg className="delete-edit-button__icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/>
                    <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/>
                </svg>
            ) : (
                <svg className="delete-edit-button__icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="18" y1="6" x2="6" y2="18"/>
                    <line x1="6" y1="6" x2="18" y2="18"/>
                </svg>
            )}
            <span className="delete-edit-button__label">
                {variant === 'edit' ? 'Editar' : 'Eliminar'}
            </span>
        </button>
    )
}

export default DeleteEditButton