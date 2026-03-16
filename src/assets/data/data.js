export const data = {
    bride: {
        L: {
            id: 1,
            name: 'Dimas Maulana',
            child: 'Putra',
            father: 'Ms. Nano Prayogo',
            mother: 'N. Denih',
            salamat: 'Kedung Menjangan - Cirebon',
            image: './src/assets/images/cowo.png'
        },
        P: {
            id: 2,
            name: 'Cintami Soraya',
            child: 'Putri',
            father: 'Iman Setiarasa, S.Tr.P',
            mother: 'Siti Yuningsih',
            salamat: 'Gunungmanik - Ciniru',
            image: './src/assets/images/cewe.png'
        },

        couple: './src/assets/images/couple.png'
    },

    time: {
        marriage: {
            year: '2026',
            month: 'Maret',
            date: '26',
            day: 'Kamis',
            hours: {
                start: '08.00',
                finish: 'Selesai'
            }
        },
        reception: {
            year: '2026',
            month: 'Maret',
            date: '26',
            day: 'Kamis',
            hours: {
                start: '08.00',
                finish: 'Selesai'
            }
        },
        address: 'Blok Karangasem RT.01 / RW.01 Dusun Manis Desa Kutakembaran Kec. Garawangi Kab. Kuningan - Jawa Barat'
    },

    link: {
        calendar: 'https://calendar.app.google/tmeEbH98eAiaiTVZ7',
        map: 'https://maps.app.goo.gl/sbBiKpuCVZyzty4t9',
    },

    galeri: [
        {
            id: 1,
            image: './src/assets/images/1.png'
        },
        {
            id: 2,
            image: './src/assets/images/2.png'
        },
        {
            id: 3,
            image: './src/assets/images/3.png'
        },
        {
            id: 4,
            image: './src/assets/images/4.png'
        },
        {
            id: 5,
            image: './src/assets/images/5.png'
        }
    ],

    bank: [
        {
            id: 1,
            name: 'Irma Yunisa Isnaini',
            icon: './src/assets/images/mandiri.png',
            rekening: '1340029699559'
        },
        {
            id: 2,
            name: 'Muhamad Rifaldi',
            icon: './src/assets/images/bni.png',
            rekening: '1794083532'
        },
    ],

    audio: './src/assets/audio/wedding.mp3',

    api: 'https://script.google.com/macros/s/AKfycbwpQSZB2T7Sh3CqRdUILDYwO7AKEfQx2Smz8WWqV1j1kMZsl714ZOYdbU29JLOsnR3u7Q/exec',

    navbar: [
        {
            id: 1,
            teks: 'Home',
            icon: 'bx bxs-home-heart',
            path: '#home',
        },
        {
            id: 2,
            teks: 'Mempelai',
            icon: 'bx bxs-group',
            path: '#bride',
        },
        {
            id: 3,
            teks: 'Tanggal',
            icon: 'bx bxs-calendar-check',
            path: '#time',
        },
        {
            id: 4,
            teks: 'Galeri',
            icon: 'bx bxs-photo-album',
            path: '#galeri',
        },
        {
            id: 5,
            teks: 'Ucapan',
            icon: 'bx bxs-message-rounded-dots',
            path: '#wishas',
        },
    ],
}
