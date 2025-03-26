document.addEventListener('DOMContentLoaded', () => {
    // Get all game grid containers
    const gameGrids = document.querySelectorAll('.games-grid');
    
    // Fill new games
    if (gameGrids[0]) {
        fillGameGrid(gameGrids[0], gamesData.newGames);
    }
    
    // Fill popular games
    if (gameGrids[1]) {
        fillGameGrid(gameGrids[1], gamesData.popularGames);
    }
    
    // Fill recommended games
    if (gameGrids[2]) {
        fillGameGrid(gameGrids[2], gamesData.recommendedGames);
    }
    
    // Add click events to all "Show All" buttons
    const showAllButtons = document.querySelectorAll('.show-all');
    showAllButtons.forEach(button => {
        button.addEventListener('click', handleShowAll);
    });

    // Add click events to navigation menu items
    setupNavigation();
    
    // If on game details page, setup game controls
    if (document.querySelector('.game-controls')) {
        setupGameControls();
    }

    // Check if URL parameters include category
    checkForCategoryParam();

    // Initialize lazy loading for images
    initLazyLoading();
});

/**
 * Initialize lazy loading for images
 */
function initLazyLoading() {
    // 使用浏览器原生懒加载支持
    if (!('loading' in HTMLImageElement.prototype)) {
        // 为不支持原生懒加载的浏览器添加基本的延迟加载
        const lazyImages = document.querySelectorAll("img[loading='lazy']");
        
        function lazyLoad() {
            lazyImages.forEach(img => {
                if (isInViewport(img) && img.dataset.src) {
                    img.src = img.dataset.src;
                    img.removeAttribute('data-src');
                }
            });
        }
        
        // 初始加载和滚动时执行
        lazyLoad();
        window.addEventListener('scroll', lazyLoad);
        window.addEventListener('resize', lazyLoad);
    }
}

/**
 * 检查元素是否在视口中
 */
function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

/**
 * Fill game grid
 * @param {HTMLElement} gridElement - Game grid element
 * @param {Array} games - Game data array
 */
function fillGameGrid(gridElement, games) {
    gridElement.innerHTML = '';
    
    // Create a document fragment for better performance
    const fragment = document.createDocumentFragment();
    
    games.forEach(game => {
        const gameCard = createGameCard(game);
        fragment.appendChild(gameCard);
    });
    
    // Append all game cards at once for better performance
    gridElement.appendChild(fragment);
}

/**
 * Create game card
 * @param {Object} game - Game data object
 * @returns {HTMLElement} - Created game card element
 */
function createGameCard(game) {
    const gameCard = document.createElement('div');
    gameCard.classList.add('game-card');
    gameCard.setAttribute('data-id', game.id);
    gameCard.setAttribute('data-category', game.category);
    
    // 使用原始图片URL，不尝试转换为WebP格式
    const imageSrc = game.image || `https://via.placeholder.com/300x200?text=${game.title}`;
    
    gameCard.innerHTML = `
        <a href="game.html?id=${game.id}" title="Play ${game.title}" aria-label="Play ${game.title}, a ${game.category} game">
            <img src="${imageSrc}" alt="${game.title} - ${game.category} game" class="game-image" loading="lazy">
            <div class="game-info">
                <h3 class="game-title">${game.title}</h3>
                <p class="game-category">${game.category}</p>
            </div>
        </a>
    `;
    
    return gameCard;
}

/**
 * Handle "Show All" button click
 * @param {Event} event - Click event
 */
function handleShowAll(event) {
    const button = event.target;
    const section = button.closest('.games-section');
    const category = section.querySelector('h2').textContent.trim();
    
    // Navigate to the category page
    window.location.href = `index.html?category=${encodeURIComponent(category)}`;
}

/**
 * Setup navigation menu functionality
 */
