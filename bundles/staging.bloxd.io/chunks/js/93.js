export const id = 93;
export const ids = [93];
export const modules = {
  4797: (CC, zC, ZC) => {
    ZC.r(zC), ZC.d(zC, {
      Howl: () => wC.Howl,
      Howler: () => wC.Howler,
      musicOutput: () => pC,
      readyAudioContext: () => PC
    });
    var QC, wC = ZC(4801),
      bC = ZC(3419),
      nC = ZC(4587);
    const fC = wC.Howler;

    function oC() {
      var CC, zC;
      if (fC.ctx || !fC.usingWebAudio || "undefined" === typeof AudioContext || !(0, nC.h)()) return;
      const ZC = navigator.audioSession;
      let QC;
      "auto" === (null === ZC || void 0 === ZC ? void 0 : ZC.type) && (ZC.type = "ambient");
      try {
        QC = new AudioContext({
          sampleRate: 44100
        })
      } catch {
        return
      }
      const wC = QC.createGain();
      wC.gain.setValueAtTime(fC._muted ? 0 : null !== (CC = fC._volume) && void 0 !== CC ? CC : 1, QC.currentTime), wC.connect(QC.destination), fC.ctx = QC, fC.masterGain = wC, null === (zC = fC._setup) || void 0 === zC || zC.call(fC)
    }
    fC._mobileUnloaded = !0;
    const qC = fC.volume.bind(wC.Howler);
    fC.volume = function() {
      return oC(), qC(...arguments)
    };
    const FC = fC.mute.bind(wC.Howler);
    fC.mute = CC => (oC(), FC(CC));
    const WC = wC.Howl.prototype,
      NC = WC.init;

    function MC() {
      for (; fC._html5AudioPool.length < fC.html5PoolSize;) {
        const CC = new Audio;
        CC._unlocked = !0, fC._releaseHtml5Audio(CC)
      }
      for (const zC of fC._howls)
        if (!zC._webAudio)
          for (const ZC of zC._getSoundIds()) {
            var CC;
            const QC = null === (CC = zC._soundById(ZC)) || void 0 === CC ? void 0 : CC._node;
            QC && !QC._unlocked && (QC._unlocked = !0, QC.load())
          }
    }
    WC.init = function(CC) {
      return oC(), NC.call(this, CC)
    }, (0, nC.h)() && (fC._unlockAudio = () => {
      const CC = fC.ctx;
      if (fC._audioUnlocked || !CC) return;
      fC.autoUnlock = !1;
      const zC = CC.createBuffer(1, 1, 22050);
      fC._scratchBuffer = zC;
      const ZC = new AbortController;
      let QC = "afterPaint";
      const wC = () => {
          var QC;
          if (fC._audioUnlocked) return;
          null === (QC = fC._autoResume) || void 0 === QC || QC.call(fC);
          const wC = CC.createBufferSource();
          wC.buffer = zC, wC.connect(CC.destination), wC.start(0), CC.resume().catch((() => {})), wC.onended = () => {
            wC.disconnect(0), fC._audioUnlocked = !0, ZC.abort();
            for (const CC of fC._howls) CC._emit("unlock")
          }
        },
        oC = () => {
          MC(), wC()
        },
        qC = zC => {
          if (MC(), "inTap" === QC) {
            if ("running" === CC.state) return;
            console.warn("A click's resume after its frame left Howler's context suspended, so this click resumes it"), wC()
          } else "afterPaint" === QC && (QC = "queued", (0, bC.c)(zC.timeStamp, (() => {
            QC = "inTap", wC()
          })))
        };
      for (const bC of ["touchstart", "touchend"]) document.addEventListener(bC, oC, {
        capture: !0,
        signal: ZC.signal
      });
      for (const bC of nC.c) document.addEventListener(bC, qC, {
        capture: !0,
        signal: ZC.signal
      })
    });
    let gC = 0;
    const SC = null === (QC = fC._autoSuspend) || void 0 === QC ? void 0 : QC.bind(wC.Howler);

    function pC() {
      PC();
      const {
        ctx: CC,
        masterGain: zC
      } = fC;
      return CC && zC ? {
        ctx: CC,
        destination: zC,
        holdAwake: CC => {
          var zC, ZC;
          (gC += CC ? 1 : -1, CC) ? null === (zC = fC._autoResume) || void 0 === zC || zC.call(fC): null === (ZC = fC._autoSuspend) || void 0 === ZC || ZC.call(fC)
        },
        wake: () => {
          var zC;
          "running" !== CC.state && (null === (zC = fC._autoResume) || void 0 === zC || zC.call(fC), CC.resume().catch((() => {})))
        }
      } : null
    }

    function PC() {
      var CC;
      (fC.volume(), fC.ctx && fC.autoUnlock) && (null === (CC = fC._unlockAudio) || void 0 === CC || CC.call(fC))
    }
    SC && (fC._autoSuspend = () => gC > 0 ? wC.Howler : SC())
  }
};
Object.freeze(modules);
for (const CC in modules) Object.freeze(modules[CC]);