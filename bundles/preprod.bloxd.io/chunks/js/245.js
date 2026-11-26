/*! For license information please see cwj32u.245.24eb3540.chunk.js.LICENSE.txt */
export const id = 245;
export const ids = [245];
export const modules = {
  40621: (HH, BH, LH) => {
    HH.exports = rH;
    var AH = LH(330);

    function rH(HH, BH) {
      if (!(this instanceof rH)) return new rH(HH, BH);
      var LH = AH.create();
      AH.add(LH, HH, BH), this.base = AH.min(AH.create(), HH, LH), this.vec = AH.clone(BH), this.max = AH.max(AH.create(), HH, LH), this.mag = AH.length(this.vec)
    }
    var SH = rH.prototype;
    SH.width = function() {
      return this.vec[0]
    }, SH.height = function() {
      return this.vec[1]
    }, SH.depth = function() {
      return this.vec[2]
    }, SH.x0 = function() {
      return this.base[0]
    }, SH.y0 = function() {
      return this.base[1]
    }, SH.z0 = function() {
      return this.base[2]
    }, SH.x1 = function() {
      return this.max[0]
    }, SH.y1 = function() {
      return this.max[1]
    }, SH.z1 = function() {
      return this.max[2]
    }, SH.translate = function(HH) {
      return AH.add(this.max, this.max, HH), AH.add(this.base, this.base, HH), this
    }, SH.setPosition = function(HH) {
      return AH.add(this.max, HH, this.vec), AH.copy(this.base, HH), this
    }, SH.expand = function(HH) {
      var BH = AH.create(),
        LH = AH.create();
      return AH.max(BH, HH.max, this.max), AH.min(LH, HH.base, this.base), AH.subtract(BH, BH, LH), new rH(LH, BH)
    }, SH.intersects = function(HH) {
      return !(HH.base[0] > this.max[0]) && (!(HH.base[1] > this.max[1]) && (!(HH.base[2] > this.max[2]) && (!(HH.max[0] < this.base[0]) && (!(HH.max[1] < this.base[1]) && !(HH.max[2] < this.base[2])))))
    }, SH.touches = function(HH) {
      var BH = this.union(HH);
      return null !== BH && (0 == BH.width() || 0 == BH.height() || 0 == BH.depth())
    }, SH.union = function(HH) {
      if (!this.intersects(HH)) return null;
      var BH = Math.max(HH.base[0], this.base[0]),
        LH = Math.max(HH.base[1], this.base[1]),
        AH = Math.max(HH.base[2], this.base[2]);
      return new rH([BH, LH, AH], [Math.min(HH.max[0], this.max[0]) - BH, Math.min(HH.max[1], this.max[1]) - LH, Math.min(HH.max[2], this.max[2]) - AH])
    }
  },
  40612: HH => {
    HH.exports = function(HH, BH, LH, AH, rH, SH) {
      var hH = +BH[0],
        tH = +BH[1],
        zH = +BH[2],
        CH = +LH[0],
        EH = +LH[1],
        XH = +LH[2],
        GH = Math.sqrt(CH * CH + EH * EH + XH * XH);
      if (0 === GH) throw new Error("Can't raycast along a zero vector");
      return function(HH, BH, LH, AH, rH, SH, hH, tH, zH, CH) {
        for (var EH = 0, XH = Math.floor, GH = 0 | XH(BH), YH = 0 | XH(LH), uH = 0 | XH(AH), QH = rH > 0 ? 1 : -1, WH = SH > 0 ? 1 : -1, MH = hH > 0 ? 1 : -1, xH = Math.abs(1 / rH), vH = Math.abs(1 / SH), PH = Math.abs(1 / hH), TH = xH < 1 / 0 ? xH * (QH > 0 ? GH + 1 - BH : BH - GH) : 1 / 0, UH = vH < 1 / 0 ? vH * (WH > 0 ? YH + 1 - LH : LH - YH) : 1 / 0, VH = PH < 1 / 0 ? PH * (MH > 0 ? uH + 1 - AH : AH - uH) : 1 / 0, OH = -1; EH <= tH;) {
          var bH = HH(GH, YH, uH);
          if (bH) return zH && (zH[0] = BH + EH * rH, zH[1] = LH + EH * SH, zH[2] = AH + EH * hH), CH && (CH[0] = CH[1] = CH[2] = 0, 0 === OH && (CH[0] = -QH), 1 === OH && (CH[1] = -WH), 2 === OH && (CH[2] = -MH)), bH;
          TH < UH ? TH < VH ? (GH += QH, EH = TH, TH += xH, OH = 0) : (uH += MH, EH = VH, VH += PH, OH = 2) : UH < VH ? (YH += WH, EH = UH, UH += vH, OH = 1) : (uH += MH, EH = VH, VH += PH, OH = 2)
        }
        return zH && (zH[0] = BH + EH * rH, zH[1] = LH + EH * SH, zH[2] = AH + EH * hH), CH && (CH[0] = CH[1] = CH[2] = 0), 0
      }(HH, hH, tH, zH, CH /= GH, EH /= GH, XH /= GH, AH = "undefined" === typeof AH ? 64 : +AH, rH, SH)
    }
  },
  40038: (HH, BH, LH) => {
    LH.d(BH, {
      e: () => tH,
      f: () => SH
    });
    var AH = LH(4477);
    let rH = null;

    function SH(HH) {
      return null !== rH && HH === rH
    }

    function hH() {
      this.Qp = !1, this.stopPropagation = !1, this.kp = !1, this.disabled = !1
    }
    class tH {
      constructor(HH, BH) {
        this.version = "0.7.0";
        var LH = Object.assign({}, new hH, BH || {});
        this.element = HH || document, this.Qp = !!LH.Qp, this.stopPropagation = !!LH.stopPropagation, this.kp = !!LH.kp, this.disabled = !!LH.disabled, this.filterEvents = (HH, BH) => !0, this.ignoreEvent = HH => !1, this.down = new AH.EventEmitter, this.up = new AH.EventEmitter, this.state = {}, this.mp = {
          dx: 0,
          dy: 0,
          uLH: 0,
          QLH: 0,
          WLH: 0
        }, this.pressCount = {}, this.releaseCount = {}, this._keyBindmap = {}, this._keyStates = {}, this._bindPressCount = {}, this._touches = {
          lastX: 0,
          lastY: 0,
          currID: null
        }, "loading" !== document.readyState ? CH(this) : document.addEventListener("DOMContentLoaded", (HH => {
          CH(this)
        }), {
          once: !0
        })
      }
      bind(HH) {
        for (var BH = arguments.length, LH = new Array(BH > 1 ? BH - 1 : 0), AH = 1; AH < BH; AH++) LH[AH - 1] = arguments[AH];
        LH.forEach((BH => {
          var LH = this._keyBindmap[BH] || [];
          LH.includes(HH) || (LH.push(HH), this._keyBindmap[BH] = LH)
        })), this.state[HH] = !!this.state[HH], this.pressCount[HH] = this.pressCount[HH] || 0, this.releaseCount[HH] = this.releaseCount[HH] || 0
      }
      unbind(HH) {
        for (var BH in this._keyBindmap) {
          var LH = this._keyBindmap[BH],
            AH = LH.indexOf(HH);
          AH > -1 && LH.splice(AH, 1)
        }
      }
      getBindings() {
        var HH = {};
        for (var BH in this._keyBindmap) {
          this._keyBindmap[BH].forEach((LH => {
            HH[LH] = HH[LH] || [], HH[LH].push(BH)
          }))
        }
        return HH
      }
      IX() {
        zH(this.mp), zH(this.pressCount), zH(this.releaseCount)
      }
    }

    function zH(HH) {
      for (var BH in HH) HH[BH] = 0
    }

    function CH(HH) {
      window.addEventListener("keydown", WH.bind(null, HH, !0), !1), window.addEventListener("keyup", WH.bind(null, HH, !1), !1);
      var BH = {
        passive: !0
      };
      HH.element.addEventListener("touchstart", YH.bind(void 0, HH), {
        passive: !1
      }), HH.element.addEventListener("touchend", QH.bind(void 0, HH), BH), HH.element.addEventListener("mousedown", MH.bind(null, HH, !0), BH), window.document.addEventListener("mouseup", MH.bind(null, HH, !1), BH), HH.element.addEventListener("touchmove", xH.bind(null, HH), BH), HH.element.addEventListener("mousemove", xH.bind(null, HH), BH), window.PointerEvent, HH.element.addEventListener("wheel", vH.bind(null, HH), BH), HH.element.addEventListener("contextmenu", PH.bind(null, HH), !1), window.addEventListener("blur", VH.bind(null, HH), !1)
    }
    var EH = 0,
      XH = 0,
      GH = null;

    function YH(HH, BH) {
      BH.preventDefault(), uH(BH)
    }

    function uH(HH) {
      let BH = !1;
      for (let LH = 0; LH < HH.touches.length; ++LH)
        if (HH.touches[LH].identifier === GH) {
          BH = !0;
          break
        } if (!BH) {
        const BH = HH.changedTouches[0];
        EH = BH.clientX, XH = BH.clientY, GH = BH.identifier
      }
    }

    function QH(HH, BH) {
      for (var LH = BH.changedTouches, AH = 0; AH < LH.length; ++AH) LH[AH].identifier === GH && (GH = null)
    }

    function WH(HH, BH, LH) {
      if (!HH.ignoreEvent(LH)) try {
        OH(HH, LH), BH && LH.isTrusted && !LH.repeat && HH._keyStates[LH.code] && bH(HH, LH.code)
      } finally {
        kH(LH.code, BH, HH, LH)
      }
    }

    function MH(HH, BH, LH) {
      if (!HH.ignoreEvent(LH)) try {
        OH(HH, LH)
      } finally {
        ! function(HH, BH, LH) {
          if ("pointerId" in LH)
            if (BH) {
              if (null !== HH._touches.currID) return;
              HH._touches.currID = LH.pointerId
            } else {
              if (HH._touches.currID !== LH.pointerId) return;
              HH._touches.currID = null
            } var AH = "button" in LH ? LH.button + 1 : 1;
          kH("Mouse" + AH, BH, HH, LH)
        }(HH, BH, LH)
      }
    }

    function xH(HH, BH) {
      var LH = BH.movementX || BH.mozMovementX || 0,
        AH = BH.movementY || BH.mozMovementY || 0;
      if (BH.touches && 0 === (LH | AH)) {
        var rH = function(HH) {
          uH(HH);
          for (let BH = 0; BH < HH.changedTouches.length; ++BH)
            if (HH.changedTouches[BH].identifier == GH) {
              const LH = HH.changedTouches[BH],
                AH = [LH.clientX - EH, LH.clientY - XH];
              return EH = LH.clientX, XH = LH.clientY, AH
            } return console.error(`Did not find touch id ${GH}`), [0, 0]
        }(BH);
        LH = rH[0], AH = rH[1]
      }
      HH.mp.dx += LH, HH.mp.dy += AH
    }

    function vH(HH, BH) {
      OH(HH, BH);
      var LH = 1;
      switch (BH.deltaMode) {
        case 0:
          LH = 1;
          break;
        case 1:
          LH = 12;
          break;
        case 2:
          LH = HH.element.clientHeight || window.innerHeight
      }
      HH.mp.uLH += (BH.deltaX || 0) * LH, HH.mp.QLH += (BH.deltaY || 0) * LH, HH.mp.WLH += (BH.deltaZ || 0) * LH
    }

    function PH(HH, BH) {
      if (!HH.kp) return BH.preventDefault(), !1
    }
    var TH = {
      AltLeft: "altKey",
      AltRight: "altKey",
      ControlLeft: "ctrlKey",
      ControlRight: "ctrlKey",
      ShiftLeft: "shiftKey",
      ShiftRight: "shiftKey",
      MetaLeft: "metaKey",
      MetaRight: "metaKey"
    };

    function UH(HH, BH) {
      return !!HH[TH[BH]] || ("AltRight" === BH || "ControlLeft" === BH) && "function" === typeof HH.getModifierState && !0 === HH.getModifierState("AltGraph")
    }

    function VH(HH, BH) {
      for (var LH in HH._modifiersHeldThroughBlur = {}, TH) HH._keyStates[LH] && (HH._modifiersHeldThroughBlur[LH] = !0);
      BH && BH.isTrusted && function() {
        try {
          return window.self !== window.top
        } catch (HH) {
          return !0
        }
      }() && (clearTimeout(HH._blurRelease), HH._blurRelease = setTimeout((function() {
        if (!document.hasFocus())
          for (var BH in HH._modifiersHeldThroughBlur = {}, HH._keyStates) HH._keyStates[BH] && !/^Mouse\d/.test(BH) && bH(HH, BH)
      }), 0))
    }

    function OH(HH, BH) {
      var LH = HH._modifiersHeldThroughBlur;
      if (LH && BH.isTrusted && document.hasFocus())
        for (var AH in LH) delete LH[AH], HH._keyStates[AH] && AH !== BH.code && (UH(BH, AH) || bH(HH, AH))
    }

    function bH(HH, BH) {
      const LH = {
          code: BH,
          preventDefault: () => {},
          stopPropagation: () => {}
        },
        AH = rH;
      rH = LH;
      try {
        kH(BH, !1, HH, LH)
      } finally {
        rH = AH
      }
    }

    function kH(HH, BH, LH, AH) {
      var rH = LH._keyBindmap[HH];
      rH && (mH(LH._keyStates[HH], BH) && (LH._keyStates[HH] = BH, rH.forEach((HH => {
        (!LH.filterEvents || LH.filterEvents(AH, HH)) && function(HH, BH, LH, AH) {
          var rH = BH ? LH.pressCount : LH.releaseCount;
          rH[HH] = (rH[HH] || 0) + 1;
          var SH = LH._bindPressCount[HH] || 0;
          (SH += BH ? 1 : -1) < 0 && (SH = 0);
          LH._bindPressCount[HH] = SH;
          var hH = LH.state[HH];
          if (mH(hH, SH)) {
            LH.state[HH] = SH > 0;
            var tH = BH ? LH.down : LH.up;
            LH.disabled || tH.emit(HH, AH)
          }
        }(HH, BH, LH, AH)
      }))), "button" in AH || (LH.Qp && !AH.defaultPrevented && AH.preventDefault(), LH.stopPropagation && AH.stopPropagation()))
    }

    function mH(HH, BH) {
      return HH ? !BH : BH
    }
  },
  37424: (HH, BH) => {
    function LH(HH) {
      if (HH && "object" === typeof HH) {
        var BH = HH.which || HH.keyCode || HH.charCode;
        BH && (HH = BH)
      }
      if ("number" === typeof HH) return hH[HH];
      var LH, SH = String(HH);
      return (LH = AH[SH.toLowerCase()]) ? LH : (LH = rH[SH.toLowerCase()]) || (1 === SH.length ? SH.charCodeAt(0) : void 0)
    }
    LH.isEventKey = function(HH, BH) {
      if (HH && "object" === typeof HH) {
        var LH = HH.which || HH.keyCode || HH.charCode;
        if (null === LH || void 0 === LH) return !1;
        if ("string" === typeof BH) {
          var SH;
          if (SH = AH[BH.toLowerCase()]) return SH === LH;
          if (SH = rH[BH.toLowerCase()]) return SH === LH
        } else if ("number" === typeof BH) return BH === LH;
        return !1
      }
    };
    var AH = (BH = HH.exports = LH).code = BH.codes = {
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
      rH = BH.aliases = {
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
    for (SH = 97; SH < 123; SH++) AH[String.fromCharCode(SH)] = SH - 32;
    for (var SH = 48; SH < 58; SH++) AH[SH - 48] = SH;
    for (SH = 1; SH < 13; SH++) AH["f" + SH] = SH + 111;
    for (SH = 0; SH < 10; SH++) AH["numpad " + SH] = SH + 96;
    var hH = BH.names = BH.title = {};
    for (SH in AH) hH[AH[SH]] = SH;
    for (var tH in rH) AH[tH] = rH[tH]
  },
  40601: (HH, BH, LH) => {
    LH.d(BH, {
      b: () => AH
    });
    class AH {
      constructor() {
        let HH = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
          BH = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 10;
        this.qD = !1, this.RD = !1, this.oN = 30, this.mD = 0, this.jD = 100, this.ZW = !1, this.fullscreen = !1, this.Dv = function(HH) {}, this.nD = function(HH, BH, LH) {}, this.KX = function() {}, this.Av = function() {}, this.ZD = function() {}, this.onFullscreenChanged = function() {}, this.onPointerLockError = function(HH) {}, this._data = new rH(BH),
          function(HH) {
            if ("loading" === document.readyState) {
              var BH = () => {
                document.removeEventListener("readystatechange", BH), HH()
              };
              document.addEventListener("readystatechange", BH)
            } else setTimeout(HH, 0)
          }((() => {
            ! function(HH) {
              var BH = HH._data,
                LH = BH.nowObject.now();
              BH.lastTickStarted = LH, BH.lastFrameStarted = LH, BH.lastRenderStarted = LH, BH.frameCB = () => function(HH) {
                var BH = HH._data;
                requestAnimationFrame(BH.frameCB), tH(HH);
                var LH = BH.nowObject.now(),
                  AH = LH - BH.lastFrameStarted;
                if (BH.lastFrameStarted = LH, HH.mD > 0) {
                  BH.renderAccum += AH;
                  var rH = 1e3 / HH.mD;
                  if (BH.renderAccum < rH) return;
                  BH.renderAccum -= rH, BH.renderAccum > rH && (BH.renderAccum = rH)
                }
                var SH = LH - BH.lastRenderStarted;
                BH.lastRenderStarted = LH;
                var hH = 1e3 / HH.oN,
                  zH = (LH - BH.lastTickStarted) / hH;
                zH < 0 && (zH = 0);
                HH.nD(SH, zH, hH), setTimeout(tH, 0, HH, !0)
              }(HH), BH.intervalCB = () => tH(HH), requestAnimationFrame(BH.frameCB), BH.pollTime > 0 && (BH.intervalID = setInterval(BH.intervalCB, Math.max(BH.pollTime, 1e3 / HH.oN / 2)))
            }(this),
            function(HH, BH) {
              if (!BH) return;
              var LH = !1,
                AH = !1,
                rH = HH => {
                  if (!!HH !== (LH = BH === document.pointerLockElement))
                    if (HH) {
                      var AH = BH.requestPointerLock();
                      AH && AH.catch && AH.catch((HH => {}))
                    } else document.exitPointerLock()
                },
                SH = HH => {
                  !!HH !== (AH = BH === document.fullscreenElement) && (HH ? BH.requestFullscreen ? BH.requestFullscreen() : BH.webkitRequestFullscreen && BH.webkitRequestFullscreen() : document.exitFullscreen ? document.exitFullscreen() : document.webkitExitFullscreen && document.webkitExitFullscreen())
                };
              document.addEventListener("pointerlockchange", (AH => {
                LH = BH === document.pointerLockElement, HH.ZD(LH)
              })), document.addEventListener("fullscreenchange", (LH => {
                AH = BH === document.fullscreenElement, HH.onFullscreenChanged(AH)
              })), document.addEventListener("pointerlockerror", (AH => {
                LH = BH === document.pointerLockElement, HH.onPointerLockError(AH)
              })), Object.defineProperty(HH, "ZW", {
                get: () => LH,
                set: rH
              }), Object.defineProperty(HH, "fullscreen", {
                get: () => AH,
                set: SH
              }), BH.addEventListener("click", (BH => {
                HH.qD && rH(!0), HH.RD && SH(!0)
              }));
              var hH = () => HH.Av();
              if (window.ResizeObserver) {
                new ResizeObserver(hH).observe(BH)
              } else window.addEventListener("resize", hH)
            }(this, HH), this.KX()
          }))
      }
    }

    function rH() {
      let HH = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 10;
      this.nowObject = performance || Date, this.pollTime = HH, this.renderAccum = 0, this.lastTickStarted = 0, this.lastFrameStarted = 0, this.lastRenderStarted = 0, this.avgTickTime = 2, this.frameCB = null, this.intervalCB = null, this.intervalID = -1
    }
    var SH = 3,
      hH = 20;

    function tH(HH) {
      for (var BH = HH._data, LH = 1e3 / HH.oN, AH = BH.nowObject.now() + hH, rH = 0; BH.nowObject.now() >= BH.lastTickStarted + LH && BH.nowObject.now() < AH && ++rH <= SH;) HH.Dv(LH), BH.lastTickStarted += LH;
      var tH = 5 * (LH + 5),
        zH = BH.nowObject.now();
      if (zH - BH.lastTickStarted > tH)
        for (; zH >= BH.lastTickStarted + LH;) BH.lastTickStarted += LH
    }
  },
  37578: (HH, BH, LH) => {
    LH.d(BH, {
      e: () => hH
    });
    var AH = LH(45);
    const rH = AH.useLayoutEffect;
    const SH = function(HH) {
      var BH = (0, AH.useRef)(HH);
      return rH((function() {
        BH.current = HH
      })), BH
    };
    var hH = function(HH) {
      var BH = SH(HH);
      (0, AH.useEffect)((function() {
        var HH = function(HH) {
          var LH;
          if (null != BH.current && (LH = BH.current(HH)), HH.defaultPrevented && (HH.returnValue = ""), "string" === typeof LH) return HH.returnValue = LH, LH
        };
        return window.addEventListener("beforeunload", HH),
          function() {
            window.removeEventListener("beforeunload", HH)
          }
      }), [])
    }
  },
  37461: HH => {
    var BH, LH = "undefined" !== typeof window ? window.navigator.userAgent : "",
      AH = /OS X/.test(LH),
      rH = /Opera/.test(LH),
      SH = !/like Gecko/.test(LH) && !rH,
      hH = HH.exports = {
        0: AH ? "<menu>" : "<UNK>",
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
        93: AH ? "<meta>" : "<menu>",
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
        173: AH && SH ? "-" : "<volume-mute>",
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
        231: rH ? "`" : "<unicode>",
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
    for (BH = 58; BH < 65; ++BH) hH[BH] = String.fromCharCode(BH);
    for (BH = 48; BH < 58; ++BH) hH[BH] = BH - 48 + "";
    for (BH = 65; BH < 91; ++BH) hH[BH] = String.fromCharCode(BH);
    for (BH = 96; BH < 106; ++BH) hH[BH] = "<num-" + (BH - 96) + ">";
    for (BH = 112; BH < 136; ++BH) hH[BH] = "F" + (BH - 111)
  },
  39903: (HH, BH, LH) => {
    function AH(HH, BH, LH, AH, rH) {
      var SH = {};
      return Object.keys(AH).forEach((function(HH) {
        SH[HH] = AH[HH]
      })), SH.enumerable = !!SH.enumerable, SH.configurable = !!SH.configurable, ("value" in SH || SH.initializer) && (SH.writable = !0), SH = LH.slice().reverse().reduce((function(LH, AH) {
        return AH(HH, BH, LH) || LH
      }), SH), rH && void 0 !== SH.initializer && (SH.value = SH.initializer ? SH.initializer.call(rH) : void 0, SH.initializer = void 0), void 0 === SH.initializer && (Object.defineProperty(HH, BH, SH), SH = null), SH
    }
    LH.d(BH, {
      b: () => AH
    })
  },
  39899: (HH, BH, LH) => {
    function AH(HH, BH, LH, AH) {
      LH && Object.defineProperty(HH, BH, {
        enumerable: LH.enumerable,
        configurable: LH.configurable,
        writable: LH.writable,
        value: LH.initializer ? LH.initializer.call(AH) : void 0
      })
    }
    LH.d(BH, {
      c: () => AH
    })
  },
  39588: (HH, BH, LH) => {
    LH.d(BH, {
      d: () => SH
    });
    var AH = LH(39595);
    const rH = (HH, BH, LH) => HH ? HH.getClassName && "Mesh" === HH.getClassName() ? null : !HH.getClassName || "SubMesh" !== HH.getClassName() && "PhysicsBody" !== HH.getClassName() ? HH.clone ? HH.clone() : Array.isArray(HH) ? HH.slice() : LH && "object" === typeof HH ? {
      ...HH
    } : null : HH.clone(BH) : null;
    class SH {
      static DeepCopy(HH, BH, LH, SH) {
        let hH = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
        const tH = function(HH) {
          const BH = [];
          do {
            const LH = Object.getOwnPropertyNames(HH);
            for (const HH of LH) - 1 === BH.indexOf(HH) && BH.push(HH)
          } while (HH = Object.getPrototypeOf(HH));
          return BH
        }(HH);
        for (const CH of tH) {
          if ("_" === CH[0] && (!SH || -1 === SH.indexOf(CH))) continue;
          if (CH.endsWith("Observable")) continue;
          if (LH && -1 !== LH.indexOf(CH)) continue;
          const tH = HH[CH],
            EH = typeof tH;
          if ("function" !== EH) try {
            if ("object" === EH)
              if (tH instanceof Uint8Array) BH[CH] = Uint8Array.from(tH);
              else if (tH instanceof Array) {
              if (BH[CH] = [], tH.length > 0)
                if ("object" == typeof tH[0])
                  for (let HH = 0; HH < tH.length; HH++) {
                    const LH = rH(tH[HH], BH, hH); - 1 === BH[CH].indexOf(LH) && BH[CH].push(LH)
                  } else BH[CH] = tH.slice(0)
            } else BH[CH] = rH(tH, BH, hH);
            else BH[CH] = tH
          } catch (zH) {
            AH.e.Warn(zH.message)
          }
        }
      }
    }
  },
  39627: (HH, BH, LH) => {
    LH.d(BH, {
      e: () => rH,
      i: () => SH,
      m: () => hH,
      o: () => tH
    });
    var AH = LH(38074);
    class rH {
      constructor(HH, BH, LH) {
        this.gradient = HH, this.color1 = BH, this.color2 = LH
      }
      getColorToRef(HH) {
        this.color2 ? AH.g.LerpToRef(this.color1, this.color2, Math.random(), HH) : HH.Tm(this.color1)
      }
    }
    class SH {
      constructor(HH, BH) {
        this.gradient = HH, this.color = BH
      }
    }
    class hH {
      constructor(HH, BH, LH) {
        this.gradient = HH, this.factor1 = BH, this.factor2 = LH
      }
      getFactor() {
        return void 0 === this.factor2 || this.factor2 === this.factor1 ? this.factor1 : this.factor1 + (this.factor2 - this.factor1) * Math.random()
      }
    }
    class tH {
      static GetCurrentGradient(HH, BH, LH) {
        if (BH[0].gradient > HH) return void LH(BH[0], BH[0], 1);
        for (let rH = 0; rH < BH.length - 1; rH++) {
          const AH = BH[rH],
            SH = BH[rH + 1];
          if (HH >= AH.gradient && HH <= SH.gradient) {
            return void LH(AH, SH, (HH - AH.gradient) / (SH.gradient - AH.gradient))
          }
        }
        const AH = BH.length - 1;
        LH(BH[AH], BH[AH], 1)
      }
    }
  },
  39595: (HH, BH, LH) => {
    LH.d(BH, {
      e: () => AH
    });
    class AH {
      static _CheckLimit(HH, BH) {
        let LH = AH._LogLimitOutputs[HH];
        return LH ? LH.current++ : (LH = {
          limit: BH,
          current: 1
        }, AH._LogLimitOutputs[HH] = LH), LH.current <= LH.limit
      }
      static _GenerateLimitMessage(HH) {
        let BH = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
        const LH = AH._LogLimitOutputs[HH];
        if (!LH || !AH.MessageLimitReached) return;
        const rH = this._Levels[BH];
        LH.current === LH.limit && AH[rH.name](AH.MessageLimitReached.replace(/%LIMIT%/g, "" + LH.limit).replace(/%TYPE%/g, rH.name ?? ""))
      }
      static _AddLogEntry(HH) {
        AH._LogCache = HH + AH._LogCache, AH.OnNewCacheEntry && AH.OnNewCacheEntry(HH)
      }
      static _FormatMessage(HH) {
        const BH = HH => HH < 10 ? "0" + HH : "" + HH,
          LH = new Date;
        return "[" + BH(LH.getHours()) + ":" + BH(LH.getMinutes()) + ":" + BH(LH.getSeconds()) + "]: " + HH
      }
      static _LogDisabled(HH, BH) {}
      static _LogEnabled() {
        let HH = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
          BH = arguments.length > 1 ? arguments[1] : void 0,
          LH = arguments.length > 2 ? arguments[2] : void 0;
        const rH = Array.isArray(BH) ? BH[0] : BH;
        if (void 0 !== LH && !AH._CheckLimit(rH, LH)) return;
        const SH = AH._FormatMessage(rH),
          hH = this._Levels[HH],
          tH = Array.isArray(BH) ? BH.slice(1) : [];
        hH.logFunc && hH.logFunc("BJS - " + SH, ...tH);
        const zH = `<div style='color:${hH.color}'>${SH}</div><br>`;
        AH._AddLogEntry(zH), AH._GenerateLimitMessage(rH, HH)
      }
      static get LogCache() {
        return AH._LogCache
      }
      static ClearLogCache() {
        AH._LogCache = "", AH._LogLimitOutputs = {}, AH.errorsCount = 0
      }
      static set LogLevels(HH) {
        AH.Log = AH._LogDisabled, AH.Warn = AH._LogDisabled, AH.Error = AH._LogDisabled;
        const BH = [AH.MessageLogLevel, AH.WarningLogLevel, AH.ErrorLogLevel];
        for (const LH of BH)
          if ((HH & LH) === LH) {
            const HH = this._Levels[LH];
            AH[HH.name] = AH._LogEnabled.bind(AH, LH)
          }
      }
    }
    AH.NoneLogLevel = 0, AH.MessageLogLevel = 1, AH.WarningLogLevel = 2, AH.ErrorLogLevel = 4, AH.AllLogLevel = 7, AH.MessageLimitReached = "Too many %TYPE%s (%LIMIT%), no more %TYPE%s will be reported for this message.", AH._LogCache = "", AH._LogLimitOutputs = {}, AH._Levels = [{}, {
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
    }], AH.errorsCount = 0, AH.Log = AH._LogEnabled.bind(AH, AH.MessageLogLevel), AH.Warn = AH._LogEnabled.bind(AH, AH.WarningLogLevel), AH.Error = AH._LogEnabled.bind(AH, AH.ErrorLogLevel)
  },
  39633: (HH, BH, LH) => {
    LH.d(BH, {
      b: () => hH
    });
    var AH = LH(37963),
      rH = LH(38002),
      SH = LH(39588);
    class hH {
      constructor() {
        this.direction1 = new AH.o(0, 1, 0), this.direction2 = new AH.o(0, 1, 0), this.minEmitBox = new AH.o(-.5, -.5, -.5), this.maxEmitBox = new AH.o(.5, .5, .5)
      }
      startDirectionFunction(HH, BH, LH, SH) {
        const hH = (0, rH.RandomRange)(this.direction1.x, this.direction2.x),
          tH = (0, rH.RandomRange)(this.direction1.y, this.direction2.y),
          zH = (0, rH.RandomRange)(this.direction1.z, this.direction2.z);
        if (SH) return BH.x = hH, BH.y = tH, void(BH.z = zH);
        AH.o.TransformNormalFromFloatsToRef(hH, tH, zH, HH, BH)
      }
      startPositionFunction(HH, BH, LH, SH) {
        const hH = (0, rH.RandomRange)(this.minEmitBox.x, this.maxEmitBox.x),
          tH = (0, rH.RandomRange)(this.minEmitBox.y, this.maxEmitBox.y),
          zH = (0, rH.RandomRange)(this.minEmitBox.z, this.maxEmitBox.z);
        if (SH) return BH.x = hH, BH.y = tH, void(BH.z = zH);
        AH.o.TransformCoordinatesFromFloatsToRef(hH, tH, zH, HH, BH)
      }
      clone() {
        const HH = new hH;
        return SH.d.DeepCopy(this, HH), HH
      }
      applyToShader(HH) {
        HH.setVector3("direction1", this.direction1), HH.setVector3("direction2", this.direction2), HH.setVector3("minEmitBox", this.minEmitBox), HH.setVector3("maxEmitBox", this.maxEmitBox)
      }
      buildUniformLayout(HH) {
        HH.addUniform("direction1", 3), HH.addUniform("direction2", 3), HH.addUniform("minEmitBox", 3), HH.addUniform("maxEmitBox", 3)
      }
      getEffectDefines() {
        return "#define BOXEMITTER"
      }
      getClassName() {
        return "BoxParticleEmitter"
      }
      serialize() {
        const HH = {};
        return HH.type = this.getClassName(), HH.direction1 = this.direction1.xrH(), HH.direction2 = this.direction2.xrH(), HH.minEmitBox = this.minEmitBox.xrH(), HH.maxEmitBox = this.maxEmitBox.xrH(), HH
      }
      parse(HH) {
        AH.o.FromArrayToRef(HH.direction1, 0, this.direction1), AH.o.FromArrayToRef(HH.direction2, 0, this.direction2), AH.o.FromArrayToRef(HH.minEmitBox, 0, this.minEmitBox), AH.o.FromArrayToRef(HH.maxEmitBox, 0, this.maxEmitBox)
      }
    }
  },
  39580: (HH, BH, LH) => {
    LH.d(BH, {
      d: () => tH,
      g: () => hH
    });
    var AH = LH(37963),
      rH = LH(38002),
      SH = LH(39588);
    class hH {
      constructor() {
        let HH = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
          BH = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
          LH = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1,
          rH = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
        this.radius = HH, this.height = BH, this.radiusRange = LH, this.directionRandomizer = rH, this._tempVector = AH.o.Zero()
      }
      startDirectionFunction(HH, BH, LH, SH, hH) {
        LH.position.subtractToRef(HH.getTranslation(), this._tempVector), this._tempVector.normalize(), AH.o.TransformNormalToRef(this._tempVector, hH, this._tempVector);
        const tH = (0, rH.RandomRange)(-this.directionRandomizer / 2, this.directionRandomizer / 2);
        let zH = Math.atan2(this._tempVector.x, this._tempVector.z);
        zH += (0, rH.RandomRange)(-Math.PI / 2, Math.PI / 2) * this.directionRandomizer, this._tempVector.y = tH, this._tempVector.x = Math.sin(zH), this._tempVector.z = Math.cos(zH), this._tempVector.normalize(), SH ? BH.Tm(this._tempVector) : AH.o.TransformNormalFromFloatsToRef(this._tempVector.x, this._tempVector.y, this._tempVector.z, HH, BH)
      }
      startPositionFunction(HH, BH, LH, SH) {
        const hH = (0, rH.RandomRange)(-this.height / 2, this.height / 2),
          tH = (0, rH.RandomRange)(0, 2 * Math.PI),
          zH = (0, rH.RandomRange)((1 - this.radiusRange) * (1 - this.radiusRange), 1),
          CH = Math.sqrt(zH) * this.radius,
          EH = CH * Math.cos(tH),
          XH = CH * Math.sin(tH);
        SH ? BH.SBH(EH, hH, XH) : AH.o.TransformCoordinatesFromFloatsToRef(EH, hH, XH, HH, BH)
      }
      clone() {
        const HH = new hH(this.radius, this.directionRandomizer);
        return SH.d.DeepCopy(this, HH), HH
      }
      applyToShader(HH) {
        HH.setFloat("radius", this.radius), HH.setFloat("height", this.height), HH.setFloat("radiusRange", this.radiusRange), HH.setFloat("directionRandomizer", this.directionRandomizer)
      }
      buildUniformLayout(HH) {
        HH.addUniform("radius", 1), HH.addUniform("height", 1), HH.addUniform("radiusRange", 1), HH.addUniform("directionRandomizer", 1)
      }
      getEffectDefines() {
        return "#define CYLINDEREMITTER"
      }
      getClassName() {
        return "CylinderParticleEmitter"
      }
      serialize() {
        const HH = {};
        return HH.type = this.getClassName(), HH.radius = this.radius, HH.height = this.height, HH.radiusRange = this.radiusRange, HH.directionRandomizer = this.directionRandomizer, HH
      }
      parse(HH) {
        this.radius = HH.radius, this.height = HH.height, this.radiusRange = HH.radiusRange, this.directionRandomizer = HH.directionRandomizer
      }
    }
    class tH extends hH {
      constructor() {
        let HH = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
          BH = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
          LH = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1,
          rH = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : new AH.o(0, 1, 0),
          SH = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : new AH.o(0, 1, 0);
        super(HH, BH, LH), this.direction1 = rH, this.direction2 = SH
      }
      startDirectionFunction(HH, BH, LH, SH) {
        const hH = (0, rH.RandomRange)(this.direction1.x, this.direction2.x),
          tH = (0, rH.RandomRange)(this.direction1.y, this.direction2.y),
          zH = (0, rH.RandomRange)(this.direction1.z, this.direction2.z);
        SH ? BH.SBH(hH, tH, zH) : AH.o.TransformNormalFromFloatsToRef(hH, tH, zH, HH, BH)
      }
      clone() {
        const HH = new tH(this.radius, this.height, this.radiusRange, this.direction1, this.direction2);
        return SH.d.DeepCopy(this, HH), HH
      }
      applyToShader(HH) {
        HH.setFloat("radius", this.radius), HH.setFloat("height", this.height), HH.setFloat("radiusRange", this.radiusRange), HH.setVector3("direction1", this.direction1), HH.setVector3("direction2", this.direction2)
      }
      buildUniformLayout(HH) {
        HH.addUniform("radius", 1), HH.addUniform("height", 1), HH.addUniform("radiusRange", 1), HH.addUniform("direction1", 3), HH.addUniform("direction2", 3)
      }
      getEffectDefines() {
        return "#define CYLINDEREMITTER\n#define DIRECTEDCYLINDEREMITTER"
      }
      getClassName() {
        return "CylinderDirectedParticleEmitter"
      }
      serialize() {
        const HH = super.serialize();
        return HH.direction1 = this.direction1.xrH(), HH.direction2 = this.direction2.xrH(), HH
      }
      parse(HH) {
        super.parse(HH), AH.o.FromArrayToRef(HH.direction1, 0, this.direction1), AH.o.FromArrayToRef(HH.direction2, 0, this.direction2)
      }
    }
  },
  39723: (HH, BH, LH) => {
    LH.d(BH, {
      d: () => XH
    });
    const AH = .5 * (Math.sqrt(3) - 1),
      rH = (3 - Math.sqrt(3)) / 6,
      SH = 1 / 3,
      hH = 1 / 6,
      tH = (Math.sqrt(5) - 1) / 4,
      zH = (5 - Math.sqrt(5)) / 20,
      CH = new Float32Array([1, 1, 0, -1, 1, 0, 1, -1, 0, -1, -1, 0, 1, 0, 1, -1, 0, 1, 1, 0, -1, -1, 0, -1, 0, 1, 1, 0, -1, 1, 0, 1, -1, 0, -1, -1]),
      EH = new Float32Array([0, 1, 1, 1, 0, 1, 1, -1, 0, 1, -1, 1, 0, 1, -1, -1, 0, -1, 1, 1, 0, -1, 1, -1, 0, -1, -1, 1, 0, -1, -1, -1, 1, 0, 1, 1, 1, 0, 1, -1, 1, 0, -1, 1, 1, 0, -1, -1, -1, 0, 1, 1, -1, 0, 1, -1, -1, 0, -1, 1, -1, 0, -1, -1, 1, 1, 0, 1, 1, 1, 0, -1, 1, -1, 0, 1, 1, -1, 0, -1, -1, 1, 0, 1, -1, 1, 0, -1, -1, -1, 0, 1, -1, -1, 0, -1, 1, 1, 1, 0, 1, 1, -1, 0, 1, -1, 1, 0, 1, -1, -1, 0, -1, 1, 1, 0, -1, 1, -1, 0, -1, -1, 1, 0, -1, -1, -1, 0]);
    const XH = class {
      constructor() {
        let HH = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Math.random;
        const BH = "function" == typeof HH ? HH : function(HH) {
          let BH = 0,
            LH = 0,
            AH = 0,
            rH = 1;
          const SH = function() {
            let HH = 4022871197;
            return function(BH) {
              BH = BH.toString();
              for (let LH = 0; LH < BH.length; LH++) {
                HH += BH.charCodeAt(LH);
                let AH = .02519603282416938 * HH;
                HH = AH >>> 0, AH -= HH, AH *= HH, HH = AH >>> 0, AH -= HH, HH += 4294967296 * AH
              }
              return 2.3283064365386963e-10 * (HH >>> 0)
            }
          }();
          BH = SH(" "), LH = SH(" "), AH = SH(" "), BH -= SH(HH), BH < 0 && (BH += 1);
          LH -= SH(HH), LH < 0 && (LH += 1);
          AH -= SH(HH), AH < 0 && (AH += 1);
          return function() {
            const HH = 2091639 * BH + 2.3283064365386963e-10 * rH;
            return BH = LH, LH = AH, AH = HH - (rH = 0 | HH)
          }
        }(HH);
        this.p = function(HH) {
          const BH = new Uint8Array(256);
          for (let LH = 0; LH < 256; LH++) BH[LH] = LH;
          for (let LH = 0; LH < 255; LH++) {
            const AH = LH + ~~(HH() * (256 - LH)),
              rH = BH[LH];
            BH[LH] = BH[AH], BH[AH] = rH
          }
          return BH
        }(BH), this.perm = new Uint8Array(512), this.permMod12 = new Uint8Array(512);
        for (let LH = 0; LH < 512; LH++) this.perm[LH] = this.p[255 & LH], this.permMod12[LH] = this.perm[LH] % 12
      }
      noise2D(HH, BH) {
        const LH = this.permMod12,
          SH = this.perm;
        let hH = 0,
          tH = 0,
          zH = 0;
        const EH = (HH + BH) * AH,
          XH = Math.floor(HH + EH),
          GH = Math.floor(BH + EH),
          YH = (XH + GH) * rH,
          uH = HH - (XH - YH),
          QH = BH - (GH - YH);
        let WH, MH;
        uH > QH ? (WH = 1, MH = 0) : (WH = 0, MH = 1);
        const xH = uH - WH + rH,
          vH = QH - MH + rH,
          PH = uH - 1 + 2 * rH,
          TH = QH - 1 + 2 * rH,
          UH = 255 & XH,
          VH = 255 & GH;
        let OH = .5 - uH * uH - QH * QH;
        if (OH >= 0) {
          const HH = 3 * LH[UH + SH[VH]];
          OH *= OH, hH = OH * OH * (CH[HH] * uH + CH[HH + 1] * QH)
        }
        let bH = .5 - xH * xH - vH * vH;
        if (bH >= 0) {
          const HH = 3 * LH[UH + WH + SH[VH + MH]];
          bH *= bH, tH = bH * bH * (CH[HH] * xH + CH[HH + 1] * vH)
        }
        let kH = .5 - PH * PH - TH * TH;
        if (kH >= 0) {
          const HH = 3 * LH[UH + 1 + SH[VH + 1]];
          kH *= kH, zH = kH * kH * (CH[HH] * PH + CH[HH + 1] * TH)
        }
        return 70 * (hH + tH + zH)
      }
      noise3D(HH, BH, LH) {
        const AH = this.permMod12,
          rH = this.perm;
        let tH, zH, EH, XH;
        const GH = (HH + BH + LH) * SH,
          YH = Math.floor(HH + GH),
          uH = Math.floor(BH + GH),
          QH = Math.floor(LH + GH),
          WH = (YH + uH + QH) * hH,
          MH = HH - (YH - WH),
          xH = BH - (uH - WH),
          vH = LH - (QH - WH);
        let PH, TH, UH, VH, OH, bH;
        MH >= xH ? xH >= vH ? (PH = 1, TH = 0, UH = 0, VH = 1, OH = 1, bH = 0) : MH >= vH ? (PH = 1, TH = 0, UH = 0, VH = 1, OH = 0, bH = 1) : (PH = 0, TH = 0, UH = 1, VH = 1, OH = 0, bH = 1) : xH < vH ? (PH = 0, TH = 0, UH = 1, VH = 0, OH = 1, bH = 1) : MH < vH ? (PH = 0, TH = 1, UH = 0, VH = 0, OH = 1, bH = 1) : (PH = 0, TH = 1, UH = 0, VH = 1, OH = 1, bH = 0);
        const kH = MH - PH + hH,
          mH = xH - TH + hH,
          oH = vH - UH + hH,
          IH = MH - VH + 2 * hH,
          fH = xH - OH + 2 * hH,
          lH = vH - bH + 2 * hH,
          KH = MH - 1 + .5,
          cH = xH - 1 + .5,
          eH = vH - 1 + .5,
          qH = 255 & YH,
          gH = 255 & uH,
          NH = 255 & QH;
        let RH = .6 - MH * MH - xH * xH - vH * vH;
        if (RH < 0) tH = 0;
        else {
          const HH = 3 * AH[qH + rH[gH + rH[NH]]];
          RH *= RH, tH = RH * RH * (CH[HH] * MH + CH[HH + 1] * xH + CH[HH + 2] * vH)
        }
        let jH = .6 - kH * kH - mH * mH - oH * oH;
        if (jH < 0) zH = 0;
        else {
          const HH = 3 * AH[qH + PH + rH[gH + TH + rH[NH + UH]]];
          jH *= jH, zH = jH * jH * (CH[HH] * kH + CH[HH + 1] * mH + CH[HH + 2] * oH)
        }
        let nH = .6 - IH * IH - fH * fH - lH * lH;
        if (nH < 0) EH = 0;
        else {
          const HH = 3 * AH[qH + VH + rH[gH + OH + rH[NH + bH]]];
          nH *= nH, EH = nH * nH * (CH[HH] * IH + CH[HH + 1] * fH + CH[HH + 2] * lH)
        }
        let FH = .6 - KH * KH - cH * cH - eH * eH;
        if (FH < 0) XH = 0;
        else {
          const HH = 3 * AH[qH + 1 + rH[gH + 1 + rH[NH + 1]]];
          FH *= FH, XH = FH * FH * (CH[HH] * KH + CH[HH + 1] * cH + CH[HH + 2] * eH)
        }
        return 32 * (tH + zH + EH + XH)
      }
      noise4D(HH, BH, LH, AH) {
        const rH = this.perm;
        let SH, hH, CH, XH, GH;
        const YH = (HH + BH + LH + AH) * tH,
          uH = Math.floor(HH + YH),
          QH = Math.floor(BH + YH),
          WH = Math.floor(LH + YH),
          MH = Math.floor(AH + YH),
          xH = (uH + QH + WH + MH) * zH,
          vH = HH - (uH - xH),
          PH = BH - (QH - xH),
          TH = LH - (WH - xH),
          UH = AH - (MH - xH);
        let VH = 0,
          OH = 0,
          bH = 0,
          kH = 0;
        vH > PH ? VH++ : OH++, vH > TH ? VH++ : bH++, vH > UH ? VH++ : kH++, PH > TH ? OH++ : bH++, PH > UH ? OH++ : kH++, TH > UH ? bH++ : kH++;
        const mH = VH >= 3 ? 1 : 0,
          oH = OH >= 3 ? 1 : 0,
          IH = bH >= 3 ? 1 : 0,
          fH = kH >= 3 ? 1 : 0,
          lH = VH >= 2 ? 1 : 0,
          KH = OH >= 2 ? 1 : 0,
          cH = bH >= 2 ? 1 : 0,
          eH = kH >= 2 ? 1 : 0,
          qH = VH >= 1 ? 1 : 0,
          gH = OH >= 1 ? 1 : 0,
          NH = bH >= 1 ? 1 : 0,
          RH = kH >= 1 ? 1 : 0,
          jH = vH - mH + zH,
          nH = PH - oH + zH,
          FH = TH - IH + zH,
          DH = UH - fH + zH,
          wH = vH - lH + 2 * zH,
          ZH = PH - KH + 2 * zH,
          dH = TH - cH + 2 * zH,
          aH = UH - eH + 2 * zH,
          sH = vH - qH + 3 * zH,
          JH = PH - gH + 3 * zH,
          iH = TH - NH + 3 * zH,
          pH = UH - RH + 3 * zH,
          yH = vH - 1 + 4 * zH,
          HB = PH - 1 + 4 * zH,
          BB = TH - 1 + 4 * zH,
          LB = UH - 1 + 4 * zH,
          AB = 255 & uH,
          rB = 255 & QH,
          SB = 255 & WH,
          hB = 255 & MH;
        let tB = .6 - vH * vH - PH * PH - TH * TH - UH * UH;
        if (tB < 0) SH = 0;
        else {
          const HH = rH[AB + rH[rB + rH[SB + rH[hB]]]] % 32 * 4;
          tB *= tB, SH = tB * tB * (EH[HH] * vH + EH[HH + 1] * PH + EH[HH + 2] * TH + EH[HH + 3] * UH)
        }
        let zB = .6 - jH * jH - nH * nH - FH * FH - DH * DH;
        if (zB < 0) hH = 0;
        else {
          const HH = rH[AB + mH + rH[rB + oH + rH[SB + IH + rH[hB + fH]]]] % 32 * 4;
          zB *= zB, hH = zB * zB * (EH[HH] * jH + EH[HH + 1] * nH + EH[HH + 2] * FH + EH[HH + 3] * DH)
        }
        let CB = .6 - wH * wH - ZH * ZH - dH * dH - aH * aH;
        if (CB < 0) CH = 0;
        else {
          const HH = rH[AB + lH + rH[rB + KH + rH[SB + cH + rH[hB + eH]]]] % 32 * 4;
          CB *= CB, CH = CB * CB * (EH[HH] * wH + EH[HH + 1] * ZH + EH[HH + 2] * dH + EH[HH + 3] * aH)
        }
        let EB = .6 - sH * sH - JH * JH - iH * iH - pH * pH;
        if (EB < 0) XH = 0;
        else {
          const HH = rH[AB + qH + rH[rB + gH + rH[SB + NH + rH[hB + RH]]]] % 32 * 4;
          EB *= EB, XH = EB * EB * (EH[HH] * sH + EH[HH + 1] * JH + EH[HH + 2] * iH + EH[HH + 3] * pH)
        }
        let XB = .6 - yH * yH - HB * HB - BB * BB - LB * LB;
        if (XB < 0) GH = 0;
        else {
          const HH = rH[AB + 1 + rH[rB + 1 + rH[SB + 1 + rH[hB + 1]]]] % 32 * 4;
          XB *= XB, GH = XB * XB * (EH[HH] * yH + EH[HH + 1] * HB + EH[HH + 2] * BB + EH[HH + 3] * LB)
        }
        return 27 * (SH + hH + CH + XH + GH)
      }
    }
  }
};
Object.freeze(modules);
for (const HH in modules) Object.freeze(modules[HH]);