import React from 'react';
import './style/info.css';

class Info extends React.Component {

    render() {
        return (
            <div className="info-container">
                <div id="sidenav">
                    <div className="container">
                        <a href="/"><div className="nav">Homepage</div></a>
                        <a href="/info" id="active"><div className="nav">Info</div></a>
                        <a href="/connect"><div className="nav">Play</div></a>
                    </div>
                </div>

                <main>
                    <h1>Game Rules</h1>
                    <div>
                        Fluxx is a game about change, so it’s a game that changes as you play it.
                        It begins with just a couple of very simple rules, and becomes more complex as additional rules are added via
                        special cards called New Rules.
                    </div>
                    <div>
                        Start by following the Basic Rules (draw one card and play one card), and adapt to all additional New Rules as they
                        are played.
                        Players take turns, going anti-clockwise around the table, drawing and playing the indicated number of cards until
                        someone meets the current Goal condition.
                    </div>
                    <div>
                        <b>On your turn:</b>
                        <ul>
                            <li>Draw the number of cards currently required</li>
                            <li>Play the number of cards currently required</li>
                        </ul>
                        <i><u>Note</u>:</i> Optional actions, allowed by New Rules, Keepers, etc., may be performed at any point during
                        this sequence.
                    </div>
                    <div className="left">
                        <b>Game Setup</b>
                        <ul>
                            <li><b>New Rules </b>are played in the middle (yellow box).</li>
                            <li><b>Keepers </b>are played in front of each player (green box)</li>
                            <li><b>Creepers </b>are played beneath the keppers</li>
                            <li><b>Goals </b>are put on the right of the deck</li>
                            <li><b>Actions </b>are put in the discard pile once used</li>
                        </ul>
                    </div>
                    <b>New Rules, Creepers and Actions:</b>
                    <ul>
                        <li><b>New Rules </b>take effect instantly. If a New Rule contradicts another one already in play, the old Rules gets discarded</li>
                        <li><b>Creepers </b>are played automatically. As soon as a Creeper is drawn, it is put on the table immideatly and a new card gets drawn.
                          Players with one or more Creepers on the table cannot win until getting rid of them (unless a New Rule states differently).
                        </li>
                        <li><b>Actions </b>are used once and discarded. Their effect can be read in the description. </li>
                    </ul>
                    <i><u>Example</u></i>
                    <div>
                        After drawing 1 card, you play the Draw 4 New Rule.
                        Now the rules require you to Draw 4 cards on each turn, but since you only took 1 card before, you must immediately draw 3 more cards.
                    </div>
                    <b>Basic Rules: </b>(2 yellow cards next to the discard pile, on the left)
                    <div>
                        These cards are the starting point – the foundation on which the rest of the game is built.
                        These initial rules will be overwritten by New Rules during the course of play.
                    </div>
                    <i><u>Note</u>:</i>
                    <div>
                        Discarding a card is not the same as playing it.
                        When a card is played all instructions on that card must be followed, if possible. Also, you cannot have more than
                        9 Keepers in front of you; playing an additional keeper will have it discarded.
                        You cannot simply discard unwanted cards.
                        (Yes, this means you could be forced to play a card that makes someone else win.)
                    </div>
                </main>
            </div>
        );
    }
}


export default Info;
