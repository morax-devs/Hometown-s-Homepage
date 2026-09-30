// Smart AI Travel Agent Engine for Indian Destinations
// Supports both a built-in intelligent knowledge engine and optional Google Gemini API

export const DESTINATION_KNOWLEDGE = {
  goa_north: {
    name: "North Goa (Baga, Calangute & Anjuna)",
    state: "Goa",
    tagline: "Sun-Drenched Beaches, Vibrant Crowds & Coastal Thrills",
    type: "beach",
    vibe: ["beach", "crowd", "fun", "nightlife", "watersports", "party", "social"],
    budgetEstimates: {
      budget: "₹2,500 - ₹4,000 / day per person",
      moderate: "₹5,000 - ₹8,000 / day per person",
      luxury: "₹12,000+ / day per person"
    },
    matchReason: "North Goa perfectly balances high-energy fun, bustling beach crowds, and water sports with safety and well-patrolled tourist infrastructure.",
    dayPlans: [
      {
        day: 1,
        title: "Beach Vibrance & Water Sports",
        morning: "Arrive and head straight to Baga Beach. Experience parasailing and jet skiing with certified beach operators.",
        afternoon: "Relax under beach umbrellas at Britto's shack; savor Goan fish curry, butter garlic prawns, or crispy paneer.",
        evening: "Catch golden hour sunset along Calangute shoreline, followed by a walk through the bustling market street."
      },
      {
        day: 2,
        title: "Fort Views, Flea Markets & Sunset Vibe",
        morning: "Visit historic 17th-century Fort Aguada for sweeping Arabian Sea panoramas and the old lighthouse.",
        afternoon: "Explore Anjuna & Vagator cafes. Try Curlies or Purple Martini for Greek-style cliffside lunch with ocean breeze.",
        evening: "Browse colorful beach flea markets for clothes, handmade jewelry, and listen to acoustic beach shack music."
      },
      {
        day: 3,
        title: "River Cruise, Heritage & Parting Splash",
        morning: "Take a scenic drive to Old Goa (Basilica of Bom Jesus) or cruise along the Mandovi river watching dolphins.",
        afternoon: "Enjoy authentic Goan thali at Fat Fish (Arpora) — famous for crab xacuti and kingfish rawa fry.",
        evening: "Relax at Candolim's cleaner shores or enjoy a sunset cruise before heading to the airport or station."
      }
    ],
    attractions: [
      {
        title: "Baga Beach & Watersports Hub",
        category: "Attraction",
        subtitle: "North Goa • Thrill & Beach Life",
        description: "India's most happening beach, packed with vibrant shacks, certified water sports, and sunset parasailing."
      },
      {
        title: "Fort Aguada & Sea Lighthouse",
        category: "Attraction",
        subtitle: "Sinquerim • Heritage & Coastline",
        description: "Well-preserved Portuguese fortress overlooking the Arabian sea with panoramic cliff-edge viewpoints."
      },
      {
        title: "Anjuna & Vagator Cliff Viewpoint",
        category: "Attraction",
        subtitle: "Anjuna • Red Cliffs & Sunset",
        description: "Iconic red-rock cliff beach known for lively flea markets, bohemian cafes, and safe sunset crowds."
      }
    ],
    restaurants: [
      {
        title: "Britto's Beach Shack",
        category: "Restaurant",
        subtitle: "Baga Beach • Goan & Seafood • ₹700 for two",
        description: "Legendary seafront shack with outdoor tables directly on the sand, famous for seafood and baked crab."
      },
      {
        title: "Fat Fish",
        category: "Restaurant",
        subtitle: "Arpora • Authentic Goan & Multi-Cuisine • ₹850 for two",
        description: "Top-rated local favorite serving king-sized fish thalis, chicken cafreal, and vegetarian delicacies."
      },
      {
        title: "Purple Martini at Sunset Point",
        category: "Restaurant",
        subtitle: "Anjuna Cliff • Cafe & Lounge • ₹1,200 for two",
        description: "Santorini-themed cliffside cafe offering Mediterranean platters, chilled mocktails, and stunning sunset views."
      }
    ],
    stays: [
      {
        title: "Zostel Goa / Woke Hostel",
        category: "Stay",
        subtitle: "Arpora / Vagator • Social & Vibrant • ₹1,200 / night",
        description: "Safe, social, and modern boutique hostel with a pool and common lounge, great for friends and solo travelers."
      },
      {
        title: "BloomSuites Calangute",
        category: "Stay",
        subtitle: "Calangute • Boutique Hotel • ₹3,800 / night",
        description: "Chic mid-range hotel walking distance from Calangute beach with a pool, buffet breakfast, and spacious rooms."
      },
      {
        title: "Taj Holiday Village Resort",
        category: "Stay",
        subtitle: "Candolim • 5-Star Luxury • ₹14,000 / night",
        description: "Opulent beachfront resort with terracotta-roofed cottages, lush gardens, and direct private beach access."
      }
    ],
    safetyTips: [
      "Always swim between the red-and-yellow flags patrolled by Drishti Marine lifeguards.",
      "Rent certified two-wheelers with proper helmets and keep fuel receipts.",
      "Stay in well-lit beach areas (Baga, Calangute, Candolim) if out late at night."
    ]
  },

  delhi: {
    name: "Delhi (New Delhi & Old Delhi)",
    state: "Delhi NCR",
    tagline: "Mughal Heritage, World-Famous Street Food & Bustling Bazaars",
    type: "heritage_metro",
    vibe: ["heritage", "street food", "shopping", "monuments", "culture", "metro", "crowd"],
    budgetEstimates: {
      budget: "₹1,800 - ₹3,000 / day per person",
      moderate: "₹4,000 - ₹7,000 / day per person",
      luxury: "₹10,000+ / day per person"
    },
    matchReason: "Delhi offers unmatched sensory energy: centuries-old Mughal architecture, electric street-food bazaars, world-class metro connectivity, and lively shopping hubs.",
    dayPlans: [
      {
        day: 1,
        title: "Heart of Old Delhi — Mughal Magnificence & Street Feasts",
        morning: "Hop on the Delhi Metro to Chandni Chowk. Marvel at the grand Jama Masjid and take a rickshaw past the Red Fort.",
        afternoon: "Food trail in Paranthe Wali Gali for crispy stuffed parathas, followed by jalebi at the famous 1884 Old Famous Jalebi Wala.",
        evening: "Visit Sis Ganj Gurudwara for serene community prayer and stroll through the spice-fragrant Khari Baoli market."
      },
      {
        day: 2,
        title: "Colonial Grandeur & South Delhi Monuments",
        morning: "Walk through India Gate, Cart Path, and Rashtrapati Bhavan, then explore the serene Mughal-era Humayun's Tomb.",
        afternoon: "Lunch at Andhra Bhawan (legendary unlimited South Indian thali) or modern cafes in Connaught Place (CP).",
        evening: "Explore the towering 73m Qutub Minar complex and spend the evening enjoying lakeside cafes at Hauz Khas Village."
      },
      {
        day: 3,
        title: "Crafts, Tibetan Culture & Souvenirs",
        morning: "Visit Lotus Temple (Bahai House of Worship) and the stunning Akshardham Temple complex.",
        afternoon: "Explore Majnu Ka Tila (Little Tibet) for steaming momos, laphing, and rooftop cafes overlooking Yamuna.",
        evening: "Shop at Dilli Haat INA — India's open-air artisan village with regional food stalls from all 28 states."
      }
    ],
    attractions: [
      {
        title: "Qutub Minar & Mehrauli Heritage Complex",
        category: "Attraction",
        subtitle: "South Delhi • UNESCO World Heritage",
        description: "The world's tallest brick minaret, surrounded by 12th-century ruins and the famous rust-free Iron Pillar."
      },
      {
        title: "Humayun's Tomb Gardens",
        category: "Attraction",
        subtitle: "Nizamuddin • Mughal Masterpiece",
        description: "The sublime garden-tomb that inspired the Taj Mahal, featuring red sandstone symmetry and lush Charbagh."
      },
      {
        title: "Chandni Chowk & Red Fort Bazaars",
        category: "Attraction",
        subtitle: "Old Delhi • Historic Bazaars",
        description: "A 350-year-old historic artery filled with silver bazaars, Mughal street food, and historic architecture."
      }
    ],
    restaurants: [
      {
        title: "Karim's Historic Mughlai",
        category: "Restaurant",
        subtitle: "Jama Masjid, Old Delhi • Mughlai • ₹600 for two",
        description: "Founded in 1913 near Jama Masjid, iconic for melt-in-mouth mutton seekh kebabs, nihari, and rumali roti."
      },
      {
        title: "Saravana Bhavan (Connaught Place)",
        category: "Restaurant",
        subtitle: "CP • South Indian Pure Veg • ₹450 for two",
        description: "Bustling, authentic Chennai-style dosas, idlis, and filter coffee in the heart of Delhi's central circle."
      },
      {
        title: "AMA Cafe (Majnu Ka Tila)",
        category: "Restaurant",
        subtitle: "North Delhi • Himalayan Cafe • ₹500 for two",
        description: "Charming Tibetan enclave cafe famous for hot pancakes, Himalayan herbal teas, apple pie, and relaxed student vibes."
      }
    ],
    stays: [
      {
        title: "The Hosteller / Madpackers Delhi",
        category: "Stay",
        subtitle: "South Delhi • Backpacker & Social • ₹1,100 / night",
        description: "Clean, highly rated youth hostel near metro stations with rooftop movie nights and curated city walks."
      },
      {
        title: "Bloomrooms @ Janpath / CP",
        category: "Stay",
        subtitle: "Central Delhi • Modern Boutique • ₹3,900 / night",
        description: "Signature bright-yellow modern boutique hotel steps away from Connaught Place and Janpath shopping."
      },
      {
        title: "The Imperial New Delhi",
        category: "Stay",
        subtitle: "Janpath • 5-Star Heritage • ₹15,000 / night",
        description: "Legendary 1930s art-deco colonial palace hotel with lush palm corridors, museum-worthy art, and spa."
      }
    ],
    safetyTips: [
      "Use the Delhi Metro as your primary transport: fast, AC, reliable, and beats all road traffic.",
      "Keep valuables secure in crowded markets like Chandni Chowk and Sarojini Nagar.",
      "Prefer app cabs (Uber/Ola) or official prepaid metro autos late at night."
    ]
  },

  jaipur: {
    name: "Jaipur (The Pink City)",
    state: "Rajasthan",
    tagline: "Hilltop Fortresses, Regal Palaces & Rajasthani Flavors",
    type: "heritage",
    vibe: ["heritage", "palaces", "culture", "shopping", "royalty", "food"],
    budgetEstimates: {
      budget: "₹2,000 - ₹3,500 / day per person",
      moderate: "₹4,500 - ₹8,000 / day per person",
      luxury: "₹14,000+ / day per person"
    },
    matchReason: "Jaipur delivers vibrant royal culture, dramatic desert hilltop forts, grand bazaars, and unforgettable Rajasthani cuisine.",
    dayPlans: [
      {
        day: 1,
        title: "Walled Pink City & Astronomical Wonders",
        morning: "Visit the iconic honeycomb facade of Hawa Mahal (Palace of Winds) in the early morning sunlight.",
        afternoon: "Tour City Palace and Jantar Mantar (the world's largest stone astronomical observatory).",
        evening: "Shop for blue pottery and block-print textiles in Johari and Bapu Bazaars, then enjoy Rawat's famous Pyaz Kachori."
      },
      {
        day: 2,
        title: "Fortress Heights & Sunset Panorama",
        morning: "Climb the magnificent Amer Fort and explore the mirror-studded Sheesh Mahal.",
        afternoon: "Head up to Jaigarh Fort to see the giant Jaivana cannon, followed by lunch at a local rooftop cafe.",
        evening: "Watch the golden sun dip below the Aravalli hills from the ramparts of Nahargarh Fort with evening chai."
      }
    ],
    attractions: [
      {
        title: "Amer Fort & Sheesh Mahal",
        category: "Attraction",
        subtitle: "Amer • UNESCO World Heritage",
        description: "Majestic hilltop fort built of red sandstone and marble, overlooking Maota Lake with grand courtyard halls."
      },
      {
        title: "Hawa Mahal (Palace of Winds)",
        category: "Attraction",
        subtitle: "Pink City • Rajput Architecture",
        description: "A 5-story pink facade with 953 intricately carved jharokhas (windows) designed for royal women to observe festivals."
      }
    ],
    restaurants: [
      {
        title: "Rawat Misthan Bhandar",
        category: "Restaurant",
        subtitle: "Station Road • Traditional Rajasthani • ₹300 for two",
        description: "World-famous for its crispy Pyaz Kachori, Mawa Kachori, and sweet ghewar."
      },
      {
        title: "Laxmi Mishthan Bhandar (LMB)",
        category: "Restaurant",
        subtitle: "Johari Bazaar • Pure Veg Thalis • ₹700 for two",
        description: "Centuries-old institution inside the walled city serving royal Dal Baati Churma thalis."
      }
    ],
    stays: [
      {
        title: "Moustache Jaipur / Zostel",
        category: "Stay",
        subtitle: "MI Road • Social Backpacker • ₹900 / night",
        description: "Lively hostel with rooftop terrace, Rajasthani murals, and fun travel vibes."
      },
      {
        title: "Alsisar Haveli",
        category: "Stay",
        subtitle: "Sindhi Camp • Heritage Haveli • ₹5,500 / night",
        description: "A restored 18th-century Rajput nobleman's mansion with courtyards, swimming pool, and vintage antique decor."
      }
    ],
    safetyTips: [
      "Negotiate auto-rickshaw fares or book via Uber/Ola to avoid tourist price markups.",
      "Stay hydrated under the Rajasthani sun and visit outdoor forts before 1 PM or after 3 PM."
    ]
  },

  prayagraj: {
    name: "Prayagraj (Allahabad)",
    state: "Uttar Pradesh",
    tagline: "Sacred Confluence, Kumbh Sanctity & Literary Heritage",
    type: "spiritual_heritage",
    vibe: ["spiritual", "holy", "river", "peaceful", "heritage", "history"],
    budgetEstimates: {
      budget: "₹1,200 - ₹2,200 / day per person",
      moderate: "₹3,000 - ₹5,000 / day per person",
      luxury: "₹8,000+ / day per person"
    },
    matchReason: "Prayagraj is the soul of spiritual India, home to the sacred Triveni Sangam, historic Akbar Fort, Bade Hanuman, and historic Civil Lines avenues.",
    dayPlans: [
      {
        day: 1,
        title: "Confluence of Rivers & Holy Darshan",
        morning: "Sunrise boat ride on the holy Sangam where the Ganga and Yamuna meet. Feed Siberian migratory birds (winter).",
        afternoon: "Visit the revered underground reclining Bade Hanuman Temple and the 16th-century Allahabad Fort perimeter.",
        evening: "Evening aarti along the riverbanks, followed by hot desi-ghee kachoris and jalebis at Chandralok or Netram."
      },
      {
        day: 2,
        title: "Freedom Trail, Planetarium & Civil Lines",
        morning: "Visit Anand Bhavan (ancestral home of the Nehrus) and catch an astronomy show at Jawahar Planetarium.",
        afternoon: "Stroll through leafy Chandra Shekhar Azad Park (Company Bagh) and see the historic Allahabad Museum.",
        evening: "Explore Civil Lines: visit the Gothic All Saints Cathedral and dine at Makkhan's or El Chico."
      }
    ],
    attractions: [
      {
        title: "Triveni Sangam",
        category: "Attraction",
        subtitle: "Sangam • Sacred Confluence",
        description: "The holy meeting point of Ganga, Yamuna, and mythical Saraswati, site of the world-famous Kumbh Mela."
      },
      {
        title: "Bade Hanuman Ji Temple",
        category: "Attraction",
        subtitle: "Near Sangam • Ancient Shrine",
        description: "Unique and highly revered shrine housing the subterranean reclining idol of Lord Hanuman."
      }
    ],
    restaurants: [
      {
        title: "Makkhan's Veg Restaurant",
        category: "Restaurant",
        subtitle: "Civil Lines • Pure Veg Multi-Cuisine • ₹550 for two",
        description: "Civil Lines favorite for Dal Makhani, paneer specialties, sizzling sizzlers, and family dining."
      },
      {
        title: "Chandralok Kachaudi",
        category: "Restaurant",
        subtitle: "Katra • Traditional Breakfast • ₹200 for two",
        description: "Legendary budget spot famous for hing-aloo kachori, sweet curd, and fresh jalebis."
      }
    ],
    stays: [
      {
        title: "Hotel Kanha Shyam",
        category: "Stay",
        subtitle: "Civil Lines • 4-Star Luxury • ₹4,500 / night",
        description: "Premier luxury hotel in Civil Lines featuring opulent rooms and multi-cuisine restaurants."
      },
      {
        title: "The Legend Hotel",
        category: "Stay",
        subtitle: "Civil Lines • Boutique Comfort • ₹3,800 / night",
        description: "Stylish boutique accommodation in the heart of the city with contemporary suites."
      }
    ],
    safetyTips: [
      "Always agree on Sangam boat fares before boarding at the ghat.",
      "Wear life jackets during deep river boat rides."
    ]
  },

  manali: {
    name: "Manali & Solang Valley",
    state: "Himachal Pradesh",
    tagline: "Snow-Capped Peaks, Pine Valleys & Mountain Adventures",
    type: "mountains",
    vibe: ["mountain", "hills", "snow", "nature", "peaceful", "adventure", "cold"],
    budgetEstimates: {
      budget: "₹2,200 - ₹3,500 / day per person",
      moderate: "₹4,500 - ₹8,000 / day per person",
      luxury: "₹12,000+ / day per person"
    },
    matchReason: "Ideal mountain retreat offering rushing rivers, pine-covered mountain trails, paragliding at Solang, and cozy wooden cafes in Old Manali.",
    dayPlans: [
      {
        day: 1,
        title: "Cedar Forests & Old Manali Cafes",
        morning: "Visit ancient wooden Hadimba Temple surrounded by towering deodar cedar trees.",
        afternoon: "Walk along Old Manali's cobblestone paths; relax at Cafe 1947 by the gushing Manalsu river with wood-fired pizza.",
        evening: "Stroll along Mall Road, browse Tibetan handicrafts, and sip hot Himalayan ginger-lemon-honey tea."
      },
      {
        day: 2,
        title: "Solang Valley Adventures & Snow Thrills",
        morning: "Take an excursion to Solang Valley for paragliding, ATV rides, and cable car ropeway rides.",
        afternoon: "Experience the engineering marvel of Atal Tunnel leading to the dramatic landscapes of Sissu / Lahaul.",
        evening: "Return to Manali for a warm bonfire and traditional Himachali Siddu (steamed stuffed bread with ghee)."
      }
    ],
    attractions: [
      {
        title: "Solang Valley Adventure Hub",
        category: "Attraction",
        subtitle: "Solang • Paragliding & Snow",
        description: "Year-round adventure hub famous for tandem paragliding, zorbing, and winter skiing."
      },
      {
        title: "Hadimba Temple & Cedar Forest",
        category: "Attraction",
        subtitle: "Dhungri • 16th-Century Heritage",
        description: "Four-tier wooden pagoda temple built in 1553, nestled in towering Himalayan deodars."
      }
    ],
    restaurants: [
      {
        title: "Cafe 1947",
        category: "Restaurant",
        subtitle: "Old Manali • Riverside Italian & Trout • ₹800 for two",
        description: "Charming riverside cafe with outdoor wooden decks, craft pizzas, and river views."
      },
      {
        title: "Johnson's Cafe",
        category: "Restaurant",
        subtitle: "Circuit House Road • European & Trout • ₹900 for two",
        description: "Famous for fresh Himalayan rainbow trout, lush lawn seating, and cozy fire hearths."
      }
    ],
    stays: [
      {
        title: "Zostel Manali / Old Manali",
        category: "Stay",
        subtitle: "Old Manali • Alpine Backpacker • ₹1,200 / night",
        description: "Scenic wooden backpacker hostel with mountain balcony views, book cafe, and friendly vibe."
      },
      {
        title: "The Himalayan Resort & Spa",
        category: "Stay",
        subtitle: "Hadimba Road • Luxury Castle • ₹11,000 / night",
        description: "Victorian Gothic castle hotel set in orchards with stone fireplaces, mountain pools, and luxury suites."
      }
    ],
    safetyTips: [
      "Check Atal Tunnel and Rohtang weather conditions before venturing into high passes.",
      "Wear sturdy walking shoes for Old Manali's hilly walking paths."
    ]
  },

  mumbai: {
    name: "Mumbai (City of Dreams)",
    state: "Maharashtra",
    tagline: "Marine Drive Queen's Necklace, Street Energy & Sea Breeze",
    type: "coastal_metro",
    vibe: ["crowd", "fun", "metro", "beach", "nightlife", "street food", "heritage"],
    budgetEstimates: {
      budget: "₹2,200 - ₹3,500 / day per person",
      moderate: "₹5,000 - ₹9,000 / day per person",
      luxury: "₹15,000+ / day per person"
    },
    matchReason: "Mumbai is electric, safe, and packed with people. From breezy Marine Drive and Colaba heritage to Chowpatty street food, it's thrilling yet accessible.",
    dayPlans: [
      {
        day: 1,
        title: "South Bombay Heritage & Marine Drive Sunset",
        morning: "Start at the iconic Gateway of India overlooking Mumbai Harbour and see the Taj Mahal Palace hotel.",
        afternoon: "Walk past Victorian Gothic buildings in Fort, browse Colaba Causeway street market, lunch at Leopold Cafe.",
        evening: "Sit along Marine Drive's sea wall ('Queen's Necklace') with thousands of locals watching the waves, enjoying Pav Bhaji."
      },
      {
        day: 2,
        title: "Bandra Vibes & Seaside Promenade",
        morning: "Cross the Bandra-Worli Sea Link and explore the seaside Bandstand promenade near celebrity homes.",
        afternoon: "Explore Bandra's trendy cafes on Hill Road and Pali Hill; try vada pav from Anand Stall or rolls from Ayub's.",
        evening: "Spend sunset at Juhu Beach enjoying spicy Sev Puri, Pani Puri, and hot roasted bhutta (corn)."
      }
    ],
    attractions: [
      {
        title: "Gateway of India & Mumbai Harbour",
        category: "Attraction",
        subtitle: "Colaba • Colonial Waterfront",
        description: "26-meter basalt arch built in 1924, bustling with tourist boats, pigeons, and street photographers."
      },
      {
        title: "Marine Drive Promenade",
        category: "Attraction",
        subtitle: "South Mumbai • 3.6km Seaside Arc",
        description: "World-famous curved seaside promenade where Mumbai gathers every evening for sunset and sea breeze."
      }
    ],
    restaurants: [
      {
        title: "Leopold Cafe & Bar",
        category: "Restaurant",
        subtitle: "Colaba Causeway • Historic Bistro • ₹800 for two",
        description: "Established in 1871, iconic meeting spot famous for chicken tikka, cold beer, and lively conversation."
      },
      {
        title: "Sardar Refreshments",
        category: "Restaurant",
        subtitle: "Tardeo • Legendary Pav Bhaji • ₹400 for two",
        description: "Mumbai's most famous butter-drenched Pav Bhaji, served piping hot with soft buttered pav."
      }
    ],
    stays: [
      {
        title: "Zostel Mumbai (Andheri)",
        category: "Stay",
        subtitle: "Andheri East • Modern Hostel • ₹1,300 / night",
        description: "Fun, safe, and social hostel with Bollywood-themed murals and great connectivity."
      },
      {
        title: "Residency Hotel Fort",
        category: "Stay",
        subtitle: "Fort • Heritage Area Boutique • ₹4,500 / night",
        description: "Comfortable, clean boutique hotel walking distance from CST station, Gateway, and Marine Drive."
      }
    ],
    safetyTips: [
      "Mumbai is widely considered India's safest metro for late evening walking along Marine Drive and Bandstand.",
      "Use metered black-and-yellow autos (in suburbs) or Kaali-Peeli cabs (in town) with GPS."
    ]
  }
}

