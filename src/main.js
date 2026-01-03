// --- 1. CIJELA BAZA VOZILA ---
const inventory = [
    // --- EXOTIC & HYPERCARS (1-10) ---
    { id: 1, brand: "Lamborghini", model: "Aventador SVJ", price: 520000, type: "hypercar", img: "img/LamborghiniAventadorSVJ.jpg", desc: "Exotic Hypercar<br>Godina:2022<br>Gorivo:Benzinac<br>Motor:V12<br>Transmisija:Automatik" },
    { id: 2, brand: "Aston Martin", model: "Valkyrie", price: 3000000, type: "hypercar", img: "img/AstonMartinValkyrie.webp", desc: "HyperSportaš<br>Godina:2021<br>Gorivo:Hibrid<br>Motor:V12 TwinTurbo<br>Transmisija:Sekvencijalni" },
    { id: 3, brand: "Bugatti", model: "Chiron", price: 2700000, type: "exotic", img: "img/bugattichiron.jpg", desc: "HyperSportaš<br>Godina:2020<br>Gorivo:Benzinac<br>Motor:W16 Quadturbo<br>Transmisija:Automatik" },
    { id: 4, brand: "Ferrari", model: "LaFerrari Aperta", price: 1400000, type: "exotic", img: "img/laferrari-aperta.jpg", desc: "HyperSportaš<br>Godina:2017<br>Gorivo:Hibrid<br>Motor:V12<br>Transmisija:Automatik" },
    { id: 5, brand: "Koenigsegg", model: "Jesko Attack", price: 3200000, type: "hypercar", img: "img/KoenigseggJeskoAttack.jpg", desc: "Extreme Hypercar<br>Godina:2024<br>Gorivo:Benzinac/E85<br>Motor:V8 TwinTurbo<br>Transmisija:LST 9-brzina" },
    { id: 6, brand: "Pagani", model: "Huayra Roadster BC", price: 3500000, type: "hypercar", img: "img/pagani-huayra-roadster-bc.avif", desc: "Art on Wheels<br>Godina:2022<br>Gorivo:Benzinac<br>Motor:V12 TwinTurbo<br>Transmisija:Sekvencijalni" },
    { id: 7, brand: "McLaren", model: "P1", price: 1500000, type: "exotic", img: "img/MCLarenP1.jpg", desc: "Hyper Hybrid<br>Godina:2015<br>Gorivo:Hibrid<br>Motor:V8 TwinTurbo<br>Transmisija:Automatik" },
    { id: 8, brand: "Rimac", model: "Nevera", price: 2100000, type: "exotic", img: "img/RIMACNEVERA.jpg", desc: "Electric Hypercar<br>Godina:2023<br>Gorivo:Električno<br>Motor:4 Elektromotora<br>Transmisija:Single Speed" },
    { id: 9, brand: "Ferrari", model: "SF90 Stradale", price: 600000, type: "hybrid", img: "img/ferrariSF90Stradale.avif", desc: "Hybrid Supercar<br>Godina:2025<br>Gorivo:Plug-in Hybrid<br>Motor:V8 TwinTurbo<br>Transmisija:Automatik" },
    { id: 10, brand: "Mercedes-AMG", model: "One", price: 2700000, type: "exotic", img: "img/MercedesAMGOne.jpg", desc: "F1 for the road<br>Godina:2023<br>Gorivo:Hibrid<br>Motor:1.6 V6 E-Turbo<br>Transmisija:Sekvencijalni" },

    // --- SPORTCAR (11-25) --- NASTAVI DALJE POD BROJEM 13 SAM STAO
    { id: 11, brand: "Porsche", model: "911 GT3 RS", price: 223000, type: "supersport", img: "img/Porsche911GT3RS.jpg", desc: "Track-Focused Sportscar<br>Godina:2023<br>Gorivo:Benzinac<br>Motor:4.0 Boxer<br>Transmisija:PDK" },
    { id: 12, brand: "Mercedes-AMG", model: "GT Black Series", price: 350000, type: "supersport", img: "img/MercedesGTBlackSeries.jpg", desc: "Super Sportscar<br>Godina:2021<br>Gorivo:Benzinac<br>Motor:V8 Flat-Plane BiTurbo<br>Transmisija:DCT 7-brzina" },
    { id: 13, brand: "Audi", model: "R8 V10 Performance", price: 210000, type: "supersport", img: "img/Audi-R8-V10.jpg", desc: "Super Sportscar<br>Godina:2023<br>Gorivo:Benzinac<br>Motor:5.2 V10<br>Transmisija:S-tronic" },
    { id: 14, brand: "Nissan", model: "GT-R Nismo", price: 220000, type: "supersport", img: "img/Nissan-GT-R-NISMO-2.jpg", desc: "JDM Legend<br>Godina:2024<br>Gorivo:Benzinac<br>Motor:V6 TwinTurbo<br>Transmisija:Automatik" },
    { id: 15, brand: "BMW", model: "M4 CSL", price: 170000, type: "supersport", img: "img/BMWM4CSL.png", desc: "Lightweight Sportscar<br>Godina:2023<br>Gorivo:Benzinac<br>Motor:3.0 TwinPower Turbo<br>Transmisija:Automatik" },
    { id: 16, brand: "Chevrolet", model: "Corvette Z06", price: 130000, type: "supersport", img: "img/ChevroletCorvetteZ06.jpg", desc: "American Supercar<br>Godina:2023<br>Gorivo:Benzinac<br>Motor:5.5 V8<br>Transmisija:Automatik" },
    { id: 17, brand: "Lotus", model: "Emira", price: 95000, type: "supersport", img: "img/Lotusemira.webp", desc: "Analog Sportscar<br>Godina:2023<br>Gorivo:Benzinac<br>Motor:3.5 V6 Supercharged<br>Transmisija:Ručni" },
    { id: 18, brand: "Jaguar", model: "F-Type R", price: 110000, type: "supersport", img: "img/jaguarftype.jpg", desc: "British Muscle<br>Godina:2024<br>Gorivo:Benzinac<br>Motor:V8 Supercharged<br>Transmisija:Automatik" },
    { id: 19, brand: "Maserati", model: "MC20", price: 240000, type: "supersport", img: "img/maseratimc20.avif", desc: "Italian Excellence<br>Godina:2023<br>Gorivo:Benzinac<br>Motor:V6 Nettuno<br>Transmisija:DCT" },
    { id: 20, brand: "Lamborghini", model: "Huracan STO", price: 330000, type: "supersport", img: "img/LamborghiniHuracanSTO.jpg", desc: "Road-legal Racecar<br>Godina:2022<br>Gorivo:Benzinac<br>Motor:V10<br>Transmisija:Automatik" },
    { id: 21, brand: "Porsche", model: "718 Cayman GT4 RS", price: 160000, type: "supersport", img: "img/Porsche718CaymanGT4RS.jpeg", desc: "Mid-engine Master<br>Godina:2023<br>Gorivo:Benzinac<br>Motor:4.0 Boxer<br>Transmisija:PDK" },
    { id: 22, brand: "Mercedes-AMG", model: "C63 S", price: 110000, type: "supersport", img: "img/mercedesamgc63.avif", desc: "Performance Sedan<br>Godina:2024<br>Gorivo:Hibrid<br>Motor:2.0 Turbo E-Performance<br>Transmisija:MCT" },
    { id: 23, brand: "Audi", model: "RS5 Coupe", price: 95000, type: "supersport", img: "img/AudiRS5.jpg", desc: "Grand Tourer<br>Godina:2023<br>Gorivo:Benzinac<br>Motor:2.9 V6 TwinTurbo<br>Transmisija:Tiptronic" },
    { id: 24, brand: "BMW", model: "M2 Competition", price: 75000, type: "supersport", img: "img/BMWM2Competition.webp", desc: "Compact Power<br>Godina:2024<br>Gorivo:Benzinac<br>Motor:3.0 L6 TwinTurbo<br>Transmisija:Ručni" },
    { id: 25, brand: "Ford", model: "Mustang Dark Horse", price: 70000, type: "supersport", img: "img/MustangDarkHorse.jpeg", desc: "V8 American Muscle<br>Godina:2024<br>Gorivo:Benzinac<br>Motor:5.0 V8 Coyote<br>Transmisija:Ručni" },

    // --- LUXURY (26-35) ---
    { id: 26, brand: "Rolls-Royce", model: "Phantom", price: 450000, type: "luxury", img: "img/RRPhantom.jpg", desc: "Ultra Luxury Limousine<br>Godina:2023<br>Gorivo:Benzinac<br>Motor:V12 Turbo<br>Transmisija:Automatik" },
    { id: 27, brand: "Mercedes-Maybach", model: "S 680", price: 230000, type: "luxury", img: "img/Mercedes-Maybach.jpeg", desc: "Ultimate Luxury<br>Godina:2024<br>Gorivo:Benzinac<br>Motor:6.0 V12 BiTurbo<br>Transmisija:9G-Tronic" },
    { id: 28, brand: "Bentley", model: "Flying Spur", price: 240000, type: "luxury", img: "img/bentleyflyingspur.webp", desc: "Grand Luxury Sedan<br>Godina:2023<br>Gorivo:Benzinac<br>Motor:W12 TwinTurbo<br>Transmisija:Automatik" },
    { id: 29, brand: "Rolls-Royce", model: "Ghost", price: 350000, type: "luxury", img: "img/Rolls-RoyceGhost.webp", desc: "Executive Luxury<br>Godina:2022<br>Gorivo:Benzinac<br>Motor:V12<br>Transmisija:Automatik" },
    { id: 30, brand: "Mercedes-Benz", model: "S-Class", price: 130000, type: "luxury", img: "img/MercedesSClass.jpg", desc: "High-end Sedan<br>Godina:2024<br>Gorivo:Dizel<br>Motor:400d 4MATIC<br>Transmisija:Automatik" },
    { id: 31, brand: "BMW", model: "i7", price: 150000, type: "luxury", img: "img/BMWi7.webp", desc: "Digital Luxury<br>Godina:2023<br>Gorivo:Električno<br>Motor:M70 xDrive<br>Transmisija:Direct Drive" },
    { id: 32, brand: "Audi", model: "A8 L Horch", price: 180000, type: "luxury", img: "img/AudiA8LHorch.jpg", desc: "Exclusive Sedan<br>Godina:2023<br>Gorivo:Benzinac<br>Motor:V8 BiTurbo<br>Transmisija:Automatik" },
    { id: 33, brand: "Škoda", model: "Superb L&K", price: 42000, type: "luxury", img: "img/ŠkodaSuperb.webp", desc: "Premium Limousine<br>Godina:2023<br>Gorivo:Dizel<br>Motor:2.0 TDI<br>Transmisija:DSG" },
    { id: 34, brand: "Range Rover", model: "SV Autobiography", price: 210000, type: "luxury", img: "img/RangeRoverSVAutobiography.jpeg", desc: "Luxury SUV Offroad<br>Godina:2024<br>Gorivo:Hibrid<br>Motor:V8 Turbo<br>Transmisija:Automatik" },
    { id: 35, brand: "Genesis", model: "G90", price: 100000, type: "luxury", img: "img/genesisg90.avif", desc: "Korean Luxury<br>Godina:2023<br>Gorivo:Benzinac<br>Motor:V6 Supercharged<br>Transmisija:Automatik" },

    // --- SEDAN (36-50) ---
    { id: 36, brand: "Audi", model: "RS6 Avant", price: 145000, type: "sedan", img: "img/AUDIRS6Avant.webp", desc: "Performance Wagon<br>Godina:2024<br>Gorivo:Benzinac<br>Motor:V8 BiTurbo<br>Transmisija:Automatik" },
    { id: 37, brand: "Audi", model: "A3", price: 32000, type: "sedan", img: "img/AudiA3.jpg", desc: "Compact Sedan<br>Godina:2022<br>Gorivo:Dizel<br>Motor:2.0 TDI<br>Transmisija:DSG" },
    { id: 38, brand: "Audi", model: "A4", price: 45000, type: "sedan", img: "img/AudiA4.jpg", desc: "Business Sedan<br>Godina:2023<br>Gorivo:Dizel<br>Motor:2.0 TDI<br>Transmisija:DSG" },
    { id: 39, brand: "BMW", model: "Seria 1", price: 30000, type: "sedan", img: "img/BMWSeria1.webp", desc: "Compact Sport Sedan<br>Godina:2022<br>Gorivo:Benzinac<br>Motor:1.5 Turbo<br>Transmisija:Automatik" },
    { id: 40, brand: "BMW", model: "Seria 3", price: 48000, type: "sedan", img: "img/BMWSeria3.jpg", desc: "Sport Sedan<br>Godina:2023<br>Gorivo:Dizel<br>Motor:2.0 TwinPower<br>Transmisija:Automatik" },
    { id: 41, brand: "Mercedes-Benz", model: "E-Class", price: 70000, type: "sedan", img: "img/MercedesE-Class.jpg", desc: "Executive Sedan<br>Godina:2024<br>Gorivo:Dizel<br>Motor:E 220d<br>Transmisija:9G-Tronic" },
    { id: 42, brand: "Mercedes-Benz", model: "C-Class", price: 55000, type: "sedan", img: "img/mercedes-c-class.webp", desc: "Business Sedan<br>Godina:2023<br>Gorivo:Benzinac<br>Motor:C 200<br>Transmisija:Automatik" },
    { id: 43, brand: "Renault", model: "Clio", price: 18000, type: "sedan", img: "img/RenaultClio.jpeg", desc: "City Hatchback<br>Godina:2022<br>Gorivo:Benzinac<br>Motor:1.0 TCe<br>Transmisija:Ručni" },
    { id: 44, brand: "Renault", model: "Megane", price: 25000, type: "sedan", img: "img/RenaultMegan.jpg", desc: "Compact Family Car<br>Godina:2022<br>Gorivo:Dizel<br>Motor:1.5 dCi<br>Transmisija:Ručni" },
    { id: 45, brand: "Škoda", model: "Octavia", price: 28000, type: "sedan", img: "img/ŠkodaOctavia.jpeg", desc: "Family Sedan<br>Godina:2022<br>Gorivo:Dizel<br>Motor:2.0 TDI<br>Transmisija:DSG" },
    { id: 46, brand: "VW", model: "Golf 8", price: 30000, type: "sedan", img: "img/VWgolf.jpg", desc: "Iconic Hatchback<br>Godina:2023<br>Gorivo:Benzinac<br>Motor:1.5 TSI<br>Transmisija:DSG" },
    { id: 47, brand: "VW", model: "Passat B8", price: 40000, type: "sedan", img: "img/VWpassat.jpg", desc: "Business Sedan<br>Godina:2023<br>Gorivo:Dizel<br>Motor:2.0 TDI<br>Transmisija:DSG" },
    { id: 48, brand: "Mercedes-Benz", model: "A-Class Sedan", price: 45000, type: "sedan", img: "img/mercedes-a-class-sedan.webp", desc: "Compact Executive<br>Godina:2023<br>Gorivo:Benzinac<br>Motor:A 200<br>Transmisija:Automatik" },
    { id: 49, brand: "Alfa Romeo", model: "Giulia Quadrifoglio", price: 90000, type: "sedan", img: "img/AlfaGiuliaQuadrifoglio.jpg", desc: "Sport Sedan<br>Godina:2023<br>Gorivo:Benzinac<br>Motor:2.9 V6 TwinTurbo<br>Transmisija:Automatik" },
    { id: 50, brand: "Toyota", model: "Camry", price: 40000, type: "sedan", img: "img/ToyotaCamry.avif", desc: "Reliable Sedan<br>Godina:2023<br>Gorivo:Hibrid<br>Motor:2.5 Hybrid<br>Transmisija:e-CVT" },

    // --- COUPE & CABRIO (51-60) ---
    { id: 51, brand: "BMW", model: "M8 Competition", price: 160000, type: "coupe", img: "img/bmw-m8-competition.avif", desc: "Luxury Sport Coupe<br>Godina:2023<br>Gorivo:Benzinac<br>Motor:V8 BiTurbo<br>Transmisija:Automatik" },
    { id: 52, brand: "Mercedes-AMG", model: "CLE 53", price: 90000, type: "coupe", img: "img/Mercedes-AMG-CLE-53.jpg", desc: "Sport Coupe<br>Godina:2024<br>Gorivo:Benzinac<br>Motor:3.0 L6 TwinTurbo<br>Transmisija:Automatik" },
    { id: 53, brand: "Toyota", model: "GR Supra", price: 70000, type: "coupe", img: "img/Toyota-Supra.jpg", desc: "Sport Coupe<br>Godina:2022<br>Gorivo:Benzinac<br>Motor:3.0 TwinScroll<br>Transmisija:Automatik" },
    { id: 54, brand: "Porsche", model: "911 Targa 4S", price: 155000, type: "cabrio", img: "img/porsche-911-targa-4s.jpg", desc: "Luxury Cabrio<br>Godina:2023<br>Gorivo:Benzinac<br>Motor:3.0 Boxer<br>Transmisija:PDK" },
    { id: 55, brand: "Mazda", model: "MX-5 RF", price: 38000, type: "cabrio", img: "img/MazdaMX-5 RF.avif", desc: "Lightweight Roadster<br>Godina:2023<br>Gorivo:Benzinac<br>Motor:2.0 SkyActiv<br>Transmisija:Ručni" },
    { id: 56, brand: "Mercedes-AMG", model: "SL 63", price: 195000, type: "cabrio", img: "img/mercedes-amg-sl-63.avif", desc: "Luxury Roadster<br>Godina:2024<br>Gorivo:Benzinac<br>Motor:V8 BiTurbo<br>Transmisija:Automatik" },
    { id: 57, brand: "Ferrari", model: "Roma Spider", price: 250000, type: "cabrio", img: "img/FerrariRoma-Spider.jpg", desc: "Italian Elegance<br>Godina:2024<br>Gorivo:Benzinac<br>Motor:V8 TwinTurbo<br>Transmisija:DCT" },
    { id: 58, brand: "Lexus", model: "LC 500", price: 110000, type: "coupe", img: "img/Lexus-LC-015.avif", desc: "V8 Grand Tourer<br>Godina:2023<br>Gorivo:Benzinac<br>Motor:5.0 V8<br>Transmisija:Automatik" },
    { id: 59, brand: "Audi", model: "TT RS", price: 80000, type: "coupe", img: "img/AudiTTRS.jpg", desc: "Sport Compact<br>Godina:2022<br>Gorivo:Benzinac<br>Motor:2.5 TFSI L5<br>Transmisija:S-tronic" },
    { id: 60, brand: "Bentley", model: "Continental GT Convertible", price: 280000, type: "cabrio", img: "img/BentlyContinentalGTConvertible.jpg", desc: "Ultra Luxury Cabrio<br>Godina:2023<br>Gorivo:Benzinac<br>Motor:W12<br>Transmisija:Automatik" },

    // --- SUVS & OFFROAD (61-75) ---
    { id: 61, brand: "Audi", model: "Q5", price: 55000, type: "suv", img: "img/AudiQ5.jpg", desc: "Luxury SUV<br>Godina:2023<br>Gorivo:Dizel<br>Motor:2.0 TDI<br>Transmisija:DSG" },
    { id: 62, brand: "KIA", model: "Sportage", price: 35000, type: "suv", img: "img/KiaSportage.avif", desc: "Family SUV<br>Godina:2023<br>Gorivo:Benzinac<br>Motor:1.6 T-GDI<br>Transmisija:Ručni" },
    { id: 63, brand: "Nissan", model: "Qashqai", price: 33000, type: "suv", img: "img/NissanQashqai.webp", desc: "City Crossover<br>Godina:2023<br>Gorivo:Hibrid<br>Motor:e-Power<br>Transmisija:Automatik" },
    { id: 64, brand: "VW", model: "Tiguan", price: 38000, type: "suv", img: "img/VWtiguan.avif", desc: "All-round SUV<br>Godina:2023<br>Gorivo:Dizel<br>Motor:2.0 TDI<br>Transmisija:DSG" },
    { id: 65, brand: "Mercedes-Benz", model: "GLE Coupe", price: 95000, type: "suv", img: "img/MercedesGLECoupe.png", desc: "Luxury SUV Coupe<br>Godina:2024<br>Gorivo:Dizel<br>Motor:350d 4MATIC<br>Transmisija:9G-Tronic" },
    { id: 66, brand: "Mercedes-Benz", model: "G-Class G63", price: 220000, type: "offroad", img: "img/mercedes-benzGclass.webp", desc: "Luxury Offroad<br>Godina:2024<br>Gorivo:Benzinac<br>Motor:V8 BiTurbo<br>Transmisija:Automatik" },
    { id: 67, brand: "Land Rover", model: "Defender 110", price: 90000, type: "offroad", img: "img/Defender110.avif", desc: "Ultimate Offroad<br>Godina:2023<br>Gorivo:Dizel<br>Motor:3.0 L6 Turbo<br>Transmisija:Automatik" },
    { id: 68, brand: "Jeep", model: "Wrangler Rubicon", price: 80000, type: "offroad", img: "img/JeepWranglerRubicon.avif", desc: "Classic Offroad<br>Godina:2023<br>Gorivo:Benzinac<br>Motor:2.0 Turbo<br>Transmisija:Automatik" },
    { id: 69, brand: "Toyota", model: "Land Cruiser 300", price: 110000, type: "offroad", img: "img/ToyotaLandCruiser300.webp", desc: "Legendary Reliability<br>Godina:2024<br>Gorivo:Dizel<br>Motor:V6 TwinTurbo<br>Transmisija:Automatik" },
    { id: 70, brand: "Lamborghini", model: "Urus S", price: 260000, type: "suv", img: "img/LamborghiniUrusS.jpg", desc: "Super SUV<br>Godina:2023<br>Gorivo:Benzinac<br>Motor:V8 BiTurbo<br>Transmisija:Automatik" },
    { id: 71, brand: "BMW", model: "X5 M Competition", price: 140000, type: "suv", img: "img/BMWX5MCompetition.avif", desc: "Performance SUV<br>Godina:2024<br>Gorivo:Benzinac<br>Motor:V8 TwinPower Turbo<br>Transmisija:Automatik" },
    { id: 72, brand: "Porsche", model: "Cayenne Turbo GT", price: 210000, type: "suv", img: "img/PorscheCayenne Turbo GT.jpg", desc: "Hyper SUV<br>Godina:2024<br>Gorivo:Benzinac<br>Motor:V8 BiTurbo<br>Transmisija:Tiptronic" },
    { id: 73, brand: "Mercedes-Benz", model: "GLS 600 Maybach", price: 200000, type: "suv", img: "img/mercedes-maybachGLS.avif", desc: "Luxury SUV<br>Godina:2023<br>Gorivo:Benzinac<br>Motor:V8 BiTurbo<br>Transmisija:Automatik" },
    { id: 74, brand: "Ford", model: "Bronco Raptor", price: 95000, type: "offroad", img: "img/FordBroncoRaptor.jpg", desc: "Desert Racer<br>Godina:2023<br>Gorivo:Benzinac<br>Motor:3.0 EcoBoost V6<br>Transmisija:Automatik" },
    { id: 75, brand: "Cadillac", model: "Escalade-V", price: 160000, type: "suv", img: "img/cadillac-escalade.jpg", desc: "American Luxury SUV<br>Godina:2023<br>Gorivo:Benzinac<br>Motor:6.2 Supercharged V8<br>Transmisija:Automatik" },

    // --- PICKUP (76-80) ---
    { id: 76, brand: "Ford", model: "F-150 Lightning", price: 85000, type: "pickup", img: "img/Ford-150Lightning.webp", desc: "Electric Pickup<br>Godina:2023<br>Gorivo:Električno<br>Motor:Dual Motor<br>Transmisija:Direct Drive" },
    { id: 77, brand: "RAM", model: "1500 TRX", price: 110000, type: "pickup", img: "img/RAM1500TRX.avif", desc: "Performance Pickup<br>Godina:2022<br>Gorivo:Benzinac<br>Motor:6.2 V8 Supercharged<br>Transmisija:Automatik" },
    { id: 78, brand: "Toyota", model: "Hilux GR Sport", price: 55000, type: "pickup", img: "img/Toyota-Hilux.jpg", desc: "Durable Pickup<br>Godina:2024<br>Gorivo:Dizel<br>Motor:2.8 D-4D<br>Transmisija:Automatik" },
    { id: 79, brand: "Mercedes-Benz", model: "X-Class Brabus", price: 80000, type: "pickup", img: "img/MercedesX-ClassBrabus.jpg", desc: "Luxury Pickup<br>Godina:2020<br>Gorivo:Dizel<br>Motor:V6 350d<br>Transmisija:Automatik" },
    { id: 80, brand: "Rivian", model: "R1T", price: 90000, type: "pickup", img: "img/R1T.jpg", desc: "Adventure Electric Pickup<br>Godina:2023<br>Gorivo:Električno<br>Motor:Quad-Motor<br>Transmisija:Direct Drive" },

    // --- ELECTRIC & HYBRID (81-90) ---
    { id: 81, brand: "Tesla", model: "Model S Plaid", price: 110000, type: "electric", img: "img/TeslaModelSPlaid2023.webp", desc: "Performance Electric<br>Godina:2023<br>Gorivo:Električno<br>Motor:Tri-Motor 1020HP<br>Transmisija:Direct Drive" },
    { id: 82, brand: "Mercedes-Benz", model: "EQS 580", price: 130000, type: "electric", img: "img/MercEQS580.webp", desc: "Electric Luxury Sedan<br>Godina:2024<br>Gorivo:Električno<br>Motor:Dual Motor 4MATIC<br>Transmisija:Direct Drive" },
    { id: 83, brand: "Toyota", model: "Corolla Hybrid", price: 26000, type: "hybrid", img: "img/ToyotaCorola.webp", desc: "Reliable Hybrid<br>Godina:2023<br>Gorivo:Hibrid<br>Motor:1.8 HEV<br>Transmisija:e-CVT" },
    { id: 84, brand: "Toyota", model: "Yaris Hybrid", price: 22000, type: "hybrid", img: "img/ToyotaYarisHybrid.jpg", desc: "City Hybrid<br>Godina:2023<br>Gorivo:Hibrid<br>Motor:1.5 HEV<br>Transmisija:e-CVT" },
    { id: 85, brand: "Porsche", model: "Taycan Turbo S", price: 195000, type: "electric", img: "img/porsche-taycan.webp", desc: "Sport Electric<br>Godina:2024<br>Gorivo:Električno<br>Motor:Dual Motor<br>Transmisija:2-brzinski" },
    { id: 86, brand: "Audi", model: "RS e-tron GT", price: 155000, type: "electric", img: "img/Audi_e-tron_GT.jpg", desc: "Electric Grand Tourer<br>Godina:2023<br>Gorivo:Električno<br>Motor:Dual Motor<br>Transmisija:Automatik" },
    { id: 87, brand: "BMW", model: "iX M60", price: 135000, type: "electric", img: "img/BMWiX M60.webp", desc: "Electric Performance SUV<br>Godina:2024<br>Gorivo:Električno<br>Motor:Dual Motor<br>Transmisija:Direct Drive" },
    { id: 88, brand: "Lucid", model: "Air Sapphire", price: 250000, type: "electric", img: "img/Lucid Air Sapphire.webp", desc: "Hyper Electric Sedan<br>Godina:2024<br>Gorivo:Električno<br>Motor:Tri-Motor 1200HP+<br>Transmisija:Direct Drive" },
    { id: 89, brand: "Mercedes-Benz", model: "EQG", price: 180000, type: "electric", img: "img/MercEQG.jpg", desc: "Electric G-Class<br>Godina:2025<br>Gorivo:Električno<br>Motor:Quad-Motor<br>Transmisija:Automatik" },
    { id: 90, brand: "McLaren", model: "Artura", price: 230000, type: "hybrid", img: "img/McLarenArtura.jpg", desc: "Hybrid Supercar<br>Godina:2023<br>Gorivo:Plug-in Hybrid<br>Motor:V6 TwinTurbo<br>Transmisija:Automatik" },

    // --- TRUCKS & BUSES (91-95) ---
    { id: 91, brand: "Mercedes-Benz", model: "Actros L", price: 170000, type: "trucks", img: "img/MercActrosL.jpg", desc: "Premium Truck<br>Godina:2024<br>Gorivo:Dizel<br>Motor:OM 471 L6<br>Transmisija:Powershift 3" },
    { id: 92, brand: "Scania", model: "770S V8", price: 210000, type: "trucks", img: "img/Scania770SV8.webp", desc: "Powerful Truck<br>Godina:2022<br>Gorivo:Dizel<br>Motor:16.4 V8<br>Transmisija:Opticruise" },
    { id: 93, brand: "MAN", model: "Lion's Coach", price: 360000, type: "buses", img: "img/MAN-Lions-Coach.jpg", desc: "Luxury Touring Bus<br>Godina:2023<br>Gorivo:Dizel<br>Motor:12.4 L6<br>Transmisija:TipMatic" },
    { id: 94, brand: "Tesla", model: "Semi", price: 250000, type: "trucks", img: "img/Semi.jpg", desc: "Electric Truck<br>Godina:2023<br>Gorivo:Električno<br>Motor:4 Elektromotora<br>Transmisija:Direct Drive" },
    { id: 95, brand: "Mercedes-Benz", model: "Tourismo", price: 300000, type: "buses", img: "img/MercTourismo.jpg", desc: "Standard Touring Bus<br>Godina:2023<br>Gorivo:Dizel<br>Motor:OM 470<br>Transmisija:Automatik" },

    // --- MOTORS, CAMPERS, BOATS & AIRCRAFTS (96-101) ---
    { id: 96, brand: "Ducati", model: "Panigale V4 R", price: 45000, type: "motorcycles", img: "img/DucatiPanigale.jpg", desc: "Racing Motor<br>Godina:2023<br>Gorivo:Benzinac<br>Motor:1.1L V4<br>Transmisija:Sekvencijalni" },
    { id: 97, brand: "Hymer", model: "B-Class MasterLine", price: 190000, type: "campers", img: "img/B-Class MasterLine.png", desc: "Luxury Camper<br>Godina:2024<br>Gorivo:Dizel<br>Motor:2.2 MultiJet<br>Transmisija:Automatik" },
    { id: 98, brand: "Riva", model: "Aquarama Super", price: 800000, type: "boats", img: "img/AquaramaSuper.jpg", desc: "Classic Luxury Boat<br>Godina:1972<br>Gorivo:Benzinac<br>Motor:Twin V8<br>Transmisija:Inboard" },
    { id: 99, brand: "Gulfstream", model: "G700", price: 78000000, type: "aircraft", img: "img/G700.jpg", desc: "Ultra Private Jet<br>Godina:2024<br>Gorivo:Jet A-1<br>Motor:Rolls-Royce Pearl<br>Transmisija:Jet Drive" },
    { id: 100, brand: "Mercedes-Benz", model: "V-Class Marco Polo", price: 95000, type: "vans", img: "img/V-Class Marco Polo.jpg", desc: "Camper Van<br>Godina:2024<br>Gorivo:Dizel<br>Motor:300d<br>Transmisija:9G-Tronic" },
    { id: 101, brand: "Cessna", model: "Citation Longitude", price: 29000000, type: "aircraft", img: "img/Citation Longitude.avif", desc: "Business Jet<br>Godina:2023<br>Gorivo:Jet A-1<br>Motor:Honeywell HTF7700L<br>Transmisija:Jet Drive" }
];

