const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "brandNavy": "#0B2638",
  "brandGold": "#F3D941",
  "footerRed": "#850B0E",
  "cardRadius": "34px",
  "density": 1
}/*EDITMODE-END*/;

const ASSETS = {
  topLogo: "assets/logo-superior.png",
  footerLogo: "assets/logo-inferior.png",
  heroImage: "assets/hero.jpg",
  newsOne: "assets/noticia1.jpg",
  newsTwo: "assets/noticia2.jpg"
};


const emphasisLines = [
  {
    title: "Desarrollo de Software",
    text: "Diseña, construye y despliega soluciones web, móviles y empresariales con prácticas modernas de ingeniería."
  },
  {
    title: "Analítica de Datos",
    text: "Convierte datos académicos y organizacionales en visualizaciones, modelos predictivos y decisiones accionables."
  },
  {
    title: "Ciberseguridad",
    text: "Protege infraestructuras, aplicaciones y datos mediante análisis de riesgos, pruebas y controles de seguridad."
  }
];

const news = [
  {
    image: ASSETS.newsOne,
    title: "Nuevo calendario para inscripción de líneas de énfasis",
    text: "Consulta fechas, requisitos y recomendaciones para seleccionar tu ruta académica.",
    date: "Actualización académica"
  },
  {
    image: ASSETS.newsTwo,
    title: "Encuentro con docentes asesores del programa",
    text: "Espacio para resolver dudas sobre perfiles, proyectos y continuidad curricular.",
    date: "Comunidad UdeMedellín"
  }
];

function applyAssets() {
  document.querySelectorAll("[data-asset]").forEach((slot) => {
    const key = slot.dataset.asset;
    const src = ASSETS[key];
    if (!src) return;
    slot.replaceChildren(Object.assign(document.createElement("img"), {
      src,
      alt: slot.getAttribute("aria-label") || "Imagen institucional"
    }));
  });
}

function renderEmphasisLines() {
  const container = document.querySelector("#emphasis-lines");
  container.innerHTML = emphasisLines.map((line) => `
    <article class="program-card">
      <div class="card-icon" aria-hidden="true"><span></span></div>
      <div>
        <h3>${line.title}</h3>
        <p>${line.text}</p>
        <button class="text-link" type="button">Ver más</button>
      </div>
    </article>
  `).join("");
}

function renderNews() {
  const container = document.querySelector("#news-list");
  container.innerHTML = news.map((item) => `
    <article class="news-item">
      <div class="image-slot news-image" aria-label="Imagen de noticia">
        ${item.image ? `<img src="${item.image}" alt="Imagen de noticia" />` : "<span>Imagen de noticia</span>"}
      </div>
      <div class="news-copy">
        <h3>${item.title}</h3>
        <p>${item.text}</p>
        <time>${item.date}</time>
      </div>
    </article>
  `).join("");
}

function init() {
  applyAssets();
  renderEmphasisLines();
  renderNews();
}

document.addEventListener("DOMContentLoaded", init);

const homeCards = {
  sistemas:[
    ["Inteligencia Artificial","Machine learning, automatización y modelos inteligentes.","https://cdn-icons-png.flaticon.com/512/8637/8637101.png"],
    ["Desarrollo Web","Frontend, backend y aplicaciones modernas.","https://cdn-icons-png.flaticon.com/512/1055/1055687.png"],
    ["Ciberseguridad","Protección de sistemas y hacking ético.","https://cdn-icons-png.flaticon.com/512/2092/2092663.png"],
    ["Data Science","Análisis inteligente de datos.","https://cdn-icons-png.flaticon.com/512/2103/2103633.png"]
  ],
  industrial:[
    ["Logística","Transporte, distribución y cadena de suministro.","https://cdn-icons-png.flaticon.com/512/679/679922.png"],
    ["Producción","Procesos industriales y manufactura.","https://cdn-icons-png.flaticon.com/512/2942/2942842.png"],
    ["Calidad","Mejora continua y control de procesos.","https://cdn-icons-png.flaticon.com/512/190/190411.png"],
    ["Analítica Operacional","Datos aplicados a operaciones industriales.","https://cdn-icons-png.flaticon.com/512/1828/1828911.png"]
  ],
  administracion:[
    ["Marketing Digital","Publicidad, redes y estrategia digital.","https://cdn-icons-png.flaticon.com/512/3141/3141158.png"],
    ["Finanzas","Inversión y análisis financiero.","https://cdn-icons-png.flaticon.com/512/3135/3135706.png"],
    ["Emprendimiento","Creación de modelos de negocio.","https://cdn-icons-png.flaticon.com/512/3281/3281289.png"],
    ["Gestión Humana","Liderazgo y talento organizacional.","https://cdn-icons-png.flaticon.com/512/681/681494.png"]
  ],
  comunicacion:[
    ["Diseño UX/UI","Experiencias digitales e interfaces.","https://cdn-icons-png.flaticon.com/512/1055/1055666.png"],
    ["Producción Digital","Contenido audiovisual y multimedia.","https://cdn-icons-png.flaticon.com/512/1179/1179069.png"],
    ["Narrativas Transmedia","Historias interactivas multiplataforma.","https://cdn-icons-png.flaticon.com/512/3659/3659899.png"],
    ["Contenido Digital","Planeación de contenido estratégico.","https://cdn-icons-png.flaticon.com/512/4187/4187336.png"]
  ]
};

