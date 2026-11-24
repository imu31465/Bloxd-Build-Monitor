export const id = 95;
export const ids = [95];
export const modules = {
  5028: (BB, IB, ZB) => {
    ZB.r(IB), ZB.d(IB, {
      Howl: () => JB.Howl,
      Howler: () => JB.Howler,
      musicOutput: () => qB,
      readyAudioContext: () => yB
    });
    var TB, JB = ZB(5031),
      oB = ZB(3625),
      GB = ZB(4824);
    const vB = JB.Howler;

    function kB() {
      var BB, IB;
      if (vB.ctx || !vB.usingWebAudio || "undefined" === typeof AudioContext || !(0, GB.i)()) return;
      const ZB = navigator.audioSession;
      let TB;
      "auto" === (null === ZB || void 0 === ZB ? void 0 : ZB.type) && (ZB.type = "ambient");
      try {
        TB = new AudioContext({
          sampleRate: 44100
        })
      } catch {
        return
      }
      const JB = TB.createGain();
      JB.gain.setValueAtTime(vB._muted ? 0 : null !== (BB = vB._volume) && void 0 !== BB ? BB : 1, TB.currentTime), JB.connect(TB.destination), vB.ctx = TB, vB.masterGain = JB, null === (IB = vB._setup) || void 0 === IB || IB.call(vB)
    }
    vB._mobileUnloaded = !0;
    const cB = vB.volume.bind(JB.Howler);
    vB.volume = function() {
      return kB(), cB(...arguments)
    };
    const nB = vB.mute.bind(JB.Howler);
    vB.mute = BB => (kB(), nB(BB));
    const hB = JB.Howl.prototype,
      zB = hB.init;

    function FB() {
      for (; vB._html5AudioPool.length < vB.html5PoolSize;) {
        const BB = new Audio;
        BB._unlocked = !0, vB._releaseHtml5Audio(BB)
      }
      for (const IB of vB._howls)
        if (!IB._webAudio)
          for (const ZB of IB._getSoundIds()) {
            var BB;
            const TB = null === (BB = IB._soundById(ZB)) || void 0 === BB ? void 0 : BB._node;
            TB && !TB._unlocked && (TB._unlocked = !0, TB.load())
          }
    }
    hB.init = function(BB) {
      return kB(), zB.call(this, BB)
    }, (0, GB.i)() && (vB._unlockAudio = () => {
      const BB = vB.ctx;
      if (vB._audioUnlocked || !BB) return;
      vB.autoUnlock = !1;
      const IB = BB.createBuffer(1, 1, 22050);
      vB._scratchBuffer = IB;
      const ZB = new AbortController;
      let TB = "afterPaint";
      const JB = () => {
          var TB;
          if (vB._audioUnlocked) return;
          null === (TB = vB._autoResume) || void 0 === TB || TB.call(vB);
          const JB = BB.createBufferSource();
          JB.buffer = IB, JB.connect(BB.destination), JB.start(0), BB.resume().catch((() => {})), JB.onended = () => {
            JB.disconnect(0), vB._audioUnlocked = !0, ZB.abort();
            for (const BB of vB._howls) BB._emit("unlock")
          }
        },
        kB = () => {
          FB(), JB()
        },
        cB = IB => {
          if (FB(), "inTap" === TB) {
            if ("running" === BB.state) return;
            console.warn("A click's resume after its frame left Howler's context suspended, so this click resumes it"), JB()
          } else "afterPaint" === TB && (TB = "queued", (0, oB.d)(IB.timeStamp, (() => {
            TB = "inTap", JB()
          })))
        };
      for (const oB of ["touchstart", "touchend"]) document.addEventListener(oB, kB, {
        capture: !0,
        signal: ZB.signal
      });
      for (const oB of GB.e) document.addEventListener(oB, cB, {
        capture: !0,
        signal: ZB.signal
      })
    });
    let NB = 0;
    const gB = null === (TB = vB._autoSuspend) || void 0 === TB ? void 0 : TB.bind(JB.Howler);

    function qB() {
      yB();
      const {
        ctx: BB,
        masterGain: IB
      } = vB;
      return BB && IB ? {
        ctx: BB,
        destination: IB,
        holdAwake: BB => {
          var IB, ZB;
          (NB += BB ? 1 : -1, BB) ? null === (IB = vB._autoResume) || void 0 === IB || IB.call(vB): null === (ZB = vB._autoSuspend) || void 0 === ZB || ZB.call(vB)
        },
        wake: () => {
          var IB;
          "running" !== BB.state && (null === (IB = vB._autoResume) || void 0 === IB || IB.call(vB), BB.resume().catch((() => {})))
        }
      } : null
    }

    function yB() {
      var BB;
      (vB.volume(), vB.ctx && vB.autoUnlock) && (null === (BB = vB._unlockAudio) || void 0 === BB || BB.call(vB))
    }
    gB && (vB._autoSuspend = () => NB > 0 ? JB.Howler : gB())
  }
};
Object.freeze(modules);
for (const BB in modules) Object.freeze(modules[BB]);