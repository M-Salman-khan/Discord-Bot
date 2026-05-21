# 🤖 Discord URL Bot

<div align="center">

A simple and modern **Discord Bot** built using **discord.js v14** that responds to messages, supports slash commands, and prepares URL shortening functionality.

[![Node.js](https://img.shields.io/badge/Node.js-v16+-339933?logo=node.js&logoColor=white)](https://nodejs.org/)
[![discord.js](https://img.shields.io/badge/discord.js-v14-5865F2?logo=discord&logoColor=white)](https://discord.js.org/)
[![License](https://img.shields.io/badge/License-WTFPL-red.svg)](./LICENSE)
[![pnpm](https://img.shields.io/badge/pnpm-10.27.0-F69220?logo=pnpm&logoColor=white)](https://pnpm.io/)

</div>

------------------------------------------------------------------------

## 📋 Table of Contents

- [Features](#-features)
- [Tech Stack](#-tech-stack)
- [Prerequisites](#-prerequisites)
- [Installation & Setup](#️-installation--setup)
- [Project Structure](#-project-structure)
- [Usage Examples](#-usage-examples)
- [Environment Variables](#-environment-variables)
- [Commands](#-commands)
- [Troubleshooting](#-troubleshooting)
- [Future Improvements](#-future-improvements)
- [Contributing](#-contributing)
- [License](#-license)
- [Author](#-author)

------------------------------------------------------------------------

## 🚀 Features

-   👋 **Welcome Messages** - Automatically greet new users who send messages
-   🔗 **URL Command Detection** - Detects `create <url>` command for URL shortening
-   ⚡ **Slash Commands** - Modern Discord slash command support (`/ping`)
-   🔐 **Secure Configuration** - Uses environment variables for sensitive data
-   🧩 **ES Modules** - Built with modern JavaScript (ES6+)
-   📦 **Lightweight** - Minimal dependencies for fast performance
-   🎯 **Event-Driven** - Responds to message and interaction events

------------------------------------------------------------------------

## 🛠 Tech Stack

| Technology | Purpose |
|-----------|---------|
| **Node.js** | JavaScript runtime environment |
| **discord.js v14** | Discord API wrapper |
| **dotenv** | Environment variable management |
| **pnpm** | Fast, disk space efficient package manager |

------------------------------------------------------------------------

## 📋 Prerequisites

Before you begin, ensure you have the following installed:

-   **Node.js** (v16.9.0 or higher) - [Download](https://nodejs.org/)
-   **pnpm** (v10.27.0 or higher) - [Installation Guide](https://pnpm.io/installation)
-   **Discord Account** - To create a bot application
-   **Discord Server** - Where you have admin permissions to add the bot

### Creating a Discord Bot

1. Go to the [Discord Developer Portal](https://discord.com/developers/applications)
2. Click "New Application" and give it a name
3. Go to the "Bot" tab and click "Add Bot"
4. Under "Privileged Gateway Intents", enable:
   - `MESSAGE CONTENT INTENT`
   - `GUILD MESSAGES`
5. Copy your bot token (keep it secret!)
6. Go to OAuth2 > URL Generator:
   - Select scopes: `bot`, `applications.commands`
   - Select bot permissions: `Send Messages`, `Read Messages/View Channels`
   - Copy the generated URL and open it to invite your bot

------------------------------------------------------------------------

## ⚙️ Installation & Setup

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/M-Salman-khan/Discord-Bot.git
cd Discord-Bot
```

### 2️⃣ Install Dependencies

Using pnpm (recommended):
```bash
pnpm install
```

Or using npm:
```bash
npm install
```

### 3️⃣ Create a `.env` File

Create a `.env` file in the root directory:

```env
BOT_API_KEY=your_discord_bot_token_here
CLIENT_ID=your_application_client_id_here
```

⚠️ **Important:** Never commit your `.env` file to version control!

### 4️⃣ Register Slash Commands

Before starting the bot, register the slash commands:

```bash
node commands.js
```

You should see:
```
Started refreshing application (/) commands.
Successfully reloaded application (/) commands.
```

### 5️⃣ Start the Bot

```bash
pnpm dev
# or
node index.js
```

✅ Your bot should now be online in your Discord server!

------------------------------------------------------------------------

## 📂 Project Structure

```
Discord-Bot/
├── index.js           # Main bot file - handles events and message logic
├── commands.js        # Slash command registration script
├── package.json       # Project metadata and dependencies
├── pnpm-lock.yaml     # Lock file for pnpm dependencies
├── .env               # Environment variables (not tracked in git)
├── .gitignore         # Git ignore rules
├── LICENSE            # License file
└── README.md          # This file
```

### File Descriptions

- **index.js**: Core bot logic with event handlers for messages and interactions
- **commands.js**: Script to register slash commands with Discord API
- **.env**: Stores sensitive credentials (bot token, client ID)

------------------------------------------------------------------------

## 💡 Usage Examples

### Message Commands

Send a regular message to the bot:

```
Any message
```

**Bot Response:**
```
Hey @YourUsername 
Welcome to our server.
```

---

Send a URL creation command:

```
create https://google.com
```

**Bot Response:**
```
Generating short url for https://google.com
```

**Note:** Currently URL shortening returns a mock response. Full implementation coming soon!

### Slash Commands

Use the `/ping` command:

```
/ping
```

**Bot Response:**
```
Pong!!
```

------------------------------------------------------------------------

## 🔒 Environment Variables

The following environment variables are required in your `.env` file:

| Variable | Description | Example |
|----------|-------------|---------|
| `BOT_API_KEY` | Your Discord Bot Token from the Developer Portal | `MTIzNDU2Nzg5MDEyMzQ1Njc4OQ.GhIjKl...` |
| `CLIENT_ID` | Your Discord Application's Client ID | `1234567890123456789` |

### How to Find These:

1. **BOT_API_KEY**: Discord Developer Portal > Your App > Bot > Token
2. **CLIENT_ID**: Discord Developer Portal > Your App > General Information > Application ID

------------------------------------------------------------------------

## 📜 Commands

### Available Commands

| Command | Type | Description | Permissions |
|---------|------|-------------|-------------|
| `create <url>` | Message | Initiates URL shortening process | Everyone |
| `/ping` | Slash | Responds with "Pong!!" to test bot latency | Everyone |

### Adding New Commands

To add a new slash command:

1. Edit `commands.js` and add your command to the `commands` array:
```javascript
{
  name: 'hello',
  description: 'Says hello to the user',
}
```

2. Register the command:
```bash
node commands.js
```

3. Handle the interaction in `index.js`:
```javascript
client.on("interactionCreate", interaction => {
  if (interaction.commandName === 'hello') {
    interaction.reply("Hello! 👋");
  }
});
```

------------------------------------------------------------------------

## 🔧 Troubleshooting

### Common Issues

#### Bot doesn't respond to messages
- ✅ Ensure `MESSAGE CONTENT INTENT` is enabled in Discord Developer Portal
- ✅ Check that the bot has proper permissions in your server
- ✅ Verify the bot is online (green status)

#### "Missing Access" error
- ✅ Grant the bot "Read Messages" and "Send Messages" permissions
- ✅ Check channel-specific permission overrides

#### Slash commands not appearing
- ✅ Run `node commands.js` to register commands
- ✅ Wait a few minutes for Discord to propagate changes
- ✅ Try restarting Discord client
- ✅ Verify `CLIENT_ID` in `.env` is correct

#### Bot token is invalid
- ✅ Regenerate token in Discord Developer Portal
- ✅ Update `BOT_API_KEY` in `.env` file
- ✅ Ensure no extra spaces in the token

### Debug Mode

To see detailed logs, add console logs in `index.js`:

```javascript
client.on('ready', () => {
  console.log(`✅ Logged in as ${client.user.tag}!`);
});
```

------------------------------------------------------------------------

## 📌 Future Improvements

### Planned Features

- [ ] 🔗 Implement real URL shortening API (TinyURL, Bitly, or custom)
- [ ] 💾 Add database integration (MongoDB/PostgreSQL) to store URLs
- [ ] 🛡️ Improve error handling and validation
- [ ] 📦 Add modular command handler system
- [ ] 📊 Add logging and monitoring system
- [ ] 🎨 Rich embed messages for better UI
- [ ] ⏱️ Add cooldown system to prevent spam
- [ ] 📈 URL analytics and click tracking
- [ ] 🔍 Custom URL aliases
- [ ] 🗑️ URL deletion and management commands
- [ ] 👑 Admin-only commands
- [ ] 🌐 Multi-server support with separate databases

### Contributing Ideas?

Feel free to open an issue or submit a pull request!

------------------------------------------------------------------------

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

### How to Contribute

1. Fork the repository
2. Create your feature branch:
   ```bash
   git checkout -b feature/AmazingFeature
   ```
3. Commit your changes:
   ```bash
   git commit -m 'Add some AmazingFeature'
   ```
4. Push to the branch:
   ```bash
   git push origin feature/AmazingFeature
   ```
5. Open a Pull Request

### Code Style

- Use ES6+ features
- Follow existing code formatting
- Add comments for complex logic
- Test your changes before submitting

------------------------------------------------------------------------

## 📄 License

This project is licensed under the **WTFPL (Do What The Fuck You Want To Public License) v2** - see the [LICENSE](./LICENSE) file for details.

> **Everyone is permitted to copy and distribute verbatim or modified copies of this license document, and changing it is allowed as long as the name is changed.**

------------------------------------------------------------------------

## 👨‍💻 Author

**M Salman Khan**

🎓 B.Tech Computer Science Student  
💻 Frontend Developer | Node.js Learner  
🔗 [GitHub](https://github.com/M-Salman-khan)

---

<div align="center">

**⭐ Star this repository if you find it helpful!**

Made with ❤️ by [M Salman Khan](https://github.com/M-Salman-khan)

</div>
