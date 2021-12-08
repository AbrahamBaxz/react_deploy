import './App.css';
import MainCanvas from './components/Canvas';
import store from './Redux/Store';
import { Provider } from 'react-redux';

import CanvasTool from './components/CanvasTool';
import Konva from './components/Konva';

function App() {
  return (
    <Provider store={store}>
      <CanvasTool />
      <MainCanvas />
      <Konva />
    </Provider>
  );
}
// Finish Design Redux
export default App;