// --- 2. INITIALIZATION (DOM LOAD) ---
document.addEventListener('DOMContentLoaded', () => {
    initTheme();
    updateNav(); 
    initGlobalNavigation(); 
    updateCartCount(); 

    const carListContainer = document.getElementById('car-list');
    const detailsContainer = document.getElementById('details-content');
    const garageList = document.getElementById('garage-list');

    // --- LOGIKA ZA FILTRIRANJE I PRIKAZ ---
    if (carListContainer) {
        const params = new URLSearchParams(window.location.search);
        const typeFilter = params.get('type');
        const brandFilter = params.get('brand');
        const priceFilter = params.get('price');

        let filteredInventory = [...inventory];

        // 1. Filtriraj po tipu 
        if (typeFilter) {
            filteredInventory = filteredInventory.filter(car => car.type === typeFilter);
        }
        // 2. Filtriraj po brendu
        if (brandFilter) {
            filteredInventory = filteredInventory.filter(car => car.brand === brandFilter);
        }
        // 3. Filtriraj po cijeni
        if (priceFilter) {
            filteredInventory = filteredInventory.filter(car => car.price <= parseInt(priceFilter));
        }

        const isGallery = window.location.pathname.includes('gallery.html');
        const carsToRender = (isGallery || typeFilter || brandFilter || priceFilter) 
                             ? filteredInventory 
                             : filteredInventory.slice(0, 6);

        renderCards(carListContainer, carsToRender);
    }

    if (detailsContainer) renderDetails(detailsContainer);
    if (garageList) renderGarage();

    if (typeof AOS !== 'undefined') AOS.init({ duration: 800, once: true });
});

