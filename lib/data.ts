export interface Service {
    slug: string;
    title: string;
    desc: string;
    fullDesc: string;
    longDescription?: string;
    benefits?: string[];
    process?: { step: string; desc: string }[];
    specifications?: { label: string; value: string }[];
    features: string[];
    image: string;
    isFeatured: boolean;
    seoTitle?: string;
    relatedServices?: string[];
}

export interface City {
    slug: string;
    name: string;
    phone: string;
    email: string;
    address: string;
    coordinates: { lat: number; lng: number };
    description: string;
    neighborhoods: string[];
    localInsight?: string;
    serviceArea?: string;
    officeAddress?: string;
}

export interface Testimonial {
    name: string;
    area: string;
    city: string;
    rating: number;
    service: string;
    text: string;
    date: string;
}

export const services: Service[] = [
    {
        slug: "invisible-grill-balcony-safety-nets",
        title: "Invisible Grill Balcony Safety Nets",
        seoTitle: "Balcony Safety Nets & Invisible Grills",
        desc: "Unobstructed views with maximum safety for high-rise balconies.",
        fullDesc: "Experience the perfect blend of safety and aesthetics with our Invisible Grill Balcony Safety Nets. Unlike traditional bulky grills, these high-tensile stainless steel cables provide robust protection without blocking your view or ventilation.",
        longDescription: "Our Invisible Grills are the modern alternative to traditional bulky iron grills. Crafted from 316 Marine Grade Stainless Steel and encased in a protective nylon coating, these grills offer uncompromising safety without sacrificing your view. They are designed to withstand tensile loads of up to 400kg, making them impossible to break with bare hands. Perfect for high-rise apartments, they ensure children and pets remain safe while you enjoy the panoramic scenery.",
        benefits: [
            "Zero Visual Obstruction: Enjoy 100% clear views of the outdoors.",
            "High Tensile Strength: Capable of withstanding 400kg+ impact loads.",
            "Rust & Corrosion Resistant: 316 Marine Grade steel ensures longevity even in coastal areas.",
            "Easy Maintenance: Does not require painting; simple cleaning keeps it new.",
            "Bird Protection: Doubles as an effective barrier against pigeons and other birds."
        ],
        process: [
            { step: "Site Measurement", desc: "Laser-accurate measurements of your balcony area." },
            { step: "Custom Fabrication", desc: "Grills are custom-cut and prepared off-site or on-site." },
            { step: "Anchoring", desc: "Hilti anchors are drilled into the walls for maximum stability." },
            { step: "Tensioning", desc: "Cables are strung and tensioned to the perfect tautness." },
            { step: "Load Testing", desc: "Final safety checks to ensure load-bearing capacity." }
        ],
        specifications: [
            { label: "Material", value: "316 Marine Grade Stainless Steel" },
            { label: "Cable Diameter", value: "2mm (Steel) + Nylon Coating = 2.5mm/3mm" },
            { label: "Tensile Strength", value: "400kg - 850kg breaking point" },
            { label: "Gap Spacing", value: "2 inches, 3 inches, or 4 inches (customizable)" },
            { label: "Warranty", value: "5 Years Manufacturer Warranty" }
        ],
        features: ["316 Marine Grade Steel", "Zero Visual Obstruction", "Anti-Rust Technology", "Child & Pet Safe"],
        image: "/Invisible Grill Balcony Safety Nets.jpg",
        isFeatured: true,
        relatedServices: ["invisible-pigeon-net", "pets-safety-nets", "invisible-childrens-safety", "monkey-safety-nets"]
    },
    {
        slug: "invisible-pigeon-net",
        title: "Invisible Pigeon Net",
        seoTitle: "Invisible Pigeon Nets & Bird Netting",
        desc: "Keep your balcony clean and bird-free without visible barriers.",
        fullDesc: "Say goodbye to bird droppings and nesting nuisances. Our Invisible Pigeon Nets are designed to be nearly invisible from a distance, maintaining the beauty of your facade while effectively keeping pigeons and other birds at bay.",
        longDescription: "Birds can be a major nuisance in urban environments, causing hygiene issues and property damage. Our Invisible Pigeon Nets facilitate a clean, bird-free environment without making your home look like a cage. Made from translucent HDPE (High-Density Polyethylene) monofilament, these nets blend seamlessly with the background. They are UV stabilized to withstand years of harsh sunlight without becoming brittle.",
        benefits: [
            "Near Invisible: Translucent material blends with the open sky.",
            "Hygiene Maintenance: Prevents bird droppings and potential diseases.",
            "Durable & Strong: HDPE material is rot-proof and weather-resistant.",
            "Humane Solution: Blocks birds without harming or trapping them.",
            "Economical: A cost-effective long-term solution for bird control."
        ],
        process: [
            { step: "Inspection", desc: "Identifying nesting spots and entry points." },
            { step: "Cleaning", desc: "Basic cleaning of the area before installation." },
            { step: "Framing", desc: "Installing a stainless steel wire frame or hooks." },
            { step: "Netting", desc: "Securing the net tightly to the frame." },
            { step: "Sealing", desc: "Ensuring no gaps are left for birds to squeeze through." }
        ],
        specifications: [
            { label: "Material", value: "0.8mm - 1.2mm HDPE Monofilament" },
            { label: "Mesh Size", value: "25mm / 40mm / 50mm square mesh" },
            { label: "UV Protection", value: "UV Stabilized for 5+ years" },
            { label: "Color", value: "Transparent / Black / White" },
            { label: "Visibility", value: "Less than 10% from 5 meters away" }
        ],
        features: ["High Transparency", "UV Resistant Polymer", "Bird-Friendly Barrier", "Low Maintenance"],
        image: "/Invisible Pigeon Net.jpg",
        isFeatured: true,
        relatedServices: ["anti-bird-nets", "duct-area-nets", "invisible-grill-balcony-safety-nets", "monkey-safety-nets"]
    },
    {
        slug: "sports-practice-nets",
        title: "Sports Practice Nets",
        seoTitle: "Sports Practice Nets & Cricket Netting",
        desc: "Professional-grade netting for cricket, football, and multi-sports.",
        fullDesc: "Transform any open space into a professional training ground. Our Sports Practice Nets are engineered to withstand high-velocity impacts, making them ideal for cricket batting practice, football drills, or golf driving ranges.",
        longDescription: "Whether you're a sports academy, a school, or a homeowner wanting a practice corner, our Sports Practice Nets are built for performance. We use high-grade nylon or HDPE knotted netting capable of absorbing the high-velocity impact of cricket balls, footballs, and golf balls. Our custom cage installations include roof netting and side curtains to ensure balls stay within the designated area, protecting bystanders and property.",
        benefits: [
            "High Impact Absorption: Withstands repeated heavy hits.",
            "UV Stabilized: Suitable for outdoor use in direct sunlight.",
            "Custom Dimensions: Tailored to fit terraces, backyards, or grounds.",
            "Safe Containment: Prevents balls from damaging windows or hitting people.",
            "Professional Grade: Meets standards used in sports clubs."
        ],
        process: [
            { step: "Area Survey", desc: "Determining the ideal cage size and pole positions." },
            { step: "Pole Installation", desc: "Erecting sturdy metal poles for the frame." },
            { step: "Cabling", desc: "Running steel cables to support the net roof." },
            { step: "Net Hanging", desc: "Hanging and securing the side and roof nets." },
            { step: "Bottom Sealing", desc: "Securing the bottom edge to prevent ball escape." }
        ],
        specifications: [
            { label: "Material", value: "High-Tenacity Nylon / HDPE Knot" },
            { label: "Thickness", value: "2mm - 4mm twine thickness" },
            { label: "Mesh Size", value: "40mm (Cricket) / 100mm (Football)" },
            { label: "Breaking Strength", value: "180kg - 350kg per mesh" },
            { label: "Life Span", value: "5-8 Years outdoors" }
        ],
        features: ["High Impact Resistance", "All-Weather Durability", "Custom Dimensions", "Professional Install"],
        image: "/Sports Practice Nets.jpg",
        isFeatured: true,
        relatedServices: ["forming-nets", "industrial-safety-nets", "pets-safety-nets"]
    },
    {
        slug: "duct-area-nets",
        title: "Duct Area Nets",
        seoTitle: "Duct Area Safety Nets & Bird Netting",
        desc: "Secure open shafts to prevent accidents and keep pests out.",
        fullDesc: "Open duct areas in apartment complexes can be major hazards for falling objects, pets, and even people. They also become entry points for birds and nesting debris.",
        longDescription: "Duct areas and ventilation shafts are often the most neglected spaces in a building, yet they pose significant risks. Accidents involving domestic help or pets falling into these shafts are not uncommon. Furthermore, pigeons often nest in these sheltered vertical spaces, leading to foul odors and blockages. Our Duct Area Nets provide a horizontal safety layer at every floor or a vertical seal, effectively neutralizing these risks.",
        benefits: [
            "Accident Prevention: Stops people or pets from falling into shafts.",
            "Debris Catcher: Catches falling garbage, clothes, or objects.",
            "Pest Blockade: Prevents birds from entering and nesting.",
            "Hygiene: Reduces accumulation of bird droppings and waste.",
            "Ventilation: Allows full airflow unlike solid covers."
        ],
        process: [
            { step: "Risk Assessment", desc: "Evaluating the duct access and safety requirements." },
            { step: "Anchor Installation", desc: "Drilling heavy-duty hooks into the concrete walls." },
            { step: "Rope Framework", desc: "Creating a strong border rope structure." },
            { step: "Net Lacing", desc: "Lacing the safety net tightly to the framework." },
            { step: "Double Cinching", desc: "Ensuring double knots for maximum security." }
        ],
        specifications: [
            { label: "Material", value: "Heavy Duty Garware / Tufropes Nets" },
            { label: "Mesh Size", value: "25mm (Bird) / 50mm (Safety)" },
            { label: "Load Capacity", value: "Up to 500kg impact load" },
            { label: "UV Warranty", value: "3 Years against degradation" },
            { label: "Installation Method", value: "Industrial Rope Access (Spider-man style)" }
        ],
        features: ["Heavy Duty Load Bearing", "Debris Protection", "Pest Exclusion", "Long-Lasting Material"],
        image: "/Duct Area Nets.jpg",
        isFeatured: true,
        relatedServices: ["invisible-pigeon-net", "anti-bird-nets", "industrial-safety-nets"]
    },
    {
        slug: "cloth-hanger-services",
        title: "Cloth Hanger Services",
        seoTitle: "Ceiling Cloth Hangers & Drying Systems",
        desc: "Smart, space-saving ceiling drying solutions for modern homes.",
        fullDesc: "Reclaim your floor space with our intelligent Ceiling Cloth Hanger systems. Perfect for urban apartments, these pulley-operated hangers allow you to easily raise and lower your laundry, keeping your balcony clutter-free.",
        longDescription: "In modern apartments, floor space is a premium. Traditional clothes racks take up valuable balcony real estate. Our Ceiling Cloth Drying Hangers utilise the unused ceiling space. Each stainless steel pipe can be individually lowered to waist height for convenient hanging of wet clothes, and then effortlessly hoisted up to the ceiling where they dry faster due to heat rising, all while leaving the floor completely free for your leisure.",
        benefits: [
            "Space Saver: Frees up 100% of your balcony floor usage.",
            "Ease of Use: Smooth pulley mechanism requires minimal effort.",
            "Faster Drying: Warm air rises, drying clothes faster at the ceiling.",
            "Durability: Stainless steel pipes do not rust or stain clothes.",
            "Aesthetics: Looks neat and organized compared to messy wire lines."
        ],
        process: [
            { step: "Measuring", desc: "Measuring ceiling dimensions for hanger size." },
            { step: "Marking", desc: "Marking drill points on the ceiling concrete." },
            { step: "Drilling", desc: "Drilling holes for pulley brackets." },
            { step: "Assembly", desc: "Threading the ropes and attaching pipes." },
            { step: "Testing", desc: "Demonstrating the smooth operation to the client." }
        ],
        specifications: [
            { label: "Pipes Material", value: "Stainless Steel (Jindal Grade)" },
            { label: "Number of Pipes", value: "4, 5, or 6 pipes available" },
            { label: "Lengths", value: "4ft to 8ft options" },
            { label: "Rope Type", value: "High-strength Nylon trekking rope" },
            { label: "Weight Capacity", value: "5kg-8kg per pipe (wet clothes)" }
        ],
        features: ["Easy Pulley Mechanism", "Rust-Proof Pipes", "Space Optimization", "Heavy Load Capacity"],
        image: "/Cloth Hanger Services.jpg",
        isFeatured: true,
        relatedServices: ["invisible-grill-balcony-safety-nets", "invisible-pigeon-net", "mosquito-nets"]
    },
    {
        slug: "anti-bird-nets",
        title: "Anti Bird Nets",
        seoTitle: "Anti Bird Nets & Bird Control Solutions",
        desc: "General purpose bird protection for residential and commercial areas.",
        fullDesc: "Our Anti Bird Nets are designed to provide a harmless barrier against birds, preventing them from roosting and nesting in unwanted areas. Made from high-quality materials, these nets are weather-resistant and durable.",
        longDescription: "Apart from pigeons, other birds like crows, mynahs, and sparrows can also be intrusive. Our general Anti-Bird Nets are versatile solutions suitable for windows, ventilators, utility areas, and large commercial spaces like warehouses. They effectively stop birds from perching on pipes, ledges, and AC units, keeping the premises clean and hygienic.",
        benefits: [
            "Versatile: Effective against various bird species.",
            "Cleanliness: Stops droppings on cars, floors, and equipment.",
            "Health: Reduces risk of histoplasmosis and other bird-borne diseases.",
            "Non-corrosive: unaffected by atmospheric pollution.",
            "Custom Fit: Can be installed in any geometric shape or area."
        ],
        process: [
            { step: "Survey", desc: "Checking the type of bird problem (roosting vs nesting)." },
            { step: "Grid Installation", desc: "Setting up a perimeter cable system." },
            { step: "Net Attachment", desc: "Hog-ringing the net to the cable system." },
            { step: "Zip Tying", desc: "Securing around pipes and complex obstacles." },
            { step: "Cleanup", desc: "Removing installation debris." }
        ],
        specifications: [
            { label: "Material", value: "Co-polymer Nylon or HDPE" },
            { label: "Knot Type", value: "Knotted mesh for extra strength" },
            { label: "Mesh Sizes", value: "19mm (Sparrow), 25mm (Pigeon), 35mm (Crow)" },
            { label: "Colors", value: "Black / White / Beige" },
            { label: "Warranty", value: "3 Years" }
        ],
        features: ["UV Resistant", "High Strength", "Custom Sizes", "Professional Installation"],
        image: "/Invisible Pigeon Net.jpg",
        isFeatured: false,
        relatedServices: ["invisible-pigeon-net", "duct-area-nets", "monkey-safety-nets", "industrial-safety-nets"]
    },
    {
        slug: "pets-safety-nets",
        title: "Pets Safety Nets",
        seoTitle: "Pet Safety Nets & Balcony Cat Nets",
        desc: "Protect your beloved pets from accidental falls.",
        fullDesc: "Keep your pets safe while allowing them to enjoy fresh air. Our Pets Safety Nets are bite-proof and strong enough to withstand even active pets.",
        longDescription: "Curious cats and energetic dogs love balconies, but 'High-Rise Syndrome' (falls from heights) is a fatal risk. Our Pet Safety Nets are thicker and more durable than standard nets to resist clawing and biting. For cats, we use a specific gauge that withstands their sharp claws. Now you can leave your balcony door open and let your furry friends enjoy the breeze without constant supervision.",
        benefits: [
            "Bite Resistant: Thicker twine withstands chewing.",
            "Claw Proof: Resists tearing from sharp claws.",
            "Escape Proof: Secure installation leaves no gaps.",
            "Visibility: Doesn't restrict your pet's view of the world.",
            "Ventilation: Excellent airflow for pet comfort."
        ],
        process: [
            { step: "Assessment", desc: "Checking for tiny gaps pets could squeeze through." },
            { step: "Hooking", desc: "Installing hooks at close intervals." },
            { step: "Net Installation", desc: "Fixing the pet-grade net securely." },
            { step: "Gap Check", desc: "Ensuring bottom and side gaps are zero." },
            { step: "Pet Test", desc: "Ensuring the net holds against pushing." }
        ],
        specifications: [
            { label: "Material", value: "HDPE / Nylon Copolymer" },
            { label: "Twine Thickness", value: "1.5mm - 2.5mm" },
            { label: "Mesh Size", value: "30mm (Cats) / 40mm (Dogs)" },
            { label: "Bite Resistance", value: "Medium to High" },
            { label: "Color", value: "Black / Green / White" }
        ],
        features: ["Bite Proof", "Durable", "Non-Toxic", "Easy to Clean"],
        image: "/Pets Safety Nets.jpg",
        isFeatured: false,
        relatedServices: ["invisible-childrens-safety", "invisible-grill-balcony-safety-nets", "monkey-safety-nets", "mosquito-nets"]
    },
    {
        slug: "mosquito-nets",
        title: "Mosquito Nets",
        seoTitle: "Mosquito Nets & Window Pleated Screens",
        desc: "Keep disease-carrying mosquitoes away while allowing fresh air.",
        fullDesc: "Protect your family from mosquito-borne diseases with our high-quality Mosquito Nets for windows and doors.",
        longDescription: "Dengue and Malaria are constant threats in Chennai. Keeping windows closed stifles ventilation. Our Mosquito Net solutions (Velcro, Magnetic, Pleated, or Roller) allow you to keep windows wide open for fresh air while effectively filtering out mosquitoes, flies, and other insects. The fine fiberglass or stainless steel mesh is durable, rust-proof, and easy to wash.",
        benefits: [
            "Disease Protection: Blocks vectors of Dengue and Malaria.",
            "Airflow: Allows cool breeze, reducing AC usage.",
            "Visibility: Black/Grey mesh offers good outward visibility.",
            "Dust Filtration: Filters out coarser dust particles.",
            "Variety: Options for every window and door type."
        ],
        process: [
            { step: "Selection", desc: "Choosing between Velcro, Pleated, or Openable frames." },
            { step: "Fabrication", desc: "Cutting mesh and assembling aluminium frames." },
            { step: "Fixing", desc: "Screwing frames to the window wood/UPVC." },
            { step: "Mesh Mounting", desc: "Inserting the mesh into the channels." },
            { step: "Testing", desc: "Checking smooth movement and sealing." }
        ],
        specifications: [
            { label: "Mesh Material", value: "Fiberglass / Stainless Steel 304" },
            { label: "Frame Material", value: "Powder Coated Aluminium" },
            { label: "Mesh Density", value: "18x16 mesh per square inch" },
            { label: "Type", value: "Velcro / Pleated / Openable" },
            { label: "Washability", value: "Yes, fully washable" }
        ],
        features: ["Fine Mesh", "Durable Frame", "Velcro/Magnetic Options", "Washable"],
        image: "/Mosquito Nets.jpg",
        isFeatured: false,
        relatedServices: ["invisible-grill-balcony-safety-nets", "pets-safety-nets", "cloth-hanger-services"]
    },
    {
        slug: "invisible-childrens-safety",
        title: "Invisible Children's Safety",
        seoTitle: "Child Balcony Safety Nets & Invisible Grills",
        desc: "Advanced protection for children on balconies and windows without visual clutter.",
        fullDesc: "Our Invisible Children's Safety systems provide a robust, high-tensile barrier engineered specifically for high-rise protection. It combines the strength of steel with the transparency of modern design.",
        longDescription: "Child safety is paramount in high-rise living. Our Invisible Children's Safety grills use 316-grade stainless steel cables with a nano-polymer coating. Unlike traditional nets, these are impossible for children to climb and provide a rigid yet transparent barrier. They are designed to withstand significant impact, ensuring your little ones are safe while they play near balconies or windows.",
        benefits: [
            "Child-Proof Design: Too thin to climb, too strong to break.",
            "High impact Resistance: Absorbs energy from accidental pushes.",
            "Visual Transparency: Maintains the aesthetics of your home.",
            "Anti-Rust Coating: Long-lasting protection in any weather.",
            "Professional Fit: Custom-engineered for every opening."
        ],
        process: [
            { step: "Safety Check", desc: "Identifying vulnerable areas for small children." },
            { step: "Precision Marks", desc: "Marking anchor points at specific safety intervals." },
            { step: "Rigid Framing", desc: "Installing heavy-duty steel tracks for the cables." },
            { step: "Tension Matrix", desc: "Tightening each cable to prevent spreading." },
            { step: "Load Verification", desc: "Simulating impact to ensure absolute safety." }
        ],
        specifications: [
            { label: "Core Material", value: "316 Marine Grade Stainless Steel" },
            { label: "Coating", value: "High-Density Nano Polymer" },
            { label: "Cable Tension", value: "Precision calibrated" },
            { label: "Warranty", value: "5 Years" },
            { label: "Visibility", value: "98% Transparent from 2 meters" }
        ],
        features: ["Child-Safe Engineering", "Anti-Climb Design", "High Impact Capacity", "Nano-Coating"],
        image: "/invisible childrens safety.jpg",
        isFeatured: true,
        relatedServices: ["invisible-grill-balcony-safety-nets", "pets-safety-nets", "staircase-invisible-grills", "monkey-safety-nets"]
    },
    {
        slug: "monkey-safety-nets",
        title: "Monkey Safety Nets",
        seoTitle: "Monkey Safety Nets & Balcony Netting",
        desc: "Heavy-duty, bite-proof netting designed to keep primates out of residential spaces.",
        fullDesc: "Specially engineered for urban areas near forests or hills, our Monkey Safety Nets are built to withstand the strength and agility of primates, ensuring your home remains private and secure.",
        longDescription: "In areas with monkey activity, standard bird nets are insufficient. Our Monkey Safety Nets are manufactured from high-tensile, bite-proof materials that can withstand the weight and pulling force of aggressive primates. We use specialized stainless steel rope cores or reinforced HDPE structures that cannot be torn or untied by monkeys, providing a permanent solution for your balcony and window protection.",
        benefits: [
            "Bite-Proof Material: Primary defense against sharp primate teeth.",
            "Heavy Weight Capacity: Supports the weight of multiple leaping monkeys.",
            "Claw Resistant: Specialized weave prevents tearing by sharp claws.",
            "Escape Prevention: Keeps pets in while keeping monkeys out.",
            "All-Weather Proof: Resistant to direct sun and heavy rain."
        ],
        process: [
            { step: "Site Analysis", desc: "Checking monkey entry paths and entry points." },
            { step: "Reinforcement", desc: "Installing heavy-duty frames capable of high torque." },
            { step: "Structural Lacing", desc: "Using steel wire for the primary net borders." },
            { step: "Triple Knotting", desc: "Ensuring individual mesh points cannot be slid apart." },
            { step: "Anchorage Check", desc: "Testing wall mount strength against pulling." }
        ],
        specifications: [
            { label: "Material", value: "Stainless Steel Core / Reinforced HDPE" },
            { label: "Mesh Gauge", value: "Heavy-Duty (3mm - 4mm)" },
            { label: "Breaking Load", value: "600kg+ Dynamic Load" },
            { label: "Color", value: "Black / Dark Green" },
            { label: "Durability", value: "10+ Years Lifespan" }
        ],
        features: ["Bite-Proof Core", "High Tear Resistance", "Primates Grade Safety", "Extreme Durability"],
        image: "/monkey safety nets.jpg",
        isFeatured: true,
        relatedServices: ["invisible-grill-balcony-safety-nets", "invisible-pigeon-net", "pets-safety-nets", "anti-bird-nets"]
    },
    {
        slug: "staircase-invisible-grills",
        title: "Staircase Invisible Grills",
        seoTitle: "Staircase Invisible Grills & Safety Barriers",
        desc: "Modern, sleek safety barriers for open staircases and voids in contemporary homes.",
        fullDesc: "Staircase Invisible Grills offer a minimal aesthetic for modern interiors. They provide a transparent safety wall for open staircases and voids, preventing falls while maintaining architectural flow.",
        longDescription: "Contemporary home designs often feature open-well staircases that can be hazardous, especially for children and the elderly. Our Staircase Invisible Grills provide a sleek, near-invisible vertical barrier that replaces bulky wooden or stone railings. Using vertical high-tensile cables, we create a safe environment that doesn't close off the space, allowing light and air to circulate while providing 100% fall protection.",
        benefits: [
            "Architectural Flow: Doesn't block light or visual space.",
            "Vertical Safety: Full-height protection from floor to ceiling.",
            "Minimalist Design: Blends perfectly with any interior decor.",
            "Dust Resistant: Doesn't collect dust like traditional wooden slats.",
            "High Maintenance-Free: Stays shiny and tight for years."
        ],
        process: [
            { step: "Interior Design Check", desc: "Matching grill spacing with interior aesthetics." },
            { step: "Precision Drilling", desc: "Using wood or marble-grade drills for clean finish." },
            { step: "Frame Mounting", desc: "Securing the top and bottom metal tracks." },
            { step: "Cable Installation", desc: "Individually threading cables through tracks." },
            { step: "Final Alignment", desc: "Ensuring perfect verticality and tension." }
        ],
        specifications: [
            { label: "Cables", value: "316 Grade Stainless Steel (2mm)" },
            { label: "Spacing", value: "2 inches to 4 inches" },
            { label: "Tension System", value: "Hidden turnbuckles for clean lines" },
            { label: "Finish", value: "Chrome / Satin / Powder Coated" },
            { label: "Safety Standard", value: "Residential Fall Arrest compliant" }
        ],
        features: ["Sleek Aesthetics", "Vertical Fall Protection", "Custom Finishes", "Space Enhancing"],
        image: "/staircase invisible grills.jpg",
        isFeatured: true,
        relatedServices: ["invisible-childrens-safety", "invisible-grill-balcony-safety-nets", "pets-safety-nets"]
    },
    {
        slug: "forming-nets",
        title: "Forming Nets",
        seoTitle: "Forming Nets & Agriculture Shade Nets",
        desc: "Specialized netting solutions for construction and agricultural use.",
        fullDesc: "Versatile netting solutions for various applications including construction forming, agricultural shading, and more.",
        longDescription: "Forming nets are specialized containment solutions. In agriculture, they are used as shade nets or trellis supports for creepers. In construction, they effectively screen off scaffolding to prevent dust pollution and provide privacy. We offer a range of densities (shade factors) from 50% to 90% depending on the specific application requirement.",
        benefits: [
            "Dust Control: Contains construction dust within the site.",
            "Shading: Protects crops or workers from harsh sun.",
            "Privacy: visual barrier for ongoing work.",
            "Wind Breaker: Reduces wind speed in open areas.",
            "Cost Effective: Cheap solution for large area coverage."
        ],
        process: [
            { step: "Measurement", desc: "Measuring the scaffolding or greenhouse area." },
            { step: "Selection", desc: "Choosing shade factor (e.g., 75% Green Net)." },
            { step: "Fastening", desc: "Using cable ties to fix net to poles/scaffolds." },
            { step: "Joining", desc: "Stitching multiple sheets for large widths." },
            { step: "Inspection", desc: "Ensuring no loose ends flap in the wind." }
        ],
        specifications: [
            { label: "Material", value: "HDPE Tape" },
            { label: "Shade Factor", value: "50%, 75%, 90%" },
            { label: "Color", value: "Green / Black / White" },
            { label: "GSM", value: "90 GSM to 150 GSM" },
            { label: "UV Stabilized", value: "Yes" }
        ],
        features: ["Multi-purpose", "Weather Resistant", "Cost Effective", "Customizable"],
        image: "/farming nets.jpg",
        isFeatured: false,
        relatedServices: ["industrial-safety-nets", "sports-practice-nets"]
    },
    {
        slug: "industrial-safety-nets",
        title: "Industrial Safety Nets",
        seoTitle: "Industrial Safety Nets & Fall Protection",
        desc: "Heavy-duty nets for construction sites and industrial factories.",
        fullDesc: "Ensuring workplace safety is paramount. Our Industrial Safety Nets are designed to catch falling debris and protect workers at heights.",
        longDescription: "In construction and warehousing, falls from heights are the leading cause of accidents. Our Industrial Safety Nets act as a collective fall arrest system. They are mandatory for high-rise construction to catch falling debris (preventing injury to public) and falling workers. We use heavy-duty, double-layered nets that meet IS and EN safety standards.",
        benefits: [
            "Life Saving: Catches workers falling from heights.",
            "Debris Containment: Prevents tools/bricks hitting people below.",
            "Compliance: Helps meet safety regulations and audits.",
            "High Load: Capable of stopping heavy dynamic loads.",
            "UV Treated: Withstands long exposure to sun at sites."
        ],
        process: [
            { step: "Safety Plan", desc: "Mapping out the net coverage plan." },
            { step: "Anchor Points", desc: "Identifying structural beams for anchoring." },
            { step: "Rigging", desc: "Using steel wire ropes to create a support grid." },
            { step: "Net Installation", desc: "Spreading and clipping the nets to the rigging." },
            { step: "Certification", desc: "Issuing a fit-for-purpose safety certificate." }
        ],
        specifications: [
            { label: "Material", value: "High Tenacity Polypropylene (PPMF)" },
            { label: "Layers", value: "Dual Layer (Safety Net + Debris Liner)" },
            { label: "Rope Dia", value: "4mm to 10mm" },
            { label: "Mesh Size", value: "100mm (Man) / 20mm (Debris)" },
            { label: "Standard", value: "IS 11057 : 1984 Certified" }
        ],
        features: ["High Load Capacity", "ISO Certified", "Construction Safe", "Fall Protection"],
        image: "/Industrial Safety Nets 1.jpg",
        isFeatured: false,
        relatedServices: ["forming-nets", "duct-area-nets", "sports-practice-nets"]
    }
];

