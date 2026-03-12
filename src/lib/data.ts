export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  coverImage: string;
  date: string;
  readTime: string;
  tags: string[];
  featured: boolean;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  tags: string[];
  github?: string;
  demo?: string;
  featured: boolean;
}

export const blogPosts: BlogPost[] = [
  {
    id: '1',
    slug: 'building-scalable-microservices-with-nodejs',
    title: '使用 Node.js 构建可扩展的微服务架构',
    excerpt: '深入探讨如何使用 Node.js 和 Docker 构建高可用、可扩展的微服务系统，包括服务发现、负载均衡和容错处理。',
    content: `
## 引言

在现代软件架构中，微服务已经成为构建大规模应用的首选方案。本文将详细介绍如何使用 Node.js 构建可扩展的微服务架构。

## 为什么选择微服务？

微服务架构允许我们将大型应用拆分为小型、独立的服务，每个服务都可以独立开发、部署和扩展。

\`\`\`javascript
// 示例：简单的微服务入口
const express = require('express');
const app = express();

app.get('/api/users', async (req, res) => {
  const users = await userService.getAll();
  res.json(users);
});

app.listen(3001, () => {
  console.log('User service running on port 3001');
});
\`\`\`

## 服务发现与通信

在微服务架构中，服务发现是关键组件之一...
    `,
    coverImage: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&auto=format&fit=crop&q=60',
    date: '2026-03-10',
    readTime: '8 min',
    tags: ['Node.js', 'Microservices', 'Docker', 'Architecture'],
    featured: true
  },
  {
    id: '2',
    slug: 'react-server-components-deep-dive',
    title: 'React Server Components 深度解析',
    excerpt: '全面解读 React Server Components 的工作原理、最佳实践以及如何在 Next.js 14 中充分利用这一特性。',
    content: `
## 什么是 React Server Components？

React Server Components (RSC) 是 React 团队推出的革命性特性...
    `,
    coverImage: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&auto=format&fit=crop&q=60',
    date: '2026-03-05',
    readTime: '12 min',
    tags: ['React', 'Next.js', 'Server Components', 'Performance'],
    featured: true
  },
  {
    id: '3',
    slug: 'database-optimization-postgresql',
    title: 'PostgreSQL 性能优化实战指南',
    excerpt: '从索引优化到查询分析，详细讲解 PostgreSQL 数据库性能调优的关键技术和实战经验。',
    content: `
## 数据库性能的重要性

数据库性能直接影响应用的响应时间和用户体验...
    `,
    coverImage: 'https://images.unsplash.com/photo-1544383835-bda2bc66a55d?w=800&auto=format&fit=crop&q=60',
    date: '2026-02-28',
    readTime: '10 min',
    tags: ['PostgreSQL', 'Database', 'Performance', 'Backend'],
    featured: false
  },
  {
    id: '4',
    slug: 'kubernetes-for-developers',
    title: 'Kubernetes 开发者实用指南',
    excerpt: '面向开发者的 Kubernetes 入门到实战，包括部署、扩展、监控和故障排除的完整流程。',
    content: `
## Kubernetes 基础概念

Kubernetes (K8s) 是容器编排的事实标准...
    `,
    coverImage: 'https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9?w=800&auto=format&fit=crop&q=60',
    date: '2026-02-20',
    readTime: '15 min',
    tags: ['Kubernetes', 'DevOps', 'Docker', 'Cloud'],
    featured: true
  },
  {
    id: '5',
    slug: 'typescript-advanced-patterns',
    title: 'TypeScript 高级类型模式实战',
    excerpt: '探索 TypeScript 的高级类型特性，包括条件类型、映射类型、模板字面量类型等，提升代码的类型安全性。',
    content: `
## 为什么需要高级类型？

TypeScript 的类型系统非常强大...
    `,
    coverImage: 'https://images.unsplash.com/photo-1516116216624-53e697fedbea?w=800&auto=format&fit=crop&q=60',
    date: '2026-02-15',
    readTime: '11 min',
    tags: ['TypeScript', 'JavaScript', 'Frontend', 'Types'],
    featured: false
  },
  {
    id: '6',
    slug: 'graphql-vs-rest-api',
    title: 'GraphQL vs REST：如何选择 API 架构',
    excerpt: '深入对比 GraphQL 和 REST API 的优缺点，帮助你为项目选择最合适的 API 架构方案。',
    content: `
## API 架构的选择

选择正确的 API 架构对项目成功至关重要...
    `,
    coverImage: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&auto=format&fit=crop&q=60',
    date: '2026-02-10',
    readTime: '9 min',
    tags: ['GraphQL', 'REST', 'API', 'Backend'],
    featured: false
  }
];

