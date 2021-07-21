import React from 'react';
import Image from 'next/image';
import { FiArrowLeft, FiArrowRight, FiMoreVertical } from 'react-icons/fi';

import {
  FeedbacksContentContainer,
  FeedbacksList,
} from '../styles/components/FeedbacksContent';

export const FeedbacksContent: React.FC = () => {
  const sampleImage =
    'https://media.discordapp.net/attachments/796091203082649640/867481825018249216/photo-1494790108377-be9c29b29330.png?width=315&height=473';

  return (
    <FeedbacksContentContainer>
      <FeedbacksList>
        {Array.from({ length: 10 }).map((_, i) => (
          <li key={i.toString()}>
            <header>
              <Image
                src={sampleImage}
                width={48}
                height={48}
                alt="User photo"
                loader={({ src }) => src}
              />
              <div>
                <strong>Miguel Ângelo</strong>
                <span>1 hora atrás</span>
              </div>
              <button>
                <FiMoreVertical />
              </button>
            </header>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum
              nesciunt iste suscipit natus qui architecto, voluptates minus.
              Voluptatum consectetur natus, quo dolorem numquam facilis
              distinctio iusto explicabo. Illo, iure neque.
            </p>
          </li>
        ))}
      </FeedbacksList>

      <footer>
        <button>
          <FiArrowLeft />
        </button>
        <span>Página 1 de 1</span>
        <button>
          <FiArrowRight />
        </button>
      </footer>
    </FeedbacksContentContainer>
  );
};
