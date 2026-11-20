export const id = 92;
export const ids = [91, 92];
export const modules = {
  36170: (kk, Fk, Bk) => {
    Bk.r(Fk), Bk.d(Fk, {
      countDecodesAs: () => sk,
      decodedAudio: () => Vk
    });
    var Rk = Bk(4575);
    const tk = Rk.Howler,
      ak = new Map;
    let Xk = 0;
    const bk = {
        song: 0,
        sheet: 0
      },
      wk = new WeakMap,
      dk = new WeakSet;

    function sk(kk, Fk) {
      return wk.set(kk, Fk), kk
    }

    function Vk() {
      return {
        bytes: Xk,
        songsDecoded: bk.song,
        sheetsDecoded: bk.sheet
      }
    }

    function Jk(kk) {
      if (dk.has(kk)) return;
      dk.add(kk);
      const Fk = 1 === kk.decodeAudioData.length,
        Bk = kk.decodeAudioData.bind(kk);
      kk.decodeAudioData = (kk, Rk, dk) => {
        const sk = kk => {
          const Fk = tk._howls.filter((kk => "loaded" !== kk._state));
          try {
            null === Rk || void 0 === Rk || Rk(kk)
          } finally {
            const Bk = Fk.find((kk => "loaded" === kk._state));
            void 0 !== Bk && "string" === typeof Bk._src && function(kk, Fk, Bk) {
              var Rk;
              Xk += Bk - (null !== (Rk = ak.get(Fk)) && void 0 !== Rk ? Rk : 0), ak.set(Fk, Bk);
              const tk = wk.get(kk);
              void 0 !== tk && bk[tk]++
            }(Bk, Bk._src, kk.length * kk.numberOfChannels * Float32Array.BYTES_PER_ELEMENT)
          }
          return kk
        };
        if (!Fk) return Bk(kk, sk, dk);
        const Vk = Bk(kk).then(sk);
        return Vk.catch((kk => {
          null === dk || void 0 === dk || dk(kk)
        })), Vk
      }
    }
    const Ak = Rk.Howl.prototype,
      ek = Ak.init;
    Ak.init = function(kk) {
      return Rk.Howler.volume(), tk.ctx && Jk(tk.ctx), ek.call(this, kk)
    };
    const yk = Ak.unload;
    Ak.unload = function() {
      const kk = this._src,
        Fk = yk.call(this);
      if ("string" !== typeof kk) return Fk;
      const Bk = ak.get(kk);
      return void 0 !== Bk && function(kk) {
        return !tk._howls.some((Fk => Fk._src === kk || "string" === typeof Fk._src && kk.indexOf(Fk._src) >= 0))
      }(kk) && (ak.delete(kk), Xk -= Bk), Fk
    }
  },
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