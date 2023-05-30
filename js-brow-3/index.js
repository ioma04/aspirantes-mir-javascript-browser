      // Obtener elementos del DOM
      const form = document.querySelector('form');
      const nameInput = document.querySelector('#name');
      const emailInput = document.querySelector('#email')
      const section = document.querySelector('section');

      // Manejar el evento de enviar el formulario
      form.addEventListener('submit', (event) => {
        event.preventDefault();
        // Obtener los valores de los inputs
        const name = nameInput.value;
        const email = emailInput.value;

        // Obtener la lista de usuarios guardada en localStorage
        let userList = localStorage.getItem('userList');
        userList = userList ? JSON.parse(userList) : [];

        // Agregar el nuevo usuario a la lista
        const newUser = { name, email };
        userList.push(newUser);

        // Guardar la lista actualizada en localStorage
        localStorage.setItem('userList', JSON.stringify(userList))

        // Mostrar la lista de usuarios en la seccion
        showUserList();
      });

      // Función para mostrar el nombre guardado en localStorage
      function showUserList() {
        const userList = localStorage.getItem('userList');

        if(userList){
            const users = JSON.parse(userList);
            if(users.length > 0) {
                const userListHTML = users.map((user, index) => {
                return (
                `<div>
                    <p>Nombre: ${user.name}</p>
                    <p>Email: ${user.email}</p>
                </div>`
                )}).join('')

                section.innerHTML = userListHTML;

            } else {
                section.innerHTML = '<p>No hay usuarios registrados.</P>' 
            }
        } else {
            section.innerHTML = '<p>No hay usuarios registrados.</P>'
        }

      }

      // Función para borrar el nombre guardado en localStorage
      function deleteName() {
        localStorage.removeItem('name');
        section.textContent = 'No hay datos guardados.';
      }

    //   Crear un boton para borrar el nombre
    function createDeleteButton() {
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Borrar';
        deleteButton.addEventListener('click', deleteName);
        section.appendChild(deleteButton);
    }

      // Mostrar el nombre guardado al cargar la página
      showName();