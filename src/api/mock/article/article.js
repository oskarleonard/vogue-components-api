import { hashtags } from "./components/hashtags";
import headerHigh from "./components/headerHigh";
import richText from "./components/richText";
import { tweetEmbed } from "./components/tweetEmbed";

const article = {
  slug: "raf-simons-prada",
  metaTags: {
    title: "Raf Simons Prada",
    twitterImage:
      "https://rekrystorage.blob.core.windows.net/pagepictures/461_pb-spotlight_jpeg-f4bms_lsyeapae3aiwzuva.jpeg"
  },
  components: [headerHigh, richText, hashtags, tweetEmbed]
};

export default article;
