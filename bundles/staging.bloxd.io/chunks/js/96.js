export const id = 96;
export const ids = [95, 96];
export const modules = {
  36513: (TT, UT, mT) => {
    mT.r(UT), mT.d(UT, {
      countDecodesAs: () => lT,
      decodedAudio: () => LT
    });
    var WT = mT(3375),
      zT = mT(4959);
    const MT = zT.Howler,
      gT = new Map;
    let nT = 0;
    const HT = {
        song: 0,
        sheet: 0
      },
      kT = new WeakMap,
      jT = new WeakSet;

    function lT(TT, UT) {
      return kT.set(TT, UT), TT
    }

    function LT() {
      return {
        bytes: nT,
        songsDecoded: HT.song,
        sheetsDecoded: HT.sheet
      }
    }

    function pT(TT) {
      if (jT.has(TT)) return;
      jT.add(TT);
      const UT = 1 === TT.decodeAudioData.length,
        mT = TT.decodeAudioData.bind(TT);
      TT.decodeAudioData = (TT, WT, zT) => {
        const jT = TT => {
          const UT = MT._howls.filter((TT => "loaded" !== TT._state));
          try {
            null === WT || void 0 === WT || WT(TT)
          } finally {
            const mT = UT.find((TT => "loaded" === TT._state));
            void 0 !== mT && "string" === typeof mT._src && function(TT, UT, mT) {
              var WT;
              nT += mT - (null !== (WT = gT.get(UT)) && void 0 !== WT ? WT : 0), gT.set(UT, mT);
              const zT = kT.get(TT);
              void 0 !== zT && HT[zT]++
            }(mT, mT._src, TT.length * TT.numberOfChannels * Float32Array.BYTES_PER_ELEMENT)
          }
          return TT
        };
        if (!UT) return mT(TT, jT, zT);
        const lT = mT(TT).then(jT);
        return lT.catch((TT => {
          null === zT || void 0 === zT || zT(TT)
        })), lT
      }
    }(0, WT.e)(LT);
    const BT = zT.Howl.prototype,
      ZT = BT.init;
    BT.init = function(TT) {
      return zT.Howler.volume(), MT.ctx && pT(MT.ctx), ZT.call(this, TT)
    };
    const cT = BT.unload;
    BT.unload = function() {
      const TT = this._src,
        UT = cT.call(this);
      if ("string" !== typeof TT) return UT;
      const mT = gT.get(TT);
      return void 0 !== mT && function(TT) {
        return !MT._howls.some((UT => UT._src === TT || "string" === typeof UT._src && TT.indexOf(UT._src) >= 0))
      }(TT) && (gT.delete(TT), nT -= mT), UT
    }
  },
  4959: (TT, UT, mT) => {
    mT.r(UT), mT.d(UT, {
      Howl: () => zT.Howl,
      Howler: () => zT.Howler,
      musicOutput: () => cT,
      readyAudioContext: () => vT
    });
    var WT, zT = mT(4966),
      MT = mT(3536),
      gT = mT(4741);
    const nT = zT.Howler;

    function HT() {
      var TT, UT;
      if (nT.ctx || !nT.usingWebAudio || "undefined" === typeof AudioContext || !(0, gT.j)()) return;
      const mT = navigator.audioSession;
      let WT;
      "auto" === (null === mT || void 0 === mT ? void 0 : mT.type) && (mT.type = "ambient");
      try {
        WT = new AudioContext({
          sampleRate: 44100
        })
      } catch {
        return
      }
      const zT = WT.createGain();
      zT.gain.setValueAtTime(nT._muted ? 0 : null !== (TT = nT._volume) && void 0 !== TT ? TT : 1, WT.currentTime), zT.connect(WT.destination), nT.ctx = WT, nT.masterGain = zT, null === (UT = nT._setup) || void 0 === UT || UT.call(nT)
    }
    nT._mobileUnloaded = !0;
    const kT = nT.volume.bind(zT.Howler);
    nT.volume = function() {
      return HT(), kT(...arguments)
    };
    const jT = nT.mute.bind(zT.Howler);
    nT.mute = TT => (HT(), jT(TT));
    const lT = zT.Howl.prototype,
      LT = lT.init;

    function pT() {
      for (; nT._html5AudioPool.length < nT.html5PoolSize;) {
        const TT = new Audio;
        TT._unlocked = !0, nT._releaseHtml5Audio(TT)
      }
      for (const UT of nT._howls)
        if (!UT._webAudio)
          for (const mT of UT._getSoundIds()) {
            var TT;
            const WT = null === (TT = UT._soundById(mT)) || void 0 === TT ? void 0 : TT._node;
            WT && !WT._unlocked && (WT._unlocked = !0, WT.load())
          }
    }
    lT.init = function(TT) {
      return HT(), LT.call(this, TT)
    }, (0, gT.j)() && (nT._unlockAudio = () => {
      const TT = nT.ctx;
      if (nT._audioUnlocked || !TT) return;
      nT.autoUnlock = !1;
      const UT = TT.createBuffer(1, 1, 22050);
      nT._scratchBuffer = UT;
      const mT = new AbortController;
      let WT = "afterPaint";
      const zT = () => {
          var WT;
          if (nT._audioUnlocked) return;
          null === (WT = nT._autoResume) || void 0 === WT || WT.call(nT);
          const zT = TT.createBufferSource();
          zT.buffer = UT, zT.connect(TT.destination), zT.start(0), TT.resume().catch((() => {})), zT.onended = () => {
            zT.disconnect(0), nT._audioUnlocked = !0, mT.abort();
            for (const TT of nT._howls) TT._emit("unlock")
          }
        },
        HT = () => {
          pT(), zT()
        },
        kT = UT => {
          if (pT(), "inTap" === WT) {
            if ("running" === TT.state) return;
            console.warn("A click's resume after its frame left Howler's context suspended, so this click resumes it"), zT()
          } else "afterPaint" === WT && (WT = "queued", (0, MT.e)(UT.timeStamp, (() => {
            WT = "inTap", zT()
          })))
        };
      for (const MT of ["touchstart", "touchend"]) document.addEventListener(MT, HT, {
        capture: !0,
        signal: mT.signal
      });
      for (const MT of gT.c) document.addEventListener(MT, kT, {
        capture: !0,
        signal: mT.signal
      })
    });
    let BT = 0;
    const ZT = null === (WT = nT._autoSuspend) || void 0 === WT ? void 0 : WT.bind(zT.Howler);

    function cT() {
      vT();
      const {
        ctx: TT,
        masterGain: UT
      } = nT;
      return TT && UT ? {
        ctx: TT,
        destination: UT,
        holdAwake: TT => {
          var UT, mT;
          (BT += TT ? 1 : -1, TT) ? null === (UT = nT._autoResume) || void 0 === UT || UT.call(nT): null === (mT = nT._autoSuspend) || void 0 === mT || mT.call(nT)
        },
        wake: () => {
          var UT;
          "running" !== TT.state && (null === (UT = nT._autoResume) || void 0 === UT || UT.call(nT), TT.resume().catch((() => {})))
        }
      } : null
    }

    function vT() {
      var TT;
      (nT.volume(), nT.ctx && nT.autoUnlock) && (null === (TT = nT._unlockAudio) || void 0 === TT || TT.call(nT))
    }
    ZT && (nT._autoSuspend = () => BT > 0 ? zT.Howler : ZT())
  }
};
Object.freeze(modules);
for (const TT in modules) Object.freeze(modules[TT]);