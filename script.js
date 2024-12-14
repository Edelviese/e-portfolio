const urlParams = new URLSearchParams(window.location.search);
    const id = urlParams.get('id');

    if (id) {
      document.getElementById('id-display').innerHTML = `ID: ${id}`;
    }