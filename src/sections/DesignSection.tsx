import gsap from 'gsap';
import React, { useLayoutEffect, useRef } from 'react';
import styled from 'styled-components';

const Section = styled.section`
  width: 100vw;
  height: 100vh;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  background-color: var(--white);
  overflow: hidden;
`;

const TextContainer = styled.p`
  width: 100%;
  height: 50vh;
  z-index: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  color: var(--dark);
  span {
    font-size: var(--fontxxl);
    width: 60%;
    font-weight: 600;
    text-transform: capitalize;
    padding-left: 8px;
  }
  @media screen and (max-width: 70em) {
    span {
      font-size: var(--fontxl);
    }
  }
  @media screen and (max-width: 64em) {
    span {
      font-size: var(--fontxl);
    }
  }
  @media screen and (max-width: 48em) {
    span {
      font-size: var(--fontlg);
      width: 80%;
    }
  }
`;
const TextContainer2 = styled.p`
  width: 100%;
  height: 50vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
  color: var(--dark);
  span {
    font-size: var(--fontxxl);
    width: 60%;
    font-weight: 600;
    text-transform: capitalize;
    align-self: flex-end;
    text-align: right;
    padding-right: 8px;
  }
  @media screen and (max-width: 70em) {
    span {
      font-size: var(--fontxl);
    }
  }
  @media screen and (max-width: 64em) {
    span {
      font-size: var(--fontxl);
    }
  }
  @media screen and (max-width: 48em) {
    span {
      font-size: var(--fontlg);
      width: 80%;
    }
  }
`;

const DesignSection = () => {
  const container = useRef(null);
  const firstText = useRef(null);
  const secondText = useRef(null);

  useLayoutEffect(() => {
    const t1 = gsap
      .timeline({
        scrollTrigger: {
          trigger: container.current,
          start: 'top-=500 top',
          end: 'bottom top',
          scrub: true,
        },
      })
      .fromTo(firstText.current, { x: 0 }, { x: '10%' }, 'key1')
      .fromTo(secondText.current, { x: 0 }, { x: '-10%' }, 'key1');

    return () => {
      if (t1) t1.kill();
    };
  }, []);

  return (
    <Section ref={container}>
      <TextContainer ref={firstText}>
        <span>Flaw-less design with strong durability.</span>
      </TextContainer>

      <TextContainer2 ref={secondText}>
        <span>Flat-edge design with toughest smartphone glass.</span>
      </TextContainer2>
    </Section>
  );
};

export default DesignSection;
