/*! For license information please see zyyatq.wasmMatchmaking.2d148955.chunk.js.LICENSE.txt */
export const id = 59;
export const ids = [59];
export const modules = {
  36116: YY => {
    YY.exports = function YY(rY, DY) {
      if (rY === DY) return !0;
      if (rY && DY && "object" == typeof rY && "object" == typeof DY) {
        if (rY.constructor !== DY.constructor) return !1;
        var FY, AY, IY;
        if (Array.isArray(rY)) {
          if ((FY = rY.length) != DY.length) return !1;
          for (AY = FY; 0 !== AY--;)
            if (!YY(rY[AY], DY[AY])) return !1;
          return !0
        }
        if (rY.constructor === RegExp) return rY.source === DY.source && rY.flags === DY.flags;
        if (rY.valueOf !== Object.prototype.valueOf) return rY.valueOf() === DY.valueOf();
        if (rY.toString !== Object.prototype.toString) return rY.toString() === DY.toString();
        if ((FY = (IY = Object.keys(rY)).length) !== Object.keys(DY).length) return !1;
        for (AY = FY; 0 !== AY--;)
          if (!Object.prototype.hasOwnProperty.call(DY, IY[AY])) return !1;
        for (AY = FY; 0 !== AY--;) {
          var RY = IY[AY];
          if (!YY(rY[RY], DY[RY])) return !1
        }
        return !0
      }
      return rY !== rY && DY !== DY
    }
  },
  35974: (YY, rY) => {
    function DY(YY) {
      if (YY && "object" === typeof YY) {
        var rY = YY.which || YY.keyCode || YY.charCode;
        rY && (YY = rY)
      }
      if ("number" === typeof YY) return RY[YY];
      var DY, IY = String(YY);
      return (DY = FY[IY.toLowerCase()]) ? DY : (DY = AY[IY.toLowerCase()]) || (1 === IY.length ? IY.charCodeAt(0) : void 0)
    }
    DY.isEventKey = function(YY, rY) {
      if (YY && "object" === typeof YY) {
        var DY = YY.which || YY.keyCode || YY.charCode;
        if (null === DY || void 0 === DY) return !1;
        if ("string" === typeof rY) {
          var IY;
          if (IY = FY[rY.toLowerCase()]) return IY === DY;
          if (IY = AY[rY.toLowerCase()]) return IY === DY
        } else if ("number" === typeof rY) return rY === DY;
        return !1
      }
    };
    var FY = (rY = YY.exports = DY).code = rY.codes = {
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
      AY = rY.aliases = {
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
    for (IY = 97; IY < 123; IY++) FY[String.fromCharCode(IY)] = IY - 32;
    for (var IY = 48; IY < 58; IY++) FY[IY - 48] = IY;
    for (IY = 1; IY < 13; IY++) FY["f" + IY] = IY + 111;
    for (IY = 0; IY < 10; IY++) FY["numpad " + IY] = IY + 96;
    var RY = rY.names = rY.title = {};
    for (IY in FY) RY[FY[IY]] = IY;
    for (var OY in AY) FY[OY] = AY[OY]
  },
  36135: (YY, rY, DY) => {
    DY.d(rY, {
      e: () => RY
    });
    var FY = DY(61);
    const AY = FY.useLayoutEffect;
    const IY = function(YY) {
      var rY = (0, FY.useRef)(YY);
      return AY((function() {
        rY.current = YY
      })), rY
    };
    var RY = function(YY) {
      var rY = IY(YY);
      (0, FY.useEffect)((function() {
        var YY = function(YY) {
          var DY;
          if (null != rY.current && (DY = rY.current(YY)), YY.defaultPrevented && (YY.returnValue = ""), "string" === typeof DY) return YY.returnValue = DY, DY
        };
        return window.addEventListener("beforeunload", YY),
          function() {
            window.removeEventListener("beforeunload", YY)
          }
      }), [])
    }
  },
  36008: YY => {
    var rY, DY = "undefined" !== typeof window ? window.navigator.userAgent : "",
      FY = /OS X/.test(DY),
      AY = /Opera/.test(DY),
      IY = !/like Gecko/.test(DY) && !AY,
      RY = YY.exports = {
        0: FY ? "<menu>" : "<UNK>",
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
        93: FY ? "<meta>" : "<menu>",
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
        173: FY && IY ? "-" : "<volume-mute>",
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
        231: AY ? "`" : "<unicode>",
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
    for (rY = 58; rY < 65; ++rY) RY[rY] = String.fromCharCode(rY);
    for (rY = 48; rY < 58; ++rY) RY[rY] = rY - 48 + "";
    for (rY = 65; rY < 91; ++rY) RY[rY] = String.fromCharCode(rY);
    for (rY = 96; rY < 106; ++rY) RY[rY] = "<num-" + (rY - 96) + ">";
    for (rY = 112; rY < 136; ++rY) RY[rY] = "F" + (rY - 111)
  },
  6230: (YY, rY, DY) => {
    DY.d(rY, {
      c: () => AY,
      e: () => IY
    });
    var FY = DY(40);
    const AY = "shaderPack";
    async function IY() {
      var YY;
      let rY = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
      return null !== (YY = await FY.i.getItem(AY, rY)) && void 0 !== YY ? YY : null
    }
  },
  8309: (YY, rY, DY) => {
    DY.d(rY, {
      e: () => IY,
      h: () => AY
    });
    let FY = !1;

    function AY() {
      FY = !0
    }

    function IY() {
      return FY
    }
  },
  35873: (YY, rY, DY) => {
    DY.r(rY), DY.d(rY, {
      InGameUi: () => mY.c,
      LobbyLeaderboard: () => VY.c,
      loadCharacterCustomisationUI: () => SY,
      loadCharacterPreview: () => lY,
      matchmakeAndPlay: () => BY,
      setUpGame: () => TY
    });
    var FY = DY(1253),
      AY = DY(183),
      IY = DY(19),
      RY = DY(35881),
      OY = DY(35886),
      gY = DY(1823),
      aY = DY(35921);

    function vY() {
      return !1 !== gY.b.get("canCustomiseChar")
    }
    let uY = !1;
    var sY = DY(1322),
      iY = DY(1256),
      yY = DY(713),
      QY = DY(8309);
    var oY = DY(8307),
      WY = DY(3168),
      EY = DY(1762);
    var mY = DY(35935),
      VY = DY(36372);

    function SY() {
      return Promise.all([DY.e(279), DY.e(387)]).then((() => DY(40271)))
    }

    function lY() {
      return DY.e(280).then((() => DY(40276)))
    }

    function TY() {
      return (0, oY.f)()
    }
    uY || (uY = !0, document.addEventListener("keydown", (YY => {
        (0, aY.e)(YY, vY)
      }))),
      function(YY) {
        var rY;
        return !0 !== (null === YY || void 0 === YY ? void 0 : YY.saveData) && !/2g$/.test(null !== (rY = null === YY || void 0 === YY ? void 0 : YY.effectiveType) && void 0 !== rY ? rY : "")
      }(navigator.connection) && (0, yY.d)((() => {
        (0, QY.e)() || Promise.all([DY.e(74), DY.e(133), DY.e(87), DY.e(55)]).then((() => DY(39865))).then((YY => {
          (0, QY.e)() || YY.startLoadAheadOfJoin({
            joinStarted: QY.e,
            language: iY.h.get().getCurrentLanguageCode()
          })
        }), (YY => {
          console.warn("[bloxd-wasm-client] the loads ahead of a join did not start: the join loads the client itself", YY)
        }))
      }));
    const eY = IY.b.get("router");
    null === eY ? console.warn("[bloxd-wasm-client] no router as the matchmaking chunk loads: the join's loads start with the join") : function YY(rY) {
      if ((0, EY.d)(rY.state.location.pathname)) return void(0, oY.e)().catch((() => {}));
      const DY = rY.subscribe((FY => {
        (0, EY.d)(FY.location.pathname) && (DY(), (0, WY.b)().then((() => {
          YY(rY)
        })))
      }))
    }(eY), (0, RY.d)();
    const NY = (0, OY.d)((async function(YY, rY) {
      let {
        place: DY,
        userContext: IY,
        direct: RY,
        rematch: OY
      } = YY;
      const gY = RY ? 1 / 0 : performance.now();
      let aY;
      try {
        aY = await (0, oY.e)()
      } catch (vY) {
        return console.error("The wasm client did not load:", vY), (0, sY.n)({
          websocketUrl: null
        }), FY.e.errorWithCode(String(vY), AY.l.CONNECT_TO_GAME_SERVER, {
          error: vY,
          severity: rY.aborted ? "low" : "medium",
          Hr: rY.aborted
        })
      }
      return aY.playWasmGame({
        userContext: IY,
        place: DY,
        matchedAt: gY,
        rematch: OY
      }, rY)
    }));

    function BY() {
      return (0, oY.e)().catch((() => {})), NY(...arguments)
    }
  },
  8307: (YY, rY, DY) => {
    DY.d(rY, {
      e: () => vY,
      f: () => uY
    });
    var FY = DY(2743),
      AY = DY(2137),
      IY = DY(2785),
      RY = DY(4220),
      OY = DY(3082),
      gY = DY(8309);
    let aY = null;

    function vY() {
      return RY.e.cancelDownloadForJoin(), (0, OY.b)(), (0, AY.c)(), (0, gY.h)(), (0, IY.i)(), Promise.all([DY.e(69), DY.e(72), DY.e(71), DY.e(70), DY.e(83), DY.e(258), DY.e(237), DY.e(211), DY.e(235), DY.e(207), DY.e(46)]).then((() => DY(39778))).catch((() => {})), Promise.all([DY.e(74), DY.e(133), DY.e(87), DY.e(55)]).then((() => DY(39865))).then((YY => {
        let {
          startJoinLoad: rY
        } = YY;
        rY()
      }), (() => {})), aY ??= Promise.all([DY.e(71), DY.e(74), DY.e(130), DY.e(73), DY.e(133), DY.e(261), DY.e(185), DY.e(87), DY.e(86), DY.e(85), DY.e(207), DY.e(60)]).then((() => DY(39960))).then((YY => (YY.startWasmPlay(), YY.followPageUiPack((YY => {
        FY.d.showGamePack(YY)
      })), YY)), (YY => {
        throw aY = null, YY
      })), aY
    }

    function uY() {
      return Promise.all([DY.e(71), DY.e(74), DY.e(130), DY.e(73), DY.e(133), DY.e(261), DY.e(185), DY.e(87), DY.e(86), DY.e(85), DY.e(207), DY.e(60)]).then((() => DY(39960))).then((YY => {
        YY.startWasmPreviews(), YY.prefetchWasmPreviews()
      }))
    }
  }
};
Object.freeze(modules);
for (const YY in modules) Object.freeze(modules[YY]);