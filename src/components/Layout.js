import React from 'react'
import Container from 'react-bootstrap/esm/Container'

export const Layout = (props) => {
  return (
    <Container>
    {props.children}
    </Container>
  )
}
