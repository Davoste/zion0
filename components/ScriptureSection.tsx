import React from 'react';
import { Quote } from 'lucide-react';

const scriptures = [
  {
    sw: 'Mathayo 28:19–20',
    swText:
      '“Basi, nendeni, mkawafanye mataifa yote kuwa wanafunzi, mkiwabatiza kwa jina la Baba, na Mwana, na Roho Mtakatifu; na kuwafundisha kuyashika yote niliyowaamuru ninyi; na tazama, mimi nipo pamoja nanyi siku zote, hata ukamilifu wa dahari."',
    enText:
      '“Go ye therefore, and teach all nations, baptizing them in the name of the Father, and of the Son, and of the Holy Ghost: Teaching them to observe all things whatsoever I have commanded you: and, lo, I am with you alway, even unto the end of the world. Amen.”',
  },
  {
    sw: 'Kumbukumbu la Torati 28:1-2',
    swText:
      '“[1]Itakuwa utakaposikia sauti ya BWANA, Mungu wako, kwa bidii, kutunza kuyafanya maagizo yake yote nikuagizayo leo, ndipo BWANA, Mungu wako, atakapokutukuza juu ya mataifa yote ya duniani; [2]na baraka hizi zote zitakujilia na kukupata usikiapo sauti ya BWANA, Mungu wako. ”',
    enText:
      '“And it shall come to pass, if thou shalt hearken diligently unto the voice of the LORD thy God, to observe and to do all his commandments which I command thee this day, that the LORD thy God will set thee on high above all nations of the earth: [2]And all these blessings shall come on thee, and overtake thee, if thou shalt hearken unto the voice of the LORD thy God.”',
  },
];

const ScriptureSection: React.FC = () => {
  return (
    <section className="py-20 bg-blue-900 text-white relative">
      <div className="absolute top-0 right-0 p-10 opacity-10">
        <Quote size={200} />
      </div>

      <h2 className="text-center text-red-500 text-sm font-black uppercase tracking-[0.3em] mb-10">
        Scripture & Promise
      </h2>

      <div className="flex gap-6 overflow-x-auto px-6 snap-x snap-mandatory scrollbar-hide">
        {scriptures.map((s, i) => (
          <div
            key={i}
            className="min-w-[85%] md:min-w-[60%] bg-white/5 backdrop-blur rounded-3xl p-8 snap-center"
          >
            <p className="text-2xl italic serif mb-4">{s.swText}</p>
            <p className="text-xs text-red-400 uppercase tracking-widest mb-6">
              Biblia | {s.sw}
            </p>

            <p className="text-xl text-blue-100 font-light leading-relaxed">
              {s.enText}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ScriptureSection;
