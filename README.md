# HTML5Games Website Clone Project

This is a website clone project imitating [html5games.com](https://html5games.com/), used to showcase HTML5 games.

## Project Structure

```
.
├── index.html           # Main page
├── game.html            # Dynamic game page (loads different games via URL parameters)
├── game-detail.html     # Game details page (old version, replaced by game.html)
├── about.html           # About page
├── admin/               # Management tools
│   └── game-manager.html # Game management tool (for batch adding games)
├── styles/              # CSS styles
│   ├── main.css         # Main style file
│   ├── game-detail.css  # Game detail page style
│   └── about.css        # About page style
├── scripts/             # JavaScript files
│   ├── games-data.js    # Game data
│   └── main.js          # Main functionality script
└── assets/              # Resource files
    └── images/          # Game images
```

## Features

- Responsive design, adapts to various screen sizes
- Game category navigation
- Game card display
- Interactive game selection
- Game iframe loading and fullscreen mode
- Game management tool (batch adding games)

## Usage

1. Clone or download this project
2. Open the `index.html` file directly in your browser
3. Or run the project using a local server:
   ```bash
   # If you have Python installed, you can start a simple HTTP server with:
   # Python 3:
   python -m http.server
   
   # Python 2:
   python -m SimpleHTTPServer
   ```

## Batch Adding iframe Games

This project supports batch adding iframe games in two ways:

### 1. Using the Management Tool

1. Open the `admin/game-manager.html` page
2. In the "Add Game" tab, you can add games individually
3. In the "Batch Add" tab, you can add multiple games at once
4. In the "Manage Games" tab, you can view and delete added games
5. In the "Export Data" tab, you can export game data, then copy the generated code to the `scripts/games-data.js` file

Batch adding games format:
```
gameID|gameTitle|category|imageURL|iframeURL|section(new/popular/recommended)
```

For example:
```
western-sniper|Western Sniper|Shooting|assets/images/western-sniper.jpg|https://example.com/games/western-sniper/index.html|new
go-escape|Go Escape|Adventure|assets/images/go-escape.jpg|https://example.com/games/go-escape/index.html|popular
```

### 2. Directly Editing the Game Data File

1. Open the `scripts/games-data.js` file
2. Add new game objects to the appropriate game array:
   ```javascript
   {
       id: "gameID",
       title: "gameTitle",
       category: "category",
       image: "imageURL",
       url: "#",
       iframeUrl: "iframeURL"
   }
   ```
3. Save the file and refresh the website to see the newly added games

## Implementation Notes

- This project is implemented using pure HTML, CSS, and JavaScript
- Images use placeholders; in a real project, these should be replaced with actual game images
- Games are loaded via iframes and support fullscreen mode

## Features to Improve

- User login and game favorite functionality
- Game rating system
- Game search function
- Game category pages
- More comprehensive management backend

## Copyright Notice

This project is for learning and demonstration purposes only, not for commercial use. The original website copyright belongs to [html5games.com](https://html5games.com/). 