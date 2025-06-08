import { useState } from 'react';

const Home = () => {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Send email to your backend or waitlist tool
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setEmail('');
    }, 3000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-purple-900 text-white overflow-hidden relative">
      {/* Floating Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-32 h-32 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute top-40 right-20 w-40 h-40 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute bottom-20 left-1/4 w-36 h-36 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
      </div>

      <div className="relative z-10 flex flex-col items-center px-4">
        {/* Hero Section */}
        <section className="text-center py-20 max-w-4xl">
          <div className="mb-8">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white text-sm font-semibold px-4 py-2 rounded-full mb-6">
              🚀 Early Access Available
            </div>
            <h1 className="text-6xl md:text-7xl font-black mb-6 leading-tight">
              <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                Drop 🔥 Bits.
              </span>
              <br />
              <span className="text-white">
                Own the Game.
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto leading-relaxed">
              The ultimate battleground for short-form content. Collect your favorite clips, 
              compete with friends, and dominate the leaderboards.
            </p>
          </div>

          {/* Enhanced Waitlist Form */}
          <div className="max-w-md mx-auto">
            {!isSubmitted ? (
              <div className="space-y-4">
                <div className="relative group">
                  <input
                    type="email"
                    required
                    placeholder="Enter your email for early access"
                    className="w-full px-6 py-4 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 group-hover:bg-white/15"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <button
                  onClick={handleSubmit}
                  className="w-full px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 rounded-2xl text-white font-bold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/25"
                >
                  Join the Revolution
                </button>
              </div>
            ) : (
              <div className="animate-fade-in">
                <div className="bg-green-500/20 border border-green-500/30 rounded-2xl p-6 mb-4">
                  <div className="text-4xl mb-2">🎉</div>
                  <h3 className="text-xl font-bold text-green-400 mb-2">You're In!</h3>
                  <p className="text-gray-300">We'll notify you when BitDrop launches.</p>
                </div>
              </div>
            )}
          </div>

          <p className="text-sm text-gray-500 mt-6">
            Join <span className="text-blue-400 font-semibold">2,847</span> others waiting for launch
          </p>
        </section>

        {/* Features Section */}
        <section className="max-w-6xl w-full py-16">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
              How BitDrop Works
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Three simple steps to become the ultimate content curator and competitor
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="group relative">
              <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-3xl p-8 border border-gray-700/50 hover:border-blue-500/50 transition-all duration-500 transform hover:-translate-y-2 hover:shadow-2xl hover:shadow-blue-500/10">
                <div className="text-5xl mb-6 group-hover:scale-110 transition-transform duration-300">🎯</div>
                <h3 className="font-bold text-xl mb-4 text-blue-400">Drop Your Clips</h3>
                <p className="text-gray-400 leading-relaxed">
                  Share directly from TikTok, Instagram, or YouTube. Our AI instantly categorizes 
                  your content for maximum impact.
                </p>
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
            </div>

            <div className="group relative">
              <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-3xl p-8 border border-gray-700/50 hover:border-purple-500/50 transition-all duration-500 transform hover:-translate-y-2 hover:shadow-2xl hover:shadow-purple-500/10">
                <div className="text-5xl mb-6 group-hover:scale-110 transition-transform duration-300">👥</div>
                <h3 className="font-bold text-xl mb-4 text-purple-400">Battle Friends</h3>
                <p className="text-gray-400 leading-relaxed">
                  Create private groups or join global tournaments. Real-time voting 
                  determines who has the best taste.
                </p>
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
            </div>

            <div className="group relative">
              <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-3xl p-8 border border-gray-700/50 hover:border-pink-500/50 transition-all duration-500 transform hover:-translate-y-2 hover:shadow-2xl hover:shadow-pink-500/10">
                <div className="text-5xl mb-6 group-hover:scale-110 transition-transform duration-300">🏆</div>
                <h3 className="font-bold text-xl mb-4 text-pink-400">Claim Victory</h3>
                <p className="text-gray-400 leading-relaxed">
                  Climb the leaderboards, earn badges, and unlock exclusive features. 
                  Become the ultimate BitDrop champion.
                </p>
                <div className="absolute inset-0 bg-gradient-to-br from-pink-500/5 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
            </div>
          </div>
        </section>

        {/* Social Proof Section */}
        <section className="max-w-4xl w-full text-center py-16">
          <div className="bg-gradient-to-r from-gray-800/30 to-gray-900/30 backdrop-blur-md rounded-3xl p-8 border border-gray-700/30">
            <h3 className="text-2xl font-bold mb-6">Early Access Perks</h3>
            <div className="grid sm:grid-cols-3 gap-6 text-sm">
              <div className="flex items-center justify-center gap-2">
                <span className="text-green-400">✓</span>
                <span>Lifetime Premium Features</span>
              </div>
              <div className="flex items-center justify-center gap-2">
                <span className="text-green-400">✓</span>
                <span>Exclusive Launch Badges</span>
              </div>
              <div className="flex items-center justify-center gap-2">
                <span className="text-green-400">✓</span>
                <span>Priority Support</span>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <section className="text-center py-12 text-gray-500">
          <div className="flex items-center justify-center gap-6 mb-4">
            <a href="#" className="hover:text-blue-400 transition-colors">
              Follow @bitdropapp
            </a>
            <span>•</span>
            <span>Coming to iOS & Android</span>
          </div>
          <p className="text-xs">
            Built for creators, designed for competition.
          </p>
        </section>
      </div>
    </div>
  );
};

export default Home;