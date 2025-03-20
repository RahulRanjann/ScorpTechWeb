'use client';

import { motion } from 'framer-motion';
import { Code2, Bot, ShoppingCart } from 'lucide-react';
import { Card } from '@/components/ui/card';

const services = [
  {
    icon: Code2,
    title: 'Web & App Development',
    description:
      'Custom-built web applications and mobile apps that deliver exceptional user experiences.',
  },
  {
    icon: Bot,
    title: 'AI-Powered Solutions',
    description:
      'Leverage cutting-edge AI technology to automate and enhance your business processes.',
  },
  {
    icon: ShoppingCart,
    title: 'E-commerce & Integrations',
    description:
      'Seamless e-commerce solutions with custom integrations for your unique business needs.',
  },
];

export function ServicesSection() {
  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl sm:text-4xl font-bold"
          >
            Our Services
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-4 text-lg text-muted-foreground"
          >
            Comprehensive solutions for your digital transformation
          </motion.p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <Card className="relative p-6 h-full bg-card/50 backdrop-blur-sm border-muted hover:border-primary/50 transition-colors">
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-primary/5 to-transparent rounded-lg" />
                <div className="relative">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <service.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                  <p className="text-muted-foreground">{service.description}</p>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}