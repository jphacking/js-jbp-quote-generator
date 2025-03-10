const localQuotes = [
  {
    text: "Compare yourself to who you were yesterday, not to who someone else is today.",
    author: "Dr. Jordan Peterson",
  },
  {
    text: "If you aren't moving forward in your life there is some idea, mode of action, or habit you're so in love with you won't let go of it.",
    author: "Dr. Jordan Peterson",
  },
  {
    text: "The better ambitions have to do with the development of character and ability, rather than status and power. Status you can lose. You carry character with you wherever you go, and it allows you to prevail against adversity.",
    author: "Dr. Jordan Peterson",
  },
  {
    text: "You're not everything you could be, and you know it.",
    author: "Dr. Jordan Peterson",
  },
  {
    text: "Self-love is the only antidote to the chaos of existence. And if you don't love and care for yourself and your own needs, you will cause unnecessary suffering both for yourself and others.",
    author: "Dr. Jordan Peterson",
  },
  {
    text: "Perhaps you are overvaluing what you don't have and undervaluing what you do.",
    author: "Dr. Jordan Peterson",
  },
  {
    text: "You must determine where you are going in your life, because you cannot get there unless you move in that direction. Random wandering will not move you forward. It will instead disappoint and frustrate you and make you anxious and unhappy and hard to get along with (and then resentful, and then vengeful, and then worse).",
    author: "Dr. Jordan Peterson",
  },
  {
    text: "Pursue what is meaningful (not what is expedient).",
    author: "Dr. Jordan Peterson",
  },
  {
    text: "You should be better than you are, but it's not because you're worse than other people. It's because you're not everything you should be.",
    author: "Dr. Jordan Peterson",
  },
  {
    text: "To learn is to die voluntarily and be born again, in great ways and small.",
    author: "Dr. Jordan Peterson",
  },
  { text: "Don't be a slave to stupid rules.", author: "Dr. Jordan Peterson" },
  {
    text: "When you are visited by chaos and swallowed up; when nature curses you or someone you love with illness; or when tyranny rends asunder something of value that you have built, it is salutary to know the rest of the story. All of that misfortune is only the bitter half of the tale of existence, without taking note of the heroic element of redemption or the nobility of the human spirit requiring a certain responsibility to shoulder. We ignore that addition to the story at our peril, because life is so difficult that losing sight of the heroic part of existence could cost us everything.",
    author: "Dr. Jordan Peterson",
  },
  {
    text: "Don't underestimate the power of vision and direction. These are irresistible forces, able to transform what might appear to be unconquerable obstacles into traversable pathways and expanding opportunities. Strengthen the individual. Start with yourself. Take care with yourself. Define who you are. Refine your personality. Choose your destination and articulate your Being. As the great nineteenth-century German philosopher Friedrich Nietzsche so brilliantly noted, ‘He whose life has a why can bear almost any how.'",
    author: "Dr. Jordan Peterson",
  },
  {
    text: "Face the demands of life voluntarily. Respond to a challenge, instead of bracing for catastrophe.",
    author: "Dr. Jordan Peterson",
  },
  {
    text: "You can do an awful lot by writing down what happened to you and thinking it through.",
    author: "Dr. Jordan Peterson",
  },
  {
    text: "If you don't stand your ground, then all that happens is people push you backwards. And they will push you, and push you, and push you, until you fall off a cliff.",
    author: "Dr. Jordan Peterson",
  },
  {
    text: "If you fulfill your obligations every day you don't need to worry about the future.",
    author: "Dr. Jordan Peterson",
  },
  {
    text: "Truth, virtue, and courage are not necessarily enough, but they are our best bet.",
    author: "Dr. Jordan Peterson",
  },
  {
    text: "So, listen, to yourself and to those with whom you are speaking. Your wisdom then consists not of the knowledge you already have, but the continual search for knowledge, which is the highest form of wisdom.",
    author: "Dr. Jordan Peterson",
  },
  {
    text: "You need to consider the future and think, ‘What might my life look like if I were caring for myself properly?'",
    author: "Dr. Jordan Peterson",
  },
  {
    text: "To stand up straight with your shoulders back is to accept the terrible responsibility of life, with eyes wide open. It means deciding to voluntarily transform the chaos of potential into the realities of habitable order. It means adopting the burden of self-conscious vulnerability, and accepting the end of the unconscious paradise of childhood, where finitude and mortality are only dimly comprehended. It means willingly undertaking the sacrifices necessary to generate a productive and meaningful reality (it means acting to please God, in the ancient language).",
    author: "Dr. Jordan Peterson",
  },
  {
    text: "The successful among us delay gratification and bargain with the future.",
    author: "Dr. Jordan Peterson",
  },
  {
    text: "You cannot be protected from the things that frighten you and hurt you, but if you identify with the part of your being that is responsible for transformation, then you are always the equal, or more than the equal of the things that frighten you.",
    author: "Dr. Jordan Peterson",
  },
  {
    text: "It took untold generations to get you where you are. A little gratitude might be in order. If you're going to insist on bending the world to your way, you better have your reasons.",
    author: "Dr. Jordan Peterson",
  },
  {
    text: "Can you imagine yourself in 10 years if instead of avoiding the things you know you should do, you actually did them every single day—that's powerful.",
    author: "Dr. Jordan Peterson",
  },
  {
    text: "The light that you discover in your life is proportionate to the amount of the darkness you are willing to forthrightly confront.",
    author: "Dr. Jordan Peterson",
  },
  {
    text: "The way that you make people resilient is by voluntarily exposing them to things that they are afraid of and that makes them uncomfortable.",
    author: "Dr. Jordan Peterson",
  },
  {
    text: "It is much better to make friends with what you do not know than with what you do know, as there is an infinite supply of the former but a finite stock of the latter.",
    author: "Dr. Jordan Peterson",
  },
  {
    text: "When you have something to say, silence is a lie.",
    author: "Dr. Jordan Peterson",
  },
  {
    text: "Once someone has spent enough time cultivating bad habits and biding their time, they are much diminished. Much of what they could have been has dissipated.",
    author: "Dr. Jordan Peterson",
  },
  {
    text: "And if you think tough men are dangerous, wait until you see what weak men are capable of.",
    author: "Dr. Jordan Peterson",
  },
  {
    text: "Adopt responsibility for your own well-being, try to put your family together, try to serve your community, try to seek for eternal truth. That's the sort of thing that can ground you in your life, enough so that you can withstand the difficulty of life.",
    author: "Dr. Jordan Peterson",
  },
  {
    text: "The secret to your existence is right in front of you. And it manifests itself as all those things you know you should do but you're avoiding.",
    author: "Dr. Jordan Peterson",
  },
  { text: "Truth is the handmaiden of love.", author: "Dr. Jordan Peterson" },
  {
    text: "If your life is not what it could be, try telling the truth. If you cling desperately to an ideology or wallow in nihilism, try telling the truth. If you feel weak and rejected, and desperate, and confused, try telling the truth. In Paradise, everyone speaks the truth. That is what makes it Paradise. Tell the truth. Or, at least, don't lie.",
    author: "Dr. Jordan Peterson",
  },
  {
    text: "It's better to do something badly than to not do it at all.",
    author: "Dr. Jordan Peterson",
  },
  {
    text: "Always place your becoming above your current being.",
    author: "Dr. Jordan Peterson",
  },
  {
    text: "It's in responsibility that most people find the meaning that sustains them through life. It's not in happiness. It's not in impulsive pleasure.",
    author: "Dr. Jordan Peterson",
  },
  {
    text: "You should be careful, therefore, to live your life fully, and marriage and children and grandchildren, and all the trouble and heartbreak that accompanies all of that, is much of what life has to offer. Miss it at your great peril.",
    author: "Dr. Jordan Peterson",
  },
  {
    text: "The truth is something that burns, it burns off deadwood and people don't like having their deadwood burnt off often because they're 95 percent deadwood.",
    author: "Dr. Jordan Peterson",
  },
  {
    text: "If you can't understand why someone is doing something, look at the consequences of their actions, and then infer the motivations from their consequences.",
    author: "Dr. Jordan Peterson",
  },
  {
    text: "I believe that the good that people do, small though it may appear, has more to do with the good that manifests broadly in the world than people think, and I believe the same about evil. We are each more responsible for the state of the world than we believe, or would feel comfortable believing.",
    author: "Dr. Jordan Peterson",
  },
  {
    text: "Love is the desire to see unnecessary suffering ameliorated.",
    author: "Dr. Jordan Peterson",
  },
  {
    text: "You can only find out what you actually believe (rather than what you think you believe) by watching how you act. You simply don't know what you believe, before that. You are too complex to understand yourself.",
    author: "Dr. Jordan Peterson",
  },
  {
    text: "You should take care of, help, and be good to yourself the same way you would take care of, help, and be good to someone you loved and valued.",
    author: "Dr. Jordan Peterson",
  },
  {
    text: "Work as hard as you possibly can on at least one thing and see what happens.",
    author: "Dr. Jordan Peterson",
  },
  {
    text: "If you're going to be successful you need to be smart, conscientious, and tough.",
    author: "Dr. Jordan Peterson",
  },
  {
    text: "The purpose of life is finding the largest burden that you can bear and bearing it.",
    author: "Dr. Jordan Peterson",
  },
  {
    text: "Notice that opportunity lurks where responsibility has been abdicated.",
    author: "Dr. Jordan Peterson",
  },
  {
    text: "Ideologies are substitutes for true knowledge, and ideologues are always dangerous when they come to power, because a simple-minded I-know-it-all approach is no match for the complexity of existence.",
    author: "Dr. Jordan Peterson",
  },
  {
    text: "To suffer terribly and to know yourself as the cause: that is Hell.",
    author: "Dr. Jordan Peterson",
  },
  {
    text: "If you are not willing to be a fool, you can't become a master.",
    author: "Dr. Jordan Peterson",
  },
  {
    text: "In order to be able to think, you have to risk being offensive.",
    author: "Dr. Jordan Peterson",
  },
  {
    text: "If you cannot bring peace to your own household, how dare you try and rule a city?",
    author: "Dr. Jordan Peterson",
  },
  {
    text: "I don't tell people, ‘You're okay the way that you are.' That's not the right story. The right story is, ‘You're way less than you could be.'",
    author: "Dr. Jordan Peterson",
  },
  {
    text: "No one gets away with anything, ever, so take responsibility for your own life.",
    author: "Dr. Jordan Peterson",
  },
  {
    text: "Don't lie about anything, ever. Lying leads to Hell.",
    author: "Dr. Jordan Peterson",
  },
  {
    text: "Free speech is not just another value. It's the foundation of Western civilization.",
    author: "Dr. Jordan Peterson",
  },
  { text: "Power is competence.", author: "Dr. Jordan Peterson" },
  {
    text: "The idea that women were oppressed throughout history is an appalling theory.",
    author: "Dr. Jordan Peterson",
  },
  { text: "Abortion is clearly wrong.", author: "Dr. Jordan Peterson" },
  {
    text: "Men and women aren't the same. And they won't be the same. That doesn't mean they can't be treated fairly.",
    author: "Dr. Jordan Peterson",
  },
  {
    text: "We're so immaturely cynical as a culture. We're not wise enough to look at an institution like marriage and to really think about what it means and what it signifies. It signifies a place where people can tie the ropes of their lives together so that they're stronger. It signifies a place where people can tell the truth to one another.",
    author: "Dr. Jordan Peterson",
  },
  {
    text: "All things considered, there's nobody better for children than parents.",
    author: "Dr. Jordan Peterson",
  },
  {
    text: "Life is very difficult. One of the most ancient of religious ideas is that life is essentially suffering.",
    author: "Dr. Jordan Peterson",
  },
  {
    text: "You should do what other people do, unless you have a very good reason not to.",
    author: "Dr. Jordan Peterson",
  },
  {
    text: "The masculine spirit is under assault. It's obvious.",
    author: "Dr. Jordan Peterson",
  },
  {
    text: "It's very difficult to regulate yourself, and if you learn to do that, it starts to spill over.",
    author: "Dr. Jordan Peterson",
  },
  {
    text: "I've 20,000 hours of clinical practice; you're not naive after the first few thousand. I've helped people deal with things most people can't imagine.",
    author: "Dr. Jordan Peterson",
  },
  {
    text: "People have been fed this diet of pabulum, rights, and impulsive freedom. There's just an absolute starvation for the other side of the story.",
    author: "Dr. Jordan Peterson",
  },
  {
    text: `Obviously, I'm no fan of the radical left.`,
    author: "Dr. Jordan Peterson",
  },
  {
    text: "Become aware of your own insufficiency.",
    author: "Dr. Jordan Peterson",
  },
  {
    text: "One of the things I've told men over and over is if you're being rejected by all the women that you approach, it's not the women!",
    author: "Dr. Jordan Peterson",
  },
  {
    text: "If you're talking to a man who wouldn't fight with you under any circumstances, then you're talking to someone for whom you have absolutely no respect.",
    author: "Dr. Jordan Peterson",
  },
  {
    text: "The narrow bandwidth of TV has made us think that we are stupider than we are.",
    author: "Dr. Jordan Peterson",
  },
  {
    text: "I happen to be a big fan of Western civilization; I think it beats the hell out of tyranny and starvation.",
    author: "Dr. Jordan Peterson",
  },
  {
    text: "I am not going to be a mouthpiece for language that I detest.",
    author: "Dr. Jordan Peterson",
  },
  {
    text: "It's not proper for the government to intrude too thoroughly into the domain of the family. It's inappropriate.",
    author: "Dr. Jordan Peterson",
  },
  {
    text: "The multiplication force of technology on cognitive differences is massive.",
    author: "Dr. Jordan Peterson",
  },
  {
    text: "The connection between psychology, mythology, and literature is as important as the connection between psychology and biology and the hard sciences.",
    author: "Dr. Jordan Peterson",
  },
  {
    text: "It's a small percentage of people who do the 80-hour-a-week high-powered career thing, and they're almost all men. Why? Well, men are driven by socio-economic status more than women.",
    author: "Dr. Jordan Peterson",
  },
  {
    text: "In the West, we have been withdrawing from our tradition-, religion-, and even nation-centered cultures.",
    author: "Dr. Jordan Peterson",
  },
  {
    text: "Some of these Ivy League kids want to have it both ways. They want to be baby members of the 1 percent, and yet still portray themselves as the oppressed.",
    author: "Dr. Jordan Peterson",
  },
  {
    text: "To me, ideology is corrupt; it's a parasite on religious structures. To be an ideologue is to have all of the terrible things that are associated with religious certainty and none of the utility. If you're an ideologue, you believe everything that you think. If you're religious, there's a mystery left there.",
    author: "Dr. Jordan Peterson",
  },
  {
    text: "A properly balanced story provides an equal representation of the negative and positive attributes of being. There's a dark and a light in every bit of that narrative.",
    author: "Dr. Jordan Peterson",
  },
  {
    text: "I have a hard time figuring out what kind of box to put me in, too, because I don't know exactly what's going on around me or why. But I need to stay outside of boxes because then I can look at what's inside of them without being part of them.",
    author: "Dr. Jordan Peterson",
  },
  {
    text: "I'm interested in what motivates individuals to participate in atrocious acts to support their ideological identification.",
    author: "Dr. Jordan Peterson",
  },
  {
    text: "The people who hold that our culture is an oppressive patriarchy don't want to admit that the current hierarchy might be predicated on competence.",
    author: "Dr. Jordan Peterson",
  },
  {
    text: "It's very hard to find your own words, and you don't actually exist until you have your own words.",
    author: "Dr. Jordan Peterson",
  },
  {
    text: "The answer to the problem of inequality is for the people who have been gifted or deserved more to do everything they can to make the communities around them as strong as possible.",
    author: "Dr. Jordan Peterson",
  },
  { text: "Everything isn't political.", author: "Dr. Jordan Peterson" },
  {
    text: "Whether or not I like a piece of data has very little bearing on whether or not I am likely to accept it.",
    author: "Dr. Jordan Peterson",
  },
  {
    text: "Assuming there's such a thing as reality, if you have a false relationship with it, how can you do anything but fail?",
    author: "Dr. Jordan Peterson",
  },
  {
    text: "I suppose for a very long time I've been trying to understand how it is that people might make sense out of their lives and make their lives meaningful in the face of the trouble that life brings.",
    author: "Dr. Jordan Peterson",
  },
  {
    text: "Treat yourself like you would someone you're responsible for helping.",
    author: "Dr. Jordan Peterson",
  },
  {
    text: "Set your house in perfect order before you criticize the world.",
    author: "Dr. Jordan Peterson",
  },
  {
    text: "Pet a cat when you encounter one on the street.",
    author: "Dr. Jordan Peterson",
  },
  {
    text: "Assume that the person you are listening to might know something you don't.",
    author: "Dr. Jordan Peterson",
  },
  {
    text: "Tell the truth - or, at least, don't lie.",
    author: "Dr. Jordan Peterson",
  },
  { text: "Be precise in your speech.", author: "Dr. Jordan Peterson" },
  {
    text: "Do not bother children when they are skateboarding.",
    author: "Dr. Jordan Peterson",
  },
  {
    text: "Make friends with people who want the best for you.",
    author: "Dr. Jordan Peterson",
  },
  {
    text: "Do not let your children do anything that makes you dislike them.",
    author: "Dr. Jordan Peterson",
  },
  {
    text: "You're going to pay a price for every bloody thing you do and everything you don't do. You don't get to choose to not pay a price. You get to choose which poison you're going to take. That's it.",
    author: "Dr. Jordan Peterson",
  },
  {
    text: "Stop saying those things that make you weak and ashamed. Say only those things that make you strong. Do only those things that you could speak of with honor.",
    author: "Dr. Jordan Peterson",
  },
  {
    text: "When you have something to say, silence is a lie - and tyranny feeds on lies.",
    author: "Dr. Jordan Peterson",
  },
  {
    text: "What you aim at determines what you see.",
    author: "Dr. Jordan Peterson",
  },
  {
    text: "The more you open yourself up to the possibility that good things will happen, the higher the probability is that good things will in fact happen.",
    author: "Dr. Jordan Peterson",
  },
  {
    text: "He whose life has a why can bear almost any how.",
    author: "Dr. Jordan Peterson",
  },
  {
    text: "People think they think, but it's not true. It's mostly self-criticism that passes for thinking.",
    author: "Dr. Jordan Peterson",
  },
  {
    text: "True thinking is rare - just like true listening. Thinking is listening to yourself. To think, you have to be at least two people at the same time.",
    author: "Dr. Jordan Peterson",
  },
  {
    text: "Attend to the day, but aim at the highest good.",
    author: "Dr. Jordan Peterson",
  },
  {
    text: "You are, on the one hand, the most complex thing in the entire universe, and on the other, someone who can't even set the clock on your microwave. Don't overestimate your self-knowledge.",
    author: "Dr. Jordan Peterson",
  },
  {
    text: "We are not happy, technically speaking, unless we see ourselves progressing - and the very idea of progression implies value.",
    author: "Dr. Jordan Peterson",
  },
  {
    text: "People organize their brains with conversation. If they don't have anyone to tell their story to, they lose their minds - like hoarders who cannot unclutter themselves.",
    author: "Dr. Jordan Peterson",
  },
  {
    text: "Success makes us complacent. We take what we have for granted, fail to notice that things are changing, and then everything falls apart.",
    author: "Dr. Jordan Peterson",
  },
  {
    text: "It is the primary duty of parents to make their children socially desirable. That will provide the child with opportunity, self-regard, and security.",
    author: "Dr. Jordan Peterson",
  },
  {
    text: "Violence, after all, is no mystery. It's peace that's the mystery. Violence is the default.",
    author: "Dr. Jordan Peterson",
  },
  {
    text: "Right-wingers don't want to admit that for some people, there are no jobs; they think that conscientiousness alone will do the trick.",
    author: "Dr. Jordan Peterson",
  },
  {
    text: "Don't underestimate the hole your absence would leave in the world.",
    author: "Dr. Jordan Peterson",
  },
  {
    text: "Order is not enough. You can't just be stable and secure and unchanging, because there are still vital and important new things to be learned.",
    author: "Dr. Jordan Peterson",
  },
  {
    text: "There's real utility in gratitude. It's also good protection against the dangers of victimhood and resentment.",
    author: "Dr. Jordan Peterson",
  },
  {
    text: "Perhaps happiness is to be found in the uphill journey, and not in the fleeting sense of satisfaction awaiting at the next peak. Much of happiness is hope.",
    author: "Dr. Jordan Peterson",
  },
  {
    text: "Every bit of learning is a little death. Every bit of new information challenges a previous conception, forcing it to dissolve into chaos before it can be reborn as something better.",
    author: "Dr. Jordan Peterson",
  },
  {
    text: "Beauty shames the ugly. Strength shames the weak. Death shames the living - and the ideal shames us all.",
    author: "Dr. Jordan Peterson",
  },
  {
    text: "It is not virtuous to be victimized by a bully, even if that bully is yourself.",
    author: "Dr. Jordan Peterson",
  },
  {
    text: "Aim to be the person at your father's funeral that everyone, in their grief and misery, can rely on. There's a worthy and noble ambition: strength in the face of adversity.",
    author: "Dr. Jordan Peterson",
  },
  {
    text: "A harmless man is not a good man. A good man is a very, very dangerous man who has that under voluntary control.",
    author: "Dr. Jordan Peterson",
  },
  { text: "Clean up your room.", author: "Dr. Jordan Peterson" },
  {
    text: "If you can't even clean up your own room, who the hell are you to give advice to the world?",
    author: "Dr. Jordan Peterson",
  },
  {
    text: "Never sacrifice what you could be for what you are, and never give up the better that resides within for the security you already have.",
    author: "Dr. Jordan Peterson",
  },
  {
    text: "Find a mode of being that is so meaningful that the fact that life is suffering is no longer relevant.",
    author: "Dr. Jordan Peterson",
  },
  {
    text: "If you tell the truth, you will have an adventure.",
    author: "Dr. Jordan Peterson",
  },
  {
    text: "Speech is what transforms the chaos of potential into habitable order.",
    author: "Dr. Jordan Peterson",
  },
  {
    text: "I made my own rules - and so can you. I've been as happy as I can be ever since.",
    author: "Dr. Jordan Peterson",
  },
  {
    text: "Expose yourself voluntarily to the things you are avoiding and are afraid of, because you know you need to overcome them to meet your goals.",
    author: "Dr. Jordan Peterson",
  },
  {
    text: "People are afraid to do what they really love, because as soon as you do, you expose your nakedness. You reveal what you're really like.",
    author: "Dr. Jordan Peterson",
  },
  {
    text: "If you're too afraid to break the rules, that doesn't make you good.",
    author: "Dr. Jordan Peterson",
  },
  {
    text: "In some places, people are becoming completely afraid to say what they think. It's shocking that police are prosecuting people for offensiveness.",
    author: "Dr. Jordan Peterson",
  },
  {
    text: "What inevitably happens is not that people get less afraid, but that they become braver and more competent.",
    author: "Dr. Jordan Peterson",
  },
  {
    text: "When you take responsibility for your words, you take on responsibility for moving the world closer to heaven or to hell.",
    author: "Dr. Jordan Peterson",
  },
  {
    text: "Take voluntary responsibility for the appalling condition of your life and for the shape of your destiny. Accept that you are a suffering, mortal creature and that you have an evil side.",
    author: "Dr. Jordan Peterson",
  },
  {
    text: "Life is about responsibility, and it's your responsibility to accept that and do what you can about it—even though it's an enterprise doomed to failure, because you will die and the world is full of carnage.",
    author: "Dr. Jordan Peterson",
  },
  {
    text: "Take on as much responsibility as you can to offset the tragedy of life. You need a noble goal—something that ennobles you.",
    author: "Dr. Jordan Peterson",
  },
  {
    text: "Adopt responsibility for your own well-being in the highest possible sense—for the well-being of your family and the stability and integrity of your community. If you fail in that, you not only fail to bring out what's best in you, but you will fail in life and suffer for it.",
    author: "Dr. Jordan Peterson",
  },
  {
    text: "Being a sovereign individual carries tremendous responsibility. Bearing that responsibility voluntarily is exactly the same thing as finding the most meaningful thing you can do in life.",
    author: "Dr. Jordan Peterson",
  },
  {
    text: "If you abdicate your responsibility, terrible things happen. If you think your life has no meaning, perhaps you're just not looking very hard for it.",
    author: "Dr. Jordan Peterson",
  },
  {
    text: "You can't replace life's catastrophe with happiness, but you can find deep meaning in responsibility. Take on as much responsibility as you possibly can, and then stagger uphill with it.",
    author: "Dr. Jordan Peterson",
  },
  { text: "Dialogue is the pathway to truth.", author: "Dr. Jordan Peterson" },
  {
    text: "Humility is the recognition of personal insufficiency and the willingness to learn.",
    author: "Dr. Jordan Peterson",
  },
  {
    text: "Before you can articulate your own standards of value, you must see yourself as a stranger and get to know yourself.",
    author: "Dr. Jordan Peterson",
  },
  {
    text: "It's time to sacrifice what you love best, so that you can become who you might become, instead of staying who you are.",
    author: "Dr. Jordan Peterson",
  },
  {
    text: "Only apologize if you have genuinely done something wrong.",
    author: "Dr. Jordan Peterson",
  },
  {
    text: "If the inevitable suffering of life is confronted and accepted as a personal responsibility, it can be transcended and repaired.",
    author: "Dr. Jordan Peterson",
  },
  {
    text: "If you get your act together, you might be able to help others get their act together too.",
    author: "Dr. Jordan Peterson",
  },
  {
    text: "Make a schedule and stick to it. It's not a prison - it's a framework that gives you freedom.",
    author: "Dr. Jordan Peterson",
  },
  {
    text: "Hierarchies aren't inherently tyrannical. Many are based on competence and serve important functions.",
    author: "Dr. Jordan Peterson",
  },
  {
    text: "Absolute equality of outcome is not only impossible, but dangerous to pursue.",
    author: "Dr. Jordan Peterson",
  },
  {
    text: "No one can tell you how it will work for you - it's your destiny to discover that. You have to make the decisions and commit to see where they lead.",
    author: "Dr. Jordan Peterson",
  },
  {
    text: "Much of what gives life meaning is the struggle to overcome challenges.",
    author: "Dr. Jordan Peterson",
  },
  {
    text: "No matter how bad things are, you can always make them worse. So it's on you to try to make them better.",
    author: "Dr. Jordan Peterson",
  },
  {
    text: "If you align yourself with the truth, you might have a rough journey, but you'll have your self-respect.",
    author: "Dr. Jordan Peterson",
  },
  {
    text: "Courage isn't the absence of fear - it's the willingness to act in spite of fear.",
    author: "Dr. Jordan Peterson",
  },
  {
    text: "You are far more capable than you think.",
    author: "Dr. Jordan Peterson",
  },
  {
    text: "You have no idea what you could become if you got yourself together.",
    author: "Dr. Jordan Peterson",
  },
  {
    text: "Tell the truth, and see what happens.",
    author: "Dr. Jordan Peterson",
  },
  {
    text: "Stand up straight with your shoulders back.",
    author: "Dr. Jordan Peterson",
  },
  {
    text: "Find the heaviest burden you can bear, and bear it.",
    author: "Dr. Jordan Peterson",
  },
  {
    text: "If you face a daunting task, break it down into smaller parts, and tackle them one by one.",
    author: "Dr. Jordan Peterson",
  },
  {
    text: "It doesn't matter where you start— you can always change, and improve, and become more than you are.",
    author: "Dr. Jordan Peterson",
  },
  {
    text: "Try to make one room in your home as beautiful as possible.",
    author: "Dr. Jordan Peterson",
  },
];
