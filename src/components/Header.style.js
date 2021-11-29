import styled from 'styled-components'

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: #1d1d1d;

  max-width: ${props => props.container};
  margin: 0 auto;
`
