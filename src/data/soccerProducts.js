





const soccerSchoolSales = {
  categories: [
    {
			name: "پک‌ها",
			items: [
				{
					id: "pack-basic",
					name: "پک پایه تمرینی",
					image: "/images/pack-basic.jpg",
					itemsIncluded: [
					"تی‌شرت تمرینی",
					"شورت ورزشی",
					"جوراب بلند",
					"بطری آب ساده"
					],
					priceToman: 1200000,
					rating: 4.5
				},
				{
					id: "pack-pro",
					name: "پک حرفه‌ای",
					image: "/images/pack-pro.jpg",
					itemsIncluded: [
					"تی‌شرت تمرینی",
					"شورت ورزشی",
					"جوراب بلند",
					"بطری آب ورزشی",
					"کفش فوتسال",
					"سوت مربی"
					],
					priceToman: 3100000,
					rating: 4.8
				},
				{
					id: "pack-kids",
					name: "پک کودک",
					image: "/images/pack-kids.jpg",
					itemsIncluded: [
					"تی‌شرت سایز کودک",
					"شورت",
					"جوراب",
					"توپ سبک"
					],
					priceToman: 950000,
					rating: 4.4
				},
				{
					id: "pack-elite",
					name: "پک مربی حرفه‌ای",
					image: "/images/pack-elite.jpg",
					itemsIncluded: [
					"ست لباس کامل مربی",
					"ساعت ورزشی",
					"سوت پیشرفته",
					"دفتر برنامه‌ریزی تمرین",
					"بطری آب عایق"
					],
					priceToman: 4200000,
					rating: 4.9
				},
				{
					id: "pack-goalkeeper",
					name: "پک دروازه‌بان",
					image: "/images/pack-goalkeeper.jpg",
					itemsIncluded: [
					"لباس دروازه‌بان",
					"دستکش دروازه‌بانی",
					"توپ تمرینی",
					"کلاه محافظ"
					],
					priceToman: 2800000,
					rating: 4.7
				}
			]
			},

    {
      name: "لباس",
      items: [
        {
          id: "shirt01",
          name: "تی‌شرت تمرینی",
          sizes: ["XS", "S", "M", "L", "XL"],
          colors: ["سفید", "مشکی", "قرمز"],
          priceToman: 800000,
          image: "/fashion-bg.jpg",
          rating: 4
        },
        {
          id: "shorts01",
          name: "شورت ورزشی",
          sizes: ["XS", "S", "M", "L", "XL"],
          colors: ["مشکی", "قرمز"],
          priceToman: 650000,
          image: "/fashion-bg.jpg",
          rating: 3
        },
        {
          id: "socks01",
          name: "جوراب بلند",
          sizes: ["S", "M", "L"],
          colors: ["سفید", "مشکی"],
          priceToman: 300000,
          image: "/fashion-bg.jpg",
          rating: 5
        },
        {
          id: "jacket01",
          name: "کاپشن گرم‌کن",
          sizes: ["S", "M", "L", "XL"],
          colors: ["قرمز", "مشکی"],
          priceToman: 1500000,
          image: "/fashion-bg.jpg",
          rating: 4
        },
        {
          id: "gloves01",
          name: "دستکش ورزشی",
          sizes: ["S", "M", "L"],
          colors: ["سیاه", "قرمز"],
          priceToman: 400000,
          image: "/fashion-bg.jpg",
          rating: 4.2
        },
        {
          id: "cap01",
          name: "کلاه ورزشی",
          sizes: ["Free"],
          colors: ["مشکی", "خاکستری"],
          priceToman: 200000,
          image: "/fashion-bg.jpg",
          rating: 3.8
        },
        {
          id: "hoodie01",
          name: "هودی تمرینی",
          sizes: ["M", "L", "XL"],
          colors: ["طوسی", "قرمز"],
          priceToman: 1300000,
          image: "/fashion-bg.jpg",
          rating: 4.6
        }
      ]
    }
  ]
};

export default soccerSchoolSales;
