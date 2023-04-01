import fetch from 'node-fetch';
import fs from 'fs/promises';
import path from 'path';

const version = await fetch(
  'https://ddragon.leagueoflegends.com/api/versions.json'
)
  .then((res) => res.json())
  .then((data) => data[0]);

const championsDataUrl = `http://ddragon.leagueoflegends.com/cdn/${version}/data/ja_JP/champion.json`;

const prodraftSrcUrl = await fetch('http://prodraft.leagueoflegends.com')
  .then((res) => res.text())
  .then((txt) => txt.match(/\/static\/js\/main.[a-z0-9]*.js/g)[0])
  .then((prodraftFilePath) =>
    path.join('http://prodraft.leagueoflegends.com/', prodraftFilePath)
  );

await fetch(prodraftSrcUrl)
  .then((res) => res.text())
  .then((prodraftSrc) => {
    const prodraftFile = prodraftSrc.replace(
      'fetch("/champions/"+(this.state.locale||"en_US"))',
      `fetch("${championsDataUrl}")`
    );

    fs.writeFile('out/prodraft.js', prodraftFile);
  });
