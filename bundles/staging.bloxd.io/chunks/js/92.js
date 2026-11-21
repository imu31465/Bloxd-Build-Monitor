export const id = 92;
export const ids = [92];
export const modules = {
  4694: (QQ, FQ, wQ) => {
    wQ.r(FQ), wQ.d(FQ, {
      Howl: () => qQ.Howl,
      Howler: () => qQ.Howler,
      musicOutput: () => xQ,
      readyAudioContext: () => AQ
    });
    var LQ, qQ = wQ(4702),
      oQ = wQ(4494);
    const DQ = qQ.Howler;

    function kQ() {
      var QQ, FQ;
      if (DQ.ctx || !DQ.usingWebAudio || "undefined" === typeof AudioContext || !(0, oQ.i)()) return;
      const wQ = navigator.audioSession;
      let LQ;
      "auto" === (null === wQ || void 0 === wQ ? void 0 : wQ.type) && (wQ.type = "ambient");
      try {
        LQ = new AudioContext({
          sampleRate: 44100
        })
      } catch {
        return
      }
      const qQ = LQ.createGain();
      qQ.gain.setValueAtTime(DQ._muted ? 0 : null !== (QQ = DQ._volume) && void 0 !== QQ ? QQ : 1, LQ.currentTime), qQ.connect(LQ.destination), DQ.ctx = LQ, DQ.masterGain = qQ, null === (FQ = DQ._setup) || void 0 === FQ || FQ.call(DQ)
    }
    DQ._mobileUnloaded = !0;
    const vQ = DQ.volume.bind(qQ.Howler);
    DQ.volume = function() {
      return kQ(), vQ(...arguments)
    };
    const mQ = DQ.mute.bind(qQ.Howler);
    DQ.mute = QQ => (kQ(), mQ(QQ));
    const uQ = qQ.Howl.prototype,
      HQ = uQ.init;
    uQ.init = function(QQ) {
      return kQ(), HQ.call(this, QQ)
    };
    let bQ = 0;
    const YQ = null === (LQ = DQ._autoSuspend) || void 0 === LQ ? void 0 : LQ.bind(qQ.Howler);

    function xQ() {
      AQ();
      const {
        ctx: QQ,
        masterGain: FQ
      } = DQ;
      return QQ && FQ ? {
        ctx: QQ,
        destination: FQ,
        holdAwake: QQ => {
          var FQ, wQ;
          (bQ += QQ ? 1 : -1, QQ) ? null === (FQ = DQ._autoResume) || void 0 === FQ || FQ.call(DQ): null === (wQ = DQ._autoSuspend) || void 0 === wQ || wQ.call(DQ)
        },
        wake: () => {
          var FQ;
          "running" !== QQ.state && (null === (FQ = DQ._autoResume) || void 0 === FQ || FQ.call(DQ), QQ.resume().catch((() => {})))
        }
      } : null
    }

    function AQ() {
      var QQ;
      (DQ.volume(), DQ.ctx && DQ.autoUnlock) && (null === (QQ = DQ._unlockAudio) || void 0 === QQ || QQ.call(DQ))
    }
    YQ && (DQ._autoSuspend = () => bQ > 0 ? qQ.Howler : YQ())
  }
};
Object.freeze(modules);
for (const QQ in modules) Object.freeze(modules[QQ]);