function shiftChar(char, shift) {
  if (!/[a-zA-Z]/.test(char)) return char;

  const isUpper = char >= 'A' && char <= 'Z';
  const start = isUpper ? 'A'.charCodeAt(0) : 'a'.charCodeAt(0);

  const code = char.charCodeAt(0) - start;
  const shifted = (code + shift) % 26;

  return String.fromCharCode(start + (shifted < 0 ? shifted + 26 : shifted));
}

export default function caesarCipher(str, shift) {
  return str.split('')
            .map(char => shiftChar(char, shift))
            .join('');
}
