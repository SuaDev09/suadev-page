<template>
  <nav class="navbar navbar-expand-lg navbar-dark sticky-top">
    <a class="navbar-brand justify-content-start" href="#">SuaDev</a>
    <button
      class="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarCollapse"
      aria-controls="navbarCollapse"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarCollapse">
      <ul class="navbar-nav mx-auto">
        <li class="nav-item active">
          <a class="nav-link" href="#"
            >Home <span class="sr-only">(current)</span></a
          >
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">About</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Contact</a>
        </li>
      </ul>
      <ul class="navbar-nav justify-content-end">
        <li class="nav-item">
          <a class="nav-link" href="#">Contact</a>
        </li>
      </ul>
    </div>
  </nav>
  <!-- https://codepen.io/pensart/pen/xeqgzR -->
</template>


<style scoped>
@import "../assets/variables.css";
.navbar .navbar-toggler {
  z-index: 1000;
  background-color: var(--primary-color);
  padding: 6px 6px;
  border-radius: 100%;
}
.navbar {
  color: var(--primary-color);
}

.navbar-brand,
.navbar-nav {
  background-color: var(--primary-color);
  padding: 6px 18px;
  border-radius: 50px;
}

@media (max-width: 991.98px) {
  .navbar .navbar-collapse {
    background: rgba(0, 0, 0, 0.85);
    opacity: 0;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    transition: opacity 0.35s ease;
    display: flex;
    flex-direction: column;
    align-content: center;
    text-align: center !important;
    overflow-y: scroll;
    overflow-x: hidden;
  }
  .navbar .navbar-collapse.collapse {
    display: flex;
    opacity: 0;
    pointer-events: none;
  }
  .navbar .navbar-collapse.collapsing[style*="height"] {
    opacity: 1;
    height: 100vh !important;
  }
  .navbar .navbar-collapse.collapsing {
    opacity: 0;
    height: 100vh;
  }
  .navbar .navbar-collapse.collapse.show {
    opacity: 1;
    pointer-events: auto;
  }
  .navbar .navbar-collapse .navbar-nav {
    margin-right: initial !important;
    margin-top: auto;
    margin-bottom: auto;
  }
}

@media (max-width: 991.98px) {
  .navbar-nav {
    margin-left: initial !important;
  }
}
</style>

//https://www.codeply.com/go/GXRF6aA5Du
