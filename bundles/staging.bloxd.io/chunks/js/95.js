export const id = 95;
export const ids = [95];
export const modules = {
  4959: (TT, UT, mT) => {
    mT.r(UT), mT.d(UT, {
      Howl: () => zT.Howl,
      Howler: () => zT.Howler,
      musicOutput: () => cT,
      readyAudioContext: () => vT
    });
    var WT, zT = mT(4966),
      MT = mT(3536),
      gT = mT(4741);
    const nT = zT.Howler;

    function HT() {
      var TT, UT;
      if (nT.ctx || !nT.usingWebAudio || "undefined" === typeof AudioContext || !(0, gT.j)()) return;
      const mT = navigator.audioSession;
      let WT;
      "auto" === (null === mT || void 0 === mT ? void 0 : mT.type) && (mT.type = "ambient");
      try {
        WT = new AudioContext({
          sampleRate: 44100
        })
      } catch {
        return
      }
      const zT = WT.createGain();
      zT.gain.setValueAtTime(nT._muted ? 0 : null !== (TT = nT._volume) && void 0 !== TT ? TT : 1, WT.currentTime), zT.connect(WT.destination), nT.ctx = WT, nT.masterGain = zT, null === (UT = nT._setup) || void 0 === UT || UT.call(nT)
    }
    nT._mobileUnloaded = !0;
    const kT = nT.volume.bind(zT.Howler);
    nT.volume = function() {
      return HT(), kT(...arguments)
    };
    const jT = nT.mute.bind(zT.Howler);
    nT.mute = TT => (HT(), jT(TT));
    const lT = zT.Howl.prototype,
      LT = lT.init;

    function pT() {
      for (; nT._html5AudioPool.length < nT.html5PoolSize;) {
        const TT = new Audio;
        TT._unlocked = !0, nT._releaseHtml5Audio(TT)
      }
      for (const UT of nT._howls)
        if (!UT._webAudio)
          for (const mT of UT._getSoundIds()) {
            var TT;
            const WT = null === (TT = UT._soundById(mT)) || void 0 === TT ? void 0 : TT._node;
            WT && !WT._unlocked && (WT._unlocked = !0, WT.load())
          }
    }
    lT.init = function(TT) {
      return HT(), LT.call(this, TT)
    }, (0, gT.j)() && (nT._unlockAudio = () => {
      const TT = nT.ctx;
      if (nT._audioUnlocked || !TT) return;
      nT.autoUnlock = !1;
      const UT = TT.createBuffer(1, 1, 22050);
      nT._scratchBuffer = UT;
      const mT = new AbortController;
      let WT = "afterPaint";
      const zT = () => {
          var WT;
          if (nT._audioUnlocked) return;
          null === (WT = nT._autoResume) || void 0 === WT || WT.call(nT);
          const zT = TT.createBufferSource();
          zT.buffer = UT, zT.connect(TT.destination), zT.start(0), TT.resume().catch((() => {})), zT.onended = () => {
            zT.disconnect(0), nT._audioUnlocked = !0, mT.abort();
            for (const TT of nT._howls) TT._emit("unlock")
          }
        },
        HT = () => {
          pT(), zT()
        },
        kT = UT => {
          if (pT(), "inTap" === WT) {
            if ("running" === TT.state) return;
            console.warn("A click's resume after its frame left Howler's context suspended, so this click resumes it"), zT()
          } else "afterPaint" === WT && (WT = "queued", (0, MT.e)(UT.timeStamp, (() => {
            WT = "inTap", zT()
          })))
        };
      for (const MT of ["touchstart", "touchend"]) document.addEventListener(MT, HT, {
        capture: !0,
        signal: mT.signal
      });
      for (const MT of gT.c) document.addEventListener(MT, kT, {
        capture: !0,
        signal: mT.signal
      })
    });
    let BT = 0;
    const ZT = null === (WT = nT._autoSuspend) || void 0 === WT ? void 0 : WT.bind(zT.Howler);

    function cT() {
      vT();
      const {
        ctx: TT,
        masterGain: UT
      } = nT;
      return TT && UT ? {
        ctx: TT,
        destination: UT,
        holdAwake: TT => {
          var UT, mT;
          (BT += TT ? 1 : -1, TT) ? null === (UT = nT._autoResume) || void 0 === UT || UT.call(nT): null === (mT = nT._autoSuspend) || void 0 === mT || mT.call(nT)
        },
        wake: () => {
          var UT;
          "running" !== TT.state && (null === (UT = nT._autoResume) || void 0 === UT || UT.call(nT), TT.resume().catch((() => {})))
        }
      } : null
    }

    function vT() {
      var TT;
      (nT.volume(), nT.ctx && nT.autoUnlock) && (null === (TT = nT._unlockAudio) || void 0 === TT || TT.call(nT))
    }
    ZT && (nT._autoSuspend = () => BT > 0 ? zT.Howler : ZT())
  }
};
Object.freeze(modules);
for (const TT in modules) Object.freeze(modules[TT]);