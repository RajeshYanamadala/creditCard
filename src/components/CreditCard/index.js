import {useState} from 'react'
import {
  CreditCardApp,
  CreditCardContainer,
  CreditCardHeading,
  CardContentContainer,
  NumberText,
  CardNameText,
  NameText,
  PaymentContainer,
  PaymentHeading,
  NumberInput,
  NameInput,
  PaymentCard,
} from './styledComponents'

const CreditCard = () => {
  const [number, setNumber] = useState('')
  const [cardName, setCardName] = useState('')

  const onChangeNumberInput = event => {
    setNumber(event.target.value)
  }

  const onChangeNameInput = event => {
    setCardName(event.target.value)
  }

  return (
    <CreditCardApp>
      <CreditCardContainer>
        <CreditCardHeading>CREDIT CARD</CreditCardHeading>
        <CardContentContainer data-testid="creditCard">
          <NumberText>{number}</NumberText>
          <CardNameText>CARDHOLDER NAME</CardNameText>
          <NameText>{cardName}</NameText>
        </CardContentContainer>
      </CreditCardContainer>
      <PaymentContainer>
        <PaymentCard>
          <PaymentHeading>Payment Method</PaymentHeading>
          <NumberInput
            type="text"
            placeholder=" Card Number"
            onChange={onChangeNumberInput}
          />
          <br />
          <NameInput
            type="text"
            placeholder="Cardholder Name"
            onChange={onChangeNameInput}
          />
        </PaymentCard>
      </PaymentContainer>
    </CreditCardApp>
  )
}

export default CreditCard
