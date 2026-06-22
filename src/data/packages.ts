export type ItineraryDay = {
  day: string;
  title: string;
  points: string[];
};

export type PackageItem = {
  slug: string;
  code: string;
  name: string;
  duration: string;
  tagline: string;
  highlights: string[];
  itinerary: ItineraryDay[];
  includes: string[];
  hotels: { tier: string; list: string[] }[];
  minGroupSize: string;
  isCustom?: boolean;
};

export const PACKAGES_DATA: PackageItem[] = [
  {
    slug: "land-of-gurus-and-peers",
    code: "7D-6N",
    name: "Land of Gurus and Peers",
    duration: "7 Days / 6 Nights",
    tagline:
      "Our complete Sikh heritage circuit — Lahore, Kartarpur, Eminabad, Panja Sahib, Nankana Sahib and Sialkot in one unforgettable yatra.",
    highlights: [
      "Gurdwara Darbar Sahib Kartarpur",
      "All famous Gurdwaras of Lahore",
      "All 7 historic Gurdwaras in Nankana Sahib Ji",
      "Gurdwara Panja Sahib Ji & Gurdwara Sacha Sauda",
      "Gurdwaras of Eminabad, Sialkot and Dina",
      "Complimentary ancestral village visit",
    ],
    itinerary: [
      {
        day: "Day 01",
        title: "Arrival in Lahore (City of Gurus and Peers)",
        points: [
          "Meet and greet at Wahga Border / airport pick-up and drop-off",
          "Darshan yatra: Gurdwara Babay Nanki, Gurdwara Shaheed Ganj, Gurdwara Chuna Mandi, Gurdwara Dera Sahib",
          "Visit Samadhi of Maharaja Ranjit Singh",
          "Overnight stay in Lahore",
        ],
      },
      {
        day: "Day 02",
        title: "Lahore – Kartarpur – Gujranwala",
        points: [
          "Full-day excursion to Gurdwara Darbar Sahib Ji, Kartarpur",
          "Travel onward to Gujranwala",
          "Overnight stay in Gujranwala",
        ],
      },
      {
        day: "Day 03",
        title: "Gujranwala – Eminabad – Dina – Islamabad",
        points: [
          "Visit Gurdwara Rori Sahib, Gurdwara Chakki Sahib, Bhai Lalo Di Khoi",
          "En route: Gurdwara Choha Sahib Ji and Gurdwara Mata Sahib Kaur Ji at Dina",
          "Overnight stay in Islamabad",
        ],
      },
      {
        day: "Day 04",
        title: "Islamabad – Panja Sahib – Sacha Sauda – Nankana Sahib – Lahore",
        points: [
          "Darshan at Gurdwara Panja Sahib Ji",
          "Stop at Gurdwara Sacha Sauda via motorway",
          "All 7 historic Gurdwaras of Nankana Sahib: Janam Asthan, Patti Sahib, Bal Lila, Kiara Sahib, Tambu Sahib, Maal Ji Sahib, Panjveen & Chheveen Patshahi",
          "Drive back and overnight stay in Lahore",
        ],
      },
      {
        day: "Day 05",
        title: "Lahore – Sialkot Yatra",
        points: [
          "Darshan yatra of Gurdwara Baoli Sahib, Gurdwara Ber Sahib and other historic sites in Sialkot",
          "Overnight stay at Javson Hotel",
        ],
      },
      {
        day: "Day 06",
        title: "Complimentary Heritage Village Visit",
        points: [
          "A special complimentary day to visit your ancestral / forefather village, planned around the nearest city on the tour route",
          "VIP transport, security arrangements and professional assistance included",
          "Overnight stay arranged according to nearest city location",
        ],
      },
      {
        day: "Day 07",
        title: "Lahore – Wahga Border / Flight Departure",
        points: [
          "Visit remaining sites in Lahore after breakfast",
          "Transfer to Wahga Border or airport at 11:00 AM for departure",
        ],
      },
    ],
    includes: [
      "Hotel accommodation on twin-sharing basis",
      "Daily breakfast and vegetarian dinner",
      "Air-conditioned transport with fuel and driver",
      "Punjabi-speaking tour guide",
      "Two small mineral water bottles daily",
      "All road taxes and entry fees",
      "Complimentary yatra tour video for groups of 10+ persons",
      "VIP transport and security arrangements for ancestral village visits",
    ],
    hotels: [
      {
        tier: "5-Star",
        list: [
          "Royal Swiss / Avari / Nishat Hotel — Lahore",
          "Marriott Hotel — Islamabad",
          "Avari Boutique Hotel — Gujranwala",
          "Javson Hotel — Sialkot",
        ],
      },
      {
        tier: "4-Star",
        list: [
          "Avari Express / Indigo Heights — Lahore",
          "Grand Islamabad Hotel / Hill View Hotel — Islamabad",
          "Marian / Avari Boutique — Gujranwala",
        ],
      },
    ],
    minGroupSize: "4 Persons",
  },
  {
    slug: "gurdwara-yatra-package",
    code: "5D-4N",
    name: "Gurdwara Yatra Package",
    duration: "5 Days / 4 Nights",
    tagline:
      "A focused pilgrimage covering Lahore, Gurdwara Darbar Sahib Kartarpur and all 7 historic Gurdwaras of Nankana Sahib Ji.",
    highlights: [
      "Gurdwara Darbar Sahib Ji, Kartarpur",
      "All 7 historic Gurdwaras of Nankana Sahib Ji",
      "Gurdwara Sacha Sauda",
      "Famous Gurdwaras of Lahore",
      "Complimentary forefather village visit",
    ],
    itinerary: [
      {
        day: "Day 01",
        title: "Arrival in Lahore",
        points: [
          "Meet and greet at Wahga Border / airport pick-up and drop-off",
          "Darshan yatra: Gurdwara Babay Nanki, Gurdwara Shaheed Ganj, Gurdwara Chuna Mandi, Gurdwara Dera Sahib",
          "Visit Samadhi of Maharaja Ranjit Singh",
          "Overnight stay in Lahore",
        ],
      },
      {
        day: "Day 02",
        title: "Lahore – Kartarpur – Lahore",
        points: [
          "Full-day darshan yatra of Gurdwara Darbar Sahib Ji, Kartarpur",
          "Drive back and overnight stay in Lahore",
        ],
      },
      {
        day: "Day 03",
        title: "Lahore – Sacha Sauda – Nankana Sahib Ji – Lahore",
        points: [
          "En route visit: Gurdwara Sacha Sauda",
          "Darshan yatra of all 7 historic Gurdwaras of Nankana Sahib: Janam Asthan, Patti Sahib, Bal Lila, Kiara Sahib, Tambu Sahib, Maal Ji Sahib, Panjveen & Chheveen Patshahi",
          "Return and overnight stay in Lahore",
        ],
      },
      {
        day: "Day 04",
        title: "Complimentary Forefather Village Visit",
        points: [
          "Special complimentary visit to your ancestral village and hometown, planned around the nearest location on the tour route",
          "VIP transport, security arrangements and professional assistance included",
        ],
      },
      {
        day: "Day 05",
        title: "Lahore – Wahga Border / Flight Departure",
        points: ["Transfer to airport or Wahga Border", "End of yatra services in Pakistan"],
      },
    ],
    includes: [
      "Accommodation on twin-sharing basis",
      "Daily breakfast and vegetarian dinner",
      "Air-conditioned transport throughout the tour",
      "Punjabi-speaking tour guide",
      "Daily 2 small bottles of mineral water",
      "All entry fees and road taxes as per program",
      "Complete yatra tour video for all guests",
      "VIP transport and security arrangements for ancestral village visits",
    ],
    hotels: [
      {
        tier: "5-Star",
        list: ["Royal Swiss Hotel — Lahore", "Avari Hotel — Lahore", "Nishat Hotel — Lahore"],
      },
    ],
    minGroupSize: "10 Persons",
  },
  {
    slug: "tailor-made-yatra",
    code: "Custom",
    name: "Tailor-Made Sangat Yatra",
    duration: "Flexible — designed around your group",
    tagline:
      "Build your own pilgrimage. Choose the Gurdwaras, cities and pace that matter most to your Sangat, from a quick Lahore–Kartarpur trip to a full Punjab-wide circuit.",
    highlights: [
      "Mix and match Gurdwaras from Lahore, Nankana Sahib, Kartarpur, Panja Sahib, Eminabad, Sialkot and beyond",
      "Flexible duration and group size",
      "Optional ancestral village visit with VIP transport and security",
      "Personally planned with our Punjabi-speaking guides",
    ],
    itinerary: [],
    includes: [
      "Itinerary designed around your dates, group size and interests",
      "Accommodation tier of your choice (4-Star or 5-Star)",
      "Air-conditioned transport with Punjabi-speaking guide",
      "Visa guidance and documentation support",
    ],
    hotels: [],
    minGroupSize: "Any group size",
    isCustom: true,
  },
];
