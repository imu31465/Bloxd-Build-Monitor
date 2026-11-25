export const id = 96;
export const ids = [95, 96];
export const modules = {
  36778: (GG, bG, ZG) => {
    ZG.r(bG), ZG.d(bG, {
      countDecodesAs: () => pG,
      decodedAudio: () => fG
    });
    var wG = ZG(3238),
      SG = ZG(4883);
    const LG = SG.Howler,
      yG = new Map;
    let kG = 0;
    const UG = {
        song: 0,
        sheet: 0
      },
      YG = new WeakMap,
      VG = new WeakSet;

    function pG(GG, bG) {
      return YG.set(GG, bG), GG
    }

    function fG() {
      return {
        bytes: kG,
        songsDecoded: UG.song,
        sheetsDecoded: UG.sheet
      }
    }

    function QG(GG) {
      if (VG.has(GG)) return;
      VG.add(GG);
      const bG = 1 === GG.decodeAudioData.length,
        ZG = GG.decodeAudioData.bind(GG);
      GG.decodeAudioData = (GG, wG, SG) => {
        const VG = GG => {
          const bG = LG._howls.filter((GG => "loaded" !== GG._state));
          try {
            null === wG || void 0 === wG || wG(GG)
          } finally {
            const ZG = bG.find((GG => "loaded" === GG._state));
            void 0 !== ZG && "string" === typeof ZG._src && function(GG, bG, ZG) {
              var wG;
              kG += ZG - (null !== (wG = yG.get(bG)) && void 0 !== wG ? wG : 0), yG.set(bG, ZG);
              const SG = YG.get(GG);
              void 0 !== SG && UG[SG]++
            }(ZG, ZG._src, GG.length * GG.numberOfChannels * Float32Array.BYTES_PER_ELEMENT)
          }
          return GG
        };
        if (!bG) return ZG(GG, VG, SG);
        const pG = ZG(GG).then(VG);
        return pG.catch((GG => {
          null === SG || void 0 === SG || SG(GG)
        })), pG
      }
    }(0, wG.h)(fG);
    const KG = SG.Howl.prototype,
      hG = KG.init;
    KG.init = function(GG) {
      return SG.Howler.volume(), LG.ctx && QG(LG.ctx), hG.call(this, GG)
    };
    const dG = KG.unload;
    KG.unload = function() {
      const GG = this._src,
        bG = dG.call(this);
      if ("string" !== typeof GG) return bG;
      const ZG = yG.get(GG);
      return void 0 !== ZG && function(GG) {
        return !LG._howls.some((bG => bG._src === GG || "string" === typeof bG._src && GG.indexOf(bG._src) >= 0))
      }(GG) && (yG.delete(GG), kG -= ZG), bG
    }
  },
  4883: (GG, bG, ZG) => {
    ZG.r(bG), ZG.d(bG, {
      Howl: () => SG.Howl,
      Howler: () => SG.Howler,
      musicOutput: () => dG,
      readyAudioContext: () => JG
    });
    var wG, SG = ZG(4889),
      LG = ZG(3423),
      yG = ZG(4672);
    const kG = SG.Howler;

    function UG() {
      var GG, bG;
      if (kG.ctx || !kG.usingWebAudio || "undefined" === typeof AudioContext || !(0, yG.h)()) return;
      const ZG = navigator.audioSession;
      let wG;
      "auto" === (null === ZG || void 0 === ZG ? void 0 : ZG.type) && (ZG.type = "ambient");
      try {
        wG = new AudioContext({
          sampleRate: 44100
        })
      } catch {
        return
      }
      const SG = wG.createGain();
      SG.gain.setValueAtTime(kG._muted ? 0 : null !== (GG = kG._volume) && void 0 !== GG ? GG : 1, wG.currentTime), SG.connect(wG.destination), kG.ctx = wG, kG.masterGain = SG, null === (bG = kG._setup) || void 0 === bG || bG.call(kG)
    }
    kG._mobileUnloaded = !0;
    const YG = kG.volume.bind(SG.Howler);
    kG.volume = function() {
      return UG(), YG(...arguments)
    };
    const VG = kG.mute.bind(SG.Howler);
    kG.mute = GG => (UG(), VG(GG));
    const pG = SG.Howl.prototype,
      fG = pG.init;

    function QG() {
      for (; kG._html5AudioPool.length < kG.html5PoolSize;) {
        const GG = new Audio;
        GG._unlocked = !0, kG._releaseHtml5Audio(GG)
      }
      for (const bG of kG._howls)
        if (!bG._webAudio)
          for (const ZG of bG._getSoundIds()) {
            var GG;
            const wG = null === (GG = bG._soundById(ZG)) || void 0 === GG ? void 0 : GG._node;
            wG && !wG._unlocked && (wG._unlocked = !0, wG.load())
          }
    }
    pG.init = function(GG) {
      return UG(), fG.call(this, GG)
    }, (0, yG.h)() && (kG._unlockAudio = () => {
      const GG = kG.ctx;
      if (kG._audioUnlocked || !GG) return;
      kG.autoUnlock = !1;
      const bG = GG.createBuffer(1, 1, 22050);
      kG._scratchBuffer = bG;
      const ZG = new AbortController;
      let wG = "afterPaint";
      const SG = () => {
          var wG;
          if (kG._audioUnlocked) return;
          null === (wG = kG._autoResume) || void 0 === wG || wG.call(kG);
          const SG = GG.createBufferSource();
          SG.buffer = bG, SG.connect(GG.destination), SG.start(0), GG.resume().catch((() => {})), SG.onended = () => {
            SG.disconnect(0), kG._audioUnlocked = !0, ZG.abort();
            for (const GG of kG._howls) GG._emit("unlock")
          }
        },
        UG = () => {
          QG(), SG()
        },
        YG = bG => {
          if (QG(), "inTap" === wG) {
            if ("running" === GG.state) return;
            console.warn("A click's resume after its frame left Howler's context suspended, so this click resumes it"), SG()
          } else "afterPaint" === wG && (wG = "queued", (0, LG.d)(bG.timeStamp, (() => {
            wG = "inTap", SG()
          })))
        };
      for (const LG of ["touchstart", "touchend"]) document.addEventListener(LG, UG, {
        capture: !0,
        signal: ZG.signal
      });
      for (const LG of yG.d) document.addEventListener(LG, YG, {
        capture: !0,
        signal: ZG.signal
      })
    });
    let KG = 0;
    const hG = null === (wG = kG._autoSuspend) || void 0 === wG ? void 0 : wG.bind(SG.Howler);

    function dG() {
      JG();
      const {
        ctx: GG,
        masterGain: bG
      } = kG;
      return GG && bG ? {
        ctx: GG,
        destination: bG,
        holdAwake: GG => {
          var bG, ZG;
          (KG += GG ? 1 : -1, GG) ? null === (bG = kG._autoResume) || void 0 === bG || bG.call(kG): null === (ZG = kG._autoSuspend) || void 0 === ZG || ZG.call(kG)
        },
        wake: () => {
          var bG;
          "running" !== GG.state && (null === (bG = kG._autoResume) || void 0 === bG || bG.call(kG), GG.resume().catch((() => {})))
        }
      } : null
    }

    function JG() {
      var GG;
      (kG.volume(), kG.ctx && kG.autoUnlock) && (null === (GG = kG._unlockAudio) || void 0 === GG || GG.call(kG))
    }
    hG && (kG._autoSuspend = () => KG > 0 ? SG.Howler : hG())
  }
};
Object.freeze(modules);
for (const GG in modules) Object.freeze(modules[GG]);