// --- 3. GLOBALNA NAVIGACIJA & HAMBURGER ---
function initGlobalNavigation() {
    document.body.addEventListener('click', (e) => {
        const hamburger = e.target.closest('#hamburger');
        const menu = document.getElementById('mobile-menu');

        // Toggle Hamburgera
        if (hamburger && menu) {
            hamburger.classList.toggle('active');
            menu.classList.toggle('open');
            document.body.style.overflow = menu.classList.contains('open') ? 'hidden' : 'auto';
        }
        
        if (e.target.closest('.mobile-links a')) {
            const activeBurger = document.getElementById('hamburger');
            const activeMenu = document.getElementById('mobile-menu');
            activeBurger?.classList.remove('active');
            activeMenu?.classList.remove('open');
            document.body.style.overflow = 'auto';
        }
    });
}

// --- 4. OSVJEŽAVANJE NAVIGACIJE (LOGIN STATUS) ---
function updateNav() {
    const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
    const user = localStorage.getItem('autosale_user');
    
    const navRight = document.querySelector('.nav-right');
    const garageLink = document.getElementById('garage-link');
    const mobileLinks = document.querySelector('.mobile-links');

    // 1. Logika za Garažu: Pokaži samo ako je ulogiran
    if (garageLink) {
        if (isLoggedIn) {
            garageLink.style.display = 'block'; 
        } else {
            garageLink.style.display = 'none';  
        }
    }

    // 2. Logika za Desktop gumbe 
    if (navRight) {
        if (isLoggedIn && user) {
            navRight.innerHTML = `
                <a href="kosarica.html" id="garage-link" class="cart-link">GARAGE [<span id="cart-count">0</span>]</a>
                <button id="themeToggle" class="theme-toggle-btn-menu">🌓</button>
                <span class="user-welcome" style="font-size: 0.65rem; color: var(--text-muted); letter-spacing: 1px; font-weight:700;">
                    HI, <span style="color: var(--accent);">${user.toUpperCase()}</span>
                </span>
                <a href="#" onclick="logout()" class="login-btn-top" style="border-color: var(--accent); color: var(--accent);">Logout</a>
                <div class="hamburger" id="hamburger">
                    <span></span><span></span><span></span>
                </div>
            `;
        } else {
            navRight.innerHTML = `
                <button id="themeToggle" class="theme-toggle-btn-menu">🌓</button>
                <a href="login.html" class="login-btn-top">Login/Sign Up</a>
                <div class="hamburger" id="hamburger">
                    <span></span><span></span><span></span>
                </div>
            `;
        }
    }

    // 3. Logika za mobilni meni (da i tamo bude isto)
    if (mobileLinks) {
        let linksHTML = `
            <li><a href="index.html">Home</a></li>
            <li><a href="gallery.html">Vehicles</a></li>
            <li><a href="news.html">News</a></li>
            <li><a href="contact.html">Contact</a></li>
        `;
        if (isLoggedIn) {
            linksHTML += `<li><a href="kosarica.html">Garage</a></li>`;
            linksHTML += `<li><a href="#" onclick="logout()" style="color: var(--accent);">Logout</a></li>`;
        } else {
            linksHTML += `<li><a href="login.html">Login/Sign Up</a></li>`;
        }
        mobileLinks.innerHTML = linksHTML;
    }

    updateCartCount();
}

