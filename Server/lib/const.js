/**
 * Rule the words! KKuTu Online
 * Copyright (C) 2017 JJoriping(op@jjo.kr)
 * 
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 * 
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 * 
 * You should have received a copy of the GNU General Public License
 * along with this program. If not, see <http://www.gnu.org/licenses/>.
 */

var GLOBAL = require("./sub/global.json");

exports.KKUTU_MAX = 400;
exports.MAIN_PORTS = GLOBAL.MAIN_PORTS;
exports.TEST_PORT = 4040;
exports.SPAM_CLEAR_DELAY = 1600;
exports.SPAM_ADD_DELAY = 750;
exports.SPAM_LIMIT = 7;
exports.BLOCKED_LENGTH = 10000;
exports.KICK_BY_SPAM = 9;
exports.MAX_OBSERVER = 4;
exports.TESTER = GLOBAL.ADMIN.concat([
	"Input tester id here"
]);
exports.IS_SECURED = GLOBAL.IS_SECURED;
exports.SSL_OPTIONS = GLOBAL.SSL_OPTIONS;
exports.OPTIONS = {
	'man': { name: "Manner" }, //매너
	'ext': { name: "Injeong" }, //어인정
	'mis': { name: "Mission" }, //미션
	'loa': { name: "Loanword" }, //우리말
	'prv': { name: "Proverb" }, //속담
	'str': { name: "Strict" }, //깐깐
	'k32': { name: "Sami" }, //3232
	'no2': { name: "No2" }, //두글자금지
	'ulm': { name: "Unlimited" }, //무한정
	'rtn': { name: "Returns"}, //리턴
	'rdt': { name: "RandomTurn"}, //랜덤턴
	'nog': { name: "NoGuest"}, //게스트금지
	'sht': { name: "Short"}, //짧음
	'rdm': { name: "Randommission"}, //랜덤미션
	/* 'bom': { name: "Bomb"} */
	'rev': { name: "Reverse"} //리버스
};
exports.MOREMI_PART = [ 'back', 'eye', 'mouth', 'shoes', 'clothes', 'head', 'lhand', 'rhand', 'front' ];
exports.CATEGORIES = [ "all", "spec", "skin", "badge", "head", "eye", "mouth", "clothes", "hs", "back" ];
exports.AVAIL_EQUIP = [
	"NIK", "BDG1", "BDG2", "BDG3", "BDG4",
	"Mhead", "Meye", "Mmouth", "Mhand", "Mclothes", "Mshoes", "Mback"
];
exports.GROUPS = {
	'spec': [ "PIX", "PIY", "PIZ", "CNS" ],
	'skin': [ "NIK" ],
	'badge': [ "BDG1", "BDG2", "BDG3", "BDG4" ],
	'head': [ "Mhead" ],
	'eye': [ "Meye" ],
	'mouth': [ "Mmouth" ],
	'clothes': [ "Mclothes" ],
	'hs': [ "Mhand", "Mshoes" ],
	'back': [ "Mback", "Mfront" ]
};
exports.RULE = {
/*
	유형: { lang: 언어,
		rule: 이름,
		opts: [ 추가 규칙 ],
		time: 시간 상수,
		ai: AI 가능?,
		big: 큰 화면?,
		ewq: 현재 턴 나가면 라운드 종료?
	}
*/
	'EKT': { lang: "en", // 영어 끄투
		rule: "Classic",
		opts: [ "man", "ext", "mis", "nog", "rdt", "bom" ],
		time: 1,
		ai: true,
		big: false,
		ewq: true
	},
	'ESH': { lang: "en", // 영어 끝말잇기
		rule: "Classic",
		opts: [ "ext", "mis", "nog", "rdt", "bom" ],
		time: 1,
		ai: true,
		big: false,
		ewq: true
	},
	'KKT': { lang: "ko", //한국어 쿵쿵따
		rule: "Classic",
		opts: [ "man", "ext", "mis", "loa", "str", "k32", "nog", "rdt", "bom" ],
		time: 1,
		ai: true,
		big: false,
		ewq: true
	},
	'KSH': { lang: "ko", //한국어 끝말잇기
		rule: "Classic",
		opts: [ "man", "ext", "mis", "loa", "str", "rtn", "nog", "rdt", "bom" ],
		time: 1,
		ai: true,
		big: false,
		ewq: true
	},
	'CSQ': { lang: "ko", //자음퀴즈
		rule: "Jaqwi",
		opts: [ "ijp", "nog" ],
		time: 1,
		ai: true,
		big: false,
		ewq: false
	},
	'KCW': { lang: "ko", // 한국어 십자말풀이
		rule: "Crossword",
		opts: [ "nog" ],
		time: 2,
		ai: false,
		big: true,
		ewq: false
	},
	'KTY': { lang: "ko", //한국어 타자대결
		rule: "Typing",
		opts: [ "prv", "nog" ],
		time: 1,
		ai: false,
		big: false,
		ewq: false
	},
	'ETY': { lang: "en", // 영어 타자대결
		rule: "Typing",
		opts: [ "prv", "nog" ],
		time: 1,
		ai: false,
		big: false,
		ewq: false
	},
	'KAP': { lang: "ko", //한국어 앞말잇기
		rule: "Classic",
		opts: [ "man", "ext", "mis", "loa", "str", "nog", "rdt", "bom" ],
		time: 1,
		ai: true,
		big: false,
		_back: true,
		ewq: true
	},
	'HUN': { lang: "ko", // 훈민정음
		rule: "Hunmin",
		opts: [ "ext", "mis", "loa", "str", "nog", "rdt", "bom" ],
		time: 1,
		ai: true,
		big: false,
		ewq: true
	},
	'KDA': { lang: "ko", // 한국어 단어대결
		rule: "Daneo",
		opts: [ "ijp", "mis", "nog", "rdt", "bom" ],
		time: 1,
		ai: true,
		big: false,
		ewq: true
	},
	'EDA': { lang: "en", // 영어 단어대결
		rule: "Daneo",
		opts: [ "ijp", "mis", "nog", "rdt", "bom" ],
		time: 1,
		ai: true,
		big: false,
		ewq: true
	},
	'KSS': { lang: "ko", // 한국어 솎솎
		rule: "Sock",
		opts: [ "no2", "nog" ],
		time: 1,
		ai: false,
		big: true,
		ewq: false
	},
	'ESS': { lang: "en", // 영어 솎솎
		rule: "Sock",
		opts: [ "no2", "nog" ],
		time: 1,
		ai: false,
		big: true,
		ewq: false
	},
	'KDG': { lang: "ko", // 한국어 그림퀴즈
		rule: "Drawing",
		opts: [ "ijp", "ulm", "sht", "nog" ],
		time: 1,
		ai: false,
		big: true,
		ewq: true
	},
	'EDG': { lang: "en", // 영어 그림퀴즈
		rule: "Drawing",
		opts: [ "ijp", "ulm", "sht", "nog" ],
		time: 1,
		ai: false,
		big: true,
		ewq: true
	},
	'KMH': { lang: "ko", // 한국어 가운뎃말잇기
		rule: "Classic",
		opts: [ "man", "mis", "ext", "nog", "rdt", "bom" ],
		time: 1,
		ai: true,
		big: false,
		ewq: true
	},
	'EAP': { lang: "en", // 영어 앞말잇기
		rule: "Classic",
		opts: [ "mis", "ext", "nog", "rdt", "bom" ],
		time: 1,
		ai: true,
		big: false,
		ewq: true
	},
	'EKD': { lang: "en", // 영어 쿵쿵따
		rule: "Classic",
		opts: [ "ext", "mis", "k32", "rtn", "rdt", "nog", "rdm" ],
		time: 1,
		ai: true,
		big: false,
		ewq: true
	}
};
exports.getPreScore = function(text, chain, tr){
	return 2 * (Math.pow(5 + 7 * (text || "").length, 0.74) + 0.88 * (chain || []).length) * ( 0.5 + 0.5 * tr );
};
exports.getPenalty = function(chain, score){
	return -1 * Math.round(Math.min(10 + (chain || []).length * 2.1 + score * 0.15, score));
};
exports.GAME_TYPE = Object.keys(exports.RULE);
exports.EXAMPLE_TITLE = {
	'ko': "가나다라마바사아자차",
	'en': "abcdefghij"
};
exports.INIT_SOUNDS = [ "ㄱ", "ㄲ", "ㄴ", "ㄷ", "ㄸ", "ㄹ", "ㅁ", "ㅂ", "ㅃ", "ㅅ", "ㅆ", "ㅇ", "ㅈ", "ㅉ", "ㅊ", "ㅋ", "ㅌ", "ㅍ", "ㅎ", "○" ];
exports.MISSION_ko = [ "가", "나", "다", "라", "마", "바", "사", "아", "자", "차", "카", "타", "파", "하" ];
exports.MISSION_en = [ "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z" ];

