export const id = 94;
export const ids = [93, 94];
export const modules = {
  36448: (SS, HS, gS) => {
    gS.r(HS), gS.d(HS, {
      countDecodesAs: () => fS,
      decodedAudio: () => kS
    });
    var tS = gS(3408),
      bS = gS(5005);
    const XS = bS.Howler,
      xS = new Map;
    let NS = 0;
    const qS = {
        song: 0,
        sheet: 0
      },
      uS = new WeakMap,
      IS = new WeakSet;

    function fS(SS, HS) {
      return uS.set(SS, HS), SS
    }

    function kS() {
      return {
        bytes: NS,
        songsDecoded: qS.song,
        sheetsDecoded: qS.sheet
      }
    }

    function aS(SS) {
      if (IS.has(SS)) return;
      IS.add(SS);
      const HS = 1 === SS.decodeAudioData.length,
        gS = SS.decodeAudioData.bind(SS);
      SS.decodeAudioData = (SS, tS, bS) => {
        const IS = SS => {
          const HS = XS._howls.filter((SS => "loaded" !== SS._state));
          try {
            null === tS || void 0 === tS || tS(SS)
          } finally {
            const gS = HS.find((SS => "loaded" === SS._state));
            void 0 !== gS && "string" === typeof gS._src && function(SS, HS, gS) {
              var tS;
              NS += gS - (null !== (tS = xS.get(HS)) && void 0 !== tS ? tS : 0), xS.set(HS, gS);
              const bS = uS.get(SS);
              void 0 !== bS && qS[bS]++
            }(gS, gS._src, SS.length * SS.numberOfChannels * Float32Array.BYTES_PER_ELEMENT)
          }
          return SS
        };
        if (!HS) return gS(SS, IS, bS);
        const fS = gS(SS).then(IS);
        return fS.catch((SS => {
          null === bS || void 0 === bS || bS(SS)
        })), fS
      }
    }(0, tS.f)(kS);
    const KS = bS.Howl.prototype,
      jS = KS.init;
    KS.init = function(SS) {
      return bS.Howler.volume(), XS.ctx && aS(XS.ctx), jS.call(this, SS)
    };
    const GS = KS.unload;
    KS.unload = function() {
      const SS = this._src,
        HS = GS.call(this);
      if ("string" !== typeof SS) return HS;
      const gS = xS.get(SS);
      return void 0 !== gS && function(SS) {
        return !XS._howls.some((HS => HS._src === SS || "string" === typeof HS._src && SS.indexOf(HS._src) >= 0))
      }(SS) && (xS.delete(SS), NS -= gS), HS
    }
  },
  5005: (SS, HS, gS) => {
    gS.r(HS), gS.d(HS, {
      Howl: () => bS.Howl,
      Howler: () => bS.Howler,
      musicOutput: () => GS,
      readyAudioContext: () => CS
    });
    var tS, bS = gS(5011),
      XS = gS(3577),
      xS = gS(4775);
    const NS = bS.Howler;

    function qS() {
      var SS, HS;
      if (NS.ctx || !NS.usingWebAudio || "undefined" === typeof AudioContext || !(0, xS.k)()) return;
      const gS = navigator.audioSession;
      let tS;
      "auto" === (null === gS || void 0 === gS ? void 0 : gS.type) && (gS.type = "ambient");
      try {
        tS = new AudioContext({
          sampleRate: 44100
        })
      } catch {
        return
      }
      const bS = tS.createGain();
      bS.gain.setValueAtTime(NS._muted ? 0 : null !== (SS = NS._volume) && void 0 !== SS ? SS : 1, tS.currentTime), bS.connect(tS.destination), NS.ctx = tS, NS.masterGain = bS, null === (HS = NS._setup) || void 0 === HS || HS.call(NS)
    }
    NS._mobileUnloaded = !0;
    const uS = NS.volume.bind(bS.Howler);
    NS.volume = function() {
      return qS(), uS(...arguments)
    };
    const IS = NS.mute.bind(bS.Howler);
    NS.mute = SS => (qS(), IS(SS));
    const fS = bS.Howl.prototype,
      kS = fS.init;

    function aS() {
      for (; NS._html5AudioPool.length < NS.html5PoolSize;) {
        const SS = new Audio;
        SS._unlocked = !0, NS._releaseHtml5Audio(SS)
      }
      for (const HS of NS._howls)
        if (!HS._webAudio)
          for (const gS of HS._getSoundIds()) {
            var SS;
            const tS = null === (SS = HS._soundById(gS)) || void 0 === SS ? void 0 : SS._node;
            tS && !tS._unlocked && (tS._unlocked = !0, tS.load())
          }
    }
    fS.init = function(SS) {
      return qS(), kS.call(this, SS)
    }, (0, xS.k)() && (NS._unlockAudio = () => {
      const SS = NS.ctx;
      if (NS._audioUnlocked || !SS) return;
      NS.autoUnlock = !1;
      const HS = SS.createBuffer(1, 1, 22050);
      NS._scratchBuffer = HS;
      const gS = new AbortController;
      let tS = "afterPaint";
      const bS = () => {
          var tS;
          if (NS._audioUnlocked) return;
          null === (tS = NS._autoResume) || void 0 === tS || tS.call(NS);
          const bS = SS.createBufferSource();
          bS.buffer = HS, bS.connect(SS.destination), bS.start(0), SS.resume().catch((() => {})), bS.onended = () => {
            bS.disconnect(0), NS._audioUnlocked = !0, gS.abort();
            for (const SS of NS._howls) SS._emit("unlock")
          }
        },
        qS = () => {
          aS(), bS()
        },
        uS = HS => {
          if (aS(), "inTap" === tS) {
            if ("running" === SS.state) return;
            console.warn("A click's resume after its frame left Howler's context suspended, so this click resumes it"), bS()
          } else "afterPaint" === tS && (tS = "queued", (0, XS.d)(HS.timeStamp, (() => {
            tS = "inTap", bS()
          })))
        };
      for (const XS of ["touchstart", "touchend"]) document.addEventListener(XS, qS, {
        capture: !0,
        signal: gS.signal
      });
      for (const XS of xS.e) document.addEventListener(XS, uS, {
        capture: !0,
        signal: gS.signal
      })
    });
    let KS = 0;
    const jS = null === (tS = NS._autoSuspend) || void 0 === tS ? void 0 : tS.bind(bS.Howler);

    function GS() {
      CS();
      const {
        ctx: SS,
        masterGain: HS
      } = NS;
      return SS && HS ? {
        ctx: SS,
        destination: HS,
        holdAwake: SS => {
          var HS, gS;
          (KS += SS ? 1 : -1, SS) ? null === (HS = NS._autoResume) || void 0 === HS || HS.call(NS): null === (gS = NS._autoSuspend) || void 0 === gS || gS.call(NS)
        },
        wake: () => {
          var HS;
          "running" !== SS.state && (null === (HS = NS._autoResume) || void 0 === HS || HS.call(NS), SS.resume().catch((() => {})))
        }
      } : null
    }

    function CS() {
      var SS;
      (NS.volume(), NS.ctx && NS.autoUnlock) && (null === (SS = NS._unlockAudio) || void 0 === SS || SS.call(NS))
    }
    jS && (NS._autoSuspend = () => KS > 0 ? bS.Howler : jS())
  }
};
Object.freeze(modules);
for (const SS in modules) Object.freeze(modules[SS]);