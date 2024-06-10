import { Noto_Sans, Oswald } from "next/font/google";

const oswald = Oswald({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const notoSans = Noto_Sans({
  subsets: ["latin", "cyrillic-ext"],
});

export { oswald, notoSans };