exports.KO_INJEONG = [
	"KRR", "GCG", "KTV", "NFX", "NSK", /*"UNI",*/ "KOT", "DBD", "DOT", "THP", "DRR", "DGF", "DGM", "RAG",
	"JLN", "LVL", "LGK", "LOL", "MRN", "MMM", "MAF", "JAN", "MAP", "AKS", "MOB", "BAN", "BUS", "ALE", "VOC", "VLN", "HYK",
	"CYP", "SWS", "HRH", "STA", "SLS", "OIJ", "IMS", "AKT", "APT", "ESB", "ELW", "LRT", "ERB", "KMV", "OIM", "OVW",
	"NEX", "GSI", "WOW", "YRY", "KPO", "JRT", /*"CER",*/ "ZEL", /*"CNT",*/ "MKK", "CKR", "CRO", "CRD", "CRY", "FGO", "POK", "PCR", "HAI", "HSS", /*"HAK",*/ "KMU", "KRP", "KPI",
	"HDC", "HOS"
];
exports.EN_INJEONG = [
	"LOL"
];
exports.KO_THEME = [
	"10", "20", "30", "40", "50", "60", "70", "80", "90", "100", "110", "120", "130",
	"140", "150", "160", "170", "180", "190", "200", "210",
	"220", "230", "240", "250", "260", "270", "280", "290", "300", "310",
	"320", "330", "340", "350", "360", "370", "380", "390", "400", "410", "420", "430", "440",
	"450", "460", "470", "480", "490", "500", "510", "520", "530"
];
exports.EN_THEME = [
	"e05", "e08", "e12", "e13", "e15",
	"e18", "e20", "e43"
];
exports.IJP_EXCEPT = [
];
exports.KO_IJP = exports.KO_INJEONG.concat(exports.KO_THEME).filter(function(item){ return !exports.IJP_EXCEPT.includes(item); });
exports.EN_IJP = exports.EN_INJEONG.concat(exports.EN_THEME).filter(function(item){ return !exports.IJP_EXCEPT.includes(item); });
exports.REGION = {
	'en': "en",
	'ko': "kr"
};
exports.KOR_STRICT = /(^|,)(1|INJEONG)($|,)/;
exports.KOR_GROUP = new RegExp("(,|^)(" + [
	"0", "1", "3", "7", "8", "11", "9",
	"16", "15", "17", "2", "18", "20", "26", "19",
	"INJEONG"
].join('|') + ")(,|$)");
exports.ENG_ID = /^[a-z]+$/i;
exports.KOR_FLAG = {
	LOANWORD: 1, // 외래어
	INJEONG: 2,	// 어인정
	SPACED: 4, // 띄어쓰기를 해야 하는 어휘
	SATURI: 8, // 방언
	OLD: 16, // 옛말
	MUNHWA: 32 // 문화어
};
exports.WP_REWARD = function(){
	return 10 + Math.floor(Math.random() * 91);
};
exports.getRule = function(mode){
	return exports.RULE[exports.GAME_TYPE[mode]];
};
