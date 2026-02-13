// components/AboutSection.tsx
import React from "react";

const AboutSection: React.FC = () => {
  return (
    <section id="about" className="pt-24 pb-24 max-w-4xl mx-auto px-4">
      <h1 className="text-5xl font-bold mb-12 serif text-center text-blue-900">
        Our Story
      </h1>

      <div className="aspect-video mb-12 rounded-3xl overflow-hidden shadow-2xl border-b-8 border-red-600">
        <img
          src="/images/pastor.jpeg"
          alt="Pastor"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="prose prose-slate lg:prose-xl mx-auto text-slate-700 leading-relaxed">
        <p className="mb-6">
          Zion Harvest International Church began with a divine mandate given to
          <strong> Pastor Ezekiel</strong> to raise a generation of impact.
          Rooted in Nairobi, our vision extends globally as we spread the message
          of God's abundant grace and power.
        </p>

        <h2 className="text-3xl font-bold mt-12 mb-6 serif text-blue-900">
          Our Core Mandate
        </h2>

        <ul className="space-y-4 list-none">
          <li className="flex gap-3 items-start">
            <span className="w-2 h-2 bg-red-600 rounded-full mt-2.5 shrink-0"></span>
            <span>
              <strong>Prophetic Insight:</strong> Walking in the timing and seasons of God.
            </span>
          </li>

          <li className="flex gap-3 items-start">
            <span className="w-2 h-2 bg-red-600 rounded-full mt-2.5 shrink-0"></span>
            <span>
              <strong>Impact:</strong> Equipping believers to be leaders in every sphere of society.
            </span>
          </li>

          <li className="flex gap-3 items-start">
            <span className="w-2 h-2 bg-red-600 rounded-full mt-2.5 shrink-0"></span>
            <span>
              <strong>Global Outreach:</strong> Taking the word of power to the nations.
            </span>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default AboutSection;
