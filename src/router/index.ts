import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import ArizonaDiamondbacks from '../components/ArizonaDiamondbacks.vue';
import AtlantaBraves from '../components/AtlantaBraves.vue';
import BaltimoreOrioles from '../components/BaltimoreOrioles.vue';
import BostonRedSocks from '../components/BostonRedSocks.vue';
import ChicagoCubs from '../components/ChicagoCubs.vue';
import ClevelandGuardians from '../components/ClevelandGuardians.vue';
import CincinnatiReds from '../components/CincinnatiReds.vue';
import ColoradoRockies from '../components/ColoradoRockies.vue';
import ChicagoWhiteSocks from '../components/ChicagoWhiteSocks.vue';
import DetroitTigers from '../components/DetroitTigers.vue';
import HoustonAstros from '../components/HoustonAstros.vue';
import KansasCityRoyals from '../components/KansasCityRoyals.vue';
import LosAngelesAngels from '../components/LosAngelesAngels.vue';
import LosAngelesDodgers from '../components/LosAngelesDodgers.vue';
import MilwaukeeBrewers from '../components/MilwaukeeBrewers.vue';
import MiamiMarlins from '../components/MiamiMarlins.vue';
import MinnesotaTwins from '../components/MinnesotaTwins.vue';
import NewYorkMets from '../components/NewYorkMets.vue';
import NewYorkYankees from '../components/NewYorkYankees.vue';
import PhiladelphiaPhillies from '../components/PhiladelphiaPhillies.vue';
import PittsburghPirates from '../components/PittsburghPirates.vue';
import SanDiegoPadres from '../components/SanDiegoPadres.vue';
import SanFranciscoGiants from '../components/SanFranciscoGiants.vue';
import StLouisCardinals from '../components/StLouisCardinals.vue';
import SeattleMariners from '../components/SeattleMariners.vue';
import TorontoBlueJays from '../components/TorontoBlueJays.vue';
import TampaBayRays from '../components/TampaBayRays.vue';
import TexasRangers from '../components/TexasRangers.vue';
import WashingtonNationals from '../components/WashingtonNationals.vue';


// Define routes for different pages
const routes: Array<RouteRecordRaw> = [
  {
    path: '/ArizonaDiamondbacks',
    name: 'ArizonaDiamondbacks',
    component: ArizonaDiamondbacks,
  },
  {
    path: '/AtlantaBraves',
    name: 'AtlantaBraves',
    component: AtlantaBraves,
  },
  {
    path: '/BaltimoreOrioles',
    name: 'BaltimoreOrioles',
    component: BaltimoreOrioles,
  },
  {
    path: '/BostonRedSocks',
    name: 'BostonRedSocks',
    component: BostonRedSocks,
  },
  {
    path: '/ChicagoCubs',
    name: 'ChicagoCubs',
    component: ChicagoCubs,
  },
  {
    path: '/ClevelandGuardians',
    name: 'ClevelandGuardians',
    component: ClevelandGuardians,
  },
  {
    path: '/CincinnatiReds',
    name: 'CCincinnatiRedsR',
    component: CincinnatiReds,
  },
  {
    path: '/ColoradoRockies',
    name: 'ColoradoRockies',
    component: ColoradoRockies,
  },
  {
    path: '/ChicagoWhiteSocks',
    name: 'ChicagoWhiteSocks',
    component: ChicagoWhiteSocks,
  },
  {
    path: '/DetroitTigers',
    name: 'DetroitTigers',
    component: DetroitTigers,
  },
  {
    path: '/HoustonAstros',
    name: 'HoustonAstros',
    component: HoustonAstros,
  },
  {
    path: '/KansasCityRoyals',
    name: 'KansasCityRoyals',
    component: KansasCityRoyals,
  },
  {
    path: '/LosAngelesAngels',
    name: 'LosAngelesAngels',
    component: LosAngelesAngels,
  },
  {
    path: '/LosAngelesDodgers',
    name: 'LosAngelesDodgers',
    component: LosAngelesDodgers,
  },
  {
    path: '/MilwaukeeBrewers',
    name: 'MilwaukeeBrewers',
    component: MilwaukeeBrewers,
  },
  {
    path: '/MiamiMarlins',
    name: 'MiamiMarlins',
    component: MiamiMarlins,
  },
  {
    path: '/MinnesotaTwins',
    name: 'MinnesotaTwins',
    component: MinnesotaTwins,
  },
  {
    path: '/NewYorkMets',
    name: 'NewYorkMets',
    component: NewYorkMets,
  },
  {
    path: '/NewYorkYankees',
    name: 'NewYorkYankees',
    component: NewYorkYankees,
  },
  {
    path: '/PhiladelphiaPhillies',
    name: 'PhiladelphiaPhillies',
    component: PhiladelphiaPhillies,
  },
  {
    path: '/PittsburghPirates',
    name: 'PittsburghPirates',
    component: PittsburghPirates,
  },
  {
    path: '/SanDiegoPadres',
    name: 'SanDiegoPadres',
    component: SanDiegoPadres,
  },
  {
    path: '/SanFranciscoGiants',
    name: 'SanFranciscoGiants',
    component: SanFranciscoGiants,
  },
  {
    path: '/StLouisCardinals',
    name: 'StLouisCardinals',
    component: StLouisCardinals,
  },
  {
    path: '/SeattleMariners',
    name: 'SeattleMariners',
    component: SeattleMariners,
  },
  {
    path: '/TorontoBlueJays',
    name: 'TorontoBlueJays',
    component: TorontoBlueJays,
  },
  {
    path: '/TampaBayRays',
    name: 'TampaBayRays',
    component: TampaBayRays,
  },
  {
    path: '/TexasRangers',
    name: 'TexasRangers',
    component: TexasRangers,
  },
  {
    path: '/WashingtonNationals',
    name: 'WashingtonNationals',
    component: WashingtonNationals,
  },

];

// Create and export the router
const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
