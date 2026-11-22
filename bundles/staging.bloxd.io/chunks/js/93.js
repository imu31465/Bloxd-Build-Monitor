export const id = 93;
export const ids = [93];
export const modules = {
  4799: (kk, ek, ik) => {
    ik.r(ek), ik.d(ek, {
      Howl: () => fk.Howl,
      Howler: () => fk.Howler,
      musicOutput: () => wk,
      readyAudioContext: () => lk
    });
    var Dk, fk = ik(4804),
      Sk = ik(3521),
      bk = ik(4583);
    const rk = fk.Howler;

    function Pk() {
      var kk, ek;
      if (rk.ctx || !rk.usingWebAudio || "undefined" === typeof AudioContext || !(0, bk.i)()) return;
      const ik = navigator.audioSession;
      let Dk;
      "auto" === (null === ik || void 0 === ik ? void 0 : ik.type) && (ik.type = "ambient");
      try {
        Dk = new AudioContext({
          sampleRate: 44100
        })
      } catch {
        return
      }
      const fk = Dk.createGain();
      fk.gain.setValueAtTime(rk._muted ? 0 : null !== (kk = rk._volume) && void 0 !== kk ? kk : 1, Dk.currentTime), fk.connect(Dk.destination), rk.ctx = Dk, rk.masterGain = fk, null === (ek = rk._setup) || void 0 === ek || ek.call(rk)
    }
    rk._mobileUnloaded = !0;
    const mk = rk.volume.bind(fk.Howler);
    rk.volume = function() {
      return Pk(), mk(...arguments)
    };
    const Mk = rk.mute.bind(fk.Howler);
    rk.mute = kk => (Pk(), Mk(kk));
    const Kk = fk.Howl.prototype,
      xk = Kk.init;

    function nk() {
      for (; rk._html5AudioPool.length < rk.html5PoolSize;) {
        const kk = new Audio;
        kk._unlocked = !0, rk._releaseHtml5Audio(kk)
      }
      for (const ek of rk._howls)
        if (!ek._webAudio)
          for (const ik of ek._getSoundIds()) {
            var kk;
            const Dk = null === (kk = ek._soundById(ik)) || void 0 === kk ? void 0 : kk._node;
            Dk && !Dk._unlocked && (Dk._unlocked = !0, Dk.load())
          }
    }
    Kk.init = function(kk) {
      return Pk(), xk.call(this, kk)
    }, (0, bk.i)() && (rk._unlockAudio = () => {
      const kk = rk.ctx;
      if (rk._audioUnlocked || !kk) return;
      rk.autoUnlock = !1;
      const ek = kk.createBuffer(1, 1, 22050);
      rk._scratchBuffer = ek;
      const ik = new AbortController;
      let Dk = "afterPaint";
      const fk = () => {
          var Dk;
          if (rk._audioUnlocked) return;
          null === (Dk = rk._autoResume) || void 0 === Dk || Dk.call(rk);
          const fk = kk.createBufferSource();
          fk.buffer = ek, fk.connect(kk.destination), fk.start(0), kk.resume().catch((() => {})), fk.onended = () => {
            fk.disconnect(0), rk._audioUnlocked = !0, ik.abort();
            for (const kk of rk._howls) kk._emit("unlock")
          }
        },
        Pk = () => {
          nk(), fk()
        },
        mk = ek => {
          if (nk(), "inTap" === Dk) {
            if ("running" === kk.state) return;
            console.warn("A click's resume after its frame left Howler's context suspended, so this click resumes it"), fk()
          } else "afterPaint" === Dk && (Dk = "queued", (0, Sk.d)(ek.timeStamp, (() => {
            Dk = "inTap", fk()
          })))
        };
      for (const Sk of ["touchstart", "touchend"]) document.addEventListener(Sk, Pk, {
        capture: !0,
        signal: ik.signal
      });
      for (const Sk of bk.e) document.addEventListener(Sk, mk, {
        capture: !0,
        signal: ik.signal
      })
    });
    let Uk = 0;
    const Hk = null === (Dk = rk._autoSuspend) || void 0 === Dk ? void 0 : Dk.bind(fk.Howler);

    function wk() {
      lk();
      const {
        ctx: kk,
        masterGain: ek
      } = rk;
      return kk && ek ? {
        ctx: kk,
        destination: ek,
        holdAwake: kk => {
          var ek, ik;
          (Uk += kk ? 1 : -1, kk) ? null === (ek = rk._autoResume) || void 0 === ek || ek.call(rk): null === (ik = rk._autoSuspend) || void 0 === ik || ik.call(rk)
        },
        wake: () => {
          var ek;
          "running" !== kk.state && (null === (ek = rk._autoResume) || void 0 === ek || ek.call(rk), kk.resume().catch((() => {})))
        }
      } : null
    }

    function lk() {
      var kk;
      (rk.volume(), rk.ctx && rk.autoUnlock) && (null === (kk = rk._unlockAudio) || void 0 === kk || kk.call(rk))
    }
    Hk && (rk._autoSuspend = () => Uk > 0 ? fk.Howler : Hk())
  }
};
Object.freeze(modules);
for (const kk in modules) Object.freeze(modules[kk]);