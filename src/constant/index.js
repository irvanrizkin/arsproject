import { IoIosArrowDown } from "react-icons/io";
import {background2, factory, mining, indicatorLg, man, oilMachine, ship, industry, catalogue, corpro, brs, eniDistributor, prixbi, galeri, galeri2, listIcons, drumEni, diesel, rotra, multiTech, doubleEniDrums, eniBarrel } from "../assets"
export const carouselBanners = [
    {
        id : '01',
        img : mining,
        alt : 'background2',
        title : 'Jangkauan Global, Sentuhan Lokal',
        desc : 'Jaringan Luas, Pelayanan Dekat - Distribusi Oli dan Sparepart ke Seluruh Indonesia'
    },
    {
        id : '02',
        img : factory,
        alt : 'sunset',
        title : 'Keutamaan Integritas',
        desc : 'Bersama Menjaga Integritas dan Komitmen Kepada Seluruh'
    },
    {
        id : '03',
        img : background2,
        alt : 'background2',
        title : 'Terstandarisasi ENI',
        desc : 'Menjaga Kualitas Produk dan Pelayanan Kami kepada Customer'
    }
]
export const navItems = [{
    name : 'Home',
    path : '/',
},
{
    name : 'Tentang Kami',
    path : '/about'
},
{
    name : 'Produk',
    path : '/automotive',
    icon : <IoIosArrowDown/>

},
{
    name : 'Hubungi Kami',
    path : '/contact'
},
{
    name : 'ID | EN',
    path : 'language'
}]

export const productList = [
    {
        name : "Automotive",
        path : '/automotive'
    },
    {
        name : "Industrial",
        path : '/industrial'
    },
    {
        name : "Grease",
        path : '/greases'
    },
]

export const listListProduct = [
    {
        img : eniBarrel,
        alt : 'eniBarrel',
        name : 'Automotive',
        desc : 'Meningkatkan peforma mesin dan memperpanjang usia kendaraan anda'
    },
    {
        img : drumEni,
        alt : 'industrialEni',
        name : 'Industrial',
        desc : 'Meningkatkan efisiensi dan produktivitas operasi anda'
    },
    {
        img : diesel,
        alt : 'greaseEni',
        name : 'Greases',
        desc : 'Melindungi komponen penting dari keausan dan korosi dengan berbagai jenis'
    }
]
export const automotiveProducts = [
    {
        type : "Marine Oil",
    },
    {
        type : "Diesel Oil",
    },
    {
        type : "Gas Engine Oil",
    },
    {
        type : "Transmission & Gear Oil",
    }
]

export const industrialProduct = [
    {
        type : "Hydraulic Oil",
    },
    {
        type : "General Purpose",
    },
    {
        type : "Gear & Chains",
    },
    {
        type : "Heat Transfer Plans",
    },
    {
        type : "Slideways",
    },
    {
        type : "Compressor Oil",
    },
    {
        type : "Turbine Oil",
    }
]

export const greaseProduct = [
    {
        type : "Multipurpose Grease",
    },
    {
        type : "Speciality Grease",
    }
]
export const multiPurposeGrease = [
    {
        name : "MU",
        img : diesel
    },
    {
        name : "SM",
        img : diesel
    },
]
export const specialityGrease = [
    {
        name : "LC",
        img : diesel
    },
    {
        name : "SAGUS",
        img : diesel
    },
]
export const hydraulicOil = [
    {
        name : "Arnica",
        img : doubleEniDrums
    },
    {
        name : "Oso",
        img : doubleEniDrums
    },
]

export const generalPurpose = [
    {
        name : "Acer",
        img : diesel
    },
    {
        name : "Radula",
        img : doubleEniDrums
    },
]
export const gearChain = [
    {
        name : "Blasia",
        img : diesel
    },
    {
        name : "Arum",
        img : doubleEniDrums
    },
]

