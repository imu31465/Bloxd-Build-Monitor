export const id = 92;
export const ids = [92];
export const modules = {
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