// --- 5. TEMA, KOSARICA & AUTH ---
function initTheme() {
    const savedTheme = localStorage.getItem('theme') || 'dark';
    document.documentElement.setAttribute('data-theme', savedTheme);

    document.addEventListener('click', (e) => {
        if (e.target.id === 'themeToggle' || e.target.closest('#themeToggle')) {
            const currentTheme = document.documentElement.getAttribute('data-theme');
            const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
            
            document.documentElement.setAttribute('data-theme', newTheme);
            localStorage.setItem('theme', newTheme);
        }
    });
}

function updateCartCount() {
    const garage = JSON.parse(localStorage.getItem('garage') || '[]');
    const countSpans = document.querySelectorAll('#cart-count');
    countSpans.forEach(span => span.innerText = garage.length);
}

function logout() {
    localStorage.removeItem('isLoggedIn');
    localStorage.removeItem('autosale_user');
    window.location.href = 'index.html';
}

// --- 6. CORE FUNKCIONALNOSTI (CARDS, DETAILS, BUY) ---
function renderCards(container, cars) {
    if (!container) return;
    container.innerHTML = cars.map(car => `
        <div class="car-card">
            <div class="car-img-wrap">
                <img src="${car.img}" alt="${car.brand} ${car.model}">
            </div>
            <div class="car-info">
                <p class="category-label" style="color: var(--text-muted); font-size: 0.65rem; text-transform: uppercase;">${car.type}</p>
                <h3 class="syncopate" style="font-size: 1rem; margin: 10px 0; font-weight: 700;">${car.brand} ${car.model}</h3>
                <p class="price-tag" style="color: var(--accent); font-weight: 800; font-size: 1.1rem;">${car.price.toLocaleString()} €</p>
                
                <div class="card-buttons">
                    <button class="btn-lux primary" onclick="buyCar(${car.id})">BUY</button>
                    <button class="btn-lux details-alt" onclick="viewDetails(${car.id})">DETAILS</button> 
                </div>
            </div>
        </div>
    `).join('');
}
function buyCar(id) {
    // 1. Provjera logina (uvijek prva)
    if (localStorage.getItem('isLoggedIn') !== 'true') {
        showToast("PLEASE LOGIN FIRST", "#ff4444");
        setTimeout(() => window.location.href = 'login.html', 1500);
        return;
    }

    let garage = JSON.parse(localStorage.getItem('garage') || '[]');
    
    // 2. Provjera postoji li već auto
    if (garage.some(item => item.id === id)) {
        showToast("ALREADY IN GARAGE", "#ffbb33");
        return;
    }

    // 3. Logika dodavanja
    const car = inventory.find(c => c.id === id);
    garage.push(car);
    localStorage.setItem('garage', JSON.stringify(garage));

    // 4. VIZUALNI ODGOVOR GUMBA (Pronađimo gumb koji je kliknut)
    const btn = event.target; 
    if (btn && btn.classList.contains('btn-lux')) {
        const originalText = btn.innerText;
        btn.innerText = "ADDED ✓";
        btn.style.backgroundColor = "#08a544ff";
        btn.style.color = "#000";
        
        setTimeout(() => {
            btn.innerText = originalText;
            btn.style.backgroundColor = ""; 
            btn.style.color = "";
        }, 2000);
    }

    // 5. Globalne obavijesti
    showToast(`SUCCESS: ${car.brand} ${car.model} IN GARAGE!`, "#d9ff00");
    updateCartCount();
    animateCartCounter(); 
}

