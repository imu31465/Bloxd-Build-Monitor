/*! For license information please see qepqb8.wasmMatchmaking.af55f511.chunk.js.LICENSE.txt */
export const id = 60;
export const ids = [60];
export const modules = {
  36067: (vv, zv) => {
    function Pv(vv) {
      if (vv && "object" === typeof vv) {
        var zv = vv.which || vv.keyCode || vv.charCode;
        zv && (vv = zv)
      }
      if ("number" === typeof vv) return gv[vv];
      var Pv, ev = String(vv);
      return (Pv = hv[ev.toLowerCase()]) ? Pv : (Pv = Sv[ev.toLowerCase()]) || (1 === ev.length ? ev.charCodeAt(0) : void 0)
    }
    Pv.isEventKey = function(vv, zv) {
      if (vv && "object" === typeof vv) {
        var Pv = vv.which || vv.keyCode || vv.charCode;
        if (null === Pv || void 0 === Pv) return !1;
        if ("string" === typeof zv) {
          var ev;
          if (ev = hv[zv.toLowerCase()]) return ev === Pv;
          if (ev = Sv[zv.toLowerCase()]) return ev === Pv
        } else if ("number" === typeof zv) return zv === Pv;
        return !1
      }
    };
    var hv = (zv = vv.exports = Pv).code = zv.codes = {
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
      Sv = zv.aliases = {
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
    for (ev = 97; ev < 123; ev++) hv[String.fromCharCode(ev)] = ev - 32;
    for (var ev = 48; ev < 58; ev++) hv[ev - 48] = ev;
    for (ev = 1; ev < 13; ev++) hv["f" + ev] = ev + 111;
    for (ev = 0; ev < 10; ev++) hv["numpad " + ev] = ev + 96;
    var gv = zv.names = zv.title = {};
    for (ev in hv) gv[hv[ev]] = ev;
    for (var pv in Sv) hv[pv] = Sv[pv]
  },
  36206: (vv, zv, Pv) => {
    Pv.d(zv, {
      d: () => gv
    });
    var hv = Pv(52);
    const Sv = hv.useLayoutEffect;
    const ev = function(vv) {
      var zv = (0, hv.useRef)(vv);
      return Sv((function() {
        zv.current = vv
      })), zv
    };
    var gv = function(vv) {
      var zv = ev(vv);
      (0, hv.useEffect)((function() {
        var vv = function(vv) {
          var Pv;
          if (null != zv.current && (Pv = zv.current(vv)), vv.defaultPrevented && (vv.returnValue = ""), "string" === typeof Pv) return vv.returnValue = Pv, Pv
        };
        return window.addEventListener("beforeunload", vv),
          function() {
            window.removeEventListener("beforeunload", vv)
          }
      }), [])
    }
  },
  36123: vv => {
    var zv, Pv = "undefined" !== typeof window ? window.navigator.userAgent : "",
      hv = /OS X/.test(Pv),
      Sv = /Opera/.test(Pv),
      ev = !/like Gecko/.test(Pv) && !Sv,
      gv = vv.exports = {
        0: hv ? "<menu>" : "<UNK>",
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
        93: hv ? "<meta>" : "<menu>",
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
        173: hv && ev ? "-" : "<volume-mute>",
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
        231: Sv ? "`" : "<unicode>",
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
    for (zv = 58; zv < 65; ++zv) gv[zv] = String.fromCharCode(zv);
    for (zv = 48; zv < 58; ++zv) gv[zv] = zv - 48 + "";
    for (zv = 65; zv < 91; ++zv) gv[zv] = String.fromCharCode(zv);
    for (zv = 96; zv < 106; ++zv) gv[zv] = "<num-" + (zv - 96) + ">";
    for (zv = 112; zv < 136; ++zv) gv[zv] = "F" + (zv - 111)
  },
  6377: (vv, zv, Pv) => {
    Pv.d(zv, {
      c: () => Sv,
      g: () => ev
    });
    var hv = Pv(39);
    const Sv = "shaderPack";
    async function ev() {
      var vv;
      let zv = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
      return null !== (vv = await hv.f.getItem(Sv, zv)) && void 0 !== vv ? vv : null
    }
  },
  8578: (vv, zv, Pv) => {
    Pv.d(zv, {
      d: () => ev,
      g: () => Sv
    });
    let hv = !1;

    function Sv() {
      hv = !0
    }

    function ev() {
      return hv
    }
  },
  35988: (vv, zv, Pv) => {
    Pv.r(zv), Pv.d(zv, {
      InGameUi: () => Gv.d,
      LobbyLeaderboard: () => mv.d,
      loadCharacterCustomisationUI: () => jv,
      loadCharacterPreview: () => fv,
      matchmakeAndPlay: () => Ov,
      setUpGame: () => Fv
    });
    var hv = Pv(1230),
      Sv = Pv(144),
      ev = Pv(22),
      gv = Pv(35993),
      pv = Pv(35999),
      dv = Pv(1903),
      Nv = Pv(36027);

    function lv() {
      return !1 !== dv.c.get("canCustomiseChar")
    }
    let Tv = !1;
    var Wv = Pv(1306),
      wv = Pv(1234),
      av = Pv(688),
      sv = Pv(8578);
    var Cv = Pv(8575),
      iv = Pv(3329),
      cv = Pv(1760);
    var Gv = Pv(36038),
      mv = Pv(36518);

    function jv() {
      return Promise.all([Pv.e(282), Pv.e(388)]).then((() => Pv(40573)))
    }

    function fv() {
      return Pv.e(283).then((() => Pv(40581)))
    }

    function Fv() {
      return (0, Cv.e)()
    }
    Tv || (Tv = !0, document.addEventListener("keydown", (vv => {
        (0, Nv.d)(vv, lv)
      }))),
      function(vv) {
        var zv;
        return !0 !== (null === vv || void 0 === vv ? void 0 : vv.saveData) && !/2g$/.test(null !== (zv = null === vv || void 0 === vv ? void 0 : vv.effectiveType) && void 0 !== zv ? zv : "")
      }(navigator.connection) && (0, av.c)((() => {
        (0, sv.d)() || Promise.all([Pv.e(75), Pv.e(132), Pv.e(88), Pv.e(56)]).then((() => Pv(40061))).then((vv => {
          (0, sv.d)() || vv.startLoadAheadOfJoin({
            joinStarted: sv.d,
            language: wv.f.get().getCurrentLanguageCode()
          })
        }), (vv => {
          console.warn("[bloxd-wasm-client] the loads ahead of a join did not start: the join loads the client itself", vv)
        }))
      }));
    const Yv = ev.c.get("router");
    null === Yv ? console.warn("[bloxd-wasm-client] no router as the matchmaking chunk loads: the join's loads start with the join") : function vv(zv) {
      if ((0, cv.e)(zv.state.location.pathname)) return void(0, Cv.c)().catch((() => {}));
      const Pv = zv.subscribe((hv => {
        (0, cv.e)(hv.location.pathname) && (Pv(), (0, iv.e)().then((() => {
          vv(zv)
        })))
      }))
    }(Yv), (0, gv.c)();
    const nv = (0, pv.b)((async function(vv, zv) {
      let {
        place: Pv,
        userContext: ev,
        direct: gv,
        rematch: pv
      } = vv;
      const dv = gv ? 1 / 0 : performance.now();
      let Nv;
      try {
        Nv = await (0, Cv.c)()
      } catch (lv) {
        return console.error("The wasm client did not load:", lv), (0, Wv.o)({
          websocketUrl: null
        }), hv.e.errorWithCode(String(lv), Sv.o.CONNECT_TO_GAME_SERVER, {
          error: lv,
          severity: zv.aborted ? "low" : "medium",
          ev: zv.aborted
        })
      }
      return Nv.playWasmGame({
        userContext: ev,
        place: Pv,
        matchedAt: dv,
        rematch: pv
      }, zv)
    }));

    function Ov() {
      return (0, Cv.c)().catch((() => {})), nv(...arguments)
    }
  },
  8575: (vv, zv, Pv) => {
    Pv.d(zv, {
      c: () => lv,
      e: () => Tv
    });
    var hv = Pv(2934),
      Sv = Pv(2213),
      ev = Pv(2972),
      gv = Pv(4402),
      pv = Pv(3258),
      dv = Pv(8578);
    let Nv = null;

    function lv() {
      return gv.c.cancelDownloadForJoin(), (0, pv.b)(), (0, Sv.f)(), (0, dv.g)(), (0, ev.h)(), Promise.all([Pv.e(70), Pv.e(73), Pv.e(72), Pv.e(71), Pv.e(84), Pv.e(261), Pv.e(199), Pv.e(217), Pv.e(239), Pv.e(212), Pv.e(46)]).then((() => Pv(39984))).catch((() => {})), Promise.all([Pv.e(75), Pv.e(132), Pv.e(88), Pv.e(56)]).then((() => Pv(40061))).then((vv => {
        let {
          startJoinLoad: zv
        } = vv;
        zv()
      }), (() => {})), Nv ??= Promise.all([Pv.e(72), Pv.e(75), Pv.e(129), Pv.e(132), Pv.e(263), Pv.e(186), Pv.e(88), Pv.e(87), Pv.e(86), Pv.e(212), Pv.e(61)]).then((() => Pv(40153))).then((vv => (vv.startWasmPlay(), vv.followPageUiPack((vv => {
        hv.b.showGamePack(vv)
      })), vv)), (vv => {
        throw Nv = null, vv
      })), Nv
    }

    function Tv() {
      return Promise.all([Pv.e(72), Pv.e(75), Pv.e(129), Pv.e(132), Pv.e(263), Pv.e(186), Pv.e(88), Pv.e(87), Pv.e(86), Pv.e(212), Pv.e(61)]).then((() => Pv(40153))).then((vv => {
        vv.startWasmPreviews(), vv.prefetchWasmPreviews()
      }))
    }
  },
  9185: (vv, zv, Pv) => {
    Pv.d(zv, {
      e: () => Sv,
      f: () => ev
    });
    var hv = Pv(9144);
    const Sv = "Air",
      ev = Object.freeze(new hv.f(Sv, 0, "", null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null))
  }
};
Object.freeze(modules);
for (const vv in modules) Object.freeze(modules[vv]);