/* =====================================
   EDUGEST - PROTOTYPE
===================================== */


/* =====================================
   VARIABLES
===================================== */

const loginPage = document.getElementById("loginPage");
const app = document.getElementById("app");

const loginForm = document.getElementById("loginForm");

const userRole = document.getElementById("userRole");
const username = document.getElementById("username");
const password = document.getElementById("password");

const loginMessage = document.getElementById("loginMessage");

const userName = document.getElementById("userName");
const userRoleName = document.getElementById("userRoleName");
const userAvatar = document.getElementById("userAvatar");

const sidebarMenu = document.getElementById("sidebarMenu");

const dashboardContent =
    document.getElementById("dashboardContent");

const pageTitle =
    document.getElementById("pageTitle");

const pageSubtitle =
    document.getElementById("pageSubtitle");

const logoutBtn =
    document.getElementById("logoutBtn");


/* =====================================
   NOMS DES RÔLES
===================================== */

const roleNames = {

    admin: "Administration",

    direction: "Direction pédagogique",

    economat: "Économat / Comptabilité",

    enseignant: "Enseignant",

    parent: "Parent"

};


/* =====================================
   MENU
===================================== */

const menus = {

    admin: [

        {
            id: "dashboard",
            icon: "📊",
            name: "Dashboard"
        },

        {
            id: "students",
            icon: "👨‍🎓",
            name: "Élèves"
        },

        {
            id: "classes",
            icon: "🏫",
            name: "Classes"
        },

        {
            id: "teachers",
            icon: "👨‍🏫",
            name: "Enseignants"
        },

        {
            id: "parents",
            icon: "👨‍👩‍👧",
            name: "Parents"
        },

        {
            id: "economat",
            icon: "💰",
            name: "Économat"
        }

    ],


    direction: [

        {
            id: "dashboard",
            icon: "📊",
            name: "Dashboard"
        },

        {
            id: "classes",
            icon: "🏫",
            name: "Classes"
        },

        {
            id: "attendance",
            icon: "🕐",
            name: "Présences"
        },

        {
            id: "grades",
            icon: "📝",
            name: "Notes"
        },

        {
            id: "exams",
            icon: "📚",
            name: "Examens"
        },

        {
            id: "reports",
            icon: "📄",
            name: "Bulletins"
        }

    ],


    economat: [

        {
            id: "dashboard",
            icon: "📊",
            name: "Dashboard"
        },

        {
            id: "payments",
            icon: "💵",
            name: "Paiements"
        },

        {
            id: "students",
            icon: "👨‍🎓",
            name: "Élèves"
        },

        {
            id: "receipts",
            icon: "🧾",
            name: "Reçus"
        },

        {
            id: "reports",
            icon: "📊",
            name: "Rapports"
        }

    ],


    enseignant: [

        {
            id: "dashboard",
            icon: "📊",
            name: "Dashboard"
        },

        {
            id: "students",
            icon: "👨‍🎓",
            name: "Mes élèves"
        },

        {
            id: "attendance",
            icon: "🕐",
            name: "Présences"
        },

        {
            id: "homework",
            icon: "📚",
            name: "Devoirs"
        },

        {
            id: "grades",
            icon: "📝",
            name: "Notes"
        },

        {
            id: "exams",
            icon: "📋",
            name: "Examens"
        }

    ],


    parent: [

        {
            id: "dashboard",
            icon: "📊",
            name: "Accueil"
        },

        {
            id: "children",
            icon: "👨‍👩‍👧",
            name: "Mes enfants"
        },

        {
            id: "homework",
            icon: "📚",
            name: "Devoirs"
        },

        {
            id: "attendance",
            icon: "🕐",
            name: "Présences"
        },

        {
            id: "finance",
            icon: "💰",
            name: "Situation financière"
        },

        {
            id: "report",
            icon: "📄",
            name: "Bulletin"
        }

    ]

};


/* =====================================
   CONNEXION
===================================== */

loginForm.addEventListener("submit", function(event) {

    event.preventDefault();


    const role = userRole.value;

    const name =
        username.value.trim();


    if (!name || !password.value) {

        loginMessage.textContent =
            "Veuillez remplir tous les champs.";

        return;
    }


    /* Sauvegarde de la session */

    localStorage.setItem(
        "edugest_role",
        role
    );

    localStorage.setItem(
        "edugest_user",
        name
    );


    openApplication(
        role,
        name
    );

});


