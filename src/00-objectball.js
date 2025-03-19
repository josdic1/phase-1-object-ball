const game = {
    "Brooklyn Nets": {
      "players": [
        {
          "name": "Alan Anderson",
          "number": 0,
          "shoe": 16,
          "points": 22,
          "rebounds": 12,
          "assists": 12,
          "steals": 3,
          "blocks": 1,
          "slamDunks": 1
        },
        {
          "name": "Reggie Evans",
          "number": 30,
          "shoe": 14,
          "points": 12,
          "rebounds": 12,
          "assists": 12,
          "steals": 3,
          "blocks": 1,
          "slamDunks": 7
        },
        {
          "name": "Brook Lopez",
          "number": 11,
          "shoe": 17,
          "points": 17,
          "rebounds": 19,
          "assists": 10,
          "steals": 2,
          "blocks": 8,
          "slamDunks": 15
        },
        {
          "name": "Mason Plumlee",
          "number": 1,
          "shoe": 19,
          "points": 26,
          "rebounds": 12,
          "assists": 6,
          "steals": 3,
          "blocks": 1,
          "slamDunks": 5
        },
        {
          "name": "Jason Terry",
          "number": 13,
          "shoe": 15,
          "points": 19,
          "rebounds": 2,
          "assists": 2,
          "steals": 4,
          "blocks": 1,
          "slamDunks": 1
        }
      ],
      "teamColors": ["Black", "White"],
    },
    "Charlotte Hornets": {
      "players": [
        {
          "name": "Jeff Adrien",
          "number": 4,
          "shoe": 18,
          "points": 10,
          "rebounds": 14,
          "assists": 1,
          "steals": 2,
          "blocks": 7,
          "slamDunks": 2
        },
        {
          "name": "Bismak Biyombo",
          "number": 0,
          "shoe": 16,
          "points": 12,
          "rebounds": 12,
          "assists": 7,
          "steals": 7,
          "blocks": 1,
          "slamDunks": 1
        },
        {
          "name": "DeSagna Diop",
          "number": 8,
          "shoe": 14,
          "points": 2,
          "rebounds": 3,
          "assists": 1,
          "steals": 4,
          "blocks": 5,
          "slamDunks": 0
        },
        {
          "name": "Ben Gordon",
          "number": 33,
          "shoe": 15,
          "points": 24,
          "rebounds": 1,
          "assists": 2,
          "steals": 1,
          "blocks": 5,
          "slamDunks": 0
        },
        {
          "name": "Brendan Haywood",
          "number": 3,
          "shoe": 15,
          "points": 6,
          "rebounds": 12,
          "assists": 2,
          "steals": 2,
          "blocks": 1,
          "slamDunks": 12
        }
      ],
      "teamColors": ["Turquoise", "Purple"],
    }
  };
  
  function numPointsScored(playerName) {
    for (const team in game) {
      for (const player of game[team].players) {
        if (player.name === playerName) {
          return player.points;
        }
      }
    }
    return null;
  }
  
  function shoeSize(playerName) {
    for (const team in game) {
      for (const player of game[team].players) {
        if (player.name === playerName) {
          return player.shoe;
        }
      }
    }
    return null;
  }
  
  function teamColors(teamName) {
    return game[teamName].teamColors;
  }
  
  function teamNames() {
    return Object.keys(game);
  }
  
  function playerNumbers(teamName) {
    return game[teamName].players.map(player => player.number);
  }
  
  function playerStats(playerName) {
    for (const team in game) {
      for (const player of game[team].players) {
        if (player.name === playerName) {
          return player;
        }
      }
    }
    return null;
  }
  
  function bigShoeRebounds() {
    let maxShoe = 0;
    let maxShoePlayer = null;
  
    for (const team in game) {
      for (const player of game[team].players) {
        if (player.shoe > maxShoe) {
          maxShoe = player.shoe;
          maxShoePlayer = player;
        }
      }
    }
  
    return maxShoePlayer ? maxShoePlayer.rebounds : null;
  }
  
  function mostPointsScored() {
    let maxPoints = 0;
    let maxPointsPlayer = null;
  
    for (const team in game) {
      for (const player of game[team].players) {
        if (player.points > maxPoints) {
          maxPoints = player.points;
          maxPointsPlayer = player;
        }
      }
    }
    return maxPointsPlayer ? maxPointsPlayer.name : null;
  }
  
  function winningTeam() {
    let team1Points = 0;
    let team2Points = 0;
    let team1Name = Object.keys(game)[0];
    let team2Name = Object.keys(game)[1];
  
    for (const player of game[team1Name].players) {
      team1Points += player.points;
    }
  
    for (const player of game[team2Name].players) {
      team2Points += player.points;
    }
  
    return team1Points > team2Points ? team1Name : team2Name;
  }
  
  function playerWithLongestName() {
    let longestName = "";
    let longestNamePlayer = null;
  
    for (const team in game) {
      for (const player of game[team].players) {
        if (player.name.length > longestName.length) {
          longestName = player.name;
          longestNamePlayer = player;
        }
      }
    }
    return longestNamePlayer ? longestNamePlayer.name : null;
  }
  
  function doesLongNameStealATon() {
    const longestNamePlayer = playerWithLongestName();
    if (!longestNamePlayer) {
      return false;
    }
    for (const team in game) {
      for (const player of game[team].players) {
        if (player.name === longestNamePlayer) {
          return player.steals > 1;
        }
      }
    }
    return false;
  }