const categories = [
  {
    id: "straight-connectors",
    folder: "Straight-Connectors",
    name: "Straight Connectors",
    images: ["71WEhG868BL._AC_SL1500_.jpg"]
  },
  {
    id: "corner-brackets",
    folder: "Corner-Brackets",
    name: "Corner Brackets",
    images: ["61ByGpqrX2L._AC_SL1500_.jpg", "615UC-Sa6JL._AC_SL1500_.jpg", "61wUV86UsOL._AC_SL1500_.jpg"]
  },
  {
    id: "interior-hidden",
    folder: "Interior-Hidden-Corner-Connectors",
    name: "Interior / Hidden Corner Connectors",
    images: ["71Lm-+tQeZL._AC_SL1500_.jpg"]
  }
];

const products = [
  {
    id: "1",
    folder: "Straight-Connectors/1",
    categoryId: "straight-connectors",
    category: "Straight Connectors",
    images: [
      "61kIQ+7vZiL._AC_SL1500_.jpg",
      "61kzgjkj+jL._AC_SL1500_.jpg",
      "711YtdlGQtL._AC_SL1500_.jpg",
      "71eS+LxTvfL._AC_SL1500_.jpg",
      "71WEhG868BL._AC_SL1500_.jpg"
    ]
  },
  {
    id: "2",
    folder: "Corner-Brackets/2",
    categoryId: "corner-brackets",
    category: "Corner Brackets",
    images: [
      "614sjNzNzYL.jpg",
      "61cACMsyMyL.jpg",
      "61N7ir9lVwL.jpg",
      "61N7ir9lVwL._AC_SL1500_.jpg",
      "61PHpkT+UQL.jpg",
      "66d0d9a3-44.jpg",
      "6eb32e48-4f.jpg",
      "71r0sdPS9KL.jpg",
      "ba319fa8-b3.jpg"
    ]
  },
  {
    id: "3",
    folder: "Corner-Brackets/3",
    categoryId: "corner-brackets",
    category: "Corner Brackets",
    images: [
      "51A1ORgLnpL._AC_SL1500_.jpg",
      "61ByGpqrX2L._AC_SL1500_.jpg",
      "61cZvNERkEL._AC_SL1500_.jpg",
      "61x2qKj2YBL._AC_SL1500_.jpg",
      "71A1V12pibL._AC_SL1500_.jpg",
      "71ltU3rNzCL._AC_SL1500_.jpg",
      "81-H8206JVL._AC_SL1500_.jpg",
      "813wNeiuGdL._AC_SL1500_.jpg"
    ]
  },
  {
    id: "4",
    folder: "Interior-Hidden-Corner-Connectors/4",
    categoryId: "interior-hidden",
    category: "Interior / Hidden Corner Connectors",
    images: [
      "61S-GrsIlNL._AC_SL1500_.jpg",
      "61zjsfWyVwL._AC_SL1500_.jpg",
      "712OBTubW7L._AC_SL1500_.jpg",
      "716KNShv8EL._AC_SL1500_.jpg",
      "716nynPzN1L._AC_SL1500_.jpg",
      "71fLKpCX0cL._AC_SL1500_.jpg"
    ]
  },
  {
    id: "5",
    folder: "Corner-Brackets/5",
    categoryId: "corner-brackets",
    category: "Corner Brackets",
    images: [
      "61cACMsyMyL._AC_SL1500_.jpg",
      "61l-pap77NL._AC_SL1500_.jpg",
      "61N7ir9lVwL._AC_SL1500_.jpg",
      "71epQquN3SL._AC_SL1200_.jpg",
      "71HrzJqnvvL._AC_SL1500_.jpg",
      "71qT5kbnPjL._AC_SL1500_.jpg"
    ]
  },
  {
    id: "6",
    folder: "Interior-Hidden-Corner-Connectors/6",
    categoryId: "interior-hidden",
    category: "Interior / Hidden Corner Connectors",
    images: [
      "6156M5Bvt2L._AC_SL1500_.jpg",
      "71-WTqQdkcL._AC_SL1500_.jpg",
      "7185C1TjLdL._AC_SL1500_.jpg",
      "719NIZZ011L._AC_SL1500_.jpg",
      "71cM182SrBL._AC_SL1500_.jpg",
      "71Lm-+tQeZL._AC_SL1500_.jpg"
    ]
  },
  {
    id: "7",
    folder: "Corner-Brackets/7",
    categoryId: "corner-brackets",
    category: "Corner Brackets",
    images: [
      "61c9kFA6LkL._AC_SL1500_.jpg",
      "61cACMsyMyL._AC_SL1500_.jpg",
      "61d1FWrEOrL._AC_SL1500_.jpg",
      "61N7ir9lVwL._AC_SL1500_.jpg",
      "71jYQDCXFcL._AC_SL1500_.jpg",
      "81jaxMGavHL._AC_SL1500_.jpg"
    ]
  },
  {
    id: "8",
    folder: "Corner-Brackets/8",
    categoryId: "corner-brackets",
    category: "Corner Brackets",
    images: [
      "51DVrKMErNL._AC_SL1500_.jpg",
      "615UC-Sa6JL._AC_SL1500_.jpg",
      "61ByGpqrX2L._AC_SL1500_.jpg",
      "61cZvNERkEL._AC_SL1500_.jpg",
      "71hCkqfppEL._AC_SL1500_.jpg",
      "71QVkPPjsRL._AC_SL1500_.jpg",
      "71V6WbuB2hL._AC_SL1500_.jpg",
      "81-56BOOgTL._AC_SL1500_.jpg"
    ]
  },
  {
    id: "9",
    folder: "Corner-Brackets/9",
    categoryId: "corner-brackets",
    category: "Corner Brackets",
    images: [
      "61ByGpqrX2L._AC_SL1500_.jpg",
      "61cZvNERkEL._AC_SL1500_.jpg",
      "61SkYGL+QmL._AC_SL1500_.jpg",
      "61wUV86UsOL._AC_SL1500_.jpg",
      "71A1V12pibL._AC_SL1500_.jpg",
      "71UQn6DqPxL._AC_SL1500_.jpg",
      "81-H8206JVL._AC_SL1500_.jpg",
      "8199UdblLWL._AC_SL1500_.jpg"
    ]
  },
  {
    id: "10",
    folder: "Interior-Hidden-Corner-Connectors/10",
    categoryId: "interior-hidden",
    category: "Interior / Hidden Corner Connectors",
    images: [
      "61Z4cH9EMWL._AC_SL1500_.jpg",
      "61zjsfWyVwL._AC_SL1500_.jpg",
      "716KNShv8EL._AC_SL1500_.jpg",
      "716nynPzN1L._AC_SL1500_.jpg",
      "71LxufqeM3L._AC_SL1500_.jpg",
      "71Q-dGkM6hL._AC_SL1500_.jpg"
    ]
  },
  {
    id: "11",
    folder: "Corner-Brackets/11",
    categoryId: "corner-brackets",
    category: "Corner Brackets",
    images: [
      "61B1YyctrHL._AC_SL1500_.jpg",
      "61sr8ztv5QL._AC_SL1500_.jpg",
      "71IwWOewQFL._AC_SL1500_.jpg",
      "71W67aeDGvL._AC_SL1500_.jpg",
      "71YHC-3HBUL._AC_SL1500_.jpg",
      "81CKj-aBjTL._AC_SL1500_.jpg"
    ]
  },
  {
    id: "12",
    folder: "Corner-Brackets/12",
    categoryId: "corner-brackets",
    category: "Corner Brackets",
    images: [
      "61ByGpqrX2L._AC_SL1500_.jpg",
      "61cZvNERkEL._AC_SL1500_.jpg",
      "61H0e9C58LL._AC_SL1500_.jpg",
      "61wNzDQC6EL._AC_SL1500_.jpg",
      "71hCkqfppEL._AC_SL1500_.jpg",
      "71NmxX3dVoL._AC_SL1500_.jpg",
      "71V6WbuB2hL._AC_SL1500_.jpg",
      "81aw7zgye8L._AC_SL1500_.jpg"
    ]
  },
  {
    id: "13",
    folder: "Interior-Hidden-Corner-Connectors/13",
    categoryId: "interior-hidden",
    category: "Interior / Hidden Corner Connectors",
    images: [
      "6156M5Bvt2L._AC_SL1500_.jpg",
      "716nynPzN1L._AC_SL1500_.jpg",
      "7185C1TjLdL._AC_SL1500_.jpg",
      "71CAGIu1LPL._AC_SL1500_.jpg",
      "71cM182SrBL._AC_SL1500_.jpg",
      "71pGOK9LwQL._AC_SL1500_.jpg"
    ]
  }
];