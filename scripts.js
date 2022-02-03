let checkbox = document.getElementById('switch-button')
let text = document.getElementById("text")

const Toggle = {                                              // O toggle deve ser o primeiro a rodar para o funcionamento perfeito da aplicação
    darkMode() {                                              // Liga o dark mode
        document.querySelector("body")                        // Busca o body no CSS e adiciona o seletor "dark-mode"
        .classList
        .add("dark-mode")

        document.querySelector("p")
        .classList
        .add("dark-mode")

        text.innerHTML = "Dark Mode"                             // Mudando o HTML interior do parágrafo

        sessionStorage.setItem("mode", "dark")                // Jogando no sessionStorage o dark mode
    },

    whiteMode() {                                             // Desliga o dark mode
        document.querySelector("body")                        // Selecionando o body para alterar ele
        .classList
        .remove("dark-mode")
        
        document.querySelector("p")                           // Selecionando o parágrafo para alterar ele
        .classList
        .remove("dark-mode")

        text.innerHTML = "White Mode"                            // Mudando o HTML interior do parágrafo

        sessionStorage.setItem("mode", "white")               // Jogando no sessionStorage o white mode
    }
}

checkbox.addEventListener("change", function() {              // Colocando um eventListener na checkbox para rodar uma função quando o estado dela mudar
if (checkbox.checked) {
    Toggle.darkMode();                                        // Se a checkbox estiver ativada ela roda essa função
} else {
    Toggle.whiteMode();                                       // Se a checkbox estivar desativada ela roda essa função
}});

