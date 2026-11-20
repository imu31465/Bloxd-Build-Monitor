export const id = 92;
export const ids = [92];
export const modules = {
  4626: (bb, ub, hb) => {
    hb.r(ub), hb.d(ub, {
      Howl: () => Ob.Howl,
      Howler: () => Ob.Howler,
      musicOutput: () => Xb,
      readyAudioContext: () => pb
    });
    var Bb, Ob = hb(4629),
      Gb = hb(4415);
    const Ub = Ob.Howler;

    function Lb() {
      var bb, ub;
      if (Ub.ctx || !Ub.usingWebAudio || "undefined" === typeof AudioContext || !(0, Gb.d)()) return;
      const hb = navigator.audioSession;
      let Bb;
      "auto" === (null === hb || void 0 === hb ? void 0 : hb.type) && (hb.type = "ambient");
      try {
        Bb = new AudioContext({
          sampleRate: 44100
        })
      } catch {
        return
      }
      const Ob = Bb.createGain();
      Ob.gain.setValueAtTime(Ub._muted ? 0 : null !== (bb = Ub._volume) && void 0 !== bb ? bb : 1, Bb.currentTime), Ob.connect(Bb.destination), Ub.ctx = Bb, Ub.masterGain = Ob, null === (ub = Ub._setup) || void 0 === ub || ub.call(Ub)
    }
    Ub._mobileUnloaded = !0;
    const Yb = Ub.volume.bind(Ob.Howler);
    Ub.volume = function() {
      return Lb(), Yb(...arguments)
    };
    const Sb = Ub.mute.bind(Ob.Howler);
    Ub.mute = bb => (Lb(), Sb(bb));
    const ab = Ob.Howl.prototype,
      Hb = ab.init;
    ab.init = function(bb) {
      return Lb(), Hb.call(this, bb)
    };
    let wb = 0;
    const Zb = null === (Bb = Ub._autoSuspend) || void 0 === Bb ? void 0 : Bb.bind(Ob.Howler);

    function Xb() {
      pb();
      const {
        ctx: bb,
        masterGain: ub
      } = Ub;
      return bb && ub ? {
        ctx: bb,
        destination: ub,
        holdAwake: bb => {
          var ub, hb;
          (wb += bb ? 1 : -1, bb) ? null === (ub = Ub._autoResume) || void 0 === ub || ub.call(Ub): null === (hb = Ub._autoSuspend) || void 0 === hb || hb.call(Ub)
        },
        wake: () => {
          var ub;
          "running" !== bb.state && (null === (ub = Ub._autoResume) || void 0 === ub || ub.call(Ub), bb.resume().catch((() => {})))
        }
      } : null
    }

    function pb() {
      var bb;
      (Ub.volume(), Ub.ctx && Ub.autoUnlock) && (null === (bb = Ub._unlockAudio) || void 0 === bb || bb.call(Ub))
    }
    Zb && (Ub._autoSuspend = () => wb > 0 ? Ob.Howler : Zb())
  }
};
Object.freeze(modules);
for (const bb in modules) Object.freeze(modules[bb]);