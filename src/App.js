import {HashRouter} from 'react-router-dom';
import styled from 'styled-components';
import Routers from './routs/Routers';
import SideBars from './sidebar/SideBar';

function App() {
  return (
    <HashRouter>
    <Div>
      <SideBars/>
      <Routers/>
    </Div>
    </HashRouter>
  );
}

export default App;

const Div = styled.div`
  display: flex;
`
