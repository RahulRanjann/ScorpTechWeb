'use client';

import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { Code2, Bot, Palette, Terminal, Globe } from 'lucide-react';

const team = [
  {
    name: 'Sarah Chen',
    role: 'CEO & AI Architect',
    icon: Bot,
    description: 'Leading innovation in AI-powered business solutions.',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=200&h=200&fit=crop',
    initials: 'SC'
  },
  {
    name: 'Alex Rodriguez',
    role: 'Lead Developer',
    icon: Code2,
    description: 'Full-stack expert specializing in scalable architectures.',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&h=200&fit=crop',
    initials: 'AR'
  },
  {
    name: 'Maya Patel',
    role: 'UX/UI Designer',
    icon: Palette,
    description: 'Creating intuitive and beautiful user experiences.',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200&h=200&fit=crop',
    initials: 'MP'
  },
  {
    name: 'James Wilson',
    role: 'Backend Engineer',
    icon: Terminal,
    description: 'Building robust and secure server infrastructures.',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=200&h=200&fit=crop',
    initials: 'JW'
  },
  {
    name: 'Lisa Zhang',
    role: 'Solutions Architect',
    icon: Globe,
    description: 'Designing comprehensive digital transformation strategies.',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=200&h=200&fit=crop',
    initials: 'LZ'
  },
];

const clients = [
  {
    name: 'TechCorp Solutions',
    description: 'Increased online presence by 300% through our AI-powered solutions.',
    industry: 'Technology',
  },
  {
    name: 'GreenLeaf Organics',
    description: 'Successfully transitioned from local store to national e-commerce brand.',
    industry: 'Retail',
  },
  {
    name: 'BuildRight Construction',
    description: 'Streamlined project management with custom digital solutions.',
    industry: 'Construction',
  },
];

export function TeamSection() {
  return (
    <section className="py-20 bg-background relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/50 to-background" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Team Section */}
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Meet Our Team</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Experts in AI, development, and digital transformation, working together to bring your vision to life.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {team.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="p-6 backdrop-blur-sm bg-card/50 hover:bg-card/60 transition-colors">
                <div className="flex items-center space-x-4 mb-4">
                  <Avatar className="h-16 w-16 border-2 border-primary/10">
                    <AvatarImage src={member.image} alt={member.name} />
                    <AvatarFallback>{member.initials}</AvatarFallback>
                  </Avatar>
                  <div>
                    <h3 className="text-xl font-semibold">{member.name}</h3>
                    <p className="text-muted-foreground">{member.role}</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
                    <member.icon className="w-4 h-4 text-primary" />
                  </div>
                  <p className="text-muted-foreground">{member.description}</p>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Clients Section */}
        <div className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Trusted By Industry Leaders</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              See how we've helped businesses across industries transform their digital presence.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {clients.map((client, index) => (
            <motion.div
              key={client.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="p-6 backdrop-blur-sm bg-card/50 hover:bg-card/60 transition-colors">
                <div className="space-y-4">
                  <div>
                    <h3 className="text-xl font-semibold">{client.name}</h3>
                    <p className="text-sm text-muted-foreground">{client.industry}</p>
                  </div>
                  <p className="text-muted-foreground">{client.description}</p>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}