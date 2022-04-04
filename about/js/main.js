document.getElementById('hamburger-btn').addEventListener('click', hamburger, false);

function hamburger() {
  document.getElementById('js-line1').classList.toggle('line_1');
  document.getElementById('js-line2').classList.toggle('line_2');
  document.getElementById('js-line3').classList.toggle('line_3');
  document.getElementById('nav').classList.toggle('in');
  document.querySelector('body').classList.toggle('hidden');
}

function toggle() {
  const content = this.nextElementSibling;
  content.classList.toggle('is-open');
}

const tabs = document.querySelectorAll('.tab')
for(let i = 0; i < tabs.length; i++) {
  tabs[i].addEventListener('click', tabSwitch);
}

function tabSwitch() {
  document.getElementsByClassName('is-active')[0].classList.remove('is-active');
  this.classList.add('is-active');

  document.getElementsByClassName('is-show')[0].classList.remove('is-show');
  // tabs の中身を配列に形成し直して新しい定数に代入する
  const arrayTabs = Array.prototype.slice.call(tabs);
  // クリックしたインデックス番号を取得
  const index = arrayTabs.indexOf(this);
  document.getElementsByClassName('panel')[index].classList.add('is-show');
}