function renderDetails(container) {
    const carId = localStorage.getItem('selectedCarId');
    const car = inventory.find(c => c.id == carId);
    if (!car) return;

    container.innerHTML = `
        <div class="details-view" style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 50px; align-items: center;">
            <div class="details-img-container"><img src="${car.img}" style="width: 100%; border-radius: 20px;"></div>
            <div class="details-text">
                <p class="category-label">${car.type}</p>
                <h1 class="syncopate" style="font-size: 2.5rem; margin-bottom: 10px;">${car.brand} <span style="color:var(--accent)">${car.model}</span></h1>
                <p class="price-tag" style="font-size: 2rem;">${car.price.toLocaleString()} €</p>
                <p class="muted">${car.desc}</p>
                <button class="btn-lux primary" onclick="buyCar(${car.id})">ADD TO GARAGE</button>
            </div>
        </div>
    `;
}

function viewDetails(id) {
    localStorage.setItem('selectedCarId', id);
    window.location.href = 'detalji.html';
}
function showToast(message, color = "#d9ff00") {
    let toast = document.getElementById('toast-notification');
    if (!toast) {
        toast = document.createElement('div');
        toast.id = 'toast-notification';
        document.body.appendChild(toast);
    }

    // Stilovi izravno u JS-u da budemo sigurni da rade
    Object.assign(toast.style, {
        position: 'fixed',
        bottom: '30px',
        right: '30px',
        padding: '20px 40px',
        background: '#000',
        color: '#fff',
        borderLeft: `5px solid ${color}`,
        fontFamily: 'Syncopate, sans-serif',
        fontSize: '0.7rem',
        letterSpacing: '2px',
        zIndex: '10000',
        boxShadow: '0 20px 50px rgba(0,0,0,0.8)',
        display: 'block',
        animation: 'slideIn 0.5s ease-out'
    });

    toast.innerText = message.toUpperCase();

    // Automatsko uklanjanje nakon 3 sekunde
    setTimeout(() => {
        toast.style.display = 'none';
    }, 3000);
}

