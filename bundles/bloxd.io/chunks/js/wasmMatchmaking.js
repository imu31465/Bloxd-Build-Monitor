/*! For license information please see c6gaap.wasmMatchmaking.52e2e759.chunk.js.LICENSE.txt */
export const id = 63;
export const ids = [63];
export const modules = {
  36565: (BB, IB) => {
    function ZB(BB) {
      if (BB && "object" === typeof BB) {
        var IB = BB.which || BB.keyCode || BB.charCode;
        IB && (BB = IB)
      }
      if ("number" === typeof BB) return GB[BB];
      var ZB, oB = String(BB);
      return (ZB = TB[oB.toLowerCase()]) ? ZB : (ZB = JB[oB.toLowerCase()]) || (1 === oB.length ? oB.charCodeAt(0) : void 0)
    }
    ZB.isEventKey = function(BB, IB) {
      if (BB && "object" === typeof BB) {
        var ZB = BB.which || BB.keyCode || BB.charCode;
        if (null === ZB || void 0 === ZB) return !1;
        if ("string" === typeof IB) {
          var oB;
          if (oB = TB[IB.toLowerCase()]) return oB === ZB;
          if (oB = JB[IB.toLowerCase()]) return oB === ZB
        } else if ("number" === typeof IB) return IB === ZB;
        return !1
      }
    };
    var TB = (IB = BB.exports = ZB).code = IB.codes = {
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
      JB = IB.aliases = {
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
    for (oB = 97; oB < 123; oB++) TB[String.fromCharCode(oB)] = oB - 32;
    for (var oB = 48; oB < 58; oB++) TB[oB - 48] = oB;
    for (oB = 1; oB < 13; oB++) TB["f" + oB] = oB + 111;
    for (oB = 0; oB < 10; oB++) TB["numpad " + oB] = oB + 96;
    var GB = IB.names = IB.title = {};
    for (oB in TB) GB[TB[oB]] = oB;
    for (var vB in JB) TB[vB] = JB[vB]
  },
  36717: (BB, IB, ZB) => {
    ZB.d(IB, {
      d: () => GB
    });
    var TB = ZB(63);
    const JB = TB.useLayoutEffect;
    const oB = function(BB) {
      var IB = (0, TB.useRef)(BB);
      return JB((function() {
        IB.current = BB
      })), IB
    };
    var GB = function(BB) {
      var IB = oB(BB);
      (0, TB.useEffect)((function() {
        var BB = function(BB) {
          var ZB;
          if (null != IB.current && (ZB = IB.current(BB)), BB.defaultPrevented && (BB.returnValue = ""), "string" === typeof ZB) return BB.returnValue = ZB, ZB
        };
        return window.addEventListener("beforeunload", BB),
          function() {
            window.removeEventListener("beforeunload", BB)
          }
      }), [])
    }
  },
  36600: BB => {
    var IB, ZB = "undefined" !== typeof window ? window.navigator.userAgent : "",
      TB = /OS X/.test(ZB),
      JB = /Opera/.test(ZB),
      oB = !/like Gecko/.test(ZB) && !JB,
      GB = BB.exports = {
        0: TB ? "<menu>" : "<UNK>",
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
        93: TB ? "<meta>" : "<menu>",
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
        173: TB && oB ? "-" : "<volume-mute>",
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
        231: JB ? "`" : "<unicode>",
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
    for (IB = 58; IB < 65; ++IB) GB[IB] = String.fromCharCode(IB);
    for (IB = 48; IB < 58; ++IB) GB[IB] = IB - 48 + "";
    for (IB = 65; IB < 91; ++IB) GB[IB] = String.fromCharCode(IB);
    for (IB = 96; IB < 106; ++IB) GB[IB] = "<num-" + (IB - 96) + ">";
    for (IB = 112; IB < 136; ++IB) GB[IB] = "F" + (IB - 111)
  },
  9019: (BB, IB, ZB) => {
    ZB.d(IB, {
      d: () => oB,
      g: () => JB
    });
    let TB = !1;

    function JB() {
      TB = !0
    }

    function oB() {
      return TB
    }
  },
  36472: (BB, IB, ZB) => {
    ZB.r(IB), ZB.d(IB, {
      InGameUi: () => CB.d,
      LobbyLeaderboard: () => QB.c,
      loadCharacterCustomisationUI: () => sB,
      loadCharacterPreview: () => wB,
      matchmakeAndPlay: () => pB,
      matchmakeForAhead: () => vB.e,
      setUpGame: () => OB
    });
    var TB = ZB(1305),
      JB = ZB(168),
      oB = ZB(20),
      GB = ZB(36478),
      vB = ZB(36483),
      kB = ZB(2029),
      cB = ZB(36524);

    function nB() {
      return !1 !== kB.c.get("canCustomiseChar")
    }
    let hB = !1;
    var zB = ZB(1382),
      FB = ZB(1310),
      NB = ZB(256),
      gB = ZB(3733),
      qB = ZB(9019),
      yB = ZB(9016);

    function UB() {
      (0, qB.d)() || (0, yB.c)().catch((BB => {
        console.warn("[bloxd-wasm-client] the play chunk did not load ahead of a join: the join loads it itself", BB)
      }))
    }
    var WB = ZB(3625),
      dB = ZB(1824);
    var CB = ZB(36535),
      QB = ZB(37031);

    function sB() {
      return ZB.e(220).then((() => ZB(41316)))
    }

    function wB() {
      return ZB.e(296).then((() => ZB(41319)))
    }

    function OB() {
      return (0, yB.e)()
    }
    hB || (hB = !0, document.addEventListener("keydown", (BB => {
        (0, cB.d)(BB, nB)
      }))),
      function(BB) {
        var IB;
        return !0 !== (null === BB || void 0 === BB ? void 0 : BB.saveData) && !/2g$/.test(null !== (IB = null === BB || void 0 === BB ? void 0 : BB.effectiveType) && void 0 !== IB ? IB : "")
      }(navigator.connection) && (0, gB.c)((() => {
        (0, qB.d)() || Promise.all([ZB.e(78), ZB.e(90), ZB.e(215), ZB.e(214), ZB.e(137), ZB.e(140), ZB.e(59)]).then((() => ZB(41074))).then((async BB => {
          (0, qB.d)() || (await BB.startLoadAheadOfJoin({
            joinStarted: qB.d,
            language: FB.h.get().getCurrentLanguageCode()
          }), (0, NB.c)(UB))
        }), (BB => {
          console.warn("[bloxd-wasm-client] the loads ahead of a join did not start: the join loads the client itself", BB)
        }))
      }));
    const YB = oB.d.get("router");
    null === YB ? console.warn("[bloxd-wasm-client] no router as the matchmaking chunk loads: the join's loads start with the join") : function BB(IB) {
      if ((0, dB.e)(IB.state.location.pathname)) return void(0, yB.d)().catch((() => {}));
      const ZB = IB.subscribe((TB => {
        (0, dB.e)(TB.location.pathname) && (ZB(), (0, WB.h)().then((() => {
          BB(IB)
        })))
      }))
    }(YB), (0, GB.d)();
    const iB = (0, vB.c)((async function(BB, IB) {
      let {
        place: ZB,
        userContext: oB,
        direct: GB,
        matchedAt: vB,
        rematch: kB
      } = BB;
      const cB = GB ? 1 / 0 : vB;
      let nB;
      try {
        nB = await (0, yB.d)()
      } catch (hB) {
        return console.error("The wasm client did not load:", hB), (0, zB.l)({
          websocketUrl: null
        }), TB.b.errorWithCode(String(hB), JB.l.CONNECT_TO_GAME_SERVER, {
          error: hB,
          severity: IB.aborted ? "low" : "medium",
          fZ: IB.aborted
        })
      }
      return nB.playWasmGame({
        userContext: oB,
        place: ZB,
        matchedAt: cB,
        rematch: kB
      }, IB)
    }));

    function pB() {
      return (0, yB.d)().catch((() => {})), iB(...arguments)
    }
  },
  9016: (BB, IB, ZB) => {
    ZB.d(IB, {
      c: () => FB,
      d: () => zB,
      e: () => NB
    });
    var TB = ZB(3316),
      JB = ZB(2392),
      oB = ZB(2224),
      GB = ZB(4821),
      vB = ZB(3676),
      kB = ZB(9019);
    let cB = null;

    function nB() {
      return Promise.all([ZB.e(75), ZB.e(78), ZB.e(90), ZB.e(215), ZB.e(214), ZB.e(160), ZB.e(137), ZB.e(198), ZB.e(140), ZB.e(88), ZB.e(275), ZB.e(64)]).then((() => ZB(40726)))
    }

    function hB() {
      Promise.all([ZB.e(73), ZB.e(76), ZB.e(75), ZB.e(74), ZB.e(90), ZB.e(87), ZB.e(273), ZB.e(191), ZB.e(228), ZB.e(252), ZB.e(275), ZB.e(47)]).then((() => ZB(41032))).catch((() => {}))
    }

    function zB() {
      return GB.c.cancelDownloadForJoin(), (0, vB.b)(), (0, JB.g)(), (0, kB.g)(), (0, oB.k)(), hB(), Promise.all([ZB.e(78), ZB.e(90), ZB.e(215), ZB.e(214), ZB.e(137), ZB.e(140), ZB.e(59)]).then((() => ZB(41074))).then((BB => {
        let {
          startJoinLoad: IB
        } = BB;
        IB()
      }), (() => {})), cB ??= nB().then((BB => (BB.startWasmPlay(), BB.followPageUiPack((BB => {
        TB.e.showGamePack(BB)
      })), BB)), (BB => {
        throw cB = null, BB
      })), cB
    }

    function FB() {
      return hB(), ZB.e(276).then((() => ZB(41082))).catch((() => {})), nB().then((() => {}))
    }

    function NB() {
      return nB().then((BB => {
        BB.startWasmPreviews(), BB.prefetchWasmPreviews()
      }))
    }
  },
  36492: (BB, IB, ZB) => {
    ZB.d(IB, {
      c: () => zB,
      f: () => nB,
      h: () => FB,
      l: () => hB
    });
    var TB = ZB(360),
      JB = ZB(694),
      oB = ZB(700),
      GB = ZB(36);
    const vB = {
        idStorageKey: "playSessionId",
        lastActivityStorageKey: "playSessionLastActivityMs",
        expiryMs: 3e5
      },
      kB = "playSessionGameNameWithVariation",
      cB = "wasMatchmakePlayer";

    function nB() {
      let BB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : GB.n;
      (0, oB.i)(BB, vB)
    }

    function hB() {
      (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : GB.n).setItem(cB, !0)
    }

    function zB() {
      let BB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : GB.n;
      return (0, oB.c)(BB, vB)
    }

    function FB(BB) {
      let IB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : GB.n;
      const ZB = (0, oB.c)(IB, vB),
        nB = function(BB) {
          const IB = BB.getItem(kB);
          return "string" !== typeof IB ? null : IB
        }(IB),
        hB = function() {
          return !0 === (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : GB.n).getItem(cB)
        }(IB);
      let zB;
      return zB = null !== ZB && null !== nB && (0, oB.e)(IB, vB) && function(BB, IB, ZB) {
          const JB = (0, TB.Vb)(BB),
            oB = (0, TB.Vb)(IB),
            GB = (0, TB.Pb)(BB),
            vB = (0, TB.Pb)(IB);
          return !(JB !== oB || !ZB) || JB === oB && GB === vB
        }(nB, BB, hB) ? ZB : (0, JB.d)(), (0, oB.l)(IB, vB, zB), IB.setItem(kB, BB),
        function() {
          (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : GB.n).removeItem(cB)
        }(IB), zB
    }
  },
  36485: (BB, IB, ZB) => {
    ZB.d(IB, {
      b: () => CB,
      d: () => QB
    });
    var TB = ZB(1058),
      JB = ZB(212),
      oB = ZB(357),
      GB = ZB(671),
      vB = ZB(360),
      kB = ZB(1060),
      cB = ZB(684),
      nB = ZB(714),
      hB = ZB(4704),
      zB = ZB(105),
      FB = ZB(140),
      NB = ZB(1805),
      gB = ZB(121),
      qB = ZB(36492),
      yB = ZB(36),
      UB = ZB(696),
      WB = ZB(676),
      dB = ZB(36501);

    function CB() {
      var BB, IB;
      return [...null !== (BB = navigator.languages) && void 0 !== BB ? BB : [null !== (IB = navigator.language) && void 0 !== IB ? IB : "none"], "en-Gb"]
    }

    function QB(BB, IB, ZB, QB, sB) {
      const wB = (0, TB.i)(IB) ? (0, TB.l)(IB) : null,
        OB = BB.isLoggedIn() && void 0 !== (0, JB.e)(oB.r, FB.siteUsed) ? (0, WB.f)() : null,
        YB = {
          cookies: (0, NB.getAllCookiesForGameNameWithVariation)(IB),
          isMobile: (0, zB.isMobile)(),
          isUsingCustomGameTexturePack: null !== wB && sB(wB),
          generalCookies: {
            joinDiscord: !!yB.m.getItem("DiscordPressed"),
            newGo: hB.b,
            ...BB.getMetricsCookies(),
            trafficCode: QB,
            compliance: zB.compliance
          },
          browserInfo: {
            ua: window.navigator.userAgent,
            name: (0, zB.getBrowserName)(),
            version: (0, zB.getBrowserVersion)(),
            platform: navigator.platform,
            platformType: (0, zB.getPlatformType)(),
            deviceType: (0, gB.e)()
          },
          isLoggedIn: BB.isLoggedIn(),
          lobbyName: ZB,
          languages: CB(),
          version: GB.b,
          siteUsed: FB.siteUsed,
          subsiteUsed: FB.subsiteUsed,
          playSessionId: (0, qB.h)(IB),
          visitSessionId: (0, UB.i)(),
          clientReason: cB.p.reason,
          budgetBasis: (0, dB.h)(),
          ...null !== nB.t && {
            diagClaim: nB.t.claimId
          },
          ...null !== OB && {
            webGpuLoss: OB
          }
        };
      return null !== wB && (0, vB.Gc)(wB) ? (YB.lobbyName = (0, TB.h)(wB, (0, TB.k)(IB), ZB), {
        roomName: `classic_${kB.h}`,
        joinOptions: YB
      }) : {
        roomName: IB,
        joinOptions: YB
      }
    }
  },
  9388: (BB, IB, ZB) => {
    ZB.d(IB, {
      c: () => JB,
      d: () => oB
    });
    var TB = ZB(9340);
    const JB = "Air",
      oB = Object.freeze(new TB.i(JB, 0, "", null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null))
  }
};
Object.freeze(modules);
for (const BB in modules) Object.freeze(modules[BB]);