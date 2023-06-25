import Image from 'next/image'
import GridComponent from './Component/GridComponent';
import CustomCursor from './Component/CustomCursor';
import HeroCard from './Component/HeroCards';
import DiamondImages from './Component/DiamondImages';

export default function Home() {
  return (
    <>
      <CustomCursor />
      <GridComponent>
      <div className="flex place-content-around">
        <div className="flex-col w-4/5 justify-items-center">
          <p className='mt-20'></p>
        <h1 className="font-plusJakarta text-8xl text-black mb-20">The Metropolitan Museum</h1>
        <p className="absolute top-80 left-30 text-8xl">🎨</p>
        <p className="absolute top-40 right-60 text-8xl">🤩</p>
        <p className="absolute top-80 right-40 text-7xl">🌻</p>
        <p className="absolute top-[600px] left-30 text-9xl">🖼</p>
        <p className="absolute top-[600px] right-40 text-9xl">💭</p>
        {/* <HeroCard height="64" width="64" image='/Pictures/1.jpg'/> */}
        <div className='absolute top-40 left-10 h-16 w-16'>
        <Image
            src='/earth.svg'
            alt='one'
            layout='fill'
            objectFit='contain'
          />
        </div>
        <p className="absolute top-60 left-10 text-2xl w-[200px]">Over 5,000 years of art from around the world </p>
        <p className="absolute top-[700px] left-[500px] text-4xl w-[700px]">The Met: Ignite Your Curiosity, Inspire Your Imagination</p>
        <p className="absolute top-[400px] right-10 text-1xl w-[300px]">Immerse Yourself in the World of Art: Unveiling the Treasures of The Metropolitan Museum</p>
        <DiamondImages/>
        </div>
        </div>
      </GridComponent>
    </>
  );
}
