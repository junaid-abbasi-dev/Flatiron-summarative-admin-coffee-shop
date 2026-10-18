# Coffee R Us

This is an admin portal for an e-commerce coffee shop. Admins can manage the coffee catalog by adding new coffees and updating prices, while shoppers can browse and search the menu and get recommendations from an AI assistant.

## Features

- **Landing page** that introduces the Coffee R Us store
- **Search** for coffees by name, with results that filter as you type
- **Update coffee prices** directly from each coffee card
- **Add new coffees** to the shop through the Admin Portal form
- **AI coffee assistant** that answers questions and recommends coffees from the shop's menu (powered by Ollama)
- **Responsive design** that works on desktop, tablet, and mobile

## Technologies Used

- **React** - building the user interface with components and hooks (`useState`, `useEffect`)
- **React Router** - client-side routing between the Home, Shop, Admin Portal, and Assistant pages
- **Vite** - development server and build tool
- **json-server** - a mock REST API that stores the coffee data in `db.json` (GET, POST, PATCH)
- **Ollama** (`llama3.2` model) - runs the AI assistant locally on your computer
- **react-markdown** + **remark-gfm** - display the AI's replies with formatting such as lists, bold text, and tables
- **CSS** (Flexbox, Grid, media queries) - modern, responsive styling

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (version 20 or newer)
- [Ollama](https://ollama.com/download) installed on your computer

### Installation

1. Clone the repository and move into the project folder:

   ```bash
   git clone <your-repo-url>
   cd react-final-admin-dashboard
   ```

2. Install the dependencies:

   ```bash
   npm install
   ```

3. Download the AI model (only needed once):

   ```bash
   ollama pull llama3.2
   ```

### Running the App

The app needs **three** things running at the same time. Use a separate terminal for each one.

1. **Start the backend (json-server):**

   ```bash
   npx json-server --watch db.json --port 3001
   ```

   The coffee data is available at `http://localhost:3001/coffees`.

2. **Start Ollama:** open the Ollama app, or run:

   ```bash
   ollama serve
   ```

3. **Start the React app:**

   ```bash
   npm run dev
   ```

   Then open the URL that Vite prints in the terminal (usually `http://localhost:5173`).

## How to Use

- **Home** - the landing page introducing Coffee R Us.
- **Shop** - browse all coffees. Type in the search box to filter by name. Enter a new price on any card and click **Update** to change it.
- **Admin Portal** - fill out the form (name, description, origin, price) and click **Submit** to add a new coffee to the shop.
- **Assistant** - ask the AI questions such as *"Which coffee is best for espresso?"* It knows about every coffee currently in the shop.

## API Endpoints

| Method | Endpoint | Description |
|---|---|---|
| GET | `/coffees` | Get all coffees |
| POST | `/coffees` | Add a new coffee |
| PATCH | `/coffees/:id` | Update a coffee's price |

## Project Structure

```
react-final-admin-dashboard/
├── db.json                  # Coffee data used by json-server
├── index.html
├── package.json
└── src/
    ├── main.jsx             # Entry point, wraps the app in BrowserRouter
    ├── App.jsx              # Routes and shared coffee state (fetch, add, update)
    ├── App.css              # Component and page styles, media queries
    ├── index.css            # Global styles and theme colors
    ├── components/
    │   ├── NavBar.jsx       # Navigation links between pages
    │   └── CoffeeCard.jsx   # Displays one coffee and its price update form
    └── pages/
        ├── Home.jsx         # Landing page
        ├── Shop.jsx         # Coffee list with search
        ├── Admin.jsx        # Form to add a new coffee
        └── Assistant.jsx    # AI chat assistant using Ollama
```

## Future Improvements

- Delete coffees from the Admin Portal
- Edit other coffee details (name, description, origin), not just price
- Filter coffees by origin
- Add product images to each coffee card

## Author

**Junaid Abbasi** - Flatiron School, Summative Lab
