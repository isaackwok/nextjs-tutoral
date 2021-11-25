import NextLink from 'next/link';
export default function MetroHome({ stations }) {
    return (
        <>
            <p className="text-2xl">點擊車站以查詢詳細資料:</p>
            {stations.map(station => (
                <p className="text-blue-500 text-xl underline" key={station['捷運站代號']}>
                    <NextLink href={`/metro/ssr/${station['捷運站代號']}`}><a>{station['站名']}</a></NextLink>
                </p>
            ))}
        </>
    )
};

export const getServerSideProps = async () => {
    // Taichung Metro API description: https://data.gov.tw/dataset/144164
    const url = 'http://localhost:3000/api/metro'
    const stations = await fetch(url).then(res => res.json())

    return {
        props: {
            stations
        }
    }
};





