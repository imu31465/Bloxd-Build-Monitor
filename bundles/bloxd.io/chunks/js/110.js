export const id = 110;
export const ids = [110];
export const modules = {
  5641: (dd, Od, md) => {
    md.r(Od), md.d(Od, {
      Howl: () => Fd.Howl,
      Howler: () => Fd.Howler,
      musicOutput: () => yd,
      readyAudioContext: () => bd
    });
    var Wd, Fd = md(5650),
      Rd = md(4664),
      Xd = md(5326);
    const Kd = Fd.Howler;

    function hd() {
      var dd, Od;
      if (Kd.ctx || !Kd.usingWebAudio || "undefined" === typeof AudioContext || !(0, Xd.j)()) return;
      const md = navigator.audioSession;
      let Wd;
      "auto" === (null === md || void 0 === md ? void 0 : md.type) && (md.type = "ambient");
      try {
        Wd = new AudioContext({
          sampleRate: 44100
        })
      } catch {
        return
      }
      const Fd = Wd.createGain();
      Fd.gain.setValueAtTime(Kd._muted ? 0 : null !== (dd = Kd._volume) && void 0 !== dd ? dd : 1, Wd.currentTime), Fd.connect(Wd.destination), Kd.ctx = Wd, Kd.masterGain = Fd, null === (Od = Kd._setup) || void 0 === Od || Od.call(Kd)
    }
    Kd._mobileUnloaded = !0;
    const vd = Kd.volume.bind(Fd.Howler);
    Kd.volume = function() {
      return hd(), vd(...arguments)
    };
    const Qd = Kd.mute.bind(Fd.Howler);
    Kd.mute = dd => (hd(), Qd(dd));
    const td = Fd.Howl.prototype,
      od = td.init;

    function Nd() {
      for (; Kd._html5AudioPool.length < Kd.html5PoolSize;) {
        const dd = new Audio;
        dd._unlocked = !0, Kd._releaseHtml5Audio(dd)
      }
      for (const Od of Kd._howls)
        if (!Od._webAudio)
          for (const md of Od._getSoundIds()) {
            var dd;
            const Wd = null === (dd = Od._soundById(md)) || void 0 === dd ? void 0 : dd._node;
            Wd && !Wd._unlocked && (Wd._unlocked = !0, Wd.load())
          }
    }
    td.init = function(dd) {
      return hd(), od.call(this, dd)
    }, (0, Xd.j)() && (Kd._unlockAudio = () => {
      const dd = Kd.ctx;
      if (Kd._audioUnlocked || !dd) return;
      Kd.autoUnlock = !1;
      const Od = dd.createBuffer(1, 1, 22050);
      Kd._scratchBuffer = Od;
      const md = new AbortController;
      let Wd = "afterPaint";
      const Fd = () => {
          var Wd;
          if (Kd._audioUnlocked) return;
          null === (Wd = Kd._autoResume) || void 0 === Wd || Wd.call(Kd);
          const Fd = dd.createBufferSource();
          Fd.buffer = Od, Fd.connect(dd.destination), Fd.start(0), dd.resume().catch((() => {})), Fd.onended = () => {
            Fd.disconnect(0), Kd._audioUnlocked = !0, md.abort();
            for (const dd of Kd._howls) dd._emit("unlock")
          }
        },
        hd = () => {
          Nd(), Fd()
        },
        vd = Od => {
          if (Nd(), "inTap" === Wd) {
            if ("running" === dd.state) return;
            console.warn("A click's resume after its frame left Howler's context suspended, so this click resumes it"), Fd()
          } else "afterPaint" === Wd && (Wd = "queued", (0, Rd.d)(Od.timeStamp, (() => {
            Wd = "inTap", Fd()
          })))
        };
      for (const Rd of ["touchstart", "touchend"]) document.addEventListener(Rd, hd, {
        capture: !0,
        signal: md.signal
      });
      for (const Rd of Xd.d) document.addEventListener(Rd, vd, {
        capture: !0,
        signal: md.signal
      })
    });
    let qd = 0;
    const Hd = null === (Wd = Kd._autoSuspend) || void 0 === Wd ? void 0 : Wd.bind(Fd.Howler);

    function yd() {
      bd();
      const {
        ctx: dd,
        masterGain: Od
      } = Kd;
      return dd && Od ? {
        ctx: dd,
        destination: Od,
        holdAwake: dd => {
          var Od, md;
          (qd += dd ? 1 : -1, dd) ? null === (Od = Kd._autoResume) || void 0 === Od || Od.call(Kd): null === (md = Kd._autoSuspend) || void 0 === md || md.call(Kd)
        },
        wake: () => {
          var Od;
          "running" !== dd.state && (null === (Od = Kd._autoResume) || void 0 === Od || Od.call(Kd), dd.resume().catch((() => {})))
        }
      } : null
    }

    function bd() {
      var dd;
      (Kd.volume(), Kd.ctx && Kd.autoUnlock) && (null === (dd = Kd._unlockAudio) || void 0 === dd || dd.call(Kd))
    }
    Hd && (Kd._autoSuspend = () => qd > 0 ? Fd.Howler : Hd())
  }
};
Object.freeze(modules);
for (const dd in modules) Object.freeze(modules[dd]);