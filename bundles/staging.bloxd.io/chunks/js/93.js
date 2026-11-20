export const id = 93;
export const ids = [92, 93];
export const modules = {
  36242: (TT, kT, cT) => {
    cT.r(kT), cT.d(kT, {
      countDecodesAs: () => AT,
      decodedAudio: () => CT
    });
    var lT = cT(36247),
      MT = cT(4820);
    const KT = MT.Howler,
      OT = new Map;
    let yT = 0;
    const fT = {
        song: 0,
        sheet: 0
      },
      xT = new WeakMap,
      IT = new WeakSet;

    function AT(TT, kT) {
      return xT.set(TT, kT), TT
    }

    function CT() {
      return {
        bytes: yT,
        songsDecoded: fT.song,
        sheetsDecoded: fT.sheet
      }
    }

    function jT(TT) {
      if (IT.has(TT)) return;
      IT.add(TT);
      const kT = 1 === TT.decodeAudioData.length,
        cT = TT.decodeAudioData.bind(TT);
      TT.decodeAudioData = (TT, lT, MT) => {
        const IT = TT => {
          const kT = KT._howls.filter((TT => "loaded" !== TT._state));
          try {
            null === lT || void 0 === lT || lT(TT)
          } finally {
            const cT = kT.find((TT => "loaded" === TT._state));
            void 0 !== cT && "string" === typeof cT._src && function(TT, kT, cT) {
              var lT;
              yT += cT - (null !== (lT = OT.get(kT)) && void 0 !== lT ? lT : 0), OT.set(kT, cT);
              const MT = xT.get(TT);
              void 0 !== MT && fT[MT]++
            }(cT, cT._src, TT.length * TT.numberOfChannels * Float32Array.BYTES_PER_ELEMENT)
          }
          return TT
        };
        if (!kT) return cT(TT, IT, MT);
        const AT = cT(TT).then(IT);
        return AT.catch((TT => {
          null === MT || void 0 === MT || MT(TT)
        })), AT
      }
    }(0, lT.f)(CT);
    const vT = MT.Howl.prototype,
      tT = vT.init;
    vT.init = function(TT) {
      return MT.Howler.volume(), KT.ctx && jT(KT.ctx), tT.call(this, TT)
    };
    const hT = vT.unload;
    vT.unload = function() {
      const TT = this._src,
        kT = hT.call(this);
      if ("string" !== typeof TT) return kT;
      const cT = OT.get(TT);
      return void 0 !== cT && function(TT) {
        return !KT._howls.some((kT => kT._src === TT || "string" === typeof kT._src && TT.indexOf(kT._src) >= 0))
      }(TT) && (OT.delete(TT), yT -= cT), kT
    }
  },
  36247: (TT, kT, cT) => {
    cT.d(kT, {
      e: () => KT,
      f: () => MT
    });
    let lT = null;

    function MT(TT) {
      lT = TT
    }

    function KT() {
      return null === lT ? null : lT()
    }
  },
  4820: (TT, kT, cT) => {
    cT.r(kT), cT.d(kT, {
      Howl: () => MT.Howl,
      Howler: () => MT.Howler,
      musicOutput: () => vT,
      readyAudioContext: () => tT
    });
    var lT, MT = cT(4825),
      KT = cT(4641);
    const OT = MT.Howler;

    function yT() {
      var TT, kT;
      if (OT.ctx || !OT.usingWebAudio || "undefined" === typeof AudioContext || !(0, KT.f)()) return;
      const cT = navigator.audioSession;
      let lT;
      "auto" === (null === cT || void 0 === cT ? void 0 : cT.type) && (cT.type = "ambient");
      try {
        lT = new AudioContext({
          sampleRate: 44100
        })
      } catch {
        return
      }
      const MT = lT.createGain();
      MT.gain.setValueAtTime(OT._muted ? 0 : null !== (TT = OT._volume) && void 0 !== TT ? TT : 1, lT.currentTime), MT.connect(lT.destination), OT.ctx = lT, OT.masterGain = MT, null === (kT = OT._setup) || void 0 === kT || kT.call(OT)
    }
    OT._mobileUnloaded = !0;
    const fT = OT.volume.bind(MT.Howler);
    OT.volume = function() {
      return yT(), fT(...arguments)
    };
    const xT = OT.mute.bind(MT.Howler);
    OT.mute = TT => (yT(), xT(TT));
    const IT = MT.Howl.prototype,
      AT = IT.init;
    IT.init = function(TT) {
      return yT(), AT.call(this, TT)
    };
    let CT = 0;
    const jT = null === (lT = OT._autoSuspend) || void 0 === lT ? void 0 : lT.bind(MT.Howler);

    function vT() {
      tT();
      const {
        ctx: TT,
        masterGain: kT
      } = OT;
      return TT && kT ? {
        ctx: TT,
        destination: kT,
        holdAwake: TT => {
          var kT, cT;
          (CT += TT ? 1 : -1, TT) ? null === (kT = OT._autoResume) || void 0 === kT || kT.call(OT): null === (cT = OT._autoSuspend) || void 0 === cT || cT.call(OT)
        },
        wake: () => {
          var kT;
          "running" !== TT.state && (null === (kT = OT._autoResume) || void 0 === kT || kT.call(OT), TT.resume().catch((() => {})))
        }
      } : null
    }

    function tT() {
      var TT;
      (OT.volume(), OT.ctx && OT.autoUnlock) && (null === (TT = OT._unlockAudio) || void 0 === TT || TT.call(OT))
    }
    jT && (OT._autoSuspend = () => CT > 0 ? MT.Howler : jT())
  }
};
Object.freeze(modules);
for (const TT in modules) Object.freeze(modules[TT]);