/* =====================================
   OUVRIR APPLICATION
===================================== */

function openApplication(role, name) {

    loginPage.classList.add("hidden");

    app.classList.remove("hidden");


    userName.textContent =
        name;

    userRoleName.textContent =
        roleNames[role];

    userAvatar.textContent =
        name.charAt(0).toUpperCase();


    createMenu(role);


    showDashboard(role);

}


/* =====================================
   CRÉER MENU
===================================== */

function createMenu(role) {

    sidebarMenu.innerHTML = "";


    menus[role].forEach(function(item, index) {

        const button =
            document.createElement("button");


        button.innerHTML =
            `${item.icon} ${item.name}`;


        button.dataset.page =
            item.id;


        if (index === 0) {

            button.classList.add("active");

        }


        button.addEventListener(
            "click",
            function() {

                document
                    .querySelectorAll(
                        "#sidebarMenu button"
                    )
                    .forEach(btn => {

                        btn.classList.remove(
                            "active"
                        );

                    });


                button.classList.add(
                    "active"
                );


                showPage(
                    role,
                    item.id
                );

            }
        );


        sidebarMenu.appendChild(
            button
        );

    });

}


/* =====================================
   DASHBOARD
===================================== */

function showDashboard(role) {

    showPage(
        role,
        "dashboard"
    );

}


/* =====================================
   AFFICHER UNE PAGE
===================================== */

function showPage(role, page) {


    switch (role) {


        /* =============================
           ADMINISTRATION
        ============================= */

        case "admin":

            adminPage(page);

            break;


        /* =============================
           DIRECTION
        ============================= */

        case "direction":

            directionPage(page);

            break;


        /* =============================
           ECONOMAT
        ============================= */

        case "economat":

            economatPage(page);

            break;


        /* =============================
           ENSEIGNANT
        ============================= */

        case "enseignant":

            teacherPage(page);

            break;


        /* =============================
           PARENT
        ============================= */

        case "parent":

            parentPage(page);

            break;

    }

}


/* =====================================
   ADMINISTRATION
===================================== */

function adminPage(page) {


    if (page === "dashboard") {

        pageTitle.textContent =
            "Dashboard Administration";

        pageSubtitle.textContent =
            "Vue générale de l'établissement";


        dashboardContent.innerHTML = `

            <div class="stats-grid">

                ${stat(
                    "👨‍🎓",
                    "350",
                    "Élèves"
                )}

                ${stat(
                    "🏫",
                    "18",
                    "Classes"
                )}

                ${stat(
                    "👨‍🏫",
                    "25",
                    "Enseignants"
                )}

                ${stat(
                    "👨‍👩‍👧",
                    "320",
                    "Parents"
                )}

            </div>


            <div class="content-grid">

                <div class="card">

                    <div class="card-header">

                        <h3>Derniers élèves inscrits</h3>

                        <button>
                            Voir tous
                        </button>

                    </div>


                    ${studentsTable()}

                </div>


                <div class="card">

                    <div class="card-header">

                        <h3>Résumé</h3>

                    </div>

                    <p>
                        🟢 Établissement actif
                    </p>

                    <br>

                    <p>
                        📅 Année scolaire :
                        <strong>2026-2027</strong>
                    </p>

                    <br>

                    <p>
                        📚 Classes ouvertes :
                        <strong>18</strong>
                    </p>

                </div>

            </div>

        `;

        return;
    }


    pageTitle.textContent =
        "Administration";

    pageSubtitle.textContent =
        "Gestion administrative";


    dashboardContent.innerHTML = `

        <div class="card">

            <h3>${page}</h3>

            <br>

            <p>
                Cette section sera développée
                dans la prochaine version
                du prototype.
            </p>

        </div>

    `;

}


/* =====================================
   DIRECTION PEDAGOGIQUE
===================================== */

