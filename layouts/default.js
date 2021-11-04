
import Navbar from '../components/Navbar';

export default function DefaultLayout({ children }) {
    return (
        <div className="flex flex-col">
            <Navbar />
            <div className="container self-center p-4">
                {children}
            </div>
        </div>
    )
};
