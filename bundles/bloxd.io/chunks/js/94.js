export const id = 94;
export const ids = [93, 94];
export const modules = {
  36432: (kk, Fk, Ik) => {
    Ik.r(Fk), Ik.d(Fk, {
      countDecodesAs: () => tk,
      decodedAudio: () => Zk
    });
    var Xk = Ik(3191),
      Tk = Ik(4857);
    const ik = Tk.Howler,
      yk = new Map;
    let lk = 0;
    const ak = {
        song: 0,
        sheet: 0
      },
      qk = new WeakMap,
      Lk = new WeakSet;

    function tk(kk, Fk) {
      return qk.set(kk, Fk), kk
    }

    function Zk() {
      return {
        bytes: lk,
        songsDecoded: ak.song,
        sheetsDecoded: ak.sheet
      }
    }

    function jk(kk) {
      if (Lk.has(kk)) return;
      Lk.add(kk);
      const Fk = 1 === kk.decodeAudioData.length,
        Ik = kk.decodeAudioData.bind(kk);
      kk.decodeAudioData = (kk, Xk, Tk) => {
        const Lk = kk => {
          const Fk = ik._howls.filter((kk => "loaded" !== kk._state));
          try {
            null === Xk || void 0 === Xk || Xk(kk)
          } finally {
            const Ik = Fk.find((kk => "loaded" === kk._state));
            void 0 !== Ik && "string" === typeof Ik._src && function(kk, Fk, Ik) {
              var Xk;
              lk += Ik - (null !== (Xk = yk.get(Fk)) && void 0 !== Xk ? Xk : 0), yk.set(Fk, Ik);
              const Tk = qk.get(kk);
              void 0 !== Tk && ak[Tk]++
            }(Ik, Ik._src, kk.length * kk.numberOfChannels * Float32Array.BYTES_PER_ELEMENT)
          }
          return kk
        };
        if (!Fk) return Ik(kk, Lk, Tk);
        const tk = Ik(kk).then(Lk);
        return tk.catch((kk => {
          null === Tk || void 0 === Tk || Tk(kk)
        })), tk
      }
    }(0, Xk.d)(Zk);
    const ek = Tk.Howl.prototype,
      wk = ek.init;
    ek.init = function(kk) {
      return Tk.Howler.volume(), ik.ctx && jk(ik.ctx), wk.call(this, kk)
    };
    const Hk = ek.unload;
    ek.unload = function() {
      const kk = this._src,
        Fk = Hk.call(this);
      if ("string" !== typeof kk) return Fk;
      const Ik = yk.get(kk);
      return void 0 !== Ik && function(kk) {
        return !ik._howls.some((Fk => Fk._src === kk || "string" === typeof Fk._src && kk.indexOf(Fk._src) >= 0))
      }(kk) && (yk.delete(kk), lk -= Ik), Fk
    }
  },
  4857: (kk, Fk, Ik) => {
    Ik.r(Fk), Ik.d(Fk, {
      Howl: () => Tk.Howl,
      Howler: () => Tk.Howler,
      musicOutput: () => Hk,
      readyAudioContext: () => Jk
    });
    var Xk, Tk = Ik(4863),
      ik = Ik(3378),
      yk = Ik(4636);
    const lk = Tk.Howler;

    function ak() {
      var kk, Fk;
      if (lk.ctx || !lk.usingWebAudio || "undefined" === typeof AudioContext || !(0, yk.h)()) return;
      const Ik = navigator.audioSession;
      let Xk;
      "auto" === (null === Ik || void 0 === Ik ? void 0 : Ik.type) && (Ik.type = "ambient");
      try {
        Xk = new AudioContext({
          sampleRate: 44100
        })
      } catch {
        return
      }
      const Tk = Xk.createGain();
      Tk.gain.setValueAtTime(lk._muted ? 0 : null !== (kk = lk._volume) && void 0 !== kk ? kk : 1, Xk.currentTime), Tk.connect(Xk.destination), lk.ctx = Xk, lk.masterGain = Tk, null === (Fk = lk._setup) || void 0 === Fk || Fk.call(lk)
    }
    lk._mobileUnloaded = !0;
    const qk = lk.volume.bind(Tk.Howler);
    lk.volume = function() {
      return ak(), qk(...arguments)
    };
    const Lk = lk.mute.bind(Tk.Howler);
    lk.mute = kk => (ak(), Lk(kk));
    const tk = Tk.Howl.prototype,
      Zk = tk.init;

    function jk() {
      for (; lk._html5AudioPool.length < lk.html5PoolSize;) {
        const kk = new Audio;
        kk._unlocked = !0, lk._releaseHtml5Audio(kk)
      }
      for (const Fk of lk._howls)
        if (!Fk._webAudio)
          for (const Ik of Fk._getSoundIds()) {
            var kk;
            const Xk = null === (kk = Fk._soundById(Ik)) || void 0 === kk ? void 0 : kk._node;
            Xk && !Xk._unlocked && (Xk._unlocked = !0, Xk.load())
          }
    }
    tk.init = function(kk) {
      return ak(), Zk.call(this, kk)
    }, (0, yk.h)() && (lk._unlockAudio = () => {
      const kk = lk.ctx;
      if (lk._audioUnlocked || !kk) return;
      lk.autoUnlock = !1;
      const Fk = kk.createBuffer(1, 1, 22050);
      lk._scratchBuffer = Fk;
      const Ik = new AbortController;
      let Xk = "afterPaint";
      const Tk = () => {
          var Xk;
          if (lk._audioUnlocked) return;
          null === (Xk = lk._autoResume) || void 0 === Xk || Xk.call(lk);
          const Tk = kk.createBufferSource();
          Tk.buffer = Fk, Tk.connect(kk.destination), Tk.start(0), kk.resume().catch((() => {})), Tk.onended = () => {
            Tk.disconnect(0), lk._audioUnlocked = !0, Ik.abort();
            for (const kk of lk._howls) kk._emit("unlock")
          }
        },
        ak = () => {
          jk(), Tk()
        },
        qk = Fk => {
          if (jk(), "inTap" === Xk) {
            if ("running" === kk.state) return;
            console.warn("A click's resume after its frame left Howler's context suspended, so this click resumes it"), Tk()
          } else "afterPaint" === Xk && (Xk = "queued", (0, ik.b)(Fk.timeStamp, (() => {
            Xk = "inTap", Tk()
          })))
        };
      for (const ik of ["touchstart", "touchend"]) document.addEventListener(ik, ak, {
        capture: !0,
        signal: Ik.signal
      });
      for (const ik of yk.b) document.addEventListener(ik, qk, {
        capture: !0,
        signal: Ik.signal
      })
    });
    let ek = 0;
    const wk = null === (Xk = lk._autoSuspend) || void 0 === Xk ? void 0 : Xk.bind(Tk.Howler);

    function Hk() {
      Jk();
      const {
        ctx: kk,
        masterGain: Fk
      } = lk;
      return kk && Fk ? {
        ctx: kk,
        destination: Fk,
        holdAwake: kk => {
          var Fk, Ik;
          (ek += kk ? 1 : -1, kk) ? null === (Fk = lk._autoResume) || void 0 === Fk || Fk.call(lk): null === (Ik = lk._autoSuspend) || void 0 === Ik || Ik.call(lk)
        },
        wake: () => {
          var Fk;
          "running" !== kk.state && (null === (Fk = lk._autoResume) || void 0 === Fk || Fk.call(lk), kk.resume().catch((() => {})))
        }
      } : null
    }

    function Jk() {
      var kk;
      (lk.volume(), lk.ctx && lk.autoUnlock) && (null === (kk = lk._unlockAudio) || void 0 === kk || kk.call(lk))
    }
    wk && (lk._autoSuspend = () => ek > 0 ? Tk.Howler : wk())
  }
};
Object.freeze(modules);
for (const kk in modules) Object.freeze(modules[kk]);