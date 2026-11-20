export const id = 92;
export const ids = [92];
export const modules = {
  4603: (vv, zv, Pv) => {
    Pv.r(zv), Pv.d(zv, {
      Howl: () => Sv.Howl,
      Howler: () => Sv.Howler,
      musicOutput: () => av,
      readyAudioContext: () => sv
    });
    var hv, Sv = Pv(4611),
      ev = Pv(4411);
    const gv = Sv.Howler;

    function pv() {
      var vv, zv;
      if (gv.ctx || !gv.usingWebAudio || "undefined" === typeof AudioContext || !(0, ev.f)()) return;
      const Pv = navigator.audioSession;
      let hv;
      "auto" === (null === Pv || void 0 === Pv ? void 0 : Pv.type) && (Pv.type = "ambient");
      try {
        hv = new AudioContext({
          sampleRate: 44100
        })
      } catch {
        return
      }
      const Sv = hv.createGain();
      Sv.gain.setValueAtTime(gv._muted ? 0 : null !== (vv = gv._volume) && void 0 !== vv ? vv : 1, hv.currentTime), Sv.connect(hv.destination), gv.ctx = hv, gv.masterGain = Sv, null === (zv = gv._setup) || void 0 === zv || zv.call(gv)
    }
    gv._mobileUnloaded = !0;
    const dv = gv.volume.bind(Sv.Howler);
    gv.volume = function() {
      return pv(), dv(...arguments)
    };
    const Nv = gv.mute.bind(Sv.Howler);
    gv.mute = vv => (pv(), Nv(vv));
    const lv = Sv.Howl.prototype,
      Tv = lv.init;
    lv.init = function(vv) {
      return pv(), Tv.call(this, vv)
    };
    let Wv = 0;
    const wv = null === (hv = gv._autoSuspend) || void 0 === hv ? void 0 : hv.bind(Sv.Howler);

    function av() {
      sv();
      const {
        ctx: vv,
        masterGain: zv
      } = gv;
      return vv && zv ? {
        ctx: vv,
        destination: zv,
        holdAwake: vv => {
          var zv, Pv;
          (Wv += vv ? 1 : -1, vv) ? null === (zv = gv._autoResume) || void 0 === zv || zv.call(gv): null === (Pv = gv._autoSuspend) || void 0 === Pv || Pv.call(gv)
        },
        wake: () => {
          var zv;
          "running" !== vv.state && (null === (zv = gv._autoResume) || void 0 === zv || zv.call(gv), vv.resume().catch((() => {})))
        }
      } : null
    }

    function sv() {
      var vv;
      (gv.volume(), gv.ctx && gv.autoUnlock) && (null === (vv = gv._unlockAudio) || void 0 === vv || vv.call(gv))
    }
    wv && (gv._autoSuspend = () => Wv > 0 ? Sv.Howler : wv())
  }
};
Object.freeze(modules);
for (const vv in modules) Object.freeze(modules[vv]);