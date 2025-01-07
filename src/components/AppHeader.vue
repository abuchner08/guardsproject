<template>
  <header class="header">
    <div class="logo-container">
      <img :src="logoSrc" :alt="logoAlt" class="logo" />  
      <h1 class="header-paragraph">Major League Baseball</h1>
    </div>
  </header>

  <main>
    <div class="main-container"> 
      <h1>Games</h1>
      <h1>Standings</h1>
    </div>
    <div class="body-container">
      <div class="game-scores">
        <ul>
        <li v-for="(date, index) in games.dates" :key="index" class="date"> 
          <h2>{{ date.date }}</h2>
          <ul>
            <li v-for="(game, gameIndex) in date.games" :key="gameIndex" class="game-info">
              {{ game.teams.away.team.name }} - {{ game.teams.away.score }} @ {{ game.teams.home.score }} - {{game.teams.home.team.name}}
            </li>
        </ul>
        </li>
      </ul> 
    </div>
    <div class="standings-info">
      <h2>American League</h2>
      <ul>
        <li v-for="(team, index) in standings.records" :key="index" class="American">
          <h3>{{ divisions[index] }}</h3>
          <ul>
            <li v-for="(team2, index2) in team.teamRecords" :key="index2" class="Ale">
              <p>{{index2 + 1}}. {{ team2.team.name}}</p>
            </li>
          </ul>
        </li>
      </ul>
      <h2>National League</h2>
      <ul>
        <li v-for="(team, index) in standings2.records" :key="index" class="National">
          <h3>{{ divisions[index] }}</h3>
          <ul>
            <li v-for="(team2, index2) in team.teamRecords" :key="index2" class="Ale">
              <p>{{index2 + 1}}. {{ team2.team.name}}</p>
            </li>
          </ul>
        </li>
      </ul>
    </div> 
    </div>

    <div class="team-info">
      <h1 class="team-information">Team Information</h1>
      <nav class="team-names"> 
        <router-link to="/ArizonaDiamondbacks" class="custom-link">Arizona Diamondbacks</router-link> 
        <router-link to="/AtlantaBraves" class="custom-link">Atlanta Braves</router-link>
        <router-link to="/BaltimoreOrioles" class="custom-link">Baltimore Orioles</router-link>
        <router-link to="/BostonRedSocks" class="custom-link">Boston Red Socks</router-link>
        <router-link to="/ChicagoWhiteSocks" class="custom-link">Chicago White Soxs</router-link>
        <router-link to="/ChicagoCubs" class="custom-link">Chicago Cubs</router-link>
        <router-link to="/CincinnatiReds" class="custom-link">Cincinnati Reds</router-link>
        <router-link to="/ClevelandGuardians" class="custom-link">Cleveland Guardians</router-link>
        <router-link to="/ColoradoRockies" class="custom-link">Colorado Rockies</router-link>
        <router-link to="/DetroitTigers" class="custom-link">Detroit Tigers</router-link>
        <router-link to="/HoustonAstros" class="custom-link">Houston Astros</router-link>
        <router-link to="/KansasCityRoyals" class="custom-link">Kansas City Royals</router-link>
        <router-link to="/LosAngelesAngels" class="custom-link">Los Angeles Angels</router-link>
        <router-link to="/LosAngelesDodgers" class="custom-link">Los Angeles Dodgers</router-link>
        <router-link to="/MiamiMarlins" class="custom-link">Miami Marlins</router-link>
        <router-link to="/MilwaukeeBrewers" class="custom-link">Milwaukee Brewers</router-link>
        <router-link to="/MinnesotaTwins" class="custom-link">Minnesota Twins</router-link>
        <router-link to="/NewYorkYankees" class="custom-link">New York Yankees</router-link>
        <router-link to="/NewYorkMets" class="custom-link">New York Mets</router-link>
        <router-link to="/PhiladelphiaPhillies" class="custom-link">Philadelphia Phillies</router-link>
        <router-link to="/PittsburghPirates" class="custom-link">Pittsburgh Pirates</router-link>
        <router-link to="/SanDiegoPadres" class="custom-link">San Diego Padres</router-link>
        <router-link to="/SanFranciscoGiants" class="custom-link">San Francisco Giants</router-link>
        <router-link to="/SeattleMariners" class="custom-link">Seattle Mariners</router-link>
        <router-link to="/StLouisCardinals" class="custom-link">St. Louis Cardinals</router-link>
        <router-link to="/TampaBayRays" class="custom-link">Tampa Bay Rays</router-link>
        <router-link to="/TexasRangers" class="custom-link">Texas Rangers</router-link>
        <router-link to="/TorontoBlueJays" class="custom-link">Toronto Blue Jays</router-link>
        <router-link to="/WashingtonNationals" class="custom-link">Washington Nationals</router-link>
      </nav>
      <router-view></router-view>
    </div>
  </main>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from 'vue';

