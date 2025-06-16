async function sendMessage() {
  const input = document.getElementById("userInput");
  const message = input.value;
  document.getElementById("chatbox").innerHTML += `<p><strong>You:</strong> ${message}</p>`;
  input.value = '';

  // Replace with your OpenAI API call
  const response = await fetch("https://api.openai.com/v1/chat/completions", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Authorization": "Bearer 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"
    },
    body: JSON.stringify({
      model: "gpt-4",
      messages: [{ role: "user", content: message }]
    })
  });

  const data = await response.json();
  const reply = data.choices[0].message.content;
  document.getElementById("chatbox").innerHTML += `<p><strong>Help AI:</strong> ${reply}</p>`;
}
