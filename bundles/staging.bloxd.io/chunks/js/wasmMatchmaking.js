/*! For license information please see teusab.wasmMatchmaking.5f0a934c.chunk.js.LICENSE.txt */
export const id = 59;
export const ids = [59, 91];
export const modules = {
  35970: (bb, ab) => {
    function Ub(bb) {
      if (bb && "object" === typeof bb) {
        var ab = bb.which || bb.keyCode || bb.charCode;
        ab && (bb = ab)
      }
      if ("number" === typeof bb) return Eb[bb];
      var Ub, Tb = String(bb);
      return (Ub = Ab[Tb.toLowerCase()]) ? Ub : (Ub = Mb[Tb.toLowerCase()]) || (1 === Tb.length ? Tb.charCodeAt(0) : void 0)
    }
    Ub.isEventKey = function(bb, ab) {
      if (bb && "object" === typeof bb) {
        var Ub = bb.which || bb.keyCode || bb.charCode;
        if (null === Ub || void 0 === Ub) return !1;
        if ("string" === typeof ab) {
          var Tb;
          if (Tb = Ab[ab.toLowerCase()]) return Tb === Ub;
          if (Tb = Mb[ab.toLowerCase()]) return Tb === Ub
        } else if ("number" === typeof ab) return ab === Ub;
        return !1
      }
    };
    var Ab = (ab = bb.exports = Ub).code = ab.codes = {
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
      Mb = ab.aliases = {
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
    for (Tb = 97; Tb < 123; Tb++) Ab[String.fromCharCode(Tb)] = Tb - 32;
    for (var Tb = 48; Tb < 58; Tb++) Ab[Tb - 48] = Tb;
    for (Tb = 1; Tb < 13; Tb++) Ab["f" + Tb] = Tb + 111;
    for (Tb = 0; Tb < 10; Tb++) Ab["numpad " + Tb] = Tb + 96;
    var Eb = ab.names = ab.title = {};
    for (Tb in Ab) Eb[Ab[Tb]] = Tb;
    for (var Yb in Mb) Ab[Yb] = Mb[Yb]
  },
  36096: (bb, ab, Ub) => {
    Ub.d(ab, {
      e: () => Eb
    });
    var Ab = Ub(52);
    const Mb = Ab.useLayoutEffect;
    const Tb = function(bb) {
      var ab = (0, Ab.useRef)(bb);
      return Mb((function() {
        ab.current = bb
      })), ab
    };
    var Eb = function(bb) {
      var ab = Tb(bb);
      (0, Ab.useEffect)((function() {
        var bb = function(bb) {
          var Ub;
          if (null != ab.current && (Ub = ab.current(bb)), bb.defaultPrevented && (bb.returnValue = ""), "string" === typeof Ub) return bb.returnValue = Ub, Ub
        };
        return window.addEventListener("beforeunload", bb),
          function() {
            window.removeEventListener("beforeunload", bb)
          }
      }), [])
    }
  },
  36005: bb => {
    var ab, Ub = "undefined" !== typeof window ? window.navigator.userAgent : "",
      Ab = /OS X/.test(Ub),
      Mb = /Opera/.test(Ub),
      Tb = !/like Gecko/.test(Ub) && !Mb,
      Eb = bb.exports = {
        0: Ab ? "<menu>" : "<UNK>",
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
        93: Ab ? "<meta>" : "<menu>",
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
        173: Ab && Tb ? "-" : "<volume-mute>",
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
        231: Mb ? "`" : "<unicode>",
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
    for (ab = 58; ab < 65; ++ab) Eb[ab] = String.fromCharCode(ab);
    for (ab = 48; ab < 58; ++ab) Eb[ab] = ab - 48 + "";
    for (ab = 65; ab < 91; ++ab) Eb[ab] = String.fromCharCode(ab);
    for (ab = 96; ab < 106; ++ab) Eb[ab] = "<num-" + (ab - 96) + ">";
    for (ab = 112; ab < 136; ++ab) Eb[ab] = "F" + (ab - 111)
  },
  36034: (bb, ab, Ub) => {
    function Ab(bb, ab, Ub, Ab) {
      return !(Ub && !bb.aimable) && (!ab || bb.gun && "head" !== Ab)
    }

    function Mb(bb) {
      return Math.max(.1 * bb, 1)
    }

    function Tb(bb, ab) {
      return !bb && ab
    }
    Ub.d(ab, {
      e: () => Tb,
      i: () => Mb,
      k: () => Ab
    })
  },
  36038: (bb, ab, Ub) => {
    Ub.d(ab, {
      c: () => Yb,
      g: () => Eb
    });
    let Ab = null;
    const Mb = {
        crosshairAccuracy: [],
        turnDamageIndicators: []
      },
      Tb = {
        crosshairAccuracy: bb => {
          const ab = Mb.crosshairAccuracy.at(-1);
          ab ? ab.hook(bb) : Ab = bb
        },
        turnDamageIndicators: bb => {
          var ab;
          null === (ab = Mb.turnDamageIndicators.at(-1)) || void 0 === ab || ab.hook(bb)
        }
      };

    function Eb(bb, ab) {
      const Ub = {
          hook: ab
        },
        Eb = Mb[bb];
      if (Eb.push(Ub), "crosshairAccuracy" === bb && null !== Ab) {
        const bb = Ab;
        Ab = null, Tb.crosshairAccuracy(bb)
      }
      return () => {
        const bb = Eb.indexOf(Ub); - 1 !== bb && Eb.splice(bb, 1)
      }
    }

    function Yb() {
      return Tb
    }
  },
  6294: (bb, ab, Ub) => {
    Ub.d(ab, {
      b: () => Mb,
      f: () => Tb
    });
    var Ab = Ub(31);
    const Mb = "shaderPack";
    async function Tb() {
      var bb;
      let ab = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
      return null !== (bb = await Ab.c.getItem(Mb, ab)) && void 0 !== bb ? bb : null
    }
  },
  8475: (bb, ab, Ub) => {
    Ub.d(ab, {
      d: () => Tb,
      h: () => Mb
    });
    let Ab = !1;

    function Mb() {
      Ab = !0
    }

    function Tb() {
      return Ab
    }
  },
  35886: (bb, ab, Ub) => {
    Ub.r(ab), Ub.d(ab, {
      InGameUi: () => Db.b,
      LobbyLeaderboard: () => zb.d,
      loadCharacterCustomisationUI: () => xb,
      loadCharacterPreview: () => ib,
      matchmakeAndPlay: () => Nb,
      setUpGame: () => fb
    });
    var Ab = Ub(1192),
      Mb = Ub(166),
      Tb = Ub(19),
      Eb = Ub(35892),
      Yb = Ub(35896),
      Bb = Ub(1844),
      eb = Ub(35929);

    function vb() {
      return !1 !== Bb.e.get("canCustomiseChar")
    }
    let Lb = !1;
    var Pb = Ub(1242),
      Xb = Ub(1198),
      jb = Ub(666),
      Rb = Ub(8475);
    var kb = Ub(8468),
      yb = Ub(3237),
      Zb = Ub(1694);
    var Db = Ub(35944),
      zb = Ub(36343);

    function xb() {
      return Promise.all([Ub.e(281), Ub.e(387)]).then((() => Ub(40385)))
    }

    function ib() {
      return Ub.e(282).then((() => Ub(40391)))
    }

    function fb() {
      return (0, kb.f)()
    }
    Lb || (Lb = !0, document.addEventListener("keydown", (bb => {
        (0, eb.c)(bb, vb)
      }))),
      function(bb) {
        var ab;
        return !0 !== (null === bb || void 0 === bb ? void 0 : bb.saveData) && !/2g$/.test(null !== (ab = null === bb || void 0 === bb ? void 0 : bb.effectiveType) && void 0 !== ab ? ab : "")
      }(navigator.connection) && (0, jb.e)((() => {
        (0, Rb.d)() || Promise.all([Ub.e(74), Ub.e(132), Ub.e(87), Ub.e(55)]).then((() => Ub(39877))).then((bb => {
          (0, Rb.d)() || bb.startLoadAheadOfJoin({
            joinStarted: Rb.d,
            language: Xb.f.get().getCurrentLanguageCode()
          })
        }), (bb => {
          console.warn("[bloxd-wasm-client] the loads ahead of a join did not start: the join loads the client itself", bb)
        }))
      }));
    const mb = Tb.c.get("router");
    null === mb ? console.warn("[bloxd-wasm-client] no router as the matchmaking chunk loads: the join's loads start with the join") : function bb(ab) {
      if ((0, Zb.c)(ab.state.location.pathname)) return void(0, kb.b)().catch((() => {}));
      const Ub = ab.subscribe((Ab => {
        (0, Zb.c)(Ab.location.pathname) && (Ub(), (0, yb.b)().then((() => {
          bb(ab)
        })))
      }))
    }(mb), (0, Eb.b)();
    const pb = (0, Yb.b)((async function(bb, ab) {
      let {
        place: Ub,
        userContext: Tb,
        direct: Eb,
        rematch: Yb
      } = bb;
      const Bb = Eb ? 1 / 0 : performance.now();
      let eb;
      try {
        eb = await (0, kb.b)()
      } catch (vb) {
        return console.error("The wasm client did not load:", vb), (0, Pb.r)({
          websocketUrl: null
        }), Ab.e.errorWithCode(String(vb), Mb.k.CONNECT_TO_GAME_SERVER, {
          error: vb,
          severity: ab.aborted ? "low" : "medium",
          xU: ab.aborted
        })
      }
      return eb.playWasmGame({
        userContext: Tb,
        place: Ub,
        matchedAt: Bb,
        rematch: Yb
      }, ab)
    }));

    function Nb() {
      return (0, kb.b)().catch((() => {})), pb(...arguments)
    }
  },
  8468: (bb, ab, Ub) => {
    Ub.d(ab, {
      b: () => vb,
      f: () => Lb
    });
    var Ab = Ub(2875),
      Mb = Ub(2152),
      Tb = Ub(2927),
      Eb = Ub(4338),
      Yb = Ub(3180),
      Bb = Ub(8475);
    let eb = null;

    function vb() {
      return Eb.c.cancelDownloadForJoin(), (0, Yb.e)(), (0, Mb.f)(), (0, Bb.h)(), (0, Tb.k)(), Promise.all([Ub.e(69), Ub.e(72), Ub.e(71), Ub.e(70), Ub.e(83), Ub.e(259), Ub.e(199), Ub.e(216), Ub.e(237), Ub.e(212), Ub.e(46)]).then((() => Ub(39798))).catch((() => {})), Promise.all([Ub.e(74), Ub.e(132), Ub.e(87), Ub.e(55)]).then((() => Ub(39877))).then((bb => {
        let {
          startJoinLoad: ab
        } = bb;
        ab()
      }), (() => {})), eb ??= Promise.all([Ub.e(71), Ub.e(74), Ub.e(129), Ub.e(73), Ub.e(132), Ub.e(262), Ub.e(186), Ub.e(87), Ub.e(86), Ub.e(85), Ub.e(212), Ub.e(60)]).then((() => Ub(39981))).then((bb => (bb.startWasmPlay(), bb.followPageUiPack((bb => {
        Ab.c.showGamePack(bb)
      })), bb)), (bb => {
        throw eb = null, bb
      })), eb
    }

    function Lb() {
      return Promise.all([Ub.e(71), Ub.e(74), Ub.e(129), Ub.e(73), Ub.e(132), Ub.e(262), Ub.e(186), Ub.e(87), Ub.e(86), Ub.e(85), Ub.e(212), Ub.e(60)]).then((() => Ub(39981))).then((bb => {
        bb.startWasmPreviews(), bb.prefetchWasmPreviews()
      }))
    }
  },
  4546: (bb, ab, Ub) => {
    Ub.r(ab), Ub.d(ab, {
      Howl: () => Mb.Howl,
      Howler: () => Mb.Howler,
      iosAudio: () => Bb,
      musicOutput: () => kb,
      readyAudioContext: () => yb
    });
    var Ab, Mb = Ub(4551),
      Tb = Ub(101);
    const Eb = Mb.Howler;
    let Yb;

    function Bb() {
      return Yb ??= "ios" === (0, Tb.getOperatingSystem)(), Yb
    }

    function eb() {
      var bb, ab;
      if (Eb.ctx || !Eb.usingWebAudio || "undefined" === typeof AudioContext || !Bb()) return;
      const Ub = navigator.audioSession;
      let Ab;
      "auto" === (null === Ub || void 0 === Ub ? void 0 : Ub.type) && (Ub.type = "ambient");
      try {
        Ab = new AudioContext({
          sampleRate: 44100
        })
      } catch {
        return
      }
      const Mb = Ab.createGain();
      Mb.gain.setValueAtTime(Eb._muted ? 0 : null !== (bb = Eb._volume) && void 0 !== bb ? bb : 1, Ab.currentTime), Mb.connect(Ab.destination), Eb.ctx = Ab, Eb.masterGain = Mb, null === (ab = Eb._setup) || void 0 === ab || ab.call(Eb)
    }
    Eb._mobileUnloaded = !0;
    const vb = Eb.volume.bind(Mb.Howler);
    Eb.volume = function() {
      return eb(), vb(...arguments)
    };
    const Lb = Eb.mute.bind(Mb.Howler);
    Eb.mute = bb => (eb(), Lb(bb));
    const Pb = Mb.Howl.prototype,
      Xb = Pb.init;
    Pb.init = function(bb) {
      return eb(), Xb.call(this, bb)
    };
    let jb = 0;
    const Rb = null === (Ab = Eb._autoSuspend) || void 0 === Ab ? void 0 : Ab.bind(Mb.Howler);

    function kb() {
      yb();
      const {
        ctx: bb,
        masterGain: ab
      } = Eb;
      return bb && ab ? {
        ctx: bb,
        destination: ab,
        holdAwake: bb => {
          var ab, Ub;
          (jb += bb ? 1 : -1, bb) ? null === (ab = Eb._autoResume) || void 0 === ab || ab.call(Eb): null === (Ub = Eb._autoSuspend) || void 0 === Ub || Ub.call(Eb)
        },
        wake: () => {
          var ab;
          "running" !== bb.state && (null === (ab = Eb._autoResume) || void 0 === ab || ab.call(Eb), bb.resume().catch((() => {})))
        }
      } : null
    }

    function yb() {
      var bb;
      (Eb.volume(), Eb.ctx && Eb.autoUnlock) && (null === (bb = Eb._unlockAudio) || void 0 === bb || bb.call(Eb))
    }
    Rb && (Eb._autoSuspend = () => jb > 0 ? Mb.Howler : Rb())
  },
  36117: (bb, ab, Ub) => {
    Ub.d(ab, {
      c: () => Eb,
      g: () => Mb,
      i: () => Ab
    });

    function Ab(bb) {
      return bb.replace(/[_\-\s]*\d+$/, "") || bb
    }

    function Mb(bb, ab, Ub) {
      return Ub <= 0 ? 0 : bb * Ub / Math.max(ab, Ub)
    }

    function Tb(bb, ab) {
      const Ub = bb.getDurationMs();
      return Ub > 0 ? bb.loudness * Math.max(0, 1 - (ab - bb.startMs) / Ub) : 0
    }
    class Eb {
      constructor() {
        let bb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 24,
          ab = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 6;
        this.maxVoices = bb, this.maxPerGroup = ab, this.voices = []
      }
      admit(bb) {
        if (this.voices = this.voices.filter((bb => bb.isAlive())), null !== bb.group) {
          const ab = this.voices.filter((ab => ab.group === bb.group));
          if (ab.length >= this.maxPerGroup && !this.dropLeastWorth(ab, bb)) return !1
        }
        return !(this.voices.length >= this.maxVoices && !this.dropLeastWorth(this.voices, bb)) && (this.voices.push(bb), !0)
      }
      dropLeastWorth(bb, ab) {
        let Ub = null,
          Ab = 1 / 0;
        for (const Mb of bb) {
          if (!Mb.canStop()) continue;
          const bb = Tb(Mb, ab.startMs);
          bb < Ab && (Ub = Mb, Ab = bb)
        }
        return !(!Ub || ab.loudness < Ab) && (this.voices.splice(this.voices.indexOf(Ub), 1), Ub.stop(), !0)
      }
    }
  },
  36125: (bb, ab, Ub) => {
    Ub.d(ab, {
      d: () => Tb,
      e: () => Eb,
      i: () => Ab
    });
    class Ab {
      constructor(bb) {
        this.multipliers = {}, this._onUpdate = void 0, this._onUpdate = bb
      }
      setMultiplierType(bb, ab) {
        var Ub;
        this.multipliers[bb] = ab, null === (Ub = this._onUpdate) || void 0 === Ub || Ub.call(this)
      }
      removeMultiplier(bb) {
        var ab;
        delete this.multipliers[bb], null === (ab = this._onUpdate) || void 0 === ab || ab.call(this)
      }
      getMultiplierType(bb) {
        return this.multipliers[bb]
      }
      getTotalMultipliedVal() {
        let bb = 1;
        for (const ab in this.multipliers) bb *= this.multipliers[ab];
        return bb
      }
    }
    class Mb {
      constructor() {
        let bb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
        this.booleans = {}, this._onUpdate = void 0, this._onUpdate = bb
      }
      setBooleanType(bb, ab) {
        const Ub = this._getTotalBooleanVal();
        this.booleans[bb] = !!ab;
        const Ab = this.getTotalBooleanVal();
        var Mb;
        Ab !== Ub && (null === (Mb = this._onUpdate) || void 0 === Mb || Mb.call(this, Ab, this.booleans));
        return Ab
      }
      removeBoolean(bb) {
        const ab = this._getTotalBooleanVal();
        delete this.booleans[bb];
        const Ub = this._getTotalBooleanVal();
        var Ab;
        null !== Ub && Ub !== ab && (null === (Ab = this._onUpdate) || void 0 === Ab || Ab.call(this, Ub, this.booleans));
        return null !== Ub && void 0 !== Ub && Ub
      }
      getBooleanType(bb) {
        return this.booleans[bb]
      }
      getTotalBooleanVal() {
        throw new Error("This is an abstract class, use BooleanAndCombinator")
      }
      forceUpdate() {
        var bb;
        null === (bb = this._onUpdate) || void 0 === bb || bb.call(this, this.getTotalBooleanVal(), this.booleans)
      }
      _getTotalBooleanVal() {
        throw new Error("This is an abstract class, use BooleanAndCombinator")
      }
    }
    class Tb extends Mb {
      getTotalBooleanVal() {
        const bb = this._getTotalBooleanVal();
        if (null === bb) throw new Error("Should not be gotten before at least 1 type has been initialised");
        return bb
      }
      _getTotalBooleanVal() {
        let bb = !1,
          ab = !0;
        for (const Ub in this.booleans) bb = !0, ab &&= this.booleans[Ub];
        return bb ? ab : null
      }
    }
    class Eb extends Mb {
      getTotalBooleanVal() {
        const bb = this._getTotalBooleanVal();
        if (null === bb) throw new Error("Should not be gotten before at least 1 type has been initialised");
        return bb
      }
      _getTotalBooleanVal() {
        let bb = !1,
          ab = !1;
        for (const Ub in this.booleans) bb = !0, ab ||= this.booleans[Ub];
        return bb ? ab : null
      }
    }
  },
  9094: (bb, ab, Ub) => {
    Ub.d(ab, {
      c: () => Mb,
      f: () => Tb
    });
    var Ab = Ub(9043);
    const Mb = "Air",
      Tb = Object.freeze(new Ab.h(Mb, 0, "", null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null))
  },
  36122: (bb, ab, Ub) => {
    Ub.d(ab, {
      e: () => Tb,
      g: () => Ab,
      i: () => Mb
    });
    const Ab = 15,
      Mb = 3,
      Tb = 30
  }
};
Object.freeze(modules);
for (const bb in modules) Object.freeze(modules[bb]);