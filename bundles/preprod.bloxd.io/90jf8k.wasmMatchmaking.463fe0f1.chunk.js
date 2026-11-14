/*! For license information please see 90jf8k.wasmMatchmaking.463fe0f1.chunk.js.LICENSE.txt */
export const id = 51;
export const ids = [51];
export const modules = {
  34973: (FF, WF, SF) => {
    SF.r(WF), SF.d(WF, {
      InGameUi: () => QF.c,
      LobbyLeaderboard: () => rW.c,
      loadCharacterCustomisationUI: () => gW,
      loadCharacterPreview: () => tW,
      matchmakeAndPlay: () => kW,
      setUpGame: () => TF
    });
    var CF = SF(1110),
      AF = SF(138),
      uF = SF(34976),
      hF = SF(34984),
      bW = SF(1594),
      dF = SF(35e3);

    function PF() {
      return !1 !== bW.d.get("canCustomiseChar")
    }
    let RF = !1;
    var iW = SF(1175),
      eF = SF(2765),
      EF = SF(7826);
    var QF = SF(35012),
      rW = SF(35481);

    function gW() {
      return Promise.all([SF.e(259), SF.e(367)]).then((() => SF(39026)))
    }

    function tW() {
      return SF.e(260).then((() => SF(39032)))
    }

    function TF() {
      return (0, EF.d)()
    }
    RF || (RF = !0, document.addEventListener("keydown", (FF => {
        (0, dF.c)(FF, PF)
      }))),
      function(FF) {
        var WF;
        return !0 !== (null === FF || void 0 === FF ? void 0 : FF.saveData) && !/2g$/.test(null !== (WF = null === FF || void 0 === FF ? void 0 : FF.effectiveType) && void 0 !== WF ? WF : "")
      }(navigator.connection) && (0, eF.c)((() => {
        (0, EF.h)() || Promise.all([SF.e(120), SF.e(119), SF.e(47)]).then((() => SF(38659))).then((FF => {
          let {
            prefetchWasmClient: WF
          } = FF;
          return WF(EF.h)
        }), (FF => {
          console.warn("[bloxd-wasm-client] the prefetch did not load: the join downloads the client itself", FF)
        }))
      })), (0, uF.b)();
    const aW = (0, hF.c)((async function(FF, WF) {
      let {
        place: SF,
        userContext: uF,
        direct: hF,
        rematch: bW
      } = FF;
      const dF = hF ? 1 / 0 : performance.now();
      let PF;
      try {
        PF = await (0, EF.c)()
      } catch (RF) {
        return console.error("The wasm client did not load:", RF), (0, iW.w)({
          websocketUrl: null
        }), CF.d.errorWithCode(String(RF), AF.f.CONNECT_TO_GAME_SERVER, {
          error: RF,
          severity: WF.aborted ? "low" : "medium",
          Qh: WF.aborted
        })
      }
      return PF.playWasmGame({
        userContext: uF,
        place: SF,
        matchedAt: dF,
        rematch: bW
      }, WF)
    }));

    function kW() {
      return (0, EF.c)().catch((() => {})), aW(...arguments)
    }
  },
  7826: (FF, WF, SF) => {
    SF.d(WF, {
      c: () => hF,
      d: () => dF,
      h: () => bW
    });
    var CF = SF(2344);
    let AF = null,
      uF = !1;

    function hF() {
      return uF = !0, Promise.all([SF.e(59), SF.e(62), SF.e(60), SF.e(61), SF.e(72), SF.e(71), SF.e(217), SF.e(218), SF.e(40)]).then((() => SF(38511))).catch((() => {})), Promise.all([SF.e(120), SF.e(119), SF.e(47)]).then((() => SF(38659))).then((FF => {
        let {
          startJoinLoad: WF
        } = FF;
        WF()
      }), (() => {})), AF ??= Promise.all([SF.e(61), SF.e(120), SF.e(72), SF.e(173), SF.e(119), SF.e(241), SF.e(218), SF.e(115), SF.e(52)]).then((() => SF(38723))).then((FF => (FF.startWasmPlay(), FF.followPageUiPack((FF => {
        CF.e.showGamePack(FF)
      })), FF)), (FF => {
        throw AF = null, FF
      })), AF
    }

    function bW() {
      return uF
    }

    function dF() {
      return Promise.all([SF.e(61), SF.e(120), SF.e(72), SF.e(173), SF.e(119), SF.e(241), SF.e(218), SF.e(115), SF.e(52)]).then((() => SF(38723))).then((FF => {
        FF.startWasmPreviews(), FF.prefetchWasmPreviews()
      }))
    }
  },
  35213: FF => {
    FF.exports = function FF(WF, SF) {
      if (WF === SF) return !0;
      if (WF && SF && "object" == typeof WF && "object" == typeof SF) {
        if (WF.constructor !== SF.constructor) return !1;
        var CF, AF, uF;
        if (Array.isArray(WF)) {
          if ((CF = WF.length) != SF.length) return !1;
          for (AF = CF; 0 !== AF--;)
            if (!FF(WF[AF], SF[AF])) return !1;
          return !0
        }
        if (WF.constructor === RegExp) return WF.source === SF.source && WF.flags === SF.flags;
        if (WF.valueOf !== Object.prototype.valueOf) return WF.valueOf() === SF.valueOf();
        if (WF.toString !== Object.prototype.toString) return WF.toString() === SF.toString();
        if ((CF = (uF = Object.keys(WF)).length) !== Object.keys(SF).length) return !1;
        for (AF = CF; 0 !== AF--;)
          if (!Object.prototype.hasOwnProperty.call(SF, uF[AF])) return !1;
        for (AF = CF; 0 !== AF--;) {
          var hF = uF[AF];
          if (!FF(WF[hF], SF[hF])) return !1
        }
        return !0
      }
      return WF !== WF && SF !== SF
    }
  },
  35068: (FF, WF) => {
    function SF(FF) {
      if (FF && "object" === typeof FF) {
        var WF = FF.which || FF.keyCode || FF.charCode;
        WF && (FF = WF)
      }
      if ("number" === typeof FF) return hF[FF];
      var SF, uF = String(FF);
      return (SF = CF[uF.toLowerCase()]) ? SF : (SF = AF[uF.toLowerCase()]) || (1 === uF.length ? uF.charCodeAt(0) : void 0)
    }
    SF.isEventKey = function(FF, WF) {
      if (FF && "object" === typeof FF) {
        var SF = FF.which || FF.keyCode || FF.charCode;
        if (null === SF || void 0 === SF) return !1;
        if ("string" === typeof WF) {
          var uF;
          if (uF = CF[WF.toLowerCase()]) return uF === SF;
          if (uF = AF[WF.toLowerCase()]) return uF === SF
        } else if ("number" === typeof WF) return WF === SF;
        return !1
      }
    };
    var CF = (WF = FF.exports = SF).code = WF.codes = {
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
      AF = WF.aliases = {
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
    for (uF = 97; uF < 123; uF++) CF[String.fromCharCode(uF)] = uF - 32;
    for (var uF = 48; uF < 58; uF++) CF[uF - 48] = uF;
    for (uF = 1; uF < 13; uF++) CF["f" + uF] = uF + 111;
    for (uF = 0; uF < 10; uF++) CF["numpad " + uF] = uF + 96;
    var hF = WF.names = WF.title = {};
    for (uF in CF) hF[CF[uF]] = uF;
    for (var bW in AF) CF[bW] = AF[bW]
  },
  35234: (FF, WF, SF) => {
    SF.d(WF, {
      d: () => hF
    });
    var CF = SF(46);
    const AF = CF.useLayoutEffect;
    const uF = function(FF) {
      var WF = (0, CF.useRef)(FF);
      return AF((function() {
        WF.current = FF
      })), WF
    };
    var hF = function(FF) {
      var WF = uF(FF);
      (0, CF.useEffect)((function() {
        var FF = function(FF) {
          var SF;
          if (null != WF.current && (SF = WF.current(FF)), FF.defaultPrevented && (FF.returnValue = ""), "string" === typeof SF) return FF.returnValue = SF, SF
        };
        return window.addEventListener("beforeunload", FF),
          function() {
            window.removeEventListener("beforeunload", FF)
          }
      }), [])
    }
  },
  35097: FF => {
    var WF, SF = "undefined" !== typeof window ? window.navigator.userAgent : "",
      CF = /OS X/.test(SF),
      AF = /Opera/.test(SF),
      uF = !/like Gecko/.test(SF) && !AF,
      hF = FF.exports = {
        0: CF ? "<menu>" : "<UNK>",
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
        93: CF ? "<meta>" : "<menu>",
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
        173: CF && uF ? "-" : "<volume-mute>",
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
        231: AF ? "`" : "<unicode>",
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
    for (WF = 58; WF < 65; ++WF) hF[WF] = String.fromCharCode(WF);
    for (WF = 48; WF < 58; ++WF) hF[WF] = WF - 48 + "";
    for (WF = 65; WF < 91; ++WF) hF[WF] = String.fromCharCode(WF);
    for (WF = 96; WF < 106; ++WF) hF[WF] = "<num-" + (WF - 96) + ">";
    for (WF = 112; WF < 136; ++WF) hF[WF] = "F" + (WF - 111)
  }
};
Object.freeze(modules);
for (const FF in modules) Object.freeze(modules[FF]);