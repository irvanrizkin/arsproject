import {background2, factory, mining, indicatorLg, man, oilMachine, ship, industry} from "../assets"
export const carouselBanners = [
    {
        id : '01',
        img : background2,
        alt : 'background2',
        title : 'Jaringan Seluruh Indonesia'
    },
    {
        id : '02',
        img : factory,
        alt : 'sunset',
        title : 'Integritas'
    },
    {
        id : '03',
        img : mining,
        alt : 'sunset',
        title : 'Integritas'
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
    path : 'produk'
},
{
    name : 'Hubungi Kami',
    path : '/contact'
},
{
    name : 'ID | EN',
    path : 'language'
}]

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