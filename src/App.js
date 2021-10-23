import Footer from './components/Footer/Footer';
import Heading from './components/Heading/Heading';
import QuizContainer from './components/QuizContainer/QuizContainer';
import './App.scss';

function App() {
  return (
    <div className="App">
      {/* Heading */}
      <Heading />

      {/* Quiz Block */}
      <QuizContainer />

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