// Funkcija koja će "zatresti" broj u košarici da korisnik vidi promjenu
function animateCart() {
    const cartIcon = document.getElementById('garage-link');
    if (cartIcon) {
        cartIcon.style.transform = 'scale(1.3)';
        cartIcon.style.color = 'var(--accent)';
        setTimeout(() => {
            cartIcon.style.transform = 'scale(1)';
            cartIcon.style.color = '';
        }, 300);
    }
}

function animateCartCounter() {
    const countSpan = document.getElementById('cart-count');
    if (countSpan) {
        countSpan.parentElement.classList.add('pulse-animation');
        setTimeout(() => {
            countSpan.parentElement.classList.remove('pulse-animation');
        }, 500);
    }
}


// --- 7. GARAGE SPECIFIC LOGIC ---
function renderGarage() {
    const garageList = document.getElementById('garage-list');
    const garageStats = document.getElementById('garage-stats');
    const totalValueContainer = document.getElementById('total-value-container');
    const totalPriceElement = document.getElementById('total-price');
    
    if (!garageList) return;

    let garage = JSON.parse(localStorage.getItem('garage') || '[]');

    if (garage.length === 0) {
        if (garageStats) garageStats.innerText = "Vaša garaža je trenutno prazna.";
        garageList.innerHTML = `
            <div style="grid-column: 1/-1; text-align: center; padding: 100px 0;">
                <h2 class="syncopate" style="opacity: 0.1; font-size: 5rem;">EMPTY</h2>
                <p class="muted" style="margin-bottom: 30px;">Počnite graditi svoju kolekciju danas.</p>
                <a href="gallery.html" class="btn-lux primary">Browse Inventory</a>
            </div>
        `;
        if (totalValueContainer) totalValueContainer.style.display = 'none';
        return;
    }

    let total = 0;
    if (garageStats) garageStats.innerText = `Imate ${garage.length} vozila u svojoj privatnoj kolekciji.`;

    garageList.innerHTML = garage.map((car, index) => {
        total += car.price;
        return `
            <div class="car-card" data-aos="fade-up">
                <div class="car-img-wrap" style="height:200px; overflow:hidden; border-radius:12px; position:relative;">
                    <img src="${car.img}" style="width:100%; height:100%; object-fit:cover;">
                </div>
                <div class="car-info" style="padding: 25px 0;">
                    <p style="font-size:0.65rem; color:var(--accent); font-weight:800; text-transform:uppercase; letter-spacing:2px; margin-bottom:5px;">${car.type}</p>
                    <h3 class="syncopate" style="font-size:1rem; margin-bottom: 10px;">${car.brand} ${car.model}</h3>
                    <p class="price-tag" style="font-weight:700; font-size:1.2rem;">${car.price.toLocaleString()} €</p>
                    <button class="btn-lux" style="margin-top:20px; border-color: #ff4d4d; color: #ff4d4d; width:100%;" onclick="removeFromGarage(${index})">Remove Vehicle</button>
                </div>
            </div>
        `;
    }).join('');

    if (totalPriceElement) totalPriceElement.innerText = total.toLocaleString() + ' €';
    if (totalValueContainer) totalValueContainer.style.display = 'block';
}

