export const id = 108;
export const ids = [108];
export const modules = {
  5338: (ee, ie, He) => {
    He.r(ie), He.d(ie, {
      Howl: () => be.Howl,
      Howler: () => be.Howler,
      musicOutput: () => pe,
      readyAudioContext: () => Xe
    });
    var ye, be = He(5340),
      Me = He(3791),
      Ke = He(5055);
    const Ue = be.Howler;

    function Fe() {
      var ee, ie;
      if (Ue.ctx || !Ue.usingWebAudio || "undefined" === typeof AudioContext || !(0, Ke.f)()) return;
      const He = navigator.audioSession;
      let ye;
      "auto" === (null === He || void 0 === He ? void 0 : He.type) && (He.type = "ambient");
      try {
        ye = new AudioContext({
          sampleRate: 44100
        })
      } catch {
        return
      }
      const be = ye.createGain();
      be.gain.setValueAtTime(Ue._muted ? 0 : null !== (ee = Ue._volume) && void 0 !== ee ? ee : 1, ye.currentTime), be.connect(ye.destination), Ue.ctx = ye, Ue.masterGain = be, null === (ie = Ue._setup) || void 0 === ie || ie.call(Ue)
    }
    Ue._mobileUnloaded = !0;
    const Je = Ue.volume.bind(be.Howler);
    Ue.volume = function() {
      return Fe(), Je(...arguments)
    };
    const oe = Ue.mute.bind(be.Howler);
    Ue.mute = ee => (Fe(), oe(ee));
    const Re = be.Howl.prototype,
      ke = Re.init;

    function qe() {
      for (; Ue._html5AudioPool.length < Ue.html5PoolSize;) {
        const ee = new Audio;
        ee._unlocked = !0, Ue._releaseHtml5Audio(ee)
      }
      for (const ie of Ue._howls)
        if (!ie._webAudio)
          for (const He of ie._getSoundIds()) {
            var ee;
            const ye = null === (ee = ie._soundById(He)) || void 0 === ee ? void 0 : ee._node;
            ye && !ye._unlocked && (ye._unlocked = !0, ye.load())
          }
    }
    Re.init = function(ee) {
      return Fe(), ke.call(this, ee)
    }, (0, Ke.f)() && (Ue._unlockAudio = () => {
      const ee = Ue.ctx;
      if (Ue._audioUnlocked || !ee) return;
      Ue.autoUnlock = !1;
      const ie = ee.createBuffer(1, 1, 22050);
      Ue._scratchBuffer = ie;
      const He = new AbortController;
      let ye = "afterPaint";
      const be = () => {
          var ye;
          if (Ue._audioUnlocked) return;
          null === (ye = Ue._autoResume) || void 0 === ye || ye.call(Ue);
          const be = ee.createBufferSource();
          be.buffer = ie, be.connect(ee.destination), be.start(0), ee.resume().catch((() => {})), be.onended = () => {
            be.disconnect(0), Ue._audioUnlocked = !0, He.abort();
            for (const ee of Ue._howls) ee._emit("unlock")
          }
        },
        Fe = () => {
          qe(), be()
        },
        Je = ie => {
          if (qe(), "inTap" === ye) {
            if ("running" === ee.state) return;
            console.warn("A click's resume after its frame left Howler's context suspended, so this click resumes it"), be()
          } else "afterPaint" === ye && (ye = "queued", (0, Me.c)(ie.timeStamp, (() => {
            ye = "inTap", be()
          })))
        };
      for (const Me of ["touchstart", "touchend"]) document.addEventListener(Me, Fe, {
        capture: !0,
        signal: He.signal
      });
      for (const Me of Ke.b) document.addEventListener(Me, Je, {
        capture: !0,
        signal: He.signal
      })
    });
    let fe = 0;
    const Te = null === (ye = Ue._autoSuspend) || void 0 === ye ? void 0 : ye.bind(be.Howler);

    function pe() {
      Xe();
      const {
        ctx: ee,
        masterGain: ie
      } = Ue;
      return ee && ie ? {
        ctx: ee,
        destination: ie,
        holdAwake: ee => {
          var ie, He;
          (fe += ee ? 1 : -1, ee) ? null === (ie = Ue._autoResume) || void 0 === ie || ie.call(Ue): null === (He = Ue._autoSuspend) || void 0 === He || He.call(Ue)
        },
        wake: () => {
          var ie;
          "running" !== ee.state && (null === (ie = Ue._autoResume) || void 0 === ie || ie.call(Ue), ee.resume().catch((() => {})))
        }
      } : null
    }

    function Xe() {
      var ee;
      (Ue.volume(), Ue.ctx && Ue.autoUnlock) && (null === (ee = Ue._unlockAudio) || void 0 === ee || ee.call(Ue))
    }
    Te && (Ue._autoSuspend = () => fe > 0 ? be.Howler : Te())
  }
};
Object.freeze(modules);
for (const ee in modules) Object.freeze(modules[ee]);