function setupNavigation() {
    const navLinks = document.querySelectorAll('.main-nav a');
    
    navLinks.forEach(link => {
        link.addEventListener('click', (event) => {
            // If it's the home link, let it work normally
            if (link.textContent === 'Home') {
                event.preventDefault();
                window.location.href = 'index.html';
                return;
            }
            
            // Prevent default behavior
            event.preventDefault();
            
            // Remove all active classes
            navLinks.forEach(item => item.classList.remove('active'));
            
            // Add active class to clicked link
            link.classList.add('active');
            
            // Get category name
            const category = link.textContent.trim();
            
            // If "All Games" was clicked
            if (category === 'All Games') {
                window.location.href = 'index.html?category=all';
                return;
            }
            
            // Navigate to page with category parameter
            window.location.href = `index.html?category=${encodeURIComponent(category)}`;
        });
    });
}

/**
 * Check if URL parameters include category
 */
function checkForCategoryParam() {
    const params = new URLSearchParams(window.location.search);
    const category = params.get('category');
    
    if (category) {
        // Highlight corresponding category in navigation
        highlightNavigation(category);
        
        // Create category page
        createCategoryPage(category);
        
        // Update page title and meta description for SEO
        updateCategorySEO(category);
    }
}

/**
 * Update page title and meta description for category pages
 * @param {string} category - Category name
 */
function updateCategorySEO(category) {
    // Update page title
    let title;
    let description;
    
    if (category === 'all') {
        title = 'All Games - Free Online HTML5 Games | HTML5Games.com';
        description = 'Browse our complete collection of free HTML5 games. Play instantly without downloads on any device. New games added regularly!';
    } else {
        title = `${category} Games - Free Online ${category} Games | HTML5Games.com`;
        description = `Play free online ${category} games instantly! Our collection of HTML5 ${category} games works on all devices with no downloads required.`;
    }
    
    document.title = title;
    
    // Update meta description if it exists
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
        metaDescription.setAttribute('content', description);
    }
    
    // Update Open Graph tags if they exist
    const ogTitle = document.querySelector('meta[property="og:title"]');
    const ogDescription = document.querySelector('meta[property="og:description"]');
    
    if (ogTitle) {
        ogTitle.setAttribute('content', title);
    }
    
    if (ogDescription) {
        ogDescription.setAttribute('content', description);
    }
}

/**
 * Highlight corresponding category in navigation
 * @param {string} category - Category name
 */
function highlightNavigation(category) {
    const navLinks = document.querySelectorAll('.main-nav a');
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        
        if (link.textContent.trim() === category || 
            (category === 'all' && link.textContent.trim() === 'All Games')) {
            link.classList.add('active');
        }
    });
}

/**
 * Create category page
 * @param {string} category - Category name
 */
function createCategoryPage(category) {
    // Get all games
    let allGames = [
        ...gamesData.newGames,
        ...gamesData.popularGames,
        ...gamesData.recommendedGames
    ];
    
    // If not "all", filter by category
    let filteredGames = allGames;
    let pageTitle = 'All Games';
    
    if (category !== 'all') {
        // Handle special cases
        if (category === 'New') {
            filteredGames = gamesData.newGames;
        } else if (category === 'Top' || category === 'Popular') {
            filteredGames = gamesData.popularGames;
        } else {
            filteredGames = allGames.filter(game => game.category === category);
        }
        pageTitle = category;
    }
    
    // Create category page content
    const main = document.querySelector('main');
    
    // Save original main content in case user wants to return to homepage
    if (!main.hasAttribute('data-original-content')) {
        main.setAttribute('data-original-content', main.innerHTML);
    }
    
    // Create category description for SEO
    let categoryDescription = '';
    switch(category) {
        case 'all':
            categoryDescription = 'Explore our complete collection of free online HTML5 games. Find your favorites among hundreds of titles across all genres!';
            break;
        case 'Puzzle':
            categoryDescription = 'Challenge your brain with our collection of puzzle games. From classic puzzles to innovative mind-benders, we have puzzles for all skill levels.';
            break;
        case 'Match 3':
            categoryDescription = 'Enjoy the satisfying gameplay of our match 3 games collection. Swap, match, and clear your way through colorful challenges!';
            break;
        case 'Racing':
            categoryDescription = 'Feel the speed with our racing games! Compete in various racing challenges across different environments and vehicles.';
            break;
        case 'Sports':
            categoryDescription = 'Experience the thrill of sports with our sports games collection. From football to basketball, we have games for every sports fan.';
            break;
        default:
            categoryDescription = `Browse our collection of ${pageTitle} games. These free HTML5 games can be played instantly in your browser without downloads.`;
    }
    
    // Clear main element and add category page
    main.innerHTML = `
        <section class="category-page">
            <h1 class="category-title">${pageTitle} Games</h1>
            <div class="category-description">
                <p>${categoryDescription}</p>
            </div>
            <div class="games-grid category-grid" aria-label="${pageTitle} Games Collection">
                <!-- Game cards will be dynamically added -->
            </div>
        </section>
    `;
    
    // Fill game grid
    const gameGrid = document.querySelector('.category-grid');
    fillGameGrid(gameGrid, filteredGames);
    
    // If no games found, display message
    if (filteredGames.length === 0) {
        gameGrid.innerHTML = `<p class="no-games">No games in this category yet. Stay tuned!</p>`;
    }
    
    // Scroll to top of page
    window.scrollTo(0, 0);
    
    // Initialize lazy loading for the new images
    initLazyLoading();
}

