export default function SSGStationsPage(props) {
    return <p>Homework</p>
};


export const getStaticPaths = () => {
    const url = 'https://datacenter.taichung.gov.tw/swagger/OpenData/8fce6507-58a6-40e4-a62e-96f4898a291f'
    // TODO: fetch url and define static paths for SSG to render at build time
    //       REPLACE `stationPaths` with your own
    const stationPaths = []
    return {
        paths: stationPaths,
        fallback: false // true, false, 'blocking'
    }
}

export const getStaticProps = ({ params }) => {
    // Get station ID from params (passed from static paths that you defined) and return the specific station data into the page.

    return {
        props: {
        }
    }

};
