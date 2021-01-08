import headerHigh from "./entities/article/headerHigh";
import richText from "./entities/article/richText";

const articleData = {
  articles: {
    someArticleId: {
      metaData: {
        title: "Raf Simons Prada",
        description:
          "The day we’ve all been waiting for is finally here. From opera to Prada",
        ogTitle: "Share: Raf Simons Prada",
        ogImage:
          "https://rekrystorage.blob.core.windows.net/pagepictures/461_pb-spotlight_jpeg-f4bms_lsyeapae3aiwzuva.jpeg",
        ogDescription:
          "Share: The day we’ve all been waiting for is finally here. From opera to Prada",
        twitterTitle: "Raf Simons Prada",
        twitterImage:
          "The day we’ve all been waiting for is finally here. From opera to Prada",
        twitterDescription:
          "The day we’ve all been waiting for is finally here. From opera to Prada"
      },
      components: [headerHigh, richText]
    }
  }
};

export default articleData;