export const cities: City[] = [
    {
        slug: "chennai",
        name: "Chennai",
        phone: "+91 72000 92393",
        email: "johnsafetynets7@gmail.com",
        address: "Chennai, Tamil Nadu",
        coordinates: { lat: 13.0827, lng: 80.2707 },
        description: "Chennai's most trusted provider of premium safety nets and invisible grills. We offer high-quality, durable solutions across all zones of Chennai.",
        neighborhoods: ["Anna Nagar", "T. Nagar", "Velachery", "Adyar", "Tambaram", "OMR", "Porur", "Perambur", "Besant Nagar", "Mylapore", "Guindy", "Chromepet"],
        localInsight: "Chennai's high coastal humidity and salty sea breeze accelerate corrosion on ordinary metal fixtures. To counter this, John Enterprises provides marine-grade 316 stainless steel invisible grills and triple-UV-stabilized safety nets, engineered specifically to withstand Chennai's unique weather conditions.",
        serviceArea: "We provide complete installation coverage and same-day site audits throughout North Chennai, South Chennai, Central Chennai, and the OMR IT corridor.",
        officeAddress: "No. 12, Anna Nagar Main Road, Anna Nagar, Chennai, Tamil Nadu - 600040"
    },
    {
        slug: "pondicherry",
        name: "Pondicherry",
        phone: "+91 72000 92393",
        email: "johnsafetynets7@gmail.com",
        address: "Puducherry",
        coordinates: { lat: 11.9416, lng: 79.8083 },
        description: "Premium safety net installations in Pondicherry. Protect your coastal homes with our marine-grade stainless steel invisible grills and UV-stabilized bird nets.",
        neighborhoods: ["White Town", "Lawspet", "Mudaliarpet", "Ariyankuppam", "Reddiarpalayam", "Kadirgamam", "Oulgaret", "Heritage Town"],
        localInsight: "Pondicherry's beachside residences and commercial properties face extreme salt spray and strong sea winds. Our specialized high-tension fasteners and marine-grade protective coatings are custom-designed to prevent rust and degradation in coastal environments.",
        serviceArea: "Our safety teams cover all zones within Puducherry town, surrounding suburbs, and neighboring Auroville.",
        officeAddress: "No. 45, Beach Road, White Town, Puducherry - 605001"
    },
    {
        slug: "trichy",
        name: "Trichy",
        phone: "+91 72000 92393",
        email: "johnsafetynets7@gmail.com",
        address: "Tiruchirappalli, Tamil Nadu",
        coordinates: { lat: 10.7905, lng: 78.7047 },
        description: "Professional safety solutions in Trichy. Specializing in high-tensile balcony safety nets, pigeon protection systems, and sports practice netting.",
        neighborhoods: ["Srirangam", "Thillai Nagar", "KK Nagar", "Woraiyur", "Palakarai", "Ariyamangalam", "Kattur", "Lalgudi"],
        localInsight: "Trichy's hot, dry climate and diverse architectural heritage require versatile safety netting solutions. We customize our heavy-duty anchorings to preserve visual clean lines on older heritage styles and modern multi-story apartments alike.",
        serviceArea: "We serve Tiruchirappalli city limits, Srirangam, Woraiyur, and all surrounding suburban residential communities.",
        officeAddress: "No. 8, Thillai Nagar Main Road, Thillai Nagar, Tiruchirappalli, Tamil Nadu - 620018"
    }
];

