/*! For license information please see fecih8.wasmMatchmaking.52bde7c6.chunk.js.LICENSE.txt */
export const id = 74;
export const ids = [74];
export const modules = {
  37250: (UU, XU) => {
    function zU(UU) {
      if (UU && "object" === typeof UU) {
        var XU = UU.which || UU.keyCode || UU.charCode;
        XU && (UU = XU)
      }
      if ("number" === typeof UU) return AU[UU];
      var zU, QU = String(UU);
      return (zU = cU[QU.toLowerCase()]) ? zU : (zU = yU[QU.toLowerCase()]) || (1 === QU.length ? QU.charCodeAt(0) : void 0)
    }
    zU.isEventKey = function(UU, XU) {
      if (UU && "object" === typeof UU) {
        var zU = UU.which || UU.keyCode || UU.charCode;
        if (null === zU || void 0 === zU) return !1;
        if ("string" === typeof XU) {
          var QU;
          if (QU = cU[XU.toLowerCase()]) return QU === zU;
          if (QU = yU[XU.toLowerCase()]) return QU === zU
        } else if ("number" === typeof XU) return XU === zU;
        return !1
      }
    };
    var cU = (XU = UU.exports = zU).code = XU.codes = {
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
      yU = XU.aliases = {
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
    for (QU = 97; QU < 123; QU++) cU[String.fromCharCode(QU)] = QU - 32;
    for (var QU = 48; QU < 58; QU++) cU[QU - 48] = QU;
    for (QU = 1; QU < 13; QU++) cU["f" + QU] = QU + 111;
    for (QU = 0; QU < 10; QU++) cU["numpad " + QU] = QU + 96;
    var AU = XU.names = XU.title = {};
    for (QU in cU) AU[cU[QU]] = QU;
    for (var FU in yU) cU[FU] = yU[FU]
  },
  37429: (UU, XU, zU) => {
    zU.d(XU, {
      e: () => AU
    });
    var cU = zU(61);
    const yU = cU.useLayoutEffect;
    const QU = function(UU) {
      var XU = (0, cU.useRef)(UU);
      return yU((function() {
        XU.current = UU
      })), XU
    };
    var AU = function(UU) {
      var XU = QU(UU);
      (0, cU.useEffect)((function() {
        var UU = function(UU) {
          var zU;
          if (null != XU.current && (zU = XU.current(UU)), UU.defaultPrevented && (UU.returnValue = ""), "string" === typeof zU) return UU.returnValue = zU, zU
        };
        return window.addEventListener("beforeunload", UU),
          function() {
            window.removeEventListener("beforeunload", UU)
          }
      }), [])
    }
  },
  37301: UU => {
    var XU, zU = "undefined" !== typeof window ? window.navigator.userAgent : "",
      cU = /OS X/.test(zU),
      yU = /Opera/.test(zU),
      QU = !/like Gecko/.test(zU) && !yU,
      AU = UU.exports = {
        0: cU ? "<menu>" : "<UNK>",
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
        93: cU ? "<meta>" : "<menu>",
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
        173: cU && QU ? "-" : "<volume-mute>",
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
        231: yU ? "`" : "<unicode>",
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
    for (XU = 58; XU < 65; ++XU) AU[XU] = String.fromCharCode(XU);
    for (XU = 48; XU < 58; ++XU) AU[XU] = XU - 48 + "";
    for (XU = 65; XU < 91; ++XU) AU[XU] = String.fromCharCode(XU);
    for (XU = 96; XU < 106; ++XU) AU[XU] = "<num-" + (XU - 96) + ">";
    for (XU = 112; XU < 136; ++XU) AU[XU] = "F" + (XU - 111)
  },
  37318: (UU, XU, zU) => {
    zU.d(XU, {
      b: () => tU,
      e: () => gU,
      f: () => NU,
      h: () => YU
    });
    var cU = zU(34859),
      yU = zU(37325),
      QU = zU(37334),
      AU = zU(9282),
      FU = zU(1492),
      oU = zU(61),
      DU = zU(73),
      EU = zU(1305);

    function YU() {
      var UU;
      return (0, FU.j)(yU.d, (0, yU.o)()), (0, EU.jsx)(EU.Fragment, {
        children: null === (UU = (0, yU.o)()) || void 0 === UU ? void 0 : UU.content
      })
    }

    function NU(UU) {
      var XU;
      let {
        show: zU
      } = UU;
      (0, FU.j)(yU.d, (0, yU.o)());
      const DU = null === (XU = (0, yU.o)()) || void 0 === XU ? void 0 : XU.menu;
      return (0, oU.useEffect)((() => {
        var UU;
        zU || (null === DU || void 0 === DU || null === (UU = DU.onClose) || void 0 === UU || UU.call(DU), (0, QU.t)())
      }), [zU, DU]), (0, oU.useEffect)((() => zU ? (0, AU.d)(QU.x, QU.i) : void 0), [zU]), (0, EU.jsx)(cU.e, {
        showing: zU,
        globallyUniqueKey: "clientGameMenu",
        children: null === DU || void 0 === DU ? void 0 : DU.content
      })
    }
    const IU = new Map,
      pU = new Set;

    function aU(UU, XU) {
      XU ? IU.set(UU, XU) : IU.delete(UU);
      for (const zU of pU) zU()
    }

    function tU(UU) {
      let {
        placement: XU = "bottom"
      } = UU;
      const zU = (0, oU.useRef)(null);
      return (0, oU.useLayoutEffect)((() => {
        const UU = zU.current;
        return aU(XU, UU), () => {
          IU.get(XU) === UU && aU(XU, null)
        }
      }), [XU]), (0, EU.jsx)("div", {
        ref: zU,
        id: `clientGameHud-${XU}`,
        style: {
          display: "contents"
        }
      })
    }

    function gU(UU) {
      let {
        children: XU,
        placement: zU = "bottom"
      } = UU;
      const [cU, yU] = (0, oU.useState)((() => {
        var UU;
        return null !== (UU = IU.get(zU)) && void 0 !== UU ? UU : null
      }));
      return (0, oU.useEffect)((() => {
        const UU = () => {
          var UU;
          yU(null !== (UU = IU.get(zU)) && void 0 !== UU ? UU : null)
        };
        return pU.add(UU), UU(), () => {
          pU.delete(UU)
        }
      }), [zU]), cU ? (0, DU.createPortal)(XU, cU) : null
    }
  },
  9282: (UU, XU, zU) => {
    zU.d(XU, {
      c: () => QU,
      d: () => yU
    });
    let cU = null;
    const yU = function(UU) {
        const XU = {
          cycle: UU,
          canCycle: arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : () => !0
        };
        return cU = XU, () => {
          cU === XU && (cU = null)
        }
      },
      QU = () => {
        var UU;
        return null !== (UU = cU) && void 0 !== UU && UU.canCycle() ? cU.cycle : null
      }
  },
  9505: (UU, XU, zU) => {
    zU.d(XU, {
      e: () => QU,
      h: () => yU
    });
    let cU = !1;

    function yU() {
      cU = !0
    }

    function QU() {
      return cU
    }
  },
  37152: (UU, XU, zU) => {
    zU.r(XU), zU.d(XU, {
      InGameUi: () => ZU.e,
      LobbyLeaderboard: () => RU.d,
      loadCharacterCustomisationUI: () => PU,
      loadCharacterPreview: () => WU,
      matchmakeAndPlay: () => CU,
      matchmakeForAhead: () => FU.c,
      setUpGame: () => dU
    });
    var cU = zU(1262),
      yU = zU(173),
      QU = zU(27),
      AU = zU(37159),
      FU = zU(37167),
      oU = zU(2032),
      DU = zU(37203);

    function EU() {
      return !1 !== oU.d.get("canCustomiseChar")
    }
    let YU = !1;
    var NU = zU(1360),
      IU = zU(1266),
      pU = zU(264),
      aU = zU(3964),
      tU = zU(9505),
      gU = zU(9502);

    function kU() {
      (0, tU.e)() || (0, gU.d)().catch((UU => {
        console.warn("[bloxd-wasm-client] the play chunk did not load ahead of a join: the join loads it itself", UU)
      }))
    }
    var GU = zU(3837),
      BU = zU(1819);
    var ZU = zU(37213),
      RU = zU(37737);

    function PU() {
      return zU.e(235).then((() => zU(43979)))
    }

    function WU() {
      return zU.e(598).then((() => zU(43986)))
    }

    function dU() {
      return (0, gU.k)()
    }
    YU || (YU = !0, document.addEventListener("keydown", (UU => {
        (0, DU.c)(UU, EU)
      }))),
      function(UU) {
        var XU;
        return !0 !== (null === UU || void 0 === UU ? void 0 : UU.saveData) && !/2g$/.test(null !== (XU = null === UU || void 0 === UU ? void 0 : UU.effectiveType) && void 0 !== XU ? XU : "")
      }(navigator.connection) && (0, aU.g)((() => {
        (0, tU.e)() || Promise.all([zU.e(89), zU.e(103), zU.e(228), zU.e(227), zU.e(148), zU.e(153), zU.e(70)]).then((() => zU(42151))).then((async UU => {
          if ((0, tU.e)()) return;
          const XU = UU.startLoadAheadOfJoin({
            joinStarted: tU.e,
            language: IU.h.get().getCurrentLanguageCode()
          });
          (0, pU.b)((() => {
            (0, tU.e)() || UU.probeWebgl2AheadOfJoin()
          })), await XU, (0, pU.b)(kU)
        }), (UU => {
          console.warn("[bloxd-wasm-client] the loads ahead of a join did not start: the join loads the client itself", UU)
        }))
      }));
    const LU = QU.e.get("router");
    null === LU ? console.warn("[bloxd-wasm-client] no router as the matchmaking chunk loads: the join's loads start with the join") : function UU(XU) {
      if ((0, BU.c)(XU.state.location.pathname)) return void(0, gU.g)().catch((() => {}));
      const zU = XU.subscribe((cU => {
        (0, BU.c)(cU.location.pathname) && (zU(), (0, GU.g)().then((() => {
          UU(XU)
        })))
      }))
    }(LU), (0, AU.c)();
    const eU = (0, FU.b)((async function(UU, XU) {
      let {
        place: zU,
        userContext: QU,
        direct: AU,
        matchedAt: FU,
        rematch: oU
      } = UU;
      const DU = AU ? 1 / 0 : FU;
      let EU;
      try {
        EU = await (0, gU.g)()
      } catch (YU) {
        return console.error("The wasm client did not load:", YU), (0, NU.o)({
          websocketUrl: null
        }), cU.c.errorWithCode(String(YU), yU.m.CONNECT_TO_GAME_SERVER, {
          error: YU,
          severity: XU.aborted ? "low" : "medium",
          QU: XU.aborted
        })
      }
      return EU.playWasmGame({
        userContext: QU,
        place: zU,
        matchedAt: DU,
        rematch: oU
      }, XU)
    }));

    function CU() {
      return (0, gU.g)().catch((() => {})), eU(...arguments)
    }
  },
  9502: (UU, XU, zU) => {
    zU.d(XU, {
      d: () => IU,
      g: () => NU,
      k: () => pU
    });
    var cU = zU(3519),
      yU = zU(2410),
      QU = zU(2210),
      AU = zU(5085),
      FU = zU(3887),
      oU = zU(9505);
    let DU = null;

    function EU() {
      return Promise.all([zU.e(86), zU.e(89), zU.e(103), zU.e(228), zU.e(227), zU.e(148), zU.e(212), zU.e(234), zU.e(153), zU.e(101), zU.e(236), zU.e(75)]).then((() => zU(41736)))
    }

    function YU() {
      Promise.all([zU.e(84), zU.e(87), zU.e(85), zU.e(86), zU.e(103), zU.e(100), zU.e(294), zU.e(203), zU.e(242), zU.e(268), zU.e(236), zU.e(54)]).then((() => zU(42104))).catch((() => {}))
    }

    function NU() {
      return AU.e.cancelDownloadForJoin(), (0, FU.e)(), (0, yU.g)(), (0, oU.h)(), (0, QU.l)(), YU(), Promise.all([zU.e(89), zU.e(103), zU.e(228), zU.e(227), zU.e(148), zU.e(153), zU.e(70)]).then((() => zU(42151))).then((UU => {
        let {
          startJoinLoad: XU
        } = UU;
        XU()
      }), (() => {})), DU ??= EU().then((UU => (UU.startWasmPlay(), UU.followPageUiPack((UU => {
        cU.c.showGamePack(UU)
      })), UU)), (UU => {
        throw DU = null, UU
      })), DU
    }

    function IU() {
      return YU(), zU.e(296).then((() => zU(42154))).catch((() => {})), EU().then((() => {}))
    }

    function pU() {
      return EU().then((UU => {
        UU.startWasmPreviews(), UU.prefetchWasmPreviews()
      }))
    }
  },
  37564: (UU, XU, zU) => {
    function cU(UU) {
      return "fetch" === UU || "timeout" === UU || "integrity" === UU ? "download" : "browser"
    }
    zU.d(XU, {
      e: () => yU,
      i: () => FU,
      k: () => DU,
      o: () => AU,
      r: () => oU,
      u: () => cU,
      v: () => QU
    });
    const yU = "https://discord.gg/playbloxd";

    function QU(UU) {
      return "download" === UU ? {
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

    function AU() {
      return {
        icon: "face-dizzy",
        title: "wasmScreens:noContextTitle",
        help: "wasmScreens:noContextHelp",
        helpValues: {},
        discordLink: !1,
        confirm: "general:tryAgain",
        cancel: "general:back"
      }
    }

    function FU(UU, XU) {
      return {
        icon: "face-dizzy",
        title: "wasmScreens:crashTitle",
        help: XU ? "wasmScreens:crashHelp" : "wasmScreens:crashHelpNoDiscord",
        helpValues: {
          code: UU.code
        },
        discordLink: XU,
        confirm: "general:reload",
        cancel: "general:back"
      }
    }

    function oU() {
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

    function DU(UU, XU, zU) {
      return {
        icon: "wifi",
        title: "wasmScreens:disconnectedTitle",
        help: zU ? "wasmScreens:reconnectingHelp" : "wasmScreens:disconnectedHelp",
        helpValues: {
          reason: UU.reason
        },
        discordLink: null === UU.name,
        confirm: XU ? "general:reconnect" : UU.requiresRefresh ? "general:reload" : "general:ok",
        cancel: null
      }
    }
  },
  9894: (UU, XU, zU) => {
    zU.d(XU, {
      c: () => yU,
      f: () => QU
    });
    var cU = zU(9834);
    const yU = "Air",
      QU = Object.freeze(new cU.g(yU, 0, "", null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null))
  }
};
Object.freeze(modules);
for (const UU in modules) Object.freeze(modules[UU]);