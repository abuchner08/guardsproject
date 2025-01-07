<template>
  <div class="page-container">
    <div class="basic-info">
      <h2 class="section-title">Basic Information</h2>
      <ul>
        <li v-for="(item, index) in info.teams" :key="index" class="information">
          <p>City: {{ item.locationName }}</p>
          <p>League: {{ item.league.name }}</p>
          <p>Division: {{ item.division.name }}</p>
          <p>Venue: {{ item.venue.name }}</p>
          <p>First Year: {{ item.firstYearOfPlay }}</p>
          <p></p>
        </li>
      </ul>
    </div>
    <div class="roster"> 
      <h2 class="section-title">Roster</h2>
      <ul>
        <li v-for="(person, index) in roster.roster" :key="index" class="date">
          <p> # {{person.jerseyNumber}} {{ person.person.fullName }} - {{ person.position.name }}</p>
        </li>
      </ul>
    </div>
    <img src="https://fanatics.frgimages.com/washington-nationals/washington-nationals-distressed-logo-cutout-sign_pi3416000_ff_3416553-bfca6762cbb455373e3d_full.jpg?_hv=2&w=900" alt="Logo" />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from 'vue';
export default defineComponent({
  name: 'WashingtonNationals',
  setup() {
    // Declare reactive variables
  const roster = ref<any[]>([]); // To store the API data
  const loading = ref<boolean>(true); // To manage loading state
  const error = ref<string | null>(null); // To store error messages
  const info = ref<any[]>([]); // To store the API data
  const loading2 = ref<boolean>(true); // To manage loading state
  const error2 = ref<string | null>(null);

  // Fetch data from an API when the component is mounted
  const fetchRoster = async () => {
    try {
      const response = await fetch('https://statsapi.mlb.com/api/v1/teams/120/roster'); // Example API endpoint
      if (!response.ok) {
        throw new Error('Failed to fetch posts');
      }
      const data = await response.json();
      roster.value = data; // Store the data in the posts variable
    } catch (err: any) {
      error.value = err.message; // Store the error message if the fetch fails
    } finally {
      loading.value = false; // Set loading to false after fetching completes
    }
  };
  const fetchInfo = async () => {
    try {
      const response = await fetch('https://statsapi.mlb.com/api/v1/teams/120'); // Example API endpoint
      if (!response.ok) {
        throw new Error('Failed to fetch posts');
      }
      const data = await response.json();
      info.value = data; // Store the data in the posts variable
    } catch (err: any) {
      error2.value = err.message; // Store the error message if the fetch fails
    } finally {
      loading2.value = false; // Set loading to false after fetching completes
    }
  };

  onMounted(fetchRoster);
  onMounted(fetchInfo);

  return {
    roster,
    loading,
    error,
    info, 
    loading2,
    error2,
  };
  }
});
</script>

<style scoped>
  .section-title{
    color: #ad0000;
  }
  .page-container{
    display: flex;
    flex: 1;
    justify-content: flex-start;
    gap: 40px;
  }
  img {
    width:400px;
    height:300px;
  }

</style>