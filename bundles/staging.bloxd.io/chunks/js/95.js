export const id = 95;
export const ids = [95];
export const modules = {
  5026: (uu, Eu, ju) => {
    ju.r(Eu), ju.d(Eu, {
      Howl: () => Uu.Howl,
      Howler: () => Uu.Howler,
      musicOutput: () => hu,
      readyAudioContext: () => Du
    });
    var su, Uu = ju(5032),
      Zu = ju(3634),
      Xu = ju(4834);
    const lu = Uu.Howler;

    function qu() {
      var uu, Eu;
      if (lu.ctx || !lu.usingWebAudio || "undefined" === typeof AudioContext || !(0, Xu.j)()) return;
      const ju = navigator.audioSession;
      let su;
      "auto" === (null === ju || void 0 === ju ? void 0 : ju.type) && (ju.type = "ambient");
      try {
        su = new AudioContext({
          sampleRate: 44100
        })
      } catch {
        return
      }
      const Uu = su.createGain();
      Uu.gain.setValueAtTime(lu._muted ? 0 : null !== (uu = lu._volume) && void 0 !== uu ? uu : 1, su.currentTime), Uu.connect(su.destination), lu.ctx = su, lu.masterGain = Uu, null === (Eu = lu._setup) || void 0 === Eu || Eu.call(lu)
    }
    lu._mobileUnloaded = !0;
    const fu = lu.volume.bind(Uu.Howler);
    lu.volume = function() {
      return qu(), fu(...arguments)
    };
    const Cu = lu.mute.bind(Uu.Howler);
    lu.mute = uu => (qu(), Cu(uu));
    const bu = Uu.Howl.prototype,
      cu = bu.init;

    function Nu() {
      for (; lu._html5AudioPool.length < lu.html5PoolSize;) {
        const uu = new Audio;
        uu._unlocked = !0, lu._releaseHtml5Audio(uu)
      }
      for (const Eu of lu._howls)
        if (!Eu._webAudio)
          for (const ju of Eu._getSoundIds()) {
            var uu;
            const su = null === (uu = Eu._soundById(ju)) || void 0 === uu ? void 0 : uu._node;
            su && !su._unlocked && (su._unlocked = !0, su.load())
          }
    }
    bu.init = function(uu) {
      return qu(), cu.call(this, uu)
    }, (0, Xu.j)() && (lu._unlockAudio = () => {
      const uu = lu.ctx;
      if (lu._audioUnlocked || !uu) return;
      lu.autoUnlock = !1;
      const Eu = uu.createBuffer(1, 1, 22050);
      lu._scratchBuffer = Eu;
      const ju = new AbortController;
      let su = "afterPaint";
      const Uu = () => {
          var su;
          if (lu._audioUnlocked) return;
          null === (su = lu._autoResume) || void 0 === su || su.call(lu);
          const Uu = uu.createBufferSource();
          Uu.buffer = Eu, Uu.connect(uu.destination), Uu.start(0), uu.resume().catch((() => {})), Uu.onended = () => {
            Uu.disconnect(0), lu._audioUnlocked = !0, ju.abort();
            for (const uu of lu._howls) uu._emit("unlock")
          }
        },
        qu = () => {
          Nu(), Uu()
        },
        fu = Eu => {
          if (Nu(), "inTap" === su) {
            if ("running" === uu.state) return;
            console.warn("A click's resume after its frame left Howler's context suspended, so this click resumes it"), Uu()
          } else "afterPaint" === su && (su = "queued", (0, Zu.d)(Eu.timeStamp, (() => {
            su = "inTap", Uu()
          })))
        };
      for (const Zu of ["touchstart", "touchend"]) document.addEventListener(Zu, qu, {
        capture: !0,
        signal: ju.signal
      });
      for (const Zu of Xu.c) document.addEventListener(Zu, fu, {
        capture: !0,
        signal: ju.signal
      })
    });
    let Ou = 0;
    const Yu = null === (su = lu._autoSuspend) || void 0 === su ? void 0 : su.bind(Uu.Howler);

    function hu() {
      Du();
      const {
        ctx: uu,
        masterGain: Eu
      } = lu;
      return uu && Eu ? {
        ctx: uu,
        destination: Eu,
        holdAwake: uu => {
          var Eu, ju;
          (Ou += uu ? 1 : -1, uu) ? null === (Eu = lu._autoResume) || void 0 === Eu || Eu.call(lu): null === (ju = lu._autoSuspend) || void 0 === ju || ju.call(lu)
        },
        wake: () => {
          var Eu;
          "running" !== uu.state && (null === (Eu = lu._autoResume) || void 0 === Eu || Eu.call(lu), uu.resume().catch((() => {})))
        }
      } : null
    }

    function Du() {
      var uu;
      (lu.volume(), lu.ctx && lu.autoUnlock) && (null === (uu = lu._unlockAudio) || void 0 === uu || uu.call(lu))
    }
    Yu && (lu._autoSuspend = () => Ou > 0 ? Uu.Howler : Yu())
  }
};
Object.freeze(modules);
for (const uu in modules) Object.freeze(modules[uu]);