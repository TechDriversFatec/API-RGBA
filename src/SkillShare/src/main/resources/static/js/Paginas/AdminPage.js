/**
 * ADM -> Função responsável por fornecer um array com os objetos de configurações para cada botão
 * da side bar
 * 
 * @author Rafael Furtado
 * @returns Configurações dos botões da side bar
 */
function getSideBarOptionsAdmin(){
    let options = [
    {
        name: "Cursos",
        icon: "chalkboard-teacher",
        tabIndex: "2",
        title: "Clique aqui para exibir a janela de cursos",
        subOptions: [
            {
                textValue: "Nenhuma opção disponível no momento",
                onclick: function() {
                    console.log("Cliquei na opção");
                }
            }
        ],
        onclick: function() {
            console.log("mostrando cursos");

            hideAllContent();
        }
    }, 
    {
        name: "Biblioteca",
        icon: "book",
        tabIndex: "3",
        title: "Clique aqui para exibir a biblioteca",
        subOptions: [
            {
                textValue: "Nenhuma opção disponível no momento",
                onclick: function() {
                    console.log("Cliquei na opção");
                }
            }
        ],
        onclick: function() {
            console.log("mostrando biblioteca");

        }
    },
    {
        name: "Banco de Questões",
        icon: "file-alt",
        tabIndex: "4",
        title: "Clique aqui para exibir o banco de questões",
        subOptions: [
            {
                textValue: "Nenhuma opção disponível no momento",
                onclick: function() {
                    console.log("Cliquei na opção");
                }
            }
        ],
        onclick: function() {
            console.log("mostrando banco de questões");

            hideAllContent();
        }
    },
    {
        name: "Usuários",
        icon: "users",
        tabIndex: "5",
        title: "Clique aqui para exibir as opções de Usuários",
        subOptions: [
            {
                textValue: "Cadastrar alunos",
                onclick: function() {
                    hideAllContent();

                    beautyTable.refreshTable("tabelaUsuarios");
        
                    showContent("cadastrarUsuario");
                }
            },
            {
                textValue: "Visualizar alunos",
                onclick: function() {
                    hideAllContent();

                    beautyTable.refreshTable("tabelaUsuarios");
        
                    showContent("mostrarAlunos");

                }
            }
        ],
        onclick: function() {
            console.log("Cliquei ");

        }
    },
    {
        name: "Dashboard",
        icon: "chart-line",
        tabIndex: "6",
        title: "Clique aqui para exibir o dashboard",
        subOptions: [
            {
                textValue: "Nenhuma opção disponível no momento",
                onclick: function() {
                    console.log("Cliquei na opção");
                }
            }
        ],
        onclick: function() {
            console.log("mostrando dashboard");

            hideAllContent();
        }
    },
    {
        name: "Minha conta",
        icon: "user-circle",
        tabIndex: "7",
        title: "Clique aqui para exibir informações da sua conta",
        subOptions: [
            {
                textValue: "Nenhuma opção disponível no momento",
                onclick: function() {
                    console.log("Cliquei na opção");
                }
            }
        ],
        onclick: function() {
            console.log("mostrando minha conta");

            hideAllContent();
        }
    },
];

    return options;
}

/**
 * GESTOR -> Função responsável por fornecer um array com os objetos de configurações para cada botão
 * da side bar
 * 
 * @author Rafael Furtado
 * @returns Configurações dos botões da side bar
 */
function getSideBarOptionsGestor(){
    let options = [
    {
        name: "Cursos",
        icon: "chalkboard-teacher",
        tabIndex: "2",
        title: "Clique aqui para exibir a janela de cursos",
        subOptions: [
            {
                textValue: "Nenhuma opção disponível no momento",
                onclick: function() {
                    console.log("Cliquei na opção");
                }
            }
        ],
        onclick: function() {
            console.log("mostrando cursos");
        }
        
    }, 
    {
        name: "Biblioteca",
        icon: "book",
        tabIndex: "3",
        title: "Clique aqui para exibir a biblioteca",
        subOptions: [
            {
                textValue: "Nenhuma opção disponível no momento",
                onclick: function() {
                    console.log("Cliquei na opção");
                }
            }
        ],
        onclick: function() {
            console.log("mostrando biblioteca");

        }
    },
    {
        name: "Banco de Questões",
        icon: "file-alt",
        tabIndex: "4",
        title: "Clique aqui para exibir o banco de questões",
        subOptions: [
            {
                textValue: "Nenhuma opção disponível no momento",
                onclick: function() {
                    console.log("Cliquei na opção");
                }
            }
        ],
        onclick: function() {
            console.log("mostrando banco de questões");

        }
    },
    {
        name: "Alunos",
        icon: "users",
        tabIndex: "5",
        title: "Clique aqui para expandir o menu de alunos",
        subOptions: [
            {
                textValue: "Cadastrar alunos",
                onclick: function() {
                    hideAllContent();

                    beautyTable.refreshTable("tabelaUsuarios");
        
                    showContent("cadastrarUsuario");
                }
            },
            {
                textValue: "Visualizar alunos",
                onclick: function() {
                    hideAllContent();

                    beautyTable.refreshTable("tabelaUsuarios");
        
                    showContent("mostrarAlunos");

                }
            }
        ],
        onclick: function() {
            console.log("Cliquei");

        }
    },
    {
        name: "Eventos",
        icon: "calendar-day",
        tabIndex: "6",
        title: "Clique aqui para exibir o cadastro de eventos",
        subOptions: [
            {
                textValue: "Nenhuma opção disponível no momento",
                onclick: function() {
                    console.log("Cliquei na opção");
                }
            }
        ],
        onclick: function() {

			console.log("eventos!");

        }
    },
    {
        name: "Destaques",
        icon: "newspaper",
        tabIndex: "7",
        title: "Clique aqui para exibir o cadastro de destaques",
        subOptions: [
            {
                textValue: "Nenhuma opção disponível no momento",
                onclick: function() {
                    console.log("Cliquei na opção");
                }
            }
        ],
        onclick: function() {

			console.log("destaques!");

        }
    },
    {
        name: "Pílulas",
        icon: "capsules",
        tabIndex: "8",
        title: "Clique aqui para exibir o cadastro de pílulas de conhecimento",
        subOptions: [
            {
                textValue: "Nenhuma opção disponível no momento",
                onclick: function() {
                    console.log("Cliquei na opção");
                }
            }
        ],
        onclick: function() {

			console.log("pilulas de conhecimento!");

        }
    },
    {
        name: "Dashboard",
        icon: "chart-line",
        tabIndex: "9",
        title: "Clique aqui para exibir o dashboard",
        subOptions: [
            {
                textValue: "Nenhuma opção disponível no momento",
                onclick: function() {
                    console.log("Cliquei na opção");
                }
            }
        ],
        onclick: function() {
            console.log("mostrando dashboard");

        }
    },
    {
        name: "Minha conta",
        icon: "user-circle",
        tabIndex: "10",
        title: "Clique aqui para exibir informações da sua conta",
        subOptions: [
            {
                textValue: "Nenhuma opção disponível no momento",
                onclick: function() {
                    console.log("Cliquei na opção");
                }
            }
        ],
        onclick: function() {
            console.log("mostrando minha conta");

        }
    }, 
];

    return options;
}

