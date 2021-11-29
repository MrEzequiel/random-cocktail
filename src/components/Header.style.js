import styled from 'styled-components'

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 40px;
  flex-wrap: wrap;

  max-width: ${props => props.container};
  margin: 0 auto;
  padding: 30px 0;
`

export const ButtonHeader = styled.button`
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  padding: 15px 0;
  width: 160px;
  border: 1px solid #f7f7f7;

  font-size: 2.4rem;

  img {
    width: 20px;
    height: 20px;
  }
`
