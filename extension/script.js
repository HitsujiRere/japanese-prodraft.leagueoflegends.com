(function () {
  const urlSearchParams = new URLSearchParams(window.location.search);

  if (urlSearchParams.has('draft')) {
    if (urlSearchParams.get('locale') === 'ja_JP') {
      // Script読み込み
      const scriptElement = document.createElement('script');
      scriptElement.src = chrome.runtime.getURL('prodraft.js');
      document.body.appendChild(scriptElement);

      // 英語選択ボタン
      const switchEnUsElement = document.createElement('button');
      switchEnUsElement.addEventListener('click', () => {
        urlSearchParams.set('locale', 'en_US');
        window.location.search = urlSearchParams;
      });
      switchEnUsElement.innerText = 'English';
      switchEnUsElement.classList.add('button');
      document.body.appendChild(switchEnUsElement);
    } else {
      // 日本語選択ボタン
      const switchJaJpElement = document.createElement('button');
      switchJaJpElement.addEventListener('click', () => {
        urlSearchParams.set('locale', 'ja_JP');
        window.location.search = urlSearchParams;
      });
      switchJaJpElement.innerText = '日本語';
      switchJaJpElement.classList.add('button');
      document.body.appendChild(switchJaJpElement);
    }
  }
})();
