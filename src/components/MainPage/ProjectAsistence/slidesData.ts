import slide1_image from "../../../assets/slider/slide1/slide1_main.png";
import slide2_image from "../../../assets/slider/slide2/slide2_main.png";
import slide3_image from "../../../assets/slider/slide3/slide3_main.png";
import slide4_image from "../../../assets/slider/slide4/slide4_main.png";
import slide5_image from "../../../assets/slider/slide5/slide5_main.png";
import slide6_image from "../../../assets/slider/slide6/slide6_main.png";
import slide7_image from "../../../assets/slider/slide7/slide7_main.png";
import slide8_image from "../../../assets/slider/slide8/slide8_main.png";
import slide9_image from "../../../assets/slider/slide9/slide9_main.png";
import slide10_image from "../../../assets/slider/slide10/slide10_main.png";

import Infr from "../../../assets/slider/slide1/infr.svg";
import Loc from "../../../assets/slider/slide1/loc.svg";
import Lawyer from "../../../assets/slider/slide1/lawyer.svg";

import Agree from "../../../assets/slider/slide2/agree.svg";
import Doc from "../../../assets/slider/slide2/doc.svg";
import Perm from "../../../assets/slider/slide2/perm.svg";

import Loc1 from "../../../assets/slider/slide3/loc.svg";
import Agree1 from "../../../assets/slider/slide3/agree.svg";
import Points from "../../../assets/slider/slide3/points.svg";

import Constr from "../../../assets/slider/slide4/constr.svg";
import Fund from "../../../assets/slider/slide4/fund.svg";
import Grunt from "../../../assets/slider/slide4/grunt.svg";
import Water from "../../../assets/slider/slide4/water.svg";

import Calc from "../../../assets/slider/slide5/calc.svg";
import Etern from "../../../assets/slider/slide5/eternity.svg";
import Stren from "../../../assets/slider/slide5/strength.svg";
import Umbrella from "../../../assets/slider/slide5/umbrella.svg";

import Arm from "../../../assets/slider/slide6/arm.svg";
import Block from "../../../assets/slider/slide6/blocks.svg";
import Montage from "../../../assets/slider/slide6/montage.svg";

import Sun from "../../../assets/slider/slide7/sun.svg";
import Umbrella2 from "../../../assets/slider/slide7/umbrella.svg";
import Water3 from "../../../assets/slider/slide7/water3.svg";

import Metal from "../../../assets/slider/slide8/metal.svg";
import Star from "../../../assets/slider/slide8/star.svg";
import Umbrella3 from "../../../assets/slider/slide8/umbrella.svg";

import Floor from "../../../assets/slider/slide9/floor.svg";
import Fork from "../../../assets/slider/slide9/fork.svg";
import Heat from "../../../assets/slider/slide9/heat.svg";
import Shtuc from "../../../assets/slider/slide9/shtuc.svg";

import Brush from "../../../assets/slider/slide10/brush.svg";
import Key from "../../../assets/slider/slide10/key.svg";
import Terrain from "../../../assets/slider/slide10/terrain.svg";


export interface SlideItem {
    icon: string;
    text: string;
  }
  
  export interface Slide {
    id: number;
    title: string;
    subtitle: string;
    items: SlideItem[];
    image: string;
  }

export const slidesData: Slide[] = [
    {
      id: 1,
      title: "Мы поможем вам",
      subtitle: "найти идеальный земельный участок",
      items: [
        { icon: Loc, text: "Расположение" },
        { icon: Infr, text: "Инфраструктура" },
        { icon: Lawyer, text: "Юридическая чистота" }
      ],
      image: slide1_image
    },
    {
      id: 2,
      title: "Обеспечим",
      subtitle: "юридическую безопасность вашего строительства",
      items: [
        { icon: Doc, text: "Документы" },
        { icon: Perm, text: "Разрешения" },
        { icon: Agree, text: "Согласование" }
      ],
      image: slide2_image
    },
    {
      id: 3,
      title: "Установим точные границы",
      subtitle: "вашего участка",
      items: [
        { icon: Points, text: "Точки периметра" },
        { icon: Loc1, text: "Правильное расположение" },
        { icon: Agree1, text: "Соблюдение норм" }
      ],
      image: slide3_image
    },
    {
      id: 4,
      title: "Изучим геологию участка",
      subtitle: "для надежного строительства",
      items: [
        { icon: Grunt, text: "Характеристики грунта" },
        { icon: Water, text: "Грунтовые воды" },
        { icon: Fund, text: "Выбор фундамента" },
        { icon: Constr, text: "Конструкция здания" },
      ],
      image: slide4_image
    },
    {
      id: 5,
      title: "Заложим прочный фундамент",
      subtitle: "для вашего дома",
      items: [
        { icon: Stren, text: "Прочность" },
        { icon: Etern, text: "Долговечность" },
        { icon: Umbrella, text: "Защита от влаги" },
        { icon: Calc, text: "Точные расчеты" }
      ],
      image: slide5_image
    },
    {
      id: 6,
      title: "Возведем крепкие стены",
      subtitle: "с надежной конструкцией",
      items: [
        { icon: Block, text: "Кладка блоков или кирпича" },
        { icon: Arm, text: "Армопояс" },
        { icon: Montage, text: "Монтаж крыши" }
      ],
      image: slide6_image
    },
    {
      id: 7,
      title: "Тепло и сухость круглый год",
      subtitle: "благодаря современной изоляции",
      items: [
        { icon: Water3, text: "Влагоизоляция" },
        { icon: Sun, text: "Теплоизоляция" },
        { icon: Umbrella2, text: "Гидроизоляция" }
      ],
      image: slide7_image
    },
    {
      id: 8,
      title: "Придадим дому стиль и защиту",
      subtitle: "с помощью металлочерепицы",
      items: [
        { icon: Metal, text: "Металлочерепица 0,45мм" },
        { icon: Umbrella3, text: "Защита от погоды" },
        { icon: Star, text: "Эстетичный вид" }
      ],
      image: slide8_image
    },
    {
      id: 9,
      title: "Завершим ваш дом до идеала",
      subtitle: "полным спектром внутренних работ",
      items: [
        { icon: Fork, text: "Электромонтаж" },
        { icon: Shtuc, text: "Штукатурка стен" },
        { icon: Floor, text: "Укладка полов" },
        { icon: Heat, text: "Установка отопления" }
      ],
      image: slide9_image
    },
    {
      id: 10,
      title: "Сделаем все, что нужно",
      subtitle: "для комфортного проживания",
      items: [
        { icon: Brush, text: "Чистовая отделка" },
        { icon: Terrain, text: "Благоустройство территории" },
        { icon: Key, text: "Готовность к проживанию" }
      ],
      image: slide10_image
    },
  ];