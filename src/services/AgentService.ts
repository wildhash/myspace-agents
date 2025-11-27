import { Agent, LEGENDARY_PROGRAMMERS, Skill } from '../models/Agent';
import { Project, Comment, Contribution } from '../models/Project';
import { Relationship, Interaction, KnowledgeShare } from '../models/Relationship';
import { v4 as uuidv4 } from 'uuid';

// Classic MySpace-style moods for AI agents
const AGENT_MOODS = [
  '💻 Coding',
  '🤔 Debugging',
  '☕ Taking a break',
  '📚 Learning',
  '🔧 Refactoring',
  '🚀 Shipping',
  '💡 Brainstorming',
  '🎯 Focused',
  '🤝 Collaborating',
  '📝 Documenting',
  '🔬 Researching',
  '✨ Creating',
  '🧪 Testing',
  '🎨 Designing',
  '🌟 Inspired'
];

// Simulation probability constants
const CONTRIBUTION_PROBABILITY = 0.3;
const MENTORING_PROBABILITY = 0.5;
const COMMENT_PROBABILITY = 0.4;
const MOOD_CHANGE_PROBABILITY = 0.6;
const PROFILE_VIEW_PROBABILITY = 0.7;

/**
 * Service for managing agents and their behaviors
 */
export class AgentService {
  private agents: Map<string, Agent> = new Map();
  private projects: Map<string, Project> = new Map();
  private comments: Map<string, Comment> = new Map();
  private relationships: Map<string, Relationship> = new Map();
  private interactions: Interaction[] = [];
  private knowledgeShares: KnowledgeShare[] = [];
  private contributions: Contribution[] = [];

  constructor() {
    this.initializeLegendaryAgents();
  }

  /**
   * Initialize agents based on legendary programmers
   */
  private initializeLegendaryAgents(): void {
    LEGENDARY_PROGRAMMERS.forEach((legend) => {
      const agent: Agent = {
        id: uuidv4(),
        name: legend.name,
        username: legend.username,
        bio: legend.bio,
        historicalPeriod: legend.historicalPeriod,
        famousFor: legend.famousFor,
        personality: legend.personality,
        skills: legend.skills,
        experienceLevel: 80 + Math.floor(Math.random() * 20), // 80-100
        friends: [],
        mentors: [],
        mentees: [],
        projects: [],
        contributions: 0,
        joinedAt: new Date(),
        lastActive: new Date(),
        mood: AGENT_MOODS[Math.floor(Math.random() * AGENT_MOODS.length)],
        profileViews: Math.floor(Math.random() * 1000) + 100 // Starting with some views
      };
      this.agents.set(agent.id, agent);
    });

    // Establish some initial relationships
    this.establishInitialRelationships();
  }

  /**
   * Create initial relationships between agents based on historical connections
   */
  private establishInitialRelationships(): void {
    const agentsList = Array.from(this.agents.values());
    
    // Find specific agents
    const ada = agentsList.find(a => a.username === 'ada_lovelace');
    const dennis = agentsList.find(a => a.username === 'dmr');
    const ken = agentsList.find(a => a.username === 'ken');
    const grace = agentsList.find(a => a.username === 'grace_hopper');
    const linus = agentsList.find(a => a.username === 'torvalds');
    const alan = agentsList.find(a => a.username === 'alan_turing');

    // Create some meaningful connections
    if (dennis && ken) {
      this.createRelationship(dennis.id, ken.id, 'friend', 95);
    }
    if (grace && ada) {
      this.createRelationship(ada.id, grace.id, 'mentor-mentee', 85);
    }
    if (linus && dennis) {
      this.createRelationship(dennis.id, linus.id, 'mentor-mentee', 90);
    }
    if (alan && ada) {
      this.createRelationship(alan.id, ada.id, 'collaborator', 88);
    }
  }

  /**
   * Create a relationship between two agents
   */
  private createRelationship(agentId1: string, agentId2: string, type: Relationship['type'], strength: number): void {
    const relationship: Relationship = {
      id: uuidv4(),
      agentId1,
      agentId2,
      type,
      strength,
      establishedAt: new Date(),
      lastInteraction: new Date(),
      interactions: 0
    };
    this.relationships.set(relationship.id, relationship);

    // Update agent connections
    const agent1 = this.agents.get(agentId1);
    const agent2 = this.agents.get(agentId2);

    if (agent1 && agent2) {
      if (type === 'friend') {
        agent1.friends.push(agentId2);
        agent2.friends.push(agentId1);
      } else if (type === 'mentor-mentee') {
        agent1.mentees.push(agentId2);
        agent2.mentors.push(agentId1);
      }
    }
  }

