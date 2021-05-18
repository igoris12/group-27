import { renderClock } from './components/clock/clock.js';
import { progressBar } from './components/progress-Bar/progressBar.js';
import { socials } from './components/socials/socials.js';
import { progressBarData } from './data/progressBarData.js';
import { socialData } from './data/socialsData.js';

renderClock('#hero_clock', '04-19 10:00:00');
socials('#socials_block', socialData);
progressBar('.left-column > p', progressBarData);
