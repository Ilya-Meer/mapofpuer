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
  {
    name: "Hekai",
    type: LOCATION_TYPE.MOUNTAIN,
    coordinates: [21.82245008046033, 100.45970994941935],
    description: "A mountain area in Menghai County, Xishuangbanna. Although there is a specific Hekai Village, at least [according to Farmerleaf](https://www.farmer-leaf.com/products/spring-2023-hekai), Hekai is an area comprised of the villages Man Mai, Man Nong, and Banpen.",
    googleMapsLink: "https://maps.app.goo.gl/D79FgdDoBJbsUECi8",
  },
  {
    name: "Banpen",
    type: LOCATION_TYPE.VILLAGE,
    coordinates: [21.737346739785963, 100.53092059631028],
  },
  {
    name: "Mengsong",
    type: LOCATION_TYPE.MOUNTAIN,
    coordinates: [22.05290918693693, 100.56069837236929],
    googleMapsLink: "https://maps.app.goo.gl/SzktbSAFwKcnnDsUA",
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
  {
    name: "Bingdao",
    type: LOCATION_TYPE.VILLAGE,
    coordinates: [23.75384879892382, 99.8927834978433],
    queryName: "Bingdaocun",
    googleMapsLink: "https://maps.app.goo.gl/Q6yTF318AmC6tkDe7",
    description: "A famous tea village in the Mengku region of Lincang. Bingdao is known for high quality material that gets quite expensive. Bingdao is a village but also a mini region composed of the five villages of Bingdao, Di Jie, Nuo Wu, Ba Wai, and Nan Po."
  },
  {
    name: "Bulang Mountain",
    type: LOCATION_TYPE.MOUNTAIN,
    coordinates: [21.625772610541837, 100.4063712622973],
    googleMapsLink: "https://maps.app.goo.gl/Y1D6KsXwEGqDgAET9",
    description: "A famous mountain area in Xishuangbanna, this area is home to some of the most famous tea growing villages in the world, including Lao Ban Zhang, Ban Zhang, and Lao Man'E."
  },
  {
    name: "Lao Banzhang",
    type: LOCATION_TYPE.VILLAGE,
    coordinates: [21.728816432499585, 100.49903864710413],
    googleMapsLink: "https://maps.app.goo.gl/p5e5QaXtDhDwdEUs6",
    description: "One of the most famous (and expensive!) tea villages in the world."
  },
  {
    name: "Banzhang",
    type: LOCATION_TYPE.VILLAGE,
    coordinates: [21.784522289669713, 100.45766310767932],
    googleMapsLink: "https://maps.app.goo.gl/dNhsR9gT9AyFV1QB7"
  },
  {
    name: "Lao Man'E",
    type: LOCATION_TYPE.VILLAGE,
    coordinates: [21.657740132570172, 100.41700986470293],
    googleMapsLink: "https://maps.app.goo.gl/Sgyq1iyeMmPWwxR66"
  },
  {
    name: "Naka",
    type: LOCATION_TYPE.VILLAGE,
    coordinates: [22.192239786196204, 100.5565139835436],
    googleMapsLink: "https://maps.app.goo.gl/suonMPgSbwhUG7Ry5",
    queryName: "Naka"
  },
  // {
  //   name: "Jinggu",
  //   type: LOCATION_TYPE.COUNTY,
  //   // ...
  // }
  {
    name: "Yiwu",
    coordinates: [21.978524761501593, 101.47108940679107],
    type: LOCATION_TYPE.MOUNTAIN,
    queryName: "Yiwu, Mengla County",
    googleMapsLink: "https://maps.app.goo.gl/RdDcJp9GZExo9atg8"
  }
]
