import { BarChart3, Users, Search, Cog, ArrowRight } from 'lucide-react';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const Services = () => {
  const services = [
    {
      icon: BarChart3,
      title: 'Strategic Advisory',
      description: 'Comprehensive business strategy development, market entry planning, and growth roadmap creation',
      features: ['Market Analysis', 'Competitive Intelligence', 'Growth Strategy', 'Risk Assessment'],
      color: 'from-primary to-primary-hover'
    },
    {
      icon: Users,
      title: 'Organizational Transformation',
      description: 'End-to-end organizational change management, culture transformation, and operational excellence',
      features: ['Change Management', 'Process Optimization', 'Culture Development', 'Leadership Training'],
      color: 'from-accent to-accent-hover'
    },
    {
      icon: Search,
      title: 'Market Research',
      description: 'In-depth market analysis, consumer insights, and competitive landscape evaluation',
      features: ['Market Sizing', 'Consumer Behavior', 'Trend Analysis', 'Feasibility Studies'],
      color: 'from-primary to-accent'
    },
    {
      icon: Cog,
      title: 'Digital Transformation',
      description: 'Technology strategy, digital adoption roadmaps, and process digitization initiatives',
      features: ['Tech Strategy', 'Digital Roadmap', 'Process Automation', 'Data Analytics'],
      color: 'from-accent to-primary'
    }
  ];

  return (
    <section id="services" className="py-24 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Our <span className="gradient-text">Expertise</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Comprehensive consulting services designed to accelerate your business growth 
            and drive sustainable competitive advantage
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="group hover-lift border-border/50 shadow-lg overflow-hidden animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader className="relative">
                <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-5 group-hover:opacity-10 transition-opacity duration-300`}></div>
                <div className="relative flex items-center space-x-4">
                  <div className={`w-16 h-16 bg-gradient-to-br ${service.color} rounded-xl flex items-center justify-center shadow-lg`}>
                    <service.icon className="h-8 w-8 text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">
                      {service.title}
                    </h3>
                  </div>
                </div>
              </CardHeader>
              
              <CardContent className="pt-0">
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {service.description}
                </p>
                
                <div className="space-y-3 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-accent rounded-full"></div>
                      <span className="text-foreground font-medium">{feature}</span>
                    </div>
                  ))}
                </div>

                <Button 
                  variant="ghost" 
                  className="w-full group-hover:bg-accent group-hover:text-accent-foreground transition-all duration-300"
                >
                  Learn More
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center bg-gradient-to-r from-primary to-accent rounded-2xl p-12 text-primary-foreground animate-fade-in">
          <h3 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Transform Your Business?
          </h3>
          <p className="text-xl mb-8 opacity-90">
            Let's discuss how our expertise can drive your next growth phase
          </p>
          <Button 
            size="lg" 
            variant="outline"
            className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary text-lg px-8 py-4"
          >
            Schedule a Consultation
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Services;