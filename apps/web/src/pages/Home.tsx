import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { ArrowRight, BookOpen, Users, Compass, ShieldCheck, HelpCircle, Star, Sparkles, MessageSquare, Calendar, Shield, ArrowUpRight } from 'lucide-react';

export const Home: React.FC = () => {
  const { user, allUsers, skills, schedules } = useAuth();
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  // Derive stats dynamically from context to clean up dummy data
  const stats = [
    { value: `${skills.length || 6}`, label: 'Skills Available', icon: BookOpen, colorClass: 'text-primary' },
    { value: `${allUsers.length || 3}`, label: 'Active Swappers', icon: Users, colorClass: 'text-accent' },
    { value: `${schedules.filter(s => s.status === 'completed').length || 0}`, label: 'Completed Sessions', icon: Compass, colorClass: 'text-warning-dark' },
    { value: '99%', label: 'Success Rate', icon: ShieldCheck, colorClass: 'text-danger' },
  ];

  // Dynamically feed first two listing skills to the hero showcase card
  const featuredSkill1 = skills[1] || { name: 'React & TypeScript Mastery', teacher: 'David Chen' };
  const featuredSkill2 = skills[0] || { name: 'UI/UX Design with Figma', teacher: 'Sarah Jenkins' };

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
    { name: 'Sarah Jenkins', role: 'UI Designer', review: 'I loved the clean layout right away. Direct Messaging made scheduling so easy! I taught 3 students Figma and used my tokens to learn French.', rating: 5, avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100' },
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
    <div className="space-y-28 pb-20 overflow-hidden bg-bg">
      
      {/* Hero Section */}
      <section className="relative pt-12 sm:pt-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center justify-between gap-16">
        <div className="flex-1 flex flex-col items-center lg:items-start text-center lg:text-left space-y-6 z-10">
          
          {/* Google styled micro badge */}
          <div className="inline-flex items-center space-x-2 bg-primary/10 border border-primary/20 rounded-full px-4.5 py-1.5 text-xs sm:text-sm text-primary font-bold shadow-sm">
            <Sparkles className="w-4 h-4 text-warning-dark" />
            <span>Next-Gen Peer-to-Peer Exchange</span>
          </div>

          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black leading-tight tracking-tight text-textPrimary">
            Master New Skills. <br />
            <span className="text-primary">Zero Capital.</span>
          </h1>

          <p className="text-textSecondary text-base sm:text-lg max-w-2xl leading-relaxed">
            Join the elite command center for high-performance skill acquisition. Trade expertise directly with top-tier creators and developers in a frictionless, Material-powered ecosystem.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2 w-full">
            {user ? (
              <Link 
                to="/dashboard" 
                className="google-btn-primary w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 space-x-2 active:scale-95 transition-transform"
              >
                <span>Go to Dashboard</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
            ) : (
              <>
                <Link 
                  to="/login?tab=register" 
                  className="google-btn-primary w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 space-x-2 active:scale-95 transition-transform"
                >
                  <span>Start Swapping</span>
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <Link 
                  to="/login" 
                  className="google-btn-outline w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 active:scale-95 transition-transform"
                >
                  <span>Explore Ledger</span>
                </Link>
              </>
            )}
          </div>
        </div>

        {/* High-Fidelity Google Developers Inspired Mock Product Showcase */}
        <div className="flex-1 w-full max-w-xl h-[420px] relative hidden lg:block">
          <div className="absolute inset-0 flex items-center justify-center">
            
            {/* Elevated White Material 3 Card */}
            <div className="google-card w-[430px] h-[320px] p-6 relative overflow-hidden shadow-elevation2 z-20 flex flex-col justify-between hover:shadow-elevation3 hover:scale-101 transition-all duration-300">
              
              {/* Header inside Card */}
              <div className="flex items-center justify-between border-b border-slate-100 pb-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary border border-primary/20">
                    <BookOpen className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-sm text-textPrimary font-bold">{featuredSkill1.name}</div>
                    <div className="text-[10px] text-textSecondary font-medium">Instructor: @{featuredSkill1.teacher.toLowerCase().replace(/\s+/g, '_')}</div>
                  </div>
                </div>
                <div className="google-badge-green text-xs px-3 py-1 rounded-full font-bold">Active Match</div>
              </div>

              {/* Progress Tracker bar */}
              <div className="space-y-2">
                <div className="h-2.5 bg-slate-100 rounded-full w-full overflow-hidden">
                  <div className="h-full bg-primary rounded-full animate-bar-fill" style={{ width: '65%' }}></div>
                </div>
                <div className="flex justify-between text-[10px] text-textSecondary font-bold">
                  <span>Exchange Progress</span>
                  <span className="text-primary">65% Completed</span>
                </div>
              </div>

              {/* Surface Overlay Category Block */}
              <div className="p-3.5 bg-slate-50 rounded-2xl border border-slate-100 flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-accent/15 flex items-center justify-center text-accent">
                  <Compass className="w-4 h-4" />
                </div>
                <div className="flex-grow">
                  <div className="text-xs text-textPrimary font-bold">{featuredSkill2.name}</div>
                  <div className="text-[10px] text-textSecondary font-medium">Requested in return from @{featuredSkill2.teacher.toLowerCase().replace(/\s+/g, '_')}</div>
                </div>
              </div>
            </div>

            {/* Floating micro panels */}
            <div className="google-card absolute top-[20px] right-[10px] w-48 h-24 p-5 z-10 shadow-elevation2 animate-google-float-1 flex flex-col justify-center border-l-4 border-l-primary">
              <div className="text-[10px] text-textSecondary uppercase tracking-wider font-bold mb-1">Total Network Value</div>
              <div className="text-2xl text-textPrimary font-black tracking-tight">$12,450</div>
            </div>

            <div className="google-card absolute bottom-[20px] left-[10px] w-40 h-32 p-4 z-30 shadow-elevation2 animate-google-float-2 flex flex-col justify-between border-b-4 border-b-accent">
              <div className="text-[10px] text-textSecondary uppercase tracking-wider font-bold">Network Speed</div>
              <div className="flex items-end gap-1.5 h-12">
                <div className="w-1/4 bg-slate-200 h-[40%] rounded-t"></div>
                <div className="w-1/4 bg-slate-200 h-[70%] rounded-t"></div>
                <div className="w-1/4 bg-accent h-[100%] rounded-t"></div>
                <div className="w-1/4 bg-accent/60 h-[85%] rounded-t"></div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-bg2 border-y border-slate-200 py-16 relative z-10 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, idx) => (
              <div key={idx} className="google-card p-6 rounded-3xl flex flex-col items-center text-center space-y-2 hover:shadow-elevation2 transition-all">
                <div className="p-3 bg-slate-50 rounded-2xl border border-slate-100 mb-1">
                  <stat.icon className={`w-6 h-6 ${stat.colorClass}`} />
                </div>
                <span className="text-3xl md:text-4xl font-extrabold text-textPrimary tracking-tight">{stat.value}</span>
                <span className="text-textSecondary text-xs uppercase tracking-wider font-bold">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bento Feature Grid Section */}
      <section id="features" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 relative z-10">
        <div className="text-center space-y-4">
          <h2 className="text-3xl sm:text-5xl font-black text-textPrimary tracking-tight">
            Google Product-Grade <span className="text-primary">Arsenal</span>
          </h2>
          <p className="text-textSecondary text-base sm:text-lg max-w-2xl mx-auto font-medium">
            Equipped with everything you need to execute high-value, secure skill transfers.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[250px]">
          
          {/* Zero Cost Exchanges (Large Card, Light Blue overlay) */}
          <div className="google-card google-card-hover rounded-3xl p-8 md:col-span-2 relative overflow-hidden group flex flex-col justify-between">
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-bl-full pointer-events-none" />
            <div className="w-12 h-12 rounded-2xl google-badge-blue flex items-center justify-center font-bold">
              <Sparkles className="w-6 h-6" />
            </div>
            <div className="space-y-2">
              <h3 className="text-xl sm:text-2xl font-black text-textPrimary group-hover:text-primary transition-colors flex items-center gap-2">
                <span>Zero Cost Exchanges</span>
                <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
              </h3>
              <p className="text-textSecondary text-sm sm:text-base max-w-xl leading-relaxed">
                Trade your expertise directly. No fiat required. Just pure intellectual capital exchanged at market value using standard tokens.
              </p>
            </div>
          </div>

          {/* Dynamic Ledgers (Google Green overlay) */}
          <div className="google-card google-card-hover rounded-3xl p-8 relative overflow-hidden group flex flex-col justify-between">
            <div className="absolute top-0 right-0 w-24 h-24 bg-accent/5 rounded-bl-full pointer-events-none" />
            <div className="w-12 h-12 rounded-2xl google-badge-green flex items-center justify-center font-bold">
              <BookOpen className="w-5 h-5" />
            </div>
            <div className="space-y-2">
              <h3 className="text-lg sm:text-xl font-black text-textPrimary group-hover:text-accent-dark transition-colors">Dynamic Ledgers</h3>
              <p className="text-textSecondary text-xs leading-relaxed">
                Track your skill equity in real-time on our immutable ledger. See exactly where your balances go.
              </p>
            </div>
          </div>

          {/* Schedules (Google Blue overlay) */}
          <div className="google-card google-card-hover rounded-3xl p-8 relative overflow-hidden group flex flex-col justify-between">
            <div className="absolute top-0 right-0 w-24 h-24 bg-primary/5 rounded-bl-full pointer-events-none" />
            <div className="w-12 h-12 rounded-2xl google-badge-blue flex items-center justify-center font-bold">
              <Calendar className="w-5 h-5" />
            </div>
            <div className="space-y-2">
              <h3 className="text-lg sm:text-xl font-black text-textPrimary group-hover:text-primary transition-colors">Schedules</h3>
              <p className="text-textSecondary text-xs leading-relaxed">
                Frictionless meeting coordination interfaces. Schedule dates, define duration times, and track lessons.
              </p>
            </div>
          </div>

          {/* Encrypted Comms (Google Yellow overlay) */}
          <div className="google-card google-card-hover rounded-3xl p-8 relative overflow-hidden group flex flex-col justify-between">
            <div className="absolute top-0 right-0 w-24 h-24 bg-warning/5 rounded-bl-full pointer-events-none" />
            <div className="w-12 h-12 rounded-2xl google-badge-yellow flex items-center justify-center font-bold">
              <MessageSquare className="w-5 h-5" />
            </div>
            <div className="space-y-2">
              <h3 className="text-lg sm:text-xl font-black text-textPrimary group-hover:text-warning-dark transition-colors">Encrypted Comms</h3>
              <p className="text-textSecondary text-xs leading-relaxed">
                Secure, low-latency direct chat inboxes. Message educators directly, swap codes, and negotiate course details.
              </p>
            </div>
          </div>

          {/* Command Deck (Google Red overlay) */}
          <div className="google-card google-card-hover rounded-3xl p-8 relative overflow-hidden group flex flex-col justify-between">
            <div className="absolute top-0 right-0 w-24 h-24 bg-danger/5 rounded-bl-full pointer-events-none" />
            <div className="w-12 h-12 rounded-2xl google-badge-red flex items-center justify-center font-bold">
              <Shield className="w-5 h-5" />
            </div>
            <div className="space-y-2">
              <h3 className="text-lg sm:text-xl font-black text-textPrimary group-hover:text-danger transition-colors">Command Deck</h3>
              <p className="text-textSecondary text-xs leading-relaxed">
                Full administrative oversight. Regulate platform-wide parameters, user status suspension toggles, and token reward mints.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How it Works */}
      <section className="bg-bg2 border-y border-slate-200 py-20 relative overflow-hidden shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16 relative z-10">
          <div className="text-center space-y-4">
            <h2 className="text-3xl sm:text-5xl font-black text-textPrimary">How Skill Exchange Works</h2>
            <p className="text-textSecondary text-base sm:text-lg max-w-2xl mx-auto">
              Follow our simple, zero-financial-friction system to start sharing your talent today.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {steps.map((step, idx) => (
              <div key={idx} className="relative google-card google-card-hover rounded-3xl p-8 flex flex-col space-y-4">
                <span className="absolute top-4 right-6 text-5xl font-black text-slate-100 select-none">{step.step}</span>
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
              className="bg-bg2 border border-slate-200 hover:border-primary text-textPrimary hover:text-primary text-xs sm:text-sm font-semibold rounded-full px-5 py-2.5 cursor-pointer transition-all hover:scale-105 shadow-sm"
            >
              {skill}
            </span>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16 relative z-10">
        <div className="text-center space-y-4">
          <h2 className="text-3xl sm:text-5xl font-black text-textPrimary">Trusted by Knowledge Swappers</h2>
          <p className="text-textSecondary text-base sm:text-lg">Read about the learning transformations happening on our platform every day.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((rev, idx) => (
            <div key={idx} className="google-card google-card-hover rounded-3xl p-6 flex flex-col justify-between shadow-elevation1">
              <div className="space-y-4">
                <div className="flex text-warning">
                  {Array.from({ length: rev.rating }).map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-warning text-warning" />
                  ))}
                </div>
                <p className="text-textSecondary text-sm italic leading-relaxed">"{rev.review}"</p>
              </div>

              <div className="flex items-center space-x-3 pt-6 mt-6 border-t border-slate-100">
                <img src={rev.avatar} alt={rev.name} className="w-10 h-10 rounded-full border border-slate-100" />
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
                className="google-card rounded-3xl overflow-hidden transition-all"
              >
                <button 
                  onClick={() => setActiveFaq(isOpen ? null : idx)}
                  className="w-full text-left p-6 flex items-center justify-between font-bold text-textPrimary text-sm sm:text-base hover:text-primary transition-colors focus:outline-none"
                >
                  <span>{faq.q}</span>
                  <span className={`text-sm transition-transform duration-300 ${isOpen ? 'rotate-180 text-primary font-black' : 'text-textSecondary'}`}>
                    ▼
                  </span>
                </button>
                
                <div 
                  className={`transition-all duration-300 overflow-hidden ${
                    isOpen ? 'max-h-48 border-t border-slate-100 p-6 bg-slate-50' : 'max-h-0'
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
        <div className="bg-gradient-to-r from-primary to-primary-dark rounded-3xl p-8 sm:p-12 shadow-elevation2 text-center space-y-6">
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
                className="inline-flex bg-white hover:bg-slate-50 text-primary font-bold px-8 py-4 rounded-full transition-all shadow-md active:scale-95 transform"
              >
                Enter the Dashboard
              </Link>
            ) : (
              <Link 
                to="/login?tab=register" 
                className="inline-flex bg-white hover:bg-slate-50 text-primary font-bold px-8 py-4 rounded-full transition-all shadow-md active:scale-95 transform"
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