export const seoKeywordsMapping: Record<string, string> = {
    "pigeon-nets-service": "invisible-pigeon-net",
    "invisible-grills-balcony": "invisible-grill-balcony-safety-nets",
    "duct-area-safety-nets": "duct-area-nets",
    "sports-practice-nets": "sports-practice-nets",
    "balcony-safety-nets": "invisible-grill-balcony-safety-nets",
    "cloth-hanger-services": "cloth-hanger-services",
};

export function resolveServiceSlug(slug: string): string {
    return seoKeywordsMapping[slug] || slug;
}

export function getServiceBySlug(slug: string) {
    const resolvedSlug = resolveServiceSlug(slug);
    return services.find(s => s.slug === resolvedSlug);
}

export function getCityBySlug(slug: string) {
    return cities.find(c => c.slug === slug);
}

// Advanced SEO: FAQ Rich Snippets Data
export const commonFaqs = [
    {
        question: "How long does the installation process take?",
        answer: "Most of our standard installations are completed within 2 to 4 hours. However, larger commercial projects or complex architectural layouts may take a full day."
    },
    {
        question: "Do you offer a warranty on your safety nets?",
        answer: "Yes, we provide a 3 to 5-year warranty depending on the material used. Our 316 Marine Grade Stainless Steel and UV-stabilized HDPE nets are guaranteed against weather degradation."
    },
    {
        question: "Will the safety nets block my view or ventilation?",
        answer: "Not at all. Our invisible grills and translucent safety nets are designed to provide maximum security while maintaining 100% airflow and near-invisible aesthetics from a distance."
    }
];

