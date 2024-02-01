require('dotenv').config()

export function translateText() {
  const inputText = document.getElementById('inputText').value

  // Substitua 'SUA_CHAVE_DE_API' pela sua chave de API da OpenAI
  const apiKey = process.env.OPENAI_API_KEY

  // Use a API da OpenAI para tradução
  fetch('https://api.openai.com/v1/engines/davinci-codex/completions', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${apiKey}`
    },
    body: JSON.stringify({
      prompt: inputText,
      max_tokens: 50  // Ajuste conforme necessário
    })
  })
    .then(response => response.json())
    .then(data => {
      const translatedText = data.choices[0].text.trim()
      document.getElementById('output').innerText = translatedText
    })
    .catch(error => console.error('Erro na tradução:', error))
}
