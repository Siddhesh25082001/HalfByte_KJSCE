/* -------------------------------------------------------------------------- */
/*                             CONSTANTS AND DATA                             */
/* -------------------------------------------------------------------------- */

const IMG_LINK_PREFIX = "https://img.icons8.com/emoji/48/000000/"
const colors = "https://img.icons8.com/color/48/000000/"
const fluency = "https://img.icons8.com/fluency/48/000000/"

let words = {

    "yes" : [
        {
            text : "yes",
            icon : "https://img.icons8.com/emoji/48/000000/check-mark-emoji.png"
        },
    ],

    "no" : [
        {
            text : "no",
            icon : "https://img.icons8.com/emoji/48/000000/no-entry-emoji.png"
        },
    ],

    "greeting" : [
        {
            text : "hello",
            icon : "https://img.icons8.com/emoji/48/000000/victory-hand-emoji.png"
        },
    
        {
            text : "goodbye",
            icon : "https://img.icons8.com/emoji/48/000000/waving-hand-emoji.png"
        },
    
        {
            text : "okay",
            icon : "https://img.icons8.com/emoji/48/000000/thumbs-up.png"
        },
    
        {
            text : "please",
            icon : "https://img.icons8.com/emoji/48/000000/pleading-face.png",
        },
    
        {
            text : "thanks",
            icon : "https://img.icons8.com/emoji/48/000000/folded-hands-emoji-1.png"
        },
    
        {
            text : "sorry",
            icon : "https://img.icons8.com/emoji/48/000000/white-flag.png"
        },
    ],

    "pronoun" : [

        {
            text : "you",
            icon : "https://img.icons8.com/emoji/48/000000/person-running.png"
        },
        
        {
            text : "i am",
            icon : "i-pronoun.png"
        },
        
        {
            text : "mine",
            icon : "https://img.icons8.com/emoji/48/000000/person-running.png"
        },
        
        {
            text : "they",
            icon : "they.png"
        },
        
        {
            text : "he",
            icon : "he.png"
        },
        
        {
            text : "we",
            icon : "we.png"
        },
    ],

    "time" : [  
        
        {
            text : "now",
            icon : "https://img.icons8.com/flat-round/48/000000/play--v1.png"
        }

    ],

    "action" : [
        
        {
            text : "work",
            icon : "https://img.icons8.com/ios-filled/48/000000/running.png"
        },
        
        {
            text : "play",
            icon : "https://img.icons8.com/flat-round/48/000000/play--v1.png"
        },
        
        {
            text : "have",
            icon : "https://img.icons8.com/ios-filled/48/000000/h.png"
        },
        
        {
            text : "stop",
            icon : "https://img.icons8.com/external-those-icons-lineal-color-those-icons/48/000000/external-stop-traffic-road-signs-those-icons-lineal-color-those-icons.png"
        },
        
        {
            text : "read",
            icon : "https://img.icons8.com/external-victoruler-flat-victoruler/64/000000/external-read-education-and-school-victoruler-flat-victoruler.png"
        },
        
        {
            text : "write",
            icon : "https://img.icons8.com/external-flaticons-lineal-color-flat-icons/64/000000/external-write-customer-feedback-flaticons-lineal-color-flat-icons.png"
        },
        
        {
            text : "fast",
            icon : "https://img.icons8.com/emoji/48/000000/person-running.png"
        },
        
        {
            text : "slow",
            icon : "https://img.icons8.com/external-kmg-design-flat-kmg-design/32/000000/external-backward-user-interface-kmg-design-flat-kmg-design.png"
        },

    ],

    "adjective" : [
        {
            text : "happy",
            icon : "grinning-face-with-big-eyes--v2.png"
        },
        {
            text : "sad",
            icon : "sad--v1.png"
        },
        {
            text : "tired",
            icon : "https://img.icons8.com/external-flaticons-lineal-color-flat-icons/64/000000/external-tired-comfort-flaticons-lineal-color-flat-icons-2.png"
        },
        {
            text : "good",
            icon : "https://img.icons8.com/external-xnimrodx-lineal-color-xnimrodx/64/000000/external-good-customer-review-xnimrodx-lineal-color-xnimrodx.png"
        },
        {
            text : "sleepy",
            icon : "sleeping.png"
        },
    ],

    "emoji" : [
        {
            text : "like",
            icon : "https://img.icons8.com/emoji/48/000000/angry-face-emoji--v2.png"
        },
        {
            text : "feel",
            icon : "https://img.icons8.com/emoji/48/000000/worried-face.png"
        },
        {
            text : "like",
            icon : "https://img.icons8.com/emoji/48/000000/frowning-face.png"
        },
        {
            text : "help",
            icon : "https://img.icons8.com/emoji/48/000000/smiling-face.png"
        },
        {
            text : "like",
            icon : "https://img.icons8.com/emoji/48/000000/astonished-face.png"
        },
        {
            text : "please",
            icon : "https://img.icons8.com/emoji/48/000000/pleading-face.png"
        },
    ],

    "question" : [
        {
            text : "why",
            icon : "https://img.icons8.com/external-bearicons-flat-bearicons/64/000000/external-What-miscellany-texts-and-badges-bearicons-flat-bearicons.png"
        },
        {
            text : "what",
            icon : "https://img.icons8.com/external-bearicons-flat-bearicons/64/000000/external-What-miscellany-texts-and-badges-bearicons-flat-bearicons.png"
        },
    ],

    "alphabet" : [
        {
            text : "a",
            icon : "https://img.icons8.com/ios-filled/48/000000/a.png",
            code : "&#65;"
        },
        {
            text : "b",
            icon : "https://img.icons8.com/ios-filled/48/000000/b.png",
            code : "&#66;"
        },
        {
            text : "c",
            icon : "https://img.icons8.com/ios-filled/48/000000/c.png",
            code : "&#67;"
        },
        {
            text : "d",
            icon : "https://img.icons8.com/ios-filled/48/000000/d.png",
            code : "&#68;"
        },
        {
            text : "e",
            icon : "https://img.icons8.com/ios-filled/48/000000/e.png",
            code : "&#69;"
        },
        {
            text : "f",
            icon : "https://img.icons8.com/ios-filled/48/000000/f.png",
            code : "&#70;"
        },
        {
            text : "g",
            icon : "https://img.icons8.com/ios-filled/48/000000/g.png",
            code : "&#71;"
        },
        {
            text : "h",
            icon : "https://img.icons8.com/ios-filled/48/000000/h.png",
            code : "&#72;"
        },
        {
            text : "i",
            icon : "https://img.icons8.com/ios-filled/48/000000/i.png",
            code : "&#73;"
        },
        {
            text : "j",
            icon : "https://img.icons8.com/ios-filled/48/000000/j.png",
            code : "&#74;"
        },
        {
            text : "k",
            icon : "https://img.icons8.com/ios-filled/48/000000/k.png",
            code : "&#75;"
        },
        {
            text : "l",
            icon : "https://img.icons8.com/ios-filled/48/000000/l.png",
            code : "&#76;"
        },
        {
            text : "m",
            icon : "https://img.icons8.com/ios-filled/48/000000/m.png",
            code : "&#77;"
        },
        {
            text : "n",
            icon : "https://img.icons8.com/ios-filled/48/000000/n.png",
            code : "&#78;"
        },
        {
            text : "o",
            icon : "https://img.icons8.com/ios-filled/48/000000/o.png",
            code : "&#79;"
        },
        {
            text : "p",
            icon : "https://img.icons8.com/ios-filled/48/000000/p.png",
            code : "&#80;"
        },
        {
            text : "q",
            icon : "https://img.icons8.com/ios-filled/48/000000/q.png",
            code : "&#81;"
        },
        {
            text : "r",
            icon : "https://img.icons8.com/ios-filled/48/000000/r.png",
            code : "&#82;"
        },
        {
            text : "s",
            icon : "https://img.icons8.com/ios-filled/48/000000/s.png",
            code : "&#83;"
        },
        {
            text : "t",
            icon : "https://img.icons8.com/ios-filled/48/000000/t.png",
            code : "&#84;"
        },
        {
            text : "u",
            icon : "https://img.icons8.com/ios-filled/48/000000/u.png",
            code : "&#85;"
        },
        {
            text : "v",
            icon : "https://img.icons8.com/ios-filled/48/000000/v.png",
            code : "&#86;"
        },
        {
            text : "w",
            icon : "https://img.icons8.com/ios-filled/48/000000/w.png",
            code : "&#87;"
        },
        {
            text : "x",
            icon : "https://img.icons8.com/ios-filled/48/000000/x.png",
            code : "&#88;"
        },
        {
            text : "y",
            icon : "https://img.icons8.com/ios-filled/48/000000/y.png",
        },
        {
            text : "z",
            icon : "https://img.icons8.com/ios-filled/48/000000/z.png",
        },
    ],

    "number" : [
        {
            text : "0",
            icon : "https://img.icons8.com/emoji/48/000000/keycap-digit-zero-emoji.png"
        },
        {
            text : "1",
            icon : "https://img.icons8.com/emoji/48/000000/keycap-digit-one-emoji.png"
        },
        {
            text : "2",
            icon : "https://img.icons8.com/emoji/48/000000/keycap-digit-two-emoji.png"
        },
        {
            text : "3",
            icon : "https://img.icons8.com/emoji/48/000000/keycap-digit-three-emoji.png"
        },
        {
            text : "4",
            icon : "https://img.icons8.com/emoji/48/000000/keycap-digit-four-emoji.png"
        },
        {
            text : "5",
            icon : "https://img.icons8.com/emoji/48/000000/keycap-digit-five-emoji.png"
        },
        {
            text : "6",
            icon : "https://img.icons8.com/emoji/48/000000/keycap-digit-six-emoji.png"
        },
        {
            text : "7",
            icon : "https://img.icons8.com/emoji/48/000000/keycap-digit-seven-emoji.png"
        },
        {
            text : "8",
            icon : "https://img.icons8.com/emoji/48/000000/keycap-digit-eight-emoji.png"
        },
        {
            text : "9",
            icon : "https://img.icons8.com/emoji/48/000000/keycap-digit-nine-emoji.png"
        },
    ]

}