import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { ArrowRight, BookOpen, Users, Compass, ShieldCheck, HelpCircle, Star, Sparkles, Check, Play } from 'lucide-react';

export const Home: React.FC = () => {
  const { user } = useAuth();
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  const stats = [
    { value: '15,000+', label: 'Skills Exchanged', icon: BookOpen },
    { value: '45+', label: 'Active Countries', icon: Compass },
    { value: '98%', label: 'Success Rate', icon: ShieldCheck },
    { value: '25,000+', label: 'Platform Users', icon: Users },
  ];

  const features = [
    { title: 'Zero Cost Exchanges', desc: 'No credit cards. No membership fees. You pay with knowledge tokens earned by teaching others.', icon: '💰' },
    { title: 'Dynamic Ledgers', desc: 'Maintain complete security over your balance with real-time transactional transparency.', icon: '📊' },
    { title: 'Interactive Class Schedules', desc: 'Coordinate virtual lessons effortlessly with an integrated scheduling interface.', icon: '📅' },
    { title: 'Direct Messaging Inbox', desc: 'Chat directly with peers, ask clarification questions, and plan courses seamlessly.', icon: '💬' },
    { title: 'High-End SuperAdmin Hub', desc: 'Complete administrative command to regulate system settings, items, and users.', icon: '👮' },
    { title: 'GSSoC 2026 Ready', desc: 'Outstanding structure built following optimal React and TypeScript standards for open source.', icon: '⚡' },
  ];

  const steps = [
    { step: '01', title: 'Create a Profile', desc: 'Register your skills to teach and things you want to learn. Get 200 welcome tokens instantly.' },
    { step: '02', title: 'Earn Tokens by Teaching', desc: 'Publish skills, host a session for others, and receive tokens directly to your ledger.' },
    { step: '03', title: 'Unlock Free Classes', desc: 'Spend your earned tokens to join expert classes in design, coding, writing, and business.' },
  ];

  const skillsList = [
    'React & Web Development', 'Figma UI/UX Design', 'Python & Data Science', 
    'Creative Writing', 'Public Speaking', 'Digital Marketing', 
    'Music Theory & Piano', 'French & Spanish', 'Financial Modeling', 
    'Agile Scrum Methodology', 'Video Editing & VFX', 'Photography Masterclass'
  ];

  const reviews = [
    { name: 'Marcus Aurelius', role: 'Business Strategist', review: 'SkillxPro allowed me to learn React in exchange for offering lessons in Agile development. The token system makes the exchange completely fair and rewarding.', rating: 5, avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100' },
    { name: 'Sarah Jenkins', role: 'UI Designer', review: 'I loved the glassmorphism aesthetic right away. Direct Messaging made scheduling so easy! I taught 3 students Figma and used my tokens to learn French.', rating: 5, avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100' },
    { name: 'David Chen', role: 'Full Stack Dev', review: 'The dynamic token ledger and admin dashboard are highly secure and engaging. An incredible tool to foster real collaborative learning without monetary stress.', rating: 5, avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100' },
  ];

  const faqs = [
    { q: 'How does the token system work?', a: 'Every new user gets a welcome bonus (200 tokens). Teaching a class awards you tokens paid by the student. You can use these tokens to enroll in classes taught by other experts. It is a completely self-sustaining economy!' },
    { q: 'Are there any hidden fees?', a: 'No! SkillxPro is 100% free and open-source. There are no registration costs, subscription plans, or hidden microtransactions.' },
    { q: 'What topics can I teach or learn?', a: 'You can teach anything you are skilled at! From programming languages and design tools to creative writing, languages, music, and business management.' },
    { q: 'How do I schedule a class?', a: 'Once you find a skill you like in the marketplace, you can click to Message the teacher. Direct messaging allows you to align on a time. Once agreed, the teacher schedules the class, and tokens are safely escrowed.' },
    { q: 'Is this project open-source?', a: 'Yes! SkillxPro is a prideful participant of GirlScript Summer of Code (GSSoC) 2026. Anyone can inspect the code, add features, and submit PRs following our GSSoC contributor roadmap.' },
  ];

  return (
    <div className="space-y-24 pb-20">
      {/* Hero Section */}
      <section className="relative pt-10 sm:pt-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center space-y-8">
        {/* Glowing badge */}
        <div className="inline-flex items-center space-x-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-1.5 text-xs sm:text-sm text-primary-light font-semibold shadow-glow animate-pulse">
          <Sparkles className="w-4 h-4 text-yellow-400" />
          <span>GSSoC 2026 Contributor-Ready Project</span>
        </div>

        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black leading-tight tracking-tight max-w-5xl">
          Learn and Teach Without Spending{' '}
          <span className="bg-gradient-to-r from-primary via-primary-light to-accent bg-clip-text text-transparent">
            A Single Dollar
          </span>
        </h1>

        <p className="text-textSecondary text-lg sm:text-xl max-w-3xl leading-relaxed">
          SkillxPro is a borderless skill-exchange platform powered by collaborative knowledge tokens. Swap digital skills, teach a class, and level up your career for free.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4 w-full max-w-md">
          {user ? (
            <Link 
              to="/dashboard" 
              className="w-full sm:w-auto inline-flex items-center justify-center bg-gradient-to-r from-primary to-primary-light hover:opacity-95 text-white font-bold px-8 py-4 rounded-full shadow-glow space-x-2 transition-all"
            >
              <span>Go to Dashboard</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
          ) : (
            <>
              <Link 
                to="/login?tab=register" 
                className="w-full sm:w-auto inline-flex items-center justify-center bg-gradient-to-r from-primary to-primary-light hover:opacity-95 text-white font-bold px-8 py-4 rounded-full shadow-glow space-x-2 transition-all"
              >
                <span>Get Started Now</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link 
                to="/login" 
                className="w-full sm:w-auto inline-flex items-center justify-center bg-bg2 border border-primary/25 hover:border-primary/50 text-textPrimary font-semibold px-8 py-4 rounded-full transition-all"
              >
                <span>Sign In</span>
              </Link>
            </>
          )}
        </div>

        {/* Visual Mock Showcase (Float Card) */}
        <div className="w-full max-w-5xl pt-12 relative group">
          <div className="absolute inset-0 bg-primary/10 rounded-3xl filter blur-3xl opacity-50 group-hover:opacity-75 transition-opacity pointer-events-none" />
          <div className="relative bg-bg2 border border-primary/20 rounded-3xl overflow-hidden shadow-glass p-6 md:p-10 flex flex-col md:flex-row items-center gap-8">
            <div className="flex-1 text-left space-y-4">
              <span className="text-xs uppercase bg-accent/20 text-accent border border-accent/30 rounded-full px-2.5 py-0.5 font-semibold">
                Live Interactive Sandbox
              </span>
              <h3 className="text-2xl md:text-3xl font-black text-textPrimary">
                Complete Glassmorphism Interface
              </h3>
              <p className="text-textSecondary text-sm md:text-base leading-relaxed">
                Enjoy fluid custom widgets, interactive budget calculators, a persistent message inbox, and highly descriptive GSSoC roadmap checkpoints right from your browser.
              </p>
              <ul className="grid grid-cols-2 gap-2 text-xs md:text-sm text-textPrimary font-medium">
                <li className="flex items-center"><Check className="w-4 h-4 text-accent mr-2" /> 200 Welcome Tokens</li>
                <li className="flex items-center"><Check className="w-4 h-4 text-accent mr-2" /> Real-time Chat Ledger</li>
                <li className="flex items-center"><Check className="w-4 h-4 text-accent mr-2" /> Responsive Grid Cards</li>
                <li className="flex items-center"><Check className="w-4 h-4 text-accent mr-2" /> Complete Admin Panels</li>
              </ul>
            </div>
            
            <div className="flex-1 w-full max-w-md relative">
              <img 
                src="https://images.unsplash.com/photo-1531403009284-440f080d1e12?w=600" 
                alt="Product Interface Mock" 
                className="rounded-2xl border border-primary/15 shadow-glow object-cover h-64 w-full"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-bg2 to-transparent flex items-center justify-center">
                <Link to="/login" className="bg-primary hover:bg-primary-dark text-white p-4 rounded-full shadow-glow transform hover:scale-110 transition-transform">
                  <Play className="w-6 h-6 fill-white" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-bg2/40 border-y border-primary/5 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, idx) => (
              <div key={idx} className="flex flex-col items-center text-center space-y-2 p-4">
                <div className="p-3 bg-primary/10 rounded-2xl text-primary border border-primary/10">
                  <stat.icon className="w-6 h-6" />
                </div>
                <span className="text-3xl md:text-4xl font-extrabold text-textPrimary">{stat.value}</span>
                <span className="text-textSecondary text-sm font-medium">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section id="features" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="text-center space-y-4">
          <h2 className="text-3xl sm:text-5xl font-black">
            Everything You Need to{' '}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Collaborate</span>
          </h2>
          <p className="text-textSecondary text-base sm:text-lg max-w-2xl mx-auto">
            SkillxPro combines stateful client-side data syncing with beautiful layouts to make learning fun and rewarding.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feat, idx) => (
            <div 
              key={idx} 
              className="bg-bg2 border border-primary/10 hover:border-primary/30 rounded-2xl p-6 transition-all duration-300 transform hover:-translate-y-2 flex flex-col justify-between shadow-glass relative group"
            >
              <div className="absolute top-0 right-0 w-16 h-16 bg-primary/5 rounded-bl-3xl group-hover:bg-primary/10 transition-colors pointer-events-none" />
              <div className="space-y-4">
                <span className="text-3xl inline-block bg-primary/10 border border-primary/20 rounded-xl p-2.5">{feat.icon}</span>
                <h3 className="text-lg font-bold text-textPrimary">{feat.title}</h3>
                <p className="text-textSecondary text-sm leading-relaxed">{feat.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* How it Works */}
      <section className="bg-bg2/30 border-y border-primary/5 py-20 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-primary/5 rounded-full filter blur-[120px] pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16 relative z-10">
          <div className="text-center space-y-4">
            <h2 className="text-3xl sm:text-5xl font-black">How Skill Exchange Works</h2>
            <p className="text-textSecondary text-base sm:text-lg max-w-2xl mx-auto">
              Follow our simple, zero-financial-friction system to start sharing your talent today.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {steps.map((step, idx) => (
              <div key={idx} className="relative bg-bg2 border border-primary/10 rounded-2xl p-8 flex flex-col space-y-4 shadow-glass hover:border-primary/25 transition-all">
                <span className="absolute top-4 right-6 text-5xl font-black text-primary/10 select-none">{step.step}</span>
                <h3 className="text-xl font-bold text-textPrimary">{step.title}</h3>
                <p className="text-textSecondary text-sm leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Showcase Tags */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="text-center space-y-2">
          <h2 className="text-2xl sm:text-4xl font-black text-textPrimary">Popular Categories</h2>
          <p className="text-textSecondary text-sm sm:text-base">Exchange tokens in these highly sought-after skills and fields.</p>
        </div>

        <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
          {skillsList.map((skill, idx) => (
            <span 
              key={idx} 
              className="bg-primary/5 border border-primary/15 hover:border-primary/30 text-textPrimary hover:text-primary-light text-xs sm:text-sm font-semibold rounded-full px-4 py-2 cursor-pointer transition-all hover:scale-105 shadow-sm"
            >
              {skill}
            </span>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        <div className="text-center space-y-4">
          <h2 className="text-3xl sm:text-5xl font-black">Trusted by Knowledge Swappers</h2>
          <p className="text-textSecondary text-base sm:text-lg">Read about the learning transformations happening on our platform every day.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((rev, idx) => (
            <div key={idx} className="bg-bg2 border border-primary/10 rounded-2xl p-6 flex flex-col justify-between shadow-glass hover:border-primary/20 transition-all">
              <div className="space-y-4">
                <div className="flex text-yellow-400">
                  {Array.from({ length: rev.rating }).map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400" />
                  ))}
                </div>
                <p className="text-textSecondary text-sm italic leading-relaxed">"{rev.review}"</p>
              </div>

              <div className="flex items-center space-x-3 pt-6 mt-6 border-t border-primary/10">
                <img src={rev.avatar} alt={rev.name} className="w-10 h-10 rounded-full border border-primary/20" />
                <div>
                  <h4 className="text-sm font-bold text-textPrimary">{rev.name}</h4>
                  <p className="text-xs text-textSecondary">{rev.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Expandable FAQs Accordion */}
      <section id="faq" className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <div className="text-center space-y-4">
          <HelpCircle className="w-10 h-10 text-primary mx-auto" />
          <h2 className="text-3xl sm:text-4xl font-black text-textPrimary">Frequently Asked Questions</h2>
          <p className="text-textSecondary text-sm sm:text-base">Everything you need to know about SkillxPro.</p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = activeFaq === idx;
            return (
              <div 
                key={idx} 
                className="bg-bg2 border border-primary/10 hover:border-primary/20 rounded-2xl overflow-hidden transition-all shadow-glass"
              >
                <button 
                  onClick={() => setActiveFaq(isOpen ? null : idx)}
                  className="w-full text-left p-6 flex items-center justify-between font-bold text-textPrimary text-sm sm:text-base hover:text-primary transition-colors focus:outline-none"
                >
                  <span>{faq.q}</span>
                  <span className={`text-xl font-bold transition-transform duration-300 ${isOpen ? 'rotate-180 text-primary' : 'text-textSecondary'}`}>
                    ▼
                  </span>
                </button>
                
                <div 
                  className={`transition-all duration-300 overflow-hidden ${
                    isOpen ? 'max-h-48 border-t border-primary/5 p-6' : 'max-h-0'
                  }`}
                >
                  <p className="text-textSecondary text-sm leading-relaxed">{faq.a}</p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* CTA Box */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-primary to-primary-light rounded-3xl p-8 sm:p-12 relative overflow-hidden shadow-glow text-center space-y-6">
          <div className="absolute top-[-50%] right-[-30%] w-96 h-96 bg-accent/25 rounded-full filter blur-[100px] pointer-events-none" />
          
          <h2 className="text-3xl sm:text-5xl font-black text-white leading-tight">
            Ready to Share Your Skills?
          </h2>
          
          <p className="text-white/80 text-base sm:text-lg max-w-xl mx-auto">
            Register your account today and unlock a borderless marketplace of skilled teaching exchanges instantly.
          </p>

          <div className="pt-4">
            {user ? (
              <Link 
                to="/dashboard" 
                className="inline-flex bg-white hover:bg-opacity-95 text-primary font-bold px-8 py-4 rounded-full transition-all"
              >
                Enter the Dashboard
              </Link>
            ) : (
              <Link 
                to="/login?tab=register" 
                className="inline-flex bg-white hover:bg-opacity-95 text-primary font-bold px-8 py-4 rounded-full transition-all shadow-lg hover:shadow-xl"
              >
                Get 200 Welcome Tokens
              </Link>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};
