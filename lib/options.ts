import { IFormContext } from './context';

export const make = [
    'Fender',
    'Gibson',
    'Jackson',
    'Charvel',
    'PRS',
    'Washburn',
    'ESP',
    'Gretsch',
    'G&L',
    'Knaggs',
    'Ibanez',
    'Epiphone',
    'Schecter',
    'Caparison',
    'Carvin',
    'Kiesel',
];

export const model = {
    Fender: [
        'Stratocaster',
        'Telecaster',
        'Esquire',
        'Nocaster',
        'Jaguar',
        'Jazzmaster',
    ],
    Gibson: ['Les Paul', 'SG', 'Firebird', 'Explorer', 'Flying V', 'M3'],
    Jackson: [
        'Dinky',
        'Kelly',
        'King V',
        'Monarkh',
        'Rhoads',
        'San Dimas',
        'So-Cal',
        'Soloist',
    ],
    Charvel: [
        'Dinky',
        'Kelly',
        'King V',
        'Monarkh',
        'Rhoads',
        'San Dimas',
        'So-Cal',
        'Soloist',
    ],
    PRS: ['Custom 24', 'McCarty', '509', 'Studio', 'CE 24', 'S2', 'SE'],
    Washburn: ['Nuno', 'S10', 'S20', 'S2H', 'V26'],
    ESP: ['Vintage', 'Kamikaze'],
    Gretsch: ['Falcon', 'G6'],
    'G&L': ['Asat', 'Commanche'],
    Knaggs: ['Chop Tank', 'Steve Stevens'],
    Ibanez: [],
    Epiphone: ['Les Paul', 'SG', 'Firebird', 'Explorer', 'Flying V', 'M3'],
    Schecter: [],
    Caparison: ['Orbit'],
    Carvin: ['DC', 'CS', 'AC'],
    Kiesel: ['DC', 'CS', 'AC'],
};

export const subModel = {
    Fender: {
        Stratocaster: [
            'American Deluxe',
            'American Standard',
            'American Vintage',
        ],
        Telecaster: [],
        Esquire: [],
        Nocaster: [],
        Jaguar: [],
        Jazzmaster: [],
    },
    Gibson: {
        'Les Paul': ['Standard', 'Custom', 'Special', 'Junior', 'Studio'],
        SG: [],
        Firebird: ['I', 'III', 'V', 'VII'],
        Explorer: [],
        'Flying V': [],
        M3: [],
    },
    Jackson: {
        Dinky: [
            'DK1',
            'DK2',
            'DK2M',
            'DK2S',
            'DK2T',
            'DK2FF',
            'DK2FS',
            'DK3',
            'DR3',
            'DKMG',
            'DKMGT',
            'DXMG',
            'DKXT',
        ],
        Kelly: ['KE3', 'KE4', 'KV3'],
        'King V': [
            'KV',
            'KVT',
            'KV6',
            'KV7',
            'KV6Q',
            'KV7Q',
            'KVTMG',
            'KVXMG',
            'JS32',
            'JS32T',
        ],
        Monarkh: [],
        Rhoads: [],
        'San Dimas': [],
        'So-Cal': [],
        Soloist: ['SL1', 'SL2', 'SL2H', 'SLS', 'SL3', 'SL3R', 'SL3X'],
    },
    Charvel: {
        Dinky: [
            'DK1',
            'DK2',
            'DK2M',
            'DK2S',
            'DK2T',
            'DK2FF',
            'DK2FS',
            'DK3',
            'DR3',
            'DKMG',
            'DKMGT',
            'DXMG',
            'DKXT',
        ],
        Kelly: ['KE3', 'KE4', 'KV3'],
        'King V': [
            'KV',
            'KVT',
            'KV6',
            'KV7',
            'KV6Q',
            'KV7Q',
            'KVTMG',
            'KVXMG',
            'JS32',
            'JS32T',
        ],
        Monarkh: [],
        Rhoads: [],
        'San Dimas': [],
        'So-Cal': [],
        Soloist: ['SL1', 'SL2', 'SL2H', 'SLS', 'SL3', 'SL3R', 'SL3X'],
    },
    PRS: {
        'Custom 24': [],
        McCarty: [],
        509: [],
        Studio: [],
        CE24: [],
        S2: [],
        SE: [],
    },
    Washburn: {
        Nuno: [],
        S10: [],
        S20: [],
        S2H: [],
        V26: [],
    },
    ESP: {
        Vintage: [],
        Kamikaze: [],
    },
    Gretsch: {
        Falcon: [],
        G6: [],
    },
    'G&L': {
        Asat: [],
        Commanche: [],
    },
    Knaggs: {
        'Chop Tank': [],
        'Steve Stevens': [],
    },
    Ibanez: {},
    Epiphone: {
        'Les Paul': ['Standard', 'Custom', 'Special', 'Junior', 'Studio'],
        SG: [],
        Firebird: [],
        Explorer: [],
        'Flying V': [],
        M3: [],
    },
    Schecter: {},
    Caparison: {
        Orbit: [],
    },
    Carvin: {
        DC: [],
        CS: [],
        AC: [],
    },
    Kiesel: {
        DC: [],
        CS: [],
        AC: [],
    },
};

