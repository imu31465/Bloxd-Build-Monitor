/*! For license information please see yma3ej.wasmMatchmaking.dbd4bf25.chunk.js.LICENSE.txt */
export const id = 63;
export const ids = [63];
export const modules = {
  36617: (TT, UT) => {
    function mT(TT) {
      if (TT && "object" === typeof TT) {
        var UT = TT.which || TT.keyCode || TT.charCode;
        UT && (TT = UT)
      }
      if ("number" === typeof TT) return gT[TT];
      var mT, MT = String(TT);
      return (mT = WT[MT.toLowerCase()]) ? mT : (mT = zT[MT.toLowerCase()]) || (1 === MT.length ? MT.charCodeAt(0) : void 0)
    }
    mT.isEventKey = function(TT, UT) {
      if (TT && "object" === typeof TT) {
        var mT = TT.which || TT.keyCode || TT.charCode;
        if (null === mT || void 0 === mT) return !1;
        if ("string" === typeof UT) {
          var MT;
          if (MT = WT[UT.toLowerCase()]) return MT === mT;
          if (MT = zT[UT.toLowerCase()]) return MT === mT
        } else if ("number" === typeof UT) return UT === mT;
        return !1
      }
    };
    var WT = (UT = TT.exports = mT).code = UT.codes = {
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
      zT = UT.aliases = {
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
    for (MT = 97; MT < 123; MT++) WT[String.fromCharCode(MT)] = MT - 32;
    for (var MT = 48; MT < 58; MT++) WT[MT - 48] = MT;
    for (MT = 1; MT < 13; MT++) WT["f" + MT] = MT + 111;
    for (MT = 0; MT < 10; MT++) WT["numpad " + MT] = MT + 96;
    var gT = UT.names = UT.title = {};
    for (MT in WT) gT[WT[MT]] = MT;
    for (var nT in zT) WT[nT] = zT[nT]
  },
  36791: (TT, UT, mT) => {
    mT.d(UT, {
      d: () => gT
    });
    var WT = mT(63);
    const zT = WT.useLayoutEffect;
    const MT = function(TT) {
      var UT = (0, WT.useRef)(TT);
      return zT((function() {
        UT.current = TT
      })), UT
    };
    var gT = function(TT) {
      var UT = MT(TT);
      (0, WT.useEffect)((function() {
        var TT = function(TT) {
          var mT;
          if (null != UT.current && (mT = UT.current(TT)), TT.defaultPrevented && (TT.returnValue = ""), "string" === typeof mT) return TT.returnValue = mT, mT
        };
        return window.addEventListener("beforeunload", TT),
          function() {
            window.removeEventListener("beforeunload", TT)
          }
      }), [])
    }
  },
  36672: TT => {
    var UT, mT = "undefined" !== typeof window ? window.navigator.userAgent : "",
      WT = /OS X/.test(mT),
      zT = /Opera/.test(mT),
      MT = !/like Gecko/.test(mT) && !zT,
      gT = TT.exports = {
        0: WT ? "<menu>" : "<UNK>",
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
        93: WT ? "<meta>" : "<menu>",
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
        173: WT && MT ? "-" : "<volume-mute>",
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
        231: zT ? "`" : "<unicode>",
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
    for (UT = 58; UT < 65; ++UT) gT[UT] = String.fromCharCode(UT);
    for (UT = 48; UT < 58; ++UT) gT[UT] = UT - 48 + "";
    for (UT = 65; UT < 91; ++UT) gT[UT] = String.fromCharCode(UT);
    for (UT = 96; UT < 106; ++UT) gT[UT] = "<num-" + (UT - 96) + ">";
    for (UT = 112; UT < 136; ++UT) gT[UT] = "F" + (UT - 111)
  },
  9036: (TT, UT, mT) => {
    mT.d(UT, {
      b: () => MT,
      c: () => zT
    });
    let WT = !1;

    function zT() {
      WT = !0
    }

    function MT() {
      return WT
    }
  },
  36516: (TT, UT, mT) => {
    mT.r(UT), mT.d(UT, {
      InGameUi: () => bT.e,
      LobbyLeaderboard: () => OT.d,
      loadCharacterCustomisationUI: () => eT,
      loadCharacterPreview: () => YT,
      matchmakeAndPlay: () => wT,
      matchmakeForAhead: () => nT.g,
      setUpGame: () => JT
    });
    var WT = mT(1341),
      zT = mT(166),
      MT = mT(25),
      gT = mT(36523),
      nT = mT(36532),
      HT = mT(2067),
      kT = mT(36574);

    function jT() {
      return !1 !== HT.d.get("canCustomiseChar")
    }
    let lT = !1;
    var LT = mT(1429),
      pT = mT(1345),
      BT = mT(265),
      ZT = mT(3679),
      cT = mT(9036),
      vT = mT(9028);

    function fT() {
      (0, cT.b)() || (0, vT.c)().catch((TT => {
        console.warn("[bloxd-wasm-client] the play chunk did not load ahead of a join: the join loads it itself", TT)
      }))
    }
    var qT = mT(3536),
      iT = mT(1884);
    var bT = mT(36587),
      OT = mT(37101);

    function eT() {
      return mT.e(220).then((() => mT(41433)))
    }

    function YT() {
      return mT.e(296).then((() => mT(41439)))
    }

    function JT() {
      return (0, vT.i)()
    }
    lT || (lT = !0, document.addEventListener("keydown", (TT => {
        (0, kT.e)(TT, jT)
      }))),
      function(TT) {
        var UT;
        return !0 !== (null === TT || void 0 === TT ? void 0 : TT.saveData) && !/2g$/.test(null !== (UT = null === TT || void 0 === TT ? void 0 : TT.effectiveType) && void 0 !== UT ? UT : "")
      }(navigator.connection) && (0, ZT.e)((() => {
        (0, cT.b)() || Promise.all([mT.e(78), mT.e(90), mT.e(215), mT.e(214), mT.e(137), mT.e(140), mT.e(59)]).then((() => mT(41189))).then((async TT => {
          (0, cT.b)() || (await TT.startLoadAheadOfJoin({
            joinStarted: cT.b,
            language: pT.f.get().getCurrentLanguageCode()
          }), (0, BT.e)(fT))
        }), (TT => {
          console.warn("[bloxd-wasm-client] the loads ahead of a join did not start: the join loads the client itself", TT)
        }))
      }));
    const xT = MT.b.get("router");
    null === xT ? console.warn("[bloxd-wasm-client] no router as the matchmaking chunk loads: the join's loads start with the join") : function TT(UT) {
      if ((0, iT.b)(UT.state.location.pathname)) return void(0, vT.g)().catch((() => {}));
      const mT = UT.subscribe((WT => {
        (0, iT.b)(WT.location.pathname) && (mT(), (0, qT.h)().then((() => {
          TT(UT)
        })))
      }))
    }(xT), (0, gT.b)();
    const dT = (0, nT.e)((async function(TT, UT) {
      let {
        place: mT,
        userContext: MT,
        direct: gT,
        matchedAt: nT,
        rematch: HT
      } = TT;
      const kT = gT ? 1 / 0 : nT;
      let jT;
      try {
        jT = await (0, vT.g)()
      } catch (lT) {
        return console.error("The wasm client did not load:", lT), (0, LT.m)({
          websocketUrl: null
        }), WT.c.errorWithCode(String(lT), zT.j.CONNECT_TO_GAME_SERVER, {
          error: lT,
          severity: UT.aborted ? "low" : "medium",
          Km: UT.aborted
        })
      }
      return jT.playWasmGame({
        userContext: MT,
        place: mT,
        matchedAt: kT,
        rematch: HT
      }, UT)
    }));

    function wT() {
      return (0, vT.g)().catch((() => {})), dT(...arguments)
    }
  },
  9028: (TT, UT, mT) => {
    mT.d(UT, {
      c: () => pT,
      g: () => LT,
      i: () => BT
    });
    var WT = mT(3289),
      zT = mT(2404),
      MT = mT(2257),
      gT = mT(4738),
      nT = mT(3599),
      HT = mT(9036);
    let kT = null;

    function jT() {
      return Promise.all([mT.e(75), mT.e(78), mT.e(90), mT.e(215), mT.e(214), mT.e(160), mT.e(137), mT.e(198), mT.e(140), mT.e(88), mT.e(275), mT.e(64)]).then((() => mT(40817)))
    }

    function lT() {
      Promise.all([mT.e(73), mT.e(76), mT.e(75), mT.e(74), mT.e(90), mT.e(87), mT.e(273), mT.e(191), mT.e(228), mT.e(252), mT.e(275), mT.e(47)]).then((() => mT(41136))).catch((() => {}))
    }

    function LT() {
      return gT.e.cancelDownloadForJoin(), (0, nT.b)(), (0, zT.g)(), (0, HT.c)(), (0, MT.h)(), lT(), Promise.all([mT.e(78), mT.e(90), mT.e(215), mT.e(214), mT.e(137), mT.e(140), mT.e(59)]).then((() => mT(41189))).then((TT => {
        let {
          startJoinLoad: UT
        } = TT;
        UT()
      }), (() => {})), kT ??= jT().then((TT => (TT.startWasmPlay(), TT.followPageUiPack((TT => {
        WT.e.showGamePack(TT)
      })), TT)), (TT => {
        throw kT = null, TT
      })), kT
    }

    function pT() {
      return lT(), mT.e(276).then((() => mT(41194))).catch((() => {})), jT().then((() => {}))
    }

    function BT() {
      return jT().then((TT => {
        TT.startWasmPreviews(), TT.prefetchWasmPreviews()
      }))
    }
  },
  36539: (TT, UT, mT) => {
    mT.d(UT, {
      e: () => LT,
      f: () => jT,
      i: () => pT,
      m: () => lT
    });
    var WT = mT(366),
      zT = mT(691),
      MT = mT(703),
      gT = mT(44);
    const nT = {
        idStorageKey: "playSessionId",
        lastActivityStorageKey: "playSessionLastActivityMs",
        expiryMs: 3e5
      },
      HT = "playSessionGameNameWithVariation",
      kT = "wasMatchmakePlayer";

    function jT() {
      let TT = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : gT.m;
      (0, MT.h)(TT, nT)
    }

    function lT() {
      (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : gT.m).setItem(kT, !0)
    }

    function LT() {
      let TT = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : gT.m;
      return (0, MT.b)(TT, nT)
    }

    function pT(TT) {
      let UT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : gT.m;
      const mT = (0, MT.b)(UT, nT),
        jT = function(TT) {
          const UT = TT.getItem(HT);
          return "string" !== typeof UT ? null : UT
        }(UT),
        lT = function() {
          return !0 === (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : gT.m).getItem(kT)
        }(UT);
      let LT;
      return LT = null !== mT && null !== jT && (0, MT.d)(UT, nT) && function(TT, UT, mT) {
          const zT = (0, WT.dc)(TT),
            MT = (0, WT.dc)(UT),
            gT = (0, WT._b)(TT),
            nT = (0, WT._b)(UT);
          return !(zT !== MT || !mT) || zT === MT && gT === nT
        }(jT, TT, lT) ? mT : (0, zT.b)(), (0, MT.l)(UT, nT, LT), UT.setItem(HT, TT),
        function() {
          (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : gT.m).removeItem(kT)
        }(UT), LT
    }
  },
  36534: (TT, UT, mT) => {
    mT.d(UT, {
      b: () => bT,
      f: () => OT
    });
    var WT = mT(1089),
      zT = mT(218),
      MT = mT(363),
      gT = mT(662),
      nT = mT(366),
      HT = mT(1091),
      kT = mT(681),
      jT = mT(712),
      lT = mT(4629),
      LT = mT(102),
      pT = mT(133),
      BT = mT(1863),
      ZT = mT(115),
      cT = mT(36539),
      vT = mT(44),
      fT = mT(696),
      qT = mT(671),
      iT = mT(36546);

    function bT() {
      var TT, UT;
      return [...null !== (TT = navigator.languages) && void 0 !== TT ? TT : [null !== (UT = navigator.language) && void 0 !== UT ? UT : "none"], "en-Gb"]
    }

    function OT(TT, UT, mT, OT, eT) {
      const YT = (0, WT.k)(UT) ? (0, WT.q)(UT) : null,
        JT = TT.isLoggedIn() && void 0 !== (0, zT.b)(MT.n, pT.siteUsed) ? (0, qT.f)() : null,
        xT = {
          cookies: (0, BT.getAllCookiesForGameNameWithVariation)(UT),
          isMobile: (0, LT.isMobile)(),
          isUsingCustomGameTexturePack: null !== YT && eT(YT),
          generalCookies: {
            joinDiscord: !!vT.l.getItem("DiscordPressed"),
            newGo: lT.e,
            ...TT.getMetricsCookies(),
            trafficCode: OT,
            compliance: LT.compliance
          },
          browserInfo: {
            ua: window.navigator.userAgent,
            name: (0, LT.getBrowserName)(),
            version: (0, LT.getBrowserVersion)(),
            platform: navigator.platform,
            platformType: (0, LT.getPlatformType)(),
            deviceType: (0, ZT.b)()
          },
          isLoggedIn: TT.isLoggedIn(),
          lobbyName: mT,
          languages: bT(),
          version: gT.d,
          siteUsed: pT.siteUsed,
          subsiteUsed: pT.subsiteUsed,
          playSessionId: (0, cT.i)(UT),
          visitSessionId: (0, fT.d)(),
          clientReason: kT.r.reason,
          budgetBasis: (0, iT.g)(),
          ...null !== jT.o && {
            diagClaim: jT.o.claimId
          },
          ...null !== JT && {
            webGpuLoss: JT
          }
        };
      return null !== YT && (0, nT.Yc)(YT) ? (xT.lobbyName = (0, WT.g)(YT, (0, WT.m)(UT), mT), {
        roomName: `classic_${HT.f}`,
        joinOptions: xT
      }) : {
        roomName: UT,
        joinOptions: xT
      }
    }
  },
  9411: (TT, UT, mT) => {
    mT.d(UT, {
      e: () => zT,
      i: () => MT
    });
    var WT = mT(9369);
    const zT = "Air",
      MT = Object.freeze(new WT.g(zT, 0, "", null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null))
  }
};
Object.freeze(modules);
for (const TT in modules) Object.freeze(modules[TT]);