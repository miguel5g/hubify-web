import React from 'react';

import { FeedbackContainer } from '../styles/components/Feedback';

interface FeedbackProps {
  feedback: {
    id: string;
    title: string;
    content: string;
    author: string;
  };
}

export const Feedback: React.FC<FeedbackProps> = ({ feedback }) => {
  return (
    <FeedbackContainer>
      <strong>{feedback.title}</strong>
      <p>{feedback.content}</p>
      <span>{feedback.author}</span>
    </FeedbackContainer>
  );
};
