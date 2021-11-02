import '../styles/globals.css'
import 'tailwindcss/tailwind.css'
import DefaultLayout from '../layouts/default';

function MyApp({ Component, pageProps }) {
    return <DefaultLayout>
        <Component {...pageProps} />
    </DefaultLayout>
}

export default MyApp