export const serviceSpecificFaqs: Record<string, { question: string, answer: string }[]> = {
    "invisible-grill-balcony-safety-nets": [
        {
            question: "How much weight can the invisible grills withstand?",
            answer: "Our invisible grills are built using 316 Marine Grade Stainless Steel and can withstand tensile impact loads of up to 400kg, making them completely safe for children and pets."
        },
        {
            question: "Are invisible grills prone to rusting in coastal areas?",
            answer: "No, we use 316 marine-grade stainless steel which is highly resistant to corrosion and rust, making them perfect for coastal cities like Chennai and Pondicherry."
        }
    ],
    "invisible-pigeon-net": [
        {
            question: "Are pigeon nets harmful to the birds?",
            answer: "No, our nets act purely as a physical barrier. They are a humane solution that prevents birds from roosting or nesting without causing them any harm."
        },
        {
            question: "How durable are the pigeon nets in direct sunlight?",
            answer: "Our pigeon nets are made from UV-stabilized HDPE (High-Density Polyethylene), ensuring they do not become brittle or degrade even after years of direct sun exposure."
        }
    ],
    "sports-practice-nets": [
        {
            question: "What is the cost of cricket practice nets installation?",
            answer: "The cost of sports and cricket practice nets depends on the size of the cage and the quality of the net. Contact us for a free site measurement and quote."
        },
        {
            question: "How long do sports nets last outdoors under sun and rain?",
            answer: "Our sports nets are made of high-tensile knotted nylon or HDPE, UV-stabilized to withstand harsh weather, lasting 5 to 8 years under normal outdoor use."
        },
        {
            question: "Do you install complete cricket nets with poles and turf?",
            answer: "Yes, we handle the complete installation, including erecting sturdy metal support poles, cabling, and hanging the side and roof nets."
        }
    ],
    "duct-area-nets": [
        {
            question: "Why do apartment buildings need duct area safety nets?",
            answer: "Duct areas and shafts are major hazards. Our duct area safety nets prevent accidental falls of pets or people and stop falling garbage or debris."
        },
        {
            question: "Can duct nets prevent pigeon and bird entry permanently?",
            answer: "Yes, sealing open shafts vertically or horizontally with our durable HDPE nets keeps pigeons and other birds from nesting there, improving hygiene."
        },
        {
            question: "How do you install nets in high-rise building ducts?",
            answer: "Our technicians are trained in industrial rope access (spider-man style rigging) to safely install heavy-duty nets in deep ventilation shafts."
        }
    ],
    "cloth-hanger-services": [
        {
            question: "What type of ceiling clothes hangers do you install?",
            answer: "We install premium pulley-operated ceiling clothes drying hangers made of high-quality rust-proof Jindal stainless steel pipes and strong nylon cords."
        },
        {
            question: "How much weight can the ceiling cloth hanger support?",
            answer: "Each individual stainless steel pipe can safely hold between 5kg to 8kg of wet laundry, making it perfect for heavy blankets and daily clothes."
        },
        {
            question: "Is the ceiling clothes drying system easy to operate?",
            answer: "Yes, the smooth individual pulley and cord mechanism allows you to raise and lower each pipe with minimal effort, maximizing balcony floor space."
        }
    ],
    "anti-bird-nets": [
        {
            question: "Which is better for bird control, nylon nets or HDPE nets?",
            answer: "Nylon nets offer high strength, while translucent HDPE monofilament is nearly invisible. We help you choose the best fit based on your location and bird pressure."
        },
        {
            question: "How do anti-bird nets prevent disease transmission?",
            answer: "By physically blocking pigeons and crows from nesting on AC units and balconies, bird nets prevent the accumulation of droppings that carry harmful fungal and bacterial pathogens."
        },
        {
            question: "Do you customize bird nets for small windows or ventilators?",
            answer: "Yes, we custom-fit anti-bird nets to cover any size of window, ventilator, AC ledge, or commercial warehouse opening."
        }
    ],
    "pets-safety-nets": [
        {
            question: "Can cats chew or bite through your pet safety nets?",
            answer: "Our pet safety nets are made from thicker, heavy-duty HDPE monofilament or reinforced nylon designed to resist scratching, clawing, and biting."
        },
        {
            question: "What is the recommended mesh size for cat safety nets?",
            answer: "We use a 30mm or 40mm mesh size, which is small enough to prevent kittens and cats from squeezing through while keeping your view unobstructed."
        },
        {
            question: "How secure is the installation of pet safety nets?",
            answer: "We secure the nets at tight intervals using stainless steel hooks or frames, leaving zero gaps at the bottom or sides for pets to escape."
        }
    ],
    "mosquito-nets": [
        {
            question: "What types of mosquito nets do you offer for windows?",
            answer: "We offer Velcro mosquito nets, magnetic screens, pleated sliding doors, and openable aluminum frame screens customized to your window and door styles."
        },
        {
            question: "Do mosquito nets block airflow and natural light?",
            answer: "No, our high-density fiberglass and stainless steel meshes are extremely fine (18x16 mesh density) to allow maximum cool air and light transmission."
        },
        {
            question: "Are the mosquito screens washable and easy to clean?",
            answer: "Yes, velcro and magnetic nets can be easily detached and washed. Pleated and framed screens can be wiped down with a damp cloth or vacuumed."
        }
    ],
    "invisible-childrens-safety": [
        {
            question: "Can children climb or slide through invisible safety grills?",
            answer: "No, the vertical stainless steel cables are spaced closely (typically 2 to 3 inches apart) to prevent children from squeezing through, and they are too thin to climb."
        },
        {
            question: "How strong are children's balcony safety nets and grills?",
            answer: "Our children's safety grills are made of high-tensile 316-grade stainless steel cables that support up to 400kg of load, protecting against high-impact falls."
        },
        {
            question: "Are these child safety nets suitable for high-rise apartment windows?",
            answer: "Yes, they are highly recommended for apartments on high floors, providing reliable safety without creating a claustrophobic or cage-like feeling."
        }
    ],
    "monkey-safety-nets": [
        {
            question: "Are monkey safety nets strong enough to withstand heavy monkeys?",
            answer: "Yes, our monkey safety nets use heavy-duty 3mm to 4mm reinforced HDPE or stainless steel wire cores capable of bearing dynamic loads of over 600kg."
        },
        {
            question: "Can monkeys tear or damage standard bird safety nets?",
            answer: "Yes, monkeys can tear thin bird nets. That is why we use heavy-duty, bite-proof nets with triple-knotting so that monkeys cannot slide or break the mesh."
        },
        {
            question: "What areas should be secured to prevent monkey intrusion?",
            answer: "We secure balconies, utility areas, windows, and open terrace entryways using reinforced anchor bolts and robust steel borders that monkeys cannot rip off."
        }
    ],
    "staircase-invisible-grills": [
        {
            question: "Why choose invisible grills for staircases over traditional railings?",
            answer: "Staircase invisible grills offer a modern, minimalist aesthetic that provides full-height safety from floor to ceiling without blocking light or making the staircase look small."
        },
        {
            question: "What material is used for staircase safety grills?",
            answer: "We use 2mm high-tensile 316-grade stainless steel cables with nylon coating, which do not rust, chip, or require frequent painting or maintenance."
        },
        {
            question: "Can these grills be installed on wooden or marble stairs?",
            answer: "Yes, we use specialized wood and marble-grade drill bits to mount the top and bottom tracking profiles cleanly, ensuring zero damage to your premium finishes."
        }
    ],
    "forming-nets": [
        {
            question: "What are forming nets used for in construction and agriculture?",
            answer: "In construction, they screen scaffolding to prevent dust and debris from falling. In agriculture, they act as shade nets or supports for climbing crops."
        },
        {
            question: "What shade factors are available for agricultural green nets?",
            answer: "We offer forming/shade nets with 50%, 75%, and 90% shading factor, allowing you to regulate sunlight and heat based on your crop or site requirements."
        },
        {
            question: "How do you install forming nets on construction scaffolding?",
            answer: "We secure the nets using heavy-duty cable ties and steel bindings, ensuring they remain taut and do not flap or tear under strong winds."
        }
    ],
    "industrial-safety-nets": [
        {
            question: "What certification do your industrial safety nets hold?",
            answer: "Our industrial and construction safety nets are IS 11057 : 1984 certified and comply with standard load-bearing and mesh strength requirements."
        },
        {
            question: "What is the difference between a safety net and a debris liner?",
            answer: "Safety nets have a wider mesh (e.g. 100mm) to catch falling persons, while the dual-layer debris liner has a fine mesh (e.g. 20mm) to catch small tools and bricks."
        },
        {
            question: "How often should industrial safety nets be inspected?",
            answer: "We recommend regular weekly visual inspections and testing after any high-impact catch or extreme weather conditions to ensure the nets retain their load capacity."
        }
    ]
};

