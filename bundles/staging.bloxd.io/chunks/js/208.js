/*! For license information please see zyyatq.208.f0824ba7.chunk.js.LICENSE.txt */
export const id = 208;
export const ids = [208];
export const modules = {
  38869: (YY, rY, DY) => {
    YY.exports = AY;
    var FY = DY(358);

    function AY(YY, rY) {
      if (!(this instanceof AY)) return new AY(YY, rY);
      var DY = FY.create();
      FY.add(DY, YY, rY), this.base = FY.min(FY.create(), YY, DY), this.vec = FY.clone(rY), this.max = FY.max(FY.create(), YY, DY), this.mag = FY.length(this.vec)
    }
    var IY = AY.prototype;
    IY.width = function() {
      return this.vec[0]
    }, IY.height = function() {
      return this.vec[1]
    }, IY.depth = function() {
      return this.vec[2]
    }, IY.x0 = function() {
      return this.base[0]
    }, IY.y0 = function() {
      return this.base[1]
    }, IY.z0 = function() {
      return this.base[2]
    }, IY.x1 = function() {
      return this.max[0]
    }, IY.y1 = function() {
      return this.max[1]
    }, IY.z1 = function() {
      return this.max[2]
    }, IY.translate = function(YY) {
      return FY.add(this.max, this.max, YY), FY.add(this.base, this.base, YY), this
    }, IY.setPosition = function(YY) {
      return FY.add(this.max, YY, this.vec), FY.copy(this.base, YY), this
    }, IY.expand = function(YY) {
      var rY = FY.create(),
        DY = FY.create();
      return FY.max(rY, YY.max, this.max), FY.min(DY, YY.base, this.base), FY.subtract(rY, rY, DY), new AY(DY, rY)
    }, IY.intersects = function(YY) {
      return !(YY.base[0] > this.max[0]) && (!(YY.base[1] > this.max[1]) && (!(YY.base[2] > this.max[2]) && (!(YY.max[0] < this.base[0]) && (!(YY.max[1] < this.base[1]) && !(YY.max[2] < this.base[2])))))
    }, IY.touches = function(YY) {
      var rY = this.union(YY);
      return null !== rY && (0 == rY.width() || 0 == rY.height() || 0 == rY.depth())
    }, IY.union = function(YY) {
      if (!this.intersects(YY)) return null;
      var rY = Math.max(YY.base[0], this.base[0]),
        DY = Math.max(YY.base[1], this.base[1]),
        FY = Math.max(YY.base[2], this.base[2]);
      return new AY([rY, DY, FY], [Math.min(YY.max[0], this.max[0]) - rY, Math.min(YY.max[1], this.max[1]) - DY, Math.min(YY.max[2], this.max[2]) - FY])
    }
  },
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
  38867: YY => {
    YY.exports = function(YY, rY, DY, FY, AY, IY) {
      var RY = +rY[0],
        OY = +rY[1],
        gY = +rY[2],
        aY = +DY[0],
        vY = +DY[1],
        uY = +DY[2],
        sY = Math.sqrt(aY * aY + vY * vY + uY * uY);
      if (0 === sY) throw new Error("Can't raycast along a zero vector");
      return function(YY, rY, DY, FY, AY, IY, RY, OY, gY, aY) {
        for (var vY = 0, uY = Math.floor, sY = 0 | uY(rY), iY = 0 | uY(DY), yY = 0 | uY(FY), QY = AY > 0 ? 1 : -1, oY = IY > 0 ? 1 : -1, WY = RY > 0 ? 1 : -1, EY = Math.abs(1 / AY), mY = Math.abs(1 / IY), VY = Math.abs(1 / RY), SY = EY < 1 / 0 ? EY * (QY > 0 ? sY + 1 - rY : rY - sY) : 1 / 0, lY = mY < 1 / 0 ? mY * (oY > 0 ? iY + 1 - DY : DY - iY) : 1 / 0, TY = VY < 1 / 0 ? VY * (WY > 0 ? yY + 1 - FY : FY - yY) : 1 / 0, eY = -1; vY <= OY;) {
          var NY = YY(sY, iY, yY);
          if (NY) return gY && (gY[0] = rY + vY * AY, gY[1] = DY + vY * IY, gY[2] = FY + vY * RY), aY && (aY[0] = aY[1] = aY[2] = 0, 0 === eY && (aY[0] = -QY), 1 === eY && (aY[1] = -oY), 2 === eY && (aY[2] = -WY)), NY;
          SY < lY ? SY < TY ? (sY += QY, vY = SY, SY += EY, eY = 0) : (yY += WY, vY = TY, TY += VY, eY = 2) : lY < TY ? (iY += oY, vY = lY, lY += mY, eY = 1) : (yY += WY, vY = TY, TY += VY, eY = 2)
        }
        return gY && (gY[0] = rY + vY * AY, gY[1] = DY + vY * IY, gY[2] = FY + vY * RY), aY && (aY[0] = aY[1] = aY[2] = 0), 0
      }(YY, RY, OY, gY, aY /= sY, vY /= sY, uY /= sY, FY = "undefined" === typeof FY ? 64 : +FY, AY, IY)
    }
  },
  38459: (YY, rY, DY) => {
    DY.d(rY, {
      b: () => OY,
      d: () => IY
    });
    var FY = DY(3679);
    let AY = null;

    function IY(YY) {
      return null !== AY && YY === AY
    }

    function RY() {
      this.iJ = !1, this.stopPropagation = !1, this.QJ = !1, this.disabled = !1
    }
    class OY {
      constructor(YY, rY) {
        this.version = "0.7.0";
        var DY = Object.assign({}, new RY, rY || {});
        this.element = YY || document, this.iJ = !!DY.iJ, this.stopPropagation = !!DY.stopPropagation, this.QJ = !!DY.QJ, this.disabled = !!DY.disabled, this.filterEvents = (YY, rY) => !0, this.down = new FY.EventEmitter, this.up = new FY.EventEmitter, this.state = {}, this.mJ = {
          dx: 0,
          dy: 0,
          QYY: 0,
          oYY: 0,
          WYY: 0
        }, this.pressCount = {}, this.releaseCount = {}, this._keyBindmap = {}, this._keyStates = {}, this._bindPressCount = {}, this._touches = {
          lastX: 0,
          lastY: 0,
          currID: null
        }, "loading" !== document.readyState ? aY(this) : document.addEventListener("DOMContentLoaded", (YY => {
          aY(this)
        }), {
          once: !0
        })
      }
      bind(YY) {
        for (var rY = arguments.length, DY = new Array(rY > 1 ? rY - 1 : 0), FY = 1; FY < rY; FY++) DY[FY - 1] = arguments[FY];
        DY.forEach((rY => {
          var DY = this._keyBindmap[rY] || [];
          DY.includes(YY) || (DY.push(YY), this._keyBindmap[rY] = DY)
        })), this.state[YY] = !!this.state[YY], this.pressCount[YY] = this.pressCount[YY] || 0, this.releaseCount[YY] = this.releaseCount[YY] || 0
      }
      unbind(YY) {
        for (var rY in this._keyBindmap) {
          var DY = this._keyBindmap[rY],
            FY = DY.indexOf(YY);
          FY > -1 && DY.splice(FY, 1)
        }
      }
      getBindings() {
        var YY = {};
        for (var rY in this._keyBindmap) {
          this._keyBindmap[rY].forEach((DY => {
            YY[DY] = YY[DY] || [], YY[DY].push(rY)
          }))
        }
        return YY
      }
      Zu() {
        gY(this.mJ), gY(this.pressCount), gY(this.releaseCount)
      }
    }

    function gY(YY) {
      for (var rY in YY) YY[rY] = 0
    }

    function aY(YY) {
      window.addEventListener("keydown", oY.bind(null, YY, !0), !1), window.addEventListener("keyup", oY.bind(null, YY, !1), !1);
      var rY = {
        passive: !0
      };
      YY.element.addEventListener("touchstart", iY.bind(void 0, YY), {
        passive: !1
      }), YY.element.addEventListener("touchend", QY.bind(void 0, YY), rY), YY.element.addEventListener("mousedown", WY.bind(null, YY, !0), rY), window.document.addEventListener("mouseup", WY.bind(null, YY, !1), rY), YY.element.addEventListener("touchmove", EY.bind(null, YY), rY), YY.element.addEventListener("mousemove", EY.bind(null, YY), rY), window.PointerEvent, YY.element.addEventListener("wheel", mY.bind(null, YY), rY), YY.element.addEventListener("contextmenu", VY.bind(null, YY), !1), window.addEventListener("blur", TY.bind(null, YY), !1)
    }
    var vY = 0,
      uY = 0,
      sY = null;

    function iY(YY, rY) {
      rY.preventDefault(), yY(rY)
    }

    function yY(YY) {
      let rY = !1;
      for (let DY = 0; DY < YY.touches.length; ++DY)
        if (YY.touches[DY].identifier === sY) {
          rY = !0;
          break
        } if (!rY) {
        const rY = YY.changedTouches[0];
        vY = rY.clientX, uY = rY.clientY, sY = rY.identifier
      }
    }

    function QY(YY, rY) {
      for (var DY = rY.changedTouches, FY = 0; FY < DY.length; ++FY) DY[FY].identifier === sY && (sY = null)
    }

    function oY(YY, rY, DY) {
      try {
        eY(YY, DY), rY && DY.isTrusted && !DY.repeat && YY._keyStates[DY.code] && NY(YY, DY.code)
      } finally {
        BY(DY.code, rY, YY, DY)
      }
    }

    function WY(YY, rY, DY) {
      try {
        eY(YY, DY)
      } finally {
        ! function(YY, rY, DY) {
          if ("pointerId" in DY)
            if (rY) {
              if (null !== YY._touches.currID) return;
              YY._touches.currID = DY.pointerId
            } else {
              if (YY._touches.currID !== DY.pointerId) return;
              YY._touches.currID = null
            } var FY = "button" in DY ? DY.button + 1 : 1;
          BY("Mouse" + FY, rY, YY, DY)
        }(YY, rY, DY)
      }
    }

    function EY(YY, rY) {
      var DY = rY.movementX || rY.mozMovementX || 0,
        FY = rY.movementY || rY.mozMovementY || 0;
      if (rY.touches && 0 === (DY | FY)) {
        var AY = function(YY) {
          yY(YY);
          for (let rY = 0; rY < YY.changedTouches.length; ++rY)
            if (YY.changedTouches[rY].identifier == sY) {
              const DY = YY.changedTouches[rY],
                FY = [DY.clientX - vY, DY.clientY - uY];
              return vY = DY.clientX, uY = DY.clientY, FY
            } return console.error(`Did not find touch id ${sY}`), [0, 0]
        }(rY);
        DY = AY[0], FY = AY[1]
      }
      YY.mJ.dx += DY, YY.mJ.dy += FY
    }

    function mY(YY, rY) {
      eY(YY, rY);
      var DY = 1;
      switch (rY.deltaMode) {
        case 0:
          DY = 1;
          break;
        case 1:
          DY = 12;
          break;
        case 2:
          DY = YY.element.clientHeight || window.innerHeight
      }
      YY.mJ.QYY += (rY.deltaX || 0) * DY, YY.mJ.oYY += (rY.deltaY || 0) * DY, YY.mJ.WYY += (rY.deltaZ || 0) * DY
    }

    function VY(YY, rY) {
      if (!YY.QJ) return rY.preventDefault(), !1
    }
    var SY = {
      AltLeft: "altKey",
      AltRight: "altKey",
      ControlLeft: "ctrlKey",
      ControlRight: "ctrlKey",
      ShiftLeft: "shiftKey",
      ShiftRight: "shiftKey",
      MetaLeft: "metaKey",
      MetaRight: "metaKey"
    };

    function lY(YY, rY) {
      return !!YY[SY[rY]] || ("AltRight" === rY || "ControlLeft" === rY) && "function" === typeof YY.getModifierState && !0 === YY.getModifierState("AltGraph")
    }

    function TY(YY, rY) {
      for (var DY in YY._modifiersHeldThroughBlur = {}, SY) YY._keyStates[DY] && (YY._modifiersHeldThroughBlur[DY] = !0);
      rY && rY.isTrusted && function() {
        try {
          return window.self !== window.top
        } catch (YY) {
          return !0
        }
      }() && (clearTimeout(YY._blurRelease), YY._blurRelease = setTimeout((function() {
        if (!document.hasFocus())
          for (var rY in YY._modifiersHeldThroughBlur = {}, YY._keyStates) YY._keyStates[rY] && !/^Mouse\d/.test(rY) && NY(YY, rY)
      }), 0))
    }

    function eY(YY, rY) {
      var DY = YY._modifiersHeldThroughBlur;
      if (DY && rY.isTrusted && document.hasFocus())
        for (var FY in DY) delete DY[FY], YY._keyStates[FY] && FY !== rY.code && (lY(rY, FY) || NY(YY, FY))
    }

    function NY(YY, rY) {
      const DY = {
          code: rY,
          preventDefault: () => {},
          stopPropagation: () => {}
        },
        FY = AY;
      AY = DY;
      try {
        BY(rY, !1, YY, DY)
      } finally {
        AY = FY
      }
    }

    function BY(YY, rY, DY, FY) {
      var AY = DY._keyBindmap[YY];
      AY && (cY(DY._keyStates[YY], rY) && (DY._keyStates[YY] = rY, AY.forEach((YY => {
        (!DY.filterEvents || DY.filterEvents(FY, YY)) && function(YY, rY, DY, FY) {
          var AY = rY ? DY.pressCount : DY.releaseCount;
          AY[YY] = (AY[YY] || 0) + 1;
          var IY = DY._bindPressCount[YY] || 0;
          (IY += rY ? 1 : -1) < 0 && (IY = 0);
          DY._bindPressCount[YY] = IY;
          var RY = DY.state[YY];
          if (cY(RY, IY)) {
            DY.state[YY] = IY > 0;
            var OY = rY ? DY.down : DY.up;
            DY.disabled || OY.emit(YY, FY)
          }
        }(YY, rY, DY, FY)
      }))), "button" in FY || (DY.iJ && !FY.defaultPrevented && FY.preventDefault(), DY.stopPropagation && FY.stopPropagation()))
    }

    function cY(YY, rY) {
      return YY ? !rY : rY
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
  38862: (YY, rY, DY) => {
    DY.d(rY, {
      c: () => FY
    });
    class FY {
      constructor() {
        let YY = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
          rY = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 10;
        this.lK = !1, this.NK = !1, this.eT = 30, this.IK = 0, this.zK = 100, this.fo = !1, this.fullscreen = !1, this.yE = function(YY) {}, this.fK = function(YY, rY, DY) {}, this.bK = function() {}, this.QE = function() {}, this.jK = function() {}, this.onFullscreenChanged = function() {}, this.onPointerLockError = function(YY) {}, this._data = new AY(rY),
          function(YY) {
            if ("loading" === document.readyState) {
              var rY = () => {
                document.removeEventListener("readystatechange", rY), YY()
              };
              document.addEventListener("readystatechange", rY)
            } else setTimeout(YY, 0)
          }((() => {
            ! function(YY) {
              var rY = YY._data,
                DY = rY.nowObject.now();
              rY.lastTickStarted = DY, rY.lastFrameStarted = DY, rY.lastRenderStarted = DY, rY.frameCB = () => function(YY) {
                var rY = YY._data;
                requestAnimationFrame(rY.frameCB), OY(YY);
                var DY = rY.nowObject.now(),
                  FY = DY - rY.lastFrameStarted;
                if (rY.lastFrameStarted = DY, YY.IK > 0) {
                  rY.renderAccum += FY;
                  var AY = 1e3 / YY.IK;
                  if (rY.renderAccum < AY) return;
                  rY.renderAccum -= AY, rY.renderAccum > AY && (rY.renderAccum = AY)
                }
                var IY = DY - rY.lastRenderStarted;
                rY.lastRenderStarted = DY;
                var RY = 1e3 / YY.eT,
                  gY = (DY - rY.lastTickStarted) / RY;
                gY < 0 && (gY = 0);
                YY.fK(IY, gY, RY), setTimeout(OY, 0, YY, !0)
              }(YY), rY.intervalCB = () => OY(YY), requestAnimationFrame(rY.frameCB), rY.pollTime > 0 && (rY.intervalID = setInterval(rY.intervalCB, Math.max(rY.pollTime, 1e3 / YY.eT / 2)))
            }(this),
            function(YY, rY) {
              if (!rY) return;
              var DY = !1,
                FY = !1,
                AY = YY => {
                  if (!!YY !== (DY = rY === document.pointerLockElement))
                    if (YY) {
                      var FY = rY.requestPointerLock();
                      FY && FY.catch && FY.catch((YY => {}))
                    } else document.exitPointerLock()
                },
                IY = YY => {
                  !!YY !== (FY = rY === document.fullscreenElement) && (YY ? rY.requestFullscreen ? rY.requestFullscreen() : rY.webkitRequestFullscreen && rY.webkitRequestFullscreen() : document.exitFullscreen ? document.exitFullscreen() : document.webkitExitFullscreen && document.webkitExitFullscreen())
                };
              document.addEventListener("pointerlockchange", (FY => {
                DY = rY === document.pointerLockElement, YY.jK(DY)
              })), document.addEventListener("fullscreenchange", (DY => {
                FY = rY === document.fullscreenElement, YY.onFullscreenChanged(FY)
              })), document.addEventListener("pointerlockerror", (FY => {
                DY = rY === document.pointerLockElement, YY.onPointerLockError(FY)
              })), Object.defineProperty(YY, "fo", {
                get: () => DY,
                set: AY
              }), Object.defineProperty(YY, "fullscreen", {
                get: () => FY,
                set: IY
              }), rY.addEventListener("click", (rY => {
                YY.lK && AY(!0), YY.NK && IY(!0)
              }));
              var RY = () => YY.QE();
              if (window.ResizeObserver) {
                new ResizeObserver(RY).observe(rY)
              } else window.addEventListener("resize", RY)
            }(this, YY), this.bK()
          }))
      }
    }

    function AY() {
      let YY = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 10;
      this.nowObject = performance || Date, this.pollTime = YY, this.renderAccum = 0, this.lastTickStarted = 0, this.lastFrameStarted = 0, this.lastRenderStarted = 0, this.avgTickTime = 2, this.frameCB = null, this.intervalCB = null, this.intervalID = -1
    }
    var IY = 3,
      RY = 20;

    function OY(YY) {
      for (var rY = YY._data, DY = 1e3 / YY.eT, FY = rY.nowObject.now() + RY, AY = 0; rY.nowObject.now() >= rY.lastTickStarted + DY && rY.nowObject.now() < FY && ++AY <= IY;) YY.yE(DY), rY.lastTickStarted += DY;
      var OY = 5 * (DY + 5),
        gY = rY.nowObject.now();
      if (gY - rY.lastTickStarted > OY)
        for (; gY >= rY.lastTickStarted + DY;) rY.lastTickStarted += DY
    }
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
  38394: (YY, rY, DY) => {
    function FY(YY, rY, DY, FY, AY) {
      var IY = {};
      return Object.keys(FY).forEach((function(YY) {
        IY[YY] = FY[YY]
      })), IY.enumerable = !!IY.enumerable, IY.configurable = !!IY.configurable, ("value" in IY || IY.initializer) && (IY.writable = !0), IY = DY.slice().reverse().reduce((function(DY, FY) {
        return FY(YY, rY, DY) || DY
      }), IY), AY && void 0 !== IY.initializer && (IY.value = IY.initializer ? IY.initializer.call(AY) : void 0, IY.initializer = void 0), void 0 === IY.initializer && (Object.defineProperty(YY, rY, IY), IY = null), IY
    }
    DY.d(rY, {
      e: () => FY
    })
  },
  38389: (YY, rY, DY) => {
    function FY(YY, rY, DY, FY) {
      DY && Object.defineProperty(YY, rY, {
        enumerable: DY.enumerable,
        configurable: DY.configurable,
        writable: DY.writable,
        value: DY.initializer ? DY.initializer.call(FY) : void 0
      })
    }
    DY.d(rY, {
      b: () => FY
    })
  },
  38037: (YY, rY, DY) => {
    DY.d(rY, {
      c: () => IY
    });
    var FY = DY(38040);
    const AY = (YY, rY, DY) => YY ? YY.getClassName && "Mesh" === YY.getClassName() ? null : !YY.getClassName || "SubMesh" !== YY.getClassName() && "PhysicsBody" !== YY.getClassName() ? YY.clone ? YY.clone() : Array.isArray(YY) ? YY.slice() : DY && "object" === typeof YY ? {
      ...YY
    } : null : YY.clone(rY) : null;
    class IY {
      static DeepCopy(YY, rY, DY, IY) {
        let RY = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
        const OY = function(YY) {
          const rY = [];
          do {
            const DY = Object.getOwnPropertyNames(YY);
            for (const YY of DY) - 1 === rY.indexOf(YY) && rY.push(YY)
          } while (YY = Object.getPrototypeOf(YY));
          return rY
        }(YY);
        for (const aY of OY) {
          if ("_" === aY[0] && (!IY || -1 === IY.indexOf(aY))) continue;
          if (aY.endsWith("Observable")) continue;
          if (DY && -1 !== DY.indexOf(aY)) continue;
          const OY = YY[aY],
            vY = typeof OY;
          if ("function" !== vY) try {
            if ("object" === vY)
              if (OY instanceof Uint8Array) rY[aY] = Uint8Array.from(OY);
              else if (OY instanceof Array) {
              if (rY[aY] = [], OY.length > 0)
                if ("object" == typeof OY[0])
                  for (let YY = 0; YY < OY.length; YY++) {
                    const DY = AY(OY[YY], rY, RY); - 1 === rY[aY].indexOf(DY) && rY[aY].push(DY)
                  } else rY[aY] = OY.slice(0)
            } else rY[aY] = AY(OY, rY, RY);
            else rY[aY] = OY
          } catch (gY) {
            FY.d.Warn(gY.message)
          }
        }
      }
    }
  },
  38066: (YY, rY, DY) => {
    DY.d(rY, {
      b: () => AY,
      c: () => IY,
      e: () => RY,
      g: () => OY
    });
    var FY = DY(36588);
    class AY {
      constructor(YY, rY, DY) {
        this.gradient = YY, this.color1 = rY, this.color2 = DY
      }
      getColorToRef(YY) {
        this.color2 ? FY.d.LerpToRef(this.color1, this.color2, Math.random(), YY) : YY.brY(this.color1)
      }
    }
    class IY {
      constructor(YY, rY) {
        this.gradient = YY, this.color = rY
      }
    }
    class RY {
      constructor(YY, rY, DY) {
        this.gradient = YY, this.factor1 = rY, this.factor2 = DY
      }
      getFactor() {
        return void 0 === this.factor2 || this.factor2 === this.factor1 ? this.factor1 : this.factor1 + (this.factor2 - this.factor1) * Math.random()
      }
    }
    class OY {
      static GetCurrentGradient(YY, rY, DY) {
        if (rY[0].gradient > YY) return void DY(rY[0], rY[0], 1);
        for (let AY = 0; AY < rY.length - 1; AY++) {
          const FY = rY[AY],
            IY = rY[AY + 1];
          if (YY >= FY.gradient && YY <= IY.gradient) {
            return void DY(FY, IY, (YY - FY.gradient) / (IY.gradient - FY.gradient))
          }
        }
        const FY = rY.length - 1;
        DY(rY[FY], rY[FY], 1)
      }
    }
  },
  38040: (YY, rY, DY) => {
    DY.d(rY, {
      d: () => FY
    });
    class FY {
      static _CheckLimit(YY, rY) {
        let DY = FY._LogLimitOutputs[YY];
        return DY ? DY.current++ : (DY = {
          limit: rY,
          current: 1
        }, FY._LogLimitOutputs[YY] = DY), DY.current <= DY.limit
      }
      static _GenerateLimitMessage(YY) {
        let rY = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
        const DY = FY._LogLimitOutputs[YY];
        if (!DY || !FY.MessageLimitReached) return;
        const AY = this._Levels[rY];
        DY.current === DY.limit && FY[AY.name](FY.MessageLimitReached.replace(/%LIMIT%/g, "" + DY.limit).replace(/%TYPE%/g, AY.name ?? ""))
      }
      static _AddLogEntry(YY) {
        FY._LogCache = YY + FY._LogCache, FY.OnNewCacheEntry && FY.OnNewCacheEntry(YY)
      }
      static _FormatMessage(YY) {
        const rY = YY => YY < 10 ? "0" + YY : "" + YY,
          DY = new Date;
        return "[" + rY(DY.getHours()) + ":" + rY(DY.getMinutes()) + ":" + rY(DY.getSeconds()) + "]: " + YY
      }
      static _LogDisabled(YY, rY) {}
      static _LogEnabled() {
        let YY = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
          rY = arguments.length > 1 ? arguments[1] : void 0,
          DY = arguments.length > 2 ? arguments[2] : void 0;
        const AY = Array.isArray(rY) ? rY[0] : rY;
        if (void 0 !== DY && !FY._CheckLimit(AY, DY)) return;
        const IY = FY._FormatMessage(AY),
          RY = this._Levels[YY],
          OY = Array.isArray(rY) ? rY.slice(1) : [];
        RY.logFunc && RY.logFunc("BJS - " + IY, ...OY);
        const gY = `<div style='color:${RY.color}'>${IY}</div><br>`;
        FY._AddLogEntry(gY), FY._GenerateLimitMessage(AY, YY)
      }
      static get LogCache() {
        return FY._LogCache
      }
      static ClearLogCache() {
        FY._LogCache = "", FY._LogLimitOutputs = {}, FY.errorsCount = 0
      }
      static set LogLevels(YY) {
        FY.Log = FY._LogDisabled, FY.Warn = FY._LogDisabled, FY.Error = FY._LogDisabled;
        const rY = [FY.MessageLogLevel, FY.WarningLogLevel, FY.ErrorLogLevel];
        for (const DY of rY)
          if ((YY & DY) === DY) {
            const YY = this._Levels[DY];
            FY[YY.name] = FY._LogEnabled.bind(FY, DY)
          }
      }
    }
    FY.NoneLogLevel = 0, FY.MessageLogLevel = 1, FY.WarningLogLevel = 2, FY.ErrorLogLevel = 4, FY.AllLogLevel = 7, FY.MessageLimitReached = "Too many %TYPE%s (%LIMIT%), no more %TYPE%s will be reported for this message.", FY._LogCache = "", FY._LogLimitOutputs = {}, FY._Levels = [{}, {
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
    }], FY.errorsCount = 0, FY.Log = FY._LogEnabled.bind(FY, FY.MessageLogLevel), FY.Warn = FY._LogEnabled.bind(FY, FY.WarningLogLevel), FY.Error = FY._LogEnabled.bind(FY, FY.ErrorLogLevel)
  },
  38068: (YY, rY, DY) => {
    DY.d(rY, {
      e: () => RY
    });
    var FY = DY(36524),
      AY = DY(36559),
      IY = DY(38037);
    class RY {
      constructor() {
        this.direction1 = new FY.r(0, 1, 0), this.direction2 = new FY.r(0, 1, 0), this.minEmitBox = new FY.r(-.5, -.5, -.5), this.maxEmitBox = new FY.r(.5, .5, .5)
      }
      startDirectionFunction(YY, rY, DY, IY) {
        const RY = (0, AY.RandomRange)(this.direction1.x, this.direction2.x),
          OY = (0, AY.RandomRange)(this.direction1.y, this.direction2.y),
          gY = (0, AY.RandomRange)(this.direction1.z, this.direction2.z);
        if (IY) return rY.x = RY, rY.y = OY, void(rY.z = gY);
        FY.r.TransformNormalFromFloatsToRef(RY, OY, gY, YY, rY)
      }
      startPositionFunction(YY, rY, DY, IY) {
        const RY = (0, AY.RandomRange)(this.minEmitBox.x, this.maxEmitBox.x),
          OY = (0, AY.RandomRange)(this.minEmitBox.y, this.maxEmitBox.y),
          gY = (0, AY.RandomRange)(this.minEmitBox.z, this.maxEmitBox.z);
        if (IY) return rY.x = RY, rY.y = OY, void(rY.z = gY);
        FY.r.TransformCoordinatesFromFloatsToRef(RY, OY, gY, YY, rY)
      }
      clone() {
        const YY = new RY;
        return IY.c.DeepCopy(this, YY), YY
      }
      applyToShader(YY) {
        YY.setVector3("direction1", this.direction1), YY.setVector3("direction2", this.direction2), YY.setVector3("minEmitBox", this.minEmitBox), YY.setVector3("maxEmitBox", this.maxEmitBox)
      }
      buildUniformLayout(YY) {
        YY.addUniform("direction1", 3), YY.addUniform("direction2", 3), YY.addUniform("minEmitBox", 3), YY.addUniform("maxEmitBox", 3)
      }
      getEffectDefines() {
        return "#define BOXEMITTER"
      }
      getClassName() {
        return "BoxParticleEmitter"
      }
      serialize() {
        const YY = {};
        return YY.type = this.getClassName(), YY.direction1 = this.direction1.VDY(), YY.direction2 = this.direction2.VDY(), YY.minEmitBox = this.minEmitBox.VDY(), YY.maxEmitBox = this.maxEmitBox.VDY(), YY
      }
      parse(YY) {
        FY.r.FromArrayToRef(YY.direction1, 0, this.direction1), FY.r.FromArrayToRef(YY.direction2, 0, this.direction2), FY.r.FromArrayToRef(YY.minEmitBox, 0, this.minEmitBox), FY.r.FromArrayToRef(YY.maxEmitBox, 0, this.maxEmitBox)
      }
    }
  },
  38034: (YY, rY, DY) => {
    DY.d(rY, {
      c: () => OY,
      d: () => RY
    });
    var FY = DY(36524),
      AY = DY(36559),
      IY = DY(38037);
    class RY {
      constructor() {
        let YY = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
          rY = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
          DY = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1,
          AY = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
        this.radius = YY, this.height = rY, this.radiusRange = DY, this.directionRandomizer = AY, this._tempVector = FY.r.Zero()
      }
      startDirectionFunction(YY, rY, DY, IY, RY) {
        DY.position.subtractToRef(YY.getTranslation(), this._tempVector), this._tempVector.normalize(), FY.r.TransformNormalToRef(this._tempVector, RY, this._tempVector);
        const OY = (0, AY.RandomRange)(-this.directionRandomizer / 2, this.directionRandomizer / 2);
        let gY = Math.atan2(this._tempVector.x, this._tempVector.z);
        gY += (0, AY.RandomRange)(-Math.PI / 2, Math.PI / 2) * this.directionRandomizer, this._tempVector.y = OY, this._tempVector.x = Math.sin(gY), this._tempVector.z = Math.cos(gY), this._tempVector.normalize(), IY ? rY.brY(this._tempVector) : FY.r.TransformNormalFromFloatsToRef(this._tempVector.x, this._tempVector.y, this._tempVector.z, YY, rY)
      }
      startPositionFunction(YY, rY, DY, IY) {
        const RY = (0, AY.RandomRange)(-this.height / 2, this.height / 2),
          OY = (0, AY.RandomRange)(0, 2 * Math.PI),
          gY = (0, AY.RandomRange)((1 - this.radiusRange) * (1 - this.radiusRange), 1),
          aY = Math.sqrt(gY) * this.radius,
          vY = aY * Math.cos(OY),
          uY = aY * Math.sin(OY);
        IY ? rY.p_(vY, RY, uY) : FY.r.TransformCoordinatesFromFloatsToRef(vY, RY, uY, YY, rY)
      }
      clone() {
        const YY = new RY(this.radius, this.directionRandomizer);
        return IY.c.DeepCopy(this, YY), YY
      }
      applyToShader(YY) {
        YY.setFloat("radius", this.radius), YY.setFloat("height", this.height), YY.setFloat("radiusRange", this.radiusRange), YY.setFloat("directionRandomizer", this.directionRandomizer)
      }
      buildUniformLayout(YY) {
        YY.addUniform("radius", 1), YY.addUniform("height", 1), YY.addUniform("radiusRange", 1), YY.addUniform("directionRandomizer", 1)
      }
      getEffectDefines() {
        return "#define CYLINDEREMITTER"
      }
      getClassName() {
        return "CylinderParticleEmitter"
      }
      serialize() {
        const YY = {};
        return YY.type = this.getClassName(), YY.radius = this.radius, YY.height = this.height, YY.radiusRange = this.radiusRange, YY.directionRandomizer = this.directionRandomizer, YY
      }
      parse(YY) {
        this.radius = YY.radius, this.height = YY.height, this.radiusRange = YY.radiusRange, this.directionRandomizer = YY.directionRandomizer
      }
    }
    class OY extends RY {
      constructor() {
        let YY = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
          rY = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
          DY = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1,
          AY = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : new FY.r(0, 1, 0),
          IY = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : new FY.r(0, 1, 0);
        super(YY, rY, DY), this.direction1 = AY, this.direction2 = IY
      }
      startDirectionFunction(YY, rY, DY, IY) {
        const RY = (0, AY.RandomRange)(this.direction1.x, this.direction2.x),
          OY = (0, AY.RandomRange)(this.direction1.y, this.direction2.y),
          gY = (0, AY.RandomRange)(this.direction1.z, this.direction2.z);
        IY ? rY.p_(RY, OY, gY) : FY.r.TransformNormalFromFloatsToRef(RY, OY, gY, YY, rY)
      }
      clone() {
        const YY = new OY(this.radius, this.height, this.radiusRange, this.direction1, this.direction2);
        return IY.c.DeepCopy(this, YY), YY
      }
      applyToShader(YY) {
        YY.setFloat("radius", this.radius), YY.setFloat("height", this.height), YY.setFloat("radiusRange", this.radiusRange), YY.setVector3("direction1", this.direction1), YY.setVector3("direction2", this.direction2)
      }
      buildUniformLayout(YY) {
        YY.addUniform("radius", 1), YY.addUniform("height", 1), YY.addUniform("radiusRange", 1), YY.addUniform("direction1", 3), YY.addUniform("direction2", 3)
      }
      getEffectDefines() {
        return "#define CYLINDEREMITTER\n#define DIRECTEDCYLINDEREMITTER"
      }
      getClassName() {
        return "CylinderDirectedParticleEmitter"
      }
      serialize() {
        const YY = super.serialize();
        return YY.direction1 = this.direction1.VDY(), YY.direction2 = this.direction2.VDY(), YY
      }
      parse(YY) {
        super.parse(YY), FY.r.FromArrayToRef(YY.direction1, 0, this.direction1), FY.r.FromArrayToRef(YY.direction2, 0, this.direction2)
      }
    }
  },
  38148: (YY, rY, DY) => {
    DY.d(rY, {
      d: () => uY
    });
    const FY = .5 * (Math.sqrt(3) - 1),
      AY = (3 - Math.sqrt(3)) / 6,
      IY = 1 / 3,
      RY = 1 / 6,
      OY = (Math.sqrt(5) - 1) / 4,
      gY = (5 - Math.sqrt(5)) / 20,
      aY = new Float32Array([1, 1, 0, -1, 1, 0, 1, -1, 0, -1, -1, 0, 1, 0, 1, -1, 0, 1, 1, 0, -1, -1, 0, -1, 0, 1, 1, 0, -1, 1, 0, 1, -1, 0, -1, -1]),
      vY = new Float32Array([0, 1, 1, 1, 0, 1, 1, -1, 0, 1, -1, 1, 0, 1, -1, -1, 0, -1, 1, 1, 0, -1, 1, -1, 0, -1, -1, 1, 0, -1, -1, -1, 1, 0, 1, 1, 1, 0, 1, -1, 1, 0, -1, 1, 1, 0, -1, -1, -1, 0, 1, 1, -1, 0, 1, -1, -1, 0, -1, 1, -1, 0, -1, -1, 1, 1, 0, 1, 1, 1, 0, -1, 1, -1, 0, 1, 1, -1, 0, -1, -1, 1, 0, 1, -1, 1, 0, -1, -1, -1, 0, 1, -1, -1, 0, -1, 1, 1, 1, 0, 1, 1, -1, 0, 1, -1, 1, 0, 1, -1, -1, 0, -1, 1, 1, 0, -1, 1, -1, 0, -1, -1, 1, 0, -1, -1, -1, 0]);
    const uY = class {
      constructor() {
        let YY = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Math.random;
        const rY = "function" == typeof YY ? YY : function(YY) {
          let rY = 0,
            DY = 0,
            FY = 0,
            AY = 1;
          const IY = function() {
            let YY = 4022871197;
            return function(rY) {
              rY = rY.toString();
              for (let DY = 0; DY < rY.length; DY++) {
                YY += rY.charCodeAt(DY);
                let FY = .02519603282416938 * YY;
                YY = FY >>> 0, FY -= YY, FY *= YY, YY = FY >>> 0, FY -= YY, YY += 4294967296 * FY
              }
              return 2.3283064365386963e-10 * (YY >>> 0)
            }
          }();
          rY = IY(" "), DY = IY(" "), FY = IY(" "), rY -= IY(YY), rY < 0 && (rY += 1);
          DY -= IY(YY), DY < 0 && (DY += 1);
          FY -= IY(YY), FY < 0 && (FY += 1);
          return function() {
            const YY = 2091639 * rY + 2.3283064365386963e-10 * AY;
            return rY = DY, DY = FY, FY = YY - (AY = 0 | YY)
          }
        }(YY);
        this.p = function(YY) {
          const rY = new Uint8Array(256);
          for (let DY = 0; DY < 256; DY++) rY[DY] = DY;
          for (let DY = 0; DY < 255; DY++) {
            const FY = DY + ~~(YY() * (256 - DY)),
              AY = rY[DY];
            rY[DY] = rY[FY], rY[FY] = AY
          }
          return rY
        }(rY), this.perm = new Uint8Array(512), this.permMod12 = new Uint8Array(512);
        for (let DY = 0; DY < 512; DY++) this.perm[DY] = this.p[255 & DY], this.permMod12[DY] = this.perm[DY] % 12
      }
      noise2D(YY, rY) {
        const DY = this.permMod12,
          IY = this.perm;
        let RY = 0,
          OY = 0,
          gY = 0;
        const vY = (YY + rY) * FY,
          uY = Math.floor(YY + vY),
          sY = Math.floor(rY + vY),
          iY = (uY + sY) * AY,
          yY = YY - (uY - iY),
          QY = rY - (sY - iY);
        let oY, WY;
        yY > QY ? (oY = 1, WY = 0) : (oY = 0, WY = 1);
        const EY = yY - oY + AY,
          mY = QY - WY + AY,
          VY = yY - 1 + 2 * AY,
          SY = QY - 1 + 2 * AY,
          lY = 255 & uY,
          TY = 255 & sY;
        let eY = .5 - yY * yY - QY * QY;
        if (eY >= 0) {
          const YY = 3 * DY[lY + IY[TY]];
          eY *= eY, RY = eY * eY * (aY[YY] * yY + aY[YY + 1] * QY)
        }
        let NY = .5 - EY * EY - mY * mY;
        if (NY >= 0) {
          const YY = 3 * DY[lY + oY + IY[TY + WY]];
          NY *= NY, OY = NY * NY * (aY[YY] * EY + aY[YY + 1] * mY)
        }
        let BY = .5 - VY * VY - SY * SY;
        if (BY >= 0) {
          const YY = 3 * DY[lY + 1 + IY[TY + 1]];
          BY *= BY, gY = BY * BY * (aY[YY] * VY + aY[YY + 1] * SY)
        }
        return 70 * (RY + OY + gY)
      }
      noise3D(YY, rY, DY) {
        const FY = this.permMod12,
          AY = this.perm;
        let OY, gY, vY, uY;
        const sY = (YY + rY + DY) * IY,
          iY = Math.floor(YY + sY),
          yY = Math.floor(rY + sY),
          QY = Math.floor(DY + sY),
          oY = (iY + yY + QY) * RY,
          WY = YY - (iY - oY),
          EY = rY - (yY - oY),
          mY = DY - (QY - oY);
        let VY, SY, lY, TY, eY, NY;
        WY >= EY ? EY >= mY ? (VY = 1, SY = 0, lY = 0, TY = 1, eY = 1, NY = 0) : WY >= mY ? (VY = 1, SY = 0, lY = 0, TY = 1, eY = 0, NY = 1) : (VY = 0, SY = 0, lY = 1, TY = 1, eY = 0, NY = 1) : EY < mY ? (VY = 0, SY = 0, lY = 1, TY = 0, eY = 1, NY = 1) : WY < mY ? (VY = 0, SY = 1, lY = 0, TY = 0, eY = 1, NY = 1) : (VY = 0, SY = 1, lY = 0, TY = 1, eY = 1, NY = 0);
        const BY = WY - VY + RY,
          cY = EY - SY + RY,
          KY = mY - lY + RY,
          HY = WY - TY + 2 * RY,
          zY = EY - eY + 2 * RY,
          ZY = mY - NY + 2 * RY,
          CY = WY - 1 + .5,
          fY = EY - 1 + .5,
          jY = mY - 1 + .5,
          hY = 255 & iY,
          dY = 255 & yY,
          JY = 255 & QY;
        let MY = .6 - WY * WY - EY * EY - mY * mY;
        if (MY < 0) OY = 0;
        else {
          const YY = 3 * FY[hY + AY[dY + AY[JY]]];
          MY *= MY, OY = MY * MY * (aY[YY] * WY + aY[YY + 1] * EY + aY[YY + 2] * mY)
        }
        let wY = .6 - BY * BY - cY * cY - KY * KY;
        if (wY < 0) gY = 0;
        else {
          const YY = 3 * FY[hY + VY + AY[dY + SY + AY[JY + lY]]];
          wY *= wY, gY = wY * wY * (aY[YY] * BY + aY[YY + 1] * cY + aY[YY + 2] * KY)
        }
        let bY = .6 - HY * HY - zY * zY - ZY * ZY;
        if (bY < 0) vY = 0;
        else {
          const YY = 3 * FY[hY + TY + AY[dY + eY + AY[JY + NY]]];
          bY *= bY, vY = bY * bY * (aY[YY] * HY + aY[YY + 1] * zY + aY[YY + 2] * ZY)
        }
        let XY = .6 - CY * CY - fY * fY - jY * jY;
        if (XY < 0) uY = 0;
        else {
          const YY = 3 * FY[hY + 1 + AY[dY + 1 + AY[JY + 1]]];
          XY *= XY, uY = XY * XY * (aY[YY] * CY + aY[YY + 1] * fY + aY[YY + 2] * jY)
        }
        return 32 * (OY + gY + vY + uY)
      }
      noise4D(YY, rY, DY, FY) {
        const AY = this.perm;
        let IY, RY, aY, uY, sY;
        const iY = (YY + rY + DY + FY) * OY,
          yY = Math.floor(YY + iY),
          QY = Math.floor(rY + iY),
          oY = Math.floor(DY + iY),
          WY = Math.floor(FY + iY),
          EY = (yY + QY + oY + WY) * gY,
          mY = YY - (yY - EY),
          VY = rY - (QY - EY),
          SY = DY - (oY - EY),
          lY = FY - (WY - EY);
        let TY = 0,
          eY = 0,
          NY = 0,
          BY = 0;
        mY > VY ? TY++ : eY++, mY > SY ? TY++ : NY++, mY > lY ? TY++ : BY++, VY > SY ? eY++ : NY++, VY > lY ? eY++ : BY++, SY > lY ? NY++ : BY++;
        const cY = TY >= 3 ? 1 : 0,
          KY = eY >= 3 ? 1 : 0,
          HY = NY >= 3 ? 1 : 0,
          zY = BY >= 3 ? 1 : 0,
          ZY = TY >= 2 ? 1 : 0,
          CY = eY >= 2 ? 1 : 0,
          fY = NY >= 2 ? 1 : 0,
          jY = BY >= 2 ? 1 : 0,
          hY = TY >= 1 ? 1 : 0,
          dY = eY >= 1 ? 1 : 0,
          JY = NY >= 1 ? 1 : 0,
          MY = BY >= 1 ? 1 : 0,
          wY = mY - cY + gY,
          bY = VY - KY + gY,
          XY = SY - HY + gY,
          qY = lY - zY + gY,
          pY = mY - ZY + 2 * gY,
          kY = VY - CY + 2 * gY,
          GY = SY - fY + 2 * gY,
          xY = lY - jY + 2 * gY,
          nY = mY - hY + 3 * gY,
          PY = VY - dY + 3 * gY,
          UY = SY - JY + 3 * gY,
          LY = lY - MY + 3 * gY,
          tY = mY - 1 + 4 * gY,
          Yr = VY - 1 + 4 * gY,
          rr = SY - 1 + 4 * gY,
          Dr = lY - 1 + 4 * gY,
          Fr = 255 & yY,
          Ar = 255 & QY,
          Ir = 255 & oY,
          Rr = 255 & WY;
        let Or = .6 - mY * mY - VY * VY - SY * SY - lY * lY;
        if (Or < 0) IY = 0;
        else {
          const YY = AY[Fr + AY[Ar + AY[Ir + AY[Rr]]]] % 32 * 4;
          Or *= Or, IY = Or * Or * (vY[YY] * mY + vY[YY + 1] * VY + vY[YY + 2] * SY + vY[YY + 3] * lY)
        }
        let gr = .6 - wY * wY - bY * bY - XY * XY - qY * qY;
        if (gr < 0) RY = 0;
        else {
          const YY = AY[Fr + cY + AY[Ar + KY + AY[Ir + HY + AY[Rr + zY]]]] % 32 * 4;
          gr *= gr, RY = gr * gr * (vY[YY] * wY + vY[YY + 1] * bY + vY[YY + 2] * XY + vY[YY + 3] * qY)
        }
        let ar = .6 - pY * pY - kY * kY - GY * GY - xY * xY;
        if (ar < 0) aY = 0;
        else {
          const YY = AY[Fr + ZY + AY[Ar + CY + AY[Ir + fY + AY[Rr + jY]]]] % 32 * 4;
          ar *= ar, aY = ar * ar * (vY[YY] * pY + vY[YY + 1] * kY + vY[YY + 2] * GY + vY[YY + 3] * xY)
        }
        let vr = .6 - nY * nY - PY * PY - UY * UY - LY * LY;
        if (vr < 0) uY = 0;
        else {
          const YY = AY[Fr + hY + AY[Ar + dY + AY[Ir + JY + AY[Rr + MY]]]] % 32 * 4;
          vr *= vr, uY = vr * vr * (vY[YY] * nY + vY[YY + 1] * PY + vY[YY + 2] * UY + vY[YY + 3] * LY)
        }
        let ur = .6 - tY * tY - Yr * Yr - rr * rr - Dr * Dr;
        if (ur < 0) sY = 0;
        else {
          const YY = AY[Fr + 1 + AY[Ar + 1 + AY[Ir + 1 + AY[Rr + 1]]]] % 32 * 4;
          ur *= ur, sY = ur * ur * (vY[YY] * tY + vY[YY + 1] * Yr + vY[YY + 2] * rr + vY[YY + 3] * Dr)
        }
        return 27 * (IY + RY + aY + uY + sY)
      }
    }
  }
};
Object.freeze(modules);
for (const YY in modules) Object.freeze(modules[YY]);