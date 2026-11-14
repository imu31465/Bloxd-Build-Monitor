/*! For license information please see 98edle.wasmMatchmaking.302a0901.chunk.js.LICENSE.txt */
export const id = 51;
export const ids = [51];
export const modules = {
  34687: (WW, RW, MW) => {
    MW.r(RW), MW.d(RW, {
      InGameUi: () => gR.d,
      LobbyLeaderboard: () => iR.d,
      loadCharacterCustomisationUI: () => YW,
      loadCharacterPreview: () => JW,
      matchmakeAndPlay: () => oW,
      setUpGame: () => PW
    });
    var wW = MW(1072),
      CW = MW(156),
      zR = MW(34693),
      AW = MW(34699),
      bR = MW(1558),
      yR = MW(34709);

    function NW() {
      return !1 !== bR.d.get("canCustomiseChar")
    }
    let eW = !1;
    var BW = MW(1148),
      tR = MW(2675),
      TW = MW(7772);
    var gR = MW(34720),
      iR = MW(35180);

    function YW() {
      return Promise.all([MW.e(259), MW.e(367)]).then((() => MW(38657)))
    }

    function JW() {
      return MW.e(260).then((() => MW(38662)))
    }

    function PW() {
      return (0, TW.i)()
    }
    eW || (eW = !0, document.addEventListener("keydown", (WW => {
        (0, yR.c)(WW, NW)
      }))),
      function(WW) {
        var RW;
        return !0 !== (null === WW || void 0 === WW ? void 0 : WW.saveData) && !/2g$/.test(null !== (RW = null === WW || void 0 === WW ? void 0 : WW.effectiveType) && void 0 !== RW ? RW : "")
      }(navigator.connection) && (0, tR.b)((() => {
        (0, TW.l)() || Promise.all([MW.e(120), MW.e(119), MW.e(47)]).then((() => MW(38270))).then((WW => {
          let {
            prefetchWasmClient: RW
          } = WW;
          return RW(TW.l)
        }), (WW => {
          console.warn("[bloxd-wasm-client] the prefetch did not load: the join downloads the client itself", WW)
        }))
      })), (0, zR.e)();
    const IW = (0, AW.c)((async function(WW, RW) {
      let {
        place: MW,
        userContext: zR,
        direct: AW,
        rematch: bR
      } = WW;
      const yR = AW ? 1 / 0 : performance.now();
      let NW;
      try {
        NW = await (0, TW.e)()
      } catch (eW) {
        return console.error("The wasm client did not load:", eW), (0, BW.n)({
          websocketUrl: null
        }), wW.e.errorWithCode(String(eW), CW.k.CONNECT_TO_GAME_SERVER, {
          error: eW,
          severity: RW.aborted ? "low" : "medium",
          JA: RW.aborted
        })
      }
      return NW.playWasmGame({
        userContext: zR,
        place: MW,
        matchedAt: yR,
        rematch: bR
      }, RW)
    }));

    function oW() {
      return (0, TW.e)().catch((() => {})), IW(...arguments)
    }
  },
  7772: (WW, RW, MW) => {
    MW.d(RW, {
      e: () => AW,
      i: () => yR,
      l: () => bR
    });
    var wW = MW(2289);
    let CW = null,
      zR = !1;

    function AW() {
      return zR = !0, Promise.all([MW.e(59), MW.e(62), MW.e(60), MW.e(61), MW.e(72), MW.e(71), MW.e(217), MW.e(218), MW.e(40)]).then((() => MW(38126))).catch((() => {})), Promise.all([MW.e(120), MW.e(119), MW.e(47)]).then((() => MW(38270))).then((WW => {
        let {
          startJoinLoad: RW
        } = WW;
        RW()
      }), (() => {})), CW ??= Promise.all([MW.e(61), MW.e(120), MW.e(72), MW.e(173), MW.e(119), MW.e(241), MW.e(218), MW.e(115), MW.e(52)]).then((() => MW(38350))).then((WW => (WW.startWasmPlay(), WW.followPageUiPack((WW => {
        wW.d.showGamePack(WW)
      })), WW)), (WW => {
        throw CW = null, WW
      })), CW
    }

    function bR() {
      return zR
    }

    function yR() {
      return Promise.all([MW.e(61), MW.e(120), MW.e(72), MW.e(173), MW.e(119), MW.e(241), MW.e(218), MW.e(115), MW.e(52)]).then((() => MW(38350))).then((WW => {
        WW.startWasmPreviews(), WW.prefetchWasmPreviews()
      }))
    }
  },
  34930: WW => {
    WW.exports = function WW(RW, MW) {
      if (RW === MW) return !0;
      if (RW && MW && "object" == typeof RW && "object" == typeof MW) {
        if (RW.constructor !== MW.constructor) return !1;
        var wW, CW, zR;
        if (Array.isArray(RW)) {
          if ((wW = RW.length) != MW.length) return !1;
          for (CW = wW; 0 !== CW--;)
            if (!WW(RW[CW], MW[CW])) return !1;
          return !0
        }
        if (RW.constructor === RegExp) return RW.source === MW.source && RW.flags === MW.flags;
        if (RW.valueOf !== Object.prototype.valueOf) return RW.valueOf() === MW.valueOf();
        if (RW.toString !== Object.prototype.toString) return RW.toString() === MW.toString();
        if ((wW = (zR = Object.keys(RW)).length) !== Object.keys(MW).length) return !1;
        for (CW = wW; 0 !== CW--;)
          if (!Object.prototype.hasOwnProperty.call(MW, zR[CW])) return !1;
        for (CW = wW; 0 !== CW--;) {
          var AW = zR[CW];
          if (!WW(RW[AW], MW[AW])) return !1
        }
        return !0
      }
      return RW !== RW && MW !== MW
    }
  },
  34755: (WW, RW) => {
    function MW(WW) {
      if (WW && "object" === typeof WW) {
        var RW = WW.which || WW.keyCode || WW.charCode;
        RW && (WW = RW)
      }
      if ("number" === typeof WW) return AW[WW];
      var MW, zR = String(WW);
      return (MW = wW[zR.toLowerCase()]) ? MW : (MW = CW[zR.toLowerCase()]) || (1 === zR.length ? zR.charCodeAt(0) : void 0)
    }
    MW.isEventKey = function(WW, RW) {
      if (WW && "object" === typeof WW) {
        var MW = WW.which || WW.keyCode || WW.charCode;
        if (null === MW || void 0 === MW) return !1;
        if ("string" === typeof RW) {
          var zR;
          if (zR = wW[RW.toLowerCase()]) return zR === MW;
          if (zR = CW[RW.toLowerCase()]) return zR === MW
        } else if ("number" === typeof RW) return RW === MW;
        return !1
      }
    };
    var wW = (RW = WW.exports = MW).code = RW.codes = {
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
      CW = RW.aliases = {
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
    for (zR = 97; zR < 123; zR++) wW[String.fromCharCode(zR)] = zR - 32;
    for (var zR = 48; zR < 58; zR++) wW[zR - 48] = zR;
    for (zR = 1; zR < 13; zR++) wW["f" + zR] = zR + 111;
    for (zR = 0; zR < 10; zR++) wW["numpad " + zR] = zR + 96;
    var AW = RW.names = RW.title = {};
    for (zR in wW) AW[wW[zR]] = zR;
    for (var bR in CW) wW[bR] = CW[bR]
  },
  34948: (WW, RW, MW) => {
    MW.d(RW, {
      b: () => AW
    });
    var wW = MW(75);
    const CW = wW.useLayoutEffect;
    const zR = function(WW) {
      var RW = (0, wW.useRef)(WW);
      return CW((function() {
        RW.current = WW
      })), RW
    };
    var AW = function(WW) {
      var RW = zR(WW);
      (0, wW.useEffect)((function() {
        var WW = function(WW) {
          var MW;
          if (null != RW.current && (MW = RW.current(WW)), WW.defaultPrevented && (WW.returnValue = ""), "string" === typeof MW) return WW.returnValue = MW, MW
        };
        return window.addEventListener("beforeunload", WW),
          function() {
            window.removeEventListener("beforeunload", WW)
          }
      }), [])
    }
  },
  34799: WW => {
    var RW, MW = "undefined" !== typeof window ? window.navigator.userAgent : "",
      wW = /OS X/.test(MW),
      CW = /Opera/.test(MW),
      zR = !/like Gecko/.test(MW) && !CW,
      AW = WW.exports = {
        0: wW ? "<menu>" : "<UNK>",
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
        93: wW ? "<meta>" : "<menu>",
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
        173: wW && zR ? "-" : "<volume-mute>",
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
        231: CW ? "`" : "<unicode>",
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
    for (RW = 58; RW < 65; ++RW) AW[RW] = String.fromCharCode(RW);
    for (RW = 48; RW < 58; ++RW) AW[RW] = RW - 48 + "";
    for (RW = 65; RW < 91; ++RW) AW[RW] = String.fromCharCode(RW);
    for (RW = 96; RW < 106; ++RW) AW[RW] = "<num-" + (RW - 96) + ">";
    for (RW = 112; RW < 136; ++RW) AW[RW] = "F" + (RW - 111)
  }
};
Object.freeze(modules);
for (const WW in modules) Object.freeze(modules[WW]);