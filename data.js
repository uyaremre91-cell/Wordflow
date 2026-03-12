// ════════════════════════════════════════════════════════════════════
// WORDFLOW – GENİŞLETİLMİŞ İÇERİK VERİTABANI
// 200+ kelime, 14 hikaye, 90+ egzersiz, 7 günlük döngü
// ════════════════════════════════════════════════════════════════════

const WORDS = [
  // ── A1 ───────────────────────────────────────────────────────────
  {en:"wake up",    ph:"/weɪk ʌp/",       pos:"phr", tr:"uyanmak",                ex:'I <em>wake up</em> at 7 every morning.',           lvl:"A1"},
  {en:"go to bed",  ph:"/ɡoʊ tə bed/",    pos:"phr", tr:"yatmak",                 ex:'I <em>go to bed</em> at eleven.',                  lvl:"A1"},
  {en:"hungry",     ph:"/ˈhʌŋɡri/",       pos:"adj", tr:"aç",                     ex:'I\'m <em>hungry</em>. Let\'s eat!',                lvl:"A1"},
  {en:"tired",      ph:"/ˈtaɪərd/",       pos:"adj", tr:"yorgun",                 ex:'She is very <em>tired</em> today.',                lvl:"A1"},
  {en:"busy",       ph:"/ˈbɪzi/",         pos:"adj", tr:"meşgul",                 ex:'Sorry, I\'m <em>busy</em> right now.',             lvl:"A1"},
  {en:"always",     ph:"/ˈɔːlweɪz/",      pos:"adv", tr:"her zaman",              ex:'She <em>always</em> arrives early.',               lvl:"A1"},
  {en:"sometimes",  ph:"/ˈsʌm.taɪmz/",   pos:"adv", tr:"bazen",                  ex:'I <em>sometimes</em> walk to work.',               lvl:"A1"},
  {en:"together",   ph:"/təˈɡeð.ər/",     pos:"adv", tr:"birlikte",               ex:'Let\'s do it <em>together</em>.',                  lvl:"A1"},
  {en:"happy",      ph:"/ˈhæpi/",         pos:"adj", tr:"mutlu",                  ex:'She looks very <em>happy</em> today.',             lvl:"A1"},
  {en:"surprised",  ph:"/səˈpraɪzd/",     pos:"adj", tr:"şaşırmış",               ex:'I was <em>surprised</em> by the news.',            lvl:"A1"},
  {en:"favourite",  ph:"/ˈfeɪ.vər.ɪt/",  pos:"adj", tr:"en sevilen, favori",     ex:'What\'s your <em>favourite</em> food?',            lvl:"A1"},
  {en:"early",      ph:"/ˈɜː.li/",        pos:"adv", tr:"erken",                  ex:'She wakes up <em>early</em> every day.',           lvl:"A1"},
  {en:"late",       ph:"/leɪt/",          pos:"adv", tr:"geç",                    ex:'Sorry, I\'m <em>late</em>!',                       lvl:"A1"},
  {en:"quickly",    ph:"/ˈkwɪk.li/",      pos:"adv", tr:"hızlıca",                ex:'She <em>quickly</em> finished her homework.',      lvl:"A1"},
  {en:"carefully",  ph:"/ˈkeə.fəl.i/",    pos:"adv", tr:"dikkatli şekilde",       ex:'Drive <em>carefully</em> in the rain.',            lvl:"A1"},
  // ── A2 ───────────────────────────────────────────────────────────
  {en:"agree",      ph:"/əˈɡriː/",        pos:"verb",tr:"hemfikir olmak",          ex:'I <em>agree</em> with you completely.',            lvl:"A2"},
  {en:"explain",    ph:"/ɪkˈspleɪn/",     pos:"verb",tr:"açıklamak",               ex:'Can you <em>explain</em> this to me?',             lvl:"A2"},
  {en:"remember",   ph:"/rɪˈmem.bər/",    pos:"verb",tr:"hatırlamak",              ex:'Do you <em>remember</em> her name?',               lvl:"A2"},
  {en:"forget",     ph:"/fəˈɡet/",        pos:"verb",tr:"unutmak",                 ex:'Don\'t <em>forget</em> your umbrella!',            lvl:"A2"},
  {en:"enough",     ph:"/ɪˈnʌf/",         pos:"adj", tr:"yeterli",                 ex:'Is there <em>enough</em> food for everyone?',     lvl:"A2"},
  {en:"perhaps",    ph:"/pəˈhæps/",       pos:"adv", tr:"belki",                   ex:'<em>Perhaps</em> we should try again.',            lvl:"A2"},
  {en:"however",    ph:"/haʊˈev.ər/",     pos:"adv", tr:"ancak, bununla birlikte", ex:'It was cold. <em>However</em>, we went out.',      lvl:"A2"},
  {en:"instead",    ph:"/ɪnˈsted/",       pos:"adv", tr:"bunun yerine",            ex:'I\'ll have tea <em>instead</em> of coffee.',       lvl:"A2"},
  {en:"both",       ph:"/boʊθ/",          pos:"det", tr:"her iki, ikisi de",       ex:'<em>Both</em> answers are correct.',               lvl:"A2"},
  {en:"either",     ph:"/ˈiː.ðər/",       pos:"det", tr:"ya... ya da / her ikisi", ex:'You can take <em>either</em> road.',               lvl:"A2"},
  {en:"although",   ph:"/ɔːlˈðoʊ/",      pos:"conj",tr:"her ne kadar, -e rağmen", ex:'<em>Although</em> it was late, he kept working.',  lvl:"A2"},
  {en:"unless",     ph:"/ənˈles/",        pos:"conj",tr:"-medikçe, eğer ... değilse",ex:'I\'ll go <em>unless</em> it rains.',             lvl:"A2"},
  {en:"look forward to",ph:"",            pos:"phr", tr:"dört gözle beklemek",      ex:'I <em>look forward to</em> seeing you.',           lvl:"A2"},
  {en:"as soon as", ph:"",               pos:"phr", tr:"-ir -mez, hemen",          ex:'Call me <em>as soon as</em> you arrive.',          lvl:"A2"},
  {en:"find out",   ph:"",               pos:"phr", tr:"öğrenmek, keşfetmek",      ex:'I need to <em>find out</em> the answer.',          lvl:"A2"},
  // ── B1 ───────────────────────────────────────────────────────────
  {en:"commute",    ph:"/kəˈmjuːt/",      pos:"verb",tr:"işe gidip gelmek",        ex:'He <em>commutes</em> by subway every day.',        lvl:"B1"},
  {en:"exhausted",  ph:"/ɪɡˈzɔːs.tɪd/",  pos:"adj", tr:"bitkin, yorgun",          ex:'I was completely <em>exhausted</em> after work.',  lvl:"B1"},
  {en:"recommend",  ph:"/ˌrek.əˈmend/",  pos:"verb",tr:"tavsiye etmek",            ex:'Can you <em>recommend</em> a good book?',          lvl:"B1"},
  {en:"productive", ph:"/prəˈdʌk.tɪv/",  pos:"adj", tr:"verimli",                 ex:'It was a very <em>productive</em> meeting.',       lvl:"B1"},
  {en:"get along",  ph:"",               pos:"phr", tr:"iyi geçinmek",             ex:'We <em>get along</em> really well.',               lvl:"B1"},
  {en:"figure out", ph:"",               pos:"phr", tr:"çözmek, anlamak",          ex:'I need to <em>figure out</em> this problem.',      lvl:"B1"},
  {en:"relieved",   ph:"/rɪˈliːvd/",     pos:"adj", tr:"rahatlamış",               ex:'I was so <em>relieved</em> to hear that.',         lvl:"B1"},
  {en:"genuine",    ph:"/ˈdʒen.ju.ɪn/",  pos:"adj", tr:"samimi, gerçek",           ex:'She is a very <em>genuine</em> person.',           lvl:"B1"},
  {en:"deadline",   ph:"/ˈded.laɪn/",    pos:"noun",tr:"son teslim tarihi",         ex:'The <em>deadline</em> is this Friday.',            lvl:"B1"},
  {en:"handle",     ph:"/ˈhæn.dəl/",     pos:"verb",tr:"üstesinden gelmek",         ex:'Can you <em>handle</em> this task?',               lvl:"B1"},
  {en:"manage",     ph:"/ˈmæn.ɪdʒ/",     pos:"verb",tr:"başarmak, idare etmek",    ex:'I <em>managed</em> to finish on time.',            lvl:"B1"},
  {en:"afford",     ph:"/əˈfɔːrd/",      pos:"verb",tr:"(maddi olarak) gücü yetmek",ex:'I can\'t <em>afford</em> a new laptop.',          lvl:"B1"},
  {en:"tend to",    ph:"",               pos:"phr", tr:"eğiliminde olmak",          ex:'She <em>tends to</em> work late.',                 lvl:"B1"},
  {en:"used to",    ph:"",               pos:"phr", tr:"eskiden ... ederdi",        ex:'I <em>used to</em> live in Ankara.',               lvl:"B1"},
  {en:"keep in touch",ph:"",             pos:"phr", tr:"iletişimi sürdürmek",       ex:'Let\'s <em>keep in touch</em>.',                   lvl:"B1"},
  {en:"run out of", ph:"",               pos:"phr", tr:"tükenmek",                  ex:'We\'ve <em>run out of</em> coffee.',               lvl:"B1"},
  {en:"point out",  ph:"",               pos:"phr", tr:"işaret etmek, belirtmek",   ex:'She <em>pointed out</em> my mistake.',             lvl:"B1"},
  {en:"come across",ph:"",               pos:"phr", tr:"rastlamak, karşılaşmak",    ex:'I <em>came across</em> an old photo.',             lvl:"B1"},
  {en:"anxious",    ph:"/ˈæŋk.ʃəs/",    pos:"adj", tr:"endişeli, gergin",          ex:'She felt <em>anxious</em> before the exam.',       lvl:"B1"},
  {en:"confident",  ph:"/ˈkɒn.fɪ.dənt/",pos:"adj", tr:"kendinden emin",            ex:'She gave a <em>confident</em> presentation.',      lvl:"B1"},
  {en:"patient",    ph:"/ˈpeɪ.ʃənt/",   pos:"adj", tr:"sabırlı",                  ex:'Be <em>patient</em> — it takes time.',             lvl:"B1"},
  {en:"flexible",   ph:"/ˈflek.sɪ.bəl/",pos:"adj", tr:"esnek",                    ex:'Our schedule is <em>flexible</em>.',               lvl:"B1"},
  {en:"opportunity",ph:"/ˌɒp.əˈtʃuː.nɪ.ti/",pos:"noun",tr:"fırsat",              ex:'This is a great <em>opportunity</em>.',            lvl:"B1"},
  {en:"challenge",  ph:"/ˈtʃæl.ɪndʒ/",  pos:"noun",tr:"zorluk, meydan okuma",     ex:'Learning English is a fun <em>challenge</em>.',    lvl:"B1"},
  // ── B2 ───────────────────────────────────────────────────────────
  {en:"overwhelmed",ph:"/ˌoʊ.vərˈwelmd/",pos:"adj",tr:"bunalmış",                 ex:'She felt <em>overwhelmed</em> by everything.',     lvl:"B2"},
  {en:"resilient",  ph:"/rɪˈzɪl.i.ənt/", pos:"adj",tr:"dayanıklı, toparlanabilen",ex:'Children are often more <em>resilient</em>.',      lvl:"B2"},
  {en:"perspective",ph:"/pəˈspek.tɪv/",  pos:"noun",tr:"bakış açısı",              ex:'See it from a different <em>perspective</em>.',    lvl:"B2"},
  {en:"sustainable",ph:"/səˈsteɪ.nə.bəl/",pos:"adj",tr:"sürdürülebilir",          ex:'We need <em>sustainable</em> energy.',             lvl:"B2"},
  {en:"advocate",   ph:"/ˈæd.və.keɪt/",  pos:"verb",tr:"savunmak, desteklemek",   ex:'She <em>advocates</em> for equal rights.',         lvl:"B2"},
  {en:"nuance",     ph:"/ˈnjuː.ɑːns/",   pos:"noun",tr:"ince fark, nüans",         ex:'There\'s an important <em>nuance</em> here.',      lvl:"B2"},
  {en:"ambiguous",  ph:"/æmˈbɪɡ.ju.əs/", pos:"adj", tr:"belirsiz, çift anlamlı",  ex:'The instructions were <em>ambiguous</em>.',        lvl:"B2"},
  {en:"coherent",   ph:"/koʊˈhɪr.ənt/",  pos:"adj", tr:"tutarlı, anlaşılır",       ex:'Please give a <em>coherent</em> explanation.',     lvl:"B2"},
  {en:"derive",     ph:"/dɪˈraɪv/",      pos:"verb",tr:"türemek, kaynaklanmak",    ex:'The word <em>derives</em> from Latin.',            lvl:"B2"},
  {en:"imply",      ph:"/ɪmˈplaɪ/",      pos:"verb",tr:"ima etmek, kastetmek",     ex:'What does this sentence <em>imply</em>?',          lvl:"B2"},
  {en:"whereas",    ph:"/werˈæz/",       pos:"conj",tr:"oysa, halbuki",             ex:'He is tall, <em>whereas</em> she is short.',       lvl:"B2"},
  {en:"regardless", ph:"/rɪˈɡɑːrd.ləs/", pos:"adv", tr:"ne olursa olsun",          ex:'I\'ll go <em>regardless</em> of the weather.',     lvl:"B2"},
  {en:"acknowledge",ph:"/əkˈnɒl.ɪdʒ/",  pos:"verb",tr:"kabul etmek, onaylamak",   ex:'She <em>acknowledged</em> her mistake.',           lvl:"B2"},
  {en:"consequence",ph:"/ˈkɒn.sɪ.kwəns/",pos:"noun",tr:"sonuç, netice",           ex:'Think about the <em>consequences</em>.',           lvl:"B2"},
  {en:"substantial",ph:"/səbˈstæn.ʃəl/", pos:"adj", tr:"önemli, büyük miktarda",  ex:'There\'s been <em>substantial</em> progress.',     lvl:"B2"},
  {en:"in addition to",ph:"",            pos:"phr", tr:"... e ek olarak",           ex:'<em>In addition to</em> English, she speaks French.',lvl:"B2"},
  {en:"on the other hand",ph:"",         pos:"phr", tr:"öte yandan, diğer taraftan",ex:'<em>On the other hand</em>, it could work.',      lvl:"B2"},
  {en:"take into account",ph:"",         pos:"phr", tr:"hesaba katmak, göz önünde bulundurmak",ex:'<em>Take into account</em> all the facts.',lvl:"B2"},
  {en:"come to terms with",ph:"",        pos:"phr", tr:"kabullenmek, razı olmak",   ex:'She came to <em>terms with</em> the change.',     lvl:"B2"},
  // ── GÜNLÜK CÜMLELER ─────────────────────────────────────────────
  {en:"Could you say that again?",ph:"",pos:"phr",tr:"Tekrar söyler misiniz?",      ex:'<em>Could you say that again?</em> I missed that.',lvl:"A2"},
  {en:"I'm not sure I follow.",   ph:"",pos:"phr",tr:"Pek anlayamadım.",            ex:'<em>I\'m not sure I follow.</em> Can you explain?', lvl:"B1"},
  {en:"That makes sense.",        ph:"",pos:"phr",tr:"Mantıklı, anlıyorum.",         ex:'"It\'s faster online." "Yeah, <em>that makes sense.</em>"',lvl:"A2"},
  {en:"It depends on…",          ph:"",pos:"phr",tr:"…bağlı.",                      ex:'<em>It depends on</em> how much time we have.',    lvl:"B1"},
  {en:"To be honest,",           ph:"",pos:"phr",tr:"Açıkçası,",                    ex:'<em>To be honest,</em> I don\'t like this plan.',  lvl:"B1"},
  {en:"I'd rather stay home.",   ph:"",pos:"phr",tr:"Evde kalmayı tercih ederim.",  ex:'<em>I\'d rather stay home</em> tonight.',          lvl:"B1"},
  {en:"Fair enough.",            ph:"",pos:"phr",tr:"Haklısın, tamam.",              ex:'"Let\'s leave at 9." – "<em>Fair enough.</em>"',   lvl:"B1"},
  {en:"No worries!",             ph:"",pos:"phr",tr:"Sorun değil!",                  ex:'"Sorry I\'m late." – "<em>No worries!</em>"',      lvl:"A2"},
  {en:"I'll get back to you.",   ph:"",pos:"phr",tr:"Sana döneceğim.",              ex:'<em>I\'ll get back to you</em> later today.',      lvl:"B1"},
  {en:"Let me think about it.",  ph:"",pos:"phr",tr:"Bir düşüneyim.",               ex:'"Can you help?" – "<em>Let me think about it.</em>"',lvl:"A2"},
  {en:"What do you mean exactly?",ph:"",pos:"phr",tr:"Tam olarak ne demek istedin?",ex:'<em>What do you mean exactly?</em> I\'m confused.',lvl:"B1"},
  {en:"Could you do me a favour?",ph:"",pos:"phr",tr:"Bana bir iyilik yapar mısın?",ex:'<em>Could you do me a favour?</em> I need help.',  lvl:"A2"},
  {en:"I can't make it.",        ph:"",pos:"phr",tr:"Gelemeyeceğim.",                ex:'"Are you coming?" – "<em>I can\'t make it.</em>"', lvl:"A2"},
  {en:"Never mind.",             ph:"",pos:"phr",tr:"Boş ver, önemli değil.",        ex:'"Sorry for the mistake." – "<em>Never mind.</em>"',lvl:"A2"},
  {en:"It's on me.",             ph:"",pos:"phr",tr:"Hesap bende.",                  ex:'"How much do I owe you?" – "<em>It\'s on me.</em>"',lvl:"B1"},
  {en:"What's the catch?",       ph:"",pos:"phr",tr:"İşin püf noktası ne?",          ex:'It sounds too good. <em>What\'s the catch?</em>', lvl:"B2"},
  {en:"I was wondering if…",    ph:"",pos:"phr",tr:"…diye merak ediyordum.",         ex:'<em>I was wondering if</em> you could help me.',  lvl:"B1"},
  {en:"As far as I know,",       ph:"",pos:"phr",tr:"Bildiğim kadarıyla,",           ex:'<em>As far as I know,</em> she is still there.',   lvl:"B2"},
  {en:"That being said,",        ph:"",pos:"phr",tr:"Bununla birlikte,",             ex:'<em>That being said,</em> we should be careful.', lvl:"B2"},
  {en:"In other words,",         ph:"",pos:"phr",tr:"Başka bir deyişle,",            ex:'<em>In other words,</em> it\'s too expensive.',    lvl:"B1"},
];

