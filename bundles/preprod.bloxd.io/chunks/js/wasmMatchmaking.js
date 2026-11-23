/*! For license information please see w4ddu.wasmMatchmaking.92b6c578.chunk.js.LICENSE.txt */
export const id = 62;
export const ids = [62];
export const modules = {
  36417: (CC, zC) => {
    function ZC(CC) {
      if (CC && "object" === typeof CC) {
        var zC = CC.which || CC.keyCode || CC.charCode;
        zC && (CC = zC)
      }
      if ("number" === typeof CC) return nC[CC];
      var ZC, bC = String(CC);
      return (ZC = QC[bC.toLowerCase()]) ? ZC : (ZC = wC[bC.toLowerCase()]) || (1 === bC.length ? bC.charCodeAt(0) : void 0)
    }
    ZC.isEventKey = function(CC, zC) {
      if (CC && "object" === typeof CC) {
        var ZC = CC.which || CC.keyCode || CC.charCode;
        if (null === ZC || void 0 === ZC) return !1;
        if ("string" === typeof zC) {
          var bC;
          if (bC = QC[zC.toLowerCase()]) return bC === ZC;
          if (bC = wC[zC.toLowerCase()]) return bC === ZC
        } else if ("number" === typeof zC) return zC === ZC;
        return !1
      }
    };
    var QC = (zC = CC.exports = ZC).code = zC.codes = {
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
      wC = zC.aliases = {
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
    for (bC = 97; bC < 123; bC++) QC[String.fromCharCode(bC)] = bC - 32;
    for (var bC = 48; bC < 58; bC++) QC[bC - 48] = bC;
    for (bC = 1; bC < 13; bC++) QC["f" + bC] = bC + 111;
    for (bC = 0; bC < 10; bC++) QC["numpad " + bC] = bC + 96;
    var nC = zC.names = zC.title = {};
    for (bC in QC) nC[QC[bC]] = bC;
    for (var fC in wC) QC[fC] = wC[fC]
  },
  36581: (CC, zC, ZC) => {
    ZC.d(zC, {
      e: () => nC
    });
    var QC = ZC(48);
    const wC = QC.useLayoutEffect;
    const bC = function(CC) {
      var zC = (0, QC.useRef)(CC);
      return wC((function() {
        zC.current = CC
      })), zC
    };
    var nC = function(CC) {
      var zC = bC(CC);
      (0, QC.useEffect)((function() {
        var CC = function(CC) {
          var ZC;
          if (null != zC.current && (ZC = zC.current(CC)), CC.defaultPrevented && (CC.returnValue = ""), "string" === typeof ZC) return CC.returnValue = ZC, ZC
        };
        return window.addEventListener("beforeunload", CC),
          function() {
            window.removeEventListener("beforeunload", CC)
          }
      }), [])
    }
  },
  36466: CC => {
    var zC, ZC = "undefined" !== typeof window ? window.navigator.userAgent : "",
      QC = /OS X/.test(ZC),
      wC = /Opera/.test(ZC),
      bC = !/like Gecko/.test(ZC) && !wC,
      nC = CC.exports = {
        0: QC ? "<menu>" : "<UNK>",
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
        93: QC ? "<meta>" : "<menu>",
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
        173: QC && bC ? "-" : "<volume-mute>",
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
        231: wC ? "`" : "<unicode>",
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
    for (zC = 58; zC < 65; ++zC) nC[zC] = String.fromCharCode(zC);
    for (zC = 48; zC < 58; ++zC) nC[zC] = zC - 48 + "";
    for (zC = 65; zC < 91; ++zC) nC[zC] = String.fromCharCode(zC);
    for (zC = 96; zC < 106; ++zC) nC[zC] = "<num-" + (zC - 96) + ">";
    for (zC = 112; zC < 136; ++zC) nC[zC] = "F" + (zC - 111)
  },
  8907: (CC, zC, ZC) => {
    ZC.d(zC, {
      d: () => bC,
      g: () => wC
    });
    let QC = !1;

    function wC() {
      QC = !0
    }

    function bC() {
      return QC
    }
  },
  36322: (CC, zC, ZC) => {
    ZC.r(zC), ZC.d(zC, {
      InGameUi: () => xC.c,
      LobbyLeaderboard: () => JC.d,
      loadCharacterCustomisationUI: () => IC,
      loadCharacterPreview: () => iC,
      matchmakeAndPlay: () => KC,
      setUpGame: () => vC
    });
    var QC = ZC(1187),
      wC = ZC(134),
      bC = ZC(20),
      nC = ZC(36329),
      fC = ZC(36335),
      oC = ZC(1865),
      qC = ZC(36373);

    function FC() {
      return !1 !== oC.e.get("canCustomiseChar")
    }
    let WC = !1;
    var NC = ZC(1275),
      MC = ZC(1192),
      gC = ZC(239),
      SC = ZC(666),
      pC = ZC(8907),
      PC = ZC(8904);

    function GC() {
      (0, pC.d)() || (0, PC.d)().catch((CC => {
        console.warn("[bloxd-wasm-client] the play chunk did not load ahead of a join: the join loads it itself", CC)
      }))
    }
    var RC = ZC(3419),
      AC = ZC(1669);
    var xC = ZC(36378),
      JC = ZC(36880);

    function IC() {
      return ZC.e(216).then((() => ZC(41095)))
    }

    function iC() {
      return ZC.e(291).then((() => ZC(41104)))
    }

    function vC() {
      return (0, PC.j)()
    }
    WC || (WC = !0, document.addEventListener("keydown", (CC => {
        (0, qC.b)(CC, FC)
      }))),
      function(CC) {
        var zC;
        return !0 !== (null === CC || void 0 === CC ? void 0 : CC.saveData) && !/2g$/.test(null !== (zC = null === CC || void 0 === CC ? void 0 : CC.effectiveType) && void 0 !== zC ? zC : "")
      }(navigator.connection) && (0, SC.d)((() => {
        (0, pC.d)() || Promise.all([ZC.e(77), ZC.e(89), ZC.e(211), ZC.e(210), ZC.e(134), ZC.e(139), ZC.e(58)]).then((() => ZC(40885))).then((async CC => {
          (0, pC.d)() || (await CC.startLoadAheadOfJoin({
            joinStarted: pC.d,
            language: MC.h.get().getCurrentLanguageCode()
          }), (0, gC.e)(GC))
        }), (CC => {
          console.warn("[bloxd-wasm-client] the loads ahead of a join did not start: the join loads the client itself", CC)
        }))
      }));
    const eC = bC.b.get("router");
    null === eC ? console.warn("[bloxd-wasm-client] no router as the matchmaking chunk loads: the join's loads start with the join") : function CC(zC) {
      if ((0, AC.b)(zC.state.location.pathname)) return void(0, PC.h)().catch((() => {}));
      const ZC = zC.subscribe((QC => {
        (0, AC.b)(QC.location.pathname) && (ZC(), (0, RC.e)().then((() => {
          CC(zC)
        })))
      }))
    }(eC), (0, nC.c)();
    const hC = (0, fC.d)((async function(CC, zC) {
      let {
        place: ZC,
        userContext: bC,
        direct: nC,
        rematch: fC
      } = CC;
      const oC = nC ? 1 / 0 : performance.now();
      let qC;
      try {
        qC = await (0, PC.h)()
      } catch (FC) {
        return console.error("The wasm client did not load:", FC), (0, NC.r)({
          websocketUrl: null
        }), QC.e.errorWithCode(String(FC), wC.l.CONNECT_TO_GAME_SERVER, {
          error: FC,
          severity: zC.aborted ? "low" : "medium",
          wZ: zC.aborted
        })
      }
      return qC.playWasmGame({
        userContext: bC,
        place: ZC,
        matchedAt: oC,
        rematch: fC
      }, zC)
    }));

    function KC() {
      return (0, PC.h)().catch((() => {})), hC(...arguments)
    }
  },
  8904: (CC, zC, ZC) => {
    ZC.d(zC, {
      d: () => MC,
      h: () => NC,
      j: () => gC
    });
    var QC = ZC(3137),
      wC = ZC(2224),
      bC = ZC(2050),
      nC = ZC(4582),
      fC = ZC(3464),
      oC = ZC(8907);
    let qC = null;

    function FC() {
      return Promise.all([ZC.e(74), ZC.e(77), ZC.e(89), ZC.e(211), ZC.e(76), ZC.e(210), ZC.e(134), ZC.e(196), ZC.e(139), ZC.e(87), ZC.e(218), ZC.e(63)]).then((() => ZC(40510)))
    }

    function WC() {
      Promise.all([ZC.e(72), ZC.e(75), ZC.e(74), ZC.e(73), ZC.e(89), ZC.e(86), ZC.e(269), ZC.e(189), ZC.e(223), ZC.e(247), ZC.e(218), ZC.e(46)]).then((() => ZC(40832))).catch((() => {}))
    }

    function NC() {
      return nC.e.cancelDownloadForJoin(), (0, fC.b)(), (0, wC.f)(), (0, oC.g)(), (0, bC.k)(), WC(), Promise.all([ZC.e(77), ZC.e(89), ZC.e(211), ZC.e(210), ZC.e(134), ZC.e(139), ZC.e(58)]).then((() => ZC(40885))).then((CC => {
        let {
          startJoinLoad: zC
        } = CC;
        zC()
      }), (() => {})), qC ??= FC().then((CC => (CC.startWasmPlay(), CC.followPageUiPack((CC => {
        QC.c.showGamePack(CC)
      })), CC)), (CC => {
        throw qC = null, CC
      })), qC
    }

    function MC() {
      return WC(), ZC.e(271).then((() => ZC(40888))).catch((() => {})), FC().then((() => {}))
    }

    function gC() {
      return FC().then((CC => {
        CC.startWasmPreviews(), CC.prefetchWasmPreviews()
      }))
    }
  },
  36712: (CC, zC, ZC) => {
    function QC(CC) {
      return "fetch" === CC || "timeout" === CC || "integrity" === CC ? "download" : "browser"
    }
    ZC.d(zC, {
      b: () => wC,
      c: () => nC,
      g: () => oC,
      j: () => fC,
      m: () => QC,
      p: () => bC
    });
    const wC = "https://discord.gg/playbloxd";

    function bC(CC) {
      return "download" === CC ? {
        icon: "wifi",
        title: "wasmScreens:downloadFailedTitle",
        help: "wasmScreens:downloadFailedHelp",
        helpValues: {},
        discordLink: !1,
        confirm: "general:tryAgain",
        cancel: "general:back"
      } : {
        icon: "face-dizzy",
        title: "wasmScreens:unsupportedTitle",
        help: "wasmScreens:unsupportedHelp",
        helpValues: {},
        discordLink: !1,
        confirm: "general:ok",
        cancel: null
      }
    }

    function nC(CC, zC) {
      return {
        icon: "face-dizzy",
        title: "wasmScreens:crashTitle",
        help: zC ? "wasmScreens:crashHelp" : "wasmScreens:crashHelpNoDiscord",
        helpValues: {
          code: CC.code
        },
        discordLink: zC,
        confirm: "general:reload",
        cancel: "general:back"
      }
    }

    function fC() {
      return {
        icon: "face-dizzy",
        title: "wasmScreens:turnstilePageTitle",
        help: "wasmScreens:turnstilePageHelp",
        helpValues: {},
        discordLink: !1,
        confirm: "general:ok",
        cancel: null
      }
    }

    function oC(CC, zC, ZC) {
      return {
        icon: "wifi",
        title: "wasmScreens:disconnectedTitle",
        help: ZC ? "wasmScreens:reconnectingHelp" : "wasmScreens:disconnectedHelp",
        helpValues: {
          reason: CC.reason
        },
        discordLink: null === CC.name,
        confirm: zC ? "general:reconnect" : CC.requiresRefresh ? "general:reload" : "general:ok",
        cancel: null
      }
    }
  },
  9299: (CC, zC, ZC) => {
    ZC.d(zC, {
      b: () => wC,
      d: () => bC
    });
    var QC = ZC(9239);
    const wC = "Air",
      bC = Object.freeze(new QC.e(wC, 0, "", null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null))
  }
};
Object.freeze(modules);
for (const CC in modules) Object.freeze(modules[CC]);