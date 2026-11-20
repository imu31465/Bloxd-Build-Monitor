export const id = 93;
export const ids = [92, 93];
export const modules = {
  35980: (vv, zv, Pv) => {
    Pv.r(zv), Pv.d(zv, {
      countDecodesAs: () => Tv,
      decodedAudio: () => Wv
    });
    var hv = Pv(35983),
      Sv = Pv(4603);
    const ev = Sv.Howler,
      gv = new Map;
    let pv = 0;
    const dv = {
        song: 0,
        sheet: 0
      },
      Nv = new WeakMap,
      lv = new WeakSet;

    function Tv(vv, zv) {
      return Nv.set(vv, zv), vv
    }

    function Wv() {
      return {
        bytes: pv,
        songsDecoded: dv.song,
        sheetsDecoded: dv.sheet
      }
    }

    function wv(vv) {
      if (lv.has(vv)) return;
      lv.add(vv);
      const zv = 1 === vv.decodeAudioData.length,
        Pv = vv.decodeAudioData.bind(vv);
      vv.decodeAudioData = (vv, hv, Sv) => {
        const lv = vv => {
          const zv = ev._howls.filter((vv => "loaded" !== vv._state));
          try {
            null === hv || void 0 === hv || hv(vv)
          } finally {
            const Pv = zv.find((vv => "loaded" === vv._state));
            void 0 !== Pv && "string" === typeof Pv._src && function(vv, zv, Pv) {
              var hv;
              pv += Pv - (null !== (hv = gv.get(zv)) && void 0 !== hv ? hv : 0), gv.set(zv, Pv);
              const Sv = Nv.get(vv);
              void 0 !== Sv && dv[Sv]++
            }(Pv, Pv._src, vv.length * vv.numberOfChannels * Float32Array.BYTES_PER_ELEMENT)
          }
          return vv
        };
        if (!zv) return Pv(vv, lv, Sv);
        const Tv = Pv(vv).then(lv);
        return Tv.catch((vv => {
          null === Sv || void 0 === Sv || Sv(vv)
        })), Tv
      }
    }(0, hv.e)(Wv);
    const av = Sv.Howl.prototype,
      sv = av.init;
    av.init = function(vv) {
      return Sv.Howler.volume(), ev.ctx && wv(ev.ctx), sv.call(this, vv)
    };
    const Cv = av.unload;
    av.unload = function() {
      const vv = this._src,
        zv = Cv.call(this);
      if ("string" !== typeof vv) return zv;
      const Pv = gv.get(vv);
      return void 0 !== Pv && function(vv) {
        return !ev._howls.some((zv => zv._src === vv || "string" === typeof zv._src && vv.indexOf(zv._src) >= 0))
      }(vv) && (gv.delete(vv), pv -= Pv), zv
    }
  },
  35983: (vv, zv, Pv) => {
    Pv.d(zv, {
      c: () => ev,
      e: () => Sv
    });
    let hv = null;

    function Sv(vv) {
      hv = vv
    }

    function ev() {
      return null === hv ? null : hv()
    }
  },
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