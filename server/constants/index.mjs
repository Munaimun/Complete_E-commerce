const cat = {
  tvAndAudio: "tvAndAudio",
  tvBox: "tvBox",
  powerTools: "powerTools",
  headphones: "headphones",
  cellPhones: "cellPhones",
  smartWatches: "smartWatches",
  gameAndVideo: "gameAndVideo",
  robotClean: "robotClean",
  sportWatches: "sportWatches",
  tablets: "tablets",
  computersAndLaptop: "computersAndLaptop",
  camerasAndPhotos: "camerasAndPhotos",
};

export const categories = [
  {
    _id: 1001,
    name: "TV & Audio",
    image: "https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis repellendus dolore.",
    _base: "tvAndAudio",
  },
  {
    _id: 1002,
    name: "TV Box",
    image: "https://m.media-amazon.com/images/I/71EH7fDFd7L.jpg",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis repellendus dolore.",
    _base: "tvBox",
  },
  {
    _id: 1003,
    name: "Power Tools",
    image: "https://m.media-amazon.com/images/G/01/home-improvement/ImpactDriverOverride._CB438085461_SR300_.jpg",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis repellendus dolore.",
    _base: "powerTools",
  },
  {
    _id: 1004,
    name: "Headphones",
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis repellendus dolore.",
    _base: "headphones",
  },
  {
    _id: 1005,
    name: "Cell Phones",
    image: "https://images.unsplash.com/photo-1585060544812-6b45742d762f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis repellendus dolore.",
    _base: "cellPhones",
  },
  {
    _id: 1006,
    name: "Smart Watches",
    image: "https://images.unsplash.com/photo-1558126319-c9feecbf57ee?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis repellendus dolore.",
    _base: "smartWatches",
  },
  {
    _id: 1007,
    name: "Game & Video",
    image: "https://images.unsplash.com/photo-1598550476439-6847785fcea6?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis repellendus dolore.",
    _base: "gameAndVideo",
  },
  {
    _id: 1008,
    name: "Robot Clean",
    image: "https://m.media-amazon.com/images/I/718yLzO7J+L._AC_UF894,1000_QL80_.jpg",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis repellendus dolore.",
    _base: "robotClean",
  },
  {
    _id: 1009,
    name: "Sport Watches",
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis repellendus dolore.",
    _base: "sportWatches",
  },
  {
    _id: 1010,
    name: "Tablets",
    image: "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis repellendus dolore.",
    _base: "tablets",
  },
  {
    _id: 1011,
    name: "Computers & Laptop",
    image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis repellendus dolore.",
    _base: "computersAndLaptop",
  },
  {
    _id: 1012,
    name: "Cameras & Photos",
    image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis repellendus dolore.",
    _base: "camerasAndPhotos",
  },
];



export const highlightsProducts = [
  {
    _id: 3001,
    name: "New Deals at Best Prices",
    title: "From $40.00",
    buttonTitle: "Browse Deals",
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    _base: "/product",
    color: "#ffffff",
  },
  {
    _id: 3002,
    name: "Colorful Redmi Note 6 Pro",
    title: "From $40.00",
    buttonTitle: "Shop Cellphone",
    image: "https://images.unsplash.com/photo-1585060544812-6b45742d762f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    _base: "/category/cellPhones",
    color: "#ffffff",
  },
  {
    _id: 3003,
    name: "1000 mAh Power Bank",
    title: "From $40.00",
    buttonTitle: "Shop Now",
    image: "https://image.made-in-china.com/202f0j00oQafnqcYvtzm/Power-Bank-Battery-SKD-Support.webp",
    _base: "/product",
    color: "#ffffff",
  },
];

export const blogsData = [
  {
    _id: 4001,
    image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    title: "iPhone 15 rear camera design will be available",
    _base: "Technology",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi vitae minus atque ratione. Sequi eos aspernatur delectus officia nemo ipsum facere debitis fugiat eum, quod quia, eligendi nihil sapiente perferendis modi quisquam reiciendis minima esse dolorem, molestias aut? Eum, repudiandae sit ipsum officiis unde reprehenderit inventore odio doloremque recusandae nobis voluptatem ipsa atque, veritatis adipisci reiciendis.",
  },
  {
    _id: 4002,
    image: "https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    title: "Setup your surround sound speaker",
    _base: "Smart thing",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi vitae minus atque ratione. Sequi eos aspernatur delectus officia nemo ipsum facere debitis fugiat eum, quod quia, eligendi nihil sapiente perferendis modi quisquam reiciendis minima esse dolorem, molestias aut? Eum, repudiandae sit ipsum officiis unde reprehenderit inventore odio doloremque recusandae nobis voluptatem ipsa atque, veritatis adipisci reiciendis.",
  },
  {
    _id: 4003,
    image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    title: "Hook up a receiver for your home theater",
    _base: "Life style",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi vitae minus atque ratione. Sequi eos aspernatur delectus officia nemo ipsum facere debitis fugiat eum, quod quia, eligendi nihil sapiente perferendis modi quisquam reiciendis minima esse dolorem, molestias aut? Eum, repudiandae sit ipsum officiis unde reprehenderit inventore odio doloremque recusandae nobis voluptatem ipsa atque, veritatis adipisci reiciendis.",
  },
];

