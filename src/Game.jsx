import React, { useState } from "react";
import styling from "./Game.module.css";
import { Deck } from "./Deck";
import { GameButtons } from "./GameButtons";
import { PlayerCounter } from "./PlayerCounter";
import { Players } from "./Players";
import { Warning } from "./Warning";

export default function Game() {
  const suits = [
    ["spades", "\u2660"],
    ["diamonds", "\u2666"],
    ["clubs", "\u2663"],
    ["hearts", "\u2665"],
  ];
  const values = [2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K", "A"];
  const [deck, setDeck] = useState(initDeck());
  const initPlayers = [];
  const [players, setPlayers] = useState(initPlayers);
  const initWarning = "";
  const [warning, setWarning] = useState(initWarning);

  return (
    <div>
      <div className={styling.playerInfo}>
        <PlayerCounter
          onAdd={() => handleAddPlayer()}
          onRemove={() => handleRemovePlayer()}
          onBlur={() => handleWarning()}
          playerCount={players.length}
        />
        <Warning message={warning} />
        <Players
          players={players}
          onClick={handleDeal}
          onBlur={handleWarning}
        />
      </div>
      <div className={styling.gameInfo}>
        <GameButtons
          handleShuffle={handleShuffle}
          onBlur={handleWarning}
          handleReset={handleReset}
          shuffle={"Shuffle"}
          reset={"Reset"}
        />
        <Deck deck={deck} player={"deck"} />
      </div>
    </div>
  );

  /**
   * Adds a card of each suit and value to the deck
   * @returns {[]} an array of card objects
   */
  function initDeck() {
    const deck = [];
    suits.forEach((s) => {
      let suitName = s[0];
      let suitCode = s[1];
      values.forEach((v) => {
        let id = `${v} of ${suitName}`;
        deck.push({ suitName, suitCode, v, id });
      });
    });
    return deck;
  }

  /**
   * Sends last card from game deck to chosen player's deck
   * @param {int} i Player to deal to
   * @returns {void}
   */
  function handleDeal(i) {
    if (handleWarning(deck.length === 0, "No cards left in deck!")) {
      return;
    } else {
      let tempDeck = deck.slice();
      let card = tempDeck.pop();
      setDeck(tempDeck);
      let playersTemp = players.slice();
      playersTemp[i].push(card);
      setPlayers(playersTemp);
      return;
    }
  }

  /**
   * Adds new player to players
   * @returns {void}
   */
  function handleAddPlayer() {
    let playersTemp = players.slice();
    playersTemp.push([]);
    setPlayers(playersTemp);
    return;
  }

  /**
   * Removes last player added from the game.
   * Instead displays a warning if a card has been dealt.
   * @returns {void}
   */
  function handleRemovePlayer() {
    if (
      handleWarning(
        deck.length < 52,
        "Cannot remove player while game in session!"
      )
    ) {
      return;
    } else {
      let playersTemp = players.slice(0, players.length - 1);
      setPlayers(playersTemp);
      return;
    }
  }

  /**
   * Checks if warning should be updated and changes it if it should.
   * @param {string} message
   * @returns {boolean}
   */
  function handleWarning(test, message) {
    if (test) {
      setWarning(message);
      return true;
    } else {
      setWarning("");
      return false;
    }
  }

  /**
   * Randomly swaps each card in the playable deck with another
   * @returns {void}
   */
  function handleShuffle() {
    if (
      handleWarning(deck.length !== 52, "Can only shuffle when deck is full!")
    ) {
      return;
    } else {
      let tempDeck = deck.slice();
      let i = 0;
      tempDeck.map(() => {
        let randomIndex = Math.floor(Math.random() * deck.length);
        let cardStore = tempDeck[i];
        tempDeck[i] = tempDeck[randomIndex];
        tempDeck[randomIndex] = cardStore;
        ++i;
        return "done";
      });
      setDeck(tempDeck);
      return;
    }
  }

  /**
   * Resets deck, player list and warning to initial values
   * @returns {void}
   */
  function handleReset() {
    setDeck(initDeck());
    setPlayers(initPlayers);
    setWarning(initWarning);
    return;
  }
}
