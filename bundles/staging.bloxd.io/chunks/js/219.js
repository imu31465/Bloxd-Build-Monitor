/*! For license information please see tz47m9.219.9add5cb2.chunk.js.LICENSE.txt */
export const id = 219;
export const ids = [219];
export const modules = {
  39525: (DD, zD, wD) => {
    DD.exports = sD;
    var pD = wD(358);

    function sD(DD, zD) {
      if (!(this instanceof sD)) return new sD(DD, zD);
      var wD = pD.create();
      pD.add(wD, DD, zD), this.base = pD.min(pD.create(), DD, wD), this.vec = pD.clone(zD), this.max = pD.max(pD.create(), DD, wD), this.mag = pD.length(this.vec)
    }
    var KD = sD.prototype;
    KD.width = function() {
      return this.vec[0]
    }, KD.height = function() {
      return this.vec[1]
    }, KD.depth = function() {
      return this.vec[2]
    }, KD.x0 = function() {
      return this.base[0]
    }, KD.y0 = function() {
      return this.base[1]
    }, KD.z0 = function() {
      return this.base[2]
    }, KD.x1 = function() {
      return this.max[0]
    }, KD.y1 = function() {
      return this.max[1]
    }, KD.z1 = function() {
      return this.max[2]
    }, KD.translate = function(DD) {
      return pD.add(this.max, this.max, DD), pD.add(this.base, this.base, DD), this
    }, KD.setPosition = function(DD) {
      return pD.add(this.max, DD, this.vec), pD.copy(this.base, DD), this
    }, KD.expand = function(DD) {
      var zD = pD.create(),
        wD = pD.create();
      return pD.max(zD, DD.max, this.max), pD.min(wD, DD.base, this.base), pD.subtract(zD, zD, wD), new sD(wD, zD)
    }, KD.intersects = function(DD) {
      return !(DD.base[0] > this.max[0]) && (!(DD.base[1] > this.max[1]) && (!(DD.base[2] > this.max[2]) && (!(DD.max[0] < this.base[0]) && (!(DD.max[1] < this.base[1]) && !(DD.max[2] < this.base[2])))))
    }, KD.touches = function(DD) {
      var zD = this.union(DD);
      return null !== zD && (0 == zD.width() || 0 == zD.height() || 0 == zD.depth())
    }, KD.union = function(DD) {
      if (!this.intersects(DD)) return null;
      var zD = Math.max(DD.base[0], this.base[0]),
        wD = Math.max(DD.base[1], this.base[1]),
        pD = Math.max(DD.base[2], this.base[2]);
      return new sD([zD, wD, pD], [Math.min(DD.max[0], this.max[0]) - zD, Math.min(DD.max[1], this.max[1]) - wD, Math.min(DD.max[2], this.max[2]) - pD])
    }
  },
  39516: DD => {
    DD.exports = function(DD, zD, wD, pD, sD, KD) {
      var rD = +zD[0],
        LD = +zD[1],
        cD = +zD[2],
        gD = +wD[0],
        RD = +wD[1],
        AD = +wD[2],
        UD = Math.sqrt(gD * gD + RD * RD + AD * AD);
      if (0 === UD) throw new Error("Can't raycast along a zero vector");
      return function(DD, zD, wD, pD, sD, KD, rD, LD, cD, gD) {
        for (var RD = 0, AD = Math.floor, UD = 0 | AD(zD), fD = 0 | AD(wD), ID = 0 | AD(pD), BD = sD > 0 ? 1 : -1, GD = KD > 0 ? 1 : -1, hD = rD > 0 ? 1 : -1, nD = Math.abs(1 / sD), MD = Math.abs(1 / KD), OD = Math.abs(1 / rD), JD = nD < 1 / 0 ? nD * (BD > 0 ? UD + 1 - zD : zD - UD) : 1 / 0, ED = MD < 1 / 0 ? MD * (GD > 0 ? fD + 1 - wD : wD - fD) : 1 / 0, QD = OD < 1 / 0 ? OD * (hD > 0 ? ID + 1 - pD : pD - ID) : 1 / 0, XD = -1; RD <= LD;) {
          var VD = DD(UD, fD, ID);
          if (VD) return cD && (cD[0] = zD + RD * sD, cD[1] = wD + RD * KD, cD[2] = pD + RD * rD), gD && (gD[0] = gD[1] = gD[2] = 0, 0 === XD && (gD[0] = -BD), 1 === XD && (gD[1] = -GD), 2 === XD && (gD[2] = -hD)), VD;
          JD < ED ? JD < QD ? (UD += BD, RD = JD, JD += nD, XD = 0) : (ID += hD, RD = QD, QD += OD, XD = 2) : ED < QD ? (fD += GD, RD = ED, ED += MD, XD = 1) : (ID += hD, RD = QD, QD += OD, XD = 2)
        }
        return cD && (cD[0] = zD + RD * sD, cD[1] = wD + RD * KD, cD[2] = pD + RD * rD), gD && (gD[0] = gD[1] = gD[2] = 0), 0
      }(DD, rD, LD, cD, gD /= UD, RD /= UD, AD /= UD, pD = "undefined" === typeof pD ? 64 : +pD, sD, KD)
    }
  },
  39083: (DD, zD, wD) => {
    wD.d(zD, {
      b: () => LD,
      d: () => KD
    });
    var pD = wD(4107);
    let sD = null;

    function KD(DD) {
      return null !== sD && DD === sD
    }

    function rD() {
      this.Dv = !1, this.stopPropagation = !1, this.Av = !1, this.disabled = !1
    }
    class LD {
      constructor(DD, zD) {
        this.version = "0.7.0";
        var wD = Object.assign({}, new rD, zD || {});
        this.element = DD || document, this.Dv = !!wD.Dv, this.stopPropagation = !!wD.stopPropagation, this.Av = !!wD.Av, this.disabled = !!wD.disabled, this.filterEvents = (DD, zD) => !0, this.ignoreEvent = DD => !1, this.down = new pD.EventEmitter, this.up = new pD.EventEmitter, this.state = {}, this.Fv = {
          dx: 0,
          dy: 0,
          IzD: 0,
          BzD: 0,
          GzD: 0
        }, this.pressCount = {}, this.releaseCount = {}, this._keyBindmap = {}, this._keyStates = {}, this._bindPressCount = {}, this._touches = {
          lastX: 0,
          lastY: 0,
          currID: null
        }, "loading" !== document.readyState ? gD(this) : document.addEventListener("DOMContentLoaded", (DD => {
          gD(this)
        }), {
          once: !0
        })
      }
      bind(DD) {
        for (var zD = arguments.length, wD = new Array(zD > 1 ? zD - 1 : 0), pD = 1; pD < zD; pD++) wD[pD - 1] = arguments[pD];
        wD.forEach((zD => {
          var wD = this._keyBindmap[zD] || [];
          wD.includes(DD) || (wD.push(DD), this._keyBindmap[zD] = wD)
        })), this.state[DD] = !!this.state[DD], this.pressCount[DD] = this.pressCount[DD] || 0, this.releaseCount[DD] = this.releaseCount[DD] || 0
      }
      unbind(DD) {
        for (var zD in this._keyBindmap) {
          var wD = this._keyBindmap[zD],
            pD = wD.indexOf(DD);
          pD > -1 && wD.splice(pD, 1)
        }
      }
      getBindings() {
        var DD = {};
        for (var zD in this._keyBindmap) {
          this._keyBindmap[zD].forEach((wD => {
            DD[wD] = DD[wD] || [], DD[wD].push(zD)
          }))
        }
        return DD
      }
      DU() {
        cD(this.Fv), cD(this.pressCount), cD(this.releaseCount)
      }
    }

    function cD(DD) {
      for (var zD in DD) DD[zD] = 0
    }

    function gD(DD) {
      window.addEventListener("keydown", GD.bind(null, DD, !0), !1), window.addEventListener("keyup", GD.bind(null, DD, !1), !1);
      var zD = {
        passive: !0
      };
      DD.element.addEventListener("touchstart", fD.bind(void 0, DD), {
        passive: !1
      }), DD.element.addEventListener("touchend", BD.bind(void 0, DD), zD), DD.element.addEventListener("mousedown", hD.bind(null, DD, !0), zD), window.document.addEventListener("mouseup", hD.bind(null, DD, !1), zD), DD.element.addEventListener("touchmove", nD.bind(null, DD), zD), DD.element.addEventListener("mousemove", nD.bind(null, DD), zD), window.PointerEvent, DD.element.addEventListener("wheel", MD.bind(null, DD), zD), DD.element.addEventListener("contextmenu", OD.bind(null, DD), !1), window.addEventListener("blur", QD.bind(null, DD), !1)
    }
    var RD = 0,
      AD = 0,
      UD = null;

    function fD(DD, zD) {
      zD.preventDefault(), ID(zD)
    }

    function ID(DD) {
      let zD = !1;
      for (let wD = 0; wD < DD.touches.length; ++wD)
        if (DD.touches[wD].identifier === UD) {
          zD = !0;
          break
        } if (!zD) {
        const zD = DD.changedTouches[0];
        RD = zD.clientX, AD = zD.clientY, UD = zD.identifier
      }
    }

    function BD(DD, zD) {
      for (var wD = zD.changedTouches, pD = 0; pD < wD.length; ++pD) wD[pD].identifier === UD && (UD = null)
    }

    function GD(DD, zD, wD) {
      if (!DD.ignoreEvent(wD)) try {
        XD(DD, wD), zD && wD.isTrusted && !wD.repeat && DD._keyStates[wD.code] && VD(DD, wD.code)
      } finally {
        PD(wD.code, zD, DD, wD)
      }
    }

    function hD(DD, zD, wD) {
      if (!DD.ignoreEvent(wD)) try {
        XD(DD, wD)
      } finally {
        ! function(DD, zD, wD) {
          if ("pointerId" in wD)
            if (zD) {
              if (null !== DD._touches.currID) return;
              DD._touches.currID = wD.pointerId
            } else {
              if (DD._touches.currID !== wD.pointerId) return;
              DD._touches.currID = null
            } var pD = "button" in wD ? wD.button + 1 : 1;
          PD("Mouse" + pD, zD, DD, wD)
        }(DD, zD, wD)
      }
    }

    function nD(DD, zD) {
      var wD = zD.movementX || zD.mozMovementX || 0,
        pD = zD.movementY || zD.mozMovementY || 0;
      if (zD.touches && 0 === (wD | pD)) {
        var sD = function(DD) {
          ID(DD);
          for (let zD = 0; zD < DD.changedTouches.length; ++zD)
            if (DD.changedTouches[zD].identifier == UD) {
              const wD = DD.changedTouches[zD],
                pD = [wD.clientX - RD, wD.clientY - AD];
              return RD = wD.clientX, AD = wD.clientY, pD
            } return console.error(`Did not find touch id ${UD}`), [0, 0]
        }(zD);
        wD = sD[0], pD = sD[1]
      }
      DD.Fv.dx += wD, DD.Fv.dy += pD
    }

    function MD(DD, zD) {
      XD(DD, zD);
      var wD = 1;
      switch (zD.deltaMode) {
        case 0:
          wD = 1;
          break;
        case 1:
          wD = 12;
          break;
        case 2:
          wD = DD.element.clientHeight || window.innerHeight
      }
      DD.Fv.IzD += (zD.deltaX || 0) * wD, DD.Fv.BzD += (zD.deltaY || 0) * wD, DD.Fv.GzD += (zD.deltaZ || 0) * wD
    }

    function OD(DD, zD) {
      if (!DD.Av) return zD.preventDefault(), !1
    }
    var JD = {
      AltLeft: "altKey",
      AltRight: "altKey",
      ControlLeft: "ctrlKey",
      ControlRight: "ctrlKey",
      ShiftLeft: "shiftKey",
      ShiftRight: "shiftKey",
      MetaLeft: "metaKey",
      MetaRight: "metaKey"
    };

    function ED(DD, zD) {
      return !!DD[JD[zD]] || ("AltRight" === zD || "ControlLeft" === zD) && "function" === typeof DD.getModifierState && !0 === DD.getModifierState("AltGraph")
    }

    function QD(DD, zD) {
      for (var wD in DD._modifiersHeldThroughBlur = {}, JD) DD._keyStates[wD] && (DD._modifiersHeldThroughBlur[wD] = !0);
      zD && zD.isTrusted && function() {
        try {
          return window.self !== window.top
        } catch (DD) {
          return !0
        }
      }() && (clearTimeout(DD._blurRelease), DD._blurRelease = setTimeout((function() {
        if (!document.hasFocus())
          for (var zD in DD._modifiersHeldThroughBlur = {}, DD._keyStates) DD._keyStates[zD] && !/^Mouse\d/.test(zD) && VD(DD, zD)
      }), 0))
    }

    function XD(DD, zD) {
      var wD = DD._modifiersHeldThroughBlur;
      if (wD && zD.isTrusted && document.hasFocus())
        for (var pD in wD) delete wD[pD], DD._keyStates[pD] && pD !== zD.code && (ED(zD, pD) || VD(DD, pD))
    }

    function VD(DD, zD) {
      const wD = {
          code: zD,
          preventDefault: () => {},
          stopPropagation: () => {}
        },
        pD = sD;
      sD = wD;
      try {
        PD(zD, !1, DD, wD)
      } finally {
        sD = pD
      }
    }

    function PD(DD, zD, wD, pD) {
      var sD = wD._keyBindmap[DD];
      sD && (CD(wD._keyStates[DD], zD) && (wD._keyStates[DD] = zD, sD.forEach((DD => {
        (!wD.filterEvents || wD.filterEvents(pD, DD)) && function(DD, zD, wD, pD) {
          var sD = zD ? wD.pressCount : wD.releaseCount;
          sD[DD] = (sD[DD] || 0) + 1;
          var KD = wD._bindPressCount[DD] || 0;
          (KD += zD ? 1 : -1) < 0 && (KD = 0);
          wD._bindPressCount[DD] = KD;
          var rD = wD.state[DD];
          if (CD(rD, KD)) {
            wD.state[DD] = KD > 0;
            var LD = zD ? wD.down : wD.up;
            wD.disabled || LD.emit(DD, pD)
          }
        }(DD, zD, wD, pD)
      }))), "button" in pD || (wD.Dv && !pD.defaultPrevented && pD.preventDefault(), wD.stopPropagation && pD.stopPropagation()))
    }

    function CD(DD, zD) {
      return DD ? !zD : zD
    }
  },
  36533: (DD, zD) => {
    function wD(DD) {
      if (DD && "object" === typeof DD) {
        var zD = DD.which || DD.keyCode || DD.charCode;
        zD && (DD = zD)
      }
      if ("number" === typeof DD) return rD[DD];
      var wD, KD = String(DD);
      return (wD = pD[KD.toLowerCase()]) ? wD : (wD = sD[KD.toLowerCase()]) || (1 === KD.length ? KD.charCodeAt(0) : void 0)
    }
    wD.isEventKey = function(DD, zD) {
      if (DD && "object" === typeof DD) {
        var wD = DD.which || DD.keyCode || DD.charCode;
        if (null === wD || void 0 === wD) return !1;
        if ("string" === typeof zD) {
          var KD;
          if (KD = pD[zD.toLowerCase()]) return KD === wD;
          if (KD = sD[zD.toLowerCase()]) return KD === wD
        } else if ("number" === typeof zD) return zD === wD;
        return !1
      }
    };
    var pD = (zD = DD.exports = wD).code = zD.codes = {
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
      sD = zD.aliases = {
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
    for (KD = 97; KD < 123; KD++) pD[String.fromCharCode(KD)] = KD - 32;
    for (var KD = 48; KD < 58; KD++) pD[KD - 48] = KD;
    for (KD = 1; KD < 13; KD++) pD["f" + KD] = KD + 111;
    for (KD = 0; KD < 10; KD++) pD["numpad " + KD] = KD + 96;
    var rD = zD.names = zD.title = {};
    for (KD in pD) rD[pD[KD]] = KD;
    for (var LD in sD) pD[LD] = sD[LD]
  },
  39505: (DD, zD, wD) => {
    wD.d(zD, {
      d: () => pD
    });
    class pD {
      constructor() {
        let DD = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
          zD = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 10;
        this.aN = !1, this.vN = !1, this.Rl = 30, this.yN = 0, this.FN = 100, this.NG = !1, this.fullscreen = !1, this.QJ = function(DD) {}, this.qN = function(DD, zD, wD) {}, this.RZ = function() {}, this.GJ = function() {}, this.wZ = function() {}, this.onFullscreenChanged = function() {}, this.onPointerLockError = function(DD) {}, this._data = new sD(zD),
          function(DD) {
            if ("loading" === document.readyState) {
              var zD = () => {
                document.removeEventListener("readystatechange", zD), DD()
              };
              document.addEventListener("readystatechange", zD)
            } else setTimeout(DD, 0)
          }((() => {
            ! function(DD) {
              var zD = DD._data,
                wD = zD.nowObject.now();
              zD.lastTickStarted = wD, zD.lastFrameStarted = wD, zD.lastRenderStarted = wD, zD.frameCB = () => function(DD) {
                var zD = DD._data;
                requestAnimationFrame(zD.frameCB), LD(DD);
                var wD = zD.nowObject.now(),
                  pD = wD - zD.lastFrameStarted;
                if (zD.lastFrameStarted = wD, DD.yN > 0) {
                  zD.renderAccum += pD;
                  var sD = 1e3 / DD.yN;
                  if (zD.renderAccum < sD) return;
                  zD.renderAccum -= sD, zD.renderAccum > sD && (zD.renderAccum = sD)
                }
                var KD = wD - zD.lastRenderStarted;
                zD.lastRenderStarted = wD;
                var rD = 1e3 / DD.Rl,
                  cD = (wD - zD.lastTickStarted) / rD;
                cD < 0 && (cD = 0);
                DD.qN(KD, cD, rD), setTimeout(LD, 0, DD, !0)
              }(DD), zD.intervalCB = () => LD(DD), requestAnimationFrame(zD.frameCB), zD.pollTime > 0 && (zD.intervalID = setInterval(zD.intervalCB, Math.max(zD.pollTime, 1e3 / DD.Rl / 2)))
            }(this),
            function(DD, zD) {
              if (!zD) return;
              var wD = !1,
                pD = !1,
                sD = DD => {
                  if (!!DD !== (wD = zD === document.pointerLockElement))
                    if (DD) {
                      var pD = zD.requestPointerLock();
                      pD && pD.catch && pD.catch((DD => {}))
                    } else document.exitPointerLock()
                },
                KD = DD => {
                  !!DD !== (pD = zD === document.fullscreenElement) && (DD ? zD.requestFullscreen ? zD.requestFullscreen() : zD.webkitRequestFullscreen && zD.webkitRequestFullscreen() : document.exitFullscreen ? document.exitFullscreen() : document.webkitExitFullscreen && document.webkitExitFullscreen())
                };
              document.addEventListener("pointerlockchange", (pD => {
                wD = zD === document.pointerLockElement, DD.wZ(wD)
              })), document.addEventListener("fullscreenchange", (wD => {
                pD = zD === document.fullscreenElement, DD.onFullscreenChanged(pD)
              })), document.addEventListener("pointerlockerror", (pD => {
                wD = zD === document.pointerLockElement, DD.onPointerLockError(pD)
              })), Object.defineProperty(DD, "NG", {
                get: () => wD,
                set: sD
              }), Object.defineProperty(DD, "fullscreen", {
                get: () => pD,
                set: KD
              }), zD.addEventListener("click", (zD => {
                DD.aN && sD(!0), DD.vN && KD(!0)
              }));
              var rD = () => DD.GJ();
              if (window.ResizeObserver) {
                new ResizeObserver(rD).observe(zD)
              } else window.addEventListener("resize", rD)
            }(this, DD), this.RZ()
          }))
      }
    }

    function sD() {
      let DD = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 10;
      this.nowObject = performance || Date, this.pollTime = DD, this.renderAccum = 0, this.lastTickStarted = 0, this.lastFrameStarted = 0, this.lastRenderStarted = 0, this.avgTickTime = 2, this.frameCB = null, this.intervalCB = null, this.intervalID = -1
    }
    var KD = 3,
      rD = 20;

    function LD(DD) {
      for (var zD = DD._data, wD = 1e3 / DD.Rl, pD = zD.nowObject.now() + rD, sD = 0; zD.nowObject.now() >= zD.lastTickStarted + wD && zD.nowObject.now() < pD && ++sD <= KD;) DD.QJ(wD), zD.lastTickStarted += wD;
      var LD = 5 * (wD + 5),
        cD = zD.nowObject.now();
      if (cD - zD.lastTickStarted > LD)
        for (; cD >= zD.lastTickStarted + wD;) zD.lastTickStarted += wD
    }
  },
  36667: (DD, zD, wD) => {
    wD.d(zD, {
      c: () => rD
    });
    var pD = wD(58);
    const sD = pD.useLayoutEffect;
    const KD = function(DD) {
      var zD = (0, pD.useRef)(DD);
      return sD((function() {
        zD.current = DD
      })), zD
    };
    var rD = function(DD) {
      var zD = KD(DD);
      (0, pD.useEffect)((function() {
        var DD = function(DD) {
          var wD;
          if (null != zD.current && (wD = zD.current(DD)), DD.defaultPrevented && (DD.returnValue = ""), "string" === typeof wD) return DD.returnValue = wD, wD
        };
        return window.addEventListener("beforeunload", DD),
          function() {
            window.removeEventListener("beforeunload", DD)
          }
      }), [])
    }
  },
  36572: DD => {
    var zD, wD = "undefined" !== typeof window ? window.navigator.userAgent : "",
      pD = /OS X/.test(wD),
      sD = /Opera/.test(wD),
      KD = !/like Gecko/.test(wD) && !sD,
      rD = DD.exports = {
        0: pD ? "<menu>" : "<UNK>",
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
        93: pD ? "<meta>" : "<menu>",
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
        173: pD && KD ? "-" : "<volume-mute>",
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
        231: sD ? "`" : "<unicode>",
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
    for (zD = 58; zD < 65; ++zD) rD[zD] = String.fromCharCode(zD);
    for (zD = 48; zD < 58; ++zD) rD[zD] = zD - 48 + "";
    for (zD = 65; zD < 91; ++zD) rD[zD] = String.fromCharCode(zD);
    for (zD = 96; zD < 106; ++zD) rD[zD] = "<num-" + (zD - 96) + ">";
    for (zD = 112; zD < 136; ++zD) rD[zD] = "F" + (zD - 111)
  },
  38950: (DD, zD, wD) => {
    function pD(DD, zD, wD, pD, sD) {
      var KD = {};
      return Object.keys(pD).forEach((function(DD) {
        KD[DD] = pD[DD]
      })), KD.enumerable = !!KD.enumerable, KD.configurable = !!KD.configurable, ("value" in KD || KD.initializer) && (KD.writable = !0), KD = wD.slice().reverse().reduce((function(wD, pD) {
        return pD(DD, zD, wD) || wD
      }), KD), sD && void 0 !== KD.initializer && (KD.value = KD.initializer ? KD.initializer.call(sD) : void 0, KD.initializer = void 0), void 0 === KD.initializer && (Object.defineProperty(DD, zD, KD), KD = null), KD
    }
    wD.d(zD, {
      d: () => pD
    })
  },
  38941: (DD, zD, wD) => {
    function pD(DD, zD, wD, pD) {
      wD && Object.defineProperty(DD, zD, {
        enumerable: wD.enumerable,
        configurable: wD.configurable,
        writable: wD.writable,
        value: wD.initializer ? wD.initializer.call(pD) : void 0
      })
    }
    wD.d(zD, {
      c: () => pD
    })
  },
  38658: (DD, zD, wD) => {
    wD.d(zD, {
      e: () => KD
    });
    var pD = wD(38662);
    const sD = (DD, zD, wD) => DD ? DD.getClassName && "Mesh" === DD.getClassName() ? null : !DD.getClassName || "SubMesh" !== DD.getClassName() && "PhysicsBody" !== DD.getClassName() ? DD.clone ? DD.clone() : Array.isArray(DD) ? DD.slice() : wD && "object" === typeof DD ? {
      ...DD
    } : null : DD.clone(zD) : null;
    class KD {
      static DeepCopy(DD, zD, wD, KD) {
        let rD = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
        const LD = function(DD) {
          const zD = [];
          do {
            const wD = Object.getOwnPropertyNames(DD);
            for (const DD of wD) - 1 === zD.indexOf(DD) && zD.push(DD)
          } while (DD = Object.getPrototypeOf(DD));
          return zD
        }(DD);
        for (const gD of LD) {
          if ("_" === gD[0] && (!KD || -1 === KD.indexOf(gD))) continue;
          if (gD.endsWith("Observable")) continue;
          if (wD && -1 !== wD.indexOf(gD)) continue;
          const LD = DD[gD],
            RD = typeof LD;
          if ("function" !== RD) try {
            if ("object" === RD)
              if (LD instanceof Uint8Array) zD[gD] = Uint8Array.from(LD);
              else if (LD instanceof Array) {
              if (zD[gD] = [], LD.length > 0)
                if ("object" == typeof LD[0])
                  for (let DD = 0; DD < LD.length; DD++) {
                    const wD = sD(LD[DD], zD, rD); - 1 === zD[gD].indexOf(wD) && zD[gD].push(wD)
                  } else zD[gD] = LD.slice(0)
            } else zD[gD] = sD(LD, zD, rD);
            else zD[gD] = LD
          } catch (cD) {
            pD.d.Warn(cD.message)
          }
        }
      }
    }
  },
  38689: (DD, zD, wD) => {
    wD.d(zD, {
      d: () => sD,
      h: () => KD,
      k: () => rD,
      l: () => LD
    });
    var pD = wD(37273);
    class sD {
      constructor(DD, zD, wD) {
        this.gradient = DD, this.color1 = zD, this.color2 = wD
      }
      getColorToRef(DD) {
        this.color2 ? pD.h.LerpToRef(this.color1, this.color2, Math.random(), DD) : DD.pC(this.color1)
      }
    }
    class KD {
      constructor(DD, zD) {
        this.gradient = DD, this.color = zD
      }
    }
    class rD {
      constructor(DD, zD, wD) {
        this.gradient = DD, this.factor1 = zD, this.factor2 = wD
      }
      getFactor() {
        return void 0 === this.factor2 || this.factor2 === this.factor1 ? this.factor1 : this.factor1 + (this.factor2 - this.factor1) * Math.random()
      }
    }
    class LD {
      static GetCurrentGradient(DD, zD, wD) {
        if (zD[0].gradient > DD) return void wD(zD[0], zD[0], 1);
        for (let sD = 0; sD < zD.length - 1; sD++) {
          const pD = zD[sD],
            KD = zD[sD + 1];
          if (DD >= pD.gradient && DD <= KD.gradient) {
            return void wD(pD, KD, (DD - pD.gradient) / (KD.gradient - pD.gradient))
          }
        }
        const pD = zD.length - 1;
        wD(zD[pD], zD[pD], 1)
      }
    }
  },
  38662: (DD, zD, wD) => {
    wD.d(zD, {
      d: () => pD
    });
    class pD {
      static _CheckLimit(DD, zD) {
        let wD = pD._LogLimitOutputs[DD];
        return wD ? wD.current++ : (wD = {
          limit: zD,
          current: 1
        }, pD._LogLimitOutputs[DD] = wD), wD.current <= wD.limit
      }
      static _GenerateLimitMessage(DD) {
        let zD = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
        const wD = pD._LogLimitOutputs[DD];
        if (!wD || !pD.MessageLimitReached) return;
        const sD = this._Levels[zD];
        wD.current === wD.limit && pD[sD.name](pD.MessageLimitReached.replace(/%LIMIT%/g, "" + wD.limit).replace(/%TYPE%/g, sD.name ?? ""))
      }
      static _AddLogEntry(DD) {
        pD._LogCache = DD + pD._LogCache, pD.OnNewCacheEntry && pD.OnNewCacheEntry(DD)
      }
      static _FormatMessage(DD) {
        const zD = DD => DD < 10 ? "0" + DD : "" + DD,
          wD = new Date;
        return "[" + zD(wD.getHours()) + ":" + zD(wD.getMinutes()) + ":" + zD(wD.getSeconds()) + "]: " + DD
      }
      static _LogDisabled(DD, zD) {}
      static _LogEnabled() {
        let DD = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
          zD = arguments.length > 1 ? arguments[1] : void 0,
          wD = arguments.length > 2 ? arguments[2] : void 0;
        const sD = Array.isArray(zD) ? zD[0] : zD;
        if (void 0 !== wD && !pD._CheckLimit(sD, wD)) return;
        const KD = pD._FormatMessage(sD),
          rD = this._Levels[DD],
          LD = Array.isArray(zD) ? zD.slice(1) : [];
        rD.logFunc && rD.logFunc("BJS - " + KD, ...LD);
        const cD = `<div style='color:${rD.color}'>${KD}</div><br>`;
        pD._AddLogEntry(cD), pD._GenerateLimitMessage(sD, DD)
      }
      static get LogCache() {
        return pD._LogCache
      }
      static ClearLogCache() {
        pD._LogCache = "", pD._LogLimitOutputs = {}, pD.errorsCount = 0
      }
      static set LogLevels(DD) {
        pD.Log = pD._LogDisabled, pD.Warn = pD._LogDisabled, pD.Error = pD._LogDisabled;
        const zD = [pD.MessageLogLevel, pD.WarningLogLevel, pD.ErrorLogLevel];
        for (const wD of zD)
          if ((DD & wD) === wD) {
            const DD = this._Levels[wD];
            pD[DD.name] = pD._LogEnabled.bind(pD, wD)
          }
      }
    }
    pD.NoneLogLevel = 0, pD.MessageLogLevel = 1, pD.WarningLogLevel = 2, pD.ErrorLogLevel = 4, pD.AllLogLevel = 7, pD.MessageLimitReached = "Too many %TYPE%s (%LIMIT%), no more %TYPE%s will be reported for this message.", pD._LogCache = "", pD._LogLimitOutputs = {}, pD._Levels = [{}, {
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
    }], pD.errorsCount = 0, pD.Log = pD._LogEnabled.bind(pD, pD.MessageLogLevel), pD.Warn = pD._LogEnabled.bind(pD, pD.WarningLogLevel), pD.Error = pD._LogEnabled.bind(pD, pD.ErrorLogLevel)
  },
  38692: (DD, zD, wD) => {
    wD.d(zD, {
      e: () => rD
    });
    var pD = wD(37079),
      sD = wD(37125),
      KD = wD(38658);
    class rD {
      constructor() {
        this.direction1 = new pD.s(0, 1, 0), this.direction2 = new pD.s(0, 1, 0), this.minEmitBox = new pD.s(-.5, -.5, -.5), this.maxEmitBox = new pD.s(.5, .5, .5)
      }
      startDirectionFunction(DD, zD, wD, KD) {
        const rD = (0, sD.RandomRange)(this.direction1.x, this.direction2.x),
          LD = (0, sD.RandomRange)(this.direction1.y, this.direction2.y),
          cD = (0, sD.RandomRange)(this.direction1.z, this.direction2.z);
        if (KD) return zD.x = rD, zD.y = LD, void(zD.z = cD);
        pD.s.TransformNormalFromFloatsToRef(rD, LD, cD, DD, zD)
      }
      startPositionFunction(DD, zD, wD, KD) {
        const rD = (0, sD.RandomRange)(this.minEmitBox.x, this.maxEmitBox.x),
          LD = (0, sD.RandomRange)(this.minEmitBox.y, this.maxEmitBox.y),
          cD = (0, sD.RandomRange)(this.minEmitBox.z, this.maxEmitBox.z);
        if (KD) return zD.x = rD, zD.y = LD, void(zD.z = cD);
        pD.s.TransformCoordinatesFromFloatsToRef(rD, LD, cD, DD, zD)
      }
      clone() {
        const DD = new rD;
        return KD.e.DeepCopy(this, DD), DD
      }
      applyToShader(DD) {
        DD.setVector3("direction1", this.direction1), DD.setVector3("direction2", this.direction2), DD.setVector3("minEmitBox", this.minEmitBox), DD.setVector3("maxEmitBox", this.maxEmitBox)
      }
      buildUniformLayout(DD) {
        DD.addUniform("direction1", 3), DD.addUniform("direction2", 3), DD.addUniform("minEmitBox", 3), DD.addUniform("maxEmitBox", 3)
      }
      getEffectDefines() {
        return "#define BOXEMITTER"
      }
      getClassName() {
        return "BoxParticleEmitter"
      }
      serialize() {
        const DD = {};
        return DD.type = this.getClassName(), DD.direction1 = this.direction1.QpD(), DD.direction2 = this.direction2.QpD(), DD.minEmitBox = this.minEmitBox.QpD(), DD.maxEmitBox = this.maxEmitBox.QpD(), DD
      }
      parse(DD) {
        pD.s.FromArrayToRef(DD.direction1, 0, this.direction1), pD.s.FromArrayToRef(DD.direction2, 0, this.direction2), pD.s.FromArrayToRef(DD.minEmitBox, 0, this.minEmitBox), pD.s.FromArrayToRef(DD.maxEmitBox, 0, this.maxEmitBox)
      }
    }
  },
  38651: (DD, zD, wD) => {
    wD.d(zD, {
      d: () => LD,
      f: () => rD
    });
    var pD = wD(37079),
      sD = wD(37125),
      KD = wD(38658);
    class rD {
      constructor() {
        let DD = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
          zD = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
          wD = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1,
          sD = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
        this.radius = DD, this.height = zD, this.radiusRange = wD, this.directionRandomizer = sD, this._tempVector = pD.s.Zero()
      }
      startDirectionFunction(DD, zD, wD, KD, rD) {
        wD.position.subtractToRef(DD.getTranslation(), this._tempVector), this._tempVector.normalize(), pD.s.TransformNormalToRef(this._tempVector, rD, this._tempVector);
        const LD = (0, sD.RandomRange)(-this.directionRandomizer / 2, this.directionRandomizer / 2);
        let cD = Math.atan2(this._tempVector.x, this._tempVector.z);
        cD += (0, sD.RandomRange)(-Math.PI / 2, Math.PI / 2) * this.directionRandomizer, this._tempVector.y = LD, this._tempVector.x = Math.sin(cD), this._tempVector.z = Math.cos(cD), this._tempVector.normalize(), KD ? zD.pC(this._tempVector) : pD.s.TransformNormalFromFloatsToRef(this._tempVector.x, this._tempVector.y, this._tempVector.z, DD, zD)
      }
      startPositionFunction(DD, zD, wD, KD) {
        const rD = (0, sD.RandomRange)(-this.height / 2, this.height / 2),
          LD = (0, sD.RandomRange)(0, 2 * Math.PI),
          cD = (0, sD.RandomRange)((1 - this.radiusRange) * (1 - this.radiusRange), 1),
          gD = Math.sqrt(cD) * this.radius,
          RD = gD * Math.cos(LD),
          AD = gD * Math.sin(LD);
        KD ? zD.Z2(RD, rD, AD) : pD.s.TransformCoordinatesFromFloatsToRef(RD, rD, AD, DD, zD)
      }
      clone() {
        const DD = new rD(this.radius, this.directionRandomizer);
        return KD.e.DeepCopy(this, DD), DD
      }
      applyToShader(DD) {
        DD.setFloat("radius", this.radius), DD.setFloat("height", this.height), DD.setFloat("radiusRange", this.radiusRange), DD.setFloat("directionRandomizer", this.directionRandomizer)
      }
      buildUniformLayout(DD) {
        DD.addUniform("radius", 1), DD.addUniform("height", 1), DD.addUniform("radiusRange", 1), DD.addUniform("directionRandomizer", 1)
      }
      getEffectDefines() {
        return "#define CYLINDEREMITTER"
      }
      getClassName() {
        return "CylinderParticleEmitter"
      }
      serialize() {
        const DD = {};
        return DD.type = this.getClassName(), DD.radius = this.radius, DD.height = this.height, DD.radiusRange = this.radiusRange, DD.directionRandomizer = this.directionRandomizer, DD
      }
      parse(DD) {
        this.radius = DD.radius, this.height = DD.height, this.radiusRange = DD.radiusRange, this.directionRandomizer = DD.directionRandomizer
      }
    }
    class LD extends rD {
      constructor() {
        let DD = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
          zD = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
          wD = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1,
          sD = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : new pD.s(0, 1, 0),
          KD = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : new pD.s(0, 1, 0);
        super(DD, zD, wD), this.direction1 = sD, this.direction2 = KD
      }
      startDirectionFunction(DD, zD, wD, KD) {
        const rD = (0, sD.RandomRange)(this.direction1.x, this.direction2.x),
          LD = (0, sD.RandomRange)(this.direction1.y, this.direction2.y),
          cD = (0, sD.RandomRange)(this.direction1.z, this.direction2.z);
        KD ? zD.Z2(rD, LD, cD) : pD.s.TransformNormalFromFloatsToRef(rD, LD, cD, DD, zD)
      }
      clone() {
        const DD = new LD(this.radius, this.height, this.radiusRange, this.direction1, this.direction2);
        return KD.e.DeepCopy(this, DD), DD
      }
      applyToShader(DD) {
        DD.setFloat("radius", this.radius), DD.setFloat("height", this.height), DD.setFloat("radiusRange", this.radiusRange), DD.setVector3("direction1", this.direction1), DD.setVector3("direction2", this.direction2)
      }
      buildUniformLayout(DD) {
        DD.addUniform("radius", 1), DD.addUniform("height", 1), DD.addUniform("radiusRange", 1), DD.addUniform("direction1", 3), DD.addUniform("direction2", 3)
      }
      getEffectDefines() {
        return "#define CYLINDEREMITTER\n#define DIRECTEDCYLINDEREMITTER"
      }
      getClassName() {
        return "CylinderDirectedParticleEmitter"
      }
      serialize() {
        const DD = super.serialize();
        return DD.direction1 = this.direction1.QpD(), DD.direction2 = this.direction2.QpD(), DD
      }
      parse(DD) {
        super.parse(DD), pD.s.FromArrayToRef(DD.direction1, 0, this.direction1), pD.s.FromArrayToRef(DD.direction2, 0, this.direction2)
      }
    }
  },
  38757: (DD, zD, wD) => {
    wD.d(zD, {
      d: () => AD
    });
    const pD = .5 * (Math.sqrt(3) - 1),
      sD = (3 - Math.sqrt(3)) / 6,
      KD = 1 / 3,
      rD = 1 / 6,
      LD = (Math.sqrt(5) - 1) / 4,
      cD = (5 - Math.sqrt(5)) / 20,
      gD = new Float32Array([1, 1, 0, -1, 1, 0, 1, -1, 0, -1, -1, 0, 1, 0, 1, -1, 0, 1, 1, 0, -1, -1, 0, -1, 0, 1, 1, 0, -1, 1, 0, 1, -1, 0, -1, -1]),
      RD = new Float32Array([0, 1, 1, 1, 0, 1, 1, -1, 0, 1, -1, 1, 0, 1, -1, -1, 0, -1, 1, 1, 0, -1, 1, -1, 0, -1, -1, 1, 0, -1, -1, -1, 1, 0, 1, 1, 1, 0, 1, -1, 1, 0, -1, 1, 1, 0, -1, -1, -1, 0, 1, 1, -1, 0, 1, -1, -1, 0, -1, 1, -1, 0, -1, -1, 1, 1, 0, 1, 1, 1, 0, -1, 1, -1, 0, 1, 1, -1, 0, -1, -1, 1, 0, 1, -1, 1, 0, -1, -1, -1, 0, 1, -1, -1, 0, -1, 1, 1, 1, 0, 1, 1, -1, 0, 1, -1, 1, 0, 1, -1, -1, 0, -1, 1, 1, 0, -1, 1, -1, 0, -1, -1, 1, 0, -1, -1, -1, 0]);
    const AD = class {
      constructor() {
        let DD = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Math.random;
        const zD = "function" == typeof DD ? DD : function(DD) {
          let zD = 0,
            wD = 0,
            pD = 0,
            sD = 1;
          const KD = function() {
            let DD = 4022871197;
            return function(zD) {
              zD = zD.toString();
              for (let wD = 0; wD < zD.length; wD++) {
                DD += zD.charCodeAt(wD);
                let pD = .02519603282416938 * DD;
                DD = pD >>> 0, pD -= DD, pD *= DD, DD = pD >>> 0, pD -= DD, DD += 4294967296 * pD
              }
              return 2.3283064365386963e-10 * (DD >>> 0)
            }
          }();
          zD = KD(" "), wD = KD(" "), pD = KD(" "), zD -= KD(DD), zD < 0 && (zD += 1);
          wD -= KD(DD), wD < 0 && (wD += 1);
          pD -= KD(DD), pD < 0 && (pD += 1);
          return function() {
            const DD = 2091639 * zD + 2.3283064365386963e-10 * sD;
            return zD = wD, wD = pD, pD = DD - (sD = 0 | DD)
          }
        }(DD);
        this.p = function(DD) {
          const zD = new Uint8Array(256);
          for (let wD = 0; wD < 256; wD++) zD[wD] = wD;
          for (let wD = 0; wD < 255; wD++) {
            const pD = wD + ~~(DD() * (256 - wD)),
              sD = zD[wD];
            zD[wD] = zD[pD], zD[pD] = sD
          }
          return zD
        }(zD), this.perm = new Uint8Array(512), this.permMod12 = new Uint8Array(512);
        for (let wD = 0; wD < 512; wD++) this.perm[wD] = this.p[255 & wD], this.permMod12[wD] = this.perm[wD] % 12
      }
      noise2D(DD, zD) {
        const wD = this.permMod12,
          KD = this.perm;
        let rD = 0,
          LD = 0,
          cD = 0;
        const RD = (DD + zD) * pD,
          AD = Math.floor(DD + RD),
          UD = Math.floor(zD + RD),
          fD = (AD + UD) * sD,
          ID = DD - (AD - fD),
          BD = zD - (UD - fD);
        let GD, hD;
        ID > BD ? (GD = 1, hD = 0) : (GD = 0, hD = 1);
        const nD = ID - GD + sD,
          MD = BD - hD + sD,
          OD = ID - 1 + 2 * sD,
          JD = BD - 1 + 2 * sD,
          ED = 255 & AD,
          QD = 255 & UD;
        let XD = .5 - ID * ID - BD * BD;
        if (XD >= 0) {
          const DD = 3 * wD[ED + KD[QD]];
          XD *= XD, rD = XD * XD * (gD[DD] * ID + gD[DD + 1] * BD)
        }
        let VD = .5 - nD * nD - MD * MD;
        if (VD >= 0) {
          const DD = 3 * wD[ED + GD + KD[QD + hD]];
          VD *= VD, LD = VD * VD * (gD[DD] * nD + gD[DD + 1] * MD)
        }
        let PD = .5 - OD * OD - JD * JD;
        if (PD >= 0) {
          const DD = 3 * wD[ED + 1 + KD[QD + 1]];
          PD *= PD, cD = PD * PD * (gD[DD] * OD + gD[DD + 1] * JD)
        }
        return 70 * (rD + LD + cD)
      }
      noise3D(DD, zD, wD) {
        const pD = this.permMod12,
          sD = this.perm;
        let LD, cD, RD, AD;
        const UD = (DD + zD + wD) * KD,
          fD = Math.floor(DD + UD),
          ID = Math.floor(zD + UD),
          BD = Math.floor(wD + UD),
          GD = (fD + ID + BD) * rD,
          hD = DD - (fD - GD),
          nD = zD - (ID - GD),
          MD = wD - (BD - GD);
        let OD, JD, ED, QD, XD, VD;
        hD >= nD ? nD >= MD ? (OD = 1, JD = 0, ED = 0, QD = 1, XD = 1, VD = 0) : hD >= MD ? (OD = 1, JD = 0, ED = 0, QD = 1, XD = 0, VD = 1) : (OD = 0, JD = 0, ED = 1, QD = 1, XD = 0, VD = 1) : nD < MD ? (OD = 0, JD = 0, ED = 1, QD = 0, XD = 1, VD = 1) : hD < MD ? (OD = 0, JD = 1, ED = 0, QD = 0, XD = 1, VD = 1) : (OD = 0, JD = 1, ED = 0, QD = 1, XD = 1, VD = 0);
        const PD = hD - OD + rD,
          CD = nD - JD + rD,
          xD = MD - ED + rD,
          TD = hD - QD + 2 * rD,
          bD = nD - XD + 2 * rD,
          jD = MD - VD + 2 * rD,
          dD = hD - 1 + .5,
          SD = nD - 1 + .5,
          iD = MD - 1 + .5,
          lD = 255 & fD,
          WD = 255 & ID,
          ND = 255 & BD;
        let ZD = .6 - hD * hD - nD * nD - MD * MD;
        if (ZD < 0) LD = 0;
        else {
          const DD = 3 * pD[lD + sD[WD + sD[ND]]];
          ZD *= ZD, LD = ZD * ZD * (gD[DD] * hD + gD[DD + 1] * nD + gD[DD + 2] * MD)
        }
        let yD = .6 - PD * PD - CD * CD - xD * xD;
        if (yD < 0) cD = 0;
        else {
          const DD = 3 * pD[lD + OD + sD[WD + JD + sD[ND + ED]]];
          yD *= yD, cD = yD * yD * (gD[DD] * PD + gD[DD + 1] * CD + gD[DD + 2] * xD)
        }
        let kD = .6 - TD * TD - bD * bD - jD * jD;
        if (kD < 0) RD = 0;
        else {
          const DD = 3 * pD[lD + QD + sD[WD + XD + sD[ND + VD]]];
          kD *= kD, RD = kD * kD * (gD[DD] * TD + gD[DD + 1] * bD + gD[DD + 2] * jD)
        }
        let mD = .6 - dD * dD - SD * SD - iD * iD;
        if (mD < 0) AD = 0;
        else {
          const DD = 3 * pD[lD + 1 + sD[WD + 1 + sD[ND + 1]]];
          mD *= mD, AD = mD * mD * (gD[DD] * dD + gD[DD + 1] * SD + gD[DD + 2] * iD)
        }
        return 32 * (LD + cD + RD + AD)
      }
      noise4D(DD, zD, wD, pD) {
        const sD = this.perm;
        let KD, rD, gD, AD, UD;
        const fD = (DD + zD + wD + pD) * LD,
          ID = Math.floor(DD + fD),
          BD = Math.floor(zD + fD),
          GD = Math.floor(wD + fD),
          hD = Math.floor(pD + fD),
          nD = (ID + BD + GD + hD) * cD,
          MD = DD - (ID - nD),
          OD = zD - (BD - nD),
          JD = wD - (GD - nD),
          ED = pD - (hD - nD);
        let QD = 0,
          XD = 0,
          VD = 0,
          PD = 0;
        MD > OD ? QD++ : XD++, MD > JD ? QD++ : VD++, MD > ED ? QD++ : PD++, OD > JD ? XD++ : VD++, OD > ED ? XD++ : PD++, JD > ED ? VD++ : PD++;
        const CD = QD >= 3 ? 1 : 0,
          xD = XD >= 3 ? 1 : 0,
          TD = VD >= 3 ? 1 : 0,
          bD = PD >= 3 ? 1 : 0,
          jD = QD >= 2 ? 1 : 0,
          dD = XD >= 2 ? 1 : 0,
          SD = VD >= 2 ? 1 : 0,
          iD = PD >= 2 ? 1 : 0,
          lD = QD >= 1 ? 1 : 0,
          WD = XD >= 1 ? 1 : 0,
          ND = VD >= 1 ? 1 : 0,
          ZD = PD >= 1 ? 1 : 0,
          yD = MD - CD + cD,
          kD = OD - xD + cD,
          mD = JD - TD + cD,
          eD = ED - bD + cD,
          oD = MD - jD + 2 * cD,
          aD = OD - dD + 2 * cD,
          uD = JD - SD + 2 * cD,
          vD = ED - iD + 2 * cD,
          tD = MD - lD + 3 * cD,
          FD = OD - WD + 3 * cD,
          YD = JD - ND + 3 * cD,
          HD = ED - ZD + 3 * cD,
          qD = MD - 1 + 4 * cD,
          Dz = OD - 1 + 4 * cD,
          zz = JD - 1 + 4 * cD,
          wz = ED - 1 + 4 * cD,
          pz = 255 & ID,
          sz = 255 & BD,
          Kz = 255 & GD,
          rz = 255 & hD;
        let Lz = .6 - MD * MD - OD * OD - JD * JD - ED * ED;
        if (Lz < 0) KD = 0;
        else {
          const DD = sD[pz + sD[sz + sD[Kz + sD[rz]]]] % 32 * 4;
          Lz *= Lz, KD = Lz * Lz * (RD[DD] * MD + RD[DD + 1] * OD + RD[DD + 2] * JD + RD[DD + 3] * ED)
        }
        let cz = .6 - yD * yD - kD * kD - mD * mD - eD * eD;
        if (cz < 0) rD = 0;
        else {
          const DD = sD[pz + CD + sD[sz + xD + sD[Kz + TD + sD[rz + bD]]]] % 32 * 4;
          cz *= cz, rD = cz * cz * (RD[DD] * yD + RD[DD + 1] * kD + RD[DD + 2] * mD + RD[DD + 3] * eD)
        }
        let gz = .6 - oD * oD - aD * aD - uD * uD - vD * vD;
        if (gz < 0) gD = 0;
        else {
          const DD = sD[pz + jD + sD[sz + dD + sD[Kz + SD + sD[rz + iD]]]] % 32 * 4;
          gz *= gz, gD = gz * gz * (RD[DD] * oD + RD[DD + 1] * aD + RD[DD + 2] * uD + RD[DD + 3] * vD)
        }
        let Rz = .6 - tD * tD - FD * FD - YD * YD - HD * HD;
        if (Rz < 0) AD = 0;
        else {
          const DD = sD[pz + lD + sD[sz + WD + sD[Kz + ND + sD[rz + ZD]]]] % 32 * 4;
          Rz *= Rz, AD = Rz * Rz * (RD[DD] * tD + RD[DD + 1] * FD + RD[DD + 2] * YD + RD[DD + 3] * HD)
        }
        let Az = .6 - qD * qD - Dz * Dz - zz * zz - wz * wz;
        if (Az < 0) UD = 0;
        else {
          const DD = sD[pz + 1 + sD[sz + 1 + sD[Kz + 1 + sD[rz + 1]]]] % 32 * 4;
          Az *= Az, UD = Az * Az * (RD[DD] * qD + RD[DD + 1] * Dz + RD[DD + 2] * zz + RD[DD + 3] * wz)
        }
        return 27 * (KD + rD + gD + AD + UD)
      }
    }
  }
};
Object.freeze(modules);
for (const DD in modules) Object.freeze(modules[DD]);