const allCareerLines = {
  sistemas:[
    {title:"Inteligencia Artificial y Machine Learning", status:"Disponible", professor:"Dr. Carlos Mendoza", spots:"12/15", accept:true, reason:"Cumples promedio, créditos y materias previas."},
    {title:"Desarrollo de Software y Arquitectura", status:"Disponible", professor:"Dra. Ana García", spots:"18/20", accept:true, reason:"Perfil académico aprobado."},
    {title:"Ciberseguridad y Ethical Hacking", status:"Lleno", professor:"Dr. Miguel Torres", spots:"12/12", accept:false, reason:"No hay cupos disponibles."},
    {title:"Ciencia de Datos y Big Data", status:"Disponible", professor:"Dra. Laura Martínez", spots:"10/18", accept:true, reason:"Cumples con los requisitos de matemáticas y programación."}
  ],
  industrial:[
    {title:"Logística Empresarial", status:"Disponible", professor:"Ing. Felipe Gómez", spots:"5/15", accept:true, reason:"Cumples requisitos mínimos para iniciar la línea."},
    {title:"Producción y Manufactura", status:"Disponible", professor:"Dra. Natalia Ríos", spots:"7/18", accept:true, reason:"Cumples los créditos requeridos."},
    {title:"Gestión de Calidad", status:"Lleno", professor:"Mg. Andrés Patiño", spots:"15/15", accept:false, reason:"La línea no tiene cupos disponibles."},
    {title:"Analítica Operacional", status:"Restringido", professor:"Dra. Camila Ruiz", spots:"9/10", accept:false, reason:"Promedio insuficiente. Mínimo requerido: 3.8."}
  ],
  administracion:[
    {title:"Marketing Digital", status:"Disponible", professor:"Mg. Valeria Díaz", spots:"8/15", accept:true, reason:"Tu historial académico cumple con los requisitos."},
    {title:"Finanzas Corporativas", status:"Lleno", professor:"Dr. Jorge Salazar", spots:"15/15", accept:false, reason:"La línea alcanzó el máximo de cupos."},
    {title:"Emprendimiento", status:"Disponible", professor:"Mg. Daniel Castro", spots:"6/20", accept:true, reason:"Cumples los requisitos de créditos y promedio."},
    {title:"Gestión Humana", status:"Restringido", professor:"Dra. Marcela Cano", spots:"11/12", accept:false, reason:"Debes aprobar Gestión Organizacional antes de aplicar."}
  ],
  comunicacion:[
    {title:"Diseño UX/UI", status:"Restringido", professor:"Dra. Juliana Pérez", spots:"4/10", accept:false, reason:"Debes aprobar Narrativa Digital antes de aplicar."},
    {title:"Producción Digital", status:"Disponible", professor:"Mg. Samuel Restrepo", spots:"7/15", accept:true, reason:"Cumples los requisitos de la línea."},
    {title:"Narrativas Transmedia", status:"Disponible", professor:"Dra. Laura Vélez", spots:"5/14", accept:true, reason:"Tu perfil cumple los requisitos básicos."},
    {title:"Estrategia de Contenidos", status:"Lleno", professor:"Mg. Camilo Torres", spots:"12/12", accept:false, reason:"La línea no tiene cupos disponibles."}
  ]
};

let coordinatorMessages = [
  {
    from:"sistemas@soyudemedellin.edu.co",
    subject:"Consulta sobre línea de énfasis",
    body:"Quisiera saber si puedo aplicar a Inteligencia Artificial aunque aún estoy cursando Estructura de Datos.",
    date:"2026-04-20"
  }
];

