import React from 'react';

function EmojiCard({ emoji, description }) {
    return (
        <div className="emoji-card">
            <span className="emoji">{emoji}</span>
            <p className="description">{description}</p>
        </div>
    );
}

export default EmojiCard;