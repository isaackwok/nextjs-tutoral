import NextLink from 'next/link';

const GreetingPage = () => {
    return (
        <>
            <h1>Hello, World!</h1>
            <h2>
                My name is
                <NextLink href="/greeting/isaac">
                    <a> Isaac
                    </a>
                </NextLink>
            </h2>
        </>
    )
}

export default GreetingPage;