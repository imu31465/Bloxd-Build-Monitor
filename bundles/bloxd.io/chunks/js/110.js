export const id = 110;
export const ids = [110];
export const modules = {
  5742: (RR, JR, GR) => {
    GR.r(JR), GR.d(JR, {
      Howl: () => tR.Howl,
      Howler: () => tR.Howler,
      musicOutput: () => LR,
      readyAudioContext: () => nR
    });
    var yR, tR = GR(5744),
      uR = GR(4757),
      ZR = GR(5456);
    const qR = tR.Howler;

    function iR() {
      var RR, JR;
      if (qR.ctx || !qR.usingWebAudio || "undefined" === typeof AudioContext || !(0, ZR.h)()) return;
      const GR = navigator.audioSession;
      let yR;
      "auto" === (null === GR || void 0 === GR ? void 0 : GR.type) && (GR.type = "ambient");
      try {
        yR = new AudioContext({
          sampleRate: 44100
        })
      } catch {
        return
      }
      const tR = yR.createGain();
      tR.gain.setValueAtTime(qR._muted ? 0 : null !== (RR = qR._volume) && void 0 !== RR ? RR : 1, yR.currentTime), tR.connect(yR.destination), qR.ctx = yR, qR.masterGain = tR, null === (JR = qR._setup) || void 0 === JR || JR.call(qR)
    }
    qR._mobileUnloaded = !0;
    const fR = qR.volume.bind(tR.Howler);
    qR.volume = function() {
      return iR(), fR(...arguments)
    };
    const VR = qR.mute.bind(tR.Howler);
    qR.mute = RR => (iR(), VR(RR));
    const KR = tR.Howl.prototype,
      wR = KR.init;

    function rR() {
      for (; qR._html5AudioPool.length < qR.html5PoolSize;) {
        const RR = new Audio;
        RR._unlocked = !0, qR._releaseHtml5Audio(RR)
      }
      for (const JR of qR._howls)
        if (!JR._webAudio)
          for (const GR of JR._getSoundIds()) {
            var RR;
            const yR = null === (RR = JR._soundById(GR)) || void 0 === RR ? void 0 : RR._node;
            yR && !yR._unlocked && (yR._unlocked = !0, yR.load())
          }
    }
    KR.init = function(RR) {
      return iR(), wR.call(this, RR)
    }, (0, ZR.h)() && (qR._unlockAudio = () => {
      const RR = qR.ctx;
      if (qR._audioUnlocked || !RR) return;
      qR.autoUnlock = !1;
      const JR = RR.createBuffer(1, 1, 22050);
      qR._scratchBuffer = JR;
      const GR = new AbortController;
      let yR = "afterPaint";
      const tR = () => {
          var yR;
          if (qR._audioUnlocked) return;
          null === (yR = qR._autoResume) || void 0 === yR || yR.call(qR);
          const tR = RR.createBufferSource();
          tR.buffer = JR, tR.connect(RR.destination), tR.start(0), RR.resume().catch((() => {})), tR.onended = () => {
            tR.disconnect(0), qR._audioUnlocked = !0, GR.abort();
            for (const RR of qR._howls) RR._emit("unlock")
          }
        },
        iR = () => {
          rR(), tR()
        },
        fR = JR => {
          if (rR(), "inTap" === yR) {
            if ("running" === RR.state) return;
            console.warn("A click's resume after its frame left Howler's context suspended, so this click resumes it"), tR()
          } else "afterPaint" === yR && (yR = "queued", (0, uR.d)(JR.timeStamp, (() => {
            yR = "inTap", tR()
          })))
        };
      for (const uR of ["touchstart", "touchend"]) document.addEventListener(uR, iR, {
        capture: !0,
        signal: GR.signal
      });
      for (const uR of ZR.b) document.addEventListener(uR, fR, {
        capture: !0,
        signal: GR.signal
      })
    });
    let eR = 0;
    const aR = null === (yR = qR._autoSuspend) || void 0 === yR ? void 0 : yR.bind(tR.Howler);

    function LR() {
      nR();
      const {
        ctx: RR,
        masterGain: JR
      } = qR;
      return RR && JR ? {
        ctx: RR,
        destination: JR,
        holdAwake: RR => {
          var JR, GR;
          (eR += RR ? 1 : -1, RR) ? null === (JR = qR._autoResume) || void 0 === JR || JR.call(qR): null === (GR = qR._autoSuspend) || void 0 === GR || GR.call(qR)
        },
        wake: () => {
          var JR;
          "running" !== RR.state && (null === (JR = qR._autoResume) || void 0 === JR || JR.call(qR), RR.resume().catch((() => {})))
        }
      } : null
    }

    function nR() {
      var RR;
      (qR.volume(), qR.ctx && qR.autoUnlock) && (null === (RR = qR._unlockAudio) || void 0 === RR || RR.call(qR))
    }
    aR && (qR._autoSuspend = () => eR > 0 ? tR.Howler : aR())
  }
};
Object.freeze(modules);
for (const RR in modules) Object.freeze(modules[RR]);