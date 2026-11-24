/*! For license information please see 7zvlu.222.81a10c82.chunk.js.LICENSE.txt */
export const id = 222;
export const ids = [222];
export const modules = {
  39654: (BB, jB, zB) => {
    BB.exports = nB;
    var QB = zB(386);

    function nB(BB, jB) {
      if (!(this instanceof nB)) return new nB(BB, jB);
      var zB = QB.create();
      QB.add(zB, BB, jB), this.base = QB.min(QB.create(), BB, zB), this.vec = QB.clone(jB), this.max = QB.max(QB.create(), BB, zB), this.mag = QB.length(this.vec)
    }
    var dB = nB.prototype;
    dB.width = function() {
      return this.vec[0]
    }, dB.height = function() {
      return this.vec[1]
    }, dB.depth = function() {
      return this.vec[2]
    }, dB.x0 = function() {
      return this.base[0]
    }, dB.y0 = function() {
      return this.base[1]
    }, dB.z0 = function() {
      return this.base[2]
    }, dB.x1 = function() {
      return this.max[0]
    }, dB.y1 = function() {
      return this.max[1]
    }, dB.z1 = function() {
      return this.max[2]
    }, dB.translate = function(BB) {
      return QB.add(this.max, this.max, BB), QB.add(this.base, this.base, BB), this
    }, dB.setPosition = function(BB) {
      return QB.add(this.max, BB, this.vec), QB.copy(this.base, BB), this
    }, dB.expand = function(BB) {
      var jB = QB.create(),
        zB = QB.create();
      return QB.max(jB, BB.max, this.max), QB.min(zB, BB.base, this.base), QB.subtract(jB, jB, zB), new nB(zB, jB)
    }, dB.intersects = function(BB) {
      return !(BB.base[0] > this.max[0]) && (!(BB.base[1] > this.max[1]) && (!(BB.base[2] > this.max[2]) && (!(BB.max[0] < this.base[0]) && (!(BB.max[1] < this.base[1]) && !(BB.max[2] < this.base[2])))))
    }, dB.touches = function(BB) {
      var jB = this.union(BB);
      return null !== jB && (0 == jB.width() || 0 == jB.height() || 0 == jB.depth())
    }, dB.union = function(BB) {
      if (!this.intersects(BB)) return null;
      var jB = Math.max(BB.base[0], this.base[0]),
        zB = Math.max(BB.base[1], this.base[1]),
        QB = Math.max(BB.base[2], this.base[2]);
      return new nB([jB, zB, QB], [Math.min(BB.max[0], this.max[0]) - jB, Math.min(BB.max[1], this.max[1]) - zB, Math.min(BB.max[2], this.max[2]) - QB])
    }
  },
  39646: BB => {
    BB.exports = function(BB, jB, zB, QB, nB, dB) {
      var IB = +jB[0],
        NB = +jB[1],
        uB = +jB[2],
        UB = +zB[0],
        aB = +zB[1],
        pB = +zB[2],
        rB = Math.sqrt(UB * UB + aB * aB + pB * pB);
      if (0 === rB) throw new Error("Can't raycast along a zero vector");
      return function(BB, jB, zB, QB, nB, dB, IB, NB, uB, UB) {
        for (var aB = 0, pB = Math.floor, rB = 0 | pB(jB), sB = 0 | pB(zB), JB = 0 | pB(QB), mB = nB > 0 ? 1 : -1, yB = dB > 0 ? 1 : -1, kB = IB > 0 ? 1 : -1, GB = Math.abs(1 / nB), LB = Math.abs(1 / dB), gB = Math.abs(1 / IB), tB = GB < 1 / 0 ? GB * (mB > 0 ? rB + 1 - jB : jB - rB) : 1 / 0, SB = LB < 1 / 0 ? LB * (yB > 0 ? sB + 1 - zB : zB - sB) : 1 / 0, MB = gB < 1 / 0 ? gB * (kB > 0 ? JB + 1 - QB : QB - JB) : 1 / 0, EB = -1; aB <= NB;) {
          var iB = BB(rB, sB, JB);
          if (iB) return uB && (uB[0] = jB + aB * nB, uB[1] = zB + aB * dB, uB[2] = QB + aB * IB), UB && (UB[0] = UB[1] = UB[2] = 0, 0 === EB && (UB[0] = -mB), 1 === EB && (UB[1] = -yB), 2 === EB && (UB[2] = -kB)), iB;
          tB < SB ? tB < MB ? (rB += mB, aB = tB, tB += GB, EB = 0) : (JB += kB, aB = MB, MB += gB, EB = 2) : SB < MB ? (sB += yB, aB = SB, SB += LB, EB = 1) : (JB += kB, aB = MB, MB += gB, EB = 2)
        }
        return uB && (uB[0] = jB + aB * nB, uB[1] = zB + aB * dB, uB[2] = QB + aB * IB), UB && (UB[0] = UB[1] = UB[2] = 0), 0
      }(BB, IB, NB, uB, UB /= rB, aB /= rB, pB /= rB, QB = "undefined" === typeof QB ? 64 : +QB, nB, dB)
    }
  },
  39203: (BB, jB, zB) => {
    zB.d(jB, {
      e: () => NB,
      h: () => dB
    });
    var QB = zB(4169);
    let nB = null;

    function dB(BB) {
      return null !== nB && BB === nB
    }

    function IB() {
      this.oW = !1, this.stopPropagation = !1, this.DW = !1, this.disabled = !1
    }
    class NB {
      constructor(BB, jB) {
        this.version = "0.7.0";
        var zB = Object.assign({}, new IB, jB || {});
        this.element = BB || document, this.oW = !!zB.oW, this.stopPropagation = !!zB.stopPropagation, this.DW = !!zB.DW, this.disabled = !!zB.disabled, this.filterEvents = (BB, jB) => !0, this.ignoreEvent = BB => !1, this.down = new QB.EventEmitter, this.up = new QB.EventEmitter, this.state = {}, this.FW = {
          dx: 0,
          dy: 0,
          RBB: 0,
          BjB: 0,
          jjB: 0
        }, this.pressCount = {}, this.releaseCount = {}, this._keyBindmap = {}, this._keyStates = {}, this._bindPressCount = {}, this._touches = {
          lastX: 0,
          lastY: 0,
          currID: null
        }, "loading" !== document.readyState ? UB(this) : document.addEventListener("DOMContentLoaded", (BB => {
          UB(this)
        }), {
          once: !0
        })
      }
      bind(BB) {
        for (var jB = arguments.length, zB = new Array(jB > 1 ? jB - 1 : 0), QB = 1; QB < jB; QB++) zB[QB - 1] = arguments[QB];
        zB.forEach((jB => {
          var zB = this._keyBindmap[jB] || [];
          zB.includes(BB) || (zB.push(BB), this._keyBindmap[jB] = zB)
        })), this.state[BB] = !!this.state[BB], this.pressCount[BB] = this.pressCount[BB] || 0, this.releaseCount[BB] = this.releaseCount[BB] || 0
      }
      unbind(BB) {
        for (var jB in this._keyBindmap) {
          var zB = this._keyBindmap[jB],
            QB = zB.indexOf(BB);
          QB > -1 && zB.splice(QB, 1)
        }
      }
      getBindings() {
        var BB = {};
        for (var jB in this._keyBindmap) {
          this._keyBindmap[jB].forEach((zB => {
            BB[zB] = BB[zB] || [], BB[zB].push(jB)
          }))
        }
        return BB
      }
      vp() {
        uB(this.FW), uB(this.pressCount), uB(this.releaseCount)
      }
    }

    function uB(BB) {
      for (var jB in BB) BB[jB] = 0
    }

    function UB(BB) {
      window.addEventListener("keydown", yB.bind(null, BB, !0), !1), window.addEventListener("keyup", yB.bind(null, BB, !1), !1);
      var jB = {
        passive: !0
      };
      BB.element.addEventListener("touchstart", sB.bind(void 0, BB), {
        passive: !1
      }), BB.element.addEventListener("touchend", mB.bind(void 0, BB), jB), BB.element.addEventListener("mousedown", kB.bind(null, BB, !0), jB), window.document.addEventListener("mouseup", kB.bind(null, BB, !1), jB), BB.element.addEventListener("touchmove", GB.bind(null, BB), jB), BB.element.addEventListener("mousemove", GB.bind(null, BB), jB), window.PointerEvent, BB.element.addEventListener("wheel", LB.bind(null, BB), jB), BB.element.addEventListener("contextmenu", gB.bind(null, BB), !1), window.addEventListener("blur", MB.bind(null, BB), !1)
    }
    var aB = 0,
      pB = 0,
      rB = null;

    function sB(BB, jB) {
      jB.preventDefault(), JB(jB)
    }

    function JB(BB) {
      let jB = !1;
      for (let zB = 0; zB < BB.touches.length; ++zB)
        if (BB.touches[zB].identifier === rB) {
          jB = !0;
          break
        } if (!jB) {
        const jB = BB.changedTouches[0];
        aB = jB.clientX, pB = jB.clientY, rB = jB.identifier
      }
    }

    function mB(BB, jB) {
      for (var zB = jB.changedTouches, QB = 0; QB < zB.length; ++QB) zB[QB].identifier === rB && (rB = null)
    }

    function yB(BB, jB, zB) {
      if (!BB.ignoreEvent(zB)) try {
        EB(BB, zB), jB && zB.isTrusted && !zB.repeat && BB._keyStates[zB.code] && iB(BB, zB.code)
      } finally {
        qB(zB.code, jB, BB, zB)
      }
    }

    function kB(BB, jB, zB) {
      if (!BB.ignoreEvent(zB)) try {
        EB(BB, zB)
      } finally {
        ! function(BB, jB, zB) {
          if ("pointerId" in zB)
            if (jB) {
              if (null !== BB._touches.currID) return;
              BB._touches.currID = zB.pointerId
            } else {
              if (BB._touches.currID !== zB.pointerId) return;
              BB._touches.currID = null
            } var QB = "button" in zB ? zB.button + 1 : 1;
          qB("Mouse" + QB, jB, BB, zB)
        }(BB, jB, zB)
      }
    }

    function GB(BB, jB) {
      var zB = jB.movementX || jB.mozMovementX || 0,
        QB = jB.movementY || jB.mozMovementY || 0;
      if (jB.touches && 0 === (zB | QB)) {
        var nB = function(BB) {
          JB(BB);
          for (let jB = 0; jB < BB.changedTouches.length; ++jB)
            if (BB.changedTouches[jB].identifier == rB) {
              const zB = BB.changedTouches[jB],
                QB = [zB.clientX - aB, zB.clientY - pB];
              return aB = zB.clientX, pB = zB.clientY, QB
            } return console.error(`Did not find touch id ${rB}`), [0, 0]
        }(jB);
        zB = nB[0], QB = nB[1]
      }
      BB.FW.dx += zB, BB.FW.dy += QB
    }

    function LB(BB, jB) {
      EB(BB, jB);
      var zB = 1;
      switch (jB.deltaMode) {
        case 0:
          zB = 1;
          break;
        case 1:
          zB = 12;
          break;
        case 2:
          zB = BB.element.clientHeight || window.innerHeight
      }
      BB.FW.RBB += (jB.deltaX || 0) * zB, BB.FW.BjB += (jB.deltaY || 0) * zB, BB.FW.jjB += (jB.deltaZ || 0) * zB
    }

    function gB(BB, jB) {
      if (!BB.DW) return jB.preventDefault(), !1
    }
    var tB = {
      AltLeft: "altKey",
      AltRight: "altKey",
      ControlLeft: "ctrlKey",
      ControlRight: "ctrlKey",
      ShiftLeft: "shiftKey",
      ShiftRight: "shiftKey",
      MetaLeft: "metaKey",
      MetaRight: "metaKey"
    };

    function SB(BB, jB) {
      return !!BB[tB[jB]] || ("AltRight" === jB || "ControlLeft" === jB) && "function" === typeof BB.getModifierState && !0 === BB.getModifierState("AltGraph")
    }

    function MB(BB, jB) {
      for (var zB in BB._modifiersHeldThroughBlur = {}, tB) BB._keyStates[zB] && (BB._modifiersHeldThroughBlur[zB] = !0);
      jB && jB.isTrusted && function() {
        try {
          return window.self !== window.top
        } catch (BB) {
          return !0
        }
      }() && (clearTimeout(BB._blurRelease), BB._blurRelease = setTimeout((function() {
        if (!document.hasFocus())
          for (var jB in BB._modifiersHeldThroughBlur = {}, BB._keyStates) BB._keyStates[jB] && !/^Mouse\d/.test(jB) && iB(BB, jB)
      }), 0))
    }

    function EB(BB, jB) {
      var zB = BB._modifiersHeldThroughBlur;
      if (zB && jB.isTrusted && document.hasFocus())
        for (var QB in zB) delete zB[QB], BB._keyStates[QB] && QB !== jB.code && (SB(jB, QB) || iB(BB, QB))
    }

    function iB(BB, jB) {
      const zB = {
          code: jB,
          preventDefault: () => {},
          stopPropagation: () => {}
        },
        QB = nB;
      nB = zB;
      try {
        qB(jB, !1, BB, zB)
      } finally {
        nB = QB
      }
    }

    function qB(BB, jB, zB, QB) {
      var nB = zB._keyBindmap[BB];
      nB && (fB(zB._keyStates[BB], jB) && (zB._keyStates[BB] = jB, nB.forEach((BB => {
        (!zB.filterEvents || zB.filterEvents(QB, BB)) && function(BB, jB, zB, QB) {
          var nB = jB ? zB.pressCount : zB.releaseCount;
          nB[BB] = (nB[BB] || 0) + 1;
          var dB = zB._bindPressCount[BB] || 0;
          (dB += jB ? 1 : -1) < 0 && (dB = 0);
          zB._bindPressCount[BB] = dB;
          var IB = zB.state[BB];
          if (fB(IB, dB)) {
            zB.state[BB] = dB > 0;
            var NB = jB ? zB.down : zB.up;
            zB.disabled || NB.emit(BB, QB)
          }
        }(BB, jB, zB, QB)
      }))), "button" in QB || (zB.oW && !QB.defaultPrevented && QB.preventDefault(), zB.stopPropagation && QB.stopPropagation()))
    }

    function fB(BB, jB) {
      return BB ? !jB : jB
    }
  },
  36619: (BB, jB) => {
    function zB(BB) {
      if (BB && "object" === typeof BB) {
        var jB = BB.which || BB.keyCode || BB.charCode;
        jB && (BB = jB)
      }
      if ("number" === typeof BB) return IB[BB];
      var zB, dB = String(BB);
      return (zB = QB[dB.toLowerCase()]) ? zB : (zB = nB[dB.toLowerCase()]) || (1 === dB.length ? dB.charCodeAt(0) : void 0)
    }
    zB.isEventKey = function(BB, jB) {
      if (BB && "object" === typeof BB) {
        var zB = BB.which || BB.keyCode || BB.charCode;
        if (null === zB || void 0 === zB) return !1;
        if ("string" === typeof jB) {
          var dB;
          if (dB = QB[jB.toLowerCase()]) return dB === zB;
          if (dB = nB[jB.toLowerCase()]) return dB === zB
        } else if ("number" === typeof jB) return jB === zB;
        return !1
      }
    };
    var QB = (jB = BB.exports = zB).code = jB.codes = {
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
      nB = jB.aliases = {
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
    for (dB = 97; dB < 123; dB++) QB[String.fromCharCode(dB)] = dB - 32;
    for (var dB = 48; dB < 58; dB++) QB[dB - 48] = dB;
    for (dB = 1; dB < 13; dB++) QB["f" + dB] = dB + 111;
    for (dB = 0; dB < 10; dB++) QB["numpad " + dB] = dB + 96;
    var IB = jB.names = jB.title = {};
    for (dB in QB) IB[QB[dB]] = dB;
    for (var NB in nB) QB[NB] = nB[NB]
  },
  39639: (BB, jB, zB) => {
    zB.d(jB, {
      e: () => QB
    });
    class QB {
      constructor() {
        let BB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
          jB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 10;
        this.hV = !1, this.XV = !1, this.KF = 30, this.oV = 0, this.lV = 100, this.Ky = !1, this.fullscreen = !1, this.mG = function(BB) {}, this.wV = function(BB, jB, zB) {}, this.cV = function() {}, this.rG = function() {}, this.xV = function() {}, this.onFullscreenChanged = function() {}, this.onPointerLockError = function(BB) {}, this._data = new nB(jB),
          function(BB) {
            if ("loading" === document.readyState) {
              var jB = () => {
                document.removeEventListener("readystatechange", jB), BB()
              };
              document.addEventListener("readystatechange", jB)
            } else setTimeout(BB, 0)
          }((() => {
            ! function(BB) {
              var jB = BB._data,
                zB = jB.nowObject.now();
              jB.lastTickStarted = zB, jB.lastFrameStarted = zB, jB.lastRenderStarted = zB, jB.frameCB = () => function(BB) {
                var jB = BB._data;
                requestAnimationFrame(jB.frameCB), NB(BB);
                var zB = jB.nowObject.now(),
                  QB = zB - jB.lastFrameStarted;
                if (jB.lastFrameStarted = zB, BB.oV > 0) {
                  jB.renderAccum += QB;
                  var nB = 1e3 / BB.oV;
                  if (jB.renderAccum < nB) return;
                  jB.renderAccum -= nB, jB.renderAccum > nB && (jB.renderAccum = nB)
                }
                var dB = zB - jB.lastRenderStarted;
                jB.lastRenderStarted = zB;
                var IB = 1e3 / BB.KF,
                  uB = (zB - jB.lastTickStarted) / IB;
                uB < 0 && (uB = 0);
                BB.wV(dB, uB, IB), setTimeout(NB, 0, BB, !0)
              }(BB), jB.intervalCB = () => NB(BB), requestAnimationFrame(jB.frameCB), jB.pollTime > 0 && (jB.intervalID = setInterval(jB.intervalCB, Math.max(jB.pollTime, 1e3 / BB.KF / 2)))
            }(this),
            function(BB, jB) {
              if (!jB) return;
              var zB = !1,
                QB = !1,
                nB = BB => {
                  if (!!BB !== (zB = jB === document.pointerLockElement))
                    if (BB) {
                      var QB = jB.requestPointerLock();
                      QB && QB.catch && QB.catch((BB => {}))
                    } else document.exitPointerLock()
                },
                dB = BB => {
                  !!BB !== (QB = jB === document.fullscreenElement) && (BB ? jB.requestFullscreen ? jB.requestFullscreen() : jB.webkitRequestFullscreen && jB.webkitRequestFullscreen() : document.exitFullscreen ? document.exitFullscreen() : document.webkitExitFullscreen && document.webkitExitFullscreen())
                };
              document.addEventListener("pointerlockchange", (QB => {
                zB = jB === document.pointerLockElement, BB.xV(zB)
              })), document.addEventListener("fullscreenchange", (zB => {
                QB = jB === document.fullscreenElement, BB.onFullscreenChanged(QB)
              })), document.addEventListener("pointerlockerror", (QB => {
                zB = jB === document.pointerLockElement, BB.onPointerLockError(QB)
              })), Object.defineProperty(BB, "Ky", {
                get: () => zB,
                set: nB
              }), Object.defineProperty(BB, "fullscreen", {
                get: () => QB,
                set: dB
              }), jB.addEventListener("click", (jB => {
                BB.hV && nB(!0), BB.XV && dB(!0)
              }));
              var IB = () => BB.rG();
              if (window.ResizeObserver) {
                new ResizeObserver(IB).observe(jB)
              } else window.addEventListener("resize", IB)
            }(this, BB), this.cV()
          }))
      }
    }

    function nB() {
      let BB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 10;
      this.nowObject = performance || Date, this.pollTime = BB, this.renderAccum = 0, this.lastTickStarted = 0, this.lastFrameStarted = 0, this.lastRenderStarted = 0, this.avgTickTime = 2, this.frameCB = null, this.intervalCB = null, this.intervalID = -1
    }
    var dB = 3,
      IB = 20;

    function NB(BB) {
      for (var jB = BB._data, zB = 1e3 / BB.KF, QB = jB.nowObject.now() + IB, nB = 0; jB.nowObject.now() >= jB.lastTickStarted + zB && jB.nowObject.now() < QB && ++nB <= dB;) BB.mG(zB), jB.lastTickStarted += zB;
      var NB = 5 * (zB + 5),
        uB = jB.nowObject.now();
      if (uB - jB.lastTickStarted > NB)
        for (; uB >= jB.lastTickStarted + zB;) jB.lastTickStarted += zB
    }
  },
  36775: (BB, jB, zB) => {
    zB.d(jB, {
      b: () => IB
    });
    var QB = zB(62);
    const nB = QB.useLayoutEffect;
    const dB = function(BB) {
      var jB = (0, QB.useRef)(BB);
      return nB((function() {
        jB.current = BB
      })), jB
    };
    var IB = function(BB) {
      var jB = dB(BB);
      (0, QB.useEffect)((function() {
        var BB = function(BB) {
          var zB;
          if (null != jB.current && (zB = jB.current(BB)), BB.defaultPrevented && (BB.returnValue = ""), "string" === typeof zB) return BB.returnValue = zB, zB
        };
        return window.addEventListener("beforeunload", BB),
          function() {
            window.removeEventListener("beforeunload", BB)
          }
      }), [])
    }
  },
  36662: BB => {
    var jB, zB = "undefined" !== typeof window ? window.navigator.userAgent : "",
      QB = /OS X/.test(zB),
      nB = /Opera/.test(zB),
      dB = !/like Gecko/.test(zB) && !nB,
      IB = BB.exports = {
        0: QB ? "<menu>" : "<UNK>",
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
        93: QB ? "<meta>" : "<menu>",
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
        173: QB && dB ? "-" : "<volume-mute>",
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
        231: nB ? "`" : "<unicode>",
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
    for (jB = 58; jB < 65; ++jB) IB[jB] = String.fromCharCode(jB);
    for (jB = 48; jB < 58; ++jB) IB[jB] = jB - 48 + "";
    for (jB = 65; jB < 91; ++jB) IB[jB] = String.fromCharCode(jB);
    for (jB = 96; jB < 106; ++jB) IB[jB] = "<num-" + (jB - 96) + ">";
    for (jB = 112; jB < 136; ++jB) IB[jB] = "F" + (jB - 111)
  },
  39093: (BB, jB, zB) => {
    function QB(BB, jB, zB, QB, nB) {
      var dB = {};
      return Object.keys(QB).forEach((function(BB) {
        dB[BB] = QB[BB]
      })), dB.enumerable = !!dB.enumerable, dB.configurable = !!dB.configurable, ("value" in dB || dB.initializer) && (dB.writable = !0), dB = zB.slice().reverse().reduce((function(zB, QB) {
        return QB(BB, jB, zB) || zB
      }), dB), nB && void 0 !== dB.initializer && (dB.value = dB.initializer ? dB.initializer.call(nB) : void 0, dB.initializer = void 0), void 0 === dB.initializer && (Object.defineProperty(BB, jB, dB), dB = null), dB
    }
    zB.d(jB, {
      d: () => QB
    })
  },
  39087: (BB, jB, zB) => {
    function QB(BB, jB, zB, QB) {
      zB && Object.defineProperty(BB, jB, {
        enumerable: zB.enumerable,
        configurable: zB.configurable,
        writable: zB.writable,
        value: zB.initializer ? zB.initializer.call(QB) : void 0
      })
    }
    zB.d(jB, {
      c: () => QB
    })
  },
  38780: (BB, jB, zB) => {
    zB.d(jB, {
      e: () => dB
    });
    var QB = zB(38783);
    const nB = (BB, jB, zB) => BB ? BB.getClassName && "Mesh" === BB.getClassName() ? null : !BB.getClassName || "SubMesh" !== BB.getClassName() && "PhysicsBody" !== BB.getClassName() ? BB.clone ? BB.clone() : Array.isArray(BB) ? BB.slice() : zB && "object" === typeof BB ? {
      ...BB
    } : null : BB.clone(jB) : null;
    class dB {
      static DeepCopy(BB, jB, zB, dB) {
        let IB = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
        const NB = function(BB) {
          const jB = [];
          do {
            const zB = Object.getOwnPropertyNames(BB);
            for (const BB of zB) - 1 === jB.indexOf(BB) && jB.push(BB)
          } while (BB = Object.getPrototypeOf(BB));
          return jB
        }(BB);
        for (const UB of NB) {
          if ("_" === UB[0] && (!dB || -1 === dB.indexOf(UB))) continue;
          if (UB.endsWith("Observable")) continue;
          if (zB && -1 !== zB.indexOf(UB)) continue;
          const NB = BB[UB],
            aB = typeof NB;
          if ("function" !== aB) try {
            if ("object" === aB)
              if (NB instanceof Uint8Array) jB[UB] = Uint8Array.from(NB);
              else if (NB instanceof Array) {
              if (jB[UB] = [], NB.length > 0)
                if ("object" == typeof NB[0])
                  for (let BB = 0; BB < NB.length; BB++) {
                    const zB = nB(NB[BB], jB, IB); - 1 === jB[UB].indexOf(zB) && jB[UB].push(zB)
                  } else jB[UB] = NB.slice(0)
            } else jB[UB] = nB(NB, jB, IB);
            else jB[UB] = NB
          } catch (uB) {
            QB.c.Warn(uB.message)
          }
        }
      }
    }
  },
  38811: (BB, jB, zB) => {
    zB.d(jB, {
      b: () => nB,
      c: () => dB,
      f: () => IB,
      j: () => NB
    });
    var QB = zB(37379);
    class nB {
      constructor(BB, jB, zB) {
        this.gradient = BB, this.color1 = jB, this.color2 = zB
      }
      getColorToRef(BB) {
        this.color2 ? QB.g.LerpToRef(this.color1, this.color2, Math.random(), BB) : BB.jH(this.color1)
      }
    }
    class dB {
      constructor(BB, jB) {
        this.gradient = BB, this.color = jB
      }
    }
    class IB {
      constructor(BB, jB, zB) {
        this.gradient = BB, this.factor1 = jB, this.factor2 = zB
      }
      getFactor() {
        return void 0 === this.factor2 || this.factor2 === this.factor1 ? this.factor1 : this.factor1 + (this.factor2 - this.factor1) * Math.random()
      }
    }
    class NB {
      static GetCurrentGradient(BB, jB, zB) {
        if (jB[0].gradient > BB) return void zB(jB[0], jB[0], 1);
        for (let nB = 0; nB < jB.length - 1; nB++) {
          const QB = jB[nB],
            dB = jB[nB + 1];
          if (BB >= QB.gradient && BB <= dB.gradient) {
            return void zB(QB, dB, (BB - QB.gradient) / (dB.gradient - QB.gradient))
          }
        }
        const QB = jB.length - 1;
        zB(jB[QB], jB[QB], 1)
      }
    }
  },
  38783: (BB, jB, zB) => {
    zB.d(jB, {
      c: () => QB
    });
    class QB {
      static _CheckLimit(BB, jB) {
        let zB = QB._LogLimitOutputs[BB];
        return zB ? zB.current++ : (zB = {
          limit: jB,
          current: 1
        }, QB._LogLimitOutputs[BB] = zB), zB.current <= zB.limit
      }
      static _GenerateLimitMessage(BB) {
        let jB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
        const zB = QB._LogLimitOutputs[BB];
        if (!zB || !QB.MessageLimitReached) return;
        const nB = this._Levels[jB];
        zB.current === zB.limit && QB[nB.name](QB.MessageLimitReached.replace(/%LIMIT%/g, "" + zB.limit).replace(/%TYPE%/g, nB.name ?? ""))
      }
      static _AddLogEntry(BB) {
        QB._LogCache = BB + QB._LogCache, QB.OnNewCacheEntry && QB.OnNewCacheEntry(BB)
      }
      static _FormatMessage(BB) {
        const jB = BB => BB < 10 ? "0" + BB : "" + BB,
          zB = new Date;
        return "[" + jB(zB.getHours()) + ":" + jB(zB.getMinutes()) + ":" + jB(zB.getSeconds()) + "]: " + BB
      }
      static _LogDisabled(BB, jB) {}
      static _LogEnabled() {
        let BB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
          jB = arguments.length > 1 ? arguments[1] : void 0,
          zB = arguments.length > 2 ? arguments[2] : void 0;
        const nB = Array.isArray(jB) ? jB[0] : jB;
        if (void 0 !== zB && !QB._CheckLimit(nB, zB)) return;
        const dB = QB._FormatMessage(nB),
          IB = this._Levels[BB],
          NB = Array.isArray(jB) ? jB.slice(1) : [];
        IB.logFunc && IB.logFunc("BJS - " + dB, ...NB);
        const uB = `<div style='color:${IB.color}'>${dB}</div><br>`;
        QB._AddLogEntry(uB), QB._GenerateLimitMessage(nB, BB)
      }
      static get LogCache() {
        return QB._LogCache
      }
      static ClearLogCache() {
        QB._LogCache = "", QB._LogLimitOutputs = {}, QB.errorsCount = 0
      }
      static set LogLevels(BB) {
        QB.Log = QB._LogDisabled, QB.Warn = QB._LogDisabled, QB.Error = QB._LogDisabled;
        const jB = [QB.MessageLogLevel, QB.WarningLogLevel, QB.ErrorLogLevel];
        for (const zB of jB)
          if ((BB & zB) === zB) {
            const BB = this._Levels[zB];
            QB[BB.name] = QB._LogEnabled.bind(QB, zB)
          }
      }
    }
    QB.NoneLogLevel = 0, QB.MessageLogLevel = 1, QB.WarningLogLevel = 2, QB.ErrorLogLevel = 4, QB.AllLogLevel = 7, QB.MessageLimitReached = "Too many %TYPE%s (%LIMIT%), no more %TYPE%s will be reported for this message.", QB._LogCache = "", QB._LogLimitOutputs = {}, QB._Levels = [{}, {
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
    }], QB.errorsCount = 0, QB.Log = QB._LogEnabled.bind(QB, QB.MessageLogLevel), QB.Warn = QB._LogEnabled.bind(QB, QB.WarningLogLevel), QB.Error = QB._LogEnabled.bind(QB, QB.ErrorLogLevel)
  },
  38813: (BB, jB, zB) => {
    zB.d(jB, {
      c: () => IB
    });
    var QB = zB(37171),
      nB = zB(37208),
      dB = zB(38780);
    class IB {
      constructor() {
        this.direction1 = new QB.m(0, 1, 0), this.direction2 = new QB.m(0, 1, 0), this.minEmitBox = new QB.m(-.5, -.5, -.5), this.maxEmitBox = new QB.m(.5, .5, .5)
      }
      startDirectionFunction(BB, jB, zB, dB) {
        const IB = (0, nB.RandomRange)(this.direction1.x, this.direction2.x),
          NB = (0, nB.RandomRange)(this.direction1.y, this.direction2.y),
          uB = (0, nB.RandomRange)(this.direction1.z, this.direction2.z);
        if (dB) return jB.x = IB, jB.y = NB, void(jB.z = uB);
        QB.m.TransformNormalFromFloatsToRef(IB, NB, uB, BB, jB)
      }
      startPositionFunction(BB, jB, zB, dB) {
        const IB = (0, nB.RandomRange)(this.minEmitBox.x, this.maxEmitBox.x),
          NB = (0, nB.RandomRange)(this.minEmitBox.y, this.maxEmitBox.y),
          uB = (0, nB.RandomRange)(this.minEmitBox.z, this.maxEmitBox.z);
        if (dB) return jB.x = IB, jB.y = NB, void(jB.z = uB);
        QB.m.TransformCoordinatesFromFloatsToRef(IB, NB, uB, BB, jB)
      }
      clone() {
        const BB = new IB;
        return dB.e.DeepCopy(this, BB), BB
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
        return BB.type = this.getClassName(), BB.direction1 = this.direction1.nQB(), BB.direction2 = this.direction2.nQB(), BB.minEmitBox = this.minEmitBox.nQB(), BB.maxEmitBox = this.maxEmitBox.nQB(), BB
      }
      parse(BB) {
        QB.m.FromArrayToRef(BB.direction1, 0, this.direction1), QB.m.FromArrayToRef(BB.direction2, 0, this.direction2), QB.m.FromArrayToRef(BB.minEmitBox, 0, this.minEmitBox), QB.m.FromArrayToRef(BB.maxEmitBox, 0, this.maxEmitBox)
      }
    }
  },
  38773: (BB, jB, zB) => {
    zB.d(jB, {
      d: () => NB,
      g: () => IB
    });
    var QB = zB(37171),
      nB = zB(37208),
      dB = zB(38780);
    class IB {
      constructor() {
        let BB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
          jB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
          zB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1,
          nB = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
        this.radius = BB, this.height = jB, this.radiusRange = zB, this.directionRandomizer = nB, this._tempVector = QB.m.Zero()
      }
      startDirectionFunction(BB, jB, zB, dB, IB) {
        zB.position.subtractToRef(BB.getTranslation(), this._tempVector), this._tempVector.normalize(), QB.m.TransformNormalToRef(this._tempVector, IB, this._tempVector);
        const NB = (0, nB.RandomRange)(-this.directionRandomizer / 2, this.directionRandomizer / 2);
        let uB = Math.atan2(this._tempVector.x, this._tempVector.z);
        uB += (0, nB.RandomRange)(-Math.PI / 2, Math.PI / 2) * this.directionRandomizer, this._tempVector.y = NB, this._tempVector.x = Math.sin(uB), this._tempVector.z = Math.cos(uB), this._tempVector.normalize(), dB ? jB.jH(this._tempVector) : QB.m.TransformNormalFromFloatsToRef(this._tempVector.x, this._tempVector.y, this._tempVector.z, BB, jB)
      }
      startPositionFunction(BB, jB, zB, dB) {
        const IB = (0, nB.RandomRange)(-this.height / 2, this.height / 2),
          NB = (0, nB.RandomRange)(0, 2 * Math.PI),
          uB = (0, nB.RandomRange)((1 - this.radiusRange) * (1 - this.radiusRange), 1),
          UB = Math.sqrt(uB) * this.radius,
          aB = UB * Math.cos(NB),
          pB = UB * Math.sin(NB);
        dB ? jB.U3(aB, IB, pB) : QB.m.TransformCoordinatesFromFloatsToRef(aB, IB, pB, BB, jB)
      }
      clone() {
        const BB = new IB(this.radius, this.directionRandomizer);
        return dB.e.DeepCopy(this, BB), BB
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
    class NB extends IB {
      constructor() {
        let BB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
          jB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
          zB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1,
          nB = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : new QB.m(0, 1, 0),
          dB = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : new QB.m(0, 1, 0);
        super(BB, jB, zB), this.direction1 = nB, this.direction2 = dB
      }
      startDirectionFunction(BB, jB, zB, dB) {
        const IB = (0, nB.RandomRange)(this.direction1.x, this.direction2.x),
          NB = (0, nB.RandomRange)(this.direction1.y, this.direction2.y),
          uB = (0, nB.RandomRange)(this.direction1.z, this.direction2.z);
        dB ? jB.U3(IB, NB, uB) : QB.m.TransformNormalFromFloatsToRef(IB, NB, uB, BB, jB)
      }
      clone() {
        const BB = new NB(this.radius, this.height, this.radiusRange, this.direction1, this.direction2);
        return dB.e.DeepCopy(this, BB), BB
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
        return BB.direction1 = this.direction1.nQB(), BB.direction2 = this.direction2.nQB(), BB
      }
      parse(BB) {
        super.parse(BB), QB.m.FromArrayToRef(BB.direction1, 0, this.direction1), QB.m.FromArrayToRef(BB.direction2, 0, this.direction2)
      }
    }
  },
  38904: (BB, jB, zB) => {
    zB.d(jB, {
      c: () => pB
    });
    const QB = .5 * (Math.sqrt(3) - 1),
      nB = (3 - Math.sqrt(3)) / 6,
      dB = 1 / 3,
      IB = 1 / 6,
      NB = (Math.sqrt(5) - 1) / 4,
      uB = (5 - Math.sqrt(5)) / 20,
      UB = new Float32Array([1, 1, 0, -1, 1, 0, 1, -1, 0, -1, -1, 0, 1, 0, 1, -1, 0, 1, 1, 0, -1, -1, 0, -1, 0, 1, 1, 0, -1, 1, 0, 1, -1, 0, -1, -1]),
      aB = new Float32Array([0, 1, 1, 1, 0, 1, 1, -1, 0, 1, -1, 1, 0, 1, -1, -1, 0, -1, 1, 1, 0, -1, 1, -1, 0, -1, -1, 1, 0, -1, -1, -1, 1, 0, 1, 1, 1, 0, 1, -1, 1, 0, -1, 1, 1, 0, -1, -1, -1, 0, 1, 1, -1, 0, 1, -1, -1, 0, -1, 1, -1, 0, -1, -1, 1, 1, 0, 1, 1, 1, 0, -1, 1, -1, 0, 1, 1, -1, 0, -1, -1, 1, 0, 1, -1, 1, 0, -1, -1, -1, 0, 1, -1, -1, 0, -1, 1, 1, 1, 0, 1, 1, -1, 0, 1, -1, 1, 0, 1, -1, -1, 0, -1, 1, 1, 0, -1, 1, -1, 0, -1, -1, 1, 0, -1, -1, -1, 0]);
    const pB = class {
      constructor() {
        let BB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Math.random;
        const jB = "function" == typeof BB ? BB : function(BB) {
          let jB = 0,
            zB = 0,
            QB = 0,
            nB = 1;
          const dB = function() {
            let BB = 4022871197;
            return function(jB) {
              jB = jB.toString();
              for (let zB = 0; zB < jB.length; zB++) {
                BB += jB.charCodeAt(zB);
                let QB = .02519603282416938 * BB;
                BB = QB >>> 0, QB -= BB, QB *= BB, BB = QB >>> 0, QB -= BB, BB += 4294967296 * QB
              }
              return 2.3283064365386963e-10 * (BB >>> 0)
            }
          }();
          jB = dB(" "), zB = dB(" "), QB = dB(" "), jB -= dB(BB), jB < 0 && (jB += 1);
          zB -= dB(BB), zB < 0 && (zB += 1);
          QB -= dB(BB), QB < 0 && (QB += 1);
          return function() {
            const BB = 2091639 * jB + 2.3283064365386963e-10 * nB;
            return jB = zB, zB = QB, QB = BB - (nB = 0 | BB)
          }
        }(BB);
        this.p = function(BB) {
          const jB = new Uint8Array(256);
          for (let zB = 0; zB < 256; zB++) jB[zB] = zB;
          for (let zB = 0; zB < 255; zB++) {
            const QB = zB + ~~(BB() * (256 - zB)),
              nB = jB[zB];
            jB[zB] = jB[QB], jB[QB] = nB
          }
          return jB
        }(jB), this.perm = new Uint8Array(512), this.permMod12 = new Uint8Array(512);
        for (let zB = 0; zB < 512; zB++) this.perm[zB] = this.p[255 & zB], this.permMod12[zB] = this.perm[zB] % 12
      }
      noise2D(BB, jB) {
        const zB = this.permMod12,
          dB = this.perm;
        let IB = 0,
          NB = 0,
          uB = 0;
        const aB = (BB + jB) * QB,
          pB = Math.floor(BB + aB),
          rB = Math.floor(jB + aB),
          sB = (pB + rB) * nB,
          JB = BB - (pB - sB),
          mB = jB - (rB - sB);
        let yB, kB;
        JB > mB ? (yB = 1, kB = 0) : (yB = 0, kB = 1);
        const GB = JB - yB + nB,
          LB = mB - kB + nB,
          gB = JB - 1 + 2 * nB,
          tB = mB - 1 + 2 * nB,
          SB = 255 & pB,
          MB = 255 & rB;
        let EB = .5 - JB * JB - mB * mB;
        if (EB >= 0) {
          const BB = 3 * zB[SB + dB[MB]];
          EB *= EB, IB = EB * EB * (UB[BB] * JB + UB[BB + 1] * mB)
        }
        let iB = .5 - GB * GB - LB * LB;
        if (iB >= 0) {
          const BB = 3 * zB[SB + yB + dB[MB + kB]];
          iB *= iB, NB = iB * iB * (UB[BB] * GB + UB[BB + 1] * LB)
        }
        let qB = .5 - gB * gB - tB * tB;
        if (qB >= 0) {
          const BB = 3 * zB[SB + 1 + dB[MB + 1]];
          qB *= qB, uB = qB * qB * (UB[BB] * gB + UB[BB + 1] * tB)
        }
        return 70 * (IB + NB + uB)
      }
      noise3D(BB, jB, zB) {
        const QB = this.permMod12,
          nB = this.perm;
        let NB, uB, aB, pB;
        const rB = (BB + jB + zB) * dB,
          sB = Math.floor(BB + rB),
          JB = Math.floor(jB + rB),
          mB = Math.floor(zB + rB),
          yB = (sB + JB + mB) * IB,
          kB = BB - (sB - yB),
          GB = jB - (JB - yB),
          LB = zB - (mB - yB);
        let gB, tB, SB, MB, EB, iB;
        kB >= GB ? GB >= LB ? (gB = 1, tB = 0, SB = 0, MB = 1, EB = 1, iB = 0) : kB >= LB ? (gB = 1, tB = 0, SB = 0, MB = 1, EB = 0, iB = 1) : (gB = 0, tB = 0, SB = 1, MB = 1, EB = 0, iB = 1) : GB < LB ? (gB = 0, tB = 0, SB = 1, MB = 0, EB = 1, iB = 1) : kB < LB ? (gB = 0, tB = 1, SB = 0, MB = 0, EB = 1, iB = 1) : (gB = 0, tB = 1, SB = 0, MB = 1, EB = 1, iB = 0);
        const qB = kB - gB + IB,
          fB = GB - tB + IB,
          oB = LB - SB + IB,
          HB = kB - MB + 2 * IB,
          DB = GB - EB + 2 * IB,
          FB = LB - iB + 2 * IB,
          YB = kB - 1 + .5,
          VB = GB - 1 + .5,
          hB = LB - 1 + .5,
          XB = 255 & sB,
          ZB = 255 & JB,
          AB = 255 & mB;
        let TB = .6 - kB * kB - GB * GB - LB * LB;
        if (TB < 0) NB = 0;
        else {
          const BB = 3 * QB[XB + nB[ZB + nB[AB]]];
          TB *= TB, NB = TB * TB * (UB[BB] * kB + UB[BB + 1] * GB + UB[BB + 2] * LB)
        }
        let PB = .6 - qB * qB - fB * fB - oB * oB;
        if (PB < 0) uB = 0;
        else {
          const BB = 3 * QB[XB + gB + nB[ZB + tB + nB[AB + SB]]];
          PB *= PB, uB = PB * PB * (UB[BB] * qB + UB[BB + 1] * fB + UB[BB + 2] * oB)
        }
        let WB = .6 - HB * HB - DB * DB - FB * FB;
        if (WB < 0) aB = 0;
        else {
          const BB = 3 * QB[XB + MB + nB[ZB + EB + nB[AB + iB]]];
          WB *= WB, aB = WB * WB * (UB[BB] * HB + UB[BB + 1] * DB + UB[BB + 2] * FB)
        }
        let eB = .6 - YB * YB - VB * VB - hB * hB;
        if (eB < 0) pB = 0;
        else {
          const BB = 3 * QB[XB + 1 + nB[ZB + 1 + nB[AB + 1]]];
          eB *= eB, pB = eB * eB * (UB[BB] * YB + UB[BB + 1] * VB + UB[BB + 2] * hB)
        }
        return 32 * (NB + uB + aB + pB)
      }
      noise4D(BB, jB, zB, QB) {
        const nB = this.perm;
        let dB, IB, UB, pB, rB;
        const sB = (BB + jB + zB + QB) * NB,
          JB = Math.floor(BB + sB),
          mB = Math.floor(jB + sB),
          yB = Math.floor(zB + sB),
          kB = Math.floor(QB + sB),
          GB = (JB + mB + yB + kB) * uB,
          LB = BB - (JB - GB),
          gB = jB - (mB - GB),
          tB = zB - (yB - GB),
          SB = QB - (kB - GB);
        let MB = 0,
          EB = 0,
          iB = 0,
          qB = 0;
        LB > gB ? MB++ : EB++, LB > tB ? MB++ : iB++, LB > SB ? MB++ : qB++, gB > tB ? EB++ : iB++, gB > SB ? EB++ : qB++, tB > SB ? iB++ : qB++;
        const fB = MB >= 3 ? 1 : 0,
          oB = EB >= 3 ? 1 : 0,
          HB = iB >= 3 ? 1 : 0,
          DB = qB >= 3 ? 1 : 0,
          FB = MB >= 2 ? 1 : 0,
          YB = EB >= 2 ? 1 : 0,
          VB = iB >= 2 ? 1 : 0,
          hB = qB >= 2 ? 1 : 0,
          XB = MB >= 1 ? 1 : 0,
          ZB = EB >= 1 ? 1 : 0,
          AB = iB >= 1 ? 1 : 0,
          TB = qB >= 1 ? 1 : 0,
          PB = LB - fB + uB,
          WB = gB - oB + uB,
          eB = tB - HB + uB,
          lB = SB - DB + uB,
          wB = LB - FB + 2 * uB,
          xB = gB - YB + 2 * uB,
          KB = tB - VB + 2 * uB,
          CB = SB - hB + 2 * uB,
          cB = LB - XB + 3 * uB,
          bB = gB - ZB + 3 * uB,
          vB = tB - AB + 3 * uB,
          RB = SB - TB + 3 * uB,
          OB = LB - 1 + 4 * uB,
          Bj = gB - 1 + 4 * uB,
          jj = tB - 1 + 4 * uB,
          zj = SB - 1 + 4 * uB,
          Qj = 255 & JB,
          nj = 255 & mB,
          dj = 255 & yB,
          Ij = 255 & kB;
        let Nj = .6 - LB * LB - gB * gB - tB * tB - SB * SB;
        if (Nj < 0) dB = 0;
        else {
          const BB = nB[Qj + nB[nj + nB[dj + nB[Ij]]]] % 32 * 4;
          Nj *= Nj, dB = Nj * Nj * (aB[BB] * LB + aB[BB + 1] * gB + aB[BB + 2] * tB + aB[BB + 3] * SB)
        }
        let uj = .6 - PB * PB - WB * WB - eB * eB - lB * lB;
        if (uj < 0) IB = 0;
        else {
          const BB = nB[Qj + fB + nB[nj + oB + nB[dj + HB + nB[Ij + DB]]]] % 32 * 4;
          uj *= uj, IB = uj * uj * (aB[BB] * PB + aB[BB + 1] * WB + aB[BB + 2] * eB + aB[BB + 3] * lB)
        }
        let Uj = .6 - wB * wB - xB * xB - KB * KB - CB * CB;
        if (Uj < 0) UB = 0;
        else {
          const BB = nB[Qj + FB + nB[nj + YB + nB[dj + VB + nB[Ij + hB]]]] % 32 * 4;
          Uj *= Uj, UB = Uj * Uj * (aB[BB] * wB + aB[BB + 1] * xB + aB[BB + 2] * KB + aB[BB + 3] * CB)
        }
        let aj = .6 - cB * cB - bB * bB - vB * vB - RB * RB;
        if (aj < 0) pB = 0;
        else {
          const BB = nB[Qj + XB + nB[nj + ZB + nB[dj + AB + nB[Ij + TB]]]] % 32 * 4;
          aj *= aj, pB = aj * aj * (aB[BB] * cB + aB[BB + 1] * bB + aB[BB + 2] * vB + aB[BB + 3] * RB)
        }
        let pj = .6 - OB * OB - Bj * Bj - jj * jj - zj * zj;
        if (pj < 0) rB = 0;
        else {
          const BB = nB[Qj + 1 + nB[nj + 1 + nB[dj + 1 + nB[Ij + 1]]]] % 32 * 4;
          pj *= pj, rB = pj * pj * (aB[BB] * OB + aB[BB + 1] * Bj + aB[BB + 2] * jj + aB[BB + 3] * zj)
        }
        return 27 * (dB + IB + UB + pB + rB)
      }
    }
  }
};
Object.freeze(modules);
for (const BB in modules) Object.freeze(modules[BB]);