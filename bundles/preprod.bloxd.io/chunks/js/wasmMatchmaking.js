/*! For license information please see 8104he.wasmMatchmaking.7266f9d3.chunk.js.LICENSE.txt */
export const id = 65;
export const ids = [65];
export const modules = {
  36833: (QQ, WQ) => {
    function XQ(QQ) {
      if (QQ && "object" === typeof QQ) {
        var WQ = QQ.which || QQ.keyCode || QQ.charCode;
        WQ && (QQ = WQ)
      }
      if ("number" === typeof QQ) return zQ[QQ];
      var XQ, TQ = String(QQ);
      return (XQ = wQ[TQ.toLowerCase()]) ? XQ : (XQ = qQ[TQ.toLowerCase()]) || (1 === TQ.length ? TQ.charCodeAt(0) : void 0)
    }
    XQ.isEventKey = function(QQ, WQ) {
      if (QQ && "object" === typeof QQ) {
        var XQ = QQ.which || QQ.keyCode || QQ.charCode;
        if (null === XQ || void 0 === XQ) return !1;
        if ("string" === typeof WQ) {
          var TQ;
          if (TQ = wQ[WQ.toLowerCase()]) return TQ === XQ;
          if (TQ = qQ[WQ.toLowerCase()]) return TQ === XQ
        } else if ("number" === typeof WQ) return WQ === XQ;
        return !1
      }
    };
    var wQ = (WQ = QQ.exports = XQ).code = WQ.codes = {
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
      qQ = WQ.aliases = {
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
    for (TQ = 97; TQ < 123; TQ++) wQ[String.fromCharCode(TQ)] = TQ - 32;
    for (var TQ = 48; TQ < 58; TQ++) wQ[TQ - 48] = TQ;
    for (TQ = 1; TQ < 13; TQ++) wQ["f" + TQ] = TQ + 111;
    for (TQ = 0; TQ < 10; TQ++) wQ["numpad " + TQ] = TQ + 96;
    var zQ = WQ.names = WQ.title = {};
    for (TQ in wQ) zQ[wQ[TQ]] = TQ;
    for (var sQ in qQ) wQ[sQ] = qQ[sQ]
  },
  36999: (QQ, WQ, XQ) => {
    XQ.d(WQ, {
      d: () => zQ
    });
    var wQ = XQ(61);
    const qQ = wQ.useLayoutEffect;
    const TQ = function(QQ) {
      var WQ = (0, wQ.useRef)(QQ);
      return qQ((function() {
        WQ.current = QQ
      })), WQ
    };
    var zQ = function(QQ) {
      var WQ = TQ(QQ);
      (0, wQ.useEffect)((function() {
        var QQ = function(QQ) {
          var XQ;
          if (null != WQ.current && (XQ = WQ.current(QQ)), QQ.defaultPrevented && (QQ.returnValue = ""), "string" === typeof XQ) return QQ.returnValue = XQ, XQ
        };
        return window.addEventListener("beforeunload", QQ),
          function() {
            window.removeEventListener("beforeunload", QQ)
          }
      }), [])
    }
  },
  36875: QQ => {
    var WQ, XQ = "undefined" !== typeof window ? window.navigator.userAgent : "",
      wQ = /OS X/.test(XQ),
      qQ = /Opera/.test(XQ),
      TQ = !/like Gecko/.test(XQ) && !qQ,
      zQ = QQ.exports = {
        0: wQ ? "<menu>" : "<UNK>",
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
        93: wQ ? "<meta>" : "<menu>",
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
        173: wQ && TQ ? "-" : "<volume-mute>",
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
        231: qQ ? "`" : "<unicode>",
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
    for (WQ = 58; WQ < 65; ++WQ) zQ[WQ] = String.fromCharCode(WQ);
    for (WQ = 48; WQ < 58; ++WQ) zQ[WQ] = WQ - 48 + "";
    for (WQ = 65; WQ < 91; ++WQ) zQ[WQ] = String.fromCharCode(WQ);
    for (WQ = 96; WQ < 106; ++WQ) zQ[WQ] = "<num-" + (WQ - 96) + ">";
    for (WQ = 112; WQ < 136; ++WQ) zQ[WQ] = "F" + (WQ - 111)
  },
  9295: (QQ, WQ, XQ) => {
    XQ.d(WQ, {
      b: () => TQ,
      f: () => qQ
    });
    let wQ = !1;

    function qQ() {
      wQ = !0
    }

    function TQ() {
      return wQ
    }
  },
  36752: (QQ, WQ, XQ) => {
    XQ.r(WQ), XQ.d(WQ, {
      InGameUi: () => UQ.d,
      LobbyLeaderboard: () => bQ.d,
      loadCharacterCustomisationUI: () => vQ,
      loadCharacterPreview: () => dQ,
      matchmakeAndPlay: () => hQ,
      matchmakeForAhead: () => sQ.f,
      setUpGame: () => HQ
    });
    var wQ = XQ(1280),
      qQ = XQ(193),
      TQ = XQ(26),
      zQ = XQ(36757),
      sQ = XQ(36763),
      FQ = XQ(2036),
      PQ = XQ(36800);

    function gQ() {
      return !1 !== FQ.e.get("canCustomiseChar")
    }
    let JQ = !1;
    var rQ = XQ(1376),
      IQ = XQ(1285),
      jQ = XQ(291),
      BQ = XQ(3819),
      yQ = XQ(9295),
      VQ = XQ(9293);

    function DQ() {
      (0, yQ.b)() || (0, VQ.d)().catch((QQ => {
        console.warn("[bloxd-wasm-client] the play chunk did not load ahead of a join: the join loads it itself", QQ)
      }))
    }
    var pQ = XQ(3699),
      GQ = XQ(1821);
    var UQ = XQ(36811),
      bQ = XQ(37278);

    function vQ() {
      return XQ.e(224).then((() => XQ(41519)))
    }

    function dQ() {
      return XQ.e(300).then((() => XQ(41521)))
    }

    function HQ() {
      return (0, VQ.i)()
    }
    JQ || (JQ = !0, document.addEventListener("keydown", (QQ => {
        (0, PQ.c)(QQ, gQ)
      }))),
      function(QQ) {
        var WQ;
        return !0 !== (null === QQ || void 0 === QQ ? void 0 : QQ.saveData) && !/2g$/.test(null !== (WQ = null === QQ || void 0 === QQ ? void 0 : QQ.effectiveType) && void 0 !== WQ ? WQ : "")
      }(navigator.connection) && (0, BQ.d)((() => {
        (0, yQ.b)() || Promise.all([XQ.e(80), XQ.e(93), XQ.e(219), XQ.e(218), XQ.e(139), XQ.e(142), XQ.e(61)]).then((() => XQ(41257))).then((async QQ => {
          if ((0, yQ.b)()) return;
          const WQ = QQ.startLoadAheadOfJoin({
            joinStarted: yQ.b,
            language: IQ.h.get().getCurrentLanguageCode()
          });
          (0, jQ.e)((() => {
            (0, yQ.b)() || QQ.probeWebgl2AheadOfJoin()
          })), await WQ, (0, jQ.e)(DQ)
        }), (QQ => {
          console.warn("[bloxd-wasm-client] the loads ahead of a join did not start: the join loads the client itself", QQ)
        }))
      }));
    const aQ = TQ.b.get("router");
    null === aQ ? console.warn("[bloxd-wasm-client] no router as the matchmaking chunk loads: the join's loads start with the join") : function QQ(WQ) {
      if ((0, GQ.d)(WQ.state.location.pathname)) return void(0, VQ.g)().catch((() => {}));
      const XQ = WQ.subscribe((wQ => {
        (0, GQ.d)(wQ.location.pathname) && (XQ(), (0, pQ.e)().then((() => {
          QQ(WQ)
        })))
      }))
    }(aQ), (0, zQ.c)();
    const lQ = (0, sQ.d)((async function(QQ, WQ) {
      let {
        place: XQ,
        userContext: TQ,
        direct: zQ,
        matchedAt: sQ,
        rematch: FQ
      } = QQ;
      const PQ = zQ ? 1 / 0 : sQ;
      let gQ;
      try {
        gQ = await (0, VQ.g)()
      } catch (JQ) {
        return console.error("The wasm client did not load:", JQ), (0, rQ.t)({
          websocketUrl: null
        }), wQ.e.errorWithCode(String(JQ), qQ.h.CONNECT_TO_GAME_SERVER, {
          error: JQ,
          severity: WQ.aborted ? "low" : "medium",
          fX: WQ.aborted
        })
      }
      return gQ.playWasmGame({
        userContext: TQ,
        place: XQ,
        matchedAt: PQ,
        rematch: FQ
      }, WQ)
    }));

    function hQ() {
      return (0, VQ.g)().catch((() => {})), lQ(...arguments)
    }
  },
  9293: (QQ, WQ, XQ) => {
    XQ.d(WQ, {
      d: () => IQ,
      g: () => rQ,
      i: () => jQ
    });
    var wQ = XQ(3424),
      qQ = XQ(2370),
      TQ = XQ(2211),
      zQ = XQ(4967),
      sQ = XQ(3751),
      FQ = XQ(9295);
    let PQ = null;

    function gQ() {
      return Promise.all([XQ.e(77), XQ.e(80), XQ.e(93), XQ.e(219), XQ.e(218), XQ.e(162), XQ.e(203), XQ.e(139), XQ.e(142), XQ.e(91), XQ.e(279), XQ.e(66)]).then((() => XQ(40897)))
    }

    function JQ() {
      Promise.all([XQ.e(75), XQ.e(78), XQ.e(77), XQ.e(76), XQ.e(93), XQ.e(90), XQ.e(277), XQ.e(193), XQ.e(232), XQ.e(256), XQ.e(279), XQ.e(49)]).then((() => XQ(41206))).catch((() => {}))
    }

    function rQ() {
      return zQ.c.cancelDownloadForJoin(), (0, sQ.d)(), (0, qQ.c)(), (0, FQ.f)(), (0, TQ.i)(), JQ(), Promise.all([XQ.e(80), XQ.e(93), XQ.e(219), XQ.e(218), XQ.e(139), XQ.e(142), XQ.e(61)]).then((() => XQ(41257))).then((QQ => {
        let {
          startJoinLoad: WQ
        } = QQ;
        WQ()
      }), (() => {})), PQ ??= gQ().then((QQ => (QQ.startWasmPlay(), QQ.followPageUiPack((QQ => {
        wQ.d.showGamePack(QQ)
      })), QQ)), (QQ => {
        throw PQ = null, QQ
      })), PQ
    }

    function IQ() {
      return JQ(), XQ.e(280).then((() => XQ(41265))).catch((() => {})), gQ().then((() => {}))
    }

    function jQ() {
      return gQ().then((QQ => {
        QQ.startWasmPreviews(), QQ.prefetchWasmPreviews()
      }))
    }
  },
  36775: (QQ, WQ, XQ) => {
    XQ.d(WQ, {
      e: () => rQ,
      h: () => gQ,
      k: () => IQ,
      n: () => JQ
    });
    var wQ = XQ(402),
      qQ = XQ(695),
      TQ = XQ(702),
      zQ = XQ(43);
    const sQ = {
        idStorageKey: "playSessionId",
        lastActivityStorageKey: "playSessionLastActivityMs",
        expiryMs: 3e5
      },
      FQ = "playSessionGameNameWithVariation",
      PQ = "wasMatchmakePlayer";

    function gQ() {
      let QQ = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : zQ.m;
      (0, TQ.j)(QQ, sQ)
    }

    function JQ() {
      (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : zQ.m).setItem(PQ, !0)
    }

    function rQ() {
      let QQ = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : zQ.m;
      return (0, TQ.e)(QQ, sQ)
    }

    function IQ(QQ) {
      let WQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : zQ.m;
      const XQ = (0, TQ.e)(WQ, sQ),
        gQ = function(QQ) {
          const WQ = QQ.getItem(FQ);
          return "string" !== typeof WQ ? null : WQ
        }(WQ),
        JQ = function() {
          return !0 === (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : zQ.m).getItem(PQ)
        }(WQ);
      let rQ;
      return rQ = null !== XQ && null !== gQ && (0, TQ.f)(WQ, sQ) && function(QQ, WQ, XQ) {
          const qQ = (0, wQ.Mb)(QQ),
            TQ = (0, wQ.Mb)(WQ),
            zQ = (0, wQ.Fb)(QQ),
            sQ = (0, wQ.Fb)(WQ);
          return !(qQ !== TQ || !XQ) || qQ === TQ && zQ === sQ
        }(gQ, QQ, JQ) ? XQ : (0, qQ.e)(), (0, TQ.n)(WQ, sQ, rQ), WQ.setItem(FQ, QQ),
        function() {
          (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : zQ.m).removeItem(PQ)
        }(WQ), rQ
    }
  },
  36766: (QQ, WQ, XQ) => {
    XQ.d(WQ, {
      c: () => UQ,
      e: () => bQ
    });
    var wQ = XQ(1049),
      qQ = XQ(243),
      TQ = XQ(400),
      zQ = XQ(670),
      sQ = XQ(402),
      FQ = XQ(1055),
      PQ = XQ(691),
      gQ = XQ(714),
      JQ = XQ(4836),
      rQ = XQ(105),
      IQ = XQ(158),
      jQ = XQ(1802),
      BQ = XQ(129),
      yQ = XQ(36775),
      VQ = XQ(43),
      DQ = XQ(698),
      pQ = XQ(675),
      GQ = XQ(36777);

    function UQ() {
      var QQ, WQ;
      return [...null !== (QQ = navigator.languages) && void 0 !== QQ ? QQ : [null !== (WQ = navigator.language) && void 0 !== WQ ? WQ : "none"], "en-Gb"]
    }

    function bQ(QQ, WQ, XQ, bQ, vQ) {
      const dQ = (0, wQ.k)(WQ) ? (0, wQ.n)(WQ) : null,
        HQ = QQ.isLoggedIn() && void 0 !== (0, qQ.e)(TQ.j, IQ.siteUsed) ? (0, pQ.e)() : null,
        aQ = {
          cookies: (0, jQ.getAllCookiesForGameNameWithVariation)(WQ),
          isMobile: (0, rQ.isMobile)(),
          isUsingCustomGameTexturePack: null !== dQ && vQ(dQ),
          generalCookies: {
            joinDiscord: !!VQ.i.getItem("DiscordPressed"),
            newGo: JQ.e,
            ...QQ.getMetricsCookies(),
            trafficCode: bQ,
            compliance: rQ.compliance
          },
          browserInfo: {
            ua: window.navigator.userAgent,
            name: (0, rQ.getBrowserName)(),
            version: (0, rQ.getBrowserVersion)(),
            platform: navigator.platform,
            platformType: (0, rQ.getPlatformType)(),
            deviceType: (0, BQ.c)()
          },
          isLoggedIn: QQ.isLoggedIn(),
          lobbyName: XQ,
          languages: UQ(),
          version: zQ.c,
          siteUsed: IQ.siteUsed,
          subsiteUsed: IQ.subsiteUsed,
          playSessionId: (0, yQ.k)(WQ),
          visitSessionId: (0, DQ.d)(),
          clientReason: PQ.l.reason,
          budgetBasis: (0, GQ.i)(),
          ...null !== gQ.t && {
            diagClaim: gQ.t.claimId
          },
          ...null !== HQ && {
            webGpuLoss: HQ
          }
        };
      return null !== dQ && (0, sQ.Bc)(dQ) ? (aQ.lobbyName = (0, wQ.i)(dQ, (0, wQ.m)(WQ), XQ), {
        roomName: `classic_${FQ.c}`,
        joinOptions: aQ
      }) : {
        roomName: WQ,
        joinOptions: aQ
      }
    }
  },
  9679: (QQ, WQ, XQ) => {
    XQ.d(WQ, {
      b: () => qQ,
      c: () => TQ
    });
    var wQ = XQ(9634);
    const qQ = "Air",
      TQ = Object.freeze(new wQ.d(qQ, 0, "", null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null))
  }
};
Object.freeze(modules);
for (const QQ in modules) Object.freeze(modules[QQ]);