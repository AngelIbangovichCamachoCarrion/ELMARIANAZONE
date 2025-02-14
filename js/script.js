document.addEventListener("DOMContentLoaded", function () {
 

  let posts = [
    { username: "AngelCC", name: "Angel Camacho", image: "resources/2.png", caption: "Me gusta el café pero me gustas más tú 😜!", likes: 120 },
    { username: "Poncho", name: "Alfonso Castillo", image: "resources/3.png", caption: "Vos pisado, que de ahuevo la vista cerote 😜", likes: 98 },
    { username: "CesarBerrones", name: "CesarRicardo", image: "resources/4.png", caption: "Les prometo que di lo mejor de mí, este viaje fue de aprendizaje y de disfrutar! ❤️", likes: 200 },
    { username: "DanielGG", name: "DanielGuerrero", image: "resources/5.png", caption: "Por fin el patrón portando la poderosa de el América", likes: 900 },
    { username: "ItzelCC", name: "AuroraCamacho", image: "resources/6.png", caption: "Like y abro mi canal con tutoriales de maquillaje como este. Feliz halloween 🎃🦁", likes:300},
  ];

  function loadPosts() {
    let container = document.getElementById("post-container");
    posts.forEach((post, index) => {
      let postHTML = `
        <div class='post'>
          <div class='post__header'>
            <h5>@${post.username} - ${post.name}</h5>
          </div>
          <img src='${post.image}' class='post__image' alt='imagen'>
          <div class='post__footer'>
            <p>${post.caption}</p>
            <div class='post__actions'>
              <button class="like-button" data-index="${index}">❤️</button>
              <button class="comment-button"><i class="fas fa-comment"></i></button>
              <button class="save-button"><i class="fas fa-bookmark"></i></button>
            </div>
            <p><small><span class='like-count' id="like-count-${index}">${post.likes}</span> likes</small></p>
          </div>
        </div>`;

      container.innerHTML += postHTML;
    });

    // Agregar el manejador de eventos para los botones de like
    document.querySelectorAll('.like-button').forEach(button => {
      button.addEventListener('click', function () {
        let index = button.getAttribute('data-index');
        posts[index].likes++; // Incrementar los likes en el array de posts
        document.getElementById(`like-count-${index}`).innerText = posts[index].likes; // Actualizar el contador de likes en el DOM
      });
    });
  }
  
  loadPosts();
});
