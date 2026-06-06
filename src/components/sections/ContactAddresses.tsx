export default function ContactAddresses() {
  const addresses = [
    { country: "Pakistan", addr: "101-Tipu Block, Garden Town, Lahore", phone: "+92 317 317 6483", wa: "923173176483" },
    { country: "Saudi Arabia", addr: "Building 3319, Al Qurtubah, Riyadh", phone: "+966 56 311 4674", wa: "966563114674" },
    { country: "UAE", addr: "Office 314, Al Doha St, Dubai", phone: "+971 54 583 4874", wa: "971545834874" }
  ];

  return (
    <section className="py-32 px-10 bg-[#002147] text-white overflow-hidden relative">
      <div className="max-w-[1400px] mx-auto relative z-10">
        <h2 className="text-6xl font-black tracking-tighter mb-20 uppercase">Contact <span className="text-[#F5821F]">Us.</span></h2>
        <div className="grid md:grid-cols-3 gap-10">
          {addresses.map((item, i) => (
            <div key={i} className="p-10 bg-white/5 backdrop-blur-xl border border-white/10 rounded-[50px] group hover:bg-[#F5821F] transition-all duration-500">
              <h4 className="text-2xl font-black mb-6 uppercase tracking-tighter">{item.country}</h4>
              <p className="text-sm opacity-70 mb-8 leading-relaxed">{item.addr}</p>
              <a
                href={`https://wa.me/${item.wa}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xl font-bold group-hover:text-white text-[#F5821F] hover:underline inline-block standard-transition"
              >
                {item.phone}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}