export const id = 93;
export const ids = [92, 93];
export const modules = {
  36605: (dd, Jd, kd) => {
    kd.r(Jd), kd.d(Jd, {
      countDecodesAs: () => od,
      decodedAudio: () => ld
    });
    var pd = kd(36608),
      Nd = kd(4743);
    const Wd = Nd.Howler,
      Pd = new Map;
    let Zd = 0;
    const gd = {
        song: 0,
        sheet: 0
      },
      Cd = new WeakMap,
      Kd = new WeakSet;

    function od(dd, Jd) {
      return Cd.set(dd, Jd), dd
    }

    function ld() {
      return {
        bytes: Zd,
        songsDecoded: gd.song,
        sheetsDecoded: gd.sheet
      }
    }

    function Qd(dd) {
      if (Kd.has(dd)) return;
      Kd.add(dd);
      const Jd = 1 === dd.decodeAudioData.length,
        kd = dd.decodeAudioData.bind(dd);
      dd.decodeAudioData = (dd, pd, Nd) => {
        const Kd = dd => {
          const Jd = Wd._howls.filter((dd => "loaded" !== dd._state));
          try {
            null === pd || void 0 === pd || pd(dd)
          } finally {
            const kd = Jd.find((dd => "loaded" === dd._state));
            void 0 !== kd && "string" === typeof kd._src && function(dd, Jd, kd) {
              var pd;
              Zd += kd - (null !== (pd = Pd.get(Jd)) && void 0 !== pd ? pd : 0), Pd.set(Jd, kd);
              const Nd = Cd.get(dd);
              void 0 !== Nd && gd[Nd]++
            }(kd, kd._src, dd.length * dd.numberOfChannels * Float32Array.BYTES_PER_ELEMENT)
          }
          return dd
        };
        if (!Jd) return kd(dd, Kd, Nd);
        const od = kd(dd).then(Kd);
        return od.catch((dd => {
          null === Nd || void 0 === Nd || Nd(dd)
        })), od
      }
    }(0, pd.e)(ld);
    const Ld = Nd.Howl.prototype,
      Od = Ld.init;
    Ld.init = function(dd) {
      return Nd.Howler.volume(), Wd.ctx && Qd(Wd.ctx), Od.call(this, dd)
    };
    const ed = Ld.unload;
    Ld.unload = function() {
      const dd = this._src,
        Jd = ed.call(this);
      if ("string" !== typeof dd) return Jd;
      const kd = Pd.get(dd);
      return void 0 !== kd && function(dd) {
        return !Wd._howls.some((Jd => Jd._src === dd || "string" === typeof Jd._src && dd.indexOf(Jd._src) >= 0))
      }(dd) && (Pd.delete(dd), Zd -= kd), Jd
    }
  },
  36608: (dd, Jd, kd) => {
    kd.d(Jd, {
      b: () => Wd,
      e: () => Nd
    });
    let pd = null;

    function Nd(dd) {
      pd = dd
    }

    function Wd() {
      return null === pd ? null : pd()
    }
  },
  4743: (dd, Jd, kd) => {
    kd.r(Jd), kd.d(Jd, {
      Howl: () => Nd.Howl,
      Howler: () => Nd.Howler,
      musicOutput: () => Ld,
      readyAudioContext: () => Od
    });
    var pd, Nd = kd(4745),
      Wd = kd(4516);
    const Pd = Nd.Howler;

    function Zd() {
      var dd, Jd;
      if (Pd.ctx || !Pd.usingWebAudio || "undefined" === typeof AudioContext || !(0, Wd.h)()) return;
      const kd = navigator.audioSession;
      let pd;
      "auto" === (null === kd || void 0 === kd ? void 0 : kd.type) && (kd.type = "ambient");
      try {
        pd = new AudioContext({
          sampleRate: 44100
        })
      } catch {
        return
      }
      const Nd = pd.createGain();
      Nd.gain.setValueAtTime(Pd._muted ? 0 : null !== (dd = Pd._volume) && void 0 !== dd ? dd : 1, pd.currentTime), Nd.connect(pd.destination), Pd.ctx = pd, Pd.masterGain = Nd, null === (Jd = Pd._setup) || void 0 === Jd || Jd.call(Pd)
    }
    Pd._mobileUnloaded = !0;
    const gd = Pd.volume.bind(Nd.Howler);
    Pd.volume = function() {
      return Zd(), gd(...arguments)
    };
    const Cd = Pd.mute.bind(Nd.Howler);
    Pd.mute = dd => (Zd(), Cd(dd));
    const Kd = Nd.Howl.prototype,
      od = Kd.init;
    Kd.init = function(dd) {
      return Zd(), od.call(this, dd)
    };
    let ld = 0;
    const Qd = null === (pd = Pd._autoSuspend) || void 0 === pd ? void 0 : pd.bind(Nd.Howler);

    function Ld() {
      Od();
      const {
        ctx: dd,
        masterGain: Jd
      } = Pd;
      return dd && Jd ? {
        ctx: dd,
        destination: Jd,
        holdAwake: dd => {
          var Jd, kd;
          (ld += dd ? 1 : -1, dd) ? null === (Jd = Pd._autoResume) || void 0 === Jd || Jd.call(Pd): null === (kd = Pd._autoSuspend) || void 0 === kd || kd.call(Pd)
        },
        wake: () => {
          var Jd;
          "running" !== dd.state && (null === (Jd = Pd._autoResume) || void 0 === Jd || Jd.call(Pd), dd.resume().catch((() => {})))
        }
      } : null
    }

    function Od() {
      var dd;
      (Pd.volume(), Pd.ctx && Pd.autoUnlock) && (null === (dd = Pd._unlockAudio) || void 0 === dd || dd.call(Pd))
    }
    Qd && (Pd._autoSuspend = () => ld > 0 ? Nd.Howler : Qd())
  }
};
Object.freeze(modules);
for (const dd in modules) Object.freeze(modules[dd]);