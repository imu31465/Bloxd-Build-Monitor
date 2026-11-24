/*! For license information please see tz47m9.wasmMatchmaking.3f1f5bed.chunk.js.LICENSE.txt */
export const id = 62;
export const ids = [62];
export const modules = {
  36533: (DD, zD) => {
    function wD(DD) {
      if (DD && "object" === typeof DD) {
        var zD = DD.which || DD.keyCode || DD.charCode;
        zD && (DD = zD)
      }
      if ("number" === typeof DD) return rD[DD];
      var wD, KD = String(DD);
      return (wD = pD[KD.toLowerCase()]) ? wD : (wD = sD[KD.toLowerCase()]) || (1 === KD.length ? KD.charCodeAt(0) : void 0)
    }
    wD.isEventKey = function(DD, zD) {
      if (DD && "object" === typeof DD) {
        var wD = DD.which || DD.keyCode || DD.charCode;
        if (null === wD || void 0 === wD) return !1;
        if ("string" === typeof zD) {
          var KD;
          if (KD = pD[zD.toLowerCase()]) return KD === wD;
          if (KD = sD[zD.toLowerCase()]) return KD === wD
        } else if ("number" === typeof zD) return zD === wD;
        return !1
      }
    };
    var pD = (zD = DD.exports = wD).code = zD.codes = {
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
      sD = zD.aliases = {
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
    for (KD = 97; KD < 123; KD++) pD[String.fromCharCode(KD)] = KD - 32;
    for (var KD = 48; KD < 58; KD++) pD[KD - 48] = KD;
    for (KD = 1; KD < 13; KD++) pD["f" + KD] = KD + 111;
    for (KD = 0; KD < 10; KD++) pD["numpad " + KD] = KD + 96;
    var rD = zD.names = zD.title = {};
    for (KD in pD) rD[pD[KD]] = KD;
    for (var LD in sD) pD[LD] = sD[LD]
  },
  36667: (DD, zD, wD) => {
    wD.d(zD, {
      c: () => rD
    });
    var pD = wD(58);
    const sD = pD.useLayoutEffect;
    const KD = function(DD) {
      var zD = (0, pD.useRef)(DD);
      return sD((function() {
        zD.current = DD
      })), zD
    };
    var rD = function(DD) {
      var zD = KD(DD);
      (0, pD.useEffect)((function() {
        var DD = function(DD) {
          var wD;
          if (null != zD.current && (wD = zD.current(DD)), DD.defaultPrevented && (DD.returnValue = ""), "string" === typeof wD) return DD.returnValue = wD, wD
        };
        return window.addEventListener("beforeunload", DD),
          function() {
            window.removeEventListener("beforeunload", DD)
          }
      }), [])
    }
  },
  36572: DD => {
    var zD, wD = "undefined" !== typeof window ? window.navigator.userAgent : "",
      pD = /OS X/.test(wD),
      sD = /Opera/.test(wD),
      KD = !/like Gecko/.test(wD) && !sD,
      rD = DD.exports = {
        0: pD ? "<menu>" : "<UNK>",
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
        93: pD ? "<meta>" : "<menu>",
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
        173: pD && KD ? "-" : "<volume-mute>",
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
        231: sD ? "`" : "<unicode>",
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
    for (zD = 58; zD < 65; ++zD) rD[zD] = String.fromCharCode(zD);
    for (zD = 48; zD < 58; ++zD) rD[zD] = zD - 48 + "";
    for (zD = 65; zD < 91; ++zD) rD[zD] = String.fromCharCode(zD);
    for (zD = 96; zD < 106; ++zD) rD[zD] = "<num-" + (zD - 96) + ">";
    for (zD = 112; zD < 136; ++zD) rD[zD] = "F" + (zD - 111)
  },
  8915: (DD, zD, wD) => {
    wD.d(zD, {
      b: () => KD,
      c: () => sD
    });
    let pD = !1;

    function sD() {
      pD = !0
    }

    function KD() {
      return pD
    }
  },
  36439: (DD, zD, wD) => {
    wD.r(zD), wD.d(zD, {
      InGameUi: () => JD.b,
      LobbyLeaderboard: () => ED.d,
      loadCharacterCustomisationUI: () => QD,
      loadCharacterPreview: () => XD,
      matchmakeAndPlay: () => xD,
      setUpGame: () => VD
    });
    var pD = wD(1251),
      sD = wD(157),
      KD = wD(20),
      rD = wD(36447),
      LD = wD(36455),
      cD = wD(1956),
      gD = wD(36491);

    function RD() {
      return !1 !== cD.e.get("canCustomiseChar")
    }
    let AD = !1;
    var UD = wD(1332),
      fD = wD(1260),
      ID = wD(262),
      BD = wD(694),
      GD = wD(8915),
      hD = wD(8907);

    function nD() {
      (0, GD.b)() || (0, hD.b)().catch((DD => {
        console.warn("[bloxd-wasm-client] the play chunk did not load ahead of a join: the join loads it itself", DD)
      }))
    }
    var MD = wD(3444),
      OD = wD(1756);
    var JD = wD(36502),
      ED = wD(36983);

    function QD() {
      return wD.e(216).then((() => wD(41187)))
    }

    function XD() {
      return wD.e(291).then((() => wD(41190)))
    }

    function VD() {
      return (0, hD.g)()
    }
    AD || (AD = !0, document.addEventListener("keydown", (DD => {
        (0, gD.c)(DD, RD)
      }))),
      function(DD) {
        var zD;
        return !0 !== (null === DD || void 0 === DD ? void 0 : DD.saveData) && !/2g$/.test(null !== (zD = null === DD || void 0 === DD ? void 0 : DD.effectiveType) && void 0 !== zD ? zD : "")
      }(navigator.connection) && (0, BD.c)((() => {
        (0, GD.b)() || Promise.all([wD.e(77), wD.e(89), wD.e(211), wD.e(210), wD.e(134), wD.e(139), wD.e(58)]).then((() => wD(40967))).then((async DD => {
          (0, GD.b)() || (await DD.startLoadAheadOfJoin({
            joinStarted: GD.b,
            language: fD.e.get().getCurrentLanguageCode()
          }), (0, ID.b)(nD))
        }), (DD => {
          console.warn("[bloxd-wasm-client] the loads ahead of a join did not start: the join loads the client itself", DD)
        }))
      }));
    const PD = KD.e.get("router");
    null === PD ? console.warn("[bloxd-wasm-client] no router as the matchmaking chunk loads: the join's loads start with the join") : function DD(zD) {
      if ((0, OD.c)(zD.state.location.pathname)) return void(0, hD.c)().catch((() => {}));
      const wD = zD.subscribe((pD => {
        (0, OD.c)(pD.location.pathname) && (wD(), (0, MD.e)().then((() => {
          DD(zD)
        })))
      }))
    }(PD), (0, rD.d)();
    const CD = (0, LD.d)((async function(DD, zD) {
      let {
        place: wD,
        userContext: KD,
        direct: rD,
        rematch: LD
      } = DD;
      const cD = rD ? 1 / 0 : performance.now();
      let gD;
      try {
        gD = await (0, hD.c)()
      } catch (RD) {
        return console.error("The wasm client did not load:", RD), (0, UD.q)({
          websocketUrl: null
        }), pD.e.errorWithCode(String(RD), sD.n.CONNECT_TO_GAME_SERVER, {
          error: RD,
          severity: zD.aborted ? "low" : "medium",
          sw: zD.aborted
        })
      }
      return gD.playWasmGame({
        userContext: KD,
        place: wD,
        matchedAt: cD,
        rematch: LD
      }, zD)
    }));

    function xD() {
      return (0, hD.c)().catch((() => {})), CD(...arguments)
    }
  },
  8907: (DD, zD, wD) => {
    wD.d(zD, {
      b: () => fD,
      c: () => UD,
      g: () => ID
    });
    var pD = wD(3139),
      sD = wD(2264),
      KD = wD(2119),
      rD = wD(4673),
      LD = wD(3494),
      cD = wD(8915);
    let gD = null;

    function RD() {
      return Promise.all([wD.e(74), wD.e(77), wD.e(89), wD.e(211), wD.e(76), wD.e(210), wD.e(134), wD.e(196), wD.e(139), wD.e(87), wD.e(218), wD.e(63)]).then((() => wD(40590)))
    }

    function AD() {
      Promise.all([wD.e(72), wD.e(75), wD.e(74), wD.e(73), wD.e(89), wD.e(86), wD.e(269), wD.e(189), wD.e(223), wD.e(247), wD.e(218), wD.e(46)]).then((() => wD(40914))).catch((() => {}))
    }

    function UD() {
      return rD.c.cancelDownloadForJoin(), (0, LD.b)(), (0, sD.c)(), (0, cD.c)(), (0, KD.l)(), AD(), Promise.all([wD.e(77), wD.e(89), wD.e(211), wD.e(210), wD.e(134), wD.e(139), wD.e(58)]).then((() => wD(40967))).then((DD => {
        let {
          startJoinLoad: zD
        } = DD;
        zD()
      }), (() => {})), gD ??= RD().then((DD => (DD.startWasmPlay(), DD.followPageUiPack((DD => {
        pD.b.showGamePack(DD)
      })), DD)), (DD => {
        throw gD = null, DD
      })), gD
    }

    function fD() {
      return AD(), wD.e(271).then((() => wD(40972))).catch((() => {})), RD().then((() => {}))
    }

    function ID() {
      return RD().then((DD => {
        DD.startWasmPreviews(), DD.prefetchWasmPreviews()
      }))
    }
  },
  36808: (DD, zD, wD) => {
    function pD(DD) {
      return "fetch" === DD || "timeout" === DD || "integrity" === DD ? "download" : "browser"
    }
    wD.d(zD, {
      b: () => sD,
      d: () => rD,
      h: () => cD,
      i: () => LD,
      k: () => pD,
      l: () => KD
    });
    const sD = "https://discord.gg/playbloxd";

    function KD(DD) {
      return "download" === DD ? {
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

    function rD(DD, zD) {
      return {
        icon: "face-dizzy",
        title: "wasmScreens:crashTitle",
        help: zD ? "wasmScreens:crashHelp" : "wasmScreens:crashHelpNoDiscord",
        helpValues: {
          code: DD.code
        },
        discordLink: zD,
        confirm: "general:reload",
        cancel: "general:back"
      }
    }

    function LD() {
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

    function cD(DD, zD, wD) {
      return {
        icon: "wifi",
        title: "wasmScreens:disconnectedTitle",
        help: wD ? "wasmScreens:reconnectingHelp" : "wasmScreens:disconnectedHelp",
        helpValues: {
          reason: DD.reason
        },
        discordLink: null === DD.name,
        confirm: zD ? "general:reconnect" : DD.requiresRefresh ? "general:reload" : "general:ok",
        cancel: null
      }
    }
  },
  9286: (DD, zD, wD) => {
    wD.d(zD, {
      c: () => sD,
      e: () => KD
    });
    var pD = wD(9236);
    const sD = "Air",
      KD = Object.freeze(new pD.h(sD, 0, "", null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null))
  }
};
Object.freeze(modules);
for (const DD in modules) Object.freeze(modules[DD]);