function removeFromGarage(index) {
    let garage = JSON.parse(localStorage.getItem('garage') || '[]');
    
    // Ukloni vozilo na temelju indexa
    const removedCar = garage[index];
    garage.splice(index, 1);
    
    // Spremi novo stanje
    localStorage.setItem('garage', JSON.stringify(garage));
    
    // Osvježi prikaz bez ponovnog učitavanja stranice
    renderGarage();
    updateCartCount();
    showToast(`REMOVED: ${removedCar.brand} ${removedCar.model}`, "#ff4444");
}

// Funkcija za simulaciju kupnje (Checkout)
function checkout() {
    const modal = document.getElementById('checkout-modal');
    if (modal) {
        modal.style.display = 'flex';
    }
}

// Funkcija za zatvaranje modala i pražnjenje garaže
function closeModalAndClear() {
    localStorage.removeItem('garage'); 
    window.location.href = 'index.html';
}

function renderGarage() {
    const container = document.getElementById('garage-list');
    if (!container) return;

    const garage = JSON.parse(localStorage.getItem('garage') || '[]');

    if (garage.length === 0) {
        container.innerHTML = `
            <div style="text-align:center; grid-column: 1/-1; padding: 100px 0;">
                <h2 class="syncopate">YOUR GARAGE IS EMPTY</h2>
                <p class="muted">Explore our inventory and find your dream car.</p>
                <br>
                <a href="gallery.html" class="btn-lux primary">GO TO INVENTORY</a>
            </div>`;
        return;
    }

    container.innerHTML = garage.map((car, index) => `
        <div class="car-card">
            <div class="car-img-wrap"><img src="${car.img}" alt="${car.brand}"></div>
            <div class="car-info">
                <h3 class="syncopate">${car.brand} ${car.model}</h3>
                <p class="price-tag">${car.price.toLocaleString()} €</p>
                <button class="btn-lux" style="width:100%; margin-top:20px; border-color:#ff4444; color:#ff4444;" 
                    onclick="removeFromGarage(${index})">REMOVE</button>
            </div>
        </div>
    `).join('');
}

