export const id = 93;
export const ids = [92, 93];
export const modules = {
  36044: (bb, ub, hb) => {
    hb.r(ub), hb.d(ub, {
      countDecodesAs: () => Hb,
      decodedAudio: () => wb
    });
    var Bb = hb(36051),
      Ob = hb(4626);
    const Gb = Ob.Howler,
      Ub = new Map;
    let Lb = 0;
    const Yb = {
        song: 0,
        sheet: 0
      },
      Sb = new WeakMap,
      ab = new WeakSet;

    function Hb(bb, ub) {
      return Sb.set(bb, ub), bb
    }

    function wb() {
      return {
        bytes: Lb,
        songsDecoded: Yb.song,
        sheetsDecoded: Yb.sheet
      }
    }

    function Zb(bb) {
      if (ab.has(bb)) return;
      ab.add(bb);
      const ub = 1 === bb.decodeAudioData.length,
        hb = bb.decodeAudioData.bind(bb);
      bb.decodeAudioData = (bb, Bb, Ob) => {
        const ab = bb => {
          const ub = Gb._howls.filter((bb => "loaded" !== bb._state));
          try {
            null === Bb || void 0 === Bb || Bb(bb)
          } finally {
            const hb = ub.find((bb => "loaded" === bb._state));
            void 0 !== hb && "string" === typeof hb._src && function(bb, ub, hb) {
              var Bb;
              Lb += hb - (null !== (Bb = Ub.get(ub)) && void 0 !== Bb ? Bb : 0), Ub.set(ub, hb);
              const Ob = Sb.get(bb);
              void 0 !== Ob && Yb[Ob]++
            }(hb, hb._src, bb.length * bb.numberOfChannels * Float32Array.BYTES_PER_ELEMENT)
          }
          return bb
        };
        if (!ub) return hb(bb, ab, Ob);
        const Hb = hb(bb).then(ab);
        return Hb.catch((bb => {
          null === Ob || void 0 === Ob || Ob(bb)
        })), Hb
      }
    }(0, Bb.f)(wb);
    const Xb = Ob.Howl.prototype,
      pb = Xb.init;
    Xb.init = function(bb) {
      return Ob.Howler.volume(), Gb.ctx && Zb(Gb.ctx), pb.call(this, bb)
    };
    const ob = Xb.unload;
    Xb.unload = function() {
      const bb = this._src,
        ub = ob.call(this);
      if ("string" !== typeof bb) return ub;
      const hb = Ub.get(bb);
      return void 0 !== hb && function(bb) {
        return !Gb._howls.some((ub => ub._src === bb || "string" === typeof ub._src && bb.indexOf(ub._src) >= 0))
      }(bb) && (Ub.delete(bb), Lb -= hb), ub
    }
  },
  36051: (bb, ub, hb) => {
    hb.d(ub, {
      b: () => Gb,
      f: () => Ob
    });
    let Bb = null;

    function Ob(bb) {
      Bb = bb
    }

    function Gb() {
      return null === Bb ? null : Bb()
    }
  },
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