/* Existing keys stay intact so saved papers, notes and learning progress survive upgrades. */
(function () {
  window.LabStorage = {
    read(key, fallback = {}) { if (window.LabAccount?.user && window.LabAccount.keys.includes(key)) return window.LabAccount.read(key, fallback); try { return JSON.parse(localStorage.getItem(key)) ?? fallback; } catch { return fallback; } },
    write(key, value) { if (window.LabAccount?.user && window.LabAccount.keys.includes(key)) return window.LabAccount.write(key, value); try { localStorage.setItem(key, JSON.stringify(value)); return true; } catch { return false; } }
  };
})();
