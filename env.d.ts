/// <reference types="vite/client" />

interface Card {
  name: String,
  suit: 'espadas' | 'paus' | 'copas' | 'ouros',
  letter: 'A' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | '10' | 'J' | 'Q' | 'K',
}

type Deck = Array<Card>;