import { Project, Skill, Certification, SocialLink } from '../types';

export const projects: Project[] = [
  {
    id: 1,
    title: "SecureNet Monitoring Platform",
    description: "Real-time network security monitoring dashboard with threat detection and automated response capabilities. Built with React, Node.js, and MongoDB.",
    image: "https://images.pexels.com/photos/5380664/pexels-photo-5380664.jpeg?auto=compress&cs=tinysrgb&w=800",
    techStack: ["React", "Node.js", "MongoDB", "Socket.io", "Python"],
    liveUrl: "https://securenet-demo.netlify.app",
    githubUrl: "https://github.com/yafet-yilma/securenet",
    featured: true
  },
  {
    id: 2,
    title: "Vulnerability Assessment Tool",
    description: "Automated vulnerability scanning and reporting tool for web applications. Features comprehensive security analysis and detailed remediation suggestions.",
    image: "https://images.pexels.com/photos/5380679/pexels-photo-5380679.jpeg?auto=compress&cs=tinysrgb&w=800",
    techStack: ["Python", "Django", "PostgreSQL", "Docker", "OWASP ZAP"],
    githubUrl: "https://github.com/yafet-yilma/vuln-scanner",
    featured: true
  },
  {
    id: 3,
    title: "E-Commerce Security Audit",
    description: "Complete security assessment and penetration testing of a large-scale e-commerce platform. Identified and helped remediate critical vulnerabilities.",
    image: "https://images.pexels.com/photos/5380623/pexels-photo-5380623.jpeg?auto=compress&cs=tinysrgb&w=800",
    techStack: ["Kali Linux", "Burp Suite", "Metasploit", "OWASP", "SQL Injection"],
    featured: true
  },
  {
    id: 4,
    title: "Encrypted Chat Application",
    description: "End-to-end encrypted messaging application with perfect forward secrecy. Built with modern web technologies and cryptographic best practices.",
    image: "https://images.pexels.com/photos/5380642/pexels-photo-5380642.jpeg?auto=compress&cs=tinysrgb&w=800",
    techStack: ["React", "WebRTC", "Node.js", "Socket.io", "Cryptography"],
    liveUrl: "https://encrypted-chat-demo.netlify.app",
    githubUrl: "https://github.com/yafet-yilma/encrypted-chat",
    featured: true
  },
  {
    id: 5,
    title: "DevSecOps CI/CD Pipeline",
    description: "Automated security testing integration in CI/CD pipeline with SAST, DAST, and dependency scanning. Implemented for multiple microservices architecture.",
    image: "https://images.pexels.com/photos/5380635/pexels-photo-5380635.jpeg?auto=compress&cs=tinysrgb&w=800",
    techStack: ["Jenkins", "Docker", "Kubernetes", "SonarQube", "OWASP Dependency Check"],
    githubUrl: "https://github.com/yafet-yilma/devsecops-pipeline",
    featured: true
  },
  {
    id: 6,
    title: "Incident Response Dashboard",
    description: "Centralized security incident management and response platform with automated alerting and workflow management for SOC teams.",
    image: "https://images.pexels.com/photos/5380659/pexels-photo-5380659.jpeg?auto=compress&cs=tinysrgb&w=800",
    techStack: ["Vue.js", "Express.js", "Redis", "Elasticsearch", "Grafana"],
    liveUrl: "https://incident-response-demo.netlify.app",
    githubUrl: "https://github.com/yafet-yilma/incident-dashboard",
    featured: true
  }
];

export const skills: Skill[] = [
  // Cybersecurity
  { name: "Penetration Testing", level: 95, category: "cybersecurity" },
  { name: "Vulnerability Assessment", level: 92, category: "cybersecurity" },
  { name: "Network Security", level: 88, category: "cybersecurity" },
  { name: "Incident Response", level: 85, category: "cybersecurity" },
  { name: "Malware Analysis", level: 80, category: "cybersecurity" },
  { name: "Digital Forensics", level: 78, category: "cybersecurity" },
  
  // Frontend
  { name: "React", level: 90, category: "frontend" },
  { name: "TypeScript", level: 87, category: "frontend" },
  { name: "JavaScript", level: 92, category: "frontend" },
  { name: "Tailwind CSS", level: 85, category: "frontend" },
  { name: "Vue.js", level: 82, category: "frontend" },
  
  // Backend
  { name: "Node.js", level: 88, category: "backend" },
  { name: "Python", level: 93, category: "backend" },
  { name: "Java", level: 80, category: "backend" },
  { name: "PostgreSQL", level: 85, category: "backend" },
  { name: "MongoDB", level: 83, category: "backend" },
  { name: "REST APIs", level: 90, category: "backend" },
  
  // Tools
  { name: "Linux", level: 95, category: "tools" },
  { name: "Docker", level: 87, category: "tools" },
  { name: "Git", level: 92, category: "tools" },
  { name: "AWS", level: 82, category: "tools" },
  { name: "Kali Linux", level: 90, category: "tools" },
  { name: "Burp Suite", level: 88, category: "tools" }
];

export const certifications: Certification[] = [
  {
    name: "Certified Ethical Hacker (CEH)",
    issuer: "EC-Council",
    date: "2023",
    credentialId: "ECC8012345678",
    icon: "shield-check"
  },
  {
    name: "CompTIA Security+",
    issuer: "CompTIA",
    date: "2023",
    credentialId: "COMP001234567",
    icon: "award"
  },
  {
    name: "AWS Certified Security - Specialty",
    issuer: "Amazon Web Services",
    date: "2024",
    credentialId: "AWS-SEC-2024-001",
    icon: "cloud"
  },
  {
    name: "CISSP Associate",
    issuer: "(ISC)²",
    date: "2024",
    credentialId: "ISC2-2024-456",
    icon: "lock"
  }
];

export const socialLinks: SocialLink[] = [
  {
    platform: "GitHub",
    url: "https://github.com/coderzzone",
    icon: "github"
  },
  {
    platform: "LinkedIn",
    url: "https://www.linkedin.com/in/yafetyilma/",
    icon: "linkedin"
  },
  {
    platform: "Twitter",
    url: "https://twitter.com/coderzzone",
    icon: "twitter"
  },
  {
    platform: "Email",
    url: "mailto:yaficofi@gmail.com",
    icon: "mail"
  }
];