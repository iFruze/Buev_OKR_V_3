 const out = document.getElementById('out')

  document.addEventListener('keydown', (e) => {
    const ch = e.key

    if (ch.length !== 1) return

    if (/\d/.test(ch)) return

    out.textContent += ch.toUpperCase()
  });