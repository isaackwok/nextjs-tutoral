import { useRouter } from 'next/router';

const GreetingPage = () => {
    const router = useRouter();
    const name = router.query.userName;
    return (
        <h1>Hello, {name}!</h1>
    )
}

export default GreetingPage;