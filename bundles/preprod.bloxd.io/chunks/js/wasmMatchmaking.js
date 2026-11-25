/*! For license information please see fo1voe.wasmMatchmaking.eb11e22c.chunk.js.LICENSE.txt */
export const id = 74;
export const ids = [74];
export const modules = {
  37484: (MM, rM) => {
    function iM(MM) {
      if (MM && "object" === typeof MM) {
        var rM = MM.which || MM.keyCode || MM.charCode;
        rM && (MM = rM)
      }
      if ("number" === typeof MM) return aM[MM];
      var iM, jM = String(MM);
      return (iM = OM[jM.toLowerCase()]) ? iM : (iM = SM[jM.toLowerCase()]) || (1 === jM.length ? jM.charCodeAt(0) : void 0)
    }
    iM.isEventKey = function(MM, rM) {
      if (MM && "object" === typeof MM) {
        var iM = MM.which || MM.keyCode || MM.charCode;
        if (null === iM || void 0 === iM) return !1;
        if ("string" === typeof rM) {
          var jM;
          if (jM = OM[rM.toLowerCase()]) return jM === iM;
          if (jM = SM[rM.toLowerCase()]) return jM === iM
        } else if ("number" === typeof rM) return rM === iM;
        return !1
      }
    };
    var OM = (rM = MM.exports = iM).code = rM.codes = {
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
      SM = rM.aliases = {
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
    for (jM = 97; jM < 123; jM++) OM[String.fromCharCode(jM)] = jM - 32;
    for (var jM = 48; jM < 58; jM++) OM[jM - 48] = jM;
    for (jM = 1; jM < 13; jM++) OM["f" + jM] = jM + 111;
    for (jM = 0; jM < 10; jM++) OM["numpad " + jM] = jM + 96;
    var aM = rM.names = rM.title = {};
    for (jM in OM) aM[OM[jM]] = jM;
    for (var PM in SM) OM[PM] = SM[PM]
  },
  37640: (MM, rM, iM) => {
    iM.d(rM, {
      e: () => aM
    });
    var OM = iM(44);
    const SM = OM.useLayoutEffect;
    const jM = function(MM) {
      var rM = (0, OM.useRef)(MM);
      return SM((function() {
        rM.current = MM
      })), rM
    };
    var aM = function(MM) {
      var rM = jM(MM);
      (0, OM.useEffect)((function() {
        var MM = function(MM) {
          var iM;
          if (null != rM.current && (iM = rM.current(MM)), MM.defaultPrevented && (MM.returnValue = ""), "string" === typeof iM) return MM.returnValue = iM, iM
        };
        return window.addEventListener("beforeunload", MM),
          function() {
            window.removeEventListener("beforeunload", MM)
          }
      }), [])
    }
  },
  37517: MM => {
    var rM, iM = "undefined" !== typeof window ? window.navigator.userAgent : "",
      OM = /OS X/.test(iM),
      SM = /Opera/.test(iM),
      jM = !/like Gecko/.test(iM) && !SM,
      aM = MM.exports = {
        0: OM ? "<menu>" : "<UNK>",
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
        93: OM ? "<meta>" : "<menu>",
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
        173: OM && jM ? "-" : "<volume-mute>",
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
        231: SM ? "`" : "<unicode>",
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
    for (rM = 58; rM < 65; ++rM) aM[rM] = String.fromCharCode(rM);
    for (rM = 48; rM < 58; ++rM) aM[rM] = rM - 48 + "";
    for (rM = 65; rM < 91; ++rM) aM[rM] = String.fromCharCode(rM);
    for (rM = 96; rM < 106; ++rM) aM[rM] = "<num-" + (rM - 96) + ">";
    for (rM = 112; rM < 136; ++rM) aM[rM] = "F" + (rM - 111)
  },
  37538: (MM, rM, iM) => {
    iM.d(rM, {
      e: () => HM,
      i: () => hM,
      m: () => mM,
      p: () => LM
    });
    var OM = iM(35017),
      SM = iM(37542),
      jM = iM(37544),
      aM = iM(9328),
      PM = iM(1516),
      nM = iM(44),
      QM = iM(65),
      zM = iM(1303);

    function LM() {
      var MM;
      return (0, PM.e)(SM.e, (0, SM.t)()), (0, zM.jsx)(zM.Fragment, {
        children: null === (MM = (0, SM.t)()) || void 0 === MM ? void 0 : MM.content
      })
    }

    function mM(MM) {
      var rM;
      let {
        show: iM
      } = MM;
      (0, PM.e)(SM.e, (0, SM.t)());
      const QM = null === (rM = (0, SM.t)()) || void 0 === rM ? void 0 : rM.menu;
      return (0, nM.useEffect)((() => {
        var MM;
        iM || (null === QM || void 0 === QM || null === (MM = QM.onClose) || void 0 === MM || MM.call(QM), (0, jM.q)())
      }), [iM, QM]), (0, nM.useEffect)((() => iM ? (0, aM.e)(jM.y, jM.f) : void 0), [iM]), (0, zM.jsx)(OM.e, {
        showing: iM,
        globallyUniqueKey: "clientGameMenu",
        children: null === QM || void 0 === QM ? void 0 : QM.content
      })
    }

    function HM(MM) {
      let {
        placement: rM = "bottom"
      } = MM;
      return (0, zM.jsx)("div", {
        id: `clientGameHud-${rM}`,
        style: {
          display: "contents"
        }
      })
    }

    function hM(MM) {
      let {
        children: rM,
        placement: iM = "bottom"
      } = MM;
      const [OM, SM] = (0, nM.useState)(null);
      return (0, nM.useEffect)((() => {
        SM(document.getElementById(`clientGameHud-${iM}`))
      }), [iM]), OM ? (0, QM.createPortal)(rM, OM) : null
    }
  },
  9328: (MM, rM, iM) => {
    iM.d(rM, {
      c: () => jM,
      e: () => SM
    });
    let OM = null;
    const SM = function(MM) {
        const rM = {
          cycle: MM,
          canCycle: arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : () => !0
        };
        return OM = rM, () => {
          OM === rM && (OM = null)
        }
      },
      jM = () => {
        var MM;
        return null !== (MM = OM) && void 0 !== MM && MM.canCycle() ? OM.cycle : null
      }
  },
  9517: (MM, rM, iM) => {
    iM.d(rM, {
      b: () => jM,
      e: () => SM
    });
    let OM = !1;

    function SM() {
      OM = !0
    }

    function jM() {
      return OM
    }
  },
  37397: (MM, rM, iM) => {
    iM.r(rM), iM.d(rM, {
      InGameUi: () => GM.e,
      LobbyLeaderboard: () => CM.c,
      loadCharacterCustomisationUI: () => eM,
      loadCharacterPreview: () => bM,
      matchmakeAndPlay: () => uM,
      matchmakeForAhead: () => PM.h,
      setUpGame: () => wM
    });
    var OM = iM(1251),
      SM = iM(143),
      jM = iM(19),
      aM = iM(37402),
      PM = iM(37407),
      nM = iM(2067),
      QM = iM(37440);

    function zM() {
      return !1 !== nM.d.get("canCustomiseChar")
    }
    let LM = !1;
    var mM = iM(1373),
      HM = iM(1258),
      hM = iM(222),
      JM = iM(2562),
      dM = iM(9517),
      yM = iM(9514);

    function lM() {
      (0, dM.b)() || (0, yM.e)().catch((MM => {
        console.warn("[bloxd-wasm-client] the play chunk did not load ahead of a join: the join loads it itself", MM)
      }))
    }
    var EM = iM(3839),
      UM = iM(1851);
    var GM = iM(37442),
      CM = iM(37944);

    function eM() {
      return iM.e(239).then((() => iM(43954)))
    }

    function bM() {
      return iM.e(601).then((() => iM(43956)))
    }

    function wM() {
      return (0, yM.h)()
    }
    LM || (LM = !0, document.addEventListener("keydown", (MM => {
        (0, QM.e)(MM, zM)
      }))),
      function(MM) {
        var rM;
        return !0 !== (null === MM || void 0 === MM ? void 0 : MM.saveData) && !/2g$/.test(null !== (rM = null === MM || void 0 === MM ? void 0 : MM.effectiveType) && void 0 !== rM ? rM : "")
      }(navigator.connection) && (0, JM.f)((() => {
        (0, dM.b)() || Promise.all([iM.e(89), iM.e(103), iM.e(233), iM.e(232), iM.e(150), iM.e(153), iM.e(70)]).then((() => iM(42162))).then((async MM => {
          if ((0, dM.b)()) return;
          const rM = MM.startLoadAheadOfJoin({
            joinStarted: dM.b,
            language: HM.e.get().getCurrentLanguageCode()
          });
          (0, hM.d)((() => {
            (0, dM.b)() || MM.probeWebgl2AheadOfJoin()
          })), await rM, (0, hM.d)(lM)
        }), (MM => {
          console.warn("[bloxd-wasm-client] the loads ahead of a join did not start: the join loads the client itself", MM)
        }))
      }));
    const tM = jM.d.get("router");
    null === tM ? console.warn("[bloxd-wasm-client] no router as the matchmaking chunk loads: the join's loads start with the join") : function MM(rM) {
      if ((0, UM.e)(rM.state.location.pathname)) return void(0, yM.f)().catch((() => {}));
      const iM = rM.subscribe((OM => {
        (0, UM.e)(OM.location.pathname) && (iM(), (0, EM.e)().then((() => {
          MM(rM)
        })))
      }))
    }(tM), (0, aM.b)();
    const gM = (0, PM.e)((async function(MM, rM) {
      let {
        place: iM,
        userContext: jM,
        direct: aM,
        matchedAt: PM,
        rematch: nM
      } = MM;
      const QM = aM ? 1 / 0 : PM;
      let zM;
      try {
        zM = await (0, yM.f)()
      } catch (LM) {
        return console.error("The wasm client did not load:", LM), (0, mM.p)({
          websocketUrl: null
        }), OM.b.errorWithCode(String(LM), SM.n.CONNECT_TO_GAME_SERVER, {
          error: LM,
          severity: rM.aborted ? "low" : "medium",
          Ti: rM.aborted
        })
      }
      return zM.playWasmGame({
        userContext: jM,
        place: iM,
        matchedAt: QM,
        rematch: nM
      }, rM)
    }));

    function uM() {
      return (0, yM.f)().catch((() => {})), gM(...arguments)
    }
  },
  9514: (MM, rM, iM) => {
    iM.d(rM, {
      e: () => HM,
      f: () => mM,
      h: () => hM
    });
    var OM = iM(3563),
      SM = iM(2414),
      jM = iM(2257),
      aM = iM(5022),
      PM = iM(3902),
      nM = iM(9517);
    let QM = null;

    function zM() {
      return Promise.all([iM.e(86), iM.e(89), iM.e(103), iM.e(233), iM.e(232), iM.e(174), iM.e(222), iM.e(150), iM.e(153), iM.e(101), iM.e(298), iM.e(75)]).then((() => iM(41755)))
    }

    function LM() {
      Promise.all([iM.e(84), iM.e(87), iM.e(85), iM.e(86), iM.e(103), iM.e(100), iM.e(296), iM.e(205), iM.e(246), iM.e(272), iM.e(298), iM.e(53)]).then((() => iM(42102))).catch((() => {}))
    }

    function mM() {
      return aM.e.cancelDownloadForJoin(), (0, PM.b)(), (0, SM.c)(), (0, nM.e)(), (0, jM.j)(), LM(), Promise.all([iM.e(89), iM.e(103), iM.e(233), iM.e(232), iM.e(150), iM.e(153), iM.e(70)]).then((() => iM(42162))).then((MM => {
        let {
          startJoinLoad: rM
        } = MM;
        rM()
      }), (() => {})), QM ??= zM().then((MM => (MM.startWasmPlay(), MM.followPageUiPack((MM => {
        OM.e.showGamePack(MM)
      })), MM)), (MM => {
        throw QM = null, MM
      })), QM
    }

    function HM() {
      return LM(), iM.e(299).then((() => iM(42165))).catch((() => {})), zM().then((() => {}))
    }

    function hM() {
      return zM().then((MM => {
        MM.startWasmPreviews(), MM.prefetchWasmPreviews()
      }))
    }
  },
  37416: (MM, rM, iM) => {
    iM.d(rM, {
      d: () => mM,
      e: () => zM,
      g: () => HM,
      k: () => LM
    });
    var OM = iM(332),
      SM = iM(670),
      jM = iM(680),
      aM = iM(30);
    const PM = {
        idStorageKey: "playSessionId",
        lastActivityStorageKey: "playSessionLastActivityMs",
        expiryMs: 3e5
      },
      nM = "playSessionGameNameWithVariation",
      QM = "wasMatchmakePlayer";

    function zM() {
      let MM = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : aM.k;
      (0, jM.k)(MM, PM)
    }

    function LM() {
      (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : aM.k).setItem(QM, !0)
    }

    function mM() {
      let MM = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : aM.k;
      return (0, jM.e)(MM, PM)
    }

    function HM(MM) {
      let rM = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : aM.k;
      const iM = (0, jM.e)(rM, PM),
        zM = function(MM) {
          const rM = MM.getItem(nM);
          return "string" !== typeof rM ? null : rM
        }(rM),
        LM = function() {
          return !0 === (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : aM.k).getItem(QM)
        }(rM);
      let mM;
      return mM = null !== iM && null !== zM && (0, jM.g)(rM, PM) && function(MM, rM, iM) {
          const SM = (0, OM.Mb)(MM),
            jM = (0, OM.Mb)(rM),
            aM = (0, OM.Jb)(MM),
            PM = (0, OM.Jb)(rM);
          return !(SM !== jM || !iM) || SM === jM && aM === PM
        }(zM, MM, LM) ? iM : (0, SM.e)(), (0, jM.o)(rM, PM, mM), rM.setItem(nM, MM),
        function() {
          (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : aM.k).removeItem(QM)
        }(rM), mM
    }
  },
  37414: (MM, rM, iM) => {
    iM.d(rM, {
      c: () => GM,
      f: () => CM
    });
    var OM = iM(1073),
      SM = iM(187),
      jM = iM(327),
      aM = iM(632),
      PM = iM(332),
      nM = iM(1081),
      QM = iM(656),
      zM = iM(694),
      LM = iM(4906),
      mM = iM(83),
      HM = iM(119),
      hM = iM(1830),
      JM = iM(103),
      dM = iM(37416),
      yM = iM(30),
      lM = iM(673),
      EM = iM(637),
      UM = iM(37422);

    function GM() {
      var MM, rM;
      return [...null !== (MM = navigator.languages) && void 0 !== MM ? MM : [null !== (rM = navigator.language) && void 0 !== rM ? rM : "none"], "en-Gb"]
    }

    function CM(MM, rM, iM, CM, eM) {
      const bM = (0, OM.m)(rM) ? (0, OM.p)(rM) : null,
        wM = MM.isLoggedIn() && void 0 !== (0, SM.d)(jM.g, HM.siteUsed) ? (0, EM.h)() : null,
        tM = {
          cookies: (0, hM.getAllCookiesForGameNameWithVariation)(rM),
          isMobile: (0, mM.isMobile)(),
          isUsingCustomGameTexturePack: null !== bM && eM(bM),
          generalCookies: {
            joinDiscord: !!yM.g.getItem("DiscordPressed"),
            newGo: LM.c,
            ...MM.getMetricsCookies(),
            trafficCode: CM,
            compliance: mM.compliance
          },
          browserInfo: {
            ua: window.navigator.userAgent,
            name: (0, mM.getBrowserName)(),
            version: (0, mM.getBrowserVersion)(),
            platform: navigator.platform,
            platformType: (0, mM.getPlatformType)(),
            deviceType: (0, JM.c)()
          },
          isLoggedIn: MM.isLoggedIn(),
          lobbyName: iM,
          languages: GM(),
          version: aM.c,
          siteUsed: HM.siteUsed,
          subsiteUsed: HM.subsiteUsed,
          playSessionId: (0, dM.g)(rM),
          visitSessionId: (0, lM.e)(),
          clientReason: QM.x.reason,
          budgetBasis: (0, UM.f)(),
          ...null !== zM.m && {
            diagClaim: zM.m.claimId
          },
          ...null !== wM && {
            webGpuLoss: wM
          }
        };
      return null !== bM && (0, PM.Dc)(bM) ? (tM.lobbyName = (0, OM.i)(bM, (0, OM.o)(rM), iM), {
        roomName: `classic_${nM.g}`,
        joinOptions: tM
      }) : {
        roomName: rM,
        joinOptions: tM
      }
    }
  },
  9918: (MM, rM, iM) => {
    iM.d(rM, {
      c: () => SM,
      e: () => jM
    });
    var OM = iM(9863);
    const SM = "Air",
      jM = Object.freeze(new OM.c(SM, 0, "", null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null))
  }
};
Object.freeze(modules);
for (const MM in modules) Object.freeze(modules[MM]);