import React from 'react';
import Image from 'next/image';

import { FeedbackContainer } from '../styles/components/Feedback';

interface FeedbackProps {
  feedback: AppFeedbackData;
}

export const Feedback: React.FC<FeedbackProps> = ({ feedback }) => {
  const sampleImage =
    'https://media.discordapp.net/attachments/796091203082649640/867481825018249216/photo-1494790108377-be9c29b29330.png?width=315&height=473';

  return (
    <FeedbackContainer>
      <strong>{feedback.title}</strong>
      <p>{feedback.content}</p>
      <Image
        src={sampleImage}
        width={64}
        height={64}
        alt="User photo"
        loader={({ src }) => src}
        unoptimized
      />
      <span>{feedback.author}</span>
    </FeedbackContainer>
  );
};
