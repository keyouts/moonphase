function getMoonPhase(date) {
      const lp = 2551443; // Lunar period in seconds
      const now = date.getTime() / 1000;
      const newMoon = new Date('2000-01-06T18:14:00Z').getTime() / 1000;
      const phase = ((now - newMoon) % lp) / lp;
      return phase;
    }

    function updateMoon() {
      const phase = getMoonPhase(new Date());
      const phaseEl = document.getElementById('phase');
      const labelEl = document.getElementById('phaseLabel');

      let offset = 0;
      let label = '';

      if (phase < 0.03 || phase > 0.97) {
        label = 'New Moon';
        offset = 30;
      } else if (phase < 0.25) {
        label = 'Waxing Crescent';
        offset = 15;
      } else if (phase < 0.27) {
        label = 'First Quarter';
        offset = 0;
      } else if (phase < 0.48) {
        label = 'Waxing Gibbous';
        offset = -15;
      } else if (phase < 0.52) {
        label = 'Full Moon';
        offset = -30;
      } else if (phase < 0.75) {
        label = 'Waning Gibbous';
        offset = -15;
      } else if (phase < 0.77) {
        label = 'Last Quarter';
        offset = 0;
      } else {
        label = 'Waning Crescent';
        offset = 15;
      }

      phaseEl.style.setProperty('--offset', `${offset}px`);
      labelEl.innerText = label;
    }

    updateMoon();