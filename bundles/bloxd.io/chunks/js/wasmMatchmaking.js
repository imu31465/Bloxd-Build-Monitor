/*! For license information please see mpd96o.wasmMatchmaking.e8634fc5.chunk.js.LICENSE.txt */
export const id = 62;
export const ids = [62];
export const modules = {
  36623: (mm, Tm) => {
    function fm(mm) {
      if (mm && "object" === typeof mm) {
        var Tm = mm.which || mm.keyCode || mm.charCode;
        Tm && (mm = Tm)
      }
      if ("number" === typeof mm) return xm[mm];
      var fm, am = String(mm);
      return (fm = hm[am.toLowerCase()]) ? fm : (fm = Am[am.toLowerCase()]) || (1 === am.length ? am.charCodeAt(0) : void 0)
    }
    fm.isEventKey = function(mm, Tm) {
      if (mm && "object" === typeof mm) {
        var fm = mm.which || mm.keyCode || mm.charCode;
        if (null === fm || void 0 === fm) return !1;
        if ("string" === typeof Tm) {
          var am;
          if (am = hm[Tm.toLowerCase()]) return am === fm;
          if (am = Am[Tm.toLowerCase()]) return am === fm
        } else if ("number" === typeof Tm) return Tm === fm;
        return !1
      }
    };
    var hm = (Tm = mm.exports = fm).code = Tm.codes = {
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
      Am = Tm.aliases = {
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
    for (am = 97; am < 123; am++) hm[String.fromCharCode(am)] = am - 32;
    for (var am = 48; am < 58; am++) hm[am - 48] = am;
    for (am = 1; am < 13; am++) hm["f" + am] = am + 111;
    for (am = 0; am < 10; am++) hm["numpad " + am] = am + 96;
    var xm = Tm.names = Tm.title = {};
    for (am in hm) xm[hm[am]] = am;
    for (var wm in Am) hm[wm] = Am[wm]
  },
  36786: (mm, Tm, fm) => {
    fm.d(Tm, {
      b: () => xm
    });
    var hm = fm(59);
    const Am = hm.useLayoutEffect;
    const am = function(mm) {
      var Tm = (0, hm.useRef)(mm);
      return Am((function() {
        Tm.current = mm
      })), Tm
    };
    var xm = function(mm) {
      var Tm = am(mm);
      (0, hm.useEffect)((function() {
        var mm = function(mm) {
          var fm;
          if (null != Tm.current && (fm = Tm.current(mm)), mm.defaultPrevented && (mm.returnValue = ""), "string" === typeof fm) return mm.returnValue = fm, fm
        };
        return window.addEventListener("beforeunload", mm),
          function() {
            window.removeEventListener("beforeunload", mm)
          }
      }), [])
    }
  },
  36666: mm => {
    var Tm, fm = "undefined" !== typeof window ? window.navigator.userAgent : "",
      hm = /OS X/.test(fm),
      Am = /Opera/.test(fm),
      am = !/like Gecko/.test(fm) && !Am,
      xm = mm.exports = {
        0: hm ? "<menu>" : "<UNK>",
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
        93: hm ? "<meta>" : "<menu>",
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
        173: hm && am ? "-" : "<volume-mute>",
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
        231: Am ? "`" : "<unicode>",
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
    for (Tm = 58; Tm < 65; ++Tm) xm[Tm] = String.fromCharCode(Tm);
    for (Tm = 48; Tm < 58; ++Tm) xm[Tm] = Tm - 48 + "";
    for (Tm = 65; Tm < 91; ++Tm) xm[Tm] = String.fromCharCode(Tm);
    for (Tm = 96; Tm < 106; ++Tm) xm[Tm] = "<num-" + (Tm - 96) + ">";
    for (Tm = 112; Tm < 136; ++Tm) xm[Tm] = "F" + (Tm - 111)
  },
  8866: (mm, Tm, fm) => {
    fm.d(Tm, {
      d: () => am,
      g: () => Am
    });
    let hm = !1;

    function Am() {
      hm = !0
    }

    function am() {
      return hm
    }
  },
  36522: (mm, Tm, fm) => {
    fm.r(Tm), fm.d(Tm, {
      InGameUi: () => Qm.d,
      LobbyLeaderboard: () => nm.e,
      loadCharacterCustomisationUI: () => Jm,
      loadCharacterPreview: () => cm,
      matchmakeAndPlay: () => bm,
      setUpGame: () => zm
    });
    var hm = fm(1254),
      Am = fm(168),
      am = fm(23),
      xm = fm(36531),
      wm = fm(36536),
      Dm = fm(1928),
      im = fm(36578);

    function Rm() {
      return !1 !== Dm.b.get("canCustomiseChar")
    }
    let pm = !1;
    var Em = fm(1321),
      om = fm(1259),
      Om = fm(269),
      Ym = fm(736),
      qm = fm(8866),
      jm = fm(8858);

    function Vm() {
      (0, qm.d)() || (0, jm.b)().catch((mm => {
        console.warn("[bloxd-wasm-client] the play chunk did not load ahead of a join: the join loads it itself", mm)
      }))
    }
    var Im = fm(3443),
      Km = fm(1739);
    var Qm = fm(36584),
      nm = fm(37106);

    function Jm() {
      return fm.e(216).then((() => fm(41331)))
    }

    function cm() {
      return fm.e(291).then((() => fm(41339)))
    }

    function zm() {
      return (0, jm.e)()
    }
    pm || (pm = !0, document.addEventListener("keydown", (mm => {
        (0, im.b)(mm, Rm)
      }))),
      function(mm) {
        var Tm;
        return !0 !== (null === mm || void 0 === mm ? void 0 : mm.saveData) && !/2g$/.test(null !== (Tm = null === mm || void 0 === mm ? void 0 : mm.effectiveType) && void 0 !== Tm ? Tm : "")
      }(navigator.connection) && (0, Ym.b)((() => {
        (0, qm.d)() || Promise.all([fm.e(77), fm.e(89), fm.e(211), fm.e(210), fm.e(134), fm.e(139), fm.e(58)]).then((() => fm(41116))).then((async mm => {
          (0, qm.d)() || (await mm.startLoadAheadOfJoin({
            joinStarted: qm.d,
            language: om.e.get().getCurrentLanguageCode()
          }), (0, Om.e)(Vm))
        }), (mm => {
          console.warn("[bloxd-wasm-client] the loads ahead of a join did not start: the join loads the client itself", mm)
        }))
      }));
    const Zm = am.c.get("router");
    null === Zm ? console.warn("[bloxd-wasm-client] no router as the matchmaking chunk loads: the join's loads start with the join") : function mm(Tm) {
      if ((0, Km.b)(Tm.state.location.pathname)) return void(0, jm.c)().catch((() => {}));
      const fm = Tm.subscribe((hm => {
        (0, Km.b)(hm.location.pathname) && (fm(), (0, Im.d)().then((() => {
          mm(Tm)
        })))
      }))
    }(Zm), (0, xm.c)();
    const km = (0, wm.d)((async function(mm, Tm) {
      let {
        place: fm,
        userContext: am,
        direct: xm,
        rematch: wm
      } = mm;
      const Dm = xm ? 1 / 0 : performance.now();
      let im;
      try {
        im = await (0, jm.c)()
      } catch (Rm) {
        return console.error("The wasm client did not load:", Rm), (0, Em.r)({
          websocketUrl: null
        }), hm.e.errorWithCode(String(Rm), Am.k.CONNECT_TO_GAME_SERVER, {
          error: Rm,
          severity: Tm.aborted ? "low" : "medium",
          Af: Tm.aborted
        })
      }
      return im.playWasmGame({
        userContext: am,
        place: fm,
        matchedAt: Dm,
        rematch: wm
      }, Tm)
    }));

    function bm() {
      return (0, jm.c)().catch((() => {})), km(...arguments)
    }
  },
  8858: (mm, Tm, fm) => {
    fm.d(Tm, {
      b: () => om,
      c: () => Em,
      e: () => Om
    });
    var hm = fm(3148),
      Am = fm(2253),
      am = fm(2114),
      xm = fm(4581),
      wm = fm(3505),
      Dm = fm(8866);
    let im = null;

    function Rm() {
      return Promise.all([fm.e(74), fm.e(77), fm.e(89), fm.e(211), fm.e(76), fm.e(210), fm.e(134), fm.e(196), fm.e(139), fm.e(87), fm.e(218), fm.e(63)]).then((() => fm(40755)))
    }

    function pm() {
      Promise.all([fm.e(72), fm.e(75), fm.e(74), fm.e(73), fm.e(89), fm.e(86), fm.e(269), fm.e(189), fm.e(223), fm.e(247), fm.e(218), fm.e(46)]).then((() => fm(41069))).catch((() => {}))
    }

    function Em() {
      return xm.c.cancelDownloadForJoin(), (0, wm.e)(), (0, Am.i)(), (0, Dm.g)(), (0, am.h)(), pm(), Promise.all([fm.e(77), fm.e(89), fm.e(211), fm.e(210), fm.e(134), fm.e(139), fm.e(58)]).then((() => fm(41116))).then((mm => {
        let {
          startJoinLoad: Tm
        } = mm;
        Tm()
      }), (() => {})), im ??= Rm().then((mm => (mm.startWasmPlay(), mm.followPageUiPack((mm => {
        hm.b.showGamePack(mm)
      })), mm)), (mm => {
        throw im = null, mm
      })), im
    }

    function om() {
      return pm(), fm.e(271).then((() => fm(41120))).catch((() => {})), Rm().then((() => {}))
    }

    function Om() {
      return Rm().then((mm => {
        mm.startWasmPreviews(), mm.prefetchWasmPreviews()
      }))
    }
  },
  36943: (mm, Tm, fm) => {
    function hm(mm) {
      return "fetch" === mm || "timeout" === mm || "integrity" === mm ? "download" : "browser"
    }
    fm.d(Tm, {
      c: () => Am,
      e: () => xm,
      h: () => Dm,
      j: () => wm,
      m: () => hm,
      q: () => am
    });
    const Am = "https://discord.gg/playbloxd";

    function am(mm) {
      return "download" === mm ? {
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

    function xm(mm, Tm) {
      return {
        icon: "face-dizzy",
        title: "wasmScreens:crashTitle",
        help: Tm ? "wasmScreens:crashHelp" : "wasmScreens:crashHelpNoDiscord",
        helpValues: {
          code: mm.code
        },
        discordLink: Tm,
        confirm: "general:reload",
        cancel: "general:back"
      }
    }

    function wm() {
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

    function Dm(mm, Tm, fm) {
      return {
        icon: "wifi",
        title: "wasmScreens:disconnectedTitle",
        help: fm ? "wasmScreens:reconnectingHelp" : "wasmScreens:disconnectedHelp",
        helpValues: {
          reason: mm.reason
        },
        discordLink: null === mm.name,
        confirm: Tm ? "general:reconnect" : mm.requiresRefresh ? "general:reload" : "general:ok",
        cancel: null
      }
    }
  },
  9240: (mm, Tm, fm) => {
    fm.d(Tm, {
      c: () => Am,
      e: () => am
    });
    var hm = fm(9184);
    const Am = "Air",
      am = Object.freeze(new hm.g(Am, 0, "", null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null))
  }
};
Object.freeze(modules);
for (const mm in modules) Object.freeze(modules[mm]);