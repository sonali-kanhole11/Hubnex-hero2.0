/** @format */

import { cn } from "@/lib/utils";
import Marquee from "@/components/ui/marquee";



const reviews = [
  {
    img: "public/images/chorus.png",
  },
  {
    img: "public/images/tcs.png",
  },
  {
    img: "public/images/reddit.png",
  },
  {
    img: "public/images/pantera.png",
  },

];

const firstRow = reviews.slice(0, reviews.length / 1);
// const secondRow = reviews.slice(reviews.length / 2);

const ReviewCard = ({
  img,
}: {
  img: string;
}) => {
  return (
    <figure
      className={cn(
        "relative w-64 cursor-pointer overflow-hidden p-4",
        // light styles
        "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
        // dark styles
        "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]"
      )}
    >
      <div className='flex flex-row items-center gap-2'>
        <img className='rounded-full' width="100%" height='32' alt='' src={img} />
        <div className='flex flex-col'>
          <figcaption className='text-sm font-medium dark:text-white'>
            
          </figcaption>
          <p className='text-xs font-medium dark:text-white/40'></p>
        </div>
      </div>
      <blockquote className='mt-2 text-sm'></blockquote>
    </figure>
  );
};

function HeroMarquee() {
  return (
    <>
    <h1 className="text-base">Join 4,000+ companies already growing</h1>
    <div className='relative flex h-[500px] w-full flex-col items-center justify-center overflow-hidden '>
      <Marquee pauseOnHover className='[--duration:15s]'>
        {firstRow.map((review) => (
          <ReviewCard key={review.img} {...review} />
        ))}
      </Marquee>
      {/* <Marquee reverse pauseOnHover className='[--duration:20s]'>
        {secondRow.map((review) => (
          <ReviewCard key={review.username} {...review} />
        ))}
      </Marquee> */}
      <div className='pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-white dark:from-background'></div>
      <div className='pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-white dark:from-background'></div>
    </div>
    </>

    
  );
}

export default HeroMarquee;