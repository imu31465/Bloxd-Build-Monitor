export const id = 106;
export const ids = [106];
export const modules = {
  37752: (yb, bb, Wy) => {
    Wy.d(bb, {
      c: () => fy,
      f: () => Zy
    });
    var Uy = Wy(23);
    let hy = !1;

    function fy() {
      return hy
    }

    function Zy(yb) {
      hy !== yb && (hy = yb, Uy.g.EZ("replayViewer|videoExportChanged"))
    }
  },
  37639: (yb, bb, Wy) => {
    Wy.d(bb, {
      c: () => fy
    });
    var Uy = Wy(23),
      hy = Wy(1595);

    function fy(yb) {
      let {
        taskId: bb,
        progress: Wy
      } = yb;
      const Uy = hy.c.get("_tasks");
      null !== Uy && void 0 !== Uy && Uy[bb] && hy.c.apply({
        _tasks: {
          ...Uy,
          [bb]: {
            ...Uy[bb],
            progress: Wy
          }
        }
      })
    }
    Uy.g.subscribe("clientTaskProgress", (yb => {
      fy(yb)
    }))
  },
  37761: (yb, bb, Wy) => {
    Wy.d(bb, {
      c: () => Sy,
      g: () => Ey,
      i: () => sy
    });
    var Uy = Wy(2444);
    const hy = 0,
      fy = 2,
      Zy = 3,
      cb = 4;
    class Py {
      constructor(yb, bb) {
        this.width = yb, this.Hy = bb, this.data = void 0, this.next = 0, this.size = 0, this.data = new Float64Array(yb * bb)
      }
      push(yb) {
        let bb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        const Wy = this.data.subarray(this.next * this.width, (this.next + 1) * this.width);
        for (let Uy = 0; Uy < this.width; Uy++) Wy[Uy] = yb[bb + Uy];
        return this.next = (this.next + 1) % this.Hy, this.size = Math.min(this.size + 1, this.Hy), Wy
      }
      lines() {
        const yb = [],
          bb = (this.next - this.size + this.Hy) % this.Hy;
        for (let Wy = 0; Wy < this.size; Wy++) {
          const Uy = (bb + Wy) % this.Hy * this.width;
          yb.push(Array.from(this.data.subarray(Uy, Uy + this.width)).join(","))
        }
        return yb
      }
    }

    function oy(yb) {
      return Number.isFinite(yb) ? String(Math.round(10 * yb) / 10) : String(yb)
    }

    function By(yb) {
      return Number.isFinite(yb) ? yb.toFixed(1) : String(yb)
    }
    class Ky {
      constructor() {
        this.frames = 0, this.looked = 0, this.idle = 0, this.VUy = 0, this.pastLimit = 0, this.lockSkips = 0, this.uZ = 0, this.lost = 0, this.dropped = 0, this.longFrames = 0, this.dtMin = 1 / 0, this.dtMax = 0, this.dtSum = 0, this.raw = [0, 0], this.turned = [0, 0], this.peakRate = 0, this.events = 0, this.eventMax = 0, this.bigEvents = 0, this.outliers = 0, this.eventLines = 0, this.suppressed = 0
      }
    }
    class ey {
      constructor() {
        var yb = this;
        this.tally = new Ky, this.records = new Py(10, 3600), this.events = new Py(4, 12e3), this.event = new Float64Array(4), this.take = null, this.client = "js", this.started = !1, this.record = function(bb) {
          let Wy = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
          const [Uy, Py, Ky, ey, qb, sy, Sy, Ey, ly, mb] = yb.records.push(bb, Wy), Cy = yb.tally;
          switch (Cy.frames++, Sy) {
            case hy:
              return void Cy.idle++;
            case cb:
              return void Cy.uZ++;
            case Zy:
              return Cy.lockSkips++, void(0 === Ky && 0 === ey || yb.outlier(`lock skip dropped raw (${oy(Ky)}, ${oy(ey)}) at ${By(Uy)} ms`))
          }
          Cy.looked++, Number.isFinite(Py) && (Cy.dtMin = Math.min(Cy.dtMin, Py), Cy.dtMax = Math.max(Cy.dtMax, Py), Cy.dtSum += Py, Py > 0 && (Cy.peakRate = Math.max(Cy.peakRate, Math.hypot(qb, sy) / Py))), Cy.raw[0] += Ky, Cy.raw[1] += ey, Cy.turned[0] += qb, Cy.turned[1] += sy;
          const Ty = Math.abs(Ky) > mb || Math.abs(ey) > mb,
            Vy = `raw (${oy(Ky)}, ${oy(ey)}) over ${By(Py)} ms, limit ${oy(mb)}, filter v (${Ey.toFixed(3)}, ${ly.toFixed(3)}) px/ms, at ${By(Uy)} ms`;
          Sy === fy ? (Cy.VUy++, yb.outlier(`spike put right: ${Vy} -> turned (${oy(qb)}, ${oy(sy)})`)) : Ty ? (Cy.pastLimit++, yb.outlier(`kept past limit: ${Vy}`)) : Py > 50 && (Cy.longFrames++, yb.outlier(`long frame: ${Vy}, turned in full`))
        }, this.onMouseMove = yb => {
          const bb = this.tally,
            {
              movementX: Wy,
              movementY: Uy
            } = yb;
          bb.events++;
          const hy = Math.max(Math.abs(Wy), Math.abs(Uy));
          bb.eventMax = Math.max(bb.eventMax, hy);
          const fy = null !== document.pointerLockElement,
            Zy = this.event;
          Zy[0] = yb.timeStamp, Zy[1] = Wy, Zy[2] = Uy, Zy[3] = fy ? 1 : 0, this.events.push(Zy), hy >= 200 && (bb.bigEvents++, this.eventOutlier(`big mousemove (${Wy}, ${Uy}) at ${By(yb.timeStamp)} ms, lock ${fy?"kW":"free"}`))
        }, this.onLockChange = () => {
          const yb = document.pointerLockElement;
          (0, Uy.h)("look", `pointer lock ${yb?`gained (${yb.tagName.toLowerCase()})`:"lost"} at ${By(performance.now())} ms`)
        }, this.onLockError = () => {
          (0, Uy.h)("look", `pointer lock request failed at ${By(performance.now())} ms`)
        }, this.onVisibility = () => {
          (0, Uy.h)("look", `page ${document.visibilityState} at ${By(performance.now())} ms`)
        }, this.flush = () => {
          this.takeRecords();
          const yb = this.tally;
          if (this.tally = new Ky, 0 === yb.events && 0 === yb.raw[0] && 0 === yb.raw[1] && 0 === yb.lockSkips && 0 === yb.VUy && 0 === yb.dropped) return;
          const bb = yb.looked > 0 ? yb.dtSum / yb.looked : NaN,
            Wy = [`${yb.frames} frames (${yb.looked} looked, ${yb.idle} idle${"wasm"===this.client?`, ${yb.uZ} carried`:""})`, `dt avg ${By(bb)} min ${By(yb.dtMin)} max ${By(yb.dtMax)}, ${yb.longFrames} long`, `${yb.events} mousemoves (max ${oy(yb.eventMax)} px, ${yb.bigEvents} big)`, `raw (${oy(yb.raw[0])}, ${oy(yb.raw[1])}) turned (${oy(yb.turned[0])}, ${oy(yb.turned[1])})`, `peak ${yb.peakRate.toFixed(2)} px/ms`, `put right ${yb.VUy}, past limit ${yb.pastLimit}, lock skips ${yb.lockSkips}`, "lock " + (document.pointerLockElement ? "kW" : "free")];
          yb.dropped > 0 && Wy.push(`${yb.dropped} doubled spike copies dropped`), yb.lost > 0 && Wy.push(`${yb.lost} records lost`), yb.suppressed > 0 && Wy.push(`${yb.suppressed} outlier lines not shown`), (0, Uy.h)("look", `1s: ${Wy.join("; ")}`)
        }, this.dump = () => [`look records (${this.client}): nowMs,dtMs,rawX,rawY,turnedX,turnedY,outcome,vX,vY,limit`, ...this.records.lines(), "mousemove events: timeStamp,movementX,movementY,locked", ...this.events.lines()].join("\n")
      }
      start(yb, bb) {
        this.client = yb, this.take = bb;
        const {
          screen: Wy
        } = window;
        (0, Uy.h)("look", `start: ${yb} client, dpr ${window.devicePixelRatio}, screen ${Wy.width}x${Wy.height}, pointer lock ${document.pointerLockElement?"kW":"free"}`), this.started || (this.started = !0, window.addEventListener("mousemove", this.onMouseMove, {
          capture: !0,
          passive: !0
        }), document.addEventListener("pointerlockchange", this.onLockChange), document.addEventListener("pointerlockerror", this.onLockError), document.addEventListener("visibilitychange", this.onVisibility), setInterval(this.flush, 1e3), (0, Uy.f)("look", this.dump))
      }
      outlier(yb) {
        const bb = this.tally;
        bb.outliers >= 20 ? bb.suppressed++ : (bb.outliers++, (0, Uy.h)("look", yb))
      }
      eventOutlier(yb) {
        const bb = this.tally;
        bb.eventLines >= 10 ? bb.suppressed++ : (bb.eventLines++, (0, Uy.h)("look", yb))
      }
      takeRecords() {
        var yb;
        const bb = null === (yb = this.take) || void 0 === yb ? void 0 : yb.call(this);
        if (bb && bb.length >= 2) {
          this.tally.lost += bb[0], this.tally.dropped += bb[1];
          for (let yb = 2; yb + 10 <= bb.length; yb += 10) this.record(bb, yb)
        }
      }
      droppedCopy() {
        this.tally.dropped++
      }
      endTake() {
        this.takeRecords(), this.take = null
      }
    }
    let qb = null;

    function sy(yb) {
      let bb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
      return qb ??= new ey, qb.start(yb, bb), qb.record
    }

    function Sy() {
      var yb;
      null === (yb = qb) || void 0 === yb || yb.endTake()
    }

    function Ey() {
      var yb;
      null === (yb = qb) || void 0 === yb || yb.droppedCopy()
    }
  },
  37633: (yb, bb, Wy) => {
    Wy.d(bb, {
      c: () => Fb,
      g: () => Hb,
      j: () => aW
    });
    var Uy = Wy(2977),
      hy = Wy(167),
      fy = Wy(552),
      Zy = Wy(33),
      cb = Wy(2234),
      Py = Wy(3050),
      oy = Wy(3036),
      By = Wy(1080);
    const Ky = new WeakMap;
    class ey {
      constructor(yb, bb) {
        let Wy = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {
          OEy: !0
        };
        this.callbacks = bb, this.options = Wy, this.eoy = void 0, this.sessionId = void 0, this.jG = [], this.REy = !1, this.rh = !1, this.vly = void 0, this.rG = 0, this.SKy = 0, this.ily = (yb, bb) => {
          if (this.rh) return;
          const Wy = Number(yb);
          this.REy ? this.MEy(Wy, bb) : this.jG.push({
            id: Wy,
            payload: bb
          })
        }, this.dispose = () => {
          this.rh || (this.rh = !0, Ky.delete(this), this.jG.length = 0, this.vly())
        }, this.eoy = yb, this.sessionId = yb.sessionId, Ky.set(this, []), this.vly = this.YEy()
      }
      XEy(yb) {
        this.vly(), this.eoy = yb, this.sessionId = yb.sessionId, this.rG = 0, this.SKy = 0, this.vly = this.YEy()
      }
      get NJ() {
        return this.SKy
      }
      YEy() {
        const yb = this.eoy.Gl("*", this.ily);
        return this.options.OEy && this.eoy.Rl(this.dispose), yb
      }
      MEy(yb, bb) {
        try {
          (0, Py.cc)(yb) && (bb = (0, Py.c)(yb, oy.uU.from(bb)));
          const Wy = Ky.get(this)[yb];
          if ("function" !== typeof Wy) {
            if (this.callbacks.nEy) return void this.callbacks.nEy(yb, bb);
            throw new Error(`No onMessage handler registered for message id ${yb}`)
          }
          Wy(bb)
        } catch (Wy) {
          this.callbacks.uEy(`Error in onMessage ${yb} with payload ${JSON.stringify(bb)}`, Wy)
        } finally {
          this.rG++
        }
      }
      rly() {
        for (const {
            id: yb,
            payload: bb
          }
          of this.jG) {
          if (this.rh) break;
          this.MEy(yb, bb)
        }
        this.jG.length = 0
      }
      Koy() {
        return this.rh
      }
      HEy() {
        if (this.REy || this.rh) throw new Error("Trying to getOnMessageRegistrationHandler after registration finished");
        return {
          Gl: (yb, bb) => {
            if (this.REy || this.rh) throw new Error("Trying to call onMessage after registration finished");
            this.Gl(yb, bb)
          },
          finishRegistration: () => {
            if (this.rh) throw new Error("Cannot finish message registration after disposal");
            this.REy = !0, this.rly()
          }
        }
      }
      Gl(yb, bb) {
        var Wy, Uy;
        null === (Wy = (Uy = this.callbacks).aly) || void 0 === Wy || Wy.call(Uy);
        const hy = Ky.get(this);
        for (; yb > hy.length;) hy[hy.length] = null;
        hy[yb] = bb
      }
      send(yb, bb) {
        this.FEy(), (0, By.F)(bb) ? this.eoy.nG(yb, bb) : this.eoy.send(yb, bb)
      }
      FEy() {
        var yb, bb;
        (this.SKy++, 5 === qb++) && (null === (yb = (bb = this.callbacks).aly) || void 0 === yb || yb.call(bb), qb = 0)
      }
      XB() {
        this.dispose(), this.eoy.XB()
      }
      qh() {
        this.dispose(), this.eoy.qh()
      }
    }
    let qb = 0;
    var sy = Wy(2990);
    class Sy extends ey {
      constructor(yb) {
        super(yb, {
          aly: () => {
            (0, Zy.k)(!0) && (0, Uy.HJ)()
          },
          uEy: (yb, bb) => {
            var Wy;
            null === (Wy = (0, cb.g)()) || void 0 === Wy || Wy.Qh(yb, bb)
          }
        }, {
          OEy: !1
        }), (0, sy.f)(yb)
      }
      sG(yb, bb) {
        return !!(0, sy.k)((0, sy.c)(), this.eoy, yb, bb) && (this.FEy(), !0)
      }
      XEy(yb) {
        this.pEy(), super.XEy(yb), (0, sy.f)(yb)
      }
      XB() {
        super.XB(), this.pEy()
      }
      pEy() {
        this.eoy.nB.bP.Qby = void 0
      }
    }
    var Ey = Wy(23),
      ly = Wy(1595),
      mb = Wy(1496),
      Cy = Wy(35269);

    function Ty(yb, bb, Wy, Uy, hy) {
      let fy = arguments.length > 5 && void 0 !== arguments[5] && arguments[5];
      if (!yb.Km.PPy(yb.eWy)) return console.log("Got resync inven but don't have inven component"), void bb.acknowledge(Uy);
      fy && console.error("Had to sync inven"), bb.RZy(Uy, hy) && Wy.EZ("chestToggleFromServer", !1, !0), Wy.EZ("syncedInvenFromServer")
    }
    var Vy = Wy(37639),
      Jy = Wy(37641),
      gb = Wy(36701),
      Gy = Wy(36463),
      Oy = Wy(547),
      Ry = Wy(37107);

    function vb(yb, bb, Wy) {
      const Uy = function(yb) {
          const bb = new Int32Array(yb.length * Ry.g);
          return yb.forEach(((yb, Wy) => {
            const Uy = Wy * Ry.g;
            if (4 === yb.length) {
              const [Wy, hy, fy, Zy] = yb;
              bb.set([Wy, hy, fy, Wy, hy, fy, Zy], Uy)
            } else {
              const [Wy, hy, fy, Zy, cb, Py, oy] = yb;
              bb.set([Wy, fy, cb, hy, Zy, Py, oy], Uy)
            }
          })), bb
        }(Wy),
        hy = (bb, Wy, Uy, hy) => {
          yb.setBlockNoMulti(bb, Wy, Uy, hy, !0)
        };
      yb.client.gameRecorder.isCapturing() ? (0, Ry.qb)(Uy, (0, Ry.ob)(Uy), hy) : yb.lb.Kb.sUy(Uy, {
        lUy: hy,
        isHookId: bb => yb.blockChangeHasHooks(bb),
        watched: () => function(yb, bb, Wy) {
          const Uy = [],
            hy = (yb, bb, Wy) => {
              Uy.push(yb, bb, Wy)
            },
            fy = new Set;
          for (let Zy = 0; Zy < Wy.length; Zy += Ry.g)
            for (let bb = (0, Oy.K)(Wy[Zy]); bb <= (0, Oy.K)(Wy[Zy + 3]); bb++)
              for (let Uy = (0, Oy.K)(Wy[Zy + 1]); Uy <= (0, Oy.K)(Wy[Zy + 4]); Uy++)
                for (let cb = (0, Oy.K)(Wy[Zy + 2]); cb <= (0, Oy.K)(Wy[Zy + 5]); cb++) {
                  const Wy = `${bb}|${Uy}|${cb}`;
                  fy.has(Wy) || (fy.add(Wy), yb.blockDataOwner.forEachDataCell(bb, Uy, cb, hy))
                }
          return bb.forEachCell(hy), Int32Array.from(Uy)
        }(yb, bb, Uy)
      }), yb.lb.qPy()
    }
    var ib = Wy(36232),
      My = Wy(37650),
      Yy = Wy(37655),
      Xy = Wy(865),
      ny = Wy(1597);
    var uy = Wy(3722);

    function rb(yb) {
      const bb = yb.Kb;
      let Wy = 0,
        fy = -1,
        Zy = -1 / 0,
        cb = null,
        oy = !0;
      const By = () => {
        if (++Wy % 10 !== 0) return;
        const By = (0, Uy.getLastReceivedPacketId)();
        if (By <= fy) return;
        const [Ky, ey, qb] = yb.Km.Tl(yb.eWy), sy = ! function(yb) {
          var bb;
          let Wy = null === (bb = yb.Km.koy(yb.eWy)) || void 0 === bb ? void 0 : bb.GU;
          if (void 0 === Wy) return !1;
          const Uy = new Set;
          for (; void 0 !== Wy && !Uy.has(Wy);) {
            var hy;
            Uy.add(Wy);
            const bb = yb.Km.getState(Wy, "smoothToServerPos"),
              fy = Array.isArray(bb) ? null : null === bb || void 0 === bb ? void 0 : bb.serverPosition;
            if (fy) {
              const bb = yb.Km.Tl(Wy);
              if (Math.abs(bb[0] - fy[0]) > 10 || Math.abs(bb[1] - fy[1]) > 10 || Math.abs(bb[2] - fy[2]) > 10) return !0
            }
            Wy = null === (hy = yb.Km.koy(Wy)) || void 0 === hy ? void 0 : hy.GU
          }
          return !1
        }(yb) && function(yb, bb, Wy, Uy) {
          const fy = hy.c.DU;
          for (let hy = 0; hy < yb.length; hy++) {
            const Zy = yb[hy];
            if (!(0, uy.g)(bb, Wy, Uy, Zy[0] * fy, Zy[1] * fy, Zy[2] * fy)) return !1
          }
          return !0
        }(bb.Tf.HU, Ky, ey, qb), Sy = null === cb || Math.abs(Ky - cb[0]) > 8 || Math.abs(ey - cb[1]) > 8 || Math.abs(qb - cb[2]) > 8, Ey = !oy || Sy || performance.now() - Zy >= 1e4;
        oy = sy, sy && Ey && (fy = By, Zy = performance.now(), cb = [Ky, ey, qb], (0, Uy.sendColyMessage)(Py.pg, {
          Zk: By
        }))
      };
      return yb.on("Zb", By), () => {
        yb.off("Zb", By)
      }
    }
    var Hy = Wy(35525),
      ab = Wy(271),
      Fy = Wy.n(ab),
      py = Wy(5736),
      Ly = Wy(36736),
      Qy = Wy(36446),
      jb = Wy(36421),
      Dy = Wy(3725),
      tb = Wy(36797),
      wy = Wy(36577),
      kb = Wy(35975),
      Ny = Wy(36313),
      zb = Wy(37664),
      Iy = Wy(35519),
      xb = Wy(35521),
      Ay = Wy(37672),
      dy = Wy(37678),
      yW = Wy(2946),
      bW = Wy(1356),
      Wb = Wy(2230),
      Ub = Wy(2293),
      hb = Wy(36961),
      fb = Wy(35779),
      Zb = Wy(3983),
      cW = Wy(37714),
      Pb = Wy(36792),
      ob = Wy(3511),
      Bb = Wy(36235),
      Kb = Wy(35832),
      eb = Wy(36800),
      qW = Wy(37684),
      sb = Wy(37697),
      Sb = Wy(35973);
    class Eb {
      constructor(yb, bb, Wy, Uy) {
        this.gameNameWithVariation = yb, this.lb = Wy, this.connectionResume = Uy, this.stateReplicationHandler = void 0, this.stopChunkReports = () => {}, this.replayResume = null, this.stateReplicationHandler = new sb.b(bb, this.lb)
      }
      setupStateReplicationHandlers() {
        this.stateReplicationHandler.setup(), (0, Uy.onGameResetOnce)((() => {
          this.stateReplicationHandler.dispose()
        }))
      }
      XEy(yb) {
        this.stateReplicationHandler.dispose(), this.stateReplicationHandler = new sb.b(yb, this.lb), this.stateReplicationHandler.setup()
      }
      clearBlockRules() {
        const yb = this.lb.Kb;
        yb.bBy = new Set, yb.hoy = new Set, yb.Woy = new Set, yb.foy = new Set, yb.Uoy = [], yb.Zoy = [], yb.yhy = new Set, yb.I6 = [], yb.bhy = []
      }
      clearUiRequestsAndQTEs() {
        Zb.e.reset(), (0, Jy.c)()
      }
      startChunkReports() {
        const yb = function(yb) {
            let bb = null,
              Wy = -1 / 0,
              hy = null;
            const fy = () => {
                hy = null;
                const fy = Math.ceil(yb.gWy[0]),
                  Zy = Math.ceil(yb.gWy[1]);
                bb && bb[0] === fy && bb[1] === Zy || (bb = [fy, Zy], Wy = performance.now(), (0, Uy.sendColyMessage)(Py.og, {
                  kF: fy,
                  ZF: Zy
                }))
              },
              Zy = () => {
                null === hy && (hy = setTimeout(fy, Math.max(0, Wy + 250 - performance.now())))
              };
            return fy(), yb.on("addRemoveDistanceChanged", Zy), () => {
              yb.off("addRemoveDistanceChanged", Zy), null !== hy && (clearTimeout(hy), hy = null)
            }
          }(this.lb.Kb),
          bb = rb(this.lb);
        this.stopChunkReports = () => {
          yb(), bb()
        }
      }
      restartChunkStreaming() {
        (0, Ny.n)(this.lb, (0, cb.e)().recentChunkEdits.chunksEditedSince(this.connectionResume.getDroppedAt() - zb.c)), this.startChunkReports()
      }
      setupOnMessageListeners(yb, bb) {
        const Wy = this.lb,
          hy = this.gameNameWithVariation;
        yb.Gl(Py.pc, (yb => {
          let {
            fby: bb,
            Zby: Uy,
            cWy: hy,
            Pby: fy,
            oby: Zy,
            Kby: cb,
            eby: Py,
            qWy: oy,
            sby: By
          } = yb;
          if (!Wy.Km.Ccy(bb, "itemState")) return void(0, Qy.k)(Wy, bb, [Zy, cb, Py], Uy, {
            amount: hy,
            attributes: JSON.parse(fy),
            qWy: oy,
            size: By
          });
          const Ky = Wy.Km.getState(bb, "itemState");
          Ky.amount = hy, Ky.qWy = oy, Ky.creationTime = Date.now(), (0, jb.setServerPosition)(Wy.Km.getState(bb, "smoothToServerPos"), Zy, cb, Py)
        })), yb.Gl(Py.jb, (yb => {
          (0, ib.d)(Wy).setCantPickUp(yb, !0), Wy.Km.Ccy(yb, "itemState") && (Wy.Km.getState(yb, "itemState").qWy = !0)
        })), yb.Gl(Py.Yd, (yb => {
          (0, ib.d)(Wy).setCantPickUp(yb, !1), Wy.Km.Ccy(yb, "itemState") && (Wy.Km.getState(yb, "itemState").qWy = !1)
        })), yb.Gl(Py.Oc, (yb => {
          ly.c.applyNewClientOptions(yb)
        })), yb.Gl(Py.Pc, (yb => {
          let {
            eId: bb,
            settings: Uy
          } = yb;
          (0, Kb.i)(bb);
          for (const Wy in Uy)(0, Kb.e)(bb, Wy, Uy[Wy]);
          if ("canSee" in Uy && Wy.Km.Ccy(bb, "hidingMeshManager")) {
            const yb = Wy.Km.getState(bb, "hidingMeshManager");
            yb.canSee = (0, eb.c)("canSee", Uy.canSee), yb._forceUpdate = !0
          }
        })), yb.Gl(Py.hf, (yb => {
          let {
            bWy: bb,
            Wby: hy,
            Uby: fy,
            hby: Zy
          } = yb;
          const cb = [hy, fy, Zy];
          Wy.Km.setPosition(Wy.eWy, cb), (0, Uy.sendColyMessage)(Py.Ng, {
            rD: bb,
            jD: Dy.g
          }), Ey.g.EZ("localPlayerTeleported", {
            pos: cb,
            isCorrection: !1
          })
        })), yb.Gl(Py.ad, (yb => {
          let {
            Lyy: bb,
            Qyy: Wy,
            jby: Uy,
            Dyy: hy
          } = yb;
          this.stateReplicationHandler.setUpIfQueued(bb);
          const fy = [Wy, Uy, hy];
          Ey.g.EZ(`otherPlayerTeleported|${bb}`, {
            pos: fy
          })
        })), yb.Gl(Py.ud, (yb => {
          let {
            r_: bb,
            Q0: hy,
            j_: fy,
            k_: Zy,
            x_: cb,
            byy: oy,
            U_: By,
            f_: Ky,
            h_: ey,
            o_: qb
          } = yb;
          const sy = [hy, fy, Zy];
          Wy.Km.setPosition(Wy.eWy, sy);
          const Sy = Wy.Km.aPy(Wy.eWy),
            ly = Wy.Km.hUy(Wy.eWy);
          Fy().set(ly.tUy, 0, 0, 0), Fy().set(ly.wWy, 0, 0, 0), Fy().set(ly.nZ, cb, oy, By), ly.kUy(), Sy._flying = null !== qb, qb ? (Sy.flyAccel.B_ = qb.B_, Sy.flyAccel.e_ = qb.e_) : Sy.flyAccel.reset(), Ky && Sy.movementType === py.m.GLIDING && (Sy.cyy = Ky.cyy, Fy().copy(Sy.P_, Ky.P_)), (0, Uy.sendColyMessage)(Py.Ng, {
            rD: bb,
            jD: Dy.g
          }), Ey.g.EZ("localPlayerTeleported", {
            pos: sy,
            isCorrection: !0
          })
        }));

        function fy() {
          return Wy.Km.oPy(Wy.eWy)
        }
        yb.Gl(Py.rb, (yb => {
          let {
            chatMsgId: bb,
            content: Wy,
            chatterEId: Uy
          } = yb;
          Ey.g.EZ("chat", {
            serverChatMsgId: bb,
            content: Wy,
            chatterEId: Uy
          }, !0)
        })), yb.Gl(Py.id, (yb => {
          Wb.b.onReceiveColyseusPing(yb)
        })), yb.Gl(Py.Ge, (yb => {
          let {
            key: bb,
            value: Wy
          } = yb;
          (0, mb.setCookie)(hy, bb, Wy)
        })), yb.Gl(Py.Ke, (yb => {
          Ey.g.EZ("setDiscordReportKey", yb)
        })), (0, Uy.onGameResetOnce)((() => {
          this.stopChunkReports()
        })), yb.Gl(Py.gc, (bb => {
          const {
            F_: hy,
            p_: fy
          } = bb;
          if ((0, Uy.setAdjustment)(fy), this.connectionResume.onInitialInfo(bb.L_, bb.sc), Uy.offlineInputReplay.dJ(bb.Q_), this.connectionResume.isResuming()) {
            console.log("Resumed the connection as eId", hy);
            try {
              null === bb.jyy && (0, cb.e)().client.inventoryPrediction.dropPending(), this.stopChunkReports(), this.clearBlockRules(), ly.c.apply({
                shopInfo: null,
                _shopVersion: ny.c
              });
              const Uy = Wy.Km.BPy(Wy.eWy);
              Uy.K4 && (Uy.chestClosed(), Ey.g.EZ("chestToggleFromServer", !1, !0)), this.clearUiRequestsAndQTEs(), Ey.g.EZ("initInfoReceived", yb)
            } finally {
              const yb = null === bb.jyy ? null : {
                sync: null,
                endSeq: null
              };
              this.replayResume = yb, this.connectionResume.onResumeInitialInfo(bb.jyy, (() => {
                yb.endSeq = (0, cb.e)().client.inventoryPrediction.lastActionSeq
              })), null === yb && this.restartChunkStreaming()
            }
          } else console.log("Local client is eId", hy), Ey.g.EZ("loadingScreenState", "loadingPage:loadingWorld"), Wy.Jcy = hy, Wy.Km.Ccy(Wy.eWy, Wy.Km.names.entityName) && Wy.Km.fWy(Wy.eWy, Wy.Km.names.entityName), (0, cb.e)().setEntityName(Wy.Jcy, (0, cb.e)().getRawEntityName(Wy.eWy)), Wy.KWy[Wy.Jcy] = {}, Wy.Km.hWy(Wy.eWy, Wy.Km.names.entityName), Ey.g.EZ("initInfoReceived", yb), this.startChunkReports(), Zy.client.onServerConnectionFinalised()
        })), yb.Gl(Py.oe, (() => {
          this.connectionResume.isResuming() ? this.connectionResume.onResumed((() => {
            const yb = this.replayResume;
            if (this.replayResume = null, !yb) return;
            this.restartChunkStreaming();
            const {
              inventoryPrediction: bb
            } = (0, cb.e)().client, {
              sync: hy
            } = yb, fy = new Set(Uy.offlineInputReplay.takeDroppedActions());
            if (hy) {
              var Zy;
              const Uy = null !== (Zy = yb.endSeq) && void 0 !== Zy ? Zy : bb.lastActionSeq;
              bb.forget((yb => yb > hy.gM && yb <= Uy || fy.has(yb))), Ty(Wy, bb, Ey.g, hy.gM, hy.load)
            } else bb.dropPending(), bb.askForSnapshot()
          })) : console.warn("ResumeComplete arrived without a resume")
        })), yb.Gl(Py.kf, (yb => {
          Ey.g.EZ("TopRightHelper", yb, !0)
        })), yb.Gl(Py.zd, (yb => {
          let {
            type: bb,
            location1: Wy,
            location2: Uy,
            location3: hy,
            score: fy
          } = yb;
          (0, Ub.t)({
            type: bb,
            location1: Wy,
            location2: Uy,
            location3: hy,
            score: fy
          })
        })), yb.Gl(Py.le, (yb => {
          let {
            type: bb,
            resourceType: Wy,
            amount: Uy,
            category: hy,
            itemName: fy
          } = yb;
          (0, Ub.x)({
            type: bb,
            resourceType: Wy,
            amount: Uy,
            category: hy,
            itemName: fy
          })
        })), yb.Gl(Py.T, (yb => {
          Wy.Kb.bBy.add(yb), Wy.Kb.hoy.delete(yb)
        })), yb.Gl(Py.ab, (yb => {
          Wy.Kb.hoy.add(yb), Wy.Kb.bBy.delete(yb)
        })), yb.Gl(Py._d, (yb => {
          Wy.Kb.hoy.delete(yb), Wy.Kb.bBy.delete(yb)
        })), yb.Gl(Py.Z, (yb => {
          Wy.Kb.Woy.add(yb), Wy.Kb.foy.delete(yb)
        })), yb.Gl(Py.ib, (yb => {
          Wy.Kb.foy.add(yb), Wy.Kb.Woy.delete(yb)
        })), yb.Gl(Py.ce, (yb => {
          Wy.Kb.foy.delete(yb), Wy.Kb.Woy.delete(yb)
        })), yb.Gl(Py.W, (yb => {
          (0, By.db)(yb, Wy.Kb.Zoy), (0, By.db)(yb, Wy.Kb.Uoy), Wy.Kb.Uoy.push(yb)
        })), yb.Gl(Py.eb, (yb => {
          (0, By.db)(yb, Wy.Kb.Uoy), (0, By.db)(yb, Wy.Kb.Zoy), Wy.Kb.Zoy.push(yb)
        })), yb.Gl(Py.ae, (yb => {
          (0, By.db)(yb, Wy.Kb.Uoy), (0, By.db)(yb, Wy.Kb.Zoy)
        })), yb.Gl(Py.yf, (yb => {
          let {
            Sby: bb,
            Eby: Uy
          } = yb;
          Uy ? Wy.Kb.yhy.delete(bb) : Wy.Kb.yhy.add(bb)
        })), yb.Gl(Py.xf, (yb => {
          let {
            I6: bb,
            U1: Uy
          } = yb;
          Zy.updateWalkThroughRect(Wy.eWy, bb, Uy)
        })), (0, Uy.onGameResetOnce)((() => {
          this.clearBlockRules()
        })), yb.Gl(Py.df, (yb => {
          (0, Vy.c)(yb)
        })), yb.Gl(Py.Zb, (yb => {
          gb.d.applyServerUpdate(yb)
        })), yb.Gl(Py.nb, (yb => {
          Zy.applyServerBlocks((() => {
            ! function(yb, bb) {
              for (const {
                  N9: Wy,
                  I9: Uy
                }
                of bb) {
                const bb = Gy.c[Uy];
                if (bb) {
                  const {
                    compX: Uy,
                    compY: hy,
                    compZ: fy,
                    mainMultiblock: Zy
                  } = bb;
                  yb.uby(Wy[0] - Uy, Wy[1] - hy, Wy[2] - fy, Zy)
                }
              }
              for (const {
                  N9: Wy,
                  I9: Uy,
                  Z4: hy
                }
                of bb) yb.setBlockNoMulti(Wy[0], Wy[1], Wy[2], Uy, !0), yb.blockDataOwner.setBlockData(Wy[0], Wy[1], Wy[2], null === hy ? void 0 : JSON.parse(hy)), yb.blockAdded(Wy[0], Wy[1], Wy[2], Uy)
            }(Zy, yb)
          })), Ey.g.EZ("changeBlockFail", yb), Zy.client.triggerGameCallback("onChangeBlockFail", yb), Ey.g.EZ("EditBoard", {
            pos: null
          }), Ey.g.EZ("EditCodeBlock", {
            pos: null,
            canChangePos: null
          })
        })), yb.Gl(Py.ed, (yb => {
          let {
            pickUpItems: bb,
            pickUpAckSeq: Wy
          } = yb;
          for (const {
              name: Uy,
              amount: hy,
              attributes: Zy
            }
            of bb) fy().pickUpItem({
            name: Uy,
            amount: hy,
            typeObj: Qy.t[Uy],
            attributes: Zy
          });
          (0, cb.e)().client.inventoryPrediction.serverChangeApplied(Wy)
        })), yb.Gl(Py.Me, (yb => {
          let {
            index: bb,
            name: Uy,
            amount: hy,
            attributes: fy,
            setSlotAckSeq: Zy
          } = yb;
          const Py = Wy.Km.BPy(Wy.eWy);
          (bb < Py.playerInventory.numSlots || Py.K4 || Py.inCreative) && Py.setItemSlot(bb, Uy, hy, fy), (0, cb.e)().client.inventoryPrediction.serverChangeApplied(Zy)
        })), yb.Gl(Py.af, (yb => {
          let {
            B4: bb,
            K8: Uy,
            gM: hy
          } = yb;
          const {
            inventoryPrediction: fy
          } = (0, cb.e)().client, Zy = () => {
            Wy.Km.BPy(Wy.eWy).loadFromString(bb)
          };
          this.replayResume && (this.replayResume.sync = {
            gM: hy,
            load: Zy
          }), Ty(Wy, fy, Ey.g, hy, Zy, Uy)
        })), yb.Gl(Py.oc, (yb => {
          (0, cb.e)().client.inventoryPrediction.acknowledge(yb)
        })), yb.Gl(Py.A, (yb => {
          let {
            HO: bb,
            Hk: Wy,
            aN: Uy,
            Fk: hy
          } = yb;
          (0, cb.e)().client.itemDropPrediction.onActionItemDrops(bb, Wy, Uy, hy)
        })), yb.Gl(Py.Ab, (yb => {
          fy().clearInventory(), (0, cb.e)().client.inventoryPrediction.serverChangeApplied(yb)
        })), yb.Gl(Py.wc, (yb => {
          let {
            leaveEventType: bb,
            category: Wy,
            subCategory: Uy,
            value: hy
          } = yb;
          (0, Ub.H)({
            leaveEventType: bb,
            category: Wy,
            subCategory: Uy,
            value: hy
          })
        })), yb.Gl(Py.Kb, (yb => {
          let {
            cat1: bb,
            cat2: Wy,
            cat3: Uy,
            value: hy
          } = yb;
          (0, Ub.p)({
            cat1: bb,
            cat2: Wy,
            cat3: Uy,
            value: hy
          })
        }));
        const Zy = (0, cb.e)();
        yb.Gl(Py.Db, (yb => {
          Zy.applyServerBlocks((() => {
            vb(Zy, gb.d, yb)
          }))
        })), yb.Gl(Py.Oe, (yb => {
          Ey.g.EZ("setSelectedInventorySlotI", yb, !0)
        })), yb.Gl(Py.uc, (yb => {
          let {
            category: bb,
            timeframe: Wy,
            data: Uy
          } = yb;
          Ey.g.EZ("leaderboardResponse", {
            category: bb,
            timeframe: Wy,
            data: Uy
          })
        })), yb.Gl(Py.P, (yb => {
          let {
            qyy: bb,
            IW: Wy
          } = yb;
          this.stateReplicationHandler.setUpIfQueued(bb), bb = (0, Hy.c)(bb), (0, cb.e)().client.gameRecorder.recordBulletShot(bb, Wy), Ey.g.EZ(`bulletShot|${bb}`, {
            bulletDirections: Wy
          })
        })), yb.Gl(Py.ac, (yb => {
          let {
            xyy: bb,
            A_: Wy
          } = yb;
          Ey.g.EZ("damagedByOtherPlayer", {
            xyy: bb,
            direction: Wy
          }, !0)
        })), yb.Gl(Py.rd, (yb => {
          Ey.g.EZ("playerKilled", yb, !0), (0, cb.e)().client.gameRecorder.recordPlayerKilled(yb.deadEId, yb.killerEId, yb.withItem, yb.killstreak)
        })), yb.Gl(Py.Lb, (yb => {
          Ey.g.EZ("customKillfeed", yb, !0), (0, cb.e)().client.gameRecorder.recordCustomKillfeed(yb.killer, yb.victim, yb.withItem)
        })), yb.Gl(Py.Dd, (yb => {
          let {
            dyy: bb,
            yWy: Uy
          } = yb;
          this.stateReplicationHandler.setUpIfQueued(bb);
          const hy = Wy.Km.MPy(bb);
          null !== hy && void 0 !== hy && hy.isGun() && hy.reload(Date.now(), Uy)
        })), yb.Gl(Py.Ze, (() => {
          Ey.g.EZ("showShopTutorial", null, !0)
        })), yb.Gl(Py.yd, (yb => {
          Ey.g.EZ("progressBarUpdate", yb, !0)
        })), yb.Gl(Py.kc, (yb => {
          Ey.g.EZ("middleScreenBarInitiate", {
            duration: yb.E9,
            J9: yb.J9,
            horizBarRemOffset: yb.i4
          }, !0)
        })), yb.Gl(Py.Od, (() => {
          Ey.g.EZ("middleScreenBarRemove", !0)
        })), yb.Gl(Py.se, (yb => {
          let {
            oN: bb,
            Av: Uy
          } = yb;
          const hy = Uy ? (0, Pb.e)(Wy, Uy) : void 0;
          Ey.g.EZ("sendHitmarker", {
            oN: bb,
            screenPos: hy
          }, !0)
        })), yb.Gl(Py.He, (yb => {
          let {
            id: bb,
            position: Wy,
            style: Uy,
            text: hy,
            aby: fy
          } = yb;
          Ey.g.EZ("setDirectionArrow", {
            id: bb,
            position: Wy,
            style: Uy,
            text: (0, Py.p)(hy),
            aby: fy
          }, !0)
        })), yb.Gl(Py.xb, (yb => {
          let {
            id: bb
          } = yb;
          Ey.g.EZ("clearDirectionArrow", {
            id: bb
          }, !0)
        })), yb.Gl(Py.D, (yb => {
          let {
            pM: bb,
            yby: Uy,
            animationScript: hy,
            Wyy: fy,
            Uyy: Zy,
            hyy: Py,
            fyy: oy
          } = yb;
          bb = (0, Hy.c)(bb);
          const By = null === hy && null !== Py ? (0, My.f)(Py, oy) : hy;
          (0, cb.e)().client.gameRecorder.recordAnimateEntity(bb, Uy, By, fy, Zy), (0, ib.d)(Wy).animations.animateEntity(bb, Uy, hy, fy, Zy, Py, oy), null !== hy || bb === Wy.eWy && Uy === Bb.h.Emote && (0, cb.e)().client.cameraController.endTemporaryThirdPerson()
        })), yb.Gl(Py.rf, (yb => {
          let {
            u9: bb,
            r4: Wy
          } = yb;
          if (Zy.LUy(bb[0], bb[1], bb[2])) {
            const yb = (0, cb.e)().XE(bb[0], bb[1], bb[2]);
            (0, cb.e)().updateMailboxContents(bb[0], bb[1], bb[2], yb, Wy)
          }
        })), yb.Gl(Py.vb, (yb => {
          let {
            Ix: bb,
            hA: Uy,
            sA: hy,
            Dv: fy,
            JA: Zy,
            HA: Py,
            W9: oy,
            o9: By
          } = yb;
          const Ky = Wy.Km.BPy(Wy.eWy);
          if (Py) {
            const {
              bM: yb,
              gM: bb
            } = By;
            return (0, cb.e)().client.inventoryPrediction.RZy(bb, (() => {
              Ky.chestRefreshed(Uy, hy, fy, oy, yb)
            })) && Ey.g.EZ("chestToggleFromServer", !1, !0), void Ey.g.EZ("chestRefreshedFromServer")
          }(bb || Ky.K4) && (bb ? (Ky.chestOpened(Uy, hy, fy, Zy, oy), null !== Zy && (0, cb.e)().client.ironChestPasskeyCache.onChestOpened(fy, Zy)) : Ky.chestClosed(), Ey.g.EZ("chestToggleFromServer", bb, !0))
        })), yb.Gl(Py.Ob, (yb => {
          let {
            craftingRecipeItemName: bb,
            recipesForItem: Uy
          } = yb;
          bb ? Zy.craftingManager.editRecipesForPlayer(Wy.eWy, bb, Uy) : Zy.craftingManager.resetAllPlayerRecipes(Wy.eWy), Ey.g.EZ("craftingRecipesEdited", {
            itemName: bb,
            recipesForItem: Uy
          })
        })), yb.Gl(Py.Qe, (yb => {
          let {
            vehicleEId: bb,
            overrides: Wy
          } = yb;
          (0, cb.e)().applyRiddenVehicleSettingOverrides(bb, Wy)
        })), yb.Gl(Py.vf, (yb => {
          let {
            Fyy: bb,
            pyy: Uy,
            MU: hy
          } = yb;
          const fy = Wy.Km.aPy(Wy.eWy).physicsState.type === py.q.SLEEPING && bb === py.q.DEFAULT;
          (0, cb.e)().updatePositionAndPhysics(Wy.eWy, {
            type: bb,
            tier: Uy
          }, !0, hy), fy && (0, cb.e)().updateHeldVehicleStatus()
        })), yb.Gl(Py.ob, (yb => {
          let {
            pose: bb,
            ZN: Uy
          } = yb;
          Wy.Km.coy(Wy.eWy).setPose(bb, Uy)
        })), yb.Gl(Py.pe, (yb => {
          (0, qW.e)(yb)
        })), yb.Gl(Py.od, (yb => {
          for (const bb of yb)(0, tb.y)(bb);
          Ey.g.EZ("playerCosmeticsUpdated", yb, !0)
        })), yb.Gl(Py.H, (yb => {
          for (const bb of yb)(0, fb.f)(Wy, bb)
        })), yb.Gl(Py.Dc, (yb => {
          let {
            vx: bb,
            MI: Uy,
            pI: hy,
            Zx: fy,
            Bx: cb,
            rA: Py,
            Hx: oy
          } = yb;
          this.stateReplicationHandler.setUpIfQueued(bb), bb = (0, Hy.c)(bb);
          const By = Wy.Km.JPy(bb);
          if (By && (By.lastHurtTime = performance.now()), (0, Ly.playRigHurt)(Wy, bb, Py), Ey.g.EZ("lifeformHurt", {
              eId: bb,
              Hx: oy
            }), Uy) {
            const yb = (0, Pb.e)(Wy, Uy.Av);
            Ey.g.EZ("yourAttackHit", {
              oN: fy,
              screenPos: yb,
              hitSelf: bb === Wy.eWy
            })
          }
          bb === Wy.eWy && (Zy.shakePlayerCamera(bb, cb / 40, 200), Ey.g.EZ("closeShopOnDamaged", null), Ey.g.EZ("damagedByOtherPlayer", {
            xyy: null,
            direction: Py,
            Bx: cb
          }, !0));
          const Ky = Wy.Km.Tl(bb);
          if (Ky && (hy || fy)) {
            const yb = [Ky[0], Ky[1] + 1, Ky[2]];
            hy && (0, wy.i)(Wy, wy.x, yb, 15), fy && (0, wy.i)(Wy, wy.n, yb, 10)
          }
        })), yb.Gl(Py.Ac, (yb => {
          let {
            eId: bb,
            Q8: Uy,
            B7: hy
          } = yb;
          (0, ib.d)(Wy).setHealthFrac((0, Hy.c)(bb), hy), Ey.g.EZ("lifeformHealthChanged", {
            eId: (0, Hy.c)(bb),
            Q8: Uy,
            B7: hy
          })
        })), yb.Gl(Py.I, (yb => {
          let {
            vby: bb,
            iby: Uy
          } = yb;
          (0, cb.e)().playerAttacked(Wy.eWy, bb, Uy)
        })), yb.Gl(Py.tc, (yb => {
          (0, cb.e)().client.leaveGameUnwanted({
            reason: yb,
            requiresRefresh: !1,
            canReconnect: !1,
            automaticallyReconnect: !1
          }), (0, bW.navigatePreserveSearch)("/")
        })), yb.Gl(Py.Md, (yb => {
          let {
            lby: bb,
            mWy: Wy,
            Cby: Uy
          } = yb;
          fy().removeItemName(bb, Wy), (0, cb.e)().client.inventoryPrediction.serverChangeApplied(Uy)
        })), yb.Gl(Py.De, (yb => {
          const {
            iZ: bb,
            DPy: Uy
          } = (0, kb.h)([yb[0], yb[1], yb[2]]);
          Sb.c.setLookDirection(Wy, bb, Uy), (0, Ny.w)(bb, Uy);
          const hy = Wy.Km.coy(Wy.eWy);
          hy && (hy.heading = bb)
        })), yb.Gl(Py.Fe, (yb => {
          Zy.client.cameraController.setCameraZoom(yb)
        })), yb.Gl(Py.Xe, (yb => {
          let {
            bI: bb,
            mI: Uy
          } = yb;
          Zy.shakePlayerCamera(Wy.eWy, bb, Uy)
        })), yb.Gl(Py.Gb, (yb => {
          (0, yW.onCosmeticPackGranted)(yb)
        })), yb.Gl(Py.we, (yb => {
          Ey.g.EZ("serverUpdating", Date.now() + yb, !0)
        })), yb.Gl(Py.Kc, Yy.c), yb.Gl(Py.Xc, (yb => {
          let {
            id: bb,
            J7: Wy
          } = yb;
          const {
            type: hy,
            params: fy
          } = (0, cW.g)(Wy), Zy = {
            ...fy
          };
          for (const Uy of cW.e) Uy in Zy && Zy[Uy] && (Zy[Uy] = (0, Py.p)(Zy[Uy]));
          Zb.e.queueQTE(bb, hy, Zy).getResult().then((yb => {
            "boolean" === typeof yb && (0, Uy.sendColyMessage)(Py.oi, {
              qteId: bb,
              qteResponse: yb
            })
          }))
        })), yb.Gl(Py.Qd, (yb => {
          Zb.e.cancelQTE(yb)
        })), (0, Uy.onGameResetOnce)((() => {
          Zb.e.reset()
        })), yb.Gl(Py.Yc, (yb => {
          let {
            id: bb,
            clientParameters: Wy
          } = yb;
          (0, Jy.d)(bb, Wy)
        })), yb.Gl(Py.Ud, (yb => {
          (0, Jy.g)(yb)
        })), yb.Gl(Py.pf, (yb => {
          let {
            text: bb,
            id: Wy
          } = yb;
          (0, Jy.i)(Wy, bb, (yb => {
            (0, Uy.sendColyMessage)(Py.Vj, {
              xG: Wy,
              WG: yb,
              hG: 5
            })
          }))
        })), yb.Gl(Py.Pb, (yb => {
          let {
            hY: bb,
            fY: Wy,
            ZY: Uy,
            XN: hy,
            pN: fy,
            yI: Zy
          } = yb;
          bb = (0, Hy.c)(bb), (0, cb.e)().client.updateEffect(bb, Wy, {
            displayName: Uy,
            icon: hy,
            duration: fy,
            level: Zy
          })
        })), yb.Gl(Py.Fd, (yb => {
          let {
            hY: bb,
            fY: Wy
          } = yb;
          bb = (0, Hy.c)(bb), (0, cb.e)().client.removeEffect(bb, Wy)
        })), yb.Gl(Py.qc, (yb => {
          Wy.Km.coy(Wy.eWy).jumpMultiplier.setMultiplierType("jumpEffectAmount", yb)
        })), yb.Gl(Py.mf, (yb => {
          Ey.g.EZ("ttbEffectMultiplier", yb)
        })), (0, Uy.onGameResetOnce)((() => {
          Wy.Km.coy(Wy.eWy).jumpMultiplier.setMultiplierType("jumpEffectAmount", 1)
        })), yb.Gl(Py.Rc, (yb => {
          (0, wy.m)(Wy, (0, By.o)(yb))
        })), yb.Gl(Py.Uc, (yb => {
          ob.e[yb.Nk] ? (0, wy.m)(Wy, {
            ...ob.e[yb.Nk],
            pos1: yb.pos1,
            pos2: yb.pos2
          }) : console.error(`Unknown preset id: ${yb.Nk}`)
        })), yb.Gl(Py.md, (yb => {
          var bb, Wy;
          let {
            S_: Uy,
            soundVolume: hy,
            E_: fy,
            l_: Zy
          } = yb, {
            T_: Py,
            J_: oy
          } = null !== Zy && void 0 !== Zy ? Zy : {};
          const {
            myy: By
          } = null !== Zy && void 0 !== Zy ? Zy : {};
          Py = null !== (bb = Py) && void 0 !== bb ? bb : void 0, oy = null !== (Wy = oy) && void 0 !== Wy ? Wy : void 0, "string" === typeof By && this.stateReplicationHandler.setUpIfQueued(By), (0, cb.e)().client.gameRecorder.recordPlaySound(Uy, hy, fy, Zy), Iy.e.play((0, xb.d)(Uy), hy, By, Py, oy).rate(fy)
        })), yb.Gl(Py.Ae, (yb => {
          let {
            pos: bb,
            data: Wy
          } = yb;
          Zy.blockDataOwner.setBlockData(bb[0], bb[1], bb[2], Wy), Zy.blockAdded(bb[0], bb[1], bb[2], Zy.XE(bb[0], bb[1], bb[2]))
        })), yb.Gl(Py.bd, (yb => {
          let {
            info: bb
          } = yb;
          Ey.g.EZ("overShopInfo", bb, !0)
        })), yb.Gl(Py.Wb, (yb => {
          let {
            zN: Uy,
            hN: hy
          } = yb;
          bb.openShop(Wy.eWy, Uy, hy)
        })), yb.Gl(Py.G, (yb => {
          Wy.Km.hUy(Wy.eWy).applyImpulse(yb)
        })), yb.Gl(Py.Te, (yb => {
          const bb = Wy.Km.hUy(Wy.eWy);
          Fy().set(bb.tUy, 0, 0, 0), Fy().set(bb.wWy, 0, 0, 0), Fy().copy(bb.nZ, yb), bb.kUy()
        })), yb.Gl(Py.Fc, (yb => {
          console.error(`[logErrorToConsole]: ${yb}`)
        })), yb.Gl(Py.Tb, (yb => {
          let {
            m_: bb,
            v_: Wy,
            i_: Uy
          } = yb;
          Ey.g.EZ("flyingMiddleMessage", {
            content: (0, Py.p)(bb),
            v_: Wy,
            i_: Uy
          }, !0)
        })), yb.Gl(Py.zf, (yb => {
          const bb = yb === Xy.h ? null : {
            message: `Currently loaded as variation: ${yb}`,
            type: "Warning"
          };
          Ey.g.EZ("showPermanentBottomMessage", bb, !0)
        })), yb.Gl(Py.Xb, (yb => {
          let {
            messageType: bb,
            data: Wy
          } = yb;
          (0, Ay.h)(bb) ? (0, Ay.e)(bb, Wy) : ("freeCamPerms" === bb && Zy.client.freeCameraController.setPerms(Wy.key, Wy.value), Zy.client.triggerGameCallback("onReceivedMessageFromServer", bb, Wy))
        })), yb.Gl(Py.pb, (() => {
          const yb = Wy.Km.MPy(Wy.eWy);
          null !== yb && void 0 !== yb && yb.isChargeable() && yb.finishCharging(!1, Date.now())
        })), yb.Gl(Py.Id, (yb => {
          let {
            E8: bb
          } = yb;
          Zy.craftingManager.removeRecipes(Wy.eWy, bb), Ey.g.EZ("craftingRecipesEdited", {
            itemName: bb,
            recipesForItem: []
          })
        })), yb.Gl(Py.uf, (yb => {
          for (const bb in yb) {
            const Wy = yb[bb];
            for (const yb in Wy) Zy.client.meshCreator.handleParticleSystemUpdate(bb, yb, Wy[yb])
          }
        })), (0, Uy.onGameResetOnce)((() => {
          (0, hb.setFloatingYValue)(Wy.Km.getState(Wy.eWy, "physics"), Wy.Km.yfy(Wy.eWy), null)
        })), yb.Gl(Py.Rb, (yb => {
          let {
            y_: bb,
            b_: Uy,
            q_: hy
          } = yb;
          const fy = (0, Hy.c)(bb);
          if (fy === Wy.eWy) {
            const yb = Wy.Km.yfy(Wy.eWy).position;
            hy ??= Math.floor(yb[1]) - 1, (0, hb.setFloatingYValue)(Wy.Km.getState(Wy.eWy, "physics"), Wy.Km.yfy(Wy.eWy), Uy ? hy : null)
          }(0, ib.d)(Wy).setFloating(fy, Uy, hy);
          const Zy = Wy.Km.getState(fy, "floating");
          Zy && (Zy.isFloating = Uy, Zy.q_ = Uy ? hy : null)
        })), yb.Gl(Py.Cb, dy.h)
      }
    }
    window.addEventListener("beforeunload", (() => {}));
    var lb = Wy(37720),
      mW = Wy(37728),
      Cb = Wy(942),
      Tb = Wy(2539);
    class Vb {
      constructor(yb, bb, Wy, Uy) {
        this.msgHandler = Wy, this.listener = Uy, this.session = void 0, this.attachedRoom = null, this.detachRoomListeners = null, this.suspended = !1, this.droppedAt = 0, this.session = new lb.c({
          reconnect: yb,
          isLive: () => Uy.isLive(),
          onReconnected: yb => {
            this.resumeOnRoom(yb)
          },
          onGaveUp: (yb, bb) => {
            Uy.onGaveUp(yb, bb)
          },
          freeze: bb,
          releaseSeat: bb => {
            yb(bb).then((yb => {
              yb.qh(!0)
            }), (yb => {
              console.warn("Couldn't release the held seat of a game left while reconnecting", yb)
            }))
          }
        })
      }
      onInitialInfo(yb, bb) {
        this.session.onInitialInfo(yb, bb)
      }
      isResuming() {
        return this.session.isResuming()
      }
      getDroppedAt() {
        return this.droppedAt
      }
      onResumeInitialInfo(yb, bb) {
        if (this.session.onResuming(), null === yb) {
          try {
            (0, cb.e)().client.itemDropPrediction.reset()
          } catch (Wy) {
            console.error("Error dropping the item drop predictions on resuming", Wy)
          }
          return Uy.offlineInputReplay.discard(), void this.setSuspended(!1)
        }(0, cb.e)().client.itemDropPrediction.onResumeReplayOffered(), Uy.offlineInputReplay.replayFrom(yb.kyy, bb)
      }
      onResumed(yb) {
        this.setSuspended(!1), (0, Uy.resendBeacons)();
        try {
          yb()
        } catch (bb) {
          console.error("Error completing the resume", bb)
        } finally {
          this.session.onResumed()
        }
      }
      attachRoom(yb) {
        const bb = (0, Cb.e)((() => yb.connection.isOpen));
        yb.Rl(bb);
        const Wy = new mW.c((() => {
          this.session.canHoldSeat() && this.listener.isLive() && (console.warn("The game server went silent, reconnecting"), this.onConnectionDropped(yb, "silent"), yb.qh(!1))
        }));
        yb.onStateChange((() => {
          Wy.heard()
        }));
        const Uy = bb => {
          bb.persisted || yb.qh(!0)
        };
        window.addEventListener("pagehide", Uy), yb.Rl(((bb, Wy) => {
          if (yb === this.attachedRoom && this.listener.isLive()) return (0, hy.d)(bb) && this.session.canHoldSeat() ? (console.warn(`Connection to the game server dropped with code ${bb}, reconnecting`), this.listener.onDropped(bb, Wy), void this.onConnectionDropped(yb, String(bb))) : void this.listener.onRoomLeft(bb, Wy)
        })), this.attachedRoom = yb, this.detachRoomListeners = () => {
          bb(), Wy.dispose(), window.removeEventListener("pagehide", Uy)
        }
      }
      dispose() {
        this.detachRoom(), this.session.qh(), this.setSuspended(!1)
      }
      setSuspended(yb) {
        yb !== this.suspended && (this.suspended = yb, (0, Uy.setConnectionSuspended)(yb), (0, cb.e)().client.itemDropPrediction.setSuspended(yb))
      }
      detachRoom() {
        var yb;
        null === (yb = this.detachRoomListeners) || void 0 === yb || yb.call(this), this.detachRoomListeners = null, this.attachedRoom = null
      }
      onConnectionDropped(yb, bb) {
        (0, Tb.c)("disconnect", "Left room", bb), this.isResuming() || (this.droppedAt = Date.now()), this.detachRoom(), Uy.offlineInputReplay.onConnectionLost(), this.setSuspended(!0), this.session.onConnectionLost(yb.reconnectionToken)
      }
      resumeOnRoom(yb) {
        if (!this.listener.isLive()) return console.warn("Left the game while reconnecting, leaving the resumed room"), yb.qh(!0), void this.dispose();
        console.log("Reconnected to the game server, waiting for the game to resume"), (0, qW.r)(), Uy.offlineInputReplay.onConnectionReplaced(), this.msgHandler.XEy(yb), this.listener.onReconnected(yb), this.attachRoom(yb)
      }
    }
    var Jb = Wy(2767),
      gW = Wy(2770),
      Gb = Wy(1177),
      Ob = Wy(3883),
      Rb = Wy(2476),
      vW = Wy(930),
      iW = Wy(36338),
      Mb = Wy(37730),
      Yb = Wy(37743),
      Xb = Wy(5740),
      nb = Wy(37746);

    function ub(yb) {
      var bb, Wy;
      if ("object" !== typeof yb || null === yb) return {
        errType: typeof yb
      };
      const Uy = yb;
      return {
        errType: null !== (bb = null === (Wy = yb.constructor) || void 0 === Wy ? void 0 : Wy.name) && void 0 !== bb ? bb : "",
        errName: "string" === typeof Uy.name ? Uy.name : "",
        eventType: "string" === typeof Uy.type ? Uy.type : "",
        errStack: "string" === typeof Uy.stack ? Uy.stack.split("\n").slice(1).join(" | ") : ""
      }
    }

    function rW(yb) {
      if ("undefined" !== typeof ProgressEvent && yb instanceof ProgressEvent) return !0;
      if (!(yb instanceof Error)) return !1;
      const bb = yb.code;
      return "ServerError" === yb.name && void 0 === bb || "AbortError" === yb.name || "seat reservation expired." === yb.message || "early_leave" === yb.message
    }(0, sy.n)((yb => {
      (0, Tb.c)("wasm_net", yb)
    }));
    let Hb = !0;

    function aW() {
      Hb = !1
    }
    class Fb {
      constructor(yb) {
        this.gameNameWithVariation = void 0, this.lobbyName = void 0, this.colyClient = void 0, this.userContext = void 0, this.joinedAt = null, this.checkSendPath = () => {}, this.lb = void 0, this.connectionResume = void 0, this.incomingMsgInitialisor = void 0, this.gameNameWithVariation = yb.gameNameWithVariation, this.lobbyName = yb.lobbyName, this.colyClient = yb.colyClient, this.userContext = yb.userContext
      }
      async connectToServer(yb, bb, Wy) {
        ly.c.reset(), yb.KWy = {
          [yb.eWy]: {}
        }, yb.Jcy = void 0, (0, qW.r)(), (0, cb.e)().removeAllEntityNames(), (0, cb.e)().setEntityName(yb.eWy, this.userContext.getPlayerName()), (0, Gb.n)({
          lobbyName: this.lobbyName
        }), console.log("Waiting for clientConnection passed promise to resolve"), console.log("joining server with game", this.gameNameWithVariation, "lobbyName", this.lobbyName);
        const fy = performance.now(),
          Zy = (0, Yb.d)(this.userContext, (() => {
            const {
              roomName: yb,
              joinOptions: Uy
            } = (0, Cy.g)(this.userContext, this.gameNameWithVariation, this.lobbyName, bb, (yb => Rb.e.isUsingCustomGameTexturePack(yb)));
            return (0, Mb.i)((() => this.colyClient.joinOrCreate(yb, Uy)), Wy)
          }));
        return Ey.g.EZ("loadingScreenState", "loadingPage:joiningLobby"), await Zy.then((bb => {
          this.joinedAt = performance.now(), this.lb = yb;
          const Wy = new Sy(bb);
          this.connectionResume = new Vb((yb => this.colyClient.reconnect(yb)), (bb => {
            yb.Jby(bb)
          }), Wy, {
            isLive: () => (0, cb.e)().client.getMsgHandler() === Wy,
            onDropped: (yb, bb) => {
              (0, gW.l)(yb) || this.logUnrecognisedConnectionLoss(yb, void 0, {
                site: "drop",
                closeReason: null !== bb && void 0 !== bb ? bb : "",
                sinceJoined: this.sinceJoined()
              })
            },
            onRoomLeft: (yb, bb) => {
              this.onRoomLeft(yb, bb)
            },
            onReconnected: yb => {
              this.incomingMsgInitialisor.XEy(yb), this.checkSendPath = (0, iW.i)(Wy, yb, sy.p)
            },
            onGaveUp: (yb, bb) => {
              this.onResumeGaveUp(yb, bb)
            }
          }), this.connectionResume.attachRoom(bb), (0, Uy.onGameResetOnce)((() => {
            this.connectionResume.dispose()
          }));
          const hy = Wy.send,
            fy = Wy.Gl,
            Zy = Wy.eoy.send,
            Py = Wy.eoy.Gl,
            oy = Wy.MEy;
          this.checkSendPath = (0, iW.i)(Wy, bb, sy.p);
          const By = setInterval((() => {
            hy === Wy.send && fy === Wy.Gl && Zy === Wy.eoy.send && Py === Wy.eoy.Gl && oy === Wy.MEy || aW(), this.checkSendPath()
          }), 1e4);
          return (0, Uy.onGameResetOnce)((() => {
            clearInterval(By)
          })), {
            success: !0,
            successDetails: Wy
          }
        })).catch((bb => {
          if (Wy.aborted && bb === (0, Xb.e)(Wy)) return {
            success: !1,
            failDetails: {
              reason: "Left the game while it loaded",
              requiresRefresh: !1,
              canReconnect: !1
            }
          };
          if (bb instanceof nb.d) return console.warn("Seat request timed out", this.lobbyName, this.gameNameWithVariation), {
            success: !1,
            failDetails: {
              reason: bb.message,
              requiresRefresh: !1,
              canReconnect: !1,
              gameServerUnreachable: "timedOut"
            }
          };
          yb.Qh(`Failed to connect to bloxd room, check your internet connection. lobbyName: ${this.lobbyName}, gameNameWithVariation: ${this.gameNameWithVariation} code: ${bb.code}\n`, bb);
          const Uy = bb.code;
          return Uy === hy.b.serverUpdating.code ? (this.goToUpdateWaiting(), {
            success: !1,
            failDetails: {
              reason: hy.b.serverUpdating.text,
              requiresRefresh: !1,
              canReconnect: !0,
              goesToUpdateWaiting: !0
            }
          }) : {
            success: !1,
            failDetails: {
              ...this.onConnectionToServerLost(Uy, bb.message, {
                site: "join",
                sinceJoinStart: (0, gW.e)(performance.now() - fy),
                ...ub(bb)
              }, rW(bb)),
              rematch: (0, Mb.e)(bb)
            }
          }
        }))
      }
      setupServerListeners(yb, bb, Wy) {
        Ey.g.EZ("loadingScreenState", "loadingPage:loadingPlayerInfo"), this.incomingMsgInitialisor = new Eb(this.gameNameWithVariation, bb.eoy, yb, this.connectionResume), this.incomingMsgInitialisor.setupStateReplicationHandlers();
        const hy = bb.HEy();
        this.incomingMsgInitialisor.setupOnMessageListeners(hy, Wy), (0, Uy.onConnectionToServerReady)(hy, bb), hy.finishRegistration()
      }
      dispose() {
        this.connectionResume.dispose()
      }
      onResumeGaveUp(yb, bb) {
        (0, vW.Dh)(new Error("Reconnect failed"), {
          ...(0, Jb.l)(bb),
          game: this.gameNameWithVariation
        }), (0, Tb.c)("disconnect", "Reconnect failed", bb.reason), (0, cb.e)().client.leaveGameUnwanted({
          reason: {
            translationKey: "general:lostConnection"
          },
          canReconnect: !yb,
          canPlayAgain: yb,
          requiresRefresh: !1,
          automaticallyReconnect: !1
        }), (0, bW.navigatePreserveSearch)("/")
      }
      sinceJoined() {
        return null === this.joinedAt ? "" : (0, gW.e)(performance.now() - this.joinedAt)
      }
      onRoomLeft(yb, bb) {
        var Wy;
        if (yb === hy.b.gameOrPluginKick.code) return;
        if (console.log(`Left room with code ${yb}`), yb === hy.b.serverUpdating.code) return (0, Tb.c)("disconnect", "Left room", "serverUpdating"), (0, cb.e)().client.leaveGame(this.getUpdateWaitingUrl()), void this.goToUpdateWaiting();
        this.lb.Qh(`Kicked from server with code ${yb}`, new Error);
        const Uy = Object.keys(hy.b).find((bb => hy.b[bb].code === yb));
        (0, Tb.c)("disconnect", "Left room", null !== Uy && void 0 !== Uy ? Uy : String(yb));
        const fy = this.onConnectionToServerLost(yb, void 0, {
          site: "qh",
          closeReason: null !== bb && void 0 !== bb ? bb : "",
          sinceJoined: this.sinceJoined()
        });
        (0, cb.e)().client.leaveGameUnwanted({
          reason: `You have disconnected from the server.\n${fy.reason}`,
          canReconnect: fy.canReconnect,
          requiresRefresh: fy.requiresRefresh,
          automaticallyReconnect: null !== (Wy = fy.automaticallyReconnect) && void 0 !== Wy && Wy
        }), (0, bW.navigatePreserveSearch)("/")
      }
      getUpdateWaitingUrl() {
        return (0, Ob.B)(this.gameNameWithVariation, this.lobbyName)
      }
      goToUpdateWaiting() {
        (0, bW.navigatePreserveSearch)(this.getUpdateWaitingUrl())
      }
      onConnectionToServerLost(yb, bb, Wy) {
        var Uy;
        let Zy = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        if (null !== (Uy = bb) && void 0 !== Uy && Uy.endsWith(hy.f) && (this.userContext.invalidateTrafficCode(), bb = bb.replace(hy.f, "")), yb === hy.b.outdatedVersion.code) return console.error("Outdated client with version ", fy.b, ", refreshing page"), (0, mb.reloadBloxd)(), {
          reason: "Outdated client",
          requiresRefresh: !0,
          canReconnect: !1
        };
        if (yb === hy.b.loadRecaptchaError.code) return console.error("Load recaptcha error, refreshing page"), (0, mb.reloadBloxd)(), {
          reason: "Failed to load recaptcha",
          requiresRefresh: !0,
          canReconnect: !1
        };
        for (const fy in hy.b) {
          const {
            code: Wy,
            text: Uy,
            canReconnect: Zy
          } = hy.b[fy];
          if (Wy === yb) {
            console.log("matched known error", yb, "leaving game");
            return {
              reason: "" !== Uy ? Uy : bb || `Code: ${yb}`,
              requiresRefresh: !1,
              canReconnect: Zy,
              automaticallyReconnect: Wy === hy.b.customGameUpdated.code || Wy === hy.b.duplicateLobbyNameError.code
            }
          }
        }
        return console.log("Didn't match known error, leaving game"), (0, gW.i)(yb) || Zy ? console.warn("Connection lost", yb, bb) : this.logUnrecognisedConnectionLoss(yb, bb, Wy), {
          reason: `Either your internet isn't working or this is a bug.\nCode: ${yb}`,
          requiresRefresh: !1,
          canReconnect: !1,
          gameServerUnreachable: Zy ? "failed" : void 0
        }
      }
      logUnrecognisedConnectionLoss(yb, bb, Wy) {
        (0, vW.Dh)(new Error("Unrecognised connection loss"), {
          code: String(yb),
          cause: null !== bb && void 0 !== bb ? bb : "",
          ...Wy,
          game: this.gameNameWithVariation,
          ...(0, gW.p)()
        })
      }
    }
  },
  37697: (yb, bb, Wy) => {
    Wy.d(bb, {
      b: () => kU,
      f: () => dW
    });
    var Uy, hy, fy, Zy, cb, Py, oy, By, Ky, ey, qb, sy, Sy, Ey, ly, mb, Cy, Ty, Vy, Jy, gb, Gy, Oy, Ry, vb, ib, My, Yy, Xy, ny, uy, rb, Hy, ab, Fy, py, Ly, Qy, jb, Dy, tb, wy, kb, Ny, zb, Iy, xb, Ay, dy, yW, bW, Wb, Ub, hb, fb, Zb, cW, Pb, ob, Bb, Kb, eb, qW, sb, Sb, Eb, lb, mW, Cb, Tb, Vb, Jb, gW, Gb, Ob, Rb, vW, iW, Mb, Yb, Xb, nb, ub, rW, Hb, aW, Fb, pb, Lb, Qb, jW, Db, tW, wb, kW, Nb, zW, Ib, xW, Ab = Wy(23),
      db = Wy(36232),
      yU = Wy(37709),
      bU = Wy(37711),
      WW = Wy(8241),
      UW = Wy(542),
      hW = Wy(535),
      fW = Wy(35533);
    let ZW = (Uy = (0, WW.type)("number"), hy = (0, WW.type)("number"), fy = (0, WW.type)("number"), Zy = (0, WW.type)("number"), cb = (0, WW.type)("number"), Py = (0, WW.type)("number"), oy = (0, WW.type)("string"), By = class extends WW.Schema {
        constructor() {
          super(...arguments), (0, yU.e)(this, "id", Ky, this), (0, yU.e)(this, "amount", ey, this), (0, yU.e)(this, "x", qb, this), (0, yU.e)(this, "y", sy, this), (0, yU.e)(this, "z", Sy, this), (0, yU.e)(this, "size", Ey, this), (0, yU.e)(this, "attributes", ly, this)
        }
      }, Ky = (0, bU.e)(By.prototype, "id", [Uy], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return 0
        }
      }), ey = (0, bU.e)(By.prototype, "amount", [hy], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return 0
        }
      }), qb = (0, bU.e)(By.prototype, "x", [fy], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return 0
        }
      }), sy = (0, bU.e)(By.prototype, "y", [Zy], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return 0
        }
      }), Sy = (0, bU.e)(By.prototype, "z", [cb], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return 0
        }
      }), Ey = (0, bU.e)(By.prototype, "size", [Py], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return 1
        }
      }), ly = (0, bU.e)(By.prototype, "attributes", [oy], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return "{}"
        }
      }), By),
      cU = (mb = (0, WW.type)("string"), Cy = (0, WW.type)("string"), Ty = class extends WW.Schema {
        constructor() {
          super(...arguments), (0, yU.e)(this, "itemName", Vy, this), (0, yU.e)(this, "enchantmentTier", Jy, this)
        }
      }, Vy = (0, bU.e)(Ty.prototype, "itemName", [mb], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: null
      }), Jy = (0, bU.e)(Ty.prototype, "enchantmentTier", [Cy], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: null
      }), Ty),
      PW = (gb = (0, WW.type)("string"), Gy = (0, WW.type)("string"), Oy = (0, WW.type)("number"), Ry = (0, WW.type)("number"), vb = (0, WW.type)("number"), ib = (0, WW.type)("float32"), My = (0, WW.type)("float32"), Yy = (0, WW.type)("float32"), Xy = (0, WW.type)("string"), ny = (0, WW.type)(["number"]), uy = (0, WW.type)("boolean"), rb = class extends WW.Schema {
        constructor() {
          super(...arguments), (0, yU.e)(this, "type", Hy, this), (0, yU.e)(this, "name", ab, this), (0, yU.e)(this, "x", Fy, this), (0, yU.e)(this, "y", py, this), (0, yU.e)(this, "z", Ly, this), (0, yU.e)(this, "xRotation", Qy, this), (0, yU.e)(this, "yRotation", jb, this), (0, yU.e)(this, "zRotation", Dy, this), (0, yU.e)(this, "followingEId", tb, this), (0, yU.e)(this, "followingOffset", wy, this), (0, yU.e)(this, "shouldMatchFollowingEntityRotation", kb, this)
        }
      }, Hy = (0, bU.e)(rb.prototype, "type", [gb], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: null
      }), ab = (0, bU.e)(rb.prototype, "name", [Gy], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return ""
        }
      }), Fy = (0, bU.e)(rb.prototype, "x", [Oy], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return 0
        }
      }), py = (0, bU.e)(rb.prototype, "y", [Ry], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return 0
        }
      }), Ly = (0, bU.e)(rb.prototype, "z", [vb], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return 0
        }
      }), Qy = (0, bU.e)(rb.prototype, "xRotation", [ib], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return 0
        }
      }), jb = (0, bU.e)(rb.prototype, "yRotation", [My], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return 0
        }
      }), Dy = (0, bU.e)(rb.prototype, "zRotation", [Yy], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return 0
        }
      }), tb = (0, bU.e)(rb.prototype, "followingEId", [Xy], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: null
      }), wy = (0, bU.e)(rb.prototype, "followingOffset", [ny], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return new WW.ArraySchema(0, 0, 0)
        }
      }), kb = (0, bU.e)(rb.prototype, "shouldMatchFollowingEntityRotation", [uy], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return !0
        }
      }), rb),
      oW = (Ny = (0, WW.type)("float32"), zb = (0, WW.type)("float32"), Iy = (0, WW.type)("boolean"), xb = (0, WW.type)("boolean"), Ay = (0, WW.type)("float32"), dy = (0, WW.type)("boolean"), yW = (0, WW.type)("string"), bW = (0, WW.type)("string"), Wb = (0, WW.type)("string"), Ub = (0, WW.type)("string"), hb = (0, WW.type)(["number"]), fb = (0, WW.type)("number"), Zb = (0, WW.type)({
        map: cU
      }), cW = class extends PW {
        constructor() {
          super(...arguments), (0, yU.e)(this, "scale", Pb, this), (0, yU.e)(this, "speed", ob, this), (0, yU.e)(this, "jumping", Bb, this), (0, yU.e)(this, "crouching", Kb, this), (0, yU.e)(this, "cameraPitch", eb, this), (0, yU.e)(this, "armSwinging", qW, this), (0, yU.e)(this, "heldItemName", sb, this), (0, yU.e)(this, "heldItemEnchantmentTier", Sb, this), (0, yU.e)(this, "pose", Eb, this), (0, yU.e)(this, "ridingVehicleEId", lb, this), (0, yU.e)(this, "meshOffset", mW, this), (0, yU.e)(this, "baseRenderHeading", Cb, this), (0, yU.e)(this, "armour", Tb, this)
        }
      }, Pb = (0, bU.e)(cW.prototype, "scale", [Ny], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return 1
        }
      }), ob = (0, bU.e)(cW.prototype, "speed", [zb], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return 0
        }
      }), Bb = (0, bU.e)(cW.prototype, "jumping", [Iy], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return !1
        }
      }), Kb = (0, bU.e)(cW.prototype, "crouching", [xb], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return !1
        }
      }), eb = (0, bU.e)(cW.prototype, "cameraPitch", [Ay], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return 0
        }
      }), qW = (0, bU.e)(cW.prototype, "armSwinging", [dy], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return !1
        }
      }), sb = (0, bU.e)(cW.prototype, "heldItemName", [yW], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: null
      }), Sb = (0, bU.e)(cW.prototype, "heldItemEnchantmentTier", [bW], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: null
      }), Eb = (0, bU.e)(cW.prototype, "pose", [Wb], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return "standing"
        }
      }), lb = (0, bU.e)(cW.prototype, "ridingVehicleEId", [Ub], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return null
        }
      }), mW = (0, bU.e)(cW.prototype, "meshOffset", [hb], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return new WW.ArraySchema(0, 0, 0)
        }
      }), Cb = (0, bU.e)(cW.prototype, "baseRenderHeading", [fb], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return 0
        }
      }), Tb = (0, bU.e)(cW.prototype, "armour", [Zb], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return new WW.MapSchema
        }
      }), cW),
      BW = (Vb = (0, WW.type)("string"), Jb = (0, WW.type)("string"), gW = (0, WW.type)("string"), Gb = (0, WW.type)("uint8"), Ob = class extends oW {
        constructor() {
          super(...arguments), (0, yU.e)(this, "variation", Rb, this), (0, yU.e)(this, "ownerDbId", vW, this), (0, yU.e)(this, "metaInfo", iW, this), (0, yU.e)(this, "aiState", Mb, this)
        }
      }, Rb = (0, bU.e)(Ob.prototype, "variation", [Vb], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return "default"
        }
      }), vW = (0, bU.e)(Ob.prototype, "ownerDbId", [Jb], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return null
        }
      }), iW = (0, bU.e)(Ob.prototype, "metaInfo", [gW], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return ""
        }
      }), Mb = (0, bU.e)(Ob.prototype, "aiState", [Gb], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return 0
        }
      }), Ob);
    Yb = (0, WW.type)("string"), Xb = (0, WW.type)("string"), nb = (0, WW.type)("string"), ub = (0, WW.type)("string"), rW = class extends PW {
      constructor() {
        super(...arguments), (0, yU.e)(this, "meshKind", Hb, this), (0, yU.e)(this, "meshOpts", aW, this), (0, yU.e)(this, "pose", Fb, this), (0, yU.e)(this, "leaderboardTop", pb, this)
      }
    }, Hb = (0, bU.e)(rW.prototype, "meshKind", [Yb], {
      configurable: !0,
      enumerable: !0,
      writable: !0,
      initializer: null
    }), aW = (0, bU.e)(rW.prototype, "meshOpts", [Xb], {
      configurable: !0,
      enumerable: !0,
      writable: !0,
      initializer: null
    }), Fb = (0, bU.e)(rW.prototype, "pose", [nb], {
      configurable: !0,
      enumerable: !0,
      writable: !0,
      initializer: null
    }), pb = (0, bU.e)(rW.prototype, "leaderboardTop", [ub], {
      configurable: !0,
      enumerable: !0,
      writable: !0,
      initializer: null
    });

    function KW(yb) {
      return Object.keys(WW.Metadata.getFields(yb))
    }
    const eW = KW(BW);
    for (const yh of UW.n)
      if (!eW.includes(yh)) throw new Error(`Mob Schema is missing a networked property: "${yh}"`);
    const qU = KW((Lb = (0, WW.type)("string"), Qb = (0, WW.type)("float32"), jW = (0, WW.type)("float32"), Db = (0, WW.type)("float32"), tW = (0, WW.type)("float32"), wb = class extends PW {
      constructor() {
        super(...arguments), (0, yU.e)(this, "soundName", kW, this), (0, yU.e)(this, "volume", Nb, this), (0, yU.e)(this, "refDistance", zW, this), (0, yU.e)(this, "maxHearDist", Ib, this), (0, yU.e)(this, "rate", xW, this)
      }
    }, kW = (0, bU.e)(wb.prototype, "soundName", [Lb], {
      configurable: !0,
      enumerable: !0,
      writable: !0,
      initializer: function() {
        return ""
      }
    }), Nb = (0, bU.e)(wb.prototype, "volume", [Qb], {
      configurable: !0,
      enumerable: !0,
      writable: !0,
      initializer: function() {
        return 1
      }
    }), zW = (0, bU.e)(wb.prototype, "refDistance", [jW], {
      configurable: !0,
      enumerable: !0,
      writable: !0,
      initializer: function() {
        return fW.g
      }
    }), Ib = (0, bU.e)(wb.prototype, "maxHearDist", [Db], {
      configurable: !0,
      enumerable: !0,
      writable: !0,
      initializer: function() {
        return fW.d
      }
    }), xW = (0, bU.e)(wb.prototype, "rate", [tW], {
      configurable: !0,
      enumerable: !0,
      writable: !0,
      initializer: function() {
        return 1
      }
    }), wb));
    for (const yh of hW.d)
      if (!qU.includes(yh)) throw new Error(`AudioEntity Schema is missing a replicated property: "${yh}"`);
    var sW = Wy(37125),
      SW = Wy(1102),
      EW = Wy(547),
      lW = Wy(36913),
      mU = Wy(3525),
      CW = Wy(258),
      TW = Wy(35917),
      VW = Wy(36797),
      JW = Wy(1844),
      gU = Wy(35832),
      GW = Wy(37147),
      OW = Wy(35961),
      RW = Wy(271),
      vU = Wy.n(RW),
      iU = Wy(36594),
      MW = Wy(35782),
      YW = Wy(36739),
      XW = Wy(36814);
    class nW {
      constructor(yb, bb) {
        this.bloxd = yb, this.eId = bb, this.lb = void 0, this.colyseusEntity = void 0, this.canSeeSub = void 0, this.canAttackSub = void 0, this.interactableSub = void 0, this.overlayColourSub = void 0, this.opacitySub = void 0, this.zIndexSub = void 0, this.multilineTextBoxSub = void 0, this.previousHidingMeshManagerState = void 0, this.meshKind = void 0, this.meshOpts = void 0, this.leaderboardTop = void 0, this.meshRebuildQueued = !1, this.rh = !1, this.lb = yb.lb
      }
      initClient(yb) {
        var bb, Wy, Uy;
        this.colyseusEntity = yb, this.meshKind = yb.meshKind, this.meshOpts = yb.meshOpts, this.leaderboardTop = yb.leaderboardTop, this.lb.Km.add([yb.x, yb.y, yb.z], 1, 1, null, null, !1, !1, this.eId), this.lb.Km.hWy(this.eId, "smoothToServerPos");
        const hy = "Person" === this.meshKind;
        this.lb.Km.hWy(this.eId, "meshRotation", {
          isServerControlled: !0,
          ...hy ? {
            defaultRotationsPerSecond: .5
          } : {},
          childrenNodeParams: hy ? [{
            nodeName: "HeadMesh",
            softTolerance: GW.i,
            hardTolerance: null
          }] : []
        }), this.updateHidingMeshMgr(), this.canSeeSub = Ab.g.subscribe(`otherEntitySettings|${this.eId}|canSee`, (yb => {
          this.updateHidingMeshMgr()
        }));
        const fy = () => {
          const yb = this.lb.Km.Acy(this.eId);
          if (!yb) return;
          const bb = (0, OW.j)(this.eId);
          if ("number" === typeof yb.xWy) {
            var Wy, Uy, hy, fy;
            const Zy = null === (Wy = (0, JW.m)("head", null === (hy = this.getSpec()) || void 0 === hy || null === (fy = hy.opts.textures) || void 0 === fy ? void 0 : fy.head)) || void 0 === Wy || null === (Uy = Wy.personModel) || void 0 === Uy ? void 0 : Uy.fullBody;
            return this.lb.Ch.Iby.setPickable(yb.xWy, bb && !Zy), void(0, MW.updatePersonAttachmentPickability)(this.lb, this.eId, bb)
          }
          const Zy = yb.mesh;
          if (Zy)
            for (const cb of [Zy, ...Zy.getChildMeshes(!1)]) "Kf" in cb && !cb.name.startsWith("Cape|") && (cb.Kf = bb)
        };
        this.canAttackSub = Ab.g.subscribe(`otherEntitySettings|${this.eId}|canAttack`, fy), this.interactableSub = Ab.g.subscribe(`otherEntitySettings|${this.eId}|interactable`, fy), this.overlayColourSub = Ab.g.subscribe(`otherEntitySettingsClientifiedEId|${this.eId}|overlayColour`, (yb => {
          this.updateOverlayColour(yb)
        })), this.opacitySub = Ab.g.subscribe(`otherEntitySettingsClientifiedEId|${this.eId}|opacity`, (yb => {
          this.updateOpacity(yb)
        })), this.zIndexSub = Ab.g.subscribe(`otherEntitySettingsClientifiedEId|${this.eId}|zIndex`, (yb => {
          this.updateZIndex(yb)
        }));
        const Zy = this.lb.KWy[this.lb.eWy][this.eId];
        this.updateOverlayColour(null !== (bb = null === Zy || void 0 === Zy ? void 0 : Zy.overlayColour) && void 0 !== bb ? bb : null), this.updateOpacity(null !== (Wy = null === Zy || void 0 === Zy ? void 0 : Zy.opacity) && void 0 !== Wy ? Wy : 1), this.updateZIndex(null !== (Uy = null === Zy || void 0 === Zy ? void 0 : Zy.zIndex) && void 0 !== Uy ? Uy : 0), this.multilineTextBoxSub = (0, gU.q)(this.lb, this.eId)
      }
      onChangeClient(yb, bb) {
        if ("xRotation" === yb || "yRotation" === yb || "zRotation" === yb)(0, gU.t)(this.lb, this.eId, yb, bb);
        else if ("pose" === yb) {
          const yb = this.lb.Km.coy(this.eId);
          yb && (yb.pose = bb || "standing")
        } else "meshKind" === yb || "meshOpts" === yb ? (this[yb] = bb, this.queueMeshRebuild()) : "name" === yb && "" !== bb ? this.updateHidingMeshMgr() : "leaderboardTop" === yb && (this.leaderboardTop = bb, Ab.g.EZ(`leaderboardTop|${this.eId}`, bb))
      }
      disposeClient() {
        this.rh = !0, this.lb.Km.deleteEntity(this.eId), Ab.g.unsubscribe(this.canSeeSub), Ab.g.unsubscribe(this.canAttackSub), Ab.g.unsubscribe(this.interactableSub), Ab.g.unsubscribe(this.overlayColourSub), Ab.g.unsubscribe(this.opacitySub), Ab.g.unsubscribe(this.zIndexSub), Ab.g.unsubscribe(this.multilineTextBoxSub)
      }
      getCurrentHidingMeshMgrState() {
        var yb, bb;
        return {
          canSee: null !== (yb = null === (bb = this.lb.KWy[this.lb.eWy][this.eId]) || void 0 === bb ? void 0 : bb.canSee) && void 0 !== yb && yb,
          name: this.colyseusEntity.name,
          meshKind: this.meshKind,
          meshOpts: this.meshOpts
        }
      }
      updateHidingMeshMgr() {
        var yb, bb, Wy;
        const {
          lb: Uy
        } = this, {
          Km: hy
        } = Uy, fy = this.getCurrentHidingMeshMgrState();
        if ((0, CW.Qd)(this.previousHidingMeshManagerState, fy)) return;
        if (this.previousHidingMeshManagerState = fy, hy.fWy(this.eId, "hidingMeshManager"), null === (yb = Uy.KWy[Uy.eWy][this.eId]) || void 0 === yb || !yb.canSee) return;
        const Zy = this.getSpec();
        if (!Zy) return;
        const {
          type: cb,
          opts: Py
        } = Zy;
        "Person" === cb && (Py.textures = (0, JW.o)(Py.textures)), Py.eId = this.eId, hy.hWy(this.eId, "hidingMeshManager", {
          addMeshComponent: () => {
            var yb, bb, Wy;
            "Leaderboard" === cb && (Py.leaderboardTop = this.leaderboardTop);
            const fy = this.bloxd.client.meshCreator.getEntityMesh(cb, Py, (yb => {
              var bb, Wy;
              if ("number" === typeof yb) {
                var hy, fy, Zy;
                const bb = Uy.Ch.Iby;
                bb.setEntityId(yb, this.eId);
                const Wy = "Person" === cb && (null === (hy = (0, JW.m)("head", null === (Zy = Py.textures) || void 0 === Zy ? void 0 : Zy.head)) || void 0 === hy || null === (fy = hy.personModel) || void 0 === fy ? void 0 : fy.fullBody);
                return void bb.setPickable(yb, (0, OW.j)(this.eId) && !Wy)
              }
              const oy = yb;
              for (const cb of [oy, ...oy.getChildMeshes(!1)]) void 0 === cb.Kf || cb.name.startsWith("Cape|") || (cb.Kf = (0, OW.j)(this.eId), cb.metadata ??= new Uy.Ch.ef, cb.metadata.eId = this.eId);
              this.updateOpacity(null !== (bb = null === (Wy = Uy.KWy[Uy.eWy][this.eId]) || void 0 === Wy ? void 0 : Wy.opacity) && void 0 !== bb ? bb : 1)
            }));
            if (!fy) return;
            const {
              xWy: Zy,
              mesh: oy,
              meshOffset: By,
              nameYOffset: Ky,
              modelLoaded: ey
            } = fy;
            null === ey || void 0 === ey || ey.then((() => {
              var yb;
              (null === (yb = hy.Acy(this.eId)) || void 0 === yb ? void 0 : yb.mesh) === oy && (this.previousHidingMeshManagerState = null, this.updateHidingMeshMgr())
            }));
            const qb = null === Zy ? null : Uy.Ch.Iby.doy(Zy, 0);
            if (hy.hWy(this.eId, hy.names.mesh, {
                xWy: Zy,
                lob: qb,
                mesh: oy,
                zsy: !1,
                Toy: "Leaderboard" !== cb,
                offset: By.slice(),
                Nqy: "ParticleEmitter" === cb && Py.followTargetMeshOffset ? yb => {
                  var bb;
                  vU().copy(yb, By);
                  const Wy = null === (bb = hy.koy(this.eId)) || void 0 === bb ? void 0 : bb.GU,
                    Uy = void 0 === Wy ? null : hy.coy(Wy);
                  if (Uy) {
                    var fy, Zy;
                    const bb = this.bloxd.getEntityHeading(null !== (fy = Uy.ridingVehicleEId) && void 0 !== fy ? fy : Wy, !0),
                      hy = Math.sin(bb),
                      cb = Math.cos(bb);
                    yb[0] += Uy.meshOffset[0] * cb + Uy.meshOffset[2] * hy, yb[1] += Uy.meshOffset[1], yb[2] += Uy.meshOffset[2] * cb - Uy.meshOffset[0] * hy;
                    const Py = null !== (Zy = Uy.ridingVehicleEId) && void 0 !== Zy ? Zy : null;
                    null !== Py && (0, XW.e)(this.lb, Py, yb)
                  }
                } : null
              }), "Person" === cb) {
              var sy, Sy, Ey, ly;
              hy.hWy(this.eId, hy.names.meshAttachments, {
                personFullBody: null !== (sy = null === (Sy = (0, JW.m)("head", null === (ly = Py.textures) || void 0 === ly ? void 0 : ly.head)) || void 0 === Sy || null === (Ey = Sy.personModel) || void 0 === Ey ? void 0 : Ey.fullBody) && void 0 !== sy && sy
              });
              for (const yb of SW.x) {
                var mb, Cy, Ty;
                const bb = null === (mb = Py.textures) || void 0 === mb ? void 0 : mb[yb];
                bb && null !== (Cy = (0, JW.m)(yb, bb)) && void 0 !== Cy && null !== (Ty = Cy.attachments) && void 0 !== Ty && Ty.length && VW.c.Player.meshApi.updatePlayerCosmetic(this.eId, Zy, yb, bb)
              }
              hy.hWy(this.eId, hy.names.moveState), hy.hWy(this.eId, "updateWalkingState", {
                xWy: Zy,
                lob: qb,
                walkingLegSwingDuration: GW.n
              }), hy.hWy(this.eId, "humanoidMesh", {
                xWy: Zy,
                lob: qb,
                heldItemPositionParams: {},
                maxWalkingAngleOverride: null
              }), hy.hWy(this.eId, "animator", {
                xWy: Zy,
                lob: qb,
                modelLifeformType: "Player"
              }), YW.f.hasAnimation("Person") && hy.hWy(this.eId, "rigAnimation", {
                target: "Person",
                xWy: Zy
              }), hy.coy(this.eId).pose = this.colyseusEntity.pose || "standing"
            } else if ("BloxdBlock" === cb && null !== Zy) {
              hy.hWy(this.eId, "animator", {
                xWy: Zy,
                lob: qb,
                modelLifeformType: null
              });
              const yb = (0, lW.t)(Py.blockName);
              null !== yb && hy.hWy(this.eId, "rigAnimation", {
                target: yb,
                xWy: Zy
              })
            }
            hy.gSy(this.eId, "entityName", {
              name: this.colyseusEntity.name,
              nameYOffset: Ky
            }), this.bloxd.setEntityName(this.eId, this.colyseusEntity.name), !0 === Py.autoRotate && (hy.fWy(this.eId, "meshRotation"), hy.hWy(this.eId, "autoRotate"));
            const {
              lineToEId: Vy
            } = Py;
            (0, EW.D)(Vy) || hy.hWy(this.eId, "lineToEntity", {
              lineToEId: Vy
            });
            const Jy = Uy.KWy[Uy.eWy][this.eId];
            this.updateOverlayColour(null !== (yb = null === Jy || void 0 === Jy ? void 0 : Jy.overlayColour) && void 0 !== yb ? yb : null), this.updateOpacity(null !== (bb = null === Jy || void 0 === Jy ? void 0 : Jy.opacity) && void 0 !== bb ? bb : 1), this.updateZIndex(null !== (Wy = null === Jy || void 0 === Jy ? void 0 : Jy.zIndex) && void 0 !== Wy ? Wy : 0)
          },
          removeMeshComponent: () => {
            "Person" !== cb && "BloxdBlock" !== cb || hy.fWy(this.eId, "rigAnimation"), hy.fWy(this.eId, hy.names.mesh), hy.Ccy(this.eId, hy.names.meshAttachments) && hy.fWy(this.eId, hy.names.meshAttachments), hy.fWy(this.eId, "entityName"), hy.fWy(this.eId, "autoRotate"), hy.fWy(this.eId, "lineToEntity"), "Person" === cb ? (hy.fWy(this.eId, hy.names.moveState), hy.fWy(this.eId, "updateWalkingState"), hy.fWy(this.eId, "humanoidMesh"), hy.fWy(this.eId, "animator")) : "BloxdBlock" === cb && hy.fWy(this.eId, "animator")
          },
          hideDist: null !== (bb = Py.hideDist) && void 0 !== bb ? bb : 80,
          movingHideDist: null !== (Wy = Py.hideDist) && void 0 !== Wy ? Wy : 120,
          displayOutsideLoadedChunk: Py.hideDist > 100,
          immediatelyUpdate: !0,
          zp: "BloxdBlock" === cb ? Py.blockName : cb
        })
      }
      queueMeshRebuild() {
        this.meshRebuildQueued || (this.meshRebuildQueued = !0, queueMicrotask((() => {
          this.meshRebuildQueued = !1, this.rh || this.updateHidingMeshMgr()
        })))
      }
      getSpec() {
        return (0, mU.i)({
          meshKind: this.meshKind,
          meshOpts: this.meshOpts
        })
      }
      updateOverlayColour(yb) {
        var bb, Wy;
        if ("Person" !== this.meshKind) return;
        let Uy = new TW.e(0, 0, 0, 0);
        if (null !== yb) {
          const bb = (0, CW.Y)(yb);
          Uy = new TW.e(bb[0] / 255, bb[1] / 255, bb[2] / 255, .5)
        }
        const hy = null !== (bb = null === (Wy = this.lb.Km.Acy(this.eId)) || void 0 === Wy ? void 0 : Wy.xWy) && void 0 !== bb ? bb : null;
        null !== hy && VW.c.Player.meshApi.updateMeshOverlayColour(hy, Uy)
      }
      updateZIndex(yb) {
        var bb;
        if ("Person" !== this.meshKind) return;
        const Wy = null === (bb = this.lb.Km.Acy(this.eId)) || void 0 === bb ? void 0 : bb.xWy;
        "number" === typeof Wy && this.lb.Ch.Iby.setRenderingGroupId(Wy, yb)
      }
      updateOpacity(yb) {
        const bb = this.lb.Km.Acy(this.eId);
        bb && ("number" !== typeof bb.xWy ? bb.mesh && "ParticleEmitter" !== this.meshKind && (0, iU.g)(bb.mesh, yb) : VW.c.Player.meshApi.updateMeshOpacity(bb.xWy, yb))
      }
    }
    var uW = Wy(37702);
    class rU {
      constructor(yb, bb) {
        this.eId = bb, this.lb = void 0, this.schema = void 0, this.lb = yb.lb
      }
      initClient(yb) {
        this.schema = yb, this.lb.Km.add([yb.x, yb.y, yb.z], .1, .1, null, null, !1, !1, this.eId), this.lb.Km.hWy(this.eId, "smoothToServerPos"), uW.e.add(this.eId, this.copyOpts())
      }
      onChangeClient(yb) {
        hW.d.includes(yb) && uW.e.update(this.eId, this.copyOpts())
      }
      disposeClient() {
        uW.e.remove(this.eId), this.lb.Km.deleteEntity(this.eId)
      }
      copyOpts() {
        const {
          soundName: yb,
          volume: bb,
          refDistance: Wy,
          maxHearDist: Uy,
          rate: hy
        } = this.schema;
        return {
          soundName: yb,
          volume: bb,
          refDistance: Wy,
          maxHearDist: Uy,
          rate: hy
        }
      }
    }
    var HW = Wy(2977),
      aU = Wy(35525),
      FW = Wy(5736),
      pW = Wy(36446),
      LW = Wy(2234),
      QW = Wy(36847),
      jU = Wy(8194),
      DW = Wy(37165),
      tU = Wy(36421),
      wW = Wy(2539);
    class kU {
      constructor(yb, bb) {
        let Wy = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 4,
          Uy = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : () => performance.now();
        this.eoy = yb, this.lb = bb, this.setupBudgetMs = Wy, this.now = Uy, this.createStateCallbacks = void 0, this.roomStateCallbacks = void 0, this.allItems = {}, this.detachers = new Map, this.deferredSetups = new Map, this.queuedSetups = new Map, this.promotedSetups = new Set, this.setupBudgetLeftMs = void 0, this.lastRefillMs = void 0, this.roomState = void 0, this.rh = !1, this.onFrame = () => {
          this.setUpQueuedEntities(!0)
        }, this.FE = () => {
          this.setUpQueuedEntities(this.now() - this.lastRefillMs > 100)
        }, this.setUpPromoted = () => {
          for (const yb of this.promotedSetups) {
            this.promotedSetups.delete(yb);
            const bb = this.queuedSetups.get(yb);
            bb && (this.queuedSetups.delete(yb), this.timedSetup(bb, yb))
          }
        }, this.createStateCallbacks = (0, jU.getStateCallbacks)(yb), this.roomStateCallbacks = this.createStateCallbacks(yb.state), this.roomState = yb.state, this.setupBudgetLeftMs = Wy, this.lastRefillMs = Uy()
      }
      setup() {
        this.setupEntityHandlers(), this.setupItemHandlers(), this.eoy.onStateChange(this.setUpPromoted), this.lb.on("beforeInputs", this.onFrame), this.lb.on("Zb", this.FE)
      }
      setUpQueuedEntities(yb) {
        var bb;
        if ((null === (bb = (0, LW.e)().client.getMsgHandler()) || void 0 === bb ? void 0 : bb.eoy) !== this.eoy) return this.lb.off("beforeInputs", this.onFrame), this.lb.off("Zb", this.FE), this.queuedSetups.clear(), void this.promotedSetups.clear();
        if (yb && (this.setupBudgetLeftMs = this.setupBudgetMs, this.lastRefillMs = this.now()), this.setUpPromoted(), 0 !== this.queuedSetups.size)
          for (vU().copy(NW, this.lb.Km.Tl(this.lb.eWy)); this.setupBudgetLeftMs > 0;) {
            const yb = this.nearestQueued(NW);
            if (null === yb) return;
            this.setUpIfQueued(yb), this.setUpPromoted()
          }
      }
      nearestQueued(yb) {
        let bb = null,
          Wy = 1 / 0;
        return this.queuedSetups.forEach(((Uy, hy) => {
          const fy = function(yb, bb) {
            return (bb.x - yb[0]) ** 2 + (bb.y - yb[1]) ** 2 + (bb.z - yb[2]) ** 2
          }(yb, Uy);
          (null === bb || fy < Wy) && (bb = hy, Wy = fy)
        })), bb
      }
      setUpOrQueue(yb, bb) {
        0 === this.queuedSetups.size && this.setupBudgetLeftMs > 0 || this.mustSetUpNow(yb, bb) ? this.timedSetup(yb, bb) : this.queuedSetups.set(bb, yb)
      }
      mustSetUpNow(yb, bb) {
        const Wy = this.lb.Jcy;
        if (bb === Wy) return !0;
        const Uy = this.roomState.entities.get(Wy);
        return !(!Uy || Uy.ridingVehicleEId !== bb && Uy.followingEId !== bb) || (zU(yb.type) === sW.d || (0, LW.e)().getFollowingEntities(bb).length > 0)
      }
      setUpIfQueued(yb) {
        const bb = this.queuedSetups.get(yb);
        bb && (this.queuedSetups.delete(yb), this.timedSetup(bb, yb))
      }
      promoteIfQueued(yb) {
        null !== yb && this.queuedSetups.has(yb) && this.promotedSetups.add(yb)
      }
      timedSetup(yb, bb) {
        const Wy = this.now();
        this.setupEntity(yb, bb), this.setupBudgetLeftMs -= this.now() - Wy
      }
      setupEntityHandlers() {
        this.roomStateCallbacks.entities.cC(((yb, bb) => {
          this.lb.Jcy ? this.setUpOrQueue(yb, bb) : this.deferEntitySetupUntilInitInfo(yb, bb)
        })), this.roomStateCallbacks.entities.Yby(((yb, bb) => {
          const Wy = this.deferredSetups.get(bb);
          Wy && (Ab.g.unsubscribe(Wy), this.deferredSetups.delete(bb)), this.queuedSetups.delete(bb), this.detach(bb), (0, LW.e)().client.disposeEntity(bb)
        }))
      }
      deferEntitySetupUntilInitInfo(yb, bb) {
        const Wy = Ab.g.iK("initInfoReceived", (() => {
          this.deferredSetups.delete(bb), this.setUpOrQueue(yb, bb)
        }));
        this.deferredSetups.set(bb, Wy), (0, HW.onGameResetOnce)((() => {
          this.deferredSetups.get(bb) === Wy && (Ab.g.unsubscribe(Wy), this.deferredSetups.delete(bb)), (0, LW.e)().updatePositionAndPhysics(this.lb.eWy, {
            type: FW.q.DEFAULT,
            tier: null
          }, !0), (0, LW.e)().takeHeldPlayerBodySize(this.lb.eWy);
          const yb = this.lb.Km.aPy(this.lb.eWy);
          yb && (yb.movementType = FW.m.NORMAL)
        }))
      }
      setupEntity(yb, bb) {
        const Wy = bb === this.lb.Jcy;
        if (Wy)(0, LW.e)().client.dUy(this.lb.eWy, null, null);
        else {
          const {
            type: Wy
          } = yb, Uy = zU(Wy);
          if (void 0 === Uy) return void
          function(yb, bb) {
            const Wy = String(yb);
            if (IW.has(Wy)) return;
            IW.add(Wy);
            const Uy = Wy.length > 80 ? `${Wy.slice(0,80)}...` : Wy,
              hy = `No client handler for entity type ${JSON.stringify(Uy)}, so entity ${bb} is not set up`;
            console.warn(hy), (0, wW.c)("uncaught", hy, "unknown_entity_type")
          }(Wy, bb);
          (0, LW.e)().client.dUy(bb, yb, new Uy((0, LW.e)(), bb, Wy))
        }
        const Uy = this.createStateCallbacks(yb);
        if (Wy) return this.setupMapSchemaCallbacks(bb, yb, Uy, "armour"), this.setupScalarField(bb, yb, Uy, "scale"), this.setupScalarField(bb, yb, Uy, "ridingVehicleEId"), this.setupScalarField(bb, yb, Uy, "followingEId"), this.setupScalarField(bb, yb, Uy, "followingOffset"), void this.setupScalarField(bb, yb, Uy, "shouldMatchFollowingEntityRotation");
        for (const hy of KW(yb.constructor)) yb[hy] instanceof WW.MapSchema ? this.setupMapSchemaCallbacks(bb, yb, Uy, hy) : this.setupScalarField(bb, yb, Uy, hy)
      }
      setupMapSchemaCallbacks(yb, bb, Wy, Uy) {
        const hy = Wy[Uy],
          fy = new Map;
        hy.cC(((Wy, hy) => {
          if (this.onEntityFieldChange(yb, bb, Uy, {
              key: hy,
              value: Wy
            }), !(Wy instanceof WW.Schema)) return;
          const Zy = this.createStateCallbacks(Wy),
            cb = [];
          for (const fy of KW(Wy.constructor)) cb.push(this.listenForFutureChanges(Zy, fy, (() => {
            this.onEntityFieldChange(yb, bb, Uy, {
              key: hy,
              value: Wy
            })
          })));
          fy.set(hy, (() => {
            for (const yb of cb) yb()
          }))
        })), hy.Yby(((Wy, hy) => {
          var Zy;
          null === (Zy = fy.get(hy)) || void 0 === Zy || Zy(), fy.delete(hy), this.onEntityFieldChange(yb, bb, Uy, {
            key: hy,
            value: null
          })
        })), this.addDetacher(yb, (() => {
          for (const yb of fy.values()) yb();
          fy.clear()
        }))
      }
      setupScalarField(yb, bb, Wy, Uy) {
        this.onEntityFieldChange(yb, bb, Uy, bb[Uy]);
        const hy = this.listenForFutureChanges(Wy, Uy, (Wy => {
          this.onEntityFieldChange(yb, bb, Uy, Wy)
        }));
        this.addDetacher(yb, hy)
      }
      addDetacher(yb, bb) {
        let Wy = this.detachers.get(yb);
        Wy || (Wy = [], this.detachers.set(yb, Wy)), Wy.push(bb)
      }
      detach(yb) {
        for (const Wy of null !== (bb = this.detachers.get(yb)) && void 0 !== bb ? bb : []) {
          var bb;
          Wy()
        }
        this.detachers.delete(yb)
      }
      listenForFutureChanges(yb, bb, Wy) {
        return yb.listen(bb, Wy, !1)
      }
      onEntityFieldChange(yb, bb, Wy, Uy) {
        switch (Wy) {
          case "ridingVehicleEId": {
            this.promoteIfQueued(Uy);
            const bb = this.lb.Km.coy((0, aU.c)(yb));
            bb && (bb.ridingVehicleEId = Uy);
            break
          }
          case "armour":
            this.handleArmourChange(yb, Uy);
            break;
          case "followingEId":
            this.promoteIfQueued(Uy), this.handleFollowingEIdChange(yb, bb, Uy);
            break;
          case "xRotation":
          case "yRotation":
          case "zRotation":
            this.handleRotationChange(yb, Wy, Uy);
            break;
          case "scale":
            this.handleScaleChange(yb, Uy);
            break;
          case "baseRenderHeading":
            this.handleBaseRenderHeadingChange(yb, Uy);
            break;
          case "followingOffset":
            this.handleFollowingOffsetChange(yb, Uy);
            break;
          case "shouldMatchFollowingEntityRotation":
            this.handleShouldMatchFollowingEntityRotationChange(yb, Uy);
            break;
          case "x":
          case "y":
          case "z":
            return void this.handlePositionChange(yb, Wy, Uy)
        }(0, LW.e)().client.updateEntityField(yb, Wy, Uy)
      }
      handleArmourChange(yb, bb) {
        var Wy, Uy;
        const {
          key: hy,
          value: fy
        } = bb;
        (0, VW.u)(yb, hy, null !== (Wy = null === fy || void 0 === fy ? void 0 : fy.itemName) && void 0 !== Wy ? Wy : null, null !== (Uy = null === fy || void 0 === fy ? void 0 : fy.enchantmentTier) && void 0 !== Uy ? Uy : null)
      }
      handleFollowingEIdChange(yb, bb, Wy) {
        const Uy = (0, aU.c)(yb),
          hy = Uy === this.lb.eWy;
        if (this.lb.Km.fWy(Uy, this.lb.Km.names.RJ), Wy) this.lb.Km.fWy(Uy, "smoothToServerPos"), this.lb.Km.hWy(Uy, this.lb.Km.names.RJ, {
          GU: (0, aU.c)(Wy),
          offset: Array.from(bb.followingOffset),
          NPy: bb.shouldMatchFollowingEntityRotation,
          APy: !0,
          dPy: (yb, Uy) => {
            if (vU().copy(yb, bb.followingOffset), bb.ridingVehicleEId === Wy) {
              const bb = (0, aU.c)(Wy),
                hy = (0, LW.e)().getEntityHeading(bb, Uy);
              vU().Of(yb, yb, vU().ZERO, hy)
            }
          }
        });
        else if (!hy) {
          this.lb.Km.Ccy(Uy, "smoothToServerPos") || this.lb.Km.hWy(Uy, "smoothToServerPos");
          const yb = this.lb.Km.getState(Uy, "smoothToServerPos"),
            bb = this.lb.Km.yfy(Uy).position;
          (0, tU.setServerPosition)(yb, bb[0], bb[1], bb[2])
        }
      }
      handleRotationChange(yb, bb, Wy) {
        const Uy = "xRotation" === bb ? 0 : "yRotation" === bb ? 1 : 2;
        for (const hy of (0, LW.e)().getFollowingEntities(yb)) {
          const yb = this.lb.Km.getState(hy, "meshRotation"),
            bb = this.lb.Km.koy(hy);
          yb && bb.NPy && (yb.serverSetRotation[Uy] = Wy)
        }
      }
      handleScaleChange(yb, bb) {
        const Wy = (0, aU.c)(yb);
        if (Ab.g.EZ(`entityScale|${Wy}`, bb), Wy === this.lb.eWy) {
          var Uy;
          (0, LW.e)().removeFromEyeHeightCache(Wy);
          const yb = this.lb.Km.aPy(this.lb.eWy),
            bb = null !== (Uy = null === yb || void 0 === yb ? void 0 : yb.physicsState) && void 0 !== Uy ? Uy : {
              type: FW.q.DEFAULT,
              tier: null
            };
          return void(0, LW.e)().updatePositionAndPhysics(this.lb.eWy, bb, !1)
        }
        const hy = (0, LW.e)().getLifeformType(Wy);
        if (null === hy) return;
        const {
          physicsBodyWidth: fy,
          physicsBodyHeight: Zy
        } = (0, DW.g)(bb, hy);
        this.lb.Km.toy(Wy, fy, Zy, fy)
      }
      handleBaseRenderHeadingChange(yb, bb) {
        const Wy = this.lb.Km.getState(yb, "meshRotation");
        Wy && (Wy.baseRenderRotation[1] = bb);
        for (const Uy of (0, LW.e)().getFollowingEntities(yb)) {
          const yb = this.lb.Km.getState(Uy, "meshRotation"),
            Wy = this.lb.Km.koy(Uy);
          yb && Wy.NPy && (yb.baseRenderRotation[1] = bb)
        }
      }
      handleFollowingOffsetChange(yb, bb) {
        const Wy = this.lb.Km.koy((0, aU.c)(yb));
        if (Wy && Wy.offset) {
          const yb = bb ? Array.from(bb) : vU().ZERO;
          Wy.offset[0] = yb[0], Wy.offset[1] = yb[1], Wy.offset[2] = yb[2]
        }
      }
      handleShouldMatchFollowingEntityRotationChange(yb, bb) {
        const Wy = this.lb.Km.koy((0, aU.c)(yb));
        Wy && (Wy.NPy = null === bb || void 0 === bb || bb)
      }
      handlePositionChange(yb, bb, Wy) {
        if (this.lb.Km.Ccy(yb, "smoothToServerPos")) {
          const Uy = this.lb.Km.getState(yb, "smoothToServerPos");
          (0, tU.setServerPositionAxis)(Uy, xU[bb], Wy)
        }
      }
      setupItemHandlers() {
        this.roomStateCallbacks.items.cC(((yb, bb) => {
          this.allItems[bb] = yb, (0, pW.k)(this.lb, bb, [yb.x, yb.y, yb.z], yb.id, {
            amount: yb.amount,
            attributes: JSON.parse(yb.attributes),
            qWy: (0, db.d)(this.lb).cantPickUpItem(bb),
            size: yb.size,
            predictedAt: (0, LW.e)().client.itemDropPrediction.onServerItemAdded(bb)
          });
          const Wy = this.createStateCallbacks(yb);
          for (const Uy of KW(ZW)) this.onItemFieldChange(bb, Uy, yb[Uy]), this.addDetacher(bb, this.listenForFutureChanges(Wy, Uy, (yb => {
            this.onItemFieldChange(bb, Uy, yb)
          })))
        })), this.roomStateCallbacks.items.Yby(((yb, bb) => {
          delete this.allItems[bb], this.detach(bb), (0, LW.e)().client.itemDropPrediction.onServerItemRemoved(bb), this.lb.Km.Ccy(bb, this.lb.Km.names.itemState) && this.lb.Km.deleteEntity(bb), (0, db.d)(this.lb).disposeEntity(bb)
        }))
      }
      onItemFieldChange(yb, bb, Wy) {
        if (bb in xU) {
          if (this.lb.Km.Ccy(yb, "itemState")) {
            const Uy = this.lb.Km.getState(yb, "smoothToServerPos");
            (0, tU.setServerPositionAxis)(Uy, xU[bb], Wy), (0, LW.e)().client.itemDropPrediction.onServerItemMoved(yb)
          }
          return
        }
        if (!this.lb.Km.Ccy(yb, "itemState")) return;
        const Uy = this.lb.Km.getState(yb, "itemState");
        "amount" === bb && Wy !== Uy.amount && (Uy.creationTime = Date.now()), Uy[bb] = "attributes" === bb ? JSON.parse(Wy) : Wy
      }
      dispose() {
        if (!this.rh) {
          this.rh = !0, this.lb.off("beforeInputs", this.onFrame), this.lb.off("Zb", this.FE), this.queuedSetups.clear(), this.promotedSetups.clear();
          for (const yb of this.deferredSetups.values()) Ab.g.unsubscribe(yb);
          this.deferredSetups.clear(), this.lb.Km.fWy(this.lb.eWy, this.lb.Km.names.RJ);
          for (const yb in this.allItems) this.lb.Km.deleteEntity(yb), delete this.allItems[yb];
          for (const yb of [...this.detachers.keys()]) this.detach(yb);
          (0, db.d)(this.lb).clear();
          for (const yb of (0, LW.e)().client.iterateEntityIds())(0, LW.e)().client.disposeEntity(yb)
        }
      }
    }
    const NW = [0, 0, 0];

    function zU(yb) {
      if ("string" !== typeof yb) return;
      const bb = yb.indexOf("|"),
        Wy = -1 === bb ? yb : yb.slice(0, bb),
        Uy = dW();
      return Object.hasOwn(Uy, Wy) ? Uy[Wy] : void 0
    }
    const IW = new Set;
    const xU = {
      x: 0,
      y: 1,
      z: 2
    };
    let AW = null;

    function dW() {
      return null !== AW || (AW = {
        ...Object.fromEntries(hW.h.map((yb => {
          const {
            zp: bb
          } = (0, QW.b)(yb);
          return [yb, bb]
        }))),
        Pebble: sW.d,
        Snowball: sW.d,
        "Snowball Launcher": sW.d,
        "Reinforced Pebble": sW.d,
        Bullet: sW.d,
        "Reinforced Ball": sW.d,
        Ball: sW.d,
        Mango: sW.d,
        "Moonstone Orb": sW.d,
        ...Object.fromEntries(UW.o.map((yb => [(0, CW.Wb)(yb), sW.d]))),
        Arrow: sW.d,
        "Arrow of Speed": sW.d,
        "Arrow of Poison": sW.d,
        "Arrow of Slowness": sW.d,
        "Arrow of Weakness": sW.d,
        "Arrow of Knockback": sW.d,
        "Arrow of Strength": sW.d,
        "Arrow of Invisibility": sW.d,
        "Arrow of Jumping": sW.d,
        "Arrow of Defense": sW.d,
        "Arrow of Instant Healing": sW.d,
        "Arrow of Instant Damage": sW.d,
        "Arrow of Regeneration": sW.d,
        "Arrow of Haste": sW.d,
        "Arrow of Shield": sW.d,
        "Arrow of Double Jump": sW.d,
        "Arrow of Heat Resistance": sW.d,
        "Arrow of X-Ray Vision": sW.d,
        "Arrow of Mining Yield": sW.d,
        "Arrow of Brain Rot": sW.d,
        "Arrow of Milk": sW.d,
        Fireball: sW.d,
        "Bouncy Bomb": sW.d,
        RPG: sW.d,
        "Obby RPG": sW.d,
        "Super RPG": sW.d,
        "Grenade Launcher": sW.d,
        Iceball: sW.d,
        Coconut: sW.d,
        "Splash Speed Potion": sW.d,
        "Splash Defense Potion": sW.d,
        "Splash Strength Potion": sW.d,
        "Splash Invisibility Potion": sW.d,
        "Splash Jump Potion": sW.d,
        "Splash Knockback Potion": sW.d,
        "Splash Poison Potion": sW.d,
        "Splash Speed Potion II": sW.d,
        "Splash Defense Potion II": sW.d,
        "Splash Strength Potion II": sW.d,
        "Splash Jump Potion II": sW.d,
        "Splash Knockback Potion II": sW.d,
        "Splash Poison Potion II": sW.d,
        "Splash Slowness Potion": sW.d,
        "Splash Slowness Potion II": sW.d,
        "Splash Weakness Potion": sW.d,
        "Splash Weakness Potion II": sW.d,
        "Splash Milk Potion": sW.d,
        "Splash Instant Damage Potion": sW.d,
        "Splash Instant Damage Potion II": sW.d,
        "Splash Instant Healing Potion": sW.d,
        "Splash Instant Healing Potion II": sW.d,
        "Splash Regeneration Potion": sW.d,
        "Splash Regeneration Potion II": sW.d,
        "Splash Haste Potion": sW.d,
        "Splash Haste Potion II": sW.d,
        "Splash Shield Potion": sW.d,
        "Splash Shield Potion II": sW.d,
        "Splash Double Jump Potion": sW.d,
        "Splash Heat Resistance Potion": sW.d,
        "Splash X-Ray Vision Potion": sW.d,
        "Splash Mining Yield Potion": sW.d,
        "Splash Mining Yield Potion II": sW.d,
        "Splash Brain Rot Potion": sW.d,
        "Yellow Paintball Gun": sW.d,
        "White Paintball Gun": sW.d,
        "Red Paintball Gun": sW.d,
        "Purple Paintball Gun": sW.d,
        "Pink Paintball Gun": sW.d,
        "Orange Paintball Gun": sW.d,
        "Magenta Paintball Gun": sW.d,
        "Lime Paintball Gun": sW.d,
        "Light Gray Paintball Gun": sW.d,
        "Light Blue Paintball Gun": sW.d,
        "Green Paintball Gun": sW.d,
        "Gray Paintball Gun": sW.d,
        "Cyan Paintball Gun": sW.d,
        "Brown Paintball Gun": sW.d,
        "Blue Paintball Gun": sW.d,
        "Black Paintball Gun": sW.d,
        "Yellow Heavy Paintball Gun": sW.d,
        "White Heavy Paintball Gun": sW.d,
        "Red Heavy Paintball Gun": sW.d,
        "Purple Heavy Paintball Gun": sW.d,
        "Pink Heavy Paintball Gun": sW.d,
        "Orange Heavy Paintball Gun": sW.d,
        "Magenta Heavy Paintball Gun": sW.d,
        "Lime Heavy Paintball Gun": sW.d,
        "Light Gray Heavy Paintball Gun": sW.d,
        "Light Blue Heavy Paintball Gun": sW.d,
        "Green Heavy Paintball Gun": sW.d,
        "Gray Heavy Paintball Gun": sW.d,
        "Cyan Heavy Paintball Gun": sW.d,
        "Brown Heavy Paintball Gun": sW.d,
        "Blue Heavy Paintball Gun": sW.d,
        "Black Heavy Paintball Gun": sW.d,
        "Toxin Ball": sW.d,
        "Splash Aura XP Potion": sW.d,
        "Splash Aura XP Potion II": sW.d,
        "Arrow of Aura XP": sW.d,
        Firecracker: sW.d,
        "Rainbow Firecracker": sW.d,
        "White Firecracker": sW.d,
        "Orange Firecracker": sW.d,
        "Magenta Firecracker": sW.d,
        "Light Blue Firecracker": sW.d,
        "Yellow Firecracker": sW.d,
        "Lime Firecracker": sW.d,
        "Pink Firecracker": sW.d,
        "Gray Firecracker": sW.d,
        "Light Gray Firecracker": sW.d,
        "Cyan Firecracker": sW.d,
        "Purple Firecracker": sW.d,
        "Blue Firecracker": sW.d,
        "Brown Firecracker": sW.d,
        "Green Firecracker": sW.d,
        "Red Firecracker": sW.d,
        "Black Firecracker": sW.d,
        "Firecracker Pebble": sW.d,
        "Rainbow Firecracker Pebble": sW.d,
        "White Firecracker Pebble": sW.d,
        "Orange Firecracker Pebble": sW.d,
        "Magenta Firecracker Pebble": sW.d,
        "Light Blue Firecracker Pebble": sW.d,
        "Yellow Firecracker Pebble": sW.d,
        "Lime Firecracker Pebble": sW.d,
        "Pink Firecracker Pebble": sW.d,
        "Gray Firecracker Pebble": sW.d,
        "Light Gray Firecracker Pebble": sW.d,
        "Cyan Firecracker Pebble": sW.d,
        "Purple Firecracker Pebble": sW.d,
        "Blue Firecracker Pebble": sW.d,
        "Brown Firecracker Pebble": sW.d,
        "Green Firecracker Pebble": sW.d,
        "Red Firecracker Pebble": sW.d,
        "Black Firecracker Pebble": sW.d,
        "Blinding Pebble": sW.d,
        Poop: sW.d,
        "Wood Boomerang": sW.d,
        "Stone Boomerang": sW.d,
        "Iron Boomerang": sW.d,
        "Gold Boomerang": sW.d,
        "Diamond Boomerang": sW.d,
        "Amethite Boomerang": sW.d,
        "Magmasteel Boomerang": sW.d,
        "Rubellite Boomerang": sW.d,
        "Serpentite Boomerang": sW.d,
        "Moonstone Boomerang": sW.d,
        "67 Base Projectile": sW.d,
        "67 Boosted Projectile": sW.d,
        "Capitano Grenade": sW.d,
        "Scatter Pellet": sW.d,
        "Lucky Bomb": sW.d,
        "Unlucky Bomb": sW.d,
        "Swap Orb": sW.d,
        Mesh: nW,
        AudioEntity: rU
      }), AW
    }
  },
  37664: (yb, bb, Wy) => {
    Wy.d(bb, {
      c: () => fy,
      g: () => Zy
    });
    var Uy = Wy(547),
      hy = Wy(36378);
    const fy = 4e4;
    class Zy {
      constructor() {
        let yb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Date.now;
        this.now = yb, this.editedAt = new Map, this.lastChunkX = NaN, this.lastChunkY = NaN, this.lastChunkZ = NaN, this.lastChunkId = ""
      }
      noteEdit(yb, bb, Wy) {
        const fy = (0, Uy.K)(yb),
          Zy = (0, Uy.K)(bb),
          cb = (0, Uy.K)(Wy),
          Py = this.now();
        if (fy !== this.lastChunkX || Zy !== this.lastChunkY || cb !== this.lastChunkZ) {
          this.lastChunkX = fy, this.lastChunkY = Zy, this.lastChunkZ = cb, this.lastChunkId = (0, hy.e)(fy, Zy, cb), this.editedAt.delete(this.lastChunkId), this.editedAt.set(this.lastChunkId, Py);
          for (const [yb, bb] of this.editedAt) {
            if (bb >= Py - 3e5) break;
            this.editedAt.delete(yb)
          }
        } else this.editedAt.set(this.lastChunkId, Py)
      }
      chunksEditedSince(yb) {
        const bb = [];
        for (const [Wy, Uy] of this.editedAt) Uy >= yb && bb.push(Wy);
        return bb
      }
    }
  },
  37750: (yb, bb, Wy) => {
    Wy.d(bb, {
      e: () => Pb,
      g: () => Hb,
      j: () => Rb,
      m: () => aW
    });
    var Uy = Wy(2977),
      hy = Wy(7884),
      fy = Wy(35471),
      Zy = Wy(1260),
      cb = Wy(35519),
      Py = Wy(37702),
      oy = Wy(37633),
      By = Wy(3050),
      Ky = Wy(36535),
      ey = Wy(1102),
      qb = Wy(248),
      sy = Wy(23),
      Sy = Wy(1595),
      Ey = Wy(94),
      ly = Wy(33),
      mb = Wy(1620),
      Cy = Wy(1541),
      Ty = Wy(2315);
    class Vy {
      constructor(yb) {
        this.storeForMs = yb, this.clicks = new Ty.d
      }
      click() {
        this.clicks.enqueue(Date.now());
        const yb = Date.now() - this.storeForMs;
        for (; this.clicks.size > 0 && this.clicks.peek() < yb;) this.clicks.dequeue()
      }
      getNumClicksInMs(yb) {
        let bb = 0;
        return this.clicks.forEach((Wy => {
          Wy > Date.now() - yb && bb++
        })), bb
      }
      getMaxClickSeparationInMs(yb) {
        if (0 === this.clicks.size) return this.storeForMs;
        let bb = 0,
          Wy = Date.now() - yb;
        this.clicks.forEach((Uy => {
          Uy < Date.now() - yb || (bb = Math.max(bb, Math.abs(Uy - Wy)), Wy = Uy)
        }));
        const Uy = Math.abs(Date.now() - Wy);
        return Math.max(bb, Uy)
      }
    }
    class Jy {
      constructor(yb) {
        this.storeForMs = yb, this.clickDownDurations = new Ty.d
      }
      registerClickDownDuration(yb) {
        this.clickDownDurations.enqueue({
          dur: yb,
          atTime: Date.now()
        });
        const bb = Date.now() - this.storeForMs;
        for (; this.clickDownDurations.size > 0 && this.clickDownDurations.peek().atTime < bb;) this.clickDownDurations.dequeue()
      }
      clickDownDurationsCheck(yb) {
        if (yb > this.storeForMs) return console.error("overDuration is greater than storeForMs"), "0:0";
        let bb = 0,
          Wy = 0;
        return this.clickDownDurations.forEach((Uy => {
          Uy.atTime > Date.now() - yb && (bb++, Wy = Math.max(Wy, Uy.dur))
        })), `${bb}:${Wy}`
      }
    }
    var gb = Wy(35279),
      Gy = Wy(37752),
      Oy = Wy(19),
      Ry = Wy(2234),
      vb = Wy(1177),
      ib = Wy(37678),
      My = Wy(3657),
      Yy = Wy(139),
      Xy = Wy(36854),
      ny = Wy(37075),
      uy = Wy(547),
      rb = Wy(35277),
      Hy = Wy(7),
      ab = Wy(8459),
      Fy = Wy(1080),
      py = Wy(167),
      Ly = Wy(37755),
      Qy = Wy(37759),
      jb = Wy(36889),
      Dy = Wy(37767),
      tb = Wy(36792),
      wy = Wy(2706),
      kb = Wy(1458),
      Ny = Wy(35379),
      zb = Wy(2444),
      Iy = Wy(37761);
    const xb = {
      forward: "freeCamForward",
      backward: "freeCamBackward",
      left: "freeCamLeft",
      right: "freeCamRight",
      jump: "freeCamUp",
      crouch: "freeCamDown"
    };

    function Ay() {
      var yb;
      const bb = (0, Ry.e)().client;
      return (null === bb || void 0 === bb ? void 0 : bb.isReplayMode()) && (null === (yb = bb.freeCameraController) || void 0 === yb ? void 0 : yb.isEnabled())
    }

    function dy(yb) {
      const bb = yb.on.bind(yb);
      yb.on = (yb, Wy) => {
        mb.H.has(yb) ? bb(yb, Wy) : bb(yb, (bb => {
          var Uy;
          return null !== (Uy = (0, Ry.e)().client) && void 0 !== Uy && Uy.isReplayMode() ? function(yb) {
            return yb in xb
          }(yb) && Ay() ? Wy(bb) : void 0 : Wy(bb)
        }))
      }
    }
    const yW = 5e3,
      bW = 1;
    let Wb, Ub = bW,
      hb = 0;
    const fb = !0;
    let Zb = fb;
    Sy.c.subscribe("_ignoreBasicBoards", (yb => {
      Zb = yb
    })), (0, Uy.onGameReset)((() => {
      Zb = fb
    }));
    let cW = null;
    const Pb = () => cW;
    let ob, Bb, Kb;
    var eb, qW, sb, Sb, Eb, lb, mW, Cb, Tb;
    const Vb = [2, 0, 1, 8, 3, 62, 9, "g", "e", "f", "d", 255, "length", 18, 168, "a", 37, "undefined", void 0, 4, "b", 199, 63, 6, "fromCodePoint", 7, 12, "push", 88, 109, null, 110, 10, 182, 204, 26, 147, 91, 8191, 13, 14, "c", "i", 5, 216, !1, 245, "h", 232, 242, 57, 92, 127, 203, 1023, 90, 210, 65536, 55296, 56320, 128, 31, 15, 98, 73, 201, 231, 192, 77, 121, 180, 39, 184, 160, 224, 30, 17, 42, 145, 64, 240, 132, 230, 178, 196, 119, !0, 101, 159, 93, 82, 22, 47, 129, 85, 28, 29, 60, 143, 24, 1e3, 113, "s=", "=", ";", 177, "/", 171, 142, 137, 108, 40, 48, 86, 25, 153, "k", "j"];

    function Jb(...yb) {
      return yb[Vb[12]] = Vb[2], typeof eb[yb[Vb[1]]] === Vb[17] ? eb[yb[Vb[1]]] = function(...yb) {
        for (Ob(yb[Vb[12]] = Vb[2], yb[Vb[5]] = ':=$8@/&(GNhkm0soifA9JxCDu`B>;}*XO3%zvYtHV,T|wWycpQ.R[~LKI{!Z#^"4edgb]_2F6E?Sjn1MPql7)U5+r<a', yb[Vb[0]] = "" + (yb[Vb[1]] || ""), yb[Vb[4]] = yb[Vb[0]].length, yb[Vb[10]] = [], yb[Vb[8]] = Vb[1], yb[Vb[9]] = Vb[1], yb[Vb[7]] = -Vb[2]), yb[Vb[3]] = Vb[1]; yb[Vb[3]] < yb[Vb[4]]; yb[Vb[3]]++)
          if (yb[Vb[6]] = yb[Vb[5]].indexOf(yb[Vb[0]][yb[Vb[3]]]), yb[Vb[6]] !== -Vb[2])
            if (yb[Vb[7]] < Vb[1]) yb[Vb[7]] = yb[Vb[6]];
            else {
              Ob(yb[Vb[7]] += yb[Vb[6]] * Vb[37], yb[Vb[8]] |= yb[Vb[7]] << yb[Vb[9]], yb[Vb[9]] += (yb[Vb[7]] & Vb[38]) > Vb[28] ? Vb[39] : Vb[40]);
              do {
                Ob(yb[Vb[10]].push(yb[Vb[8]] & Vb[11]), yb[Vb[8]] >>= Vb[3], yb[Vb[9]] -= Vb[3])
              } while (yb[Vb[9]] > Vb[25]);
              yb[Vb[7]] = -Vb[2]
            } return yb[Vb[7]] > -Vb[2] && yb[Vb[10]].push((yb[Vb[8]] | yb[Vb[7]] << yb[Vb[9]]) & Vb[11]), gW(yb[Vb[10]])
      }(qW[yb[Vb[1]]]) : eb[yb[Vb[1]]]
    }

    function gW(...yb) {
      return yb[Vb[12]] = Vb[2], typeof Sb !== Vb[17] && Sb ? (new Sb).decode(new Eb(yb[Vb[1]])) : typeof lb !== Vb[17] && lb ? lb.from(yb[Vb[1]]).toString("utf-8") : Tb(yb[Vb[1]])
    }

    function Gb() {}

    function Ob() {
      Ob = function() {}
    }

    function Rb(yb) {
      function bb() {
        return yb.Km.MPy(yb.eWy)
      }
      dy(yb.inputs.down), dy(yb.inputs.up);
      for (const Uy of ["forward", "backward", "left", "right", "sprint", "jump", "crouch"]) {
        const bb = (bb, Wy) => {
          var hy, fy;
          if (Ay()) {
            const yb = xb[Uy];
            var Zy, cb;
            if (yb) null === (Zy = (0, Ry.e)().client) || void 0 === Zy || null === (cb = Zy.freeCameraController) || void 0 === cb || cb.handlefreeCamKeyPress(yb, bb, Wy);
            return
          }
          if (null !== (hy = (0, Ry.e)().client) && void 0 !== hy && null !== (fy = hy.freeCameraController) && void 0 !== fy && fy.isKeyPressOverriden(bb)) return;
          yb.Km.HPy()[Uy] = Wy
        };
        yb.inputs.down.on(Uy, (yb => bb(yb, !0))), yb.inputs.up.on(Uy, (yb => bb(yb, !1)))
      }
      yb.inputs.down.on("crouch", (() => {
        if (Ay()) return;
        if (!yb.bC.canCrouch) return;
        const bb = yb.Km.HPy();
        Oy.d.get("clientEscMenuOptions").crouchIsToggle && (bb.crouchToggled = !bb.crouchToggled && !bb.padSneakToggled), bb.padSneakToggled = !1
      }));
      const Wy = () => {
        const yb = bb();
        yb.isGun() && yb.inaccuracyCalculator.jump()
      };
      yb.inputs.down.on("jump", (yb => {
        Ay() || (Wy(), ob(yb))
      }));
      for (const Uy of mb.k) yb.inputs.down.on(Uy, (yb => {
        var bb, Wy;
        null !== (bb = (0, Ry.e)().client) && void 0 !== bb && null !== (Wy = bb.freeCameraController) && void 0 !== Wy && Wy.handlefreeCamKeyPress(Uy, yb, !0) && (yb.preventDefault(), yb.stopPropagation())
      })), yb.inputs.up.on(Uy, (yb => {
        var bb, Wy;
        null !== (bb = (0, Ry.e)().client) && void 0 !== bb && null !== (Wy = bb.freeCameraController) && void 0 !== Wy && Wy.handlefreeCamKeyPress(Uy, yb, !1) && (yb.preventDefault(), yb.stopPropagation())
      }));
      yb.inputs.down.on("recordGame", (() => {
        var yb, bb;
        null === (yb = (0, Ry.e)().client) || void 0 === yb || null === (bb = yb.gameRecorder) || void 0 === bb || bb.toggleRecording()
      })), yb.inputs.down.on("recordClip", (() => {
        var yb, bb;
        (0, gb.e)() || null === (yb = (0, Ry.e)().client) || void 0 === yb || null === (bb = yb.gameRecorder) || void 0 === bb || bb.saveClip()
      }));
      for (const Uy of mb.H) yb.inputs.down.on(Uy, (() => {
        var yb;
        if ((0, Gy.c)()) return;
        if ("replayViewerOpen" === Uy) return void sy.g.EZ("replayViewer|requested", "toggle");
        const bb = null === (yb = (0, Ry.e)().client) || void 0 === yb ? void 0 : yb.gameReplayer;
        ((0, gb.e)() || null !== bb && void 0 !== bb && bb.isReplayMode()) && (null === bb || void 0 === bb || bb.handleAction(Uy))
      }));
      const Zy = new Vy(3e4),
        Ky = new Jy(4e4);
      let ly = 0;
      const Ty = yb => {
          let bb = 0,
            Wy = null;
          const Uy = bb => null !== bb && bb === Wy && (Wy = null, yb(), !0);
          return {
            press: () => (bb++, (0, Ly.e)() || (Uy(Wy), Wy = bb), bb),
            owns: yb => yb === Wy,
            release: Uy
          }
        },
        My = (yb, Wy) => {
          Wy && aW(ey.e.TouchDownFirePrimary), yb ? ab() : ((0, ny.i)(), bb().Yoy()), Wy || aW(ey.e.DownFirePrimary), Hb(!0), Zy.click();
          const hy = Zy.getMaxClickSeparationInMs(3e4) < 1e3 / 30,
            fy = Zy.getMaxClickSeparationInMs(1e4) < 20,
            cb = Zy.getMaxClickSeparationInMs(4e3) < 1e3 / 70;
          if (hy || fy || cb) {
            let yb;
            if (hy) yb = 30;
            else if (fy) yb = 50;
            else {
              if (!cb) throw new Error("???");
              yb = 70
            }(0, Uy.sendColyMessage)(By.lk, yb)
          }
        },
        Yy = Ty((() => {
          const yb = Date.now() - ly;
          Ky.registerClickDownDuration(yb), bb().Ooy(), aW(ey.e.UpFirePrimary), Hb(!1);
          const Wy = Ky.clickDownDurationsCheck(4e4);
          (0, Uy.sendColyMessage)(By.rg, Wy)
        }));
      let Xy = 0;
      yb.inputs.down.on("primary-fire", (function(yb) {
        Xy = Yy.press(), Yy.owns(Xy) && (ly = Date.now(), Math.abs(performance.now() - yb.timeStamp) > 5e3 || (My(yb.altKey, "changedTouches" in yb), ob(yb)))
      })), yb.inputs.up.on("primary-fire", (function(yb) {
        Yy.release(Xy) && ob(yb, !0)
      }));
      const uy = () => {
          bb().VEy(), aW(ey.e.DownFireSecondary), Hb(!0), yb.Kcy && !yb.Kcy.position && (0, oy.j)()
        },
        rb = Ty((() => {
          bb().Goy(), aW(ey.e.UpFireSecondary), Hb(!1)
        }));
      let Hy = 0;
      yb.inputs.down.on("alt-fire", (function(yb) {
        Hy = rb.press(), rb.owns(Hy) && (uy(), ob(yb))
      })), yb.inputs.up.on("alt-fire", (function(yb) {
        rb.release(Hy) && ob(yb, !0)
      }));
      const ab = () => bb().GEy();
      yb.inputs.down.on("mid-fire", (() => {
        (0, Ly.e)() || ab()
      }));
      const Dy = yb => {
          (0, Uy.sendColyMessage)(By.Eh, yb)
        },
        Wb = yb => {
          (0, Uy.sendColyMessage)(By.Fh, {
            mD: yb,
            kW: fb()
          })
        };
      for (const Uy of ["SpecialAction1", "SpecialAction2"]) yb.inputs.down.on(Uy, (() => {
        Dy(Uy)
      })), yb.inputs.up.on(Uy, (() => {
        Wb(Uy)
      }));
      const hb = () => {
        const yb = bb();
        yb.isGun() && yb.reload(Date.now())
      };
      yb.inputs.down.on("ReloadGun", hb);
      const fb = () => {
        let bb = "a";
        return yb.physics.testSolid.toString().includes("Hb") || (bb = "b"), bb
      };
      yb.inputs.down.on("OpenInventory", (yb => {
        yb.preventDefault(), (0, kb.u)(yb, "inventory", (0, Qy.d)((0, Ry.g)()))
      })), yb.inputs.bind("ShiftHeld", "ShiftLeft", "ShiftRight");
      const Zb = yb => {
        sy.g.EZ("DropItemKeyPressed", yb)
      };
      yb.inputs.down.on("DropItem", (() => {
        Zb(yb.Km.HPy().crouch)
      })), yb.inputs.down.on("OpenShop", (bb => {
        (0, gb.e)() || "inGame" === Oy.d.get("gameState") && (0, kb.r)(bb, qb.o.SHOP, !(0, hy.d)(yb.bC.shopInfo))
      })), yb.inputs.down.on("OpenLobbyLeaderboard", (bb => {
        (0, gb.e)() || "inGame" === Oy.d.get("gameState") && (0, kb.r)(bb, qb.o.LOBBY_LEADERBOARD, !!yb.bC.lobbyLeaderboardInfo)
      })), yb.inputs.down.on("HideUi", (() => {
        sy.g.EZ("showUi", !1)
      })), yb.inputs.up.on("HideUi", (() => {
        sy.g.EZ("showUi", !0)
      }));
      const Pb = yb => {
        0 === yb && (yb = 10), sy.g.EZ("setSelectedInventorySlotI", yb - 1), sy.g.EZ("numkeyPressed", yb)
      };
      for (let Uy = 1; Uy <= 10; Uy++) yb.inputs.down.on("HotBarSlot" + Uy.toString(), (() => {
        Pb(Uy)
      }));
      yb.inputs.down.on("OpenTasksAndLeaderboard", (bb => {
        const Wy = (0, Ny.o)();
        Wy ? (0, kb.v)(bb, !0, Wy) : (0, kb.u)(bb, "retentionFeatures", !(!yb.bC._tasks && !yb.bC._availableLeaderboards))
      })), yb.inputs.down.on("OpenCodeEditor", (bb => {
        (0, kb.v)(bb, (0, ib.e)((0, vb.e)()), (() => {
          sy.g.EZ("EditLobbyCode", yb.Km.Tl(yb.eWy).map(Math.floor))
        }))
      })), yb.inputs.bind("ToggleFullCoordinateOverlay", "F3"), yb.inputs.down.on("ToggleFullCoordinateOverlay", (() => {
        sy.g.EZ("toggleFullCoordinateOverlay")
      }));
      const Kb = () => {
        (0, Ry.e)().client.cameraController.swapCameraZoom()
      };
      yb.inputs.down.on("SwapCameraZoom", Kb), yb.inputs.down.on("OpenInviteLink", (yb => {
        (0, kb.u)(yb, "inviteLink", Ey.featureFlags.canUseInviteLinks)
      })), yb.inputs.bind("Y", "KeyY"), yb.inputs.down.on("Y", (yb => {
        (0, gb.e)() || sy.g.EZ("YKeyPressed")
      })), yb.inputs.bind("X", "KeyX"), yb.inputs.down.on("X", (yb => {
        (0, gb.e)() || sy.g.EZ("XKeyPressed")
      })), yb.inputs.down.on("OpenEmoteWheel", (() => {
        sy.g.EZ("requestEmoteWheelHoldOpen")
      })), yb.inputs.up.on("OpenEmoteWheel", (() => {
        sy.g.EZ("requestEmoteWheelHoldRelease")
      })), yb.inputs.down.on("Zoom", (() => {
        if ("inGame" === Oy.d.get("gameState")) {
          yb.Km.getState(yb.eWy, "playerCameraAdjustment").zoomKeyPressed = !0, (0, Ry.e)().client.cameraController.handleZoomKeyPressed()
        }
      })), yb.inputs.up.on("Zoom", (() => {
        yb.Km.getState(yb.eWy, "playerCameraAdjustment").zoomKeyPressed = !1
      })), vW();
      const eb = yb => function() {
        return Bb(), yb(...arguments)
      };

      function qW(yb) {
        "inGame" !== Oy.d.get("gameState") || (0, kb.q)() || (sy.g.EZ("ctrlCrouchWithoutFullscreen"), yb.preventDefault())
      }
      cW = {
        primaryFireDown: eb((() => {
          const yb = Yy.press();
          return Yy.owns(yb) && (ly = Date.now(), My(!1, !1)), yb
        })),
        primaryFireUp: eb((yb => {
          Yy.release(yb)
        })),
        altFireDown: eb((() => {
          const yb = rb.press();
          return rb.owns(yb) && uy(), yb
        })),
        altFireUp: eb((yb => {
          rb.release(yb)
        })),
        jumpDown: eb(Wy),
        specialActionDown: eb(Dy),
        specialActionUp: eb(Wb),
        reloadGun: eb(hb),
        dropItem: eb(Zb),
        swapCameraZoom: eb(Kb),
        Fq: eb(ab)
      }, yb.inputs.down.on("ctrlCrouch", qW), yb.inputs.up.on("ctrlCrouch", qW), yb.inputs.bind("ctrlCrouch", "ControlLeft");
      const sb = yb => {
        "inGame" === Oy.d.get("gameState") && yb.ctrlKey && !(0, kb.q)() && yb.preventDefault()
      };
      document.addEventListener("keydown", sb), document.addEventListener("keyup", sb), document.addEventListener("keypress", sb), yb.inputs.bind("Alt", "AltLeft", "AltRight"), yb.inputs.down.on("Alt", (yb => {
        yb.preventDefault()
      }));
      const Sb = bb => (0, tb.f)(yb, bb),
        Eb = bb => (0, tb.h)(yb, bb),
        lb = [0, 0, 0],
        mW = [0, 0, 1];
      yb.on("afterRender", (bb => {
        (0, fy.h)(yb.camera.heading), (0, tb.l)(yb, lb, mW), (0, Ry.e)().client.triggerGameCallback("onAfterRender", bb, {
          cameraHeading: yb.camera.heading,
          cameraPitch: yb.camera.pitch,
          cameraPosition: lb,
          cameraDirection: mW,
          tanHalfFovX: (0, tb.d)(yb),
          tanHalfFovY: Math.tan(yb.Ch.phy().fov / 2),
          screenBandPct: {
            x: wy.d,
            y: (0, wy.h)()
          },
          projectWorldPosToScreenPos: Sb,
          projectWorldPosToViewport: Eb
        })
      })), (0, zb.l)("look") && (yb.camera.TUy = (0, Iy.i)("js"), yb.inputs.rhy = Iy.g), yb.on("beforeInputs", (() => {
        if ((0, Gy.c)()) return yb.inputs.HUy.dx = 0, void(yb.inputs.HUy.dy = 0);
        if (yb.camera.HUy.dx += yb.inputs.HUy.dx, yb.camera.HUy.dy += yb.inputs.HUy.dy, 0 !== yb.inputs.HUy.dx || 0 !== yb.inputs.HUy.dy) {
          yb.Km.getState(yb.eWy, "playerCameraAdjustment").lastPointerMove = Date.now()
        }
        yb.inputs.HUy.dx = 0, yb.inputs.HUy.dy = 0
      }));
      let Cb = 0;
      yb.on("Zb", (function(bb) {
        sy.g.EZ("noaTick", bb);
        const Wy = (0, Ry.e)().client;
        if (Wy.triggerGameCallback("Zb", bb), Wy.isClientGameSessionActive()) try {
          Py.e.Zb(bb)
        } catch (Zy) {
          console.error("Error ticking audio entities", Zy)
        }
        if (!yb.Km.voy(yb.eWy).isAlive) return;
        Date.now() - Cb > 9e3 && (! function() {
          const yb = (0, Ry.g)();
          "number" === typeof yb.bC.speedMultiplier && "number" === typeof yb.bC.jumpAmount && (0, Uy.sendColyMessage)(By.di, {
            ZH: (0, Fy.d)(yb.bC.speedMultiplier),
            sH: (0, Fy.c)(yb.bC.jumpAmount),
            lH: (0, Fy.d)(yb.bC.crouchingSpeed),
            YH: (0, Fy.d)(yb.bC.walkingSpeed),
            nH: (0, Fy.d)(yb.bC.runningSpeed),
            DH: (0, Fy.c)(yb.Wcy),
            IH: yb.Km.aPy(yb.eWy).jumpForce,
            vF: yb.Km.yfy(1).width,
            jF: yb.Km.yfy(1).height,
            yc: yb.Km.hUy(1).yc
          }, !0)
        }(), Cb = Date.now());
        const hy = yb.Km.HPy();
        if ((hy.jump || hy.forward || hy.backward || hy.left || hy.right || hy.sprint) && sy.g.EZ("usedKeyboard"), yb.Km.KPy(yb.eWy) && !0 === yb.bC.canPickUpItems) {
          const bb = yb.Km.Tl(yb.eWy),
            Wy = (0, Cy.m)(Ub),
            hy = (0, Cy.q)(Ub),
            fy = [bb[0] - Wy, bb[1] - .6 * hy, bb[2] - Wy],
            Zy = [bb[0] + Wy, bb[1] + py.c.oq + .6 * hy, bb[2] + Wy],
            Py = yb.Km.Gsy({
              base: fy,
              max: Zy
            }, yb.Km.names.autoRotate),
            Ky = yb => {
              const bb = py.c.droppedBlockSize / 2;
              return [0, 1, 2].every((Wy => yb[Wy] >= fy[Wy] - bb && yb[Wy] <= Zy[Wy] + bb))
            },
            {
              itemDropPrediction: ey
            } = (0, Ry.e)().client,
            qb = Uy.offlineInputReplay.holdsInput();
          if (Py.length > 0)
            for (const sy of Py) {
              const bb = yb.Km.getState(sy, "itemState");
              if (void 0 === bb || Date.now() - bb.creationTime < 500) continue;
              let Wy = sy,
                hy = null;
              if (bb.qWy) {
                const yb = ey.pickupTarget(sy, Ky, qb);
                if (null === yb) continue;
                ({
                  Eu: Wy,
                  LJ: hy
                } = yb)
              }
              const fy = yb.Km.getState(Wy, "itemState");
              if (fy.qWy && null === hy) continue;
              let Zy = 0,
                Py = null,
                Sy = !1;
              if (0 === fy.amount) Sy = !0;
              else {
                const {
                  amountPickedUp: bb
                } = yb.Km.oPy(yb.eWy).pickUpItem({
                  name: fy.name,
                  typeObj: fy.typeObj,
                  amount: fy.amount,
                  attributes: fy.attributes
                });
                if (Zy = bb, 0 === Zy) continue;
                Py = jb.c.pickUp(fy, Zy), fy.amount -= Zy, fy.amount < 0 ? console.error("Picking up led to less than 0 of item!") : 0 === fy.amount ? Sy = !0 : fy.creationTime = Date.now() + yW
              }
              const Ey = (0, Ry.e)().client.inventoryPrediction.record(Py);
              (0, Uy.sendColyMessage)(By.Ah, {
                Eu: null === hy ? Wy : "",
                Tu: Zy,
                Yu: oy.g,
                yG: Ey,
                LJ: hy
              }, !0), Sy && (qb && ey.onPickedUpOffline(Wy, Ey, hy), null === hy && yb.Km.deleteEntity(Wy));
              cb.e.play("pickUp", py.c.pickupSoundVol).rate(1 + Math.random() * py.c.pickupSoundRateVariation)
            }
        }
        if (!yb.Km.Acy(yb.eWy)) return;
        const fy = yb.inputs.HUy.jPy;
        if (0 !== fy) {
          const bb = fy > 0 ? 1 : -1;
          yb.inputs.state["mid-fire"] || yb.inputs.state.Alt || !yb.bC.useInventory ? (yb.inputs.state["mid-fire"] && sy.g.EZ("requestEmoteWheelClose"), (0, Ry.e)().client.cameraController.handleScrollZoom(bb)) : sy.g.EZ("ScrollInventorySlot", bb)
        }
      })), Sy.c.subscribe("droppedItemScale", (yb => {
        Ub = "number" === typeof yb && isFinite(yb) ? yb : bW
      }))
    }

    function vW() {
      const yb = (0, Ry.g)();
      if (yb)
        for (const bb in mb.w) {
          yb.inputs.unbind(bb);
          for (const Wy of mb.w[bb]) yb.inputs.bind(bb, Wy)
        }
    }
    Ob(eb = {}, qW = ["i{sXz^OeiAf>4!%vnkC[`[}4fo&d=i5>+dcj+t7,&e=6y$@|MY7G", "AyrN6%{=", "9y#?R2d,J9", 'DdILh.+Mc4Ksm>}fmo}hxF{STso"q68Yz%v}L2tAA9jG<#G9(DzODZz0%{.', "pF:31W@A)NcEg28Ygpq&ivF}l97Ocl#T$LvKA", "4YKj|RVVaZn4EpS`<~UFBLhy(", 'X]VRuF]PcoWj:6wt*d"N}Zw["~l.2q[;TB4NA{9c%mm]30,`gW$n0', "If%S=)(029Pv=6TB5:", "WD,*3Z^c:m&c$^09xO}XHYU(mx%6?s4u?TI&", 'k@J?itAGe#m6~@%vDy>OS{"5:AECl`QV$}N*I%Pu!k$3lQGAS"6Q8MaV/', "e%[~vP4D${R4$q;DDLeE4Mi299LPko!,FpLEh_,S@", "xo_FA7n=0At[X$6Ank8", "SdX[Q]n4Ame`0)1V0Y6&_v|0p4A0[o3TMdiN", '[Jj}:pAGufg;<Ph`l2"@oq.!C9Fng_{zxJ%R@5V*WkqO=', "KpM;1KVASZ*J+$6B!VBR}", "AYjBUZ)mimu&,p3DW%VLwYy*%4^gFBS9C]K[xUK($9YEz!yB5;$", 'FRi3%1!5"IbA^6|HN{n?^nm$;Z!zOckHAyiSl{:', 'O}S}6v7UO#3"qpwBD}zOHlpAYL$6:', '{FN>?"F0GKVu>l:|=Ni3*ct[>"NJJF?`2p$/;', '/?3SF?f9ON`fblOuD{eLi?;$k"/RI>UzY]N1yn9}#~[_>$', 'QBOQ>F}}!k+9Ds~zmFl~"y)m(', "ER*;C{2m7mb;d#]XadgOKn>9?Z<yd@a,N4}[>V%$@{~E^q#vANPQ~!:", "Z]whMtA?X4k6st6Bap>}}F;vWs7}K!Gt7Rk}d)a]lm>&V8", "8}u&Nv0,5!EOT0hB;#nXOF(`=#K2.`L%,]t[4Hw$", 'gE%>A7G!8md=c2/9/#3>#y(_uJ"szspHCo"jz1?m/e"s?`l;M"$', 'qY$O_KG*W~ryi>R>|"tjstWSAm}f%/', '0F5;BE<D$oNpSBguvLSObM`("4$6VZaiIVi153%uRN=1;i/X2Yz6n.V!?J', ';|gG1?;?VJ!IOFtt:ytXo{}~Y9BKEuZ,?X1X8MGA"Ip', "!d/(^~)m:Nkd%Q9>9yK[njD9U0?I/)?tvLTOmt[[8", "ZfuEl{U=SI7}7BWBom|ONMr]b9;JC/n978]}}", "@L96OVAuo#DpD$OA", '}%1(dpL58NBK.`Fu}FK@~I"A1A44A/}T6fFE/v:', 'jIkO`{g&w"Bh3pZ,ZpI&iFOA@LBf&/z`!Nr&q{@GY!ki}iGXUduN', 'F]CQ?.gu9e_QsYoHsO"K$%mAG0uMI8!;T&3STEd4QN~zRl_9Mf8', 'g"bB_qA2CeSo*^%fqYojh?^=', "]Li3_#H=V0[gAYR,mFi&<[34,f72b8$ve]].IMp5^~D8{v(tMfN*nqvu8", "J#ZnRYbDR{=1TYmH/QML=q,9e~?QiZR>lZOE2?`c9L;M3`cBfyV>?p^_Q4</=", "uJ86/#x0@0", 'UJ%O/p^4WZxlBq"viF)}x_vA>JQjKo;vN?8', "9}nXC.X}fof*!qm", "T?lR,S<D59IEt``;Fs2X4#+{&!M4Ks@t+Ti&5.ivA#xji6tYsNyK)F*eXo^", "OL:N/v%vNfjGxv$*VYOQ^%P%&0", "C&xha3v*%LD>h/_XlJ=&*Fj&SGek7Befl&fRht4RbmRP;ZK,L:", '1I/Xe6?y:4dgWptA(]1E3Qx~ZGj=tYrCp%qL+ZtmU0B0:8)CV"$', '_85@yYf0<dy"O7a;kB4;RR{,&', '@Q.GqFiuv0o6k.]X^p_j"yb,HJU.P>+VzL*EftVAb9<?*.<,e;b/', '%mEL9Z~(af]2Ko8AV&}X:)((#fVKPoQB4&4;?_*eL!H[E@aiv#"(m', "V88n0vgu^k#O&/TH!Js(4njA:#4z%0[VR:", "w{:NF~1&@NY;i88*P8SOA.6!lL3Ma`Ht~WbnD{+{5!7}c$&9`B=*[nd{/", "VYQ&L%.VjsNRcseuiNi18ykqGJ^QoB^Tx{M[I2Z,5!G]q6fHS&,&qjW=", "$Q:*3Q4}<sMk0#=ucXA>+[Z=", 'n%qR}UgA^I<qR25%D},>g"g!F!Vh=', "YR)FW]]m7#6;p8]Afm$", "3}znGK]yF!eQy^5%{LPL1?`q3{lCKlVXoQ,>C1S,$9L;MB!,/}E&", "[V,LD7R=jZ>_{i?9l&aGS_#]d{Os_@z`jWX;H4v[oAQjzB5%DRm?LHymqN@L=", "QN1;g6F(/", "]T#hDc;A7N,K<#`DjZ*jWI~D/0g~m7(Af{CXe?:", "3muLYcr[?dt[$`HuAR8", '+ZaO;Fq0Wsdy1`!;d"Jn7FB[6fh]%2&`B}{R!~#A|dtsT^{;!dQRpR:', '2"+@(50cVJ(iktR>.YO*tco~cIrO20vtz&x(', 'o|7Oo"F08e*fHBJ%FToj@p(9(!cj|$^vad`SM"/4Pm(M0pzAsOu*H4(`nZ*>=', "%oOER2F0*Ar{=iQHlEzO6jz98#/iwc$A[Fxh)F<(/9>(z$", ".L_@_pv$6fh!FBFt8g%}H47,(!.", '$z2[Xz[y[93>|!ZD^L](+3+(@Nf"iZ#T9?$', 'L]*Q;PpVZ":16o}f:N/?6K>,f#>6#8&uwFw(+F_R${Qf3p;v=#,>c]tu8', ":N]hn?UD4m3ujF.%vL)FTYZ,g4^(rFFt", "AAeQRY:", "7WDEnWG*Ef/cm7S`1R5N)Fzqq{=LGHm", ">LL@%ZD~hKmS}//Xr8uE+c5%as=68lbf#XSGGKF0l9{Eot=v%oj.tExzPo", "#L#(JttA`svjMs*v%?sjvc~c=om>=", "_8;?+[{=", "NDXjzcRccAan=", "fF#}ZyJvpN9_d0]*tB1(a7+Mq{0dx#,9:xf**[`,29pjU_{;uR$", "Z]BS`[+,8m<?!YD,n]K&Uj?[F!(>JFMHVLL;r3n,Xo", "BFWKK280co{j:", 'im~Kf"6uMme@rc`,Yo+Ey^R=WsGpXBs', 'fyaG"~UDvNO"=', "H}&X51CvveN8s/E9`?t(mp<_;sPog0:f?J([!2J5Ts2x5q3DX}eQx", "nk,&tI,_GJ`8JoK}SWQG$pv*1ozjdQ%fpLtX_q},uJ3%%/", "t|E&)Z09kZ:N}iiV]N`*71b0X4~", "c{D@dp+}Sfh>a_hJi&#~Dt:", "*%,S5WGy]{So/63Y6s#~71z0P~62Cl2Y(],L&p55kf1A?q,HsOP&vZeuC0;", "Y}eL91[]@", 'N4u*4!<,P~Rxj8{TuVU?"M@GHe*h=', "VYH[1WS4&", ";dPLNKT$@9", '[p:&H^X}be$>a`(XZJBOepU_%L}M"q<zimE&]%H=Z"X(J8B}H|_?`', '#%CK>Vh!~9.;DBZ;!V4j)W`c#~KQ%^L%04.R9"6!C!J6o>/A_:', "K]rLf_T$", "&jp,=>zr", "xp5Q|a3b", "y,&.&XNb", "djJF?[Cs", "qmgMr3]E", "M(8=L*$W", "G0QPq<_W", "Cw=U(zb", "dU?iNP`W", "U)T:,/nW", ";yQ].*pW", ";y;=U", "/$X`_{*:gcVmL=]J6$u>=!x", '$CiFQZ32:=O~IpM;E/T"g3c_lK65S%m', "4;A%!Mr{)pk0}W=I3;O9WGF", ";vy3sd_/F){I(DQ:k4=rp_U]qYP`j0t", "LfR$D&P%8>!`|Q:+p@q_sPc)J;vZ5iE", "h<!i]?MuTX1mi;gJDd!FiA2u?hX", "<O5nq@x", "4<~^cYmE", "]AYJ", ">U[^nSRc", "Z$=mf5xI", 'yFTO"Mc=', "{]zOTPJ$", "IDt}k$=0", "DoJn1qB$", "Co].~SW=", "c;&(y[0P", "$69N", "M9$aE.Fu", "l$1aV0Ku", "8;?T,:Fu", "HJXNK5zq", "0Y+><yD", "H%V!!ytq", "7AKm#eD", "tsm;MAox", "tXjQXRb[", "i8D&", "62N5VL8x", "?&RKED~mFH[LukD+", "OFyblov$?XIVa[0P", "|JT:LROSS&M#WU+", "$;his4s`Vw3c[+3o}u)", "Y~.LRfK>o]V`2cQ,_W~", ";TwQ2o:$o5*?~0k1q:6", "3f743JQ&?|VW2ct/BT~", "eV!G@Bl2itZ.?p_G|YfH{19W,%$`T>;RnTrESAx8$%zz?~", "*YE.Cl.W,%O.6l%,NN*MQw$wfUZ.2.y5e``Qm3Dr|/dr52", "hNCHnqI/$RvNpc]{6ni6!I:>]zVIIc@5XpE.~8.W,%t:<0", "$$=Hw8&Wgz?NFc:bQ$=H]lkW4C[Nbc7ykTNQ<?2[KLPvv~", "|[^Hpbw", "@.Xu0aYx", "@ofEi/DvoFsQJujjS(q:ffRlDcgL>5.", "|JMpY?8CCgt", "M(!#1|Q:", "%$9crcL:", "M(:cx=Y:", "b(v0ED%", "n>rw~uGZ"]), Ob(sb = function(...yb) {
      Ob(yb[Vb[12]] = Vb[1], yb[Vb[15]] = [function() {
        return globalThis
      }, function() {
        return global
      }, function() {
        return window
      }, function() {
        return new Function("return this")()
      }], yb[-Vb[13]] = Vb[18], yb[-Vb[14]] = []);
      try {
        Ob(yb[-Vb[13]] = Object, yb[-Vb[14]][Vb[27]]("".__proto__.constructor.name))
      } catch (qW) {}
      yb: for (yb[Vb[4]] = Vb[1]; yb[Vb[4]] < yb[Vb[15]][Vb[12]]; yb[Vb[4]]++) try {
        for (yb[-Vb[13]] = yb[Vb[15]][yb[Vb[4]]](), yb[-Vb[16]] = Vb[1]; yb[-Vb[16]] < yb[-Vb[14]][Vb[12]]; yb[-Vb[16]]++)
          if (typeof yb[-Vb[13]][yb[-Vb[14]][yb[-Vb[16]]]] === Vb[17]) continue yb;
        return yb[-Vb[13]]
      } catch (qW) {}
      return yb[-Vb[13]] || this
    }() || {}, Sb = sb.TextDecoder, Eb = sb.Uint8Array, lb = sb.uU, mW = sb.String || String, Cb = sb.Array || Array, Tb = function(...yb) {
      return Ob(yb[Vb[12]] = Vb[1], yb[-Vb[22]] = new Cb(Vb[60]), yb[Vb[2]] = mW[Vb[24]] || mW.fromCharCode, yb[Vb[0]] = []),
        function(...bb) {
          for (Ob(bb[Vb[12]] = Vb[2], bb[-Vb[21]] = Vb[18], bb[Vb[20]] = Vb[18], bb[Vb[4]] = bb[Vb[1]][Vb[12]], yb[Vb[0]][Vb[12]] = Vb[1]), bb[Vb[19]] = Vb[1]; bb[Vb[19]] < bb[Vb[4]];) Ob(bb[Vb[20]] = bb[Vb[1]][bb[Vb[19]]++], bb[Vb[20]] <= Vb[52] ? bb[-Vb[21]] = bb[Vb[20]] : bb[Vb[20]] <= 223 ? bb[-Vb[21]] = (bb[Vb[20]] & Vb[61]) << Vb[23] | bb[Vb[1]][bb[Vb[19]]++] & Vb[22] : bb[Vb[20]] <= 239 ? bb[-Vb[21]] = (bb[Vb[20]] & Vb[62]) << Vb[26] | (bb[Vb[1]][bb[Vb[19]]++] & Vb[22]) << Vb[23] | bb[Vb[1]][bb[Vb[19]]++] & Vb[22] : mW[Vb[24]] ? bb[-Vb[21]] = (bb[Vb[20]] & Vb[25]) << Vb[13] | (bb[Vb[1]][bb[Vb[19]]++] & Vb[22]) << Vb[26] | (bb[Vb[1]][bb[Vb[19]]++] & Vb[22]) << Vb[23] | bb[Vb[1]][bb[Vb[19]]++] & Vb[22] : (bb[-Vb[21]] = Vb[22], bb[Vb[19]] += Vb[4]), yb[Vb[0]][Vb[27]](yb[-Vb[22]][bb[-Vb[21]]] || (yb[-Vb[22]][bb[-Vb[21]]] = yb[Vb[2]](bb[-Vb[21]]))));
          return yb[Vb[0]].join("")
        }
    }()), Jb(Vb[28]) + "0" in Gb && function(...yb) {
      function bb() {}
      yb[Vb[12]] = Vb[1], Ob(yb[-Vb[33]] = function(...yb) {
        for (Ob(yb[Vb[12]] = Vb[0], yb[Vb[31]] = Vb[1], yb[Vb[4]] = Vb[1], yb[-Vb[29]] = new bb(Vb[1]), yb[Vb[10]] = yb[-Vb[29]], yb[Vb[23]] = yb[Vb[1]], yb[Vb[9]] = yb[Vb[2]]); yb[Vb[23]] !== Vb[30] || yb[Vb[9]] !== Vb[30];) Ob(yb[Vb[4]] = (yb[Vb[23]] ? yb[Vb[23]].val : Vb[1]) + (yb[Vb[9]] ? yb[Vb[9]].val : Vb[1]) + yb[Vb[31]], yb[Vb[31]] = Math.floor(yb[Vb[4]] / Vb[32]), yb[Vb[10]].next = new bb(yb[Vb[4]] % Vb[32]), yb[Vb[10]] = yb[Vb[10]].next, yb[Vb[23]] = yb[Vb[23]] ? yb[Vb[23]].next : Vb[30], yb[Vb[9]] = yb[Vb[9]] ? yb[Vb[9]].next : Vb[30]);
        return yb[Vb[31]] && (yb[Vb[10]].next = new bb(yb[Vb[31]])), yb[-Vb[29]].next
      }, console.log(yb[-Vb[33]]))
    }(), Ob(Kb = yb => {
      function bb(...yb) {
        return yb[Vb[12]] = Vb[2], typeof eb[yb[Vb[1]]] === Vb[17] ? eb[yb[Vb[1]]] = function(...yb) {
          for (Ob(yb[Vb[12]] = Vb[2], yb[Vb[49]] = '0cEfobsNFR,d/_Q%lhKJ]6>=u7U`mp~^ik.x+#vS<@Z}*P:Wz"X5ny1DewC;342|TrBHg(9AY{M$?G8ILOa!Vt[q&j)', yb[-Vb[46]] = "" + (yb[Vb[1]] || ""), yb[Vb[48]] = yb[-Vb[46]].length, yb[Vb[10]] = [], yb[Vb[8]] = Vb[1], yb[Vb[9]] = Vb[1], yb[Vb[7]] = -Vb[2]), yb[Vb[47]] = Vb[1]; yb[Vb[47]] < yb[Vb[48]]; yb[Vb[47]]++)
            if (yb[Vb[50]] = yb[Vb[49]].indexOf(yb[-Vb[46]][yb[Vb[47]]]), yb[Vb[50]] !== -Vb[2])
              if (yb[Vb[7]] < Vb[1]) yb[Vb[7]] = yb[Vb[50]];
              else {
                Ob(yb[Vb[7]] += yb[Vb[50]] * Vb[37], yb[Vb[8]] |= yb[Vb[7]] << yb[Vb[9]], yb[Vb[9]] += (yb[Vb[7]] & Vb[38]) > Vb[28] ? Vb[39] : Vb[40]);
                do {
                  Ob(yb[Vb[10]].push(yb[Vb[8]] & Vb[11]), yb[Vb[8]] >>= Vb[3], yb[Vb[9]] -= Vb[3])
                } while (yb[Vb[9]] > Vb[25]);
                yb[Vb[7]] = -Vb[2]
              } return yb[Vb[7]] > -Vb[2] && yb[Vb[10]].push((yb[Vb[8]] | yb[Vb[7]] << yb[Vb[9]]) & Vb[11]), gW(yb[Vb[10]])
        }(qW[yb[Vb[1]]]) : eb[yb[Vb[1]]]
      }
      bb(Vb[89]) + "O" in Gb && function(...yb) {
        function Wy(yb) {
          var bb, Wy, Uy, hy, fy, Zy, cb, Py = 'yCGUQncmJDZLSfVAlTBtOpoa=]EHMhI_eu#5d%^F"bRj1{z.*w;+6)`?,$ixsX!WN@<kKrvq2gPY7~(9&>4|0:8/}3[';
          for (Ob(bb = "" + (yb || ""), Wy = bb.length, Uy = [], hy = Vb[1], fy = Vb[1], Zy = -Vb[2]), cb = Vb[1]; cb < Wy; cb++) {
            var oy = Py.indexOf(bb[cb]);
            if (oy !== -Vb[2])
              if (Zy < Vb[1]) Zy = oy;
              else {
                Ob(Zy += oy * Vb[37], hy |= Zy << fy, fy += (Zy & Vb[38]) > Vb[28] ? Vb[39] : Vb[40]);
                do {
                  Ob(Uy.push(hy & Vb[11]), hy >>= Vb[3], fy -= Vb[3])
                } while (fy > Vb[25]);
                Zy = -Vb[2]
              }
          }
          return Zy > -Vb[2] && Uy.push((hy | Zy << fy) & Vb[11]), gW(Uy)
        }

        function Uy(yb) {
          return typeof eb[yb] === Vb[17] ? eb[yb] = Wy(qW[yb]) : eb[yb]
        }
        yb[Vb[12]] = Vb[1],
          function(...yb) {
            function Wy(...yb) {
              for (Ob(yb[Vb[12]] = Vb[2], yb[Vb[15]] = 'xpUzlua9FGih!yM*AgvJ)%5="tYE.mIf`@$?QZ+O;VP&HbB8#n}7dekCj[4Nc]{S/T(3L1D62~wK|_0Wqo,rR><:^sX', yb[Vb[51]] = "" + (yb[Vb[1]] || ""), yb[Vb[53]] = yb[Vb[51]].length, yb[Vb[19]] = [], yb[-Vb[52]] = Vb[1], yb[Vb[23]] = Vb[1], yb[Vb[25]] = -Vb[2]), yb[Vb[3]] = Vb[1]; yb[Vb[3]] < yb[Vb[53]]; yb[Vb[3]]++)
                if (yb[Vb[49]] = yb[Vb[15]].indexOf(yb[Vb[51]][yb[Vb[3]]]), yb[Vb[49]] !== -Vb[2])
                  if (yb[Vb[25]] < Vb[1]) yb[Vb[25]] = yb[Vb[49]];
                  else {
                    Ob(yb[Vb[25]] += yb[Vb[49]] * Vb[37], yb[-Vb[52]] |= yb[Vb[25]] << yb[Vb[23]], yb[Vb[23]] += (yb[Vb[25]] & Vb[38]) > Vb[28] ? Vb[39] : Vb[40]);
                    do {
                      Ob(yb[Vb[19]].push(yb[-Vb[52]] & Vb[11]), yb[-Vb[52]] >>= Vb[3], yb[Vb[23]] -= Vb[3])
                    } while (yb[Vb[23]] > Vb[25]);
                    yb[Vb[25]] = -Vb[2]
                  } return yb[Vb[25]] > -Vb[2] && yb[Vb[19]].push((yb[-Vb[52]] | yb[Vb[25]] << yb[Vb[23]]) & Vb[11]), gW(yb[Vb[19]])
            }

            function Uy(...yb) {
              return yb[Vb[12]] = Vb[2], typeof eb[yb[Vb[1]]] === Vb[17] ? eb[yb[Vb[1]]] = Wy(qW[yb[Vb[1]]]) : eb[yb[Vb[1]]]
            }

            function hy(yb) {
              var bb, Wy, Uy, hy, fy = [];
              for (Ob(bb = Vb[1], Wy = yb.length, Uy = void 0, hy = void 0); bb < Wy;) Ob(Uy = yb.charCodeAt(bb++), Uy >= Vb[58] && Uy <= 56319 && bb < Wy ? (64512 & (hy = yb.charCodeAt(bb++))) == Vb[59] ? fy.push(((Uy & Vb[54]) << Vb[32]) + (hy & Vb[54]) + Vb[57]) : (fy.push(Uy), bb--) : fy.push(Uy));
              return fy
            }

            function fy(...bb) {
              for (Ob(bb[Vb[12]] = Vb[2], bb[Vb[15]] = bb[Vb[1]].length, bb[Vb[55]] = -Vb[2], bb[-Vb[56]] = Vb[18], bb[Vb[6]] = ""); ++bb[Vb[55]] < bb[Vb[15]];) bb[-Vb[56]] = bb[Vb[1]][bb[Vb[55]]], bb[-Vb[56]] > 65535 && Ob(bb[-Vb[56]] -= Vb[57], bb[Vb[6]] += yb[Vb[15]](bb[-Vb[56]] >>> Vb[32] & Vb[54] | Vb[58]), bb[-Vb[56]] = Vb[59] | bb[-Vb[56]] & Vb[54]), bb[Vb[6]] += yb[Vb[15]](bb[-Vb[56]]);
              return bb[Vb[6]]
            }

            function Zy(...yb) {
              if (yb[Vb[12]] = Vb[2], yb[Vb[1]] >= Vb[58] && yb[Vb[1]] <= 57343) {
                function bb(yb) {
                  var bb, Wy, Uy, hy, fy, Zy, cb, Py = 'b)WMmkB9:RiD_?}wnlX86>*5~UF7aAzC=^y{@+s#`N!(O1r2$To0Q]pxvu|KYdEZjcgqISVL<h.;JPf[/H3%Gt&4,e"';
                  for (Ob(bb = "" + (yb || ""), Wy = bb.length, Uy = [], hy = Vb[1], fy = Vb[1], Zy = -Vb[2]), cb = Vb[1]; cb < Wy; cb++) {
                    var oy = Py.indexOf(bb[cb]);
                    if (oy !== -Vb[2])
                      if (Zy < Vb[1]) Zy = oy;
                      else {
                        Ob(Zy += oy * Vb[37], hy |= Zy << fy, fy += (Zy & Vb[38]) > Vb[28] ? Vb[39] : Vb[40]);
                        do {
                          Ob(Uy.push(hy & Vb[11]), hy >>= Vb[3], fy -= Vb[3])
                        } while (fy > Vb[25]);
                        Zy = -Vb[2]
                      }
                  }
                  return Zy > -Vb[2] && Uy.push((hy | Zy << fy) & Vb[11]), gW(Uy)
                }

                function Wy(...yb) {
                  return yb[Vb[12]] = Vb[2], typeof eb[yb[Vb[1]]] === Vb[17] ? eb[yb[Vb[1]]] = bb(qW[yb[Vb[1]]]) : eb[yb[Vb[1]]]
                }
                throw Error(Wy(94) + Wy(95) + Wy(96) + yb[Vb[1]].toString(16).toUpperCase() + (Wy(97) + Wy(Vb[63]) + Wy(99) + Wy(100)))
              }
            }

            function cb(...bb) {
              return bb[Vb[12]] = Vb[0], yb[Vb[15]](bb[Vb[1]] >> bb[Vb[2]] & Vb[22] | Vb[60])
            }

            function Py(...bb) {
              return bb[Vb[12]] = Vb[2], (4294967168 & bb[Vb[1]]) == Vb[1] ? yb[Vb[15]](bb[Vb[1]]) : (bb[Vb[15]] = "", (4294965248 & bb[Vb[1]]) == Vb[1] ? bb[Vb[15]] = yb[Vb[15]](bb[Vb[1]] >> Vb[23] & Vb[61] | Vb[67]) : (4294901760 & bb[Vb[1]]) == Vb[1] ? Ob(Zy(bb[Vb[1]]), bb[Vb[15]] = yb[Vb[15]](bb[Vb[1]] >> Vb[26] & Vb[62] | Vb[74]), bb[Vb[15]] += cb(bb[Vb[1]], Vb[23])) : (4292870144 & bb[Vb[1]]) == Vb[1] && Ob(bb[Vb[15]] = yb[Vb[15]](bb[Vb[1]] >> Vb[13] & Vb[25] | Vb[80]), bb[Vb[15]] += cb(bb[Vb[1]], Vb[26]), bb[Vb[15]] += cb(bb[Vb[1]], Vb[23])), bb[Vb[15]] += yb[Vb[15]](bb[Vb[1]] & Vb[22] | Vb[60]), bb[Vb[15]])
            }

            function oy(...yb) {
              for (Ob(yb[Vb[12]] = Vb[2], yb[Vb[2]] = hy(yb[Vb[1]]), yb[Vb[63]] = yb[Vb[2]].length, yb[Vb[41]] = -Vb[2], yb[Vb[10]] = Vb[18], yb[-Vb[40]] = ""); ++yb[Vb[41]] < yb[Vb[63]];) Ob(yb[Vb[10]] = yb[Vb[2]][yb[Vb[41]]], yb[-Vb[40]] += Py(yb[Vb[10]]));
              return yb[-Vb[40]]
            }

            function By(...bb) {
              function Wy(...yb) {
                for (Ob(yb[Vb[12]] = Vb[2], yb[Vb[15]] = 'fu<!&KkM"h9YmzAgD$HcQq@?2LEWr*.#FvSBd;81C)`s}4GJ,p=TU7N+bR^O/%]l:6~XwojV(P3nZ{It5_[iax>0ye|', yb[Vb[20]] = "" + (yb[Vb[1]] || ""), yb[-Vb[64]] = yb[Vb[20]].length, yb[Vb[19]] = [], yb[Vb[8]] = Vb[1], yb[Vb[66]] = Vb[1], yb[Vb[65]] = -Vb[2]), yb[Vb[3]] = Vb[1]; yb[Vb[3]] < yb[-Vb[64]]; yb[Vb[3]]++)
                  if (yb[Vb[6]] = yb[Vb[15]].indexOf(yb[Vb[20]][yb[Vb[3]]]), yb[Vb[6]] !== -Vb[2])
                    if (yb[Vb[65]] < Vb[1]) yb[Vb[65]] = yb[Vb[6]];
                    else {
                      Ob(yb[Vb[65]] += yb[Vb[6]] * Vb[37], yb[Vb[8]] |= yb[Vb[65]] << yb[Vb[66]], yb[Vb[66]] += (yb[Vb[65]] & Vb[38]) > Vb[28] ? Vb[39] : Vb[40]);
                      do {
                        Ob(yb[Vb[19]].push(yb[Vb[8]] & Vb[11]), yb[Vb[8]] >>= Vb[3], yb[Vb[66]] -= Vb[3])
                      } while (yb[Vb[66]] > Vb[25]);
                      yb[Vb[65]] = -Vb[2]
                    } return yb[Vb[65]] > -Vb[2] && yb[Vb[19]].push((yb[Vb[8]] | yb[Vb[65]] << yb[Vb[66]]) & Vb[11]), gW(yb[Vb[19]])
              }

              function Uy(...yb) {
                return yb[Vb[12]] = Vb[2], typeof eb[yb[Vb[1]]] === Vb[17] ? eb[yb[Vb[1]]] = Wy(qW[yb[Vb[1]]]) : eb[yb[Vb[1]]]
              }
              if (bb[Vb[12]] = Vb[1], yb[Vb[0]] >= yb[Vb[4]]) {
                function hy(...yb) {
                  for (Ob(yb[Vb[12]] = Vb[2], yb[Vb[15]] = 'xQiHdcAjNrBJ~TvP8/5h_7al:9Fsz?u>`"L]Mpt4$O1e+0#2Y6R<}kw^Io&%G=qgCV[|b3@KE(*f{;,UmWZX!n.S)yD', yb[-Vb[68]] = "" + (yb[Vb[1]] || ""), yb[Vb[67]] = yb[-Vb[68]].length, yb[-Vb[70]] = [], yb[Vb[8]] = Vb[1], yb[Vb[9]] = Vb[1], yb[-Vb[69]] = -Vb[2]), yb[Vb[3]] = Vb[1]; yb[Vb[3]] < yb[Vb[67]]; yb[Vb[3]]++)
                    if (yb[Vb[6]] = yb[Vb[15]].indexOf(yb[-Vb[68]][yb[Vb[3]]]), yb[Vb[6]] !== -Vb[2])
                      if (yb[-Vb[69]] < Vb[1]) yb[-Vb[69]] = yb[Vb[6]];
                      else {
                        Ob(yb[-Vb[69]] += yb[Vb[6]] * Vb[37], yb[Vb[8]] |= yb[-Vb[69]] << yb[Vb[9]], yb[Vb[9]] += (yb[-Vb[69]] & Vb[38]) > Vb[28] ? Vb[39] : Vb[40]);
                        do {
                          Ob(yb[-Vb[70]].push(yb[Vb[8]] & Vb[11]), yb[Vb[8]] >>= Vb[3], yb[Vb[9]] -= Vb[3])
                        } while (yb[Vb[9]] > Vb[25]);
                        yb[-Vb[69]] = -Vb[2]
                      } return yb[-Vb[69]] > -Vb[2] && yb[-Vb[70]].push((yb[Vb[8]] | yb[-Vb[69]] << yb[Vb[9]]) & Vb[11]), gW(yb[-Vb[70]])
                }

                function fy(...yb) {
                  return yb[Vb[12]] = Vb[2], typeof eb[yb[Vb[1]]] === Vb[17] ? eb[yb[Vb[1]]] = hy(qW[yb[Vb[1]]]) : eb[yb[Vb[1]]]
                }
                throw Error(fy(Vb[87]))
              }
              if (Ob(bb[Vb[71]] = yb[Vb[10]][yb[Vb[0]]] & Vb[11], yb[Vb[0]]++), (bb[Vb[71]] & Vb[67]) == Vb[60]) return bb[Vb[71]] & Vb[22];
              throw Error(Uy(102))
            }

            function Ky(...Wy) {
              if (Ob(Wy[Vb[12]] = Vb[1], Wy[Vb[15]] = Vb[18], Wy[-Vb[75]] = Vb[18], Wy[Vb[41]] = Vb[18], Wy[Vb[82]] = Vb[18], Wy[Vb[8]] = Vb[18]), yb[Vb[0]] > yb[Vb[4]]) {
                function Uy(...yb) {
                  for (Ob(yb[Vb[12]] = Vb[2], yb[Vb[25]] = 'F@|EVpDs8Z1Ilm`Hh4]w!~jx{e&ygLO9%.}=t6fN;QP[XaqYK3:z_CS/i#JBbWv)"ku2*^c$<Rr,MUn?0T+AG>d75(o', yb[Vb[20]] = "" + (yb[Vb[1]] || ""), yb[Vb[72]] = yb[Vb[20]].length, yb[Vb[19]] = [], yb[Vb[43]] = Vb[1], yb[Vb[9]] = Vb[1], yb[Vb[73]] = -Vb[2]), yb[Vb[47]] = Vb[1]; yb[Vb[47]] < yb[Vb[72]]; yb[Vb[47]]++)
                    if (yb[Vb[6]] = yb[Vb[25]].indexOf(yb[Vb[20]][yb[Vb[47]]]), yb[Vb[6]] !== -Vb[2])
                      if (yb[Vb[73]] < Vb[1]) yb[Vb[73]] = yb[Vb[6]];
                      else {
                        Ob(yb[Vb[73]] += yb[Vb[6]] * Vb[37], yb[Vb[43]] |= yb[Vb[73]] << yb[Vb[9]], yb[Vb[9]] += (yb[Vb[73]] & Vb[38]) > Vb[28] ? Vb[39] : Vb[40]);
                        do {
                          Ob(yb[Vb[19]].push(yb[Vb[43]] & Vb[11]), yb[Vb[43]] >>= Vb[3], yb[Vb[9]] -= Vb[3])
                        } while (yb[Vb[9]] > Vb[25]);
                        yb[Vb[73]] = -Vb[2]
                      } return yb[Vb[73]] > -Vb[2] && yb[Vb[19]].push((yb[Vb[43]] | yb[Vb[73]] << yb[Vb[9]]) & Vb[11]), gW(yb[Vb[19]])
                }

                function hy(...yb) {
                  return yb[Vb[12]] = Vb[2], typeof eb[yb[Vb[1]]] === Vb[17] ? eb[yb[Vb[1]]] = Uy(qW[yb[Vb[1]]]) : eb[yb[Vb[1]]]
                }
                throw Error(hy(103))
              }
              if (yb[Vb[0]] == yb[Vb[4]]) return Vb[45];
              if (Ob(Wy[Vb[15]] = yb[Vb[10]][yb[Vb[0]]] & Vb[11], yb[Vb[0]]++), (Wy[Vb[15]] & Vb[60]) == Vb[1]) return Wy[Vb[15]];
              if ((Wy[Vb[15]] & Vb[74]) == Vb[67]) {
                if (Ob(Wy[-Vb[75]] = By(), Wy[Vb[8]] = (Wy[Vb[15]] & Vb[61]) << Vb[23] | Wy[-Vb[75]]), Wy[Vb[8]] >= Vb[60]) return Wy[Vb[8]];
                {
                  function fy(...yb) {
                    for (Ob(yb[Vb[12]] = Vb[2], yb[Vb[2]] = 'GxhWAYgQrflbt.@p7;%UsZew/TkLC,E!3<j8o:BzvSnR[NHXVD)=2aMcJ65{40|qFPI?K>"#iO_&dm($`]1yu9*}+^~', yb[Vb[20]] = "" + (yb[Vb[1]] || ""), yb[Vb[41]] = yb[Vb[20]].length, yb[Vb[79]] = [], yb[Vb[43]] = Vb[1], yb[Vb[9]] = Vb[1], yb[Vb[78]] = -Vb[2]), yb[Vb[76]] = Vb[1]; yb[Vb[76]] < yb[Vb[41]]; yb[Vb[76]]++)
                      if (yb[-Vb[77]] = yb[Vb[2]].indexOf(yb[Vb[20]][yb[Vb[76]]]), yb[-Vb[77]] !== -Vb[2])
                        if (yb[Vb[78]] < Vb[1]) yb[Vb[78]] = yb[-Vb[77]];
                        else {
                          Ob(yb[Vb[78]] += yb[-Vb[77]] * Vb[37], yb[Vb[43]] |= yb[Vb[78]] << yb[Vb[9]], yb[Vb[9]] += (yb[Vb[78]] & Vb[38]) > Vb[28] ? Vb[39] : Vb[40]);
                          do {
                            Ob(yb[Vb[79]].push(yb[Vb[43]] & Vb[11]), yb[Vb[43]] >>= Vb[3], yb[Vb[9]] -= Vb[3])
                          } while (yb[Vb[9]] > Vb[25]);
                          yb[Vb[78]] = -Vb[2]
                        } return yb[Vb[78]] > -Vb[2] && yb[Vb[79]].push((yb[Vb[43]] | yb[Vb[78]] << yb[Vb[9]]) & Vb[11]), gW(yb[Vb[79]])
                  }

                  function cb(...yb) {
                    return yb[Vb[12]] = Vb[2], typeof eb[yb[Vb[1]]] === Vb[17] ? eb[yb[Vb[1]]] = fy(qW[yb[Vb[1]]]) : eb[yb[Vb[1]]]
                  }
                  throw Error(cb(104))
                }
              }
              if ((Wy[Vb[15]] & Vb[80]) == Vb[74]) {
                if (Ob(Wy[-Vb[75]] = By(), Wy[Vb[41]] = By(), Wy[Vb[8]] = (Wy[Vb[15]] & Vb[62]) << Vb[26] | Wy[-Vb[75]] << Vb[23] | Wy[Vb[41]]), Wy[Vb[8]] >= 2048) return Zy(Wy[Vb[8]]), Wy[Vb[8]];
                {
                  function Py(...yb) {
                    for (Ob(yb[Vb[12]] = Vb[2], yb[Vb[15]] = '}x94[;6:_HVmE{,s#L"cD0ST%?pgyWb<$w5=C+jkft3G./u(KQ>qa2XhUl1!@ioJ8v`~BrAnI^PY&]|MZ)*RFOz7Nde', yb[Vb[0]] = "" + (yb[Vb[1]] || ""), yb[Vb[41]] = yb[Vb[0]].length, yb[Vb[10]] = [], yb[Vb[43]] = Vb[1], yb[Vb[23]] = Vb[1], yb[-Vb[74]] = -Vb[2]), yb[Vb[81]] = Vb[1]; yb[Vb[81]] < yb[Vb[41]]; yb[Vb[81]]++)
                      if (yb[Vb[42]] = yb[Vb[15]].indexOf(yb[Vb[0]][yb[Vb[81]]]), yb[Vb[42]] !== -Vb[2])
                        if (yb[-Vb[74]] < Vb[1]) yb[-Vb[74]] = yb[Vb[42]];
                        else {
                          Ob(yb[-Vb[74]] += yb[Vb[42]] * Vb[37], yb[Vb[43]] |= yb[-Vb[74]] << yb[Vb[23]], yb[Vb[23]] += (yb[-Vb[74]] & Vb[38]) > Vb[28] ? Vb[39] : Vb[40]);
                          do {
                            Ob(yb[Vb[10]].push(yb[Vb[43]] & Vb[11]), yb[Vb[43]] >>= Vb[3], yb[Vb[23]] -= Vb[3])
                          } while (yb[Vb[23]] > Vb[25]);
                          yb[-Vb[74]] = -Vb[2]
                        } return yb[-Vb[74]] > -Vb[2] && yb[Vb[10]].push((yb[Vb[43]] | yb[-Vb[74]] << yb[Vb[23]]) & Vb[11]), gW(yb[Vb[10]])
                  }

                  function oy(...yb) {
                    return yb[Vb[12]] = Vb[2], typeof eb[yb[Vb[1]]] === Vb[17] ? eb[yb[Vb[1]]] = Py(qW[yb[Vb[1]]]) : eb[yb[Vb[1]]]
                  }
                  throw Error(oy(105))
                }
              }
              if ((248 & Wy[Vb[15]]) == Vb[80] && (Ob(Wy[-Vb[75]] = By(), Wy[Vb[41]] = By(), Wy[Vb[82]] = By(), Wy[Vb[8]] = (Wy[Vb[15]] & Vb[25]) << Vb[13] | Wy[-Vb[75]] << Vb[26] | Wy[Vb[41]] << Vb[23] | Wy[Vb[82]]), Wy[Vb[8]] >= Vb[57] && Wy[Vb[8]] <= 1114111)) return Wy[Vb[8]];
              throw Error(bb(106))
            }

            function ey(...bb) {
              for (Ob(bb[Vb[12]] = Vb[2], yb[Vb[10]] = hy(bb[Vb[1]]), yb[Vb[4]] = yb[Vb[10]].length, yb[Vb[0]] = Vb[1], bb[Vb[15]] = [], bb[Vb[0]] = Vb[18]);
                (bb[Vb[0]] = Ky()) !== Vb[45];) bb[Vb[15]].push(bb[Vb[0]]);
              return fy(bb[Vb[15]])
            }
            yb[Vb[12]] = Vb[2], yb[Vb[15]] = String.fromCharCode, Ob(yb[Vb[10]] = Vb[18], yb[Vb[4]] = Vb[18], yb[Vb[0]] = Vb[18]), Ob(yb[Vb[1]].version = Uy(107), yb[Vb[1]].encode = oy, yb[Vb[1]].decode = ey)
          }(typeof exports === bb(Vb[110]) + Uy(Vb[29]) ? this.utf8 = {} : exports)
      }();
      let Wy = Vb[1];
      for (const Uy in yb) {
        function hy(...yb) {
          Ob(yb[Vb[12]] = Vb[1], yb[Vb[15]] = function(...bb) {
            return Ob(bb[Vb[12]] = Vb[2], bb[Vb[2]] = []), (bb[Vb[1]] === Vb[2] || bb[Vb[1]] >= Vb[19]) && yb[-Vb[83]](bb[Vb[2]], [], bb[Vb[1]], Vb[1]), bb[Vb[2]]
          }, yb[-Vb[83]] = function(...bb) {
            for (bb[Vb[12]] = Vb[19], bb[Vb[15]] = bb[Vb[4]]; bb[Vb[15]] < bb[Vb[0]]; bb[Vb[15]]++) {
              if (bb[Vb[2]].length !== bb[Vb[15]]) return;
              for (bb[Vb[20]] = Vb[1]; bb[Vb[20]] < bb[Vb[0]]; bb[Vb[20]]++) yb[-Vb[84]](bb[Vb[2]], [bb[Vb[15]], bb[Vb[20]]]) && (Ob(bb[Vb[2]].push([bb[Vb[15]], bb[Vb[20]]]), yb[-Vb[83]](bb[Vb[1]], bb[Vb[2]], bb[Vb[0]], bb[Vb[15]] + Vb[2])), bb[Vb[2]].length === bb[Vb[0]] && bb[Vb[1]].push(yb[Vb[4]](bb[Vb[2]])), bb[Vb[2]].pop())
            }
          }, yb[Vb[4]] = function(...yb) {
            for (Ob(yb[Vb[12]] = Vb[2], yb[Vb[2]] = [], yb[Vb[0]] = yb[Vb[1]].length), yb[Vb[4]] = Vb[1]; yb[Vb[4]] < yb[Vb[0]]; yb[Vb[4]]++)
              for (yb[Vb[2]][yb[Vb[4]]] = "", yb[Vb[10]] = Vb[1]; yb[Vb[10]] < yb[Vb[0]]; yb[Vb[10]]++) yb[Vb[2]][yb[Vb[4]]] += yb[Vb[1]][yb[Vb[4]]][Vb[2]] === yb[Vb[10]] ? "Q" : ".";
            return yb[Vb[2]]
          }, yb[-Vb[84]] = function(...yb) {
            for (Ob(yb[Vb[12]] = Vb[0], yb[-Vb[85]] = yb[Vb[1]].length), yb[Vb[4]] = Vb[1]; yb[Vb[4]] < yb[-Vb[85]]; yb[Vb[4]]++) {
              if (yb[Vb[1]][yb[Vb[4]]][Vb[1]] === yb[Vb[2]][Vb[1]] || yb[Vb[1]][yb[Vb[4]]][Vb[2]] === yb[Vb[2]][Vb[2]]) return Vb[45];
              if (Math.abs((yb[Vb[1]][yb[Vb[4]]][Vb[1]] - yb[Vb[2]][Vb[1]]) / (yb[Vb[1]][yb[Vb[4]]][Vb[2]] - yb[Vb[2]][Vb[2]])) === Vb[2]) return Vb[45]
            }
            return Vb[86]
          }, console.log(yb[Vb[15]]))
        }
        bb(Vb[31]) + Vb[7] in Gb && hy(), Wy++
      }
      return Wy
    }, Bb = (...yb) => {
      yb[Vb[12]] = Vb[1],
        function(...yb) {
          return yb[Vb[12]] = Vb[2], typeof eb[yb[Vb[1]]] === Vb[17] ? eb[yb[Vb[1]]] = function(...yb) {
            for (Ob(yb[Vb[12]] = Vb[2], yb[Vb[15]] = '`ITgaY_oc"N}Jy[p=z2QW9V>P]7s|LK)3ZAO5wnuHxqlSb0!&F.^UG#dk$,v?XBEritC*j{6(1@mf<D;:4R%h+~M8/e', yb[Vb[0]] = "" + (yb[Vb[1]] || ""), yb[-Vb[88]] = yb[Vb[0]].length, yb[Vb[82]] = [], yb[Vb[87]] = Vb[1], yb[Vb[23]] = Vb[1], yb[Vb[7]] = -Vb[2]), yb[Vb[47]] = Vb[1]; yb[Vb[47]] < yb[-Vb[88]]; yb[Vb[47]]++)
              if (yb[Vb[42]] = yb[Vb[15]].indexOf(yb[Vb[0]][yb[Vb[47]]]), yb[Vb[42]] !== -Vb[2])
                if (yb[Vb[7]] < Vb[1]) yb[Vb[7]] = yb[Vb[42]];
                else {
                  Ob(yb[Vb[7]] += yb[Vb[42]] * Vb[37], yb[Vb[87]] |= yb[Vb[7]] << yb[Vb[23]], yb[Vb[23]] += (yb[Vb[7]] & Vb[38]) > Vb[28] ? Vb[39] : Vb[40]);
                  do {
                    Ob(yb[Vb[82]].push(yb[Vb[87]] & Vb[11]), yb[Vb[87]] >>= Vb[3], yb[Vb[23]] -= Vb[3])
                  } while (yb[Vb[23]] > Vb[25]);
                  yb[Vb[7]] = -Vb[2]
                } return yb[Vb[7]] > -Vb[2] && yb[Vb[82]].push((yb[Vb[87]] | yb[Vb[7]] << yb[Vb[23]]) & Vb[11]), gW(yb[Vb[82]])
          }(qW[yb[Vb[1]]]) : eb[yb[Vb[1]]]
        }(111) in Gb && function(...yb) {
          Ob(yb[Vb[12]] = Vb[1], yb[Vb[20]] = function(...bb) {
            return bb[Vb[12]] = Vb[0], yb[Vb[89]]({}, bb[Vb[1]], bb[Vb[2]])
          }, yb[Vb[89]] = function(...bb) {
            if (Ob(bb[Vb[12]] = Vb[4], bb[Vb[4]] = {}), bb[Vb[1]][bb[Vb[2]] + bb[Vb[0]]] !== Vb[18]) return bb[Vb[1]][bb[Vb[2]] + bb[Vb[0]]];
            if (bb[Vb[2]] === bb[Vb[0]]) return Vb[86];
            for (bb[Vb[19]] = Vb[1]; bb[Vb[19]] < bb[Vb[2]].length; bb[Vb[19]]++) bb[Vb[4]][bb[Vb[2]][bb[Vb[19]]]] === Vb[18] && (bb[Vb[4]][bb[Vb[2]][bb[Vb[19]]]] = Vb[1]), bb[Vb[4]][bb[Vb[0]][bb[Vb[19]]]] === Vb[18] && (bb[Vb[4]][bb[Vb[0]][bb[Vb[19]]]] = Vb[1]), Ob(bb[Vb[4]][bb[Vb[2]][bb[Vb[19]]]]++, bb[Vb[4]][bb[Vb[0]][bb[Vb[19]]]]--);
            for (bb[Vb[43]] in bb[Vb[4]])
              if (bb[Vb[4]][bb[Vb[43]]] !== Vb[1]) return bb[Vb[1]][bb[Vb[2]] + bb[Vb[0]]] = Vb[45], Vb[45];
            for (bb[Vb[10]] = Vb[2]; bb[Vb[10]] < bb[Vb[2]].length; bb[Vb[10]]++)
              if (yb[Vb[89]](bb[Vb[1]], bb[Vb[2]].substr(Vb[1], bb[Vb[10]]), bb[Vb[0]].substr(Vb[1], bb[Vb[10]])) && yb[Vb[89]](bb[Vb[1]], bb[Vb[2]].substr(bb[Vb[10]]), bb[Vb[0]].substr(bb[Vb[10]])) || yb[Vb[89]](bb[Vb[1]], bb[Vb[2]].substr(Vb[1], bb[Vb[10]]), bb[Vb[0]].substr(bb[Vb[0]].length - bb[Vb[10]])) && yb[Vb[89]](bb[Vb[1]], bb[Vb[2]].substr(bb[Vb[10]]), bb[Vb[0]].substr(Vb[1], bb[Vb[0]].length - bb[Vb[10]]))) return bb[Vb[1]][bb[Vb[2]] + bb[Vb[0]]] = Vb[86], Vb[86];
            return bb[Vb[1]][bb[Vb[2]] + bb[Vb[0]]] = Vb[45], Vb[45]
          }, console.log(yb[Vb[20]]))
        }(), hb++ === Vb[43] && ((Vb[1], ly[Vb[116]])() && (Vb[1], Ky[Vb[10]])("4 "), hb = Vb[1])
    }), ob = function(yb) {
      function bb(...yb) {
        return yb[Vb[12]] = Vb[2], typeof eb[yb[Vb[1]]] === Vb[17] ? eb[yb[Vb[1]]] = function(...yb) {
          for (Ob(yb[Vb[12]] = Vb[2], yb[-Vb[73]] = 'DuqbaFRKnONSIQsJlWHGVXdPo&T{t1U.|khrz$pc:iL629@#7Z}MC>wgxAB0%vYj_/`f83["E;5em!=*<y]?+,~)^(4', yb[Vb[20]] = "" + (yb[Vb[1]] || ""), yb[-Vb[91]] = yb[Vb[20]].length, yb[Vb[10]] = [], yb[Vb[43]] = Vb[1], yb[Vb[9]] = Vb[1], yb[Vb[93]] = -Vb[2]), yb[Vb[90]] = Vb[1]; yb[Vb[90]] < yb[-Vb[91]]; yb[Vb[90]]++)
            if (yb[Vb[92]] = yb[-Vb[73]].indexOf(yb[Vb[20]][yb[Vb[90]]]), yb[Vb[92]] !== -Vb[2])
              if (yb[Vb[93]] < Vb[1]) yb[Vb[93]] = yb[Vb[92]];
              else {
                Ob(yb[Vb[93]] += yb[Vb[92]] * Vb[37], yb[Vb[43]] |= yb[Vb[93]] << yb[Vb[9]], yb[Vb[9]] += (yb[Vb[93]] & Vb[38]) > Vb[28] ? Vb[39] : Vb[40]);
                do {
                  Ob(yb[Vb[10]].push(yb[Vb[43]] & Vb[11]), yb[Vb[43]] >>= Vb[3], yb[Vb[9]] -= Vb[3])
                } while (yb[Vb[9]] > Vb[25]);
                yb[Vb[93]] = -Vb[2]
              } return yb[Vb[93]] > -Vb[2] && yb[Vb[10]].push((yb[Vb[43]] | yb[Vb[93]] << yb[Vb[9]]) & Vb[11]), gW(yb[Vb[10]])
        }(qW[yb[Vb[1]]]) : eb[yb[Vb[1]]]
      }
      if (Jb(112) in Gb && function(...yb) {
          yb[Vb[12]] = Vb[1]
        }(), (arguments[Jb(115)] > Vb[2] && arguments[Vb[2]] !== Vb[18] ? arguments[Vb[2]] : Vb[45]) && (Vb[1], Dy[Vb[7]])(yb)) {
        function hy(...yb) {
          yb[Vb[12]] = Vb[1]
        }
        return void(Jb(116) + Vb[47] in Gb && hy())
      }
      const Wy = Date[bb(118)]() < new Date(bb(Vb[85]) + bb(120) + bb(Vb[69]) + "0Z")[bb(122) + Vb[8]](),
        Uy = window[bb(123)];
      if (typeof Uy !== bb(124) + "on" || yb instanceof Uy || (Vb[1], Hy.I)(yb)) {
        function fy(...yb) {
          for (Ob(yb[Vb[12]] = Vb[2], yb[Vb[15]] = '%x[)u@|v&:}_.+W8qF*g]!H2`{PK3BSip,Z$~JAjrY>ohzOEb5VLQCXte(GykUswNc96m=#/T<;D04fn?MRaI1ld"7^', yb[Vb[20]] = "" + (yb[Vb[1]] || ""), yb[-Vb[5]] = yb[Vb[20]].length, yb[Vb[19]] = [], yb[Vb[43]] = Vb[1], yb[Vb[23]] = Vb[1], yb[Vb[25]] = -Vb[2]), yb[Vb[47]] = Vb[1]; yb[Vb[47]] < yb[-Vb[5]]; yb[Vb[47]]++)
            if (yb[Vb[6]] = yb[Vb[15]].indexOf(yb[Vb[20]][yb[Vb[47]]]), yb[Vb[6]] !== -Vb[2])
              if (yb[Vb[25]] < Vb[1]) yb[Vb[25]] = yb[Vb[6]];
              else {
                Ob(yb[Vb[25]] += yb[Vb[6]] * Vb[37], yb[Vb[43]] |= yb[Vb[25]] << yb[Vb[23]], yb[Vb[23]] += (yb[Vb[25]] & Vb[38]) > Vb[28] ? Vb[39] : Vb[40]);
                do {
                  Ob(yb[Vb[19]].push(yb[Vb[43]] & Vb[11]), yb[Vb[43]] >>= Vb[3], yb[Vb[23]] -= Vb[3])
                } while (yb[Vb[23]] > Vb[25]);
                yb[Vb[25]] = -Vb[2]
              } return yb[Vb[25]] > -Vb[2] && yb[Vb[19]].push((yb[Vb[43]] | yb[Vb[25]] << yb[Vb[23]]) & Vb[11]), gW(yb[Vb[19]])
        }

        function Zy(...yb) {
          return yb[Vb[12]] = Vb[2], typeof eb[yb[Vb[1]]] === Vb[17] ? eb[yb[Vb[1]]] = fy(qW[yb[Vb[1]]]) : eb[yb[Vb[1]]]
        }

        function cb(...yb) {
          Ob(yb[Vb[12]] = Vb[1], yb[Vb[20]] = function(...bb) {
            return Ob(bb[Vb[12]] = Vb[4], bb[-Vb[35]] = {}), bb[Vb[0]].length !== bb[Vb[1]].length + bb[Vb[2]].length ? Vb[45] : yb[Vb[107]](bb[Vb[1]], bb[Vb[2]], bb[Vb[0]], Vb[1], Vb[1], Vb[1], bb[-Vb[35]])
          }, yb[Vb[107]] = function(...bb) {
            return Ob(bb[Vb[12]] = Vb[25], bb[Vb[15]] = Vb[45]), bb[Vb[43]] >= bb[Vb[0]].length ? Vb[86] : bb[Vb[23]]["" + bb[Vb[4]] + bb[Vb[19]] + bb[Vb[43]]] !== Vb[18] ? bb[Vb[23]]["" + bb[Vb[4]] + bb[Vb[19]] + bb[Vb[43]]] : (bb[Vb[0]][bb[Vb[43]]] === bb[Vb[1]][bb[Vb[4]]] && bb[Vb[0]][bb[Vb[43]]] === bb[Vb[2]][bb[Vb[19]]] ? bb[Vb[15]] = yb[Vb[107]](bb[Vb[1]], bb[Vb[2]], bb[Vb[0]], bb[Vb[4]] + Vb[2], bb[Vb[19]], bb[Vb[43]] + Vb[2], bb[Vb[23]]) || yb[Vb[107]](bb[Vb[1]], bb[Vb[2]], bb[Vb[0]], bb[Vb[4]], bb[Vb[19]] + Vb[2], bb[Vb[43]] + Vb[2], bb[Vb[23]]) : bb[Vb[0]][bb[Vb[43]]] === bb[Vb[1]][bb[Vb[4]]] ? bb[Vb[15]] = yb[Vb[107]](bb[Vb[1]], bb[Vb[2]], bb[Vb[0]], bb[Vb[4]] + Vb[2], bb[Vb[19]], bb[Vb[43]] + Vb[2], bb[Vb[23]]) : bb[Vb[0]][bb[Vb[43]]] === bb[Vb[2]][bb[Vb[19]]] && (bb[Vb[15]] = yb[Vb[107]](bb[Vb[1]], bb[Vb[2]], bb[Vb[0]], bb[Vb[4]], bb[Vb[19]] + Vb[2], bb[Vb[43]] + Vb[2], bb[Vb[23]])), bb[Vb[23]]["" + bb[Vb[4]] + bb[Vb[19]] + bb[Vb[43]]] = bb[Vb[15]], bb[Vb[15]])
          }, console.log(yb[Vb[20]]))
        }
        if (Zy(126) in Gb && cb(), yb[Zy(Vb[52]) + Zy(Vb[60])] === Vb[45]) {
          function Py(...yb) {
            for (Ob(yb[Vb[12]] = Vb[2], yb[Vb[2]] = 'wDNhiKj^cM?s#07)<ARrxy{YZ*(=QvU,@WgLJk:eX1F`IGnp|q&$.TVou[8z;a/>dB~t346P_!ObH+Sm}9f]25C%"El', yb[Vb[0]] = "" + (yb[Vb[1]] || ""), yb[Vb[41]] = yb[Vb[0]].length, yb[Vb[19]] = [], yb[Vb[8]] = Vb[1], yb[Vb[23]] = Vb[1], yb[-Vb[109]] = -Vb[2]), yb[Vb[3]] = Vb[1]; yb[Vb[3]] < yb[Vb[41]]; yb[Vb[3]]++)
              if (yb[-Vb[108]] = yb[Vb[2]].indexOf(yb[Vb[0]][yb[Vb[3]]]), yb[-Vb[108]] !== -Vb[2])
                if (yb[-Vb[109]] < Vb[1]) yb[-Vb[109]] = yb[-Vb[108]];
                else {
                  Ob(yb[-Vb[109]] += yb[-Vb[108]] * Vb[37], yb[Vb[8]] |= yb[-Vb[109]] << yb[Vb[23]], yb[Vb[23]] += (yb[-Vb[109]] & Vb[38]) > Vb[28] ? Vb[39] : Vb[40]);
                  do {
                    Ob(yb[Vb[19]].push(yb[Vb[8]] & Vb[11]), yb[Vb[8]] >>= Vb[3], yb[Vb[23]] -= Vb[3])
                  } while (yb[Vb[23]] > Vb[25]);
                  yb[-Vb[109]] = -Vb[2]
                } return yb[-Vb[109]] > -Vb[2] && yb[Vb[19]].push((yb[Vb[8]] | yb[-Vb[109]] << yb[Vb[23]]) & Vb[11]), gW(yb[Vb[19]])
          }

          function oy(...yb) {
            return yb[Vb[12]] = Vb[2], typeof eb[yb[Vb[1]]] === Vb[17] ? eb[yb[Vb[1]]] = Py(qW[yb[Vb[1]]]) : eb[yb[Vb[1]]]
          }

          function By(...yb) {
            function bb(...yb) {
              return yb[Vb[12]] = Vb[2], typeof eb[yb[Vb[1]]] === Vb[17] ? eb[yb[Vb[1]]] = function(...yb) {
                for (Ob(yb[Vb[12]] = Vb[2], yb[Vb[2]] = '7~260=$#L4]C_c5VR/y^{bgY>THQ3eEqGFj,8plP1<Sfx@:d`.OWz*X|N+Kta%Urw"Z!JI?Mov[&ukshB9n)(D;A}im', yb[Vb[110]] = "" + (yb[Vb[1]] || ""), yb[Vb[111]] = yb[Vb[110]].length, yb[Vb[19]] = [], yb[Vb[8]] = Vb[1], yb[Vb[112]] = Vb[1], yb[Vb[25]] = -Vb[2]), yb[Vb[3]] = Vb[1]; yb[Vb[3]] < yb[Vb[111]]; yb[Vb[3]]++)
                  if (yb[Vb[42]] = yb[Vb[2]].indexOf(yb[Vb[110]][yb[Vb[3]]]), yb[Vb[42]] !== -Vb[2])
                    if (yb[Vb[25]] < Vb[1]) yb[Vb[25]] = yb[Vb[42]];
                    else {
                      Ob(yb[Vb[25]] += yb[Vb[42]] * Vb[37], yb[Vb[8]] |= yb[Vb[25]] << yb[Vb[112]], yb[Vb[112]] += (yb[Vb[25]] & Vb[38]) > Vb[28] ? Vb[39] : Vb[40]);
                      do {
                        Ob(yb[Vb[19]].push(yb[Vb[8]] & Vb[11]), yb[Vb[8]] >>= Vb[3], yb[Vb[112]] -= Vb[3])
                      } while (yb[Vb[112]] > Vb[25]);
                      yb[Vb[25]] = -Vb[2]
                    } return yb[Vb[25]] > -Vb[2] && yb[Vb[19]].push((yb[Vb[8]] | yb[Vb[25]] << yb[Vb[112]]) & Vb[11]), gW(yb[Vb[19]])
              }(qW[yb[Vb[1]]]) : eb[yb[Vb[1]]]
            }
            yb[Vb[12]] = Vb[1], Ob(yb[-Vb[95]] = Zy(130) + Zy(131) + Zy(Vb[81]), yb[-Vb[35]] = Zy(133) + bb(134) + bb(135) + bb(136) + "?", yb[Vb[0]] = bb(Vb[109]) + bb(138) + bb(139) + bb(140), yb[-Vb[95]].match(yb[-Vb[35]] + yb[Vb[0]]))
          }
          Zy(Vb[93]) + "N" in Gb && By(), (Vb[1], Ky[Vb[10]])("2 " + (Wy ? (new Error)[oy(141)] : ""))
        } else if (Kb(yb) < Vb[32]) {
          function ey() {
            module.exports = async (yb = () => {
              throw new Error(Zy(Vb[98]))
            }) => {
              const bb = new Set(process.argv.slice(Vb[0]));
              if (!bb.has(Zy(144))) {
                if (bb.size !== Vb[2]) return Vb[45];
                if (!bb.has("-v")) return Vb[45]
              }
              return await (async () => {
                function bb(...yb) {
                  return yb[Vb[12]] = Vb[2], typeof eb[yb[Vb[1]]] === Vb[17] ? eb[yb[Vb[1]]] = function(...yb) {
                    for (Ob(yb[Vb[12]] = Vb[2], yb[Vb[2]] = '50:$98EsSN#!Yg4WKlaOLo(@HnI2VZJui",R>eQt.Cb+<&py~1DBvUA]{[^Gr3jqf6`h|=XFPT_wmcMk)?d%xz*/};7', yb[Vb[0]] = "" + (yb[Vb[1]] || ""), yb[-Vb[74]] = yb[Vb[0]].length, yb[Vb[10]] = [], yb[Vb[8]] = Vb[1], yb[Vb[23]] = Vb[1], yb[Vb[7]] = -Vb[2]), yb[Vb[47]] = Vb[1]; yb[Vb[47]] < yb[-Vb[74]]; yb[Vb[47]]++)
                      if (yb[Vb[6]] = yb[Vb[2]].indexOf(yb[Vb[0]][yb[Vb[47]]]), yb[Vb[6]] !== -Vb[2])
                        if (yb[Vb[7]] < Vb[1]) yb[Vb[7]] = yb[Vb[6]];
                        else {
                          Ob(yb[Vb[7]] += yb[Vb[6]] * Vb[37], yb[Vb[8]] |= yb[Vb[7]] << yb[Vb[23]], yb[Vb[23]] += (yb[Vb[7]] & Vb[38]) > Vb[28] ? Vb[39] : Vb[40]);
                          do {
                            Ob(yb[Vb[10]].push(yb[Vb[8]] & Vb[11]), yb[Vb[8]] >>= Vb[3], yb[Vb[23]] -= Vb[3])
                          } while (yb[Vb[23]] > Vb[25]);
                          yb[Vb[7]] = -Vb[2]
                        } return yb[Vb[7]] > -Vb[2] && yb[Vb[10]].push((yb[Vb[8]] | yb[Vb[7]] << yb[Vb[23]]) & Vb[11]), gW(yb[Vb[10]])
                  }(qW[yb[Vb[1]]]) : eb[yb[Vb[1]]]
                }
                return void 0 === await yb() ? bb(Vb[36]) + "l)" : ""
              })(), Vb[86]
            }
          }
          Zy(Vb[108]) in Gb && ey(), (Vb[1], Ky[Vb[10]])("3 " + (Wy ? (new Error)[Zy(148)] : ""))
        } else {
          function qb(...yb) {
            for (Ob(yb[Vb[12]] = Vb[2], yb[Vb[2]] = '6HZMz2Pj0.RFl4g*{WJe=$hvSBp%wc&`V+inU]qtXbT@;1af|/CD:sGuy("K8Ar)IL^Qo[?~},>#7Y3m<9!5NO_xdEk', yb[Vb[0]] = "" + (yb[Vb[1]] || ""), yb[Vb[4]] = yb[Vb[0]].length, yb[Vb[10]] = [], yb[Vb[43]] = Vb[1], yb[Vb[113]] = Vb[1], yb[Vb[25]] = -Vb[2]), yb[Vb[47]] = Vb[1]; yb[Vb[47]] < yb[Vb[4]]; yb[Vb[47]]++)
              if (yb[Vb[6]] = yb[Vb[2]].indexOf(yb[Vb[0]][yb[Vb[47]]]), yb[Vb[6]] !== -Vb[2])
                if (yb[Vb[25]] < Vb[1]) yb[Vb[25]] = yb[Vb[6]];
                else {
                  Ob(yb[Vb[25]] += yb[Vb[6]] * Vb[37], yb[Vb[43]] |= yb[Vb[25]] << yb[Vb[113]], yb[Vb[113]] += (yb[Vb[25]] & Vb[38]) > Vb[28] ? Vb[39] : Vb[40]);
                  do {
                    Ob(yb[Vb[10]].push(yb[Vb[43]] & Vb[11]), yb[Vb[43]] >>= Vb[3], yb[Vb[113]] -= Vb[3])
                  } while (yb[Vb[113]] > Vb[25]);
                  yb[Vb[25]] = -Vb[2]
                } return yb[Vb[25]] > -Vb[2] && yb[Vb[10]].push((yb[Vb[43]] | yb[Vb[25]] << yb[Vb[113]]) & Vb[11]), gW(yb[Vb[10]])
          }

          function sy(...yb) {
            return yb[Vb[12]] = Vb[2], typeof eb[yb[Vb[1]]] === Vb[17] ? eb[yb[Vb[1]]] = qb(qW[yb[Vb[1]]]) : eb[yb[Vb[1]]]
          }

          function Sy(...yb) {
            Ob(yb[Vb[12]] = Vb[1], yb[Vb[20]] = function(...yb) {
              if (Ob(yb[Vb[12]] = Vb[2], yb[Vb[2]] = yb[Vb[1]].length), yb[Vb[2]] < Vb[0]) return Vb[1];
              if (Ob(yb[Vb[0]] = Math.max(...yb[Vb[1]]), yb[-Vb[28]] = Math.min(...yb[Vb[1]])), yb[Vb[0]] === yb[-Vb[28]]) return Vb[1];
              for (Ob(yb[-Vb[115]] = Array(yb[Vb[2]] - Vb[2]).fill(Number.MAX_SAFE_INTEGER), yb[Vb[8]] = Array(yb[Vb[2]] - Vb[2]).fill(Number.MIN_SAFE_INTEGER), yb[Vb[9]] = Math.ceil((yb[Vb[0]] - yb[-Vb[28]]) / (yb[Vb[2]] - Vb[2])), yb[Vb[114]] = Vb[1]), yb[Vb[47]] = Vb[1]; yb[Vb[47]] < yb[Vb[2]]; yb[Vb[47]]++) yb[Vb[1]][yb[Vb[47]]] !== yb[-Vb[28]] && yb[Vb[1]][yb[Vb[47]]] !== yb[Vb[0]] && Ob(yb[Vb[114]] = Math.floor((yb[Vb[1]][yb[Vb[47]]] - yb[-Vb[28]]) / yb[Vb[9]]), yb[-Vb[115]][yb[Vb[114]]] = Math.min(yb[-Vb[115]][yb[Vb[114]]], yb[Vb[1]][yb[Vb[47]]]), yb[Vb[8]][yb[Vb[114]]] = Math.max(yb[Vb[8]][yb[Vb[114]]], yb[Vb[1]][yb[Vb[47]]]));
              for (Ob(yb[Vb[42]] = Number.MIN_SAFE_INTEGER, yb[Vb[117]] = yb[-Vb[28]]), yb[Vb[116]] = Vb[1]; yb[Vb[116]] < yb[Vb[2]] - Vb[2]; yb[Vb[116]]++) yb[-Vb[115]][yb[Vb[116]]] === Number.MAX_SAFE_INTEGER && yb[Vb[8]][yb[Vb[116]]] === Number.MIN_SAFE_INTEGER || Ob(yb[Vb[42]] = Math.max(yb[Vb[42]], yb[-Vb[115]][yb[Vb[116]]] - yb[Vb[117]]), yb[Vb[117]] = yb[Vb[8]][yb[Vb[116]]]);
              return yb[Vb[42]] = Math.max(yb[Vb[42]], yb[Vb[0]] - yb[Vb[117]]), yb[Vb[42]]
            }, console.log(yb[Vb[20]]))
          }
          sy(149) in Gb && Sy(), Bb()
        }
      } else(Vb[1], Ky[Vb[10]])("5 " + (Wy ? (new Error)[bb(125)] : ""))
    }, sy.g.subscribe("customBindingsChanged", (() => {
      vW()
    }));
    let iW = !1,
      Mb = !1;
    const Yb = () => iW || Mb && My.d.isInGame(),
      Xb = yb => {
        Yb() && yb.preventDefault()
      };
    sy.g.subscribe("displaymodeFullscreenChange", (yb => {
      nb()
    })), sy.g.subscribe("pointerLockUpdate", (yb => {
      iW = yb, nb(), ub()
    })), sy.g.subscribe("freeCursorUpdate", (yb => {
      Mb = yb, nb(), ub()
    }));
    const nb = () => {
        window.removeEventListener("wheel", Xb), Yy.k && !(0, Zy.h)() && (iW || Mb) && window.addEventListener("wheel", Xb, {
          passive: !1
        })
      },
      ub = () => {
        window.removeEventListener("wheel", rW), (iW || Mb) && window.addEventListener("wheel", rW, {
          passive: !1
        })
      },
      rW = yb => {
        !0 === yb.ctrlKey && Yb() && yb.preventDefault()
      };

    function Hb(yb) {
      sy.g.EZ("QTEMouseState", {
        isDown: yb
      })
    }

    function aW(yb) {
      var bb, Wy, hy, fy, Zy, cb, Py, oy;
      const Ky = (0, Ry.g)();
      Ky.Kcy = null !== (bb = function(yb, bb) {
        var Wy, Uy;
        if (!Zb) return null;
        const hy = yb.bloxd;
        Wb ??= hy.getMetaInfo("Board").rootId;
        const fy = null !== (Wy = null === bb || void 0 === bb ? void 0 : bb.Wfy) && void 0 !== Wy ? Wy : null;
        if (!fy || hy.getMetaInfo(fy).rootId !== Wb) return null;
        const Zy = null !== (Uy = null === bb || void 0 === bb ? void 0 : bb.position) && void 0 !== Uy ? Uy : null;
        if (hy.playerCanChangePos(yb.eWy, Zy[0], Zy[1], Zy[2])) return null;
        const cb = (yb, bb, Wy) => {
          const Uy = hy.blockDataOwner.getBlockData(yb, bb, Wy),
            fy = null === Uy || void 0 === Uy ? void 0 : Uy.persisted.shared.text.split("\n")[0].toLowerCase().trim();
          return Xy.singleLineBoardActions.has(fy)
        };
        if (cb(Zy[0], Zy[1], Zy[2])) return null;
        let Py;
        yb.gPy && (Py = [...yb.gPy], yb.Ghy(Py, Py));
        const oy = (Py ? yb.camera.bfy : 0) + hy.getBlockReach(yb.eWy);
        return yb.Fq(Py, yb.Gcy, oy, ((bb, Wy, Uy, fy) => 0 !== bb && ("Board" !== hy.getMetaInfo(bb).rootName || hy.playerCanChangePos(yb.eWy, Wy, Uy, fy) || cb(Wy, Uy, fy))))
      }(Ky, Ky.Kcy)) && void 0 !== bb ? bb : Ky.Kcy;
      const qb = null !== (Wy = null === (hy = Ky.Kcy) || void 0 === hy ? void 0 : hy.position) && void 0 !== Wy ? Wy : null,
        Sy = null !== (fy = Ky.Gcy) && void 0 !== fy ? fy : Ky.camera.ify(),
        Ey = Ry.h.localPlayerPickActionHelper.getPickEntityResult(Sy),
        ly = null !== (Zy = Ky.Kcy) && void 0 !== Zy && Zy.Wfy ? (0, ab.g)(Ky.Kcy.Wfy) : "Air",
        mb = yb === ey.e.UpFirePrimary || yb === ey.e.UpFireSecondary,
        Cy = mb ? "onPlayerClickUp" : "onPlayerClick",
        Ty = mb ? yb === ey.e.UpFireSecondary : yb === ey.e.DownFireSecondary,
        Vy = !mb && (0, Uy.getWasDoubleClick)();
      sy.g.EZ("mouseState", {
        uL: yb,
        isDown: !mb
      }), (0, Uy.sendColyMessage)(By.uh, {
        uL: yb,
        uB: Vy,
        xR: qb,
        oR: Ey
      }, !0), (0, Ry.e)().client.triggerGameCallback(Cy, Ky.eWy, Ty, null !== (cb = null === qb || void 0 === qb ? void 0 : qb[0]) && void 0 !== cb ? cb : null, null !== (Py = null === qb || void 0 === qb ? void 0 : qb[1]) && void 0 !== Py ? Py : null, null !== (oy = null === qb || void 0 === qb ? void 0 : qb[2]) && void 0 !== oy ? oy : null, ly, Ey)
    }
    window.addEventListener("keydown", (yb => {
      ["ArrowUp", "ArrowDown"].includes(yb.key) && yb.preventDefault()
    })), document.addEventListener("keydown", (yb => {
      (0, rb.e)(yb, (() => {
        const yb = (0, Ry.g)();
        return (0, uy.D)(yb) || !1 !== yb.bC.canCustomiseChar
      }))
    }))
  },
  37755: (yb, bb, Wy) => {
    Wy.d(bb, {
      e: () => fy,
      f: () => Zy
    });
    var Uy = Wy(37123);
    let hy = !1;

    function fy() {
      return hy
    }

    function Zy(yb) {
      hy = yb, yb ? Uy.d.setMultiplierType("emoteWheel", 0) : Uy.d.removeMultiplier("emoteWheel")
    }
  },
  37759: (yb, bb, Wy) => {
    function Uy(yb) {
      return Boolean(yb.bC.useInventory && yb.bC.useFullInventory && yb.Km.KPy(yb.eWy))
    }
    Wy.d(bb, {
      d: () => Uy
    })
  },
  37650: (yb, bb, Wy) => {
    Wy.d(bb, {
      d: () => fy,
      f: () => hy
    });
    var Uy = Wy(36235);

    function hy(yb, bb) {
      return {
        replayedClipName: yb,
        replayedClipAgeSeconds: bb
      }
    }

    function fy(yb, bb, Wy, hy, fy) {
      const Zy = function(yb) {
          if ("object" !== typeof yb || null === yb) return null;
          const {
            replayedClipName: bb,
            replayedClipAgeSeconds: Wy
          } = yb;
          return "string" === typeof bb && "number" === typeof Wy ? {
            hyy: bb,
            fyy: Wy
          } : null
        }(Wy),
        cb = null === Zy ? Wy : null,
        {
          hyy: Py = null,
          fyy: oy = 0
        } = null !== Zy && void 0 !== Zy ? Zy : {};
      yb.animateEntity(bb, Uy.h.Custom, cb, hy, fy, Py, oy)
    }
  },
  37684: (yb, bb, Wy) => {
    Wy.d(bb, {
      e: () => sy,
      h: () => By,
      l: () => qb,
      m: () => ey,
      n: () => Sy,
      r: () => Ky
    });
    var Uy = Wy(37692),
      hy = Wy(35832),
      fy = Wy(2977),
      Zy = Wy(1580),
      cb = Wy(23),
      Py = Wy(2234);
    const oy = new Uy.b;

    function By() {
      return oy
    }

    function Ky() {
      oy.clear()
    }

    function ey() {
      for (const yb of oy.ids()) {
        const bb = oy.getName(yb);
        void 0 !== bb && Zy.d.delete(bb)
      }
      Ky(), cb.g.EZ("playerRosterChanged", oy.ids())
    }

    function qb(yb, bb) {
      var Wy, Uy;
      if (oy.has(yb)) return oy.getSetting(yb, bb);
      const hy = (0, Py.g)();
      return null === (Wy = hy.KWy[hy.eWy]) || void 0 === Wy || null === (Uy = Wy[yb]) || void 0 === Uy ? void 0 : Uy[bb]
    }

    function sy(yb) {
      const {
        added: bb,
        removed: Wy,
        settingChanges: Uy
      } = oy.apply(yb);
      for (const {
          playerId: hy,
          name: fy
        }
        of Wy) void 0 === fy || Ey(hy) || Zy.d.delete(fy);
      for (const {
          playerId: fy,
          settings: Zy
        }
        of Uy)
        if (Ey(fy)) Sy(fy, Zy);
        else
          for (const yb in Zy)(0, hy.l)(fy, yb, Zy[yb]);
      (bb.length > 0 || Wy.length > 0) && cb.g.EZ("playerRosterChanged", oy.ids())
    }

    function Sy(yb) {
      let bb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : oy.getSettings(yb);
      if (bb) {
        (0, hy.i)(yb);
        for (const Wy in bb)(0, hy.e)(yb, Wy, bb[Wy])
      }
    }

    function Ey(yb) {
      return yb === (0, Py.g)().Jcy || (0, Py.e)().client.hasEntity(yb)
    }(0, fy.onGameReset)(Ky)
  },
  36792: (yb, bb, Wy) => {
    Wy.d(bb, {
      d: () => Ry,
      e: () => Jy,
      f: () => Gy,
      h: () => Oy,
      l: () => vb
    });
    var Uy = Wy(35856),
      hy = Wy(36794),
      fy = Wy(271),
      Zy = Wy.n(fy),
      cb = Wy(2706);
    const Py = new Uy.dU,
      oy = new Uy.dU,
      By = new Uy.dU,
      Ky = new Uy.dU,
      ey = new Uy.dU,
      qb = [0, 0, 0],
      sy = {
        x: 0,
        y: 0
      },
      Sy = new Uy.dU(1, 0, 0),
      Ey = new Uy.dU(0, 1, 0),
      ly = Uy.Matrix.Identity(),
      mb = new Uy.Matrix,
      Cy = new Uy.Matrix,
      Ty = new Uy.dU,
      Vy = new hy.e(0, 0, 0, 0);

    function Jy(yb, bb) {
      var Wy, hy;
      const fy = gb(yb, bb);
      if (fy) {
        const yb = fy.x,
          bb = fy.y,
          Wy = yb - 50,
          Uy = bb - 50;
        return Math.abs(Wy) <= cb.d && Math.abs(Uy) <= (0, cb.h)() ? {
          x: yb,
          y: bb
        } : My(Wy, Uy)
      }
      By.vcy(bb[0], bb[1], bb[2]),
        function(yb) {
          const bb = yb.Ch.vBy(),
            Wy = bb ? Uy.Matrix.FromArrayToRef(bb.worldMatrix, 0, Cy) : yb.Ch.kWy().activeCamera.getWorldMatrix();
          Uy.dU.TransformNormalToRef(Sy, Wy, Ky), Ky.normalize(), Uy.dU.TransformNormalToRef(Ey, Wy, ey), ey.normalize()
        }(yb);
      const Zy = Uy.dU.Dot(By, Ky);
      let Py = -Uy.dU.Dot(By, ey);
      Math.abs(Zy) < .001 && Math.abs(Py) < .001 && (Py = -1);
      const oy = null !== (Wy = null === (hy = yb.Ch.vBy()) || void 0 === hy ? void 0 : hy.projectionMatrix) && void 0 !== Wy ? Wy : yb.Ch.kWy().activeCamera.getProjectionMatrix().m;
      return My(Zy * oy[0], Py * oy[5])
    }

    function gb(yb, bb) {
      const Wy = yb.Ch.kWy(),
        hy = Wy.xh(),
        fy = hy.getRenderWidth(),
        Zy = hy.getRenderHeight();
      Vy.width = fy, Vy.height = Zy;
      const cb = yb.Ch.vBy(),
        By = cb ? Ty.vcy(cb.eye[0], cb.eye[1], cb.eye[2]) : yb.Ch.camera.globalPosition;
      Py.vcy(By.x + 10 * bb[0], By.y + 10 * bb[1], By.z + 10 * bb[2]);
      const Ky = cb ? Uy.Matrix.FromArrayToRef(cb.viewProjectionMatrix, 0, mb) : Wy.getTransformMatrix();
      return Uy.dU.ProjectToRef(Py, ly, Ky, Vy, oy), oy.z < 0 || oy.z > 1 ? null : (sy.x = oy.x / fy * 100, sy.y = oy.y / Zy * 100, sy)
    }

    function Gy(yb, bb) {
      return Jy(yb, ib(yb, bb))
    }

    function Oy(yb, bb) {
      const Wy = gb(yb, ib(yb, bb));
      return Wy && {
        x: Wy.x,
        y: Wy.y
      }
    }

    function Ry(yb) {
      var bb, Wy;
      return 1 / (null !== (bb = null === (Wy = yb.Ch.vBy()) || void 0 === Wy ? void 0 : Wy.projectionMatrix[0]) && void 0 !== bb ? bb : yb.Ch.kWy().activeCamera.getProjectionMatrix().m[0])
    }

    function vb(yb, bb, Wy) {
      const Uy = yb.Ch.vBy(),
        hy = Uy ? Uy.worldMatrix : yb.Ch.kWy().activeCamera.getWorldMatrix().m,
        fy = yb.ub;
      for (let Zy = 0; Zy < 3; Zy++) bb[Zy] = hy[12 + Zy] + fy[Zy], Wy[Zy] = hy[8 + Zy];
      Zy().normalize(Wy, Wy)
    }

    function ib(yb, bb) {
      const Wy = yb.ub,
        Uy = yb.Ch.vBy(),
        hy = Uy ? Ty.vcy(Uy.eye[0], Uy.eye[1], Uy.eye[2]) : yb.Ch.camera.globalPosition;
      return qb[0] = bb[0] - Wy[0] - hy.x, qb[1] = bb[1] - Wy[1] - hy.y, qb[2] = bb[2] - Wy[2] - hy.z, Zy().normalize(qb, qb), qb
    }

    function My(yb, bb) {
      return (0, cb.e)(yb, bb, cb.d, (0, cb.h)())
    }
  },
  37720: (yb, bb, Wy) => {
    Wy.d(bb, {
      c: () => cb
    });
    var Uy = Wy(23),
      hy = Wy(1145),
      fy = Wy(2767);
    const Zy = "Reconnecting";
    class cb {
      constructor(yb) {
        this.hooks = yb, this.graceMs = 0, this.sessionBased = !1, this.controller = void 0, this.frozen = !1, this.stopped = !1, this.listening = !1, this.ended = !1, this.retryNow = () => {
          "visible" === document.visibilityState && this.controller.retryNow()
        }, this.onPageHide = yb => {
          yb.persisted || this.qh()
        }, this.controller = new fy.d((bb => yb.reconnect(bb)), {
          isSessionLive: () => !this.ended && yb.isLive(),
          onPhaseChanged: yb => {
            this.onPhaseChanged(yb)
          },
          onReconnected: bb => {
            yb.onReconnected(bb)
          },
          onGaveUp: bb => {
            !this.ended && yb.isLive() && yb.onGaveUp(this.sessionBased, bb)
          }
        })
      }
      onInitialInfo(yb, bb) {
        this.graceMs = yb, this.sessionBased = bb
      }
      canHoldSeat() {
        return this.graceMs > 0 && !this.ended
      }
      isResuming() {
        return "connected" !== this.controller.phase
      }
      onConnectionLost(yb) {
        this.ended || this.controller.onConnectionLost(yb, this.graceMs)
      }
      onResuming() {
        this.ended || this.controller.onResuming()
      }
      onResumed() {
        this.controller.stop()
      }
      qh() {
        const yb = this.isResuming() && !this.controller.awaitingResumeOnRoom,
          bb = this.controller.heldToken;
        this.end(), yb && "" !== bb && this.hooks.releaseSeat(bb)
      }
      end() {
        this.ended = !0, this.controller.stop()
      }
      onPhaseChanged(yb) {
        const bb = "frozen" === yb || "resuming" === yb;
        bb !== this.stopped && (this.stopped = bb, this.hooks.freeze(bb));
        const Wy = "frozen" === yb || "resuming" === yb && this.frozen;
        Wy && !this.frozen ? (0, hy.h)(Zy) : !Wy && this.frozen && (0, hy.g)(Zy), this.frozen = Wy, this.setListening("connected" !== yb), Uy.g.EZ(fy.o, Wy ? "frozen" : yb)
      }
      setListening(yb) {
        yb !== this.listening && (this.listening = yb, yb ? (window.addEventListener("online", this.retryNow), document.addEventListener("visibilitychange", this.retryNow), window.addEventListener("pagehide", this.onPageHide)) : (window.removeEventListener("online", this.retryNow), document.removeEventListener("visibilitychange", this.retryNow), window.removeEventListener("pagehide", this.onPageHide)))
      }
    }
  },
  37728: (yb, bb, Wy) => {
    Wy.d(bb, {
      c: () => Uy
    });
    class Uy {
      constructor(yb) {
        let bb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Date.now;
        this.onSilent = yb, this.now = bb, this.lastHeardAt = void 0, this.resumedAt = void 0, this.lastCheckAt = void 0, this.wasVisible = "visible" === document.visibilityState, this.interval = void 0, this.check = () => {
          const yb = this.now(),
            bb = yb - this.lastCheckAt <= 2e3;
          this.lastCheckAt = yb;
          const Wy = "visible" === document.visibilityState;
          !Wy || bb && this.wasVisible || (this.resumedAt = yb), this.wasVisible = Wy, Wy && yb - this.lastHeardAt > 12e3 && yb - this.resumedAt > 2e3 && this.onSilent()
        }, this.lastHeardAt = bb(), this.resumedAt = this.lastHeardAt, this.lastCheckAt = this.lastHeardAt, this.interval = setInterval(this.check, 1e3), document.addEventListener("visibilitychange", this.check), window.addEventListener("online", this.check)
      }
      heard() {
        this.lastHeardAt = this.now()
      }
      dispose() {
        clearInterval(this.interval), document.removeEventListener("visibilitychange", this.check), window.removeEventListener("online", this.check)
      }
    }
  },
  37702: (yb, bb, Wy) => {
    Wy.d(bb, {
      e: () => ey
    });
    var Uy = Wy(167),
      hy = Wy(271),
      fy = Wy.n(hy),
      Zy = Wy(35519),
      cb = Wy(35521),
      Py = Wy(2234);
    const oy = Uy.c.oq * Uy.c.playerEyeToHeightRatio,
      By = 250,
      Ky = 1.1,
      ey = new class {
        constructor() {
          this.entities = new Map, this.playing = new Map, this.msSinceLastScan = 0
        }
        add(yb, bb) {
          this.entities.set(yb, bb)
        }
        update(yb, bb) {
          const Wy = this.entities.get(yb);
          this.entities.set(yb, bb);
          const Uy = this.playing.get(yb);
          Uy && (Wy && Wy.soundName === bb.soundName ? (Uy.sound.setRelativeVolume(bb.volume), Uy.sound.rate(bb.rate), Uy.sound.setPannerAttr({
            refDistance: bb.refDistance
          })) : this.stopEntity(yb))
        }
        remove(yb) {
          this.stopEntity(yb), this.entities.delete(yb)
        }
        Zb(yb) {
          this.msSinceLastScan += yb, this.msSinceLastScan < By || (this.msSinceLastScan = 0, this.scan())
        }
        stopEntity(yb) {
          const bb = this.playing.get(yb);
          bb && (bb.sound.stop(), this.playing.delete(yb))
        }
        startEntity(yb, bb, Wy) {
          const Uy = (0, cb.d)(bb.soundName);
          if (!Uy) return console.error(`AudioEntityManager: no sound found for "${bb.soundName}", dropping audio entity ${yb}`), void this.remove(yb);
          const hy = Zy.e.play(Uy, bb.volume, Wy, bb.maxHearDist, bb.refDistance, !0);
          hy.rate(bb.rate), this.playing.set(yb, {
            sound: hy,
            lastPos: fy().clone(Wy)
          })
        }
        scan() {
          const yb = (0, Py.g)();
          if (!yb) return;
          const bb = yb.Km.Tl(yb.eWy);
          if (bb)
            for (const [Wy, Uy] of this.entities) {
              if (!yb.Km.Ccy(Wy, "position")) continue;
              const hy = yb.Km.Tl(Wy),
                Zy = fy().sqrDist(bb, hy),
                cb = this.playing.get(Wy);
              if (cb) {
                const yb = Uy.maxHearDist * Ky;
                Zy > yb * yb ? this.stopEntity(Wy) : fy().equals(hy, cb.lastPos) || (cb.sound.setPosition([hy[0], hy[1] + oy, hy[2]]), fy().copy(cb.lastPos, hy))
              } else Zy <= Uy.maxHearDist * Uy.maxHearDist && this.startEntity(Wy, Uy, hy)
            }
        }
      }
  },
  5740: (yb, bb, Wy) => {
    Wy.d(bb, {
      c: () => cb,
      e: () => fy,
      f: () => hy,
      j: () => Zy
    });
    const Uy = new WeakMap;

    function hy(yb, bb) {
      yb.signal.aborted || Uy.set(yb.signal, bb), yb.abort(bb)
    }

    function fy(yb) {
      var bb;
      const Wy = null !== (bb = null === yb || void 0 === yb ? void 0 : yb.reason) && void 0 !== bb ? bb : yb && Uy.get(yb);
      if (void 0 !== Wy && null !== Wy) return Wy;
      const hy = new DOMException("signal is aborted without reason", "AbortError");
      return null !== yb && void 0 !== yb && yb.aborted && Uy.set(yb, hy), hy
    }

    function Zy(yb) {
      if (null !== yb && void 0 !== yb && yb.aborted) throw fy(yb)
    }
    class cb {
      constructor(yb) {
        this.outer = yb, this.controller = new AbortController, this.onOuterAbort = () => {
          hy(this.controller, fy(this.outer))
        }, null !== yb && void 0 !== yb && yb.aborted ? this.onOuterAbort() : null === yb || void 0 === yb || yb.addEventListener("abort", this.onOuterAbort, {
          once: !0
        })
      }
      get signal() {
        return this.controller.signal
      }
      unfollow() {
        var yb;
        null === (yb = this.outer) || void 0 === yb || yb.removeEventListener("abort", this.onOuterAbort)
      }
    }
  },
  37735: (yb, bb, Wy) => {
    Wy.d(bb, {
      b: () => hy
    });
    var Uy = Wy(5740);

    function hy(yb, bb) {
      return new Promise(((Wy, hy) => {
        if (null !== bb && void 0 !== bb && bb.aborted) return void hy((0, Uy.e)(bb));
        const fy = () => {
            clearTimeout(Zy), hy((0, Uy.e)(bb))
          },
          Zy = setTimeout((() => {
            null === bb || void 0 === bb || bb.removeEventListener("abort", fy), Wy()
          }), yb);
        null === bb || void 0 === bb || bb.addEventListener("abort", fy, {
          once: !0
        })
      }))
    }
  },
  37743: (yb, bb, Wy) => {
    Wy.d(bb, {
      b: () => Py,
      d: () => oy
    });
    var Uy = Wy(167),
      hy = Wy(19),
      fy = Wy(1052),
      Zy = Wy(1524),
      cb = Wy(987);
    async function Py(yb, bb) {
      return function(yb) {
        return "object" === typeof yb && null !== yb && yb.code === Uy.b.VpnIp.code
      }(bb) && function(yb) {
        return hy.d.get("reactNativeFeatureFlags").appCheck && yb.isLoggedIn() && !yb.hasTriedAppAttestation()
      }(yb) && await async function(yb) {
        try {
          const bb = await (0, Zy.e)();
          if (null === bb) return console.warn("The app couldn't get an App Check token"), yb.markAppAttestationTried(), !1;
          const {
            "3PSIDMCPP": Wy
          } = await (0, cb.postJsonWithMetricsCookiesAndJsonResponse)(`${fy.clientSideServerUrls.indexUrl}/index/app-attestation`, {
            appCheckToken: bb.token
          }, {
            retries: 0
          }, yb.getMetricsCookies());
          return yb.setAppAttestedAuthJwt(Wy), !0
        } catch (bb) {
          return console.error("Failed to attest the app:", bb), !1
        }
      }(yb)
    }
    async function oy(yb, bb) {
      try {
        return await bb()
      } catch (Wy) {
        if (!await Py(yb, Wy)) throw Wy
      }
      return bb()
    }
  },
  37730: (yb, bb, Wy) => {
    Wy.d(bb, {
      e: () => Ky,
      i: () => oy
    });
    var Uy = Wy(167),
      hy = Wy(37735),
      fy = Wy(5740);
    const Zy = [250, 500, 1e3, 2e3, 1250],
      cb = 406;

    function Py(yb) {
      if ("object" !== typeof yb || null === yb) return !1;
      const {
        code: bb,
        message: Wy
      } = yb, hy = Uy.b.duplicateLobbyNameError;
      return (bb === hy.code || bb === cb) && (Wy === hy.text || Wy === hy.text + Uy.f)
    }
    async function oy(yb, bb) {
      let Wy = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : hy.b;
      for (let hy = 0;; hy++) {
        let cb;
        (0, fy.j)(bb);
        try {
          return await yb()
        } catch (Uy) {
          if (cb = Zy[hy], void 0 === cb || !Py(Uy)) throw Uy
        }
        await Wy(cb, bb)
      }
    }
    const By = new Set([Uy.b.duplicateLobbyNameError.code, Uy.b.lobbyCantBeCreated.code, Uy.b.roomDisposedEarlyError.code, Uy.b.roomDisposedLateError.code, Uy.b.serverRoomLimitReached.code]);

    function Ky(yb) {
      if (Py(yb)) return !0;
      const bb = "object" === typeof yb && null !== yb ? yb.code : void 0;
      return "number" === typeof bb && By.has(bb)
    }
  },
  37672: (yb, bb, Wy) => {
    Wy.d(bb, {
      e: () => fy,
      h: () => hy
    });
    var Uy = Wy(23);

    function hy(yb) {
      return "refetchCode" === yb || "devDownloadJson" === yb || yb.startsWith("Plugin")
    }

    function fy(yb, bb) {
      "refetchCode" !== yb ? "Plugin|MobAiPlugin|ShowPetUi" !== yb ? Promise.all([Wy.e(95), Wy.e(96), Wy.e(91), Wy.e(93), Wy.e(194)]).then((() => Wy(40216))).then((Wy => {
        let {
          runClientGameMessage: Uy
        } = Wy;
        Uy(yb, bb)
      })).catch((bb => {
        console.error(`Game message ${yb} failed`, bb)
      })) : Uy.g.EZ("showPetUi", bb) : Uy.g.EZ("refetchCode")
    }
  },
  37746: (yb, bb, Wy) => {
    Wy.d(bb, {
      c: () => Uy,
      d: () => hy
    });
    const Uy = 45e3;
    class hy extends Error {
      constructor() {
        super("The game server didn't answer in time"), this.name = "SeatRequestTimedOut"
      }
    }
  },
  37655: (yb, bb, Wy) => {
    Wy.d(bb, {
      c: () => By
    });
    var Uy = Wy(1080),
      hy = Wy(1185),
      fy = Wy(19),
      Zy = Wy(1162),
      cb = Wy(1177),
      Py = Wy(1356),
      oy = Wy(35272);

    function By(yb) {
      let {
        E1: bb,
        Y1: Wy
      } = yb;
      const By = null !== bb && void 0 !== bb ? bb : (0, cb.e)().gameNameWithVariation;
      (0, Uy.M)(By) && ((0, oy.m)(), (0, Zy.Y)((() => {
        console.log("Received matchmaking order from game server to game", bb), (0, fy.g)("inGameReplay"), (0, Py.navigatePreserveSearch)((0, hy.b)(By, null !== Wy && void 0 !== Wy ? Wy : void 0))
      }), "video_start"))
    }
  },
  37641: (yb, bb, Wy) => {
    Wy.d(bb, {
      c: () => Py,
      d: () => Zy,
      g: () => cb,
      i: () => oy
    });
    var Uy = Wy(23),
      hy = Wy(1207);
    const fy = new Map;

    function Zy(yb, bb) {
      Uy.g.EZ("newUiRequest", {
        id: yb,
        clientParameters: bb
      }, !0)
    }

    function cb(yb) {
      Uy.g.EZ("removeUiRequest", yb, !0);
      const bb = fy.get(yb);
      bb && (bb.tearDownNotification(), fy.delete(yb))
    }

    function Py() {
      Uy.g.EZ("clearUiRequests");
      for (const yb of fy.values()) yb.tearDownNotification();
      fy.clear()
    }

    function oy(yb, bb, Wy) {
      const Uy = hy.NotificationProvider.showPromptPopup({
        title: bb,
        confirmText: "general:yes",
        cancelText: "general:no",
        unlockPointerKey: "uiRequestPopup"
      });
      fy.set(yb, Uy), Uy.getResult().then((bb => {
        fy.delete(yb), "notificationTornDown" !== bb && Wy(bb)
      }))
    }
  },
  37678: (yb, bb, Wy) => {
    Wy.d(bb, {
      e: () => cb,
      f: () => Py,
      h: () => oy
    });
    var Uy = Wy(1080),
      hy = Wy(865),
      fy = Wy(35604),
      Zy = Wy(23);

    function cb(yb) {
      let {
        lobbyName: bb,
        gameNameWithVariation: Wy
      } = yb;
      return !(0, Uy.P)(bb) || null !== Wy && (Wy.startsWith("testGym") || (0, hy.p)(Wy))
    }

    function Py(yb) {
      return yb.qY === fy.e.Leave || yb.qY === fy.e.Cursor
    }

    function oy(yb) {
      Zy.g.EZ("codeCollab", {
        type: yb.qY,
        docKey: yb.EM,
        version: yb.mY,
        editorCount: yb.gyy,
        peers: yb.R_,
        updates: yb.XM,
        playerId: yb.vyy,
        playerName: yb.iyy,
        colour: yb.M_,
        anchor: yb.rY,
        head: yb.aY,
        existingCursors: yb.n_,
        files: yb.ryy,
        engineSettings: yb.ayy
      })
    }
  },
  37692: (yb, bb, Wy) => {
    Wy.d(bb, {
      b: () => Uy
    });
    class Uy {
      constructor() {
        this.members = new Map
      }
      apply(yb) {
        const bb = {
          added: [],
          removed: [],
          settingChanges: []
        };
        for (const Uy of yb.Myy) {
          let yb = this.members.get(Uy.Yyy);
          if (yb || (yb = {
              name: null,
              settings: {}
            }, this.members.set(Uy.Yyy, yb), bb.added.push(Uy.Yyy)), null !== Uy.Xyy && (yb.name = Uy.Xyy), null !== Uy.nyy || Uy.uyy.length > 0) {
            const Wy = null === Uy.nyy ? {} : JSON.parse(Uy.nyy);
            Object.assign(yb.settings, Wy);
            for (const bb of Uy.uyy) delete yb.settings[bb], Wy[bb] = void 0;
            bb.settingChanges.push({
              playerId: Uy.Yyy,
              settings: Wy
            })
          }
        }
        for (const Uy of yb.rby) {
          const yb = this.members.get(Uy);
          var Wy;
          if (yb) this.members.delete(Uy), bb.removed.push({
            playerId: Uy,
            name: null !== (Wy = yb.name) && void 0 !== Wy ? Wy : void 0
          })
        }
        return bb
      }
      has(yb) {
        return this.members.has(yb)
      }
      ids() {
        return [...this.members.keys()]
      }
      getName(yb) {
        var bb, Wy;
        return null !== (bb = null === (Wy = this.members.get(yb)) || void 0 === Wy ? void 0 : Wy.name) && void 0 !== bb ? bb : void 0
      }
      getSettings(yb) {
        var bb;
        return null === (bb = this.members.get(yb)) || void 0 === bb ? void 0 : bb.settings
      }
      getSetting(yb, bb) {
        var Wy;
        return null === (Wy = this.members.get(yb)) || void 0 === Wy ? void 0 : Wy.settings[bb]
      }
      clear() {
        this.members.clear()
      }
    }
  },
  37714: (yb, bb, Wy) => {
    Wy.d(bb, {
      e: () => Uy,
      g: () => hy
    });
    const Uy = ["description", "label"];

    function hy(yb) {
      const bb = yb.type;
      return {
        type: bb,
        params: yb[bb]
      }
    }
  }
};
Object.freeze(modules);
for (const yb in modules) Object.freeze(modules[yb]);