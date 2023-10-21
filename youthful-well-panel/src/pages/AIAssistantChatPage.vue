<template>
  <AiAssistantComponent></AiAssistantComponent>
  <div class="container">
    <div class="card">
      <div class="card-body">
        <div class="d-flex justify-content-center">
          <h2>Gdy przytrafi się atak paniki:</h2>
        </div>
        <div class="d-flex justify-content-evenly">
          <div class="d-flex flex-column">
            <h3>Dla Ciebie:</h3>
            <ol>
              <li>Powtarzaj sobie w myślach bądź na głos „jestem bezpieczna/y”.</li>
              <li>Usiądź na solidnym krześle, fotelu lub na ziemi, oprzyj się o coś.</li>
              <li>Zacznij oddychać powoli i głęboko, jak u lekarza.</li>
              <li>Postaraj się by WYDECH był dłuższy.</li>
              <li>Możesz położyć dłoń na brzuchu i obserwować ją jak się unosi i opada.</li>
              <li>
                Rozejrzyj się, zauważ i skup na wszystkich zwyczajnych rzeczach, które dzieją się
                wokoło.
              </li>
              <li>Poszukaj w otoczeniu okręgów/przedmiotów w konkretnym kolorze.</li>
              <li>Napij się zimnej wody.</li>
              <li>Zajmij się czymś, co sprawia Ci przyjemność.</li>
            </ol>
          </div>
          <div class="d-flex flex-column">
            <h3>Jesteś Rodzicem:</h3>
            <ol>
              <li>Powtarzaj sobie w myślach bądź na głos „jestem bezpieczna/y”.</li>
              <li>Usiądź na solidnym krześle, fotelu lub na ziemi, oprzyj się o coś.</li>
              <li>Zacznij oddychać miarowo, powoli i głęboko.</li>
              <li>Postaraj się by WYDECH był dłuższy.</li>
              <li>Możesz położyć dłoń na brzuchu i obserwować ją jak się unosi i opada.</li>
              <li>
                Rozejrzyj się, zauważ i skup na wszystkich zwyczajnych rzeczach, które dzieją się
                wokoło, nazwij je sobie.
              </li>
              <li>Poszukaj w otoczeniu okręgów/przedmiotów w konkretnym kolorze.</li>
              <li>Napij się zimnej wody, zrób zimny okład.</li>
              <li>Zajmij się czymś, co sprawia Ci przyjemność.</li>
            </ol>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import AiAssistantComponent from '../components/AiAssistantComponent.vue'
export default {
  components: {
    AiAssistantComponent
  }
}
</script>
<style scoped>
.d-flex {
  display: flex;
  justify-content: space-between;
  margin: 0.5em 0;
}

.flex-column {
  flex-direction: column;
  padding: 1em;
  background-color: #f5f5f5;
  border: 1px solid #ccc;
  border-radius: 0.5em;
  width: 45%;
}

h3 {
  font-size: 1.5rem;
  margin-bottom: 10px;
}

ol {
  list-style-type: decimal;
  margin-left: 20px;
  padding-left: 0;
}

ol li {
  margin-bottom: 10px;
}

h3 {
  text-align: center;
}
</style>
