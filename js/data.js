const showsData = [
  {
    id: 1,
    title: "Game of Thrones",
    year: "2011–2019",
    air_time: "Sundays at 9:00 PM",
    next_episode_air_date: "May 15, 2026",
    genre: ["Action", "Adventure", "Drama"],
    rating: 9.2,
    seasons: 8,
    poster: "../assets/images/gt.jpg",
    description:
      "Set in the vast and brutal continents of Westeros and Essos, Game of Thrones is a sprawling tale of dynastic struggles, political manipulation, and the thin line between honor and survival. The story follows several noble houses, primarily the Starks, Lannisters, and Targaryens, as they engage in a high-stakes 'game' to claim the Iron Throne. Beyond the politics, the world is filled with ancient magic, fearsome dragons, and an impending apocalypse led by the Night King and his army of the dead. It is a show where no character is safe, and every choice has a heavy price, blending gritty realism with high fantasy in a way that redefined modern television.",
    episodes_count: 41,
    episodes: [
      {
        season: 1,
        episode_number: 1,
        title: "Winter Is Coming",
        runtime: "62 min",
        description:
          "In the frozen North, a deserter from the Night's Watch is executed by Lord Eddard Stark, while King Robert Baratheon travels to Winterfell to offer Ned the position of Hand of the King. Meanwhile, in the distant land of Essos, the exiled Daenerys Targaryen is forced into a marriage with the Dothraki warlord Khal Drogo in exchange for an army to reclaim her throne.",
        rating: 9.0,
      },
    ],
  },
  {
    id: 2,
    title: "Breaking Bad",
    year: "2008–2013",
    air_time: "Sundays at 10:00 PM",
    next_episode_air_date: "June 10, 2026",
    genre: ["Crime", "Drama", "Thriller"],
    rating: 9.5,
    seasons: 5,
    poster: "../assets/images/bb.jpg",
    description:
      "Breaking Bad is a dark, gripping character study that chronicles the total transformation of Walter White, a brilliant but underachieving high school chemistry teacher. Living a life of quiet desperation and facing a terminal cancer diagnosis, Walter decides to risk everything by entering the meth-cooking business with a former student, Jesse Pinkman. What starts as a desperate attempt to secure his family's financial future quickly spirals into a descent into darkness, as Walter embraces his ego and becomes the ruthless drug lord 'Heisenberg'. The series masterfully explores themes of morality, consequence, and the corrupting nature of power, set against the stark landscape of Albuquerque.",
    episodes_count: 12,

    episodes: [
      {
        season: 1,
        episode_number: 1,
        title: "Pilot",
        runtime: "58 min",
        description:
          "After turning 50 and discovering he has terminal lung cancer, Walter White teams up with a local drug dealer, Jesse Pinkman, to cook high-grade methamphetamine in an old RV. Their first deal goes dangerously wrong, forcing Walter to use his chemistry knowledge for survival in a way he never imagined.",
        rating: 9.0,
      },
    ],
  },
  {
    id: 3,
    title: "Dexter",
    year: "2006–2013",
    air_time: "Sundays at 9:00 PM",
    next_episode_air_date: "July 04, 2026",
    genre: ["Crime", "Drama", "Mystery"],
    rating: 8.7,
    seasons: 8,
    poster: "../assets/images/dr.jpg",
    description:
      "By day, Dexter Morgan is an expert blood-spatter analyst for the Miami Metro Police, a quiet and helpful colleague. By night, he is a vigilante serial killer who hunts down those he believes have escaped the justice system. Guided by 'The Code of Harry', a set of rules instilled by his adoptive father to channel his homicidal urges, Dexter only kills other murderers. The series offers a chillingly intimate look into the mind of a sociopath who struggles to mimic human emotions and maintain a normal life with his sister Debra and girlfriend Rita, all while staying one step ahead of the very police force he works for.",
    episodes_count: 24,
    episodes: [
      {
        season: 1,
        episode_number: 1,
        title: "Dexter",
        runtime: "51 min",
        description:
          "Dexter begins stalking a killer who targets choir boys. As he prepares his kill room, he reflects on his past and the code he lives by. Back at work, a new serial killer emerges in Miami, leaving victims in public places without a single drop of blood, sparking Dexter's professional and personal curiosity.",
        rating: 8.6,
      },
    ],
  },
  {
    id: 4,
    title: "How I Met Your Mother",
    year: "2005–2014",
    air_time: "Mondays at 8:00 PM",
    next_episode_air_date: "August 20, 2026",
    genre: ["Comedy", "Romance"],
    rating: 8.3,
    seasons: 9,
    poster: "../assets/images/hm.jpg",
    description:
      "Set in Manhattan, this long-running sitcom follows the romantic adventures of Ted Mosby and his four best friends. Told through a series of flashbacks by a future Ted to his children in the year 2030, the story explores the highs and lows of dating, friendship, and adult life. From the legendary antics of Barney Stinson to the soulmate connection of Marshall and Lily, and the career ambitions of Robin Scherbatsky, the series is a heartfelt and often hilarious journey about finding 'The One'. It stands out for its unique structure, running gags, and its ability to balance lighthearted comedy with truly emotional life moments.",
    episodes_count: 14,

    episodes: [
      {
        season: 1,
        episode_number: 1,
        title: "Pilot",
        runtime: "22 min",
        description:
          "In 2030, Ted tells his kids about the night he met their 'Aunt' Robin in 2005. After his best friend Marshall proposes to Lily, Ted realizes he needs to start looking for true love, leading to a memorable first date with Robin that ends with a premature declaration of love.",
        rating: 8.2,
      },
    ],
  },
  {
    id: 5,
    title: "The Boys",
    year: "2019–Present",
    air_time: "Fridays at 12:00 AM",
    next_episode_air_date: "June 25, 2026",
    genre: ["Action", "Comedy", "Crime"],
    rating: 8.7,
    seasons: 4,
    poster: "../assets/images/tb.jpg",
    description:
      "In a world where superheroes are real, they aren't the noble figures we see in comic books. Instead, they are owned and marketed by Vought International, a massive corporation that covers up their scandals and crimes. Most 'Supes' are arrogant, corrupt, and dangerous, especially the god-like Homelander. 'The Boys' are a ragtag group of humans led by Billy Butcher, who have suffered personally at the hands of these heroes. Armed with nothing but their wits, weapons, and a burning desire for revenge, they attempt to expose the truth and bring down the supes in a hyper-violent, satirical battle for justice.",
    episodes_count: 38,

    episodes: [
      {
        season: 4,
        episode_number: 8,
        title: "Assassination Run",
        runtime: "65 min",
        description:
          "In the explosive Season 4 finale, the team tries to stop a political conspiracy while Homelander’s mental state becomes more unstable than ever. Relationships are tested and lives are lost as the world edges closer to a superhero-led takeover.",
        rating: 9.1,
      },
    ],
  },
  {
    id: 6,
    title: "Wednesday",
    year: "2022–Present",
    air_time: "Wednesdays at 12:00 AM",
    next_episode_air_date: "October 31, 2026",
    genre: ["Comedy", "Crime", "Fantasy"],
    rating: 8.1,
    seasons: 1,
    poster: "../assets/images/wd.jpg",
    description:
      "Wednesday Addams, the iconic daughter of the Addams Family, is sent to Nevermore Academy, a school specifically for supernatural outcasts. While navigating her cold, antisocial personality and her emerging psychic abilities, she becomes embroiled in a local murder mystery that has plagued the town for decades. With the help of her colorful roommate Enid and her silent companion Thing, Wednesday must uncover the truth about a monster on the loose and a secret conspiracy that involves her own parents' past, all while trying to survive the social horrors of boarding school life.",
    episodes_count: 16,

    episodes: [
      {
        season: 1,
        episode_number: 1,
        title: "Wednesday's Child Is Full of Woe",
        runtime: "59 min",
        description:
          "After being expelled from her public school for a prank involving piranhas, Wednesday arrives at Nevermore. She immediately senses something is wrong and begins investigating a series of gruesome attacks in the nearby woods, leading her to cross paths with the town's suspicious sheriff.",
        rating: 8.2,
      },
    ],
  },
  {
    id: 7,
    title: "Stranger Things",
    year: "2016–2025",
    air_time: "Fridays at 12:00 AM",
    next_episode_air_date: "November 14, 2026",
    genre: ["Drama", "Fantasy", "Horror"],
    rating: 8.7,
    seasons: 5,
    poster: "../assets/images/st.jpg",
    description:
      "A nostalgic love letter to the 1980s, Stranger Things begins with the mysterious disappearance of young Will Byers in the small town of Hawkins. As his friends, family, and local police chief search for him, they uncover a government conspiracy involving secret psychological experiments and a gateway to a dark, decaying parallel dimension known as the 'Upside Down'. The arrival of a telekinetic girl named Eleven changes everything, as the group must band together to fight otherworldly monsters and protect their world from a growing supernatural threat that spans seasons and dimensions.",
    episodes_count: 21,
    episodes: [
      {
        season: 4,
        episode_number: 9,
        title: "The Piggyback",
        runtime: "139 min",
        description:
          "In a massive, feature-length finale, the Hawkins kids split into teams to launch a dangerous assault on Vecna in the Upside Down. Eleven uses her powers to fight from afar, while Max risks her life to serve as bait, leading to a world-altering conclusion.",
        rating: 9.2,
      },
    ],
  },
  {
    id: 8,
    title: "Loki",
    year: "2021–2023",
    air_time: "Thursdays at 6:00 PM",
    next_episode_air_date: "December 25, 2026",
    genre: ["Action", "Adventure", "Fantasy"],
    rating: 8.2,
    seasons: 2,
    poster: "../assets/images/lk.jpg",
    description:
      "After the events of Avengers: Endgame, an alternate version of Loki steals the Tesseract and is immediately arrested by the Time Variance Authority (TVA), a bureaucratic organization that exists outside of time. Forced to answer for his crimes against the 'Sacred Timeline', Loki is recruited by Agent Mobius to help hunt down a dangerous variant of himself. The series follows Loki’s journey from a self-serving villain to a hero who questions the nature of fate and identity, eventually taking him on a mind-bending adventure across the multiverse to prevent its total destruction.",
    episodes_count: 28,

    episodes: [
      {
        season: 2,
        episode_number: 6,
        title: "Glorious Purpose",
        runtime: "56 min",
        description:
          "Loki finally understands what he must do to save his friends and the infinite branches of time. He makes the ultimate sacrifice, transcending his old self to become the protector of the multiverse, sitting on a throne at the center of all reality.",
        rating: 9.4,
      },
    ],
  },
];

export { showsData };
