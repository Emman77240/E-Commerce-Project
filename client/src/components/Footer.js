import styled from 'styled-components'
import FacebookIcon from '@mui/icons-material/Facebook'
import InstagramIcon from '@mui/icons-material/Instagram'
import TwitterIcon from '@mui/icons-material/Twitter'
import PhoneIcon from '@mui/icons-material/Phone'
import MailOutlinedIcon from '@mui/icons-material/MailOutlined'
import RoomIcon from '@mui/icons-material/Room'
import WhatsAppIcon from '@mui/icons-material/WhatsApp'


const Container = styled.div`
    display: flex;
    color: white;
    background-color: black;
    padding: 15% 4%;
    @media only screen and (max-width: 380px) {
      flex-direction: column;
    }
`
const Left = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    padding: 20px;
`
const Logo = styled.h1``;

const Desc = styled.p`
    margin: 30px 0px;
    text-align: justify;
    line-height: 1.2;
`
const SocialContainer = styled.div`
    display: flex;
`
const SocialIcon = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    color: white;
    background-color: #${(props) => props.color};
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 20px;
    margin-top: 20px;
`
const Center = styled.div`
    flex: 1;
    padding: 20px;
    margin-left: 30px;
    @media only screen and (max-width: 380px) {
      display: none;
    }
`
const Title = styled.h3`
    margin-bottom: 30px;
`
const List = styled.ul`
    margin: 0;
    padding: 0;
    list-style: none;
    display: flex;
    flex-wrap: wrap;
    margin-top: 45px;
`
const ListItem = styled.li`
    width: 50%;
    margin-bottom: 10px;
`
const Right = styled.div`
    flex: 1;
    padding: 20px;
    @media only screen and (max-width: 380px) {
      background-color: #fff8f8; 
    }
`
const ContactItem = styled.div`
    margin-bottom: 20px;
    display: flex;
    align-items: center;
`
const Payment = styled.img`
    width: 50%;
`

const Footer = () => {
  return (
    <Container>
      <Left>
        <Logo>EarWare.</Logo>
        <Desc>
          We are suppliers of headphones from popular brands. We possess a large stock of 
          over-ear or circumaural headphones with big enough ear pads to fit around your 
          entire ear. We also supply on-ear or supra-aural headphones with ear pads that 
          rest on your ear lobes. If you prefer earphones, we've got earbuds which are popular
          among audiophiles for their superior sound. Our prices are great too.
        </Desc>
        <SocialContainer>
          <SocialIcon color="1778f2">
            <FacebookIcon />
          </SocialIcon>
          <SocialIcon color="bc2a8d">
            <InstagramIcon />
          </SocialIcon>
          <SocialIcon color="55ACEE">
            <TwitterIcon />
          </SocialIcon>
          <SocialIcon color="25D366">
            <WhatsAppIcon />
          </SocialIcon>
        </SocialContainer>
      </Left>
      <Center>
        <Title>Useful Links</Title>
        <List>
          <ListItem>Home</ListItem>
          <ListItem>Cart</ListItem>
          <ListItem>Man Fashion</ListItem>
          <ListItem>Woman Fashion</ListItem>
          <ListItem>Accessories</ListItem>
          <ListItem>My Account</ListItem>
          <ListItem>Order Tracking</ListItem>
          <ListItem>Wishlist</ListItem>
          <ListItem>Wishlist</ListItem>
          <ListItem>Terms</ListItem>
        </List>
      </Center>
      <Right>
        <Title>Contact</Title>
        <ContactItem>
          <RoomIcon style={{marginRight:"10px"}}/> 52 Free Will Road, Brendan Road, Bristol BS2 6NE
        </ContactItem>
        <ContactItem>
          <PhoneIcon style={{marginRight:"10px"}}/> +44 723 56 7891
        </ContactItem>
        <ContactItem>
          <MailOutlinedIcon style={{marginRight:"10px"}} /> contact@earware.dev
        </ContactItem>
        <Payment src="https://i.ibb.co/Qfvn4z6/payment.png" />
      </Right>
    </Container>
  )
}

export default Footer
