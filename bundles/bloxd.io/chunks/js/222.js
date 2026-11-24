/*! For license information please see c6gaap.222.db12de31.chunk.js.LICENSE.txt */
export const id = 222;
export const ids = [222];
export const modules = {
  39636: (BB, IB, ZB) => {
    BB.exports = JB;
    var TB = ZB(364);

    function JB(BB, IB) {
      if (!(this instanceof JB)) return new JB(BB, IB);
      var ZB = TB.create();
      TB.add(ZB, BB, IB), this.base = TB.min(TB.create(), BB, ZB), this.vec = TB.clone(IB), this.max = TB.max(TB.create(), BB, ZB), this.mag = TB.length(this.vec)
    }
    var oB = JB.prototype;
    oB.width = function() {
      return this.vec[0]
    }, oB.height = function() {
      return this.vec[1]
    }, oB.depth = function() {
      return this.vec[2]
    }, oB.x0 = function() {
      return this.base[0]
    }, oB.y0 = function() {
      return this.base[1]
    }, oB.z0 = function() {
      return this.base[2]
    }, oB.x1 = function() {
      return this.max[0]
    }, oB.y1 = function() {
      return this.max[1]
    }, oB.z1 = function() {
      return this.max[2]
    }, oB.translate = function(BB) {
      return TB.add(this.max, this.max, BB), TB.add(this.base, this.base, BB), this
    }, oB.setPosition = function(BB) {
      return TB.add(this.max, BB, this.vec), TB.copy(this.base, BB), this
    }, oB.expand = function(BB) {
      var IB = TB.create(),
        ZB = TB.create();
      return TB.max(IB, BB.max, this.max), TB.min(ZB, BB.base, this.base), TB.subtract(IB, IB, ZB), new JB(ZB, IB)
    }, oB.intersects = function(BB) {
      return !(BB.base[0] > this.max[0]) && (!(BB.base[1] > this.max[1]) && (!(BB.base[2] > this.max[2]) && (!(BB.max[0] < this.base[0]) && (!(BB.max[1] < this.base[1]) && !(BB.max[2] < this.base[2])))))
    }, oB.touches = function(BB) {
      var IB = this.union(BB);
      return null !== IB && (0 == IB.width() || 0 == IB.height() || 0 == IB.depth())
    }, oB.union = function(BB) {
      if (!this.intersects(BB)) return null;
      var IB = Math.max(BB.base[0], this.base[0]),
        ZB = Math.max(BB.base[1], this.base[1]),
        TB = Math.max(BB.base[2], this.base[2]);
      return new JB([IB, ZB, TB], [Math.min(BB.max[0], this.max[0]) - IB, Math.min(BB.max[1], this.max[1]) - ZB, Math.min(BB.max[2], this.max[2]) - TB])
    }
  },
  39629: BB => {
    BB.exports = function(BB, IB, ZB, TB, JB, oB) {
      var GB = +IB[0],
        vB = +IB[1],
        kB = +IB[2],
        cB = +ZB[0],
        nB = +ZB[1],
        hB = +ZB[2],
        zB = Math.sqrt(cB * cB + nB * nB + hB * hB);
      if (0 === zB) throw new Error("Can't raycast along a zero vector");
      return function(BB, IB, ZB, TB, JB, oB, GB, vB, kB, cB) {
        for (var nB = 0, hB = Math.floor, zB = 0 | hB(IB), FB = 0 | hB(ZB), NB = 0 | hB(TB), gB = JB > 0 ? 1 : -1, qB = oB > 0 ? 1 : -1, yB = GB > 0 ? 1 : -1, UB = Math.abs(1 / JB), WB = Math.abs(1 / oB), dB = Math.abs(1 / GB), CB = UB < 1 / 0 ? UB * (gB > 0 ? zB + 1 - IB : IB - zB) : 1 / 0, QB = WB < 1 / 0 ? WB * (qB > 0 ? FB + 1 - ZB : ZB - FB) : 1 / 0, sB = dB < 1 / 0 ? dB * (yB > 0 ? NB + 1 - TB : TB - NB) : 1 / 0, wB = -1; nB <= vB;) {
          var OB = BB(zB, FB, NB);
          if (OB) return kB && (kB[0] = IB + nB * JB, kB[1] = ZB + nB * oB, kB[2] = TB + nB * GB), cB && (cB[0] = cB[1] = cB[2] = 0, 0 === wB && (cB[0] = -gB), 1 === wB && (cB[1] = -qB), 2 === wB && (cB[2] = -yB)), OB;
          CB < QB ? CB < sB ? (zB += gB, nB = CB, CB += UB, wB = 0) : (NB += yB, nB = sB, sB += dB, wB = 2) : QB < sB ? (FB += qB, nB = QB, QB += WB, wB = 1) : (NB += yB, nB = sB, sB += dB, wB = 2)
        }
        return kB && (kB[0] = IB + nB * JB, kB[1] = ZB + nB * oB, kB[2] = TB + nB * GB), cB && (cB[0] = cB[1] = cB[2] = 0), 0
      }(BB, GB, vB, kB, cB /= zB, nB /= zB, hB /= zB, TB = "undefined" === typeof TB ? 64 : +TB, JB, oB)
    }
  },
  39182: (BB, IB, ZB) => {
    ZB.d(IB, {
      d: () => vB,
      f: () => oB
    });
    var TB = ZB(4267);
    let JB = null;

    function oB(BB) {
      return null !== JB && BB === JB
    }

    function GB() {
      this.ZD = !1, this.stopPropagation = !1, this.nD = !1, this.disabled = !1
    }
    class vB {
      constructor(BB, IB) {
        this.version = "0.7.0";
        var ZB = Object.assign({}, new GB, IB || {});
        this.element = BB || document, this.ZD = !!ZB.ZD, this.stopPropagation = !!ZB.stopPropagation, this.nD = !!ZB.nD, this.disabled = !!ZB.disabled, this.filterEvents = (BB, IB) => !0, this.ignoreEvent = BB => !1, this.down = new TB.EventEmitter, this.up = new TB.EventEmitter, this.state = {}, this.zD = {
          dx: 0,
          dy: 0,
          wIB: 0,
          OIB: 0,
          YIB: 0
        }, this.pressCount = {}, this.releaseCount = {}, this._keyBindmap = {}, this._keyStates = {}, this._bindPressCount = {}, this._touches = {
          lastX: 0,
          lastY: 0,
          currID: null
        }, "loading" !== document.readyState ? cB(this) : document.addEventListener("DOMContentLoaded", (BB => {
          cB(this)
        }), {
          once: !0
        })
      }
      bind(BB) {
        for (var IB = arguments.length, ZB = new Array(IB > 1 ? IB - 1 : 0), TB = 1; TB < IB; TB++) ZB[TB - 1] = arguments[TB];
        ZB.forEach((IB => {
          var ZB = this._keyBindmap[IB] || [];
          ZB.includes(BB) || (ZB.push(BB), this._keyBindmap[IB] = ZB)
        })), this.state[BB] = !!this.state[BB], this.pressCount[BB] = this.pressCount[BB] || 0, this.releaseCount[BB] = this.releaseCount[BB] || 0
      }
      unbind(BB) {
        for (var IB in this._keyBindmap) {
          var ZB = this._keyBindmap[IB],
            TB = ZB.indexOf(BB);
          TB > -1 && ZB.splice(TB, 1)
        }
      }
      getBindings() {
        var BB = {};
        for (var IB in this._keyBindmap) {
          this._keyBindmap[IB].forEach((ZB => {
            BB[ZB] = BB[ZB] || [], BB[ZB].push(IB)
          }))
        }
        return BB
      }
      Iz() {
        kB(this.zD), kB(this.pressCount), kB(this.releaseCount)
      }
    }

    function kB(BB) {
      for (var IB in BB) BB[IB] = 0
    }

    function cB(BB) {
      window.addEventListener("keydown", qB.bind(null, BB, !0), !1), window.addEventListener("keyup", qB.bind(null, BB, !1), !1);
      var IB = {
        passive: !0
      };
      BB.element.addEventListener("touchstart", FB.bind(void 0, BB), {
        passive: !1
      }), BB.element.addEventListener("touchend", gB.bind(void 0, BB), IB), BB.element.addEventListener("mousedown", yB.bind(null, BB, !0), IB), window.document.addEventListener("mouseup", yB.bind(null, BB, !1), IB), BB.element.addEventListener("touchmove", UB.bind(null, BB), IB), BB.element.addEventListener("mousemove", UB.bind(null, BB), IB), window.PointerEvent, BB.element.addEventListener("wheel", WB.bind(null, BB), IB), BB.element.addEventListener("contextmenu", dB.bind(null, BB), !1), window.addEventListener("blur", sB.bind(null, BB), !1)
    }
    var nB = 0,
      hB = 0,
      zB = null;

    function FB(BB, IB) {
      IB.preventDefault(), NB(IB)
    }

    function NB(BB) {
      let IB = !1;
      for (let ZB = 0; ZB < BB.touches.length; ++ZB)
        if (BB.touches[ZB].identifier === zB) {
          IB = !0;
          break
        } if (!IB) {
        const IB = BB.changedTouches[0];
        nB = IB.clientX, hB = IB.clientY, zB = IB.identifier
      }
    }

    function gB(BB, IB) {
      for (var ZB = IB.changedTouches, TB = 0; TB < ZB.length; ++TB) ZB[TB].identifier === zB && (zB = null)
    }

    function qB(BB, IB, ZB) {
      if (!BB.ignoreEvent(ZB)) try {
        wB(BB, ZB), IB && ZB.isTrusted && !ZB.repeat && BB._keyStates[ZB.code] && OB(BB, ZB.code)
      } finally {
        YB(ZB.code, IB, BB, ZB)
      }
    }

    function yB(BB, IB, ZB) {
      if (!BB.ignoreEvent(ZB)) try {
        wB(BB, ZB)
      } finally {
        ! function(BB, IB, ZB) {
          if ("pointerId" in ZB)
            if (IB) {
              if (null !== BB._touches.currID) return;
              BB._touches.currID = ZB.pointerId
            } else {
              if (BB._touches.currID !== ZB.pointerId) return;
              BB._touches.currID = null
            } var TB = "button" in ZB ? ZB.button + 1 : 1;
          YB("Mouse" + TB, IB, BB, ZB)
        }(BB, IB, ZB)
      }
    }

    function UB(BB, IB) {
      var ZB = IB.movementX || IB.mozMovementX || 0,
        TB = IB.movementY || IB.mozMovementY || 0;
      if (IB.touches && 0 === (ZB | TB)) {
        var JB = function(BB) {
          NB(BB);
          for (let IB = 0; IB < BB.changedTouches.length; ++IB)
            if (BB.changedTouches[IB].identifier == zB) {
              const ZB = BB.changedTouches[IB],
                TB = [ZB.clientX - nB, ZB.clientY - hB];
              return nB = ZB.clientX, hB = ZB.clientY, TB
            } return console.error(`Did not find touch id ${zB}`), [0, 0]
        }(IB);
        ZB = JB[0], TB = JB[1]
      }
      BB.zD.dx += ZB, BB.zD.dy += TB
    }

    function WB(BB, IB) {
      wB(BB, IB);
      var ZB = 1;
      switch (IB.deltaMode) {
        case 0:
          ZB = 1;
          break;
        case 1:
          ZB = 12;
          break;
        case 2:
          ZB = BB.element.clientHeight || window.innerHeight
      }
      BB.zD.wIB += (IB.deltaX || 0) * ZB, BB.zD.OIB += (IB.deltaY || 0) * ZB, BB.zD.YIB += (IB.deltaZ || 0) * ZB
    }

    function dB(BB, IB) {
      if (!BB.nD) return IB.preventDefault(), !1
    }
    var CB = {
      AltLeft: "altKey",
      AltRight: "altKey",
      ControlLeft: "ctrlKey",
      ControlRight: "ctrlKey",
      ShiftLeft: "shiftKey",
      ShiftRight: "shiftKey",
      MetaLeft: "metaKey",
      MetaRight: "metaKey"
    };

    function QB(BB, IB) {
      return !!BB[CB[IB]] || ("AltRight" === IB || "ControlLeft" === IB) && "function" === typeof BB.getModifierState && !0 === BB.getModifierState("AltGraph")
    }

    function sB(BB, IB) {
      for (var ZB in BB._modifiersHeldThroughBlur = {}, CB) BB._keyStates[ZB] && (BB._modifiersHeldThroughBlur[ZB] = !0);
      IB && IB.isTrusted && function() {
        try {
          return window.self !== window.top
        } catch (BB) {
          return !0
        }
      }() && (clearTimeout(BB._blurRelease), BB._blurRelease = setTimeout((function() {
        if (!document.hasFocus())
          for (var IB in BB._modifiersHeldThroughBlur = {}, BB._keyStates) BB._keyStates[IB] && !/^Mouse\d/.test(IB) && OB(BB, IB)
      }), 0))
    }

    function wB(BB, IB) {
      var ZB = BB._modifiersHeldThroughBlur;
      if (ZB && IB.isTrusted && document.hasFocus())
        for (var TB in ZB) delete ZB[TB], BB._keyStates[TB] && TB !== IB.code && (QB(IB, TB) || OB(BB, TB))
    }

    function OB(BB, IB) {
      const ZB = {
          code: IB,
          preventDefault: () => {},
          stopPropagation: () => {}
        },
        TB = JB;
      JB = ZB;
      try {
        YB(IB, !1, BB, ZB)
      } finally {
        JB = TB
      }
    }

    function YB(BB, IB, ZB, TB) {
      var JB = ZB._keyBindmap[BB];
      JB && (iB(ZB._keyStates[BB], IB) && (ZB._keyStates[BB] = IB, JB.forEach((BB => {
        (!ZB.filterEvents || ZB.filterEvents(TB, BB)) && function(BB, IB, ZB, TB) {
          var JB = IB ? ZB.pressCount : ZB.releaseCount;
          JB[BB] = (JB[BB] || 0) + 1;
          var oB = ZB._bindPressCount[BB] || 0;
          (oB += IB ? 1 : -1) < 0 && (oB = 0);
          ZB._bindPressCount[BB] = oB;
          var GB = ZB.state[BB];
          if (iB(GB, oB)) {
            ZB.state[BB] = oB > 0;
            var vB = IB ? ZB.down : ZB.up;
            ZB.disabled || vB.emit(BB, TB)
          }
        }(BB, IB, ZB, TB)
      }))), "button" in TB || (ZB.ZD && !TB.defaultPrevented && TB.preventDefault(), ZB.stopPropagation && TB.stopPropagation()))
    }

    function iB(BB, IB) {
      return BB ? !IB : IB
    }
  },
  36565: (BB, IB) => {
    function ZB(BB) {
      if (BB && "object" === typeof BB) {
        var IB = BB.which || BB.keyCode || BB.charCode;
        IB && (BB = IB)
      }
      if ("number" === typeof BB) return GB[BB];
      var ZB, oB = String(BB);
      return (ZB = TB[oB.toLowerCase()]) ? ZB : (ZB = JB[oB.toLowerCase()]) || (1 === oB.length ? oB.charCodeAt(0) : void 0)
    }
    ZB.isEventKey = function(BB, IB) {
      if (BB && "object" === typeof BB) {
        var ZB = BB.which || BB.keyCode || BB.charCode;
        if (null === ZB || void 0 === ZB) return !1;
        if ("string" === typeof IB) {
          var oB;
          if (oB = TB[IB.toLowerCase()]) return oB === ZB;
          if (oB = JB[IB.toLowerCase()]) return oB === ZB
        } else if ("number" === typeof IB) return IB === ZB;
        return !1
      }
    };
    var TB = (IB = BB.exports = ZB).code = IB.codes = {
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
      JB = IB.aliases = {
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
    for (oB = 97; oB < 123; oB++) TB[String.fromCharCode(oB)] = oB - 32;
    for (var oB = 48; oB < 58; oB++) TB[oB - 48] = oB;
    for (oB = 1; oB < 13; oB++) TB["f" + oB] = oB + 111;
    for (oB = 0; oB < 10; oB++) TB["numpad " + oB] = oB + 96;
    var GB = IB.names = IB.title = {};
    for (oB in TB) GB[TB[oB]] = oB;
    for (var vB in JB) TB[vB] = JB[vB]
  },
  39618: (BB, IB, ZB) => {
    ZB.d(IB, {
      c: () => TB
    });
    class TB {
      constructor() {
        let BB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
          IB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 10;
        this.qL = !1, this.dL = !1, this.bM = 30, this.yX = 0, this.wL = 100, this.mq = !1, this.fullscreen = !1, this.dU = function(BB) {}, this.YL = function(BB, IB, ZB) {}, this.fL = function() {}, this.kU = function() {}, this.RL = function() {}, this.onFullscreenChanged = function() {}, this.onPointerLockError = function(BB) {}, this._data = new JB(IB),
          function(BB) {
            if ("loading" === document.readyState) {
              var IB = () => {
                document.removeEventListener("readystatechange", IB), BB()
              };
              document.addEventListener("readystatechange", IB)
            } else setTimeout(BB, 0)
          }((() => {
            ! function(BB) {
              var IB = BB._data,
                ZB = IB.nowObject.now();
              IB.lastTickStarted = ZB, IB.lastFrameStarted = ZB, IB.lastRenderStarted = ZB, IB.frameCB = () => function(BB) {
                var IB = BB._data;
                requestAnimationFrame(IB.frameCB), vB(BB);
                var ZB = IB.nowObject.now(),
                  TB = ZB - IB.lastFrameStarted;
                if (IB.lastFrameStarted = ZB, BB.yX > 0) {
                  IB.renderAccum += TB;
                  var JB = 1e3 / BB.yX;
                  if (IB.renderAccum < JB) return;
                  IB.renderAccum -= JB, IB.renderAccum > JB && (IB.renderAccum = JB)
                }
                var oB = ZB - IB.lastRenderStarted;
                IB.lastRenderStarted = ZB;
                var GB = 1e3 / BB.bM,
                  kB = (ZB - IB.lastTickStarted) / GB;
                kB < 0 && (kB = 0);
                BB.YL(oB, kB, GB), setTimeout(vB, 0, BB, !0)
              }(BB), IB.intervalCB = () => vB(BB), requestAnimationFrame(IB.frameCB), IB.pollTime > 0 && (IB.intervalID = setInterval(IB.intervalCB, Math.max(IB.pollTime, 1e3 / BB.bM / 2)))
            }(this),
            function(BB, IB) {
              if (!IB) return;
              var ZB = !1,
                TB = !1,
                JB = BB => {
                  if (!!BB !== (ZB = IB === document.pointerLockElement))
                    if (BB) {
                      var TB = IB.requestPointerLock();
                      TB && TB.catch && TB.catch((BB => {}))
                    } else document.exitPointerLock()
                },
                oB = BB => {
                  !!BB !== (TB = IB === document.fullscreenElement) && (BB ? IB.requestFullscreen ? IB.requestFullscreen() : IB.webkitRequestFullscreen && IB.webkitRequestFullscreen() : document.exitFullscreen ? document.exitFullscreen() : document.webkitExitFullscreen && document.webkitExitFullscreen())
                };
              document.addEventListener("pointerlockchange", (TB => {
                ZB = IB === document.pointerLockElement, BB.RL(ZB)
              })), document.addEventListener("fullscreenchange", (ZB => {
                TB = IB === document.fullscreenElement, BB.onFullscreenChanged(TB)
              })), document.addEventListener("pointerlockerror", (TB => {
                ZB = IB === document.pointerLockElement, BB.onPointerLockError(TB)
              })), Object.defineProperty(BB, "mq", {
                get: () => ZB,
                set: JB
              }), Object.defineProperty(BB, "fullscreen", {
                get: () => TB,
                set: oB
              }), IB.addEventListener("click", (IB => {
                BB.qL && JB(!0), BB.dL && oB(!0)
              }));
              var GB = () => BB.kU();
              if (window.ResizeObserver) {
                new ResizeObserver(GB).observe(IB)
              } else window.addEventListener("resize", GB)
            }(this, BB), this.fL()
          }))
      }
    }

    function JB() {
      let BB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 10;
      this.nowObject = performance || Date, this.pollTime = BB, this.renderAccum = 0, this.lastTickStarted = 0, this.lastFrameStarted = 0, this.lastRenderStarted = 0, this.avgTickTime = 2, this.frameCB = null, this.intervalCB = null, this.intervalID = -1
    }
    var oB = 3,
      GB = 20;

    function vB(BB) {
      for (var IB = BB._data, ZB = 1e3 / BB.bM, TB = IB.nowObject.now() + GB, JB = 0; IB.nowObject.now() >= IB.lastTickStarted + ZB && IB.nowObject.now() < TB && ++JB <= oB;) BB.dU(ZB), IB.lastTickStarted += ZB;
      var vB = 5 * (ZB + 5),
        kB = IB.nowObject.now();
      if (kB - IB.lastTickStarted > vB)
        for (; kB >= IB.lastTickStarted + ZB;) IB.lastTickStarted += ZB
    }
  },
  36717: (BB, IB, ZB) => {
    ZB.d(IB, {
      d: () => GB
    });
    var TB = ZB(63);
    const JB = TB.useLayoutEffect;
    const oB = function(BB) {
      var IB = (0, TB.useRef)(BB);
      return JB((function() {
        IB.current = BB
      })), IB
    };
    var GB = function(BB) {
      var IB = oB(BB);
      (0, TB.useEffect)((function() {
        var BB = function(BB) {
          var ZB;
          if (null != IB.current && (ZB = IB.current(BB)), BB.defaultPrevented && (BB.returnValue = ""), "string" === typeof ZB) return BB.returnValue = ZB, ZB
        };
        return window.addEventListener("beforeunload", BB),
          function() {
            window.removeEventListener("beforeunload", BB)
          }
      }), [])
    }
  },
  36600: BB => {
    var IB, ZB = "undefined" !== typeof window ? window.navigator.userAgent : "",
      TB = /OS X/.test(ZB),
      JB = /Opera/.test(ZB),
      oB = !/like Gecko/.test(ZB) && !JB,
      GB = BB.exports = {
        0: TB ? "<menu>" : "<UNK>",
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
        93: TB ? "<meta>" : "<menu>",
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
        173: TB && oB ? "-" : "<volume-mute>",
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
        231: JB ? "`" : "<unicode>",
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
    for (IB = 58; IB < 65; ++IB) GB[IB] = String.fromCharCode(IB);
    for (IB = 48; IB < 58; ++IB) GB[IB] = IB - 48 + "";
    for (IB = 65; IB < 91; ++IB) GB[IB] = String.fromCharCode(IB);
    for (IB = 96; IB < 106; ++IB) GB[IB] = "<num-" + (IB - 96) + ">";
    for (IB = 112; IB < 136; ++IB) GB[IB] = "F" + (IB - 111)
  },
  39039: (BB, IB, ZB) => {
    function TB(BB, IB, ZB, TB, JB) {
      var oB = {};
      return Object.keys(TB).forEach((function(BB) {
        oB[BB] = TB[BB]
      })), oB.enumerable = !!oB.enumerable, oB.configurable = !!oB.configurable, ("value" in oB || oB.initializer) && (oB.writable = !0), oB = ZB.slice().reverse().reduce((function(ZB, TB) {
        return TB(BB, IB, ZB) || ZB
      }), oB), JB && void 0 !== oB.initializer && (oB.value = oB.initializer ? oB.initializer.call(JB) : void 0, oB.initializer = void 0), void 0 === oB.initializer && (Object.defineProperty(BB, IB, oB), oB = null), oB
    }
    ZB.d(IB, {
      b: () => TB
    })
  },
  39032: (BB, IB, ZB) => {
    function TB(BB, IB, ZB, TB) {
      ZB && Object.defineProperty(BB, IB, {
        enumerable: ZB.enumerable,
        configurable: ZB.configurable,
        writable: ZB.writable,
        value: ZB.initializer ? ZB.initializer.call(TB) : void 0
      })
    }
    ZB.d(IB, {
      d: () => TB
    })
  },
  38714: (BB, IB, ZB) => {
    ZB.d(IB, {
      b: () => oB
    });
    var TB = ZB(38718);
    const JB = (BB, IB, ZB) => BB ? BB.getClassName && "Mesh" === BB.getClassName() ? null : !BB.getClassName || "SubMesh" !== BB.getClassName() && "PhysicsBody" !== BB.getClassName() ? BB.clone ? BB.clone() : Array.isArray(BB) ? BB.slice() : ZB && "object" === typeof BB ? {
      ...BB
    } : null : BB.clone(IB) : null;
    class oB {
      static DeepCopy(BB, IB, ZB, oB) {
        let GB = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
        const vB = function(BB) {
          const IB = [];
          do {
            const ZB = Object.getOwnPropertyNames(BB);
            for (const BB of ZB) - 1 === IB.indexOf(BB) && IB.push(BB)
          } while (BB = Object.getPrototypeOf(BB));
          return IB
        }(BB);
        for (const cB of vB) {
          if ("_" === cB[0] && (!oB || -1 === oB.indexOf(cB))) continue;
          if (cB.endsWith("Observable")) continue;
          if (ZB && -1 !== ZB.indexOf(cB)) continue;
          const vB = BB[cB],
            nB = typeof vB;
          if ("function" !== nB) try {
            if ("object" === nB)
              if (vB instanceof Uint8Array) IB[cB] = Uint8Array.from(vB);
              else if (vB instanceof Array) {
              if (IB[cB] = [], vB.length > 0)
                if ("object" == typeof vB[0])
                  for (let BB = 0; BB < vB.length; BB++) {
                    const ZB = JB(vB[BB], IB, GB); - 1 === IB[cB].indexOf(ZB) && IB[cB].push(ZB)
                  } else IB[cB] = vB.slice(0)
            } else IB[cB] = JB(vB, IB, GB);
            else IB[cB] = vB
          } catch (kB) {
            TB.d.Warn(kB.message)
          }
        }
      }
    }
  },
  38754: (BB, IB, ZB) => {
    ZB.d(IB, {
      e: () => JB,
      i: () => oB,
      j: () => GB,
      n: () => vB
    });
    var TB = ZB(37311);
    class JB {
      constructor(BB, IB, ZB) {
        this.gradient = BB, this.color1 = IB, this.color2 = ZB
      }
      getColorToRef(BB) {
        this.color2 ? TB.g.LerpToRef(this.color1, this.color2, Math.random(), BB) : BB.TY(this.color1)
      }
    }
    class oB {
      constructor(BB, IB) {
        this.gradient = BB, this.color = IB
      }
    }
    class GB {
      constructor(BB, IB, ZB) {
        this.gradient = BB, this.factor1 = IB, this.factor2 = ZB
      }
      getFactor() {
        return void 0 === this.factor2 || this.factor2 === this.factor1 ? this.factor1 : this.factor1 + (this.factor2 - this.factor1) * Math.random()
      }
    }
    class vB {
      static GetCurrentGradient(BB, IB, ZB) {
        if (IB[0].gradient > BB) return void ZB(IB[0], IB[0], 1);
        for (let JB = 0; JB < IB.length - 1; JB++) {
          const TB = IB[JB],
            oB = IB[JB + 1];
          if (BB >= TB.gradient && BB <= oB.gradient) {
            return void ZB(TB, oB, (BB - TB.gradient) / (oB.gradient - TB.gradient))
          }
        }
        const TB = IB.length - 1;
        ZB(IB[TB], IB[TB], 1)
      }
    }
  },
  38718: (BB, IB, ZB) => {
    ZB.d(IB, {
      d: () => TB
    });
    class TB {
      static _CheckLimit(BB, IB) {
        let ZB = TB._LogLimitOutputs[BB];
        return ZB ? ZB.current++ : (ZB = {
          limit: IB,
          current: 1
        }, TB._LogLimitOutputs[BB] = ZB), ZB.current <= ZB.limit
      }
      static _GenerateLimitMessage(BB) {
        let IB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
        const ZB = TB._LogLimitOutputs[BB];
        if (!ZB || !TB.MessageLimitReached) return;
        const JB = this._Levels[IB];
        ZB.current === ZB.limit && TB[JB.name](TB.MessageLimitReached.replace(/%LIMIT%/g, "" + ZB.limit).replace(/%TYPE%/g, JB.name ?? ""))
      }
      static _AddLogEntry(BB) {
        TB._LogCache = BB + TB._LogCache, TB.OnNewCacheEntry && TB.OnNewCacheEntry(BB)
      }
      static _FormatMessage(BB) {
        const IB = BB => BB < 10 ? "0" + BB : "" + BB,
          ZB = new Date;
        return "[" + IB(ZB.getHours()) + ":" + IB(ZB.getMinutes()) + ":" + IB(ZB.getSeconds()) + "]: " + BB
      }
      static _LogDisabled(BB, IB) {}
      static _LogEnabled() {
        let BB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
          IB = arguments.length > 1 ? arguments[1] : void 0,
          ZB = arguments.length > 2 ? arguments[2] : void 0;
        const JB = Array.isArray(IB) ? IB[0] : IB;
        if (void 0 !== ZB && !TB._CheckLimit(JB, ZB)) return;
        const oB = TB._FormatMessage(JB),
          GB = this._Levels[BB],
          vB = Array.isArray(IB) ? IB.slice(1) : [];
        GB.logFunc && GB.logFunc("BJS - " + oB, ...vB);
        const kB = `<div style='color:${GB.color}'>${oB}</div><br>`;
        TB._AddLogEntry(kB), TB._GenerateLimitMessage(JB, BB)
      }
      static get LogCache() {
        return TB._LogCache
      }
      static ClearLogCache() {
        TB._LogCache = "", TB._LogLimitOutputs = {}, TB.errorsCount = 0
      }
      static set LogLevels(BB) {
        TB.Log = TB._LogDisabled, TB.Warn = TB._LogDisabled, TB.Error = TB._LogDisabled;
        const IB = [TB.MessageLogLevel, TB.WarningLogLevel, TB.ErrorLogLevel];
        for (const ZB of IB)
          if ((BB & ZB) === ZB) {
            const BB = this._Levels[ZB];
            TB[BB.name] = TB._LogEnabled.bind(TB, ZB)
          }
      }
    }
    TB.NoneLogLevel = 0, TB.MessageLogLevel = 1, TB.WarningLogLevel = 2, TB.ErrorLogLevel = 4, TB.AllLogLevel = 7, TB.MessageLimitReached = "Too many %TYPE%s (%LIMIT%), no more %TYPE%s will be reported for this message.", TB._LogCache = "", TB._LogLimitOutputs = {}, TB._Levels = [{}, {
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
    }], TB.errorsCount = 0, TB.Log = TB._LogEnabled.bind(TB, TB.MessageLogLevel), TB.Warn = TB._LogEnabled.bind(TB, TB.WarningLogLevel), TB.Error = TB._LogEnabled.bind(TB, TB.ErrorLogLevel)
  },
  38756: (BB, IB, ZB) => {
    ZB.d(IB, {
      c: () => GB
    });
    var TB = ZB(37120),
      JB = ZB(37158),
      oB = ZB(38714);
    class GB {
      constructor() {
        this.direction1 = new TB.s(0, 1, 0), this.direction2 = new TB.s(0, 1, 0), this.minEmitBox = new TB.s(-.5, -.5, -.5), this.maxEmitBox = new TB.s(.5, .5, .5)
      }
      startDirectionFunction(BB, IB, ZB, oB) {
        const GB = (0, JB.RandomRange)(this.direction1.x, this.direction2.x),
          vB = (0, JB.RandomRange)(this.direction1.y, this.direction2.y),
          kB = (0, JB.RandomRange)(this.direction1.z, this.direction2.z);
        if (oB) return IB.x = GB, IB.y = vB, void(IB.z = kB);
        TB.s.TransformNormalFromFloatsToRef(GB, vB, kB, BB, IB)
      }
      startPositionFunction(BB, IB, ZB, oB) {
        const GB = (0, JB.RandomRange)(this.minEmitBox.x, this.maxEmitBox.x),
          vB = (0, JB.RandomRange)(this.minEmitBox.y, this.maxEmitBox.y),
          kB = (0, JB.RandomRange)(this.minEmitBox.z, this.maxEmitBox.z);
        if (oB) return IB.x = GB, IB.y = vB, void(IB.z = kB);
        TB.s.TransformCoordinatesFromFloatsToRef(GB, vB, kB, BB, IB)
      }
      clone() {
        const BB = new GB;
        return oB.b.DeepCopy(this, BB), BB
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
        return BB.type = this.getClassName(), BB.direction1 = this.direction1.HTB(), BB.direction2 = this.direction2.HTB(), BB.minEmitBox = this.minEmitBox.HTB(), BB.maxEmitBox = this.maxEmitBox.HTB(), BB
      }
      parse(BB) {
        TB.s.FromArrayToRef(BB.direction1, 0, this.direction1), TB.s.FromArrayToRef(BB.direction2, 0, this.direction2), TB.s.FromArrayToRef(BB.minEmitBox, 0, this.minEmitBox), TB.s.FromArrayToRef(BB.maxEmitBox, 0, this.maxEmitBox)
      }
    }
  },
  38712: (BB, IB, ZB) => {
    ZB.d(IB, {
      b: () => vB,
      d: () => GB
    });
    var TB = ZB(37120),
      JB = ZB(37158),
      oB = ZB(38714);
    class GB {
      constructor() {
        let BB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
          IB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
          ZB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1,
          JB = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
        this.radius = BB, this.height = IB, this.radiusRange = ZB, this.directionRandomizer = JB, this._tempVector = TB.s.Zero()
      }
      startDirectionFunction(BB, IB, ZB, oB, GB) {
        ZB.position.subtractToRef(BB.getTranslation(), this._tempVector), this._tempVector.normalize(), TB.s.TransformNormalToRef(this._tempVector, GB, this._tempVector);
        const vB = (0, JB.RandomRange)(-this.directionRandomizer / 2, this.directionRandomizer / 2);
        let kB = Math.atan2(this._tempVector.x, this._tempVector.z);
        kB += (0, JB.RandomRange)(-Math.PI / 2, Math.PI / 2) * this.directionRandomizer, this._tempVector.y = vB, this._tempVector.x = Math.sin(kB), this._tempVector.z = Math.cos(kB), this._tempVector.normalize(), oB ? IB.TY(this._tempVector) : TB.s.TransformNormalFromFloatsToRef(this._tempVector.x, this._tempVector.y, this._tempVector.z, BB, IB)
      }
      startPositionFunction(BB, IB, ZB, oB) {
        const GB = (0, JB.RandomRange)(-this.height / 2, this.height / 2),
          vB = (0, JB.RandomRange)(0, 2 * Math.PI),
          kB = (0, JB.RandomRange)((1 - this.radiusRange) * (1 - this.radiusRange), 1),
          cB = Math.sqrt(kB) * this.radius,
          nB = cB * Math.cos(vB),
          hB = cB * Math.sin(vB);
        oB ? IB.cBB(nB, GB, hB) : TB.s.TransformCoordinatesFromFloatsToRef(nB, GB, hB, BB, IB)
      }
      clone() {
        const BB = new GB(this.radius, this.directionRandomizer);
        return oB.b.DeepCopy(this, BB), BB
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
    class vB extends GB {
      constructor() {
        let BB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
          IB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
          ZB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1,
          JB = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : new TB.s(0, 1, 0),
          oB = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : new TB.s(0, 1, 0);
        super(BB, IB, ZB), this.direction1 = JB, this.direction2 = oB
      }
      startDirectionFunction(BB, IB, ZB, oB) {
        const GB = (0, JB.RandomRange)(this.direction1.x, this.direction2.x),
          vB = (0, JB.RandomRange)(this.direction1.y, this.direction2.y),
          kB = (0, JB.RandomRange)(this.direction1.z, this.direction2.z);
        oB ? IB.cBB(GB, vB, kB) : TB.s.TransformNormalFromFloatsToRef(GB, vB, kB, BB, IB)
      }
      clone() {
        const BB = new vB(this.radius, this.height, this.radiusRange, this.direction1, this.direction2);
        return oB.b.DeepCopy(this, BB), BB
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
        return BB.direction1 = this.direction1.HTB(), BB.direction2 = this.direction2.HTB(), BB
      }
      parse(BB) {
        super.parse(BB), TB.s.FromArrayToRef(BB.direction1, 0, this.direction1), TB.s.FromArrayToRef(BB.direction2, 0, this.direction2)
      }
    }
  },
  38844: (BB, IB, ZB) => {
    ZB.d(IB, {
      d: () => hB
    });
    const TB = .5 * (Math.sqrt(3) - 1),
      JB = (3 - Math.sqrt(3)) / 6,
      oB = 1 / 3,
      GB = 1 / 6,
      vB = (Math.sqrt(5) - 1) / 4,
      kB = (5 - Math.sqrt(5)) / 20,
      cB = new Float32Array([1, 1, 0, -1, 1, 0, 1, -1, 0, -1, -1, 0, 1, 0, 1, -1, 0, 1, 1, 0, -1, -1, 0, -1, 0, 1, 1, 0, -1, 1, 0, 1, -1, 0, -1, -1]),
      nB = new Float32Array([0, 1, 1, 1, 0, 1, 1, -1, 0, 1, -1, 1, 0, 1, -1, -1, 0, -1, 1, 1, 0, -1, 1, -1, 0, -1, -1, 1, 0, -1, -1, -1, 1, 0, 1, 1, 1, 0, 1, -1, 1, 0, -1, 1, 1, 0, -1, -1, -1, 0, 1, 1, -1, 0, 1, -1, -1, 0, -1, 1, -1, 0, -1, -1, 1, 1, 0, 1, 1, 1, 0, -1, 1, -1, 0, 1, 1, -1, 0, -1, -1, 1, 0, 1, -1, 1, 0, -1, -1, -1, 0, 1, -1, -1, 0, -1, 1, 1, 1, 0, 1, 1, -1, 0, 1, -1, 1, 0, 1, -1, -1, 0, -1, 1, 1, 0, -1, 1, -1, 0, -1, -1, 1, 0, -1, -1, -1, 0]);
    const hB = class {
      constructor() {
        let BB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Math.random;
        const IB = "function" == typeof BB ? BB : function(BB) {
          let IB = 0,
            ZB = 0,
            TB = 0,
            JB = 1;
          const oB = function() {
            let BB = 4022871197;
            return function(IB) {
              IB = IB.toString();
              for (let ZB = 0; ZB < IB.length; ZB++) {
                BB += IB.charCodeAt(ZB);
                let TB = .02519603282416938 * BB;
                BB = TB >>> 0, TB -= BB, TB *= BB, BB = TB >>> 0, TB -= BB, BB += 4294967296 * TB
              }
              return 2.3283064365386963e-10 * (BB >>> 0)
            }
          }();
          IB = oB(" "), ZB = oB(" "), TB = oB(" "), IB -= oB(BB), IB < 0 && (IB += 1);
          ZB -= oB(BB), ZB < 0 && (ZB += 1);
          TB -= oB(BB), TB < 0 && (TB += 1);
          return function() {
            const BB = 2091639 * IB + 2.3283064365386963e-10 * JB;
            return IB = ZB, ZB = TB, TB = BB - (JB = 0 | BB)
          }
        }(BB);
        this.p = function(BB) {
          const IB = new Uint8Array(256);
          for (let ZB = 0; ZB < 256; ZB++) IB[ZB] = ZB;
          for (let ZB = 0; ZB < 255; ZB++) {
            const TB = ZB + ~~(BB() * (256 - ZB)),
              JB = IB[ZB];
            IB[ZB] = IB[TB], IB[TB] = JB
          }
          return IB
        }(IB), this.perm = new Uint8Array(512), this.permMod12 = new Uint8Array(512);
        for (let ZB = 0; ZB < 512; ZB++) this.perm[ZB] = this.p[255 & ZB], this.permMod12[ZB] = this.perm[ZB] % 12
      }
      noise2D(BB, IB) {
        const ZB = this.permMod12,
          oB = this.perm;
        let GB = 0,
          vB = 0,
          kB = 0;
        const nB = (BB + IB) * TB,
          hB = Math.floor(BB + nB),
          zB = Math.floor(IB + nB),
          FB = (hB + zB) * JB,
          NB = BB - (hB - FB),
          gB = IB - (zB - FB);
        let qB, yB;
        NB > gB ? (qB = 1, yB = 0) : (qB = 0, yB = 1);
        const UB = NB - qB + JB,
          WB = gB - yB + JB,
          dB = NB - 1 + 2 * JB,
          CB = gB - 1 + 2 * JB,
          QB = 255 & hB,
          sB = 255 & zB;
        let wB = .5 - NB * NB - gB * gB;
        if (wB >= 0) {
          const BB = 3 * ZB[QB + oB[sB]];
          wB *= wB, GB = wB * wB * (cB[BB] * NB + cB[BB + 1] * gB)
        }
        let OB = .5 - UB * UB - WB * WB;
        if (OB >= 0) {
          const BB = 3 * ZB[QB + qB + oB[sB + yB]];
          OB *= OB, vB = OB * OB * (cB[BB] * UB + cB[BB + 1] * WB)
        }
        let YB = .5 - dB * dB - CB * CB;
        if (YB >= 0) {
          const BB = 3 * ZB[QB + 1 + oB[sB + 1]];
          YB *= YB, kB = YB * YB * (cB[BB] * dB + cB[BB + 1] * CB)
        }
        return 70 * (GB + vB + kB)
      }
      noise3D(BB, IB, ZB) {
        const TB = this.permMod12,
          JB = this.perm;
        let vB, kB, nB, hB;
        const zB = (BB + IB + ZB) * oB,
          FB = Math.floor(BB + zB),
          NB = Math.floor(IB + zB),
          gB = Math.floor(ZB + zB),
          qB = (FB + NB + gB) * GB,
          yB = BB - (FB - qB),
          UB = IB - (NB - qB),
          WB = ZB - (gB - qB);
        let dB, CB, QB, sB, wB, OB;
        yB >= UB ? UB >= WB ? (dB = 1, CB = 0, QB = 0, sB = 1, wB = 1, OB = 0) : yB >= WB ? (dB = 1, CB = 0, QB = 0, sB = 1, wB = 0, OB = 1) : (dB = 0, CB = 0, QB = 1, sB = 1, wB = 0, OB = 1) : UB < WB ? (dB = 0, CB = 0, QB = 1, sB = 0, wB = 1, OB = 1) : yB < WB ? (dB = 0, CB = 1, QB = 0, sB = 0, wB = 1, OB = 1) : (dB = 0, CB = 1, QB = 0, sB = 1, wB = 1, OB = 0);
        const YB = yB - dB + GB,
          iB = UB - CB + GB,
          pB = WB - QB + GB,
          aB = yB - sB + 2 * GB,
          HB = UB - wB + 2 * GB,
          MB = WB - OB + 2 * GB,
          jB = yB - 1 + .5,
          PB = UB - 1 + .5,
          RB = WB - 1 + .5,
          rB = 255 & FB,
          mB = 255 & NB,
          XB = 255 & gB;
        let LB = .6 - yB * yB - UB * UB - WB * WB;
        if (LB < 0) vB = 0;
        else {
          const BB = 3 * TB[rB + JB[mB + JB[XB]]];
          LB *= LB, vB = LB * LB * (cB[BB] * yB + cB[BB + 1] * UB + cB[BB + 2] * WB)
        }
        let eB = .6 - YB * YB - iB * iB - pB * pB;
        if (eB < 0) kB = 0;
        else {
          const BB = 3 * TB[rB + dB + JB[mB + CB + JB[XB + QB]]];
          eB *= eB, kB = eB * eB * (cB[BB] * YB + cB[BB + 1] * iB + cB[BB + 2] * pB)
        }
        let uB = .6 - aB * aB - HB * HB - MB * MB;
        if (uB < 0) nB = 0;
        else {
          const BB = 3 * TB[rB + sB + JB[mB + wB + JB[XB + OB]]];
          uB *= uB, nB = uB * uB * (cB[BB] * aB + cB[BB + 1] * HB + cB[BB + 2] * MB)
        }
        let fB = .6 - jB * jB - PB * PB - RB * RB;
        if (fB < 0) hB = 0;
        else {
          const BB = 3 * TB[rB + 1 + JB[mB + 1 + JB[XB + 1]]];
          fB *= fB, hB = fB * fB * (cB[BB] * jB + cB[BB + 1] * PB + cB[BB + 2] * RB)
        }
        return 32 * (vB + kB + nB + hB)
      }
      noise4D(BB, IB, ZB, TB) {
        const JB = this.perm;
        let oB, GB, cB, hB, zB;
        const FB = (BB + IB + ZB + TB) * vB,
          NB = Math.floor(BB + FB),
          gB = Math.floor(IB + FB),
          qB = Math.floor(ZB + FB),
          yB = Math.floor(TB + FB),
          UB = (NB + gB + qB + yB) * kB,
          WB = BB - (NB - UB),
          dB = IB - (gB - UB),
          CB = ZB - (qB - UB),
          QB = TB - (yB - UB);
        let sB = 0,
          wB = 0,
          OB = 0,
          YB = 0;
        WB > dB ? sB++ : wB++, WB > CB ? sB++ : OB++, WB > QB ? sB++ : YB++, dB > CB ? wB++ : OB++, dB > QB ? wB++ : YB++, CB > QB ? OB++ : YB++;
        const iB = sB >= 3 ? 1 : 0,
          pB = wB >= 3 ? 1 : 0,
          aB = OB >= 3 ? 1 : 0,
          HB = YB >= 3 ? 1 : 0,
          MB = sB >= 2 ? 1 : 0,
          jB = wB >= 2 ? 1 : 0,
          PB = OB >= 2 ? 1 : 0,
          RB = YB >= 2 ? 1 : 0,
          rB = sB >= 1 ? 1 : 0,
          mB = wB >= 1 ? 1 : 0,
          XB = OB >= 1 ? 1 : 0,
          LB = YB >= 1 ? 1 : 0,
          eB = WB - iB + kB,
          uB = dB - pB + kB,
          fB = CB - aB + kB,
          lB = QB - HB + kB,
          AB = WB - MB + 2 * kB,
          tB = dB - jB + 2 * kB,
          bB = CB - PB + 2 * kB,
          xB = QB - RB + 2 * kB,
          EB = WB - rB + 3 * kB,
          DB = dB - mB + 3 * kB,
          KB = CB - XB + 3 * kB,
          VB = QB - LB + 3 * kB,
          SB = WB - 1 + 4 * kB,
          BI = dB - 1 + 4 * kB,
          II = CB - 1 + 4 * kB,
          ZI = QB - 1 + 4 * kB,
          TI = 255 & NB,
          JI = 255 & gB,
          oI = 255 & qB,
          GI = 255 & yB;
        let vI = .6 - WB * WB - dB * dB - CB * CB - QB * QB;
        if (vI < 0) oB = 0;
        else {
          const BB = JB[TI + JB[JI + JB[oI + JB[GI]]]] % 32 * 4;
          vI *= vI, oB = vI * vI * (nB[BB] * WB + nB[BB + 1] * dB + nB[BB + 2] * CB + nB[BB + 3] * QB)
        }
        let kI = .6 - eB * eB - uB * uB - fB * fB - lB * lB;
        if (kI < 0) GB = 0;
        else {
          const BB = JB[TI + iB + JB[JI + pB + JB[oI + aB + JB[GI + HB]]]] % 32 * 4;
          kI *= kI, GB = kI * kI * (nB[BB] * eB + nB[BB + 1] * uB + nB[BB + 2] * fB + nB[BB + 3] * lB)
        }
        let cI = .6 - AB * AB - tB * tB - bB * bB - xB * xB;
        if (cI < 0) cB = 0;
        else {
          const BB = JB[TI + MB + JB[JI + jB + JB[oI + PB + JB[GI + RB]]]] % 32 * 4;
          cI *= cI, cB = cI * cI * (nB[BB] * AB + nB[BB + 1] * tB + nB[BB + 2] * bB + nB[BB + 3] * xB)
        }
        let nI = .6 - EB * EB - DB * DB - KB * KB - VB * VB;
        if (nI < 0) hB = 0;
        else {
          const BB = JB[TI + rB + JB[JI + mB + JB[oI + XB + JB[GI + LB]]]] % 32 * 4;
          nI *= nI, hB = nI * nI * (nB[BB] * EB + nB[BB + 1] * DB + nB[BB + 2] * KB + nB[BB + 3] * VB)
        }
        let hI = .6 - SB * SB - BI * BI - II * II - ZI * ZI;
        if (hI < 0) zB = 0;
        else {
          const BB = JB[TI + 1 + JB[JI + 1 + JB[oI + 1 + JB[GI + 1]]]] % 32 * 4;
          hI *= hI, zB = hI * hI * (nB[BB] * SB + nB[BB + 1] * BI + nB[BB + 2] * II + nB[BB + 3] * ZI)
        }
        return 27 * (oB + GB + cB + hB + zB)
      }
    }
  }
};
Object.freeze(modules);
for (const BB in modules) Object.freeze(modules[BB]);