export const heatTransferPlans = [
    {
        name : "Therm Oil",
        img : doubleEniDrums
    },
]

export const slideWays = [
    {
        name : "Exidia",
        img : doubleEniDrums
    },
]
export const compressorOil = [
    {
        name : "Dicrea",
        img : doubleEniDrums
    },
    {
        name : "Betula",
        img : doubleEniDrums
    },
]
export const turbineOil = [
    {
        name : "OTE",
        img : doubleEniDrums
    }
]
export const marineOil = [
    {
        name : "Cladium",
        img : drumEni
    },
    {
        name : "Cladium",
        img : drumEni
    },
    {
        name : "Cladium",
        img : drumEni
    }
]
export const dieselOil = [
    {
        name : "Sigma",
        img : diesel
    },
]

export const gasEngineOil = [
    {
        name : "Geum",
        img : drumEni
    },
]
export const transmissionGearOil = [
    {
        name : "Rotra",
        img : rotra
    },
    {
        name : "MultiTech",
        img : multiTech
    },
]



export const guideList = [
    {
        img: indicatorLg,
        alt: 'indicator',
        title: 'Integritas dalam Setiap Tindakan',
        desc: 'Kami percaya bahwa kami menjalani bisnis kami dengan integritas yang tinggi'
    },
    {
        img: industry,
        alt: 'industry',
        title: 'Fokus Pada Pelanggan',
        desc: 'Kesuksekan kami sangat terkait dengan kepuasan dan kepercayaan pelanggan kami'
    },
    {
        img: oilMachine,
        alt: 'machine',
        title: 'Pertumbuhan Kolaboratif',
        desc: 'Kami harus tumbuh bersama dengan para mitra, pemasuk dan komunitas kami untuk senantiasa memajukan'
    },
    {
        img: ship,
        alt: 'ship',
        title: 'Beradaptasi dengan Perubahan',
        desc: 'Kami percaya akan pentingnya beradaptasi dan tanggap terhadap perubahan kebutuhan'
    },
    {
        img: man,
        alt: 'man',
        title: 'Membedayakan Karyawan',
        desc: 'Kami percaya dalam memberdayakan karyawan dengan pengetahuan, alat, & kesempatan'
    }
]

export const infoProfile = [
    {
        img: catalogue,
        alt: 'catalogue',
        title: 'Download Our Catalogue Product',
    },
    {
        img: corpro,
        alt: 'corpro',
        title: 'Download Our Company Profile',
    },
]

export const ourGrup = [
    {
        img: brs,
        alt: 'brs',
        // title: 'BRS',
    },
    {
        img: eniDistributor,
        alt: 'eniDistributor',
        // title: 'ENI Distributor',
    },
    {
        img: prixbi,
        alt: 'prixbi',
        // title: 'PrixBI',
    }
]

export const ourGallery = [
    {
        img : galeri,
        alt : 'galeri'
    },
    {
        img : background2,
        alt : galeri2
    }
]

export const visi = [
    {
        img : listIcons,
        alt : 'list',
        desc : 'Menjadi perusahaan terpercaya yang mampu memenuhi kebutuhan masyarakat akan produk'
    },
]

export const misi = [
    {
        img : listIcons,
        alt : 'list',
        desc : 'Customer puas terhadap mutu product kami, pelayanan purna jual dan selalu memperhatikan kebutuhan Customer.'
    },
    {
        img : listIcons,
        alt : 'list',
        desc : 'Tumbuh dan mendominasi pasar khususnya Divisi Marine dan Mining di Seluruh Wilayah Indonesia.'
    },
    {
        img : listIcons,
        alt : 'list',
        desc : 'Membangun team dan partner kerja yang punya visi dan misi yang sama, mengetahui tujuannya dalam bekerja.'
    },
    {
        img : listIcons,
        alt : 'list',
        desc : 'Memperhatikan dan memberikan keuntungan kepada perusahaan secara maksimal.'
    },

]