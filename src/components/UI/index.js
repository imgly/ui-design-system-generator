import styled from 'styled-components/primitives'

export const Label = styled.Text`
  font-family: 'Roboto';
  font-size: 13px;
  letter-spacing: 0.2px;
  line-height: 22px;
  height: 20px;
  text-transform: capitalize;
  vertical-align: middle;
  display: inline-block;
  opacity: ${props => props.primary ? 1 : 0.6};
`


export const H3 = styled.Text`
  font-family: 'Roboto';
  font-size: 16px;
  color: #1B2733;
  display: inline-block;
  float: left;
  margin-bottom: 24px;
`

export const H2 = styled.Text`
  font-family: 'Roboto';
  font-size: 24px;
  color: #1B2733;
  display: inline-block;
  float: left;
  margin-bottom: 40px;
`