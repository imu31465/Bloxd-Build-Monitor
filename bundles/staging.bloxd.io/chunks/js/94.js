export const id = 94;
export const ids = [93, 94];
export const modules = {
  36516: (mm, Tm, fm) => {
    fm.r(Tm), fm.d(Tm, {
      countDecodesAs: () => pm,
      decodedAudio: () => Em
    });
    var hm = fm(3269),
      Am = fm(4800);
    const am = Am.Howler,
      xm = new Map;
    let wm = 0;
    const Dm = {
        song: 0,
        sheet: 0
      },
      im = new WeakMap,
      Rm = new WeakSet;

    function pm(mm, Tm) {
      return im.set(mm, Tm), mm
    }

    function Em() {
      return {
        bytes: wm,
        songsDecoded: Dm.song,
        sheetsDecoded: Dm.sheet
      }
    }

    function om(mm) {
      if (Rm.has(mm)) return;
      Rm.add(mm);
      const Tm = 1 === mm.decodeAudioData.length,
        fm = mm.decodeAudioData.bind(mm);
      mm.decodeAudioData = (mm, hm, Am) => {
        const Rm = mm => {
          const Tm = am._howls.filter((mm => "loaded" !== mm._state));
          try {
            null === hm || void 0 === hm || hm(mm)
          } finally {
            const fm = Tm.find((mm => "loaded" === mm._state));
            void 0 !== fm && "string" === typeof fm._src && function(mm, Tm, fm) {
              var hm;
              wm += fm - (null !== (hm = xm.get(Tm)) && void 0 !== hm ? hm : 0), xm.set(Tm, fm);
              const Am = im.get(mm);
              void 0 !== Am && Dm[Am]++
            }(fm, fm._src, mm.length * mm.numberOfChannels * Float32Array.BYTES_PER_ELEMENT)
          }
          return mm
        };
        if (!Tm) return fm(mm, Rm, Am);
        const pm = fm(mm).then(Rm);
        return pm.catch((mm => {
          null === Am || void 0 === Am || Am(mm)
        })), pm
      }
    }(0, hm.g)(Em);
    const Om = Am.Howl.prototype,
      Ym = Om.init;
    Om.init = function(mm) {
      return Am.Howler.volume(), am.ctx && om(am.ctx), Ym.call(this, mm)
    };
    const qm = Om.unload;
    Om.unload = function() {
      const mm = this._src,
        Tm = qm.call(this);
      if ("string" !== typeof mm) return Tm;
      const fm = xm.get(mm);
      return void 0 !== fm && function(mm) {
        return !am._howls.some((Tm => Tm._src === mm || "string" === typeof Tm._src && mm.indexOf(Tm._src) >= 0))
      }(mm) && (xm.delete(mm), wm -= fm), Tm
    }
  },
  4800: (mm, Tm, fm) => {
    fm.r(Tm), fm.d(Tm, {
      Howl: () => Am.Howl,
      Howler: () => Am.Howler,
      musicOutput: () => qm,
      readyAudioContext: () => jm
    });
    var hm, Am = fm(4806),
      am = fm(3443),
      xm = fm(4588);
    const wm = Am.Howler;

    function Dm() {
      var mm, Tm;
      if (wm.ctx || !wm.usingWebAudio || "undefined" === typeof AudioContext || !(0, xm.k)()) return;
      const fm = navigator.audioSession;
      let hm;
      "auto" === (null === fm || void 0 === fm ? void 0 : fm.type) && (fm.type = "ambient");
      try {
        hm = new AudioContext({
          sampleRate: 44100
        })
      } catch {
        return
      }
      const Am = hm.createGain();
      Am.gain.setValueAtTime(wm._muted ? 0 : null !== (mm = wm._volume) && void 0 !== mm ? mm : 1, hm.currentTime), Am.connect(hm.destination), wm.ctx = hm, wm.masterGain = Am, null === (Tm = wm._setup) || void 0 === Tm || Tm.call(wm)
    }
    wm._mobileUnloaded = !0;
    const im = wm.volume.bind(Am.Howler);
    wm.volume = function() {
      return Dm(), im(...arguments)
    };
    const Rm = wm.mute.bind(Am.Howler);
    wm.mute = mm => (Dm(), Rm(mm));
    const pm = Am.Howl.prototype,
      Em = pm.init;

    function om() {
      for (; wm._html5AudioPool.length < wm.html5PoolSize;) {
        const mm = new Audio;
        mm._unlocked = !0, wm._releaseHtml5Audio(mm)
      }
      for (const Tm of wm._howls)
        if (!Tm._webAudio)
          for (const fm of Tm._getSoundIds()) {
            var mm;
            const hm = null === (mm = Tm._soundById(fm)) || void 0 === mm ? void 0 : mm._node;
            hm && !hm._unlocked && (hm._unlocked = !0, hm.load())
          }
    }
    pm.init = function(mm) {
      return Dm(), Em.call(this, mm)
    }, (0, xm.k)() && (wm._unlockAudio = () => {
      const mm = wm.ctx;
      if (wm._audioUnlocked || !mm) return;
      wm.autoUnlock = !1;
      const Tm = mm.createBuffer(1, 1, 22050);
      wm._scratchBuffer = Tm;
      const fm = new AbortController;
      let hm = "afterPaint";
      const Am = () => {
          var hm;
          if (wm._audioUnlocked) return;
          null === (hm = wm._autoResume) || void 0 === hm || hm.call(wm);
          const Am = mm.createBufferSource();
          Am.buffer = Tm, Am.connect(mm.destination), Am.start(0), mm.resume().catch((() => {})), Am.onended = () => {
            Am.disconnect(0), wm._audioUnlocked = !0, fm.abort();
            for (const mm of wm._howls) mm._emit("unlock")
          }
        },
        Dm = () => {
          om(), Am()
        },
        im = Tm => {
          if (om(), "inTap" === hm) {
            if ("running" === mm.state) return;
            console.warn("A click's resume after its frame left Howler's context suspended, so this click resumes it"), Am()
          } else "afterPaint" === hm && (hm = "queued", (0, am.c)(Tm.timeStamp, (() => {
            hm = "inTap", Am()
          })))
        };
      for (const am of ["touchstart", "touchend"]) document.addEventListener(am, Dm, {
        capture: !0,
        signal: fm.signal
      });
      for (const am of xm.c) document.addEventListener(am, im, {
        capture: !0,
        signal: fm.signal
      })
    });
    let Om = 0;
    const Ym = null === (hm = wm._autoSuspend) || void 0 === hm ? void 0 : hm.bind(Am.Howler);

    function qm() {
      jm();
      const {
        ctx: mm,
        masterGain: Tm
      } = wm;
      return mm && Tm ? {
        ctx: mm,
        destination: Tm,
        holdAwake: mm => {
          var Tm, fm;
          (Om += mm ? 1 : -1, mm) ? null === (Tm = wm._autoResume) || void 0 === Tm || Tm.call(wm): null === (fm = wm._autoSuspend) || void 0 === fm || fm.call(wm)
        },
        wake: () => {
          var Tm;
          "running" !== mm.state && (null === (Tm = wm._autoResume) || void 0 === Tm || Tm.call(wm), mm.resume().catch((() => {})))
        }
      } : null
    }

    function jm() {
      var mm;
      (wm.volume(), wm.ctx && wm.autoUnlock) && (null === (mm = wm._unlockAudio) || void 0 === mm || mm.call(wm))
    }
    Ym && (wm._autoSuspend = () => Om > 0 ? Am.Howler : Ym())
  }
};
Object.freeze(modules);
for (const mm in modules) Object.freeze(modules[mm]);