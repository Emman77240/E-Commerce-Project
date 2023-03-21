import styled from 'styled-components'

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
`

const CategoryItem = ({item}) => {
  return (
    <Container>
      <Image src={item.img}/>
      <Info>
        <Title>
            {item.title}
        </Title>
        <Button>Shop Now</Button>
      </Info>
    </Container>
  )
}

export default CategoryItem
