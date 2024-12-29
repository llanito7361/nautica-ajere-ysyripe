// import Layout from './components/Layout/Layout.jsx'
// import {Inter} from 'next/font/google'
// import './styles/globals.css'

// const inter = Inter({
//     subsets:['latin'],
//     weights:['400','600','700']
// })

// const MyApp = ({Component, pageProps}) => {
//     return(
//             <Layout className={inter.className}>
//                 <Component {...pageProps}/>
//             </Layout>

//     )
// }


// export default MyApp

import Layout from './components/Layout/Layout.jsx';
import { Inter } from 'next/font/google';
import './styles/globals.css';

const inter = Inter({
    subsets: ['latin'],
    weight: ['400', '600', '700'], // Cambié `weights` por `weight` que es la forma correcta
});

export const metadata = {
    title: 'Náutica Formosa Ajere Ysyrype',
    description: 'náutica, Formosa, embarcaciones, servicios náuticos, accesorios náutico',
};

export default function RootLayout({ children }) {
    return (
        <html lang="es">
            <body className={inter.className}>
                <Layout>
                    {children}
                </Layout>
            </body>
        </html>
    );
}
