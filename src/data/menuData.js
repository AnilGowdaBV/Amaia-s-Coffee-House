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
      { name: "Masala Tea", price: 20, isVeg: true },
      { name: "Jaggery Tea", price: 18, isVeg: true }
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
      { name: "Classic Cold Coffee", price: 89, isVeg: true },
      { name: "Hazelnut Cold Coffee", price: 109, isVeg: true },
      { name: "Chocolate Cold Coffee", price: 119, isVeg: true }
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
      { name: "Veg Nuggets", price: 79, isVeg: true },
      { name: "Potato Cheese Bites", price: 79, isVeg: true },
      { name: "American Fries", price: 89, isVeg: true },
      { name: "Chilli Garlic Potato Bites", price: 89, isVeg: true },
      { name: "Corn Cheese Nuggets", price: 99, isVeg: true },
      { name: "Peri Peri Fries", price: 99, isVeg: true }
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
      { name: "Veg Sandwich", price: 79, isVeg: true },
      { name: "Veg Cheese Sandwich", price: 89, isVeg: true },
      { name: "Corn Cheese Sandwich", price: 89, isVeg: true },
      { name: "Coleslaw Sandwich", price: 99, isVeg: true },
      { name: "Paneer Cheese Sandwich", price: 119, isVeg: true }
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
      { name: "Chicken Popcorn", price: 89, isVeg: false },
      { name: "Chicken Nuggets", price: 129, isVeg: false },
      { name: "Chicken Strips", price: 149, isVeg: false }
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
      { name: "Plain Maggi", price: 49, isVeg: true },
      { name: "Veg Maggi", price: 59, isVeg: true },
      { name: "Hot & Spicy Maggi", price: 69, isVeg: true },
      { name: "Cheese Maggi", price: 79, isVeg: true }
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
      { name: "Red Sauce Pasta", price: 149, isVeg: true },
      { name: "Alfredo Pasta", price: 159, isVeg: true }
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
      { name: "Chocolate", price: 40, isVeg: true },
      { name: "Irish Coffee", price: 45, isVeg: true },
      { name: "Belgian Chocolate", price: 50, isVeg: true }
    ]
  }
];
