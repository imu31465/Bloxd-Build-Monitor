/*! For license information please see bqoxjr.214.f99eb3b3.chunk.js.LICENSE.txt */
export const id = 214;
export const ids = [214];
export const modules = {
  39090: (QQ, FQ, wQ) => {
    QQ.exports = qQ;
    var LQ = wQ(334);

    function qQ(QQ, FQ) {
      if (!(this instanceof qQ)) return new qQ(QQ, FQ);
      var wQ = LQ.create();
      LQ.add(wQ, QQ, FQ), this.base = LQ.min(LQ.create(), QQ, wQ), this.vec = LQ.clone(FQ), this.max = LQ.max(LQ.create(), QQ, wQ), this.mag = LQ.length(this.vec)
    }
    var oQ = qQ.prototype;
    oQ.width = function() {
      return this.vec[0]
    }, oQ.height = function() {
      return this.vec[1]
    }, oQ.depth = function() {
      return this.vec[2]
    }, oQ.x0 = function() {
      return this.base[0]
    }, oQ.y0 = function() {
      return this.base[1]
    }, oQ.z0 = function() {
      return this.base[2]
    }, oQ.x1 = function() {
      return this.max[0]
    }, oQ.y1 = function() {
      return this.max[1]
    }, oQ.z1 = function() {
      return this.max[2]
    }, oQ.translate = function(QQ) {
      return LQ.add(this.max, this.max, QQ), LQ.add(this.base, this.base, QQ), this
    }, oQ.setPosition = function(QQ) {
      return LQ.add(this.max, QQ, this.vec), LQ.copy(this.base, QQ), this
    }, oQ.expand = function(QQ) {
      var FQ = LQ.create(),
        wQ = LQ.create();
      return LQ.max(FQ, QQ.max, this.max), LQ.min(wQ, QQ.base, this.base), LQ.subtract(FQ, FQ, wQ), new qQ(wQ, FQ)
    }, oQ.intersects = function(QQ) {
      return !(QQ.base[0] > this.max[0]) && (!(QQ.base[1] > this.max[1]) && (!(QQ.base[2] > this.max[2]) && (!(QQ.max[0] < this.base[0]) && (!(QQ.max[1] < this.base[1]) && !(QQ.max[2] < this.base[2])))))
    }, oQ.touches = function(QQ) {
      var FQ = this.union(QQ);
      return null !== FQ && (0 == FQ.width() || 0 == FQ.height() || 0 == FQ.depth())
    }, oQ.union = function(QQ) {
      if (!this.intersects(QQ)) return null;
      var FQ = Math.max(QQ.base[0], this.base[0]),
        wQ = Math.max(QQ.base[1], this.base[1]),
        LQ = Math.max(QQ.base[2], this.base[2]);
      return new qQ([FQ, wQ, LQ], [Math.min(QQ.max[0], this.max[0]) - FQ, Math.min(QQ.max[1], this.max[1]) - wQ, Math.min(QQ.max[2], this.max[2]) - LQ])
    }
  },
  39087: QQ => {
    QQ.exports = function(QQ, FQ, wQ, LQ, qQ, oQ) {
      var DQ = +FQ[0],
        kQ = +FQ[1],
        vQ = +FQ[2],
        mQ = +wQ[0],
        uQ = +wQ[1],
        HQ = +wQ[2],
        bQ = Math.sqrt(mQ * mQ + uQ * uQ + HQ * HQ);
      if (0 === bQ) throw new Error("Can't raycast along a zero vector");
      return function(QQ, FQ, wQ, LQ, qQ, oQ, DQ, kQ, vQ, mQ) {
        for (var uQ = 0, HQ = Math.floor, bQ = 0 | HQ(FQ), YQ = 0 | HQ(wQ), xQ = 0 | HQ(LQ), AQ = qQ > 0 ? 1 : -1, tQ = oQ > 0 ? 1 : -1, eQ = DQ > 0 ? 1 : -1, MQ = Math.abs(1 / qQ), GQ = Math.abs(1 / oQ), pQ = Math.abs(1 / DQ), cQ = MQ < 1 / 0 ? MQ * (AQ > 0 ? bQ + 1 - FQ : FQ - bQ) : 1 / 0, CQ = GQ < 1 / 0 ? GQ * (tQ > 0 ? YQ + 1 - wQ : wQ - YQ) : 1 / 0, SQ = pQ < 1 / 0 ? pQ * (eQ > 0 ? xQ + 1 - LQ : LQ - xQ) : 1 / 0, iQ = -1; uQ <= kQ;) {
          var WQ = QQ(bQ, YQ, xQ);
          if (WQ) return vQ && (vQ[0] = FQ + uQ * qQ, vQ[1] = wQ + uQ * oQ, vQ[2] = LQ + uQ * DQ), mQ && (mQ[0] = mQ[1] = mQ[2] = 0, 0 === iQ && (mQ[0] = -AQ), 1 === iQ && (mQ[1] = -tQ), 2 === iQ && (mQ[2] = -eQ)), WQ;
          cQ < CQ ? cQ < SQ ? (bQ += AQ, uQ = cQ, cQ += MQ, iQ = 0) : (xQ += eQ, uQ = SQ, SQ += pQ, iQ = 2) : CQ < SQ ? (YQ += tQ, uQ = CQ, CQ += GQ, iQ = 1) : (xQ += eQ, uQ = SQ, SQ += pQ, iQ = 2)
        }
        return vQ && (vQ[0] = FQ + uQ * qQ, vQ[1] = wQ + uQ * oQ, vQ[2] = LQ + uQ * DQ), mQ && (mQ[0] = mQ[1] = mQ[2] = 0), 0
      }(QQ, DQ, kQ, vQ, mQ /= bQ, uQ /= bQ, HQ /= bQ, LQ = "undefined" === typeof LQ ? 64 : +LQ, qQ, oQ)
    }
  },
  38645: (QQ, FQ, wQ) => {
    wQ.d(FQ, {
      d: () => kQ,
      f: () => oQ
    });
    var LQ = wQ(3965);
    let qQ = null;

    function oQ(QQ) {
      return null !== qQ && QQ === qQ
    }

    function DQ() {
      this.KJ = !1, this.stopPropagation = !1, this.aJ = !1, this.disabled = !1
    }
    class kQ {
      constructor(QQ, FQ) {
        this.version = "0.7.0";
        var wQ = Object.assign({}, new DQ, FQ || {});
        this.element = QQ || document, this.KJ = !!wQ.KJ, this.stopPropagation = !!wQ.stopPropagation, this.aJ = !!wQ.aJ, this.disabled = !!wQ.disabled, this.filterEvents = (QQ, FQ) => !0, this.ignoreEvent = QQ => !1, this.down = new LQ.EventEmitter, this.up = new LQ.EventEmitter, this.state = {}, this.gJ = {
          dx: 0,
          dy: 0,
          pFQ: 0,
          cFQ: 0,
          CFQ: 0
        }, this.pressCount = {}, this.releaseCount = {}, this._keyBindmap = {}, this._keyStates = {}, this._bindPressCount = {}, this._touches = {
          lastX: 0,
          lastY: 0,
          currID: null
        }, "loading" !== document.readyState ? mQ(this) : document.addEventListener("DOMContentLoaded", (QQ => {
          mQ(this)
        }), {
          once: !0
        })
      }
      bind(QQ) {
        for (var FQ = arguments.length, wQ = new Array(FQ > 1 ? FQ - 1 : 0), LQ = 1; LQ < FQ; LQ++) wQ[LQ - 1] = arguments[LQ];
        wQ.forEach((FQ => {
          var wQ = this._keyBindmap[FQ] || [];
          wQ.includes(QQ) || (wQ.push(QQ), this._keyBindmap[FQ] = wQ)
        })), this.state[QQ] = !!this.state[QQ], this.pressCount[QQ] = this.pressCount[QQ] || 0, this.releaseCount[QQ] = this.releaseCount[QQ] || 0
      }
      unbind(QQ) {
        for (var FQ in this._keyBindmap) {
          var wQ = this._keyBindmap[FQ],
            LQ = wQ.indexOf(QQ);
          LQ > -1 && wQ.splice(LQ, 1)
        }
      }
      getBindings() {
        var QQ = {};
        for (var FQ in this._keyBindmap) {
          this._keyBindmap[FQ].forEach((wQ => {
            QQ[wQ] = QQ[wQ] || [], QQ[wQ].push(FQ)
          }))
        }
        return QQ
      }
      fH() {
        vQ(this.gJ), vQ(this.pressCount), vQ(this.releaseCount)
      }
    }

    function vQ(QQ) {
      for (var FQ in QQ) QQ[FQ] = 0
    }

    function mQ(QQ) {
      window.addEventListener("keydown", tQ.bind(null, QQ, !0), !1), window.addEventListener("keyup", tQ.bind(null, QQ, !1), !1);
      var FQ = {
        passive: !0
      };
      QQ.element.addEventListener("touchstart", YQ.bind(void 0, QQ), {
        passive: !1
      }), QQ.element.addEventListener("touchend", AQ.bind(void 0, QQ), FQ), QQ.element.addEventListener("mousedown", eQ.bind(null, QQ, !0), FQ), window.document.addEventListener("mouseup", eQ.bind(null, QQ, !1), FQ), QQ.element.addEventListener("touchmove", MQ.bind(null, QQ), FQ), QQ.element.addEventListener("mousemove", MQ.bind(null, QQ), FQ), window.PointerEvent, QQ.element.addEventListener("wheel", GQ.bind(null, QQ), FQ), QQ.element.addEventListener("contextmenu", pQ.bind(null, QQ), !1), window.addEventListener("blur", SQ.bind(null, QQ), !1)
    }
    var uQ = 0,
      HQ = 0,
      bQ = null;

    function YQ(QQ, FQ) {
      FQ.preventDefault(), xQ(FQ)
    }

    function xQ(QQ) {
      let FQ = !1;
      for (let wQ = 0; wQ < QQ.touches.length; ++wQ)
        if (QQ.touches[wQ].identifier === bQ) {
          FQ = !0;
          break
        } if (!FQ) {
        const FQ = QQ.changedTouches[0];
        uQ = FQ.clientX, HQ = FQ.clientY, bQ = FQ.identifier
      }
    }

    function AQ(QQ, FQ) {
      for (var wQ = FQ.changedTouches, LQ = 0; LQ < wQ.length; ++LQ) wQ[LQ].identifier === bQ && (bQ = null)
    }

    function tQ(QQ, FQ, wQ) {
      if (!QQ.ignoreEvent(wQ)) try {
        iQ(QQ, wQ), FQ && wQ.isTrusted && !wQ.repeat && QQ._keyStates[wQ.code] && WQ(QQ, wQ.code)
      } finally {
        RQ(wQ.code, FQ, QQ, wQ)
      }
    }

    function eQ(QQ, FQ, wQ) {
      if (!QQ.ignoreEvent(wQ)) try {
        iQ(QQ, wQ)
      } finally {
        ! function(QQ, FQ, wQ) {
          if ("pointerId" in wQ)
            if (FQ) {
              if (null !== QQ._touches.currID) return;
              QQ._touches.currID = wQ.pointerId
            } else {
              if (QQ._touches.currID !== wQ.pointerId) return;
              QQ._touches.currID = null
            } var LQ = "button" in wQ ? wQ.button + 1 : 1;
          RQ("Mouse" + LQ, FQ, QQ, wQ)
        }(QQ, FQ, wQ)
      }
    }

    function MQ(QQ, FQ) {
      var wQ = FQ.movementX || FQ.mozMovementX || 0,
        LQ = FQ.movementY || FQ.mozMovementY || 0;
      if (FQ.touches && 0 === (wQ | LQ)) {
        var qQ = function(QQ) {
          xQ(QQ);
          for (let FQ = 0; FQ < QQ.changedTouches.length; ++FQ)
            if (QQ.changedTouches[FQ].identifier == bQ) {
              const wQ = QQ.changedTouches[FQ],
                LQ = [wQ.clientX - uQ, wQ.clientY - HQ];
              return uQ = wQ.clientX, HQ = wQ.clientY, LQ
            } return console.error(`Did not find touch id ${bQ}`), [0, 0]
        }(FQ);
        wQ = qQ[0], LQ = qQ[1]
      }
      QQ.gJ.dx += wQ, QQ.gJ.dy += LQ
    }

    function GQ(QQ, FQ) {
      iQ(QQ, FQ);
      var wQ = 1;
      switch (FQ.deltaMode) {
        case 0:
          wQ = 1;
          break;
        case 1:
          wQ = 12;
          break;
        case 2:
          wQ = QQ.element.clientHeight || window.innerHeight
      }
      QQ.gJ.pFQ += (FQ.deltaX || 0) * wQ, QQ.gJ.cFQ += (FQ.deltaY || 0) * wQ, QQ.gJ.CFQ += (FQ.deltaZ || 0) * wQ
    }

    function pQ(QQ, FQ) {
      if (!QQ.aJ) return FQ.preventDefault(), !1
    }
    var cQ = {
      AltLeft: "altKey",
      AltRight: "altKey",
      ControlLeft: "ctrlKey",
      ControlRight: "ctrlKey",
      ShiftLeft: "shiftKey",
      ShiftRight: "shiftKey",
      MetaLeft: "metaKey",
      MetaRight: "metaKey"
    };

    function CQ(QQ, FQ) {
      return !!QQ[cQ[FQ]] || ("AltRight" === FQ || "ControlLeft" === FQ) && "function" === typeof QQ.getModifierState && !0 === QQ.getModifierState("AltGraph")
    }

    function SQ(QQ, FQ) {
      for (var wQ in QQ._modifiersHeldThroughBlur = {}, cQ) QQ._keyStates[wQ] && (QQ._modifiersHeldThroughBlur[wQ] = !0);
      FQ && FQ.isTrusted && function() {
        try {
          return window.self !== window.top
        } catch (QQ) {
          return !0
        }
      }() && (clearTimeout(QQ._blurRelease), QQ._blurRelease = setTimeout((function() {
        if (!document.hasFocus())
          for (var FQ in QQ._modifiersHeldThroughBlur = {}, QQ._keyStates) QQ._keyStates[FQ] && !/^Mouse\d/.test(FQ) && WQ(QQ, FQ)
      }), 0))
    }

    function iQ(QQ, FQ) {
      var wQ = QQ._modifiersHeldThroughBlur;
      if (wQ && FQ.isTrusted && document.hasFocus())
        for (var LQ in wQ) delete wQ[LQ], QQ._keyStates[LQ] && LQ !== FQ.code && (CQ(FQ, LQ) || WQ(QQ, LQ))
    }

    function WQ(QQ, FQ) {
      const wQ = {
          code: FQ,
          preventDefault: () => {},
          stopPropagation: () => {}
        },
        LQ = qQ;
      qQ = wQ;
      try {
        RQ(FQ, !1, QQ, wQ)
      } finally {
        qQ = LQ
      }
    }

    function RQ(QQ, FQ, wQ, LQ) {
      var qQ = wQ._keyBindmap[QQ];
      qQ && (OQ(wQ._keyStates[QQ], FQ) && (wQ._keyStates[QQ] = FQ, qQ.forEach((QQ => {
        (!wQ.filterEvents || wQ.filterEvents(LQ, QQ)) && function(QQ, FQ, wQ, LQ) {
          var qQ = FQ ? wQ.pressCount : wQ.releaseCount;
          qQ[QQ] = (qQ[QQ] || 0) + 1;
          var oQ = wQ._bindPressCount[QQ] || 0;
          (oQ += FQ ? 1 : -1) < 0 && (oQ = 0);
          wQ._bindPressCount[QQ] = oQ;
          var DQ = wQ.state[QQ];
          if (OQ(DQ, oQ)) {
            wQ.state[QQ] = oQ > 0;
            var kQ = FQ ? wQ.down : wQ.up;
            wQ.disabled || kQ.emit(QQ, LQ)
          }
        }(QQ, FQ, wQ, LQ)
      }))), "button" in LQ || (wQ.KJ && !LQ.defaultPrevented && LQ.preventDefault(), wQ.stopPropagation && LQ.stopPropagation()))
    }

    function OQ(QQ, FQ) {
      return QQ ? !FQ : FQ
    }
  },
  36166: (QQ, FQ) => {
    function wQ(QQ) {
      if (QQ && "object" === typeof QQ) {
        var FQ = QQ.which || QQ.keyCode || QQ.charCode;
        FQ && (QQ = FQ)
      }
      if ("number" === typeof QQ) return DQ[QQ];
      var wQ, oQ = String(QQ);
      return (wQ = LQ[oQ.toLowerCase()]) ? wQ : (wQ = qQ[oQ.toLowerCase()]) || (1 === oQ.length ? oQ.charCodeAt(0) : void 0)
    }
    wQ.isEventKey = function(QQ, FQ) {
      if (QQ && "object" === typeof QQ) {
        var wQ = QQ.which || QQ.keyCode || QQ.charCode;
        if (null === wQ || void 0 === wQ) return !1;
        if ("string" === typeof FQ) {
          var oQ;
          if (oQ = LQ[FQ.toLowerCase()]) return oQ === wQ;
          if (oQ = qQ[FQ.toLowerCase()]) return oQ === wQ
        } else if ("number" === typeof FQ) return FQ === wQ;
        return !1
      }
    };
    var LQ = (FQ = QQ.exports = wQ).code = FQ.codes = {
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
      qQ = FQ.aliases = {
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
    for (oQ = 97; oQ < 123; oQ++) LQ[String.fromCharCode(oQ)] = oQ - 32;
    for (var oQ = 48; oQ < 58; oQ++) LQ[oQ - 48] = oQ;
    for (oQ = 1; oQ < 13; oQ++) LQ["f" + oQ] = oQ + 111;
    for (oQ = 0; oQ < 10; oQ++) LQ["numpad " + oQ] = oQ + 96;
    var DQ = FQ.names = FQ.title = {};
    for (oQ in LQ) DQ[LQ[oQ]] = oQ;
    for (var kQ in qQ) LQ[kQ] = qQ[kQ]
  },
  39075: (QQ, FQ, wQ) => {
    wQ.d(FQ, {
      d: () => LQ
    });
    class LQ {
      constructor() {
        let QQ = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
          FQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 10;
        this.Gl = !1, this.Rl = !1, this.mN = 30, this.hK = 0, this.Ul = 100, this.Kt = !1, this.fullscreen = !1, this.nG = function(QQ) {}, this.Tl = function(QQ, FQ, wQ) {}, this.Bl = function() {}, this.aG = function() {}, this.Kl = function() {}, this.onFullscreenChanged = function() {}, this.onPointerLockError = function(QQ) {}, this._data = new qQ(FQ),
          function(QQ) {
            if ("loading" === document.readyState) {
              var FQ = () => {
                document.removeEventListener("readystatechange", FQ), QQ()
              };
              document.addEventListener("readystatechange", FQ)
            } else setTimeout(QQ, 0)
          }((() => {
            ! function(QQ) {
              var FQ = QQ._data,
                wQ = FQ.nowObject.now();
              FQ.lastTickStarted = wQ, FQ.lastFrameStarted = wQ, FQ.lastRenderStarted = wQ, FQ.frameCB = () => function(QQ) {
                var FQ = QQ._data;
                requestAnimationFrame(FQ.frameCB), kQ(QQ);
                var wQ = FQ.nowObject.now(),
                  LQ = wQ - FQ.lastFrameStarted;
                if (FQ.lastFrameStarted = wQ, QQ.hK > 0) {
                  FQ.renderAccum += LQ;
                  var qQ = 1e3 / QQ.hK;
                  if (FQ.renderAccum < qQ) return;
                  FQ.renderAccum -= qQ, FQ.renderAccum > qQ && (FQ.renderAccum = qQ)
                }
                var oQ = wQ - FQ.lastRenderStarted;
                FQ.lastRenderStarted = wQ;
                var DQ = 1e3 / QQ.mN,
                  vQ = (wQ - FQ.lastTickStarted) / DQ;
                vQ < 0 && (vQ = 0);
                QQ.Tl(oQ, vQ, DQ), setTimeout(kQ, 0, QQ, !0)
              }(QQ), FQ.intervalCB = () => kQ(QQ), requestAnimationFrame(FQ.frameCB), FQ.pollTime > 0 && (FQ.intervalID = setInterval(FQ.intervalCB, Math.max(FQ.pollTime, 1e3 / QQ.mN / 2)))
            }(this),
            function(QQ, FQ) {
              if (!FQ) return;
              var wQ = !1,
                LQ = !1,
                qQ = QQ => {
                  if (!!QQ !== (wQ = FQ === document.pointerLockElement))
                    if (QQ) {
                      var LQ = FQ.requestPointerLock();
                      LQ && LQ.catch && LQ.catch((QQ => {}))
                    } else document.exitPointerLock()
                },
                oQ = QQ => {
                  !!QQ !== (LQ = FQ === document.fullscreenElement) && (QQ ? FQ.requestFullscreen ? FQ.requestFullscreen() : FQ.webkitRequestFullscreen && FQ.webkitRequestFullscreen() : document.exitFullscreen ? document.exitFullscreen() : document.webkitExitFullscreen && document.webkitExitFullscreen())
                };
              document.addEventListener("pointerlockchange", (LQ => {
                wQ = FQ === document.pointerLockElement, QQ.Kl(wQ)
              })), document.addEventListener("fullscreenchange", (wQ => {
                LQ = FQ === document.fullscreenElement, QQ.onFullscreenChanged(LQ)
              })), document.addEventListener("pointerlockerror", (LQ => {
                wQ = FQ === document.pointerLockElement, QQ.onPointerLockError(LQ)
              })), Object.defineProperty(QQ, "Kt", {
                get: () => wQ,
                set: qQ
              }), Object.defineProperty(QQ, "fullscreen", {
                get: () => LQ,
                set: oQ
              }), FQ.addEventListener("click", (FQ => {
                QQ.Gl && qQ(!0), QQ.Rl && oQ(!0)
              }));
              var DQ = () => QQ.aG();
              if (window.ResizeObserver) {
                new ResizeObserver(DQ).observe(FQ)
              } else window.addEventListener("resize", DQ)
            }(this, QQ), this.Bl()
          }))
      }
    }

    function qQ() {
      let QQ = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 10;
      this.nowObject = performance || Date, this.pollTime = QQ, this.renderAccum = 0, this.lastTickStarted = 0, this.lastFrameStarted = 0, this.lastRenderStarted = 0, this.avgTickTime = 2, this.frameCB = null, this.intervalCB = null, this.intervalID = -1
    }
    var oQ = 3,
      DQ = 20;

    function kQ(QQ) {
      for (var FQ = QQ._data, wQ = 1e3 / QQ.mN, LQ = FQ.nowObject.now() + DQ, qQ = 0; FQ.nowObject.now() >= FQ.lastTickStarted + wQ && FQ.nowObject.now() < LQ && ++qQ <= oQ;) QQ.nG(wQ), FQ.lastTickStarted += wQ;
      var kQ = 5 * (wQ + 5),
        vQ = FQ.nowObject.now();
      if (vQ - FQ.lastTickStarted > kQ)
        for (; vQ >= FQ.lastTickStarted + wQ;) FQ.lastTickStarted += wQ
    }
  },
  36322: (QQ, FQ, wQ) => {
    wQ.d(FQ, {
      c: () => DQ
    });
    var LQ = wQ(53);
    const qQ = LQ.useLayoutEffect;
    const oQ = function(QQ) {
      var FQ = (0, LQ.useRef)(QQ);
      return qQ((function() {
        FQ.current = QQ
      })), FQ
    };
    var DQ = function(QQ) {
      var FQ = oQ(QQ);
      (0, LQ.useEffect)((function() {
        var QQ = function(QQ) {
          var wQ;
          if (null != FQ.current && (wQ = FQ.current(QQ)), QQ.defaultPrevented && (QQ.returnValue = ""), "string" === typeof wQ) return QQ.returnValue = wQ, wQ
        };
        return window.addEventListener("beforeunload", QQ),
          function() {
            window.removeEventListener("beforeunload", QQ)
          }
      }), [])
    }
  },
  36218: QQ => {
    var FQ, wQ = "undefined" !== typeof window ? window.navigator.userAgent : "",
      LQ = /OS X/.test(wQ),
      qQ = /Opera/.test(wQ),
      oQ = !/like Gecko/.test(wQ) && !qQ,
      DQ = QQ.exports = {
        0: LQ ? "<menu>" : "<UNK>",
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
        93: LQ ? "<meta>" : "<menu>",
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
        173: LQ && oQ ? "-" : "<volume-mute>",
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
    for (FQ = 58; FQ < 65; ++FQ) DQ[FQ] = String.fromCharCode(FQ);
    for (FQ = 48; FQ < 58; ++FQ) DQ[FQ] = FQ - 48 + "";
    for (FQ = 65; FQ < 91; ++FQ) DQ[FQ] = String.fromCharCode(FQ);
    for (FQ = 96; FQ < 106; ++FQ) DQ[FQ] = "<num-" + (FQ - 96) + ">";
    for (FQ = 112; FQ < 136; ++FQ) DQ[FQ] = "F" + (FQ - 111)
  },
  38582: (QQ, FQ, wQ) => {
    function LQ(QQ, FQ, wQ, LQ, qQ) {
      var oQ = {};
      return Object.keys(LQ).forEach((function(QQ) {
        oQ[QQ] = LQ[QQ]
      })), oQ.enumerable = !!oQ.enumerable, oQ.configurable = !!oQ.configurable, ("value" in oQ || oQ.initializer) && (oQ.writable = !0), oQ = wQ.slice().reverse().reduce((function(wQ, LQ) {
        return LQ(QQ, FQ, wQ) || wQ
      }), oQ), qQ && void 0 !== oQ.initializer && (oQ.value = oQ.initializer ? oQ.initializer.call(qQ) : void 0, oQ.initializer = void 0), void 0 === oQ.initializer && (Object.defineProperty(QQ, FQ, oQ), oQ = null), oQ
    }
    wQ.d(FQ, {
      c: () => LQ
    })
  },
  38579: (QQ, FQ, wQ) => {
    function LQ(QQ, FQ, wQ, LQ) {
      wQ && Object.defineProperty(QQ, FQ, {
        enumerable: wQ.enumerable,
        configurable: wQ.configurable,
        writable: wQ.writable,
        value: wQ.initializer ? wQ.initializer.call(LQ) : void 0
      })
    }
    wQ.d(FQ, {
      e: () => LQ
    })
  },
  38200: (QQ, FQ, wQ) => {
    wQ.d(FQ, {
      b: () => oQ
    });
    var LQ = wQ(38203);
    const qQ = (QQ, FQ, wQ) => QQ ? QQ.getClassName && "Mesh" === QQ.getClassName() ? null : !QQ.getClassName || "SubMesh" !== QQ.getClassName() && "PhysicsBody" !== QQ.getClassName() ? QQ.clone ? QQ.clone() : Array.isArray(QQ) ? QQ.slice() : wQ && "object" === typeof QQ ? {
      ...QQ
    } : null : QQ.clone(FQ) : null;
    class oQ {
      static DeepCopy(QQ, FQ, wQ, oQ) {
        let DQ = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
        const kQ = function(QQ) {
          const FQ = [];
          do {
            const wQ = Object.getOwnPropertyNames(QQ);
            for (const QQ of wQ) - 1 === FQ.indexOf(QQ) && FQ.push(QQ)
          } while (QQ = Object.getPrototypeOf(QQ));
          return FQ
        }(QQ);
        for (const mQ of kQ) {
          if ("_" === mQ[0] && (!oQ || -1 === oQ.indexOf(mQ))) continue;
          if (mQ.endsWith("Observable")) continue;
          if (wQ && -1 !== wQ.indexOf(mQ)) continue;
          const kQ = QQ[mQ],
            uQ = typeof kQ;
          if ("function" !== uQ) try {
            if ("object" === uQ)
              if (kQ instanceof Uint8Array) FQ[mQ] = Uint8Array.from(kQ);
              else if (kQ instanceof Array) {
              if (FQ[mQ] = [], kQ.length > 0)
                if ("object" == typeof kQ[0])
                  for (let QQ = 0; QQ < kQ.length; QQ++) {
                    const wQ = qQ(kQ[QQ], FQ, DQ); - 1 === FQ[mQ].indexOf(wQ) && FQ[mQ].push(wQ)
                  } else FQ[mQ] = kQ.slice(0)
            } else FQ[mQ] = qQ(kQ, FQ, DQ);
            else FQ[mQ] = kQ
          } catch (vQ) {
            LQ.c.Warn(vQ.message)
          }
        }
      }
    }
  },
  38236: (QQ, FQ, wQ) => {
    wQ.d(FQ, {
      e: () => qQ,
      f: () => oQ,
      j: () => DQ,
      k: () => kQ
    });
    var LQ = wQ(36873);
    class qQ {
      constructor(QQ, FQ, wQ) {
        this.gradient = QQ, this.color1 = FQ, this.color2 = wQ
      }
      getColorToRef(QQ) {
        this.color2 ? LQ.e.LerpToRef(this.color1, this.color2, Math.random(), QQ) : QQ.Qs(this.color1)
      }
    }
    class oQ {
      constructor(QQ, FQ) {
        this.gradient = QQ, this.color = FQ
      }
    }
    class DQ {
      constructor(QQ, FQ, wQ) {
        this.gradient = QQ, this.factor1 = FQ, this.factor2 = wQ
      }
      getFactor() {
        return void 0 === this.factor2 || this.factor2 === this.factor1 ? this.factor1 : this.factor1 + (this.factor2 - this.factor1) * Math.random()
      }
    }
    class kQ {
      static GetCurrentGradient(QQ, FQ, wQ) {
        if (FQ[0].gradient > QQ) return void wQ(FQ[0], FQ[0], 1);
        for (let qQ = 0; qQ < FQ.length - 1; qQ++) {
          const LQ = FQ[qQ],
            oQ = FQ[qQ + 1];
          if (QQ >= LQ.gradient && QQ <= oQ.gradient) {
            return void wQ(LQ, oQ, (QQ - LQ.gradient) / (oQ.gradient - LQ.gradient))
          }
        }
        const LQ = FQ.length - 1;
        wQ(FQ[LQ], FQ[LQ], 1)
      }
    }
  },
  38203: (QQ, FQ, wQ) => {
    wQ.d(FQ, {
      c: () => LQ
    });
    class LQ {
      static _CheckLimit(QQ, FQ) {
        let wQ = LQ._LogLimitOutputs[QQ];
        return wQ ? wQ.current++ : (wQ = {
          limit: FQ,
          current: 1
        }, LQ._LogLimitOutputs[QQ] = wQ), wQ.current <= wQ.limit
      }
      static _GenerateLimitMessage(QQ) {
        let FQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
        const wQ = LQ._LogLimitOutputs[QQ];
        if (!wQ || !LQ.MessageLimitReached) return;
        const qQ = this._Levels[FQ];
        wQ.current === wQ.limit && LQ[qQ.name](LQ.MessageLimitReached.replace(/%LIMIT%/g, "" + wQ.limit).replace(/%TYPE%/g, qQ.name ?? ""))
      }
      static _AddLogEntry(QQ) {
        LQ._LogCache = QQ + LQ._LogCache, LQ.OnNewCacheEntry && LQ.OnNewCacheEntry(QQ)
      }
      static _FormatMessage(QQ) {
        const FQ = QQ => QQ < 10 ? "0" + QQ : "" + QQ,
          wQ = new Date;
        return "[" + FQ(wQ.getHours()) + ":" + FQ(wQ.getMinutes()) + ":" + FQ(wQ.getSeconds()) + "]: " + QQ
      }
      static _LogDisabled(QQ, FQ) {}
      static _LogEnabled() {
        let QQ = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
          FQ = arguments.length > 1 ? arguments[1] : void 0,
          wQ = arguments.length > 2 ? arguments[2] : void 0;
        const qQ = Array.isArray(FQ) ? FQ[0] : FQ;
        if (void 0 !== wQ && !LQ._CheckLimit(qQ, wQ)) return;
        const oQ = LQ._FormatMessage(qQ),
          DQ = this._Levels[QQ],
          kQ = Array.isArray(FQ) ? FQ.slice(1) : [];
        DQ.logFunc && DQ.logFunc("BJS - " + oQ, ...kQ);
        const vQ = `<div style='color:${DQ.color}'>${oQ}</div><br>`;
        LQ._AddLogEntry(vQ), LQ._GenerateLimitMessage(qQ, QQ)
      }
      static get LogCache() {
        return LQ._LogCache
      }
      static ClearLogCache() {
        LQ._LogCache = "", LQ._LogLimitOutputs = {}, LQ.errorsCount = 0
      }
      static set LogLevels(QQ) {
        LQ.Log = LQ._LogDisabled, LQ.Warn = LQ._LogDisabled, LQ.Error = LQ._LogDisabled;
        const FQ = [LQ.MessageLogLevel, LQ.WarningLogLevel, LQ.ErrorLogLevel];
        for (const wQ of FQ)
          if ((QQ & wQ) === wQ) {
            const QQ = this._Levels[wQ];
            LQ[QQ.name] = LQ._LogEnabled.bind(LQ, wQ)
          }
      }
    }
    LQ.NoneLogLevel = 0, LQ.MessageLogLevel = 1, LQ.WarningLogLevel = 2, LQ.ErrorLogLevel = 4, LQ.AllLogLevel = 7, LQ.MessageLimitReached = "Too many %TYPE%s (%LIMIT%), no more %TYPE%s will be reported for this message.", LQ._LogCache = "", LQ._LogLimitOutputs = {}, LQ._Levels = [{}, {
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
    }], LQ.errorsCount = 0, LQ.Log = LQ._LogEnabled.bind(LQ, LQ.MessageLogLevel), LQ.Warn = LQ._LogEnabled.bind(LQ, LQ.WarningLogLevel), LQ.Error = LQ._LogEnabled.bind(LQ, LQ.ErrorLogLevel)
  },
  38244: (QQ, FQ, wQ) => {
    wQ.d(FQ, {
      d: () => DQ
    });
    var LQ = wQ(36696),
      qQ = wQ(36729),
      oQ = wQ(38200);
    class DQ {
      constructor() {
        this.direction1 = new LQ.p(0, 1, 0), this.direction2 = new LQ.p(0, 1, 0), this.minEmitBox = new LQ.p(-.5, -.5, -.5), this.maxEmitBox = new LQ.p(.5, .5, .5)
      }
      startDirectionFunction(QQ, FQ, wQ, oQ) {
        const DQ = (0, qQ.RandomRange)(this.direction1.x, this.direction2.x),
          kQ = (0, qQ.RandomRange)(this.direction1.y, this.direction2.y),
          vQ = (0, qQ.RandomRange)(this.direction1.z, this.direction2.z);
        if (oQ) return FQ.x = DQ, FQ.y = kQ, void(FQ.z = vQ);
        LQ.p.TransformNormalFromFloatsToRef(DQ, kQ, vQ, QQ, FQ)
      }
      startPositionFunction(QQ, FQ, wQ, oQ) {
        const DQ = (0, qQ.RandomRange)(this.minEmitBox.x, this.maxEmitBox.x),
          kQ = (0, qQ.RandomRange)(this.minEmitBox.y, this.maxEmitBox.y),
          vQ = (0, qQ.RandomRange)(this.minEmitBox.z, this.maxEmitBox.z);
        if (oQ) return FQ.x = DQ, FQ.y = kQ, void(FQ.z = vQ);
        LQ.p.TransformCoordinatesFromFloatsToRef(DQ, kQ, vQ, QQ, FQ)
      }
      clone() {
        const QQ = new DQ;
        return oQ.b.DeepCopy(this, QQ), QQ
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
        return QQ.type = this.getClassName(), QQ.direction1 = this.direction1.RLQ(), QQ.direction2 = this.direction2.RLQ(), QQ.minEmitBox = this.minEmitBox.RLQ(), QQ.maxEmitBox = this.maxEmitBox.RLQ(), QQ
      }
      parse(QQ) {
        LQ.p.FromArrayToRef(QQ.direction1, 0, this.direction1), LQ.p.FromArrayToRef(QQ.direction2, 0, this.direction2), LQ.p.FromArrayToRef(QQ.minEmitBox, 0, this.minEmitBox), LQ.p.FromArrayToRef(QQ.maxEmitBox, 0, this.maxEmitBox)
      }
    }
  },
  38192: (QQ, FQ, wQ) => {
    wQ.d(FQ, {
      d: () => kQ,
      e: () => DQ
    });
    var LQ = wQ(36696),
      qQ = wQ(36729),
      oQ = wQ(38200);
    class DQ {
      constructor() {
        let QQ = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
          FQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
          wQ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1,
          qQ = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
        this.radius = QQ, this.height = FQ, this.radiusRange = wQ, this.directionRandomizer = qQ, this._tempVector = LQ.p.Zero()
      }
      startDirectionFunction(QQ, FQ, wQ, oQ, DQ) {
        wQ.position.subtractToRef(QQ.getTranslation(), this._tempVector), this._tempVector.normalize(), LQ.p.TransformNormalToRef(this._tempVector, DQ, this._tempVector);
        const kQ = (0, qQ.RandomRange)(-this.directionRandomizer / 2, this.directionRandomizer / 2);
        let vQ = Math.atan2(this._tempVector.x, this._tempVector.z);
        vQ += (0, qQ.RandomRange)(-Math.PI / 2, Math.PI / 2) * this.directionRandomizer, this._tempVector.y = kQ, this._tempVector.x = Math.sin(vQ), this._tempVector.z = Math.cos(vQ), this._tempVector.normalize(), oQ ? FQ.Qs(this._tempVector) : LQ.p.TransformNormalFromFloatsToRef(this._tempVector.x, this._tempVector.y, this._tempVector.z, QQ, FQ)
      }
      startPositionFunction(QQ, FQ, wQ, oQ) {
        const DQ = (0, qQ.RandomRange)(-this.height / 2, this.height / 2),
          kQ = (0, qQ.RandomRange)(0, 2 * Math.PI),
          vQ = (0, qQ.RandomRange)((1 - this.radiusRange) * (1 - this.radiusRange), 1),
          mQ = Math.sqrt(vQ) * this.radius,
          uQ = mQ * Math.cos(kQ),
          HQ = mQ * Math.sin(kQ);
        oQ ? FQ.vQQ(uQ, DQ, HQ) : LQ.p.TransformCoordinatesFromFloatsToRef(uQ, DQ, HQ, QQ, FQ)
      }
      clone() {
        const QQ = new DQ(this.radius, this.directionRandomizer);
        return oQ.b.DeepCopy(this, QQ), QQ
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
    class kQ extends DQ {
      constructor() {
        let QQ = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
          FQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
          wQ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1,
          qQ = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : new LQ.p(0, 1, 0),
          oQ = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : new LQ.p(0, 1, 0);
        super(QQ, FQ, wQ), this.direction1 = qQ, this.direction2 = oQ
      }
      startDirectionFunction(QQ, FQ, wQ, oQ) {
        const DQ = (0, qQ.RandomRange)(this.direction1.x, this.direction2.x),
          kQ = (0, qQ.RandomRange)(this.direction1.y, this.direction2.y),
          vQ = (0, qQ.RandomRange)(this.direction1.z, this.direction2.z);
        oQ ? FQ.vQQ(DQ, kQ, vQ) : LQ.p.TransformNormalFromFloatsToRef(DQ, kQ, vQ, QQ, FQ)
      }
      clone() {
        const QQ = new kQ(this.radius, this.height, this.radiusRange, this.direction1, this.direction2);
        return oQ.b.DeepCopy(this, QQ), QQ
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
        return QQ.direction1 = this.direction1.RLQ(), QQ.direction2 = this.direction2.RLQ(), QQ
      }
      parse(QQ) {
        super.parse(QQ), LQ.p.FromArrayToRef(QQ.direction1, 0, this.direction1), LQ.p.FromArrayToRef(QQ.direction2, 0, this.direction2)
      }
    }
  },
  38321: (QQ, FQ, wQ) => {
    wQ.d(FQ, {
      e: () => HQ
    });
    const LQ = .5 * (Math.sqrt(3) - 1),
      qQ = (3 - Math.sqrt(3)) / 6,
      oQ = 1 / 3,
      DQ = 1 / 6,
      kQ = (Math.sqrt(5) - 1) / 4,
      vQ = (5 - Math.sqrt(5)) / 20,
      mQ = new Float32Array([1, 1, 0, -1, 1, 0, 1, -1, 0, -1, -1, 0, 1, 0, 1, -1, 0, 1, 1, 0, -1, -1, 0, -1, 0, 1, 1, 0, -1, 1, 0, 1, -1, 0, -1, -1]),
      uQ = new Float32Array([0, 1, 1, 1, 0, 1, 1, -1, 0, 1, -1, 1, 0, 1, -1, -1, 0, -1, 1, 1, 0, -1, 1, -1, 0, -1, -1, 1, 0, -1, -1, -1, 1, 0, 1, 1, 1, 0, 1, -1, 1, 0, -1, 1, 1, 0, -1, -1, -1, 0, 1, 1, -1, 0, 1, -1, -1, 0, -1, 1, -1, 0, -1, -1, 1, 1, 0, 1, 1, 1, 0, -1, 1, -1, 0, 1, 1, -1, 0, -1, -1, 1, 0, 1, -1, 1, 0, -1, -1, -1, 0, 1, -1, -1, 0, -1, 1, 1, 1, 0, 1, 1, -1, 0, 1, -1, 1, 0, 1, -1, -1, 0, -1, 1, 1, 0, -1, 1, -1, 0, -1, -1, 1, 0, -1, -1, -1, 0]);
    const HQ = class {
      constructor() {
        let QQ = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Math.random;
        const FQ = "function" == typeof QQ ? QQ : function(QQ) {
          let FQ = 0,
            wQ = 0,
            LQ = 0,
            qQ = 1;
          const oQ = function() {
            let QQ = 4022871197;
            return function(FQ) {
              FQ = FQ.toString();
              for (let wQ = 0; wQ < FQ.length; wQ++) {
                QQ += FQ.charCodeAt(wQ);
                let LQ = .02519603282416938 * QQ;
                QQ = LQ >>> 0, LQ -= QQ, LQ *= QQ, QQ = LQ >>> 0, LQ -= QQ, QQ += 4294967296 * LQ
              }
              return 2.3283064365386963e-10 * (QQ >>> 0)
            }
          }();
          FQ = oQ(" "), wQ = oQ(" "), LQ = oQ(" "), FQ -= oQ(QQ), FQ < 0 && (FQ += 1);
          wQ -= oQ(QQ), wQ < 0 && (wQ += 1);
          LQ -= oQ(QQ), LQ < 0 && (LQ += 1);
          return function() {
            const QQ = 2091639 * FQ + 2.3283064365386963e-10 * qQ;
            return FQ = wQ, wQ = LQ, LQ = QQ - (qQ = 0 | QQ)
          }
        }(QQ);
        this.p = function(QQ) {
          const FQ = new Uint8Array(256);
          for (let wQ = 0; wQ < 256; wQ++) FQ[wQ] = wQ;
          for (let wQ = 0; wQ < 255; wQ++) {
            const LQ = wQ + ~~(QQ() * (256 - wQ)),
              qQ = FQ[wQ];
            FQ[wQ] = FQ[LQ], FQ[LQ] = qQ
          }
          return FQ
        }(FQ), this.perm = new Uint8Array(512), this.permMod12 = new Uint8Array(512);
        for (let wQ = 0; wQ < 512; wQ++) this.perm[wQ] = this.p[255 & wQ], this.permMod12[wQ] = this.perm[wQ] % 12
      }
      noise2D(QQ, FQ) {
        const wQ = this.permMod12,
          oQ = this.perm;
        let DQ = 0,
          kQ = 0,
          vQ = 0;
        const uQ = (QQ + FQ) * LQ,
          HQ = Math.floor(QQ + uQ),
          bQ = Math.floor(FQ + uQ),
          YQ = (HQ + bQ) * qQ,
          xQ = QQ - (HQ - YQ),
          AQ = FQ - (bQ - YQ);
        let tQ, eQ;
        xQ > AQ ? (tQ = 1, eQ = 0) : (tQ = 0, eQ = 1);
        const MQ = xQ - tQ + qQ,
          GQ = AQ - eQ + qQ,
          pQ = xQ - 1 + 2 * qQ,
          cQ = AQ - 1 + 2 * qQ,
          CQ = 255 & HQ,
          SQ = 255 & bQ;
        let iQ = .5 - xQ * xQ - AQ * AQ;
        if (iQ >= 0) {
          const QQ = 3 * wQ[CQ + oQ[SQ]];
          iQ *= iQ, DQ = iQ * iQ * (mQ[QQ] * xQ + mQ[QQ + 1] * AQ)
        }
        let WQ = .5 - MQ * MQ - GQ * GQ;
        if (WQ >= 0) {
          const QQ = 3 * wQ[CQ + tQ + oQ[SQ + eQ]];
          WQ *= WQ, kQ = WQ * WQ * (mQ[QQ] * MQ + mQ[QQ + 1] * GQ)
        }
        let RQ = .5 - pQ * pQ - cQ * cQ;
        if (RQ >= 0) {
          const QQ = 3 * wQ[CQ + 1 + oQ[SQ + 1]];
          RQ *= RQ, vQ = RQ * RQ * (mQ[QQ] * pQ + mQ[QQ + 1] * cQ)
        }
        return 70 * (DQ + kQ + vQ)
      }
      noise3D(QQ, FQ, wQ) {
        const LQ = this.permMod12,
          qQ = this.perm;
        let kQ, vQ, uQ, HQ;
        const bQ = (QQ + FQ + wQ) * oQ,
          YQ = Math.floor(QQ + bQ),
          xQ = Math.floor(FQ + bQ),
          AQ = Math.floor(wQ + bQ),
          tQ = (YQ + xQ + AQ) * DQ,
          eQ = QQ - (YQ - tQ),
          MQ = FQ - (xQ - tQ),
          GQ = wQ - (AQ - tQ);
        let pQ, cQ, CQ, SQ, iQ, WQ;
        eQ >= MQ ? MQ >= GQ ? (pQ = 1, cQ = 0, CQ = 0, SQ = 1, iQ = 1, WQ = 0) : eQ >= GQ ? (pQ = 1, cQ = 0, CQ = 0, SQ = 1, iQ = 0, WQ = 1) : (pQ = 0, cQ = 0, CQ = 1, SQ = 1, iQ = 0, WQ = 1) : MQ < GQ ? (pQ = 0, cQ = 0, CQ = 1, SQ = 0, iQ = 1, WQ = 1) : eQ < GQ ? (pQ = 0, cQ = 1, CQ = 0, SQ = 0, iQ = 1, WQ = 1) : (pQ = 0, cQ = 1, CQ = 0, SQ = 1, iQ = 1, WQ = 0);
        const RQ = eQ - pQ + DQ,
          OQ = MQ - cQ + DQ,
          sQ = GQ - CQ + DQ,
          rQ = eQ - SQ + 2 * DQ,
          IQ = MQ - iQ + 2 * DQ,
          UQ = GQ - WQ + 2 * DQ,
          NQ = eQ - 1 + .5,
          TQ = MQ - 1 + .5,
          KQ = GQ - 1 + .5,
          zQ = 255 & YQ,
          lQ = 255 & xQ,
          jQ = 255 & AQ;
        let aQ = .6 - eQ * eQ - MQ * MQ - GQ * GQ;
        if (aQ < 0) kQ = 0;
        else {
          const QQ = 3 * LQ[zQ + qQ[lQ + qQ[jQ]]];
          aQ *= aQ, kQ = aQ * aQ * (mQ[QQ] * eQ + mQ[QQ + 1] * MQ + mQ[QQ + 2] * GQ)
        }
        let XQ = .6 - RQ * RQ - OQ * OQ - sQ * sQ;
        if (XQ < 0) vQ = 0;
        else {
          const QQ = 3 * LQ[zQ + pQ + qQ[lQ + cQ + qQ[jQ + CQ]]];
          XQ *= XQ, vQ = XQ * XQ * (mQ[QQ] * RQ + mQ[QQ + 1] * OQ + mQ[QQ + 2] * sQ)
        }
        let fQ = .6 - rQ * rQ - IQ * IQ - UQ * UQ;
        if (fQ < 0) uQ = 0;
        else {
          const QQ = 3 * LQ[zQ + SQ + qQ[lQ + iQ + qQ[jQ + WQ]]];
          fQ *= fQ, uQ = fQ * fQ * (mQ[QQ] * rQ + mQ[QQ + 1] * IQ + mQ[QQ + 2] * UQ)
        }
        let VQ = .6 - NQ * NQ - TQ * TQ - KQ * KQ;
        if (VQ < 0) HQ = 0;
        else {
          const QQ = 3 * LQ[zQ + 1 + qQ[lQ + 1 + qQ[jQ + 1]]];
          VQ *= VQ, HQ = VQ * VQ * (mQ[QQ] * NQ + mQ[QQ + 1] * TQ + mQ[QQ + 2] * KQ)
        }
        return 32 * (kQ + vQ + uQ + HQ)
      }
      noise4D(QQ, FQ, wQ, LQ) {
        const qQ = this.perm;
        let oQ, DQ, mQ, HQ, bQ;
        const YQ = (QQ + FQ + wQ + LQ) * kQ,
          xQ = Math.floor(QQ + YQ),
          AQ = Math.floor(FQ + YQ),
          tQ = Math.floor(wQ + YQ),
          eQ = Math.floor(LQ + YQ),
          MQ = (xQ + AQ + tQ + eQ) * vQ,
          GQ = QQ - (xQ - MQ),
          pQ = FQ - (AQ - MQ),
          cQ = wQ - (tQ - MQ),
          CQ = LQ - (eQ - MQ);
        let SQ = 0,
          iQ = 0,
          WQ = 0,
          RQ = 0;
        GQ > pQ ? SQ++ : iQ++, GQ > cQ ? SQ++ : WQ++, GQ > CQ ? SQ++ : RQ++, pQ > cQ ? iQ++ : WQ++, pQ > CQ ? iQ++ : RQ++, cQ > CQ ? WQ++ : RQ++;
        const OQ = SQ >= 3 ? 1 : 0,
          sQ = iQ >= 3 ? 1 : 0,
          rQ = WQ >= 3 ? 1 : 0,
          IQ = RQ >= 3 ? 1 : 0,
          UQ = SQ >= 2 ? 1 : 0,
          NQ = iQ >= 2 ? 1 : 0,
          TQ = WQ >= 2 ? 1 : 0,
          KQ = RQ >= 2 ? 1 : 0,
          zQ = SQ >= 1 ? 1 : 0,
          lQ = iQ >= 1 ? 1 : 0,
          jQ = WQ >= 1 ? 1 : 0,
          aQ = RQ >= 1 ? 1 : 0,
          XQ = GQ - OQ + vQ,
          fQ = pQ - sQ + vQ,
          VQ = cQ - rQ + vQ,
          hQ = CQ - IQ + vQ,
          JQ = GQ - UQ + 2 * vQ,
          EQ = pQ - NQ + 2 * vQ,
          nQ = cQ - TQ + 2 * vQ,
          gQ = CQ - KQ + 2 * vQ,
          PQ = GQ - zQ + 3 * vQ,
          ZQ = pQ - lQ + 3 * vQ,
          yQ = cQ - jQ + 3 * vQ,
          BQ = CQ - aQ + 3 * vQ,
          dQ = GQ - 1 + 4 * vQ,
          QF = pQ - 1 + 4 * vQ,
          FF = cQ - 1 + 4 * vQ,
          wF = CQ - 1 + 4 * vQ,
          LF = 255 & xQ,
          qF = 255 & AQ,
          oF = 255 & tQ,
          DF = 255 & eQ;
        let kF = .6 - GQ * GQ - pQ * pQ - cQ * cQ - CQ * CQ;
        if (kF < 0) oQ = 0;
        else {
          const QQ = qQ[LF + qQ[qF + qQ[oF + qQ[DF]]]] % 32 * 4;
          kF *= kF, oQ = kF * kF * (uQ[QQ] * GQ + uQ[QQ + 1] * pQ + uQ[QQ + 2] * cQ + uQ[QQ + 3] * CQ)
        }
        let vF = .6 - XQ * XQ - fQ * fQ - VQ * VQ - hQ * hQ;
        if (vF < 0) DQ = 0;
        else {
          const QQ = qQ[LF + OQ + qQ[qF + sQ + qQ[oF + rQ + qQ[DF + IQ]]]] % 32 * 4;
          vF *= vF, DQ = vF * vF * (uQ[QQ] * XQ + uQ[QQ + 1] * fQ + uQ[QQ + 2] * VQ + uQ[QQ + 3] * hQ)
        }
        let mF = .6 - JQ * JQ - EQ * EQ - nQ * nQ - gQ * gQ;
        if (mF < 0) mQ = 0;
        else {
          const QQ = qQ[LF + UQ + qQ[qF + NQ + qQ[oF + TQ + qQ[DF + KQ]]]] % 32 * 4;
          mF *= mF, mQ = mF * mF * (uQ[QQ] * JQ + uQ[QQ + 1] * EQ + uQ[QQ + 2] * nQ + uQ[QQ + 3] * gQ)
        }
        let uF = .6 - PQ * PQ - ZQ * ZQ - yQ * yQ - BQ * BQ;
        if (uF < 0) HQ = 0;
        else {
          const QQ = qQ[LF + zQ + qQ[qF + lQ + qQ[oF + jQ + qQ[DF + aQ]]]] % 32 * 4;
          uF *= uF, HQ = uF * uF * (uQ[QQ] * PQ + uQ[QQ + 1] * ZQ + uQ[QQ + 2] * yQ + uQ[QQ + 3] * BQ)
        }
        let HF = .6 - dQ * dQ - QF * QF - FF * FF - wF * wF;
        if (HF < 0) bQ = 0;
        else {
          const QQ = qQ[LF + 1 + qQ[qF + 1 + qQ[oF + 1 + qQ[DF + 1]]]] % 32 * 4;
          HF *= HF, bQ = HF * HF * (uQ[QQ] * dQ + uQ[QQ + 1] * QF + uQ[QQ + 2] * FF + uQ[QQ + 3] * wF)
        }
        return 27 * (oQ + DQ + mQ + HQ + bQ)
      }
    }
  }
};
Object.freeze(modules);
for (const QQ in modules) Object.freeze(modules[QQ]);