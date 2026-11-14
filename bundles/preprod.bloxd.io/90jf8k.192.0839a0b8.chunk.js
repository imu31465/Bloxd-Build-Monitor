/*! For license information please see 90jf8k.192.0839a0b8.chunk.js.LICENSE.txt */
export const id = 192;
export const ids = [192];
export const modules = {
  37694: (FF, WF, SF) => {
    FF.exports = AF;
    var CF = SF(282);

    function AF(FF, WF) {
      if (!(this instanceof AF)) return new AF(FF, WF);
      var SF = CF.create();
      CF.add(SF, FF, WF), this.base = CF.min(CF.create(), FF, SF), this.vec = CF.clone(WF), this.max = CF.max(CF.create(), FF, SF), this.mag = CF.length(this.vec)
    }
    var uF = AF.prototype;
    uF.width = function() {
      return this.vec[0]
    }, uF.height = function() {
      return this.vec[1]
    }, uF.depth = function() {
      return this.vec[2]
    }, uF.x0 = function() {
      return this.base[0]
    }, uF.y0 = function() {
      return this.base[1]
    }, uF.z0 = function() {
      return this.base[2]
    }, uF.x1 = function() {
      return this.max[0]
    }, uF.y1 = function() {
      return this.max[1]
    }, uF.z1 = function() {
      return this.max[2]
    }, uF.translate = function(FF) {
      return CF.add(this.max, this.max, FF), CF.add(this.base, this.base, FF), this
    }, uF.setPosition = function(FF) {
      return CF.add(this.max, FF, this.vec), CF.copy(this.base, FF), this
    }, uF.expand = function(FF) {
      var WF = CF.create(),
        SF = CF.create();
      return CF.max(WF, FF.max, this.max), CF.min(SF, FF.base, this.base), CF.subtract(WF, WF, SF), new AF(SF, WF)
    }, uF.intersects = function(FF) {
      return !(FF.base[0] > this.max[0]) && (!(FF.base[1] > this.max[1]) && (!(FF.base[2] > this.max[2]) && (!(FF.max[0] < this.base[0]) && (!(FF.max[1] < this.base[1]) && !(FF.max[2] < this.base[2])))))
    }, uF.touches = function(FF) {
      var WF = this.union(FF);
      return null !== WF && (0 == WF.width() || 0 == WF.height() || 0 == WF.depth())
    }, uF.union = function(FF) {
      if (!this.intersects(FF)) return null;
      var WF = Math.max(FF.base[0], this.base[0]),
        SF = Math.max(FF.base[1], this.base[1]),
        CF = Math.max(FF.base[2], this.base[2]);
      return new AF([WF, SF, CF], [Math.min(FF.max[0], this.max[0]) - WF, Math.min(FF.max[1], this.max[1]) - SF, Math.min(FF.max[2], this.max[2]) - CF])
    }
  },
  35213: FF => {
    FF.exports = function FF(WF, SF) {
      if (WF === SF) return !0;
      if (WF && SF && "object" == typeof WF && "object" == typeof SF) {
        if (WF.constructor !== SF.constructor) return !1;
        var CF, AF, uF;
        if (Array.isArray(WF)) {
          if ((CF = WF.length) != SF.length) return !1;
          for (AF = CF; 0 !== AF--;)
            if (!FF(WF[AF], SF[AF])) return !1;
          return !0
        }
        if (WF.constructor === RegExp) return WF.source === SF.source && WF.flags === SF.flags;
        if (WF.valueOf !== Object.prototype.valueOf) return WF.valueOf() === SF.valueOf();
        if (WF.toString !== Object.prototype.toString) return WF.toString() === SF.toString();
        if ((CF = (uF = Object.keys(WF)).length) !== Object.keys(SF).length) return !1;
        for (AF = CF; 0 !== AF--;)
          if (!Object.prototype.hasOwnProperty.call(SF, uF[AF])) return !1;
        for (AF = CF; 0 !== AF--;) {
          var hF = uF[AF];
          if (!FF(WF[hF], SF[hF])) return !1
        }
        return !0
      }
      return WF !== WF && SF !== SF
    }
  },
  37685: FF => {
    FF.exports = function(FF, WF, SF, CF, AF, uF) {
      var hF = +WF[0],
        bW = +WF[1],
        dF = +WF[2],
        PF = +SF[0],
        RF = +SF[1],
        iW = +SF[2],
        eF = Math.sqrt(PF * PF + RF * RF + iW * iW);
      if (0 === eF) throw new Error("Can't raycast along a zero vector");
      return function(FF, WF, SF, CF, AF, uF, hF, bW, dF, PF) {
        for (var RF = 0, iW = Math.floor, eF = 0 | iW(WF), EF = 0 | iW(SF), QF = 0 | iW(CF), rW = AF > 0 ? 1 : -1, gW = uF > 0 ? 1 : -1, tW = hF > 0 ? 1 : -1, TF = Math.abs(1 / AF), aW = Math.abs(1 / uF), kW = Math.abs(1 / hF), qW = TF < 1 / 0 ? TF * (rW > 0 ? eF + 1 - WF : WF - eF) : 1 / 0, VF = aW < 1 / 0 ? aW * (gW > 0 ? EF + 1 - SF : SF - EF) : 1 / 0, NF = kW < 1 / 0 ? kW * (tW > 0 ? QF + 1 - CF : CF - QF) : 1 / 0, DF = -1; RF <= bW;) {
          var LF = FF(eF, EF, QF);
          if (LF) return dF && (dF[0] = WF + RF * AF, dF[1] = SF + RF * uF, dF[2] = CF + RF * hF), PF && (PF[0] = PF[1] = PF[2] = 0, 0 === DF && (PF[0] = -rW), 1 === DF && (PF[1] = -gW), 2 === DF && (PF[2] = -tW)), LF;
          qW < VF ? qW < NF ? (eF += rW, RF = qW, qW += TF, DF = 0) : (QF += tW, RF = NF, NF += kW, DF = 2) : VF < NF ? (EF += gW, RF = VF, VF += aW, DF = 1) : (QF += tW, RF = NF, NF += kW, DF = 2)
        }
        return dF && (dF[0] = WF + RF * AF, dF[1] = SF + RF * uF, dF[2] = CF + RF * hF), PF && (PF[0] = PF[1] = PF[2] = 0), 0
      }(FF, hF, bW, dF, PF /= eF, RF /= eF, iW /= eF, CF = "undefined" === typeof CF ? 64 : +CF, AF, uF)
    }
  },
  37468: (FF, WF, SF) => {
    SF.d(WF, {
      b: () => bW,
      f: () => uF
    });
    var CF = SF(3275);
    let AF = null;

    function uF(FF) {
      return null !== AF && FF === AF
    }

    function hF() {
      this.SCF = !1, this.stopPropagation = !1, this.CCF = !1, this.disabled = !1
    }
    class bW {
      constructor(FF, WF) {
        this.version = "0.7.0";
        var SF = Object.assign({}, new hF, WF || {});
        this.element = FF || document, this.SCF = !!SF.SCF, this.stopPropagation = !!SF.stopPropagation, this.CCF = !!SF.CCF, this.disabled = !!SF.disabled, this.filterEvents = (FF, WF) => !0, this.down = new CF.EventEmitter, this.up = new CF.EventEmitter, this.state = {}, this.MCF = {
          dx: 0,
          dy: 0,
          idF: 0,
          ebF: 0,
          EbF: 0
        }, this.pressCount = {}, this.releaseCount = {}, this._keyBindmap = {}, this._keyStates = {}, this._bindPressCount = {}, this._touches = {
          lastX: 0,
          lastY: 0,
          currID: null
        }, "loading" !== document.readyState ? PF(this) : document.addEventListener("DOMContentLoaded", (FF => {
          PF(this)
        }), {
          once: !0
        })
      }
      bind(FF) {
        for (var WF = arguments.length, SF = new Array(WF > 1 ? WF - 1 : 0), CF = 1; CF < WF; CF++) SF[CF - 1] = arguments[CF];
        SF.forEach((WF => {
          var SF = this._keyBindmap[WF] || [];
          SF.includes(FF) || (SF.push(FF), this._keyBindmap[WF] = SF)
        })), this.state[FF] = !!this.state[FF], this.pressCount[FF] = this.pressCount[FF] || 0, this.releaseCount[FF] = this.releaseCount[FF] || 0
      }
      unbind(FF) {
        for (var WF in this._keyBindmap) {
          var SF = this._keyBindmap[WF],
            CF = SF.indexOf(FF);
          CF > -1 && SF.splice(CF, 1)
        }
      }
      getBindings() {
        var FF = {};
        for (var WF in this._keyBindmap) {
          this._keyBindmap[WF].forEach((SF => {
            FF[SF] = FF[SF] || [], FF[SF].push(WF)
          }))
        }
        return FF
      }
      lF() {
        dF(this.MCF), dF(this.pressCount), dF(this.releaseCount)
      }
    }

    function dF(FF) {
      for (var WF in FF) FF[WF] = 0
    }

    function PF(FF) {
      window.addEventListener("keydown", gW.bind(null, FF, !0), !1), window.addEventListener("keyup", gW.bind(null, FF, !1), !1);
      var WF = {
        passive: !0
      };
      FF.element.addEventListener("touchstart", EF.bind(void 0, FF), {
        passive: !1
      }), FF.element.addEventListener("touchend", rW.bind(void 0, FF), WF), FF.element.addEventListener("mousedown", tW.bind(null, FF, !0), WF), window.document.addEventListener("mouseup", tW.bind(null, FF, !1), WF), FF.element.addEventListener("touchmove", TF.bind(null, FF), WF), FF.element.addEventListener("mousemove", TF.bind(null, FF), WF), window.PointerEvent, FF.element.addEventListener("wheel", aW.bind(null, FF), WF), FF.element.addEventListener("contextmenu", kW.bind(null, FF), !1)
    }
    var RF = 0,
      iW = 0,
      eF = null;

    function EF(FF, WF) {
      WF.preventDefault(), QF(WF)
    }

    function QF(FF) {
      let WF = !1;
      for (let SF = 0; SF < FF.touches.length; ++SF)
        if (FF.touches[SF].identifier === eF) {
          WF = !0;
          break
        } if (!WF) {
        const WF = FF.changedTouches[0];
        RF = WF.clientX, iW = WF.clientY, eF = WF.identifier
      }
    }

    function rW(FF, WF) {
      for (var SF = WF.changedTouches, CF = 0; CF < SF.length; ++CF) SF[CF].identifier === eF && (eF = null)
    }

    function gW(FF, WF, SF) {
      try {
        NF(FF, SF), WF && SF.isTrusted && !SF.repeat && FF._keyStates[SF.code] && DF(FF, SF.code)
      } finally {
        LF(SF.code, WF, FF, SF)
      }
    }

    function tW(FF, WF, SF) {
      try {
        NF(FF, SF)
      } finally {
        ! function(FF, WF, SF) {
          if ("pointerId" in SF)
            if (WF) {
              if (null !== FF._touches.currID) return;
              FF._touches.currID = SF.pointerId
            } else {
              if (FF._touches.currID !== SF.pointerId) return;
              FF._touches.currID = null
            } var CF = "button" in SF ? SF.button + 1 : 1;
          LF("Mouse" + CF, WF, FF, SF)
        }(FF, WF, SF)
      }
    }

    function TF(FF, WF) {
      WF.touches || NF(FF, WF);
      var SF = WF.movementX || WF.mozMovementX || 0,
        CF = WF.movementY || WF.mozMovementY || 0;
      if (WF.touches && 0 === (SF | CF)) {
        var AF = function(FF) {
          QF(FF);
          for (let WF = 0; WF < FF.changedTouches.length; ++WF)
            if (FF.changedTouches[WF].identifier == eF) {
              const SF = FF.changedTouches[WF],
                CF = [SF.clientX - RF, SF.clientY - iW];
              return RF = SF.clientX, iW = SF.clientY, CF
            } return console.error(`Did not find touch id ${eF}`), [0, 0]
        }(WF);
        SF = AF[0], CF = AF[1]
      }
      FF.MCF.dx += SF, FF.MCF.dy += CF
    }

    function aW(FF, WF) {
      NF(FF, WF);
      var SF = 1;
      switch (WF.deltaMode) {
        case 0:
          SF = 1;
          break;
        case 1:
          SF = 12;
          break;
        case 2:
          SF = FF.element.clientHeight || window.innerHeight
      }
      FF.MCF.idF += (WF.deltaX || 0) * SF, FF.MCF.ebF += (WF.deltaY || 0) * SF, FF.MCF.EbF += (WF.deltaZ || 0) * SF
    }

    function kW(FF, WF) {
      if (!FF.CCF) return WF.preventDefault(), !1
    }
    var qW = {
      AltLeft: "altKey",
      AltRight: "altKey",
      ControlLeft: "ctrlKey",
      ControlRight: "ctrlKey",
      ShiftLeft: "shiftKey",
      ShiftRight: "shiftKey",
      MetaLeft: "metaKey",
      MetaRight: "metaKey"
    };

    function VF(FF, WF) {
      return !!FF[qW[WF]] || ("AltRight" === WF || "ControlLeft" === WF) && "function" === typeof FF.getModifierState && !0 === FF.getModifierState("AltGraph")
    }

    function NF(FF, WF) {
      if (WF.isTrusted)
        for (var SF in qW) FF._keyStates[SF] && SF !== WF.code && (VF(WF, SF) || DF(FF, SF))
    }

    function DF(FF, WF) {
      const SF = {
          code: WF,
          preventDefault: () => {},
          stopPropagation: () => {}
        },
        CF = AF;
      AF = SF;
      try {
        LF(WF, !1, FF, SF)
      } finally {
        AF = CF
      }
    }

    function LF(FF, WF, SF, CF) {
      var AF = SF._keyBindmap[FF];
      AF && (mW(SF._keyStates[FF], WF) && (SF._keyStates[FF] = WF, AF.forEach((FF => {
        (!SF.filterEvents || SF.filterEvents(CF, FF)) && function(FF, WF, SF, CF) {
          var AF = WF ? SF.pressCount : SF.releaseCount;
          AF[FF] = (AF[FF] || 0) + 1;
          var uF = SF._bindPressCount[FF] || 0;
          (uF += WF ? 1 : -1) < 0 && (uF = 0);
          SF._bindPressCount[FF] = uF;
          var hF = SF.state[FF];
          if (mW(hF, uF)) {
            SF.state[FF] = uF > 0;
            var bW = WF ? SF.down : SF.up;
            SF.disabled || bW.emit(FF, CF)
          }
        }(FF, WF, SF, CF)
      }))), "button" in CF || (SF.SCF && !CF.defaultPrevented && CF.preventDefault(), SF.stopPropagation && CF.stopPropagation()))
    }

    function mW(FF, WF) {
      return FF ? !WF : WF
    }
  },
  35068: (FF, WF) => {
    function SF(FF) {
      if (FF && "object" === typeof FF) {
        var WF = FF.which || FF.keyCode || FF.charCode;
        WF && (FF = WF)
      }
      if ("number" === typeof FF) return hF[FF];
      var SF, uF = String(FF);
      return (SF = CF[uF.toLowerCase()]) ? SF : (SF = AF[uF.toLowerCase()]) || (1 === uF.length ? uF.charCodeAt(0) : void 0)
    }
    SF.isEventKey = function(FF, WF) {
      if (FF && "object" === typeof FF) {
        var SF = FF.which || FF.keyCode || FF.charCode;
        if (null === SF || void 0 === SF) return !1;
        if ("string" === typeof WF) {
          var uF;
          if (uF = CF[WF.toLowerCase()]) return uF === SF;
          if (uF = AF[WF.toLowerCase()]) return uF === SF
        } else if ("number" === typeof WF) return WF === SF;
        return !1
      }
    };
    var CF = (WF = FF.exports = SF).code = WF.codes = {
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
      AF = WF.aliases = {
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
    for (uF = 97; uF < 123; uF++) CF[String.fromCharCode(uF)] = uF - 32;
    for (var uF = 48; uF < 58; uF++) CF[uF - 48] = uF;
    for (uF = 1; uF < 13; uF++) CF["f" + uF] = uF + 111;
    for (uF = 0; uF < 10; uF++) CF["numpad " + uF] = uF + 96;
    var hF = WF.names = WF.title = {};
    for (uF in CF) hF[CF[uF]] = uF;
    for (var bW in AF) CF[bW] = AF[bW]
  },
  37673: (FF, WF, SF) => {
    SF.d(WF, {
      e: () => CF
    });
    class CF {
      constructor() {
        let FF = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
          WF = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 10;
        this.PSF = !1, this.RSF = !1, this.LWF = 30, this.uSF = 0, this.iCF = 100, this.Xh = !1, this.fullscreen = !1, this.eD = function(FF) {}, this.eSF = function(FF, WF, SF) {}, this.rCF = function() {}, this.tL = function() {}, this.ESF = function() {}, this.onFullscreenChanged = function() {}, this.onPointerLockError = function(FF) {}, this._data = new AF(WF),
          function(FF) {
            if ("loading" === document.readyState) {
              var WF = () => {
                document.removeEventListener("readystatechange", WF), FF()
              };
              document.addEventListener("readystatechange", WF)
            } else setTimeout(FF, 0)
          }((() => {
            ! function(FF) {
              var WF = FF._data,
                SF = WF.nowObject.now();
              WF.lastTickStarted = SF, WF.lastFrameStarted = SF, WF.lastRenderStarted = SF, WF.frameCB = () => function(FF) {
                var WF = FF._data;
                requestAnimationFrame(WF.frameCB), bW(FF);
                var SF = WF.nowObject.now(),
                  CF = SF - WF.lastFrameStarted;
                if (WF.lastFrameStarted = SF, FF.uSF > 0) {
                  WF.renderAccum += CF;
                  var AF = 1e3 / FF.uSF;
                  if (WF.renderAccum < AF) return;
                  WF.renderAccum -= AF, WF.renderAccum > AF && (WF.renderAccum = AF)
                }
                var uF = SF - WF.lastRenderStarted;
                WF.lastRenderStarted = SF;
                var hF = 1e3 / FF.LWF,
                  dF = (SF - WF.lastTickStarted) / hF;
                dF < 0 && (dF = 0);
                FF.eSF(uF, dF, hF), setTimeout(bW, 0, FF, !0)
              }(FF), WF.intervalCB = () => bW(FF), requestAnimationFrame(WF.frameCB), WF.pollTime > 0 && (WF.intervalID = setInterval(WF.intervalCB, Math.max(WF.pollTime, 1e3 / FF.LWF / 2)))
            }(this),
            function(FF, WF) {
              if (!WF) return;
              var SF = !1,
                CF = !1,
                AF = FF => {
                  if (!!FF !== (SF = WF === document.pointerLockElement))
                    if (FF) {
                      var CF = WF.requestPointerLock();
                      CF && CF.catch && CF.catch((FF => {}))
                    } else document.exitPointerLock()
                },
                uF = FF => {
                  !!FF !== (CF = WF === document.fullscreenElement) && (FF ? WF.requestFullscreen ? WF.requestFullscreen() : WF.webkitRequestFullscreen && WF.webkitRequestFullscreen() : document.exitFullscreen ? document.exitFullscreen() : document.webkitExitFullscreen && document.webkitExitFullscreen())
                };
              document.addEventListener("pointerlockchange", (CF => {
                SF = WF === document.pointerLockElement, FF.ESF(SF)
              })), document.addEventListener("fullscreenchange", (SF => {
                CF = WF === document.fullscreenElement, FF.onFullscreenChanged(CF)
              })), document.addEventListener("pointerlockerror", (CF => {
                SF = WF === document.pointerLockElement, FF.onPointerLockError(CF)
              })), Object.defineProperty(FF, "Xh", {
                get: () => SF,
                set: AF
              }), Object.defineProperty(FF, "fullscreen", {
                get: () => CF,
                set: uF
              }), WF.addEventListener("click", (WF => {
                FF.PSF && AF(!0), FF.RSF && uF(!0)
              }));
              var hF = () => FF.tL();
              if (window.ResizeObserver) {
                new ResizeObserver(hF).observe(WF)
              } else window.addEventListener("resize", hF)
            }(this, FF), this.rCF()
          }))
      }
    }

    function AF() {
      let FF = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 10;
      this.nowObject = performance || Date, this.pollTime = FF, this.renderAccum = 0, this.lastTickStarted = 0, this.lastFrameStarted = 0, this.lastRenderStarted = 0, this.avgTickTime = 2, this.frameCB = null, this.intervalCB = null, this.intervalID = -1
    }
    var uF = 3,
      hF = 20;

    function bW(FF) {
      for (var WF = FF._data, SF = 1e3 / FF.LWF, CF = WF.nowObject.now() + hF, AF = 0; WF.nowObject.now() >= WF.lastTickStarted + SF && WF.nowObject.now() < CF && ++AF <= uF;) FF.eD(SF), WF.lastTickStarted += SF;
      var bW = 5 * (SF + 5),
        dF = WF.nowObject.now();
      if (dF - WF.lastTickStarted > bW)
        for (; dF >= WF.lastTickStarted + SF;) WF.lastTickStarted += SF
    }
  },
  35234: (FF, WF, SF) => {
    SF.d(WF, {
      d: () => hF
    });
    var CF = SF(46);
    const AF = CF.useLayoutEffect;
    const uF = function(FF) {
      var WF = (0, CF.useRef)(FF);
      return AF((function() {
        WF.current = FF
      })), WF
    };
    var hF = function(FF) {
      var WF = uF(FF);
      (0, CF.useEffect)((function() {
        var FF = function(FF) {
          var SF;
          if (null != WF.current && (SF = WF.current(FF)), FF.defaultPrevented && (FF.returnValue = ""), "string" === typeof SF) return FF.returnValue = SF, SF
        };
        return window.addEventListener("beforeunload", FF),
          function() {
            window.removeEventListener("beforeunload", FF)
          }
      }), [])
    }
  },
  35097: FF => {
    var WF, SF = "undefined" !== typeof window ? window.navigator.userAgent : "",
      CF = /OS X/.test(SF),
      AF = /Opera/.test(SF),
      uF = !/like Gecko/.test(SF) && !AF,
      hF = FF.exports = {
        0: CF ? "<menu>" : "<UNK>",
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
        93: CF ? "<meta>" : "<menu>",
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
        173: CF && uF ? "-" : "<volume-mute>",
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
        231: AF ? "`" : "<unicode>",
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
    for (WF = 58; WF < 65; ++WF) hF[WF] = String.fromCharCode(WF);
    for (WF = 48; WF < 58; ++WF) hF[WF] = WF - 48 + "";
    for (WF = 65; WF < 91; ++WF) hF[WF] = String.fromCharCode(WF);
    for (WF = 96; WF < 106; ++WF) hF[WF] = "<num-" + (WF - 96) + ">";
    for (WF = 112; WF < 136; ++WF) hF[WF] = "F" + (WF - 111)
  },
  37427: (FF, WF, SF) => {
    function CF(FF, WF, SF, CF, AF) {
      var uF = {};
      return Object.keys(CF).forEach((function(FF) {
        uF[FF] = CF[FF]
      })), uF.enumerable = !!uF.enumerable, uF.configurable = !!uF.configurable, ("value" in uF || uF.initializer) && (uF.writable = !0), uF = SF.slice().reverse().reduce((function(SF, CF) {
        return CF(FF, WF, SF) || SF
      }), uF), AF && void 0 !== uF.initializer && (uF.value = uF.initializer ? uF.initializer.call(AF) : void 0, uF.initializer = void 0), void 0 === uF.initializer && (Object.defineProperty(FF, WF, uF), uF = null), uF
    }
    SF.d(WF, {
      e: () => CF
    })
  },
  37422: (FF, WF, SF) => {
    function CF(FF, WF, SF, CF) {
      SF && Object.defineProperty(FF, WF, {
        enumerable: SF.enumerable,
        configurable: SF.configurable,
        writable: SF.writable,
        value: SF.initializer ? SF.initializer.call(CF) : void 0
      })
    }
    SF.d(WF, {
      c: () => CF
    })
  },
  37069: (FF, WF, SF) => {
    SF.d(WF, {
      d: () => uF
    });
    var CF = SF(37076);
    const AF = (FF, WF, SF) => FF ? FF.getClassName && "Mesh" === FF.getClassName() ? null : !FF.getClassName || "SubMesh" !== FF.getClassName() && "PhysicsBody" !== FF.getClassName() ? FF.clone ? FF.clone() : Array.isArray(FF) ? FF.slice() : SF && "object" === typeof FF ? {
      ...FF
    } : null : FF.clone(WF) : null;
    class uF {
      static DeepCopy(FF, WF, SF, uF) {
        let hF = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
        const bW = function(FF) {
          const WF = [];
          do {
            const SF = Object.getOwnPropertyNames(FF);
            for (const FF of SF) - 1 === WF.indexOf(FF) && WF.push(FF)
          } while (FF = Object.getPrototypeOf(FF));
          return WF
        }(FF);
        for (const PF of bW) {
          if ("_" === PF[0] && (!uF || -1 === uF.indexOf(PF))) continue;
          if (PF.endsWith("Observable")) continue;
          if (SF && -1 !== SF.indexOf(PF)) continue;
          const bW = FF[PF],
            RF = typeof bW;
          if ("function" !== RF) try {
            if ("object" === RF)
              if (bW instanceof Uint8Array) WF[PF] = Uint8Array.from(bW);
              else if (bW instanceof Array) {
              if (WF[PF] = [], bW.length > 0)
                if ("object" == typeof bW[0])
                  for (let FF = 0; FF < bW.length; FF++) {
                    const SF = AF(bW[FF], WF, hF); - 1 === WF[PF].indexOf(SF) && WF[PF].push(SF)
                  } else WF[PF] = bW.slice(0)
            } else WF[PF] = AF(bW, WF, hF);
            else WF[PF] = bW
          } catch (dF) {
            CF.b.Warn(dF.message)
          }
        }
      }
    }
  },
  37107: (FF, WF, SF) => {
    SF.d(WF, {
      e: () => AF,
      g: () => uF,
      h: () => hF,
      l: () => bW
    });
    var CF = SF(35678);
    class AF {
      constructor(FF, WF, SF) {
        this.gradient = FF, this.color1 = WF, this.color2 = SF
      }
      getColorToRef(FF) {
        this.color2 ? CF.i.LerpToRef(this.color1, this.color2, Math.random(), FF) : FF.fdF(this.color1)
      }
    }
    class uF {
      constructor(FF, WF) {
        this.gradient = FF, this.color = WF
      }
    }
    class hF {
      constructor(FF, WF, SF) {
        this.gradient = FF, this.factor1 = WF, this.factor2 = SF
      }
      getFactor() {
        return void 0 === this.factor2 || this.factor2 === this.factor1 ? this.factor1 : this.factor1 + (this.factor2 - this.factor1) * Math.random()
      }
    }
    class bW {
      static GetCurrentGradient(FF, WF, SF) {
        if (WF[0].gradient > FF) return void SF(WF[0], WF[0], 1);
        for (let AF = 0; AF < WF.length - 1; AF++) {
          const CF = WF[AF],
            uF = WF[AF + 1];
          if (FF >= CF.gradient && FF <= uF.gradient) {
            return void SF(CF, uF, (FF - CF.gradient) / (uF.gradient - CF.gradient))
          }
        }
        const CF = WF.length - 1;
        SF(WF[CF], WF[CF], 1)
      }
    }
  },
  37076: (FF, WF, SF) => {
    SF.d(WF, {
      b: () => CF
    });
    class CF {
      static _CheckLimit(FF, WF) {
        let SF = CF._LogLimitOutputs[FF];
        return SF ? SF.current++ : (SF = {
          limit: WF,
          current: 1
        }, CF._LogLimitOutputs[FF] = SF), SF.current <= SF.limit
      }
      static _GenerateLimitMessage(FF) {
        let WF = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
        const SF = CF._LogLimitOutputs[FF];
        if (!SF || !CF.MessageLimitReached) return;
        const AF = this._Levels[WF];
        SF.current === SF.limit && CF[AF.name](CF.MessageLimitReached.replace(/%LIMIT%/g, "" + SF.limit).replace(/%TYPE%/g, AF.name ?? ""))
      }
      static _AddLogEntry(FF) {
        CF._LogCache = FF + CF._LogCache, CF.OnNewCacheEntry && CF.OnNewCacheEntry(FF)
      }
      static _FormatMessage(FF) {
        const WF = FF => FF < 10 ? "0" + FF : "" + FF,
          SF = new Date;
        return "[" + WF(SF.getHours()) + ":" + WF(SF.getMinutes()) + ":" + WF(SF.getSeconds()) + "]: " + FF
      }
      static _LogDisabled(FF, WF) {}
      static _LogEnabled() {
        let FF = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
          WF = arguments.length > 1 ? arguments[1] : void 0,
          SF = arguments.length > 2 ? arguments[2] : void 0;
        const AF = Array.isArray(WF) ? WF[0] : WF;
        if (void 0 !== SF && !CF._CheckLimit(AF, SF)) return;
        const uF = CF._FormatMessage(AF),
          hF = this._Levels[FF],
          bW = Array.isArray(WF) ? WF.slice(1) : [];
        hF.logFunc && hF.logFunc("BJS - " + uF, ...bW);
        const dF = `<div style='color:${hF.color}'>${uF}</div><br>`;
        CF._AddLogEntry(dF), CF._GenerateLimitMessage(AF, FF)
      }
      static get LogCache() {
        return CF._LogCache
      }
      static ClearLogCache() {
        CF._LogCache = "", CF._LogLimitOutputs = {}, CF.errorsCount = 0
      }
      static set LogLevels(FF) {
        CF.Log = CF._LogDisabled, CF.Warn = CF._LogDisabled, CF.Error = CF._LogDisabled;
        const WF = [CF.MessageLogLevel, CF.WarningLogLevel, CF.ErrorLogLevel];
        for (const SF of WF)
          if ((FF & SF) === SF) {
            const FF = this._Levels[SF];
            CF[FF.name] = CF._LogEnabled.bind(CF, SF)
          }
      }
    }
    CF.NoneLogLevel = 0, CF.MessageLogLevel = 1, CF.WarningLogLevel = 2, CF.ErrorLogLevel = 4, CF.AllLogLevel = 7, CF.MessageLimitReached = "Too many %TYPE%s (%LIMIT%), no more %TYPE%s will be reported for this message.", CF._LogCache = "", CF._LogLimitOutputs = {}, CF._Levels = [{}, {
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
    }], CF.errorsCount = 0, CF.Log = CF._LogEnabled.bind(CF, CF.MessageLogLevel), CF.Warn = CF._LogEnabled.bind(CF, CF.WarningLogLevel), CF.Error = CF._LogEnabled.bind(CF, CF.ErrorLogLevel)
  },
  37114: (FF, WF, SF) => {
    SF.d(WF, {
      d: () => hF
    });
    var CF = SF(35623),
      AF = SF(35650),
      uF = SF(37069);
    class hF {
      constructor() {
        this.direction1 = new CF.r(0, 1, 0), this.direction2 = new CF.r(0, 1, 0), this.minEmitBox = new CF.r(-.5, -.5, -.5), this.maxEmitBox = new CF.r(.5, .5, .5)
      }
      startDirectionFunction(FF, WF, SF, uF) {
        const hF = (0, AF.RandomRange)(this.direction1.x, this.direction2.x),
          bW = (0, AF.RandomRange)(this.direction1.y, this.direction2.y),
          dF = (0, AF.RandomRange)(this.direction1.z, this.direction2.z);
        if (uF) return WF.x = hF, WF.y = bW, void(WF.z = dF);
        CF.r.TransformNormalFromFloatsToRef(hF, bW, dF, FF, WF)
      }
      startPositionFunction(FF, WF, SF, uF) {
        const hF = (0, AF.RandomRange)(this.minEmitBox.x, this.maxEmitBox.x),
          bW = (0, AF.RandomRange)(this.minEmitBox.y, this.maxEmitBox.y),
          dF = (0, AF.RandomRange)(this.minEmitBox.z, this.maxEmitBox.z);
        if (uF) return WF.x = hF, WF.y = bW, void(WF.z = dF);
        CF.r.TransformCoordinatesFromFloatsToRef(hF, bW, dF, FF, WF)
      }
      clone() {
        const FF = new hF;
        return uF.d.DeepCopy(this, FF), FF
      }
      applyToShader(FF) {
        FF.setVector3("direction1", this.direction1), FF.setVector3("direction2", this.direction2), FF.setVector3("minEmitBox", this.minEmitBox), FF.setVector3("maxEmitBox", this.maxEmitBox)
      }
      buildUniformLayout(FF) {
        FF.addUniform("direction1", 3), FF.addUniform("direction2", 3), FF.addUniform("minEmitBox", 3), FF.addUniform("maxEmitBox", 3)
      }
      getEffectDefines() {
        return "#define BOXEMITTER"
      }
      getClassName() {
        return "BoxParticleEmitter"
      }
      serialize() {
        const FF = {};
        return FF.type = this.getClassName(), FF.direction1 = this.direction1.kRF(), FF.direction2 = this.direction2.kRF(), FF.minEmitBox = this.minEmitBox.kRF(), FF.maxEmitBox = this.maxEmitBox.kRF(), FF
      }
      parse(FF) {
        CF.r.FromArrayToRef(FF.direction1, 0, this.direction1), CF.r.FromArrayToRef(FF.direction2, 0, this.direction2), CF.r.FromArrayToRef(FF.minEmitBox, 0, this.minEmitBox), CF.r.FromArrayToRef(FF.maxEmitBox, 0, this.maxEmitBox)
      }
    }
  },
  37065: (FF, WF, SF) => {
    SF.d(WF, {
      b: () => bW,
      d: () => hF
    });
    var CF = SF(35623),
      AF = SF(35650),
      uF = SF(37069);
    class hF {
      constructor() {
        let FF = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
          WF = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
          SF = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1,
          AF = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
        this.radius = FF, this.height = WF, this.radiusRange = SF, this.directionRandomizer = AF, this._tempVector = CF.r.Zero()
      }
      startDirectionFunction(FF, WF, SF, uF, hF) {
        SF.position.subtractToRef(FF.getTranslation(), this._tempVector), this._tempVector.normalize(), CF.r.TransformNormalToRef(this._tempVector, hF, this._tempVector);
        const bW = (0, AF.RandomRange)(-this.directionRandomizer / 2, this.directionRandomizer / 2);
        let dF = Math.atan2(this._tempVector.x, this._tempVector.z);
        dF += (0, AF.RandomRange)(-Math.PI / 2, Math.PI / 2) * this.directionRandomizer, this._tempVector.y = bW, this._tempVector.x = Math.sin(dF), this._tempVector.z = Math.cos(dF), this._tempVector.normalize(), uF ? WF.fdF(this._tempVector) : CF.r.TransformNormalFromFloatsToRef(this._tempVector.x, this._tempVector.y, this._tempVector.z, FF, WF)
      }
      startPositionFunction(FF, WF, SF, uF) {
        const hF = (0, AF.RandomRange)(-this.height / 2, this.height / 2),
          bW = (0, AF.RandomRange)(0, 2 * Math.PI),
          dF = (0, AF.RandomRange)((1 - this.radiusRange) * (1 - this.radiusRange), 1),
          PF = Math.sqrt(dF) * this.radius,
          RF = PF * Math.cos(bW),
          iW = PF * Math.sin(bW);
        uF ? WF.FhF(RF, hF, iW) : CF.r.TransformCoordinatesFromFloatsToRef(RF, hF, iW, FF, WF)
      }
      clone() {
        const FF = new hF(this.radius, this.directionRandomizer);
        return uF.d.DeepCopy(this, FF), FF
      }
      applyToShader(FF) {
        FF.setFloat("radius", this.radius), FF.setFloat("height", this.height), FF.setFloat("radiusRange", this.radiusRange), FF.setFloat("directionRandomizer", this.directionRandomizer)
      }
      buildUniformLayout(FF) {
        FF.addUniform("radius", 1), FF.addUniform("height", 1), FF.addUniform("radiusRange", 1), FF.addUniform("directionRandomizer", 1)
      }
      getEffectDefines() {
        return "#define CYLINDEREMITTER"
      }
      getClassName() {
        return "CylinderParticleEmitter"
      }
      serialize() {
        const FF = {};
        return FF.type = this.getClassName(), FF.radius = this.radius, FF.height = this.height, FF.radiusRange = this.radiusRange, FF.directionRandomizer = this.directionRandomizer, FF
      }
      parse(FF) {
        this.radius = FF.radius, this.height = FF.height, this.radiusRange = FF.radiusRange, this.directionRandomizer = FF.directionRandomizer
      }
    }
    class bW extends hF {
      constructor() {
        let FF = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
          WF = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
          SF = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1,
          AF = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : new CF.r(0, 1, 0),
          uF = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : new CF.r(0, 1, 0);
        super(FF, WF, SF), this.direction1 = AF, this.direction2 = uF
      }
      startDirectionFunction(FF, WF, SF, uF) {
        const hF = (0, AF.RandomRange)(this.direction1.x, this.direction2.x),
          bW = (0, AF.RandomRange)(this.direction1.y, this.direction2.y),
          dF = (0, AF.RandomRange)(this.direction1.z, this.direction2.z);
        uF ? WF.FhF(hF, bW, dF) : CF.r.TransformNormalFromFloatsToRef(hF, bW, dF, FF, WF)
      }
      clone() {
        const FF = new bW(this.radius, this.height, this.radiusRange, this.direction1, this.direction2);
        return uF.d.DeepCopy(this, FF), FF
      }
      applyToShader(FF) {
        FF.setFloat("radius", this.radius), FF.setFloat("height", this.height), FF.setFloat("radiusRange", this.radiusRange), FF.setVector3("direction1", this.direction1), FF.setVector3("direction2", this.direction2)
      }
      buildUniformLayout(FF) {
        FF.addUniform("radius", 1), FF.addUniform("height", 1), FF.addUniform("radiusRange", 1), FF.addUniform("direction1", 3), FF.addUniform("direction2", 3)
      }
      getEffectDefines() {
        return "#define CYLINDEREMITTER\n#define DIRECTEDCYLINDEREMITTER"
      }
      getClassName() {
        return "CylinderDirectedParticleEmitter"
      }
      serialize() {
        const FF = super.serialize();
        return FF.direction1 = this.direction1.kRF(), FF.direction2 = this.direction2.kRF(), FF
      }
      parse(FF) {
        super.parse(FF), CF.r.FromArrayToRef(FF.direction1, 0, this.direction1), CF.r.FromArrayToRef(FF.direction2, 0, this.direction2)
      }
    }
  },
  37180: (FF, WF, SF) => {
    SF.d(WF, {
      b: () => iW
    });
    const CF = .5 * (Math.sqrt(3) - 1),
      AF = (3 - Math.sqrt(3)) / 6,
      uF = 1 / 3,
      hF = 1 / 6,
      bW = (Math.sqrt(5) - 1) / 4,
      dF = (5 - Math.sqrt(5)) / 20,
      PF = new Float32Array([1, 1, 0, -1, 1, 0, 1, -1, 0, -1, -1, 0, 1, 0, 1, -1, 0, 1, 1, 0, -1, -1, 0, -1, 0, 1, 1, 0, -1, 1, 0, 1, -1, 0, -1, -1]),
      RF = new Float32Array([0, 1, 1, 1, 0, 1, 1, -1, 0, 1, -1, 1, 0, 1, -1, -1, 0, -1, 1, 1, 0, -1, 1, -1, 0, -1, -1, 1, 0, -1, -1, -1, 1, 0, 1, 1, 1, 0, 1, -1, 1, 0, -1, 1, 1, 0, -1, -1, -1, 0, 1, 1, -1, 0, 1, -1, -1, 0, -1, 1, -1, 0, -1, -1, 1, 1, 0, 1, 1, 1, 0, -1, 1, -1, 0, 1, 1, -1, 0, -1, -1, 1, 0, 1, -1, 1, 0, -1, -1, -1, 0, 1, -1, -1, 0, -1, 1, 1, 1, 0, 1, 1, -1, 0, 1, -1, 1, 0, 1, -1, -1, 0, -1, 1, 1, 0, -1, 1, -1, 0, -1, -1, 1, 0, -1, -1, -1, 0]);
    const iW = class {
      constructor() {
        let FF = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Math.random;
        const WF = "function" == typeof FF ? FF : function(FF) {
          let WF = 0,
            SF = 0,
            CF = 0,
            AF = 1;
          const uF = function() {
            let FF = 4022871197;
            return function(WF) {
              WF = WF.toString();
              for (let SF = 0; SF < WF.length; SF++) {
                FF += WF.charCodeAt(SF);
                let CF = .02519603282416938 * FF;
                FF = CF >>> 0, CF -= FF, CF *= FF, FF = CF >>> 0, CF -= FF, FF += 4294967296 * CF
              }
              return 2.3283064365386963e-10 * (FF >>> 0)
            }
          }();
          WF = uF(" "), SF = uF(" "), CF = uF(" "), WF -= uF(FF), WF < 0 && (WF += 1);
          SF -= uF(FF), SF < 0 && (SF += 1);
          CF -= uF(FF), CF < 0 && (CF += 1);
          return function() {
            const FF = 2091639 * WF + 2.3283064365386963e-10 * AF;
            return WF = SF, SF = CF, CF = FF - (AF = 0 | FF)
          }
        }(FF);
        this.p = function(FF) {
          const WF = new Uint8Array(256);
          for (let SF = 0; SF < 256; SF++) WF[SF] = SF;
          for (let SF = 0; SF < 255; SF++) {
            const CF = SF + ~~(FF() * (256 - SF)),
              AF = WF[SF];
            WF[SF] = WF[CF], WF[CF] = AF
          }
          return WF
        }(WF), this.perm = new Uint8Array(512), this.permMod12 = new Uint8Array(512);
        for (let SF = 0; SF < 512; SF++) this.perm[SF] = this.p[255 & SF], this.permMod12[SF] = this.perm[SF] % 12
      }
      noise2D(FF, WF) {
        const SF = this.permMod12,
          uF = this.perm;
        let hF = 0,
          bW = 0,
          dF = 0;
        const RF = (FF + WF) * CF,
          iW = Math.floor(FF + RF),
          eF = Math.floor(WF + RF),
          EF = (iW + eF) * AF,
          QF = FF - (iW - EF),
          rW = WF - (eF - EF);
        let gW, tW;
        QF > rW ? (gW = 1, tW = 0) : (gW = 0, tW = 1);
        const TF = QF - gW + AF,
          aW = rW - tW + AF,
          kW = QF - 1 + 2 * AF,
          qW = rW - 1 + 2 * AF,
          VF = 255 & iW,
          NF = 255 & eF;
        let DF = .5 - QF * QF - rW * rW;
        if (DF >= 0) {
          const FF = 3 * SF[VF + uF[NF]];
          DF *= DF, hF = DF * DF * (PF[FF] * QF + PF[FF + 1] * rW)
        }
        let LF = .5 - TF * TF - aW * aW;
        if (LF >= 0) {
          const FF = 3 * SF[VF + gW + uF[NF + tW]];
          LF *= LF, bW = LF * LF * (PF[FF] * TF + PF[FF + 1] * aW)
        }
        let mW = .5 - kW * kW - qW * qW;
        if (mW >= 0) {
          const FF = 3 * SF[VF + 1 + uF[NF + 1]];
          mW *= mW, dF = mW * mW * (PF[FF] * kW + PF[FF + 1] * qW)
        }
        return 70 * (hF + bW + dF)
      }
      noise3D(FF, WF, SF) {
        const CF = this.permMod12,
          AF = this.perm;
        let bW, dF, RF, iW;
        const eF = (FF + WF + SF) * uF,
          EF = Math.floor(FF + eF),
          QF = Math.floor(WF + eF),
          rW = Math.floor(SF + eF),
          gW = (EF + QF + rW) * hF,
          tW = FF - (EF - gW),
          TF = WF - (QF - gW),
          aW = SF - (rW - gW);
        let kW, qW, VF, NF, DF, LF;
        tW >= TF ? TF >= aW ? (kW = 1, qW = 0, VF = 0, NF = 1, DF = 1, LF = 0) : tW >= aW ? (kW = 1, qW = 0, VF = 0, NF = 1, DF = 0, LF = 1) : (kW = 0, qW = 0, VF = 1, NF = 1, DF = 0, LF = 1) : TF < aW ? (kW = 0, qW = 0, VF = 1, NF = 0, DF = 1, LF = 1) : tW < aW ? (kW = 0, qW = 1, VF = 0, NF = 0, DF = 1, LF = 1) : (kW = 0, qW = 1, VF = 0, NF = 1, DF = 1, LF = 0);
        const mW = tW - kW + hF,
          OF = TF - qW + hF,
          xW = aW - VF + hF,
          ZF = tW - NF + 2 * hF,
          oF = TF - DF + 2 * hF,
          YF = aW - LF + 2 * hF,
          MF = tW - 1 + .5,
          cW = TF - 1 + .5,
          GF = aW - 1 + .5,
          zW = 255 & EF,
          IF = 255 & QF,
          fF = 255 & rW;
        let yW = .6 - tW * tW - TF * TF - aW * aW;
        if (yW < 0) bW = 0;
        else {
          const FF = 3 * CF[zW + AF[IF + AF[fF]]];
          yW *= yW, bW = yW * yW * (PF[FF] * tW + PF[FF + 1] * TF + PF[FF + 2] * aW)
        }
        let sF = .6 - mW * mW - OF * OF - xW * xW;
        if (sF < 0) dF = 0;
        else {
          const FF = 3 * CF[zW + kW + AF[IF + qW + AF[fF + VF]]];
          sF *= sF, dF = sF * sF * (PF[FF] * mW + PF[FF + 1] * OF + PF[FF + 2] * xW)
        }
        let nF = .6 - ZF * ZF - oF * oF - YF * YF;
        if (nF < 0) RF = 0;
        else {
          const FF = 3 * CF[zW + NF + AF[IF + DF + AF[fF + LF]]];
          nF *= nF, RF = nF * nF * (PF[FF] * ZF + PF[FF + 1] * oF + PF[FF + 2] * YF)
        }
        let HF = .6 - MF * MF - cW * cW - GF * GF;
        if (HF < 0) iW = 0;
        else {
          const FF = 3 * CF[zW + 1 + AF[IF + 1 + AF[fF + 1]]];
          HF *= HF, iW = HF * HF * (PF[FF] * MF + PF[FF + 1] * cW + PF[FF + 2] * GF)
        }
        return 32 * (bW + dF + RF + iW)
      }
      noise4D(FF, WF, SF, CF) {
        const AF = this.perm;
        let uF, hF, PF, iW, eF;
        const EF = (FF + WF + SF + CF) * bW,
          QF = Math.floor(FF + EF),
          rW = Math.floor(WF + EF),
          gW = Math.floor(SF + EF),
          tW = Math.floor(CF + EF),
          TF = (QF + rW + gW + tW) * dF,
          aW = FF - (QF - TF),
          kW = WF - (rW - TF),
          qW = SF - (gW - TF),
          VF = CF - (tW - TF);
        let NF = 0,
          DF = 0,
          LF = 0,
          mW = 0;
        aW > kW ? NF++ : DF++, aW > qW ? NF++ : LF++, aW > VF ? NF++ : mW++, kW > qW ? DF++ : LF++, kW > VF ? DF++ : mW++, qW > VF ? LF++ : mW++;
        const OF = NF >= 3 ? 1 : 0,
          xW = DF >= 3 ? 1 : 0,
          ZF = LF >= 3 ? 1 : 0,
          oF = mW >= 3 ? 1 : 0,
          YF = NF >= 2 ? 1 : 0,
          MF = DF >= 2 ? 1 : 0,
          cW = LF >= 2 ? 1 : 0,
          GF = mW >= 2 ? 1 : 0,
          zW = NF >= 1 ? 1 : 0,
          IF = DF >= 1 ? 1 : 0,
          fF = LF >= 1 ? 1 : 0,
          yW = mW >= 1 ? 1 : 0,
          sF = aW - OF + dF,
          nF = kW - xW + dF,
          HF = qW - ZF + dF,
          KF = VF - oF + dF,
          wF = aW - YF + 2 * dF,
          XF = kW - MF + 2 * dF,
          UF = qW - cW + 2 * dF,
          BF = VF - GF + 2 * dF,
          jW = aW - zW + 3 * dF,
          vW = kW - IF + 3 * dF,
          JF = qW - fF + 3 * dF,
          pF = VF - yW + 3 * dF,
          lF = aW - 1 + 4 * dF,
          FW = kW - 1 + 4 * dF,
          WW = qW - 1 + 4 * dF,
          SW = VF - 1 + 4 * dF,
          CW = 255 & QF,
          AW = 255 & rW,
          uW = 255 & gW,
          hW = 255 & tW;
        let bS = .6 - aW * aW - kW * kW - qW * qW - VF * VF;
        if (bS < 0) uF = 0;
        else {
          const FF = AF[CW + AF[AW + AF[uW + AF[hW]]]] % 32 * 4;
          bS *= bS, uF = bS * bS * (RF[FF] * aW + RF[FF + 1] * kW + RF[FF + 2] * qW + RF[FF + 3] * VF)
        }
        let dW = .6 - sF * sF - nF * nF - HF * HF - KF * KF;
        if (dW < 0) hF = 0;
        else {
          const FF = AF[CW + OF + AF[AW + xW + AF[uW + ZF + AF[hW + oF]]]] % 32 * 4;
          dW *= dW, hF = dW * dW * (RF[FF] * sF + RF[FF + 1] * nF + RF[FF + 2] * HF + RF[FF + 3] * KF)
        }
        let PW = .6 - wF * wF - XF * XF - UF * UF - BF * BF;
        if (PW < 0) PF = 0;
        else {
          const FF = AF[CW + YF + AF[AW + MF + AF[uW + cW + AF[hW + GF]]]] % 32 * 4;
          PW *= PW, PF = PW * PW * (RF[FF] * wF + RF[FF + 1] * XF + RF[FF + 2] * UF + RF[FF + 3] * BF)
        }
        let RW = .6 - jW * jW - vW * vW - JF * JF - pF * pF;
        if (RW < 0) iW = 0;
        else {
          const FF = AF[CW + zW + AF[AW + IF + AF[uW + fF + AF[hW + yW]]]] % 32 * 4;
          RW *= RW, iW = RW * RW * (RF[FF] * jW + RF[FF + 1] * vW + RF[FF + 2] * JF + RF[FF + 3] * pF)
        }
        let iS = .6 - lF * lF - FW * FW - WW * WW - SW * SW;
        if (iS < 0) eF = 0;
        else {
          const FF = AF[CW + 1 + AF[AW + 1 + AF[uW + 1 + AF[hW + 1]]]] % 32 * 4;
          iS *= iS, eF = iS * iS * (RF[FF] * lF + RF[FF + 1] * FW + RF[FF + 2] * WW + RF[FF + 3] * SW)
        }
        return 27 * (uF + hF + PF + iW + eF)
      }
    }
  }
};
Object.freeze(modules);
for (const FF in modules) Object.freeze(modules[FF]);