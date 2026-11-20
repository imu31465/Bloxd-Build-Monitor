export const id = 93;
export const ids = [92, 93];
export const modules = {
  36493: (qq, Eq, gq) => {
    gq.r(Eq), gq.d(Eq, {
      countDecodesAs: () => Bq,
      decodedAudio: () => Wq
    });
    var Yq = gq(36496),
      lq = gq(4684);
    const Oq = lq.Howler,
      mq = new Map;
    let xq = 0;
    const Aq = {
        song: 0,
        sheet: 0
      },
      cq = new WeakMap,
      uq = new WeakSet;

    function Bq(qq, Eq) {
      return cq.set(qq, Eq), qq
    }

    function Wq() {
      return {
        bytes: xq,
        songsDecoded: Aq.song,
        sheetsDecoded: Aq.sheet
      }
    }

    function Nq(qq) {
      if (uq.has(qq)) return;
      uq.add(qq);
      const Eq = 1 === qq.decodeAudioData.length,
        gq = qq.decodeAudioData.bind(qq);
      qq.decodeAudioData = (qq, Yq, lq) => {
        const uq = qq => {
          const Eq = Oq._howls.filter((qq => "loaded" !== qq._state));
          try {
            null === Yq || void 0 === Yq || Yq(qq)
          } finally {
            const gq = Eq.find((qq => "loaded" === qq._state));
            void 0 !== gq && "string" === typeof gq._src && function(qq, Eq, gq) {
              var Yq;
              xq += gq - (null !== (Yq = mq.get(Eq)) && void 0 !== Yq ? Yq : 0), mq.set(Eq, gq);
              const lq = cq.get(qq);
              void 0 !== lq && Aq[lq]++
            }(gq, gq._src, qq.length * qq.numberOfChannels * Float32Array.BYTES_PER_ELEMENT)
          }
          return qq
        };
        if (!Eq) return gq(qq, uq, lq);
        const Bq = gq(qq).then(uq);
        return Bq.catch((qq => {
          null === lq || void 0 === lq || lq(qq)
        })), Bq
      }
    }(0, Yq.d)(Wq);
    const aq = lq.Howl.prototype,
      Vq = aq.init;
    aq.init = function(qq) {
      return lq.Howler.volume(), Oq.ctx && Nq(Oq.ctx), Vq.call(this, qq)
    };
    const dq = aq.unload;
    aq.unload = function() {
      const qq = this._src,
        Eq = dq.call(this);
      if ("string" !== typeof qq) return Eq;
      const gq = mq.get(qq);
      return void 0 !== gq && function(qq) {
        return !Oq._howls.some((Eq => Eq._src === qq || "string" === typeof Eq._src && qq.indexOf(Eq._src) >= 0))
      }(qq) && (mq.delete(qq), xq -= gq), Eq
    }
  },
  36496: (qq, Eq, gq) => {
    gq.d(Eq, {
      c: () => Oq,
      d: () => lq
    });
    let Yq = null;

    function lq(qq) {
      Yq = qq
    }

    function Oq() {
      return null === Yq ? null : Yq()
    }
  },
  4684: (qq, Eq, gq) => {
    gq.r(Eq), gq.d(Eq, {
      Howl: () => lq.Howl,
      Howler: () => lq.Howler,
      musicOutput: () => aq,
      readyAudioContext: () => Vq
    });
    var Yq, lq = gq(4692),
      Oq = gq(4477);
    const mq = lq.Howler;

    function xq() {
      var qq, Eq;
      if (mq.ctx || !mq.usingWebAudio || "undefined" === typeof AudioContext || !(0, Oq.f)()) return;
      const gq = navigator.audioSession;
      let Yq;
      "auto" === (null === gq || void 0 === gq ? void 0 : gq.type) && (gq.type = "ambient");
      try {
        Yq = new AudioContext({
          sampleRate: 44100
        })
      } catch {
        return
      }
      const lq = Yq.createGain();
      lq.gain.setValueAtTime(mq._muted ? 0 : null !== (qq = mq._volume) && void 0 !== qq ? qq : 1, Yq.currentTime), lq.connect(Yq.destination), mq.ctx = Yq, mq.masterGain = lq, null === (Eq = mq._setup) || void 0 === Eq || Eq.call(mq)
    }
    mq._mobileUnloaded = !0;
    const Aq = mq.volume.bind(lq.Howler);
    mq.volume = function() {
      return xq(), Aq(...arguments)
    };
    const cq = mq.mute.bind(lq.Howler);
    mq.mute = qq => (xq(), cq(qq));
    const uq = lq.Howl.prototype,
      Bq = uq.init;
    uq.init = function(qq) {
      return xq(), Bq.call(this, qq)
    };
    let Wq = 0;
    const Nq = null === (Yq = mq._autoSuspend) || void 0 === Yq ? void 0 : Yq.bind(lq.Howler);

    function aq() {
      Vq();
      const {
        ctx: qq,
        masterGain: Eq
      } = mq;
      return qq && Eq ? {
        ctx: qq,
        destination: Eq,
        holdAwake: qq => {
          var Eq, gq;
          (Wq += qq ? 1 : -1, qq) ? null === (Eq = mq._autoResume) || void 0 === Eq || Eq.call(mq): null === (gq = mq._autoSuspend) || void 0 === gq || gq.call(mq)
        },
        wake: () => {
          var Eq;
          "running" !== qq.state && (null === (Eq = mq._autoResume) || void 0 === Eq || Eq.call(mq), qq.resume().catch((() => {})))
        }
      } : null
    }

    function Vq() {
      var qq;
      (mq.volume(), mq.ctx && mq.autoUnlock) && (null === (qq = mq._unlockAudio) || void 0 === qq || qq.call(mq))
    }
    Nq && (mq._autoSuspend = () => Wq > 0 ? lq.Howler : Nq())
  }
};
Object.freeze(modules);
for (const qq in modules) Object.freeze(modules[qq]);