/*! For license information please see qsji88.wasmMatchmaking.a0385d85.chunk.js.LICENSE.txt */
export const id = 59;
export const ids = [59];
export const modules = {
  35680: TT => {
    TT.exports = function TT(oT, IT) {
      if (oT === IT) return !0;
      if (oT && IT && "object" == typeof oT && "object" == typeof IT) {
        if (oT.constructor !== IT.constructor) return !1;
        var iT, zT, kT;
        if (Array.isArray(oT)) {
          if ((iT = oT.length) != IT.length) return !1;
          for (zT = iT; 0 !== zT--;)
            if (!TT(oT[zT], IT[zT])) return !1;
          return !0
        }
        if (oT.constructor === RegExp) return oT.source === IT.source && oT.flags === IT.flags;
        if (oT.valueOf !== Object.prototype.valueOf) return oT.valueOf() === IT.valueOf();
        if (oT.toString !== Object.prototype.toString) return oT.toString() === IT.toString();
        if ((iT = (kT = Object.keys(oT)).length) !== Object.keys(IT).length) return !1;
        for (zT = iT; 0 !== zT--;)
          if (!Object.prototype.hasOwnProperty.call(IT, kT[zT])) return !1;
        for (zT = iT; 0 !== zT--;) {
          var WT = kT[zT];
          if (!TT(oT[WT], IT[WT])) return !1
        }
        return !0
      }
      return oT !== oT && IT !== IT
    }
  },
  35546: (TT, oT) => {
    function IT(TT) {
      if (TT && "object" === typeof TT) {
        var oT = TT.which || TT.keyCode || TT.charCode;
        oT && (TT = oT)
      }
      if ("number" === typeof TT) return WT[TT];
      var IT, kT = String(TT);
      return (IT = iT[kT.toLowerCase()]) ? IT : (IT = zT[kT.toLowerCase()]) || (1 === kT.length ? kT.charCodeAt(0) : void 0)
    }
    IT.isEventKey = function(TT, oT) {
      if (TT && "object" === typeof TT) {
        var IT = TT.which || TT.keyCode || TT.charCode;
        if (null === IT || void 0 === IT) return !1;
        if ("string" === typeof oT) {
          var kT;
          if (kT = iT[oT.toLowerCase()]) return kT === IT;
          if (kT = zT[oT.toLowerCase()]) return kT === IT
        } else if ("number" === typeof oT) return oT === IT;
        return !1
      }
    };
    var iT = (oT = TT.exports = IT).code = oT.codes = {
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
      zT = oT.aliases = {
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
    for (kT = 97; kT < 123; kT++) iT[String.fromCharCode(kT)] = kT - 32;
    for (var kT = 48; kT < 58; kT++) iT[kT - 48] = kT;
    for (kT = 1; kT < 13; kT++) iT["f" + kT] = kT + 111;
    for (kT = 0; kT < 10; kT++) iT["numpad " + kT] = kT + 96;
    var WT = oT.names = oT.title = {};
    for (kT in iT) WT[iT[kT]] = kT;
    for (var XT in zT) iT[XT] = zT[XT]
  },
  35700: (TT, oT, IT) => {
    IT.d(oT, {
      d: () => WT
    });
    var iT = IT(46);
    const zT = iT.useLayoutEffect;
    const kT = function(TT) {
      var oT = (0, iT.useRef)(TT);
      return zT((function() {
        oT.current = TT
      })), oT
    };
    var WT = function(TT) {
      var oT = kT(TT);
      (0, iT.useEffect)((function() {
        var TT = function(TT) {
          var IT;
          if (null != oT.current && (IT = oT.current(TT)), TT.defaultPrevented && (TT.returnValue = ""), "string" === typeof IT) return TT.returnValue = IT, IT
        };
        return window.addEventListener("beforeunload", TT),
          function() {
            window.removeEventListener("beforeunload", TT)
          }
      }), [])
    }
  },
  35587: TT => {
    var oT, IT = "undefined" !== typeof window ? window.navigator.userAgent : "",
      iT = /OS X/.test(IT),
      zT = /Opera/.test(IT),
      kT = !/like Gecko/.test(IT) && !zT,
      WT = TT.exports = {
        0: iT ? "<menu>" : "<UNK>",
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
        93: iT ? "<meta>" : "<menu>",
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
        173: iT && kT ? "-" : "<volume-mute>",
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
        231: zT ? "`" : "<unicode>",
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
    for (oT = 58; oT < 65; ++oT) WT[oT] = String.fromCharCode(oT);
    for (oT = 48; oT < 58; ++oT) WT[oT] = oT - 48 + "";
    for (oT = 65; oT < 91; ++oT) WT[oT] = String.fromCharCode(oT);
    for (oT = 96; oT < 106; ++oT) WT[oT] = "<num-" + (oT - 96) + ">";
    for (oT = 112; oT < 136; ++oT) WT[oT] = "F" + (oT - 111)
  },
  6158: (TT, oT, IT) => {
    IT.d(oT, {
      d: () => zT,
      e: () => kT
    });
    var iT = IT(26);
    const zT = "shaderPack";
    async function kT() {
      var TT;
      let oT = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
      return null !== (TT = await iT.c.getItem(zT, oT)) && void 0 !== TT ? TT : null
    }
  },
  8329: (TT, oT, IT) => {
    IT.d(oT, {
      e: () => kT,
      f: () => zT
    });
    let iT = !1;

    function zT() {
      iT = !0
    }

    function kT() {
      return iT
    }
  },
  35449: (TT, oT, IT) => {
    IT.r(oT), IT.d(oT, {
      InGameUi: () => gT.e,
      LobbyLeaderboard: () => hT.b,
      loadCharacterCustomisationUI: () => wT,
      loadCharacterPreview: () => mT,
      matchmakeAndPlay: () => vT,
      setUpGame: () => eT
    });
    var iT = IT(1216),
      zT = IT(159),
      kT = IT(12),
      WT = IT(35451),
      XT = IT(35458),
      BT = IT(1770),
      FT = IT(35490);

    function ST() {
      return !1 !== BT.e.get("canCustomiseChar")
    }
    let DT = !1;
    var LT = IT(1293),
      xT = IT(1220),
      cT = IT(690),
      KT = IT(8329);
    var MT = IT(8325),
      rT = IT(3138),
      AT = IT(1706);
    var gT = IT(35503),
      hT = IT(35974);

    function wT() {
      return Promise.all([IT.e(279), IT.e(387)]).then((() => IT(39967)))
    }

    function mT() {
      return IT.e(280).then((() => IT(39976)))
    }

    function eT() {
      return (0, MT.e)()
    }
    DT || (DT = !0, document.addEventListener("keydown", (TT => {
        (0, FT.c)(TT, ST)
      }))),
      function(TT) {
        var oT;
        return !0 !== (null === TT || void 0 === TT ? void 0 : TT.saveData) && !/2g$/.test(null !== (oT = null === TT || void 0 === TT ? void 0 : TT.effectiveType) && void 0 !== oT ? oT : "")
      }(navigator.connection) && (0, cT.b)((() => {
        (0, KT.e)() || Promise.all([IT.e(74), IT.e(133), IT.e(87), IT.e(55)]).then((() => IT(39544))).then((TT => {
          (0, KT.e)() || TT.startLoadAheadOfJoin({
            joinStarted: KT.e,
            language: xT.d.get().getCurrentLanguageCode()
          })
        }), (TT => {
          console.warn("[bloxd-wasm-client] the loads ahead of a join did not start: the join loads the client itself", TT)
        }))
      }));
    const RT = kT.c.get("router");
    null === RT ? console.warn("[bloxd-wasm-client] no router as the matchmaking chunk loads: the join's loads start with the join") : function TT(oT) {
      if ((0, AT.c)(oT.state.location.pathname)) return void(0, MT.c)().catch((() => {}));
      const IT = oT.subscribe((iT => {
        (0, AT.c)(iT.location.pathname) && (IT(), (0, rT.c)().then((() => {
          TT(oT)
        })))
      }))
    }(RT), (0, WT.e)();
    const uT = (0, XT.d)((async function(TT, oT) {
      let {
        place: IT,
        userContext: kT,
        direct: WT,
        rematch: XT
      } = TT;
      const BT = WT ? 1 / 0 : performance.now();
      let FT;
      try {
        FT = await (0, MT.c)()
      } catch (ST) {
        return console.error("The wasm client did not load:", ST), (0, LT.o)({
          websocketUrl: null
        }), iT.b.errorWithCode(String(ST), zT.j.CONNECT_TO_GAME_SERVER, {
          error: ST,
          severity: oT.aborted ? "low" : "medium",
          Jo: oT.aborted
        })
      }
      return FT.playWasmGame({
        userContext: kT,
        place: IT,
        matchedAt: BT,
        rematch: XT
      }, oT)
    }));

    function vT() {
      return (0, MT.c)().catch((() => {})), uT(...arguments)
    }
  },
  8325: (TT, oT, IT) => {
    IT.d(oT, {
      c: () => ST,
      e: () => DT
    });
    var iT = IT(2710),
      zT = IT(2089),
      kT = IT(2750),
      WT = IT(4152),
      XT = IT(3061),
      BT = IT(8329);
    let FT = null;

    function ST() {
      return WT.b.cancelDownloadForJoin(), (0, XT.e)(), (0, zT.d)(), (0, BT.f)(), (0, kT.i)(), Promise.all([IT.e(69), IT.e(72), IT.e(71), IT.e(70), IT.e(83), IT.e(258), IT.e(237), IT.e(211), IT.e(235), IT.e(207), IT.e(46)]).then((() => IT(39457))).catch((() => {})), Promise.all([IT.e(74), IT.e(133), IT.e(87), IT.e(55)]).then((() => IT(39544))).then((TT => {
        let {
          startJoinLoad: oT
        } = TT;
        oT()
      }), (() => {})), FT ??= Promise.all([IT.e(71), IT.e(74), IT.e(130), IT.e(73), IT.e(133), IT.e(261), IT.e(185), IT.e(87), IT.e(86), IT.e(85), IT.e(207), IT.e(60)]).then((() => IT(39647))).then((TT => (TT.startWasmPlay(), TT.followPageUiPack((TT => {
        iT.e.showGamePack(TT)
      })), TT)), (TT => {
        throw FT = null, TT
      })), FT
    }

    function DT() {
      return Promise.all([IT.e(71), IT.e(74), IT.e(130), IT.e(73), IT.e(133), IT.e(261), IT.e(185), IT.e(87), IT.e(86), IT.e(85), IT.e(207), IT.e(60)]).then((() => IT(39647))).then((TT => {
        TT.startWasmPreviews(), TT.prefetchWasmPreviews()
      }))
    }
  }
};
Object.freeze(modules);
for (const TT in modules) Object.freeze(modules[TT]);