let users = JSON.parse(localStorage.getItem("users")) || {
  "sistemas@soyudemedellin.edu.co":{
    password:"123", role:"student", name:"Andrés Correa", career:"Ingeniería de Sistemas", careerKey:"sistemas", average:4.6, credits:94, semester:6,
    history:[["I","Programación I","4.8","4"],["II","Programación II","4.5","4"],["III","Bases de Datos","4.7","3"],["IV","Estructura de Datos","4.3","4"]]
  },

  "industrial@soyudemedellin.edu.co":{
    password:"123", role:"student", name:"Laura Ramírez", career:"Ingeniería Industrial", careerKey:"industrial", average:3.2, credits:42, semester:3,
    history:[["I","Cálculo I","3.1","4"],["II","Álgebra","3.4","3"],["III","Producción I","3.3","3"]]
  },

  "administracion@soyudemedellin.edu.co":{
    password:"123", role:"student", name:"Mariana López", career:"Administración de Empresas", careerKey:"administracion", average:4.1, credits:68, semester:5,
    history:[["I","Mercadeo","4.4","3"],["II","Finanzas","4.1","3"],["III","Talento Humano","4.0","3"]]
  },

  "comunicacion@soyudemedellin.edu.co":{
    password:"123", role:"student", name:"Santiago Mejía", career:"Comunicación Digital", careerKey:"comunicacion", average:2.9, credits:28, semester:2,
    history:[["I","Comunicación Visual","3.2","3"],["I","Narrativa","2.8","2"],["II","Diseño Básico","3.0","3"]]
  },

  "profesor.sistemas@udemedellin.edu.co":{
    password:"123", role:"professor", name:"Carlos Mendoza", career:"Ingeniería de Sistemas", careerKey:"sistemas"
  },

  "profesor.industrial@udemedellin.edu.co":{
    password:"123", role:"professor", name:"Felipe Gómez", career:"Ingeniería Industrial", careerKey:"industrial"
  },

  "profesor.administracion@udemedellin.edu.co":{
    password:"123", role:"professor", name:"Valeria Díaz", career:"Administración de Empresas", careerKey:"administracion"
  },

  "profesor.comunicacion@udemedellin.edu.co":{
    password:"123", role:"professor", name:"Juliana Pérez", career:"Comunicación Digital", careerKey:"comunicacion"
  },

  "coordinador@udem.edu.co":{
    password:"123", role:"coordinator", name:"Coordinador Académico", career:"Todas las carreras", careerKey:"all"
  }
};

let currentUser = null;

/* ─── Completar registro tras confirmación de correo ─────────────────────── */
// Supabase redirige al usuario de vuelta al sitio con tokens en la URL (#access_token=...).
// onAuthStateChange los detecta y dispara el evento SIGNED_IN con la sesión activa.
// En ese momento ya tenemos auth_id válido y RLS permite el INSERT.

async function handleEmailConfirmation(){
  supabaseClient.auth.onAuthStateChange(async (event, session) => {
    if(event === "SIGNED_IN" && session){
      const pending = localStorage.getItem("pendingProfile");
      if(!pending) return; // login normal, no registro nuevo

      const profile = JSON.parse(pending);

      // Verificar si ya existe el perfil (evitar doble INSERT)
      const { data: existing } = await supabaseClient
        .from("users")
        .select("id")
        .eq("auth_id", session.user.id)
        .maybeSingle();

      if(existing) {
        // Ya existe — solo limpiamos el localStorage
        localStorage.removeItem("pendingProfile");
        return;
      }

      // Crear el perfil en la tabla users
      const { error } = await supabaseClient
        .from("users")
        .insert([{
          auth_id:                   session.user.id,
          nombre:                    profile.nombre,
          correo:                    profile.correo,
          cedula:                    profile.cedula,
          role:                      "student",
          semestre:                  null,
          promedio:                  null,
          creditos:                  null,
          career:                    null,
          career_key:                null,
          history:                   [],
          academic_updated_semester: null
        }]);

      if(error){
        console.error("Error al crear perfil:", error);
        return;
      }

      localStorage.removeItem("pendingProfile");

      // Mostrar confirmación al usuario y llevar al login
      document.getElementById("homePage").style.display = "none";
      document.getElementById("loginPage").style.display = "none";

      const modal   = document.getElementById("aiModal");
      const mcontent = document.getElementById("modalContent");
      modal.style.display = "flex";
      mcontent.innerHTML = `
        <div style="text-align:center;padding:40px 20px;">
          <div style="font-size:3rem;margin-bottom:16px;">&#10004;</div>
          <h2>\u00a1Correo confirmado!</h2>
          <p style="margin:12px 0 20px;">Tu cuenta est\u00e1 activa. Ahora inicia sesi\u00f3n con tu correo y contrase\u00f1a.</p>
          <button onclick="closeModal();showLogin()">Iniciar sesi\u00f3n</button>
        </div>
      `;

      // Cerrar sesión de Supabase para que el usuario haga login limpio
      await supabaseClient.auth.signOut();
    }
  });
}


const cardsContainer = document.getElementById("cardsContainer");
const careerFilter = document.getElementById("careerFilter");

function renderHomeCards(career){
  cardsContainer.innerHTML = "";

  homeCards[career].forEach(card=>{
    cardsContainer.innerHTML += `
      <article class="card">
        <img src="${card[2]}" alt="Ícono de ${card[0]}">
        <h3>${card[0]}</h3>
        <p>${card[1]}</p>
        <a onclick="showLogin()">Ver más →</a>
      </article>
    `;
  });
}

careerFilter.addEventListener("change",()=>{
  renderHomeCards(careerFilter.value);
});

renderHomeCards("sistemas");

function hideAll(){
  document.getElementById("homePage").style.display="none";
  document.getElementById("loginPage").style.display="none";
  document.getElementById("studentDashboard").style.display="none";
  document.getElementById("professorDashboard").style.display="none";
  document.getElementById("coordinatorDashboard").style.display="none";
}

