const PRODUCTS = [
	{
		id: 1,
		name: 'Bluetooth & Wireless Over-Ear Headphones (Black)',
		price: '$12',
		image:"https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Ymx1ZXRvb3RoJTIwaGVhZHBob25lc3xlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80",
		details:
			'Quos, non, esse eligendi ab accusantium voluptatem. Accusamus perspiciatis asperiores labore esse ab accusantium ea modi ut.',
	},
	{
		id: 2,
		name: 'Apple iPhone 128GB',
		price: '$14',
		image: "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-13-model-unselect-gallery-2-202207_GEO_EMEA?wid=5120&hei=2880&fmt=p-jpg&qlt=80&.v=1654893618122",
		details:
			'Quos, non, esse eligendi ab accusantium voluptatem. Accusamus perspiciatis asperiores labore esse ab accusantium ea modi ut.',
	},
	{
		id: 3,
		name: 'Running Shoe Red & White',
		price: '$13.67',
		image: 'https://media.istockphoto.com/id/1276624783/photo/stylish-and-cool-boot.jpg?s=612x612&w=0&k=20&c=8ThAlZhGUSxEAu4XNuFp93dEQiHbolngazxwsr__bMs=',
		details:
			'Quos, non, esse eligendi ab accusantium voluptatem. Accusamus perspiciatis asperiores labore esse ab accusantium ea modi ut.',
	},
	{
		id: 4,
		name: 'Apple iPhone Blue 64GB',
		price: '$47.56',
		image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfD-3pZgIjwORLNOJOa94ek0Yan09g9bjm2SNtjr6QpCor-XaQWgy3eTnXAZHGR6Qjwq4&usqp=CAU',
		details:
			'Quos, non, esse eligendi ab accusantium voluptatem. Accusamus perspiciatis asperiores labore esse ab accusantium ea modi ut.',
	},
	{
		id: 5,
		name: 'Bluetooth Over-Ear Headphones (White',
		price: '$53.06',
		image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOjapRi06fEznmqYWeeogBpZPTApnyNeZnaw&usqp=CAU',
		details:
			'Quos, non, esse eligendi ab accusantium voluptatem. Accusamus perspiciatis asperiores labore esse ab accusantium ea modi ut.',
	},
	{
		id: 6,
		name: 'Logitech Gamepad White for PC/PS3',
		price: '$93.20',
		image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSeRGigGydDtjzBOx1GlteKLy_xApX6b_9I3w&usqp=CAU',
		details:
			'Quos, non, esse eligendi ab accusantium voluptatem. Accusamus perspiciatis asperiores labore esse ab accusantium ea modi ut.',
	},
	{
		id: 7,
		name: 'Premium Smart Watch (Black',
		price: '$25',
		image: 'https://rukminim1.flixcart.com/image/850/1000/jz30nm80/smartwatch-refurbished/g/z/e/c-dz09-premium-smartwatch-black-amgen-original-imafj5ehbzwkhxey.jpeg?q=20',
		details:
			'Quos, non, esse eligendi ab accusantium voluptatem. Accusamus perspiciatis asperiores labore esse ab accusantium ea modi ut.',
	},
	{
		id: 8,
		name: 'Multicolor Modern Shoe for Her',
		price: '$99.98',
		image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQG2u7Bj0a9zzFgJ_1UGptu87uIgu8rps06X-LJqQEvzOiUH88ZbOzabC3X6KOjNopIIcc&usqp=CAU',
		details:
			'Quos, non, esse eligendi ab accusantium voluptatem. Accusamus perspiciatis asperiores labore esse ab accusantium ea modi ut.',
	},
	{
		id: 9,
		name: 'Apple iPhone (Brand New',
		price: '$87.22',
		image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHoOn59OIKSnlG7mD5UsCGL0Ihe2Of8MNldGPjvYKZorx7hlp5781SXLhNRUYhVKSRsNc&usqp=CAU',
		details:
			'Quos, non, esse eligendi ab accusantium voluptatem. Accusamus perspiciatis asperiores labore esse ab accusantium ea modi ut.',
	},
	{
		id: 10,
		name: 'Smart Watch with Latest Android OS',
		price: '$11',
		image: 'https://m.media-amazon.com/images/I/41USC1gDJ6L.jpg',
		details:
			'Quos, non, esse eligendi ab accusantium voluptatem. Accusamus perspiciatis asperiores labore esse ab accusantium ea modi ut.',
	},
	{
		id: 11,
		name: 'Modern & Original Eye Glasses',
		price: '$69',
		image: 'https://cdna.lystit.com/400/500/tr/photos/mrporter/0592f7a8/jacques-marie-mage-Black-Dealan-D-frame-Acetate-Sunglasses.jpeg',
		details:
			'Quos, non, esse eligendi ab accusantium voluptatem. Accusamus perspiciatis asperiores labore esse ab accusantium ea modi ut.',
	},
	{
		id: 12,
		name: 'Nikon Camera (Slightly Used 750',
		price: '$33',
		image: 'https://rukminim2.flixcart.com/image/300/400/kyt0ya80/dslr-camera/k/m/b/z50-21-51-z50-18-140mm-nikon-original-imagaymzyjxhabmh.jpeg?q=90',
		details:
			'Quos, non, esse eligendi ab accusantium voluptatem. Accusamus perspiciatis asperiores labore esse ab accusantium ea modi ut.',
	},
	{
		id: 13,
		name: 'Red & Black Ganming Mouse for PC',
		price: '$99',
		image: 'https://m.media-amazon.com/images/I/71OHhBIm70L.jpg',
		details:
			'Quos, non, esse eligendi ab accusantium voluptatem. Accusamus perspiciatis asperiores labore esse ab accusantium ea modi ut.',
	},
	{
		id: 14,
		name: 'Multi Purpose College Bag Backpack',
		price: '$44',
		image: 'https://m.media-amazon.com/images/I/61poIwOsTXL._AC_UY1100_.jpg',
		details:
			'Quos, non, esse eligendi ab accusantium voluptatem. Accusamus perspiciatis asperiores labore esse ab accusantium ea modi ut.',
	},
	{
		id: 15,
		name: 'White & Black Watch Concept',
		price: '$22.22',
		image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlV3aHZkiSSxn9N7M_l7Tdl2skP8hj-ZITtA&usqp=CAU',
		details:
			'Quos, non, esse eligendi ab accusantium voluptatem. Accusamus perspiciatis asperiores labore esse ab accusantium ea modi ut.',
	},
];

export default PRODUCTS;
