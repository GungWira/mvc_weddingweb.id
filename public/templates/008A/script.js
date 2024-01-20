document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('form'); // Ganti dengan ID formulir Anda
    
    form.addEventListener('submit', async function (event) {
      event.preventDefault();

      let data = {
        name: form.firstElementChild.value,
        message: form.firstElementChild.nextElementSibling.nextElementSibling.value
      }
      let options = {
          method: 'POST',
          headers: {
              "Content-type": "application/json; charset=UTF-8"
          },
          body: JSON.stringify(data)
      }
      const promise = fetch('/template/008A', options); // inget ubah database
      promise.then(response => {
          if(!response.ok){
              console.error(response)
          } else {
              location.reload()
          }
      })
      
    });
  });

  // SIMPLE PROTECT
  document.addEventListener('contextmenu', event => event.preventDefault());

