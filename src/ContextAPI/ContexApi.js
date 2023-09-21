import React, { createContext, useState } from "react"
export const Store = createContext();
const ConntextStore = (props) => {
    const [data, setData] = useState([

        {
            id: 1,
            name: "Chocolate Cake",
            category: "Food",
            image: "https://images.unsplash.com/photo-1607257882338-70f7dd2ae344?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fENob2NvbGF0ZSUyMENha2V8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=400&q=60",
            text: "Chocolate cake is made with chocolate. It can also include other ingredients.[1] These include fudge, vanilla creme, and other sweeteners. The history of chocolate cake goes back to the 17th century, when cocoa powder from the Americas was added to traditional cake recipes.[2] In 1828, Coenraad van Houten of the Netherlands developed a mechanical extraction method for extracting the fat from cacao liquor resulting in cacao butter and the partly defatted cacao, a compacted mass of solids that could be sold as it was rock cacao or ground into powder",
        },
        {
            id: 2,
            name: "Spices",
            category: "Food",
            image: "https://images.unsplash.com/photo-1532336414038-cf19250c5757?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fENoaWNrZW4lMjBDdXJyeXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=400&q=60",
            text: "Indian cuisine has a large amount of regional variation, with many variations on the basic chicken curry recipe. Indian chicken curry typically starts with whole spices, heated in oil. A sauce is then made with onions, ginger, garlic, and tomatoes, and powdered spices. Bone-in pieces of chicken are then added to the sauce, and simmered until cooked through.[1] In south India, coconut and curry leaves are also common ingredients.[2] Chicken curry is usually garnished with coriander leaves, and served with rice or roti",
        },
        {
            id: 3,
            name: "Fruit Salad",
            category: "Food",
            image: "https://images.unsplash.com/photo-1590590470233-195e7fec2965?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fEZydWl0JTIwU2FsYWR8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=400&q=60",
            text: "Fruit salad is a dish consisting of various kinds of fruit, sometimes served in a liquid, either their juices or a syrup. In different forms, fruit salad can be served as an appetizer or a side as a salad. When served as an appetizer, a fruit salad is sometimes known as a fruit cocktail (often connoting a canned product), or fruit cup (when served in a small container).",
        },
        {
            id: 4,
            name: "Chowmin",
            category: "Food",
            image: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.istockphoto.com%2Fphotos%2Fchow-mein&psig=AOvVaw03o71xHvixDD5vLTnMWE9j&ust=1695056633402000&source=images&cd=vfe&opi=89978449&ved=0CBAQjRxqFwoTCMjSspeQsoEDFQAAAAAdAAAAABAJ",
            text: "the term chow mein refers to fried noodles. More specifically, there are two main types of chow mein dishes: Steamed chow mein: In steamed chow mein, the noodles are initially flash-fried, then stir-fried while being tossed with additional ingredients like meat or vegetables and coated in a light sauce.",
        },
        {
            id: 5,
            name: "Cake",
            category: "Food",
            image: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.cakehut.in%2Fcakes%2Fdouble-chocolate-cake&psig=AOvVaw337L8FXPhXrnnoPvjcJnoq&ust=1695056783861000&source=images&cd=vfe&opi=89978449&ved=0CBAQjRxqFwoTCNCI1t2QsoEDFQAAAAAdAAAAABAE",
            text: "  It is a derivation of 'kaka', an Old Norse word. Medieval European bakers often made fruitcakes and gingerbread.",
        },
        {
            id: 6,
            name: "Biryani",
            category: "Food",
            image: "https://www.indianhealthyrecipes.com/wp-content/uploads/2022/02/hyderabadi-biryani-recipe-chicken.jpg",
            text: "Biryani is a mixed rice dish originating among the Muslims of South Asia. It is made with spices, vegetables, rice, and usually some type of meat In some .",
        },
        {
            id: 7,
            name: "rasgulla",
            category: "Food",
            image: "https://www.indianhealthyrecipes.com/wp-content/uploads/2014/09/rasgulla-recipe-1-500x500.jpg",
            text: "Rasgulla is a syrupy dessert popular in the eastern part of South Asia. It is made from ball-shaped dumplings of chhena dough, cooked in light sugar syrup made of sugar. This is done until the syrup permeates the dumplings.",
        },
        {
            id: 8,
            name: "Jalebi",
            category: "Food",
            image: "https://www.boldsky.com/img/2021/01/jalebi-recipe-1610019725.jpg",
            text: "Jalebi is a popular sweet snack in South Asia, Middle East, Africa, and Mauritius. It goes by many names, including jilapi, zelepi, jilebi, jilipi, zulbia, jerry, mushabak, z’labia, zengoula or zalabia",
        },
        {
            id: 9,
            name: "Samosa",
            category: "Food",
            image: "https://c.ndtvimg.com/2023-03/0m65kep_samosa_625x300_10_March_23.jpg",
            text: "Samosas are a popular Indian snack, filled with spiced potatoes, peas, and sometimes meat. They are deep-fried to perfection."
        },
        {
            id: 10,
            name: "Sushi",
            category: "Food",
            image: "https://www.licious.in/blog/wp-content/uploads/2022/04/shutterstock_1617156526-min.jpg",
            text: "Sushi is a Japanese dish consisting of vinegared rice, raw fish, and various ingredients. It is a delicacy enjoyed worldwide."
        },
        {
            id: 11,
            name: "Pizza",
            category: "Food",
            image: "https://img.freepik.com/free-photo/freshly-italian-pizza-with-mozzarella-cheese-slice-generative-ai_188544-12347.jpg?w=2000",
            text: "Pizza is an Italian dish made of a yeasted flatbread crust topped with tomato sauce, cheese, and various toppings. It's a global favorite."
        },
        {
            id: 12,
            name: "Tacos",
            category: "Food",
            image: "https://tatyanaseverydayfood.com/wp-content/uploads/2023/05/The-Best-Birria-Tacos-Recipe-2.jpg",
            text: "Tacos are Mexican street food made with folded or rolled tortillas filled with various ingredients, such as meat, beans, and salsa."
        },
        {
            id: 13,
            name: "Sushi Roll",
            category: "Food",
            image: "https://knifeandsoul.com/wp-content/uploads/2022/09/crunchy-roll-sushi-recipe-recipe-card.jpg",
            text: "Sushi rolls are a variation of sushi, with rice and ingredients wrapped in seaweed. They come in various flavors and styles."
        },
        {
            id: 14,
            name: "Pasta",
            category: "Food",
            image: "https://www.funfoodfrolic.com/wp-content/uploads/2020/09/Tomato-Pasta-Thumbnail.jpg",
            text: "Pasta is an Italian staple made from wheat flour and water. It comes in various shapes and is often served with a variety of sauces."
        },

        {
            id: 15,
            name: "Ready",
            category: "Bollywood",
            image: "https://m.media-amazon.com/images/M/MV5BMTY0MjQ4MjMyMF5BMl5BanBnXkFtZTcwMTc2MjM2NQ@@._V1_.jpg",
            text: "Ready is a 2011 Indian Hindi-language masala film directed by Anees Bazmee.[1] Produced by T-Series Films, Rawail Grandsons Entertainment and Software Pvt. Ltd., Sohail Khan Productions and Eros International, the film is the official remake of the 2008 Telugu film of the same name directed by Srinu Vaitla.[3] The film stars Salman Khan and Asin Thottumkal in their second film together after London Dreams. Ready was distributed by Wave Cinemas and One Up Entertainment.",
        },
        {
            id: 16,
            name: "Dilwale",
            category: "Bollywood",
            image: "https://m.media-amazon.com/images/M/MV5BNWRlODhkZjMtZmUzYS00MjExLTgxOWEtNGE2YTE0MGNiZDRmXkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_.jpg",
            text: "Dilwale is a 1995 Indian romantic action film directed by Harry Baweja. The film features Ajay Devgn and Raveena Tandon in lead roles and is known for its memorable music."
        },
        {
            id: 17,
            name: "Kabhi Khushi Kabhie Gham",
            category: "Bollywood",
            image: "https://m.media-amazon.com/images/M/MV5BOTQ5Nzc3NzAtMzZlMS00ZWJjLWIxMGMtNDU4ZTQ1NmNjMjc5XkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_FMjpg_UX1000_.jpg",
            text: "Kabhi Khushi Kabhie Gham is a 2001 Indian family drama film directed by Karan Johar. It features an ensemble cast, including Amitabh Bachchan, Shah Rukh Khan, and Kajol."
        },
        {
            id: 18,
            name: "3 Idiots",
            category: "Bollywood",
            image: "https://bcomber.org/wp-content/uploads/2021/10/Screen-Shot-2021-10-26-at-6.48.45-AM-900x499.png",
            text: "3 Idiots is a 2009 Indian comedy-drama film directed by Rajkumar Hirani. It stars Aamir Khan, R. Madhavan, and Sharman Joshi in lead roles and emphasizes the importance of education."
        },
        {
            id: 19,
            name: "Chennai Express",
            category: "Bollywood",
            image: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.imdb.com%2Ftitle%2Ftt2112124%2F&psig=AOvVaw0pBzVY2XOrh_U2tnnuStat&ust=1695058709435000&source=images&cd=vfe&opi=89978449&ved=0CBAQjRxqFwoTCICZ8fOXsoEDFQAAAAAdAAAAABAJ",
            text: "Chennai Express is a 2013 Indian action-comedy film directed by Rohit Shetty. It stars Shah Rukh Khan and Deepika Padukone and is known for its entertaining sequences."
        },
        {
            id: 20,
            name: "Dil Chahta Hai",
            category: "Bollywood",
            image: "https://gumlet.assettype.com/film-companion%2Fimport%2Fwp-content%2Fuploads%2F2020%2F08%2FDil-Chahta-Hai-Image.jpg?w=1200&auto=format%2Ccompress&ogImage=true&enlarge=true",
            text: "Dil Chahta Hai is a 2001 Indian coming-of-age film directed by Farhan Akhtar. It explores the friendships and adventures of three inseparable childhood friends."
        },
        {
            id: 21,
            name: "Kuch Kuch Hota Hai",
            category: "Bollywood",
            image: "https://upload.wikimedia.org/wikipedia/en/0/07/Kuch_Kuch_Hota_Hai_poster.jpg",
            text: "Kuch Kuch Hota Hai is a 1998 Indian romantic drama film directed by Karan Johar. It features Shah Rukh Khan, Kajol, and Rani Mukerji in pivotal roles."
        },
        {
            id: 22,
            name: "Zindagi Na Milegi Dobara",
            category: "Bollywood",
            image: "https://www.searchhyderabad.com/wp-content/uploads/listing-uploads/logo/2022/11/Zindagi-Na-Milegi-Dobara-Movie-OTT-Platform.jpg",
            text: "Zindagi Na Milegi Dobara is a 2011 Indian coming-of-age film directed by Zoya Akhtar. It showcases the transformative journey of three friends during a bachelor road trip."
        },
        {
            id: 23,
            name: "Sholay",
            category: "Bollywood",
            image: "https://qph.cf2.quoracdn.net/main-qimg-9df706281e6595f65faf02708df2c83a",
            text: "Sholay is a 1975 Indian action-adventure film directed by Ramesh Sippy. It is considered a classic and features iconic characters like Jai and Veeru."
        },
        {
            id: 24,
            name: "Kaho Naa... Pyaar Hai",
            category: "Bollywood",
            image: "https://m.media-amazon.com/images/M/MV5BNTViZjk0OGMtMTllMi00YjcyLTg4ZTMtNmEzZjlmZWIwNDJjXkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_.jpg",
            text: "Kaho Naa... Pyaar Hai is a 2000 Indian romantic thriller film directed by Rakesh Roshan. It marked the debut of Hrithik Roshan and Amisha Patel."
        },
        {
            id: 25,
            name: "Kal Ho Naa Ho",
            category: "Bollywood",
            image: "https://a10.gaanacdn.com/gn_img/albums/21GWwR3pkg/1GWwGvRWpk/size_l.jpg",
            text: "Kal Ho Naa Ho is a 2003 Indian romantic drama film directed by Nikkhil Advani. It stars Shah Rukh Khan, Preity Zinta, and Saif Ali Khan."
        },
        {
            id: 26,
            name: "Kabir Singh",
            category: "Bollywood",
            image: "https://m.media-amazon.com/images/M/MV5BOTIyMTNkMWQtZDJlYi00OGJmLTliN2MtOGE0YjY4NzFiYTNmXkEyXkFqcGdeQXVyOTAzMTc2MjA@._V1_.jpg",
            text: "Kabir Singh is a 2019 Indian romantic drama film directed by Sandeep Reddy Vanga. It stars Shahid Kapoor and Kiara Advani in the lead roles."
        },
        {
            id: 27,
            name: "Lagaan",
            category: "Bollywood",
            image: "https://www.koimoi.com/wp-content/new-galleries/2021/06/reunion-special-chale-chalo-lagaan-once-upon-to-mark-20-years-of-film-001.jpg",
            text: "Lagaan is a 2001 Indian epic sports drama film directed by Ashutosh Gowariker. It tells the story of a cricket match between Indian villagers and British officers."
        },
        {
            id: 28,
            name: "Padmaavat",
            category: "Bollywood",
            image: "https://upload.wikimedia.org/wikipedia/en/7/73/Padmaavat_poster.jpg",
            text: "Padmaavat is a 2018 Indian epic period drama film directed by Sanjay Leela Bhansali. It stars Deepika Padukone, Shahid Kapoor, and Ranveer Singh."
        },
        {
            id: 29,
            name: "Titanic",
            category: "Hollywood",
            image: "https://flxt.tmsimg.com/assets/p20056_v_h10_ab.jpg",
            text: "Titanic is a 1997 American disaster film directed, written, produced, and co-edited by James Cameron. Incorporating both historical and fictionalized aspects, it is based on accounts of the sinking of RMS Titanic in 1912. Kate Winslet and Leonardo DiCaprio star as members of different social classes who fall in love during the ship's maiden voyage",
        },
        {
            id: 30,
            name: "Avatar",
            category: "Hollywood",
            image: "https://c4.wallpaperflare.com/wallpaper/695/1024/947/amazing-avatar-hd-wallpaper-preview.jpg",
            text: "Avatar is a 2009 American science fiction film directed by James Cameron. It is known for its groundbreaking use of 3D technology and is set on the alien planet of Pandora."
        },
        {
            id: 31,
            name: "The Shawshank Redemption",
            category: "Hollywood",
            image: "https://m.media-amazon.com/images/S/pv-target-images/d56b2942bc24e60043c79b061040c63d43ba529f0db1feff055e3b7a4dcc28ce.jpg",
            text: "The Shawshank Redemption is a 1994 American drama film directed by Frank Darabont. It is based on a Stephen King novella and is celebrated as one of the greatest films of all time."
        },
        {
            id: 32,
            name: "Jurassic Park",
            category: "Hollywood",
            image: "https://jurassicoutpost.com/static/d359f22870ea215612f3ea72d3dc2e54/f6810/Mattel-Creations-Jurassic-World-Gates-Crowdfund.jpg",
            text: "Jurassic Park is a 1993 American science fiction adventure film directed by Steven Spielberg. It explores the concept of resurrecting dinosaurs through genetic engineering."
        },
        {
            id: 33,
            name: "Inception",
            category: "Hollywood",
            image: "https://m.media-amazon.com/images/S/pv-target-images/26677df38123a3a1553d704477c100af81b641e1d539bc1991f99f89935f18b0.jpg",
            text: "Inception is a 2010 American science fiction action film directed by Christopher Nolan. It delves into the world of dreams and features mind-bending visuals."
        },
        {
            id: 34,
            name: "The Dark Knight",
            category: "Hollywood",
            image: "https://m.media-amazon.com/images/S/pv-target-images/bd81861ea6ba639f3fec09c2bf2f64268026fe6711a34180b5923c83a6b40edc.jpg",
            text: "The Dark Knight is a 2008 superhero film directed by Christopher Nolan. It is known for Heath Ledger's iconic portrayal of the Joker."
        },
        {
            id: 35,
            name: "Pulp Fiction",
            category: "Hollywood",
            image: "https://m.media-amazon.com/images/S/pv-target-images/dbb9aff6fc5fcd726e2c19c07f165d40aa7716d1dee8974aae8a0dad9128d392.jpg",
            text: "Pulp Fiction is a 1994 American crime film directed by Quentin Tarantino. It weaves multiple interconnected stories and is known for its witty dialogue."
        },
        {
            id: 36,
            name: "Forrest Gump",
            category: "Hollywood",
            image: "https://flxt.tmsimg.com/assets/p15829_v_v13_aa.jpg",
            text: "Forrest Gump is a 1994 American comedy-drama film directed by Robert Zemeckis. It tells the life story of a man with a low IQ, played by Tom Hanks."
        },
        {
            id: 37,
            name: "E.T. the Extra-Terrestrial",
            category: "Hollywood",
            image: "https://i.ytimg.com/vi/y_2w7LC4qOc/maxresdefault.jpg",
            text: "E.T. the Extra-Terrestrial is a 1982 science fiction film directed by Steven Spielberg. It follows the friendship between a young boy and a stranded alien."
        },
        {
            id: 38,
            name: "The Matrix",
            category: "Hollywood",
            image: "https://s26162.pcdn.co/wp-content/uploads/2021/03/the-matrix-reloaded.jpeg",
            text: "The Matrix is a 1999 American science fiction action film directed by the Wachowskis. It explores the concept of a simulated reality controlled by machines."
        },
        {
            id: 39,
            name: "Gladiator",
            category: "Hollywood",
            image: "https://images-na.ssl-images-amazon.com/images/S/pv-target-images/5d4613e55effdda918929aad098920eb296367d405e4ddb57f2e11b79cf8d533._UY500_UX667_RI_TTW_.jpg",
            text: "Gladiator is a 2000 historical drama film directed by Ridley Scott. It stars Russell Crowe as a Roman general seeking vengeance."
        },
        {
            id: 40,
            name: "The Godfather",
            category: "Hollywood",
            image: "https://staticg.sportskeeda.com/editor/2023/04/70a9b-16805858653473.png",
            text: "The Godfather is a 1972 American crime film directed by Francis Ford Coppola. It is considered a cinematic masterpiece and tells the story of the Corleone crime family."
        },
        {
            id: 41,
            name: "Interstellar",
            category: "Hollywood",
            image: "https://images.livemint.com/rf/Image-621x414/LiveMint/Period1/2014/11/07/Photos/interstellarfilm--621x414.jpg",
            text: "Interstellar is a 2014 American science fiction film directed by Christopher Nolan. It explores space travel and the search for a new habitable planet."
        },
        {
            id: 42,
            name: "The Avengers",
            category: "Hollywood",
            image: "https://img1.hotstarext.com/image/upload/f_auto,t_vl/sources/r1/cms/prod/5215/875215-v",
            text: "The Avengers is a 2012 superhero film directed by Joss Whedon. It brings together iconic Marvel superheroes to save the world from a powerful threat."
        },

        {
            id: 43,
            name: "",
            category: "Fitness",
            image: "https://drkellyann.com/cdn/shop/articles/Best_Tips_for_Exercising_and_Working_Out_at_Home_1445x.jpg?v=1585152413",
            text: "Piece your workout together. You don’t need to get all your exercise at one time. Ten minutes morning, noon, and night can give much of the same benefit as 30 minutes all at once.",
        },
        {
            id: 44,
            name: "Cardiovascular Health",
            category: "Fitness",
            image: "https://domf5oio6qrcr.cloudfront.net/medialibrary/6037/6c53ac6b-cfba-42fc-9f0b-6c96e1b6a637.jpg",
            text: "Cardiovascular health refers to the health of the heart and blood vessels. Cardiovascular disease is a group of diseases of the heart and blood vessels, including coronary heart disease, stroke, heart failure, heart arrhythmias, and heart valve problems.",
        },
        {
            id: 45,
            name: "Strength Training",
            category: "Fitness",
            image: "https://www.heart.org/-/media/Images/Healthy-Living/Fitness/StrengthExercise.jpg",
            text: "Incorporate strength training exercises into your fitness routine to build muscle, increase metabolism, and enhance overall strength.",
        },
        {
            id: 46,
            name: "Flexibility and Stretching",
            category: "Fitness",
            image: "https://bod-blog-assets.prod.cd.beachbodyondemand.com/bod-blog/wp-content/uploads/2022/12/21103347/best-stretching-equipment-960.png",
            text: "Don't forget to stretch! Maintaining flexibility through stretching exercises can prevent injuries and improve mobility.",
        },
        {
            id: 47,
            name: "Healthy Eating Habits",
            category: "Fitness",
            image: "https://circles.com/sweden/wp-content/uploads/sites/4/2020/04/Tips-Tricks-Maintaining-Healthy-Eating-Habits.jpg",
            text: "Combine your workouts with a balanced diet rich in fruits, vegetables, and lean proteins for optimal fitness results.",
        },
        {
            id: 48,
            name: "Mindful Workouts",
            category: "Fitness",
            image: "https://play-lh.googleusercontent.com/vaRpPICOSvCJbycx8_wvsfe1sYlwgbjYpTbkcO9p0jKu0s756NnKpOUtULcQB8wxdw3J=w851-h2160-rw",
            text: "Practice mindfulness during your workouts to stay present and focused, enhancing the mind-body connection.",
        },
        {
            id: 49,
            name: "Interval Training",
            category: "Fitness",
            image: "https://images.onlymyhealth.com//imported/images/2021/March/26_Mar_2021/large21200_900highintensetraining_Large.jpg",
            text: "High-intensity interval training (HIIT) can help you burn calories efficiently and improve cardiovascular fitness in a short amount of time.",
        },
        {
            id: 50,
            name: "Cardiovascular Health",
            category: "Fitness",
            image: "https://c1.wallpaperflare.com/preview/487/9/315/bright-cardiac-cardiology-care.jpg",
            text: "Cardiovascular health refers to the health of the heart and blood vessels. Cardiovascular disease is a group of diseases of the heart and blood vessels, including coronary heart disease, stroke, heart failure, heart arrhythmias, and heart valve problems.",
        },
        {
            id: 51,
            name: "Yoga for Stress Relief",
            category: "Fitness",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVrx6jA5iD38Ro-pns0lvJgTqK_guVytgMog&usqp=CAU",
            text: "Vinyasa, which means “flow” in Sanskrit, is a movement-intensive practice with smooth transitions between poses. “People who are stressed out or struggling with anxiety may need a slow vinyasa class to focus the mind and find peace through movement,” says Vancouver-based yoga instructor and blogger Brittanie Firth.",
        },
        {
            id: 52,
            name: "Nutrition Tracking",
            category: "Fitness",
            image: "https://nutritioninformatics.info/wp-content/uploads/blog-mexican-food-smartphone.jpg",
            text: "Ntrition tracking is the process of collecting and analyzing qualitative or quantitative data on your dietary intake patterns, typically for the purpose of achieving health-related or fitness-related goals.",
        },
        {
            id: 53,
            name: "Hydration Importance",
            category: "Fitness",
            image: "https://images.onlymyhealth.com/imported/images/2023/April/28_Apr_2023/Importance-of-hydration-for-oral-health-main.jpg",
            text: "Drinking enough water each day is crucial for many reasons: to regulate body temperature, keep joints lubricated, prevent infections, deliver nutrients to cells, and keep organs functioning properly. Being well-hydrated also improves sleep quality, cognition, and mood.",
        },
        {
            id: 54,
            name: "Outdoor Workouts",
            category: "Fitness",
            image: "https://media.istockphoto.com/id/1319768894/photo/mixed-race-woman-exercising-in-park-with-mature-friends.webp?b=1&s=170667a&w=0&k=20&c=vYHfa-F1ec94HLT_Lt4i2Nw5OHuRxPCNuWf583O8-ks=",
            text: "Fresh outdoor air and natural light invigorate and provide more energy for the mind and body. Sunshine provides the vitamin D that we need, you will get a suntan while training, and the sun will lift your spirits! Sunlight also enhances energy generation in the muscles and oxidation of the tissues.",
        },
        {
            id: 55,
            name: "HIIT Workouts",
            category: "Fitness",
            image: "https://static01.nyt.com/images/2023/03/21/multimedia/14WNT-HIIT-WORKOUTS1-lktg/14WNT-HIIT-WORKOUTS1-lktg-videoSixteenByNine3000.jpg",
            text: "You can use HIIT with any type of cardio workout, whether it's running, using a stair climbing machine, rowing, or jumping rope. You'll work up a sweat fast, working at a very intense level and then backing off for a slower recovery period, followed by another round of high intensity.",
        },
        {
            id: 56,
            name: "Kettlebell Workouts",
            category: "Fitness",
            image: "https://static01.nyt.com/images/2023/04/25/multimedia/WNT-KETTLEBELLS1-kgwl/WNT-KETTLEBELLS1-kgwl-videoSixteenByNine3000.jpg",
            text: "olding a lot of weight by a handle engages your arm, leg, shoulder, back, and abdominal muscles. The pull on your muscles helps to strengthen them. The pull on your bones helps stimulate new bone cell growth. Using kettlebells can also improve your posture.",
        },
        {
            id: 57,
            name: "Artificial Intelligence",
            category: "Technology",
            image: "https://aimst.edu.my/wp-content/uploads/2023/04/artificial-intelligence-new-technology-science-futuristic-abstract-human-brain-ai-technology-cpu-central-processor-unit-chipset-big-data-machine-learning-cyber-mind-domination-generative-ai.jpg",
            text: "Artificial intelligence is the intelligence of machines or software, as opposed to the intelligence of humans or animals. It is also the field of study in computer science that develops and studies intelligent machines. AI may also refer to the machines themselves",
        },
        {
            id: 58,
            name: " Internet of Things (IoT)",
            category: "Technology",
            image: "",
            text: "IoT connects everyday objects to the internet, enabling smart homes, cities, and industries through data-driven automation.",

        },
        {
            id: 59,
            name: "5G Technology",
            category: "Technology",
            image: "",
            text: "5G technology revolutionizes wireless communication, providing faster speeds and low latency for a wide range of applications.",
        },
        {
            id: 60,
            name: "Cybersecurity",
            category: "Technology",
            image: "https://m.economictimes.com/thumb/msid-95410508,width-1200,height-800,resizemode-4,imgsize-34558/cisos-pick-for-2023-cybersecurity-stack-whats-in-and-whats-out.jpg",
            text: "Cyber security is the application of technologies, processes, and controls to protect systems, networks, programs, devices and data from cyber attacks. It aims to reduce the risk of cyber attacks and protect against the unauthorised exploitation of systems, networks, and technologies.",
        },
        {
            id: 61,
            name: "Biotechnology",
            category: "Technology",
            image: "https://genflowbio.com/wp-content/uploads/2021/11/Biotechnology.jpg",
            text: "Biotechnology is technology that utilizes biological systems, living organisms or parts of this to develop or create different products. Brewing and baking bread are examples of processes that fall within the concept of biotechnology (use of yeast (= living organism) to produce the desired product).",
        },
        {
            id: 62,
            name: "Renewable Energy",
            category: "Technology",
            image: "https://cms.cnbcafrica.com/wp-content/uploads/2023/07/EnergyTransitionPolicy_Videowall3.jpg",
            text: "Renewable energy is energy derived from natural sources that are replenished at a higher rate than they are consumed. Sunlight and wind, for example, are such sources that are constantly being replenished. Renewable energy sources are plentiful and all around us.",
        },
        {
            id: 63,
            name: "Space Exploration",
            category: "Technology",
            image: "https://www.pewresearch.org/wp-content/uploads/2014/04/FT_14.04.23_SpaceExploration.jpg",
            text: "Space exploration is investigation, by means of crewed and uncrewed spacecraft, of the reaches of the universe beyond Earth's atmosphere and the use of the information so gained to increase knowledge of the cosmos and benefit humanity.",
        },
        {
            id: 64,
            name: "Nanotechnology",
            category: "Technology",
            image: "https://i0.wp.com/www.gniotgroup.edu.in/blog/wp-content/uploads/2021/09/nano-technology.jpg?fit=940%2C529&ssl=1",
            text: "Nanotechnology is the manipulation of matter on a near-atomic scale to produce new structures, materials and devices. The technology promises scientific advancement in many sectors such as medicine, consumer products, energy, materials, and manufacturing.",
        },

        {
            id: 65,
            name: " Biometrics",
            category: "Technology",
            image: "https://s0.hfdstatic.com/sites/the_hartford/pubimgs/1444712784591.jpg?v=2021-05-20_075636924",
            text: "Biometrics is the measurement and statistical analysis of people's unique physical and behavioral characteristics. The technology is mainly used for identification and access control or for identifying individuals who are under surveillance.",
        },
        {
            id: 66,
            name: "Social Media",
            category: "Technology",
            image: "https://wallpapercave.com/wp/wp9225784.jpg",
            text: "Social media refers to the means of interactions among people in which they create, share, and/or exchange information and ideas in virtual communities and networks. The Office of Communications and Marketing manages the main Facebook, Twitter, Instagram, LinkedIn and YouTube accounts.",
        },

        {
            id: 67,
            name: "Alexa",
            category: "Technology",
            image: "https://images.pexels.com/photos/577514/pexels-photo-577514.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
            text: "Alexa is able to communicate commands to your smart lights through your WiFi network. This means that you don't need any special equipment or wiring in order to get started. You only need an internet connection, an Amazon Echo device and some compatible smart lights.",
        },
        {
            id: 68,
            name: "Robotics",
            category: "Technology",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTf_63J7QJHJ4NaLZvRERB3-TDhjznvGTevJw&usqp=CAU",
            text: "robotics, design, construction, and use of machines (robots) to perform tasks done traditionally by human beings. Robots are widely used in such industries as automobile manufacture to perform simple repetitive tasks, and in industries where work must be performed in environments hazardous to humans.",
        },
        {
            id: 69,
            name: "Augmented Reality",
            category: "Technology",
            image: "https://d3i2s57s2jetfw.cloudfront.net/wp-content/uploads/2023/09/b4efa85bffd4d66c5ea0ec7cfa0bf684-1200x0-c-default.jpg",
            text: "Augmented reality is an interactive experience in which a real world environment is enhanced with computer-generated visual elements, sounds, and other stimuli. It can provide a user with a heightened, more immersive experience than they would experience otherwise that adds to the user's enjoyment or understanding.",
        },
        {
            id: 70,
            name: "Quantum Computing",
            category: "Technology",
            image: "https://assets.telegraphindia.com/telegraph/2021/Jul/1626718447_shutterstock_1571871052.jpg",
            text: "Quantum computing is a multidisciplinary field comprising aspects of computer science, physics, and mathematics that utilizes quantum mechanics to solve complex problems faster than on classical computers. The field of quantum computing includes hardware research and application development.",
        },
        {
            id: 71,
            name: "Dhosa",
            category: "Home",
            image: "https://e1.pxfuel.com/desktop-wallpaper/123/90/desktop-wallpaper-appetizer-healthy-masala-dosa.jpg",
            text: "A dosa is a thin savory pancake in South Indian cuisine made from a fermented batter of ground black lentils and rice. Dosas are served hot, often with chutney and sambar. Dosa is a signature dish in South India and Sri Lanka, and is popularly served in their respective restaurants around the world",
        },
        {
            id: 72,
            name: "gulabjamun",
            category: "Home",
            image: "https://www.shutterstock.com/shutterstock/photos/1842271261/display_1500/stock-photo-indian-sweet-gulab-jamun-closeup-view-1842271261.jpg",
            text: "Gulab jamun is a sweet confectionery or dessert, originating in Persia and then later introduced to the Indian subcontinent. It is popular in India, Pakistan as well as Myanmar.",
        },
        {
            id: 73,
            name: "Burger",
            category: "Home",
            image: "https://www.thecookierookie.com/wp-content/uploads/2023/04/featured-stovetop-burgers-recipe.jpg",
            text: "A hamburger, or simply burger, is a sandwich consisting of fillings—usually a patty of ground meat, typically beef—placed inside a sliced bun or bread roll. ",
        },

        {
            id: 74,
            name: "Dhadak",
            category: "Home",
            image: "https://media.vogue.in/wp-content/uploads/2019/06/Dhadak-featured-option-1920x1080.jpg",
            text: "Madhu and Parthavi fall in love but face opposition from their families due to their differing social status. In a bid to unite, they elope but Parthavi's father and brother stay on their tail.",
        },
        {
            id: 75,
            name: "PK",
            category: "Home",
            image: "https://ecx.images-amazon.com/images/I/61dvTt4e4NL.jpg",
            text: "Produced on a budget of ₹1.22 billion, PK was the first Indian film to gross more than ₹7 billion and US$100 million worldwide. At the time of its release, it emerged as the highest-grossing Indian film of all time. The film's final worldwide gross was ₹769.89 crore (US$118.92 million).An innocent alien lands on Earth but loses his communication device. He meets Jaggu, a heartbroken reporter, and tries to find his device. With time, he raises many thought-provoking questions.",
        },
        {
            id: 76,
            name: "Gangubai",
            category: "Home",
            image: "https://i.ytimg.com/vi/W7tV197RnXg/hqdefault.jpg",
            text: "the film grossed ₹153.69 crore at the domestic box office and ₹209.77 globally emerging as a major commercial success. Numerous publications listed Gangubai Kathiawadi and Bhatt's performance in the film on various year-end best films and performances lists of 2022.",
        },
        {
            id: 77,
            name: "Barfi",
            category: "Home",
            image: "https://www.mygoodtimes.in/wp-content/uploads/2019/09/Barfi-e1568293729597.jpg",
            text: "Barfi forms a special bond with Jhilmil, a girl with autism. When Barfi's old flame walks back into his life, it causes misunderstandings between Jhilmil and him.",
        },
        {
            id: 78,
            name: "Mother India",
            category: "Home",
            image: "https://m.media-amazon.com/images/M/MV5BNmM5NzkzNjUtMjJlZC00ZmY0LWJlMjUtN2QyY2IyZDIyYjUwXkEyXkFqcGdeQXVyODMyODMxNDY@._V1_.jpg",
            text: "Mother India played a key role in shaping the young Republic of India's national identity in its early years following independence from the British Raj, due to how the film was able to successfully convey a sense of Indian nationalism to the urban and rural masses.",
        },

        {
            id: 79,
            category: "Technology",
            name: "Space Exploration and Mars Missions",
            image: "https://cdn.mos.cms.futurecdn.net/tsRQNTJ8MhRUm32taXTdjm.jpg",
            text: "Learn about recent developments in space exploration, including Mars missions, space tourism, and the search for extraterrestrial life.This article explores recent breakthroughs in the field of quantum computing, including advancements in qubits and quantum algorithms, and their potential to revolutionize computing as we know it.Since then, AI has been used to help sequence RNA for vaccines and model human speech, technologies that rely on model- and algorithm-based machine learning and increasingly focus on perception, reasoning and generalization. With innovations like these, AI has re-taken center stage like never before — and it won’t cede the spotlight anytime soon.Manufacturing has been benefiting from AI for years. With AI-enabled robotic arms and other manufacturing bots dating back to the 1960s and 1970s, the industry has adapted well to the powers of AI. These industrial robots typically work alongside humans to perform a limited range of tasks like assembly and stacking, and predictive analysis sensors keep equipment running smoothly.Journalism is harnessing AI too, and will continue to benefit from it. One example can be seen in The Associated Press’ use of Automated Insights, which produces thousands of earning reports stories per year. But as generative AI writing tools, such as ChatGPT, enter the market, questions about their use in journalism abound."
        },
        {
            id: 80,
            category: "Technology",
            name: "Robotics and Automation Trends",
            image: "https://3.imimg.com/data3/IT/MI/MY-17635245/robotics-technology-srt-3-months-500x500.png",
            text: "Explore the latest trends in robotics and automation technologies, from self-driving cars to robotic healthcare assistants and manufacturing automation.This article explores recent breakthroughs in the field of quantum computing, including advancements in qubits and quantum algorithms, and their potential to revolutionize computing as we know it.Since then, AI has been used to help sequence RNA for vaccines and model human speech, technologies that rely on model- and algorithm-based machine learning and increasingly focus on perception, reasoning and generalization. With innovations like these, AI has re-taken center stage like never before — and it won’t cede the spotlight anytime soon.Manufacturing has been benefiting from AI for years. With AI-enabled robotic arms and other manufacturing bots dating back to the 1960s and 1970s, the industry has adapted well to the powers of AI. These industrial robots typically work alongside humans to perform a limited range of tasks like assembly and stacking, and predictive analysis sensors keep equipment running smoothly.Journalism is harnessing AI too, and will continue to benefit from it. One example can be seen in The Associated Press’ use of Automated Insights, which produces thousands of earning reports stories per year. But as generative AI writing tools, such as ChatGPT, enter the market, questions about their use in journalism abound."
        },
        {
            id: 81,
            category: "Technology",
            name: "Blockchain Technology and Cryptocurrency",
            image: "https://www.openaccessgovernment.org/wp-content/uploads/2019/10/dreamstime_xxl_126050352.jpg",
            text: "Explore the fundamentals of blockchain technology and the impact of cryptocurrencies like Bitcoin on the financial and technology sectors.This article explores recent breakthroughs in the field of quantum computing, including advancements in qubits and quantum algorithms, and their potential to revolutionize computing as we know it.Since then, AI has been used to help sequence RNA for vaccines and model human speech, technologies that rely on model- and algorithm-based machine learning and increasingly focus on perception, reasoning and generalization. With innovations like these, AI has re-taken center stage like never before — and it won’t cede the spotlight anytime soon.Manufacturing has been benefiting from AI for years. With AI-enabled robotic arms and other manufacturing bots dating back to the 1960s and 1970s, the industry has adapted well to the powers of AI. These industrial robots typically work alongside humans to perform a limited range of tasks like assembly and stacking, and predictive analysis sensors keep equipment running smoothly.Journalism is harnessing AI too, and will continue to benefit from it. One example can be seen in The Associated Press’ use of Automated Insights, which produces thousands of earning reports stories per year. But as generative AI writing tools, such as ChatGPT, enter the market, questions about their use in journalism abound."
        },
        {
            id: 82,
            category: "Home",
            name: "Healthy Habits for a Balanced Lifestyle",
            image: "https://possible.in/wp-content/uploads/2020/11/balanced-diet-chart-1-1024x683.jpg",
            text: "Explore healthy habits that contribute to a bscover practices that promote overall well-being."
        },
        {
            id: 83,
            category: "Fitness",
            title: "Nutrition Myths Debunked",
            image: "https://www.nocofitness.com/wp-content/uploads/2018/11/Nutrition-Myths-Debunked.jpg",
            content: "Separate fact from fiction as we debunk common nutrition myths. Learn about proper dietary choices and get evidence-based insights into maintaining a healthy diet.Flexibility workouts, such as stretching, don’t directly contribute to heart health. What they do is benefit musculoskeletal health, which enables you to stay flexible and free from joint pain, cramping and other muscular issues. That flexibility is a critical part of being able to maintain aerobic exercise and resistance training, says Stewart."
        },
        {
            id: 84,
            category: "Fitness",
            title: "Mind-Body Connection in Fitness",
            image: "https://www.hhhealth.com/wp-content/uploads/2022/07/AdobeStock_295859885-1024x480.jpeg",
            content: "Understand the mind-body connection in fitness and how mental well-being influences physical performance. Learn techniques for enhancing focus and motivation during workouts.Flexibility workouts, such as stretching, don’t directly contribute to heart health. What they do is benefit musculoskeletal health, which enables you to stay flexible and free from joint pain, cramping and other muscular issues. That flexibility is a critical part of being able to maintain aerobic exercise and resistance training, says Stewart."
        },




    ]);
    return (
        <>
            <Store.Provider value={[data, setData]}>
                {props.children}

            </Store.Provider>
        </>
    )

}
export default ConntextStore