export const id = 277;
export const ids = [277];
export const modules = {
  41041: (bb, wb, Mb) => {
    bb.exports = Hb;
    var eb = Mb(398);

    function Hb(bb, wb) {
      if (!(this instanceof Hb)) return new Hb(bb, wb);
      var Mb = eb.create();
      eb.add(Mb, bb, wb), this.base = eb.min(eb.create(), bb, Mb), this.vec = eb.clone(wb), this.max = eb.max(eb.create(), bb, Mb), this.mag = eb.length(this.vec)
    }
    var pb = Hb.prototype;
    pb.width = function() {
      return this.vec[0]
    }, pb.height = function() {
      return this.vec[1]
    }, pb.depth = function() {
      return this.vec[2]
    }, pb.x0 = function() {
      return this.base[0]
    }, pb.y0 = function() {
      return this.base[1]
    }, pb.z0 = function() {
      return this.base[2]
    }, pb.x1 = function() {
      return this.max[0]
    }, pb.y1 = function() {
      return this.max[1]
    }, pb.z1 = function() {
      return this.max[2]
    }, pb.translate = function(bb) {
      return eb.add(this.max, this.max, bb), eb.add(this.base, this.base, bb), this
    }, pb.setPosition = function(bb) {
      return eb.add(this.max, bb, this.vec), eb.copy(this.base, bb), this
    }, pb.expand = function(bb) {
      var wb = eb.create(),
        Mb = eb.create();
      return eb.max(wb, bb.max, this.max), eb.min(Mb, bb.base, this.base), eb.subtract(wb, wb, Mb), new Hb(Mb, wb)
    }, pb.intersects = function(bb) {
      return !(bb.base[0] > this.max[0]) && (!(bb.base[1] > this.max[1]) && (!(bb.base[2] > this.max[2]) && (!(bb.max[0] < this.base[0]) && (!(bb.max[1] < this.base[1]) && !(bb.max[2] < this.base[2])))))
    }, pb.touches = function(bb) {
      var wb = this.union(bb);
      return null !== wb && (0 == wb.width() || 0 == wb.height() || 0 == wb.depth())
    }, pb.union = function(bb) {
      if (!this.intersects(bb)) return null;
      var wb = Math.max(bb.base[0], this.base[0]),
        Mb = Math.max(bb.base[1], this.base[1]),
        eb = Math.max(bb.base[2], this.base[2]);
      return new Hb([wb, Mb, eb], [Math.min(bb.max[0], this.max[0]) - wb, Math.min(bb.max[1], this.max[1]) - Mb, Math.min(bb.max[2], this.max[2]) - eb])
    }
  },
  41033: bb => {
    bb.exports = function(bb, wb, Mb, eb, Hb, pb) {
      var Vb = +wb[0],
        gb = +wb[1],
        lb = +wb[2],
        Lb = +Mb[0],
        Ib = +Mb[1],
        Ob = +Mb[2],
        Ub = Math.sqrt(Lb * Lb + Ib * Ib + Ob * Ob);
      if (0 === Ub) throw new Error("Can't raycast along a zero vector");
      return function(bb, wb, Mb, eb, Hb, pb, Vb, gb, lb, Lb) {
        for (var Ib = 0, Ob = Math.floor, Ub = 0 | Ob(wb), tb = 0 | Ob(Mb), Cb = 0 | Ob(eb), Eb = Hb > 0 ? 1 : -1, Fb = pb > 0 ? 1 : -1, Bb = Vb > 0 ? 1 : -1, sb = Math.abs(1 / Hb), mb = Math.abs(1 / pb), hb = Math.abs(1 / Vb), zb = sb < 1 / 0 ? sb * (Eb > 0 ? Ub + 1 - wb : wb - Ub) : 1 / 0, Xb = mb < 1 / 0 ? mb * (Fb > 0 ? tb + 1 - Mb : Mb - tb) : 1 / 0, xb = hb < 1 / 0 ? hb * (Bb > 0 ? Cb + 1 - eb : eb - Cb) : 1 / 0, jb = -1; Ib <= gb;) {
          var Kb = bb(Ub, tb, Cb);
          if (Kb) return lb && (lb[0] = wb + Ib * Hb, lb[1] = Mb + Ib * pb, lb[2] = eb + Ib * Vb), Lb && (Lb[0] = Lb[1] = Lb[2] = 0, 0 === jb && (Lb[0] = -Eb), 1 === jb && (Lb[1] = -Fb), 2 === jb && (Lb[2] = -Bb)), Kb;
          zb < Xb ? zb < xb ? (Ub += Eb, Ib = zb, zb += sb, jb = 0) : (Cb += Bb, Ib = xb, xb += hb, jb = 2) : Xb < xb ? (tb += Fb, Ib = Xb, Xb += mb, jb = 1) : (Cb += Bb, Ib = xb, xb += hb, jb = 2)
        }
        return lb && (lb[0] = wb + Ib * Hb, lb[1] = Mb + Ib * pb, lb[2] = eb + Ib * Vb), Lb && (Lb[0] = Lb[1] = Lb[2] = 0), 0
      }(bb, Vb, gb, lb, Lb /= Ub, Ib /= Ub, Ob /= Ub, eb = "undefined" === typeof eb ? 64 : +eb, Hb, pb)
    }
  },
  40433: (bb, wb, Mb) => {
    Mb.d(wb, {
      b: () => gb,
      f: () => pb
    });
    var eb = Mb(2919);
    let Hb = null;

    function pb(bb) {
      return null !== Hb && bb === Hb
    }

    function Vb() {
      this.qT = !1, this.stopPropagation = !1, this.aT = !1, this.disabled = !1
    }
    class gb {
      constructor(bb, wb) {
        this.version = "0.7.0";
        var Mb = Object.assign({}, new Vb, wb || {});
        this.element = bb || document, this.qT = !!Mb.qT, this.stopPropagation = !!Mb.stopPropagation, this.aT = !!Mb.aT, this.disabled = !!Mb.disabled, this.filterEvents = (bb, wb) => !0, this.ignoreEvent = bb => !1, this.down = new eb.EventEmitter, this.up = new eb.EventEmitter, this.state = {}, this.Hk = {
          dx: 0,
          dy: 0,
          XMb: 0,
          xMb: 0,
          jMb: 0
        }, this.pressCount = {}, this.releaseCount = {}, this._keyBindmap = {}, this._keyStates = {}, this._bindPressCount = {}, this._touches = {
          lastX: 0,
          lastY: 0,
          currID: null
        }, "loading" !== document.readyState ? Lb(this) : document.addEventListener("DOMContentLoaded", (bb => {
          Lb(this)
        }), {
          once: !0
        })
      }
      bind(bb) {
        for (var wb = arguments.length, Mb = new Array(wb > 1 ? wb - 1 : 0), eb = 1; eb < wb; eb++) Mb[eb - 1] = arguments[eb];
        Mb.forEach((wb => {
          var Mb = this._keyBindmap[wb] || [];
          Mb.includes(bb) || (Mb.push(bb), this._keyBindmap[wb] = Mb)
        })), this.state[bb] = !!this.state[bb], this.pressCount[bb] = this.pressCount[bb] || 0, this.releaseCount[bb] = this.releaseCount[bb] || 0
      }
      unbind(bb) {
        for (var wb in this._keyBindmap) {
          var Mb = this._keyBindmap[wb],
            eb = Mb.indexOf(bb);
          eb > -1 && Mb.splice(eb, 1)
        }
      }
      getBindings() {
        var bb = {};
        for (var wb in this._keyBindmap) {
          this._keyBindmap[wb].forEach((Mb => {
            bb[Mb] = bb[Mb] || [], bb[Mb].push(wb)
          }))
        }
        return bb
      }
      sO() {
        lb(this.Hk), lb(this.pressCount), lb(this.releaseCount)
      }
    }

    function lb(bb) {
      for (var wb in bb) bb[wb] = 0
    }

    function Lb(bb) {
      window.addEventListener("keydown", Fb.bind(null, bb, !0), !1), window.addEventListener("keyup", Fb.bind(null, bb, !1), !1);
      var wb = {
        passive: !0
      };
      bb.element.addEventListener("touchstart", tb.bind(void 0, bb), {
        passive: !1
      }), bb.element.addEventListener("touchend", Eb.bind(void 0, bb), wb), bb.element.addEventListener("mousedown", Bb.bind(null, bb, !0), wb), window.document.addEventListener("mouseup", Bb.bind(null, bb, !1), wb), bb.element.addEventListener("touchmove", sb.bind(null, bb), wb), bb.element.addEventListener("mousemove", sb.bind(null, bb), wb), window.PointerEvent, bb.element.addEventListener("wheel", mb.bind(null, bb), wb), bb.element.addEventListener("contextmenu", hb.bind(null, bb), !1), window.addEventListener("blur", xb.bind(null, bb), !1)
    }
    var Ib = 0,
      Ob = 0,
      Ub = null;

    function tb(bb, wb) {
      wb.preventDefault(), Cb(wb)
    }

    function Cb(bb) {
      let wb = !1;
      for (let Mb = 0; Mb < bb.touches.length; ++Mb)
        if (bb.touches[Mb].identifier === Ub) {
          wb = !0;
          break
        } if (!wb) {
        const wb = bb.changedTouches[0];
        Ib = wb.clientX, Ob = wb.clientY, Ub = wb.identifier
      }
    }

    function Eb(bb, wb) {
      for (var Mb = wb.changedTouches, eb = 0; eb < Mb.length; ++eb) Mb[eb].identifier === Ub && (Ub = null)
    }

    function Fb(bb, wb, Mb) {
      if (!bb.ignoreEvent(Mb)) try {
        jb(bb, Mb), wb && Mb.isTrusted && !Mb.repeat && bb._keyStates[Mb.code] && Kb(bb, Mb.code)
      } finally {
        rb(Mb.code, wb, bb, Mb)
      }
    }

    function Bb(bb, wb, Mb) {
      if (!bb.ignoreEvent(Mb)) try {
        jb(bb, Mb)
      } finally {
        ! function(bb, wb, Mb) {
          if ("pointerId" in Mb)
            if (wb) {
              if (null !== bb._touches.currID) return;
              bb._touches.currID = Mb.pointerId
            } else {
              if (bb._touches.currID !== Mb.pointerId) return;
              bb._touches.currID = null
            } var eb = "button" in Mb ? Mb.button + 1 : 1;
          rb("Mouse" + eb, wb, bb, Mb)
        }(bb, wb, Mb)
      }
    }

    function sb(bb, wb) {
      var Mb = wb.movementX || wb.mozMovementX || 0,
        eb = wb.movementY || wb.mozMovementY || 0;
      if (wb.touches && 0 === (Mb | eb)) {
        var Hb = function(bb) {
          Cb(bb);
          for (let wb = 0; wb < bb.changedTouches.length; ++wb)
            if (bb.changedTouches[wb].identifier == Ub) {
              const Mb = bb.changedTouches[wb],
                eb = [Mb.clientX - Ib, Mb.clientY - Ob];
              return Ib = Mb.clientX, Ob = Mb.clientY, eb
            } return console.error(`Did not find touch id ${Ub}`), [0, 0]
        }(wb);
        Mb = Hb[0], eb = Hb[1]
      }
      bb.Hk.dx += Mb, bb.Hk.dy += eb
    }

    function mb(bb, wb) {
      jb(bb, wb);
      var Mb = 1;
      switch (wb.deltaMode) {
        case 0:
          Mb = 1;
          break;
        case 1:
          Mb = 12;
          break;
        case 2:
          Mb = bb.element.clientHeight || window.innerHeight
      }
      bb.Hk.XMb += (wb.deltaX || 0) * Mb, bb.Hk.xMb += (wb.deltaY || 0) * Mb, bb.Hk.jMb += (wb.deltaZ || 0) * Mb
    }

    function hb(bb, wb) {
      if (!bb.aT) return wb.preventDefault(), !1
    }
    var zb = {
      AltLeft: "altKey",
      AltRight: "altKey",
      ControlLeft: "ctrlKey",
      ControlRight: "ctrlKey",
      ShiftLeft: "shiftKey",
      ShiftRight: "shiftKey",
      MetaLeft: "metaKey",
      MetaRight: "metaKey"
    };

    function Xb(bb, wb) {
      return !!bb[zb[wb]] || ("AltRight" === wb || "ControlLeft" === wb) && "function" === typeof bb.getModifierState && !0 === bb.getModifierState("AltGraph")
    }

    function xb(bb, wb) {
      for (var Mb in bb._modifiersHeldThroughBlur = {}, zb) bb._keyStates[Mb] && (bb._modifiersHeldThroughBlur[Mb] = !0);
      wb && wb.isTrusted && function() {
        try {
          return window.self !== window.top
        } catch (bb) {
          return !0
        }
      }() && (clearTimeout(bb._blurRelease), bb._blurRelease = setTimeout((function() {
        if (!document.hasFocus())
          for (var wb in bb._modifiersHeldThroughBlur = {}, bb._keyStates) bb._keyStates[wb] && !/^Mouse\d/.test(wb) && Kb(bb, wb)
      }), 0))
    }

    function jb(bb, wb) {
      var Mb = bb._modifiersHeldThroughBlur;
      if (Mb && wb.isTrusted && document.hasFocus())
        for (var eb in Mb) delete Mb[eb], bb._keyStates[eb] && eb !== wb.code && (Xb(wb, eb) || Kb(bb, eb))
    }

    function Kb(bb, wb) {
      const Mb = {
          code: wb,
          preventDefault: () => {},
          stopPropagation: () => {}
        },
        eb = Hb;
      Hb = Mb;
      try {
        rb(wb, !1, bb, Mb)
      } finally {
        Hb = eb
      }
    }

    function rb(bb, wb, Mb, eb) {
      var Hb = Mb._keyBindmap[bb];
      Hb && (Rb(Mb._keyStates[bb], wb) && (Mb._keyStates[bb] = wb, Hb.forEach((bb => {
        (!Mb.filterEvents || Mb.filterEvents(eb, bb)) && function(bb, wb, Mb, eb) {
          var Hb = wb ? Mb.pressCount : Mb.releaseCount;
          Hb[bb] = (Hb[bb] || 0) + 1;
          var pb = Mb._bindPressCount[bb] || 0;
          (pb += wb ? 1 : -1) < 0 && (pb = 0);
          Mb._bindPressCount[bb] = pb;
          var Vb = Mb.state[bb];
          if (Rb(Vb, pb)) {
            Mb.state[bb] = pb > 0;
            var gb = wb ? Mb.down : Mb.up;
            Mb.disabled || gb.emit(bb, eb)
          }
        }(bb, wb, Mb, eb)
      }))), "button" in eb || (Mb.qT && !eb.defaultPrevented && eb.preventDefault(), Mb.stopPropagation && eb.stopPropagation()))
    }

    function Rb(bb, wb) {
      return bb ? !wb : wb
    }
  },
  41021: (bb, wb, Mb) => {
    Mb.d(wb, {
      c: () => eb
    });
    class eb {
      constructor() {
        let bb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
          wb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 10;
        this.FQ = !1, this.wG = !1, this.gJ = 30, this.Fv = 0, this.pG = 100, this.uF = !1, this.fullscreen = !1, this.Wm = function(bb) {}, this.lG = function(bb, wb, Mb) {}, this.zO = function() {}, this.Rm = function() {}, this.sG = function() {}, this.onFullscreenChanged = function() {}, this.onPointerLockError = function(bb) {}, this._data = new Hb(wb),
          function(bb) {
            if ("loading" === document.readyState) {
              var wb = () => {
                document.removeEventListener("readystatechange", wb), bb()
              };
              document.addEventListener("readystatechange", wb)
            } else setTimeout(bb, 0)
          }((() => {
            ! function(bb) {
              var wb = bb._data,
                Mb = wb.nowObject.now();
              wb.lastTickStarted = Mb, wb.lastFrameStarted = Mb, wb.lastRenderStarted = Mb, wb.frameCB = () => function(bb) {
                var wb = bb._data;
                requestAnimationFrame(wb.frameCB), gb(bb);
                var Mb = wb.nowObject.now(),
                  eb = Mb - wb.lastFrameStarted;
                if (wb.lastFrameStarted = Mb, bb.Fv > 0) {
                  wb.renderAccum += eb;
                  var Hb = 1e3 / bb.Fv;
                  if (wb.renderAccum < Hb) return;
                  wb.renderAccum -= Hb, wb.renderAccum > Hb && (wb.renderAccum = Hb)
                }
                var pb = Mb - wb.lastRenderStarted;
                wb.lastRenderStarted = Mb;
                var Vb = 1e3 / bb.gJ,
                  lb = (Mb - wb.lastTickStarted) / Vb;
                lb < 0 && (lb = 0);
                bb.lG(pb, lb, Vb), setTimeout(gb, 0, bb, !0)
              }(bb), wb.intervalCB = () => gb(bb), requestAnimationFrame(wb.frameCB), wb.pollTime > 0 && (wb.intervalID = setInterval(wb.intervalCB, Math.max(wb.pollTime, 1e3 / bb.gJ / 2)))
            }(this),
            function(bb, wb) {
              if (!wb) return;
              var Mb = !1,
                eb = !1,
                Hb = bb => {
                  if (!!bb !== (Mb = wb === document.pointerLockElement))
                    if (bb) {
                      var eb = wb.requestPointerLock();
                      eb && eb.catch && eb.catch((bb => {}))
                    } else document.exitPointerLock()
                },
                pb = bb => {
                  !!bb !== (eb = wb === document.fullscreenElement) && (bb ? wb.requestFullscreen ? wb.requestFullscreen() : wb.webkitRequestFullscreen && wb.webkitRequestFullscreen() : document.exitFullscreen ? document.exitFullscreen() : document.webkitExitFullscreen && document.webkitExitFullscreen())
                };
              document.addEventListener("pointerlockchange", (eb => {
                Mb = wb === document.pointerLockElement, bb.sG(Mb)
              })), document.addEventListener("fullscreenchange", (Mb => {
                eb = wb === document.fullscreenElement, bb.onFullscreenChanged(eb)
              })), document.addEventListener("pointerlockerror", (eb => {
                Mb = wb === document.pointerLockElement, bb.onPointerLockError(eb)
              })), Object.defineProperty(bb, "uF", {
                get: () => Mb,
                set: Hb
              }), Object.defineProperty(bb, "fullscreen", {
                get: () => eb,
                set: pb
              }), wb.addEventListener("click", (wb => {
                bb.FQ && Hb(!0), bb.wG && pb(!0)
              }));
              var Vb = () => bb.Rm();
              if (window.ResizeObserver) {
                new ResizeObserver(Vb).observe(wb)
              } else window.addEventListener("resize", Vb)
            }(this, bb), this.zO()
          }))
      }
    }

    function Hb() {
      let bb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 10;
      this.nowObject = performance || Date, this.pollTime = bb, this.renderAccum = 0, this.lastTickStarted = 0, this.lastFrameStarted = 0, this.lastRenderStarted = 0, this.avgTickTime = 2, this.frameCB = null, this.intervalCB = null, this.intervalID = -1
    }
    var pb = 3,
      Vb = 20;

    function gb(bb) {
      for (var wb = bb._data, Mb = 1e3 / bb.gJ, eb = wb.nowObject.now() + Vb, Hb = 0; wb.nowObject.now() >= wb.lastTickStarted + Mb && wb.nowObject.now() < eb && ++Hb <= pb;) bb.Wm(Mb), wb.lastTickStarted += Mb;
      var gb = 5 * (Mb + 5),
        lb = wb.nowObject.now();
      if (lb - wb.lastTickStarted > gb)
        for (; lb >= wb.lastTickStarted + Mb;) wb.lastTickStarted += Mb
    }
  },
  40291: (bb, wb, Mb) => {
    function eb(bb, wb, Mb, eb, Hb) {
      var pb = {};
      return Object.keys(eb).forEach((function(bb) {
        pb[bb] = eb[bb]
      })), pb.enumerable = !!pb.enumerable, pb.configurable = !!pb.configurable, ("value" in pb || pb.initializer) && (pb.writable = !0), pb = Mb.slice().reverse().reduce((function(Mb, eb) {
        return eb(bb, wb, Mb) || Mb
      }), pb), Hb && void 0 !== pb.initializer && (pb.value = pb.initializer ? pb.initializer.call(Hb) : void 0, pb.initializer = void 0), void 0 === pb.initializer && (Object.defineProperty(bb, wb, pb), pb = null), pb
    }
    Mb.d(wb, {
      b: () => eb
    })
  },
  40282: (bb, wb, Mb) => {
    function eb(bb, wb, Mb, eb) {
      Mb && Object.defineProperty(bb, wb, {
        enumerable: Mb.enumerable,
        configurable: Mb.configurable,
        writable: Mb.writable,
        value: Mb.initializer ? Mb.initializer.call(eb) : void 0
      })
    }
    Mb.d(wb, {
      e: () => eb
    })
  },
  39966: (bb, wb, Mb) => {
    Mb.d(wb, {
      e: () => pb
    });
    var eb = Mb(39971);
    const Hb = (bb, wb, Mb) => bb ? bb.getClassName && "Mesh" === bb.getClassName() ? null : !bb.getClassName || "SubMesh" !== bb.getClassName() && "PhysicsBody" !== bb.getClassName() ? bb.clone ? bb.clone() : Array.isArray(bb) ? bb.slice() : Mb && "object" === typeof bb ? {
      ...bb
    } : null : bb.clone(wb) : null;
    class pb {
      static DeepCopy(bb, wb, Mb, pb) {
        let Vb = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
        const gb = function(bb) {
          const wb = [];
          do {
            const Mb = Object.getOwnPropertyNames(bb);
            for (const bb of Mb) - 1 === wb.indexOf(bb) && wb.push(bb)
          } while (bb = Object.getPrototypeOf(bb));
          return wb
        }(bb);
        for (const Lb of gb) {
          if ("_" === Lb[0] && (!pb || -1 === pb.indexOf(Lb))) continue;
          if (Lb.endsWith("Observable")) continue;
          if (Mb && -1 !== Mb.indexOf(Lb)) continue;
          const gb = bb[Lb],
            Ib = typeof gb;
          if ("function" !== Ib) try {
            if ("object" === Ib)
              if (gb instanceof Uint8Array) wb[Lb] = Uint8Array.from(gb);
              else if (gb instanceof Array) {
              if (wb[Lb] = [], gb.length > 0)
                if ("object" == typeof gb[0])
                  for (let bb = 0; bb < gb.length; bb++) {
                    const Mb = Hb(gb[bb], wb, Vb); - 1 === wb[Lb].indexOf(Mb) && wb[Lb].push(Mb)
                  } else wb[Lb] = gb.slice(0)
            } else wb[Lb] = Hb(gb, wb, Vb);
            else wb[Lb] = gb
          } catch (lb) {
            eb.b.Warn(lb.message)
          }
        }
      }
    }
  },
  40004: (bb, wb, Mb) => {
    Mb.d(wb, {
      e: () => Hb,
      h: () => pb,
      i: () => Vb,
      j: () => gb
    });
    var eb = Mb(38406);
    class Hb {
      constructor(bb, wb, Mb) {
        this.gradient = bb, this.color1 = wb, this.color2 = Mb
      }
      getColorToRef(bb) {
        this.color2 ? eb.f.LerpToRef(this.color1, this.color2, Math.random(), bb) : bb.eZ(this.color1)
      }
    }
    class pb {
      constructor(bb, wb) {
        this.gradient = bb, this.color = wb
      }
    }
    class Vb {
      constructor(bb, wb, Mb) {
        this.gradient = bb, this.factor1 = wb, this.factor2 = Mb
      }
      getFactor() {
        return void 0 === this.factor2 || this.factor2 === this.factor1 ? this.factor1 : this.factor1 + (this.factor2 - this.factor1) * Math.random()
      }
    }
    class gb {
      static GetCurrentGradient(bb, wb, Mb) {
        if (wb[0].gradient > bb) return void Mb(wb[0], wb[0], 1);
        for (let Hb = 0; Hb < wb.length - 1; Hb++) {
          const eb = wb[Hb],
            pb = wb[Hb + 1];
          if (bb >= eb.gradient && bb <= pb.gradient) {
            return void Mb(eb, pb, (bb - eb.gradient) / (pb.gradient - eb.gradient))
          }
        }
        const eb = wb.length - 1;
        Mb(wb[eb], wb[eb], 1)
      }
    }
  },
  39971: (bb, wb, Mb) => {
    Mb.d(wb, {
      b: () => eb
    });
    class eb {
      static _CheckLimit(bb, wb) {
        let Mb = eb._LogLimitOutputs[bb];
        return Mb ? Mb.current++ : (Mb = {
          limit: wb,
          current: 1
        }, eb._LogLimitOutputs[bb] = Mb), Mb.current <= Mb.limit
      }
      static _GenerateLimitMessage(bb) {
        let wb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
        const Mb = eb._LogLimitOutputs[bb];
        if (!Mb || !eb.MessageLimitReached) return;
        const Hb = this._Levels[wb];
        Mb.current === Mb.limit && eb[Hb.name](eb.MessageLimitReached.replace(/%LIMIT%/g, "" + Mb.limit).replace(/%TYPE%/g, Hb.name ?? ""))
      }
      static _AddLogEntry(bb) {
        eb._LogCache = bb + eb._LogCache, eb.OnNewCacheEntry && eb.OnNewCacheEntry(bb)
      }
      static _FormatMessage(bb) {
        const wb = bb => bb < 10 ? "0" + bb : "" + bb,
          Mb = new Date;
        return "[" + wb(Mb.getHours()) + ":" + wb(Mb.getMinutes()) + ":" + wb(Mb.getSeconds()) + "]: " + bb
      }
      static _LogDisabled(bb, wb) {}
      static _LogEnabled() {
        let bb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
          wb = arguments.length > 1 ? arguments[1] : void 0,
          Mb = arguments.length > 2 ? arguments[2] : void 0;
        const Hb = Array.isArray(wb) ? wb[0] : wb;
        if (void 0 !== Mb && !eb._CheckLimit(Hb, Mb)) return;
        const pb = eb._FormatMessage(Hb),
          Vb = this._Levels[bb],
          gb = Array.isArray(wb) ? wb.slice(1) : [];
        Vb.logFunc && Vb.logFunc("BJS - " + pb, ...gb);
        const lb = `<div style='color:${Vb.color}'>${pb}</div><br>`;
        eb._AddLogEntry(lb), eb._GenerateLimitMessage(Hb, bb)
      }
      static get LogCache() {
        return eb._LogCache
      }
      static ClearLogCache() {
        eb._LogCache = "", eb._LogLimitOutputs = {}, eb.errorsCount = 0
      }
      static set LogLevels(bb) {
        eb.Log = eb._LogDisabled, eb.Warn = eb._LogDisabled, eb.Error = eb._LogDisabled;
        const wb = [eb.MessageLogLevel, eb.WarningLogLevel, eb.ErrorLogLevel];
        for (const Mb of wb)
          if ((bb & Mb) === Mb) {
            const bb = this._Levels[Mb];
            eb[bb.name] = eb._LogEnabled.bind(eb, Mb)
          }
      }
    }
    eb.NoneLogLevel = 0, eb.MessageLogLevel = 1, eb.WarningLogLevel = 2, eb.ErrorLogLevel = 4, eb.AllLogLevel = 7, eb.MessageLimitReached = "Too many %TYPE%s (%LIMIT%), no more %TYPE%s will be reported for this message.", eb._LogCache = "", eb._LogLimitOutputs = {}, eb._Levels = [{}, {
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
    }], eb.errorsCount = 0, eb.Log = eb._LogEnabled.bind(eb, eb.MessageLogLevel), eb.Warn = eb._LogEnabled.bind(eb, eb.WarningLogLevel), eb.Error = eb._LogEnabled.bind(eb, eb.ErrorLogLevel)
  },
  40007: (bb, wb, Mb) => {
    Mb.d(wb, {
      d: () => Vb
    });
    var eb = Mb(38285),
      Hb = Mb(38322),
      pb = Mb(39966);
    class Vb {
      constructor() {
        this.direction1 = new eb.o(0, 1, 0), this.direction2 = new eb.o(0, 1, 0), this.minEmitBox = new eb.o(-.5, -.5, -.5), this.maxEmitBox = new eb.o(.5, .5, .5)
      }
      startDirectionFunction(bb, wb, Mb, pb) {
        const Vb = (0, Hb.RandomRange)(this.direction1.x, this.direction2.x),
          gb = (0, Hb.RandomRange)(this.direction1.y, this.direction2.y),
          lb = (0, Hb.RandomRange)(this.direction1.z, this.direction2.z);
        if (pb) return wb.x = Vb, wb.y = gb, void(wb.z = lb);
        eb.o.TransformNormalFromFloatsToRef(Vb, gb, lb, bb, wb)
      }
      startPositionFunction(bb, wb, Mb, pb) {
        const Vb = (0, Hb.RandomRange)(this.minEmitBox.x, this.maxEmitBox.x),
          gb = (0, Hb.RandomRange)(this.minEmitBox.y, this.maxEmitBox.y),
          lb = (0, Hb.RandomRange)(this.minEmitBox.z, this.maxEmitBox.z);
        if (pb) return wb.x = Vb, wb.y = gb, void(wb.z = lb);
        eb.o.TransformCoordinatesFromFloatsToRef(Vb, gb, lb, bb, wb)
      }
      clone() {
        const bb = new Vb;
        return pb.e.DeepCopy(this, bb), bb
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
        return bb.type = this.getClassName(), bb.direction1 = this.direction1.ppb(), bb.direction2 = this.direction2.ppb(), bb.minEmitBox = this.minEmitBox.ppb(), bb.maxEmitBox = this.maxEmitBox.ppb(), bb
      }
      parse(bb) {
        eb.o.FromArrayToRef(bb.direction1, 0, this.direction1), eb.o.FromArrayToRef(bb.direction2, 0, this.direction2), eb.o.FromArrayToRef(bb.minEmitBox, 0, this.minEmitBox), eb.o.FromArrayToRef(bb.maxEmitBox, 0, this.maxEmitBox)
      }
    }
  },
  39961: (bb, wb, Mb) => {
    Mb.d(wb, {
      b: () => gb,
      d: () => Vb
    });
    var eb = Mb(38285),
      Hb = Mb(38322),
      pb = Mb(39966);
    class Vb {
      constructor() {
        let bb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
          wb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
          Mb = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1,
          Hb = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
        this.radius = bb, this.height = wb, this.radiusRange = Mb, this.directionRandomizer = Hb, this._tempVector = eb.o.Zero()
      }
      startDirectionFunction(bb, wb, Mb, pb, Vb) {
        Mb.position.subtractToRef(bb.getTranslation(), this._tempVector), this._tempVector.normalize(), eb.o.TransformNormalToRef(this._tempVector, Vb, this._tempVector);
        const gb = (0, Hb.RandomRange)(-this.directionRandomizer / 2, this.directionRandomizer / 2);
        let lb = Math.atan2(this._tempVector.x, this._tempVector.z);
        lb += (0, Hb.RandomRange)(-Math.PI / 2, Math.PI / 2) * this.directionRandomizer, this._tempVector.y = gb, this._tempVector.x = Math.sin(lb), this._tempVector.z = Math.cos(lb), this._tempVector.normalize(), pb ? wb.eZ(this._tempVector) : eb.o.TransformNormalFromFloatsToRef(this._tempVector.x, this._tempVector.y, this._tempVector.z, bb, wb)
      }
      startPositionFunction(bb, wb, Mb, pb) {
        const Vb = (0, Hb.RandomRange)(-this.height / 2, this.height / 2),
          gb = (0, Hb.RandomRange)(0, 2 * Math.PI),
          lb = (0, Hb.RandomRange)((1 - this.radiusRange) * (1 - this.radiusRange), 1),
          Lb = Math.sqrt(lb) * this.radius,
          Ib = Lb * Math.cos(gb),
          Ob = Lb * Math.sin(gb);
        pb ? wb.twb(Ib, Vb, Ob) : eb.o.TransformCoordinatesFromFloatsToRef(Ib, Vb, Ob, bb, wb)
      }
      clone() {
        const bb = new Vb(this.radius, this.directionRandomizer);
        return pb.e.DeepCopy(this, bb), bb
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
    class gb extends Vb {
      constructor() {
        let bb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
          wb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
          Mb = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1,
          Hb = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : new eb.o(0, 1, 0),
          pb = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : new eb.o(0, 1, 0);
        super(bb, wb, Mb), this.direction1 = Hb, this.direction2 = pb
      }
      startDirectionFunction(bb, wb, Mb, pb) {
        const Vb = (0, Hb.RandomRange)(this.direction1.x, this.direction2.x),
          gb = (0, Hb.RandomRange)(this.direction1.y, this.direction2.y),
          lb = (0, Hb.RandomRange)(this.direction1.z, this.direction2.z);
        pb ? wb.twb(Vb, gb, lb) : eb.o.TransformNormalFromFloatsToRef(Vb, gb, lb, bb, wb)
      }
      clone() {
        const bb = new gb(this.radius, this.height, this.radiusRange, this.direction1, this.direction2);
        return pb.e.DeepCopy(this, bb), bb
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
        return bb.direction1 = this.direction1.ppb(), bb.direction2 = this.direction2.ppb(), bb
      }
      parse(bb) {
        super.parse(bb), eb.o.FromArrayToRef(bb.direction1, 0, this.direction1), eb.o.FromArrayToRef(bb.direction2, 0, this.direction2)
      }
    }
  },
  40096: (bb, wb, Mb) => {
    Mb.d(wb, {
      c: () => Ob
    });
    const eb = .5 * (Math.sqrt(3) - 1),
      Hb = (3 - Math.sqrt(3)) / 6,
      pb = 1 / 3,
      Vb = 1 / 6,
      gb = (Math.sqrt(5) - 1) / 4,
      lb = (5 - Math.sqrt(5)) / 20,
      Lb = new Float32Array([1, 1, 0, -1, 1, 0, 1, -1, 0, -1, -1, 0, 1, 0, 1, -1, 0, 1, 1, 0, -1, -1, 0, -1, 0, 1, 1, 0, -1, 1, 0, 1, -1, 0, -1, -1]),
      Ib = new Float32Array([0, 1, 1, 1, 0, 1, 1, -1, 0, 1, -1, 1, 0, 1, -1, -1, 0, -1, 1, 1, 0, -1, 1, -1, 0, -1, -1, 1, 0, -1, -1, -1, 1, 0, 1, 1, 1, 0, 1, -1, 1, 0, -1, 1, 1, 0, -1, -1, -1, 0, 1, 1, -1, 0, 1, -1, -1, 0, -1, 1, -1, 0, -1, -1, 1, 1, 0, 1, 1, 1, 0, -1, 1, -1, 0, 1, 1, -1, 0, -1, -1, 1, 0, 1, -1, 1, 0, -1, -1, -1, 0, 1, -1, -1, 0, -1, 1, 1, 1, 0, 1, 1, -1, 0, 1, -1, 1, 0, 1, -1, -1, 0, -1, 1, 1, 0, -1, 1, -1, 0, -1, -1, 1, 0, -1, -1, -1, 0]);
    const Ob = class {
      constructor() {
        let bb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Math.random;
        const wb = "function" == typeof bb ? bb : function(bb) {
          let wb = 0,
            Mb = 0,
            eb = 0,
            Hb = 1;
          const pb = function() {
            let bb = 4022871197;
            return function(wb) {
              wb = wb.toString();
              for (let Mb = 0; Mb < wb.length; Mb++) {
                bb += wb.charCodeAt(Mb);
                let eb = .02519603282416938 * bb;
                bb = eb >>> 0, eb -= bb, eb *= bb, bb = eb >>> 0, eb -= bb, bb += 4294967296 * eb
              }
              return 2.3283064365386963e-10 * (bb >>> 0)
            }
          }();
          wb = pb(" "), Mb = pb(" "), eb = pb(" "), wb -= pb(bb), wb < 0 && (wb += 1);
          Mb -= pb(bb), Mb < 0 && (Mb += 1);
          eb -= pb(bb), eb < 0 && (eb += 1);
          return function() {
            const bb = 2091639 * wb + 2.3283064365386963e-10 * Hb;
            return wb = Mb, Mb = eb, eb = bb - (Hb = 0 | bb)
          }
        }(bb);
        this.p = function(bb) {
          const wb = new Uint8Array(256);
          for (let Mb = 0; Mb < 256; Mb++) wb[Mb] = Mb;
          for (let Mb = 0; Mb < 255; Mb++) {
            const eb = Mb + ~~(bb() * (256 - Mb)),
              Hb = wb[Mb];
            wb[Mb] = wb[eb], wb[eb] = Hb
          }
          return wb
        }(wb), this.perm = new Uint8Array(512), this.permMod12 = new Uint8Array(512);
        for (let Mb = 0; Mb < 512; Mb++) this.perm[Mb] = this.p[255 & Mb], this.permMod12[Mb] = this.perm[Mb] % 12
      }
      noise2D(bb, wb) {
        const Mb = this.permMod12,
          pb = this.perm;
        let Vb = 0,
          gb = 0,
          lb = 0;
        const Ib = (bb + wb) * eb,
          Ob = Math.floor(bb + Ib),
          Ub = Math.floor(wb + Ib),
          tb = (Ob + Ub) * Hb,
          Cb = bb - (Ob - tb),
          Eb = wb - (Ub - tb);
        let Fb, Bb;
        Cb > Eb ? (Fb = 1, Bb = 0) : (Fb = 0, Bb = 1);
        const sb = Cb - Fb + Hb,
          mb = Eb - Bb + Hb,
          hb = Cb - 1 + 2 * Hb,
          zb = Eb - 1 + 2 * Hb,
          Xb = 255 & Ob,
          xb = 255 & Ub;
        let jb = .5 - Cb * Cb - Eb * Eb;
        if (jb >= 0) {
          const bb = 3 * Mb[Xb + pb[xb]];
          jb *= jb, Vb = jb * jb * (Lb[bb] * Cb + Lb[bb + 1] * Eb)
        }
        let Kb = .5 - sb * sb - mb * mb;
        if (Kb >= 0) {
          const bb = 3 * Mb[Xb + Fb + pb[xb + Bb]];
          Kb *= Kb, gb = Kb * Kb * (Lb[bb] * sb + Lb[bb + 1] * mb)
        }
        let rb = .5 - hb * hb - zb * zb;
        if (rb >= 0) {
          const bb = 3 * Mb[Xb + 1 + pb[xb + 1]];
          rb *= rb, lb = rb * rb * (Lb[bb] * hb + Lb[bb + 1] * zb)
        }
        return 70 * (Vb + gb + lb)
      }
      noise3D(bb, wb, Mb) {
        const eb = this.permMod12,
          Hb = this.perm;
        let gb, lb, Ib, Ob;
        const Ub = (bb + wb + Mb) * pb,
          tb = Math.floor(bb + Ub),
          Cb = Math.floor(wb + Ub),
          Eb = Math.floor(Mb + Ub),
          Fb = (tb + Cb + Eb) * Vb,
          Bb = bb - (tb - Fb),
          sb = wb - (Cb - Fb),
          mb = Mb - (Eb - Fb);
        let hb, zb, Xb, xb, jb, Kb;
        Bb >= sb ? sb >= mb ? (hb = 1, zb = 0, Xb = 0, xb = 1, jb = 1, Kb = 0) : Bb >= mb ? (hb = 1, zb = 0, Xb = 0, xb = 1, jb = 0, Kb = 1) : (hb = 0, zb = 0, Xb = 1, xb = 1, jb = 0, Kb = 1) : sb < mb ? (hb = 0, zb = 0, Xb = 1, xb = 0, jb = 1, Kb = 1) : Bb < mb ? (hb = 0, zb = 1, Xb = 0, xb = 0, jb = 1, Kb = 1) : (hb = 0, zb = 1, Xb = 0, xb = 1, jb = 1, Kb = 0);
        const rb = Bb - hb + Vb,
          Rb = sb - zb + Vb,
          Db = mb - Xb + Vb,
          cb = Bb - xb + 2 * Vb,
          Yb = sb - jb + 2 * Vb,
          Zb = mb - Kb + 2 * Vb,
          fb = Bb - 1 + .5,
          Ab = sb - 1 + .5,
          Wb = mb - 1 + .5,
          Jb = 255 & tb,
          Sb = 255 & Cb,
          Nb = 255 & Eb;
        let vb = .6 - Bb * Bb - sb * sb - mb * mb;
        if (vb < 0) gb = 0;
        else {
          const bb = 3 * eb[Jb + Hb[Sb + Hb[Nb]]];
          vb *= vb, gb = vb * vb * (Lb[bb] * Bb + Lb[bb + 1] * sb + Lb[bb + 2] * mb)
        }
        let Qb = .6 - rb * rb - Rb * Rb - Db * Db;
        if (Qb < 0) lb = 0;
        else {
          const bb = 3 * eb[Jb + hb + Hb[Sb + zb + Hb[Nb + Xb]]];
          Qb *= Qb, lb = Qb * Qb * (Lb[bb] * rb + Lb[bb + 1] * Rb + Lb[bb + 2] * Db)
        }
        let Gb = .6 - cb * cb - Yb * Yb - Zb * Zb;
        if (Gb < 0) Ib = 0;
        else {
          const bb = 3 * eb[Jb + xb + Hb[Sb + jb + Hb[Nb + Kb]]];
          Gb *= Gb, Ib = Gb * Gb * (Lb[bb] * cb + Lb[bb + 1] * Yb + Lb[bb + 2] * Zb)
        }
        let qb = .6 - fb * fb - Ab * Ab - Wb * Wb;
        if (qb < 0) Ob = 0;
        else {
          const bb = 3 * eb[Jb + 1 + Hb[Sb + 1 + Hb[Nb + 1]]];
          qb *= qb, Ob = qb * qb * (Lb[bb] * fb + Lb[bb + 1] * Ab + Lb[bb + 2] * Wb)
        }
        return 32 * (gb + lb + Ib + Ob)
      }
      noise4D(bb, wb, Mb, eb) {
        const Hb = this.perm;
        let pb, Vb, Lb, Ob, Ub;
        const tb = (bb + wb + Mb + eb) * gb,
          Cb = Math.floor(bb + tb),
          Eb = Math.floor(wb + tb),
          Fb = Math.floor(Mb + tb),
          Bb = Math.floor(eb + tb),
          sb = (Cb + Eb + Fb + Bb) * lb,
          mb = bb - (Cb - sb),
          hb = wb - (Eb - sb),
          zb = Mb - (Fb - sb),
          Xb = eb - (Bb - sb);
        let xb = 0,
          jb = 0,
          Kb = 0,
          rb = 0;
        mb > hb ? xb++ : jb++, mb > zb ? xb++ : Kb++, mb > Xb ? xb++ : rb++, hb > zb ? jb++ : Kb++, hb > Xb ? jb++ : rb++, zb > Xb ? Kb++ : rb++;
        const Rb = xb >= 3 ? 1 : 0,
          Db = jb >= 3 ? 1 : 0,
          cb = Kb >= 3 ? 1 : 0,
          Yb = rb >= 3 ? 1 : 0,
          Zb = xb >= 2 ? 1 : 0,
          fb = jb >= 2 ? 1 : 0,
          Ab = Kb >= 2 ? 1 : 0,
          Wb = rb >= 2 ? 1 : 0,
          Jb = xb >= 1 ? 1 : 0,
          Sb = jb >= 1 ? 1 : 0,
          Nb = Kb >= 1 ? 1 : 0,
          vb = rb >= 1 ? 1 : 0,
          Qb = mb - Rb + lb,
          Gb = hb - Db + lb,
          qb = zb - cb + lb,
          ab = Xb - Yb + lb,
          ib = mb - Zb + 2 * lb,
          ub = hb - fb + 2 * lb,
          db = zb - Ab + 2 * lb,
          Pb = Xb - Wb + 2 * lb,
          nb = mb - Jb + 3 * lb,
          yb = hb - Sb + 3 * lb,
          ob = zb - Nb + 3 * lb,
          Tb = Xb - vb + 3 * lb,
          kb = mb - 1 + 4 * lb,
          bw = hb - 1 + 4 * lb,
          ww = zb - 1 + 4 * lb,
          Mw = Xb - 1 + 4 * lb,
          ew = 255 & Cb,
          Hw = 255 & Eb,
          pw = 255 & Fb,
          Vw = 255 & Bb;
        let gw = .6 - mb * mb - hb * hb - zb * zb - Xb * Xb;
        if (gw < 0) pb = 0;
        else {
          const bb = Hb[ew + Hb[Hw + Hb[pw + Hb[Vw]]]] % 32 * 4;
          gw *= gw, pb = gw * gw * (Ib[bb] * mb + Ib[bb + 1] * hb + Ib[bb + 2] * zb + Ib[bb + 3] * Xb)
        }
        let lw = .6 - Qb * Qb - Gb * Gb - qb * qb - ab * ab;
        if (lw < 0) Vb = 0;
        else {
          const bb = Hb[ew + Rb + Hb[Hw + Db + Hb[pw + cb + Hb[Vw + Yb]]]] % 32 * 4;
          lw *= lw, Vb = lw * lw * (Ib[bb] * Qb + Ib[bb + 1] * Gb + Ib[bb + 2] * qb + Ib[bb + 3] * ab)
        }
        let Lw = .6 - ib * ib - ub * ub - db * db - Pb * Pb;
        if (Lw < 0) Lb = 0;
        else {
          const bb = Hb[ew + Zb + Hb[Hw + fb + Hb[pw + Ab + Hb[Vw + Wb]]]] % 32 * 4;
          Lw *= Lw, Lb = Lw * Lw * (Ib[bb] * ib + Ib[bb + 1] * ub + Ib[bb + 2] * db + Ib[bb + 3] * Pb)
        }
        let Iw = .6 - nb * nb - yb * yb - ob * ob - Tb * Tb;
        if (Iw < 0) Ob = 0;
        else {
          const bb = Hb[ew + Jb + Hb[Hw + Sb + Hb[pw + Nb + Hb[Vw + vb]]]] % 32 * 4;
          Iw *= Iw, Ob = Iw * Iw * (Ib[bb] * nb + Ib[bb + 1] * yb + Ib[bb + 2] * ob + Ib[bb + 3] * Tb)
        }
        let Ow = .6 - kb * kb - bw * bw - ww * ww - Mw * Mw;
        if (Ow < 0) Ub = 0;
        else {
          const bb = Hb[ew + 1 + Hb[Hw + 1 + Hb[pw + 1 + Hb[Vw + 1]]]] % 32 * 4;
          Ow *= Ow, Ub = Ow * Ow * (Ib[bb] * kb + Ib[bb + 1] * bw + Ib[bb + 2] * ww + Ib[bb + 3] * Mw)
        }
        return 27 * (pb + Vb + Lb + Ob + Ub)
      }
    }
  }
};
Object.freeze(modules);
for (const bb in modules) Object.freeze(modules[bb]);