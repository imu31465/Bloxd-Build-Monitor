/*! For license information please see eulrrq.wasmMatchmaking.1a3f027d.chunk.js.LICENSE.txt */
export const id = 59;
export const ids = [59, 91];
export const modules = {
  36127: (UU, RU) => {
    function gU(UU) {
      if (UU && "object" === typeof UU) {
        var RU = UU.which || UU.keyCode || UU.charCode;
        RU && (UU = RU)
      }
      if ("number" === typeof UU) return PU[UU];
      var gU, EU = String(UU);
      return (gU = tU[EU.toLowerCase()]) ? gU : (gU = pU[EU.toLowerCase()]) || (1 === EU.length ? EU.charCodeAt(0) : void 0)
    }
    gU.isEventKey = function(UU, RU) {
      if (UU && "object" === typeof UU) {
        var gU = UU.which || UU.keyCode || UU.charCode;
        if (null === gU || void 0 === gU) return !1;
        if ("string" === typeof RU) {
          var EU;
          if (EU = tU[RU.toLowerCase()]) return EU === gU;
          if (EU = pU[RU.toLowerCase()]) return EU === gU
        } else if ("number" === typeof RU) return RU === gU;
        return !1
      }
    };
    var tU = (RU = UU.exports = gU).code = RU.codes = {
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
      pU = RU.aliases = {
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
    for (EU = 97; EU < 123; EU++) tU[String.fromCharCode(EU)] = EU - 32;
    for (var EU = 48; EU < 58; EU++) tU[EU - 48] = EU;
    for (EU = 1; EU < 13; EU++) tU["f" + EU] = EU + 111;
    for (EU = 0; EU < 10; EU++) tU["numpad " + EU] = EU + 96;
    var PU = RU.names = RU.title = {};
    for (EU in tU) PU[tU[EU]] = EU;
    for (var TU in pU) tU[TU] = pU[TU]
  },
  36292: (UU, RU, gU) => {
    gU.d(RU, {
      d: () => PU
    });
    var tU = gU(56);
    const pU = tU.useLayoutEffect;
    const EU = function(UU) {
      var RU = (0, tU.useRef)(UU);
      return pU((function() {
        RU.current = UU
      })), RU
    };
    var PU = function(UU) {
      var RU = EU(UU);
      (0, tU.useEffect)((function() {
        var UU = function(UU) {
          var gU;
          if (null != RU.current && (gU = RU.current(UU)), UU.defaultPrevented && (UU.returnValue = ""), "string" === typeof gU) return UU.returnValue = gU, gU
        };
        return window.addEventListener("beforeunload", UU),
          function() {
            window.removeEventListener("beforeunload", UU)
          }
      }), [])
    }
  },
  36174: UU => {
    var RU, gU = "undefined" !== typeof window ? window.navigator.userAgent : "",
      tU = /OS X/.test(gU),
      pU = /Opera/.test(gU),
      EU = !/like Gecko/.test(gU) && !pU,
      PU = UU.exports = {
        0: tU ? "<menu>" : "<UNK>",
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
        93: tU ? "<meta>" : "<menu>",
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
        173: tU && EU ? "-" : "<volume-mute>",
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
        231: pU ? "`" : "<unicode>",
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
    for (RU = 58; RU < 65; ++RU) PU[RU] = String.fromCharCode(RU);
    for (RU = 48; RU < 58; ++RU) PU[RU] = RU - 48 + "";
    for (RU = 65; RU < 91; ++RU) PU[RU] = String.fromCharCode(RU);
    for (RU = 96; RU < 106; ++RU) PU[RU] = "<num-" + (RU - 96) + ">";
    for (RU = 112; RU < 136; ++RU) PU[RU] = "F" + (RU - 111)
  },
  36203: (UU, RU, gU) => {
    function tU(UU, RU, gU, tU) {
      return !(gU && !UU.aimable) && (!RU || UU.gun && "head" !== tU)
    }

    function pU(UU) {
      return Math.max(.1 * UU, 1)
    }

    function EU(UU, RU) {
      return !UU && RU
    }
    gU.d(RU, {
      b: () => EU,
      d: () => pU,
      e: () => tU
    })
  },
  36209: (UU, RU, gU) => {
    gU.d(RU, {
      c: () => TU,
      f: () => PU
    });
    let tU = null;
    const pU = {
        crosshairAccuracy: [],
        turnDamageIndicators: []
      },
      EU = {
        crosshairAccuracy: UU => {
          const RU = pU.crosshairAccuracy.at(-1);
          RU ? RU.hook(UU) : tU = UU
        },
        turnDamageIndicators: UU => {
          var RU;
          null === (RU = pU.turnDamageIndicators.at(-1)) || void 0 === RU || RU.hook(UU)
        }
      };

    function PU(UU, RU) {
      const gU = {
          hook: RU
        },
        PU = pU[UU];
      if (PU.push(gU), "crosshairAccuracy" === UU && null !== tU) {
        const UU = tU;
        tU = null, EU.crosshairAccuracy(UU)
      }
      return () => {
        const UU = PU.indexOf(gU); - 1 !== UU && PU.splice(UU, 1)
      }
    }

    function TU() {
      return EU
    }
  },
  6339: (UU, RU, gU) => {
    gU.d(RU, {
      b: () => pU,
      e: () => EU
    });
    var tU = gU(34);
    const pU = "shaderPack";
    async function EU() {
      var UU;
      let RU = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
      return null !== (UU = await tU.g.getItem(pU, RU)) && void 0 !== UU ? UU : null
    }
  },
  8536: (UU, RU, gU) => {
    gU.d(RU, {
      b: () => EU,
      e: () => pU
    });
    let tU = !1;

    function pU() {
      tU = !0
    }

    function EU() {
      return tU
    }
  },
  36018: (UU, RU, gU) => {
    gU.r(RU), gU.d(RU, {
      InGameUi: () => fU.e,
      LobbyLeaderboard: () => xU.d,
      loadCharacterCustomisationUI: () => mU,
      loadCharacterPreview: () => IU,
      matchmakeAndPlay: () => bU,
      setUpGame: () => JU
    });
    var tU = gU(1240),
      pU = gU(165),
      EU = gU(21),
      PU = gU(36022),
      TU = gU(36024),
      qU = gU(1821),
      KU = gU(36066);

    function cU() {
      return !1 !== qU.b.get("canCustomiseChar")
    }
    let GU = !1;
    var jU = gU(1316),
      uU = gU(1249),
      CU = gU(668),
      hU = gU(8536);
    var QU = gU(8529),
      eU = gU(3262),
      WU = gU(1688);
    var fU = gU(36081),
      xU = gU(36531);

    function mU() {
      return Promise.all([gU.e(281), gU.e(387)]).then((() => gU(40669)))
    }

    function IU() {
      return gU.e(282).then((() => gU(40675)))
    }

    function JU() {
      return (0, QU.f)()
    }
    GU || (GU = !0, document.addEventListener("keydown", (UU => {
        (0, KU.b)(UU, cU)
      }))),
      function(UU) {
        var RU;
        return !0 !== (null === UU || void 0 === UU ? void 0 : UU.saveData) && !/2g$/.test(null !== (RU = null === UU || void 0 === UU ? void 0 : UU.effectiveType) && void 0 !== RU ? RU : "")
      }(navigator.connection) && (0, CU.e)((() => {
        (0, hU.b)() || Promise.all([gU.e(74), gU.e(132), gU.e(87), gU.e(55)]).then((() => gU(40145))).then((UU => {
          (0, hU.b)() || UU.startLoadAheadOfJoin({
            joinStarted: hU.b,
            language: uU.g.get().getCurrentLanguageCode()
          })
        }), (UU => {
          console.warn("[bloxd-wasm-client] the loads ahead of a join did not start: the join loads the client itself", UU)
        }))
      }));
    const wU = EU.b.get("router");
    null === wU ? console.warn("[bloxd-wasm-client] no router as the matchmaking chunk loads: the join's loads start with the join") : function UU(RU) {
      if ((0, WU.c)(RU.state.location.pathname)) return void(0, QU.d)().catch((() => {}));
      const gU = RU.subscribe((tU => {
        (0, WU.c)(tU.location.pathname) && (gU(), (0, eU.e)().then((() => {
          UU(RU)
        })))
      }))
    }(wU), (0, PU.c)();
    const nU = (0, TU.e)((async function(UU, RU) {
      let {
        place: gU,
        userContext: EU,
        direct: PU,
        rematch: TU
      } = UU;
      const qU = PU ? 1 / 0 : performance.now();
      let KU;
      try {
        KU = await (0, QU.d)()
      } catch (cU) {
        return console.error("The wasm client did not load:", cU), (0, jU.m)({
          websocketUrl: null
        }), tU.c.errorWithCode(String(cU), pU.l.CONNECT_TO_GAME_SERVER, {
          error: cU,
          severity: RU.aborted ? "low" : "medium",
          cg: RU.aborted
        })
      }
      return KU.playWasmGame({
        userContext: EU,
        place: gU,
        matchedAt: qU,
        rematch: TU
      }, RU)
    }));

    function bU() {
      return (0, QU.d)().catch((() => {})), nU(...arguments)
    }
  },
  8529: (UU, RU, gU) => {
    gU.d(RU, {
      d: () => cU,
      f: () => GU
    });
    var tU = gU(2840),
      pU = gU(2116),
      EU = gU(2886),
      PU = gU(4310),
      TU = gU(3194),
      qU = gU(8536);
    let KU = null;

    function cU() {
      return PU.d.cancelDownloadForJoin(), (0, TU.d)(), (0, pU.g)(), (0, qU.e)(), (0, EU.f)(), Promise.all([gU.e(69), gU.e(72), gU.e(71), gU.e(70), gU.e(83), gU.e(259), gU.e(199), gU.e(216), gU.e(237), gU.e(212), gU.e(46)]).then((() => gU(40061))).catch((() => {})), Promise.all([gU.e(74), gU.e(132), gU.e(87), gU.e(55)]).then((() => gU(40145))).then((UU => {
        let {
          startJoinLoad: RU
        } = UU;
        RU()
      }), (() => {})), KU ??= Promise.all([gU.e(71), gU.e(74), gU.e(129), gU.e(73), gU.e(132), gU.e(262), gU.e(186), gU.e(87), gU.e(86), gU.e(85), gU.e(212), gU.e(60)]).then((() => gU(40241))).then((UU => (UU.startWasmPlay(), UU.followPageUiPack((UU => {
        tU.e.showGamePack(UU)
      })), UU)), (UU => {
        throw KU = null, UU
      })), KU
    }

    function GU() {
      return Promise.all([gU.e(71), gU.e(74), gU.e(129), gU.e(73), gU.e(132), gU.e(262), gU.e(186), gU.e(87), gU.e(86), gU.e(85), gU.e(212), gU.e(60)]).then((() => gU(40241))).then((UU => {
        UU.startWasmPreviews(), UU.prefetchWasmPreviews()
      }))
    }
  },
  4512: (UU, RU, gU) => {
    gU.r(RU), gU.d(RU, {
      Howl: () => pU.Howl,
      Howler: () => pU.Howler,
      iosAudio: () => qU,
      musicOutput: () => QU,
      readyAudioContext: () => eU
    });
    var tU, pU = gU(4518),
      EU = gU(96);
    const PU = pU.Howler;
    let TU;

    function qU() {
      return TU ??= "ios" === (0, EU.getOperatingSystem)(), TU
    }

    function KU() {
      var UU, RU;
      if (PU.ctx || !PU.usingWebAudio || "undefined" === typeof AudioContext || !qU()) return;
      const gU = navigator.audioSession;
      let tU;
      "auto" === (null === gU || void 0 === gU ? void 0 : gU.type) && (gU.type = "ambient");
      try {
        tU = new AudioContext({
          sampleRate: 44100
        })
      } catch {
        return
      }
      const pU = tU.createGain();
      pU.gain.setValueAtTime(PU._muted ? 0 : null !== (UU = PU._volume) && void 0 !== UU ? UU : 1, tU.currentTime), pU.connect(tU.destination), PU.ctx = tU, PU.masterGain = pU, null === (RU = PU._setup) || void 0 === RU || RU.call(PU)
    }
    PU._mobileUnloaded = !0;
    const cU = PU.volume.bind(pU.Howler);
    PU.volume = function() {
      return KU(), cU(...arguments)
    };
    const GU = PU.mute.bind(pU.Howler);
    PU.mute = UU => (KU(), GU(UU));
    const jU = pU.Howl.prototype,
      uU = jU.init;
    jU.init = function(UU) {
      return KU(), uU.call(this, UU)
    };
    let CU = 0;
    const hU = null === (tU = PU._autoSuspend) || void 0 === tU ? void 0 : tU.bind(pU.Howler);

    function QU() {
      eU();
      const {
        ctx: UU,
        masterGain: RU
      } = PU;
      return UU && RU ? {
        ctx: UU,
        destination: RU,
        holdAwake: UU => {
          var RU, gU;
          (CU += UU ? 1 : -1, UU) ? null === (RU = PU._autoResume) || void 0 === RU || RU.call(PU): null === (gU = PU._autoSuspend) || void 0 === gU || gU.call(PU)
        },
        wake: () => {
          var RU;
          "running" !== UU.state && (null === (RU = PU._autoResume) || void 0 === RU || RU.call(PU), UU.resume().catch((() => {})))
        }
      } : null
    }

    function eU() {
      var UU;
      (PU.volume(), PU.ctx && PU.autoUnlock) && (null === (UU = PU._unlockAudio) || void 0 === UU || UU.call(PU))
    }
    hU && (PU._autoSuspend = () => CU > 0 ? pU.Howler : hU())
  },
  36319: (UU, RU, gU) => {
    gU.d(RU, {
      b: () => PU,
      f: () => pU,
      g: () => tU
    });

    function tU(UU) {
      return UU.replace(/[_\-\s]*\d+$/, "") || UU
    }

    function pU(UU, RU, gU) {
      return gU <= 0 ? 0 : UU * gU / Math.max(RU, gU)
    }

    function EU(UU, RU) {
      const gU = UU.getDurationMs();
      return gU > 0 ? UU.loudness * Math.max(0, 1 - (RU - UU.startMs) / gU) : 0
    }
    class PU {
      constructor() {
        let UU = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 24,
          RU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 6;
        this.maxVoices = UU, this.maxPerGroup = RU, this.voices = []
      }
      admit(UU) {
        if (this.voices = this.voices.filter((UU => UU.isAlive())), null !== UU.group) {
          const RU = this.voices.filter((RU => RU.group === UU.group));
          if (RU.length >= this.maxPerGroup && !this.dropLeastWorth(RU, UU)) return !1
        }
        return !(this.voices.length >= this.maxVoices && !this.dropLeastWorth(this.voices, UU)) && (this.voices.push(UU), !0)
      }
      dropLeastWorth(UU, RU) {
        let gU = null,
          tU = 1 / 0;
        for (const pU of UU) {
          if (!pU.canStop()) continue;
          const UU = EU(pU, RU.startMs);
          UU < tU && (gU = pU, tU = UU)
        }
        return !(!gU || RU.loudness < tU) && (this.voices.splice(this.voices.indexOf(gU), 1), gU.stop(), !0)
      }
    }
  },
  36329: (UU, RU, gU) => {
    gU.d(RU, {
      b: () => EU,
      d: () => PU,
      e: () => tU
    });
    class tU {
      constructor(UU) {
        this.multipliers = {}, this._onUpdate = void 0, this._onUpdate = UU
      }
      setMultiplierType(UU, RU) {
        var gU;
        this.multipliers[UU] = RU, null === (gU = this._onUpdate) || void 0 === gU || gU.call(this)
      }
      removeMultiplier(UU) {
        var RU;
        delete this.multipliers[UU], null === (RU = this._onUpdate) || void 0 === RU || RU.call(this)
      }
      getMultiplierType(UU) {
        return this.multipliers[UU]
      }
      getTotalMultipliedVal() {
        let UU = 1;
        for (const RU in this.multipliers) UU *= this.multipliers[RU];
        return UU
      }
    }
    class pU {
      constructor() {
        let UU = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
        this.booleans = {}, this._onUpdate = void 0, this._onUpdate = UU
      }
      setBooleanType(UU, RU) {
        const gU = this._getTotalBooleanVal();
        this.booleans[UU] = !!RU;
        const tU = this.getTotalBooleanVal();
        var pU;
        tU !== gU && (null === (pU = this._onUpdate) || void 0 === pU || pU.call(this, tU, this.booleans));
        return tU
      }
      removeBoolean(UU) {
        const RU = this._getTotalBooleanVal();
        delete this.booleans[UU];
        const gU = this._getTotalBooleanVal();
        var tU;
        null !== gU && gU !== RU && (null === (tU = this._onUpdate) || void 0 === tU || tU.call(this, gU, this.booleans));
        return null !== gU && void 0 !== gU && gU
      }
      getBooleanType(UU) {
        return this.booleans[UU]
      }
      getTotalBooleanVal() {
        throw new Error("This is an abstract class, use BooleanAndCombinator")
      }
      forceUpdate() {
        var UU;
        null === (UU = this._onUpdate) || void 0 === UU || UU.call(this, this.getTotalBooleanVal(), this.booleans)
      }
      _getTotalBooleanVal() {
        throw new Error("This is an abstract class, use BooleanAndCombinator")
      }
    }
    class EU extends pU {
      getTotalBooleanVal() {
        const UU = this._getTotalBooleanVal();
        if (null === UU) throw new Error("Should not be gotten before at least 1 type has been initialised");
        return UU
      }
      _getTotalBooleanVal() {
        let UU = !1,
          RU = !0;
        for (const gU in this.booleans) UU = !0, RU &&= this.booleans[gU];
        return UU ? RU : null
      }
    }
    class PU extends pU {
      getTotalBooleanVal() {
        const UU = this._getTotalBooleanVal();
        if (null === UU) throw new Error("Should not be gotten before at least 1 type has been initialised");
        return UU
      }
      _getTotalBooleanVal() {
        let UU = !1,
          RU = !1;
        for (const gU in this.booleans) UU = !0, RU ||= this.booleans[gU];
        return UU ? RU : null
      }
    }
  },
  9155: (UU, RU, gU) => {
    gU.d(RU, {
      e: () => pU,
      f: () => EU
    });
    var tU = gU(9121);
    const pU = "Air",
      EU = Object.freeze(new tU.h(pU, 0, "", null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null))
  },
  36324: (UU, RU, gU) => {
    gU.d(RU, {
      b: () => EU,
      d: () => tU,
      e: () => pU
    });
    const tU = 15,
      pU = 3,
      EU = 30
  }
};
Object.freeze(modules);
for (const UU in modules) Object.freeze(modules[UU]);