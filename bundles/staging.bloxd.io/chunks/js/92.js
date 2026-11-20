export const id = 92;
export const ids = [91, 92];
export const modules = {
  36015: (UU, RU, gU) => {
    gU.r(RU), gU.d(RU, {
      countDecodesAs: () => cU,
      decodedAudio: () => GU
    });
    var tU = gU(4512);
    const pU = tU.Howler,
      EU = new Map;
    let PU = 0;
    const TU = {
        song: 0,
        sheet: 0
      },
      qU = new WeakMap,
      KU = new WeakSet;

    function cU(UU, RU) {
      return qU.set(UU, RU), UU
    }

    function GU() {
      return {
        bytes: PU,
        songsDecoded: TU.song,
        sheetsDecoded: TU.sheet
      }
    }

    function jU(UU) {
      if (KU.has(UU)) return;
      KU.add(UU);
      const RU = 1 === UU.decodeAudioData.length,
        gU = UU.decodeAudioData.bind(UU);
      UU.decodeAudioData = (UU, tU, KU) => {
        const cU = UU => {
          const RU = pU._howls.filter((UU => "loaded" !== UU._state));
          try {
            null === tU || void 0 === tU || tU(UU)
          } finally {
            const gU = RU.find((UU => "loaded" === UU._state));
            void 0 !== gU && "string" === typeof gU._src && function(UU, RU, gU) {
              var tU;
              PU += gU - (null !== (tU = EU.get(RU)) && void 0 !== tU ? tU : 0), EU.set(RU, gU);
              const pU = qU.get(UU);
              void 0 !== pU && TU[pU]++
            }(gU, gU._src, UU.length * UU.numberOfChannels * Float32Array.BYTES_PER_ELEMENT)
          }
          return UU
        };
        if (!RU) return gU(UU, cU, KU);
        const GU = gU(UU).then(cU);
        return GU.catch((UU => {
          null === KU || void 0 === KU || KU(UU)
        })), GU
      }
    }
    const uU = tU.Howl.prototype,
      CU = uU.init;
    uU.init = function(UU) {
      return tU.Howler.volume(), pU.ctx && jU(pU.ctx), CU.call(this, UU)
    };
    const hU = uU.unload;
    uU.unload = function() {
      const UU = this._src,
        RU = hU.call(this);
      if ("string" !== typeof UU) return RU;
      const gU = EU.get(UU);
      return void 0 !== gU && function(UU) {
        return !pU._howls.some((RU => RU._src === UU || "string" === typeof RU._src && UU.indexOf(RU._src) >= 0))
      }(UU) && (EU.delete(UU), PU -= gU), RU
    }
  },
  4512: (UU, RU, gU) => {
    gU.r(RU), gU.d(RU, {
      Howl: () => pU.Howl,
      Howler: () => pU.Howler,
      iosAudio: () => qU,
      musicOutput: () => QU,
      readyAudioContext: () => eU
    });
    var tU, pU = gU(4518),
      EU = gU(96);
    const PU = pU.Howler;
    let TU;

    function qU() {
      return TU ??= "ios" === (0, EU.getOperatingSystem)(), TU
    }

    function KU() {
      var UU, RU;
      if (PU.ctx || !PU.usingWebAudio || "undefined" === typeof AudioContext || !qU()) return;
      const gU = navigator.audioSession;
      let tU;
      "auto" === (null === gU || void 0 === gU ? void 0 : gU.type) && (gU.type = "ambient");
      try {
        tU = new AudioContext({
          sampleRate: 44100
        })
      } catch {
        return
      }
      const pU = tU.createGain();
      pU.gain.setValueAtTime(PU._muted ? 0 : null !== (UU = PU._volume) && void 0 !== UU ? UU : 1, tU.currentTime), pU.connect(tU.destination), PU.ctx = tU, PU.masterGain = pU, null === (RU = PU._setup) || void 0 === RU || RU.call(PU)
    }
    PU._mobileUnloaded = !0;
    const cU = PU.volume.bind(pU.Howler);
    PU.volume = function() {
      return KU(), cU(...arguments)
    };
    const GU = PU.mute.bind(pU.Howler);
    PU.mute = UU => (KU(), GU(UU));
    const jU = pU.Howl.prototype,
      uU = jU.init;
    jU.init = function(UU) {
      return KU(), uU.call(this, UU)
    };
    let CU = 0;
    const hU = null === (tU = PU._autoSuspend) || void 0 === tU ? void 0 : tU.bind(pU.Howler);

    function QU() {
      eU();
      const {
        ctx: UU,
        masterGain: RU
      } = PU;
      return UU && RU ? {
        ctx: UU,
        destination: RU,
        holdAwake: UU => {
          var RU, gU;
          (CU += UU ? 1 : -1, UU) ? null === (RU = PU._autoResume) || void 0 === RU || RU.call(PU): null === (gU = PU._autoSuspend) || void 0 === gU || gU.call(PU)
        },
        wake: () => {
          var RU;
          "running" !== UU.state && (null === (RU = PU._autoResume) || void 0 === RU || RU.call(PU), UU.resume().catch((() => {})))
        }
      } : null
    }

    function eU() {
      var UU;
      (PU.volume(), PU.ctx && PU.autoUnlock) && (null === (UU = PU._unlockAudio) || void 0 === UU || UU.call(PU))
    }
    hU && (PU._autoSuspend = () => CU > 0 ? pU.Howler : hU())
  }
};
Object.freeze(modules);
for (const UU in modules) Object.freeze(modules[UU]);