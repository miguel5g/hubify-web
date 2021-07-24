import React, { createContext } from 'react';
import { useState } from 'react';

interface ProjectContextType {
  project?: ProjectData;
  setProject: (project: ProjectData) => void;
}

export const ProjectContext = createContext({} as ProjectContextType);

export const ProjectContextProvider: React.FC = ({ children }) => {
  const [project, setProject] = useState<ProjectData | undefined>();

  return (
    <ProjectContext.Provider value={{ project, setProject }}>
      {children}
    </ProjectContext.Provider>
  );
};
