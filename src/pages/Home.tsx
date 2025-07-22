import { useState } from 'react';
import { GrAppleAppStore } from "react-icons/gr";
import { IoLogoGooglePlaystore } from "react-icons/io5";

const Home = () => {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: any) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setEmail('');
    }, 3000);
  };

  return (
    <div className="min-h-screen bg-zinc-900 text-white font-sans">
      {/* Header */}
      <header className="border-b border-zinc-800 bg-zinc-900/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <div className="text-2xl font-bold text-white">BitDrop</div>
            </div>
            <nav className="hidden md:flex items-center space-x-8">
              <a href="#features" className="text-zinc-400 hover:text-white transition-colors font-medium">Features</a>
              <a href="#testimonials" className="text-zinc-400 hover:text-white transition-colors font-medium">Success Stories</a>
              <a href="#pricing" className="text-zinc-400 hover:text-white transition-colors font-medium">Early Access</a>
              <button className="bg-blue-600/50 hover:bg-blue-600 cursor-pointer text-white px-4 py-2 rounded-full text-sm font-medium transition-all transform hover:scale-105">
                Join Waitlist
              </button>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative bg-zinc-900 py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-blue-900/30 border border-blue-500/30 text-blue-300 text-sm font-medium px-4 py-2 rounded-full mb-8">
              🚀 Limited Early Access - First 5,000 Users Only
            </div>
            
            {/* Main Headline */}
            <h1 className="text-5xl md:text-7xl font-medium mb-6 text-start leading-tight text-white tracking-tighter">
              Turn your Best Clips <br /> into{' '} 
              <span className="text-blue-400">Epic Victories</span>
            </h1>
            
            {/* Subheadline */}
            <p className="text-xl md:text-2xl text-start text-zinc-300 mb-12 max-w-4xl leading-relaxed">
              Meet the mobile battleground where your TikTok, Instagram & YouTube clips compete for glory. 
              <span className="text-white font-semibold"> By content creators, for content creators.</span>
            </p>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-start items-center mb-16">
              <button 
                onClick={() => {
                  const el = document.getElementById('waitlist');
                  if (el) {
                    el.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                className="bg-blue-600/50 hover:bg-blue-600 text-white cursor-pointer px-6 py-3 rounded-full font-semibold text-lg transition-all transform hover:scale-105"
              >
                Join the waitlist now
              </button>
              <div className="text-zinc-400 text-sm">
                <span className="font-bold text-white">4,247</span> creators already on board
              </div>
            </div>

            {/* Phone Mockup */}
            <div className="flex justify-center mb-16">
              <div className="relative">
                <div className="w-80 h-[650px] bg-zinc-800 rounded-[3rem] p-3 shadow-2xl">
                  <div className="w-full h-full bg-black rounded-[2.5rem] relative overflow-hidden">
                    <div className="absolute top-8 left-0 right-0 p-6">
                      <div className="text-center text-white mb-6">
                        <div className="text-sm text-zinc-400 mb-1">BitDrop Battle</div>
                        <div className="text-xs text-zinc-500">Round 1 of 5</div>
                      </div>
                      
                      <div className="space-y-4">
                        <div className="bg-zinc-800 rounded-2xl p-4">
                          <div className="w-full h-40 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl mb-3 flex items-center justify-center">
                            <span className="text-4xl">🎬</span>
                          </div>
                          <div className="text-white text-sm font-medium">Epic Dance Move</div>
                          <div className="text-zinc-400 text-xs">@you • 2.1K views</div>
                        </div>
                        
                        <div className="text-center text-white font-bold text-lg">VS</div>
                        
                        <div className="bg-zinc-800 rounded-2xl p-4">
                          <div className="w-full h-40 bg-gradient-to-r from-pink-500 to-red-500 rounded-xl mb-3 flex items-center justify-center">
                            <span className="text-4xl">🔥</span>
                          </div>
                          <div className="text-white text-sm font-medium">Cooking Hack</div>
                          <div className="text-zinc-400 text-xs">@friend • 1.8K views</div>
                        </div>
                        
                        <div className="flex gap-3 pt-4">
                          <button className="flex-1 bg-blue-600 text-white rounded-xl py-3 text-sm font-medium">
                            Vote Left
                          </button>
                          <button className="flex-1 bg-zinc-700 text-white rounded-xl py-3 text-sm font-medium">
                            Vote Right
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Founder's Foreword Section */}
      <section className="py-12 bg-zinc-900">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-start mb-12">
            <h2 className="text-4xl md:text-5xl font-medium mb-3 text-start leading-tight text-white tracking-tighter">Founder's foreword</h2>
            <p className="text-xl text-zinc-300">We're crafting BitDrop with passion, precision and quality.</p>
          </div>
          
          <div className="max-w-4xl">
            <div className="bg-zinc-700 rounded-2xl p-8 shadow-sm border border-zinc-600">
              <blockquote className="text-lg md:text-xl text-zinc-200 leading-relaxed mb-8">
                "As a content creator with over 500K followers across platforms, I've always wondered: 
                whose content truly resonates the most? Traditional metrics like views and likes don't tell the whole story.
                <br /><br />
                BitDrop is the culmination of my experience in the creator economy to help fellow creators 
                discover what content truly connects with audiences. The best part of BitDrop is that all users 
                emerge with better insights into what makes content legendary."
              </blockquote>
              
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-xl">
                  A
                </div>
                <div>
                  <div className="font-bold text-white">Alex Chen</div>
                  <div className="text-zinc-300">Founder, CEO of BitDrop</div>
                  <div className="text-zinc-400 text-sm">Ex-TikTok Creator • 500K+ followers • Author of "The Creator's Playbook"</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section id="testimonials" className="py-20 bg-zinc-900">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-start mb-16">
            <h2 className="text-4xl md:text-5xl font-medium mb-3 text-start leading-tight text-white tracking-tighter">Users success stories</h2>
            <p className="text-xl text-zinc-300">The wins don't lie</p>
            <p className="text-xl text-zinc-400 mt-2">
              Scores of our beta users have gained clarity on their <br /> content strategy and boosted engagement rates. Be the next.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="rounded-2xl p-6 border border-zinc-700 bg-zinc-800/80 backdrop-blur-sm">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold">
                  J
                </div>
                <div>
                  <div className="font-semibold text-white">@jakethemaker</div>
                  <div className="text-sm text-zinc-400">Content Creator, 50K followers</div>
                </div>
              </div>
              <p className="text-zinc-200 leading-relaxed">
                "Finally settled the debate about who has the best content in our friend group! 
                My dance videos consistently win battles now. Engagement up 40%."
              </p>
            </div>

            <div className="rounded-2xl p-6 border border-zinc-700 bg-zinc-800/80 backdrop-blur-sm">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-pink-600 rounded-full flex items-center justify-center text-white font-bold">
                  M
                </div>
                <div>
                  <div className="font-semibold text-white">@mariadances</div>
                  <div className="text-sm text-zinc-400">TikTok Dancer, 120K followers</div>
                </div>
              </div>
              <p className="text-zinc-200 leading-relaxed">
                "The AI matching is incredible - always pairs my clips with perfect competitors. 
                BitDrop understands content better than any platform I've used."
              </p>
            </div>

            <div className="rounded-2xl p-6 border border-zinc-700 bg-zinc-800/80 backdrop-blur-sm">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center text-white font-bold">
                  S
                </div>
                <div>
                  <div className="font-semibold text-white">@sammycooks</div>
                  <div className="text-sm text-zinc-400">Food Creator, 75K followers</div>
                </div>
              </div>
              <p className="text-zinc-200 leading-relaxed">
                "Discovered which of my recipes actually resonate with audiences. 
                Now I know exactly what content to create more of. Game changer!"
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-zinc-900">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-start mb-16">
            <h2 className="text-4xl md:text-5xl font-medium mb-3 text-start leading-tight text-white tracking-tighter">
              A simple yet comprehensive <br /> approach to content battles
            </h2>
            <p className="text-xl text-zinc-300 max-w-3xl">
              Content competition has never been more nuanced. BitDrop simplifies <br /> the entire process 
              into three strategic steps that creators can master.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="rounded-2xl p-8 border border-zinc-700 bg-zinc-800/80 backdrop-blur-sm">
              <div className="w-16 h-16 bg-blue-900/30 border border-blue-500/30 rounded-2xl flex items-center justify-center mb-6">
                <span className="text-3xl">🎯</span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Drop Your Fire</h3>
              <p className="text-zinc-300 leading-relaxed mb-6">
                Share directly from TikTok, Instagram, or YouTube. Our AI instantly categorizes 
                your content and finds perfect battle matchups.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="bg-blue-900/30 border border-blue-500/30 text-blue-300 text-xs font-medium px-3 py-1 rounded-full">Auto-import</span>
                <span className="bg-blue-900/30 border border-blue-500/30 text-blue-300 text-xs font-medium px-3 py-1 rounded-full">Smart tagging</span>
                <span className="bg-blue-900/30 border border-blue-500/30 text-blue-300 text-xs font-medium px-3 py-1 rounded-full">Instant upload</span>
              </div>
            </div>

            <div className="rounded-2xl p-8 border border-zinc-700 bg-zinc-800/80 backdrop-blur-sm">
              <div className="w-16 h-16 bg-purple-900/30 border border-purple-500/30 rounded-2xl flex items-center justify-center mb-6">
                <span className="text-3xl">⚔️</span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Battle & Vote</h3>
              <p className="text-zinc-300 leading-relaxed mb-6">
                Create private groups or join global tournaments. Real-time voting 
                determines who has the ultimate taste in content.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="bg-purple-900/30 border border-purple-500/30 text-purple-300 text-xs font-medium px-3 py-1 rounded-full">Live battles</span>
                <span className="bg-purple-900/30 border border-purple-500/30 text-purple-300 text-xs font-medium px-3 py-1 rounded-full">Friend groups</span>
                <span className="bg-purple-900/30 border border-purple-500/30 text-purple-300 text-xs font-medium px-3 py-1 rounded-full">Global tournaments</span>
              </div>
            </div>

            <div className="rounded-2xl p-8 border border-zinc-700 bg-zinc-800/80 backdrop-blur-sm">
              <div className="w-16 h-16 bg-yellow-900/30 border border-yellow-500/30 rounded-2xl flex items-center justify-center mb-6">
                <span className="text-3xl">🏆</span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Claim Your Crown</h3>
              <p className="text-zinc-300 leading-relaxed mb-6">
                Climb leaderboards, unlock exclusive badges, and earn bragging rights. 
                Become the undisputed BitDrop champion in your circle.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="bg-yellow-900/30 border border-yellow-500/30 text-yellow-300 text-xs font-medium px-3 py-1 rounded-full">Leaderboards</span>
                <span className="bg-yellow-900/30 border border-yellow-500/30 text-yellow-300 text-xs font-medium px-3 py-1 rounded-full">Exclusive badges</span>
                <span className="bg-yellow-900/30 border border-yellow-500/30 text-yellow-300 text-xs font-medium px-3 py-1 rounded-full">Champion status</span>
              </div>
            </div>
          </div>

          {/* Feature Categories */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center mx-auto mb-3">
                <span className="text-white text-xl">📱</span>
              </div>
              <h4 className="font-semibold text-white mb-2">Mobile First</h4>
              <p className="text-sm text-zinc-400">Native iOS & Android apps</p>
            </div>
            
            <div className="text-center">
              <div className="w-12 h-12 bg-purple-600 rounded-xl flex items-center justify-center mx-auto mb-3">
                <span className="text-white text-xl">🤖</span>
              </div>
              <h4 className="font-semibold text-white mb-2">AI Matching</h4>
              <p className="text-sm text-zinc-400">Smart content categorization</p>
            </div>
            
            <div className="text-center">
              <div className="w-12 h-12 bg-green-600 rounded-xl flex items-center justify-center mx-auto mb-3">
                <span className="text-white text-xl">⚡</span>
              </div>
              <h4 className="font-semibold text-white mb-2">Real-time</h4>
              <p className="text-sm text-zinc-400">Live voting & instant results</p>
            </div>
            
            <div className="text-center">
              <div className="w-12 h-12 bg-pink-600 rounded-xl flex items-center justify-center mx-auto mb-3">
                <span className="text-white text-xl">🎨</span>
              </div>
              <h4 className="font-semibold text-white mb-2">Multi-platform</h4>
              <p className="text-sm text-zinc-400">TikTok, Instagram, YouTube</p>
            </div>
          </div>
        </div>
      </section>

      {/* Early Access Section */}
      <section id="pricing" className="py-20 bg-zinc-900">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-start mb-12">
            <h2 className="text-4xl md:text-5xl font-medium mb-3 text-start leading-tight text-white tracking-tighter">Early Access VIP Perks</h2>
            <p className="text-xl text-zinc-300">Get lifetime benefits by joining our exclusive early access program</p>
          </div>

          <div className="bg-gradient-to-r from-blue-600/40 from-0% via-zinc-900/60 via-50% to-purple-600/40 to-100% rounded-3xl p-8 text-white border-2 border-zinc-700 mb-16">
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-4xl mb-4">🎨</div>
                <h4 className="text-xl font-bold mb-2">Lifetime Premium</h4>
                <p className="text-blue-100">All features unlocked forever</p>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-4">👑</div>
                <h4 className="text-xl font-bold mb-2">Founder Badge</h4>
                <p className="text-blue-100">Exclusive launch recognition</p>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-4">🎯</div>
                <h4 className="text-xl font-bold mb-2">Priority Support</h4>
                <p className="text-blue-100">Direct line to our team</p>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-4">🚀</div>
                <h4 className="text-xl font-bold mb-2">Beta Access</h4>
                <p className="text-blue-100">Try new features first</p>
              </div>
            </div>
          </div>

          {/* Waitlist Form */}
          <div id="waitlist" className="">
            {!isSubmitted ? (
              <div className="space-x-4">
                <div className='flex'>
                  <input
                    type="email"
                    required
                    placeholder="Enter your email for exclusive early access"
                    className="w-2xl px-6 py-3 border border-zinc-600 bg-zinc-800 rounded-xl text-white placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <button
                    onClick={handleSubmit}
                    className="bg-blue-600/50 hover:bg-blue-600 text-white cursor-pointer px-6 py-2 rounded-full font-semibold text-md transition-all transform hover:scale-105 ml-4"
                  >
                    Secure My Spot
                  </button>

                </div>
                <p className="text-xs text-zinc-400 text-start ml-2 mt-2">
                  No spam, just launch updates. Unsubscribe anytime.
                </p>
              </div>
            ) : (
              <div className="bg-green-900/30 border border-green-500/30 rounded-xl p-8 text-center">
                <div className="text-4xl mb-4">🎉</div>
                <h3 className="text-2xl font-bold text-green-300 mb-2">Welcome to the Battle!</h3>
                <p className="text-green-200">You're in! We'll notify you the moment BitDrop launches.</p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Coming Soon */}
      <section className="py-20 bg-zinc-900">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-start flex flex-col">
            <h2 className="text-4xl md:text-5xl font-medium mb-3 text-start leading-tight text-white tracking-tighter">Coming to Your Favorite Devices</h2>
            <div className="flex flex-col justify-center items-start gap-6 my-8">
              <div className="flex items-center space-x-3">
                <div className="w-20 h-20 bg-zinc-800 border border-zinc-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <GrAppleAppStore className="text-white text-5xl" />
                </div>
                <h4 className="text-xl font-bold text-white ml-3">App Store</h4>
                <p className="text-zinc-400 italic">iPhone - Coming soon</p>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-20 h-20 bg-zinc-800 border border-zinc-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <IoLogoGooglePlaystore className="text-white text-4xl" />
                </div>
                <h4 className="text-xl font-bold text-white ml-3">Play Store</h4>
                <p className="text-zinc-400 italic">Mobile devices - Coming soon</p>
              </div>
            </div>
            <p className="text-zinc-400">
              Native mobile apps launching Q3 2025 • Cross-platform battles • Cloud sync
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-zinc-900 border-t border-zinc-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-8 md:mb-0">
              <div className="text-2xl font-bold mb-2">BitDrop</div>
              <p className="text-zinc-400">The future of content competition starts here.</p>
            </div>
            
            <div className="flex items-center gap-8">
              <a href="#" className="text-zinc-400 hover:text-white transition-colors">
                📱 Follow @bitdropapp
              </a>
              <a href="#" className="text-zinc-400 hover:text-white transition-colors">
                Join Discord
              </a>
              <span className="text-zinc-400">Built for Creators</span>
            </div>
          </div>
          
          <div className="border-t border-zinc-800 mt-12 pt-8 text-center">
            <p className="text-zinc-400 text-sm">
              © 2025 BitDrop. Made with ❤️ for content creators worldwide.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;