function directionPage(page) {


    pageTitle.textContent =
        "Direction pédagogique";

    pageSubtitle.textContent =
        "Suivi académique de l'établissement";


    if (page === "dashboard") {

        dashboardContent.innerHTML = `

            <div class="stats-grid">

                ${stat(
                    "👨‍🎓",
                    "350",
                    "Élèves"
                )}

                ${stat(
                    "📚",
                    "18",
                    "Classes"
                )}

                ${stat(
                    "📈",
                    "78%",
                    "Moyenne générale"
                )}

                ${stat(
                    "🕐",
                    "94%",
                    "Présence"
                )}

            </div>


            <div class="content-grid">

                <div class="card">

                    <div class="card-header">

                        <h3>
                            Performance des classes
                        </h3>

                    </div>

                    ${classesTable()}

                </div>


                <div class="card">

                    <div class="card-header">

                        <h3>
                            Alertes pédagogiques
                        </h3>

                    </div>

                    <p>
                        🔴 4 élèves sous 50
                    </p>

                    <br>

                    <p>
                        🟡 7 élèves avec
                        absences répétées
                    </p>

                    <br>

                    <p>
                        🟢 92% des notes saisies
                    </p>

                </div>

            </div>

        `;

        return;

    }


    dashboardContent.innerHTML = `

        <div class="card">

            <h3>
                ${page}
            </h3>

            <br>

            <p>
                Module pédagogique en cours
                de développement.
            </p>

        </div>

    `;

}


/* =====================================
   ECONOMAT
===================================== */

function economatPage(page) {


    pageTitle.textContent =
        "Économat / Comptabilité";

    pageSubtitle.textContent =
        "Gestion des paiements scolaires";


    if (page === "dashboard") {

        dashboardContent.innerHTML = `

            <div class="stats-grid">

                ${stat(
                    "💰",
                    "12.5M",
                    "Montant encaissé"
                )}

                ${stat(
                    "🟢",
                    "245",
                    "Élèves à jour"
                )}

                ${stat(
                    "🔴",
                    "105",
                    "Élèves avec solde"
                )}

                ${stat(
                    "🏦",
                    "7.8M",
                    "Paiements banque"
                )}

            </div>


            <div class="content-grid">

                <div class="card">

                    <div class="card-header">

                        <h3>
                            Derniers paiements
                        </h3>

                        <button>
                            Voir tous
                        </button>

                    </div>

                    ${paymentsTable()}

                </div>


                <div class="card">

                    <div class="card-header">

                        <h3>
                            Alertes
                        </h3>

                    </div>

                    <p>
                        🔴 105 élèves ont
                        encore un solde.
                    </p>

                    <br>

                    <p>
                        🟡 15 paiements
                        bancaires à vérifier.
                    </p>

                </div>

            </div>

        `;

        return;

    }


    dashboardContent.innerHTML = `

        <div class="card">

            <h3>
                ${page}
            </h3>

            <br>

            <p>
                Module financier en cours
                de développement.
            </p>

        </div>

    `;

}


/* =====================================
   ENSEIGNANT
===================================== */

function teacherPage(page) {


    pageTitle.textContent =
        "Espace Enseignant";

    pageSubtitle.textContent =
        "Gestion de votre classe";


    if (page === "dashboard") {

        dashboardContent.innerHTML = `

            <div class="stats-grid">

                ${stat(
                    "👨‍🎓",
                    "24",
                    "Mes élèves"
                )}

                ${stat(
                    "🟢",
                    "22",
                    "Présents"
                )}

                ${stat(
                    "🔴",
                    "1",
                    "Absents"
                )}

                ${stat(
                    "🟡",
                    "1",
                    "Retard"
                )}

            </div>


            <div class="card">

                <div class="card-header">

                    <h3>
                        Ma classe
                    </h3>

                    <button>
                        3e année — Section B
                    </button>

                </div>

                ${studentsTable()}

            </div>

        `;

        return;

    }


    dashboardContent.innerHTML = `

        <div class="card">

            <h3>
                ${page}
            </h3>

            <br>

            <p>
                Module enseignant en cours
                de développement.
            </p>

        </div>

    `;

}


/* =====================================
   PARENT
===================================== */

