# Sura-GPT AI Chatbox

A beautiful and interactive AI chatbox named "Sura-GPT" with predefined Malayalam responses.

## Features

- 🎨 **Modern UI Design**: Beautiful gradient design with smooth animations
- 🤖 **AI Responses**: Predefined responses in Malayalam language
- 📱 **Responsive Design**: Works perfectly on desktop and mobile devices
- ⌨️ **Keyboard Shortcuts**: 
  - `Enter` to send message
  - `Ctrl/Cmd + K` to focus input
  - `Escape` to clear input
- 🎯 **Interactive Elements**: Typing indicators, hover effects, and smooth transitions
- 🧹 **Chat Management**: Clear chat functionality with confirmation
- 🥚 **Easter Egg**: Click the AI avatar 5 times for a surprise!

## AI Responses

Sura-GPT responds with these Malayalam phrases in rotation:

1. "നിങ്ങൾ ആരാ?" (Who are you?)
2. "നിങ്ങൾ ആരോടാ ഈ ചോദിക്കുന്നെ?" (Who are you asking this to?)
3. "മിണ്ടല്ലേടാ കടയാടി!!" (Don't talk, you rascal!!)

## How to Use

1. **Open the Application**: Simply open `index.html` in your web browser
2. **Start Chatting**: Type your message in the input field and press Enter or click the send button
3. **Clear Chat**: Click the trash icon in the header to clear the conversation
4. **Enjoy**: Watch Sura-GPT respond with the predefined Malayalam messages!

## File Structure

```
sura_upgraded/
├── index.html          # Main HTML file
├── styles.css          # CSS styling
├── script.js           # JavaScript functionality
├── sura.jpeg           # AI profile picture
└── README.md           # This file
```

## Technical Details

- **Frontend**: Pure HTML, CSS, and JavaScript (no frameworks)
- **Responsive**: Mobile-first design approach
- **Accessibility**: Keyboard navigation support
- **Security**: XSS protection with HTML escaping
- **Performance**: Lightweight and fast loading

## Browser Compatibility

- Chrome (recommended)
- Firefox
- Safari
- Edge

## Customization

You can easily customize the AI responses by editing the `suraResponses` array in `script.js`:

```javascript
const suraResponses = [
    "Your custom response 1",
    "Your custom response 2",
    "Your custom response 3"
];
```

## License

This project is open source and available under the MIT License.

---

**Enjoy chatting with Sura-GPT!** 🚀 