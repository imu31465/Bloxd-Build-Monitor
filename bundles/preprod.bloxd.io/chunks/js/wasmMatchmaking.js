/*! For license information please see bbb6l5.wasmMatchmaking.848266e5.chunk.js.LICENSE.txt */
export const id = 60;
export const ids = [60];
export const modules = {
  36586: (qq, Eq) => {
    function gq(qq) {
      if (qq && "object" === typeof qq) {
        var Eq = qq.which || qq.keyCode || qq.charCode;
        Eq && (qq = Eq)
      }
      if ("number" === typeof qq) return mq[qq];
      var gq, Oq = String(qq);
      return (gq = Yq[Oq.toLowerCase()]) ? gq : (gq = lq[Oq.toLowerCase()]) || (1 === Oq.length ? Oq.charCodeAt(0) : void 0)
    }
    gq.isEventKey = function(qq, Eq) {
      if (qq && "object" === typeof qq) {
        var gq = qq.which || qq.keyCode || qq.charCode;
        if (null === gq || void 0 === gq) return !1;
        if ("string" === typeof Eq) {
          var Oq;
          if (Oq = Yq[Eq.toLowerCase()]) return Oq === gq;
          if (Oq = lq[Eq.toLowerCase()]) return Oq === gq
        } else if ("number" === typeof Eq) return Eq === gq;
        return !1
      }
    };
    var Yq = (Eq = qq.exports = gq).code = Eq.codes = {
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
      lq = Eq.aliases = {
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
    for (Oq = 97; Oq < 123; Oq++) Yq[String.fromCharCode(Oq)] = Oq - 32;
    for (var Oq = 48; Oq < 58; Oq++) Yq[Oq - 48] = Oq;
    for (Oq = 1; Oq < 13; Oq++) Yq["f" + Oq] = Oq + 111;
    for (Oq = 0; Oq < 10; Oq++) Yq["numpad " + Oq] = Oq + 96;
    var mq = Eq.names = Eq.title = {};
    for (Oq in Yq) mq[Yq[Oq]] = Oq;
    for (var xq in lq) Yq[xq] = lq[xq]
  },
  36744: (qq, Eq, gq) => {
    gq.d(Eq, {
      b: () => mq
    });
    var Yq = gq(57);
    const lq = Yq.useLayoutEffect;
    const Oq = function(qq) {
      var Eq = (0, Yq.useRef)(qq);
      return lq((function() {
        Eq.current = qq
      })), Eq
    };
    var mq = function(qq) {
      var Eq = Oq(qq);
      (0, Yq.useEffect)((function() {
        var qq = function(qq) {
          var gq;
          if (null != Eq.current && (gq = Eq.current(qq)), qq.defaultPrevented && (qq.returnValue = ""), "string" === typeof gq) return qq.returnValue = gq, gq
        };
        return window.addEventListener("beforeunload", qq),
          function() {
            window.removeEventListener("beforeunload", qq)
          }
      }), [])
    }
  },
  36640: qq => {
    var Eq, gq = "undefined" !== typeof window ? window.navigator.userAgent : "",
      Yq = /OS X/.test(gq),
      lq = /Opera/.test(gq),
      Oq = !/like Gecko/.test(gq) && !lq,
      mq = qq.exports = {
        0: Yq ? "<menu>" : "<UNK>",
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
        93: Yq ? "<meta>" : "<menu>",
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
        173: Yq && Oq ? "-" : "<volume-mute>",
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
        231: lq ? "`" : "<unicode>",
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
    for (Eq = 58; Eq < 65; ++Eq) mq[Eq] = String.fromCharCode(Eq);
    for (Eq = 48; Eq < 58; ++Eq) mq[Eq] = Eq - 48 + "";
    for (Eq = 65; Eq < 91; ++Eq) mq[Eq] = String.fromCharCode(Eq);
    for (Eq = 96; Eq < 106; ++Eq) mq[Eq] = "<num-" + (Eq - 96) + ">";
    for (Eq = 112; Eq < 136; ++Eq) mq[Eq] = "F" + (Eq - 111)
  },
  6535: (qq, Eq, gq) => {
    gq.d(Eq, {
      b: () => lq,
      d: () => Oq
    });
    var Yq = gq(38);
    const lq = "shaderPack";
    async function Oq() {
      var qq;
      let Eq = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
      return null !== (qq = await Yq.f.getItem(lq, Eq)) && void 0 !== qq ? qq : null
    }
  },
  8867: (qq, Eq, gq) => {
    gq.d(Eq, {
      e: () => Oq,
      h: () => lq
    });
    let Yq = !1;

    function lq() {
      Yq = !0
    }

    function Oq() {
      return Yq
    }
  },
  36502: (qq, Eq, gq) => {
    gq.r(Eq), gq.d(Eq, {
      InGameUi: () => oq.b,
      LobbyLeaderboard: () => Pq.c,
      loadCharacterCustomisationUI: () => Qq,
      loadCharacterPreview: () => yq,
      matchmakeAndPlay: () => hq,
      setUpGame: () => tq
    });
    var Yq = gq(1234),
      lq = gq(163),
      Oq = gq(24),
      mq = gq(36504),
      xq = gq(36508),
      Aq = gq(1926),
      cq = gq(36534);

    function uq() {
      return !1 !== Aq.c.get("canCustomiseChar")
    }
    let Bq = !1;
    var Wq = gq(1308),
      Nq = gq(1241),
      aq = gq(663),
      Vq = gq(8867);
    var dq = gq(8860),
      jq = gq(3455),
      Hq = gq(1774);
    var oq = gq(36545),
      Pq = gq(37060);

    function Qq() {
      return Promise.all([gq.e(282), gq.e(388)]).then((() => gq(41007)))
    }

    function yq() {
      return gq.e(283).then((() => gq(41011)))
    }

    function tq() {
      return (0, dq.g)()
    }
    Bq || (Bq = !0, document.addEventListener("keydown", (qq => {
        (0, cq.c)(qq, uq)
      }))),
      function(qq) {
        var Eq;
        return !0 !== (null === qq || void 0 === qq ? void 0 : qq.saveData) && !/2g$/.test(null !== (Eq = null === qq || void 0 === qq ? void 0 : qq.effectiveType) && void 0 !== Eq ? Eq : "")
      }(navigator.connection) && (0, aq.c)((() => {
        (0, Vq.e)() || Promise.all([gq.e(75), gq.e(133), gq.e(88), gq.e(56)]).then((() => gq(40483))).then((qq => {
          (0, Vq.e)() || qq.startLoadAheadOfJoin({
            joinStarted: Vq.e,
            language: Nq.h.get().getCurrentLanguageCode()
          })
        }), (qq => {
          console.warn("[bloxd-wasm-client] the loads ahead of a join did not start: the join loads the client itself", qq)
        }))
      }));
    const rq = Oq.b.get("router");
    null === rq ? console.warn("[bloxd-wasm-client] no router as the matchmaking chunk loads: the join's loads start with the join") : function qq(Eq) {
      if ((0, Hq.b)(Eq.state.location.pathname)) return void(0, dq.d)().catch((() => {}));
      const gq = Eq.subscribe((Yq => {
        (0, Hq.b)(Yq.location.pathname) && (gq(), (0, jq.b)().then((() => {
          qq(Eq)
        })))
      }))
    }(rq), (0, mq.b)();
    const vq = (0, xq.c)((async function(qq, Eq) {
      let {
        place: gq,
        userContext: Oq,
        direct: mq,
        rematch: xq
      } = qq;
      const Aq = mq ? 1 / 0 : performance.now();
      let cq;
      try {
        cq = await (0, dq.d)()
      } catch (uq) {
        return console.error("The wasm client did not load:", uq), (0, Wq.w)({
          websocketUrl: null
        }), Yq.b.errorWithCode(String(uq), lq.h.CONNECT_TO_GAME_SERVER, {
          error: uq,
          severity: Eq.aborted ? "low" : "medium",
          lE: Eq.aborted
        })
      }
      return cq.playWasmGame({
        userContext: Oq,
        place: gq,
        matchedAt: Aq,
        rematch: xq
      }, Eq)
    }));

    function hq() {
      return (0, dq.d)().catch((() => {})), vq(...arguments)
    }
  },
  8860: (qq, Eq, gq) => {
    gq.d(Eq, {
      d: () => uq,
      g: () => Bq
    });
    var Yq = gq(3056),
      lq = gq(2254),
      Oq = gq(3090),
      mq = gq(4472),
      xq = gq(3383),
      Aq = gq(8867);
    let cq = null;

    function uq() {
      return mq.b.cancelDownloadForJoin(), (0, xq.b)(), (0, lq.g)(), (0, Aq.h)(), (0, Oq.d)(), Promise.all([gq.e(70), gq.e(73), gq.e(72), gq.e(71), gq.e(84), gq.e(261), gq.e(200), gq.e(218), gq.e(239), gq.e(213), gq.e(46)]).then((() => gq(40404))).catch((() => {})), Promise.all([gq.e(75), gq.e(133), gq.e(88), gq.e(56)]).then((() => gq(40483))).then((qq => {
        let {
          startJoinLoad: Eq
        } = qq;
        Eq()
      }), (() => {})), cq ??= Promise.all([gq.e(72), gq.e(75), gq.e(130), gq.e(74), gq.e(133), gq.e(263), gq.e(187), gq.e(88), gq.e(87), gq.e(86), gq.e(213), gq.e(61)]).then((() => gq(40581))).then((qq => (qq.startWasmPlay(), qq.followPageUiPack((qq => {
        Yq.c.showGamePack(qq)
      })), qq)), (qq => {
        throw cq = null, qq
      })), cq
    }

    function Bq() {
      return Promise.all([gq.e(72), gq.e(75), gq.e(130), gq.e(74), gq.e(133), gq.e(263), gq.e(187), gq.e(88), gq.e(87), gq.e(86), gq.e(213), gq.e(61)]).then((() => gq(40581))).then((qq => {
        qq.startWasmPreviews(), qq.prefetchWasmPreviews()
      }))
    }
  },
  9464: (qq, Eq, gq) => {
    gq.d(Eq, {
      b: () => lq,
      d: () => Oq
    });
    var Yq = gq(9433);
    const lq = "Air",
      Oq = Object.freeze(new Yq.e(lq, 0, "", null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null))
  }
};
Object.freeze(modules);
for (const qq in modules) Object.freeze(modules[qq]);