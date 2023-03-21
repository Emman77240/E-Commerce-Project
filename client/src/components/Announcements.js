import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    height: 35px;
    background-color: black;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 14px;
    font-weight: 500;
`

const Announcements = () => {
  return (
    <Container>
      Super Deal! Free shipping on Orders Above £100
    </Container>
  )
}

export default Announcements
