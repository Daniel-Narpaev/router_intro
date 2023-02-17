import {BrowserRouter} from 'react-router-dom';
import styled from 'styled-components';
import Modal from './components/modal/Modal';
import Routers from './routs/Routers';
import SideBars from './sidebar/SideBar';

function App() {
  return (
    <BrowserRouter>
    <Div>
      <SideBars/>
      <Routers/>
    </Div>
    </BrowserRouter>
  );
}

export default App;

const Div = styled.div`
  display: flex;
`
