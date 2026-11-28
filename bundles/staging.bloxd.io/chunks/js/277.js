export const id = 277;
export const ids = [277];
export const modules = {
  41278: (dd, Od, md) => {
    dd.exports = Fd;
    var Wd = md(415);

    function Fd(dd, Od) {
      if (!(this instanceof Fd)) return new Fd(dd, Od);
      var md = Wd.create();
      Wd.add(md, dd, Od), this.base = Wd.min(Wd.create(), dd, md), this.vec = Wd.clone(Od), this.max = Wd.max(Wd.create(), dd, md), this.mag = Wd.length(this.vec)
    }
    var Rd = Fd.prototype;
    Rd.width = function() {
      return this.vec[0]
    }, Rd.height = function() {
      return this.vec[1]
    }, Rd.depth = function() {
      return this.vec[2]
    }, Rd.x0 = function() {
      return this.base[0]
    }, Rd.y0 = function() {
      return this.base[1]
    }, Rd.z0 = function() {
      return this.base[2]
    }, Rd.x1 = function() {
      return this.max[0]
    }, Rd.y1 = function() {
      return this.max[1]
    }, Rd.z1 = function() {
      return this.max[2]
    }, Rd.translate = function(dd) {
      return Wd.add(this.max, this.max, dd), Wd.add(this.base, this.base, dd), this
    }, Rd.setPosition = function(dd) {
      return Wd.add(this.max, dd, this.vec), Wd.copy(this.base, dd), this
    }, Rd.expand = function(dd) {
      var Od = Wd.create(),
        md = Wd.create();
      return Wd.max(Od, dd.max, this.max), Wd.min(md, dd.base, this.base), Wd.subtract(Od, Od, md), new Fd(md, Od)
    }, Rd.intersects = function(dd) {
      return !(dd.base[0] > this.max[0]) && (!(dd.base[1] > this.max[1]) && (!(dd.base[2] > this.max[2]) && (!(dd.max[0] < this.base[0]) && (!(dd.max[1] < this.base[1]) && !(dd.max[2] < this.base[2])))))
    }, Rd.touches = function(dd) {
      var Od = this.union(dd);
      return null !== Od && (0 == Od.width() || 0 == Od.height() || 0 == Od.depth())
    }, Rd.union = function(dd) {
      if (!this.intersects(dd)) return null;
      var Od = Math.max(dd.base[0], this.base[0]),
        md = Math.max(dd.base[1], this.base[1]),
        Wd = Math.max(dd.base[2], this.base[2]);
      return new Fd([Od, md, Wd], [Math.min(dd.max[0], this.max[0]) - Od, Math.min(dd.max[1], this.max[1]) - md, Math.min(dd.max[2], this.max[2]) - Wd])
    }
  },
  41274: dd => {
    dd.exports = function(dd, Od, md, Wd, Fd, Rd) {
      var Xd = +Od[0],
        Kd = +Od[1],
        hd = +Od[2],
        vd = +md[0],
        Qd = +md[1],
        td = +md[2],
        od = Math.sqrt(vd * vd + Qd * Qd + td * td);
      if (0 === od) throw new Error("Can't raycast along a zero vector");
      return function(dd, Od, md, Wd, Fd, Rd, Xd, Kd, hd, vd) {
        for (var Qd = 0, td = Math.floor, od = 0 | td(Od), Nd = 0 | td(md), qd = 0 | td(Wd), Hd = Fd > 0 ? 1 : -1, yd = Rd > 0 ? 1 : -1, bd = Xd > 0 ? 1 : -1, Td = Math.abs(1 / Fd), pd = Math.abs(1 / Rd), Yd = Math.abs(1 / Xd), gd = Td < 1 / 0 ? Td * (Hd > 0 ? od + 1 - Od : Od - od) : 1 / 0, wd = pd < 1 / 0 ? pd * (yd > 0 ? Nd + 1 - md : md - Nd) : 1 / 0, Ed = Yd < 1 / 0 ? Yd * (bd > 0 ? qd + 1 - Wd : Wd - qd) : 1 / 0, Jd = -1; Qd <= Kd;) {
          var Ud = dd(od, Nd, qd);
          if (Ud) return hd && (hd[0] = Od + Qd * Fd, hd[1] = md + Qd * Rd, hd[2] = Wd + Qd * Xd), vd && (vd[0] = vd[1] = vd[2] = 0, 0 === Jd && (vd[0] = -Hd), 1 === Jd && (vd[1] = -yd), 2 === Jd && (vd[2] = -bd)), Ud;
          gd < wd ? gd < Ed ? (od += Hd, Qd = gd, gd += Td, Jd = 0) : (qd += bd, Qd = Ed, Ed += Yd, Jd = 2) : wd < Ed ? (Nd += yd, Qd = wd, wd += pd, Jd = 1) : (qd += bd, Qd = Ed, Ed += Yd, Jd = 2)
        }
        return hd && (hd[0] = Od + Qd * Fd, hd[1] = md + Qd * Rd, hd[2] = Wd + Qd * Xd), vd && (vd[0] = vd[1] = vd[2] = 0), 0
      }(dd, Xd, Kd, hd, vd /= od, Qd /= od, td /= od, Wd = "undefined" === typeof Wd ? 64 : +Wd, Fd, Rd)
    }
  },
  40681: (dd, Od, md) => {
    md.d(Od, {
      b: () => Kd,
      e: () => Rd
    });
    var Wd = md(2821);
    let Fd = null;

    function Rd(dd) {
      return null !== Fd && dd === Fd
    }

    function Xd() {
      this.sZ = !1, this.stopPropagation = !1, this.uZ = !1, this.disabled = !1
    }
    class Kd {
      constructor(dd, Od) {
        this.version = "0.7.0";
        var md = Object.assign({}, new Xd, Od || {});
        this.element = dd || document, this.sZ = !!md.sZ, this.stopPropagation = !!md.stopPropagation, this.uZ = !!md.uZ, this.disabled = !!md.disabled, this.filterEvents = (dd, Od) => !0, this.ignoreEvent = dd => !1, this.down = new Wd.EventEmitter, this.up = new Wd.EventEmitter, this.state = {}, this.iZ = {
          dx: 0,
          dy: 0,
          Ymd: 0,
          wmd: 0,
          Emd: 0
        }, this.pressCount = {}, this.releaseCount = {}, this._keyBindmap = {}, this._keyStates = {}, this._bindPressCount = {}, this._touches = {
          lastX: 0,
          lastY: 0,
          currID: null
        }, "loading" !== document.readyState ? vd(this) : document.addEventListener("DOMContentLoaded", (dd => {
          vd(this)
        }), {
          once: !0
        })
      }
      bind(dd) {
        for (var Od = arguments.length, md = new Array(Od > 1 ? Od - 1 : 0), Wd = 1; Wd < Od; Wd++) md[Wd - 1] = arguments[Wd];
        md.forEach((Od => {
          var md = this._keyBindmap[Od] || [];
          md.includes(dd) || (md.push(dd), this._keyBindmap[Od] = md)
        })), this.state[dd] = !!this.state[dd], this.pressCount[dd] = this.pressCount[dd] || 0, this.releaseCount[dd] = this.releaseCount[dd] || 0
      }
      unbind(dd) {
        for (var Od in this._keyBindmap) {
          var md = this._keyBindmap[Od],
            Wd = md.indexOf(dd);
          Wd > -1 && md.splice(Wd, 1)
        }
      }
      getBindings() {
        var dd = {};
        for (var Od in this._keyBindmap) {
          this._keyBindmap[Od].forEach((md => {
            dd[md] = dd[md] || [], dd[md].push(Od)
          }))
        }
        return dd
      }
      Et() {
        hd(this.iZ), hd(this.pressCount), hd(this.releaseCount)
      }
    }

    function hd(dd) {
      for (var Od in dd) dd[Od] = 0
    }

    function vd(dd) {
      window.addEventListener("keydown", yd.bind(null, dd, !0), !1), window.addEventListener("keyup", yd.bind(null, dd, !1), !1);
      var Od = {
        passive: !0
      };
      dd.element.addEventListener("touchstart", Nd.bind(void 0, dd), {
        passive: !1
      }), dd.element.addEventListener("touchend", Hd.bind(void 0, dd), Od), dd.element.addEventListener("mousedown", bd.bind(null, dd, !0), Od), window.document.addEventListener("mouseup", bd.bind(null, dd, !1), Od), dd.element.addEventListener("touchmove", Td.bind(null, dd), Od), dd.element.addEventListener("mousemove", Td.bind(null, dd), Od), window.PointerEvent, dd.element.addEventListener("wheel", pd.bind(null, dd), Od), dd.element.addEventListener("contextmenu", Yd.bind(null, dd), !1), window.addEventListener("blur", Ed.bind(null, dd), !1)
    }
    var Qd = 0,
      td = 0,
      od = null;

    function Nd(dd, Od) {
      Od.preventDefault(), qd(Od)
    }

    function qd(dd) {
      let Od = !1;
      for (let md = 0; md < dd.touches.length; ++md)
        if (dd.touches[md].identifier === od) {
          Od = !0;
          break
        } if (!Od) {
        const Od = dd.changedTouches[0];
        Qd = Od.clientX, td = Od.clientY, od = Od.identifier
      }
    }

    function Hd(dd, Od) {
      for (var md = Od.changedTouches, Wd = 0; Wd < md.length; ++Wd) md[Wd].identifier === od && (od = null)
    }

    function yd(dd, Od, md) {
      if (!dd.ignoreEvent(md)) try {
        Jd(dd, md), Od && md.isTrusted && !md.repeat && dd._keyStates[md.code] && Ud(dd, md.code)
      } finally {
        xd(md.code, Od, dd, md)
      }
    }

    function bd(dd, Od, md) {
      if (!dd.ignoreEvent(md)) try {
        Jd(dd, md)
      } finally {
        ! function(dd, Od, md) {
          if ("pointerId" in md)
            if (Od) {
              if (null !== dd._touches.currID) return;
              dd._touches.currID = md.pointerId
            } else {
              if (dd._touches.currID !== md.pointerId) return;
              dd._touches.currID = null
            } var Wd = "button" in md ? md.button + 1 : 1;
          xd("Mouse" + Wd, Od, dd, md)
        }(dd, Od, md)
      }
    }

    function Td(dd, Od) {
      var md = Od.movementX || Od.mozMovementX || 0,
        Wd = Od.movementY || Od.mozMovementY || 0;
      if (Od.touches && 0 === (md | Wd)) {
        var Fd = function(dd) {
          qd(dd);
          for (let Od = 0; Od < dd.changedTouches.length; ++Od)
            if (dd.changedTouches[Od].identifier == od) {
              const md = dd.changedTouches[Od],
                Wd = [md.clientX - Qd, md.clientY - td];
              return Qd = md.clientX, td = md.clientY, Wd
            } return console.error(`Did not find touch id ${od}`), [0, 0]
        }(Od);
        md = Fd[0], Wd = Fd[1]
      }
      dd.iZ.dx += md, dd.iZ.dy += Wd
    }

    function pd(dd, Od) {
      Jd(dd, Od);
      var md = 1;
      switch (Od.deltaMode) {
        case 0:
          md = 1;
          break;
        case 1:
          md = 12;
          break;
        case 2:
          md = dd.element.clientHeight || window.innerHeight
      }
      dd.iZ.Ymd += (Od.deltaX || 0) * md, dd.iZ.wmd += (Od.deltaY || 0) * md, dd.iZ.Emd += (Od.deltaZ || 0) * md
    }

    function Yd(dd, Od) {
      if (!dd.uZ) return Od.preventDefault(), !1
    }
    var gd = {
      AltLeft: "altKey",
      AltRight: "altKey",
      ControlLeft: "ctrlKey",
      ControlRight: "ctrlKey",
      ShiftLeft: "shiftKey",
      ShiftRight: "shiftKey",
      MetaLeft: "metaKey",
      MetaRight: "metaKey"
    };

    function wd(dd, Od) {
      return !!dd[gd[Od]] || ("AltRight" === Od || "ControlLeft" === Od) && "function" === typeof dd.getModifierState && !0 === dd.getModifierState("AltGraph")
    }

    function Ed(dd, Od) {
      for (var md in dd._modifiersHeldThroughBlur = {}, gd) dd._keyStates[md] && (dd._modifiersHeldThroughBlur[md] = !0);
      Od && Od.isTrusted && function() {
        try {
          return window.self !== window.top
        } catch (dd) {
          return !0
        }
      }() && (clearTimeout(dd._blurRelease), dd._blurRelease = setTimeout((function() {
        if (!document.hasFocus())
          for (var Od in dd._modifiersHeldThroughBlur = {}, dd._keyStates) dd._keyStates[Od] && !/^Mouse\d/.test(Od) && Ud(dd, Od)
      }), 0))
    }

    function Jd(dd, Od) {
      var md = dd._modifiersHeldThroughBlur;
      if (md && Od.isTrusted && document.hasFocus())
        for (var Wd in md) delete md[Wd], dd._keyStates[Wd] && Wd !== Od.code && (wd(Od, Wd) || Ud(dd, Wd))
    }

    function Ud(dd, Od) {
      const md = {
          code: Od,
          preventDefault: () => {},
          stopPropagation: () => {}
        },
        Wd = Fd;
      Fd = md;
      try {
        xd(Od, !1, dd, md)
      } finally {
        Fd = Wd
      }
    }

    function xd(dd, Od, md, Wd) {
      var Fd = md._keyBindmap[dd];
      Fd && (Bd(md._keyStates[dd], Od) && (md._keyStates[dd] = Od, Fd.forEach((dd => {
        (!md.filterEvents || md.filterEvents(Wd, dd)) && function(dd, Od, md, Wd) {
          var Fd = Od ? md.pressCount : md.releaseCount;
          Fd[dd] = (Fd[dd] || 0) + 1;
          var Rd = md._bindPressCount[dd] || 0;
          (Rd += Od ? 1 : -1) < 0 && (Rd = 0);
          md._bindPressCount[dd] = Rd;
          var Xd = md.state[dd];
          if (Bd(Xd, Rd)) {
            md.state[dd] = Rd > 0;
            var Kd = Od ? md.down : md.up;
            md.disabled || Kd.emit(dd, Wd)
          }
        }(dd, Od, md, Wd)
      }))), "button" in Wd || (md.sZ && !Wd.defaultPrevented && Wd.preventDefault(), md.stopPropagation && Wd.stopPropagation()))
    }

    function Bd(dd, Od) {
      return dd ? !Od : Od
    }
  },
  41266: (dd, Od, md) => {
    md.d(Od, {
      d: () => Wd
    });
    class Wd {
      constructor() {
        let dd = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
          Od = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 10;
        this.lL = !1, this.RP = !1, this.wV = 30, this.YL = 0, this.Yz = 100, this.tb = !1, this.fullscreen = !1, this.FY = function(dd) {}, this.dD = function(dd, Od, md) {}, this.xt = function() {}, this.Ip = function() {}, this.mD = function() {}, this.onFullscreenChanged = function() {}, this.onPointerLockError = function(dd) {}, this._data = new Fd(Od),
          function(dd) {
            if ("loading" === document.readyState) {
              var Od = () => {
                document.removeEventListener("readystatechange", Od), dd()
              };
              document.addEventListener("readystatechange", Od)
            } else setTimeout(dd, 0)
          }((() => {
            ! function(dd) {
              var Od = dd._data,
                md = Od.nowObject.now();
              Od.lastTickStarted = md, Od.lastFrameStarted = md, Od.lastRenderStarted = md, Od.frameCB = () => function(dd) {
                var Od = dd._data;
                requestAnimationFrame(Od.frameCB), Kd(dd);
                var md = Od.nowObject.now(),
                  Wd = md - Od.lastFrameStarted;
                if (Od.lastFrameStarted = md, dd.YL > 0) {
                  Od.renderAccum += Wd;
                  var Fd = 1e3 / dd.YL;
                  if (Od.renderAccum < Fd) return;
                  Od.renderAccum -= Fd, Od.renderAccum > Fd && (Od.renderAccum = Fd)
                }
                var Rd = md - Od.lastRenderStarted;
                Od.lastRenderStarted = md;
                var Xd = 1e3 / dd.wV,
                  hd = (md - Od.lastTickStarted) / Xd;
                hd < 0 && (hd = 0);
                dd.dD(Rd, hd, Xd), setTimeout(Kd, 0, dd, !0)
              }(dd), Od.intervalCB = () => Kd(dd), requestAnimationFrame(Od.frameCB), Od.pollTime > 0 && (Od.intervalID = setInterval(Od.intervalCB, Math.max(Od.pollTime, 1e3 / dd.wV / 2)))
            }(this),
            function(dd, Od) {
              if (!Od) return;
              var md = !1,
                Wd = !1,
                Fd = dd => {
                  if (!!dd !== (md = Od === document.pointerLockElement))
                    if (dd) {
                      var Wd = Od.requestPointerLock();
                      Wd && Wd.catch && Wd.catch((dd => {}))
                    } else document.exitPointerLock()
                },
                Rd = dd => {
                  !!dd !== (Wd = Od === document.fullscreenElement) && (dd ? Od.requestFullscreen ? Od.requestFullscreen() : Od.webkitRequestFullscreen && Od.webkitRequestFullscreen() : document.exitFullscreen ? document.exitFullscreen() : document.webkitExitFullscreen && document.webkitExitFullscreen())
                };
              document.addEventListener("pointerlockchange", (Wd => {
                md = Od === document.pointerLockElement, dd.mD(md)
              })), document.addEventListener("fullscreenchange", (md => {
                Wd = Od === document.fullscreenElement, dd.onFullscreenChanged(Wd)
              })), document.addEventListener("pointerlockerror", (Wd => {
                md = Od === document.pointerLockElement, dd.onPointerLockError(Wd)
              })), Object.defineProperty(dd, "tb", {
                get: () => md,
                set: Fd
              }), Object.defineProperty(dd, "fullscreen", {
                get: () => Wd,
                set: Rd
              }), Od.addEventListener("click", (Od => {
                dd.lL && Fd(!0), dd.RP && Rd(!0)
              }));
              var Xd = () => dd.Ip();
              if (window.ResizeObserver) {
                new ResizeObserver(Xd).observe(Od)
              } else window.addEventListener("resize", Xd)
            }(this, dd), this.xt()
          }))
      }
    }

    function Fd() {
      let dd = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 10;
      this.nowObject = performance || Date, this.pollTime = dd, this.renderAccum = 0, this.lastTickStarted = 0, this.lastFrameStarted = 0, this.lastRenderStarted = 0, this.avgTickTime = 2, this.frameCB = null, this.intervalCB = null, this.intervalID = -1
    }
    var Rd = 3,
      Xd = 20;

    function Kd(dd) {
      for (var Od = dd._data, md = 1e3 / dd.wV, Wd = Od.nowObject.now() + Xd, Fd = 0; Od.nowObject.now() >= Od.lastTickStarted + md && Od.nowObject.now() < Wd && ++Fd <= Rd;) dd.FY(md), Od.lastTickStarted += md;
      var Kd = 5 * (md + 5),
        hd = Od.nowObject.now();
      if (hd - Od.lastTickStarted > Kd)
        for (; hd >= Od.lastTickStarted + md;) Od.lastTickStarted += md
    }
  },
  40550: (dd, Od, md) => {
    function Wd(dd, Od, md, Wd, Fd) {
      var Rd = {};
      return Object.keys(Wd).forEach((function(dd) {
        Rd[dd] = Wd[dd]
      })), Rd.enumerable = !!Rd.enumerable, Rd.configurable = !!Rd.configurable, ("value" in Rd || Rd.initializer) && (Rd.writable = !0), Rd = md.slice().reverse().reduce((function(md, Wd) {
        return Wd(dd, Od, md) || md
      }), Rd), Fd && void 0 !== Rd.initializer && (Rd.value = Rd.initializer ? Rd.initializer.call(Fd) : void 0, Rd.initializer = void 0), void 0 === Rd.initializer && (Object.defineProperty(dd, Od, Rd), Rd = null), Rd
    }
    md.d(Od, {
      c: () => Wd
    })
  },
  40546: (dd, Od, md) => {
    function Wd(dd, Od, md, Wd) {
      md && Object.defineProperty(dd, Od, {
        enumerable: md.enumerable,
        configurable: md.configurable,
        writable: md.writable,
        value: md.initializer ? md.initializer.call(Wd) : void 0
      })
    }
    md.d(Od, {
      e: () => Wd
    })
  },
  40260: (dd, Od, md) => {
    md.d(Od, {
      d: () => Rd
    });
    var Wd = md(40262);
    const Fd = (dd, Od, md) => dd ? dd.getClassName && "Mesh" === dd.getClassName() ? null : !dd.getClassName || "SubMesh" !== dd.getClassName() && "PhysicsBody" !== dd.getClassName() ? dd.clone ? dd.clone() : Array.isArray(dd) ? dd.slice() : md && "object" === typeof dd ? {
      ...dd
    } : null : dd.clone(Od) : null;
    class Rd {
      static DeepCopy(dd, Od, md, Rd) {
        let Xd = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
        const Kd = function(dd) {
          const Od = [];
          do {
            const md = Object.getOwnPropertyNames(dd);
            for (const dd of md) - 1 === Od.indexOf(dd) && Od.push(dd)
          } while (dd = Object.getPrototypeOf(dd));
          return Od
        }(dd);
        for (const vd of Kd) {
          if ("_" === vd[0] && (!Rd || -1 === Rd.indexOf(vd))) continue;
          if (vd.endsWith("Observable")) continue;
          if (md && -1 !== md.indexOf(vd)) continue;
          const Kd = dd[vd],
            Qd = typeof Kd;
          if ("function" !== Qd) try {
            if ("object" === Qd)
              if (Kd instanceof Uint8Array) Od[vd] = Uint8Array.from(Kd);
              else if (Kd instanceof Array) {
              if (Od[vd] = [], Kd.length > 0)
                if ("object" == typeof Kd[0])
                  for (let dd = 0; dd < Kd.length; dd++) {
                    const md = Fd(Kd[dd], Od, Xd); - 1 === Od[vd].indexOf(md) && Od[vd].push(md)
                  } else Od[vd] = Kd.slice(0)
            } else Od[vd] = Fd(Kd, Od, Xd);
            else Od[vd] = Kd
          } catch (hd) {
            Wd.c.Warn(hd.message)
          }
        }
      }
    }
  },
  40298: (dd, Od, md) => {
    md.d(Od, {
      d: () => Fd,
      h: () => Rd,
      k: () => Xd,
      m: () => Kd
    });
    var Wd = md(38741);
    class Fd {
      constructor(dd, Od, md) {
        this.gradient = dd, this.color1 = Od, this.color2 = md
      }
      getColorToRef(dd) {
        this.color2 ? Wd.f.LerpToRef(this.color1, this.color2, Math.random(), dd) : dd.Bx(this.color1)
      }
    }
    class Rd {
      constructor(dd, Od) {
        this.gradient = dd, this.color = Od
      }
    }
    class Xd {
      constructor(dd, Od, md) {
        this.gradient = dd, this.factor1 = Od, this.factor2 = md
      }
      getFactor() {
        return void 0 === this.factor2 || this.factor2 === this.factor1 ? this.factor1 : this.factor1 + (this.factor2 - this.factor1) * Math.random()
      }
    }
    class Kd {
      static GetCurrentGradient(dd, Od, md) {
        if (Od[0].gradient > dd) return void md(Od[0], Od[0], 1);
        for (let Fd = 0; Fd < Od.length - 1; Fd++) {
          const Wd = Od[Fd],
            Rd = Od[Fd + 1];
          if (dd >= Wd.gradient && dd <= Rd.gradient) {
            return void md(Wd, Rd, (dd - Wd.gradient) / (Rd.gradient - Wd.gradient))
          }
        }
        const Wd = Od.length - 1;
        md(Od[Wd], Od[Wd], 1)
      }
    }
  },
  40262: (dd, Od, md) => {
    md.d(Od, {
      c: () => Wd
    });
    class Wd {
      static _CheckLimit(dd, Od) {
        let md = Wd._LogLimitOutputs[dd];
        return md ? md.current++ : (md = {
          limit: Od,
          current: 1
        }, Wd._LogLimitOutputs[dd] = md), md.current <= md.limit
      }
      static _GenerateLimitMessage(dd) {
        let Od = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
        const md = Wd._LogLimitOutputs[dd];
        if (!md || !Wd.MessageLimitReached) return;
        const Fd = this._Levels[Od];
        md.current === md.limit && Wd[Fd.name](Wd.MessageLimitReached.replace(/%LIMIT%/g, "" + md.limit).replace(/%TYPE%/g, Fd.name ?? ""))
      }
      static _AddLogEntry(dd) {
        Wd._LogCache = dd + Wd._LogCache, Wd.OnNewCacheEntry && Wd.OnNewCacheEntry(dd)
      }
      static _FormatMessage(dd) {
        const Od = dd => dd < 10 ? "0" + dd : "" + dd,
          md = new Date;
        return "[" + Od(md.getHours()) + ":" + Od(md.getMinutes()) + ":" + Od(md.getSeconds()) + "]: " + dd
      }
      static _LogDisabled(dd, Od) {}
      static _LogEnabled() {
        let dd = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
          Od = arguments.length > 1 ? arguments[1] : void 0,
          md = arguments.length > 2 ? arguments[2] : void 0;
        const Fd = Array.isArray(Od) ? Od[0] : Od;
        if (void 0 !== md && !Wd._CheckLimit(Fd, md)) return;
        const Rd = Wd._FormatMessage(Fd),
          Xd = this._Levels[dd],
          Kd = Array.isArray(Od) ? Od.slice(1) : [];
        Xd.logFunc && Xd.logFunc("BJS - " + Rd, ...Kd);
        const hd = `<div style='color:${Xd.color}'>${Rd}</div><br>`;
        Wd._AddLogEntry(hd), Wd._GenerateLimitMessage(Fd, dd)
      }
      static get LogCache() {
        return Wd._LogCache
      }
      static ClearLogCache() {
        Wd._LogCache = "", Wd._LogLimitOutputs = {}, Wd.errorsCount = 0
      }
      static set LogLevels(dd) {
        Wd.Log = Wd._LogDisabled, Wd.Warn = Wd._LogDisabled, Wd.Error = Wd._LogDisabled;
        const Od = [Wd.MessageLogLevel, Wd.WarningLogLevel, Wd.ErrorLogLevel];
        for (const md of Od)
          if ((dd & md) === md) {
            const dd = this._Levels[md];
            Wd[dd.name] = Wd._LogEnabled.bind(Wd, md)
          }
      }
    }
    Wd.NoneLogLevel = 0, Wd.MessageLogLevel = 1, Wd.WarningLogLevel = 2, Wd.ErrorLogLevel = 4, Wd.AllLogLevel = 7, Wd.MessageLimitReached = "Too many %TYPE%s (%LIMIT%), no more %TYPE%s will be reported for this message.", Wd._LogCache = "", Wd._LogLimitOutputs = {}, Wd._Levels = [{}, {
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
    }], Wd.errorsCount = 0, Wd.Log = Wd._LogEnabled.bind(Wd, Wd.MessageLogLevel), Wd.Warn = Wd._LogEnabled.bind(Wd, Wd.WarningLogLevel), Wd.Error = Wd._LogEnabled.bind(Wd, Wd.ErrorLogLevel)
  },
  40301: (dd, Od, md) => {
    md.d(Od, {
      c: () => Xd
    });
    var Wd = md(38636),
      Fd = md(38663),
      Rd = md(40260);
    class Xd {
      constructor() {
        this.direction1 = new Wd.j(0, 1, 0), this.direction2 = new Wd.j(0, 1, 0), this.minEmitBox = new Wd.j(-.5, -.5, -.5), this.maxEmitBox = new Wd.j(.5, .5, .5)
      }
      startDirectionFunction(dd, Od, md, Rd) {
        const Xd = (0, Fd.RandomRange)(this.direction1.x, this.direction2.x),
          Kd = (0, Fd.RandomRange)(this.direction1.y, this.direction2.y),
          hd = (0, Fd.RandomRange)(this.direction1.z, this.direction2.z);
        if (Rd) return Od.x = Xd, Od.y = Kd, void(Od.z = hd);
        Wd.j.TransformNormalFromFloatsToRef(Xd, Kd, hd, dd, Od)
      }
      startPositionFunction(dd, Od, md, Rd) {
        const Xd = (0, Fd.RandomRange)(this.minEmitBox.x, this.maxEmitBox.x),
          Kd = (0, Fd.RandomRange)(this.minEmitBox.y, this.maxEmitBox.y),
          hd = (0, Fd.RandomRange)(this.minEmitBox.z, this.maxEmitBox.z);
        if (Rd) return Od.x = Xd, Od.y = Kd, void(Od.z = hd);
        Wd.j.TransformCoordinatesFromFloatsToRef(Xd, Kd, hd, dd, Od)
      }
      clone() {
        const dd = new Xd;
        return Rd.d.DeepCopy(this, dd), dd
      }
      applyToShader(dd) {
        dd.setVector3("direction1", this.direction1), dd.setVector3("direction2", this.direction2), dd.setVector3("minEmitBox", this.minEmitBox), dd.setVector3("maxEmitBox", this.maxEmitBox)
      }
      buildUniformLayout(dd) {
        dd.addUniform("direction1", 3), dd.addUniform("direction2", 3), dd.addUniform("minEmitBox", 3), dd.addUniform("maxEmitBox", 3)
      }
      getEffectDefines() {
        return "#define BOXEMITTER"
      }
      getClassName() {
        return "BoxParticleEmitter"
      }
      serialize() {
        const dd = {};
        return dd.type = this.getClassName(), dd.direction1 = this.direction1.RRd(), dd.direction2 = this.direction2.RRd(), dd.minEmitBox = this.minEmitBox.RRd(), dd.maxEmitBox = this.maxEmitBox.RRd(), dd
      }
      parse(dd) {
        Wd.j.FromArrayToRef(dd.direction1, 0, this.direction1), Wd.j.FromArrayToRef(dd.direction2, 0, this.direction2), Wd.j.FromArrayToRef(dd.minEmitBox, 0, this.minEmitBox), Wd.j.FromArrayToRef(dd.maxEmitBox, 0, this.maxEmitBox)
      }
    }
  },
  40258: (dd, Od, md) => {
    md.d(Od, {
      b: () => Kd,
      e: () => Xd
    });
    var Wd = md(38636),
      Fd = md(38663),
      Rd = md(40260);
    class Xd {
      constructor() {
        let dd = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
          Od = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
          md = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1,
          Fd = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
        this.radius = dd, this.height = Od, this.radiusRange = md, this.directionRandomizer = Fd, this._tempVector = Wd.j.Zero()
      }
      startDirectionFunction(dd, Od, md, Rd, Xd) {
        md.position.subtractToRef(dd.getTranslation(), this._tempVector), this._tempVector.normalize(), Wd.j.TransformNormalToRef(this._tempVector, Xd, this._tempVector);
        const Kd = (0, Fd.RandomRange)(-this.directionRandomizer / 2, this.directionRandomizer / 2);
        let hd = Math.atan2(this._tempVector.x, this._tempVector.z);
        hd += (0, Fd.RandomRange)(-Math.PI / 2, Math.PI / 2) * this.directionRandomizer, this._tempVector.y = Kd, this._tempVector.x = Math.sin(hd), this._tempVector.z = Math.cos(hd), this._tempVector.normalize(), Rd ? Od.Bx(this._tempVector) : Wd.j.TransformNormalFromFloatsToRef(this._tempVector.x, this._tempVector.y, this._tempVector.z, dd, Od)
      }
      startPositionFunction(dd, Od, md, Rd) {
        const Xd = (0, Fd.RandomRange)(-this.height / 2, this.height / 2),
          Kd = (0, Fd.RandomRange)(0, 2 * Math.PI),
          hd = (0, Fd.RandomRange)((1 - this.radiusRange) * (1 - this.radiusRange), 1),
          vd = Math.sqrt(hd) * this.radius,
          Qd = vd * Math.cos(Kd),
          td = vd * Math.sin(Kd);
        Rd ? Od.KOd(Qd, Xd, td) : Wd.j.TransformCoordinatesFromFloatsToRef(Qd, Xd, td, dd, Od)
      }
      clone() {
        const dd = new Xd(this.radius, this.directionRandomizer);
        return Rd.d.DeepCopy(this, dd), dd
      }
      applyToShader(dd) {
        dd.setFloat("radius", this.radius), dd.setFloat("height", this.height), dd.setFloat("radiusRange", this.radiusRange), dd.setFloat("directionRandomizer", this.directionRandomizer)
      }
      buildUniformLayout(dd) {
        dd.addUniform("radius", 1), dd.addUniform("height", 1), dd.addUniform("radiusRange", 1), dd.addUniform("directionRandomizer", 1)
      }
      getEffectDefines() {
        return "#define CYLINDEREMITTER"
      }
      getClassName() {
        return "CylinderParticleEmitter"
      }
      serialize() {
        const dd = {};
        return dd.type = this.getClassName(), dd.radius = this.radius, dd.height = this.height, dd.radiusRange = this.radiusRange, dd.directionRandomizer = this.directionRandomizer, dd
      }
      parse(dd) {
        this.radius = dd.radius, this.height = dd.height, this.radiusRange = dd.radiusRange, this.directionRandomizer = dd.directionRandomizer
      }
    }
    class Kd extends Xd {
      constructor() {
        let dd = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
          Od = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
          md = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1,
          Fd = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : new Wd.j(0, 1, 0),
          Rd = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : new Wd.j(0, 1, 0);
        super(dd, Od, md), this.direction1 = Fd, this.direction2 = Rd
      }
      startDirectionFunction(dd, Od, md, Rd) {
        const Xd = (0, Fd.RandomRange)(this.direction1.x, this.direction2.x),
          Kd = (0, Fd.RandomRange)(this.direction1.y, this.direction2.y),
          hd = (0, Fd.RandomRange)(this.direction1.z, this.direction2.z);
        Rd ? Od.KOd(Xd, Kd, hd) : Wd.j.TransformNormalFromFloatsToRef(Xd, Kd, hd, dd, Od)
      }
      clone() {
        const dd = new Kd(this.radius, this.height, this.radiusRange, this.direction1, this.direction2);
        return Rd.d.DeepCopy(this, dd), dd
      }
      applyToShader(dd) {
        dd.setFloat("radius", this.radius), dd.setFloat("height", this.height), dd.setFloat("radiusRange", this.radiusRange), dd.setVector3("direction1", this.direction1), dd.setVector3("direction2", this.direction2)
      }
      buildUniformLayout(dd) {
        dd.addUniform("radius", 1), dd.addUniform("height", 1), dd.addUniform("radiusRange", 1), dd.addUniform("direction1", 3), dd.addUniform("direction2", 3)
      }
      getEffectDefines() {
        return "#define CYLINDEREMITTER\n#define DIRECTEDCYLINDEREMITTER"
      }
      getClassName() {
        return "CylinderDirectedParticleEmitter"
      }
      serialize() {
        const dd = super.serialize();
        return dd.direction1 = this.direction1.RRd(), dd.direction2 = this.direction2.RRd(), dd
      }
      parse(dd) {
        super.parse(dd), Wd.j.FromArrayToRef(dd.direction1, 0, this.direction1), Wd.j.FromArrayToRef(dd.direction2, 0, this.direction2)
      }
    }
  },
  40368: (dd, Od, md) => {
    md.d(Od, {
      c: () => td
    });
    const Wd = .5 * (Math.sqrt(3) - 1),
      Fd = (3 - Math.sqrt(3)) / 6,
      Rd = 1 / 3,
      Xd = 1 / 6,
      Kd = (Math.sqrt(5) - 1) / 4,
      hd = (5 - Math.sqrt(5)) / 20,
      vd = new Float32Array([1, 1, 0, -1, 1, 0, 1, -1, 0, -1, -1, 0, 1, 0, 1, -1, 0, 1, 1, 0, -1, -1, 0, -1, 0, 1, 1, 0, -1, 1, 0, 1, -1, 0, -1, -1]),
      Qd = new Float32Array([0, 1, 1, 1, 0, 1, 1, -1, 0, 1, -1, 1, 0, 1, -1, -1, 0, -1, 1, 1, 0, -1, 1, -1, 0, -1, -1, 1, 0, -1, -1, -1, 1, 0, 1, 1, 1, 0, 1, -1, 1, 0, -1, 1, 1, 0, -1, -1, -1, 0, 1, 1, -1, 0, 1, -1, -1, 0, -1, 1, -1, 0, -1, -1, 1, 1, 0, 1, 1, 1, 0, -1, 1, -1, 0, 1, 1, -1, 0, -1, -1, 1, 0, 1, -1, 1, 0, -1, -1, -1, 0, 1, -1, -1, 0, -1, 1, 1, 1, 0, 1, 1, -1, 0, 1, -1, 1, 0, 1, -1, -1, 0, -1, 1, 1, 0, -1, 1, -1, 0, -1, -1, 1, 0, -1, -1, -1, 0]);
    const td = class {
      constructor() {
        let dd = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Math.random;
        const Od = "function" == typeof dd ? dd : function(dd) {
          let Od = 0,
            md = 0,
            Wd = 0,
            Fd = 1;
          const Rd = function() {
            let dd = 4022871197;
            return function(Od) {
              Od = Od.toString();
              for (let md = 0; md < Od.length; md++) {
                dd += Od.charCodeAt(md);
                let Wd = .02519603282416938 * dd;
                dd = Wd >>> 0, Wd -= dd, Wd *= dd, dd = Wd >>> 0, Wd -= dd, dd += 4294967296 * Wd
              }
              return 2.3283064365386963e-10 * (dd >>> 0)
            }
          }();
          Od = Rd(" "), md = Rd(" "), Wd = Rd(" "), Od -= Rd(dd), Od < 0 && (Od += 1);
          md -= Rd(dd), md < 0 && (md += 1);
          Wd -= Rd(dd), Wd < 0 && (Wd += 1);
          return function() {
            const dd = 2091639 * Od + 2.3283064365386963e-10 * Fd;
            return Od = md, md = Wd, Wd = dd - (Fd = 0 | dd)
          }
        }(dd);
        this.p = function(dd) {
          const Od = new Uint8Array(256);
          for (let md = 0; md < 256; md++) Od[md] = md;
          for (let md = 0; md < 255; md++) {
            const Wd = md + ~~(dd() * (256 - md)),
              Fd = Od[md];
            Od[md] = Od[Wd], Od[Wd] = Fd
          }
          return Od
        }(Od), this.perm = new Uint8Array(512), this.permMod12 = new Uint8Array(512);
        for (let md = 0; md < 512; md++) this.perm[md] = this.p[255 & md], this.permMod12[md] = this.perm[md] % 12
      }
      noise2D(dd, Od) {
        const md = this.permMod12,
          Rd = this.perm;
        let Xd = 0,
          Kd = 0,
          hd = 0;
        const Qd = (dd + Od) * Wd,
          td = Math.floor(dd + Qd),
          od = Math.floor(Od + Qd),
          Nd = (td + od) * Fd,
          qd = dd - (td - Nd),
          Hd = Od - (od - Nd);
        let yd, bd;
        qd > Hd ? (yd = 1, bd = 0) : (yd = 0, bd = 1);
        const Td = qd - yd + Fd,
          pd = Hd - bd + Fd,
          Yd = qd - 1 + 2 * Fd,
          gd = Hd - 1 + 2 * Fd,
          wd = 255 & td,
          Ed = 255 & od;
        let Jd = .5 - qd * qd - Hd * Hd;
        if (Jd >= 0) {
          const dd = 3 * md[wd + Rd[Ed]];
          Jd *= Jd, Xd = Jd * Jd * (vd[dd] * qd + vd[dd + 1] * Hd)
        }
        let Ud = .5 - Td * Td - pd * pd;
        if (Ud >= 0) {
          const dd = 3 * md[wd + yd + Rd[Ed + bd]];
          Ud *= Ud, Kd = Ud * Ud * (vd[dd] * Td + vd[dd + 1] * pd)
        }
        let xd = .5 - Yd * Yd - gd * gd;
        if (xd >= 0) {
          const dd = 3 * md[wd + 1 + Rd[Ed + 1]];
          xd *= xd, hd = xd * xd * (vd[dd] * Yd + vd[dd + 1] * gd)
        }
        return 70 * (Xd + Kd + hd)
      }
      noise3D(dd, Od, md) {
        const Wd = this.permMod12,
          Fd = this.perm;
        let Kd, hd, Qd, td;
        const od = (dd + Od + md) * Rd,
          Nd = Math.floor(dd + od),
          qd = Math.floor(Od + od),
          Hd = Math.floor(md + od),
          yd = (Nd + qd + Hd) * Xd,
          bd = dd - (Nd - yd),
          Td = Od - (qd - yd),
          pd = md - (Hd - yd);
        let Yd, gd, wd, Ed, Jd, Ud;
        bd >= Td ? Td >= pd ? (Yd = 1, gd = 0, wd = 0, Ed = 1, Jd = 1, Ud = 0) : bd >= pd ? (Yd = 1, gd = 0, wd = 0, Ed = 1, Jd = 0, Ud = 1) : (Yd = 0, gd = 0, wd = 1, Ed = 1, Jd = 0, Ud = 1) : Td < pd ? (Yd = 0, gd = 0, wd = 1, Ed = 0, Jd = 1, Ud = 1) : bd < pd ? (Yd = 0, gd = 1, wd = 0, Ed = 0, Jd = 1, Ud = 1) : (Yd = 0, gd = 1, wd = 0, Ed = 1, Jd = 1, Ud = 0);
        const xd = bd - Yd + Xd,
          Bd = Td - gd + Xd,
          Sd = pd - wd + Xd,
          sd = bd - Ed + 2 * Xd,
          ud = Td - Jd + 2 * Xd,
          Vd = pd - Ud + 2 * Xd,
          Ad = bd - 1 + .5,
          rd = Td - 1 + .5,
          Gd = pd - 1 + .5,
          nd = 255 & Nd,
          Ld = 255 & qd,
          Pd = 255 & Hd;
        let zd = .6 - bd * bd - Td * Td - pd * pd;
        if (zd < 0) Kd = 0;
        else {
          const dd = 3 * Wd[nd + Fd[Ld + Fd[Pd]]];
          zd *= zd, Kd = zd * zd * (vd[dd] * bd + vd[dd + 1] * Td + vd[dd + 2] * pd)
        }
        let cd = .6 - xd * xd - Bd * Bd - Sd * Sd;
        if (cd < 0) hd = 0;
        else {
          const dd = 3 * Wd[nd + Yd + Fd[Ld + gd + Fd[Pd + wd]]];
          cd *= cd, hd = cd * cd * (vd[dd] * xd + vd[dd + 1] * Bd + vd[dd + 2] * Sd)
        }
        let jd = .6 - sd * sd - ud * ud - Vd * Vd;
        if (jd < 0) Qd = 0;
        else {
          const dd = 3 * Wd[nd + Ed + Fd[Ld + Jd + Fd[Pd + Ud]]];
          jd *= jd, Qd = jd * jd * (vd[dd] * sd + vd[dd + 1] * ud + vd[dd + 2] * Vd)
        }
        let Dd = .6 - Ad * Ad - rd * rd - Gd * Gd;
        if (Dd < 0) td = 0;
        else {
          const dd = 3 * Wd[nd + 1 + Fd[Ld + 1 + Fd[Pd + 1]]];
          Dd *= Dd, td = Dd * Dd * (vd[dd] * Ad + vd[dd + 1] * rd + vd[dd + 2] * Gd)
        }
        return 32 * (Kd + hd + Qd + td)
      }
      noise4D(dd, Od, md, Wd) {
        const Fd = this.perm;
        let Rd, Xd, vd, td, od;
        const Nd = (dd + Od + md + Wd) * Kd,
          qd = Math.floor(dd + Nd),
          Hd = Math.floor(Od + Nd),
          yd = Math.floor(md + Nd),
          bd = Math.floor(Wd + Nd),
          Td = (qd + Hd + yd + bd) * hd,
          pd = dd - (qd - Td),
          Yd = Od - (Hd - Td),
          gd = md - (yd - Td),
          wd = Wd - (bd - Td);
        let Ed = 0,
          Jd = 0,
          Ud = 0,
          xd = 0;
        pd > Yd ? Ed++ : Jd++, pd > gd ? Ed++ : Ud++, pd > wd ? Ed++ : xd++, Yd > gd ? Jd++ : Ud++, Yd > wd ? Jd++ : xd++, gd > wd ? Ud++ : xd++;
        const Bd = Ed >= 3 ? 1 : 0,
          Sd = Jd >= 3 ? 1 : 0,
          sd = Ud >= 3 ? 1 : 0,
          ud = xd >= 3 ? 1 : 0,
          Vd = Ed >= 2 ? 1 : 0,
          Ad = Jd >= 2 ? 1 : 0,
          rd = Ud >= 2 ? 1 : 0,
          Gd = xd >= 2 ? 1 : 0,
          nd = Ed >= 1 ? 1 : 0,
          Ld = Jd >= 1 ? 1 : 0,
          Pd = Ud >= 1 ? 1 : 0,
          zd = xd >= 1 ? 1 : 0,
          cd = pd - Bd + hd,
          jd = Yd - Sd + hd,
          Dd = gd - sd + hd,
          ed = wd - ud + hd,
          Id = pd - Vd + 2 * hd,
          ld = Yd - Ad + 2 * hd,
          Cd = gd - rd + 2 * hd,
          Zd = wd - Gd + 2 * hd,
          kd = pd - nd + 3 * hd,
          fd = Yd - Ld + 3 * hd,
          Md = gd - Pd + 3 * hd,
          dO = wd - zd + 3 * hd,
          OO = pd - 1 + 4 * hd,
          mO = Yd - 1 + 4 * hd,
          WO = gd - 1 + 4 * hd,
          FO = wd - 1 + 4 * hd,
          RO = 255 & qd,
          XO = 255 & Hd,
          KO = 255 & yd,
          hO = 255 & bd;
        let vO = .6 - pd * pd - Yd * Yd - gd * gd - wd * wd;
        if (vO < 0) Rd = 0;
        else {
          const dd = Fd[RO + Fd[XO + Fd[KO + Fd[hO]]]] % 32 * 4;
          vO *= vO, Rd = vO * vO * (Qd[dd] * pd + Qd[dd + 1] * Yd + Qd[dd + 2] * gd + Qd[dd + 3] * wd)
        }
        let QO = .6 - cd * cd - jd * jd - Dd * Dd - ed * ed;
        if (QO < 0) Xd = 0;
        else {
          const dd = Fd[RO + Bd + Fd[XO + Sd + Fd[KO + sd + Fd[hO + ud]]]] % 32 * 4;
          QO *= QO, Xd = QO * QO * (Qd[dd] * cd + Qd[dd + 1] * jd + Qd[dd + 2] * Dd + Qd[dd + 3] * ed)
        }
        let tO = .6 - Id * Id - ld * ld - Cd * Cd - Zd * Zd;
        if (tO < 0) vd = 0;
        else {
          const dd = Fd[RO + Vd + Fd[XO + Ad + Fd[KO + rd + Fd[hO + Gd]]]] % 32 * 4;
          tO *= tO, vd = tO * tO * (Qd[dd] * Id + Qd[dd + 1] * ld + Qd[dd + 2] * Cd + Qd[dd + 3] * Zd)
        }
        let oO = .6 - kd * kd - fd * fd - Md * Md - dO * dO;
        if (oO < 0) td = 0;
        else {
          const dd = Fd[RO + nd + Fd[XO + Ld + Fd[KO + Pd + Fd[hO + zd]]]] % 32 * 4;
          oO *= oO, td = oO * oO * (Qd[dd] * kd + Qd[dd + 1] * fd + Qd[dd + 2] * Md + Qd[dd + 3] * dO)
        }
        let NO = .6 - OO * OO - mO * mO - WO * WO - FO * FO;
        if (NO < 0) od = 0;
        else {
          const dd = Fd[RO + 1 + Fd[XO + 1 + Fd[KO + 1 + Fd[hO + 1]]]] % 32 * 4;
          NO *= NO, od = NO * NO * (Qd[dd] * OO + Qd[dd + 1] * mO + Qd[dd + 2] * WO + Qd[dd + 3] * FO)
        }
        return 27 * (Rd + Xd + vd + td + od)
      }
    }
  }
};
Object.freeze(modules);
for (const dd in modules) Object.freeze(modules[dd]);