const smtcgPd = [
    {
        "id": "pd-005",
        "name": "Kyurene/ Garoben",
        "supertype": "Monster",
        "subtype": "Negaverse Yoma Monster",
        "healthValue": 40,
        "abilities": [
          {
            "moveType": "Defense",
            "moveName": "Fly Away",
            "text": "Win avoids attack",
            "costs": [
              "JKP"
            ]
          },
            {
            "moveType": "Attack",
            "moveName": "Razor Paper",
            "attackDamage": 20
          }
          
        ],
        "flavorText": {
            "main": "I'm giving you two choices: one, you surrender now, or two, you surrender later!",
            "character": "Garoben",
            "episodeNumber": 5
        },
        "rarity": "common",
        "cardNumber": 5
    }
]

module.exports = smtcgPd