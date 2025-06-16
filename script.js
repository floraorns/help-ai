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
      "Authorization": "Bearer YOUR_API_KEY"
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