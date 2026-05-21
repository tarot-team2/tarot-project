import './SaveLectureForm.scss';

function SaveLectureForm() {
  return (
    <section className="save-lecture">
      <h3 className="save-lecture__title">Guardar lectura</h3>

      <form className="save-lecture__form">
        <input
          type="text"
          placeholder="Tu nombre..."
          className="save-lecture__input"
        />

        <button
          type="submit"
          className="save-lecture__button"
        >
          Guardar
        </button>
      </form>
    </section>
  );
}

export default SaveLectureForm;