export const testimonials: Testimonial[] = [
    {
        name: "Rajesh Kumar",
        area: "Anna Nagar",
        city: "Chennai",
        rating: 5,
        service: "invisible-pigeon-net",
        text: "Excellent pigeon net installation in our Anna Nagar apartment. Highly professional service and very reasonable pricing. The net is completely invisible from a distance and keeps the balcony very clean.",
        date: "2026-05-12"
    },
    {
        name: "Priya Sharma",
        area: "White Town",
        city: "Pondicherry",
        rating: 5,
        service: "invisible-grill-balcony-safety-nets",
        text: "Best invisible grills installation. The team was quick, professional, and clean. It feels very secure for my children and looks super premium.",
        date: "2026-04-20"
    },
    {
        name: "K. Vignesh",
        area: "Thillai Nagar",
        city: "Trichy",
        rating: 5,
        service: "invisible-grill-balcony-safety-nets",
        text: "Superb service! Installed balcony safety nets and invisible grills for our flat in Trichy. Great quality material and neat installation.",
        date: "2026-05-05"
    },
    {
        name: "Amit Patel",
        area: "Velachery",
        city: "Chennai",
        rating: 5,
        service: "mosquito-nets",
        text: "Installed pleated sliding mosquito screens for our French windows. The frame matches our UPVC doors perfectly. Good airflow and absolutely no mosquitoes.",
        date: "2026-05-18"
    },
    {
        name: "S. Meenakshi",
        area: "Srirangam",
        city: "Trichy",
        rating: 5,
        service: "invisible-pigeon-net",
        text: "Very happy with the pigeon safety net installation. We had a huge pigeon nesting issue in our utility area. The John Safety Nets team finished the job in 2 hours.",
        date: "2026-05-24"
    },
    {
        name: "Dr. Ananya Sen",
        area: "OMR",
        city: "Chennai",
        rating: 5,
        service: "pets-safety-nets",
        text: "Excellent pet safety net for my cats. They used a thicker mesh which is claw-proof. Now I can leave my balcony open without any worry.",
        date: "2026-03-30"
    },
    {
        name: "R. Krishnan",
        area: "Lawspet",
        city: "Pondicherry",
        rating: 5,
        service: "cloth-hanger-services",
        text: "Highly recommend their ceiling clothes drying hanger service. It has saved a lot of floor space in our balcony. The pulley system is extremely smooth.",
        date: "2026-04-15"
    },
    {
        name: "Suresh Kumar",
        area: "Tambaram",
        city: "Chennai",
        rating: 5,
        service: "sports-practice-nets",
        text: "Excellent cricket net setup in our backyard in Chennai. High-quality nets and sturdy poles. Kids are enjoying their practice.",
        date: "2026-05-02"
    },
    {
        name: "M. Abdul",
        area: "KK Nagar",
        city: "Trichy",
        rating: 5,
        service: "monkey-safety-nets",
        text: "We were troubled by monkeys entering our kitchen balcony. John Safety Nets installed heavy-duty monkey nets. Highly durable and strong.",
        date: "2026-04-28"
    },
    {
        name: "Sandhya R.",
        area: "Mylapore",
        city: "Chennai",
        rating: 5,
        service: "staircase-invisible-grills",
        text: "Staircase invisible grills look absolutely stunning and give us peace of mind with toddler in the house. Very professional team.",
        date: "2026-05-15"
    }
];

