import stationList from '../../../data/stations';

export default function MetroHome(props) {
    // TODO: display station info
    return <p>Homework</p>
};

export const getServerSideProps = async ({ req, res, params }) => {
    const url = 'https://datacenter.taichung.gov.tw/swagger/OpenData/8fce6507-58a6-40e4-a62e-96f4898a291f'
    // TODO: fetch url and pass specific station data into page by props
    // Hint: see /metro/ssr/index.js for implementation details
    //       remember to use `params` to receive station
};
