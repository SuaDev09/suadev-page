<template>
  <section id="about" class="about flex justify-center content-center">
    <div
      class="w-2/3 p-4 m-auto content-center bg-white border rounded-lg shadow-md sm:p-6 md:p-8"
    >
      <div class="section-title">
        <h2>Sobre mi:</h2>
        <p>
          Soy Estudiante de la Licenciatura en Sistemas Computacionales y me
          encanta de la programacion.
        </p>
      </div>
      <div class="row">
        <!-- <div class="col-lg-4">
          <img src="assets/img/about.jpg" class="img-fluid" alt="" />
        </div> -->
        <div class="col-lg-8 pt-4 pt-lg-0 content">
          <h3>Desarrollado BACKEND</h3>
          <p class="fst-italic">Me gusta crear la logica de mis aplicaciones</p>
          <div class="row">
            <div class="col-lg-6">
              <ul>
                <li>
                  <i class="bi bi-rounded-right"></i>
                  <strong>Cumpleaños:</strong> 28 Abril 2001
                </li>
                <li>
                  <i class="bi bi-rounded-right"></i>
                  <strong>Website:</strong>https://github.com/SuaDev09
                </li>
                <li>
                  <i class="bi bi-rounded-right"></i>
                  <strong>Telefoono:</strong> 6861273323
                </li>
                <li>
                  <i class="bi bi-rounded-right"></i>
                  <strong>Ciudad:</strong> Ciudad : Mexicali, BC, MX
                </li>
              </ul>
            </div>
            <div class="col-lg-6">
              <ul>
                <li>
                  <i class="bi bi-rounded-right"></i> <strong>Edad:</strong> 21
                </li>
                <li>
                  <i class="bi bi-rounded-right"></i>
                  <strong>Estudiose:</strong> Licenciatura
                </li>
                <li>
                  <i class="bi bi-rounded-right"></i> <strong>Corre:</strong>
                  francisco.suarez.bastidas@uabc.edu.mx
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!-- End About Section -->

  <!-- ======= Skills Section ======= -->
  <section id="skills" class="skills">
    <div class="container" data-aos="fade-up">
      <div class="section-title">
        <h2>Skills</h2>
        <p>
          Aqui algunas de las habilidades que he desarrollado durante el tiempo
          que he estudiado.
        </p>
      </div>

      <div class="row skills-content">
        <div class="col-lg-6">
          <div class="progress">
            <span class="skill">C# <i class="val">70%</i></span>
            <div class="progress-bar-wrap">
              <div
                class="progress-bar"
                role="progressbar"
                aria-valuenow="70"
                aria-valuemin="0"
                aria-valuemax="100"
              ></div>
            </div>
          </div>

          <div class="progress">
            <span class="skill">CSS <i class="val">90%</i></span>
            <div class="progress-bar-wrap">
              <div
                class="progress-bar"
                role="progressbar"
                aria-valuenow="90"
                aria-valuemin="0"
                aria-valuemax="100"
              ></div>
            </div>
          </div>

          <div class="progress">
            <span class="skill">JavaScript <i class="val">70%</i></span>
            <div class="progress-bar-wrap">
              <div
                class="progress-bar"
                role="progressbar"
                aria-valuenow="70"
                aria-valuemin="0"
                aria-valuemax="100"
              ></div>
            </div>
          </div>
        </div>

        <div class="col-lg-6">
          <div class="progress">
            <span class="skill">HTML <i class="val">80%</i></span>
            <div class="progress-bar-wrap">
              <div
                class="progress-bar"
                role="progressbar"
                aria-valuenow="80"
                aria-valuemin="0"
                aria-valuemax="100"
              ></div>
            </div>
          </div>

          <div class="progress">
            <span class="skill">Python <i class="val">40%</i></span>
            <div class="progress-bar-wrap">
              <div
                class="progress-bar"
                role="progressbar"
                aria-valuenow="40"
                aria-valuemin="0"
                aria-valuemax="100"
              ></div>
            </div>
          </div>

          <div class="progress">
            <span class="skill">VueJS <i class="val">60%</i></span>
            <div class="progress-bar-wrap">
              <div
                class="progress-bar"
                role="progressbar"
                aria-valuenow="60"
                aria-valuemin="0"
                aria-valuemax="100"
              ></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!-- End Skills Section -->
</template>

<script>
export default {};
</script>

<style>
.about {
  background-color: #5000ca;
  height: 700px;
  background-image: url("../assets/waves/waveAbout.svg");
  background-repeat: repeat-x;
  background-size: contain;
  background-position: bottom center;
}
</style>