export function getServiceFaqs(slug: string) {
    const resolvedSlug = resolveServiceSlug(slug);
    const specific = serviceSpecificFaqs[resolvedSlug] || [];
    return [...specific, ...commonFaqs];
}

export function getTestimonials(serviceSlug?: string, citySlug?: string) {
    const resolvedSlug = serviceSlug ? resolveServiceSlug(serviceSlug) : undefined;
    
    // Filter testimonials
    let filtered = testimonials;
    if (resolvedSlug && citySlug) {
        // First try to find exact matches for both service and city
        filtered = testimonials.filter(t => resolveServiceSlug(t.service) === resolvedSlug && t.city.toLowerCase() === citySlug.toLowerCase());
        
        // If not enough, fallback to same city, then same service
        if (filtered.length < 2) {
            const sameCity = testimonials.filter(t => t.city.toLowerCase() === citySlug.toLowerCase() && resolveServiceSlug(t.service) !== resolvedSlug);
            const sameService = testimonials.filter(t => resolveServiceSlug(t.service) === resolvedSlug && t.city.toLowerCase() !== citySlug.toLowerCase());
            filtered = [...filtered, ...sameCity, ...sameService];
        }
    } else if (resolvedSlug) {
        filtered = testimonials.filter(t => resolveServiceSlug(t.service) === resolvedSlug);
    } else if (citySlug) {
        filtered = testimonials.filter(t => t.city.toLowerCase() === citySlug.toLowerCase());
    }
    
    // De-duplicate in case of overlap
    const seen = new Set();
    return filtered.filter(t => {
        const key = `${t.name}-${t.text}`;
        if (seen.has(key)) return false;
        seen.add(key);
        return true;
    }).slice(0, 4);
}
