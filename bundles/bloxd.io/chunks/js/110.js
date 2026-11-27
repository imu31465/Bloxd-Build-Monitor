export const id = 110;
export const ids = [110];
export const modules = {
  5681: (rr, Sr, Qr) => {
    Qr.r(Sr), Qr.d(Sr, {
      Howl: () => Wr.Howl,
      Howler: () => Wr.Howler,
      musicOutput: () => hr,
      readyAudioContext: () => zr
    });
    var Zr, Wr = Qr(5689),
      ar = Qr(4681),
      jr = Qr(5413);
    const Ir = Wr.Howler;

    function fr() {
      var rr, Sr;
      if (Ir.ctx || !Ir.usingWebAudio || "undefined" === typeof AudioContext || !(0, jr.i)()) return;
      const Qr = navigator.audioSession;
      let Zr;
      "auto" === (null === Qr || void 0 === Qr ? void 0 : Qr.type) && (Qr.type = "ambient");
      try {
        Zr = new AudioContext({
          sampleRate: 44100
        })
      } catch {
        return
      }
      const Wr = Zr.createGain();
      Wr.gain.setValueAtTime(Ir._muted ? 0 : null !== (rr = Ir._volume) && void 0 !== rr ? rr : 1, Zr.currentTime), Wr.connect(Zr.destination), Ir.ctx = Zr, Ir.masterGain = Wr, null === (Sr = Ir._setup) || void 0 === Sr || Sr.call(Ir)
    }
    Ir._mobileUnloaded = !0;
    const Er = Ir.volume.bind(Wr.Howler);
    Ir.volume = function() {
      return fr(), Er(...arguments)
    };
    const pr = Ir.mute.bind(Wr.Howler);
    Ir.mute = rr => (fr(), pr(rr));
    const xr = Wr.Howl.prototype,
      mr = xr.init;

    function Nr() {
      for (; Ir._html5AudioPool.length < Ir.html5PoolSize;) {
        const rr = new Audio;
        rr._unlocked = !0, Ir._releaseHtml5Audio(rr)
      }
      for (const Sr of Ir._howls)
        if (!Sr._webAudio)
          for (const Qr of Sr._getSoundIds()) {
            var rr;
            const Zr = null === (rr = Sr._soundById(Qr)) || void 0 === rr ? void 0 : rr._node;
            Zr && !Zr._unlocked && (Zr._unlocked = !0, Zr.load())
          }
    }
    xr.init = function(rr) {
      return fr(), mr.call(this, rr)
    }, (0, jr.i)() && (Ir._unlockAudio = () => {
      const rr = Ir.ctx;
      if (Ir._audioUnlocked || !rr) return;
      Ir.autoUnlock = !1;
      const Sr = rr.createBuffer(1, 1, 22050);
      Ir._scratchBuffer = Sr;
      const Qr = new AbortController;
      let Zr = "afterPaint";
      const Wr = () => {
          var Zr;
          if (Ir._audioUnlocked) return;
          null === (Zr = Ir._autoResume) || void 0 === Zr || Zr.call(Ir);
          const Wr = rr.createBufferSource();
          Wr.buffer = Sr, Wr.connect(rr.destination), Wr.start(0), rr.resume().catch((() => {})), Wr.onended = () => {
            Wr.disconnect(0), Ir._audioUnlocked = !0, Qr.abort();
            for (const rr of Ir._howls) rr._emit("unlock")
          }
        },
        fr = () => {
          Nr(), Wr()
        },
        Er = Sr => {
          if (Nr(), "inTap" === Zr) {
            if ("running" === rr.state) return;
            console.warn("A click's resume after its frame left Howler's context suspended, so this click resumes it"), Wr()
          } else "afterPaint" === Zr && (Zr = "queued", (0, ar.e)(Sr.timeStamp, (() => {
            Zr = "inTap", Wr()
          })))
        };
      for (const ar of ["touchstart", "touchend"]) document.addEventListener(ar, fr, {
        capture: !0,
        signal: Qr.signal
      });
      for (const ar of jr.c) document.addEventListener(ar, Er, {
        capture: !0,
        signal: Qr.signal
      })
    });
    let Ur = 0;
    const tr = null === (Zr = Ir._autoSuspend) || void 0 === Zr ? void 0 : Zr.bind(Wr.Howler);

    function hr() {
      zr();
      const {
        ctx: rr,
        masterGain: Sr
      } = Ir;
      return rr && Sr ? {
        ctx: rr,
        destination: Sr,
        holdAwake: rr => {
          var Sr, Qr;
          (Ur += rr ? 1 : -1, rr) ? null === (Sr = Ir._autoResume) || void 0 === Sr || Sr.call(Ir): null === (Qr = Ir._autoSuspend) || void 0 === Qr || Qr.call(Ir)
        },
        wake: () => {
          var Sr;
          "running" !== rr.state && (null === (Sr = Ir._autoResume) || void 0 === Sr || Sr.call(Ir), rr.resume().catch((() => {})))
        }
      } : null
    }

    function zr() {
      var rr;
      (Ir.volume(), Ir.ctx && Ir.autoUnlock) && (null === (rr = Ir._unlockAudio) || void 0 === rr || rr.call(Ir))
    }
    tr && (Ir._autoSuspend = () => Ur > 0 ? Wr.Howler : tr())
  }
};
Object.freeze(modules);
for (const rr in modules) Object.freeze(modules[rr]);