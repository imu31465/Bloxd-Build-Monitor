export const id = 95;
export const ids = [95];
export const modules = {
  5030: (tt, et, Vt) => {
    Vt.r(et), Vt.d(et, {
      Howl: () => qt.Howl,
      Howler: () => qt.Howler,
      musicOutput: () => yt,
      readyAudioContext: () => Nt
    });
    var Ot, qt = Vt(5036),
      Dt = Vt(3510),
      mt = Vt(4796);
    const dt = qt.Howler;

    function jt() {
      var tt, et;
      if (dt.ctx || !dt.usingWebAudio || "undefined" === typeof AudioContext || !(0, mt.e)()) return;
      const Vt = navigator.audioSession;
      let Ot;
      "auto" === (null === Vt || void 0 === Vt ? void 0 : Vt.type) && (Vt.type = "ambient");
      try {
        Ot = new AudioContext({
          sampleRate: 44100
        })
      } catch {
        return
      }
      const qt = Ot.createGain();
      qt.gain.setValueAtTime(dt._muted ? 0 : null !== (tt = dt._volume) && void 0 !== tt ? tt : 1, Ot.currentTime), qt.connect(Ot.destination), dt.ctx = Ot, dt.masterGain = qt, null === (et = dt._setup) || void 0 === et || et.call(dt)
    }
    dt._mobileUnloaded = !0;
    const Ht = dt.volume.bind(qt.Howler);
    dt.volume = function() {
      return jt(), Ht(...arguments)
    };
    const Xt = dt.mute.bind(qt.Howler);
    dt.mute = tt => (jt(), Xt(tt));
    const Qt = qt.Howl.prototype,
      lt = Qt.init;

    function Et() {
      for (; dt._html5AudioPool.length < dt.html5PoolSize;) {
        const tt = new Audio;
        tt._unlocked = !0, dt._releaseHtml5Audio(tt)
      }
      for (const et of dt._howls)
        if (!et._webAudio)
          for (const Vt of et._getSoundIds()) {
            var tt;
            const Ot = null === (tt = et._soundById(Vt)) || void 0 === tt ? void 0 : tt._node;
            Ot && !Ot._unlocked && (Ot._unlocked = !0, Ot.load())
          }
    }
    Qt.init = function(tt) {
      return jt(), lt.call(this, tt)
    }, (0, mt.e)() && (dt._unlockAudio = () => {
      const tt = dt.ctx;
      if (dt._audioUnlocked || !tt) return;
      dt.autoUnlock = !1;
      const et = tt.createBuffer(1, 1, 22050);
      dt._scratchBuffer = et;
      const Vt = new AbortController;
      let Ot = "afterPaint";
      const qt = () => {
          var Ot;
          if (dt._audioUnlocked) return;
          null === (Ot = dt._autoResume) || void 0 === Ot || Ot.call(dt);
          const qt = tt.createBufferSource();
          qt.buffer = et, qt.connect(tt.destination), qt.start(0), tt.resume().catch((() => {})), qt.onended = () => {
            qt.disconnect(0), dt._audioUnlocked = !0, Vt.abort();
            for (const tt of dt._howls) tt._emit("unlock")
          }
        },
        jt = () => {
          Et(), qt()
        },
        Ht = et => {
          if (Et(), "inTap" === Ot) {
            if ("running" === tt.state) return;
            console.warn("A click's resume after its frame left Howler's context suspended, so this click resumes it"), qt()
          } else "afterPaint" === Ot && (Ot = "queued", (0, Dt.d)(et.timeStamp, (() => {
            Ot = "inTap", qt()
          })))
        };
      for (const Dt of ["touchstart", "touchend"]) document.addEventListener(Dt, jt, {
        capture: !0,
        signal: Vt.signal
      });
      for (const Dt of mt.b) document.addEventListener(Dt, Ht, {
        capture: !0,
        signal: Vt.signal
      })
    });
    let ft = 0;
    const wt = null === (Ot = dt._autoSuspend) || void 0 === Ot ? void 0 : Ot.bind(qt.Howler);

    function yt() {
      Nt();
      const {
        ctx: tt,
        masterGain: et
      } = dt;
      return tt && et ? {
        ctx: tt,
        destination: et,
        holdAwake: tt => {
          var et, Vt;
          (ft += tt ? 1 : -1, tt) ? null === (et = dt._autoResume) || void 0 === et || et.call(dt): null === (Vt = dt._autoSuspend) || void 0 === Vt || Vt.call(dt)
        },
        wake: () => {
          var et;
          "running" !== tt.state && (null === (et = dt._autoResume) || void 0 === et || et.call(dt), tt.resume().catch((() => {})))
        }
      } : null
    }

    function Nt() {
      var tt;
      (dt.volume(), dt.ctx && dt.autoUnlock) && (null === (tt = dt._unlockAudio) || void 0 === tt || tt.call(dt))
    }
    wt && (dt._autoSuspend = () => ft > 0 ? qt.Howler : wt())
  }
};
Object.freeze(modules);
for (const tt in modules) Object.freeze(modules[tt]);