import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { ArrowRight, BookOpen, Users, Compass, ShieldCheck, HelpCircle, Star, Sparkles, MessageSquare, Calendar, Shield } from 'lucide-react';

export const Home: React.FC = () => {
  const { user } = useAuth();
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  const stats = [
    { value: '15,000+', label: 'Skills Exchanged', icon: BookOpen },
    { value: '45+', label: 'Active Countries', icon: Compass },
    { value: '98%', label: 'Success Rate', icon: ShieldCheck },
    { value: '25,000+', label: 'Platform Users', icon: Users },
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
    { q: 'Is this project open-source?', a: 'Yes! SkillxPro is an open-source project. Anyone can inspect the code, add new features, and submit pull requests following our community contributor guidelines.' },
  ];

  return (
    <div className="space-y-28 pb-20 overflow-hidden">
      
      {/* Hero Section */}
      <section className="relative pt-8 sm:pt-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center justify-between gap-12">
        <div className="flex-1 flex flex-col items-center lg:items-start text-center lg:text-left space-y-6 z-10">
          {/* Glowing badge */}
          <div className="inline-flex items-center space-x-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-1.5 text-xs sm:text-sm text-primary-light font-semibold shadow-glow animate-pulse">
            <Sparkles className="w-4 h-4 text-accent" />
            <span>Open Source Contributor-Ready Project</span>
          </div>

          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black leading-tight tracking-tight">
            Evolve Your Stack. <br />
            <span className="text-gradient">Zero Capital.</span>
          </h1>

          <p className="text-textSecondary text-base sm:text-lg max-w-2xl leading-relaxed">
            Join the elite command center for high-performance skill acquisition. Trade expertise directly with top-tier creators and developers in a frictionless, glass-powered ecosystem.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2 w-full">
            {user ? (
              <Link 
                to="/dashboard" 
                className="btn-primary w-full sm:w-auto inline-flex items-center justify-center font-bold px-8 py-4 rounded-2xl shadow-glow space-x-2"
              >
                <span>Initialize Exchange</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
            ) : (
              <>
                <Link 
                  to="/login?tab=register" 
                  className="btn-primary w-full sm:w-auto inline-flex items-center justify-center font-bold px-8 py-4 rounded-2xl shadow-glow space-x-2"
                >
                  <span>Initialize Exchange</span>
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <Link 
                  to="/login" 
                  className="btn-secondary w-full sm:w-auto inline-flex items-center justify-center text-textPrimary font-semibold px-8 py-4 rounded-2xl"
                >
                  <span>Explore Ledger</span>
                </Link>
              </>
            )}
          </div>
        </div>

        {/* Abstract 3D Hero UI Element built with HTML/CSS */}
        <div className="flex-1 w-full max-w-xl h-[450px] relative hidden lg:block">
          <div className="absolute inset-0 flex items-center justify-center transform hover:rotate-y-[0deg] hover:rotate-x-[0deg] transition-transform duration-700 ease-out">
            
            {/* Primary Glass Card */}
            <div className="glass-card w-[420px] h-[310px] rounded-3xl p-6 relative overflow-hidden shadow-[0_20px_40px_rgba(168,85,247,0.15)] z-20 flex flex-col justify-between">
              
              {/* Mock UI Inside */}
              <div className="flex items-center justify-between border-b border-white/10 pb-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center border border-primary/50">
                    <BookOpen className="w-5 h-5 text-primary-light" />
                  </div>
                  <div>
                    <div className="text-sm text-textPrimary font-bold">React Architecture</div>
                    <div className="text-[10px] text-textSecondary">Offered by @dev_nova</div>
                  </div>
                </div>
                <div className="text-xs text-accent border border-accent/30 bg-accent/10 px-2.5 py-0.5 rounded-full font-bold">Active</div>
              </div>

              <div className="space-y-2">
                <div className="h-2 bg-slate-800 rounded-full w-full overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-primary to-accent w-[65%]"></div>
                </div>
                <div className="flex justify-between text-[10px] text-textSecondary font-bold">
                  <span>Exchange Progress</span>
                  <span>65%</span>
                </div>
              </div>

              <div className="p-3 bg-slate-900/50 rounded-2xl border border-white/5 flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-accent/20 flex items-center justify-center border border-accent/50">
                  <Compass className="w-4 h-4 text-accent" />
                </div>
                <div className="flex-grow">
                  <div className="text-xs text-textPrimary font-bold">UI/UX Mentorship</div>
                  <div className="text-[10px] text-textSecondary">Requested in return</div>
                </div>
              </div>

              {/* Glowing orb behind mock UI */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[220px] h-[220px] bg-primary/20 blur-[50px] rounded-full z-[-1]"></div>
            </div>

            {/* Floating secondary cards */}
            <div className="glass-card absolute top-[10px] right-[10px] w-48 h-24 rounded-2xl p-4 z-10 shadow-[0_10px_30px_rgba(0,0,0,0.5)] animate-float-1 flex flex-col justify-center">
              <div className="text-[10px] text-textSecondary uppercase tracking-widest font-bold mb-1">Total Exchanged Value</div>
              <div className="text-2xl text-accent font-black tracking-tight">$12,450</div>
            </div>

            <div className="glass-card absolute bottom-[10px] left-[15px] w-44 h-32 rounded-2xl p-4 z-30 shadow-[0_10px_30px_rgba(0,0,0,0.5)] animate-float-2 flex flex-col justify-between">
              <div className="text-[10px] text-textSecondary uppercase tracking-widest font-bold">Network Ping</div>
              <div className="flex items-end gap-1.5 h-12">
                <div className="w-1/4 bg-primary-light/40 h-[40%] rounded-t-lg"></div>
                <div className="w-1/4 bg-primary-light/60 h-[70%] rounded-t-lg"></div>
                <div className="w-1/4 bg-primary h-[100%] rounded-t-lg shadow-glow"></div>
                <div className="w-1/4 bg-primary-light/80 h-[85%] rounded-t-lg"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-slate-900/40 border-y border-white/5 py-16 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, idx) => (
              <div key={idx} className="glass-card p-6 rounded-2xl flex flex-col items-center text-center space-y-2">
                <div className="p-3 bg-primary/10 rounded-2xl text-primary border border-primary/10">
                  <stat.icon className="w-6 h-6" />
                </div>
                <span className="text-3xl md:text-4xl font-black text-primary-light">{stat.value}</span>
                <span className="text-textSecondary text-xs uppercase tracking-widest font-bold">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bento Grid Features Section */}
      <section id="features" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 relative z-10">
        <div className="text-center space-y-4">
          <h2 className="text-3xl sm:text-5xl font-black">
            Command Deck <span className="text-gradient">Arsenal</span>
          </h2>
          <p className="text-textSecondary text-base sm:text-lg max-w-2xl mx-auto">
            Equipped with everything you need to execute high-value skill transfers.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[240px]">
          
          {/* Zero Cost Exchanges (Large 2-column card) */}
          <div className="glass-card rounded-3xl p-8 md:col-span-2 relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="relative z-10 h-full flex flex-col justify-between">
              <div className="w-12 h-12 rounded-2xl bg-primary/20 flex items-center justify-center border border-primary/50 text-primary-light">
                <Sparkles className="w-5 h-5" />
              </div>
              <div className="space-y-2">
                <h3 className="text-xl sm:text-2xl font-black text-textPrimary group-hover:text-primary-light transition-colors">Zero Cost Exchanges</h3>
                <p className="text-textSecondary text-sm sm:text-base max-w-xl">
                  Trade your expertise directly. No fiat required. Just pure intellectual capital exchanged at market value.
                </p>
              </div>
            </div>
          </div>

          {/* Dynamic Ledgers */}
          <div className="glass-card rounded-3xl p-8 relative overflow-hidden group">
            <div className="relative z-10 h-full flex flex-col justify-between">
              <div className="w-12 h-12 rounded-2xl bg-accent/20 flex items-center justify-center border border-accent/50 text-accent">
                <BookOpen className="w-5 h-5" />
              </div>
              <div className="space-y-2">
                <h3 className="text-lg sm:text-xl font-black text-textPrimary group-hover:text-accent transition-colors">Dynamic Ledgers</h3>
                <p className="text-textSecondary text-xs leading-relaxed">
                  Track your skill equity in real-time on our immutable sandbox ledger. See exactly where your balances go.
                </p>
              </div>
            </div>
          </div>

          {/* Schedules Calendar */}
          <div className="glass-card rounded-3xl p-8 relative overflow-hidden group">
            <div className="relative z-10 h-full flex flex-col justify-between">
              <div className="w-12 h-12 rounded-2xl bg-tertiary/20 flex items-center justify-center border border-tertiary/50 text-tertiary-light">
                <Calendar className="w-5 h-5" />
              </div>
              <div className="space-y-2">
                <h3 className="text-lg sm:text-xl font-black text-textPrimary group-hover:text-tertiary-light transition-colors">Schedules</h3>
                <p className="text-textSecondary text-xs leading-relaxed">
                  Frictionless meeting coordination interfaces. Schedule dates, define duration times, and track lessons.
                </p>
              </div>
            </div>
          </div>

          {/* Direct Chat */}
          <div className="glass-card rounded-3xl p-8 relative overflow-hidden group">
            <div className="relative z-10 h-full flex flex-col justify-between">
              <div className="w-12 h-12 rounded-2xl bg-primary/20 flex items-center justify-center border border-primary/50 text-primary-light">
                <MessageSquare className="w-5 h-5" />
              </div>
              <div className="space-y-2">
                <h3 className="text-lg sm:text-xl font-black text-textPrimary group-hover:text-primary-light transition-colors">Encrypted Comms</h3>
                <p className="text-textSecondary text-xs leading-relaxed">
                  Secure, low-latency direct chat inboxes. Message educators directly, swap codes, and negotiate course details.
                </p>
              </div>
            </div>
          </div>

          {/* Admin Command Deck */}
          <div className="glass-card rounded-3xl p-8 relative overflow-hidden group">
            <div className="relative z-10 h-full flex flex-col justify-between">
              <div className="w-12 h-12 rounded-2xl bg-slate-800/80 flex items-center justify-center border border-white/10 text-textPrimary">
                <Shield className="w-5 h-5" />
              </div>
              <div className="space-y-2">
                <h3 className="text-lg sm:text-xl font-black text-textPrimary group-hover:text-white transition-colors">Command Deck</h3>
                <p className="text-textSecondary text-xs leading-relaxed">
                  Full administrative oversight. Regulate platform-wide parameters, user status suspension toggles, and token reward mints.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How it Works */}
      <section className="bg-slate-900/30 border-y border-white/5 py-20 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16 relative z-10">
          <div className="text-center space-y-4">
            <h2 className="text-3xl sm:text-5xl font-black">How Skill Exchange Works</h2>
            <p className="text-textSecondary text-base sm:text-lg max-w-2xl mx-auto">
              Follow our simple, zero-financial-friction system to start sharing your talent today.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {steps.map((step, idx) => (
              <div key={idx} className="relative glass-card rounded-2xl p-8 flex flex-col space-y-4 shadow-glass">
                <span className="absolute top-4 right-6 text-5xl font-black text-primary/10 select-none">{step.step}</span>
                <h3 className="text-xl font-bold text-textPrimary">{step.title}</h3>
                <p className="text-textSecondary text-sm leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Categories Showcase */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 relative z-10">
        <div className="text-center space-y-2">
          <h2 className="text-2xl sm:text-4xl font-black text-textPrimary">Popular Categories</h2>
          <p className="text-textSecondary text-sm sm:text-base">Exchange tokens in these highly sought-after skills and fields.</p>
        </div>

        <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
          {skillsList.map((skill, idx) => (
            <span 
              key={idx} 
              className="bg-primary/5 border border-primary/15 hover:border-primary/40 text-textPrimary hover:text-primary-light text-xs sm:text-sm font-semibold rounded-full px-4 py-2 cursor-pointer transition-all hover:scale-105 shadow-sm"
            >
              {skill}
            </span>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16 relative z-10">
        <div className="text-center space-y-4">
          <h2 className="text-3xl sm:text-5xl font-black">Trusted by Knowledge Swappers</h2>
          <p className="text-textSecondary text-base sm:text-lg">Read about the learning transformations happening on our platform every day.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((rev, idx) => (
            <div key={idx} className="glass-card rounded-2xl p-6 flex flex-col justify-between shadow-glass">
              <div className="space-y-4">
                <div className="flex text-yellow-400">
                  {Array.from({ length: rev.rating }).map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400" />
                  ))}
                </div>
                <p className="text-textSecondary text-sm italic leading-relaxed">"{rev.review}"</p>
              </div>

              <div className="flex items-center space-x-3 pt-6 mt-6 border-t border-white/5">
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
      <section id="faq" className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10 relative z-10">
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
                className="glass-card rounded-2xl overflow-hidden transition-all shadow-glass"
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
                    isOpen ? 'max-h-48 border-t border-white/5 p-6' : 'max-h-0'
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
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
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
                className="inline-flex bg-white hover:bg-opacity-95 text-bg font-bold px-8 py-4 rounded-2xl transition-all shadow-glow hover:scale-102"
              >
                Enter the Dashboard
              </Link>
            ) : (
              <Link 
                to="/login?tab=register" 
                className="inline-flex bg-white hover:bg-opacity-95 text-bg font-bold px-8 py-4 rounded-2xl transition-all shadow-glow hover:scale-102"
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
