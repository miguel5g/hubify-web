import React from 'react';
import Image from 'next/image';

import { changelogData } from '../utils/Samples';

import { ChangelogContentContainer } from '../styles/components/ChangelogContent';

export const ChangelogContent: React.FC = () => {
  return (
    <ChangelogContentContainer>
      <ul>
        {Array.from({ length: 12 }).map((_, i) => (
          <li key={i.toString()}>
            <div className="marker">
              <div></div>
            </div>
            <div className="content">
              <header>
                <Image
                  src={changelogData.image_url}
                  width={48}
                  height={48}
                  alt="User photo"
                  loader={({ src }) => src}
                />
                <div>
                  <strong>{changelogData.author}</strong>
                  <span>{changelogData.created_at}</span>
                </div>
              </header>
              <strong>{changelogData.title}</strong>
              <p>{changelogData.content}</p>
            </div>
          </li>
        ))}
      </ul>
    </ChangelogContentContainer>
  );
};
