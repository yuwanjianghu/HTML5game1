// Game Data
const gamesData = {
    // New Games
    newGames: [
        {
            id: 'pengu-slide',
            title: 'Penguin Slide',
            category: 'Casual',
            image: 'https://img.cdn.famobi.com/portal/html5games/images/tmp/PenguSlideTeaser.jpg',
            url: '#',
            iframeUrl: 'https://play.famobi.com/pengu-slide'
        },
        {
            id: 'peet-around',
            title: 'Peet Around',
            category: 'Casual',
            image: 'https://img.cdn.famobi.com/portal/html5games/images/tmp/PeetAroundTeaser.jpg',
            url: '#',
            iframeUrl: 'https://play.famobi.com/peet-around'
        },
        {
            id: 'words-of-wonders',
            title: 'Words of Wonders',
            category: 'Puzzle',
            image: 'https://img.cdn.famobi.com/portal/html5games/images/tmp/WordsOfWondersTeaser.jpg',
            url: '#',
            iframeUrl: 'https://play.famobi.com/words-of-wonders'
        },
        {
            id: 'neon-swing',
            title: 'Neon Swing',
            category: 'Casual',
            image: 'https://img.cdn.famobi.com/portal/html5games/images/tmp/NeonSwingTeaser.jpg',
            url: '#',
            iframeUrl: 'https://play.famobi.com/neon-swing'
        },
        {
            id: 'emoji-flow',
            title: 'Emoji Flow',
            category: 'Match 3',
            image: 'https://img.cdn.famobi.com/portal/html5games/images/tmp/EmojiFlowTeaser.jpg',
            url: '#',
            iframeUrl: 'https://play.famobi.com/emoji-flow'
        },
        {
            id: 'neon-tower',
            title: 'Neon Tower',
            category: 'Casual',
            image: 'https://img.cdn.famobi.com/portal/html5games/images/tmp/NeonTowerTeaser.jpg',
            url: '#',
            iframeUrl: 'https://play.famobi.com/neon-tower'
        },
        {
            id: 'drift-dudes',
            title: 'Drift Dudes',
            category: 'Racing',
            image: 'https://img.cdn.famobi.com/portal/html5games/images/tmp/DriftDudesTeaser.jpg',
            url: '#',
            iframeUrl: 'https://play.famobi.com/drift-dudes'
        },
        {
            id: 'slope',
            title: 'Slope',
            category: 'Jump & Run',
            image: 'https://img.cdn.famobi.com/portal/html5games/images/tmp/SlopeTeaser.jpg',
            url: '#',
            iframeUrl: 'https://play.famobi.com/slope'
        },
        {
            id: 'cubito',
            title: 'Cubito',
            category: 'Puzzle',
            image: 'https://img.cdn.famobi.com/portal/html5games/images/tmp/CubitoTeaser.jpg',
            url: '#',
            iframeUrl: 'https://play.famobi.com/cubito'
        },
        {
            id: 'tap-tap-dunk',
            title: 'Tap Tap Dunk',
            category: 'Sports',
            image: 'https://img.cdn.famobi.com/portal/html5games/images/tmp/TapTapDunkTeaser.jpg',
            url: '#',
            iframeUrl: 'https://play.famobi.com/tap-tap-dunk'
        },
        {
            id: 'ramp',
            title: 'Ramp',
            category: 'Jump & Run',
            image: 'https://img.cdn.famobi.com/portal/html5games/images/tmp/RampTeaser.jpg',
            url: '#',
            iframeUrl: 'https://play.famobi.com/ramp'
        },
        {
            id: 'diamond-rush-2',
            title: 'Diamond Rush 2',
            category: 'Match 3',
            image: 'https://img.cdn.famobi.com/portal/html5games/images/tmp/DiamondRush2Teaser.jpg',
            url: '#',
            iframeUrl: 'https://play.famobi.com/diamond-rush-2'
        },
        {
            id: 'color-tunnel',
            title: 'Color Tunnel',
            category: 'Casual',
            image: 'https://img.cdn.famobi.com/portal/html5games/images/tmp/ColorTunnelTeaser.jpg',
            url: '#',
            iframeUrl: 'https://play.famobi.com/color-tunnel'
        },
        {
            id: 'butterfly-shimai',
            title: 'Butterfly Shimai',
            category: 'Puzzle',
            image: 'https://img.cdn.famobi.com/portal/html5games/images/tmp/ButterflyShimaiTeaser.jpg',
            url: '#',
            iframeUrl: 'https://play.famobi.com/butterfly-shimai'
        },
        {
            id: 'e-scooter',
            title: 'E-Scooter',
            category: 'Racing',
            image: 'https://img.cdn.famobi.com/portal/html5games/images/tmp/EScooterTeaser.jpg',
            url: '#',
            iframeUrl: 'https://play.famobi.com/e-scooter'
        },
        {
            id: 'pop-it-duel',
            title: 'Pop It Duel',
            category: 'Puzzle',
            image: 'https://img.cdn.famobi.com/portal/html5games/images/tmp/PopItDuelTeaser.jpg',
            url: '#',
            iframeUrl: 'https://play.famobi.com/pop-it-duel'
        },
        {
            id: 'stair-race-3d',
            title: '3D Stair Race',
            category: 'Jump & Run',
            image: 'https://img.cdn.famobi.com/portal/html5games/images/tmp/StairRace3DTeaser.jpg',
            url: '#',
            iframeUrl: 'https://play.famobi.com/stair-race-3d'
        },
        {
            id: 'crowd-run-3d',
            title: '3D Crowd Run',
            category: 'Jump & Run',
            image: 'https://img.cdn.famobi.com/portal/html5games/images/tmp/CrowdRun3DTeaser.jpg',
            url: '#',
            iframeUrl: 'https://play.famobi.com/crowd-run-3d'
        },
        {
            id: 'uncle-ahmed',
            title: 'Uncle Ahmed',
            category: 'Casual',
            image: 'https://img.cdn.famobi.com/portal/html5games/images/tmp/UncleAhmedTeaser.jpg',
            url: '#',
            iframeUrl: 'https://play.famobi.com/uncle-ahmed'
        },
        {
            id: 'dices-2048-3d',
            title: '3D Dices 2048',
            category: 'Puzzle',
            image: 'https://img.cdn.famobi.com/portal/html5games/images/tmp/Dices20483DTeaser.jpg',
            url: '#',
            iframeUrl: 'https://play.famobi.com/dices-2048-3d'
        },
        {
            id: 'frankenstein-go',
            title: 'Frankenstein Go',
            category: 'Adventure',
            image: 'https://img.cdn.famobi.com/portal/html5games/images/tmp/FrankensteinGoTeaser.jpg',
            url: '#',
            iframeUrl: 'https://play.famobi.com/frankenstein-go'
        },
        {
            id: 'om-nom-connect-classic',
            title: 'Om Nom Connect Classic',
            category: 'Puzzle',
            image: 'https://img.cdn.famobi.com/portal/html5games/images/tmp/OmNomConnectClassicTeaser.jpg',
            url: '#',
            iframeUrl: 'https://play.famobi.com/om-nom-connect-classic'
        },
        {
            id: 'om-nom-bubbles',
            title: 'Om Nom Bubbles',
            category: 'Bubble Shooter',
            image: 'https://img.cdn.famobi.com/portal/html5games/images/tmp/OmNomBubblesTeaser.jpg',
            url: '#',
            iframeUrl: 'https://play.famobi.com/om-nom-bubbles'
        },
        {
            id: 'pop-it-3d',
            title: '3D Pop It',
            category: 'Casual',
            image: 'https://img.cdn.famobi.com/portal/html5games/images/tmp/PopIt3DTeaser.jpg',
            url: '#',
            iframeUrl: 'https://play.famobi.com/pop-it-3d'
        },
        {
            id: 'traffic-tom',
            title: 'Traffic Tom',
            category: 'Puzzle',
            image: 'https://img.cdn.famobi.com/portal/html5games/images/tmp/TrafficTomTeaser.jpg',
            url: '#',
            iframeUrl: 'https://play.famobi.com/traffic-tom'
        },
        {
            id: 'onet-gallery-3d',
            title: '3D Onet Gallery',
            category: 'Puzzle',
            image: 'https://img.cdn.famobi.com/portal/html5games/images/tmp/OnetGallery3dTeaser.jpg',
            url: '#',
            iframeUrl: 'https://play.famobi.com/onet-gallery-3d'
        },
        {
            id: 'om-nom-run',
            title: 'Om Nom Run',
            category: 'Jump & Run',
            image: 'https://img.cdn.famobi.com/portal/html5games/images/tmp/OmNomRunTeaser.jpg',
            url: '#',
            iframeUrl: 'https://play.famobi.com/om-nom-run'
        },
        {
            id: 'euro-penalty-cup-2021',
            title: 'Euro Penalty Cup 2021',
            category: 'Sports',
            image: 'https://img.cdn.famobi.com/portal/html5games/images/tmp/EuroPenaltyCup2021Teaser.jpg',
            url: '#',
            iframeUrl: 'https://play.famobi.com/euro-penalty-cup-2021'
        },
        {
            id: 'train-2048',
            title: 'Train 2048',
            category: 'Puzzle',
            image: 'https://img.cdn.famobi.com/portal/html5games/images/tmp/Train2048Teaser.jpg',
            url: '#',
            iframeUrl: 'https://play.famobi.com/train-2048'
        },
        {
            id: 'giant-2048',
            title: 'Giant 2048',
            category: 'Puzzle',
            image: 'https://img.cdn.famobi.com/portal/html5games/images/tmp/Giant2048Teaser.jpg',
            url: '#',
            iframeUrl: 'https://play.famobi.com/giant-2048'
        },
        {
            id: 'western-sniper-famobi',
            title: 'Western Sniper',
            category: 'Shooting',
            image: 'https://img.cdn.famobi.com/portal/html5games/images/tmp/WesternSniperTeaser.jpg',
            url: '#',
            iframeUrl: 'https://play.famobi.com/western-sniper'
        },
        {
            id: 'go-escape-famobi',
            title: 'Go Escape',
            category: 'Adventure',
            image: 'https://img.cdn.famobi.com/portal/html5games/images/tmp/GoEscapeTeaser.jpg',
            url: '#',
            iframeUrl: 'https://play.famobi.com/go-escape'
        },
        {
            id: 'color-fill-3d-famobi',
            title: '3D Color Fill',
            category: 'Casual',
            image: 'https://img.cdn.famobi.com/portal/html5games/images/tmp/ColorFill3DTeaser.jpg',
            url: '#',
            iframeUrl: 'https://play.famobi.com/color-fill-3d'
        },
        {
            id: 'bottle-flip',
            title: 'Bottle Flip',
            category: 'Casual',
            image: 'https://img.cdn.famobi.com/portal/html5games/images/tmp/BottleFlipTeaser.jpg',
            url: '#',
            iframeUrl: 'https://play.famobi.com/bottle-flip'
        },
        {
            id: 'color-roll-3d-famobi',
            title: '3D Color Roll',
            category: 'Casual',
            image: 'https://img.cdn.famobi.com/portal/html5games/images/tmp/ColorRoll3DTeaser.jpg',
            url: '#',
            iframeUrl: 'https://play.famobi.com/color-roll-3d'
        },
        {
            id: 'color-water-sort-3d-famobi',
            title: '3D Color Water Sort',
            category: 'Puzzle',
            image: 'https://img.cdn.famobi.com/portal/html5games/images/tmp/ColorWaterSort3DTeaser.jpg',
            url: '#',
            iframeUrl: 'https://play.famobi.com/color-water-sort-3d'
        },
        {
            id: 'braindom-famobi',
            title: 'Braindom',
            category: 'Puzzle',
            image: 'https://img.cdn.famobi.com/portal/html5games/images/tmp/BraindomTeaser.jpg',
            url: '#',
            iframeUrl: 'https://play.famobi.com/braindom'
        },
        {
            id: 'sort-it-famobi',
            title: 'Sort It',
            category: 'Puzzle',
            image: 'https://img.cdn.famobi.com/portal/html5games/images/tmp/SortItTeaser.jpg',
            url: '#',
            iframeUrl: 'https://play.famobi.com/sort-it'
        },
        {
            id: 'slime-road',
            title: 'Slime Road',
            category: 'Casual',
            image: 'https://img.cdn.famobi.com/portal/html5games/images/tmp/SlimeRoadTeaser.jpg',
            url: '#',
            iframeUrl: 'https://play.famobi.com/slime-road'
        },
        {
            id: 'pipe-puzzle',
            title: 'Pipe Puzzle',
            category: 'Puzzle',
            image: 'https://img.cdn.famobi.com/portal/html5games/images/tmp/PipePuzzleTeaser.jpg',
            url: '#',
            iframeUrl: 'https://play.famobi.com/pipe-puzzle'
        },
        {
            id: 'funny-fred',
            title: 'Funny Fred',
            category: 'Casual',
            image: 'https://img.cdn.famobi.com/portal/html5games/images/tmp/FunnyFredTeaser.jpg',
            url: '#',
            iframeUrl: 'https://play.famobi.com/funny-fred'
        },
        {
            id: 'rise-up',
            title: 'Rise Up',
            category: 'Puzzle',
            image: 'https://img.cdn.famobi.com/portal/html5games/images/tmp/RiseUpTeaser.jpg',
            url: '#',
            iframeUrl: 'https://play.famobi.com/rise-up'
        }
    ],
    
    // 热门游戏
    popularGames: [
        {
            id: 'cube-match-famobi',
            title: 'Cube Match',
            category: 'Match 3',
            image: 'https://img.cdn.famobi.com/portal/html5games/images/tmp/CubeMatchTeaser.jpg',
            url: '#',
            iframeUrl: 'https://play.famobi.com/cube-match'
        },
        {
            id: 'parking-jam-famobi',
            title: 'Parking Jam',
            category: 'Puzzle',
            image: 'https://img.cdn.famobi.com/portal/html5games/images/tmp/ParkingJamTeaser.jpg',
            url: '#',
            iframeUrl: 'https://play.famobi.com/parking-jam'
        },
        {
            id: 'fashion-battle-famobi',
            title: 'Fashion Battle',
            category: 'Girls',
            image: 'https://img.cdn.famobi.com/portal/html5games/images/tmp/FashionBattleTeaser.jpg',
            url: '#',
            iframeUrl: 'https://play.famobi.com/fashion-battle'
        },
        {
            id: 'fruit-party-famobi',
            title: 'Fruit Party',
            category: 'Match 3',
            image: 'https://img.cdn.famobi.com/portal/html5games/images/tmp/FruitPartyTeaser.jpg',
            url: '#',
            iframeUrl: 'https://play.famobi.com/fruit-party'
        },
        {
            id: 'barbara-and-kent',
            title: 'Barbara and Kent',
            category: 'Girls',
            image: 'https://img.cdn.famobi.com/portal/html5games/images/tmp/BarbaraAndKentTeaser.jpg',
            url: '#',
            iframeUrl: 'https://play.famobi.com/barbara-and-kent'
        },
        {
            id: 'parking-panic',
            title: 'Parking Panic',
            category: 'Puzzle',
            image: 'https://img.cdn.famobi.com/portal/html5games/images/tmp/ParkingPanicTeaser.jpg',
            url: '#',
            iframeUrl: 'https://play.famobi.com/parking-panic'
        },
        {
            id: 'super-thrower',
            title: 'Super Thrower',
            category: 'Casual',
            image: 'https://img.cdn.famobi.com/portal/html5games/images/tmp/SuperThrowerTeaser.jpg',
            url: '#',
            iframeUrl: 'https://play.famobi.com/super-thrower'
        },
        {
            id: 'food-rush',
            title: 'Food Rush',
            category: 'Casual',
            image: 'https://img.cdn.famobi.com/portal/html5games/images/tmp/FoodRushTeaser.jpg',
            url: '#',
            iframeUrl: 'https://play.famobi.com/food-rush'
        },
        {
            id: 'giant-rush',
            title: 'Giant Rush',
            category: 'Jump & Run',
            image: 'https://img.cdn.famobi.com/portal/html5games/images/tmp/GiantRushTeaser.jpg',
            url: '#',
            iframeUrl: 'https://play.famobi.com/giant-rush'
        },
        {
            id: 'parking-rush',
            title: 'Parking Rush',
            category: 'Puzzle',
            image: 'https://img.cdn.famobi.com/portal/html5games/images/tmp/ParkingRushTeaser.jpg',
            url: '#',
            iframeUrl: 'https://play.famobi.com/parking-rush'
        },
        {
            id: 'giant-attack',
            title: 'Giant Attack',
            category: 'Adventure',
            image: 'https://img.cdn.famobi.com/portal/html5games/images/tmp/GiantAttackTeaser.jpg',
            url: '#',
            iframeUrl: 'https://play.famobi.com/giant-attack'
        },
        {
            id: 'gun-spin',
            title: 'Gun Spin',
            category: 'Shooting',
            image: 'https://img.cdn.famobi.com/portal/html5games/images/tmp/GunSpinTeaser.jpg',
            url: '#',
            iframeUrl: 'https://play.famobi.com/gun-spin'
        }
    ],
    
    // 推荐游戏
    recommendedGames: [
        {
            id: 'crazy-hen-level',
            title: 'Crazy Hen Level',
            category: 'Casual',
            image: 'https://img.cdn.famobi.com/portal/html5games/images/tmp/CrazyHenLevelTeaser.jpg',
            url: '#',
            iframeUrl: 'https://play.famobi.com/crazy-hen-level'
        },
        {
            id: 'good-shelves',
            title: 'Good Shelves',
            category: 'Puzzle',
            image: 'https://img.cdn.famobi.com/portal/html5games/images/tmp/GoodShelvesTeaser.jpg',
            url: '#',
            iframeUrl: 'https://play.famobi.com/good-shelves'
        },
        {
            id: 'dance-battle',
            title: 'Dance Battle',
            category: 'Casual',
            image: 'https://img.cdn.famobi.com/portal/html5games/images/tmp/DanceBattleTeaser.jpg',
            url: '#',
            iframeUrl: 'https://play.famobi.com/dance-battle'
        },
        {
            id: 'tile-journey',
            title: 'Tile Journey',
            category: 'Puzzle',
            image: 'https://img.cdn.famobi.com/portal/html5games/images/tmp/TileJourneyTeaser.jpg',
            url: '#',
            iframeUrl: 'https://play.famobi.com/tile-journey'
        },
        {
            id: 'love-tester',
            title: 'Love Tester',
            category: 'Girls',
            image: 'https://img.cdn.famobi.com/portal/html5games/images/tmp/LoveTesterTeaser.jpg',
            url: '#',
            iframeUrl: 'https://play.famobi.com/love-tester'
        },
        {
            id: 'emoji-match',
            title: 'Emoji Match',
            category: 'Match 3',
            image: 'https://img.cdn.famobi.com/portal/html5games/images/tmp/EmojiMatchTeaser.jpg',
            url: '#',
            iframeUrl: 'https://play.famobi.com/emoji-match'
        },
        {
            id: 'tower-smash-level',
            title: 'Tower Smash Level',
            category: 'Casual',
            image: 'https://img.cdn.famobi.com/portal/html5games/images/tmp/TowerSmashLevelTeaser.jpg',
            url: '#',
            iframeUrl: 'https://play.famobi.com/tower-smash-level'
        },
        {
            id: 'tower-smash',
            title: 'Tower Smash',
            category: 'Casual',
            image: 'https://img.cdn.famobi.com/portal/html5games/images/tmp/TowerSmashTeaser.jpg',
            url: '#',
            iframeUrl: 'https://play.famobi.com/tower-smash'
        },
        {
            id: 'train-miner',
            title: 'Train Miner',
            category: 'Adventure',
            image: 'https://img.cdn.famobi.com/portal/html5games/images/tmp/TrainMinerTeaser.jpg',
            url: '#',
            iframeUrl: 'https://play.famobi.com/train-miner'
        },
        {
            id: 'save-the-princess',
            title: 'Save the Princess',
            category: 'Adventure',
            image: 'https://img.cdn.famobi.com/portal/html5games/images/tmp/SaveThePrincessTeaser.jpg',
            url: '#',
            iframeUrl: 'https://play.famobi.com/save-the-princess'
        },
        {
            id: 'go-around',
            title: 'Go Around',
            category: 'Casual',
            image: 'https://img.cdn.famobi.com/portal/html5games/images/tmp/GoAroundTeaser.jpg',
            url: '#',
            iframeUrl: 'https://play.famobi.com/go-around'
        },
        {
            id: 'green-ball',
            title: 'Green Ball',
            category: 'Casual',
            image: 'https://img.cdn.famobi.com/portal/html5games/images/tmp/GreenBallTeaser.jpg',
            url: '#',
            iframeUrl: 'https://play.famobi.com/green-ball'
        },
        {
            id: 'twisty-lines',
            title: 'Twisty Lines',
            category: 'Casual',
            image: 'https://img.cdn.famobi.com/portal/html5games/images/tmp/TwistyLinesTeaser.jpg',
            url: '#',
            iframeUrl: 'https://play.famobi.com/twisty-lines'
        },
        {
            id: 'lawn-mower',
            title: 'Lawn Mower',
            category: 'Casual',
            image: 'https://img.cdn.famobi.com/portal/html5games/images/tmp/LawnMowerTeaser.jpg',
            url: '#',
            iframeUrl: 'https://play.famobi.com/lawn-mower'
        },
        {
            id: 'rising-squares',
            title: 'Rising Squares',
            category: 'Casual',
            image: 'https://img.cdn.famobi.com/portal/html5games/images/tmp/RisingSquaresTeaser.jpg',
            url: '#',
            iframeUrl: 'https://play.famobi.com/rising-squares'
        },
        {
            id: 'tower-fall',
            title: 'Tower Fall',
            category: 'Casual',
            image: 'https://img.cdn.famobi.com/portal/html5games/images/tmp/TowerFallTeaser.jpg',
            url: '#',
            iframeUrl: 'https://play.famobi.com/tower-fall'
        }
    ]
}; 