export const products = [
  {
    _id: 2001,
    name: "Divoom Tivoo Portable Bluetooth Speaker Smart Clock Alarm Pixel Art DIY By App LED Light Sign In Decoration Unique Gift",
    images: [
      "https://www.faltafalta.com/cdn/shop/products/8b9cc7c9808a81fc8db0eaf67a4d79d7_800x_52fa7b11-9021-4c68-a67a-6c1b07df9dfe.jpg?v=1622472472",
      "https://woo.cleverpay.store/wp-content/uploads/2022/02/product_gear_22_2.jpeg",
      "https://sc02.alicdn.com/kf/H44910726c78e4f4bab65fe6bab4ea2f2W/230372992/H44910726c78e4f4bab65fe6bab4ea2f2W.jpg",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSea-ExZiGNf5V6IgrzRG3PAxNJwMyb-mXqeQ&s",
      "https://images-na.ssl-images-amazon.com/images/I/41I+5ZXTWrL._UL500_.jpg",
    ],
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis repellendus dolore, facilis iste obcaecati ab nesciunt ducimus quidem molestias aut? Aut vitae error delectus itaque facilis obcaecati nemo dolore cumque. Blanditiis minus corrupti dignissimos, voluptas iusto, eligendi maiores doloremque aliquid mollitia in hic dolores pariatur doloribus dolorum totam. Facilis, dignissimos.",
    regularPrice: 600,
    discountedPrice: 580,
    quantity: 1,
    rating: 4.5,
    reviews: 50,
    category: "TV & Audio",
    colors: ["red", "blue", "green", "yellow", "black", "white"],
    brand: "Samsung",
    isStock: true,
    overView: "Blutooth Speaker",
    isNew: true,
    _base: cat?.tvAndAudio,
  },
  {
    _id: 2002,
    name: "Xiaomi Mi Watch Lite GPS Bluetooth 5.1 Smart Watch Sports Fitness Heart Rate Monitor 1.4 Inch TFTLCD Screen 5 ATM Waterproof Mi Band",
    images: [
      "https://www.shopz.com.bd/wp-content/uploads/2021/01/Xiaomi-Mi-Watch-Lite.jpg",
      "https://www.shopz.com.bd/wp-content/uploads/2021/01/Xiaomi-Mi-Watch-Lite-3.jpg",
      "https://i.ibb.co/wdV3b9q/vaccum.webp",
      "https://i.ibb.co/tcdSfrr/blueGun.jpg",
      "https://i.ibb.co/pw0fGmx/gaming-Controller.webp",
    ],
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis repellendus dolore, facilis iste obcaecati ab nesciunt ducimus quidem molestias aut? Aut vitae error delectus itaque facilis obcaecati nemo dolore cumque. Blanditiis minus corrupti dignissimos, voluptas iusto, eligendi maiores doloremque aliquid mollitia in hic dolores pariatur doloribus dolorum totam. Facilis, dignissimos.",
    regularPrice: 250,
    discountedPrice: 180,
    quantity: 1,
    rating: 4.8,
    reviews: 80,
    category: "Smart Watches",
    colors: ["red", "blue", "green", "yellow", "black", "white"],
    brand: "Samsung",
    isStock: true,
    overView: "Smart health watch",
    isNew: false,
    _base: cat?.smartWatches,
  },
  {
    _id: 2003,
    name: "Fitness M3 Color Screen Smart Sport Bracelet Activity Running Tracker Heart Rate For Children Men Women Watch For IOS Android",
    images: [
      "https://5.imimg.com/data5/HK/AU/MY-38875505/rce-m3-smart-band-500x500.jpg",
      "https://i.ibb.co/m6ZN7LX/soundBox.webp",
      "https://i.ibb.co/wdV3b9q/vaccum.webp",
      "https://i.ibb.co/tcdSfrr/blueGun.jpg",
      "https://i.ibb.co/pw0fGmx/gaming-Controller.webp",
    ],
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis repellendus dolore, facilis iste obcaecati ab nesciunt ducimus quidem molestias aut? Aut vitae error delectus itaque facilis obcaecati nemo dolore cumque. Blanditiis minus corrupti dignissimos, voluptas iusto, eligendi maiores doloremque aliquid mollitia in hic dolores pariatur doloribus dolorum totam. Facilis, dignissimos.",
    regularPrice: 650,
    discountedPrice: 570,
    quantity: 1,
    rating: 4.2,
    reviews: 30,
    category: "Sport Watches",
    colors: ["red", "blue", "green", "yellow", "black", "white"],
    brand: "MI Exclusive",
    isStock: true,
    overView: "Smart health watch",
    isNew: true,
    _base: cat?.sportWatches,
  },
  {
    _id: 2004,
    name: "SJ8 Air 1290P 4K 60fps Action Camera WIFI Remote Control Waterproof Sports DV FPV Camera",
    images: [
      "https://www.shopz.com.bd/wp-content/uploads/2022/06/SJCAM-SJ8-Air-HD-Action-Camera-1.jpg",
      "https://i.ibb.co/m6ZN7LX/soundBox.webp",
      "https://i.ibb.co/wdV3b9q/vaccum.webp",
      "https://i.ibb.co/tcdSfrr/blueGun.jpg",
      "https://i.ibb.co/pw0fGmx/gaming-Controller.webp",
    ],
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis repellendus dolore, facilis iste obcaecati ab nesciunt ducimus quidem molestias aut? Aut vitae error delectus itaque facilis obcaecati nemo dolore cumque. Blanditiis minus corrupti dignissimos, voluptas iusto, eligendi maiores doloremque aliquid mollitia in hic dolores pariatur doloribus dolorum totam. Facilis, dignissimos.",
    regularPrice: 400,
    discountedPrice: 350,
    quantity: 1,
    rating: 4.2,
    reviews: 120,
    category: "Camera & Photos",
    colors: ["red", "blue", "green", "yellow", "black", "white"],
    brand: "Lorem ipsum dolor sit",
    isStock: false,
    overView: "Cameras & Photos",
    isNew: false,
    _base: cat?.camerasAndPhotos,
  },
  {
    _id: 2005,
    name: "Redmi Xiaoai Speaker Play 2.4GHz 1.75 Inch Voice Remote Control Music Player Bluetooth 4.2 Mi Speaker For Android Iphone",
    images: [
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSJzsmFHMpEf5xeC4Qu8OvnvbwQHxLMYUbvA&s",
      "https://i.ibb.co/m6ZN7LX/soundBox.webp",
      "https://i.ibb.co/wdV3b9q/vaccum.webp",
      "https://i.ibb.co/tcdSfrr/blueGun.jpg",
      "https://i.ibb.co/pw0fGmx/gaming-Controller.webp",
    ],
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis repellendus dolore, facilis iste obcaecati ab nesciunt ducimus quidem molestias aut? Aut vitae error delectus itaque facilis obcaecati nemo dolore cumque. Blanditiis minus corrupti dignissimos, voluptas iusto, eligendi maiores doloremque aliquid mollitia in hic dolores pariatur doloribus dolorum totam. Facilis, dignissimos.",
    regularPrice: 90,
    discountedPrice: 80,
    quantity: 1,
    rating: 4.2,
    reviews: 20,
    category: "TV & Audio",
    colors: ["red", "blue", "green", "yellow", "black", "white"],
    brand: "Lorem ipsum dolor sit",
    isStock: true,
    overView: "Blutooth Speaker",
    isNew: true,
    _base: cat?.tvAndAudio,
  },
  {
    _id: 2006,
    name: "Xiaomi Mi Watch Lite GPS Bluetooth 5.1 Smart Watch Sports Fitness Heart Rate Monitor 1.4 Inch TFTLCD Screen 5 ATM Waterproof Mi Band",
    images: [
      "https://brotherselectronicsbd.com/image/cache/catalog/demo/Accessories/Xiaomi/Mi%20Watch%20Lite/Watch%20Lite%20(6)-800x800.jpg",
      "https://i.ibb.co/m6ZN7LX/soundBox.webp",
      "https://i.ibb.co/wdV3b9q/vaccum.webp",
      "https://i.ibb.co/tcdSfrr/blueGun.jpg",
      "https://i.ibb.co/pw0fGmx/gaming-Controller.webp",
    ],
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis repellendus dolore, facilis iste obcaecati ab nesciunt ducimus quidem molestias aut? Aut vitae error delectus itaque facilis obcaecati nemo dolore cumque. Blanditiis minus corrupti dignissimos, voluptas iusto, eligendi maiores doloremque aliquid mollitia in hic dolores pariatur doloribus dolorum totam. Facilis, dignissimos.",
    regularPrice: 300,
    discountedPrice: 280,
    quantity: 1,
    rating: 4.8,
    reviews: 110,
    category: "Smart Watches",
    colors: ["red", "blue", "green", "yellow", "black", "white"],
    brand: "Lorem ipsum dolor sit",
    isStock: true,
    overView: "Smart health watch",
    isNew: false,
    _base: cat.smartWatches,
  },
  {
    _id: 2007,
    name: "Kinganda BT513 Foldable Bluetooth Headphones With Mic",
    images: [
      "https://media.s-bol.com/xOYKWwj9qqq/1136x1200.jpg",
      "https://i.ibb.co/m6ZN7LX/soundBox.webp",
      "https://i.ibb.co/wdV3b9q/vaccum.webp",
      "https://i.ibb.co/tcdSfrr/blueGun.jpg",
      "https://i.ibb.co/pw0fGmx/gaming-Controller.webp",
    ],
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis repellendus dolore, facilis iste obcaecati ab nesciunt ducimus quidem molestias aut? Aut vitae error delectus itaque facilis obcaecati nemo dolore cumque. Blanditiis minus corrupti dignissimos, voluptas iusto, eligendi maiores doloremque aliquid mollitia in hic dolores pariatur doloribus dolorum totam. Facilis, dignissimos.",
    regularPrice: 600,
    discountedPrice: 550,
    quantity: 1,
    rating: 4,
    reviews: 60,
    category: "Headphones & Speakers",
    colors: ["red", "blue", "green", "yellow", "black", "white"],
    brand: "Lorem ipsum dolor sit",
    isStock: true,
    overView: "Microphones",
    isNew: true,
    _base: cat.headphones,
  },
  {
    _id: 2008,
    name: "New Product Form Lapbook Light Handlift Business Office Game Ben EDP 13.5 In – Black China",
    images: [
      "https://woo.cleverpay.store/wp-content/uploads/2022/02/product_gear_25_1-300x300.jpg",
      "https://i.ibb.co/m6ZN7LX/soundBox.webp",
      "https://i.ibb.co/wdV3b9q/vaccum.webp",
      "https://i.ibb.co/tcdSfrr/blueGun.jpg",
      "https://i.ibb.co/pw0fGmx/gaming-Controller.webp",
    ],
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis repellendus dolore, facilis iste obcaecati ab nesciunt ducimus quidem molestias aut? Aut vitae error delectus itaque facilis obcaecati nemo dolore cumque. Blanditiis minus corrupti dignissimos, voluptas iusto, eligendi maiores doloremque aliquid mollitia in hic dolores pariatur doloribus dolorum totam. Facilis, dignissimos.",
    regularPrice: 1100,
    discountedPrice: 1080,
    quantity: 1,
    rating: 4.7,
    reviews: 190,
    category: "Computers & Laptops",
    colors: ["red", "blue", "green", "yellow", "black", "white"],
    brand: "Lorem ipsum dolor sit",
    isStock: true,
    overView: "Computer Components",
    isNew: false,
    _base: cat?.computersAndLaptop,
  },
  {
    _id: 2009,
    name: "VIOMI V2 Pro LDS Sensor 2 In 1 Sweeping Mopping Robot Wet And Dry Vacuum Cleaner 2100Pa Strong Suction Self-Charging",
    images: [
      "https://www.batna24.com/img2/1000/330611_1.webp",
      "https://i.ibb.co/m6ZN7LX/soundBox.webp",
      "https://i.ibb.co/wdV3b9q/vaccum.webp",
      "https://i.ibb.co/tcdSfrr/blueGun.jpg",
      "https://i.ibb.co/pw0fGmx/gaming-Controller.webp",
    ],
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis repellendus dolore, facilis iste obcaecati ab nesciunt ducimus quidem molestias aut? Aut vitae error delectus itaque facilis obcaecati nemo dolore cumque. Blanditiis minus corrupti dignissimos, voluptas iusto, eligendi maiores doloremque aliquid mollitia in hic dolores pariatur doloribus dolorum totam. Facilis, dignissimos.",
    regularPrice: 450,
    discountedPrice: 380,
    quantity: 1,
    rating: 4.2,
    reviews: 70,
    category: "Robot Clean",
    colors: ["red", "blue", "green", "yellow", "black", "white"],
    brand: "Lorem ipsum dolor sit",
    isStock: true,
    overView: "Robot Clean",
    isNew: true,
    _base: cat?.robotClean,
  },
  {
    _id: 2010,
    name: "Global Version Redmi Note 9 Pro 6GB RAM 64GB ROM Smartphone Mobile Phone",
    images: [
      "https://www.mobiledokan.com/media/xiaomi-redmi-note-9-pro-tropical-green-official-image.webp",
      "https://i.ibb.co/m6ZN7LX/soundBox.webp",
      "https://i.ibb.co/wdV3b9q/vaccum.webp",
      "https://i.ibb.co/tcdSfrr/blueGun.jpg",
      "https://i.ibb.co/pw0fGmx/gaming-Controller.webp",
    ],
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis repellendus dolore, facilis iste obcaecati ab nesciunt ducimus quidem molestias aut? Aut vitae error delectus itaque facilis obcaecati nemo dolore cumque. Blanditiis minus corrupti dignissimos, voluptas iusto, eligendi maiores doloremque aliquid mollitia in hic dolores pariatur doloribus dolorum totam. Facilis, dignissimos.",
    regularPrice: 305,
    discountedPrice: 285,
    quantity: 1,
    rating: 4.1,
    reviews: 160,
    category: "Cell Phones",
    colors: ["red", "blue", "green", "yellow", "black", "white"],
    brand: "Lorem ipsum dolor sit",
    isStock: true,
    overView: "Cual Sim Phones",
    isNew: true,
    _base: cat?.cellPhones,
  },
  {
    _id: 2011,
    name: "DIDSeth Pan Tilt Security Light Camera Full HD 1080P Wireless Wi-Fi IP Camera Home Dome Surveillance Cameras",
    images: [
      "https://minimog-4437.kxcdn.com/supergear/wp-content/uploads/sites/2/2022/02/product_supergear_01_1-600x600.jpeg",
      "https://i.ibb.co/m6ZN7LX/soundBox.webp",
      "https://i.ibb.co/wdV3b9q/vaccum.webp",
      "https://i.ibb.co/tcdSfrr/blueGun.jpg",
      "https://i.ibb.co/pw0fGmx/gaming-Controller.webp",
    ],
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis repellendus dolore, facilis iste obcaecati ab nesciunt ducimus quidem molestias aut? Aut vitae error delectus itaque facilis obcaecati nemo dolore cumque. Blanditiis minus corrupti dignissimos, voluptas iusto, eligendi maiores doloremque aliquid mollitia in hic dolores pariatur doloribus dolorum totam. Facilis, dignissimos.",
    regularPrice: 350,
    discountedPrice: 280,
    quantity: 1,
    rating: 3.8,
    reviews: 250,
    category: "Cameras & Photos",
    colors: ["red", "blue", "green", "yellow", "black", "white"],
    brand: "Lorem ipsum dolor sit",
    isStock: true,
    overView: "Security & Protection",
    isNew: true,
    _base: cat?.camerasAndPhotos,
  },
  {
    _id: 2012,
    name: "Electric Hot Melt Glue Gun Cordless Repair DIY Tool Heating Mini Glue Gun With Glue Sticks",
    images: [
      "https://m.media-amazon.com/images/I/51DQxNzClvL.jpg",
      "https://i.ibb.co/m6ZN7LX/soundBox.webp",
      "https://i.ibb.co/wdV3b9q/vaccum.webp",
      "https://i.ibb.co/tcdSfrr/blueGun.jpg",
      "https://i.ibb.co/pw0fGmx/gaming-Controller.webp",
    ],
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis repellendus dolore, facilis iste obcaecati ab nesciunt ducimus quidem molestias aut? Aut vitae error delectus itaque facilis obcaecati nemo dolore cumque. Blanditiis minus corrupti dignissimos, voluptas iusto, eligendi maiores doloremque aliquid mollitia in hic dolores pariatur doloribus dolorum totam. Facilis, dignissimos.",
    regularPrice: 150,
    discountedPrice: 80,
    quantity: 1,
    rating: 4.7,
    reviews: 90,
    category: "Power Tools",
    colors: ["red", "blue", "green", "yellow", "black", "white"],
    brand: "Lorem ipsum dolor sit",
    isStock: true,
    overView: "Power Tools",
    isNew: true,
    _base: cat?.powerTools,
  },
  {
    _id: 2013,
    name: "MECOOL KH3 Android 10.0 Smart 4K 60fps TV Box – Black 2GB RAM + 16GB ROM",
    images: [
      "https://smartmarket.ma/cdn/shop/products/mecool-kh3-2gb-ram-16gb-rom-4k-hdr-prix-maroc-5.jpg?v=1706002535",
      "https://i.ibb.co/m6ZN7LX/soundBox.webp",
      "https://i.ibb.co/wdV3b9q/vaccum.webp",
      "https://i.ibb.co/tcdSfrr/blueGun.jpg",
      "https://i.ibb.co/pw0fGmx/gaming-Controller.webp",
    ],
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis repellendus dolore, facilis iste obcaecati ab nesciunt ducimus quidem molestias aut? Aut vitae error delectus itaque facilis obcaecati nemo dolore cumque. Blanditiis minus corrupti dignissimos, voluptas iusto, eligendi maiores doloremque aliquid mollitia in hic dolores pariatur doloribus dolorum totam. Facilis, dignissimos.",
    regularPrice: 210,
    discountedPrice: 200,
    quantity: 1,
    rating: 3.9,
    reviews: 100,
    category: "TV Box",
    colors: ["red", "blue", "green", "yellow", "black", "white"],
    brand: "Lorem ipsum dolor sit",
    isStock: true,
    overView: "TV Box",
    isNew: true,
    _base: cat?.tvBox,
  },
  {
    _id: 2014,
    name: "Sony PS4 Controller Bluetooth Vibration Gamepad For Playstation 4 Detroit Wireless Joystick For PS4 Games Consol",
    images: [
      "https://m.media-amazon.com/images/I/6115gjpXxvL.jpg",
      "https://i.ibb.co/m6ZN7LX/soundBox.webp",
      "https://i.ibb.co/wdV3b9q/vaccum.webp",
      "https://i.ibb.co/tcdSfrr/blueGun.jpg",
      "https://i.ibb.co/pw0fGmx/gaming-Controller.webp",
    ],
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis repellendus dolore, facilis iste obcaecati ab nesciunt ducimus quidem molestias aut? Aut vitae error delectus itaque facilis obcaecati nemo dolore cumque. Blanditiis minus corrupti dignissimos, voluptas iusto, eligendi maiores doloremque aliquid mollitia in hic dolores pariatur doloribus dolorum totam. Facilis, dignissimos.",
    regularPrice: 80,
    discountedPrice: 75,
    quantity: 1,
    rating: 4.2,
    reviews: 110,
    category: "Game and Video",
    colors: ["red", "blue", "green", "yellow", "black", "white"],
    brand: "Lorem ipsum dolor sit",
    isStock: true,
    overView: "Game & Video",
    isNew: true,
    _base: cat?.gameAndVideo,
  },
  {
    _id: 2015,
    name: "GSR 120-Li Hand Drill 12V Lithium Drill Household Power Tool Screwdriver With One Battery – GSR120-LI 1Battery",
    images: [
      "https://eparts.com.bd/wp-content/uploads/2021/11/GSR-120-Li-Professional-Drill-Driver03.jpg",
      "https://i.ibb.co/m6ZN7LX/soundBox.webp",
      "https://i.ibb.co/wdV3b9q/vaccum.webp",
      "https://i.ibb.co/tcdSfrr/blueGun.jpg",
      "https://i.ibb.co/pw0fGmx/gaming-Controller.webp",
    ],
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis repellendus dolore, facilis iste obcaecati ab nesciunt ducimus quidem molestias aut? Aut vitae error delectus itaque facilis obcaecati nemo dolore cumque. Blanditiis minus corrupti dignissimos, voluptas iusto, eligendi maiores doloremque aliquid mollitia in hic dolores pariatur doloribus dolorum totam. Facilis, dignissimos.",
    regularPrice: 560,
    discountedPrice: 400,
    quantity: 1,
    rating: 4,
    reviews: 300,
    category: "Power Tools",
    colors: ["red", "blue", "green", "yellow", "black", "white"],
    brand: "Lorem ipsum dolor sit",
    isStock: true,
    overView: "Power Tools",
    isNew: true,
    _base: cat?.powerTools,
  },
  {
    _id: 2016,
    name: "Xiaomi Mi Outdoor Speaker Bluetooth 5.0 IP55 Waterproof Dustproof Portable Wireless Speaker",
    images: [
      "https://m.media-amazon.com/images/I/81N2x2qSmfL.jpg",
      "https://i.ibb.co/m6ZN7LX/soundBox.webp",
      "https://i.ibb.co/wdV3b9q/vaccum.webp",
      "https://i.ibb.co/tcdSfrr/blueGun.jpg",
      "https://i.ibb.co/pw0fGmx/gaming-Controller.webp",
    ],
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis repellendus dolore, facilis iste obcaecati ab nesciunt ducimus quidem molestias aut? Aut vitae error delectus itaque facilis obcaecati nemo dolore cumque. Blanditiis minus corrupti dignissimos, voluptas iusto, eligendi maiores doloremque aliquid mollitia in hic dolores pariatur doloribus dolorum totam. Facilis, dignissimos.",
    regularPrice: 250,
    discountedPrice: 240,
    quantity: 1,
    rating: 4.2,
    reviews: 110,
    category: "TV and Audio",
    colors: ["red", "blue", "green", "yellow", "black", "white"],
    brand: "Lorem ipsum dolor sit",
    isStock: true,
    overView: "Blutooth Speakers",
    isNew: true,
    _base: cat?.tvAndAudio,
  },
  {
    _id: 2017,
    name: "Global Version Mi TV Stick Android TV 9.0 Smart 2K HDR 1GB RAM 8GB ROM Bluetooth 4.2 Mini TV Dongle",
    images: [
      "https://m.media-amazon.com/images/I/41vmnxJEp0L.jpg",
      "https://i.ibb.co/m6ZN7LX/soundBox.webp",
      "https://i.ibb.co/wdV3b9q/vaccum.webp",
      "https://i.ibb.co/tcdSfrr/blueGun.jpg",
      "https://i.ibb.co/pw0fGmx/gaming-Controller.webp",
    ],
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis repellendus dolore, facilis iste obcaecati ab nesciunt ducimus quidem molestias aut? Aut vitae error delectus itaque facilis obcaecati nemo dolore cumque. Blanditiis minus corrupti dignissimos, voluptas iusto, eligendi maiores doloremque aliquid mollitia in hic dolores pariatur doloribus dolorum totam. Facilis, dignissimos.",
    regularPrice: 60,
    discountedPrice: 55,
    quantity: 1,
    rating: 4,
    reviews: 100,
    category: "TV Box",
    colors: ["red", "blue", "green", "yellow", "black", "white"],
    brand: "Lorem ipsum dolor sit",
    isStock: true,
    overView: "TV Box",
    isNew: true,
    _base: cat?.tvBox,
  },
  {
    _id: 2018,
    name: "Xiaomi Mijia LCD Writing Tablet With Pen 10 13.5inch Digital Drawing Message Graphics Electronic Handwriting Pad With Pen",
    images: [
      "https://m.media-amazon.com/images/I/41yN3p0KLkL._AC_UF1000,1000_QL80_.jpg",
      "https://i.ibb.co/m6ZN7LX/soundBox.webp",
      "https://i.ibb.co/wdV3b9q/vaccum.webp",
      "https://i.ibb.co/tcdSfrr/blueGun.jpg",
      "https://i.ibb.co/pw0fGmx/gaming-Controller.webp",
    ],
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis repellendus dolore, facilis iste obcaecati ab nesciunt ducimus quidem molestias aut? Aut vitae error delectus itaque facilis obcaecati nemo dolore cumque. Blanditiis minus corrupti dignissimos, voluptas iusto, eligendi maiores doloremque aliquid mollitia in hic dolores pariatur doloribus dolorum totam. Facilis, dignissimos.",
    regularPrice: 350,
    discountedPrice: 330,
    quantity: 1,
    rating: 4.2,
    reviews: 70,
    category: "Tablets",
    colors: ["red", "blue", "green", "yellow", "black", "white"],
    brand: "Lorem ipsum dolor sit",
    isStock: true,
    overView: "Tablets",
    isNew: true,
    _base: cat?.tablets,
  },
  {
    _id: 2019,
    name: "New Creative Cloth Art Home Outdoors Bluetooth Sound Box",
    images: [
      "https://m.media-amazon.com/images/I/81djh1gfUwL._AC_UF894,1000_QL80_.jpg",
      "https://i.ibb.co/m6ZN7LX/soundBox.webp",
      "https://i.ibb.co/wdV3b9q/vaccum.webp",
      "https://i.ibb.co/tcdSfrr/blueGun.jpg",
      "https://i.ibb.co/pw0fGmx/gaming-Controller.webp",
    ],
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis repellendus dolore, facilis iste obcaecati ab nesciunt ducimus quidem molestias aut? Aut vitae error delectus itaque facilis obcaecati nemo dolore cumque. Blanditiis minus corrupti dignissimos, voluptas iusto, eligendi maiores doloremque aliquid mollitia in hic dolores pariatur doloribus dolorum totam. Facilis, dignissimos.",
    regularPrice: 120,
    discountedPrice: 100,
    quantity: 1,
    rating: 4.1,
    reviews: 20,
    category: "Bluetooth Speakers",
    colors: ["red", "blue", "green", "yellow", "black", "white"],
    brand: "Lorem ipsum dolor sit",
    isStock: true,
    overView: "Bluetooth Speakers",
    isNew: true,
    _base: cat?.tvAndAudio,
  },
  {
    _id: 2020,
    name: "Global Version Redmi Note 9 Pro 6GB RAM 64GB ROM Smartphone Mobile Phone",
    images: [
      "https://m.media-amazon.com/images/I/61lbRf9tDdL.jpg",
      "https://i.ibb.co/m6ZN7LX/soundBox.webp",
      "https://i.ibb.co/wdV3b9q/vaccum.webp",
      "https://i.ibb.co/tcdSfrr/blueGun.jpg",
      "https://i.ibb.co/pw0fGmx/gaming-Controller.webp",
    ],
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis repellendus dolore, facilis iste obcaecati ab nesciunt ducimus quidem molestias aut? Aut vitae error delectus itaque facilis obcaecati nemo dolore cumque. Blanditiis minus corrupti dignissimos, voluptas iusto, eligendi maiores doloremque aliquid mollitia in hic dolores pariatur doloribus dolorum totam. Facilis, dignissimos.",
    regularPrice: 450,
    discountedPrice: 410,
    quantity: 1,
    rating: 3.7,
    reviews: 190,
    category: "Cell Phones",
    colors: ["red", "blue", "green", "yellow", "black", "white"],
    brand: "Lorem ipsum dolor sit",
    isStock: true,
    overView: "Dual Sim Phones",
    isNew: true,
    _base: cat?.cellPhones,
  },
  {
    _id: 2021,
    name: "L21 Bluetooth Earphone Wireless Earbuds 5.0 TWS Headsets Dual Earbuds Bass Sound For Huawei Xiaomi IPhone Samsung Mobile Phones",
    images: [
      "https://m.media-amazon.com/images/I/51yxmkUq-6L._AC_UF894,1000_QL80_.jpg",
      "https://i.ibb.co/m6ZN7LX/soundBox.webp",
      "https://i.ibb.co/wdV3b9q/vaccum.webp",
      "https://i.ibb.co/tcdSfrr/blueGun.jpg",
      "https://i.ibb.co/pw0fGmx/gaming-Controller.webp",
    ],
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis repellendus dolore, facilis iste obcaecati ab nesciunt ducimus quidem molestias aut? Aut vitae error delectus itaque facilis obcaecati nemo dolore cumque. Blanditiis minus corrupti dignissimos, voluptas iusto, eligendi maiores doloremque aliquid mollitia in hic dolores pariatur doloribus dolorum totam. Facilis, dignissimos.",
    regularPrice: 350,
    discountedPrice: 320,
    quantity: 1,
    rating: 3.9,
    reviews: 10,
    category: "Headphones",
    colors: ["red", "blue", "green", "yellow", "black", "white"],
    brand: "Lorem ipsum dolor sit",
    isStock: true,
    overView: "Fitness Headphones",
    isNew: true,
    _base: cat?.headphones,
  },
  {
    _id: 2022,
    name: "Roborock S7 Robot Vacuum Cleaner For Home Sonic Mopping Ultrasonic Carpet Clean Alexa Mop Lifting Upgrade For S5 Max",
    images: [
      "https://m.media-amazon.com/images/I/61+4Nh3yjuL._AC_UF894,1000_QL80_.jpg",
      "https://i.ibb.co/m6ZN7LX/soundBox.webp",
      "https://i.ibb.co/wdV3b9q/vaccum.webp",
      "https://i.ibb.co/tcdSfrr/blueGun.jpg",
      "https://i.ibb.co/pw0fGmx/gaming-Controller.webp",
    ],
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis repellendus dolore, facilis iste obcaecati ab nesciunt ducimus quidem molestias aut? Aut vitae error delectus itaque facilis obcaecati nemo dolore cumque. Blanditiis minus corrupti dignissimos, voluptas iusto, eligendi maiores doloremque aliquid mollitia in hic dolores pariatur doloribus dolorum totam. Facilis, dignissimos.",
    regularPrice: 250,
    discountedPrice: 240,
    quantity: 1,
    rating: 4.2,
    reviews: 100,
    category: "Robot Clean",
    colors: ["red", "blue", "green", "yellow", "black", "white"],
    brand: "Lorem ipsum dolor sit",
    isStock: true,
    overView: "Robot Clean",
    isNew: true,
    _base: cat?.robotClean,
  },
  {
    _id: 2023,
    name: "Klipsch R-120SW Powerful Detailed Home Speaker – Unit",
    images: [
      "https://m.media-amazon.com/images/I/810sguRF3fL.jpg",
      "https://i.ibb.co/m6ZN7LX/soundBox.webp",
      "https://i.ibb.co/wdV3b9q/vaccum.webp",
      "https://i.ibb.co/tcdSfrr/blueGun.jpg",
      "https://i.ibb.co/pw0fGmx/gaming-Controller.webp",
    ],
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis repellendus dolore, facilis iste obcaecati ab nesciunt ducimus quidem molestias aut? Aut vitae error delectus itaque facilis obcaecati nemo dolore cumque. Blanditiis minus corrupti dignissimos, voluptas iusto, eligendi maiores doloremque aliquid mollitia in hic dolores pariatur doloribus dolorum totam. Facilis, dignissimos.",
    regularPrice: 600,
    discountedPrice: 580,
    quantity: 1,
    rating: 4.7,
    reviews: 200,
    category: "TV & Audio",
    colors: ["red", "blue", "green", "yellow", "black", "white"],
    brand: "Lorem ipsum dolor sit",
    isStock: true,
    overView: "Bluetooth Speaker",
    isNew: true,
    _base: cat?.tvAndAudio,
  },
  {
    _id: 2024,
    name: "ZY418 Ultra-Thin Sport MP3 MP4 Music Player",
    images: [
      "https://m.media-amazon.com/images/I/61x-0cPATGL.jpg",
      "https://i.ibb.co/m6ZN7LX/soundBox.webp",
      "https://i.ibb.co/wdV3b9q/vaccum.webp",
      "https://i.ibb.co/tcdSfrr/blueGun.jpg",
      "https://i.ibb.co/pw0fGmx/gaming-Controller.webp",
    ],
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis repellendus dolore, facilis iste obcaecati ab nesciunt ducimus quidem molestias aut? Aut vitae error delectus itaque facilis obcaecati nemo dolore cumque. Blanditiis minus corrupti dignissimos, voluptas iusto, eligendi maiores doloremque aliquid mollitia in hic dolores pariatur doloribus dolorum totam. Facilis, dignissimos.",
    regularPrice: 80,
    discountedPrice: 70,
    quantity: 1,
    rating: 4.2,
    reviews: 60,
    category: "TV & Audio",
    colors: ["red", "blue", "green", "yellow", "black", "white"],
    brand: "Lorem ipsum dolor sit",
    isStock: true,
    overView: "MP3 Player",
    isNew: true,
    _base: cat?.tvAndAudio,
  },
  {
    _id: 2025,
    name: "Xiaomi Mi Watch Lite GPS Bluetooth 5.1 Smart Watch Sports Fitness Heart Rate Monitor 1.4 Inch TFTLCD Screen 5 ATM Waterproof Mi Band",
    images: [
      "https://m.media-amazon.com/images/I/512ZP+ATv3L._AC_UF1000,1000_QL80_.jpg",
      "https://i.ibb.co/m6ZN7LX/soundBox.webp",
      "https://i.ibb.co/wdV3b9q/vaccum.webp",
      "https://i.ibb.co/tcdSfrr/blueGun.jpg",
      "https://i.ibb.co/pw0fGmx/gaming-Controller.webp",
    ],
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis repellendus dolore, facilis iste obcaecati ab nesciunt ducimus quidem molestias aut? Aut vitae error delectus itaque facilis obcaecati nemo dolore cumque. Blanditiis minus corrupti dignissimos, voluptas iusto, eligendi maiores doloremque aliquid mollitia in hic dolores pariatur doloribus dolorum totam. Facilis, dignissimos.",
    regularPrice: 220,
    discountedPrice: 210,
    quantity: 1,
    rating: 4.5,
    reviews: 90,
    category: "Smart Watches",
    colors: ["red", "blue", "green", "yellow", "black", "white"],
    brand: "Lorem ipsum dolor sit",
    isStock: true,
    overView: "Smart Health Watch",
    isNew: true,
    _base: cat?.smartWatches,
  },
];
