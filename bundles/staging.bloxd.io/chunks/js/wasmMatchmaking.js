/*! For license information please see gw4e3a.wasmMatchmaking.e6d6a2c1.chunk.js.LICENSE.txt */
export const id = 74;
export const ids = [74, 176];
export const modules = {
  37206: (BB, OB) => {
    function GB(BB) {
      if (BB && "object" === typeof BB) {
        var OB = BB.which || BB.keyCode || BB.charCode;
        OB && (BB = OB)
      }
      if ("number" === typeof BB) return oB[BB];
      var GB, QB = String(BB);
      return (GB = YB[QB.toLowerCase()]) ? GB : (GB = DB[QB.toLowerCase()]) || (1 === QB.length ? QB.charCodeAt(0) : void 0)
    }
    GB.isEventKey = function(BB, OB) {
      if (BB && "object" === typeof BB) {
        var GB = BB.which || BB.keyCode || BB.charCode;
        if (null === GB || void 0 === GB) return !1;
        if ("string" === typeof OB) {
          var QB;
          if (QB = YB[OB.toLowerCase()]) return QB === GB;
          if (QB = DB[OB.toLowerCase()]) return QB === GB
        } else if ("number" === typeof OB) return OB === GB;
        return !1
      }
    };
    var YB = (OB = BB.exports = GB).code = OB.codes = {
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
      DB = OB.aliases = {
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
    for (QB = 97; QB < 123; QB++) YB[String.fromCharCode(QB)] = QB - 32;
    for (var QB = 48; QB < 58; QB++) YB[QB - 48] = QB;
    for (QB = 1; QB < 13; QB++) YB["f" + QB] = QB + 111;
    for (QB = 0; QB < 10; QB++) YB["numpad " + QB] = QB + 96;
    var oB = OB.names = OB.title = {};
    for (QB in YB) oB[YB[QB]] = QB;
    for (var jB in DB) YB[jB] = DB[jB]
  },
  37378: (BB, OB, GB) => {
    GB.d(OB, {
      c: () => oB
    });
    var YB = GB(56);
    const DB = YB.useLayoutEffect;
    const QB = function(BB) {
      var OB = (0, YB.useRef)(BB);
      return DB((function() {
        OB.current = BB
      })), OB
    };
    var oB = function(BB) {
      var OB = QB(BB);
      (0, YB.useEffect)((function() {
        var BB = function(BB) {
          var GB;
          if (null != OB.current && (GB = OB.current(BB)), BB.defaultPrevented && (BB.returnValue = ""), "string" === typeof GB) return BB.returnValue = GB, GB
        };
        return window.addEventListener("beforeunload", BB),
          function() {
            window.removeEventListener("beforeunload", BB)
          }
      }), [])
    }
  },
  37244: BB => {
    var OB, GB = "undefined" !== typeof window ? window.navigator.userAgent : "",
      YB = /OS X/.test(GB),
      DB = /Opera/.test(GB),
      QB = !/like Gecko/.test(GB) && !DB,
      oB = BB.exports = {
        0: YB ? "<menu>" : "<UNK>",
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
        93: YB ? "<meta>" : "<menu>",
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
        173: YB && QB ? "-" : "<volume-mute>",
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
        231: DB ? "`" : "<unicode>",
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
    for (OB = 58; OB < 65; ++OB) oB[OB] = String.fromCharCode(OB);
    for (OB = 48; OB < 58; ++OB) oB[OB] = OB - 48 + "";
    for (OB = 65; OB < 91; ++OB) oB[OB] = String.fromCharCode(OB);
    for (OB = 96; OB < 106; ++OB) oB[OB] = "<num-" + (OB - 96) + ">";
    for (OB = 112; OB < 136; ++OB) oB[OB] = "F" + (OB - 111)
  },
  37263: (BB, OB, GB) => {
    GB.d(OB, {
      c: () => ZB,
      e: () => NB,
      h: () => zB,
      l: () => PB
    });
    var YB = GB(34790),
      DB = GB(37267),
      QB = GB(37270),
      oB = GB(9391),
      jB = GB(1480),
      yB = GB(56),
      JB = GB(70),
      MB = GB(1282);

    function PB() {
      var BB;
      return (0, jB.i)(DB.d, (0, DB.n)()), (0, MB.jsx)(MB.Fragment, {
        children: null === (BB = (0, DB.n)()) || void 0 === BB ? void 0 : BB.content
      })
    }

    function zB(BB) {
      var OB;
      let {
        show: GB
      } = BB;
      (0, jB.i)(DB.d, (0, DB.n)());
      const JB = null === (OB = (0, DB.n)()) || void 0 === OB ? void 0 : OB.menu;
      return (0, yB.useEffect)((() => {
        var BB;
        GB || (null === JB || void 0 === JB || null === (BB = JB.onClose) || void 0 === BB || BB.call(JB), (0, QB.u)())
      }), [GB, JB]), (0, yB.useEffect)((() => GB ? (0, oB.d)(QB.D, QB.i) : void 0), [GB]), (0, MB.jsx)(YB.d, {
        showing: GB,
        globallyUniqueKey: "clientGameMenu",
        children: null === JB || void 0 === JB ? void 0 : JB.content
      })
    }
    const lB = new Map,
      pB = new Set;

    function qB(BB, OB) {
      OB ? lB.set(BB, OB) : lB.delete(BB);
      for (const GB of pB) GB()
    }

    function ZB(BB) {
      let {
        placement: OB = "bottom"
      } = BB;
      const GB = (0, yB.useRef)(null);
      return (0, yB.useLayoutEffect)((() => {
        const BB = GB.current;
        return qB(OB, BB), () => {
          lB.get(OB) === BB && qB(OB, null)
        }
      }), [OB]), (0, MB.jsx)("div", {
        ref: GB,
        id: `clientGameHud-${OB}`,
        style: {
          display: "contents"
        }
      })
    }

    function NB(BB) {
      let {
        children: OB,
        placement: GB = "bottom"
      } = BB;
      const [YB, DB] = (0, yB.useState)((() => {
        var BB;
        return null !== (BB = lB.get(GB)) && void 0 !== BB ? BB : null
      }));
      return (0, yB.useEffect)((() => {
        const BB = () => {
          var BB;
          DB(null !== (BB = lB.get(GB)) && void 0 !== BB ? BB : null)
        };
        return pB.add(BB), BB(), () => {
          pB.delete(BB)
        }
      }), [GB]), YB ? (0, JB.createPortal)(OB, YB) : null
    }
  },
  9391: (BB, OB, GB) => {
    GB.d(OB, {
      c: () => QB,
      d: () => DB
    });
    let YB = null;
    const DB = function(BB) {
        const OB = {
          cycle: BB,
          canCycle: arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : () => !0
        };
        return YB = OB, () => {
          YB === OB && (YB = null)
        }
      },
      QB = () => {
        var BB;
        return null !== (BB = YB) && void 0 !== BB && BB.canCycle() ? YB.cycle : null
      }
  },
  9614: (BB, OB, GB) => {
    GB.d(OB, {
      c: () => QB,
      d: () => DB
    });
    let YB = !1;

    function DB() {
      YB = !0
    }

    function QB() {
      return YB
    }
  },
  37120: (BB, OB, GB) => {
    GB.r(OB), GB.d(OB, {
      InGameUi: () => VB.e,
      LobbyLeaderboard: () => SB.d,
      loadCharacterCustomisationUI: () => nB,
      loadCharacterPreview: () => UB,
      matchmakeAndPlay: () => KB,
      matchmakeForAhead: () => jB.f,
      setUpGame: () => fB
    });
    var YB = GB(1246),
      DB = GB(162),
      QB = GB(16),
      oB = GB(37127),
      jB = GB(37129),
      yB = GB(2050),
      JB = GB(37163);

    function MB() {
      return !1 !== yB.e.get("canCustomiseChar")
    }
    let PB = !1;
    var zB = GB(1350),
      lB = GB(1253),
      pB = GB(244),
      qB = GB(4018),
      ZB = GB(9614),
      NB = GB(9608);

    function RB() {
      (0, ZB.c)() || (0, NB.loadWasmPlayAhead)().catch((BB => {
        console.warn("[bloxd-wasm-client] the play chunk did not load ahead of a join: the join loads it itself", BB)
      }))
    }
    var WB = GB(3873),
      AB = GB(1837);
    var VB = GB(37170),
      SB = GB(37701);

    function nB() {
      return Promise.all([GB.e(170), GB.e(236)]).then((() => GB(44444)))
    }

    function UB() {
      return Promise.all([GB.e(170), GB.e(237)]).then((() => GB(44451)))
    }

    function fB() {
      return (0, NB.loadWasmPreviews)()
    }
    PB || (PB = !0, document.addEventListener("keydown", (BB => {
        (0, JB.d)(BB, MB)
      }))),
      function(BB) {
        var OB;
        return !0 !== (null === BB || void 0 === BB ? void 0 : BB.saveData) && !/2g$/.test(null !== (OB = null === BB || void 0 === BB ? void 0 : BB.effectiveType) && void 0 !== OB ? OB : "")
      }(navigator.connection) && (0, qB.e)((() => {
        (0, ZB.c)() || Promise.all([GB.e(89), GB.e(103), GB.e(234), GB.e(233), GB.e(150), GB.e(155), GB.e(70)]).then((() => GB(42053))).then((async BB => {
          if ((0, ZB.c)()) return;
          const OB = BB.startLoadAheadOfJoin({
            joinStarted: ZB.c,
            language: lB.e.get().getCurrentLanguageCode()
          });
          (0, pB.b)((() => {
            (0, ZB.c)() || BB.probeWebgl2AheadOfJoin()
          })), await OB, (0, pB.b)(RB)
        }), (BB => {
          console.warn("[bloxd-wasm-client] the loads ahead of a join did not start: the join loads the client itself", BB)
        }))
      }));
    const kB = QB.c.get("router");
    null === kB ? console.warn("[bloxd-wasm-client] no router as the matchmaking chunk loads: the join's loads start with the join") : function BB(OB) {
      if ((0, AB.c)(OB.state.location.pathname)) return void(0, NB.loadWasmPlay)().catch((() => {}));
      const GB = OB.subscribe((YB => {
        (0, AB.c)(YB.location.pathname) && (GB(), (0, WB.e)().then((() => {
          BB(OB)
        })))
      }))
    }(kB), (0, oB.c)();
    const dB = (0, jB.b)((async function(BB, OB) {
      let {
        place: GB,
        userContext: QB,
        direct: oB,
        matchedAt: jB,
        rematch: yB
      } = BB;
      const JB = oB ? 1 / 0 : jB;
      let MB;
      try {
        MB = await (0, NB.loadWasmPlay)()
      } catch (PB) {
        return console.error("The wasm client did not load:", PB), (0, zB.n)({
          websocketUrl: null
        }), YB.c.errorWithCode(String(PB), DB.l.CONNECT_TO_GAME_SERVER, {
          error: PB,
          severity: OB.aborted ? "low" : "medium",
          rB: OB.aborted
        })
      }
      return MB.playWasmGame({
        userContext: QB,
        place: GB,
        matchedAt: JB,
        rematch: yB
      }, OB)
    }));

    function KB() {
      return (0, NB.loadWasmPlay)().catch((() => {})), dB(...arguments)
    }
  },
  9608: (BB, OB, GB) => {
    GB.r(OB), GB.d(OB, {
      loadWasmPlay: () => zB,
      loadWasmPlayAhead: () => lB,
      loadWasmPreviews: () => pB
    });
    var YB = GB(3573),
      DB = GB(2457),
      QB = GB(2250),
      oB = GB(5065),
      jB = GB(3944),
      yB = GB(9614);
    let JB = null;

    function MB() {
      return Promise.all([GB.e(86), GB.e(89), GB.e(103), GB.e(234), GB.e(233), GB.e(150), GB.e(216), GB.e(243), GB.e(155), GB.e(101), GB.e(244), GB.e(75)]).then((() => GB(41683)))
    }

    function PB() {
      Promise.all([GB.e(84), GB.e(87), GB.e(85), GB.e(86), GB.e(103), GB.e(100), GB.e(300), GB.e(207), GB.e(250), GB.e(274), GB.e(244), GB.e(54)]).then((() => GB(42017))).catch((() => {}))
    }

    function zB() {
      return oB.b.cancelDownloadForJoin(), (0, jB.d)(), (0, DB.h)(), (0, yB.d)(), (0, QB.j)(), PB(), Promise.all([GB.e(89), GB.e(103), GB.e(234), GB.e(233), GB.e(150), GB.e(155), GB.e(70)]).then((() => GB(42053))).then((BB => {
        let {
          startJoinLoad: OB
        } = BB;
        OB()
      }), (() => {})), JB ??= MB().then((BB => (BB.startWasmPlay(), BB.followPageUiPack((BB => {
        YB.c.showGamePack(BB)
      })), BB)), (BB => {
        throw JB = null, BB
      })), JB
    }

    function lB() {
      return PB(), GB.e(124).then((() => GB(42056))).catch((() => {})), MB().then((() => {}))
    }

    function pB() {
      return MB().then((BB => {
        BB.startWasmPreviews(), BB.prefetchWasmPreviews()
      }))
    }
  },
  37536: (BB, OB, GB) => {
    function YB(BB) {
      return "fetch" === BB || "timeout" === BB || "integrity" === BB ? "download" : "browser"
    }
    GB.d(OB, {
      b: () => DB,
      c: () => yB,
      g: () => MB,
      h: () => jB,
      l: () => oB,
      m: () => JB,
      p: () => YB,
      q: () => QB
    });
    const DB = "https://discord.gg/playbloxd";

    function QB(BB, OB) {
      return "download" === BB ? {
        icon: "wifi",
        title: "wasmScreens:downloadFailedTitle",
        help: "wasmScreens:downloadFailedHelp",
        helpValues: {},
        discordLink: !1,
        confirm: "general:tryAgain",
        cancel: "general:back"
      } : "memory" === BB || "noContext" === BB || "graphicsLost" === BB ? {
        icon: "face-dizzy",
        title: `wasmUnsupported:${BB}Title`,
        help: `wasmUnsupported:${BB}Help${OB?"App":""}`,
        helpValues: {},
        discordLink: !1,
        confirm: "general:tryAgain",
        cancel: "general:back"
      } : {
        icon: "face-dizzy",
        title: OB ? "wasmUnsupported:titleApp" : "wasmUnsupported:title",
        help: OB ? "wasmUnsupported:helpApp" : "wasmUnsupported:" + ("noWebAssembly" === BB ? "noWebAssemblyHelp" : "help"),
        helpValues: {},
        discordLink: !1,
        confirm: "general:ok",
        cancel: null
      }
    }

    function oB(BB, OB) {
      return {
        ...QB(BB, OB),
        help: OB ? "wasmUnsupported:stillBlockedHelpApp" : `wasmUnsupported:${BB}StillHelp`
      }
    }

    function jB() {
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

    function yB(BB, OB) {
      return {
        icon: "face-dizzy",
        title: "wasmScreens:crashTitle",
        help: OB ? "wasmScreens:crashHelp" : "wasmScreens:crashHelpNoDiscord",
        helpValues: {
          code: BB.code
        },
        discordLink: OB,
        confirm: "general:reload",
        cancel: "general:back"
      }
    }

    function JB() {
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

    function MB(BB, OB, GB) {
      return {
        icon: "wifi",
        title: "wasmScreens:disconnectedTitle",
        help: GB ? "wasmScreens:reconnectingHelp" : "wasmScreens:disconnectedHelp",
        helpValues: {
          reason: BB.reason
        },
        discordLink: null === BB.name,
        confirm: OB ? "general:reconnect" : BB.requiresRefresh ? "general:reload" : "general:ok",
        cancel: null
      }
    }
  },
  36977: (BB, OB, GB) => {
    GB.d(OB, {
      B: () => lB,
      C: () => pB,
      F: () => qB,
      G: () => NB,
      b: () => YB,
      e: () => PB,
      f: () => DB,
      h: () => zB,
      i: () => ZB,
      m: () => MB,
      q: () => RB,
      t: () => yB,
      x: () => JB
    });
    const YB = [{
      numLines: 7,
      charsPerLine: 16,
      uiFontSize: 3.3,
      ingameFontSize: 25
    }, {
      numLines: 5,
      charsPerLine: 11,
      uiFontSize: 4.6,
      ingameFontSize: 36
    }, {
      numLines: 3,
      charsPerLine: 7,
      uiFontSize: 7.5,
      ingameFontSize: 58
    }];

    function DB(BB, OB) {
      const {
        numLines: GB,
        charsPerLine: DB
      } = YB[OB];
      return WB(BB, GB, DB, !1)
    }
    const QB = 7 / 8,
      oB = .25,
      jB = 8;

    function yB(BB, OB) {
      return {
        width: Math.min(BB, jB) - 2 * oB,
        height: Math.min(OB, jB) - 2 * oB
      }
    }

    function JB(BB, OB, GB) {
      const DB = yB(BB, OB),
        {
          numLines: oB,
          charsPerLine: jB
        } = YB[GB];
      return {
        numLines: Math.max(1, Math.floor(oB / QB * DB.height)),
        charsPerLine: Math.max(1, Math.floor(jB * DB.width))
      }
    }

    function MB(BB, OB, GB, YB) {
      const {
        numLines: DB,
        charsPerLine: QB
      } = JB(GB, YB, OB);
      return WB(BB, DB, QB, !1)
    }
    const PB = 32e3;

    function zB(BB) {
      return BB.slice(0, PB)
    }
    const lB = 512e3,
      pB = 64,
      qB = lB;

    function ZB(BB, OB) {
      const GB = Math.max(0, qB - OB),
        YB = Math.min(lB, GB);
      return BB.slice(0, YB)
    }
    const NB = {
      book: {
        numLines: 13,
        charsPerLine: 19,
        uiFontSize: 1.95
      },
      KJ: {
        numLines: 1,
        charsPerLine: 19,
        uiFontSize: 1.95
      },
      nameTag: {
        numLines: 1,
        charsPerLine: 13,
        uiFontSize: 4.6
      }
    };

    function RB(BB, OB) {
      const {
        numLines: GB,
        charsPerLine: YB
      } = NB[OB];
      return WB(BB, GB, YB, !1)
    }

    function WB(BB, OB, GB, YB, DB) {
      (DB || YB) && (BB = BB.slice(0, null !== DB && void 0 !== DB ? DB : OB * GB));
      const QB = BB.split("\n");
      if (QB.length > OB && QB.splice(OB, QB.length - OB), !YB)
        for (let oB = 0; oB < QB.length; oB++) {
          const BB = QB[oB];
          BB.length > GB && (QB[oB] = BB.substring(0, GB), QB.length < OB && QB.splice(oB + 1, 0, BB.substring(GB)))
        }
      return QB.join("\n")
    }
  },
  10027: (BB, OB, GB) => {
    GB.d(OB, {
      c: () => DB,
      g: () => QB
    });
    var YB = GB(9974);
    const DB = "Air",
      QB = Object.freeze(new YB.g(DB, 0, "", null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null))
  }
};
Object.freeze(modules);
for (const BB in modules) Object.freeze(modules[BB]);