/**
 * Setup game controls
 */
function setupGameControls() {
    // Fullscreen button
    const fullscreenBtn = document.querySelector('.fullscreen-btn');
    if (fullscreenBtn) {
        fullscreenBtn.addEventListener('click', () => {
            const gameFrame = document.querySelector('.game-frame iframe');
            if (gameFrame) {
                if (gameFrame.requestFullscreen) {
                    gameFrame.requestFullscreen();
                } else if (gameFrame.mozRequestFullScreen) { // Firefox
                    gameFrame.mozRequestFullScreen();
                } else if (gameFrame.webkitRequestFullscreen) { // Chrome, Safari, Opera
                    gameFrame.webkitRequestFullscreen();
                } else if (gameFrame.msRequestFullscreen) { // IE/Edge
                    gameFrame.msRequestFullscreen();
                } else {
                    alert('In the full version, this would activate fullscreen mode');
                }
            } else {
                alert('In the full version, this would activate fullscreen mode');
            }
        });
    }
    
    // Like button
    const likeBtn = document.querySelector('.like-btn');
    if (likeBtn) {
        likeBtn.addEventListener('click', () => {
            if (likeBtn.querySelector('i').classList.contains('far')) {
                likeBtn.querySelector('i').classList.replace('far', 'fas');
                
                // Save to localStorage for persistence
                const gameId = new URLSearchParams(window.location.search).get('id');
                if (gameId) {
                    const favorites = JSON.parse(localStorage.getItem('favorites') || '[]');
                    if (!favorites.includes(gameId)) {
                        favorites.push(gameId);
                        localStorage.setItem('favorites', JSON.stringify(favorites));
                    }
                }
                
                alert('Game added to favorites!');
            } else {
                likeBtn.querySelector('i').classList.replace('fas', 'far');
                
                // Remove from localStorage
                const gameId = new URLSearchParams(window.location.search).get('id');
                if (gameId) {
                    const favorites = JSON.parse(localStorage.getItem('favorites') || '[]');
                    const updatedFavorites = favorites.filter(id => id !== gameId);
                    localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
                }
                
                alert('Game removed from favorites!');
            }
        });
        
        // Check if game is already in favorites
        const gameId = new URLSearchParams(window.location.search).get('id');
        if (gameId) {
            const favorites = JSON.parse(localStorage.getItem('favorites') || '[]');
            if (favorites.includes(gameId)) {
                likeBtn.querySelector('i').classList.replace('far', 'fas');
            }
        }
    }
    
    // Share button
    const shareBtn = document.querySelector('.share-btn');
    if (shareBtn) {
        shareBtn.addEventListener('click', () => {
            if (navigator.share) {
                navigator.share({
                    title: document.title,
                    text: 'Check out this awesome HTML5 game!',
                    url: window.location.href
                })
                .catch(error => console.log('Error sharing:', error));
            } else {
                navigator.clipboard.writeText(window.location.href)
                    .then(() => alert('Game link copied to clipboard! Share it with your friends.'))
                    .catch(() => alert('Could not copy link. Please copy the URL manually from your browser.'));
            }
        });
    }
    
    // Play game button
    const playButton = document.querySelector('.play-button');
    if (playButton) {
        playButton.addEventListener('click', () => {
            // In a real implementation, this would load the game
            const gameFrame = document.querySelector('.game-frame');
            if (gameFrame) {
                const gameId = new URLSearchParams(window.location.search).get('id');
                if (gameId) {
                    const game = findGameById(gameId);
                    if (game && game.iframeUrl) {
                        playButton.textContent = 'Loading...';
                        
                        // Create and append iframe
                        const iframe = document.createElement('iframe');
                        iframe.src = game.iframeUrl;
                        iframe.title = game.title;
                        iframe.setAttribute('allowfullscreen', 'true');
                        gameFrame.appendChild(iframe);
                        
                        // Hide button when game is loaded
                        iframe.onload = () => {
                            playButton.style.display = 'none';
                        };
                        
                        return;
                    }
                }
            }
            
            alert('In the full version, this would load and start the game');
            playButton.textContent = 'Loading...';
            setTimeout(() => {
                playButton.textContent = 'Play Game';
            }, 2000);
        });
    }
}

