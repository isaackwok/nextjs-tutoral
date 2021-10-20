import { useRouter } from 'next/router';
import intro from '../../data/intro';

const ShowInfoPage = (props) => {
    const router = useRouter();
    const { userName } = router.query;
    const info = intro[userName];
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