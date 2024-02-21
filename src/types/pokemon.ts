export type pokemonProps = {
  name: string;
  id: number;
  height: number;
  weight: number;
  abilities: [
    {
      ability: {
        name: string;
      };
    }
  ];
  types: [
    {
      type: {
        name: string;
      };
    }
  ];
  stats: [
    {
      base_stat: number;
    }
  ];
  sprites: {
    other: {
      showdown: {
        front_default: string;
      };
      home: {
        front_default: string;
      };
      "official-artwork": {
        front_default: string;
      };
    };
  };
  cries: {
    latest: string;
  };
};

export type speciesProps = {
  capture_rate: number;
  base_happiness: number;
  egg_groups: [
    {
      name: string;
    }
  ];
  hatch_counter: number;
  habitat: {
    name: string;
  };
  growth_rate: {
    name: string;
  };
  flavor_text_entries: [
    {
      flavor_text: string;
    },
    {
      flavor_text: string;
    }
  ];
  generation: {
    name: string;
  };
};
export type evolutionProps = {
  chain: {
    species: {
      name: string;
    };
    evolves_to: [
      {
        evolves_to: [
          {
            species: {
              name: string;
            };
          }
        ];
        species: {
          name: string;
        };
      }
    ];
  };
};
export type pokemonListByPageProps = {
  name: string;
  url: string;
};

export type generationListProps = {
  name: string;
  url: string;
}[];
export type regionListProps = {
  name: string;
  url: string;
}[];
export type locationListProps = {
  name: string;
  url: string;
}[];
