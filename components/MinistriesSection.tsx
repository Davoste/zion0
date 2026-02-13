import React from "react";

const ministries = [
  {
    title: "Children Ministry",
    description:
      "Raising a generation grounded in Christ through fun, engaging and Bible-centered learning.",
    image: "/images/children.jpeg",
  },
  {
    title: "Women Ministry",
    description:
      "Empowering women to walk boldly in purpose, leadership, and spiritual maturity.",
    image: "/images/women.jpeg",
  },
  {
    title: "Music & Worship Ministry",
    description:
      "Leading the congregation into powerful worship experiences through music and creativity.",
    image: "/images/music.jpeg",
  },
  {
    title: "Youth Ministry",
    description:
      "Equipping young people to impact society with faith, excellence, and leadership.",
    image: "/images/youth.jpeg",
  },
  {
    title: "Evangelism & Outreach",
    description:
      "Taking the Gospel beyond the walls of the church and transforming communities.",
    image: "/images/outreach.jpeg"
  }
];

const MinistriesSection: React.FC = () => {
  return (
    <section id="ministries" className="pt-24 pb-24 bg-white px-4">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-5xl font-bold text-center mb-16 serif text-blue-900">
          Our Ministries
        </h1>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {ministries.map((ministry, index) => (
            <div
              key={index}
              className="group rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition duration-300 bg-slate-50"
            >
              <div className="h-56 overflow-hidden">
                <img
                  src={ministry.image}
                  alt={ministry.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                />
              </div>

              <div className="p-6">
                <h2 className="text-2xl font-bold mb-3 text-blue-900 serif">
                  {ministry.title}
                </h2>
                <p className="text-slate-600 leading-relaxed">
                  {ministry.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MinistriesSection;
