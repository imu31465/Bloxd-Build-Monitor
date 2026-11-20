export const id = 92;
export const ids = [91, 92];
export const modules = {
  35947: (zz, tz, sz) => {
    sz.r(tz), sz.d(tz, {
      countDecodesAs: () => Kz,
      decodedAudio: () => uz
    });
    var Fz = sz(4488);
    const Wz = Fz.Howler,
      Xz = new Map;
    let Oz = 0;
    const oz = {
        song: 0,
        sheet: 0
      },
      vz = new WeakMap,
      Uz = new WeakSet;

    function Kz(zz, tz) {
      return vz.set(zz, tz), zz
    }

    function uz() {
      return {
        bytes: Oz,
        songsDecoded: oz.song,
        sheetsDecoded: oz.sheet
      }
    }

    function Nz(zz) {
      if (Uz.has(zz)) return;
      Uz.add(zz);
      const tz = 1 === zz.decodeAudioData.length,
        sz = zz.decodeAudioData.bind(zz);
      zz.decodeAudioData = (zz, Fz, Uz) => {
        const Kz = zz => {
          const tz = Wz._howls.filter((zz => "loaded" !== zz._state));
          try {
            null === Fz || void 0 === Fz || Fz(zz)
          } finally {
            const sz = tz.find((zz => "loaded" === zz._state));
            void 0 !== sz && "string" === typeof sz._src && function(zz, tz, sz) {
              var Fz;
              Oz += sz - (null !== (Fz = Xz.get(tz)) && void 0 !== Fz ? Fz : 0), Xz.set(tz, sz);
              const Wz = vz.get(zz);
              void 0 !== Wz && oz[Wz]++
            }(sz, sz._src, zz.length * zz.numberOfChannels * Float32Array.BYTES_PER_ELEMENT)
          }
          return zz
        };
        if (!tz) return sz(zz, Kz, Uz);
        const uz = sz(zz).then(Kz);
        return uz.catch((zz => {
          null === Uz || void 0 === Uz || Uz(zz)
        })), uz
      }
    }
    const bz = Fz.Howl.prototype,
      wz = bz.init;
    bz.init = function(zz) {
      return Fz.Howler.volume(), Wz.ctx && Nz(Wz.ctx), wz.call(this, zz)
    };
    const Dz = bz.unload;
    bz.unload = function() {
      const zz = this._src,
        tz = Dz.call(this);
      if ("string" !== typeof zz) return tz;
      const sz = Xz.get(zz);
      return void 0 !== sz && function(zz) {
        return !Wz._howls.some((tz => tz._src === zz || "string" === typeof tz._src && zz.indexOf(tz._src) >= 0))
      }(zz) && (Xz.delete(zz), Oz -= sz), tz
    }
  },
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