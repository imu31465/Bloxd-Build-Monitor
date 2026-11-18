/*! For license information please see symm5.wasmMatchmaking.ce60ac5c.chunk.js.LICENSE.txt */
export const id = 55;
export const ids = [55];
export const modules = {
  35753: JJ => {
    JJ.exports = function JJ(cJ, ZJ) {
      if (cJ === ZJ) return !0;
      if (cJ && ZJ && "object" == typeof cJ && "object" == typeof ZJ) {
        if (cJ.constructor !== ZJ.constructor) return !1;
        var FJ, UJ, eJ;
        if (Array.isArray(cJ)) {
          if ((FJ = cJ.length) != ZJ.length) return !1;
          for (UJ = FJ; 0 !== UJ--;)
            if (!JJ(cJ[UJ], ZJ[UJ])) return !1;
          return !0
        }
        if (cJ.constructor === RegExp) return cJ.source === ZJ.source && cJ.flags === ZJ.flags;
        if (cJ.valueOf !== Object.prototype.valueOf) return cJ.valueOf() === ZJ.valueOf();
        if (cJ.toString !== Object.prototype.toString) return cJ.toString() === ZJ.toString();
        if ((FJ = (eJ = Object.keys(cJ)).length) !== Object.keys(ZJ).length) return !1;
        for (UJ = FJ; 0 !== UJ--;)
          if (!Object.prototype.hasOwnProperty.call(ZJ, eJ[UJ])) return !1;
        for (UJ = FJ; 0 !== UJ--;) {
          var XJ = eJ[UJ];
          if (!JJ(cJ[XJ], ZJ[XJ])) return !1
        }
        return !0
      }
      return cJ !== cJ && ZJ !== ZJ
    }
  },
  35605: (JJ, cJ) => {
    function ZJ(JJ) {
      if (JJ && "object" === typeof JJ) {
        var cJ = JJ.which || JJ.keyCode || JJ.charCode;
        cJ && (JJ = cJ)
      }
      if ("number" === typeof JJ) return XJ[JJ];
      var ZJ, eJ = String(JJ);
      return (ZJ = FJ[eJ.toLowerCase()]) ? ZJ : (ZJ = UJ[eJ.toLowerCase()]) || (1 === eJ.length ? eJ.charCodeAt(0) : void 0)
    }
    ZJ.isEventKey = function(JJ, cJ) {
      if (JJ && "object" === typeof JJ) {
        var ZJ = JJ.which || JJ.keyCode || JJ.charCode;
        if (null === ZJ || void 0 === ZJ) return !1;
        if ("string" === typeof cJ) {
          var eJ;
          if (eJ = FJ[cJ.toLowerCase()]) return eJ === ZJ;
          if (eJ = UJ[cJ.toLowerCase()]) return eJ === ZJ
        } else if ("number" === typeof cJ) return cJ === ZJ;
        return !1
      }
    };
    var FJ = (cJ = JJ.exports = ZJ).code = cJ.codes = {
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
      UJ = cJ.aliases = {
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
    for (eJ = 97; eJ < 123; eJ++) FJ[String.fromCharCode(eJ)] = eJ - 32;
    for (var eJ = 48; eJ < 58; eJ++) FJ[eJ - 48] = eJ;
    for (eJ = 1; eJ < 13; eJ++) FJ["f" + eJ] = eJ + 111;
    for (eJ = 0; eJ < 10; eJ++) FJ["numpad " + eJ] = eJ + 96;
    var XJ = cJ.names = cJ.title = {};
    for (eJ in FJ) XJ[FJ[eJ]] = eJ;
    for (var AJ in UJ) FJ[AJ] = UJ[AJ]
  },
  35778: (JJ, cJ, ZJ) => {
    ZJ.d(cJ, {
      d: () => XJ
    });
    var FJ = ZJ(47);
    const UJ = FJ.useLayoutEffect;
    const eJ = function(JJ) {
      var cJ = (0, FJ.useRef)(JJ);
      return UJ((function() {
        cJ.current = JJ
      })), cJ
    };
    var XJ = function(JJ) {
      var cJ = eJ(JJ);
      (0, FJ.useEffect)((function() {
        var JJ = function(JJ) {
          var ZJ;
          if (null != cJ.current && (ZJ = cJ.current(JJ)), JJ.defaultPrevented && (JJ.returnValue = ""), "string" === typeof ZJ) return JJ.returnValue = ZJ, ZJ
        };
        return window.addEventListener("beforeunload", JJ),
          function() {
            window.removeEventListener("beforeunload", JJ)
          }
      }), [])
    }
  },
  35642: JJ => {
    var cJ, ZJ = "undefined" !== typeof window ? window.navigator.userAgent : "",
      FJ = /OS X/.test(ZJ),
      UJ = /Opera/.test(ZJ),
      eJ = !/like Gecko/.test(ZJ) && !UJ,
      XJ = JJ.exports = {
        0: FJ ? "<menu>" : "<UNK>",
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
        93: FJ ? "<meta>" : "<menu>",
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
        173: FJ && eJ ? "-" : "<volume-mute>",
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
        231: UJ ? "`" : "<unicode>",
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
    for (cJ = 58; cJ < 65; ++cJ) XJ[cJ] = String.fromCharCode(cJ);
    for (cJ = 48; cJ < 58; ++cJ) XJ[cJ] = cJ - 48 + "";
    for (cJ = 65; cJ < 91; ++cJ) XJ[cJ] = String.fromCharCode(cJ);
    for (cJ = 96; cJ < 106; ++cJ) XJ[cJ] = "<num-" + (cJ - 96) + ">";
    for (cJ = 112; cJ < 136; ++cJ) XJ[cJ] = "F" + (cJ - 111)
  },
  6004: (JJ, cJ, ZJ) => {
    ZJ.d(cJ, {
      e: () => UJ,
      f: () => eJ
    });
    var FJ = ZJ(29);
    const UJ = "shaderPack";
    async function eJ() {
      var JJ;
      let cJ = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
      return null !== (JJ = await FJ.g.getItem(UJ, cJ)) && void 0 !== JJ ? JJ : null
    }
  },
  35489: (JJ, cJ, ZJ) => {
    ZJ.d(cJ, {
      b: () => qJ,
      c: () => jJ
    });
    var FJ = ZJ(1151),
      UJ = ZJ(3059),
      eJ = ZJ(547),
      XJ = ZJ(8187);

    function AJ(JJ, cJ) {
      let FJ = !1;
      const eJ = () => {
        FJ = !0
      };
      if (! function(JJ) {
          var cJ;
          return !0 !== (null === JJ || void 0 === JJ ? void 0 : JJ.saveData) && !/2g$/.test(null !== (cJ = null === JJ || void 0 === JJ ? void 0 : JJ.effectiveType) && void 0 !== cJ ? cJ : "")
        }(navigator.connection)) return eJ;
      const AJ = () => !FJ && !(0, XJ.g)();
      return (0, UJ.e)((() => {
        AJ() && Promise.all([ZJ.e(126), ZJ.e(81), ZJ.e(51)]).then((() => ZJ(39512))).then((JJ => AJ() ? cJ(JJ) : void 0), (cJ => {
          console.warn(`[bloxd-wasm-client] ${JJ} did not load: the join loads the client itself`, cJ)
        }))
      })), eJ
    }

    function qJ() {
      AJ("the prefetch", (JJ => {
        let {
          prefetchWasmClient: cJ
        } = JJ;
        return cJ({
          joinStarted: XJ.g,
          language: FJ.e.get().getCurrentLanguageCode()
        })
      }))
    }

    function jJ() {
      return eJ.r ? AJ("the game page's early load", (JJ => {
        let {
          startGamePageLoad: cJ
        } = JJ;
        return cJ()
      })) : () => {}
    }
  },
  35531: (JJ, cJ, ZJ) => {
    ZJ.r(cJ), ZJ.d(cJ, {
      InGameUi: () => xJ.d,
      LobbyLeaderboard: () => rJ.d,
      loadCharacterCustomisationUI: () => vJ,
      loadCharacterPreview: () => mJ,
      matchmakeAndPlay: () => KJ,
      setUpGame: () => QJ
    });
    var FJ = ZJ(1144),
      UJ = ZJ(143),
      eJ = ZJ(13),
      XJ = ZJ(35540),
      AJ = ZJ(35545),
      qJ = ZJ(1725),
      jJ = ZJ(35560);

    function YJ() {
      return !1 !== qJ.b.get("canCustomiseChar")
    }
    let hJ = !1;
    var DJ = ZJ(1213),
      sJ = ZJ(35489),
      nJ = ZJ(8187),
      GJ = ZJ(3055),
      fJ = ZJ(1654);
    var xJ = ZJ(35570),
      rJ = ZJ(36023);

    function vJ() {
      return Promise.all([ZJ.e(269), ZJ.e(377)]).then((() => ZJ(39936)))
    }

    function mJ() {
      return ZJ.e(270).then((() => ZJ(39938)))
    }

    function QJ() {
      return (0, nJ.e)()
    }
    hJ || (hJ = !0, document.addEventListener("keydown", (JJ => {
      (0, jJ.d)(JJ, YJ)
    }))), (0, sJ.b)();
    const EJ = eJ.d.get("router");
    null === EJ ? console.warn("[bloxd-wasm-client] no router as the matchmaking chunk loads: the join's loads start with the join") : function JJ(cJ) {
      if ((0, fJ.e)(cJ.state.location.pathname)) return void(0, nJ.c)().catch((() => {}));
      const ZJ = cJ.subscribe((FJ => {
        (0, fJ.e)(FJ.location.pathname) && (ZJ(), (0, GJ.c)().then((() => {
          JJ(cJ)
        })))
      }))
    }(EJ), (0, XJ.d)();
    const VJ = (0, AJ.e)((async function(JJ, cJ) {
      let {
        place: ZJ,
        userContext: eJ,
        direct: XJ,
        rematch: AJ
      } = JJ;
      const qJ = XJ ? 1 / 0 : performance.now();
      let jJ;
      try {
        jJ = await (0, nJ.c)()
      } catch (YJ) {
        return console.error("The wasm client did not load:", YJ), (0, DJ.o)({
          websocketUrl: null
        }), FJ.b.errorWithCode(String(YJ), UJ.e.CONNECT_TO_GAME_SERVER, {
          error: YJ,
          severity: cJ.aborted ? "low" : "medium",
          hZ: cJ.aborted
        })
      }
      return jJ.playWasmGame({
        userContext: eJ,
        place: ZJ,
        matchedAt: qJ,
        rematch: AJ
      }, cJ)
    }));

    function KJ() {
      return (0, nJ.c)().catch((() => {})), VJ(...arguments)
    }
  },
  8187: (JJ, cJ, ZJ) => {
    ZJ.d(cJ, {
      c: () => YJ,
      e: () => DJ,
      g: () => hJ
    });
    var FJ = ZJ(2642),
      UJ = ZJ(2042),
      eJ = ZJ(2675),
      XJ = ZJ(4057),
      AJ = ZJ(2988);
    let qJ = null,
      jJ = !1;

    function YJ() {
      return XJ.e.cancelDownloadForJoin(), (0, AJ.e)(), (0, UJ.c)(), jJ = !0, (0, eJ.j)(), Promise.all([ZJ.e(64), ZJ.e(67), ZJ.e(66), ZJ.e(65), ZJ.e(77), ZJ.e(228), ZJ.e(202), ZJ.e(226), ZJ.e(197), ZJ.e(43)]).then((() => ZJ(39445))).catch((() => {})), Promise.all([ZJ.e(126), ZJ.e(81), ZJ.e(51)]).then((() => ZJ(39512))).then((JJ => {
        let {
          startJoinLoad: cJ
        } = JJ;
        cJ()
      }), (() => {})), qJ ??= Promise.all([ZJ.e(66), ZJ.e(126), ZJ.e(122), ZJ.e(251), ZJ.e(177), ZJ.e(81), ZJ.e(80), ZJ.e(79), ZJ.e(197), ZJ.e(56)]).then((() => ZJ(39595))).then((JJ => (JJ.startWasmPlay(), JJ.followPageUiPack((JJ => {
        FJ.b.showGamePack(JJ)
      })), JJ)), (JJ => {
        throw qJ = null, JJ
      })), qJ
    }

    function hJ() {
      return jJ
    }

    function DJ() {
      return Promise.all([ZJ.e(66), ZJ.e(126), ZJ.e(122), ZJ.e(251), ZJ.e(177), ZJ.e(81), ZJ.e(80), ZJ.e(79), ZJ.e(197), ZJ.e(56)]).then((() => ZJ(39595))).then((JJ => {
        JJ.startWasmPreviews(), JJ.prefetchWasmPreviews()
      }))
    }
  },
  35948: (JJ, cJ, ZJ) => {
    function FJ(JJ) {
      return JJ.includes("Leaf Bed")
    }

    function UJ(JJ) {
      return / Bed(?: Head)?(?:\||$)/.test(JJ) && !FJ(JJ)
    }

    function eJ(JJ) {
      return JJ.includes(" Strongbed")
    }

    function XJ(JJ) {
      return FJ(JJ) || UJ(JJ) || eJ(JJ)
    }
    ZJ.d(cJ, {
      e: () => XJ,
      h: () => FJ,
      l: () => eJ,
      m: () => UJ
    })
  },
  35944: (JJ, cJ, ZJ) => {
    ZJ.d(cJ, {
      c: () => jJ
    });
    var FJ = ZJ(35948),
      UJ = ZJ(8636);
    const eJ = [],
      XJ = [],
      AJ = [],
      qJ = [];
    for (const YJ of Object.keys(UJ.o))(0, FJ.h)(YJ) ? eJ.push(YJ) : (0, FJ.m)(YJ) && XJ.push(YJ), (0, FJ.l)(YJ) && AJ.push(YJ), (YJ.includes(" Bed Head") || YJ.includes(" Strongbed Head")) && qJ.push(YJ);
    const jJ = {
      leafBeds: eJ,
      woolBeds: XJ,
      strongBeds: AJ,
      beds: [...eJ, ...XJ, ...AJ],
      bedHeads: qJ,
      blockRemoveActionRoots: ["Chest", "Loot Chest", "Iron Chest", "Mailbox", "Bookshelf", "Empty Bookshelf"]
    }
  }
};
Object.freeze(modules);
for (const JJ in modules) Object.freeze(modules[JJ]);