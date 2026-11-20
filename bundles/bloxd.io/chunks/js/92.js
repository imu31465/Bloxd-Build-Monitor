export const id = 92;
export const ids = [92];
export const modules = {
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