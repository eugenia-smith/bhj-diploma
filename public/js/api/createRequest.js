/**
 * Основная функция для совершения запросов
 * на сервер.
 * */
const createRequest = (options = {}) => {
  const xhr = new XMLHttpRequest;
  xhr.responseType = 'json'

  if (options.method == 'GET') {
    url = options.url
    // TODO data
    xhr.open('GET', url, async=true);
    xhr.send(null);
  } else {
    formData = new FormData;
    // TODO data
    formData.append( 'hello', 'world' );
    formData.append( 'iron', 'maiden' );
    xhr.open( 'POST', options.url, async=true);
    xhr.send( formData );
  }

  xhr.onload = () => {
    if (options.callback) {
      options.callback(err=null, data=xhr.response) 
    }
  }
  xhr.onerror = () => {
    console.log("Hello")
    if (options.callback) {
      options.callback(err=xhr.status, data=null)
    }
    console.log("Bye")
  }

  return xhr;
};