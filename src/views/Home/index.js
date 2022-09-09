import React, { useContext } from 'react';

import { Container, Title, Wrapper, Footer } from './styles';
import QuestionCard from '../../components/QuestionCard';
import FinishCard from '../../components/FinishCard';

import { QuizContext } from '../../contexts/QuizContext';

function Home() {
  const { showResult } = useContext(QuizContext);

  return (
    <Container>
      <Wrapper>
        <Title>Country Quiz</Title>
        {showResult ? <FinishCard /> : <QuestionCard />}

        <Footer>
          <span>
          <a href="https://devchallenges.io/" target="_blank"rel="noreferrer">devChallenges.io</a>
          </span>
        </Footer>
      </Wrapper>
    </Container>
  );
}

export default Home;