function removeFromGarage(index) {
    let garage = JSON.parse(localStorage.getItem('garage') || '[]');
    garage.splice(index, 1);
    localStorage.setItem('garage', JSON.stringify(garage));
    renderGarage();
    updateCartCount();
}

// PROMO VIDEO 

(function(){
  const wrap = document.getElementById("promoVideo");
  const vid  = document.getElementById("promoVid");
  const btn  = document.getElementById("videoPlayBtn");
  const hint = document.getElementById("videoTapHint");
  if(!wrap || !vid || !btn || !hint) return;

  const isTouch = window.matchMedia("(hover: none) and (pointer: coarse)").matches;

  vid.loop = false;
  vid.autoplay = false;
  vid.controls = false;

  function setPlayUI(){
    btn.textContent = "▶";
  }
  function setReplayUI(){
    btn.textContent = "↻";
  }
  function showOverlay(){
    btn.classList.remove("hidden");
    hint.classList.remove("hidden");
  }
  function hideOverlay(){
    btn.classList.add("hidden");
    hint.classList.add("hidden");
  }

  async function playFromStart(){
    wrap.classList.remove("is-ended");
    wrap.classList.add("is-playing");
    hideOverlay();

    try{
      vid.currentTime = 0;
      await vid.play();
    }catch(e){
      showOverlay();
    }
  }

  async function resume(){
    wrap.classList.add("is-playing");
    hideOverlay();
    try{
      await vid.play();
    }catch(e){
      showOverlay();
    }
  }

  // INIT
  setPlayUI();
  showOverlay();

  // Kad završi: ostane na kraju + pokaži replay
  vid.addEventListener("ended", () => {
    wrap.classList.remove("is-playing");
    wrap.classList.add("is-ended");

    try{
      vid.currentTime = Math.max(0, vid.duration - 0.05);
    }catch(e){}

    setReplayUI();
    showOverlay();
  });

  // Klik na gumb
  btn.addEventListener("click", (e) => {
    e.stopPropagation();
    if (wrap.classList.contains("is-ended")) return playFromStart();
    if (vid.paused) return resume();
  });

  // Klik/tap na video područje
  wrap.addEventListener("click", () => {
    if (wrap.classList.contains("is-ended")) return playFromStart();

    if (vid.paused) {
      resume();
    } else {
      vid.pause();
      wrap.classList.remove("is-playing");
      setPlayUI();
      showOverlay();
    }
  });
})();

