(function () {
  const urlSearchParams = new URLSearchParams(window.location.search);

  if (urlSearchParams.has('draft')) {
    if (urlSearchParams.get('locale') === 'ja_JP') {
      const scriptElement = document.createElement('script');
      scriptElement.src = chrome.runtime.getURL('prodraft.js');
      document.body.appendChild(scriptElement);
    }
  } else {
    const localeSelectElement = document.querySelector(
      '#root > div > div > select'
    );
    if (localeSelectElement) {
      const jaOption = document.createElement('option');
      jaOption.value = 'ja_JP';
      jaOption.innerText = '日本語';
      localeSelectElement.appendChild(jaOption);
    }
  }
})();