function showLogin(){
  hideAll();
  document.getElementById("loginPage").style.display="flex";
  window.scrollTo(0,0);
}

function showHome(){
  hideAll();
  document.getElementById("homePage").style.display="block";
}

function logout(){
  currentUser = null;
  showHome();
}


async function login(event){

  event.preventDefault();

  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();

  // Login con Supabase Auth
  const { data: authData, error: authError } =
    await supabaseClient.auth.signInWithPassword({
      email,
      password
    });

  if(authError){
    alert("Correo o contraseña incorrectos.");
    console.error(authError);
    return;
  }

  // Buscar perfil académico
  const { data, error } = await supabaseClient
    .from("users")
    .select("*")
    .eq("auth_id", authData.user.id)
    .single();

  if(error || !data){
    alert("No se encontró el perfil.");
    console.error(error);
    return;
  }

  // Si es estudiante y necesita actualizar info académica (inicio de semestre o primera vez)
  if(data.role === "student" && needsAcademicUpdate(data)){
    openAcademicUpdateModal(data, (updated) => {
      // Tras actualizar, construimos currentUser con los datos frescos y abrimos dashboard
      currentUser = {
        name:      data.nombre,
        average:   parseFloat(updated.average),
        semester:  parseInt(updated.semester),
        credits:   parseInt(updated.credits),
        career:    updated.career,
        careerKey: updated.careerKey,
        role:      "student",
        history:   data.history || []
      };
      openStudentDashboard();
    });
    return;
  }

  currentUser = {
    name:      data.nombre,
    average:   data.promedio,
    semester:  data.semestre,
    credits:   data.creditos,
    career:    data.career,
    careerKey: data.career_key,
    role:      data.role,
    history:   data.history || []
  };

  if(data.role === "student"){
    openStudentDashboard();
  }

  else if(data.role === "professor"){
    openProfessorDashboard();
  }

  else if(data.role === "coordinator"){
    openCoordinatorDashboard();
  }
}
function getStatusClass(status){
  if(status === "Lleno") return "full";
  if(status === "Restringido") return "restricted";
  return "available";
}
async function forgotPassword(){

  const email = prompt("Ingresa tu correo institucional");

  if(!email) return;

  const { error } =
    await supabaseClient.auth.resetPasswordForEmail(email,{
      redirectTo:
        window.location.origin + "/reset-password.html"
    });

  if(error){
    alert(error.message);
    console.error(error);
    return;
  }

  alert("Te enviamos un correo para recuperar tu contraseña.");
}
function openStudentDashboard(){
  hideAll();
  document.getElementById("studentDashboard").style.display="block";

  document.getElementById("studentWelcome").innerHTML=`Bienvenido, ${currentUser.name}`;
  document.getElementById("studentProfileName").innerHTML=currentUser.name;
  document.getElementById("studentProfileCareer").innerHTML=currentUser.career;
  document.getElementById("studentAvg").innerHTML=currentUser.average;
  document.getElementById("studentCredits").innerHTML=currentUser.credits;
  document.getElementById("studentSemester").innerHTML=currentUser.semester;
  document.getElementById("studentLines").innerHTML=allCareerLines[currentUser.careerKey].length;

  const historyBody = document.getElementById("studentHistoryBody");
  historyBody.innerHTML="";

  currentUser.history.forEach(item=>{
    historyBody.innerHTML += `
      <tr>
        <td>${item[0]}</td>
        <td>${item[1]}</td>
        <td><span class="grade ${item[2] >= 4 ? "good" : "medium"}">${item[2]}</span></td>
        <td>${item[3]}</td>
      </tr>
    `;
  });

  const grid = document.getElementById("studentEmphasisGrid");
  grid.innerHTML="";

  allCareerLines[currentUser.careerKey].forEach(line=>{
    grid.innerHTML += `
      <div class="emphasis-card">
        <div class="status ${getStatusClass(line.status)}">${line.status}</div>
        <h3>${line.title}</h3>
        <p>Especialización académica avanzada enfocada en desarrollo profesional.</p>
        <div class="line">Profesor: ${line.professor}</div>
        <div class="line">Cupos: ${line.spots}</div>

        <button class="apply-btn" onclick="analyzeIA('${line.title}', ${line.accept}, '${line.reason}')">
          ${line.accept ? "Inscribirse" : "Solicitar validación"}
        </button>
      </div>
    `;
  });

  window.scrollTo(0,0);
}

function openProfessorDashboard(){
  hideAll();
  document.getElementById("professorDashboard").style.display="block";

  document.getElementById("professorWelcome").innerHTML=`Bienvenido, Profesor ${currentUser.name}`;
  document.getElementById("professorName").innerHTML=currentUser.name;
  document.getElementById("professorCareer").innerHTML=currentUser.career;
  document.getElementById("professorLineCount").innerHTML=allCareerLines[currentUser.careerKey].length;

  renderProfessorLines();
  renderProfessorHistory();

  window.scrollTo(0,0);
}

