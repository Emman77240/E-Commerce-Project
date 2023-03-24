import styled from 'styled-components'
import { NavLink } from 'react-router-dom'
import '../style.css'


const Info = styled.div`
    position: absolute;
    opacity: 0;
    background-color: rgba(0, 0, 0, 0.2);
    z-index: 3;
    align-items: center;
    justify-content: center;
    transition: all 0.5s ease;
    


    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    
    @media only screen and (max-width: 380px) {
      margin-top: 30%;
      z-index: 2;
      text-align: center;
      margin-left: 15%;
    
    }
`

const Container = styled.div`
    flex: 1;
    margin: 3px;
    padding-top: 20px;
    height: 60vh;
    position: relative;
    margin-bottom: 10%;

    &:hover ${Info}{
      opacity: 1;
    }
`
const Image = styled.img`
    width: 90%;
    height: 90%;
    object-fit: cover;
    @media only screen and (max-width: 380px) {
      height: 50vh;
    }
    position: absolute;
`

const Title = styled.h1`
    margin-bottom: 25px;
    transition: all 0.5s ease;
    &:hover {
      color: teal;
      transform: scale(1.1);
    }

`
const Button = styled.button`
    padding: 15px 40px;
    font-size: 20px;
    background-color: white;
    border: none;
    cursor: pointer;
    margin-left: 4px;
    transition: all 0.5s ease;

    &:hover {
      background-color: teal;
      color: white;
      transform: scale(1.1);
    }

    @media only screen and (max-width: 380px) {
      display: none;
    }
`


const CategoryItem = ({item}) => {
  return (
    <Container>
      <Image src={item.img}/>
      <Info>
        <NavLink to={`/products/${item.cat}`} className="navigationTitleLink" >
          <Title>
            {item.title}
          </Title>
        </NavLink>
        <Button>Shop Now</Button>
      </Info>
    </Container>
  )
}

export default CategoryItem
