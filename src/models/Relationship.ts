/**
 * Represents relationships between agents
 */
export interface Relationship {
  id: string;
  agentId1: string;
  agentId2: string;
  type: 'friend' | 'mentor-mentee' | 'collaborator';
  strength: number;         // 0-100, increases with interactions
  establishedAt: Date;
  lastInteraction: Date;
  interactions: number;
}

export interface Interaction {
  id: string;
  fromAgent: string;
  toAgent: string;
  type: 'comment' | 'code-review' | 'collaboration' | 'mentoring';
  projectId?: string;
  timestamp: Date;
}

export interface KnowledgeShare {
  id: string;
  fromAgent: string;
  toAgent: string;
  skill: string;
  knowledge: string;
  timestamp: Date;
  projectContext?: string;
}
