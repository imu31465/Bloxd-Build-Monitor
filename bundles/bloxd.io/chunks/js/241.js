/*! For license information please see pxmq3aq.241.5cf5caab.chunk.js.LICENSE.txt */
export const id = 241;
export const ids = [241];
export const modules = {
  40861: (VV, eV, xV) => {
    VV.exports = YV;
    var JV = xV(380);

    function YV(VV, eV) {
      if (!(this instanceof YV)) return new YV(VV, eV);
      var xV = JV.create();
      JV.add(xV, VV, eV), this.base = JV.min(JV.create(), VV, xV), this.vec = JV.clone(eV), this.max = JV.max(JV.create(), VV, xV), this.mag = JV.length(this.vec)
    }
    var UV = YV.prototype;
    UV.width = function() {
      return this.vec[0]
    }, UV.height = function() {
      return this.vec[1]
    }, UV.depth = function() {
      return this.vec[2]
    }, UV.x0 = function() {
      return this.base[0]
    }, UV.y0 = function() {
      return this.base[1]
    }, UV.z0 = function() {
      return this.base[2]
    }, UV.x1 = function() {
      return this.max[0]
    }, UV.y1 = function() {
      return this.max[1]
    }, UV.z1 = function() {
      return this.max[2]
    }, UV.translate = function(VV) {
      return JV.add(this.max, this.max, VV), JV.add(this.base, this.base, VV), this
    }, UV.setPosition = function(VV) {
      return JV.add(this.max, VV, this.vec), JV.copy(this.base, VV), this
    }, UV.expand = function(VV) {
      var eV = JV.create(),
        xV = JV.create();
      return JV.max(eV, VV.max, this.max), JV.min(xV, VV.base, this.base), JV.subtract(eV, eV, xV), new YV(xV, eV)
    }, UV.intersects = function(VV) {
      return !(VV.base[0] > this.max[0]) && (!(VV.base[1] > this.max[1]) && (!(VV.base[2] > this.max[2]) && (!(VV.max[0] < this.base[0]) && (!(VV.max[1] < this.base[1]) && !(VV.max[2] < this.base[2])))))
    }, UV.touches = function(VV) {
      var eV = this.union(VV);
      return null !== eV && (0 == eV.width() || 0 == eV.height() || 0 == eV.depth())
    }, UV.union = function(VV) {
      if (!this.intersects(VV)) return null;
      var eV = Math.max(VV.base[0], this.base[0]),
        xV = Math.max(VV.base[1], this.base[1]),
        JV = Math.max(VV.base[2], this.base[2]);
      return new YV([eV, xV, JV], [Math.min(VV.max[0], this.max[0]) - eV, Math.min(VV.max[1], this.max[1]) - xV, Math.min(VV.max[2], this.max[2]) - JV])
    }
  },
  40853: VV => {
    VV.exports = function(VV, eV, xV, JV, YV, UV) {
      var yV = +eV[0],
        pV = +eV[1],
        QV = +eV[2],
        nV = +xV[0],
        wV = +xV[1],
        ZV = +xV[2],
        vV = Math.sqrt(nV * nV + wV * wV + ZV * ZV);
      if (0 === vV) throw new Error("Can't raycast along a zero vector");
      return function(VV, eV, xV, JV, YV, UV, yV, pV, QV, nV) {
        for (var wV = 0, ZV = Math.floor, vV = 0 | ZV(eV), rV = 0 | ZV(xV), kV = 0 | ZV(JV), bV = YV > 0 ? 1 : -1, EV = UV > 0 ? 1 : -1, BV = yV > 0 ? 1 : -1, jV = Math.abs(1 / YV), qV = Math.abs(1 / UV), tV = Math.abs(1 / yV), FV = jV < 1 / 0 ? jV * (bV > 0 ? vV + 1 - eV : eV - vV) : 1 / 0, TV = qV < 1 / 0 ? qV * (EV > 0 ? rV + 1 - xV : xV - rV) : 1 / 0, PV = tV < 1 / 0 ? tV * (BV > 0 ? kV + 1 - JV : JV - kV) : 1 / 0, AV = -1; wV <= pV;) {
          var NV = VV(vV, rV, kV);
          if (NV) return QV && (QV[0] = eV + wV * YV, QV[1] = xV + wV * UV, QV[2] = JV + wV * yV), nV && (nV[0] = nV[1] = nV[2] = 0, 0 === AV && (nV[0] = -bV), 1 === AV && (nV[1] = -EV), 2 === AV && (nV[2] = -BV)), NV;
          FV < TV ? FV < PV ? (vV += bV, wV = FV, FV += jV, AV = 0) : (kV += BV, wV = PV, PV += tV, AV = 2) : TV < PV ? (rV += EV, wV = TV, TV += qV, AV = 1) : (kV += BV, wV = PV, PV += tV, AV = 2)
        }
        return QV && (QV[0] = eV + wV * YV, QV[1] = xV + wV * UV, QV[2] = JV + wV * yV), nV && (nV[0] = nV[1] = nV[2] = 0), 0
      }(VV, yV, pV, QV, nV /= vV, wV /= vV, ZV /= vV, JV = "undefined" === typeof JV ? 64 : +JV, YV, UV)
    }
  },
  40315: (VV, eV, xV) => {
    xV.d(eV, {
      e: () => pV,
      g: () => UV
    });
    var JV = xV(4512);
    let YV = null;

    function UV(VV) {
      return null !== YV && VV === YV
    }

    function yV() {
      this.U3 = !1, this.stopPropagation = !1, this.B3 = !1, this.disabled = !1
    }
    class pV {
      constructor(VV, eV) {
        this.version = "0.7.0";
        var xV = Object.assign({}, new yV, eV || {});
        this.element = VV || document, this.U3 = !!xV.U3, this.stopPropagation = !!xV.stopPropagation, this.B3 = !!xV.B3, this.disabled = !!xV.disabled, this.filterEvents = (VV, eV) => !0, this.ignoreEvent = VV => !1, this.down = new JV.EventEmitter, this.up = new JV.EventEmitter, this.state = {}, this.X3 = {
          dx: 0,
          dy: 0,
          WxV: 0,
          RxV: 0,
          gxV: 0
        }, this.pressCount = {}, this.releaseCount = {}, this._keyBindmap = {}, this._keyStates = {}, this._bindPressCount = {}, this._touches = {
          lastX: 0,
          lastY: 0,
          currID: null
        }, "loading" !== document.readyState ? nV(this) : document.addEventListener("DOMContentLoaded", (VV => {
          nV(this)
        }), {
          once: !0
        })
      }
      bind(VV) {
        for (var eV = arguments.length, xV = new Array(eV > 1 ? eV - 1 : 0), JV = 1; JV < eV; JV++) xV[JV - 1] = arguments[JV];
        xV.forEach((eV => {
          var xV = this._keyBindmap[eV] || [];
          xV.includes(VV) || (xV.push(VV), this._keyBindmap[eV] = xV)
        })), this.state[VV] = !!this.state[VV], this.pressCount[VV] = this.pressCount[VV] || 0, this.releaseCount[VV] = this.releaseCount[VV] || 0
      }
      unbind(VV) {
        for (var eV in this._keyBindmap) {
          var xV = this._keyBindmap[eV],
            JV = xV.indexOf(VV);
          JV > -1 && xV.splice(JV, 1)
        }
      }
      getBindings() {
        var VV = {};
        for (var eV in this._keyBindmap) {
          this._keyBindmap[eV].forEach((xV => {
            VV[xV] = VV[xV] || [], VV[xV].push(eV)
          }))
        }
        return VV
      }
      iZ() {
        QV(this.X3), QV(this.pressCount), QV(this.releaseCount)
      }
    }

    function QV(VV) {
      for (var eV in VV) VV[eV] = 0
    }

    function nV(VV) {
      window.addEventListener("keydown", EV.bind(null, VV, !0), !1), window.addEventListener("keyup", EV.bind(null, VV, !1), !1);
      var eV = {
        passive: !0
      };
      VV.element.addEventListener("touchstart", rV.bind(void 0, VV), {
        passive: !1
      }), VV.element.addEventListener("touchend", bV.bind(void 0, VV), eV), VV.element.addEventListener("mousedown", BV.bind(null, VV, !0), eV), window.document.addEventListener("mouseup", BV.bind(null, VV, !1), eV), VV.element.addEventListener("touchmove", jV.bind(null, VV), eV), VV.element.addEventListener("mousemove", jV.bind(null, VV), eV), window.PointerEvent, VV.element.addEventListener("wheel", qV.bind(null, VV), eV), VV.element.addEventListener("contextmenu", tV.bind(null, VV), !1), window.addEventListener("blur", PV.bind(null, VV), !1)
    }
    var wV = 0,
      ZV = 0,
      vV = null;

    function rV(VV, eV) {
      eV.preventDefault(), kV(eV)
    }

    function kV(VV) {
      let eV = !1;
      for (let xV = 0; xV < VV.touches.length; ++xV)
        if (VV.touches[xV].identifier === vV) {
          eV = !0;
          break
        } if (!eV) {
        const eV = VV.changedTouches[0];
        wV = eV.clientX, ZV = eV.clientY, vV = eV.identifier
      }
    }

    function bV(VV, eV) {
      for (var xV = eV.changedTouches, JV = 0; JV < xV.length; ++JV) xV[JV].identifier === vV && (vV = null)
    }

    function EV(VV, eV, xV) {
      if (!VV.ignoreEvent(xV)) try {
        AV(VV, xV), eV && xV.isTrusted && !xV.repeat && VV._keyStates[xV.code] && NV(VV, xV.code)
      } finally {
        XV(xV.code, eV, VV, xV)
      }
    }

    function BV(VV, eV, xV) {
      if (!VV.ignoreEvent(xV)) try {
        AV(VV, xV)
      } finally {
        ! function(VV, eV, xV) {
          if ("pointerId" in xV)
            if (eV) {
              if (null !== VV._touches.currID) return;
              VV._touches.currID = xV.pointerId
            } else {
              if (VV._touches.currID !== xV.pointerId) return;
              VV._touches.currID = null
            } var JV = "button" in xV ? xV.button + 1 : 1;
          XV("Mouse" + JV, eV, VV, xV)
        }(VV, eV, xV)
      }
    }

    function jV(VV, eV) {
      var xV = eV.movementX || eV.mozMovementX || 0,
        JV = eV.movementY || eV.mozMovementY || 0;
      if (eV.touches && 0 === (xV | JV)) {
        var YV = function(VV) {
          kV(VV);
          for (let eV = 0; eV < VV.changedTouches.length; ++eV)
            if (VV.changedTouches[eV].identifier == vV) {
              const xV = VV.changedTouches[eV],
                JV = [xV.clientX - wV, xV.clientY - ZV];
              return wV = xV.clientX, ZV = xV.clientY, JV
            } return console.error(`Did not find touch id ${vV}`), [0, 0]
        }(eV);
        xV = YV[0], JV = YV[1]
      }
      VV.X3.dx += xV, VV.X3.dy += JV
    }

    function qV(VV, eV) {
      AV(VV, eV);
      var xV = 1;
      switch (eV.deltaMode) {
        case 0:
          xV = 1;
          break;
        case 1:
          xV = 12;
          break;
        case 2:
          xV = VV.element.clientHeight || window.innerHeight
      }
      VV.X3.WxV += (eV.deltaX || 0) * xV, VV.X3.RxV += (eV.deltaY || 0) * xV, VV.X3.gxV += (eV.deltaZ || 0) * xV
    }

    function tV(VV, eV) {
      if (!VV.B3) return eV.preventDefault(), !1
    }
    var FV = {
      AltLeft: "altKey",
      AltRight: "altKey",
      ControlLeft: "ctrlKey",
      ControlRight: "ctrlKey",
      ShiftLeft: "shiftKey",
      ShiftRight: "shiftKey",
      MetaLeft: "metaKey",
      MetaRight: "metaKey"
    };

    function TV(VV, eV) {
      return !!VV[FV[eV]] || ("AltRight" === eV || "ControlLeft" === eV) && "function" === typeof VV.getModifierState && !0 === VV.getModifierState("AltGraph")
    }

    function PV(VV, eV) {
      for (var xV in VV._modifiersHeldThroughBlur = {}, FV) VV._keyStates[xV] && (VV._modifiersHeldThroughBlur[xV] = !0);
      eV && eV.isTrusted && function() {
        try {
          return window.self !== window.top
        } catch (VV) {
          return !0
        }
      }() && (clearTimeout(VV._blurRelease), VV._blurRelease = setTimeout((function() {
        if (!document.hasFocus())
          for (var eV in VV._modifiersHeldThroughBlur = {}, VV._keyStates) VV._keyStates[eV] && !/^Mouse\d/.test(eV) && NV(VV, eV)
      }), 0))
    }

    function AV(VV, eV) {
      var xV = VV._modifiersHeldThroughBlur;
      if (xV && eV.isTrusted && document.hasFocus())
        for (var JV in xV) delete xV[JV], VV._keyStates[JV] && JV !== eV.code && (TV(eV, JV) || NV(VV, JV))
    }

    function NV(VV, eV) {
      const xV = {
          code: eV,
          preventDefault: () => {},
          stopPropagation: () => {}
        },
        JV = YV;
      YV = xV;
      try {
        XV(eV, !1, VV, xV)
      } finally {
        YV = JV
      }
    }

    function XV(VV, eV, xV, JV) {
      var YV = xV._keyBindmap[VV];
      YV && (MV(xV._keyStates[VV], eV) && (xV._keyStates[VV] = eV, YV.forEach((VV => {
        (!xV.filterEvents || xV.filterEvents(JV, VV)) && function(VV, eV, xV, JV) {
          var YV = eV ? xV.pressCount : xV.releaseCount;
          YV[VV] = (YV[VV] || 0) + 1;
          var UV = xV._bindPressCount[VV] || 0;
          (UV += eV ? 1 : -1) < 0 && (UV = 0);
          xV._bindPressCount[VV] = UV;
          var yV = xV.state[VV];
          if (MV(yV, UV)) {
            xV.state[VV] = UV > 0;
            var pV = eV ? xV.down : xV.up;
            xV.disabled || pV.emit(VV, JV)
          }
        }(VV, eV, xV, JV)
      }))), "button" in JV || (xV.U3 && !JV.defaultPrevented && JV.preventDefault(), xV.stopPropagation && JV.stopPropagation()))
    }

    function MV(VV, eV) {
      return VV ? !eV : eV
    }
  },
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
  40841: (VV, eV, xV) => {
    xV.d(eV, {
      d: () => JV
    });
    class JV {
      constructor() {
        let VV = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
          eV = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 10;
        this.Am = !1, this.Wm = !1, this.KD = 30, this.Qm = 0, this.Rm = 100, this.YB = !1, this.fullscreen = !1, this.Iq = function(VV) {}, this.Km = function(VV, eV, xV) {}, this.oZ = function() {}, this.hq = function() {}, this.Im = function() {}, this.onFullscreenChanged = function() {}, this.onPointerLockError = function(VV) {}, this._data = new YV(eV),
          function(VV) {
            if ("loading" === document.readyState) {
              var eV = () => {
                document.removeEventListener("readystatechange", eV), VV()
              };
              document.addEventListener("readystatechange", eV)
            } else setTimeout(VV, 0)
          }((() => {
            ! function(VV) {
              var eV = VV._data,
                xV = eV.nowObject.now();
              eV.lastTickStarted = xV, eV.lastFrameStarted = xV, eV.lastRenderStarted = xV, eV.frameCB = () => function(VV) {
                var eV = VV._data;
                requestAnimationFrame(eV.frameCB), pV(VV);
                var xV = eV.nowObject.now(),
                  JV = xV - eV.lastFrameStarted;
                if (eV.lastFrameStarted = xV, VV.Qm > 0) {
                  eV.renderAccum += JV;
                  var YV = 1e3 / VV.Qm;
                  if (eV.renderAccum < YV) return;
                  eV.renderAccum -= YV, eV.renderAccum > YV && (eV.renderAccum = YV)
                }
                var UV = xV - eV.lastRenderStarted;
                eV.lastRenderStarted = xV;
                var yV = 1e3 / VV.KD,
                  QV = (xV - eV.lastTickStarted) / yV;
                QV < 0 && (QV = 0);
                VV.Km(UV, QV, yV), setTimeout(pV, 0, VV, !0)
              }(VV), eV.intervalCB = () => pV(VV), requestAnimationFrame(eV.frameCB), eV.pollTime > 0 && (eV.intervalID = setInterval(eV.intervalCB, Math.max(eV.pollTime, 1e3 / VV.KD / 2)))
            }(this),
            function(VV, eV) {
              if (!eV) return;
              var xV = !1,
                JV = !1,
                YV = VV => {
                  if (!!VV !== (xV = eV === document.pointerLockElement))
                    if (VV) {
                      var JV = eV.requestPointerLock();
                      JV && JV.catch && JV.catch((VV => {}))
                    } else document.exitPointerLock()
                },
                UV = VV => {
                  !!VV !== (JV = eV === document.fullscreenElement) && (VV ? eV.requestFullscreen ? eV.requestFullscreen() : eV.webkitRequestFullscreen && eV.webkitRequestFullscreen() : document.exitFullscreen ? document.exitFullscreen() : document.webkitExitFullscreen && document.webkitExitFullscreen())
                };
              document.addEventListener("pointerlockchange", (JV => {
                xV = eV === document.pointerLockElement, VV.Im(xV)
              })), document.addEventListener("fullscreenchange", (xV => {
                JV = eV === document.fullscreenElement, VV.onFullscreenChanged(JV)
              })), document.addEventListener("pointerlockerror", (JV => {
                xV = eV === document.pointerLockElement, VV.onPointerLockError(JV)
              })), Object.defineProperty(VV, "YB", {
                get: () => xV,
                set: YV
              }), Object.defineProperty(VV, "fullscreen", {
                get: () => JV,
                set: UV
              }), eV.addEventListener("click", (eV => {
                VV.Am && YV(!0), VV.Wm && UV(!0)
              }));
              var yV = () => VV.hq();
              if (window.ResizeObserver) {
                new ResizeObserver(yV).observe(eV)
              } else window.addEventListener("resize", yV)
            }(this, VV), this.oZ()
          }))
      }
    }

    function YV() {
      let VV = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 10;
      this.nowObject = performance || Date, this.pollTime = VV, this.renderAccum = 0, this.lastTickStarted = 0, this.lastFrameStarted = 0, this.lastRenderStarted = 0, this.avgTickTime = 2, this.frameCB = null, this.intervalCB = null, this.intervalID = -1
    }
    var UV = 3,
      yV = 20;

    function pV(VV) {
      for (var eV = VV._data, xV = 1e3 / VV.KD, JV = eV.nowObject.now() + yV, YV = 0; eV.nowObject.now() >= eV.lastTickStarted + xV && eV.nowObject.now() < JV && ++YV <= UV;) VV.Iq(xV), eV.lastTickStarted += xV;
      var pV = 5 * (xV + 5),
        QV = eV.nowObject.now();
      if (QV - eV.lastTickStarted > pV)
        for (; QV >= eV.lastTickStarted + xV;) eV.lastTickStarted += xV
    }
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
  40182: (VV, eV, xV) => {
    function JV(VV, eV, xV, JV, YV) {
      var UV = {};
      return Object.keys(JV).forEach((function(VV) {
        UV[VV] = JV[VV]
      })), UV.enumerable = !!UV.enumerable, UV.configurable = !!UV.configurable, ("value" in UV || UV.initializer) && (UV.writable = !0), UV = xV.slice().reverse().reduce((function(xV, JV) {
        return JV(VV, eV, xV) || xV
      }), UV), YV && void 0 !== UV.initializer && (UV.value = UV.initializer ? UV.initializer.call(YV) : void 0, UV.initializer = void 0), void 0 === UV.initializer && (Object.defineProperty(VV, eV, UV), UV = null), UV
    }
    xV.d(eV, {
      d: () => JV
    })
  },
  40173: (VV, eV, xV) => {
    function JV(VV, eV, xV, JV) {
      xV && Object.defineProperty(VV, eV, {
        enumerable: xV.enumerable,
        configurable: xV.configurable,
        writable: xV.writable,
        value: xV.initializer ? xV.initializer.call(JV) : void 0
      })
    }
    xV.d(eV, {
      e: () => JV
    })
  },
  39867: (VV, eV, xV) => {
    xV.d(eV, {
      d: () => UV
    });
    var JV = xV(39870);
    const YV = (VV, eV, xV) => VV ? VV.getClassName && "Mesh" === VV.getClassName() ? null : !VV.getClassName || "SubMesh" !== VV.getClassName() && "PhysicsBody" !== VV.getClassName() ? VV.clone ? VV.clone() : Array.isArray(VV) ? VV.slice() : xV && "object" === typeof VV ? {
      ...VV
    } : null : VV.clone(eV) : null;
    class UV {
      static DeepCopy(VV, eV, xV, UV) {
        let yV = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
        const pV = function(VV) {
          const eV = [];
          do {
            const xV = Object.getOwnPropertyNames(VV);
            for (const VV of xV) - 1 === eV.indexOf(VV) && eV.push(VV)
          } while (VV = Object.getPrototypeOf(VV));
          return eV
        }(VV);
        for (const nV of pV) {
          if ("_" === nV[0] && (!UV || -1 === UV.indexOf(nV))) continue;
          if (nV.endsWith("Observable")) continue;
          if (xV && -1 !== xV.indexOf(nV)) continue;
          const pV = VV[nV],
            wV = typeof pV;
          if ("function" !== wV) try {
            if ("object" === wV)
              if (pV instanceof Uint8Array) eV[nV] = Uint8Array.from(pV);
              else if (pV instanceof Array) {
              if (eV[nV] = [], pV.length > 0)
                if ("object" == typeof pV[0])
                  for (let VV = 0; VV < pV.length; VV++) {
                    const xV = YV(pV[VV], eV, yV); - 1 === eV[nV].indexOf(xV) && eV[nV].push(xV)
                  } else eV[nV] = pV.slice(0)
            } else eV[nV] = YV(pV, eV, yV);
            else eV[nV] = pV
          } catch (QV) {
            JV.b.Warn(QV.message)
          }
        }
      }
    }
  },
  39899: (VV, eV, xV) => {
    xV.d(eV, {
      c: () => YV,
      d: () => UV,
      h: () => yV,
      i: () => pV
    });
    var JV = xV(38389);
    class YV {
      constructor(VV, eV, xV) {
        this.gradient = VV, this.color1 = eV, this.color2 = xV
      }
      getColorToRef(VV) {
        this.color2 ? JV.h.LerpToRef(this.color1, this.color2, Math.random(), VV) : VV.iG(this.color1)
      }
    }
    class UV {
      constructor(VV, eV) {
        this.gradient = VV, this.color = eV
      }
    }
    class yV {
      constructor(VV, eV, xV) {
        this.gradient = VV, this.factor1 = eV, this.factor2 = xV
      }
      getFactor() {
        return void 0 === this.factor2 || this.factor2 === this.factor1 ? this.factor1 : this.factor1 + (this.factor2 - this.factor1) * Math.random()
      }
    }
    class pV {
      static GetCurrentGradient(VV, eV, xV) {
        if (eV[0].gradient > VV) return void xV(eV[0], eV[0], 1);
        for (let YV = 0; YV < eV.length - 1; YV++) {
          const JV = eV[YV],
            UV = eV[YV + 1];
          if (VV >= JV.gradient && VV <= UV.gradient) {
            return void xV(JV, UV, (VV - JV.gradient) / (UV.gradient - JV.gradient))
          }
        }
        const JV = eV.length - 1;
        xV(eV[JV], eV[JV], 1)
      }
    }
  },
  39870: (VV, eV, xV) => {
    xV.d(eV, {
      b: () => JV
    });
    class JV {
      static _CheckLimit(VV, eV) {
        let xV = JV._LogLimitOutputs[VV];
        return xV ? xV.current++ : (xV = {
          limit: eV,
          current: 1
        }, JV._LogLimitOutputs[VV] = xV), xV.current <= xV.limit
      }
      static _GenerateLimitMessage(VV) {
        let eV = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
        const xV = JV._LogLimitOutputs[VV];
        if (!xV || !JV.MessageLimitReached) return;
        const YV = this._Levels[eV];
        xV.current === xV.limit && JV[YV.name](JV.MessageLimitReached.replace(/%LIMIT%/g, "" + xV.limit).replace(/%TYPE%/g, YV.name ?? ""))
      }
      static _AddLogEntry(VV) {
        JV._LogCache = VV + JV._LogCache, JV.OnNewCacheEntry && JV.OnNewCacheEntry(VV)
      }
      static _FormatMessage(VV) {
        const eV = VV => VV < 10 ? "0" + VV : "" + VV,
          xV = new Date;
        return "[" + eV(xV.getHours()) + ":" + eV(xV.getMinutes()) + ":" + eV(xV.getSeconds()) + "]: " + VV
      }
      static _LogDisabled(VV, eV) {}
      static _LogEnabled() {
        let VV = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
          eV = arguments.length > 1 ? arguments[1] : void 0,
          xV = arguments.length > 2 ? arguments[2] : void 0;
        const YV = Array.isArray(eV) ? eV[0] : eV;
        if (void 0 !== xV && !JV._CheckLimit(YV, xV)) return;
        const UV = JV._FormatMessage(YV),
          yV = this._Levels[VV],
          pV = Array.isArray(eV) ? eV.slice(1) : [];
        yV.logFunc && yV.logFunc("BJS - " + UV, ...pV);
        const QV = `<div style='color:${yV.color}'>${UV}</div><br>`;
        JV._AddLogEntry(QV), JV._GenerateLimitMessage(YV, VV)
      }
      static get LogCache() {
        return JV._LogCache
      }
      static ClearLogCache() {
        JV._LogCache = "", JV._LogLimitOutputs = {}, JV.errorsCount = 0
      }
      static set LogLevels(VV) {
        JV.Log = JV._LogDisabled, JV.Warn = JV._LogDisabled, JV.Error = JV._LogDisabled;
        const eV = [JV.MessageLogLevel, JV.WarningLogLevel, JV.ErrorLogLevel];
        for (const xV of eV)
          if ((VV & xV) === xV) {
            const VV = this._Levels[xV];
            JV[VV.name] = JV._LogEnabled.bind(JV, xV)
          }
      }
    }
    JV.NoneLogLevel = 0, JV.MessageLogLevel = 1, JV.WarningLogLevel = 2, JV.ErrorLogLevel = 4, JV.AllLogLevel = 7, JV.MessageLimitReached = "Too many %TYPE%s (%LIMIT%), no more %TYPE%s will be reported for this message.", JV._LogCache = "", JV._LogLimitOutputs = {}, JV._Levels = [{}, {
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
    }], JV.errorsCount = 0, JV.Log = JV._LogEnabled.bind(JV, JV.MessageLogLevel), JV.Warn = JV._LogEnabled.bind(JV, JV.WarningLogLevel), JV.Error = JV._LogEnabled.bind(JV, JV.ErrorLogLevel)
  },
  39908: (VV, eV, xV) => {
    xV.d(eV, {
      d: () => yV
    });
    var JV = xV(38269),
      YV = xV(38303),
      UV = xV(39867);
    class yV {
      constructor() {
        this.direction1 = new JV.o(0, 1, 0), this.direction2 = new JV.o(0, 1, 0), this.minEmitBox = new JV.o(-.5, -.5, -.5), this.maxEmitBox = new JV.o(.5, .5, .5)
      }
      startDirectionFunction(VV, eV, xV, UV) {
        const yV = (0, YV.RandomRange)(this.direction1.x, this.direction2.x),
          pV = (0, YV.RandomRange)(this.direction1.y, this.direction2.y),
          QV = (0, YV.RandomRange)(this.direction1.z, this.direction2.z);
        if (UV) return eV.x = yV, eV.y = pV, void(eV.z = QV);
        JV.o.TransformNormalFromFloatsToRef(yV, pV, QV, VV, eV)
      }
      startPositionFunction(VV, eV, xV, UV) {
        const yV = (0, YV.RandomRange)(this.minEmitBox.x, this.maxEmitBox.x),
          pV = (0, YV.RandomRange)(this.minEmitBox.y, this.maxEmitBox.y),
          QV = (0, YV.RandomRange)(this.minEmitBox.z, this.maxEmitBox.z);
        if (UV) return eV.x = yV, eV.y = pV, void(eV.z = QV);
        JV.o.TransformCoordinatesFromFloatsToRef(yV, pV, QV, VV, eV)
      }
      clone() {
        const VV = new yV;
        return UV.d.DeepCopy(this, VV), VV
      }
      applyToShader(VV) {
        VV.setVector3("direction1", this.direction1), VV.setVector3("direction2", this.direction2), VV.setVector3("minEmitBox", this.minEmitBox), VV.setVector3("maxEmitBox", this.maxEmitBox)
      }
      buildUniformLayout(VV) {
        VV.addUniform("direction1", 3), VV.addUniform("direction2", 3), VV.addUniform("minEmitBox", 3), VV.addUniform("maxEmitBox", 3)
      }
      getEffectDefines() {
        return "#define BOXEMITTER"
      }
      getClassName() {
        return "BoxParticleEmitter"
      }
      serialize() {
        const VV = {};
        return VV.type = this.getClassName(), VV.direction1 = this.direction1.WYV(), VV.direction2 = this.direction2.WYV(), VV.minEmitBox = this.minEmitBox.WYV(), VV.maxEmitBox = this.maxEmitBox.WYV(), VV
      }
      parse(VV) {
        JV.o.FromArrayToRef(VV.direction1, 0, this.direction1), JV.o.FromArrayToRef(VV.direction2, 0, this.direction2), JV.o.FromArrayToRef(VV.minEmitBox, 0, this.minEmitBox), JV.o.FromArrayToRef(VV.maxEmitBox, 0, this.maxEmitBox)
      }
    }
  },
  39861: (VV, eV, xV) => {
    xV.d(eV, {
      e: () => pV,
      f: () => yV
    });
    var JV = xV(38269),
      YV = xV(38303),
      UV = xV(39867);
    class yV {
      constructor() {
        let VV = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
          eV = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
          xV = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1,
          YV = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
        this.radius = VV, this.height = eV, this.radiusRange = xV, this.directionRandomizer = YV, this._tempVector = JV.o.Zero()
      }
      startDirectionFunction(VV, eV, xV, UV, yV) {
        xV.position.subtractToRef(VV.getTranslation(), this._tempVector), this._tempVector.normalize(), JV.o.TransformNormalToRef(this._tempVector, yV, this._tempVector);
        const pV = (0, YV.RandomRange)(-this.directionRandomizer / 2, this.directionRandomizer / 2);
        let QV = Math.atan2(this._tempVector.x, this._tempVector.z);
        QV += (0, YV.RandomRange)(-Math.PI / 2, Math.PI / 2) * this.directionRandomizer, this._tempVector.y = pV, this._tempVector.x = Math.sin(QV), this._tempVector.z = Math.cos(QV), this._tempVector.normalize(), UV ? eV.iG(this._tempVector) : JV.o.TransformNormalFromFloatsToRef(this._tempVector.x, this._tempVector.y, this._tempVector.z, VV, eV)
      }
      startPositionFunction(VV, eV, xV, UV) {
        const yV = (0, YV.RandomRange)(-this.height / 2, this.height / 2),
          pV = (0, YV.RandomRange)(0, 2 * Math.PI),
          QV = (0, YV.RandomRange)((1 - this.radiusRange) * (1 - this.radiusRange), 1),
          nV = Math.sqrt(QV) * this.radius,
          wV = nV * Math.cos(pV),
          ZV = nV * Math.sin(pV);
        UV ? eV.FeV(wV, yV, ZV) : JV.o.TransformCoordinatesFromFloatsToRef(wV, yV, ZV, VV, eV)
      }
      clone() {
        const VV = new yV(this.radius, this.directionRandomizer);
        return UV.d.DeepCopy(this, VV), VV
      }
      applyToShader(VV) {
        VV.setFloat("radius", this.radius), VV.setFloat("height", this.height), VV.setFloat("radiusRange", this.radiusRange), VV.setFloat("directionRandomizer", this.directionRandomizer)
      }
      buildUniformLayout(VV) {
        VV.addUniform("radius", 1), VV.addUniform("height", 1), VV.addUniform("radiusRange", 1), VV.addUniform("directionRandomizer", 1)
      }
      getEffectDefines() {
        return "#define CYLINDEREMITTER"
      }
      getClassName() {
        return "CylinderParticleEmitter"
      }
      serialize() {
        const VV = {};
        return VV.type = this.getClassName(), VV.radius = this.radius, VV.height = this.height, VV.radiusRange = this.radiusRange, VV.directionRandomizer = this.directionRandomizer, VV
      }
      parse(VV) {
        this.radius = VV.radius, this.height = VV.height, this.radiusRange = VV.radiusRange, this.directionRandomizer = VV.directionRandomizer
      }
    }
    class pV extends yV {
      constructor() {
        let VV = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
          eV = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
          xV = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1,
          YV = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : new JV.o(0, 1, 0),
          UV = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : new JV.o(0, 1, 0);
        super(VV, eV, xV), this.direction1 = YV, this.direction2 = UV
      }
      startDirectionFunction(VV, eV, xV, UV) {
        const yV = (0, YV.RandomRange)(this.direction1.x, this.direction2.x),
          pV = (0, YV.RandomRange)(this.direction1.y, this.direction2.y),
          QV = (0, YV.RandomRange)(this.direction1.z, this.direction2.z);
        UV ? eV.FeV(yV, pV, QV) : JV.o.TransformNormalFromFloatsToRef(yV, pV, QV, VV, eV)
      }
      clone() {
        const VV = new pV(this.radius, this.height, this.radiusRange, this.direction1, this.direction2);
        return UV.d.DeepCopy(this, VV), VV
      }
      applyToShader(VV) {
        VV.setFloat("radius", this.radius), VV.setFloat("height", this.height), VV.setFloat("radiusRange", this.radiusRange), VV.setVector3("direction1", this.direction1), VV.setVector3("direction2", this.direction2)
      }
      buildUniformLayout(VV) {
        VV.addUniform("radius", 1), VV.addUniform("height", 1), VV.addUniform("radiusRange", 1), VV.addUniform("direction1", 3), VV.addUniform("direction2", 3)
      }
      getEffectDefines() {
        return "#define CYLINDEREMITTER\n#define DIRECTEDCYLINDEREMITTER"
      }
      getClassName() {
        return "CylinderDirectedParticleEmitter"
      }
      serialize() {
        const VV = super.serialize();
        return VV.direction1 = this.direction1.WYV(), VV.direction2 = this.direction2.WYV(), VV
      }
      parse(VV) {
        super.parse(VV), JV.o.FromArrayToRef(VV.direction1, 0, this.direction1), JV.o.FromArrayToRef(VV.direction2, 0, this.direction2)
      }
    }
  },
  39982: (VV, eV, xV) => {
    xV.d(eV, {
      e: () => ZV
    });
    const JV = .5 * (Math.sqrt(3) - 1),
      YV = (3 - Math.sqrt(3)) / 6,
      UV = 1 / 3,
      yV = 1 / 6,
      pV = (Math.sqrt(5) - 1) / 4,
      QV = (5 - Math.sqrt(5)) / 20,
      nV = new Float32Array([1, 1, 0, -1, 1, 0, 1, -1, 0, -1, -1, 0, 1, 0, 1, -1, 0, 1, 1, 0, -1, -1, 0, -1, 0, 1, 1, 0, -1, 1, 0, 1, -1, 0, -1, -1]),
      wV = new Float32Array([0, 1, 1, 1, 0, 1, 1, -1, 0, 1, -1, 1, 0, 1, -1, -1, 0, -1, 1, 1, 0, -1, 1, -1, 0, -1, -1, 1, 0, -1, -1, -1, 1, 0, 1, 1, 1, 0, 1, -1, 1, 0, -1, 1, 1, 0, -1, -1, -1, 0, 1, 1, -1, 0, 1, -1, -1, 0, -1, 1, -1, 0, -1, -1, 1, 1, 0, 1, 1, 1, 0, -1, 1, -1, 0, 1, 1, -1, 0, -1, -1, 1, 0, 1, -1, 1, 0, -1, -1, -1, 0, 1, -1, -1, 0, -1, 1, 1, 1, 0, 1, 1, -1, 0, 1, -1, 1, 0, 1, -1, -1, 0, -1, 1, 1, 0, -1, 1, -1, 0, -1, -1, 1, 0, -1, -1, -1, 0]);
    const ZV = class {
      constructor() {
        let VV = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Math.random;
        const eV = "function" == typeof VV ? VV : function(VV) {
          let eV = 0,
            xV = 0,
            JV = 0,
            YV = 1;
          const UV = function() {
            let VV = 4022871197;
            return function(eV) {
              eV = eV.toString();
              for (let xV = 0; xV < eV.length; xV++) {
                VV += eV.charCodeAt(xV);
                let JV = .02519603282416938 * VV;
                VV = JV >>> 0, JV -= VV, JV *= VV, VV = JV >>> 0, JV -= VV, VV += 4294967296 * JV
              }
              return 2.3283064365386963e-10 * (VV >>> 0)
            }
          }();
          eV = UV(" "), xV = UV(" "), JV = UV(" "), eV -= UV(VV), eV < 0 && (eV += 1);
          xV -= UV(VV), xV < 0 && (xV += 1);
          JV -= UV(VV), JV < 0 && (JV += 1);
          return function() {
            const VV = 2091639 * eV + 2.3283064365386963e-10 * YV;
            return eV = xV, xV = JV, JV = VV - (YV = 0 | VV)
          }
        }(VV);
        this.p = function(VV) {
          const eV = new Uint8Array(256);
          for (let xV = 0; xV < 256; xV++) eV[xV] = xV;
          for (let xV = 0; xV < 255; xV++) {
            const JV = xV + ~~(VV() * (256 - xV)),
              YV = eV[xV];
            eV[xV] = eV[JV], eV[JV] = YV
          }
          return eV
        }(eV), this.perm = new Uint8Array(512), this.permMod12 = new Uint8Array(512);
        for (let xV = 0; xV < 512; xV++) this.perm[xV] = this.p[255 & xV], this.permMod12[xV] = this.perm[xV] % 12
      }
      noise2D(VV, eV) {
        const xV = this.permMod12,
          UV = this.perm;
        let yV = 0,
          pV = 0,
          QV = 0;
        const wV = (VV + eV) * JV,
          ZV = Math.floor(VV + wV),
          vV = Math.floor(eV + wV),
          rV = (ZV + vV) * YV,
          kV = VV - (ZV - rV),
          bV = eV - (vV - rV);
        let EV, BV;
        kV > bV ? (EV = 1, BV = 0) : (EV = 0, BV = 1);
        const jV = kV - EV + YV,
          qV = bV - BV + YV,
          tV = kV - 1 + 2 * YV,
          FV = bV - 1 + 2 * YV,
          TV = 255 & ZV,
          PV = 255 & vV;
        let AV = .5 - kV * kV - bV * bV;
        if (AV >= 0) {
          const VV = 3 * xV[TV + UV[PV]];
          AV *= AV, yV = AV * AV * (nV[VV] * kV + nV[VV + 1] * bV)
        }
        let NV = .5 - jV * jV - qV * qV;
        if (NV >= 0) {
          const VV = 3 * xV[TV + EV + UV[PV + BV]];
          NV *= NV, pV = NV * NV * (nV[VV] * jV + nV[VV + 1] * qV)
        }
        let XV = .5 - tV * tV - FV * FV;
        if (XV >= 0) {
          const VV = 3 * xV[TV + 1 + UV[PV + 1]];
          XV *= XV, QV = XV * XV * (nV[VV] * tV + nV[VV + 1] * FV)
        }
        return 70 * (yV + pV + QV)
      }
      noise3D(VV, eV, xV) {
        const JV = this.permMod12,
          YV = this.perm;
        let pV, QV, wV, ZV;
        const vV = (VV + eV + xV) * UV,
          rV = Math.floor(VV + vV),
          kV = Math.floor(eV + vV),
          bV = Math.floor(xV + vV),
          EV = (rV + kV + bV) * yV,
          BV = VV - (rV - EV),
          jV = eV - (kV - EV),
          qV = xV - (bV - EV);
        let tV, FV, TV, PV, AV, NV;
        BV >= jV ? jV >= qV ? (tV = 1, FV = 0, TV = 0, PV = 1, AV = 1, NV = 0) : BV >= qV ? (tV = 1, FV = 0, TV = 0, PV = 1, AV = 0, NV = 1) : (tV = 0, FV = 0, TV = 1, PV = 1, AV = 0, NV = 1) : jV < qV ? (tV = 0, FV = 0, TV = 1, PV = 0, AV = 1, NV = 1) : BV < qV ? (tV = 0, FV = 1, TV = 0, PV = 0, AV = 1, NV = 1) : (tV = 0, FV = 1, TV = 0, PV = 1, AV = 1, NV = 0);
        const XV = BV - tV + yV,
          MV = jV - FV + yV,
          zV = qV - TV + yV,
          GV = BV - PV + 2 * yV,
          WV = jV - AV + 2 * yV,
          RV = qV - NV + 2 * yV,
          gV = BV - 1 + .5,
          DV = jV - 1 + .5,
          iV = qV - 1 + .5,
          CV = 255 & rV,
          aV = 255 & kV,
          oV = 255 & bV;
        let cV = .6 - BV * BV - jV * jV - qV * qV;
        if (cV < 0) pV = 0;
        else {
          const VV = 3 * JV[CV + YV[aV + YV[oV]]];
          cV *= cV, pV = cV * cV * (nV[VV] * BV + nV[VV + 1] * jV + nV[VV + 2] * qV)
        }
        let hV = .6 - XV * XV - MV * MV - zV * zV;
        if (hV < 0) QV = 0;
        else {
          const VV = 3 * JV[CV + tV + YV[aV + FV + YV[oV + TV]]];
          hV *= hV, QV = hV * hV * (nV[VV] * XV + nV[VV + 1] * MV + nV[VV + 2] * zV)
        }
        let lV = .6 - GV * GV - WV * WV - RV * RV;
        if (lV < 0) wV = 0;
        else {
          const VV = 3 * JV[CV + PV + YV[aV + AV + YV[oV + NV]]];
          lV *= lV, wV = lV * lV * (nV[VV] * GV + nV[VV + 1] * WV + nV[VV + 2] * RV)
        }
        let LV = .6 - gV * gV - DV * DV - iV * iV;
        if (LV < 0) ZV = 0;
        else {
          const VV = 3 * JV[CV + 1 + YV[aV + 1 + YV[oV + 1]]];
          LV *= LV, ZV = LV * LV * (nV[VV] * gV + nV[VV + 1] * DV + nV[VV + 2] * iV)
        }
        return 32 * (pV + QV + wV + ZV)
      }
      noise4D(VV, eV, xV, JV) {
        const YV = this.perm;
        let UV, yV, nV, ZV, vV;
        const rV = (VV + eV + xV + JV) * pV,
          kV = Math.floor(VV + rV),
          bV = Math.floor(eV + rV),
          EV = Math.floor(xV + rV),
          BV = Math.floor(JV + rV),
          jV = (kV + bV + EV + BV) * QV,
          qV = VV - (kV - jV),
          tV = eV - (bV - jV),
          FV = xV - (EV - jV),
          TV = JV - (BV - jV);
        let PV = 0,
          AV = 0,
          NV = 0,
          XV = 0;
        qV > tV ? PV++ : AV++, qV > FV ? PV++ : NV++, qV > TV ? PV++ : XV++, tV > FV ? AV++ : NV++, tV > TV ? AV++ : XV++, FV > TV ? NV++ : XV++;
        const MV = PV >= 3 ? 1 : 0,
          zV = AV >= 3 ? 1 : 0,
          GV = NV >= 3 ? 1 : 0,
          WV = XV >= 3 ? 1 : 0,
          RV = PV >= 2 ? 1 : 0,
          gV = AV >= 2 ? 1 : 0,
          DV = NV >= 2 ? 1 : 0,
          iV = XV >= 2 ? 1 : 0,
          CV = PV >= 1 ? 1 : 0,
          aV = AV >= 1 ? 1 : 0,
          oV = NV >= 1 ? 1 : 0,
          cV = XV >= 1 ? 1 : 0,
          hV = qV - MV + QV,
          lV = tV - zV + QV,
          LV = FV - GV + QV,
          fV = TV - WV + QV,
          mV = qV - RV + 2 * QV,
          KV = tV - gV + 2 * QV,
          HV = FV - DV + 2 * QV,
          uV = TV - iV + 2 * QV,
          sV = qV - CV + 3 * QV,
          SV = tV - aV + 3 * QV,
          IV = FV - oV + 3 * QV,
          dV = TV - cV + 3 * QV,
          OV = qV - 1 + 4 * QV,
          Ve = tV - 1 + 4 * QV,
          ee = FV - 1 + 4 * QV,
          xe = TV - 1 + 4 * QV,
          Je = 255 & kV,
          Ye = 255 & bV,
          Ue = 255 & EV,
          ye = 255 & BV;
        let pe = .6 - qV * qV - tV * tV - FV * FV - TV * TV;
        if (pe < 0) UV = 0;
        else {
          const VV = YV[Je + YV[Ye + YV[Ue + YV[ye]]]] % 32 * 4;
          pe *= pe, UV = pe * pe * (wV[VV] * qV + wV[VV + 1] * tV + wV[VV + 2] * FV + wV[VV + 3] * TV)
        }
        let Qe = .6 - hV * hV - lV * lV - LV * LV - fV * fV;
        if (Qe < 0) yV = 0;
        else {
          const VV = YV[Je + MV + YV[Ye + zV + YV[Ue + GV + YV[ye + WV]]]] % 32 * 4;
          Qe *= Qe, yV = Qe * Qe * (wV[VV] * hV + wV[VV + 1] * lV + wV[VV + 2] * LV + wV[VV + 3] * fV)
        }
        let ne = .6 - mV * mV - KV * KV - HV * HV - uV * uV;
        if (ne < 0) nV = 0;
        else {
          const VV = YV[Je + RV + YV[Ye + gV + YV[Ue + DV + YV[ye + iV]]]] % 32 * 4;
          ne *= ne, nV = ne * ne * (wV[VV] * mV + wV[VV + 1] * KV + wV[VV + 2] * HV + wV[VV + 3] * uV)
        }
        let we = .6 - sV * sV - SV * SV - IV * IV - dV * dV;
        if (we < 0) ZV = 0;
        else {
          const VV = YV[Je + CV + YV[Ye + aV + YV[Ue + oV + YV[ye + cV]]]] % 32 * 4;
          we *= we, ZV = we * we * (wV[VV] * sV + wV[VV + 1] * SV + wV[VV + 2] * IV + wV[VV + 3] * dV)
        }
        let Ze = .6 - OV * OV - Ve * Ve - ee * ee - xe * xe;
        if (Ze < 0) vV = 0;
        else {
          const VV = YV[Je + 1 + YV[Ye + 1 + YV[Ue + 1 + YV[ye + 1]]]] % 32 * 4;
          Ze *= Ze, vV = Ze * Ze * (wV[VV] * OV + wV[VV + 1] * Ve + wV[VV + 2] * ee + wV[VV + 3] * xe)
        }
        return 27 * (UV + yV + nV + ZV + vV)
      }
    }
  }
};
Object.freeze(modules);
for (const VV in modules) Object.freeze(modules[VV]);