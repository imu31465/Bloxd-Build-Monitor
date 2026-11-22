/*! For license information please see 3lwmg.wasmMatchmaking.744abf2e.chunk.js.LICENSE.txt */
export const id = 62;
export const ids = [62];
export const modules = {
  36067: (kk, ek) => {
    function ik(kk) {
      if (kk && "object" === typeof kk) {
        var ek = kk.which || kk.keyCode || kk.charCode;
        ek && (kk = ek)
      }
      if ("number" === typeof kk) return bk[kk];
      var ik, Sk = String(kk);
      return (ik = Dk[Sk.toLowerCase()]) ? ik : (ik = fk[Sk.toLowerCase()]) || (1 === Sk.length ? Sk.charCodeAt(0) : void 0)
    }
    ik.isEventKey = function(kk, ek) {
      if (kk && "object" === typeof kk) {
        var ik = kk.which || kk.keyCode || kk.charCode;
        if (null === ik || void 0 === ik) return !1;
        if ("string" === typeof ek) {
          var Sk;
          if (Sk = Dk[ek.toLowerCase()]) return Sk === ik;
          if (Sk = fk[ek.toLowerCase()]) return Sk === ik
        } else if ("number" === typeof ek) return ek === ik;
        return !1
      }
    };
    var Dk = (ek = kk.exports = ik).code = ek.codes = {
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
      fk = ek.aliases = {
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
    for (Sk = 97; Sk < 123; Sk++) Dk[String.fromCharCode(Sk)] = Sk - 32;
    for (var Sk = 48; Sk < 58; Sk++) Dk[Sk - 48] = Sk;
    for (Sk = 1; Sk < 13; Sk++) Dk["f" + Sk] = Sk + 111;
    for (Sk = 0; Sk < 10; Sk++) Dk["numpad " + Sk] = Sk + 96;
    var bk = ek.names = ek.title = {};
    for (Sk in Dk) bk[Dk[Sk]] = Sk;
    for (var rk in fk) Dk[rk] = fk[rk]
  },
  36263: (kk, ek, ik) => {
    ik.d(ek, {
      d: () => bk
    });
    var Dk = ik(60);
    const fk = Dk.useLayoutEffect;
    const Sk = function(kk) {
      var ek = (0, Dk.useRef)(kk);
      return fk((function() {
        ek.current = kk
      })), ek
    };
    var bk = function(kk) {
      var ek = Sk(kk);
      (0, Dk.useEffect)((function() {
        var kk = function(kk) {
          var ik;
          if (null != ek.current && (ik = ek.current(kk)), kk.defaultPrevented && (kk.returnValue = ""), "string" === typeof ik) return kk.returnValue = ik, ik
        };
        return window.addEventListener("beforeunload", kk),
          function() {
            window.removeEventListener("beforeunload", kk)
          }
      }), [])
    }
  },
  36127: kk => {
    var ek, ik = "undefined" !== typeof window ? window.navigator.userAgent : "",
      Dk = /OS X/.test(ik),
      fk = /Opera/.test(ik),
      Sk = !/like Gecko/.test(ik) && !fk,
      bk = kk.exports = {
        0: Dk ? "<menu>" : "<UNK>",
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
        93: Dk ? "<meta>" : "<menu>",
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
        173: Dk && Sk ? "-" : "<volume-mute>",
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
        231: fk ? "`" : "<unicode>",
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
    for (ek = 58; ek < 65; ++ek) bk[ek] = String.fromCharCode(ek);
    for (ek = 48; ek < 58; ++ek) bk[ek] = ek - 48 + "";
    for (ek = 65; ek < 91; ++ek) bk[ek] = String.fromCharCode(ek);
    for (ek = 96; ek < 106; ++ek) bk[ek] = "<num-" + (ek - 96) + ">";
    for (ek = 112; ek < 136; ++ek) bk[ek] = "F" + (ek - 111)
  },
  8725: (kk, ek, ik) => {
    ik.d(ek, {
      c: () => Sk,
      d: () => fk
    });
    let Dk = !1;

    function fk() {
      Dk = !0
    }

    function Sk() {
      return Dk
    }
  },
  35971: (kk, ek, ik) => {
    ik.r(ek), ik.d(ek, {
      InGameUi: () => Lk.b,
      LobbyLeaderboard: () => Ck.d,
      loadCharacterCustomisationUI: () => Ak,
      loadCharacterPreview: () => jk,
      matchmakeAndPlay: () => Fk,
      setUpGame: () => sk
    });
    var Dk = ik(1220),
      fk = ik(165),
      Sk = ik(22),
      bk = ik(35977),
      rk = ik(35983),
      Pk = ik(1911),
      mk = ik(36015);

    function Mk() {
      return !1 !== Pk.c.get("canCustomiseChar")
    }
    let Kk = !1;
    var xk = ik(1302),
      nk = ik(1223),
      Uk = ik(247),
      Hk = ik(672),
      wk = ik(8725),
      lk = ik(8723);

    function pk() {
      (0, wk.c)() || (0, lk.b)().catch((kk => {
        console.warn("[bloxd-wasm-client] the play chunk did not load ahead of a join: the join loads it itself", kk)
      }))
    }
    var yk = ik(3521),
      Yk = ik(1710);
    var Lk = ik(36023),
      Ck = ik(36601);

    function Ak() {
      return Promise.all([ik.e(289), ik.e(394)]).then((() => ik(40850)))
    }

    function jk() {
      return ik.e(290).then((() => ik(40857)))
    }

    function sk() {
      return (0, lk.h)()
    }
    Kk || (Kk = !0, document.addEventListener("keydown", (kk => {
        (0, mk.e)(kk, Mk)
      }))),
      function(kk) {
        var ek;
        return !0 !== (null === kk || void 0 === kk ? void 0 : kk.saveData) && !/2g$/.test(null !== (ek = null === kk || void 0 === kk ? void 0 : kk.effectiveType) && void 0 !== ek ? ek : "")
      }(navigator.connection) && (0, Hk.d)((() => {
        (0, wk.c)() || Promise.all([ik.e(77), ik.e(89), ik.e(134), ik.e(267), ik.e(137), ik.e(58)]).then((() => ik(40634))).then((async kk => {
          (0, wk.c)() || (await kk.startLoadAheadOfJoin({
            joinStarted: wk.c,
            language: nk.f.get().getCurrentLanguageCode()
          }), (0, Uk.c)(pk))
        }), (kk => {
          console.warn("[bloxd-wasm-client] the loads ahead of a join did not start: the join loads the client itself", kk)
        }))
      }));
    const dk = Sk.b.get("router");
    null === dk ? console.warn("[bloxd-wasm-client] no router as the matchmaking chunk loads: the join's loads start with the join") : function kk(ek) {
      if ((0, Yk.b)(ek.state.location.pathname)) return void(0, lk.f)().catch((() => {}));
      const ik = ek.subscribe((Dk => {
        (0, Yk.b)(Dk.location.pathname) && (ik(), (0, yk.f)().then((() => {
          kk(ek)
        })))
      }))
    }(dk), (0, bk.d)();
    const Vk = (0, rk.b)((async function(kk, ek) {
      let {
        place: ik,
        userContext: Sk,
        direct: bk,
        rematch: rk
      } = kk;
      const Pk = bk ? 1 / 0 : performance.now();
      let mk;
      try {
        mk = await (0, lk.f)()
      } catch (Mk) {
        return console.error("The wasm client did not load:", Mk), (0, xk.n)({
          websocketUrl: null
        }), Dk.d.errorWithCode(String(Mk), fk.n.CONNECT_TO_GAME_SERVER, {
          error: Mk,
          severity: ek.aborted ? "low" : "medium",
          Ji: ek.aborted
        })
      }
      return mk.playWasmGame({
        userContext: Sk,
        place: ik,
        matchedAt: Pk,
        rematch: rk
      }, ek)
    }));

    function Fk() {
      return (0, lk.f)().catch((() => {})), Vk(...arguments)
    }
  },
  8723: (kk, ek, ik) => {
    ik.d(ek, {
      b: () => nk,
      f: () => xk,
      h: () => Uk
    });
    var Dk = ik(3121),
      fk = ik(2259),
      Sk = ik(2095),
      bk = ik(4575),
      rk = ik(3456),
      Pk = ik(8725);
    let mk = null;

    function Mk() {
      return Promise.all([ik.e(74), ik.e(77), ik.e(89), ik.e(76), ik.e(134), ik.e(267), ik.e(160), ik.e(197), ik.e(137), ik.e(87), ik.e(268), ik.e(63)]).then((() => ik(40256)))
    }

    function Kk() {
      Promise.all([ik.e(72), ik.e(75), ik.e(74), ik.e(73), ik.e(89), ik.e(86), ik.e(265), ik.e(191), ik.e(221), ik.e(243), ik.e(268), ik.e(46)]).then((() => ik(40591))).catch((() => {}))
    }

    function xk() {
      return bk.c.cancelDownloadForJoin(), (0, rk.b)(), (0, fk.g)(), (0, Pk.d)(), (0, Sk.i)(), Kk(), Promise.all([ik.e(77), ik.e(89), ik.e(134), ik.e(267), ik.e(137), ik.e(58)]).then((() => ik(40634))).then((kk => {
        let {
          startJoinLoad: ek
        } = kk;
        ek()
      }), (() => {})), mk ??= Mk().then((kk => (kk.startWasmPlay(), kk.followPageUiPack((kk => {
        Dk.e.showGamePack(kk)
      })), kk)), (kk => {
        throw mk = null, kk
      })), mk
    }

    function nk() {
      return Kk(), ik.e(269).then((() => ik(40641))).catch((() => {})), Mk().then((() => {}))
    }

    function Uk() {
      return Mk().then((kk => {
        kk.startWasmPreviews(), kk.prefetchWasmPreviews()
      }))
    }
  },
  35995: (kk, ek, ik) => {
    ik.d(ek, {
      c: () => xk,
      d: () => Mk,
      g: () => nk,
      k: () => Kk
    });
    var Dk = ik(314),
      fk = ik(623),
      Sk = ik(634),
      bk = ik(38);
    const rk = {
        idStorageKey: "playSessionId",
        lastActivityStorageKey: "playSessionLastActivityMs",
        expiryMs: 3e5
      },
      Pk = "playSessionGameNameWithVariation",
      mk = "wasMatchmakePlayer";

    function Mk() {
      let kk = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : bk.g;
      (0, Sk.h)(kk, rk)
    }

    function Kk() {
      (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : bk.g).setItem(mk, !0)
    }

    function xk() {
      let kk = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : bk.g;
      return (0, Sk.c)(kk, rk)
    }

    function nk(kk) {
      let ek = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : bk.g;
      const ik = (0, Sk.c)(ek, rk),
        Mk = function(kk) {
          const ek = kk.getItem(Pk);
          return "string" !== typeof ek ? null : ek
        }(ek),
        Kk = function() {
          return !0 === (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : bk.g).getItem(mk)
        }(ek);
      let xk;
      return xk = null !== ik && null !== Mk && (0, Sk.e)(ek, rk) && function(kk, ek, ik) {
          const fk = (0, Dk.Db)(kk),
            Sk = (0, Dk.Db)(ek),
            bk = (0, Dk.yb)(kk),
            rk = (0, Dk.yb)(ek);
          return !(fk !== Sk || !ik) || fk === Sk && bk === rk
        }(Mk, kk, Kk) ? ik : (0, fk.d)(), (0, Sk.i)(ek, rk, xk), ek.setItem(Pk, kk),
        function() {
          (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : bk.g).removeItem(mk)
        }(ek), xk
    }
  },
  35986: (kk, ek, ik) => {
    ik.d(ek, {
      d: () => pk,
      g: () => yk
    });
    var Dk = ik(996),
      fk = ik(600),
      Sk = ik(314),
      bk = ik(1e3),
      rk = ik(610),
      Pk = ik(646),
      mk = ik(4458),
      Mk = ik(99),
      Kk = ik(131),
      xk = ik(1688),
      nk = ik(111),
      Uk = ik(35995),
      Hk = ik(38),
      wk = ik(630),
      lk = ik(36001);

    function pk() {
      var kk, ek;
      return [...null !== (kk = navigator.languages) && void 0 !== kk ? kk : [null !== (ek = navigator.language) && void 0 !== ek ? ek : "none"], "en-gb"]
    }

    function yk(kk, ek, ik, yk, Yk) {
      const Lk = (0, Dk.j)(ek) ? (0, Dk.p)(ek) : null,
        Ck = {
          cookies: (0, xk.getAllCookiesForGameNameWithVariation)(ek),
          isMobile: (0, Mk.isMobile)(),
          isUsingCustomGameTexturePack: null !== Lk && Yk(Lk),
          generalCookies: {
            joinDiscord: !!Hk.f.getItem("DiscordPressed"),
            newGo: mk.b,
            ...kk.getMetricsCookies(),
            trafficCode: yk,
            compliance: Mk.compliance
          },
          browserInfo: {
            ua: window.navigator.userAgent,
            name: (0, Mk.getBrowserName)(),
            version: (0, Mk.getBrowserVersion)(),
            platform: navigator.platform,
            platformType: (0, Mk.getPlatformType)(),
            deviceType: (0, nk.d)()
          },
          isLoggedIn: kk.isLoggedIn(),
          lobbyName: ik,
          languages: pk(),
          version: fk.c,
          siteUsed: Kk.t,
          subsiteUsed: Kk.E,
          playSessionId: (0, Uk.g)(ek),
          visitSessionId: (0, wk.d)(),
          clientReason: rk.l.reason,
          budgetBasis: (0, lk.c)(),
          ...null !== Pk.q && {
            diagClaim: Pk.q.claimId
          }
        };
      return null !== Lk && (0, Sk.tc)(Lk) ? (Ck.lobbyName = (0, Dk.g)(Lk, (0, Dk.m)(ek), ik), {
        roomName: `classic_${bk.f}`,
        joinOptions: Ck
      }) : {
        roomName: ek,
        joinOptions: Ck
      }
    }
  },
  36011: (kk, ek, ik) => {
    ik.d(ek, {
      b: () => bk,
      e: () => fk,
      g: () => Sk
    });
    var Dk = ik(1756);
    class fk extends Error {
      constructor(kk) {
        super("The game server didn't answer in time"), this.leg = kk, this.name = "SeatRequestTimedOut"
      }
    }
    const Sk = new class {
      constructor() {
        this.count = 0, this.answers = 0, this.waiting = new Set
      }
      get answered() {
        return this.answers
      }
      answer() {
        this.answers++
      }
      add() {
        this.count++;
        for (const kk of this.waiting) kk()
      }
      remove() {
        this.count--
      }
      whenSlow(kk) {
        return this.count > 0 || kk.aborted ? Promise.resolve(!kk.aborted) : new Promise((ek => {
          const ik = () => {
            this.waiting.delete(ik), ek(!kk.aborted)
          };
          this.waiting.add(ik), kk.addEventListener("abort", ik, {
            once: !0
          })
        }))
      }
    };
    class bk {
      constructor(kk) {
        this.timeout = void 0, this.slow = void 0, this.countedSlow = !1, this.timeout = new Dk.b(45e3, kk), this.slow = new Dk.b(8e3, (() => {
          this.countedSlow = !0, Sk.add()
        }))
      }
      restart() {
        Sk.answer(), this.uncountSlow(), this.timeout.restart(), this.slow.restart()
      }
      stop() {
        this.timeout.stop(), this.slow.stop(), this.uncountSlow()
      }
      answered() {
        this.stop(), Sk.answer()
      }
      socketOpened() {
        this.slow.stop(), this.uncountSlow(), Sk.answer()
      }
      uncountSlow() {
        this.countedSlow && (this.countedSlow = !1, Sk.remove())
      }
    }
  },
  35841: (kk, ek, ik) => {
    ik.d(ek, {
      e: () => Dk,
      h: () => fk,
      k: () => Sk,
      l: () => bk
    });
    const Dk = 1024,
      fk = 1024 * Dk;

    function Sk(kk) {
      return 2 ** Math.floor(Math.log2(Math.max(1, kk / fk)))
    }

    function bk(kk) {
      return (kk / fk).toFixed(1)
    }
  },
  36004: (kk, ek, ik) => {
    ik.d(ek, {
      d: () => Sk,
      h: () => rk,
      k: () => bk,
      o: () => Pk,
      r: () => mk,
      v: () => Mk
    });
    var Dk = ik(189);
    const fk = 32 * ik(35841).h,
      Sk = 6144,
      bk = 4608,
      rk = 512;

    function Pk(kk) {
      return Math.floor(fk * kk / Sk)
    }

    function mk(kk) {
      const ek = kk - Math.floor(kk / 6);
      let ik = Dk.g.maxChunkHorizAddDistance,
        fk = Dk.g.maxChunkVertAddDistance;
      if (Mk(ik + 1, fk + 1) <= ek) return null;
      for (; Mk(ik + 1, fk + 1) > ek && (ik > 0 || fk > 0);) ik > fk ? ik-- : fk--;
      return {
        horizontal: ik,
        vertical: fk
      }
    }

    function Mk(kk, ek) {
      const ik = Math.max(kk, ek);
      let Dk = 0;
      for (let fk = -ik; fk <= ik; fk++)
        for (let Sk = -ik; Sk <= ik; Sk++)
          for (let bk = -ik; bk <= ik; bk++) Kk(kk, ek, fk, Sk, bk) && Dk++;
      return Dk
    }

    function Kk(kk, ek, ik, Dk, fk) {
      const Sk = ik * ik + fk * fk;
      return kk === ek ? Sk + Dk * Dk <= kk * kk : kk > ek ? Math.abs(Dk) <= ek && Sk + Dk * Dk <= kk * kk : Sk <= kk * kk && Sk + Dk * Dk <= ek * ek
    }
  },
  36001: (kk, ek, ik) => {
    ik.d(ek, {
      b: () => Ck,
      c: () => Lk,
      e: () => Yk
    });
    var Dk = ik(189),
      fk = ik(99),
      Sk = ik(686),
      bk = ik(4352),
      rk = ik(618),
      Pk = ik(36004);
    const mk = 1048576,
      Mk = 1024 * mk,
      Kk = 400 * mk,
      xk = 147456,
      nk = .5,
      Uk = 1.5 * Mk,
      Hk = 768 * mk;

    function wk(kk) {
      return Kk + kk * xk
    }

    function lk(kk, ek, ik) {
      var fk, bk;
      let {
        footprintBytes: rk,
        basis: mk,
        namesLimit: lk
      } = function(kk) {
        const {
          os: ek,
          deviceMemory: ik
        } = kk;
        if ("ios" === ek) switch ((0, Sk.e)(kk)) {
          case "ipad_m":
            return {
              footprintBytes: wk(Pk.d), basis: "ipad-m", namesLimit: !1
            };
          case "ipad":
            return {
              footprintBytes: Hk, basis: "ipad", namesLimit: !0
            };
          case "iphone_6gb":
            return {
              footprintBytes: Uk, basis: "iphone-6gb", namesLimit: !0
            };
          case "iphone":
            return {
              footprintBytes: Hk, basis: "iphone", namesLimit: !0
            }
        }
        return "number" === typeof ik && Number.isFinite(ik) && ik > 0 ? {
          footprintBytes: ik * Mk * nk,
          basis: `memory-${ik}`,
          namesLimit: !0
        } : "android" === ek ? {
          footprintBytes: Hk,
          basis: "android",
          namesLimit: !0
        } : {
          footprintBytes: wk(Pk.k),
          basis: "unreported",
          namesLimit: !1
        }
      }(kk);
      if (ik) {
        const kk = Math.min(rk, wk(Pk.d));
        rk = Kk + Math.max(0, kk - Kk) / 2, mk += "+killed", lk = !0
      }
      null !== ek && wk(ek) < rk && (rk = wk(ek), mk += "+learned", lk = !0);
      const pk = function(kk) {
          const ek = Math.floor((kk - Kk) / xk);
          return Math.min(Pk.d, Math.max(Pk.h, ek))
        }(rk),
        yk = (0, Pk.r)(pk);
      return {
        footprintBytes: rk,
        shedFootprintBytes: lk ? Math.max(rk, wk(pk)) : null,
        chunkCap: pk,
        maxHorizDistance: null !== (fk = null === yk || void 0 === yk ? void 0 : yk.horizontal) && void 0 !== fk ? fk : Dk.g.maxChunkHorizAddDistance,
        maxVertDistance: null !== (bk = null === yk || void 0 === yk ? void 0 : yk.vertical) && void 0 !== bk ? bk : Dk.g.maxChunkVertAddDistance,
        basis: mk
      }
    }
    let pk = null;

    function yk() {
      return lk({
        os: (0, fk.getOperatingSystem)(),
        deviceMemory: navigator.deviceMemory,
        ...(0, Sk.i)()
      }, (0, bk.c)(), (0, rk.D)("wasm").length > 0)
    }

    function Yk() {
      return pk ??= yk(), pk
    }

    function Lk() {
      var kk;
      return (null !== (kk = pk) && void 0 !== kk ? kk : yk()).basis
    }

    function Ck(kk, ek) {
      return kk.setChunkCap(ek.chunkCap)
    }
  },
  9105: (kk, ek, ik) => {
    ik.d(ek, {
      c: () => fk,
      e: () => Sk
    });
    var Dk = ik(9063);
    const fk = "Air",
      Sk = Object.freeze(new Dk.d(fk, 0, "", null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null))
  }
};
Object.freeze(modules);
for (const kk in modules) Object.freeze(modules[kk]);