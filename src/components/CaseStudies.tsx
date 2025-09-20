import { ExternalLink, TrendingUp, Users, DollarSign } from 'lucide-react';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const CaseStudies = () => {
  const cases = [
    {
      title: 'Fintech Startup Scale-Up',
      industry: 'Financial Services',
      challenge: 'Rapid market expansion and operational scaling',
      solution: 'Developed comprehensive growth strategy and operational framework',
      results: [
        { icon: TrendingUp, label: 'Revenue Growth', value: '400%' },
        { icon: Users, label: 'Team Expansion', value: '3x' },
        { icon: DollarSign, label: 'Funding Raised', value: '$15M' }
      ],
      duration: '8 months',
      tags: ['Strategy', 'Operations', 'Scaling']
    },
    {
      title: 'Manufacturing Digital Transformation',
      industry: 'Manufacturing',
      challenge: 'Legacy processes hindering competitive advantage',
      solution: 'End-to-end digital transformation and process automation',
      results: [
        { icon: TrendingUp, label: 'Efficiency Gain', value: '60%' },
        { icon: DollarSign, label: 'Cost Reduction', value: '₹50L' },
        { icon: Users, label: 'Employee Satisfaction', value: '+85%' }
      ],
      duration: '12 months',
      tags: ['Digital', 'Process', 'Automation']
    },
    {
      title: 'E-commerce Market Entry',
      industry: 'Retail',
      challenge: 'New market penetration strategy for Southeast Asia',
      solution: 'Market research, entry strategy, and local partnership framework',
      results: [
        { icon: TrendingUp, label: 'Market Share', value: '12%' },
        { icon: Users, label: 'Customer Base', value: '500K+' },
        { icon: DollarSign, label: 'Revenue (Y1)', value: '₹80Cr' }
      ],
      duration: '6 months',
      tags: ['Market Entry', 'Research', 'Strategy']
    }
  ];

  return (
    <section id="case-studies" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Proven <span className="gradient-text">Success Stories</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Real transformations, measurable results. See how we've helped businesses 
            across industries achieve their strategic objectives.
          </p>
        </div>

        {/* Case Studies */}
        <div className="space-y-12">
          {cases.map((caseStudy, index) => (
            <Card 
              key={index} 
              className="hover-lift border-border/50 shadow-lg overflow-hidden animate-slide-up"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <CardHeader className="bg-gradient-to-r from-muted/50 to-accent-light/20 border-b border-border/50">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div>
                    <h3 className="text-2xl font-bold text-foreground mb-2">
                      {caseStudy.title}
                    </h3>
                    <p className="text-accent font-medium text-lg">
                      {caseStudy.industry}
                    </p>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {caseStudy.tags.map((tag, tagIndex) => (
                      <Badge key={tagIndex} variant="secondary" className="bg-accent/10 text-accent">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardHeader>

              <CardContent className="p-8">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                  {/* Challenge & Solution */}
                  <div className="lg:col-span-2 space-y-6">
                    <div>
                      <h4 className="text-lg font-semibold text-foreground mb-3">
                        Challenge
                      </h4>
                      <p className="text-muted-foreground leading-relaxed">
                        {caseStudy.challenge}
                      </p>
                    </div>
                    
                    <div>
                      <h4 className="text-lg font-semibold text-foreground mb-3">
                        Our Solution
                      </h4>
                      <p className="text-muted-foreground leading-relaxed">
                        {caseStudy.solution}
                      </p>
                    </div>

                    <div className="flex items-center justify-between pt-4 border-t border-border/50">
                      <div className="text-sm text-muted-foreground">
                        Project Duration: <span className="font-medium text-foreground">{caseStudy.duration}</span>
                      </div>
                      <Button variant="outline" size="sm" className="hover:bg-accent hover:text-accent-foreground">
                        View Full Case Study
                        <ExternalLink className="ml-2 h-4 w-4" />
                      </Button>
                    </div>
                  </div>

                  {/* Results */}
                  <div className="space-y-4">
                    <h4 className="text-lg font-semibold text-foreground mb-4">
                      Key Results
                    </h4>
                    {caseStudy.results.map((result, resultIndex) => (
                      <div key={resultIndex} className="bg-gradient-to-r from-accent-light/30 to-primary-light/30 rounded-lg p-4">
                        <div className="flex items-center space-x-3 mb-2">
                          <result.icon className="h-5 w-5 text-accent" />
                          <span className="text-sm font-medium text-muted-foreground">
                            {result.label}
                          </span>
                        </div>
                        <div className="text-2xl font-bold text-foreground">
                          {result.value}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* View All CTA */}
        <div className="text-center mt-16 animate-fade-in">
          <Button size="lg" className="bg-primary hover:bg-primary-hover text-lg px-8 py-4">
            View All Case Studies
            <ExternalLink className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;