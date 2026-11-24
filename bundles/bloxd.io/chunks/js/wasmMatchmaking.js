/*! For license information please see igzsf.wasmMatchmaking.7634980f.chunk.js.LICENSE.txt */
export const id = 63;
export const ids = [63];
export const modules = {
  36785: (tt, et) => {
    function Vt(tt) {
      if (tt && "object" === typeof tt) {
        var et = tt.which || tt.keyCode || tt.charCode;
        et && (tt = et)
      }
      if ("number" === typeof tt) return mt[tt];
      var Vt, Dt = String(tt);
      return (Vt = Ot[Dt.toLowerCase()]) ? Vt : (Vt = qt[Dt.toLowerCase()]) || (1 === Dt.length ? Dt.charCodeAt(0) : void 0)
    }
    Vt.isEventKey = function(tt, et) {
      if (tt && "object" === typeof tt) {
        var Vt = tt.which || tt.keyCode || tt.charCode;
        if (null === Vt || void 0 === Vt) return !1;
        if ("string" === typeof et) {
          var Dt;
          if (Dt = Ot[et.toLowerCase()]) return Dt === Vt;
          if (Dt = qt[et.toLowerCase()]) return Dt === Vt
        } else if ("number" === typeof et) return et === Vt;
        return !1
      }
    };
    var Ot = (et = tt.exports = Vt).code = et.codes = {
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
      qt = et.aliases = {
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
    for (Dt = 97; Dt < 123; Dt++) Ot[String.fromCharCode(Dt)] = Dt - 32;
    for (var Dt = 48; Dt < 58; Dt++) Ot[Dt - 48] = Dt;
    for (Dt = 1; Dt < 13; Dt++) Ot["f" + Dt] = Dt + 111;
    for (Dt = 0; Dt < 10; Dt++) Ot["numpad " + Dt] = Dt + 96;
    var mt = et.names = et.title = {};
    for (Dt in Ot) mt[Ot[Dt]] = Dt;
    for (var dt in qt) Ot[dt] = qt[dt]
  },
  36950: (tt, et, Vt) => {
    Vt.d(et, {
      d: () => mt
    });
    var Ot = Vt(63);
    const qt = Ot.useLayoutEffect;
    const Dt = function(tt) {
      var et = (0, Ot.useRef)(tt);
      return qt((function() {
        et.current = tt
      })), et
    };
    var mt = function(tt) {
      var et = Dt(tt);
      (0, Ot.useEffect)((function() {
        var tt = function(tt) {
          var Vt;
          if (null != et.current && (Vt = et.current(tt)), tt.defaultPrevented && (tt.returnValue = ""), "string" === typeof Vt) return tt.returnValue = Vt, Vt
        };
        return window.addEventListener("beforeunload", tt),
          function() {
            window.removeEventListener("beforeunload", tt)
          }
      }), [])
    }
  },
  36830: tt => {
    var et, Vt = "undefined" !== typeof window ? window.navigator.userAgent : "",
      Ot = /OS X/.test(Vt),
      qt = /Opera/.test(Vt),
      Dt = !/like Gecko/.test(Vt) && !qt,
      mt = tt.exports = {
        0: Ot ? "<menu>" : "<UNK>",
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
        93: Ot ? "<meta>" : "<menu>",
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
        173: Ot && Dt ? "-" : "<volume-mute>",
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
        231: qt ? "`" : "<unicode>",
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
    for (et = 58; et < 65; ++et) mt[et] = String.fromCharCode(et);
    for (et = 48; et < 58; ++et) mt[et] = et - 48 + "";
    for (et = 65; et < 91; ++et) mt[et] = String.fromCharCode(et);
    for (et = 96; et < 106; ++et) mt[et] = "<num-" + (et - 96) + ">";
    for (et = 112; et < 136; ++et) mt[et] = "F" + (et - 111)
  },
  9140: (tt, et, Vt) => {
    Vt.d(et, {
      c: () => Dt,
      d: () => qt
    });
    let Ot = !1;

    function qt() {
      Ot = !0
    }

    function Dt() {
      return Ot
    }
  },
  36693: (tt, et, Vt) => {
    Vt.r(et), Vt.d(et, {
      InGameUi: () => Ct.d,
      LobbyLeaderboard: () => ut.b,
      loadCharacterCustomisationUI: () => Kt,
      loadCharacterPreview: () => ht,
      matchmakeAndPlay: () => ct,
      matchmakeForAhead: () => dt.f,
      setUpGame: () => vt
    });
    var Ot = Vt(1333),
      qt = Vt(184),
      Dt = Vt(26),
      mt = Vt(36695),
      dt = Vt(36697),
      jt = Vt(2043),
      Ht = Vt(36742);

    function Xt() {
      return !1 !== jt.b.get("canCustomiseChar")
    }
    let Qt = !1;
    var lt = Vt(1423),
      Et = Vt(1338),
      ft = Vt(287),
      wt = Vt(3643),
      yt = Vt(9140),
      Nt = Vt(9138);

    function Mt() {
      (0, yt.c)() || (0, Nt.b)().catch((tt => {
        console.warn("[bloxd-wasm-client] the play chunk did not load ahead of a join: the join loads it itself", tt)
      }))
    }
    var bt = Vt(3510),
      Jt = Vt(1849);
    var Ct = Vt(36753),
      ut = Vt(37247);

    function Kt() {
      return Vt.e(220).then((() => Vt(41508)))
    }

    function ht() {
      return Vt.e(296).then((() => Vt(41510)))
    }

    function vt() {
      return (0, Nt.f)()
    }
    Qt || (Qt = !0, document.addEventListener("keydown", (tt => {
        (0, Ht.b)(tt, Xt)
      }))),
      function(tt) {
        var et;
        return !0 !== (null === tt || void 0 === tt ? void 0 : tt.saveData) && !/2g$/.test(null !== (et = null === tt || void 0 === tt ? void 0 : tt.effectiveType) && void 0 !== et ? et : "")
      }(navigator.connection) && (0, wt.e)((() => {
        (0, yt.c)() || Promise.all([Vt.e(78), Vt.e(90), Vt.e(215), Vt.e(214), Vt.e(137), Vt.e(140), Vt.e(59)]).then((() => Vt(41248))).then((async tt => {
          (0, yt.c)() || (await tt.startLoadAheadOfJoin({
            joinStarted: yt.c,
            language: Et.e.get().getCurrentLanguageCode()
          }), (0, ft.c)(Mt))
        }), (tt => {
          console.warn("[bloxd-wasm-client] the loads ahead of a join did not start: the join loads the client itself", tt)
        }))
      }));
    const Wt = Dt.b.get("router");
    null === Wt ? console.warn("[bloxd-wasm-client] no router as the matchmaking chunk loads: the join's loads start with the join") : function tt(et) {
      if ((0, Jt.b)(et.state.location.pathname)) return void(0, Nt.d)().catch((() => {}));
      const Vt = et.subscribe((Ot => {
        (0, Jt.b)(Ot.location.pathname) && (Vt(), (0, bt.e)().then((() => {
          tt(et)
        })))
      }))
    }(Wt), (0, mt.e)();
    const St = (0, dt.d)((async function(tt, et) {
      let {
        place: Vt,
        userContext: Dt,
        direct: mt,
        matchedAt: dt,
        rematch: jt
      } = tt;
      const Ht = mt ? 1 / 0 : dt;
      let Xt;
      try {
        Xt = await (0, Nt.d)()
      } catch (Qt) {
        return console.error("The wasm client did not load:", Qt), (0, lt.o)({
          websocketUrl: null
        }), Ot.e.errorWithCode(String(Qt), qt.n.CONNECT_TO_GAME_SERVER, {
          error: Qt,
          severity: et.aborted ? "low" : "medium",
          nV: et.aborted
        })
      }
      return Xt.playWasmGame({
        userContext: Dt,
        place: Vt,
        matchedAt: Ht,
        rematch: jt
      }, et)
    }));

    function ct() {
      return (0, Nt.d)().catch((() => {})), St(...arguments)
    }
  },
  9138: (tt, et, Vt) => {
    Vt.d(et, {
      b: () => Et,
      d: () => lt,
      f: () => ft
    });
    var Ot = Vt(3217),
      qt = Vt(2331),
      Dt = Vt(2208),
      mt = Vt(4791),
      dt = Vt(3564),
      jt = Vt(9140);
    let Ht = null;

    function Xt() {
      return Promise.all([Vt.e(75), Vt.e(78), Vt.e(90), Vt.e(215), Vt.e(214), Vt.e(160), Vt.e(137), Vt.e(198), Vt.e(140), Vt.e(88), Vt.e(275), Vt.e(64)]).then((() => Vt(40874)))
    }

    function Qt() {
      Promise.all([Vt.e(73), Vt.e(76), Vt.e(75), Vt.e(74), Vt.e(90), Vt.e(87), Vt.e(273), Vt.e(191), Vt.e(228), Vt.e(252), Vt.e(275), Vt.e(47)]).then((() => Vt(41197))).catch((() => {}))
    }

    function lt() {
      return mt.d.cancelDownloadForJoin(), (0, dt.c)(), (0, qt.f)(), (0, jt.d)(), (0, Dt.h)(), Qt(), Promise.all([Vt.e(78), Vt.e(90), Vt.e(215), Vt.e(214), Vt.e(137), Vt.e(140), Vt.e(59)]).then((() => Vt(41248))).then((tt => {
        let {
          startJoinLoad: et
        } = tt;
        et()
      }), (() => {})), Ht ??= Xt().then((tt => (tt.startWasmPlay(), tt.followPageUiPack((tt => {
        Ot.e.showGamePack(tt)
      })), tt)), (tt => {
        throw Ht = null, tt
      })), Ht
    }

    function Et() {
      return Qt(), Vt.e(276).then((() => Vt(41257))).catch((() => {})), Xt().then((() => {}))
    }

    function ft() {
      return Xt().then((tt => {
        tt.startWasmPreviews(), tt.prefetchWasmPreviews()
      }))
    }
  },
  36709: (tt, et, Vt) => {
    Vt.d(et, {
      b: () => lt,
      d: () => Xt,
      f: () => Et,
      j: () => Qt
    });
    var Ot = Vt(391),
      qt = Vt(736),
      Dt = Vt(741),
      mt = Vt(39);
    const dt = {
        idStorageKey: "playSessionId",
        lastActivityStorageKey: "playSessionLastActivityMs",
        expiryMs: 3e5
      },
      jt = "playSessionGameNameWithVariation",
      Ht = "wasMatchmakePlayer";

    function Xt() {
      let tt = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : mt.h;
      (0, Dt.h)(tt, dt)
    }

    function Qt() {
      (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : mt.h).setItem(Ht, !0)
    }

    function lt() {
      let tt = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : mt.h;
      return (0, Dt.d)(tt, dt)
    }

    function Et(tt) {
      let et = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : mt.h;
      const Vt = (0, Dt.d)(et, dt),
        Xt = function(tt) {
          const et = tt.getItem(jt);
          return "string" !== typeof et ? null : et
        }(et),
        Qt = function() {
          return !0 === (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : mt.h).getItem(Ht)
        }(et);
      let lt;
      return lt = null !== Vt && null !== Xt && (0, Dt.g)(et, dt) && function(tt, et, Vt) {
          const qt = (0, Ot.bc)(tt),
            Dt = (0, Ot.bc)(et),
            mt = (0, Ot.Wb)(tt),
            dt = (0, Ot.Wb)(et);
          return !(qt !== Dt || !Vt) || qt === Dt && mt === dt
        }(Xt, tt, Qt) ? Vt : (0, qt.b)(), (0, Dt.k)(et, dt, lt), et.setItem(jt, tt),
        function() {
          (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : mt.h).removeItem(Ht)
        }(et), lt
    }
  },
  36701: (tt, et, Vt) => {
    Vt.d(et, {
      d: () => Ct,
      e: () => ut
    });
    var Ot = Vt(1103),
      qt = Vt(241),
      Dt = Vt(388),
      mt = Vt(712),
      dt = Vt(391),
      jt = Vt(1109),
      Ht = Vt(725),
      Xt = Vt(757),
      Qt = Vt(4655),
      lt = Vt(106),
      Et = Vt(153),
      ft = Vt(1826),
      wt = Vt(129),
      yt = Vt(36709),
      Nt = Vt(39),
      Mt = Vt(738),
      bt = Vt(717),
      Jt = Vt(36715);

    function Ct() {
      var tt, et;
      return [...null !== (tt = navigator.languages) && void 0 !== tt ? tt : [null !== (et = navigator.language) && void 0 !== et ? et : "none"], "en-Gb"]
    }

    function ut(tt, et, Vt, ut, Kt) {
      const ht = (0, Ot.k)(et) ? (0, Ot.p)(et) : null,
        vt = tt.isLoggedIn() && void 0 !== (0, qt.c)(Dt.j, Et.siteUsed) ? (0, bt.g)() : null,
        Wt = {
          cookies: (0, ft.getAllCookiesForGameNameWithVariation)(et),
          isMobile: (0, lt.isMobile)(),
          isUsingCustomGameTexturePack: null !== ht && Kt(ht),
          generalCookies: {
            joinDiscord: !!Nt.e.getItem("DiscordPressed"),
            newGo: Qt.d,
            ...tt.getMetricsCookies(),
            trafficCode: ut,
            compliance: lt.compliance
          },
          browserInfo: {
            ua: window.navigator.userAgent,
            name: (0, lt.getBrowserName)(),
            version: (0, lt.getBrowserVersion)(),
            platform: navigator.platform,
            platformType: (0, lt.getPlatformType)(),
            deviceType: (0, wt.d)()
          },
          isLoggedIn: tt.isLoggedIn(),
          lobbyName: Vt,
          languages: Ct(),
          version: mt.d,
          siteUsed: Et.siteUsed,
          subsiteUsed: Et.subsiteUsed,
          playSessionId: (0, yt.f)(et),
          visitSessionId: (0, Mt.e)(),
          clientReason: Ht.u.reason,
          budgetBasis: (0, Jt.g)(),
          ...null !== Xt.p && {
            diagClaim: Xt.p.claimId
          },
          ...null !== vt && {
            webGpuLoss: vt
          }
        };
      return null !== ht && (0, dt.Jc)(ht) ? (Wt.lobbyName = (0, Ot.i)(ht, (0, Ot.o)(et), Vt), {
        roomName: `classic_${jt.f}`,
        joinOptions: Wt
      }) : {
        roomName: et,
        joinOptions: Wt
      }
    }
  },
  9512: (tt, et, Vt) => {
    Vt.d(et, {
      c: () => qt,
      e: () => Dt
    });
    var Ot = Vt(9466);
    const qt = "Air",
      Dt = Object.freeze(new Ot.d(qt, 0, "", null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null))
  }
};
Object.freeze(modules);
for (const tt in modules) Object.freeze(modules[tt]);