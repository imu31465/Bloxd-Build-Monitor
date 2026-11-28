export const id = 111;
export const ids = [110, 111];
export const modules = {
  37641: (bb, wb, Mb) => {
    Mb.r(wb), Mb.d(wb, {
      countDecodesAs: () => Ob,
      decodedAudio: () => Ub
    });
    var eb = Mb(4220),
      Hb = Mb(5766);
    const pb = Hb.Howler,
      Vb = new Map;
    let gb = 0;
    const lb = {
        song: 0,
        sound: 0
      },
      Lb = new WeakMap,
      Ib = new WeakSet;

    function Ob(bb, wb) {
      return Lb.set(bb, wb), bb
    }

    function Ub() {
      return {
        bytes: gb,
        songsDecoded: lb.song,
        soundsDecoded: lb.sound
      }
    }

    function tb(bb) {
      if (Ib.has(bb)) return;
      Ib.add(bb);
      const wb = 1 === bb.decodeAudioData.length,
        Mb = bb.decodeAudioData.bind(bb);
      bb.decodeAudioData = (bb, eb, Hb) => {
        const Ib = bb => {
          const wb = pb._howls.filter((bb => "loaded" !== bb._state));
          try {
            null === eb || void 0 === eb || eb(bb)
          } finally {
            const Mb = wb.find((bb => "loaded" === bb._state));
            void 0 !== Mb && "string" === typeof Mb._src && function(bb, wb, Mb) {
              var eb;
              gb += Mb - (null !== (eb = Vb.get(wb)) && void 0 !== eb ? eb : 0), Vb.set(wb, Mb);
              const Hb = Lb.get(bb);
              void 0 !== Hb && lb[Hb]++
            }(Mb, Mb._src, bb.length * bb.numberOfChannels * Float32Array.BYTES_PER_ELEMENT)
          }
          return bb
        };
        if (!wb) return Mb(bb, Ib, Hb);
        const Ob = Mb(bb).then(Ib);
        return Ob.catch((bb => {
          null === Hb || void 0 === Hb || Hb(bb)
        })), Ob
      }
    }(0, eb.e)(Ub);
    const Cb = Hb.Howl.prototype,
      Eb = Cb.init;
    Cb.init = function(bb) {
      return Hb.Howler.volume(), pb.ctx && tb(pb.ctx), Eb.call(this, bb)
    };
    const Fb = Cb.unload;
    Cb.unload = function() {
      const bb = this._src,
        wb = Fb.call(this);
      if ("string" !== typeof bb) return wb;
      const Mb = Vb.get(bb);
      return void 0 !== Mb && function(bb) {
        return !pb._howls.some((wb => wb._src === bb || "string" === typeof wb._src && bb.indexOf(wb._src) >= 0))
      }(bb) && (Vb.delete(bb), gb -= Mb), wb
    }
  },
  5766: (bb, wb, Mb) => {
    Mb.r(wb), Mb.d(wb, {
      Howl: () => Hb.Howl,
      Howler: () => Hb.Howler,
      musicOutput: () => Fb,
      readyAudioContext: () => Bb
    });
    var eb, Hb = Mb(5768),
      pb = Mb(4835),
      Vb = Mb(5505);
    const gb = Hb.Howler;

    function lb() {
      var bb, wb;
      if (gb.ctx || !gb.usingWebAudio || "undefined" === typeof AudioContext || !(0, Vb.h)()) return;
      const Mb = navigator.audioSession;
      let eb;
      "auto" === (null === Mb || void 0 === Mb ? void 0 : Mb.type) && (Mb.type = "ambient");
      try {
        eb = new AudioContext({
          sampleRate: 44100
        })
      } catch {
        return
      }
      const Hb = eb.createGain();
      Hb.gain.setValueAtTime(gb._muted ? 0 : null !== (bb = gb._volume) && void 0 !== bb ? bb : 1, eb.currentTime), Hb.connect(eb.destination), gb.ctx = eb, gb.masterGain = Hb, null === (wb = gb._setup) || void 0 === wb || wb.call(gb)
    }
    gb._mobileUnloaded = !0;
    const Lb = gb.volume.bind(Hb.Howler);
    gb.volume = function() {
      return lb(), Lb(...arguments)
    };
    const Ib = gb.mute.bind(Hb.Howler);
    gb.mute = bb => (lb(), Ib(bb));
    const Ob = Hb.Howl.prototype,
      Ub = Ob.init;

    function tb() {
      for (; gb._html5AudioPool.length < gb.html5PoolSize;) {
        const bb = new Audio;
        bb._unlocked = !0, gb._releaseHtml5Audio(bb)
      }
      for (const wb of gb._howls)
        if (!wb._webAudio)
          for (const Mb of wb._getSoundIds()) {
            var bb;
            const eb = null === (bb = wb._soundById(Mb)) || void 0 === bb ? void 0 : bb._node;
            eb && !eb._unlocked && (eb._unlocked = !0, eb.load())
          }
    }
    Ob.init = function(bb) {
      return lb(), Ub.call(this, bb)
    }, (0, Vb.h)() && (gb._unlockAudio = () => {
      const bb = gb.ctx;
      if (gb._audioUnlocked || !bb) return;
      gb.autoUnlock = !1;
      const wb = bb.createBuffer(1, 1, 22050);
      gb._scratchBuffer = wb;
      const Mb = new AbortController;
      let eb = "afterPaint";
      const Hb = () => {
          var eb;
          if (gb._audioUnlocked) return;
          null === (eb = gb._autoResume) || void 0 === eb || eb.call(gb);
          const Hb = bb.createBufferSource();
          Hb.buffer = wb, Hb.connect(bb.destination), Hb.start(0), bb.resume().catch((() => {})), Hb.onended = () => {
            Hb.disconnect(0), gb._audioUnlocked = !0, Mb.abort();
            for (const bb of gb._howls) bb._emit("unlock")
          }
        },
        lb = () => {
          tb(), Hb()
        },
        Lb = wb => {
          if (tb(), "inTap" === eb) {
            if ("running" === bb.state) return;
            console.warn("A click's resume after its frame left Howler's context suspended, so this click resumes it"), Hb()
          } else "afterPaint" === eb && (eb = "queued", (0, pb.b)(wb.timeStamp, (() => {
            eb = "inTap", Hb()
          })))
        };
      for (const pb of ["touchstart", "touchend"]) document.addEventListener(pb, lb, {
        capture: !0,
        signal: Mb.signal
      });
      for (const pb of Vb.d) document.addEventListener(pb, Lb, {
        capture: !0,
        signal: Mb.signal
      })
    });
    let Cb = 0;
    const Eb = null === (eb = gb._autoSuspend) || void 0 === eb ? void 0 : eb.bind(Hb.Howler);

    function Fb() {
      Bb();
      const {
        ctx: bb,
        masterGain: wb
      } = gb;
      return bb && wb ? {
        ctx: bb,
        destination: wb,
        holdAwake: bb => {
          var wb, Mb;
          (Cb += bb ? 1 : -1, bb) ? null === (wb = gb._autoResume) || void 0 === wb || wb.call(gb): null === (Mb = gb._autoSuspend) || void 0 === Mb || Mb.call(gb)
        },
        wake: () => {
          var wb;
          "running" !== bb.state && (null === (wb = gb._autoResume) || void 0 === wb || wb.call(gb), bb.resume().catch((() => {})))
        }
      } : null
    }

    function Bb() {
      var bb;
      (gb.volume(), gb.ctx && gb.autoUnlock) && (null === (bb = gb._unlockAudio) || void 0 === bb || bb.call(gb))
    }
    Eb && (gb._autoSuspend = () => Cb > 0 ? Hb.Howler : Eb())
  }
};
Object.freeze(modules);
for (const bb in modules) Object.freeze(modules[bb]);