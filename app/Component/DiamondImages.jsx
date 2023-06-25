import Image from 'next/image';
const DiamondImages = () => {
    const images = Array.from({ length: 7 }, (_, i) => `/Pictures/${i + 1}.jpg`);
  
    return (
      <div className="flex justify-center items-center space-x-10">
        <div className="relative h-64 w-32 rounded-lg overflow-hidden shadow-lg" style={{ boxShadow:'8px 8px 0 0 yellow' }}>
          <Image src={images[0]} alt="Image 1" layout="fill" objectFit="cover" />
        </div>
        <div className="grid grid-rows-2 gap-10">
          <div className="relative h-32 w-32 rounded-lg overflow-hidden shadow-lg" style={{ boxShadow:'8px 8px 0 0 orange' }}>
            <Image src={images[1]} alt="Image 2" layout="fill" objectFit="cover" />
          </div>
          <div className="relative h-32 w-32 rounded-lg overflow-hidden shadow-lg" style={{ boxShadow:'8px 8px 0 0 red' }}>
            <Image src={images[4]} alt="Image 5" layout="fill" objectFit="cover" />
          </div>
        </div>
        <div className="relative h-96 w-64 rounded-lg overflow-hidden shadow-lg" style={{ boxShadow:'8px 8px 0 0 violet' }}>
          <Image src={images[3]} alt="Image 4" layout="fill" objectFit="cover" />
        </div>
        <div className="grid grid-rows-2 gap-10">
          <div className="relative h-32 w-32  rounded-lg overflow-hidden shadow-lg" style={{ boxShadow:'8px 8px 0 0 blue' }}>
            <Image src={images[2]} alt="Image 3" layout="fill" objectFit="cover" />
          </div>
          <div className="relative h-32 w-32 rounded-lg overflow-hidden shadow-lg" style={{ boxShadow:'8px 8px 0 0 teal' }}>
            <Image src={images[5]} alt="Image 6" layout="fill" objectFit="cover" />
          </div>
        </div>
        <div className="relative h-64 w-32 rounded-lg overflow-hidden shadow-lg" style={{ boxShadow:'8px 8px 0 0 green' }}>
          <Image src={images[6]} alt="Image 7" layout="fill" objectFit="cover" />
        </div>
      </div>
    );
  };
  
  export default DiamondImages;
  