// Add scroll event handler for better user experience
window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    
    if (window.scrollY > 100) {
        header.style.boxShadow = '0 4px 10px rgba(0,0,0,0.1)';
    } else {
        header.style.boxShadow = '0 2px 5px rgba(0,0,0,0.1)';
    }
    
    // Load more games when user scrolls near bottom (infinite scroll)
    if (document.querySelector('.category-grid')) {
        const windowHeight = window.innerHeight;
        const documentHeight = document.documentElement.scrollHeight;
        const scrollPosition = window.scrollY + windowHeight;
        
        // If user has scrolled to near the bottom
        if (documentHeight - scrollPosition < 300) {
            loadMoreGames();
        }
    }
});

/**
 * Load more games for infinite scroll
 */
function loadMoreGames() {
    // Check if already loading or all games loaded
    if (window.isLoadingMoreGames || window.allGamesLoaded) {
        return;
    }
    
    const categoryGrid = document.querySelector('.category-grid');
    if (!categoryGrid) return;
    
    window.isLoadingMoreGames = true;
    
    // In a real implementation, this would fetch more games from the server
    // Here we'll simulate loading more games with a timeout
    
    // Add loading indicator
    const loadingIndicator = document.createElement('div');
    loadingIndicator.className = 'loading-more';
    loadingIndicator.textContent = 'Loading more games...';
    loadingIndicator.style.textAlign = 'center';
    loadingIndicator.style.padding = '20px';
    loadingIndicator.style.gridColumn = '1 / -1';
    categoryGrid.appendChild(loadingIndicator);
    
    // Simulate delay
    setTimeout(() => {
        // Remove loading indicator
        categoryGrid.removeChild(loadingIndicator);
        
        const params = new URLSearchParams(window.location.search);
        const category = params.get('category');
        
        // Get more games (in a real app, this would be from an API)
        let moreGames = [];
        
        // For demo purposes, we'll recycle existing games
        if (category === 'all') {
            moreGames = [...gamesData.newGames.slice(0, 6)];
        } else if (category === 'New') {
            moreGames = [...gamesData.popularGames.slice(0, 6)];
        } else {
            const allGames = [
                ...gamesData.newGames,
                ...gamesData.popularGames,
                ...gamesData.recommendedGames
            ];
            moreGames = allGames.filter(game => game.category === category).slice(0, 6);
        }
        
        // If no more games, mark as all loaded
        if (moreGames.length === 0) {
            window.allGamesLoaded = true;
            
            const endMessage = document.createElement('p');
            endMessage.textContent = 'You\'ve reached the end of our collection in this category!';
            endMessage.style.textAlign = 'center';
            endMessage.style.padding = '20px';
            endMessage.style.gridColumn = '1 / -1';
            categoryGrid.appendChild(endMessage);
        } else {
            // Add more games to grid
            moreGames.forEach(game => {
                const gameCard = createGameCard(game);
                categoryGrid.appendChild(gameCard);
            });
            
            // Initialize lazy loading for new images
            initLazyLoading();
        }
        
        window.isLoadingMoreGames = false;
    }, 1000);
} 