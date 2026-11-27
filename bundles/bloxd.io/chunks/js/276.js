export const id = 276;
export const ids = [276];
export const modules = {
  40914: (RR, JR, GR) => {
    RR.exports = tR;
    var yR = GR(385);

    function tR(RR, JR) {
      if (!(this instanceof tR)) return new tR(RR, JR);
      var GR = yR.create();
      yR.add(GR, RR, JR), this.base = yR.min(yR.create(), RR, GR), this.vec = yR.clone(JR), this.max = yR.max(yR.create(), RR, GR), this.mag = yR.length(this.vec)
    }
    var uR = tR.prototype;
    uR.width = function() {
      return this.vec[0]
    }, uR.height = function() {
      return this.vec[1]
    }, uR.depth = function() {
      return this.vec[2]
    }, uR.x0 = function() {
      return this.base[0]
    }, uR.y0 = function() {
      return this.base[1]
    }, uR.z0 = function() {
      return this.base[2]
    }, uR.x1 = function() {
      return this.max[0]
    }, uR.y1 = function() {
      return this.max[1]
    }, uR.z1 = function() {
      return this.max[2]
    }, uR.translate = function(RR) {
      return yR.add(this.max, this.max, RR), yR.add(this.base, this.base, RR), this
    }, uR.setPosition = function(RR) {
      return yR.add(this.max, RR, this.vec), yR.copy(this.base, RR), this
    }, uR.expand = function(RR) {
      var JR = yR.create(),
        GR = yR.create();
      return yR.max(JR, RR.max, this.max), yR.min(GR, RR.base, this.base), yR.subtract(JR, JR, GR), new tR(GR, JR)
    }, uR.intersects = function(RR) {
      return !(RR.base[0] > this.max[0]) && (!(RR.base[1] > this.max[1]) && (!(RR.base[2] > this.max[2]) && (!(RR.max[0] < this.base[0]) && (!(RR.max[1] < this.base[1]) && !(RR.max[2] < this.base[2])))))
    }, uR.touches = function(RR) {
      var JR = this.union(RR);
      return null !== JR && (0 == JR.width() || 0 == JR.height() || 0 == JR.depth())
    }, uR.union = function(RR) {
      if (!this.intersects(RR)) return null;
      var JR = Math.max(RR.base[0], this.base[0]),
        GR = Math.max(RR.base[1], this.base[1]),
        yR = Math.max(RR.base[2], this.base[2]);
      return new tR([JR, GR, yR], [Math.min(RR.max[0], this.max[0]) - JR, Math.min(RR.max[1], this.max[1]) - GR, Math.min(RR.max[2], this.max[2]) - yR])
    }
  },
  40911: RR => {
    RR.exports = function(RR, JR, GR, yR, tR, uR) {
      var ZR = +JR[0],
        qR = +JR[1],
        iR = +JR[2],
        fR = +GR[0],
        VR = +GR[1],
        KR = +GR[2],
        wR = Math.sqrt(fR * fR + VR * VR + KR * KR);
      if (0 === wR) throw new Error("Can't raycast along a zero vector");
      return function(RR, JR, GR, yR, tR, uR, ZR, qR, iR, fR) {
        for (var VR = 0, KR = Math.floor, wR = 0 | KR(JR), rR = 0 | KR(GR), eR = 0 | KR(yR), aR = tR > 0 ? 1 : -1, LR = uR > 0 ? 1 : -1, nR = ZR > 0 ? 1 : -1, UR = Math.abs(1 / tR), WR = Math.abs(1 / uR), AR = Math.abs(1 / ZR), CR = UR < 1 / 0 ? UR * (aR > 0 ? wR + 1 - JR : JR - wR) : 1 / 0, XR = WR < 1 / 0 ? WR * (LR > 0 ? rR + 1 - GR : GR - rR) : 1 / 0, MR = AR < 1 / 0 ? AR * (nR > 0 ? eR + 1 - yR : yR - eR) : 1 / 0, BR = -1; VR <= qR;) {
          var lR = RR(wR, rR, eR);
          if (lR) return iR && (iR[0] = JR + VR * tR, iR[1] = GR + VR * uR, iR[2] = yR + VR * ZR), fR && (fR[0] = fR[1] = fR[2] = 0, 0 === BR && (fR[0] = -aR), 1 === BR && (fR[1] = -LR), 2 === BR && (fR[2] = -nR)), lR;
          CR < XR ? CR < MR ? (wR += aR, VR = CR, CR += UR, BR = 0) : (eR += nR, VR = MR, MR += AR, BR = 2) : XR < MR ? (rR += LR, VR = XR, XR += WR, BR = 1) : (eR += nR, VR = MR, MR += AR, BR = 2)
        }
        return iR && (iR[0] = JR + VR * tR, iR[1] = GR + VR * uR, iR[2] = yR + VR * ZR), fR && (fR[0] = fR[1] = fR[2] = 0), 0
      }(RR, ZR, qR, iR, fR /= wR, VR /= wR, KR /= wR, yR = "undefined" === typeof yR ? 64 : +yR, tR, uR)
    }
  },
  40362: (RR, JR, GR) => {
    GR.d(JR, {
      d: () => qR,
      h: () => uR
    });
    var yR = GR(2845);
    let tR = null;

    function uR(RR) {
      return null !== tR && RR === tR
    }

    function ZR() {
      this.sF = !1, this.stopPropagation = !1, this.qT = !1, this.disabled = !1
    }
    class qR {
      constructor(RR, JR) {
        this.version = "0.7.0";
        var GR = Object.assign({}, new ZR, JR || {});
        this.element = RR || document, this.sF = !!GR.sF, this.stopPropagation = !!GR.stopPropagation, this.qT = !!GR.qT, this.disabled = !!GR.disabled, this.filterEvents = (RR, JR) => !0, this.ignoreEvent = RR => !1, this.down = new yR.EventEmitter, this.up = new yR.EventEmitter, this.state = {}, this.wT = {
          dx: 0,
          dy: 0,
          WGR: 0,
          AGR: 0,
          CGR: 0
        }, this.pressCount = {}, this.releaseCount = {}, this._keyBindmap = {}, this._keyStates = {}, this._bindPressCount = {}, this._touches = {
          lastX: 0,
          lastY: 0,
          currID: null
        }, "loading" !== document.readyState ? fR(this) : document.addEventListener("DOMContentLoaded", (RR => {
          fR(this)
        }), {
          once: !0
        })
      }
      bind(RR) {
        for (var JR = arguments.length, GR = new Array(JR > 1 ? JR - 1 : 0), yR = 1; yR < JR; yR++) GR[yR - 1] = arguments[yR];
        GR.forEach((JR => {
          var GR = this._keyBindmap[JR] || [];
          GR.includes(RR) || (GR.push(RR), this._keyBindmap[JR] = GR)
        })), this.state[RR] = !!this.state[RR], this.pressCount[RR] = this.pressCount[RR] || 0, this.releaseCount[RR] = this.releaseCount[RR] || 0
      }
      unbind(RR) {
        for (var JR in this._keyBindmap) {
          var GR = this._keyBindmap[JR],
            yR = GR.indexOf(RR);
          yR > -1 && GR.splice(yR, 1)
        }
      }
      getBindings() {
        var RR = {};
        for (var JR in this._keyBindmap) {
          this._keyBindmap[JR].forEach((GR => {
            RR[GR] = RR[GR] || [], RR[GR].push(JR)
          }))
        }
        return RR
      }
      gK() {
        iR(this.wT), iR(this.pressCount), iR(this.releaseCount)
      }
    }

    function iR(RR) {
      for (var JR in RR) RR[JR] = 0
    }

    function fR(RR) {
      window.addEventListener("keydown", LR.bind(null, RR, !0), !1), window.addEventListener("keyup", LR.bind(null, RR, !1), !1);
      var JR = {
        passive: !0
      };
      RR.element.addEventListener("touchstart", rR.bind(void 0, RR), {
        passive: !1
      }), RR.element.addEventListener("touchend", aR.bind(void 0, RR), JR), RR.element.addEventListener("mousedown", nR.bind(null, RR, !0), JR), window.document.addEventListener("mouseup", nR.bind(null, RR, !1), JR), RR.element.addEventListener("touchmove", UR.bind(null, RR), JR), RR.element.addEventListener("mousemove", UR.bind(null, RR), JR), window.PointerEvent, RR.element.addEventListener("wheel", WR.bind(null, RR), JR), RR.element.addEventListener("contextmenu", AR.bind(null, RR), !1), window.addEventListener("blur", MR.bind(null, RR), !1)
    }
    var VR = 0,
      KR = 0,
      wR = null;

    function rR(RR, JR) {
      JR.preventDefault(), eR(JR)
    }

    function eR(RR) {
      let JR = !1;
      for (let GR = 0; GR < RR.touches.length; ++GR)
        if (RR.touches[GR].identifier === wR) {
          JR = !0;
          break
        } if (!JR) {
        const JR = RR.changedTouches[0];
        VR = JR.clientX, KR = JR.clientY, wR = JR.identifier
      }
    }

    function aR(RR, JR) {
      for (var GR = JR.changedTouches, yR = 0; yR < GR.length; ++yR) GR[yR].identifier === wR && (wR = null)
    }

    function LR(RR, JR, GR) {
      if (!RR.ignoreEvent(GR)) try {
        BR(RR, GR), JR && GR.isTrusted && !GR.repeat && RR._keyStates[GR.code] && lR(RR, GR.code)
      } finally {
        pR(GR.code, JR, RR, GR)
      }
    }

    function nR(RR, JR, GR) {
      if (!RR.ignoreEvent(GR)) try {
        BR(RR, GR)
      } finally {
        ! function(RR, JR, GR) {
          if ("pointerId" in GR)
            if (JR) {
              if (null !== RR._touches.currID) return;
              RR._touches.currID = GR.pointerId
            } else {
              if (RR._touches.currID !== GR.pointerId) return;
              RR._touches.currID = null
            } var yR = "button" in GR ? GR.button + 1 : 1;
          pR("Mouse" + yR, JR, RR, GR)
        }(RR, JR, GR)
      }
    }

    function UR(RR, JR) {
      var GR = JR.movementX || JR.mozMovementX || 0,
        yR = JR.movementY || JR.mozMovementY || 0;
      if (JR.touches && 0 === (GR | yR)) {
        var tR = function(RR) {
          eR(RR);
          for (let JR = 0; JR < RR.changedTouches.length; ++JR)
            if (RR.changedTouches[JR].identifier == wR) {
              const GR = RR.changedTouches[JR],
                yR = [GR.clientX - VR, GR.clientY - KR];
              return VR = GR.clientX, KR = GR.clientY, yR
            } return console.error(`Did not find touch id ${wR}`), [0, 0]
        }(JR);
        GR = tR[0], yR = tR[1]
      }
      RR.wT.dx += GR, RR.wT.dy += yR
    }

    function WR(RR, JR) {
      BR(RR, JR);
      var GR = 1;
      switch (JR.deltaMode) {
        case 0:
          GR = 1;
          break;
        case 1:
          GR = 12;
          break;
        case 2:
          GR = RR.element.clientHeight || window.innerHeight
      }
      RR.wT.WGR += (JR.deltaX || 0) * GR, RR.wT.AGR += (JR.deltaY || 0) * GR, RR.wT.CGR += (JR.deltaZ || 0) * GR
    }

    function AR(RR, JR) {
      if (!RR.qT) return JR.preventDefault(), !1
    }
    var CR = {
      AltLeft: "altKey",
      AltRight: "altKey",
      ControlLeft: "ctrlKey",
      ControlRight: "ctrlKey",
      ShiftLeft: "shiftKey",
      ShiftRight: "shiftKey",
      MetaLeft: "metaKey",
      MetaRight: "metaKey"
    };

    function XR(RR, JR) {
      return !!RR[CR[JR]] || ("AltRight" === JR || "ControlLeft" === JR) && "function" === typeof RR.getModifierState && !0 === RR.getModifierState("AltGraph")
    }

    function MR(RR, JR) {
      for (var GR in RR._modifiersHeldThroughBlur = {}, CR) RR._keyStates[GR] && (RR._modifiersHeldThroughBlur[GR] = !0);
      JR && JR.isTrusted && function() {
        try {
          return window.self !== window.top
        } catch (RR) {
          return !0
        }
      }() && (clearTimeout(RR._blurRelease), RR._blurRelease = setTimeout((function() {
        if (!document.hasFocus())
          for (var JR in RR._modifiersHeldThroughBlur = {}, RR._keyStates) RR._keyStates[JR] && !/^Mouse\d/.test(JR) && lR(RR, JR)
      }), 0))
    }

    function BR(RR, JR) {
      var GR = RR._modifiersHeldThroughBlur;
      if (GR && JR.isTrusted && document.hasFocus())
        for (var yR in GR) delete GR[yR], RR._keyStates[yR] && yR !== JR.code && (XR(JR, yR) || lR(RR, yR))
    }

    function lR(RR, JR) {
      const GR = {
          code: JR,
          preventDefault: () => {},
          stopPropagation: () => {}
        },
        yR = tR;
      tR = GR;
      try {
        pR(JR, !1, RR, GR)
      } finally {
        tR = yR
      }
    }

    function pR(RR, JR, GR, yR) {
      var tR = GR._keyBindmap[RR];
      tR && (gR(GR._keyStates[RR], JR) && (GR._keyStates[RR] = JR, tR.forEach((RR => {
        (!GR.filterEvents || GR.filterEvents(yR, RR)) && function(RR, JR, GR, yR) {
          var tR = JR ? GR.pressCount : GR.releaseCount;
          tR[RR] = (tR[RR] || 0) + 1;
          var uR = GR._bindPressCount[RR] || 0;
          (uR += JR ? 1 : -1) < 0 && (uR = 0);
          GR._bindPressCount[RR] = uR;
          var ZR = GR.state[RR];
          if (gR(ZR, uR)) {
            GR.state[RR] = uR > 0;
            var qR = JR ? GR.down : GR.up;
            GR.disabled || qR.emit(RR, yR)
          }
        }(RR, JR, GR, yR)
      }))), "button" in yR || (GR.sF && !yR.defaultPrevented && yR.preventDefault(), GR.stopPropagation && yR.stopPropagation()))
    }

    function gR(RR, JR) {
      return RR ? !JR : JR
    }
  },
  40904: (RR, JR, GR) => {
    GR.d(JR, {
      e: () => yR
    });
    class yR {
      constructor() {
        let RR = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
          JR = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 10;
        this.XE = !1, this.lE = !1, this.lH = 30, this.ZE = 0, this.pE = 100, this.un = !1, this.fullscreen = !1, this.UW = function(RR) {}, this.OE = function(RR, JR, GR) {}, this.xK = function() {}, this.iW = function() {}, this.kE = function() {}, this.onFullscreenChanged = function() {}, this.onPointerLockError = function(RR) {}, this._data = new tR(JR),
          function(RR) {
            if ("loading" === document.readyState) {
              var JR = () => {
                document.removeEventListener("readystatechange", JR), RR()
              };
              document.addEventListener("readystatechange", JR)
            } else setTimeout(RR, 0)
          }((() => {
            ! function(RR) {
              var JR = RR._data,
                GR = JR.nowObject.now();
              JR.lastTickStarted = GR, JR.lastFrameStarted = GR, JR.lastRenderStarted = GR, JR.frameCB = () => function(RR) {
                var JR = RR._data;
                requestAnimationFrame(JR.frameCB), qR(RR);
                var GR = JR.nowObject.now(),
                  yR = GR - JR.lastFrameStarted;
                if (JR.lastFrameStarted = GR, RR.ZE > 0) {
                  JR.renderAccum += yR;
                  var tR = 1e3 / RR.ZE;
                  if (JR.renderAccum < tR) return;
                  JR.renderAccum -= tR, JR.renderAccum > tR && (JR.renderAccum = tR)
                }
                var uR = GR - JR.lastRenderStarted;
                JR.lastRenderStarted = GR;
                var ZR = 1e3 / RR.lH,
                  iR = (GR - JR.lastTickStarted) / ZR;
                iR < 0 && (iR = 0);
                RR.OE(uR, iR, ZR), setTimeout(qR, 0, RR, !0)
              }(RR), JR.intervalCB = () => qR(RR), requestAnimationFrame(JR.frameCB), JR.pollTime > 0 && (JR.intervalID = setInterval(JR.intervalCB, Math.max(JR.pollTime, 1e3 / RR.lH / 2)))
            }(this),
            function(RR, JR) {
              if (!JR) return;
              var GR = !1,
                yR = !1,
                tR = RR => {
                  if (!!RR !== (GR = JR === document.pointerLockElement))
                    if (RR) {
                      var yR = JR.requestPointerLock();
                      yR && yR.catch && yR.catch((RR => {}))
                    } else document.exitPointerLock()
                },
                uR = RR => {
                  !!RR !== (yR = JR === document.fullscreenElement) && (RR ? JR.requestFullscreen ? JR.requestFullscreen() : JR.webkitRequestFullscreen && JR.webkitRequestFullscreen() : document.exitFullscreen ? document.exitFullscreen() : document.webkitExitFullscreen && document.webkitExitFullscreen())
                };
              document.addEventListener("pointerlockchange", (yR => {
                GR = JR === document.pointerLockElement, RR.kE(GR)
              })), document.addEventListener("fullscreenchange", (GR => {
                yR = JR === document.fullscreenElement, RR.onFullscreenChanged(yR)
              })), document.addEventListener("pointerlockerror", (yR => {
                GR = JR === document.pointerLockElement, RR.onPointerLockError(yR)
              })), Object.defineProperty(RR, "un", {
                get: () => GR,
                set: tR
              }), Object.defineProperty(RR, "fullscreen", {
                get: () => yR,
                set: uR
              }), JR.addEventListener("click", (JR => {
                RR.XE && tR(!0), RR.lE && uR(!0)
              }));
              var ZR = () => RR.iW();
              if (window.ResizeObserver) {
                new ResizeObserver(ZR).observe(JR)
              } else window.addEventListener("resize", ZR)
            }(this, RR), this.xK()
          }))
      }
    }

    function tR() {
      let RR = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 10;
      this.nowObject = performance || Date, this.pollTime = RR, this.renderAccum = 0, this.lastTickStarted = 0, this.lastFrameStarted = 0, this.lastRenderStarted = 0, this.avgTickTime = 2, this.frameCB = null, this.intervalCB = null, this.intervalID = -1
    }
    var uR = 3,
      ZR = 20;

    function qR(RR) {
      for (var JR = RR._data, GR = 1e3 / RR.lH, yR = JR.nowObject.now() + ZR, tR = 0; JR.nowObject.now() >= JR.lastTickStarted + GR && JR.nowObject.now() < yR && ++tR <= uR;) RR.UW(GR), JR.lastTickStarted += GR;
      var qR = 5 * (GR + 5),
        iR = JR.nowObject.now();
      if (iR - JR.lastTickStarted > qR)
        for (; iR >= JR.lastTickStarted + GR;) JR.lastTickStarted += GR
    }
  },
  40231: (RR, JR, GR) => {
    function yR(RR, JR, GR, yR, tR) {
      var uR = {};
      return Object.keys(yR).forEach((function(RR) {
        uR[RR] = yR[RR]
      })), uR.enumerable = !!uR.enumerable, uR.configurable = !!uR.configurable, ("value" in uR || uR.initializer) && (uR.writable = !0), uR = GR.slice().reverse().reduce((function(GR, yR) {
        return yR(RR, JR, GR) || GR
      }), uR), tR && void 0 !== uR.initializer && (uR.value = uR.initializer ? uR.initializer.call(tR) : void 0, uR.initializer = void 0), void 0 === uR.initializer && (Object.defineProperty(RR, JR, uR), uR = null), uR
    }
    GR.d(JR, {
      b: () => yR
    })
  },
  40223: (RR, JR, GR) => {
    function yR(RR, JR, GR, yR) {
      GR && Object.defineProperty(RR, JR, {
        enumerable: GR.enumerable,
        configurable: GR.configurable,
        writable: GR.writable,
        value: GR.initializer ? GR.initializer.call(yR) : void 0
      })
    }
    GR.d(JR, {
      b: () => yR
    })
  },
  39912: (RR, JR, GR) => {
    GR.d(JR, {
      b: () => uR
    });
    var yR = GR(39914);
    const tR = (RR, JR, GR) => RR ? RR.getClassName && "Mesh" === RR.getClassName() ? null : !RR.getClassName || "SubMesh" !== RR.getClassName() && "PhysicsBody" !== RR.getClassName() ? RR.clone ? RR.clone() : Array.isArray(RR) ? RR.slice() : GR && "object" === typeof RR ? {
      ...RR
    } : null : RR.clone(JR) : null;
    class uR {
      static DeepCopy(RR, JR, GR, uR) {
        let ZR = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
        const qR = function(RR) {
          const JR = [];
          do {
            const GR = Object.getOwnPropertyNames(RR);
            for (const RR of GR) - 1 === JR.indexOf(RR) && JR.push(RR)
          } while (RR = Object.getPrototypeOf(RR));
          return JR
        }(RR);
        for (const fR of qR) {
          if ("_" === fR[0] && (!uR || -1 === uR.indexOf(fR))) continue;
          if (fR.endsWith("Observable")) continue;
          if (GR && -1 !== GR.indexOf(fR)) continue;
          const qR = RR[fR],
            VR = typeof qR;
          if ("function" !== VR) try {
            if ("object" === VR)
              if (qR instanceof Uint8Array) JR[fR] = Uint8Array.from(qR);
              else if (qR instanceof Array) {
              if (JR[fR] = [], qR.length > 0)
                if ("object" == typeof qR[0])
                  for (let RR = 0; RR < qR.length; RR++) {
                    const GR = tR(qR[RR], JR, ZR); - 1 === JR[fR].indexOf(GR) && JR[fR].push(GR)
                  } else JR[fR] = qR.slice(0)
            } else JR[fR] = tR(qR, JR, ZR);
            else JR[fR] = qR
          } catch (iR) {
            yR.c.Warn(iR.message)
          }
        }
      }
    }
  },
  39941: (RR, JR, GR) => {
    GR.d(JR, {
      c: () => tR,
      g: () => uR,
      k: () => ZR,
      m: () => qR
    });
    var yR = GR(38331);
    class tR {
      constructor(RR, JR, GR) {
        this.gradient = RR, this.color1 = JR, this.color2 = GR
      }
      getColorToRef(RR) {
        this.color2 ? yR.e.LerpToRef(this.color1, this.color2, Math.random(), RR) : RR.vN(this.color1)
      }
    }
    class uR {
      constructor(RR, JR) {
        this.gradient = RR, this.color = JR
      }
    }
    class ZR {
      constructor(RR, JR, GR) {
        this.gradient = RR, this.factor1 = JR, this.factor2 = GR
      }
      getFactor() {
        return void 0 === this.factor2 || this.factor2 === this.factor1 ? this.factor1 : this.factor1 + (this.factor2 - this.factor1) * Math.random()
      }
    }
    class qR {
      static GetCurrentGradient(RR, JR, GR) {
        if (JR[0].gradient > RR) return void GR(JR[0], JR[0], 1);
        for (let tR = 0; tR < JR.length - 1; tR++) {
          const yR = JR[tR],
            uR = JR[tR + 1];
          if (RR >= yR.gradient && RR <= uR.gradient) {
            return void GR(yR, uR, (RR - yR.gradient) / (uR.gradient - yR.gradient))
          }
        }
        const yR = JR.length - 1;
        GR(JR[yR], JR[yR], 1)
      }
    }
  },
  39914: (RR, JR, GR) => {
    GR.d(JR, {
      c: () => yR
    });
    class yR {
      static _CheckLimit(RR, JR) {
        let GR = yR._LogLimitOutputs[RR];
        return GR ? GR.current++ : (GR = {
          limit: JR,
          current: 1
        }, yR._LogLimitOutputs[RR] = GR), GR.current <= GR.limit
      }
      static _GenerateLimitMessage(RR) {
        let JR = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
        const GR = yR._LogLimitOutputs[RR];
        if (!GR || !yR.MessageLimitReached) return;
        const tR = this._Levels[JR];
        GR.current === GR.limit && yR[tR.name](yR.MessageLimitReached.replace(/%LIMIT%/g, "" + GR.limit).replace(/%TYPE%/g, tR.name ?? ""))
      }
      static _AddLogEntry(RR) {
        yR._LogCache = RR + yR._LogCache, yR.OnNewCacheEntry && yR.OnNewCacheEntry(RR)
      }
      static _FormatMessage(RR) {
        const JR = RR => RR < 10 ? "0" + RR : "" + RR,
          GR = new Date;
        return "[" + JR(GR.getHours()) + ":" + JR(GR.getMinutes()) + ":" + JR(GR.getSeconds()) + "]: " + RR
      }
      static _LogDisabled(RR, JR) {}
      static _LogEnabled() {
        let RR = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
          JR = arguments.length > 1 ? arguments[1] : void 0,
          GR = arguments.length > 2 ? arguments[2] : void 0;
        const tR = Array.isArray(JR) ? JR[0] : JR;
        if (void 0 !== GR && !yR._CheckLimit(tR, GR)) return;
        const uR = yR._FormatMessage(tR),
          ZR = this._Levels[RR],
          qR = Array.isArray(JR) ? JR.slice(1) : [];
        ZR.logFunc && ZR.logFunc("BJS - " + uR, ...qR);
        const iR = `<div style='color:${ZR.color}'>${uR}</div><br>`;
        yR._AddLogEntry(iR), yR._GenerateLimitMessage(tR, RR)
      }
      static get LogCache() {
        return yR._LogCache
      }
      static ClearLogCache() {
        yR._LogCache = "", yR._LogLimitOutputs = {}, yR.errorsCount = 0
      }
      static set LogLevels(RR) {
        yR.Log = yR._LogDisabled, yR.Warn = yR._LogDisabled, yR.Error = yR._LogDisabled;
        const JR = [yR.MessageLogLevel, yR.WarningLogLevel, yR.ErrorLogLevel];
        for (const GR of JR)
          if ((RR & GR) === GR) {
            const RR = this._Levels[GR];
            yR[RR.name] = yR._LogEnabled.bind(yR, GR)
          }
      }
    }
    yR.NoneLogLevel = 0, yR.MessageLogLevel = 1, yR.WarningLogLevel = 2, yR.ErrorLogLevel = 4, yR.AllLogLevel = 7, yR.MessageLimitReached = "Too many %TYPE%s (%LIMIT%), no more %TYPE%s will be reported for this message.", yR._LogCache = "", yR._LogLimitOutputs = {}, yR._Levels = [{}, {
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
    }], yR.errorsCount = 0, yR.Log = yR._LogEnabled.bind(yR, yR.MessageLogLevel), yR.Warn = yR._LogEnabled.bind(yR, yR.WarningLogLevel), yR.Error = yR._LogEnabled.bind(yR, yR.ErrorLogLevel)
  },
  39943: (RR, JR, GR) => {
    GR.d(JR, {
      b: () => ZR
    });
    var yR = GR(38204),
      tR = GR(38239),
      uR = GR(39912);
    class ZR {
      constructor() {
        this.direction1 = new yR.r(0, 1, 0), this.direction2 = new yR.r(0, 1, 0), this.minEmitBox = new yR.r(-.5, -.5, -.5), this.maxEmitBox = new yR.r(.5, .5, .5)
      }
      startDirectionFunction(RR, JR, GR, uR) {
        const ZR = (0, tR.RandomRange)(this.direction1.x, this.direction2.x),
          qR = (0, tR.RandomRange)(this.direction1.y, this.direction2.y),
          iR = (0, tR.RandomRange)(this.direction1.z, this.direction2.z);
        if (uR) return JR.x = ZR, JR.y = qR, void(JR.z = iR);
        yR.r.TransformNormalFromFloatsToRef(ZR, qR, iR, RR, JR)
      }
      startPositionFunction(RR, JR, GR, uR) {
        const ZR = (0, tR.RandomRange)(this.minEmitBox.x, this.maxEmitBox.x),
          qR = (0, tR.RandomRange)(this.minEmitBox.y, this.maxEmitBox.y),
          iR = (0, tR.RandomRange)(this.minEmitBox.z, this.maxEmitBox.z);
        if (uR) return JR.x = ZR, JR.y = qR, void(JR.z = iR);
        yR.r.TransformCoordinatesFromFloatsToRef(ZR, qR, iR, RR, JR)
      }
      clone() {
        const RR = new ZR;
        return uR.b.DeepCopy(this, RR), RR
      }
      applyToShader(RR) {
        RR.setVector3("direction1", this.direction1), RR.setVector3("direction2", this.direction2), RR.setVector3("minEmitBox", this.minEmitBox), RR.setVector3("maxEmitBox", this.maxEmitBox)
      }
      buildUniformLayout(RR) {
        RR.addUniform("direction1", 3), RR.addUniform("direction2", 3), RR.addUniform("minEmitBox", 3), RR.addUniform("maxEmitBox", 3)
      }
      getEffectDefines() {
        return "#define BOXEMITTER"
      }
      getClassName() {
        return "BoxParticleEmitter"
      }
      serialize() {
        const RR = {};
        return RR.type = this.getClassName(), RR.direction1 = this.direction1.QtR(), RR.direction2 = this.direction2.QtR(), RR.minEmitBox = this.minEmitBox.QtR(), RR.maxEmitBox = this.maxEmitBox.QtR(), RR
      }
      parse(RR) {
        yR.r.FromArrayToRef(RR.direction1, 0, this.direction1), yR.r.FromArrayToRef(RR.direction2, 0, this.direction2), yR.r.FromArrayToRef(RR.minEmitBox, 0, this.minEmitBox), yR.r.FromArrayToRef(RR.maxEmitBox, 0, this.maxEmitBox)
      }
    }
  },
  39906: (RR, JR, GR) => {
    GR.d(JR, {
      e: () => qR,
      i: () => ZR
    });
    var yR = GR(38204),
      tR = GR(38239),
      uR = GR(39912);
    class ZR {
      constructor() {
        let RR = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
          JR = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
          GR = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1,
          tR = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
        this.radius = RR, this.height = JR, this.radiusRange = GR, this.directionRandomizer = tR, this._tempVector = yR.r.Zero()
      }
      startDirectionFunction(RR, JR, GR, uR, ZR) {
        GR.position.subtractToRef(RR.getTranslation(), this._tempVector), this._tempVector.normalize(), yR.r.TransformNormalToRef(this._tempVector, ZR, this._tempVector);
        const qR = (0, tR.RandomRange)(-this.directionRandomizer / 2, this.directionRandomizer / 2);
        let iR = Math.atan2(this._tempVector.x, this._tempVector.z);
        iR += (0, tR.RandomRange)(-Math.PI / 2, Math.PI / 2) * this.directionRandomizer, this._tempVector.y = qR, this._tempVector.x = Math.sin(iR), this._tempVector.z = Math.cos(iR), this._tempVector.normalize(), uR ? JR.vN(this._tempVector) : yR.r.TransformNormalFromFloatsToRef(this._tempVector.x, this._tempVector.y, this._tempVector.z, RR, JR)
      }
      startPositionFunction(RR, JR, GR, uR) {
        const ZR = (0, tR.RandomRange)(-this.height / 2, this.height / 2),
          qR = (0, tR.RandomRange)(0, 2 * Math.PI),
          iR = (0, tR.RandomRange)((1 - this.radiusRange) * (1 - this.radiusRange), 1),
          fR = Math.sqrt(iR) * this.radius,
          VR = fR * Math.cos(qR),
          KR = fR * Math.sin(qR);
        uR ? JR.VJR(VR, ZR, KR) : yR.r.TransformCoordinatesFromFloatsToRef(VR, ZR, KR, RR, JR)
      }
      clone() {
        const RR = new ZR(this.radius, this.directionRandomizer);
        return uR.b.DeepCopy(this, RR), RR
      }
      applyToShader(RR) {
        RR.setFloat("radius", this.radius), RR.setFloat("height", this.height), RR.setFloat("radiusRange", this.radiusRange), RR.setFloat("directionRandomizer", this.directionRandomizer)
      }
      buildUniformLayout(RR) {
        RR.addUniform("radius", 1), RR.addUniform("height", 1), RR.addUniform("radiusRange", 1), RR.addUniform("directionRandomizer", 1)
      }
      getEffectDefines() {
        return "#define CYLINDEREMITTER"
      }
      getClassName() {
        return "CylinderParticleEmitter"
      }
      serialize() {
        const RR = {};
        return RR.type = this.getClassName(), RR.radius = this.radius, RR.height = this.height, RR.radiusRange = this.radiusRange, RR.directionRandomizer = this.directionRandomizer, RR
      }
      parse(RR) {
        this.radius = RR.radius, this.height = RR.height, this.radiusRange = RR.radiusRange, this.directionRandomizer = RR.directionRandomizer
      }
    }
    class qR extends ZR {
      constructor() {
        let RR = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
          JR = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
          GR = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1,
          tR = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : new yR.r(0, 1, 0),
          uR = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : new yR.r(0, 1, 0);
        super(RR, JR, GR), this.direction1 = tR, this.direction2 = uR
      }
      startDirectionFunction(RR, JR, GR, uR) {
        const ZR = (0, tR.RandomRange)(this.direction1.x, this.direction2.x),
          qR = (0, tR.RandomRange)(this.direction1.y, this.direction2.y),
          iR = (0, tR.RandomRange)(this.direction1.z, this.direction2.z);
        uR ? JR.VJR(ZR, qR, iR) : yR.r.TransformNormalFromFloatsToRef(ZR, qR, iR, RR, JR)
      }
      clone() {
        const RR = new qR(this.radius, this.height, this.radiusRange, this.direction1, this.direction2);
        return uR.b.DeepCopy(this, RR), RR
      }
      applyToShader(RR) {
        RR.setFloat("radius", this.radius), RR.setFloat("height", this.height), RR.setFloat("radiusRange", this.radiusRange), RR.setVector3("direction1", this.direction1), RR.setVector3("direction2", this.direction2)
      }
      buildUniformLayout(RR) {
        RR.addUniform("radius", 1), RR.addUniform("height", 1), RR.addUniform("radiusRange", 1), RR.addUniform("direction1", 3), RR.addUniform("direction2", 3)
      }
      getEffectDefines() {
        return "#define CYLINDEREMITTER\n#define DIRECTEDCYLINDEREMITTER"
      }
      getClassName() {
        return "CylinderDirectedParticleEmitter"
      }
      serialize() {
        const RR = super.serialize();
        return RR.direction1 = this.direction1.QtR(), RR.direction2 = this.direction2.QtR(), RR
      }
      parse(RR) {
        super.parse(RR), yR.r.FromArrayToRef(RR.direction1, 0, this.direction1), yR.r.FromArrayToRef(RR.direction2, 0, this.direction2)
      }
    }
  },
  40027: (RR, JR, GR) => {
    GR.d(JR, {
      e: () => KR
    });
    const yR = .5 * (Math.sqrt(3) - 1),
      tR = (3 - Math.sqrt(3)) / 6,
      uR = 1 / 3,
      ZR = 1 / 6,
      qR = (Math.sqrt(5) - 1) / 4,
      iR = (5 - Math.sqrt(5)) / 20,
      fR = new Float32Array([1, 1, 0, -1, 1, 0, 1, -1, 0, -1, -1, 0, 1, 0, 1, -1, 0, 1, 1, 0, -1, -1, 0, -1, 0, 1, 1, 0, -1, 1, 0, 1, -1, 0, -1, -1]),
      VR = new Float32Array([0, 1, 1, 1, 0, 1, 1, -1, 0, 1, -1, 1, 0, 1, -1, -1, 0, -1, 1, 1, 0, -1, 1, -1, 0, -1, -1, 1, 0, -1, -1, -1, 1, 0, 1, 1, 1, 0, 1, -1, 1, 0, -1, 1, 1, 0, -1, -1, -1, 0, 1, 1, -1, 0, 1, -1, -1, 0, -1, 1, -1, 0, -1, -1, 1, 1, 0, 1, 1, 1, 0, -1, 1, -1, 0, 1, 1, -1, 0, -1, -1, 1, 0, 1, -1, 1, 0, -1, -1, -1, 0, 1, -1, -1, 0, -1, 1, 1, 1, 0, 1, 1, -1, 0, 1, -1, 1, 0, 1, -1, -1, 0, -1, 1, 1, 0, -1, 1, -1, 0, -1, -1, 1, 0, -1, -1, -1, 0]);
    const KR = class {
      constructor() {
        let RR = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Math.random;
        const JR = "function" == typeof RR ? RR : function(RR) {
          let JR = 0,
            GR = 0,
            yR = 0,
            tR = 1;
          const uR = function() {
            let RR = 4022871197;
            return function(JR) {
              JR = JR.toString();
              for (let GR = 0; GR < JR.length; GR++) {
                RR += JR.charCodeAt(GR);
                let yR = .02519603282416938 * RR;
                RR = yR >>> 0, yR -= RR, yR *= RR, RR = yR >>> 0, yR -= RR, RR += 4294967296 * yR
              }
              return 2.3283064365386963e-10 * (RR >>> 0)
            }
          }();
          JR = uR(" "), GR = uR(" "), yR = uR(" "), JR -= uR(RR), JR < 0 && (JR += 1);
          GR -= uR(RR), GR < 0 && (GR += 1);
          yR -= uR(RR), yR < 0 && (yR += 1);
          return function() {
            const RR = 2091639 * JR + 2.3283064365386963e-10 * tR;
            return JR = GR, GR = yR, yR = RR - (tR = 0 | RR)
          }
        }(RR);
        this.p = function(RR) {
          const JR = new Uint8Array(256);
          for (let GR = 0; GR < 256; GR++) JR[GR] = GR;
          for (let GR = 0; GR < 255; GR++) {
            const yR = GR + ~~(RR() * (256 - GR)),
              tR = JR[GR];
            JR[GR] = JR[yR], JR[yR] = tR
          }
          return JR
        }(JR), this.perm = new Uint8Array(512), this.permMod12 = new Uint8Array(512);
        for (let GR = 0; GR < 512; GR++) this.perm[GR] = this.p[255 & GR], this.permMod12[GR] = this.perm[GR] % 12
      }
      noise2D(RR, JR) {
        const GR = this.permMod12,
          uR = this.perm;
        let ZR = 0,
          qR = 0,
          iR = 0;
        const VR = (RR + JR) * yR,
          KR = Math.floor(RR + VR),
          wR = Math.floor(JR + VR),
          rR = (KR + wR) * tR,
          eR = RR - (KR - rR),
          aR = JR - (wR - rR);
        let LR, nR;
        eR > aR ? (LR = 1, nR = 0) : (LR = 0, nR = 1);
        const UR = eR - LR + tR,
          WR = aR - nR + tR,
          AR = eR - 1 + 2 * tR,
          CR = aR - 1 + 2 * tR,
          XR = 255 & KR,
          MR = 255 & wR;
        let BR = .5 - eR * eR - aR * aR;
        if (BR >= 0) {
          const RR = 3 * GR[XR + uR[MR]];
          BR *= BR, ZR = BR * BR * (fR[RR] * eR + fR[RR + 1] * aR)
        }
        let lR = .5 - UR * UR - WR * WR;
        if (lR >= 0) {
          const RR = 3 * GR[XR + LR + uR[MR + nR]];
          lR *= lR, qR = lR * lR * (fR[RR] * UR + fR[RR + 1] * WR)
        }
        let pR = .5 - AR * AR - CR * CR;
        if (pR >= 0) {
          const RR = 3 * GR[XR + 1 + uR[MR + 1]];
          pR *= pR, iR = pR * pR * (fR[RR] * AR + fR[RR + 1] * CR)
        }
        return 70 * (ZR + qR + iR)
      }
      noise3D(RR, JR, GR) {
        const yR = this.permMod12,
          tR = this.perm;
        let qR, iR, VR, KR;
        const wR = (RR + JR + GR) * uR,
          rR = Math.floor(RR + wR),
          eR = Math.floor(JR + wR),
          aR = Math.floor(GR + wR),
          LR = (rR + eR + aR) * ZR,
          nR = RR - (rR - LR),
          UR = JR - (eR - LR),
          WR = GR - (aR - LR);
        let AR, CR, XR, MR, BR, lR;
        nR >= UR ? UR >= WR ? (AR = 1, CR = 0, XR = 0, MR = 1, BR = 1, lR = 0) : nR >= WR ? (AR = 1, CR = 0, XR = 0, MR = 1, BR = 0, lR = 1) : (AR = 0, CR = 0, XR = 1, MR = 1, BR = 0, lR = 1) : UR < WR ? (AR = 0, CR = 0, XR = 1, MR = 0, BR = 1, lR = 1) : nR < WR ? (AR = 0, CR = 1, XR = 0, MR = 0, BR = 1, lR = 1) : (AR = 0, CR = 1, XR = 0, MR = 1, BR = 1, lR = 0);
        const pR = nR - AR + ZR,
          gR = UR - CR + ZR,
          bR = WR - XR + ZR,
          vR = nR - MR + 2 * ZR,
          OR = UR - BR + 2 * ZR,
          xR = WR - lR + 2 * ZR,
          NR = nR - 1 + .5,
          DR = UR - 1 + .5,
          HR = WR - 1 + .5,
          oR = 255 & rR,
          cR = 255 & eR,
          PR = 255 & aR;
        let IR = .6 - nR * nR - UR * UR - WR * WR;
        if (IR < 0) qR = 0;
        else {
          const RR = 3 * yR[oR + tR[cR + tR[PR]]];
          IR *= IR, qR = IR * IR * (fR[RR] * nR + fR[RR + 1] * UR + fR[RR + 2] * WR)
        }
        let mR = .6 - pR * pR - gR * gR - bR * bR;
        if (mR < 0) iR = 0;
        else {
          const RR = 3 * yR[oR + AR + tR[cR + CR + tR[PR + XR]]];
          mR *= mR, iR = mR * mR * (fR[RR] * pR + fR[RR + 1] * gR + fR[RR + 2] * bR)
        }
        let zR = .6 - vR * vR - OR * OR - xR * xR;
        if (zR < 0) VR = 0;
        else {
          const RR = 3 * yR[oR + MR + tR[cR + BR + tR[PR + lR]]];
          zR *= zR, VR = zR * zR * (fR[RR] * vR + fR[RR + 1] * OR + fR[RR + 2] * xR)
        }
        let SR = .6 - NR * NR - DR * DR - HR * HR;
        if (SR < 0) KR = 0;
        else {
          const RR = 3 * yR[oR + 1 + tR[cR + 1 + tR[PR + 1]]];
          SR *= SR, KR = SR * SR * (fR[RR] * NR + fR[RR + 1] * DR + fR[RR + 2] * HR)
        }
        return 32 * (qR + iR + VR + KR)
      }
      noise4D(RR, JR, GR, yR) {
        const tR = this.perm;
        let uR, ZR, fR, KR, wR;
        const rR = (RR + JR + GR + yR) * qR,
          eR = Math.floor(RR + rR),
          aR = Math.floor(JR + rR),
          LR = Math.floor(GR + rR),
          nR = Math.floor(yR + rR),
          UR = (eR + aR + LR + nR) * iR,
          WR = RR - (eR - UR),
          AR = JR - (aR - UR),
          CR = GR - (LR - UR),
          XR = yR - (nR - UR);
        let MR = 0,
          BR = 0,
          lR = 0,
          pR = 0;
        WR > AR ? MR++ : BR++, WR > CR ? MR++ : lR++, WR > XR ? MR++ : pR++, AR > CR ? BR++ : lR++, AR > XR ? BR++ : pR++, CR > XR ? lR++ : pR++;
        const gR = MR >= 3 ? 1 : 0,
          bR = BR >= 3 ? 1 : 0,
          vR = lR >= 3 ? 1 : 0,
          OR = pR >= 3 ? 1 : 0,
          xR = MR >= 2 ? 1 : 0,
          NR = BR >= 2 ? 1 : 0,
          DR = lR >= 2 ? 1 : 0,
          HR = pR >= 2 ? 1 : 0,
          oR = MR >= 1 ? 1 : 0,
          cR = BR >= 1 ? 1 : 0,
          PR = lR >= 1 ? 1 : 0,
          IR = pR >= 1 ? 1 : 0,
          mR = WR - gR + iR,
          zR = AR - bR + iR,
          SR = CR - vR + iR,
          jR = XR - OR + iR,
          dR = WR - xR + 2 * iR,
          ER = AR - NR + 2 * iR,
          YR = CR - DR + 2 * iR,
          kR = XR - HR + 2 * iR,
          QR = WR - oR + 3 * iR,
          FR = AR - cR + 3 * iR,
          TR = CR - PR + 3 * iR,
          sR = XR - IR + 3 * iR,
          hR = WR - 1 + 4 * iR,
          RJ = AR - 1 + 4 * iR,
          JJ = CR - 1 + 4 * iR,
          GJ = XR - 1 + 4 * iR,
          yJ = 255 & eR,
          tJ = 255 & aR,
          uJ = 255 & LR,
          ZJ = 255 & nR;
        let qJ = .6 - WR * WR - AR * AR - CR * CR - XR * XR;
        if (qJ < 0) uR = 0;
        else {
          const RR = tR[yJ + tR[tJ + tR[uJ + tR[ZJ]]]] % 32 * 4;
          qJ *= qJ, uR = qJ * qJ * (VR[RR] * WR + VR[RR + 1] * AR + VR[RR + 2] * CR + VR[RR + 3] * XR)
        }
        let iJ = .6 - mR * mR - zR * zR - SR * SR - jR * jR;
        if (iJ < 0) ZR = 0;
        else {
          const RR = tR[yJ + gR + tR[tJ + bR + tR[uJ + vR + tR[ZJ + OR]]]] % 32 * 4;
          iJ *= iJ, ZR = iJ * iJ * (VR[RR] * mR + VR[RR + 1] * zR + VR[RR + 2] * SR + VR[RR + 3] * jR)
        }
        let fJ = .6 - dR * dR - ER * ER - YR * YR - kR * kR;
        if (fJ < 0) fR = 0;
        else {
          const RR = tR[yJ + xR + tR[tJ + NR + tR[uJ + DR + tR[ZJ + HR]]]] % 32 * 4;
          fJ *= fJ, fR = fJ * fJ * (VR[RR] * dR + VR[RR + 1] * ER + VR[RR + 2] * YR + VR[RR + 3] * kR)
        }
        let VJ = .6 - QR * QR - FR * FR - TR * TR - sR * sR;
        if (VJ < 0) KR = 0;
        else {
          const RR = tR[yJ + oR + tR[tJ + cR + tR[uJ + PR + tR[ZJ + IR]]]] % 32 * 4;
          VJ *= VJ, KR = VJ * VJ * (VR[RR] * QR + VR[RR + 1] * FR + VR[RR + 2] * TR + VR[RR + 3] * sR)
        }
        let KJ = .6 - hR * hR - RJ * RJ - JJ * JJ - GJ * GJ;
        if (KJ < 0) wR = 0;
        else {
          const RR = tR[yJ + 1 + tR[tJ + 1 + tR[uJ + 1 + tR[ZJ + 1]]]] % 32 * 4;
          KJ *= KJ, wR = KJ * KJ * (VR[RR] * hR + VR[RR + 1] * RJ + VR[RR + 2] * JJ + VR[RR + 3] * GJ)
        }
        return 27 * (uR + ZR + fR + KR + wR)
      }
    }
  }
};
Object.freeze(modules);
for (const RR in modules) Object.freeze(modules[RR]);