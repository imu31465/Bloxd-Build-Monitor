/*! For license information please see wp3j0a.wasmMatchmaking.5509a63b.chunk.js.LICENSE.txt */
export const id = 63;
export const ids = [63];
export const modules = {
  36874: (GG, bG) => {
    function ZG(GG) {
      if (GG && "object" === typeof GG) {
        var bG = GG.which || GG.keyCode || GG.charCode;
        bG && (GG = bG)
      }
      if ("number" === typeof GG) return yG[GG];
      var ZG, LG = String(GG);
      return (ZG = wG[LG.toLowerCase()]) ? ZG : (ZG = SG[LG.toLowerCase()]) || (1 === LG.length ? LG.charCodeAt(0) : void 0)
    }
    ZG.isEventKey = function(GG, bG) {
      if (GG && "object" === typeof GG) {
        var ZG = GG.which || GG.keyCode || GG.charCode;
        if (null === ZG || void 0 === ZG) return !1;
        if ("string" === typeof bG) {
          var LG;
          if (LG = wG[bG.toLowerCase()]) return LG === ZG;
          if (LG = SG[bG.toLowerCase()]) return LG === ZG
        } else if ("number" === typeof bG) return bG === ZG;
        return !1
      }
    };
    var wG = (bG = GG.exports = ZG).code = bG.codes = {
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
      SG = bG.aliases = {
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
    for (LG = 97; LG < 123; LG++) wG[String.fromCharCode(LG)] = LG - 32;
    for (var LG = 48; LG < 58; LG++) wG[LG - 48] = LG;
    for (LG = 1; LG < 13; LG++) wG["f" + LG] = LG + 111;
    for (LG = 0; LG < 10; LG++) wG["numpad " + LG] = LG + 96;
    var yG = bG.names = bG.title = {};
    for (LG in wG) yG[wG[LG]] = LG;
    for (var kG in SG) wG[kG] = SG[kG]
  },
  37052: (GG, bG, ZG) => {
    ZG.d(bG, {
      c: () => yG
    });
    var wG = ZG(51);
    const SG = wG.useLayoutEffect;
    const LG = function(GG) {
      var bG = (0, wG.useRef)(GG);
      return SG((function() {
        bG.current = GG
      })), bG
    };
    var yG = function(GG) {
      var bG = LG(GG);
      (0, wG.useEffect)((function() {
        var GG = function(GG) {
          var ZG;
          if (null != bG.current && (ZG = bG.current(GG)), GG.defaultPrevented && (GG.returnValue = ""), "string" === typeof ZG) return GG.returnValue = ZG, ZG
        };
        return window.addEventListener("beforeunload", GG),
          function() {
            window.removeEventListener("beforeunload", GG)
          }
      }), [])
    }
  },
  36932: GG => {
    var bG, ZG = "undefined" !== typeof window ? window.navigator.userAgent : "",
      wG = /OS X/.test(ZG),
      SG = /Opera/.test(ZG),
      LG = !/like Gecko/.test(ZG) && !SG,
      yG = GG.exports = {
        0: wG ? "<menu>" : "<UNK>",
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
        93: wG ? "<meta>" : "<menu>",
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
        173: wG && LG ? "-" : "<volume-mute>",
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
        231: SG ? "`" : "<unicode>",
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
    for (bG = 58; bG < 65; ++bG) yG[bG] = String.fromCharCode(bG);
    for (bG = 48; bG < 58; ++bG) yG[bG] = bG - 48 + "";
    for (bG = 65; bG < 91; ++bG) yG[bG] = String.fromCharCode(bG);
    for (bG = 96; bG < 106; ++bG) yG[bG] = "<num-" + (bG - 96) + ">";
    for (bG = 112; bG < 136; ++bG) yG[bG] = "F" + (bG - 111)
  },
  8967: (GG, bG, ZG) => {
    ZG.d(bG, {
      c: () => LG,
      g: () => SG
    });
    let wG = !1;

    function SG() {
      wG = !0
    }

    function LG() {
      return wG
    }
  },
  36784: (GG, bG, ZG) => {
    ZG.r(bG), ZG.d(bG, {
      InGameUi: () => oG.e,
      LobbyLeaderboard: () => XG.b,
      loadCharacterCustomisationUI: () => uG,
      loadCharacterPreview: () => iG,
      matchmakeAndPlay: () => IG,
      matchmakeForAhead: () => kG.e,
      setUpGame: () => CG
    });
    var wG = ZG(1202),
      SG = ZG(140),
      LG = ZG(17),
      yG = ZG(36793),
      kG = ZG(36795),
      UG = ZG(1923),
      YG = ZG(36833);

    function VG() {
      return !1 !== UG.c.get("canCustomiseChar")
    }
    let pG = !1;
    var fG = ZG(1287),
      QG = ZG(1204),
      KG = ZG(252),
      hG = ZG(3559),
      dG = ZG(8967),
      JG = ZG(8960);

    function rG() {
      (0, dG.c)() || (0, JG.c)().catch((GG => {
        console.warn("[bloxd-wasm-client] the play chunk did not load ahead of a join: the join loads it itself", GG)
      }))
    }
    var zG = ZG(3423),
      EG = ZG(1729);
    var oG = ZG(36838),
      XG = ZG(37374);

    function uG() {
      return ZG.e(220).then((() => ZG(41704)))
    }

    function iG() {
      return ZG.e(296).then((() => ZG(41710)))
    }

    function CG() {
      return (0, JG.i)()
    }
    pG || (pG = !0, document.addEventListener("keydown", (GG => {
        (0, YG.e)(GG, VG)
      }))),
      function(GG) {
        var bG;
        return !0 !== (null === GG || void 0 === GG ? void 0 : GG.saveData) && !/2g$/.test(null !== (bG = null === GG || void 0 === GG ? void 0 : GG.effectiveType) && void 0 !== bG ? bG : "")
      }(navigator.connection) && (0, hG.c)((() => {
        (0, dG.c)() || Promise.all([ZG.e(78), ZG.e(90), ZG.e(215), ZG.e(214), ZG.e(137), ZG.e(140), ZG.e(59)]).then((() => ZG(41444))).then((async GG => {
          (0, dG.c)() || (await GG.startLoadAheadOfJoin({
            joinStarted: dG.c,
            language: QG.d.get().getCurrentLanguageCode()
          }), (0, KG.b)(rG))
        }), (GG => {
          console.warn("[bloxd-wasm-client] the loads ahead of a join did not start: the join loads the client itself", GG)
        }))
      }));
    const WG = LG.e.get("router");
    null === WG ? console.warn("[bloxd-wasm-client] no router as the matchmaking chunk loads: the join's loads start with the join") : function GG(bG) {
      if ((0, EG.b)(bG.state.location.pathname)) return void(0, JG.e)().catch((() => {}));
      const ZG = bG.subscribe((wG => {
        (0, EG.b)(wG.location.pathname) && (ZG(), (0, zG.e)().then((() => {
          GG(bG)
        })))
      }))
    }(WG), (0, yG.e)();
    const mG = (0, kG.d)((async function(GG, bG) {
      let {
        place: ZG,
        userContext: LG,
        direct: yG,
        matchedAt: kG,
        rematch: UG
      } = GG;
      const YG = yG ? 1 / 0 : kG;
      let VG;
      try {
        VG = await (0, JG.e)()
      } catch (pG) {
        return console.error("The wasm client did not load:", pG), (0, fG.q)({
          websocketUrl: null
        }), wG.d.errorWithCode(String(pG), SG.h.CONNECT_TO_GAME_SERVER, {
          error: pG,
          severity: bG.aborted ? "low" : "medium",
          RZ: bG.aborted
        })
      }
      return VG.playWasmGame({
        userContext: LG,
        place: ZG,
        matchedAt: YG,
        rematch: UG
      }, bG)
    }));

    function IG() {
      return (0, JG.e)().catch((() => {})), mG(...arguments)
    }
  },
  8960: (GG, bG, ZG) => {
    ZG.d(bG, {
      c: () => QG,
      e: () => fG,
      i: () => KG
    });
    var wG = ZG(3135),
      SG = ZG(2290),
      LG = ZG(2128),
      yG = ZG(4670),
      kG = ZG(3481),
      UG = ZG(8967);
    let YG = null;

    function VG() {
      return Promise.all([ZG.e(75), ZG.e(78), ZG.e(90), ZG.e(215), ZG.e(214), ZG.e(160), ZG.e(137), ZG.e(198), ZG.e(140), ZG.e(88), ZG.e(275), ZG.e(64)]).then((() => ZG(41048)))
    }

    function pG() {
      Promise.all([ZG.e(73), ZG.e(76), ZG.e(75), ZG.e(74), ZG.e(90), ZG.e(87), ZG.e(273), ZG.e(191), ZG.e(228), ZG.e(252), ZG.e(275), ZG.e(47)]).then((() => ZG(41395))).catch((() => {}))
    }

    function fG() {
      return yG.d.cancelDownloadForJoin(), (0, kG.e)(), (0, SG.g)(), (0, UG.g)(), (0, LG.j)(), pG(), Promise.all([ZG.e(78), ZG.e(90), ZG.e(215), ZG.e(214), ZG.e(137), ZG.e(140), ZG.e(59)]).then((() => ZG(41444))).then((GG => {
        let {
          startJoinLoad: bG
        } = GG;
        bG()
      }), (() => {})), YG ??= VG().then((GG => (GG.startWasmPlay(), GG.followPageUiPack((GG => {
        wG.e.showGamePack(GG)
      })), GG)), (GG => {
        throw YG = null, GG
      })), YG
    }

    function QG() {
      return pG(), ZG.e(276).then((() => ZG(41447))).catch((() => {})), VG().then((() => {}))
    }

    function KG() {
      return VG().then((GG => {
        GG.startWasmPreviews(), GG.prefetchWasmPreviews()
      }))
    }
  },
  36808: (GG, bG, ZG) => {
    ZG.d(bG, {
      d: () => fG,
      f: () => VG,
      g: () => QG,
      h: () => pG
    });
    var wG = ZG(352),
      SG = ZG(641),
      LG = ZG(655),
      yG = ZG(29);
    const kG = {
        idStorageKey: "playSessionId",
        lastActivityStorageKey: "playSessionLastActivityMs",
        expiryMs: 3e5
      },
      UG = "playSessionGameNameWithVariation",
      YG = "wasMatchmakePlayer";

    function VG() {
      let GG = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : yG.l;
      (0, LG.j)(GG, kG)
    }

    function pG() {
      (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : yG.l).setItem(YG, !0)
    }

    function fG() {
      let GG = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : yG.l;
      return (0, LG.e)(GG, kG)
    }

    function QG(GG) {
      let bG = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : yG.l;
      const ZG = (0, LG.e)(bG, kG),
        VG = function(GG) {
          const bG = GG.getItem(UG);
          return "string" !== typeof bG ? null : bG
        }(bG),
        pG = function() {
          return !0 === (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : yG.l).getItem(YG)
        }(bG);
      let fG;
      return fG = null !== ZG && null !== VG && (0, LG.f)(bG, kG) && function(GG, bG, ZG) {
          const SG = (0, wG.Yb)(GG),
            LG = (0, wG.Yb)(bG),
            yG = (0, wG.Vb)(GG),
            kG = (0, wG.Vb)(bG);
          return !(SG !== LG || !ZG) || SG === LG && yG === kG
        }(VG, GG, pG) ? ZG : (0, SG.d)(), (0, LG.n)(bG, kG, fG), bG.setItem(UG, GG),
        function() {
          (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : yG.l).removeItem(YG)
        }(bG), fG
    }
  },
  36801: (GG, bG, ZG) => {
    ZG.d(bG, {
      e: () => oG,
      g: () => XG
    });
    var wG = ZG(982),
      SG = ZG(200),
      LG = ZG(346),
      yG = ZG(612),
      kG = ZG(352),
      UG = ZG(984),
      YG = ZG(631),
      VG = ZG(666),
      pG = ZG(4537),
      fG = ZG(80),
      QG = ZG(116),
      KG = ZG(1702),
      hG = ZG(95),
      dG = ZG(36808),
      JG = ZG(29),
      rG = ZG(647),
      zG = ZG(617),
      EG = ZG(36810);

    function oG() {
      var GG, bG;
      return [...null !== (GG = navigator.languages) && void 0 !== GG ? GG : [null !== (bG = navigator.language) && void 0 !== bG ? bG : "none"], "en-Gb"]
    }

    function XG(GG, bG, ZG, XG, uG) {
      const iG = (0, wG.h)(bG) ? (0, wG.j)(bG) : null,
        CG = GG.isLoggedIn() && void 0 !== (0, SG.c)(LG.l, QG.siteUsed) ? (0, zG.e)() : null,
        WG = {
          cookies: (0, KG.getAllCookiesForGameNameWithVariation)(bG),
          isMobile: (0, fG.isMobile)(),
          isUsingCustomGameTexturePack: null !== iG && uG(iG),
          generalCookies: {
            joinDiscord: !!JG.h.getItem("DiscordPressed"),
            newGo: pG.c,
            ...GG.getMetricsCookies(),
            trafficCode: XG,
            compliance: fG.compliance
          },
          browserInfo: {
            ua: window.navigator.userAgent,
            name: (0, fG.getBrowserName)(),
            version: (0, fG.getBrowserVersion)(),
            platform: navigator.platform,
            platformType: (0, fG.getPlatformType)(),
            deviceType: (0, hG.d)()
          },
          isLoggedIn: GG.isLoggedIn(),
          lobbyName: ZG,
          languages: oG(),
          version: yG.e,
          siteUsed: QG.siteUsed,
          subsiteUsed: QG.subsiteUsed,
          playSessionId: (0, dG.g)(bG),
          visitSessionId: (0, rG.f)(),
          clientReason: YG.s.reason,
          budgetBasis: (0, EG.j)(),
          ...null !== VG.o && {
            diagClaim: VG.o.claimId
          },
          ...null !== CG && {
            webGpuLoss: CG
          }
        };
      return null !== iG && (0, kG.Oc)(iG) ? (WG.lobbyName = (0, wG.g)(iG, (0, wG.i)(bG), ZG), {
        roomName: `classic_${UG.e}`,
        joinOptions: WG
      }) : {
        roomName: bG,
        joinOptions: WG
      }
    }
  },
  9356: (GG, bG, ZG) => {
    ZG.d(bG, {
      b: () => SG,
      f: () => LG
    });
    var wG = ZG(9303);
    const SG = "Air",
      LG = Object.freeze(new wG.h(SG, 0, "", null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null))
  }
};
Object.freeze(modules);
for (const GG in modules) Object.freeze(modules[GG]);