function renderProfessorLines(){
  const grid = document.getElementById("professorLinesGrid");
  grid.innerHTML = "";

  allCareerLines[currentUser.careerKey].forEach((line,index)=>{
    grid.innerHTML += `
      <div class="emphasis-card">
        <div class="status ${getStatusClass(line.status)}">${line.status}</div>
        <h3>${line.title}</h3>
        <p>Profesor asignado: ${line.professor}</p>
        <div class="line">Cupos: ${line.spots}</div>

        <button class="small-btn" onclick="editLine('${line.title}')">Editar</button>
        <button class="delete-btn" onclick="deleteProfessorLine(${index})">Eliminar</button>
      </div>
    `;
  });

  document.getElementById("professorLineCount").innerHTML=allCareerLines[currentUser.careerKey].length;
}

function createProfessorLine(){
  const name = document.getElementById("newLineName").value.trim();
  const spots = document.getElementById("newLineSpots").value.trim();
  const desc = document.getElementById("newLineDesc").value.trim();

  if(!name || !spots || !desc){
    alert("Completa todos los campos.");
    return;
  }

  allCareerLines[currentUser.careerKey].push({
    title:name,
    status:"Disponible",
    professor:"Profesor " + currentUser.name,
    spots:"0/" + spots,
    accept:true,
    reason:"Línea creada recientemente. Cumple validación básica."
  });

  document.getElementById("newLineName").value="";
  document.getElementById("newLineSpots").value="";
  document.getElementById("newLineDesc").value="";

  renderProfessorLines();
}

function deleteProfessorLine(index){
  allCareerLines[currentUser.careerKey].splice(index,1);
  renderProfessorLines();
}

function editLine(title){
  alert("Modo edición simulado para: " + title);
}

function renderProfessorHistory(){
  const body = document.getElementById("professorHistoryBody");

  body.innerHTML = `
    <tr>
      <td>María González</td>
      <td>${allCareerLines[currentUser.careerKey][0]?.title || "Línea académica"}</td>
      <td>2026-02-15</td>
      <td><span class="grade good">Aprobado</span></td>
    </tr>
    <tr>
      <td>Pedro Ramírez</td>
      <td>${allCareerLines[currentUser.careerKey][1]?.title || "Línea académica"}</td>
      <td>2026-02-14</td>
      <td><span class="grade medium">Pendiente</span></td>
    </tr>
    <tr>
      <td>Ana Martínez</td>
      <td>${allCareerLines[currentUser.careerKey][2]?.title || "Línea académica"}</td>
      <td>2026-02-13</td>
      <td><span class="grade good">Aprobado</span></td>
    </tr>
  `;
}

function openCoordinatorDashboard(){
  hideAll();
  document.getElementById("coordinatorDashboard").style.display="block";

  renderCoordinatorLines();
  renderInbox();

  window.scrollTo(0,0);
}

function renderCoordinatorLines(){
  const grid = document.getElementById("coordinatorLinesGrid");
  grid.innerHTML = "";

  Object.keys(allCareerLines).forEach(career=>{
    allCareerLines[career].forEach(line=>{
      const total = parseInt(line.spots.split("/")[1]) || 1;
      const used = parseInt(line.spots.split("/")[0]) || 0;
      const percent = Math.round((used / total) * 100);

      grid.innerHTML += `
        <div class="emphasis-card">
          <div class="status ${getStatusClass(line.status)}">${line.status}</div>
          <h3>${line.title}</h3>
          <p>Carrera: ${career}</p>
          <div class="line">Profesor: ${line.professor}</div>
          <div class="line">Inscritos: ${line.spots}</div>
          <div class="progress"><span style="width:${percent}%"></span></div>
          <div class="line">${percent}% ocupación</div>
        </div>
      `;
    });
  });
}

function renderInbox(){
  const inbox = document.getElementById("coordinatorInbox");
  inbox.innerHTML = "";

  if(coordinatorMessages.length === 0){
    inbox.innerHTML = `<div class="inbox-card"><p>No hay mensajes pendientes.</p></div>`;
    return;
  }

  coordinatorMessages.forEach(msg=>{
    inbox.innerHTML += `
      <div class="inbox-card">
        <h3>${msg.subject}</h3>
        <p><strong>De:</strong> ${msg.from}</p>
        <p><strong>Fecha:</strong> ${msg.date}</p>
        <p>${msg.body}</p>
        <button class="small-btn" onclick="alert('Respuesta simulada enviada al estudiante.')">Responder</button>
      </div>
    `;
  });
}

