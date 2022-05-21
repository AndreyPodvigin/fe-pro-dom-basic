export const paintCards = () => {
  const oddLis = document.querySelectorAll('.item:nth-child(odd)');
  for (let element of oddLis) {
    element.style.backgroundColor = 'red';
  };
};

export const findElement = () => {
  const allLis = document.querySelectorAll('.item');
  let firstLi = document.querySelector('ul > li:first-child');
  for (let i = 0; i < allLis.length; i++) {
    let nextLi = firstLi.nextElementSibling;
    if (nextLi.matches('.item.likedItem')) {
      nextLi.style.backgroundColor = 'blue';
    } else {
      firstLi = nextLi;
    }
  }
};
