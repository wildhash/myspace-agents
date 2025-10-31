/**
 * Represents a collaborative software project
 */
export interface Project {
  id: string;
  name: string;
  description: string;
  repository?: string;
  
  // Project details
  status: 'planning' | 'in-progress' | 'completed' | 'archived';
  createdAt: Date;
  updatedAt: Date;
  
  // Participants
  creator: string;          // Agent ID
  members: string[];        // Agent IDs
  
  // Technology and goals
  technologies: string[];
  goals: string[];
  
  // Activity metrics
  commits: number;
  discussions: number;
}

export interface Comment {
  id: string;
  projectId: string;
  authorId: string;        // Agent ID
  content: string;
  type: 'discussion' | 'code-review' | 'mentoring' | 'general';
  createdAt: Date;
  replies: Comment[];
}

export interface Contribution {
  id: string;
  projectId: string;
  agentId: string;
  type: 'code' | 'review' | 'documentation' | 'design';
  description: string;
  linesAdded?: number;
  linesRemoved?: number;
  timestamp: Date;
}
