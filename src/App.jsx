import Navbar from './components/navbar';
import FirstPage from './pages/firstpage/firstpage';
import SecondPage from './pages/secondpage/secondpage';
import ProjectPage from './pages/projectpages/projectpage';
import ContactMePage from './pages/contactpage/contactpage';

function App() {
  return (
    <>
    <div className="app">
      <Navbar />
      <FirstPage />
      <SecondPage />
      <ProjectPage />
      <ContactMePage />
    </div>
    </>
  );
}

export default App;