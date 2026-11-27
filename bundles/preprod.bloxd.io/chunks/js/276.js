export const id = 276;
export const ids = [276];
export const modules = {
  40925: (WW, iW, OW) => {
    WW.exports = EW;
    var mW = OW(352);

    function EW(WW, iW) {
      if (!(this instanceof EW)) return new EW(WW, iW);
      var OW = mW.create();
      mW.add(OW, WW, iW), this.base = mW.min(mW.create(), WW, OW), this.vec = mW.clone(iW), this.max = mW.max(mW.create(), WW, OW), this.mag = mW.length(this.vec)
    }
    var NW = EW.prototype;
    NW.width = function() {
      return this.vec[0]
    }, NW.height = function() {
      return this.vec[1]
    }, NW.depth = function() {
      return this.vec[2]
    }, NW.x0 = function() {
      return this.base[0]
    }, NW.y0 = function() {
      return this.base[1]
    }, NW.z0 = function() {
      return this.base[2]
    }, NW.x1 = function() {
      return this.max[0]
    }, NW.y1 = function() {
      return this.max[1]
    }, NW.z1 = function() {
      return this.max[2]
    }, NW.translate = function(WW) {
      return mW.add(this.max, this.max, WW), mW.add(this.base, this.base, WW), this
    }, NW.setPosition = function(WW) {
      return mW.add(this.max, WW, this.vec), mW.copy(this.base, WW), this
    }, NW.expand = function(WW) {
      var iW = mW.create(),
        OW = mW.create();
      return mW.max(iW, WW.max, this.max), mW.min(OW, WW.base, this.base), mW.subtract(iW, iW, OW), new EW(OW, iW)
    }, NW.intersects = function(WW) {
      return !(WW.base[0] > this.max[0]) && (!(WW.base[1] > this.max[1]) && (!(WW.base[2] > this.max[2]) && (!(WW.max[0] < this.base[0]) && (!(WW.max[1] < this.base[1]) && !(WW.max[2] < this.base[2])))))
    }, NW.touches = function(WW) {
      var iW = this.union(WW);
      return null !== iW && (0 == iW.width() || 0 == iW.height() || 0 == iW.depth())
    }, NW.union = function(WW) {
      if (!this.intersects(WW)) return null;
      var iW = Math.max(WW.base[0], this.base[0]),
        OW = Math.max(WW.base[1], this.base[1]),
        mW = Math.max(WW.base[2], this.base[2]);
      return new EW([iW, OW, mW], [Math.min(WW.max[0], this.max[0]) - iW, Math.min(WW.max[1], this.max[1]) - OW, Math.min(WW.max[2], this.max[2]) - mW])
    }
  },
  40922: WW => {
    WW.exports = function(WW, iW, OW, mW, EW, NW) {
      var PW = +iW[0],
        LW = +iW[1],
        cW = +iW[2],
        wW = +OW[0],
        tW = +OW[1],
        ZW = +OW[2],
        xW = Math.sqrt(wW * wW + tW * tW + ZW * ZW);
      if (0 === xW) throw new Error("Can't raycast along a zero vector");
      return function(WW, iW, OW, mW, EW, NW, PW, LW, cW, wW) {
        for (var tW = 0, ZW = Math.floor, xW = 0 | ZW(iW), lW = 0 | ZW(OW), AW = 0 | ZW(mW), bW = EW > 0 ? 1 : -1, jW = NW > 0 ? 1 : -1, UW = PW > 0 ? 1 : -1, kW = Math.abs(1 / EW), sW = Math.abs(1 / NW), MW = Math.abs(1 / PW), KW = kW < 1 / 0 ? kW * (bW > 0 ? xW + 1 - iW : iW - xW) : 1 / 0, SW = sW < 1 / 0 ? sW * (jW > 0 ? lW + 1 - OW : OW - lW) : 1 / 0, YW = MW < 1 / 0 ? MW * (UW > 0 ? AW + 1 - mW : mW - AW) : 1 / 0, yW = -1; tW <= LW;) {
          var TW = WW(xW, lW, AW);
          if (TW) return cW && (cW[0] = iW + tW * EW, cW[1] = OW + tW * NW, cW[2] = mW + tW * PW), wW && (wW[0] = wW[1] = wW[2] = 0, 0 === yW && (wW[0] = -bW), 1 === yW && (wW[1] = -jW), 2 === yW && (wW[2] = -UW)), TW;
          KW < SW ? KW < YW ? (xW += bW, tW = KW, KW += kW, yW = 0) : (AW += UW, tW = YW, YW += MW, yW = 2) : SW < YW ? (lW += jW, tW = SW, SW += sW, yW = 1) : (AW += UW, tW = YW, YW += MW, yW = 2)
        }
        return cW && (cW[0] = iW + tW * EW, cW[1] = OW + tW * NW, cW[2] = mW + tW * PW), wW && (wW[0] = wW[1] = wW[2] = 0), 0
      }(WW, PW, LW, cW, wW /= xW, tW /= xW, ZW /= xW, mW = "undefined" === typeof mW ? 64 : +mW, EW, NW)
    }
  },
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
  40907: (WW, iW, OW) => {
    OW.d(iW, {
      d: () => mW
    });
    class mW {
      constructor() {
        let WW = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
          iW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 10;
        this.rV = !1, this.zV = !1, this.Fv = 30, this.XV = 0, this.mp = 100, this.PU = !1, this.fullscreen = !1, this.Hk = function(WW) {}, this.kp = function(WW, iW, OW) {}, this.uZ = function() {}, this.Lk = function() {}, this.Xp = function() {}, this.onFullscreenChanged = function() {}, this.onPointerLockError = function(WW) {}, this._data = new EW(iW),
          function(WW) {
            if ("loading" === document.readyState) {
              var iW = () => {
                document.removeEventListener("readystatechange", iW), WW()
              };
              document.addEventListener("readystatechange", iW)
            } else setTimeout(WW, 0)
          }((() => {
            ! function(WW) {
              var iW = WW._data,
                OW = iW.nowObject.now();
              iW.lastTickStarted = OW, iW.lastFrameStarted = OW, iW.lastRenderStarted = OW, iW.frameCB = () => function(WW) {
                var iW = WW._data;
                requestAnimationFrame(iW.frameCB), LW(WW);
                var OW = iW.nowObject.now(),
                  mW = OW - iW.lastFrameStarted;
                if (iW.lastFrameStarted = OW, WW.XV > 0) {
                  iW.renderAccum += mW;
                  var EW = 1e3 / WW.XV;
                  if (iW.renderAccum < EW) return;
                  iW.renderAccum -= EW, iW.renderAccum > EW && (iW.renderAccum = EW)
                }
                var NW = OW - iW.lastRenderStarted;
                iW.lastRenderStarted = OW;
                var PW = 1e3 / WW.Fv,
                  cW = (OW - iW.lastTickStarted) / PW;
                cW < 0 && (cW = 0);
                WW.kp(NW, cW, PW), setTimeout(LW, 0, WW, !0)
              }(WW), iW.intervalCB = () => LW(WW), requestAnimationFrame(iW.frameCB), iW.pollTime > 0 && (iW.intervalID = setInterval(iW.intervalCB, Math.max(iW.pollTime, 1e3 / WW.Fv / 2)))
            }(this),
            function(WW, iW) {
              if (!iW) return;
              var OW = !1,
                mW = !1,
                EW = WW => {
                  if (!!WW !== (OW = iW === document.pointerLockElement))
                    if (WW) {
                      var mW = iW.requestPointerLock();
                      mW && mW.catch && mW.catch((WW => {}))
                    } else document.exitPointerLock()
                },
                NW = WW => {
                  !!WW !== (mW = iW === document.fullscreenElement) && (WW ? iW.requestFullscreen ? iW.requestFullscreen() : iW.webkitRequestFullscreen && iW.webkitRequestFullscreen() : document.exitFullscreen ? document.exitFullscreen() : document.webkitExitFullscreen && document.webkitExitFullscreen())
                };
              document.addEventListener("pointerlockchange", (mW => {
                OW = iW === document.pointerLockElement, WW.Xp(OW)
              })), document.addEventListener("fullscreenchange", (OW => {
                mW = iW === document.fullscreenElement, WW.onFullscreenChanged(mW)
              })), document.addEventListener("pointerlockerror", (mW => {
                OW = iW === document.pointerLockElement, WW.onPointerLockError(mW)
              })), Object.defineProperty(WW, "PU", {
                get: () => OW,
                set: EW
              }), Object.defineProperty(WW, "fullscreen", {
                get: () => mW,
                set: NW
              }), iW.addEventListener("click", (iW => {
                WW.rV && EW(!0), WW.zV && NW(!0)
              }));
              var PW = () => WW.Lk();
              if (window.ResizeObserver) {
                new ResizeObserver(PW).observe(iW)
              } else window.addEventListener("resize", PW)
            }(this, WW), this.uZ()
          }))
      }
    }

    function EW() {
      let WW = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 10;
      this.nowObject = performance || Date, this.pollTime = WW, this.renderAccum = 0, this.lastTickStarted = 0, this.lastFrameStarted = 0, this.lastRenderStarted = 0, this.avgTickTime = 2, this.frameCB = null, this.intervalCB = null, this.intervalID = -1
    }
    var NW = 3,
      PW = 20;

    function LW(WW) {
      for (var iW = WW._data, OW = 1e3 / WW.Fv, mW = iW.nowObject.now() + PW, EW = 0; iW.nowObject.now() >= iW.lastTickStarted + OW && iW.nowObject.now() < mW && ++EW <= NW;) WW.Hk(OW), iW.lastTickStarted += OW;
      var LW = 5 * (OW + 5),
        cW = iW.nowObject.now();
      if (cW - iW.lastTickStarted > LW)
        for (; cW >= iW.lastTickStarted + OW;) iW.lastTickStarted += OW
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
  },
  39908: (WW, iW, OW) => {
    OW.d(iW, {
      c: () => NW
    });
    var mW = OW(39911);
    const EW = (WW, iW, OW) => WW ? WW.getClassName && "Mesh" === WW.getClassName() ? null : !WW.getClassName || "SubMesh" !== WW.getClassName() && "PhysicsBody" !== WW.getClassName() ? WW.clone ? WW.clone() : Array.isArray(WW) ? WW.slice() : OW && "object" === typeof WW ? {
      ...WW
    } : null : WW.clone(iW) : null;
    class NW {
      static DeepCopy(WW, iW, OW, NW) {
        let PW = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
        const LW = function(WW) {
          const iW = [];
          do {
            const OW = Object.getOwnPropertyNames(WW);
            for (const WW of OW) - 1 === iW.indexOf(WW) && iW.push(WW)
          } while (WW = Object.getPrototypeOf(WW));
          return iW
        }(WW);
        for (const wW of LW) {
          if ("_" === wW[0] && (!NW || -1 === NW.indexOf(wW))) continue;
          if (wW.endsWith("Observable")) continue;
          if (OW && -1 !== OW.indexOf(wW)) continue;
          const LW = WW[wW],
            tW = typeof LW;
          if ("function" !== tW) try {
            if ("object" === tW)
              if (LW instanceof Uint8Array) iW[wW] = Uint8Array.from(LW);
              else if (LW instanceof Array) {
              if (iW[wW] = [], LW.length > 0)
                if ("object" == typeof LW[0])
                  for (let WW = 0; WW < LW.length; WW++) {
                    const OW = EW(LW[WW], iW, PW); - 1 === iW[wW].indexOf(OW) && iW[wW].push(OW)
                  } else iW[wW] = LW.slice(0)
            } else iW[wW] = EW(LW, iW, PW);
            else iW[wW] = LW
          } catch (cW) {
            mW.b.Warn(cW.message)
          }
        }
      }
    }
  },
  39938: (WW, iW, OW) => {
    OW.d(iW, {
      d: () => EW,
      g: () => NW,
      i: () => PW,
      m: () => LW
    });
    var mW = OW(38372);
    class EW {
      constructor(WW, iW, OW) {
        this.gradient = WW, this.color1 = iW, this.color2 = OW
      }
      getColorToRef(WW) {
        this.color2 ? mW.d.LerpToRef(this.color1, this.color2, Math.random(), WW) : WW.HJ(this.color1)
      }
    }
    class NW {
      constructor(WW, iW) {
        this.gradient = WW, this.color = iW
      }
    }
    class PW {
      constructor(WW, iW, OW) {
        this.gradient = WW, this.factor1 = iW, this.factor2 = OW
      }
      getFactor() {
        return void 0 === this.factor2 || this.factor2 === this.factor1 ? this.factor1 : this.factor1 + (this.factor2 - this.factor1) * Math.random()
      }
    }
    class LW {
      static GetCurrentGradient(WW, iW, OW) {
        if (iW[0].gradient > WW) return void OW(iW[0], iW[0], 1);
        for (let EW = 0; EW < iW.length - 1; EW++) {
          const mW = iW[EW],
            NW = iW[EW + 1];
          if (WW >= mW.gradient && WW <= NW.gradient) {
            return void OW(mW, NW, (WW - mW.gradient) / (NW.gradient - mW.gradient))
          }
        }
        const mW = iW.length - 1;
        OW(iW[mW], iW[mW], 1)
      }
    }
  },
  39911: (WW, iW, OW) => {
    OW.d(iW, {
      b: () => mW
    });
    class mW {
      static _CheckLimit(WW, iW) {
        let OW = mW._LogLimitOutputs[WW];
        return OW ? OW.current++ : (OW = {
          limit: iW,
          current: 1
        }, mW._LogLimitOutputs[WW] = OW), OW.current <= OW.limit
      }
      static _GenerateLimitMessage(WW) {
        let iW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
        const OW = mW._LogLimitOutputs[WW];
        if (!OW || !mW.MessageLimitReached) return;
        const EW = this._Levels[iW];
        OW.current === OW.limit && mW[EW.name](mW.MessageLimitReached.replace(/%LIMIT%/g, "" + OW.limit).replace(/%TYPE%/g, EW.name ?? ""))
      }
      static _AddLogEntry(WW) {
        mW._LogCache = WW + mW._LogCache, mW.OnNewCacheEntry && mW.OnNewCacheEntry(WW)
      }
      static _FormatMessage(WW) {
        const iW = WW => WW < 10 ? "0" + WW : "" + WW,
          OW = new Date;
        return "[" + iW(OW.getHours()) + ":" + iW(OW.getMinutes()) + ":" + iW(OW.getSeconds()) + "]: " + WW
      }
      static _LogDisabled(WW, iW) {}
      static _LogEnabled() {
        let WW = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
          iW = arguments.length > 1 ? arguments[1] : void 0,
          OW = arguments.length > 2 ? arguments[2] : void 0;
        const EW = Array.isArray(iW) ? iW[0] : iW;
        if (void 0 !== OW && !mW._CheckLimit(EW, OW)) return;
        const NW = mW._FormatMessage(EW),
          PW = this._Levels[WW],
          LW = Array.isArray(iW) ? iW.slice(1) : [];
        PW.logFunc && PW.logFunc("BJS - " + NW, ...LW);
        const cW = `<div style='color:${PW.color}'>${NW}</div><br>`;
        mW._AddLogEntry(cW), mW._GenerateLimitMessage(EW, WW)
      }
      static get LogCache() {
        return mW._LogCache
      }
      static ClearLogCache() {
        mW._LogCache = "", mW._LogLimitOutputs = {}, mW.errorsCount = 0
      }
      static set LogLevels(WW) {
        mW.Log = mW._LogDisabled, mW.Warn = mW._LogDisabled, mW.Error = mW._LogDisabled;
        const iW = [mW.MessageLogLevel, mW.WarningLogLevel, mW.ErrorLogLevel];
        for (const OW of iW)
          if ((WW & OW) === OW) {
            const WW = this._Levels[OW];
            mW[WW.name] = mW._LogEnabled.bind(mW, OW)
          }
      }
    }
    mW.NoneLogLevel = 0, mW.MessageLogLevel = 1, mW.WarningLogLevel = 2, mW.ErrorLogLevel = 4, mW.AllLogLevel = 7, mW.MessageLimitReached = "Too many %TYPE%s (%LIMIT%), no more %TYPE%s will be reported for this message.", mW._LogCache = "", mW._LogLimitOutputs = {}, mW._Levels = [{}, {
      color: "white",
      logFunc: console.log,
      name: "Log"
    }, {
      color: "orange",
      logFunc: console.warn,
      name: "Warn"
    }, {}, {
      color: "red",
      logFunc: console.error,
      name: "Error"
    }], mW.errorsCount = 0, mW.Log = mW._LogEnabled.bind(mW, mW.MessageLogLevel), mW.Warn = mW._LogEnabled.bind(mW, mW.WarningLogLevel), mW.Error = mW._LogEnabled.bind(mW, mW.ErrorLogLevel)
  },
  39940: (WW, iW, OW) => {
    OW.d(iW, {
      d: () => PW
    });
    var mW = OW(38241),
      EW = OW(38285),
      NW = OW(39908);
    class PW {
      constructor() {
        this.direction1 = new mW.q(0, 1, 0), this.direction2 = new mW.q(0, 1, 0), this.minEmitBox = new mW.q(-.5, -.5, -.5), this.maxEmitBox = new mW.q(.5, .5, .5)
      }
      startDirectionFunction(WW, iW, OW, NW) {
        const PW = (0, EW.RandomRange)(this.direction1.x, this.direction2.x),
          LW = (0, EW.RandomRange)(this.direction1.y, this.direction2.y),
          cW = (0, EW.RandomRange)(this.direction1.z, this.direction2.z);
        if (NW) return iW.x = PW, iW.y = LW, void(iW.z = cW);
        mW.q.TransformNormalFromFloatsToRef(PW, LW, cW, WW, iW)
      }
      startPositionFunction(WW, iW, OW, NW) {
        const PW = (0, EW.RandomRange)(this.minEmitBox.x, this.maxEmitBox.x),
          LW = (0, EW.RandomRange)(this.minEmitBox.y, this.maxEmitBox.y),
          cW = (0, EW.RandomRange)(this.minEmitBox.z, this.maxEmitBox.z);
        if (NW) return iW.x = PW, iW.y = LW, void(iW.z = cW);
        mW.q.TransformCoordinatesFromFloatsToRef(PW, LW, cW, WW, iW)
      }
      clone() {
        const WW = new PW;
        return NW.c.DeepCopy(this, WW), WW
      }
      applyToShader(WW) {
        WW.setVector3("direction1", this.direction1), WW.setVector3("direction2", this.direction2), WW.setVector3("minEmitBox", this.minEmitBox), WW.setVector3("maxEmitBox", this.maxEmitBox)
      }
      buildUniformLayout(WW) {
        WW.addUniform("direction1", 3), WW.addUniform("direction2", 3), WW.addUniform("minEmitBox", 3), WW.addUniform("maxEmitBox", 3)
      }
      getEffectDefines() {
        return "#define BOXEMITTER"
      }
      getClassName() {
        return "BoxParticleEmitter"
      }
      serialize() {
        const WW = {};
        return WW.type = this.getClassName(), WW.direction1 = this.direction1.wEW(), WW.direction2 = this.direction2.wEW(), WW.minEmitBox = this.minEmitBox.wEW(), WW.maxEmitBox = this.maxEmitBox.wEW(), WW
      }
      parse(WW) {
        mW.q.FromArrayToRef(WW.direction1, 0, this.direction1), mW.q.FromArrayToRef(WW.direction2, 0, this.direction2), mW.q.FromArrayToRef(WW.minEmitBox, 0, this.minEmitBox), mW.q.FromArrayToRef(WW.maxEmitBox, 0, this.maxEmitBox)
      }
    }
  },
  39906: (WW, iW, OW) => {
    OW.d(iW, {
      e: () => LW,
      i: () => PW
    });
    var mW = OW(38241),
      EW = OW(38285),
      NW = OW(39908);
    class PW {
      constructor() {
        let WW = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
          iW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
          OW = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1,
          EW = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
        this.radius = WW, this.height = iW, this.radiusRange = OW, this.directionRandomizer = EW, this._tempVector = mW.q.Zero()
      }
      startDirectionFunction(WW, iW, OW, NW, PW) {
        OW.position.subtractToRef(WW.getTranslation(), this._tempVector), this._tempVector.normalize(), mW.q.TransformNormalToRef(this._tempVector, PW, this._tempVector);
        const LW = (0, EW.RandomRange)(-this.directionRandomizer / 2, this.directionRandomizer / 2);
        let cW = Math.atan2(this._tempVector.x, this._tempVector.z);
        cW += (0, EW.RandomRange)(-Math.PI / 2, Math.PI / 2) * this.directionRandomizer, this._tempVector.y = LW, this._tempVector.x = Math.sin(cW), this._tempVector.z = Math.cos(cW), this._tempVector.normalize(), NW ? iW.HJ(this._tempVector) : mW.q.TransformNormalFromFloatsToRef(this._tempVector.x, this._tempVector.y, this._tempVector.z, WW, iW)
      }
      startPositionFunction(WW, iW, OW, NW) {
        const PW = (0, EW.RandomRange)(-this.height / 2, this.height / 2),
          LW = (0, EW.RandomRange)(0, 2 * Math.PI),
          cW = (0, EW.RandomRange)((1 - this.radiusRange) * (1 - this.radiusRange), 1),
          wW = Math.sqrt(cW) * this.radius,
          tW = wW * Math.cos(LW),
          ZW = wW * Math.sin(LW);
        NW ? iW.yWW(tW, PW, ZW) : mW.q.TransformCoordinatesFromFloatsToRef(tW, PW, ZW, WW, iW)
      }
      clone() {
        const WW = new PW(this.radius, this.directionRandomizer);
        return NW.c.DeepCopy(this, WW), WW
      }
      applyToShader(WW) {
        WW.setFloat("radius", this.radius), WW.setFloat("height", this.height), WW.setFloat("radiusRange", this.radiusRange), WW.setFloat("directionRandomizer", this.directionRandomizer)
      }
      buildUniformLayout(WW) {
        WW.addUniform("radius", 1), WW.addUniform("height", 1), WW.addUniform("radiusRange", 1), WW.addUniform("directionRandomizer", 1)
      }
      getEffectDefines() {
        return "#define CYLINDEREMITTER"
      }
      getClassName() {
        return "CylinderParticleEmitter"
      }
      serialize() {
        const WW = {};
        return WW.type = this.getClassName(), WW.radius = this.radius, WW.height = this.height, WW.radiusRange = this.radiusRange, WW.directionRandomizer = this.directionRandomizer, WW
      }
      parse(WW) {
        this.radius = WW.radius, this.height = WW.height, this.radiusRange = WW.radiusRange, this.directionRandomizer = WW.directionRandomizer
      }
    }
    class LW extends PW {
      constructor() {
        let WW = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
          iW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
          OW = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1,
          EW = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : new mW.q(0, 1, 0),
          NW = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : new mW.q(0, 1, 0);
        super(WW, iW, OW), this.direction1 = EW, this.direction2 = NW
      }
      startDirectionFunction(WW, iW, OW, NW) {
        const PW = (0, EW.RandomRange)(this.direction1.x, this.direction2.x),
          LW = (0, EW.RandomRange)(this.direction1.y, this.direction2.y),
          cW = (0, EW.RandomRange)(this.direction1.z, this.direction2.z);
        NW ? iW.yWW(PW, LW, cW) : mW.q.TransformNormalFromFloatsToRef(PW, LW, cW, WW, iW)
      }
      clone() {
        const WW = new LW(this.radius, this.height, this.radiusRange, this.direction1, this.direction2);
        return NW.c.DeepCopy(this, WW), WW
      }
      applyToShader(WW) {
        WW.setFloat("radius", this.radius), WW.setFloat("height", this.height), WW.setFloat("radiusRange", this.radiusRange), WW.setVector3("direction1", this.direction1), WW.setVector3("direction2", this.direction2)
      }
      buildUniformLayout(WW) {
        WW.addUniform("radius", 1), WW.addUniform("height", 1), WW.addUniform("radiusRange", 1), WW.addUniform("direction1", 3), WW.addUniform("direction2", 3)
      }
      getEffectDefines() {
        return "#define CYLINDEREMITTER\n#define DIRECTEDCYLINDEREMITTER"
      }
      getClassName() {
        return "CylinderDirectedParticleEmitter"
      }
      serialize() {
        const WW = super.serialize();
        return WW.direction1 = this.direction1.wEW(), WW.direction2 = this.direction2.wEW(), WW
      }
      parse(WW) {
        super.parse(WW), mW.q.FromArrayToRef(WW.direction1, 0, this.direction1), mW.q.FromArrayToRef(WW.direction2, 0, this.direction2)
      }
    }
  },
  40009: (WW, iW, OW) => {
    OW.d(iW, {
      d: () => ZW
    });
    const mW = .5 * (Math.sqrt(3) - 1),
      EW = (3 - Math.sqrt(3)) / 6,
      NW = 1 / 3,
      PW = 1 / 6,
      LW = (Math.sqrt(5) - 1) / 4,
      cW = (5 - Math.sqrt(5)) / 20,
      wW = new Float32Array([1, 1, 0, -1, 1, 0, 1, -1, 0, -1, -1, 0, 1, 0, 1, -1, 0, 1, 1, 0, -1, -1, 0, -1, 0, 1, 1, 0, -1, 1, 0, 1, -1, 0, -1, -1]),
      tW = new Float32Array([0, 1, 1, 1, 0, 1, 1, -1, 0, 1, -1, 1, 0, 1, -1, -1, 0, -1, 1, 1, 0, -1, 1, -1, 0, -1, -1, 1, 0, -1, -1, -1, 1, 0, 1, 1, 1, 0, 1, -1, 1, 0, -1, 1, 1, 0, -1, -1, -1, 0, 1, 1, -1, 0, 1, -1, -1, 0, -1, 1, -1, 0, -1, -1, 1, 1, 0, 1, 1, 1, 0, -1, 1, -1, 0, 1, 1, -1, 0, -1, -1, 1, 0, 1, -1, 1, 0, -1, -1, -1, 0, 1, -1, -1, 0, -1, 1, 1, 1, 0, 1, 1, -1, 0, 1, -1, 1, 0, 1, -1, -1, 0, -1, 1, 1, 0, -1, 1, -1, 0, -1, -1, 1, 0, -1, -1, -1, 0]);
    const ZW = class {
      constructor() {
        let WW = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Math.random;
        const iW = "function" == typeof WW ? WW : function(WW) {
          let iW = 0,
            OW = 0,
            mW = 0,
            EW = 1;
          const NW = function() {
            let WW = 4022871197;
            return function(iW) {
              iW = iW.toString();
              for (let OW = 0; OW < iW.length; OW++) {
                WW += iW.charCodeAt(OW);
                let mW = .02519603282416938 * WW;
                WW = mW >>> 0, mW -= WW, mW *= WW, WW = mW >>> 0, mW -= WW, WW += 4294967296 * mW
              }
              return 2.3283064365386963e-10 * (WW >>> 0)
            }
          }();
          iW = NW(" "), OW = NW(" "), mW = NW(" "), iW -= NW(WW), iW < 0 && (iW += 1);
          OW -= NW(WW), OW < 0 && (OW += 1);
          mW -= NW(WW), mW < 0 && (mW += 1);
          return function() {
            const WW = 2091639 * iW + 2.3283064365386963e-10 * EW;
            return iW = OW, OW = mW, mW = WW - (EW = 0 | WW)
          }
        }(WW);
        this.p = function(WW) {
          const iW = new Uint8Array(256);
          for (let OW = 0; OW < 256; OW++) iW[OW] = OW;
          for (let OW = 0; OW < 255; OW++) {
            const mW = OW + ~~(WW() * (256 - OW)),
              EW = iW[OW];
            iW[OW] = iW[mW], iW[mW] = EW
          }
          return iW
        }(iW), this.perm = new Uint8Array(512), this.permMod12 = new Uint8Array(512);
        for (let OW = 0; OW < 512; OW++) this.perm[OW] = this.p[255 & OW], this.permMod12[OW] = this.perm[OW] % 12
      }
      noise2D(WW, iW) {
        const OW = this.permMod12,
          NW = this.perm;
        let PW = 0,
          LW = 0,
          cW = 0;
        const tW = (WW + iW) * mW,
          ZW = Math.floor(WW + tW),
          xW = Math.floor(iW + tW),
          lW = (ZW + xW) * EW,
          AW = WW - (ZW - lW),
          bW = iW - (xW - lW);
        let jW, UW;
        AW > bW ? (jW = 1, UW = 0) : (jW = 0, UW = 1);
        const kW = AW - jW + EW,
          sW = bW - UW + EW,
          MW = AW - 1 + 2 * EW,
          KW = bW - 1 + 2 * EW,
          SW = 255 & ZW,
          YW = 255 & xW;
        let yW = .5 - AW * AW - bW * bW;
        if (yW >= 0) {
          const WW = 3 * OW[SW + NW[YW]];
          yW *= yW, PW = yW * yW * (wW[WW] * AW + wW[WW + 1] * bW)
        }
        let TW = .5 - kW * kW - sW * sW;
        if (TW >= 0) {
          const WW = 3 * OW[SW + jW + NW[YW + UW]];
          TW *= TW, LW = TW * TW * (wW[WW] * kW + wW[WW + 1] * sW)
        }
        let JW = .5 - MW * MW - KW * KW;
        if (JW >= 0) {
          const WW = 3 * OW[SW + 1 + NW[YW + 1]];
          JW *= JW, cW = JW * JW * (wW[WW] * MW + wW[WW + 1] * KW)
        }
        return 70 * (PW + LW + cW)
      }
      noise3D(WW, iW, OW) {
        const mW = this.permMod12,
          EW = this.perm;
        let LW, cW, tW, ZW;
        const xW = (WW + iW + OW) * NW,
          lW = Math.floor(WW + xW),
          AW = Math.floor(iW + xW),
          bW = Math.floor(OW + xW),
          jW = (lW + AW + bW) * PW,
          UW = WW - (lW - jW),
          kW = iW - (AW - jW),
          sW = OW - (bW - jW);
        let MW, KW, SW, YW, yW, TW;
        UW >= kW ? kW >= sW ? (MW = 1, KW = 0, SW = 0, YW = 1, yW = 1, TW = 0) : UW >= sW ? (MW = 1, KW = 0, SW = 0, YW = 1, yW = 0, TW = 1) : (MW = 0, KW = 0, SW = 1, YW = 1, yW = 0, TW = 1) : kW < sW ? (MW = 0, KW = 0, SW = 1, YW = 0, yW = 1, TW = 1) : UW < sW ? (MW = 0, KW = 1, SW = 0, YW = 0, yW = 1, TW = 1) : (MW = 0, KW = 1, SW = 0, YW = 1, yW = 1, TW = 0);
        const JW = UW - MW + PW,
          hW = kW - KW + PW,
          HW = sW - SW + PW,
          nW = UW - YW + 2 * PW,
          uW = kW - yW + 2 * PW,
          oW = sW - TW + 2 * PW,
          dW = UW - 1 + .5,
          eW = kW - 1 + .5,
          vW = sW - 1 + .5,
          gW = 255 & lW,
          DW = 255 & AW,
          VW = 255 & bW;
        let pW = .6 - UW * UW - kW * kW - sW * sW;
        if (pW < 0) LW = 0;
        else {
          const WW = 3 * mW[gW + EW[DW + EW[VW]]];
          pW *= pW, LW = pW * pW * (wW[WW] * UW + wW[WW + 1] * kW + wW[WW + 2] * sW)
        }
        let fW = .6 - JW * JW - hW * hW - HW * HW;
        if (fW < 0) cW = 0;
        else {
          const WW = 3 * mW[gW + MW + EW[DW + KW + EW[VW + SW]]];
          fW *= fW, cW = fW * fW * (wW[WW] * JW + wW[WW + 1] * hW + wW[WW + 2] * HW)
        }
        let CW = .6 - nW * nW - uW * uW - oW * oW;
        if (CW < 0) tW = 0;
        else {
          const WW = 3 * mW[gW + YW + EW[DW + yW + EW[VW + TW]]];
          CW *= CW, tW = CW * CW * (wW[WW] * nW + wW[WW + 1] * uW + wW[WW + 2] * oW)
        }
        let XW = .6 - dW * dW - eW * eW - vW * vW;
        if (XW < 0) ZW = 0;
        else {
          const WW = 3 * mW[gW + 1 + EW[DW + 1 + EW[VW + 1]]];
          XW *= XW, ZW = XW * XW * (wW[WW] * dW + wW[WW + 1] * eW + wW[WW + 2] * vW)
        }
        return 32 * (LW + cW + tW + ZW)
      }
      noise4D(WW, iW, OW, mW) {
        const EW = this.perm;
        let NW, PW, wW, ZW, xW;
        const lW = (WW + iW + OW + mW) * LW,
          AW = Math.floor(WW + lW),
          bW = Math.floor(iW + lW),
          jW = Math.floor(OW + lW),
          UW = Math.floor(mW + lW),
          kW = (AW + bW + jW + UW) * cW,
          sW = WW - (AW - kW),
          MW = iW - (bW - kW),
          KW = OW - (jW - kW),
          SW = mW - (UW - kW);
        let YW = 0,
          yW = 0,
          TW = 0,
          JW = 0;
        sW > MW ? YW++ : yW++, sW > KW ? YW++ : TW++, sW > SW ? YW++ : JW++, MW > KW ? yW++ : TW++, MW > SW ? yW++ : JW++, KW > SW ? TW++ : JW++;
        const hW = YW >= 3 ? 1 : 0,
          HW = yW >= 3 ? 1 : 0,
          nW = TW >= 3 ? 1 : 0,
          uW = JW >= 3 ? 1 : 0,
          oW = YW >= 2 ? 1 : 0,
          dW = yW >= 2 ? 1 : 0,
          eW = TW >= 2 ? 1 : 0,
          vW = JW >= 2 ? 1 : 0,
          gW = YW >= 1 ? 1 : 0,
          DW = yW >= 1 ? 1 : 0,
          VW = TW >= 1 ? 1 : 0,
          pW = JW >= 1 ? 1 : 0,
          fW = sW - hW + cW,
          CW = MW - HW + cW,
          XW = KW - nW + cW,
          BW = SW - uW + cW,
          qW = sW - oW + 2 * cW,
          RW = MW - dW + 2 * cW,
          GW = KW - eW + 2 * cW,
          IW = SW - vW + 2 * cW,
          aW = sW - gW + 3 * cW,
          rW = MW - DW + 3 * cW,
          zW = KW - VW + 3 * cW,
          FW = SW - pW + 3 * cW,
          QW = sW - 1 + 4 * cW,
          Wi = MW - 1 + 4 * cW,
          ii = KW - 1 + 4 * cW,
          Oi = SW - 1 + 4 * cW,
          mi = 255 & AW,
          Ei = 255 & bW,
          Ni = 255 & jW,
          Pi = 255 & UW;
        let Li = .6 - sW * sW - MW * MW - KW * KW - SW * SW;
        if (Li < 0) NW = 0;
        else {
          const WW = EW[mi + EW[Ei + EW[Ni + EW[Pi]]]] % 32 * 4;
          Li *= Li, NW = Li * Li * (tW[WW] * sW + tW[WW + 1] * MW + tW[WW + 2] * KW + tW[WW + 3] * SW)
        }
        let ci = .6 - fW * fW - CW * CW - XW * XW - BW * BW;
        if (ci < 0) PW = 0;
        else {
          const WW = EW[mi + hW + EW[Ei + HW + EW[Ni + nW + EW[Pi + uW]]]] % 32 * 4;
          ci *= ci, PW = ci * ci * (tW[WW] * fW + tW[WW + 1] * CW + tW[WW + 2] * XW + tW[WW + 3] * BW)
        }
        let wi = .6 - qW * qW - RW * RW - GW * GW - IW * IW;
        if (wi < 0) wW = 0;
        else {
          const WW = EW[mi + oW + EW[Ei + dW + EW[Ni + eW + EW[Pi + vW]]]] % 32 * 4;
          wi *= wi, wW = wi * wi * (tW[WW] * qW + tW[WW + 1] * RW + tW[WW + 2] * GW + tW[WW + 3] * IW)
        }
        let ti = .6 - aW * aW - rW * rW - zW * zW - FW * FW;
        if (ti < 0) ZW = 0;
        else {
          const WW = EW[mi + gW + EW[Ei + DW + EW[Ni + VW + EW[Pi + pW]]]] % 32 * 4;
          ti *= ti, ZW = ti * ti * (tW[WW] * aW + tW[WW + 1] * rW + tW[WW + 2] * zW + tW[WW + 3] * FW)
        }
        let Zi = .6 - QW * QW - Wi * Wi - ii * ii - Oi * Oi;
        if (Zi < 0) xW = 0;
        else {
          const WW = EW[mi + 1 + EW[Ei + 1 + EW[Ni + 1 + EW[Pi + 1]]]] % 32 * 4;
          Zi *= Zi, xW = Zi * Zi * (tW[WW] * QW + tW[WW + 1] * Wi + tW[WW + 2] * ii + tW[WW + 3] * Oi)
        }
        return 27 * (NW + PW + wW + ZW + xW)
      }
    }
  }
};
Object.freeze(modules);
for (const WW in modules) Object.freeze(modules[WW]);