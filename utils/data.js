const data = {
    films: [
        {
          name: 'Annabelle',
          slug: 'annabelle',
          happens: 1970,
          release: 2014,
          logo: '/logo/annabelle.png',

        },

        {
          name: 'Annabelle Comes Home',
          slug: 'annabelleComesHome',
          happens: 1972,
          release: 2019,
          logo: '/logo/annabelleComesHome.png',
        },

        {
          name: 'Annabelle Creation',
          slug: 'annabelleCreation',
          happens: 1958,
          release: 2017,
          logo: '/logo/annabelleCreation.png',

        },

        {
          name: 'The Curse of La Llorona',
          slug: 'laLlorona',
          happens: 1977,
          release: 2019,
          logo: '/logo/laLlorona.png',

        },

        {
          name: 'The Conjuring',
          slug: 'theConjuring',
          happens: 1971,
          release: 2013,
          logo: '/logo/theConjuring.png',

        },

        {
          name: 'The Conjuring 2',
          slug: 'theConjuring2',
          happens: 1977,
          release: 2016,
          logo: '/logo/theConjuring2.png',

        },

        {
          name: 'The Conjuring The Devil Made Me Do It',
          slug: 'theConjuring3',
          happens: 1981,
          release: 2021,
          logo: '/logo/theConjuring3.png',

        },

        {
          name: 'The Nun',
          slug: 'theNun',
          happens: 1952,
          release: 2018,
          logo: '/logo/theNun.png',

        },
    ],

    characters: [
      {
        name: 'Ed Warren',
        slug: 'edWarren',
        species: 'human',
        gender: 'male',
        status: 'active',
        portrait: '/portrait/ed.jpg',
        bio:"Ed Warren is a main character in The Conjuring, The Conjuring 2, Annabelle Comes Home, and The Conjuring: The Devil Made Me Do It. He is portrayed by Patrick Wilson. He is married to Lorraine, with whom he has a daughter named Judy."
      },

      {
        name: 'Lorraine Warren',
        slug: 'lorraineWarren',
        species: 'human',
        gender: 'female',
        status: 'active',
        portrait: '/portrait/lorraine.jpg',
        bio:"Lorraine Warren is a main character in The Conjuring, The Conjuring 2, Annabelle Comes Home, and The Conjuring: The Devil Made Me Do It. She is portrayed by Vera Farmiga. She is married to Ed, with whom she has a daughter named Judy.",
      },

      {
        name: 'Judy Warren',
        slug: 'judyWarren',
        species: 'human',
        gender: 'female',
        status: 'active',
        portrait: '/portrait/judy.jpg',
        bio:'Judy Warren is a main character in The Conjuring, The Conjuring 2, The Conjuring spin-off; Annabelle Comes Home as the main protagonist, and the sequel, The Conjuring: The Devil Made Me Do It. She is portrayed by Sterling Jerins and Mckenna Grace. She is the daughter of Ed Warren and Lorraine Warren.',
      },

      {
        name: 'The Nun(Valak)',
        slug: 'theNun',
        species: 'demon',
        gender: 'unspecified',
        status: 'active',
        portrait: '/portrait/nun.jpg',
        bio:'Valak is the overall main antagonist of The Conjuring Universe, serving as the overarching antagonist of the 2013 horror film The Conjuring, the main antagonist of The Conjuring 2 and The Nun, and the overarching antagonist of Annabelle: Creation. It is portrayed by Bonnie Aarons and Joseph Bishara.',
      },

      {
        name: 'Bathsheba Sherman',
        slug: 'bathsheba',
        species: 'ghost',
        gender: 'female',
        status: 'hell',
        portrait: '/portrait/bathsheba.jpg',
        bio:'Bathsheba Thayer Sherman is the overall secondary antagonist of The Conjuring Universe, serving as the main antagonist on The Conjuring. She is portrayed by Joseph Bishara.',
      },

      {
        name: 'Father Perez',
        slug: 'perez',
        species: 'human',
        gender: 'male',
        status: 'active',
        portrait: '/portrait/perez.jpg',
        bio:'Father Cord Perez is a main character on Annabelle and The Curse of La Llorona. He is portrayed by Tony Amendola.',
      },

      {
        name: 'Annabelle Mullins',
        slug: 'annabelleMullins',
        species: 'ghost',
        gender: 'female',
        status: 'deceased',
        portrait: '/portrait/annabelleMullins.jpg',
        bio:'Annabelle "Bee" Mullins is a character on Annabelle: Creation and Annabelle Comes Home. She is portrayed by Samara Lee. She is the seven-year-old daughter of Samuel and Esther.',
      },

      {
        name: 'Annabelle(Malthus)',
        slug: 'annabelle',
        species: 'demon',
        gender: 'unspecified',
        status: 'active',
        portrait: '/portrait/annabelle.jpg',
        bio:'Malthus, also known as the Annabelle Demon, is the main antagonist of Annabelle, Annabelle: Creation and Annabelle Comes Home. It is a malevolent entity that latched onto a porcelain doll known as Annabelle. It uses Annabelle as a conduit, to torment those who own it. Its true demonic form was portrayed by Joseph Bishara (who also portrayed Bathsheba Sherman in The Conjuring) and voiced by Fred Tatasciore in Annabelle and Annabelle: Creation. In Annabelle Comes Home, its demonic form was portrayed and voiced by Alexander Ward.',
      },

    ],

    charactersC: [
      {
        name: 'Ed Warren',
        slug: 'edWarren',
        species: 'human',
        gender: 'male',
        status: 'active',
        portrait: '/portrait/ed.jpg',
      },

      {
        name: 'Lorraine Warren',
        slug: 'lorraineWarren',
        species: 'human',
        gender: 'female',
        status: 'active',
        portrait: '/portrait/lorraine.jpg',
      },

      {
        name: 'Judy Warren',
        slug: 'judyWarren',
        species: 'human',
        gender: 'female',
        status: 'active',
        portrait: '/portrait/judy.jpg',
      },

      {
        name: 'The Nun(Valak)',
        slug: 'theNunC',
        species: 'demon',
        gender: 'unspecified',
        status: 'active',
        portrait: '/portrait/nunC.jpg',
        bio:'Valak is the overall main antagonist of The Conjuring Universe, serving as the overarching antagonist of the 2013 horror film The Conjuring, the main antagonist of The Conjuring 2 and The Nun, and the overarching antagonist of Annabelle: Creation. It is portrayed by Bonnie Aarons and Joseph Bishara.',
      },

      {
        name: 'Bathsheba Sherman',
        slug: 'bathshebaC',
        species: 'ghost',
        gender: 'female',
        status: 'hell',
        portrait: '/portrait/bathshebaC.jpg',
        bio:'Bathsheba Thayer Sherman is the overall secondary antagonist of The Conjuring Universe, serving as the main antagonist on The Conjuring. She is portrayed by Joseph Bishara.',
      },

      {
        name: 'Father Perez',
        slug: 'perez',
        species: 'human',
        gender: 'male',
        status: 'active',
        portrait: '/portrait/perez.jpg',
      },

      {
        name: 'Annabelle Mullins',
        slug: 'annabelleMullins',
        species: 'ghost',
        gender: 'female',
        status: 'deceased',
        portrait: '/portrait/annabelleMullins.jpg',
      },

      {
        name: 'Annabelle(Malthus)',
        slug: 'annabelleC',
        species: 'demon',
        gender: 'unspecified',
        status: 'active',
        portrait: '/portrait/annabelleC.jpg',
        bio:'Malthus, also known as the Annabelle Demon, is the main antagonist of Annabelle, Annabelle: Creation and Annabelle Comes Home. It is a malevolent entity that latched onto a porcelain doll known as Annabelle. It uses Annabelle as a conduit, to torment those who own it. Its true demonic form was portrayed by Joseph Bishara (who also portrayed Bathsheba Sherman in The Conjuring) and voiced by Fred Tatasciore in Annabelle and Annabelle: Creation. In Annabelle Comes Home, its demonic form was portrayed and voiced by Alexander Ward.',
      },

    ]

}

export default data;