/*! For license information please see pxmq3aq.wasmMatchmaking.f543f291.chunk.js.LICENSE.txt */
export const id = 74;
export const ids = [74];
export const modules = {
  37685: (VV, eV) => {
    function xV(VV) {
      if (VV && "object" === typeof VV) {
        var eV = VV.which || VV.keyCode || VV.charCode;
        eV && (VV = eV)
      }
      if ("number" === typeof VV) return yV[VV];
      var xV, UV = String(VV);
      return (xV = JV[UV.toLowerCase()]) ? xV : (xV = YV[UV.toLowerCase()]) || (1 === UV.length ? UV.charCodeAt(0) : void 0)
    }
    xV.isEventKey = function(VV, eV) {
      if (VV && "object" === typeof VV) {
        var xV = VV.which || VV.keyCode || VV.charCode;
        if (null === xV || void 0 === xV) return !1;
        if ("string" === typeof eV) {
          var UV;
          if (UV = JV[eV.toLowerCase()]) return UV === xV;
          if (UV = YV[eV.toLowerCase()]) return UV === xV
        } else if ("number" === typeof eV) return eV === xV;
        return !1
      }
    };
    var JV = (eV = VV.exports = xV).code = eV.codes = {
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
      YV = eV.aliases = {
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
    for (UV = 97; UV < 123; UV++) JV[String.fromCharCode(UV)] = UV - 32;
    for (var UV = 48; UV < 58; UV++) JV[UV - 48] = UV;
    for (UV = 1; UV < 13; UV++) JV["f" + UV] = UV + 111;
    for (UV = 0; UV < 10; UV++) JV["numpad " + UV] = UV + 96;
    var yV = eV.names = eV.title = {};
    for (UV in JV) yV[JV[UV]] = UV;
    for (var pV in YV) JV[pV] = YV[pV]
  },
  37860: (VV, eV, xV) => {
    xV.d(eV, {
      d: () => yV
    });
    var JV = xV(62);
    const YV = JV.useLayoutEffect;
    const UV = function(VV) {
      var eV = (0, JV.useRef)(VV);
      return YV((function() {
        eV.current = VV
      })), eV
    };
    var yV = function(VV) {
      var eV = UV(VV);
      (0, JV.useEffect)((function() {
        var VV = function(VV) {
          var xV;
          if (null != eV.current && (xV = eV.current(VV)), VV.defaultPrevented && (VV.returnValue = ""), "string" === typeof xV) return VV.returnValue = xV, xV
        };
        return window.addEventListener("beforeunload", VV),
          function() {
            window.removeEventListener("beforeunload", VV)
          }
      }), [])
    }
  },
  37737: VV => {
    var eV, xV = "undefined" !== typeof window ? window.navigator.userAgent : "",
      JV = /OS X/.test(xV),
      YV = /Opera/.test(xV),
      UV = !/like Gecko/.test(xV) && !YV,
      yV = VV.exports = {
        0: JV ? "<menu>" : "<UNK>",
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
        93: JV ? "<meta>" : "<menu>",
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
        173: JV && UV ? "-" : "<volume-mute>",
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
        231: YV ? "`" : "<unicode>",
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
    for (eV = 58; eV < 65; ++eV) yV[eV] = String.fromCharCode(eV);
    for (eV = 48; eV < 58; ++eV) yV[eV] = eV - 48 + "";
    for (eV = 65; eV < 91; ++eV) yV[eV] = String.fromCharCode(eV);
    for (eV = 96; eV < 106; ++eV) yV[eV] = "<num-" + (eV - 96) + ">";
    for (eV = 112; eV < 136; ++eV) yV[eV] = "F" + (eV - 111)
  },
  37756: (VV, eV, xV) => {
    xV.d(eV, {
      b: () => rV,
      e: () => kV,
      f: () => vV,
      h: () => ZV
    });
    var JV = xV(35300),
      YV = xV(37762),
      UV = xV(37771),
      yV = xV(9335),
      pV = xV(1542),
      QV = xV(62),
      nV = xV(78),
      wV = xV(1321);

    function ZV() {
      var VV;
      return (0, pV.j)(YV.e, (0, YV.p)()), (0, wV.jsx)(wV.Fragment, {
        children: null === (VV = (0, YV.p)()) || void 0 === VV ? void 0 : VV.content
      })
    }

    function vV(VV) {
      var eV;
      let {
        show: xV
      } = VV;
      (0, pV.j)(YV.e, (0, YV.p)());
      const nV = null === (eV = (0, YV.p)()) || void 0 === eV ? void 0 : eV.menu;
      return (0, QV.useEffect)((() => {
        var VV;
        xV || (null === nV || void 0 === nV || null === (VV = nV.onClose) || void 0 === VV || VV.call(nV), (0, UV.q)())
      }), [xV, nV]), (0, QV.useEffect)((() => xV ? (0, yV.g)(UV.t, UV.g) : void 0), [xV]), (0, wV.jsx)(JV.c, {
        showing: xV,
        globallyUniqueKey: "clientGameMenu",
        children: null === nV || void 0 === nV ? void 0 : nV.content
      })
    }

    function rV(VV) {
      let {
        placement: eV = "bottom"
      } = VV;
      return (0, wV.jsx)("div", {
        id: `clientGameHud-${eV}`,
        style: {
          display: "contents"
        }
      })
    }

    function kV(VV) {
      let {
        children: eV,
        placement: xV = "bottom"
      } = VV;
      const [JV, YV] = (0, QV.useState)(null);
      return (0, QV.useEffect)((() => {
        YV(document.getElementById(`clientGameHud-${xV}`))
      }), [xV]), JV ? (0, nV.createPortal)(eV, JV) : null
    }
  },
  9335: (VV, eV, xV) => {
    xV.d(eV, {
      c: () => UV,
      g: () => YV
    });
    let JV = null;
    const YV = function(VV) {
        const eV = {
          cycle: VV,
          canCycle: arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : () => !0
        };
        return JV = eV, () => {
          JV === eV && (JV = null)
        }
      },
      UV = () => {
        var VV;
        return null !== (VV = JV) && void 0 !== VV && VV.canCycle() ? JV.cycle : null
      }
  },
  9532: (VV, eV, xV) => {
    xV.d(eV, {
      e: () => UV,
      h: () => YV
    });
    let JV = !1;

    function YV() {
      JV = !0
    }

    function UV() {
      return JV
    }
  },
  37602: (VV, eV, xV) => {
    xV.r(eV), xV.d(eV, {
      InGameUi: () => FV.d,
      LobbyLeaderboard: () => TV.c,
      loadCharacterCustomisationUI: () => PV,
      loadCharacterPreview: () => AV,
      matchmakeAndPlay: () => zV,
      matchmakeForAhead: () => pV.c,
      setUpGame: () => NV
    });
    var JV = xV(1276),
      YV = xV(165),
      UV = xV(27),
      yV = xV(37607),
      pV = xV(37610),
      QV = xV(2080),
      nV = xV(37636);

    function wV() {
      return !1 !== QV.c.get("canCustomiseChar")
    }
    let ZV = !1;
    var vV = xV(1391),
      rV = xV(1279),
      kV = xV(275),
      bV = xV(2617),
      EV = xV(9532),
      BV = xV(9530);

    function jV() {
      (0, EV.e)() || (0, BV.d)().catch((VV => {
        console.warn("[bloxd-wasm-client] the play chunk did not load ahead of a join: the join loads it itself", VV)
      }))
    }
    var qV = xV(3886),
      tV = xV(1850);
    var FV = xV(37644),
      TV = xV(38183);

    function PV() {
      return xV.e(239).then((() => xV(44203)))
    }

    function AV() {
      return xV.e(601).then((() => xV(44209)))
    }

    function NV() {
      return (0, BV.j)()
    }
    ZV || (ZV = !0, document.addEventListener("keydown", (VV => {
        (0, nV.b)(VV, wV)
      }))),
      function(VV) {
        var eV;
        return !0 !== (null === VV || void 0 === VV ? void 0 : VV.saveData) && !/2g$/.test(null !== (eV = null === VV || void 0 === VV ? void 0 : VV.effectiveType) && void 0 !== eV ? eV : "")
      }(navigator.connection) && (0, bV.d)((() => {
        (0, EV.e)() || Promise.all([xV.e(89), xV.e(103), xV.e(233), xV.e(232), xV.e(150), xV.e(153), xV.e(70)]).then((() => xV(42363))).then((async VV => {
          if ((0, EV.e)()) return;
          const eV = VV.startLoadAheadOfJoin({
            joinStarted: EV.e,
            language: rV.c.get().getCurrentLanguageCode()
          });
          (0, kV.e)((() => {
            (0, EV.e)() || VV.probeWebgl2AheadOfJoin()
          })), await eV, (0, kV.e)(jV)
        }), (VV => {
          console.warn("[bloxd-wasm-client] the loads ahead of a join did not start: the join loads the client itself", VV)
        }))
      }));
    const XV = UV.b.get("router");
    null === XV ? console.warn("[bloxd-wasm-client] no router as the matchmaking chunk loads: the join's loads start with the join") : function VV(eV) {
      if ((0, tV.d)(eV.state.location.pathname)) return void(0, BV.h)().catch((() => {}));
      const xV = eV.subscribe((JV => {
        (0, tV.d)(JV.location.pathname) && (xV(), (0, qV.f)().then((() => {
          VV(eV)
        })))
      }))
    }(XV), (0, yV.b)();
    const MV = (0, pV.b)((async function(VV, eV) {
      let {
        place: xV,
        userContext: UV,
        direct: yV,
        matchedAt: pV,
        rematch: QV
      } = VV;
      const nV = yV ? 1 / 0 : pV;
      let wV;
      try {
        wV = await (0, BV.h)()
      } catch (ZV) {
        return console.error("The wasm client did not load:", ZV), (0, vV.q)({
          websocketUrl: null
        }), JV.e.errorWithCode(String(ZV), YV.i.CONNECT_TO_GAME_SERVER, {
          error: ZV,
          severity: eV.aborted ? "low" : "medium",
          pJ: eV.aborted
        })
      }
      return wV.playWasmGame({
        userContext: UV,
        place: xV,
        matchedAt: nV,
        rematch: QV
      }, eV)
    }));

    function zV() {
      return (0, BV.h)().catch((() => {})), MV(...arguments)
    }
  },
  9530: (VV, eV, xV) => {
    xV.d(eV, {
      d: () => rV,
      h: () => vV,
      j: () => kV
    });
    var JV = xV(3584),
      YV = xV(2441),
      UV = xV(2261),
      yV = xV(5135),
      pV = xV(3942),
      QV = xV(9532);
    let nV = null;

    function wV() {
      return Promise.all([xV.e(86), xV.e(89), xV.e(103), xV.e(233), xV.e(232), xV.e(174), xV.e(222), xV.e(150), xV.e(153), xV.e(101), xV.e(298), xV.e(75)]).then((() => xV(41952)))
    }

    function ZV() {
      Promise.all([xV.e(84), xV.e(87), xV.e(85), xV.e(86), xV.e(103), xV.e(100), xV.e(296), xV.e(205), xV.e(246), xV.e(272), xV.e(298), xV.e(53)]).then((() => xV(42308))).catch((() => {}))
    }

    function vV() {
      return yV.d.cancelDownloadForJoin(), (0, pV.c)(), (0, YV.g)(), (0, QV.h)(), (0, UV.h)(), ZV(), Promise.all([xV.e(89), xV.e(103), xV.e(233), xV.e(232), xV.e(150), xV.e(153), xV.e(70)]).then((() => xV(42363))).then((VV => {
        let {
          startJoinLoad: eV
        } = VV;
        eV()
      }), (() => {})), nV ??= wV().then((VV => (VV.startWasmPlay(), VV.followPageUiPack((VV => {
        JV.b.showGamePack(VV)
      })), VV)), (VV => {
        throw nV = null, VV
      })), nV
    }

    function rV() {
      return ZV(), xV.e(299).then((() => xV(42371))).catch((() => {})), wV().then((() => {}))
    }

    function kV() {
      return wV().then((VV => {
        VV.startWasmPreviews(), VV.prefetchWasmPreviews()
      }))
    }
  },
  37620: (VV, eV, xV) => {
    xV.d(eV, {
      e: () => vV,
      g: () => wV,
      k: () => rV,
      m: () => ZV
    });
    var JV = xV(375),
      YV = xV(698),
      UV = xV(705),
      yV = xV(40);
    const pV = {
        idStorageKey: "playSessionId",
        lastActivityStorageKey: "playSessionLastActivityMs",
        expiryMs: 3e5
      },
      QV = "playSessionGameNameWithVariation",
      nV = "wasMatchmakePlayer";

    function wV() {
      let VV = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : yV.q;
      (0, UV.h)(VV, pV)
    }

    function ZV() {
      (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : yV.q).setItem(nV, !0)
    }

    function vV() {
      let VV = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : yV.q;
      return (0, UV.e)(VV, pV)
    }

    function rV(VV) {
      let eV = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : yV.q;
      const xV = (0, UV.e)(eV, pV),
        wV = function(VV) {
          const eV = VV.getItem(QV);
          return "string" !== typeof eV ? null : eV
        }(eV),
        ZV = function() {
          return !0 === (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : yV.q).getItem(nV)
        }(eV);
      let vV;
      return vV = null !== xV && null !== wV && (0, UV.f)(eV, pV) && function(VV, eV, xV) {
          const YV = (0, JV.Pb)(VV),
            UV = (0, JV.Pb)(eV),
            yV = (0, JV.Lb)(VV),
            pV = (0, JV.Lb)(eV);
          return !(YV !== UV || !xV) || YV === UV && yV === pV
        }(wV, VV, ZV) ? xV : (0, YV.c)(), (0, UV.j)(eV, pV, vV), eV.setItem(QV, VV),
        function() {
          (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : yV.q).removeItem(nV)
        }(eV), vV
    }
  },
  37612: (VV, eV, xV) => {
    xV.d(eV, {
      b: () => FV,
      c: () => TV
    });
    var JV = xV(1099),
      YV = xV(220),
      UV = xV(370),
      yV = xV(660),
      pV = xV(375),
      QV = xV(1108),
      nV = xV(686),
      wV = xV(717),
      ZV = xV(4995),
      vV = xV(99),
      rV = xV(138),
      kV = xV(1838),
      bV = xV(115),
      EV = xV(37620),
      BV = xV(40),
      jV = xV(701),
      qV = xV(668),
      tV = xV(37622);

    function FV() {
      var VV, eV;
      return [...null !== (VV = navigator.languages) && void 0 !== VV ? VV : [null !== (eV = navigator.language) && void 0 !== eV ? eV : "none"], "en-Gb"]
    }

    function TV(VV, eV, xV, TV, PV) {
      const AV = (0, JV.l)(eV) ? (0, JV.p)(eV) : null,
        NV = VV.isLoggedIn() && void 0 !== (0, YV.b)(UV.k, rV.siteUsed) ? (0, qV.g)() : null,
        XV = {
          cookies: (0, kV.getAllCookiesForGameNameWithVariation)(eV),
          isMobile: (0, vV.isMobile)(),
          isUsingCustomGameTexturePack: null !== AV && PV(AV),
          generalCookies: {
            joinDiscord: !!BV.m.getItem("DiscordPressed"),
            newGo: ZV.d,
            ...VV.getMetricsCookies(),
            trafficCode: TV,
            compliance: vV.compliance
          },
          browserInfo: {
            ua: window.navigator.userAgent,
            name: (0, vV.getBrowserName)(),
            version: (0, vV.getBrowserVersion)(),
            platform: navigator.platform,
            platformType: (0, vV.getPlatformType)(),
            deviceType: (0, bV.c)()
          },
          isLoggedIn: VV.isLoggedIn(),
          lobbyName: xV,
          languages: FV(),
          version: yV.e,
          siteUsed: rV.siteUsed,
          subsiteUsed: rV.subsiteUsed,
          playSessionId: (0, EV.k)(eV),
          visitSessionId: (0, jV.f)(),
          clientReason: nV.s.reason,
          budgetBasis: (0, tV.j)(),
          ...null !== wV.o && {
            diagClaim: wV.o.claimId
          },
          ...null !== NV && {
            webGpuLoss: NV
          }
        };
      return null !== AV && (0, pV.Hc)(AV) ? (XV.lobbyName = (0, JV.k)(AV, (0, JV.n)(eV), xV), {
        roomName: `classic_${QV.g}`,
        joinOptions: XV
      }) : {
        roomName: eV,
        joinOptions: XV
      }
    }
  },
  9922: (VV, eV, xV) => {
    xV.d(eV, {
      d: () => YV,
      f: () => UV
    });
    var JV = xV(9861);
    const YV = "Air",
      UV = Object.freeze(new JV.g(YV, 0, "", null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null))
  }
};
Object.freeze(modules);
for (const VV in modules) Object.freeze(modules[VV]);