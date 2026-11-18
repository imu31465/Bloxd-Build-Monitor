/*! For license information please see symm5.198.febdf7b8.chunk.js.LICENSE.txt */
export const id = 198;
export const ids = [198];
export const modules = {
  38529: (JJ, cJ, ZJ) => {
    JJ.exports = UJ;
    var FJ = ZJ(250);

    function UJ(JJ, cJ) {
      if (!(this instanceof UJ)) return new UJ(JJ, cJ);
      var ZJ = FJ.create();
      FJ.add(ZJ, JJ, cJ), this.base = FJ.min(FJ.create(), JJ, ZJ), this.vec = FJ.clone(cJ), this.max = FJ.max(FJ.create(), JJ, ZJ), this.mag = FJ.length(this.vec)
    }
    var eJ = UJ.prototype;
    eJ.width = function() {
      return this.vec[0]
    }, eJ.height = function() {
      return this.vec[1]
    }, eJ.depth = function() {
      return this.vec[2]
    }, eJ.x0 = function() {
      return this.base[0]
    }, eJ.y0 = function() {
      return this.base[1]
    }, eJ.z0 = function() {
      return this.base[2]
    }, eJ.x1 = function() {
      return this.max[0]
    }, eJ.y1 = function() {
      return this.max[1]
    }, eJ.z1 = function() {
      return this.max[2]
    }, eJ.translate = function(JJ) {
      return FJ.add(this.max, this.max, JJ), FJ.add(this.base, this.base, JJ), this
    }, eJ.setPosition = function(JJ) {
      return FJ.add(this.max, JJ, this.vec), FJ.copy(this.base, JJ), this
    }, eJ.expand = function(JJ) {
      var cJ = FJ.create(),
        ZJ = FJ.create();
      return FJ.max(cJ, JJ.max, this.max), FJ.min(ZJ, JJ.base, this.base), FJ.subtract(cJ, cJ, ZJ), new UJ(ZJ, cJ)
    }, eJ.intersects = function(JJ) {
      return !(JJ.base[0] > this.max[0]) && (!(JJ.base[1] > this.max[1]) && (!(JJ.base[2] > this.max[2]) && (!(JJ.max[0] < this.base[0]) && (!(JJ.max[1] < this.base[1]) && !(JJ.max[2] < this.base[2])))))
    }, eJ.touches = function(JJ) {
      var cJ = this.union(JJ);
      return null !== cJ && (0 == cJ.width() || 0 == cJ.height() || 0 == cJ.depth())
    }, eJ.union = function(JJ) {
      if (!this.intersects(JJ)) return null;
      var cJ = Math.max(JJ.base[0], this.base[0]),
        ZJ = Math.max(JJ.base[1], this.base[1]),
        FJ = Math.max(JJ.base[2], this.base[2]);
      return new UJ([cJ, ZJ, FJ], [Math.min(JJ.max[0], this.max[0]) - cJ, Math.min(JJ.max[1], this.max[1]) - ZJ, Math.min(JJ.max[2], this.max[2]) - FJ])
    }
  },
  35753: JJ => {
    JJ.exports = function JJ(cJ, ZJ) {
      if (cJ === ZJ) return !0;
      if (cJ && ZJ && "object" == typeof cJ && "object" == typeof ZJ) {
        if (cJ.constructor !== ZJ.constructor) return !1;
        var FJ, UJ, eJ;
        if (Array.isArray(cJ)) {
          if ((FJ = cJ.length) != ZJ.length) return !1;
          for (UJ = FJ; 0 !== UJ--;)
            if (!JJ(cJ[UJ], ZJ[UJ])) return !1;
          return !0
        }
        if (cJ.constructor === RegExp) return cJ.source === ZJ.source && cJ.flags === ZJ.flags;
        if (cJ.valueOf !== Object.prototype.valueOf) return cJ.valueOf() === ZJ.valueOf();
        if (cJ.toString !== Object.prototype.toString) return cJ.toString() === ZJ.toString();
        if ((FJ = (eJ = Object.keys(cJ)).length) !== Object.keys(ZJ).length) return !1;
        for (UJ = FJ; 0 !== UJ--;)
          if (!Object.prototype.hasOwnProperty.call(ZJ, eJ[UJ])) return !1;
        for (UJ = FJ; 0 !== UJ--;) {
          var XJ = eJ[UJ];
          if (!JJ(cJ[XJ], ZJ[XJ])) return !1
        }
        return !0
      }
      return cJ !== cJ && ZJ !== ZJ
    }
  },
  38520: JJ => {
    JJ.exports = function(JJ, cJ, ZJ, FJ, UJ, eJ) {
      var XJ = +cJ[0],
        AJ = +cJ[1],
        qJ = +cJ[2],
        jJ = +ZJ[0],
        YJ = +ZJ[1],
        hJ = +ZJ[2],
        DJ = Math.sqrt(jJ * jJ + YJ * YJ + hJ * hJ);
      if (0 === DJ) throw new Error("Can't raycast along a zero vector");
      return function(JJ, cJ, ZJ, FJ, UJ, eJ, XJ, AJ, qJ, jJ) {
        for (var YJ = 0, hJ = Math.floor, DJ = 0 | hJ(cJ), sJ = 0 | hJ(ZJ), nJ = 0 | hJ(FJ), GJ = UJ > 0 ? 1 : -1, fJ = eJ > 0 ? 1 : -1, xJ = XJ > 0 ? 1 : -1, rJ = Math.abs(1 / UJ), vJ = Math.abs(1 / eJ), mJ = Math.abs(1 / XJ), QJ = rJ < 1 / 0 ? rJ * (GJ > 0 ? DJ + 1 - cJ : cJ - DJ) : 1 / 0, EJ = vJ < 1 / 0 ? vJ * (fJ > 0 ? sJ + 1 - ZJ : ZJ - sJ) : 1 / 0, VJ = mJ < 1 / 0 ? mJ * (xJ > 0 ? nJ + 1 - FJ : FJ - nJ) : 1 / 0, KJ = -1; YJ <= AJ;) {
          var yJ = JJ(DJ, sJ, nJ);
          if (yJ) return qJ && (qJ[0] = cJ + YJ * UJ, qJ[1] = ZJ + YJ * eJ, qJ[2] = FJ + YJ * XJ), jJ && (jJ[0] = jJ[1] = jJ[2] = 0, 0 === KJ && (jJ[0] = -GJ), 1 === KJ && (jJ[1] = -fJ), 2 === KJ && (jJ[2] = -xJ)), yJ;
          QJ < EJ ? QJ < VJ ? (DJ += GJ, YJ = QJ, QJ += rJ, KJ = 0) : (nJ += xJ, YJ = VJ, VJ += mJ, KJ = 2) : EJ < VJ ? (sJ += fJ, YJ = EJ, EJ += vJ, KJ = 1) : (nJ += xJ, YJ = VJ, VJ += mJ, KJ = 2)
        }
        return qJ && (qJ[0] = cJ + YJ * UJ, qJ[1] = ZJ + YJ * eJ, qJ[2] = FJ + YJ * XJ), jJ && (jJ[0] = jJ[1] = jJ[2] = 0), 0
      }(JJ, XJ, AJ, qJ, jJ /= DJ, YJ /= DJ, hJ /= DJ, FJ = "undefined" === typeof FJ ? 64 : +FJ, UJ, eJ)
    }
  },
  38060: (JJ, cJ, ZJ) => {
    ZJ.d(cJ, {
      b: () => AJ,
      d: () => eJ
    });
    var FJ = ZJ(3572);
    let UJ = null;

    function eJ(JJ) {
      return null !== UJ && JJ === UJ
    }

    function XJ() {
      this.kN = !1, this.stopPropagation = !1, this.pN = !1, this.disabled = !1
    }
    class AJ {
      constructor(JJ, cJ) {
        this.version = "0.7.0";
        var ZJ = Object.assign({}, new XJ, cJ || {});
        this.element = JJ || document, this.kN = !!ZJ.kN, this.stopPropagation = !!ZJ.stopPropagation, this.pN = !!ZJ.pN, this.disabled = !!ZJ.disabled, this.filterEvents = (JJ, cJ) => !0, this.down = new FJ.EventEmitter, this.up = new FJ.EventEmitter, this.state = {}, this.iN = {
          dx: 0,
          dy: 0,
          RJJ: 0,
          LJJ: 0,
          aJJ: 0
        }, this.pressCount = {}, this.releaseCount = {}, this._keyBindmap = {}, this._keyStates = {}, this._bindPressCount = {}, this._touches = {
          lastX: 0,
          lastY: 0,
          currID: null
        }, "loading" !== document.readyState ? jJ(this) : document.addEventListener("DOMContentLoaded", (JJ => {
          jJ(this)
        }), {
          once: !0
        })
      }
      bind(JJ) {
        for (var cJ = arguments.length, ZJ = new Array(cJ > 1 ? cJ - 1 : 0), FJ = 1; FJ < cJ; FJ++) ZJ[FJ - 1] = arguments[FJ];
        ZJ.forEach((cJ => {
          var ZJ = this._keyBindmap[cJ] || [];
          ZJ.includes(JJ) || (ZJ.push(JJ), this._keyBindmap[cJ] = ZJ)
        })), this.state[JJ] = !!this.state[JJ], this.pressCount[JJ] = this.pressCount[JJ] || 0, this.releaseCount[JJ] = this.releaseCount[JJ] || 0
      }
      unbind(JJ) {
        for (var cJ in this._keyBindmap) {
          var ZJ = this._keyBindmap[cJ],
            FJ = ZJ.indexOf(JJ);
          FJ > -1 && ZJ.splice(FJ, 1)
        }
      }
      getBindings() {
        var JJ = {};
        for (var cJ in this._keyBindmap) {
          this._keyBindmap[cJ].forEach((ZJ => {
            JJ[ZJ] = JJ[ZJ] || [], JJ[ZJ].push(cJ)
          }))
        }
        return JJ
      }
      Hh() {
        qJ(this.iN), qJ(this.pressCount), qJ(this.releaseCount)
      }
    }

    function qJ(JJ) {
      for (var cJ in JJ) JJ[cJ] = 0
    }

    function jJ(JJ) {
      window.addEventListener("keydown", fJ.bind(null, JJ, !0), !1), window.addEventListener("keyup", fJ.bind(null, JJ, !1), !1);
      var cJ = {
        passive: !0
      };
      JJ.element.addEventListener("touchstart", sJ.bind(void 0, JJ), {
        passive: !1
      }), JJ.element.addEventListener("touchend", GJ.bind(void 0, JJ), cJ), JJ.element.addEventListener("mousedown", xJ.bind(null, JJ, !0), cJ), window.document.addEventListener("mouseup", xJ.bind(null, JJ, !1), cJ), JJ.element.addEventListener("touchmove", rJ.bind(null, JJ), cJ), JJ.element.addEventListener("mousemove", rJ.bind(null, JJ), cJ), window.PointerEvent, JJ.element.addEventListener("wheel", vJ.bind(null, JJ), cJ), JJ.element.addEventListener("contextmenu", mJ.bind(null, JJ), !1), window.addEventListener("blur", VJ.bind(null, JJ), !1)
    }
    var YJ = 0,
      hJ = 0,
      DJ = null;

    function sJ(JJ, cJ) {
      cJ.preventDefault(), nJ(cJ)
    }

    function nJ(JJ) {
      let cJ = !1;
      for (let ZJ = 0; ZJ < JJ.touches.length; ++ZJ)
        if (JJ.touches[ZJ].identifier === DJ) {
          cJ = !0;
          break
        } if (!cJ) {
        const cJ = JJ.changedTouches[0];
        YJ = cJ.clientX, hJ = cJ.clientY, DJ = cJ.identifier
      }
    }

    function GJ(JJ, cJ) {
      for (var ZJ = cJ.changedTouches, FJ = 0; FJ < ZJ.length; ++FJ) ZJ[FJ].identifier === DJ && (DJ = null)
    }

    function fJ(JJ, cJ, ZJ) {
      try {
        KJ(JJ, ZJ), cJ && ZJ.isTrusted && !ZJ.repeat && JJ._keyStates[ZJ.code] && yJ(JJ, ZJ.code)
      } finally {
        SJ(ZJ.code, cJ, JJ, ZJ)
      }
    }

    function xJ(JJ, cJ, ZJ) {
      try {
        KJ(JJ, ZJ)
      } finally {
        ! function(JJ, cJ, ZJ) {
          if ("pointerId" in ZJ)
            if (cJ) {
              if (null !== JJ._touches.currID) return;
              JJ._touches.currID = ZJ.pointerId
            } else {
              if (JJ._touches.currID !== ZJ.pointerId) return;
              JJ._touches.currID = null
            } var FJ = "button" in ZJ ? ZJ.button + 1 : 1;
          SJ("Mouse" + FJ, cJ, JJ, ZJ)
        }(JJ, cJ, ZJ)
      }
    }

    function rJ(JJ, cJ) {
      var ZJ = cJ.movementX || cJ.mozMovementX || 0,
        FJ = cJ.movementY || cJ.mozMovementY || 0;
      if (cJ.touches && 0 === (ZJ | FJ)) {
        var UJ = function(JJ) {
          nJ(JJ);
          for (let cJ = 0; cJ < JJ.changedTouches.length; ++cJ)
            if (JJ.changedTouches[cJ].identifier == DJ) {
              const ZJ = JJ.changedTouches[cJ],
                FJ = [ZJ.clientX - YJ, ZJ.clientY - hJ];
              return YJ = ZJ.clientX, hJ = ZJ.clientY, FJ
            } return console.error(`Did not find touch id ${DJ}`), [0, 0]
        }(cJ);
        ZJ = UJ[0], FJ = UJ[1]
      }
      JJ.iN.dx += ZJ, JJ.iN.dy += FJ
    }

    function vJ(JJ, cJ) {
      KJ(JJ, cJ);
      var ZJ = 1;
      switch (cJ.deltaMode) {
        case 0:
          ZJ = 1;
          break;
        case 1:
          ZJ = 12;
          break;
        case 2:
          ZJ = JJ.element.clientHeight || window.innerHeight
      }
      JJ.iN.RJJ += (cJ.deltaX || 0) * ZJ, JJ.iN.LJJ += (cJ.deltaY || 0) * ZJ, JJ.iN.aJJ += (cJ.deltaZ || 0) * ZJ
    }

    function mJ(JJ, cJ) {
      if (!JJ.pN) return cJ.preventDefault(), !1
    }
    var QJ = {
      AltLeft: "altKey",
      AltRight: "altKey",
      ControlLeft: "ctrlKey",
      ControlRight: "ctrlKey",
      ShiftLeft: "shiftKey",
      ShiftRight: "shiftKey",
      MetaLeft: "metaKey",
      MetaRight: "metaKey"
    };

    function EJ(JJ, cJ) {
      return !!JJ[QJ[cJ]] || ("AltRight" === cJ || "ControlLeft" === cJ) && "function" === typeof JJ.getModifierState && !0 === JJ.getModifierState("AltGraph")
    }

    function VJ(JJ, cJ) {
      for (var ZJ in JJ._modifiersHeldThroughBlur = {}, QJ) JJ._keyStates[ZJ] && (JJ._modifiersHeldThroughBlur[ZJ] = !0);
      cJ && cJ.isTrusted && function() {
        try {
          return window.self !== window.top
        } catch (JJ) {
          return !0
        }
      }() && (clearTimeout(JJ._blurRelease), JJ._blurRelease = setTimeout((function() {
        if (!document.hasFocus())
          for (var cJ in JJ._modifiersHeldThroughBlur = {}, JJ._keyStates) JJ._keyStates[cJ] && !/^Mouse\d/.test(cJ) && yJ(JJ, cJ)
      }), 0))
    }

    function KJ(JJ, cJ) {
      var ZJ = JJ._modifiersHeldThroughBlur;
      if (ZJ && cJ.isTrusted && document.hasFocus())
        for (var FJ in ZJ) delete ZJ[FJ], JJ._keyStates[FJ] && FJ !== cJ.code && (EJ(cJ, FJ) || yJ(JJ, FJ))
    }

    function yJ(JJ, cJ) {
      const ZJ = {
          code: cJ,
          preventDefault: () => {},
          stopPropagation: () => {}
        },
        FJ = UJ;
      UJ = ZJ;
      try {
        SJ(cJ, !1, JJ, ZJ)
      } finally {
        UJ = FJ
      }
    }

    function SJ(JJ, cJ, ZJ, FJ) {
      var UJ = ZJ._keyBindmap[JJ];
      UJ && (IJ(ZJ._keyStates[JJ], cJ) && (ZJ._keyStates[JJ] = cJ, UJ.forEach((JJ => {
        (!ZJ.filterEvents || ZJ.filterEvents(FJ, JJ)) && function(JJ, cJ, ZJ, FJ) {
          var UJ = cJ ? ZJ.pressCount : ZJ.releaseCount;
          UJ[JJ] = (UJ[JJ] || 0) + 1;
          var eJ = ZJ._bindPressCount[JJ] || 0;
          (eJ += cJ ? 1 : -1) < 0 && (eJ = 0);
          ZJ._bindPressCount[JJ] = eJ;
          var XJ = ZJ.state[JJ];
          if (IJ(XJ, eJ)) {
            ZJ.state[JJ] = eJ > 0;
            var AJ = cJ ? ZJ.down : ZJ.up;
            ZJ.disabled || AJ.emit(JJ, FJ)
          }
        }(JJ, cJ, ZJ, FJ)
      }))), "button" in FJ || (ZJ.kN && !FJ.defaultPrevented && FJ.preventDefault(), ZJ.stopPropagation && FJ.stopPropagation()))
    }

    function IJ(JJ, cJ) {
      return JJ ? !cJ : cJ
    }
  },
  35605: (JJ, cJ) => {
    function ZJ(JJ) {
      if (JJ && "object" === typeof JJ) {
        var cJ = JJ.which || JJ.keyCode || JJ.charCode;
        cJ && (JJ = cJ)
      }
      if ("number" === typeof JJ) return XJ[JJ];
      var ZJ, eJ = String(JJ);
      return (ZJ = FJ[eJ.toLowerCase()]) ? ZJ : (ZJ = UJ[eJ.toLowerCase()]) || (1 === eJ.length ? eJ.charCodeAt(0) : void 0)
    }
    ZJ.isEventKey = function(JJ, cJ) {
      if (JJ && "object" === typeof JJ) {
        var ZJ = JJ.which || JJ.keyCode || JJ.charCode;
        if (null === ZJ || void 0 === ZJ) return !1;
        if ("string" === typeof cJ) {
          var eJ;
          if (eJ = FJ[cJ.toLowerCase()]) return eJ === ZJ;
          if (eJ = UJ[cJ.toLowerCase()]) return eJ === ZJ
        } else if ("number" === typeof cJ) return cJ === ZJ;
        return !1
      }
    };
    var FJ = (cJ = JJ.exports = ZJ).code = cJ.codes = {
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
      UJ = cJ.aliases = {
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
    for (eJ = 97; eJ < 123; eJ++) FJ[String.fromCharCode(eJ)] = eJ - 32;
    for (var eJ = 48; eJ < 58; eJ++) FJ[eJ - 48] = eJ;
    for (eJ = 1; eJ < 13; eJ++) FJ["f" + eJ] = eJ + 111;
    for (eJ = 0; eJ < 10; eJ++) FJ["numpad " + eJ] = eJ + 96;
    var XJ = cJ.names = cJ.title = {};
    for (eJ in FJ) XJ[FJ[eJ]] = eJ;
    for (var AJ in UJ) FJ[AJ] = UJ[AJ]
  },
  38505: (JJ, cJ, ZJ) => {
    ZJ.d(cJ, {
      d: () => FJ
    });
    class FJ {
      constructor() {
        let JJ = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
          cJ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 10;
        this.Cw = !1, this.cW = !1, this.Gy = 30, this.Kw = 0, this.FW = 100, this.Sf = !1, this.fullscreen = !1, this.Km = function(JJ) {}, this.UW = function(JJ, cJ, ZJ) {}, this.fW = function() {}, this.Im = function() {}, this.jW = function() {}, this.onFullscreenChanged = function() {}, this.onPointerLockError = function(JJ) {}, this._data = new UJ(cJ),
          function(JJ) {
            if ("loading" === document.readyState) {
              var cJ = () => {
                document.removeEventListener("readystatechange", cJ), JJ()
              };
              document.addEventListener("readystatechange", cJ)
            } else setTimeout(JJ, 0)
          }((() => {
            ! function(JJ) {
              var cJ = JJ._data,
                ZJ = cJ.nowObject.now();
              cJ.lastTickStarted = ZJ, cJ.lastFrameStarted = ZJ, cJ.lastRenderStarted = ZJ, cJ.frameCB = () => function(JJ) {
                var cJ = JJ._data;
                requestAnimationFrame(cJ.frameCB), AJ(JJ);
                var ZJ = cJ.nowObject.now(),
                  FJ = ZJ - cJ.lastFrameStarted;
                if (cJ.lastFrameStarted = ZJ, JJ.Kw > 0) {
                  cJ.renderAccum += FJ;
                  var UJ = 1e3 / JJ.Kw;
                  if (cJ.renderAccum < UJ) return;
                  cJ.renderAccum -= UJ, cJ.renderAccum > UJ && (cJ.renderAccum = UJ)
                }
                var eJ = ZJ - cJ.lastRenderStarted;
                cJ.lastRenderStarted = ZJ;
                var XJ = 1e3 / JJ.Gy,
                  qJ = (ZJ - cJ.lastTickStarted) / XJ;
                qJ < 0 && (qJ = 0);
                JJ.UW(eJ, qJ, XJ), setTimeout(AJ, 0, JJ, !0)
              }(JJ), cJ.intervalCB = () => AJ(JJ), requestAnimationFrame(cJ.frameCB), cJ.pollTime > 0 && (cJ.intervalID = setInterval(cJ.intervalCB, Math.max(cJ.pollTime, 1e3 / JJ.Gy / 2)))
            }(this),
            function(JJ, cJ) {
              if (!cJ) return;
              var ZJ = !1,
                FJ = !1,
                UJ = JJ => {
                  if (!!JJ !== (ZJ = cJ === document.pointerLockElement))
                    if (JJ) {
                      var FJ = cJ.requestPointerLock();
                      FJ && FJ.catch && FJ.catch((JJ => {}))
                    } else document.exitPointerLock()
                },
                eJ = JJ => {
                  !!JJ !== (FJ = cJ === document.fullscreenElement) && (JJ ? cJ.requestFullscreen ? cJ.requestFullscreen() : cJ.webkitRequestFullscreen && cJ.webkitRequestFullscreen() : document.exitFullscreen ? document.exitFullscreen() : document.webkitExitFullscreen && document.webkitExitFullscreen())
                };
              document.addEventListener("pointerlockchange", (FJ => {
                ZJ = cJ === document.pointerLockElement, JJ.jW(ZJ)
              })), document.addEventListener("fullscreenchange", (ZJ => {
                FJ = cJ === document.fullscreenElement, JJ.onFullscreenChanged(FJ)
              })), document.addEventListener("pointerlockerror", (FJ => {
                ZJ = cJ === document.pointerLockElement, JJ.onPointerLockError(FJ)
              })), Object.defineProperty(JJ, "Sf", {
                get: () => ZJ,
                set: UJ
              }), Object.defineProperty(JJ, "fullscreen", {
                get: () => FJ,
                set: eJ
              }), cJ.addEventListener("click", (cJ => {
                JJ.Cw && UJ(!0), JJ.cW && eJ(!0)
              }));
              var XJ = () => JJ.Im();
              if (window.ResizeObserver) {
                new ResizeObserver(XJ).observe(cJ)
              } else window.addEventListener("resize", XJ)
            }(this, JJ), this.fW()
          }))
      }
    }

    function UJ() {
      let JJ = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 10;
      this.nowObject = performance || Date, this.pollTime = JJ, this.renderAccum = 0, this.lastTickStarted = 0, this.lastFrameStarted = 0, this.lastRenderStarted = 0, this.avgTickTime = 2, this.frameCB = null, this.intervalCB = null, this.intervalID = -1
    }
    var eJ = 3,
      XJ = 20;

    function AJ(JJ) {
      for (var cJ = JJ._data, ZJ = 1e3 / JJ.Gy, FJ = cJ.nowObject.now() + XJ, UJ = 0; cJ.nowObject.now() >= cJ.lastTickStarted + ZJ && cJ.nowObject.now() < FJ && ++UJ <= eJ;) JJ.Km(ZJ), cJ.lastTickStarted += ZJ;
      var AJ = 5 * (ZJ + 5),
        qJ = cJ.nowObject.now();
      if (qJ - cJ.lastTickStarted > AJ)
        for (; qJ >= cJ.lastTickStarted + ZJ;) cJ.lastTickStarted += ZJ
    }
  },
  35778: (JJ, cJ, ZJ) => {
    ZJ.d(cJ, {
      d: () => XJ
    });
    var FJ = ZJ(47);
    const UJ = FJ.useLayoutEffect;
    const eJ = function(JJ) {
      var cJ = (0, FJ.useRef)(JJ);
      return UJ((function() {
        cJ.current = JJ
      })), cJ
    };
    var XJ = function(JJ) {
      var cJ = eJ(JJ);
      (0, FJ.useEffect)((function() {
        var JJ = function(JJ) {
          var ZJ;
          if (null != cJ.current && (ZJ = cJ.current(JJ)), JJ.defaultPrevented && (JJ.returnValue = ""), "string" === typeof ZJ) return JJ.returnValue = ZJ, ZJ
        };
        return window.addEventListener("beforeunload", JJ),
          function() {
            window.removeEventListener("beforeunload", JJ)
          }
      }), [])
    }
  },
  35642: JJ => {
    var cJ, ZJ = "undefined" !== typeof window ? window.navigator.userAgent : "",
      FJ = /OS X/.test(ZJ),
      UJ = /Opera/.test(ZJ),
      eJ = !/like Gecko/.test(ZJ) && !UJ,
      XJ = JJ.exports = {
        0: FJ ? "<menu>" : "<UNK>",
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
        93: FJ ? "<meta>" : "<menu>",
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
        173: FJ && eJ ? "-" : "<volume-mute>",
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
        231: UJ ? "`" : "<unicode>",
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
    for (cJ = 58; cJ < 65; ++cJ) XJ[cJ] = String.fromCharCode(cJ);
    for (cJ = 48; cJ < 58; ++cJ) XJ[cJ] = cJ - 48 + "";
    for (cJ = 65; cJ < 91; ++cJ) XJ[cJ] = String.fromCharCode(cJ);
    for (cJ = 96; cJ < 106; ++cJ) XJ[cJ] = "<num-" + (cJ - 96) + ">";
    for (cJ = 112; cJ < 136; ++cJ) XJ[cJ] = "F" + (cJ - 111)
  },
  37988: (JJ, cJ, ZJ) => {
    function FJ(JJ, cJ, ZJ, FJ, UJ) {
      var eJ = {};
      return Object.keys(FJ).forEach((function(JJ) {
        eJ[JJ] = FJ[JJ]
      })), eJ.enumerable = !!eJ.enumerable, eJ.configurable = !!eJ.configurable, ("value" in eJ || eJ.initializer) && (eJ.writable = !0), eJ = ZJ.slice().reverse().reduce((function(ZJ, FJ) {
        return FJ(JJ, cJ, ZJ) || ZJ
      }), eJ), UJ && void 0 !== eJ.initializer && (eJ.value = eJ.initializer ? eJ.initializer.call(UJ) : void 0, eJ.initializer = void 0), void 0 === eJ.initializer && (Object.defineProperty(JJ, cJ, eJ), eJ = null), eJ
    }
    ZJ.d(cJ, {
      b: () => FJ
    })
  },
  37984: (JJ, cJ, ZJ) => {
    function FJ(JJ, cJ, ZJ, FJ) {
      ZJ && Object.defineProperty(JJ, cJ, {
        enumerable: ZJ.enumerable,
        configurable: ZJ.configurable,
        writable: ZJ.writable,
        value: ZJ.initializer ? ZJ.initializer.call(FJ) : void 0
      })
    }
    ZJ.d(cJ, {
      b: () => FJ
    })
  },
  37658: (JJ, cJ, ZJ) => {
    ZJ.d(cJ, {
      e: () => eJ
    });
    var FJ = ZJ(37660);
    const UJ = (JJ, cJ, ZJ) => JJ ? JJ.getClassName && "Mesh" === JJ.getClassName() ? null : !JJ.getClassName || "SubMesh" !== JJ.getClassName() && "PhysicsBody" !== JJ.getClassName() ? JJ.clone ? JJ.clone() : Array.isArray(JJ) ? JJ.slice() : ZJ && "object" === typeof JJ ? {
      ...JJ
    } : null : JJ.clone(cJ) : null;
    class eJ {
      static DeepCopy(JJ, cJ, ZJ, eJ) {
        let XJ = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
        const AJ = function(JJ) {
          const cJ = [];
          do {
            const ZJ = Object.getOwnPropertyNames(JJ);
            for (const JJ of ZJ) - 1 === cJ.indexOf(JJ) && cJ.push(JJ)
          } while (JJ = Object.getPrototypeOf(JJ));
          return cJ
        }(JJ);
        for (const jJ of AJ) {
          if ("_" === jJ[0] && (!eJ || -1 === eJ.indexOf(jJ))) continue;
          if (jJ.endsWith("Observable")) continue;
          if (ZJ && -1 !== ZJ.indexOf(jJ)) continue;
          const AJ = JJ[jJ],
            YJ = typeof AJ;
          if ("function" !== YJ) try {
            if ("object" === YJ)
              if (AJ instanceof Uint8Array) cJ[jJ] = Uint8Array.from(AJ);
              else if (AJ instanceof Array) {
              if (cJ[jJ] = [], AJ.length > 0)
                if ("object" == typeof AJ[0])
                  for (let JJ = 0; JJ < AJ.length; JJ++) {
                    const ZJ = UJ(AJ[JJ], cJ, XJ); - 1 === cJ[jJ].indexOf(ZJ) && cJ[jJ].push(ZJ)
                  } else cJ[jJ] = AJ.slice(0)
            } else cJ[jJ] = UJ(AJ, cJ, XJ);
            else cJ[jJ] = AJ
          } catch (qJ) {
            FJ.c.Warn(qJ.message)
          }
        }
      }
    }
  },
  37683: (JJ, cJ, ZJ) => {
    ZJ.d(cJ, {
      b: () => UJ,
      e: () => eJ,
      g: () => XJ,
      j: () => AJ
    });
    var FJ = ZJ(36231);
    class UJ {
      constructor(JJ, cJ, ZJ) {
        this.gradient = JJ, this.color1 = cJ, this.color2 = ZJ
      }
      getColorToRef(JJ) {
        this.color2 ? FJ.f.LerpToRef(this.color1, this.color2, Math.random(), JJ) : JJ.rZJ(this.color1)
      }
    }
    class eJ {
      constructor(JJ, cJ) {
        this.gradient = JJ, this.color = cJ
      }
    }
    class XJ {
      constructor(JJ, cJ, ZJ) {
        this.gradient = JJ, this.factor1 = cJ, this.factor2 = ZJ
      }
      getFactor() {
        return void 0 === this.factor2 || this.factor2 === this.factor1 ? this.factor1 : this.factor1 + (this.factor2 - this.factor1) * Math.random()
      }
    }
    class AJ {
      static GetCurrentGradient(JJ, cJ, ZJ) {
        if (cJ[0].gradient > JJ) return void ZJ(cJ[0], cJ[0], 1);
        for (let UJ = 0; UJ < cJ.length - 1; UJ++) {
          const FJ = cJ[UJ],
            eJ = cJ[UJ + 1];
          if (JJ >= FJ.gradient && JJ <= eJ.gradient) {
            return void ZJ(FJ, eJ, (JJ - FJ.gradient) / (eJ.gradient - FJ.gradient))
          }
        }
        const FJ = cJ.length - 1;
        ZJ(cJ[FJ], cJ[FJ], 1)
      }
    }
  },
  37660: (JJ, cJ, ZJ) => {
    ZJ.d(cJ, {
      c: () => FJ
    });
    class FJ {
      static _CheckLimit(JJ, cJ) {
        let ZJ = FJ._LogLimitOutputs[JJ];
        return ZJ ? ZJ.current++ : (ZJ = {
          limit: cJ,
          current: 1
        }, FJ._LogLimitOutputs[JJ] = ZJ), ZJ.current <= ZJ.limit
      }
      static _GenerateLimitMessage(JJ) {
        let cJ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
        const ZJ = FJ._LogLimitOutputs[JJ];
        if (!ZJ || !FJ.MessageLimitReached) return;
        const UJ = this._Levels[cJ];
        ZJ.current === ZJ.limit && FJ[UJ.name](FJ.MessageLimitReached.replace(/%LIMIT%/g, "" + ZJ.limit).replace(/%TYPE%/g, UJ.name ?? ""))
      }
      static _AddLogEntry(JJ) {
        FJ._LogCache = JJ + FJ._LogCache, FJ.OnNewCacheEntry && FJ.OnNewCacheEntry(JJ)
      }
      static _FormatMessage(JJ) {
        const cJ = JJ => JJ < 10 ? "0" + JJ : "" + JJ,
          ZJ = new Date;
        return "[" + cJ(ZJ.getHours()) + ":" + cJ(ZJ.getMinutes()) + ":" + cJ(ZJ.getSeconds()) + "]: " + JJ
      }
      static _LogDisabled(JJ, cJ) {}
      static _LogEnabled() {
        let JJ = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
          cJ = arguments.length > 1 ? arguments[1] : void 0,
          ZJ = arguments.length > 2 ? arguments[2] : void 0;
        const UJ = Array.isArray(cJ) ? cJ[0] : cJ;
        if (void 0 !== ZJ && !FJ._CheckLimit(UJ, ZJ)) return;
        const eJ = FJ._FormatMessage(UJ),
          XJ = this._Levels[JJ],
          AJ = Array.isArray(cJ) ? cJ.slice(1) : [];
        XJ.logFunc && XJ.logFunc("BJS - " + eJ, ...AJ);
        const qJ = `<div style='color:${XJ.color}'>${eJ}</div><br>`;
        FJ._AddLogEntry(qJ), FJ._GenerateLimitMessage(UJ, JJ)
      }
      static get LogCache() {
        return FJ._LogCache
      }
      static ClearLogCache() {
        FJ._LogCache = "", FJ._LogLimitOutputs = {}, FJ.errorsCount = 0
      }
      static set LogLevels(JJ) {
        FJ.Log = FJ._LogDisabled, FJ.Warn = FJ._LogDisabled, FJ.Error = FJ._LogDisabled;
        const cJ = [FJ.MessageLogLevel, FJ.WarningLogLevel, FJ.ErrorLogLevel];
        for (const ZJ of cJ)
          if ((JJ & ZJ) === ZJ) {
            const JJ = this._Levels[ZJ];
            FJ[JJ.name] = FJ._LogEnabled.bind(FJ, ZJ)
          }
      }
    }
    FJ.NoneLogLevel = 0, FJ.MessageLogLevel = 1, FJ.WarningLogLevel = 2, FJ.ErrorLogLevel = 4, FJ.AllLogLevel = 7, FJ.MessageLimitReached = "Too many %TYPE%s (%LIMIT%), no more %TYPE%s will be reported for this message.", FJ._LogCache = "", FJ._LogLimitOutputs = {}, FJ._Levels = [{}, {
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
    }], FJ.errorsCount = 0, FJ.Log = FJ._LogEnabled.bind(FJ, FJ.MessageLogLevel), FJ.Warn = FJ._LogEnabled.bind(FJ, FJ.WarningLogLevel), FJ.Error = FJ._LogEnabled.bind(FJ, FJ.ErrorLogLevel)
  },
  37686: (JJ, cJ, ZJ) => {
    ZJ.d(cJ, {
      c: () => XJ
    });
    var FJ = ZJ(36174),
      UJ = ZJ(36207),
      eJ = ZJ(37658);
    class XJ {
      constructor() {
        this.direction1 = new FJ.j(0, 1, 0), this.direction2 = new FJ.j(0, 1, 0), this.minEmitBox = new FJ.j(-.5, -.5, -.5), this.maxEmitBox = new FJ.j(.5, .5, .5)
      }
      startDirectionFunction(JJ, cJ, ZJ, eJ) {
        const XJ = (0, UJ.RandomRange)(this.direction1.x, this.direction2.x),
          AJ = (0, UJ.RandomRange)(this.direction1.y, this.direction2.y),
          qJ = (0, UJ.RandomRange)(this.direction1.z, this.direction2.z);
        if (eJ) return cJ.x = XJ, cJ.y = AJ, void(cJ.z = qJ);
        FJ.j.TransformNormalFromFloatsToRef(XJ, AJ, qJ, JJ, cJ)
      }
      startPositionFunction(JJ, cJ, ZJ, eJ) {
        const XJ = (0, UJ.RandomRange)(this.minEmitBox.x, this.maxEmitBox.x),
          AJ = (0, UJ.RandomRange)(this.minEmitBox.y, this.maxEmitBox.y),
          qJ = (0, UJ.RandomRange)(this.minEmitBox.z, this.maxEmitBox.z);
        if (eJ) return cJ.x = XJ, cJ.y = AJ, void(cJ.z = qJ);
        FJ.j.TransformCoordinatesFromFloatsToRef(XJ, AJ, qJ, JJ, cJ)
      }
      clone() {
        const JJ = new XJ;
        return eJ.e.DeepCopy(this, JJ), JJ
      }
      applyToShader(JJ) {
        JJ.setVector3("direction1", this.direction1), JJ.setVector3("direction2", this.direction2), JJ.setVector3("minEmitBox", this.minEmitBox), JJ.setVector3("maxEmitBox", this.maxEmitBox)
      }
      buildUniformLayout(JJ) {
        JJ.addUniform("direction1", 3), JJ.addUniform("direction2", 3), JJ.addUniform("minEmitBox", 3), JJ.addUniform("maxEmitBox", 3)
      }
      getEffectDefines() {
        return "#define BOXEMITTER"
      }
      getClassName() {
        return "BoxParticleEmitter"
      }
      serialize() {
        const JJ = {};
        return JJ.type = this.getClassName(), JJ.direction1 = this.direction1.JFJ(), JJ.direction2 = this.direction2.JFJ(), JJ.minEmitBox = this.minEmitBox.JFJ(), JJ.maxEmitBox = this.maxEmitBox.JFJ(), JJ
      }
      parse(JJ) {
        FJ.j.FromArrayToRef(JJ.direction1, 0, this.direction1), FJ.j.FromArrayToRef(JJ.direction2, 0, this.direction2), FJ.j.FromArrayToRef(JJ.minEmitBox, 0, this.minEmitBox), FJ.j.FromArrayToRef(JJ.maxEmitBox, 0, this.maxEmitBox)
      }
    }
  },
  37651: (JJ, cJ, ZJ) => {
    ZJ.d(cJ, {
      b: () => AJ,
      e: () => XJ
    });
    var FJ = ZJ(36174),
      UJ = ZJ(36207),
      eJ = ZJ(37658);
    class XJ {
      constructor() {
        let JJ = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
          cJ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
          ZJ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1,
          UJ = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
        this.radius = JJ, this.height = cJ, this.radiusRange = ZJ, this.directionRandomizer = UJ, this._tempVector = FJ.j.Zero()
      }
      startDirectionFunction(JJ, cJ, ZJ, eJ, XJ) {
        ZJ.position.subtractToRef(JJ.getTranslation(), this._tempVector), this._tempVector.normalize(), FJ.j.TransformNormalToRef(this._tempVector, XJ, this._tempVector);
        const AJ = (0, UJ.RandomRange)(-this.directionRandomizer / 2, this.directionRandomizer / 2);
        let qJ = Math.atan2(this._tempVector.x, this._tempVector.z);
        qJ += (0, UJ.RandomRange)(-Math.PI / 2, Math.PI / 2) * this.directionRandomizer, this._tempVector.y = AJ, this._tempVector.x = Math.sin(qJ), this._tempVector.z = Math.cos(qJ), this._tempVector.normalize(), eJ ? cJ.rZJ(this._tempVector) : FJ.j.TransformNormalFromFloatsToRef(this._tempVector.x, this._tempVector.y, this._tempVector.z, JJ, cJ)
      }
      startPositionFunction(JJ, cJ, ZJ, eJ) {
        const XJ = (0, UJ.RandomRange)(-this.height / 2, this.height / 2),
          AJ = (0, UJ.RandomRange)(0, 2 * Math.PI),
          qJ = (0, UJ.RandomRange)((1 - this.radiusRange) * (1 - this.radiusRange), 1),
          jJ = Math.sqrt(qJ) * this.radius,
          YJ = jJ * Math.cos(AJ),
          hJ = jJ * Math.sin(AJ);
        eJ ? cJ.K9(YJ, XJ, hJ) : FJ.j.TransformCoordinatesFromFloatsToRef(YJ, XJ, hJ, JJ, cJ)
      }
      clone() {
        const JJ = new XJ(this.radius, this.directionRandomizer);
        return eJ.e.DeepCopy(this, JJ), JJ
      }
      applyToShader(JJ) {
        JJ.setFloat("radius", this.radius), JJ.setFloat("height", this.height), JJ.setFloat("radiusRange", this.radiusRange), JJ.setFloat("directionRandomizer", this.directionRandomizer)
      }
      buildUniformLayout(JJ) {
        JJ.addUniform("radius", 1), JJ.addUniform("height", 1), JJ.addUniform("radiusRange", 1), JJ.addUniform("directionRandomizer", 1)
      }
      getEffectDefines() {
        return "#define CYLINDEREMITTER"
      }
      getClassName() {
        return "CylinderParticleEmitter"
      }
      serialize() {
        const JJ = {};
        return JJ.type = this.getClassName(), JJ.radius = this.radius, JJ.height = this.height, JJ.radiusRange = this.radiusRange, JJ.directionRandomizer = this.directionRandomizer, JJ
      }
      parse(JJ) {
        this.radius = JJ.radius, this.height = JJ.height, this.radiusRange = JJ.radiusRange, this.directionRandomizer = JJ.directionRandomizer
      }
    }
    class AJ extends XJ {
      constructor() {
        let JJ = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
          cJ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
          ZJ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1,
          UJ = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : new FJ.j(0, 1, 0),
          eJ = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : new FJ.j(0, 1, 0);
        super(JJ, cJ, ZJ), this.direction1 = UJ, this.direction2 = eJ
      }
      startDirectionFunction(JJ, cJ, ZJ, eJ) {
        const XJ = (0, UJ.RandomRange)(this.direction1.x, this.direction2.x),
          AJ = (0, UJ.RandomRange)(this.direction1.y, this.direction2.y),
          qJ = (0, UJ.RandomRange)(this.direction1.z, this.direction2.z);
        eJ ? cJ.K9(XJ, AJ, qJ) : FJ.j.TransformNormalFromFloatsToRef(XJ, AJ, qJ, JJ, cJ)
      }
      clone() {
        const JJ = new AJ(this.radius, this.height, this.radiusRange, this.direction1, this.direction2);
        return eJ.e.DeepCopy(this, JJ), JJ
      }
      applyToShader(JJ) {
        JJ.setFloat("radius", this.radius), JJ.setFloat("height", this.height), JJ.setFloat("radiusRange", this.radiusRange), JJ.setVector3("direction1", this.direction1), JJ.setVector3("direction2", this.direction2)
      }
      buildUniformLayout(JJ) {
        JJ.addUniform("radius", 1), JJ.addUniform("height", 1), JJ.addUniform("radiusRange", 1), JJ.addUniform("direction1", 3), JJ.addUniform("direction2", 3)
      }
      getEffectDefines() {
        return "#define CYLINDEREMITTER\n#define DIRECTEDCYLINDEREMITTER"
      }
      getClassName() {
        return "CylinderDirectedParticleEmitter"
      }
      serialize() {
        const JJ = super.serialize();
        return JJ.direction1 = this.direction1.JFJ(), JJ.direction2 = this.direction2.JFJ(), JJ
      }
      parse(JJ) {
        super.parse(JJ), FJ.j.FromArrayToRef(JJ.direction1, 0, this.direction1), FJ.j.FromArrayToRef(JJ.direction2, 0, this.direction2)
      }
    }
  },
  37751: (JJ, cJ, ZJ) => {
    ZJ.d(cJ, {
      c: () => hJ
    });
    const FJ = .5 * (Math.sqrt(3) - 1),
      UJ = (3 - Math.sqrt(3)) / 6,
      eJ = 1 / 3,
      XJ = 1 / 6,
      AJ = (Math.sqrt(5) - 1) / 4,
      qJ = (5 - Math.sqrt(5)) / 20,
      jJ = new Float32Array([1, 1, 0, -1, 1, 0, 1, -1, 0, -1, -1, 0, 1, 0, 1, -1, 0, 1, 1, 0, -1, -1, 0, -1, 0, 1, 1, 0, -1, 1, 0, 1, -1, 0, -1, -1]),
      YJ = new Float32Array([0, 1, 1, 1, 0, 1, 1, -1, 0, 1, -1, 1, 0, 1, -1, -1, 0, -1, 1, 1, 0, -1, 1, -1, 0, -1, -1, 1, 0, -1, -1, -1, 1, 0, 1, 1, 1, 0, 1, -1, 1, 0, -1, 1, 1, 0, -1, -1, -1, 0, 1, 1, -1, 0, 1, -1, -1, 0, -1, 1, -1, 0, -1, -1, 1, 1, 0, 1, 1, 1, 0, -1, 1, -1, 0, 1, 1, -1, 0, -1, -1, 1, 0, 1, -1, 1, 0, -1, -1, -1, 0, 1, -1, -1, 0, -1, 1, 1, 1, 0, 1, 1, -1, 0, 1, -1, 1, 0, 1, -1, -1, 0, -1, 1, 1, 0, -1, 1, -1, 0, -1, -1, 1, 0, -1, -1, -1, 0]);
    const hJ = class {
      constructor() {
        let JJ = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Math.random;
        const cJ = "function" == typeof JJ ? JJ : function(JJ) {
          let cJ = 0,
            ZJ = 0,
            FJ = 0,
            UJ = 1;
          const eJ = function() {
            let JJ = 4022871197;
            return function(cJ) {
              cJ = cJ.toString();
              for (let ZJ = 0; ZJ < cJ.length; ZJ++) {
                JJ += cJ.charCodeAt(ZJ);
                let FJ = .02519603282416938 * JJ;
                JJ = FJ >>> 0, FJ -= JJ, FJ *= JJ, JJ = FJ >>> 0, FJ -= JJ, JJ += 4294967296 * FJ
              }
              return 2.3283064365386963e-10 * (JJ >>> 0)
            }
          }();
          cJ = eJ(" "), ZJ = eJ(" "), FJ = eJ(" "), cJ -= eJ(JJ), cJ < 0 && (cJ += 1);
          ZJ -= eJ(JJ), ZJ < 0 && (ZJ += 1);
          FJ -= eJ(JJ), FJ < 0 && (FJ += 1);
          return function() {
            const JJ = 2091639 * cJ + 2.3283064365386963e-10 * UJ;
            return cJ = ZJ, ZJ = FJ, FJ = JJ - (UJ = 0 | JJ)
          }
        }(JJ);
        this.p = function(JJ) {
          const cJ = new Uint8Array(256);
          for (let ZJ = 0; ZJ < 256; ZJ++) cJ[ZJ] = ZJ;
          for (let ZJ = 0; ZJ < 255; ZJ++) {
            const FJ = ZJ + ~~(JJ() * (256 - ZJ)),
              UJ = cJ[ZJ];
            cJ[ZJ] = cJ[FJ], cJ[FJ] = UJ
          }
          return cJ
        }(cJ), this.perm = new Uint8Array(512), this.permMod12 = new Uint8Array(512);
        for (let ZJ = 0; ZJ < 512; ZJ++) this.perm[ZJ] = this.p[255 & ZJ], this.permMod12[ZJ] = this.perm[ZJ] % 12
      }
      noise2D(JJ, cJ) {
        const ZJ = this.permMod12,
          eJ = this.perm;
        let XJ = 0,
          AJ = 0,
          qJ = 0;
        const YJ = (JJ + cJ) * FJ,
          hJ = Math.floor(JJ + YJ),
          DJ = Math.floor(cJ + YJ),
          sJ = (hJ + DJ) * UJ,
          nJ = JJ - (hJ - sJ),
          GJ = cJ - (DJ - sJ);
        let fJ, xJ;
        nJ > GJ ? (fJ = 1, xJ = 0) : (fJ = 0, xJ = 1);
        const rJ = nJ - fJ + UJ,
          vJ = GJ - xJ + UJ,
          mJ = nJ - 1 + 2 * UJ,
          QJ = GJ - 1 + 2 * UJ,
          EJ = 255 & hJ,
          VJ = 255 & DJ;
        let KJ = .5 - nJ * nJ - GJ * GJ;
        if (KJ >= 0) {
          const JJ = 3 * ZJ[EJ + eJ[VJ]];
          KJ *= KJ, XJ = KJ * KJ * (jJ[JJ] * nJ + jJ[JJ + 1] * GJ)
        }
        let yJ = .5 - rJ * rJ - vJ * vJ;
        if (yJ >= 0) {
          const JJ = 3 * ZJ[EJ + fJ + eJ[VJ + xJ]];
          yJ *= yJ, AJ = yJ * yJ * (jJ[JJ] * rJ + jJ[JJ + 1] * vJ)
        }
        let SJ = .5 - mJ * mJ - QJ * QJ;
        if (SJ >= 0) {
          const JJ = 3 * ZJ[EJ + 1 + eJ[VJ + 1]];
          SJ *= SJ, qJ = SJ * SJ * (jJ[JJ] * mJ + jJ[JJ + 1] * QJ)
        }
        return 70 * (XJ + AJ + qJ)
      }
      noise3D(JJ, cJ, ZJ) {
        const FJ = this.permMod12,
          UJ = this.perm;
        let AJ, qJ, YJ, hJ;
        const DJ = (JJ + cJ + ZJ) * eJ,
          sJ = Math.floor(JJ + DJ),
          nJ = Math.floor(cJ + DJ),
          GJ = Math.floor(ZJ + DJ),
          fJ = (sJ + nJ + GJ) * XJ,
          xJ = JJ - (sJ - fJ),
          rJ = cJ - (nJ - fJ),
          vJ = ZJ - (GJ - fJ);
        let mJ, QJ, EJ, VJ, KJ, yJ;
        xJ >= rJ ? rJ >= vJ ? (mJ = 1, QJ = 0, EJ = 0, VJ = 1, KJ = 1, yJ = 0) : xJ >= vJ ? (mJ = 1, QJ = 0, EJ = 0, VJ = 1, KJ = 0, yJ = 1) : (mJ = 0, QJ = 0, EJ = 1, VJ = 1, KJ = 0, yJ = 1) : rJ < vJ ? (mJ = 0, QJ = 0, EJ = 1, VJ = 0, KJ = 1, yJ = 1) : xJ < vJ ? (mJ = 0, QJ = 1, EJ = 0, VJ = 0, KJ = 1, yJ = 1) : (mJ = 0, QJ = 1, EJ = 0, VJ = 1, KJ = 1, yJ = 0);
        const SJ = xJ - mJ + XJ,
          IJ = rJ - QJ + XJ,
          MJ = vJ - EJ + XJ,
          bJ = xJ - VJ + 2 * XJ,
          wJ = rJ - KJ + 2 * XJ,
          WJ = vJ - yJ + 2 * XJ,
          gJ = xJ - 1 + .5,
          HJ = rJ - 1 + .5,
          PJ = vJ - 1 + .5,
          kJ = 255 & sJ,
          pJ = 255 & nJ,
          dJ = 255 & GJ;
        let zJ = .6 - xJ * xJ - rJ * rJ - vJ * vJ;
        if (zJ < 0) AJ = 0;
        else {
          const JJ = 3 * FJ[kJ + UJ[pJ + UJ[dJ]]];
          zJ *= zJ, AJ = zJ * zJ * (jJ[JJ] * xJ + jJ[JJ + 1] * rJ + jJ[JJ + 2] * vJ)
        }
        let NJ = .6 - SJ * SJ - IJ * IJ - MJ * MJ;
        if (NJ < 0) qJ = 0;
        else {
          const JJ = 3 * FJ[kJ + mJ + UJ[pJ + QJ + UJ[dJ + EJ]]];
          NJ *= NJ, qJ = NJ * NJ * (jJ[JJ] * SJ + jJ[JJ + 1] * IJ + jJ[JJ + 2] * MJ)
        }
        let OJ = .6 - bJ * bJ - wJ * wJ - WJ * WJ;
        if (OJ < 0) YJ = 0;
        else {
          const JJ = 3 * FJ[kJ + VJ + UJ[pJ + KJ + UJ[dJ + yJ]]];
          OJ *= OJ, YJ = OJ * OJ * (jJ[JJ] * bJ + jJ[JJ + 1] * wJ + jJ[JJ + 2] * WJ)
        }
        let TJ = .6 - gJ * gJ - HJ * HJ - PJ * PJ;
        if (TJ < 0) hJ = 0;
        else {
          const JJ = 3 * FJ[kJ + 1 + UJ[pJ + 1 + UJ[dJ + 1]]];
          TJ *= TJ, hJ = TJ * TJ * (jJ[JJ] * gJ + jJ[JJ + 1] * HJ + jJ[JJ + 2] * PJ)
        }
        return 32 * (AJ + qJ + YJ + hJ)
      }
      noise4D(JJ, cJ, ZJ, FJ) {
        const UJ = this.perm;
        let eJ, XJ, jJ, hJ, DJ;
        const sJ = (JJ + cJ + ZJ + FJ) * AJ,
          nJ = Math.floor(JJ + sJ),
          GJ = Math.floor(cJ + sJ),
          fJ = Math.floor(ZJ + sJ),
          xJ = Math.floor(FJ + sJ),
          rJ = (nJ + GJ + fJ + xJ) * qJ,
          vJ = JJ - (nJ - rJ),
          mJ = cJ - (GJ - rJ),
          QJ = ZJ - (fJ - rJ),
          EJ = FJ - (xJ - rJ);
        let VJ = 0,
          KJ = 0,
          yJ = 0,
          SJ = 0;
        vJ > mJ ? VJ++ : KJ++, vJ > QJ ? VJ++ : yJ++, vJ > EJ ? VJ++ : SJ++, mJ > QJ ? KJ++ : yJ++, mJ > EJ ? KJ++ : SJ++, QJ > EJ ? yJ++ : SJ++;
        const IJ = VJ >= 3 ? 1 : 0,
          MJ = KJ >= 3 ? 1 : 0,
          bJ = yJ >= 3 ? 1 : 0,
          wJ = SJ >= 3 ? 1 : 0,
          WJ = VJ >= 2 ? 1 : 0,
          gJ = KJ >= 2 ? 1 : 0,
          HJ = yJ >= 2 ? 1 : 0,
          PJ = SJ >= 2 ? 1 : 0,
          kJ = VJ >= 1 ? 1 : 0,
          pJ = KJ >= 1 ? 1 : 0,
          dJ = yJ >= 1 ? 1 : 0,
          zJ = SJ >= 1 ? 1 : 0,
          NJ = vJ - IJ + qJ,
          OJ = mJ - MJ + qJ,
          TJ = QJ - bJ + qJ,
          CJ = EJ - wJ + qJ,
          uJ = vJ - WJ + 2 * qJ,
          iJ = mJ - gJ + 2 * qJ,
          RJ = QJ - HJ + 2 * qJ,
          LJ = EJ - PJ + 2 * qJ,
          aJ = vJ - kJ + 3 * qJ,
          BJ = mJ - pJ + 3 * qJ,
          tJ = QJ - dJ + 3 * qJ,
          oJ = EJ - zJ + 3 * qJ,
          lJ = vJ - 1 + 4 * qJ,
          Jc = mJ - 1 + 4 * qJ,
          cc = QJ - 1 + 4 * qJ,
          Zc = EJ - 1 + 4 * qJ,
          Fc = 255 & nJ,
          Uc = 255 & GJ,
          ec = 255 & fJ,
          Xc = 255 & xJ;
        let Ac = .6 - vJ * vJ - mJ * mJ - QJ * QJ - EJ * EJ;
        if (Ac < 0) eJ = 0;
        else {
          const JJ = UJ[Fc + UJ[Uc + UJ[ec + UJ[Xc]]]] % 32 * 4;
          Ac *= Ac, eJ = Ac * Ac * (YJ[JJ] * vJ + YJ[JJ + 1] * mJ + YJ[JJ + 2] * QJ + YJ[JJ + 3] * EJ)
        }
        let qc = .6 - NJ * NJ - OJ * OJ - TJ * TJ - CJ * CJ;
        if (qc < 0) XJ = 0;
        else {
          const JJ = UJ[Fc + IJ + UJ[Uc + MJ + UJ[ec + bJ + UJ[Xc + wJ]]]] % 32 * 4;
          qc *= qc, XJ = qc * qc * (YJ[JJ] * NJ + YJ[JJ + 1] * OJ + YJ[JJ + 2] * TJ + YJ[JJ + 3] * CJ)
        }
        let jc = .6 - uJ * uJ - iJ * iJ - RJ * RJ - LJ * LJ;
        if (jc < 0) jJ = 0;
        else {
          const JJ = UJ[Fc + WJ + UJ[Uc + gJ + UJ[ec + HJ + UJ[Xc + PJ]]]] % 32 * 4;
          jc *= jc, jJ = jc * jc * (YJ[JJ] * uJ + YJ[JJ + 1] * iJ + YJ[JJ + 2] * RJ + YJ[JJ + 3] * LJ)
        }
        let Yc = .6 - aJ * aJ - BJ * BJ - tJ * tJ - oJ * oJ;
        if (Yc < 0) hJ = 0;
        else {
          const JJ = UJ[Fc + kJ + UJ[Uc + pJ + UJ[ec + dJ + UJ[Xc + zJ]]]] % 32 * 4;
          Yc *= Yc, hJ = Yc * Yc * (YJ[JJ] * aJ + YJ[JJ + 1] * BJ + YJ[JJ + 2] * tJ + YJ[JJ + 3] * oJ)
        }
        let hc = .6 - lJ * lJ - Jc * Jc - cc * cc - Zc * Zc;
        if (hc < 0) DJ = 0;
        else {
          const JJ = UJ[Fc + 1 + UJ[Uc + 1 + UJ[ec + 1 + UJ[Xc + 1]]]] % 32 * 4;
          hc *= hc, DJ = hc * hc * (YJ[JJ] * lJ + YJ[JJ + 1] * Jc + YJ[JJ + 2] * cc + YJ[JJ + 3] * Zc)
        }
        return 27 * (eJ + XJ + jJ + hJ + DJ)
      }
    }
  }
};
Object.freeze(modules);
for (const JJ in modules) Object.freeze(modules[JJ]);