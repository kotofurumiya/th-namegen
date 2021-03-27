import type { TouhouTitleData } from '../types';
import common from './000_00_common';
import reiiden from './001_00_reiiden';
import fuumaroku from './002_00_fuumaroku';
import yumejikuu from './003_00_yumejikuu';
import gensoukyou from './004_00_gensoukyou';
import kaikidan from './005_00_kaikidan';
import koumakyou from './006_00_koumakyou';
import youyoumu from './007_00_youyoumu';
import suimusou from './007_05_suimusou';
import eiyashou from './008_00_eiyashou';
import kaeizuka from './009_00_kaeizuka';
import bunkachou from './009_05_bunkachou';
import fuujinroku from './010_00_fuujinroku';
import hisouten from './010_05_hisouten';
import chireiden from './011_00_chireiden';
import seirensen from './012_00_seirensen';
import hisoutensoku from './012_03_hisoutensoku';
import doublespoiler from './012_05_doublespoiler';
import youseidaisensou from './012_08_youseidaisensou';
import shinreibyou from './013_00_shinreibyou';
import shinkirou from './013_05_shinkirou';
import kishinjou from './014_00_kishinjou';
import shinpiroku from './014_05_shinpiroku';
import kanjuden from './015_00_kanjuden';
import hyouibana from './015_05_hyouibana';
import tenkuushou from './016_00_tenkuushou';
import hifuunightmarediary from './016_05_hifuunightmarediary';
import kikeijuu from './017_00_kikeijuu';
import {
  hifuu,
  sangetsusei,
  gumonshiki,
  bougetsushou,
  kourindou,
  ibarakasen,
  suzunaan,
  suichouka,
} from './999_99_others';

export const allTitleData: TouhouTitleData[] = [
  common,
  reiiden,
  fuumaroku,
  yumejikuu,
  gensoukyou,
  kaikidan,
  koumakyou,
  youyoumu,
  suimusou,
  eiyashou,
  kaeizuka,
  bunkachou,
  fuujinroku,
  hisouten,
  chireiden,
  seirensen,
  hisoutensoku,
  doublespoiler,
  youseidaisensou,
  shinreibyou,
  shinkirou,
  kishinjou,
  shinpiroku,
  kanjuden,
  hyouibana,
  tenkuushou,
  hifuunightmarediary,
  kikeijuu,
  hifuu,
  sangetsusei,
  gumonshiki,
  bougetsushou,
  kourindou,
  ibarakasen,
  suzunaan,
  suichouka,
];
