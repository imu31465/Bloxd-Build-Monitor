export const id = 92;
export const ids = [91, 92];
export const modules = {
  36095: (bb, cb, sb) => {
    sb.r(cb), sb.d(cb, {
      countDecodesAs: () => fb,
      decodedAudio: () => Mb
    });
    var kb = sb(4579);
    const Wb = kb.Howler,
      ab = new Map;
    let Tb = 0;
    const Ub = {
        song: 0,
        sheet: 0
      },
      Ib = new WeakMap,
      Hb = new WeakSet;

    function fb(bb, cb) {
      return Ib.set(bb, cb), bb
    }

    function Mb() {
      return {
        bytes: Tb,
        songsDecoded: Ub.song,
        sheetsDecoded: Ub.sheet
      }
    }

    function Xb(bb) {
      if (Hb.has(bb)) return;
      Hb.add(bb);
      const cb = 1 === bb.decodeAudioData.length,
        sb = bb.decodeAudioData.bind(bb);
      bb.decodeAudioData = (bb, kb, Hb) => {
        const fb = bb => {
          const cb = Wb._howls.filter((bb => "loaded" !== bb._state));
          try {
            null === kb || void 0 === kb || kb(bb)
          } finally {
            const sb = cb.find((bb => "loaded" === bb._state));
            void 0 !== sb && "string" === typeof sb._src && function(bb, cb, sb) {
              var kb;
              Tb += sb - (null !== (kb = ab.get(cb)) && void 0 !== kb ? kb : 0), ab.set(cb, sb);
              const Wb = Ib.get(bb);
              void 0 !== Wb && Ub[Wb]++
            }(sb, sb._src, bb.length * bb.numberOfChannels * Float32Array.BYTES_PER_ELEMENT)
          }
          return bb
        };
        if (!cb) return sb(bb, fb, Hb);
        const Mb = sb(bb).then(fb);
        return Mb.catch((bb => {
          null === Hb || void 0 === Hb || Hb(bb)
        })), Mb
      }
    }
    const nb = kb.Howl.prototype,
      mb = nb.init;
    nb.init = function(bb) {
      return kb.Howler.volume(), Wb.ctx && Xb(Wb.ctx), mb.call(this, bb)
    };
    const lb = nb.unload;
    nb.unload = function() {
      const bb = this._src,
        cb = lb.call(this);
      if ("string" !== typeof bb) return cb;
      const sb = ab.get(bb);
      return void 0 !== sb && function(bb) {
        return !Wb._howls.some((cb => cb._src === bb || "string" === typeof cb._src && bb.indexOf(cb._src) >= 0))
      }(bb) && (ab.delete(bb), Tb -= sb), cb
    }
  },
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