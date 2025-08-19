async function getAdvice() {
  const query = document.getElementById("query").value;
  if (!query) {
    alert("Please enter a question!");
    return;
  }

  const responseBox = document.getElementById("response");
  responseBox.innerText = "⏳ Fetching advice...";

  try {
    const res = await fetch("/eco-advice", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ query })
    });

    const data = await res.json();
    if (data.advice) {
      responseBox.innerText = "💡 " + data.advice;
    } else {
      responseBox.innerText = "❌ Error: " + (data.error || "Something went wrong");
    }
  } catch (err) {
    responseBox.innerText = "⚠️ Failed to connect to server.";
  }
}