// Keyword-based matcher for the local smart engine
export function matchDestination(promptText = '', preferredDestination = '', vibes = []) {
  const text = (promptText + ' ' + vibes.join(' ')).toLowerCase()

  // Explicit city selection
  if (preferredDestination && preferredDestination !== 'any') {
    const key = preferredDestination.toLowerCase()
    if (key.includes('delhi')) return 'delhi'
    if (key.includes('goa')) return 'goa_north'
    if (key.includes('prayagraj') || key.includes('allahabad')) return 'prayagraj'
    if (key.includes('jaipur') || key.includes('rajasthan')) return 'jaipur'
    if (key.includes('manali') || key.includes('himachal')) return 'manali'
    if (key.includes('mumbai') || key.includes('bombay')) return 'mumbai'
  }

  // Detect based on prompt keywords & intent
  if (text.includes('beach') || text.includes('sea') || text.includes('ocean') || text.includes('party') || text.includes('water') || text.includes('shack')) {
    return 'goa_north'
  }
  if (text.includes('mountain') || text.includes('hill') || text.includes('snow') || text.includes('cold') || text.includes('trek') || text.includes('valley')) {
    return 'manali'
  }
  if (text.includes('spiritual') || text.includes('holy') || text.includes('sangam') || text.includes('ganga') || text.includes('peaceful') || text.includes('kumbh')) {
    return 'prayagraj'
  }
  if (text.includes('palace') || text.includes('fort') || text.includes('royal') || text.includes('desert') || text.includes('rajasthan')) {
    return 'jaipur'
  }
  if (text.includes('metro') || text.includes('mughal') || text.includes('delhi') || text.includes('bazaar') || text.includes('capital') || text.includes('street food')) {
    return 'delhi'
  }
  if (text.includes('crowd') && (text.includes('city') || text.includes('fast') || text.includes('marine drive'))) {
    return 'mumbai'
  }
  // Default to Goa for generic "fun, crowded, exciting, safe" prompts (the user's exact example!)
  if (text.includes('crowd') || text.includes('fun') || text.includes('excit')) {
    return 'goa_north'
  }

  return 'delhi'
}

