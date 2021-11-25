import NextImage from 'next/image'
import image4k from "../public/img/4k.jpg"
import image8k from "../public/img/8k.jpg"

export default function GalleryPage() {
  // 4K => (1.63MB => 284ms) => (1.03MB => 13ms)
  // 8K => (4.10MB => 303ms) => (669KB => 8.7ms)
  return (
    <>
      <NextImage src={image4k} alt="4K image" />
      {/* <img src="/img/4k.jpg" alt="4K image" /> */}
      <p className="text-5xl">some paragraph....</p>
      <p className="text-5xl">some paragraph....</p>
      <p className="text-5xl">some paragraph....</p>
      <p className="text-5xl">some paragraph....</p>
      <p className="text-5xl">some paragraph....</p>
      <p className="text-5xl">some paragraph....</p>
      <p className="text-5xl">some paragraph....</p>
      <p className="text-5xl">some paragraph....</p>
      <p className="text-5xl">some paragraph....</p>
      <p className="text-5xl">some paragraph....</p>
      <p className="text-5xl">some paragraph....</p>
      <p className="text-5xl">some paragraph....</p>
      <p className="text-5xl">some paragraph....</p>
      <p className="text-5xl">some paragraph....</p>
      <p className="text-5xl">some paragraph....</p>
      <p className="text-5xl">some paragraph....</p>
      <p className="text-5xl">some paragraph....</p>
      <p className="text-5xl">some paragraph....</p>
      <NextImage src={image8k} alt="8K image" />
      {/* <img src="/img/8k.jpg" alt="8K image" /> */}
    </>
  )
}