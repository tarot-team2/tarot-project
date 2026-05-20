import './App.css';
import Navbar from './components/Navbar/Navbar';
import SaveLectureForm from './components/SaveLectureForm/SaveLectureForm';
import DeleteAllButton from './components/DeleteAllButton/DeleteAllButton';


function App() {


  return (
   <>
   <Navbar/>
<main>
  <SaveLectureForm/>
  <DeleteAllButton/>
</main>

   </>
  );
}

export default App
