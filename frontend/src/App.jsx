import React, { useMemo, useState } from 'react'
import styled from 'styled-components'
import Navigation from './Components/Navigation/Navigation';
import { MainLayout } from "./styles/Layouts";
import {Orb} from './Components/Orb/Orb';
import Dashboard from './Components/DashBoard/Dashboard';
import Incomes from './Components/Incomes/Incomes';
import Expenses from './Components/Expenses/Expenses';
import { useGlobalContext } from './context/globalcontext';

const App = () => {
  const [active,setActive] = useState(1)
  const global = useGlobalContext()
const displayData = () => {
  switch(active){
    case 1:
      return <Dashboard/>
    case 2 :
      return <Dashboard/>
    case 3 :
      return <Incomes/>
    case 4 : 
      return <Expenses/>
    default :
    return <Dashboard/>
  }
}

  const orbMemo = useMemo(()=>{
    return <Orb/>
  },[])
  return (
    <AppStyled  className='App'>
      {orbMemo}
      <MainLayout>
        <Navigation active={active} setActive={setActive} />
        <main>
          {displayData()}
        </main>
      </MainLayout>
    </AppStyled>
  )
}
const AppStyled = styled.div`
  height:100vh;
  background-color:#ebf6f5;
  width:100%;
  position:relative;
  main{
  flex: 1;
    background: rgba(252, 246, 249, 0.78);
    border: 3px solid #FFFFFF;
    backdrop-filter: blur(4.5px);
    border-radius: 32px;
    overflow-x: hidden;
    &::-webkit-scrollbar{
      width: 0;
    }
  }
`;

export default App