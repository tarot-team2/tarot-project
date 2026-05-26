function SaveLectureForm({ title, placeholder, buttonText }) {
  return (
    <section className="save-lecture">
      <h3 className="save-lecture__title">{title}</h3>

      <form className="save-lecture__form">
        <input
          type="text"
          placeholder={placeholder}
          className="save-lecture__input"
        />

        <button
          type="submit"
          className="save-lecture__button"
        >
          {buttonText}
        </button>
      </form>
    </section>
  );
}
 export  default SaveLectureForm ;      
