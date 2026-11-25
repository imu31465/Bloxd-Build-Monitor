/*! For license information please see 8104he.226.e5d8b156.chunk.js.LICENSE.txt */
export const id = 226;
export const ids = [226];
export const modules = {
  39850: (QQ, WQ, XQ) => {
    QQ.exports = qQ;
    var wQ = XQ(416);

    function qQ(QQ, WQ) {
      if (!(this instanceof qQ)) return new qQ(QQ, WQ);
      var XQ = wQ.create();
      wQ.add(XQ, QQ, WQ), this.base = wQ.min(wQ.create(), QQ, XQ), this.vec = wQ.clone(WQ), this.max = wQ.max(wQ.create(), QQ, XQ), this.mag = wQ.length(this.vec)
    }
    var TQ = qQ.prototype;
    TQ.width = function() {
      return this.vec[0]
    }, TQ.height = function() {
      return this.vec[1]
    }, TQ.depth = function() {
      return this.vec[2]
    }, TQ.x0 = function() {
      return this.base[0]
    }, TQ.y0 = function() {
      return this.base[1]
    }, TQ.z0 = function() {
      return this.base[2]
    }, TQ.x1 = function() {
      return this.max[0]
    }, TQ.y1 = function() {
      return this.max[1]
    }, TQ.z1 = function() {
      return this.max[2]
    }, TQ.translate = function(QQ) {
      return wQ.add(this.max, this.max, QQ), wQ.add(this.base, this.base, QQ), this
    }, TQ.setPosition = function(QQ) {
      return wQ.add(this.max, QQ, this.vec), wQ.copy(this.base, QQ), this
    }, TQ.expand = function(QQ) {
      var WQ = wQ.create(),
        XQ = wQ.create();
      return wQ.max(WQ, QQ.max, this.max), wQ.min(XQ, QQ.base, this.base), wQ.subtract(WQ, WQ, XQ), new qQ(XQ, WQ)
    }, TQ.intersects = function(QQ) {
      return !(QQ.base[0] > this.max[0]) && (!(QQ.base[1] > this.max[1]) && (!(QQ.base[2] > this.max[2]) && (!(QQ.max[0] < this.base[0]) && (!(QQ.max[1] < this.base[1]) && !(QQ.max[2] < this.base[2])))))
    }, TQ.touches = function(QQ) {
      var WQ = this.union(QQ);
      return null !== WQ && (0 == WQ.width() || 0 == WQ.height() || 0 == WQ.depth())
    }, TQ.union = function(QQ) {
      if (!this.intersects(QQ)) return null;
      var WQ = Math.max(QQ.base[0], this.base[0]),
        XQ = Math.max(QQ.base[1], this.base[1]),
        wQ = Math.max(QQ.base[2], this.base[2]);
      return new qQ([WQ, XQ, wQ], [Math.min(QQ.max[0], this.max[0]) - WQ, Math.min(QQ.max[1], this.max[1]) - XQ, Math.min(QQ.max[2], this.max[2]) - wQ])
    }
  },
  39846: QQ => {
    QQ.exports = function(QQ, WQ, XQ, wQ, qQ, TQ) {
      var zQ = +WQ[0],
        sQ = +WQ[1],
        FQ = +WQ[2],
        PQ = +XQ[0],
        gQ = +XQ[1],
        JQ = +XQ[2],
        rQ = Math.sqrt(PQ * PQ + gQ * gQ + JQ * JQ);
      if (0 === rQ) throw new Error("Can't raycast along a zero vector");
      return function(QQ, WQ, XQ, wQ, qQ, TQ, zQ, sQ, FQ, PQ) {
        for (var gQ = 0, JQ = Math.floor, rQ = 0 | JQ(WQ), IQ = 0 | JQ(XQ), jQ = 0 | JQ(wQ), BQ = qQ > 0 ? 1 : -1, yQ = TQ > 0 ? 1 : -1, VQ = zQ > 0 ? 1 : -1, DQ = Math.abs(1 / qQ), pQ = Math.abs(1 / TQ), GQ = Math.abs(1 / zQ), UQ = DQ < 1 / 0 ? DQ * (BQ > 0 ? rQ + 1 - WQ : WQ - rQ) : 1 / 0, bQ = pQ < 1 / 0 ? pQ * (yQ > 0 ? IQ + 1 - XQ : XQ - IQ) : 1 / 0, vQ = GQ < 1 / 0 ? GQ * (VQ > 0 ? jQ + 1 - wQ : wQ - jQ) : 1 / 0, dQ = -1; gQ <= sQ;) {
          var HQ = QQ(rQ, IQ, jQ);
          if (HQ) return FQ && (FQ[0] = WQ + gQ * qQ, FQ[1] = XQ + gQ * TQ, FQ[2] = wQ + gQ * zQ), PQ && (PQ[0] = PQ[1] = PQ[2] = 0, 0 === dQ && (PQ[0] = -BQ), 1 === dQ && (PQ[1] = -yQ), 2 === dQ && (PQ[2] = -VQ)), HQ;
          UQ < bQ ? UQ < vQ ? (rQ += BQ, gQ = UQ, UQ += DQ, dQ = 0) : (jQ += VQ, gQ = vQ, vQ += GQ, dQ = 2) : bQ < vQ ? (IQ += yQ, gQ = bQ, bQ += pQ, dQ = 1) : (jQ += VQ, gQ = vQ, vQ += GQ, dQ = 2)
        }
        return FQ && (FQ[0] = WQ + gQ * qQ, FQ[1] = XQ + gQ * TQ, FQ[2] = wQ + gQ * zQ), PQ && (PQ[0] = PQ[1] = PQ[2] = 0), 0
      }(QQ, zQ, sQ, FQ, PQ /= rQ, gQ /= rQ, JQ /= rQ, wQ = "undefined" === typeof wQ ? 64 : +wQ, qQ, TQ)
    }
  },
  39376: (QQ, WQ, XQ) => {
    XQ.d(WQ, {
      e: () => sQ,
      f: () => TQ
    });
    var wQ = XQ(4357);
    let qQ = null;

    function TQ(QQ) {
      return null !== qQ && QQ === qQ
    }

    function zQ() {
      this.EY = !1, this.stopPropagation = !1, this.kY = !1, this.disabled = !1
    }
    class sQ {
      constructor(QQ, WQ) {
        this.version = "0.7.0";
        var XQ = Object.assign({}, new zQ, WQ || {});
        this.element = QQ || document, this.EY = !!XQ.EY, this.stopPropagation = !!XQ.stopPropagation, this.kY = !!XQ.kY, this.disabled = !!XQ.disabled, this.filterEvents = (QQ, WQ) => !0, this.ignoreEvent = QQ => !1, this.down = new wQ.EventEmitter, this.up = new wQ.EventEmitter, this.state = {}, this.fY = {
          dx: 0,
          dy: 0,
          VWQ: 0,
          DWQ: 0,
          pWQ: 0
        }, this.pressCount = {}, this.releaseCount = {}, this._keyBindmap = {}, this._keyStates = {}, this._bindPressCount = {}, this._touches = {
          lastX: 0,
          lastY: 0,
          currID: null
        }, "loading" !== document.readyState ? PQ(this) : document.addEventListener("DOMContentLoaded", (QQ => {
          PQ(this)
        }), {
          once: !0
        })
      }
      bind(QQ) {
        for (var WQ = arguments.length, XQ = new Array(WQ > 1 ? WQ - 1 : 0), wQ = 1; wQ < WQ; wQ++) XQ[wQ - 1] = arguments[wQ];
        XQ.forEach((WQ => {
          var XQ = this._keyBindmap[WQ] || [];
          XQ.includes(QQ) || (XQ.push(QQ), this._keyBindmap[WQ] = XQ)
        })), this.state[QQ] = !!this.state[QQ], this.pressCount[QQ] = this.pressCount[QQ] || 0, this.releaseCount[QQ] = this.releaseCount[QQ] || 0
      }
      unbind(QQ) {
        for (var WQ in this._keyBindmap) {
          var XQ = this._keyBindmap[WQ],
            wQ = XQ.indexOf(QQ);
          wQ > -1 && XQ.splice(wQ, 1)
        }
      }
      getBindings() {
        var QQ = {};
        for (var WQ in this._keyBindmap) {
          this._keyBindmap[WQ].forEach((XQ => {
            QQ[XQ] = QQ[XQ] || [], QQ[XQ].push(WQ)
          }))
        }
        return QQ
      }
      fJ() {
        FQ(this.fY), FQ(this.pressCount), FQ(this.releaseCount)
      }
    }

    function FQ(QQ) {
      for (var WQ in QQ) QQ[WQ] = 0
    }

    function PQ(QQ) {
      window.addEventListener("keydown", yQ.bind(null, QQ, !0), !1), window.addEventListener("keyup", yQ.bind(null, QQ, !1), !1);
      var WQ = {
        passive: !0
      };
      QQ.element.addEventListener("touchstart", IQ.bind(void 0, QQ), {
        passive: !1
      }), QQ.element.addEventListener("touchend", BQ.bind(void 0, QQ), WQ), QQ.element.addEventListener("mousedown", VQ.bind(null, QQ, !0), WQ), window.document.addEventListener("mouseup", VQ.bind(null, QQ, !1), WQ), QQ.element.addEventListener("touchmove", DQ.bind(null, QQ), WQ), QQ.element.addEventListener("mousemove", DQ.bind(null, QQ), WQ), window.PointerEvent, QQ.element.addEventListener("wheel", pQ.bind(null, QQ), WQ), QQ.element.addEventListener("contextmenu", GQ.bind(null, QQ), !1), window.addEventListener("blur", vQ.bind(null, QQ), !1)
    }
    var gQ = 0,
      JQ = 0,
      rQ = null;

    function IQ(QQ, WQ) {
      WQ.preventDefault(), jQ(WQ)
    }

    function jQ(QQ) {
      let WQ = !1;
      for (let XQ = 0; XQ < QQ.touches.length; ++XQ)
        if (QQ.touches[XQ].identifier === rQ) {
          WQ = !0;
          break
        } if (!WQ) {
        const WQ = QQ.changedTouches[0];
        gQ = WQ.clientX, JQ = WQ.clientY, rQ = WQ.identifier
      }
    }

    function BQ(QQ, WQ) {
      for (var XQ = WQ.changedTouches, wQ = 0; wQ < XQ.length; ++wQ) XQ[wQ].identifier === rQ && (rQ = null)
    }

    function yQ(QQ, WQ, XQ) {
      if (!QQ.ignoreEvent(XQ)) try {
        dQ(QQ, XQ), WQ && XQ.isTrusted && !XQ.repeat && QQ._keyStates[XQ.code] && HQ(QQ, XQ.code)
      } finally {
        aQ(XQ.code, WQ, QQ, XQ)
      }
    }

    function VQ(QQ, WQ, XQ) {
      if (!QQ.ignoreEvent(XQ)) try {
        dQ(QQ, XQ)
      } finally {
        ! function(QQ, WQ, XQ) {
          if ("pointerId" in XQ)
            if (WQ) {
              if (null !== QQ._touches.currID) return;
              QQ._touches.currID = XQ.pointerId
            } else {
              if (QQ._touches.currID !== XQ.pointerId) return;
              QQ._touches.currID = null
            } var wQ = "button" in XQ ? XQ.button + 1 : 1;
          aQ("Mouse" + wQ, WQ, QQ, XQ)
        }(QQ, WQ, XQ)
      }
    }

    function DQ(QQ, WQ) {
      var XQ = WQ.movementX || WQ.mozMovementX || 0,
        wQ = WQ.movementY || WQ.mozMovementY || 0;
      if (WQ.touches && 0 === (XQ | wQ)) {
        var qQ = function(QQ) {
          jQ(QQ);
          for (let WQ = 0; WQ < QQ.changedTouches.length; ++WQ)
            if (QQ.changedTouches[WQ].identifier == rQ) {
              const XQ = QQ.changedTouches[WQ],
                wQ = [XQ.clientX - gQ, XQ.clientY - JQ];
              return gQ = XQ.clientX, JQ = XQ.clientY, wQ
            } return console.error(`Did not find touch id ${rQ}`), [0, 0]
        }(WQ);
        XQ = qQ[0], wQ = qQ[1]
      }
      QQ.fY.dx += XQ, QQ.fY.dy += wQ
    }

    function pQ(QQ, WQ) {
      dQ(QQ, WQ);
      var XQ = 1;
      switch (WQ.deltaMode) {
        case 0:
          XQ = 1;
          break;
        case 1:
          XQ = 12;
          break;
        case 2:
          XQ = QQ.element.clientHeight || window.innerHeight
      }
      QQ.fY.VWQ += (WQ.deltaX || 0) * XQ, QQ.fY.DWQ += (WQ.deltaY || 0) * XQ, QQ.fY.pWQ += (WQ.deltaZ || 0) * XQ
    }

    function GQ(QQ, WQ) {
      if (!QQ.kY) return WQ.preventDefault(), !1
    }
    var UQ = {
      AltLeft: "altKey",
      AltRight: "altKey",
      ControlLeft: "ctrlKey",
      ControlRight: "ctrlKey",
      ShiftLeft: "shiftKey",
      ShiftRight: "shiftKey",
      MetaLeft: "metaKey",
      MetaRight: "metaKey"
    };

    function bQ(QQ, WQ) {
      return !!QQ[UQ[WQ]] || ("AltRight" === WQ || "ControlLeft" === WQ) && "function" === typeof QQ.getModifierState && !0 === QQ.getModifierState("AltGraph")
    }

    function vQ(QQ, WQ) {
      for (var XQ in QQ._modifiersHeldThroughBlur = {}, UQ) QQ._keyStates[XQ] && (QQ._modifiersHeldThroughBlur[XQ] = !0);
      WQ && WQ.isTrusted && function() {
        try {
          return window.self !== window.top
        } catch (QQ) {
          return !0
        }
      }() && (clearTimeout(QQ._blurRelease), QQ._blurRelease = setTimeout((function() {
        if (!document.hasFocus())
          for (var WQ in QQ._modifiersHeldThroughBlur = {}, QQ._keyStates) QQ._keyStates[WQ] && !/^Mouse\d/.test(WQ) && HQ(QQ, WQ)
      }), 0))
    }

    function dQ(QQ, WQ) {
      var XQ = QQ._modifiersHeldThroughBlur;
      if (XQ && WQ.isTrusted && document.hasFocus())
        for (var wQ in XQ) delete XQ[wQ], QQ._keyStates[wQ] && wQ !== WQ.code && (bQ(WQ, wQ) || HQ(QQ, wQ))
    }

    function HQ(QQ, WQ) {
      const XQ = {
          code: WQ,
          preventDefault: () => {},
          stopPropagation: () => {}
        },
        wQ = qQ;
      qQ = XQ;
      try {
        aQ(WQ, !1, QQ, XQ)
      } finally {
        qQ = wQ
      }
    }

    function aQ(QQ, WQ, XQ, wQ) {
      var qQ = XQ._keyBindmap[QQ];
      qQ && (lQ(XQ._keyStates[QQ], WQ) && (XQ._keyStates[QQ] = WQ, qQ.forEach((QQ => {
        (!XQ.filterEvents || XQ.filterEvents(wQ, QQ)) && function(QQ, WQ, XQ, wQ) {
          var qQ = WQ ? XQ.pressCount : XQ.releaseCount;
          qQ[QQ] = (qQ[QQ] || 0) + 1;
          var TQ = XQ._bindPressCount[QQ] || 0;
          (TQ += WQ ? 1 : -1) < 0 && (TQ = 0);
          XQ._bindPressCount[QQ] = TQ;
          var zQ = XQ.state[QQ];
          if (lQ(zQ, TQ)) {
            XQ.state[QQ] = TQ > 0;
            var sQ = WQ ? XQ.down : XQ.up;
            XQ.disabled || sQ.emit(QQ, wQ)
          }
        }(QQ, WQ, XQ, wQ)
      }))), "button" in wQ || (XQ.EY && !wQ.defaultPrevented && wQ.preventDefault(), XQ.stopPropagation && wQ.stopPropagation()))
    }

    function lQ(QQ, WQ) {
      return QQ ? !WQ : WQ
    }
  },
  36833: (QQ, WQ) => {
    function XQ(QQ) {
      if (QQ && "object" === typeof QQ) {
        var WQ = QQ.which || QQ.keyCode || QQ.charCode;
        WQ && (QQ = WQ)
      }
      if ("number" === typeof QQ) return zQ[QQ];
      var XQ, TQ = String(QQ);
      return (XQ = wQ[TQ.toLowerCase()]) ? XQ : (XQ = qQ[TQ.toLowerCase()]) || (1 === TQ.length ? TQ.charCodeAt(0) : void 0)
    }
    XQ.isEventKey = function(QQ, WQ) {
      if (QQ && "object" === typeof QQ) {
        var XQ = QQ.which || QQ.keyCode || QQ.charCode;
        if (null === XQ || void 0 === XQ) return !1;
        if ("string" === typeof WQ) {
          var TQ;
          if (TQ = wQ[WQ.toLowerCase()]) return TQ === XQ;
          if (TQ = qQ[WQ.toLowerCase()]) return TQ === XQ
        } else if ("number" === typeof WQ) return WQ === XQ;
        return !1
      }
    };
    var wQ = (WQ = QQ.exports = XQ).code = WQ.codes = {
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
      qQ = WQ.aliases = {
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
    for (TQ = 97; TQ < 123; TQ++) wQ[String.fromCharCode(TQ)] = TQ - 32;
    for (var TQ = 48; TQ < 58; TQ++) wQ[TQ - 48] = TQ;
    for (TQ = 1; TQ < 13; TQ++) wQ["f" + TQ] = TQ + 111;
    for (TQ = 0; TQ < 10; TQ++) wQ["numpad " + TQ] = TQ + 96;
    var zQ = WQ.names = WQ.title = {};
    for (TQ in wQ) zQ[wQ[TQ]] = TQ;
    for (var sQ in qQ) wQ[sQ] = qQ[sQ]
  },
  39836: (QQ, WQ, XQ) => {
    XQ.d(WQ, {
      c: () => wQ
    });
    class wQ {
      constructor() {
        let QQ = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
          WQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 10;
        this.Yu = !1, this.wL = !1, this.qE = 30, this.Xu = 0, this.qL = 100, this.Sy = !1, this.fullscreen = !1, this.tV = function(QQ) {}, this.gL = function(QQ, WQ, XQ) {}, this.cL = function() {}, this.cV = function() {}, this.dL = function() {}, this.onFullscreenChanged = function() {}, this.onPointerLockError = function(QQ) {}, this._data = new qQ(WQ),
          function(QQ) {
            if ("loading" === document.readyState) {
              var WQ = () => {
                document.removeEventListener("readystatechange", WQ), QQ()
              };
              document.addEventListener("readystatechange", WQ)
            } else setTimeout(QQ, 0)
          }((() => {
            ! function(QQ) {
              var WQ = QQ._data,
                XQ = WQ.nowObject.now();
              WQ.lastTickStarted = XQ, WQ.lastFrameStarted = XQ, WQ.lastRenderStarted = XQ, WQ.frameCB = () => function(QQ) {
                var WQ = QQ._data;
                requestAnimationFrame(WQ.frameCB), sQ(QQ);
                var XQ = WQ.nowObject.now(),
                  wQ = XQ - WQ.lastFrameStarted;
                if (WQ.lastFrameStarted = XQ, QQ.Xu > 0) {
                  WQ.renderAccum += wQ;
                  var qQ = 1e3 / QQ.Xu;
                  if (WQ.renderAccum < qQ) return;
                  WQ.renderAccum -= qQ, WQ.renderAccum > qQ && (WQ.renderAccum = qQ)
                }
                var TQ = XQ - WQ.lastRenderStarted;
                WQ.lastRenderStarted = XQ;
                var zQ = 1e3 / QQ.qE,
                  FQ = (XQ - WQ.lastTickStarted) / zQ;
                FQ < 0 && (FQ = 0);
                QQ.gL(TQ, FQ, zQ), setTimeout(sQ, 0, QQ, !0)
              }(QQ), WQ.intervalCB = () => sQ(QQ), requestAnimationFrame(WQ.frameCB), WQ.pollTime > 0 && (WQ.intervalID = setInterval(WQ.intervalCB, Math.max(WQ.pollTime, 1e3 / QQ.qE / 2)))
            }(this),
            function(QQ, WQ) {
              if (!WQ) return;
              var XQ = !1,
                wQ = !1,
                qQ = QQ => {
                  if (!!QQ !== (XQ = WQ === document.pointerLockElement))
                    if (QQ) {
                      var wQ = WQ.requestPointerLock();
                      wQ && wQ.catch && wQ.catch((QQ => {}))
                    } else document.exitPointerLock()
                },
                TQ = QQ => {
                  !!QQ !== (wQ = WQ === document.fullscreenElement) && (QQ ? WQ.requestFullscreen ? WQ.requestFullscreen() : WQ.webkitRequestFullscreen && WQ.webkitRequestFullscreen() : document.exitFullscreen ? document.exitFullscreen() : document.webkitExitFullscreen && document.webkitExitFullscreen())
                };
              document.addEventListener("pointerlockchange", (wQ => {
                XQ = WQ === document.pointerLockElement, QQ.dL(XQ)
              })), document.addEventListener("fullscreenchange", (XQ => {
                wQ = WQ === document.fullscreenElement, QQ.onFullscreenChanged(wQ)
              })), document.addEventListener("pointerlockerror", (wQ => {
                XQ = WQ === document.pointerLockElement, QQ.onPointerLockError(wQ)
              })), Object.defineProperty(QQ, "Sy", {
                get: () => XQ,
                set: qQ
              }), Object.defineProperty(QQ, "fullscreen", {
                get: () => wQ,
                set: TQ
              }), WQ.addEventListener("click", (WQ => {
                QQ.Yu && qQ(!0), QQ.wL && TQ(!0)
              }));
              var zQ = () => QQ.cV();
              if (window.ResizeObserver) {
                new ResizeObserver(zQ).observe(WQ)
              } else window.addEventListener("resize", zQ)
            }(this, QQ), this.cL()
          }))
      }
    }

    function qQ() {
      let QQ = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 10;
      this.nowObject = performance || Date, this.pollTime = QQ, this.renderAccum = 0, this.lastTickStarted = 0, this.lastFrameStarted = 0, this.lastRenderStarted = 0, this.avgTickTime = 2, this.frameCB = null, this.intervalCB = null, this.intervalID = -1
    }
    var TQ = 3,
      zQ = 20;

    function sQ(QQ) {
      for (var WQ = QQ._data, XQ = 1e3 / QQ.qE, wQ = WQ.nowObject.now() + zQ, qQ = 0; WQ.nowObject.now() >= WQ.lastTickStarted + XQ && WQ.nowObject.now() < wQ && ++qQ <= TQ;) QQ.tV(XQ), WQ.lastTickStarted += XQ;
      var sQ = 5 * (XQ + 5),
        FQ = WQ.nowObject.now();
      if (FQ - WQ.lastTickStarted > sQ)
        for (; FQ >= WQ.lastTickStarted + XQ;) WQ.lastTickStarted += XQ
    }
  },
  36999: (QQ, WQ, XQ) => {
    XQ.d(WQ, {
      d: () => zQ
    });
    var wQ = XQ(61);
    const qQ = wQ.useLayoutEffect;
    const TQ = function(QQ) {
      var WQ = (0, wQ.useRef)(QQ);
      return qQ((function() {
        WQ.current = QQ
      })), WQ
    };
    var zQ = function(QQ) {
      var WQ = TQ(QQ);
      (0, wQ.useEffect)((function() {
        var QQ = function(QQ) {
          var XQ;
          if (null != WQ.current && (XQ = WQ.current(QQ)), QQ.defaultPrevented && (QQ.returnValue = ""), "string" === typeof XQ) return QQ.returnValue = XQ, XQ
        };
        return window.addEventListener("beforeunload", QQ),
          function() {
            window.removeEventListener("beforeunload", QQ)
          }
      }), [])
    }
  },
  36875: QQ => {
    var WQ, XQ = "undefined" !== typeof window ? window.navigator.userAgent : "",
      wQ = /OS X/.test(XQ),
      qQ = /Opera/.test(XQ),
      TQ = !/like Gecko/.test(XQ) && !qQ,
      zQ = QQ.exports = {
        0: wQ ? "<menu>" : "<UNK>",
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
        93: wQ ? "<meta>" : "<menu>",
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
        173: wQ && TQ ? "-" : "<volume-mute>",
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
        231: qQ ? "`" : "<unicode>",
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
    for (WQ = 58; WQ < 65; ++WQ) zQ[WQ] = String.fromCharCode(WQ);
    for (WQ = 48; WQ < 58; ++WQ) zQ[WQ] = WQ - 48 + "";
    for (WQ = 65; WQ < 91; ++WQ) zQ[WQ] = String.fromCharCode(WQ);
    for (WQ = 96; WQ < 106; ++WQ) zQ[WQ] = "<num-" + (WQ - 96) + ">";
    for (WQ = 112; WQ < 136; ++WQ) zQ[WQ] = "F" + (WQ - 111)
  },
  39264: (QQ, WQ, XQ) => {
    function wQ(QQ, WQ, XQ, wQ, qQ) {
      var TQ = {};
      return Object.keys(wQ).forEach((function(QQ) {
        TQ[QQ] = wQ[QQ]
      })), TQ.enumerable = !!TQ.enumerable, TQ.configurable = !!TQ.configurable, ("value" in TQ || TQ.initializer) && (TQ.writable = !0), TQ = XQ.slice().reverse().reduce((function(XQ, wQ) {
        return wQ(QQ, WQ, XQ) || XQ
      }), TQ), qQ && void 0 !== TQ.initializer && (TQ.value = TQ.initializer ? TQ.initializer.call(qQ) : void 0, TQ.initializer = void 0), void 0 === TQ.initializer && (Object.defineProperty(QQ, WQ, TQ), TQ = null), TQ
    }
    XQ.d(WQ, {
      e: () => wQ
    })
  },
  39259: (QQ, WQ, XQ) => {
    function wQ(QQ, WQ, XQ, wQ) {
      XQ && Object.defineProperty(QQ, WQ, {
        enumerable: XQ.enumerable,
        configurable: XQ.configurable,
        writable: XQ.writable,
        value: XQ.initializer ? XQ.initializer.call(wQ) : void 0
      })
    }
    XQ.d(WQ, {
      b: () => wQ
    })
  },
  38947: (QQ, WQ, XQ) => {
    XQ.d(WQ, {
      d: () => TQ
    });
    var wQ = XQ(38956);
    const qQ = (QQ, WQ, XQ) => QQ ? QQ.getClassName && "Mesh" === QQ.getClassName() ? null : !QQ.getClassName || "SubMesh" !== QQ.getClassName() && "PhysicsBody" !== QQ.getClassName() ? QQ.clone ? QQ.clone() : Array.isArray(QQ) ? QQ.slice() : XQ && "object" === typeof QQ ? {
      ...QQ
    } : null : QQ.clone(WQ) : null;
    class TQ {
      static DeepCopy(QQ, WQ, XQ, TQ) {
        let zQ = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
        const sQ = function(QQ) {
          const WQ = [];
          do {
            const XQ = Object.getOwnPropertyNames(QQ);
            for (const QQ of XQ) - 1 === WQ.indexOf(QQ) && WQ.push(QQ)
          } while (QQ = Object.getPrototypeOf(QQ));
          return WQ
        }(QQ);
        for (const PQ of sQ) {
          if ("_" === PQ[0] && (!TQ || -1 === TQ.indexOf(PQ))) continue;
          if (PQ.endsWith("Observable")) continue;
          if (XQ && -1 !== XQ.indexOf(PQ)) continue;
          const sQ = QQ[PQ],
            gQ = typeof sQ;
          if ("function" !== gQ) try {
            if ("object" === gQ)
              if (sQ instanceof Uint8Array) WQ[PQ] = Uint8Array.from(sQ);
              else if (sQ instanceof Array) {
              if (WQ[PQ] = [], sQ.length > 0)
                if ("object" == typeof sQ[0])
                  for (let QQ = 0; QQ < sQ.length; QQ++) {
                    const XQ = qQ(sQ[QQ], WQ, zQ); - 1 === WQ[PQ].indexOf(XQ) && WQ[PQ].push(XQ)
                  } else WQ[PQ] = sQ.slice(0)
            } else WQ[PQ] = qQ(sQ, WQ, zQ);
            else WQ[PQ] = sQ
          } catch (FQ) {
            wQ.b.Warn(FQ.message)
          }
        }
      }
    }
  },
  38986: (QQ, WQ, XQ) => {
    XQ.d(WQ, {
      d: () => qQ,
      h: () => TQ,
      i: () => zQ,
      l: () => sQ
    });
    var wQ = XQ(37546);
    class qQ {
      constructor(QQ, WQ, XQ) {
        this.gradient = QQ, this.color1 = WQ, this.color2 = XQ
      }
      getColorToRef(QQ) {
        this.color2 ? wQ.d.LerpToRef(this.color1, this.color2, Math.random(), QQ) : QQ.WH(this.color1)
      }
    }
    class TQ {
      constructor(QQ, WQ) {
        this.gradient = QQ, this.color = WQ
      }
    }
    class zQ {
      constructor(QQ, WQ, XQ) {
        this.gradient = QQ, this.factor1 = WQ, this.factor2 = XQ
      }
      getFactor() {
        return void 0 === this.factor2 || this.factor2 === this.factor1 ? this.factor1 : this.factor1 + (this.factor2 - this.factor1) * Math.random()
      }
    }
    class sQ {
      static GetCurrentGradient(QQ, WQ, XQ) {
        if (WQ[0].gradient > QQ) return void XQ(WQ[0], WQ[0], 1);
        for (let qQ = 0; qQ < WQ.length - 1; qQ++) {
          const wQ = WQ[qQ],
            TQ = WQ[qQ + 1];
          if (QQ >= wQ.gradient && QQ <= TQ.gradient) {
            return void XQ(wQ, TQ, (QQ - wQ.gradient) / (TQ.gradient - wQ.gradient))
          }
        }
        const wQ = WQ.length - 1;
        XQ(WQ[wQ], WQ[wQ], 1)
      }
    }
  },
  38956: (QQ, WQ, XQ) => {
    XQ.d(WQ, {
      b: () => wQ
    });
    class wQ {
      static _CheckLimit(QQ, WQ) {
        let XQ = wQ._LogLimitOutputs[QQ];
        return XQ ? XQ.current++ : (XQ = {
          limit: WQ,
          current: 1
        }, wQ._LogLimitOutputs[QQ] = XQ), XQ.current <= XQ.limit
      }
      static _GenerateLimitMessage(QQ) {
        let WQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
        const XQ = wQ._LogLimitOutputs[QQ];
        if (!XQ || !wQ.MessageLimitReached) return;
        const qQ = this._Levels[WQ];
        XQ.current === XQ.limit && wQ[qQ.name](wQ.MessageLimitReached.replace(/%LIMIT%/g, "" + XQ.limit).replace(/%TYPE%/g, qQ.name ?? ""))
      }
      static _AddLogEntry(QQ) {
        wQ._LogCache = QQ + wQ._LogCache, wQ.OnNewCacheEntry && wQ.OnNewCacheEntry(QQ)
      }
      static _FormatMessage(QQ) {
        const WQ = QQ => QQ < 10 ? "0" + QQ : "" + QQ,
          XQ = new Date;
        return "[" + WQ(XQ.getHours()) + ":" + WQ(XQ.getMinutes()) + ":" + WQ(XQ.getSeconds()) + "]: " + QQ
      }
      static _LogDisabled(QQ, WQ) {}
      static _LogEnabled() {
        let QQ = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
          WQ = arguments.length > 1 ? arguments[1] : void 0,
          XQ = arguments.length > 2 ? arguments[2] : void 0;
        const qQ = Array.isArray(WQ) ? WQ[0] : WQ;
        if (void 0 !== XQ && !wQ._CheckLimit(qQ, XQ)) return;
        const TQ = wQ._FormatMessage(qQ),
          zQ = this._Levels[QQ],
          sQ = Array.isArray(WQ) ? WQ.slice(1) : [];
        zQ.logFunc && zQ.logFunc("BJS - " + TQ, ...sQ);
        const FQ = `<div style='color:${zQ.color}'>${TQ}</div><br>`;
        wQ._AddLogEntry(FQ), wQ._GenerateLimitMessage(qQ, QQ)
      }
      static get LogCache() {
        return wQ._LogCache
      }
      static ClearLogCache() {
        wQ._LogCache = "", wQ._LogLimitOutputs = {}, wQ.errorsCount = 0
      }
      static set LogLevels(QQ) {
        wQ.Log = wQ._LogDisabled, wQ.Warn = wQ._LogDisabled, wQ.Error = wQ._LogDisabled;
        const WQ = [wQ.MessageLogLevel, wQ.WarningLogLevel, wQ.ErrorLogLevel];
        for (const XQ of WQ)
          if ((QQ & XQ) === XQ) {
            const QQ = this._Levels[XQ];
            wQ[QQ.name] = wQ._LogEnabled.bind(wQ, XQ)
          }
      }
    }
    wQ.NoneLogLevel = 0, wQ.MessageLogLevel = 1, wQ.WarningLogLevel = 2, wQ.ErrorLogLevel = 4, wQ.AllLogLevel = 7, wQ.MessageLimitReached = "Too many %TYPE%s (%LIMIT%), no more %TYPE%s will be reported for this message.", wQ._LogCache = "", wQ._LogLimitOutputs = {}, wQ._Levels = [{}, {
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
    }], wQ.errorsCount = 0, wQ.Log = wQ._LogEnabled.bind(wQ, wQ.MessageLogLevel), wQ.Warn = wQ._LogEnabled.bind(wQ, wQ.WarningLogLevel), wQ.Error = wQ._LogEnabled.bind(wQ, wQ.ErrorLogLevel)
  },
  38989: (QQ, WQ, XQ) => {
    XQ.d(WQ, {
      c: () => zQ
    });
    var wQ = XQ(37370),
      qQ = XQ(37404),
      TQ = XQ(38947);
    class zQ {
      constructor() {
        this.direction1 = new wQ.s(0, 1, 0), this.direction2 = new wQ.s(0, 1, 0), this.minEmitBox = new wQ.s(-.5, -.5, -.5), this.maxEmitBox = new wQ.s(.5, .5, .5)
      }
      startDirectionFunction(QQ, WQ, XQ, TQ) {
        const zQ = (0, qQ.RandomRange)(this.direction1.x, this.direction2.x),
          sQ = (0, qQ.RandomRange)(this.direction1.y, this.direction2.y),
          FQ = (0, qQ.RandomRange)(this.direction1.z, this.direction2.z);
        if (TQ) return WQ.x = zQ, WQ.y = sQ, void(WQ.z = FQ);
        wQ.s.TransformNormalFromFloatsToRef(zQ, sQ, FQ, QQ, WQ)
      }
      startPositionFunction(QQ, WQ, XQ, TQ) {
        const zQ = (0, qQ.RandomRange)(this.minEmitBox.x, this.maxEmitBox.x),
          sQ = (0, qQ.RandomRange)(this.minEmitBox.y, this.maxEmitBox.y),
          FQ = (0, qQ.RandomRange)(this.minEmitBox.z, this.maxEmitBox.z);
        if (TQ) return WQ.x = zQ, WQ.y = sQ, void(WQ.z = FQ);
        wQ.s.TransformCoordinatesFromFloatsToRef(zQ, sQ, FQ, QQ, WQ)
      }
      clone() {
        const QQ = new zQ;
        return TQ.d.DeepCopy(this, QQ), QQ
      }
      applyToShader(QQ) {
        QQ.setVector3("direction1", this.direction1), QQ.setVector3("direction2", this.direction2), QQ.setVector3("minEmitBox", this.minEmitBox), QQ.setVector3("maxEmitBox", this.maxEmitBox)
      }
      buildUniformLayout(QQ) {
        QQ.addUniform("direction1", 3), QQ.addUniform("direction2", 3), QQ.addUniform("minEmitBox", 3), QQ.addUniform("maxEmitBox", 3)
      }
      getEffectDefines() {
        return "#define BOXEMITTER"
      }
      getClassName() {
        return "BoxParticleEmitter"
      }
      serialize() {
        const QQ = {};
        return QQ.type = this.getClassName(), QQ.direction1 = this.direction1.awQ(), QQ.direction2 = this.direction2.awQ(), QQ.minEmitBox = this.minEmitBox.awQ(), QQ.maxEmitBox = this.maxEmitBox.awQ(), QQ
      }
      parse(QQ) {
        wQ.s.FromArrayToRef(QQ.direction1, 0, this.direction1), wQ.s.FromArrayToRef(QQ.direction2, 0, this.direction2), wQ.s.FromArrayToRef(QQ.minEmitBox, 0, this.minEmitBox), wQ.s.FromArrayToRef(QQ.maxEmitBox, 0, this.maxEmitBox)
      }
    }
  },
  38945: (QQ, WQ, XQ) => {
    XQ.d(WQ, {
      d: () => sQ,
      g: () => zQ
    });
    var wQ = XQ(37370),
      qQ = XQ(37404),
      TQ = XQ(38947);
    class zQ {
      constructor() {
        let QQ = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
          WQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
          XQ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1,
          qQ = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
        this.radius = QQ, this.height = WQ, this.radiusRange = XQ, this.directionRandomizer = qQ, this._tempVector = wQ.s.Zero()
      }
      startDirectionFunction(QQ, WQ, XQ, TQ, zQ) {
        XQ.position.subtractToRef(QQ.getTranslation(), this._tempVector), this._tempVector.normalize(), wQ.s.TransformNormalToRef(this._tempVector, zQ, this._tempVector);
        const sQ = (0, qQ.RandomRange)(-this.directionRandomizer / 2, this.directionRandomizer / 2);
        let FQ = Math.atan2(this._tempVector.x, this._tempVector.z);
        FQ += (0, qQ.RandomRange)(-Math.PI / 2, Math.PI / 2) * this.directionRandomizer, this._tempVector.y = sQ, this._tempVector.x = Math.sin(FQ), this._tempVector.z = Math.cos(FQ), this._tempVector.normalize(), TQ ? WQ.WH(this._tempVector) : wQ.s.TransformNormalFromFloatsToRef(this._tempVector.x, this._tempVector.y, this._tempVector.z, QQ, WQ)
      }
      startPositionFunction(QQ, WQ, XQ, TQ) {
        const zQ = (0, qQ.RandomRange)(-this.height / 2, this.height / 2),
          sQ = (0, qQ.RandomRange)(0, 2 * Math.PI),
          FQ = (0, qQ.RandomRange)((1 - this.radiusRange) * (1 - this.radiusRange), 1),
          PQ = Math.sqrt(FQ) * this.radius,
          gQ = PQ * Math.cos(sQ),
          JQ = PQ * Math.sin(sQ);
        TQ ? WQ.XQQ(gQ, zQ, JQ) : wQ.s.TransformCoordinatesFromFloatsToRef(gQ, zQ, JQ, QQ, WQ)
      }
      clone() {
        const QQ = new zQ(this.radius, this.directionRandomizer);
        return TQ.d.DeepCopy(this, QQ), QQ
      }
      applyToShader(QQ) {
        QQ.setFloat("radius", this.radius), QQ.setFloat("height", this.height), QQ.setFloat("radiusRange", this.radiusRange), QQ.setFloat("directionRandomizer", this.directionRandomizer)
      }
      buildUniformLayout(QQ) {
        QQ.addUniform("radius", 1), QQ.addUniform("height", 1), QQ.addUniform("radiusRange", 1), QQ.addUniform("directionRandomizer", 1)
      }
      getEffectDefines() {
        return "#define CYLINDEREMITTER"
      }
      getClassName() {
        return "CylinderParticleEmitter"
      }
      serialize() {
        const QQ = {};
        return QQ.type = this.getClassName(), QQ.radius = this.radius, QQ.height = this.height, QQ.radiusRange = this.radiusRange, QQ.directionRandomizer = this.directionRandomizer, QQ
      }
      parse(QQ) {
        this.radius = QQ.radius, this.height = QQ.height, this.radiusRange = QQ.radiusRange, this.directionRandomizer = QQ.directionRandomizer
      }
    }
    class sQ extends zQ {
      constructor() {
        let QQ = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
          WQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
          XQ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1,
          qQ = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : new wQ.s(0, 1, 0),
          TQ = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : new wQ.s(0, 1, 0);
        super(QQ, WQ, XQ), this.direction1 = qQ, this.direction2 = TQ
      }
      startDirectionFunction(QQ, WQ, XQ, TQ) {
        const zQ = (0, qQ.RandomRange)(this.direction1.x, this.direction2.x),
          sQ = (0, qQ.RandomRange)(this.direction1.y, this.direction2.y),
          FQ = (0, qQ.RandomRange)(this.direction1.z, this.direction2.z);
        TQ ? WQ.XQQ(zQ, sQ, FQ) : wQ.s.TransformNormalFromFloatsToRef(zQ, sQ, FQ, QQ, WQ)
      }
      clone() {
        const QQ = new sQ(this.radius, this.height, this.radiusRange, this.direction1, this.direction2);
        return TQ.d.DeepCopy(this, QQ), QQ
      }
      applyToShader(QQ) {
        QQ.setFloat("radius", this.radius), QQ.setFloat("height", this.height), QQ.setFloat("radiusRange", this.radiusRange), QQ.setVector3("direction1", this.direction1), QQ.setVector3("direction2", this.direction2)
      }
      buildUniformLayout(QQ) {
        QQ.addUniform("radius", 1), QQ.addUniform("height", 1), QQ.addUniform("radiusRange", 1), QQ.addUniform("direction1", 3), QQ.addUniform("direction2", 3)
      }
      getEffectDefines() {
        return "#define CYLINDEREMITTER\n#define DIRECTEDCYLINDEREMITTER"
      }
      getClassName() {
        return "CylinderDirectedParticleEmitter"
      }
      serialize() {
        const QQ = super.serialize();
        return QQ.direction1 = this.direction1.awQ(), QQ.direction2 = this.direction2.awQ(), QQ
      }
      parse(QQ) {
        super.parse(QQ), wQ.s.FromArrayToRef(QQ.direction1, 0, this.direction1), wQ.s.FromArrayToRef(QQ.direction2, 0, this.direction2)
      }
    }
  },
  39074: (QQ, WQ, XQ) => {
    XQ.d(WQ, {
      b: () => JQ
    });
    const wQ = .5 * (Math.sqrt(3) - 1),
      qQ = (3 - Math.sqrt(3)) / 6,
      TQ = 1 / 3,
      zQ = 1 / 6,
      sQ = (Math.sqrt(5) - 1) / 4,
      FQ = (5 - Math.sqrt(5)) / 20,
      PQ = new Float32Array([1, 1, 0, -1, 1, 0, 1, -1, 0, -1, -1, 0, 1, 0, 1, -1, 0, 1, 1, 0, -1, -1, 0, -1, 0, 1, 1, 0, -1, 1, 0, 1, -1, 0, -1, -1]),
      gQ = new Float32Array([0, 1, 1, 1, 0, 1, 1, -1, 0, 1, -1, 1, 0, 1, -1, -1, 0, -1, 1, 1, 0, -1, 1, -1, 0, -1, -1, 1, 0, -1, -1, -1, 1, 0, 1, 1, 1, 0, 1, -1, 1, 0, -1, 1, 1, 0, -1, -1, -1, 0, 1, 1, -1, 0, 1, -1, -1, 0, -1, 1, -1, 0, -1, -1, 1, 1, 0, 1, 1, 1, 0, -1, 1, -1, 0, 1, 1, -1, 0, -1, -1, 1, 0, 1, -1, 1, 0, -1, -1, -1, 0, 1, -1, -1, 0, -1, 1, 1, 1, 0, 1, 1, -1, 0, 1, -1, 1, 0, 1, -1, -1, 0, -1, 1, 1, 0, -1, 1, -1, 0, -1, -1, 1, 0, -1, -1, -1, 0]);
    const JQ = class {
      constructor() {
        let QQ = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Math.random;
        const WQ = "function" == typeof QQ ? QQ : function(QQ) {
          let WQ = 0,
            XQ = 0,
            wQ = 0,
            qQ = 1;
          const TQ = function() {
            let QQ = 4022871197;
            return function(WQ) {
              WQ = WQ.toString();
              for (let XQ = 0; XQ < WQ.length; XQ++) {
                QQ += WQ.charCodeAt(XQ);
                let wQ = .02519603282416938 * QQ;
                QQ = wQ >>> 0, wQ -= QQ, wQ *= QQ, QQ = wQ >>> 0, wQ -= QQ, QQ += 4294967296 * wQ
              }
              return 2.3283064365386963e-10 * (QQ >>> 0)
            }
          }();
          WQ = TQ(" "), XQ = TQ(" "), wQ = TQ(" "), WQ -= TQ(QQ), WQ < 0 && (WQ += 1);
          XQ -= TQ(QQ), XQ < 0 && (XQ += 1);
          wQ -= TQ(QQ), wQ < 0 && (wQ += 1);
          return function() {
            const QQ = 2091639 * WQ + 2.3283064365386963e-10 * qQ;
            return WQ = XQ, XQ = wQ, wQ = QQ - (qQ = 0 | QQ)
          }
        }(QQ);
        this.p = function(QQ) {
          const WQ = new Uint8Array(256);
          for (let XQ = 0; XQ < 256; XQ++) WQ[XQ] = XQ;
          for (let XQ = 0; XQ < 255; XQ++) {
            const wQ = XQ + ~~(QQ() * (256 - XQ)),
              qQ = WQ[XQ];
            WQ[XQ] = WQ[wQ], WQ[wQ] = qQ
          }
          return WQ
        }(WQ), this.perm = new Uint8Array(512), this.permMod12 = new Uint8Array(512);
        for (let XQ = 0; XQ < 512; XQ++) this.perm[XQ] = this.p[255 & XQ], this.permMod12[XQ] = this.perm[XQ] % 12
      }
      noise2D(QQ, WQ) {
        const XQ = this.permMod12,
          TQ = this.perm;
        let zQ = 0,
          sQ = 0,
          FQ = 0;
        const gQ = (QQ + WQ) * wQ,
          JQ = Math.floor(QQ + gQ),
          rQ = Math.floor(WQ + gQ),
          IQ = (JQ + rQ) * qQ,
          jQ = QQ - (JQ - IQ),
          BQ = WQ - (rQ - IQ);
        let yQ, VQ;
        jQ > BQ ? (yQ = 1, VQ = 0) : (yQ = 0, VQ = 1);
        const DQ = jQ - yQ + qQ,
          pQ = BQ - VQ + qQ,
          GQ = jQ - 1 + 2 * qQ,
          UQ = BQ - 1 + 2 * qQ,
          bQ = 255 & JQ,
          vQ = 255 & rQ;
        let dQ = .5 - jQ * jQ - BQ * BQ;
        if (dQ >= 0) {
          const QQ = 3 * XQ[bQ + TQ[vQ]];
          dQ *= dQ, zQ = dQ * dQ * (PQ[QQ] * jQ + PQ[QQ + 1] * BQ)
        }
        let HQ = .5 - DQ * DQ - pQ * pQ;
        if (HQ >= 0) {
          const QQ = 3 * XQ[bQ + yQ + TQ[vQ + VQ]];
          HQ *= HQ, sQ = HQ * HQ * (PQ[QQ] * DQ + PQ[QQ + 1] * pQ)
        }
        let aQ = .5 - GQ * GQ - UQ * UQ;
        if (aQ >= 0) {
          const QQ = 3 * XQ[bQ + 1 + TQ[vQ + 1]];
          aQ *= aQ, FQ = aQ * aQ * (PQ[QQ] * GQ + PQ[QQ + 1] * UQ)
        }
        return 70 * (zQ + sQ + FQ)
      }
      noise3D(QQ, WQ, XQ) {
        const wQ = this.permMod12,
          qQ = this.perm;
        let sQ, FQ, gQ, JQ;
        const rQ = (QQ + WQ + XQ) * TQ,
          IQ = Math.floor(QQ + rQ),
          jQ = Math.floor(WQ + rQ),
          BQ = Math.floor(XQ + rQ),
          yQ = (IQ + jQ + BQ) * zQ,
          VQ = QQ - (IQ - yQ),
          DQ = WQ - (jQ - yQ),
          pQ = XQ - (BQ - yQ);
        let GQ, UQ, bQ, vQ, dQ, HQ;
        VQ >= DQ ? DQ >= pQ ? (GQ = 1, UQ = 0, bQ = 0, vQ = 1, dQ = 1, HQ = 0) : VQ >= pQ ? (GQ = 1, UQ = 0, bQ = 0, vQ = 1, dQ = 0, HQ = 1) : (GQ = 0, UQ = 0, bQ = 1, vQ = 1, dQ = 0, HQ = 1) : DQ < pQ ? (GQ = 0, UQ = 0, bQ = 1, vQ = 0, dQ = 1, HQ = 1) : VQ < pQ ? (GQ = 0, UQ = 1, bQ = 0, vQ = 0, dQ = 1, HQ = 1) : (GQ = 0, UQ = 1, bQ = 0, vQ = 1, dQ = 1, HQ = 0);
        const aQ = VQ - GQ + zQ,
          lQ = DQ - UQ + zQ,
          hQ = pQ - bQ + zQ,
          iQ = VQ - vQ + 2 * zQ,
          cQ = DQ - dQ + 2 * zQ,
          AQ = pQ - HQ + 2 * zQ,
          RQ = VQ - 1 + .5,
          EQ = DQ - 1 + .5,
          CQ = pQ - 1 + .5,
          uQ = 255 & IQ,
          LQ = 255 & jQ,
          kQ = 255 & BQ;
        let fQ = .6 - VQ * VQ - DQ * DQ - pQ * pQ;
        if (fQ < 0) sQ = 0;
        else {
          const QQ = 3 * wQ[uQ + qQ[LQ + qQ[kQ]]];
          fQ *= fQ, sQ = fQ * fQ * (PQ[QQ] * VQ + PQ[QQ + 1] * DQ + PQ[QQ + 2] * pQ)
        }
        let SQ = .6 - aQ * aQ - lQ * lQ - hQ * hQ;
        if (SQ < 0) FQ = 0;
        else {
          const QQ = 3 * wQ[uQ + GQ + qQ[LQ + UQ + qQ[kQ + bQ]]];
          SQ *= SQ, FQ = SQ * SQ * (PQ[QQ] * aQ + PQ[QQ + 1] * lQ + PQ[QQ + 2] * hQ)
        }
        let tQ = .6 - iQ * iQ - cQ * cQ - AQ * AQ;
        if (tQ < 0) gQ = 0;
        else {
          const QQ = 3 * wQ[uQ + vQ + qQ[LQ + dQ + qQ[kQ + HQ]]];
          tQ *= tQ, gQ = tQ * tQ * (PQ[QQ] * iQ + PQ[QQ + 1] * cQ + PQ[QQ + 2] * AQ)
        }
        let oQ = .6 - RQ * RQ - EQ * EQ - CQ * CQ;
        if (oQ < 0) JQ = 0;
        else {
          const QQ = 3 * wQ[uQ + 1 + qQ[LQ + 1 + qQ[kQ + 1]]];
          oQ *= oQ, JQ = oQ * oQ * (PQ[QQ] * RQ + PQ[QQ + 1] * EQ + PQ[QQ + 2] * CQ)
        }
        return 32 * (sQ + FQ + gQ + JQ)
      }
      noise4D(QQ, WQ, XQ, wQ) {
        const qQ = this.perm;
        let TQ, zQ, PQ, JQ, rQ;
        const IQ = (QQ + WQ + XQ + wQ) * sQ,
          jQ = Math.floor(QQ + IQ),
          BQ = Math.floor(WQ + IQ),
          yQ = Math.floor(XQ + IQ),
          VQ = Math.floor(wQ + IQ),
          DQ = (jQ + BQ + yQ + VQ) * FQ,
          pQ = QQ - (jQ - DQ),
          GQ = WQ - (BQ - DQ),
          UQ = XQ - (yQ - DQ),
          bQ = wQ - (VQ - DQ);
        let vQ = 0,
          dQ = 0,
          HQ = 0,
          aQ = 0;
        pQ > GQ ? vQ++ : dQ++, pQ > UQ ? vQ++ : HQ++, pQ > bQ ? vQ++ : aQ++, GQ > UQ ? dQ++ : HQ++, GQ > bQ ? dQ++ : aQ++, UQ > bQ ? HQ++ : aQ++;
        const lQ = vQ >= 3 ? 1 : 0,
          hQ = dQ >= 3 ? 1 : 0,
          iQ = HQ >= 3 ? 1 : 0,
          cQ = aQ >= 3 ? 1 : 0,
          AQ = vQ >= 2 ? 1 : 0,
          RQ = dQ >= 2 ? 1 : 0,
          EQ = HQ >= 2 ? 1 : 0,
          CQ = aQ >= 2 ? 1 : 0,
          uQ = vQ >= 1 ? 1 : 0,
          LQ = dQ >= 1 ? 1 : 0,
          kQ = HQ >= 1 ? 1 : 0,
          fQ = aQ >= 1 ? 1 : 0,
          SQ = pQ - lQ + FQ,
          tQ = GQ - hQ + FQ,
          oQ = UQ - iQ + FQ,
          eQ = bQ - cQ + FQ,
          nQ = pQ - AQ + 2 * FQ,
          xQ = GQ - RQ + 2 * FQ,
          YQ = UQ - EQ + 2 * FQ,
          NQ = bQ - CQ + 2 * FQ,
          ZQ = pQ - uQ + 3 * FQ,
          OQ = GQ - LQ + 3 * FQ,
          KQ = UQ - kQ + 3 * FQ,
          mQ = bQ - fQ + 3 * FQ,
          MQ = pQ - 1 + 4 * FQ,
          QW = GQ - 1 + 4 * FQ,
          WW = UQ - 1 + 4 * FQ,
          XW = bQ - 1 + 4 * FQ,
          wW = 255 & jQ,
          qW = 255 & BQ,
          TW = 255 & yQ,
          zW = 255 & VQ;
        let sW = .6 - pQ * pQ - GQ * GQ - UQ * UQ - bQ * bQ;
        if (sW < 0) TQ = 0;
        else {
          const QQ = qQ[wW + qQ[qW + qQ[TW + qQ[zW]]]] % 32 * 4;
          sW *= sW, TQ = sW * sW * (gQ[QQ] * pQ + gQ[QQ + 1] * GQ + gQ[QQ + 2] * UQ + gQ[QQ + 3] * bQ)
        }
        let FW = .6 - SQ * SQ - tQ * tQ - oQ * oQ - eQ * eQ;
        if (FW < 0) zQ = 0;
        else {
          const QQ = qQ[wW + lQ + qQ[qW + hQ + qQ[TW + iQ + qQ[zW + cQ]]]] % 32 * 4;
          FW *= FW, zQ = FW * FW * (gQ[QQ] * SQ + gQ[QQ + 1] * tQ + gQ[QQ + 2] * oQ + gQ[QQ + 3] * eQ)
        }
        let PW = .6 - nQ * nQ - xQ * xQ - YQ * YQ - NQ * NQ;
        if (PW < 0) PQ = 0;
        else {
          const QQ = qQ[wW + AQ + qQ[qW + RQ + qQ[TW + EQ + qQ[zW + CQ]]]] % 32 * 4;
          PW *= PW, PQ = PW * PW * (gQ[QQ] * nQ + gQ[QQ + 1] * xQ + gQ[QQ + 2] * YQ + gQ[QQ + 3] * NQ)
        }
        let gW = .6 - ZQ * ZQ - OQ * OQ - KQ * KQ - mQ * mQ;
        if (gW < 0) JQ = 0;
        else {
          const QQ = qQ[wW + uQ + qQ[qW + LQ + qQ[TW + kQ + qQ[zW + fQ]]]] % 32 * 4;
          gW *= gW, JQ = gW * gW * (gQ[QQ] * ZQ + gQ[QQ + 1] * OQ + gQ[QQ + 2] * KQ + gQ[QQ + 3] * mQ)
        }
        let JW = .6 - MQ * MQ - QW * QW - WW * WW - XW * XW;
        if (JW < 0) rQ = 0;
        else {
          const QQ = qQ[wW + 1 + qQ[qW + 1 + qQ[TW + 1 + qQ[zW + 1]]]] % 32 * 4;
          JW *= JW, rQ = JW * JW * (gQ[QQ] * MQ + gQ[QQ + 1] * QW + gQ[QQ + 2] * WW + gQ[QQ + 3] * XW)
        }
        return 27 * (TQ + zQ + PQ + JQ + rQ)
      }
    }
  }
};
Object.freeze(modules);
for (const QQ in modules) Object.freeze(modules[QQ]);