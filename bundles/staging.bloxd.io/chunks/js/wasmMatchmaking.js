/*! For license information please see fqwnlq.wasmMatchmaking.d47eb830.chunk.js.LICENSE.txt */
export const id = 62;
export const ids = [62];
export const modules = {
  36547: (SS, HS) => {
    function gS(SS) {
      if (SS && "object" === typeof SS) {
        var HS = SS.which || SS.keyCode || SS.charCode;
        HS && (SS = HS)
      }
      if ("number" === typeof SS) return xS[SS];
      var gS, XS = String(SS);
      return (gS = tS[XS.toLowerCase()]) ? gS : (gS = bS[XS.toLowerCase()]) || (1 === XS.length ? XS.charCodeAt(0) : void 0)
    }
    gS.isEventKey = function(SS, HS) {
      if (SS && "object" === typeof SS) {
        var gS = SS.which || SS.keyCode || SS.charCode;
        if (null === gS || void 0 === gS) return !1;
        if ("string" === typeof HS) {
          var XS;
          if (XS = tS[HS.toLowerCase()]) return XS === gS;
          if (XS = bS[HS.toLowerCase()]) return XS === gS
        } else if ("number" === typeof HS) return HS === gS;
        return !1
      }
    };
    var tS = (HS = SS.exports = gS).code = HS.codes = {
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
      bS = HS.aliases = {
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
    for (XS = 97; XS < 123; XS++) tS[String.fromCharCode(XS)] = XS - 32;
    for (var XS = 48; XS < 58; XS++) tS[XS - 48] = XS;
    for (XS = 1; XS < 13; XS++) tS["f" + XS] = XS + 111;
    for (XS = 0; XS < 10; XS++) tS["numpad " + XS] = XS + 96;
    var xS = HS.names = HS.title = {};
    for (XS in tS) xS[tS[XS]] = XS;
    for (var NS in bS) tS[NS] = bS[NS]
  },
  36721: (SS, HS, gS) => {
    gS.d(HS, {
      d: () => xS
    });
    var tS = gS(64);
    const bS = tS.useLayoutEffect;
    const XS = function(SS) {
      var HS = (0, tS.useRef)(SS);
      return bS((function() {
        HS.current = SS
      })), HS
    };
    var xS = function(SS) {
      var HS = XS(SS);
      (0, tS.useEffect)((function() {
        var SS = function(SS) {
          var gS;
          if (null != HS.current && (gS = HS.current(SS)), SS.defaultPrevented && (SS.returnValue = ""), "string" === typeof gS) return SS.returnValue = gS, gS
        };
        return window.addEventListener("beforeunload", SS),
          function() {
            window.removeEventListener("beforeunload", SS)
          }
      }), [])
    }
  },
  36601: SS => {
    var HS, gS = "undefined" !== typeof window ? window.navigator.userAgent : "",
      tS = /OS X/.test(gS),
      bS = /Opera/.test(gS),
      XS = !/like Gecko/.test(gS) && !bS,
      xS = SS.exports = {
        0: tS ? "<menu>" : "<UNK>",
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
        93: tS ? "<meta>" : "<menu>",
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
        173: tS && XS ? "-" : "<volume-mute>",
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
        231: bS ? "`" : "<unicode>",
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
    for (HS = 58; HS < 65; ++HS) xS[HS] = String.fromCharCode(HS);
    for (HS = 48; HS < 58; ++HS) xS[HS] = HS - 48 + "";
    for (HS = 65; HS < 91; ++HS) xS[HS] = String.fromCharCode(HS);
    for (HS = 96; HS < 106; ++HS) xS[HS] = "<num-" + (HS - 96) + ">";
    for (HS = 112; HS < 136; ++HS) xS[HS] = "F" + (HS - 111)
  },
  9099: (SS, HS, gS) => {
    gS.d(HS, {
      b: () => XS,
      f: () => bS
    });
    let tS = !1;

    function bS() {
      tS = !0
    }

    function XS() {
      return tS
    }
  },
  36452: (SS, HS, gS) => {
    gS.r(HS), gS.d(HS, {
      InGameUi: () => DS.e,
      LobbyLeaderboard: () => wS.d,
      loadCharacterCustomisationUI: () => hS,
      loadCharacterPreview: () => ZS,
      matchmakeAndPlay: () => cS,
      setUpGame: () => JS
    });
    var tS = gS(1329),
      bS = gS(160),
      XS = gS(24),
      xS = gS(36460),
      NS = gS(36463),
      qS = gS(2083),
      uS = gS(36505);

    function IS() {
      return !1 !== qS.d.get("canCustomiseChar")
    }
    let fS = !1;
    var kS = gS(1400),
      aS = gS(1334),
      KS = gS(278),
      jS = gS(754),
      GS = gS(9099),
      CS = gS(9096);

    function nS() {
      (0, GS.b)() || (0, CS.d)().catch((SS => {
        console.warn("[bloxd-wasm-client] the play chunk did not load ahead of a join: the join loads it itself", SS)
      }))
    }
    var PS = gS(3577),
      QS = gS(1869);
    var DS = gS(36512),
      wS = gS(37038);

    function hS() {
      return gS.e(216).then((() => gS(41286)))
    }

    function ZS() {
      return gS.e(291).then((() => gS(41290)))
    }

    function JS() {
      return (0, CS.i)()
    }
    fS || (fS = !0, document.addEventListener("keydown", (SS => {
        (0, uS.d)(SS, IS)
      }))),
      function(SS) {
        var HS;
        return !0 !== (null === SS || void 0 === SS ? void 0 : SS.saveData) && !/2g$/.test(null !== (HS = null === SS || void 0 === SS ? void 0 : SS.effectiveType) && void 0 !== HS ? HS : "")
      }(navigator.connection) && (0, jS.b)((() => {
        (0, GS.b)() || Promise.all([gS.e(77), gS.e(89), gS.e(211), gS.e(210), gS.e(134), gS.e(139), gS.e(58)]).then((() => gS(41066))).then((async SS => {
          (0, GS.b)() || (await SS.startLoadAheadOfJoin({
            joinStarted: GS.b,
            language: aS.f.get().getCurrentLanguageCode()
          }), (0, KS.c)(nS))
        }), (SS => {
          console.warn("[bloxd-wasm-client] the loads ahead of a join did not start: the join loads the client itself", SS)
        }))
      }));
    const OS = XS.b.get("router");
    null === OS ? console.warn("[bloxd-wasm-client] no router as the matchmaking chunk loads: the join's loads start with the join") : function SS(HS) {
      if ((0, QS.d)(HS.state.location.pathname)) return void(0, CS.f)().catch((() => {}));
      const gS = HS.subscribe((tS => {
        (0, QS.d)(tS.location.pathname) && (gS(), (0, PS.f)().then((() => {
          SS(HS)
        })))
      }))
    }(OS), (0, xS.e)();
    const dS = (0, NS.e)((async function(SS, HS) {
      let {
        place: gS,
        userContext: XS,
        direct: xS,
        rematch: NS
      } = SS;
      const qS = xS ? 1 / 0 : performance.now();
      let uS;
      try {
        uS = await (0, CS.f)()
      } catch (IS) {
        return console.error("The wasm client did not load:", IS), (0, kS.r)({
          websocketUrl: null
        }), tS.d.errorWithCode(String(IS), bS.g.CONNECT_TO_GAME_SERVER, {
          error: IS,
          severity: HS.aborted ? "low" : "medium",
          Hg: HS.aborted
        })
      }
      return uS.playWasmGame({
        userContext: XS,
        place: gS,
        matchedAt: qS,
        rematch: NS
      }, HS)
    }));

    function cS() {
      return (0, CS.f)().catch((() => {})), dS(...arguments)
    }
  },
  9096: (SS, HS, gS) => {
    gS.d(HS, {
      d: () => aS,
      f: () => kS,
      i: () => KS
    });
    var tS = gS(3320),
      bS = gS(2403),
      XS = gS(2242),
      xS = gS(4768),
      NS = gS(3639),
      qS = gS(9099);
    let uS = null;

    function IS() {
      return Promise.all([gS.e(74), gS.e(77), gS.e(89), gS.e(211), gS.e(76), gS.e(210), gS.e(134), gS.e(196), gS.e(139), gS.e(87), gS.e(218), gS.e(63)]).then((() => gS(40704)))
    }

    function fS() {
      Promise.all([gS.e(72), gS.e(75), gS.e(74), gS.e(73), gS.e(89), gS.e(86), gS.e(269), gS.e(189), gS.e(223), gS.e(247), gS.e(218), gS.e(46)]).then((() => gS(41033))).catch((() => {}))
    }

    function kS() {
      return xS.c.cancelDownloadForJoin(), (0, NS.d)(), (0, bS.h)(), (0, qS.f)(), (0, XS.h)(), fS(), Promise.all([gS.e(77), gS.e(89), gS.e(211), gS.e(210), gS.e(134), gS.e(139), gS.e(58)]).then((() => gS(41066))).then((SS => {
        let {
          startJoinLoad: HS
        } = SS;
        HS()
      }), (() => {})), uS ??= IS().then((SS => (SS.startWasmPlay(), SS.followPageUiPack((SS => {
        tS.d.showGamePack(SS)
      })), SS)), (SS => {
        throw uS = null, SS
      })), uS
    }

    function aS() {
      return fS(), gS.e(271).then((() => gS(41075))).catch((() => {})), IS().then((() => {}))
    }

    function KS() {
      return IS().then((SS => {
        SS.startWasmPreviews(), SS.prefetchWasmPreviews()
      }))
    }
  },
  36877: (SS, HS, gS) => {
    function tS(SS) {
      return "fetch" === SS || "timeout" === SS || "integrity" === SS ? "download" : "browser"
    }
    gS.d(HS, {
      b: () => bS,
      e: () => xS,
      i: () => qS,
      m: () => NS,
      n: () => tS,
      p: () => XS
    });
    const bS = "https://discord.gg/playbloxd";

    function XS(SS) {
      return "download" === SS ? {
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

    function xS(SS, HS) {
      return {
        icon: "face-dizzy",
        title: "wasmScreens:crashTitle",
        help: HS ? "wasmScreens:crashHelp" : "wasmScreens:crashHelpNoDiscord",
        helpValues: {
          code: SS.code
        },
        discordLink: HS,
        confirm: "general:reload",
        cancel: "general:back"
      }
    }

    function NS() {
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

    function qS(SS, HS, gS) {
      return {
        icon: "wifi",
        title: "wasmScreens:disconnectedTitle",
        help: gS ? "wasmScreens:reconnectingHelp" : "wasmScreens:disconnectedHelp",
        helpValues: {
          reason: SS.reason
        },
        discordLink: null === SS.name,
        confirm: HS ? "general:reconnect" : SS.requiresRefresh ? "general:reload" : "general:ok",
        cancel: null
      }
    }
  },
  9465: (SS, HS, gS) => {
    gS.d(HS, {
      c: () => bS,
      g: () => XS
    });
    var tS = gS(9411);
    const bS = "Air",
      XS = Object.freeze(new tS.e(bS, 0, "", null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null))
  }
};
Object.freeze(modules);
for (const SS in modules) Object.freeze(modules[SS]);