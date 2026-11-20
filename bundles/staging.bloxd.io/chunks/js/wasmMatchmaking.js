/*! For license information please see q3ynmh.wasmMatchmaking.9182a1c1.chunk.js.LICENSE.txt */
export const id = 59;
export const ids = [59, 91];
export const modules = {
  36381: (uu, Ru) => {
    function yu(uu) {
      if (uu && "object" === typeof uu) {
        var Ru = uu.which || uu.keyCode || uu.charCode;
        Ru && (uu = Ru)
      }
      if ("number" === typeof uu) return mu[uu];
      var yu, Qu = String(uu);
      return (yu = Eu[Qu.toLowerCase()]) ? yu : (yu = Ku[Qu.toLowerCase()]) || (1 === Qu.length ? Qu.charCodeAt(0) : void 0)
    }
    yu.isEventKey = function(uu, Ru) {
      if (uu && "object" === typeof uu) {
        var yu = uu.which || uu.keyCode || uu.charCode;
        if (null === yu || void 0 === yu) return !1;
        if ("string" === typeof Ru) {
          var Qu;
          if (Qu = Eu[Ru.toLowerCase()]) return Qu === yu;
          if (Qu = Ku[Ru.toLowerCase()]) return Qu === yu
        } else if ("number" === typeof Ru) return Ru === yu;
        return !1
      }
    };
    var Eu = (Ru = uu.exports = yu).code = Ru.codes = {
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
      Ku = Ru.aliases = {
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
    for (Qu = 97; Qu < 123; Qu++) Eu[String.fromCharCode(Qu)] = Qu - 32;
    for (var Qu = 48; Qu < 58; Qu++) Eu[Qu - 48] = Qu;
    for (Qu = 1; Qu < 13; Qu++) Eu["f" + Qu] = Qu + 111;
    for (Qu = 0; Qu < 10; Qu++) Eu["numpad " + Qu] = Qu + 96;
    var mu = Ru.names = Ru.title = {};
    for (Qu in Eu) mu[Eu[Qu]] = Qu;
    for (var Ju in Ku) Eu[Ju] = Ku[Ju]
  },
  36539: (uu, Ru, yu) => {
    yu.d(Ru, {
      b: () => mu
    });
    var Eu = yu(64);
    const Ku = Eu.useLayoutEffect;
    const Qu = function(uu) {
      var Ru = (0, Eu.useRef)(uu);
      return Ku((function() {
        Ru.current = uu
      })), Ru
    };
    var mu = function(uu) {
      var Ru = Qu(uu);
      (0, Eu.useEffect)((function() {
        var uu = function(uu) {
          var yu;
          if (null != Ru.current && (yu = Ru.current(uu)), uu.defaultPrevented && (uu.returnValue = ""), "string" === typeof yu) return uu.returnValue = yu, yu
        };
        return window.addEventListener("beforeunload", uu),
          function() {
            window.removeEventListener("beforeunload", uu)
          }
      }), [])
    }
  },
  36422: uu => {
    var Ru, yu = "undefined" !== typeof window ? window.navigator.userAgent : "",
      Eu = /OS X/.test(yu),
      Ku = /Opera/.test(yu),
      Qu = !/like Gecko/.test(yu) && !Ku,
      mu = uu.exports = {
        0: Eu ? "<menu>" : "<UNK>",
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
        93: Eu ? "<meta>" : "<menu>",
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
        173: Eu && Qu ? "-" : "<volume-mute>",
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
        231: Ku ? "`" : "<unicode>",
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
    for (Ru = 58; Ru < 65; ++Ru) mu[Ru] = String.fromCharCode(Ru);
    for (Ru = 48; Ru < 58; ++Ru) mu[Ru] = Ru - 48 + "";
    for (Ru = 65; Ru < 91; ++Ru) mu[Ru] = String.fromCharCode(Ru);
    for (Ru = 96; Ru < 106; ++Ru) mu[Ru] = "<num-" + (Ru - 96) + ">";
    for (Ru = 112; Ru < 136; ++Ru) mu[Ru] = "F" + (Ru - 111)
  },
  36457: (uu, Ru, yu) => {
    function Eu(uu, Ru, yu, Eu) {
      return !(yu && !uu.aimable) && (!Ru || uu.gun && "head" !== Eu)
    }

    function Ku(uu) {
      return Math.max(.1 * uu, 1)
    }

    function Qu(uu, Ru) {
      return !uu && Ru
    }
    yu.d(Ru, {
      c: () => Qu,
      e: () => Ku,
      g: () => Eu
    })
  },
  36459: (uu, Ru, yu) => {
    yu.d(Ru, {
      c: () => Ju,
      f: () => mu
    });
    let Eu = null;
    const Ku = {
        crosshairAccuracy: [],
        turnDamageIndicators: []
      },
      Qu = {
        crosshairAccuracy: uu => {
          const Ru = Ku.crosshairAccuracy.at(-1);
          Ru ? Ru.hook(uu) : Eu = uu
        },
        turnDamageIndicators: uu => {
          var Ru;
          null === (Ru = Ku.turnDamageIndicators.at(-1)) || void 0 === Ru || Ru.hook(uu)
        }
      };

    function mu(uu, Ru) {
      const yu = {
          hook: Ru
        },
        mu = Ku[uu];
      if (mu.push(yu), "crosshairAccuracy" === uu && null !== Eu) {
        const uu = Eu;
        Eu = null, Qu.crosshairAccuracy(uu)
      }
      return () => {
        const uu = mu.indexOf(yu); - 1 !== uu && mu.splice(uu, 1)
      }
    }

    function Ju() {
      return Qu
    }
  },
  6436: (uu, Ru, yu) => {
    yu.d(Ru, {
      e: () => Ku,
      h: () => Qu
    });
    var Eu = yu(47);
    const Ku = "shaderPack";
    async function Qu() {
      var uu;
      let Ru = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
      return null !== (uu = await Eu.f.getItem(Ku, Ru)) && void 0 !== uu ? uu : null
    }
  },
  8663: (uu, Ru, yu) => {
    yu.d(Ru, {
      c: () => Qu,
      f: () => Ku
    });
    let Eu = !1;

    function Ku() {
      Eu = !0
    }

    function Qu() {
      return Eu
    }
  },
  36300: (uu, Ru, yu) => {
    yu.r(Ru), yu.d(Ru, {
      InGameUi: () => Hu.c,
      LobbyLeaderboard: () => du.b,
      loadCharacterCustomisationUI: () => bu,
      loadCharacterPreview: () => Cu,
      matchmakeAndPlay: () => Du,
      setUpGame: () => ku
    });
    var Eu = yu(1217),
      Ku = yu(174),
      Qu = yu(27),
      mu = yu(36304),
      Ju = yu(36312),
      Nu = yu(1878),
      Xu = yu(36332);

    function Vu() {
      return !1 !== Nu.b.get("canCustomiseChar")
    }
    let ru = !1;
    var Bu = yu(1280),
      xu = yu(1224),
      Su = yu(684),
      pu = yu(8663);
    var Tu = yu(8654),
      Wu = yu(3394),
      ju = yu(1718);
    var Hu = yu(36344),
      du = yu(36766);

    function bu() {
      return Promise.all([yu.e(281), yu.e(387)]).then((() => yu(40877)))
    }

    function Cu() {
      return yu.e(282).then((() => yu(40884)))
    }

    function ku() {
      return (0, Tu.e)()
    }
    ru || (ru = !0, document.addEventListener("keydown", (uu => {
        (0, Xu.d)(uu, Vu)
      }))),
      function(uu) {
        var Ru;
        return !0 !== (null === uu || void 0 === uu ? void 0 : uu.saveData) && !/2g$/.test(null !== (Ru = null === uu || void 0 === uu ? void 0 : uu.effectiveType) && void 0 !== Ru ? Ru : "")
      }(navigator.connection) && (0, Su.c)((() => {
        (0, pu.c)() || Promise.all([yu.e(74), yu.e(132), yu.e(87), yu.e(55)]).then((() => yu(40334))).then((uu => {
          (0, pu.c)() || uu.startLoadAheadOfJoin({
            joinStarted: pu.c,
            language: xu.f.get().getCurrentLanguageCode()
          })
        }), (uu => {
          console.warn("[bloxd-wasm-client] the loads ahead of a join did not start: the join loads the client itself", uu)
        }))
      }));
    const eu = Qu.d.get("router");
    null === eu ? console.warn("[bloxd-wasm-client] no router as the matchmaking chunk loads: the join's loads start with the join") : function uu(Ru) {
      if ((0, ju.c)(Ru.state.location.pathname)) return void(0, Tu.c)().catch((() => {}));
      const yu = Ru.subscribe((Eu => {
        (0, ju.c)(Eu.location.pathname) && (yu(), (0, Wu.b)().then((() => {
          uu(Ru)
        })))
      }))
    }(eu), (0, mu.c)();
    const Au = (0, Ju.e)((async function(uu, Ru) {
      let {
        place: yu,
        userContext: Qu,
        direct: mu,
        rematch: Ju
      } = uu;
      const Nu = mu ? 1 / 0 : performance.now();
      let Xu;
      try {
        Xu = await (0, Tu.c)()
      } catch (Vu) {
        return console.error("The wasm client did not load:", Vu), (0, Bu.n)({
          websocketUrl: null
        }), Eu.c.errorWithCode(String(Vu), Ku.p.CONNECT_TO_GAME_SERVER, {
          error: Vu,
          severity: Ru.aborted ? "low" : "medium",
          Ty: Ru.aborted
        })
      }
      return Xu.playWasmGame({
        userContext: Qu,
        place: yu,
        matchedAt: Nu,
        rematch: Ju
      }, Ru)
    }));

    function Du() {
      return (0, Tu.c)().catch((() => {})), Au(...arguments)
    }
  },
  8654: (uu, Ru, yu) => {
    yu.d(Ru, {
      c: () => Vu,
      e: () => ru
    });
    var Eu = yu(2936),
      Ku = yu(2184),
      Qu = yu(2990),
      mu = yu(4427),
      Ju = yu(3318),
      Nu = yu(8663);
    let Xu = null;

    function Vu() {
      return mu.c.cancelDownloadForJoin(), (0, Ju.c)(), (0, Ku.g)(), (0, Nu.f)(), (0, Qu.i)(), Promise.all([yu.e(69), yu.e(72), yu.e(71), yu.e(70), yu.e(83), yu.e(259), yu.e(199), yu.e(216), yu.e(237), yu.e(212), yu.e(46)]).then((() => yu(40253))).catch((() => {})), Promise.all([yu.e(74), yu.e(132), yu.e(87), yu.e(55)]).then((() => yu(40334))).then((uu => {
        let {
          startJoinLoad: Ru
        } = uu;
        Ru()
      }), (() => {})), Xu ??= Promise.all([yu.e(71), yu.e(74), yu.e(129), yu.e(73), yu.e(132), yu.e(262), yu.e(186), yu.e(87), yu.e(86), yu.e(85), yu.e(212), yu.e(60)]).then((() => yu(40418))).then((uu => (uu.startWasmPlay(), uu.followPageUiPack((uu => {
        Eu.c.showGamePack(uu)
      })), uu)), (uu => {
        throw Xu = null, uu
      })), Xu
    }

    function ru() {
      return Promise.all([yu.e(71), yu.e(74), yu.e(129), yu.e(73), yu.e(132), yu.e(262), yu.e(186), yu.e(87), yu.e(86), yu.e(85), yu.e(212), yu.e(60)]).then((() => yu(40418))).then((uu => {
        uu.startWasmPreviews(), uu.prefetchWasmPreviews()
      }))
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
  },
  36560: (uu, Ru, yu) => {
    yu.d(Ru, {
      c: () => mu,
      d: () => Ku,
      g: () => Eu
    });

    function Eu(uu) {
      return uu.replace(/[_\-\s]*\d+$/, "") || uu
    }

    function Ku(uu, Ru, yu) {
      return yu <= 0 ? 0 : uu * yu / Math.max(Ru, yu)
    }

    function Qu(uu, Ru) {
      const yu = uu.getDurationMs();
      return yu > 0 ? uu.loudness * Math.max(0, 1 - (Ru - uu.startMs) / yu) : 0
    }
    class mu {
      constructor() {
        let uu = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 24,
          Ru = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 6;
        this.maxVoices = uu, this.maxPerGroup = Ru, this.voices = []
      }
      admit(uu) {
        if (this.voices = this.voices.filter((uu => uu.isAlive())), null !== uu.group) {
          const Ru = this.voices.filter((Ru => Ru.group === uu.group));
          if (Ru.length >= this.maxPerGroup && !this.dropLeastWorth(Ru, uu)) return !1
        }
        return !(this.voices.length >= this.maxVoices && !this.dropLeastWorth(this.voices, uu)) && (this.voices.push(uu), !0)
      }
      dropLeastWorth(uu, Ru) {
        let yu = null,
          Eu = 1 / 0;
        for (const Ku of uu) {
          if (!Ku.canStop()) continue;
          const uu = Qu(Ku, Ru.startMs);
          uu < Eu && (yu = Ku, Eu = uu)
        }
        return !(!yu || Ru.loudness < Eu) && (this.voices.splice(this.voices.indexOf(yu), 1), yu.stop(), !0)
      }
    }
  },
  36571: (uu, Ru, yu) => {
    yu.d(Ru, {
      e: () => Qu,
      g: () => mu,
      h: () => Eu
    });
    class Eu {
      constructor(uu) {
        this.multipliers = {}, this._onUpdate = void 0, this._onUpdate = uu
      }
      setMultiplierType(uu, Ru) {
        var yu;
        this.multipliers[uu] = Ru, null === (yu = this._onUpdate) || void 0 === yu || yu.call(this)
      }
      removeMultiplier(uu) {
        var Ru;
        delete this.multipliers[uu], null === (Ru = this._onUpdate) || void 0 === Ru || Ru.call(this)
      }
      getMultiplierType(uu) {
        return this.multipliers[uu]
      }
      getTotalMultipliedVal() {
        let uu = 1;
        for (const Ru in this.multipliers) uu *= this.multipliers[Ru];
        return uu
      }
    }
    class Ku {
      constructor() {
        let uu = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
        this.booleans = {}, this._onUpdate = void 0, this._onUpdate = uu
      }
      setBooleanType(uu, Ru) {
        const yu = this._getTotalBooleanVal();
        this.booleans[uu] = !!Ru;
        const Eu = this.getTotalBooleanVal();
        var Ku;
        Eu !== yu && (null === (Ku = this._onUpdate) || void 0 === Ku || Ku.call(this, Eu, this.booleans));
        return Eu
      }
      removeBoolean(uu) {
        const Ru = this._getTotalBooleanVal();
        delete this.booleans[uu];
        const yu = this._getTotalBooleanVal();
        var Eu;
        null !== yu && yu !== Ru && (null === (Eu = this._onUpdate) || void 0 === Eu || Eu.call(this, yu, this.booleans));
        return null !== yu && void 0 !== yu && yu
      }
      getBooleanType(uu) {
        return this.booleans[uu]
      }
      getTotalBooleanVal() {
        throw new Error("This is an abstract class, use BooleanAndCombinator")
      }
      forceUpdate() {
        var uu;
        null === (uu = this._onUpdate) || void 0 === uu || uu.call(this, this.getTotalBooleanVal(), this.booleans)
      }
      _getTotalBooleanVal() {
        throw new Error("This is an abstract class, use BooleanAndCombinator")
      }
    }
    class Qu extends Ku {
      getTotalBooleanVal() {
        const uu = this._getTotalBooleanVal();
        if (null === uu) throw new Error("Should not be gotten before at least 1 type has been initialised");
        return uu
      }
      _getTotalBooleanVal() {
        let uu = !1,
          Ru = !0;
        for (const yu in this.booleans) uu = !0, Ru &&= this.booleans[yu];
        return uu ? Ru : null
      }
    }
    class mu extends Ku {
      getTotalBooleanVal() {
        const uu = this._getTotalBooleanVal();
        if (null === uu) throw new Error("Should not be gotten before at least 1 type has been initialised");
        return uu
      }
      _getTotalBooleanVal() {
        let uu = !1,
          Ru = !1;
        for (const yu in this.booleans) uu = !0, Ru ||= this.booleans[yu];
        return uu ? Ru : null
      }
    }
  },
  9247: (uu, Ru, yu) => {
    yu.d(Ru, {
      e: () => Ku,
      h: () => Qu
    });
    var Eu = yu(9205);
    const Ku = "Air",
      Qu = Object.freeze(new Eu.e(Ku, 0, "", null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null))
  },
  36565: (uu, Ru, yu) => {
    yu.d(Ru, {
      d: () => Qu,
      e: () => Eu,
      h: () => Ku
    });
    const Eu = 15,
      Ku = 3,
      Qu = 30
  }
};
Object.freeze(modules);
for (const uu in modules) Object.freeze(modules[uu]);