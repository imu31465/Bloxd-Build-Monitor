/*! For license information please see u88b9b.wasmMatchmaking.fe76c754.chunk.js.LICENSE.txt */
export const id = 74;
export const ids = [74, 176];
export const modules = {
  37358: (ee, ie) => {
    function He(ee) {
      if (ee && "object" === typeof ee) {
        var ie = ee.which || ee.keyCode || ee.charCode;
        ie && (ee = ie)
      }
      if ("number" === typeof ee) return Ke[ee];
      var He, Me = String(ee);
      return (He = ye[Me.toLowerCase()]) ? He : (He = be[Me.toLowerCase()]) || (1 === Me.length ? Me.charCodeAt(0) : void 0)
    }
    He.isEventKey = function(ee, ie) {
      if (ee && "object" === typeof ee) {
        var He = ee.which || ee.keyCode || ee.charCode;
        if (null === He || void 0 === He) return !1;
        if ("string" === typeof ie) {
          var Me;
          if (Me = ye[ie.toLowerCase()]) return Me === He;
          if (Me = be[ie.toLowerCase()]) return Me === He
        } else if ("number" === typeof ie) return ie === He;
        return !1
      }
    };
    var ye = (ie = ee.exports = He).code = ie.codes = {
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
      be = ie.aliases = {
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
    for (Me = 97; Me < 123; Me++) ye[String.fromCharCode(Me)] = Me - 32;
    for (var Me = 48; Me < 58; Me++) ye[Me - 48] = Me;
    for (Me = 1; Me < 13; Me++) ye["f" + Me] = Me + 111;
    for (Me = 0; Me < 10; Me++) ye["numpad " + Me] = Me + 96;
    var Ke = ie.names = ie.title = {};
    for (Me in ye) Ke[ye[Me]] = Me;
    for (var Ue in be) ye[Ue] = be[Ue]
  },
  37529: (ee, ie, He) => {
    He.d(ie, {
      b: () => Ke
    });
    var ye = He(59);
    const be = ye.useLayoutEffect;
    const Me = function(ee) {
      var ie = (0, ye.useRef)(ee);
      return be((function() {
        ie.current = ee
      })), ie
    };
    var Ke = function(ee) {
      var ie = Me(ee);
      (0, ye.useEffect)((function() {
        var ee = function(ee) {
          var He;
          if (null != ie.current && (He = ie.current(ee)), ee.defaultPrevented && (ee.returnValue = ""), "string" === typeof He) return ee.returnValue = He, He
        };
        return window.addEventListener("beforeunload", ee),
          function() {
            window.removeEventListener("beforeunload", ee)
          }
      }), [])
    }
  },
  37400: ee => {
    var ie, He = "undefined" !== typeof window ? window.navigator.userAgent : "",
      ye = /OS X/.test(He),
      be = /Opera/.test(He),
      Me = !/like Gecko/.test(He) && !be,
      Ke = ee.exports = {
        0: ye ? "<menu>" : "<UNK>",
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
        93: ye ? "<meta>" : "<menu>",
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
        173: ye && Me ? "-" : "<volume-mute>",
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
        231: be ? "`" : "<unicode>",
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
    for (ie = 58; ie < 65; ++ie) Ke[ie] = String.fromCharCode(ie);
    for (ie = 48; ie < 58; ++ie) Ke[ie] = ie - 48 + "";
    for (ie = 65; ie < 91; ++ie) Ke[ie] = String.fromCharCode(ie);
    for (ie = 96; ie < 106; ++ie) Ke[ie] = "<num-" + (ie - 96) + ">";
    for (ie = 112; ie < 136; ++ie) Ke[ie] = "F" + (ie - 111)
  },
  37420: (ee, ie, He) => {
    He.d(ie, {
      b: () => pe,
      d: () => Xe,
      h: () => ke,
      j: () => Re
    });
    var ye = He(34867),
      be = He(37424),
      Me = He(37427),
      Ke = He(9446),
      Ue = He(1432),
      Fe = He(59),
      Je = He(77),
      oe = He(1228);

    function Re() {
      var ee;
      return (0, Ue.j)(be.b, (0, be.p)()), (0, oe.jsx)(oe.Fragment, {
        children: null === (ee = (0, be.p)()) || void 0 === ee ? void 0 : ee.content
      })
    }

    function ke(ee) {
      var ie;
      let {
        show: He
      } = ee;
      (0, Ue.j)(be.b, (0, be.p)());
      const Je = null === (ie = (0, be.p)()) || void 0 === ie ? void 0 : ie.menu;
      return (0, Fe.useEffect)((() => {
        var ee;
        He || (null === Je || void 0 === Je || null === (ee = Je.onClose) || void 0 === ee || ee.call(Je), (0, Me.l)())
      }), [He, Je]), (0, Fe.useEffect)((() => He ? (0, Ke.g)(Me.r, Me.e) : void 0), [He]), (0, oe.jsx)(ye.e, {
        showing: He,
        globallyUniqueKey: "clientGameMenu",
        children: null === Je || void 0 === Je ? void 0 : Je.content
      })
    }
    const qe = new Map,
      fe = new Set;

    function Te(ee, ie) {
      ie ? qe.set(ee, ie) : qe.delete(ee);
      for (const He of fe) He()
    }

    function pe(ee) {
      let {
        placement: ie = "bottom"
      } = ee;
      const He = (0, Fe.useRef)(null);
      return (0, Fe.useLayoutEffect)((() => {
        const ee = He.current;
        return Te(ie, ee), () => {
          qe.get(ie) === ee && Te(ie, null)
        }
      }), [ie]), (0, oe.jsx)("div", {
        ref: He,
        id: `clientGameHud-${ie}`,
        style: {
          display: "contents"
        }
      })
    }

    function Xe(ee) {
      let {
        children: ie,
        placement: He = "bottom"
      } = ee;
      const [ye, be] = (0, Fe.useState)((() => {
        var ee;
        return null !== (ee = qe.get(He)) && void 0 !== ee ? ee : null
      }));
      return (0, Fe.useEffect)((() => {
        const ee = () => {
          var ee;
          be(null !== (ee = qe.get(He)) && void 0 !== ee ? ee : null)
        };
        return fe.add(ee), ee(), () => {
          fe.delete(ee)
        }
      }), [He]), ye ? (0, Je.createPortal)(ie, ye) : null
    }
  },
  9446: (ee, ie, He) => {
    He.d(ie, {
      c: () => Me,
      g: () => be
    });
    let ye = null;
    const be = function(ee) {
        const ie = {
          cycle: ee,
          canCycle: arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : () => !0
        };
        return ye = ie, () => {
          ye === ie && (ye = null)
        }
      },
      Me = () => {
        var ee;
        return null !== (ee = ye) && void 0 !== ee && ee.canCycle() ? ye.cycle : null
      }
  },
  9683: (ee, ie, He) => {
    He.d(ie, {
      d: () => Me,
      g: () => be
    });
    let ye = !1;

    function be() {
      ye = !0
    }

    function Me() {
      return ye
    }
  },
  37233: (ee, ie, He) => {
    He.r(ie), He.d(ie, {
      InGameUi: () => ge.b,
      LobbyLeaderboard: () => Oe.e,
      loadCharacterCustomisationUI: () => de,
      loadCharacterPreview: () => We,
      matchmakeAndPlay: () => De,
      matchmakeForAhead: () => Ue.i,
      setUpGame: () => te
    });
    var ye = He(1192),
      be = He(153),
      Me = He(18),
      Ke = He(37239),
      Ue = He(37244),
      Fe = He(2018),
      Je = He(37294);

    function oe() {
      return !1 !== Fe.c.get("canCustomiseChar")
    }
    let Re = !1;
    var ke = He(1305),
      qe = He(1196),
      fe = He(242),
      Te = He(3977),
      pe = He(9683),
      Xe = He(9674);

    function ze() {
      (0, pe.d)() || (0, Xe.loadWasmPlayAhead)().catch((ee => {
        console.warn("[bloxd-wasm-client] the play chunk did not load ahead of a join: the join loads it itself", ee)
      }))
    }
    var Be = He(3791),
      Ee = He(1798);
    var ge = He(37305),
      Oe = He(37836);

    function de() {
      return Promise.all([He.e(170), He.e(236)]).then((() => He(44474)))
    }

    function We() {
      return Promise.all([He.e(170), He.e(237)]).then((() => He(44481)))
    }

    function te() {
      return (0, Xe.loadWasmPreviews)()
    }
    Re || (Re = !0, document.addEventListener("keydown", (ee => {
        (0, Je.c)(ee, oe)
      }))),
      function(ee) {
        var ie;
        return !0 !== (null === ee || void 0 === ee ? void 0 : ee.saveData) && !/2g$/.test(null !== (ie = null === ee || void 0 === ee ? void 0 : ee.effectiveType) && void 0 !== ie ? ie : "")
      }(navigator.connection) && (0, Te.e)((() => {
        (0, pe.d)() || Promise.all([He.e(89), He.e(103), He.e(234), He.e(233), He.e(150), He.e(155), He.e(70)]).then((() => He(42125))).then((async ee => {
          if ((0, pe.d)()) return;
          const ie = ee.startLoadAheadOfJoin({
            joinStarted: pe.d,
            language: qe.f.get().getCurrentLanguageCode()
          });
          (0, fe.e)((() => {
            (0, pe.d)() || ee.probeWebgl2AheadOfJoin()
          })), await ie, (0, fe.e)(ze)
        }), (ee => {
          console.warn("[bloxd-wasm-client] the loads ahead of a join did not start: the join loads the client itself", ee)
        }))
      }));
    const Ze = Me.e.get("router");
    null === Ze ? console.warn("[bloxd-wasm-client] no router as the matchmaking chunk loads: the join's loads start with the join") : function ee(ie) {
      if ((0, Ee.c)(ie.state.location.pathname)) return void(0, Xe.loadWasmPlay)().catch((() => {}));
      const He = ie.subscribe((ye => {
        (0, Ee.c)(ye.location.pathname) && (He(), (0, Be.f)().then((() => {
          ee(ie)
        })))
      }))
    }(Ze), (0, Ke.c)();
    const we = (0, Ue.e)((async function(ee, ie) {
      let {
        place: He,
        userContext: Me,
        direct: Ke,
        matchedAt: Ue,
        rematch: Fe
      } = ee;
      const Je = Ke ? 1 / 0 : Ue;
      let oe;
      try {
        oe = await (0, Xe.loadWasmPlay)()
      } catch (Re) {
        return console.error("The wasm client did not load:", Re), (0, ke.v)({
          websocketUrl: null
        }), ye.e.errorWithCode(String(Re), be.k.CONNECT_TO_GAME_SERVER, {
          error: Re,
          severity: ie.aborted ? "low" : "medium",
          Ce: ie.aborted
        })
      }
      return oe.playWasmGame({
        userContext: Me,
        place: He,
        matchedAt: Je,
        rematch: Fe
      }, ie)
    }));

    function De() {
      return (0, Xe.loadWasmPlay)().catch((() => {})), we(...arguments)
    }
  },
  9674: (ee, ie, He) => {
    He.r(ie), He.d(ie, {
      loadWasmPlay: () => ke,
      loadWasmPlayAhead: () => qe,
      loadWasmPreviews: () => fe
    });
    var ye = He(3465),
      be = He(2342),
      Me = He(2170),
      Ke = He(5046),
      Ue = He(3892),
      Fe = He(9683);
    let Je = null;

    function oe() {
      return Promise.all([He.e(86), He.e(89), He.e(103), He.e(234), He.e(233), He.e(150), He.e(216), He.e(243), He.e(155), He.e(101), He.e(244), He.e(75)]).then((() => He(41771)))
    }

    function Re() {
      Promise.all([He.e(84), He.e(87), He.e(85), He.e(86), He.e(103), He.e(100), He.e(300), He.e(207), He.e(250), He.e(274), He.e(244), He.e(54)]).then((() => He(42095))).catch((() => {}))
    }

    function ke() {
      return Ke.d.cancelDownloadForJoin(), (0, Ue.b)(), (0, be.g)(), (0, Fe.g)(), (0, Me.i)(), Re(), Promise.all([He.e(89), He.e(103), He.e(234), He.e(233), He.e(150), He.e(155), He.e(70)]).then((() => He(42125))).then((ee => {
        let {
          startJoinLoad: ie
        } = ee;
        ie()
      }), (() => {})), Je ??= oe().then((ee => (ee.startWasmPlay(), ee.followPageUiPack((ee => {
        ye.c.showGamePack(ee)
      })), ee)), (ee => {
        throw Je = null, ee
      })), Je
    }

    function qe() {
      return Re(), He.e(124).then((() => He(42130))).catch((() => {})), oe().then((() => {}))
    }

    function fe() {
      return oe().then((ee => {
        ee.startWasmPreviews(), ee.prefetchWasmPreviews()
      }))
    }
  },
  37669: (ee, ie, He) => {
    function ye(ee) {
      return "fetch" === ee || "timeout" === ee || "integrity" === ee ? "download" : "browser"
    }
    He.d(ie, {
      c: () => be,
      g: () => Fe,
      i: () => oe,
      j: () => Ue,
      m: () => Ke,
      o: () => Je,
      s: () => ye,
      u: () => Me
    });
    const be = "https://discord.gg/playbloxd";

    function Me(ee, ie) {
      return "download" === ee ? {
        icon: "wifi",
        title: "wasmScreens:downloadFailedTitle",
        help: "wasmScreens:downloadFailedHelp",
        helpValues: {},
        discordLink: !1,
        confirm: "general:tryAgain",
        cancel: "general:back"
      } : "memory" === ee || "noContext" === ee || "graphicsLost" === ee ? {
        icon: "face-dizzy",
        title: `wasmUnsupported:${ee}Title`,
        help: `wasmUnsupported:${ee}Help${ie?"App":""}`,
        helpValues: {},
        discordLink: !1,
        confirm: "general:tryAgain",
        cancel: "general:back"
      } : {
        icon: "face-dizzy",
        title: ie ? "wasmUnsupported:titleApp" : "wasmUnsupported:title",
        help: ie ? "wasmUnsupported:helpApp" : "wasmUnsupported:" + ("noWebAssembly" === ee ? "noWebAssemblyHelp" : "help"),
        helpValues: {},
        discordLink: !1,
        confirm: "general:ok",
        cancel: null
      }
    }

    function Ke(ee, ie) {
      return {
        ...Me(ee, ie),
        help: ie ? "wasmUnsupported:stillBlockedHelpApp" : `wasmUnsupported:${ee}StillHelp`
      }
    }

    function Ue(ee) {
      return {
        icon: "face-dizzy",
        title: `wasmUnsupported:${ee}Title`,
        help: "wasmScreens:noContextHelp",
        helpValues: {},
        discordLink: !1,
        confirm: "general:tryAgain",
        cancel: "general:back"
      }
    }

    function Fe(ee, ie) {
      return {
        icon: "face-dizzy",
        title: "wasmScreens:crashTitle",
        help: ie ? "wasmScreens:crashHelp" : "wasmScreens:crashHelpNoDiscord",
        helpValues: {
          code: ee.code
        },
        discordLink: ie,
        confirm: "general:reload",
        cancel: "general:back"
      }
    }

    function Je() {
      return {
        icon: "face-dizzy",
        title: "wasmScreens:turnstilePageTitle",
        help: "wasmScreens:turnstilePageHelp",
        helpValues: {},
        discordLink: !1,
        confirm: "general:ok",
        cancel: null
      }
    }

    function oe(ee, ie, He) {
      return {
        icon: "wifi",
        title: "wasmScreens:disconnectedTitle",
        help: He ? "wasmScreens:reconnectingHelp" : "wasmScreens:disconnectedHelp",
        helpValues: {
          reason: ee.reason
        },
        discordLink: null === ee.name,
        confirm: ie ? "general:reconnect" : ee.requiresRefresh ? "general:reload" : "general:ok",
        cancel: null
      }
    }
  },
  37068: (ee, ie, He) => {
    He.d(ie, {
      D: () => fe,
      E: () => Te,
      G: () => Xe,
      d: () => ye,
      g: () => Re,
      h: () => be,
      i: () => ke,
      j: () => pe,
      n: () => oe,
      r: () => ze,
      v: () => Fe,
      y: () => Je,
      z: () => qe
    });
    const ye = [{
      numLines: 7,
      charsPerLine: 16,
      uiFontSize: 3.3,
      ingameFontSize: 25
    }, {
      numLines: 5,
      charsPerLine: 11,
      uiFontSize: 4.6,
      ingameFontSize: 36
    }, {
      numLines: 3,
      charsPerLine: 7,
      uiFontSize: 7.5,
      ingameFontSize: 58
    }];

    function be(ee, ie) {
      const {
        numLines: He,
        charsPerLine: be
      } = ye[ie];
      return Be(ee, He, be, !1)
    }
    const Me = 7 / 8,
      Ke = .25,
      Ue = 8;

    function Fe(ee, ie) {
      return {
        width: Math.min(ee, Ue) - 2 * Ke,
        height: Math.min(ie, Ue) - 2 * Ke
      }
    }

    function Je(ee, ie, He) {
      const be = Fe(ee, ie),
        {
          numLines: Ke,
          charsPerLine: Ue
        } = ye[He];
      return {
        numLines: Math.max(1, Math.floor(Ke / Me * be.height)),
        charsPerLine: Math.max(1, Math.floor(Ue * be.width))
      }
    }

    function oe(ee, ie, He, ye) {
      const {
        numLines: be,
        charsPerLine: Me
      } = Je(He, ye, ie);
      return Be(ee, be, Me, !1)
    }
    const Re = 32e3;

    function ke(ee) {
      return ee.slice(0, Re)
    }
    const qe = 512e3,
      fe = 64,
      Te = qe;

    function pe(ee, ie) {
      const He = Math.max(0, Te - ie),
        ye = Math.min(qe, He);
      return ee.slice(0, ye)
    }
    const Xe = {
      book: {
        numLines: 13,
        charsPerLine: 19,
        uiFontSize: 1.95
      },
      EJ: {
        numLines: 1,
        charsPerLine: 19,
        uiFontSize: 1.95
      },
      nameTag: {
        numLines: 1,
        charsPerLine: 13,
        uiFontSize: 4.6
      }
    };

    function ze(ee, ie) {
      const {
        numLines: He,
        charsPerLine: ye
      } = Xe[ie];
      return Be(ee, He, ye, !1)
    }

    function Be(ee, ie, He, ye, be) {
      (be || ye) && (ee = ee.slice(0, null !== be && void 0 !== be ? be : ie * He));
      const Me = ee.split("\n");
      if (Me.length > ie && Me.splice(ie, Me.length - ie), !ye)
        for (let Ke = 0; Ke < Me.length; Ke++) {
          const ee = Me[Ke];
          ee.length > He && (Me[Ke] = ee.substring(0, He), Me.length < ie && Me.splice(Ke + 1, 0, ee.substring(He)))
        }
      return Me.join("\n")
    }
  },
  10063: (ee, ie, He) => {
    He.d(ie, {
      e: () => be,
      f: () => Me
    });
    var ye = He(10008);
    const be = "Air",
      Me = Object.freeze(new ye.e(be, 0, "", null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null))
  }
};
Object.freeze(modules);
for (const ee in modules) Object.freeze(modules[ee]);