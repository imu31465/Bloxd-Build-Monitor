export const id = 93;
export const ids = [92, 93];
export const modules = {
  36082: (QQ, FQ, wQ) => {
    wQ.r(FQ), wQ.d(FQ, {
      countDecodesAs: () => HQ,
      decodedAudio: () => bQ
    });
    var LQ = wQ(36086),
      qQ = wQ(4694);
    const oQ = qQ.Howler,
      DQ = new Map;
    let kQ = 0;
    const vQ = {
        song: 0,
        sheet: 0
      },
      mQ = new WeakMap,
      uQ = new WeakSet;

    function HQ(QQ, FQ) {
      return mQ.set(QQ, FQ), QQ
    }

    function bQ() {
      return {
        bytes: kQ,
        songsDecoded: vQ.song,
        sheetsDecoded: vQ.sheet
      }
    }

    function YQ(QQ) {
      if (uQ.has(QQ)) return;
      uQ.add(QQ);
      const FQ = 1 === QQ.decodeAudioData.length,
        wQ = QQ.decodeAudioData.bind(QQ);
      QQ.decodeAudioData = (QQ, LQ, qQ) => {
        const uQ = QQ => {
          const FQ = oQ._howls.filter((QQ => "loaded" !== QQ._state));
          try {
            null === LQ || void 0 === LQ || LQ(QQ)
          } finally {
            const wQ = FQ.find((QQ => "loaded" === QQ._state));
            void 0 !== wQ && "string" === typeof wQ._src && function(QQ, FQ, wQ) {
              var LQ;
              kQ += wQ - (null !== (LQ = DQ.get(FQ)) && void 0 !== LQ ? LQ : 0), DQ.set(FQ, wQ);
              const qQ = mQ.get(QQ);
              void 0 !== qQ && vQ[qQ]++
            }(wQ, wQ._src, QQ.length * QQ.numberOfChannels * Float32Array.BYTES_PER_ELEMENT)
          }
          return QQ
        };
        if (!FQ) return wQ(QQ, uQ, qQ);
        const HQ = wQ(QQ).then(uQ);
        return HQ.catch((QQ => {
          null === qQ || void 0 === qQ || qQ(QQ)
        })), HQ
      }
    }(0, LQ.c)(bQ);
    const xQ = qQ.Howl.prototype,
      AQ = xQ.init;
    xQ.init = function(QQ) {
      return qQ.Howler.volume(), oQ.ctx && YQ(oQ.ctx), AQ.call(this, QQ)
    };
    const tQ = xQ.unload;
    xQ.unload = function() {
      const QQ = this._src,
        FQ = tQ.call(this);
      if ("string" !== typeof QQ) return FQ;
      const wQ = DQ.get(QQ);
      return void 0 !== wQ && function(QQ) {
        return !oQ._howls.some((FQ => FQ._src === QQ || "string" === typeof FQ._src && QQ.indexOf(FQ._src) >= 0))
      }(QQ) && (DQ.delete(QQ), kQ -= wQ), FQ
    }
  },
  36086: (QQ, FQ, wQ) => {
    wQ.d(FQ, {
      b: () => oQ,
      c: () => qQ
    });
    let LQ = null;

    function qQ(QQ) {
      LQ = QQ
    }

    function oQ() {
      return null === LQ ? null : LQ()
    }
  },
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