// Sura-GPT Chatbox JavaScript

// Predefined responses in Malayalam
const suraResponses = [
    "നിങ്ങൾ ആരാ?",
    "നിങ്ങൾ ആരോടാ ഈ ചോദിക്കുന്നെ?",
    "മിണ്ടല്ലേടാ കടയാടി!!"
];

let responseIndex = 0;

// DOM elements
const chatMessages = document.getElementById('chatMessages');
const userInput = document.getElementById('userInput');

// Initialize chat
document.addEventListener('DOMContentLoaded', function() {
    userInput.focus();
    scrollToBottom();
});

// Handle Enter key press
function handleKeyPress(event) {
    if (event.key === 'Enter') {
        sendMessage();
    }
}

// Send message function
function sendMessage() {
    const message = userInput.value.trim();
    
    if (message === '') return;
    
    // Add user message
    addMessage(message, 'user');
    
    // Clear input
    userInput.value = '';
    
    // Show typing indicator
    showTypingIndicator();
    
    // Simulate AI thinking time
    setTimeout(() => {
        // Remove typing indicator
        removeTypingIndicator();
        
        // Get Sura-GPT response
        const response = getSuraResponse();
        
        // Add AI response
        addMessage(response, 'ai');
    }, 1000 + Math.random() * 1000); // Random delay between 1-2 seconds
}

// Add message to chat
function addMessage(text, sender) {
    const messageDiv = document.createElement('div');
    messageDiv.className = `message ${sender}-message`;
    
    const currentTime = new Date().toLocaleTimeString('en-US', {
        hour: '2-digit',
        minute: '2-digit',
        hour12: true
    });
    
    if (sender === 'user') {
        messageDiv.innerHTML = `
            <div class="message-avatar">U</div>
            <div class="message-content">
                <div class="message-text">${escapeHtml(text)}</div>
                <div class="message-time">${currentTime}</div>
            </div>
        `;
    } else {
        messageDiv.innerHTML = `
            <img src="sura.jpeg" alt="Sura-GPT" class="message-avatar">
            <div class="message-content">
                <div class="message-text">${escapeHtml(text)}</div>
                <div class="message-time">${currentTime}</div>
            </div>
        `;
    }
    
    chatMessages.appendChild(messageDiv);
    scrollToBottom();
}

// Get Sura-GPT response
function getSuraResponse() {
    const response = suraResponses[responseIndex];
    responseIndex = (responseIndex + 1) % suraResponses.length;
    return response;
}

// Show typing indicator
function showTypingIndicator() {
    const typingDiv = document.createElement('div');
    typingDiv.className = 'message ai-message typing-message';
    typingDiv.id = 'typingIndicator';
    
    typingDiv.innerHTML = `
        <img src="sura.jpeg" alt="Sura-GPT" class="message-avatar">
        <div class="message-content">
            <div class="typing-indicator">
                <div class="typing-dot"></div>
                <div class="typing-dot"></div>
                <div class="typing-dot"></div>
            </div>
        </div>
    `;
    
    chatMessages.appendChild(typingDiv);
    scrollToBottom();
}

// Remove typing indicator
function removeTypingIndicator() {
    const typingIndicator = document.getElementById('typingIndicator');
    if (typingIndicator) {
        typingIndicator.remove();
    }
}

// Clear chat
function clearChat() {
    if (confirm('Are you sure you want to clear the chat?')) {
        // Keep only the initial welcome message
        const welcomeMessage = chatMessages.querySelector('.message.ai-message');
        chatMessages.innerHTML = '';
        
        if (welcomeMessage) {
            chatMessages.appendChild(welcomeMessage);
        } else {
            // Add welcome message if not present
            const messageDiv = document.createElement('div');
            messageDiv.className = 'message ai-message';
            messageDiv.innerHTML = `
                <img src="sura.jpeg" alt="Sura-GPT" class="message-avatar">
                <div class="message-content">
                    <div class="message-text">
                        ഹലോ! ഞാൻ Sura-GPT ആണ്. എനിക്ക് സഹായിക്കാൻ കഴിയുന്നത് എന്താണ്?
                    </div>
                    <div class="message-time">Just now</div>
                </div>
            `;
            chatMessages.appendChild(messageDiv);
        }
        
        // Reset response index
        responseIndex = 0;
        
        // Focus on input
        userInput.focus();
    }
}

// Scroll to bottom of chat
function scrollToBottom() {
    chatMessages.scrollTop = chatMessages.scrollHeight;
}

// Escape HTML to prevent XSS
function escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
}

// Add some interactive features
document.addEventListener('DOMContentLoaded', function() {
    // Add click sound effect (optional)
    const sendBtn = document.querySelector('.send-btn');
    const clearBtn = document.querySelector('.clear-btn');
    
    // Add hover effects
    sendBtn.addEventListener('mouseenter', function() {
        this.style.transform = 'scale(1.05)';
    });
    
    sendBtn.addEventListener('mouseleave', function() {
        this.style.transform = 'scale(1)';
    });
    
    // Add keyboard shortcuts
    document.addEventListener('keydown', function(event) {
        // Ctrl/Cmd + K to focus input
        if ((event.ctrlKey || event.metaKey) && event.key === 'k') {
            event.preventDefault();
            userInput.focus();
        }
        
        // Escape to clear input
        if (event.key === 'Escape') {
            userInput.value = '';
            userInput.blur();
        }
    });
    
    // Auto-resize input (optional enhancement)
    userInput.addEventListener('input', function() {
        this.style.height = 'auto';
        this.style.height = Math.min(this.scrollHeight, 100) + 'px';
    });
});

// Add some fun Easter eggs
let clickCount = 0;
const aiAvatar = document.querySelector('.ai-avatar');

if (aiAvatar) {
    aiAvatar.addEventListener('click', function() {
        clickCount++;
        if (clickCount >= 5) {
            // Easter egg: Change background color temporarily
            document.body.style.background = 'linear-gradient(135deg, #ffffff 0%, #e0e0e0 100%)';
            setTimeout(() => {
                document.body.style.background = 'linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 50%, #1a1a1a 100%)';
            }, 2000);
            clickCount = 0;
        }
    });
} 