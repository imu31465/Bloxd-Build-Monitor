/*! For license information please see fqwnlq.219.7f7ef722.chunk.js.LICENSE.txt */
export const id = 219;
export const ids = [219];
export const modules = {
  39608: (SS, HS, gS) => {
    SS.exports = bS;
    var tS = gS(402);

    function bS(SS, HS) {
      if (!(this instanceof bS)) return new bS(SS, HS);
      var gS = tS.create();
      tS.add(gS, SS, HS), this.base = tS.min(tS.create(), SS, gS), this.vec = tS.clone(HS), this.max = tS.max(tS.create(), SS, gS), this.mag = tS.length(this.vec)
    }
    var XS = bS.prototype;
    XS.width = function() {
      return this.vec[0]
    }, XS.height = function() {
      return this.vec[1]
    }, XS.depth = function() {
      return this.vec[2]
    }, XS.x0 = function() {
      return this.base[0]
    }, XS.y0 = function() {
      return this.base[1]
    }, XS.z0 = function() {
      return this.base[2]
    }, XS.x1 = function() {
      return this.max[0]
    }, XS.y1 = function() {
      return this.max[1]
    }, XS.z1 = function() {
      return this.max[2]
    }, XS.translate = function(SS) {
      return tS.add(this.max, this.max, SS), tS.add(this.base, this.base, SS), this
    }, XS.setPosition = function(SS) {
      return tS.add(this.max, SS, this.vec), tS.copy(this.base, SS), this
    }, XS.expand = function(SS) {
      var HS = tS.create(),
        gS = tS.create();
      return tS.max(HS, SS.max, this.max), tS.min(gS, SS.base, this.base), tS.subtract(HS, HS, gS), new bS(gS, HS)
    }, XS.intersects = function(SS) {
      return !(SS.base[0] > this.max[0]) && (!(SS.base[1] > this.max[1]) && (!(SS.base[2] > this.max[2]) && (!(SS.max[0] < this.base[0]) && (!(SS.max[1] < this.base[1]) && !(SS.max[2] < this.base[2])))))
    }, XS.touches = function(SS) {
      var HS = this.union(SS);
      return null !== HS && (0 == HS.width() || 0 == HS.height() || 0 == HS.depth())
    }, XS.union = function(SS) {
      if (!this.intersects(SS)) return null;
      var HS = Math.max(SS.base[0], this.base[0]),
        gS = Math.max(SS.base[1], this.base[1]),
        tS = Math.max(SS.base[2], this.base[2]);
      return new bS([HS, gS, tS], [Math.min(SS.max[0], this.max[0]) - HS, Math.min(SS.max[1], this.max[1]) - gS, Math.min(SS.max[2], this.max[2]) - tS])
    }
  },
  39605: SS => {
    SS.exports = function(SS, HS, gS, tS, bS, XS) {
      var xS = +HS[0],
        NS = +HS[1],
        qS = +HS[2],
        uS = +gS[0],
        IS = +gS[1],
        fS = +gS[2],
        kS = Math.sqrt(uS * uS + IS * IS + fS * fS);
      if (0 === kS) throw new Error("Can't raycast along a zero vector");
      return function(SS, HS, gS, tS, bS, XS, xS, NS, qS, uS) {
        for (var IS = 0, fS = Math.floor, kS = 0 | fS(HS), aS = 0 | fS(gS), KS = 0 | fS(tS), jS = bS > 0 ? 1 : -1, GS = XS > 0 ? 1 : -1, CS = xS > 0 ? 1 : -1, nS = Math.abs(1 / bS), PS = Math.abs(1 / XS), QS = Math.abs(1 / xS), DS = nS < 1 / 0 ? nS * (jS > 0 ? kS + 1 - HS : HS - kS) : 1 / 0, wS = PS < 1 / 0 ? PS * (GS > 0 ? aS + 1 - gS : gS - aS) : 1 / 0, hS = QS < 1 / 0 ? QS * (CS > 0 ? KS + 1 - tS : tS - KS) : 1 / 0, ZS = -1; IS <= NS;) {
          var JS = SS(kS, aS, KS);
          if (JS) return qS && (qS[0] = HS + IS * bS, qS[1] = gS + IS * XS, qS[2] = tS + IS * xS), uS && (uS[0] = uS[1] = uS[2] = 0, 0 === ZS && (uS[0] = -jS), 1 === ZS && (uS[1] = -GS), 2 === ZS && (uS[2] = -CS)), JS;
          DS < wS ? DS < hS ? (kS += jS, IS = DS, DS += nS, ZS = 0) : (KS += CS, IS = hS, hS += QS, ZS = 2) : wS < hS ? (aS += GS, IS = wS, wS += PS, ZS = 1) : (KS += CS, IS = hS, hS += QS, ZS = 2)
        }
        return qS && (qS[0] = HS + IS * bS, qS[1] = gS + IS * XS, qS[2] = tS + IS * xS), uS && (uS[0] = uS[1] = uS[2] = 0), 0
      }(SS, xS, NS, qS, uS /= kS, IS /= kS, fS /= kS, tS = "undefined" === typeof tS ? 64 : +tS, bS, XS)
    }
  },
  39134: (SS, HS, gS) => {
    gS.d(HS, {
      c: () => NS,
      d: () => XS
    });
    var tS = gS(4216);
    let bS = null;

    function XS(SS) {
      return null !== bS && SS === bS
    }

    function xS() {
      this.Xp = !1, this.stopPropagation = !1, this.Ip = !1, this.disabled = !1
    }
    class NS {
      constructor(SS, HS) {
        this.version = "0.7.0";
        var gS = Object.assign({}, new xS, HS || {});
        this.element = SS || document, this.Xp = !!gS.Xp, this.stopPropagation = !!gS.stopPropagation, this.Ip = !!gS.Ip, this.disabled = !!gS.disabled, this.filterEvents = (SS, HS) => !0, this.ignoreEvent = SS => !1, this.down = new tS.EventEmitter, this.up = new tS.EventEmitter, this.state = {}, this.Qp = {
          dx: 0,
          dy: 0,
          TSS: 0,
          oSS: 0,
          lSS: 0
        }, this.pressCount = {}, this.releaseCount = {}, this._keyBindmap = {}, this._keyStates = {}, this._bindPressCount = {}, this._touches = {
          lastX: 0,
          lastY: 0,
          currID: null
        }, "loading" !== document.readyState ? uS(this) : document.addEventListener("DOMContentLoaded", (SS => {
          uS(this)
        }), {
          once: !0
        })
      }
      bind(SS) {
        for (var HS = arguments.length, gS = new Array(HS > 1 ? HS - 1 : 0), tS = 1; tS < HS; tS++) gS[tS - 1] = arguments[tS];
        gS.forEach((HS => {
          var gS = this._keyBindmap[HS] || [];
          gS.includes(SS) || (gS.push(SS), this._keyBindmap[HS] = gS)
        })), this.state[SS] = !!this.state[SS], this.pressCount[SS] = this.pressCount[SS] || 0, this.releaseCount[SS] = this.releaseCount[SS] || 0
      }
      unbind(SS) {
        for (var HS in this._keyBindmap) {
          var gS = this._keyBindmap[HS],
            tS = gS.indexOf(SS);
          tS > -1 && gS.splice(tS, 1)
        }
      }
      getBindings() {
        var SS = {};
        for (var HS in this._keyBindmap) {
          this._keyBindmap[HS].forEach((gS => {
            SS[gS] = SS[gS] || [], SS[gS].push(HS)
          }))
        }
        return SS
      }
      mf() {
        qS(this.Qp), qS(this.pressCount), qS(this.releaseCount)
      }
    }

    function qS(SS) {
      for (var HS in SS) SS[HS] = 0
    }

    function uS(SS) {
      window.addEventListener("keydown", GS.bind(null, SS, !0), !1), window.addEventListener("keyup", GS.bind(null, SS, !1), !1);
      var HS = {
        passive: !0
      };
      SS.element.addEventListener("touchstart", aS.bind(void 0, SS), {
        passive: !1
      }), SS.element.addEventListener("touchend", jS.bind(void 0, SS), HS), SS.element.addEventListener("mousedown", CS.bind(null, SS, !0), HS), window.document.addEventListener("mouseup", CS.bind(null, SS, !1), HS), SS.element.addEventListener("touchmove", nS.bind(null, SS), HS), SS.element.addEventListener("mousemove", nS.bind(null, SS), HS), window.PointerEvent, SS.element.addEventListener("wheel", PS.bind(null, SS), HS), SS.element.addEventListener("contextmenu", QS.bind(null, SS), !1), window.addEventListener("blur", hS.bind(null, SS), !1)
    }
    var IS = 0,
      fS = 0,
      kS = null;

    function aS(SS, HS) {
      HS.preventDefault(), KS(HS)
    }

    function KS(SS) {
      let HS = !1;
      for (let gS = 0; gS < SS.touches.length; ++gS)
        if (SS.touches[gS].identifier === kS) {
          HS = !0;
          break
        } if (!HS) {
        const HS = SS.changedTouches[0];
        IS = HS.clientX, fS = HS.clientY, kS = HS.identifier
      }
    }

    function jS(SS, HS) {
      for (var gS = HS.changedTouches, tS = 0; tS < gS.length; ++tS) gS[tS].identifier === kS && (kS = null)
    }

    function GS(SS, HS, gS) {
      if (!SS.ignoreEvent(gS)) try {
        ZS(SS, gS), HS && gS.isTrusted && !gS.repeat && SS._keyStates[gS.code] && JS(SS, gS.code)
      } finally {
        OS(gS.code, HS, SS, gS)
      }
    }

    function CS(SS, HS, gS) {
      if (!SS.ignoreEvent(gS)) try {
        ZS(SS, gS)
      } finally {
        ! function(SS, HS, gS) {
          if ("pointerId" in gS)
            if (HS) {
              if (null !== SS._touches.currID) return;
              SS._touches.currID = gS.pointerId
            } else {
              if (SS._touches.currID !== gS.pointerId) return;
              SS._touches.currID = null
            } var tS = "button" in gS ? gS.button + 1 : 1;
          OS("Mouse" + tS, HS, SS, gS)
        }(SS, HS, gS)
      }
    }

    function nS(SS, HS) {
      var gS = HS.movementX || HS.mozMovementX || 0,
        tS = HS.movementY || HS.mozMovementY || 0;
      if (HS.touches && 0 === (gS | tS)) {
        var bS = function(SS) {
          KS(SS);
          for (let HS = 0; HS < SS.changedTouches.length; ++HS)
            if (SS.changedTouches[HS].identifier == kS) {
              const gS = SS.changedTouches[HS],
                tS = [gS.clientX - IS, gS.clientY - fS];
              return IS = gS.clientX, fS = gS.clientY, tS
            } return console.error(`Did not find touch id ${kS}`), [0, 0]
        }(HS);
        gS = bS[0], tS = bS[1]
      }
      SS.Qp.dx += gS, SS.Qp.dy += tS
    }

    function PS(SS, HS) {
      ZS(SS, HS);
      var gS = 1;
      switch (HS.deltaMode) {
        case 0:
          gS = 1;
          break;
        case 1:
          gS = 12;
          break;
        case 2:
          gS = SS.element.clientHeight || window.innerHeight
      }
      SS.Qp.TSS += (HS.deltaX || 0) * gS, SS.Qp.oSS += (HS.deltaY || 0) * gS, SS.Qp.lSS += (HS.deltaZ || 0) * gS
    }

    function QS(SS, HS) {
      if (!SS.Ip) return HS.preventDefault(), !1
    }
    var DS = {
      AltLeft: "altKey",
      AltRight: "altKey",
      ControlLeft: "ctrlKey",
      ControlRight: "ctrlKey",
      ShiftLeft: "shiftKey",
      ShiftRight: "shiftKey",
      MetaLeft: "metaKey",
      MetaRight: "metaKey"
    };

    function wS(SS, HS) {
      return !!SS[DS[HS]] || ("AltRight" === HS || "ControlLeft" === HS) && "function" === typeof SS.getModifierState && !0 === SS.getModifierState("AltGraph")
    }

    function hS(SS, HS) {
      for (var gS in SS._modifiersHeldThroughBlur = {}, DS) SS._keyStates[gS] && (SS._modifiersHeldThroughBlur[gS] = !0);
      HS && HS.isTrusted && function() {
        try {
          return window.self !== window.top
        } catch (SS) {
          return !0
        }
      }() && (clearTimeout(SS._blurRelease), SS._blurRelease = setTimeout((function() {
        if (!document.hasFocus())
          for (var HS in SS._modifiersHeldThroughBlur = {}, SS._keyStates) SS._keyStates[HS] && !/^Mouse\d/.test(HS) && JS(SS, HS)
      }), 0))
    }

    function ZS(SS, HS) {
      var gS = SS._modifiersHeldThroughBlur;
      if (gS && HS.isTrusted && document.hasFocus())
        for (var tS in gS) delete gS[tS], SS._keyStates[tS] && tS !== HS.code && (wS(HS, tS) || JS(SS, tS))
    }

    function JS(SS, HS) {
      const gS = {
          code: HS,
          preventDefault: () => {},
          stopPropagation: () => {}
        },
        tS = bS;
      bS = gS;
      try {
        OS(HS, !1, SS, gS)
      } finally {
        bS = tS
      }
    }

    function OS(SS, HS, gS, tS) {
      var bS = gS._keyBindmap[SS];
      bS && (dS(gS._keyStates[SS], HS) && (gS._keyStates[SS] = HS, bS.forEach((SS => {
        (!gS.filterEvents || gS.filterEvents(tS, SS)) && function(SS, HS, gS, tS) {
          var bS = HS ? gS.pressCount : gS.releaseCount;
          bS[SS] = (bS[SS] || 0) + 1;
          var XS = gS._bindPressCount[SS] || 0;
          (XS += HS ? 1 : -1) < 0 && (XS = 0);
          gS._bindPressCount[SS] = XS;
          var xS = gS.state[SS];
          if (dS(xS, XS)) {
            gS.state[SS] = XS > 0;
            var NS = HS ? gS.down : gS.up;
            gS.disabled || NS.emit(SS, tS)
          }
        }(SS, HS, gS, tS)
      }))), "button" in tS || (gS.Xp && !tS.defaultPrevented && tS.preventDefault(), gS.stopPropagation && tS.stopPropagation()))
    }

    function dS(SS, HS) {
      return SS ? !HS : HS
    }
  },
  36547: (SS, HS) => {
    function gS(SS) {
      if (SS && "object" === typeof SS) {
        var HS = SS.which || SS.keyCode || SS.charCode;
        HS && (SS = HS)
      }
      if ("number" === typeof SS) return xS[SS];
      var gS, XS = String(SS);
      return (gS = tS[XS.toLowerCase()]) ? gS : (gS = bS[XS.toLowerCase()]) || (1 === XS.length ? XS.charCodeAt(0) : void 0)
    }
    gS.isEventKey = function(SS, HS) {
      if (SS && "object" === typeof SS) {
        var gS = SS.which || SS.keyCode || SS.charCode;
        if (null === gS || void 0 === gS) return !1;
        if ("string" === typeof HS) {
          var XS;
          if (XS = tS[HS.toLowerCase()]) return XS === gS;
          if (XS = bS[HS.toLowerCase()]) return XS === gS
        } else if ("number" === typeof HS) return HS === gS;
        return !1
      }
    };
    var tS = (HS = SS.exports = gS).code = HS.codes = {
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
      bS = HS.aliases = {
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
    for (XS = 97; XS < 123; XS++) tS[String.fromCharCode(XS)] = XS - 32;
    for (var XS = 48; XS < 58; XS++) tS[XS - 48] = XS;
    for (XS = 1; XS < 13; XS++) tS["f" + XS] = XS + 111;
    for (XS = 0; XS < 10; XS++) tS["numpad " + XS] = XS + 96;
    var xS = HS.names = HS.title = {};
    for (XS in tS) xS[tS[XS]] = XS;
    for (var NS in bS) tS[NS] = bS[NS]
  },
  39596: (SS, HS, gS) => {
    gS.d(HS, {
      b: () => tS
    });
    class tS {
      constructor() {
        let SS = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
          HS = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 10;
        this.Uy = !1, this.Fy = !1, this.YL = 30, this.Qy = 0, this.HV = 100, this.VG = !1, this.fullscreen = !1, this.sC = function(SS) {}, this.tV = function(SS, HS, gS) {}, this.xV = function() {}, this.WC = function() {}, this.bV = function() {}, this.onFullscreenChanged = function() {}, this.onPointerLockError = function(SS) {}, this._data = new bS(HS),
          function(SS) {
            if ("loading" === document.readyState) {
              var HS = () => {
                document.removeEventListener("readystatechange", HS), SS()
              };
              document.addEventListener("readystatechange", HS)
            } else setTimeout(SS, 0)
          }((() => {
            ! function(SS) {
              var HS = SS._data,
                gS = HS.nowObject.now();
              HS.lastTickStarted = gS, HS.lastFrameStarted = gS, HS.lastRenderStarted = gS, HS.frameCB = () => function(SS) {
                var HS = SS._data;
                requestAnimationFrame(HS.frameCB), NS(SS);
                var gS = HS.nowObject.now(),
                  tS = gS - HS.lastFrameStarted;
                if (HS.lastFrameStarted = gS, SS.Qy > 0) {
                  HS.renderAccum += tS;
                  var bS = 1e3 / SS.Qy;
                  if (HS.renderAccum < bS) return;
                  HS.renderAccum -= bS, HS.renderAccum > bS && (HS.renderAccum = bS)
                }
                var XS = gS - HS.lastRenderStarted;
                HS.lastRenderStarted = gS;
                var xS = 1e3 / SS.YL,
                  qS = (gS - HS.lastTickStarted) / xS;
                qS < 0 && (qS = 0);
                SS.tV(XS, qS, xS), setTimeout(NS, 0, SS, !0)
              }(SS), HS.intervalCB = () => NS(SS), requestAnimationFrame(HS.frameCB), HS.pollTime > 0 && (HS.intervalID = setInterval(HS.intervalCB, Math.max(HS.pollTime, 1e3 / SS.YL / 2)))
            }(this),
            function(SS, HS) {
              if (!HS) return;
              var gS = !1,
                tS = !1,
                bS = SS => {
                  if (!!SS !== (gS = HS === document.pointerLockElement))
                    if (SS) {
                      var tS = HS.requestPointerLock();
                      tS && tS.catch && tS.catch((SS => {}))
                    } else document.exitPointerLock()
                },
                XS = SS => {
                  !!SS !== (tS = HS === document.fullscreenElement) && (SS ? HS.requestFullscreen ? HS.requestFullscreen() : HS.webkitRequestFullscreen && HS.webkitRequestFullscreen() : document.exitFullscreen ? document.exitFullscreen() : document.webkitExitFullscreen && document.webkitExitFullscreen())
                };
              document.addEventListener("pointerlockchange", (tS => {
                gS = HS === document.pointerLockElement, SS.bV(gS)
              })), document.addEventListener("fullscreenchange", (gS => {
                tS = HS === document.fullscreenElement, SS.onFullscreenChanged(tS)
              })), document.addEventListener("pointerlockerror", (tS => {
                gS = HS === document.pointerLockElement, SS.onPointerLockError(tS)
              })), Object.defineProperty(SS, "VG", {
                get: () => gS,
                set: bS
              }), Object.defineProperty(SS, "fullscreen", {
                get: () => tS,
                set: XS
              }), HS.addEventListener("click", (HS => {
                SS.Uy && bS(!0), SS.Fy && XS(!0)
              }));
              var xS = () => SS.WC();
              if (window.ResizeObserver) {
                new ResizeObserver(xS).observe(HS)
              } else window.addEventListener("resize", xS)
            }(this, SS), this.xV()
          }))
      }
    }

    function bS() {
      let SS = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 10;
      this.nowObject = performance || Date, this.pollTime = SS, this.renderAccum = 0, this.lastTickStarted = 0, this.lastFrameStarted = 0, this.lastRenderStarted = 0, this.avgTickTime = 2, this.frameCB = null, this.intervalCB = null, this.intervalID = -1
    }
    var XS = 3,
      xS = 20;

    function NS(SS) {
      for (var HS = SS._data, gS = 1e3 / SS.YL, tS = HS.nowObject.now() + xS, bS = 0; HS.nowObject.now() >= HS.lastTickStarted + gS && HS.nowObject.now() < tS && ++bS <= XS;) SS.sC(gS), HS.lastTickStarted += gS;
      var NS = 5 * (gS + 5),
        qS = HS.nowObject.now();
      if (qS - HS.lastTickStarted > NS)
        for (; qS >= HS.lastTickStarted + gS;) HS.lastTickStarted += gS
    }
  },
  36721: (SS, HS, gS) => {
    gS.d(HS, {
      d: () => xS
    });
    var tS = gS(64);
    const bS = tS.useLayoutEffect;
    const XS = function(SS) {
      var HS = (0, tS.useRef)(SS);
      return bS((function() {
        HS.current = SS
      })), HS
    };
    var xS = function(SS) {
      var HS = XS(SS);
      (0, tS.useEffect)((function() {
        var SS = function(SS) {
          var gS;
          if (null != HS.current && (gS = HS.current(SS)), SS.defaultPrevented && (SS.returnValue = ""), "string" === typeof gS) return SS.returnValue = gS, gS
        };
        return window.addEventListener("beforeunload", SS),
          function() {
            window.removeEventListener("beforeunload", SS)
          }
      }), [])
    }
  },
  36601: SS => {
    var HS, gS = "undefined" !== typeof window ? window.navigator.userAgent : "",
      tS = /OS X/.test(gS),
      bS = /Opera/.test(gS),
      XS = !/like Gecko/.test(gS) && !bS,
      xS = SS.exports = {
        0: tS ? "<menu>" : "<UNK>",
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
        93: tS ? "<meta>" : "<menu>",
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
        173: tS && XS ? "-" : "<volume-mute>",
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
        231: bS ? "`" : "<unicode>",
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
    for (HS = 58; HS < 65; ++HS) xS[HS] = String.fromCharCode(HS);
    for (HS = 48; HS < 58; ++HS) xS[HS] = HS - 48 + "";
    for (HS = 65; HS < 91; ++HS) xS[HS] = String.fromCharCode(HS);
    for (HS = 96; HS < 106; ++HS) xS[HS] = "<num-" + (HS - 96) + ">";
    for (HS = 112; HS < 136; ++HS) xS[HS] = "F" + (HS - 111)
  },
  39009: (SS, HS, gS) => {
    function tS(SS, HS, gS, tS, bS) {
      var XS = {};
      return Object.keys(tS).forEach((function(SS) {
        XS[SS] = tS[SS]
      })), XS.enumerable = !!XS.enumerable, XS.configurable = !!XS.configurable, ("value" in XS || XS.initializer) && (XS.writable = !0), XS = gS.slice().reverse().reduce((function(gS, tS) {
        return tS(SS, HS, gS) || gS
      }), XS), bS && void 0 !== XS.initializer && (XS.value = XS.initializer ? XS.initializer.call(bS) : void 0, XS.initializer = void 0), void 0 === XS.initializer && (Object.defineProperty(SS, HS, XS), XS = null), XS
    }
    gS.d(HS, {
      c: () => tS
    })
  },
  39006: (SS, HS, gS) => {
    function tS(SS, HS, gS, tS) {
      gS && Object.defineProperty(SS, HS, {
        enumerable: gS.enumerable,
        configurable: gS.configurable,
        writable: gS.writable,
        value: gS.initializer ? gS.initializer.call(tS) : void 0
      })
    }
    gS.d(HS, {
      b: () => tS
    })
  },
  38683: (SS, HS, gS) => {
    gS.d(HS, {
      d: () => XS
    });
    var tS = gS(38687);
    const bS = (SS, HS, gS) => SS ? SS.getClassName && "Mesh" === SS.getClassName() ? null : !SS.getClassName || "SubMesh" !== SS.getClassName() && "PhysicsBody" !== SS.getClassName() ? SS.clone ? SS.clone() : Array.isArray(SS) ? SS.slice() : gS && "object" === typeof SS ? {
      ...SS
    } : null : SS.clone(HS) : null;
    class XS {
      static DeepCopy(SS, HS, gS, XS) {
        let xS = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
        const NS = function(SS) {
          const HS = [];
          do {
            const gS = Object.getOwnPropertyNames(SS);
            for (const SS of gS) - 1 === HS.indexOf(SS) && HS.push(SS)
          } while (SS = Object.getPrototypeOf(SS));
          return HS
        }(SS);
        for (const uS of NS) {
          if ("_" === uS[0] && (!XS || -1 === XS.indexOf(uS))) continue;
          if (uS.endsWith("Observable")) continue;
          if (gS && -1 !== gS.indexOf(uS)) continue;
          const NS = SS[uS],
            IS = typeof NS;
          if ("function" !== IS) try {
            if ("object" === IS)
              if (NS instanceof Uint8Array) HS[uS] = Uint8Array.from(NS);
              else if (NS instanceof Array) {
              if (HS[uS] = [], NS.length > 0)
                if ("object" == typeof NS[0])
                  for (let SS = 0; SS < NS.length; SS++) {
                    const gS = bS(NS[SS], HS, xS); - 1 === HS[uS].indexOf(gS) && HS[uS].push(gS)
                  } else HS[uS] = NS.slice(0)
            } else HS[uS] = bS(NS, HS, xS);
            else HS[uS] = NS
          } catch (qS) {
            tS.b.Warn(qS.message)
          }
        }
      }
    }
  },
  38715: (SS, HS, gS) => {
    gS.d(HS, {
      c: () => bS,
      f: () => XS,
      j: () => xS,
      n: () => NS
    });
    var tS = gS(37300);
    class bS {
      constructor(SS, HS, gS) {
        this.gradient = SS, this.color1 = HS, this.color2 = gS
      }
      getColorToRef(SS) {
        this.color2 ? tS.c.LerpToRef(this.color1, this.color2, Math.random(), SS) : SS.dJ(this.color1)
      }
    }
    class XS {
      constructor(SS, HS) {
        this.gradient = SS, this.color = HS
      }
    }
    class xS {
      constructor(SS, HS, gS) {
        this.gradient = SS, this.factor1 = HS, this.factor2 = gS
      }
      getFactor() {
        return void 0 === this.factor2 || this.factor2 === this.factor1 ? this.factor1 : this.factor1 + (this.factor2 - this.factor1) * Math.random()
      }
    }
    class NS {
      static GetCurrentGradient(SS, HS, gS) {
        if (HS[0].gradient > SS) return void gS(HS[0], HS[0], 1);
        for (let bS = 0; bS < HS.length - 1; bS++) {
          const tS = HS[bS],
            XS = HS[bS + 1];
          if (SS >= tS.gradient && SS <= XS.gradient) {
            return void gS(tS, XS, (SS - tS.gradient) / (XS.gradient - tS.gradient))
          }
        }
        const tS = HS.length - 1;
        gS(HS[tS], HS[tS], 1)
      }
    }
  },
  38687: (SS, HS, gS) => {
    gS.d(HS, {
      b: () => tS
    });
    class tS {
      static _CheckLimit(SS, HS) {
        let gS = tS._LogLimitOutputs[SS];
        return gS ? gS.current++ : (gS = {
          limit: HS,
          current: 1
        }, tS._LogLimitOutputs[SS] = gS), gS.current <= gS.limit
      }
      static _GenerateLimitMessage(SS) {
        let HS = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
        const gS = tS._LogLimitOutputs[SS];
        if (!gS || !tS.MessageLimitReached) return;
        const bS = this._Levels[HS];
        gS.current === gS.limit && tS[bS.name](tS.MessageLimitReached.replace(/%LIMIT%/g, "" + gS.limit).replace(/%TYPE%/g, bS.name ?? ""))
      }
      static _AddLogEntry(SS) {
        tS._LogCache = SS + tS._LogCache, tS.OnNewCacheEntry && tS.OnNewCacheEntry(SS)
      }
      static _FormatMessage(SS) {
        const HS = SS => SS < 10 ? "0" + SS : "" + SS,
          gS = new Date;
        return "[" + HS(gS.getHours()) + ":" + HS(gS.getMinutes()) + ":" + HS(gS.getSeconds()) + "]: " + SS
      }
      static _LogDisabled(SS, HS) {}
      static _LogEnabled() {
        let SS = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
          HS = arguments.length > 1 ? arguments[1] : void 0,
          gS = arguments.length > 2 ? arguments[2] : void 0;
        const bS = Array.isArray(HS) ? HS[0] : HS;
        if (void 0 !== gS && !tS._CheckLimit(bS, gS)) return;
        const XS = tS._FormatMessage(bS),
          xS = this._Levels[SS],
          NS = Array.isArray(HS) ? HS.slice(1) : [];
        xS.logFunc && xS.logFunc("BJS - " + XS, ...NS);
        const qS = `<div style='color:${xS.color}'>${XS}</div><br>`;
        tS._AddLogEntry(qS), tS._GenerateLimitMessage(bS, SS)
      }
      static get LogCache() {
        return tS._LogCache
      }
      static ClearLogCache() {
        tS._LogCache = "", tS._LogLimitOutputs = {}, tS.errorsCount = 0
      }
      static set LogLevels(SS) {
        tS.Log = tS._LogDisabled, tS.Warn = tS._LogDisabled, tS.Error = tS._LogDisabled;
        const HS = [tS.MessageLogLevel, tS.WarningLogLevel, tS.ErrorLogLevel];
        for (const gS of HS)
          if ((SS & gS) === gS) {
            const SS = this._Levels[gS];
            tS[SS.name] = tS._LogEnabled.bind(tS, gS)
          }
      }
    }
    tS.NoneLogLevel = 0, tS.MessageLogLevel = 1, tS.WarningLogLevel = 2, tS.ErrorLogLevel = 4, tS.AllLogLevel = 7, tS.MessageLimitReached = "Too many %TYPE%s (%LIMIT%), no more %TYPE%s will be reported for this message.", tS._LogCache = "", tS._LogLimitOutputs = {}, tS._Levels = [{}, {
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
    }], tS.errorsCount = 0, tS.Log = tS._LogEnabled.bind(tS, tS.MessageLogLevel), tS.Warn = tS._LogEnabled.bind(tS, tS.WarningLogLevel), tS.Error = tS._LogEnabled.bind(tS, tS.ErrorLogLevel)
  },
  38721: (SS, HS, gS) => {
    gS.d(HS, {
      b: () => xS
    });
    var tS = gS(37117),
      bS = gS(37149),
      XS = gS(38683);
    class xS {
      constructor() {
        this.direction1 = new tS.n(0, 1, 0), this.direction2 = new tS.n(0, 1, 0), this.minEmitBox = new tS.n(-.5, -.5, -.5), this.maxEmitBox = new tS.n(.5, .5, .5)
      }
      startDirectionFunction(SS, HS, gS, XS) {
        const xS = (0, bS.RandomRange)(this.direction1.x, this.direction2.x),
          NS = (0, bS.RandomRange)(this.direction1.y, this.direction2.y),
          qS = (0, bS.RandomRange)(this.direction1.z, this.direction2.z);
        if (XS) return HS.x = xS, HS.y = NS, void(HS.z = qS);
        tS.n.TransformNormalFromFloatsToRef(xS, NS, qS, SS, HS)
      }
      startPositionFunction(SS, HS, gS, XS) {
        const xS = (0, bS.RandomRange)(this.minEmitBox.x, this.maxEmitBox.x),
          NS = (0, bS.RandomRange)(this.minEmitBox.y, this.maxEmitBox.y),
          qS = (0, bS.RandomRange)(this.minEmitBox.z, this.maxEmitBox.z);
        if (XS) return HS.x = xS, HS.y = NS, void(HS.z = qS);
        tS.n.TransformCoordinatesFromFloatsToRef(xS, NS, qS, SS, HS)
      }
      clone() {
        const SS = new xS;
        return XS.d.DeepCopy(this, SS), SS
      }
      applyToShader(SS) {
        SS.setVector3("direction1", this.direction1), SS.setVector3("direction2", this.direction2), SS.setVector3("minEmitBox", this.minEmitBox), SS.setVector3("maxEmitBox", this.maxEmitBox)
      }
      buildUniformLayout(SS) {
        SS.addUniform("direction1", 3), SS.addUniform("direction2", 3), SS.addUniform("minEmitBox", 3), SS.addUniform("maxEmitBox", 3)
      }
      getEffectDefines() {
        return "#define BOXEMITTER"
      }
      getClassName() {
        return "BoxParticleEmitter"
      }
      serialize() {
        const SS = {};
        return SS.type = this.getClassName(), SS.direction1 = this.direction1.lgS(), SS.direction2 = this.direction2.lgS(), SS.minEmitBox = this.minEmitBox.lgS(), SS.maxEmitBox = this.maxEmitBox.lgS(), SS
      }
      parse(SS) {
        tS.n.FromArrayToRef(SS.direction1, 0, this.direction1), tS.n.FromArrayToRef(SS.direction2, 0, this.direction2), tS.n.FromArrayToRef(SS.minEmitBox, 0, this.minEmitBox), tS.n.FromArrayToRef(SS.maxEmitBox, 0, this.maxEmitBox)
      }
    }
  },
  38678: (SS, HS, gS) => {
    gS.d(HS, {
      d: () => NS,
      e: () => xS
    });
    var tS = gS(37117),
      bS = gS(37149),
      XS = gS(38683);
    class xS {
      constructor() {
        let SS = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
          HS = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
          gS = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1,
          bS = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
        this.radius = SS, this.height = HS, this.radiusRange = gS, this.directionRandomizer = bS, this._tempVector = tS.n.Zero()
      }
      startDirectionFunction(SS, HS, gS, XS, xS) {
        gS.position.subtractToRef(SS.getTranslation(), this._tempVector), this._tempVector.normalize(), tS.n.TransformNormalToRef(this._tempVector, xS, this._tempVector);
        const NS = (0, bS.RandomRange)(-this.directionRandomizer / 2, this.directionRandomizer / 2);
        let qS = Math.atan2(this._tempVector.x, this._tempVector.z);
        qS += (0, bS.RandomRange)(-Math.PI / 2, Math.PI / 2) * this.directionRandomizer, this._tempVector.y = NS, this._tempVector.x = Math.sin(qS), this._tempVector.z = Math.cos(qS), this._tempVector.normalize(), XS ? HS.dJ(this._tempVector) : tS.n.TransformNormalFromFloatsToRef(this._tempVector.x, this._tempVector.y, this._tempVector.z, SS, HS)
      }
      startPositionFunction(SS, HS, gS, XS) {
        const xS = (0, bS.RandomRange)(-this.height / 2, this.height / 2),
          NS = (0, bS.RandomRange)(0, 2 * Math.PI),
          qS = (0, bS.RandomRange)((1 - this.radiusRange) * (1 - this.radiusRange), 1),
          uS = Math.sqrt(qS) * this.radius,
          IS = uS * Math.cos(NS),
          fS = uS * Math.sin(NS);
        XS ? HS.I5(IS, xS, fS) : tS.n.TransformCoordinatesFromFloatsToRef(IS, xS, fS, SS, HS)
      }
      clone() {
        const SS = new xS(this.radius, this.directionRandomizer);
        return XS.d.DeepCopy(this, SS), SS
      }
      applyToShader(SS) {
        SS.setFloat("radius", this.radius), SS.setFloat("height", this.height), SS.setFloat("radiusRange", this.radiusRange), SS.setFloat("directionRandomizer", this.directionRandomizer)
      }
      buildUniformLayout(SS) {
        SS.addUniform("radius", 1), SS.addUniform("height", 1), SS.addUniform("radiusRange", 1), SS.addUniform("directionRandomizer", 1)
      }
      getEffectDefines() {
        return "#define CYLINDEREMITTER"
      }
      getClassName() {
        return "CylinderParticleEmitter"
      }
      serialize() {
        const SS = {};
        return SS.type = this.getClassName(), SS.radius = this.radius, SS.height = this.height, SS.radiusRange = this.radiusRange, SS.directionRandomizer = this.directionRandomizer, SS
      }
      parse(SS) {
        this.radius = SS.radius, this.height = SS.height, this.radiusRange = SS.radiusRange, this.directionRandomizer = SS.directionRandomizer
      }
    }
    class NS extends xS {
      constructor() {
        let SS = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
          HS = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
          gS = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1,
          bS = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : new tS.n(0, 1, 0),
          XS = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : new tS.n(0, 1, 0);
        super(SS, HS, gS), this.direction1 = bS, this.direction2 = XS
      }
      startDirectionFunction(SS, HS, gS, XS) {
        const xS = (0, bS.RandomRange)(this.direction1.x, this.direction2.x),
          NS = (0, bS.RandomRange)(this.direction1.y, this.direction2.y),
          qS = (0, bS.RandomRange)(this.direction1.z, this.direction2.z);
        XS ? HS.I5(xS, NS, qS) : tS.n.TransformNormalFromFloatsToRef(xS, NS, qS, SS, HS)
      }
      clone() {
        const SS = new NS(this.radius, this.height, this.radiusRange, this.direction1, this.direction2);
        return XS.d.DeepCopy(this, SS), SS
      }
      applyToShader(SS) {
        SS.setFloat("radius", this.radius), SS.setFloat("height", this.height), SS.setFloat("radiusRange", this.radiusRange), SS.setVector3("direction1", this.direction1), SS.setVector3("direction2", this.direction2)
      }
      buildUniformLayout(SS) {
        SS.addUniform("radius", 1), SS.addUniform("height", 1), SS.addUniform("radiusRange", 1), SS.addUniform("direction1", 3), SS.addUniform("direction2", 3)
      }
      getEffectDefines() {
        return "#define CYLINDEREMITTER\n#define DIRECTEDCYLINDEREMITTER"
      }
      getClassName() {
        return "CylinderDirectedParticleEmitter"
      }
      serialize() {
        const SS = super.serialize();
        return SS.direction1 = this.direction1.lgS(), SS.direction2 = this.direction2.lgS(), SS
      }
      parse(SS) {
        super.parse(SS), tS.n.FromArrayToRef(SS.direction1, 0, this.direction1), tS.n.FromArrayToRef(SS.direction2, 0, this.direction2)
      }
    }
  },
  38809: (SS, HS, gS) => {
    gS.d(HS, {
      b: () => fS
    });
    const tS = .5 * (Math.sqrt(3) - 1),
      bS = (3 - Math.sqrt(3)) / 6,
      XS = 1 / 3,
      xS = 1 / 6,
      NS = (Math.sqrt(5) - 1) / 4,
      qS = (5 - Math.sqrt(5)) / 20,
      uS = new Float32Array([1, 1, 0, -1, 1, 0, 1, -1, 0, -1, -1, 0, 1, 0, 1, -1, 0, 1, 1, 0, -1, -1, 0, -1, 0, 1, 1, 0, -1, 1, 0, 1, -1, 0, -1, -1]),
      IS = new Float32Array([0, 1, 1, 1, 0, 1, 1, -1, 0, 1, -1, 1, 0, 1, -1, -1, 0, -1, 1, 1, 0, -1, 1, -1, 0, -1, -1, 1, 0, -1, -1, -1, 1, 0, 1, 1, 1, 0, 1, -1, 1, 0, -1, 1, 1, 0, -1, -1, -1, 0, 1, 1, -1, 0, 1, -1, -1, 0, -1, 1, -1, 0, -1, -1, 1, 1, 0, 1, 1, 1, 0, -1, 1, -1, 0, 1, 1, -1, 0, -1, -1, 1, 0, 1, -1, 1, 0, -1, -1, -1, 0, 1, -1, -1, 0, -1, 1, 1, 1, 0, 1, 1, -1, 0, 1, -1, 1, 0, 1, -1, -1, 0, -1, 1, 1, 0, -1, 1, -1, 0, -1, -1, 1, 0, -1, -1, -1, 0]);
    const fS = class {
      constructor() {
        let SS = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Math.random;
        const HS = "function" == typeof SS ? SS : function(SS) {
          let HS = 0,
            gS = 0,
            tS = 0,
            bS = 1;
          const XS = function() {
            let SS = 4022871197;
            return function(HS) {
              HS = HS.toString();
              for (let gS = 0; gS < HS.length; gS++) {
                SS += HS.charCodeAt(gS);
                let tS = .02519603282416938 * SS;
                SS = tS >>> 0, tS -= SS, tS *= SS, SS = tS >>> 0, tS -= SS, SS += 4294967296 * tS
              }
              return 2.3283064365386963e-10 * (SS >>> 0)
            }
          }();
          HS = XS(" "), gS = XS(" "), tS = XS(" "), HS -= XS(SS), HS < 0 && (HS += 1);
          gS -= XS(SS), gS < 0 && (gS += 1);
          tS -= XS(SS), tS < 0 && (tS += 1);
          return function() {
            const SS = 2091639 * HS + 2.3283064365386963e-10 * bS;
            return HS = gS, gS = tS, tS = SS - (bS = 0 | SS)
          }
        }(SS);
        this.p = function(SS) {
          const HS = new Uint8Array(256);
          for (let gS = 0; gS < 256; gS++) HS[gS] = gS;
          for (let gS = 0; gS < 255; gS++) {
            const tS = gS + ~~(SS() * (256 - gS)),
              bS = HS[gS];
            HS[gS] = HS[tS], HS[tS] = bS
          }
          return HS
        }(HS), this.perm = new Uint8Array(512), this.permMod12 = new Uint8Array(512);
        for (let gS = 0; gS < 512; gS++) this.perm[gS] = this.p[255 & gS], this.permMod12[gS] = this.perm[gS] % 12
      }
      noise2D(SS, HS) {
        const gS = this.permMod12,
          XS = this.perm;
        let xS = 0,
          NS = 0,
          qS = 0;
        const IS = (SS + HS) * tS,
          fS = Math.floor(SS + IS),
          kS = Math.floor(HS + IS),
          aS = (fS + kS) * bS,
          KS = SS - (fS - aS),
          jS = HS - (kS - aS);
        let GS, CS;
        KS > jS ? (GS = 1, CS = 0) : (GS = 0, CS = 1);
        const nS = KS - GS + bS,
          PS = jS - CS + bS,
          QS = KS - 1 + 2 * bS,
          DS = jS - 1 + 2 * bS,
          wS = 255 & fS,
          hS = 255 & kS;
        let ZS = .5 - KS * KS - jS * jS;
        if (ZS >= 0) {
          const SS = 3 * gS[wS + XS[hS]];
          ZS *= ZS, xS = ZS * ZS * (uS[SS] * KS + uS[SS + 1] * jS)
        }
        let JS = .5 - nS * nS - PS * PS;
        if (JS >= 0) {
          const SS = 3 * gS[wS + GS + XS[hS + CS]];
          JS *= JS, NS = JS * JS * (uS[SS] * nS + uS[SS + 1] * PS)
        }
        let OS = .5 - QS * QS - DS * DS;
        if (OS >= 0) {
          const SS = 3 * gS[wS + 1 + XS[hS + 1]];
          OS *= OS, qS = OS * OS * (uS[SS] * QS + uS[SS + 1] * DS)
        }
        return 70 * (xS + NS + qS)
      }
      noise3D(SS, HS, gS) {
        const tS = this.permMod12,
          bS = this.perm;
        let NS, qS, IS, fS;
        const kS = (SS + HS + gS) * XS,
          aS = Math.floor(SS + kS),
          KS = Math.floor(HS + kS),
          jS = Math.floor(gS + kS),
          GS = (aS + KS + jS) * xS,
          CS = SS - (aS - GS),
          nS = HS - (KS - GS),
          PS = gS - (jS - GS);
        let QS, DS, wS, hS, ZS, JS;
        CS >= nS ? nS >= PS ? (QS = 1, DS = 0, wS = 0, hS = 1, ZS = 1, JS = 0) : CS >= PS ? (QS = 1, DS = 0, wS = 0, hS = 1, ZS = 0, JS = 1) : (QS = 0, DS = 0, wS = 1, hS = 1, ZS = 0, JS = 1) : nS < PS ? (QS = 0, DS = 0, wS = 1, hS = 0, ZS = 1, JS = 1) : CS < PS ? (QS = 0, DS = 1, wS = 0, hS = 0, ZS = 1, JS = 1) : (QS = 0, DS = 1, wS = 0, hS = 1, ZS = 1, JS = 0);
        const OS = CS - QS + xS,
          dS = nS - DS + xS,
          cS = PS - wS + xS,
          vS = CS - hS + 2 * xS,
          ES = nS - ZS + 2 * xS,
          LS = PS - JS + 2 * xS,
          YS = CS - 1 + .5,
          AS = nS - 1 + .5,
          yS = PS - 1 + .5,
          VS = 255 & aS,
          iS = 255 & KS,
          WS = 255 & jS;
        let zS = .6 - CS * CS - nS * nS - PS * PS;
        if (zS < 0) NS = 0;
        else {
          const SS = 3 * tS[VS + bS[iS + bS[WS]]];
          zS *= zS, NS = zS * zS * (uS[SS] * CS + uS[SS + 1] * nS + uS[SS + 2] * PS)
        }
        let US = .6 - OS * OS - dS * dS - cS * cS;
        if (US < 0) qS = 0;
        else {
          const SS = 3 * tS[VS + QS + bS[iS + DS + bS[WS + wS]]];
          US *= US, qS = US * US * (uS[SS] * OS + uS[SS + 1] * dS + uS[SS + 2] * cS)
        }
        let pS = .6 - vS * vS - ES * ES - LS * LS;
        if (pS < 0) IS = 0;
        else {
          const SS = 3 * tS[VS + hS + bS[iS + ZS + bS[WS + JS]]];
          pS *= pS, IS = pS * pS * (uS[SS] * vS + uS[SS + 1] * ES + uS[SS + 2] * LS)
        }
        let sS = .6 - YS * YS - AS * AS - yS * yS;
        if (sS < 0) fS = 0;
        else {
          const SS = 3 * tS[VS + 1 + bS[iS + 1 + bS[WS + 1]]];
          sS *= sS, fS = sS * sS * (uS[SS] * YS + uS[SS + 1] * AS + uS[SS + 2] * yS)
        }
        return 32 * (NS + qS + IS + fS)
      }
      noise4D(SS, HS, gS, tS) {
        const bS = this.perm;
        let XS, xS, uS, fS, kS;
        const aS = (SS + HS + gS + tS) * NS,
          KS = Math.floor(SS + aS),
          jS = Math.floor(HS + aS),
          GS = Math.floor(gS + aS),
          CS = Math.floor(tS + aS),
          nS = (KS + jS + GS + CS) * qS,
          PS = SS - (KS - nS),
          QS = HS - (jS - nS),
          DS = gS - (GS - nS),
          wS = tS - (CS - nS);
        let hS = 0,
          ZS = 0,
          JS = 0,
          OS = 0;
        PS > QS ? hS++ : ZS++, PS > DS ? hS++ : JS++, PS > wS ? hS++ : OS++, QS > DS ? ZS++ : JS++, QS > wS ? ZS++ : OS++, DS > wS ? JS++ : OS++;
        const dS = hS >= 3 ? 1 : 0,
          cS = ZS >= 3 ? 1 : 0,
          vS = JS >= 3 ? 1 : 0,
          ES = OS >= 3 ? 1 : 0,
          LS = hS >= 2 ? 1 : 0,
          YS = ZS >= 2 ? 1 : 0,
          AS = JS >= 2 ? 1 : 0,
          yS = OS >= 2 ? 1 : 0,
          VS = hS >= 1 ? 1 : 0,
          iS = ZS >= 1 ? 1 : 0,
          WS = JS >= 1 ? 1 : 0,
          zS = OS >= 1 ? 1 : 0,
          US = PS - dS + qS,
          pS = QS - cS + qS,
          sS = DS - vS + qS,
          BS = wS - ES + qS,
          MS = PS - LS + 2 * qS,
          FS = QS - YS + 2 * qS,
          RS = DS - AS + 2 * qS,
          TS = wS - yS + 2 * qS,
          oS = PS - VS + 3 * qS,
          lS = QS - iS + 3 * qS,
          mS = DS - WS + 3 * qS,
          eS = wS - zS + 3 * qS,
          rS = PS - 1 + 4 * qS,
          SH = QS - 1 + 4 * qS,
          HH = DS - 1 + 4 * qS,
          gH = wS - 1 + 4 * qS,
          tH = 255 & KS,
          bH = 255 & jS,
          XH = 255 & GS,
          xH = 255 & CS;
        let NH = .6 - PS * PS - QS * QS - DS * DS - wS * wS;
        if (NH < 0) XS = 0;
        else {
          const SS = bS[tH + bS[bH + bS[XH + bS[xH]]]] % 32 * 4;
          NH *= NH, XS = NH * NH * (IS[SS] * PS + IS[SS + 1] * QS + IS[SS + 2] * DS + IS[SS + 3] * wS)
        }
        let qH = .6 - US * US - pS * pS - sS * sS - BS * BS;
        if (qH < 0) xS = 0;
        else {
          const SS = bS[tH + dS + bS[bH + cS + bS[XH + vS + bS[xH + ES]]]] % 32 * 4;
          qH *= qH, xS = qH * qH * (IS[SS] * US + IS[SS + 1] * pS + IS[SS + 2] * sS + IS[SS + 3] * BS)
        }
        let uH = .6 - MS * MS - FS * FS - RS * RS - TS * TS;
        if (uH < 0) uS = 0;
        else {
          const SS = bS[tH + LS + bS[bH + YS + bS[XH + AS + bS[xH + yS]]]] % 32 * 4;
          uH *= uH, uS = uH * uH * (IS[SS] * MS + IS[SS + 1] * FS + IS[SS + 2] * RS + IS[SS + 3] * TS)
        }
        let IH = .6 - oS * oS - lS * lS - mS * mS - eS * eS;
        if (IH < 0) fS = 0;
        else {
          const SS = bS[tH + VS + bS[bH + iS + bS[XH + WS + bS[xH + zS]]]] % 32 * 4;
          IH *= IH, fS = IH * IH * (IS[SS] * oS + IS[SS + 1] * lS + IS[SS + 2] * mS + IS[SS + 3] * eS)
        }
        let fH = .6 - rS * rS - SH * SH - HH * HH - gH * gH;
        if (fH < 0) kS = 0;
        else {
          const SS = bS[tH + 1 + bS[bH + 1 + bS[XH + 1 + bS[xH + 1]]]] % 32 * 4;
          fH *= fH, kS = fH * fH * (IS[SS] * rS + IS[SS + 1] * SH + IS[SS + 2] * HH + IS[SS + 3] * gH)
        }
        return 27 * (XS + xS + uS + fS + kS)
      }
    }
  }
};
Object.freeze(modules);
for (const SS in modules) Object.freeze(modules[SS]);