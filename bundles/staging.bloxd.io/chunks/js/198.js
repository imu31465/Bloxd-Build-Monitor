/*! For license information please see l9xvfg.198.47eed0fe.chunk.js.LICENSE.txt */
export const id = 198;
export const ids = [198];
export const modules = {
  38475: (BB, TB, dB) => {
    BB.exports = yB;
    var VB = dB(287);

    function yB(BB, TB) {
      if (!(this instanceof yB)) return new yB(BB, TB);
      var dB = VB.create();
      VB.add(dB, BB, TB), this.base = VB.min(VB.create(), BB, dB), this.vec = VB.clone(TB), this.max = VB.max(VB.create(), BB, dB), this.mag = VB.length(this.vec)
    }
    var pB = yB.prototype;
    pB.width = function() {
      return this.vec[0]
    }, pB.height = function() {
      return this.vec[1]
    }, pB.depth = function() {
      return this.vec[2]
    }, pB.x0 = function() {
      return this.base[0]
    }, pB.y0 = function() {
      return this.base[1]
    }, pB.z0 = function() {
      return this.base[2]
    }, pB.x1 = function() {
      return this.max[0]
    }, pB.y1 = function() {
      return this.max[1]
    }, pB.z1 = function() {
      return this.max[2]
    }, pB.translate = function(BB) {
      return VB.add(this.max, this.max, BB), VB.add(this.base, this.base, BB), this
    }, pB.setPosition = function(BB) {
      return VB.add(this.max, BB, this.vec), VB.copy(this.base, BB), this
    }, pB.expand = function(BB) {
      var TB = VB.create(),
        dB = VB.create();
      return VB.max(TB, BB.max, this.max), VB.min(dB, BB.base, this.base), VB.subtract(TB, TB, dB), new yB(dB, TB)
    }, pB.intersects = function(BB) {
      return !(BB.base[0] > this.max[0]) && (!(BB.base[1] > this.max[1]) && (!(BB.base[2] > this.max[2]) && (!(BB.max[0] < this.base[0]) && (!(BB.max[1] < this.base[1]) && !(BB.max[2] < this.base[2])))))
    }, pB.touches = function(BB) {
      var TB = this.union(BB);
      return null !== TB && (0 == TB.width() || 0 == TB.height() || 0 == TB.depth())
    }, pB.union = function(BB) {
      if (!this.intersects(BB)) return null;
      var TB = Math.max(BB.base[0], this.base[0]),
        dB = Math.max(BB.base[1], this.base[1]),
        VB = Math.max(BB.base[2], this.base[2]);
      return new yB([TB, dB, VB], [Math.min(BB.max[0], this.max[0]) - TB, Math.min(BB.max[1], this.max[1]) - dB, Math.min(BB.max[2], this.max[2]) - VB])
    }
  },
  35692: BB => {
    BB.exports = function BB(TB, dB) {
      if (TB === dB) return !0;
      if (TB && dB && "object" == typeof TB && "object" == typeof dB) {
        if (TB.constructor !== dB.constructor) return !1;
        var VB, yB, pB;
        if (Array.isArray(TB)) {
          if ((VB = TB.length) != dB.length) return !1;
          for (yB = VB; 0 !== yB--;)
            if (!BB(TB[yB], dB[yB])) return !1;
          return !0
        }
        if (TB.constructor === RegExp) return TB.source === dB.source && TB.flags === dB.flags;
        if (TB.valueOf !== Object.prototype.valueOf) return TB.valueOf() === dB.valueOf();
        if (TB.toString !== Object.prototype.toString) return TB.toString() === dB.toString();
        if ((VB = (pB = Object.keys(TB)).length) !== Object.keys(dB).length) return !1;
        for (yB = VB; 0 !== yB--;)
          if (!Object.prototype.hasOwnProperty.call(dB, pB[yB])) return !1;
        for (yB = VB; 0 !== yB--;) {
          var lB = pB[yB];
          if (!BB(TB[lB], dB[lB])) return !1
        }
        return !0
      }
      return TB !== TB && dB !== dB
    }
  },
  38470: BB => {
    BB.exports = function(BB, TB, dB, VB, yB, pB) {
      var lB = +TB[0],
        JB = +TB[1],
        YB = +TB[2],
        gB = +dB[0],
        oB = +dB[1],
        kB = +dB[2],
        LB = Math.sqrt(gB * gB + oB * oB + kB * kB);
      if (0 === LB) throw new Error("Can't raycast along a zero vector");
      return function(BB, TB, dB, VB, yB, pB, lB, JB, YB, gB) {
        for (var oB = 0, kB = Math.floor, LB = 0 | kB(TB), OB = 0 | kB(dB), DB = 0 | kB(VB), uB = yB > 0 ? 1 : -1, HB = pB > 0 ? 1 : -1, EB = lB > 0 ? 1 : -1, vB = Math.abs(1 / yB), mB = Math.abs(1 / pB), iB = Math.abs(1 / lB), NB = vB < 1 / 0 ? vB * (uB > 0 ? LB + 1 - TB : TB - LB) : 1 / 0, tB = mB < 1 / 0 ? mB * (HB > 0 ? OB + 1 - dB : dB - OB) : 1 / 0, fB = iB < 1 / 0 ? iB * (EB > 0 ? DB + 1 - VB : VB - DB) : 1 / 0, sB = -1; oB <= JB;) {
          var MB = BB(LB, OB, DB);
          if (MB) return YB && (YB[0] = TB + oB * yB, YB[1] = dB + oB * pB, YB[2] = VB + oB * lB), gB && (gB[0] = gB[1] = gB[2] = 0, 0 === sB && (gB[0] = -uB), 1 === sB && (gB[1] = -HB), 2 === sB && (gB[2] = -EB)), MB;
          NB < tB ? NB < fB ? (LB += uB, oB = NB, NB += vB, sB = 0) : (DB += EB, oB = fB, fB += iB, sB = 2) : tB < fB ? (OB += HB, oB = tB, tB += mB, sB = 1) : (DB += EB, oB = fB, fB += iB, sB = 2)
        }
        return YB && (YB[0] = TB + oB * yB, YB[1] = dB + oB * pB, YB[2] = VB + oB * lB), gB && (gB[0] = gB[1] = gB[2] = 0), 0
      }(BB, lB, JB, YB, gB /= LB, oB /= LB, kB /= LB, VB = "undefined" === typeof VB ? 64 : +VB, yB, pB)
    }
  },
  38049: (BB, TB, dB) => {
    dB.d(TB, {
      e: () => JB,
      h: () => pB
    });
    var VB = dB(3579);
    let yB = null;

    function pB(BB) {
      return null !== yB && BB === yB
    }

    function lB() {
      this.YC = !1, this.stopPropagation = !1, this.gC = !1, this.disabled = !1
    }
    class JB {
      constructor(BB, TB) {
        this.version = "0.7.0";
        var dB = Object.assign({}, new lB, TB || {});
        this.element = BB || document, this.YC = !!dB.YC, this.stopPropagation = !!dB.stopPropagation, this.gC = !!dB.gC, this.disabled = !!dB.disabled, this.filterEvents = (BB, TB) => !0, this.down = new VB.EventEmitter, this.up = new VB.EventEmitter, this.state = {}, this.mC = {
          dx: 0,
          dy: 0,
          fTB: 0,
          sTB: 0,
          MTB: 0
        }, this.pressCount = {}, this.releaseCount = {}, this._keyBindmap = {}, this._keyStates = {}, this._bindPressCount = {}, this._touches = {
          lastX: 0,
          lastY: 0,
          currID: null
        }, "loading" !== document.readyState ? gB(this) : document.addEventListener("DOMContentLoaded", (BB => {
          gB(this)
        }), {
          once: !0
        })
      }
      bind(BB) {
        for (var TB = arguments.length, dB = new Array(TB > 1 ? TB - 1 : 0), VB = 1; VB < TB; VB++) dB[VB - 1] = arguments[VB];
        dB.forEach((TB => {
          var dB = this._keyBindmap[TB] || [];
          dB.includes(BB) || (dB.push(BB), this._keyBindmap[TB] = dB)
        })), this.state[BB] = !!this.state[BB], this.pressCount[BB] = this.pressCount[BB] || 0, this.releaseCount[BB] = this.releaseCount[BB] || 0
      }
      unbind(BB) {
        for (var TB in this._keyBindmap) {
          var dB = this._keyBindmap[TB],
            VB = dB.indexOf(BB);
          VB > -1 && dB.splice(VB, 1)
        }
      }
      getBindings() {
        var BB = {};
        for (var TB in this._keyBindmap) {
          this._keyBindmap[TB].forEach((dB => {
            BB[dB] = BB[dB] || [], BB[dB].push(TB)
          }))
        }
        return BB
      }
      dL() {
        YB(this.mC), YB(this.pressCount), YB(this.releaseCount)
      }
    }

    function YB(BB) {
      for (var TB in BB) BB[TB] = 0
    }

    function gB(BB) {
      window.addEventListener("keydown", HB.bind(null, BB, !0), !1), window.addEventListener("keyup", HB.bind(null, BB, !1), !1);
      var TB = {
        passive: !0
      };
      BB.element.addEventListener("touchstart", OB.bind(void 0, BB), {
        passive: !1
      }), BB.element.addEventListener("touchend", uB.bind(void 0, BB), TB), BB.element.addEventListener("mousedown", EB.bind(null, BB, !0), TB), window.document.addEventListener("mouseup", EB.bind(null, BB, !1), TB), BB.element.addEventListener("touchmove", vB.bind(null, BB), TB), BB.element.addEventListener("mousemove", vB.bind(null, BB), TB), window.PointerEvent, BB.element.addEventListener("wheel", mB.bind(null, BB), TB), BB.element.addEventListener("contextmenu", iB.bind(null, BB), !1), window.addEventListener("blur", fB.bind(null, BB), !1)
    }
    var oB = 0,
      kB = 0,
      LB = null;

    function OB(BB, TB) {
      TB.preventDefault(), DB(TB)
    }

    function DB(BB) {
      let TB = !1;
      for (let dB = 0; dB < BB.touches.length; ++dB)
        if (BB.touches[dB].identifier === LB) {
          TB = !0;
          break
        } if (!TB) {
        const TB = BB.changedTouches[0];
        oB = TB.clientX, kB = TB.clientY, LB = TB.identifier
      }
    }

    function uB(BB, TB) {
      for (var dB = TB.changedTouches, VB = 0; VB < dB.length; ++VB) dB[VB].identifier === LB && (LB = null)
    }

    function HB(BB, TB, dB) {
      try {
        sB(BB, dB), TB && dB.isTrusted && !dB.repeat && BB._keyStates[dB.code] && MB(BB, dB.code)
      } finally {
        zB(dB.code, TB, BB, dB)
      }
    }

    function EB(BB, TB, dB) {
      try {
        sB(BB, dB)
      } finally {
        ! function(BB, TB, dB) {
          if ("pointerId" in dB)
            if (TB) {
              if (null !== BB._touches.currID) return;
              BB._touches.currID = dB.pointerId
            } else {
              if (BB._touches.currID !== dB.pointerId) return;
              BB._touches.currID = null
            } var VB = "button" in dB ? dB.button + 1 : 1;
          zB("Mouse" + VB, TB, BB, dB)
        }(BB, TB, dB)
      }
    }

    function vB(BB, TB) {
      var dB = TB.movementX || TB.mozMovementX || 0,
        VB = TB.movementY || TB.mozMovementY || 0;
      if (TB.touches && 0 === (dB | VB)) {
        var yB = function(BB) {
          DB(BB);
          for (let TB = 0; TB < BB.changedTouches.length; ++TB)
            if (BB.changedTouches[TB].identifier == LB) {
              const dB = BB.changedTouches[TB],
                VB = [dB.clientX - oB, dB.clientY - kB];
              return oB = dB.clientX, kB = dB.clientY, VB
            } return console.error(`Did not find touch id ${LB}`), [0, 0]
        }(TB);
        dB = yB[0], VB = yB[1]
      }
      BB.mC.dx += dB, BB.mC.dy += VB
    }

    function mB(BB, TB) {
      sB(BB, TB);
      var dB = 1;
      switch (TB.deltaMode) {
        case 0:
          dB = 1;
          break;
        case 1:
          dB = 12;
          break;
        case 2:
          dB = BB.element.clientHeight || window.innerHeight
      }
      BB.mC.fTB += (TB.deltaX || 0) * dB, BB.mC.sTB += (TB.deltaY || 0) * dB, BB.mC.MTB += (TB.deltaZ || 0) * dB
    }

    function iB(BB, TB) {
      if (!BB.gC) return TB.preventDefault(), !1
    }
    var NB = {
      AltLeft: "altKey",
      AltRight: "altKey",
      ControlLeft: "ctrlKey",
      ControlRight: "ctrlKey",
      ShiftLeft: "shiftKey",
      ShiftRight: "shiftKey",
      MetaLeft: "metaKey",
      MetaRight: "metaKey"
    };

    function tB(BB, TB) {
      return !!BB[NB[TB]] || ("AltRight" === TB || "ControlLeft" === TB) && "function" === typeof BB.getModifierState && !0 === BB.getModifierState("AltGraph")
    }

    function fB(BB, TB) {
      for (var dB in BB._modifiersHeldThroughBlur = {}, NB) BB._keyStates[dB] && (BB._modifiersHeldThroughBlur[dB] = !0);
      TB && TB.isTrusted && function() {
        try {
          return window.self !== window.top
        } catch (BB) {
          return !0
        }
      }() && (clearTimeout(BB._blurRelease), BB._blurRelease = setTimeout((function() {
        if (!document.hasFocus())
          for (var TB in BB._modifiersHeldThroughBlur = {}, BB._keyStates) BB._keyStates[TB] && !/^Mouse\d/.test(TB) && MB(BB, TB)
      }), 0))
    }

    function sB(BB, TB) {
      var dB = BB._modifiersHeldThroughBlur;
      if (dB && TB.isTrusted && document.hasFocus())
        for (var VB in dB) delete dB[VB], BB._keyStates[VB] && VB !== TB.code && (tB(TB, VB) || MB(BB, VB))
    }

    function MB(BB, TB) {
      const dB = {
          code: TB,
          preventDefault: () => {},
          stopPropagation: () => {}
        },
        VB = yB;
      yB = dB;
      try {
        zB(TB, !1, BB, dB)
      } finally {
        yB = VB
      }
    }

    function zB(BB, TB, dB, VB) {
      var yB = dB._keyBindmap[BB];
      yB && (wB(dB._keyStates[BB], TB) && (dB._keyStates[BB] = TB, yB.forEach((BB => {
        (!dB.filterEvents || dB.filterEvents(VB, BB)) && function(BB, TB, dB, VB) {
          var yB = TB ? dB.pressCount : dB.releaseCount;
          yB[BB] = (yB[BB] || 0) + 1;
          var pB = dB._bindPressCount[BB] || 0;
          (pB += TB ? 1 : -1) < 0 && (pB = 0);
          dB._bindPressCount[BB] = pB;
          var lB = dB.state[BB];
          if (wB(lB, pB)) {
            dB.state[BB] = pB > 0;
            var JB = TB ? dB.down : dB.up;
            dB.disabled || JB.emit(BB, VB)
          }
        }(BB, TB, dB, VB)
      }))), "button" in VB || (dB.YC && !VB.defaultPrevented && VB.preventDefault(), dB.stopPropagation && VB.stopPropagation()))
    }

    function wB(BB, TB) {
      return BB ? !TB : TB
    }
  },
  35542: (BB, TB) => {
    function dB(BB) {
      if (BB && "object" === typeof BB) {
        var TB = BB.which || BB.keyCode || BB.charCode;
        TB && (BB = TB)
      }
      if ("number" === typeof BB) return lB[BB];
      var dB, pB = String(BB);
      return (dB = VB[pB.toLowerCase()]) ? dB : (dB = yB[pB.toLowerCase()]) || (1 === pB.length ? pB.charCodeAt(0) : void 0)
    }
    dB.isEventKey = function(BB, TB) {
      if (BB && "object" === typeof BB) {
        var dB = BB.which || BB.keyCode || BB.charCode;
        if (null === dB || void 0 === dB) return !1;
        if ("string" === typeof TB) {
          var pB;
          if (pB = VB[TB.toLowerCase()]) return pB === dB;
          if (pB = yB[TB.toLowerCase()]) return pB === dB
        } else if ("number" === typeof TB) return TB === dB;
        return !1
      }
    };
    var VB = (TB = BB.exports = dB).code = TB.codes = {
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
      yB = TB.aliases = {
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
    for (pB = 97; pB < 123; pB++) VB[String.fromCharCode(pB)] = pB - 32;
    for (var pB = 48; pB < 58; pB++) VB[pB - 48] = pB;
    for (pB = 1; pB < 13; pB++) VB["f" + pB] = pB + 111;
    for (pB = 0; pB < 10; pB++) VB["numpad " + pB] = pB + 96;
    var lB = TB.names = TB.title = {};
    for (pB in VB) lB[VB[pB]] = pB;
    for (var JB in yB) VB[JB] = yB[JB]
  },
  38459: (BB, TB, dB) => {
    dB.d(TB, {
      e: () => VB
    });
    class VB {
      constructor() {
        let BB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
          TB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 10;
        this.mI = !1, this.MI = !1, this.WU = 30, this.pI = 0, this.ZI = 100, this.fH = !1, this.fullscreen = !1, this.WE = function(BB) {}, this.qI = function(BB, TB, dB) {}, this.kS = function() {}, this.qE = function() {}, this.xI = function() {}, this.onFullscreenChanged = function() {}, this.onPointerLockError = function(BB) {}, this._data = new yB(TB),
          function(BB) {
            if ("loading" === document.readyState) {
              var TB = () => {
                document.removeEventListener("readystatechange", TB), BB()
              };
              document.addEventListener("readystatechange", TB)
            } else setTimeout(BB, 0)
          }((() => {
            ! function(BB) {
              var TB = BB._data,
                dB = TB.nowObject.now();
              TB.lastTickStarted = dB, TB.lastFrameStarted = dB, TB.lastRenderStarted = dB, TB.frameCB = () => function(BB) {
                var TB = BB._data;
                requestAnimationFrame(TB.frameCB), JB(BB);
                var dB = TB.nowObject.now(),
                  VB = dB - TB.lastFrameStarted;
                if (TB.lastFrameStarted = dB, BB.pI > 0) {
                  TB.renderAccum += VB;
                  var yB = 1e3 / BB.pI;
                  if (TB.renderAccum < yB) return;
                  TB.renderAccum -= yB, TB.renderAccum > yB && (TB.renderAccum = yB)
                }
                var pB = dB - TB.lastRenderStarted;
                TB.lastRenderStarted = dB;
                var lB = 1e3 / BB.WU,
                  YB = (dB - TB.lastTickStarted) / lB;
                YB < 0 && (YB = 0);
                BB.qI(pB, YB, lB), setTimeout(JB, 0, BB, !0)
              }(BB), TB.intervalCB = () => JB(BB), requestAnimationFrame(TB.frameCB), TB.pollTime > 0 && (TB.intervalID = setInterval(TB.intervalCB, Math.max(TB.pollTime, 1e3 / BB.WU / 2)))
            }(this),
            function(BB, TB) {
              if (!TB) return;
              var dB = !1,
                VB = !1,
                yB = BB => {
                  if (!!BB !== (dB = TB === document.pointerLockElement))
                    if (BB) {
                      var VB = TB.requestPointerLock();
                      VB && VB.catch && VB.catch((BB => {}))
                    } else document.exitPointerLock()
                },
                pB = BB => {
                  !!BB !== (VB = TB === document.fullscreenElement) && (BB ? TB.requestFullscreen ? TB.requestFullscreen() : TB.webkitRequestFullscreen && TB.webkitRequestFullscreen() : document.exitFullscreen ? document.exitFullscreen() : document.webkitExitFullscreen && document.webkitExitFullscreen())
                };
              document.addEventListener("pointerlockchange", (VB => {
                dB = TB === document.pointerLockElement, BB.xI(dB)
              })), document.addEventListener("fullscreenchange", (dB => {
                VB = TB === document.fullscreenElement, BB.onFullscreenChanged(VB)
              })), document.addEventListener("pointerlockerror", (VB => {
                dB = TB === document.pointerLockElement, BB.onPointerLockError(VB)
              })), Object.defineProperty(BB, "fH", {
                get: () => dB,
                set: yB
              }), Object.defineProperty(BB, "fullscreen", {
                get: () => VB,
                set: pB
              }), TB.addEventListener("click", (TB => {
                BB.mI && yB(!0), BB.MI && pB(!0)
              }));
              var lB = () => BB.qE();
              if (window.ResizeObserver) {
                new ResizeObserver(lB).observe(TB)
              } else window.addEventListener("resize", lB)
            }(this, BB), this.kS()
          }))
      }
    }

    function yB() {
      let BB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 10;
      this.nowObject = performance || Date, this.pollTime = BB, this.renderAccum = 0, this.lastTickStarted = 0, this.lastFrameStarted = 0, this.lastRenderStarted = 0, this.avgTickTime = 2, this.frameCB = null, this.intervalCB = null, this.intervalID = -1
    }
    var pB = 3,
      lB = 20;

    function JB(BB) {
      for (var TB = BB._data, dB = 1e3 / BB.WU, VB = TB.nowObject.now() + lB, yB = 0; TB.nowObject.now() >= TB.lastTickStarted + dB && TB.nowObject.now() < VB && ++yB <= pB;) BB.WE(dB), TB.lastTickStarted += dB;
      var JB = 5 * (dB + 5),
        YB = TB.nowObject.now();
      if (YB - TB.lastTickStarted > JB)
        for (; YB >= TB.lastTickStarted + dB;) TB.lastTickStarted += dB
    }
  },
  35713: (BB, TB, dB) => {
    dB.d(TB, {
      b: () => lB
    });
    var VB = dB(62);
    const yB = VB.useLayoutEffect;
    const pB = function(BB) {
      var TB = (0, VB.useRef)(BB);
      return yB((function() {
        TB.current = BB
      })), TB
    };
    var lB = function(BB) {
      var TB = pB(BB);
      (0, VB.useEffect)((function() {
        var BB = function(BB) {
          var dB;
          if (null != TB.current && (dB = TB.current(BB)), BB.defaultPrevented && (BB.returnValue = ""), "string" === typeof dB) return BB.returnValue = dB, dB
        };
        return window.addEventListener("beforeunload", BB),
          function() {
            window.removeEventListener("beforeunload", BB)
          }
      }), [])
    }
  },
  35571: BB => {
    var TB, dB = "undefined" !== typeof window ? window.navigator.userAgent : "",
      VB = /OS X/.test(dB),
      yB = /Opera/.test(dB),
      pB = !/like Gecko/.test(dB) && !yB,
      lB = BB.exports = {
        0: VB ? "<menu>" : "<UNK>",
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
        93: VB ? "<meta>" : "<menu>",
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
        173: VB && pB ? "-" : "<volume-mute>",
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
        231: yB ? "`" : "<unicode>",
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
    for (TB = 58; TB < 65; ++TB) lB[TB] = String.fromCharCode(TB);
    for (TB = 48; TB < 58; ++TB) lB[TB] = TB - 48 + "";
    for (TB = 65; TB < 91; ++TB) lB[TB] = String.fromCharCode(TB);
    for (TB = 96; TB < 106; ++TB) lB[TB] = "<num-" + (TB - 96) + ">";
    for (TB = 112; TB < 136; ++TB) lB[TB] = "F" + (TB - 111)
  },
  37979: (BB, TB, dB) => {
    function VB(BB, TB, dB, VB, yB) {
      var pB = {};
      return Object.keys(VB).forEach((function(BB) {
        pB[BB] = VB[BB]
      })), pB.enumerable = !!pB.enumerable, pB.configurable = !!pB.configurable, ("value" in pB || pB.initializer) && (pB.writable = !0), pB = dB.slice().reverse().reduce((function(dB, VB) {
        return VB(BB, TB, dB) || dB
      }), pB), yB && void 0 !== pB.initializer && (pB.value = pB.initializer ? pB.initializer.call(yB) : void 0, pB.initializer = void 0), void 0 === pB.initializer && (Object.defineProperty(BB, TB, pB), pB = null), pB
    }
    dB.d(TB, {
      c: () => VB
    })
  },
  37976: (BB, TB, dB) => {
    function VB(BB, TB, dB, VB) {
      dB && Object.defineProperty(BB, TB, {
        enumerable: dB.enumerable,
        configurable: dB.configurable,
        writable: dB.writable,
        value: dB.initializer ? dB.initializer.call(VB) : void 0
      })
    }
    dB.d(TB, {
      d: () => VB
    })
  },
  37646: (BB, TB, dB) => {
    dB.d(TB, {
      b: () => pB
    });
    var VB = dB(37651);
    const yB = (BB, TB, dB) => BB ? BB.getClassName && "Mesh" === BB.getClassName() ? null : !BB.getClassName || "SubMesh" !== BB.getClassName() && "PhysicsBody" !== BB.getClassName() ? BB.clone ? BB.clone() : Array.isArray(BB) ? BB.slice() : dB && "object" === typeof BB ? {
      ...BB
    } : null : BB.clone(TB) : null;
    class pB {
      static DeepCopy(BB, TB, dB, pB) {
        let lB = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
        const JB = function(BB) {
          const TB = [];
          do {
            const dB = Object.getOwnPropertyNames(BB);
            for (const BB of dB) - 1 === TB.indexOf(BB) && TB.push(BB)
          } while (BB = Object.getPrototypeOf(BB));
          return TB
        }(BB);
        for (const gB of JB) {
          if ("_" === gB[0] && (!pB || -1 === pB.indexOf(gB))) continue;
          if (gB.endsWith("Observable")) continue;
          if (dB && -1 !== dB.indexOf(gB)) continue;
          const JB = BB[gB],
            oB = typeof JB;
          if ("function" !== oB) try {
            if ("object" === oB)
              if (JB instanceof Uint8Array) TB[gB] = Uint8Array.from(JB);
              else if (JB instanceof Array) {
              if (TB[gB] = [], JB.length > 0)
                if ("object" == typeof JB[0])
                  for (let BB = 0; BB < JB.length; BB++) {
                    const dB = yB(JB[BB], TB, lB); - 1 === TB[gB].indexOf(dB) && TB[gB].push(dB)
                  } else TB[gB] = JB.slice(0)
            } else TB[gB] = yB(JB, TB, lB);
            else TB[gB] = JB
          } catch (YB) {
            VB.b.Warn(YB.message)
          }
        }
      }
    }
  },
  37681: (BB, TB, dB) => {
    dB.d(TB, {
      e: () => yB,
      f: () => pB,
      i: () => lB,
      l: () => JB
    });
    var VB = dB(36183);
    class yB {
      constructor(BB, TB, dB) {
        this.gradient = BB, this.color1 = TB, this.color2 = dB
      }
      getColorToRef(BB) {
        this.color2 ? VB.d.LerpToRef(this.color1, this.color2, Math.random(), BB) : BB.bdB(this.color1)
      }
    }
    class pB {
      constructor(BB, TB) {
        this.gradient = BB, this.color = TB
      }
    }
    class lB {
      constructor(BB, TB, dB) {
        this.gradient = BB, this.factor1 = TB, this.factor2 = dB
      }
      getFactor() {
        return void 0 === this.factor2 || this.factor2 === this.factor1 ? this.factor1 : this.factor1 + (this.factor2 - this.factor1) * Math.random()
      }
    }
    class JB {
      static GetCurrentGradient(BB, TB, dB) {
        if (TB[0].gradient > BB) return void dB(TB[0], TB[0], 1);
        for (let yB = 0; yB < TB.length - 1; yB++) {
          const VB = TB[yB],
            pB = TB[yB + 1];
          if (BB >= VB.gradient && BB <= pB.gradient) {
            return void dB(VB, pB, (BB - VB.gradient) / (pB.gradient - VB.gradient))
          }
        }
        const VB = TB.length - 1;
        dB(TB[VB], TB[VB], 1)
      }
    }
  },
  37651: (BB, TB, dB) => {
    dB.d(TB, {
      b: () => VB
    });
    class VB {
      static _CheckLimit(BB, TB) {
        let dB = VB._LogLimitOutputs[BB];
        return dB ? dB.current++ : (dB = {
          limit: TB,
          current: 1
        }, VB._LogLimitOutputs[BB] = dB), dB.current <= dB.limit
      }
      static _GenerateLimitMessage(BB) {
        let TB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
        const dB = VB._LogLimitOutputs[BB];
        if (!dB || !VB.MessageLimitReached) return;
        const yB = this._Levels[TB];
        dB.current === dB.limit && VB[yB.name](VB.MessageLimitReached.replace(/%LIMIT%/g, "" + dB.limit).replace(/%TYPE%/g, yB.name ?? ""))
      }
      static _AddLogEntry(BB) {
        VB._LogCache = BB + VB._LogCache, VB.OnNewCacheEntry && VB.OnNewCacheEntry(BB)
      }
      static _FormatMessage(BB) {
        const TB = BB => BB < 10 ? "0" + BB : "" + BB,
          dB = new Date;
        return "[" + TB(dB.getHours()) + ":" + TB(dB.getMinutes()) + ":" + TB(dB.getSeconds()) + "]: " + BB
      }
      static _LogDisabled(BB, TB) {}
      static _LogEnabled() {
        let BB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
          TB = arguments.length > 1 ? arguments[1] : void 0,
          dB = arguments.length > 2 ? arguments[2] : void 0;
        const yB = Array.isArray(TB) ? TB[0] : TB;
        if (void 0 !== dB && !VB._CheckLimit(yB, dB)) return;
        const pB = VB._FormatMessage(yB),
          lB = this._Levels[BB],
          JB = Array.isArray(TB) ? TB.slice(1) : [];
        lB.logFunc && lB.logFunc("BJS - " + pB, ...JB);
        const YB = `<div style='color:${lB.color}'>${pB}</div><br>`;
        VB._AddLogEntry(YB), VB._GenerateLimitMessage(yB, BB)
      }
      static get LogCache() {
        return VB._LogCache
      }
      static ClearLogCache() {
        VB._LogCache = "", VB._LogLimitOutputs = {}, VB.errorsCount = 0
      }
      static set LogLevels(BB) {
        VB.Log = VB._LogDisabled, VB.Warn = VB._LogDisabled, VB.Error = VB._LogDisabled;
        const TB = [VB.MessageLogLevel, VB.WarningLogLevel, VB.ErrorLogLevel];
        for (const dB of TB)
          if ((BB & dB) === dB) {
            const BB = this._Levels[dB];
            VB[BB.name] = VB._LogEnabled.bind(VB, dB)
          }
      }
    }
    VB.NoneLogLevel = 0, VB.MessageLogLevel = 1, VB.WarningLogLevel = 2, VB.ErrorLogLevel = 4, VB.AllLogLevel = 7, VB.MessageLimitReached = "Too many %TYPE%s (%LIMIT%), no more %TYPE%s will be reported for this message.", VB._LogCache = "", VB._LogLimitOutputs = {}, VB._Levels = [{}, {
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
    }], VB.errorsCount = 0, VB.Log = VB._LogEnabled.bind(VB, VB.MessageLogLevel), VB.Warn = VB._LogEnabled.bind(VB, VB.WarningLogLevel), VB.Error = VB._LogEnabled.bind(VB, VB.ErrorLogLevel)
  },
  37690: (BB, TB, dB) => {
    dB.d(TB, {
      c: () => lB
    });
    var VB = dB(36126),
      yB = dB(36157),
      pB = dB(37646);
    class lB {
      constructor() {
        this.direction1 = new VB.p(0, 1, 0), this.direction2 = new VB.p(0, 1, 0), this.minEmitBox = new VB.p(-.5, -.5, -.5), this.maxEmitBox = new VB.p(.5, .5, .5)
      }
      startDirectionFunction(BB, TB, dB, pB) {
        const lB = (0, yB.RandomRange)(this.direction1.x, this.direction2.x),
          JB = (0, yB.RandomRange)(this.direction1.y, this.direction2.y),
          YB = (0, yB.RandomRange)(this.direction1.z, this.direction2.z);
        if (pB) return TB.x = lB, TB.y = JB, void(TB.z = YB);
        VB.p.TransformNormalFromFloatsToRef(lB, JB, YB, BB, TB)
      }
      startPositionFunction(BB, TB, dB, pB) {
        const lB = (0, yB.RandomRange)(this.minEmitBox.x, this.maxEmitBox.x),
          JB = (0, yB.RandomRange)(this.minEmitBox.y, this.maxEmitBox.y),
          YB = (0, yB.RandomRange)(this.minEmitBox.z, this.maxEmitBox.z);
        if (pB) return TB.x = lB, TB.y = JB, void(TB.z = YB);
        VB.p.TransformCoordinatesFromFloatsToRef(lB, JB, YB, BB, TB)
      }
      clone() {
        const BB = new lB;
        return pB.b.DeepCopy(this, BB), BB
      }
      applyToShader(BB) {
        BB.setVector3("direction1", this.direction1), BB.setVector3("direction2", this.direction2), BB.setVector3("minEmitBox", this.minEmitBox), BB.setVector3("maxEmitBox", this.maxEmitBox)
      }
      buildUniformLayout(BB) {
        BB.addUniform("direction1", 3), BB.addUniform("direction2", 3), BB.addUniform("minEmitBox", 3), BB.addUniform("maxEmitBox", 3)
      }
      getEffectDefines() {
        return "#define BOXEMITTER"
      }
      getClassName() {
        return "BoxParticleEmitter"
      }
      serialize() {
        const BB = {};
        return BB.type = this.getClassName(), BB.direction1 = this.direction1.FVB(), BB.direction2 = this.direction2.FVB(), BB.minEmitBox = this.minEmitBox.FVB(), BB.maxEmitBox = this.maxEmitBox.FVB(), BB
      }
      parse(BB) {
        VB.p.FromArrayToRef(BB.direction1, 0, this.direction1), VB.p.FromArrayToRef(BB.direction2, 0, this.direction2), VB.p.FromArrayToRef(BB.minEmitBox, 0, this.minEmitBox), VB.p.FromArrayToRef(BB.maxEmitBox, 0, this.maxEmitBox)
      }
    }
  },
  37643: (BB, TB, dB) => {
    dB.d(TB, {
      c: () => JB,
      g: () => lB
    });
    var VB = dB(36126),
      yB = dB(36157),
      pB = dB(37646);
    class lB {
      constructor() {
        let BB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
          TB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
          dB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1,
          yB = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
        this.radius = BB, this.height = TB, this.radiusRange = dB, this.directionRandomizer = yB, this._tempVector = VB.p.Zero()
      }
      startDirectionFunction(BB, TB, dB, pB, lB) {
        dB.position.subtractToRef(BB.getTranslation(), this._tempVector), this._tempVector.normalize(), VB.p.TransformNormalToRef(this._tempVector, lB, this._tempVector);
        const JB = (0, yB.RandomRange)(-this.directionRandomizer / 2, this.directionRandomizer / 2);
        let YB = Math.atan2(this._tempVector.x, this._tempVector.z);
        YB += (0, yB.RandomRange)(-Math.PI / 2, Math.PI / 2) * this.directionRandomizer, this._tempVector.y = JB, this._tempVector.x = Math.sin(YB), this._tempVector.z = Math.cos(YB), this._tempVector.normalize(), pB ? TB.bdB(this._tempVector) : VB.p.TransformNormalFromFloatsToRef(this._tempVector.x, this._tempVector.y, this._tempVector.z, BB, TB)
      }
      startPositionFunction(BB, TB, dB, pB) {
        const lB = (0, yB.RandomRange)(-this.height / 2, this.height / 2),
          JB = (0, yB.RandomRange)(0, 2 * Math.PI),
          YB = (0, yB.RandomRange)((1 - this.radiusRange) * (1 - this.radiusRange), 1),
          gB = Math.sqrt(YB) * this.radius,
          oB = gB * Math.cos(JB),
          kB = gB * Math.sin(JB);
        pB ? TB.YBB(oB, lB, kB) : VB.p.TransformCoordinatesFromFloatsToRef(oB, lB, kB, BB, TB)
      }
      clone() {
        const BB = new lB(this.radius, this.directionRandomizer);
        return pB.b.DeepCopy(this, BB), BB
      }
      applyToShader(BB) {
        BB.setFloat("radius", this.radius), BB.setFloat("height", this.height), BB.setFloat("radiusRange", this.radiusRange), BB.setFloat("directionRandomizer", this.directionRandomizer)
      }
      buildUniformLayout(BB) {
        BB.addUniform("radius", 1), BB.addUniform("height", 1), BB.addUniform("radiusRange", 1), BB.addUniform("directionRandomizer", 1)
      }
      getEffectDefines() {
        return "#define CYLINDEREMITTER"
      }
      getClassName() {
        return "CylinderParticleEmitter"
      }
      serialize() {
        const BB = {};
        return BB.type = this.getClassName(), BB.radius = this.radius, BB.height = this.height, BB.radiusRange = this.radiusRange, BB.directionRandomizer = this.directionRandomizer, BB
      }
      parse(BB) {
        this.radius = BB.radius, this.height = BB.height, this.radiusRange = BB.radiusRange, this.directionRandomizer = BB.directionRandomizer
      }
    }
    class JB extends lB {
      constructor() {
        let BB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
          TB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
          dB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1,
          yB = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : new VB.p(0, 1, 0),
          pB = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : new VB.p(0, 1, 0);
        super(BB, TB, dB), this.direction1 = yB, this.direction2 = pB
      }
      startDirectionFunction(BB, TB, dB, pB) {
        const lB = (0, yB.RandomRange)(this.direction1.x, this.direction2.x),
          JB = (0, yB.RandomRange)(this.direction1.y, this.direction2.y),
          YB = (0, yB.RandomRange)(this.direction1.z, this.direction2.z);
        pB ? TB.YBB(lB, JB, YB) : VB.p.TransformNormalFromFloatsToRef(lB, JB, YB, BB, TB)
      }
      clone() {
        const BB = new JB(this.radius, this.height, this.radiusRange, this.direction1, this.direction2);
        return pB.b.DeepCopy(this, BB), BB
      }
      applyToShader(BB) {
        BB.setFloat("radius", this.radius), BB.setFloat("height", this.height), BB.setFloat("radiusRange", this.radiusRange), BB.setVector3("direction1", this.direction1), BB.setVector3("direction2", this.direction2)
      }
      buildUniformLayout(BB) {
        BB.addUniform("radius", 1), BB.addUniform("height", 1), BB.addUniform("radiusRange", 1), BB.addUniform("direction1", 3), BB.addUniform("direction2", 3)
      }
      getEffectDefines() {
        return "#define CYLINDEREMITTER\n#define DIRECTEDCYLINDEREMITTER"
      }
      getClassName() {
        return "CylinderDirectedParticleEmitter"
      }
      serialize() {
        const BB = super.serialize();
        return BB.direction1 = this.direction1.FVB(), BB.direction2 = this.direction2.FVB(), BB
      }
      parse(BB) {
        super.parse(BB), VB.p.FromArrayToRef(BB.direction1, 0, this.direction1), VB.p.FromArrayToRef(BB.direction2, 0, this.direction2)
      }
    }
  },
  37765: (BB, TB, dB) => {
    dB.d(TB, {
      e: () => kB
    });
    const VB = .5 * (Math.sqrt(3) - 1),
      yB = (3 - Math.sqrt(3)) / 6,
      pB = 1 / 3,
      lB = 1 / 6,
      JB = (Math.sqrt(5) - 1) / 4,
      YB = (5 - Math.sqrt(5)) / 20,
      gB = new Float32Array([1, 1, 0, -1, 1, 0, 1, -1, 0, -1, -1, 0, 1, 0, 1, -1, 0, 1, 1, 0, -1, -1, 0, -1, 0, 1, 1, 0, -1, 1, 0, 1, -1, 0, -1, -1]),
      oB = new Float32Array([0, 1, 1, 1, 0, 1, 1, -1, 0, 1, -1, 1, 0, 1, -1, -1, 0, -1, 1, 1, 0, -1, 1, -1, 0, -1, -1, 1, 0, -1, -1, -1, 1, 0, 1, 1, 1, 0, 1, -1, 1, 0, -1, 1, 1, 0, -1, -1, -1, 0, 1, 1, -1, 0, 1, -1, -1, 0, -1, 1, -1, 0, -1, -1, 1, 1, 0, 1, 1, 1, 0, -1, 1, -1, 0, 1, 1, -1, 0, -1, -1, 1, 0, 1, -1, 1, 0, -1, -1, -1, 0, 1, -1, -1, 0, -1, 1, 1, 1, 0, 1, 1, -1, 0, 1, -1, 1, 0, 1, -1, -1, 0, -1, 1, 1, 0, -1, 1, -1, 0, -1, -1, 1, 0, -1, -1, -1, 0]);
    const kB = class {
      constructor() {
        let BB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Math.random;
        const TB = "function" == typeof BB ? BB : function(BB) {
          let TB = 0,
            dB = 0,
            VB = 0,
            yB = 1;
          const pB = function() {
            let BB = 4022871197;
            return function(TB) {
              TB = TB.toString();
              for (let dB = 0; dB < TB.length; dB++) {
                BB += TB.charCodeAt(dB);
                let VB = .02519603282416938 * BB;
                BB = VB >>> 0, VB -= BB, VB *= BB, BB = VB >>> 0, VB -= BB, BB += 4294967296 * VB
              }
              return 2.3283064365386963e-10 * (BB >>> 0)
            }
          }();
          TB = pB(" "), dB = pB(" "), VB = pB(" "), TB -= pB(BB), TB < 0 && (TB += 1);
          dB -= pB(BB), dB < 0 && (dB += 1);
          VB -= pB(BB), VB < 0 && (VB += 1);
          return function() {
            const BB = 2091639 * TB + 2.3283064365386963e-10 * yB;
            return TB = dB, dB = VB, VB = BB - (yB = 0 | BB)
          }
        }(BB);
        this.p = function(BB) {
          const TB = new Uint8Array(256);
          for (let dB = 0; dB < 256; dB++) TB[dB] = dB;
          for (let dB = 0; dB < 255; dB++) {
            const VB = dB + ~~(BB() * (256 - dB)),
              yB = TB[dB];
            TB[dB] = TB[VB], TB[VB] = yB
          }
          return TB
        }(TB), this.perm = new Uint8Array(512), this.permMod12 = new Uint8Array(512);
        for (let dB = 0; dB < 512; dB++) this.perm[dB] = this.p[255 & dB], this.permMod12[dB] = this.perm[dB] % 12
      }
      noise2D(BB, TB) {
        const dB = this.permMod12,
          pB = this.perm;
        let lB = 0,
          JB = 0,
          YB = 0;
        const oB = (BB + TB) * VB,
          kB = Math.floor(BB + oB),
          LB = Math.floor(TB + oB),
          OB = (kB + LB) * yB,
          DB = BB - (kB - OB),
          uB = TB - (LB - OB);
        let HB, EB;
        DB > uB ? (HB = 1, EB = 0) : (HB = 0, EB = 1);
        const vB = DB - HB + yB,
          mB = uB - EB + yB,
          iB = DB - 1 + 2 * yB,
          NB = uB - 1 + 2 * yB,
          tB = 255 & kB,
          fB = 255 & LB;
        let sB = .5 - DB * DB - uB * uB;
        if (sB >= 0) {
          const BB = 3 * dB[tB + pB[fB]];
          sB *= sB, lB = sB * sB * (gB[BB] * DB + gB[BB + 1] * uB)
        }
        let MB = .5 - vB * vB - mB * mB;
        if (MB >= 0) {
          const BB = 3 * dB[tB + HB + pB[fB + EB]];
          MB *= MB, JB = MB * MB * (gB[BB] * vB + gB[BB + 1] * mB)
        }
        let zB = .5 - iB * iB - NB * NB;
        if (zB >= 0) {
          const BB = 3 * dB[tB + 1 + pB[fB + 1]];
          zB *= zB, YB = zB * zB * (gB[BB] * iB + gB[BB + 1] * NB)
        }
        return 70 * (lB + JB + YB)
      }
      noise3D(BB, TB, dB) {
        const VB = this.permMod12,
          yB = this.perm;
        let JB, YB, oB, kB;
        const LB = (BB + TB + dB) * pB,
          OB = Math.floor(BB + LB),
          DB = Math.floor(TB + LB),
          uB = Math.floor(dB + LB),
          HB = (OB + DB + uB) * lB,
          EB = BB - (OB - HB),
          vB = TB - (DB - HB),
          mB = dB - (uB - HB);
        let iB, NB, tB, fB, sB, MB;
        EB >= vB ? vB >= mB ? (iB = 1, NB = 0, tB = 0, fB = 1, sB = 1, MB = 0) : EB >= mB ? (iB = 1, NB = 0, tB = 0, fB = 1, sB = 0, MB = 1) : (iB = 0, NB = 0, tB = 1, fB = 1, sB = 0, MB = 1) : vB < mB ? (iB = 0, NB = 0, tB = 1, fB = 0, sB = 1, MB = 1) : EB < mB ? (iB = 0, NB = 1, tB = 0, fB = 0, sB = 1, MB = 1) : (iB = 0, NB = 1, tB = 0, fB = 1, sB = 1, MB = 0);
        const zB = EB - iB + lB,
          wB = vB - NB + lB,
          UB = mB - tB + lB,
          FB = EB - fB + 2 * lB,
          KB = vB - sB + 2 * lB,
          rB = mB - MB + 2 * lB,
          IB = EB - 1 + .5,
          cB = vB - 1 + .5,
          SB = mB - 1 + .5,
          PB = 255 & OB,
          QB = 255 & DB,
          RB = 255 & uB;
        let aB = .6 - EB * EB - vB * vB - mB * mB;
        if (aB < 0) JB = 0;
        else {
          const BB = 3 * VB[PB + yB[QB + yB[RB]]];
          aB *= aB, JB = aB * aB * (gB[BB] * EB + gB[BB + 1] * vB + gB[BB + 2] * mB)
        }
        let ZB = .6 - zB * zB - wB * wB - UB * UB;
        if (ZB < 0) YB = 0;
        else {
          const BB = 3 * VB[PB + iB + yB[QB + NB + yB[RB + tB]]];
          ZB *= ZB, YB = ZB * ZB * (gB[BB] * zB + gB[BB + 1] * wB + gB[BB + 2] * UB)
        }
        let XB = .6 - FB * FB - KB * KB - rB * rB;
        if (XB < 0) oB = 0;
        else {
          const BB = 3 * VB[PB + fB + yB[QB + sB + yB[RB + MB]]];
          XB *= XB, oB = XB * XB * (gB[BB] * FB + gB[BB + 1] * KB + gB[BB + 2] * rB)
        }
        let WB = .6 - IB * IB - cB * cB - SB * SB;
        if (WB < 0) kB = 0;
        else {
          const BB = 3 * VB[PB + 1 + yB[QB + 1 + yB[RB + 1]]];
          WB *= WB, kB = WB * WB * (gB[BB] * IB + gB[BB + 1] * cB + gB[BB + 2] * SB)
        }
        return 32 * (JB + YB + oB + kB)
      }
      noise4D(BB, TB, dB, VB) {
        const yB = this.perm;
        let pB, lB, gB, kB, LB;
        const OB = (BB + TB + dB + VB) * JB,
          DB = Math.floor(BB + OB),
          uB = Math.floor(TB + OB),
          HB = Math.floor(dB + OB),
          EB = Math.floor(VB + OB),
          vB = (DB + uB + HB + EB) * YB,
          mB = BB - (DB - vB),
          iB = TB - (uB - vB),
          NB = dB - (HB - vB),
          tB = VB - (EB - vB);
        let fB = 0,
          sB = 0,
          MB = 0,
          zB = 0;
        mB > iB ? fB++ : sB++, mB > NB ? fB++ : MB++, mB > tB ? fB++ : zB++, iB > NB ? sB++ : MB++, iB > tB ? sB++ : zB++, NB > tB ? MB++ : zB++;
        const wB = fB >= 3 ? 1 : 0,
          UB = sB >= 3 ? 1 : 0,
          FB = MB >= 3 ? 1 : 0,
          KB = zB >= 3 ? 1 : 0,
          rB = fB >= 2 ? 1 : 0,
          IB = sB >= 2 ? 1 : 0,
          cB = MB >= 2 ? 1 : 0,
          SB = zB >= 2 ? 1 : 0,
          PB = fB >= 1 ? 1 : 0,
          QB = sB >= 1 ? 1 : 0,
          RB = MB >= 1 ? 1 : 0,
          aB = zB >= 1 ? 1 : 0,
          ZB = mB - wB + YB,
          XB = iB - UB + YB,
          WB = NB - FB + YB,
          hB = tB - KB + YB,
          CB = mB - rB + 2 * YB,
          GB = iB - IB + 2 * YB,
          qB = NB - cB + 2 * YB,
          xB = tB - SB + 2 * YB,
          jB = mB - PB + 3 * YB,
          AB = iB - QB + 3 * YB,
          bB = NB - RB + 3 * YB,
          nB = tB - aB + 3 * YB,
          eB = mB - 1 + 4 * YB,
          BT = iB - 1 + 4 * YB,
          TT = NB - 1 + 4 * YB,
          dT = tB - 1 + 4 * YB,
          VT = 255 & DB,
          yT = 255 & uB,
          pT = 255 & HB,
          lT = 255 & EB;
        let JT = .6 - mB * mB - iB * iB - NB * NB - tB * tB;
        if (JT < 0) pB = 0;
        else {
          const BB = yB[VT + yB[yT + yB[pT + yB[lT]]]] % 32 * 4;
          JT *= JT, pB = JT * JT * (oB[BB] * mB + oB[BB + 1] * iB + oB[BB + 2] * NB + oB[BB + 3] * tB)
        }
        let YT = .6 - ZB * ZB - XB * XB - WB * WB - hB * hB;
        if (YT < 0) lB = 0;
        else {
          const BB = yB[VT + wB + yB[yT + UB + yB[pT + FB + yB[lT + KB]]]] % 32 * 4;
          YT *= YT, lB = YT * YT * (oB[BB] * ZB + oB[BB + 1] * XB + oB[BB + 2] * WB + oB[BB + 3] * hB)
        }
        let gT = .6 - CB * CB - GB * GB - qB * qB - xB * xB;
        if (gT < 0) gB = 0;
        else {
          const BB = yB[VT + rB + yB[yT + IB + yB[pT + cB + yB[lT + SB]]]] % 32 * 4;
          gT *= gT, gB = gT * gT * (oB[BB] * CB + oB[BB + 1] * GB + oB[BB + 2] * qB + oB[BB + 3] * xB)
        }
        let oT = .6 - jB * jB - AB * AB - bB * bB - nB * nB;
        if (oT < 0) kB = 0;
        else {
          const BB = yB[VT + PB + yB[yT + QB + yB[pT + RB + yB[lT + aB]]]] % 32 * 4;
          oT *= oT, kB = oT * oT * (oB[BB] * jB + oB[BB + 1] * AB + oB[BB + 2] * bB + oB[BB + 3] * nB)
        }
        let kT = .6 - eB * eB - BT * BT - TT * TT - dT * dT;
        if (kT < 0) LB = 0;
        else {
          const BB = yB[VT + 1 + yB[yT + 1 + yB[pT + 1 + yB[lT + 1]]]] % 32 * 4;
          kT *= kT, LB = kT * kT * (oB[BB] * eB + oB[BB + 1] * BT + oB[BB + 2] * TT + oB[BB + 3] * dT)
        }
        return 27 * (pB + lB + gB + kB + LB)
      }
    }
  }
};
Object.freeze(modules);
for (const BB in modules) Object.freeze(modules[BB]);