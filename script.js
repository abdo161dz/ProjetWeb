function analyzeURL() {
  const input = document.getElementById('urlInput').value;
  const output = document.getElementById('output');
  output.style.display = 'none';

  try {
    const url = new URL(input);
    let html = `
      <h2> URL Structure:</h2>
      <p><span class="key"> Protocol:</span> ${url.protocol}</p>
      <p><span class="key"> Domain Name:</span> ${url.hostname}</p>
      <p><span class="key"> Path:</span> ${url.pathname}</p>
      <p><span class="key"> Fragment / Anchor:</span> ${url.hash || "nothing"}</p>
    `;

    // Check if the URL has a port
    if (url.port) {
      html += `<p><span class="key"> Port:</span> ${url.port}</p>`;
    } else {
      html += `<p><span class="key"> Port:</span> nothing</p>`;
    }

    const params = [...url.searchParams.entries()];
    if (params.length > 0) {
      html += `<p class="key"> Query Parameters:</p><ul>`;
      for (const [key, value] of params) {
        html += `<li><strong>${key}</strong>: ${value}</li>`;
      }
      html += `</ul>`;
    } else {
      html += `<p><span class="key">Query Parameters</span> nothing </p>`;
    }

    output.innerHTML = html;
    output.style.display = 'block';
  } catch (err) {
    output.innerHTML = `<p style="color:red;"> ${err.message}</p>`;
    output.style.display = 'block';
  }
}
