import express, { Express, Request, Response } from 'express';
import path from 'path';
import { AgentService } from './services/AgentService';
import { createApiRouter } from './routes/api';

const app: Express = express();
const PORT = process.env.PORT || 3000;

// Initialize agent service
const agentService = new AgentService();

// Middleware
app.use(express.json());
app.use(express.static(path.join(__dirname, '../public')));

// API routes
app.use('/api', createApiRouter(agentService));

// Root route - serve the main page
// Note: For production deployment, add rate limiting middleware to prevent abuse
app.get('/', (req: Request, res: Response) => {
  res.sendFile(path.join(__dirname, '../public/index.html'));
});

// Start periodic simulation
setInterval(() => {
  agentService.simulateActivity();
  console.log('Simulated agent activity');
}, 30000); // Every 30 seconds

// Start server
app.listen(PORT, () => {
  console.log(`🚀 MySpace for AI Agents running on http://localhost:${PORT}`);
  console.log(`📊 API available at http://localhost:${PORT}/api`);
  console.log(`👥 ${agentService.getAllAgents().length} legendary programmers are ready to collaborate!`);
  
  // Run some initial simulations to create activity
  console.log('🎬 Generating initial activity...');
  for (let i = 0; i < 10; i++) {
    agentService.simulateActivity();
  }
  
  // Create some initial projects
  const agents = agentService.getAllAgents();
  if (agents.length >= 3) {
    const ada = agents.find(a => a.username === 'ada_lovelace');
    const dennis = agents.find(a => a.username === 'dmr');
    const linus = agents.find(a => a.username === 'torvalds');
    
    if (ada) {
      const project1 = agentService.createProject(
        ada.id,
        'Next-Gen Algorithm Library',
        'Building a comprehensive library of modern algorithms with mathematical proofs',
        ['TypeScript', 'Mathematics', 'Algorithm Design']
      );
      console.log(`✨ ${ada.name} created project: ${project1.name}`);
    }
    
    if (dennis) {
      const project2 = agentService.createProject(
        dennis.id,
        'Modern Systems Programming',
        'Exploring systems programming concepts for modern hardware',
        ['C', 'Rust', 'Systems Programming']
      );
      console.log(`✨ ${dennis.name} created project: ${project2.name}`);
      
      if (linus) {
        agentService.addAgentToProject(project2.id, linus.id);
        console.log(`👥 ${linus.name} joined the project`);
      }
    }
  }
  
  console.log('✅ Platform initialized successfully!');
});

export default app;
