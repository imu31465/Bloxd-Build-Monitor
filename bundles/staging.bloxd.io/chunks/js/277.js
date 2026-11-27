export const id = 277;
export const ids = [277];
export const modules = {
  41259: (rr, Sr, Qr) => {
    rr.exports = Wr;
    var Zr = Qr(388);

    function Wr(rr, Sr) {
      if (!(this instanceof Wr)) return new Wr(rr, Sr);
      var Qr = Zr.create();
      Zr.add(Qr, rr, Sr), this.base = Zr.min(Zr.create(), rr, Qr), this.vec = Zr.clone(Sr), this.max = Zr.max(Zr.create(), rr, Qr), this.mag = Zr.length(this.vec)
    }
    var ar = Wr.prototype;
    ar.width = function() {
      return this.vec[0]
    }, ar.height = function() {
      return this.vec[1]
    }, ar.depth = function() {
      return this.vec[2]
    }, ar.x0 = function() {
      return this.base[0]
    }, ar.y0 = function() {
      return this.base[1]
    }, ar.z0 = function() {
      return this.base[2]
    }, ar.x1 = function() {
      return this.max[0]
    }, ar.y1 = function() {
      return this.max[1]
    }, ar.z1 = function() {
      return this.max[2]
    }, ar.translate = function(rr) {
      return Zr.add(this.max, this.max, rr), Zr.add(this.base, this.base, rr), this
    }, ar.setPosition = function(rr) {
      return Zr.add(this.max, rr, this.vec), Zr.copy(this.base, rr), this
    }, ar.expand = function(rr) {
      var Sr = Zr.create(),
        Qr = Zr.create();
      return Zr.max(Sr, rr.max, this.max), Zr.min(Qr, rr.base, this.base), Zr.subtract(Sr, Sr, Qr), new Wr(Qr, Sr)
    }, ar.intersects = function(rr) {
      return !(rr.base[0] > this.max[0]) && (!(rr.base[1] > this.max[1]) && (!(rr.base[2] > this.max[2]) && (!(rr.max[0] < this.base[0]) && (!(rr.max[1] < this.base[1]) && !(rr.max[2] < this.base[2])))))
    }, ar.touches = function(rr) {
      var Sr = this.union(rr);
      return null !== Sr && (0 == Sr.width() || 0 == Sr.height() || 0 == Sr.depth())
    }, ar.union = function(rr) {
      if (!this.intersects(rr)) return null;
      var Sr = Math.max(rr.base[0], this.base[0]),
        Qr = Math.max(rr.base[1], this.base[1]),
        Zr = Math.max(rr.base[2], this.base[2]);
      return new Wr([Sr, Qr, Zr], [Math.min(rr.max[0], this.max[0]) - Sr, Math.min(rr.max[1], this.max[1]) - Qr, Math.min(rr.max[2], this.max[2]) - Zr])
    }
  },
  41256: rr => {
    rr.exports = function(rr, Sr, Qr, Zr, Wr, ar) {
      var jr = +Sr[0],
        Ir = +Sr[1],
        fr = +Sr[2],
        Er = +Qr[0],
        pr = +Qr[1],
        xr = +Qr[2],
        mr = Math.sqrt(Er * Er + pr * pr + xr * xr);
      if (0 === mr) throw new Error("Can't raycast along a zero vector");
      return function(rr, Sr, Qr, Zr, Wr, ar, jr, Ir, fr, Er) {
        for (var pr = 0, xr = Math.floor, mr = 0 | xr(Sr), Nr = 0 | xr(Qr), Ur = 0 | xr(Zr), tr = Wr > 0 ? 1 : -1, hr = ar > 0 ? 1 : -1, zr = jr > 0 ? 1 : -1, Yr = Math.abs(1 / Wr), nr = Math.abs(1 / ar), er = Math.abs(1 / jr), Kr = Yr < 1 / 0 ? Yr * (tr > 0 ? mr + 1 - Sr : Sr - mr) : 1 / 0, yr = nr < 1 / 0 ? nr * (hr > 0 ? Nr + 1 - Qr : Qr - Nr) : 1 / 0, Br = er < 1 / 0 ? er * (zr > 0 ? Ur + 1 - Zr : Zr - Ur) : 1 / 0, Tr = -1; pr <= Ir;) {
          var vr = rr(mr, Nr, Ur);
          if (vr) return fr && (fr[0] = Sr + pr * Wr, fr[1] = Qr + pr * ar, fr[2] = Zr + pr * jr), Er && (Er[0] = Er[1] = Er[2] = 0, 0 === Tr && (Er[0] = -tr), 1 === Tr && (Er[1] = -hr), 2 === Tr && (Er[2] = -zr)), vr;
          Kr < yr ? Kr < Br ? (mr += tr, pr = Kr, Kr += Yr, Tr = 0) : (Ur += zr, pr = Br, Br += er, Tr = 2) : yr < Br ? (Nr += hr, pr = yr, yr += nr, Tr = 1) : (Ur += zr, pr = Br, Br += er, Tr = 2)
        }
        return fr && (fr[0] = Sr + pr * Wr, fr[1] = Qr + pr * ar, fr[2] = Zr + pr * jr), Er && (Er[0] = Er[1] = Er[2] = 0), 0
      }(rr, jr, Ir, fr, Er /= mr, pr /= mr, xr /= mr, Zr = "undefined" === typeof Zr ? 64 : +Zr, Wr, ar)
    }
  },
  40675: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      b: () => Ir,
      d: () => ar
    });
    var Zr = Qr(2839);
    let Wr = null;

    function ar(rr) {
      return null !== Wr && rr === Wr
    }

    function jr() {
      this.XF = !1, this.stopPropagation = !1, this.kF = !1, this.disabled = !1
    }
    class Ir {
      constructor(rr, Sr) {
        this.version = "0.7.0";
        var Qr = Object.assign({}, new jr, Sr || {});
        this.element = rr || document, this.XF = !!Qr.XF, this.stopPropagation = !!Qr.stopPropagation, this.kF = !!Qr.kF, this.disabled = !!Qr.disabled, this.filterEvents = (rr, Sr) => !0, this.ignoreEvent = rr => !1, this.down = new Zr.EventEmitter, this.up = new Zr.EventEmitter, this.state = {}, this.JF = {
          dx: 0,
          dy: 0,
          cSr: 0,
          FSr: 0,
          oSr: 0
        }, this.pressCount = {}, this.releaseCount = {}, this._keyBindmap = {}, this._keyStates = {}, this._bindPressCount = {}, this._touches = {
          lastX: 0,
          lastY: 0,
          currID: null
        }, "loading" !== document.readyState ? Er(this) : document.addEventListener("DOMContentLoaded", (rr => {
          Er(this)
        }), {
          once: !0
        })
      }
      bind(rr) {
        for (var Sr = arguments.length, Qr = new Array(Sr > 1 ? Sr - 1 : 0), Zr = 1; Zr < Sr; Zr++) Qr[Zr - 1] = arguments[Zr];
        Qr.forEach((Sr => {
          var Qr = this._keyBindmap[Sr] || [];
          Qr.includes(rr) || (Qr.push(rr), this._keyBindmap[Sr] = Qr)
        })), this.state[rr] = !!this.state[rr], this.pressCount[rr] = this.pressCount[rr] || 0, this.releaseCount[rr] = this.releaseCount[rr] || 0
      }
      unbind(rr) {
        for (var Sr in this._keyBindmap) {
          var Qr = this._keyBindmap[Sr],
            Zr = Qr.indexOf(rr);
          Zr > -1 && Qr.splice(Zr, 1)
        }
      }
      getBindings() {
        var rr = {};
        for (var Sr in this._keyBindmap) {
          this._keyBindmap[Sr].forEach((Qr => {
            rr[Qr] = rr[Qr] || [], rr[Qr].push(Sr)
          }))
        }
        return rr
      }
      lx() {
        fr(this.JF), fr(this.pressCount), fr(this.releaseCount)
      }
    }

    function fr(rr) {
      for (var Sr in rr) rr[Sr] = 0
    }

    function Er(rr) {
      window.addEventListener("keydown", hr.bind(null, rr, !0), !1), window.addEventListener("keyup", hr.bind(null, rr, !1), !1);
      var Sr = {
        passive: !0
      };
      rr.element.addEventListener("touchstart", Nr.bind(void 0, rr), {
        passive: !1
      }), rr.element.addEventListener("touchend", tr.bind(void 0, rr), Sr), rr.element.addEventListener("mousedown", zr.bind(null, rr, !0), Sr), window.document.addEventListener("mouseup", zr.bind(null, rr, !1), Sr), rr.element.addEventListener("touchmove", Yr.bind(null, rr), Sr), rr.element.addEventListener("mousemove", Yr.bind(null, rr), Sr), window.PointerEvent, rr.element.addEventListener("wheel", nr.bind(null, rr), Sr), rr.element.addEventListener("contextmenu", er.bind(null, rr), !1), window.addEventListener("blur", Br.bind(null, rr), !1)
    }
    var pr = 0,
      xr = 0,
      mr = null;

    function Nr(rr, Sr) {
      Sr.preventDefault(), Ur(Sr)
    }

    function Ur(rr) {
      let Sr = !1;
      for (let Qr = 0; Qr < rr.touches.length; ++Qr)
        if (rr.touches[Qr].identifier === mr) {
          Sr = !0;
          break
        } if (!Sr) {
        const Sr = rr.changedTouches[0];
        pr = Sr.clientX, xr = Sr.clientY, mr = Sr.identifier
      }
    }

    function tr(rr, Sr) {
      for (var Qr = Sr.changedTouches, Zr = 0; Zr < Qr.length; ++Zr) Qr[Zr].identifier === mr && (mr = null)
    }

    function hr(rr, Sr, Qr) {
      if (!rr.ignoreEvent(Qr)) try {
        Tr(rr, Qr), Sr && Qr.isTrusted && !Qr.repeat && rr._keyStates[Qr.code] && vr(rr, Qr.code)
      } finally {
        Or(Qr.code, Sr, rr, Qr)
      }
    }

    function zr(rr, Sr, Qr) {
      if (!rr.ignoreEvent(Qr)) try {
        Tr(rr, Qr)
      } finally {
        ! function(rr, Sr, Qr) {
          if ("pointerId" in Qr)
            if (Sr) {
              if (null !== rr._touches.currID) return;
              rr._touches.currID = Qr.pointerId
            } else {
              if (rr._touches.currID !== Qr.pointerId) return;
              rr._touches.currID = null
            } var Zr = "button" in Qr ? Qr.button + 1 : 1;
          Or("Mouse" + Zr, Sr, rr, Qr)
        }(rr, Sr, Qr)
      }
    }

    function Yr(rr, Sr) {
      var Qr = Sr.movementX || Sr.mozMovementX || 0,
        Zr = Sr.movementY || Sr.mozMovementY || 0;
      if (Sr.touches && 0 === (Qr | Zr)) {
        var Wr = function(rr) {
          Ur(rr);
          for (let Sr = 0; Sr < rr.changedTouches.length; ++Sr)
            if (rr.changedTouches[Sr].identifier == mr) {
              const Qr = rr.changedTouches[Sr],
                Zr = [Qr.clientX - pr, Qr.clientY - xr];
              return pr = Qr.clientX, xr = Qr.clientY, Zr
            } return console.error(`Did not find touch id ${mr}`), [0, 0]
        }(Sr);
        Qr = Wr[0], Zr = Wr[1]
      }
      rr.JF.dx += Qr, rr.JF.dy += Zr
    }

    function nr(rr, Sr) {
      Tr(rr, Sr);
      var Qr = 1;
      switch (Sr.deltaMode) {
        case 0:
          Qr = 1;
          break;
        case 1:
          Qr = 12;
          break;
        case 2:
          Qr = rr.element.clientHeight || window.innerHeight
      }
      rr.JF.cSr += (Sr.deltaX || 0) * Qr, rr.JF.FSr += (Sr.deltaY || 0) * Qr, rr.JF.oSr += (Sr.deltaZ || 0) * Qr
    }

    function er(rr, Sr) {
      if (!rr.kF) return Sr.preventDefault(), !1
    }
    var Kr = {
      AltLeft: "altKey",
      AltRight: "altKey",
      ControlLeft: "ctrlKey",
      ControlRight: "ctrlKey",
      ShiftLeft: "shiftKey",
      ShiftRight: "shiftKey",
      MetaLeft: "metaKey",
      MetaRight: "metaKey"
    };

    function yr(rr, Sr) {
      return !!rr[Kr[Sr]] || ("AltRight" === Sr || "ControlLeft" === Sr) && "function" === typeof rr.getModifierState && !0 === rr.getModifierState("AltGraph")
    }

    function Br(rr, Sr) {
      for (var Qr in rr._modifiersHeldThroughBlur = {}, Kr) rr._keyStates[Qr] && (rr._modifiersHeldThroughBlur[Qr] = !0);
      Sr && Sr.isTrusted && function() {
        try {
          return window.self !== window.top
        } catch (rr) {
          return !0
        }
      }() && (clearTimeout(rr._blurRelease), rr._blurRelease = setTimeout((function() {
        if (!document.hasFocus())
          for (var Sr in rr._modifiersHeldThroughBlur = {}, rr._keyStates) rr._keyStates[Sr] && !/^Mouse\d/.test(Sr) && vr(rr, Sr)
      }), 0))
    }

    function Tr(rr, Sr) {
      var Qr = rr._modifiersHeldThroughBlur;
      if (Qr && Sr.isTrusted && document.hasFocus())
        for (var Zr in Qr) delete Qr[Zr], rr._keyStates[Zr] && Zr !== Sr.code && (yr(Sr, Zr) || vr(rr, Zr))
    }

    function vr(rr, Sr) {
      const Qr = {
          code: Sr,
          preventDefault: () => {},
          stopPropagation: () => {}
        },
        Zr = Wr;
      Wr = Qr;
      try {
        Or(Sr, !1, rr, Qr)
      } finally {
        Wr = Zr
      }
    }

    function Or(rr, Sr, Qr, Zr) {
      var Wr = Qr._keyBindmap[rr];
      Wr && (Lr(Qr._keyStates[rr], Sr) && (Qr._keyStates[rr] = Sr, Wr.forEach((rr => {
        (!Qr.filterEvents || Qr.filterEvents(Zr, rr)) && function(rr, Sr, Qr, Zr) {
          var Wr = Sr ? Qr.pressCount : Qr.releaseCount;
          Wr[rr] = (Wr[rr] || 0) + 1;
          var ar = Qr._bindPressCount[rr] || 0;
          (ar += Sr ? 1 : -1) < 0 && (ar = 0);
          Qr._bindPressCount[rr] = ar;
          var jr = Qr.state[rr];
          if (Lr(jr, ar)) {
            Qr.state[rr] = ar > 0;
            var Ir = Sr ? Qr.down : Qr.up;
            Qr.disabled || Ir.emit(rr, Zr)
          }
        }(rr, Sr, Qr, Zr)
      }))), "button" in Zr || (Qr.XF && !Zr.defaultPrevented && Zr.preventDefault(), Qr.stopPropagation && Zr.stopPropagation()))
    }

    function Lr(rr, Sr) {
      return rr ? !Sr : Sr
    }
  },
  41246: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      b: () => Zr
    });
    class Zr {
      constructor() {
        let rr = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
          Sr = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 10;
        this.Wk = !1, this.Nk = !1, this.pC = 30, this.wG = 0, this.zk = 100, this.Ez = !1, this.fullscreen = !1, this.FY = function(rr) {}, this.Yk = function(rr, Sr, Qr) {}, this.Hx = function() {}, this.kY = function() {}, this.Lk = function() {}, this.onFullscreenChanged = function() {}, this.onPointerLockError = function(rr) {}, this._data = new Wr(Sr),
          function(rr) {
            if ("loading" === document.readyState) {
              var Sr = () => {
                document.removeEventListener("readystatechange", Sr), rr()
              };
              document.addEventListener("readystatechange", Sr)
            } else setTimeout(rr, 0)
          }((() => {
            ! function(rr) {
              var Sr = rr._data,
                Qr = Sr.nowObject.now();
              Sr.lastTickStarted = Qr, Sr.lastFrameStarted = Qr, Sr.lastRenderStarted = Qr, Sr.frameCB = () => function(rr) {
                var Sr = rr._data;
                requestAnimationFrame(Sr.frameCB), Ir(rr);
                var Qr = Sr.nowObject.now(),
                  Zr = Qr - Sr.lastFrameStarted;
                if (Sr.lastFrameStarted = Qr, rr.wG > 0) {
                  Sr.renderAccum += Zr;
                  var Wr = 1e3 / rr.wG;
                  if (Sr.renderAccum < Wr) return;
                  Sr.renderAccum -= Wr, Sr.renderAccum > Wr && (Sr.renderAccum = Wr)
                }
                var ar = Qr - Sr.lastRenderStarted;
                Sr.lastRenderStarted = Qr;
                var jr = 1e3 / rr.pC,
                  fr = (Qr - Sr.lastTickStarted) / jr;
                fr < 0 && (fr = 0);
                rr.Yk(ar, fr, jr), setTimeout(Ir, 0, rr, !0)
              }(rr), Sr.intervalCB = () => Ir(rr), requestAnimationFrame(Sr.frameCB), Sr.pollTime > 0 && (Sr.intervalID = setInterval(Sr.intervalCB, Math.max(Sr.pollTime, 1e3 / rr.pC / 2)))
            }(this),
            function(rr, Sr) {
              if (!Sr) return;
              var Qr = !1,
                Zr = !1,
                Wr = rr => {
                  if (!!rr !== (Qr = Sr === document.pointerLockElement))
                    if (rr) {
                      var Zr = Sr.requestPointerLock();
                      Zr && Zr.catch && Zr.catch((rr => {}))
                    } else document.exitPointerLock()
                },
                ar = rr => {
                  !!rr !== (Zr = Sr === document.fullscreenElement) && (rr ? Sr.requestFullscreen ? Sr.requestFullscreen() : Sr.webkitRequestFullscreen && Sr.webkitRequestFullscreen() : document.exitFullscreen ? document.exitFullscreen() : document.webkitExitFullscreen && document.webkitExitFullscreen())
                };
              document.addEventListener("pointerlockchange", (Zr => {
                Qr = Sr === document.pointerLockElement, rr.Lk(Qr)
              })), document.addEventListener("fullscreenchange", (Qr => {
                Zr = Sr === document.fullscreenElement, rr.onFullscreenChanged(Zr)
              })), document.addEventListener("pointerlockerror", (Zr => {
                Qr = Sr === document.pointerLockElement, rr.onPointerLockError(Zr)
              })), Object.defineProperty(rr, "Ez", {
                get: () => Qr,
                set: Wr
              }), Object.defineProperty(rr, "fullscreen", {
                get: () => Zr,
                set: ar
              }), Sr.addEventListener("click", (Sr => {
                rr.Wk && Wr(!0), rr.Nk && ar(!0)
              }));
              var jr = () => rr.kY();
              if (window.ResizeObserver) {
                new ResizeObserver(jr).observe(Sr)
              } else window.addEventListener("resize", jr)
            }(this, rr), this.Hx()
          }))
      }
    }

    function Wr() {
      let rr = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 10;
      this.nowObject = performance || Date, this.pollTime = rr, this.renderAccum = 0, this.lastTickStarted = 0, this.lastFrameStarted = 0, this.lastRenderStarted = 0, this.avgTickTime = 2, this.frameCB = null, this.intervalCB = null, this.intervalID = -1
    }
    var ar = 3,
      jr = 20;

    function Ir(rr) {
      for (var Sr = rr._data, Qr = 1e3 / rr.pC, Zr = Sr.nowObject.now() + jr, Wr = 0; Sr.nowObject.now() >= Sr.lastTickStarted + Qr && Sr.nowObject.now() < Zr && ++Wr <= ar;) rr.FY(Qr), Sr.lastTickStarted += Qr;
      var Ir = 5 * (Qr + 5),
        fr = Sr.nowObject.now();
      if (fr - Sr.lastTickStarted > Ir)
        for (; fr >= Sr.lastTickStarted + Qr;) Sr.lastTickStarted += Qr
    }
  },
  40556: (rr, Sr, Qr) => {
    function Zr(rr, Sr, Qr, Zr, Wr) {
      var ar = {};
      return Object.keys(Zr).forEach((function(rr) {
        ar[rr] = Zr[rr]
      })), ar.enumerable = !!ar.enumerable, ar.configurable = !!ar.configurable, ("value" in ar || ar.initializer) && (ar.writable = !0), ar = Qr.slice().reverse().reduce((function(Qr, Zr) {
        return Zr(rr, Sr, Qr) || Qr
      }), ar), Wr && void 0 !== ar.initializer && (ar.value = ar.initializer ? ar.initializer.call(Wr) : void 0, ar.initializer = void 0), void 0 === ar.initializer && (Object.defineProperty(rr, Sr, ar), ar = null), ar
    }
    Qr.d(Sr, {
      c: () => Zr
    })
  },
  40552: (rr, Sr, Qr) => {
    function Zr(rr, Sr, Qr, Zr) {
      Qr && Object.defineProperty(rr, Sr, {
        enumerable: Qr.enumerable,
        configurable: Qr.configurable,
        writable: Qr.writable,
        value: Qr.initializer ? Qr.initializer.call(Zr) : void 0
      })
    }
    Qr.d(Sr, {
      c: () => Zr
    })
  },
  40237: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      b: () => ar
    });
    var Zr = Qr(40246);
    const Wr = (rr, Sr, Qr) => rr ? rr.getClassName && "Mesh" === rr.getClassName() ? null : !rr.getClassName || "SubMesh" !== rr.getClassName() && "PhysicsBody" !== rr.getClassName() ? rr.clone ? rr.clone() : Array.isArray(rr) ? rr.slice() : Qr && "object" === typeof rr ? {
      ...rr
    } : null : rr.clone(Sr) : null;
    class ar {
      static DeepCopy(rr, Sr, Qr, ar) {
        let jr = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
        const Ir = function(rr) {
          const Sr = [];
          do {
            const Qr = Object.getOwnPropertyNames(rr);
            for (const rr of Qr) - 1 === Sr.indexOf(rr) && Sr.push(rr)
          } while (rr = Object.getPrototypeOf(rr));
          return Sr
        }(rr);
        for (const Er of Ir) {
          if ("_" === Er[0] && (!ar || -1 === ar.indexOf(Er))) continue;
          if (Er.endsWith("Observable")) continue;
          if (Qr && -1 !== Qr.indexOf(Er)) continue;
          const Ir = rr[Er],
            pr = typeof Ir;
          if ("function" !== pr) try {
            if ("object" === pr)
              if (Ir instanceof Uint8Array) Sr[Er] = Uint8Array.from(Ir);
              else if (Ir instanceof Array) {
              if (Sr[Er] = [], Ir.length > 0)
                if ("object" == typeof Ir[0])
                  for (let rr = 0; rr < Ir.length; rr++) {
                    const Qr = Wr(Ir[rr], Sr, jr); - 1 === Sr[Er].indexOf(Qr) && Sr[Er].push(Qr)
                  } else Sr[Er] = Ir.slice(0)
            } else Sr[Er] = Wr(Ir, Sr, jr);
            else Sr[Er] = Ir
          } catch (fr) {
            Zr.c.Warn(fr.message)
          }
        }
      }
    }
  },
  40284: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      d: () => Wr,
      f: () => ar,
      i: () => jr,
      j: () => Ir
    });
    var Zr = Qr(38684);
    class Wr {
      constructor(rr, Sr, Qr) {
        this.gradient = rr, this.color1 = Sr, this.color2 = Qr
      }
      getColorToRef(rr) {
        this.color2 ? Zr.f.LerpToRef(this.color1, this.color2, Math.random(), rr) : rr.iH(this.color1)
      }
    }
    class ar {
      constructor(rr, Sr) {
        this.gradient = rr, this.color = Sr
      }
    }
    class jr {
      constructor(rr, Sr, Qr) {
        this.gradient = rr, this.factor1 = Sr, this.factor2 = Qr
      }
      getFactor() {
        return void 0 === this.factor2 || this.factor2 === this.factor1 ? this.factor1 : this.factor1 + (this.factor2 - this.factor1) * Math.random()
      }
    }
    class Ir {
      static GetCurrentGradient(rr, Sr, Qr) {
        if (Sr[0].gradient > rr) return void Qr(Sr[0], Sr[0], 1);
        for (let Wr = 0; Wr < Sr.length - 1; Wr++) {
          const Zr = Sr[Wr],
            ar = Sr[Wr + 1];
          if (rr >= Zr.gradient && rr <= ar.gradient) {
            return void Qr(Zr, ar, (rr - Zr.gradient) / (ar.gradient - Zr.gradient))
          }
        }
        const Zr = Sr.length - 1;
        Qr(Sr[Zr], Sr[Zr], 1)
      }
    }
  },
  40246: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      c: () => Zr
    });
    class Zr {
      static _CheckLimit(rr, Sr) {
        let Qr = Zr._LogLimitOutputs[rr];
        return Qr ? Qr.current++ : (Qr = {
          limit: Sr,
          current: 1
        }, Zr._LogLimitOutputs[rr] = Qr), Qr.current <= Qr.limit
      }
      static _GenerateLimitMessage(rr) {
        let Sr = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
        const Qr = Zr._LogLimitOutputs[rr];
        if (!Qr || !Zr.MessageLimitReached) return;
        const Wr = this._Levels[Sr];
        Qr.current === Qr.limit && Zr[Wr.name](Zr.MessageLimitReached.replace(/%LIMIT%/g, "" + Qr.limit).replace(/%TYPE%/g, Wr.name ?? ""))
      }
      static _AddLogEntry(rr) {
        Zr._LogCache = rr + Zr._LogCache, Zr.OnNewCacheEntry && Zr.OnNewCacheEntry(rr)
      }
      static _FormatMessage(rr) {
        const Sr = rr => rr < 10 ? "0" + rr : "" + rr,
          Qr = new Date;
        return "[" + Sr(Qr.getHours()) + ":" + Sr(Qr.getMinutes()) + ":" + Sr(Qr.getSeconds()) + "]: " + rr
      }
      static _LogDisabled(rr, Sr) {}
      static _LogEnabled() {
        let rr = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
          Sr = arguments.length > 1 ? arguments[1] : void 0,
          Qr = arguments.length > 2 ? arguments[2] : void 0;
        const Wr = Array.isArray(Sr) ? Sr[0] : Sr;
        if (void 0 !== Qr && !Zr._CheckLimit(Wr, Qr)) return;
        const ar = Zr._FormatMessage(Wr),
          jr = this._Levels[rr],
          Ir = Array.isArray(Sr) ? Sr.slice(1) : [];
        jr.logFunc && jr.logFunc("BJS - " + ar, ...Ir);
        const fr = `<div style='color:${jr.color}'>${ar}</div><br>`;
        Zr._AddLogEntry(fr), Zr._GenerateLimitMessage(Wr, rr)
      }
      static get LogCache() {
        return Zr._LogCache
      }
      static ClearLogCache() {
        Zr._LogCache = "", Zr._LogLimitOutputs = {}, Zr.errorsCount = 0
      }
      static set LogLevels(rr) {
        Zr.Log = Zr._LogDisabled, Zr.Warn = Zr._LogDisabled, Zr.Error = Zr._LogDisabled;
        const Sr = [Zr.MessageLogLevel, Zr.WarningLogLevel, Zr.ErrorLogLevel];
        for (const Qr of Sr)
          if ((rr & Qr) === Qr) {
            const rr = this._Levels[Qr];
            Zr[rr.name] = Zr._LogEnabled.bind(Zr, Qr)
          }
      }
    }
    Zr.NoneLogLevel = 0, Zr.MessageLogLevel = 1, Zr.WarningLogLevel = 2, Zr.ErrorLogLevel = 4, Zr.AllLogLevel = 7, Zr.MessageLimitReached = "Too many %TYPE%s (%LIMIT%), no more %TYPE%s will be reported for this message.", Zr._LogCache = "", Zr._LogLimitOutputs = {}, Zr._Levels = [{}, {
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
    }], Zr.errorsCount = 0, Zr.Log = Zr._LogEnabled.bind(Zr, Zr.MessageLogLevel), Zr.Warn = Zr._LogEnabled.bind(Zr, Zr.WarningLogLevel), Zr.Error = Zr._LogEnabled.bind(Zr, Zr.ErrorLogLevel)
  },
  40286: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      b: () => jr
    });
    var Zr = Qr(38560),
      Wr = Qr(38599),
      ar = Qr(40237);
    class jr {
      constructor() {
        this.direction1 = new Zr.u(0, 1, 0), this.direction2 = new Zr.u(0, 1, 0), this.minEmitBox = new Zr.u(-.5, -.5, -.5), this.maxEmitBox = new Zr.u(.5, .5, .5)
      }
      startDirectionFunction(rr, Sr, Qr, ar) {
        const jr = (0, Wr.RandomRange)(this.direction1.x, this.direction2.x),
          Ir = (0, Wr.RandomRange)(this.direction1.y, this.direction2.y),
          fr = (0, Wr.RandomRange)(this.direction1.z, this.direction2.z);
        if (ar) return Sr.x = jr, Sr.y = Ir, void(Sr.z = fr);
        Zr.u.TransformNormalFromFloatsToRef(jr, Ir, fr, rr, Sr)
      }
      startPositionFunction(rr, Sr, Qr, ar) {
        const jr = (0, Wr.RandomRange)(this.minEmitBox.x, this.maxEmitBox.x),
          Ir = (0, Wr.RandomRange)(this.minEmitBox.y, this.maxEmitBox.y),
          fr = (0, Wr.RandomRange)(this.minEmitBox.z, this.maxEmitBox.z);
        if (ar) return Sr.x = jr, Sr.y = Ir, void(Sr.z = fr);
        Zr.u.TransformCoordinatesFromFloatsToRef(jr, Ir, fr, rr, Sr)
      }
      clone() {
        const rr = new jr;
        return ar.b.DeepCopy(this, rr), rr
      }
      applyToShader(rr) {
        rr.setVector3("direction1", this.direction1), rr.setVector3("direction2", this.direction2), rr.setVector3("minEmitBox", this.minEmitBox), rr.setVector3("maxEmitBox", this.maxEmitBox)
      }
      buildUniformLayout(rr) {
        rr.addUniform("direction1", 3), rr.addUniform("direction2", 3), rr.addUniform("minEmitBox", 3), rr.addUniform("maxEmitBox", 3)
      }
      getEffectDefines() {
        return "#define BOXEMITTER"
      }
      getClassName() {
        return "BoxParticleEmitter"
      }
      serialize() {
        const rr = {};
        return rr.type = this.getClassName(), rr.direction1 = this.direction1.OWr(), rr.direction2 = this.direction2.OWr(), rr.minEmitBox = this.minEmitBox.OWr(), rr.maxEmitBox = this.maxEmitBox.OWr(), rr
      }
      parse(rr) {
        Zr.u.FromArrayToRef(rr.direction1, 0, this.direction1), Zr.u.FromArrayToRef(rr.direction2, 0, this.direction2), Zr.u.FromArrayToRef(rr.minEmitBox, 0, this.minEmitBox), Zr.u.FromArrayToRef(rr.maxEmitBox, 0, this.maxEmitBox)
      }
    }
  },
  40234: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      d: () => Ir,
      h: () => jr
    });
    var Zr = Qr(38560),
      Wr = Qr(38599),
      ar = Qr(40237);
    class jr {
      constructor() {
        let rr = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
          Sr = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
          Qr = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1,
          Wr = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
        this.radius = rr, this.height = Sr, this.radiusRange = Qr, this.directionRandomizer = Wr, this._tempVector = Zr.u.Zero()
      }
      startDirectionFunction(rr, Sr, Qr, ar, jr) {
        Qr.position.subtractToRef(rr.getTranslation(), this._tempVector), this._tempVector.normalize(), Zr.u.TransformNormalToRef(this._tempVector, jr, this._tempVector);
        const Ir = (0, Wr.RandomRange)(-this.directionRandomizer / 2, this.directionRandomizer / 2);
        let fr = Math.atan2(this._tempVector.x, this._tempVector.z);
        fr += (0, Wr.RandomRange)(-Math.PI / 2, Math.PI / 2) * this.directionRandomizer, this._tempVector.y = Ir, this._tempVector.x = Math.sin(fr), this._tempVector.z = Math.cos(fr), this._tempVector.normalize(), ar ? Sr.iH(this._tempVector) : Zr.u.TransformNormalFromFloatsToRef(this._tempVector.x, this._tempVector.y, this._tempVector.z, rr, Sr)
      }
      startPositionFunction(rr, Sr, Qr, ar) {
        const jr = (0, Wr.RandomRange)(-this.height / 2, this.height / 2),
          Ir = (0, Wr.RandomRange)(0, 2 * Math.PI),
          fr = (0, Wr.RandomRange)((1 - this.radiusRange) * (1 - this.radiusRange), 1),
          Er = Math.sqrt(fr) * this.radius,
          pr = Er * Math.cos(Ir),
          xr = Er * Math.sin(Ir);
        ar ? Sr.Hrr(pr, jr, xr) : Zr.u.TransformCoordinatesFromFloatsToRef(pr, jr, xr, rr, Sr)
      }
      clone() {
        const rr = new jr(this.radius, this.directionRandomizer);
        return ar.b.DeepCopy(this, rr), rr
      }
      applyToShader(rr) {
        rr.setFloat("radius", this.radius), rr.setFloat("height", this.height), rr.setFloat("radiusRange", this.radiusRange), rr.setFloat("directionRandomizer", this.directionRandomizer)
      }
      buildUniformLayout(rr) {
        rr.addUniform("radius", 1), rr.addUniform("height", 1), rr.addUniform("radiusRange", 1), rr.addUniform("directionRandomizer", 1)
      }
      getEffectDefines() {
        return "#define CYLINDEREMITTER"
      }
      getClassName() {
        return "CylinderParticleEmitter"
      }
      serialize() {
        const rr = {};
        return rr.type = this.getClassName(), rr.radius = this.radius, rr.height = this.height, rr.radiusRange = this.radiusRange, rr.directionRandomizer = this.directionRandomizer, rr
      }
      parse(rr) {
        this.radius = rr.radius, this.height = rr.height, this.radiusRange = rr.radiusRange, this.directionRandomizer = rr.directionRandomizer
      }
    }
    class Ir extends jr {
      constructor() {
        let rr = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
          Sr = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
          Qr = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1,
          Wr = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : new Zr.u(0, 1, 0),
          ar = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : new Zr.u(0, 1, 0);
        super(rr, Sr, Qr), this.direction1 = Wr, this.direction2 = ar
      }
      startDirectionFunction(rr, Sr, Qr, ar) {
        const jr = (0, Wr.RandomRange)(this.direction1.x, this.direction2.x),
          Ir = (0, Wr.RandomRange)(this.direction1.y, this.direction2.y),
          fr = (0, Wr.RandomRange)(this.direction1.z, this.direction2.z);
        ar ? Sr.Hrr(jr, Ir, fr) : Zr.u.TransformNormalFromFloatsToRef(jr, Ir, fr, rr, Sr)
      }
      clone() {
        const rr = new Ir(this.radius, this.height, this.radiusRange, this.direction1, this.direction2);
        return ar.b.DeepCopy(this, rr), rr
      }
      applyToShader(rr) {
        rr.setFloat("radius", this.radius), rr.setFloat("height", this.height), rr.setFloat("radiusRange", this.radiusRange), rr.setVector3("direction1", this.direction1), rr.setVector3("direction2", this.direction2)
      }
      buildUniformLayout(rr) {
        rr.addUniform("radius", 1), rr.addUniform("height", 1), rr.addUniform("radiusRange", 1), rr.addUniform("direction1", 3), rr.addUniform("direction2", 3)
      }
      getEffectDefines() {
        return "#define CYLINDEREMITTER\n#define DIRECTEDCYLINDEREMITTER"
      }
      getClassName() {
        return "CylinderDirectedParticleEmitter"
      }
      serialize() {
        const rr = super.serialize();
        return rr.direction1 = this.direction1.OWr(), rr.direction2 = this.direction2.OWr(), rr
      }
      parse(rr) {
        super.parse(rr), Zr.u.FromArrayToRef(rr.direction1, 0, this.direction1), Zr.u.FromArrayToRef(rr.direction2, 0, this.direction2)
      }
    }
  },
  40368: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      d: () => xr
    });
    const Zr = .5 * (Math.sqrt(3) - 1),
      Wr = (3 - Math.sqrt(3)) / 6,
      ar = 1 / 3,
      jr = 1 / 6,
      Ir = (Math.sqrt(5) - 1) / 4,
      fr = (5 - Math.sqrt(5)) / 20,
      Er = new Float32Array([1, 1, 0, -1, 1, 0, 1, -1, 0, -1, -1, 0, 1, 0, 1, -1, 0, 1, 1, 0, -1, -1, 0, -1, 0, 1, 1, 0, -1, 1, 0, 1, -1, 0, -1, -1]),
      pr = new Float32Array([0, 1, 1, 1, 0, 1, 1, -1, 0, 1, -1, 1, 0, 1, -1, -1, 0, -1, 1, 1, 0, -1, 1, -1, 0, -1, -1, 1, 0, -1, -1, -1, 1, 0, 1, 1, 1, 0, 1, -1, 1, 0, -1, 1, 1, 0, -1, -1, -1, 0, 1, 1, -1, 0, 1, -1, -1, 0, -1, 1, -1, 0, -1, -1, 1, 1, 0, 1, 1, 1, 0, -1, 1, -1, 0, 1, 1, -1, 0, -1, -1, 1, 0, 1, -1, 1, 0, -1, -1, -1, 0, 1, -1, -1, 0, -1, 1, 1, 1, 0, 1, 1, -1, 0, 1, -1, 1, 0, 1, -1, -1, 0, -1, 1, 1, 0, -1, 1, -1, 0, -1, -1, 1, 0, -1, -1, -1, 0]);
    const xr = class {
      constructor() {
        let rr = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Math.random;
        const Sr = "function" == typeof rr ? rr : function(rr) {
          let Sr = 0,
            Qr = 0,
            Zr = 0,
            Wr = 1;
          const ar = function() {
            let rr = 4022871197;
            return function(Sr) {
              Sr = Sr.toString();
              for (let Qr = 0; Qr < Sr.length; Qr++) {
                rr += Sr.charCodeAt(Qr);
                let Zr = .02519603282416938 * rr;
                rr = Zr >>> 0, Zr -= rr, Zr *= rr, rr = Zr >>> 0, Zr -= rr, rr += 4294967296 * Zr
              }
              return 2.3283064365386963e-10 * (rr >>> 0)
            }
          }();
          Sr = ar(" "), Qr = ar(" "), Zr = ar(" "), Sr -= ar(rr), Sr < 0 && (Sr += 1);
          Qr -= ar(rr), Qr < 0 && (Qr += 1);
          Zr -= ar(rr), Zr < 0 && (Zr += 1);
          return function() {
            const rr = 2091639 * Sr + 2.3283064365386963e-10 * Wr;
            return Sr = Qr, Qr = Zr, Zr = rr - (Wr = 0 | rr)
          }
        }(rr);
        this.p = function(rr) {
          const Sr = new Uint8Array(256);
          for (let Qr = 0; Qr < 256; Qr++) Sr[Qr] = Qr;
          for (let Qr = 0; Qr < 255; Qr++) {
            const Zr = Qr + ~~(rr() * (256 - Qr)),
              Wr = Sr[Qr];
            Sr[Qr] = Sr[Zr], Sr[Zr] = Wr
          }
          return Sr
        }(Sr), this.perm = new Uint8Array(512), this.permMod12 = new Uint8Array(512);
        for (let Qr = 0; Qr < 512; Qr++) this.perm[Qr] = this.p[255 & Qr], this.permMod12[Qr] = this.perm[Qr] % 12
      }
      noise2D(rr, Sr) {
        const Qr = this.permMod12,
          ar = this.perm;
        let jr = 0,
          Ir = 0,
          fr = 0;
        const pr = (rr + Sr) * Zr,
          xr = Math.floor(rr + pr),
          mr = Math.floor(Sr + pr),
          Nr = (xr + mr) * Wr,
          Ur = rr - (xr - Nr),
          tr = Sr - (mr - Nr);
        let hr, zr;
        Ur > tr ? (hr = 1, zr = 0) : (hr = 0, zr = 1);
        const Yr = Ur - hr + Wr,
          nr = tr - zr + Wr,
          er = Ur - 1 + 2 * Wr,
          Kr = tr - 1 + 2 * Wr,
          yr = 255 & xr,
          Br = 255 & mr;
        let Tr = .5 - Ur * Ur - tr * tr;
        if (Tr >= 0) {
          const rr = 3 * Qr[yr + ar[Br]];
          Tr *= Tr, jr = Tr * Tr * (Er[rr] * Ur + Er[rr + 1] * tr)
        }
        let vr = .5 - Yr * Yr - nr * nr;
        if (vr >= 0) {
          const rr = 3 * Qr[yr + hr + ar[Br + zr]];
          vr *= vr, Ir = vr * vr * (Er[rr] * Yr + Er[rr + 1] * nr)
        }
        let Or = .5 - er * er - Kr * Kr;
        if (Or >= 0) {
          const rr = 3 * Qr[yr + 1 + ar[Br + 1]];
          Or *= Or, fr = Or * Or * (Er[rr] * er + Er[rr + 1] * Kr)
        }
        return 70 * (jr + Ir + fr)
      }
      noise3D(rr, Sr, Qr) {
        const Zr = this.permMod12,
          Wr = this.perm;
        let Ir, fr, pr, xr;
        const mr = (rr + Sr + Qr) * ar,
          Nr = Math.floor(rr + mr),
          Ur = Math.floor(Sr + mr),
          tr = Math.floor(Qr + mr),
          hr = (Nr + Ur + tr) * jr,
          zr = rr - (Nr - hr),
          Yr = Sr - (Ur - hr),
          nr = Qr - (tr - hr);
        let er, Kr, yr, Br, Tr, vr;
        zr >= Yr ? Yr >= nr ? (er = 1, Kr = 0, yr = 0, Br = 1, Tr = 1, vr = 0) : zr >= nr ? (er = 1, Kr = 0, yr = 0, Br = 1, Tr = 0, vr = 1) : (er = 0, Kr = 0, yr = 1, Br = 1, Tr = 0, vr = 1) : Yr < nr ? (er = 0, Kr = 0, yr = 1, Br = 0, Tr = 1, vr = 1) : zr < nr ? (er = 0, Kr = 1, yr = 0, Br = 0, Tr = 1, vr = 1) : (er = 0, Kr = 1, yr = 0, Br = 1, Tr = 1, vr = 0);
        const Or = zr - er + jr,
          Lr = Yr - Kr + jr,
          lr = nr - yr + jr,
          Xr = zr - Br + 2 * jr,
          Pr = Yr - Tr + 2 * jr,
          Hr = nr - vr + 2 * jr,
          qr = zr - 1 + .5,
          Rr = Yr - 1 + .5,
          gr = nr - 1 + .5,
          Cr = 255 & Nr,
          Mr = 255 & Ur,
          Gr = 255 & tr;
        let kr = .6 - zr * zr - Yr * Yr - nr * nr;
        if (kr < 0) Ir = 0;
        else {
          const rr = 3 * Zr[Cr + Wr[Mr + Wr[Gr]]];
          kr *= kr, Ir = kr * kr * (Er[rr] * zr + Er[rr + 1] * Yr + Er[rr + 2] * nr)
        }
        let Ar = .6 - Or * Or - Lr * Lr - lr * lr;
        if (Ar < 0) fr = 0;
        else {
          const rr = 3 * Zr[Cr + er + Wr[Mr + Kr + Wr[Gr + yr]]];
          Ar *= Ar, fr = Ar * Ar * (Er[rr] * Or + Er[rr + 1] * Lr + Er[rr + 2] * lr)
        }
        let Vr = .6 - Xr * Xr - Pr * Pr - Hr * Hr;
        if (Vr < 0) pr = 0;
        else {
          const rr = 3 * Zr[Cr + Br + Wr[Mr + Tr + Wr[Gr + vr]]];
          Vr *= Vr, pr = Vr * Vr * (Er[rr] * Xr + Er[rr + 1] * Pr + Er[rr + 2] * Hr)
        }
        let ir = .6 - qr * qr - Rr * Rr - gr * gr;
        if (ir < 0) xr = 0;
        else {
          const rr = 3 * Zr[Cr + 1 + Wr[Mr + 1 + Wr[Gr + 1]]];
          ir *= ir, xr = ir * ir * (Er[rr] * qr + Er[rr + 1] * Rr + Er[rr + 2] * gr)
        }
        return 32 * (Ir + fr + pr + xr)
      }
      noise4D(rr, Sr, Qr, Zr) {
        const Wr = this.perm;
        let ar, jr, Er, xr, mr;
        const Nr = (rr + Sr + Qr + Zr) * Ir,
          Ur = Math.floor(rr + Nr),
          tr = Math.floor(Sr + Nr),
          hr = Math.floor(Qr + Nr),
          zr = Math.floor(Zr + Nr),
          Yr = (Ur + tr + hr + zr) * fr,
          nr = rr - (Ur - Yr),
          er = Sr - (tr - Yr),
          Kr = Qr - (hr - Yr),
          yr = Zr - (zr - Yr);
        let Br = 0,
          Tr = 0,
          vr = 0,
          Or = 0;
        nr > er ? Br++ : Tr++, nr > Kr ? Br++ : vr++, nr > yr ? Br++ : Or++, er > Kr ? Tr++ : vr++, er > yr ? Tr++ : Or++, Kr > yr ? vr++ : Or++;
        const Lr = Br >= 3 ? 1 : 0,
          lr = Tr >= 3 ? 1 : 0,
          Xr = vr >= 3 ? 1 : 0,
          Pr = Or >= 3 ? 1 : 0,
          Hr = Br >= 2 ? 1 : 0,
          qr = Tr >= 2 ? 1 : 0,
          Rr = vr >= 2 ? 1 : 0,
          gr = Or >= 2 ? 1 : 0,
          Cr = Br >= 1 ? 1 : 0,
          Mr = Tr >= 1 ? 1 : 0,
          Gr = vr >= 1 ? 1 : 0,
          kr = Or >= 1 ? 1 : 0,
          Ar = nr - Lr + fr,
          Vr = er - lr + fr,
          ir = Kr - Xr + fr,
          wr = yr - Pr + fr,
          cr = nr - Hr + 2 * fr,
          Fr = er - qr + 2 * fr,
          or = Kr - Rr + 2 * fr,
          br = yr - gr + 2 * fr,
          Jr = nr - Cr + 3 * fr,
          Dr = er - Mr + 3 * fr,
          dr = Kr - Gr + 3 * fr,
          sr = yr - kr + 3 * fr,
          ur = nr - 1 + 4 * fr,
          rS = er - 1 + 4 * fr,
          SS = Kr - 1 + 4 * fr,
          QS = yr - 1 + 4 * fr,
          ZS = 255 & Ur,
          WS = 255 & tr,
          aS = 255 & hr,
          jS = 255 & zr;
        let IS = .6 - nr * nr - er * er - Kr * Kr - yr * yr;
        if (IS < 0) ar = 0;
        else {
          const rr = Wr[ZS + Wr[WS + Wr[aS + Wr[jS]]]] % 32 * 4;
          IS *= IS, ar = IS * IS * (pr[rr] * nr + pr[rr + 1] * er + pr[rr + 2] * Kr + pr[rr + 3] * yr)
        }
        let fS = .6 - Ar * Ar - Vr * Vr - ir * ir - wr * wr;
        if (fS < 0) jr = 0;
        else {
          const rr = Wr[ZS + Lr + Wr[WS + lr + Wr[aS + Xr + Wr[jS + Pr]]]] % 32 * 4;
          fS *= fS, jr = fS * fS * (pr[rr] * Ar + pr[rr + 1] * Vr + pr[rr + 2] * ir + pr[rr + 3] * wr)
        }
        let ES = .6 - cr * cr - Fr * Fr - or * or - br * br;
        if (ES < 0) Er = 0;
        else {
          const rr = Wr[ZS + Hr + Wr[WS + qr + Wr[aS + Rr + Wr[jS + gr]]]] % 32 * 4;
          ES *= ES, Er = ES * ES * (pr[rr] * cr + pr[rr + 1] * Fr + pr[rr + 2] * or + pr[rr + 3] * br)
        }
        let pS = .6 - Jr * Jr - Dr * Dr - dr * dr - sr * sr;
        if (pS < 0) xr = 0;
        else {
          const rr = Wr[ZS + Cr + Wr[WS + Mr + Wr[aS + Gr + Wr[jS + kr]]]] % 32 * 4;
          pS *= pS, xr = pS * pS * (pr[rr] * Jr + pr[rr + 1] * Dr + pr[rr + 2] * dr + pr[rr + 3] * sr)
        }
        let xS = .6 - ur * ur - rS * rS - SS * SS - QS * QS;
        if (xS < 0) mr = 0;
        else {
          const rr = Wr[ZS + 1 + Wr[WS + 1 + Wr[aS + 1 + Wr[jS + 1]]]] % 32 * 4;
          xS *= xS, mr = xS * xS * (pr[rr] * ur + pr[rr + 1] * rS + pr[rr + 2] * SS + pr[rr + 3] * QS)
        }
        return 27 * (ar + jr + Er + xr + mr)
      }
    }
  }
};
Object.freeze(modules);
for (const rr in modules) Object.freeze(modules[rr]);