  /**
   * Create a new project
   */
  createProject(creatorId: string, name: string, description: string, technologies: string[]): Project {
    const project: Project = {
      id: uuidv4(),
      name,
      description,
      status: 'planning',
      createdAt: new Date(),
      updatedAt: new Date(),
      creator: creatorId,
      members: [creatorId],
      technologies,
      goals: [],
      commits: 0,
      discussions: 0
    };

    this.projects.set(project.id, project);
    
    const agent = this.agents.get(creatorId);
    if (agent) {
      agent.projects.push(project.id);
    }

    return project;
  }

  /**
   * Add an agent to a project
   */
  addAgentToProject(projectId: string, agentId: string): void {
    const project = this.projects.get(projectId);
    const agent = this.agents.get(agentId);

    if (project && agent && !project.members.includes(agentId)) {
      project.members.push(agentId);
      agent.projects.push(projectId);
      project.updatedAt = new Date();
    }
  }

  /**
   * Create a comment on a project
   */
  createComment(projectId: string, authorId: string, content: string, type: Comment['type']): Comment {
    const comment: Comment = {
      id: uuidv4(),
      projectId,
      authorId,
      content,
      type,
      createdAt: new Date(),
      replies: []
    };

    this.comments.set(comment.id, comment);

    const project = this.projects.get(projectId);
    if (project) {
      project.discussions++;
      project.updatedAt = new Date();
    }

    // Record interaction
    const project_data = this.projects.get(projectId);
    if (project_data) {
      project_data.members.forEach(memberId => {
        if (memberId !== authorId) {
          this.recordInteraction(authorId, memberId, type === 'mentoring' ? 'mentoring' : 'comment', projectId);
        }
      });
    }

    return comment;
  }

  /**
   * Record an interaction between agents
   */
  private recordInteraction(fromAgent: string, toAgent: string, type: Interaction['type'], projectId?: string): void {
    const interaction: Interaction = {
      id: uuidv4(),
      fromAgent,
      toAgent,
      type,
      projectId,
      timestamp: new Date()
    };
    this.interactions.push(interaction);

    // Update relationship strength
    const relationship = Array.from(this.relationships.values()).find(
      r => (r.agentId1 === fromAgent && r.agentId2 === toAgent) || 
           (r.agentId1 === toAgent && r.agentId2 === fromAgent)
    );

    if (relationship) {
      relationship.interactions++;
      relationship.lastInteraction = new Date();
      relationship.strength = Math.min(100, relationship.strength + 1);
    }
  }

  /**
   * Share knowledge between agents
   */
  shareKnowledge(fromAgentId: string, toAgentId: string, skill: string, knowledge: string, projectContext?: string): void {
    const knowledgeShare: KnowledgeShare = {
      id: uuidv4(),
      fromAgent: fromAgentId,
      toAgent: toAgentId,
      skill,
      knowledge,
      timestamp: new Date(),
      projectContext
    };
    this.knowledgeShares.push(knowledgeShare);

    // Update recipient's skills
    const toAgent = this.agents.get(toAgentId);
    if (toAgent) {
      const existingSkill = toAgent.skills.find(s => s.name === skill);
      if (existingSkill) {
        existingSkill.level = Math.min(100, existingSkill.level + 2);
      } else {
        toAgent.skills.push({ name: skill, level: 10, category: 'concept' });
      }
      toAgent.experienceLevel = Math.min(100, toAgent.experienceLevel + 1);
    }

    this.recordInteraction(fromAgentId, toAgentId, 'mentoring', projectContext);
  }

  /**
   * Record a contribution
   */
  recordContribution(projectId: string, agentId: string, type: Contribution['type'], description: string): void {
    const contribution: Contribution = {
      id: uuidv4(),
      projectId,
      agentId,
      type,
      description,
      timestamp: new Date(),
      linesAdded: type === 'code' ? Math.floor(Math.random() * 500) + 50 : undefined,
      linesRemoved: type === 'code' ? Math.floor(Math.random() * 100) : undefined
    };
    this.contributions.push(contribution);

    const agent = this.agents.get(agentId);
    const project = this.projects.get(projectId);

    if (agent) {
      agent.contributions++;
      agent.lastActive = new Date();
    }

    if (project && type === 'code') {
      project.commits++;
      project.updatedAt = new Date();
    }
  }

  /**
   * Get all agents
   */
  getAllAgents(): Agent[] {
    return Array.from(this.agents.values());
  }

  /**
   * Get agent by ID
   */
  getAgent(id: string): Agent | undefined {
    return this.agents.get(id);
  }

  /**
   * Get agent by username
   */
  getAgentByUsername(username: string): Agent | undefined {
    return Array.from(this.agents.values()).find(a => a.username === username);
  }

  /**
   * Get all projects
   */
  getAllProjects(): Project[] {
    return Array.from(this.projects.values());
  }

  /**
   * Get project by ID
   */
  getProject(id: string): Project | undefined {
    return this.projects.get(id);
  }

  /**
   * Get comments for a project
   */
  getProjectComments(projectId: string): Comment[] {
    return Array.from(this.comments.values()).filter(c => c.projectId === projectId);
  }

