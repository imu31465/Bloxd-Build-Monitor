/*! For license information please see l9xvfg.wasmMatchmaking.c0dbac6c.chunk.js.LICENSE.txt */
export const id = 55;
export const ids = [55];
export const modules = {
  35692: BB => {
    BB.exports = function BB(TB, dB) {
      if (TB === dB) return !0;
      if (TB && dB && "object" == typeof TB && "object" == typeof dB) {
        if (TB.constructor !== dB.constructor) return !1;
        var VB, yB, pB;
        if (Array.isArray(TB)) {
          if ((VB = TB.length) != dB.length) return !1;
          for (yB = VB; 0 !== yB--;)
            if (!BB(TB[yB], dB[yB])) return !1;
          return !0
        }
        if (TB.constructor === RegExp) return TB.source === dB.source && TB.flags === dB.flags;
        if (TB.valueOf !== Object.prototype.valueOf) return TB.valueOf() === dB.valueOf();
        if (TB.toString !== Object.prototype.toString) return TB.toString() === dB.toString();
        if ((VB = (pB = Object.keys(TB)).length) !== Object.keys(dB).length) return !1;
        for (yB = VB; 0 !== yB--;)
          if (!Object.prototype.hasOwnProperty.call(dB, pB[yB])) return !1;
        for (yB = VB; 0 !== yB--;) {
          var lB = pB[yB];
          if (!BB(TB[lB], dB[lB])) return !1
        }
        return !0
      }
      return TB !== TB && dB !== dB
    }
  },
  35542: (BB, TB) => {
    function dB(BB) {
      if (BB && "object" === typeof BB) {
        var TB = BB.which || BB.keyCode || BB.charCode;
        TB && (BB = TB)
      }
      if ("number" === typeof BB) return lB[BB];
      var dB, pB = String(BB);
      return (dB = VB[pB.toLowerCase()]) ? dB : (dB = yB[pB.toLowerCase()]) || (1 === pB.length ? pB.charCodeAt(0) : void 0)
    }
    dB.isEventKey = function(BB, TB) {
      if (BB && "object" === typeof BB) {
        var dB = BB.which || BB.keyCode || BB.charCode;
        if (null === dB || void 0 === dB) return !1;
        if ("string" === typeof TB) {
          var pB;
          if (pB = VB[TB.toLowerCase()]) return pB === dB;
          if (pB = yB[TB.toLowerCase()]) return pB === dB
        } else if ("number" === typeof TB) return TB === dB;
        return !1
      }
    };
    var VB = (TB = BB.exports = dB).code = TB.codes = {
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
      yB = TB.aliases = {
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
    for (pB = 97; pB < 123; pB++) VB[String.fromCharCode(pB)] = pB - 32;
    for (var pB = 48; pB < 58; pB++) VB[pB - 48] = pB;
    for (pB = 1; pB < 13; pB++) VB["f" + pB] = pB + 111;
    for (pB = 0; pB < 10; pB++) VB["numpad " + pB] = pB + 96;
    var lB = TB.names = TB.title = {};
    for (pB in VB) lB[VB[pB]] = pB;
    for (var JB in yB) VB[JB] = yB[JB]
  },
  35713: (BB, TB, dB) => {
    dB.d(TB, {
      b: () => lB
    });
    var VB = dB(62);
    const yB = VB.useLayoutEffect;
    const pB = function(BB) {
      var TB = (0, VB.useRef)(BB);
      return yB((function() {
        TB.current = BB
      })), TB
    };
    var lB = function(BB) {
      var TB = pB(BB);
      (0, VB.useEffect)((function() {
        var BB = function(BB) {
          var dB;
          if (null != TB.current && (dB = TB.current(BB)), BB.defaultPrevented && (BB.returnValue = ""), "string" === typeof dB) return BB.returnValue = dB, dB
        };
        return window.addEventListener("beforeunload", BB),
          function() {
            window.removeEventListener("beforeunload", BB)
          }
      }), [])
    }
  },
  35571: BB => {
    var TB, dB = "undefined" !== typeof window ? window.navigator.userAgent : "",
      VB = /OS X/.test(dB),
      yB = /Opera/.test(dB),
      pB = !/like Gecko/.test(dB) && !yB,
      lB = BB.exports = {
        0: VB ? "<menu>" : "<UNK>",
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
        93: VB ? "<meta>" : "<menu>",
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
        173: VB && pB ? "-" : "<volume-mute>",
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
        231: yB ? "`" : "<unicode>",
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
    for (TB = 58; TB < 65; ++TB) lB[TB] = String.fromCharCode(TB);
    for (TB = 48; TB < 58; ++TB) lB[TB] = TB - 48 + "";
    for (TB = 65; TB < 91; ++TB) lB[TB] = String.fromCharCode(TB);
    for (TB = 96; TB < 106; ++TB) lB[TB] = "<num-" + (TB - 96) + ">";
    for (TB = 112; TB < 136; ++TB) lB[TB] = "F" + (TB - 111)
  },
  5994: (BB, TB, dB) => {
    dB.d(TB, {
      b: () => yB,
      d: () => pB
    });
    var VB = dB(33);
    const yB = "shaderPack";
    async function pB() {
      var BB;
      let TB = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
      return null !== (BB = await VB.f.getItem(yB, TB)) && void 0 !== BB ? BB : null
    }
  },
  35399: (BB, TB, dB) => {
    dB.d(TB, {
      e: () => YB,
      g: () => gB
    });
    var VB = dB(1133),
      yB = dB(3073),
      pB = dB(586),
      lB = dB(8214);

    function JB(BB, TB) {
      let VB = !1;
      const pB = () => {
        VB = !0
      };
      if (! function(BB) {
          var TB;
          return !0 !== (null === BB || void 0 === BB ? void 0 : BB.saveData) && !/2g$/.test(null !== (TB = null === BB || void 0 === BB ? void 0 : BB.effectiveType) && void 0 !== TB ? TB : "")
        }(navigator.connection)) return pB;
      const JB = () => !VB && !(0, lB.i)();
      return (0, yB.b)((() => {
        JB() && Promise.all([dB.e(126), dB.e(81), dB.e(51)]).then((() => dB(39476))).then((BB => JB() ? TB(BB) : void 0), (TB => {
          console.warn(`[bloxd-wasm-client] ${BB} did not load: the join loads the client itself`, TB)
        }))
      })), pB
    }

    function YB() {
      JB("the prefetch", (BB => {
        let {
          prefetchWasmClient: TB
        } = BB;
        return TB({
          joinStarted: lB.i,
          language: VB.f.get().getCurrentLanguageCode()
        })
      }))
    }

    function gB() {
      return pB.p ? JB("the game page's early load", (BB => {
        let {
          startGamePageLoad: TB
        } = BB;
        return TB()
      })) : () => {}
    }
  },
  35457: (BB, TB, dB) => {
    dB.r(TB), dB.d(TB, {
      InGameUi: () => EB.b,
      LobbyLeaderboard: () => vB.c,
      loadCharacterCustomisationUI: () => mB,
      loadCharacterPreview: () => iB,
      matchmakeAndPlay: () => sB,
      setUpGame: () => NB
    });
    var VB = dB(1126),
      yB = dB(163),
      pB = dB(21),
      lB = dB(35466),
      JB = dB(35474),
      YB = dB(1708),
      gB = dB(35488);

    function oB() {
      return !1 !== YB.c.get("canCustomiseChar")
    }
    let kB = !1;
    var LB = dB(1209),
      OB = dB(35399),
      DB = dB(8214),
      uB = dB(3069),
      HB = dB(1638);
    var EB = dB(35500),
      vB = dB(35965);

    function mB() {
      return Promise.all([dB.e(269), dB.e(377)]).then((() => dB(39902)))
    }

    function iB() {
      return dB.e(270).then((() => dB(39911)))
    }

    function NB() {
      return (0, DB.g)()
    }
    kB || (kB = !0, document.addEventListener("keydown", (BB => {
      (0, gB.d)(BB, oB)
    }))), (0, OB.e)();
    const tB = pB.d.get("router");
    null === tB ? console.warn("[bloxd-wasm-client] no router as the matchmaking chunk loads: the join's loads start with the join") : function BB(TB) {
      if ((0, HB.d)(TB.state.location.pathname)) return void(0, DB.c)().catch((() => {}));
      const dB = TB.subscribe((VB => {
        (0, HB.d)(VB.location.pathname) && (dB(), (0, uB.d)().then((() => {
          BB(TB)
        })))
      }))
    }(tB), (0, lB.d)();
    const fB = (0, JB.e)((async function(BB, TB) {
      let {
        place: dB,
        userContext: pB,
        direct: lB,
        rematch: JB
      } = BB;
      const YB = lB ? 1 / 0 : performance.now();
      let gB;
      try {
        gB = await (0, DB.c)()
      } catch (oB) {
        return console.error("The wasm client did not load:", oB), (0, LB.r)({
          websocketUrl: null
        }), VB.d.errorWithCode(String(oB), yB.i.CONNECT_TO_GAME_SERVER, {
          error: oB,
          severity: TB.aborted ? "low" : "medium",
          IT: TB.aborted
        })
      }
      return gB.playWasmGame({
        userContext: pB,
        place: dB,
        matchedAt: YB,
        rematch: JB
      }, TB)
    }));

    function sB() {
      return (0, DB.c)().catch((() => {})), fB(...arguments)
    }
  },
  8214: (BB, TB, dB) => {
    dB.d(TB, {
      c: () => oB,
      g: () => LB,
      i: () => kB
    });
    var VB = dB(2614),
      yB = dB(2034),
      pB = dB(2664),
      lB = dB(4051),
      JB = dB(2998);
    let YB = null,
      gB = !1;

    function oB() {
      return lB.e.cancelDownloadForJoin(), (0, JB.d)(), (0, yB.i)(), gB = !0, (0, pB.h)(), Promise.all([dB.e(64), dB.e(67), dB.e(66), dB.e(65), dB.e(77), dB.e(228), dB.e(202), dB.e(226), dB.e(197), dB.e(43)]).then((() => dB(39407))).catch((() => {})), Promise.all([dB.e(126), dB.e(81), dB.e(51)]).then((() => dB(39476))).then((BB => {
        let {
          startJoinLoad: TB
        } = BB;
        TB()
      }), (() => {})), YB ??= Promise.all([dB.e(66), dB.e(126), dB.e(122), dB.e(251), dB.e(177), dB.e(81), dB.e(80), dB.e(79), dB.e(197), dB.e(56)]).then((() => dB(39565))).then((BB => (BB.startWasmPlay(), BB.followPageUiPack((BB => {
        VB.b.showGamePack(BB)
      })), BB)), (BB => {
        throw YB = null, BB
      })), YB
    }

    function kB() {
      return gB
    }

    function LB() {
      return Promise.all([dB.e(66), dB.e(126), dB.e(122), dB.e(251), dB.e(177), dB.e(81), dB.e(80), dB.e(79), dB.e(197), dB.e(56)]).then((() => dB(39565))).then((BB => {
        BB.startWasmPreviews(), BB.prefetchWasmPreviews()
      }))
    }
  },
  35894: (BB, TB, dB) => {
    function VB(BB) {
      return BB.includes("Leaf Bed")
    }

    function yB(BB) {
      return / Bed(?: Head)?(?:\||$)/.test(BB) && !VB(BB)
    }

    function pB(BB) {
      return BB.includes(" Strongbed")
    }

    function lB(BB) {
      return VB(BB) || yB(BB) || pB(BB)
    }
    dB.d(TB, {
      e: () => lB,
      h: () => VB,
      l: () => pB,
      p: () => yB
    })
  },
  35886: (BB, TB, dB) => {
    dB.d(TB, {
      e: () => gB
    });
    var VB = dB(35894),
      yB = dB(8653);
    const pB = [],
      lB = [],
      JB = [],
      YB = [];
    for (const oB of Object.keys(yB.n))(0, VB.h)(oB) ? pB.push(oB) : (0, VB.p)(oB) && lB.push(oB), (0, VB.l)(oB) && JB.push(oB), (oB.includes(" Bed Head") || oB.includes(" Strongbed Head")) && YB.push(oB);
    const gB = {
      leafBeds: pB,
      woolBeds: lB,
      strongBeds: JB,
      beds: [...pB, ...lB, ...JB],
      bedHeads: YB,
      blockRemoveActionRoots: ["Chest", "Loot Chest", "Iron Chest", "Mailbox", "Bookshelf", "Empty Bookshelf"]
    }
  }
};
Object.freeze(modules);
for (const BB in modules) Object.freeze(modules[BB]);