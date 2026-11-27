export const id = 111;
export const ids = [110, 111];
export const modules = {
  37485: (RR, JR, GR) => {
    GR.r(JR), GR.d(JR, {
      countDecodesAs: () => KR,
      decodedAudio: () => wR
    });
    var yR = GR(4111),
      tR = GR(5742);
    const uR = tR.Howler,
      ZR = new Map;
    let qR = 0;
    const iR = {
        song: 0,
        sound: 0
      },
      fR = new WeakMap,
      VR = new WeakSet;

    function KR(RR, JR) {
      return fR.set(RR, JR), RR
    }

    function wR() {
      return {
        bytes: qR,
        songsDecoded: iR.song,
        soundsDecoded: iR.sound
      }
    }

    function rR(RR) {
      if (VR.has(RR)) return;
      VR.add(RR);
      const JR = 1 === RR.decodeAudioData.length,
        GR = RR.decodeAudioData.bind(RR);
      RR.decodeAudioData = (RR, yR, tR) => {
        const VR = RR => {
          const JR = uR._howls.filter((RR => "loaded" !== RR._state));
          try {
            null === yR || void 0 === yR || yR(RR)
          } finally {
            const GR = JR.find((RR => "loaded" === RR._state));
            void 0 !== GR && "string" === typeof GR._src && function(RR, JR, GR) {
              var yR;
              qR += GR - (null !== (yR = ZR.get(JR)) && void 0 !== yR ? yR : 0), ZR.set(JR, GR);
              const tR = fR.get(RR);
              void 0 !== tR && iR[tR]++
            }(GR, GR._src, RR.length * RR.numberOfChannels * Float32Array.BYTES_PER_ELEMENT)
          }
          return RR
        };
        if (!JR) return GR(RR, VR, tR);
        const KR = GR(RR).then(VR);
        return KR.catch((RR => {
          null === tR || void 0 === tR || tR(RR)
        })), KR
      }
    }(0, yR.e)(wR);
    const eR = tR.Howl.prototype,
      aR = eR.init;
    eR.init = function(RR) {
      return tR.Howler.volume(), uR.ctx && rR(uR.ctx), aR.call(this, RR)
    };
    const LR = eR.unload;
    eR.unload = function() {
      const RR = this._src,
        JR = LR.call(this);
      if ("string" !== typeof RR) return JR;
      const GR = ZR.get(RR);
      return void 0 !== GR && function(RR) {
        return !uR._howls.some((JR => JR._src === RR || "string" === typeof JR._src && RR.indexOf(JR._src) >= 0))
      }(RR) && (ZR.delete(RR), qR -= GR), JR
    }
  },
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