export const country = [
    'USA',
    'Mexico',
    'Japan',
    'China',
    'Indonesia',
    'Vietnam',
];

export const condition = [
    'Mint',
    'Excellent',
    'Very Good',
    'Good',
    'Fair',
    'Poor',
];

export const bodyType = ['Solid', 'Semi-Hollow', 'Hollow'];

export const bodyWood = [
    'Alder',
    'Ash',
    'Mahogany',
    'Korina',
    'Poplar',
    'Maple',
    'Rosewood',
    'Koa',
    'Basswood',
    'Walnut',
];

export const scaleLength = [
    '25.5"',
    '24.75"',
    '24"',
    '24.5"',
    '25"',
    '26.5"',
    '27"',
];
export const neckJoint = ['Bolt-on', 'Set Neck', 'Neck-through'];

export const neckWood = [
    'Maple',
    'Flamed Maple',
    'Birdseye Maple',
    'Koa',
    'Rosewood',
    'Mahogany',
    'Wenge',
    'Walnut',
    'Korina',
    'Purpleheart',
];

export const fingerBoardMaterial = [
    'Maple',
    'Flamed Maple',
    'Birdseye Maple',
    'Rosewood',
    'Ebony',
    'Pau Ferro',
    'Laurel',
    'Wenge',
    'Walnut',
    'Blackwood',
    'Purpleheart',
];

export const radius = ['7.25"', '9.5"', '10"', '12"', '14"', '15"', '16"', '20"', 'Flat'];

export const neckProfile = [
    'Modern C',
    'Chunky C',
    'C',
    'D',
    'Hard V',
    'V',
    'U',
    'BB',
    'Asymmetrical',
    'Pattern',
    'Rounded',
    'Slim Taper',
];

export const inlays = [
    'Acrylic Dot',
    'Pearloid Dot',
    'Abalone Dot',
    'Black Dot',
    'White Dot',
    'Acrylic Trapezoid',
    'Pearloid Trapezoid',
    'Abalone Trapezoid',
    'Mother of Pearl Block',
    'Abalone Block',
    'Sharkfin',
    'Reverse Sharkfin',
];
export const nutWidth = [
    '1.575"',
    '1.6"',
    '1.625"',
    '1.65"',
    '1.656"',
    '1.66"',
    '1.685"',
    '1.687"',
    '1.6875"',
    '1.69"',
    '1.695"',
    '1 1/8"',
    '1 5/8"',
    '1 11/16"',
];
export const nutMaterial = [
    'Bone',
    'Fossil Ivory',
    'Plastic',
    'Graphite',
    'Ebony',
    'Synthetic Bone',
    'Tektoid',
    'Floyd Rose Locking',
    'Kahler Locking',
    'Fender LSR Roller',
];
export const frets = [
    '22 Medium Jumbo',
    '21 Medium Jumbo',
    '22 Medium',
    '21 Medium',
    '22 Medium Tall',
    '21 Medium Tall',
    '22 Jumbo',
    '21 Jumbo',
    '24 Medium Jumbo',
    '24 Medium',
];
export const pickupConfiguration = [
    'HH',
    'HHH',
    'H',
    'SSS',
    'HSS',
    'HSH',
    'SS',
    'HS',
    'S',
];
export const pickguard = [
    '3-Ply White/Black',
    '3-Ply Black/White',
    '5-Ply White/Black',
    '5-Ply Black/White',
    'Single-Ply Black',
    'Single-Ply White',
    'Mirror',
    'Gold',
    'Tortoise Shell',
];
export const controls = [
    '2-Volume, 2-Tone',
    '1-Volume, 2-Tone',
    '1-Volume, 1-Tone',
    '2-Volume, 1-Tone',
    'One Master Volume',
    'One Master Volume, One Master Tone',
];
export const switches = [
    '3-Way Toggle Switch',
    '5-Way Blade Switch',
    '3-Way Blade Switch',
];
export const hardware = ['Nickel', 'Black', 'Gold', 'Aged Nickel', 'Aged Gold'];
export const knobs = [
    'Black Top Hat',
    'White Top Hat',
    'Cream Top Hat',
    'Amber Top Hat',
    'Gold Top Hat',
    'Black Speed',
    'White Speed',
    'Amber Speed',
    'Gold Speed',
    'Knurled Chrome Dome',
    'Knurled Chrome',
    'Knurled Black Dome',
    'Knurled Black',
    'Knurled Gold Dome',
    'Knurled Gold',
    'Vintage Reflector',
];

