export const id = 91;
export const ids = [91];
export const modules = {
  4488: (zz, tz, sz) => {
    sz.r(tz), sz.d(tz, {
      Howl: () => Wz.Howl,
      Howler: () => Wz.Howler,
      iosAudio: () => vz,
      musicOutput: () => gz,
      readyAudioContext: () => Hz
    });
    var Fz, Wz = sz(4491),
      Xz = sz(106);
    const Oz = Wz.Howler;
    let oz;

    function vz() {
      return oz ??= "ios" === (0, Xz.getOperatingSystem)(), oz
    }

    function Uz() {
      var zz, tz;
      if (Oz.ctx || !Oz.usingWebAudio || "undefined" === typeof AudioContext || !vz()) return;
      const sz = navigator.audioSession;
      let Fz;
      "auto" === (null === sz || void 0 === sz ? void 0 : sz.type) && (sz.type = "ambient");
      try {
        Fz = new AudioContext({
          sampleRate: 44100
        })
      } catch {
        return
      }
      const Wz = Fz.createGain();
      Wz.gain.setValueAtTime(Oz._muted ? 0 : null !== (zz = Oz._volume) && void 0 !== zz ? zz : 1, Fz.currentTime), Wz.connect(Fz.destination), Oz.ctx = Fz, Oz.masterGain = Wz, null === (tz = Oz._setup) || void 0 === tz || tz.call(Oz)
    }
    Oz._mobileUnloaded = !0;
    const Kz = Oz.volume.bind(Wz.Howler);
    Oz.volume = function() {
      return Uz(), Kz(...arguments)
    };
    const uz = Oz.mute.bind(Wz.Howler);
    Oz.mute = zz => (Uz(), uz(zz));
    const Nz = Wz.Howl.prototype,
      bz = Nz.init;
    Nz.init = function(zz) {
      return Uz(), bz.call(this, zz)
    };
    let wz = 0;
    const Dz = null === (Fz = Oz._autoSuspend) || void 0 === Fz ? void 0 : Fz.bind(Wz.Howler);

    function gz() {
      Hz();
      const {
        ctx: zz,
        masterGain: tz
      } = Oz;
      return zz && tz ? {
        ctx: zz,
        destination: tz,
        holdAwake: zz => {
          var tz, sz;
          (wz += zz ? 1 : -1, zz) ? null === (tz = Oz._autoResume) || void 0 === tz || tz.call(Oz): null === (sz = Oz._autoSuspend) || void 0 === sz || sz.call(Oz)
        },
        wake: () => {
          var tz;
          "running" !== zz.state && (null === (tz = Oz._autoResume) || void 0 === tz || tz.call(Oz), zz.resume().catch((() => {})))
        }
      } : null
    }

    function Hz() {
      var zz;
      (Oz.volume(), Oz.ctx && Oz.autoUnlock) && (null === (zz = Oz._unlockAudio) || void 0 === zz || zz.call(Oz))
    }
    Dz && (Oz._autoSuspend = () => wz > 0 ? Wz.Howler : Dz())
  }
};
Object.freeze(modules);
for (const zz in modules) Object.freeze(modules[zz]);