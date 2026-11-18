export const id = 85;
export const ids = [85];
export const modules = {
  4259: (JJ, cJ, ZJ) => {
    ZJ.d(cJ, {
      Howl: () => FJ.Howl,
      b: () => FJ.Howler,
      readyAudioContext: () => UJ
    });
    var FJ = ZJ(4267);

    function UJ() {
      const JJ = FJ.Howler;
      var cJ;
      (JJ.volume(), JJ.ctx && JJ.autoUnlock) && (null === (cJ = JJ._unlockAudio) || void 0 === cJ || cJ.call(JJ))
    }
    FJ.Howler._mobileUnloaded = !0
  }
};
Object.freeze(modules);
for (const JJ in modules) Object.freeze(modules[JJ]);