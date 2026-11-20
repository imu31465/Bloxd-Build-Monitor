/*! For license information please see halsg.wasmMatchmaking.7d7fbcce.chunk.js.LICENSE.txt */
export const id = 60;
export const ids = [60];
export const modules = {
  36155: (bb, ub) => {
    function hb(bb) {
      if (bb && "object" === typeof bb) {
        var ub = bb.which || bb.keyCode || bb.charCode;
        ub && (bb = ub)
      }
      if ("number" === typeof bb) return Ub[bb];
      var hb, Gb = String(bb);
      return (hb = Bb[Gb.toLowerCase()]) ? hb : (hb = Ob[Gb.toLowerCase()]) || (1 === Gb.length ? Gb.charCodeAt(0) : void 0)
    }
    hb.isEventKey = function(bb, ub) {
      if (bb && "object" === typeof bb) {
        var hb = bb.which || bb.keyCode || bb.charCode;
        if (null === hb || void 0 === hb) return !1;
        if ("string" === typeof ub) {
          var Gb;
          if (Gb = Bb[ub.toLowerCase()]) return Gb === hb;
          if (Gb = Ob[ub.toLowerCase()]) return Gb === hb
        } else if ("number" === typeof ub) return ub === hb;
        return !1
      }
    };
    var Bb = (ub = bb.exports = hb).code = ub.codes = {
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
      Ob = ub.aliases = {
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
    for (Gb = 97; Gb < 123; Gb++) Bb[String.fromCharCode(Gb)] = Gb - 32;
    for (var Gb = 48; Gb < 58; Gb++) Bb[Gb - 48] = Gb;
    for (Gb = 1; Gb < 13; Gb++) Bb["f" + Gb] = Gb + 111;
    for (Gb = 0; Gb < 10; Gb++) Bb["numpad " + Gb] = Gb + 96;
    var Ub = ub.names = ub.title = {};
    for (Gb in Bb) Ub[Bb[Gb]] = Gb;
    for (var Lb in Ob) Bb[Lb] = Ob[Lb]
  },
  36322: (bb, ub, hb) => {
    hb.d(ub, {
      c: () => Ub
    });
    var Bb = hb(49);
    const Ob = Bb.useLayoutEffect;
    const Gb = function(bb) {
      var ub = (0, Bb.useRef)(bb);
      return Ob((function() {
        ub.current = bb
      })), ub
    };
    var Ub = function(bb) {
      var ub = Gb(bb);
      (0, Bb.useEffect)((function() {
        var bb = function(bb) {
          var hb;
          if (null != ub.current && (hb = ub.current(bb)), bb.defaultPrevented && (bb.returnValue = ""), "string" === typeof hb) return bb.returnValue = hb, hb
        };
        return window.addEventListener("beforeunload", bb),
          function() {
            window.removeEventListener("beforeunload", bb)
          }
      }), [])
    }
  },
  36198: bb => {
    var ub, hb = "undefined" !== typeof window ? window.navigator.userAgent : "",
      Bb = /OS X/.test(hb),
      Ob = /Opera/.test(hb),
      Gb = !/like Gecko/.test(hb) && !Ob,
      Ub = bb.exports = {
        0: Bb ? "<menu>" : "<UNK>",
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
        93: Bb ? "<meta>" : "<menu>",
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
        173: Bb && Gb ? "-" : "<volume-mute>",
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
        231: Ob ? "`" : "<unicode>",
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
    for (ub = 58; ub < 65; ++ub) Ub[ub] = String.fromCharCode(ub);
    for (ub = 48; ub < 58; ++ub) Ub[ub] = ub - 48 + "";
    for (ub = 65; ub < 91; ++ub) Ub[ub] = String.fromCharCode(ub);
    for (ub = 96; ub < 106; ++ub) Ub[ub] = "<num-" + (ub - 96) + ">";
    for (ub = 112; ub < 136; ++ub) Ub[ub] = "F" + (ub - 111)
  },
  6394: (bb, ub, hb) => {
    hb.d(ub, {
      d: () => Ob,
      g: () => Gb
    });
    var Bb = hb(29);
    const Ob = "shaderPack";
    async function Gb() {
      var bb;
      let ub = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
      return null !== (bb = await Bb.f.getItem(Ob, ub)) && void 0 !== bb ? bb : null
    }
  },
  8633: (bb, ub, hb) => {
    hb.d(ub, {
      c: () => Gb,
      g: () => Ob
    });
    let Bb = !1;

    function Ob() {
      Bb = !0
    }

    function Gb() {
      return Bb
    }
  },
  36057: (bb, ub, hb) => {
    hb.r(ub), hb.d(ub, {
      InGameUi: () => Kb.d,
      LobbyLeaderboard: () => Wb.e,
      loadCharacterCustomisationUI: () => Cb,
      loadCharacterPreview: () => db,
      matchmakeAndPlay: () => Db,
      setUpGame: () => rb
    });
    var Bb = hb(1141),
      Ob = hb(148),
      Gb = hb(13),
      Ub = hb(36063),
      Lb = hb(36069),
      Yb = hb(1836),
      Sb = hb(36104);

    function ab() {
      return !1 !== Yb.b.get("canCustomiseChar")
    }
    let Hb = !1;
    var wb = hb(1218),
      Zb = hb(1144),
      Xb = hb(651),
      pb = hb(8633);
    var ob = hb(8631),
      Ab = hb(3364),
      lb = hb(1694);
    var Kb = hb(36116),
      Wb = hb(36664);

    function Cb() {
      return Promise.all([hb.e(282), hb.e(388)]).then((() => hb(40734)))
    }

    function db() {
      return hb.e(283).then((() => hb(40739)))
    }

    function rb() {
      return (0, ob.g)()
    }
    Hb || (Hb = !0, document.addEventListener("keydown", (bb => {
        (0, Sb.c)(bb, ab)
      }))),
      function(bb) {
        var ub;
        return !0 !== (null === bb || void 0 === bb ? void 0 : bb.saveData) && !/2g$/.test(null !== (ub = null === bb || void 0 === bb ? void 0 : bb.effectiveType) && void 0 !== ub ? ub : "")
      }(navigator.connection) && (0, Xb.b)((() => {
        (0, pb.c)() || Promise.all([hb.e(75), hb.e(133), hb.e(88), hb.e(56)]).then((() => hb(40192))).then((bb => {
          (0, pb.c)() || bb.startLoadAheadOfJoin({
            joinStarted: pb.c,
            language: Zb.h.get().getCurrentLanguageCode()
          })
        }), (bb => {
          console.warn("[bloxd-wasm-client] the loads ahead of a join did not start: the join loads the client itself", bb)
        }))
      }));
    const jb = Gb.d.get("router");
    null === jb ? console.warn("[bloxd-wasm-client] no router as the matchmaking chunk loads: the join's loads start with the join") : function bb(ub) {
      if ((0, lb.e)(ub.state.location.pathname)) return void(0, ob.c)().catch((() => {}));
      const hb = ub.subscribe((Bb => {
        (0, lb.e)(Bb.location.pathname) && (hb(), (0, Ab.e)().then((() => {
          bb(ub)
        })))
      }))
    }(jb), (0, Ub.b)();
    const nb = (0, Lb.e)((async function(bb, ub) {
      let {
        place: hb,
        userContext: Gb,
        direct: Ub,
        rematch: Lb
      } = bb;
      const Yb = Ub ? 1 / 0 : performance.now();
      let Sb;
      try {
        Sb = await (0, ob.c)()
      } catch (ab) {
        return console.error("The wasm client did not load:", ab), (0, wb.l)({
          websocketUrl: null
        }), Bb.b.errorWithCode(String(ab), Ob.k.CONNECT_TO_GAME_SERVER, {
          error: ab,
          severity: ub.aborted ? "low" : "medium",
          Lu: ub.aborted
        })
      }
      return Sb.playWasmGame({
        userContext: Gb,
        place: hb,
        matchedAt: Yb,
        rematch: Lb
      }, ub)
    }));

    function Db() {
      return (0, ob.c)().catch((() => {})), nb(...arguments)
    }
  },
  8631: (bb, ub, hb) => {
    hb.d(ub, {
      c: () => ab,
      g: () => Hb
    });
    var Bb = hb(2941),
      Ob = hb(2161),
      Gb = hb(2987),
      Ub = hb(4413),
      Lb = hb(3291),
      Yb = hb(8633);
    let Sb = null;

    function ab() {
      return Ub.c.cancelDownloadForJoin(), (0, Lb.e)(), (0, Ob.h)(), (0, Yb.g)(), (0, Gb.i)(), Promise.all([hb.e(70), hb.e(73), hb.e(72), hb.e(71), hb.e(84), hb.e(261), hb.e(200), hb.e(218), hb.e(239), hb.e(213), hb.e(46)]).then((() => hb(40127))).catch((() => {})), Promise.all([hb.e(75), hb.e(133), hb.e(88), hb.e(56)]).then((() => hb(40192))).then((bb => {
        let {
          startJoinLoad: ub
        } = bb;
        ub()
      }), (() => {})), Sb ??= Promise.all([hb.e(72), hb.e(75), hb.e(130), hb.e(74), hb.e(133), hb.e(263), hb.e(187), hb.e(88), hb.e(87), hb.e(86), hb.e(213), hb.e(61)]).then((() => hb(40288))).then((bb => (bb.startWasmPlay(), bb.followPageUiPack((bb => {
        Bb.b.showGamePack(bb)
      })), bb)), (bb => {
        throw Sb = null, bb
      })), Sb
    }

    function Hb() {
      return Promise.all([hb.e(72), hb.e(75), hb.e(130), hb.e(74), hb.e(133), hb.e(263), hb.e(187), hb.e(88), hb.e(87), hb.e(86), hb.e(213), hb.e(61)]).then((() => hb(40288))).then((bb => {
        bb.startWasmPreviews(), bb.prefetchWasmPreviews()
      }))
    }
  },
  9280: (bb, ub, hb) => {
    hb.d(ub, {
      e: () => Ob,
      g: () => Gb
    });
    var Bb = hb(9235);
    const Ob = "Air",
      Gb = Object.freeze(new Bb.d(Ob, 0, "", null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null))
  }
};
Object.freeze(modules);
for (const bb in modules) Object.freeze(modules[bb]);