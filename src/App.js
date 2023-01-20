import { Generator } from './components/Generator/Generator';
import './index.css'
function App() {
  return (
    <div className='bg-gray-100 w-screen h-screen flex flex-col items-center justify-center'>
      <Generator title={"Password Generator"}></Generator>
    </div>
  );
}

export default App;
