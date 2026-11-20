export const id = 92;
export const ids = [91, 92];
export const modules = {
  35880: (bb, ab, Ub) => {
    Ub.r(ab), Ub.d(ab, {
      countDecodesAs: () => vb,
      decodedAudio: () => Lb
    });
    var Ab = Ub(4546);
    const Mb = Ab.Howler,
      Tb = new Map;
    let Eb = 0;
    const Yb = {
        song: 0,
        sheet: 0
      },
      Bb = new WeakMap,
      eb = new WeakSet;

    function vb(bb, ab) {
      return Bb.set(bb, ab), bb
    }

    function Lb() {
      return {
        bytes: Eb,
        songsDecoded: Yb.song,
        sheetsDecoded: Yb.sheet
      }
    }

    function Pb(bb) {
      if (eb.has(bb)) return;
      eb.add(bb);
      const ab = 1 === bb.decodeAudioData.length,
        Ub = bb.decodeAudioData.bind(bb);
      bb.decodeAudioData = (bb, Ab, eb) => {
        const vb = bb => {
          const ab = Mb._howls.filter((bb => "loaded" !== bb._state));
          try {
            null === Ab || void 0 === Ab || Ab(bb)
          } finally {
            const Ub = ab.find((bb => "loaded" === bb._state));
            void 0 !== Ub && "string" === typeof Ub._src && function(bb, ab, Ub) {
              var Ab;
              Eb += Ub - (null !== (Ab = Tb.get(ab)) && void 0 !== Ab ? Ab : 0), Tb.set(ab, Ub);
              const Mb = Bb.get(bb);
              void 0 !== Mb && Yb[Mb]++
            }(Ub, Ub._src, bb.length * bb.numberOfChannels * Float32Array.BYTES_PER_ELEMENT)
          }
          return bb
        };
        if (!ab) return Ub(bb, vb, eb);
        const Lb = Ub(bb).then(vb);
        return Lb.catch((bb => {
          null === eb || void 0 === eb || eb(bb)
        })), Lb
      }
    }
    const Xb = Ab.Howl.prototype,
      jb = Xb.init;
    Xb.init = function(bb) {
      return Ab.Howler.volume(), Mb.ctx && Pb(Mb.ctx), jb.call(this, bb)
    };
    const Rb = Xb.unload;
    Xb.unload = function() {
      const bb = this._src,
        ab = Rb.call(this);
      if ("string" !== typeof bb) return ab;
      const Ub = Tb.get(bb);
      return void 0 !== Ub && function(bb) {
        return !Mb._howls.some((ab => ab._src === bb || "string" === typeof ab._src && bb.indexOf(ab._src) >= 0))
      }(bb) && (Tb.delete(bb), Eb -= Ub), ab
    }
  },
  4546: (bb, ab, Ub) => {
    Ub.r(ab), Ub.d(ab, {
      Howl: () => Mb.Howl,
      Howler: () => Mb.Howler,
      iosAudio: () => Bb,
      musicOutput: () => kb,
      readyAudioContext: () => yb
    });
    var Ab, Mb = Ub(4551),
      Tb = Ub(101);
    const Eb = Mb.Howler;
    let Yb;

    function Bb() {
      return Yb ??= "ios" === (0, Tb.getOperatingSystem)(), Yb
    }

    function eb() {
      var bb, ab;
      if (Eb.ctx || !Eb.usingWebAudio || "undefined" === typeof AudioContext || !Bb()) return;
      const Ub = navigator.audioSession;
      let Ab;
      "auto" === (null === Ub || void 0 === Ub ? void 0 : Ub.type) && (Ub.type = "ambient");
      try {
        Ab = new AudioContext({
          sampleRate: 44100
        })
      } catch {
        return
      }
      const Mb = Ab.createGain();
      Mb.gain.setValueAtTime(Eb._muted ? 0 : null !== (bb = Eb._volume) && void 0 !== bb ? bb : 1, Ab.currentTime), Mb.connect(Ab.destination), Eb.ctx = Ab, Eb.masterGain = Mb, null === (ab = Eb._setup) || void 0 === ab || ab.call(Eb)
    }
    Eb._mobileUnloaded = !0;
    const vb = Eb.volume.bind(Mb.Howler);
    Eb.volume = function() {
      return eb(), vb(...arguments)
    };
    const Lb = Eb.mute.bind(Mb.Howler);
    Eb.mute = bb => (eb(), Lb(bb));
    const Pb = Mb.Howl.prototype,
      Xb = Pb.init;
    Pb.init = function(bb) {
      return eb(), Xb.call(this, bb)
    };
    let jb = 0;
    const Rb = null === (Ab = Eb._autoSuspend) || void 0 === Ab ? void 0 : Ab.bind(Mb.Howler);

    function kb() {
      yb();
      const {
        ctx: bb,
        masterGain: ab
      } = Eb;
      return bb && ab ? {
        ctx: bb,
        destination: ab,
        holdAwake: bb => {
          var ab, Ub;
          (jb += bb ? 1 : -1, bb) ? null === (ab = Eb._autoResume) || void 0 === ab || ab.call(Eb): null === (Ub = Eb._autoSuspend) || void 0 === Ub || Ub.call(Eb)
        },
        wake: () => {
          var ab;
          "running" !== bb.state && (null === (ab = Eb._autoResume) || void 0 === ab || ab.call(Eb), bb.resume().catch((() => {})))
        }
      } : null
    }

    function yb() {
      var bb;
      (Eb.volume(), Eb.ctx && Eb.autoUnlock) && (null === (bb = Eb._unlockAudio) || void 0 === bb || bb.call(Eb))
    }
    Rb && (Eb._autoSuspend = () => jb > 0 ? Mb.Howler : Rb())
  }
};
Object.freeze(modules);
for (const bb in modules) Object.freeze(modules[bb]);