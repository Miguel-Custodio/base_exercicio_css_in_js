import styled from 'styled-components'
import { colors } from '../../styles'

export const Vaga = styled.div`
  border: 1px solid ${colors.corPrincipal};
  background-color: ${colors.corSecundaria};
  color: ${colors.corPrincipal};
  padding: 16px;
  transition: all ease 0.3s;
  border-radius: 8px;

  &:hover {
    background-color: ${colors.corPrincipal};
    color: ${colors.corSecundaria};
  }
`

export const VagaTitulo = styled.div`
  font-weight: bold;
  margin-bottom: 16px;
`

export const VagaLink = styled.a`
  border-color: ${colors.corSecundaria};
  background-color: ${colors.corPrincipal};
  color: ${colors.corSecundaria};
  display: inline-block;
  padding: 8px 16px;
  text-decoration: none;
  margin-top: 16px;
  font-weight: bold;
  font-size: 14px;
  border-radius: 8px;
  text-align: center;

  @media (max-width: 768px) {
    display: block;
  }

  &:hover {
    border-color: ${colors.corPrincipal};
    background-color: ${colors.corSecundaria};
    color: ${colors.corPrincipal};
  }
`
