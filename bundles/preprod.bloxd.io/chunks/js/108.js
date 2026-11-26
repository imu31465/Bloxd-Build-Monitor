export const id = 108;
export const ids = [108];
export const modules = {
  5378: (UU, XU, zU) => {
    zU.r(XU), zU.d(XU, {
      Howl: () => yU.Howl,
      Howler: () => yU.Howler,
      musicOutput: () => tU,
      readyAudioContext: () => gU
    });
    var cU, yU = zU(5383),
      QU = zU(3837),
      AU = zU(5092);
    const FU = yU.Howler;

    function oU() {
      var UU, XU;
      if (FU.ctx || !FU.usingWebAudio || "undefined" === typeof AudioContext || !(0, AU.j)()) return;
      const zU = navigator.audioSession;
      let cU;
      "auto" === (null === zU || void 0 === zU ? void 0 : zU.type) && (zU.type = "ambient");
      try {
        cU = new AudioContext({
          sampleRate: 44100
        })
      } catch {
        return
      }
      const yU = cU.createGain();
      yU.gain.setValueAtTime(FU._muted ? 0 : null !== (UU = FU._volume) && void 0 !== UU ? UU : 1, cU.currentTime), yU.connect(cU.destination), FU.ctx = cU, FU.masterGain = yU, null === (XU = FU._setup) || void 0 === XU || XU.call(FU)
    }
    FU._mobileUnloaded = !0;
    const DU = FU.volume.bind(yU.Howler);
    FU.volume = function() {
      return oU(), DU(...arguments)
    };
    const EU = FU.mute.bind(yU.Howler);
    FU.mute = UU => (oU(), EU(UU));
    const YU = yU.Howl.prototype,
      NU = YU.init;

    function IU() {
      for (; FU._html5AudioPool.length < FU.html5PoolSize;) {
        const UU = new Audio;
        UU._unlocked = !0, FU._releaseHtml5Audio(UU)
      }
      for (const XU of FU._howls)
        if (!XU._webAudio)
          for (const zU of XU._getSoundIds()) {
            var UU;
            const cU = null === (UU = XU._soundById(zU)) || void 0 === UU ? void 0 : UU._node;
            cU && !cU._unlocked && (cU._unlocked = !0, cU.load())
          }
    }
    YU.init = function(UU) {
      return oU(), NU.call(this, UU)
    }, (0, AU.j)() && (FU._unlockAudio = () => {
      const UU = FU.ctx;
      if (FU._audioUnlocked || !UU) return;
      FU.autoUnlock = !1;
      const XU = UU.createBuffer(1, 1, 22050);
      FU._scratchBuffer = XU;
      const zU = new AbortController;
      let cU = "afterPaint";
      const yU = () => {
          var cU;
          if (FU._audioUnlocked) return;
          null === (cU = FU._autoResume) || void 0 === cU || cU.call(FU);
          const yU = UU.createBufferSource();
          yU.buffer = XU, yU.connect(UU.destination), yU.start(0), UU.resume().catch((() => {})), yU.onended = () => {
            yU.disconnect(0), FU._audioUnlocked = !0, zU.abort();
            for (const UU of FU._howls) UU._emit("unlock")
          }
        },
        oU = () => {
          IU(), yU()
        },
        DU = XU => {
          if (IU(), "inTap" === cU) {
            if ("running" === UU.state) return;
            console.warn("A click's resume after its frame left Howler's context suspended, so this click resumes it"), yU()
          } else "afterPaint" === cU && (cU = "queued", (0, QU.d)(XU.timeStamp, (() => {
            cU = "inTap", yU()
          })))
        };
      for (const QU of ["touchstart", "touchend"]) document.addEventListener(QU, oU, {
        capture: !0,
        signal: zU.signal
      });
      for (const QU of AU.c) document.addEventListener(QU, DU, {
        capture: !0,
        signal: zU.signal
      })
    });
    let pU = 0;
    const aU = null === (cU = FU._autoSuspend) || void 0 === cU ? void 0 : cU.bind(yU.Howler);

    function tU() {
      gU();
      const {
        ctx: UU,
        masterGain: XU
      } = FU;
      return UU && XU ? {
        ctx: UU,
        destination: XU,
        holdAwake: UU => {
          var XU, zU;
          (pU += UU ? 1 : -1, UU) ? null === (XU = FU._autoResume) || void 0 === XU || XU.call(FU): null === (zU = FU._autoSuspend) || void 0 === zU || zU.call(FU)
        },
        wake: () => {
          var XU;
          "running" !== UU.state && (null === (XU = FU._autoResume) || void 0 === XU || XU.call(FU), UU.resume().catch((() => {})))
        }
      } : null
    }

    function gU() {
      var UU;
      (FU.volume(), FU.ctx && FU.autoUnlock) && (null === (UU = FU._unlockAudio) || void 0 === UU || UU.call(FU))
    }
    aU && (FU._autoSuspend = () => pU > 0 ? yU.Howler : aU())
  }
};
Object.freeze(modules);
for (const UU in modules) Object.freeze(modules[UU]);