async function explore() {
  const url = document.URL + 'explore';
  const input = document.getElementById('user_input').value;
  const output = document.getElementById('user_output');

  const file = new File([input], 'file.txt', {
    type: 'text/plain;charset=utf-8',
  });
  const data = new FormData();
  data.append('file', file, 'file.txt');

  const res = await fetch(url, {
    method: 'post',
    body: data,
  });

  if (res.status == 200) {
    output.innerText = await res.text();
  } else {
    window.alert('Wrong input format', res.text());
  }
}
