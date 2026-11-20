export const id = 92;
export const ids = [91, 92];
export const modules = {
  36298: (uu, Ru, yu) => {
    yu.r(Ru), yu.d(Ru, {
      countDecodesAs: () => Vu,
      decodedAudio: () => ru
    });
    var Eu = yu(4630);
    const Ku = Eu.Howler,
      Qu = new Map;
    let mu = 0;
    const Ju = {
        song: 0,
        sheet: 0
      },
      Nu = new WeakMap,
      Xu = new WeakSet;

    function Vu(uu, Ru) {
      return Nu.set(uu, Ru), uu
    }

    function ru() {
      return {
        bytes: mu,
        songsDecoded: Ju.song,
        sheetsDecoded: Ju.sheet
      }
    }

    function Bu(uu) {
      if (Xu.has(uu)) return;
      Xu.add(uu);
      const Ru = 1 === uu.decodeAudioData.length,
        yu = uu.decodeAudioData.bind(uu);
      uu.decodeAudioData = (uu, Eu, Xu) => {
        const Vu = uu => {
          const Ru = Ku._howls.filter((uu => "loaded" !== uu._state));
          try {
            null === Eu || void 0 === Eu || Eu(uu)
          } finally {
            const yu = Ru.find((uu => "loaded" === uu._state));
            void 0 !== yu && "string" === typeof yu._src && function(uu, Ru, yu) {
              var Eu;
              mu += yu - (null !== (Eu = Qu.get(Ru)) && void 0 !== Eu ? Eu : 0), Qu.set(Ru, yu);
              const Ku = Nu.get(uu);
              void 0 !== Ku && Ju[Ku]++
            }(yu, yu._src, uu.length * uu.numberOfChannels * Float32Array.BYTES_PER_ELEMENT)
          }
          return uu
        };
        if (!Ru) return yu(uu, Vu, Xu);
        const ru = yu(uu).then(Vu);
        return ru.catch((uu => {
          null === Xu || void 0 === Xu || Xu(uu)
        })), ru
      }
    }
    const xu = Eu.Howl.prototype,
      Su = xu.init;
    xu.init = function(uu) {
      return Eu.Howler.volume(), Ku.ctx && Bu(Ku.ctx), Su.call(this, uu)
    };
    const pu = xu.unload;
    xu.unload = function() {
      const uu = this._src,
        Ru = pu.call(this);
      if ("string" !== typeof uu) return Ru;
      const yu = Qu.get(uu);
      return void 0 !== yu && function(uu) {
        return !Ku._howls.some((Ru => Ru._src === uu || "string" === typeof Ru._src && uu.indexOf(Ru._src) >= 0))
      }(uu) && (Qu.delete(uu), mu -= yu), Ru
    }
  },
  4630: (uu, Ru, yu) => {
    yu.r(Ru), yu.d(Ru, {
      Howl: () => Ku.Howl,
      Howler: () => Ku.Howler,
      iosAudio: () => Nu,
      musicOutput: () => Tu,
      readyAudioContext: () => Wu
    });
    var Eu, Ku = yu(4638),
      Qu = yu(106);
    const mu = Ku.Howler;
    let Ju;

    function Nu() {
      return Ju ??= "ios" === (0, Qu.getOperatingSystem)(), Ju
    }

    function Xu() {
      var uu, Ru;
      if (mu.ctx || !mu.usingWebAudio || "undefined" === typeof AudioContext || !Nu()) return;
      const yu = navigator.audioSession;
      let Eu;
      "auto" === (null === yu || void 0 === yu ? void 0 : yu.type) && (yu.type = "ambient");
      try {
        Eu = new AudioContext({
          sampleRate: 44100
        })
      } catch {
        return
      }
      const Ku = Eu.createGain();
      Ku.gain.setValueAtTime(mu._muted ? 0 : null !== (uu = mu._volume) && void 0 !== uu ? uu : 1, Eu.currentTime), Ku.connect(Eu.destination), mu.ctx = Eu, mu.masterGain = Ku, null === (Ru = mu._setup) || void 0 === Ru || Ru.call(mu)
    }
    mu._mobileUnloaded = !0;
    const Vu = mu.volume.bind(Ku.Howler);
    mu.volume = function() {
      return Xu(), Vu(...arguments)
    };
    const ru = mu.mute.bind(Ku.Howler);
    mu.mute = uu => (Xu(), ru(uu));
    const Bu = Ku.Howl.prototype,
      xu = Bu.init;
    Bu.init = function(uu) {
      return Xu(), xu.call(this, uu)
    };
    let Su = 0;
    const pu = null === (Eu = mu._autoSuspend) || void 0 === Eu ? void 0 : Eu.bind(Ku.Howler);

    function Tu() {
      Wu();
      const {
        ctx: uu,
        masterGain: Ru
      } = mu;
      return uu && Ru ? {
        ctx: uu,
        destination: Ru,
        holdAwake: uu => {
          var Ru, yu;
          (Su += uu ? 1 : -1, uu) ? null === (Ru = mu._autoResume) || void 0 === Ru || Ru.call(mu): null === (yu = mu._autoSuspend) || void 0 === yu || yu.call(mu)
        },
        wake: () => {
          var Ru;
          "running" !== uu.state && (null === (Ru = mu._autoResume) || void 0 === Ru || Ru.call(mu), uu.resume().catch((() => {})))
        }
      } : null
    }

    function Wu() {
      var uu;
      (mu.volume(), mu.ctx && mu.autoUnlock) && (null === (uu = mu._unlockAudio) || void 0 === uu || uu.call(mu))
    }
    pu && (mu._autoSuspend = () => Su > 0 ? Ku.Howler : pu())
  }
};
Object.freeze(modules);
for (const uu in modules) Object.freeze(modules[uu]);