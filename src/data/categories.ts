export interface Category {
  id: string;
  name: string;
  slug: string;
  description: string;
  icon: string;
  image: string;
  sortOrder: number;
}

export const categories: Category[] = [
  {
    "id": "hard-wax-beans",
    "name": "Hard Wax Beans",
    "slug": "hard-wax-beans",
    "description": "Premium hard wax beans for professional and home use. No strips required.",
    "icon": "droplets",
    "image": "https://trae-api-sg.mchost.guru/api/ide/v1/text_to_image?prompt=hard%20wax%20beans%20colorful%20professional%20beauty%20product&image_size=square",
    "sortOrder": 1
  },
  {
    "id": "soft-wax-strips",
    "name": "Soft Wax Strips",
    "slug": "soft-wax-strips",
    "description": "Ready-to-use wax strips for quick and easy hair removal.",
    "icon": "layers",
    "image": "https://trae-api-sg.mchost.guru/api/ide/v1/text_to_image?prompt=soft%20wax%20strips%20beauty%20product%20packaging&image_size=square",
    "sortOrder": 2
  },
  {
    "id": "waxing-accessories",
    "name": "Waxing Accessories",
    "slug": "waxing-accessories",
    "description": "Essential tools and accessories for professional waxing.",
    "icon": "wrench",
    "image": "https://trae-api-sg.mchost.guru/api/ide/v1/text_to_image?prompt=waxing%20accessories%20tools%20professional%20beauty%20equipment&image_size=square",
    "sortOrder": 3
  },
  {
    "id": "value-bundles",
    "name": "Value Bundles",
    "slug": "value-bundles",
    "description": "Complete waxing kits and bundles for the best value.",
    "icon": "package",
    "image": "https://trae-api-sg.mchost.guru/api/ide/v1/text_to_image?prompt=waxing%20bundle%20kit%20complete%20set%20beauty%20products&image_size=square",
    "sortOrder": 4
  }
];

export default categories;