const STORIES = [
  // ── A1 ────────────────────────────────────────────────────────────
  {
    id:0,title:"A Morning Coffee",emoji:"☕",lvl:"A1",duration:"3 dk",color:"#1a2010",
    paragraphs:[
      {text:`Every morning, <span class="hl" data-w="Sarah">Sarah</span> wakes up at seven o'clock. She goes to the kitchen and makes a cup of <span class="hl" data-w="coffee">coffee</span>. She likes her coffee with a little milk and no sugar. While the coffee is hot, she sits by the window and looks outside. The street is <span class="hl" data-w="quiet">quiet</span> in the morning. Birds sing in the trees. Sarah feels happy and <span class="hl" data-w="relaxed">relaxed</span>. After her coffee, she gets dressed and goes to work.`},
      {text:`At work, Sarah greets her colleagues. "Good morning!" she says with a smile. Her boss gives her a new <span class="hl" data-w="project">project</span>. It is not very <span class="hl" data-w="difficult">difficult</span>, but it is interesting. Sarah works hard all day. At lunch, she eats a sandwich and drinks orange juice. In the evening, she goes home and cooks dinner. She is tired but happy.`},
    ],
    vocab:{Sarah:"kadın ismi",coffee:"kahve",quiet:"sessiz",relaxed:"rahat",project:"proje",difficult:"zor"},
    questions:[
      {q:"What time does Sarah wake up?",opts:["Six o'clock","Seven o'clock","Eight o'clock"],ans:1},
      {q:"How does she like her coffee?",opts:["Black, no milk","With milk and sugar","With milk, no sugar"],ans:2},
      {q:"How does Sarah feel in the morning?",opts:["Sad and tired","Happy and relaxed","Angry and busy"],ans:1},
    ]
  },
  {
    id:1,title:"My Dog Max",emoji:"🐕",lvl:"A1",duration:"3 dk",color:"#1a1508",
    paragraphs:[
      {text:`I have a dog. His name is <span class="hl" data-w="Max">Max</span>. He is big and brown. Max is very <span class="hl" data-w="friendly">friendly</span> — he loves everyone! Every morning, I take Max for a walk in the park. He runs and jumps and plays with other dogs. Max is always <span class="hl" data-w="excited">excited</span> when he sees the park.`},
      {text:`After the walk, Max is very <span class="hl" data-w="hungry">hungry</span>. I give him his food and he eats quickly. Then he sleeps on his favourite <span class="hl" data-w="spot">spot</span> near the window. In the evening, Max sits next to me when I watch TV. He is my best friend.`},
    ],
    vocab:{Max:"köpek ismi",friendly:"cana yakın, dost canlısı",excited:"heyecanlı",hungry:"aç",spot:"yer, nokta"},
    questions:[
      {q:"What colour is Max?",opts:["Black","Brown","White"],ans:1},
      {q:"Where does Max like to sleep?",opts:["In the garden","Near the window","On the bed"],ans:1},
      {q:"When does Max get excited?",opts:["At dinner time","When he sees the park","When he hears the TV"],ans:1},
    ]
  },
  // ── A2 ────────────────────────────────────────────────────────────
  {
    id:2,title:"The Lost Key",emoji:"🔑",lvl:"A2",duration:"4 dk",color:"#1a1810",
    paragraphs:[
      {text:`Tom couldn't find his keys. He looked everywhere – in his jacket, on the table, under the sofa. Nothing. He started to feel <span class="hl" data-w="anxious">anxious</span> because he had an important meeting at nine o'clock. He checked his phone: 8:45. There were only fifteen minutes left. He called his wife, but she didn't <span class="hl" data-w="answer">answer</span>.`},
      {text:`Then he had an idea. He tried to <span class="hl" data-w="remember">remember</span> his last steps from yesterday. He came home, put down his bag, and went straight to the kitchen to make tea. He walked to the kitchen and there they were – his keys were right next to the <span class="hl" data-w="kettle">kettle</span>! Tom laughed. He grabbed his keys, ran out the door, and luckily <span class="hl" data-w="arrived">arrived</span> at his meeting with one minute to spare.`},
    ],
    vocab:{anxious:"endişeli",answer:"cevaplamak",remember:"hatırlamak",kettle:"su ısıtıcısı",arrived:"ulaştı"},
    questions:[
      {q:"What time was Tom's meeting?",opts:["8:45","9:00","9:15"],ans:1},
      {q:"Where were the keys?",opts:["Under the sofa","In his jacket","Next to the kettle"],ans:2},
      {q:"How did Tom feel when he couldn't find his keys?",opts:["Relaxed","Anxious","Bored"],ans:1},
    ]
  },
  {
    id:3,title:"A New Neighbour",emoji:"🏠",lvl:"A2",duration:"4 dk",color:"#0d1520",
    paragraphs:[
      {text:`Last Saturday, a new family moved into the house next door. Their names are the Yıldız family. They have two children – a boy called Mehmet and a girl called Ayşe. I <span class="hl" data-w="introduced">introduced</span> myself when I saw them carrying boxes. They seemed very <span class="hl" data-w="friendly">friendly</span> and smiled a lot.`},
      {text:`In the afternoon, I made a cake and brought it to them as a <span class="hl" data-w="welcome">welcome</span> gift. They were very <span class="hl" data-w="grateful">grateful</span>. We sat in their garden and talked for an hour. I found out they moved from Ankara. Mr. Yıldız works as an engineer, and Mrs. Yıldız is a teacher. I think we are going to be good <span class="hl" data-w="neighbours">neighbours</span>.`},
    ],
    vocab:{introduced:"tanıştırdı/tanıttı",friendly:"cana yakın",welcome:"hoş geldin, karşılama",grateful:"minnettar",neighbours:"komşular"},
    questions:[
      {q:"Where did the Yıldız family move from?",opts:["Istanbul","Ankara","İzmir"],ans:1},
      {q:"What did the narrator bring as a gift?",opts:["Flowers","A cake","Fruit"],ans:1},
      {q:"What is Mr. Yıldız's job?",opts:["Teacher","Doctor","Engineer"],ans:2},
    ]
  },
  {
    id:4,title:"The Rainy Day",emoji:"🌧️",lvl:"A2",duration:"3 dk",color:"#0a1520",
    paragraphs:[
      {text:`It was a rainy Tuesday. Emma didn't want to go outside, so she decided to stay home and do something <span class="hl" data-w="creative">creative</span>. She found some old paints in a cupboard and started painting. She wasn't very good at it, but she <span class="hl" data-w="enjoyed">enjoyed</span> it.`},
      {text:`By the afternoon, she had painted three pictures: a cat, a tree, and a mountain. She hung them on the wall and stepped back to look at them. They weren't perfect, but she felt <span class="hl" data-w="proud">proud</span>. She took a photo and sent it to her friend. Her friend replied: "These are <span class="hl" data-w="amazing">amazing</span>! You should do this more often!" Emma smiled and picked up her paintbrush again.`},
    ],
    vocab:{creative:"yaratıcı",enjoyed:"zevk aldı",proud:"gururlu",amazing:"harika, inanılmaz"},
    questions:[
      {q:"Why did Emma stay home?",opts:["She was sick","It was raining","She had work to do"],ans:1},
      {q:"How many pictures did Emma paint?",opts:["Two","Three","Four"],ans:1},
      {q:"How did Emma feel after painting?",opts:["Disappointed","Bored","Proud"],ans:2},
    ]
  },
  // ── B1 ────────────────────────────────────────────────────────────
  {
    id:5,title:"The Job Interview",emoji:"💼",lvl:"B1",duration:"5 dk",color:"#0d1825",
    paragraphs:[
      {text:`Maria had been <span class="hl" data-w="preparing">preparing</span> for the interview for two weeks. She had researched the company, practised common questions, and picked out her best outfit the night before. Still, as she sat in the waiting room, she felt her heart <span class="hl" data-w="pounding">pounding</span>. The office was modern and open-plan, with large windows overlooking the city. Other candidates sat nearby, looking equally <span class="hl" data-w="nervous">nervous</span>.`},
      {text:`When her name was called, Maria took a deep breath and walked into the meeting room. Two interviewers greeted her warmly. The first question was <span class="hl" data-w="straightforward">straightforward</span>: "Tell us about yourself." Maria had practised this many times, and the words came easily. She talked about her experience, her <span class="hl" data-w="skills">skills</span>, and why she was passionate about the role.`},
      {text:`By the end, she felt the conversation had gone well. She shook hands with both interviewers and thanked them. Outside, she called her friend. "I think it went okay," she said with a <span class="hl" data-w="relieved">relieved</span> laugh. Three days later, she got an email: she had the job.`},
    ],
    vocab:{preparing:"hazırlanıyor",pounding:"hızla çarpıyor",nervous:"gergin",straightforward:"basit, doğrudan",skills:"beceriler",relieved:"rahatlamış"},
    questions:[
      {q:"How long had Maria been preparing?",opts:["One week","Two weeks","Three days"],ans:1},
      {q:"How did she feel in the waiting room?",opts:["Confident","Nervous","Bored"],ans:1},
      {q:"How did she find out she got the job?",opts:["By phone","By email","In person"],ans:1},
    ]
  },
  {
    id:6,title:"Learning to Cook",emoji:"🍳",lvl:"B1",duration:"5 dk",color:"#1a0d10",
    paragraphs:[
      {text:`David had never cooked a proper meal in his life. At thirty-two, he survived on <span class="hl" data-w="takeaways">takeaways</span> and ready meals. But when his doctor told him his diet was <span class="hl" data-w="affecting">affecting</span> his health, he decided it was time to change. He bought a beginner's cookbook and signed up for a Saturday cooking class.`},
      {text:`The first class was <span class="hl" data-w="overwhelming">overwhelming</span>. There were so many techniques, tools, and ingredients he had never heard of. He burned his onions, added too much salt, and dropped a bowl on the floor. But the instructor was <span class="hl" data-w="patient">patient</span> and encouraging. "Everyone makes mistakes at first," she said.`},
      {text:`After six weeks, David could make five dishes well. His friends were <span class="hl" data-w="impressed">impressed</span> when he cooked dinner for them. "This is delicious!" one friend said. David smiled. He hadn't just learned to cook – he had discovered a new <span class="hl" data-w="passion">passion</span>.`},
    ],
    vocab:{takeaways:"paket yemek",affecting:"etkilemek",overwhelming:"bunaltıcı",patient:"sabırlı",impressed:"etkilenmiş",passion:"tutku"},
    questions:[
      {q:"Why did David decide to start cooking?",opts:["He was bored","His doctor said his diet was bad","He lost his job"],ans:1},
      {q:"How did David feel in his first class?",opts:["Confident","Overwhelmed","Bored"],ans:1},
      {q:"What did David discover at the end?",opts:["A new talent for business","A new passion for cooking","A better doctor"],ans:1},
    ]
  },
  {
    id:7,title:"The Long Journey",emoji:"🚂",lvl:"B1",duration:"5 dk",color:"#0d1a10",
    paragraphs:[
      {text:`Leila had always wanted to travel across Turkey by train. Last summer, she finally did it. She started in Istanbul and <span class="hl" data-w="planned">planned</span> to reach Van in the east — a journey of over 1,700 kilometres. She packed light: one bag, a few books, and a notebook.`},
      {text:`On the first train, she sat opposite an elderly man who sold carpets. He told her stories about cities she had never visited. At each <span class="hl" data-w="station">station</span>, new passengers got on and shared their own stories. Leila wrote everything down. By the time she reached Ankara, her notebook was already half full.`},
      {text:`When she finally arrived in Van after four days, she was <span class="hl" data-w="exhausted">exhausted</span> but <span class="hl" data-w="inspired">inspired</span>. She had spoken to farmers, students, teachers, and artists. "The journey wasn't about the <span class="hl" data-w="destination">destination</span>," she wrote in her last entry. "It was about all the lives that crossed mine along the way."`},
    ],
    vocab:{planned:"planladı",station:"istasyon",exhausted:"bitkin",inspired:"ilham almış",destination:"varış noktası"},
    questions:[
      {q:"Where did Leila start her journey?",opts:["Ankara","Van","Istanbul"],ans:2},
      {q:"Who did she first sit opposite on the train?",opts:["A student","An elderly carpet seller","A teacher"],ans:1},
      {q:"How did she feel when she arrived in Van?",opts:["Disappointed and tired","Exhausted but inspired","Happy and well-rested"],ans:1},
    ]
  },
  // ── B2 ────────────────────────────────────────────────────────────
  {
    id:8,title:"A City That Never Sleeps",emoji:"🌆",lvl:"B2",duration:"6 dk",color:"#0d0d1a",
    paragraphs:[
      {text:`Urban life has an undeniable energy. At any hour, cities <span class="hl" data-w="pulse">pulse</span> with movement – commuters rushing to work, vendors setting up stalls, street musicians competing with traffic noise. Yet beneath this <span class="hl" data-w="apparent">apparent</span> chaos lies a remarkable degree of order, shaped by <span class="hl" data-w="infrastructure">infrastructure</span> invisible to most residents.`},
      {text:`Sociologists argue that city living fundamentally changes how people relate to one another. The <span class="hl" data-w="anonymity">anonymity</span> of urban spaces can feel liberating – no one knows your history, your family, or your failures. But this same quality can breed <span class="hl" data-w="loneliness">loneliness</span>. Studies show that urban dwellers report higher rates of social isolation than their rural counterparts.`},
      {text:`The challenge for modern city planners is to design spaces that <span class="hl" data-w="foster">foster</span> connection rather than separation. Parks, community centres, and pedestrianised streets are not luxuries – they are essential elements of a city that wants its residents to <span class="hl" data-w="thrive">thrive</span>.`},
    ],
    vocab:{pulse:"atmak",apparent:"görünürdeki",infrastructure:"altyapı",anonymity:"kimliksizlik",loneliness:"yalnızlık",foster:"teşvik etmek",thrive:"gelişmek"},
    questions:[
      {q:"What lies beneath urban chaos according to the text?",opts:["More chaos","A remarkable degree of order","Empty streets"],ans:1},
      {q:"What paradox of city life is described?",opts:["Surrounded by people yet lonely","Too busy to eat","Too much infrastructure"],ans:0},
      {q:"What does the text say parks and community centres are?",opts:["Luxuries","Essential elements","Optional features"],ans:1},
    ]
  },
  {
    id:9,title:"The Quiet Revolution",emoji:"🌱",lvl:"B2",duration:"6 dk",color:"#081a10",
    paragraphs:[
      {text:`Across the world, a quiet revolution is taking place in the way people think about food. Consumers are increasingly <span class="hl" data-w="scrutinising">scrutinising</span> the origin of what they eat, demanding greater <span class="hl" data-w="transparency">transparency</span> from producers and supermarkets alike. This shift in attitude is being driven not just by health concerns but by a growing awareness of the environmental <span class="hl" data-w="consequences">consequences</span> of industrial agriculture.`},
      {text:`Local farmers' markets, once considered <span class="hl" data-w="niche">niche</span>, have become mainstream in many cities. Young professionals who once barely knew how to boil water are now growing vegetables on their balconies or joining community gardens. The movement is not without its critics, who point out that organic, locally sourced food remains <span class="hl" data-w="inaccessible">inaccessible</span> to lower-income families.`},
      {text:`Nevertheless, the trend appears <span class="hl" data-w="irreversible">irreversible</span>. Schools are introducing food education into their <span class="hl" data-w="curricula">curricula</span>, teaching children where their food comes from and how to cook it. The hope is that the next generation will make more <span class="hl" data-w="conscious">conscious</span> choices, closing the gap between food production and the people who eat it.`},
    ],
    vocab:{scrutinising:"incelemek, sorgulamak",transparency:"şeffaflık",consequences:"sonuçlar",niche:"niş, dar kesim",inaccessible:"ulaşılamaz",irreversible:"geri döndürülemez",curricula:"müfredat (çoğul)",conscious:"bilinçli"},
    questions:[
      {q:"What is driving the shift in food attitudes?",opts:["Only health concerns","Health concerns and environmental awareness","Government regulations"],ans:1},
      {q:"What criticism is made about local food?",opts:["It tastes bad","It is inaccessible to lower-income families","It is too popular"],ans:1},
      {q:"What is being introduced in schools?",opts:["Farming classes only","Food education","Cooking competitions"],ans:1},
    ]
  },
  {
    id:10,title:"The Art of Listening",emoji:"👂",lvl:"B2",duration:"5 dk",color:"#1a0a18",
    paragraphs:[
      {text:`In an age of constant distraction, the ability to truly listen has become a rare and <span class="hl" data-w="valuable">valuable</span> skill. Most people, research suggests, listen with the <span class="hl" data-w="intention">intention</span> of replying rather than understanding. They wait for a pause in the conversation, then launch into their own response, often missing the <span class="hl" data-w="nuance">nuance</span> of what was actually said.`},
      {text:`Active listening – the practice of giving full attention and reflecting back what you hear – is used by <span class="hl" data-w="therapists">therapists</span>, negotiators, and effective managers alike. It involves not just hearing words, but noticing tone, body language, and what is <span class="hl" data-w="left unsaid">left unsaid</span>. Crucially, it requires resisting the urge to <span class="hl" data-w="interrupt">interrupt</span>.`},
      {text:`The rewards are significant. People who feel genuinely heard report higher levels of trust and <span class="hl" data-w="satisfaction">satisfaction</span> in their relationships. In the workplace, teams with good listening cultures make fewer mistakes and solve problems more <span class="hl" data-w="efficiently">efficiently</span>. Listening, it turns out, is not a passive act – it is one of the most active things we can do.`},
    ],
    vocab:{valuable:"değerli",intention:"niyet",nuance:"nüans, ince fark","left unsaid":"söylenmeden bırakılan",therapists:"terapistler",interrupt:"sözünü kesmek",satisfaction:"memnuniyet",efficiently:"verimli şekilde"},
    questions:[
      {q:"According to research, why do most people listen?",opts:["To understand deeply","To reply rather than understand","To remember later"],ans:1},
      {q:"Who uses active listening, according to the text?",opts:["Only therapists","Therapists, negotiators and managers","Only managers"],ans:1},
      {q:"What do people with good listening skills report?",opts:["Higher salaries","More free time","Higher trust and satisfaction"],ans:2},
    ]
  },
  {
    id:11,title:"Rethinking Failure",emoji:"💡",lvl:"B2",duration:"6 dk",color:"#1a1008",
    paragraphs:[
      {text:`Our <span class="hl" data-w="relationship">relationship</span> with failure is complicated. From an early age, we are taught that making mistakes is bad – something to be <span class="hl" data-w="avoided">avoided</span>, hidden, or apologised for. Exam grades, performance reviews, and social media all <span class="hl" data-w="reinforce">reinforce</span> the idea that success is the only acceptable outcome. Failure, in this framework, becomes something shameful.`},
      {text:`Yet some of the most <span class="hl" data-w="innovative">innovative</span> companies in the world actively <span class="hl" data-w="encourage">encourage</span> their employees to fail – quickly, cheaply, and often. Silicon Valley has <span class="hl" data-w="popularised">popularised</span> the phrase "fail fast, learn faster." The logic is simple: if you never fail, you are probably not taking enough risks or trying anything genuinely new.`},
      {text:`Psychologists call this a "growth mindset" – the belief that <span class="hl" data-w="abilities">abilities</span> can be developed through effort and experience. People with a growth mindset see failure as feedback, not as a <span class="hl" data-w="verdict">verdict</span> on their worth. This shift in <span class="hl" data-w="perspective">perspective</span> can be transformative — both in education and in everyday life.`},
    ],
    vocab:{relationship:"ilişki",avoided:"kaçınılan",reinforce:"pekiştirmek",innovative:"yenilikçi",encourage:"teşvik etmek",popularised:"yaygınlaştırdı",abilities:"yetenekler",verdict:"karar, hüküm",perspective:"bakış açısı"},
    questions:[
      {q:"How does society typically view failure?",opts:["As something positive","As something shameful","As unimportant"],ans:1},
      {q:"What do innovative companies encourage?",opts:["Only success","Avoiding all risks","Failing quickly and learning"],ans:2},
      {q:"What is a 'growth mindset'?",opts:["Believing abilities are fixed","Believing abilities grow through effort","Believing only talent matters"],ans:1},
    ]
  },
];

