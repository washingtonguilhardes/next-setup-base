Array.from(document.getElementsByTagName('img')).map(img => {
  // const button = document.createElement('button');
  // const el = document.createElement('div');
  // el.append(button);
  // el.append(img);
  // button.onclick = function () {
  //   console.log(img);
  // };
  return img.parentElement;
});