function openContactForm(){
  const modal = document.getElementById("aiModal");
  const content = document.getElementById("modalContent");

  modal.style.display="flex";

  content.innerHTML=`
    <h2>Contactar coordinación</h2>
    <p>Escribe tu consulta y será enviada a la bandeja del coordinador.</p>

    <div class="form-group" style="text-align:left; margin-top:20px;">
      <label>Correo</label>
      <input id="contactEmail" placeholder="tu correo institucional">
    </div>

    <div class="form-group" style="text-align:left;">
      <label>Asunto</label>
      <input id="contactSubject" placeholder="Asunto del mensaje">
    </div>

    <div class="form-group" style="text-align:left;">
      <label>Mensaje</label>
      <textarea id="contactBody" placeholder="Escribe tu mensaje"></textarea>
    </div>

    <button onclick="sendCoordinatorMessage()">Enviar mensaje</button>
    <button onclick="closeModal()" style="background:#e5e7eb;color:#111;margin-left:8px;">Cancelar</button>
  `;
}
function openRegister(){
  const modal = document.getElementById("aiModal");
  const content = document.getElementById("modalContent");

  modal.style.display = "flex";
  content.classList.add("register-modal");

  content.innerHTML = `
    <div class="register-shell">
      <aside class="register-aside" aria-label="Beneficios del registro">
        <div>
          <span class="register-kicker">Registro académico</span>
          <h2>Crea tu cuenta en segundos.</h2>
          <p>Solo necesitas tus datos básicos. Al inicio de cada semestre, la plataforma te pedirá actualizar tu información académica para validar acceso a las líneas de énfasis.</p>
          <div class="register-steps">
            <div class="register-step"><span>1</span>Datos básicos</div>
            <div class="register-step"><span>2</span>Verificación de correo</div>
            <div class="register-step"><span>3</span>Info académica (cada semestre)</div>
          </div>
        </div>
        <div class="register-help">
          Cada semestre se te pedirá actualizar tu carrera, semestre, promedio y créditos para acceder a las líneas disponibles.
        </div>
      </aside>

      <div class="register-form">
        <div class="register-header">
          <div>
            <h3>Crear cuenta</h3>
            <p>Solo necesitas 4 datos para comenzar.</p>
          </div>
          <button class="register-close" type="button" onclick="closeModal()" aria-label="Cerrar registro">×</button>
        </div>

        <div class="register-grid">
          <div class="form-group full">
            <label for="registerName">Nombre completo</label>
            <input id="registerName" placeholder="Ej: Mariana Restrepo Gómez" autocomplete="name">
          </div>

          <div class="form-group full">
            <label for="registerEmail">Correo institucional</label>
            <input id="registerEmail" type="email" placeholder="correo@soyudemedellin.edu.co" autocomplete="email">
          </div>

          <div class="form-group full">
            <label for="registerCedula">Número de cédula</label>
            <input id="registerCedula" type="number" placeholder="Ej: 1037654321">
          </div>

          <div class="form-group full">
            <label for="registerPassword">Contraseña</label>
            <input id="registerPassword" type="password" placeholder="Mínimo 8 caracteres" autocomplete="new-password">
          </div>
        </div>

        <div class="register-actions">
          <button class="register-primary" type="button" onclick="registerUser()">Crear cuenta</button>
          <button class="register-secondary" type="button" onclick="closeModal()">Cancelar</button>
        </div>

        <p class="register-legal">Al registrarte aceptas que tus datos se usen para validar inscripción a líneas de énfasis. Cada semestre actualizarás tu información académica.</p>
      </div>
    </div>
  `;
}
async function registerUser(){

  const name     = document.getElementById("registerName").value.trim();
  const email    = document.getElementById("registerEmail").value.trim();
  const cedula   = document.getElementById("registerCedula").value.trim();
  const password = document.getElementById("registerPassword").value.trim();

  if(!name || !email || !cedula || !password){
    alert("Completa todos los campos.");
    return;
  }

  if(password.length < 8){
    alert("La contraseña debe tener al menos 8 caracteres.");
    return;
  }

  // 1. Crear usuario en Supabase Auth
  const { data, error } = await supabaseClient.auth.signUp({
    email,
    password
  });

  if(error){
    alert(error.message);
    console.error(error);
    return;
  }

  // 2. Guardar datos del perfil en localStorage.
  //    El INSERT a la tabla users se hace en handleEmailConfirmation()
  //    cuando el usuario regresa tras confirmar su correo y Supabase
  //    establece la sesión activa (necesaria para que RLS lo permita).
  localStorage.setItem("pendingProfile", JSON.stringify({
    nombre: name,
    correo: email,
    cedula: cedula
  }));

  const content = document.getElementById("modalContent");
  content.innerHTML = `
    <div style="text-align:center;padding:40px 20px;">
      <div style="font-size:3rem;margin-bottom:16px;">\u2709\uFE0F</div>
      <h2>\u00a1Casi listo!</h2>
      <p style="margin:12px 0 8px;">Te enviamos un correo a <strong>${email}</strong>.</p>
      <p style="color:#444;margin-bottom:6px;">Haz clic en el enlace de confirmaci\u00f3n y al volver aqu\u00ed tu cuenta quedar\u00e1 activa autom\u00e1ticamente.</p>
      <p style="color:#666;font-size:.85rem;margin-bottom:24px;">Luego se te pedir\u00e1 tu informaci\u00f3n acad\u00e9mica para activar las l\u00edneas de \u00e9nfasis.</p>
      <button onclick="closeModal()">Entendido</button>
    </div>
  `;
}

