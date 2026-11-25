/*! For license information please see fo1voe.241.10df0e57.chunk.js.LICENSE.txt */
export const id = 241;
export const ids = [241];
export const modules = {
  40691: (MM, rM, iM) => {
    MM.exports = SM;
    var OM = iM(347);

    function SM(MM, rM) {
      if (!(this instanceof SM)) return new SM(MM, rM);
      var iM = OM.create();
      OM.add(iM, MM, rM), this.base = OM.min(OM.create(), MM, iM), this.vec = OM.clone(rM), this.max = OM.max(OM.create(), MM, iM), this.mag = OM.length(this.vec)
    }
    var jM = SM.prototype;
    jM.width = function() {
      return this.vec[0]
    }, jM.height = function() {
      return this.vec[1]
    }, jM.depth = function() {
      return this.vec[2]
    }, jM.x0 = function() {
      return this.base[0]
    }, jM.y0 = function() {
      return this.base[1]
    }, jM.z0 = function() {
      return this.base[2]
    }, jM.x1 = function() {
      return this.max[0]
    }, jM.y1 = function() {
      return this.max[1]
    }, jM.z1 = function() {
      return this.max[2]
    }, jM.translate = function(MM) {
      return OM.add(this.max, this.max, MM), OM.add(this.base, this.base, MM), this
    }, jM.setPosition = function(MM) {
      return OM.add(this.max, MM, this.vec), OM.copy(this.base, MM), this
    }, jM.expand = function(MM) {
      var rM = OM.create(),
        iM = OM.create();
      return OM.max(rM, MM.max, this.max), OM.min(iM, MM.base, this.base), OM.subtract(rM, rM, iM), new SM(iM, rM)
    }, jM.intersects = function(MM) {
      return !(MM.base[0] > this.max[0]) && (!(MM.base[1] > this.max[1]) && (!(MM.base[2] > this.max[2]) && (!(MM.max[0] < this.base[0]) && (!(MM.max[1] < this.base[1]) && !(MM.max[2] < this.base[2])))))
    }, jM.touches = function(MM) {
      var rM = this.union(MM);
      return null !== rM && (0 == rM.width() || 0 == rM.height() || 0 == rM.depth())
    }, jM.union = function(MM) {
      if (!this.intersects(MM)) return null;
      var rM = Math.max(MM.base[0], this.base[0]),
        iM = Math.max(MM.base[1], this.base[1]),
        OM = Math.max(MM.base[2], this.base[2]);
      return new SM([rM, iM, OM], [Math.min(MM.max[0], this.max[0]) - rM, Math.min(MM.max[1], this.max[1]) - iM, Math.min(MM.max[2], this.max[2]) - OM])
    }
  },
  40684: MM => {
    MM.exports = function(MM, rM, iM, OM, SM, jM) {
      var aM = +rM[0],
        PM = +rM[1],
        nM = +rM[2],
        QM = +iM[0],
        zM = +iM[1],
        LM = +iM[2],
        mM = Math.sqrt(QM * QM + zM * zM + LM * LM);
      if (0 === mM) throw new Error("Can't raycast along a zero vector");
      return function(MM, rM, iM, OM, SM, jM, aM, PM, nM, QM) {
        for (var zM = 0, LM = Math.floor, mM = 0 | LM(rM), HM = 0 | LM(iM), hM = 0 | LM(OM), JM = SM > 0 ? 1 : -1, dM = jM > 0 ? 1 : -1, yM = aM > 0 ? 1 : -1, lM = Math.abs(1 / SM), EM = Math.abs(1 / jM), UM = Math.abs(1 / aM), GM = lM < 1 / 0 ? lM * (JM > 0 ? mM + 1 - rM : rM - mM) : 1 / 0, CM = EM < 1 / 0 ? EM * (dM > 0 ? HM + 1 - iM : iM - HM) : 1 / 0, eM = UM < 1 / 0 ? UM * (yM > 0 ? hM + 1 - OM : OM - hM) : 1 / 0, bM = -1; zM <= PM;) {
          var wM = MM(mM, HM, hM);
          if (wM) return nM && (nM[0] = rM + zM * SM, nM[1] = iM + zM * jM, nM[2] = OM + zM * aM), QM && (QM[0] = QM[1] = QM[2] = 0, 0 === bM && (QM[0] = -JM), 1 === bM && (QM[1] = -dM), 2 === bM && (QM[2] = -yM)), wM;
          GM < CM ? GM < eM ? (mM += JM, zM = GM, GM += lM, bM = 0) : (hM += yM, zM = eM, eM += UM, bM = 2) : CM < eM ? (HM += dM, zM = CM, CM += EM, bM = 1) : (hM += yM, zM = eM, eM += UM, bM = 2)
        }
        return nM && (nM[0] = rM + zM * SM, nM[1] = iM + zM * jM, nM[2] = OM + zM * aM), QM && (QM[0] = QM[1] = QM[2] = 0), 0
      }(MM, aM, PM, nM, QM /= mM, zM /= mM, LM /= mM, OM = "undefined" === typeof OM ? 64 : +OM, SM, jM)
    }
  },
  40148: (MM, rM, iM) => {
    iM.d(rM, {
      c: () => PM,
      e: () => jM
    });
    var OM = iM(4443);
    let SM = null;

    function jM(MM) {
      return null !== SM && MM === SM
    }

    function aM() {
      this.uB = !1, this.stopPropagation = !1, this.pB = !1, this.disabled = !1
    }
    class PM {
      constructor(MM, rM) {
        this.version = "0.7.0";
        var iM = Object.assign({}, new aM, rM || {});
        this.element = MM || document, this.uB = !!iM.uB, this.stopPropagation = !!iM.stopPropagation, this.pB = !!iM.pB, this.disabled = !!iM.disabled, this.filterEvents = (MM, rM) => !0, this.ignoreEvent = MM => !1, this.down = new OM.EventEmitter, this.up = new OM.EventEmitter, this.state = {}, this.oB = {
          dx: 0,
          dy: 0,
          mrM: 0,
          HrM: 0,
          hrM: 0
        }, this.pressCount = {}, this.releaseCount = {}, this._keyBindmap = {}, this._keyStates = {}, this._bindPressCount = {}, this._touches = {
          lastX: 0,
          lastY: 0,
          currID: null
        }, "loading" !== document.readyState ? QM(this) : document.addEventListener("DOMContentLoaded", (MM => {
          QM(this)
        }), {
          once: !0
        })
      }
      bind(MM) {
        for (var rM = arguments.length, iM = new Array(rM > 1 ? rM - 1 : 0), OM = 1; OM < rM; OM++) iM[OM - 1] = arguments[OM];
        iM.forEach((rM => {
          var iM = this._keyBindmap[rM] || [];
          iM.includes(MM) || (iM.push(MM), this._keyBindmap[rM] = iM)
        })), this.state[MM] = !!this.state[MM], this.pressCount[MM] = this.pressCount[MM] || 0, this.releaseCount[MM] = this.releaseCount[MM] || 0
      }
      unbind(MM) {
        for (var rM in this._keyBindmap) {
          var iM = this._keyBindmap[rM],
            OM = iM.indexOf(MM);
          OM > -1 && iM.splice(OM, 1)
        }
      }
      getBindings() {
        var MM = {};
        for (var rM in this._keyBindmap) {
          this._keyBindmap[rM].forEach((iM => {
            MM[iM] = MM[iM] || [], MM[iM].push(rM)
          }))
        }
        return MM
      }
      bL() {
        nM(this.oB), nM(this.pressCount), nM(this.releaseCount)
      }
    }

    function nM(MM) {
      for (var rM in MM) MM[rM] = 0
    }

    function QM(MM) {
      window.addEventListener("keydown", dM.bind(null, MM, !0), !1), window.addEventListener("keyup", dM.bind(null, MM, !1), !1);
      var rM = {
        passive: !0
      };
      MM.element.addEventListener("touchstart", HM.bind(void 0, MM), {
        passive: !1
      }), MM.element.addEventListener("touchend", JM.bind(void 0, MM), rM), MM.element.addEventListener("mousedown", yM.bind(null, MM, !0), rM), window.document.addEventListener("mouseup", yM.bind(null, MM, !1), rM), MM.element.addEventListener("touchmove", lM.bind(null, MM), rM), MM.element.addEventListener("mousemove", lM.bind(null, MM), rM), window.PointerEvent, MM.element.addEventListener("wheel", EM.bind(null, MM), rM), MM.element.addEventListener("contextmenu", UM.bind(null, MM), !1), window.addEventListener("blur", eM.bind(null, MM), !1)
    }
    var zM = 0,
      LM = 0,
      mM = null;

    function HM(MM, rM) {
      rM.preventDefault(), hM(rM)
    }

    function hM(MM) {
      let rM = !1;
      for (let iM = 0; iM < MM.touches.length; ++iM)
        if (MM.touches[iM].identifier === mM) {
          rM = !0;
          break
        } if (!rM) {
        const rM = MM.changedTouches[0];
        zM = rM.clientX, LM = rM.clientY, mM = rM.identifier
      }
    }

    function JM(MM, rM) {
      for (var iM = rM.changedTouches, OM = 0; OM < iM.length; ++OM) iM[OM].identifier === mM && (mM = null)
    }

    function dM(MM, rM, iM) {
      if (!MM.ignoreEvent(iM)) try {
        bM(MM, iM), rM && iM.isTrusted && !iM.repeat && MM._keyStates[iM.code] && wM(MM, iM.code)
      } finally {
        tM(iM.code, rM, MM, iM)
      }
    }

    function yM(MM, rM, iM) {
      if (!MM.ignoreEvent(iM)) try {
        bM(MM, iM)
      } finally {
        ! function(MM, rM, iM) {
          if ("pointerId" in iM)
            if (rM) {
              if (null !== MM._touches.currID) return;
              MM._touches.currID = iM.pointerId
            } else {
              if (MM._touches.currID !== iM.pointerId) return;
              MM._touches.currID = null
            } var OM = "button" in iM ? iM.button + 1 : 1;
          tM("Mouse" + OM, rM, MM, iM)
        }(MM, rM, iM)
      }
    }

    function lM(MM, rM) {
      var iM = rM.movementX || rM.mozMovementX || 0,
        OM = rM.movementY || rM.mozMovementY || 0;
      if (rM.touches && 0 === (iM | OM)) {
        var SM = function(MM) {
          hM(MM);
          for (let rM = 0; rM < MM.changedTouches.length; ++rM)
            if (MM.changedTouches[rM].identifier == mM) {
              const iM = MM.changedTouches[rM],
                OM = [iM.clientX - zM, iM.clientY - LM];
              return zM = iM.clientX, LM = iM.clientY, OM
            } return console.error(`Did not find touch id ${mM}`), [0, 0]
        }(rM);
        iM = SM[0], OM = SM[1]
      }
      MM.oB.dx += iM, MM.oB.dy += OM
    }

    function EM(MM, rM) {
      bM(MM, rM);
      var iM = 1;
      switch (rM.deltaMode) {
        case 0:
          iM = 1;
          break;
        case 1:
          iM = 12;
          break;
        case 2:
          iM = MM.element.clientHeight || window.innerHeight
      }
      MM.oB.mrM += (rM.deltaX || 0) * iM, MM.oB.HrM += (rM.deltaY || 0) * iM, MM.oB.hrM += (rM.deltaZ || 0) * iM
    }

    function UM(MM, rM) {
      if (!MM.pB) return rM.preventDefault(), !1
    }
    var GM = {
      AltLeft: "altKey",
      AltRight: "altKey",
      ControlLeft: "ctrlKey",
      ControlRight: "ctrlKey",
      ShiftLeft: "shiftKey",
      ShiftRight: "shiftKey",
      MetaLeft: "metaKey",
      MetaRight: "metaKey"
    };

    function CM(MM, rM) {
      return !!MM[GM[rM]] || ("AltRight" === rM || "ControlLeft" === rM) && "function" === typeof MM.getModifierState && !0 === MM.getModifierState("AltGraph")
    }

    function eM(MM, rM) {
      for (var iM in MM._modifiersHeldThroughBlur = {}, GM) MM._keyStates[iM] && (MM._modifiersHeldThroughBlur[iM] = !0);
      rM && rM.isTrusted && function() {
        try {
          return window.self !== window.top
        } catch (MM) {
          return !0
        }
      }() && (clearTimeout(MM._blurRelease), MM._blurRelease = setTimeout((function() {
        if (!document.hasFocus())
          for (var rM in MM._modifiersHeldThroughBlur = {}, MM._keyStates) MM._keyStates[rM] && !/^Mouse\d/.test(rM) && wM(MM, rM)
      }), 0))
    }

    function bM(MM, rM) {
      var iM = MM._modifiersHeldThroughBlur;
      if (iM && rM.isTrusted && document.hasFocus())
        for (var OM in iM) delete iM[OM], MM._keyStates[OM] && OM !== rM.code && (CM(rM, OM) || wM(MM, OM))
    }

    function wM(MM, rM) {
      const iM = {
          code: rM,
          preventDefault: () => {},
          stopPropagation: () => {}
        },
        OM = SM;
      SM = iM;
      try {
        tM(rM, !1, MM, iM)
      } finally {
        SM = OM
      }
    }

    function tM(MM, rM, iM, OM) {
      var SM = iM._keyBindmap[MM];
      SM && (gM(iM._keyStates[MM], rM) && (iM._keyStates[MM] = rM, SM.forEach((MM => {
        (!iM.filterEvents || iM.filterEvents(OM, MM)) && function(MM, rM, iM, OM) {
          var SM = rM ? iM.pressCount : iM.releaseCount;
          SM[MM] = (SM[MM] || 0) + 1;
          var jM = iM._bindPressCount[MM] || 0;
          (jM += rM ? 1 : -1) < 0 && (jM = 0);
          iM._bindPressCount[MM] = jM;
          var aM = iM.state[MM];
          if (gM(aM, jM)) {
            iM.state[MM] = jM > 0;
            var PM = rM ? iM.down : iM.up;
            iM.disabled || PM.emit(MM, OM)
          }
        }(MM, rM, iM, OM)
      }))), "button" in OM || (iM.uB && !OM.defaultPrevented && OM.preventDefault(), iM.stopPropagation && OM.stopPropagation()))
    }

    function gM(MM, rM) {
      return MM ? !rM : rM
    }
  },
  37484: (MM, rM) => {
    function iM(MM) {
      if (MM && "object" === typeof MM) {
        var rM = MM.which || MM.keyCode || MM.charCode;
        rM && (MM = rM)
      }
      if ("number" === typeof MM) return aM[MM];
      var iM, jM = String(MM);
      return (iM = OM[jM.toLowerCase()]) ? iM : (iM = SM[jM.toLowerCase()]) || (1 === jM.length ? jM.charCodeAt(0) : void 0)
    }
    iM.isEventKey = function(MM, rM) {
      if (MM && "object" === typeof MM) {
        var iM = MM.which || MM.keyCode || MM.charCode;
        if (null === iM || void 0 === iM) return !1;
        if ("string" === typeof rM) {
          var jM;
          if (jM = OM[rM.toLowerCase()]) return jM === iM;
          if (jM = SM[rM.toLowerCase()]) return jM === iM
        } else if ("number" === typeof rM) return rM === iM;
        return !1
      }
    };
    var OM = (rM = MM.exports = iM).code = rM.codes = {
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
      SM = rM.aliases = {
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
    for (jM = 97; jM < 123; jM++) OM[String.fromCharCode(jM)] = jM - 32;
    for (var jM = 48; jM < 58; jM++) OM[jM - 48] = jM;
    for (jM = 1; jM < 13; jM++) OM["f" + jM] = jM + 111;
    for (jM = 0; jM < 10; jM++) OM["numpad " + jM] = jM + 96;
    var aM = rM.names = rM.title = {};
    for (jM in OM) aM[OM[jM]] = jM;
    for (var PM in SM) OM[PM] = SM[PM]
  },
  40676: (MM, rM, iM) => {
    iM.d(rM, {
      e: () => OM
    });
    class OM {
      constructor() {
        let MM = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
          rM = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 10;
        this.AY = !1, this.vY = !1, this.zk = 30, this.pY = 0, this.FY = 100, this.Vd = !1, this.fullscreen = !1, this.kE = function(MM) {}, this.TY = function(MM, rM, iM) {}, this.gL = function() {}, this.pE = function() {}, this.VY = function() {}, this.onFullscreenChanged = function() {}, this.onPointerLockError = function(MM) {}, this._data = new SM(rM),
          function(MM) {
            if ("loading" === document.readyState) {
              var rM = () => {
                document.removeEventListener("readystatechange", rM), MM()
              };
              document.addEventListener("readystatechange", rM)
            } else setTimeout(MM, 0)
          }((() => {
            ! function(MM) {
              var rM = MM._data,
                iM = rM.nowObject.now();
              rM.lastTickStarted = iM, rM.lastFrameStarted = iM, rM.lastRenderStarted = iM, rM.frameCB = () => function(MM) {
                var rM = MM._data;
                requestAnimationFrame(rM.frameCB), PM(MM);
                var iM = rM.nowObject.now(),
                  OM = iM - rM.lastFrameStarted;
                if (rM.lastFrameStarted = iM, MM.pY > 0) {
                  rM.renderAccum += OM;
                  var SM = 1e3 / MM.pY;
                  if (rM.renderAccum < SM) return;
                  rM.renderAccum -= SM, rM.renderAccum > SM && (rM.renderAccum = SM)
                }
                var jM = iM - rM.lastRenderStarted;
                rM.lastRenderStarted = iM;
                var aM = 1e3 / MM.zk,
                  nM = (iM - rM.lastTickStarted) / aM;
                nM < 0 && (nM = 0);
                MM.TY(jM, nM, aM), setTimeout(PM, 0, MM, !0)
              }(MM), rM.intervalCB = () => PM(MM), requestAnimationFrame(rM.frameCB), rM.pollTime > 0 && (rM.intervalID = setInterval(rM.intervalCB, Math.max(rM.pollTime, 1e3 / MM.zk / 2)))
            }(this),
            function(MM, rM) {
              if (!rM) return;
              var iM = !1,
                OM = !1,
                SM = MM => {
                  if (!!MM !== (iM = rM === document.pointerLockElement))
                    if (MM) {
                      var OM = rM.requestPointerLock();
                      OM && OM.catch && OM.catch((MM => {}))
                    } else document.exitPointerLock()
                },
                jM = MM => {
                  !!MM !== (OM = rM === document.fullscreenElement) && (MM ? rM.requestFullscreen ? rM.requestFullscreen() : rM.webkitRequestFullscreen && rM.webkitRequestFullscreen() : document.exitFullscreen ? document.exitFullscreen() : document.webkitExitFullscreen && document.webkitExitFullscreen())
                };
              document.addEventListener("pointerlockchange", (OM => {
                iM = rM === document.pointerLockElement, MM.VY(iM)
              })), document.addEventListener("fullscreenchange", (iM => {
                OM = rM === document.fullscreenElement, MM.onFullscreenChanged(OM)
              })), document.addEventListener("pointerlockerror", (OM => {
                iM = rM === document.pointerLockElement, MM.onPointerLockError(OM)
              })), Object.defineProperty(MM, "Vd", {
                get: () => iM,
                set: SM
              }), Object.defineProperty(MM, "fullscreen", {
                get: () => OM,
                set: jM
              }), rM.addEventListener("click", (rM => {
                MM.AY && SM(!0), MM.vY && jM(!0)
              }));
              var aM = () => MM.pE();
              if (window.ResizeObserver) {
                new ResizeObserver(aM).observe(rM)
              } else window.addEventListener("resize", aM)
            }(this, MM), this.gL()
          }))
      }
    }

    function SM() {
      let MM = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 10;
      this.nowObject = performance || Date, this.pollTime = MM, this.renderAccum = 0, this.lastTickStarted = 0, this.lastFrameStarted = 0, this.lastRenderStarted = 0, this.avgTickTime = 2, this.frameCB = null, this.intervalCB = null, this.intervalID = -1
    }
    var jM = 3,
      aM = 20;

    function PM(MM) {
      for (var rM = MM._data, iM = 1e3 / MM.zk, OM = rM.nowObject.now() + aM, SM = 0; rM.nowObject.now() >= rM.lastTickStarted + iM && rM.nowObject.now() < OM && ++SM <= jM;) MM.kE(iM), rM.lastTickStarted += iM;
      var PM = 5 * (iM + 5),
        nM = rM.nowObject.now();
      if (nM - rM.lastTickStarted > PM)
        for (; nM >= rM.lastTickStarted + iM;) rM.lastTickStarted += iM
    }
  },
  37640: (MM, rM, iM) => {
    iM.d(rM, {
      e: () => aM
    });
    var OM = iM(44);
    const SM = OM.useLayoutEffect;
    const jM = function(MM) {
      var rM = (0, OM.useRef)(MM);
      return SM((function() {
        rM.current = MM
      })), rM
    };
    var aM = function(MM) {
      var rM = jM(MM);
      (0, OM.useEffect)((function() {
        var MM = function(MM) {
          var iM;
          if (null != rM.current && (iM = rM.current(MM)), MM.defaultPrevented && (MM.returnValue = ""), "string" === typeof iM) return MM.returnValue = iM, iM
        };
        return window.addEventListener("beforeunload", MM),
          function() {
            window.removeEventListener("beforeunload", MM)
          }
      }), [])
    }
  },
  37517: MM => {
    var rM, iM = "undefined" !== typeof window ? window.navigator.userAgent : "",
      OM = /OS X/.test(iM),
      SM = /Opera/.test(iM),
      jM = !/like Gecko/.test(iM) && !SM,
      aM = MM.exports = {
        0: OM ? "<menu>" : "<UNK>",
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
        93: OM ? "<meta>" : "<menu>",
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
        173: OM && jM ? "-" : "<volume-mute>",
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
        231: SM ? "`" : "<unicode>",
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
    for (rM = 58; rM < 65; ++rM) aM[rM] = String.fromCharCode(rM);
    for (rM = 48; rM < 58; ++rM) aM[rM] = rM - 48 + "";
    for (rM = 65; rM < 91; ++rM) aM[rM] = String.fromCharCode(rM);
    for (rM = 96; rM < 106; ++rM) aM[rM] = "<num-" + (rM - 96) + ">";
    for (rM = 112; rM < 136; ++rM) aM[rM] = "F" + (rM - 111)
  },
  40024: (MM, rM, iM) => {
    function OM(MM, rM, iM, OM, SM) {
      var jM = {};
      return Object.keys(OM).forEach((function(MM) {
        jM[MM] = OM[MM]
      })), jM.enumerable = !!jM.enumerable, jM.configurable = !!jM.configurable, ("value" in jM || jM.initializer) && (jM.writable = !0), jM = iM.slice().reverse().reduce((function(iM, OM) {
        return OM(MM, rM, iM) || iM
      }), jM), SM && void 0 !== jM.initializer && (jM.value = jM.initializer ? jM.initializer.call(SM) : void 0, jM.initializer = void 0), void 0 === jM.initializer && (Object.defineProperty(MM, rM, jM), jM = null), jM
    }
    iM.d(rM, {
      e: () => OM
    })
  },
  40016: (MM, rM, iM) => {
    function OM(MM, rM, iM, OM) {
      iM && Object.defineProperty(MM, rM, {
        enumerable: iM.enumerable,
        configurable: iM.configurable,
        writable: iM.writable,
        value: iM.initializer ? iM.initializer.call(OM) : void 0
      })
    }
    iM.d(rM, {
      d: () => OM
    })
  },
  39705: (MM, rM, iM) => {
    iM.d(rM, {
      b: () => jM
    });
    var OM = iM(39711);
    const SM = (MM, rM, iM) => MM ? MM.getClassName && "Mesh" === MM.getClassName() ? null : !MM.getClassName || "SubMesh" !== MM.getClassName() && "PhysicsBody" !== MM.getClassName() ? MM.clone ? MM.clone() : Array.isArray(MM) ? MM.slice() : iM && "object" === typeof MM ? {
      ...MM
    } : null : MM.clone(rM) : null;
    class jM {
      static DeepCopy(MM, rM, iM, jM) {
        let aM = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
        const PM = function(MM) {
          const rM = [];
          do {
            const iM = Object.getOwnPropertyNames(MM);
            for (const MM of iM) - 1 === rM.indexOf(MM) && rM.push(MM)
          } while (MM = Object.getPrototypeOf(MM));
          return rM
        }(MM);
        for (const QM of PM) {
          if ("_" === QM[0] && (!jM || -1 === jM.indexOf(QM))) continue;
          if (QM.endsWith("Observable")) continue;
          if (iM && -1 !== iM.indexOf(QM)) continue;
          const PM = MM[QM],
            zM = typeof PM;
          if ("function" !== zM) try {
            if ("object" === zM)
              if (PM instanceof Uint8Array) rM[QM] = Uint8Array.from(PM);
              else if (PM instanceof Array) {
              if (rM[QM] = [], PM.length > 0)
                if ("object" == typeof PM[0])
                  for (let MM = 0; MM < PM.length; MM++) {
                    const iM = SM(PM[MM], rM, aM); - 1 === rM[QM].indexOf(iM) && rM[QM].push(iM)
                  } else rM[QM] = PM.slice(0)
            } else rM[QM] = SM(PM, rM, aM);
            else rM[QM] = PM
          } catch (nM) {
            OM.e.Warn(nM.message)
          }
        }
      }
    }
  },
  39748: (MM, rM, iM) => {
    iM.d(rM, {
      b: () => SM,
      c: () => jM,
      e: () => aM,
      i: () => PM
    });
    var OM = iM(38173);
    class SM {
      constructor(MM, rM, iM) {
        this.gradient = MM, this.color1 = rM, this.color2 = iM
      }
      getColorToRef(MM) {
        this.color2 ? OM.h.LerpToRef(this.color1, this.color2, Math.random(), MM) : MM.jR(this.color1)
      }
    }
    class jM {
      constructor(MM, rM) {
        this.gradient = MM, this.color = rM
      }
    }
    class aM {
      constructor(MM, rM, iM) {
        this.gradient = MM, this.factor1 = rM, this.factor2 = iM
      }
      getFactor() {
        return void 0 === this.factor2 || this.factor2 === this.factor1 ? this.factor1 : this.factor1 + (this.factor2 - this.factor1) * Math.random()
      }
    }
    class PM {
      static GetCurrentGradient(MM, rM, iM) {
        if (rM[0].gradient > MM) return void iM(rM[0], rM[0], 1);
        for (let SM = 0; SM < rM.length - 1; SM++) {
          const OM = rM[SM],
            jM = rM[SM + 1];
          if (MM >= OM.gradient && MM <= jM.gradient) {
            return void iM(OM, jM, (MM - OM.gradient) / (jM.gradient - OM.gradient))
          }
        }
        const OM = rM.length - 1;
        iM(rM[OM], rM[OM], 1)
      }
    }
  },
  39711: (MM, rM, iM) => {
    iM.d(rM, {
      e: () => OM
    });
    class OM {
      static _CheckLimit(MM, rM) {
        let iM = OM._LogLimitOutputs[MM];
        return iM ? iM.current++ : (iM = {
          limit: rM,
          current: 1
        }, OM._LogLimitOutputs[MM] = iM), iM.current <= iM.limit
      }
      static _GenerateLimitMessage(MM) {
        let rM = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
        const iM = OM._LogLimitOutputs[MM];
        if (!iM || !OM.MessageLimitReached) return;
        const SM = this._Levels[rM];
        iM.current === iM.limit && OM[SM.name](OM.MessageLimitReached.replace(/%LIMIT%/g, "" + iM.limit).replace(/%TYPE%/g, SM.name ?? ""))
      }
      static _AddLogEntry(MM) {
        OM._LogCache = MM + OM._LogCache, OM.OnNewCacheEntry && OM.OnNewCacheEntry(MM)
      }
      static _FormatMessage(MM) {
        const rM = MM => MM < 10 ? "0" + MM : "" + MM,
          iM = new Date;
        return "[" + rM(iM.getHours()) + ":" + rM(iM.getMinutes()) + ":" + rM(iM.getSeconds()) + "]: " + MM
      }
      static _LogDisabled(MM, rM) {}
      static _LogEnabled() {
        let MM = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
          rM = arguments.length > 1 ? arguments[1] : void 0,
          iM = arguments.length > 2 ? arguments[2] : void 0;
        const SM = Array.isArray(rM) ? rM[0] : rM;
        if (void 0 !== iM && !OM._CheckLimit(SM, iM)) return;
        const jM = OM._FormatMessage(SM),
          aM = this._Levels[MM],
          PM = Array.isArray(rM) ? rM.slice(1) : [];
        aM.logFunc && aM.logFunc("BJS - " + jM, ...PM);
        const nM = `<div style='color:${aM.color}'>${jM}</div><br>`;
        OM._AddLogEntry(nM), OM._GenerateLimitMessage(SM, MM)
      }
      static get LogCache() {
        return OM._LogCache
      }
      static ClearLogCache() {
        OM._LogCache = "", OM._LogLimitOutputs = {}, OM.errorsCount = 0
      }
      static set LogLevels(MM) {
        OM.Log = OM._LogDisabled, OM.Warn = OM._LogDisabled, OM.Error = OM._LogDisabled;
        const rM = [OM.MessageLogLevel, OM.WarningLogLevel, OM.ErrorLogLevel];
        for (const iM of rM)
          if ((MM & iM) === iM) {
            const MM = this._Levels[iM];
            OM[MM.name] = OM._LogEnabled.bind(OM, iM)
          }
      }
    }
    OM.NoneLogLevel = 0, OM.MessageLogLevel = 1, OM.WarningLogLevel = 2, OM.ErrorLogLevel = 4, OM.AllLogLevel = 7, OM.MessageLimitReached = "Too many %TYPE%s (%LIMIT%), no more %TYPE%s will be reported for this message.", OM._LogCache = "", OM._LogLimitOutputs = {}, OM._Levels = [{}, {
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
    }], OM.errorsCount = 0, OM.Log = OM._LogEnabled.bind(OM, OM.MessageLogLevel), OM.Warn = OM._LogEnabled.bind(OM, OM.WarningLogLevel), OM.Error = OM._LogEnabled.bind(OM, OM.ErrorLogLevel)
  },
  39756: (MM, rM, iM) => {
    iM.d(rM, {
      b: () => aM
    });
    var OM = iM(38040),
      SM = iM(38074),
      jM = iM(39705);
    class aM {
      constructor() {
        this.direction1 = new OM.q(0, 1, 0), this.direction2 = new OM.q(0, 1, 0), this.minEmitBox = new OM.q(-.5, -.5, -.5), this.maxEmitBox = new OM.q(.5, .5, .5)
      }
      startDirectionFunction(MM, rM, iM, jM) {
        const aM = (0, SM.RandomRange)(this.direction1.x, this.direction2.x),
          PM = (0, SM.RandomRange)(this.direction1.y, this.direction2.y),
          nM = (0, SM.RandomRange)(this.direction1.z, this.direction2.z);
        if (jM) return rM.x = aM, rM.y = PM, void(rM.z = nM);
        OM.q.TransformNormalFromFloatsToRef(aM, PM, nM, MM, rM)
      }
      startPositionFunction(MM, rM, iM, jM) {
        const aM = (0, SM.RandomRange)(this.minEmitBox.x, this.maxEmitBox.x),
          PM = (0, SM.RandomRange)(this.minEmitBox.y, this.maxEmitBox.y),
          nM = (0, SM.RandomRange)(this.minEmitBox.z, this.maxEmitBox.z);
        if (jM) return rM.x = aM, rM.y = PM, void(rM.z = nM);
        OM.q.TransformCoordinatesFromFloatsToRef(aM, PM, nM, MM, rM)
      }
      clone() {
        const MM = new aM;
        return jM.b.DeepCopy(this, MM), MM
      }
      applyToShader(MM) {
        MM.setVector3("direction1", this.direction1), MM.setVector3("direction2", this.direction2), MM.setVector3("minEmitBox", this.minEmitBox), MM.setVector3("maxEmitBox", this.maxEmitBox)
      }
      buildUniformLayout(MM) {
        MM.addUniform("direction1", 3), MM.addUniform("direction2", 3), MM.addUniform("minEmitBox", 3), MM.addUniform("maxEmitBox", 3)
      }
      getEffectDefines() {
        return "#define BOXEMITTER"
      }
      getClassName() {
        return "BoxParticleEmitter"
      }
      serialize() {
        const MM = {};
        return MM.type = this.getClassName(), MM.direction1 = this.direction1.HOM(), MM.direction2 = this.direction2.HOM(), MM.minEmitBox = this.minEmitBox.HOM(), MM.maxEmitBox = this.maxEmitBox.HOM(), MM
      }
      parse(MM) {
        OM.q.FromArrayToRef(MM.direction1, 0, this.direction1), OM.q.FromArrayToRef(MM.direction2, 0, this.direction2), OM.q.FromArrayToRef(MM.minEmitBox, 0, this.minEmitBox), OM.q.FromArrayToRef(MM.maxEmitBox, 0, this.maxEmitBox)
      }
    }
  },
  39700: (MM, rM, iM) => {
    iM.d(rM, {
      d: () => PM,
      e: () => aM
    });
    var OM = iM(38040),
      SM = iM(38074),
      jM = iM(39705);
    class aM {
      constructor() {
        let MM = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
          rM = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
          iM = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1,
          SM = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
        this.radius = MM, this.height = rM, this.radiusRange = iM, this.directionRandomizer = SM, this._tempVector = OM.q.Zero()
      }
      startDirectionFunction(MM, rM, iM, jM, aM) {
        iM.position.subtractToRef(MM.getTranslation(), this._tempVector), this._tempVector.normalize(), OM.q.TransformNormalToRef(this._tempVector, aM, this._tempVector);
        const PM = (0, SM.RandomRange)(-this.directionRandomizer / 2, this.directionRandomizer / 2);
        let nM = Math.atan2(this._tempVector.x, this._tempVector.z);
        nM += (0, SM.RandomRange)(-Math.PI / 2, Math.PI / 2) * this.directionRandomizer, this._tempVector.y = PM, this._tempVector.x = Math.sin(nM), this._tempVector.z = Math.cos(nM), this._tempVector.normalize(), jM ? rM.jR(this._tempVector) : OM.q.TransformNormalFromFloatsToRef(this._tempVector.x, this._tempVector.y, this._tempVector.z, MM, rM)
      }
      startPositionFunction(MM, rM, iM, jM) {
        const aM = (0, SM.RandomRange)(-this.height / 2, this.height / 2),
          PM = (0, SM.RandomRange)(0, 2 * Math.PI),
          nM = (0, SM.RandomRange)((1 - this.radiusRange) * (1 - this.radiusRange), 1),
          QM = Math.sqrt(nM) * this.radius,
          zM = QM * Math.cos(PM),
          LM = QM * Math.sin(PM);
        jM ? rM.iMM(zM, aM, LM) : OM.q.TransformCoordinatesFromFloatsToRef(zM, aM, LM, MM, rM)
      }
      clone() {
        const MM = new aM(this.radius, this.directionRandomizer);
        return jM.b.DeepCopy(this, MM), MM
      }
      applyToShader(MM) {
        MM.setFloat("radius", this.radius), MM.setFloat("height", this.height), MM.setFloat("radiusRange", this.radiusRange), MM.setFloat("directionRandomizer", this.directionRandomizer)
      }
      buildUniformLayout(MM) {
        MM.addUniform("radius", 1), MM.addUniform("height", 1), MM.addUniform("radiusRange", 1), MM.addUniform("directionRandomizer", 1)
      }
      getEffectDefines() {
        return "#define CYLINDEREMITTER"
      }
      getClassName() {
        return "CylinderParticleEmitter"
      }
      serialize() {
        const MM = {};
        return MM.type = this.getClassName(), MM.radius = this.radius, MM.height = this.height, MM.radiusRange = this.radiusRange, MM.directionRandomizer = this.directionRandomizer, MM
      }
      parse(MM) {
        this.radius = MM.radius, this.height = MM.height, this.radiusRange = MM.radiusRange, this.directionRandomizer = MM.directionRandomizer
      }
    }
    class PM extends aM {
      constructor() {
        let MM = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
          rM = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
          iM = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1,
          SM = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : new OM.q(0, 1, 0),
          jM = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : new OM.q(0, 1, 0);
        super(MM, rM, iM), this.direction1 = SM, this.direction2 = jM
      }
      startDirectionFunction(MM, rM, iM, jM) {
        const aM = (0, SM.RandomRange)(this.direction1.x, this.direction2.x),
          PM = (0, SM.RandomRange)(this.direction1.y, this.direction2.y),
          nM = (0, SM.RandomRange)(this.direction1.z, this.direction2.z);
        jM ? rM.iMM(aM, PM, nM) : OM.q.TransformNormalFromFloatsToRef(aM, PM, nM, MM, rM)
      }
      clone() {
        const MM = new PM(this.radius, this.height, this.radiusRange, this.direction1, this.direction2);
        return jM.b.DeepCopy(this, MM), MM
      }
      applyToShader(MM) {
        MM.setFloat("radius", this.radius), MM.setFloat("height", this.height), MM.setFloat("radiusRange", this.radiusRange), MM.setVector3("direction1", this.direction1), MM.setVector3("direction2", this.direction2)
      }
      buildUniformLayout(MM) {
        MM.addUniform("radius", 1), MM.addUniform("height", 1), MM.addUniform("radiusRange", 1), MM.addUniform("direction1", 3), MM.addUniform("direction2", 3)
      }
      getEffectDefines() {
        return "#define CYLINDEREMITTER\n#define DIRECTEDCYLINDEREMITTER"
      }
      getClassName() {
        return "CylinderDirectedParticleEmitter"
      }
      serialize() {
        const MM = super.serialize();
        return MM.direction1 = this.direction1.HOM(), MM.direction2 = this.direction2.HOM(), MM
      }
      parse(MM) {
        super.parse(MM), OM.q.FromArrayToRef(MM.direction1, 0, this.direction1), OM.q.FromArrayToRef(MM.direction2, 0, this.direction2)
      }
    }
  },
  39846: (MM, rM, iM) => {
    iM.d(rM, {
      d: () => LM
    });
    const OM = .5 * (Math.sqrt(3) - 1),
      SM = (3 - Math.sqrt(3)) / 6,
      jM = 1 / 3,
      aM = 1 / 6,
      PM = (Math.sqrt(5) - 1) / 4,
      nM = (5 - Math.sqrt(5)) / 20,
      QM = new Float32Array([1, 1, 0, -1, 1, 0, 1, -1, 0, -1, -1, 0, 1, 0, 1, -1, 0, 1, 1, 0, -1, -1, 0, -1, 0, 1, 1, 0, -1, 1, 0, 1, -1, 0, -1, -1]),
      zM = new Float32Array([0, 1, 1, 1, 0, 1, 1, -1, 0, 1, -1, 1, 0, 1, -1, -1, 0, -1, 1, 1, 0, -1, 1, -1, 0, -1, -1, 1, 0, -1, -1, -1, 1, 0, 1, 1, 1, 0, 1, -1, 1, 0, -1, 1, 1, 0, -1, -1, -1, 0, 1, 1, -1, 0, 1, -1, -1, 0, -1, 1, -1, 0, -1, -1, 1, 1, 0, 1, 1, 1, 0, -1, 1, -1, 0, 1, 1, -1, 0, -1, -1, 1, 0, 1, -1, 1, 0, -1, -1, -1, 0, 1, -1, -1, 0, -1, 1, 1, 1, 0, 1, 1, -1, 0, 1, -1, 1, 0, 1, -1, -1, 0, -1, 1, 1, 0, -1, 1, -1, 0, -1, -1, 1, 0, -1, -1, -1, 0]);
    const LM = class {
      constructor() {
        let MM = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Math.random;
        const rM = "function" == typeof MM ? MM : function(MM) {
          let rM = 0,
            iM = 0,
            OM = 0,
            SM = 1;
          const jM = function() {
            let MM = 4022871197;
            return function(rM) {
              rM = rM.toString();
              for (let iM = 0; iM < rM.length; iM++) {
                MM += rM.charCodeAt(iM);
                let OM = .02519603282416938 * MM;
                MM = OM >>> 0, OM -= MM, OM *= MM, MM = OM >>> 0, OM -= MM, MM += 4294967296 * OM
              }
              return 2.3283064365386963e-10 * (MM >>> 0)
            }
          }();
          rM = jM(" "), iM = jM(" "), OM = jM(" "), rM -= jM(MM), rM < 0 && (rM += 1);
          iM -= jM(MM), iM < 0 && (iM += 1);
          OM -= jM(MM), OM < 0 && (OM += 1);
          return function() {
            const MM = 2091639 * rM + 2.3283064365386963e-10 * SM;
            return rM = iM, iM = OM, OM = MM - (SM = 0 | MM)
          }
        }(MM);
        this.p = function(MM) {
          const rM = new Uint8Array(256);
          for (let iM = 0; iM < 256; iM++) rM[iM] = iM;
          for (let iM = 0; iM < 255; iM++) {
            const OM = iM + ~~(MM() * (256 - iM)),
              SM = rM[iM];
            rM[iM] = rM[OM], rM[OM] = SM
          }
          return rM
        }(rM), this.perm = new Uint8Array(512), this.permMod12 = new Uint8Array(512);
        for (let iM = 0; iM < 512; iM++) this.perm[iM] = this.p[255 & iM], this.permMod12[iM] = this.perm[iM] % 12
      }
      noise2D(MM, rM) {
        const iM = this.permMod12,
          jM = this.perm;
        let aM = 0,
          PM = 0,
          nM = 0;
        const zM = (MM + rM) * OM,
          LM = Math.floor(MM + zM),
          mM = Math.floor(rM + zM),
          HM = (LM + mM) * SM,
          hM = MM - (LM - HM),
          JM = rM - (mM - HM);
        let dM, yM;
        hM > JM ? (dM = 1, yM = 0) : (dM = 0, yM = 1);
        const lM = hM - dM + SM,
          EM = JM - yM + SM,
          UM = hM - 1 + 2 * SM,
          GM = JM - 1 + 2 * SM,
          CM = 255 & LM,
          eM = 255 & mM;
        let bM = .5 - hM * hM - JM * JM;
        if (bM >= 0) {
          const MM = 3 * iM[CM + jM[eM]];
          bM *= bM, aM = bM * bM * (QM[MM] * hM + QM[MM + 1] * JM)
        }
        let wM = .5 - lM * lM - EM * EM;
        if (wM >= 0) {
          const MM = 3 * iM[CM + dM + jM[eM + yM]];
          wM *= wM, PM = wM * wM * (QM[MM] * lM + QM[MM + 1] * EM)
        }
        let tM = .5 - UM * UM - GM * GM;
        if (tM >= 0) {
          const MM = 3 * iM[CM + 1 + jM[eM + 1]];
          tM *= tM, nM = tM * tM * (QM[MM] * UM + QM[MM + 1] * GM)
        }
        return 70 * (aM + PM + nM)
      }
      noise3D(MM, rM, iM) {
        const OM = this.permMod12,
          SM = this.perm;
        let PM, nM, zM, LM;
        const mM = (MM + rM + iM) * jM,
          HM = Math.floor(MM + mM),
          hM = Math.floor(rM + mM),
          JM = Math.floor(iM + mM),
          dM = (HM + hM + JM) * aM,
          yM = MM - (HM - dM),
          lM = rM - (hM - dM),
          EM = iM - (JM - dM);
        let UM, GM, CM, eM, bM, wM;
        yM >= lM ? lM >= EM ? (UM = 1, GM = 0, CM = 0, eM = 1, bM = 1, wM = 0) : yM >= EM ? (UM = 1, GM = 0, CM = 0, eM = 1, bM = 0, wM = 1) : (UM = 0, GM = 0, CM = 1, eM = 1, bM = 0, wM = 1) : lM < EM ? (UM = 0, GM = 0, CM = 1, eM = 0, bM = 1, wM = 1) : yM < EM ? (UM = 0, GM = 1, CM = 0, eM = 0, bM = 1, wM = 1) : (UM = 0, GM = 1, CM = 0, eM = 1, bM = 1, wM = 0);
        const tM = yM - UM + aM,
          gM = lM - GM + aM,
          uM = EM - CM + aM,
          RM = yM - eM + 2 * aM,
          pM = lM - bM + 2 * aM,
          WM = EM - wM + 2 * aM,
          sM = yM - 1 + .5,
          DM = lM - 1 + .5,
          kM = EM - 1 + .5,
          ZM = 255 & HM,
          oM = 255 & hM,
          fM = 255 & JM;
        let YM = .6 - yM * yM - lM * lM - EM * EM;
        if (YM < 0) PM = 0;
        else {
          const MM = 3 * OM[ZM + SM[oM + SM[fM]]];
          YM *= YM, PM = YM * YM * (QM[MM] * yM + QM[MM + 1] * lM + QM[MM + 2] * EM)
        }
        let NM = .6 - tM * tM - gM * gM - uM * uM;
        if (NM < 0) nM = 0;
        else {
          const MM = 3 * OM[ZM + UM + SM[oM + GM + SM[fM + CM]]];
          NM *= NM, nM = NM * NM * (QM[MM] * tM + QM[MM + 1] * gM + QM[MM + 2] * uM)
        }
        let AM = .6 - RM * RM - pM * pM - WM * WM;
        if (AM < 0) zM = 0;
        else {
          const MM = 3 * OM[ZM + eM + SM[oM + bM + SM[fM + wM]]];
          AM *= AM, zM = AM * AM * (QM[MM] * RM + QM[MM + 1] * pM + QM[MM + 2] * WM)
        }
        let xM = .6 - sM * sM - DM * DM - kM * kM;
        if (xM < 0) LM = 0;
        else {
          const MM = 3 * OM[ZM + 1 + SM[oM + 1 + SM[fM + 1]]];
          xM *= xM, LM = xM * xM * (QM[MM] * sM + QM[MM + 1] * DM + QM[MM + 2] * kM)
        }
        return 32 * (PM + nM + zM + LM)
      }
      noise4D(MM, rM, iM, OM) {
        const SM = this.perm;
        let jM, aM, QM, LM, mM;
        const HM = (MM + rM + iM + OM) * PM,
          hM = Math.floor(MM + HM),
          JM = Math.floor(rM + HM),
          dM = Math.floor(iM + HM),
          yM = Math.floor(OM + HM),
          lM = (hM + JM + dM + yM) * nM,
          EM = MM - (hM - lM),
          UM = rM - (JM - lM),
          GM = iM - (dM - lM),
          CM = OM - (yM - lM);
        let eM = 0,
          bM = 0,
          wM = 0,
          tM = 0;
        EM > UM ? eM++ : bM++, EM > GM ? eM++ : wM++, EM > CM ? eM++ : tM++, UM > GM ? bM++ : wM++, UM > CM ? bM++ : tM++, GM > CM ? wM++ : tM++;
        const gM = eM >= 3 ? 1 : 0,
          uM = bM >= 3 ? 1 : 0,
          RM = wM >= 3 ? 1 : 0,
          pM = tM >= 3 ? 1 : 0,
          WM = eM >= 2 ? 1 : 0,
          sM = bM >= 2 ? 1 : 0,
          DM = wM >= 2 ? 1 : 0,
          kM = tM >= 2 ? 1 : 0,
          ZM = eM >= 1 ? 1 : 0,
          oM = bM >= 1 ? 1 : 0,
          fM = wM >= 1 ? 1 : 0,
          YM = tM >= 1 ? 1 : 0,
          NM = EM - gM + nM,
          AM = UM - uM + nM,
          xM = GM - RM + nM,
          vM = CM - pM + nM,
          FM = EM - WM + 2 * nM,
          BM = UM - sM + 2 * nM,
          XM = GM - DM + 2 * nM,
          IM = CM - kM + 2 * nM,
          KM = EM - ZM + 3 * nM,
          qM = UM - oM + 3 * nM,
          TM = GM - fM + 3 * nM,
          VM = CM - YM + 3 * nM,
          cM = EM - 1 + 4 * nM,
          Mr = UM - 1 + 4 * nM,
          rr = GM - 1 + 4 * nM,
          ir = CM - 1 + 4 * nM,
          Or = 255 & hM,
          Sr = 255 & JM,
          jr = 255 & dM,
          ar = 255 & yM;
        let Pr = .6 - EM * EM - UM * UM - GM * GM - CM * CM;
        if (Pr < 0) jM = 0;
        else {
          const MM = SM[Or + SM[Sr + SM[jr + SM[ar]]]] % 32 * 4;
          Pr *= Pr, jM = Pr * Pr * (zM[MM] * EM + zM[MM + 1] * UM + zM[MM + 2] * GM + zM[MM + 3] * CM)
        }
        let nr = .6 - NM * NM - AM * AM - xM * xM - vM * vM;
        if (nr < 0) aM = 0;
        else {
          const MM = SM[Or + gM + SM[Sr + uM + SM[jr + RM + SM[ar + pM]]]] % 32 * 4;
          nr *= nr, aM = nr * nr * (zM[MM] * NM + zM[MM + 1] * AM + zM[MM + 2] * xM + zM[MM + 3] * vM)
        }
        let Qr = .6 - FM * FM - BM * BM - XM * XM - IM * IM;
        if (Qr < 0) QM = 0;
        else {
          const MM = SM[Or + WM + SM[Sr + sM + SM[jr + DM + SM[ar + kM]]]] % 32 * 4;
          Qr *= Qr, QM = Qr * Qr * (zM[MM] * FM + zM[MM + 1] * BM + zM[MM + 2] * XM + zM[MM + 3] * IM)
        }
        let zr = .6 - KM * KM - qM * qM - TM * TM - VM * VM;
        if (zr < 0) LM = 0;
        else {
          const MM = SM[Or + ZM + SM[Sr + oM + SM[jr + fM + SM[ar + YM]]]] % 32 * 4;
          zr *= zr, LM = zr * zr * (zM[MM] * KM + zM[MM + 1] * qM + zM[MM + 2] * TM + zM[MM + 3] * VM)
        }
        let Lr = .6 - cM * cM - Mr * Mr - rr * rr - ir * ir;
        if (Lr < 0) mM = 0;
        else {
          const MM = SM[Or + 1 + SM[Sr + 1 + SM[jr + 1 + SM[ar + 1]]]] % 32 * 4;
          Lr *= Lr, mM = Lr * Lr * (zM[MM] * cM + zM[MM + 1] * Mr + zM[MM + 2] * rr + zM[MM + 3] * ir)
        }
        return 27 * (jM + aM + QM + LM + mM)
      }
    }
  }
};
Object.freeze(modules);
for (const MM in modules) Object.freeze(modules[MM]);