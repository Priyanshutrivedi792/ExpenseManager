import React from 'react'
import styled from 'styled-components';
import { useGlobalContext } from '../../context/globalcontext';
import Form from '../Form/Form';
import IncomeItem from '../IncomeItem/IncomeItem';

const Incomes = () => {
  const {addIncome}= useGlobalContext()
  return (
    <IncomeStyled>
      <InnerLayout>
        <h1>Incomes</h1>
        <div className="income-content">
          <div className="form-container">
            <Form/>
          </div>
          <div className="incomes">
            {Incomes.map((income)=>{
              const {id,title, amount, date, category, description} = income;
              return <IncomeItem key={_id}
              id={_id} 
              title={title} 
              description={description} 
              amount={amount} 
              date={date} 
              type={type}
              category={category} 
              indicatorColor="var(--color-green)"
              deleteItem={deleteIncome}></IncomeItem>
            })}
          </div>
        </div>
      </InnerLayout>
    </IncomeStyled>
  )
}
const IncomeStyled = styled.div`

`;
const InnerLayout = styled.div`

`;
export default Incomes