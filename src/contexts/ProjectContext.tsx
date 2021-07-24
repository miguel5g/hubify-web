import React, { createContext } from 'react';
import { useState } from 'react';

interface ProjectContextType {
  project?: ExtendedProjectData;
  setProject: (project: ExtendedProjectData) => void;
}

export const ProjectContext = createContext({} as ProjectContextType);

export const ProjectContextProvider: React.FC = ({ children }) => {
  const [project, setProject] = useState<ExtendedProjectData | undefined>();

  return (
    <ProjectContext.Provider value={{ project, setProject }}>
      {children}
    </ProjectContext.Provider>
  );
};
