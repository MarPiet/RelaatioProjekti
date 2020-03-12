const boxesData = [
//PAGE1
{
    text: "elementti",
    id: "q1",
    pid: 1,
    top: 400,
    left: 858-100,
    conn: ["q2", "q3", "q4", "q5"],
    available: true,
    completed: true
},
{
    text: "tuli",
    id: "q2",
    pid: 1,
    top: 400,
    left: 858-200-200,
    conn: ["q1", "q7", "q11", "q12"],
    available: true,
    completed: false
},
{
    text: "vesi",
    id: "q3",
    pid: 1,
    top: 200,
    left: 858-100,
    conn: ["q1", "q13"],
    available: true,
    completed: false
},
{
    text: "maa",
    id: "q4",
    pid: 1,
    top: 400,
    left: 858-200+400,
    conn: ["q1","q6", "q13"],
    available: true,
    completed: false
},
{
    text: "ilma",
    id: "q5",
    pid: 1,
    top: 600,
    left: 858-200+100,
    conn: ["q1", "q7", "q14"],
    available: true,
    completed: false
},
{
    text: "maapallo",
    id: "q6",
    pid: 1,
    top: 300,
    left: 858-200+600,
    conn: ["q4", "q8", "q14"],
    available: false,
    completed: false
},
{
    text: "happi",
    id: "q7",
    pid: 1,
    top: 600,
    left: 858-200-200,
    conn: ["q2", "q5", "q9", "q10"],
    available: false,
    completed: false
},
{
    text: "planeetta",
    id: "q8",
    pid: 1,
    top: 300,
    left: 858-200+800,
    conn: ["q6", "q15"],
    available: false,
    completed: false
},
{
    text: "hengitys",
    id: "q9",
    pid: 1,
    top: 750,
    left: 858-200-200,
    conn: ["q7", "q10", "q31"],
    available: false,
    completed: false
},
{
    text: "hiilidioksidi",
    id: "q10",
    pid: 1,
    top: 750,
    left: 858-200-400,
    conn: ["q9"],
    available: false,
    completed: false
},
{
    text: "lämpötila",
    id: "q11",
    pid: 1,
    top: 400,
    left: 858-200-600,
    conn: ["q2"],
    available: false,
    completed: false
},
{
    text: "aine",
    id: "q12",
    pid: 1,
    top: 100,
    left: 858-200-200,
    conn: ["q2"],
    available: false,
    completed: false
},
{
    text: "pohjavesi",
    id: "q13",
    pid: 1,
    top: 150,
    left: 858-200+600,
    conn: ["q4", "q3"],
    available: false,
    completed: false
},
{
    text: "ilmakehä",
    id: "q14",
    pid: 1,
    top: 600,
    left: 858-200+800,
    conn: ["q5", "q6"],
    available: false,
    completed: false
},





//PAGE 2
{
    text: "jupiter",
    id: "q15",
    pid: 2,
    top: 300,
    left: 858-200-600,
    conn: ["q8", "q15", "q16", "q17"],
    available: false,
    completed: false
},
{
    text: "io",
    id: "q16",
    pid: 2,
    top: 300,
    left: 858-200,
    conn: ["q15", "q17", "q24"],
    available: false,
    completed: false
},
{
    text: "kuu",
    id: "q17",
    pid: 2,
    top: 500,
    left: 858-200-300,
    conn: ["q15", "q16", "q18", "q19"],
    available: false,
    completed: false
},
{
    text: "täysikuu",
    id: "q18",
    pid: 2,
    top: 650,
    left: 858-200,
    conn: ["q17", "q21"],
    available: false,
    completed: false
},
{
    text: "yö",
    id: "q19",
    pid: 2,
    top: 500,
    left: 858-200+150,
    conn: ["q17", "q20"],
    available: false,
    completed: false
},
{
    text: "keskiyö",
    id: "q20",
    pid: 2,
    top: 350,
    left: 858-200+350,
    conn: ["q19", "q21"],
    available: false,
    completed: false
},
{
    text: "ihmissusi",
    id: "q21",
    pid: 2,
    top: 550,
    left: 858-200+450,
    conn: ["q18", "q20", "q22", "q23"],
    available: false,
    completed: false
},
{
    text: "ihminen",
    id: "q22",
    pid: 2,
    top: 700,
    left: 858-200+650,
    conn: ["q21", "q24", "q79"],
    available: false,
    completed: false
},
{
    text: "susi",
    id: "q23",
    pid: 2,
    top: 550,
    left: 858-200+750,
    conn: ["q21", "q25"],
    available: false,
    completed: false
},
{
    text: "kyborgi",
    id: "q24",
    pid: 2,
    top: 100,
    left: 858-200+450,
    conn: ["q22", "q16"],
    available: false,
    completed: false
},
//PAGE 3
{
    text: "canis",
    id: "q25",
    pid: 3,
    top: 550,
    left: 858-200-550,
    conn: ["q24", "q26"],
    available: false,
    completed: false
},
{
    text: "koira",
    id: "q26",
    pid: 3,
    top: 400,
    left: 858-200-300,
    conn: ["q25", "q27", "q28", "q29"],
    available: false,
    completed: false
},
{
    text: "lemmikki",
    id: "q27",
    pid: 3,
    top: 400,
    left: 858-200,
    conn: ["q26", "q28", "q29", "q30"],
    available: false,
    completed: false
},
{
    text: "kissa",
    id: "q28",
    pid: 3, 
    top: 700,
    left: 858-200,
    conn: ["q26", "q27", "q30", "q47"],
    available: false,
    completed: false
},
{
    text: "kesy",
    id: "q29",
    pid: 3,
    top: 150,
    left: 858-200+200,
    conn: ["q27", "q26"],
    available: false,
    completed: false
},
{
    text: "villi",
    id: "q30",
    pid: 3,
    top: 400,
    left: 858-200+450,
    conn: ["q27", "q28"],
    available: false,
    completed: false
},
//PAGE 4
{
    text: "keuhkot",
    id: "q31",
    pid: 4,
    top: 100,
    left: 858-200-400,
    conn: ["q9", "q32"],
    available: false,
    completed: false
},
{
    text: "hengityselin",
    id: "q32",
    pid: 4,
    top: 350,
    left: 858-200-400,
    conn: ["q31","q33","q38"],
    available: false,
    completed: false
},
{
    text: "nenä",
    id: "q33",
    pid: 4,
    top: 350,
    left: 858-200,
    conn: ["q32", "q34", "q35"],
    available: false,
    completed: false
},
{
    text: "suu",
    id: "q34",
    pid: 4,
    top: 350,
    left: 858-200+200,
    conn: ["q33", "q35", "q36"],
    available: false,
    completed: false
},
{
    text: "aisti",
    id: "q35",
    pid: 4,
    top: 700,
    left: 858-200+200,
    conn: ["q33", "q34", "q38", "q54"],
    available: false,
    completed: false
},
{
    text: "hammas",
    id: "q36",
    pid: 4,
    top: 350,
    left: 858-200+450,
    conn: ["q34", "q37"],
    available: false,
    completed: false
},
{
    text: "maito",
    id: "q37",
    pid: 4,
    top: 350,
    left: 858-200+650,
    conn: ["q36", "q39"],
    available: false,
    completed: false
},
{
    text: "aistinelin",
    id: "q38",
    pid: 4,
    top: 650,
    left: 858-200-200,
    conn: [ "q32", "q35"],
    available: false,
    completed: false
},
//PAGE 5
{
    text: "kaikkiruokainen",
    id: "q79",
    pid: 5,
    top: 100,
    left: 858-200+650,
    conn: ["q22", "q45", "q46"],
    available: false,
    completed: false
},
{
    text: "lehmä",
    id: "q39",
    pid: 5,
    top: 350,
    left: 858-200-450,
    conn: ["q37", "q40", "q44"],
    available: false,
    completed: false
},
{
    text: "sonni",
    id: "q40",
    pid: 5,
    top: 350,
    left: 858-200,
    conn: ["q39", "q41", "q44"],
    available: false,
    completed: false
},
{
    text: "sarvi",
    id: "q41",
    pid: 5,
    top: 600,
    left: 858-200+250,
    conn: ["q40", "q42", "q43"],
    available: false,
    completed: false
},
{
    text: "viikinki",
    id: "q42",
    pid: 5,
    top: 750,
    left: 858-200,
    conn: ["q41", "q43", "q63"],
    available: false,
    completed: false
},
{
    text: "alkoholi",
    id: "q43",
    pid: 5,
    top: 750,
    left: 858-200+600,
    conn: ["q41", "q42"],
    available: false,
    completed: false
},
{
    text: "nauta",
    id: "q44",
    pid: 5,
    top: 150,
    left: 858-200,
    conn: ["q39", "q40", "q45"],
    available: false,
    completed: false
},
{
    text: "kasvinsyöjä",
    id: "q45",
    pid: 5,
    top: 150,
    left: 858-200+450,
    conn: ["q44", "q79"],
    available: false,
    completed: false
},
{
    text: "lihansyöjä",
    id: "q46",
    pid: 5,
    top: 350,
    left: 858-200+650,
    conn: ["q45", "q48", "q79"],
    available: false,
    completed: false
},
//PAGE 6
{
    text: "kissaeläin",
    id: "q47",
    pid: 6,
    top: 100,
    left: 858-200,
    conn: ["q28", "q48", "q50"],
    available: false,
    completed: false
},
{
    text: "tiikeri",
    id: "q48",
    pid: 6,
    top: 350,
    left: 858-200-600,
    conn: ["q47", "q46", "q49"],
    available: false,
    completed: false
},
{
    text: "siperiantiikeri",
    id: "q49",
    pid: 6,
    top: 550,
    left: 858-200-450,
    conn: ["q48", "q53"],
    available: false,
    completed: false
},
{
    text: "leopardi",
    id: "q50",
    pid: 6,
    top: 350,
    left: 858-200+350,
    conn: ["q47", "q51"],
    available: false,
    completed: false
},
{
    text: "lumileopardi",
    id: "q51",
    pid: 6,
    top: 500,
    left: 858-200+250,
    conn: ["q50", "q52"],
    available: false,
    completed: false
},
{
    text: "lumi",
    id: "q52",
    pid: 6,
    top: 350,
    left: 858-200,
    conn: ["q51", "q53"],
    available: false,
    completed: false
},
{
    text: "siperia",
    id: "q53",
    pid: 6,
    top: 750,
    left: 858-200-200,
    conn: ["q49", "q52", "q70"],
    available: false,
    completed: false
},
//PAGE 7
{
    text: "maku",
    id: "q54",
    pid: 7,
    top: 100,
    left: 858-200+200,
    conn: ["q35", "q55", "q57", "q58"],
    available: false,
    completed: false
},
{
    text: "kieli",
    id: "q55",
    pid: 7,
    top: 350,
    left: 858-200+200,
    conn: ["q54", "q56", "q61"],
    available: false,
    completed: false
},
{
    text: "äidinkieli",
    id: "q56",
    pid: 7,
    top: 500,
    left: 858-200+450,
    conn: ["q55", "q59"],
    available: false,
    completed: false
},
{
    text: "haju",
    id: "q57",
    pid: 7,
    top: 150,
    left: 858-200-200,
    conn: ["q54", "q60"],
    available: false,
    completed: false
},
{
    text: "makea",
    id: "q58",
    pid: 7,
    top: 350,
    left: 858-200-350,
    conn: ["q55", "q60", "q61"],
    available: false,
    completed: false
},
{
    text: "suomi",
    id: "q59",
    pid: 7,
    top: 500,
    left: 858-200+650,
    conn: ["q56", "q62"],
    available: false,
    completed: false
},
{
    text: "hajuvesi",
    id: "q60",
    pid: 7,
    top: 300,
    left: 858-200-650,
    conn: ["q57", "q58"],
    available: false,
    completed: false
},
{
    text: "perusmaku",
    id: "q61",
    pid: 7,
    top: 500,
    left: 858-200-300,
    conn: ["q55", "q58"],
    available: false,
    completed: false
},
//PAGE 8
{
    text: "pohjoismaa",
    id: "q62",
    pid: 8,
    top: 500,
    left: 858-200-500,
    conn: ["q59"],
    available: false,
    completed: false
},
{
    text: "skandinavia",
    id: "q63",
    pid: 8,
    top: 100,
    left: 858-200,
    conn: ["q42", "q62", "q64", "q65", "q66", "q68"],
    available: false,
    completed: false
},
{
    text: "norja",
    id: "q64",
    pid: 8,
    top: 100,
    left: 858-200+400,
    conn: ["q63", "q67"],
    available: false,
    completed: false
},
{
    text: "ruotsi",
    id: "q65",
    pid: 8,
    top: 400,
    left: 858-200,
    conn: ["q63", "q67"],
    available: false,
    completed: false
},
{
    text: "tanska",
    id: "q66",
    pid: 8,
    top: 400,
    left: 858-200+200,
    conn: ["q63", "q67"],
    available: false,
    completed: false
},
{
    text: "ristilippu",
    id: "q67",
    pid: 8,
    top: 600,
    left: 858-200+450,
    conn: ["q64", "q65", "q66"],
    available: false,
    completed: false
},
{
    text: "pohjola",
    id: "q68",
    pid: 8,
    top: 400,
    left: 858-200+700,
    conn: ["q63"],
    available: false,
    completed: false
},
//PAGE 9
{
    text: "pohjoinen",
    id: "q69",
    pid: 9,
    top: 400,
    left: 858-200-600,
    conn: ["q68", "q69", "q70", "q71", "q72"],
    available: false,
    completed: false
},
{
    text: "kylmä",
    id: "q70",
    pid: 9,
    top: 100,
    left: 858-200-200,
    conn: ["q53", "q69", "q76"],
    available: false,
    completed: false
},
{
    text: "ilmansuunta",
    id: "q71",
    pid: 9,
    top: 350    ,
    left: 858-200-200,
    conn: ["q69", "q73", "q75"],
    available: false,
    completed: false
},
{
    text: "pohjoisnapa",
    id: "q72",
    pid: 9,
    top: 650,
    left: 858-200-400,
    conn: ["q69"],
    available: false,
    completed: false
},
{
    text: "etelä",
    id: "q73",
    pid: 9,
    top: 650,
    left: 858-200-100,
    conn: ["q71", "q74"],
    available: false,
    completed: false
},
{
    text: "antarktis",
    id: "q74",
    pid: 9,
    top: 450,
    left: 858-200+250,
    conn: ["q72", "q73"],
    available: false,
    completed: false
},
{
    text: "länsi",
    id: "q75",
    pid: 9,
    top: 250,
    left: 858-200+100,
    conn: ["q71", "q78"],
    available: false,
    completed: false
},
{
    text: "jääkausi",
    id: "q76",
    pid: 9,
    top: 100,
    left: 858-200+200,
    conn: ["q70", "q77"],
    available: false,
    completed: false
},
{
    text: "aikakausi",
    id: "q77",
    pid: 9,
    top: 200,
    left: 858-200+350,
    conn: ["q76", "q78"],
    available: false,
    completed: false
},
{
    text: "antiikki",
    id: "q78",
    pid: 9,
    top: 350,
    left: 858-200+500,
    conn: ["q75", "q77"],
    available: false,
    completed: false
},










]

export default boxesData