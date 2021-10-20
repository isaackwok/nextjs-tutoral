import { useRouter } from 'next/router';

const GreetingAnyonePage = () => {
    const router = useRouter();
    const name = router.query.name;
    return (
        <h1>Hello, {name}!</h1>
    )
}

export default GreetingAnyonePage;