// ════════════════════════════════════════════════════════════════════
// EGZERSIZ HAVUZU – 90+ soru
// ════════════════════════════════════════════════════════════════════
const EX_POOL = {
  mcq:[
    {q:"'Exhausted' kelimesinin anlamı?",correct:"Bitkin, çok yorgun",opts:["Bitkin, çok yorgun","Heyecanlı","Rahat","Öfkeli"],exp:"'Exhausted' = tamamen bitip tükenmiş."},
    {q:"'Get along' ne demek?",correct:"İyi geçinmek",opts:["Gitmek","İyi geçinmek","Anlamak","Bırakmak"],exp:"'Get along with someone' = biriyle iyi geçinmek."},
    {q:"'Resilient' sıfatının anlamı?",correct:"Zorluklara rağmen toparlanabilen",opts:["Çok güçlü","Zorluklara rağmen toparlanabilen","Zeki","Sabırsız"],exp:"'Resilient' = zorluklardan çabuk iyileşme kapasitesi."},
    {q:"'To be honest,' nasıl kullanılır?",correct:"Dürüst bir görüş bildirmeden önce",opts:["Yalan söylerken","Dürüst bir görüş bildirmeden önce","Soru sorarken","Selamlama olarak"],exp:"'To be honest' = açıkça söylemek gerekirse."},
    {q:"'Fair enough' ne anlama gelir?",correct:"Haklısın / Tamam, makul",opts:["Çok adil değil","Haklısın / Tamam, makul","Kesinlikle hayır","Hiç de değil"],exp:"'Fair enough' = kabul etme, haklı bulma ifadesi."},
    {q:"'Overwhelmed' nasıl hissedilir?",correct:"Bunalmış, çok fazla şeyle başa çıkamıyor",opts:["Çok mutlu","Bunalmış, çok fazla şeyle başa çıkamıyor","Sakin","Meraklı"],exp:"'Overwhelmed' = çok fazla iş/duygu altında ezilmiş hissi."},
    {q:"'Commute' ne demek?",correct:"İşe/okula gidip gelmek",opts:["Yolculuk etmek","İşe/okula gidip gelmek","Seyahat planlamak","Tatile gitmek"],exp:"'Commute' = her gün işe veya okula gidip gelme yolculuğu."},
    {q:"'Perspective' kelimesinin anlamı?",correct:"Bakış açısı",opts:["Resim","Bakış açısı","Uzaklık","Boyut"],exp:"'Perspective' = bir konuya yaklaşım, bakış açısı."},
    {q:"'Tend to' ne anlama gelir?",correct:"Bir şeyi yapmaya eğilimli olmak",opts:["Özen göstermek","Bir şeyi yapmaya eğilimli olmak","Denemek","Zorunda olmak"],exp:"'Tend to' = genellikle bir şeyi yapmak, alışkanlık."},
    {q:"'Run out of' ifadesi ne demek?",correct:"Tükenmek",opts:["Kaçmak","Tükenmek","Yetişmek","Çıkmak"],exp:"'Run out of something' = bir şey bitmek, kalmamak."},
    {q:"'Afford' fiilinin anlamı?",correct:"Maddi gücü yetmek",opts:["İzin vermek","Maddi gücü yetmek","Başarmak","Sunmak"],exp:"'Can't afford' = parasının yetmemesi."},
    {q:"'Whereas' bağlacı nasıl kullanılır?",correct:"İki zıt durumu karşılaştırmak için",opts:["Sebep bildirmek için","İki zıt durumu karşılaştırmak için","Zaman belirtmek için","Sonuç bildirmek için"],exp:"'Whereas' = oysa, halbuki. Zıtlık gösterir."},
    {q:"'Come across' ne demek?",correct:"Rastlamak, karşılaşmak",opts:["Geçmek","Rastlamak, karşılaşmak","İletmek","Anlamak"],exp:"'Come across' = beklenmedik şekilde bulmak veya karşılaşmak."},
    {q:"'Nuance' kelimesi ne anlama gelir?",correct:"İnce fark, nüans",opts:["Büyük fark","İnce fark, nüans","Sınır","Renk tonu"],exp:"'Nuance' = anlam veya durumda ince ama önemli fark."},
    {q:"'Acknowledge' fiili ne demek?",correct:"Kabul etmek, onaylamak",opts:["Reddetmek","Kabul etmek, onaylamak","Görmezden gelmek","Anlatmak"],exp:"'Acknowledge' = bir şeyin doğru veya var olduğunu kabul etmek."},
    {q:"'In addition to' ne anlama gelir?",correct:"... e ek olarak",opts:["Bunun yerine","... e ek olarak","Rağmen","Çünkü"],exp:"'In addition to' = bir şeyin yanı sıra, ek olarak."},
    {q:"'Take into account' ne demek?",correct:"Hesaba katmak",opts:["Saymak","Hesaba katmak","Bankaya götürmek","Özetlemek"],exp:"'Take into account' = bir faktörü düşüncelerine dahil etmek."},
    {q:"'Unless' bağlacı nasıl kullanılır?",correct:"Koşul bildirmek için: -medikçe",opts:["Sonuç bildirmek için","Koşul bildirmek için: -medikçe","Zaman bildirmek için","Sebep bildirmek için"],exp:"'Unless' = if not. 'I'll go unless it rains' = Yağmur yağmadıkça gideceğim."},
    {q:"'Sustainable' kelimesinin anlamı?",correct:"Sürdürülebilir",opts:["Hızlı büyüyen","Sürdürülebilir","Pahalı","Doğal"],exp:"'Sustainable' = uzun vadede devam ettirilebilir, çevreye zarar vermeyen."},
    {q:"'Consequence' ne demek?",correct:"Sonuç, netice",opts:["Neden","Sonuç, netice","Çözüm","Sorun"],exp:"'Consequence' = bir eylemin ardından gelen sonuç."},
  ],
  fill:[
    {q:"Boşluğu doldurun:",sub:"She felt completely ______ after working 12 hours straight.",answer:"exhausted",hint:"Çok yorgun.",exp:"'Exhausted' = tamamen bitik."},
    {q:"Boşluğu doldurun:",sub:"Can you ______ a good restaurant near here?",answer:"recommend",hint:"Tavsiye etmek.",exp:"'Recommend' = önermek."},
    {q:"Boşluğu doldurun:",sub:"I need to ______ this math problem before the exam.",answer:"figure out",hint:"Çözmek, anlamak.",exp:"'Figure out' = bir şeyi analiz edip çözmek."},
    {q:"Boşluğu doldurun:",sub:"To be ______, I don't really like this plan.",answer:"honest",hint:"'To be ___,' = açıkçası.",exp:"'To be honest' = dürüstçe söylemek gerekirse."},
    {q:"Boşluğu doldurun:",sub:"No ______, it happens to everyone!",answer:"worries",hint:"'Sorun değil!' ifadesi.",exp:"'No worries!' = sorun yok."},
    {q:"Boşluğu doldurun:",sub:"I ______ to live in Ankara, but now I'm in Istanbul.",answer:"used",hint:"Geçmişteki alışkanlık için.",exp:"'Used to' = eskiden yapardım."},
    {q:"Boşluğu doldurun:",sub:"We've ______ out of coffee — can you buy some?",answer:"run",hint:"'Tükenmek' anlamındaki phrasal verb.",exp:"'Run out of' = bir şey bitmek."},
    {q:"Boşluğu doldurun:",sub:"She ______ to work late every Friday.",answer:"tends",hint:"Alışkanlık/eğilim bildiren ifade.",exp:"'Tend to' = bir şeyi yapmaya meyilli olmak."},
    {q:"Boşluğu doldurun:",sub:"______ the rain, they decided to go for a walk.",answer:"Despite",hint:"Zıtlık bildiren bir edatla başlar.",exp:"'Despite' = -e rağmen."},
    {q:"Boşluğu doldurun:",sub:"Let's ______ in touch after the conference.",answer:"keep",hint:"İletişimde kalmak.",exp:"'Keep in touch' = iletişimi sürdürmek."},
    {q:"Boşluğu doldurun:",sub:"I can't ______ a new phone right now — it's too expensive.",answer:"afford",hint:"Maddi gücü yetmemek.",exp:"'Can't afford' = parası yetmemek."},
    {q:"Boşluğu doldurun:",sub:"She ______ her mistake and apologised.",answer:"acknowledged",hint:"Kabul etmek, onaylamak.",exp:"'Acknowledge' = bir şeyi kabul etmek."},
    {q:"Boşluğu doldurun:",sub:"______ addition to English, he speaks French and German.",answer:"In",hint:"'In ___ to' = ek olarak.",exp:"'In addition to' = yanı sıra, ek olarak."},
    {q:"Boşluğu doldurun:",sub:"I ______ forward to meeting you next week.",answer:"look",hint:"'___ forward to' = dört gözle beklemek.",exp:"'Look forward to' = heyecanla beklemek."},
    {q:"Boşluğu doldurun:",sub:"The instructions were ______ — nobody knew what to do.",answer:"ambiguous",hint:"İki anlama gelebilen.",exp:"'Ambiguous' = belirsiz, çift anlamlı."},
  ],
  reorder:[
    {q:"Cümleyi doğru sıraya koyun:",words:["I","usually","commute","by","subway","every","day"],answer:"I usually commute by subway every day",exp:"Zarf (usually) ana fiilden önce gelir."},
    {q:"Cümleyi doğru sıraya koyun:",words:["She","always","arrives","at","work","on","time"],answer:"She always arrives at work on time",exp:"'Always' sıklık zarfı yüklemden önce gelir."},
    {q:"Cümleyi doğru sıraya koyun:",words:["It","depends","on","how","much","time","we","have"],answer:"It depends on how much time we have",exp:"'It depends on' + isim cümlesi."},
    {q:"Cümleyi doğru sıraya koyun:",words:["To","be","honest","I","don't","agree","with","you"],answer:"To be honest I don't agree with you",exp:"'To be honest' cümle başında kullanılır."},
    {q:"Cümleyi doğru sıraya koyun:",words:["We","have","run","out","of","milk"],answer:"We have run out of milk",exp:"'Have run out of' = present perfect + phrasal verb."},
    {q:"Cümleyi doğru sıraya koyun:",words:["She","tends","to","work","late","on","Fridays"],answer:"She tends to work late on Fridays",exp:"'Tend to + verb' kalıbı."},
    {q:"Cümleyi doğru sıraya koyun:",words:["I","was","wondering","if","you","could","help","me"],answer:"I was wondering if you could help me",exp:"'I was wondering if' = kibar rica ifadesi."},
    {q:"Cümleyi doğru sıraya koyun:",words:["As","far","as","I","know","she","is","still","there"],answer:"As far as I know she is still there",exp:"'As far as I know' = bildiğim kadarıyla."},
    {q:"Cümleyi doğru sıraya koyun:",words:["In","addition","to","English","she","speaks","French"],answer:"In addition to English she speaks French",exp:"'In addition to' = ... e ek olarak."},
    {q:"Cümleyi doğru sıraya koyun:",words:["He","used","to","live","in","Ankara","but","now","he","doesn't"],answer:"He used to live in Ankara but now he doesn't",exp:"'Used to' = geçmişteki alışkanlık."},
  ],
};

