const messages = [
  "Ajude este pobre programador a comprar mais café ☕",
  "Nenhum bug foi corrigido durante esta rotação 🌀",
  "Você encontrou um easter egg inútil. Parabéns 🎉",
  "Contratar o desenvolvedor aumenta o FPS do site 🚀",
  "sudo apt install dinheiro 😔",
];

export function randomMessage():string{
    const messageRandom = messages[Math.floor(Math.random()*messages.length)]
    return messageRandom
}