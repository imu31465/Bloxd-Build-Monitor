export const id = 98;
export const ids = [98];
export const modules = {
  5212: (QQ, WQ, XQ) => {
    XQ.r(WQ), XQ.d(WQ, {
      Howl: () => qQ.Howl,
      Howler: () => qQ.Howler,
      musicOutput: () => yQ,
      readyAudioContext: () => VQ
    });
    var wQ, qQ = XQ(5216),
      TQ = XQ(3699),
      zQ = XQ(4969);
    const sQ = qQ.Howler;

    function FQ() {
      var QQ, WQ;
      if (sQ.ctx || !sQ.usingWebAudio || "undefined" === typeof AudioContext || !(0, zQ.f)()) return;
      const XQ = navigator.audioSession;
      let wQ;
      "auto" === (null === XQ || void 0 === XQ ? void 0 : XQ.type) && (XQ.type = "ambient");
      try {
        wQ = new AudioContext({
          sampleRate: 44100
        })
      } catch {
        return
      }
      const qQ = wQ.createGain();
      qQ.gain.setValueAtTime(sQ._muted ? 0 : null !== (QQ = sQ._volume) && void 0 !== QQ ? QQ : 1, wQ.currentTime), qQ.connect(wQ.destination), sQ.ctx = wQ, sQ.masterGain = qQ, null === (WQ = sQ._setup) || void 0 === WQ || WQ.call(sQ)
    }
    sQ._mobileUnloaded = !0;
    const PQ = sQ.volume.bind(qQ.Howler);
    sQ.volume = function() {
      return FQ(), PQ(...arguments)
    };
    const gQ = sQ.mute.bind(qQ.Howler);
    sQ.mute = QQ => (FQ(), gQ(QQ));
    const JQ = qQ.Howl.prototype,
      rQ = JQ.init;

    function IQ() {
      for (; sQ._html5AudioPool.length < sQ.html5PoolSize;) {
        const QQ = new Audio;
        QQ._unlocked = !0, sQ._releaseHtml5Audio(QQ)
      }
      for (const WQ of sQ._howls)
        if (!WQ._webAudio)
          for (const XQ of WQ._getSoundIds()) {
            var QQ;
            const wQ = null === (QQ = WQ._soundById(XQ)) || void 0 === QQ ? void 0 : QQ._node;
            wQ && !wQ._unlocked && (wQ._unlocked = !0, wQ.load())
          }
    }
    JQ.init = function(QQ) {
      return FQ(), rQ.call(this, QQ)
    }, (0, zQ.f)() && (sQ._unlockAudio = () => {
      const QQ = sQ.ctx;
      if (sQ._audioUnlocked || !QQ) return;
      sQ.autoUnlock = !1;
      const WQ = QQ.createBuffer(1, 1, 22050);
      sQ._scratchBuffer = WQ;
      const XQ = new AbortController;
      let wQ = "afterPaint";
      const qQ = () => {
          var wQ;
          if (sQ._audioUnlocked) return;
          null === (wQ = sQ._autoResume) || void 0 === wQ || wQ.call(sQ);
          const qQ = QQ.createBufferSource();
          qQ.buffer = WQ, qQ.connect(QQ.destination), qQ.start(0), QQ.resume().catch((() => {})), qQ.onended = () => {
            qQ.disconnect(0), sQ._audioUnlocked = !0, XQ.abort();
            for (const QQ of sQ._howls) QQ._emit("unlock")
          }
        },
        FQ = () => {
          IQ(), qQ()
        },
        PQ = WQ => {
          if (IQ(), "inTap" === wQ) {
            if ("running" === QQ.state) return;
            console.warn("A click's resume after its frame left Howler's context suspended, so this click resumes it"), qQ()
          } else "afterPaint" === wQ && (wQ = "queued", (0, TQ.c)(WQ.timeStamp, (() => {
            wQ = "inTap", qQ()
          })))
        };
      for (const TQ of ["touchstart", "touchend"]) document.addEventListener(TQ, FQ, {
        capture: !0,
        signal: XQ.signal
      });
      for (const TQ of zQ.d) document.addEventListener(TQ, PQ, {
        capture: !0,
        signal: XQ.signal
      })
    });
    let jQ = 0;
    const BQ = null === (wQ = sQ._autoSuspend) || void 0 === wQ ? void 0 : wQ.bind(qQ.Howler);

    function yQ() {
      VQ();
      const {
        ctx: QQ,
        masterGain: WQ
      } = sQ;
      return QQ && WQ ? {
        ctx: QQ,
        destination: WQ,
        holdAwake: QQ => {
          var WQ, XQ;
          (jQ += QQ ? 1 : -1, QQ) ? null === (WQ = sQ._autoResume) || void 0 === WQ || WQ.call(sQ): null === (XQ = sQ._autoSuspend) || void 0 === XQ || XQ.call(sQ)
        },
        wake: () => {
          var WQ;
          "running" !== QQ.state && (null === (WQ = sQ._autoResume) || void 0 === WQ || WQ.call(sQ), QQ.resume().catch((() => {})))
        }
      } : null
    }

    function VQ() {
      var QQ;
      (sQ.volume(), sQ.ctx && sQ.autoUnlock) && (null === (QQ = sQ._unlockAudio) || void 0 === QQ || QQ.call(sQ))
    }
    BQ && (sQ._autoSuspend = () => jQ > 0 ? qQ.Howler : BQ())
  }
};
Object.freeze(modules);
for (const QQ in modules) Object.freeze(modules[QQ]);