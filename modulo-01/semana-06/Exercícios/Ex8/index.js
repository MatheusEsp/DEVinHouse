async function buscaUsuarios() {
    try{
        const resultado = await fetch(`https://randomuser.me/api/?results=4`)
        const {results} = await resultado.json()

        const lista = document.getElementById('list')
        lista.innerHTML = ''

        results.forEach((user) => {
            const li = document.createElement('li')
            const container = document.createElement('div')
            const info = document.createElement('div')

            container.classList.add('container');
            info.classList.add('info')

            /* Criando cartões de usuarios */
            const nome = document.createElement('p')
            nome.innerText = `${user.name.title} ${user.name.first} ${user.name.last}`

            const email = document.createElement('p')
            email.innerText = user.email

            const endereco = document.createElement('p')
            endereco.innerText = `${user.location.street.name} - ${user.location.street.number} - ${user.location.city} - ${user.location.state} - ${user.location.country}`

            const foto = document.createElement('img')
            foto.src = user.picture.large

           container.appendChild(foto)
           info.appendChild(nome)
           info.appendChild(email)
           info.appendChild(endereco)
           container.appendChild(info)
           li.appendChild(container)
           lista.appendChild(li)
        });
    } catch (error){
        console.error(error)
    }
}

buscaUsuarios()