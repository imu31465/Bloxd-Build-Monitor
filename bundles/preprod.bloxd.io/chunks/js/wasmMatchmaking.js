/*! For license information please see ad2avs.wasmMatchmaking.1767c3a0.chunk.js.LICENSE.txt */
export const id = 59;
export const ids = [59, 91];
export const modules = {
  36019: (zz, uz) => {
    function bz(zz) {
      if (zz && "object" === typeof zz) {
        var uz = zz.which || zz.keyCode || zz.charCode;
        uz && (zz = uz)
      }
      if ("number" === typeof zz) return lz[zz];
      var bz, iz = String(zz);
      return (bz = Ez[iz.toLowerCase()]) ? bz : (bz = nz[iz.toLowerCase()]) || (1 === iz.length ? iz.charCodeAt(0) : void 0)
    }
    bz.isEventKey = function(zz, uz) {
      if (zz && "object" === typeof zz) {
        var bz = zz.which || zz.keyCode || zz.charCode;
        if (null === bz || void 0 === bz) return !1;
        if ("string" === typeof uz) {
          var iz;
          if (iz = Ez[uz.toLowerCase()]) return iz === bz;
          if (iz = nz[uz.toLowerCase()]) return iz === bz
        } else if ("number" === typeof uz) return uz === bz;
        return !1
      }
    };
    var Ez = (uz = zz.exports = bz).code = uz.codes = {
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
      nz = uz.aliases = {
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
    for (iz = 97; iz < 123; iz++) Ez[String.fromCharCode(iz)] = iz - 32;
    for (var iz = 48; iz < 58; iz++) Ez[iz - 48] = iz;
    for (iz = 1; iz < 13; iz++) Ez["f" + iz] = iz + 111;
    for (iz = 0; iz < 10; iz++) Ez["numpad " + iz] = iz + 96;
    var lz = uz.names = uz.title = {};
    for (iz in Ez) lz[Ez[iz]] = iz;
    for (var Mz in nz) Ez[Mz] = nz[Mz]
  },
  36179: (zz, uz, bz) => {
    bz.d(uz, {
      c: () => lz
    });
    var Ez = bz(56);
    const nz = Ez.useLayoutEffect;
    const iz = function(zz) {
      var uz = (0, Ez.useRef)(zz);
      return nz((function() {
        uz.current = zz
      })), uz
    };
    var lz = function(zz) {
      var uz = iz(zz);
      (0, Ez.useEffect)((function() {
        var zz = function(zz) {
          var bz;
          if (null != uz.current && (bz = uz.current(zz)), zz.defaultPrevented && (zz.returnValue = ""), "string" === typeof bz) return zz.returnValue = bz, bz
        };
        return window.addEventListener("beforeunload", zz),
          function() {
            window.removeEventListener("beforeunload", zz)
          }
      }), [])
    }
  },
  36053: zz => {
    var uz, bz = "undefined" !== typeof window ? window.navigator.userAgent : "",
      Ez = /OS X/.test(bz),
      nz = /Opera/.test(bz),
      iz = !/like Gecko/.test(bz) && !nz,
      lz = zz.exports = {
        0: Ez ? "<menu>" : "<UNK>",
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
        93: Ez ? "<meta>" : "<menu>",
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
        173: Ez && iz ? "-" : "<volume-mute>",
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
        231: nz ? "`" : "<unicode>",
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
    for (uz = 58; uz < 65; ++uz) lz[uz] = String.fromCharCode(uz);
    for (uz = 48; uz < 58; ++uz) lz[uz] = uz - 48 + "";
    for (uz = 65; uz < 91; ++uz) lz[uz] = String.fromCharCode(uz);
    for (uz = 96; uz < 106; ++uz) lz[uz] = "<num-" + (uz - 96) + ">";
    for (uz = 112; uz < 136; ++uz) lz[uz] = "F" + (uz - 111)
  },
  36096: (zz, uz, bz) => {
    function Ez(zz, uz, bz, Ez) {
      return !(bz && !zz.aimable) && (!uz || zz.gun && "head" !== Ez)
    }

    function nz(zz) {
      return Math.max(.1 * zz, 1)
    }

    function iz(zz, uz) {
      return !zz && uz
    }
    bz.d(uz, {
      c: () => iz,
      e: () => nz,
      g: () => Ez
    })
  },
  36103: (zz, uz, bz) => {
    bz.d(uz, {
      c: () => Mz,
      g: () => lz
    });
    let Ez = null;
    const nz = {
        crosshairAccuracy: [],
        turnDamageIndicators: []
      },
      iz = {
        crosshairAccuracy: zz => {
          const uz = nz.crosshairAccuracy.at(-1);
          uz ? uz.hook(zz) : Ez = zz
        },
        turnDamageIndicators: zz => {
          var uz;
          null === (uz = nz.turnDamageIndicators.at(-1)) || void 0 === uz || uz.hook(zz)
        }
      };

    function lz(zz, uz) {
      const bz = {
          hook: uz
        },
        lz = nz[zz];
      if (lz.push(bz), "crosshairAccuracy" === zz && null !== Ez) {
        const zz = Ez;
        Ez = null, iz.crosshairAccuracy(zz)
      }
      return () => {
        const zz = lz.indexOf(bz); - 1 !== zz && lz.splice(zz, 1)
      }
    }

    function Mz() {
      return iz
    }
  },
  6382: (zz, uz, bz) => {
    bz.d(uz, {
      d: () => nz,
      e: () => iz
    });
    var Ez = bz(33);
    const nz = "shaderPack";
    async function iz() {
      var zz;
      let uz = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
      return null !== (zz = await Ez.d.getItem(nz, uz)) && void 0 !== zz ? zz : null
    }
  },
  8581: (zz, uz, bz) => {
    bz.d(uz, {
      c: () => iz,
      g: () => nz
    });
    let Ez = !1;

    function nz() {
      Ez = !0
    }

    function iz() {
      return Ez
    }
  },
  35927: (zz, uz, bz) => {
    bz.r(uz), bz.d(uz, {
      InGameUi: () => fz.e,
      LobbyLeaderboard: () => sz.b,
      loadCharacterCustomisationUI: () => rz,
      loadCharacterPreview: () => oz,
      matchmakeAndPlay: () => Jz,
      setUpGame: () => Nz
    });
    var Ez = bz(1232),
      nz = bz(158),
      iz = bz(20),
      lz = bz(35936),
      Mz = bz(35939),
      tz = bz(1892),
      Hz = bz(35965);

    function Oz() {
      return !1 !== tz.b.get("canCustomiseChar")
    }
    let pz = !1;
    var dz = bz(1296),
      Fz = bz(1241),
      Zz = bz(677),
      Rz = bz(8581);
    var Kz = bz(8572),
      wz = bz(3332),
      Xz = bz(1755);
    var fz = bz(35977),
      sz = bz(36447);

    function rz() {
      return Promise.all([bz.e(281), bz.e(387)]).then((() => bz(40493)))
    }

    function oz() {
      return bz.e(282).then((() => bz(40500)))
    }

    function Nz() {
      return (0, Kz.h)()
    }
    pz || (pz = !0, document.addEventListener("keydown", (zz => {
        (0, Hz.d)(zz, Oz)
      }))),
      function(zz) {
        var uz;
        return !0 !== (null === zz || void 0 === zz ? void 0 : zz.saveData) && !/2g$/.test(null !== (uz = null === zz || void 0 === zz ? void 0 : zz.effectiveType) && void 0 !== uz ? uz : "")
      }(navigator.connection) && (0, Zz.e)((() => {
        (0, Rz.c)() || Promise.all([bz.e(74), bz.e(132), bz.e(87), bz.e(55)]).then((() => bz(39931))).then((zz => {
          (0, Rz.c)() || zz.startLoadAheadOfJoin({
            joinStarted: Rz.c,
            language: Fz.h.get().getCurrentLanguageCode()
          })
        }), (zz => {
          console.warn("[bloxd-wasm-client] the loads ahead of a join did not start: the join loads the client itself", zz)
        }))
      }));
    const vz = iz.e.get("router");
    null === vz ? console.warn("[bloxd-wasm-client] no router as the matchmaking chunk loads: the join's loads start with the join") : function zz(uz) {
      if ((0, Xz.e)(uz.state.location.pathname)) return void(0, Kz.d)().catch((() => {}));
      const bz = uz.subscribe((Ez => {
        (0, Xz.e)(Ez.location.pathname) && (bz(), (0, wz.e)().then((() => {
          zz(uz)
        })))
      }))
    }(vz), (0, lz.c)();
    const xz = (0, Mz.c)((async function(zz, uz) {
      let {
        place: bz,
        userContext: iz,
        direct: lz,
        rematch: Mz
      } = zz;
      const tz = lz ? 1 / 0 : performance.now();
      let Hz;
      try {
        Hz = await (0, Kz.d)()
      } catch (Oz) {
        return console.error("The wasm client did not load:", Oz), (0, dz.o)({
          websocketUrl: null
        }), Ez.b.errorWithCode(String(Oz), nz.k.CONNECT_TO_GAME_SERVER, {
          error: Oz,
          severity: uz.aborted ? "low" : "medium",
          ob: uz.aborted
        })
      }
      return Hz.playWasmGame({
        userContext: iz,
        place: bz,
        matchedAt: tz,
        rematch: Mz
      }, uz)
    }));

    function Jz() {
      return (0, Kz.d)().catch((() => {})), xz(...arguments)
    }
  },
  8572: (zz, uz, bz) => {
    bz.d(uz, {
      d: () => Oz,
      h: () => pz
    });
    var Ez = bz(2899),
      nz = bz(2181),
      iz = bz(2954),
      lz = bz(4400),
      Mz = bz(3248),
      tz = bz(8581);
    let Hz = null;

    function Oz() {
      return lz.b.cancelDownloadForJoin(), (0, Mz.d)(), (0, nz.h)(), (0, tz.g)(), (0, iz.f)(), Promise.all([bz.e(69), bz.e(72), bz.e(71), bz.e(70), bz.e(83), bz.e(259), bz.e(199), bz.e(216), bz.e(237), bz.e(212), bz.e(46)]).then((() => bz(39840))).catch((() => {})), Promise.all([bz.e(74), bz.e(132), bz.e(87), bz.e(55)]).then((() => bz(39931))).then((zz => {
        let {
          startJoinLoad: uz
        } = zz;
        uz()
      }), (() => {})), Hz ??= Promise.all([bz.e(71), bz.e(74), bz.e(129), bz.e(73), bz.e(132), bz.e(262), bz.e(186), bz.e(87), bz.e(86), bz.e(85), bz.e(212), bz.e(60)]).then((() => bz(40042))).then((zz => (zz.startWasmPlay(), zz.followPageUiPack((zz => {
        Ez.e.showGamePack(zz)
      })), zz)), (zz => {
        throw Hz = null, zz
      })), Hz
    }

    function pz() {
      return Promise.all([bz.e(71), bz.e(74), bz.e(129), bz.e(73), bz.e(132), bz.e(262), bz.e(186), bz.e(87), bz.e(86), bz.e(85), bz.e(212), bz.e(60)]).then((() => bz(40042))).then((zz => {
        zz.startWasmPreviews(), zz.prefetchWasmPreviews()
      }))
    }
  },
  4616: (zz, uz, bz) => {
    bz.r(uz), bz.d(uz, {
      Howl: () => nz.Howl,
      Howler: () => nz.Howler,
      iosAudio: () => tz,
      musicOutput: () => Kz,
      readyAudioContext: () => wz
    });
    var Ez, nz = bz(4625),
      iz = bz(96);
    const lz = nz.Howler;
    let Mz;

    function tz() {
      return Mz ??= "ios" === (0, iz.getOperatingSystem)(), Mz
    }

    function Hz() {
      var zz, uz;
      if (lz.ctx || !lz.usingWebAudio || "undefined" === typeof AudioContext || !tz()) return;
      const bz = navigator.audioSession;
      let Ez;
      "auto" === (null === bz || void 0 === bz ? void 0 : bz.type) && (bz.type = "ambient");
      try {
        Ez = new AudioContext({
          sampleRate: 44100
        })
      } catch {
        return
      }
      const nz = Ez.createGain();
      nz.gain.setValueAtTime(lz._muted ? 0 : null !== (zz = lz._volume) && void 0 !== zz ? zz : 1, Ez.currentTime), nz.connect(Ez.destination), lz.ctx = Ez, lz.masterGain = nz, null === (uz = lz._setup) || void 0 === uz || uz.call(lz)
    }
    lz._mobileUnloaded = !0;
    const Oz = lz.volume.bind(nz.Howler);
    lz.volume = function() {
      return Hz(), Oz(...arguments)
    };
    const pz = lz.mute.bind(nz.Howler);
    lz.mute = zz => (Hz(), pz(zz));
    const dz = nz.Howl.prototype,
      Fz = dz.init;
    dz.init = function(zz) {
      return Hz(), Fz.call(this, zz)
    };
    let Zz = 0;
    const Rz = null === (Ez = lz._autoSuspend) || void 0 === Ez ? void 0 : Ez.bind(nz.Howler);

    function Kz() {
      wz();
      const {
        ctx: zz,
        masterGain: uz
      } = lz;
      return zz && uz ? {
        ctx: zz,
        destination: uz,
        holdAwake: zz => {
          var uz, bz;
          (Zz += zz ? 1 : -1, zz) ? null === (uz = lz._autoResume) || void 0 === uz || uz.call(lz): null === (bz = lz._autoSuspend) || void 0 === bz || bz.call(lz)
        },
        wake: () => {
          var uz;
          "running" !== zz.state && (null === (uz = lz._autoResume) || void 0 === uz || uz.call(lz), zz.resume().catch((() => {})))
        }
      } : null
    }

    function wz() {
      var zz;
      (lz.volume(), lz.ctx && lz.autoUnlock) && (null === (zz = lz._unlockAudio) || void 0 === zz || zz.call(lz))
    }
    Rz && (lz._autoSuspend = () => Zz > 0 ? nz.Howler : Rz())
  },
  36205: (zz, uz, bz) => {
    bz.d(uz, {
      b: () => lz,
      e: () => nz,
      h: () => Ez
    });

    function Ez(zz) {
      return zz.replace(/[_\-\s]*\d+$/, "") || zz
    }

    function nz(zz, uz, bz) {
      return bz <= 0 ? 0 : zz * bz / Math.max(uz, bz)
    }

    function iz(zz, uz) {
      const bz = zz.getDurationMs();
      return bz > 0 ? zz.loudness * Math.max(0, 1 - (uz - zz.startMs) / bz) : 0
    }
    class lz {
      constructor() {
        let zz = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 24,
          uz = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 6;
        this.maxVoices = zz, this.maxPerGroup = uz, this.voices = []
      }
      admit(zz) {
        if (this.voices = this.voices.filter((zz => zz.isAlive())), null !== zz.group) {
          const uz = this.voices.filter((uz => uz.group === zz.group));
          if (uz.length >= this.maxPerGroup && !this.dropLeastWorth(uz, zz)) return !1
        }
        return !(this.voices.length >= this.maxVoices && !this.dropLeastWorth(this.voices, zz)) && (this.voices.push(zz), !0)
      }
      dropLeastWorth(zz, uz) {
        let bz = null,
          Ez = 1 / 0;
        for (const nz of zz) {
          if (!nz.canStop()) continue;
          const zz = iz(nz, uz.startMs);
          zz < Ez && (bz = nz, Ez = zz)
        }
        return !(!bz || uz.loudness < Ez) && (this.voices.splice(this.voices.indexOf(bz), 1), bz.stop(), !0)
      }
    }
  },
  36222: (zz, uz, bz) => {
    bz.d(uz, {
      e: () => iz,
      h: () => lz,
      j: () => Ez
    });
    class Ez {
      constructor(zz) {
        this.multipliers = {}, this._onUpdate = void 0, this._onUpdate = zz
      }
      setMultiplierType(zz, uz) {
        var bz;
        this.multipliers[zz] = uz, null === (bz = this._onUpdate) || void 0 === bz || bz.call(this)
      }
      removeMultiplier(zz) {
        var uz;
        delete this.multipliers[zz], null === (uz = this._onUpdate) || void 0 === uz || uz.call(this)
      }
      getMultiplierType(zz) {
        return this.multipliers[zz]
      }
      getTotalMultipliedVal() {
        let zz = 1;
        for (const uz in this.multipliers) zz *= this.multipliers[uz];
        return zz
      }
    }
    class nz {
      constructor() {
        let zz = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
        this.booleans = {}, this._onUpdate = void 0, this._onUpdate = zz
      }
      setBooleanType(zz, uz) {
        const bz = this._getTotalBooleanVal();
        this.booleans[zz] = !!uz;
        const Ez = this.getTotalBooleanVal();
        var nz;
        Ez !== bz && (null === (nz = this._onUpdate) || void 0 === nz || nz.call(this, Ez, this.booleans));
        return Ez
      }
      removeBoolean(zz) {
        const uz = this._getTotalBooleanVal();
        delete this.booleans[zz];
        const bz = this._getTotalBooleanVal();
        var Ez;
        null !== bz && bz !== uz && (null === (Ez = this._onUpdate) || void 0 === Ez || Ez.call(this, bz, this.booleans));
        return null !== bz && void 0 !== bz && bz
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
    class iz extends nz {
      getTotalBooleanVal() {
        const zz = this._getTotalBooleanVal();
        if (null === zz) throw new Error("Should not be gotten before at least 1 type has been initialised");
        return zz
      }
      _getTotalBooleanVal() {
        let zz = !1,
          uz = !0;
        for (const bz in this.booleans) zz = !0, uz &&= this.booleans[bz];
        return zz ? uz : null
      }
    }
    class lz extends nz {
      getTotalBooleanVal() {
        const zz = this._getTotalBooleanVal();
        if (null === zz) throw new Error("Should not be gotten before at least 1 type has been initialised");
        return zz
      }
      _getTotalBooleanVal() {
        let zz = !1,
          uz = !1;
        for (const bz in this.booleans) zz = !0, uz ||= this.booleans[bz];
        return zz ? uz : null
      }
    }
  },
  9165: (zz, uz, bz) => {
    bz.d(uz, {
      b: () => nz,
      c: () => iz
    });
    var Ez = bz(9125);
    const nz = "Air",
      iz = Object.freeze(new Ez.f(nz, 0, "", null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null))
  },
  36214: (zz, uz, bz) => {
    bz.d(uz, {
      c: () => iz,
      e: () => Ez,
      h: () => nz
    });
    const Ez = 15,
      nz = 3,
      iz = 30
  }
};
Object.freeze(modules);
for (const zz in modules) Object.freeze(modules[zz]);