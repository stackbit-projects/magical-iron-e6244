import '../sass/main.scss';
import { AnimatePresence } from "framer-motion";

// This default export is required in a new `pages/_app.js` file.
export default function MyApp({ Component, pageProps }) {
    return (
    <AnimatePresence exitBeforeEnter>

    <Component {...pageProps} />
    </AnimatePresence>
    );
}
