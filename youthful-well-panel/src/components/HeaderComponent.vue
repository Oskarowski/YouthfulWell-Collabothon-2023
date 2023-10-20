<template>
  <div class="nav-container">
    <nav class="gradient-custom navbar navbar-expand-lg navbar-light">
      <router-link to="/chat" class="navbar-brand">
        <div class="img-container">
          <img
            alt="YouthfulWell Logo"
            class="logo"
            src="@/components/icons/YouthfulWellSvg.svg"
            width="100"
            height="100"
          />
          <label class="text-with-outline">Chat</label>
        </div>
      </router-link>

      <router-link to="" class="navbar-brand">
        <div class="img-container" @click="foundationIconClicked('https://slonienabalkonie.pl/')">
          <img
            alt="SlonieNaBalkonie Logo"
            class="logo"
            src="@/components/icons/SlonieNaBalkonieSvg.svg"
            width="100"
            height="100"
          />
          <label class="text-with-outline">Słonie Na Balkonie</label>
        </div>
      </router-link>

      <!-- <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <router-link to="/authors" class="nav-link active">Autorzy</router-link>
          </li>
        </ul>
      </div> -->
    </nav>
  </div>
</template>
<script>
export default {
  components: {},

  methods: {
    foundationIconClicked(link) {
      window.open(link, '_blank')
    }
  }
}
</script>
<style scoped>
.logo {
  border: 1px solid black;
  border-radius: 1em;
}

.nav-item {
  font-size: large;
}

.header-title {
  font-size: 24px;
  margin: 0;
}

.nav-container {
  display: flex;
  align-items: center;
  justify-content: center;
  /* top and bottom | left and right */
  margin: 1em 0;
  border-radius: 0.5em;
}

.nav-link:hover {
  color: #ff9900;
  transform: scale(1.1);
  transition: transform 0.2s ease-in-out;
}

label:hover {
  color: #ff9900;
  transform: scale(1.1);
  transition: transform 0.2s ease-in-out;
  cursor: pointer;
}

.logo:hover {
  transform: scale(1.1);
  transition: transform 0.2s ease-in-out;
}

.img-container {
  justify-content: center;
  align-items: center;
  display: flex;
  flex-direction: column;
  text-align: center;
}

label {
  display: block;
  margin-top: 0.2em;
}
</style>
