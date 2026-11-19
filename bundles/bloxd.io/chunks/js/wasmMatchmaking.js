/*! For license information please see wd13r.wasmMatchmaking.d258d6f1.chunk.js.LICENSE.txt */
export const id = 59;
export const ids = [59, 91];
export const modules = {
  35944: (DD, CD) => {
    function cD(DD) {
      if (DD && "object" === typeof DD) {
        var CD = DD.which || DD.keyCode || DD.charCode;
        CD && (DD = CD)
      }
      if ("number" === typeof DD) return fD[DD];
      var cD, iD = String(DD);
      return (cD = ID[iD.toLowerCase()]) ? cD : (cD = pD[iD.toLowerCase()]) || (1 === iD.length ? iD.charCodeAt(0) : void 0)
    }
    cD.isEventKey = function(DD, CD) {
      if (DD && "object" === typeof DD) {
        var cD = DD.which || DD.keyCode || DD.charCode;
        if (null === cD || void 0 === cD) return !1;
        if ("string" === typeof CD) {
          var iD;
          if (iD = ID[CD.toLowerCase()]) return iD === cD;
          if (iD = pD[CD.toLowerCase()]) return iD === cD
        } else if ("number" === typeof CD) return CD === cD;
        return !1
      }
    };
    var ID = (CD = DD.exports = cD).code = CD.codes = {
        backspace: 8,
        tab: 9,
        enter: 13,
        shift: 16,
        ctrl: 17,
        alt: 18,
        "pause/break": 19,
        "caps lock": 20,
        esc: 27,
        space: 32,
        "page up": 33,
        "page down": 34,
        end: 35,
        home: 36,
        left: 37,
        up: 38,
        right: 39,
        down: 40,
        insert: 45,
        delete: 46,
        command: 91,
        "left command": 91,
        "right command": 93,
        "numpad *": 106,
        "numpad +": 107,
        "numpad -": 109,
        "numpad .": 110,
        "numpad /": 111,
        "num lock": 144,
        "scroll lock": 145,
        "my computer": 182,
        "my calculator": 183,
        ";": 186,
        "=": 187,
        ",": 188,
        "-": 189,
        ".": 190,
        "/": 191,
        "`": 192,
        "[": 219,
        "\\": 220,
        "]": 221,
        "'": 222
      },
      pD = CD.aliases = {
        windows: 91,
        "\u21e7": 16,
        "\u2325": 18,
        "\u2303": 17,
        "\u2318": 91,
        ctl: 17,
        control: 17,
        option: 18,
        pause: 19,
        break: 19,
        caps: 20,
        return: 13,
        escape: 27,
        spc: 32,
        spacebar: 32,
        pgup: 33,
        pgdn: 34,
        ins: 45,
        del: 46,
        cmd: 91
      };
    for (iD = 97; iD < 123; iD++) ID[String.fromCharCode(iD)] = iD - 32;
    for (var iD = 48; iD < 58; iD++) ID[iD - 48] = iD;
    for (iD = 1; iD < 13; iD++) ID["f" + iD] = iD + 111;
    for (iD = 0; iD < 10; iD++) ID["numpad " + iD] = iD + 96;
    var fD = CD.names = CD.title = {};
    for (iD in ID) fD[ID[iD]] = iD;
    for (var bD in pD) ID[bD] = pD[bD]
  },
  36099: (DD, CD, cD) => {
    cD.d(CD, {
      e: () => fD
    });
    var ID = cD(53);
    const pD = ID.useLayoutEffect;
    const iD = function(DD) {
      var CD = (0, ID.useRef)(DD);
      return pD((function() {
        CD.current = DD
      })), CD
    };
    var fD = function(DD) {
      var CD = iD(DD);
      (0, ID.useEffect)((function() {
        var DD = function(DD) {
          var cD;
          if (null != CD.current && (cD = CD.current(DD)), DD.defaultPrevented && (DD.returnValue = ""), "string" === typeof cD) return DD.returnValue = cD, cD
        };
        return window.addEventListener("beforeunload", DD),
          function() {
            window.removeEventListener("beforeunload", DD)
          }
      }), [])
    }
  },
  35987: DD => {
    var CD, cD = "undefined" !== typeof window ? window.navigator.userAgent : "",
      ID = /OS X/.test(cD),
      pD = /Opera/.test(cD),
      iD = !/like Gecko/.test(cD) && !pD,
      fD = DD.exports = {
        0: ID ? "<menu>" : "<UNK>",
        1: "<mouse 1>",
        2: "<mouse 2>",
        3: "<break>",
        4: "<mouse 3>",
        5: "<mouse 4>",
        6: "<mouse 5>",
        8: "<backspace>",
        9: "<tab>",
        12: "<clear>",
        13: "<enter>",
        16: "<shift>",
        17: "<control>",
        18: "<alt>",
        19: "<pause>",
        20: "<caps-lock>",
        21: "<ime-hangul>",
        23: "<ime-junja>",
        24: "<ime-final>",
        25: "<ime-kanji>",
        27: "<escape>",
        28: "<ime-convert>",
        29: "<ime-nonconvert>",
        30: "<ime-accept>",
        31: "<ime-mode-change>",
        32: "<space>",
        33: "<page-up>",
        34: "<page-down>",
        35: "<end>",
        36: "<home>",
        37: "<left>",
        38: "<up>",
        39: "<right>",
        40: "<down>",
        41: "<select>",
        42: "<print>",
        43: "<execute>",
        44: "<snapshot>",
        45: "<insert>",
        46: "<delete>",
        47: "<help>",
        91: "<meta>",
        92: "<meta>",
        93: ID ? "<meta>" : "<menu>",
        95: "<sleep>",
        106: "<num-*>",
        107: "<num-+>",
        108: "<num-enter>",
        109: "<num--\x3e",
        110: "<num-.>",
        111: "<num-/>",
        144: "<num-lock>",
        145: "<scroll-lock>",
        160: "<shift-left>",
        161: "<shift-right>",
        162: "<control-left>",
        163: "<control-right>",
        164: "<alt-left>",
        165: "<alt-right>",
        166: "<browser-back>",
        167: "<browser-forward>",
        168: "<browser-refresh>",
        169: "<browser-stop>",
        170: "<browser-search>",
        171: "<browser-favorites>",
        172: "<browser-home>",
        173: ID && iD ? "-" : "<volume-mute>",
        174: "<volume-down>",
        175: "<volume-up>",
        176: "<next-track>",
        177: "<prev-track>",
        178: "<stop>",
        179: "<play-pause>",
        180: "<launch-mail>",
        181: "<launch-media-select>",
        182: "<launch-app 1>",
        183: "<launch-app 2>",
        186: ";",
        187: "=",
        188: ",",
        189: "-",
        190: ".",
        191: "/",
        192: "`",
        219: "[",
        220: "\\",
        221: "]",
        222: "'",
        223: "<meta>",
        224: "<meta>",
        226: "<alt-gr>",
        229: "<ime-process>",
        231: pD ? "`" : "<unicode>",
        246: "<attention>",
        247: "<crsel>",
        248: "<exsel>",
        249: "<erase-eof>",
        250: "<play>",
        251: "<zoom>",
        252: "<no-name>",
        253: "<pa-1>",
        254: "<clear>"
      };
    for (CD = 58; CD < 65; ++CD) fD[CD] = String.fromCharCode(CD);
    for (CD = 48; CD < 58; ++CD) fD[CD] = CD - 48 + "";
    for (CD = 65; CD < 91; ++CD) fD[CD] = String.fromCharCode(CD);
    for (CD = 96; CD < 106; ++CD) fD[CD] = "<num-" + (CD - 96) + ">";
    for (CD = 112; CD < 136; ++CD) fD[CD] = "F" + (CD - 111)
  },
  36010: (DD, CD, cD) => {
    function ID(DD, CD, cD, ID) {
      return !(cD && !DD.aimable) && (!CD || DD.gun && "head" !== ID)
    }

    function pD(DD) {
      return Math.max(.1 * DD, 1)
    }

    function iD(DD, CD) {
      return !DD && CD
    }
    cD.d(CD, {
      e: () => iD,
      g: () => pD,
      i: () => ID
    })
  },
  36018: (DD, CD, cD) => {
    cD.d(CD, {
      b: () => bD,
      c: () => fD
    });
    let ID = null;
    const pD = {
        crosshairAccuracy: [],
        turnDamageIndicators: []
      },
      iD = {
        crosshairAccuracy: DD => {
          const CD = pD.crosshairAccuracy.at(-1);
          CD ? CD.hook(DD) : ID = DD
        },
        turnDamageIndicators: DD => {
          var CD;
          null === (CD = pD.turnDamageIndicators.at(-1)) || void 0 === CD || CD.hook(DD)
        }
      };

    function fD(DD, CD) {
      const cD = {
          hook: CD
        },
        fD = pD[DD];
      if (fD.push(cD), "crosshairAccuracy" === DD && null !== ID) {
        const DD = ID;
        ID = null, iD.crosshairAccuracy(DD)
      }
      return () => {
        const DD = fD.indexOf(cD); - 1 !== DD && fD.splice(DD, 1)
      }
    }

    function bD() {
      return iD
    }
  },
  6409: (DD, CD, cD) => {
    cD.d(CD, {
      c: () => pD,
      d: () => iD
    });
    var ID = cD(36);
    const pD = "shaderPack";
    async function iD() {
      var DD;
      let CD = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
      return null !== (DD = await ID.f.getItem(pD, CD)) && void 0 !== DD ? DD : null
    }
  },
  8606: (DD, CD, cD) => {
    cD.d(CD, {
      b: () => iD,
      d: () => pD
    });
    let ID = !1;

    function pD() {
      ID = !0
    }

    function iD() {
      return ID
    }
  },
  35869: (DD, CD, cD) => {
    cD.r(CD), cD.d(CD, {
      InGameUi: () => gD.e,
      LobbyLeaderboard: () => XD.c,
      loadCharacterCustomisationUI: () => mD,
      loadCharacterPreview: () => nD,
      matchmakeAndPlay: () => UD,
      setUpGame: () => OD
    });
    var ID = cD(1243),
      pD = cD(162),
      iD = cD(16),
      fD = cD(35872),
      bD = cD(35875),
      QD = cD(1928),
      wD = cD(35906);

    function SD() {
      return !1 !== QD.d.get("canCustomiseChar")
    }
    let BD = !1;
    var yD = cD(1317),
      MD = cD(1250),
      tD = cD(712),
      ZD = cD(8606);
    var oD = cD(8602),
      vD = cD(3387),
      ND = cD(1779);
    var gD = cD(35912),
      XD = cD(36382);

    function mD() {
      return Promise.all([cD.e(281), cD.e(387)]).then((() => cD(40345)))
    }

    function nD() {
      return cD.e(282).then((() => cD(40352)))
    }

    function OD() {
      return (0, oD.g)()
    }
    BD || (BD = !0, document.addEventListener("keydown", (DD => {
        (0, wD.e)(DD, SD)
      }))),
      function(DD) {
        var CD;
        return !0 !== (null === DD || void 0 === DD ? void 0 : DD.saveData) && !/2g$/.test(null !== (CD = null === DD || void 0 === DD ? void 0 : DD.effectiveType) && void 0 !== CD ? CD : "")
      }(navigator.connection) && (0, tD.e)((() => {
        (0, ZD.b)() || Promise.all([cD.e(74), cD.e(132), cD.e(87), cD.e(55)]).then((() => cD(39831))).then((DD => {
          (0, ZD.b)() || DD.startLoadAheadOfJoin({
            joinStarted: ZD.b,
            language: MD.e.get().getCurrentLanguageCode()
          })
        }), (DD => {
          console.warn("[bloxd-wasm-client] the loads ahead of a join did not start: the join loads the client itself", DD)
        }))
      }));
    const PD = iD.d.get("router");
    null === PD ? console.warn("[bloxd-wasm-client] no router as the matchmaking chunk loads: the join's loads start with the join") : function DD(CD) {
      if ((0, ND.e)(CD.state.location.pathname)) return void(0, oD.c)().catch((() => {}));
      const cD = CD.subscribe((ID => {
        (0, ND.e)(ID.location.pathname) && (cD(), (0, vD.d)().then((() => {
          DD(CD)
        })))
      }))
    }(PD), (0, fD.c)();
    const HD = (0, bD.b)((async function(DD, CD) {
      let {
        place: cD,
        userContext: iD,
        direct: fD,
        rematch: bD
      } = DD;
      const QD = fD ? 1 / 0 : performance.now();
      let wD;
      try {
        wD = await (0, oD.c)()
      } catch (SD) {
        return console.error("The wasm client did not load:", SD), (0, yD.o)({
          websocketUrl: null
        }), ID.e.errorWithCode(String(SD), pD.o.CONNECT_TO_GAME_SERVER, {
          error: SD,
          severity: CD.aborted ? "low" : "medium",
          tc: CD.aborted
        })
      }
      return wD.playWasmGame({
        userContext: iD,
        place: cD,
        matchedAt: QD,
        rematch: bD
      }, CD)
    }));

    function UD() {
      return (0, oD.c)().catch((() => {})), HD(...arguments)
    }
  },
  8602: (DD, CD, cD) => {
    cD.d(CD, {
      c: () => SD,
      g: () => BD
    });
    var ID = cD(2946),
      pD = cD(2245),
      iD = cD(2981),
      fD = cD(4444),
      bD = cD(3314),
      QD = cD(8606);
    let wD = null;

    function SD() {
      return fD.d.cancelDownloadForJoin(), (0, bD.b)(), (0, pD.e)(), (0, QD.d)(), (0, iD.h)(), Promise.all([cD.e(69), cD.e(72), cD.e(71), cD.e(70), cD.e(83), cD.e(259), cD.e(199), cD.e(216), cD.e(237), cD.e(212), cD.e(46)]).then((() => cD(39760))).catch((() => {})), Promise.all([cD.e(74), cD.e(132), cD.e(87), cD.e(55)]).then((() => cD(39831))).then((DD => {
        let {
          startJoinLoad: CD
        } = DD;
        CD()
      }), (() => {})), wD ??= Promise.all([cD.e(71), cD.e(74), cD.e(129), cD.e(73), cD.e(132), cD.e(262), cD.e(186), cD.e(87), cD.e(86), cD.e(85), cD.e(212), cD.e(60)]).then((() => cD(39933))).then((DD => (DD.startWasmPlay(), DD.followPageUiPack((DD => {
        ID.e.showGamePack(DD)
      })), DD)), (DD => {
        throw wD = null, DD
      })), wD
    }

    function BD() {
      return Promise.all([cD.e(71), cD.e(74), cD.e(129), cD.e(73), cD.e(132), cD.e(262), cD.e(186), cD.e(87), cD.e(86), cD.e(85), cD.e(212), cD.e(60)]).then((() => cD(39933))).then((DD => {
        DD.startWasmPreviews(), DD.prefetchWasmPreviews()
      }))
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
  },
  36133: (DD, CD, cD) => {
    cD.d(CD, {
      c: () => fD,
      e: () => pD,
      g: () => ID
    });

    function ID(DD) {
      return DD.replace(/[_\-\s]*\d+$/, "") || DD
    }

    function pD(DD, CD, cD) {
      return cD <= 0 ? 0 : DD * cD / Math.max(CD, cD)
    }

    function iD(DD, CD) {
      const cD = DD.getDurationMs();
      return cD > 0 ? DD.loudness * Math.max(0, 1 - (CD - DD.startMs) / cD) : 0
    }
    class fD {
      constructor() {
        let DD = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 24,
          CD = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 6;
        this.maxVoices = DD, this.maxPerGroup = CD, this.voices = []
      }
      admit(DD) {
        if (this.voices = this.voices.filter((DD => DD.isAlive())), null !== DD.group) {
          const CD = this.voices.filter((CD => CD.group === DD.group));
          if (CD.length >= this.maxPerGroup && !this.dropLeastWorth(CD, DD)) return !1
        }
        return !(this.voices.length >= this.maxVoices && !this.dropLeastWorth(this.voices, DD)) && (this.voices.push(DD), !0)
      }
      dropLeastWorth(DD, CD) {
        let cD = null,
          ID = 1 / 0;
        for (const pD of DD) {
          if (!pD.canStop()) continue;
          const DD = iD(pD, CD.startMs);
          DD < ID && (cD = pD, ID = DD)
        }
        return !(!cD || CD.loudness < ID) && (this.voices.splice(this.voices.indexOf(cD), 1), cD.stop(), !0)
      }
    }
  },
  36144: (DD, CD, cD) => {
    cD.d(CD, {
      e: () => iD,
      f: () => fD,
      i: () => ID
    });
    class ID {
      constructor(DD) {
        this.multipliers = {}, this._onUpdate = void 0, this._onUpdate = DD
      }
      setMultiplierType(DD, CD) {
        var cD;
        this.multipliers[DD] = CD, null === (cD = this._onUpdate) || void 0 === cD || cD.call(this)
      }
      removeMultiplier(DD) {
        var CD;
        delete this.multipliers[DD], null === (CD = this._onUpdate) || void 0 === CD || CD.call(this)
      }
      getMultiplierType(DD) {
        return this.multipliers[DD]
      }
      getTotalMultipliedVal() {
        let DD = 1;
        for (const CD in this.multipliers) DD *= this.multipliers[CD];
        return DD
      }
    }
    class pD {
      constructor() {
        let DD = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
        this.booleans = {}, this._onUpdate = void 0, this._onUpdate = DD
      }
      setBooleanType(DD, CD) {
        const cD = this._getTotalBooleanVal();
        this.booleans[DD] = !!CD;
        const ID = this.getTotalBooleanVal();
        var pD;
        ID !== cD && (null === (pD = this._onUpdate) || void 0 === pD || pD.call(this, ID, this.booleans));
        return ID
      }
      removeBoolean(DD) {
        const CD = this._getTotalBooleanVal();
        delete this.booleans[DD];
        const cD = this._getTotalBooleanVal();
        var ID;
        null !== cD && cD !== CD && (null === (ID = this._onUpdate) || void 0 === ID || ID.call(this, cD, this.booleans));
        return null !== cD && void 0 !== cD && cD
      }
      getBooleanType(DD) {
        return this.booleans[DD]
      }
      getTotalBooleanVal() {
        throw new Error("This is an abstract class, use BooleanAndCombinator")
      }
      forceUpdate() {
        var DD;
        null === (DD = this._onUpdate) || void 0 === DD || DD.call(this, this.getTotalBooleanVal(), this.booleans)
      }
      _getTotalBooleanVal() {
        throw new Error("This is an abstract class, use BooleanAndCombinator")
      }
    }
    class iD extends pD {
      getTotalBooleanVal() {
        const DD = this._getTotalBooleanVal();
        if (null === DD) throw new Error("Should not be gotten before at least 1 type has been initialised");
        return DD
      }
      _getTotalBooleanVal() {
        let DD = !1,
          CD = !0;
        for (const cD in this.booleans) DD = !0, CD &&= this.booleans[cD];
        return DD ? CD : null
      }
    }
    class fD extends pD {
      getTotalBooleanVal() {
        const DD = this._getTotalBooleanVal();
        if (null === DD) throw new Error("Should not be gotten before at least 1 type has been initialised");
        return DD
      }
      _getTotalBooleanVal() {
        let DD = !1,
          CD = !1;
        for (const cD in this.booleans) DD = !0, CD ||= this.booleans[cD];
        return DD ? CD : null
      }
    }
  },
  9237: (DD, CD, cD) => {
    cD.d(CD, {
      c: () => pD,
      g: () => iD
    });
    var ID = cD(9189);
    const pD = "Air",
      iD = Object.freeze(new ID.d(pD, 0, "", null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null))
  },
  36139: (DD, CD, cD) => {
    cD.d(CD, {
      c: () => iD,
      f: () => ID,
      h: () => pD
    });
    const ID = 15,
      pD = 3,
      iD = 30
  }
};
Object.freeze(modules);
for (const DD in modules) Object.freeze(modules[DD]);