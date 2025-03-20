'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Bot, ArrowRight, Sparkles, FileText, Share2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card } from '@/components/ui/card';
import { Textarea } from '@/components/ui/textarea';

export function ProductsSection() {
  const [url, setUrl] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);
  const [generatedBlog, setGeneratedBlog] = useState('');

  const handleGenerate = async () => {
    setIsGenerating(true);
    // Simulated API call delay
    await new Promise(resolve => setTimeout(resolve, 2000));
    setGeneratedBlog(`# The Future of E-commerce

In today's rapidly evolving digital landscape, e-commerce has become more than just a convenience—it's a necessity. Businesses that adapt to the online marketplace are finding new opportunities for growth and customer engagement.

## Key Benefits of E-commerce

1. Global Reach
2. 24/7 Availability
3. Reduced Operational Costs
4. Enhanced Customer Data Insights

## Leveraging AI for Better Results

Modern e-commerce platforms are increasingly utilizing AI to:
- Personalize customer experiences
- Optimize inventory management
- Predict market trends
- Enhance customer service

## Getting Started

The transition to e-commerce doesn't have to be overwhelming. With the right partner and tools, your business can thrive in the digital space.`);
    setIsGenerating(false);
  };

  const features = [
    {
      icon: Bot,
      title: 'AI-Powered Writing',
      description: 'Advanced AI algorithms create engaging, SEO-optimized content tailored to your brand voice.',
    },
    {
      icon: FileText,
      title: 'Content Analysis',
      description: 'Automatically analyzes your existing content to maintain consistent tone and style.',
    },
    {
      icon: Share2,
      title: 'One-Click Publishing',
      description: 'Seamlessly publish generated content to your website or content management system.',
    },
  ];

  return (
    <section className="py-20 bg-background relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/50 to-background" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">AI Blog Writer</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Transform your ideas into engaging blog posts with our AI-powered content generator.
              Save time and maintain consistent quality across all your content.
            </p>
          </motion.div>
        </div>

        <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Demo Section */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <Card className="p-6 backdrop-blur-sm bg-card/50">
              <h3 className="text-xl font-semibold mb-4">Try It Now</h3>
              <div className="space-y-4">
                <div>
                  <Input
                    placeholder="Enter your website URL"
                    value={url}
                    onChange={(e) => setUrl(e.target.value)}
                    className="bg-background"
                  />
                </div>
                <Button
                  onClick={handleGenerate}
                  disabled={!url || isGenerating}
                  className="w-full group"
                >
                  {isGenerating ? (
                    <span className="flex items-center">
                      <Sparkles className="mr-2 h-4 w-4 animate-spin" />
                      Generating...
                    </span>
                  ) : (
                    <span className="flex items-center">
                      Generate Blog Post
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </span>
                  )}
                </Button>
              </div>
            </Card>

            {generatedBlog && (
              <Card className="p-6 backdrop-blur-sm bg-card/50">
                <h3 className="text-xl font-semibold mb-4">Generated Blog</h3>
                <Textarea
                  value={generatedBlog}
                  readOnly
                  className="min-h-[300px] bg-background"
                />
                <Button className="mt-4 w-full">Copy to Clipboard</Button>
              </Card>
            )}
          </motion.div>

          {/* Features Grid */}
          <div className="grid gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="p-6 backdrop-blur-sm bg-card/50 hover:bg-card/60 transition-colors">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                      <feature.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                      <p className="text-muted-foreground">{feature.description}</p>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}