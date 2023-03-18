function capitalize(str: string): string {
  return str.charAt(0).toUpperCase() + str.slice(1);
};

function colorOf(suit: string): string {
  return (suit === 'copas' || suit === 'ouros' ) ? 'red' : 'black'
};

export { capitalize, colorOf }
