import Category from "./component";

export default function Page () {

    const products = [
        {
            id: 1,
            name: "ايفون 13 برو ماكس",
            new_price: 1200,
            old_price: 0,
            image: "/media/product/1.png",
            image_hover: "/media/product/2.png",
            company: "ايفون",
            type: "جديد",
            description: "الشاشة: يأتي iPhone 13 Pro Max بشاشة Super Retina XDR OLED بحجم 6.7 بوصة. تتميز الشاشة بدقة عالية وألوان غنية وسطوع ممتاز. الأداء: يعتمد iPhone 13 Pro Max على شريحة A15 Bionic، وهي شريحة معالجة قوية توفر أداءً متفوقًا وكفاءة طاقة محسّنة. تتيح هذه الشريحة القدرة على تشغيل التطبيقات والألعاب الثقيلة بسلاسة.",
            count: "9",
            rate: 4,
        },
        {
            id: 2,
            name: "ايفون 13 برو ماكس",
            new_price: 1200,
            old_price: 0,
            image: "/media/product/3.png",
            image_hover: "/media/product/4.png",
            company: "ايفون",
            type: "جديد",
            description: "الشاشة: يأتي iPhone 13 Pro Max بشاشة Super Retina XDR OLED بحجم 6.7 بوصة. تتميز الشاشة بدقة عالية وألوان غنية وسطوع ممتاز. الأداء: يعتمد iPhone 13 Pro Max على شريحة A15 Bionic، وهي شريحة معالجة قوية توفر أداءً متفوقًا وكفاءة طاقة محسّنة. تتيح هذه الشريحة القدرة على تشغيل التطبيقات والألعاب الثقيلة بسلاسة.",
            count: "9",
            rate: 4,
        },
        {
            id: 3,
            name: "ايفون 13 برو ماكس",
            new_price: "1200",
            old_price: "3000",
            image: "/media/product/5.png",
            image_hover: "/media/product/6.png",
            company: "ايفون",
            type: "جديد",
            description: "الشاشة: يأتي iPhone 13 Pro Max بشاشة Super Retina XDR OLED بحجم 6.7 بوصة. تتميز الشاشة بدقة عالية وألوان غنية وسطوع ممتاز. الأداء: يعتمد iPhone 13 Pro Max على شريحة A15 Bionic، وهي شريحة معالجة قوية توفر أداءً متفوقًا وكفاءة طاقة محسّنة. تتيح هذه الشريحة القدرة على تشغيل التطبيقات والألعاب الثقيلة بسلاسة.",
            count: "9",
            rate: 4,
        },
        {
            id: 4,
            name: "ايفون 13 برو ماكس",
            new_price: "1200",
            old_price: "3000",
            image: "/media/product/7.png",
            image_hover: "/media/product/8.png",
            company: "ايفون",
            type: "جديد",
            description: "الشاشة: يأتي iPhone 13 Pro Max بشاشة Super Retina XDR OLED بحجم 6.7 بوصة. تتميز الشاشة بدقة عالية وألوان غنية وسطوع ممتاز. الأداء: يعتمد iPhone 13 Pro Max على شريحة A15 Bionic، وهي شريحة معالجة قوية توفر أداءً متفوقًا وكفاءة طاقة محسّنة. تتيح هذه الشريحة القدرة على تشغيل التطبيقات والألعاب الثقيلة بسلاسة.",
            count: "9",
            rate: 4,
        },
        {
            id: 6,
            name: "ايفون 13 برو ماكس",
            new_price: "1200",
            old_price: "3000",
            image: "/media/product/11.png",
            image_hover: "/media/product/12.png",
            company: "ايفون",
            type: "جديد",
            description: "الشاشة: يأتي iPhone 13 Pro Max بشاشة Super Retina XDR OLED بحجم 6.7 بوصة. تتميز الشاشة بدقة عالية وألوان غنية وسطوع ممتاز. الأداء: يعتمد iPhone 13 Pro Max على شريحة A15 Bionic، وهي شريحة معالجة قوية توفر أداءً متفوقًا وكفاءة طاقة محسّنة. تتيح هذه الشريحة القدرة على تشغيل التطبيقات والألعاب الثقيلة بسلاسة.",
            count: "9",
            rate: 4,
        },
    ];

    return <Category products={products} />
    
};
