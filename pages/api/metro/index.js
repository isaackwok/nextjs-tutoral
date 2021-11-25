export default async function handler(req, res) {
  // Taichung Metro API description: https://data.gov.tw/dataset/144164
  const url = 'https://datacenter.taichung.gov.tw/swagger/OpenData/8fce6507-58a6-40e4-a62e-96f4898a291f'
  const stations =
    await fetch(url)
      .then(result => result.json())
  res.status(200).json(stations);
}