import { useRouter } from 'next/router';
import intro from '../../data/intro.json';

// route: /info/{name}
const ShowInfoPage = (props) => {
    const router = useRouter();
    const { name } = router.query;
    const info = intro[name];
    return (
        <>
            <h1>Information of: {info?.name}!</h1>
            <p>{info?.name}</p>
            <p>{info?.age}</p>
            <p>{info?.intro}</p>
        </>
    )
}

export default ShowInfoPage;