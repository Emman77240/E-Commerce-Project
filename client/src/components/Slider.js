import { useState } from "react"
import styled from "styled-components"
import { sliderItems } from "../data"
import ArrowLeftOutlinedIcon from '@mui/icons-material/ArrowLeftOutlined'
import ArrowRightOutlinedIcon from '@mui/icons-material/ArrowRightOutlined'

// Define Styling
const Container = styled.div`
    width: 100;
    height: 100vh;
    display: flex;
    overflow: hidden;
    @media only screen and (max-width: 380px) {
        display: none; 
    }
`
const Arrow = styled.div`
    width: 50px;
    height: 50px;
    background-color: rgb(202, 198, 198);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 0;
    bottom: 0;
    left: ${props=> props.direction === "left" && "10px"};
    right: ${props=> props.direction === "right" && "10px"};
    margin: auto;
    cursor: pointer;
    opacity: 0.5;
    z-index: 2
`
const Wrapper = styled.div`
    height: 100%;
    display: flex;
    transition: all 1.5s ease;
    transform: translateX(${props => props.slideIndex * -100}vw);
`
const Slide = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
    /*background-color: #${props => props.bg}*/
`
const ImageContainer = styled.div`
    height: 100%;
    flex: 1;
`
const Image = styled.img`
    height: 80%;
    margin-left: 3%;
`
const InfoContainer = styled.div`
    flex: 1;
    padding: 50px;
`
const Title = styled.h1`
    font-size: 50px;
`
const Desc = styled.p`
    margin: 40px 0px;
    font-size: 20px;
    font-weight: 500;
    letter-spacing: 2px;
`
const Button = styled.button`
    padding: 15px 40px;
    font-size: 20px;
    color: white;
    font-weight: 500;
    background-color: rgb(39, 44, 44);
    cursor: pointer;
`

// Define Slider function
const Slider = () => {
  // Set state for slider
  const [slideIndex, setSlideIndex] = useState(0);

  // Resolve click event for slider buttons
  const handleClick = (direction) => {

    if(direction === "left") {
        setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 2);
    } else {
        setSlideIndex(slideIndex < 2 ? slideIndex + 1 : 0);
    }
  };

  return (
    <Container>
        <Arrow direction="left" onClick={() => handleClick("left")}>
            <ArrowLeftOutlinedIcon />
        </Arrow>
        <Wrapper slideIndex={slideIndex}>
            {sliderItems.map((item) => (

                <Slide bg={item.bg} key={item.id}>
                    <ImageContainer>
                        <Image src={item.img} />
                    </ImageContainer>
                    <InfoContainer>
                        <Title>{item.title}</Title>
                        <Desc>{item.desc}</Desc>
                        <Button>Add to Bag</Button>
                    </InfoContainer>
                </Slide>
            ))}
        </Wrapper>
        <Arrow direction="right" onClick={() => handleClick("right")}>
            <ArrowRightOutlinedIcon />
        </Arrow>
      
    </Container>
  )
}

export default Slider
