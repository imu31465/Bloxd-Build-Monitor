export const id = 91;
export const ids = [91];
export const modules = {
  4341: (TT, oT, IT) => {
    IT.r(oT), IT.d(oT, {
      Howl: () => zT.Howl,
      Howler: () => zT.Howler,
      iosAudio: () => BT,
      musicOutput: () => MT,
      readyAudioContext: () => rT
    });
    var iT, zT = IT(4349),
      kT = IT(90);
    const WT = zT.Howler;
    let XT;

    function BT() {
      return XT ??= "ios" === (0, kT.getOperatingSystem)(), XT
    }

    function FT() {
      var TT, oT;
      if (WT.ctx || !WT.usingWebAudio || "undefined" === typeof AudioContext || !BT()) return;
      const IT = navigator.audioSession;
      let iT;
      "auto" === (null === IT || void 0 === IT ? void 0 : IT.type) && (IT.type = "ambient");
      try {
        iT = new AudioContext({
          sampleRate: 44100
        })
      } catch {
        return
      }
      const zT = iT.createGain();
      zT.gain.setValueAtTime(WT._muted ? 0 : null !== (TT = WT._volume) && void 0 !== TT ? TT : 1, iT.currentTime), zT.connect(iT.destination), WT.ctx = iT, WT.masterGain = zT, null === (oT = WT._setup) || void 0 === oT || oT.call(WT)
    }
    WT._mobileUnloaded = !0;
    const ST = WT.volume.bind(zT.Howler);
    WT.volume = function() {
      return FT(), ST(...arguments)
    };
    const DT = WT.mute.bind(zT.Howler);
    WT.mute = TT => (FT(), DT(TT));
    const LT = zT.Howl.prototype,
      xT = LT.init;
    LT.init = function(TT) {
      return FT(), xT.call(this, TT)
    };
    let cT = 0;
    const KT = null === (iT = WT._autoSuspend) || void 0 === iT ? void 0 : iT.bind(zT.Howler);

    function MT() {
      rT();
      const {
        ctx: TT,
        masterGain: oT
      } = WT;
      return TT && oT ? {
        ctx: TT,
        destination: oT,
        holdAwake: TT => {
          var oT, IT;
          (cT += TT ? 1 : -1, TT) ? null === (oT = WT._autoResume) || void 0 === oT || oT.call(WT): null === (IT = WT._autoSuspend) || void 0 === IT || IT.call(WT)
        },
        wake: () => {
          var oT;
          "running" !== TT.state && (null === (oT = WT._autoResume) || void 0 === oT || oT.call(WT), TT.resume().catch((() => {})))
        }
      } : null
    }

    function rT() {
      var TT;
      (WT.volume(), WT.ctx && WT.autoUnlock) && (null === (TT = WT._unlockAudio) || void 0 === TT || TT.call(WT))
    }
    KT && (WT._autoSuspend = () => cT > 0 ? zT.Howler : KT())
  }
};
Object.freeze(modules);
for (const TT in modules) Object.freeze(modules[TT]);