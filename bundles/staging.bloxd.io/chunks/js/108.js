export const id = 108;
export const ids = [108];
export const modules = {
  5265: (MM, rM, iM) => {
    iM.r(rM), iM.d(rM, {
      Howl: () => SM.Howl,
      Howler: () => SM.Howler,
      musicOutput: () => dM,
      readyAudioContext: () => yM
    });
    var OM, SM = iM(5269),
      jM = iM(3839),
      aM = iM(5026);
    const PM = SM.Howler;

    function nM() {
      var MM, rM;
      if (PM.ctx || !PM.usingWebAudio || "undefined" === typeof AudioContext || !(0, aM.k)()) return;
      const iM = navigator.audioSession;
      let OM;
      "auto" === (null === iM || void 0 === iM ? void 0 : iM.type) && (iM.type = "ambient");
      try {
        OM = new AudioContext({
          sampleRate: 44100
        })
      } catch {
        return
      }
      const SM = OM.createGain();
      SM.gain.setValueAtTime(PM._muted ? 0 : null !== (MM = PM._volume) && void 0 !== MM ? MM : 1, OM.currentTime), SM.connect(OM.destination), PM.ctx = OM, PM.masterGain = SM, null === (rM = PM._setup) || void 0 === rM || rM.call(PM)
    }
    PM._mobileUnloaded = !0;
    const QM = PM.volume.bind(SM.Howler);
    PM.volume = function() {
      return nM(), QM(...arguments)
    };
    const zM = PM.mute.bind(SM.Howler);
    PM.mute = MM => (nM(), zM(MM));
    const LM = SM.Howl.prototype,
      mM = LM.init;

    function HM() {
      for (; PM._html5AudioPool.length < PM.html5PoolSize;) {
        const MM = new Audio;
        MM._unlocked = !0, PM._releaseHtml5Audio(MM)
      }
      for (const rM of PM._howls)
        if (!rM._webAudio)
          for (const iM of rM._getSoundIds()) {
            var MM;
            const OM = null === (MM = rM._soundById(iM)) || void 0 === MM ? void 0 : MM._node;
            OM && !OM._unlocked && (OM._unlocked = !0, OM.load())
          }
    }
    LM.init = function(MM) {
      return nM(), mM.call(this, MM)
    }, (0, aM.k)() && (PM._unlockAudio = () => {
      const MM = PM.ctx;
      if (PM._audioUnlocked || !MM) return;
      PM.autoUnlock = !1;
      const rM = MM.createBuffer(1, 1, 22050);
      PM._scratchBuffer = rM;
      const iM = new AbortController;
      let OM = "afterPaint";
      const SM = () => {
          var OM;
          if (PM._audioUnlocked) return;
          null === (OM = PM._autoResume) || void 0 === OM || OM.call(PM);
          const SM = MM.createBufferSource();
          SM.buffer = rM, SM.connect(MM.destination), SM.start(0), MM.resume().catch((() => {})), SM.onended = () => {
            SM.disconnect(0), PM._audioUnlocked = !0, iM.abort();
            for (const MM of PM._howls) MM._emit("unlock")
          }
        },
        nM = () => {
          HM(), SM()
        },
        QM = rM => {
          if (HM(), "inTap" === OM) {
            if ("running" === MM.state) return;
            console.warn("A click's resume after its frame left Howler's context suspended, so this click resumes it"), SM()
          } else "afterPaint" === OM && (OM = "queued", (0, jM.d)(rM.timeStamp, (() => {
            OM = "inTap", SM()
          })))
        };
      for (const jM of ["touchstart", "touchend"]) document.addEventListener(jM, nM, {
        capture: !0,
        signal: iM.signal
      });
      for (const jM of aM.e) document.addEventListener(jM, QM, {
        capture: !0,
        signal: iM.signal
      })
    });
    let hM = 0;
    const JM = null === (OM = PM._autoSuspend) || void 0 === OM ? void 0 : OM.bind(SM.Howler);

    function dM() {
      yM();
      const {
        ctx: MM,
        masterGain: rM
      } = PM;
      return MM && rM ? {
        ctx: MM,
        destination: rM,
        holdAwake: MM => {
          var rM, iM;
          (hM += MM ? 1 : -1, MM) ? null === (rM = PM._autoResume) || void 0 === rM || rM.call(PM): null === (iM = PM._autoSuspend) || void 0 === iM || iM.call(PM)
        },
        wake: () => {
          var rM;
          "running" !== MM.state && (null === (rM = PM._autoResume) || void 0 === rM || rM.call(PM), MM.resume().catch((() => {})))
        }
      } : null
    }

    function yM() {
      var MM;
      (PM.volume(), PM.ctx && PM.autoUnlock) && (null === (MM = PM._unlockAudio) || void 0 === MM || MM.call(PM))
    }
    JM && (PM._autoSuspend = () => hM > 0 ? SM.Howler : JM())
  }
};
Object.freeze(modules);
for (const MM in modules) Object.freeze(modules[MM]);