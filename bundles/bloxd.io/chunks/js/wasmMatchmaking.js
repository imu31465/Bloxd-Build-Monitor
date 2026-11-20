/*! For license information please see 6ndy1f.wasmMatchmaking.3ef714e7.chunk.js.LICENSE.txt */
export const id = 59;
export const ids = [59, 91];
export const modules = {
  36279: (kk, Fk) => {
    function Bk(kk) {
      if (kk && "object" === typeof kk) {
        var Fk = kk.which || kk.keyCode || kk.charCode;
        Fk && (kk = Fk)
      }
      if ("number" === typeof kk) return Xk[kk];
      var Bk, ak = String(kk);
      return (Bk = Rk[ak.toLowerCase()]) ? Bk : (Bk = tk[ak.toLowerCase()]) || (1 === ak.length ? ak.charCodeAt(0) : void 0)
    }
    Bk.isEventKey = function(kk, Fk) {
      if (kk && "object" === typeof kk) {
        var Bk = kk.which || kk.keyCode || kk.charCode;
        if (null === Bk || void 0 === Bk) return !1;
        if ("string" === typeof Fk) {
          var ak;
          if (ak = Rk[Fk.toLowerCase()]) return ak === Bk;
          if (ak = tk[Fk.toLowerCase()]) return ak === Bk
        } else if ("number" === typeof Fk) return Fk === Bk;
        return !1
      }
    };
    var Rk = (Fk = kk.exports = Bk).code = Fk.codes = {
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
      tk = Fk.aliases = {
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
    for (ak = 97; ak < 123; ak++) Rk[String.fromCharCode(ak)] = ak - 32;
    for (var ak = 48; ak < 58; ak++) Rk[ak - 48] = ak;
    for (ak = 1; ak < 13; ak++) Rk["f" + ak] = ak + 111;
    for (ak = 0; ak < 10; ak++) Rk["numpad " + ak] = ak + 96;
    var Xk = Fk.names = Fk.title = {};
    for (ak in Rk) Xk[Rk[ak]] = ak;
    for (var bk in tk) Rk[bk] = tk[bk]
  },
  36427: (kk, Fk, Bk) => {
    Bk.d(Fk, {
      b: () => Xk
    });
    var Rk = Bk(61);
    const tk = Rk.useLayoutEffect;
    const ak = function(kk) {
      var Fk = (0, Rk.useRef)(kk);
      return tk((function() {
        Fk.current = kk
      })), Fk
    };
    var Xk = function(kk) {
      var Fk = ak(kk);
      (0, Rk.useEffect)((function() {
        var kk = function(kk) {
          var Bk;
          if (null != Fk.current && (Bk = Fk.current(kk)), kk.defaultPrevented && (kk.returnValue = ""), "string" === typeof Bk) return kk.returnValue = Bk, Bk
        };
        return window.addEventListener("beforeunload", kk),
          function() {
            window.removeEventListener("beforeunload", kk)
          }
      }), [])
    }
  },
  36313: kk => {
    var Fk, Bk = "undefined" !== typeof window ? window.navigator.userAgent : "",
      Rk = /OS X/.test(Bk),
      tk = /Opera/.test(Bk),
      ak = !/like Gecko/.test(Bk) && !tk,
      Xk = kk.exports = {
        0: Rk ? "<menu>" : "<UNK>",
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
        93: Rk ? "<meta>" : "<menu>",
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
        173: Rk && ak ? "-" : "<volume-mute>",
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
        231: tk ? "`" : "<unicode>",
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
    for (Fk = 58; Fk < 65; ++Fk) Xk[Fk] = String.fromCharCode(Fk);
    for (Fk = 48; Fk < 58; ++Fk) Xk[Fk] = Fk - 48 + "";
    for (Fk = 65; Fk < 91; ++Fk) Xk[Fk] = String.fromCharCode(Fk);
    for (Fk = 96; Fk < 106; ++Fk) Xk[Fk] = "<num-" + (Fk - 96) + ">";
    for (Fk = 112; Fk < 136; ++Fk) Xk[Fk] = "F" + (Fk - 111)
  },
  36355: (kk, Fk, Bk) => {
    function Rk(kk, Fk, Bk, Rk) {
      return !(Bk && !kk.aimable) && (!Fk || kk.gun && "head" !== Rk)
    }

    function tk(kk) {
      return Math.max(.1 * kk, 1)
    }

    function ak(kk, Fk) {
      return !kk && Fk
    }
    Bk.d(Fk, {
      b: () => ak,
      e: () => tk,
      h: () => Rk
    })
  },
  36359: (kk, Fk, Bk) => {
    Bk.d(Fk, {
      e: () => bk,
      g: () => Xk
    });
    let Rk = null;
    const tk = {
        crosshairAccuracy: [],
        turnDamageIndicators: []
      },
      ak = {
        crosshairAccuracy: kk => {
          const Fk = tk.crosshairAccuracy.at(-1);
          Fk ? Fk.hook(kk) : Rk = kk
        },
        turnDamageIndicators: kk => {
          var Fk;
          null === (Fk = tk.turnDamageIndicators.at(-1)) || void 0 === Fk || Fk.hook(kk)
        }
      };

    function Xk(kk, Fk) {
      const Bk = {
          hook: Fk
        },
        Xk = tk[kk];
      if (Xk.push(Bk), "crosshairAccuracy" === kk && null !== Rk) {
        const kk = Rk;
        Rk = null, ak.crosshairAccuracy(kk)
      }
      return () => {
        const kk = Xk.indexOf(Bk); - 1 !== kk && Xk.splice(kk, 1)
      }
    }

    function bk() {
      return ak
    }
  },
  6361: (kk, Fk, Bk) => {
    Bk.d(Fk, {
      d: () => tk,
      e: () => ak
    });
    var Rk = Bk(42);
    const tk = "shaderPack";
    async function ak() {
      var kk;
      let Fk = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
      return null !== (kk = await Rk.f.getItem(tk, Fk)) && void 0 !== kk ? kk : null
    }
  },
  8583: (kk, Fk, Bk) => {
    Bk.d(Fk, {
      c: () => ak,
      d: () => tk
    });
    let Rk = !1;

    function tk() {
      Rk = !0
    }

    function ak() {
      return Rk
    }
  },
  36173: (kk, Fk, Bk) => {
    Bk.r(Fk), Bk.d(Fk, {
      InGameUi: () => vk.b,
      LobbyLeaderboard: () => ik.d,
      loadCharacterCustomisationUI: () => Yk,
      loadCharacterPreview: () => Lk,
      matchmakeAndPlay: () => Nk,
      setUpGame: () => Ok
    });
    var Rk = Bk(1195),
      tk = Bk(152),
      ak = Bk(22),
      Xk = Bk(36179),
      bk = Bk(36188),
      wk = Bk(1863),
      dk = Bk(36225);

    function sk() {
      return !1 !== wk.b.get("canCustomiseChar")
    }
    let Vk = !1;
    var Jk = Bk(1267),
      Ak = Bk(1203),
      ek = Bk(672),
      yk = Bk(8583);
    var fk = Bk(8580),
      mk = Bk(3374),
      Wk = Bk(1716);
    var vk = Bk(36240),
      ik = Bk(36683);

    function Yk() {
      return Promise.all([Bk.e(281), Bk.e(387)]).then((() => Bk(40717)))
    }

    function Lk() {
      return Bk.e(282).then((() => Bk(40720)))
    }

    function Ok() {
      return (0, fk.e)()
    }
    Vk || (Vk = !0, document.addEventListener("keydown", (kk => {
        (0, dk.b)(kk, sk)
      }))),
      function(kk) {
        var Fk;
        return !0 !== (null === kk || void 0 === kk ? void 0 : kk.saveData) && !/2g$/.test(null !== (Fk = null === kk || void 0 === kk ? void 0 : kk.effectiveType) && void 0 !== Fk ? Fk : "")
      }(navigator.connection) && (0, ek.e)((() => {
        (0, yk.c)() || Promise.all([Bk.e(74), Bk.e(132), Bk.e(87), Bk.e(55)]).then((() => Bk(40163))).then((kk => {
          (0, yk.c)() || kk.startLoadAheadOfJoin({
            joinStarted: yk.c,
            language: Ak.c.get().getCurrentLanguageCode()
          })
        }), (kk => {
          console.warn("[bloxd-wasm-client] the loads ahead of a join did not start: the join loads the client itself", kk)
        }))
      }));
    const Ek = ak.c.get("router");
    null === Ek ? console.warn("[bloxd-wasm-client] no router as the matchmaking chunk loads: the join's loads start with the join") : function kk(Fk) {
      if ((0, Wk.b)(Fk.state.location.pathname)) return void(0, fk.d)().catch((() => {}));
      const Bk = Fk.subscribe((Rk => {
        (0, Wk.b)(Rk.location.pathname) && (Bk(), (0, mk.d)().then((() => {
          kk(Fk)
        })))
      }))
    }(Ek), (0, Xk.b)();
    const Sk = (0, bk.b)((async function(kk, Fk) {
      let {
        place: Bk,
        userContext: ak,
        direct: Xk,
        rematch: bk
      } = kk;
      const wk = Xk ? 1 / 0 : performance.now();
      let dk;
      try {
        dk = await (0, fk.d)()
      } catch (sk) {
        return console.error("The wasm client did not load:", sk), (0, Jk.u)({
          websocketUrl: null
        }), Rk.c.errorWithCode(String(sk), tk.k.CONNECT_TO_GAME_SERVER, {
          error: sk,
          severity: Fk.aborted ? "low" : "medium",
          yB: Fk.aborted
        })
      }
      return dk.playWasmGame({
        userContext: ak,
        place: Bk,
        matchedAt: wk,
        rematch: bk
      }, Fk)
    }));

    function Nk() {
      return (0, fk.d)().catch((() => {})), Sk(...arguments)
    }
  },
  8580: (kk, Fk, Bk) => {
    Bk.d(Fk, {
      d: () => sk,
      e: () => Vk
    });
    var Rk = Bk(2943),
      tk = Bk(2190),
      ak = Bk(2992),
      Xk = Bk(4389),
      bk = Bk(3309),
      wk = Bk(8583);
    let dk = null;

    function sk() {
      return Xk.b.cancelDownloadForJoin(), (0, bk.e)(), (0, tk.g)(), (0, wk.d)(), (0, ak.e)(), Promise.all([Bk.e(69), Bk.e(72), Bk.e(71), Bk.e(70), Bk.e(83), Bk.e(259), Bk.e(199), Bk.e(216), Bk.e(237), Bk.e(212), Bk.e(46)]).then((() => Bk(40095))).catch((() => {})), Promise.all([Bk.e(74), Bk.e(132), Bk.e(87), Bk.e(55)]).then((() => Bk(40163))).then((kk => {
        let {
          startJoinLoad: Fk
        } = kk;
        Fk()
      }), (() => {})), dk ??= Promise.all([Bk.e(71), Bk.e(74), Bk.e(129), Bk.e(73), Bk.e(132), Bk.e(262), Bk.e(186), Bk.e(87), Bk.e(86), Bk.e(85), Bk.e(212), Bk.e(60)]).then((() => Bk(40278))).then((kk => (kk.startWasmPlay(), kk.followPageUiPack((kk => {
        Rk.e.showGamePack(kk)
      })), kk)), (kk => {
        throw dk = null, kk
      })), dk
    }

    function Vk() {
      return Promise.all([Bk.e(71), Bk.e(74), Bk.e(129), Bk.e(73), Bk.e(132), Bk.e(262), Bk.e(186), Bk.e(87), Bk.e(86), Bk.e(85), Bk.e(212), Bk.e(60)]).then((() => Bk(40278))).then((kk => {
        kk.startWasmPreviews(), kk.prefetchWasmPreviews()
      }))
    }
  },
  4575: (kk, Fk, Bk) => {
    Bk.r(Fk), Bk.d(Fk, {
      Howl: () => tk.Howl,
      Howler: () => tk.Howler,
      iosAudio: () => wk,
      musicOutput: () => fk,
      readyAudioContext: () => mk
    });
    var Rk, tk = Bk(4579),
      ak = Bk(98);
    const Xk = tk.Howler;
    let bk;

    function wk() {
      return bk ??= "ios" === (0, ak.getOperatingSystem)(), bk
    }

    function dk() {
      var kk, Fk;
      if (Xk.ctx || !Xk.usingWebAudio || "undefined" === typeof AudioContext || !wk()) return;
      const Bk = navigator.audioSession;
      let Rk;
      "auto" === (null === Bk || void 0 === Bk ? void 0 : Bk.type) && (Bk.type = "ambient");
      try {
        Rk = new AudioContext({
          sampleRate: 44100
        })
      } catch {
        return
      }
      const tk = Rk.createGain();
      tk.gain.setValueAtTime(Xk._muted ? 0 : null !== (kk = Xk._volume) && void 0 !== kk ? kk : 1, Rk.currentTime), tk.connect(Rk.destination), Xk.ctx = Rk, Xk.masterGain = tk, null === (Fk = Xk._setup) || void 0 === Fk || Fk.call(Xk)
    }
    Xk._mobileUnloaded = !0;
    const sk = Xk.volume.bind(tk.Howler);
    Xk.volume = function() {
      return dk(), sk(...arguments)
    };
    const Vk = Xk.mute.bind(tk.Howler);
    Xk.mute = kk => (dk(), Vk(kk));
    const Jk = tk.Howl.prototype,
      Ak = Jk.init;
    Jk.init = function(kk) {
      return dk(), Ak.call(this, kk)
    };
    let ek = 0;
    const yk = null === (Rk = Xk._autoSuspend) || void 0 === Rk ? void 0 : Rk.bind(tk.Howler);

    function fk() {
      mk();
      const {
        ctx: kk,
        masterGain: Fk
      } = Xk;
      return kk && Fk ? {
        ctx: kk,
        destination: Fk,
        holdAwake: kk => {
          var Fk, Bk;
          (ek += kk ? 1 : -1, kk) ? null === (Fk = Xk._autoResume) || void 0 === Fk || Fk.call(Xk): null === (Bk = Xk._autoSuspend) || void 0 === Bk || Bk.call(Xk)
        },
        wake: () => {
          var Fk;
          "running" !== kk.state && (null === (Fk = Xk._autoResume) || void 0 === Fk || Fk.call(Xk), kk.resume().catch((() => {})))
        }
      } : null
    }

    function mk() {
      var kk;
      (Xk.volume(), Xk.ctx && Xk.autoUnlock) && (null === (kk = Xk._unlockAudio) || void 0 === kk || kk.call(Xk))
    }
    yk && (Xk._autoSuspend = () => ek > 0 ? tk.Howler : yk())
  },
  36460: (kk, Fk, Bk) => {
    Bk.d(Fk, {
      e: () => Xk,
      h: () => tk,
      i: () => Rk
    });

    function Rk(kk) {
      return kk.replace(/[_\-\s]*\d+$/, "") || kk
    }

    function tk(kk, Fk, Bk) {
      return Bk <= 0 ? 0 : kk * Bk / Math.max(Fk, Bk)
    }

    function ak(kk, Fk) {
      const Bk = kk.getDurationMs();
      return Bk > 0 ? kk.loudness * Math.max(0, 1 - (Fk - kk.startMs) / Bk) : 0
    }
    class Xk {
      constructor() {
        let kk = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 24,
          Fk = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 6;
        this.maxVoices = kk, this.maxPerGroup = Fk, this.voices = []
      }
      admit(kk) {
        if (this.voices = this.voices.filter((kk => kk.isAlive())), null !== kk.group) {
          const Fk = this.voices.filter((Fk => Fk.group === kk.group));
          if (Fk.length >= this.maxPerGroup && !this.dropLeastWorth(Fk, kk)) return !1
        }
        return !(this.voices.length >= this.maxVoices && !this.dropLeastWorth(this.voices, kk)) && (this.voices.push(kk), !0)
      }
      dropLeastWorth(kk, Fk) {
        let Bk = null,
          Rk = 1 / 0;
        for (const tk of kk) {
          if (!tk.canStop()) continue;
          const kk = ak(tk, Fk.startMs);
          kk < Rk && (Bk = tk, Rk = kk)
        }
        return !(!Bk || Fk.loudness < Rk) && (this.voices.splice(this.voices.indexOf(Bk), 1), Bk.stop(), !0)
      }
    }
  },
  36469: (kk, Fk, Bk) => {
    Bk.d(Fk, {
      b: () => ak,
      d: () => Xk,
      e: () => Rk
    });
    class Rk {
      constructor(kk) {
        this.multipliers = {}, this._onUpdate = void 0, this._onUpdate = kk
      }
      setMultiplierType(kk, Fk) {
        var Bk;
        this.multipliers[kk] = Fk, null === (Bk = this._onUpdate) || void 0 === Bk || Bk.call(this)
      }
      removeMultiplier(kk) {
        var Fk;
        delete this.multipliers[kk], null === (Fk = this._onUpdate) || void 0 === Fk || Fk.call(this)
      }
      getMultiplierType(kk) {
        return this.multipliers[kk]
      }
      getTotalMultipliedVal() {
        let kk = 1;
        for (const Fk in this.multipliers) kk *= this.multipliers[Fk];
        return kk
      }
    }
    class tk {
      constructor() {
        let kk = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
        this.booleans = {}, this._onUpdate = void 0, this._onUpdate = kk
      }
      setBooleanType(kk, Fk) {
        const Bk = this._getTotalBooleanVal();
        this.booleans[kk] = !!Fk;
        const Rk = this.getTotalBooleanVal();
        var tk;
        Rk !== Bk && (null === (tk = this._onUpdate) || void 0 === tk || tk.call(this, Rk, this.booleans));
        return Rk
      }
      removeBoolean(kk) {
        const Fk = this._getTotalBooleanVal();
        delete this.booleans[kk];
        const Bk = this._getTotalBooleanVal();
        var Rk;
        null !== Bk && Bk !== Fk && (null === (Rk = this._onUpdate) || void 0 === Rk || Rk.call(this, Bk, this.booleans));
        return null !== Bk && void 0 !== Bk && Bk
      }
      getBooleanType(kk) {
        return this.booleans[kk]
      }
      getTotalBooleanVal() {
        throw new Error("This is an abstract class, use BooleanAndCombinator")
      }
      forceUpdate() {
        var kk;
        null === (kk = this._onUpdate) || void 0 === kk || kk.call(this, this.getTotalBooleanVal(), this.booleans)
      }
      _getTotalBooleanVal() {
        throw new Error("This is an abstract class, use BooleanAndCombinator")
      }
    }
    class ak extends tk {
      getTotalBooleanVal() {
        const kk = this._getTotalBooleanVal();
        if (null === kk) throw new Error("Should not be gotten before at least 1 type has been initialised");
        return kk
      }
      _getTotalBooleanVal() {
        let kk = !1,
          Fk = !0;
        for (const Bk in this.booleans) kk = !0, Fk &&= this.booleans[Bk];
        return kk ? Fk : null
      }
    }
    class Xk extends tk {
      getTotalBooleanVal() {
        const kk = this._getTotalBooleanVal();
        if (null === kk) throw new Error("Should not be gotten before at least 1 type has been initialised");
        return kk
      }
      _getTotalBooleanVal() {
        let kk = !1,
          Fk = !1;
        for (const Bk in this.booleans) kk = !0, Fk ||= this.booleans[Bk];
        return kk ? Fk : null
      }
    }
  },
  9169: (kk, Fk, Bk) => {
    Bk.d(Fk, {
      c: () => tk,
      d: () => ak
    });
    var Rk = Bk(9127);
    const tk = "Air",
      ak = Object.freeze(new Rk.g(tk, 0, "", null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null))
  },
  36466: (kk, Fk, Bk) => {
    Bk.d(Fk, {
      b: () => ak,
      d: () => Rk,
      g: () => tk
    });
    const Rk = 15,
      tk = 3,
      ak = 30
  }
};
Object.freeze(modules);
for (const kk in modules) Object.freeze(modules[kk]);