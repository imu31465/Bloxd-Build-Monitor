/*! For license information please see gw4e3a.245.43b52b60.chunk.js.LICENSE.txt */
export const id = 245;
export const ids = [245];
export const modules = {
  40342: (BB, OB, GB) => {
    BB.exports = DB;
    var YB = GB(363);

    function DB(BB, OB) {
      if (!(this instanceof DB)) return new DB(BB, OB);
      var GB = YB.create();
      YB.add(GB, BB, OB), this.base = YB.min(YB.create(), BB, GB), this.vec = YB.clone(OB), this.max = YB.max(YB.create(), BB, GB), this.mag = YB.length(this.vec)
    }
    var QB = DB.prototype;
    QB.width = function() {
      return this.vec[0]
    }, QB.height = function() {
      return this.vec[1]
    }, QB.depth = function() {
      return this.vec[2]
    }, QB.x0 = function() {
      return this.base[0]
    }, QB.y0 = function() {
      return this.base[1]
    }, QB.z0 = function() {
      return this.base[2]
    }, QB.x1 = function() {
      return this.max[0]
    }, QB.y1 = function() {
      return this.max[1]
    }, QB.z1 = function() {
      return this.max[2]
    }, QB.translate = function(BB) {
      return YB.add(this.max, this.max, BB), YB.add(this.base, this.base, BB), this
    }, QB.setPosition = function(BB) {
      return YB.add(this.max, BB, this.vec), YB.copy(this.base, BB), this
    }, QB.expand = function(BB) {
      var OB = YB.create(),
        GB = YB.create();
      return YB.max(OB, BB.max, this.max), YB.min(GB, BB.base, this.base), YB.subtract(OB, OB, GB), new DB(GB, OB)
    }, QB.intersects = function(BB) {
      return !(BB.base[0] > this.max[0]) && (!(BB.base[1] > this.max[1]) && (!(BB.base[2] > this.max[2]) && (!(BB.max[0] < this.base[0]) && (!(BB.max[1] < this.base[1]) && !(BB.max[2] < this.base[2])))))
    }, QB.touches = function(BB) {
      var OB = this.union(BB);
      return null !== OB && (0 == OB.width() || 0 == OB.height() || 0 == OB.depth())
    }, QB.union = function(BB) {
      if (!this.intersects(BB)) return null;
      var OB = Math.max(BB.base[0], this.base[0]),
        GB = Math.max(BB.base[1], this.base[1]),
        YB = Math.max(BB.base[2], this.base[2]);
      return new DB([OB, GB, YB], [Math.min(BB.max[0], this.max[0]) - OB, Math.min(BB.max[1], this.max[1]) - GB, Math.min(BB.max[2], this.max[2]) - YB])
    }
  },
  40334: BB => {
    BB.exports = function(BB, OB, GB, YB, DB, QB) {
      var oB = +OB[0],
        jB = +OB[1],
        yB = +OB[2],
        JB = +GB[0],
        MB = +GB[1],
        PB = +GB[2],
        zB = Math.sqrt(JB * JB + MB * MB + PB * PB);
      if (0 === zB) throw new Error("Can't raycast along a zero vector");
      return function(BB, OB, GB, YB, DB, QB, oB, jB, yB, JB) {
        for (var MB = 0, PB = Math.floor, zB = 0 | PB(OB), lB = 0 | PB(GB), pB = 0 | PB(YB), qB = DB > 0 ? 1 : -1, ZB = QB > 0 ? 1 : -1, NB = oB > 0 ? 1 : -1, RB = Math.abs(1 / DB), WB = Math.abs(1 / QB), AB = Math.abs(1 / oB), VB = RB < 1 / 0 ? RB * (qB > 0 ? zB + 1 - OB : OB - zB) : 1 / 0, SB = WB < 1 / 0 ? WB * (ZB > 0 ? lB + 1 - GB : GB - lB) : 1 / 0, nB = AB < 1 / 0 ? AB * (NB > 0 ? pB + 1 - YB : YB - pB) : 1 / 0, UB = -1; MB <= jB;) {
          var fB = BB(zB, lB, pB);
          if (fB) return yB && (yB[0] = OB + MB * DB, yB[1] = GB + MB * QB, yB[2] = YB + MB * oB), JB && (JB[0] = JB[1] = JB[2] = 0, 0 === UB && (JB[0] = -qB), 1 === UB && (JB[1] = -ZB), 2 === UB && (JB[2] = -NB)), fB;
          VB < SB ? VB < nB ? (zB += qB, MB = VB, VB += RB, UB = 0) : (pB += NB, MB = nB, nB += AB, UB = 2) : SB < nB ? (lB += ZB, MB = SB, SB += WB, UB = 1) : (pB += NB, MB = nB, nB += AB, UB = 2)
        }
        return yB && (yB[0] = OB + MB * DB, yB[1] = GB + MB * QB, yB[2] = YB + MB * oB), JB && (JB[0] = JB[1] = JB[2] = 0), 0
      }(BB, oB, jB, yB, JB /= zB, MB /= zB, PB /= zB, YB = "undefined" === typeof YB ? 64 : +YB, DB, QB)
    }
  },
  39813: (BB, OB, GB) => {
    GB.d(OB, {
      b: () => jB,
      e: () => QB
    });
    var YB = GB(4505);
    let DB = null;

    function QB(BB) {
      return null !== DB && BB === DB
    }

    function oB() {
      this.IH = !1, this.stopPropagation = !1, this.iH = !1, this.disabled = !1
    }
    class jB {
      constructor(BB, OB) {
        this.version = "0.7.0";
        var GB = Object.assign({}, new oB, OB || {});
        this.element = BB || document, this.IH = !!GB.IH, this.stopPropagation = !!GB.stopPropagation, this.iH = !!GB.iH, this.disabled = !!GB.disabled, this.filterEvents = (BB, OB) => !0, this.ignoreEvent = BB => !1, this.down = new YB.EventEmitter, this.up = new YB.EventEmitter, this.state = {}, this.gH = {
          dx: 0,
          dy: 0,
          UGB: 0,
          fGB: 0,
          kGB: 0
        }, this.pressCount = {}, this.releaseCount = {}, this._keyBindmap = {}, this._keyStates = {}, this._bindPressCount = {}, this._touches = {
          lastX: 0,
          lastY: 0,
          currID: null
        }, "loading" !== document.readyState ? JB(this) : document.addEventListener("DOMContentLoaded", (BB => {
          JB(this)
        }), {
          once: !0
        })
      }
      bind(BB) {
        for (var OB = arguments.length, GB = new Array(OB > 1 ? OB - 1 : 0), YB = 1; YB < OB; YB++) GB[YB - 1] = arguments[YB];
        GB.forEach((OB => {
          var GB = this._keyBindmap[OB] || [];
          GB.includes(BB) || (GB.push(BB), this._keyBindmap[OB] = GB)
        })), this.state[BB] = !!this.state[BB], this.pressCount[BB] = this.pressCount[BB] || 0, this.releaseCount[BB] = this.releaseCount[BB] || 0
      }
      unbind(BB) {
        for (var OB in this._keyBindmap) {
          var GB = this._keyBindmap[OB],
            YB = GB.indexOf(BB);
          YB > -1 && GB.splice(YB, 1)
        }
      }
      getBindings() {
        var BB = {};
        for (var OB in this._keyBindmap) {
          this._keyBindmap[OB].forEach((GB => {
            BB[GB] = BB[GB] || [], BB[GB].push(OB)
          }))
        }
        return BB
      }
      kP() {
        yB(this.gH), yB(this.pressCount), yB(this.releaseCount)
      }
    }

    function yB(BB) {
      for (var OB in BB) BB[OB] = 0
    }

    function JB(BB) {
      window.addEventListener("keydown", ZB.bind(null, BB, !0), !1), window.addEventListener("keyup", ZB.bind(null, BB, !1), !1);
      var OB = {
        passive: !0
      };
      BB.element.addEventListener("touchstart", lB.bind(void 0, BB), {
        passive: !1
      }), BB.element.addEventListener("touchend", qB.bind(void 0, BB), OB), BB.element.addEventListener("mousedown", NB.bind(null, BB, !0), OB), window.document.addEventListener("mouseup", NB.bind(null, BB, !1), OB), BB.element.addEventListener("touchmove", RB.bind(null, BB), OB), BB.element.addEventListener("mousemove", RB.bind(null, BB), OB), window.PointerEvent, BB.element.addEventListener("wheel", WB.bind(null, BB), OB), BB.element.addEventListener("contextmenu", AB.bind(null, BB), !1), window.addEventListener("blur", nB.bind(null, BB), !1)
    }
    var MB = 0,
      PB = 0,
      zB = null;

    function lB(BB, OB) {
      OB.preventDefault(), pB(OB)
    }

    function pB(BB) {
      let OB = !1;
      for (let GB = 0; GB < BB.touches.length; ++GB)
        if (BB.touches[GB].identifier === zB) {
          OB = !0;
          break
        } if (!OB) {
        const OB = BB.changedTouches[0];
        MB = OB.clientX, PB = OB.clientY, zB = OB.identifier
      }
    }

    function qB(BB, OB) {
      for (var GB = OB.changedTouches, YB = 0; YB < GB.length; ++YB) GB[YB].identifier === zB && (zB = null)
    }

    function ZB(BB, OB, GB) {
      if (!BB.ignoreEvent(GB)) try {
        UB(BB, GB), OB && GB.isTrusted && !GB.repeat && BB._keyStates[GB.code] && fB(BB, GB.code)
      } finally {
        kB(GB.code, OB, BB, GB)
      }
    }

    function NB(BB, OB, GB) {
      if (!BB.ignoreEvent(GB)) try {
        UB(BB, GB)
      } finally {
        ! function(BB, OB, GB) {
          if ("pointerId" in GB)
            if (OB) {
              if (null !== BB._touches.currID) return;
              BB._touches.currID = GB.pointerId
            } else {
              if (BB._touches.currID !== GB.pointerId) return;
              BB._touches.currID = null
            } var YB = "button" in GB ? GB.button + 1 : 1;
          kB("Mouse" + YB, OB, BB, GB)
        }(BB, OB, GB)
      }
    }

    function RB(BB, OB) {
      var GB = OB.movementX || OB.mozMovementX || 0,
        YB = OB.movementY || OB.mozMovementY || 0;
      if (OB.touches && 0 === (GB | YB)) {
        var DB = function(BB) {
          pB(BB);
          for (let OB = 0; OB < BB.changedTouches.length; ++OB)
            if (BB.changedTouches[OB].identifier == zB) {
              const GB = BB.changedTouches[OB],
                YB = [GB.clientX - MB, GB.clientY - PB];
              return MB = GB.clientX, PB = GB.clientY, YB
            } return console.error(`Did not find touch id ${zB}`), [0, 0]
        }(OB);
        GB = DB[0], YB = DB[1]
      }
      BB.gH.dx += GB, BB.gH.dy += YB
    }

    function WB(BB, OB) {
      UB(BB, OB);
      var GB = 1;
      switch (OB.deltaMode) {
        case 0:
          GB = 1;
          break;
        case 1:
          GB = 12;
          break;
        case 2:
          GB = BB.element.clientHeight || window.innerHeight
      }
      BB.gH.UGB += (OB.deltaX || 0) * GB, BB.gH.fGB += (OB.deltaY || 0) * GB, BB.gH.kGB += (OB.deltaZ || 0) * GB
    }

    function AB(BB, OB) {
      if (!BB.iH) return OB.preventDefault(), !1
    }
    var VB = {
      AltLeft: "altKey",
      AltRight: "altKey",
      ControlLeft: "ctrlKey",
      ControlRight: "ctrlKey",
      ShiftLeft: "shiftKey",
      ShiftRight: "shiftKey",
      MetaLeft: "metaKey",
      MetaRight: "metaKey"
    };

    function SB(BB, OB) {
      return !!BB[VB[OB]] || ("AltRight" === OB || "ControlLeft" === OB) && "function" === typeof BB.getModifierState && !0 === BB.getModifierState("AltGraph")
    }

    function nB(BB, OB) {
      for (var GB in BB._modifiersHeldThroughBlur = {}, VB) BB._keyStates[GB] && (BB._modifiersHeldThroughBlur[GB] = !0);
      OB && OB.isTrusted && function() {
        try {
          return window.self !== window.top
        } catch (BB) {
          return !0
        }
      }() && (clearTimeout(BB._blurRelease), BB._blurRelease = setTimeout((function() {
        if (!document.hasFocus())
          for (var OB in BB._modifiersHeldThroughBlur = {}, BB._keyStates) BB._keyStates[OB] && !/^Mouse\d/.test(OB) && fB(BB, OB)
      }), 0))
    }

    function UB(BB, OB) {
      var GB = BB._modifiersHeldThroughBlur;
      if (GB && OB.isTrusted && document.hasFocus())
        for (var YB in GB) delete GB[YB], BB._keyStates[YB] && YB !== OB.code && (SB(OB, YB) || fB(BB, YB))
    }

    function fB(BB, OB) {
      const GB = {
          code: OB,
          preventDefault: () => {},
          stopPropagation: () => {}
        },
        YB = DB;
      DB = GB;
      try {
        kB(OB, !1, BB, GB)
      } finally {
        DB = YB
      }
    }

    function kB(BB, OB, GB, YB) {
      var DB = GB._keyBindmap[BB];
      DB && (dB(GB._keyStates[BB], OB) && (GB._keyStates[BB] = OB, DB.forEach((BB => {
        (!GB.filterEvents || GB.filterEvents(YB, BB)) && function(BB, OB, GB, YB) {
          var DB = OB ? GB.pressCount : GB.releaseCount;
          DB[BB] = (DB[BB] || 0) + 1;
          var QB = GB._bindPressCount[BB] || 0;
          (QB += OB ? 1 : -1) < 0 && (QB = 0);
          GB._bindPressCount[BB] = QB;
          var oB = GB.state[BB];
          if (dB(oB, QB)) {
            GB.state[BB] = QB > 0;
            var jB = OB ? GB.down : GB.up;
            GB.disabled || jB.emit(BB, YB)
          }
        }(BB, OB, GB, YB)
      }))), "button" in YB || (GB.IH && !YB.defaultPrevented && YB.preventDefault(), GB.stopPropagation && YB.stopPropagation()))
    }

    function dB(BB, OB) {
      return BB ? !OB : OB
    }
  },
  37206: (BB, OB) => {
    function GB(BB) {
      if (BB && "object" === typeof BB) {
        var OB = BB.which || BB.keyCode || BB.charCode;
        OB && (BB = OB)
      }
      if ("number" === typeof BB) return oB[BB];
      var GB, QB = String(BB);
      return (GB = YB[QB.toLowerCase()]) ? GB : (GB = DB[QB.toLowerCase()]) || (1 === QB.length ? QB.charCodeAt(0) : void 0)
    }
    GB.isEventKey = function(BB, OB) {
      if (BB && "object" === typeof BB) {
        var GB = BB.which || BB.keyCode || BB.charCode;
        if (null === GB || void 0 === GB) return !1;
        if ("string" === typeof OB) {
          var QB;
          if (QB = YB[OB.toLowerCase()]) return QB === GB;
          if (QB = DB[OB.toLowerCase()]) return QB === GB
        } else if ("number" === typeof OB) return OB === GB;
        return !1
      }
    };
    var YB = (OB = BB.exports = GB).code = OB.codes = {
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
      DB = OB.aliases = {
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
    for (QB = 97; QB < 123; QB++) YB[String.fromCharCode(QB)] = QB - 32;
    for (var QB = 48; QB < 58; QB++) YB[QB - 48] = QB;
    for (QB = 1; QB < 13; QB++) YB["f" + QB] = QB + 111;
    for (QB = 0; QB < 10; QB++) YB["numpad " + QB] = QB + 96;
    var oB = OB.names = OB.title = {};
    for (QB in YB) oB[YB[QB]] = QB;
    for (var jB in DB) YB[jB] = DB[jB]
  },
  40329: (BB, OB, GB) => {
    GB.d(OB, {
      b: () => YB
    });
    class YB {
      constructor() {
        let BB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
          OB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 10;
        this.pE = !1, this.qE = !1, this.pI = 30, this.OE = 0, this.ZE = 100, this.bZ = !1, this.fullscreen = !1, this.yR = function(BB) {}, this.WE = function(BB, OB, GB) {}, this.uP = function() {}, this.vN = function() {}, this.kE = function() {}, this.onFullscreenChanged = function() {}, this.onPointerLockError = function(BB) {}, this._data = new DB(OB),
          function(BB) {
            if ("loading" === document.readyState) {
              var OB = () => {
                document.removeEventListener("readystatechange", OB), BB()
              };
              document.addEventListener("readystatechange", OB)
            } else setTimeout(BB, 0)
          }((() => {
            ! function(BB) {
              var OB = BB._data,
                GB = OB.nowObject.now();
              OB.lastTickStarted = GB, OB.lastFrameStarted = GB, OB.lastRenderStarted = GB, OB.frameCB = () => function(BB) {
                var OB = BB._data;
                requestAnimationFrame(OB.frameCB), jB(BB);
                var GB = OB.nowObject.now(),
                  YB = GB - OB.lastFrameStarted;
                if (OB.lastFrameStarted = GB, BB.OE > 0) {
                  OB.renderAccum += YB;
                  var DB = 1e3 / BB.OE;
                  if (OB.renderAccum < DB) return;
                  OB.renderAccum -= DB, OB.renderAccum > DB && (OB.renderAccum = DB)
                }
                var QB = GB - OB.lastRenderStarted;
                OB.lastRenderStarted = GB;
                var oB = 1e3 / BB.pI,
                  yB = (GB - OB.lastTickStarted) / oB;
                yB < 0 && (yB = 0);
                BB.WE(QB, yB, oB), setTimeout(jB, 0, BB, !0)
              }(BB), OB.intervalCB = () => jB(BB), requestAnimationFrame(OB.frameCB), OB.pollTime > 0 && (OB.intervalID = setInterval(OB.intervalCB, Math.max(OB.pollTime, 1e3 / BB.pI / 2)))
            }(this),
            function(BB, OB) {
              if (!OB) return;
              var GB = !1,
                YB = !1,
                DB = BB => {
                  if (!!BB !== (GB = OB === document.pointerLockElement))
                    if (BB) {
                      var YB = OB.requestPointerLock();
                      YB && YB.catch && YB.catch((BB => {}))
                    } else document.exitPointerLock()
                },
                QB = BB => {
                  !!BB !== (YB = OB === document.fullscreenElement) && (BB ? OB.requestFullscreen ? OB.requestFullscreen() : OB.webkitRequestFullscreen && OB.webkitRequestFullscreen() : document.exitFullscreen ? document.exitFullscreen() : document.webkitExitFullscreen && document.webkitExitFullscreen())
                };
              document.addEventListener("pointerlockchange", (YB => {
                GB = OB === document.pointerLockElement, BB.kE(GB)
              })), document.addEventListener("fullscreenchange", (GB => {
                YB = OB === document.fullscreenElement, BB.onFullscreenChanged(YB)
              })), document.addEventListener("pointerlockerror", (YB => {
                GB = OB === document.pointerLockElement, BB.onPointerLockError(YB)
              })), Object.defineProperty(BB, "bZ", {
                get: () => GB,
                set: DB
              }), Object.defineProperty(BB, "fullscreen", {
                get: () => YB,
                set: QB
              }), OB.addEventListener("click", (OB => {
                BB.pE && DB(!0), BB.qE && QB(!0)
              }));
              var oB = () => BB.vN();
              if (window.ResizeObserver) {
                new ResizeObserver(oB).observe(OB)
              } else window.addEventListener("resize", oB)
            }(this, BB), this.uP()
          }))
      }
    }

    function DB() {
      let BB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 10;
      this.nowObject = performance || Date, this.pollTime = BB, this.renderAccum = 0, this.lastTickStarted = 0, this.lastFrameStarted = 0, this.lastRenderStarted = 0, this.avgTickTime = 2, this.frameCB = null, this.intervalCB = null, this.intervalID = -1
    }
    var QB = 3,
      oB = 20;

    function jB(BB) {
      for (var OB = BB._data, GB = 1e3 / BB.pI, YB = OB.nowObject.now() + oB, DB = 0; OB.nowObject.now() >= OB.lastTickStarted + GB && OB.nowObject.now() < YB && ++DB <= QB;) BB.yR(GB), OB.lastTickStarted += GB;
      var jB = 5 * (GB + 5),
        yB = OB.nowObject.now();
      if (yB - OB.lastTickStarted > jB)
        for (; yB >= OB.lastTickStarted + GB;) OB.lastTickStarted += GB
    }
  },
  37378: (BB, OB, GB) => {
    GB.d(OB, {
      c: () => oB
    });
    var YB = GB(56);
    const DB = YB.useLayoutEffect;
    const QB = function(BB) {
      var OB = (0, YB.useRef)(BB);
      return DB((function() {
        OB.current = BB
      })), OB
    };
    var oB = function(BB) {
      var OB = QB(BB);
      (0, YB.useEffect)((function() {
        var BB = function(BB) {
          var GB;
          if (null != OB.current && (GB = OB.current(BB)), BB.defaultPrevented && (BB.returnValue = ""), "string" === typeof GB) return BB.returnValue = GB, GB
        };
        return window.addEventListener("beforeunload", BB),
          function() {
            window.removeEventListener("beforeunload", BB)
          }
      }), [])
    }
  },
  37244: BB => {
    var OB, GB = "undefined" !== typeof window ? window.navigator.userAgent : "",
      YB = /OS X/.test(GB),
      DB = /Opera/.test(GB),
      QB = !/like Gecko/.test(GB) && !DB,
      oB = BB.exports = {
        0: YB ? "<menu>" : "<UNK>",
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
        93: YB ? "<meta>" : "<menu>",
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
        173: YB && QB ? "-" : "<volume-mute>",
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
        231: DB ? "`" : "<unicode>",
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
    for (OB = 58; OB < 65; ++OB) oB[OB] = String.fromCharCode(OB);
    for (OB = 48; OB < 58; ++OB) oB[OB] = OB - 48 + "";
    for (OB = 65; OB < 91; ++OB) oB[OB] = String.fromCharCode(OB);
    for (OB = 96; OB < 106; ++OB) oB[OB] = "<num-" + (OB - 96) + ">";
    for (OB = 112; OB < 136; ++OB) oB[OB] = "F" + (OB - 111)
  },
  39686: (BB, OB, GB) => {
    function YB(BB, OB, GB, YB, DB) {
      var QB = {};
      return Object.keys(YB).forEach((function(BB) {
        QB[BB] = YB[BB]
      })), QB.enumerable = !!QB.enumerable, QB.configurable = !!QB.configurable, ("value" in QB || QB.initializer) && (QB.writable = !0), QB = GB.slice().reverse().reduce((function(GB, YB) {
        return YB(BB, OB, GB) || GB
      }), QB), DB && void 0 !== QB.initializer && (QB.value = QB.initializer ? QB.initializer.call(DB) : void 0, QB.initializer = void 0), void 0 === QB.initializer && (Object.defineProperty(BB, OB, QB), QB = null), QB
    }
    GB.d(OB, {
      b: () => YB
    })
  },
  39684: (BB, OB, GB) => {
    function YB(BB, OB, GB, YB) {
      GB && Object.defineProperty(BB, OB, {
        enumerable: GB.enumerable,
        configurable: GB.configurable,
        writable: GB.writable,
        value: GB.initializer ? GB.initializer.call(YB) : void 0
      })
    }
    GB.d(OB, {
      d: () => YB
    })
  },
  39358: (BB, OB, GB) => {
    GB.d(OB, {
      b: () => QB
    });
    var YB = GB(39366);
    const DB = (BB, OB, GB) => BB ? BB.getClassName && "Mesh" === BB.getClassName() ? null : !BB.getClassName || "SubMesh" !== BB.getClassName() && "PhysicsBody" !== BB.getClassName() ? BB.clone ? BB.clone() : Array.isArray(BB) ? BB.slice() : GB && "object" === typeof BB ? {
      ...BB
    } : null : BB.clone(OB) : null;
    class QB {
      static DeepCopy(BB, OB, GB, QB) {
        let oB = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
        const jB = function(BB) {
          const OB = [];
          do {
            const GB = Object.getOwnPropertyNames(BB);
            for (const BB of GB) - 1 === OB.indexOf(BB) && OB.push(BB)
          } while (BB = Object.getPrototypeOf(BB));
          return OB
        }(BB);
        for (const JB of jB) {
          if ("_" === JB[0] && (!QB || -1 === QB.indexOf(JB))) continue;
          if (JB.endsWith("Observable")) continue;
          if (GB && -1 !== GB.indexOf(JB)) continue;
          const jB = BB[JB],
            MB = typeof jB;
          if ("function" !== MB) try {
            if ("object" === MB)
              if (jB instanceof Uint8Array) OB[JB] = Uint8Array.from(jB);
              else if (jB instanceof Array) {
              if (OB[JB] = [], jB.length > 0)
                if ("object" == typeof jB[0])
                  for (let BB = 0; BB < jB.length; BB++) {
                    const GB = DB(jB[BB], OB, oB); - 1 === OB[JB].indexOf(GB) && OB[JB].push(GB)
                  } else OB[JB] = jB.slice(0)
            } else OB[JB] = DB(jB, OB, oB);
            else OB[JB] = jB
          } catch (yB) {
            YB.b.Warn(yB.message)
          }
        }
      }
    }
  },
  39394: (BB, OB, GB) => {
    GB.d(OB, {
      b: () => DB,
      d: () => QB,
      g: () => oB,
      h: () => jB
    });
    var YB = GB(37894);
    class DB {
      constructor(BB, OB, GB) {
        this.gradient = BB, this.color1 = OB, this.color2 = GB
      }
      getColorToRef(BB) {
        this.color2 ? YB.g.LerpToRef(this.color1, this.color2, Math.random(), BB) : BB.IU(this.color1)
      }
    }
    class QB {
      constructor(BB, OB) {
        this.gradient = BB, this.color = OB
      }
    }
    class oB {
      constructor(BB, OB, GB) {
        this.gradient = BB, this.factor1 = OB, this.factor2 = GB
      }
      getFactor() {
        return void 0 === this.factor2 || this.factor2 === this.factor1 ? this.factor1 : this.factor1 + (this.factor2 - this.factor1) * Math.random()
      }
    }
    class jB {
      static GetCurrentGradient(BB, OB, GB) {
        if (OB[0].gradient > BB) return void GB(OB[0], OB[0], 1);
        for (let DB = 0; DB < OB.length - 1; DB++) {
          const YB = OB[DB],
            QB = OB[DB + 1];
          if (BB >= YB.gradient && BB <= QB.gradient) {
            return void GB(YB, QB, (BB - YB.gradient) / (QB.gradient - YB.gradient))
          }
        }
        const YB = OB.length - 1;
        GB(OB[YB], OB[YB], 1)
      }
    }
  },
  39366: (BB, OB, GB) => {
    GB.d(OB, {
      b: () => YB
    });
    class YB {
      static _CheckLimit(BB, OB) {
        let GB = YB._LogLimitOutputs[BB];
        return GB ? GB.current++ : (GB = {
          limit: OB,
          current: 1
        }, YB._LogLimitOutputs[BB] = GB), GB.current <= GB.limit
      }
      static _GenerateLimitMessage(BB) {
        let OB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
        const GB = YB._LogLimitOutputs[BB];
        if (!GB || !YB.MessageLimitReached) return;
        const DB = this._Levels[OB];
        GB.current === GB.limit && YB[DB.name](YB.MessageLimitReached.replace(/%LIMIT%/g, "" + GB.limit).replace(/%TYPE%/g, DB.name ?? ""))
      }
      static _AddLogEntry(BB) {
        YB._LogCache = BB + YB._LogCache, YB.OnNewCacheEntry && YB.OnNewCacheEntry(BB)
      }
      static _FormatMessage(BB) {
        const OB = BB => BB < 10 ? "0" + BB : "" + BB,
          GB = new Date;
        return "[" + OB(GB.getHours()) + ":" + OB(GB.getMinutes()) + ":" + OB(GB.getSeconds()) + "]: " + BB
      }
      static _LogDisabled(BB, OB) {}
      static _LogEnabled() {
        let BB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
          OB = arguments.length > 1 ? arguments[1] : void 0,
          GB = arguments.length > 2 ? arguments[2] : void 0;
        const DB = Array.isArray(OB) ? OB[0] : OB;
        if (void 0 !== GB && !YB._CheckLimit(DB, GB)) return;
        const QB = YB._FormatMessage(DB),
          oB = this._Levels[BB],
          jB = Array.isArray(OB) ? OB.slice(1) : [];
        oB.logFunc && oB.logFunc("BJS - " + QB, ...jB);
        const yB = `<div style='color:${oB.color}'>${QB}</div><br>`;
        YB._AddLogEntry(yB), YB._GenerateLimitMessage(DB, BB)
      }
      static get LogCache() {
        return YB._LogCache
      }
      static ClearLogCache() {
        YB._LogCache = "", YB._LogLimitOutputs = {}, YB.errorsCount = 0
      }
      static set LogLevels(BB) {
        YB.Log = YB._LogDisabled, YB.Warn = YB._LogDisabled, YB.Error = YB._LogDisabled;
        const OB = [YB.MessageLogLevel, YB.WarningLogLevel, YB.ErrorLogLevel];
        for (const GB of OB)
          if ((BB & GB) === GB) {
            const BB = this._Levels[GB];
            YB[BB.name] = YB._LogEnabled.bind(YB, GB)
          }
      }
    }
    YB.NoneLogLevel = 0, YB.MessageLogLevel = 1, YB.WarningLogLevel = 2, YB.ErrorLogLevel = 4, YB.AllLogLevel = 7, YB.MessageLimitReached = "Too many %TYPE%s (%LIMIT%), no more %TYPE%s will be reported for this message.", YB._LogCache = "", YB._LogLimitOutputs = {}, YB._Levels = [{}, {
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
    }], YB.errorsCount = 0, YB.Log = YB._LogEnabled.bind(YB, YB.MessageLogLevel), YB.Warn = YB._LogEnabled.bind(YB, YB.WarningLogLevel), YB.Error = YB._LogEnabled.bind(YB, YB.ErrorLogLevel)
  },
  39403: (BB, OB, GB) => {
    GB.d(OB, {
      e: () => oB
    });
    var YB = GB(37778),
      DB = GB(37807),
      QB = GB(39358);
    class oB {
      constructor() {
        this.direction1 = new YB.r(0, 1, 0), this.direction2 = new YB.r(0, 1, 0), this.minEmitBox = new YB.r(-.5, -.5, -.5), this.maxEmitBox = new YB.r(.5, .5, .5)
      }
      startDirectionFunction(BB, OB, GB, QB) {
        const oB = (0, DB.RandomRange)(this.direction1.x, this.direction2.x),
          jB = (0, DB.RandomRange)(this.direction1.y, this.direction2.y),
          yB = (0, DB.RandomRange)(this.direction1.z, this.direction2.z);
        if (QB) return OB.x = oB, OB.y = jB, void(OB.z = yB);
        YB.r.TransformNormalFromFloatsToRef(oB, jB, yB, BB, OB)
      }
      startPositionFunction(BB, OB, GB, QB) {
        const oB = (0, DB.RandomRange)(this.minEmitBox.x, this.maxEmitBox.x),
          jB = (0, DB.RandomRange)(this.minEmitBox.y, this.maxEmitBox.y),
          yB = (0, DB.RandomRange)(this.minEmitBox.z, this.maxEmitBox.z);
        if (QB) return OB.x = oB, OB.y = jB, void(OB.z = yB);
        YB.r.TransformCoordinatesFromFloatsToRef(oB, jB, yB, BB, OB)
      }
      clone() {
        const BB = new oB;
        return QB.b.DeepCopy(this, BB), BB
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
        return BB.type = this.getClassName(), BB.direction1 = this.direction1.dDB(), BB.direction2 = this.direction2.dDB(), BB.minEmitBox = this.minEmitBox.dDB(), BB.maxEmitBox = this.maxEmitBox.dDB(), BB
      }
      parse(BB) {
        YB.r.FromArrayToRef(BB.direction1, 0, this.direction1), YB.r.FromArrayToRef(BB.direction2, 0, this.direction2), YB.r.FromArrayToRef(BB.minEmitBox, 0, this.minEmitBox), YB.r.FromArrayToRef(BB.maxEmitBox, 0, this.maxEmitBox)
      }
    }
  },
  39356: (BB, OB, GB) => {
    GB.d(OB, {
      c: () => jB,
      f: () => oB
    });
    var YB = GB(37778),
      DB = GB(37807),
      QB = GB(39358);
    class oB {
      constructor() {
        let BB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
          OB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
          GB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1,
          DB = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
        this.radius = BB, this.height = OB, this.radiusRange = GB, this.directionRandomizer = DB, this._tempVector = YB.r.Zero()
      }
      startDirectionFunction(BB, OB, GB, QB, oB) {
        GB.position.subtractToRef(BB.getTranslation(), this._tempVector), this._tempVector.normalize(), YB.r.TransformNormalToRef(this._tempVector, oB, this._tempVector);
        const jB = (0, DB.RandomRange)(-this.directionRandomizer / 2, this.directionRandomizer / 2);
        let yB = Math.atan2(this._tempVector.x, this._tempVector.z);
        yB += (0, DB.RandomRange)(-Math.PI / 2, Math.PI / 2) * this.directionRandomizer, this._tempVector.y = jB, this._tempVector.x = Math.sin(yB), this._tempVector.z = Math.cos(yB), this._tempVector.normalize(), QB ? OB.IU(this._tempVector) : YB.r.TransformNormalFromFloatsToRef(this._tempVector.x, this._tempVector.y, this._tempVector.z, BB, OB)
      }
      startPositionFunction(BB, OB, GB, QB) {
        const oB = (0, DB.RandomRange)(-this.height / 2, this.height / 2),
          jB = (0, DB.RandomRange)(0, 2 * Math.PI),
          yB = (0, DB.RandomRange)((1 - this.radiusRange) * (1 - this.radiusRange), 1),
          JB = Math.sqrt(yB) * this.radius,
          MB = JB * Math.cos(jB),
          PB = JB * Math.sin(jB);
        QB ? OB.zOB(MB, oB, PB) : YB.r.TransformCoordinatesFromFloatsToRef(MB, oB, PB, BB, OB)
      }
      clone() {
        const BB = new oB(this.radius, this.directionRandomizer);
        return QB.b.DeepCopy(this, BB), BB
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
    class jB extends oB {
      constructor() {
        let BB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
          OB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
          GB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1,
          DB = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : new YB.r(0, 1, 0),
          QB = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : new YB.r(0, 1, 0);
        super(BB, OB, GB), this.direction1 = DB, this.direction2 = QB
      }
      startDirectionFunction(BB, OB, GB, QB) {
        const oB = (0, DB.RandomRange)(this.direction1.x, this.direction2.x),
          jB = (0, DB.RandomRange)(this.direction1.y, this.direction2.y),
          yB = (0, DB.RandomRange)(this.direction1.z, this.direction2.z);
        QB ? OB.zOB(oB, jB, yB) : YB.r.TransformNormalFromFloatsToRef(oB, jB, yB, BB, OB)
      }
      clone() {
        const BB = new jB(this.radius, this.height, this.radiusRange, this.direction1, this.direction2);
        return QB.b.DeepCopy(this, BB), BB
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
        return BB.direction1 = this.direction1.dDB(), BB.direction2 = this.direction2.dDB(), BB
      }
      parse(BB) {
        super.parse(BB), YB.r.FromArrayToRef(BB.direction1, 0, this.direction1), YB.r.FromArrayToRef(BB.direction2, 0, this.direction2)
      }
    }
  },
  39494: (BB, OB, GB) => {
    GB.d(OB, {
      c: () => PB
    });
    const YB = .5 * (Math.sqrt(3) - 1),
      DB = (3 - Math.sqrt(3)) / 6,
      QB = 1 / 3,
      oB = 1 / 6,
      jB = (Math.sqrt(5) - 1) / 4,
      yB = (5 - Math.sqrt(5)) / 20,
      JB = new Float32Array([1, 1, 0, -1, 1, 0, 1, -1, 0, -1, -1, 0, 1, 0, 1, -1, 0, 1, 1, 0, -1, -1, 0, -1, 0, 1, 1, 0, -1, 1, 0, 1, -1, 0, -1, -1]),
      MB = new Float32Array([0, 1, 1, 1, 0, 1, 1, -1, 0, 1, -1, 1, 0, 1, -1, -1, 0, -1, 1, 1, 0, -1, 1, -1, 0, -1, -1, 1, 0, -1, -1, -1, 1, 0, 1, 1, 1, 0, 1, -1, 1, 0, -1, 1, 1, 0, -1, -1, -1, 0, 1, 1, -1, 0, 1, -1, -1, 0, -1, 1, -1, 0, -1, -1, 1, 1, 0, 1, 1, 1, 0, -1, 1, -1, 0, 1, 1, -1, 0, -1, -1, 1, 0, 1, -1, 1, 0, -1, -1, -1, 0, 1, -1, -1, 0, -1, 1, 1, 1, 0, 1, 1, -1, 0, 1, -1, 1, 0, 1, -1, -1, 0, -1, 1, 1, 0, -1, 1, -1, 0, -1, -1, 1, 0, -1, -1, -1, 0]);
    const PB = class {
      constructor() {
        let BB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Math.random;
        const OB = "function" == typeof BB ? BB : function(BB) {
          let OB = 0,
            GB = 0,
            YB = 0,
            DB = 1;
          const QB = function() {
            let BB = 4022871197;
            return function(OB) {
              OB = OB.toString();
              for (let GB = 0; GB < OB.length; GB++) {
                BB += OB.charCodeAt(GB);
                let YB = .02519603282416938 * BB;
                BB = YB >>> 0, YB -= BB, YB *= BB, BB = YB >>> 0, YB -= BB, BB += 4294967296 * YB
              }
              return 2.3283064365386963e-10 * (BB >>> 0)
            }
          }();
          OB = QB(" "), GB = QB(" "), YB = QB(" "), OB -= QB(BB), OB < 0 && (OB += 1);
          GB -= QB(BB), GB < 0 && (GB += 1);
          YB -= QB(BB), YB < 0 && (YB += 1);
          return function() {
            const BB = 2091639 * OB + 2.3283064365386963e-10 * DB;
            return OB = GB, GB = YB, YB = BB - (DB = 0 | BB)
          }
        }(BB);
        this.p = function(BB) {
          const OB = new Uint8Array(256);
          for (let GB = 0; GB < 256; GB++) OB[GB] = GB;
          for (let GB = 0; GB < 255; GB++) {
            const YB = GB + ~~(BB() * (256 - GB)),
              DB = OB[GB];
            OB[GB] = OB[YB], OB[YB] = DB
          }
          return OB
        }(OB), this.perm = new Uint8Array(512), this.permMod12 = new Uint8Array(512);
        for (let GB = 0; GB < 512; GB++) this.perm[GB] = this.p[255 & GB], this.permMod12[GB] = this.perm[GB] % 12
      }
      noise2D(BB, OB) {
        const GB = this.permMod12,
          QB = this.perm;
        let oB = 0,
          jB = 0,
          yB = 0;
        const MB = (BB + OB) * YB,
          PB = Math.floor(BB + MB),
          zB = Math.floor(OB + MB),
          lB = (PB + zB) * DB,
          pB = BB - (PB - lB),
          qB = OB - (zB - lB);
        let ZB, NB;
        pB > qB ? (ZB = 1, NB = 0) : (ZB = 0, NB = 1);
        const RB = pB - ZB + DB,
          WB = qB - NB + DB,
          AB = pB - 1 + 2 * DB,
          VB = qB - 1 + 2 * DB,
          SB = 255 & PB,
          nB = 255 & zB;
        let UB = .5 - pB * pB - qB * qB;
        if (UB >= 0) {
          const BB = 3 * GB[SB + QB[nB]];
          UB *= UB, oB = UB * UB * (JB[BB] * pB + JB[BB + 1] * qB)
        }
        let fB = .5 - RB * RB - WB * WB;
        if (fB >= 0) {
          const BB = 3 * GB[SB + ZB + QB[nB + NB]];
          fB *= fB, jB = fB * fB * (JB[BB] * RB + JB[BB + 1] * WB)
        }
        let kB = .5 - AB * AB - VB * VB;
        if (kB >= 0) {
          const BB = 3 * GB[SB + 1 + QB[nB + 1]];
          kB *= kB, yB = kB * kB * (JB[BB] * AB + JB[BB + 1] * VB)
        }
        return 70 * (oB + jB + yB)
      }
      noise3D(BB, OB, GB) {
        const YB = this.permMod12,
          DB = this.perm;
        let jB, yB, MB, PB;
        const zB = (BB + OB + GB) * QB,
          lB = Math.floor(BB + zB),
          pB = Math.floor(OB + zB),
          qB = Math.floor(GB + zB),
          ZB = (lB + pB + qB) * oB,
          NB = BB - (lB - ZB),
          RB = OB - (pB - ZB),
          WB = GB - (qB - ZB);
        let AB, VB, SB, nB, UB, fB;
        NB >= RB ? RB >= WB ? (AB = 1, VB = 0, SB = 0, nB = 1, UB = 1, fB = 0) : NB >= WB ? (AB = 1, VB = 0, SB = 0, nB = 1, UB = 0, fB = 1) : (AB = 0, VB = 0, SB = 1, nB = 1, UB = 0, fB = 1) : RB < WB ? (AB = 0, VB = 0, SB = 1, nB = 0, UB = 1, fB = 1) : NB < WB ? (AB = 0, VB = 1, SB = 0, nB = 0, UB = 1, fB = 1) : (AB = 0, VB = 1, SB = 0, nB = 1, UB = 1, fB = 0);
        const kB = NB - AB + oB,
          dB = RB - VB + oB,
          KB = WB - SB + oB,
          uB = NB - nB + 2 * oB,
          mB = RB - UB + 2 * oB,
          IB = WB - fB + 2 * oB,
          FB = NB - 1 + .5,
          iB = RB - 1 + .5,
          LB = WB - 1 + .5,
          gB = 255 & lB,
          rB = 255 & pB,
          XB = 255 & qB;
        let wB = .6 - NB * NB - RB * RB - WB * WB;
        if (wB < 0) jB = 0;
        else {
          const BB = 3 * YB[gB + DB[rB + DB[XB]]];
          wB *= wB, jB = wB * wB * (JB[BB] * NB + JB[BB + 1] * RB + JB[BB + 2] * WB)
        }
        let EB = .6 - kB * kB - dB * dB - KB * KB;
        if (EB < 0) yB = 0;
        else {
          const BB = 3 * YB[gB + AB + DB[rB + VB + DB[XB + SB]]];
          EB *= EB, yB = EB * EB * (JB[BB] * kB + JB[BB + 1] * dB + JB[BB + 2] * KB)
        }
        let cB = .6 - uB * uB - mB * mB - IB * IB;
        if (cB < 0) MB = 0;
        else {
          const BB = 3 * YB[gB + nB + DB[rB + UB + DB[XB + fB]]];
          cB *= cB, MB = cB * cB * (JB[BB] * uB + JB[BB + 1] * mB + JB[BB + 2] * IB)
        }
        let hB = .6 - FB * FB - iB * iB - LB * LB;
        if (hB < 0) PB = 0;
        else {
          const BB = 3 * YB[gB + 1 + DB[rB + 1 + DB[XB + 1]]];
          hB *= hB, PB = hB * hB * (JB[BB] * FB + JB[BB + 1] * iB + JB[BB + 2] * LB)
        }
        return 32 * (jB + yB + MB + PB)
      }
      noise4D(BB, OB, GB, YB) {
        const DB = this.perm;
        let QB, oB, JB, PB, zB;
        const lB = (BB + OB + GB + YB) * jB,
          pB = Math.floor(BB + lB),
          qB = Math.floor(OB + lB),
          ZB = Math.floor(GB + lB),
          NB = Math.floor(YB + lB),
          RB = (pB + qB + ZB + NB) * yB,
          WB = BB - (pB - RB),
          AB = OB - (qB - RB),
          VB = GB - (ZB - RB),
          SB = YB - (NB - RB);
        let nB = 0,
          UB = 0,
          fB = 0,
          kB = 0;
        WB > AB ? nB++ : UB++, WB > VB ? nB++ : fB++, WB > SB ? nB++ : kB++, AB > VB ? UB++ : fB++, AB > SB ? UB++ : kB++, VB > SB ? fB++ : kB++;
        const dB = nB >= 3 ? 1 : 0,
          KB = UB >= 3 ? 1 : 0,
          uB = fB >= 3 ? 1 : 0,
          mB = kB >= 3 ? 1 : 0,
          IB = nB >= 2 ? 1 : 0,
          FB = UB >= 2 ? 1 : 0,
          iB = fB >= 2 ? 1 : 0,
          LB = kB >= 2 ? 1 : 0,
          gB = nB >= 1 ? 1 : 0,
          rB = UB >= 1 ? 1 : 0,
          XB = fB >= 1 ? 1 : 0,
          wB = kB >= 1 ? 1 : 0,
          EB = WB - dB + yB,
          cB = AB - KB + yB,
          hB = VB - uB + yB,
          aB = SB - mB + yB,
          eB = WB - IB + 2 * yB,
          TB = AB - FB + 2 * yB,
          bB = VB - iB + 2 * yB,
          CB = SB - LB + 2 * yB,
          HB = WB - gB + 3 * yB,
          vB = AB - rB + 3 * yB,
          sB = VB - XB + 3 * yB,
          xB = SB - wB + 3 * yB,
          tB = WB - 1 + 4 * yB,
          BO = AB - 1 + 4 * yB,
          OO = VB - 1 + 4 * yB,
          GO = SB - 1 + 4 * yB,
          YO = 255 & pB,
          DO = 255 & qB,
          QO = 255 & ZB,
          oO = 255 & NB;
        let jO = .6 - WB * WB - AB * AB - VB * VB - SB * SB;
        if (jO < 0) QB = 0;
        else {
          const BB = DB[YO + DB[DO + DB[QO + DB[oO]]]] % 32 * 4;
          jO *= jO, QB = jO * jO * (MB[BB] * WB + MB[BB + 1] * AB + MB[BB + 2] * VB + MB[BB + 3] * SB)
        }
        let yO = .6 - EB * EB - cB * cB - hB * hB - aB * aB;
        if (yO < 0) oB = 0;
        else {
          const BB = DB[YO + dB + DB[DO + KB + DB[QO + uB + DB[oO + mB]]]] % 32 * 4;
          yO *= yO, oB = yO * yO * (MB[BB] * EB + MB[BB + 1] * cB + MB[BB + 2] * hB + MB[BB + 3] * aB)
        }
        let JO = .6 - eB * eB - TB * TB - bB * bB - CB * CB;
        if (JO < 0) JB = 0;
        else {
          const BB = DB[YO + IB + DB[DO + FB + DB[QO + iB + DB[oO + LB]]]] % 32 * 4;
          JO *= JO, JB = JO * JO * (MB[BB] * eB + MB[BB + 1] * TB + MB[BB + 2] * bB + MB[BB + 3] * CB)
        }
        let MO = .6 - HB * HB - vB * vB - sB * sB - xB * xB;
        if (MO < 0) PB = 0;
        else {
          const BB = DB[YO + gB + DB[DO + rB + DB[QO + XB + DB[oO + wB]]]] % 32 * 4;
          MO *= MO, PB = MO * MO * (MB[BB] * HB + MB[BB + 1] * vB + MB[BB + 2] * sB + MB[BB + 3] * xB)
        }
        let PO = .6 - tB * tB - BO * BO - OO * OO - GO * GO;
        if (PO < 0) zB = 0;
        else {
          const BB = DB[YO + 1 + DB[DO + 1 + DB[QO + 1 + DB[oO + 1]]]] % 32 * 4;
          PO *= PO, zB = PO * PO * (MB[BB] * tB + MB[BB + 1] * BO + MB[BB + 2] * OO + MB[BB + 3] * GO)
        }
        return 27 * (QB + oB + JB + PB + zB)
      }
    }
  }
};
Object.freeze(modules);
for (const BB in modules) Object.freeze(modules[BB]);