export const id = 108;
export const ids = [108];
export const modules = {
  5335: (HH, BH, LH) => {
    LH.r(BH), LH.d(BH, {
      Howl: () => rH.Howl,
      Howler: () => rH.Howler,
      musicOutput: () => WH,
      readyAudioContext: () => MH
    });
    var AH, rH = LH(5343),
      SH = LH(3811),
      hH = LH(5067);
    const tH = rH.Howler;

    function zH() {
      var HH, BH;
      if (tH.ctx || !tH.usingWebAudio || "undefined" === typeof AudioContext || !(0, hH.i)()) return;
      const LH = navigator.audioSession;
      let AH;
      "auto" === (null === LH || void 0 === LH ? void 0 : LH.type) && (LH.type = "ambient");
      try {
        AH = new AudioContext({
          sampleRate: 44100
        })
      } catch {
        return
      }
      const rH = AH.createGain();
      rH.gain.setValueAtTime(tH._muted ? 0 : null !== (HH = tH._volume) && void 0 !== HH ? HH : 1, AH.currentTime), rH.connect(AH.destination), tH.ctx = AH, tH.masterGain = rH, null === (BH = tH._setup) || void 0 === BH || BH.call(tH)
    }
    tH._mobileUnloaded = !0;
    const CH = tH.volume.bind(rH.Howler);
    tH.volume = function() {
      return zH(), CH(...arguments)
    };
    const EH = tH.mute.bind(rH.Howler);
    tH.mute = HH => (zH(), EH(HH));
    const XH = rH.Howl.prototype,
      GH = XH.init;

    function YH() {
      for (; tH._html5AudioPool.length < tH.html5PoolSize;) {
        const HH = new Audio;
        HH._unlocked = !0, tH._releaseHtml5Audio(HH)
      }
      for (const BH of tH._howls)
        if (!BH._webAudio)
          for (const LH of BH._getSoundIds()) {
            var HH;
            const AH = null === (HH = BH._soundById(LH)) || void 0 === HH ? void 0 : HH._node;
            AH && !AH._unlocked && (AH._unlocked = !0, AH.load())
          }
    }
    XH.init = function(HH) {
      return zH(), GH.call(this, HH)
    }, (0, hH.i)() && (tH._unlockAudio = () => {
      const HH = tH.ctx;
      if (tH._audioUnlocked || !HH) return;
      tH.autoUnlock = !1;
      const BH = HH.createBuffer(1, 1, 22050);
      tH._scratchBuffer = BH;
      const LH = new AbortController;
      let AH = "afterPaint";
      const rH = () => {
          var AH;
          if (tH._audioUnlocked) return;
          null === (AH = tH._autoResume) || void 0 === AH || AH.call(tH);
          const rH = HH.createBufferSource();
          rH.buffer = BH, rH.connect(HH.destination), rH.start(0), HH.resume().catch((() => {})), rH.onended = () => {
            rH.disconnect(0), tH._audioUnlocked = !0, LH.abort();
            for (const HH of tH._howls) HH._emit("unlock")
          }
        },
        zH = () => {
          YH(), rH()
        },
        CH = BH => {
          if (YH(), "inTap" === AH) {
            if ("running" === HH.state) return;
            console.warn("A click's resume after its frame left Howler's context suspended, so this click resumes it"), rH()
          } else "afterPaint" === AH && (AH = "queued", (0, SH.c)(BH.timeStamp, (() => {
            AH = "inTap", rH()
          })))
        };
      for (const SH of ["touchstart", "touchend"]) document.addEventListener(SH, zH, {
        capture: !0,
        signal: LH.signal
      });
      for (const SH of hH.d) document.addEventListener(SH, CH, {
        capture: !0,
        signal: LH.signal
      })
    });
    let uH = 0;
    const QH = null === (AH = tH._autoSuspend) || void 0 === AH ? void 0 : AH.bind(rH.Howler);

    function WH() {
      MH();
      const {
        ctx: HH,
        masterGain: BH
      } = tH;
      return HH && BH ? {
        ctx: HH,
        destination: BH,
        holdAwake: HH => {
          var BH, LH;
          (uH += HH ? 1 : -1, HH) ? null === (BH = tH._autoResume) || void 0 === BH || BH.call(tH): null === (LH = tH._autoSuspend) || void 0 === LH || LH.call(tH)
        },
        wake: () => {
          var BH;
          "running" !== HH.state && (null === (BH = tH._autoResume) || void 0 === BH || BH.call(tH), HH.resume().catch((() => {})))
        }
      } : null
    }

    function MH() {
      var HH;
      (tH.volume(), tH.ctx && tH.autoUnlock) && (null === (HH = tH._unlockAudio) || void 0 === HH || HH.call(tH))
    }
    QH && (tH._autoSuspend = () => uH > 0 ? rH.Howler : QH())
  }
};
Object.freeze(modules);
for (const HH in modules) Object.freeze(modules[HH]);