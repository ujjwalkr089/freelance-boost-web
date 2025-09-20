import { CheckCircle, Award, Globe, Lightbulb } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const About = () => {
  const values = [
    {
      icon: Award,
      title: 'Excellence',
      description: 'Delivering exceptional results through proven methodologies and deep industry expertise'
    },
    {
      icon: Globe,
      title: 'Global Perspective',
      description: 'Bringing international best practices to local markets with cultural sensitivity'
    },
    {
      icon: Lightbulb,
      title: 'Innovation',
      description: 'Pioneering new approaches to traditional business challenges and opportunities'
    }
  ];

  const achievements = [
    'Over 15 years of combined consulting experience',
    'Clients across 12+ industry verticals',
    'Average ROI improvement of 40% within first year',
    'Featured in leading business publications'
  ];

  return (
    <section id="about" className="py-24 bg-gradient-to-b from-background to-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Trusted Partners in
              <span className="gradient-text block">Strategic Growth</span>
            </h2>
            
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Based in the heart of Bengaluru's business district, Freelance Consulting combines 
              deep local market knowledge with global best practices to drive transformational 
              change for ambitious organizations.
            </p>

            <div className="space-y-4 mb-8">
              {achievements.map((achievement, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-accent flex-shrink-0" />
                  <span className="text-foreground">{achievement}</span>
                </div>
              ))}
            </div>

            <div className="bg-primary-light/50 rounded-lg p-6 border border-primary/10">
              <p className="text-primary font-medium text-lg italic">
                "We don't just provide recommendations – we partner with you to ensure 
                sustainable implementation and measurable results."
              </p>
              <div className="mt-3 text-sm text-primary/80">
                — Founding Partners
              </div>
            </div>
          </div>

          {/* Values Cards */}
          <div className="space-y-6 animate-slide-up">
            {values.map((value, index) => (
              <Card key={index} className="hover-lift border-border/50 shadow-md">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-gradient-to-br from-accent to-accent-hover rounded-lg flex items-center justify-center">
                        <value.icon className="h-6 w-6 text-accent-foreground" />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-foreground mb-2">
                        {value.title}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {value.description}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;