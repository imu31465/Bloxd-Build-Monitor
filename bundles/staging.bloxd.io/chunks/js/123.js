export const id = 123;
export const ids = [123];
export const modules = {
  40312: (WW, iW, OW) => {
    OW.d(iW, {
      d: () => LW,
      f: () => NW
    });
    var mW = OW(2780);
    let EW = null;

    function NW(WW) {
      return null !== EW && WW === EW
    }

    function PW() {
      this.Qq = !1, this.stopPropagation = !1, this.xR = !1, this.disabled = !1
    }
    class LW {
      constructor(WW, iW) {
        this.version = "0.7.0";
        var OW = Object.assign({}, new PW, iW || {});
        this.element = WW || document, this.Qq = !!OW.Qq, this.stopPropagation = !!OW.stopPropagation, this.xR = !!OW.xR, this.disabled = !!OW.disabled, this.filterEvents = (WW, iW) => !0, this.ignoreEvent = WW => !1, this.down = new mW.EventEmitter, this.up = new mW.EventEmitter, this.state = {}, this.bR = {
          dx: 0,
          dy: 0,
          diW: 0,
          eiW: 0,
          viW: 0
        }, this.pressCount = {}, this.releaseCount = {}, this._keyBindmap = {}, this._keyStates = {}, this._bindPressCount = {}, this._touches = {
          lastX: 0,
          lastY: 0,
          currID: null
        }, "loading" !== document.readyState ? wW(this) : document.addEventListener("DOMContentLoaded", (WW => {
          wW(this)
        }), {
          once: !0
        })
      }
      bind(WW) {
        for (var iW = arguments.length, OW = new Array(iW > 1 ? iW - 1 : 0), mW = 1; mW < iW; mW++) OW[mW - 1] = arguments[mW];
        OW.forEach((iW => {
          var OW = this._keyBindmap[iW] || [];
          OW.includes(WW) || (OW.push(WW), this._keyBindmap[iW] = OW)
        })), this.state[WW] = !!this.state[WW], this.pressCount[WW] = this.pressCount[WW] || 0, this.releaseCount[WW] = this.releaseCount[WW] || 0
      }
      unbind(WW) {
        for (var iW in this._keyBindmap) {
          var OW = this._keyBindmap[iW],
            mW = OW.indexOf(WW);
          mW > -1 && OW.splice(mW, 1)
        }
      }
      getBindings() {
        var WW = {};
        for (var iW in this._keyBindmap) {
          this._keyBindmap[iW].forEach((OW => {
            WW[OW] = WW[OW] || [], WW[OW].push(iW)
          }))
        }
        return WW
      }
      hZ() {
        cW(this.bR), cW(this.pressCount), cW(this.releaseCount)
      }
    }

    function cW(WW) {
      for (var iW in WW) WW[iW] = 0
    }

    function wW(WW) {
      window.addEventListener("keydown", jW.bind(null, WW, !0), !1), window.addEventListener("keyup", jW.bind(null, WW, !1), !1);
      var iW = {
        passive: !0
      };
      WW.element.addEventListener("touchstart", lW.bind(void 0, WW), {
        passive: !1
      }), WW.element.addEventListener("touchend", bW.bind(void 0, WW), iW), WW.element.addEventListener("mousedown", UW.bind(null, WW, !0), iW), window.document.addEventListener("mouseup", UW.bind(null, WW, !1), iW), WW.element.addEventListener("touchmove", kW.bind(null, WW), iW), WW.element.addEventListener("mousemove", kW.bind(null, WW), iW), window.PointerEvent, WW.element.addEventListener("wheel", sW.bind(null, WW), iW), WW.element.addEventListener("contextmenu", MW.bind(null, WW), !1), window.addEventListener("blur", YW.bind(null, WW), !1)
    }
    var tW = 0,
      ZW = 0,
      xW = null;

    function lW(WW, iW) {
      iW.preventDefault(), AW(iW)
    }

    function AW(WW) {
      let iW = !1;
      for (let OW = 0; OW < WW.touches.length; ++OW)
        if (WW.touches[OW].identifier === xW) {
          iW = !0;
          break
        } if (!iW) {
        const iW = WW.changedTouches[0];
        tW = iW.clientX, ZW = iW.clientY, xW = iW.identifier
      }
    }

    function bW(WW, iW) {
      for (var OW = iW.changedTouches, mW = 0; mW < OW.length; ++mW) OW[mW].identifier === xW && (xW = null)
    }

    function jW(WW, iW, OW) {
      if (!WW.ignoreEvent(OW)) try {
        yW(WW, OW), iW && OW.isTrusted && !OW.repeat && WW._keyStates[OW.code] && TW(WW, OW.code)
      } finally {
        JW(OW.code, iW, WW, OW)
      }
    }

    function UW(WW, iW, OW) {
      if (!WW.ignoreEvent(OW)) try {
        yW(WW, OW)
      } finally {
        ! function(WW, iW, OW) {
          if ("pointerId" in OW)
            if (iW) {
              if (null !== WW._touches.currID) return;
              WW._touches.currID = OW.pointerId
            } else {
              if (WW._touches.currID !== OW.pointerId) return;
              WW._touches.currID = null
            } var mW = "button" in OW ? OW.button + 1 : 1;
          JW("Mouse" + mW, iW, WW, OW)
        }(WW, iW, OW)
      }
    }

    function kW(WW, iW) {
      var OW = iW.movementX || iW.mozMovementX || 0,
        mW = iW.movementY || iW.mozMovementY || 0;
      if (iW.touches && 0 === (OW | mW)) {
        var EW = function(WW) {
          AW(WW);
          for (let iW = 0; iW < WW.changedTouches.length; ++iW)
            if (WW.changedTouches[iW].identifier == xW) {
              const OW = WW.changedTouches[iW],
                mW = [OW.clientX - tW, OW.clientY - ZW];
              return tW = OW.clientX, ZW = OW.clientY, mW
            } return console.error(`Did not find touch id ${xW}`), [0, 0]
        }(iW);
        OW = EW[0], mW = EW[1]
      }
      WW.bR.dx += OW, WW.bR.dy += mW
    }

    function sW(WW, iW) {
      yW(WW, iW);
      var OW = 1;
      switch (iW.deltaMode) {
        case 0:
          OW = 1;
          break;
        case 1:
          OW = 12;
          break;
        case 2:
          OW = WW.element.clientHeight || window.innerHeight
      }
      WW.bR.diW += (iW.deltaX || 0) * OW, WW.bR.eiW += (iW.deltaY || 0) * OW, WW.bR.viW += (iW.deltaZ || 0) * OW
    }

    function MW(WW, iW) {
      if (!WW.xR) return iW.preventDefault(), !1
    }
    var KW = {
      AltLeft: "altKey",
      AltRight: "altKey",
      ControlLeft: "ctrlKey",
      ControlRight: "ctrlKey",
      ShiftLeft: "shiftKey",
      ShiftRight: "shiftKey",
      MetaLeft: "metaKey",
      MetaRight: "metaKey"
    };

    function SW(WW, iW) {
      return !!WW[KW[iW]] || ("AltRight" === iW || "ControlLeft" === iW) && "function" === typeof WW.getModifierState && !0 === WW.getModifierState("AltGraph")
    }

    function YW(WW, iW) {
      for (var OW in WW._modifiersHeldThroughBlur = {}, KW) WW._keyStates[OW] && (WW._modifiersHeldThroughBlur[OW] = !0);
      iW && iW.isTrusted && function() {
        try {
          return window.self !== window.top
        } catch (WW) {
          return !0
        }
      }() && (clearTimeout(WW._blurRelease), WW._blurRelease = setTimeout((function() {
        if (!document.hasFocus())
          for (var iW in WW._modifiersHeldThroughBlur = {}, WW._keyStates) WW._keyStates[iW] && !/^Mouse\d/.test(iW) && TW(WW, iW)
      }), 0))
    }

    function yW(WW, iW) {
      var OW = WW._modifiersHeldThroughBlur;
      if (OW && iW.isTrusted && document.hasFocus())
        for (var mW in OW) delete OW[mW], WW._keyStates[mW] && mW !== iW.code && (SW(iW, mW) || TW(WW, mW))
    }

    function TW(WW, iW) {
      const OW = {
          code: iW,
          preventDefault: () => {},
          stopPropagation: () => {}
        },
        mW = EW;
      EW = OW;
      try {
        JW(iW, !1, WW, OW)
      } finally {
        EW = mW
      }
    }

    function JW(WW, iW, OW, mW) {
      var EW = OW._keyBindmap[WW];
      EW && (hW(OW._keyStates[WW], iW) && (OW._keyStates[WW] = iW, EW.forEach((WW => {
        (!OW.filterEvents || OW.filterEvents(mW, WW)) && function(WW, iW, OW, mW) {
          var EW = iW ? OW.pressCount : OW.releaseCount;
          EW[WW] = (EW[WW] || 0) + 1;
          var NW = OW._bindPressCount[WW] || 0;
          (NW += iW ? 1 : -1) < 0 && (NW = 0);
          OW._bindPressCount[WW] = NW;
          var PW = OW.state[WW];
          if (hW(PW, NW)) {
            OW.state[WW] = NW > 0;
            var LW = iW ? OW.down : OW.up;
            OW.disabled || LW.emit(WW, mW)
          }
        }(WW, iW, OW, mW)
      }))), "button" in mW || (OW.Qq && !mW.defaultPrevented && mW.preventDefault(), OW.stopPropagation && mW.stopPropagation()))
    }

    function hW(WW, iW) {
      return WW ? !iW : iW
    }
  },
  37904: (WW, iW, OW) => {
    OW.d(iW, {
      e: () => bW,
      i: () => jW
    });
    var mW = OW(62),
      EW = OW(1526),
      NW = OW(2075),
      PW = OW(37902),
      LW = OW(643),
      cW = OW(1089),
      wW = OW.n(cW),
      tW = OW(1283);
    const ZW = [xW()];

    function xW() {
      return {
        source: null,
        direction: null,
        WC: null,
        timeout: void 0,
        writtenAngle: null
      }
    }

    function lW(WW) {
      return ZW.find((iW => null !== iW.source && iW.source === WW))
    }

    function AW(WW) {
      clearTimeout(WW.timeout), WW.source = null, WW.direction = null, WW.writtenAngle = null, WW.WC && (WW.WC.style.rotate = "")
    }
    const bW = (0, mW.memo)((function() {
      const [, WW] = (0, mW.useReducer)((WW => WW + 1), 0);
      return (0, EW.e)("damagedByOtherPlayer", (iW => {
        let {
          ME: OW,
          direction: mW
        } = iW;
        const EW = OW || "nonDirectional",
          NW = function(WW) {
            var iW;
            const OW = null !== (iW = lW(WW)) && void 0 !== iW ? iW : ZW.find((WW => null === WW.source));
            if (OW) return OW;
            const mW = {
              source: null,
              direction: null,
              WC: null,
              timeout: void 0,
              writtenAngle: null
            };
            return ZW.push(mW), mW
          }(EW);
        clearTimeout(NW.timeout), NW.source = EW, NW.direction = mW, NW.timeout = setTimeout((() => {
          AW(NW), WW()
        }), 800), WW()
      })), (0, NW.c)("kill", (iW => {
        let {
          killer: OW,
          victim: mW
        } = iW;
        const EW = OW.local && lW(mW.id);
        EW && (AW(EW), WW())
      })), (0, mW.useEffect)((() => {
        const WW = (0, PW.h)("turnDamageIndicators", jW);
        return () => {
          WW(), ZW.forEach(AW)
        }
      }), []), (0, tW.jsx)("div", {
        className: "DirectionalDamage",
        children: ZW.map(((WW, iW) => (0, tW.jsx)("div", {
          ref: iW => {
            WW.WC = iW
          },
          className: wW()("DamageIndicator", {
            DamageIndicatorFullCircle: (0, LW.K)(WW.direction),
            DamageIndicatorIdle: null === WW.source
          })
        }, iW)))
      })
    }));

    function jW(WW) {
      for (const iW of ZW) {
        if (null === iW.source || (0, LW.K)(iW.direction)) continue;
        const OW = iW.direction - WW;
        OW !== iW.writtenAngle && (iW.writtenAngle = OW, iW.WC.style.rotate = `${OW}rad`)
      }
    }
  },
  37909: (WW, iW, OW) => {
    OW.d(iW, {
      c: () => hW,
      g: () => TW
    });
    var mW = OW(62),
      EW = OW(25),
      NW = OW(37902),
      PW = OW(37915),
      LW = OW(37609),
      cW = OW(37763),
      wW = OW(2037),
      tW = OW(2075),
      ZW = OW(1283);
    const xW = 20 * Math.PI / 180,
      lW = new Map,
      AW = 25 * Math.PI / 180,
      bW = Array.from({
        length: 6
      }, (() => ({
        kind: null,
        direction: 0,
        shownAt: 0,
        WC: null,
        fade: null,
        timeout: void 0,
        writtenAngle: null,
        away: !1
      })));
    let jW = null,
      UW = null,
      kW = [];
    const sW = 2;

    function MW(WW) {
      const iW = "combat" === WW.kind || "explosion" === WW.kind,
        OW = null !== UW && null !== WW.writtenAngle && function(WW, iW, OW, mW) {
          const EW = iW.width / 3.8,
            NW = (mW ? .7 : .35) * EW + 1,
            PW = (mW ? .175 : .1) * EW + 1,
            LW = iW.width / 2 - PW,
            cW = Math.sin(WW),
            wW = Math.cos(WW),
            tW = iW.left + iW.width / 2 + cW * LW,
            ZW = iW.top + iW.height / 2 - wW * LW,
            xW = Math.abs(wW) * NW + Math.abs(cW) * PW,
            lW = Math.abs(cW) * NW + Math.abs(wW) * PW;
          return OW.some((WW => tW + xW > WW.left - sW && tW - xW < WW.right + sW && ZW + lW > WW.top - sW && ZW - lW < WW.bottom + sW))
        }(WW.writtenAngle, UW, kW, iW);
      OW !== WW.away && WW.WC && (WW.away = OW, WW.WC.classList.toggle("SoundCueAway", OW))
    }
    let KW = 0;

    function SW(WW) {
      var iW;
      clearTimeout(WW.timeout), null === (iW = WW.fade) || void 0 === iW || iW.cancel(), WW.fade = null, WW.kind = null, WW.writtenAngle = null, WW.away = !1, WW.WC && (WW.WC.className = "SoundCue SoundCueIdle", WW.WC.style.rotate = "")
    }

    function YW(WW, iW) {
      var OW, mW, EW;
      const NW = performance.now();
      if (Math.abs((0, PW.y)(KW, iW)) < xW || NW - (null !== (OW = lW.get(WW)) && void 0 !== OW ? OW : -1 / 0) < 250) return;
      lW.set(WW, NW), null === (mW = jW) || void 0 === mW || mW();
      const LW = function(WW, iW) {
          const OW = bW.find((OW => OW.kind === WW && Math.abs((0, PW.y)(OW.direction, iW)) < AW));
          if (OW) return OW;
          return bW.find((WW => null === WW.kind)) || bW.reduce(((WW, iW) => iW.shownAt < WW.shownAt ? iW : WW))
        }(WW, iW),
        cW = LW.WC;
      cW && (clearTimeout(LW.timeout), null === (EW = LW.fade) || void 0 === EW || EW.cancel(), LW.kind = WW, LW.direction = iW, LW.shownAt = NW, cW.className = `SoundCue SoundCue-${WW}`, LW.away = !1, yW(LW, KW), MW(LW), LW.fade = cW.animate([{
        opacity: 1
      }, {
        opacity: 1,
        offset: .5
      }, {
        opacity: 0
      }], {
        duration: 1200,
        fill: "forwards"
      }), LW.timeout = setTimeout((() => {
        SW(LW)
      }), 1200))
    }

    function yW(WW, iW) {
      const OW = WW.direction - iW;
      OW !== WW.writtenAngle && WW.WC && (WW.writtenAngle = OW, WW.WC.style.rotate = `${OW}rad`, MW(WW))
    }

    function TW(WW) {
      KW = WW;
      for (const iW of bW) null !== iW.kind && yW(iW, WW)
    }
    const JW = (0, mW.memo)((function() {
        const WW = (0, mW.useRef)(null);
        return (0, mW.useEffect)((() => {
          const iW = WW.current,
            OW = () => {
              const {
                anywhere: WW,
                boxes: OW
              } = (0, cW.b)();
              iW.classList.toggle("SoundDirectionsHidden", WW), UW = iW.getBoundingClientRect(), kW = OW;
              for (const iW of bW) MW(iW)
            };
          let mW = 0;
          const EW = () => {
            cancelAnimationFrame(mW), mW = requestAnimationFrame((() => {
              mW = requestAnimationFrame(OW)
            }))
          };
          OW(), jW = OW, window.addEventListener("resize", EW);
          const NW = (0, cW.f)(OW),
            PW = new ResizeObserver(OW);
          return PW.observe(iW), () => {
            PW.disconnect(), NW(), window.removeEventListener("resize", EW), cancelAnimationFrame(mW), jW = null, UW = null, kW = []
          }
        }), []), (0, mW.useEffect)((() => {
          const WW = (0, NW.h)("turnSoundCues", TW),
            iW = (0, LW.c)(YW);
          return () => {
            iW(), WW(), bW.forEach(SW), lW.clear()
          }
        }), []), (0, ZW.jsx)("div", {
          ref: WW,
          className: "SoundDirections",
          children: bW.map(((WW, iW) => (0, ZW.jsx)("div", {
            ref: iW => {
              WW.WC = iW
            },
            className: "SoundCue SoundCueIdle"
          }, iW)))
        })
      })),
      hW = (0, mW.memo)((function() {
        const {
          clientEscMenuOptions: WW
        } = (0, EW.p)(["clientEscMenuOptions"]);
        return WW.showSoundDirections ? (0, ZW.jsxs)(ZW.Fragment, {
          children: [(0, ZW.jsx)(JW, {}), (0, ZW.jsx)(HW, {})]
        }) : null
      })),
      HW = (0, mW.memo)((function() {
        const [WW, iW] = (0, mW.useState)((() => {
          var WW;
          return null === (WW = wW.gameBridge.latest("localPlayerAlive")) || void 0 === WW || WW
        }));
        return (0, tW.c)("localPlayerAliveSet", iW), (0, cW.c)(!WW), null
      }))
  },
  37763: (WW, iW, OW) => {
    OW.d(iW, {
      b: () => cW,
      c: () => LW,
      f: () => wW
    });
    var mW = OW(62);
    const EW = new Set,
      NW = new Set;

    function PW() {
      for (const WW of NW) WW()
    }

    function LW(WW) {
      let iW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
        OW = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
      (0, mW.useEffect)((() => WW ? function() {
        const WW = {
          element: arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null
        };
        return EW.add(WW), PW(), () => {
          EW.delete(WW) && PW()
        }
      }(iW) : void 0), [WW, iW]), (0, mW.useEffect)((() => {
        WW && PW()
      }), [WW, OW])
    }

    function cW() {
      const WW = [];
      for (const {
          element: OW
        }
        of EW) {
        var iW;
        if (null === OW) return {
          anywhere: !0,
          boxes: []
        };
        const mW = null === (iW = OW.current) || void 0 === iW ? void 0 : iW.getBoundingClientRect();
        mW && mW.width > 0 && WW.push(mW)
      }
      return {
        anywhere: !1,
        boxes: WW
      }
    }

    function wW(WW) {
      return NW.add(WW), () => {
        NW.delete(WW)
      }
    }
  },
  37735: (WW, iW, OW) => {
    OW.d(iW, {
      e: () => EW,
      g: () => NW
    });
    let mW = !1;

    function EW() {
      return mW
    }

    function NW(WW) {
      return mW !== WW && (mW = WW, !0)
    }
  },
  42192: (WW, iW, OW) => {
    OW.r(iW), OW.d(iW, {
      startPadGameplay: () => KW
    });
    OW(42060);
    var mW = OW(42067),
      EW = OW(2478),
      NW = OW(25),
      PW = OW(40274),
      LW = OW(2350),
      cW = OW(40298),
      wW = OW(27),
      tW = OW(2365),
      ZW = OW(39615),
      xW = OW(10079),
      lW = OW(42075);
    const AW = {
      yawRadPerSec: 0,
      pitchRadPerSec: 0
    };
    var bW = OW(42089),
      jW = OW(10053),
      UW = OW(40305);
    const kW = WW => WW.padSneakToggled || !!NW.d.get("clientEscMenuOptions").crouchIsToggle && WW.crouchToggled,
      sW = () => {
        const WW = (() => {
          const WW = (0, xW.d)();
          let iW = AW;
          const OW = new lW.b;
          let mW = !1,
            EW = 0;
          const NW = () => {
            const OW = performance.now(),
              NW = 0 === EW ? 0 : OW - EW;
            if (EW = OW, !mW) return WW.discardPending(), null;
            const PW = (0, lW.o)(iW, NW),
              LW = WW.drainLookDelta(),
              cW = (0, ZW.h)();
            return {
              jH: (PW.jH + LW.jH) * cW,
              UH: (PW.UH + LW.UH) * cW
            }
          };
          return {
            update: (WW, EW, PW, LW) => {
              WW.camera.vI !== NW && (WW.camera.vI = NW), mW = !0, iW = (0, lW.p)(OW, EW, PW, LW, performance.now())
            },
            release: () => {
              mW = !1, iW = AW, OW.reset()
            },
            uninstall: WW => {
              WW.camera.vI === NW && (WW.camera.vI = null)
            }
          }
        })();
        return {
          update: (iW, OW, mW) => {
            WW.update((0, tW.h)(), iW, OW, mW)
          },
          release: WW.release,
          uninstall: () => {
            const iW = (0, tW.h)();
            iW && WW.uninstall(iW)
          }
        }
      };
    var MW = OW(42086);
    OW(38866), OW(9966);
    OW(9976).e;
    const KW = () => {
      const WW = (0, MW.b)((() => {
          const WW = {
            x: 0,
            y: 0,
            magnitude: 0,
            headingOffset: 0,
            jumpHeld: !1,
            jumpPressedSinceTick: !1,
            crouchHeld: !1,
            running: !1,
            sprintHeld: !1
          };
          return {
            bodies: () => (0, PW.d)(),
            look: sW(),
            move: (iW, OW) => {
              const mW = (0, tW.h)(),
                EW = mW.EY.YOW();
              if (WW.x = iW.x, WW.y = iW.y, WW.magnitude = iW.magnitude, WW.headingOffset = iW.headingOffset, WW.jumpHeld = iW.jumpHeld, iW.jumpPressed && (WW.jumpPressedSinceTick = !0), WW.running = iW.running, WW.sprintHeld = iW.sprintHeld, OW) {
                const iW = (0, bW.f)({
                  ...OW,
                  descending: mW.EY.HiW(mW.Dv).shouldIgnoreCrouchingSpeedReduction(),
                  canCrouch: !!mW.gM.canCrouch,
                  toggled: kW(EW)
                });
                WW.crouchHeld = iW.crouchHeld, EW.padSneakToggled = iW.toggled, EW.crouchToggled = !1, (0, jW.g)(iW.toggled)
              }
              EW.gamepad = WW
            },
            stopMoving: () => {
              var iW;
              Object.assign(WW, {
                x: 0,
                y: 0,
                magnitude: 0,
                headingOffset: 0,
                jumpHeld: !1,
                jumpPressedSinceTick: !1,
                crouchHeld: !1,
                running: !1,
                sprintHeld: !1
              });
              const OW = null === (iW = (0, tW.h)()) || void 0 === iW ? void 0 : iW.EY.YOW();
              (null === OW || void 0 === OW ? void 0 : OW.gamepad) === WW && (OW.gamepad = null)
            },
            uninstall: () => {},
            deviceChanged: WW => {
              const iW = (0, tW.h)(),
                OW = null === iW || void 0 === iW ? void 0 : iW.EY.YOW();
              "touch" === WW ? ((0, jW.g)(!1), null !== OW && void 0 !== OW && OW.padSneakToggled && (OW.padSneakToggled = !1, OW.isTouchscreen && !OW.gamepad && iW.EY.aiW(iW.Dv).setCrouching(!!iW.gM.canCrouch && OW.touchCrouch))) : "gamepad" === WW && OW && (0, jW.g)(kW(OW))
            },
            hasPlayer: () => {
              var WW;
              return !(null === (WW = (0, tW.h)()) || void 0 === WW || !WW.Dv)
            },
            isPlayerDead: () => {
              var WW;
              const iW = (0, tW.h)();
              return !1 === (null === (WW = iW.EY.jOW(iW.Dv)) || void 0 === WW ? void 0 : WW.isAlive)
            },
            isReplayMode: () => {
              var WW, iW;
              return !(null === (WW = (0, tW.d)()) || void 0 === WW || null === (iW = WW.client) || void 0 === iW || !iW.isReplayMode())
            },
            isFreeCameraOn: () => {
              var WW, iW, OW;
              return !(null === (WW = (0, tW.d)()) || void 0 === WW || null === (iW = WW.client) || void 0 === iW || null === (OW = iW.freeCameraController) || void 0 === OW || !OW.isEnabled())
            },
            targetsBlock: () => !!(0, tW.h)().WiW,
            selectedSlotEmpty: () => {
              var WW;
              const iW = (0, tW.h)();
              return !(null !== (WW = iW.EY.ziW(iW.Dv)) && void 0 !== WW && WW.getItemAtSelectedSlot())
            },
            pickBlockAllowed: () => {
              const WW = (0, tW.h)().gM;
              return !!WW.creative && !!WW.canPickBlocks
            },
            zoomAllowed: () => !!(0, tW.h)().gM.canUseZoomKey,
            scrollHotbar: WW => {
              wW.l.iZ("ScrollInventorySlot", WW)
            },
            hasFullInventory: () => (0, cW.b)((0, tW.h)()),
            hasLobbyTab: () => (0, UW.d)((0, tW.h)().gM),
            contextActionInputs: () => {
              var WW, iW, OW, mW;
              const EW = (0, tW.h)();
              return {
                holdingGun: !(null === (WW = EW.EY.UOW(EW.Dv)) || void 0 === WW || null === (iW = WW.nS) || void 0 === iW || !iW.isGun()),
                customButtons: null !== (OW = EW.gM.customButtons) && void 0 !== OW ? OW : null,
                touchscreenActionButton: null !== (mW = EW.gM.touchscreenActionButton) && void 0 !== mW ? mW : null
              }
            },
            pressTouchButton: WW => {
              (0, LW.sendColyMessage)(EW.xj, WW)
            }
          }
        })()),
        iW = (0, mW.b)(),
        OW = null,
        NW = null;
      return () => {
        WW(), iW(), null === OW || void 0 === OW || OW(), null === NW || void 0 === NW || NW()
      }
    }
  },
  37915: (WW, iW, OW) => {
    OW.d(iW, {
      C: () => tW,
      d: () => mW,
      f: () => xW,
      g: () => ZW,
      k: () => PW,
      m: () => AW,
      q: () => cW,
      t: () => bW,
      w: () => wW,
      y: () => LW
    });
    const mW = Math.PI / 2 - .001,
      EW = 2 * Math.PI,
      NW = 1e-9;

    function PW(WW, iW) {
      iW.heading = WW.heading, iW.pitch = WW.pitch
    }

    function LW(WW, iW) {
      const OW = iW - WW;
      return OW - EW * Math.floor((OW + Math.PI) / EW)
    }

    function cW(WW, iW, OW) {
      return WW + LW(WW, iW) * OW
    }

    function wW(WW) {
      if (!Number.isFinite(WW)) return WW;
      const iW = WW - EW * Math.floor(WW / EW);
      return iW < EW ? iW : 0
    }

    function tW(WW, iW) {
      return WW + LW(WW, iW)
    }

    function ZW(WW) {
      return Math.max(-mW, Math.min(mW, WW))
    }

    function xW(WW, iW, OW) {
      const mW = Math.cos(iW);
      return OW[0] = mW * Math.sin(WW), OW[1] = -Math.sin(iW), OW[2] = mW * Math.cos(WW), OW
    }

    function lW(WW, iW, OW, mW) {
      const EW = Math.sqrt(WW * WW + OW * OW);
      return EW < NW && Math.abs(iW) < NW || (EW >= NW && (mW.heading = Math.atan2(WW, OW)), mW.pitch = ZW(Math.atan2(-iW, EW) + 0)), mW
    }

    function AW(WW, iW) {
      return lW(WW[0], WW[1], WW[2], iW)
    }

    function bW(WW, iW, OW) {
      return lW(iW[0] - WW[0], iW[1] - WW[1], iW[2] - WW[2], OW)
    }
  },
  37730: (WW, iW, OW) => {
    OW.d(iW, {
      b: () => cW
    });
    var mW = OW(327),
      EW = OW(25),
      NW = OW(37735),
      PW = OW(1729),
      LW = OW(2085);

    function cW(WW, iW) {
      var OW, cW, wW;
      if (!EW.d.get("isKeydownEnabled") || WW.repeat) return;
      const tW = WW.code;
      "Escape" === WW.key ? (0, PW.h)(WW) : null !== (OW = LW.v.OpenSettings) && void 0 !== OW && OW.includes(tW) ? (0, PW.s)(WW, mW.m.SETTINGS) : null !== (cW = LW.v.OpenCharacterCustomization) && void 0 !== cW && cW.includes(tW) ? (0, NW.e)() || (0, PW.s)(WW, mW.m.CUSTOMISATION, iW()) : null !== (wW = LW.v.ShowDebugOverlay) && void 0 !== wW && wW.includes(tW) && EW.d.set({
        showDebugOverlay: !EW.d.get("showDebugOverlay")
      })
    }
  },
  37709: (WW, iW, OW) => {
    OW.d(iW, {
      c: () => xW,
      d: () => tW,
      g: () => lW,
      j: () => ZW
    });
    var mW = OW(344),
      EW = OW(678),
      NW = OW(687),
      PW = OW(39);
    const LW = {
        idStorageKey: "playSessionId",
        lastActivityStorageKey: "playSessionLastActivityMs",
        expiryMs: 3e5
      },
      cW = "playSessionGameNameWithVariation",
      wW = "wasMatchmakePlayer";

    function tW() {
      let WW = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : PW.j;
      (0, NW.h)(WW, LW)
    }

    function ZW() {
      (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : PW.j).setItem(wW, !0)
    }

    function xW() {
      let WW = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : PW.j;
      return (0, NW.b)(WW, LW)
    }

    function lW(WW) {
      let iW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : PW.j;
      const OW = (0, NW.b)(iW, LW),
        tW = function(WW) {
          const iW = WW.getItem(cW);
          return "string" !== typeof iW ? null : iW
        }(iW),
        ZW = function() {
          return !0 === (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : PW.j).getItem(wW)
        }(iW);
      let xW;
      return xW = null !== OW && null !== tW && (0, NW.e)(iW, LW) && function(WW, iW, OW) {
          const EW = (0, mW.Tb)(WW),
            NW = (0, mW.Tb)(iW),
            PW = (0, mW.Lb)(WW),
            LW = (0, mW.Lb)(iW);
          return !(EW !== NW || !OW) || EW === NW && PW === LW
        }(tW, WW, ZW) ? OW : (0, EW.d)(), (0, NW.i)(iW, LW, xW), iW.setItem(cW, WW),
        function() {
          (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : PW.j).removeItem(wW)
        }(iW), xW
    }
  },
  37707: (WW, iW, OW) => {
    OW.d(iW, {
      c: () => KW,
      e: () => SW
    });
    var mW = OW(1052),
      EW = OW(192),
      NW = OW(339),
      PW = OW(649),
      LW = OW(344),
      cW = OW(1061),
      wW = OW(671),
      tW = OW(698),
      ZW = OW(5230),
      xW = OW(100),
      lW = OW(136),
      AW = OW(1856),
      bW = OW(117),
      jW = OW(37709),
      UW = OW(39),
      kW = OW(683),
      sW = OW(657),
      MW = OW(37711);

    function KW() {
      var WW, iW;
      return [...null !== (WW = navigator.languages) && void 0 !== WW ? WW : [null !== (iW = navigator.language) && void 0 !== iW ? iW : "none"], "EN-gb"]
    }

    function SW(WW, iW, OW, SW, YW) {
      const yW = (0, mW.i)(iW) ? (0, mW.n)(iW) : null,
        TW = WW.isLoggedIn() && void 0 !== (0, EW.c)(NW.k, lW.siteUsed) ? (0, sW.g)() : null,
        JW = {
          cookies: (0, AW.getAllCookiesForGameNameWithVariation)(iW),
          isMobile: (0, xW.isMobile)(),
          isUsingCustomGameTexturePack: null !== yW && YW(yW),
          generalCookies: {
            joinDiscord: !!UW.i.getItem("DiscordPressed"),
            newGo: ZW.c,
            ...WW.getMetricsCookies(),
            trafficCode: SW,
            compliance: xW.compliance
          },
          browserInfo: {
            ua: window.navigator.userAgent,
            name: (0, xW.getBrowserName)(),
            version: (0, xW.getBrowserVersion)(),
            platform: navigator.platform,
            platformType: (0, xW.getPlatformType)(),
            deviceType: (0, bW.d)()
          },
          isLoggedIn: WW.isLoggedIn(),
          lobbyName: OW,
          languages: KW(),
          version: PW.d,
          siteUsed: lW.siteUsed,
          subsiteUsed: lW.subsiteUsed,
          playSessionId: (0, jW.g)(iW),
          visitSessionId: (0, kW.getVisitSessionId)(),
          clientReason: wW.B.reason,
          budgetBasis: (0, MW.g)(),
          ...null !== tW.o && {
            diagClaim: tW.o.claimId
          },
          ...null !== TW && {
            webGpuLoss: TW
          }
        };
      return null !== yW && (0, LW.xc)(yW) ? (JW.lobbyName = (0, mW.f)(yW, (0, mW.m)(iW), OW), {
        roomName: `classic_${cW.e}`,
        joinOptions: JW
      }) : {
        roomName: iW,
        joinOptions: JW
      }
    }
  },
  5713: (WW, iW, OW) => {
    OW.d(iW, {
      d: () => NW,
      e: () => xW,
      i: () => cW,
      m: () => AW,
      o: () => wW,
      p: () => lW
    });
    var mW = OW(5721),
      EW = OW(5725);
    const NW = !1,
      PW = mW.h.map((WW => {
        const iW = [];
        for (let NW = 1; NW <= WW.reach; NW++) iW.push(EW.j[(0, mW.d)(WW.source, NW)].id);
        const OW = "water" === WW.family;
        return Object.freeze({
          name: WW.kind,
          family: WW.family,
          reach: WW.reach,
          stepTicks: OW ? 5 : 10,
          slopeDistance: OW ? 4 : 2,
          sourceId: EW.j[WW.source].id,
          fallingId: EW.j[(0, mW.b)(WW.source)].id,
          flowingIds: Object.freeze(iW),
          makesSources: OW,
          stillId: EW.j[WW.still].id
        })
      })),
      LW = new Map;
    for (const bW of PW) LW.set(bW.sourceId, Object.freeze({
      kind: bW,
      state: "source",
      distance: 0
    })), LW.set(bW.fallingId, Object.freeze({
      kind: bW,
      state: "falling",
      distance: 0
    })), bW.flowingIds.forEach(((WW, iW) => {
      LW.set(WW, Object.freeze({
        kind: bW,
        state: "flowing",
        distance: iW + 1
      }))
    }));

    function cW(WW) {
      return PW.find((iW => iW.name === WW))
    }

    function wW(WW) {
      return null === WW ? void 0 : LW.get(WW)
    }
    const tW = new Uint8Array(65536);
    for (const [bW, jW] of LW) tW[bW] = "source" === jW.state ? 1 : 2;
    const ZW = new Map;
    for (const bW of PW) ZW.set(bW.stillId, bW.family);

    function xW(WW) {
      var iW, OW;
      return null !== (iW = null === (OW = wW(WW)) || void 0 === OW ? void 0 : OW.kind.family) && void 0 !== iW ? iW : lW(WW)
    }

    function lW(WW) {
      var iW;
      return null === WW ? null : null !== (iW = ZW.get(WW)) && void 0 !== iW ? iW : null
    }
    EW.j.Obsidian.id, EW.j["Messy Stone"].id;

    function AW() {
      let WW = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : function() {
        let WW = 0;
        for (const iW of PW) WW = Math.max(WW, iW.stillId, iW.sourceId, iW.fallingId, ...iW.flowingIds);
        return WW
      }() + 1;
      const iW = new Uint8Array(WW);
      for (const OW of PW) {
        const mW = ("water" === OW.family ? 1 : 2) << 4;
        for (const EW of [OW.stillId, OW.sourceId, OW.fallingId, ...OW.flowingIds]) EW < WW && (iW[EW] = mW)
      }
      return iW
    }
  },
  40189: (WW, iW, OW) => {
    function mW(WW, iW, OW, mW, EW) {
      var NW = {};
      return Object.keys(mW).forEach((function(WW) {
        NW[WW] = mW[WW]
      })), NW.enumerable = !!NW.enumerable, NW.configurable = !!NW.configurable, ("value" in NW || NW.initializer) && (NW.writable = !0), NW = OW.slice().reverse().reduce((function(OW, mW) {
        return mW(WW, iW, OW) || OW
      }), NW), EW && void 0 !== NW.initializer && (NW.value = NW.initializer ? NW.initializer.call(EW) : void 0, NW.initializer = void 0), void 0 === NW.initializer && (Object.defineProperty(WW, iW, NW), NW = null), NW
    }
    OW.d(iW, {
      c: () => mW
    })
  },
  40181: (WW, iW, OW) => {
    function mW(WW, iW, OW, mW) {
      OW && Object.defineProperty(WW, iW, {
        enumerable: OW.enumerable,
        configurable: OW.configurable,
        writable: OW.writable,
        value: OW.initializer ? OW.initializer.call(mW) : void 0
      })
    }
    OW.d(iW, {
      e: () => mW
    })
  }
};
Object.freeze(modules);
for (const WW in modules) Object.freeze(modules[WW]);