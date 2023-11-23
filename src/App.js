import './App.css';
import Penguin from './components/penguin';
import Flamingo from './components/syrine';
import Marine from './components/marine';
function App() {
  return (
   <div>
    <nav>
        <a href="#home">Home</a>
        <a href="#work">Feautures</a>
        <a href="#info">Pricing</a>
     

     </nav>
    <div className='mohamed'>
      <h1>Featured Articles</h1>
    </div>

    <div className='mohamed'>
      <Flamingo/>
      <Penguin/>
      <Marine/>
    </div>
    </div>
  )
}
  export default App 