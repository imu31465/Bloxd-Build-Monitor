/*! For license information please see fsa8nn.wasmMatchmaking.d70986a1.chunk.js.LICENSE.txt */
export const id = 59;
export const ids = [59, 91];
export const modules = {
  36201: (bb, cb) => {
    function sb(bb) {
      if (bb && "object" === typeof bb) {
        var cb = bb.which || bb.keyCode || bb.charCode;
        cb && (bb = cb)
      }
      if ("number" === typeof bb) return Tb[bb];
      var sb, ab = String(bb);
      return (sb = kb[ab.toLowerCase()]) ? sb : (sb = Wb[ab.toLowerCase()]) || (1 === ab.length ? ab.charCodeAt(0) : void 0)
    }
    sb.isEventKey = function(bb, cb) {
      if (bb && "object" === typeof bb) {
        var sb = bb.which || bb.keyCode || bb.charCode;
        if (null === sb || void 0 === sb) return !1;
        if ("string" === typeof cb) {
          var ab;
          if (ab = kb[cb.toLowerCase()]) return ab === sb;
          if (ab = Wb[cb.toLowerCase()]) return ab === sb
        } else if ("number" === typeof cb) return cb === sb;
        return !1
      }
    };
    var kb = (cb = bb.exports = sb).code = cb.codes = {
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
      Wb = cb.aliases = {
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
    for (ab = 97; ab < 123; ab++) kb[String.fromCharCode(ab)] = ab - 32;
    for (var ab = 48; ab < 58; ab++) kb[ab - 48] = ab;
    for (ab = 1; ab < 13; ab++) kb["f" + ab] = ab + 111;
    for (ab = 0; ab < 10; ab++) kb["numpad " + ab] = ab + 96;
    var Tb = cb.names = cb.title = {};
    for (ab in kb) Tb[kb[ab]] = ab;
    for (var Ub in Wb) kb[Ub] = Wb[Ub]
  },
  36344: (bb, cb, sb) => {
    sb.d(cb, {
      e: () => Tb
    });
    var kb = sb(64);
    const Wb = kb.useLayoutEffect;
    const ab = function(bb) {
      var cb = (0, kb.useRef)(bb);
      return Wb((function() {
        cb.current = bb
      })), cb
    };
    var Tb = function(bb) {
      var cb = ab(bb);
      (0, kb.useEffect)((function() {
        var bb = function(bb) {
          var sb;
          if (null != cb.current && (sb = cb.current(bb)), bb.defaultPrevented && (bb.returnValue = ""), "string" === typeof sb) return bb.returnValue = sb, sb
        };
        return window.addEventListener("beforeunload", bb),
          function() {
            window.removeEventListener("beforeunload", bb)
          }
      }), [])
    }
  },
  36231: bb => {
    var cb, sb = "undefined" !== typeof window ? window.navigator.userAgent : "",
      kb = /OS X/.test(sb),
      Wb = /Opera/.test(sb),
      ab = !/like Gecko/.test(sb) && !Wb,
      Tb = bb.exports = {
        0: kb ? "<menu>" : "<UNK>",
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
        93: kb ? "<meta>" : "<menu>",
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
        173: kb && ab ? "-" : "<volume-mute>",
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
        231: Wb ? "`" : "<unicode>",
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
    for (cb = 58; cb < 65; ++cb) Tb[cb] = String.fromCharCode(cb);
    for (cb = 48; cb < 58; ++cb) Tb[cb] = cb - 48 + "";
    for (cb = 65; cb < 91; ++cb) Tb[cb] = String.fromCharCode(cb);
    for (cb = 96; cb < 106; ++cb) Tb[cb] = "<num-" + (cb - 96) + ">";
    for (cb = 112; cb < 136; ++cb) Tb[cb] = "F" + (cb - 111)
  },
  36258: (bb, cb, sb) => {
    function kb(bb, cb, sb, kb) {
      return !(sb && !bb.aimable) && (!cb || bb.gun && "head" !== kb)
    }

    function Wb(bb) {
      return Math.max(.1 * bb, 1)
    }

    function ab(bb, cb) {
      return !bb && cb
    }
    sb.d(cb, {
      e: () => ab,
      g: () => Wb,
      k: () => kb
    })
  },
  36263: (bb, cb, sb) => {
    sb.d(cb, {
      e: () => Ub,
      i: () => Tb
    });
    let kb = null;
    const Wb = {
        crosshairAccuracy: [],
        turnDamageIndicators: []
      },
      ab = {
        crosshairAccuracy: bb => {
          const cb = Wb.crosshairAccuracy.at(-1);
          cb ? cb.hook(bb) : kb = bb
        },
        turnDamageIndicators: bb => {
          var cb;
          null === (cb = Wb.turnDamageIndicators.at(-1)) || void 0 === cb || cb.hook(bb)
        }
      };

    function Tb(bb, cb) {
      const sb = {
          hook: cb
        },
        Tb = Wb[bb];
      if (Tb.push(sb), "crosshairAccuracy" === bb && null !== kb) {
        const bb = kb;
        kb = null, ab.crosshairAccuracy(bb)
      }
      return () => {
        const bb = Tb.indexOf(sb); - 1 !== bb && Tb.splice(bb, 1)
      }
    }

    function Ub() {
      return ab
    }
  },
  6328: (bb, cb, sb) => {
    sb.d(cb, {
      b: () => Wb,
      d: () => ab
    });
    var kb = sb(37);
    const Wb = "shaderPack";
    async function ab() {
      var bb;
      let cb = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
      return null !== (bb = await kb.d.getItem(Wb, cb)) && void 0 !== bb ? bb : null
    }
  },
  8514: (bb, cb, sb) => {
    sb.d(cb, {
      c: () => ab,
      d: () => Wb
    });
    let kb = !1;

    function Wb() {
      kb = !0
    }

    function ab() {
      return kb
    }
  },
  36099: (bb, cb, sb) => {
    sb.r(cb), sb.d(cb, {
      InGameUi: () => Nb.c,
      LobbyLeaderboard: () => Vb.e,
      loadCharacterCustomisationUI: () => Lb,
      loadCharacterPreview: () => ub,
      matchmakeAndPlay: () => gb,
      setUpGame: () => Yb
    });
    var kb = sb(1255),
      Wb = sb(195),
      ab = sb(19),
      Tb = sb(36102),
      Ub = sb(36106),
      Ib = sb(1895),
      Hb = sb(36142);

    function fb() {
      return !1 !== Ib.e.get("canCustomiseChar")
    }
    let Mb = !1;
    var Xb = sb(1312),
      nb = sb(1258),
      mb = sb(706),
      lb = sb(8514);
    var Qb = sb(8512),
      eb = sb(3369),
      Cb = sb(1763);
    var Nb = sb(36156),
      Vb = sb(36576);

    function Lb() {
      return Promise.all([sb.e(281), sb.e(387)]).then((() => sb(40707)))
    }

    function ub() {
      return sb.e(282).then((() => sb(40713)))
    }

    function Yb() {
      return (0, Qb.h)()
    }
    Mb || (Mb = !0, document.addEventListener("keydown", (bb => {
        (0, Hb.e)(bb, fb)
      }))),
      function(bb) {
        var cb;
        return !0 !== (null === bb || void 0 === bb ? void 0 : bb.saveData) && !/2g$/.test(null !== (cb = null === bb || void 0 === bb ? void 0 : bb.effectiveType) && void 0 !== cb ? cb : "")
      }(navigator.connection) && (0, mb.d)((() => {
        (0, lb.c)() || Promise.all([sb.e(74), sb.e(132), sb.e(87), sb.e(55)]).then((() => sb(40182))).then((bb => {
          (0, lb.c)() || bb.startLoadAheadOfJoin({
            joinStarted: lb.c,
            language: nb.e.get().getCurrentLanguageCode()
          })
        }), (bb => {
          console.warn("[bloxd-wasm-client] the loads ahead of a join did not start: the join loads the client itself", bb)
        }))
      }));
    const hb = ab.d.get("router");
    null === hb ? console.warn("[bloxd-wasm-client] no router as the matchmaking chunk loads: the join's loads start with the join") : function bb(cb) {
      if ((0, Cb.c)(cb.state.location.pathname)) return void(0, Qb.e)().catch((() => {}));
      const sb = cb.subscribe((kb => {
        (0, Cb.c)(kb.location.pathname) && (sb(), (0, eb.e)().then((() => {
          bb(cb)
        })))
      }))
    }(hb), (0, Tb.b)();
    const Jb = (0, Ub.d)((async function(bb, cb) {
      let {
        place: sb,
        userContext: ab,
        direct: Tb,
        rematch: Ub
      } = bb;
      const Ib = Tb ? 1 / 0 : performance.now();
      let Hb;
      try {
        Hb = await (0, Qb.e)()
      } catch (fb) {
        return console.error("The wasm client did not load:", fb), (0, Xb.o)({
          websocketUrl: null
        }), kb.d.errorWithCode(String(fb), Wb.k.CONNECT_TO_GAME_SERVER, {
          error: fb,
          severity: cb.aborted ? "low" : "medium",
          Gs: cb.aborted
        })
      }
      return Hb.playWasmGame({
        userContext: ab,
        place: sb,
        matchedAt: Ib,
        rematch: Ub
      }, cb)
    }));

    function gb() {
      return (0, Qb.e)().catch((() => {})), Jb(...arguments)
    }
  },
  8512: (bb, cb, sb) => {
    sb.d(cb, {
      e: () => fb,
      h: () => Mb
    });
    var kb = sb(2904),
      Wb = sb(2199),
      ab = sb(2946),
      Tb = sb(4386),
      Ub = sb(3294),
      Ib = sb(8514);
    let Hb = null;

    function fb() {
      return Tb.b.cancelDownloadForJoin(), (0, Ub.b)(), (0, Wb.e)(), (0, Ib.d)(), (0, ab.l)(), Promise.all([sb.e(69), sb.e(72), sb.e(71), sb.e(70), sb.e(83), sb.e(259), sb.e(199), sb.e(216), sb.e(237), sb.e(212), sb.e(46)]).then((() => sb(40112))).catch((() => {})), Promise.all([sb.e(74), sb.e(132), sb.e(87), sb.e(55)]).then((() => sb(40182))).then((bb => {
        let {
          startJoinLoad: cb
        } = bb;
        cb()
      }), (() => {})), Hb ??= Promise.all([sb.e(71), sb.e(74), sb.e(129), sb.e(73), sb.e(132), sb.e(262), sb.e(186), sb.e(87), sb.e(86), sb.e(85), sb.e(212), sb.e(60)]).then((() => sb(40275))).then((bb => (bb.startWasmPlay(), bb.followPageUiPack((bb => {
        kb.e.showGamePack(bb)
      })), bb)), (bb => {
        throw Hb = null, bb
      })), Hb
    }

    function Mb() {
      return Promise.all([sb.e(71), sb.e(74), sb.e(129), sb.e(73), sb.e(132), sb.e(262), sb.e(186), sb.e(87), sb.e(86), sb.e(85), sb.e(212), sb.e(60)]).then((() => sb(40275))).then((bb => {
        bb.startWasmPreviews(), bb.prefetchWasmPreviews()
      }))
    }
  },
  4579: (bb, cb, sb) => {
    sb.r(cb), sb.d(cb, {
      Howl: () => Wb.Howl,
      Howler: () => Wb.Howler,
      iosAudio: () => Ib,
      musicOutput: () => Qb,
      readyAudioContext: () => eb
    });
    var kb, Wb = sb(4585),
      ab = sb(117);
    const Tb = Wb.Howler;
    let Ub;

    function Ib() {
      return Ub ??= "ios" === (0, ab.getOperatingSystem)(), Ub
    }

    function Hb() {
      var bb, cb;
      if (Tb.ctx || !Tb.usingWebAudio || "undefined" === typeof AudioContext || !Ib()) return;
      const sb = navigator.audioSession;
      let kb;
      "auto" === (null === sb || void 0 === sb ? void 0 : sb.type) && (sb.type = "ambient");
      try {
        kb = new AudioContext({
          sampleRate: 44100
        })
      } catch {
        return
      }
      const Wb = kb.createGain();
      Wb.gain.setValueAtTime(Tb._muted ? 0 : null !== (bb = Tb._volume) && void 0 !== bb ? bb : 1, kb.currentTime), Wb.connect(kb.destination), Tb.ctx = kb, Tb.masterGain = Wb, null === (cb = Tb._setup) || void 0 === cb || cb.call(Tb)
    }
    Tb._mobileUnloaded = !0;
    const fb = Tb.volume.bind(Wb.Howler);
    Tb.volume = function() {
      return Hb(), fb(...arguments)
    };
    const Mb = Tb.mute.bind(Wb.Howler);
    Tb.mute = bb => (Hb(), Mb(bb));
    const Xb = Wb.Howl.prototype,
      nb = Xb.init;
    Xb.init = function(bb) {
      return Hb(), nb.call(this, bb)
    };
    let mb = 0;
    const lb = null === (kb = Tb._autoSuspend) || void 0 === kb ? void 0 : kb.bind(Wb.Howler);

    function Qb() {
      eb();
      const {
        ctx: bb,
        masterGain: cb
      } = Tb;
      return bb && cb ? {
        ctx: bb,
        destination: cb,
        holdAwake: bb => {
          var cb, sb;
          (mb += bb ? 1 : -1, bb) ? null === (cb = Tb._autoResume) || void 0 === cb || cb.call(Tb): null === (sb = Tb._autoSuspend) || void 0 === sb || sb.call(Tb)
        },
        wake: () => {
          var cb;
          "running" !== bb.state && (null === (cb = Tb._autoResume) || void 0 === cb || cb.call(Tb), bb.resume().catch((() => {})))
        }
      } : null
    }

    function eb() {
      var bb;
      (Tb.volume(), Tb.ctx && Tb.autoUnlock) && (null === (bb = Tb._unlockAudio) || void 0 === bb || bb.call(Tb))
    }
    lb && (Tb._autoSuspend = () => mb > 0 ? Wb.Howler : lb())
  },
  36367: (bb, cb, sb) => {
    sb.d(cb, {
      c: () => Tb,
      d: () => Wb,
      e: () => kb
    });

    function kb(bb) {
      return bb.replace(/[_\-\s]*\d+$/, "") || bb
    }

    function Wb(bb, cb, sb) {
      return sb <= 0 ? 0 : bb * sb / Math.max(cb, sb)
    }

    function ab(bb, cb) {
      const sb = bb.getDurationMs();
      return sb > 0 ? bb.loudness * Math.max(0, 1 - (cb - bb.startMs) / sb) : 0
    }
    class Tb {
      constructor() {
        let bb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 24,
          cb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 6;
        this.maxVoices = bb, this.maxPerGroup = cb, this.voices = []
      }
      admit(bb) {
        if (this.voices = this.voices.filter((bb => bb.isAlive())), null !== bb.group) {
          const cb = this.voices.filter((cb => cb.group === bb.group));
          if (cb.length >= this.maxPerGroup && !this.dropLeastWorth(cb, bb)) return !1
        }
        return !(this.voices.length >= this.maxVoices && !this.dropLeastWorth(this.voices, bb)) && (this.voices.push(bb), !0)
      }
      dropLeastWorth(bb, cb) {
        let sb = null,
          kb = 1 / 0;
        for (const Wb of bb) {
          if (!Wb.canStop()) continue;
          const bb = ab(Wb, cb.startMs);
          bb < kb && (sb = Wb, kb = bb)
        }
        return !(!sb || cb.loudness < kb) && (this.voices.splice(this.voices.indexOf(sb), 1), sb.stop(), !0)
      }
    }
  },
  36374: (bb, cb, sb) => {
    sb.d(cb, {
      c: () => ab,
      e: () => Tb,
      h: () => kb
    });
    class kb {
      constructor(bb) {
        this.multipliers = {}, this._onUpdate = void 0, this._onUpdate = bb
      }
      setMultiplierType(bb, cb) {
        var sb;
        this.multipliers[bb] = cb, null === (sb = this._onUpdate) || void 0 === sb || sb.call(this)
      }
      removeMultiplier(bb) {
        var cb;
        delete this.multipliers[bb], null === (cb = this._onUpdate) || void 0 === cb || cb.call(this)
      }
      getMultiplierType(bb) {
        return this.multipliers[bb]
      }
      getTotalMultipliedVal() {
        let bb = 1;
        for (const cb in this.multipliers) bb *= this.multipliers[cb];
        return bb
      }
    }
    class Wb {
      constructor() {
        let bb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
        this.booleans = {}, this._onUpdate = void 0, this._onUpdate = bb
      }
      setBooleanType(bb, cb) {
        const sb = this._getTotalBooleanVal();
        this.booleans[bb] = !!cb;
        const kb = this.getTotalBooleanVal();
        var Wb;
        kb !== sb && (null === (Wb = this._onUpdate) || void 0 === Wb || Wb.call(this, kb, this.booleans));
        return kb
      }
      removeBoolean(bb) {
        const cb = this._getTotalBooleanVal();
        delete this.booleans[bb];
        const sb = this._getTotalBooleanVal();
        var kb;
        null !== sb && sb !== cb && (null === (kb = this._onUpdate) || void 0 === kb || kb.call(this, sb, this.booleans));
        return null !== sb && void 0 !== sb && sb
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
    class ab extends Wb {
      getTotalBooleanVal() {
        const bb = this._getTotalBooleanVal();
        if (null === bb) throw new Error("Should not be gotten before at least 1 type has been initialised");
        return bb
      }
      _getTotalBooleanVal() {
        let bb = !1,
          cb = !0;
        for (const sb in this.booleans) bb = !0, cb &&= this.booleans[sb];
        return bb ? cb : null
      }
    }
    class Tb extends Wb {
      getTotalBooleanVal() {
        const bb = this._getTotalBooleanVal();
        if (null === bb) throw new Error("Should not be gotten before at least 1 type has been initialised");
        return bb
      }
      _getTotalBooleanVal() {
        let bb = !1,
          cb = !1;
        for (const sb in this.booleans) bb = !0, cb ||= this.booleans[sb];
        return bb ? cb : null
      }
    }
  },
  9103: (bb, cb, sb) => {
    sb.d(cb, {
      c: () => Wb,
      f: () => ab
    });
    var kb = sb(9064);
    const Wb = "Air",
      ab = Object.freeze(new kb.f(Wb, 0, "", null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null))
  },
  36372: (bb, cb, sb) => {
    sb.d(cb, {
      e: () => ab,
      h: () => kb,
      l: () => Wb
    });
    const kb = 15,
      Wb = 3,
      ab = 30
  }
};
Object.freeze(modules);
for (const bb in modules) Object.freeze(modules[bb]);