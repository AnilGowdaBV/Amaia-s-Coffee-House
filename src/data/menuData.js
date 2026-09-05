export const MENU_CATEGORIES = [
  {
    id: "hot-coffee",
    title: "Hot Coffee",
    icon: "Coffee",
    image: "/categories/hot-coffee.jpg",
    badge: "Hot Brews",
    tagline: "Authentic brews & handcrafted roasts",
    items: [
      { name: "Filter Coffee", price: 20, isVeg: true },
      { name: "Black Coffee", price: 20, isVeg: true },
      { name: "Jaggery Coffee", price: 25, isVeg: true },
      { name: "Chocolate Hot Coffee", price: 30, isVeg: true },
      { name: "Hazelnut Hot Coffee", price: 30, isVeg: true }
    ]
  },
  {
    id: "tea",
    title: "Tea & Chai",
    icon: "CupSoda",
    image: "/categories/tea.jpg",
    badge: "HANDCRAFTED CHAI",
    priceFrom: "₹60",
    glowColor: "rgba(16, 185, 129, 0.35)",
    borderHover: "hover:border-emerald-400/70",
    badgeColor: "text-emerald-300 bg-emerald-400/10 border-emerald-400/30",
    tagline: "Slow-brewed spiced chais & fragrant soothing herbal leaves",
    items: [
      { name: "Masala Chai", price: 60, desc: "Brewed with fresh ginger, cardamom & aromatic spices", isVeg: true },
      { name: "Ginger Elaichi Tea", price: 60, desc: "Comforting classic crushed ginger & cardamom", isVeg: true },
      { name: "Lemon Honey Green Tea", price: 80, desc: "Antioxidant green tea with raw honey & fresh lemon", isVeg: true },
      { name: "Earl Grey Artisan Tea", price: 100, desc: "Black tea infused with natural bergamot citrus", isVeg: true },
      { name: "Kashmiri Kahwa", price: 120, desc: "Green tea with saffron, cinnamon, and slivered almonds", isVeg: true }
    ]
  },
  {
    id: "cold-coffee",
    title: "Cold Coffee",
    icon: "Flame",
    image: "/categories/cold-coffee.jpg",
    badge: "BARISTA CHILLED",
    priceFrom: "₹130",
    glowColor: "rgba(6, 182, 212, 0.35)",
    borderHover: "hover:border-cyan-400/70",
    badgeColor: "text-cyan-300 bg-cyan-400/10 border-cyan-400/30",
    tagline: "Thick ice-blended frappes, cold brews & decadent shakes",
    items: [
      { name: "Classic Iced Coffee", price: 150, desc: "Espresso blended with chilled milk and cane sugar", isVeg: true },
      { name: "Hazelnut Cold Coffee", price: 180, desc: "Roasted hazelnut syrup infused cold brew blend", isVeg: true },
      { name: "Caramel Frappe with Cream", price: 190, desc: "Thick blended frappe topped with caramel drizzle", isVeg: true },
      { name: "Iced Americano", price: 130, desc: "Espresso shots served over iced mineral water", isVeg: true },
      { name: "Vietnamese Cold Brew", price: 170, desc: "Slow-dripped dark roast with sweet condensed milk", isVeg: true }
    ]
  },
  {
    id: "veg-starters",
    title: "Veg Starters",
    icon: "Utensils",
    image: "/categories/veg-starters.jpg",
    badge: "CRISPY & FRESH",
    priceFrom: "₹110",
    glowColor: "rgba(132, 204, 22, 0.35)",
    borderHover: "hover:border-lime-400/70",
    badgeColor: "text-lime-300 bg-lime-400/10 border-lime-400/30",
    tagline: "Golden crunch, molten cheese poppers & seasoned fries",
    items: [
      { name: "Classic French Fries", price: 110, desc: "Golden crispy salted potatoes with dip", isVeg: true },
      { name: "Peri Peri Fries", price: 130, desc: "Tossed in fiery African bird's eye chili spice", isVeg: true },
      { name: "Cheesy Garlic Bread", price: 140, desc: "Toasted French baguette with herb butter & mozzarella", isVeg: true },
      { name: "Jalapeno Cheese Poppers", price: 160, desc: "Molten cheddar and spicy jalapenos in crisp crumb", isVeg: true },
      { name: "Paneer Popcorn Crunch", price: 170, desc: "Bite-sized cottage cheese in spiced batter", isVeg: true }
    ]
  },
  {
    id: "sandwiches",
    title: "Sandwiches",
    icon: "Croissant",
    image: "/categories/sandwiches.jpg",
    badge: "TOASTED ARTISAN",
    priceFrom: "₹130",
    glowColor: "rgba(245, 158, 11, 0.35)",
    borderHover: "hover:border-amber-400/70",
    badgeColor: "text-amber-300 bg-amber-400/10 border-amber-400/30",
    tagline: "Layered gourmet paninis, golden sourdough & triple-deckers",
    items: [
      { name: "Classic Veg Grilled Cheese", price: 130, desc: "Cheddar, mozzarella, and house herbs grilled golden", isVeg: true },
      { name: "Spicy Paneer Tikka Sandwich", price: 160, desc: "Marinated cottage cheese with mint chutney & peppers", isVeg: true },
      { name: "Amaia's Club Special (Veg)", price: 180, desc: "Triple decker with tomatoes, cucumber, cheese & crisps", isVeg: true },
      { name: "Chicken Tikka Sandwich", price: 190, desc: "Tender tandoori chicken with smoked garlic mayo", isVeg: false },
      { name: "Cheesy Chicken Club", price: 210, desc: "Grilled chicken, fried egg, lettuce, and melted cheese", isVeg: false }
    ]
  },
  {
    id: "chicken-starters",
    title: "Chicken Starters",
    icon: "Flame",
    image: "/categories/chicken-starters.jpg",
    badge: "FIRE GRILLED",
    priceFrom: "₹160",
    glowColor: "rgba(244, 63, 94, 0.35)",
    borderHover: "hover:border-rose-400/70",
    badgeColor: "text-rose-300 bg-rose-400/10 border-rose-400/30",
    tagline: "Juicy chicken bites, crispy peri peri strips & BBQ wings",
    items: [
      { name: "Crispy Chicken Popcorn", price: 170, desc: "Tender boneless chicken in spiced crunchy batter", isVeg: false },
      { name: "BBQ Chicken Wings (6 pcs)", price: 210, desc: "Glazed in smoky sweet Kansas-style barbecue sauce", isVeg: false },
      { name: "Peri Peri Chicken Strips", price: 190, desc: "Hand-breaded breast strips tossed in peri peri spice", isVeg: false },
      { name: "Chicken Nuggets with Garlic Dip", price: 160, desc: "Classic golden chicken bites with herbed mayo", isVeg: false }
    ]
  },
  {
    id: "maggie",
    title: "Maggi Noodles",
    icon: "Sparkles",
    image: "/categories/maggie.jpg",
    badge: "COMFORT SPECIAL",
    priceFrom: "₹80",
    glowColor: "rgba(249, 115, 22, 0.35)",
    borderHover: "hover:border-orange-400/70",
    badgeColor: "text-orange-300 bg-orange-400/10 border-orange-400/30",
    tagline: "Cafe comfort noodles with signature melted cheese & herbs",
    items: [
      { name: "Classic Masala Maggi", price: 80, desc: "Two-minute comfort noodles with extra secret spices", isVeg: true },
      { name: "Veggie Loaded Maggi", price: 100, desc: "Onions, bell peppers, sweet corn, and green peas", isVeg: true },
      { name: "Double Cheese Maggi", price: 120, desc: "Topped with melted mozzarella and cheddar cheese", isVeg: true },
      { name: "Egg & Butter Maggi", price: 120, desc: "Scrambled egg folded with aromatic masala noodles", isVeg: false },
      { name: "Spicy Chicken Maggi", price: 140, desc: "Shredded chicken and chili flakes in rich broth", isVeg: false }
    ]
  },
  {
    id: "pasta",
    title: "Gourmet Pasta",
    icon: "Utensils",
    image: "/categories/pasta.jpg",
    badge: "ITALIAN ARTISAN",
    priceFrom: "₹190",
    glowColor: "rgba(168, 85, 247, 0.35)",
    borderHover: "hover:border-purple-400/70",
    badgeColor: "text-purple-300 bg-purple-400/10 border-purple-400/30",
    tagline: "Slow-simmered rich Alfredo, Arrabbiata & creamy Rosa penne",
    items: [
      { name: "Creamy Alfredo Pasta (White Sauce)", price: 200, desc: "Penne in rich parmesan cream sauce with garlic & herbs", isVeg: true },
      { name: "Spicy Arrabbiata (Red Sauce)", price: 190, desc: "Tangy crushed San Marzano tomato sauce with basil & chili", isVeg: true },
      { name: "Pink Mama Rosa Pasta", price: 210, desc: "Velvety blend of rich cream and zesty tomato sauce", isVeg: true },
      { name: "Add Grilled Chicken", price: 50, desc: "Herb-marinated grilled chicken breast cubes", isVeg: false }
    ]
  },
  {
    id: "ice-cream-scoops",
    title: "Ice Cream Scoops",
    icon: "Moon",
    image: "/categories/ice-cream-scoops.jpg",
    badge: "ARTISANAL GELATO",
    priceFrom: "₹80",
    glowColor: "rgba(236, 72, 153, 0.35)",
    borderHover: "hover:border-pink-400/70",
    badgeColor: "text-pink-300 bg-pink-400/10 border-pink-400/30",
    tagline: "Decadent Belgian dark chocolate, vanilla bean & sizzling brownie",
    items: [
      { name: "Belgian Dark Chocolate", price: 90, desc: "Rich 70% cocoa deep chocolate truffle scoop", isVeg: true },
      { name: "Bourbon Vanilla Bean", price: 80, desc: "Infused with real Madagascar vanilla bean specks", isVeg: true },
      { name: "Crunchy Butterscotch", price: 85, desc: "Creamy caramel base with praline cashew crunch", isVeg: true },
      { name: "Alphonso Mango Delight", price: 90, desc: "Seasonal Ratnagiri mango puree churned ice cream", isVeg: true },
      { name: "Sizzling Brownie with Vanilla Scoop", price: 160, desc: "Warm fudge brownie on hot skillet with hot chocolate fudge", isVeg: true }
    ]
  }
];
