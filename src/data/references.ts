export interface Reference {
  title: string;
  images: string[];
  category: string;
  description?: string;
}

export const references: Reference[] = [
  {
    title: "Výměna rozvaděče bytový dům",
    images: ["1.jpg", "2.jpg", "3.jpg", "4.jpg"],
    category: "Bytové domy",
    description: "Kompletní výměna zastaralého rozvaděče v bytovém domě"
  },
  {
    title: "Montáž rozvaděčů pro chytré domácnosti",
    images: ["5.jpg", "6.jpg", "7.jpg", "8.jpg"],
    category: "Rodinné domy",
    description: "Moderní rozvaděče připravené pro chytrou domácnost"
  },
  {
    title: "Data sítě",
    images: ["9.jpg", "10.jpg", "11.jpg"],
    category: "Datové sítě",
    description: "Profesionální instalace datových sítí a strukturované kabeláže"
  },
  {
    title: "Elektroinstalace v rodinném domě",
    images: ["12.jpg", "13.jpg", "14.jpg", "15.jpg", "16.jpg"],
    category: "Rodinné domy",
    description: "Kompletní elektroinstalace novostavby rodinného domu"
  },
  {
    title: "Oprava pilíře",
    images: ["17.jpg", "18.jpg"],
    category: "Opravy",
    description: "Odborná oprava elektroinstalace v pilíři"
  },
  {
    title: "Montáž rozvaděče v rodinném domě",
    images: ["19.jpg", "20.jpg", "21.jpg"],
    category: "Rodinné domy",
    description: "Instalace nového rozvaděče s jističi a chrániči"
  },
  {
    title: "Montáž rozvaděče wellness centrum",
    images: ["22.jpg", "23.jpg"],
    category: "Komerční objekty",
    description: "Specializovaný rozvaděč pro wellness centrum"
  },
  {
    title: "Oprava a čištění v komerčním objektu",
    images: ["24.jpg", "25.jpg"],
    category: "Komerční objekty",
    description: "Revize a údržba elektrického zařízení"
  },
  {
    title: "Montáž rozvaděče bytový dům",
    images: ["26.jpg", "27.jpg"],
    category: "Bytové domy",
    description: "Nový rozvaděč v bytovém domě s modernizací elektroinstalace"
  },
  {
    title: "Výměna rozvaděče v havarijním stavu",
    images: ["28.jpg", "29.jpg"],
    category: "Opravy",
    description: "Havarijní výměna nebezpečného rozvaděče"
  },
  {
    title: "Instalace elektroměrových skříní a HDS",
    images: ["30.jpg"],
    category: "Bytové domy",
    description: "Elektroměrové skříně a HDS připravené na zateplení"
  }
];

export const categories = [
  "Vše",
  "Rodinné domy",
  "Bytové domy",
  "Komerční objekty",
  "Datové sítě",
  "Opravy"
];
