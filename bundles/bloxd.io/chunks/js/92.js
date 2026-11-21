export const id = 92;
export const ids = [92];
export const modules = {
  4743: (dd, Jd, kd) => {
    kd.r(Jd), kd.d(Jd, {
      Howl: () => Nd.Howl,
      Howler: () => Nd.Howler,
      musicOutput: () => Ld,
      readyAudioContext: () => Od
    });
    var pd, Nd = kd(4745),
      Wd = kd(4516);
    const Pd = Nd.Howler;

    function Zd() {
      var dd, Jd;
      if (Pd.ctx || !Pd.usingWebAudio || "undefined" === typeof AudioContext || !(0, Wd.h)()) return;
      const kd = navigator.audioSession;
      let pd;
      "auto" === (null === kd || void 0 === kd ? void 0 : kd.type) && (kd.type = "ambient");
      try {
        pd = new AudioContext({
          sampleRate: 44100
        })
      } catch {
        return
      }
      const Nd = pd.createGain();
      Nd.gain.setValueAtTime(Pd._muted ? 0 : null !== (dd = Pd._volume) && void 0 !== dd ? dd : 1, pd.currentTime), Nd.connect(pd.destination), Pd.ctx = pd, Pd.masterGain = Nd, null === (Jd = Pd._setup) || void 0 === Jd || Jd.call(Pd)
    }
    Pd._mobileUnloaded = !0;
    const gd = Pd.volume.bind(Nd.Howler);
    Pd.volume = function() {
      return Zd(), gd(...arguments)
    };
    const Cd = Pd.mute.bind(Nd.Howler);
    Pd.mute = dd => (Zd(), Cd(dd));
    const Kd = Nd.Howl.prototype,
      od = Kd.init;
    Kd.init = function(dd) {
      return Zd(), od.call(this, dd)
    };
    let ld = 0;
    const Qd = null === (pd = Pd._autoSuspend) || void 0 === pd ? void 0 : pd.bind(Nd.Howler);

    function Ld() {
      Od();
      const {
        ctx: dd,
        masterGain: Jd
      } = Pd;
      return dd && Jd ? {
        ctx: dd,
        destination: Jd,
        holdAwake: dd => {
          var Jd, kd;
          (ld += dd ? 1 : -1, dd) ? null === (Jd = Pd._autoResume) || void 0 === Jd || Jd.call(Pd): null === (kd = Pd._autoSuspend) || void 0 === kd || kd.call(Pd)
        },
        wake: () => {
          var Jd;
          "running" !== dd.state && (null === (Jd = Pd._autoResume) || void 0 === Jd || Jd.call(Pd), dd.resume().catch((() => {})))
        }
      } : null
    }

    function Od() {
      var dd;
      (Pd.volume(), Pd.ctx && Pd.autoUnlock) && (null === (dd = Pd._unlockAudio) || void 0 === dd || dd.call(Pd))
    }
    Qd && (Pd._autoSuspend = () => ld > 0 ? Nd.Howler : Qd())
  }
};
Object.freeze(modules);
for (const dd in modules) Object.freeze(modules[dd]);