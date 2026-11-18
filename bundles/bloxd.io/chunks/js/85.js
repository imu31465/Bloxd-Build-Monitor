export const id = 85;
export const ids = [85];
export const modules = {
  4258: (BB, TB, dB) => {
    dB.d(TB, {
      Howl: () => VB.Howl,
      b: () => VB.Howler,
      readyAudioContext: () => yB
    });
    var VB = dB(4262);

    function yB() {
      const BB = VB.Howler;
      var TB;
      (BB.volume(), BB.ctx && BB.autoUnlock) && (null === (TB = BB._unlockAudio) || void 0 === TB || TB.call(BB))
    }
    VB.Howler._mobileUnloaded = !0
  }
};
Object.freeze(modules);
for (const BB in modules) Object.freeze(modules[BB]);