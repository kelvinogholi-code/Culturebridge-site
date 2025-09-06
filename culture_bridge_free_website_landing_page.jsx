export default function CultureBridge() {
  return (
    <div className="bg-blue-50 text-gray-900">
      <header className="bg-blue-700 text-white p-6 shadow-md">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-3xl font-bold">CultureBridge</h1>
          <nav className="space-x-6">
            <a href="#problem" className="hover:underline">Problem</a>
            <a href="#solution" className="hover:underline">Solution</a>
            <a href="#how" className="hover:underline">How It Works</a>
            <a href="#pricing" className="hover:underline">Pricing</a>
            <a href="#contact" className="hover:underline">Contact</a>
          </nav>
        </div>
      </header>

      <section className="text-center py-20 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <h2 className="text-5xl font-bold mb-4">Bridge Cultures, Build Connections</h2>
        <p className="max-w-2xl mx-auto mb-8 text-lg">
          Helping immigrants and newcomers learn languages, understand local culture,
          and integrate seamlessly into their new communities.
        </p>
        <form className="max-w-md mx-auto bg-white p-4 rounded-2xl shadow-lg">
          <input type="email" placeholder="Enter your email" className="p-3 w-full border rounded-lg mb-4" />
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg w-full">
            Join the Waitlist
          </button>
        </form>
      </section>

      <section id="problem" className="container mx-auto py-16">
        <h3 className="text-3xl font-bold text-center mb-8">The Problem</h3>
        <p className="max-w-3xl mx-auto text-center text-lg">
          Millions of immigrants struggle with language barriers and cultural misunderstandings,
          leading to isolation, unemployment, and slower integration. Traditional language learning tools
          fail to address real-world context and local customs.
        </p>
      </section>

      <section id="solution" className="bg-white py-16">
        <div className="container mx-auto text-center">
          <h3 className="text-3xl font-bold mb-6">Our Solution</h3>
          <p className="max-w-3xl mx-auto text-lg mb-8">
            CultureBridge is a mobile-first platform combining AI-powered language lessons with
            local culture training. It provides real-life scenarios, community connections,
            and personalized learning to help newcomers feel at home faster.
          </p>
        </div>
      </section>

      <section id="how" className="bg-blue-50 py-16">
        <div className="container mx-auto text-center">
          <h3 className="text-3xl font-bold mb-10">How It Works</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 bg-white rounded-xl shadow">
              <h4 className="text-xl font-semibold mb-2">1. Learn</h4>
              <p>AI-driven language lessons tailored to daily life and work situations.</p>
            </div>
            <div className="p-6 bg-white rounded-xl shadow">
              <h4 className="text-xl font-semibold mb-2">2. Connect</h4>
              <p>Engage with mentors, cultural ambassadors, and other newcomers.</p>
            </div>
            <div className="p-6 bg-white rounded-xl shadow">
              <h4 className="text-xl font-semibold mb-2">3. Thrive</h4>
              <p>Gain confidence to integrate into your new environment seamlessly.</p>
            </div>
          </div>
        </div>
      </section>

      <section id="pricing" className="container mx-auto py-16 text-center">
        <h3 className="text-3xl font-bold mb-10">Pricing Plans</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-6 bg-white rounded-xl shadow border">
            <h4 className="text-xl font-semibold mb-2">Freemium</h4>
            <p className="mb-4">Basic lessons and cultural tips for free.</p>
            <p className="text-blue-600 font-bold">$0/month</p>
          </div>
          <div className="p-6 bg-white rounded-xl shadow border">
            <h4 className="text-xl font-semibold mb-2">Plus</h4>
            <p className="mb-4">Advanced features and personalized coaching.</p>
            <p className="text-blue-600 font-bold">$9.99/month</p>
          </div>
          <div className="p-6 bg-white rounded-xl shadow border">
            <h4 className="text-xl font-semibold mb-2">Teams</h4>
            <p className="mb-4">For organizations supporting newcomers at scale.</p>
            <p className="text-blue-600 font-bold">Custom pricing</p>
          </div>
        </div>
      </section>

      <section id="contact" className="bg-blue-700 text-white py-16">
        <div className="container mx-auto text-center">
          <h3 className="text-3xl font-bold mb-6">Get In Touch</h3>
          <p className="mb-8">Have questions or want to partner with us? Reach out today!</p>
          <form className="max-w-lg mx-auto">
            <input type="text" placeholder="Your Name" className="p-3 w-full border rounded-lg mb-4 text-black" />
            <input type="email" placeholder="Your Email" className="p-3 w-full border rounded-lg mb-4 text-black" />
            <textarea placeholder="Your Message" className="p-3 w-full border rounded-lg mb-4 text-black" rows="4"></textarea>
            <button className="bg-white text-blue-700 font-semibold py-3 px-6 rounded-lg w-full hover:bg-gray-100">
              Send Message
            </button>
          </form>
        </div>
      </section>

      <footer className="bg-blue-800 text-white text-center p-6">
        <p>© 2025 CultureBridge. All rights reserved.</p>
      </footer>
    </div>
  );
}