export const projects: Project[] = [
  {
    id: '1',
    title: 'CloudSync Platform',
    description: '企业级云端协作平台，支持实时文档编辑、团队管理和工作流自动化。使用 React、Node.js 和 PostgreSQL 构建。',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&auto=format&fit=crop&q=60',
    tags: ['React', 'Node.js', 'PostgreSQL', 'WebSocket'],
    github: 'https://github.com',
    demo: 'https://demo.com',
    featured: true
  },
  {
    id: '2',
    title: 'DevFlow CLI',
    description: '开发者工作流自动化命令行工具，支持项目初始化、代码生成和部署自动化。',
    image: 'https://images.unsplash.com/photo-1629654297299-c8506221ca97?w=800&auto=format&fit=crop&q=60',
    tags: ['Node.js', 'CLI', 'TypeScript', 'Automation'],
    github: 'https://github.com',
    featured: true
  },
  {
    id: '3',
    title: 'Analytics Dashboard',
    description: '实时数据分析仪表盘，支持多数据源接入、自定义图表和智能报告生成。',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format&fit=crop&q=60',
    tags: ['Vue.js', 'D3.js', 'Python', 'FastAPI'],
    github: 'https://github.com',
    demo: 'https://demo.com',
    featured: true
  },
  {
    id: '4',
    title: 'API Gateway',
    description: '高性能 API 网关，支持限流、认证、日志记录和微服务路由。',
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&auto=format&fit=crop&q=60',
    tags: ['Go', 'Redis', 'Docker', 'gRPC'],
    github: 'https://github.com',
    featured: false
  }
];

export const techStack = {
  frontend: [
    { name: 'React', icon: 'react' },
    { name: 'Next.js', icon: 'nextjs' },
    { name: 'Vue.js', icon: 'vue' },
    { name: 'TypeScript', icon: 'typescript' },
    { name: 'Tailwind CSS', icon: 'tailwind' }
  ],
  backend: [
    { name: 'Node.js', icon: 'nodejs' },
    { name: 'Python', icon: 'python' },
    { name: 'Go', icon: 'go' },
    { name: 'GraphQL', icon: 'graphql' },
    { name: 'PostgreSQL', icon: 'postgresql' }
  ],
  devops: [
    { name: 'Docker', icon: 'docker' },
    { name: 'Kubernetes', icon: 'kubernetes' },
    { name: 'AWS', icon: 'aws' },
    { name: 'GitHub Actions', icon: 'github' },
    { name: 'Terraform', icon: 'terraform' }
  ]
};

export const authorInfo = {
  name: '俊伟',
  title: '全栈开发工程师',
  bio: '拥有多年全栈开发经验，专注于构建高可用、可扩展的 Web 应用。热衷于开源贡献和技术分享，相信代码可以改变世界。',
  avatar: 'https://ugc.same-assets.com/Hk5nWx9zic-f3knneoOxEIUH-YKHeWAt.jpeg',
  location: '中国',
  email: '821331897@qq.com',
  social: {
    github: 'https://github.com/weiweiupup',
    twitter: 'https://x.com/wangwei577',
    // linkedin: 'https://linkedin.com',
    blog: 'https://www.junwei.blog/'
  },
  stats: {
    yearsExp: 8,
    projects: 50,
    articles: 120,
    stars: '2.5K'
  }
};
