type Hero = {
  address: string;
  heroId: number;
  creatureId: number;
  description: string;
  nefturianId: number;
  name: string;
  imageUrl: string;
  side: string;
  createdAt: string;
  updatedAt: string;
  deletedAt: string;
};

type Nefturian = {
  name: string;
  description: string;
  image: string;
  attributes: any[];
};

type Stat = {
  side: string;
  count: number;
};
