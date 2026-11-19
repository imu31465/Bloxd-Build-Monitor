export const id = 92;
export const ids = [91, 92];
export const modules = {
  35918: (zz, uz, bz) => {
    bz.r(uz), bz.d(uz, {
      countDecodesAs: () => Oz,
      decodedAudio: () => pz
    });
    var Ez = bz(4616);
    const nz = Ez.Howler,
      iz = new Map;
    let lz = 0;
    const Mz = {
        song: 0,
        sheet: 0
      },
      tz = new WeakMap,
      Hz = new WeakSet;

    function Oz(zz, uz) {
      return tz.set(zz, uz), zz
    }

    function pz() {
      return {
        bytes: lz,
        songsDecoded: Mz.song,
        sheetsDecoded: Mz.sheet
      }
    }

    function dz(zz) {
      if (Hz.has(zz)) return;
      Hz.add(zz);
      const uz = 1 === zz.decodeAudioData.length,
        bz = zz.decodeAudioData.bind(zz);
      zz.decodeAudioData = (zz, Ez, Hz) => {
        const Oz = zz => {
          const uz = nz._howls.filter((zz => "loaded" !== zz._state));
          try {
            null === Ez || void 0 === Ez || Ez(zz)
          } finally {
            const bz = uz.find((zz => "loaded" === zz._state));
            void 0 !== bz && "string" === typeof bz._src && function(zz, uz, bz) {
              var Ez;
              lz += bz - (null !== (Ez = iz.get(uz)) && void 0 !== Ez ? Ez : 0), iz.set(uz, bz);
              const nz = tz.get(zz);
              void 0 !== nz && Mz[nz]++
            }(bz, bz._src, zz.length * zz.numberOfChannels * Float32Array.BYTES_PER_ELEMENT)
          }
          return zz
        };
        if (!uz) return bz(zz, Oz, Hz);
        const pz = bz(zz).then(Oz);
        return pz.catch((zz => {
          null === Hz || void 0 === Hz || Hz(zz)
        })), pz
      }
    }
    const Fz = Ez.Howl.prototype,
      Zz = Fz.init;
    Fz.init = function(zz) {
      return Ez.Howler.volume(), nz.ctx && dz(nz.ctx), Zz.call(this, zz)
    };
    const Rz = Fz.unload;
    Fz.unload = function() {
      const zz = this._src,
        uz = Rz.call(this);
      if ("string" !== typeof zz) return uz;
      const bz = iz.get(zz);
      return void 0 !== bz && function(zz) {
        return !nz._howls.some((uz => uz._src === zz || "string" === typeof uz._src && zz.indexOf(uz._src) >= 0))
      }(zz) && (iz.delete(zz), lz -= bz), uz
    }
  },
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