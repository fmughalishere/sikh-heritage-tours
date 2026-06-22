export const VPA_COUNTRIES_BY_REGION: { region: string; countries: string[] }[] = [
  {
    region: "Europe",
    countries: [
      "Albania", "Andorra", "Austria", "Belarus", "Belgium", "Bosnia and Herzegovina", "Bulgaria",
      "Croatia", "Czech Republic", "Denmark", "Estonia", "Finland", "France", "Germany", "Greece",
      "Hungary", "Iceland", "Ireland", "Italy", "Kosovo", "Latvia", "Liechtenstein", "Lithuania",
      "Luxembourg", "Malta", "Moldova", "Montenegro", "Netherlands", "North Macedonia", "Norway",
      "Poland", "Portugal", "Romania", "Russia", "San Marino", "Slovakia", "Slovenia", "Spain",
      "Sweden", "Switzerland", "Ukraine", "United Kingdom",
    ],
  },
  {
    region: "Africa",
    countries: [
      "Algeria", "Angola", "Benin", "Cameroon", "Comoros", "Côte d'Ivoire",
      "Democratic Republic of the Congo", "Djibouti", "Egypt", "Ethiopia", "Gambia", "Ghana",
      "Guinea", "Guinea-Bissau", "Kenya", "Madagascar", "Malawi", "Mauritius", "Mauritania",
      "Morocco", "Mozambique", "Nigeria", "Rwanda", "Senegal", "Seychelles", "Sierra Leone",
      "South Africa", "South Sudan", "Tanzania", "Togo", "Tunisia", "Uganda", "Zambia", "Zimbabwe",
    ],
  },
  {
    region: "Asia",
    countries: [
      "Azerbaijan", "Bahrain", "Bangladesh", "Bhutan", "Brunei", "Cambodia", "China", "Indonesia",
      "Iran", "Iraq", "Japan", "Jordan", "Kazakhstan", "Kyrgyzstan", "Kuwait", "Lebanon", "Malaysia",
      "Maldives", "Myanmar", "Nepal", "Oman", "Philippines", "Qatar", "Saudi Arabia", "Singapore",
      "South Korea", "Sri Lanka", "Tajikistan", "Thailand", "Turkey", "Turkmenistan", "Uzbekistan",
      "Vietnam",
    ],
  },
  {
    region: "Americas",
    countries: [
      "Argentina", "Brazil", "Canada", "Chile", "Colombia", "Ecuador", "Guatemala", "Honduras",
      "Mexico", "Panama", "Paraguay", "Peru", "United States",
    ],
  },
  {
    region: "Oceania",
    countries: ["Australia", "New Zealand"],
  },
];

export const GCC_VISA_ON_ARRIVAL_COUNTRIES = [
  "Bahrain", "Kuwait", "Oman", "Qatar", "Saudi Arabia", "United Arab Emirates",
];

export const VISA_GUIDE_NOTES = {
  lastChecked: "June 2026",
  vpaStatus:
    "Pakistan's free 'Visa Prior to Arrival' (VPA) scheme for the 126 countries listed below was suspended on 1 January 2026, with no official date for reinstatement. Citizens of these countries must now apply for a standard, paid e-Visa in advance — the old free, 24–48 hour fast-track is no longer available.",
  standardEvisaSteps: [
    "Apply online at the official Pakistan Online Visa System (visa.nadra.gov.pk) — do not apply more than 2 months before travel",
    "Upload your passport bio page, a recent photo, hotel booking or invitation letter, and a confirmed travel itinerary",
    "Pay the visa fee online (amount varies by nationality, commonly USD 35–60 for a single-entry tourist visa)",
    "Allow roughly 7–10 business days for processing — apply at least 2 weeks before your travel date",
    "Print your approved e-Visa and carry it with your passport for check-in and arrival",
  ],
  gccNote:
    "Citizens of Bahrain, Kuwait, Oman, Qatar, Saudi Arabia and the UAE are not affected by the VPA suspension — they continue to receive a multiple-entry visa on arrival by simply presenting a valid passport at the airport.",
  groupTourNote:
    "Pilgrims travelling as part of an organised yatra group through a registered Pakistani tour operator can usually have their hotel booking, invitation letter and itinerary documents prepared by the operator, which simplifies the e-Visa application considerably.",
};

export const OTHER_COUNTRIES_GUIDE = {
  summary:
    "If your country is not on the 126-country e-Visa list above and is not a GCC state, you will generally need to apply for a Pakistani visa in person or by post through your nearest Pakistani Embassy, Consulate or designated visa application centre, rather than through the online portal. Processing can take several weeks, so it's best to start early and let us help with your invitation letter and itinerary.",
  indiaNote:
    "Indian nationals are a special case. The visa-free Kartarpur Corridor (for same-day visits to Gurdwara Darbar Sahib Kartarpur) is presently suspended from the Indian side, and Indian passport holders are not eligible for the standard tourist e-Visa. Sikh pilgrims from India currently travel through official jatha (group pilgrimage) visas issued under the 1974 India–Pakistan Protocol on Religious Pilgrimages, typically organised around occasions like Baisakhi and Gurpurab. We coordinate jatha registration and documentation for Indian Sangat groups — reach out to us on WhatsApp well ahead of the relevant Gurpurab so we can guide you through the process.",
  disclaimer:
    "Visa rules change frequently and can vary by individual case. This guide is for general orientation only and is not legal or immigration advice — please confirm current requirements with the official Pakistan Online Visa System, your nearest Pakistani mission, or speak with our team before booking flights.",
};
