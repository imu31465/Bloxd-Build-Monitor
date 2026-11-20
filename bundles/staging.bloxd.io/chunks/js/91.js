export const id = 91;
export const ids = [91];
export const modules = {
  4579: (bb, cb, sb) => {
    sb.r(cb), sb.d(cb, {
      Howl: () => Wb.Howl,
      Howler: () => Wb.Howler,
      iosAudio: () => Ib,
      musicOutput: () => Qb,
      readyAudioContext: () => eb
    });
    var kb, Wb = sb(4585),
      ab = sb(117);
    const Tb = Wb.Howler;
    let Ub;

    function Ib() {
      return Ub ??= "ios" === (0, ab.getOperatingSystem)(), Ub
    }

    function Hb() {
      var bb, cb;
      if (Tb.ctx || !Tb.usingWebAudio || "undefined" === typeof AudioContext || !Ib()) return;
      const sb = navigator.audioSession;
      let kb;
      "auto" === (null === sb || void 0 === sb ? void 0 : sb.type) && (sb.type = "ambient");
      try {
        kb = new AudioContext({
          sampleRate: 44100
        })
      } catch {
        return
      }
      const Wb = kb.createGain();
      Wb.gain.setValueAtTime(Tb._muted ? 0 : null !== (bb = Tb._volume) && void 0 !== bb ? bb : 1, kb.currentTime), Wb.connect(kb.destination), Tb.ctx = kb, Tb.masterGain = Wb, null === (cb = Tb._setup) || void 0 === cb || cb.call(Tb)
    }
    Tb._mobileUnloaded = !0;
    const fb = Tb.volume.bind(Wb.Howler);
    Tb.volume = function() {
      return Hb(), fb(...arguments)
    };
    const Mb = Tb.mute.bind(Wb.Howler);
    Tb.mute = bb => (Hb(), Mb(bb));
    const Xb = Wb.Howl.prototype,
      nb = Xb.init;
    Xb.init = function(bb) {
      return Hb(), nb.call(this, bb)
    };
    let mb = 0;
    const lb = null === (kb = Tb._autoSuspend) || void 0 === kb ? void 0 : kb.bind(Wb.Howler);

    function Qb() {
      eb();
      const {
        ctx: bb,
        masterGain: cb
      } = Tb;
      return bb && cb ? {
        ctx: bb,
        destination: cb,
        holdAwake: bb => {
          var cb, sb;
          (mb += bb ? 1 : -1, bb) ? null === (cb = Tb._autoResume) || void 0 === cb || cb.call(Tb): null === (sb = Tb._autoSuspend) || void 0 === sb || sb.call(Tb)
        },
        wake: () => {
          var cb;
          "running" !== bb.state && (null === (cb = Tb._autoResume) || void 0 === cb || cb.call(Tb), bb.resume().catch((() => {})))
        }
      } : null
    }

    function eb() {
      var bb;
      (Tb.volume(), Tb.ctx && Tb.autoUnlock) && (null === (bb = Tb._unlockAudio) || void 0 === bb || bb.call(Tb))
    }
    lb && (Tb._autoSuspend = () => mb > 0 ? Wb.Howler : lb())
  }
};
Object.freeze(modules);
for (const bb in modules) Object.freeze(modules[bb]);