/*! For license information please see dz8ef.wasmMatchmaking.868dc4fa.chunk.js.LICENSE.txt */
export const id = 63;
export const ids = [63];
export const modules = {
  36925: (uu, Eu) => {
    function ju(uu) {
      if (uu && "object" === typeof uu) {
        var Eu = uu.which || uu.keyCode || uu.charCode;
        Eu && (uu = Eu)
      }
      if ("number" === typeof uu) return Xu[uu];
      var ju, Zu = String(uu);
      return (ju = su[Zu.toLowerCase()]) ? ju : (ju = Uu[Zu.toLowerCase()]) || (1 === Zu.length ? Zu.charCodeAt(0) : void 0)
    }
    ju.isEventKey = function(uu, Eu) {
      if (uu && "object" === typeof uu) {
        var ju = uu.which || uu.keyCode || uu.charCode;
        if (null === ju || void 0 === ju) return !1;
        if ("string" === typeof Eu) {
          var Zu;
          if (Zu = su[Eu.toLowerCase()]) return Zu === ju;
          if (Zu = Uu[Eu.toLowerCase()]) return Zu === ju
        } else if ("number" === typeof Eu) return Eu === ju;
        return !1
      }
    };
    var su = (Eu = uu.exports = ju).code = Eu.codes = {
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
      Uu = Eu.aliases = {
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
    for (Zu = 97; Zu < 123; Zu++) su[String.fromCharCode(Zu)] = Zu - 32;
    for (var Zu = 48; Zu < 58; Zu++) su[Zu - 48] = Zu;
    for (Zu = 1; Zu < 13; Zu++) su["f" + Zu] = Zu + 111;
    for (Zu = 0; Zu < 10; Zu++) su["numpad " + Zu] = Zu + 96;
    var Xu = Eu.names = Eu.title = {};
    for (Zu in su) Xu[su[Zu]] = Zu;
    for (var lu in Uu) su[lu] = Uu[lu]
  },
  37080: (uu, Eu, ju) => {
    ju.d(Eu, {
      d: () => Xu
    });
    var su = ju(58);
    const Uu = su.useLayoutEffect;
    const Zu = function(uu) {
      var Eu = (0, su.useRef)(uu);
      return Uu((function() {
        Eu.current = uu
      })), Eu
    };
    var Xu = function(uu) {
      var Eu = Zu(uu);
      (0, su.useEffect)((function() {
        var uu = function(uu) {
          var ju;
          if (null != Eu.current && (ju = Eu.current(uu)), uu.defaultPrevented && (uu.returnValue = ""), "string" === typeof ju) return uu.returnValue = ju, ju
        };
        return window.addEventListener("beforeunload", uu),
          function() {
            window.removeEventListener("beforeunload", uu)
          }
      }), [])
    }
  },
  36973: uu => {
    var Eu, ju = "undefined" !== typeof window ? window.navigator.userAgent : "",
      su = /OS X/.test(ju),
      Uu = /Opera/.test(ju),
      Zu = !/like Gecko/.test(ju) && !Uu,
      Xu = uu.exports = {
        0: su ? "<menu>" : "<UNK>",
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
        93: su ? "<meta>" : "<menu>",
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
        173: su && Zu ? "-" : "<volume-mute>",
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
        231: Uu ? "`" : "<unicode>",
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
    for (Eu = 58; Eu < 65; ++Eu) Xu[Eu] = String.fromCharCode(Eu);
    for (Eu = 48; Eu < 58; ++Eu) Xu[Eu] = Eu - 48 + "";
    for (Eu = 65; Eu < 91; ++Eu) Xu[Eu] = String.fromCharCode(Eu);
    for (Eu = 96; Eu < 106; ++Eu) Xu[Eu] = "<num-" + (Eu - 96) + ">";
    for (Eu = 112; Eu < 136; ++Eu) Xu[Eu] = "F" + (Eu - 111)
  },
  9136: (uu, Eu, ju) => {
    ju.d(Eu, {
      d: () => Zu,
      h: () => Uu
    });
    let su = !1;

    function Uu() {
      su = !0
    }

    function Zu() {
      return su
    }
  },
  36832: (uu, Eu, ju) => {
    ju.r(Eu), ju.d(Eu, {
      InGameUi: () => Gu.d,
      LobbyLeaderboard: () => pu.d,
      loadCharacterCustomisationUI: () => wu,
      loadCharacterPreview: () => Ju,
      matchmakeAndPlay: () => ou,
      matchmakeForAhead: () => lu.g,
      setUpGame: () => du
    });
    var su = ju(1301),
      Uu = ju(166),
      Zu = ju(22),
      Xu = ju(36840),
      lu = ju(36845),
      qu = ju(2011),
      fu = ju(36873);

    function Cu() {
      return !1 !== qu.e.get("canCustomiseChar")
    }
    let bu = !1;
    var cu = ju(1369),
      Nu = ju(1303),
      Ou = ju(257),
      Yu = ju(3774),
      hu = ju(9136),
      Du = ju(9130);

    function gu() {
      (0, hu.d)() || (0, Du.d)().catch((uu => {
        console.warn("[bloxd-wasm-client] the play chunk did not load ahead of a join: the join loads it itself", uu)
      }))
    }
    var Mu = ju(3634),
      eu = ju(1807);
    var Gu = ju(36882),
      pu = ju(37406);

    function wu() {
      return ju.e(220).then((() => ju(41513)))
    }

    function Ju() {
      return ju.e(296).then((() => ju(41520)))
    }

    function du() {
      return (0, Du.k)()
    }
    bu || (bu = !0, document.addEventListener("keydown", (uu => {
        (0, fu.b)(uu, Cu)
      }))),
      function(uu) {
        var Eu;
        return !0 !== (null === uu || void 0 === uu ? void 0 : uu.saveData) && !/2g$/.test(null !== (Eu = null === uu || void 0 === uu ? void 0 : uu.effectiveType) && void 0 !== Eu ? Eu : "")
      }(navigator.connection) && (0, Yu.e)((() => {
        (0, hu.d)() || Promise.all([ju.e(78), ju.e(90), ju.e(215), ju.e(214), ju.e(137), ju.e(140), ju.e(59)]).then((() => ju(41269))).then((async uu => {
          (0, hu.d)() || (await uu.startLoadAheadOfJoin({
            joinStarted: hu.d,
            language: Nu.h.get().getCurrentLanguageCode()
          }), (0, Ou.b)(gu))
        }), (uu => {
          console.warn("[bloxd-wasm-client] the loads ahead of a join did not start: the join loads the client itself", uu)
        }))
      }));
    const au = Zu.d.get("router");
    null === au ? console.warn("[bloxd-wasm-client] no router as the matchmaking chunk loads: the join's loads start with the join") : function uu(Eu) {
      if ((0, eu.c)(Eu.state.location.pathname)) return void(0, Du.g)().catch((() => {}));
      const ju = Eu.subscribe((su => {
        (0, eu.c)(su.location.pathname) && (ju(), (0, Mu.e)().then((() => {
          uu(Eu)
        })))
      }))
    }(au), (0, Xu.d)();
    const Pu = (0, lu.e)((async function(uu, Eu) {
      let {
        place: ju,
        userContext: Zu,
        direct: Xu,
        matchedAt: lu,
        rematch: qu
      } = uu;
      const fu = Xu ? 1 / 0 : lu;
      let Cu;
      try {
        Cu = await (0, Du.g)()
      } catch (bu) {
        return console.error("The wasm client did not load:", bu), (0, cu.m)({
          websocketUrl: null
        }), su.c.errorWithCode(String(bu), Uu.j.CONNECT_TO_GAME_SERVER, {
          error: bu,
          severity: Eu.aborted ? "low" : "medium",
          Lj: Eu.aborted
        })
      }
      return Cu.playWasmGame({
        userContext: Zu,
        place: ju,
        matchedAt: fu,
        rematch: qu
      }, Eu)
    }));

    function ou() {
      return (0, Du.g)().catch((() => {})), Pu(...arguments)
    }
  },
  9130: (uu, Eu, ju) => {
    ju.d(Eu, {
      d: () => Nu,
      g: () => cu,
      k: () => Ou
    });
    var su = ju(3336),
      Uu = ju(2401),
      Zu = ju(2222),
      Xu = ju(4830),
      lu = ju(3691),
      qu = ju(9136);
    let fu = null;

    function Cu() {
      return Promise.all([ju.e(75), ju.e(78), ju.e(90), ju.e(215), ju.e(214), ju.e(160), ju.e(137), ju.e(198), ju.e(140), ju.e(88), ju.e(275), ju.e(64)]).then((() => ju(40930)))
    }

    function bu() {
      Promise.all([ju.e(73), ju.e(76), ju.e(75), ju.e(74), ju.e(90), ju.e(87), ju.e(273), ju.e(191), ju.e(228), ju.e(252), ju.e(275), ju.e(47)]).then((() => ju(41221))).catch((() => {}))
    }

    function cu() {
      return Xu.e.cancelDownloadForJoin(), (0, lu.e)(), (0, Uu.e)(), (0, qu.h)(), (0, Zu.j)(), bu(), Promise.all([ju.e(78), ju.e(90), ju.e(215), ju.e(214), ju.e(137), ju.e(140), ju.e(59)]).then((() => ju(41269))).then((uu => {
        let {
          startJoinLoad: Eu
        } = uu;
        Eu()
      }), (() => {})), fu ??= Cu().then((uu => (uu.startWasmPlay(), uu.followPageUiPack((uu => {
        su.d.showGamePack(uu)
      })), uu)), (uu => {
        throw fu = null, uu
      })), fu
    }

    function Nu() {
      return bu(), ju.e(276).then((() => ju(41276))).catch((() => {})), Cu().then((() => {}))
    }

    function Ou() {
      return Cu().then((uu => {
        uu.startWasmPreviews(), uu.prefetchWasmPreviews()
      }))
    }
  },
  36856: (uu, Eu, ju) => {
    ju.d(Eu, {
      c: () => cu,
      d: () => Cu,
      f: () => Nu,
      g: () => bu
    });
    var su = ju(349),
      Uu = ju(692),
      Zu = ju(709),
      Xu = ju(31);
    const lu = {
        idStorageKey: "playSessionId",
        lastActivityStorageKey: "playSessionLastActivityMs",
        expiryMs: 3e5
      },
      qu = "playSessionGameNameWithVariation",
      fu = "wasMatchmakePlayer";

    function Cu() {
      let uu = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Xu.l;
      (0, Zu.j)(uu, lu)
    }

    function bu() {
      (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Xu.l).setItem(fu, !0)
    }

    function cu() {
      let uu = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Xu.l;
      return (0, Zu.c)(uu, lu)
    }

    function Nu(uu) {
      let Eu = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Xu.l;
      const ju = (0, Zu.c)(Eu, lu),
        Cu = function(uu) {
          const Eu = uu.getItem(qu);
          return "string" !== typeof Eu ? null : Eu
        }(Eu),
        bu = function() {
          return !0 === (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Xu.l).getItem(fu)
        }(Eu);
      let cu;
      return cu = null !== ju && null !== Cu && (0, Zu.g)(Eu, lu) && function(uu, Eu, ju) {
          const Uu = (0, su.Vb)(uu),
            Zu = (0, su.Vb)(Eu),
            Xu = (0, su.Qb)(uu),
            lu = (0, su.Qb)(Eu);
          return !(Uu !== Zu || !ju) || Uu === Zu && Xu === lu
        }(Cu, uu, bu) ? ju : (0, Uu.e)(), (0, Zu.m)(Eu, lu, cu), Eu.setItem(qu, uu),
        function() {
          (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Xu.l).removeItem(fu)
        }(Eu), cu
    }
  },
  36850: (uu, Eu, ju) => {
    ju.d(Eu, {
      c: () => Gu,
      f: () => pu
    });
    var su = ju(1069),
      Uu = ju(207),
      Zu = ju(345),
      Xu = ju(656),
      lu = ju(349),
      qu = ju(1072),
      fu = ju(680),
      Cu = ju(719),
      bu = ju(4709),
      cu = ju(91),
      Nu = ju(131),
      Ou = ju(1779),
      Yu = ju(107),
      hu = ju(36856),
      Du = ju(31),
      gu = ju(701),
      Mu = ju(663),
      eu = ju(36860);

    function Gu() {
      var uu, Eu;
      return [...null !== (uu = navigator.languages) && void 0 !== uu ? uu : [null !== (Eu = navigator.language) && void 0 !== Eu ? Eu : "none"], "en-Gb"]
    }

    function pu(uu, Eu, ju, pu, wu) {
      const Ju = (0, su.l)(Eu) ? (0, su.q)(Eu) : null,
        du = uu.isLoggedIn() && void 0 !== (0, Uu.c)(Zu.q, Nu.siteUsed) ? (0, Mu.h)() : null,
        au = {
          cookies: (0, Ou.getAllCookiesForGameNameWithVariation)(Eu),
          isMobile: (0, cu.isMobile)(),
          isUsingCustomGameTexturePack: null !== Ju && wu(Ju),
          generalCookies: {
            joinDiscord: !!Du.k.getItem("DiscordPressed"),
            newGo: bu.e,
            ...uu.getMetricsCookies(),
            trafficCode: pu,
            compliance: cu.compliance
          },
          browserInfo: {
            ua: window.navigator.userAgent,
            name: (0, cu.getBrowserName)(),
            version: (0, cu.getBrowserVersion)(),
            platform: navigator.platform,
            platformType: (0, cu.getPlatformType)(),
            deviceType: (0, Yu.c)()
          },
          isLoggedIn: uu.isLoggedIn(),
          lobbyName: ju,
          languages: Gu(),
          version: Xu.b,
          siteUsed: Nu.siteUsed,
          subsiteUsed: Nu.subsiteUsed,
          playSessionId: (0, hu.f)(Eu),
          visitSessionId: (0, gu.f)(),
          clientReason: fu.r.reason,
          budgetBasis: (0, eu.h)(),
          ...null !== Cu.s && {
            diagClaim: Cu.s.claimId
          },
          ...null !== du && {
            webGpuLoss: du
          }
        };
      return null !== Ju && (0, lu.Ic)(Ju) ? (au.lobbyName = (0, su.h)(Ju, (0, su.m)(Eu), ju), {
        roomName: `classic_${qu.f}`,
        joinOptions: au
      }) : {
        roomName: Eu,
        joinOptions: au
      }
    }
  },
  9505: (uu, Eu, ju) => {
    ju.d(Eu, {
      c: () => Uu,
      g: () => Zu
    });
    var su = ju(9456);
    const Uu = "Air",
      Zu = Object.freeze(new su.h(Uu, 0, "", null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null))
  }
};
Object.freeze(modules);
for (const uu in modules) Object.freeze(modules[uu]);