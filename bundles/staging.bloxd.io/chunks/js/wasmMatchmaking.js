/*! For license information please see x17cru.wasmMatchmaking.941cd103.chunk.js.LICENSE.txt */
export const id = 60;
export const ids = [60];
export const modules = {
  36706: (dd, Jd) => {
    function kd(dd) {
      if (dd && "object" === typeof dd) {
        var Jd = dd.which || dd.keyCode || dd.charCode;
        Jd && (dd = Jd)
      }
      if ("number" === typeof dd) return Pd[dd];
      var kd, Wd = String(dd);
      return (kd = pd[Wd.toLowerCase()]) ? kd : (kd = Nd[Wd.toLowerCase()]) || (1 === Wd.length ? Wd.charCodeAt(0) : void 0)
    }
    kd.isEventKey = function(dd, Jd) {
      if (dd && "object" === typeof dd) {
        var kd = dd.which || dd.keyCode || dd.charCode;
        if (null === kd || void 0 === kd) return !1;
        if ("string" === typeof Jd) {
          var Wd;
          if (Wd = pd[Jd.toLowerCase()]) return Wd === kd;
          if (Wd = Nd[Jd.toLowerCase()]) return Wd === kd
        } else if ("number" === typeof Jd) return Jd === kd;
        return !1
      }
    };
    var pd = (Jd = dd.exports = kd).code = Jd.codes = {
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
      Nd = Jd.aliases = {
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
    for (Wd = 97; Wd < 123; Wd++) pd[String.fromCharCode(Wd)] = Wd - 32;
    for (var Wd = 48; Wd < 58; Wd++) pd[Wd - 48] = Wd;
    for (Wd = 1; Wd < 13; Wd++) pd["f" + Wd] = Wd + 111;
    for (Wd = 0; Wd < 10; Wd++) pd["numpad " + Wd] = Wd + 96;
    var Pd = Jd.names = Jd.title = {};
    for (Wd in pd) Pd[pd[Wd]] = Wd;
    for (var Zd in Nd) pd[Zd] = Nd[Zd]
  },
  36870: (dd, Jd, kd) => {
    kd.d(Jd, {
      e: () => Pd
    });
    var pd = kd(56);
    const Nd = pd.useLayoutEffect;
    const Wd = function(dd) {
      var Jd = (0, pd.useRef)(dd);
      return Nd((function() {
        Jd.current = dd
      })), Jd
    };
    var Pd = function(dd) {
      var Jd = Wd(dd);
      (0, pd.useEffect)((function() {
        var dd = function(dd) {
          var kd;
          if (null != Jd.current && (kd = Jd.current(dd)), dd.defaultPrevented && (dd.returnValue = ""), "string" === typeof kd) return dd.returnValue = kd, kd
        };
        return window.addEventListener("beforeunload", dd),
          function() {
            window.removeEventListener("beforeunload", dd)
          }
      }), [])
    }
  },
  36760: dd => {
    var Jd, kd = "undefined" !== typeof window ? window.navigator.userAgent : "",
      pd = /OS X/.test(kd),
      Nd = /Opera/.test(kd),
      Wd = !/like Gecko/.test(kd) && !Nd,
      Pd = dd.exports = {
        0: pd ? "<menu>" : "<UNK>",
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
        93: pd ? "<meta>" : "<menu>",
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
        173: pd && Wd ? "-" : "<volume-mute>",
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
        231: Nd ? "`" : "<unicode>",
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
    for (Jd = 58; Jd < 65; ++Jd) Pd[Jd] = String.fromCharCode(Jd);
    for (Jd = 48; Jd < 58; ++Jd) Pd[Jd] = Jd - 48 + "";
    for (Jd = 65; Jd < 91; ++Jd) Pd[Jd] = String.fromCharCode(Jd);
    for (Jd = 96; Jd < 106; ++Jd) Pd[Jd] = "<num-" + (Jd - 96) + ">";
    for (Jd = 112; Jd < 136; ++Jd) Pd[Jd] = "F" + (Jd - 111)
  },
  6534: (dd, Jd, kd) => {
    kd.d(Jd, {
      c: () => Nd,
      g: () => Wd
    });
    var pd = kd(33);
    const Nd = "shaderPack";
    async function Wd() {
      var dd;
      let Jd = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
      return null !== (dd = await pd.f.getItem(Nd, Jd)) && void 0 !== dd ? dd : null
    }
  },
  8835: (dd, Jd, kd) => {
    kd.d(Jd, {
      d: () => Wd,
      f: () => Nd
    });
    let pd = !1;

    function Nd() {
      pd = !0
    }

    function Wd() {
      return pd
    }
  },
  36615: (dd, Jd, kd) => {
    kd.r(Jd), kd.d(Jd, {
      InGameUi: () => Gd.b,
      LobbyLeaderboard: () => vd.e,
      loadCharacterCustomisationUI: () => xd,
      loadCharacterPreview: () => qd,
      matchmakeAndPlay: () => Md,
      setUpGame: () => Bd
    });
    var pd = kd(1266),
      Nd = kd(149),
      Wd = kd(22),
      Pd = kd(36618),
      Zd = kd(36623),
      gd = kd(1955),
      Cd = kd(36657);

    function Kd() {
      return !1 !== gd.b.get("canCustomiseChar")
    }
    let od = !1;
    var ld = kd(1348),
      Qd = kd(1273),
      Ld = kd(686),
      Od = kd(8835);
    var ed = kd(8832),
      Rd = kd(3451),
      Id = kd(1812);
    var Gd = kd(36667),
      vd = kd(37167);

    function xd() {
      return Promise.all([kd.e(282), kd.e(388)]).then((() => kd(41247)))
    }

    function qd() {
      return kd.e(283).then((() => kd(41253)))
    }

    function Bd() {
      return (0, ed.f)()
    }
    od || (od = !0, document.addEventListener("keydown", (dd => {
        (0, Cd.d)(dd, Kd)
      }))),
      function(dd) {
        var Jd;
        return !0 !== (null === dd || void 0 === dd ? void 0 : dd.saveData) && !/2g$/.test(null !== (Jd = null === dd || void 0 === dd ? void 0 : dd.effectiveType) && void 0 !== Jd ? Jd : "")
      }(navigator.connection) && (0, Ld.c)((() => {
        (0, Od.d)() || Promise.all([kd.e(75), kd.e(133), kd.e(88), kd.e(56)]).then((() => kd(40737))).then((dd => {
          (0, Od.d)() || dd.startLoadAheadOfJoin({
            joinStarted: Od.d,
            language: Qd.c.get().getCurrentLanguageCode()
          })
        }), (dd => {
          console.warn("[bloxd-wasm-client] the loads ahead of a join did not start: the join loads the client itself", dd)
        }))
      }));
    const sd = Wd.d.get("router");
    null === sd ? console.warn("[bloxd-wasm-client] no router as the matchmaking chunk loads: the join's loads start with the join") : function dd(Jd) {
      if ((0, Id.b)(Jd.state.location.pathname)) return void(0, ed.b)().catch((() => {}));
      const kd = Jd.subscribe((pd => {
        (0, Id.b)(pd.location.pathname) && (kd(), (0, Rd.d)().then((() => {
          dd(Jd)
        })))
      }))
    }(sd), (0, Pd.e)();
    const ad = (0, Zd.e)((async function(dd, Jd) {
      let {
        place: kd,
        userContext: Wd,
        direct: Pd,
        rematch: Zd
      } = dd;
      const gd = Pd ? 1 / 0 : performance.now();
      let Cd;
      try {
        Cd = await (0, ed.b)()
      } catch (Kd) {
        return console.error("The wasm client did not load:", Kd), (0, ld.r)({
          websocketUrl: null
        }), pd.b.errorWithCode(String(Kd), Nd.n.CONNECT_TO_GAME_SERVER, {
          error: Kd,
          severity: Jd.aborted ? "low" : "medium",
          CJ: Jd.aborted
        })
      }
      return Cd.playWasmGame({
        userContext: Wd,
        place: kd,
        matchedAt: gd,
        rematch: Zd
      }, Jd)
    }));

    function Md() {
      return (0, ed.b)().catch((() => {})), ad(...arguments)
    }
  },
  8832: (dd, Jd, kd) => {
    kd.d(Jd, {
      b: () => Kd,
      f: () => od
    });
    var pd = kd(3011),
      Nd = kd(2245),
      Wd = kd(3051),
      Pd = kd(4507),
      Zd = kd(3360),
      gd = kd(8835);
    let Cd = null;

    function Kd() {
      return Pd.b.cancelDownloadForJoin(), (0, Zd.e)(), (0, Nd.e)(), (0, gd.f)(), (0, Wd.i)(), Promise.all([kd.e(70), kd.e(73), kd.e(72), kd.e(71), kd.e(84), kd.e(261), kd.e(200), kd.e(218), kd.e(239), kd.e(213), kd.e(46)]).then((() => kd(40663))).catch((() => {})), Promise.all([kd.e(75), kd.e(133), kd.e(88), kd.e(56)]).then((() => kd(40737))).then((dd => {
        let {
          startJoinLoad: Jd
        } = dd;
        Jd()
      }), (() => {})), Cd ??= Promise.all([kd.e(72), kd.e(75), kd.e(130), kd.e(74), kd.e(133), kd.e(263), kd.e(187), kd.e(88), kd.e(87), kd.e(86), kd.e(213), kd.e(61)]).then((() => kd(40851))).then((dd => (dd.startWasmPlay(), dd.followPageUiPack((dd => {
        pd.d.showGamePack(dd)
      })), dd)), (dd => {
        throw Cd = null, dd
      })), Cd
    }

    function od() {
      return Promise.all([kd.e(72), kd.e(75), kd.e(130), kd.e(74), kd.e(133), kd.e(263), kd.e(187), kd.e(88), kd.e(87), kd.e(86), kd.e(213), kd.e(61)]).then((() => kd(40851))).then((dd => {
        dd.startWasmPreviews(), dd.prefetchWasmPreviews()
      }))
    }
  },
  9422: (dd, Jd, kd) => {
    kd.d(Jd, {
      d: () => Nd,
      h: () => Wd
    });
    var pd = kd(9383);
    const Nd = "Air",
      Wd = Object.freeze(new pd.f(Nd, 0, "", null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null))
  }
};
Object.freeze(modules);
for (const dd in modules) Object.freeze(modules[dd]);