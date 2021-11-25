import stationList from '../../../data/stations';

export default function MetroHome(props) {
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

export const getServerSideProps = async ({ params }) => {
    const url = `http://localhost:3000/api/metro/${params.stationId}`
    // TODO: fetch url and pass specific station data into page by props
    // Hint: see /metro/ssr/index.js for implementation details
    //       remember to use `params` to receive station
    const station = await fetch(url).then(res => res.json())
    return {
        props: {
            station
        }
    }
};
