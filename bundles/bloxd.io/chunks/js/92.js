export const id = 92;
export const ids = [91, 92];
export const modules = {
  35866: (DD, CD, cD) => {
    cD.r(CD), cD.d(CD, {
      countDecodesAs: () => SD,
      decodedAudio: () => BD
    });
    var ID = cD(4621);
    const pD = ID.Howler,
      iD = new Map;
    let fD = 0;
    const bD = {
        song: 0,
        sheet: 0
      },
      QD = new WeakMap,
      wD = new WeakSet;

    function SD(DD, CD) {
      return QD.set(DD, CD), DD
    }

    function BD() {
      return {
        bytes: fD,
        songsDecoded: bD.song,
        sheetsDecoded: bD.sheet
      }
    }

    function yD(DD) {
      if (wD.has(DD)) return;
      wD.add(DD);
      const CD = 1 === DD.decodeAudioData.length,
        cD = DD.decodeAudioData.bind(DD);
      DD.decodeAudioData = (DD, ID, wD) => {
        const SD = DD => {
          const CD = pD._howls.filter((DD => "loaded" !== DD._state));
          try {
            null === ID || void 0 === ID || ID(DD)
          } finally {
            const cD = CD.find((DD => "loaded" === DD._state));
            void 0 !== cD && "string" === typeof cD._src && function(DD, CD, cD) {
              var ID;
              fD += cD - (null !== (ID = iD.get(CD)) && void 0 !== ID ? ID : 0), iD.set(CD, cD);
              const pD = QD.get(DD);
              void 0 !== pD && bD[pD]++
            }(cD, cD._src, DD.length * DD.numberOfChannels * Float32Array.BYTES_PER_ELEMENT)
          }
          return DD
        };
        if (!CD) return cD(DD, SD, wD);
        const BD = cD(DD).then(SD);
        return BD.catch((DD => {
          null === wD || void 0 === wD || wD(DD)
        })), BD
      }
    }
    const MD = ID.Howl.prototype,
      tD = MD.init;
    MD.init = function(DD) {
      return ID.Howler.volume(), pD.ctx && yD(pD.ctx), tD.call(this, DD)
    };
    const ZD = MD.unload;
    MD.unload = function() {
      const DD = this._src,
        CD = ZD.call(this);
      if ("string" !== typeof DD) return CD;
      const cD = iD.get(DD);
      return void 0 !== cD && function(DD) {
        return !pD._howls.some((CD => CD._src === DD || "string" === typeof CD._src && DD.indexOf(CD._src) >= 0))
      }(DD) && (iD.delete(DD), fD -= cD), CD
    }
  },
  4621: (DD, CD, cD) => {
    cD.r(CD), cD.d(CD, {
      Howl: () => pD.Howl,
      Howler: () => pD.Howler,
      iosAudio: () => QD,
      musicOutput: () => oD,
      readyAudioContext: () => vD
    });
    var ID, pD = cD(4626),
      iD = cD(90);
    const fD = pD.Howler;
    let bD;

    function QD() {
      return bD ??= "ios" === (0, iD.getOperatingSystem)(), bD
    }

    function wD() {
      var DD, CD;
      if (fD.ctx || !fD.usingWebAudio || "undefined" === typeof AudioContext || !QD()) return;
      const cD = navigator.audioSession;
      let ID;
      "auto" === (null === cD || void 0 === cD ? void 0 : cD.type) && (cD.type = "ambient");
      try {
        ID = new AudioContext({
          sampleRate: 44100
        })
      } catch {
        return
      }
      const pD = ID.createGain();
      pD.gain.setValueAtTime(fD._muted ? 0 : null !== (DD = fD._volume) && void 0 !== DD ? DD : 1, ID.currentTime), pD.connect(ID.destination), fD.ctx = ID, fD.masterGain = pD, null === (CD = fD._setup) || void 0 === CD || CD.call(fD)
    }
    fD._mobileUnloaded = !0;
    const SD = fD.volume.bind(pD.Howler);
    fD.volume = function() {
      return wD(), SD(...arguments)
    };
    const BD = fD.mute.bind(pD.Howler);
    fD.mute = DD => (wD(), BD(DD));
    const yD = pD.Howl.prototype,
      MD = yD.init;
    yD.init = function(DD) {
      return wD(), MD.call(this, DD)
    };
    let tD = 0;
    const ZD = null === (ID = fD._autoSuspend) || void 0 === ID ? void 0 : ID.bind(pD.Howler);

    function oD() {
      vD();
      const {
        ctx: DD,
        masterGain: CD
      } = fD;
      return DD && CD ? {
        ctx: DD,
        destination: CD,
        holdAwake: DD => {
          var CD, cD;
          (tD += DD ? 1 : -1, DD) ? null === (CD = fD._autoResume) || void 0 === CD || CD.call(fD): null === (cD = fD._autoSuspend) || void 0 === cD || cD.call(fD)
        },
        wake: () => {
          var CD;
          "running" !== DD.state && (null === (CD = fD._autoResume) || void 0 === CD || CD.call(fD), DD.resume().catch((() => {})))
        }
      } : null
    }

    function vD() {
      var DD;
      (fD.volume(), fD.ctx && fD.autoUnlock) && (null === (DD = fD._unlockAudio) || void 0 === DD || DD.call(fD))
    }
    ZD && (fD._autoSuspend = () => tD > 0 ? pD.Howler : ZD())
  }
};
Object.freeze(modules);
for (const DD in modules) Object.freeze(modules[DD]);