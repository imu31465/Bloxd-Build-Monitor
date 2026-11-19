export const id = 91;
export const ids = [91];
export const modules = {
  4616: (zz, uz, bz) => {
    bz.r(uz), bz.d(uz, {
      Howl: () => nz.Howl,
      Howler: () => nz.Howler,
      iosAudio: () => tz,
      musicOutput: () => Kz,
      readyAudioContext: () => wz
    });
    var Ez, nz = bz(4625),
      iz = bz(96);
    const lz = nz.Howler;
    let Mz;

    function tz() {
      return Mz ??= "ios" === (0, iz.getOperatingSystem)(), Mz
    }

    function Hz() {
      var zz, uz;
      if (lz.ctx || !lz.usingWebAudio || "undefined" === typeof AudioContext || !tz()) return;
      const bz = navigator.audioSession;
      let Ez;
      "auto" === (null === bz || void 0 === bz ? void 0 : bz.type) && (bz.type = "ambient");
      try {
        Ez = new AudioContext({
          sampleRate: 44100
        })
      } catch {
        return
      }
      const nz = Ez.createGain();
      nz.gain.setValueAtTime(lz._muted ? 0 : null !== (zz = lz._volume) && void 0 !== zz ? zz : 1, Ez.currentTime), nz.connect(Ez.destination), lz.ctx = Ez, lz.masterGain = nz, null === (uz = lz._setup) || void 0 === uz || uz.call(lz)
    }
    lz._mobileUnloaded = !0;
    const Oz = lz.volume.bind(nz.Howler);
    lz.volume = function() {
      return Hz(), Oz(...arguments)
    };
    const pz = lz.mute.bind(nz.Howler);
    lz.mute = zz => (Hz(), pz(zz));
    const dz = nz.Howl.prototype,
      Fz = dz.init;
    dz.init = function(zz) {
      return Hz(), Fz.call(this, zz)
    };
    let Zz = 0;
    const Rz = null === (Ez = lz._autoSuspend) || void 0 === Ez ? void 0 : Ez.bind(nz.Howler);

    function Kz() {
      wz();
      const {
        ctx: zz,
        masterGain: uz
      } = lz;
      return zz && uz ? {
        ctx: zz,
        destination: uz,
        holdAwake: zz => {
          var uz, bz;
          (Zz += zz ? 1 : -1, zz) ? null === (uz = lz._autoResume) || void 0 === uz || uz.call(lz): null === (bz = lz._autoSuspend) || void 0 === bz || bz.call(lz)
        },
        wake: () => {
          var uz;
          "running" !== zz.state && (null === (uz = lz._autoResume) || void 0 === uz || uz.call(lz), zz.resume().catch((() => {})))
        }
      } : null
    }

    function wz() {
      var zz;
      (lz.volume(), lz.ctx && lz.autoUnlock) && (null === (zz = lz._unlockAudio) || void 0 === zz || zz.call(lz))
    }
    Rz && (lz._autoSuspend = () => Zz > 0 ? nz.Howler : Rz())
  }
};
Object.freeze(modules);
for (const zz in modules) Object.freeze(modules[zz]);