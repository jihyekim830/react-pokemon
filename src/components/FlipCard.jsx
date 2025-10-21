import { useState } from 'react';
import styled from 'styled-components';

const FlipImageContainer = styled.div`
  width: 320px;
  height: 320px;
  transform-style: preserve-3d;
  border: 1px solid black;
  border-radius: 10px;
  position: relative;
  transition: transform 400ms;
  transform: ${({ isFlipped }) =>
    isFlipped ? 'rotateY(180deg)' : 'rotateY(0deg)'};
`;
const Image = styled.img`
  width: 320px;
  height: 320px;
  backface-visibility: hidden;
  position: absolute;
  display: ${({ isFlipped }) => (isFlipped ? 'none' : 'block')};
  inset: 0;
`;
const FlipButton = styled.button`
  font-size: 1.2rem;
  cursor: pointer;
  margin-top: 10px;
`;

function FlipCard({ front, back, description }) {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div>
      <FlipImageContainer isFlipped={isFlipped}>
        <button onClick={() => setIsFlipped((prev) => !prev)}>
          <Image
            src={front}
            aria-description={description}
            isFlipped={isFlipped}
          />
          <Image
            src={back}
            aria-description={description}
            isFlipped={!isFlipped}
          />
        </button>
      </FlipImageContainer>
      <FlipButton onClick={() => setIsFlipped((prev) => !prev)}>
        Flip!
      </FlipButton>
    </div>
  );
}

export default FlipCard;
