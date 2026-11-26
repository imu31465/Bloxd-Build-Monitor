export const id = 108;
export const ids = [108];
export const modules = {
  5353: (VV, eV, xV) => {
    xV.r(eV), xV.d(eV, {
      Howl: () => YV.Howl,
      Howler: () => YV.Howler,
      musicOutput: () => EV,
      readyAudioContext: () => BV
    });
    var JV, YV = xV(5357),
      UV = xV(3886),
      yV = xV(5137);
    const pV = YV.Howler;

    function QV() {
      var VV, eV;
      if (pV.ctx || !pV.usingWebAudio || "undefined" === typeof AudioContext || !(0, yV.i)()) return;
      const xV = navigator.audioSession;
      let JV;
      "auto" === (null === xV || void 0 === xV ? void 0 : xV.type) && (xV.type = "ambient");
      try {
        JV = new AudioContext({
          sampleRate: 44100
        })
      } catch {
        return
      }
      const YV = JV.createGain();
      YV.gain.setValueAtTime(pV._muted ? 0 : null !== (VV = pV._volume) && void 0 !== VV ? VV : 1, JV.currentTime), YV.connect(JV.destination), pV.ctx = JV, pV.masterGain = YV, null === (eV = pV._setup) || void 0 === eV || eV.call(pV)
    }
    pV._mobileUnloaded = !0;
    const nV = pV.volume.bind(YV.Howler);
    pV.volume = function() {
      return QV(), nV(...arguments)
    };
    const wV = pV.mute.bind(YV.Howler);
    pV.mute = VV => (QV(), wV(VV));
    const ZV = YV.Howl.prototype,
      vV = ZV.init;

    function rV() {
      for (; pV._html5AudioPool.length < pV.html5PoolSize;) {
        const VV = new Audio;
        VV._unlocked = !0, pV._releaseHtml5Audio(VV)
      }
      for (const eV of pV._howls)
        if (!eV._webAudio)
          for (const xV of eV._getSoundIds()) {
            var VV;
            const JV = null === (VV = eV._soundById(xV)) || void 0 === VV ? void 0 : VV._node;
            JV && !JV._unlocked && (JV._unlocked = !0, JV.load())
          }
    }
    ZV.init = function(VV) {
      return QV(), vV.call(this, VV)
    }, (0, yV.i)() && (pV._unlockAudio = () => {
      const VV = pV.ctx;
      if (pV._audioUnlocked || !VV) return;
      pV.autoUnlock = !1;
      const eV = VV.createBuffer(1, 1, 22050);
      pV._scratchBuffer = eV;
      const xV = new AbortController;
      let JV = "afterPaint";
      const YV = () => {
          var JV;
          if (pV._audioUnlocked) return;
          null === (JV = pV._autoResume) || void 0 === JV || JV.call(pV);
          const YV = VV.createBufferSource();
          YV.buffer = eV, YV.connect(VV.destination), YV.start(0), VV.resume().catch((() => {})), YV.onended = () => {
            YV.disconnect(0), pV._audioUnlocked = !0, xV.abort();
            for (const VV of pV._howls) VV._emit("unlock")
          }
        },
        QV = () => {
          rV(), YV()
        },
        nV = eV => {
          if (rV(), "inTap" === JV) {
            if ("running" === VV.state) return;
            console.warn("A click's resume after its frame left Howler's context suspended, so this click resumes it"), YV()
          } else "afterPaint" === JV && (JV = "queued", (0, UV.c)(eV.timeStamp, (() => {
            JV = "inTap", YV()
          })))
        };
      for (const UV of ["touchstart", "touchend"]) document.addEventListener(UV, QV, {
        capture: !0,
        signal: xV.signal
      });
      for (const UV of yV.c) document.addEventListener(UV, nV, {
        capture: !0,
        signal: xV.signal
      })
    });
    let kV = 0;
    const bV = null === (JV = pV._autoSuspend) || void 0 === JV ? void 0 : JV.bind(YV.Howler);

    function EV() {
      BV();
      const {
        ctx: VV,
        masterGain: eV
      } = pV;
      return VV && eV ? {
        ctx: VV,
        destination: eV,
        holdAwake: VV => {
          var eV, xV;
          (kV += VV ? 1 : -1, VV) ? null === (eV = pV._autoResume) || void 0 === eV || eV.call(pV): null === (xV = pV._autoSuspend) || void 0 === xV || xV.call(pV)
        },
        wake: () => {
          var eV;
          "running" !== VV.state && (null === (eV = pV._autoResume) || void 0 === eV || eV.call(pV), VV.resume().catch((() => {})))
        }
      } : null
    }

    function BV() {
      var VV;
      (pV.volume(), pV.ctx && pV.autoUnlock) && (null === (VV = pV._unlockAudio) || void 0 === VV || VV.call(pV))
    }
    bV && (pV._autoSuspend = () => kV > 0 ? YV.Howler : bV())
  }
};
Object.freeze(modules);
for (const VV in modules) Object.freeze(modules[VV]);