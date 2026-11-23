export const id = 94;
export const ids = [93, 94];
export const modules = {
  36318: (CC, zC, ZC) => {
    ZC.r(zC), ZC.d(zC, {
      countDecodesAs: () => WC,
      decodedAudio: () => NC
    });
    var QC = ZC(3252),
      wC = ZC(4797);
    const bC = wC.Howler,
      nC = new Map;
    let fC = 0;
    const oC = {
        song: 0,
        sheet: 0
      },
      qC = new WeakMap,
      FC = new WeakSet;

    function WC(CC, zC) {
      return qC.set(CC, zC), CC
    }

    function NC() {
      return {
        bytes: fC,
        songsDecoded: oC.song,
        sheetsDecoded: oC.sheet
      }
    }

    function MC(CC) {
      if (FC.has(CC)) return;
      FC.add(CC);
      const zC = 1 === CC.decodeAudioData.length,
        ZC = CC.decodeAudioData.bind(CC);
      CC.decodeAudioData = (CC, QC, wC) => {
        const FC = CC => {
          const zC = bC._howls.filter((CC => "loaded" !== CC._state));
          try {
            null === QC || void 0 === QC || QC(CC)
          } finally {
            const ZC = zC.find((CC => "loaded" === CC._state));
            void 0 !== ZC && "string" === typeof ZC._src && function(CC, zC, ZC) {
              var QC;
              fC += ZC - (null !== (QC = nC.get(zC)) && void 0 !== QC ? QC : 0), nC.set(zC, ZC);
              const wC = qC.get(CC);
              void 0 !== wC && oC[wC]++
            }(ZC, ZC._src, CC.length * CC.numberOfChannels * Float32Array.BYTES_PER_ELEMENT)
          }
          return CC
        };
        if (!zC) return ZC(CC, FC, wC);
        const WC = ZC(CC).then(FC);
        return WC.catch((CC => {
          null === wC || void 0 === wC || wC(CC)
        })), WC
      }
    }(0, QC.h)(NC);
    const gC = wC.Howl.prototype,
      SC = gC.init;
    gC.init = function(CC) {
      return wC.Howler.volume(), bC.ctx && MC(bC.ctx), SC.call(this, CC)
    };
    const pC = gC.unload;
    gC.unload = function() {
      const CC = this._src,
        zC = pC.call(this);
      if ("string" !== typeof CC) return zC;
      const ZC = nC.get(CC);
      return void 0 !== ZC && function(CC) {
        return !bC._howls.some((zC => zC._src === CC || "string" === typeof zC._src && CC.indexOf(zC._src) >= 0))
      }(CC) && (nC.delete(CC), fC -= ZC), zC
    }
  },
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