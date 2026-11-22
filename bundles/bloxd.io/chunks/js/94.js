export const id = 94;
export const ids = [93, 94];
export const modules = {
  35966: (kk, ek, ik) => {
    ik.r(ek), ik.d(ek, {
      countDecodesAs: () => Kk,
      decodedAudio: () => xk
    });
    var Dk = ik(3224),
      fk = ik(4799);
    const Sk = fk.Howler,
      bk = new Map;
    let rk = 0;
    const Pk = {
        song: 0,
        sheet: 0
      },
      mk = new WeakMap,
      Mk = new WeakSet;

    function Kk(kk, ek) {
      return mk.set(kk, ek), kk
    }

    function xk() {
      return {
        bytes: rk,
        songsDecoded: Pk.song,
        sheetsDecoded: Pk.sheet
      }
    }

    function nk(kk) {
      if (Mk.has(kk)) return;
      Mk.add(kk);
      const ek = 1 === kk.decodeAudioData.length,
        ik = kk.decodeAudioData.bind(kk);
      kk.decodeAudioData = (kk, Dk, fk) => {
        const Mk = kk => {
          const ek = Sk._howls.filter((kk => "loaded" !== kk._state));
          try {
            null === Dk || void 0 === Dk || Dk(kk)
          } finally {
            const ik = ek.find((kk => "loaded" === kk._state));
            void 0 !== ik && "string" === typeof ik._src && function(kk, ek, ik) {
              var Dk;
              rk += ik - (null !== (Dk = bk.get(ek)) && void 0 !== Dk ? Dk : 0), bk.set(ek, ik);
              const fk = mk.get(kk);
              void 0 !== fk && Pk[fk]++
            }(ik, ik._src, kk.length * kk.numberOfChannels * Float32Array.BYTES_PER_ELEMENT)
          }
          return kk
        };
        if (!ek) return ik(kk, Mk, fk);
        const Kk = ik(kk).then(Mk);
        return Kk.catch((kk => {
          null === fk || void 0 === fk || fk(kk)
        })), Kk
      }
    }(0, Dk.d)(xk);
    const Uk = fk.Howl.prototype,
      Hk = Uk.init;
    Uk.init = function(kk) {
      return fk.Howler.volume(), Sk.ctx && nk(Sk.ctx), Hk.call(this, kk)
    };
    const wk = Uk.unload;
    Uk.unload = function() {
      const kk = this._src,
        ek = wk.call(this);
      if ("string" !== typeof kk) return ek;
      const ik = bk.get(kk);
      return void 0 !== ik && function(kk) {
        return !Sk._howls.some((ek => ek._src === kk || "string" === typeof ek._src && kk.indexOf(ek._src) >= 0))
      }(kk) && (bk.delete(kk), rk -= ik), ek
    }
  },
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