import { div } from "framer-motion/client";
import NumberTicker from "../ui/number-ticker";

export function NumberTickerDemo() {
  return (
    <div>
        <div>
        <p className="whitespace-pre-wrap text-8xl font-medium tracking-tighter text-black dark:text-white">
      <NumberTicker value={100} />
    </p>
        </div>
        <div>
    <p className="whitespace-pre-wrap text-8xl font-medium tracking-tighter text-black dark:text-white">
      <NumberTicker value={100} />
    </p>
    </div>
    <div>
    <p className="whitespace-pre-wrap text-8xl font-medium tracking-tighter text-black dark:text-white">
      <NumberTicker value={100} />
    </p>
    </div>

    </div>
  );
}

