/* ========================================
   services.js — Dummy Service Data
   Structured for easy backend API integration.
   Replace DUMMY_SERVICES with API call later.
   ======================================== */

export const SERVICE_CATEGORIES = [
  { id: "all", label: "All" },
  { id: "home", label: "Home" },
  { id: "repair", label: "Repair" },
  { id: "cleaning", label: "Cleaning" },
  { id: "beauty", label: "Beauty" },
  { id: "vehicle", label: "Vehicle" },
  { id: "professional", label: "Professional" },
];

export const DUMMY_SERVICES = [
  {
    id: "svc-001",
    name: "Expert Electrical Wiring & Repairs",
    providerName: "Rajesh Electricals",
    providerInitials: "RE",
    category: "Electrician",
    categoryTag: "home",
    rating: 4.8,
    totalReviews: 342,
    startingPrice: 499,
    estimatedDuration: "2-3 hours",
    distance: "1.2 km",
    isAvailableToday: true,
    isVerified: true,
    bannerImage: null,
    providerLogo: null,
    description:
      "Professional electrical wiring, repair, and installation services for homes and offices. Licensed electricians with 10+ years of experience.",
    features: [
      "Licensed & Insured",
      "Same-Day Service Available",
      "Free Inspection",
      "Warranty on All Work",
      "Emergency Support 24/7",
    ],
    workingHours: {
      monday: "8:00 AM - 8:00 PM",
      tuesday: "8:00 AM - 8:00 PM",
      wednesday: "8:00 AM - 8:00 PM",
      thursday: "8:00 AM - 8:00 PM",
      friday: "8:00 AM - 8:00 PM",
      saturday: "9:00 AM - 6:00 PM",
      sunday: "10:00 AM - 4:00 PM",
    },
    reviews: [
      {
        id: "rev-001",
        userName: "Amit Sharma",
        rating: 5,
        date: "2026-07-10",
        comment: "Excellent work! The electrician was punctual and fixed the wiring issue in no time. Highly recommended.",
      },
      {
        id: "rev-002",
        userName: "Priya Patel",
        rating: 4,
        date: "2026-07-05",
        comment: "Good service overall. The work was done cleanly and professionally.",
      },
    ],
  },
  {
    id: "svc-002",
    name: "Professional Plumbing Solutions",
    providerName: "QuickFix Plumbers",
    providerInitials: "QP",
    category: "Plumber",
    categoryTag: "home",
    rating: 4.6,
    totalReviews: 218,
    startingPrice: 399,
    estimatedDuration: "1-3 hours",
    distance: "2.1 km",
    isAvailableToday: true,
    isVerified: true,
    bannerImage: null,
    providerLogo: null,
    description:
      "Expert plumbing services including pipe repair, leak detection, bathroom fitting, and water heater installation.",
    features: [
      "Quick Response Time",
      "Transparent Pricing",
      "All Plumbing Issues Covered",
      "Quality Parts Used",
      "Satisfaction Guaranteed",
    ],
    workingHours: {
      monday: "7:00 AM - 9:00 PM",
      tuesday: "7:00 AM - 9:00 PM",
      wednesday: "7:00 AM - 9:00 PM",
      thursday: "7:00 AM - 9:00 PM",
      friday: "7:00 AM - 9:00 PM",
      saturday: "8:00 AM - 7:00 PM",
      sunday: "9:00 AM - 5:00 PM",
    },
    reviews: [
      {
        id: "rev-003",
        userName: "Sanjay Kumar",
        rating: 5,
        date: "2026-07-12",
        comment: "Fixed our kitchen pipe leak very quickly. Fair pricing and professional attitude.",
      },
    ],
  },
  {
    id: "svc-003",
    name: "Custom Furniture & Woodwork",
    providerName: "MasterCraft Carpentry",
    providerInitials: "MC",
    category: "Carpenter",
    categoryTag: "home",
    rating: 4.7,
    totalReviews: 156,
    startingPrice: 799,
    estimatedDuration: "3-5 hours",
    distance: "3.4 km",
    isAvailableToday: false,
    isVerified: true,
    bannerImage: null,
    providerLogo: null,
    description:
      "Bespoke furniture creation, wooden door repairs, kitchen cabinet installation, and custom woodwork solutions.",
    features: [
      "Custom Designs Available",
      "Premium Wood Materials",
      "On-Site Assembly",
      "30-Day Warranty",
      "Free Consultation",
    ],
    workingHours: {
      monday: "9:00 AM - 7:00 PM",
      tuesday: "9:00 AM - 7:00 PM",
      wednesday: "9:00 AM - 7:00 PM",
      thursday: "9:00 AM - 7:00 PM",
      friday: "9:00 AM - 7:00 PM",
      saturday: "10:00 AM - 5:00 PM",
      sunday: "Closed",
    },
    reviews: [
      {
        id: "rev-004",
        userName: "Neha Gupta",
        rating: 5,
        date: "2026-06-28",
        comment: "Beautiful custom bookshelf built exactly to our specifications. The carpenter was very skilled.",
      },
    ],
  },
  {
    id: "svc-004",
    name: "Interior & Exterior Painting",
    providerName: "ColorSplash Painters",
    providerInitials: "CP",
    category: "Painter",
    categoryTag: "home",
    rating: 4.5,
    totalReviews: 289,
    startingPrice: 599,
    estimatedDuration: "4-6 hours",
    distance: "1.8 km",
    isAvailableToday: true,
    isVerified: false,
    bannerImage: null,
    providerLogo: null,
    description:
      "Complete painting solutions for homes, offices, and commercial spaces. Wall painting, texture work, and waterproofing.",
    features: [
      "Premium Paint Brands",
      "Color Consultation",
      "Clean & Timely Execution",
      "Waterproofing Available",
      "Free Quotation",
    ],
    workingHours: {
      monday: "8:00 AM - 7:00 PM",
      tuesday: "8:00 AM - 7:00 PM",
      wednesday: "8:00 AM - 7:00 PM",
      thursday: "8:00 AM - 7:00 PM",
      friday: "8:00 AM - 7:00 PM",
      saturday: "9:00 AM - 5:00 PM",
      sunday: "Closed",
    },
    reviews: [
      {
        id: "rev-005",
        userName: "Vikram Singh",
        rating: 4,
        date: "2026-07-01",
        comment: "Good painting job on our living room. The texture work turned out really nice.",
      },
    ],
  },
  {
    id: "svc-005",
    name: "Deep Home Cleaning Service",
    providerName: "SparkleHome Cleaners",
    providerInitials: "SH",
    category: "Home Cleaning",
    categoryTag: "cleaning",
    rating: 4.9,
    totalReviews: 567,
    startingPrice: 699,
    estimatedDuration: "3-4 hours",
    distance: "0.9 km",
    isAvailableToday: true,
    isVerified: true,
    bannerImage: null,
    providerLogo: null,
    description:
      "Professional deep cleaning for kitchens, bathrooms, bedrooms, and full home sanitization. Eco-friendly products used.",
    features: [
      "Eco-Friendly Products",
      "Trained Professionals",
      "Full Home Sanitization",
      "Kitchen Deep Clean",
      "Bathroom Deep Clean",
    ],
    workingHours: {
      monday: "7:00 AM - 8:00 PM",
      tuesday: "7:00 AM - 8:00 PM",
      wednesday: "7:00 AM - 8:00 PM",
      thursday: "7:00 AM - 8:00 PM",
      friday: "7:00 AM - 8:00 PM",
      saturday: "7:00 AM - 8:00 PM",
      sunday: "8:00 AM - 6:00 PM",
    },
    reviews: [
      {
        id: "rev-006",
        userName: "Anjali Desai",
        rating: 5,
        date: "2026-07-14",
        comment: "Amazing deep cleaning service! Our home looks brand new. The team was very thorough.",
      },
      {
        id: "rev-007",
        userName: "Rohit Mehta",
        rating: 5,
        date: "2026-07-08",
        comment: "Best cleaning service in the area. Professional team with great attention to detail.",
      },
    ],
  },
  {
    id: "svc-006",
    name: "Termite & Pest Control",
    providerName: "SafeGuard Pest Solutions",
    providerInitials: "SP",
    category: "Pest Control",
    categoryTag: "cleaning",
    rating: 4.4,
    totalReviews: 198,
    startingPrice: 899,
    estimatedDuration: "2-4 hours",
    distance: "4.2 km",
    isAvailableToday: false,
    isVerified: true,
    bannerImage: null,
    providerLogo: null,
    description:
      "Comprehensive pest control services for termites, cockroaches, mosquitoes, rats, and bed bugs. Safe for children and pets.",
    features: [
      "Safe for Kids & Pets",
      "Government Certified",
      "Long-Lasting Protection",
      "Free Follow-Up Visit",
      "All Pest Types Covered",
    ],
    workingHours: {
      monday: "8:00 AM - 6:00 PM",
      tuesday: "8:00 AM - 6:00 PM",
      wednesday: "8:00 AM - 6:00 PM",
      thursday: "8:00 AM - 6:00 PM",
      friday: "8:00 AM - 6:00 PM",
      saturday: "9:00 AM - 5:00 PM",
      sunday: "Closed",
    },
    reviews: [
      {
        id: "rev-008",
        userName: "Meera Joshi",
        rating: 4,
        date: "2026-06-20",
        comment: "Effective pest treatment. The team was professional and explained everything clearly.",
      },
    ],
  },
  {
    id: "svc-007",
    name: "AC Installation & Repair",
    providerName: "CoolBreeze Technicians",
    providerInitials: "CB",
    category: "AC Repair",
    categoryTag: "repair",
    rating: 4.7,
    totalReviews: 423,
    startingPrice: 549,
    estimatedDuration: "1-2 hours",
    distance: "2.5 km",
    isAvailableToday: true,
    isVerified: true,
    bannerImage: null,
    providerLogo: null,
    description:
      "Expert AC installation, maintenance, gas refilling, and repair services for all brands. Same-day service available.",
    features: [
      "All AC Brands Serviced",
      "Same-Day Repair",
      "Gas Refilling",
      "Annual Maintenance Plans",
      "Genuine Spare Parts",
    ],
    workingHours: {
      monday: "8:00 AM - 9:00 PM",
      tuesday: "8:00 AM - 9:00 PM",
      wednesday: "8:00 AM - 9:00 PM",
      thursday: "8:00 AM - 9:00 PM",
      friday: "8:00 AM - 9:00 PM",
      saturday: "9:00 AM - 8:00 PM",
      sunday: "10:00 AM - 6:00 PM",
    },
    reviews: [
      {
        id: "rev-009",
        userName: "Karan Malhotra",
        rating: 5,
        date: "2026-07-11",
        comment: "Quick AC repair on a hot day! The technician was skilled and the AC is working perfectly now.",
      },
    ],
  },
  {
    id: "svc-008",
    name: "Appliance Repair & Service",
    providerName: "FixIt Home Appliances",
    providerInitials: "FA",
    category: "Appliance Repair",
    categoryTag: "repair",
    rating: 4.3,
    totalReviews: 267,
    startingPrice: 449,
    estimatedDuration: "1-3 hours",
    distance: "3.1 km",
    isAvailableToday: true,
    isVerified: false,
    bannerImage: null,
    providerLogo: null,
    description:
      "Repair and maintenance for washing machines, refrigerators, microwaves, and other home appliances.",
    features: [
      "All Appliance Brands",
      "Doorstep Service",
      "Genuine Parts",
      "90-Day Service Warranty",
      "Affordable Pricing",
    ],
    workingHours: {
      monday: "9:00 AM - 8:00 PM",
      tuesday: "9:00 AM - 8:00 PM",
      wednesday: "9:00 AM - 8:00 PM",
      thursday: "9:00 AM - 8:00 PM",
      friday: "9:00 AM - 8:00 PM",
      saturday: "10:00 AM - 6:00 PM",
      sunday: "Closed",
    },
    reviews: [
      {
        id: "rev-010",
        userName: "Deepika Nair",
        rating: 4,
        date: "2026-07-03",
        comment: "Refrigerator was repaired quickly. Fair price charged. Would use again.",
      },
    ],
  },
  {
    id: "svc-009",
    name: "Premium Beauty Salon at Home",
    providerName: "GlowUp Beauty Studio",
    providerInitials: "GB",
    category: "Beauty Salon",
    categoryTag: "beauty",
    rating: 4.8,
    totalReviews: 634,
    startingPrice: 349,
    estimatedDuration: "1-2 hours",
    distance: "1.5 km",
    isAvailableToday: true,
    isVerified: true,
    bannerImage: null,
    providerLogo: null,
    description:
      "Professional beauty services at your doorstep — hair styling, facials, waxing, manicure, pedicure, and bridal packages.",
    features: [
      "At-Home Service",
      "Certified Beauticians",
      "Premium Products Used",
      "Bridal Packages Available",
      "Hygiene Guaranteed",
    ],
    workingHours: {
      monday: "9:00 AM - 9:00 PM",
      tuesday: "9:00 AM - 9:00 PM",
      wednesday: "9:00 AM - 9:00 PM",
      thursday: "9:00 AM - 9:00 PM",
      friday: "9:00 AM - 9:00 PM",
      saturday: "9:00 AM - 9:00 PM",
      sunday: "10:00 AM - 7:00 PM",
    },
    reviews: [
      {
        id: "rev-011",
        userName: "Ishika Roy",
        rating: 5,
        date: "2026-07-15",
        comment: "Loved the facial service! Very professional and the products used were top quality.",
      },
      {
        id: "rev-012",
        userName: "Pooja Reddy",
        rating: 5,
        date: "2026-07-09",
        comment: "Bridal package was worth every penny. The team made me look stunning for my wedding.",
      },
    ],
  },
  {
    id: "svc-010",
    name: "Premium Car Wash & Detailing",
    providerName: "ShineMax Car Care",
    providerInitials: "SC",
    category: "Car Wash",
    categoryTag: "vehicle",
    rating: 4.6,
    totalReviews: 389,
    startingPrice: 599,
    estimatedDuration: "1-2 hours",
    distance: "2.8 km",
    isAvailableToday: true,
    isVerified: true,
    bannerImage: null,
    providerLogo: null,
    description:
      "Exterior wash, interior vacuuming, engine bay cleaning, ceramic coating, and full car detailing services.",
    features: [
      "Eco-Friendly Waterless Wash",
      "Ceramic Coating Available",
      "Interior Deep Cleaning",
      "Paint Protection",
      "Mobile Service Available",
    ],
    workingHours: {
      monday: "8:00 AM - 7:00 PM",
      tuesday: "8:00 AM - 7:00 PM",
      wednesday: "8:00 AM - 7:00 PM",
      thursday: "8:00 AM - 7:00 PM",
      friday: "8:00 AM - 7:00 PM",
      saturday: "8:00 AM - 7:00 PM",
      sunday: "9:00 AM - 5:00 PM",
    },
    reviews: [
      {
        id: "rev-013",
        userName: "Arjun Rao",
        rating: 5,
        date: "2026-07-13",
        comment: "My car looks brand new after the detailing service. Highly recommend ShineMax!",
      },
    ],
  },
  {
    id: "svc-011",
    name: "Two-Wheeler Service & Repair",
    providerName: "BikeCare Mechanics",
    providerInitials: "BM",
    category: "Bike Service",
    categoryTag: "vehicle",
    rating: 4.5,
    totalReviews: 276,
    startingPrice: 299,
    estimatedDuration: "1-3 hours",
    distance: "1.7 km",
    isAvailableToday: false,
    isVerified: false,
    bannerImage: null,
    providerLogo: null,
    description:
      "Complete two-wheeler servicing including oil change, brake repair, engine tuning, and general maintenance.",
    features: [
      "All Two-Wheeler Brands",
      "Express Service Available",
      "Genuine Spare Parts",
      "Free Vehicle Checkup",
      "Pickup & Drop Service",
    ],
    workingHours: {
      monday: "8:00 AM - 8:00 PM",
      tuesday: "8:00 AM - 8:00 PM",
      wednesday: "8:00 AM - 8:00 PM",
      thursday: "8:00 AM - 8:00 PM",
      friday: "8:00 AM - 8:00 PM",
      saturday: "8:00 AM - 6:00 PM",
      sunday: "9:00 AM - 4:00 PM",
    },
    reviews: [
      {
        id: "rev-014",
        userName: "Suresh Patel",
        rating: 4,
        date: "2026-06-25",
        comment: "Good bike servicing. They replaced the brake pads and changed oil. Runs smooth now.",
      },
    ],
  },
  {
    id: "svc-012",
    name: "Water Purifier Installation & Repair",
    providerName: "PureFlow Technicians",
    providerInitials: "PT",
    category: "Water Purifier Repair",
    categoryTag: "professional",
    rating: 4.4,
    totalReviews: 189,
    startingPrice: 399,
    estimatedDuration: "1-2 hours",
    distance: "3.6 km",
    isAvailableToday: true,
    isVerified: true,
    bannerImage: null,
    providerLogo: null,
    description:
      "RO installation, filter replacement, UV repair, and annual maintenance contracts for all water purifier brands.",
    features: [
      "All RO/UV Brands",
      "Filter Replacement",
      "Annual Maintenance Plans",
      "Water Quality Testing",
      "Same-Day Service",
    ],
    workingHours: {
      monday: "9:00 AM - 7:00 PM",
      tuesday: "9:00 AM - 7:00 PM",
      wednesday: "9:00 AM - 7:00 PM",
      thursday: "9:00 AM - 7:00 PM",
      friday: "9:00 AM - 7:00 PM",
      saturday: "10:00 AM - 5:00 PM",
      sunday: "Closed",
    },
    reviews: [
      {
        id: "rev-015",
        userName: "Rina Bose",
        rating: 4,
        date: "2026-07-07",
        comment: "Quick filter replacement and water quality test. The technician was knowledgeable.",
      },
    ],
  },
];

/**
 * Helper to get service by ID.
 * Later this can be replaced with an API call.
 */
export function getServiceById(id) {
  return DUMMY_SERVICES.find((s) => s.id === id) || null;
}

/**
 * Helper to get similar services by category.
 * Later this can be replaced with an API call.
 */
export function getSimilarServices(serviceId, category, limit = 4) {
  return DUMMY_SERVICES.filter(
    (s) => s.id !== serviceId && s.categoryTag === category
  ).slice(0, limit);
}

/**
 * Helper to filter services by search query and category.
 * Later this can be replaced with an API call.
 */
export function filterServices(services, query, categoryTag) {
  let result = services;

  if (categoryTag && categoryTag !== "all") {
    result = result.filter((s) => s.categoryTag === categoryTag);
  }

  if (query && query.trim()) {
    const q = query.toLowerCase().trim();
    result = result.filter(
      (s) =>
        s.name.toLowerCase().includes(q) ||
        s.providerName.toLowerCase().includes(q) ||
        s.category.toLowerCase().includes(q)
    );
  }

  return result;
}
