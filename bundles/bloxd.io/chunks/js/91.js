export const id = 91;
export const ids = [91];
export const modules = {
  4575: (kk, Fk, Bk) => {
    Bk.r(Fk), Bk.d(Fk, {
      Howl: () => tk.Howl,
      Howler: () => tk.Howler,
      iosAudio: () => wk,
      musicOutput: () => fk,
      readyAudioContext: () => mk
    });
    var Rk, tk = Bk(4579),
      ak = Bk(98);
    const Xk = tk.Howler;
    let bk;

    function wk() {
      return bk ??= "ios" === (0, ak.getOperatingSystem)(), bk
    }

    function dk() {
      var kk, Fk;
      if (Xk.ctx || !Xk.usingWebAudio || "undefined" === typeof AudioContext || !wk()) return;
      const Bk = navigator.audioSession;
      let Rk;
      "auto" === (null === Bk || void 0 === Bk ? void 0 : Bk.type) && (Bk.type = "ambient");
      try {
        Rk = new AudioContext({
          sampleRate: 44100
        })
      } catch {
        return
      }
      const tk = Rk.createGain();
      tk.gain.setValueAtTime(Xk._muted ? 0 : null !== (kk = Xk._volume) && void 0 !== kk ? kk : 1, Rk.currentTime), tk.connect(Rk.destination), Xk.ctx = Rk, Xk.masterGain = tk, null === (Fk = Xk._setup) || void 0 === Fk || Fk.call(Xk)
    }
    Xk._mobileUnloaded = !0;
    const sk = Xk.volume.bind(tk.Howler);
    Xk.volume = function() {
      return dk(), sk(...arguments)
    };
    const Vk = Xk.mute.bind(tk.Howler);
    Xk.mute = kk => (dk(), Vk(kk));
    const Jk = tk.Howl.prototype,
      Ak = Jk.init;
    Jk.init = function(kk) {
      return dk(), Ak.call(this, kk)
    };
    let ek = 0;
    const yk = null === (Rk = Xk._autoSuspend) || void 0 === Rk ? void 0 : Rk.bind(tk.Howler);

    function fk() {
      mk();
      const {
        ctx: kk,
        masterGain: Fk
      } = Xk;
      return kk && Fk ? {
        ctx: kk,
        destination: Fk,
        holdAwake: kk => {
          var Fk, Bk;
          (ek += kk ? 1 : -1, kk) ? null === (Fk = Xk._autoResume) || void 0 === Fk || Fk.call(Xk): null === (Bk = Xk._autoSuspend) || void 0 === Bk || Bk.call(Xk)
        },
        wake: () => {
          var Fk;
          "running" !== kk.state && (null === (Fk = Xk._autoResume) || void 0 === Fk || Fk.call(Xk), kk.resume().catch((() => {})))
        }
      } : null
    }

    function mk() {
      var kk;
      (Xk.volume(), Xk.ctx && Xk.autoUnlock) && (null === (kk = Xk._unlockAudio) || void 0 === kk || kk.call(Xk))
    }
    yk && (Xk._autoSuspend = () => ek > 0 ? tk.Howler : yk())
  }
};
Object.freeze(modules);
for (const kk in modules) Object.freeze(modules[kk]);