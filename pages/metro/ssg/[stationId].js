export default function SSGStationsPage(props) {
    // TODO: display station info
    return (
        <>
            {
                Object.entries(props.station)
                    .map((key, value) => {
                        return <p key={key}>{key}: {value}</p>
                    })
            }
        </>
    )
};


export const getStaticPaths = async () => {
    const url = 'https://datacenter.taichung.gov.tw/swagger/OpenData/8fce6507-58a6-40e4-a62e-96f4898a291f'
    // TODO: fetch url and define static paths for SSG to render at build time
    //       REPLACE `stationPaths` with your own
    const stations = await fetch(url).then(res => res.json())
    // const stationPaths = []
    const stationPaths = stations.map(station => ({
        params: {
            stationId: station['捷運站代號'],
        }
    }))
    return {
        paths: stationPaths,
        fallback: false // true, false, 'blocking'
    }
}

export const getStaticProps = async ({ params }) => {
    // Get station ID from params (passed from static paths that you defined) and return the specific station data into the page.
    const url = 'https://datacenter.taichung.gov.tw/swagger/OpenData/8fce6507-58a6-40e4-a62e-96f4898a291f'
    // TODO: fetch url and define static paths for SSG to render at build time
    //       REPLACE `stationPaths` with your own
    
    const stations = await fetch(url).then(res => res.json())
    const stationsObj = {}
    stations.forEach(stations => {
        stationsObj[stations['捷運站代號']] = stations
    })

    return {
        props: {
            station: stationsObj[params.stationId]
        }
    }

};