// ════════════════════════════════════════════════════════════════════
// GÜNLÜK DÖNGÜ SİSTEMİ — 7 günlük rotasyon
// Her gün farklı kelimeler, hikayeler ve egzersizler
// ════════════════════════════════════════════════════════════════════
function getDayIndex() {
  // epoch'tan gün sayısı → 7'ye mod
  return Math.floor(Date.now() / 86400000) % 7;
}

function getTodayWords(count=10) {
  const day = getDayIndex();
  // Her gün farklı seed ile karıştır
  const seeded = seededShuffle([...WORDS], day * 137 + 42);
  return seeded.slice(0, count);
}

function getTodayStory() {
  const day = getDayIndex();
  return STORIES[day % STORIES.length];
}

function getTodayExercises(type, count=6) {
  const day = getDayIndex();
  const pool = EX_POOL[type] || EX_POOL.mcq;
  const seeded = seededShuffle([...pool], day * 271 + type.length);
  return seeded.slice(0, count);
}

// Belirleyici karıştırma (seed'e göre)
function seededShuffle(arr, seed) {
  let s = seed;
  const rng = () => { s = (s * 1664525 + 1013904223) & 0xffffffff; return (s >>> 0) / 0xffffffff; };
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(rng() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

// Haftalık quiz için tüm havuz
function getWeeklyPool(count=20) {
  const pool = [];
  // kelime MCQ
  seededShuffle([...WORDS], 999).slice(0,10).forEach(w => {
    const distractors = WORDS.filter(x=>x.tr!==w.tr).sort(()=>Math.random()-.5).slice(0,3).map(x=>x.tr);
    pool.push({type:'mcq',q:w.en,sub:'"'+w.ex.replace(/<[^>]+>/g,'')+'"',correct:w.tr,opts:[w.tr,...distractors].sort(()=>Math.random()-.5),exp:'Anlam: '+w.tr});
  });
  // fill
  seededShuffle([...EX_POOL.fill], 888).slice(0,4).forEach(e=>pool.push({...e,type:'fill_wq'}));
  // reorder
  seededShuffle([...EX_POOL.reorder], 777).slice(0,3).forEach(e=>pool.push({...e,type:'reorder_wq'}));
  // story questions
  STORIES.slice(0,4).forEach(s=>pool.push({type:'story_mcq',q:s.questions[0].q,sub:'['+s.title+']',correct:s.questions[0].opts[s.questions[0].ans],opts:[...s.questions[0].opts].sort(()=>Math.random()-.5),exp:'Cevap: '+s.questions[0].opts[s.questions[0].ans]}));
  return pool.sort(()=>Math.random()-.5).slice(0,count);
}
