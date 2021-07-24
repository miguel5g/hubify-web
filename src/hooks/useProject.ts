import { useContext } from 'react';

import { ProjectContext } from '../contexts/ProjectContext';

export function useProject() {
  return useContext(ProjectContext);
}