/**
 * Generate a complete trip plan using Gemini API (if apiKey provided)
 * or fallback to the built-in Smart Travel Brain.
 */
export async function generateAiTripPlan({ prompt, destination, travelers, duration, budget, vibes, apiKey }) {
  // If user provided a Gemini API Key, try live LLM generation
  if (apiKey && apiKey.trim().length > 10) {
    try {
      const plan = await callGeminiApi({ prompt, destination, travelers, duration, budget, vibes, apiKey })
      if (plan && plan.destination) {
        return { ...plan, source: 'gemini_ai' }
      }
    } catch (err) {
      console.warn('Gemini API call failed, falling back to built-in smart engine:', err)
    }
  }

  // Use Built-in Smart Travel Brain
  return generateLocalSmartPlan({ prompt, destination, travelers, duration, budget, vibes })
}

function generateLocalSmartPlan({ prompt, destination, travelers, duration, budget, vibes }) {
  const destKey = matchDestination(prompt, destination, vibes)
  const baseData = DESTINATION_KNOWLEDGE[destKey] || DESTINATION_KNOWLEDGE.goa_north

  // Adapt duration (1, 2, 3 days or more)
  let dayCount = 3
  if (duration === '1-2 Days (Weekend)') dayCount = 2
  else if (duration === '3-4 Days (Standard)') dayCount = 3
  else if (duration === '5-7 Days (Extended)') dayCount = 3 // Can repeat / extend

  const filteredDays = baseData.dayPlans.slice(0, dayCount)

  // Budget label
  const budgetTier = budget && budget.includes('Budget') ? 'budget' : budget && budget.includes('Luxury') ? 'luxury' : 'moderate'
  const costEstimate = baseData.budgetEstimates[budgetTier] || baseData.budgetEstimates.moderate

  // Dynamic customization for user prompt context
  let customReason = baseData.matchReason
  if (prompt && prompt.trim()) {
    customReason = `Based on your request "${prompt}": ${baseData.matchReason}`
  }

  return {
    source: 'smart_engine',
    destination: baseData.name,
    state: baseData.state,
    tagline: baseData.tagline,
    matchReason: customReason,
    travelers: travelers || 'Friends Group (3-5)',
    duration: duration || '3-4 Days (Standard)',
    budget: budget || 'Comfortable / Mid-Range (₹₹)',
    estimatedCost: costEstimate,
    dayPlans: filteredDays,
    recommendedAttractions: baseData.attractions.map((a, i) => ({
      ...a,
      id: `${destKey}-attr-${i + 1}`,
      image: a.image || '/sangam.webp'
    })),
    recommendedFood: baseData.restaurants.map((r, i) => ({
      ...r,
      id: `${destKey}-food-${i + 1}`,
      image: r.image || '/restaurants/makkhans.jpg'
    })),
    recommendedStays: baseData.stays.map((s, i) => ({
      ...s,
      id: `${destKey}-stay-${i + 1}`,
      image: s.image || '/stays/kanhashyam.jpg'
    })),
    safetyTips: baseData.safetyTips || [
      "Keep digital copies of IDs on your smartphone.",
      "Prefer authorized app taxis or pre-paid counters at transit hubs."
    ]
  }
}

