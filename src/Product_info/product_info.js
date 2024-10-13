import Chair_images from '../Chairs/cahimage.js';
import sofa_images from '../Sofas/cah2image.js';
import bed_images from '../Beds/cah3image.js';
import wardrobe_images from '../Wardrobes/cah4image.js';
import lamp_images from '../Lamps/cah5image.js';
import dining_images from '../Dinings/cah6image.js';

const PRODUCTS = [{
    id:1,
    type:'Chair',
    name: 'Cosmo Comfort Armchair',
    brand:'CosmoHome',
    unitPrice: 13000,
    images: [Chair_images.c1_1,
            Chair_images.c1_2,
            Chair_images.c1_3],
    description: `
      Clean lines and supportive comfort, regardless if you’re reading, socialising with friends or just relaxing for a moment.
      Each armchair has a unique expression since the wooden frame is first stained in a dark-brown tone and then covered with clear lacquer that makes the wood’s natural grains visible.
      High-resilience foam in the seat and back makes the armchair regain its shape when you stand up, and it’s complemented with zigzag springs in the seat and supportive fabric in the back for a firm comfort.
      You will sit stable and steady for years to come since the frame is made of hardwearing solid wood. You also enjoy a relaxed sitting position thanks to the angled backrest.
      The tall legs in solid wood make it easy to vacuum or reach things hiding under the armchair to avoid clutter.
      The elegant, fixed cover has a perfect fit that will last over time. You can choose from different covers and find one that suits you and your home.
    `,
    measurements: [
        'Height backrest: 46 cm (18 1/8 ")',
        'Width: 64 cm (25 1/4 ")',
        'Depth: 78 cm (30 3/4 ")',
        'Height: 76 cm (29 7/8 ")',
        'Free height under furniture: 22 cm (8 5/8 ")',
        'Armrest height: 63 cm (24 3/4 ")',
        'Seat width: 56 cm (22 ")',
        'Seat depth: 50 cm (19 5/8 ")',
        'Seat height: 45 cm (17 3/4 ")',
    ],
},
{
  id:2,
  type:'Chair',
  name: 'Zenith Lounge Furnish Chair',
  brand:'Zenith Furnishings',
  unitPrice: 18999,
  images: [
    Chair_images.c2_1,
    Chair_images.c2_2,
    Chair_images.c2_3
  ],
  description: `This wing chair and footstool are the perfect combination when you want to stretch out, rest your feet and sit extra comfortably and relaxed.
    You can easily move the footstool around to wherever you need it and use it as an extra seat, for example when you have friends visiting.
    The wing chair has a high back which provides extra support for your neck, so that you can lean your head back when resting.
    Round armrests, soft lines and an inviting upholstery give this wing chair a soft embracing feel.`,
  measurements: [
    'Width: 74 cm (29 ¼ ")',
    'Height: 47 cm (18 ¼ ")',
    'Length: 105 cm (41 ¼ ")',
    'Weight: 29.60 kg (65 lb 4 oz)',
    'Package(s): 1'
  ]
},
{
  id:3,
  type:'Chair',
  name: 'Tranquil Retreat Armchair',
  brand:'Tranquil Living',
  unitPrice: 16999,
  images: [
    Chair_images.c3_1,
    Chair_images.c3_2,
    Chair_images.c3_3
  ],
  description: `This classic and timeless wing chair with an embracing backrest gives you relaxing me-time and is also great to sit on while enjoying socialising with others.
    Clean lines, simple and at the same time a softly rounded design with wooden legs all make the wing chair easy to like and place anywhere.
    The wing chair has a high comfort level thanks to the seat with a combination of supportive springs and soft foam, lumbar support, armrests and an extra-high backrest that you can lean against.
    You can complete your wing chair with OSKARSHAMN footstool to sit even more comfortably.`,
  measurements: [
    'Depth: 86 cm (33 7/8 ")',
    'Height: 99 cm (39 ")',
    'Seat depth: 54 cm (21 1/4 ")',
    'Seat height: 44 cm (17 3/8 ")',
    'Seat width: 54 cm (21 1/4 ")',
    'Width: 82 cm (32 1/4 ")',
  ],

},
{
  id:4,
  type:'Chair',
  name: 'Nexus Cozy Corner Chair',
  brand:'Nexus Home',
  unitPrice: 14999,
  images: [
    Chair_images.c4_1,
    Chair_images.c4_2,
    Chair_images.c4_3
  ],
  description: `The shape of the armchair provides nice support for the lumbar region.
    The fixed cover HAKEBO feels soft and smooth and has a nice texture that makes the sofa comfortable and inviting.`,
  measurements: [
    'Depth: 86 cm (33 7/8 ")',
    'Height: 99 cm (39 ")',
    'Seat depth: 54 cm (21 1/4 ")',
    'Seat height: 44 cm (17 3/8 ")',
    'Seat width: 54 cm (21 1/4 ")',
    'Width: 82 cm (32 1/4 ")',
  ],
},
{
  id:5,
  type:'Chair',
  name: 'Blissful Oasis Armchair',
  brand:'Bliss Furniture',
  unitPrice: 15999,
  images: [
    Chair_images.c5_1,
    Chair_images.c5_2,
    Chair_images.c5_3
  ],
  description: `HAVBERG swivel armchair has an inviting and timeless design that feels cosy when you sit down to relax.
    The swivel function allows for more flexibility, for example if you want to turn around and easily reach the remote control or a beverage and a snack.
    The seat cushion is filled with polyurethane foam that provides a soft comfort and an embracing feeling.
    Stretch out and rest your feet on the footstool to sit extra comfortably and relaxed.
    The footstool also works as an extra seat which is practical when you have friends visiting.
    The cover is woven in a strong fabric that creates a visible texture and makes it more hardwearing.
    The swivel armchair and footstool are easy to assemble, so you can quickly sit down and relax.`,
  measurements: [
    'Depth: 86 cm (33 7/8 ")',
    'Height: 99 cm (39 ")',
    'Seat depth: 54 cm (21 1/4 ")',
    'Seat height: 44 cm (17 3/8 ")',
    'Seat width: 54 cm (21 1/4 ")',
    'Width: 82 cm (32 1/4 ")',
  ],
},
{
  id:6,
  type:'Chair',
  name: 'Harmony Lounge Chair',
  brand:'Harmony Home',
  unitPrice: 17999,
  images: [
    Chair_images.c6_1,
    Chair_images.c6_2,
    Chair_images.c6_3
  ],
  description: `Classic design with soft, rounded shapes and generously sized armrests makes VISKAFORS armchair a statement piece in any living room.
    The deep seat with pocket springs is really soft and creates an inviting, embracing feel when you sit on the armchair.
    Skillful craftsmanship and a perfect fit mean that the armchair will always show off its best side.
    The cover in cotton and polyester fabric is dyed in different tones, which gives it a nice effect. The strong and hardwearing woven quality gives the fabric a clear texture.`,
  measurements: [
    'Depth: 86 cm (33 7/8 ")',
    'Height: 99 cm (39 ")',
    'Seat depth: 54 cm (21 1/4 ")',
    'Seat height: 44 cm (17 3/8 ")',
    'Seat width: 54 cm (21 1/4 ")',
    'Width: 82 cm (32 1/4 ")',
  ],
},
{
  id:7,
  type:'Sofa',
  name: 'Harmony Sofa',
  brand:'Serenity Sofas',
  unitPrice: 13000,
  images: [
    sofa_images.c1_1,
    sofa_images.c1_2,
    sofa_images.c1_3
  ],
  description: `This soft sofa will have a long life since the seat cushions are filled with high resilience foam that gives good support for your body and quickly regains its original shape when you get up. The chaise longue has storage under the seat. The lid automatically stops in the open position so that you can easily pick out and put back the things that you are storing. You can complete with VIMLE headrest to extend the backrest of the sofa, so that you sit even more comfortably with a nice support for your neck. This cover is made from Saxemara fabric in cotton and polyester. The needlecord corduroy is soft yet durable and has a modern, elegant look. The cover is easy to keep clean since it is removable and machine washable. You can place the chaise longue section to the left or right of the sofa, and switch whenever you like.`,
  measurements: [
    'Height including back cushions: 83 cm (32 5/8 ")',
    'Height backrest: 68 cm (26 3/4 ")',
    'Depth chaise longue: 164 cm (64 5/8 ")',
    'Width: 322 cm (126 3/4 ")',
    'Depth: 98 cm (38 5/8 ")',
    'Seat depth, chaise longue: 124 cm (49 1/4 ")',
    'Free height under furniture: 6 cm (2 3/8 ")',
    'Armrest width: 15 cm (5 7/8 ")',
    'Armrest height: 68 cm (26 3/4 ")',
    'Seat width: 292 cm (115 ")',
    'Seat depth: 55 cm (21 5/8 ")',
    'Seat height: 48 cm (18 7/8 ")',
  ],
},
{
  id:8,
  type:'Sofa',
  name: 'LuxeLounge Sofa',
  brand:'Opulent Living Co.',
  unitPrice: 18999,
  images: [
    sofa_images.c2_1,
    sofa_images.c2_2,
    sofa_images.c2_3
  ],
  description: `This classic and timeless wing chair with an embracing backrest gives you relaxing me-time and is also great to sit on while enjoying socializing with others. Clean lines, simple and at the same time a softly rounded design with wooden legs all make the wing chair easy to like and place anywhere. The wing chair has a high comfort level thanks to the seat with a combination of supportive springs and soft foam, lumbar support, armrests and an extra-high backrest that you can lean against. You can complete your wing chair with OSKARSHAMN footstool to sit even more comfortably.`,
  measurements: [
    'Depth: 86 cm (33 7/8 ")',
    'Height: 89 cm (39 ")',
    'Seat depth: 54 cm (21 1/4 ")',
    'Seat height: 44 cm (17 3/8 ")',
    'Seat width: 54 cm (21 1/4 ")',
    'Width: 82 cm (32 1/4 ")',
  ],
},
{
  id: 9,
  type:'Sofa',
  name: 'UrbanScape Sofa',
  brand:'Metropolis Furnishings',
  unitPrice: 16999,
  images: [
    sofa_images.c3_1,
    sofa_images.c3_2,
    sofa_images.c3_3
  ],
  description: `5 year guarantee. Read about the terms in the guarantee brochure. A sofa-bed with small, neat dimensions which is easy to furnish with, even when space is limited. The storage space under the seat has room for pillows and throws. Readily converts into a bed. You get an even surface to sleep on since the seat comes as a single piece. Seat cushions filled with high resilience foam and polyester fibre wadding give comfortable support for your body, and easily regain their shape when you get up. Back cushions filled with polyester fibres for soft comfort.`,
  measurements: [
    'Width: 220 cm (86 5/8 ")',
    'Depth: 88 cm (34 5/8 ")',
    'Height: 92 cm (36 1/4 ")',
    'Seat depth: 57 cm (22 1/2 ")',
    'Seat height: 48 cm (18 7/8 ")',
    'Bed width: 145 cm (57 1/8 ")',
    'Bed length: 183 cm (72 ")',
    'Bed height: 35 cm (13 3/4 ")',
    'Armrest height: 66 cm (25 ")'
  ],
},
{
  id: 10,
  type:'Sofa',
  name: 'TranquilTide Sofa',
  brand:'Zenith Designs',
  unitPrice: 14999,
  images: [
    sofa_images.c4_1,
    sofa_images.c4_2,
    sofa_images.c4_3
  ],
  description: `Light, airy design with high legs and slim lines, yet still a great comfort thanks to the elastic weave in the bottom and high resilience foam in the seat cushions. The sofa's sections can be used freestanding or combined in different ways to get a size and shape that suits you and your home. If you need a larger sofa, you can add a section or two to your existing combination. You can create your own perfect combination with the planning tool. Assemble, take apart and put together again until it’s just right. The removable back cushions give your body support where needed. For example, place several behind your back for a more upright position or use them to make it comfortable when lying down and reading. The depth of the sofa makes it perfect for relaxing or even taking a nice nap. You can place the chaise longue section to the left or right of the sofa, and switch whenever you like. You can choose to use the sofa with or without armrests, depending on the expression you want to create. The high legs make it easy to clean the floor under the sofa. This cover is made of Fridtuna, a sturdy cotton and polyester fabric with a deep texture woven in different tones. The cover is easy to keep clean since it can be machine washed and is easy to take off and put on again.`,
  measurements: [
    'Width: 285 cm (112 1/4 ")',
    'Depth: 99 cm (39 ")',
    'Depth chaise longue: 151 cm (59 1/2 ")',
    'Seat depth: 70 cm (27 1/2 ")',
    'Seat depth, chaise longue: 122 cm (48 ")',
    'Height including back cushions: 83 cm (32 5/8 ")',
    'Height backrest: 69 cm (27 1/8 ")',
    'Seat height: 40 cm (15 3/4 ")',
    'Free height under furniture: 14 cm (5 1/2 ")',
    'Armrest width: 6 cm (2 3/8 ")'
  ],
},
{
  id: 11,
  type:'Sofa',
  name: 'NovaForm Sofa',
  brand:'Stellar Seating Solutions',
  unitPrice: 15999,
  images: [
    sofa_images.c5_1,
    sofa_images.c5_2,
    sofa_images.c5_3
  ],
  description: `This sofa converts quickly and easily into a spacious bed when you remove the back cushions and pull out the underframe. Sofa, chaise longue and double bed in one. Storage space under the chaise longue. The lid stays open so you can safely and easily take things in and out. You can place the chaise longue section to the left or right of the sofa, and switch whenever you like.`,
  measurements: [
    'Depth: 151 cm (59 1/2 ")',
    'Bed width: 140 cm (55 1/8 ")',
    'Bed length: 204 cm (80 3/8 ")',
    'Height including back cushions: 86 cm (33 7/8 ")',
    'Height backrest: 66 cm (26 ")',
    'Width: 230 cm (90 1/2 ")'
  ],
},
{
  id: 12,
  type:'Sofa',
  name: 'Enigma Sofa',
  brand:'Mystique Furnishings',
  unitPrice: 17999,
  images: [
    sofa_images.c6_1,
    sofa_images.c6_2,
    sofa_images.c6_3
  ],
  description: `Seat cushions filled with high resilience foam and polyester fibre wadding give comfortable support for your body, and easily regain their shape when you get up. Back cushions filled with polyester fibres for soft comfort.`,
  measurements: [
    'Height incl. headrest: 72 cm (28 3/8 ")',
    'Height including back cushions: 82 cm (32 1/4 ")',
    'Height backrest: 72 cm (28 3/8 ")',
    'Width: 201 cm (79 1/8 ")',
    'Depth: 91 cm (35 7/8 ")',
    'Free height under furniture: 15 cm (5 7/8 ")',
    'Armrest width: 18 cm (7 1/8 ")',
    'Armrest height: 60 cm (23 5/8 ")',
    'Seat width: 166 cm (65 3/8 ")',
    'Seat depth: 54 cm (21 1/4 ")',
    'Seat height: 48 cm (18 7/8 ")',
    'Height: 82 cm (32 1/4 ")'
  ],
},
{
  id: 13,
  type:'Bed',
  name: 'BlissfulHaven ',
  brand:'ComfortCraft',
  unitPrice: 18999,
  images: [
    bed_images.c1_1,
    bed_images.c1_2,
    bed_images.c1_3
  ],
  description: `This classic and timeless wing chair with an embracing backrest gives you relaxing me-time and is also great to sit on while enjoying socializing with others. Clean lines, simple and at the same time a softly rounded design with wooden legs all make the wing chair easy to like and place anywhere. The wing chair has a high comfort level thanks to the seat with a combination of supportive springs and soft foam, lumbar support, armrests and an extra-high backrest that you can lean against. You can complete your wing chair with OSKARSHAMN footstool to sit even more comfortably.`,
  measurements: [
    'Depth: 86 cm (33 7/8 ")',
    'Height: 99 cm (39 ")',
    'Seat depth: 54 cm (21 1/4 ")',
    'Seat height: 44 cm (17 3/8 ")',
    'Seat width: 54 cm (21 1/4 ")',
    'Width: 82 cm (32 1/4 ")'
  ],
},
{
  id: 14,
  type:'Bed',
  name: 'SereneDreamscape',
  brand:'LuxeHaven',
  unitPrice: 18999,
  images: [
    bed_images.c2_1,
    bed_images.c2_2,
    bed_images.c2_3
  ],
  description: `This classic and timeless wing chair with an embracing backrest gives you relaxing me-time and is also great to sit on while enjoying socializing with others. Clean lines, simple and at the same time a softly rounded design with wooden legs all make the wing chair easy to like and place anywhere. The wing chair has a high comfort level thanks to the seat with a combination of supportive springs and soft foam, lumbar support, armrests and an extra-high backrest that you can lean against. You can complete your wing chair with OSKARSHAMN footstool to sit even more comfortably.`,
  measurements: [
    'Depth: 86 cm (33 7/8 ")',
    'Height: 99 cm (39 ")',
    'Seat depth: 54 cm (21 1/4 ")',
    'Seat height: 44 cm (17 3/8 ")',
    'Seat width: 54 cm (21 1/4 ")',
    'Width: 82 cm (32 1/4 ")'
  ],
},
{
  id: 15,
  type:'Bed',
  name: 'CozyNook',
  brand:'SerenitySleep',
  unitPrice: 18999,
  images: [
    bed_images.c3_1,
    bed_images.c3_2,
    bed_images.c3_3
  ],
  description: `This classic and timeless wing chair with an embracing backrest gives you relaxing me-time and is also great to sit on while enjoying socializing with others. Clean lines, simple and at the same time a softly rounded design with wooden legs all make the wing chair easy to like and place anywhere. The wing chair has a high comfort level thanks to the seat with a combination of supportive springs and soft foam, lumbar support, armrests and an extra-high backrest that you can lean against. You can complete your wing chair with OSKARSHAMN footstool to sit even more comfortably.`,
  measurements: [
    'Depth: 86 cm (33 7/8 ")',
    'Height: 99 cm (39 ")',
    'Seat depth: 54 cm (21 1/4 ")',
    'Seat height: 44 cm (17 3/8 ")',
    'Seat width: 54 cm (21 1/4 ")',
    'Width: 82 cm (32 1/4 ")'
  ],
},
{
  id: 16,
  type:'Bed',
  name: 'TranquilTide',
  brand:'EliteRest',
  unitPrice: 18999,
  images: [
    bed_images.c4_1,
    bed_images.c4_2,
    bed_images.c4_3
  ],
  description: `This classic and timeless wing chair with an embracing backrest gives you relaxing me-time and is also great to sit on while enjoying socializing with others. Clean lines, simple and at the same time a softly rounded design with wooden legs all make the wing chair easy to like and place anywhere. The wing chair has a high comfort level thanks to the seat with a combination of supportive springs and soft foam, lumbar support, armrests and an extra-high backrest that you can lean against. You can complete your wing chair with OSKARSHAMN footstool to sit even more comfortably.`,
  measurements: [
    'Depth: 86 cm (33 7/8 ")',
    'Height: 99 cm (39 ")',
    'Seat depth: 54 cm (21 1/4 ")',
    'Seat height: 44 cm (17 3/8 ")',
    'Seat width: 54 cm (21 1/4 ")',
    'Width: 82 cm (32 1/4 ")'
  ],
},
{
  id: 17,
  type:'Bed',
  name: 'HarmonyHaven',
  brand:'ZenNest',
  unitPrice: 18999,
  images: [
    bed_images.c5_1,
    bed_images.c5_2,
    bed_images.c5_3
  ],
  description: `This classic and timeless wing chair with an embracing backrest gives you relaxing me-time and is also great to sit on while enjoying socializing with others. Clean lines, simple and at the same time a softly rounded design with wooden legs all make the wing chair easy to like and place anywhere. The wing chair has a high comfort level thanks to the seat with a combination of supportive springs and soft foam, lumbar support, armrests and an extra-high backrest that you can lean against. You can complete your wing chair with OSKARSHAMN footstool to sit even more comfortably.`,
  measurements: [
    'Depth: 86 cm (33 7/8 ")',
    'Height: 99 cm (39 ")',
    'Seat depth: 54 cm (21 1/4 ")',
    'Seat height: 44 cm (17 3/8 ")',
    'Seat width: 54 cm (21 1/4 ")',
    'Width: 82 cm (32 1/4 ")'
  ],
},
{
  id: 18,
  type:'Bed',
  name: 'RestfulAura',
  brand:'MNovaDream',
  unitPrice: 18999,
  images: [
    bed_images.c6_1,
    bed_images.c6_2,
    bed_images.c6_3
  ],
  description: `This classic and timeless wing chair with an embracing backrest gives you relaxing me-time and is also great to sit on while enjoying socializing with others. Clean lines, simple and at the same time a softly rounded design with wooden legs all make the wing chair easy to like and place anywhere. The wing chair has a high comfort level thanks to the seat with a combination of supportive springs and soft foam, lumbar support, armrests and an extra-high backrest that you can lean against. You can complete your wing chair with OSKARSHAMN footstool to sit even more comfortably.`,
  measurements: [
    'Depth: 86 cm (33 7/8 ")',
    'Height: 99 cm (39 ")',
    'Seat depth: 54 cm (21 1/4 ")',
    'Seat height: 44 cm (17 3/8 ")',
    'Seat width: 54 cm (21 1/4 ")',
    'Width: 82 cm (32 1/4 ")'
  ],
},
{
  id: 19,
  type:'Wardrobe',
  name: 'Eido',
  brand:'Serenity Sofas',
  unitPrice: 16999,
  images: [
    wardrobe_images.c1_1,
    wardrobe_images.c1_2,
    wardrobe_images.c1_3
  ],
  description: `This classic and timeless wing chair with an embracing backrest gives you relaxing me-time and is also great to sit on while enjoying socializing with others. Clean lines, simple and at the same time a softly rounded design with wooden legs all make the wing chair easy to like and place anywhere. The wing chair has a high comfort level thanks to the seat with a combination of supportive springs and soft foam, lumbar support, armrests and an extra-high backrest that you can lean against. You can complete your wing chair with OSKARSHAMN footstool to sit even more comfortably.`,
  measurements: [
    'Depth: 86 cm (33 7/8 ")',
    'Height: 99 cm (39 ")',
    'Seat depth: 54 cm (21 1/4 ")',
    'Seat height: 44 cm (17 3/8 ")',
    'Seat width: 54 cm (21 1/4 ")',
    'Width: 82 cm (32 1/4 ")'
  ],
},
{
  id: 20,
  type:'Wardrobe',
  name: 'Vestiaire',
  brand:'Opulent Living Co.',
  unitPrice: 16999,
  images: [
    wardrobe_images.c2_1,
    wardrobe_images.c2_2,
    wardrobe_images.c2_3
  ],
  description: `This classic and timeless wing chair with an embracing backrest gives you relaxing me-time and is also great to sit on while enjoying socializing with others. Clean lines, simple and at the same time a softly rounded design with wooden legs all make the wing chair easy to like and place anywhere. The wing chair has a high comfort level thanks to the seat with a combination of supportive springs and soft foam, lumbar support, armrests and an extra-high backrest that you can lean against. You can complete your wing chair with OSKARSHAMN footstool to sit even more comfortably.`,
  measurements: [
    'Depth: 86 cm (33 7/8 ")',
    'Height: 99 cm (39 ")',
    'Seat depth: 54 cm (21 1/4 ")',
    'Seat height: 44 cm (17 3/8 ")',
    'Seat width: 54 cm (21 1/4 ")',
    'Width: 82 cm (32 1/4 ")'
  ],
},
{
  id: 21,
  type:'Wardrobe',
  name: 'Havenly',
  brand:'Metropolis Furnishings',
  unitPrice: 16999,
  images: [
    wardrobe_images.c3_1,
    wardrobe_images.c3_2,
    wardrobe_images.c3_3
  ],
  description: `This classic and timeless wing chair with an embracing backrest gives you relaxing me-time and is also great to sit on while enjoying socializing with others. Clean lines, simple and at the same time a softly rounded design with wooden legs all make the wing chair easy to like and place anywhere. The wing chair has a high comfort level thanks to the seat with a combination of supportive springs and soft foam, lumbar support, armrests and an extra-high backrest that you can lean against. You can complete your wing chair with OSKARSHAMN footstool to sit even more comfortably.`,
  measurements: [
    'Depth: 86 cm (33 7/8 ")',
    'Height: 99 cm (39 ")',
    'Seat depth: 54 cm (21 1/4 ")',
    'Seat height: 44 cm (17 3/8 ")',
    'Seat width: 54 cm (21 1/4 ")',
    'Width: 82 cm (32 1/4 ")'
  ],
},
{
  id: 22,
  type:'Wardrobe',
  name: 'Attire Vault',
  brand:'Zenith Designs',
  unitPrice: 16999,
  images: [
    wardrobe_images.c4_1,
    wardrobe_images.c4_2,
    wardrobe_images.c4_3
  ],
  description: `This classic and timeless wing chair with an embracing backrest gives you relaxing me-time and is also great to sit on while enjoying socializing with others. Clean lines, simple and at the same time a softly rounded design with wooden legs all make the wing chair easy to like and place anywhere. The wing chair has a high comfort level thanks to the seat with a combination of supportive springs and soft foam, lumbar support, armrests and an extra-high backrest that you can lean against. You can complete your wing chair with OSKARSHAMN footstool to sit even more comfortably.`,
  measurements: [
    'Depth: 86 cm (33 7/8 ")',
    'Height: 99 cm (39 ")',
    'Seat depth: 54 cm (21 1/4 ")',
    'Seat height: 44 cm (17 3/8 ")',
    'Seat width: 54 cm (21 1/4 ")',
    'Width: 82 cm (32 1/4 ")'
  ],
},
{
  id: 23,
  type:'Wardrobe',
  name: 'Morph',
  brand:'Stellar Seating Solutions',
  unitPrice: 16999,
  images: [
    wardrobe_images.c5_1,
    wardrobe_images.c5_2,
    wardrobe_images.c5_3
  ],
  description: `This classic and timeless wing chair with an embracing backrest gives you relaxing me-time and is also great to sit on while enjoying socializing with others. Clean lines, simple and at the same time a softly rounded design with wooden legs all make the wing chair easy to like and place anywhere. The wing chair has a high comfort level thanks to the seat with a combination of supportive springs and soft foam, lumbar support, armrests and an extra-high backrest that you can lean against. You can complete your wing chair with OSKARSHAMN footstool to sit even more comfortably.`,
  measurements: [
    'Depth: 86 cm (33 7/8 ")',
    'Height: 99 cm (39 ")',
    'Seat depth: 54 cm (21 1/4 ")',
    'Seat height: 44 cm (17 3/8 ")',
    'Seat width: 54 cm (21 1/4 ")',
    'Width: 82 cm (32 1/4 ")'
  ],
},
{
  id: 24,
  type:'Wardrobe',
  name: 'Symbio',
  brand:'Mystique Furnishings',
  unitPrice: 16999,
  images: [
    wardrobe_images.c6_1,
    wardrobe_images.c6_2,
    wardrobe_images.c6_3
  ],
  description: `This classic and timeless wing chair with an embracing backrest gives you relaxing me-time and is also great to sit on while enjoying socializing with others. Clean lines, simple and at the same time a softly rounded design with wooden legs all make the wing chair easy to like and place anywhere. The wing chair has a high comfort level thanks to the seat with a combination of supportive springs and soft foam, lumbar support, armrests and an extra-high backrest that you can lean against. You can complete your wing chair with OSKARSHAMN footstool to sit even more comfortably.`,
  measurements: [
    'Depth: 86 cm (33 7/8 ")',
    'Height: 99 cm (39 ")',
    'Seat depth: 54 cm (21 1/4 ")',
    'Seat height: 44 cm (17 3/8 ")',
    'Seat width: 54 cm (21 1/4 ")',
    'Width: 82 cm (32 1/4 ")'
  ],
},
{
  id: 25,
  type:'Lamp',
  name: 'Armchair Reading Lamp',
  brand:'Symplify',
  unitPrice: 1490,
  images: [
    lamp_images.c1_1,
    lamp_images.c1_2,
    lamp_images.c1_3
  ],
  description: `Provides a directed light that is great for reading. You can easily direct the light where you want it because the lamp arm is adjustable.`,
  measurements: [
    'Max. Power: 20 W',
    'Height: 131 cm (52")',
    'Base Diameter: 25.5 cm (10")',
    'Shade Diameter: 15.5 cm (6")',
    'Cord Length: 200 cm (6\' 7")'
  ],
},
{
  id: 26,
  type:'Lamp',
  name: 'Bedside Night Lamp',
  brand:'Foziq',
  unitPrice: 1790,
  images: [
    lamp_images.c2_1,
    lamp_images.c2_2,
    lamp_images.c2_3
  ],
  description: `The textile shade provides a diffused and decorative light.`,
  measurements: [
    'Max. Power: 75 W',
    'Height: 55 cm (22")',
    'Base Diameter: 15 cm (6")',
    'Shade Diameter: 22 cm (9")',
    'Cord Length: 203 cm (6\' 8")'
  ],
},
{
  id: 27,
  type:'Lamp',
  name: 'Table Lamp',
  brand:'Skylofts',
  unitPrice: 899,
  images: [
    lamp_images.c3_1,
    lamp_images.c3_2,
    lamp_images.c3_3
  ],
  description: `Small and easy to place anywhere you want to bring some cosiness and mood light into your home.`,
  measurements: [
    'Max. Power: 4.4 W (4 W)',
    'Shade Width: 13 cm (5")',
    'Height: 15 cm (6")',
    'Base Diameter: 8 cm (3")',
    'Cord Length: 200 cm (6\' 7")'
  ],
},
{
  id: 28,
  type:'Lamp',
  name: 'Rustic Table Lamp',
  brand:'Zenith Designs',
  unitPrice: 1490,
  images: [
    lamp_images.c4_1,
    lamp_images.c4_2,
    lamp_images.c4_3
  ],
  description: `The lamp gives a soft light and creates a warm, cosy atmosphere in your room.`,
  measurements: [
    'Max. Power: 13 W',
    'Shade Width: 16 cm (6")',
    'Base Diameter: 14 cm (6")',
    'Cord Length: 200 cm (6\' 7")',
    'Total Height: 28 cm (11")'
  ],
},
{
  id: 29,
  type:'Lamp',
  name: 'Adjustable Study Lamp:',
  brand:'BillieJean',
  unitPrice: 1590,
  images: [
    lamp_images.c5_1,
    lamp_images.c5_2,
    lamp_images.c5_3
  ],
  description: `You can easily direct the light where you want it because the lamp arm and head are adjustable.`,
  measurements: [
    'Max. Power: 13 W',
    'Shade Diameter: 17 cm (7")',
    'Cord Length: 1.5 m (4\' 11")'
  ],
},
{
  id: 30,
  type:'Lamp',
  name: 'Pendant Lamp',
  brand:'Radhika Dahlan',
  unitPrice: 4490,
  images: [
    lamp_images.c6_1,
    lamp_images.c6_2,
    lamp_images.c6_3
  ],
  description: `You can easily switch between a brighter general light and a softer mood light by just pulling the strings. Gives decorative patterns on the ceiling and on the wall.`,
  measurements: [
    'Max. Power: 13 W',
    'Diameter: 35 cm (14")',
    'Cord Length: 150 cm (4\' 11")'
  ],
},
{
  id: 31,
  type:'Dining',
  name: 'Harmony Dining Set',
  brand:'Serenity Sofas',
  unitPrice: 6590,
  images: [
    dining_images.c1_1,
    dining_images.c1_2,
    dining_images.c1_3
  ],
  description: `You can stack the chairs, so they take less space when you're not using them. Sturdy metal table frame and durable, smooth melamine tabletop.`,
  measurements: [
    'Table:',
    'Width: 72 cm (28 ¼")',
    'Height: 2 cm (¾")',
    'Length: 116 cm (45 ½")',
    'Weight: 9.00 kg (19 lb 13 oz)',
    'Chair:',
    'Width: 49 cm (19 ¼")',
    'Height: 8 cm (3")',
    'Length: 76 cm (29 ¾")',
    'Weight: 2.83 kg (6 lb 4 oz)',
    'Package(s): 4'
  ],
},
{
  id: 32,
  type:'Dining',
  name: 'Sapphire Bistro Set',
  brand:'Opulent Living Co.',
  unitPrice: 9990,
  images: [
    dining_images.c2_1,
    dining_images.c2_2,
    dining_images.c2_3
  ],
  description: `Extendable dining table with 1 extra leaf seats 4-6; makes it possible to adjust the table size according to need. The smart design means that the table top has no seams when you use the table without extending it. The table legs follow along when you pull out the table and make more room for chairs around the table. The melamine table top is moisture resistant, stain resistant and easy to keep clean. The extra leaf can be stored within easy reach under the table top. Can be easily extended by one person. Chairs not Included.`,
  measurements: [
    'Min. Length: 120 cm (47 1/4")',
    'Max. Length: 180 cm (70 7/8")',
    'Width: 75 cm (29 1/2")',
    'Height: 73 cm (28 3/4")'
  ],
},
{
  id: 33,
  type:'Dining',
  name: 'Pure Elegance Set',
  brand:'Zenith Designs',
  unitPrice: 14490,
  images: [
    dining_images.c3_1,
    dining_images.c3_2,
    dining_images.c3_3
  ],
  description: `The melamine table top is moisture resistant, stain resistant and easy to keep clean. Extendable dining table with 1 extra leaf seats 4-6; makes it possible to adjust the table size according to need. The extra leaf can be stored within easy reach under the table top. 1 extension leaf included. Can be easily extended by one person. The smart design means that the table top has no seams when you use the table without extending it. You can stack the chairs, so they take less space when you're not using them.`,
  measurements: [
    'Table:',
    'Width: 77 cm (30 ¼")',
    'Height: 5 cm (2")',
    'Length: 123 cm (48 ¼")',
    'Weight: 18.60 kg (40 lb 16 oz)',
    'Chair:',
    'Width: 49 cm (19 ¼")',
    'Height: 8 cm (3")',
    'Length: 76 cm (29 ¾")',
    'Weight: 2.83 kg (6 lb 4 oz)'
  ],
},
{
  id: 34,
  type:'Dining',
  name: 'Metaluxe Timber Table',
  brand:'Stellar Seating Solutions',
  unitPrice: 39990,
  images: [
    dining_images.c4_1,
    dining_images.c4_2,
    dining_images.c4_3
  ],
  description: `Acacia has a rich brown colour and distinctive grain pattern. It is highly durable, resistant to scratches and water, ideal for heavy-use. Acacia slightly darkens with age.`,
  measurements: [
    'Length: 235 cm (92 1/2")',
    'Width: 100 cm (39 3/8")',
    'Height: 73 cm (28 3/4")'
  ],
},
{
  id: 35,
  type:'Dining',
  name: 'Maple Glow Dining Set',
  brand:'Mystique Furnishings',
  unitPrice: 16999,
  images: [
    dining_images.c5_1,
    dining_images.c5_2,
    dining_images.c5_3
  ],
  description: `Smart construction and a handcrafted look made our LISABO table series a winner of the Red Dot Design Award in 2016. Easy to assemble as each leg has only one fitting. Ash is a strong hardwood material with a beautiful grain pattern. As it ages the colour deepens moderately towards a deep straw colour. The table surface in ash veneer and legs in solid birch give a warm, natural feeling to your room. This table has been tested against our strictest standards for stability, durability and safety to withstand everyday use in your home for years.`,
  measurements: [
    'Width: 81 cm (32")',
    'Height: 6 cm (2 ¼")',
    'Length: 164 cm (64 ½")',
    'Weight: 23.35 kg (51 lb 8 oz)'
  ],
},
{
  id: 36,
  type:'Dining',
  name: 'Mahogany Eclipse Set',
  brand:'Stellar Seating Solutions',
  unitPrice: 36999,
  images: [
    dining_images.c6_1,
    dining_images.c6_2,
    dining_images.c6_3
  ],
  description: `Every table is unique, with varying grain pattern and natural colour shifts that are part of the charm of wood. 1 person can quickly and smoothly extend the table before the guests arrive. The smart design means that the table top has no seams when you use the table without extending it. The extra leaf can be stored within easy reach under the table top. The table legs are always in the corners of the table top even when the table is extended, so there is plenty of room for chairs under the table.`,
  measurements: [
    'Table:',
    'Width: 81 cm (32")',
    'Height: 5 cm (1 ¾")',
    'Length: 124 cm (48 ¾")',
    'Weight: 19.53 kg (43 lb 1 oz)',
    'Chair:',
    'Width: 44 cm (17 ¼")',
    'Height: 15 cm (5 ¾")',
    'Length: 96 cm (37 ¾")',
    'Weight: 6.38 kg (14 lb 1 oz)',
    'Package(s): 6'
  ],
}
];
export default PRODUCTS;