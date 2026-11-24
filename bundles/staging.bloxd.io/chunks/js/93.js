export const id = 93;
export const ids = [93];
export const modules = {
  4875: (DD, zD, wD) => {
    wD.r(zD), wD.d(zD, {
      Howl: () => sD.Howl,
      Howler: () => sD.Howler,
      musicOutput: () => GD,
      readyAudioContext: () => hD
    });
    var pD, sD = wD(4877),
      KD = wD(3444),
      rD = wD(4682);
    const LD = sD.Howler;

    function cD() {
      var DD, zD;
      if (LD.ctx || !LD.usingWebAudio || "undefined" === typeof AudioContext || !(0, rD.l)()) return;
      const wD = navigator.audioSession;
      let pD;
      "auto" === (null === wD || void 0 === wD ? void 0 : wD.type) && (wD.type = "ambient");
      try {
        pD = new AudioContext({
          sampleRate: 44100
        })
      } catch {
        return
      }
      const sD = pD.createGain();
      sD.gain.setValueAtTime(LD._muted ? 0 : null !== (DD = LD._volume) && void 0 !== DD ? DD : 1, pD.currentTime), sD.connect(pD.destination), LD.ctx = pD, LD.masterGain = sD, null === (zD = LD._setup) || void 0 === zD || zD.call(LD)
    }
    LD._mobileUnloaded = !0;
    const gD = LD.volume.bind(sD.Howler);
    LD.volume = function() {
      return cD(), gD(...arguments)
    };
    const RD = LD.mute.bind(sD.Howler);
    LD.mute = DD => (cD(), RD(DD));
    const AD = sD.Howl.prototype,
      UD = AD.init;

    function fD() {
      for (; LD._html5AudioPool.length < LD.html5PoolSize;) {
        const DD = new Audio;
        DD._unlocked = !0, LD._releaseHtml5Audio(DD)
      }
      for (const zD of LD._howls)
        if (!zD._webAudio)
          for (const wD of zD._getSoundIds()) {
            var DD;
            const pD = null === (DD = zD._soundById(wD)) || void 0 === DD ? void 0 : DD._node;
            pD && !pD._unlocked && (pD._unlocked = !0, pD.load())
          }
    }
    AD.init = function(DD) {
      return cD(), UD.call(this, DD)
    }, (0, rD.l)() && (LD._unlockAudio = () => {
      const DD = LD.ctx;
      if (LD._audioUnlocked || !DD) return;
      LD.autoUnlock = !1;
      const zD = DD.createBuffer(1, 1, 22050);
      LD._scratchBuffer = zD;
      const wD = new AbortController;
      let pD = "afterPaint";
      const sD = () => {
          var pD;
          if (LD._audioUnlocked) return;
          null === (pD = LD._autoResume) || void 0 === pD || pD.call(LD);
          const sD = DD.createBufferSource();
          sD.buffer = zD, sD.connect(DD.destination), sD.start(0), DD.resume().catch((() => {})), sD.onended = () => {
            sD.disconnect(0), LD._audioUnlocked = !0, wD.abort();
            for (const DD of LD._howls) DD._emit("unlock")
          }
        },
        cD = () => {
          fD(), sD()
        },
        gD = zD => {
          if (fD(), "inTap" === pD) {
            if ("running" === DD.state) return;
            console.warn("A click's resume after its frame left Howler's context suspended, so this click resumes it"), sD()
          } else "afterPaint" === pD && (pD = "queued", (0, KD.d)(zD.timeStamp, (() => {
            pD = "inTap", sD()
          })))
        };
      for (const KD of ["touchstart", "touchend"]) document.addEventListener(KD, cD, {
        capture: !0,
        signal: wD.signal
      });
      for (const KD of rD.d) document.addEventListener(KD, gD, {
        capture: !0,
        signal: wD.signal
      })
    });
    let ID = 0;
    const BD = null === (pD = LD._autoSuspend) || void 0 === pD ? void 0 : pD.bind(sD.Howler);

    function GD() {
      hD();
      const {
        ctx: DD,
        masterGain: zD
      } = LD;
      return DD && zD ? {
        ctx: DD,
        destination: zD,
        holdAwake: DD => {
          var zD, wD;
          (ID += DD ? 1 : -1, DD) ? null === (zD = LD._autoResume) || void 0 === zD || zD.call(LD): null === (wD = LD._autoSuspend) || void 0 === wD || wD.call(LD)
        },
        wake: () => {
          var zD;
          "running" !== DD.state && (null === (zD = LD._autoResume) || void 0 === zD || zD.call(LD), DD.resume().catch((() => {})))
        }
      } : null
    }

    function hD() {
      var DD;
      (LD.volume(), LD.ctx && LD.autoUnlock) && (null === (DD = LD._unlockAudio) || void 0 === DD || DD.call(LD))
    }
    BD && (LD._autoSuspend = () => ID > 0 ? sD.Howler : BD())
  }
};
Object.freeze(modules);
for (const DD in modules) Object.freeze(modules[DD]);