// generate a random picker
const randomPicker = (num) => {
    let randomSelect = Math.floor(Math.random() * num);
    return randomSelect;
}

// dataset to determine message to selsect
const englishClubs = {
    clubs: ['A.F.C. Aldermaston', 'Burnham', 'Camberley Town', 'Framlingham Town',
    'Debenham LC', 'Hackney Wick', 'Kirkley & Pakefield', 'Redbridge', 'Millwall',
    'Arsenal', 'Aston Villa', 'Brentford', 'Brighton & Hove Albion', 'Burnley',
    'Chelsea', 'Crystal Palace', 'Everton', 'Leeds United', 'Leicester City', 
    'Liverpool', 'Manchester City', 'Manchester United', 'Newcastle United', 
    'Norwich City', 'Southampton', 'Tottenham Hotspur', 'Watford', 'West Ham United',
    'Wolverhampton Wanderers'],

    nickName: ['Atom Men', 'Blues', 'Krooners', 'Castlemen', 'Hornets', 
    'Wickers', 'Royals', 'Motormen', 'Lions', 'Gunners', 'Villa', 
    'Bees', 'Seagulls', 'Clarets', 'Blues', 'Eagles', 'Toffees', 
    'Whites', 'Foxes', 'Reds', 'Citizens', 'Red Devils', 'Magpies',  
    'Canaries', 'Saints', 'Lilywhites', 'Hornets', 'Irons', 'Wolves'],

    jokes: ['What did the ref say to the chicken who tripped a defender? “Fowl!”', 
    'What is black and white and black and white and black and white? A Newcastle fan rolling down a hill!', 
    'I left two Monday night soccer tickets on my dashboard yesterday. Someone smashed the window and left two more.', 
    'Why was the footballer upset on their birthday? They got a red card!', 
    'What do you call someone who stands inside goalposts and stops the ball rolling away? Annette!', 
    'England are playing Iceland tomorrow. If they win that game, they\’ll play Tesco’s next Saturday and then Asda on Wednesday.', 
    'Which football team loves ice-cream? Aston Vanilla!', 
    'Where\’s the best place in America to shop for a football kit? New Jersey!', 
    'What\’s the difference between The Invisible Man and Austrailian Team? You\’ve got more chance of seeing The Invisible Man at the World Cup Finals!', 
    'What do Lionel Messi and a magician have in common? Both do hat-tricks!', 
    'Why is a football crowd learning to sing like a person opening a tin of sardines? They both have trouble with the key!', 
    'Why did Cinderella get kicked off the football team? Because she kept running away from the ball!', 
    'What is a goalkeeper’s favourite snack? Beans on post!', 
    'Why don\’t grasshoppers watch football? They prefer cricket!']
};

const league = ['Combined Counties League Division One', 'Combined Counties League Premier Division North', 
    'Combined Counties League Premier Division South', 'Eastern Counties League Division One', 
    'Eastern Counties League Division One North', 'Eastern Counties League Division One South', 
    'Eastern Counties League Premier Division', 'Essex Senior League', 'Football League Championship', 
    'Premier League'];

    
        let messageData = [];
        for (let key in englishClubs) {
            let nameClub = englishClubs[key];
            let randomMessageSelector = randomPicker(nameClub.length);
                messageData.push(nameClub[randomMessageSelector])
            }
                if (englishClubs.clubs.indexOf(messageData[0]) >= 9){
                messageData.push(league[9])
             } else {
                messageData.push(league[englishClubs.clubs.indexOf(messageData[0])]);
                
            }
               

function readMessage (arr) {
    let newMessage = [];
    newMessage.push(`If you are a fan of ${arr[0]}, do you know the club's nickname is ${arr[1]} ?`);
    newMessage.push(`And they play in ${arr[3]}`)
    newMessage.push (`A little joke to brighten your day: ${arr[2]}`)
   const finalMessage = newMessage.join('\n')
    console.log(finalMessage);
    
}

readMessage(messageData)