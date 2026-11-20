/*! For license information please see 7rj44.wasmMatchmaking.5af1e672.chunk.js.LICENSE.txt */
export const id = 59;
export const ids = [59, 91];
export const modules = {
  36033: (zz, tz) => {
    function sz(zz) {
      if (zz && "object" === typeof zz) {
        var tz = zz.which || zz.keyCode || zz.charCode;
        tz && (zz = tz)
      }
      if ("number" === typeof zz) return Oz[zz];
      var sz, Xz = String(zz);
      return (sz = Fz[Xz.toLowerCase()]) ? sz : (sz = Wz[Xz.toLowerCase()]) || (1 === Xz.length ? Xz.charCodeAt(0) : void 0)
    }
    sz.isEventKey = function(zz, tz) {
      if (zz && "object" === typeof zz) {
        var sz = zz.which || zz.keyCode || zz.charCode;
        if (null === sz || void 0 === sz) return !1;
        if ("string" === typeof tz) {
          var Xz;
          if (Xz = Fz[tz.toLowerCase()]) return Xz === sz;
          if (Xz = Wz[tz.toLowerCase()]) return Xz === sz
        } else if ("number" === typeof tz) return tz === sz;
        return !1
      }
    };
    var Fz = (tz = zz.exports = sz).code = tz.codes = {
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
      Wz = tz.aliases = {
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
    for (Xz = 97; Xz < 123; Xz++) Fz[String.fromCharCode(Xz)] = Xz - 32;
    for (var Xz = 48; Xz < 58; Xz++) Fz[Xz - 48] = Xz;
    for (Xz = 1; Xz < 13; Xz++) Fz["f" + Xz] = Xz + 111;
    for (Xz = 0; Xz < 10; Xz++) Fz["numpad " + Xz] = Xz + 96;
    var Oz = tz.names = tz.title = {};
    for (Xz in Fz) Oz[Fz[Xz]] = Xz;
    for (var oz in Wz) Fz[oz] = Wz[oz]
  },
  36186: (zz, tz, sz) => {
    sz.d(tz, {
      d: () => Oz
    });
    var Fz = sz(65);
    const Wz = Fz.useLayoutEffect;
    const Xz = function(zz) {
      var tz = (0, Fz.useRef)(zz);
      return Wz((function() {
        tz.current = zz
      })), tz
    };
    var Oz = function(zz) {
      var tz = Xz(zz);
      (0, Fz.useEffect)((function() {
        var zz = function(zz) {
          var sz;
          if (null != tz.current && (sz = tz.current(zz)), zz.defaultPrevented && (zz.returnValue = ""), "string" === typeof sz) return zz.returnValue = sz, sz
        };
        return window.addEventListener("beforeunload", zz),
          function() {
            window.removeEventListener("beforeunload", zz)
          }
      }), [])
    }
  },
  36064: zz => {
    var tz, sz = "undefined" !== typeof window ? window.navigator.userAgent : "",
      Fz = /OS X/.test(sz),
      Wz = /Opera/.test(sz),
      Xz = !/like Gecko/.test(sz) && !Wz,
      Oz = zz.exports = {
        0: Fz ? "<menu>" : "<UNK>",
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
        93: Fz ? "<meta>" : "<menu>",
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
        173: Fz && Xz ? "-" : "<volume-mute>",
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
        231: Wz ? "`" : "<unicode>",
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
    for (tz = 58; tz < 65; ++tz) Oz[tz] = String.fromCharCode(tz);
    for (tz = 48; tz < 58; ++tz) Oz[tz] = tz - 48 + "";
    for (tz = 65; tz < 91; ++tz) Oz[tz] = String.fromCharCode(tz);
    for (tz = 96; tz < 106; ++tz) Oz[tz] = "<num-" + (tz - 96) + ">";
    for (tz = 112; tz < 136; ++tz) Oz[tz] = "F" + (tz - 111)
  },
  36103: (zz, tz, sz) => {
    function Fz(zz, tz, sz, Fz) {
      return !(sz && !zz.aimable) && (!tz || zz.gun && "head" !== Fz)
    }

    function Wz(zz) {
      return Math.max(.1 * zz, 1)
    }

    function Xz(zz, tz) {
      return !zz && tz
    }
    sz.d(tz, {
      c: () => Xz,
      g: () => Wz,
      h: () => Fz
    })
  },
  36112: (zz, tz, sz) => {
    sz.d(tz, {
      e: () => oz,
      i: () => Oz
    });
    let Fz = null;
    const Wz = {
        crosshairAccuracy: [],
        turnDamageIndicators: []
      },
      Xz = {
        crosshairAccuracy: zz => {
          const tz = Wz.crosshairAccuracy.at(-1);
          tz ? tz.hook(zz) : Fz = zz
        },
        turnDamageIndicators: zz => {
          var tz;
          null === (tz = Wz.turnDamageIndicators.at(-1)) || void 0 === tz || tz.hook(zz)
        }
      };

    function Oz(zz, tz) {
      const sz = {
          hook: tz
        },
        Oz = Wz[zz];
      if (Oz.push(sz), "crosshairAccuracy" === zz && null !== Fz) {
        const zz = Fz;
        Fz = null, Xz.crosshairAccuracy(zz)
      }
      return () => {
        const zz = Oz.indexOf(sz); - 1 !== zz && Oz.splice(zz, 1)
      }
    }

    function oz() {
      return Xz
    }
  },
  6237: (zz, tz, sz) => {
    sz.d(tz, {
      e: () => Wz,
      g: () => Xz
    });
    var Fz = sz(44);
    const Wz = "shaderPack";
    async function Xz() {
      var zz;
      let tz = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
      return null !== (zz = await Fz.e.getItem(Wz, tz)) && void 0 !== zz ? zz : null
    }
  },
  8410: (zz, tz, sz) => {
    sz.d(tz, {
      c: () => Xz,
      e: () => Wz
    });
    let Fz = !1;

    function Wz() {
      Fz = !0
    }

    function Xz() {
      return Fz
    }
  },
  35949: (zz, tz, sz) => {
    sz.r(tz), sz.d(tz, {
      InGameUi: () => Pz.e,
      LobbyLeaderboard: () => rz.c,
      loadCharacterCustomisationUI: () => Yz,
      loadCharacterPreview: () => xz,
      matchmakeAndPlay: () => Cz,
      setUpGame: () => mz
    });
    var Fz = sz(1230),
      Wz = sz(161),
      Xz = sz(30),
      Oz = sz(35951),
      oz = sz(35957),
      vz = sz(1884),
      Uz = sz(35981);

    function Kz() {
      return !1 !== vz.e.get("canCustomiseChar")
    }
    let uz = !1;
    var Nz = sz(1293),
      bz = sz(1237),
      wz = sz(668),
      Dz = sz(8410);
    var gz = sz(8401),
      Hz = sz(3252),
      Bz = sz(1737);
    var Pz = sz(35992),
      rz = sz(36414);

    function Yz() {
      return Promise.all([sz.e(281), sz.e(387)]).then((() => sz(40397)))
    }

    function xz() {
      return sz.e(282).then((() => sz(40406)))
    }

    function mz() {
      return (0, gz.g)()
    }
    uz || (uz = !0, document.addEventListener("keydown", (zz => {
        (0, Uz.e)(zz, Kz)
      }))),
      function(zz) {
        var tz;
        return !0 !== (null === zz || void 0 === zz ? void 0 : zz.saveData) && !/2g$/.test(null !== (tz = null === zz || void 0 === zz ? void 0 : zz.effectiveType) && void 0 !== tz ? tz : "")
      }(navigator.connection) && (0, wz.d)((() => {
        (0, Dz.c)() || Promise.all([sz.e(74), sz.e(132), sz.e(87), sz.e(55)]).then((() => sz(39873))).then((zz => {
          (0, Dz.c)() || zz.startLoadAheadOfJoin({
            joinStarted: Dz.c,
            language: bz.g.get().getCurrentLanguageCode()
          })
        }), (zz => {
          console.warn("[bloxd-wasm-client] the loads ahead of a join did not start: the join loads the client itself", zz)
        }))
      }));
    const Jz = Xz.b.get("router");
    null === Jz ? console.warn("[bloxd-wasm-client] no router as the matchmaking chunk loads: the join's loads start with the join") : function zz(tz) {
      if ((0, Bz.b)(tz.state.location.pathname)) return void(0, gz.c)().catch((() => {}));
      const sz = tz.subscribe((Fz => {
        (0, Bz.b)(Fz.location.pathname) && (sz(), (0, Hz.d)().then((() => {
          zz(tz)
        })))
      }))
    }(Jz), (0, Oz.d)();
    const Iz = (0, oz.e)((async function(zz, tz) {
      let {
        place: sz,
        userContext: Xz,
        direct: Oz,
        rematch: oz
      } = zz;
      const vz = Oz ? 1 / 0 : performance.now();
      let Uz;
      try {
        Uz = await (0, gz.c)()
      } catch (Kz) {
        return console.error("The wasm client did not load:", Kz), (0, Nz.q)({
          websocketUrl: null
        }), Fz.e.errorWithCode(String(Kz), Wz.k.CONNECT_TO_GAME_SERVER, {
          error: Kz,
          severity: tz.aborted ? "low" : "medium",
          ds: tz.aborted
        })
      }
      return Uz.playWasmGame({
        userContext: Xz,
        place: sz,
        matchedAt: vz,
        rematch: oz
      }, tz)
    }));

    function Cz() {
      return (0, gz.c)().catch((() => {})), Iz(...arguments)
    }
  },
  8401: (zz, tz, sz) => {
    sz.d(tz, {
      c: () => Kz,
      g: () => uz
    });
    var Fz = sz(2873),
      Wz = sz(2189),
      Xz = sz(2910),
      Oz = sz(4302),
      oz = sz(3169),
      vz = sz(8410);
    let Uz = null;

    function Kz() {
      return Oz.d.cancelDownloadForJoin(), (0, oz.c)(), (0, Wz.d)(), (0, vz.e)(), (0, Xz.i)(), Promise.all([sz.e(69), sz.e(72), sz.e(71), sz.e(70), sz.e(83), sz.e(259), sz.e(199), sz.e(216), sz.e(237), sz.e(212), sz.e(46)]).then((() => sz(39803))).catch((() => {})), Promise.all([sz.e(74), sz.e(132), sz.e(87), sz.e(55)]).then((() => sz(39873))).then((zz => {
        let {
          startJoinLoad: tz
        } = zz;
        tz()
      }), (() => {})), Uz ??= Promise.all([sz.e(71), sz.e(74), sz.e(129), sz.e(73), sz.e(132), sz.e(262), sz.e(186), sz.e(87), sz.e(86), sz.e(85), sz.e(212), sz.e(60)]).then((() => sz(39950))).then((zz => (zz.startWasmPlay(), zz.followPageUiPack((zz => {
        Fz.d.showGamePack(zz)
      })), zz)), (zz => {
        throw Uz = null, zz
      })), Uz
    }

    function uz() {
      return Promise.all([sz.e(71), sz.e(74), sz.e(129), sz.e(73), sz.e(132), sz.e(262), sz.e(186), sz.e(87), sz.e(86), sz.e(85), sz.e(212), sz.e(60)]).then((() => sz(39950))).then((zz => {
        zz.startWasmPreviews(), zz.prefetchWasmPreviews()
      }))
    }
  },
  4488: (zz, tz, sz) => {
    sz.r(tz), sz.d(tz, {
      Howl: () => Wz.Howl,
      Howler: () => Wz.Howler,
      iosAudio: () => vz,
      musicOutput: () => gz,
      readyAudioContext: () => Hz
    });
    var Fz, Wz = sz(4491),
      Xz = sz(106);
    const Oz = Wz.Howler;
    let oz;

    function vz() {
      return oz ??= "ios" === (0, Xz.getOperatingSystem)(), oz
    }

    function Uz() {
      var zz, tz;
      if (Oz.ctx || !Oz.usingWebAudio || "undefined" === typeof AudioContext || !vz()) return;
      const sz = navigator.audioSession;
      let Fz;
      "auto" === (null === sz || void 0 === sz ? void 0 : sz.type) && (sz.type = "ambient");
      try {
        Fz = new AudioContext({
          sampleRate: 44100
        })
      } catch {
        return
      }
      const Wz = Fz.createGain();
      Wz.gain.setValueAtTime(Oz._muted ? 0 : null !== (zz = Oz._volume) && void 0 !== zz ? zz : 1, Fz.currentTime), Wz.connect(Fz.destination), Oz.ctx = Fz, Oz.masterGain = Wz, null === (tz = Oz._setup) || void 0 === tz || tz.call(Oz)
    }
    Oz._mobileUnloaded = !0;
    const Kz = Oz.volume.bind(Wz.Howler);
    Oz.volume = function() {
      return Uz(), Kz(...arguments)
    };
    const uz = Oz.mute.bind(Wz.Howler);
    Oz.mute = zz => (Uz(), uz(zz));
    const Nz = Wz.Howl.prototype,
      bz = Nz.init;
    Nz.init = function(zz) {
      return Uz(), bz.call(this, zz)
    };
    let wz = 0;
    const Dz = null === (Fz = Oz._autoSuspend) || void 0 === Fz ? void 0 : Fz.bind(Wz.Howler);

    function gz() {
      Hz();
      const {
        ctx: zz,
        masterGain: tz
      } = Oz;
      return zz && tz ? {
        ctx: zz,
        destination: tz,
        holdAwake: zz => {
          var tz, sz;
          (wz += zz ? 1 : -1, zz) ? null === (tz = Oz._autoResume) || void 0 === tz || tz.call(Oz): null === (sz = Oz._autoSuspend) || void 0 === sz || sz.call(Oz)
        },
        wake: () => {
          var tz;
          "running" !== zz.state && (null === (tz = Oz._autoResume) || void 0 === tz || tz.call(Oz), zz.resume().catch((() => {})))
        }
      } : null
    }

    function Hz() {
      var zz;
      (Oz.volume(), Oz.ctx && Oz.autoUnlock) && (null === (zz = Oz._unlockAudio) || void 0 === zz || zz.call(Oz))
    }
    Dz && (Oz._autoSuspend = () => wz > 0 ? Wz.Howler : Dz())
  },
  36204: (zz, tz, sz) => {
    sz.d(tz, {
      e: () => Oz,
      i: () => Wz,
      m: () => Fz
    });

    function Fz(zz) {
      return zz.replace(/[_\-\s]*\d+$/, "") || zz
    }

    function Wz(zz, tz, sz) {
      return sz <= 0 ? 0 : zz * sz / Math.max(tz, sz)
    }

    function Xz(zz, tz) {
      const sz = zz.getDurationMs();
      return sz > 0 ? zz.loudness * Math.max(0, 1 - (tz - zz.startMs) / sz) : 0
    }
    class Oz {
      constructor() {
        let zz = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 24,
          tz = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 6;
        this.maxVoices = zz, this.maxPerGroup = tz, this.voices = []
      }
      admit(zz) {
        if (this.voices = this.voices.filter((zz => zz.isAlive())), null !== zz.group) {
          const tz = this.voices.filter((tz => tz.group === zz.group));
          if (tz.length >= this.maxPerGroup && !this.dropLeastWorth(tz, zz)) return !1
        }
        return !(this.voices.length >= this.maxVoices && !this.dropLeastWorth(this.voices, zz)) && (this.voices.push(zz), !0)
      }
      dropLeastWorth(zz, tz) {
        let sz = null,
          Fz = 1 / 0;
        for (const Wz of zz) {
          if (!Wz.canStop()) continue;
          const zz = Xz(Wz, tz.startMs);
          zz < Fz && (sz = Wz, Fz = zz)
        }
        return !(!sz || tz.loudness < Fz) && (this.voices.splice(this.voices.indexOf(sz), 1), sz.stop(), !0)
      }
    }
  },
  36215: (zz, tz, sz) => {
    sz.d(tz, {
      b: () => Xz,
      d: () => Oz,
      h: () => Fz
    });
    class Fz {
      constructor(zz) {
        this.multipliers = {}, this._onUpdate = void 0, this._onUpdate = zz
      }
      setMultiplierType(zz, tz) {
        var sz;
        this.multipliers[zz] = tz, null === (sz = this._onUpdate) || void 0 === sz || sz.call(this)
      }
      removeMultiplier(zz) {
        var tz;
        delete this.multipliers[zz], null === (tz = this._onUpdate) || void 0 === tz || tz.call(this)
      }
      getMultiplierType(zz) {
        return this.multipliers[zz]
      }
      getTotalMultipliedVal() {
        let zz = 1;
        for (const tz in this.multipliers) zz *= this.multipliers[tz];
        return zz
      }
    }
    class Wz {
      constructor() {
        let zz = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
        this.booleans = {}, this._onUpdate = void 0, this._onUpdate = zz
      }
      setBooleanType(zz, tz) {
        const sz = this._getTotalBooleanVal();
        this.booleans[zz] = !!tz;
        const Fz = this.getTotalBooleanVal();
        var Wz;
        Fz !== sz && (null === (Wz = this._onUpdate) || void 0 === Wz || Wz.call(this, Fz, this.booleans));
        return Fz
      }
      removeBoolean(zz) {
        const tz = this._getTotalBooleanVal();
        delete this.booleans[zz];
        const sz = this._getTotalBooleanVal();
        var Fz;
        null !== sz && sz !== tz && (null === (Fz = this._onUpdate) || void 0 === Fz || Fz.call(this, sz, this.booleans));
        return null !== sz && void 0 !== sz && sz
      }
      getBooleanType(zz) {
        return this.booleans[zz]
      }
      getTotalBooleanVal() {
        throw new Error("This is an abstract class, use BooleanAndCombinator")
      }
      forceUpdate() {
        var zz;
        null === (zz = this._onUpdate) || void 0 === zz || zz.call(this, this.getTotalBooleanVal(), this.booleans)
      }
      _getTotalBooleanVal() {
        throw new Error("This is an abstract class, use BooleanAndCombinator")
      }
    }
    class Xz extends Wz {
      getTotalBooleanVal() {
        const zz = this._getTotalBooleanVal();
        if (null === zz) throw new Error("Should not be gotten before at least 1 type has been initialised");
        return zz
      }
      _getTotalBooleanVal() {
        let zz = !1,
          tz = !0;
        for (const sz in this.booleans) zz = !0, tz &&= this.booleans[sz];
        return zz ? tz : null
      }
    }
    class Oz extends Wz {
      getTotalBooleanVal() {
        const zz = this._getTotalBooleanVal();
        if (null === zz) throw new Error("Should not be gotten before at least 1 type has been initialised");
        return zz
      }
      _getTotalBooleanVal() {
        let zz = !1,
          tz = !1;
        for (const sz in this.booleans) zz = !0, tz ||= this.booleans[sz];
        return zz ? tz : null
      }
    }
  },
  9023: (zz, tz, sz) => {
    sz.d(tz, {
      c: () => Wz,
      g: () => Xz
    });
    var Fz = sz(8976);
    const Wz = "Air",
      Xz = Object.freeze(new Fz.f(Wz, 0, "", null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null))
  },
  36210: (zz, tz, sz) => {
    sz.d(tz, {
      b: () => Xz,
      d: () => Fz,
      f: () => Wz
    });
    const Fz = 15,
      Wz = 3,
      Xz = 30
  }
};
Object.freeze(modules);
for (const zz in modules) Object.freeze(modules[zz]);