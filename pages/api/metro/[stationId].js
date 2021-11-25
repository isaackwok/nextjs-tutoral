export default async function handler(req, res) {

  const { stationId } = req.query

  const url = "http://localhost:3000/api/metro"
  const stations = await fetch(url).then(res => res.json())
  const stationsObj = {}
  stations.forEach(stations => {
    stationsObj[stations['捷運站代號']] = stations
  })

  const station = stationsObj[stationId]

  res.status(200).json(station)
}