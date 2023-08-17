// Style your elements here

import styled from 'styled-components'

export const CreditCardApp = styled.div`
  display: flex;
  flex-direction: row;
  height: 100vh;
`
export const CreditCardContainer = styled.div`
  background-color: #3b4b69;
  width: 50%;
  padding: 30px;
  display: flex;
  flex-direction: column;
  height: 100%;
`

export const CreditCardHeading = styled.h1`
  color: #ffffff;
  text-align: center;
  margin-bottom: 30%;
  text-decoration: underline;
  font-size: 28px;
  font-family: 'Roboto';
`

export const CardContentContainer = styled.div`
  background-image: url('https://assets.ccbp.in/frontend/hooks/credit-card-bg.png');
  padding: 20px;
  height: 50%;
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding-left: 50px;
`

export const NumberText = styled.p`
  font-size: 23px;
  font-family: 'Roboto';
  color: #ffffff;
`

export const CardNameText = styled.p`
  color: #c3cad9;
  font-family: 'Roboto';
  font-size: 17px;
`

export const NameText = styled.p`
  color: #ffffff;
  font-family: 'Roboto';
  font-size: 15px;
  margin-top: 0px;
`

export const PaymentContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 50%;
`

export const PaymentCard = styled.div`
  box-shadow: 0px 0px 2px 2px #d3d9e0;
  padding: 40px;
  border-radius: 8px;
`

export const PaymentHeading = styled.h1`
  font-size: 18px;
  font-family: 'Roboto';
  text-align: center;
  margin-bottom: 30px;
`
export const NumberInput = styled.input`
  height: 35px;
  width: 250px;
  margin-bottom: 20px;
  margin-top: 30px;
`
export const NameInput = styled.input`
  height: 35px;
  width: 250px;
  margin-bottom: 20px;
`
