(function(){
  'use strict';

  angular
    .module('iChing')
    .service('figures', figures)
    .factory('ChangingHexagram', ChangingHexagram)
    .factory('Hexagram', Hexagram);

  // 1 = Yang   (solid line)
  // 0 = Yin    (broken line)

  function figures($q){
    var service = this;

    service.trigrams = [
      {
        name: 'Heaven',
        zhong: 'qian',
        wen: '\u4E7E',
        order: 0,
        sequence: [1, 1, 1]
      },
      {
        name: 'Thunder',
        zhong: 'zhen',
        wen: '\u9707',
        order: 1,
        sequence: [1, 0, 0]
      },
      {
        name: 'Water',
        zhong: 'kan',
        wen: '\u574E',
        order: 2,
        sequence: [0, 1, 0]
      },
      {
        name: 'Mountain',
        zhong: 'gen',
        wen: '\u826E',
        order: 3,
        sequence: [0, 0, 1]
      },
      {
        name: 'Earth',
        zhong: 'kun',
        wen: '\u5764',
        order: 4,
        sequence: [0, 0, 0]
      },
      {
        name: 'Wind',
        zhong: 'xun',
        wen: '\u5DFD',
        order: 5,
        sequence: [0, 1, 1]
      },
      {
        name: 'Flame',
        zhong: 'li',
        wen: '\u96E2',
        order: 6,
        sequence: [1, 0, 1]
      },
      {
        name: 'Lake',
        zhong: 'dui',
        wen: '\u514C',
        order: 7,
        sequence: [1, 1, 0]
      }
    ];

    // guaMing:     Hexagram name
    // tuan:        Short hexagram statement
    // xiangChuan:  Commentary on images (Great Image)

    service.hexagrams = [
      {
        number: 1,
        trigrams: [0, 0],
        sequence: [1,1,1,1,1,1],
        name: "Creating",
        guaMing: "乾",
        tuan: "乾：元亨，利貞。",
        judgement: "The Creative works sublime success, \n Furthering through perseverance.",
        xiangChuan: "天行健，君子以自強不息。",
        image: "The movement of heaven is full of power. \n Thus the superior man makes himself strong and untiring.",
        says: "It's easy to create when your heart is full of joy.",
        sees: "you like father sky \n shedding light on the world \n radiating warmth and benevolence \n just being who you are \n brings good things to life",
        suggests: "within you is the power to creat \n to make things happen \n being true to yourself \n gives you the courage \n you need to be original \n believe in yourself \n and others will believe in you \n whatever you do \n don't give up",
        changing: [
          {
            line: 0,
            wen: "初九：潛龍，勿用。",
            translation: "Hidden dragon. Do not act.",
            meaning: "Your creative talents remain unrecognized. Don't worry. Your time will come."
          },
          {
            line: 1,
            wen: "九二：見龍在田，利見大人。",
            translation: "Dragon appearing in the field. \n It furthers one to see the great man.",
            meaning: "As you enter your chosen field, be open to help from people who are more experienced than you. At the same time, believe in your own ability. If you don't take yourself seriously, who will?"
          },
          {
            line: 2,
            wen: "九三：君子終日乾乾，夕惕若，厲，无咎。",
            translation: "All day long the superior man is creatively active. \n At nightfall his mind is still beset with cares. \n Danger. No blame.",
            meaning: "Busy. The more successful you are, the more you have to deal with. As your influence grows, there's a danger you will become the viction of your own popularity. By staying in touch with your true feelings, you will remain free from blame."
          },
          {
            line: 3,
            wen: "九四：或躍在淵，无咎。",
            translation: "Wavering flight over the depths. \n No blame.",
            meaning: "Your creativity has brought you to a crossroads. You have a choice: Go on blazing a trail of glory, or retreat from the world and work on perfecting your art."
          },
          {
            line: 4,
            wen: "九五：飛龍在天，利見大人。",
            translation: "Flying dragon in the heavens. \n It furthers one to see the great man.",
            meaning: "Water flows to the ocean. Fire reaches for the sun. You have a purpose here, and you have the chance to fulfill it."
          },
          {
            line: 5,
            wen: "上九：亢龍有悔。",
            translation: "Arrogant dragon will have cause to repent.",
            meaning: "You made it. You're flying high. Don't let it go to your head!"
          }
        ],
        allChanging: {
          wen: "用九：見群龍无首，吉。",
          translation: "There appears a flight of dragons without heads. \n Good fortune."
        }

      },
      {
        number: 2,
        trigrams: [4, 4],
        sequence: [0,0,0,0,0,0],
        name: 'Receiving',
        guaMing: '坤',
        says: "It's simple to receive when your heart is full of love.",
        sees: "you like mother earth \n the seeds are within you \n all you need is light \n water and nourishment \n with plenty of room to grow \n what a harvest it will be",
        suggests: "the more you can receive \n the more you are able to give \n sympathetic soulds \n kindred spirits \n allies and helpers \n they are all around you \n simply by being open \n receptive to the blessings \n life has to give \n you will prosper and grow",
        changing: [
          {
            line: 0,
            meaning: "When the first frost of autumn hits, winter is not far behind. Better get ready."
          },
          {
            line: 1,
            meaning: "You can be your own worst critic. Accept your nature. The thing to remember is that you are unique and original, and this is what you have to offer."
          },
          {
            line: 2,
            meaning: "Don't be too concerned about recognition at this stage. Finish what you start and be satisfied with that."
          },
          {
            line: 3,
            meaning: "Keep it to yourself. Whatever you say now will be taken the wrong way. Wait for the controversy to die down before sticking you neck out."
          },
          {
            line: 4,
            meaning: "Let your work speak for itself. Don't interrupt."
          },
          {
            line: 5,
            meaning: "A power struggle at the top causes harm on both sides. Stay out of it if you can or you might get caught in the crossfire. This is not your fight."
          }
        ]
      },
      {
        number: 3,
        trigrams: [1, 2],
        sequence: [1,0,0,0,1,0],
        name: 'Beginning',
        guaMing: '屯',
        says: "In the beginning is the word and the word is now.",
        sees: "a new beginning \n an exciting development \n a storm clearing the air \n a new day \n when anything is possible",
        suggests: "beginning can be a difficult time \n when extra care must be taken \n whether it's a newborn baby \n an idea or an initiative \n a journey or a work of art \n best to be prepared \n when it's time to bring order out of chaos \n helping hands are most welcome \n once the clutter has been cleared \n the dust has settled \n the scene is set \n let us begin",
        changing: [
          {
            line: 0,
            meaning: "Obstacles, difficulties, hindrances. Pause for thought. What you need is an intelligent approach to intelligence."
          },
          {
            line: 1,
            meaning: "Bide your time. Things appear to be falling apart. Whom can you trust? On what can you depend? You."
          },
          {
            line: 2,
            meaning: "If you enter uncharted territory without a guide or a map, you're looking for trouble."
          },
          {
            line: 3,
            meaning: "When you're in a fix, don't be too proud to accept help. The right helper at the right time can get you out of trouble and put you back on the road."
          },
          {
            line: 4,
            meaning: "Just because you're paranoid doesn't mean they're not out to get you. When you don't have the confidence of others, proceed with extreme caution."
          },
          {
            line: 5,
            meaning: "Fate seems to be conspiring against you. You've got to know when to walk away (and know when to run!)."
          }
        ]
      },
      {
        number: 4,
        trigrams: [2, 3],
        sequence: [0,1,0,0,0,1],
        name: 'Playing the Fool',
        guaMing: '蒙',
        says: "If you lack experience, you need a good teacher. If you have a good teacher, pay attention and do what the teacher tells you.",
        sees: "you like a mountain stream \n full of rushing enthusiasm \n the exuberance of young life \n a foll on the brink",
        suggests: "the folly of youth \n is a fact of life \n playing the fool \n goes with the territory \n but there comes a time \n when you have to grow up \n if you listen to what is being said \n you can receive the gift of wisdom \n and not be fooled again",
        changing: [
          {
            line: 0,
            meaning: "There comes a time when you have to grow up and start taking the business of life more seriously. A little self-discipline is needed. life is not a game."
          },
          {
            line: 1,
            meaning: "Remember when you were young and foolish? A little tolerance goes a long way. A little kindness never hurt anyone."
          },
          {
            line: 2,
            meaning: "Are you wasting your time on an adolescent fantasy? Is it really worth it?"
          },
          {
            line: 3,
            meaning: "Are you deluded by your own projections? Are you about to make a fool of yourself again? <i>The Book</i> suggests: don't."
          },
          {
            line: 4,
            meaning: "Stay in touch with the innate wisdom of the young. Approach life with the heart of a child."
          },
          {
            line: 5,
            meaning: "What do you do with someone who won't listen, who just goes on playing the fool? Temper justice with mercy. Punishment is meant to improve the behavior, not make it worse."
          }
        ]
      },
      {
        number: 5,
        trigrams: [0, 2],
        sequence: [1,1,1,0,1,0],
        name: 'Waiting',
        guaMing: '需',
        says: "Patience is a gift. Like kindness, you have an abundant reserve of patience within you. Learn how to use it and you'll see a beautiful transformation in your life.",
        sees: "you like clouds in a blue sky \n pretty as a picture \n a sunny interval \n a pause for reflection",
        suggests: "waiting is an art \n ancient and timeless \n waiting is a seed \n full of life's certainty \n waiting is a drop \n on its way to becoming a river \n waiting is knowing \n timing is everything \n while you're waiting \n eat, drink, and be merry \n for tomorrow we dine",
        changing: [
          {
            line: 0,
            meaning: "Waiting on the meadows. Sweet! Enjoy it while it lasts."
          },
          {
            line: 1,
            meaning: "Draw a line in the sand. Across this line, they do not pass."
          },
          {
            line: 2,
            meaning: "Stuck in the mud? Spinning your wheels will just get you in deeper. Once you appreciate the gravity of your situation, you discover a way out."
          },
          {
            line: 3,
            meaning: "Wait. This is a dangerous situation. Remain calm. Stand fast. Be brave."
          },
          {
            line: 4,
            meaning: "Take time out to enjoy the simple pleasures life can afford. You deserve it."
          },
          {
            line: 5,
            meaning: "Are you in the pits? Have all your efforts been in vain? Sometimes help comes from unexpected quarters. A happy outcome can appear in a form that, at first, seems strange."
          }
        ]
      },
      {
        number: 6,
        trigrams: [2, 0],
        sequence: [0,1,0,1,1,1],
        name: 'Resolving Conflict',
        guaMing: '訟',
        says: "When you can find peace within yourself, you will find peace all around you.",
        sees: "you like the inner diplomat \n observing the conflict \n discovering hidden agendas \n digging into the causes \n of the dangers and difficulties",
        suggests: "take a dep breath \n a big step back \n resolving inner conflicts \n enables you to find solutions \n to external problems \n sometimes doing nothing \n is better than doing the wrong thing \n once you make peace with yourself \n you can make peace with anyone",
        changing: [
          {
            line: 0,
            meaning: "By not reacting to the attacks on you, you defuse the conflict. Don't worry — it will work out in the end."
          },
          {
            line: 1,
            meaning: "When you know you can't win, retreat. Timely withdrawal implies no blame. If you can see it coming, avoid the calamity."
          },
          {
            line: 2,
            meaning: "In times of danger, dig deep. Draw on your inner strength. Don't focus on the rewards — just get the job done."
          },
          {
            line: 3,
            meaning: "You're so caught up in the conflict, you are not seeing clearly. Accept your situation. There's not a lot you can do about it at this point. What you can affect is your attitude. Be at peace with youself, no matter what."
          },
          {
            line: 4,
            meaning: "If you are in the right and the authorities are on your side, the conflict can be resolved to your satisfaction."
          },
          {
            line: 5,
            meaning: "When you engage in an unjust conflict, even if you win, you will lose in the end. A hollow victory will bring you under attach again and again."
          }
        ]
      },
      {
        number: 7,
        trigrams: [2, 4],
        sequence: [0,1,0,0,0,0],
        name: 'An Army of You',
        guaMing: '師',
        says: "You are a force to be reconed with. Discipline is the key to success.",
        sees: "you as a natural leader \n with the support of people \n who have good reason \n tocome out and fight for you \n when the cause is just \n and the need is great",
        suggests: "you have courage and strength \n the ability to inspire others \n but just as muchles need exercise \n if they are to be strong \n your talents must be employed \n for you to develop and grow \n when the leader lacks discipline \n what hope is there for the army?",
        changing: [
          {
            line: 0,
            meaning: "In the beginning of a campaign, good organization is essential."
          },
          {
            line: 1,
            meaning: "A good leader spends time on the ground sharing experiences with the people doing the work: recognition, reward, reinforcement."
          },
          {
            line: 2,
            meaning: "You have to get rid of the dead wood if you want the tree to be healthy and grow."
          },
          {
            line: 3,
            meaning: "When you're up against a vastly superior force, there's no shane in a well-ordered retreat."
          },
          {
            line: 4,
            meaning: "The game is afoot. Now's the time to act! May your progress be swift and your aim be true."
          },
          {
            line: 5,
            meaning: "The campaign is complete. Victory is yours. Share the rewards with the people who helped you achieve them."
          }
        ]
      },
      {
        number: 8,
        trigrams: [4, 2],
        sequence: [0,0,0,0,1,0],
        name: 'Joining Forces',
        guaMing: '比',
        says: "You are the river and the river is you.",
        sees: "you are like a drop of water \n joining together \n with other drops of water \n to form one mighty river",
        suggests: "now is the time to unite \n with kindred spirits \n in a common cause \n working together \n you can achieve great things \n that you cannot do alone \n for you to take the lead of such forces \n to be the center of attention \n you will need to be strong \n consistent and clear \n (so if you're still not sure \n ask the oracle once more)",
        changing: [
          {
            line: 0,
            meaning: "Content is everything. If you are sincere, you will be blessed with good fortune."
          },
          {
            line: 1,
            meaning: "If you are happy to be a follower and feel genuine respect for the leader, trust your feeling. If you're just going along for the ride, watch out."
          },
          {
            line: 2,
            meaning: "You're hanging out with the wrong people. Not only are they holding you back, they're keeping you from the right people."
          },
          {
            line: 3,
            meaning: "When you find a good person or group of people that you trust and believe in, show your loyalty. Let them know how you feel."
          },
          {
            line: 4,
            meaning: "Fair play is the foundation of good teamwork. A unity based on trust and conviction is always stronger than one fraught with fear and suspicion."
          },
          {
            line: 5,
            meaning: "Make sure you get it right from the start. If the beginning is all wrong, what hope is there for the outcome?"
          }
        ]
      },
      {
        number: 9,
        trigrams: [0, 5],
        sequence: [1,1,1,0,1,1],
        name: 'Gently Does It',
        guaMing: '小畜',
        says: "Like a gentle breeze on a hot summer's day, your influence is subtle yet most welcome.",
        sees: "you like a beautiful day \n gentle breezes are blowing \n exquisite clouds adorn \n a brilliant blue sky",
        suggests: "the gentle art of persuasion \n in the eyes of others \n you are what you appear to be \n invest the time and effort \n both in your appearance \n and how you express yourself \n only remember \n clouds are not merely ornamental \n they serve a vital purpose: \n the delivery of rain",
        changing: [
          {
            line: 0,
            meaning: "Do what suits you. Find the place where you feel comfortable. How can you go wrong with that?"
          },
          {
            line: 1,
            meaning: "The way ahead is blocked. Bide your time. Consider an alternative route."
          },
          {
            line: 2,
            meaning: "You blew it again! If only you'd held back and bided your time. If married or in a partnership, a row is almost inevitable."
          },
          {
            line: 3,
            meaning: "Being gentle in your handling of the situation is not a sign of weakness. Your strength is in holding on to what you know to be true. Then you need not fear."
          },
          {
            line: 4,
            meaning: "Sincerity coupled with loyalty is a winning combination. By serving the mutual interests of both parties, everyone's a winner."
          },
          {
            line: 5,
            meaning: "With the downpour comes relief. Through your patient efforts, you have finally attained your goal. Take extra care or you might snatch defeat from the jaws of victory."
          }
        ]
      },
      {
        number: 10,
        trigrams: [7, 0],
        sequence: [1,1,0,1,1,1],
        name: 'Treading Carefully',
        guaMing: '履',
        says: "There's no doubt you're going places now, but watch your step and don't get ahead of yourself.",
        sees: "you finding your way in the world \n where your position is defined \n both by your inner character \n and how it is outwardly expressed",
        suggests: "it's not what you do \n it's the way that you do it \n tread carefully \n you are working with powerful forces \n that can take you where you want to go \n so show some respect \n but don't lose your sense of humor \n a respectful attitude \n comined with \n a cheerful expression \n will win you friends \n in both high and low places",
        changing: [
          {
            line: 0,
            meaning: "Keep it simple. Be happy with your rate of progress. Your restless mind with its endless ambitions will only make you miserable. Ignore it if you can."
          },
          {
            line: 1,
            meaning: "Stay on the path. You walk your walk and are not affected by the opinions of others. You are happy with your own company."
          },
          {
            line: 2,
            meaning: "Be careful. If you tread on a tiger's tail, he just might turn around and bite you."
          },
          {
            line: 3,
            meaning: "You're riding a tiger, so be extremely cautious. The danger is real, but by being extra careful, you can avoid being hurt."
          },
          {
            line: 4,
            meaning: "When you embark on a bold course of action, you are tiaking your chances. However, if you are aware of the dangers and how to deal with them, your adventure can be a great success."
          },
          {
            line: 5,
            meaning: "Look at what you've done. If you've done well, enjoy your rewards. Let's celebrate."
          }
        ]
      },
      {
        number: 11,
        trigrams: [0, 4],
        sequence: [1,1,1,0,0,0],
        name: 'Peace',
        guaMing: '泰',
        says: "You discover your heaven on earth when you find true peace within yourself.",
        sees: "you like a peaceable domain \n enjoying and appreciating \n the benign influence of your heaven \n the receptive nature of your earth \n the symmetry of your seasons \n the elegance of your day \n the comfort of your night",
        suggests: "be at peace with yourself \n this is your heaven on earth \n rain brings the seed to life \n sunlight enables it to grow \n working with nature \n you achieve a bountiful harvest \n as the well-being within you rises \n sickness will simply disappear",
        changing: [
          {
            line: 0,
            meaning: "In times of peace and prosperity, your ability to achieve your goals is enhanced. It's only natural that like-minded people are drawn to help you."
          },
          {
            line: 1,
            meaning: "Prosperous times will attract all kinds of people to your enterprise. Trusting those who are close to you allows you to pay more attention to those who are far away."
          },
          {
            line: 2,
            meaning: "Everything changes; it's always the same. erservere in times of difficulty. <i>The Book</i> suggests: less complaining, more sustaining."
          },
          {
            line: 3,
            meaning: "A shower of blessings, a time of harmony — rich and poor get together like good neighbors and friends. Sweet."
          },
          {
            line: 4,
            meaning: "With the generosity of your nature, you bring all different kinds of poeple together and a good time is had by all."
          },
          {
            line: 5,
            meaning: "Your outer defenses are crumbling. Accept your fate. Withdraw into the inner circle, composed of the people you know you can trust. Guard yourself in silence."
          }
        ]
      },
      {
        number: 12,
        trigrams: [4, 0],
        sequence: [0,0,0,1,1,1],
        name: 'Standing Still',
        guaMing: '否',
        says: "When all around you are losing their heads, you can keep yours — simply by standing still.",
        sees: "you like a wise leader \n withdrawing from the fray \n when all is discordant and confusing \n when chaos is the order of the day \n you stand for dignity \n your position is clear",
        suggests: "stand still \n very very still \n take a good look around \n bide your time \n mind your own business \n don't be foold \n by tempting offers \n until you know it's time \n to make your move \n then go for it \n if you stand still for too long \n it may turn to stagnation",
        changing: [
          {
            line: 0,
            meaning: "In a time of standstill, be true to yourself. When things start moving again, you will be in a good position to succeed."
          },
          {
            line: 1,
            meaning: "Stick to your principles and everything will turn out right in the end. Have patience."
          },
          {
            line: 2,
            meaning: "Once you acknowledge your mistakes you can begin to put them right."
          },
          {
            line: 3,
            meaning: "It's your call. Look for the mutual benefits to all parties concerned and you'll make the right decision."
          },
          {
            line: 4,
            meaning: "Time to stop standing still and spring into action. Ask yourself: What if it should fail? But don't let that stop you. Have a plan B."
          },
          {
            line: 5,
            meaning: "The time for standing still is over. A good thing, too. You didn't know how much more standing still you could stand."
          }
        ]
      },
      {
        number: 13,
        trigrams: [6, 0],
        sequence: [1,0,1,1,1,1],
        name: 'The Fellowship',
        guaMing: '同人',
        says: "At the heart of any fellowship worthy of the name is a great love that is shared by your fellows.",
        sees: "you like a good fellow \n entertaining friends \n serving the cause \n following your heart",
        suggests: "the foundation of your fellowship \n is the common cause \n binding you together \n with clarity on the inside \n strength on the outside \n great things are possible \n but you will need clear leadership \n good organization \n if you want to succeed",
        changing: [
          {
            line: 0,
            meaning: "In the beginning of a communal enterprise, openness is the key. Transparency inspires trust."
          },
          {
            line: 1,
            meaning: "When the fellowship is gragmentd and people are driven by selfish motives, your are heading for disaster. Be aware of this potential and try to stop it before it happens."
          },
          {
            line: 2,
            meaning: "Hostile or divisive forces have infiltrated your fellowship. Suspicion breeds suspicion, paranoia feeds on itself. The longer it goes on, the worse it gets."
          },
          {
            line: 3,
            meaning: "It takes two to tango. Stay out of the fight. Seek reconciliation."
          },
          {
            line: 4,
            meaning: "When the fellowship has been kept apart by circumstances, great joy attends the reunion."
          },
          {
            line: 5,
            meaning: "The common meadews belong to the people. Friends meet in the open air. It is a wonderful, easygoing fellowship."
          }
        ]
      },
      {
        number: 14,
        trigrams: [0, 6],
        sequence: [1,1,1,1,0,1],
        name: 'Heavenly Treasure',
        guaMing: '大有',
        says: "A treasure shared is a treasure doubled.",
        sees: "you like the sun \n high in the sky \n shining brightly \n to light up your world \n revealing both the good and the bad",
        suggests: "in the light of this new day \n take a good look at your life \n get rid of the evil \n nurture the good \n dig the riches you discover \n share them with the world \n express yourself clearly \n stay in control \n you will be richly rewarded \n when you find your treasure on earth \n it feels like heaven",
        changing: [
          {
            line: 0,
            meaning: "When things start to go your way, don't let it go to your head. There are still difficulties to be overcome."
          },
          {
            line: 1,
            meaning: "You've found the treasure. Now you must use the appropriate vehicle to convey it to where it can do the most good. Reliable people are worth their weight in gold."
          },
          {
            line: 2,
            meaning: "Don't keep it to yoursef. Such a heavenly treasure is for the benefit of everyone."
          },
          {
            line: 3,
            meaning: "Don't envy those who are better off, nor look down on those who are worse. Be happy with a little, be content with your lot."
          },
          {
            line: 4,
            meaning: "You've reached an exalted position. Be accessible but retain your dignity. This is your time of good fortune. Enjoy it."
          },
          {
            line: 5,
            meaning: "You are blessed by good fortune. Your devotion is rewarded from above, your sincerity is recognized by one and all."
          }
        ]
      },
      {
        number: 15,
        trigrams: [3, 4],
        sequence: [0,0,1,0,0,0],
        name: 'Modesty Becomes You',
        guaMing: '謙',
        says: "Being as humble as you can be (without disappearing) you shine with an inner light.",
        sees: "you like a hidden mountain \n composed and self-contained \n empty of conceit \n full of genuine affection \n making you radiant",
        suggests: "modesty suits you \n reduce your excesses \n clear what needs clearing \n build what needs building \n edit what you do not need \n polish what you want to keep \n such refinements will bring success",
        changing: [
          {
            line: 0,
            meaning: "Make no promises you cannot keep. When you're facing a new challenge, you need all your concentration to geth the job done."
          },
          {
            line: 1,
            meaning: "Being modest does not mean keeping quiet. Express your actual feelings if you want to have a real influence."
          },
          {
            line: 2,
            meaning: "Your natural modesty is the key to your success. When the rewards and recongition come, follow the hip commandment: be cool."
          },
          {
            line: 3,
            meaning: "Modesty is not something to hide behind. Recognition of your ability and commitment enables you to accomplish more."
          },
          {
            line: 4,
            meaning: "Modesty can be mistaken for weakness, but don't be tempted into boasting of your strength. Nobody likes a show-off."
          },
          {
            line: 5,
            meaning: "When modesty finds its full expression, it creates order. It's a discipline that allows you to transcend ego and achieve true and lasting benefits for you and your world."
          }
        ]
      },
      {
        number: 16,
        trigrams: [4, 1],
        sequence: [0,0,0,1,0,0],
        name: 'Enthusing',
        guaMing: '豫',
        says: "To be enthused is to be filled with divine inspiration. When you are inspired you are inspiring.",
        sees: "you like a summer storm \n your enthusiasm resounding \n far and wide \n like rolling tunder \n like heavenly music",
        suggests: "as a thunderstorm relieves tensions \n refreshing the earth \n music brings joy to the heart \n following the line of least resistance \n you get the people moving \n they are on your side \n like a rainbow bridge \n you make the connection \n between heaven and earth \n you've got the whole world \n in your hands \n when you know the secret of enthusiasm",
        changing: [
          {
            line: 0,
            meaning: "You may feel the need to show off and make an impression. Like you have to boast a bit. You don't."
          },
          {
            line: 1,
            meaning: "You know straghtaway what the real deal is here. Secure in this knowledge, you can relax. Your take on the situation is right on."
          },
          {
            line: 2,
            meaning: "Don't let yhose above you dim your enthusiasm. You who hesitate are lost."
          },
          {
            line: 3,
            meaning: "No doubt about it. You retian friends and supporters, who are attracted by your enthusiasm. Together, you can achieve great things."
          },
          {
            line: 4,
            meaning: "Frustration. Obstacles. Stress. It's enough to make you ill, and it frequently does. Try not to react. Don't let it get under your skin."
          },
          {
            line: 5,
            meaning: "There's a big gap between expectation and reality here. Awakening from a false enthusiasm can only be a good thing."
          }
        ]
      },
      {
        number: 17,
        trigrams: [1, 7],
        sequence: [1,0,0,1,1,0],
        name: 'Following',
        guaMing: '隨',
        says: "Following the path that feels right to you will take you where you really want to go.",
        sees: "a storm on the water \n joy in motion \n a natural sequence of event \n a fabulous footpath",
        suggests: "the path you are on was made for you \n if you stay on it \n you will find it easy going \n when you learn to listen \n you will be heard \n when you learn to follow \n you will know how to lead \n your ability to adapt \n to the changes around you \n inspires confidence in your followers \n when you have had a long day on the trail \n better get some rest",
        changing: [
          {
            line: 0,
            meaning: "Exciting events are unfolding. If you want to be part of the action, get out more."
          },
          {
            line: 1,
            meaning: "The company you keep can seriously affect how well you perform. Beware the weak and seek out the strong, for they will bring out the best in you."
          },
          {
            line: 2,
            meaning: "When you connect with the right people who enable you to follow you true path, it often means parting company from the ones who were leading you astray."
          },
          {
            line: 3,
            meaning: "Follow through and you will fulfill your ambition. Go your own way — just as you are. Sincerity will bring clarity. Clarity will show the way."
          },
          {
            line: 4,
            meaning: "Recognizing and following the path that leads you to your promised land — this is your great good fortune."
          },
          {
            line: 5,
            meaning: "You achieve recognition. You advance along your chosen path. Enjoy your rewards — you deserve them."
          }
        ]
      },
      {
        number: 18,
        trigrams: [5, 3],
        sequence: [0,1,1,0,0,1],
        name: 'Working On It',
        guaMing: '蠱',
        says: "When you know the job has got to be done, the sooner you get to work, the better you will begin to feel.",
        sees: "you in a state of inertia \n somehow stuck in a moment \n like stagnat water \n something in you \n needs to be moved \n wants to be moving",
        suggests: "the longer you leave it \n the worse it gets \n the garden that needs weeking \n the mess that needs clearing up \n the heart that needs to be understood \n get weeding — get clearing \n seek understanding \n and you will find fulfillment \n when you bring order out of chaos \n you show the way \n for others who may be stuch",
        changing: [
          {
            line: 0,
            meaning: "The mess may not be of your making. It may be a legacy mess. However, it's now your responsibility to clear it up. Just do it."
          },
          {
            line: 1,
            meaning: "The mess you've inherited was not created deliberately. It's much more satisfying to clean it up than to worry about who's to blame."
          },
          {
            line: 2,
            meaning: "Sometimes whem you're clearing up, you have to get your hands dirty. Wear rubber glovbes if you like — just get cleaning. You will feel so much better when it's done."
          },
          {
            line: 3,
            meaning: "Once the rot set in, it becomes harder and harder to get rid of it. The sooner you start, the better."
          },
          {
            line: 4,
            meaning: "Job done. You've cleared up the mess and put things back in order. You deserve a break."
          },
          {
            line: 5,
            meaning: "What does all work and no play make you? Take a break and have some fun."
          }
        ]
      },
      {
        number: 19,
        trigrams: [7, 4],
        sequence: [1,1,0,0,0,0],
        name: 'Approaching Greatness',
        guaMing: '臨',
        says: "How do you approach greatness? Very humbly.",
        sees: "you like a good teacher \n whose clarity and enthusiasm \n makes the subject easy to approach \n the lake is deep \n the earth spreads far and wide",
        suggests: "it's all in your approach \n a humble heart and a tolerant attitude \n create a safe atmosphere \n where people want to do their best \n this is how a good teacher \n becomes a great teacher \n once you get the ball rolling \n maintain the momentum \n the excitement in the early stages \n is bound to diminish \n defeat the threat of boredom \n by keeping your approach fresh",
        changing: [
          {
            line: 0,
            meaning: "Doors are opening. Things are looking up. You approach greatness by standing up for what you know to be right."
          },
          {
            line: 1,
            meaning: "When a collaboration works, your burden is lightened. A joint approach leads to progress."
          },
          {
            line: 2,
            meaning: "Things are going well. But complacenct can undo your good work. If it's already happened, apologize and move on."
          },
          {
            line: 3,
            meaning: "Be open-minded. You have gathered aable people around you who can make good things happen. Let them."
          },
          {
            line: 4,
            meaning: "A wise leader attracts capable people and ecourages them to use their abilities to the full."
          },
          {
            line: 5,
            meaning: "Great is the good fortune of the student who can approach a true teacher with a humble heart."
          }
        ]
      },
      {
        number: 20,
        trigrams: [4, 5],
        sequence: [0,0,0,0,1,1],
        name: 'Taking a Long Look',
        guaMing: '觀',
        says: "By finding a high place, you gain the prespective you need.",
        sees: "you like seeing and being seen \n the wind blows where it will \n you move among the people \n observing their ways",
        suggests: "a period of contemplation \n a place of elevation \n so you can see the big picture \n looking at your life \n what you have to offer the world \n the intensity of your focus \n the sincerity of your devotion \n combine to give you a power of seeing \n that enables you to have a profound effect \n on the attitudes of people \n without them even knowing how it happens",
        changing: [
          {
            line: 0,
            meaning: "Childlike imaginings are all very well if you're just having fun at home. But if you want to be taken seriously in the realy world, you'd better start acting like a grown-up."
          },
          {
            line: 1,
            meaning: "Life as seen through a crack in the door — you need to get out more."
          },
          {
            line: 2,
            meaning: "Look at what you are contemplating. Honestly. Do you really want to go there?"
          },
          {
            line: 3,
            meaning: "Good people invite you into their world. Enjoy the hospitality they offer and express your gratitude."
          },
          {
            line: 4,
            meaning: "Contemplate this: How are you affecting the people around you> Now, consider what's going on inside you to cause these effects. Change begins within you."
          },
          {
            line: 5,
            meaning: "Contemplate life itself. Life within you and without you."
          }
        ]
      },
      {
        number: 21,
        trigrams: [1, 6],
        sequence: [1,0,0,1,0,1],
        name: 'Biting Through',
        guaMing: '噬嗑',
        says: "Energetic and decisive action is required to remove the obstacle blocking your progress.",
        sees: "an electrical storm \n great flashes of lightning \n illuminating the scene \n so you can see clearly",
        suggests: "when an obstacle needs to be removed \n a problem must be solved \n you've got to lay down the law \n act swiftly \n like an animal in the wild \n biting through the umbilical cord \n of its newborn offspring \n you have to cut through \n whatever's getting in the way \n of your natural progress \n with whatever is available to you",
        changing: [
          {
            line: 0,
            meaning: "Your authority is threatened. You hope a warning shot may be enough. But be prepared to take more drastic action."
          },
          {
            line: 1,
            meaning: "The case is easy to settle and you meet with little resistance. No blame."
          },
          {
            line: 2,
            meaning: "You're stirring up some old grudges here. It's a painful procedure but a necessary one. It will be ood to get through these things."
          },
          {
            line: 3,
            meaning: "Because of your determination to take on the opposition and remove the obstacles, you'll be under attack. You'd best be well protected."
          },
          {
            line: 4,
            meaning: "You're aware of the danger but you know you're right to proceed. Be fair in your demands and you will receive satisfaction."
          },
          {
            line: 5,
            meaning: "When people are deaf to all warnings and keep making the same mistakes, you need to do something dramatic to focus their attention."
          }
        ]
      },
      {
        number: 22,
        trigrams: [6, 3],
        sequence: [1,0,1,0,0,1],
        name: 'Grace',
        guaMing: '賁',
        says: "The world is a beautiful place when your life is full of grace.",
        sees: "you like a fire in the mountain \n a radiant inner glow \n brightening and gladdening \n every aspect of your existence",
        suggests: "as the moon reflects \n the glory of the sun \n you toon can create \n beautiful reflections \n to enrich your world \n attend to the details \n refine and polish the threads \n you weave together \n to create a tapestry of delight \n so you can live \n in a state of grace",
        changing: [
          {
            line: 0,
            meaning: "It is more graceful to go on foot than to ride in the carriage under a false pretext."
          },
          {
            line: 1,
            meaning: "If you want to get ahead in the world, good grooming is essential. Why do you think they say someone is being groomed for success?"
          },
          {
            line: 2,
            meaning: "Are you leading a charmed existence? Don't get too comfortable or you might lose your edge. Without your edge, life would be so dull."
          },
          {
            line: 3,
            meaning: "Like a winged horse, you rise above your situation. You can go on pushing the boundaries or return to a simpler style. The choice is yours."
          },
          {
            line: 4,
            meaning: "You find grace in your surroundings: a walk in the hills, relaxing in nature. Who needs material riches when you can enjoy such simple pleasures?"
          },
          {
            line: 5,
            meaning: "No unnecessary ornamentation is required. Form serves function. The design does not get in the way; it brings out the value of the content."
          }
        ]
      },
      {
        number: 23,
        trigrams: [4, 3],
        sequence: [0,0,0,0,0,1],
        name: 'Falling Apart',
        guaMing: '剝',
        says: "When the old order is collapsing, find shelter in the sanctuary of your heart. Prepare to embrace the new.",
        sees: "you like a crumbling mountain \n a house on the verge of collapse \n the old order passing away \n the new order rising",
        suggests: "keep a low profile \n conserve your energy \n there's not much you can do now \n when things fall apart \n it's time to let them go \n stay true to your generous nature \n don't let the bad times \n put a dent in your benevolence \n hold on to your inner equilibrium \n stay safe in a quiet heart \n until the good times return",
        changing: [
          {
            line: 0,
            meaning: "Is your authority being undermined? Has your reputation been tarnished by hearsay? Don't be too concerned. You know what you're doing."
          },
          {
            line: 1,
            meaning: "Feeling isolated? Under attack? Consider your options. Sometimes just changing your postiion can alleviate the pain."
          },
          {
            line: 2,
            meaning: "Enough is enough. You can only take so much. A clean break is indicated."
          },
          {
            line: 3,
            meaning: "Something's wrong when you can't sleep at night. Try to figure out what it is and put it right. If you can't manage on your own, get help."
          },
          {
            line: 4,
            meaning: "When things are falling apart, you find out who your true friends are. Lay down your arms and surrender to their tender loving care. You could use some right now."
          },
          {
            line: 5,
            meaning: "The worst of your fall from grace is over. Evil has eaten itself. Now you can start again. The core of your being is intact and ready to puth forth fresh growth."
          }
        ]
      },
      {
        number: 24,
        trigrams: [1, 4],
        sequence: [1,0,0,0,0,0],
        name: 'The Point of Return',
        guaMing: '復',
        says: "When you come to a major turning point, just for a moment, your whole world stands still.",
        sees: "you like coming home \n returning to the light \n celebrating your life \n in the company of good friends",
        suggests: "let nature take its course \n just as the earth \n in the depths of winter \n at the time of the solstice \n stops for a moment \n before turning \n making its journey back toward the sun \n you too have arrived at a place \n where you can begin the journey \n back to where you belong \n it's a cause for celebration",
        changing: [
          {
            line: 0,
            meaning: "It's OK to stray from the path as long as you get back on it."
          },
          {
            line: 1,
            meaning: "Come home to where you belong. You'll be in good company — even when you are alone."
          },
          {
            line: 2,
            meaning: "Do you keep changing your mind? Going back on your decisions? Too many changes are not good for you."
          },
          {
            line: 3,
            meaning: "Don't follow the herd. Do your own thing, even if it means doing it alone."
          },
          {
            line: 4,
            meaning: "You're big enough to admit your mistakes and return to the way. Your heart is in the right place, and it shows."
          },
          {
            line: 5,
            meaning: "If you keep missing the point and straying from where you truly belong, you are going to get hurt. Only a change of heart can save you now."
          }
        ]
      },
      {
        number: 25,
        trigrams: [1, 0],
        sequence: [1,0,0,1,1,1],
        name: 'Innocence',
        guaMing: '無妄',
        says: "Your fundamental nature has not changed. It is as innocent as the day you were born. If you lose touch with this inner sense, what will become of you?",
        sees: "you like a benign ruler \n grounded in your true nature \n fill of virtue \n overflowing with kindness",
        suggests: "being true to yourself \n you can't go wrong \n expecting the unexpected \n you're not taken by surprise \n being attuned to the times \n following your better instincts \n you bring good things to life \n life brings good things to you",
        changing: [
          {
            line: 0,
            meaning: "Follow your heart. It knows you better than you know yourself."
          },
          {
            line: 1,
            meaning: "Focus on what you're doing. Enjoy the simple pleasure of getting the job done."
          },
          {
            line: 2,
            meaning: "Accidents will happen. Good people have bad luck. That's just how it is."
          },
          {
            line: 3,
            meaning: "Do your own thing. Give it your all — you've got nothing to lose and everything to gain."
          },
          {
            line: 4,
            meaning: "Whatever's troubling you will pass. If it's not your fault, why take the blame? If you're not really sick, why pay for medicine?"
          },
          {
            line: 5,
            meaning: "Hang on. THe time may not be right. Is it instinct or impulse? Best to be sure."
          }
        ]
      },
      {
        number: 26,
        trigrams: [0, 3],
        sequence: [1,1,1,0,0,1],
        name: 'Holding On to Greatness',
        guaMing: '大畜',
        says: "You can draw on the ancient wisdom teachings to strengthen your character.",
        sees: "heaven in the mountain \n hidden treasures revealed \n the wisdom of the past \n made available to you today",
        suggests: "your success is so close \n you can taste it \n all this enerhy building up inside \n is about to be released \n get ready for the ride of your life \n hold on \n hold fast to what you know to be true \n hold back till the time is just right \n hol on to your drea,s \n as they turn into reality",
        changing: [
          {
            line: 0,
            meaning: "Greatness comes in its own time — you can't force it. Hold on to the power stored within you and hold back till the time is right."
          },
          {
            line: 1,
            meaning: "Your progress is temporarily halted — like someone took the wheels off! You need to repair your vehicle, or you won't get too far."
          },
          {
            line: 2,
            meaning: "Lead by following. Key your ear close to the ground. Be alert to any sign of danger."
          },
          {
            line: 3,
            meaning: "Anticipate trouble before it happens. Stop it before it starts."
          },
          {
            line: 4,
            meaning: "By not overreacting, you diminish the power of dissension. By remaining cal you can diffuse the tension that agitated people tend to create."
          },
          {
            line: 5,
            meaning: "A stairway to heaven. The success you have been seeking is yours for the taking."
          }
        ]
      },
      {
        number: 27,
        trigrams: [1, 3],
        sequence: [1,0,0,0,0,1],
        name: 'Nourishing',
        guaMing: '頤',
        says: "Watch your mouth.",
        sees: "you like cultivating character \n both phusical and spiritual \n tranquility is the key \n to your growth and well-being",
        suggests: "the food and drink you consume \n will determine the health you enjoy \n the things you express \n the words you choose to say them \n will define your state of mind \n just as delicious nourishing food \n sustains the body \n expressions that are beautiful and true \n nurture the spirit \n the nourishment you provide for yourself \n can also nourish those around you",
        changing: [
          {
            line: 0,
            meaning: "There is magic, working wonders in your life. Don't lost it by looking at what works for other people and wondering if you should be like them."
          },
          {
            line: 1,
            meaning: "Your natural state is to support yourself. If you are dependent on someone else for your support, you will never be truly comfortable."
          },
          {
            line: 2,
            meaning: "Sensual gratification and the pursuit of pleasure will be your undoing. You've got to know when to quit."
          },
          {
            line: 3,
            meaning: "You're hungry like a tiger, your appetite for success driving you onward and upward."
          },
          {
            line: 4,
            meaning: "Going into unfamiliar territory, you're likely to need help. If you're not sure of the outcome, don't invest too heavily."
          },
          {
            line: 5,
            meaning: "Well-nourished, both phusically and spiritually, you can now face the dangers and overcome the difficulties."
          }
        ]
      },
      {
        number: 28,
        trigrams: [5, 7],
        sequence: [0,1,1,1,1,0],
        name: 'Taking a Load Off',
        guaMing: '大過',
        says: "Find a way to lighten your load before something gives.",
        sees: "you like a beam that is sagging \n an overloaded structure \n on the edge of collapse \n a sustem that is being pushed \n to its limit",
        suggests: "if you've taken on too much \n you have two choices \n lighten the load \n by discarding some items \n or get help carrying it \n when the burden becomes insupportable \n something's got to give \n and it's likely to be you \n only by identifying the realy problem \n can you discover a lasting solution",
        changing: [
          {
            line: 0,
            meaning: "Careful. When moving a heavy, valuable object, take extra care, especially when setting it down."
          },
          {
            line: 1,
            meaning: "When you're not overloaded and yo are content with your lot, extraordinary things can happen. Like new growth on an old tree, you can experience the vitality of youth all over again."
          },
          {
            line: 2,
            meaning: "overload. If you refuse to listen to good counsel and go on carrying a burden you are not really able to bear, your collapse is almost inevitable."
          },
          {
            line: 3,
            meaning: "You've got the extra support just when you need it. Don't abuse it, or you'll lose it."
          },
          {
            line: 4,
            meaning: "Have you seen new growth on an old tree? Where there's life, there's always hope."
          },
          {
            line: 5,
            meaning: "You're in over your head. Some things in life are worth your sacrifice. But is this one of them?"
          }
        ]
      },
      {
        number: 29,
        trigrams: [2, 2],
        sequence: [0,1,0,0,1,0],
        name: 'Making Good Your Escape',
        guaMing: '坎',
        says: "You're in a tight spot. By remaining calm and true to your nature, you'll get out of this place.",
        sees: "you in a deep ravine \n but just as water \n remains true to its nature \n finding its own level \n flowing ever onward \n you can still reach your goal",
        suggests: "even when things appear \n to be abysmal \n and you are at your lowest ebb \n keep the faith \n remain true to your principles \n maintain your integrity \n the consistency you show \n when surrounded by danger \n is an inspiration \n to those who follow",
        changing: [
          {
            line: 0,
            meaning: "You've fallen into a pit. Bad luck. YOu are going to need help getting out of it."
          },
          {
            line: 1,
            meaning: "It's a disaster. Until conditions improve, don't try to accomplish too much. Just get through this."
          },
          {
            line: 2,
            meaning: "Hang in there. Whichever way you go will get you into trouble. Do nothing till the dangers have passed and the situation has improved."
          },
          {
            line: 3,
            meaning: "A jug of wine? A bowl of rice? Given the circumstances, it's a veritable feast."
          },
          {
            line: 4,
            meaning: "You're in serious trouble but not in over your head. Not yet, anyway. Get out of there while youre head's still above water."
          },
          {
            line: 5,
            meaning: "You're in a tight spot, all right! Bound and gagged, imprisoned. There's no escape from this situation. All you can do is hang tough and ride the time."
          }
        ]
      },
      {
        number: 30,
        trigrams: [6, 6],
        sequence: [1,0,1,1,0,1],
        name: 'Your Latest Flame',
        guaMing: '離',
        says: "You're on fire. You light up your world with the intensity of your enthusiasm and the clarity of your vision.",
        sees: "you like a roaring fire \n fueled by your passions \n flames of love are dancing \n spreading warmth and light all around",
        suggests: "tress and grass cling to the earth \n sun and moon cling to the sky \n flames cling to the wood \n you cling to the light within \n that enables you to shine \n return to the source again and again \n so you don't burn yourself out \n agreeing to agree \n accepting your position in life \n you are clearly where you are meant to be \n keeping the home fires burning",
        changing: [
          {
            line: 0,
            meaning: "Another new day and the world is kicking into life. Your mind is all over the place. Intent on your purpose, you compose yourself so you can acquire the clarity you need to get the job done."
          },
          {
            line: 1,
            meaning: "Blazing with the light of the midday sun, you radiate feelings of benevolenve and good fortune. The flowering of your creative self-expression is at its height."
          },
          {
            line: 2,
            meaning: "At the end of the day there's a temptation to indulge in drunken revelry or wallow in melancholy. Resist it."
          },
          {
            line: 3,
            meaning: "A fire made of straw will blaze up brilliantly but soon burns itself out. A meteor is a thrilling sight but quickly forgotten."
          },
          {
            line: 4,
            meaning: "Sometimes it's good to cry, to release the flood of tears. Acknowledging your grief, a natural process of healing begins."
          },
          {
            line: 5,
            meaning: "Don't be too hard on yourself, but do try and root out some of your bad habits. If something is seriously wrong, look for the causes of the symptoms. If you can eradicate evil, the good will prevail."
          }
        ]
      },
      {
        number: 31,
        trigrams: [3, 7],
        sequence: [0,0,1,1,1,0],
        name: 'The Woo Factor',
        guaMing: '咸',
        says: "When you want to win people over to your point of view, you don't necessarily need to wow them, but you do have to woo them.",
        sees: "you like a lake on a hill \n a reservoir of received wisdom \n you say: come on in \n the water's fine",
        suggests: "there are people you naturally like \n and naturally they like you \n such affinities work well together \n to increase your sphere of influence \n respect is the foundation \n for any long-lasting relationship \n whether it is with your audience \n your friend or your spouse \n show some respect in the house",
        changing: [
          {
            line: 0,
            meaning: "Your influence is barely felt. It may just be a whim or a passing fancy. Either way, it's no big thing."
          },
          {
            line: 1,
            meaning: "The influence you're under is not coming from your heart. Therefore, it's not in your control. You'd be wise to wait until it is."
          },
          {
            line: 2,
            meaning: "The attraction here is distinctly below the belt. If you follow your desire and not your heart, you're heading for trouble — again. When will you ever learn?"
          },
          {
            line: 3,
            meaning: "If your thoughts are flitting here and there, your influence on people and events is negligible. Focus your mind, listen to your heart, and the cause for remorse will disappear."
          },
          {
            line: 4,
            meaning: "If you overexert your influence, you run the risk of a pain in the neck. Having one and/or being one."
          },
          {
            line: 5,
            meaning: "Empty words persuade no one. When your words are meaningful and backed up by genuine passion, people will be unfluenced by them."
          }
        ]
      },
      {
        number: 32,
        trigrams: [5, 1],
        sequence: [0,1,1,1,0,0],
        name: 'Enduring',
        guaMing: '恆',
        says: "You are self-contained, relying on your inner resources — you stand firm. You abide.",
        sees: "you like a force of nature \n thunder rolling \n high wind blowing \n a reed bending with the breeze \n a flower turning toward the sun \n forever changing yet always the same",
        suggests: "seasons wax and wane \n according to fixed laws \n everything comes and goes \n in its proper time and place \n all around you: change \n there may be a storm outside \n but inwardly you are calm \n the enduring present belongs to you",
        changing: [
          {
            line: 0,
            meaning: "If you want to compress something, you must first let it fully expand. If you want to make something that will last, take your time."
          },
          {
            line: 1,
            meaning: "Through your actions, the remorse you've been feeling disappears. What a relief."
          },
          {
            line: 2,
            meaning: "Don't let the ups and down get to you. Don't lose the inner quality on which you depend. Get back in touch — with yourself."
          },
          {
            line: 3,
            meaning: "No game is afoot. You're looking for love in all the wrong places."
          },
          {
            line: 4,
            meaning: "Whether you uphold tradition or make a break from it depends on your own good judgment. Keep an open mind and adapt to the situation. Be flexible without being too flexible."
          },
          {
            line: 5,
            meaning: "If you're always in a hurry, looking anxiously ahead, constantly changing your mind, no good can come of it. Calm down."
          }
        ]
      },
      {
        number: 33,
        trigrams: [3, 0],
        sequence: [0,0,1,1,1,1],
        name: 'Retreating',
        guaMing: '遯',
        says: "Sometimes a retreat into a place of tranquility is just what the doctor ordered.",
        sees: "you like a distant mountain peak \n keeping the demons at bay \n you are not angry \n you are reserved",
        suggests: "retreat need not be running away \n it can be a sign of strength \n by putting distance between yourself \n and the hostile forces on the attack \n you remain calm and dignified \n because even when retreating \n especially when retreating \n a human being must have dignity",
        changing: [
          {
            line: 0,
            meaning: "The tail end of a retreat is a dangerous place to be. Don't try anything till you're in a safer place."
          },
          {
            line: 1,
            meaning: "You may not be winning this battle, but even when you have to withdraw, you never lose sight of your long-term goal: winning the war."
          },
          {
            line: 2,
            meaning: "When a retreat is blocked or halted, it's a stressful and dangerous time. Keep you people close — the ones you trust."
          },
          {
            line: 3,
            meaning: "Whe it is appropriate, a well-organized retreat can only help you and your case. At the same time, it may well defuse hostile forces."
          },
          {
            line: 4,
            meaning: "Yes, you are withdrawing from the scene, but you can still be friendly."
          },
          {
            line: 5,
            meaning: "No doubt about it — you are free to go. Liberating yourself from a losing battle fills you with good cheer. The clarity you consequently feel reveals the path you must follow."
          }
        ]
      },
      {
        number: 34,
        trigrams: [0, 1],
        sequence: [1,1,1,1,0,0],
        name: 'Coming From a Powerful Place',
        guaMing: '大壯',
        says: "A righteous combination of power and goodness makes you irresistible. Use it, don't abuse it.",
        sees: "you like a quiet storm \n generating excitement \n clearing the air \n inspiring enthusiasm",
        suggests: "you know the feeling \n it's the right time \n the right place \n the right people \n you have got it made \n still you must be careful \n how you proceed \n only going through appropriate channels \n remember where you're coming from \n and you can see where you want to go: \n a place of harmony and goodwill \n where love is the order of the day",
        changing: [
          {
            line: 0,
            meaning: "You may feel the power, but are you really in a position to exercise it? If not, better wait until you are."
          },
          {
            line: 1,
            meaning: "The gates to success are beginning to open. Be excited but not too excited."
          },
          {
            line: 2,
            meaning: "A frustrated goat butts a hedge and its horns become entangled. Careful!"
          },
          {
            line: 3,
            meaning: "The obstacles give way, the gates open — the only question now: Are you ready to make your entrance?"
          },
          {
            line: 4,
            meaning: "The gates to success are open. All you have to do now is walk through them. Release the tensions. Drop the shoulders. Take a deep breath..."
          },
          {
            line: 5,
            meaning: "A goat is butting a hedge and its horns are entangled. It can't go forward and it can't go back. The only way out of this predicament is to stop struggling. Calm down and gently disentangle yourself."
          }
        ]
      },
      {
        number: 35,
        trigrams: [4, 6],
        sequence: [0,0,0,1,0,1],
        name: 'Making Progress',
        guaMing: '晉',
        says: "The clearer you are, the brighter your light can shine.",
        sees: "you like the rising sun \n you are in the ascendancy \n taking your place in the sky \n this is your chance to shine",
        suggests: "the higher the sun rises \n the brighter it becomes \n as you emerge from obscurity \n you shine more and more brightly \n enjoy the recognition \n only remember your role \n as the devoted servant \n to a powerful ruler \n by practicing your craft \n polishing your techniques \n to serve your benefactor \n your progress is assured",
        changing: [
          {
            line: 0,
            meaning: "If others appear to doubt you, remain confident and calm. If they are rude, don't let it get to you. Simply let your light shine."
          },
          {
            line: 1,
            meaning: "Your progress is checked, but only temporarily. In the end, you'll be as happy with the outcome as if your mother had wished it for you."
          },
          {
            line: 2,
            meaning: "The progress you make is the direct result of the support you receive from allies and helpers. This is not to be denied; it is to be acknowledged and celebrated."
          },
          {
            line: 3,
            meaning: "Even if you win the rat race, you'll still be a rat."
          },
          {
            line: 4,
            meaning: "It's all going your way. Don't be too concerned about gains and losses. Youll come out ahead, whatever happens. Enjoy your progress."
          },
          {
            line: 5,
            meaning: "There's no call for aggressive tactics here, unless you are correcting your own mistakes. Being aware of the pitfalls and dangers, and proceeding cautiously, you can certainly achieve your purpose."
          }
        ]
      },
      {
        number: 36,
        trigrams: [6, 4],
        sequence: [1,0,1,0,0,0],
        name: 'Darkness Descending',
        guaMing: '明夷',
        says: "While the forces of darkness surround you, keep a low profile and stay safe at home.",
        sees: "the sun setting on you \n darkness spreading over the earth \n lanterns glowing in your sanctuary \n your little world is full of light",
        suggests: "your talent may not be recognized \n your true worth may not be valued \n you let many things pass \n but you are not fooled \n keep the flame burning \n keep it safe \n the darker it gets out there \n the brighter it looks inside",
        changing: [
          {
            line: 0,
            meaning: "Hard times. You could be really stretched. You might have to go without. People may try to put you down. Don't let them."
          },
          {
            line: 1,
            meaning: "Is it your feelings that are hurt, or are you really wounded? If you can still help others even though you're hurting yourself, do it. What goes around comes around."
          },
          {
            line: 2,
            meaning: "Accidents happen. Sometimes they work to your advantage, but don't let that lull you into a false sense of security. The danger is not over yet."
          },
          {
            line: 3,
            meaning: "You can see the coming storm. So you are able to weather it or, if necessary, get out of its way."
          },
          {
            line: 4,
            meaning: "It's wrong and you know it's wrong, but they've got the upper hand for now. Exposing them is too dangerous. Keep it to yourself."
          },
          {
            line: 5,
            meaning: "Don't despair. The darkness will feed on itself until there is nothing left. The light of a new day will inevitably shine again."
          }
        ]
      },
      {
        number: 37,
        trigrams: [6, 5],
        sequence: [1,0,1,0,1,1],
        name: 'Family Affair',
        guaMing: '家人',
        says: "Thank God for the people who embrace and support you through thick and thin.",
        sees: "you like a blazing fire \n radiating good cheer \n filling the house with warmth \n making it feel like home",
        suggests: "home is where the hearth is \n to keep the fire dancing \n feed the flame \n give it room to breathe \n gather 'round the familiar tree \n with your tribe \n where you know you belong \n partaking of your good food \n drinking your good health \n giving thanks \n for your refuge from the world",
        changing: [
          {
            line: 0,
            meaning: "Domestic harmony depends on order. When you establish clear boundaries from the outset, you can avoid most of the rows. If everything is vague and undefined, look out!"
          },
          {
            line: 1,
            meaning: "Nurture the family and provide healthy nourishment. What's good for them is also good for you."
          },
          {
            line: 2,
            meaning: "Family rows — we all have them. Try not to overreact or be too severe. At the same time, a total lack of discipline will end in tears. Find the happy medium."
          },
          {
            line: 3,
            meaning: "How fortunate is the family where a good partner is happy at home. If you have such a treasure, you will want to protect it."
          },
          {
            line: 4,
            meaning: "There's no need for fear in a family ruled by love."
          },
          {
            line: 5,
            meaning: "Work rules (especially if you work at home). The breadwinners of the family must be given the time and space they need to do their jobs well."
          }
        ]
      },
      {
        number: 38,
        trigrams: [7, 6],
        sequence: [1,1,0,1,0,1],
        name: 'The Strange Attraction of Opposites',
        guaMing: '睽',
        says: "Our differences can be a cause of conflict or the elements of a dance. When opposites unite in harmony, what a joy.",
        sees: "a flame on the lake \n dancing on the surface of the water \n beautiful and strange",
        suggests: "opposing viewpoints \n different ways of seeing \n walking contradictions \n such fascination you hold for some people \n and they have a hold over you \n while it is true opposites attract \n no matter how much you are attracted \n how deeply you get involved \n retain your individuality \n at all costs \n give each other space \n the flame must stay above the water \n or it will be extinguished",
        changing: [
          {
            line: 0,
            meaning: "A change for the better. Instead of chasing the object of your desire, let it come to you."
          },
          {
            line: 1,
            meaning: "Serendipity at work. A cahnce encounter leads to resolution of a misunderstanding."
          },
          {
            line: 2,
            meaning: "All too often it seems as though circumstances and people are conspiring agains you. You're checked, hindered, and insulted. Yes, it's annoying and frustrating, but don't let it get to you. Persist. It will turn out well in the end."
          },
          {
            line: 3,
            meaning: "Feeling isolated? At odds with the world? Out in the cold? At times like these, one good friend can make all the difference. Two good friends — even better!"
          },
          {
            line: 4,
            meaning: "Strange days have found you. When a friend is prepared to put up with all this for your sake, you have a friend indeed."
          },
          {
            line: 5,
            meaning: "No one falls out harder than 'best friends.' We've all been there. In the end, if you can remember the beginning of the friendship, you will want to be reconciled."
          }
        ]
      },
      {
        number: 39,
        trigrams: [3, 2],
        sequence: [0,0,1,0,1,0],
        name: 'Obstruction',
        guaMing: '蹇',
        says: "",
        sees: "",
        suggests: "",
        changing: [
          {
            line: 0,
            meaning: ""
          },
          {
            line: 1,
            meaning: ""
          },
          {
            line: 2,
            meaning: ""
          },
          {
            line: 3,
            meaning: ""
          },
          {
            line: 4,
            meaning: ""
          },
          {
            line: 5,
            meaning: ""
          }
        ]
      },
      {
        number: 40,
        trigrams: [2, 1],
        sequence: [0,1,0,1,0,0],
        name: 'Deliverance',
        guaMing: '解',
        says: "",
        sees: "",
        suggests: "",
        changing: [
          {
            line: 0,
            meaning: ""
          },
          {
            line: 1,
            meaning: ""
          },
          {
            line: 2,
            meaning: ""
          },
          {
            line: 3,
            meaning: ""
          },
          {
            line: 4,
            meaning: ""
          },
          {
            line: 5,
            meaning: ""
          }
        ]
      },
      {
        number: 41,
        trigrams: [7, 3],
        sequence: [1,1,0,0,0,1],
        name: 'Decrease',
        guaMing: '損',
        says: "",
        sees: "",
        suggests: "",
        changing: [
          {
            line: 0,
            meaning: ""
          },
          {
            line: 1,
            meaning: ""
          },
          {
            line: 2,
            meaning: ""
          },
          {
            line: 3,
            meaning: ""
          },
          {
            line: 4,
            meaning: ""
          },
          {
            line: 5,
            meaning: ""
          }
        ]
      },
      {
        number: 42,
        trigrams: [1, 5],
        sequence: [1,0,0,0,1,1],
        name: 'Increase',
        guaMing: '益',
        says: "",
        sees: "",
        suggests: "",
        changing: [
          {
            line: 0,
            meaning: ""
          },
          {
            line: 1,
            meaning: ""
          },
          {
            line: 2,
            meaning: ""
          },
          {
            line: 3,
            meaning: ""
          },
          {
            line: 4,
            meaning: ""
          },
          {
            line: 5,
            meaning: ""
          }
        ]
      },
      {
        number: 43,
        trigrams: [0, 7],
        sequence: [1,1,1,1,1,0],
        name: 'Breakthrough',
        guaMing: '夬',
        says: "",
        sees: "",
        suggests: "",
        changing: [
          {
            line: 0,
            meaning: ""
          },
          {
            line: 1,
            meaning: ""
          },
          {
            line: 2,
            meaning: ""
          },
          {
            line: 3,
            meaning: ""
          },
          {
            line: 4,
            meaning: ""
          },
          {
            line: 5,
            meaning: ""
          }
        ]
      },
      {
        number: 44,
        trigrams: [5, 0],
        sequence: [0,1,1,1,1,1],
        name: 'Coming to Meet',
        guaMing: '姤',
        says: "",
        sees: "",
        suggests: "",
        changing: [
          {
            line: 0,
            meaning: ""
          },
          {
            line: 1,
            meaning: ""
          },
          {
            line: 2,
            meaning: ""
          },
          {
            line: 3,
            meaning: ""
          },
          {
            line: 4,
            meaning: ""
          },
          {
            line: 5,
            meaning: ""
          }
        ]
      },
      {
        number: 45,
        trigrams: [4, 7],
        sequence: [0,0,0,1,1,0],
        name: 'Gathering Together',
        guaMing: '萃',
        says: "",
        sees: "",
        suggests: "",
        changing: [
          {
            line: 0,
            meaning: ""
          },
          {
            line: 1,
            meaning: ""
          },
          {
            line: 2,
            meaning: ""
          },
          {
            line: 3,
            meaning: ""
          },
          {
            line: 4,
            meaning: ""
          },
          {
            line: 5,
            meaning: ""
          }
        ]
      },
      {
        number: 46,
        trigrams: [5, 4],
        sequence: [0,1,1,0,0,0],
        name: 'Pushing Upward',
        guaMing: '升',
        says: "",
        sees: "",
        suggests: "",
        changing: [
          {
            line: 0,
            meaning: ""
          },
          {
            line: 1,
            meaning: ""
          },
          {
            line: 2,
            meaning: ""
          },
          {
            line: 3,
            meaning: ""
          },
          {
            line: 4,
            meaning: ""
          },
          {
            line: 5,
            meaning: ""
          }
        ]
      },
      {
        number: 47,
        trigrams: [2, 7],
        sequence: [0,1,0,1,1,0],
        name: 'Oppression',
        guaMing: '困',
        says: "",
        sees: "",
        suggests: "",
        changing: [
          {
            line: 0,
            meaning: ""
          },
          {
            line: 1,
            meaning: ""
          },
          {
            line: 2,
            meaning: ""
          },
          {
            line: 3,
            meaning: ""
          },
          {
            line: 4,
            meaning: ""
          },
          {
            line: 5,
            meaning: ""
          }
        ]
      },
      {
        number: 48,
        trigrams: [5, 2],
        sequence: [0,1,1,0,1,0],
        name: 'The Well',
        guaMing: '井',
        says: "",
        sees: "",
        suggests: "",
        changing: [
          {
            line: 0,
            meaning: ""
          },
          {
            line: 1,
            meaning: ""
          },
          {
            line: 2,
            meaning: ""
          },
          {
            line: 3,
            meaning: ""
          },
          {
            line: 4,
            meaning: ""
          },
          {
            line: 5,
            meaning: ""
          }
        ]
      },
      {
        number: 49,
        trigrams: [6, 7],
        sequence: [1,0,1,1,1,0],
        name: 'Revolution',
        guaMing: '革',
        says: "",
        sees: "",
        suggests: "",
        changing: [
          {
            line: 0,
            meaning: ""
          },
          {
            line: 1,
            meaning: ""
          },
          {
            line: 2,
            meaning: ""
          },
          {
            line: 3,
            meaning: ""
          },
          {
            line: 4,
            meaning: ""
          },
          {
            line: 5,
            meaning: ""
          }
        ]
      },
      {
        number: 50,
        trigrams: [5, 6],
        sequence: [0,1,1,1,0,1],
        name: 'The Cauldron',
        guaMing: '鼎',
        says: "",
        sees: "",
        suggests: "",
        changing: [
          {
            line: 0,
            meaning: ""
          },
          {
            line: 1,
            meaning: ""
          },
          {
            line: 2,
            meaning: ""
          },
          {
            line: 3,
            meaning: ""
          },
          {
            line: 4,
            meaning: ""
          },
          {
            line: 5,
            meaning: ""
          }
        ]
      },
      {
        number: 51,
        trigrams: [1, 1],
        sequence: [1,0,0,1,0,0],
        name: 'Arousing Thunder',
        guaMing: '震',
        says: "",
        sees: "",
        suggests: "",
        changing: [
          {
            line: 0,
            meaning: ""
          },
          {
            line: 1,
            meaning: ""
          },
          {
            line: 2,
            meaning: ""
          },
          {
            line: 3,
            meaning: ""
          },
          {
            line: 4,
            meaning: ""
          },
          {
            line: 5,
            meaning: ""
          }
        ]
      },
      {
        number: 52,
        trigrams: [3, 3],
        sequence: [0,0,1,0,0,1],
        name: 'Keeping Still Mountain',
        guaMing: '艮',
        says: "",
        sees: "",
        suggests: "",
        changing: [
          {
            line: 0,
            meaning: ""
          },
          {
            line: 1,
            meaning: ""
          },
          {
            line: 2,
            meaning: ""
          },
          {
            line: 3,
            meaning: ""
          },
          {
            line: 4,
            meaning: ""
          },
          {
            line: 5,
            meaning: ""
          }
        ]
      },
      {
        number: 53,
        trigrams: [3, 5],
        sequence: [0,0,1,0,1,1],
        name: 'Development',
        guaMing: '漸',
        says: "",
        sees: "",
        suggests: "",
        changing: [
          {
            line: 0,
            meaning: ""
          },
          {
            line: 1,
            meaning: ""
          },
          {
            line: 2,
            meaning: ""
          },
          {
            line: 3,
            meaning: ""
          },
          {
            line: 4,
            meaning: ""
          },
          {
            line: 5,
            meaning: ""
          }
        ]
      },
      {
        number: 54,
        trigrams: [7, 1],
        sequence: [1,1,0,1,0,0],
        name: 'Marrying Maiden',
        guaMing: '歸妹',
        says: "",
        sees: "",
        suggests: "",
        changing: [
          {
            line: 0,
            meaning: ""
          },
          {
            line: 1,
            meaning: ""
          },
          {
            line: 2,
            meaning: ""
          },
          {
            line: 3,
            meaning: ""
          },
          {
            line: 4,
            meaning: ""
          },
          {
            line: 5,
            meaning: ""
          }
        ]
      },
      {
        number: 55,
        trigrams: [6, 1],
        sequence: [1,0,1,1,0,0],
        name: 'Abundance',
        guaMing: '豐',
        says: "",
        sees: "",
        suggests: "",
        changing: [
          {
            line: 0,
            meaning: ""
          },
          {
            line: 1,
            meaning: ""
          },
          {
            line: 2,
            meaning: ""
          },
          {
            line: 3,
            meaning: ""
          },
          {
            line: 4,
            meaning: ""
          },
          {
            line: 5,
            meaning: ""
          }
        ]
      },
      {
        number: 56,
        trigrams: [3, 6],
        sequence: [0,0,1,1,0,1],
        name: 'The Wanderer',
        guaMing: '旅',
        says: "",
        sees: "",
        suggests: "",
        changing: [
          {
            line: 0,
            meaning: ""
          },
          {
            line: 1,
            meaning: ""
          },
          {
            line: 2,
            meaning: ""
          },
          {
            line: 3,
            meaning: ""
          },
          {
            line: 4,
            meaning: ""
          },
          {
            line: 5,
            meaning: ""
          }
        ]
      },
      {
        number: 57,
        trigrams: [5, 5],
        sequence: [0,1,1,0,1,1],
        name: 'The Gentle Wind',
        guaMing: '巽',
        says: "",
        sees: "",
        suggests: "",
        changing: [
          {
            line: 0,
            meaning: ""
          },
          {
            line: 1,
            meaning: ""
          },
          {
            line: 2,
            meaning: ""
          },
          {
            line: 3,
            meaning: ""
          },
          {
            line: 4,
            meaning: ""
          },
          {
            line: 5,
            meaning: ""
          }
        ]
      },
      {
        number: 58,
        trigrams: [7, 7],
        sequence: [1,1,0,1,1,0],
        name: 'The Joyous Lake',
        guaMing: '兌',
        says: "",
        sees: "",
        suggests: "",
        changing: [
          {
            line: 0,
            meaning: ""
          },
          {
            line: 1,
            meaning: ""
          },
          {
            line: 2,
            meaning: ""
          },
          {
            line: 3,
            meaning: ""
          },
          {
            line: 4,
            meaning: ""
          },
          {
            line: 5,
            meaning: ""
          }
        ]
      },
      {
        number: 59,
        trigrams: [2, 5],
        sequence: [0,1,0,0,1,1],
        name: 'Dispersion',
        guaMing: '渙',
        says: "",
        sees: "",
        suggests: "",
        changing: [
          {
            line: 0,
            meaning: ""
          },
          {
            line: 1,
            meaning: ""
          },
          {
            line: 2,
            meaning: ""
          },
          {
            line: 3,
            meaning: ""
          },
          {
            line: 4,
            meaning: ""
          },
          {
            line: 5,
            meaning: ""
          }
        ]
      },
      {
        number: 60,
        trigrams: [7, 2],
        sequence: [1,1,0,0,1,0],
        name: 'Limitation',
        guaMing: '節',
        says: "",
        sees: "",
        suggests: "",
        changing: [
          {
            line: 0,
            meaning: ""
          },
          {
            line: 1,
            meaning: ""
          },
          {
            line: 2,
            meaning: ""
          },
          {
            line: 3,
            meaning: ""
          },
          {
            line: 4,
            meaning: ""
          },
          {
            line: 5,
            meaning: ""
          }
        ]
      },
      {
        number: 61,
        trigrams: [7, 5],
        sequence: [1,1,0,0,1,1],
        name: 'Inner Truth',
        guaMing: '中孚',
        says: "",
        sees: "",
        suggests: "",
        changing: [
          {
            line: 0,
            meaning: ""
          },
          {
            line: 1,
            meaning: ""
          },
          {
            line: 2,
            meaning: ""
          },
          {
            line: 3,
            meaning: ""
          },
          {
            line: 4,
            meaning: ""
          },
          {
            line: 5,
            meaning: ""
          }
        ]
      },
      {
        number: 62,
        trigrams: [3, 1],
        sequence: [0,0,1,1,0,0],
        name: 'Small Preponderance',
        guaMing: '小過',
        says: "",
        sees: "",
        suggests: "",
        changing: [
          {
            line: 0,
            meaning: ""
          },
          {
            line: 1,
            meaning: ""
          },
          {
            line: 2,
            meaning: ""
          },
          {
            line: 3,
            meaning: ""
          },
          {
            line: 4,
            meaning: ""
          },
          {
            line: 5,
            meaning: ""
          }
        ]
      },
      {
        number: 63,
        trigrams: [6, 2],
        sequence: [1,0,1,0,1,0],
        name: 'After Completion',
        guaMing: '既濟',
        says: "",
        sees: "",
        suggests: "",
        changing: [
          {
            line: 0,
            meaning: ""
          },
          {
            line: 1,
            meaning: ""
          },
          {
            line: 2,
            meaning: ""
          },
          {
            line: 3,
            meaning: ""
          },
          {
            line: 4,
            meaning: ""
          },
          {
            line: 5,
            meaning: ""
          }
        ]
      },
      {
        number: 64,
        trigrams: [2, 6],
        sequence: [0,1,0,1,0,1],
        name: 'Before Completion',
        guaMing: '未濟',
        says: "",
        sees: "",
        suggests: "",
        changing: [
          {
            line: 0,
            meaning: ""
          },
          {
            line: 1,
            meaning: ""
          },
          {
            line: 2,
            meaning: ""
          },
          {
            line: 3,
            meaning: ""
          },
          {
            line: 4,
            meaning: ""
          },
          {
            line: 5,
            meaning: ""
          }
        ]
      }
    ];

    service.lookupTable = [
      [1,  34, 5,  26, 11, 9,  14, 43],
      [25, 51, 3,  27, 24, 42, 21, 17],
      [6,  40, 29, 4,  7,  59, 64, 47],
      [33, 62, 39, 52, 15, 53, 56, 31],
      [12, 16, 8,  23, 2,  20, 35, 45],
      [44, 32, 48, 18, 46, 57, 50, 28],
      [13, 55, 63, 22, 36, 37, 30, 49],
      [10, 54, 60, 41, 19, 61, 38, 58]
    ];

    ////////
    // CONSULT
    // TODO: Grab all service items from server
    ////////

    service.consult = function(hexagram){
      var deferred = $q.defer();
      deferred.resolve(hexagram);
      return deferred.promise;
    };

    return service;
  }

  function ChangingHexagram(){
    var ChangingHexagram = function(){
      this.lines = [];
      this.trigrams = [];
      this.sequence = [];
      this.isComplete = false;
      this.addLine = function(){
        var line = {value: 1, coins: new Array(3), coinSum: 0, changing: false};
        for(var i = 0; i < line.coins.length; i++){
          // Heads: 3, Tails: 2
          line.coins[i] = _.random(2, 3);
          line.coinSum += line.coins[i];
        }
        line.changing = line.coinSum > 8 || line.coinSum < 7;
        line.value = line.coinSum % 2 !== 0 ? 1 : 0;
        this.lines.push(line);
        this.sequence.push(line.value);
      };
      this.stalks = 49;
      this.thrice = [];
      this.addYarrowLine = function(){
        // Set one of 50 yarrow stalks aside:
        // the Wu Chi ("the unchanging ground of being").
        var stalks = 49;
        var thrice = [];

        function divide() {
          // Inexact division is the source of diversity.
          // Based on a small sample of trials,
          // the range of accurate division of 49 stalks
          // to their hypothetical midpoint, 24.5,
          // is ±1.8 (really, 1.8)
          var rangeOfError = _.random(-2.5, 2.5);
          // First, divide stalks roughly into two piles,
          // then take 1 stalk from RH, reserve it.
          var LH = Math.round((Math.floor(stalks + Math.round(Math.random())) / 2) + rangeOfError) - 1;
          // Reserved stalk accounted for; still reserved.
          var RH = stalks - LH - 1;
          var RHmod4 = RH % 4 == 0 ? 4 : RH % 4;
          var LHmod4 = LH % 4 == 0 ? 4 : LH % 4;
          var count = RHmod4 + LHmod4 + 1;
          thrice.push(count);
          // Set aside the "count" and adjust
          // the number of remaining stalks.
          stalks = stalks - count;
        }
        // Repeat process three times, each time
        // using the remaining stalks.
        for (var i = 0; i < 3; i++) {
          divide();
        }
        var line = {value: 1, changing: false};
        switch (_.sum(thrice)) {
          case 13:
            // Changing yang: solid becomes broken
            //line.value = 1;
            line.changing = true;
            break;
          case 17:
            // Yin: broken
            line.value = 0;
            break;
          //case 21:
          //  Yang: solid
          //  line.value = 1;
          //  break;
          case 25:
            // Changing yin: broken becomes solid
            line.value = 0;
            line.changing = true;
            break;
        }
        this.lines.push(line);
        this.sequence.push(line.value);
      }
    };
    return ChangingHexagram;
  }

  function Hexagram(figures){
    var Hexagram = function(id, changingLines){
      this.id = _.parseInt(id);
      changingLines = JSON.parse("[" + changingLines + "]");
      var self = this;
      var lines = [];
      var trigrams = [];
      this.props = _.find(figures.hexagrams, function(h){
        return h.number === self.id;
      });
      // Reconstruct Line objects
      for(var i = 0; i < this.props.sequence.length; i++){
        lines.push({ value: this.props.sequence[i], changing: changingLines[i] });
      }
      this.lines = lines;
      // Get trigram objects
      _.each(this.props.trigrams, function(trigram){
        trigram = _.find(figures.trigrams, function(t){
          return t.order === trigram;
        });
        trigrams.push(trigram);
      });
      this.trigrams = trigrams;
    };
    return Hexagram;
  }
})();
