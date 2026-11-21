/*! For license information please see bqoxjr.wasmMatchmaking.98b73e28.chunk.js.LICENSE.txt */
export const id = 60;
export const ids = [60];
export const modules = {
  36166: (QQ, FQ) => {
    function wQ(QQ) {
      if (QQ && "object" === typeof QQ) {
        var FQ = QQ.which || QQ.keyCode || QQ.charCode;
        FQ && (QQ = FQ)
      }
      if ("number" === typeof QQ) return DQ[QQ];
      var wQ, oQ = String(QQ);
      return (wQ = LQ[oQ.toLowerCase()]) ? wQ : (wQ = qQ[oQ.toLowerCase()]) || (1 === oQ.length ? oQ.charCodeAt(0) : void 0)
    }
    wQ.isEventKey = function(QQ, FQ) {
      if (QQ && "object" === typeof QQ) {
        var wQ = QQ.which || QQ.keyCode || QQ.charCode;
        if (null === wQ || void 0 === wQ) return !1;
        if ("string" === typeof FQ) {
          var oQ;
          if (oQ = LQ[FQ.toLowerCase()]) return oQ === wQ;
          if (oQ = qQ[FQ.toLowerCase()]) return oQ === wQ
        } else if ("number" === typeof FQ) return FQ === wQ;
        return !1
      }
    };
    var LQ = (FQ = QQ.exports = wQ).code = FQ.codes = {
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
      qQ = FQ.aliases = {
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
    for (oQ = 97; oQ < 123; oQ++) LQ[String.fromCharCode(oQ)] = oQ - 32;
    for (var oQ = 48; oQ < 58; oQ++) LQ[oQ - 48] = oQ;
    for (oQ = 1; oQ < 13; oQ++) LQ["f" + oQ] = oQ + 111;
    for (oQ = 0; oQ < 10; oQ++) LQ["numpad " + oQ] = oQ + 96;
    var DQ = FQ.names = FQ.title = {};
    for (oQ in LQ) DQ[LQ[oQ]] = oQ;
    for (var kQ in qQ) LQ[kQ] = qQ[kQ]
  },
  36322: (QQ, FQ, wQ) => {
    wQ.d(FQ, {
      c: () => DQ
    });
    var LQ = wQ(53);
    const qQ = LQ.useLayoutEffect;
    const oQ = function(QQ) {
      var FQ = (0, LQ.useRef)(QQ);
      return qQ((function() {
        FQ.current = QQ
      })), FQ
    };
    var DQ = function(QQ) {
      var FQ = oQ(QQ);
      (0, LQ.useEffect)((function() {
        var QQ = function(QQ) {
          var wQ;
          if (null != FQ.current && (wQ = FQ.current(QQ)), QQ.defaultPrevented && (QQ.returnValue = ""), "string" === typeof wQ) return QQ.returnValue = wQ, wQ
        };
        return window.addEventListener("beforeunload", QQ),
          function() {
            window.removeEventListener("beforeunload", QQ)
          }
      }), [])
    }
  },
  36218: QQ => {
    var FQ, wQ = "undefined" !== typeof window ? window.navigator.userAgent : "",
      LQ = /OS X/.test(wQ),
      qQ = /Opera/.test(wQ),
      oQ = !/like Gecko/.test(wQ) && !qQ,
      DQ = QQ.exports = {
        0: LQ ? "<menu>" : "<UNK>",
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
        93: LQ ? "<meta>" : "<menu>",
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
        173: LQ && oQ ? "-" : "<volume-mute>",
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
        231: qQ ? "`" : "<unicode>",
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
    for (FQ = 58; FQ < 65; ++FQ) DQ[FQ] = String.fromCharCode(FQ);
    for (FQ = 48; FQ < 58; ++FQ) DQ[FQ] = FQ - 48 + "";
    for (FQ = 65; FQ < 91; ++FQ) DQ[FQ] = String.fromCharCode(FQ);
    for (FQ = 96; FQ < 106; ++FQ) DQ[FQ] = "<num-" + (FQ - 96) + ">";
    for (FQ = 112; FQ < 136; ++FQ) DQ[FQ] = "F" + (FQ - 111)
  },
  6485: (QQ, FQ, wQ) => {
    wQ.d(FQ, {
      d: () => qQ,
      f: () => oQ
    });
    var LQ = wQ(27);
    const qQ = "shaderPack";
    async function oQ() {
      var QQ;
      let FQ = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
      return null !== (QQ = await LQ.h.getItem(qQ, FQ)) && void 0 !== QQ ? QQ : null
    }
  },
  8677: (QQ, FQ, wQ) => {
    wQ.d(FQ, {
      e: () => oQ,
      i: () => qQ
    });
    let LQ = !1;

    function qQ() {
      LQ = !0
    }

    function oQ() {
      return LQ
    }
  },
  36088: (QQ, FQ, wQ) => {
    wQ.r(FQ), wQ.d(FQ, {
      InGameUi: () => GQ.e,
      LobbyLeaderboard: () => pQ.c,
      loadCharacterCustomisationUI: () => cQ,
      loadCharacterPreview: () => CQ,
      matchmakeAndPlay: () => RQ,
      setUpGame: () => SQ
    });
    var LQ = wQ(1257),
      qQ = wQ(160),
      oQ = wQ(17),
      DQ = wQ(36094),
      kQ = wQ(36098),
      vQ = wQ(1911),
      mQ = wQ(36122);

    function uQ() {
      return !1 !== vQ.b.get("canCustomiseChar")
    }
    let HQ = !1;
    var bQ = wQ(1339),
      YQ = wQ(1265),
      xQ = wQ(685),
      AQ = wQ(8677);
    var tQ = wQ(8672),
      eQ = wQ(3451),
      MQ = wQ(1793);
    var GQ = wQ(36131),
      pQ = wQ(36625);

    function cQ() {
      return Promise.all([wQ.e(282), wQ.e(388)]).then((() => wQ(40667)))
    }

    function CQ() {
      return wQ.e(283).then((() => wQ(40672)))
    }

    function SQ() {
      return (0, tQ.d)()
    }
    HQ || (HQ = !0, document.addEventListener("keydown", (QQ => {
        (0, mQ.e)(QQ, uQ)
      }))),
      function(QQ) {
        var FQ;
        return !0 !== (null === QQ || void 0 === QQ ? void 0 : QQ.saveData) && !/2g$/.test(null !== (FQ = null === QQ || void 0 === QQ ? void 0 : QQ.effectiveType) && void 0 !== FQ ? FQ : "")
      }(navigator.connection) && (0, xQ.d)((() => {
        (0, AQ.e)() || Promise.all([wQ.e(75), wQ.e(133), wQ.e(88), wQ.e(56)]).then((() => wQ(40196))).then((QQ => {
          (0, AQ.e)() || QQ.startLoadAheadOfJoin({
            joinStarted: AQ.e,
            language: YQ.e.get().getCurrentLanguageCode()
          })
        }), (QQ => {
          console.warn("[bloxd-wasm-client] the loads ahead of a join did not start: the join loads the client itself", QQ)
        }))
      }));
    const iQ = oQ.c.get("router");
    null === iQ ? console.warn("[bloxd-wasm-client] no router as the matchmaking chunk loads: the join's loads start with the join") : function QQ(FQ) {
      if ((0, MQ.d)(FQ.state.location.pathname)) return void(0, tQ.b)().catch((() => {}));
      const wQ = FQ.subscribe((LQ => {
        (0, MQ.d)(LQ.location.pathname) && (wQ(), (0, eQ.d)().then((() => {
          QQ(FQ)
        })))
      }))
    }(iQ), (0, DQ.e)();
    const WQ = (0, kQ.c)((async function(QQ, FQ) {
      let {
        place: wQ,
        userContext: oQ,
        direct: DQ,
        rematch: kQ
      } = QQ;
      const vQ = DQ ? 1 / 0 : performance.now();
      let mQ;
      try {
        mQ = await (0, tQ.b)()
      } catch (uQ) {
        return console.error("The wasm client did not load:", uQ), (0, bQ.s)({
          websocketUrl: null
        }), LQ.d.errorWithCode(String(uQ), qQ.o.CONNECT_TO_GAME_SERVER, {
          error: uQ,
          severity: FQ.aborted ? "low" : "medium",
          wF: FQ.aborted
        })
      }
      return mQ.playWasmGame({
        userContext: oQ,
        place: wQ,
        matchedAt: vQ,
        rematch: kQ
      }, FQ)
    }));

    function RQ() {
      return (0, tQ.b)().catch((() => {})), WQ(...arguments)
    }
  },
  8672: (QQ, FQ, wQ) => {
    wQ.d(FQ, {
      b: () => uQ,
      d: () => HQ
    });
    var LQ = wQ(3037),
      qQ = wQ(2206),
      oQ = wQ(3071),
      DQ = wQ(4488),
      kQ = wQ(3380),
      vQ = wQ(8677);
    let mQ = null;

    function uQ() {
      return DQ.e.cancelDownloadForJoin(), (0, kQ.b)(), (0, qQ.g)(), (0, vQ.i)(), (0, oQ.g)(), Promise.all([wQ.e(70), wQ.e(73), wQ.e(72), wQ.e(71), wQ.e(84), wQ.e(261), wQ.e(200), wQ.e(218), wQ.e(239), wQ.e(213), wQ.e(46)]).then((() => wQ(40103))).catch((() => {})), Promise.all([wQ.e(75), wQ.e(133), wQ.e(88), wQ.e(56)]).then((() => wQ(40196))).then((QQ => {
        let {
          startJoinLoad: FQ
        } = QQ;
        FQ()
      }), (() => {})), mQ ??= Promise.all([wQ.e(72), wQ.e(75), wQ.e(130), wQ.e(74), wQ.e(133), wQ.e(263), wQ.e(187), wQ.e(88), wQ.e(87), wQ.e(86), wQ.e(213), wQ.e(61)]).then((() => wQ(40273))).then((QQ => (QQ.startWasmPlay(), QQ.followPageUiPack((QQ => {
        LQ.b.showGamePack(QQ)
      })), QQ)), (QQ => {
        throw mQ = null, QQ
      })), mQ
    }

    function HQ() {
      return Promise.all([wQ.e(72), wQ.e(75), wQ.e(130), wQ.e(74), wQ.e(133), wQ.e(263), wQ.e(187), wQ.e(88), wQ.e(87), wQ.e(86), wQ.e(213), wQ.e(61)]).then((() => wQ(40273))).then((QQ => {
        QQ.startWasmPreviews(), QQ.prefetchWasmPreviews()
      }))
    }
  },
  9289: (QQ, FQ, wQ) => {
    wQ.d(FQ, {
      e: () => qQ,
      i: () => oQ
    });
    var LQ = wQ(9252);
    const qQ = "Air",
      oQ = Object.freeze(new LQ.g(qQ, 0, "", null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null))
  }
};
Object.freeze(modules);
for (const QQ in modules) Object.freeze(modules[QQ]);