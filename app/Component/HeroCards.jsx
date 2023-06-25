import Image from 'next/image';

const HeroCard = ({ height, width, image }) => {
  return (
    <div className='relative mt-[200px] w-[10%] h-[50%] rounded-[80%]'>
     <Image
        src={image}
        alt='one'
        layout='fill'
        objectFit='contain'
      />
    </div>
  );
};

export default HeroCard;