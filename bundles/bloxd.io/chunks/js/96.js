export const id = 96;
export const ids = [95, 96];
export const modules = {
  36654: (pp, ip, cp) => {
    cp.r(ip), cp.d(ip, {
      countDecodesAs: () => Ap,
      decodedAudio: () => Pp
    });
    var Op = cp(3363),
      op = cp(4974);
    const Ip = op.Howler,
      Sp = new Map;
    let xp = 0;
    const Lp = {
        song: 0,
        sheet: 0
      },
      Yp = new WeakMap,
      Dp = new WeakSet;

    function Ap(pp, ip) {
      return Yp.set(pp, ip), pp
    }

    function Pp() {
      return {
        bytes: xp,
        songsDecoded: Lp.song,
        sheetsDecoded: Lp.sheet
      }
    }

    function Wp(pp) {
      if (Dp.has(pp)) return;
      Dp.add(pp);
      const ip = 1 === pp.decodeAudioData.length,
        cp = pp.decodeAudioData.bind(pp);
      pp.decodeAudioData = (pp, Op, op) => {
        const Dp = pp => {
          const ip = Ip._howls.filter((pp => "loaded" !== pp._state));
          try {
            null === Op || void 0 === Op || Op(pp)
          } finally {
            const cp = ip.find((pp => "loaded" === pp._state));
            void 0 !== cp && "string" === typeof cp._src && function(pp, ip, cp) {
              var Op;
              xp += cp - (null !== (Op = Sp.get(ip)) && void 0 !== Op ? Op : 0), Sp.set(ip, cp);
              const op = Yp.get(pp);
              void 0 !== op && Lp[op]++
            }(cp, cp._src, pp.length * pp.numberOfChannels * Float32Array.BYTES_PER_ELEMENT)
          }
          return pp
        };
        if (!ip) return cp(pp, Dp, op);
        const Ap = cp(pp).then(Dp);
        return Ap.catch((pp => {
          null === op || void 0 === op || op(pp)
        })), Ap
      }
    }(0, Op.h)(Pp);
    const yp = op.Howl.prototype,
      Up = yp.init;
    yp.init = function(pp) {
      return op.Howler.volume(), Ip.ctx && Wp(Ip.ctx), Up.call(this, pp)
    };
    const wp = yp.unload;
    yp.unload = function() {
      const pp = this._src,
        ip = wp.call(this);
      if ("string" !== typeof pp) return ip;
      const cp = Sp.get(pp);
      return void 0 !== cp && function(pp) {
        return !Ip._howls.some((ip => ip._src === pp || "string" === typeof ip._src && pp.indexOf(ip._src) >= 0))
      }(pp) && (Sp.delete(pp), xp -= cp), ip
    }
  },
  4974: (pp, ip, cp) => {
    cp.r(ip), cp.d(ip, {
      Howl: () => op.Howl,
      Howler: () => op.Howler,
      musicOutput: () => wp,
      readyAudioContext: () => vp
    });
    var Op, op = cp(4977),
      Ip = cp(3546),
      Sp = cp(4743);
    const xp = op.Howler;

    function Lp() {
      var pp, ip;
      if (xp.ctx || !xp.usingWebAudio || "undefined" === typeof AudioContext || !(0, Sp.f)()) return;
      const cp = navigator.audioSession;
      let Op;
      "auto" === (null === cp || void 0 === cp ? void 0 : cp.type) && (cp.type = "ambient");
      try {
        Op = new AudioContext({
          sampleRate: 44100
        })
      } catch {
        return
      }
      const op = Op.createGain();
      op.gain.setValueAtTime(xp._muted ? 0 : null !== (pp = xp._volume) && void 0 !== pp ? pp : 1, Op.currentTime), op.connect(Op.destination), xp.ctx = Op, xp.masterGain = op, null === (ip = xp._setup) || void 0 === ip || ip.call(xp)
    }
    xp._mobileUnloaded = !0;
    const Yp = xp.volume.bind(op.Howler);
    xp.volume = function() {
      return Lp(), Yp(...arguments)
    };
    const Dp = xp.mute.bind(op.Howler);
    xp.mute = pp => (Lp(), Dp(pp));
    const Ap = op.Howl.prototype,
      Pp = Ap.init;

    function Wp() {
      for (; xp._html5AudioPool.length < xp.html5PoolSize;) {
        const pp = new Audio;
        pp._unlocked = !0, xp._releaseHtml5Audio(pp)
      }
      for (const ip of xp._howls)
        if (!ip._webAudio)
          for (const cp of ip._getSoundIds()) {
            var pp;
            const Op = null === (pp = ip._soundById(cp)) || void 0 === pp ? void 0 : pp._node;
            Op && !Op._unlocked && (Op._unlocked = !0, Op.load())
          }
    }
    Ap.init = function(pp) {
      return Lp(), Pp.call(this, pp)
    }, (0, Sp.f)() && (xp._unlockAudio = () => {
      const pp = xp.ctx;
      if (xp._audioUnlocked || !pp) return;
      xp.autoUnlock = !1;
      const ip = pp.createBuffer(1, 1, 22050);
      xp._scratchBuffer = ip;
      const cp = new AbortController;
      let Op = "afterPaint";
      const op = () => {
          var Op;
          if (xp._audioUnlocked) return;
          null === (Op = xp._autoResume) || void 0 === Op || Op.call(xp);
          const op = pp.createBufferSource();
          op.buffer = ip, op.connect(pp.destination), op.start(0), pp.resume().catch((() => {})), op.onended = () => {
            op.disconnect(0), xp._audioUnlocked = !0, cp.abort();
            for (const pp of xp._howls) pp._emit("unlock")
          }
        },
        Lp = () => {
          Wp(), op()
        },
        Yp = ip => {
          if (Wp(), "inTap" === Op) {
            if ("running" === pp.state) return;
            console.warn("A click's resume after its frame left Howler's context suspended, so this click resumes it"), op()
          } else "afterPaint" === Op && (Op = "queued", (0, Ip.e)(ip.timeStamp, (() => {
            Op = "inTap", op()
          })))
        };
      for (const Ip of ["touchstart", "touchend"]) document.addEventListener(Ip, Lp, {
        capture: !0,
        signal: cp.signal
      });
      for (const Ip of Sp.c) document.addEventListener(Ip, Yp, {
        capture: !0,
        signal: cp.signal
      })
    });
    let yp = 0;
    const Up = null === (Op = xp._autoSuspend) || void 0 === Op ? void 0 : Op.bind(op.Howler);

    function wp() {
      vp();
      const {
        ctx: pp,
        masterGain: ip
      } = xp;
      return pp && ip ? {
        ctx: pp,
        destination: ip,
        holdAwake: pp => {
          var ip, cp;
          (yp += pp ? 1 : -1, pp) ? null === (ip = xp._autoResume) || void 0 === ip || ip.call(xp): null === (cp = xp._autoSuspend) || void 0 === cp || cp.call(xp)
        },
        wake: () => {
          var ip;
          "running" !== pp.state && (null === (ip = xp._autoResume) || void 0 === ip || ip.call(xp), pp.resume().catch((() => {})))
        }
      } : null
    }

    function vp() {
      var pp;
      (xp.volume(), xp.ctx && xp.autoUnlock) && (null === (pp = xp._unlockAudio) || void 0 === pp || pp.call(xp))
    }
    Up && (xp._autoSuspend = () => yp > 0 ? op.Howler : Up())
  }
};
Object.freeze(modules);
for (const pp in modules) Object.freeze(modules[pp]);