    <script lang="ts">
  import { defineComponent } from 'vue';
  import { useI18n } from 'vue-i18n';
  
  export default defineComponent({
    name: 'LanguageSwitcher',
    setup() {
      const { t, locale } = useI18n();
  
      const toggleLanguage = () => {
        const newLanguage = locale.value === 'en' ? 'sp' : 'en';
        locale.value = newLanguage;
      };
  
      return {
        toggleLanguage,
        currentLanguage: locale,
      };
    },
  });
  </script>

<style scoped>
</style>
  