export const otherFeatures = [
    'Certificate of Authenticity',
    'Original Case Candy',
    'NOS',
    'VOS',
    '100% Factory',
    'Original Plastic'

];
export const stringGauge = ['9-42', '10-46', '9-46'];
export const guitarCase = [
    'Original Hard Shell Case',
    'Original Molded Case',
    'Original Soft Shell Case',
    'Gator Hard Shell Case',
    'TKL Hard Shell Case',
    'TKL Molded Hard Shell Case',
    'SKB Molded Hard Shell Case',
    'Gigbag',
];

export const bridge = [
    'ABR-1 Tune-O-Matic',
    'Tune-O-Matic',
    'Tune-O-Matic with Fine Tune Stoptail',
    'Fender Hardtail with Block Saddles',
    'Fender 2-Point Deluxe Synchronized Tremolo',
    'Vintage Telecaster Bridge with Compensated Brass Saddles',
    'Floyd Rose 1000 Series Double Locking Tremolo',
    'Kahler 2700 Locking Tremolo System',
];
export const tuningMachines = [
    'Vintage Kluson',
    'Gibson Deluxe Vintage Style Kluson Keystone',
    'Gibson Branded Schaller',
    'Gibson Branded Schaller Locking',
    'Grover Deluxe Die Cast',
    'Vintage Style Fender',
    'Fender Sealed Die Case',
    'Fender Deluxe Die-cast',
    'Fender Staggered Deluxe Die-cast',
    'Fender Staggered Deluxe Sealed Locking',
    'Fender “F” Tuners',
    'Jackson Sealed Die Cast',
];

export const modifications = [
    'Refretted',
    'Neck Reset',
    "Refretted and Plek'd",
    'Upgraded Pickups',
    'Upgraded Tuning Machines',
    'FU TONE Floyd Upgrades',
];

export const formOptions = {
    make,
    model,
    subModel,
    year: [],
    finish: [],
    countryOfOrigin: country,
    serial: [],
    condition,
    weight: [],
    bodyType,
    bodyWood,
    scaleLength,
    neckJoint,
    neckWood,
    neckFinish: [],
    fingerBoard: fingerBoardMaterial,
    radius,
    neckProfile,
    inlays,
    nutWidth,
    nut: nutMaterial,
    frets,
    pickups: [],
    pickupConfiguration,
    pickguard,
    controls,
    switches,
    hardware,
    tuningMachines,
    bridge,
    knobs,
    modifications,
    otherFeatures,
    stringGauge,
    guitarCase,
};

export const formLabelPrettier: IFormContext = {
    make: 'Make',
    model: 'Model',
    subModel: 'Sub-Model',
    year: 'Year',
    finish: 'Finish',
    countryOfOrigin: 'Country',
    serial: 'Serial #',
    condition: 'Condition',
    weight: 'Weight',
    bodyType: 'Body Type',
    bodyWood: 'Body Wood',
    scaleLength: 'Scale Length',
    neckJoint: 'Neck Joint',
    neckWood: 'Neck Wood',
    neckFinish: 'Neck Finish',
    fingerBoard: 'Finger Board',
    radius: 'Neck Radius',
    neckProfile: 'Neck Profile',
    inlays: 'Inlays',
    nutWidth: 'Nut Width',
    nut: 'Nut',
    frets: 'Frets',
    pickups: 'Pickups',
    pickupConfiguration: 'Pickup Config',
    pickguard: 'Pickguard',
    controls: 'Controls',
    switches: 'Switch',
    hardware: 'Hardware',
    tuningMachines: 'Tuning Machines',
    bridge: 'Bridge',
    knobs: 'Knobs',
    modifications: 'Mods',
    otherFeatures: 'Other Features',
    stringGauge: 'String Guage',
    guitarCase: 'Case',
};
