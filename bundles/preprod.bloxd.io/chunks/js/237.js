/*! For license information please see fecih8.237.fc50134b.chunk.js.LICENSE.txt */
export const id = 237;
export const ids = [237];
export const modules = {
  40462: (UU, XU, zU) => {
    UU.exports = yU;
    var cU = zU(352);

    function yU(UU, XU) {
      if (!(this instanceof yU)) return new yU(UU, XU);
      var zU = cU.create();
      cU.add(zU, UU, XU), this.base = cU.min(cU.create(), UU, zU), this.vec = cU.clone(XU), this.max = cU.max(cU.create(), UU, zU), this.mag = cU.length(this.vec)
    }
    var QU = yU.prototype;
    QU.width = function() {
      return this.vec[0]
    }, QU.height = function() {
      return this.vec[1]
    }, QU.depth = function() {
      return this.vec[2]
    }, QU.x0 = function() {
      return this.base[0]
    }, QU.y0 = function() {
      return this.base[1]
    }, QU.z0 = function() {
      return this.base[2]
    }, QU.x1 = function() {
      return this.max[0]
    }, QU.y1 = function() {
      return this.max[1]
    }, QU.z1 = function() {
      return this.max[2]
    }, QU.translate = function(UU) {
      return cU.add(this.max, this.max, UU), cU.add(this.base, this.base, UU), this
    }, QU.setPosition = function(UU) {
      return cU.add(this.max, UU, this.vec), cU.copy(this.base, UU), this
    }, QU.expand = function(UU) {
      var XU = cU.create(),
        zU = cU.create();
      return cU.max(XU, UU.max, this.max), cU.min(zU, UU.base, this.base), cU.subtract(XU, XU, zU), new yU(zU, XU)
    }, QU.intersects = function(UU) {
      return !(UU.base[0] > this.max[0]) && (!(UU.base[1] > this.max[1]) && (!(UU.base[2] > this.max[2]) && (!(UU.max[0] < this.base[0]) && (!(UU.max[1] < this.base[1]) && !(UU.max[2] < this.base[2])))))
    }, QU.touches = function(UU) {
      var XU = this.union(UU);
      return null !== XU && (0 == XU.width() || 0 == XU.height() || 0 == XU.depth())
    }, QU.union = function(UU) {
      if (!this.intersects(UU)) return null;
      var XU = Math.max(UU.base[0], this.base[0]),
        zU = Math.max(UU.base[1], this.base[1]),
        cU = Math.max(UU.base[2], this.base[2]);
      return new yU([XU, zU, cU], [Math.min(UU.max[0], this.max[0]) - XU, Math.min(UU.max[1], this.max[1]) - zU, Math.min(UU.max[2], this.max[2]) - cU])
    }
  },
  40453: UU => {
    UU.exports = function(UU, XU, zU, cU, yU, QU) {
      var AU = +XU[0],
        FU = +XU[1],
        oU = +XU[2],
        DU = +zU[0],
        EU = +zU[1],
        YU = +zU[2],
        NU = Math.sqrt(DU * DU + EU * EU + YU * YU);
      if (0 === NU) throw new Error("Can't raycast along a zero vector");
      return function(UU, XU, zU, cU, yU, QU, AU, FU, oU, DU) {
        for (var EU = 0, YU = Math.floor, NU = 0 | YU(XU), IU = 0 | YU(zU), pU = 0 | YU(cU), aU = yU > 0 ? 1 : -1, tU = QU > 0 ? 1 : -1, gU = AU > 0 ? 1 : -1, kU = Math.abs(1 / yU), GU = Math.abs(1 / QU), BU = Math.abs(1 / AU), ZU = kU < 1 / 0 ? kU * (aU > 0 ? NU + 1 - XU : XU - NU) : 1 / 0, RU = GU < 1 / 0 ? GU * (tU > 0 ? IU + 1 - zU : zU - IU) : 1 / 0, PU = BU < 1 / 0 ? BU * (gU > 0 ? pU + 1 - cU : cU - pU) : 1 / 0, WU = -1; EU <= FU;) {
          var dU = UU(NU, IU, pU);
          if (dU) return oU && (oU[0] = XU + EU * yU, oU[1] = zU + EU * QU, oU[2] = cU + EU * AU), DU && (DU[0] = DU[1] = DU[2] = 0, 0 === WU && (DU[0] = -aU), 1 === WU && (DU[1] = -tU), 2 === WU && (DU[2] = -gU)), dU;
          ZU < RU ? ZU < PU ? (NU += aU, EU = ZU, ZU += kU, WU = 0) : (pU += gU, EU = PU, PU += BU, WU = 2) : RU < PU ? (IU += tU, EU = RU, RU += GU, WU = 1) : (pU += gU, EU = PU, PU += BU, WU = 2)
        }
        return oU && (oU[0] = XU + EU * yU, oU[1] = zU + EU * QU, oU[2] = cU + EU * AU), DU && (DU[0] = DU[1] = DU[2] = 0), 0
      }(UU, AU, FU, oU, DU /= NU, EU /= NU, YU /= NU, cU = "undefined" === typeof cU ? 64 : +cU, yU, QU)
    }
  },
  39930: (UU, XU, zU) => {
    zU.d(XU, {
      d: () => FU,
      f: () => QU
    });
    var cU = zU(4460);
    let yU = null;

    function QU(UU) {
      return null !== yU && UU === yU
    }

    function AU() {
      this.HJ = !1, this.stopPropagation = !1, this.MJ = !1, this.disabled = !1
    }
    class FU {
      constructor(UU, XU) {
        this.version = "0.7.0";
        var zU = Object.assign({}, new AU, XU || {});
        this.element = UU || document, this.HJ = !!zU.HJ, this.stopPropagation = !!zU.stopPropagation, this.MJ = !!zU.MJ, this.disabled = !!zU.disabled, this.filterEvents = (UU, XU) => !0, this.ignoreEvent = UU => !1, this.down = new cU.EventEmitter, this.up = new cU.EventEmitter, this.state = {}, this.vJ = {
          dx: 0,
          dy: 0,
          UzU: 0,
          XzU: 0,
          zzU: 0
        }, this.pressCount = {}, this.releaseCount = {}, this._keyBindmap = {}, this._keyStates = {}, this._bindPressCount = {}, this._touches = {
          lastX: 0,
          lastY: 0,
          currID: null
        }, "loading" !== document.readyState ? DU(this) : document.addEventListener("DOMContentLoaded", (UU => {
          DU(this)
        }), {
          once: !0
        })
      }
      bind(UU) {
        for (var XU = arguments.length, zU = new Array(XU > 1 ? XU - 1 : 0), cU = 1; cU < XU; cU++) zU[cU - 1] = arguments[cU];
        zU.forEach((XU => {
          var zU = this._keyBindmap[XU] || [];
          zU.includes(UU) || (zU.push(UU), this._keyBindmap[XU] = zU)
        })), this.state[UU] = !!this.state[UU], this.pressCount[UU] = this.pressCount[UU] || 0, this.releaseCount[UU] = this.releaseCount[UU] || 0
      }
      unbind(UU) {
        for (var XU in this._keyBindmap) {
          var zU = this._keyBindmap[XU],
            cU = zU.indexOf(UU);
          cU > -1 && zU.splice(cU, 1)
        }
      }
      getBindings() {
        var UU = {};
        for (var XU in this._keyBindmap) {
          this._keyBindmap[XU].forEach((zU => {
            UU[zU] = UU[zU] || [], UU[zU].push(XU)
          }))
        }
        return UU
      }
      LY() {
        oU(this.vJ), oU(this.pressCount), oU(this.releaseCount)
      }
    }

    function oU(UU) {
      for (var XU in UU) UU[XU] = 0
    }

    function DU(UU) {
      window.addEventListener("keydown", tU.bind(null, UU, !0), !1), window.addEventListener("keyup", tU.bind(null, UU, !1), !1);
      var XU = {
        passive: !0
      };
      UU.element.addEventListener("touchstart", IU.bind(void 0, UU), {
        passive: !1
      }), UU.element.addEventListener("touchend", aU.bind(void 0, UU), XU), UU.element.addEventListener("mousedown", gU.bind(null, UU, !0), XU), window.document.addEventListener("mouseup", gU.bind(null, UU, !1), XU), UU.element.addEventListener("touchmove", kU.bind(null, UU), XU), UU.element.addEventListener("mousemove", kU.bind(null, UU), XU), window.PointerEvent, UU.element.addEventListener("wheel", GU.bind(null, UU), XU), UU.element.addEventListener("contextmenu", BU.bind(null, UU), !1), window.addEventListener("blur", PU.bind(null, UU), !1)
    }
    var EU = 0,
      YU = 0,
      NU = null;

    function IU(UU, XU) {
      XU.preventDefault(), pU(XU)
    }

    function pU(UU) {
      let XU = !1;
      for (let zU = 0; zU < UU.touches.length; ++zU)
        if (UU.touches[zU].identifier === NU) {
          XU = !0;
          break
        } if (!XU) {
        const XU = UU.changedTouches[0];
        EU = XU.clientX, YU = XU.clientY, NU = XU.identifier
      }
    }

    function aU(UU, XU) {
      for (var zU = XU.changedTouches, cU = 0; cU < zU.length; ++cU) zU[cU].identifier === NU && (NU = null)
    }

    function tU(UU, XU, zU) {
      if (!UU.ignoreEvent(zU)) try {
        WU(UU, zU), XU && zU.isTrusted && !zU.repeat && UU._keyStates[zU.code] && dU(UU, zU.code)
      } finally {
        LU(zU.code, XU, UU, zU)
      }
    }

    function gU(UU, XU, zU) {
      if (!UU.ignoreEvent(zU)) try {
        WU(UU, zU)
      } finally {
        ! function(UU, XU, zU) {
          if ("pointerId" in zU)
            if (XU) {
              if (null !== UU._touches.currID) return;
              UU._touches.currID = zU.pointerId
            } else {
              if (UU._touches.currID !== zU.pointerId) return;
              UU._touches.currID = null
            } var cU = "button" in zU ? zU.button + 1 : 1;
          LU("Mouse" + cU, XU, UU, zU)
        }(UU, XU, zU)
      }
    }

    function kU(UU, XU) {
      var zU = XU.movementX || XU.mozMovementX || 0,
        cU = XU.movementY || XU.mozMovementY || 0;
      if (XU.touches && 0 === (zU | cU)) {
        var yU = function(UU) {
          pU(UU);
          for (let XU = 0; XU < UU.changedTouches.length; ++XU)
            if (UU.changedTouches[XU].identifier == NU) {
              const zU = UU.changedTouches[XU],
                cU = [zU.clientX - EU, zU.clientY - YU];
              return EU = zU.clientX, YU = zU.clientY, cU
            } return console.error(`Did not find touch id ${NU}`), [0, 0]
        }(XU);
        zU = yU[0], cU = yU[1]
      }
      UU.vJ.dx += zU, UU.vJ.dy += cU
    }

    function GU(UU, XU) {
      WU(UU, XU);
      var zU = 1;
      switch (XU.deltaMode) {
        case 0:
          zU = 1;
          break;
        case 1:
          zU = 12;
          break;
        case 2:
          zU = UU.element.clientHeight || window.innerHeight
      }
      UU.vJ.UzU += (XU.deltaX || 0) * zU, UU.vJ.XzU += (XU.deltaY || 0) * zU, UU.vJ.zzU += (XU.deltaZ || 0) * zU
    }

    function BU(UU, XU) {
      if (!UU.MJ) return XU.preventDefault(), !1
    }
    var ZU = {
      AltLeft: "altKey",
      AltRight: "altKey",
      ControlLeft: "ctrlKey",
      ControlRight: "ctrlKey",
      ShiftLeft: "shiftKey",
      ShiftRight: "shiftKey",
      MetaLeft: "metaKey",
      MetaRight: "metaKey"
    };

    function RU(UU, XU) {
      return !!UU[ZU[XU]] || ("AltRight" === XU || "ControlLeft" === XU) && "function" === typeof UU.getModifierState && !0 === UU.getModifierState("AltGraph")
    }

    function PU(UU, XU) {
      for (var zU in UU._modifiersHeldThroughBlur = {}, ZU) UU._keyStates[zU] && (UU._modifiersHeldThroughBlur[zU] = !0);
      XU && XU.isTrusted && function() {
        try {
          return window.self !== window.top
        } catch (UU) {
          return !0
        }
      }() && (clearTimeout(UU._blurRelease), UU._blurRelease = setTimeout((function() {
        if (!document.hasFocus())
          for (var XU in UU._modifiersHeldThroughBlur = {}, UU._keyStates) UU._keyStates[XU] && !/^Mouse\d/.test(XU) && dU(UU, XU)
      }), 0))
    }

    function WU(UU, XU) {
      var zU = UU._modifiersHeldThroughBlur;
      if (zU && XU.isTrusted && document.hasFocus())
        for (var cU in zU) delete zU[cU], UU._keyStates[cU] && cU !== XU.code && (RU(XU, cU) || dU(UU, cU))
    }

    function dU(UU, XU) {
      const zU = {
          code: XU,
          preventDefault: () => {},
          stopPropagation: () => {}
        },
        cU = yU;
      yU = zU;
      try {
        LU(XU, !1, UU, zU)
      } finally {
        yU = cU
      }
    }

    function LU(UU, XU, zU, cU) {
      var yU = zU._keyBindmap[UU];
      yU && (eU(zU._keyStates[UU], XU) && (zU._keyStates[UU] = XU, yU.forEach((UU => {
        (!zU.filterEvents || zU.filterEvents(cU, UU)) && function(UU, XU, zU, cU) {
          var yU = XU ? zU.pressCount : zU.releaseCount;
          yU[UU] = (yU[UU] || 0) + 1;
          var QU = zU._bindPressCount[UU] || 0;
          (QU += XU ? 1 : -1) < 0 && (QU = 0);
          zU._bindPressCount[UU] = QU;
          var AU = zU.state[UU];
          if (eU(AU, QU)) {
            zU.state[UU] = QU > 0;
            var FU = XU ? zU.down : zU.up;
            zU.disabled || FU.emit(UU, cU)
          }
        }(UU, XU, zU, cU)
      }))), "button" in cU || (zU.HJ && !cU.defaultPrevented && cU.preventDefault(), zU.stopPropagation && cU.stopPropagation()))
    }

    function eU(UU, XU) {
      return UU ? !XU : XU
    }
  },
  37250: (UU, XU) => {
    function zU(UU) {
      if (UU && "object" === typeof UU) {
        var XU = UU.which || UU.keyCode || UU.charCode;
        XU && (UU = XU)
      }
      if ("number" === typeof UU) return AU[UU];
      var zU, QU = String(UU);
      return (zU = cU[QU.toLowerCase()]) ? zU : (zU = yU[QU.toLowerCase()]) || (1 === QU.length ? QU.charCodeAt(0) : void 0)
    }
    zU.isEventKey = function(UU, XU) {
      if (UU && "object" === typeof UU) {
        var zU = UU.which || UU.keyCode || UU.charCode;
        if (null === zU || void 0 === zU) return !1;
        if ("string" === typeof XU) {
          var QU;
          if (QU = cU[XU.toLowerCase()]) return QU === zU;
          if (QU = yU[XU.toLowerCase()]) return QU === zU
        } else if ("number" === typeof XU) return XU === zU;
        return !1
      }
    };
    var cU = (XU = UU.exports = zU).code = XU.codes = {
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
      yU = XU.aliases = {
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
    for (QU = 97; QU < 123; QU++) cU[String.fromCharCode(QU)] = QU - 32;
    for (var QU = 48; QU < 58; QU++) cU[QU - 48] = QU;
    for (QU = 1; QU < 13; QU++) cU["f" + QU] = QU + 111;
    for (QU = 0; QU < 10; QU++) cU["numpad " + QU] = QU + 96;
    var AU = XU.names = XU.title = {};
    for (QU in cU) AU[cU[QU]] = QU;
    for (var FU in yU) cU[FU] = yU[FU]
  },
  40443: (UU, XU, zU) => {
    zU.d(XU, {
      d: () => cU
    });
    class cU {
      constructor() {
        let UU = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
          XU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 10;
        this.YV = !1, this.tV = !1, this.bq = 30, this.zV = 0, this.GV = 100, this.Tt = !1, this.fullscreen = !1, this.aG = function(UU) {}, this.RV = function(UU, XU, zU) {}, this.wY = function() {}, this.QG = function() {}, this.wV = function() {}, this.onFullscreenChanged = function() {}, this.onPointerLockError = function(UU) {}, this._data = new yU(XU),
          function(UU) {
            if ("loading" === document.readyState) {
              var XU = () => {
                document.removeEventListener("readystatechange", XU), UU()
              };
              document.addEventListener("readystatechange", XU)
            } else setTimeout(UU, 0)
          }((() => {
            ! function(UU) {
              var XU = UU._data,
                zU = XU.nowObject.now();
              XU.lastTickStarted = zU, XU.lastFrameStarted = zU, XU.lastRenderStarted = zU, XU.frameCB = () => function(UU) {
                var XU = UU._data;
                requestAnimationFrame(XU.frameCB), FU(UU);
                var zU = XU.nowObject.now(),
                  cU = zU - XU.lastFrameStarted;
                if (XU.lastFrameStarted = zU, UU.zV > 0) {
                  XU.renderAccum += cU;
                  var yU = 1e3 / UU.zV;
                  if (XU.renderAccum < yU) return;
                  XU.renderAccum -= yU, XU.renderAccum > yU && (XU.renderAccum = yU)
                }
                var QU = zU - XU.lastRenderStarted;
                XU.lastRenderStarted = zU;
                var AU = 1e3 / UU.bq,
                  oU = (zU - XU.lastTickStarted) / AU;
                oU < 0 && (oU = 0);
                UU.RV(QU, oU, AU), setTimeout(FU, 0, UU, !0)
              }(UU), XU.intervalCB = () => FU(UU), requestAnimationFrame(XU.frameCB), XU.pollTime > 0 && (XU.intervalID = setInterval(XU.intervalCB, Math.max(XU.pollTime, 1e3 / UU.bq / 2)))
            }(this),
            function(UU, XU) {
              if (!XU) return;
              var zU = !1,
                cU = !1,
                yU = UU => {
                  if (!!UU !== (zU = XU === document.pointerLockElement))
                    if (UU) {
                      var cU = XU.requestPointerLock();
                      cU && cU.catch && cU.catch((UU => {}))
                    } else document.exitPointerLock()
                },
                QU = UU => {
                  !!UU !== (cU = XU === document.fullscreenElement) && (UU ? XU.requestFullscreen ? XU.requestFullscreen() : XU.webkitRequestFullscreen && XU.webkitRequestFullscreen() : document.exitFullscreen ? document.exitFullscreen() : document.webkitExitFullscreen && document.webkitExitFullscreen())
                };
              document.addEventListener("pointerlockchange", (cU => {
                zU = XU === document.pointerLockElement, UU.wV(zU)
              })), document.addEventListener("fullscreenchange", (zU => {
                cU = XU === document.fullscreenElement, UU.onFullscreenChanged(cU)
              })), document.addEventListener("pointerlockerror", (cU => {
                zU = XU === document.pointerLockElement, UU.onPointerLockError(cU)
              })), Object.defineProperty(UU, "Tt", {
                get: () => zU,
                set: yU
              }), Object.defineProperty(UU, "fullscreen", {
                get: () => cU,
                set: QU
              }), XU.addEventListener("click", (XU => {
                UU.YV && yU(!0), UU.tV && QU(!0)
              }));
              var AU = () => UU.QG();
              if (window.ResizeObserver) {
                new ResizeObserver(AU).observe(XU)
              } else window.addEventListener("resize", AU)
            }(this, UU), this.wY()
          }))
      }
    }

    function yU() {
      let UU = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 10;
      this.nowObject = performance || Date, this.pollTime = UU, this.renderAccum = 0, this.lastTickStarted = 0, this.lastFrameStarted = 0, this.lastRenderStarted = 0, this.avgTickTime = 2, this.frameCB = null, this.intervalCB = null, this.intervalID = -1
    }
    var QU = 3,
      AU = 20;

    function FU(UU) {
      for (var XU = UU._data, zU = 1e3 / UU.bq, cU = XU.nowObject.now() + AU, yU = 0; XU.nowObject.now() >= XU.lastTickStarted + zU && XU.nowObject.now() < cU && ++yU <= QU;) UU.aG(zU), XU.lastTickStarted += zU;
      var FU = 5 * (zU + 5),
        oU = XU.nowObject.now();
      if (oU - XU.lastTickStarted > FU)
        for (; oU >= XU.lastTickStarted + zU;) XU.lastTickStarted += zU
    }
  },
  37429: (UU, XU, zU) => {
    zU.d(XU, {
      e: () => AU
    });
    var cU = zU(61);
    const yU = cU.useLayoutEffect;
    const QU = function(UU) {
      var XU = (0, cU.useRef)(UU);
      return yU((function() {
        XU.current = UU
      })), XU
    };
    var AU = function(UU) {
      var XU = QU(UU);
      (0, cU.useEffect)((function() {
        var UU = function(UU) {
          var zU;
          if (null != XU.current && (zU = XU.current(UU)), UU.defaultPrevented && (UU.returnValue = ""), "string" === typeof zU) return UU.returnValue = zU, zU
        };
        return window.addEventListener("beforeunload", UU),
          function() {
            window.removeEventListener("beforeunload", UU)
          }
      }), [])
    }
  },
  37301: UU => {
    var XU, zU = "undefined" !== typeof window ? window.navigator.userAgent : "",
      cU = /OS X/.test(zU),
      yU = /Opera/.test(zU),
      QU = !/like Gecko/.test(zU) && !yU,
      AU = UU.exports = {
        0: cU ? "<menu>" : "<UNK>",
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
        93: cU ? "<meta>" : "<menu>",
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
        173: cU && QU ? "-" : "<volume-mute>",
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
        231: yU ? "`" : "<unicode>",
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
    for (XU = 58; XU < 65; ++XU) AU[XU] = String.fromCharCode(XU);
    for (XU = 48; XU < 58; ++XU) AU[XU] = XU - 48 + "";
    for (XU = 65; XU < 91; ++XU) AU[XU] = String.fromCharCode(XU);
    for (XU = 96; XU < 106; ++XU) AU[XU] = "<num-" + (XU - 96) + ">";
    for (XU = 112; XU < 136; ++XU) AU[XU] = "F" + (XU - 111)
  },
  39819: (UU, XU, zU) => {
    function cU(UU, XU, zU, cU, yU) {
      var QU = {};
      return Object.keys(cU).forEach((function(UU) {
        QU[UU] = cU[UU]
      })), QU.enumerable = !!QU.enumerable, QU.configurable = !!QU.configurable, ("value" in QU || QU.initializer) && (QU.writable = !0), QU = zU.slice().reverse().reduce((function(zU, cU) {
        return cU(UU, XU, zU) || zU
      }), QU), yU && void 0 !== QU.initializer && (QU.value = QU.initializer ? QU.initializer.call(yU) : void 0, QU.initializer = void 0), void 0 === QU.initializer && (Object.defineProperty(UU, XU, QU), QU = null), QU
    }
    zU.d(XU, {
      d: () => cU
    })
  },
  39812: (UU, XU, zU) => {
    function cU(UU, XU, zU, cU) {
      zU && Object.defineProperty(UU, XU, {
        enumerable: zU.enumerable,
        configurable: zU.configurable,
        writable: zU.writable,
        value: zU.initializer ? zU.initializer.call(cU) : void 0
      })
    }
    zU.d(XU, {
      c: () => cU
    })
  },
  39486: (UU, XU, zU) => {
    zU.d(XU, {
      c: () => QU
    });
    var cU = zU(39493);
    const yU = (UU, XU, zU) => UU ? UU.getClassName && "Mesh" === UU.getClassName() ? null : !UU.getClassName || "SubMesh" !== UU.getClassName() && "PhysicsBody" !== UU.getClassName() ? UU.clone ? UU.clone() : Array.isArray(UU) ? UU.slice() : zU && "object" === typeof UU ? {
      ...UU
    } : null : UU.clone(XU) : null;
    class QU {
      static DeepCopy(UU, XU, zU, QU) {
        let AU = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
        const FU = function(UU) {
          const XU = [];
          do {
            const zU = Object.getOwnPropertyNames(UU);
            for (const UU of zU) - 1 === XU.indexOf(UU) && XU.push(UU)
          } while (UU = Object.getPrototypeOf(UU));
          return XU
        }(UU);
        for (const DU of FU) {
          if ("_" === DU[0] && (!QU || -1 === QU.indexOf(DU))) continue;
          if (DU.endsWith("Observable")) continue;
          if (zU && -1 !== zU.indexOf(DU)) continue;
          const FU = UU[DU],
            EU = typeof FU;
          if ("function" !== EU) try {
            if ("object" === EU)
              if (FU instanceof Uint8Array) XU[DU] = Uint8Array.from(FU);
              else if (FU instanceof Array) {
              if (XU[DU] = [], FU.length > 0)
                if ("object" == typeof FU[0])
                  for (let UU = 0; UU < FU.length; UU++) {
                    const zU = yU(FU[UU], XU, AU); - 1 === XU[DU].indexOf(zU) && XU[DU].push(zU)
                  } else XU[DU] = FU.slice(0)
            } else XU[DU] = yU(FU, XU, AU);
            else XU[DU] = FU
          } catch (oU) {
            cU.b.Warn(oU.message)
          }
        }
      }
    }
  },
  39519: (UU, XU, zU) => {
    zU.d(XU, {
      c: () => yU,
      d: () => QU,
      e: () => AU,
      g: () => FU
    });
    var cU = zU(37923);
    class yU {
      constructor(UU, XU, zU) {
        this.gradient = UU, this.color1 = XU, this.color2 = zU
      }
      getColorToRef(UU) {
        this.color2 ? cU.e.LerpToRef(this.color1, this.color2, Math.random(), UU) : UU.YL(this.color1)
      }
    }
    class QU {
      constructor(UU, XU) {
        this.gradient = UU, this.color = XU
      }
    }
    class AU {
      constructor(UU, XU, zU) {
        this.gradient = UU, this.factor1 = XU, this.factor2 = zU
      }
      getFactor() {
        return void 0 === this.factor2 || this.factor2 === this.factor1 ? this.factor1 : this.factor1 + (this.factor2 - this.factor1) * Math.random()
      }
    }
    class FU {
      static GetCurrentGradient(UU, XU, zU) {
        if (XU[0].gradient > UU) return void zU(XU[0], XU[0], 1);
        for (let yU = 0; yU < XU.length - 1; yU++) {
          const cU = XU[yU],
            QU = XU[yU + 1];
          if (UU >= cU.gradient && UU <= QU.gradient) {
            return void zU(cU, QU, (UU - cU.gradient) / (QU.gradient - cU.gradient))
          }
        }
        const cU = XU.length - 1;
        zU(XU[cU], XU[cU], 1)
      }
    }
  },
  39493: (UU, XU, zU) => {
    zU.d(XU, {
      b: () => cU
    });
    class cU {
      static _CheckLimit(UU, XU) {
        let zU = cU._LogLimitOutputs[UU];
        return zU ? zU.current++ : (zU = {
          limit: XU,
          current: 1
        }, cU._LogLimitOutputs[UU] = zU), zU.current <= zU.limit
      }
      static _GenerateLimitMessage(UU) {
        let XU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
        const zU = cU._LogLimitOutputs[UU];
        if (!zU || !cU.MessageLimitReached) return;
        const yU = this._Levels[XU];
        zU.current === zU.limit && cU[yU.name](cU.MessageLimitReached.replace(/%LIMIT%/g, "" + zU.limit).replace(/%TYPE%/g, yU.name ?? ""))
      }
      static _AddLogEntry(UU) {
        cU._LogCache = UU + cU._LogCache, cU.OnNewCacheEntry && cU.OnNewCacheEntry(UU)
      }
      static _FormatMessage(UU) {
        const XU = UU => UU < 10 ? "0" + UU : "" + UU,
          zU = new Date;
        return "[" + XU(zU.getHours()) + ":" + XU(zU.getMinutes()) + ":" + XU(zU.getSeconds()) + "]: " + UU
      }
      static _LogDisabled(UU, XU) {}
      static _LogEnabled() {
        let UU = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
          XU = arguments.length > 1 ? arguments[1] : void 0,
          zU = arguments.length > 2 ? arguments[2] : void 0;
        const yU = Array.isArray(XU) ? XU[0] : XU;
        if (void 0 !== zU && !cU._CheckLimit(yU, zU)) return;
        const QU = cU._FormatMessage(yU),
          AU = this._Levels[UU],
          FU = Array.isArray(XU) ? XU.slice(1) : [];
        AU.logFunc && AU.logFunc("BJS - " + QU, ...FU);
        const oU = `<div style='color:${AU.color}'>${QU}</div><br>`;
        cU._AddLogEntry(oU), cU._GenerateLimitMessage(yU, UU)
      }
      static get LogCache() {
        return cU._LogCache
      }
      static ClearLogCache() {
        cU._LogCache = "", cU._LogLimitOutputs = {}, cU.errorsCount = 0
      }
      static set LogLevels(UU) {
        cU.Log = cU._LogDisabled, cU.Warn = cU._LogDisabled, cU.Error = cU._LogDisabled;
        const XU = [cU.MessageLogLevel, cU.WarningLogLevel, cU.ErrorLogLevel];
        for (const zU of XU)
          if ((UU & zU) === zU) {
            const UU = this._Levels[zU];
            cU[UU.name] = cU._LogEnabled.bind(cU, zU)
          }
      }
    }
    cU.NoneLogLevel = 0, cU.MessageLogLevel = 1, cU.WarningLogLevel = 2, cU.ErrorLogLevel = 4, cU.AllLogLevel = 7, cU.MessageLimitReached = "Too many %TYPE%s (%LIMIT%), no more %TYPE%s will be reported for this message.", cU._LogCache = "", cU._LogLimitOutputs = {}, cU._Levels = [{}, {
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
    }], cU.errorsCount = 0, cU.Log = cU._LogEnabled.bind(cU, cU.MessageLogLevel), cU.Warn = cU._LogEnabled.bind(cU, cU.WarningLogLevel), cU.Error = cU._LogEnabled.bind(cU, cU.ErrorLogLevel)
  },
  39525: (UU, XU, zU) => {
    zU.d(XU, {
      e: () => AU
    });
    var cU = zU(37819),
      yU = zU(37855),
      QU = zU(39486);
    class AU {
      constructor() {
        this.direction1 = new cU.q(0, 1, 0), this.direction2 = new cU.q(0, 1, 0), this.minEmitBox = new cU.q(-.5, -.5, -.5), this.maxEmitBox = new cU.q(.5, .5, .5)
      }
      startDirectionFunction(UU, XU, zU, QU) {
        const AU = (0, yU.RandomRange)(this.direction1.x, this.direction2.x),
          FU = (0, yU.RandomRange)(this.direction1.y, this.direction2.y),
          oU = (0, yU.RandomRange)(this.direction1.z, this.direction2.z);
        if (QU) return XU.x = AU, XU.y = FU, void(XU.z = oU);
        cU.q.TransformNormalFromFloatsToRef(AU, FU, oU, UU, XU)
      }
      startPositionFunction(UU, XU, zU, QU) {
        const AU = (0, yU.RandomRange)(this.minEmitBox.x, this.maxEmitBox.x),
          FU = (0, yU.RandomRange)(this.minEmitBox.y, this.maxEmitBox.y),
          oU = (0, yU.RandomRange)(this.minEmitBox.z, this.maxEmitBox.z);
        if (QU) return XU.x = AU, XU.y = FU, void(XU.z = oU);
        cU.q.TransformCoordinatesFromFloatsToRef(AU, FU, oU, UU, XU)
      }
      clone() {
        const UU = new AU;
        return QU.c.DeepCopy(this, UU), UU
      }
      applyToShader(UU) {
        UU.setVector3("direction1", this.direction1), UU.setVector3("direction2", this.direction2), UU.setVector3("minEmitBox", this.minEmitBox), UU.setVector3("maxEmitBox", this.maxEmitBox)
      }
      buildUniformLayout(UU) {
        UU.addUniform("direction1", 3), UU.addUniform("direction2", 3), UU.addUniform("minEmitBox", 3), UU.addUniform("maxEmitBox", 3)
      }
      getEffectDefines() {
        return "#define BOXEMITTER"
      }
      getClassName() {
        return "BoxParticleEmitter"
      }
      serialize() {
        const UU = {};
        return UU.type = this.getClassName(), UU.direction1 = this.direction1.cyU(), UU.direction2 = this.direction2.cyU(), UU.minEmitBox = this.minEmitBox.cyU(), UU.maxEmitBox = this.maxEmitBox.cyU(), UU
      }
      parse(UU) {
        cU.q.FromArrayToRef(UU.direction1, 0, this.direction1), cU.q.FromArrayToRef(UU.direction2, 0, this.direction2), cU.q.FromArrayToRef(UU.minEmitBox, 0, this.minEmitBox), cU.q.FromArrayToRef(UU.maxEmitBox, 0, this.maxEmitBox)
      }
    }
  },
  39484: (UU, XU, zU) => {
    zU.d(XU, {
      b: () => FU,
      f: () => AU
    });
    var cU = zU(37819),
      yU = zU(37855),
      QU = zU(39486);
    class AU {
      constructor() {
        let UU = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
          XU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
          zU = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1,
          yU = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
        this.radius = UU, this.height = XU, this.radiusRange = zU, this.directionRandomizer = yU, this._tempVector = cU.q.Zero()
      }
      startDirectionFunction(UU, XU, zU, QU, AU) {
        zU.position.subtractToRef(UU.getTranslation(), this._tempVector), this._tempVector.normalize(), cU.q.TransformNormalToRef(this._tempVector, AU, this._tempVector);
        const FU = (0, yU.RandomRange)(-this.directionRandomizer / 2, this.directionRandomizer / 2);
        let oU = Math.atan2(this._tempVector.x, this._tempVector.z);
        oU += (0, yU.RandomRange)(-Math.PI / 2, Math.PI / 2) * this.directionRandomizer, this._tempVector.y = FU, this._tempVector.x = Math.sin(oU), this._tempVector.z = Math.cos(oU), this._tempVector.normalize(), QU ? XU.YL(this._tempVector) : cU.q.TransformNormalFromFloatsToRef(this._tempVector.x, this._tempVector.y, this._tempVector.z, UU, XU)
      }
      startPositionFunction(UU, XU, zU, QU) {
        const AU = (0, yU.RandomRange)(-this.height / 2, this.height / 2),
          FU = (0, yU.RandomRange)(0, 2 * Math.PI),
          oU = (0, yU.RandomRange)((1 - this.radiusRange) * (1 - this.radiusRange), 1),
          DU = Math.sqrt(oU) * this.radius,
          EU = DU * Math.cos(FU),
          YU = DU * Math.sin(FU);
        QU ? XU.sUU(EU, AU, YU) : cU.q.TransformCoordinatesFromFloatsToRef(EU, AU, YU, UU, XU)
      }
      clone() {
        const UU = new AU(this.radius, this.directionRandomizer);
        return QU.c.DeepCopy(this, UU), UU
      }
      applyToShader(UU) {
        UU.setFloat("radius", this.radius), UU.setFloat("height", this.height), UU.setFloat("radiusRange", this.radiusRange), UU.setFloat("directionRandomizer", this.directionRandomizer)
      }
      buildUniformLayout(UU) {
        UU.addUniform("radius", 1), UU.addUniform("height", 1), UU.addUniform("radiusRange", 1), UU.addUniform("directionRandomizer", 1)
      }
      getEffectDefines() {
        return "#define CYLINDEREMITTER"
      }
      getClassName() {
        return "CylinderParticleEmitter"
      }
      serialize() {
        const UU = {};
        return UU.type = this.getClassName(), UU.radius = this.radius, UU.height = this.height, UU.radiusRange = this.radiusRange, UU.directionRandomizer = this.directionRandomizer, UU
      }
      parse(UU) {
        this.radius = UU.radius, this.height = UU.height, this.radiusRange = UU.radiusRange, this.directionRandomizer = UU.directionRandomizer
      }
    }
    class FU extends AU {
      constructor() {
        let UU = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
          XU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
          zU = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1,
          yU = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : new cU.q(0, 1, 0),
          QU = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : new cU.q(0, 1, 0);
        super(UU, XU, zU), this.direction1 = yU, this.direction2 = QU
      }
      startDirectionFunction(UU, XU, zU, QU) {
        const AU = (0, yU.RandomRange)(this.direction1.x, this.direction2.x),
          FU = (0, yU.RandomRange)(this.direction1.y, this.direction2.y),
          oU = (0, yU.RandomRange)(this.direction1.z, this.direction2.z);
        QU ? XU.sUU(AU, FU, oU) : cU.q.TransformNormalFromFloatsToRef(AU, FU, oU, UU, XU)
      }
      clone() {
        const UU = new FU(this.radius, this.height, this.radiusRange, this.direction1, this.direction2);
        return QU.c.DeepCopy(this, UU), UU
      }
      applyToShader(UU) {
        UU.setFloat("radius", this.radius), UU.setFloat("height", this.height), UU.setFloat("radiusRange", this.radiusRange), UU.setVector3("direction1", this.direction1), UU.setVector3("direction2", this.direction2)
      }
      buildUniformLayout(UU) {
        UU.addUniform("radius", 1), UU.addUniform("height", 1), UU.addUniform("radiusRange", 1), UU.addUniform("direction1", 3), UU.addUniform("direction2", 3)
      }
      getEffectDefines() {
        return "#define CYLINDEREMITTER\n#define DIRECTEDCYLINDEREMITTER"
      }
      getClassName() {
        return "CylinderDirectedParticleEmitter"
      }
      serialize() {
        const UU = super.serialize();
        return UU.direction1 = this.direction1.cyU(), UU.direction2 = this.direction2.cyU(), UU
      }
      parse(UU) {
        super.parse(UU), cU.q.FromArrayToRef(UU.direction1, 0, this.direction1), cU.q.FromArrayToRef(UU.direction2, 0, this.direction2)
      }
    }
  },
  39617: (UU, XU, zU) => {
    zU.d(XU, {
      b: () => YU
    });
    const cU = .5 * (Math.sqrt(3) - 1),
      yU = (3 - Math.sqrt(3)) / 6,
      QU = 1 / 3,
      AU = 1 / 6,
      FU = (Math.sqrt(5) - 1) / 4,
      oU = (5 - Math.sqrt(5)) / 20,
      DU = new Float32Array([1, 1, 0, -1, 1, 0, 1, -1, 0, -1, -1, 0, 1, 0, 1, -1, 0, 1, 1, 0, -1, -1, 0, -1, 0, 1, 1, 0, -1, 1, 0, 1, -1, 0, -1, -1]),
      EU = new Float32Array([0, 1, 1, 1, 0, 1, 1, -1, 0, 1, -1, 1, 0, 1, -1, -1, 0, -1, 1, 1, 0, -1, 1, -1, 0, -1, -1, 1, 0, -1, -1, -1, 1, 0, 1, 1, 1, 0, 1, -1, 1, 0, -1, 1, 1, 0, -1, -1, -1, 0, 1, 1, -1, 0, 1, -1, -1, 0, -1, 1, -1, 0, -1, -1, 1, 1, 0, 1, 1, 1, 0, -1, 1, -1, 0, 1, 1, -1, 0, -1, -1, 1, 0, 1, -1, 1, 0, -1, -1, -1, 0, 1, -1, -1, 0, -1, 1, 1, 1, 0, 1, 1, -1, 0, 1, -1, 1, 0, 1, -1, -1, 0, -1, 1, 1, 0, -1, 1, -1, 0, -1, -1, 1, 0, -1, -1, -1, 0]);
    const YU = class {
      constructor() {
        let UU = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Math.random;
        const XU = "function" == typeof UU ? UU : function(UU) {
          let XU = 0,
            zU = 0,
            cU = 0,
            yU = 1;
          const QU = function() {
            let UU = 4022871197;
            return function(XU) {
              XU = XU.toString();
              for (let zU = 0; zU < XU.length; zU++) {
                UU += XU.charCodeAt(zU);
                let cU = .02519603282416938 * UU;
                UU = cU >>> 0, cU -= UU, cU *= UU, UU = cU >>> 0, cU -= UU, UU += 4294967296 * cU
              }
              return 2.3283064365386963e-10 * (UU >>> 0)
            }
          }();
          XU = QU(" "), zU = QU(" "), cU = QU(" "), XU -= QU(UU), XU < 0 && (XU += 1);
          zU -= QU(UU), zU < 0 && (zU += 1);
          cU -= QU(UU), cU < 0 && (cU += 1);
          return function() {
            const UU = 2091639 * XU + 2.3283064365386963e-10 * yU;
            return XU = zU, zU = cU, cU = UU - (yU = 0 | UU)
          }
        }(UU);
        this.p = function(UU) {
          const XU = new Uint8Array(256);
          for (let zU = 0; zU < 256; zU++) XU[zU] = zU;
          for (let zU = 0; zU < 255; zU++) {
            const cU = zU + ~~(UU() * (256 - zU)),
              yU = XU[zU];
            XU[zU] = XU[cU], XU[cU] = yU
          }
          return XU
        }(XU), this.perm = new Uint8Array(512), this.permMod12 = new Uint8Array(512);
        for (let zU = 0; zU < 512; zU++) this.perm[zU] = this.p[255 & zU], this.permMod12[zU] = this.perm[zU] % 12
      }
      noise2D(UU, XU) {
        const zU = this.permMod12,
          QU = this.perm;
        let AU = 0,
          FU = 0,
          oU = 0;
        const EU = (UU + XU) * cU,
          YU = Math.floor(UU + EU),
          NU = Math.floor(XU + EU),
          IU = (YU + NU) * yU,
          pU = UU - (YU - IU),
          aU = XU - (NU - IU);
        let tU, gU;
        pU > aU ? (tU = 1, gU = 0) : (tU = 0, gU = 1);
        const kU = pU - tU + yU,
          GU = aU - gU + yU,
          BU = pU - 1 + 2 * yU,
          ZU = aU - 1 + 2 * yU,
          RU = 255 & YU,
          PU = 255 & NU;
        let WU = .5 - pU * pU - aU * aU;
        if (WU >= 0) {
          const UU = 3 * zU[RU + QU[PU]];
          WU *= WU, AU = WU * WU * (DU[UU] * pU + DU[UU + 1] * aU)
        }
        let dU = .5 - kU * kU - GU * GU;
        if (dU >= 0) {
          const UU = 3 * zU[RU + tU + QU[PU + gU]];
          dU *= dU, FU = dU * dU * (DU[UU] * kU + DU[UU + 1] * GU)
        }
        let LU = .5 - BU * BU - ZU * ZU;
        if (LU >= 0) {
          const UU = 3 * zU[RU + 1 + QU[PU + 1]];
          LU *= LU, oU = LU * LU * (DU[UU] * BU + DU[UU + 1] * ZU)
        }
        return 70 * (AU + FU + oU)
      }
      noise3D(UU, XU, zU) {
        const cU = this.permMod12,
          yU = this.perm;
        let FU, oU, EU, YU;
        const NU = (UU + XU + zU) * QU,
          IU = Math.floor(UU + NU),
          pU = Math.floor(XU + NU),
          aU = Math.floor(zU + NU),
          tU = (IU + pU + aU) * AU,
          gU = UU - (IU - tU),
          kU = XU - (pU - tU),
          GU = zU - (aU - tU);
        let BU, ZU, RU, PU, WU, dU;
        gU >= kU ? kU >= GU ? (BU = 1, ZU = 0, RU = 0, PU = 1, WU = 1, dU = 0) : gU >= GU ? (BU = 1, ZU = 0, RU = 0, PU = 1, WU = 0, dU = 1) : (BU = 0, ZU = 0, RU = 1, PU = 1, WU = 0, dU = 1) : kU < GU ? (BU = 0, ZU = 0, RU = 1, PU = 0, WU = 1, dU = 1) : gU < GU ? (BU = 0, ZU = 1, RU = 0, PU = 0, WU = 1, dU = 1) : (BU = 0, ZU = 1, RU = 0, PU = 1, WU = 1, dU = 0);
        const LU = gU - BU + AU,
          eU = kU - ZU + AU,
          CU = GU - RU + AU,
          wU = gU - PU + 2 * AU,
          qU = kU - WU + 2 * AU,
          OU = GU - dU + 2 * AU,
          SU = gU - 1 + .5,
          rU = kU - 1 + .5,
          uU = GU - 1 + .5,
          fU = 255 & IU,
          iU = 255 & pU,
          HU = 255 & aU;
        let MU = .6 - gU * gU - kU * kU - GU * GU;
        if (MU < 0) FU = 0;
        else {
          const UU = 3 * cU[fU + yU[iU + yU[HU]]];
          MU *= MU, FU = MU * MU * (DU[UU] * gU + DU[UU + 1] * kU + DU[UU + 2] * GU)
        }
        let vU = .6 - LU * LU - eU * eU - CU * CU;
        if (vU < 0) oU = 0;
        else {
          const UU = 3 * cU[fU + BU + yU[iU + ZU + yU[HU + RU]]];
          vU *= vU, oU = vU * vU * (DU[UU] * LU + DU[UU + 1] * eU + DU[UU + 2] * CU)
        }
        let VU = .6 - wU * wU - qU * qU - OU * OU;
        if (VU < 0) EU = 0;
        else {
          const UU = 3 * cU[fU + PU + yU[iU + WU + yU[HU + dU]]];
          VU *= VU, EU = VU * VU * (DU[UU] * wU + DU[UU + 1] * qU + DU[UU + 2] * OU)
        }
        let sU = .6 - SU * SU - rU * rU - uU * uU;
        if (sU < 0) YU = 0;
        else {
          const UU = 3 * cU[fU + 1 + yU[iU + 1 + yU[HU + 1]]];
          sU *= sU, YU = sU * sU * (DU[UU] * SU + DU[UU + 1] * rU + DU[UU + 2] * uU)
        }
        return 32 * (FU + oU + EU + YU)
      }
      noise4D(UU, XU, zU, cU) {
        const yU = this.perm;
        let QU, AU, DU, YU, NU;
        const IU = (UU + XU + zU + cU) * FU,
          pU = Math.floor(UU + IU),
          aU = Math.floor(XU + IU),
          tU = Math.floor(zU + IU),
          gU = Math.floor(cU + IU),
          kU = (pU + aU + tU + gU) * oU,
          GU = UU - (pU - kU),
          BU = XU - (aU - kU),
          ZU = zU - (tU - kU),
          RU = cU - (gU - kU);
        let PU = 0,
          WU = 0,
          dU = 0,
          LU = 0;
        GU > BU ? PU++ : WU++, GU > ZU ? PU++ : dU++, GU > RU ? PU++ : LU++, BU > ZU ? WU++ : dU++, BU > RU ? WU++ : LU++, ZU > RU ? dU++ : LU++;
        const eU = PU >= 3 ? 1 : 0,
          CU = WU >= 3 ? 1 : 0,
          wU = dU >= 3 ? 1 : 0,
          qU = LU >= 3 ? 1 : 0,
          OU = PU >= 2 ? 1 : 0,
          SU = WU >= 2 ? 1 : 0,
          rU = dU >= 2 ? 1 : 0,
          uU = LU >= 2 ? 1 : 0,
          fU = PU >= 1 ? 1 : 0,
          iU = WU >= 1 ? 1 : 0,
          HU = dU >= 1 ? 1 : 0,
          MU = LU >= 1 ? 1 : 0,
          vU = GU - eU + oU,
          VU = BU - CU + oU,
          sU = ZU - wU + oU,
          nU = RU - qU + oU,
          mU = GU - OU + 2 * oU,
          lU = BU - SU + 2 * oU,
          xU = ZU - rU + 2 * oU,
          JU = RU - uU + 2 * oU,
          jU = GU - fU + 3 * oU,
          KU = BU - iU + 3 * oU,
          bU = ZU - HU + 3 * oU,
          TU = RU - MU + 3 * oU,
          hU = GU - 1 + 4 * oU,
          UX = BU - 1 + 4 * oU,
          XX = ZU - 1 + 4 * oU,
          zX = RU - 1 + 4 * oU,
          cX = 255 & pU,
          yX = 255 & aU,
          QX = 255 & tU,
          AX = 255 & gU;
        let FX = .6 - GU * GU - BU * BU - ZU * ZU - RU * RU;
        if (FX < 0) QU = 0;
        else {
          const UU = yU[cX + yU[yX + yU[QX + yU[AX]]]] % 32 * 4;
          FX *= FX, QU = FX * FX * (EU[UU] * GU + EU[UU + 1] * BU + EU[UU + 2] * ZU + EU[UU + 3] * RU)
        }
        let oX = .6 - vU * vU - VU * VU - sU * sU - nU * nU;
        if (oX < 0) AU = 0;
        else {
          const UU = yU[cX + eU + yU[yX + CU + yU[QX + wU + yU[AX + qU]]]] % 32 * 4;
          oX *= oX, AU = oX * oX * (EU[UU] * vU + EU[UU + 1] * VU + EU[UU + 2] * sU + EU[UU + 3] * nU)
        }
        let DX = .6 - mU * mU - lU * lU - xU * xU - JU * JU;
        if (DX < 0) DU = 0;
        else {
          const UU = yU[cX + OU + yU[yX + SU + yU[QX + rU + yU[AX + uU]]]] % 32 * 4;
          DX *= DX, DU = DX * DX * (EU[UU] * mU + EU[UU + 1] * lU + EU[UU + 2] * xU + EU[UU + 3] * JU)
        }
        let EX = .6 - jU * jU - KU * KU - bU * bU - TU * TU;
        if (EX < 0) YU = 0;
        else {
          const UU = yU[cX + fU + yU[yX + iU + yU[QX + HU + yU[AX + MU]]]] % 32 * 4;
          EX *= EX, YU = EX * EX * (EU[UU] * jU + EU[UU + 1] * KU + EU[UU + 2] * bU + EU[UU + 3] * TU)
        }
        let YX = .6 - hU * hU - UX * UX - XX * XX - zX * zX;
        if (YX < 0) NU = 0;
        else {
          const UU = yU[cX + 1 + yU[yX + 1 + yU[QX + 1 + yU[AX + 1]]]] % 32 * 4;
          YX *= YX, NU = YX * YX * (EU[UU] * hU + EU[UU + 1] * UX + EU[UU + 2] * XX + EU[UU + 3] * zX)
        }
        return 27 * (QU + AU + DU + YU + NU)
      }
    }
  }
};
Object.freeze(modules);
for (const UU in modules) Object.freeze(modules[UU]);