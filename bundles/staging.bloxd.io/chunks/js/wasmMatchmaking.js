/*! For license information please see 7zvlu.wasmMatchmaking.c725b42b.chunk.js.LICENSE.txt */
export const id = 63;
export const ids = [63];
export const modules = {
  36619: (BB, jB) => {
    function zB(BB) {
      if (BB && "object" === typeof BB) {
        var jB = BB.which || BB.keyCode || BB.charCode;
        jB && (BB = jB)
      }
      if ("number" === typeof BB) return IB[BB];
      var zB, dB = String(BB);
      return (zB = QB[dB.toLowerCase()]) ? zB : (zB = nB[dB.toLowerCase()]) || (1 === dB.length ? dB.charCodeAt(0) : void 0)
    }
    zB.isEventKey = function(BB, jB) {
      if (BB && "object" === typeof BB) {
        var zB = BB.which || BB.keyCode || BB.charCode;
        if (null === zB || void 0 === zB) return !1;
        if ("string" === typeof jB) {
          var dB;
          if (dB = QB[jB.toLowerCase()]) return dB === zB;
          if (dB = nB[jB.toLowerCase()]) return dB === zB
        } else if ("number" === typeof jB) return jB === zB;
        return !1
      }
    };
    var QB = (jB = BB.exports = zB).code = jB.codes = {
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
      nB = jB.aliases = {
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
    for (dB = 97; dB < 123; dB++) QB[String.fromCharCode(dB)] = dB - 32;
    for (var dB = 48; dB < 58; dB++) QB[dB - 48] = dB;
    for (dB = 1; dB < 13; dB++) QB["f" + dB] = dB + 111;
    for (dB = 0; dB < 10; dB++) QB["numpad " + dB] = dB + 96;
    var IB = jB.names = jB.title = {};
    for (dB in QB) IB[QB[dB]] = dB;
    for (var NB in nB) QB[NB] = nB[NB]
  },
  36775: (BB, jB, zB) => {
    zB.d(jB, {
      b: () => IB
    });
    var QB = zB(62);
    const nB = QB.useLayoutEffect;
    const dB = function(BB) {
      var jB = (0, QB.useRef)(BB);
      return nB((function() {
        jB.current = BB
      })), jB
    };
    var IB = function(BB) {
      var jB = dB(BB);
      (0, QB.useEffect)((function() {
        var BB = function(BB) {
          var zB;
          if (null != jB.current && (zB = jB.current(BB)), BB.defaultPrevented && (BB.returnValue = ""), "string" === typeof zB) return BB.returnValue = zB, zB
        };
        return window.addEventListener("beforeunload", BB),
          function() {
            window.removeEventListener("beforeunload", BB)
          }
      }), [])
    }
  },
  36662: BB => {
    var jB, zB = "undefined" !== typeof window ? window.navigator.userAgent : "",
      QB = /OS X/.test(zB),
      nB = /Opera/.test(zB),
      dB = !/like Gecko/.test(zB) && !nB,
      IB = BB.exports = {
        0: QB ? "<menu>" : "<UNK>",
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
        93: QB ? "<meta>" : "<menu>",
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
        173: QB && dB ? "-" : "<volume-mute>",
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
        231: nB ? "`" : "<unicode>",
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
    for (jB = 58; jB < 65; ++jB) IB[jB] = String.fromCharCode(jB);
    for (jB = 48; jB < 58; ++jB) IB[jB] = jB - 48 + "";
    for (jB = 65; jB < 91; ++jB) IB[jB] = String.fromCharCode(jB);
    for (jB = 96; jB < 106; ++jB) IB[jB] = "<num-" + (jB - 96) + ">";
    for (jB = 112; jB < 136; ++jB) IB[jB] = "F" + (jB - 111)
  },
  8937: (BB, jB, zB) => {
    zB.d(jB, {
      d: () => dB,
      f: () => nB
    });
    let QB = !1;

    function nB() {
      QB = !0
    }

    function dB() {
      return QB
    }
  },
  36519: (BB, jB, zB) => {
    zB.r(jB), zB.d(jB, {
      InGameUi: () => tB.b,
      LobbyLeaderboard: () => SB.c,
      loadCharacterCustomisationUI: () => MB,
      loadCharacterPreview: () => EB,
      matchmakeAndPlay: () => oB,
      matchmakeForAhead: () => NB.g,
      setUpGame: () => iB
    });
    var QB = zB(1277),
      nB = zB(174),
      dB = zB(28),
      IB = zB(36522),
      NB = zB(36530),
      uB = zB(2006),
      UB = zB(36570);

    function aB() {
      return !1 !== uB.c.get("canCustomiseChar")
    }
    let pB = !1;
    var rB = zB(1357),
      sB = zB(1284),
      JB = zB(269),
      mB = zB(3673),
      yB = zB(8937),
      kB = zB(8930);

    function GB() {
      (0, yB.d)() || (0, kB.d)().catch((BB => {
        console.warn("[bloxd-wasm-client] the play chunk did not load ahead of a join: the join loads it itself", BB)
      }))
    }
    var LB = zB(3551),
      gB = zB(1799);
    var tB = zB(36577),
      SB = zB(37089);

    function MB() {
      return zB.e(220).then((() => zB(41373)))
    }

    function EB() {
      return zB.e(296).then((() => zB(41379)))
    }

    function iB() {
      return (0, kB.i)()
    }
    pB || (pB = !0, document.addEventListener("keydown", (BB => {
        (0, UB.b)(BB, aB)
      }))),
      function(BB) {
        var jB;
        return !0 !== (null === BB || void 0 === BB ? void 0 : BB.saveData) && !/2g$/.test(null !== (jB = null === BB || void 0 === BB ? void 0 : BB.effectiveType) && void 0 !== jB ? jB : "")
      }(navigator.connection) && (0, mB.c)((() => {
        (0, yB.d)() || Promise.all([zB.e(78), zB.e(90), zB.e(215), zB.e(214), zB.e(137), zB.e(140), zB.e(59)]).then((() => zB(41142))).then((async BB => {
          (0, yB.d)() || (await BB.startLoadAheadOfJoin({
            joinStarted: yB.d,
            language: sB.c.get().getCurrentLanguageCode()
          }), (0, JB.c)(GB))
        }), (BB => {
          console.warn("[bloxd-wasm-client] the loads ahead of a join did not start: the join loads the client itself", BB)
        }))
      }));
    const qB = dB.c.get("router");
    null === qB ? console.warn("[bloxd-wasm-client] no router as the matchmaking chunk loads: the join's loads start with the join") : function BB(jB) {
      if ((0, gB.c)(jB.state.location.pathname)) return void(0, kB.e)().catch((() => {}));
      const zB = jB.subscribe((QB => {
        (0, gB.c)(QB.location.pathname) && (zB(), (0, LB.e)().then((() => {
          BB(jB)
        })))
      }))
    }(qB), (0, IB.e)();
    const fB = (0, NB.c)((async function(BB, jB) {
      let {
        place: zB,
        userContext: dB,
        direct: IB,
        matchedAt: NB,
        rematch: uB
      } = BB;
      const UB = IB ? 1 / 0 : NB;
      let aB;
      try {
        aB = await (0, kB.e)()
      } catch (pB) {
        return console.error("The wasm client did not load:", pB), (0, rB.q)({
          websocketUrl: null
        }), QB.d.errorWithCode(String(pB), nB.j.CONNECT_TO_GAME_SERVER, {
          error: pB,
          severity: jB.aborted ? "low" : "medium",
          xz: jB.aborted
        })
      }
      return aB.playWasmGame({
        userContext: dB,
        place: zB,
        matchedAt: UB,
        rematch: uB
      }, jB)
    }));

    function oB() {
      return (0, kB.e)().catch((() => {})), fB(...arguments)
    }
  },
  8930: (BB, jB, zB) => {
    zB.d(jB, {
      d: () => sB,
      e: () => rB,
      i: () => JB
    });
    var QB = zB(3270),
      nB = zB(2354),
      dB = zB(2201),
      IB = zB(4736),
      NB = zB(3606),
      uB = zB(8937);
    let UB = null;

    function aB() {
      return Promise.all([zB.e(75), zB.e(78), zB.e(90), zB.e(215), zB.e(214), zB.e(160), zB.e(137), zB.e(198), zB.e(140), zB.e(88), zB.e(275), zB.e(64)]).then((() => zB(40763)))
    }

    function pB() {
      Promise.all([zB.e(73), zB.e(76), zB.e(75), zB.e(74), zB.e(90), zB.e(87), zB.e(273), zB.e(191), zB.e(228), zB.e(252), zB.e(275), zB.e(47)]).then((() => zB(41085))).catch((() => {}))
    }

    function rB() {
      return IB.b.cancelDownloadForJoin(), (0, NB.e)(), (0, nB.e)(), (0, uB.f)(), (0, dB.g)(), pB(), Promise.all([zB.e(78), zB.e(90), zB.e(215), zB.e(214), zB.e(137), zB.e(140), zB.e(59)]).then((() => zB(41142))).then((BB => {
        let {
          startJoinLoad: jB
        } = BB;
        jB()
      }), (() => {})), UB ??= aB().then((BB => (BB.startWasmPlay(), BB.followPageUiPack((BB => {
        QB.e.showGamePack(BB)
      })), BB)), (BB => {
        throw UB = null, BB
      })), UB
    }

    function sB() {
      return pB(), zB.e(276).then((() => zB(41150))).catch((() => {})), aB().then((() => {}))
    }

    function JB() {
      return aB().then((BB => {
        BB.startWasmPreviews(), BB.prefetchWasmPreviews()
      }))
    }
  },
  36538: (BB, jB, zB) => {
    zB.d(jB, {
      b: () => rB,
      f: () => aB,
      h: () => sB,
      i: () => pB
    });
    var QB = zB(376),
      nB = zB(698),
      dB = zB(710),
      IB = zB(41);
    const NB = {
        idStorageKey: "playSessionId",
        lastActivityStorageKey: "playSessionLastActivityMs",
        expiryMs: 3e5
      },
      uB = "playSessionGameNameWithVariation",
      UB = "wasMatchmakePlayer";

    function aB() {
      let BB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : IB.k;
      (0, dB.h)(BB, NB)
    }

    function pB() {
      (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : IB.k).setItem(UB, !0)
    }

    function rB() {
      let BB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : IB.k;
      return (0, dB.d)(BB, NB)
    }

    function sB(BB) {
      let jB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : IB.k;
      const zB = (0, dB.d)(jB, NB),
        aB = function(BB) {
          const jB = BB.getItem(uB);
          return "string" !== typeof jB ? null : jB
        }(jB),
        pB = function() {
          return !0 === (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : IB.k).getItem(UB)
        }(jB);
      let rB;
      return rB = null !== zB && null !== aB && (0, dB.f)(jB, NB) && function(BB, jB, zB) {
          const nB = (0, QB.Sb)(BB),
            dB = (0, QB.Sb)(jB),
            IB = (0, QB.Mb)(BB),
            NB = (0, QB.Mb)(jB);
          return !(nB !== dB || !zB) || nB === dB && IB === NB
        }(aB, BB, pB) ? zB : (0, nB.b)(), (0, dB.l)(jB, NB, rB), jB.setItem(uB, BB),
        function() {
          (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : IB.k).removeItem(UB)
        }(jB), rB
    }
  },
  36533: (BB, jB, zB) => {
    zB.d(jB, {
      e: () => tB,
      i: () => SB
    });
    var QB = zB(1067),
      nB = zB(225),
      dB = zB(373),
      IB = zB(667),
      NB = zB(376),
      uB = zB(1069),
      UB = zB(690),
      aB = zB(722),
      pB = zB(4644),
      rB = zB(106),
      sB = zB(145),
      JB = zB(1778),
      mB = zB(125),
      yB = zB(36538),
      kB = zB(41),
      GB = zB(701),
      LB = zB(676),
      gB = zB(36547);

    function tB() {
      var BB, jB;
      return [...null !== (BB = navigator.languages) && void 0 !== BB ? BB : [null !== (jB = navigator.language) && void 0 !== jB ? jB : "none"], "en-Gb"]
    }

    function SB(BB, jB, zB, SB, MB) {
      const EB = (0, QB.n)(jB) ? (0, QB.q)(jB) : null,
        iB = BB.isLoggedIn() && void 0 !== (0, nB.b)(dB.k, sB.siteUsed) ? (0, LB.f)() : null,
        qB = {
          cookies: (0, JB.getAllCookiesForGameNameWithVariation)(jB),
          isMobile: (0, rB.isMobile)(),
          isUsingCustomGameTexturePack: null !== EB && MB(EB),
          generalCookies: {
            joinDiscord: !!kB.j.getItem("DiscordPressed"),
            newGo: pB.c,
            ...BB.getMetricsCookies(),
            trafficCode: SB,
            compliance: rB.compliance
          },
          browserInfo: {
            ua: window.navigator.userAgent,
            name: (0, rB.getBrowserName)(),
            version: (0, rB.getBrowserVersion)(),
            platform: navigator.platform,
            platformType: (0, rB.getPlatformType)(),
            deviceType: (0, mB.c)()
          },
          isLoggedIn: BB.isLoggedIn(),
          lobbyName: zB,
          languages: tB(),
          version: IB.b,
          siteUsed: sB.siteUsed,
          subsiteUsed: sB.subsiteUsed,
          playSessionId: (0, yB.h)(jB),
          visitSessionId: (0, GB.h)(),
          clientReason: UB.p.reason,
          budgetBasis: (0, gB.i)(),
          ...null !== aB.l && {
            diagClaim: aB.l.claimId
          },
          ...null !== iB && {
            webGpuLoss: iB
          }
        };
      return null !== EB && (0, NB.Hc)(EB) ? (qB.lobbyName = (0, QB.j)(EB, (0, QB.p)(jB), zB), {
        roomName: `classic_${uB.g}`,
        joinOptions: qB
      }) : {
        roomName: jB,
        joinOptions: qB
      }
    }
  },
  9366: (BB, jB, zB) => {
    zB.d(jB, {
      b: () => nB,
      e: () => dB
    });
    var QB = zB(9311);
    const nB = "Air",
      dB = Object.freeze(new QB.h(nB, 0, "", null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null))
  }
};
Object.freeze(modules);
for (const BB in modules) Object.freeze(modules[BB]);