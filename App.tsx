
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';

import Hero from './components/Hero';
import ScriptureSection from './components/ScriptureSection';
import SermonList from './components/SermonList';
import EventCalendar from './components/EventCalendar';
import Gallery from './components/Gallery';
import Footer from './components/Footer';

const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState('home');

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [activeTab]);

  const renderContent = () => {
    switch (activeTab) {
      case 'home':
        return (
          <div className="mt-8">
            <Hero />
            <ScriptureSection />
            <SermonList />
            <EventCalendar />
            <Gallery />
          </div>
        );
      case 'sermons':
        return <div className="mt-10"><SermonList /></div>;
      case 'events':
        return <div className="mt-10"><EventCalendar /></div>;
      case 'about':
        return (
          <div className="pt-40 pb-24 max-w-4xl mx-auto px-4">
            <h1 className="text-5xl font-bold mb-12 serif text-center text-blue-900">Our Story</h1>
            <div className="aspect-video mb-12 rounded-3xl overflow-hidden shadow-2xl border-b-8 border-red-600">
             <img
  src="/images/pastor.jpeg"
  alt="Pastor"
  className="w-full h-full object-cover"
/>

            </div>
            <div className="prose prose-slate lg:prose-xl mx-auto text-slate-700 leading-relaxed">
              <p className="mb-6">
                Zion Harvest International Church began with a divine mandate given to <strong>Pastor Ezekiel</strong> to raise a generation of impact. 
                Rooted in Nairobi, our vision extends globally as we spread the message of God's abundant grace and power.
              </p>
              <h2 className="text-3xl font-bold mt-12 mb-6 serif text-blue-900">Our Core Mandate</h2>
              <ul className="space-y-4 list-none">
                <li className="flex gap-3 items-start">
                  <span className="w-2 h-2 bg-red-600 rounded-full mt-2.5 shrink-0"></span>
                  <span><strong>Prophetic Insight:</strong> Walking in the timing and seasons of God.</span>
                </li>
                <li className="flex gap-3 items-start">
                  <span className="w-2 h-2 bg-red-600 rounded-full mt-2.5 shrink-0"></span>
                  <span><strong>Impact:</strong> Equipping believers to be leaders in every sphere of society.</span>
                </li>
                <li className="flex gap-3 items-start">
                  <span className="w-2 h-2 bg-red-600 rounded-full mt-2.5 shrink-0"></span>
                  <span><strong>Global Outreach:</strong> Taking the word of power to the nations.</span>
                </li>
              </ul>
            </div>
          </div>
        );
      case 'give':
  return (
    <div className="pt-40 pb-24 min-h-screen bg-slate-50 flex flex-col items-center px-4">
      <div className="max-w-2xl w-full bg-white rounded-3xl p-8 md:p-12 shadow-2xl border border-slate-200 border-t-8 border-red-600">
        
        <h1 className="text-4xl font-bold mb-4 serif text-center text-blue-900">
          Kingdom Investment
        </h1>

        <p className="text-slate-500 text-center mb-10 font-medium">
          “Honor the LORD with your wealth, with the firstfruits of all your crops; then your barns will be filled to overflowing.”
        </p>

        {/* Suggested amounts */}
        <div className="grid grid-cols-3 gap-4 mb-10">
          {['KSh 1,000', 'KSh 5,000', 'KSh 10,000'].map(amount => (
            <div
              key={amount}
              className="py-4 border-2 border-slate-100 rounded-2xl font-black text-blue-900 text-center bg-slate-50 uppercase tracking-tighter"
            >
              {amount}
            </div>
          ))}
        </div>

        {/* Payment Instructions */}
        <div className="p-6 bg-blue-50 rounded-2xl border border-blue-100 text-center space-y-4 mb-8">
          <p className="text-sm font-bold text-blue-900 uppercase tracking-widest">
            Give via M-PESA / Co-operative Bank
          </p>

          <div className="text-blue-900 font-black text-lg space-y-1">
            <p>
              PayBill Number: <span className="text-red-600">400200</span>
            </p>
            <p>
              Account Number: <span className="text-red-600">1121100</span>
            </p>
          </div>

          <p className="text-xs font-bold text-slate-600 uppercase tracking-wider">
            Business Name: Zion Harvest International Church
          </p>
        </div>

        {/* Thank You Section */}
        <div className="p-6 bg-slate-50 rounded-2xl border border-slate-200 text-center">
          <p className="text-xl font-bold serif text-blue-900 mb-2">
            Thank You for Giving 🙏
          </p>
          <p className="text-sm text-slate-600 leading-relaxed">
            Your generosity enables the work of the ministry, transforms lives,
            and helps advance the Kingdom of God.  
            We pray that the Lord blesses you abundantly as you give in faith.
          </p>
        </div>

      </div>
    </div>
  );

default:
  return <Hero />;
         }
  };


  return (
    <div className="min-h-screen flex flex-col selection:bg-red-600 selection:text-white">
      <Navbar activeTab={activeTab} setActiveTab={setActiveTab} />
     
      
      <main className="flex-grow">
        {renderContent()}
      </main>

      <Footer />
    </div>
  );
};

export default App;
