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
                    <p>
                        Fluxx is a game about change, so it’s a game that changes as you play it.
                        It begins with just a couple of very simple rules, and becomes more complex as additional rules are added via
                        special cards called New Rules.
                    </p>
                    <p>
                        Start by following the Basic Rules (draw one card and play one card), and adapt to all additional New Rules as they
                        are played.
                        Players take turns, going clockwise around the table, drawing and playing the indicated number of cards until
                        someone meets the current Goal condition.
                    </p>
                    <p>
                        <b>On your turn:</b>
                        <ul>
                            <li>Draw the number of cards currently required</li>
                            <li>Play the number of cards currently required</li>
                            <li>Discard down to the current Hand Limit (if any)</li>
                            <li>Comply with the current Keeper Limit (if any)</li>
                        </ul>
                        <i><u>Note</u>:</i> Optional actions, allowed by New Rules, Keepers, etc., may be performed at any point during
                        this sequence.
                    </p>
                    <p>
                        <b>Game Setup</b>
                        <ul>
                            <li><b>New Rules </b>are played in the middle (yellow box).</li>
                            <li><b>Keepers </b>are played in front of each player (green box)</li>
                            <li><b>Creepers </b>are played beneath the keppers</li>
                            <li><b>Goals </b>are put on the right of the deck</li>
                            <li><b>Actions </b>are put in the discard pile once used</li>
                        </ul>
                        To see a cards' description, hover over it.
                    </p>
                    <b>New Rules, Creepers and Actions:</b>
                    <ul>
                        <li><b>New Rules </b>take effect instantly. If a New Rule contradicts another one already in play, the old Rules gets discarded</li>
                        <li><b>Creepers </b>are played automatically. As soon as a Creeper is drawn, it is put on the table immideatly and a new card gets drawn.
                          Players with one or more Creepers on the table cannot win until getting rid of them (unless the Goal/New Rule/s state differently).
                        </li>
                        <li><b>Actions </b>are used once and discarded.Their effect can be read in the description. </li>
                    </ul>
                    <i><u>Example #1</u></i>
                    <p>
                        If you play the Action called Draw 2 and Use ‘em you will immediately draw two cards and play them both.
                        If one of those cards is Draw 3, Play 2 of them you’d keep going, drawing three more cards, playing two cards
                        and discarding the third.
                        All of this activity would be counted as the playing of just one card.
                    </p>
                    <i><u>Example #2</u></i>
                    <p>
                        After drawing 1 card, you play the Draw 4 New Rule.
                        Now the rules require you to Draw 4 cards on each turn, but since you only took 1 card before, you must immediately draw 3 more cards.
                    </p>
                    <b>Basic Rules: </b>(2 yellow cards next to the discard pile, on the left)
                    <p>
                        These cards are the starting point – the foundation on which the rest of the game is built.
                        These initial rules will be overwritten by New Rules during the course of play.
                    </p>
                    <i><u>Note</u>:</i>
                    <p>
                        Discarding a card is not the same as playing it.
                        When a card is played all instructions on that card must be followed, if possible.
                        You cannot simply discard unwanted cards; you can only discard if compelled to by a Hand Limit
                        (Yes, this means you could be forced to play a card that makes someone else win.)
                    </p>
                    <p>
                        The game doesn’t end until there is a clear winner.
                        If for some reason two or more players meet the winning conditions simultaneously, the game continues until a
                        single winner emerges.
                    </p>
                </main>
            </div>
        );
    }
}


export default Info;
