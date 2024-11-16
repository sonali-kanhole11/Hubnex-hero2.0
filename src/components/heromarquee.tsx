/** @format */

import { cn } from "src/lib/utils";
import Marquee from "src/components/ui/marquee";
import './heromarquee.css'

const reviews = [
  {
    name: "Operating System",
    img: "https://cdn.pixabay.com/photo/2016/03/31/15/16/computer-1293125_1280.png",
  },
  {
    name: "Cloud Computing",
    img: "https://cdn.pixabay.com/photo/2018/04/10/17/44/cloud-3308170_1280.png",
  },
  {
    name: "Connectivity",
    img: "https://cdn.pixabay.com/photo/2016/03/30/13/24/wifi-1290667_1280.png",
  },
  {
    name: "Protocols and standards",
    img: "https://cdn.pixabay.com/photo/2022/01/11/21/17/icon-6931513_1280.png",
  },
  {
    name: "Edge Computing",
    img: "https://cdn.pixabay.com/photo/2022/02/21/07/44/cloud-7025999_1280.png",
  },
  {
    name: "data analytics",
    img: "https://cdn.pixabay.com/photo/2017/02/01/11/50/clones-2029896_1280.png",
  },
  {
    name: "development",
    img: "https://cdn.pixabay.com/photo/2022/06/16/11/14/web-development-7265717_1280.png",
  },
];

const firstRow = reviews.slice(0, reviews.length / 2);
const secondRow = reviews.slice(reviews.length / 2);

const ReviewCard = ({ img, name }: { img: string; name: string }) => {
  return (
    <figure
      className={cn(
        "relative w-64 cursor-pointer overflow-hidden  border p-4 bg-white rounded-lg",
        // light styles
        "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05] bg-white",
        // dark styles
        "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]"
      )}
    >
      <div className='flex flex-row items-center gap-3'>
        <img className='rounded-full' width='32' height='32' alt='' src={img} />
        <div className='flex flex-col'>
          <figcaption className='text-sm font-medium dark:text-white'>
            {name}
          </figcaption>
        </div>
      </div>
    </figure>
  );
};

function PartnerMarquee() {
  return (
    <div className="control md:shadow-xl overflow-hidden relative rounded-lg">
      {/* Marquee content with shadow */}
      <Marquee pauseOnHover className="[--duration:20s] first-iterate">
        {firstRow.map((review) => (
          <ReviewCard key={review.name} {...review} />
        ))}
      </Marquee>
      <Marquee reverse pauseOnHover className="[--duration:10s] second-iterate">
        {secondRow.map((review) => (
          <ReviewCard key={review.name} {...review} />
        ))}
      </Marquee>

      {/* Shadow effect on the left and right */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-white dark:from-background"></div>
//       <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-white dark:from-background"></div>
    </div>
  );
}

export default PartnerMarquee;