function parentPage(page) {


    pageTitle.textContent =
        "Espace Parent";

    pageSubtitle.textContent =
        "Suivi de vos enfants";


    if (page === "dashboard") {

        dashboardContent.innerHTML = `

            <div class="card">

                <div class="card-header">

                    <h3>
                        👧 Sarah Pierre
                    </h3>

                    <span class="badge badge-blue">
                        3e année - Section B
                    </span>

                </div>

                <p>
                    🟢 Présence :
                    96%
                </p>

                <br>

                <p>
                    📚 Devoirs :
                    8/10
                </p>

                <br>

                <p>
                    💰 Solde :
                    <strong>15 000 HTG</strong>
                </p>

                <br>

                <span class="badge badge-red">
                    🔒 Bulletin indisponible
                </span>

            </div>


            <div class="card">

                <div class="card-header">

                    <h3>
                        Dernières notes de devoirs
                    </h3>

                </div>

                <table>

                    <tr>
                        <th>Matière</th>
                        <th>Activité</th>
                        <th>Note</th>
                    </tr>

                    <tr>
                        <td>Mathématiques</td>
                        <td>Devoir 3</td>
                        <td>
                            <span class="badge badge-green">
                                18/20
                            </span>
                        </td>
                    </tr>

                    <tr>
                        <td>Français</td>
                        <td>Exercice 4</td>
                        <td>
                            <span class="badge badge-green">
                                16/20
                            </span>
                        </td>
                    </tr>

                </table>

            </div>

        `;

        return;

    }


    dashboardContent.innerHTML = `

        <div class="card">

            <h3>
                ${page}
            </h3>

            <br>

            <p>
                Espace parent en cours
                de développement.
            </p>

        </div>

    `;

}


/* =====================================
   COMPOSANTS
===================================== */

function stat(icon, number, title) {

    return `

        <div class="stat-card">

            <div class="icon">
                ${icon}
            </div>

            <h3>
                ${number}
            </h3>

            <p>
                ${title}
            </p>

        </div>

    `;

}


function studentsTable() {

    return `

        <table>

            <tr>
                <th>Élève</th>
                <th>Classe</th>
                <th>Statut</th>
            </tr>

            <tr>
                <td>Jean Pierre</td>
                <td>3e A</td>
                <td>
                    <span class="badge badge-green">
                        Actif
                    </span>
                </td>
            </tr>

            <tr>
                <td>Sarah Pierre</td>
                <td>3e B</td>
                <td>
                    <span class="badge badge-green">
                        Actif
                    </span>
                </td>
            </tr>

            <tr>
                <td>Marie Joseph</td>
                <td>2e A</td>
                <td>
                    <span class="badge badge-yellow">
                        Nouveau
                    </span>
                </td>
            </tr>

        </table>

    `;

}


function classesTable() {

    return `

        <table>

            <tr>
                <th>Classe</th>
                <th>Élèves</th>
                <th>Moyenne</th>
            </tr>

            <tr>
                <td>1re A</td>
                <td>25</td>
                <td>76%</td>
            </tr>

            <tr>
                <td>1re B</td>
                <td>24</td>
                <td>74%</td>
            </tr>

            <tr>
                <td>3e B</td>
                <td>24</td>
                <td>82%</td>
            </tr>

        </table>

    `;

}


function paymentsTable() {

    return `

        <table>

            <tr>
                <th>Élève</th>
                <th>Montant</th>
                <th>Mode</th>
                <th>Statut</th>
            </tr>

            <tr>
                <td>Jean Pierre</td>
                <td>30 000 HTG</td>
                <td>Banque</td>
                <td>
                    <span class="badge badge-green">
                        Validé
                    </span>
                </td>
            </tr>

            <tr>
                <td>Sarah Pierre</td>
                <td>20 000 HTG</td>
                <td>École</td>
                <td>
                    <span class="badge badge-green">
                        Validé
                    </span>
                </td>
            </tr>

            <tr>
                <td>Marie Joseph</td>
                <td>15 000 HTG</td>
                <td>Banque</td>
                <td>
                    <span class="badge badge-yellow">
                        Vérification
                    </span>
                </td>
            </tr>

        </table>

    `;

}


/* =====================================
   DÉCONNEXION
===================================== */

logoutBtn.addEventListener(
    "click",
    function() {

        localStorage.removeItem(
            "edugest_role"
        );

        localStorage.removeItem(
            "edugest_user"
        );


        app.classList.add("hidden");

        loginPage.classList.remove(
            "hidden"
        );


        loginForm.reset();

    }
);


/* =====================================
   RESTAURER SESSION
===================================== */

window.addEventListener(
    "load",
    function() {

        const savedRole =
            localStorage.getItem(
                "edugest_role"
            );

        const savedUser =
            localStorage.getItem(
                "edugest_user"
            );


        if (
            savedRole &&
            savedUser
        ) {

            openApplication(
                savedRole,
                savedUser
            );

        }

    }
);