/* ─── Modal de actualización académica semestral ─────────────────────────── */

function needsAcademicUpdate(userData){
  // Si nunca llenó la info académica, siempre se pide
  if(!userData.career_key || !userData.semestre) return true;

  // Calculamos el semestre académico actual (ene-jun = 1, jul-dic = 2)
  const now   = new Date();
  const year  = now.getFullYear();
  const half  = now.getMonth() < 6 ? 1 : 2;
  const currentPeriod = `${year}-${half}`;

  return userData.academic_updated_semester !== currentPeriod;
}

function getCurrentAcademicPeriod(){
  const now  = new Date();
  const year = now.getFullYear();
  const half = now.getMonth() < 6 ? 1 : 2;
  return `${year}-${half}`;
}

function openAcademicUpdateModal(userData, onComplete){
  const modal   = document.getElementById("aiModal");
  const content = document.getElementById("modalContent");

  modal.style.display = "flex";
  content.classList.add("register-modal");

  const period = getCurrentAcademicPeriod();
  const [year, half] = period.split("-");
  const periodLabel = `${half === "1" ? "Enero–Junio" : "Julio–Diciembre"} ${year}`;

  content.innerHTML = `
    <div class="register-shell">
      <aside class="register-aside">
        <div>
          <span class="register-kicker">Actualización semestral</span>
          <h2>Actualiza tu información académica</h2>
          <p>Para el semestre <strong>${periodLabel}</strong> necesitamos tus datos académicos actualizados. Esto nos permite mostrarte las líneas de énfasis disponibles para tu perfil.</p>
          <div class="register-steps">
            <div class="register-step"><span>✔</span>Cuenta verificada</div>
            <div class="register-step"><span>2</span>Info académica (ahora)</div>
            <div class="register-step"><span>3</span>Acceso a líneas de énfasis</div>
          </div>
        </div>
        <div class="register-help">
          Solo se solicita una vez por semestre. Esta información determina a qué líneas puedes inscribirte.
        </div>
      </aside>

      <div class="register-form">
        <div class="register-header">
          <div>
            <h3>Información académica</h3>
            <p>Período: <strong>${periodLabel}</strong></p>
          </div>
        </div>

        <div class="register-grid">
          <div class="form-group full">
            <label for="updateCareer">Carrera</label>
            <select id="updateCareer">
              <option value="sistemas">Ingeniería de Sistemas</option>
              <option value="industrial">Ingeniería Industrial</option>
              <option value="administracion">Administración de Empresas</option>
              <option value="comunicacion">Comunicación Digital</option>
            </select>
          </div>

          <div class="form-group">
            <label for="updateSemester">Semestre actual</label>
            <input id="updateSemester" type="number" min="1" max="12"
              placeholder="Ej: 5" value="${userData.semestre || ""}">
          </div>

          <div class="form-group">
            <label for="updateAverage">Promedio acumulado</label>
            <input id="updateAverage" type="number" min="0" max="5" step="0.1"
              placeholder="Ej: 4.2" value="${userData.promedio || ""}">
          </div>

          <div class="form-group full">
            <label for="updateCredits">Créditos aprobados</label>
            <input id="updateCredits" type="number" min="0"
              placeholder="Ej: 84" value="${userData.creditos || ""}">
          </div>
        </div>

        <div class="register-actions">
          <button class="register-primary" type="button"
            onclick="saveAcademicUpdate()">Guardar y continuar</button>
        </div>

        <p class="register-legal">Esta información se actualiza semestralmente y es usada exclusivamente para validar tu acceso a las líneas de énfasis.</p>
      </div>
    </div>
  `;

  // Guardamos el callback para llamarlo tras guardar
  window._academicUpdateCallback = onComplete;
  window._academicUpdateAuthId   = userData.auth_id;
}

async function saveAcademicUpdate(){
  const careerKey = document.getElementById("updateCareer").value;
  const semester  = document.getElementById("updateSemester").value.trim();
  const average   = document.getElementById("updateAverage").value.trim();
  const credits   = document.getElementById("updateCredits").value.trim();

  const careerNames = {
    sistemas:      "Ingeniería de Sistemas",
    industrial:    "Ingeniería Industrial",
    administracion:"Administración de Empresas",
    comunicacion:  "Comunicación Digital"
  };

  if(!careerKey || !semester || !average || !credits){
    alert("Completa todos los campos académicos.");
    return;
  }

  const period = getCurrentAcademicPeriod();

  const { error } = await supabaseClient
    .from("users")
    .update({
      semestre:   semester,
      promedio:   average,
      creditos:   credits,
      career:     careerNames[careerKey],
      career_key: careerKey,
      academic_updated_semester: period
    })
    .eq("auth_id", window._academicUpdateAuthId);

  if(error){
    alert("Error al guardar: " + error.message);
    console.error(error);
    return;
  }

  closeModal();

  // Ejecutamos el callback con los datos actualizados
  if(typeof window._academicUpdateCallback === "function"){
    window._academicUpdateCallback({
      careerKey,
      career: careerNames[careerKey],
      semester,
      average,
      credits
    });
  }
}
function sendCoordinatorMessage(){
  const email = document.getElementById("contactEmail").value.trim();
  const subject = document.getElementById("contactSubject").value.trim();
  const body = document.getElementById("contactBody").value.trim();

  if(!email || !subject || !body){
    alert("Completa todos los campos.");
    return;
  }

  coordinatorMessages.unshift({
    from:email,
    subject:subject,
    body:body,
    date:"2026-04-22"
  });

  const content = document.getElementById("modalContent");

  content.innerHTML=`
    <div class="result-icon success-icon">✔</div>
    <h2>Mensaje enviado</h2>
    <p>Tu mensaje fue enviado correctamente a la bandeja del coordinador.</p>
    <button onclick="closeModal()">Cerrar</button>
  `;
}

