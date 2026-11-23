/*! For license information please see 31kiid.wasmMatchmaking.297adf1d.chunk.js.LICENSE.txt */
export const id = 62;
export const ids = [62];
export const modules = {
  36537: (kk, Fk) => {
    function Ik(kk) {
      if (kk && "object" === typeof kk) {
        var Fk = kk.which || kk.keyCode || kk.charCode;
        Fk && (kk = Fk)
      }
      if ("number" === typeof kk) return yk[kk];
      var Ik, ik = String(kk);
      return (Ik = Xk[ik.toLowerCase()]) ? Ik : (Ik = Tk[ik.toLowerCase()]) || (1 === ik.length ? ik.charCodeAt(0) : void 0)
    }
    Ik.isEventKey = function(kk, Fk) {
      if (kk && "object" === typeof kk) {
        var Ik = kk.which || kk.keyCode || kk.charCode;
        if (null === Ik || void 0 === Ik) return !1;
        if ("string" === typeof Fk) {
          var ik;
          if (ik = Xk[Fk.toLowerCase()]) return ik === Ik;
          if (ik = Tk[Fk.toLowerCase()]) return ik === Ik
        } else if ("number" === typeof Fk) return Fk === Ik;
        return !1
      }
    };
    var Xk = (Fk = kk.exports = Ik).code = Fk.codes = {
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
      Tk = Fk.aliases = {
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
    for (ik = 97; ik < 123; ik++) Xk[String.fromCharCode(ik)] = ik - 32;
    for (var ik = 48; ik < 58; ik++) Xk[ik - 48] = ik;
    for (ik = 1; ik < 13; ik++) Xk["f" + ik] = ik + 111;
    for (ik = 0; ik < 10; ik++) Xk["numpad " + ik] = ik + 96;
    var yk = Fk.names = Fk.title = {};
    for (ik in Xk) yk[Xk[ik]] = ik;
    for (var lk in Tk) Xk[lk] = Tk[lk]
  },
  36699: (kk, Fk, Ik) => {
    Ik.d(Fk, {
      c: () => yk
    });
    var Xk = Ik(58);
    const Tk = Xk.useLayoutEffect;
    const ik = function(kk) {
      var Fk = (0, Xk.useRef)(kk);
      return Tk((function() {
        Fk.current = kk
      })), Fk
    };
    var yk = function(kk) {
      var Fk = ik(kk);
      (0, Xk.useEffect)((function() {
        var kk = function(kk) {
          var Ik;
          if (null != Fk.current && (Ik = Fk.current(kk)), kk.defaultPrevented && (kk.returnValue = ""), "string" === typeof Ik) return kk.returnValue = Ik, Ik
        };
        return window.addEventListener("beforeunload", kk),
          function() {
            window.removeEventListener("beforeunload", kk)
          }
      }), [])
    }
  },
  36580: kk => {
    var Fk, Ik = "undefined" !== typeof window ? window.navigator.userAgent : "",
      Xk = /OS X/.test(Ik),
      Tk = /Opera/.test(Ik),
      ik = !/like Gecko/.test(Ik) && !Tk,
      yk = kk.exports = {
        0: Xk ? "<menu>" : "<UNK>",
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
        93: Xk ? "<meta>" : "<menu>",
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
        173: Xk && ik ? "-" : "<volume-mute>",
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
        231: Tk ? "`" : "<unicode>",
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
    for (Fk = 58; Fk < 65; ++Fk) yk[Fk] = String.fromCharCode(Fk);
    for (Fk = 48; Fk < 58; ++Fk) yk[Fk] = Fk - 48 + "";
    for (Fk = 65; Fk < 91; ++Fk) yk[Fk] = String.fromCharCode(Fk);
    for (Fk = 96; Fk < 106; ++Fk) yk[Fk] = "<num-" + (Fk - 96) + ">";
    for (Fk = 112; Fk < 136; ++Fk) yk[Fk] = "F" + (Fk - 111)
  },
  8895: (kk, Fk, Ik) => {
    Ik.d(Fk, {
      c: () => ik,
      e: () => Tk
    });
    let Xk = !1;

    function Tk() {
      Xk = !0
    }

    function ik() {
      return Xk
    }
  },
  36441: (kk, Fk, Ik) => {
    Ik.r(Fk), Ik.d(Fk, {
      InGameUi: () => Qk.e,
      LobbyLeaderboard: () => sk.b,
      loadCharacterCustomisationUI: () => Vk,
      loadCharacterPreview: () => zk,
      matchmakeAndPlay: () => Ok,
      setUpGame: () => Sk
    });
    var Xk = Ik(1234),
      Tk = Ik(149),
      ik = Ik(25),
      yk = Ik(36444),
      lk = Ik(36446),
      ak = Ik(1894),
      qk = Ik(36491);

    function Lk() {
      return !1 !== ak.e.get("canCustomiseChar")
    }
    let tk = !1;
    var Zk = Ik(1301),
      jk = Ik(1241),
      ek = Ik(243),
      wk = Ik(718),
      Hk = Ik(8895),
      Jk = Ik(8888);

    function xk() {
      (0, Hk.c)() || (0, Jk.d)().catch((kk => {
        console.warn("[bloxd-wasm-client] the play chunk did not load ahead of a join: the join loads it itself", kk)
      }))
    }
    var Pk = Ik(3378),
      Kk = Ik(1690);
    var Qk = Ik(36500),
      sk = Ik(37047);

    function Vk() {
      return Ik.e(216).then((() => Ik(41281)))
    }

    function zk() {
      return Ik.e(291).then((() => Ik(41287)))
    }

    function Sk() {
      return (0, Jk.h)()
    }
    tk || (tk = !0, document.addEventListener("keydown", (kk => {
        (0, qk.e)(kk, Lk)
      }))),
      function(kk) {
        var Fk;
        return !0 !== (null === kk || void 0 === kk ? void 0 : kk.saveData) && !/2g$/.test(null !== (Fk = null === kk || void 0 === kk ? void 0 : kk.effectiveType) && void 0 !== Fk ? Fk : "")
      }(navigator.connection) && (0, wk.b)((() => {
        (0, Hk.c)() || Promise.all([Ik.e(77), Ik.e(89), Ik.e(211), Ik.e(210), Ik.e(134), Ik.e(139), Ik.e(58)]).then((() => Ik(41063))).then((async kk => {
          (0, Hk.c)() || (await kk.startLoadAheadOfJoin({
            joinStarted: Hk.c,
            language: jk.d.get().getCurrentLanguageCode()
          }), (0, ek.b)(xk))
        }), (kk => {
          console.warn("[bloxd-wasm-client] the loads ahead of a join did not start: the join loads the client itself", kk)
        }))
      }));
    const vk = ik.d.get("router");
    null === vk ? console.warn("[bloxd-wasm-client] no router as the matchmaking chunk loads: the join's loads start with the join") : function kk(Fk) {
      if ((0, Kk.e)(Fk.state.location.pathname)) return void(0, Jk.f)().catch((() => {}));
      const Ik = Fk.subscribe((Xk => {
        (0, Kk.e)(Xk.location.pathname) && (Ik(), (0, Pk.e)().then((() => {
          kk(Fk)
        })))
      }))
    }(vk), (0, yk.d)();
    const Ek = (0, lk.c)((async function(kk, Fk) {
      let {
        place: Ik,
        userContext: ik,
        direct: yk,
        rematch: lk
      } = kk;
      const ak = yk ? 1 / 0 : performance.now();
      let qk;
      try {
        qk = await (0, Jk.f)()
      } catch (Lk) {
        return console.error("The wasm client did not load:", Lk), (0, Zk.s)({
          websocketUrl: null
        }), Xk.b.errorWithCode(String(Lk), Tk.j.CONNECT_TO_GAME_SERVER, {
          error: Lk,
          severity: Fk.aborted ? "low" : "medium",
          iI: Fk.aborted
        })
      }
      return qk.playWasmGame({
        userContext: ik,
        place: Ik,
        matchedAt: ak,
        rematch: lk
      }, Fk)
    }));

    function Ok() {
      return (0, Jk.f)().catch((() => {})), Ek(...arguments)
    }
  },
  8888: (kk, Fk, Ik) => {
    Ik.d(Fk, {
      d: () => jk,
      f: () => Zk,
      h: () => ek
    });
    var Xk = Ik(3089),
      Tk = Ik(2213),
      ik = Ik(2059),
      yk = Ik(4628),
      lk = Ik(3442),
      ak = Ik(8895);
    let qk = null;

    function Lk() {
      return Promise.all([Ik.e(74), Ik.e(77), Ik.e(89), Ik.e(211), Ik.e(76), Ik.e(210), Ik.e(134), Ik.e(196), Ik.e(139), Ik.e(87), Ik.e(218), Ik.e(63)]).then((() => Ik(40682)))
    }

    function tk() {
      Promise.all([Ik.e(72), Ik.e(75), Ik.e(74), Ik.e(73), Ik.e(89), Ik.e(86), Ik.e(269), Ik.e(189), Ik.e(223), Ik.e(247), Ik.e(218), Ik.e(46)]).then((() => Ik(41011))).catch((() => {}))
    }

    function Zk() {
      return yk.d.cancelDownloadForJoin(), (0, lk.d)(), (0, Tk.c)(), (0, ak.e)(), (0, ik.k)(), tk(), Promise.all([Ik.e(77), Ik.e(89), Ik.e(211), Ik.e(210), Ik.e(134), Ik.e(139), Ik.e(58)]).then((() => Ik(41063))).then((kk => {
        let {
          startJoinLoad: Fk
        } = kk;
        Fk()
      }), (() => {})), qk ??= Lk().then((kk => (kk.startWasmPlay(), kk.followPageUiPack((kk => {
        Xk.b.showGamePack(kk)
      })), kk)), (kk => {
        throw qk = null, kk
      })), qk
    }

    function jk() {
      return tk(), Ik.e(271).then((() => Ik(41067))).catch((() => {})), Lk().then((() => {}))
    }

    function ek() {
      return Lk().then((kk => {
        kk.startWasmPreviews(), kk.prefetchWasmPreviews()
      }))
    }
  },
  36879: (kk, Fk, Ik) => {
    function Xk(kk) {
      return "fetch" === kk || "timeout" === kk || "integrity" === kk ? "download" : "browser"
    }
    Ik.d(Fk, {
      d: () => Tk,
      f: () => yk,
      i: () => ak,
      j: () => lk,
      l: () => Xk,
      p: () => ik
    });
    const Tk = "https://discord.gg/playbloxd";

    function ik(kk) {
      return "download" === kk ? {
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

    function yk(kk, Fk) {
      return {
        icon: "face-dizzy",
        title: "wasmScreens:crashTitle",
        help: Fk ? "wasmScreens:crashHelp" : "wasmScreens:crashHelpNoDiscord",
        helpValues: {
          code: kk.code
        },
        discordLink: Fk,
        confirm: "general:reload",
        cancel: "general:back"
      }
    }

    function lk() {
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

    function ak(kk, Fk, Ik) {
      return {
        icon: "wifi",
        title: "wasmScreens:disconnectedTitle",
        help: Ik ? "wasmScreens:reconnectingHelp" : "wasmScreens:disconnectedHelp",
        helpValues: {
          reason: kk.reason
        },
        discordLink: null === kk.name,
        confirm: Fk ? "general:reconnect" : kk.requiresRefresh ? "general:reload" : "general:ok",
        cancel: null
      }
    }
  },
  9278: (kk, Fk, Ik) => {
    Ik.d(Fk, {
      c: () => Tk,
      g: () => ik
    });
    var Xk = Ik(9237);
    const Tk = "Air",
      ik = Object.freeze(new Xk.g(Tk, 0, "", null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null))
  }
};
Object.freeze(modules);
for (const kk in modules) Object.freeze(modules[kk]);