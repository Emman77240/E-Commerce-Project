import styled from 'styled-components'
import { NavLink } from 'react-router-dom'


const Container = styled.div`
    flex: 1;
    margin: 3px;
    height: 80vh;
    position: relative;
    margin-bottom: 10%;
`
const Image = styled.img`
    width: 90%;
    height: 70%;
    object-fit: cover;
    @media only screen and (max-width: 380px) {
      height: 50vh;
    }
`
const Info = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    margin-left: 15%;
    display: flex;
    flex-direction: column;
    align-items: start;
    justify-content: end;   
    
    @media only screen and (max-width: 380px) {
      margin-top: 30%;
      z-index: 2;
      text-align: center;
      margin-left: 15%;
    
    }
`
const Title = styled.h1`
    margin-bottom: 25px;
`
const Button = styled.button`
    padding: 15px 40px;
    font-size: 20px;
    background-color: transparent;
    cursor: pointer;
    margin-left: 4px;

    @media only screen and (max-width: 380px) {
      display: none;
    }
`

const CategoryItem = ({item}) => {
  return (
    <Container>
      <NavLink to={`/products/${item.cat}`}>
      <Image src={item.img}/>
      <Info>
        <Title>
            {item.title}
        </Title>
        <Button>Shop Now</Button>
      </Info>
      </NavLink>
    </Container>
  )
}

export default CategoryItem
