/*! For license information please see 7jvyee.wasmMatchmaking.d5568ba6.chunk.js.LICENSE.txt */
export const id = 55;
export const ids = [55];
export const modules = {
  35479: yb => {
    yb.exports = function yb(bb, Wy) {
      if (bb === Wy) return !0;
      if (bb && Wy && "object" == typeof bb && "object" == typeof Wy) {
        if (bb.constructor !== Wy.constructor) return !1;
        var Uy, hy, fy;
        if (Array.isArray(bb)) {
          if ((Uy = bb.length) != Wy.length) return !1;
          for (hy = Uy; 0 !== hy--;)
            if (!yb(bb[hy], Wy[hy])) return !1;
          return !0
        }
        if (bb.constructor === RegExp) return bb.source === Wy.source && bb.flags === Wy.flags;
        if (bb.valueOf !== Object.prototype.valueOf) return bb.valueOf() === Wy.valueOf();
        if (bb.toString !== Object.prototype.toString) return bb.toString() === Wy.toString();
        if ((Uy = (fy = Object.keys(bb)).length) !== Object.keys(Wy).length) return !1;
        for (hy = Uy; 0 !== hy--;)
          if (!Object.prototype.hasOwnProperty.call(Wy, fy[hy])) return !1;
        for (hy = Uy; 0 !== hy--;) {
          var Zy = fy[hy];
          if (!yb(bb[Zy], Wy[Zy])) return !1
        }
        return !0
      }
      return bb !== bb && Wy !== Wy
    }
  },
  35322: (yb, bb) => {
    function Wy(yb) {
      if (yb && "object" === typeof yb) {
        var bb = yb.which || yb.keyCode || yb.charCode;
        bb && (yb = bb)
      }
      if ("number" === typeof yb) return Zy[yb];
      var Wy, fy = String(yb);
      return (Wy = Uy[fy.toLowerCase()]) ? Wy : (Wy = hy[fy.toLowerCase()]) || (1 === fy.length ? fy.charCodeAt(0) : void 0)
    }
    Wy.isEventKey = function(yb, bb) {
      if (yb && "object" === typeof yb) {
        var Wy = yb.which || yb.keyCode || yb.charCode;
        if (null === Wy || void 0 === Wy) return !1;
        if ("string" === typeof bb) {
          var fy;
          if (fy = Uy[bb.toLowerCase()]) return fy === Wy;
          if (fy = hy[bb.toLowerCase()]) return fy === Wy
        } else if ("number" === typeof bb) return bb === Wy;
        return !1
      }
    };
    var Uy = (bb = yb.exports = Wy).code = bb.codes = {
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
      hy = bb.aliases = {
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
    for (fy = 97; fy < 123; fy++) Uy[String.fromCharCode(fy)] = fy - 32;
    for (var fy = 48; fy < 58; fy++) Uy[fy - 48] = fy;
    for (fy = 1; fy < 13; fy++) Uy["f" + fy] = fy + 111;
    for (fy = 0; fy < 10; fy++) Uy["numpad " + fy] = fy + 96;
    var Zy = bb.names = bb.title = {};
    for (fy in Uy) Zy[Uy[fy]] = fy;
    for (var cb in hy) Uy[cb] = hy[cb]
  },
  35507: (yb, bb, Wy) => {
    Wy.d(bb, {
      b: () => Zy
    });
    var Uy = Wy(55);
    const hy = Uy.useLayoutEffect;
    const fy = function(yb) {
      var bb = (0, Uy.useRef)(yb);
      return hy((function() {
        bb.current = yb
      })), bb
    };
    var Zy = function(yb) {
      var bb = fy(yb);
      (0, Uy.useEffect)((function() {
        var yb = function(yb) {
          var Wy;
          if (null != bb.current && (Wy = bb.current(yb)), yb.defaultPrevented && (yb.returnValue = ""), "string" === typeof Wy) return yb.returnValue = Wy, Wy
        };
        return window.addEventListener("beforeunload", yb),
          function() {
            window.removeEventListener("beforeunload", yb)
          }
      }), [])
    }
  },
  35351: yb => {
    var bb, Wy = "undefined" !== typeof window ? window.navigator.userAgent : "",
      Uy = /OS X/.test(Wy),
      hy = /Opera/.test(Wy),
      fy = !/like Gecko/.test(Wy) && !hy,
      Zy = yb.exports = {
        0: Uy ? "<menu>" : "<UNK>",
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
        93: Uy ? "<meta>" : "<menu>",
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
        173: Uy && fy ? "-" : "<volume-mute>",
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
        231: hy ? "`" : "<unicode>",
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
    for (bb = 58; bb < 65; ++bb) Zy[bb] = String.fromCharCode(bb);
    for (bb = 48; bb < 58; ++bb) Zy[bb] = bb - 48 + "";
    for (bb = 65; bb < 91; ++bb) Zy[bb] = String.fromCharCode(bb);
    for (bb = 96; bb < 106; ++bb) Zy[bb] = "<num-" + (bb - 96) + ">";
    for (bb = 112; bb < 136; ++bb) Zy[bb] = "F" + (bb - 111)
  },
  35248: (yb, bb, Wy) => {
    Wy.r(bb), Wy.d(bb, {
      InGameUi: () => sy.b,
      LobbyLeaderboard: () => Sy.c,
      loadCharacterCustomisationUI: () => Ey,
      loadCharacterPreview: () => ly,
      matchmakeAndPlay: () => Ty,
      setUpGame: () => mb
    });
    var Uy = Wy(1109),
      hy = Wy(143),
      fy = Wy(35252),
      Zy = Wy(35260),
      cb = Wy(1595),
      Py = Wy(35277);

    function oy() {
      return !1 !== cb.c.get("canCustomiseChar")
    }
    let By = !1;
    var Ky = Wy(1177),
      ey = Wy(2878),
      qb = Wy(8035);
    var sy = Wy(35284),
      Sy = Wy(35732);

    function Ey() {
      return Promise.all([Wy.e(267), Wy.e(375)]).then((() => Wy(39644)))
    }

    function ly() {
      return Wy.e(268).then((() => Wy(39650)))
    }

    function mb() {
      return (0, qb.f)()
    }
    By || (By = !0, document.addEventListener("keydown", (yb => {
        (0, Py.e)(yb, oy)
      }))),
      function(yb) {
        var bb;
        return !0 !== (null === yb || void 0 === yb ? void 0 : yb.saveData) && !/2g$/.test(null !== (bb = null === yb || void 0 === yb ? void 0 : yb.effectiveType) && void 0 !== bb ? bb : "")
      }(navigator.connection) && (0, ey.e)((() => {
        (0, qb.i)() || Promise.all([Wy.e(126), Wy.e(125), Wy.e(51)]).then((() => Wy(39266))).then((yb => {
          let {
            prefetchWasmClient: bb
          } = yb;
          return bb(qb.i)
        }), (yb => {
          console.warn("[bloxd-wasm-client] the prefetch did not load: the join downloads the client itself", yb)
        }))
      })), (0, fy.b)();
    const Cy = (0, Zy.d)((async function(yb, bb) {
      let {
        place: Wy,
        userContext: fy,
        direct: Zy,
        rematch: cb
      } = yb;
      const Py = Zy ? 1 / 0 : performance.now();
      let oy;
      try {
        oy = await (0, qb.d)()
      } catch (By) {
        return console.error("The wasm client did not load:", By), (0, Ky.n)({
          websocketUrl: null
        }), Uy.c.errorWithCode(String(By), hy.i.CONNECT_TO_GAME_SERVER, {
          error: By,
          severity: bb.aborted ? "low" : "medium",
          RZ: bb.aborted
        })
      }
      return oy.playWasmGame({
        userContext: fy,
        place: Wy,
        matchedAt: Py,
        rematch: cb
      }, bb)
    }));

    function Ty() {
      return (0, qb.d)().catch((() => {})), Cy(...arguments)
    }
  },
  8035: (yb, bb, Wy) => {
    Wy.d(bb, {
      d: () => Zy,
      f: () => Py,
      i: () => cb
    });
    var Uy = Wy(2476);
    let hy = null,
      fy = !1;

    function Zy() {
      return fy = !0, Promise.all([Wy.e(63), Wy.e(66), Wy.e(65), Wy.e(64), Wy.e(76), Wy.e(75), Wy.e(227), Wy.e(200), Wy.e(224), Wy.e(225), Wy.e(43)]).then((() => Wy(39184))).catch((() => {})), Promise.all([Wy.e(126), Wy.e(125), Wy.e(51)]).then((() => Wy(39266))).then((yb => {
        let {
          startJoinLoad: bb
        } = yb;
        bb()
      }), (() => {})), hy ??= Promise.all([Wy.e(65), Wy.e(126), Wy.e(76), Wy.e(177), Wy.e(125), Wy.e(77), Wy.e(121), Wy.e(225), Wy.e(56)]).then((() => Wy(39340))).then((yb => (yb.startWasmPlay(), yb.followPageUiPack((yb => {
        Uy.e.showGamePack(yb)
      })), yb)), (yb => {
        throw hy = null, yb
      })), hy
    }

    function cb() {
      return fy
    }

    function Py() {
      return Promise.all([Wy.e(65), Wy.e(126), Wy.e(76), Wy.e(177), Wy.e(125), Wy.e(77), Wy.e(121), Wy.e(225), Wy.e(56)]).then((() => Wy(39340))).then((yb => {
        yb.startWasmPreviews(), yb.prefetchWasmPreviews()
      }))
    }
  },
  35662: (yb, bb, Wy) => {
    function Uy(yb) {
      return yb.includes("Leaf Bed")
    }

    function hy(yb) {
      return / Bed(?: Head)?(?:\||$)/.test(yb) && !Uy(yb)
    }

    function fy(yb) {
      return yb.includes(" Strongbed")
    }

    function Zy(yb) {
      return Uy(yb) || hy(yb) || fy(yb)
    }
    Wy.d(bb, {
      e: () => Zy,
      f: () => Uy,
      g: () => fy,
      k: () => hy
    })
  },
  35658: (yb, bb, Wy) => {
    Wy.d(bb, {
      e: () => oy
    });
    var Uy = Wy(35662),
      hy = Wy(8459);
    const fy = [],
      Zy = [],
      cb = [],
      Py = [];
    for (const By of Object.keys(hy.m))(0, Uy.f)(By) ? fy.push(By) : (0, Uy.k)(By) && Zy.push(By), (0, Uy.g)(By) && cb.push(By), (By.includes(" Bed Head") || By.includes(" Strongbed Head")) && Py.push(By);
    const oy = {
      leafBeds: fy,
      woolBeds: Zy,
      strongBeds: cb,
      beds: [...fy, ...Zy, ...cb],
      bedHeads: Py,
      blockRemoveActionRoots: ["Chest", "Loot Chest", "Iron Chest", "Mailbox", "Bookshelf", "Empty Bookshelf"]
    }
  }
};
Object.freeze(modules);
for (const yb in modules) Object.freeze(modules[yb]);