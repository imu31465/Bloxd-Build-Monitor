export const id = 110;
export const ids = [110];
export const modules = {
  5615: (WW, iW, OW) => {
    OW.r(iW), OW.d(iW, {
      Howl: () => EW.Howl,
      Howler: () => EW.Howler,
      musicOutput: () => jW,
      readyAudioContext: () => UW
    });
    var mW, EW = OW(5618),
      NW = OW(4653),
      PW = OW(5356);
    const LW = EW.Howler;

    function cW() {
      var WW, iW;
      if (LW.ctx || !LW.usingWebAudio || "undefined" === typeof AudioContext || !(0, PW.k)()) return;
      const OW = navigator.audioSession;
      let mW;
      "auto" === (null === OW || void 0 === OW ? void 0 : OW.type) && (OW.type = "ambient");
      try {
        mW = new AudioContext({
          sampleRate: 44100
        })
      } catch {
        return
      }
      const EW = mW.createGain();
      EW.gain.setValueAtTime(LW._muted ? 0 : null !== (WW = LW._volume) && void 0 !== WW ? WW : 1, mW.currentTime), EW.connect(mW.destination), LW.ctx = mW, LW.masterGain = EW, null === (iW = LW._setup) || void 0 === iW || iW.call(LW)
    }
    LW._mobileUnloaded = !0;
    const wW = LW.volume.bind(EW.Howler);
    LW.volume = function() {
      return cW(), wW(...arguments)
    };
    const tW = LW.mute.bind(EW.Howler);
    LW.mute = WW => (cW(), tW(WW));
    const ZW = EW.Howl.prototype,
      xW = ZW.init;

    function lW() {
      for (; LW._html5AudioPool.length < LW.html5PoolSize;) {
        const WW = new Audio;
        WW._unlocked = !0, LW._releaseHtml5Audio(WW)
      }
      for (const iW of LW._howls)
        if (!iW._webAudio)
          for (const OW of iW._getSoundIds()) {
            var WW;
            const mW = null === (WW = iW._soundById(OW)) || void 0 === WW ? void 0 : WW._node;
            mW && !mW._unlocked && (mW._unlocked = !0, mW.load())
          }
    }
    ZW.init = function(WW) {
      return cW(), xW.call(this, WW)
    }, (0, PW.k)() && (LW._unlockAudio = () => {
      const WW = LW.ctx;
      if (LW._audioUnlocked || !WW) return;
      LW.autoUnlock = !1;
      const iW = WW.createBuffer(1, 1, 22050);
      LW._scratchBuffer = iW;
      const OW = new AbortController;
      let mW = "afterPaint";
      const EW = () => {
          var mW;
          if (LW._audioUnlocked) return;
          null === (mW = LW._autoResume) || void 0 === mW || mW.call(LW);
          const EW = WW.createBufferSource();
          EW.buffer = iW, EW.connect(WW.destination), EW.start(0), WW.resume().catch((() => {})), EW.onended = () => {
            EW.disconnect(0), LW._audioUnlocked = !0, OW.abort();
            for (const WW of LW._howls) WW._emit("unlock")
          }
        },
        cW = () => {
          lW(), EW()
        },
        wW = iW => {
          if (lW(), "inTap" === mW) {
            if ("running" === WW.state) return;
            console.warn("A click's resume after its frame left Howler's context suspended, so this click resumes it"), EW()
          } else "afterPaint" === mW && (mW = "queued", (0, NW.b)(iW.timeStamp, (() => {
            mW = "inTap", EW()
          })))
        };
      for (const NW of ["touchstart", "touchend"]) document.addEventListener(NW, cW, {
        capture: !0,
        signal: OW.signal
      });
      for (const NW of PW.d) document.addEventListener(NW, wW, {
        capture: !0,
        signal: OW.signal
      })
    });
    let AW = 0;
    const bW = null === (mW = LW._autoSuspend) || void 0 === mW ? void 0 : mW.bind(EW.Howler);

    function jW() {
      UW();
      const {
        ctx: WW,
        masterGain: iW
      } = LW;
      return WW && iW ? {
        ctx: WW,
        destination: iW,
        holdAwake: WW => {
          var iW, OW;
          (AW += WW ? 1 : -1, WW) ? null === (iW = LW._autoResume) || void 0 === iW || iW.call(LW): null === (OW = LW._autoSuspend) || void 0 === OW || OW.call(LW)
        },
        wake: () => {
          var iW;
          "running" !== WW.state && (null === (iW = LW._autoResume) || void 0 === iW || iW.call(LW), WW.resume().catch((() => {})))
        }
      } : null
    }

    function UW() {
      var WW;
      (LW.volume(), LW.ctx && LW.autoUnlock) && (null === (WW = LW._unlockAudio) || void 0 === WW || WW.call(LW))
    }
    bW && (LW._autoSuspend = () => AW > 0 ? EW.Howler : bW())
  }
};
Object.freeze(modules);
for (const WW in modules) Object.freeze(modules[WW]);