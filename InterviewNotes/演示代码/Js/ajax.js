function ajax(url) {
  const p = new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', url, true);
    xhr.send(null);

    xhr.onreadystatechange = function () {
      if (xhr.readyState === 4) {
        if (xhr.status === 200) {
          resolve(JSON.parse(xhr.responseText));
        } else if (xhr.status === 404) {
          reject(new Error("404"));
        }
      }
    };
  });
  return p;
}


const url = "data.json";
ajax(url)
  .then((response) => {
    console.log(response);
  })
  .catch((err) => console.log(err));

