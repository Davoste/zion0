// components/GiveSection.tsx
import React from "react";

const GiveSection: React.FC = () => {
  return (
    <section id="give" className="pt-24 pb-24 bg-slate-50 px-4">
      <div className="max-w-2xl mx-auto bg-white rounded-3xl p-8 md:p-12 shadow-2xl border border-slate-200 border-t-8 border-red-600">

        <h1 className="text-4xl font-bold mb-4 serif text-center text-blue-900">
          Kingdom Investment
        </h1>

        <p className="text-slate-500 text-center mb-10 font-medium">
          “Honor the LORD with your wealth, with the firstfruits of all your crops...”
        </p>

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

        <div className="p-6 bg-slate-50 rounded-2xl border border-slate-200 text-center">
          <p className="text-xl font-bold serif text-blue-900 mb-2">
            Thank You for Giving 🙏
          </p>
          <p className="text-sm text-slate-600 leading-relaxed">
            Your generosity enables the work of the ministry, transforms lives,
            and advances the Kingdom of God.
          </p>
        </div>

      </div>
    </section>
  );
};

export default GiveSection;
