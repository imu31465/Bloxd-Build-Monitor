/*! For license information please see 8f728.wasmMatchmaking.b56e276b.chunk.js.LICENSE.txt */
export const id = 52;
export const ids = [52];
export const modules = {
  35112: (cB, Bc, nc) => {
    nc.r(Bc), nc.d(Bc, {
      InGameUi: () => mB.b,
      LobbyLeaderboard: () => ec.c,
      loadCharacterCustomisationUI: () => tB,
      loadCharacterPreview: () => Sc,
      matchmakeAndPlay: () => pc,
      setUpGame: () => yB
    });
    var Vc = nc(1114),
      Ic = nc(152),
      rB = nc(35114),
      uc = nc(35118),
      sc = nc(1594),
      Mc = nc(35132);

    function Pc() {
      return !1 !== sc.d.get("canCustomiseChar")
    }
    let qB = !1;
    var Oc = nc(1177),
      Tc = nc(2754),
      fc = nc(7809);
    var mB = nc(35144),
      ec = nc(35607);

    function tB() {
      return Promise.all([nc.e(264), nc.e(372)]).then((() => nc(39146)))
    }

    function Sc() {
      return nc.e(265).then((() => nc(39152)))
    }

    function yB() {
      return (0, fc.f)()
    }
    qB || (qB = !0, document.addEventListener("keydown", (cB => {
        (0, Mc.c)(cB, Pc)
      }))),
      function(cB) {
        var Bc;
        return !0 !== (null === cB || void 0 === cB ? void 0 : cB.saveData) && !/2g$/.test(null !== (Bc = null === cB || void 0 === cB ? void 0 : cB.effectiveType) && void 0 !== Bc ? Bc : "")
      }(navigator.connection) && (0, Tc.d)((() => {
        (0, fc.j)() || Promise.all([nc.e(123), nc.e(122), nc.e(48)]).then((() => nc(38773))).then((cB => {
          let {
            prefetchWasmClient: Bc
          } = cB;
          return Bc(fc.j)
        }), (cB => {
          console.warn("[bloxd-wasm-client] the prefetch did not load: the join downloads the client itself", cB)
        }))
      })), (0, rB.d)();
    const zB = (0, uc.c)((async function(cB, Bc) {
      let {
        place: nc,
        userContext: rB,
        direct: uc,
        rematch: sc
      } = cB;
      const Mc = uc ? 1 / 0 : performance.now();
      let Pc;
      try {
        Pc = await (0, fc.e)()
      } catch (qB) {
        return console.error("The wasm client did not load:", qB), (0, Oc.t)({
          websocketUrl: null
        }), Vc.d.errorWithCode(String(qB), Ic.h.CONNECT_TO_GAME_SERVER, {
          error: qB,
          severity: Bc.aborted ? "low" : "medium",
          gs: Bc.aborted
        })
      }
      return Pc.playWasmGame({
        userContext: rB,
        place: nc,
        matchedAt: Mc,
        rematch: sc
      }, Bc)
    }));

    function pc() {
      return (0, fc.e)().catch((() => {})), zB(...arguments)
    }
  },
  7809: (cB, Bc, nc) => {
    nc.d(Bc, {
      e: () => uc,
      f: () => Mc,
      j: () => sc
    });
    var Vc = nc(2329);
    let Ic = null,
      rB = !1;

    function uc() {
      return rB = !0, Promise.all([nc.e(60), nc.e(63), nc.e(62), nc.e(61), nc.e(73), nc.e(72), nc.e(224), nc.e(199), nc.e(222), nc.e(223), nc.e(41)]).then((() => nc(38690))).catch((() => {})), Promise.all([nc.e(123), nc.e(122), nc.e(48)]).then((() => nc(38773))).then((cB => {
        let {
          startJoinLoad: Bc
        } = cB;
        Bc()
      }), (() => {})), Ic ??= Promise.all([nc.e(62), nc.e(123), nc.e(73), nc.e(176), nc.e(122), nc.e(74), nc.e(118), nc.e(223), nc.e(53)]).then((() => nc(38833))).then((cB => (cB.startWasmPlay(), cB.followPageUiPack((cB => {
        Vc.c.showGamePack(cB)
      })), cB)), (cB => {
        throw Ic = null, cB
      })), Ic
    }

    function sc() {
      return rB
    }

    function Mc() {
      return Promise.all([nc.e(62), nc.e(123), nc.e(73), nc.e(176), nc.e(122), nc.e(74), nc.e(118), nc.e(223), nc.e(53)]).then((() => nc(38833))).then((cB => {
        cB.startWasmPreviews(), cB.prefetchWasmPreviews()
      }))
    }
  },
  35333: cB => {
    cB.exports = function cB(Bc, nc) {
      if (Bc === nc) return !0;
      if (Bc && nc && "object" == typeof Bc && "object" == typeof nc) {
        if (Bc.constructor !== nc.constructor) return !1;
        var Vc, Ic, rB;
        if (Array.isArray(Bc)) {
          if ((Vc = Bc.length) != nc.length) return !1;
          for (Ic = Vc; 0 !== Ic--;)
            if (!cB(Bc[Ic], nc[Ic])) return !1;
          return !0
        }
        if (Bc.constructor === RegExp) return Bc.source === nc.source && Bc.flags === nc.flags;
        if (Bc.valueOf !== Object.prototype.valueOf) return Bc.valueOf() === nc.valueOf();
        if (Bc.toString !== Object.prototype.toString) return Bc.toString() === nc.toString();
        if ((Vc = (rB = Object.keys(Bc)).length) !== Object.keys(nc).length) return !1;
        for (Ic = Vc; 0 !== Ic--;)
          if (!Object.prototype.hasOwnProperty.call(nc, rB[Ic])) return !1;
        for (Ic = Vc; 0 !== Ic--;) {
          var uc = rB[Ic];
          if (!cB(Bc[uc], nc[uc])) return !1
        }
        return !0
      }
      return Bc !== Bc && nc !== nc
    }
  },
  35195: (cB, Bc) => {
    function nc(cB) {
      if (cB && "object" === typeof cB) {
        var Bc = cB.which || cB.keyCode || cB.charCode;
        Bc && (cB = Bc)
      }
      if ("number" === typeof cB) return uc[cB];
      var nc, rB = String(cB);
      return (nc = Vc[rB.toLowerCase()]) ? nc : (nc = Ic[rB.toLowerCase()]) || (1 === rB.length ? rB.charCodeAt(0) : void 0)
    }
    nc.isEventKey = function(cB, Bc) {
      if (cB && "object" === typeof cB) {
        var nc = cB.which || cB.keyCode || cB.charCode;
        if (null === nc || void 0 === nc) return !1;
        if ("string" === typeof Bc) {
          var rB;
          if (rB = Vc[Bc.toLowerCase()]) return rB === nc;
          if (rB = Ic[Bc.toLowerCase()]) return rB === nc
        } else if ("number" === typeof Bc) return Bc === nc;
        return !1
      }
    };
    var Vc = (Bc = cB.exports = nc).code = Bc.codes = {
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
      Ic = Bc.aliases = {
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
    for (rB = 97; rB < 123; rB++) Vc[String.fromCharCode(rB)] = rB - 32;
    for (var rB = 48; rB < 58; rB++) Vc[rB - 48] = rB;
    for (rB = 1; rB < 13; rB++) Vc["f" + rB] = rB + 111;
    for (rB = 0; rB < 10; rB++) Vc["numpad " + rB] = rB + 96;
    var uc = Bc.names = Bc.title = {};
    for (rB in Vc) uc[Vc[rB]] = rB;
    for (var sc in Ic) Vc[sc] = Ic[sc]
  },
  35355: (cB, Bc, nc) => {
    nc.d(Bc, {
      b: () => uc
    });
    var Vc = nc(73);
    const Ic = Vc.useLayoutEffect;
    const rB = function(cB) {
      var Bc = (0, Vc.useRef)(cB);
      return Ic((function() {
        Bc.current = cB
      })), Bc
    };
    var uc = function(cB) {
      var Bc = rB(cB);
      (0, Vc.useEffect)((function() {
        var cB = function(cB) {
          var nc;
          if (null != Bc.current && (nc = Bc.current(cB)), cB.defaultPrevented && (cB.returnValue = ""), "string" === typeof nc) return cB.returnValue = nc, nc
        };
        return window.addEventListener("beforeunload", cB),
          function() {
            window.removeEventListener("beforeunload", cB)
          }
      }), [])
    }
  },
  35234: cB => {
    var Bc, nc = "undefined" !== typeof window ? window.navigator.userAgent : "",
      Vc = /OS X/.test(nc),
      Ic = /Opera/.test(nc),
      rB = !/like Gecko/.test(nc) && !Ic,
      uc = cB.exports = {
        0: Vc ? "<menu>" : "<UNK>",
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
        93: Vc ? "<meta>" : "<menu>",
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
        173: Vc && rB ? "-" : "<volume-mute>",
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
        231: Ic ? "`" : "<unicode>",
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
    for (Bc = 58; Bc < 65; ++Bc) uc[Bc] = String.fromCharCode(Bc);
    for (Bc = 48; Bc < 58; ++Bc) uc[Bc] = Bc - 48 + "";
    for (Bc = 65; Bc < 91; ++Bc) uc[Bc] = String.fromCharCode(Bc);
    for (Bc = 96; Bc < 106; ++Bc) uc[Bc] = "<num-" + (Bc - 96) + ">";
    for (Bc = 112; Bc < 136; ++Bc) uc[Bc] = "F" + (Bc - 111)
  }
};
Object.freeze(modules);
for (const cB in modules) Object.freeze(modules[cB]);