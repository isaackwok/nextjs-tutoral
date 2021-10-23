import NextLink from 'next/link';

const GreetingPage = () => {
    return (
        <div className="text-5xl">
            <p className="text-green-600">Hello, World!</p>
            <h2>
                My name is{" "}
                <NextLink href="/greeting/isaac">
                    <a className="text-blue-500 underline">Isaac
                    </a>
                </NextLink>
            </h2>
        </div>
    )
}

export default GreetingPage;