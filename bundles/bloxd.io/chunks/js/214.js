/*! For license information please see halsg.214.c04ed53d.chunk.js.LICENSE.txt */
export const id = 214;
export const ids = [214];
export const modules = {
  39180: (bb, ub, hb) => {
    bb.exports = Ob;
    var Bb = hb(324);

    function Ob(bb, ub) {
      if (!(this instanceof Ob)) return new Ob(bb, ub);
      var hb = Bb.create();
      Bb.add(hb, bb, ub), this.base = Bb.min(Bb.create(), bb, hb), this.vec = Bb.clone(ub), this.max = Bb.max(Bb.create(), bb, hb), this.mag = Bb.length(this.vec)
    }
    var Gb = Ob.prototype;
    Gb.width = function() {
      return this.vec[0]
    }, Gb.height = function() {
      return this.vec[1]
    }, Gb.depth = function() {
      return this.vec[2]
    }, Gb.x0 = function() {
      return this.base[0]
    }, Gb.y0 = function() {
      return this.base[1]
    }, Gb.z0 = function() {
      return this.base[2]
    }, Gb.x1 = function() {
      return this.max[0]
    }, Gb.y1 = function() {
      return this.max[1]
    }, Gb.z1 = function() {
      return this.max[2]
    }, Gb.translate = function(bb) {
      return Bb.add(this.max, this.max, bb), Bb.add(this.base, this.base, bb), this
    }, Gb.setPosition = function(bb) {
      return Bb.add(this.max, bb, this.vec), Bb.copy(this.base, bb), this
    }, Gb.expand = function(bb) {
      var ub = Bb.create(),
        hb = Bb.create();
      return Bb.max(ub, bb.max, this.max), Bb.min(hb, bb.base, this.base), Bb.subtract(ub, ub, hb), new Ob(hb, ub)
    }, Gb.intersects = function(bb) {
      return !(bb.base[0] > this.max[0]) && (!(bb.base[1] > this.max[1]) && (!(bb.base[2] > this.max[2]) && (!(bb.max[0] < this.base[0]) && (!(bb.max[1] < this.base[1]) && !(bb.max[2] < this.base[2])))))
    }, Gb.touches = function(bb) {
      var ub = this.union(bb);
      return null !== ub && (0 == ub.width() || 0 == ub.height() || 0 == ub.depth())
    }, Gb.union = function(bb) {
      if (!this.intersects(bb)) return null;
      var ub = Math.max(bb.base[0], this.base[0]),
        hb = Math.max(bb.base[1], this.base[1]),
        Bb = Math.max(bb.base[2], this.base[2]);
      return new Ob([ub, hb, Bb], [Math.min(bb.max[0], this.max[0]) - ub, Math.min(bb.max[1], this.max[1]) - hb, Math.min(bb.max[2], this.max[2]) - Bb])
    }
  },
  39171: bb => {
    bb.exports = function(bb, ub, hb, Bb, Ob, Gb) {
      var Ub = +ub[0],
        Lb = +ub[1],
        Yb = +ub[2],
        Sb = +hb[0],
        ab = +hb[1],
        Hb = +hb[2],
        wb = Math.sqrt(Sb * Sb + ab * ab + Hb * Hb);
      if (0 === wb) throw new Error("Can't raycast along a zero vector");
      return function(bb, ub, hb, Bb, Ob, Gb, Ub, Lb, Yb, Sb) {
        for (var ab = 0, Hb = Math.floor, wb = 0 | Hb(ub), Zb = 0 | Hb(hb), Xb = 0 | Hb(Bb), pb = Ob > 0 ? 1 : -1, ob = Gb > 0 ? 1 : -1, Ab = Ub > 0 ? 1 : -1, lb = Math.abs(1 / Ob), Kb = Math.abs(1 / Gb), Wb = Math.abs(1 / Ub), Cb = lb < 1 / 0 ? lb * (pb > 0 ? wb + 1 - ub : ub - wb) : 1 / 0, db = Kb < 1 / 0 ? Kb * (ob > 0 ? Zb + 1 - hb : hb - Zb) : 1 / 0, rb = Wb < 1 / 0 ? Wb * (Ab > 0 ? Xb + 1 - Bb : Bb - Xb) : 1 / 0, jb = -1; ab <= Lb;) {
          var nb = bb(wb, Zb, Xb);
          if (nb) return Yb && (Yb[0] = ub + ab * Ob, Yb[1] = hb + ab * Gb, Yb[2] = Bb + ab * Ub), Sb && (Sb[0] = Sb[1] = Sb[2] = 0, 0 === jb && (Sb[0] = -pb), 1 === jb && (Sb[1] = -ob), 2 === jb && (Sb[2] = -Ab)), nb;
          Cb < db ? Cb < rb ? (wb += pb, ab = Cb, Cb += lb, jb = 0) : (Xb += Ab, ab = rb, rb += Wb, jb = 2) : db < rb ? (Zb += ob, ab = db, db += Kb, jb = 1) : (Xb += Ab, ab = rb, rb += Wb, jb = 2)
        }
        return Yb && (Yb[0] = ub + ab * Ob, Yb[1] = hb + ab * Gb, Yb[2] = Bb + ab * Ub), Sb && (Sb[0] = Sb[1] = Sb[2] = 0), 0
      }(bb, Ub, Lb, Yb, Sb /= wb, ab /= wb, Hb /= wb, Bb = "undefined" === typeof Bb ? 64 : +Bb, Ob, Gb)
    }
  },
  38735: (bb, ub, hb) => {
    hb.d(ub, {
      e: () => Lb,
      f: () => Gb
    });
    var Bb = hb(3877);
    let Ob = null;

    function Gb(bb) {
      return null !== Ob && bb === Ob
    }

    function Ub() {
      this.vy = !1, this.stopPropagation = !1, this.Iy = !1, this.disabled = !1
    }
    class Lb {
      constructor(bb, ub) {
        this.version = "0.7.0";
        var hb = Object.assign({}, new Ub, ub || {});
        this.element = bb || document, this.vy = !!hb.vy, this.stopPropagation = !!hb.stopPropagation, this.Iy = !!hb.Iy, this.disabled = !!hb.disabled, this.filterEvents = (bb, ub) => !0, this.ignoreEvent = bb => !1, this.down = new Bb.EventEmitter, this.up = new Bb.EventEmitter, this.state = {}, this.Fy = {
          dx: 0,
          dy: 0,
          Uub: 0,
          Lub: 0,
          Yub: 0
        }, this.pressCount = {}, this.releaseCount = {}, this._keyBindmap = {}, this._keyStates = {}, this._bindPressCount = {}, this._touches = {
          lastX: 0,
          lastY: 0,
          currID: null
        }, "loading" !== document.readyState ? Sb(this) : document.addEventListener("DOMContentLoaded", (bb => {
          Sb(this)
        }), {
          once: !0
        })
      }
      bind(bb) {
        for (var ub = arguments.length, hb = new Array(ub > 1 ? ub - 1 : 0), Bb = 1; Bb < ub; Bb++) hb[Bb - 1] = arguments[Bb];
        hb.forEach((ub => {
          var hb = this._keyBindmap[ub] || [];
          hb.includes(bb) || (hb.push(bb), this._keyBindmap[ub] = hb)
        })), this.state[bb] = !!this.state[bb], this.pressCount[bb] = this.pressCount[bb] || 0, this.releaseCount[bb] = this.releaseCount[bb] || 0
      }
      unbind(bb) {
        for (var ub in this._keyBindmap) {
          var hb = this._keyBindmap[ub],
            Bb = hb.indexOf(bb);
          Bb > -1 && hb.splice(Bb, 1)
        }
      }
      getBindings() {
        var bb = {};
        for (var ub in this._keyBindmap) {
          this._keyBindmap[ub].forEach((hb => {
            bb[hb] = bb[hb] || [], bb[hb].push(ub)
          }))
        }
        return bb
      }
      gH() {
        Yb(this.Fy), Yb(this.pressCount), Yb(this.releaseCount)
      }
    }

    function Yb(bb) {
      for (var ub in bb) bb[ub] = 0
    }

    function Sb(bb) {
      window.addEventListener("keydown", ob.bind(null, bb, !0), !1), window.addEventListener("keyup", ob.bind(null, bb, !1), !1);
      var ub = {
        passive: !0
      };
      bb.element.addEventListener("touchstart", Zb.bind(void 0, bb), {
        passive: !1
      }), bb.element.addEventListener("touchend", pb.bind(void 0, bb), ub), bb.element.addEventListener("mousedown", Ab.bind(null, bb, !0), ub), window.document.addEventListener("mouseup", Ab.bind(null, bb, !1), ub), bb.element.addEventListener("touchmove", lb.bind(null, bb), ub), bb.element.addEventListener("mousemove", lb.bind(null, bb), ub), window.PointerEvent, bb.element.addEventListener("wheel", Kb.bind(null, bb), ub), bb.element.addEventListener("contextmenu", Wb.bind(null, bb), !1), window.addEventListener("blur", rb.bind(null, bb), !1)
    }
    var ab = 0,
      Hb = 0,
      wb = null;

    function Zb(bb, ub) {
      ub.preventDefault(), Xb(ub)
    }

    function Xb(bb) {
      let ub = !1;
      for (let hb = 0; hb < bb.touches.length; ++hb)
        if (bb.touches[hb].identifier === wb) {
          ub = !0;
          break
        } if (!ub) {
        const ub = bb.changedTouches[0];
        ab = ub.clientX, Hb = ub.clientY, wb = ub.identifier
      }
    }

    function pb(bb, ub) {
      for (var hb = ub.changedTouches, Bb = 0; Bb < hb.length; ++Bb) hb[Bb].identifier === wb && (wb = null)
    }

    function ob(bb, ub, hb) {
      if (!bb.ignoreEvent(hb)) try {
        jb(bb, hb), ub && hb.isTrusted && !hb.repeat && bb._keyStates[hb.code] && nb(bb, hb.code)
      } finally {
        Db(hb.code, ub, bb, hb)
      }
    }

    function Ab(bb, ub, hb) {
      if (!bb.ignoreEvent(hb)) try {
        jb(bb, hb)
      } finally {
        ! function(bb, ub, hb) {
          if ("pointerId" in hb)
            if (ub) {
              if (null !== bb._touches.currID) return;
              bb._touches.currID = hb.pointerId
            } else {
              if (bb._touches.currID !== hb.pointerId) return;
              bb._touches.currID = null
            } var Bb = "button" in hb ? hb.button + 1 : 1;
          Db("Mouse" + Bb, ub, bb, hb)
        }(bb, ub, hb)
      }
    }

    function lb(bb, ub) {
      var hb = ub.movementX || ub.mozMovementX || 0,
        Bb = ub.movementY || ub.mozMovementY || 0;
      if (ub.touches && 0 === (hb | Bb)) {
        var Ob = function(bb) {
          Xb(bb);
          for (let ub = 0; ub < bb.changedTouches.length; ++ub)
            if (bb.changedTouches[ub].identifier == wb) {
              const hb = bb.changedTouches[ub],
                Bb = [hb.clientX - ab, hb.clientY - Hb];
              return ab = hb.clientX, Hb = hb.clientY, Bb
            } return console.error(`Did not find touch id ${wb}`), [0, 0]
        }(ub);
        hb = Ob[0], Bb = Ob[1]
      }
      bb.Fy.dx += hb, bb.Fy.dy += Bb
    }

    function Kb(bb, ub) {
      jb(bb, ub);
      var hb = 1;
      switch (ub.deltaMode) {
        case 0:
          hb = 1;
          break;
        case 1:
          hb = 12;
          break;
        case 2:
          hb = bb.element.clientHeight || window.innerHeight
      }
      bb.Fy.Uub += (ub.deltaX || 0) * hb, bb.Fy.Lub += (ub.deltaY || 0) * hb, bb.Fy.Yub += (ub.deltaZ || 0) * hb
    }

    function Wb(bb, ub) {
      if (!bb.Iy) return ub.preventDefault(), !1
    }
    var Cb = {
      AltLeft: "altKey",
      AltRight: "altKey",
      ControlLeft: "ctrlKey",
      ControlRight: "ctrlKey",
      ShiftLeft: "shiftKey",
      ShiftRight: "shiftKey",
      MetaLeft: "metaKey",
      MetaRight: "metaKey"
    };

    function db(bb, ub) {
      return !!bb[Cb[ub]] || ("AltRight" === ub || "ControlLeft" === ub) && "function" === typeof bb.getModifierState && !0 === bb.getModifierState("AltGraph")
    }

    function rb(bb, ub) {
      for (var hb in bb._modifiersHeldThroughBlur = {}, Cb) bb._keyStates[hb] && (bb._modifiersHeldThroughBlur[hb] = !0);
      ub && ub.isTrusted && function() {
        try {
          return window.self !== window.top
        } catch (bb) {
          return !0
        }
      }() && (clearTimeout(bb._blurRelease), bb._blurRelease = setTimeout((function() {
        if (!document.hasFocus())
          for (var ub in bb._modifiersHeldThroughBlur = {}, bb._keyStates) bb._keyStates[ub] && !/^Mouse\d/.test(ub) && nb(bb, ub)
      }), 0))
    }

    function jb(bb, ub) {
      var hb = bb._modifiersHeldThroughBlur;
      if (hb && ub.isTrusted && document.hasFocus())
        for (var Bb in hb) delete hb[Bb], bb._keyStates[Bb] && Bb !== ub.code && (db(ub, Bb) || nb(bb, Bb))
    }

    function nb(bb, ub) {
      const hb = {
          code: ub,
          preventDefault: () => {},
          stopPropagation: () => {}
        },
        Bb = Ob;
      Ob = hb;
      try {
        Db(ub, !1, bb, hb)
      } finally {
        Ob = Bb
      }
    }

    function Db(bb, ub, hb, Bb) {
      var Ob = hb._keyBindmap[bb];
      Ob && (xb(hb._keyStates[bb], ub) && (hb._keyStates[bb] = ub, Ob.forEach((bb => {
        (!hb.filterEvents || hb.filterEvents(Bb, bb)) && function(bb, ub, hb, Bb) {
          var Ob = ub ? hb.pressCount : hb.releaseCount;
          Ob[bb] = (Ob[bb] || 0) + 1;
          var Gb = hb._bindPressCount[bb] || 0;
          (Gb += ub ? 1 : -1) < 0 && (Gb = 0);
          hb._bindPressCount[bb] = Gb;
          var Ub = hb.state[bb];
          if (xb(Ub, Gb)) {
            hb.state[bb] = Gb > 0;
            var Lb = ub ? hb.down : hb.up;
            hb.disabled || Lb.emit(bb, Bb)
          }
        }(bb, ub, hb, Bb)
      }))), "button" in Bb || (hb.vy && !Bb.defaultPrevented && Bb.preventDefault(), hb.stopPropagation && Bb.stopPropagation()))
    }

    function xb(bb, ub) {
      return bb ? !ub : ub
    }
  },
  36155: (bb, ub) => {
    function hb(bb) {
      if (bb && "object" === typeof bb) {
        var ub = bb.which || bb.keyCode || bb.charCode;
        ub && (bb = ub)
      }
      if ("number" === typeof bb) return Ub[bb];
      var hb, Gb = String(bb);
      return (hb = Bb[Gb.toLowerCase()]) ? hb : (hb = Ob[Gb.toLowerCase()]) || (1 === Gb.length ? Gb.charCodeAt(0) : void 0)
    }
    hb.isEventKey = function(bb, ub) {
      if (bb && "object" === typeof bb) {
        var hb = bb.which || bb.keyCode || bb.charCode;
        if (null === hb || void 0 === hb) return !1;
        if ("string" === typeof ub) {
          var Gb;
          if (Gb = Bb[ub.toLowerCase()]) return Gb === hb;
          if (Gb = Ob[ub.toLowerCase()]) return Gb === hb
        } else if ("number" === typeof ub) return ub === hb;
        return !1
      }
    };
    var Bb = (ub = bb.exports = hb).code = ub.codes = {
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
      Ob = ub.aliases = {
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
    for (Gb = 97; Gb < 123; Gb++) Bb[String.fromCharCode(Gb)] = Gb - 32;
    for (var Gb = 48; Gb < 58; Gb++) Bb[Gb - 48] = Gb;
    for (Gb = 1; Gb < 13; Gb++) Bb["f" + Gb] = Gb + 111;
    for (Gb = 0; Gb < 10; Gb++) Bb["numpad " + Gb] = Gb + 96;
    var Ub = ub.names = ub.title = {};
    for (Gb in Bb) Ub[Bb[Gb]] = Gb;
    for (var Lb in Ob) Bb[Lb] = Ob[Lb]
  },
  39160: (bb, ub, hb) => {
    hb.d(ub, {
      b: () => Bb
    });
    class Bb {
      constructor() {
        let bb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
          ub = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 10;
        this.Qm = !1, this.Rm = !1, this.hN = 30, this.Jm = 0, this.bI = 100, this.Wo = !1, this.fullscreen = !1, this.jK = function(bb) {}, this.HI = function(bb, ub, hb) {}, this.xI = function() {}, this.lK = function() {}, this.ZI = function() {}, this.onFullscreenChanged = function() {}, this.onPointerLockError = function(bb) {}, this._data = new Ob(ub),
          function(bb) {
            if ("loading" === document.readyState) {
              var ub = () => {
                document.removeEventListener("readystatechange", ub), bb()
              };
              document.addEventListener("readystatechange", ub)
            } else setTimeout(bb, 0)
          }((() => {
            ! function(bb) {
              var ub = bb._data,
                hb = ub.nowObject.now();
              ub.lastTickStarted = hb, ub.lastFrameStarted = hb, ub.lastRenderStarted = hb, ub.frameCB = () => function(bb) {
                var ub = bb._data;
                requestAnimationFrame(ub.frameCB), Lb(bb);
                var hb = ub.nowObject.now(),
                  Bb = hb - ub.lastFrameStarted;
                if (ub.lastFrameStarted = hb, bb.Jm > 0) {
                  ub.renderAccum += Bb;
                  var Ob = 1e3 / bb.Jm;
                  if (ub.renderAccum < Ob) return;
                  ub.renderAccum -= Ob, ub.renderAccum > Ob && (ub.renderAccum = Ob)
                }
                var Gb = hb - ub.lastRenderStarted;
                ub.lastRenderStarted = hb;
                var Ub = 1e3 / bb.hN,
                  Yb = (hb - ub.lastTickStarted) / Ub;
                Yb < 0 && (Yb = 0);
                bb.HI(Gb, Yb, Ub), setTimeout(Lb, 0, bb, !0)
              }(bb), ub.intervalCB = () => Lb(bb), requestAnimationFrame(ub.frameCB), ub.pollTime > 0 && (ub.intervalID = setInterval(ub.intervalCB, Math.max(ub.pollTime, 1e3 / bb.hN / 2)))
            }(this),
            function(bb, ub) {
              if (!ub) return;
              var hb = !1,
                Bb = !1,
                Ob = bb => {
                  if (!!bb !== (hb = ub === document.pointerLockElement))
                    if (bb) {
                      var Bb = ub.requestPointerLock();
                      Bb && Bb.catch && Bb.catch((bb => {}))
                    } else document.exitPointerLock()
                },
                Gb = bb => {
                  !!bb !== (Bb = ub === document.fullscreenElement) && (bb ? ub.requestFullscreen ? ub.requestFullscreen() : ub.webkitRequestFullscreen && ub.webkitRequestFullscreen() : document.exitFullscreen ? document.exitFullscreen() : document.webkitExitFullscreen && document.webkitExitFullscreen())
                };
              document.addEventListener("pointerlockchange", (Bb => {
                hb = ub === document.pointerLockElement, bb.ZI(hb)
              })), document.addEventListener("fullscreenchange", (hb => {
                Bb = ub === document.fullscreenElement, bb.onFullscreenChanged(Bb)
              })), document.addEventListener("pointerlockerror", (Bb => {
                hb = ub === document.pointerLockElement, bb.onPointerLockError(Bb)
              })), Object.defineProperty(bb, "Wo", {
                get: () => hb,
                set: Ob
              }), Object.defineProperty(bb, "fullscreen", {
                get: () => Bb,
                set: Gb
              }), ub.addEventListener("click", (ub => {
                bb.Qm && Ob(!0), bb.Rm && Gb(!0)
              }));
              var Ub = () => bb.lK();
              if (window.ResizeObserver) {
                new ResizeObserver(Ub).observe(ub)
              } else window.addEventListener("resize", Ub)
            }(this, bb), this.xI()
          }))
      }
    }

    function Ob() {
      let bb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 10;
      this.nowObject = performance || Date, this.pollTime = bb, this.renderAccum = 0, this.lastTickStarted = 0, this.lastFrameStarted = 0, this.lastRenderStarted = 0, this.avgTickTime = 2, this.frameCB = null, this.intervalCB = null, this.intervalID = -1
    }
    var Gb = 3,
      Ub = 20;

    function Lb(bb) {
      for (var ub = bb._data, hb = 1e3 / bb.hN, Bb = ub.nowObject.now() + Ub, Ob = 0; ub.nowObject.now() >= ub.lastTickStarted + hb && ub.nowObject.now() < Bb && ++Ob <= Gb;) bb.jK(hb), ub.lastTickStarted += hb;
      var Lb = 5 * (hb + 5),
        Yb = ub.nowObject.now();
      if (Yb - ub.lastTickStarted > Lb)
        for (; Yb >= ub.lastTickStarted + hb;) ub.lastTickStarted += hb
    }
  },
  36322: (bb, ub, hb) => {
    hb.d(ub, {
      c: () => Ub
    });
    var Bb = hb(49);
    const Ob = Bb.useLayoutEffect;
    const Gb = function(bb) {
      var ub = (0, Bb.useRef)(bb);
      return Ob((function() {
        ub.current = bb
      })), ub
    };
    var Ub = function(bb) {
      var ub = Gb(bb);
      (0, Bb.useEffect)((function() {
        var bb = function(bb) {
          var hb;
          if (null != ub.current && (hb = ub.current(bb)), bb.defaultPrevented && (bb.returnValue = ""), "string" === typeof hb) return bb.returnValue = hb, hb
        };
        return window.addEventListener("beforeunload", bb),
          function() {
            window.removeEventListener("beforeunload", bb)
          }
      }), [])
    }
  },
  36198: bb => {
    var ub, hb = "undefined" !== typeof window ? window.navigator.userAgent : "",
      Bb = /OS X/.test(hb),
      Ob = /Opera/.test(hb),
      Gb = !/like Gecko/.test(hb) && !Ob,
      Ub = bb.exports = {
        0: Bb ? "<menu>" : "<UNK>",
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
        93: Bb ? "<meta>" : "<menu>",
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
        173: Bb && Gb ? "-" : "<volume-mute>",
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
        231: Ob ? "`" : "<unicode>",
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
    for (ub = 58; ub < 65; ++ub) Ub[ub] = String.fromCharCode(ub);
    for (ub = 48; ub < 58; ++ub) Ub[ub] = ub - 48 + "";
    for (ub = 65; ub < 91; ++ub) Ub[ub] = String.fromCharCode(ub);
    for (ub = 96; ub < 106; ++ub) Ub[ub] = "<num-" + (ub - 96) + ">";
    for (ub = 112; ub < 136; ++ub) Ub[ub] = "F" + (ub - 111)
  },
  38657: (bb, ub, hb) => {
    function Bb(bb, ub, hb, Bb, Ob) {
      var Gb = {};
      return Object.keys(Bb).forEach((function(bb) {
        Gb[bb] = Bb[bb]
      })), Gb.enumerable = !!Gb.enumerable, Gb.configurable = !!Gb.configurable, ("value" in Gb || Gb.initializer) && (Gb.writable = !0), Gb = hb.slice().reverse().reduce((function(hb, Bb) {
        return Bb(bb, ub, hb) || hb
      }), Gb), Ob && void 0 !== Gb.initializer && (Gb.value = Gb.initializer ? Gb.initializer.call(Ob) : void 0, Gb.initializer = void 0), void 0 === Gb.initializer && (Object.defineProperty(bb, ub, Gb), Gb = null), Gb
    }
    hb.d(ub, {
      b: () => Bb
    })
  },
  38654: (bb, ub, hb) => {
    function Bb(bb, ub, hb, Bb) {
      hb && Object.defineProperty(bb, ub, {
        enumerable: hb.enumerable,
        configurable: hb.configurable,
        writable: hb.writable,
        value: hb.initializer ? hb.initializer.call(Bb) : void 0
      })
    }
    hb.d(ub, {
      c: () => Bb
    })
  },
  38296: (bb, ub, hb) => {
    hb.d(ub, {
      b: () => Gb
    });
    var Bb = hb(38302);
    const Ob = (bb, ub, hb) => bb ? bb.getClassName && "Mesh" === bb.getClassName() ? null : !bb.getClassName || "SubMesh" !== bb.getClassName() && "PhysicsBody" !== bb.getClassName() ? bb.clone ? bb.clone() : Array.isArray(bb) ? bb.slice() : hb && "object" === typeof bb ? {
      ...bb
    } : null : bb.clone(ub) : null;
    class Gb {
      static DeepCopy(bb, ub, hb, Gb) {
        let Ub = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
        const Lb = function(bb) {
          const ub = [];
          do {
            const hb = Object.getOwnPropertyNames(bb);
            for (const bb of hb) - 1 === ub.indexOf(bb) && ub.push(bb)
          } while (bb = Object.getPrototypeOf(bb));
          return ub
        }(bb);
        for (const Sb of Lb) {
          if ("_" === Sb[0] && (!Gb || -1 === Gb.indexOf(Sb))) continue;
          if (Sb.endsWith("Observable")) continue;
          if (hb && -1 !== hb.indexOf(Sb)) continue;
          const Lb = bb[Sb],
            ab = typeof Lb;
          if ("function" !== ab) try {
            if ("object" === ab)
              if (Lb instanceof Uint8Array) ub[Sb] = Uint8Array.from(Lb);
              else if (Lb instanceof Array) {
              if (ub[Sb] = [], Lb.length > 0)
                if ("object" == typeof Lb[0])
                  for (let bb = 0; bb < Lb.length; bb++) {
                    const hb = Ob(Lb[bb], ub, Ub); - 1 === ub[Sb].indexOf(hb) && ub[Sb].push(hb)
                  } else ub[Sb] = Lb.slice(0)
            } else ub[Sb] = Ob(Lb, ub, Ub);
            else ub[Sb] = Lb
          } catch (Yb) {
            Bb.b.Warn(Yb.message)
          }
        }
      }
    }
  },
  38329: (bb, ub, hb) => {
    hb.d(ub, {
      b: () => Ob,
      d: () => Gb,
      h: () => Ub,
      k: () => Lb
    });
    var Bb = hb(36893);
    class Ob {
      constructor(bb, ub, hb) {
        this.gradient = bb, this.color1 = ub, this.color2 = hb
      }
      getColorToRef(bb) {
        this.color2 ? Bb.c.LerpToRef(this.color1, this.color2, Math.random(), bb) : bb.mD(this.color1)
      }
    }
    class Gb {
      constructor(bb, ub) {
        this.gradient = bb, this.color = ub
      }
    }
    class Ub {
      constructor(bb, ub, hb) {
        this.gradient = bb, this.factor1 = ub, this.factor2 = hb
      }
      getFactor() {
        return void 0 === this.factor2 || this.factor2 === this.factor1 ? this.factor1 : this.factor1 + (this.factor2 - this.factor1) * Math.random()
      }
    }
    class Lb {
      static GetCurrentGradient(bb, ub, hb) {
        if (ub[0].gradient > bb) return void hb(ub[0], ub[0], 1);
        for (let Ob = 0; Ob < ub.length - 1; Ob++) {
          const Bb = ub[Ob],
            Gb = ub[Ob + 1];
          if (bb >= Bb.gradient && bb <= Gb.gradient) {
            return void hb(Bb, Gb, (bb - Bb.gradient) / (Gb.gradient - Bb.gradient))
          }
        }
        const Bb = ub.length - 1;
        hb(ub[Bb], ub[Bb], 1)
      }
    }
  },
  38302: (bb, ub, hb) => {
    hb.d(ub, {
      b: () => Bb
    });
    class Bb {
      static _CheckLimit(bb, ub) {
        let hb = Bb._LogLimitOutputs[bb];
        return hb ? hb.current++ : (hb = {
          limit: ub,
          current: 1
        }, Bb._LogLimitOutputs[bb] = hb), hb.current <= hb.limit
      }
      static _GenerateLimitMessage(bb) {
        let ub = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
        const hb = Bb._LogLimitOutputs[bb];
        if (!hb || !Bb.MessageLimitReached) return;
        const Ob = this._Levels[ub];
        hb.current === hb.limit && Bb[Ob.name](Bb.MessageLimitReached.replace(/%LIMIT%/g, "" + hb.limit).replace(/%TYPE%/g, Ob.name ?? ""))
      }
      static _AddLogEntry(bb) {
        Bb._LogCache = bb + Bb._LogCache, Bb.OnNewCacheEntry && Bb.OnNewCacheEntry(bb)
      }
      static _FormatMessage(bb) {
        const ub = bb => bb < 10 ? "0" + bb : "" + bb,
          hb = new Date;
        return "[" + ub(hb.getHours()) + ":" + ub(hb.getMinutes()) + ":" + ub(hb.getSeconds()) + "]: " + bb
      }
      static _LogDisabled(bb, ub) {}
      static _LogEnabled() {
        let bb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
          ub = arguments.length > 1 ? arguments[1] : void 0,
          hb = arguments.length > 2 ? arguments[2] : void 0;
        const Ob = Array.isArray(ub) ? ub[0] : ub;
        if (void 0 !== hb && !Bb._CheckLimit(Ob, hb)) return;
        const Gb = Bb._FormatMessage(Ob),
          Ub = this._Levels[bb],
          Lb = Array.isArray(ub) ? ub.slice(1) : [];
        Ub.logFunc && Ub.logFunc("BJS - " + Gb, ...Lb);
        const Yb = `<div style='color:${Ub.color}'>${Gb}</div><br>`;
        Bb._AddLogEntry(Yb), Bb._GenerateLimitMessage(Ob, bb)
      }
      static get LogCache() {
        return Bb._LogCache
      }
      static ClearLogCache() {
        Bb._LogCache = "", Bb._LogLimitOutputs = {}, Bb.errorsCount = 0
      }
      static set LogLevels(bb) {
        Bb.Log = Bb._LogDisabled, Bb.Warn = Bb._LogDisabled, Bb.Error = Bb._LogDisabled;
        const ub = [Bb.MessageLogLevel, Bb.WarningLogLevel, Bb.ErrorLogLevel];
        for (const hb of ub)
          if ((bb & hb) === hb) {
            const bb = this._Levels[hb];
            Bb[bb.name] = Bb._LogEnabled.bind(Bb, hb)
          }
      }
    }
    Bb.NoneLogLevel = 0, Bb.MessageLogLevel = 1, Bb.WarningLogLevel = 2, Bb.ErrorLogLevel = 4, Bb.AllLogLevel = 7, Bb.MessageLimitReached = "Too many %TYPE%s (%LIMIT%), no more %TYPE%s will be reported for this message.", Bb._LogCache = "", Bb._LogLimitOutputs = {}, Bb._Levels = [{}, {
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
    }], Bb.errorsCount = 0, Bb.Log = Bb._LogEnabled.bind(Bb, Bb.MessageLogLevel), Bb.Warn = Bb._LogEnabled.bind(Bb, Bb.WarningLogLevel), Bb.Error = Bb._LogEnabled.bind(Bb, Bb.ErrorLogLevel)
  },
  38334: (bb, ub, hb) => {
    hb.d(ub, {
      b: () => Ub
    });
    var Bb = hb(36727),
      Ob = hb(36757),
      Gb = hb(38296);
    class Ub {
      constructor() {
        this.direction1 = new Bb.q(0, 1, 0), this.direction2 = new Bb.q(0, 1, 0), this.minEmitBox = new Bb.q(-.5, -.5, -.5), this.maxEmitBox = new Bb.q(.5, .5, .5)
      }
      startDirectionFunction(bb, ub, hb, Gb) {
        const Ub = (0, Ob.RandomRange)(this.direction1.x, this.direction2.x),
          Lb = (0, Ob.RandomRange)(this.direction1.y, this.direction2.y),
          Yb = (0, Ob.RandomRange)(this.direction1.z, this.direction2.z);
        if (Gb) return ub.x = Ub, ub.y = Lb, void(ub.z = Yb);
        Bb.q.TransformNormalFromFloatsToRef(Ub, Lb, Yb, bb, ub)
      }
      startPositionFunction(bb, ub, hb, Gb) {
        const Ub = (0, Ob.RandomRange)(this.minEmitBox.x, this.maxEmitBox.x),
          Lb = (0, Ob.RandomRange)(this.minEmitBox.y, this.maxEmitBox.y),
          Yb = (0, Ob.RandomRange)(this.minEmitBox.z, this.maxEmitBox.z);
        if (Gb) return ub.x = Ub, ub.y = Lb, void(ub.z = Yb);
        Bb.q.TransformCoordinatesFromFloatsToRef(Ub, Lb, Yb, bb, ub)
      }
      clone() {
        const bb = new Ub;
        return Gb.b.DeepCopy(this, bb), bb
      }
      applyToShader(bb) {
        bb.setVector3("direction1", this.direction1), bb.setVector3("direction2", this.direction2), bb.setVector3("minEmitBox", this.minEmitBox), bb.setVector3("maxEmitBox", this.maxEmitBox)
      }
      buildUniformLayout(bb) {
        bb.addUniform("direction1", 3), bb.addUniform("direction2", 3), bb.addUniform("minEmitBox", 3), bb.addUniform("maxEmitBox", 3)
      }
      getEffectDefines() {
        return "#define BOXEMITTER"
      }
      getClassName() {
        return "BoxParticleEmitter"
      }
      serialize() {
        const bb = {};
        return bb.type = this.getClassName(), bb.direction1 = this.direction1.ZBb(), bb.direction2 = this.direction2.ZBb(), bb.minEmitBox = this.minEmitBox.ZBb(), bb.maxEmitBox = this.maxEmitBox.ZBb(), bb
      }
      parse(bb) {
        Bb.q.FromArrayToRef(bb.direction1, 0, this.direction1), Bb.q.FromArrayToRef(bb.direction2, 0, this.direction2), Bb.q.FromArrayToRef(bb.minEmitBox, 0, this.minEmitBox), Bb.q.FromArrayToRef(bb.maxEmitBox, 0, this.maxEmitBox)
      }
    }
  },
  38292: (bb, ub, hb) => {
    hb.d(ub, {
      d: () => Lb,
      f: () => Ub
    });
    var Bb = hb(36727),
      Ob = hb(36757),
      Gb = hb(38296);
    class Ub {
      constructor() {
        let bb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
          ub = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
          hb = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1,
          Ob = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
        this.radius = bb, this.height = ub, this.radiusRange = hb, this.directionRandomizer = Ob, this._tempVector = Bb.q.Zero()
      }
      startDirectionFunction(bb, ub, hb, Gb, Ub) {
        hb.position.subtractToRef(bb.getTranslation(), this._tempVector), this._tempVector.normalize(), Bb.q.TransformNormalToRef(this._tempVector, Ub, this._tempVector);
        const Lb = (0, Ob.RandomRange)(-this.directionRandomizer / 2, this.directionRandomizer / 2);
        let Yb = Math.atan2(this._tempVector.x, this._tempVector.z);
        Yb += (0, Ob.RandomRange)(-Math.PI / 2, Math.PI / 2) * this.directionRandomizer, this._tempVector.y = Lb, this._tempVector.x = Math.sin(Yb), this._tempVector.z = Math.cos(Yb), this._tempVector.normalize(), Gb ? ub.mD(this._tempVector) : Bb.q.TransformNormalFromFloatsToRef(this._tempVector.x, this._tempVector.y, this._tempVector.z, bb, ub)
      }
      startPositionFunction(bb, ub, hb, Gb) {
        const Ub = (0, Ob.RandomRange)(-this.height / 2, this.height / 2),
          Lb = (0, Ob.RandomRange)(0, 2 * Math.PI),
          Yb = (0, Ob.RandomRange)((1 - this.radiusRange) * (1 - this.radiusRange), 1),
          Sb = Math.sqrt(Yb) * this.radius,
          ab = Sb * Math.cos(Lb),
          Hb = Sb * Math.sin(Lb);
        Gb ? ub.M_(ab, Ub, Hb) : Bb.q.TransformCoordinatesFromFloatsToRef(ab, Ub, Hb, bb, ub)
      }
      clone() {
        const bb = new Ub(this.radius, this.directionRandomizer);
        return Gb.b.DeepCopy(this, bb), bb
      }
      applyToShader(bb) {
        bb.setFloat("radius", this.radius), bb.setFloat("height", this.height), bb.setFloat("radiusRange", this.radiusRange), bb.setFloat("directionRandomizer", this.directionRandomizer)
      }
      buildUniformLayout(bb) {
        bb.addUniform("radius", 1), bb.addUniform("height", 1), bb.addUniform("radiusRange", 1), bb.addUniform("directionRandomizer", 1)
      }
      getEffectDefines() {
        return "#define CYLINDEREMITTER"
      }
      getClassName() {
        return "CylinderParticleEmitter"
      }
      serialize() {
        const bb = {};
        return bb.type = this.getClassName(), bb.radius = this.radius, bb.height = this.height, bb.radiusRange = this.radiusRange, bb.directionRandomizer = this.directionRandomizer, bb
      }
      parse(bb) {
        this.radius = bb.radius, this.height = bb.height, this.radiusRange = bb.radiusRange, this.directionRandomizer = bb.directionRandomizer
      }
    }
    class Lb extends Ub {
      constructor() {
        let bb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
          ub = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
          hb = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1,
          Ob = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : new Bb.q(0, 1, 0),
          Gb = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : new Bb.q(0, 1, 0);
        super(bb, ub, hb), this.direction1 = Ob, this.direction2 = Gb
      }
      startDirectionFunction(bb, ub, hb, Gb) {
        const Ub = (0, Ob.RandomRange)(this.direction1.x, this.direction2.x),
          Lb = (0, Ob.RandomRange)(this.direction1.y, this.direction2.y),
          Yb = (0, Ob.RandomRange)(this.direction1.z, this.direction2.z);
        Gb ? ub.M_(Ub, Lb, Yb) : Bb.q.TransformNormalFromFloatsToRef(Ub, Lb, Yb, bb, ub)
      }
      clone() {
        const bb = new Lb(this.radius, this.height, this.radiusRange, this.direction1, this.direction2);
        return Gb.b.DeepCopy(this, bb), bb
      }
      applyToShader(bb) {
        bb.setFloat("radius", this.radius), bb.setFloat("height", this.height), bb.setFloat("radiusRange", this.radiusRange), bb.setVector3("direction1", this.direction1), bb.setVector3("direction2", this.direction2)
      }
      buildUniformLayout(bb) {
        bb.addUniform("radius", 1), bb.addUniform("height", 1), bb.addUniform("radiusRange", 1), bb.addUniform("direction1", 3), bb.addUniform("direction2", 3)
      }
      getEffectDefines() {
        return "#define CYLINDEREMITTER\n#define DIRECTEDCYLINDEREMITTER"
      }
      getClassName() {
        return "CylinderDirectedParticleEmitter"
      }
      serialize() {
        const bb = super.serialize();
        return bb.direction1 = this.direction1.ZBb(), bb.direction2 = this.direction2.ZBb(), bb
      }
      parse(bb) {
        super.parse(bb), Bb.q.FromArrayToRef(bb.direction1, 0, this.direction1), Bb.q.FromArrayToRef(bb.direction2, 0, this.direction2)
      }
    }
  },
  38406: (bb, ub, hb) => {
    hb.d(ub, {
      e: () => Hb
    });
    const Bb = .5 * (Math.sqrt(3) - 1),
      Ob = (3 - Math.sqrt(3)) / 6,
      Gb = 1 / 3,
      Ub = 1 / 6,
      Lb = (Math.sqrt(5) - 1) / 4,
      Yb = (5 - Math.sqrt(5)) / 20,
      Sb = new Float32Array([1, 1, 0, -1, 1, 0, 1, -1, 0, -1, -1, 0, 1, 0, 1, -1, 0, 1, 1, 0, -1, -1, 0, -1, 0, 1, 1, 0, -1, 1, 0, 1, -1, 0, -1, -1]),
      ab = new Float32Array([0, 1, 1, 1, 0, 1, 1, -1, 0, 1, -1, 1, 0, 1, -1, -1, 0, -1, 1, 1, 0, -1, 1, -1, 0, -1, -1, 1, 0, -1, -1, -1, 1, 0, 1, 1, 1, 0, 1, -1, 1, 0, -1, 1, 1, 0, -1, -1, -1, 0, 1, 1, -1, 0, 1, -1, -1, 0, -1, 1, -1, 0, -1, -1, 1, 1, 0, 1, 1, 1, 0, -1, 1, -1, 0, 1, 1, -1, 0, -1, -1, 1, 0, 1, -1, 1, 0, -1, -1, -1, 0, 1, -1, -1, 0, -1, 1, 1, 1, 0, 1, 1, -1, 0, 1, -1, 1, 0, 1, -1, -1, 0, -1, 1, 1, 0, -1, 1, -1, 0, -1, -1, 1, 0, -1, -1, -1, 0]);
    const Hb = class {
      constructor() {
        let bb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Math.random;
        const ub = "function" == typeof bb ? bb : function(bb) {
          let ub = 0,
            hb = 0,
            Bb = 0,
            Ob = 1;
          const Gb = function() {
            let bb = 4022871197;
            return function(ub) {
              ub = ub.toString();
              for (let hb = 0; hb < ub.length; hb++) {
                bb += ub.charCodeAt(hb);
                let Bb = .02519603282416938 * bb;
                bb = Bb >>> 0, Bb -= bb, Bb *= bb, bb = Bb >>> 0, Bb -= bb, bb += 4294967296 * Bb
              }
              return 2.3283064365386963e-10 * (bb >>> 0)
            }
          }();
          ub = Gb(" "), hb = Gb(" "), Bb = Gb(" "), ub -= Gb(bb), ub < 0 && (ub += 1);
          hb -= Gb(bb), hb < 0 && (hb += 1);
          Bb -= Gb(bb), Bb < 0 && (Bb += 1);
          return function() {
            const bb = 2091639 * ub + 2.3283064365386963e-10 * Ob;
            return ub = hb, hb = Bb, Bb = bb - (Ob = 0 | bb)
          }
        }(bb);
        this.p = function(bb) {
          const ub = new Uint8Array(256);
          for (let hb = 0; hb < 256; hb++) ub[hb] = hb;
          for (let hb = 0; hb < 255; hb++) {
            const Bb = hb + ~~(bb() * (256 - hb)),
              Ob = ub[hb];
            ub[hb] = ub[Bb], ub[Bb] = Ob
          }
          return ub
        }(ub), this.perm = new Uint8Array(512), this.permMod12 = new Uint8Array(512);
        for (let hb = 0; hb < 512; hb++) this.perm[hb] = this.p[255 & hb], this.permMod12[hb] = this.perm[hb] % 12
      }
      noise2D(bb, ub) {
        const hb = this.permMod12,
          Gb = this.perm;
        let Ub = 0,
          Lb = 0,
          Yb = 0;
        const ab = (bb + ub) * Bb,
          Hb = Math.floor(bb + ab),
          wb = Math.floor(ub + ab),
          Zb = (Hb + wb) * Ob,
          Xb = bb - (Hb - Zb),
          pb = ub - (wb - Zb);
        let ob, Ab;
        Xb > pb ? (ob = 1, Ab = 0) : (ob = 0, Ab = 1);
        const lb = Xb - ob + Ob,
          Kb = pb - Ab + Ob,
          Wb = Xb - 1 + 2 * Ob,
          Cb = pb - 1 + 2 * Ob,
          db = 255 & Hb,
          rb = 255 & wb;
        let jb = .5 - Xb * Xb - pb * pb;
        if (jb >= 0) {
          const bb = 3 * hb[db + Gb[rb]];
          jb *= jb, Ub = jb * jb * (Sb[bb] * Xb + Sb[bb + 1] * pb)
        }
        let nb = .5 - lb * lb - Kb * Kb;
        if (nb >= 0) {
          const bb = 3 * hb[db + ob + Gb[rb + Ab]];
          nb *= nb, Lb = nb * nb * (Sb[bb] * lb + Sb[bb + 1] * Kb)
        }
        let Db = .5 - Wb * Wb - Cb * Cb;
        if (Db >= 0) {
          const bb = 3 * hb[db + 1 + Gb[rb + 1]];
          Db *= Db, Yb = Db * Db * (Sb[bb] * Wb + Sb[bb + 1] * Cb)
        }
        return 70 * (Ub + Lb + Yb)
      }
      noise3D(bb, ub, hb) {
        const Bb = this.permMod12,
          Ob = this.perm;
        let Lb, Yb, ab, Hb;
        const wb = (bb + ub + hb) * Gb,
          Zb = Math.floor(bb + wb),
          Xb = Math.floor(ub + wb),
          pb = Math.floor(hb + wb),
          ob = (Zb + Xb + pb) * Ub,
          Ab = bb - (Zb - ob),
          lb = ub - (Xb - ob),
          Kb = hb - (pb - ob);
        let Wb, Cb, db, rb, jb, nb;
        Ab >= lb ? lb >= Kb ? (Wb = 1, Cb = 0, db = 0, rb = 1, jb = 1, nb = 0) : Ab >= Kb ? (Wb = 1, Cb = 0, db = 0, rb = 1, jb = 0, nb = 1) : (Wb = 0, Cb = 0, db = 1, rb = 1, jb = 0, nb = 1) : lb < Kb ? (Wb = 0, Cb = 0, db = 1, rb = 0, jb = 1, nb = 1) : Ab < Kb ? (Wb = 0, Cb = 1, db = 0, rb = 0, jb = 1, nb = 1) : (Wb = 0, Cb = 1, db = 0, rb = 1, jb = 1, nb = 0);
        const Db = Ab - Wb + Ub,
          xb = lb - Cb + Ub,
          zb = Kb - db + Ub,
          gb = Ab - rb + 2 * Ub,
          ib = lb - jb + 2 * Ub,
          vb = Kb - nb + 2 * Ub,
          tb = Ab - 1 + .5,
          Jb = lb - 1 + .5,
          eb = Kb - 1 + .5,
          Nb = 255 & Zb,
          sb = 255 & Xb,
          Mb = 255 & pb;
        let mb = .6 - Ab * Ab - lb * lb - Kb * Kb;
        if (mb < 0) Lb = 0;
        else {
          const bb = 3 * Bb[Nb + Ob[sb + Ob[Mb]]];
          mb *= mb, Lb = mb * mb * (Sb[bb] * Ab + Sb[bb + 1] * lb + Sb[bb + 2] * Kb)
        }
        let Ib = .6 - Db * Db - xb * xb - zb * zb;
        if (Ib < 0) Yb = 0;
        else {
          const bb = 3 * Bb[Nb + Wb + Ob[sb + Cb + Ob[Mb + db]]];
          Ib *= Ib, Yb = Ib * Ib * (Sb[bb] * Db + Sb[bb + 1] * xb + Sb[bb + 2] * zb)
        }
        let Pb = .6 - gb * gb - ib * ib - vb * vb;
        if (Pb < 0) ab = 0;
        else {
          const bb = 3 * Bb[Nb + rb + Ob[sb + jb + Ob[Mb + nb]]];
          Pb *= Pb, ab = Pb * Pb * (Sb[bb] * gb + Sb[bb + 1] * ib + Sb[bb + 2] * vb)
        }
        let qb = .6 - tb * tb - Jb * Jb - eb * eb;
        if (qb < 0) Hb = 0;
        else {
          const bb = 3 * Bb[Nb + 1 + Ob[sb + 1 + Ob[Mb + 1]]];
          qb *= qb, Hb = qb * qb * (Sb[bb] * tb + Sb[bb + 1] * Jb + Sb[bb + 2] * eb)
        }
        return 32 * (Lb + Yb + ab + Hb)
      }
      noise4D(bb, ub, hb, Bb) {
        const Ob = this.perm;
        let Gb, Ub, Sb, Hb, wb;
        const Zb = (bb + ub + hb + Bb) * Lb,
          Xb = Math.floor(bb + Zb),
          pb = Math.floor(ub + Zb),
          ob = Math.floor(hb + Zb),
          Ab = Math.floor(Bb + Zb),
          lb = (Xb + pb + ob + Ab) * Yb,
          Kb = bb - (Xb - lb),
          Wb = ub - (pb - lb),
          Cb = hb - (ob - lb),
          db = Bb - (Ab - lb);
        let rb = 0,
          jb = 0,
          nb = 0,
          Db = 0;
        Kb > Wb ? rb++ : jb++, Kb > Cb ? rb++ : nb++, Kb > db ? rb++ : Db++, Wb > Cb ? jb++ : nb++, Wb > db ? jb++ : Db++, Cb > db ? nb++ : Db++;
        const xb = rb >= 3 ? 1 : 0,
          zb = jb >= 3 ? 1 : 0,
          gb = nb >= 3 ? 1 : 0,
          ib = Db >= 3 ? 1 : 0,
          vb = rb >= 2 ? 1 : 0,
          tb = jb >= 2 ? 1 : 0,
          Jb = nb >= 2 ? 1 : 0,
          eb = Db >= 2 ? 1 : 0,
          Nb = rb >= 1 ? 1 : 0,
          sb = jb >= 1 ? 1 : 0,
          Mb = nb >= 1 ? 1 : 0,
          mb = Db >= 1 ? 1 : 0,
          Ib = Kb - xb + Yb,
          Pb = Wb - zb + Yb,
          qb = Cb - gb + Yb,
          Eb = db - ib + Yb,
          yb = Kb - vb + 2 * Yb,
          Vb = Wb - tb + 2 * Yb,
          Fb = Cb - Jb + 2 * Yb,
          fb = db - eb + 2 * Yb,
          kb = Kb - Nb + 3 * Yb,
          Tb = Wb - sb + 3 * Yb,
          cb = Cb - Mb + 3 * Yb,
          Qb = db - mb + 3 * Yb,
          Rb = Kb - 1 + 4 * Yb,
          bu = Wb - 1 + 4 * Yb,
          uu = Cb - 1 + 4 * Yb,
          hu = db - 1 + 4 * Yb,
          Bu = 255 & Xb,
          Ou = 255 & pb,
          Gu = 255 & ob,
          Uu = 255 & Ab;
        let Lu = .6 - Kb * Kb - Wb * Wb - Cb * Cb - db * db;
        if (Lu < 0) Gb = 0;
        else {
          const bb = Ob[Bu + Ob[Ou + Ob[Gu + Ob[Uu]]]] % 32 * 4;
          Lu *= Lu, Gb = Lu * Lu * (ab[bb] * Kb + ab[bb + 1] * Wb + ab[bb + 2] * Cb + ab[bb + 3] * db)
        }
        let Yu = .6 - Ib * Ib - Pb * Pb - qb * qb - Eb * Eb;
        if (Yu < 0) Ub = 0;
        else {
          const bb = Ob[Bu + xb + Ob[Ou + zb + Ob[Gu + gb + Ob[Uu + ib]]]] % 32 * 4;
          Yu *= Yu, Ub = Yu * Yu * (ab[bb] * Ib + ab[bb + 1] * Pb + ab[bb + 2] * qb + ab[bb + 3] * Eb)
        }
        let Su = .6 - yb * yb - Vb * Vb - Fb * Fb - fb * fb;
        if (Su < 0) Sb = 0;
        else {
          const bb = Ob[Bu + vb + Ob[Ou + tb + Ob[Gu + Jb + Ob[Uu + eb]]]] % 32 * 4;
          Su *= Su, Sb = Su * Su * (ab[bb] * yb + ab[bb + 1] * Vb + ab[bb + 2] * Fb + ab[bb + 3] * fb)
        }
        let au = .6 - kb * kb - Tb * Tb - cb * cb - Qb * Qb;
        if (au < 0) Hb = 0;
        else {
          const bb = Ob[Bu + Nb + Ob[Ou + sb + Ob[Gu + Mb + Ob[Uu + mb]]]] % 32 * 4;
          au *= au, Hb = au * au * (ab[bb] * kb + ab[bb + 1] * Tb + ab[bb + 2] * cb + ab[bb + 3] * Qb)
        }
        let Hu = .6 - Rb * Rb - bu * bu - uu * uu - hu * hu;
        if (Hu < 0) wb = 0;
        else {
          const bb = Ob[Bu + 1 + Ob[Ou + 1 + Ob[Gu + 1 + Ob[Uu + 1]]]] % 32 * 4;
          Hu *= Hu, wb = Hu * Hu * (ab[bb] * Rb + ab[bb + 1] * bu + ab[bb + 2] * uu + ab[bb + 3] * hu)
        }
        return 27 * (Gb + Ub + Sb + Hb + wb)
      }
    }
  }
};
Object.freeze(modules);
for (const bb in modules) Object.freeze(modules[bb]);