export default defineComponent({
  name: 'AppHeader',
  props: {
    logoSrc: {
      type: String,
      required: true,
    },
    logoAlt: {
      type: String,
      default: 'Logo',
    },
  },
  setup() {
    const games = ref<any[]>([]); // Reactive variable for API data
    const loading = ref(false); // Loading state
    const error = ref<string | null>(null); // Error state
    const standings = ref<any[]>([]); // Reactive variable for API data
    const loading2 = ref(false); // Loading state
    const error2 = ref<string | null>(null); // Error state
    const standings2 = ref<any[]>([]); // Reactive variable for API data
    const loading3 = ref(false); // Loading state
    const error3 = ref<string | null>(null); // Error state
    const divisions = ref<string[]>(['East', 'Central', 'West']); 



    // Fetch games from the API using `fetch`
    const fetchGamesData = async () => {
      loading.value = true;
      error.value = null;

      try {
        const response = await fetch('https://statsapi.mlb.com/api/v1/schedule?hydrate=team,lineups&sportId=1&startDate=2024-07-01&endDate=2024-07-5'); // Replace with your API endpoint
        if (!response.ok) {
          throw new Error(`Error: ${response.statusText}`);
        }

        const data = await response.json();
        games.value = data;
      } catch (err) {
        console.error(err);
        error.value = 'Failed to fetch games.';
      } finally {
        loading.value = false;
      }
    };

    const fetchStandingsData = async () => {
      loading2.value = true;
      error2.value = null;

      try {
        const response = await fetch('https://statsapi.mlb.com/api/v1/standings?leagueId=103&divisionId=201'); // Replace with your API endpoint
        if (!response.ok) {
          throw new Error(`Error: ${response.statusText}`);
        }

        const data = await response.json();
        standings.value = data;
      } catch (err) {
        console.error(err);
        error2.value = 'Failed to fetch games.';
      } finally {
        loading2.value = false;
      }
    };
    const fetchStandingsData2 = async () => {
      loading3.value = true;
      error3.value = null;

      try {
        const response = await fetch('https://statsapi.mlb.com/api/v1/standings?leagueId=104'); 
        if (!response.ok) {
          throw new Error(`Error: ${response.statusText}`);
        }

        const data = await response.json();
        standings2.value = data;
      } catch (err) {
        console.error(err);
        error3.value = 'Failed to fetch games.';
      } finally {
        loading3.value = false;
      }
    };

  


    // Fetch data when the component is mounted
    onMounted(fetchGamesData);
    onMounted(fetchStandingsData);
    onMounted(fetchStandingsData2);

    return {
      games,
      loading,
      error,
      standings,
      loading2, 
      error2,
      standings2,
      loading3, 
      error3,
      divisions,
    };
  },
});
</script>

<style scoped>
a {
  text-decoration: none;
}
.header {
  display: flex;
  align-items: left;
  justify-content: space-between;
  background-color: #ffffff;
  padding: 1rem;
  border-bottom: 1px solid #000000;
}
.main-container {
  display: flex;
  flex: 1;
  justify-content: flex-start;
  gap: 400px; 
  color: #ad0000;
}
.team-information{
  color: #ad0000;
}
.logo {
  height: 60px;
  width: auto;
}
.logo-container {
  display: flex;
  align-items: center;
}
.header-paragraph {
  font-size: 35px;
  color: #00054f;
  text-align: center;
  margin-left: 1rem;
}
.game-info {
  font-size: 18px;
  color: #00054f;


}
.body-container {
  color: #00054f;
  display: flex;
  justify-content: flex-start;
  gap: 20px;
  

}
.standings {
  color: #ad0000;
}
.team-names {
  display: flex;  /* Flexbox for horizontal layout */
  overflow-x: auto;  /* Enable horizontal scrolling */
  white-space: nowrap;
  padding: 20px 0;
  margin-right: 20px;
}
.custom-link {
  color: #00054f; 
  margin-right: 20px;
  font-size: 18px;

}
.custom-link:hover {
  color: #ad0000;  
}
.custom-link:active {
  color: #ad0000;  
}

</style>
