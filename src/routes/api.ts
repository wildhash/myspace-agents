import express, { Router, Request, Response } from 'express';
import { AgentService } from '../services/AgentService';

export function createApiRouter(agentService: AgentService): Router {
  const router = express.Router();

  // Get all agents
  router.get('/agents', (req: Request, res: Response) => {
    const agents = agentService.getAllAgents();
    res.json(agents);
  });

  // Get specific agent
  router.get('/agents/:id', (req: Request, res: Response) => {
    const agent = agentService.getAgent(req.params.id);
    if (agent) {
      res.json(agent);
    } else {
      res.status(404).json({ error: 'Agent not found' });
    }
  });

  // Get agent by username
  router.get('/agents/username/:username', (req: Request, res: Response) => {
    const agent = agentService.getAgentByUsername(req.params.username);
    if (agent) {
      res.json(agent);
    } else {
      res.status(404).json({ error: 'Agent not found' });
    }
  });

  // Get agent relationships
  router.get('/agents/:id/relationships', (req: Request, res: Response) => {
    const relationships = agentService.getAgentRelationships(req.params.id);
    res.json(relationships);
  });

  // Get agent interactions
  router.get('/agents/:id/interactions', (req: Request, res: Response) => {
    const interactions = agentService.getAgentInteractions(req.params.id);
    res.json(interactions);
  });

  // Get all projects
  router.get('/projects', (req: Request, res: Response) => {
    const projects = agentService.getAllProjects();
    res.json(projects);
  });

  // Get specific project
  router.get('/projects/:id', (req: Request, res: Response) => {
    const project = agentService.getProject(req.params.id);
    if (project) {
      res.json(project);
    } else {
      res.status(404).json({ error: 'Project not found' });
    }
  });

  // Get project comments
  router.get('/projects/:id/comments', (req: Request, res: Response) => {
    const comments = agentService.getProjectComments(req.params.id);
    res.json(comments);
  });

  // Create a new project
  router.post('/projects', (req: Request, res: Response) => {
    const { creatorId, name, description, technologies } = req.body;
    if (!creatorId || !name || !description) {
      res.status(400).json({ error: 'Missing required fields' });
      return;
    }
    const project = agentService.createProject(creatorId, name, description, technologies || []);
    res.status(201).json(project);
  });

  // Add agent to project
  router.post('/projects/:id/members', (req: Request, res: Response) => {
    const { agentId } = req.body;
    if (!agentId) {
      res.status(400).json({ error: 'Missing agentId' });
      return;
    }
    agentService.addAgentToProject(req.params.id, agentId);
    res.json({ success: true });
  });

  // Create a comment
  router.post('/projects/:id/comments', (req: Request, res: Response) => {
    const { authorId, content, type } = req.body;
    if (!authorId || !content || !type) {
      res.status(400).json({ error: 'Missing required fields' });
      return;
    }
    const comment = agentService.createComment(req.params.id, authorId, content, type);
    res.status(201).json(comment);
  });

  // Get recent activity
  router.get('/activity', (req: Request, res: Response) => {
    const limit = parseInt(req.query.limit as string) || 20;
    const activity = agentService.getRecentActivity(limit);
    res.json(activity);
  });

  // Trigger simulation
  router.post('/simulate', (req: Request, res: Response) => {
    agentService.simulateActivity();
    res.json({ success: true, message: 'Activity simulated' });
  });

  return router;
}
