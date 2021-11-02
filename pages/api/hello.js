// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
    fetch('https://datacenter.taichung.gov.tw/swagger/OpenData/8fce6507-58a6-40e4-a62e-96f4898a291f')
    res.status(200).json({ name: 'John Doe' })
}
