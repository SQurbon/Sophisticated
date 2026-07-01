export interface Product {
  id: number;
  image: string;
  title: string;
  span: string
}
import image1 from '../assets/imgs/gallerycollectionID1.webp'
import image2 from '../assets/imgs/gallerycollectionID2.webp'
import image3 from '../assets/imgs/gallerycollectionID3.webp'
import image4 from '../assets/imgs/gallerycollectionID4.webp'
import image5 from '../assets/imgs/gallerycollectionID5.webp'
import image6 from '../assets/imgs/gallerycollectionID6.webp'

export const products: Product[] = [
  {
    id: 1,
    image: image1,
    title: "Basmala Composition",
    span: "Thuluth Script"
  },
  {
    id: 2,
    image: image2,
    title: "Sacred Name Series",
    span: "Kufic Script"
  },
  {
    id: 3,
    image: image3,
    title: "Geometric Harmony",
    span: "Sulus Script"
  },
  {
    id: 4,
    image: image4,
    title: "Quranic Verse Panel",
    span: "Naskh Script"
  },
  {
    id: 5,
    image: image5,
    title: "Hilya Composition",
    span: "Diwani Script"
  },
  {
    id: 6,
    image: image6,
    title: "Intertwined Names",
    span: "Tughra Script"
  },
];