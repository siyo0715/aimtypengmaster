let p = document.getElementById('text');

// 問題
let textLists = [
  'trade off',
  'pull request',
  'Remote Repository',
  'Authentication',
  'responsive design',
  'Agile Software Development',
  'Spreadsheet',
  'Serial Transmission',
  'De Facto Standard',
  'accessibility',
  'Usability',
  'access point',
  'Throughput',
  'proxy server',
  'home directory',
  'current directory',
  'PrintScreen',
  'legacy migration',
  'Sustainability',
  'Social Networking Service',
  'Single Page Application',
  'minimal design',
  'Rasterisation',
  'comprehensive layout',
  'AnonymousFTP',
  'SPAM Mail',
  'Social Engineering',
  'Single Sign On',
  'confidentiality',
  'driver software',
  'device driver',
  'algorithm',
  'flowchart',
  'git --version',
  'git config --list',
  'git config keyname',
  'git config keyname　Setvalue',
  'git config --global keyname　Setvalue',
  'git config --unset keyname',
  'git add filename',
  'git add .',
  'git add *',
  'git reset',
  'git commit -m message',
  'git commit --allow-empty -m　message',
  'git checkout filename',
  'git checkout HEAD filename',
  'git checkout commitID filename',
  'git clean -n',
  'git branch',
  'git checkout -b branchname',
  'git merge (-ff) branchname',
  'git merge --no-ff branchname',
  'git reset --hard HEAD',
  'git stash save name',
  'git stash save -u name',
  'git stash list',
  'git stash show stash@{xxx}',
  'git stash apply stash@{xxx}',
  'git stash pop stash@{xxx}',
  'git stash drop stash@{xxx}',
  'git stash clear',
  'git stash save -p',
  'git config --global alias.stash-rename',
  'git stash-rename stash@{0} name',
  'git blame filename',
  'git clone url',
  'git remote',
  'git remote -v',
  'git remote show repositoryname',
  'git remote add repositoryname URL',
  'git pull origin main',
  'git push origin main',
  'git push -d repositoryname',
  'git config push.default matching',
  'git config push.default upstream',
  'git config push.default current',
  'git config push.default simple',
  'function keyname(e)',
  'getCurrentScope',
  'getElementsById',
  'getElementsByClassName',
  'document',
  'justify-content',
  'align-items',
  '@mixin name {}',
  'space-between',
  'grid-template',
  'background-color',
  'Wikipedia',
  'AimTypingMaster',
  'Readme',
  'programming',
  'schedule',
  'border-bottom',
  'padding-bottom',
  'margin-bottom',
  'red blue yellow green pink',
  'orange silver gold purple brown',
  'xxx-1234-xxx',
  'coffeescript',
  'if..elseif..else'
];

let checkTexts = [];

createText();

function createText() {
  // 文字列をランダムに入手
  let rnd = Math.floor(Math.random() * textLists.length);

  // 前の文字列を削除してから次の文字列を表示する
  p.textContent = '';

  // 文字列を1文字ずつに分解して、それぞれにspanタグを挿入
  checkTexts = textLists[rnd].split('').map(function(value) {
    let span = document.createElement('span');

    span.textContent = value;
    p.appendChild(span);

    return span;
  });
}

document.addEventListener('keydown', keyDown);

function keyDown(e) {
  // キーボードからの入力は「e.key」に格納
  if(e.key === checkTexts[0].textContent) {
      checkTexts[0].className = 'add-snow';

  //0 = 1番目の配列要素を削除、次の1文字を比較対象にする
  checkTexts.shift();
  
  //配列要素が空になったら次の問題へ
  if(!checkTexts.length) createText();
  }
}