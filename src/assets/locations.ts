import { LOCATION_TYPE } from "../constants";
import { Location } from "../types";

export const locations: Location[] = [
  {
    name: "Jingmai",
    type: LOCATION_TYPE.MOUNTAIN,
    coordinates: [22.202698, 100.017122],
    queryName: "Jingmaishan Tea Forest Scenic Spot",
    description: "A famous tea mountain for growing Puer.",
    googleMapsLink: "https://maps.app.goo.gl/ZhfB39LsAsz1qJrF6"
  },
  {
    name: "Menghai",
    type: LOCATION_TYPE.TOWN,
    coordinates: [21.951949475138147, 100.44204411878296],
    description: "A town in Menghai County, Xishuangbanna, Yunnan, China. It is the namesake of the Menghai (now Dayi) Tea Factory, one of the co-inventors of the wodui process for making ripe Puer tea, along with Kunming Tea Factory. Along with the surrounding areas in Menghai county it makes up the Menghai tea region.",
    queryName: "Menghaizhen",
    googleMapsLink: "https://maps.app.goo.gl/vpag16i4WSakEYnL6"
  },
  {
    name: "Menghai Tea Factory",
    type: LOCATION_TYPE.POI,
    coordinates: [21.951171163748306, 100.45569163963356],
    description: "The Menghai Tea Factory is one of the most famous tea factories in China. It is known for producing ripe Puer tea, and was one of the co-inventors of the wodui process for making ripe Puer tea, along with Kunming Tea Factory. The factory was founded in 1940, and is now owned by the Dayi brand.",
    queryName: "勐海茶厂",
    googleMapsLink: "https://maps.app.goo.gl/QmHaaBH1DiLtEczG8"
  },
  {
    name: "Nannuo",
    type: LOCATION_TYPE.MOUNTAIN,
    queryName: "Nannuoshan",
    coordinates: [21.936212068940627, 100.60619644140225],
    googleMapsLink: "https://maps.app.goo.gl/LrGBAbXBmB8siXSW6"
  },
  // {
  //   name: "Hekai"
  // },
  {
    name: "Mengsong",
    type: LOCATION_TYPE.VILLAGE,
    coordinates: [21.493675359407998, 100.51355966758277],
    description: "A famous tea village in Xishuangbanna. Along with other surrounding villages, this makes up a 'Mengsong area'.",
    googleMapsLink: "https://maps.app.goo.gl/7cG2z4HKZds4ujBS9"
  },
  {
    name: "Mangfei",
    type: LOCATION_TYPE.VILLAGE,
    coordinates: [24.062187230518855, 99.13254500233936],
    googleMapsLink: "https://maps.app.goo.gl/1oXmrGPx6TZbvFTAA",
    queryName: "Mangfeicun",
    description: "Mangfei, in Yongde county, is not just a village, but refers to surrounding villages as well that comprise a Mangfei region. It itself is part of the larger Lincang tea producing region."
  },
  // {
  //   name: "Yongde",
  //   // ...
  // },
  {
    name: "Mengku",
    coordinates: [23.616326999623524, 99.8842509902887],
    type: LOCATION_TYPE.TOWN,
    queryName: "Mengkuzhen",
    googleMapsLink: "https://maps.app.goo.gl/PzHBhPtRQpaYbXpH6",
    description: "This town is the namesake of a factory as well as an entire tea growing region comprised of multiple villages, including the famous Bingdao. Better descriptions can be found [here](https://teadb.org/lincang/) and [here](https://teasenz.eu/blogs/tea-magazine/mengku)."
  },
  // {
  //   name: "Bingdao",
  //   // ...
  // },
  // {
  //   name: "Bulang Mountain",
  //   type: LOCATION_TYPE.MOUNTAIN
  // },
  // {
  //   name: "Banzhang",
  //   type: LOCATION_TYPE.VILLAGE
  // },
  // {
  //   name: "Lao Banzhang",
  //   type: LOCATION_TYPE.VILLAGE
  // },
  // {
  //   name: "Lao Man'E",
  //   type: LOCATION_TYPE.VILLAGE
  // },
  {
    name: "Yiwu",
    coordinates: [21.978524761501593, 101.47108940679107],
    type: LOCATION_TYPE.MOUNTAIN,
    queryName: "Yiwu, Mengla County",
    googleMapsLink: "https://maps.app.goo.gl/RdDcJp9GZExo9atg8"
  }
]
