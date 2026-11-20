/*! For license information please see bcgkc.wasmMatchmaking.2b0a19b8.chunk.js.LICENSE.txt */
export const id = 60;
export const ids = [60];
export const modules = {
  36359: (TT, kT) => {
    function cT(TT) {
      if (TT && "object" === typeof TT) {
        var kT = TT.which || TT.keyCode || TT.charCode;
        kT && (TT = kT)
      }
      if ("number" === typeof TT) return OT[TT];
      var cT, KT = String(TT);
      return (cT = lT[KT.toLowerCase()]) ? cT : (cT = MT[KT.toLowerCase()]) || (1 === KT.length ? KT.charCodeAt(0) : void 0)
    }
    cT.isEventKey = function(TT, kT) {
      if (TT && "object" === typeof TT) {
        var cT = TT.which || TT.keyCode || TT.charCode;
        if (null === cT || void 0 === cT) return !1;
        if ("string" === typeof kT) {
          var KT;
          if (KT = lT[kT.toLowerCase()]) return KT === cT;
          if (KT = MT[kT.toLowerCase()]) return KT === cT
        } else if ("number" === typeof kT) return kT === cT;
        return !1
      }
    };
    var lT = (kT = TT.exports = cT).code = kT.codes = {
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
      MT = kT.aliases = {
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
    for (KT = 97; KT < 123; KT++) lT[String.fromCharCode(KT)] = KT - 32;
    for (var KT = 48; KT < 58; KT++) lT[KT - 48] = KT;
    for (KT = 1; KT < 13; KT++) lT["f" + KT] = KT + 111;
    for (KT = 0; KT < 10; KT++) lT["numpad " + KT] = KT + 96;
    var OT = kT.names = kT.title = {};
    for (KT in lT) OT[lT[KT]] = KT;
    for (var yT in MT) lT[yT] = MT[yT]
  },
  36517: (TT, kT, cT) => {
    cT.d(kT, {
      e: () => OT
    });
    var lT = cT(71);
    const MT = lT.useLayoutEffect;
    const KT = function(TT) {
      var kT = (0, lT.useRef)(TT);
      return MT((function() {
        kT.current = TT
      })), kT
    };
    var OT = function(TT) {
      var kT = KT(TT);
      (0, lT.useEffect)((function() {
        var TT = function(TT) {
          var cT;
          if (null != kT.current && (cT = kT.current(TT)), TT.defaultPrevented && (TT.returnValue = ""), "string" === typeof cT) return TT.returnValue = cT, cT
        };
        return window.addEventListener("beforeunload", TT),
          function() {
            window.removeEventListener("beforeunload", TT)
          }
      }), [])
    }
  },
  36409: TT => {
    var kT, cT = "undefined" !== typeof window ? window.navigator.userAgent : "",
      lT = /OS X/.test(cT),
      MT = /Opera/.test(cT),
      KT = !/like Gecko/.test(cT) && !MT,
      OT = TT.exports = {
        0: lT ? "<menu>" : "<UNK>",
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
        93: lT ? "<meta>" : "<menu>",
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
        173: lT && KT ? "-" : "<volume-mute>",
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
        231: MT ? "`" : "<unicode>",
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
    for (kT = 58; kT < 65; ++kT) OT[kT] = String.fromCharCode(kT);
    for (kT = 48; kT < 58; ++kT) OT[kT] = kT - 48 + "";
    for (kT = 65; kT < 91; ++kT) OT[kT] = String.fromCharCode(kT);
    for (kT = 96; kT < 106; ++kT) OT[kT] = "<num-" + (kT - 96) + ">";
    for (kT = 112; kT < 136; ++kT) OT[kT] = "F" + (kT - 111)
  },
  6647: (TT, kT, cT) => {
    cT.d(kT, {
      b: () => MT,
      e: () => KT
    });
    var lT = cT(47);
    const MT = "shaderPack";
    async function KT() {
      var TT;
      let kT = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
      return null !== (TT = await lT.d.getItem(MT, kT)) && void 0 !== TT ? TT : null
    }
  },
  8939: (TT, kT, cT) => {
    cT.d(kT, {
      e: () => KT,
      f: () => MT
    });
    let lT = !1;

    function MT() {
      lT = !0
    }

    function KT() {
      return lT
    }
  },
  36254: (TT, kT, cT) => {
    cT.r(kT), cT.d(kT, {
      InGameUi: () => ST.c,
      LobbyLeaderboard: () => DT.e,
      loadCharacterCustomisationUI: () => aT,
      loadCharacterPreview: () => FT,
      matchmakeAndPlay: () => mT,
      setUpGame: () => rT
    });
    var lT = cT(1252),
      MT = cT(184),
      KT = cT(31),
      OT = cT(36263),
      yT = cT(36272),
      fT = cT(1974),
      xT = cT(36302);

    function IT() {
      return !1 !== fT.b.get("canCustomiseChar")
    }
    let AT = !1;
    var CT = cT(1327),
      jT = cT(1261),
      vT = cT(698),
      tT = cT(8939);
    var hT = cT(8932),
      NT = cT(3536),
      QT = cT(1814);
    var ST = cT(36319),
      DT = cT(36825);

    function aT() {
      return Promise.all([cT.e(282), cT.e(388)]).then((() => cT(40917)))
    }

    function FT() {
      return cT.e(283).then((() => cT(40922)))
    }

    function rT() {
      return (0, hT.f)()
    }
    AT || (AT = !0, document.addEventListener("keydown", (TT => {
        (0, xT.e)(TT, IT)
      }))),
      function(TT) {
        var kT;
        return !0 !== (null === TT || void 0 === TT ? void 0 : TT.saveData) && !/2g$/.test(null !== (kT = null === TT || void 0 === TT ? void 0 : TT.effectiveType) && void 0 !== kT ? kT : "")
      }(navigator.connection) && (0, vT.c)((() => {
        (0, tT.e)() || Promise.all([cT.e(75), cT.e(132), cT.e(88), cT.e(56)]).then((() => cT(40404))).then((TT => {
          (0, tT.e)() || TT.startLoadAheadOfJoin({
            joinStarted: tT.e,
            language: jT.f.get().getCurrentLanguageCode()
          })
        }), (TT => {
          console.warn("[bloxd-wasm-client] the loads ahead of a join did not start: the join loads the client itself", TT)
        }))
      }));
    const PT = KT.e.get("router");
    null === PT ? console.warn("[bloxd-wasm-client] no router as the matchmaking chunk loads: the join's loads start with the join") : function TT(kT) {
      if ((0, QT.b)(kT.state.location.pathname)) return void(0, hT.e)().catch((() => {}));
      const cT = kT.subscribe((lT => {
        (0, QT.b)(lT.location.pathname) && (cT(), (0, NT.e)().then((() => {
          TT(kT)
        })))
      }))
    }(PT), (0, OT.c)();
    const wT = (0, yT.e)((async function(TT, kT) {
      let {
        place: cT,
        userContext: KT,
        direct: OT,
        rematch: yT
      } = TT;
      const fT = OT ? 1 / 0 : performance.now();
      let xT;
      try {
        xT = await (0, hT.e)()
      } catch (IT) {
        return console.error("The wasm client did not load:", IT), (0, CT.l)({
          websocketUrl: null
        }), lT.d.errorWithCode(String(IT), MT.g.CONNECT_TO_GAME_SERVER, {
          error: IT,
          severity: kT.aborted ? "low" : "medium",
          KT: kT.aborted
        })
      }
      return xT.playWasmGame({
        userContext: KT,
        place: cT,
        matchedAt: fT,
        rematch: yT
      }, kT)
    }));

    function mT() {
      return (0, hT.e)().catch((() => {})), wT(...arguments)
    }
  },
  8932: (TT, kT, cT) => {
    cT.d(kT, {
      e: () => IT,
      f: () => AT
    });
    var lT = cT(3081),
      MT = cT(2323),
      KT = cT(3125),
      OT = cT(4633),
      yT = cT(3449),
      fT = cT(8939);
    let xT = null;

    function IT() {
      return OT.b.cancelDownloadForJoin(), (0, yT.e)(), (0, MT.d)(), (0, fT.f)(), (0, KT.j)(), Promise.all([cT.e(70), cT.e(73), cT.e(72), cT.e(71), cT.e(84), cT.e(261), cT.e(199), cT.e(217), cT.e(239), cT.e(212), cT.e(46)]).then((() => cT(40311))).catch((() => {})), Promise.all([cT.e(75), cT.e(132), cT.e(88), cT.e(56)]).then((() => cT(40404))).then((TT => {
        let {
          startJoinLoad: kT
        } = TT;
        kT()
      }), (() => {})), xT ??= Promise.all([cT.e(72), cT.e(75), cT.e(129), cT.e(132), cT.e(263), cT.e(186), cT.e(88), cT.e(87), cT.e(86), cT.e(212), cT.e(61)]).then((() => cT(40489))).then((TT => (TT.startWasmPlay(), TT.followPageUiPack((TT => {
        lT.e.showGamePack(TT)
      })), TT)), (TT => {
        throw xT = null, TT
      })), xT
    }

    function AT() {
      return Promise.all([cT.e(72), cT.e(75), cT.e(129), cT.e(132), cT.e(263), cT.e(186), cT.e(88), cT.e(87), cT.e(86), cT.e(212), cT.e(61)]).then((() => cT(40489))).then((TT => {
        TT.startWasmPreviews(), TT.prefetchWasmPreviews()
      }))
    }
  },
  9542: (TT, kT, cT) => {
    cT.d(kT, {
      b: () => MT,
      e: () => KT
    });
    var lT = cT(9495);
    const MT = "Air",
      KT = Object.freeze(new lT.d(MT, 0, "", null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null))
  }
};
Object.freeze(modules);
for (const TT in modules) Object.freeze(modules[TT]);