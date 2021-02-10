import React from 'react'
import Card from './Card'

// HORIZONTAL SCROLL


import styled from "styled-components";

import HorizontalScroll from "../horizontal-scroll";

const HorizontalSection = styled.section`
  position: relative;
  width: 100%;
  min-height: 100vh;
  /* background-color: pink; */
`;


const CardsContainer = styled.div`
  position: relative;
  height: 100%;
  padding: 0 500px 0 150px;
  display: flex;
  flex-flow: row nowrap;
  justify-content: flex-start;
  align-items: center;
  /* background-color: yellow; */
`;

// END HORIZONTAL SCROLL







const Cards = ({ setView }) => {



  const listAPIs = [
    {
      short: 'APOD',
      name: 'Astronomy Picture of the Day',
      description: 'Discover the cosmos! Each day a different image or photograph of our fascinating universe is featured, along with a brief explanation written by a professional astronomer.',
      component: 'APOD',
    },
    {
      short: 'APOD',
      name: 'Astronomy Picture of the Day',
      description: 'Discover the cosmos! Each day a different image or photograph of our fascinating universe is featured, along with a brief explanation written by a professional astronomer.',
      component: 'APOD',
    },
    {
      short: 'APOD',
      name: 'Astronomy Picture of the Day',
      description: 'Discover the cosmos! Each day a different image or photograph of our fascinating universe is featured, along with a brief explanation written by a professional astronomer.',
      component: 'APOD',
    },
    {
      short: 'APOD',
      name: 'Astronomy Picture of the Day',
      description: 'Discover the cosmos! Each day a different image or photograph of our fascinating universe is featured, along with a brief explanation written by a professional astronomer.',
      component: 'APOD',
    },
    {
      short: 'APOD',
      name: 'Astronomy Picture of the Day',
      description: 'Discover the cosmos! Each day a different image or photograph of our fascinating universe is featured, along with a brief explanation written by a professional astronomer.',
      component: 'APOD',
    },
  ];




    return (
        <>
            <HorizontalSection>
                <HorizontalScroll>
                    <CardsContainer>
                      {
                        listAPIs.map((element) => <Card setView={setView} info={element} key={element.component} />)
                      }
                    </CardsContainer>
                </HorizontalScroll>
            </HorizontalSection>
        </>
    )
}

export default Cards;