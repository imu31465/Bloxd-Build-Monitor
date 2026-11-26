/*! For license information please see cwj32u.wasmMatchmaking.2c92509d.chunk.js.LICENSE.txt */
export const id = 74;
export const ids = [74, 176];
export const modules = {
  37424: (HH, BH) => {
    function LH(HH) {
      if (HH && "object" === typeof HH) {
        var BH = HH.which || HH.keyCode || HH.charCode;
        BH && (HH = BH)
      }
      if ("number" === typeof HH) return hH[HH];
      var LH, SH = String(HH);
      return (LH = AH[SH.toLowerCase()]) ? LH : (LH = rH[SH.toLowerCase()]) || (1 === SH.length ? SH.charCodeAt(0) : void 0)
    }
    LH.isEventKey = function(HH, BH) {
      if (HH && "object" === typeof HH) {
        var LH = HH.which || HH.keyCode || HH.charCode;
        if (null === LH || void 0 === LH) return !1;
        if ("string" === typeof BH) {
          var SH;
          if (SH = AH[BH.toLowerCase()]) return SH === LH;
          if (SH = rH[BH.toLowerCase()]) return SH === LH
        } else if ("number" === typeof BH) return BH === LH;
        return !1
      }
    };
    var AH = (BH = HH.exports = LH).code = BH.codes = {
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
      rH = BH.aliases = {
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
    for (SH = 97; SH < 123; SH++) AH[String.fromCharCode(SH)] = SH - 32;
    for (var SH = 48; SH < 58; SH++) AH[SH - 48] = SH;
    for (SH = 1; SH < 13; SH++) AH["f" + SH] = SH + 111;
    for (SH = 0; SH < 10; SH++) AH["numpad " + SH] = SH + 96;
    var hH = BH.names = BH.title = {};
    for (SH in AH) hH[AH[SH]] = SH;
    for (var tH in rH) AH[tH] = rH[tH]
  },
  37578: (HH, BH, LH) => {
    LH.d(BH, {
      e: () => hH
    });
    var AH = LH(45);
    const rH = AH.useLayoutEffect;
    const SH = function(HH) {
      var BH = (0, AH.useRef)(HH);
      return rH((function() {
        BH.current = HH
      })), BH
    };
    var hH = function(HH) {
      var BH = SH(HH);
      (0, AH.useEffect)((function() {
        var HH = function(HH) {
          var LH;
          if (null != BH.current && (LH = BH.current(HH)), HH.defaultPrevented && (HH.returnValue = ""), "string" === typeof LH) return HH.returnValue = LH, LH
        };
        return window.addEventListener("beforeunload", HH),
          function() {
            window.removeEventListener("beforeunload", HH)
          }
      }), [])
    }
  },
  37461: HH => {
    var BH, LH = "undefined" !== typeof window ? window.navigator.userAgent : "",
      AH = /OS X/.test(LH),
      rH = /Opera/.test(LH),
      SH = !/like Gecko/.test(LH) && !rH,
      hH = HH.exports = {
        0: AH ? "<menu>" : "<UNK>",
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
        93: AH ? "<meta>" : "<menu>",
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
        173: AH && SH ? "-" : "<volume-mute>",
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
        231: rH ? "`" : "<unicode>",
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
    for (BH = 58; BH < 65; ++BH) hH[BH] = String.fromCharCode(BH);
    for (BH = 48; BH < 58; ++BH) hH[BH] = BH - 48 + "";
    for (BH = 65; BH < 91; ++BH) hH[BH] = String.fromCharCode(BH);
    for (BH = 96; BH < 106; ++BH) hH[BH] = "<num-" + (BH - 96) + ">";
    for (BH = 112; BH < 136; ++BH) hH[BH] = "F" + (BH - 111)
  },
  37472: (HH, BH, LH) => {
    LH.d(BH, {
      d: () => WH,
      e: () => MH,
      i: () => GH,
      k: () => XH
    });
    var AH = LH(34986),
      rH = LH(37474),
      SH = LH(37479),
      hH = LH(9412),
      tH = LH(1450),
      zH = LH(45),
      CH = LH(69),
      EH = LH(1225);

    function XH() {
      var HH;
      return (0, tH.e)(rH.b, (0, rH.p)()), (0, EH.jsx)(EH.Fragment, {
        children: null === (HH = (0, rH.p)()) || void 0 === HH ? void 0 : HH.content
      })
    }

    function GH(HH) {
      var BH;
      let {
        show: LH
      } = HH;
      (0, tH.e)(rH.b, (0, rH.p)());
      const CH = null === (BH = (0, rH.p)()) || void 0 === BH ? void 0 : BH.menu;
      return (0, zH.useEffect)((() => {
        var HH;
        LH || (null === CH || void 0 === CH || null === (HH = CH.onClose) || void 0 === HH || HH.call(CH), (0, SH.r)())
      }), [LH, CH]), (0, zH.useEffect)((() => LH ? (0, hH.e)(SH.A, SH.g) : void 0), [LH]), (0, EH.jsx)(AH.e, {
        showing: LH,
        globallyUniqueKey: "clientGameMenu",
        children: null === CH || void 0 === CH ? void 0 : CH.content
      })
    }
    const YH = new Map,
      uH = new Set;

    function QH(HH, BH) {
      BH ? YH.set(HH, BH) : YH.delete(HH);
      for (const LH of uH) LH()
    }

    function WH(HH) {
      let {
        placement: BH = "bottom"
      } = HH;
      const LH = (0, zH.useRef)(null);
      return (0, zH.useLayoutEffect)((() => {
        const HH = LH.current;
        return QH(BH, HH), () => {
          YH.get(BH) === HH && QH(BH, null)
        }
      }), [BH]), (0, EH.jsx)("div", {
        ref: LH,
        id: `clientGameHud-${BH}`,
        style: {
          display: "contents"
        }
      })
    }

    function MH(HH) {
      let {
        children: BH,
        placement: LH = "bottom"
      } = HH;
      const [AH, rH] = (0, zH.useState)((() => {
        var HH;
        return null !== (HH = YH.get(LH)) && void 0 !== HH ? HH : null
      }));
      return (0, zH.useEffect)((() => {
        const HH = () => {
          var HH;
          rH(null !== (HH = YH.get(LH)) && void 0 !== HH ? HH : null)
        };
        return uH.add(HH), HH(), () => {
          uH.delete(HH)
        }
      }), [LH]), AH ? (0, CH.createPortal)(BH, AH) : null
    }
  },
  9412: (HH, BH, LH) => {
    LH.d(BH, {
      c: () => SH,
      e: () => rH
    });
    let AH = null;
    const rH = function(HH) {
        const BH = {
          cycle: HH,
          canCycle: arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : () => !0
        };
        return AH = BH, () => {
          AH === BH && (AH = null)
        }
      },
      SH = () => {
        var HH;
        return null !== (HH = AH) && void 0 !== HH && HH.canCycle() ? AH.cycle : null
      }
  },
  9634: (HH, BH, LH) => {
    LH.d(BH, {
      c: () => SH,
      f: () => rH
    });
    let AH = !1;

    function rH() {
      AH = !0
    }

    function SH() {
      return AH
    }
  },
  37330: (HH, BH, LH) => {
    LH.r(BH), LH.d(BH, {
      InGameUi: () => TH.e,
      LobbyLeaderboard: () => UH.b,
      loadCharacterCustomisationUI: () => VH,
      loadCharacterPreview: () => OH,
      matchmakeAndPlay: () => oH,
      matchmakeForAhead: () => tH.d,
      setUpGame: () => bH
    });
    var AH = LH(1188),
      rH = LH(152),
      SH = LH(15),
      hH = LH(37336),
      tH = LH(37339),
      zH = LH(2036),
      CH = LH(37368);

    function EH() {
      return !1 !== zH.e.get("canCustomiseChar")
    }
    let XH = !1;
    var GH = LH(1297),
      YH = LH(1194),
      uH = LH(225),
      QH = LH(3961),
      WH = LH(9634),
      MH = LH(9631);

    function xH() {
      (0, WH.c)() || (0, MH.loadWasmPlayAhead)().catch((HH => {
        console.warn("[bloxd-wasm-client] the play chunk did not load ahead of a join: the join loads it itself", HH)
      }))
    }
    var vH = LH(3811),
      PH = LH(1812);
    var TH = LH(37375),
      UH = LH(37874);

    function VH() {
      return Promise.all([LH.e(170), LH.e(236)]).then((() => LH(44789)))
    }

    function OH() {
      return Promise.all([LH.e(170), LH.e(237)]).then((() => LH(44796)))
    }

    function bH() {
      return (0, MH.loadWasmPreviews)()
    }
    XH || (XH = !0, document.addEventListener("keydown", (HH => {
        (0, CH.d)(HH, EH)
      }))),
      function(HH) {
        var BH;
        return !0 !== (null === HH || void 0 === HH ? void 0 : HH.saveData) && !/2g$/.test(null !== (BH = null === HH || void 0 === HH ? void 0 : HH.effectiveType) && void 0 !== BH ? BH : "")
      }(navigator.connection) && (0, QH.d)((() => {
        (0, WH.c)() || Promise.all([LH.e(89), LH.e(103), LH.e(234), LH.e(233), LH.e(150), LH.e(155), LH.e(70)]).then((() => LH(42355))).then((async HH => {
          if ((0, WH.c)()) return;
          const BH = HH.startLoadAheadOfJoin({
            joinStarted: WH.c,
            language: YH.g.get().getCurrentLanguageCode()
          });
          (0, uH.d)((() => {
            (0, WH.c)() || HH.probeWebgl2AheadOfJoin()
          })), await BH, (0, uH.d)(xH)
        }), (HH => {
          console.warn("[bloxd-wasm-client] the loads ahead of a join did not start: the join loads the client itself", HH)
        }))
      }));
    const kH = SH.c.get("router");
    null === kH ? console.warn("[bloxd-wasm-client] no router as the matchmaking chunk loads: the join's loads start with the join") : function HH(BH) {
      if ((0, PH.c)(BH.state.location.pathname)) return void(0, MH.loadWasmPlay)().catch((() => {}));
      const LH = BH.subscribe((AH => {
        (0, PH.c)(AH.location.pathname) && (LH(), (0, vH.e)().then((() => {
          HH(BH)
        })))
      }))
    }(kH), (0, hH.b)();
    const mH = (0, tH.b)((async function(HH, BH) {
      let {
        place: LH,
        userContext: SH,
        direct: hH,
        matchedAt: tH,
        rematch: zH
      } = HH;
      const CH = hH ? 1 / 0 : tH;
      let EH;
      try {
        EH = await (0, MH.loadWasmPlay)()
      } catch (XH) {
        return console.error("The wasm client did not load:", XH), (0, GH.p)({
          websocketUrl: null
        }), AH.e.errorWithCode(String(XH), rH.h.CONNECT_TO_GAME_SERVER, {
          error: XH,
          severity: BH.aborted ? "low" : "medium",
          xB: BH.aborted
        })
      }
      return EH.playWasmGame({
        userContext: SH,
        place: LH,
        matchedAt: CH,
        rematch: zH
      }, BH)
    }));

    function oH() {
      return (0, MH.loadWasmPlay)().catch((() => {})), mH(...arguments)
    }
  },
  9631: (HH, BH, LH) => {
    LH.r(BH), LH.d(BH, {
      loadWasmPlay: () => GH,
      loadWasmPlayAhead: () => YH,
      loadWasmPreviews: () => uH
    });
    var AH = LH(3503),
      rH = LH(2413),
      SH = LH(2215),
      hH = LH(5062),
      tH = LH(3892),
      zH = LH(9634);
    let CH = null;

    function EH() {
      return Promise.all([LH.e(86), LH.e(89), LH.e(103), LH.e(234), LH.e(233), LH.e(150), LH.e(216), LH.e(243), LH.e(155), LH.e(101), LH.e(244), LH.e(75)]).then((() => LH(42e3)))
    }

    function XH() {
      Promise.all([LH.e(84), LH.e(87), LH.e(85), LH.e(86), LH.e(103), LH.e(100), LH.e(300), LH.e(207), LH.e(250), LH.e(274), LH.e(244), LH.e(54)]).then((() => LH(42318))).catch((() => {}))
    }

    function GH() {
      return hH.b.cancelDownloadForJoin(), (0, tH.e)(), (0, rH.f)(), (0, zH.f)(), (0, SH.g)(), XH(), Promise.all([LH.e(89), LH.e(103), LH.e(234), LH.e(233), LH.e(150), LH.e(155), LH.e(70)]).then((() => LH(42355))).then((HH => {
        let {
          startJoinLoad: BH
        } = HH;
        BH()
      }), (() => {})), CH ??= EH().then((HH => (HH.startWasmPlay(), HH.followPageUiPack((HH => {
        AH.b.showGamePack(HH)
      })), HH)), (HH => {
        throw CH = null, HH
      })), CH
    }

    function YH() {
      return XH(), LH.e(124).then((() => LH(42361))).catch((() => {})), EH().then((() => {}))
    }

    function uH() {
      return EH().then((HH => {
        HH.startWasmPreviews(), HH.prefetchWasmPreviews()
      }))
    }
  },
  37702: (HH, BH, LH) => {
    function AH(HH) {
      return "fetch" === HH || "timeout" === HH || "integrity" === HH ? "download" : "browser"
    }
    LH.d(BH, {
      d: () => rH,
      e: () => zH,
      g: () => EH,
      h: () => tH,
      l: () => hH,
      n: () => CH,
      o: () => AH,
      r: () => SH
    });
    const rH = "https://discord.gg/playbloxd";

    function SH(HH, BH) {
      return "download" === HH ? {
        icon: "wifi",
        title: "wasmScreens:downloadFailedTitle",
        help: "wasmScreens:downloadFailedHelp",
        helpValues: {},
        discordLink: !1,
        confirm: "general:tryAgain",
        cancel: "general:back"
      } : "memory" === HH || "noContext" === HH || "graphicsLost" === HH ? {
        icon: "face-dizzy",
        title: `wasmUnsupported:${HH}Title`,
        help: `wasmUnsupported:${HH}Help${BH?"App":""}`,
        helpValues: {},
        discordLink: !1,
        confirm: "general:tryAgain",
        cancel: "general:back"
      } : {
        icon: "face-dizzy",
        title: BH ? "wasmUnsupported:titleApp" : "wasmUnsupported:title",
        help: BH ? "wasmUnsupported:helpApp" : "wasmUnsupported:" + ("noWebAssembly" === HH ? "noWebAssemblyHelp" : "help"),
        helpValues: {},
        discordLink: !1,
        confirm: "general:ok",
        cancel: null
      }
    }

    function hH(HH, BH) {
      return {
        ...SH(HH, BH),
        help: BH ? "wasmUnsupported:stillBlockedHelpApp" : `wasmUnsupported:${HH}StillHelp`
      }
    }

    function tH() {
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

    function zH(HH, BH) {
      return {
        icon: "face-dizzy",
        title: "wasmScreens:crashTitle",
        help: BH ? "wasmScreens:crashHelp" : "wasmScreens:crashHelpNoDiscord",
        helpValues: {
          code: HH.code
        },
        discordLink: BH,
        confirm: "general:reload",
        cancel: "general:back"
      }
    }

    function CH() {
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

    function EH(HH, BH, LH) {
      return {
        icon: "wifi",
        title: "wasmScreens:disconnectedTitle",
        help: LH ? "wasmScreens:reconnectingHelp" : "wasmScreens:disconnectedHelp",
        helpValues: {
          reason: HH.reason
        },
        discordLink: null === HH.name,
        confirm: BH ? "general:reconnect" : HH.requiresRefresh ? "general:reload" : "general:ok",
        cancel: null
      }
    }
  },
  37146: (HH, BH, LH) => {
    LH.d(BH, {
      C: () => uH,
      E: () => QH,
      F: () => MH,
      c: () => AH,
      e: () => XH,
      g: () => rH,
      h: () => GH,
      l: () => WH,
      n: () => EH,
      r: () => xH,
      u: () => zH,
      y: () => CH,
      z: () => YH
    });
    const AH = [{
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

    function rH(HH, BH) {
      const {
        numLines: LH,
        charsPerLine: rH
      } = AH[BH];
      return vH(HH, LH, rH, !1)
    }
    const SH = 7 / 8,
      hH = .25,
      tH = 8;

    function zH(HH, BH) {
      return {
        width: Math.min(HH, tH) - 2 * hH,
        height: Math.min(BH, tH) - 2 * hH
      }
    }

    function CH(HH, BH, LH) {
      const rH = zH(HH, BH),
        {
          numLines: hH,
          charsPerLine: tH
        } = AH[LH];
      return {
        numLines: Math.max(1, Math.floor(hH / SH * rH.height)),
        charsPerLine: Math.max(1, Math.floor(tH * rH.width))
      }
    }

    function EH(HH, BH, LH, AH) {
      const {
        numLines: rH,
        charsPerLine: SH
      } = CH(LH, AH, BH);
      return vH(HH, rH, SH, !1)
    }
    const XH = 32e3;

    function GH(HH) {
      return HH.slice(0, XH)
    }
    const YH = 512e3,
      uH = 64,
      QH = YH;

    function WH(HH, BH) {
      const LH = Math.max(0, QH - BH),
        AH = Math.min(YH, LH);
      return HH.slice(0, AH)
    }
    const MH = {
      book: {
        numLines: 13,
        charsPerLine: 19,
        uiFontSize: 1.95
      },
      qh: {
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

    function xH(HH, BH) {
      const {
        numLines: LH,
        charsPerLine: AH
      } = MH[BH];
      return vH(HH, LH, AH, !1)
    }

    function vH(HH, BH, LH, AH, rH) {
      (rH || AH) && (HH = HH.slice(0, null !== rH && void 0 !== rH ? rH : BH * LH));
      const SH = HH.split("\n");
      if (SH.length > BH && SH.splice(BH, SH.length - BH), !AH)
        for (let hH = 0; hH < SH.length; hH++) {
          const HH = SH[hH];
          HH.length > LH && (SH[hH] = HH.substring(0, LH), SH.length < BH && SH.splice(hH + 1, 0, HH.substring(LH)))
        }
      return SH.join("\n")
    }
  },
  10030: (HH, BH, LH) => {
    LH.d(BH, {
      e: () => rH,
      f: () => SH
    });
    var AH = LH(9979);
    const rH = "Air",
      SH = Object.freeze(new AH.f(rH, 0, "", null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null))
  }
};
Object.freeze(modules);
for (const HH in modules) Object.freeze(modules[HH]);