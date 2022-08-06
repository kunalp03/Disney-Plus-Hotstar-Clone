import React from 'react'
import styled from 'styled-components';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick'

function ImageSlider() {
    let settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true
      };
    return (
        <Container>
            <Carousel {...settings}>
                <Wrap>
                    <img src="/images/sponser.jpg" alt=""/>
                </Wrap>
                <Wrap>
                    <img src="/images/slider-badging.jpg" alt=""/>
                </Wrap>
                <Wrap>
                    <img src="/images/slider-badag.jpg" alt=""/>
                </Wrap>
            </Carousel>
        </Container>
    )
}

export default ImageSlider

const Container = styled.div`
    width: 100vw;
    // overflow-x: hidden;
    // overflow-y: hidden;
`;

const Carousel = styled(Slider) `
    margin-top: 20px;
    width: 90%;
    .slick-list{
        overflow: visible;
    }
    .slick-next{
        right: -100px;
    }
    .slick-prev{
        left: 50px;
        z-index: 10;
    }
    ul li button{
        &:before{
            font-size: 10px;
            color: rgb(150, 158, 171);
        }
    }
    li.slick-active button:before{
        color:white;
    }
`
const Wrap = styled.div `
    cursor: pointer;
    // margin: 100px;
    img{
        align-self: center;
        border-radius: 4px;
        width: 100%;
        height: 100%;
        box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px, rgb(0 0 0 / 73%) 0px 16px 10px -10px;
        margin-left: 5vw;
    }
`