/**
 * Esconde qualquer janela que estiver aberta na área de exibição de conteúdo da página
 * 
 * @author Rafael Furtado
 * @returns undefined
 */
function hideAllContent() {
    let showedContents = document.getElementsByClassName("show");

    for (let i = 0; i < showedContents.length; i++) {
        const content = showedContents[i];
        
        content.classList.remove("show");
        content.classList.add("hide");

    }

}


/**
 * Exibe um conteúdo específico na área de exibição de conteúdo da página
 * 
 * @author Rafael Furtado
 * @param {string} contentId ID do elemento que contém o conteúdo a ser exibido
 * @returns undefined
 */
function showContent(contentId) {
    let optionContent = document.getElementById(contentId);
    optionContent.classList.add("show");
    optionContent.classList.remove("hide");

}

async function registerUser(event) {
    event.preventDefault();

    let select = document.getElementById("selectUserType");

    let option = select.value.toLowerCase();

    let allowRegister = false;
    let registerPath = "";

    switch (option) {
        case "aluno":
            allowRegister = true;
            registerPath = "/aluno/cadastrar";
            break;

        case "administrador":
            allowRegister = true;
            registerPath = "/adm/cadastrar";
            break;
            
        case "gestor":
            allowRegister = true;
            registerPath = "/gestor/cadastrar";
            break;

        case "tutor":
            allowRegister = true;
            registerPath = "/tutor/cadastrar";
            break;
    
        default:
            alert("Escolha um tipo de usuário para cadastrar!");
            break;
    }

    if(allowRegister){
        let pass = document.getElementById("senhaCadastro").value;
        let rePass = document.getElementById("confirmarSenhaCadastro").value;
    
        if(pass == rePass){
            let user = new Usuario();
    
            user.setNome(document.getElementById("nomeCadastro").value);
            user.setEmail(document.getElementById("emailCadastro").value);
            user.setCpf(document.getElementById("cpfCadastro").value);
            user.setSenha(pass);
    
            let response = await serverRequester.fazerPost(registerPath, user.toData());
    
            if(response["ok"] == true){
                alert("Cadastrado com sucesso!");
    
            }else{
                alert("Ocorreu um erro ao cadastrar o cliente");
    
            }
    
        }else{
            alert("Senha diferentes!");
    
        }

    }

}

function registerBook(event) {
    event.preventDefault();

    console.log(event);
    console.log(event.target);
}

// Adiciona um listener global responsável por mudar a cor dos botões da side bar que forem selecionados
//ainda não está funcionando como deveria :c
/*
window.addEventListener("click", function (event) {
    let clickTarget = event.target;
    if(event.target.tagName == "SPAN" || event.target.tagName == "LABEL"){
        clickTarget = event.target.parentElement;
    }

    console.log(clickTarget);

    let selections = document.getElementsByClassName("optionContainerSelected");
    for (let i = 0; i < selections.length; i++) {
        const selection = selections[i];
        
        selection.classList.remove("optionContainerSelected")
    }
    
    clickTarget.classList.add("optionContainerSelected");

});
*/

function seeInfo() {
    let selectedRow = document.getElementsByClassName("selectedRow")[0];

    console.log(selectedRow);
}

function getSideBarOptions(perfil) {
	switch (perfil) {
		case "gestor":
			return getSideBarOptionsGestor();
		case "admin":
			return getSideBarOptionsAdmin();
	}
}

function register() {

}