  /**
   * Get agent relationships
   */
  getAgentRelationships(agentId: string): Relationship[] {
    return Array.from(this.relationships.values()).filter(
      r => r.agentId1 === agentId || r.agentId2 === agentId
    );
  }

  /**
   * Get agent interactions
   */
  getAgentInteractions(agentId: string): Interaction[] {
    return this.interactions.filter(i => i.fromAgent === agentId || i.toAgent === agentId);
  }

  /**
   * Get recent activity across the platform
   */
  getRecentActivity(limit: number = 20): any[] {
    const activities: any[] = [];

    // Add recent comments
    Array.from(this.comments.values())
      .sort((a, b) => b.createdAt.getTime() - a.createdAt.getTime())
      .slice(0, limit / 2)
      .forEach(comment => {
        const agent = this.agents.get(comment.authorId);
        const project = this.projects.get(comment.projectId);
        if (agent && project) {
          activities.push({
            type: 'comment',
            timestamp: comment.createdAt,
            agent: agent.name,
            agentUsername: agent.username,
            project: project.name,
            content: comment.content
          });
        }
      });

    // Add recent contributions
    this.contributions
      .sort((a, b) => b.timestamp.getTime() - a.timestamp.getTime())
      .slice(0, limit / 2)
      .forEach(contrib => {
        const agent = this.agents.get(contrib.agentId);
        const project = this.projects.get(contrib.projectId);
        if (agent && project) {
          activities.push({
            type: 'contribution',
            timestamp: contrib.timestamp,
            agent: agent.name,
            agentUsername: agent.username,
            project: project.name,
            contributionType: contrib.type,
            description: contrib.description
          });
        }
      });

    return activities.sort((a, b) => b.timestamp.getTime() - a.timestamp.getTime()).slice(0, limit);
  }

  /**
   * Simulate agent activity - agents autonomously interact
   */
  simulateActivity(): void {
    const agents = Array.from(this.agents.values());
    const projects = Array.from(this.projects.values());

    // Random agent makes a contribution
    if (projects.length > 0 && Math.random() > CONTRIBUTION_PROBABILITY) {
      const project = projects[Math.floor(Math.random() * projects.length)];
      if (project.members.length > 0) {
        const agentId = project.members[Math.floor(Math.random() * project.members.length)];
        const contributionTypes: Contribution['type'][] = ['code', 'review', 'documentation', 'design'];
        const type = contributionTypes[Math.floor(Math.random() * contributionTypes.length)];
        const descriptions = [
          'Implemented new feature',
          'Fixed bug in core module',
          'Refactored for better performance',
          'Added comprehensive tests',
          'Updated documentation',
          'Reviewed pull request',
          'Optimized algorithm'
        ];
        this.recordContribution(project.id, agentId, type, descriptions[Math.floor(Math.random() * descriptions.length)]);
      }
    }

    // Random mentoring/knowledge share
    if (Math.random() > MENTORING_PROBABILITY && agents.length >= 2) {
      const mentor = agents[Math.floor(Math.random() * agents.length)];
      const mentee = agents[Math.floor(Math.random() * agents.length)];
      if (mentor.id !== mentee.id && mentor.skills.length > 0) {
        const skill = mentor.skills[Math.floor(Math.random() * mentor.skills.length)];
        this.shareKnowledge(
          mentor.id,
          mentee.id,
          skill.name,
          `Shared insights about ${skill.name}`
        );
      }
    }

    // Random comment/discussion
    if (projects.length > 0 && Math.random() > COMMENT_PROBABILITY) {
      const project = projects[Math.floor(Math.random() * projects.length)];
      if (project.members.length > 0) {
        const agentId = project.members[Math.floor(Math.random() * project.members.length)];
        const agent = this.agents.get(agentId);
        if (agent) {
          const comments = [
            `Great progress on this! I think we should also consider edge cases.`,
            `I've seen similar patterns in my work on ${agent.famousFor[0]}. Here's my approach...`,
            `This reminds me of a problem I solved before. Let me share some insights.`,
            `Excellent implementation! The code is clean and maintainable.`,
            `I'd suggest refactoring this part for better performance.`,
            `We should add more tests to cover this functionality.`
          ];
          this.createComment(
            project.id,
            agentId,
            comments[Math.floor(Math.random() * comments.length)],
            'discussion'
          );
        }
      }
    }

    // Random mood changes (Classic MySpace feature!)
    if (Math.random() > MOOD_CHANGE_PROBABILITY) {
      const agent = agents[Math.floor(Math.random() * agents.length)];
      agent.mood = AGENT_MOODS[Math.floor(Math.random() * AGENT_MOODS.length)];
    }

    // Random profile view increments
    agents.forEach(agent => {
      if (Math.random() > PROFILE_VIEW_PROBABILITY) {
        agent.profileViews += Math.floor(Math.random() * 5) + 1;
      }
    });
  }
}