async function callGeminiApi({ prompt, destination, travelers, duration, budget, vibes, apiKey }) {
  const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${apiKey.trim()}`

  const systemInstruction = `You are an expert Indian Travel Agent. Your job is to curate, structure, and arrange travel plans across India.
Given a traveler's prompt, budget, travelers group, and duration, output a JSON object with this EXACT structure:
{
  "destination": "City Name (Specific Area)",
  "state": "State Name",
  "tagline": "Inspiring 4-8 word tagline",
  "matchReason": "Why this destination and plan perfectly satisfies the user's specific prompt",
  "estimatedCost": "Approximate ₹ cost per person",
  "dayPlans": [
    {
      "day": 1,
      "title": "Day Theme",
      "morning": "Morning activity with specific location & timing",
      "afternoon": "Afternoon spot & lunch tip",
      "evening": "Sunset/evening spot & dinner tip"
    }
  ],
  "recommendedAttractions": [
    {
      "title": "Exact Place Name",
      "category": "Attraction",
      "subtitle": "Neighborhood • Type",
      "description": "2-line compelling description of what to see/do"
    }
  ],
  "recommendedFood": [
    {
      "title": "Famous Restaurant / Stall Name",
      "category": "Restaurant",
      "subtitle": "Location • Cuisine • Price estimate for two",
      "description": "What signature dishes to order"
    }
  ],
  "recommendedStays": [
    {
      "title": "Hotel / Hostel / Resort Name",
      "category": "Stay",
      "subtitle": "Location • Style • Price per night",
      "description": "Why it's great for this group/budget"
    }
  ],
  "safetyTips": [
    "Practical safety or local travel tip 1",
    "Practical safety or local travel tip 2"
  ]
}
Return ONLY pure JSON. Do not wrap in markdown or backticks if possible.`

  const userQuery = `
Prompt: "${prompt || 'Suggest a great trip in India'}"
Preferred Destination: ${destination || 'Best match in India'}
Travelers: ${travelers || '2 people'}
Duration: ${duration || '3 Days'}
Budget Tier: ${budget || 'Moderate'}
Vibes/Interests: ${vibes && vibes.length > 0 ? vibes.join(', ') : 'Popular'}
`

  const payload = {
    contents: [
      {
        parts: [
          { text: systemInstruction },
          { text: userQuery }
        ]
      }
    ],
    generationConfig: {
      temperature: 0.7,
      maxOutputTokens: 2500,
      responseMimeType: "application/json"
    }
  }

  const response = await fetch(url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload)
  })

  if (!response.ok) {
    throw new Error(`Gemini API returned status ${response.status}`)
  }

  const data = await response.json()
  const rawText = data?.candidates?.[0]?.content?.parts?.[0]?.text
  if (!rawText) throw new Error('Empty response from Gemini API')

  // Clean JSON if needed
  let cleaned = rawText.trim()
  if (cleaned.startsWith('```json')) cleaned = cleaned.slice(7)
  if (cleaned.startsWith('```')) cleaned = cleaned.slice(3)
  if (cleaned.endsWith('```')) cleaned = cleaned.slice(0, -3)

  const parsed = JSON.parse(cleaned.trim())
  return parsed
}
