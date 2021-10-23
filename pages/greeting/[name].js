import { useRouter } from 'next/router';

// route: /greeting/{name}
const GreetingAnyonePage = () => {
    const router = useRouter();
    const name = router.query.name;
    return (
        <h1 className="text-5xl">Hello, {name}!</h1>
    )
}

export default GreetingAnyonePage;