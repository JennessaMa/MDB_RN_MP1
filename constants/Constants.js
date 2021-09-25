const nameToPic = { 
	 aadypillai: ["Aady Pillai", require("../assets/MemberPictures/aadypillai.jpg")], 
	 aarushiagrawal: ["Aarushi Agrawal", require("../assets/MemberPictures/aarushiagrawal.jpg")], 
	 adaman: ["Adam An", require("../assets/MemberPictures/adaman.jpg")], 
	 afeestiamiyu: ["Afees Tiamiyu", require("../assets/MemberPictures/afeestiamiyu.jpg")], 
	 airsaengthongsrikamol: ["Air Saengthongsrikamol", require("../assets/MemberPictures/airsaengthongsrikamol.jpg")], 
	 allisonhusain: ["Allison Husain", require("../assets/MemberPictures/allisonhusain.jpg")], 
	 anandchandra: ["Anand Chandra", require("../assets/MemberPictures/anandchandra.jpg")], 
	 anikgupta: ["Anik Gupta", require("../assets/MemberPictures/anikgupta.jpg")], 
	 aniruthnarayanan: ["Aniruth Narayanan", require("../assets/MemberPictures/aniruthnarayanan.jpg")], 
	 anitashen: ["Anita Shen", require("../assets/MemberPictures/anitashen.jpg")], 
	 anjalithakrar: ["Anjali Thakrar", require("../assets/MemberPictures/anjalithakrar.jpg")], 
	 anmolparande: ["Anmol Parande", require("../assets/MemberPictures/anmolparande.jpg")], 
	 ardaakman: ["Arda Akman", require("../assets/MemberPictures/ardaakman.jpg")], 
	 ashwinaggarwal: ["Ashwin Aggarwal", require("../assets/MemberPictures/ashwinaggarwal.jpg")], 
	 ashwinkumar: ["Ashwin Kumar", require("../assets/MemberPictures/ashwinkumar.jpg")], 
	 athenaleong: ["Athena Leong", require("../assets/MemberPictures/athenaleong.jpg")], 
	 briannalopez: ["Brianna Lopez", require("../assets/MemberPictures/briannalopez.jpg")], 
	 charlesyang: ["Charles Yang", require("../assets/MemberPictures/charlesyang.jpg")], 
	 colinzhou: ["Colin Zhou", require("../assets/MemberPictures/colinzhou.jpg")], 
	 divyatadimeti: ["Divya Tadimeti", require("../assets/MemberPictures/divyatadimeti.jpg")], 
	 dohyuncheon: ["DoHyun Cheon", require("../assets/MemberPictures/dohyuncheon.jpg")], 
	 dominicdebettencourt: ["Dominic de Bettencourt", require("../assets/MemberPictures/dominicdebettencourt.jpg")], 
	 eileenliu: ["Eileen Liu", require("../assets/MemberPictures/eileenliu.jpg")], 
	 ernestgoh: ["Ernest Goh", require("../assets/MemberPictures/ernestgoh.jpg")], 
	 francischalissery: ["Francis Chalissery", require("../assets/MemberPictures/francischalissery.jpg")], 
	 geomorales: ["Geo Morales", require("../assets/MemberPictures/geomorales.jpg")], 
	 harrisonresnick: ["Harrison Resnick", require("../assets/MemberPictures/harrisonresnick.jpg")], 
	 ianshen: ["Ian Shen", require("../assets/MemberPictures/ianshen.jpg")], 
	 imrankhaliq: ["Imran Khaliq", require("../assets/MemberPictures/imrankhaliq.jpg")], 
	 isabellaotterson: ["Isabella Otterson", require("../assets/MemberPictures/isabellaotterson.jpg")], 
	 jacobpashman: ["Jacob Pashman", require("../assets/MemberPictures/jacobpashman.jpg")], 
	 jamesjung: ["James Jung", require("../assets/MemberPictures/jamesjung.jpg")], 
	 janvishah: ["Janvi Shah", require("../assets/MemberPictures/janvishah.jpg")], 
	 jeffreycheng: ["Jeffrey Cheng", require("../assets/MemberPictures/jeffreycheng.jpg")], 
	 jennessama: ["Jennessa Ma", require("../assets/MemberPictures/jennessama.jpg")], 
	 joeyhejna: ["Joey Hejna", require("../assets/MemberPictures/joeyhejna.jpg")], 
	 julietkim: ["Juliet Kim", require("../assets/MemberPictures/julietkim.jpg")], 
	 kanugrover: ["Kanu Grover", require("../assets/MemberPictures/kanugrover.jpg")], 
	 kanyesthaker: ["Kanyes Thaker", require("../assets/MemberPictures/kanyesthaker.jpg")], 
	 karenalarcon: ["Karen Alarcon", require("../assets/MemberPictures/karenalarcon.jpg")], 
	 katnisslee: ["Katniss Lee", require("../assets/MemberPictures/katnisslee.jpg")], 
	 kaylijiang: ["Kayli Jiang", require("../assets/MemberPictures/kaylijiang.jpg")], 
	 kianago: ["Kiana Go", require("../assets/MemberPictures/kianago.jpg")], 
	 maggieyi: ["Maggie Yi", require("../assets/MemberPictures/maggieyi.jpg")], 
	 matthewlocayo: ["Matthew Locayo", require("../assets/MemberPictures/matthewlocayo.jpg")], 
	 maxemerling: ["Max Emerling", require("../assets/MemberPictures/maxemerling.jpg")], 
	 melaniecooray: ["Melanie Cooray", require("../assets/MemberPictures/melaniecooray.jpg")], 
	 michaellin: ["Michael Lin", require("../assets/MemberPictures/michaellin.jpg")], 
	 michellekroll: ["Michelle Kroll", require("../assets/MemberPictures/michellekroll.jpg")], 
	 neelsen: ["Neel Sen", require("../assets/MemberPictures/neelsen.jpg")], 
	 nehanagabothu: ["Neha Nagabothu", require("../assets/MemberPictures/nehanagabothu.jpg")], 
	 nicholaswang: ["Nicholas Wang", require("../assets/MemberPictures/nicholaswang.jpg")], 
	 nikhararora: ["Nikhar Arora", require("../assets/MemberPictures/nikhararora.jpg")], 
	 oliviali: ["Olivia Li", require("../assets/MemberPictures/oliviali.jpg")], 
	 patrickyin: ["Patrick Yin", require("../assets/MemberPictures/patrickyin.jpg")], 
	 patrickzhu: ["Patrick Zhu", require("../assets/MemberPictures/patrickzhu.jpg")], 
	 paulshao: ["Paul Shao", require("../assets/MemberPictures/paulshao.jpg")], 
	 rithwikmylavarapu: ["Rithwik Mylavarapu", require("../assets/MemberPictures/rithwikmylavarapu.jpg")], 
	 shainachen: ["Shaina Chen", require("../assets/MemberPictures/shainachen.jpg")], 
	 shauryasanghvi: ["Shaurya Sanghvi", require("../assets/MemberPictures/shauryasanghvi.jpg")], 
	 shomiljain: ["Shomil Jain", require("../assets/MemberPictures/shomiljain.jpg")], 
	 shubhajagannatha: ["Shubha Jagannatha", require("../assets/MemberPictures/shubhajagannatha.jpg")], 
	 simranregmi: ["Simran Regmi", require("../assets/MemberPictures/simranregmi.jpg")], 
	 srujaykorlakunta: ["Srujay Korlakunta", require("../assets/MemberPictures/srujaykorlakunta.jpg")], 
	 surajrao: ["Suraj Rao", require("../assets/MemberPictures/surajrao.jpg")], 
	 suryarajan: ["Surya Rajan", require("../assets/MemberPictures/suryarajan.jpg")], 
	 sydneykarimi: ["Sydney Karimi", require("../assets/MemberPictures/sydneykarimi.jpg")], 
	 vaibhavgattani: ["Vaibhav Gattani", require("../assets/MemberPictures/vaibhavgattani.jpg")], 
	 willoakley: ["Will Oakley", require("../assets/MemberPictures/willoakley.jpg")], 
	 willvavrik: ["Will Vavrik", require("../assets/MemberPictures/willvavrik.jpg")], 
	 yatinagarwal: ["Yatin Agarwal", require("../assets/MemberPictures/yatinagarwal.jpg")], 
	 yiqian: ["Yi Qian", require("../assets/MemberPictures/yiqian.jpg")], 
	 rikiotsuyamadahlgren: ["Rikio Tsuyama-Dahlgren", require("../assets/MemberPictures/rikiotsuyamadahlgren.png")],
	 sangjunlee: ["SangJun Lee", require("../assets/MemberPictures/sangjunlee.jpg")],
	 maxwilcoxson: ["Max Wilcoxson", require("../assets/MemberPictures/maxwilcoxson.jpg")],
	 taylorhodan: ["Taylor Hodan", require("../assets/MemberPictures/taylorhodan.jpg")],
	 evanellis: ["Evan Ellis", require("../assets/MemberPictures/evanellis.jpg")],
	 evelynhu: ["Evelyn Hu", require("../assets/MemberPictures/evelynhu.jpg")],
	 angelinelee: ["Angeline Lee", require("../assets/MemberPictures/angelinelee.jpg")],
	 nickjiang: ["Nick Jiang", require("../assets/MemberPictures/nickjiang.jpg")],
	 olegbezrukavnikov: ["Oleg Bezrukavnikov", require("../assets/MemberPictures/olegbezrukavnikov.jpg")],
	 dylanhamuy: ["Dylan Hamuy", require("../assets/MemberPictures/dylanhamuy.jpg")],
	 //carolli: ["Carol Li", require("../assets/MemberPictures/carolli.jpg")],
	 eshapalkar: ["Esha Palkar", require("../assets/MemberPictures/eshapalkar.jpg")],
	 kanavmittal: ["Kanav Mittal", require("../assets/MemberPictures/kanavmittal.jpg")],
	 shannonor: ["Shannon Or", require("../assets/MemberPictures/shannonor.jpg")],
	 //michellechang: ["Michelle Chang", require("../assets/MemberPictures/michellechang.JPG")],
} 
export {nameToPic}
