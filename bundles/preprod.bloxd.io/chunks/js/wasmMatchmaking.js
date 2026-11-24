/*! For license information please see sn3sfj.wasmMatchmaking.6f5d7650.chunk.js.LICENSE.txt */
export const id = 63;
export const ids = [63];
export const modules = {
  36730: (pp, ip) => {
    function cp(pp) {
      if (pp && "object" === typeof pp) {
        var ip = pp.which || pp.keyCode || pp.charCode;
        ip && (pp = ip)
      }
      if ("number" === typeof pp) return Sp[pp];
      var cp, Ip = String(pp);
      return (cp = Op[Ip.toLowerCase()]) ? cp : (cp = op[Ip.toLowerCase()]) || (1 === Ip.length ? Ip.charCodeAt(0) : void 0)
    }
    cp.isEventKey = function(pp, ip) {
      if (pp && "object" === typeof pp) {
        var cp = pp.which || pp.keyCode || pp.charCode;
        if (null === cp || void 0 === cp) return !1;
        if ("string" === typeof ip) {
          var Ip;
          if (Ip = Op[ip.toLowerCase()]) return Ip === cp;
          if (Ip = op[ip.toLowerCase()]) return Ip === cp
        } else if ("number" === typeof ip) return ip === cp;
        return !1
      }
    };
    var Op = (ip = pp.exports = cp).code = ip.codes = {
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
      op = ip.aliases = {
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
    for (Ip = 97; Ip < 123; Ip++) Op[String.fromCharCode(Ip)] = Ip - 32;
    for (var Ip = 48; Ip < 58; Ip++) Op[Ip - 48] = Ip;
    for (Ip = 1; Ip < 13; Ip++) Op["f" + Ip] = Ip + 111;
    for (Ip = 0; Ip < 10; Ip++) Op["numpad " + Ip] = Ip + 96;
    var Sp = ip.names = ip.title = {};
    for (Ip in Op) Sp[Op[Ip]] = Ip;
    for (var xp in op) Op[xp] = op[xp]
  },
  36887: (pp, ip, cp) => {
    cp.d(ip, {
      c: () => Sp
    });
    var Op = cp(62);
    const op = Op.useLayoutEffect;
    const Ip = function(pp) {
      var ip = (0, Op.useRef)(pp);
      return op((function() {
        ip.current = pp
      })), ip
    };
    var Sp = function(pp) {
      var ip = Ip(pp);
      (0, Op.useEffect)((function() {
        var pp = function(pp) {
          var cp;
          if (null != ip.current && (cp = ip.current(pp)), pp.defaultPrevented && (pp.returnValue = ""), "string" === typeof cp) return pp.returnValue = cp, cp
        };
        return window.addEventListener("beforeunload", pp),
          function() {
            window.removeEventListener("beforeunload", pp)
          }
      }), [])
    }
  },
  36772: pp => {
    var ip, cp = "undefined" !== typeof window ? window.navigator.userAgent : "",
      Op = /OS X/.test(cp),
      op = /Opera/.test(cp),
      Ip = !/like Gecko/.test(cp) && !op,
      Sp = pp.exports = {
        0: Op ? "<menu>" : "<UNK>",
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
        93: Op ? "<meta>" : "<menu>",
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
        173: Op && Ip ? "-" : "<volume-mute>",
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
        231: op ? "`" : "<unicode>",
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
    for (ip = 58; ip < 65; ++ip) Sp[ip] = String.fromCharCode(ip);
    for (ip = 48; ip < 58; ++ip) Sp[ip] = ip - 48 + "";
    for (ip = 65; ip < 91; ++ip) Sp[ip] = String.fromCharCode(ip);
    for (ip = 96; ip < 106; ++ip) Sp[ip] = "<num-" + (ip - 96) + ">";
    for (ip = 112; ip < 136; ++ip) Sp[ip] = "F" + (ip - 111)
  },
  9046: (pp, ip, cp) => {
    cp.d(ip, {
      c: () => Ip,
      g: () => op
    });
    let Op = !1;

    function op() {
      Op = !0
    }

    function Ip() {
      return Op
    }
  },
  36658: (pp, ip, cp) => {
    cp.r(ip), cp.d(ip, {
      InGameUi: () => ep.d,
      LobbyLeaderboard: () => jp.c,
      loadCharacterCustomisationUI: () => kp,
      loadCharacterPreview: () => mp,
      matchmakeAndPlay: () => Cp,
      matchmakeForAhead: () => xp.e,
      setUpGame: () => Rp
    });
    var Op = cp(1255),
      op = cp(156),
      Ip = cp(25),
      Sp = cp(36663),
      xp = cp(36669),
      Lp = cp(1982),
      Yp = cp(36691);

    function Dp() {
      return !1 !== Lp.c.get("canCustomiseChar")
    }
    let Ap = !1;
    var Pp = cp(1349),
      Wp = cp(1260),
      yp = cp(249),
      Up = cp(3668),
      wp = cp(9046),
      vp = cp(9041);

    function tp() {
      (0, wp.c)() || (0, vp.e)().catch((pp => {
        console.warn("[bloxd-wasm-client] the play chunk did not load ahead of a join: the join loads it itself", pp)
      }))
    }
    var Hp = cp(3546),
      dp = cp(1786);
    var ep = cp(36695),
      jp = cp(37220);

    function kp() {
      return cp.e(220).then((() => cp(41517)))
    }

    function mp() {
      return cp.e(296).then((() => cp(41524)))
    }

    function Rp() {
      return (0, vp.j)()
    }
    Ap || (Ap = !0, document.addEventListener("keydown", (pp => {
        (0, Yp.b)(pp, Dp)
      }))),
      function(pp) {
        var ip;
        return !0 !== (null === pp || void 0 === pp ? void 0 : pp.saveData) && !/2g$/.test(null !== (ip = null === pp || void 0 === pp ? void 0 : pp.effectiveType) && void 0 !== ip ? ip : "")
      }(navigator.connection) && (0, Up.b)((() => {
        (0, wp.c)() || Promise.all([cp.e(78), cp.e(90), cp.e(215), cp.e(214), cp.e(137), cp.e(140), cp.e(59)]).then((() => cp(41270))).then((async pp => {
          (0, wp.c)() || (await pp.startLoadAheadOfJoin({
            joinStarted: wp.c,
            language: Wp.g.get().getCurrentLanguageCode()
          }), (0, yp.b)(tp))
        }), (pp => {
          console.warn("[bloxd-wasm-client] the loads ahead of a join did not start: the join loads the client itself", pp)
        }))
      }));
    const qp = Ip.c.get("router");
    null === qp ? console.warn("[bloxd-wasm-client] no router as the matchmaking chunk loads: the join's loads start with the join") : function pp(ip) {
      if ((0, dp.d)(ip.state.location.pathname)) return void(0, vp.f)().catch((() => {}));
      const cp = ip.subscribe((Op => {
        (0, dp.d)(Op.location.pathname) && (cp(), (0, Hp.h)().then((() => {
          pp(ip)
        })))
      }))
    }(qp), (0, Sp.c)();
    const Mp = (0, xp.d)((async function(pp, ip) {
      let {
        place: cp,
        userContext: Ip,
        direct: Sp,
        matchedAt: xp,
        rematch: Lp
      } = pp;
      const Yp = Sp ? 1 / 0 : xp;
      let Dp;
      try {
        Dp = await (0, vp.f)()
      } catch (Ap) {
        return console.error("The wasm client did not load:", Ap), (0, Pp.p)({
          websocketUrl: null
        }), Op.d.errorWithCode(String(Ap), op.k.CONNECT_TO_GAME_SERVER, {
          error: Ap,
          severity: ip.aborted ? "low" : "medium",
          OO: ip.aborted
        })
      }
      return Dp.playWasmGame({
        userContext: Ip,
        place: cp,
        matchedAt: Yp,
        rematch: Lp
      }, ip)
    }));

    function Cp() {
      return (0, vp.f)().catch((() => {})), Mp(...arguments)
    }
  },
  9041: (pp, ip, cp) => {
    cp.d(ip, {
      e: () => Wp,
      f: () => Pp,
      j: () => yp
    });
    var Op = cp(3246),
      op = cp(2343),
      Ip = cp(2174),
      Sp = cp(4739),
      xp = cp(3607),
      Lp = cp(9046);
    let Yp = null;

    function Dp() {
      return Promise.all([cp.e(75), cp.e(78), cp.e(90), cp.e(215), cp.e(214), cp.e(160), cp.e(137), cp.e(198), cp.e(140), cp.e(88), cp.e(275), cp.e(64)]).then((() => cp(40873)))
    }

    function Ap() {
      Promise.all([cp.e(73), cp.e(76), cp.e(75), cp.e(74), cp.e(90), cp.e(87), cp.e(273), cp.e(191), cp.e(228), cp.e(252), cp.e(275), cp.e(47)]).then((() => cp(41212))).catch((() => {}))
    }

    function Pp() {
      return Sp.b.cancelDownloadForJoin(), (0, xp.c)(), (0, op.e)(), (0, Lp.g)(), (0, Ip.j)(), Ap(), Promise.all([cp.e(78), cp.e(90), cp.e(215), cp.e(214), cp.e(137), cp.e(140), cp.e(59)]).then((() => cp(41270))).then((pp => {
        let {
          startJoinLoad: ip
        } = pp;
        ip()
      }), (() => {})), Yp ??= Dp().then((pp => (pp.startWasmPlay(), pp.followPageUiPack((pp => {
        Op.d.showGamePack(pp)
      })), pp)), (pp => {
        throw Yp = null, pp
      })), Yp
    }

    function Wp() {
      return Ap(), cp.e(276).then((() => cp(41273))).catch((() => {})), Dp().then((() => {}))
    }

    function yp() {
      return Dp().then((pp => {
        pp.startWasmPreviews(), pp.prefetchWasmPreviews()
      }))
    }
  },
  36677: (pp, ip, cp) => {
    cp.d(ip, {
      d: () => Pp,
      e: () => Dp,
      g: () => Wp,
      j: () => Ap
    });
    var Op = cp(337),
      op = cp(667),
      Ip = cp(676),
      Sp = cp(44);
    const xp = {
        idStorageKey: "playSessionId",
        lastActivityStorageKey: "playSessionLastActivityMs",
        expiryMs: 3e5
      },
      Lp = "playSessionGameNameWithVariation",
      Yp = "wasMatchmakePlayer";

    function Dp() {
      let pp = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Sp.l;
      (0, Ip.h)(pp, xp)
    }

    function Ap() {
      (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Sp.l).setItem(Yp, !0)
    }

    function Pp() {
      let pp = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Sp.l;
      return (0, Ip.c)(pp, xp)
    }

    function Wp(pp) {
      let ip = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Sp.l;
      const cp = (0, Ip.c)(ip, xp),
        Dp = function(pp) {
          const ip = pp.getItem(Lp);
          return "string" !== typeof ip ? null : ip
        }(ip),
        Ap = function() {
          return !0 === (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Sp.l).getItem(Yp)
        }(ip);
      let Pp;
      return Pp = null !== cp && null !== Dp && (0, Ip.f)(ip, xp) && function(pp, ip, cp) {
          const op = (0, Op.Mb)(pp),
            Ip = (0, Op.Mb)(ip),
            Sp = (0, Op.Ib)(pp),
            xp = (0, Op.Ib)(ip);
          return !(op !== Ip || !cp) || op === Ip && Sp === xp
        }(Dp, pp, Ap) ? cp : (0, op.e)(), (0, Ip.k)(ip, xp, Pp), ip.setItem(Lp, pp),
        function() {
          (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Sp.l).removeItem(Yp)
        }(ip), Pp
    }
  },
  36674: (pp, ip, cp) => {
    cp.d(ip, {
      c: () => ep,
      d: () => jp
    });
    var Op = cp(1014),
      op = cp(209),
      Ip = cp(335),
      Sp = cp(643),
      xp = cp(337),
      Lp = cp(1021),
      Yp = cp(657),
      Dp = cp(681),
      Ap = cp(4609),
      Pp = cp(104),
      Wp = cp(131),
      yp = cp(1765),
      Up = cp(116),
      wp = cp(36677),
      vp = cp(44),
      tp = cp(670),
      Hp = cp(645),
      dp = cp(36679);

    function ep() {
      var pp, ip;
      return [...null !== (pp = navigator.languages) && void 0 !== pp ? pp : [null !== (ip = navigator.language) && void 0 !== ip ? ip : "none"], "en-Gb"]
    }

    function jp(pp, ip, cp, jp, kp) {
      const mp = (0, Op.j)(ip) ? (0, Op.o)(ip) : null,
        Rp = pp.isLoggedIn() && void 0 !== (0, op.e)(Ip.k, Wp.siteUsed) ? (0, Hp.f)() : null,
        qp = {
          cookies: (0, yp.getAllCookiesForGameNameWithVariation)(ip),
          isMobile: (0, Pp.isMobile)(),
          isUsingCustomGameTexturePack: null !== mp && kp(mp),
          generalCookies: {
            joinDiscord: !!vp.h.getItem("DiscordPressed"),
            newGo: Ap.c,
            ...pp.getMetricsCookies(),
            trafficCode: jp,
            compliance: Pp.compliance
          },
          browserInfo: {
            ua: window.navigator.userAgent,
            name: (0, Pp.getBrowserName)(),
            version: (0, Pp.getBrowserVersion)(),
            platform: navigator.platform,
            platformType: (0, Pp.getPlatformType)(),
            deviceType: (0, Up.c)()
          },
          isLoggedIn: pp.isLoggedIn(),
          lobbyName: cp,
          languages: ep(),
          version: Sp.c,
          siteUsed: Wp.siteUsed,
          subsiteUsed: Wp.subsiteUsed,
          playSessionId: (0, wp.g)(ip),
          visitSessionId: (0, tp.g)(),
          clientReason: Yp.p.reason,
          budgetBasis: (0, dp.j)(),
          ...null !== Dp.n && {
            diagClaim: Dp.n.claimId
          },
          ...null !== Rp && {
            webGpuLoss: Rp
          }
        };
      return null !== mp && (0, xp.vc)(mp) ? (qp.lobbyName = (0, Op.h)(mp, (0, Op.n)(ip), cp), {
        roomName: `classic_${Lp.d}`,
        joinOptions: qp
      }) : {
        roomName: ip,
        joinOptions: qp
      }
    }
  },
  9436: (pp, ip, cp) => {
    cp.d(ip, {
      d: () => op,
      h: () => Ip
    });
    var Op = cp(9385);
    const op = "Air",
      Ip = Object.freeze(new Op.e(op, 0, "", null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null))
  }
};
Object.freeze(modules);
for (const pp in modules) Object.freeze(modules[pp]);