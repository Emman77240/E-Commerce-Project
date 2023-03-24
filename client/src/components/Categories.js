import styled from 'styled-components'
import { categories } from '../data'
import CategoryItem from './CategoryItem'



// Define styling

const Container = styled.div`
`
const ContentContainer = styled.div`
    display: flex;
    padding: 20px;
    justify-content: space-between;
    @media only screen and (max-width: 380px) {
      padding: 0px;
      flex-direction: column;
    }
`

const Header = styled.h1`
    text-align: center;
    font-size: 45px;
    margin-top: 50px;
    margin-bottom: 2%;
`

const Categories = () => {
  return (
    <Container>
      <Header>Categories</Header>
      <ContentContainer>
      
        {categories.map(item => (
          <CategoryItem item={item} key={item.id} />
        ))}
    </ContentContainer>
    </Container>
  )
}

export default Categories
