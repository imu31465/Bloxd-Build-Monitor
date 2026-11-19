export const id = 25;
export const ids = [25];
export const modules = {
  36025: (YY, rY, DY) => {
    DY.d(rY, {
      d: () => iY,
      e: () => yY,
      g: () => sY,
      h: () => uY
    });
    var FY = DY(8745),
      AY = DY(36032),
      IY = DY(36034),
      RY = DY(8111),
      OY = DY(1430),
      gY = DY(61),
      aY = DY(76),
      vY = DY(1125);

    function uY() {
      var YY;
      return (0, OY.k)(AY.d, (0, AY.n)()), (0, vY.jsx)(vY.Fragment, {
        children: null === (YY = (0, AY.n)()) || void 0 === YY ? void 0 : YY.content
      })
    }

    function sY(YY) {
      var rY;
      let {
        show: DY
      } = YY;
      (0, OY.k)(AY.d, (0, AY.n)());
      const aY = null === (rY = (0, AY.n)()) || void 0 === rY ? void 0 : rY.menu;
      return (0, gY.useEffect)((() => {
        var YY;
        DY || (null === aY || void 0 === aY || null === (YY = aY.onClose) || void 0 === YY || YY.call(aY), (0, IY.t)())
      }), [DY, aY]), (0, gY.useEffect)((() => DY ? (0, RY.f)(IY.y, IY.i) : void 0), [DY]), (0, vY.jsx)(FY.d, {
        showing: DY,
        globallyUniqueKey: "clientGameMenu",
        children: null === aY || void 0 === aY ? void 0 : aY.content
      })
    }

    function iY(YY) {
      let {
        placement: rY = "bottom"
      } = YY;
      return (0, vY.jsx)("div", {
        id: `clientGameHud-${rY}`,
        style: {
          display: "contents"
        }
      })
    }

    function yY(YY) {
      let {
        children: rY,
        placement: DY = "bottom"
      } = YY;
      const [FY, AY] = (0, gY.useState)(null);
      return (0, gY.useEffect)((() => {
        AY(document.getElementById(`clientGameHud-${DY}`))
      }), [DY]), FY ? (0, aY.createPortal)(rY, FY) : null
    }
  },
  4408: (YY, rY, DY) => {
    DY.d(rY, {
      b: () => oY,
      d: () => WY
    });
    var FY = DY(1092),
      AY = DY.n(FY),
      IY = DY(61),
      RY = DY(1211),
      OY = DY(4410),
      gY = DY(1778),
      aY = DY(2282),
      vY = DY(4419),
      uY = DY(1125);
    const sY = new WeakMap;
    let iY = 0;

    function yY(YY) {
      let rY = sY.get(YY);
      return void 0 === rY && (rY = iY++, sY.set(YY, rY)), rY
    }

    function QY(YY) {
      let {
        piece: rY
      } = YY;
      return "space" === rY.kind ? (0, uY.jsx)(uY.Fragment, {
        children: rY.text
      }) : (0, uY.jsx)("span", {
        className: "DialogueWord",
        style: {
          "--word-delay": `${rY.delayMs}ms`
        },
        children: (0, uY.jsx)(OY.c, {
          text: "icon" === rY.kind ? `[[${rY.icon}]]` : rY.text
        })
      })
    }

    function oY(YY) {
      let {
        display: rY
      } = YY;
      const {
        selectedLanguage: DY
      } = (0, RY.C)(), FY = (0, IY.useMemo)((() => (0, vY.e)((0, vY.g)(rY).plan.pieces)), [rY, DY.code]);
      return (0, uY.jsxs)("div", {
        className: AY()("Dialogue", {
          DialogueAnimateIn: !1 !== rY.animateIn
        }),
        children: [rY.speakerName && (0, uY.jsx)(gY.b, {
          text: rY.speakerName,
          className: "DialogueSpeaker"
        }), (0, uY.jsx)("p", {
          className: "DialogueLine",
          children: FY.map(((YY, rY) => 1 === YY.length && "space" === YY[0].kind ? YY[0].text : (0, uY.jsx)("span", {
            className: "DialogueGlue",
            children: YY.map(((YY, rY) => (0, uY.jsx)(QY, {
              piece: YY
            }, rY)))
          }, rY)))
        })]
      })
    }
    const WY = (0, IY.memo)((function() {
      const YY = (0, aY.j)("dialogue");
      return (0, uY.jsx)("div", {
        className: "DialogueAnchor",
        "data-camera-keeper": "",
        role: "status",
        "aria-live": "polite",
        "aria-atomic": "true",
        children: YY && (0, uY.jsx)(oY, {
          display: YY
        }, yY(YY))
      })
    }))
  },
  4410: (YY, rY, DY) => {
    DY.d(rY, {
      c: () => OY
    });
    var FY = DY(61),
      AY = DY(332),
      IY = DY(1793),
      RY = DY(1125);

    function OY(YY) {
      let {
        text: rY
      } = YY;
      const DY = [];
      let OY = "";
      return (0, AY.cc)(rY).forEach(((YY, rY) => {
        if ("string" === typeof YY || !(0, IY.f)(YY.icon)) return void(OY += "string" === typeof YY ? YY : YY.icon);
        const AY = Math.max(0, OY.trimEnd().search(/\S{1,12}$/));
        DY.push((0, RY.jsxs)(FY.Fragment, {
          children: [OY.slice(0, AY), (0, RY.jsxs)("span", {
            className: "InlineIconTextGlue",
            children: [OY.slice(AY), (0, RY.jsx)("span", {
              className: "InlineIconTextIcon",
              role: "img",
              "aria-label": YY.icon,
              children: (0, RY.jsx)(IY.c, {
                itemName: YY.icon,
                amount: 0
              })
            })]
          })]
        }, rY)), OY = ""
      })), DY.push(OY), (0, RY.jsx)(RY.Fragment, {
        children: DY
      })
    }
  },
  8745: (YY, rY, DY) => {
    DY.d(rY, {
      d: () => IY
    });
    var FY = DY(4093),
      AY = DY(4097);

    function IY(YY) {
      let {
        children: rY,
        showing: DY,
        globallyUniqueKey: IY,
        alwaysMountChildren: RY = !1,
        doGameplayStartStopOnShow: OY = !0,
        keepsMovement: gY = !1
      } = YY;
      return (0, AY.b)(!0, DY, IY, gY), (0, FY.c)(OY, DY), DY || RY ? rY : null
    }
  },
  4419: (YY, rY, DY) => {
    DY.d(rY, {
      e: () => fY,
      g: () => CY
    });
    var FY = DY(4422),
      AY = DY(332);
    const IY = 120,
      RY = 260,
      OY = 1.15,
      gY = 1.2,
      aY = 2,
      vY = 1.08,
      uY = .8,
      sY = .95,
      iY = 8,
      yY = "[\"')\\]\u300d\u300f\uff09]*",
      QY = new RegExp(`[.!?\u2026\u3002\uff01\uff1f]${yY}$`),
      oY = new RegExp(`[?\uff1f]${yY}$`),
      WY = new RegExp(`[!\uff01]${yY}$`),
      EY = /[,;:\u3001\uff0c\uff1b\uff1a]$/,
      mY = "\\u3040-\\u30ff\\u3400-\\u4dbf\\u4e00-\\u9fff\\uac00-\\ud7af\\uf900-\\ufaff",
      VY = new RegExp(`[${mY}]`),
      SY = new RegExp(`[${mY}]|[^${mY}]+`, "g"),
      lY = /[aeiouy\u0430\u0435\u0438\u043e\u0443\u044b\u044d\u044e\u044f\u03b1\u03b5\u03b7\u03b9\u03bf\u03c5\u03c9]+/g;

    function TY(YY) {
      let rY = 2166136261;
      for (let DY = 0; DY < YY.length; DY++) rY ^= YY.charCodeAt(DY), rY = Math.imul(rY, 16777619);
      return (rY >>> 0) / 4294967295 * 2 - 1
    }

    function eY(YY) {
      var rY;
      if (VY.test(YY)) return 1;
      const DY = YY.normalize("NFD").replace(/\p{M}/gu, "").toLowerCase(),
        FY = DY.replace(/[^0-9]/g, "");
      if (FY.length > 0 && !/\p{L}/u.test(DY)) return Math.min(FY.length, 4);
      const AY = null !== (rY = DY.match(lY)) && void 0 !== rY ? rY : [];
      if (0 === AY.length) {
        var IY, RY;
        const YY = null !== (IY = null === (RY = DY.match(/\p{L}/gu)) || void 0 === RY ? void 0 : RY.length) && void 0 !== IY ? IY : 0;
        return 0 === YY ? 0 : Math.min(Math.max(1, Math.round(YY / 2.5)), iY)
      }
      const OY = DY.replace(/[^\p{L}]/gu, ""),
        gY = AY.length > 1 && "e" === AY.at(-1) && OY.endsWith("e") && !OY.endsWith("le") && !/[\u00e9\u00e8\u00ea]$/i.test(YY.replace(/[^\p{L}]/gu, ""));
      return Math.min(AY.length - (gY ? 1 : 0), iY)
    }

    function NY(YY) {
      return YY.toLowerCase().replace(/[^\p{L}\p{N}]/gu, "")
    }

    function BY(YY) {
      const rY = YY.replace(/[^\p{L}]/gu, "");
      return rY.length >= 2 && rY === rY.toUpperCase() && rY !== rY.toLowerCase()
    }

    function cY(YY, rY) {
      var DY;
      const iY = rY && (0, FY.l)(rY),
        yY = null !== (DY = null === iY || void 0 === iY ? void 0 : iY.syllableMs) && void 0 !== DY ? DY : FY.b,
        mY = function(YY) {
          const rY = [];
          for (const FY of (0, AY.cc)(YY))
            if ("string" === typeof FY)
              for (const YY of FY.split(/(\s+)/)) {
                if ("" === YY) continue;
                if (/^\s+$/.test(YY)) {
                  rY.push({
                    kind: "space",
                    text: YY
                  });
                  continue
                }
                if (!VY.test(YY)) {
                  rY.push({
                    kind: "word",
                    text: YY,
                    delayMs: 0
                  });
                  continue
                }
                let FY = !0;
                for (const AY of null !== (DY = YY.match(SY)) && void 0 !== DY ? DY : []) {
                  var DY;
                  const YY = rY.at(-1);
                  FY || "word" !== (null === YY || void 0 === YY ? void 0 : YY.kind) || VY.test(AY) || /[\p{L}\p{N}]/u.test(AY) ? (FY || rY.push({
                    kind: "space",
                    text: "\u200b"
                  }), rY.push({
                    kind: "word",
                    text: AY,
                    delayMs: 0
                  }), FY = !1) : YY.text += AY
                }
              } else rY.push({
                kind: "icon",
                text: FY.icon,
                delayMs: 0
              });
          return rY
        }(YY),
        lY = [];
      let cY = [];
      for (const FY of mY) "space" !== FY.kind && (cY.push(FY), QY.test(FY.text) && (lY.push(cY), cY = []));
      lY.push(cY);
      const KY = [];
      let HY = 0;
      for (const FY of lY) {
        var zY, ZY;
        const YY = null !== (zY = null === (ZY = FY.at(-1)) || void 0 === ZY ? void 0 : ZY.text) && void 0 !== zY ? zY : "",
          rY = oY.test(YY),
          DY = WY.test(YY),
          AY = FY.map((YY => "word" === YY.kind ? eY(YY.text) : 1)),
          mY = AY.findLastIndex((YY => YY > 0));
        for (const [oY, WY] of FY.entries()) {
          const YY = "word" === WY.kind,
            FY = AY[oY];
          WY.delayMs = HY;
          for (let AY = 0; iY && AY < FY; AY++) {
            const {
              intonation: IY
            } = iY;
            let RY = mY > 0 ? -IY.declineSemitones * (oY / mY) : 0;
            RY += TY(`${NY(WY.text)}|${AY}`) * IY.variationSemitones;
            const QY = Math.min(1, IY.variationSemitones);
            let EY = iY.glideSemitones,
              VY = 1;
            DY && (RY += IY.exclaimLiftSemitones, VY *= OY), rY && oY === mY && (RY += IY.questionRiseSemitones * (FY > 1 ? .5 + .5 * AY / (FY - 1) : 1), AY === FY - 1 && (EY = Math.abs(EY) + IY.questionRiseSemitones / 2)), YY && BY(WY.text) && (RY += aY * QY, VY *= gY), FY > 1 && 0 === AY && (RY += uY * QY, VY *= vY), KY.push({
              atMs: HY + AY * yY,
              semitones: RY,
              glideSemitones: EY,
              durationMs: AY < FY - 1 ? Math.min(iY.durationMs, yY * sY) : iY.durationMs,
              level: VY
            })
          }
          HY += FY * yY + (QY.test(WY.text) ? RY : EY.test(WY.text) ? IY : 0)
        }
      }
      return {
        pieces: mY.map((YY => "space" === YY.kind ? YY : "icon" === YY.kind ? {
          kind: "icon",
          icon: YY.text,
          delayMs: YY.delayMs
        } : {
          kind: "word",
          text: YY.text,
          delayMs: YY.delayMs
        })),
        blips: KY
      }
    }
    var KY = DY(1211),
      HY = DY(1256),
      zY = DY(1816);

    function ZY(YY) {
      if ("string" === typeof YY) return YY;
      const rY = HY.h.get().getCurrentLanguageCode();
      return (0, KY.u)(rY, YY.translationKey, (0, KY.r)(YY.params, zY.e.shown))
    }

    function CY(YY) {
      const rY = void 0 === YY.voice ? null : (0, FY.m)(YY.voice),
        DY = rY && (0, FY.l)(rY);
      return {
        plan: cY(ZY(YY.line), DY),
        synth: DY
      }
    }

    function fY(YY) {
      const rY = [];
      let DY = [];
      for (const [AY, IY] of YY.entries()) {
        var FY;
        "space" === IY.kind && (" " !== IY.text || "icon" !== (null === (FY = YY[AY + 1]) || void 0 === FY ? void 0 : FY.kind)) ? (DY.length > 0 && rY.push(DY), rY.push([IY]), DY = []) : DY.push(IY)
      }
      return DY.length > 0 && rY.push(DY), rY
    }
  },
  8111: (YY, rY, DY) => {
    DY.d(rY, {
      c: () => IY,
      f: () => AY
    });
    let FY = null;
    const AY = function(YY) {
        const rY = {
          cycle: YY,
          canCycle: arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : () => !0
        };
        return FY = rY, () => {
          FY === rY && (FY = null)
        }
      },
      IY = () => {
        var YY;
        return null !== (YY = FY) && void 0 !== YY && YY.canCycle() ? FY.cycle : null
      }
  },
  36034: (YY, rY, DY) => {
    DY.d(rY, {
      C: () => EY,
      e: () => IY,
      i: () => QY,
      l: () => oY,
      n: () => OY,
      r: () => sY,
      t: () => WY,
      v: () => uY,
      x: () => mY,
      y: () => yY
    });
    var FY = DY(19),
      AY = DY(25);
    const IY = "clientGameInventoryButtonsChanged",
      RY = new Map;

    function OY() {
      return [...RY.values()].sort(((YY, rY) => {
        var DY, FY;
        return (null !== (DY = YY.order) && void 0 !== DY ? DY : 0) - (null !== (FY = rY.order) && void 0 !== FY ? FY : 0)
      }))
    }
    let gY = null;

    function aY(YY) {
      gY = YY
    }
    let vY = !1;

    function uY(YY) {
      vY = !0;
      try {
        YY.onClick()
      } finally {
        vY = !1
      }
      YY.panel && "clientGame" === FY.b.get("openInGameMenuName") && aY(YY.id)
    }

    function sY() {
      return vY
    }

    function iY() {
      return OY().filter((YY => YY.panel && !YY.disabled))
    }

    function yY(YY) {
      const rY = iY(),
        DY = rY.findIndex((YY => YY.id === gY));
      return !(DY < 0 || rY.length < 2) && (uY(rY[(DY + YY + rY.length) % rY.length]), !0)
    }

    function QY() {
      return null !== gY && iY().length > 1
    }

    function oY() {
      aY(null)
    }

    function WY() {
      "inventory" !== FY.b.get("openInGameMenuName") && aY(null)
    }

    function EY() {
      const YY = gY;
      return aY(null), YY
    }

    function mY(YY) {
      return RY.set(YY.id, YY), AY.g.vo(IY, OY(), !0), () => {
        RY.get(YY.id) === YY && (RY.delete(YY.id), AY.g.vo(IY, OY()))
      }
    }
  },
  36032: (YY, rY, DY) => {
    DY.d(rY, {
      d: () => OY,
      f: () => oY,
      h: () => WY,
      j: () => sY,
      n: () => aY,
      o: () => QY,
      p: () => iY,
      q: () => vY
    });
    var FY = DY(19),
      AY = DY(25),
      IY = DY(1287),
      RY = DY(36034);
    const OY = "clientGameUiChanged";
    let gY = null;

    function aY() {
      return gY
    }

    function vY(YY, rY) {
      const DY = {
        content: YY,
        menu: rY
      };
      return gY = DY, AY.g.vo(OY, gY, !0), () => {
        gY === DY && (gY = null, yY = !1, oY(), AY.g.vo(OY, null))
      }
    }
    let uY = null;

    function sY() {
      return uY
    }

    function iY(YY) {
      return uY = YY, () => {
        uY === YY && (uY = null)
      }
    }
    let yY = !1;

    function QY() {
      const YY = FY.b.get("openInGameMenuName");
      "clientGame" !== YY && (yY = "inventory" === YY), (0, RY.r)() || (0, RY.l)(), (0, IY.k)(IY.d), FY.b.set({
        openInGameMenuName: "clientGame",
        openEverythingMenuName: null
      })
    }

    function oY() {
      EY(!1)
    }

    function WY() {
      EY(yY)
    }

    function EY(YY) {
      "clientGame" === FY.b.get("openInGameMenuName") && FY.b.set({
        openInGameMenuName: YY ? "inventory" : null
      }), YY || (0, RY.l)(), yY = !1
    }
  },
  37888: (YY, rY, DY) => {
    function FY(YY, rY, DY) {
      const FY = new Set,
        AY = new ResizeObserver(DY),
        IY = () => {
          const rY = new Set(document.querySelectorAll(YY));
          let IY = !1;
          for (const YY of FY) rY.has(YY) || (AY.unobserve(YY), FY.delete(YY), IY = !0);
          for (const YY of rY) FY.has(YY) || (AY.observe(YY), RY.observe(YY, {
            attributes: !0,
            attributeFilter: ["class", "style"]
          }), FY.add(YY));
          IY && DY()
        },
        RY = new MutationObserver((rY => {
          rY.some((YY => "attributes" === YY.type)) && DY(), rY.some((rY => function(YY, rY, DY) {
            if ("childList" !== YY.type) return !1;
            for (const FY of YY.addedNodes)
              if (FY instanceof Element && (FY.matches(rY) || FY.querySelector(rY))) return !0;
            for (const FY of YY.removedNodes)
              if (FY instanceof Element)
                for (const YY of DY)
                  if (FY.contains(YY)) return !0;
            return !1
          }(rY, YY, FY))) && IY()
        }));
      RY.observe(document.body, {
        childList: !0,
        subtree: !0
      });
      for (const OY of rY) AY.observe(OY);
      return window.addEventListener("resize", DY), IY(), DY(), () => {
        AY.disconnect(), RY.disconnect(), window.removeEventListener("resize", DY)
      }
    }
    DY.d(rY, {
      c: () => FY
    })
  },
  8287: (YY, rY, DY) => {
    DY.d(rY, {
      d: () => OY,
      f: () => gY
    });
    var FY = DY(19),
      AY = DY(1322),
      IY = DY(99);
    const RY = {
      blockMined: {
        pattern: [18],
        priority: 1,
        minGapMs: 120
      },
      hitLanded: {
        pattern: [20],
        priority: 2,
        minGapMs: 80
      },
      damageTaken: {
        pattern: [45],
        priority: 3,
        minGapMs: 250
      },
      fishBite: {
        pattern: null,
        priority: 3,
        minGapMs: 0
      },
      death: {
        pattern: [60, 70, 120],
        priority: 4,
        minGapMs: 0
      },
      lockReady: {
        pattern: [8],
        priority: 2,
        minGapMs: 0
      },
      lockLocked: {
        pattern: [15, 50, 15],
        priority: 2,
        minGapMs: 0
      },
      autorunLedgeStop: {
        pattern: [40],
        priority: 3,
        minGapMs: 0
      }
    };

    function OY() {
      return (0, IY.isMobile)() && "function" === typeof navigator.vibrate
    }
    const gY = new class {
      constructor(YY) {
        this.deps = YY, this.lastAt = new Map, this.lastAnyAt = -1 / 0, this.playingUntil = -1 / 0, this.playingPriority = 0
      }
      play(YY, rY) {
        var DY;
        if (!this.deps.enabled()) return;
        const FY = RY[YY],
          AY = null !== rY && void 0 !== rY ? rY : FY.pattern;
        if (null === AY) return void console.warn("No vibration pattern for", YY);
        const IY = this.deps.now();
        IY - this.lastAnyAt < 40 && FY.priority < this.playingPriority || IY - (null !== (DY = this.lastAt.get(YY)) && void 0 !== DY ? DY : -1 / 0) < FY.minGapMs || IY < this.playingUntil && FY.priority < this.playingPriority || (this.lastAt.set(YY, IY), this.lastAnyAt = IY, this.playingUntil = IY + AY.reduce(((YY, rY) => YY + rY), 0), this.playingPriority = FY.priority, this.deps.vibrate(AY))
      }
    }({
      vibrate: YY => {
        navigator.vibrate([...YY])
      },
      now: () => performance.now(),
      enabled: () => OY() && FY.b.get("isTouchScreen") && FY.b.get("clientEscMenuOptions").vibration && !(0, AY.d)()
    })
  },
  36896: (YY, rY, DY) => {
    DY.d(rY, {
      c: () => OY,
      f: () => RY
    });
    var FY = DY(36894),
      AY = DY(341),
      IY = DY(1774);

    function RY(YY) {
      if ("tF" in YY) return lY.createAnimationScript(YY);
      return new aY(YY).createAnimationScript()
    }

    function OY(YY, rY, DY, AY) {
      const IY = YY.tF <= 0 ? 1 : rY + DY * Math.max(0, AY) / YY.tF;
      return YY.YA === FY.l.LoopOnLastFrame ? IY % 1 : YY.YA === FY.l.NoLoop && IY >= 1 ? null : Math.min(1, IY)
    }
    class gY {
      createAnimationScript(YY) {
        const {
          tF: rY,
          loop: DY,
          rA: FY
        } = YY;
        return {
          tF: Math.round(rY),
          YA: this.createLoopMode(null !== DY && void 0 !== DY && DY),
          rA: this.createNodeSkeletonAnimationScript(null !== FY && void 0 !== FY ? FY : null)
        }
      }
      createLoopMode(YY) {
        switch (YY) {
          case !1:
            return FY.l.NoLoop;
          case !0:
            return FY.l.LoopOnLastFrame;
          case "hold-on-last-frame":
            return FY.l.HoldOnLastFrame
        }
        throw new Error(`Invalid loop mode schema: ${YY}`)
      }
      createNodeSkeletonAnimationScript(YY) {
        if (null === YY) return null;
        const rY = {};
        for (const DY in YY) {
          const FY = YY[DY];
          rY[DY] = this.createNodeAnimationScript(FY)
        }
        return rY
      }
      createNodeAnimationScript(YY) {
        const {
          timeline: rY
        } = YY, DY = rY.filter((YY => Number.isFinite(YY.timeFraction)));
        return DY.sort(((YY, rY) => YY.timeFraction - rY.timeFraction)), {
          rotation: this.createTimelineFromKeyframes(DY, "rotation", sY),
          position: this.createTimelineFromKeyframes(DY, "position", yY)
        }
      }
      createTimelineFromKeyframes(YY, rY, DY) {
        const FY = [];
        for (const gY of YY) {
          const YY = gY[rY];
          if (YY) {
            const rY = this.createAnimationFrameWithoutPrecomputes(gY.timeFraction, YY);
            vY(rY) && FY.push(rY)
          }
        }
        const AY = [];
        for (let gY = 0; gY < FY.length; gY++) {
          var IY, RY, OY;
          const YY = FY[gY],
            rY = null !== (IY = FY[gY - 1]) && void 0 !== IY ? IY : YY,
            aY = null !== (RY = FY[gY + 1]) && void 0 !== RY ? RY : YY,
            vY = null !== (OY = FY[gY + 2]) && void 0 !== OY ? OY : aY;
          AY.push({
            ...YY,
            ...DY(rY.post, rY.timeFraction, YY.post, YY.timeFraction, aY.pre, aY.timeFraction, vY.pre, vY.timeFraction)
          })
        }
        return AY
      }
      createAnimationFrameWithoutPrecomputes(YY, rY) {
        let DY, FY, AY = null;
        var IY;
        if ("object" === typeof rY && "point" in rY) AY = null !== (IY = rY.AA) && void 0 !== IY ? IY : null, DY = rY.point, FY = rY.point;
        else if ("object" === typeof rY && "pre" in rY) {
          var RY;
          AY = null !== (RY = rY.AA) && void 0 !== RY ? RY : null, DY = rY.pre, FY = rY.post
        } else DY = rY, FY = rY;
        return {
          timeFraction: YY,
          AA: this.createLerpMode(AY),
          pre: DY,
          post: FY
        }
      }
      createLerpMode(YY) {
        return null === YY ? FY.h.Linear : gY.LERP_MODE_SCHEMA_MAPPING[YY]
      }
    }
    gY.LERP_MODE_SCHEMA_MAPPING = {
      linear: FY.h.Linear,
      "catmull-rom-spline": FY.h.CatmullRomSpline
    };
    class aY {
      constructor(YY) {
        this.animationSchema = YY
      }
      createAnimationScript() {
        const {
          animation_length: YY,
          loop: rY,
          bones: DY
        } = this.animationSchema;
        return {
          tF: Math.round(1e3 * YY),
          YA: this.createLoopMode(null !== rY && void 0 !== rY && rY),
          rA: this.createNodeSkeletonAnimationScript(null !== DY && void 0 !== DY ? DY : null)
        }
      }
      createLoopMode(YY) {
        switch (YY) {
          case !1:
            return FY.l.NoLoop;
          case !0:
            return FY.l.LoopOnLastFrame;
          case "hold_on_last_frame":
            return FY.l.HoldOnLastFrame
        }
        throw new Error(`Invalid Blockbench loop mode schema: ${YY}`)
      }
      createNodeSkeletonAnimationScript(YY) {
        if (null === YY) return null;
        const rY = {};
        for (const DY in YY) {
          const FY = YY[DY];
          rY[DY] = this.createNodeAnimationScript(FY)
        }
        return rY
      }
      createNodeAnimationScript(YY) {
        const {
          rotation: rY,
          position: DY
        } = YY;
        return {
          rotation: this.createAnimationTimeline(null !== rY && void 0 !== rY ? rY : null, oY, sY, !0),
          position: this.createAnimationTimeline(null !== DY && void 0 !== DY ? DY : null, EY, yY, !1)
        }
      }
      createAnimationTimeline(YY, rY, DY, FY) {
        if (null === YY) return [];
        if (Array.isArray(YY)) {
          YY = {
            "0.0": YY
          }
        }
        const AY = Object.entries(YY).map((YY => {
          let [DY, FY] = YY;
          const AY = Number(DY) / this.animationSchema.animation_length;
          return this.createAnimationFrameWithoutPrecomputes(AY, FY, rY)
        })).filter(vY);
        AY.sort(((YY, rY) => YY.timeFraction - rY.timeFraction)), FY && function(YY) {
          for (let rY = 1; rY < YY.length; rY++) {
            const DY = YY[rY - 1].post,
              FY = YY[rY],
              AY = mY(FY.pre),
              IY = mY(FY.post),
              RY = SY(DY, FY.pre);
            SY(DY, AY) < RY && (YY[rY] = {
              ...FY,
              pre: AY,
              post: IY
            })
          }
        }(AY);
        const IY = [];
        for (let aY = 0; aY < AY.length; aY++) {
          var RY, OY, gY;
          const YY = AY[aY],
            rY = null !== (RY = AY[aY - 1]) && void 0 !== RY ? RY : YY,
            FY = null !== (OY = AY[aY + 1]) && void 0 !== OY ? OY : YY,
            vY = null !== (gY = AY[aY + 2]) && void 0 !== gY ? gY : FY;
          IY.push({
            ...YY,
            ...DY(rY.post, rY.timeFraction, YY.post, YY.timeFraction, FY.pre, FY.timeFraction, vY.pre, vY.timeFraction)
          })
        }
        return IY
      }
      createAnimationFrameWithoutPrecomputes(YY, rY, DY) {
        let FY, AY, IY = null;
        if ("object" === typeof rY && "post" in rY) {
          var RY;
          IY = null !== (RY = rY.lerp_mode) && void 0 !== RY ? RY : null, AY = QY(rY.post, DY), FY = rY.pre ? QY(rY.pre, DY) : AY
        } else {
          const YY = QY(rY, DY);
          AY = YY, FY = YY
        }
        return {
          timeFraction: YY,
          AA: this.createLerpMode(IY),
          pre: FY,
          post: AY
        }
      }
      createLerpMode(YY) {
        return null === YY ? FY.h.Linear : aY.LERP_MODE_SCHEMA_MAPPING[YY]
      }
    }

    function vY(YY) {
      return Number.isFinite(YY.timeFraction) && uY(YY.pre) && uY(YY.post)
    }

    function uY(YY) {
      return Number.isFinite(YY[0]) && Number.isFinite(YY[1]) && Number.isFinite(YY[2])
    }

    function sY(YY, rY, DY, FY, AY, IY, RY, OY) {
      const gY = IY - rY,
        aY = IY - FY,
        vY = OY - FY,
        uY = [null, null, null];
      for (let sY = 0; sY < uY.length; sY++) uY[sY] = iY(YY[sY], DY[sY], AY[sY], RY[sY], gY, vY);
      return {
        IA: aY,
        RA: uY
      }
    }

    function iY(YY, rY, DY, FY, IY, RY) {
      return {
        gA: AY.c.computeShortestRotation(YY, DY) / IY,
        aA: AY.c.computeShortestRotation(rY, FY) / RY,
        delta: AY.c.computeShortestRotation(rY, DY)
      }
    }

    function yY(YY, rY, DY, FY, AY, IY, RY, OY) {
      const gY = IY - rY,
        aY = IY - FY,
        vY = OY - FY,
        uY = [null, null, null];
      for (let sY = 0; sY < uY.length; sY++) uY[sY] = {
        gA: (AY[sY] - YY[sY]) / gY,
        aA: (RY[sY] - DY[sY]) / vY,
        delta: AY[sY] - DY[sY]
      };
      return {
        IA: aY,
        RA: uY
      }
    }

    function QY(YY, rY) {
      return null === rY ? YY : rY(YY)
    }

    function oY(YY) {
      const [rY, DY, FY] = YY, RY = -(0, IY.q)(rY), OY = -(0, IY.q)(DY), gY = (0, IY.q)(FY), aY = AY.c.quaternionFromEulerZYX(RY, OY, gY);
      return AY.c.eulerYXZFromQuaternion(aY)
    }
    aY.LERP_MODE_SCHEMA_MAPPING = {
      linear: FY.h.Linear,
      catmullrom: FY.h.CatmullRomSpline
    };
    const WY = 1 / 16;

    function EY(YY) {
      return [-YY[0] * WY, YY[1] * WY, YY[2] * WY]
    }

    function mY(YY) {
      const [rY, DY, FY] = YY;
      return [rY >= 0 ? Math.PI - rY : -Math.PI - rY, VY(DY + Math.PI), VY(FY + Math.PI)]
    }

    function VY(YY) {
      return AY.c.mod(YY + Math.PI, 2 * Math.PI) - Math.PI
    }

    function SY(YY, rY) {
      return Math.abs(AY.c.computeShortestRotation(YY[0], rY[0])) + Math.abs(AY.c.computeShortestRotation(YY[1], rY[1])) + Math.abs(AY.c.computeShortestRotation(YY[2], rY[2]))
    }
    const lY = new gY
  },
  36894: (YY, rY, DY) => {
    DY.d(rY, {
      c: () => RY,
      d: () => IY,
      h: () => FY,
      l: () => AY
    });
    let FY = function(YY) {
        return YY[YY.Linear = 0] = "Linear", YY[YY.CatmullRomSpline = 1] = "CatmullRomSpline", YY
      }({}),
      AY = function(YY) {
        return YY[YY.NoLoop = 0] = "NoLoop", YY[YY.LoopOnLastFrame = 1] = "LoopOnLastFrame", YY[YY.HoldOnLastFrame = 2] = "HoldOnLastFrame", YY
      }({}),
      IY = function(YY) {
        return YY[YY.Movement = 0] = "Movement", YY[YY.Action = 1] = "Action", YY[YY.Emote = 2] = "Emote", YY[YY.Custom = 3] = "Custom", YY
      }({}),
      RY = function(YY) {
        return YY[YY.Start = 0] = "Start", YY[YY.Stop = 1] = "Stop", YY
      }({})
  },
  4422: (YY, rY, DY) => {
    DY.d(rY, {
      b: () => AY,
      e: () => FY,
      i: () => IY,
      l: () => gY,
      m: () => RY
    });
    const FY = ["sine", "triangle", "square", "sawtooth"],
      AY = 55,
      IY = {
        soft: {
          waveform: "sine",
          pitchHz: 300,
          glideSemitones: -.5,
          durationMs: 80,
          attackMs: 6,
          releaseMs: 18,
          lowpassHz: null,
          volume: .6,
          intonation: {
            variationSemitones: 1.2,
            declineSemitones: 1.5,
            questionRiseSemitones: 3.5,
            exclaimLiftSemitones: 1.5
          },
          syllableMs: 60
        },
        regular: {
          waveform: "triangle",
          pitchHz: 195,
          glideSemitones: -.6,
          durationMs: 70,
          attackMs: 2,
          releaseMs: 12,
          lowpassHz: null,
          volume: 1,
          intonation: {
            variationSemitones: 1.5,
            declineSemitones: 2,
            questionRiseSemitones: 4,
            exclaimLiftSemitones: 2
          },
          syllableMs: 52
        },
        dark: {
          waveform: "sawtooth",
          pitchHz: 80,
          glideSemitones: -.6,
          durationMs: 85,
          attackMs: 6,
          releaseMs: 16,
          lowpassHz: 420,
          volume: 1.05,
          intonation: {
            variationSemitones: 1,
            declineSemitones: 3.5,
            questionRiseSemitones: 2.5,
            exclaimLiftSemitones: 1
          },
          syllableMs: 64
        },
        "high-pitched": {
          waveform: "triangle",
          pitchHz: 300,
          glideSemitones: -.8,
          durationMs: 55,
          attackMs: 2,
          releaseMs: 10,
          lowpassHz: null,
          volume: .8,
          intonation: {
            variationSemitones: 2.2,
            declineSemitones: 2,
            questionRiseSemitones: 5,
            exclaimLiftSemitones: 3
          },
          syllableMs: 44
        },
        gruff: {
          waveform: "sawtooth",
          pitchHz: 105,
          glideSemitones: -.8,
          durationMs: 75,
          attackMs: 4,
          releaseMs: 14,
          lowpassHz: 900,
          volume: .85,
          intonation: {
            variationSemitones: 1.2,
            declineSemitones: 3,
            questionRiseSemitones: 3,
            exclaimLiftSemitones: 2
          },
          syllableMs: 58
        },
        lively: {
          waveform: "square",
          pitchHz: 230,
          glideSemitones: .6,
          durationMs: 55,
          attackMs: 2,
          releaseMs: 10,
          lowpassHz: 2400,
          volume: .5,
          intonation: {
            variationSemitones: 2.6,
            declineSemitones: 1.5,
            questionRiseSemitones: 5,
            exclaimLiftSemitones: 3.5
          },
          syllableMs: 44
        },
        posh: {
          waveform: "triangle",
          pitchHz: 175,
          glideSemitones: 1.2,
          durationMs: 90,
          attackMs: 6,
          releaseMs: 20,
          lowpassHz: 2e3,
          volume: 1,
          intonation: {
            variationSemitones: 2,
            declineSemitones: 4,
            questionRiseSemitones: 5,
            exclaimLiftSemitones: 2.5
          },
          syllableMs: 60
        },
        mechanical: {
          waveform: "square",
          pitchHz: 140,
          glideSemitones: 0,
          durationMs: 60,
          attackMs: 0,
          releaseMs: 4,
          lowpassHz: 1400,
          volume: .55,
          intonation: {
            variationSemitones: 0,
            declineSemitones: 0,
            questionRiseSemitones: 0,
            exclaimLiftSemitones: 0
          },
          syllableMs: 62
        }
      };

    function RY(YY) {
      return "string" !== typeof YY ? YY : Object.hasOwn(IY, YY) ? IY[YY] : null
    }

    function OY(YY, rY, DY) {
      return Math.min(DY, Math.max(rY, YY))
    }

    function gY(YY) {
      const rY = OY(YY.durationMs, 10, 500),
        DY = OY(YY.attackMs, 0, rY),
        {
          intonation: AY
        } = YY;
      return {
        waveform: FY.includes(YY.waveform) ? YY.waveform : "sine",
        pitchHz: OY(YY.pitchHz, 20, 4e3),
        glideSemitones: OY(YY.glideSemitones, -24, 24),
        durationMs: rY,
        attackMs: DY,
        releaseMs: OY(YY.releaseMs, 0, rY - DY),
        lowpassHz: null === YY.lowpassHz ? null : OY(YY.lowpassHz, 20, 2e4),
        volume: OY(YY.volume, 0, 2),
        intonation: {
          variationSemitones: OY(AY.variationSemitones, 0, 6),
          declineSemitones: OY(AY.declineSemitones, 0, 12),
          questionRiseSemitones: OY(AY.questionRiseSemitones, 0, 12),
          exclaimLiftSemitones: OY(AY.exclaimLiftSemitones, 0, 12)
        },
        syllableMs: OY(YY.syllableMs, 25, 200)
      }
    }
  }
};
Object.freeze(modules);
for (const YY in modules) Object.freeze(modules[YY]);