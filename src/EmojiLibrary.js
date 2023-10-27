import React, { Component } from 'react';
import EmojiCard from './EmojiCard';

class EmojiLibrary extends Component {
    emojis = [
        { id: 1, emoji: "😀", description: "Felicidad" },
        { id: 2, emoji: "❤️", description: "Amor" },
        
    ];

    render() {
        return (
            <div className="emoji-library">
                {this.emojis.map(emoji => (
                    <EmojiCard key={emoji.id} emoji={emoji.emoji} description={emoji.description} />
                ))}
            </div>
        );
    }
}

export default EmojiLibrary;