function analyzeIA(title, accepted, reason){
  const modal = document.getElementById("aiModal");
  const content = document.getElementById("modalContent");

  modal.style.display="flex";

  content.innerHTML=`
    <div class="loader"></div>
    <h2>IA analizando requisitos académicos...</h2>
    <p>Validando promedio, materias aprobadas, créditos, cupos y requisitos previos.</p>
  `;

  setTimeout(()=>{
    if(accepted){
      content.innerHTML=`
        <div class="result-icon success-icon">✔</div>
        <h2>Solicitud aprobada</h2>
        <p>${reason}</p>

        <div class="pay-box">
          <strong>Siguiente paso:</strong><br>
          Confirmar preinscripción a la línea <strong>${title}</strong>.<br>
          Luego deberás realizar el pago de derechos académicos desde el portal institucional.
        </div>

        <button onclick="showPaymentStep('${title}')">Continuar al pago</button>
      `;
    }else{
      content.innerHTML=`
        <div class="result-icon error-icon">✖</div>
        <h2>Solicitud rechazada</h2>
        <p>${reason}</p>
        <button onclick="closeModal()">Volver</button>
      `;
    }
  },5000);
}

function showPaymentStep(title){
  const content = document.getElementById("modalContent");

  content.innerHTML=`
    <div class="result-icon success-icon">💳</div>
    <h2>Preinscripción generada</h2>
    <p>Tu cupo quedó separado temporalmente mientras realizas el pago.</p>

    <div class="pay-box">
      <strong>Línea seleccionada:</strong> ${title}<br>
      <strong>Estado:</strong> Pendiente de pago<br>
      <strong>Valor:</strong> $180.000 COP<br>
      <strong>Fecha límite:</strong> 3 días hábiles<br>
      <strong>Método:</strong> Portal de pagos Universidad de Medellín
    </div>

    <button onclick="finishProcess()">Finalizar</button>
  `;
}

function finishProcess(){
  const content = document.getElementById("modalContent");

  content.innerHTML=`
    <div class="result-icon success-icon">✔</div>
    <h2>Proceso registrado</h2>
    <p>La solicitud quedó en estado <strong>pendiente de pago</strong>. Cuando el pago sea confirmado, el coordinador académico validará la inscripción final.</p>
    <button onclick="closeModal()">Cerrar</button>
  `;
}

function closeModal(){
  const modal = document.getElementById("aiModal");
  const content = document.getElementById("modalContent");
  modal.style.display="none";
  content.classList.remove("register-modal");
}
function openForgotPassword(){
    const modal = document.getElementById("aiModal");
    const content = document.getElementById("modalContent");

    modal.style.display = "flex";

    content.innerHTML = `
        <div class="recover-modal">

            <div class="recover-icon">🔐</div>

            <h2>Recuperar contraseña</h2>

            <p>
                Ingresa tu correo institucional y te enviaremos
                un enlace para restablecer tu acceso.
            </p>

            <input
                type="email"
                id="recoverEmail"
                placeholder="correo@soyudemedellin.edu.co"
            />

            <button onclick="sendRecoveryEmail()">
                Enviar enlace
            </button>

            <span onclick="closeModal()">
                Cancelar
            </span>

        </div>
    `;
}
async function sendRecoveryEmail(){

    const email = document
        .getElementById("recoverEmail")
        .value
        .trim();

    if(!email){
        alert("Ingresa un correo válido");
        return;
    }

    const { error } = await supabaseClient.auth.resetPasswordForEmail(
        email,
        {
            redirectTo:
                window.location.origin + "/reset-password.html"
        }
    );

    if(error){
        alert(error.message);
        console.error(error);
        return;
    }

    const content = document.getElementById("modalContent");

    content.innerHTML = `
        <div class="recover-success">

            <div class="success-icon">✔</div>

            <h2>Correo enviado</h2>

            <p>
                Revisa tu bandeja de entrada.
                También verifica spam o correo no deseado.
            </p>

            <button onclick="closeModal()">
                Entendido
            </button>

        </div>
    `;
}
