export const id = 242;
export const ids = [242];
export const modules = {
  39109: (kk, Fk, Ik) => {
    function Xk(kk) {
      return !(!kk.lobbyLeaderboardInfo && !kk.lobbyManage)
    }
    Ik.d(Fk, {
      b: () => Xk
    })
  },
  39087: (kk, Fk, Ik) => {
    Ik.d(Fk, {
      b: () => ik,
      f: () => yk
    });
    var Xk = Ik(34);
    let Tk = !1;

    function ik() {
      return Tk
    }

    function yk(kk) {
      Tk !== kk && (Tk = kk, Xk.g.GL("replayViewer|videoExportChanged"))
    }
  },
  39011: (kk, Fk, Ik) => {
    Ik.d(Fk, {
      d: () => ik
    });
    var Xk = Ik(34),
      Tk = Ik(1894);

    function ik(kk) {
      let {
        taskId: Fk,
        progress: Ik
      } = kk;
      const Xk = Tk.e.get("_tasks");
      null !== Xk && void 0 !== Xk && Xk[Fk] && Tk.e.apply({
        _tasks: {
          ...Xk,
          [Fk]: {
            ...Xk[Fk],
            progress: Ik
          }
        }
      })
    }
    Xk.g.subscribe("clientTaskProgress", (kk => {
      ik(kk)
    }))
  },
  39102: (kk, Fk, Ik) => {
    Ik.d(Fk, {
      e: () => Kk,
      h: () => Qk,
      j: () => Pk
    });
    var Xk = Ik(4799),
      Tk = Ik(2744),
      ik = Ik(1844);
    const yk = new Map(Object.entries(Xk.k).map((kk => {
      let [Fk, Ik] = kk;
      return [Ik, Fk]
    })));

    function lk(kk) {
      return (0, ik.A)(kk).toFixed(1)
    }

    function ak(kk, Fk) {
      return `camera set by ${yk.get(kk[Fk+1])}: heading ${`${lk(kk[Fk+2])} -> ${lk(kk[Fk+4])}`} deg, pitch ${`${lk(kk[Fk+3])} -> ${lk(kk[Fk+5])}`} deg, at ${kk[Fk].toFixed(1)} ms`
    }
    class qk {
      constructor(kk, Fk) {
        this.width = kk, this.St = Fk, this.data = void 0, this.next = 0, this.size = 0, this.data = new Float64Array(kk * Fk)
      }
      push(kk) {
        let Fk = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        const Ik = this.data.subarray(this.next * this.width, (this.next + 1) * this.width);
        for (let Xk = 0; Xk < this.width; Xk++) Ik[Xk] = kk[Fk + Xk];
        return this.next = (this.next + 1) % this.St, this.size = Math.min(this.size + 1, this.St), Ik
      }
      lines() {
        const kk = [],
          Fk = (this.next - this.size + this.St) % this.St;
        for (let Ik = 0; Ik < this.size; Ik++) {
          const Xk = (Fk + Ik) % this.St * this.width;
          kk.push(Array.from(this.data.subarray(Xk, Xk + this.width)).join(","))
        }
        return kk
      }
    }
    const Lk = 0,
      tk = 2,
      Zk = 3,
      jk = 4;

    function ek(kk) {
      return Number.isFinite(kk) ? String(Math.round(10 * kk) / 10) : String(kk)
    }

    function wk(kk) {
      return Number.isFinite(kk) ? kk.toFixed(1) : String(kk)
    }
    class Hk {
      constructor() {
        this.frames = 0, this.looked = 0, this.idle = 0, this.iW = 0, this.pastLimit = 0, this.lockSkips = 0, this.iH = 0, this.lost = 0, this.dropped = 0, this.longFrames = 0, this.dtMin = 1 / 0, this.dtMax = 0, this.dtSum = 0, this.raw = [0, 0], this.turned = [0, 0], this.peakRate = 0, this.events = 0, this.eventMax = 0, this.bigEvents = 0, this.cameraSets = 0, this.cameraSetsLost = 0, this.outliers = 0, this.eventLines = 0, this.suppressed = 0
      }
      moved() {
        return this.events > 0 || 0 !== this.raw[0] || 0 !== this.raw[1] || this.lockSkips > 0 || this.iW > 0 || this.dropped > 0 || this.cameraSets > 0
      }
      hasEvent() {
        return this.iW > 0 || this.pastLimit > 0 || this.bigEvents > 0 || this.dropped > 0 || this.cameraSets > 0
      }
    }
    class Jk {
      constructor() {
        var kk = this;
        this.remote = (0, Tk.p)(), this.tally = new Hk, this.records = new qk(10, this.remote ? 1 : 3600), this.events = new qk(4, this.remote ? 1 : 12e3), this.event = new Float64Array(4), this.takes = null, this.client = "js", this.started = !1, this.record = function(Fk) {
          let Ik = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
          const [Xk, Tk, ik, yk, lk, ak, qk, Hk, Jk, xk] = kk.records.push(Fk, Ik), Pk = kk.tally;
          switch (Pk.frames++, qk) {
            case Lk:
              return void Pk.idle++;
            case jk:
              return void Pk.iH++;
            case Zk:
              return Pk.lockSkips++, void(0 === ik && 0 === yk || kk.outlier(`lock skip dropped raw (${ek(ik)}, ${ek(yk)}) at ${wk(Xk)} ms`))
          }
          Pk.looked++, Number.isFinite(Tk) && (Pk.dtMin = Math.min(Pk.dtMin, Tk), Pk.dtMax = Math.max(Pk.dtMax, Tk), Pk.dtSum += Tk, Tk > 0 && (Pk.peakRate = Math.max(Pk.peakRate, Math.hypot(lk, ak) / Tk))), Pk.raw[0] += ik, Pk.raw[1] += yk, Pk.turned[0] += lk, Pk.turned[1] += ak;
          const Kk = Math.abs(ik) > xk || Math.abs(yk) > xk,
            Qk = `raw (${ek(ik)}, ${ek(yk)}) over ${wk(Tk)} ms, limit ${ek(xk)}, filter v (${Hk.toFixed(3)}, ${Jk.toFixed(3)}) px/ms, at ${wk(Xk)} ms`;
          qk === tk ? (Pk.iW++, kk.outlier(`spike put right: ${Qk} -> turned (${ek(lk)}, ${ek(ak)})`)) : Kk ? (Pk.pastLimit++, kk.outlier(`kept past limit: ${Qk}`)) : Tk > 50 && (Pk.longFrames++, kk.remote || kk.outlier(`long frame: ${Qk}, turned in full`))
        }, this.onMouseMove = kk => {
          const Fk = this.tally,
            {
              movementX: Ik,
              movementY: Xk
            } = kk;
          Fk.events++;
          const Tk = Math.max(Math.abs(Ik), Math.abs(Xk));
          Fk.eventMax = Math.max(Fk.eventMax, Tk);
          const ik = null !== document.pointerLockElement,
            yk = this.event;
          yk[0] = kk.timeStamp, yk[1] = Ik, yk[2] = Xk, yk[3] = ik ? 1 : 0, this.events.push(yk), Tk >= 200 && (Fk.bigEvents++, this.eventOutlier(`big mousemove (${Ik}, ${Xk}) at ${wk(kk.timeStamp)} ms, lock ${ik?"eq":"free"}`))
        }, this.onLockChange = () => {
          const kk = document.pointerLockElement;
          (0, Tk.g)("look", `pointer lock ${kk?`gained (${kk.tagName.toLowerCase()})`:"lost"} at ${wk(performance.now())} ms`)
        }, this.onLockError = () => {
          (0, Tk.g)("look", `pointer lock request failed at ${wk(performance.now())} ms`)
        }, this.onVisibility = () => {
          (0, Tk.g)("look", `page ${document.visibilityState} at ${wk(performance.now())} ms`)
        }, this.flush = () => {
          this.takeRecords();
          const kk = this.tally;
          if (this.tally = new Hk, !kk.moved() || this.remote && !kk.hasEvent()) return;
          const Fk = kk.looked > 0 ? kk.dtSum / kk.looked : NaN,
            Ik = [`${kk.frames} frames (${kk.looked} looked, ${kk.idle} idle${"wasm"===this.client?`, ${kk.iH} carried`:""})`, `dt avg ${wk(Fk)} min ${wk(kk.dtMin)} max ${wk(kk.dtMax)}, ${kk.longFrames} long`, `${kk.events} mousemoves (max ${ek(kk.eventMax)} px, ${kk.bigEvents} big)`, `raw (${ek(kk.raw[0])}, ${ek(kk.raw[1])}) turned (${ek(kk.turned[0])}, ${ek(kk.turned[1])})`, `peak ${kk.peakRate.toFixed(2)} px/ms`, `put right ${kk.iW}, past limit ${kk.pastLimit}, lock skips ${kk.lockSkips}`, "lock " + (document.pointerLockElement ? "eq" : "free")];
          kk.dropped > 0 && Ik.push(`${kk.dropped} doubled spike copies dropped`), kk.cameraSets > 0 && Ik.push(`${kk.cameraSets} camera sets`), kk.cameraSetsLost > 0 && Ik.push(`${kk.cameraSetsLost} camera set records lost`), kk.lost > 0 && Ik.push(`${kk.lost} records lost`), kk.suppressed > 0 && Ik.push(`${kk.suppressed} outlier lines not shown`), (0, Tk.g)("look", `1s: ${Ik.join("; ")}`)
        }, this.dump = () => [`look records (${this.client}): nowMs,dtMs,rawX,rawY,turnedX,turnedY,outcome,vX,vY,limit`, ...this.records.lines(), "mousemove events: timeStamp,movementX,movementY,locked", ...this.events.lines()].join("\n")
      }
      start(kk, Fk) {
        this.client = kk, this.takes = Fk;
        const {
          screen: Ik
        } = window;
        (0, Tk.g)("look", `start: ${kk} client, dpr ${window.devicePixelRatio}, screen ${Ik.width}x${Ik.height}, pointer lock ${document.pointerLockElement?"eq":"free"}`), this.started || (this.started = !0, window.addEventListener("mousemove", this.onMouseMove, {
          capture: !0,
          passive: !0
        }), document.addEventListener("pointerlockchange", this.onLockChange), document.addEventListener("pointerlockerror", this.onLockError), document.addEventListener("visibilitychange", this.onVisibility), setInterval(this.flush, 1e3), this.remote || (0, Tk.f)("look", this.dump))
      }
      outlier(kk) {
        const Fk = this.tally;
        Fk.outliers >= 20 ? Fk.suppressed++ : (Fk.outliers++, (0, Tk.g)("look", kk))
      }
      eventOutlier(kk) {
        const Fk = this.tally;
        Fk.eventLines >= 10 ? Fk.suppressed++ : (Fk.eventLines++, (0, Tk.g)("look", kk))
      }
      takeRecords() {
        if (null === this.takes) return;
        const kk = this.takes.look();
        if (kk.length >= 2) {
          this.tally.lost += kk[0], this.tally.dropped += kk[1];
          for (let Fk = 2; Fk + 10 <= kk.length; Fk += 10) this.record(kk, Fk)
        }
        const Fk = this.takes.cameraSets();
        if (Fk.length >= Xk.e) {
          this.tally.cameraSetsLost += Fk[0];
          for (let kk = Xk.e; kk + Xk.f <= Fk.length; kk += Xk.f) this.tally.cameraSets++, this.outlier(ak(Fk, kk))
        }
      }
      droppedCopy() {
        this.tally.dropped++
      }
      endTake() {
        this.takeRecords(), this.takes = null
      }
    }
    let xk = null;

    function Pk(kk) {
      let Fk = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
      return xk ??= new Jk, xk.start(kk, Fk), xk.record
    }

    function Kk() {
      var kk;
      null === (kk = xk) || void 0 === kk || kk.endTake()
    }

    function Qk() {
      var kk;
      null === (kk = xk) || void 0 === kk || kk.droppedCopy()
    }
  },
  38945: (kk, Fk, Ik) => {
    Ik.d(Fk, {
      b: () => kI,
      f: () => DF,
      j: () => MF
    });
    var Xk = Ik(3631),
      Tk = Ik(149),
      ik = Ik(187),
      yk = Ik(633),
      lk = Ik(41),
      ak = Ik(2700),
      qk = Ik(3702),
      Lk = Ik(3682),
      tk = Ik(1217);
    const Zk = new WeakMap;
    class jk {
      constructor(kk, Fk) {
        let Ik = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {
          vqk: !0
        };
        this.callbacks = Fk, this.options = Ik, this.sIk = void 0, this.sessionId = void 0, this.kE = [], this.Eqk = !1, this.ee = !1, this.Oqk = void 0, this.Dv = 0, this.PTk = 0, this.nqk = (kk, Fk) => {
          if (this.ee) return;
          const Ik = Number(kk);
          this.Eqk ? this.Gqk(Ik, Fk) : this.kE.push({
            id: Ik,
            payload: Fk
          })
        }, this.dispose = () => {
          this.ee || (this.ee = !0, Zk.delete(this), this.kE.length = 0, this.Oqk())
        }, this.sIk = kk, this.sessionId = kk.sessionId, Zk.set(this, []), this.Oqk = this.pqk()
      }
      uqk(kk) {
        this.Oqk(), this.sIk = kk, this.sessionId = kk.sessionId, this.Dv = 0, this.PTk = 0, this.Oqk = this.pqk()
      }
      get Qv() {
        return this.PTk
      }
      pqk() {
        const kk = this.sIk.bJ("*", this.nqk);
        return this.options.vqk && this.sIk.NJ(this.dispose), kk
      }
      Gqk(kk, Fk) {
        try {
          (0, qk.ac)(kk) && (Fk = (0, qk.b)(kk, Lk.je.from(Fk)));
          const Ik = Zk.get(this)[kk];
          if ("function" !== typeof Ik) {
            if (this.callbacks.bqk) return void this.callbacks.bqk(kk, Fk);
            throw new Error(`No onMessage handler registered for message id ${kk}`)
          }
          Ik(Fk)
        } catch (Ik) {
          this.callbacks.Rqk(`Error in onMessage ${kk} with payload ${JSON.stringify(Fk)}`, Ik)
        } finally {
          this.Dv++
        }
      }
      Uqk() {
        for (const {
            id: kk,
            payload: Fk
          }
          of this.kE) {
          if (this.ee) break;
          this.Gqk(kk, Fk)
        }
        this.kE.length = 0
      }
      Hs() {
        return this.ee
      }
      Cqk() {
        if (this.Eqk || this.ee) throw new Error("Trying to getOnMessageRegistrationHandler after registration finished");
        return {
          bJ: (kk, Fk) => {
            if (this.Eqk || this.ee) throw new Error("Trying to call onMessage after registration finished");
            this.bJ(kk, Fk)
          },
          finishRegistration: () => {
            if (this.ee) throw new Error("Cannot finish message registration after disposal");
            this.Eqk = !0, this.Uqk()
          }
        }
      }
      bJ(kk, Fk) {
        var Ik, Xk;
        null === (Ik = (Xk = this.callbacks).Nqk) || void 0 === Ik || Ik.call(Xk);
        const Tk = Zk.get(this);
        for (; kk > Tk.length;) Tk[Tk.length] = null;
        Tk[kk] = Fk
      }
      send(kk, Fk) {
        this.cqk(), (0, tk.E)(Fk) ? this.sIk.aE(kk, Fk) : this.sIk.send(kk, Fk)
      }
      cqk() {
        var kk, Fk;
        (this.PTk++, 5 === ek++) && (null === (kk = (Fk = this.callbacks).Nqk) || void 0 === kk || kk.call(Fk), ek = 0)
      }
      qJ() {
        this.dispose(), this.sIk.qJ()
      }
      leave() {
        this.dispose(), this.sIk.leave()
      }
    }
    let ek = 0;
    var wk = Ik(3646);
    class Hk extends jk {
      constructor(kk) {
        super(kk, {
          Nqk: () => {
            (0, lk.o)(!0) && (0, Xk.Fv)()
          },
          Rqk: (kk, Fk) => {
            var Ik;
            null === (Ik = (0, ak.e)()) || void 0 === Ik || Ik.Sw(kk, Fk)
          }
        }, {
          vqk: !1
        }), (0, wk.h)(kk)
      }
      XE(kk, Fk) {
        return !!(0, wk.o)((0, wk.d)(), this.sIk, kk, Fk) && (this.cqk(), !0)
      }
      uqk(kk) {
        this.Wqk(), super.uqk(kk), (0, wk.h)(kk)
      }
      qJ() {
        super.qJ(), this.Wqk()
      }
      Wqk() {
        this.sIk.LJ.Xe.sG = void 0
      }
    }
    var Jk = Ik(34),
      xk = Ik(1894),
      Pk = Ik(1665),
      Kk = Ik(36449),
      Qk = Ik(38947),
      sk = Ik(38046),
      Vk = Ik(37811),
      zk = Ik(628),
      Sk = Ik(38393);

    function vk(kk, Fk, Ik) {
      const Xk = function(kk) {
          const Fk = new Int32Array(kk.length * Sk.e);
          return kk.forEach(((kk, Ik) => {
            const Xk = Ik * Sk.e;
            if (4 === kk.length) {
              const [Ik, Tk, ik, yk] = kk;
              Fk.set([Ik, Tk, ik, Ik, Tk, ik, yk], Xk)
            } else {
              const [Ik, Tk, ik, yk, lk, ak, qk] = kk;
              Fk.set([Ik, ik, lk, Tk, yk, ak, qk], Xk)
            }
          })), Fk
        }(Ik),
        Tk = (Fk, Ik, Xk, Tk) => {
          kk.setBlockNoMulti(Fk, Ik, Xk, Tk, !0)
        };
      kk.client.gameRecorder.isCapturing() ? (0, Sk.lb)(Xk, (0, Sk.ib)(Xk), Tk) : kk.qZ.XZ.tV(Xk, {
        pN: Tk,
        isHookId: Fk => kk.blockChangeHasHooks(Fk),
        watched: () => function(kk, Fk, Ik) {
          const Xk = [],
            Tk = (kk, Fk, Ik) => {
              Xk.push(kk, Fk, Ik)
            },
            ik = new Set;
          for (let yk = 0; yk < Ik.length; yk += Sk.e)
            for (let Fk = (0, zk.X)(Ik[yk]); Fk <= (0, zk.X)(Ik[yk + 3]); Fk++)
              for (let Xk = (0, zk.X)(Ik[yk + 1]); Xk <= (0, zk.X)(Ik[yk + 4]); Xk++)
                for (let lk = (0, zk.X)(Ik[yk + 2]); lk <= (0, zk.X)(Ik[yk + 5]); lk++) {
                  const Ik = `${Fk}|${Xk}|${lk}`;
                  ik.has(Ik) || (ik.add(Ik), kk.blockDataOwner.forEachDataCell(Fk, Xk, lk, Tk))
                }
          return Fk.forEachCell(Tk), Int32Array.from(Xk)
        }(kk, Fk, Xk)
      }), kk.qZ.Skk()
    }

    function Ek(kk) {
      kk.tIk = new Set, kk.eIk = new Set, kk.ZIk = new Set, kk.wIk = new Set, kk.jIk = [], kk.HIk = [], kk.iN = new Set, kk.Qi = [], kk.yN = []
    }
    class Ok {
      constructor(kk) {
        this.qZ = kk
      }
      register(kk) {
        const Fk = this.qZ,
          Ik = (0, ak.c)();
        kk.bJ(qk.P, (kk => {
          Fk.XZ.tIk.add(kk), Fk.XZ.eIk.delete(kk)
        })), kk.bJ(qk.U, (kk => {
          Fk.XZ.eIk.add(kk), Fk.XZ.tIk.delete(kk)
        })), kk.bJ(qk.Ud, (kk => {
          Fk.XZ.eIk.delete(kk), Fk.XZ.tIk.delete(kk)
        })), kk.bJ(qk.S, (kk => {
          Fk.XZ.ZIk.add(kk), Fk.XZ.wIk.delete(kk)
        })), kk.bJ(qk.X, (kk => {
          Fk.XZ.wIk.add(kk), Fk.XZ.ZIk.delete(kk)
        })), kk.bJ(qk.Yd, (kk => {
          Fk.XZ.wIk.delete(kk), Fk.XZ.ZIk.delete(kk)
        })), kk.bJ(qk.Q, (kk => {
          (0, tk.gb)(kk, Fk.XZ.HIk), (0, tk.gb)(kk, Fk.XZ.jIk), Fk.XZ.jIk.push(kk)
        })), kk.bJ(qk.W, (kk => {
          (0, tk.gb)(kk, Fk.XZ.jIk), (0, tk.gb)(kk, Fk.XZ.HIk), Fk.XZ.HIk.push(kk)
        })), kk.bJ(qk.Wd, (kk => {
          (0, tk.gb)(kk, Fk.XZ.jIk), (0, tk.gb)(kk, Fk.XZ.HIk)
        })), kk.bJ(qk.kf, (kk => {
          let {
            qI: Ik,
            LI: Xk
          } = kk;
          Xk ? Fk.XZ.iN.delete(Ik) : Fk.XZ.iN.add(Ik)
        })), kk.bJ(qk.if, (kk => {
          let {
            Qi: Xk,
            si: Tk
          } = kk;
          Ik.updateWalkThroughRect(Fk.oR, Xk, Tk)
        })), (0, Xk.onGameResetOnce)((() => {
          Ek(Fk.XZ)
        })), kk.bJ(qk.Ub, (kk => {
          sk.c.applyServerUpdate(kk)
        })), kk.bJ(qk.bb, (kk => {
          Ik.applyServerBlocks((() => {
            ! function(kk, Fk) {
              for (const {
                  Ui: Ik,
                  Ci: Xk
                }
                of Fk) {
                const Fk = Vk.b[Xk];
                if (Fk) {
                  const {
                    compX: Xk,
                    compY: Tk,
                    compZ: ik,
                    mainMultiblock: yk
                  } = Fk;
                  kk.lG(Ik[0] - Xk, Ik[1] - Tk, Ik[2] - ik, yk)
                }
              }
              for (const {
                  Ui: Ik,
                  Ci: Xk,
                  Ni: Tk
                }
                of Fk) kk.setBlockNoMulti(Ik[0], Ik[1], Ik[2], Xk, !0), kk.blockDataOwner.setBlockData(Ik[0], Ik[1], Ik[2], null === Tk ? void 0 : JSON.parse(Tk)), kk.blockAdded(Ik[0], Ik[1], Ik[2], Xk)
            }(Ik, kk)
          })), Jk.g.GL("changeBlockFail", kk), Ik.client.triggerGameCallback("onChangeBlockFail", kk), Jk.g.GL("EditBoard", {
            pos: null
          }), Jk.g.GL("EditCodeBlock", {
            pos: null,
            canChangePos: null
          })
        })), kk.bJ(qk.Bb, (kk => {
          Ik.applyServerBlocks((() => {
            vk(Ik, sk.c, kk)
          }))
        })), kk.bJ(qk.cf, (kk => {
          let {
            dT: Fk,
            YT: Xk
          } = kk;
          if (Ik.jB(Fk[0], Fk[1], Fk[2])) {
            const kk = (0, ak.c)().QJ(Fk[0], Fk[1], Fk[2]);
            (0, ak.c)().updateMailboxContents(Fk[0], Fk[1], Fk[2], kk, Xk)
          }
        })), kk.bJ(qk.ne, (kk => {
          let {
            pos: Fk,
            data: Xk
          } = kk;
          Ik.blockDataOwner.setBlockData(Fk[0], Fk[1], Fk[2], Xk), Ik.blockAdded(Fk[0], Fk[1], Fk[2], Ik.QJ(Fk[0], Fk[1], Fk[2]))
        }))
      }
    }
    var nk = Ik(37217),
      Gk = Ik(36783),
      pk = Ik(38084),
      uk = Ik(37909),
      bk = Ik(38094);
    class Rk {
      constructor(kk, Fk) {
        this.qZ = kk, this.setUpQueuedEntity = Fk
      }
      register(kk) {
        const Fk = this.qZ,
          Ik = (0, ak.c)();
        kk.bJ(qk.N, (kk => {
          let {
            dX: Fk,
            YX: Ik
          } = kk;
          this.setUpQueuedEntity(Fk), Fk = (0, Gk.c)(Fk), (0, ak.c)().client.gameRecorder.recordBulletShot(Fk, Ik), Jk.g.GL(`bulletShot|${Fk}`, {
            bulletDirections: Ik
          })
        })), kk.bJ(qk.Yb, (kk => {
          let {
            Mk: Fk,
            kF: Ik
          } = kk;
          Jk.g.GL("damagedByOtherPlayer", {
            Mk: Fk,
            direction: Ik
          }, !0)
        })), kk.bJ(qk.od, (kk => {
          Jk.g.GL("playerKilled", kk, !0), (0, ak.c)().client.gameRecorder.recordPlayerKilled(kk.deadEId, kk.killerEId, kk.withItem, kk.killstreak)
        })), kk.bJ(qk.Jb, (kk => {
          Jk.g.GL("customKillfeed", kk, !0), (0, ak.c)().client.gameRecorder.recordCustomKillfeed(kk.killer, kk.victim, kk.withItem)
        })), kk.bJ(qk.Bd, (kk => {
          let {
            xX: Ik,
            PX: Xk
          } = kk;
          this.setUpQueuedEntity(Ik);
          const Tk = Fk.MJ.BFk(Ik);
          null !== Tk && void 0 !== Tk && Tk.isGun() && Tk.reload(Date.now(), Xk)
        })), kk.bJ(qk.ke, (kk => {
          let {
            KX: Ik,
            QX: Xk
          } = kk;
          const Tk = Xk ? (0, bk.c)(Fk, Xk) : void 0;
          Jk.g.GL("sendHitmarker", {
            KX: Ik,
            screenPos: Tk
          }, !0)
        })), kk.bJ(qk.Bc, (kk => {
          let {
            oi: Xk,
            Ei: Tk,
            ni: ik,
            Gi: yk,
            ui: lk,
            bi: ak,
            Ri: qk
          } = kk;
          this.setUpQueuedEntity(Xk), Xk = (0, Gk.c)(Xk);
          const Lk = Fk.MJ.RFk(Xk);
          if (Lk && (Lk.lastHurtTime = performance.now()), (0, pk.playRigHurt)(Fk, Xk, ak), Jk.g.GL("lifeformHurt", {
              eId: Xk,
              Ri: qk
            }), Tk) {
            const kk = (0, bk.c)(Fk, Tk.QX);
            Jk.g.GL("yourAttackHit", {
              KX: yk,
              screenPos: kk,
              hitSelf: Xk === Fk.oR
            })
          }
          Xk === Fk.oR && (Ik.shakePlayerCamera(Xk, lk / 40, 200), Jk.g.GL("closeShopOnDamaged", null), Jk.g.GL("damagedByOtherPlayer", {
            Mk: null,
            direction: ak,
            ui: lk
          }, !0));
          const tk = Fk.MJ.OJ(Xk);
          if (tk && (ik || yk)) {
            const kk = [tk[0], tk[1] + 1, tk[2]];
            ik && (0, uk.k)(Fk, uk.z, kk, 15), yk && (0, uk.k)(Fk, uk.s, kk, 10)
          }
        })), kk.bJ(qk.yc, (kk => {
          let {
            KF: Ik,
            QF: Xk,
            sF: Tk
          } = kk;
          (0, nk.b)(Fk).setHealthFrac((0, Gk.c)(Ik), Tk), Jk.g.GL("lifeformHealthChanged", {
            eId: (0, Gk.c)(Ik),
            QF: Xk,
            sF: Tk
          })
        })), kk.bJ(qk.I, (kk => {
          let {
            RX: Ik,
            UX: Xk
          } = kk;
          (0, ak.c)().playerAttacked(Fk.oR, Ik, Xk)
        })), kk.bJ(qk.gb, (() => {
          const kk = Fk.MJ.BFk(Fk.oR);
          null !== kk && void 0 !== kk && kk.isChargeable() && kk.finishCharging(!1, Date.now())
        })), kk.bJ(qk.Lb, (kk => {
          let {
            wX: Fk,
            HX: Ik,
            JX: Xk,
            sT: Tk,
            VT: ik,
            zT: yk
          } = kk;
          Fk = (0, Gk.c)(Fk), (0, ak.c)().client.updateEffect(Fk, Ik, {
            displayName: Xk,
            icon: Tk,
            duration: ik,
            level: yk
          })
        })), kk.bJ(qk.Dd, (kk => {
          let {
            wX: Fk,
            HX: Ik
          } = kk;
          Fk = (0, Gk.c)(Fk), (0, ak.c)().client.removeEffect(Fk, Ik)
        })), kk.bJ(qk.af, (kk => {
          Jk.g.GL("ttbEffectMultiplier", kk)
        }))
      }
    }
    var Uk = Ik(38973),
      Ck = Ik(37215),
      Nk = Ik(4196),
      ck = Ik(38105),
      Wk = Ik(36764),
      fk = Ik(36772),
      Bk = Ik(37127),
      dk = Ik(37299),
      Yk = Ik(38109),
      Ak = Ik(38979);
    class gk {
      constructor(kk, Fk) {
        this.qZ = kk, this.setUpQueuedEntity = Fk
      }
      register(kk) {
        const Fk = this.qZ,
          Ik = (0, ak.c)();
        kk.bJ(qk.Lc, (kk => {
          let {
            eId: Ik,
            settings: Xk
          } = kk;
          (0, dk.c)(Ik);
          for (const Fk in Xk)(0, dk.b)(Ik, Fk, Xk[Fk]);
          if ("canSee" in Xk && Fk.MJ.Ukk(Ik, "hidingMeshManager")) {
            const kk = Fk.MJ.getState(Ik, "hidingMeshManager");
            kk.canSee = (0, Yk.b)("canSee", Xk.canSee), kk._forceUpdate = !0
          }
        })), kk.bJ(qk.C, (kk => {
          let {
            AT: Ik,
            gT: Xk,
            animationScript: Tk,
            mT: ik,
            hT: yk,
            rT: lk,
            DT: qk
          } = kk;
          Ik = (0, Gk.c)(Ik);
          const Lk = null === Tk && null !== lk ? (0, Uk.c)(lk, qk) : Tk;
          (0, ak.c)().client.gameRecorder.recordAnimateEntity(Ik, Xk, Lk, ik, yk), (0, nk.b)(Fk).animations.animateEntity(Ik, Xk, Tk, ik, yk, lk, qk), null !== Tk || Ik === Fk.oR && Xk === Ck.c.Emote && (0, ak.c)().client.cameraController.endTemporaryThirdPerson()
        })), kk.bJ(qk.he, (kk => {
          (0, Ak.c)(kk)
        })), kk.bJ(qk.nd, (kk => {
          for (const Fk of kk)(0, ck.y)(Fk);
          Jk.g.GL("playerCosmeticsUpdated", kk, !0)
        })), kk.bJ(qk.H, (kk => {
          for (const Ik of kk)(0, Bk.f)(Fk, Ik)
        })), kk.bJ(qk.Mc, (kk => {
          (0, uk.o)(Fk, (0, tk.u)(kk))
        })), kk.bJ(qk.Oc, (kk => {
          Nk.g[kk.Zi] ? (0, uk.o)(Fk, {
            ...Nk.g[kk.Zi],
            pos1: kk.pos1,
            pos2: kk.pos2
          }) : console.error(`Unknown preset id: ${kk.Zi}`)
        })), kk.bJ(qk.jd, (kk => {
          var Fk, Ik;
          let {
            AX: Xk,
            gX: Tk,
            mX: ik,
            hX: yk
          } = kk, {
            DX: lk,
            MX: qk
          } = null !== yk && void 0 !== yk ? yk : {};
          const {
            rX: Lk
          } = null !== yk && void 0 !== yk ? yk : {};
          lk = null !== (Fk = lk) && void 0 !== Fk ? Fk : void 0, qk = null !== (Ik = qk) && void 0 !== Ik ? Ik : void 0, "string" === typeof Lk && this.setUpQueuedEntity(Lk), (0, ak.c)().client.gameRecorder.recordPlaySound(Xk, Tk, ik, yk), Wk.d.play((0, fk.f)(Xk), Tk, Lk, lk, qk).rate(ik)
        })), kk.bJ(qk.ef, (kk => {
          for (const Fk in kk) {
            const Xk = kk[Fk];
            for (const kk in Xk) Ik.client.meshCreator.handleParticleSystemUpdate(Fk, kk, Xk[kk])
          }
        }))
      }
    }
    var mk = Ik(37794),
      hk = Ik(37777);
    class rk {
      constructor(kk) {
        this.qZ = kk
      }
      register(kk) {
        const Fk = this.qZ,
          Ik = (0, ak.c)();

        function Xk() {
          return Fk.MJ.sFk(Fk.oR)
        }
        kk.bJ(qk.lc, (kk => {
          let {
            TF: Ik,
            iF: Xk,
            yF: Tk,
            lF: ik,
            aF: yk,
            qF: lk,
            LF: ak,
            tF: qk,
            ZF: Lk
          } = kk;
          if (!Fk.MJ.Ukk(Ik, "itemState")) return void(0, mk.m)(Fk, Ik, [yk, lk, ak], Xk, {
            amount: Tk,
            attributes: JSON.parse(ik),
            tF: qk,
            size: Lk
          });
          const tk = Fk.MJ.getState(Ik, "itemState");
          tk.amount = Tk, tk.tF = qk, tk.creationTime = Date.now(), (0, hk.setServerPosition)(Fk.MJ.getState(Ik, "smoothToServerPos"), yk, lk, ak)
        })), kk.bJ(qk.Z, (kk => {
          (0, nk.b)(Fk).setCantPickUp(kk, !0), Fk.MJ.Ukk(kk, "itemState") && (Fk.MJ.getState(kk, "itemState").tF = !0)
        })), kk.bJ(qk.Td, (kk => {
          (0, nk.b)(Fk).setCantPickUp(kk, !1), Fk.MJ.Ukk(kk, "itemState") && (Fk.MJ.getState(kk, "itemState").tF = !1)
        })), kk.bJ(qk.cd, (kk => {
          let {
            pickUpItems: Fk,
            pickUpAckSeq: Ik
          } = kk;
          for (const {
              name: Tk,
              amount: ik,
              attributes: yk
            }
            of Fk) Xk().pickUpItem({
            name: Tk,
            amount: ik,
            typeObj: mk.E[Tk],
            attributes: yk
          });
          (0, ak.c)().client.inventoryPrediction.serverChangeApplied(Ik)
        })), kk.bJ(qk.Be, (kk => {
          let {
            index: Ik,
            name: Xk,
            amount: Tk,
            attributes: ik,
            setSlotAckSeq: yk
          } = kk;
          const lk = Fk.MJ.VFk(Fk.oR);
          (Ik < lk.playerInventory.numSlots || lk.yX || lk.inCreative) && lk.setItemSlot(Ik, Xk, Tk, ik), (0, ak.c)().client.inventoryPrediction.serverChangeApplied(yk)
        })), kk.bJ(qk.ic, (kk => {
          (0, ak.c)().client.inventoryPrediction.acknowledge(kk)
        })), kk.bJ(qk.y, (kk => {
          let {
            wF: Fk,
            HF: Ik,
            JF: Xk,
            PF: Tk
          } = kk;
          (0, ak.c)().client.itemDropPrediction.onActionItemDrops(Fk, Ik, Xk, Tk)
        })), kk.bJ(qk.vb, (kk => {
          Xk().clearInventory(), (0, ak.c)().client.inventoryPrediction.serverChangeApplied(kk)
        })), kk.bJ(qk.Fe, (kk => {
          Jk.g.GL("setSelectedInventorySlotI", kk, !0)
        })), kk.bJ(qk.mb, (kk => {
          let {
            SX: Ik,
            oX: Xk,
            vX: Tk,
            EX: ik,
            OX: yk,
            GX: lk,
            pX: qk,
            uX: Lk
          } = kk;
          const tk = Fk.MJ.VFk(Fk.oR);
          if (lk) {
            const {
              iX: kk,
              tX: Fk
            } = Lk;
            return (0, ak.c)().client.inventoryPrediction.y5(Fk, (() => {
              tk.chestRefreshed(Xk, Tk, ik, qk, kk)
            })) && Jk.g.GL("chestToggleFromServer", !1, !0), void Jk.g.GL("chestRefreshedFromServer")
          }(Ik || tk.yX) && (Ik ? (tk.chestOpened(Xk, Tk, ik, yk, qk), null !== yk && (0, ak.c)().client.ironChestPasskeyCache.onChestOpened(ik, yk)) : tk.chestClosed(), Jk.g.GL("chestToggleFromServer", Ik, !0))
        })), kk.bJ(qk.Kb, (kk => {
          let {
            craftingRecipeItemName: Xk,
            recipesForItem: Tk
          } = kk;
          Xk ? Ik.craftingManager.editRecipesForPlayer(Fk.oR, Xk, Tk) : Ik.craftingManager.resetAllPlayerRecipes(Fk.oR), Jk.g.GL("craftingRecipesEdited", {
            itemName: Xk,
            recipesForItem: Tk
          })
        })), kk.bJ(qk.Kd, (kk => {
          let {
            FF: Fk,
            IF: Ik,
            XF: Tk
          } = kk;
          Xk().removeItemName(Fk, Ik), (0, ak.c)().client.inventoryPrediction.serverChangeApplied(Tk)
        })), kk.bJ(qk.Hd, (kk => {
          let {
            Ki: Xk
          } = kk;
          Ik.craftingManager.removeRecipes(Fk.oR, Xk), Jk.g.GL("craftingRecipesEdited", {
            itemName: Xk,
            recipesForItem: []
          })
        }))
      }
    }
    var Dk = Ik(6475),
      Mk = Ik(37450),
      kF = Ik(354),
      FF = Ik.n(kF),
      IF = Ik(4508),
      XF = Ik(37712),
      TF = Ik(38252),
      iF = Ik(37447);
    class yF {
      constructor(kk, Fk) {
        this.qZ = kk, this.setUpQueuedEntity = Fk
      }
      register(kk) {
        const Fk = this.qZ,
          Ik = (0, ak.c)();
        kk.bJ(qk.Ye, (kk => {
          let {
            cT: Ik,
            WT: Tk,
            fT: ik,
            BT: yk
          } = kk;
          const lk = [Tk, ik, yk];
          Fk.MJ.setPosition(Fk.oR, lk), (0, Xk.sendColyMessage)(qk.ug, {
            yl: Ik,
            ll: IF.f
          }), Jk.g.GL("localPlayerTeleported", {
            pos: lk,
            isCorrection: !1
          })
        })), kk.bJ(qk.Wc, (kk => {
          let {
            OF: Fk,
            nF: Ik,
            GF: Xk,
            pF: Tk
          } = kk;
          this.setUpQueuedEntity(Fk);
          const ik = [Ik, Xk, Tk];
          Jk.g.GL(`otherPlayerTeleported|${Fk}`, {
            pos: ik
          })
        })), kk.bJ(qk.sd, (kk => {
          let {
            XT: Ik,
            TT: Tk,
            iT: ik,
            yT: yk,
            lT: lk,
            aT: ak,
            qT: Lk,
            tT: tk,
            LT: Zk,
            eT: jk
          } = kk;
          const ek = [Tk, ik, yk];
          Fk.MJ.setPosition(Fk.oR, ek);
          const wk = Fk.MJ.FFk(Fk.oR),
            Hk = Fk.MJ.aN(Fk.oR);
          FF().set(Hk.fC, 0, 0, 0), FF().set(Hk.YC, 0, 0, 0), FF().set(Hk.TH, lk, ak, Lk), Hk.gC(), wk._flying = null !== jk, jk ? (wk.flyAccel.wT = jk.wT, wk.flyAccel.HT = jk.HT) : wk.flyAccel.reset(), tk && wk.movementType === Dk.m.GLIDING && (wk.ZT = tk.ZT, FF().copy(wk.jT, tk.jT)), (0, Xk.sendColyMessage)(qk.ug, {
            yl: Ik,
            ll: IF.f
          }), Jk.g.GL("localPlayerTeleported", {
            pos: ek,
            isCorrection: !0
          })
        })), kk.bJ(qk.Ie, (kk => {
          let {
            vehicleEId: Fk,
            overrides: Ik
          } = kk;
          (0, ak.c)().applyRiddenVehicleSettingOverrides(Fk, Ik)
        })), kk.bJ(qk.gf, (kk => {
          let {
            mk: Ik,
            hk: Xk,
            rk: Tk
          } = kk;
          const ik = Fk.MJ.FFk(Fk.oR).physicsState.type === Dk.n.SLEEPING && Ik === Dk.n.DEFAULT;
          (0, ak.c)().updatePositionAndPhysics(Fk.oR, {
            type: Ik,
            tier: Xk
          }, !0, Tk), ik && (0, ak.c)().updateHeldVehicleStatus()
        })), kk.bJ(qk.fb, (kk => {
          let {
            jF: Ik,
            eF: Xk
          } = kk;
          Fk.MJ.KFk(Fk.oR).setPose(Ik, Xk)
        })), kk.bJ(qk.oe, (kk => {
          const {
            fi: Ik,
            kIk: Xk
          } = (0, Mk.e)([kk[0], kk[1], kk[2]]);
          iF.b.setLookDirection(Fk, Ik, Xk), (0, XF.v)(Ik, Xk);
          const Tk = Fk.MJ.KFk(Fk.oR);
          Tk && (Tk.heading = Ik)
        })), kk.bJ(qk.qe, (kk => {
          Ik.client.cameraController.setCameraZoom(kk)
        })), kk.bJ(qk.Me, (kk => {
          let {
            ST: Xk,
            oT: Tk
          } = kk;
          Ik.shakePlayerCamera(Fk.oR, Xk, Tk)
        })), kk.bJ(qk.pc, (kk => {
          Fk.MJ.KFk(Fk.oR).jumpMultiplier.setMultiplierType("jumpEffectAmount", kk)
        })), (0, Xk.onGameResetOnce)((() => {
          Fk.MJ.KFk(Fk.oR).jumpMultiplier.setMultiplierType("jumpEffectAmount", 1)
        })), kk.bJ(qk.E, (kk => {
          Fk.MJ.aN(Fk.oR).applyImpulse(kk)
        })), kk.bJ(qk.Le, (kk => {
          const Ik = Fk.MJ.aN(Fk.oR);
          FF().set(Ik.fC, 0, 0, 0), FF().set(Ik.YC, 0, 0, 0), FF().copy(Ik.TH, kk), Ik.gC()
        })), (0, Xk.onGameResetOnce)((() => {
          (0, TF.setFloatingYValue)(Fk.MJ.getState(Fk.oR, "physics"), Fk.MJ.ZY(Fk.oR), null)
        })), kk.bJ(qk.Ob, (kk => {
          let {
            CX: Ik,
            NX: Xk,
            cX: Tk
          } = kk;
          const ik = (0, Gk.c)(Ik);
          if (ik === Fk.oR) {
            const kk = Fk.MJ.ZY(Fk.oR).position;
            Tk ??= Math.floor(kk[1]) - 1, (0, TF.setFloatingYValue)(Fk.MJ.getState(Fk.oR, "physics"), Fk.MJ.ZY(Fk.oR), Xk ? Tk : null)
          }(0, nk.b)(Fk).setFloating(ik, Xk, Tk);
          const yk = Fk.MJ.getState(ik, "floating");
          yk && (yk.isFloating = Xk, yk.cX = Xk ? Tk : null)
        }))
      }
    }

    function lF(kk, Fk, Ik, Xk, Tk) {
      let ik = arguments.length > 5 && void 0 !== arguments[5] && arguments[5];
      if (!kk.MJ.QFk(kk.oR)) return console.log("Got resync inven but don't have inven component"), void Fk.acknowledge(Xk);
      ik && console.error("Had to sync inven"), Fk.y5(Xk, Tk) && Ik.GL("chestToggleFromServer", !1, !0), Ik.GL("syncedInvenFromServer")
    }
    var aF = Ik(38992),
      qF = Ik(38997),
      LF = Ik(1902);
    var tF = Ik(4495);

    function ZF(kk) {
      const Fk = kk.XZ;
      let Ik = 0,
        Tk = -1,
        yk = -1 / 0,
        lk = null,
        ak = !0;
      const Lk = () => {
        if (++Ik % 10 !== 0) return;
        const Lk = (0, Xk.getLastReceivedPacketId)();
        if (Lk <= Tk) return;
        const [tk, Zk, jk] = kk.MJ.OJ(kk.oR), ek = ! function(kk) {
          var Fk;
          let Ik = null === (Fk = kk.MJ.XIk(kk.oR)) || void 0 === Fk ? void 0 : Fk.le;
          if (void 0 === Ik) return !1;
          const Xk = new Set;
          for (; void 0 !== Ik && !Xk.has(Ik);) {
            var Tk;
            Xk.add(Ik);
            const Fk = kk.MJ.getState(Ik, "smoothToServerPos"),
              ik = Array.isArray(Fk) ? null : null === Fk || void 0 === Fk ? void 0 : Fk.serverPosition;
            if (ik) {
              const Fk = kk.MJ.OJ(Ik);
              if (Math.abs(Fk[0] - ik[0]) > 10 || Math.abs(Fk[1] - ik[1]) > 10 || Math.abs(Fk[2] - ik[2]) > 10) return !0
            }
            Ik = null === (Tk = kk.MJ.XIk(Ik)) || void 0 === Tk ? void 0 : Tk.le
          }
          return !1
        }(kk) && function(kk, Fk, Ik, Xk) {
          const Tk = ik.f.se;
          for (let ik = 0; ik < kk.length; ik++) {
            const yk = kk[ik];
            if (!(0, tF.g)(Fk, Ik, Xk, yk[0] * Tk, yk[1] * Tk, yk[2] * Tk)) return !1
          }
          return !0
        }(Fk.IH.He, tk, Zk, jk), wk = null === lk || Math.abs(tk - lk[0]) > 8 || Math.abs(Zk - lk[1]) > 8 || Math.abs(jk - lk[2]) > 8, Hk = !ak || wk || performance.now() - yk >= 1e4;
        ak = ek, ek && Hk && (Tk = Lk, yk = performance.now(), lk = [tk, Zk, jk], (0, Xk.sendColyMessage)(qk.bg, {
          Dy: Lk
        }))
      };
      return kk.on("Dt", Lk), () => {
        kk.off("Dt", Lk)
      }
    }
    var jF = Ik(39003),
      eF = Ik(1475),
      wF = Ik(2695),
      HF = Ik(2837),
      JF = Ik(4784);
    class xF {
      constructor(kk, Fk, Ik) {
        this.qZ = kk, this.gameNameWithVariation = Fk, this.connectionResume = Ik, this.stopChunkReports = () => {}, this.replayResume = null
      }
      clearUiRequestsAndQTEs() {
        JF.b.reset(), (0, aF.d)()
      }
      startChunkReports() {
        const kk = function(kk) {
            let Fk = null,
              Ik = -1 / 0,
              Tk = null;
            const ik = () => {
                Tk = null;
                const ik = Math.ceil(kk.OE[0]),
                  yk = Math.ceil(kk.OE[1]);
                Fk && Fk[0] === ik && Fk[1] === yk || (Fk = [ik, yk], Ik = performance.now(), (0, Xk.sendColyMessage)(qk.$f, {
                  Ry: ik,
                  Uy: yk
                }))
              },
              yk = () => {
                null === Tk && (Tk = setTimeout(ik, Math.max(0, Ik + 250 - performance.now())))
              };
            return ik(), kk.on("addRemoveDistanceChanged", yk), () => {
              kk.off("addRemoveDistanceChanged", yk), null !== Tk && (clearTimeout(Tk), Tk = null)
            }
          }(this.qZ.XZ),
          Fk = ZF(this.qZ);
        this.stopChunkReports = () => {
          kk(), Fk()
        }
      }
      restartChunkStreaming() {
        (0, XF.i)(this.qZ, (0, ak.c)().recentChunkEdits.chunksEditedSince(this.connectionResume.getDroppedAt() - jF.d)), this.startChunkReports()
      }
      register(kk) {
        const Fk = this.qZ,
          Ik = (0, ak.c)();
        kk.bJ(qk.Kc, (kk => {
          xk.e.applyNewClientOptions(kk)
        })), kk.bJ(qk.gd, (kk => {
          wF.d.onReceiveColyseusPing(kk)
        })), kk.bJ(qk.te, (kk => {
          let {
            key: Fk,
            value: Ik
          } = kk;
          (0, Pk.setCookie)(this.gameNameWithVariation, Fk, Ik)
        })), kk.bJ(qk.xe, (kk => {
          Jk.g.GL("setDiscordReportKey", kk)
        })), (0, Xk.onGameResetOnce)((() => {
          this.stopChunkReports()
        })), kk.bJ(qk.dc, (Tk => {
          const {
            tI: ik,
            ZI: yk
          } = Tk;
          if ((0, Xk.setAdjustment)(yk), this.connectionResume.onInitialInfo(Tk.jI, Tk.eI), Xk.offlineInputReplay.Av(Tk.wI), this.connectionResume.isResuming()) {
            console.log("Resumed the connection as eId", ik);
            try {
              null === Tk.HI && (0, ak.c)().client.inventoryPrediction.dropPending(), this.stopChunkReports(), Ek(Fk.XZ), xk.e.apply({
                shopInfo: null,
                _shopVersion: LF.e
              });
              const Ik = Fk.MJ.VFk(Fk.oR);
              Ik.yX && (Ik.chestClosed(), Jk.g.GL("chestToggleFromServer", !1, !0)), this.clearUiRequestsAndQTEs(), Jk.g.GL("initInfoReceived", kk)
            } finally {
              const kk = null === Tk.HI ? null : {
                sync: null,
                endSeq: null
              };
              this.replayResume = kk, this.connectionResume.onResumeInitialInfo(Tk.HI, (() => {
                kk.endSeq = (0, ak.c)().client.inventoryPrediction.lastActionSeq
              })), null === kk && this.restartChunkStreaming()
            }
          } else console.log("Local client is eId", ik), (0, XF.k)(Fk), Jk.g.GL("loadingScreenState", "loadingPage:loadingWorld"), Fk.Nkk = ik, Fk.MJ.Ukk(Fk.oR, Fk.MJ.names.entityName) && Fk.MJ.Eu(Fk.oR, Fk.MJ.names.entityName), (0, ak.c)().setEntityName(Fk.Nkk, (0, ak.c)().getRawEntityName(Fk.oR)), Fk.xR[Fk.Nkk] = {}, Fk.MJ.Tu(Fk.oR, Fk.MJ.names.entityName), Jk.g.GL("initInfoReceived", kk), this.startChunkReports(), Ik.client.onServerConnectionFinalised()
        })), kk.bJ(qk.ge, (() => {
          this.connectionResume.isResuming() ? this.connectionResume.onResumed((() => {
            const kk = this.replayResume;
            if (this.replayResume = null, !kk) return;
            this.restartChunkStreaming();
            const {
              inventoryPrediction: Ik
            } = (0, ak.c)().client, {
              sync: Tk
            } = kk, ik = new Set(Xk.offlineInputReplay.takeDroppedActions());
            if (Tk) {
              var yk;
              const Xk = null !== (yk = kk.endSeq) && void 0 !== yk ? yk : Ik.lastActionSeq;
              Ik.forget((kk => kk > Tk.tX && kk <= Xk || ik.has(kk))), lF(Fk, Ik, Jk.g, Tk.tX, Tk.load)
            } else Ik.dropPending(), Ik.askForSnapshot()
          })) : console.warn("ResumeComplete arrived without a resume")
        })), kk.bJ(qk.Se, (kk => {
          let {
            TX: Ik,
            LX: Xk,
            tX: Tk
          } = kk;
          const {
            inventoryPrediction: ik
          } = (0, ak.c)().client, yk = () => {
            Fk.MJ.VFk(Fk.oR).loadFromString(Ik)
          };
          this.replayResume && (this.replayResume.sync = {
            tX: Tk,
            load: yk
          }), lF(Fk, ik, Jk.g, Tk, yk, Xk)
        })), kk.bJ(qk.xd, (kk => {
          let {
            type: Fk,
            location1: Ik,
            location2: Xk,
            location3: Tk,
            score: ik
          } = kk;
          (0, HF.v)({
            type: Fk,
            location1: Ik,
            location2: Xk,
            location3: Tk,
            score: ik
          })
        })), kk.bJ(qk.ee, (kk => {
          let {
            type: Fk,
            resourceType: Ik,
            amount: Xk,
            category: Tk,
            itemName: ik
          } = kk;
          (0, HF.x)({
            type: Fk,
            resourceType: Ik,
            amount: Xk,
            category: Tk,
            itemName: ik
          })
        })), kk.bJ(qk.xc, (kk => {
          let {
            leaveEventType: Fk,
            category: Ik,
            subCategory: Xk,
            value: Tk
          } = kk;
          (0, HF.H)({
            leaveEventType: Fk,
            category: Ik,
            subCategory: Xk,
            value: Tk
          })
        })), kk.bJ(qk.Hb, (kk => {
          let {
            cat1: Fk,
            cat2: Ik,
            cat3: Xk,
            value: Tk
          } = kk;
          (0, HF.r)({
            cat1: Fk,
            cat2: Ik,
            cat3: Xk,
            value: Tk
          })
        })), kk.bJ(qk.rc, (kk => {
          (0, ak.c)().client.leaveGameUnwanted({
            reason: kk,
            requiresRefresh: !1,
            canReconnect: !1,
            automaticallyReconnect: !1
          }), (0, eF.navigatePreserveSearch)("/")
        })), kk.bJ(qk.le, (kk => {
          Jk.g.GL("serverUpdating", Date.now() + kk, !0)
        })), kk.bJ(qk.Ic, qF.b), kk.bJ(qk.Ec, (kk => {
          console.error(`[logErrorToConsole]: ${kk}`)
        }))
      }
    }
    var PF = Ik(39011),
      KF = Ik(39028),
      QF = Ik(1018),
      sF = Ik(39016),
      VF = Ik(39020),
      zF = Ik(3602);
    class SF {
      constructor(kk, Fk) {
        this.qZ = kk, this.clientApi = Fk
      }
      register(kk) {
        const Fk = this.qZ,
          Ik = (0, ak.c)();
        kk.bJ(qk.kb, (kk => {
          let {
            chatMsgId: Fk,
            content: Ik,
            chatterEId: Xk
          } = kk;
          Jk.g.GL("chat", {
            serverChatMsgId: Fk,
            content: Ik,
            chatterEId: Xk
          }, !0)
        })), kk.bJ(qk.$e, (kk => {
          Jk.g.GL("TopRightHelper", kk, !0)
        })), kk.bJ(qk.Ue, (kk => {
          (0, PF.d)(kk)
        })), kk.bJ(qk.tc, (kk => {
          let {
            category: Fk,
            timeframe: Ik,
            data: Xk
          } = kk;
          Jk.g.GL("leaderboardResponse", {
            category: Fk,
            timeframe: Ik,
            data: Xk
          })
        })), kk.bJ(qk.Qe, (() => {
          Jk.g.GL("showShopTutorial", null, !0)
        })), kk.bJ(qk.vd, (kk => {
          Jk.g.GL("progressBarUpdate", kk, !0)
        })), kk.bJ(qk.hc, (kk => {
          Jk.g.GL("middleScreenBarInitiate", {
            duration: kk.WX,
            fX: kk.fX,
            horizBarRemOffset: kk.BX
          }, !0)
        })), kk.bJ(qk.Od, (() => {
          Jk.g.GL("middleScreenBarRemove", !0)
        })), kk.bJ(qk.ue, (kk => {
          let {
            id: Fk,
            position: Ik,
            style: Xk,
            ZX: Tk,
            eX: ik
          } = kk;
          Jk.g.GL("setDirectionArrow", {
            id: Fk,
            position: Ik,
            style: Xk,
            text: (0, qk.s)(Tk),
            eX: ik
          }, !0)
        })), kk.bJ(qk.sb, (kk => {
          let {
            id: Fk
          } = kk;
          Jk.g.GL("clearDirectionArrow", {
            id: Fk
          }, !0)
        })), kk.bJ(qk.Eb, (kk => {
          (0, zF.onCosmeticPackGranted)(kk)
        })), kk.bJ(qk.Qc, (kk => {
          let {
            id: Fk,
            QI: Ik
          } = kk;
          const {
            type: Tk,
            params: ik
          } = (0, KF.e)(Ik), yk = {
            ...ik
          };
          for (const Xk of KF.d) Xk in yk && yk[Xk] && (yk[Xk] = (0, qk.s)(yk[Xk]));
          JF.b.queueQTE(Fk, Tk, yk).getResult().then((kk => {
            "boolean" === typeof kk && (0, Xk.sendColyMessage)(qk._h, {
              qteId: Fk,
              qteResponse: kk
            })
          }))
        })), kk.bJ(qk.Pd, (kk => {
          JF.b.cancelQTE(kk)
        })), (0, Xk.onGameResetOnce)((() => {
          JF.b.reset()
        })), kk.bJ(qk.Uc, (kk => {
          let {
            id: Fk,
            clientParameters: Ik
          } = kk;
          (0, aF.h)(Fk, Ik)
        })), kk.bJ(qk.Qd, (kk => {
          (0, aF.j)(kk)
        })), kk.bJ(qk.bf, (kk => {
          let {
            text: Fk,
            id: Ik,
            destructive: Tk
          } = kk;
          (0, aF.l)(Ik, Fk, Tk, (kk => {
            (0, Xk.sendColyMessage)(qk.rj, {
              Rq: Ik,
              Uq: kk,
              Cq: 5
            })
          }))
        })), kk.bJ(qk._c, (kk => {
          let {
            info: Fk
          } = kk;
          Jk.g.GL("overShopInfo", Fk, !0)
        })), kk.bJ(qk.Rb, (kk => {
          let {
            vT: Ik,
            ET: Xk
          } = kk;
          this.clientApi.openShop(Fk.oR, Ik, Xk)
        })), kk.bJ(qk.Qb, (kk => {
          let {
            Vi: Fk,
            zi: Ik,
            Si: Xk
          } = kk;
          Jk.g.GL("flyingMiddleMessage", {
            content: (0, qk.s)(Fk),
            zi: Ik,
            Si: Xk
          }, !0)
        })), kk.bJ(qk.of, (kk => {
          const Fk = kk === QF.f ? null : {
            message: `Currently loaded as variation: ${kk}`,
            type: "Warning"
          };
          Jk.g.GL("showPermanentBottomMessage", Fk, !0)
        })), kk.bJ(qk.Sb, (kk => {
          let {
            messageType: Fk,
            data: Xk
          } = kk;
          (0, sF.c)(Fk) ? (0, sF.b)(Fk, Xk) : ("freeCamPerms" === Fk && Ik.client.freeCameraController.setPerms(Xk.key, Xk.value), Ik.client.triggerGameCallback("onReceivedMessageFromServer", Fk, Xk))
        })), kk.bJ(qk.xb, VF.g)
      }
    }
    class oF {
      constructor(kk, Fk, Ik, Xk) {
        this.gameNameWithVariation = kk, this.qZ = Ik, this.connectionResume = Xk, this.stateReplicationHandler = void 0, this.stateReplicationHandler = new Qk.e(Fk, this.qZ)
      }
      setupStateReplicationHandlers() {
        this.stateReplicationHandler.setup(), (0, Xk.onGameResetOnce)((() => {
          this.stateReplicationHandler.dispose()
        }))
      }
      uqk(kk) {
        this.stateReplicationHandler.dispose(), this.stateReplicationHandler = new Qk.e(kk, this.qZ), this.stateReplicationHandler.setup()
      }
      setupOnMessageListeners(kk, Fk) {
        const Ik = this.qZ,
          Xk = kk => {
            this.stateReplicationHandler.setUpIfQueued(kk)
          };
        new xF(Ik, this.gameNameWithVariation, this.connectionResume).register(kk), new Ok(Ik).register(kk), new rk(Ik).register(kk), new Rk(Ik, Xk).register(kk), new gk(Ik, Xk).register(kk), new SF(Ik, Fk).register(kk), new yF(Ik, Xk).register(kk)
      }
    }
    window.addEventListener("beforeunload", (() => {}));
    var vF = Ik(39034),
      EF = Ik(39040),
      OF = Ik(667),
      nF = Ik(2852);
    class GF {
      constructor(kk, Fk, Ik, Xk) {
        this.msgHandler = Ik, this.listener = Xk, this.session = void 0, this.attachedRoom = null, this.detachRoomListeners = null, this.suspended = !1, this.droppedAt = 0, this.session = new vF.b({
          reconnect: kk,
          isLive: () => Xk.isLive(),
          onReconnected: kk => {
            this.resumeOnRoom(kk)
          },
          onGaveUp: (kk, Fk) => {
            Xk.onGaveUp(kk, Fk)
          },
          freeze: Fk,
          releaseSeat: Fk => {
            kk(Fk).then((kk => {
              kk.leave(!0)
            }), (kk => {
              console.warn("Couldn't release the held seat of a game left while reconnecting", kk)
            }))
          }
        })
      }
      onInitialInfo(kk, Fk) {
        this.session.onInitialInfo(kk, Fk)
      }
      isResuming() {
        return this.session.isResuming()
      }
      getDroppedAt() {
        return this.droppedAt
      }
      onResumeInitialInfo(kk, Fk) {
        if (this.session.onResuming(), null === kk) {
          try {
            (0, ak.c)().client.itemDropPrediction.reset()
          } catch (Ik) {
            console.error("Error dropping the item drop predictions on resuming", Ik)
          }
          return Xk.offlineInputReplay.discard(), void this.setSuspended(!1)
        }(0, ak.c)().client.itemDropPrediction.onResumeReplayOffered(), Xk.offlineInputReplay.replayFrom(kk.xI, Fk)
      }
      onResumed(kk) {
        this.setSuspended(!1), (0, Xk.resendBeacons)();
        try {
          kk()
        } catch (Fk) {
          console.error("Error completing the resume", Fk)
        } finally {
          this.session.onResumed()
        }
      }
      attachRoom(kk) {
        const Fk = (0, OF.l)((() => kk.connection.isOpen));
        kk.NJ(Fk);
        const Ik = new EF.b((() => {
          this.session.canHoldSeat() && this.listener.isLive() && (console.warn("The game server went silent, reconnecting"), this.onConnectionDropped(kk, "silent"), kk.leave(!1))
        }));
        kk.onStateChange((() => {
          Ik.heard()
        }));
        const Xk = Fk => {
          Fk.persisted || kk.leave(!0)
        };
        window.addEventListener("pagehide", Xk), kk.NJ(((Fk, Ik) => {
          if (kk === this.attachedRoom && this.listener.isLive()) return (0, ik.i)(Fk) && this.session.canHoldSeat() ? (console.warn(`Connection to the game server dropped with code ${Fk}, reconnecting`), this.listener.onDropped(Fk, Ik), void this.onConnectionDropped(kk, String(Fk))) : void this.listener.onRoomLeft(Fk, Ik)
        })), this.attachedRoom = kk, this.detachRoomListeners = () => {
          Fk(), Ik.dispose(), window.removeEventListener("pagehide", Xk)
        }
      }
      dispose() {
        this.detachRoom(), this.session.leave(), this.setSuspended(!1)
      }
      setSuspended(kk) {
        kk !== this.suspended && (this.suspended = kk, (0, Xk.setConnectionSuspended)(kk), (0, ak.c)().client.itemDropPrediction.setSuspended(kk))
      }
      detachRoom() {
        var kk;
        null === (kk = this.detachRoomListeners) || void 0 === kk || kk.call(this), this.detachRoomListeners = null, this.attachedRoom = null
      }
      onConnectionDropped(kk, Fk) {
        (0, nF.reportClientError)("disconnect", "Left room", Fk), this.isResuming() || (this.droppedAt = Date.now()), this.detachRoom(), Xk.offlineInputReplay.onConnectionLost(), this.setSuspended(!0), this.session.onConnectionLost(kk.reconnectionToken)
      }
      resumeOnRoom(kk) {
        if (!this.listener.isLive()) return console.warn("Left the game while reconnecting, leaving the resumed room"), kk.leave(!0), void this.dispose();
        console.log("Reconnected to the game server, waiting for the game to resume"), (0, Ak.m)(), Xk.offlineInputReplay.onConnectionReplaced(), this.msgHandler.uqk(kk), this.listener.onReconnected(kk), this.attachRoom(kk)
      }
    }
    var pF = Ik(2889),
      uF = Ik(2898),
      bF = Ik(1301),
      RF = Ik(1276),
      UF = Ik(4671),
      CF = Ik(3089),
      NF = Ik(1076),
      cF = Ik(37740),
      WF = Ik(39046),
      fF = Ik(8880),
      BF = Ik(39054),
      dF = Ik(1199),
      YF = Ik(36486),
      AF = Ik(39058),
      gF = Ik(1652),
      mF = Ik(2709);

    function hF(kk) {
      var Fk, Ik;
      if ("object" !== typeof kk || null === kk) return {
        errType: typeof kk
      };
      const Xk = kk;
      return {
        errType: null !== (Fk = null === (Ik = kk.constructor) || void 0 === Ik ? void 0 : Ik.name) && void 0 !== Fk ? Fk : "",
        errName: "string" === typeof Xk.name ? Xk.name : "",
        eventType: "string" === typeof Xk.type ? Xk.type : "",
        errStack: "string" === typeof Xk.stack ? Xk.stack.split("\n").slice(1).join(" | ") : ""
      }
    }

    function rF(kk) {
      if ("undefined" !== typeof ProgressEvent && kk instanceof ProgressEvent) return !0;
      if (!(kk instanceof Error)) return !1;
      const Fk = kk.code;
      return "ServerError" === kk.name && void 0 === Fk || "AbortError" === kk.name || "seat reservation expired." === kk.message || "early_leave" === kk.message
    }(0, wk.p)((kk => {
      (0, nF.reportClientError)("wasm_net", kk)
    }));
    let DF = !0;

    function MF() {
      DF = !1
    }
    class kI {
      constructor(kk) {
        this.gameNameWithVariation = void 0, this.lobbyName = void 0, this.colyClient = void 0, this.userContext = void 0, this.joinedAt = null, this.checkSendPath = () => {}, this.qZ = void 0, this.connectionResume = void 0, this.incomingMsgInitialisor = void 0, this.gameNameWithVariation = kk.gameNameWithVariation, this.lobbyName = kk.lobbyName, this.colyClient = kk.colyClient, this.userContext = kk.userContext
      }
      async connectToServer(kk, Fk, Ik) {
        xk.e.reset(), kk.xR = {
          [kk.oR]: {}
        }, kk.Nkk = void 0, (0, Ak.m)(), (0, ak.c)().removeAllEntityNames(), (0, ak.c)().setEntityName(kk.oR, this.userContext.getPlayerName()), (0, bF.s)({
          lobbyName: this.lobbyName
        }), console.log("Waiting for clientConnection passed promise to resolve");
        const yk = (0, gF.c)();
        console.log("joining server with game", this.gameNameWithVariation, "lobbyName", this.lobbyName);
        const lk = performance.now();
        Ik.aborted || (0, RF.r)("wasm_core_ready", lk);
        const qk = (0, BF.f)(this.userContext, (() => {
          const {
            roomName: Xk,
            joinOptions: Tk
          } = (0, Kk.g)(this.userContext, this.gameNameWithVariation, this.lobbyName, Fk, (kk => CF.b.isUsingCustomGameTexturePack(kk)));
          return Tk.joinAdHold = yk, Tk.renderBackend = (0, mF.e)(kk.Xw), (0, WF.i)((() => this.colyClient.joinOrCreateUntil(Ik, Xk, Tk)), Ik)
        }));
        return Jk.g.GL("loadingScreenState", "loadingPage:joiningLobby"), await qk.then((Fk => {
          if (this.joinedAt = performance.now(), (0, RF.r)("wasm_joined", this.joinedAt), this.qZ = kk, yk) {
            const kk = (0, gF.k)((() => {
              Fk.send(Tk.f), (0, RF.n)()
            }));
            Fk.NJ(kk), (0, Xk.onGameResetOnce)(kk)
          }
          const Ik = new Hk(Fk);
          this.connectionResume = new GF((kk => this.colyClient.reconnect(kk)), (Fk => {
            kk.sE(Fk)
          }), Ik, {
            isLive: () => (0, ak.c)().client.getMsgHandler() === Ik,
            onDropped: (kk, Fk) => {
              (0, uF.g)(kk) || this.logUnrecognisedConnectionLoss(kk, void 0, {
                site: "drop",
                closeReason: null !== Fk && void 0 !== Fk ? Fk : "",
                sinceJoined: this.sinceJoined()
              })
            },
            onRoomLeft: (kk, Fk) => {
              this.onRoomLeft(kk, Fk)
            },
            onReconnected: kk => {
              this.incomingMsgInitialisor.uqk(kk), this.checkSendPath = (0, cF.f)(Ik, kk, wk.s)
            },
            onGaveUp: (kk, Fk) => {
              this.onResumeGaveUp(kk, Fk)
            }
          }), this.connectionResume.attachRoom(Fk), (0, Xk.onGameResetOnce)((() => {
            this.connectionResume.dispose()
          }));
          const ik = Ik.send,
            lk = Ik.bJ,
            qk = Ik.sIk.send,
            Lk = Ik.sIk.bJ,
            tk = Ik.Gqk;
          this.checkSendPath = (0, cF.f)(Ik, Fk, wk.s);
          const Zk = setInterval((() => {
            ik === Ik.send && lk === Ik.bJ && qk === Ik.sIk.send && Lk === Ik.sIk.bJ && tk === Ik.Gqk || MF(), this.checkSendPath()
          }), 1e4);
          return (0, Xk.onGameResetOnce)((() => {
            clearInterval(Zk)
          })), {
            success: !0,
            successDetails: Ik
          }
        })).catch((Fk => {
          if (Ik.aborted && Fk === (0, dF.e)(Ik)) return {
            success: !1,
            failDetails: {
              reason: "Left the game while it loaded",
              requiresRefresh: !1,
              canReconnect: !1
            }
          };
          if (Fk instanceof YF.f) return console.warn("Seat request timed out", this.lobbyName, this.gameNameWithVariation), {
            success: !1,
            failDetails: {
              reason: Fk.message,
              requiresRefresh: !1,
              canReconnect: !1,
              gameServerUnreachable: "timedOut",
              joinFailure: (0, AF.d)(Fk, Fk.leg)
            }
          };
          kk.Sw(`Failed to connect to bloxd room, check your internet connection. lobbyName: ${this.lobbyName}, gameNameWithVariation: ${this.gameNameWithVariation} code: ${Fk.code}\n`, Fk);
          const Xk = Fk.code;
          return Xk === ik.d.serverUpdating.code ? (this.goToUpdateWaiting(), {
            success: !1,
            failDetails: {
              reason: ik.d.serverUpdating.text,
              requiresRefresh: !1,
              canReconnect: !0,
              goesToUpdateWaiting: !0
            }
          }) : {
            success: !1,
            failDetails: {
              ...this.onConnectionToServerLost(Xk, Fk.message, {
                site: "join",
                sinceJoinStart: (0, uF.d)(performance.now() - lk),
                ...hF(Fk)
              }, rF(Fk)),
              rematch: (0, WF.e)(Fk),
              gameRefused: (0, fF.e)(Fk),
              joinFailure: (0, AF.d)(Fk, this.colyClient.legReached())
            }
          }
        }))
      }
      setupServerListeners(kk, Fk, Ik) {
        Jk.g.GL("loadingScreenState", "loadingPage:loadingPlayerInfo"), this.incomingMsgInitialisor = new oF(this.gameNameWithVariation, Fk.sIk, kk, this.connectionResume), this.incomingMsgInitialisor.setupStateReplicationHandlers();
        const Tk = Fk.Cqk();
        this.incomingMsgInitialisor.setupOnMessageListeners(Tk, Ik), (0, Xk.onConnectionToServerReady)(Tk, Fk), Tk.finishRegistration()
      }
      dispose() {
        this.connectionResume.dispose()
      }
      onResumeGaveUp(kk, Fk) {
        (0, NF.ow)(new Error("Reconnect failed"), {
          ...(0, pF.k)(Fk),
          game: this.gameNameWithVariation
        }), (0, nF.reportClientError)("disconnect", "Reconnect failed", Fk.reason), (0, ak.c)().client.leaveGameUnwanted({
          reason: {
            translationKey: "general:lostConnection"
          },
          canReconnect: !kk,
          canPlayAgain: kk,
          requiresRefresh: !1,
          automaticallyReconnect: !1
        }), (0, eF.navigatePreserveSearch)("/")
      }
      sinceJoined() {
        return null === this.joinedAt ? "" : (0, uF.d)(performance.now() - this.joinedAt)
      }
      onRoomLeft(kk, Fk) {
        var Ik;
        if (kk === ik.d.gameOrPluginKick.code) return;
        if (console.log(`Left room with code ${kk}`), kk === ik.d.serverUpdating.code) return (0, nF.reportClientError)("disconnect", "Left room", "serverUpdating"), (0, ak.c)().client.leaveGame(this.getUpdateWaitingUrl()), void this.goToUpdateWaiting();
        this.qZ.Sw(`Kicked from server with code ${kk}`, new Error);
        const Xk = Object.keys(ik.d).find((Fk => ik.d[Fk].code === kk));
        (0, nF.reportClientError)("disconnect", "Left room", null !== Xk && void 0 !== Xk ? Xk : String(kk));
        const Tk = this.onConnectionToServerLost(kk, void 0, {
          site: "leave",
          closeReason: null !== Fk && void 0 !== Fk ? Fk : "",
          sinceJoined: this.sinceJoined()
        });
        (0, ak.c)().client.leaveGameUnwanted({
          reason: `You have disconnected from the server.\n${Tk.reason}`,
          canReconnect: Tk.canReconnect,
          requiresRefresh: Tk.requiresRefresh,
          automaticallyReconnect: null !== (Ik = Tk.automaticallyReconnect) && void 0 !== Ik && Ik
        }), (0, eF.navigatePreserveSearch)("/")
      }
      getUpdateWaitingUrl() {
        return (0, UF.A)(this.gameNameWithVariation, this.lobbyName)
      }
      goToUpdateWaiting() {
        (0, eF.navigatePreserveSearch)(this.getUpdateWaitingUrl())
      }
      onConnectionToServerLost(kk, Fk, Ik) {
        var Xk;
        let Tk = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        if (null !== (Xk = Fk) && void 0 !== Xk && Xk.endsWith(ik.m) && (this.userContext.invalidateTrafficCode(), Fk = Fk.replace(ik.m, "")), kk === ik.d.outdatedVersion.code) return console.error("Outdated client with version ", yk.b, ", refreshing page"), (0, Pk.reloadBloxd)(), {
          reason: "Outdated client",
          requiresRefresh: !0,
          canReconnect: !1
        };
        if (kk === ik.d.loadRecaptchaError.code) return console.error("Load recaptcha error, refreshing page"), (0, Pk.reloadBloxd)(), {
          reason: "Failed to load recaptcha",
          requiresRefresh: !0,
          canReconnect: !1
        };
        for (const yk in ik.d) {
          const {
            code: Ik,
            text: Xk,
            canReconnect: Tk
          } = ik.d[yk];
          if (Ik === kk) {
            console.log("matched known error", kk, "leaving game");
            return {
              reason: "" !== Xk ? Xk : Fk || `Code: ${kk}`,
              requiresRefresh: !1,
              canReconnect: Tk,
              automaticallyReconnect: Ik === ik.d.customGameUpdated.code || Ik === ik.d.duplicateLobbyNameError.code
            }
          }
        }
        return console.log("Didn't match known error, leaving game"), (0, uF.f)(kk) || Tk ? console.warn("Connection lost", kk, Fk) : this.logUnrecognisedConnectionLoss(kk, Fk, Ik), {
          reason: `Either your internet isn't working or this is a bug.\nCode: ${kk}`,
          requiresRefresh: !1,
          canReconnect: !1,
          gameServerUnreachable: Tk ? "failed" : void 0
        }
      }
      logUnrecognisedConnectionLoss(kk, Fk, Ik) {
        (0, NF.ow)(new Error("Unrecognised connection loss"), {
          code: String(kk),
          cause: null !== Fk && void 0 !== Fk ? Fk : "",
          ...Ik,
          game: this.gameNameWithVariation,
          ...(0, uF.j)()
        })
      }
    }
  },
  38947: (kk, Fk, Ik) => {
    Ik.d(Fk, {
      e: () => gI,
      g: () => kX
    });
    var Xk, Tk, ik, yk, lk, ak, qk, Lk, tk, Zk, jk, ek, wk, Hk, Jk, xk, Pk, Kk, Qk, sk, Vk, zk, Sk, vk, Ek, Ok, nk, Gk, pk, uk, bk, Rk, Uk, Ck, Nk, ck, Wk, fk, Bk, dk, Yk, Ak, gk, mk, hk, rk, Dk, Mk, kF, FF, IF, XF, TF, iF, yF, lF, aF, qF, LF, tF, ZF, jF, eF, wF, HF, JF, xF, PF, KF, QF, sF, VF, zF, SF, oF, vF, EF, OF, nF, GF, pF, uF, bF, RF, UF, CF, NF, cF, WF, fF, BF, dF, YF, AF, gF, mF, hF, rF, DF, MF = Ik(34),
      kI = Ik(37217),
      FI = Ik(38960),
      II = Ik(38967),
      XI = Ik(9098),
      TI = Ik(621),
      iI = Ik(614),
      yI = Ik(36816);
    let lI = (Xk = (0, XI.type)("number"), Tk = (0, XI.type)("number"), ik = (0, XI.type)("number"), yk = (0, XI.type)("number"), lk = (0, XI.type)("number"), ak = (0, XI.type)("number"), qk = (0, XI.type)("string"), Lk = class extends XI.Schema {
        constructor() {
          super(...arguments), (0, FI.e)(this, "id", tk, this), (0, FI.e)(this, "amount", Zk, this), (0, FI.e)(this, "x", jk, this), (0, FI.e)(this, "y", ek, this), (0, FI.e)(this, "z", wk, this), (0, FI.e)(this, "size", Hk, this), (0, FI.e)(this, "attributes", Jk, this)
        }
      }, tk = (0, II.b)(Lk.prototype, "id", [Xk], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return 0
        }
      }), Zk = (0, II.b)(Lk.prototype, "amount", [Tk], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return 0
        }
      }), jk = (0, II.b)(Lk.prototype, "x", [ik], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return 0
        }
      }), ek = (0, II.b)(Lk.prototype, "y", [yk], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return 0
        }
      }), wk = (0, II.b)(Lk.prototype, "z", [lk], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return 0
        }
      }), Hk = (0, II.b)(Lk.prototype, "size", [ak], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return 1
        }
      }), Jk = (0, II.b)(Lk.prototype, "attributes", [qk], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return "{}"
        }
      }), Lk),
      aI = (xk = (0, XI.type)("string"), Pk = (0, XI.type)("string"), Kk = class extends XI.Schema {
        constructor() {
          super(...arguments), (0, FI.e)(this, "itemName", Qk, this), (0, FI.e)(this, "enchantmentTier", sk, this)
        }
      }, Qk = (0, II.b)(Kk.prototype, "itemName", [xk], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: null
      }), sk = (0, II.b)(Kk.prototype, "enchantmentTier", [Pk], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: null
      }), Kk),
      qI = (Vk = (0, XI.type)("string"), zk = (0, XI.type)("string"), Sk = (0, XI.type)("number"), vk = (0, XI.type)("number"), Ek = (0, XI.type)("number"), Ok = (0, XI.type)("float32"), nk = (0, XI.type)("float32"), Gk = (0, XI.type)("float32"), pk = (0, XI.type)("string"), uk = (0, XI.type)(["number"]), bk = (0, XI.type)("boolean"), Rk = class extends XI.Schema {
        constructor() {
          super(...arguments), (0, FI.e)(this, "type", Uk, this), (0, FI.e)(this, "name", Ck, this), (0, FI.e)(this, "x", Nk, this), (0, FI.e)(this, "y", ck, this), (0, FI.e)(this, "z", Wk, this), (0, FI.e)(this, "xRotation", fk, this), (0, FI.e)(this, "yRotation", Bk, this), (0, FI.e)(this, "zRotation", dk, this), (0, FI.e)(this, "followingEId", Yk, this), (0, FI.e)(this, "followingOffset", Ak, this), (0, FI.e)(this, "shouldMatchFollowingEntityRotation", gk, this)
        }
      }, Uk = (0, II.b)(Rk.prototype, "type", [Vk], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: null
      }), Ck = (0, II.b)(Rk.prototype, "name", [zk], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return ""
        }
      }), Nk = (0, II.b)(Rk.prototype, "x", [Sk], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return 0
        }
      }), ck = (0, II.b)(Rk.prototype, "y", [vk], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return 0
        }
      }), Wk = (0, II.b)(Rk.prototype, "z", [Ek], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return 0
        }
      }), fk = (0, II.b)(Rk.prototype, "xRotation", [Ok], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return 0
        }
      }), Bk = (0, II.b)(Rk.prototype, "yRotation", [nk], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return 0
        }
      }), dk = (0, II.b)(Rk.prototype, "zRotation", [Gk], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return 0
        }
      }), Yk = (0, II.b)(Rk.prototype, "followingEId", [pk], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: null
      }), Ak = (0, II.b)(Rk.prototype, "followingOffset", [uk], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return new XI.ArraySchema(0, 0, 0)
        }
      }), gk = (0, II.b)(Rk.prototype, "shouldMatchFollowingEntityRotation", [bk], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return !0
        }
      }), Rk),
      LI = (mk = (0, XI.type)("float32"), hk = (0, XI.type)("float32"), rk = (0, XI.type)("boolean"), Dk = (0, XI.type)("boolean"), Mk = (0, XI.type)("float32"), kF = (0, XI.type)("boolean"), FF = (0, XI.type)("string"), IF = (0, XI.type)("string"), XF = (0, XI.type)("string"), TF = (0, XI.type)("string"), iF = (0, XI.type)(["number"]), yF = (0, XI.type)("number"), lF = (0, XI.type)({
        map: aI
      }), aF = class extends qI {
        constructor() {
          super(...arguments), (0, FI.e)(this, "scale", qF, this), (0, FI.e)(this, "speed", LF, this), (0, FI.e)(this, "jumping", tF, this), (0, FI.e)(this, "crouching", ZF, this), (0, FI.e)(this, "cameraPitch", jF, this), (0, FI.e)(this, "armSwinging", eF, this), (0, FI.e)(this, "heldItemName", wF, this), (0, FI.e)(this, "heldItemEnchantmentTier", HF, this), (0, FI.e)(this, "pose", JF, this), (0, FI.e)(this, "ridingVehicleEId", xF, this), (0, FI.e)(this, "meshOffset", PF, this), (0, FI.e)(this, "baseRenderHeading", KF, this), (0, FI.e)(this, "armour", QF, this)
        }
      }, qF = (0, II.b)(aF.prototype, "scale", [mk], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return 1
        }
      }), LF = (0, II.b)(aF.prototype, "speed", [hk], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return 0
        }
      }), tF = (0, II.b)(aF.prototype, "jumping", [rk], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return !1
        }
      }), ZF = (0, II.b)(aF.prototype, "crouching", [Dk], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return !1
        }
      }), jF = (0, II.b)(aF.prototype, "cameraPitch", [Mk], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return 0
        }
      }), eF = (0, II.b)(aF.prototype, "armSwinging", [kF], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return !1
        }
      }), wF = (0, II.b)(aF.prototype, "heldItemName", [FF], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: null
      }), HF = (0, II.b)(aF.prototype, "heldItemEnchantmentTier", [IF], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: null
      }), JF = (0, II.b)(aF.prototype, "pose", [XF], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return "standing"
        }
      }), xF = (0, II.b)(aF.prototype, "ridingVehicleEId", [TF], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return null
        }
      }), PF = (0, II.b)(aF.prototype, "meshOffset", [iF], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return new XI.ArraySchema(0, 0, 0)
        }
      }), KF = (0, II.b)(aF.prototype, "baseRenderHeading", [yF], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return 0
        }
      }), QF = (0, II.b)(aF.prototype, "armour", [lF], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return new XI.MapSchema
        }
      }), aF),
      tI = (sF = (0, XI.type)("string"), VF = (0, XI.type)("string"), zF = (0, XI.type)("string"), SF = (0, XI.type)("uint8"), oF = class extends LI {
        constructor() {
          super(...arguments), (0, FI.e)(this, "variation", vF, this), (0, FI.e)(this, "ownerDbId", EF, this), (0, FI.e)(this, "metaInfo", OF, this), (0, FI.e)(this, "aiState", nF, this)
        }
      }, vF = (0, II.b)(oF.prototype, "variation", [sF], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return "default"
        }
      }), EF = (0, II.b)(oF.prototype, "ownerDbId", [VF], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return null
        }
      }), OF = (0, II.b)(oF.prototype, "metaInfo", [zF], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return ""
        }
      }), nF = (0, II.b)(oF.prototype, "aiState", [SF], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return 0
        }
      }), oF);
    GF = (0, XI.type)("string"), pF = (0, XI.type)("string"), uF = (0, XI.type)("string"), bF = (0, XI.type)("string"), RF = class extends qI {
      constructor() {
        super(...arguments), (0, FI.e)(this, "meshKind", UF, this), (0, FI.e)(this, "meshOpts", CF, this), (0, FI.e)(this, "pose", NF, this), (0, FI.e)(this, "leaderboardTop", cF, this)
      }
    }, UF = (0, II.b)(RF.prototype, "meshKind", [GF], {
      configurable: !0,
      enumerable: !0,
      writable: !0,
      initializer: null
    }), CF = (0, II.b)(RF.prototype, "meshOpts", [pF], {
      configurable: !0,
      enumerable: !0,
      writable: !0,
      initializer: null
    }), NF = (0, II.b)(RF.prototype, "pose", [uF], {
      configurable: !0,
      enumerable: !0,
      writable: !0,
      initializer: null
    }), cF = (0, II.b)(RF.prototype, "leaderboardTop", [bF], {
      configurable: !0,
      enumerable: !0,
      writable: !0,
      initializer: null
    });

    function ZI(kk) {
      return Object.keys(XI.Metadata.getFields(kk))
    }
    const jI = ZI(tI);
    for (const FX of TI.r)
      if (!jI.includes(FX)) throw new Error(`Mob Schema is missing a networked property: "${FX}"`);
    const eI = ZI((WF = (0, XI.type)("string"), fF = (0, XI.type)("float32"), BF = (0, XI.type)("float32"), dF = (0, XI.type)("float32"), YF = (0, XI.type)("float32"), AF = class extends qI {
      constructor() {
        super(...arguments), (0, FI.e)(this, "soundName", gF, this), (0, FI.e)(this, "volume", mF, this), (0, FI.e)(this, "refDistance", hF, this), (0, FI.e)(this, "maxHearDist", rF, this), (0, FI.e)(this, "rate", DF, this)
      }
    }, gF = (0, II.b)(AF.prototype, "soundName", [WF], {
      configurable: !0,
      enumerable: !0,
      writable: !0,
      initializer: function() {
        return ""
      }
    }), mF = (0, II.b)(AF.prototype, "volume", [fF], {
      configurable: !0,
      enumerable: !0,
      writable: !0,
      initializer: function() {
        return 1
      }
    }), hF = (0, II.b)(AF.prototype, "refDistance", [BF], {
      configurable: !0,
      enumerable: !0,
      writable: !0,
      initializer: function() {
        return yI.f
      }
    }), rF = (0, II.b)(AF.prototype, "maxHearDist", [dF], {
      configurable: !0,
      enumerable: !0,
      writable: !0,
      initializer: function() {
        return yI.d
      }
    }), DF = (0, II.b)(AF.prototype, "rate", [YF], {
      configurable: !0,
      enumerable: !0,
      writable: !0,
      initializer: function() {
        return 1
      }
    }), AF));
    for (const FX of iI.k)
      if (!eI.includes(FX)) throw new Error(`AudioEntity Schema is missing a replicated property: "${FX}"`);
    var wI = Ik(38422),
      HI = Ik(1231),
      JI = Ik(628),
      xI = Ik(38201),
      PI = Ik(4210),
      KI = Ik(337),
      QI = Ik(37327),
      sI = Ik(38105),
      VI = Ik(2148),
      zI = Ik(37299),
      SI = Ik(38453),
      oI = Ik(37435),
      vI = Ik(354),
      EI = Ik.n(vI),
      OI = Ik(37932),
      nI = Ik(37134),
      GI = Ik(38088),
      pI = Ik(38116);
    class uI {
      constructor(kk, Fk) {
        this.bloxd = kk, this.eId = Fk, this.qZ = void 0, this.colyseusEntity = void 0, this.canSeeSub = void 0, this.canAttackSub = void 0, this.interactableSub = void 0, this.overlayColourSub = void 0, this.opacitySub = void 0, this.zIndexSub = void 0, this.multilineTextBoxSub = void 0, this.previousHidingMeshManagerState = void 0, this.meshKind = void 0, this.meshOpts = void 0, this.leaderboardTop = void 0, this.meshRebuildQueued = !1, this.ee = !1, this.qZ = kk.qZ
      }
      initClient(kk) {
        var Fk, Ik, Xk;
        this.colyseusEntity = kk, this.meshKind = kk.meshKind, this.meshOpts = kk.meshOpts, this.leaderboardTop = kk.leaderboardTop, this.qZ.MJ.add([kk.x, kk.y, kk.z], 1, 1, null, null, !1, !1, this.eId), this.qZ.MJ.Tu(this.eId, "smoothToServerPos");
        const Tk = "Person" === this.meshKind;
        this.qZ.MJ.Tu(this.eId, "meshRotation", {
          isServerControlled: !0,
          ...Tk ? {
            defaultRotationsPerSecond: .5
          } : {},
          childrenNodeParams: Tk ? [{
            nodeName: "HeadMesh",
            softTolerance: SI.h,
            hardTolerance: null
          }] : []
        }), this.updateHidingMeshMgr(), this.canSeeSub = MF.g.subscribe(`otherEntitySettings|${this.eId}|canSee`, (kk => {
          this.updateHidingMeshMgr()
        }));
        const ik = () => {
          const kk = this.qZ.MJ.eFk(this.eId);
          if (!kk) return;
          const Fk = (0, oI.g)(this.eId);
          if ("number" === typeof kk.Ip) {
            var Ik, Xk, Tk, ik;
            const yk = null === (Ik = (0, VI.k)("head", null === (Tk = this.getSpec()) || void 0 === Tk || null === (ik = Tk.opts.textures) || void 0 === ik ? void 0 : ik.head)) || void 0 === Ik || null === (Xk = Ik.personModel) || void 0 === Xk ? void 0 : Xk.fullBody;
            return this.qZ.Xw.kp.setPickable(kk.Ip, Fk && !yk), void(0, nI.updatePersonAttachmentPickability)(this.qZ, this.eId, Fk)
          }
          const yk = kk.mesh;
          if (yk)
            for (const lk of [yk, ...yk.getChildMeshes(!1)]) "gw" in lk && !lk.name.startsWith("Cape|") && (lk.gw = Fk)
        };
        this.canAttackSub = MF.g.subscribe(`otherEntitySettings|${this.eId}|canAttack`, ik), this.interactableSub = MF.g.subscribe(`otherEntitySettings|${this.eId}|interactable`, ik), this.overlayColourSub = MF.g.subscribe(`otherEntitySettingsClientifiedEId|${this.eId}|overlayColour`, (kk => {
          this.updateOverlayColour(kk)
        })), this.opacitySub = MF.g.subscribe(`otherEntitySettingsClientifiedEId|${this.eId}|opacity`, (kk => {
          this.updateOpacity(kk)
        })), this.zIndexSub = MF.g.subscribe(`otherEntitySettingsClientifiedEId|${this.eId}|zIndex`, (kk => {
          this.updateZIndex(kk)
        }));
        const yk = this.qZ.xR[this.qZ.oR][this.eId];
        this.updateOverlayColour(null !== (Fk = null === yk || void 0 === yk ? void 0 : yk.overlayColour) && void 0 !== Fk ? Fk : null), this.updateOpacity(null !== (Ik = null === yk || void 0 === yk ? void 0 : yk.opacity) && void 0 !== Ik ? Ik : 1), this.updateZIndex(null !== (Xk = null === yk || void 0 === yk ? void 0 : yk.zIndex) && void 0 !== Xk ? Xk : 0), this.multilineTextBoxSub = (0, zI.p)(this.qZ, this.eId)
      }
      onChangeClient(kk, Fk) {
        if ("xRotation" === kk || "yRotation" === kk || "zRotation" === kk)(0, zI.t)(this.qZ, this.eId, kk, Fk);
        else if ("pose" === kk) {
          const kk = this.qZ.MJ.KFk(this.eId);
          kk && (kk.pose = Fk || "standing")
        } else "meshKind" === kk || "meshOpts" === kk ? (this[kk] = Fk, this.queueMeshRebuild()) : "name" === kk && "" !== Fk ? this.updateHidingMeshMgr() : "leaderboardTop" === kk && (this.leaderboardTop = Fk, MF.g.GL(`leaderboardTop|${this.eId}`, Fk))
      }
      disposeClient() {
        this.ee = !0, this.qZ.MJ.deleteEntity(this.eId), MF.g.unsubscribe(this.canSeeSub), MF.g.unsubscribe(this.canAttackSub), MF.g.unsubscribe(this.interactableSub), MF.g.unsubscribe(this.overlayColourSub), MF.g.unsubscribe(this.opacitySub), MF.g.unsubscribe(this.zIndexSub), MF.g.unsubscribe(this.multilineTextBoxSub)
      }
      getCurrentHidingMeshMgrState() {
        var kk, Fk;
        return {
          canSee: null !== (kk = null === (Fk = this.qZ.xR[this.qZ.oR][this.eId]) || void 0 === Fk ? void 0 : Fk.canSee) && void 0 !== kk && kk,
          name: this.colyseusEntity.name,
          meshKind: this.meshKind,
          meshOpts: this.meshOpts
        }
      }
      updateHidingMeshMgr() {
        var kk, Fk, Ik;
        const {
          qZ: Xk
        } = this, {
          MJ: Tk
        } = Xk, ik = this.getCurrentHidingMeshMgrState();
        if ((0, KI.ce)(this.previousHidingMeshManagerState, ik)) return;
        if (this.previousHidingMeshManagerState = ik, Tk.Eu(this.eId, "hidingMeshManager"), null === (kk = Xk.xR[Xk.oR][this.eId]) || void 0 === kk || !kk.canSee) return;
        const yk = this.getSpec();
        if (!yk) return;
        const {
          type: lk,
          opts: ak
        } = yk;
        "Person" === lk && (ak.textures = (0, VI.o)(ak.textures)), ak.eId = this.eId, Tk.Tu(this.eId, "hidingMeshManager", {
          addMeshComponent: () => {
            var kk, Fk, Ik;
            "Leaderboard" === lk && (ak.leaderboardTop = this.leaderboardTop);
            const ik = this.bloxd.client.meshCreator.getEntityMesh(lk, ak, (kk => {
              var Fk, Ik;
              if ("number" === typeof kk) {
                var Tk, ik, yk;
                const Fk = Xk.Xw.kp;
                Fk.setEntityId(kk, this.eId);
                const Ik = "Person" === lk && (null === (Tk = (0, VI.k)("head", null === (yk = ak.textures) || void 0 === yk ? void 0 : yk.head)) || void 0 === Tk || null === (ik = Tk.personModel) || void 0 === ik ? void 0 : ik.fullBody);
                return void Fk.setPickable(kk, (0, oI.g)(this.eId) && !Ik)
              }
              const qk = kk;
              for (const lk of [qk, ...qk.getChildMeshes(!1)]) void 0 === lk.gw || lk.name.startsWith("Cape|") || (lk.gw = (0, oI.g)(this.eId), lk.metadata ??= new Xk.Xw.mw, lk.metadata.eId = this.eId);
              this.updateOpacity(null !== (Fk = null === (Ik = Xk.xR[Xk.oR][this.eId]) || void 0 === Ik ? void 0 : Ik.opacity) && void 0 !== Fk ? Fk : 1)
            }));
            if (!ik) return;
            const {
              Ip: yk,
              mesh: qk,
              meshOffset: Lk,
              nameYOffset: tk,
              modelLoaded: Zk
            } = ik;
            null === Zk || void 0 === Zk || Zk.then((() => {
              var kk;
              (null === (kk = Tk.eFk(this.eId)) || void 0 === kk ? void 0 : kk.mesh) === qk && (this.previousHidingMeshManagerState = null, this.updateHidingMeshMgr())
            }));
            const jk = null === yk ? null : Xk.Xw.kp.XXk(yk, 0);
            if (Tk.Tu(this.eId, Tk.names.mesh, {
                Ip: yk,
                vIk: jk,
                mesh: qk,
                Dyk: !1,
                OIk: "Leaderboard" !== lk,
                offset: Lk.slice(),
                ryk: "ParticleEmitter" === lk && ak.followTargetMeshOffset ? kk => {
                  var Fk;
                  EI().copy(kk, Lk);
                  const Ik = null === (Fk = Tk.XIk(this.eId)) || void 0 === Fk ? void 0 : Fk.le,
                    Xk = void 0 === Ik ? null : Tk.KFk(Ik);
                  if (Xk) {
                    var ik, yk;
                    const Fk = this.bloxd.getEntityHeading(null !== (ik = Xk.ridingVehicleEId) && void 0 !== ik ? ik : Ik, !0),
                      Tk = Math.sin(Fk),
                      lk = Math.cos(Fk);
                    kk[0] += Xk.meshOffset[0] * lk + Xk.meshOffset[2] * Tk, kk[1] += Xk.meshOffset[1], kk[2] += Xk.meshOffset[2] * lk - Xk.meshOffset[0] * Tk;
                    const ak = null !== (yk = Xk.ridingVehicleEId) && void 0 !== yk ? yk : null;
                    null !== ak && (0, pI.b)(this.qZ, ak, kk)
                  }
                } : null
              }), "Person" === lk) {
              var ek, wk, Hk, Jk;
              Tk.Tu(this.eId, Tk.names.meshAttachments, {
                personFullBody: null !== (ek = null === (wk = (0, VI.k)("head", null === (Jk = ak.textures) || void 0 === Jk ? void 0 : Jk.head)) || void 0 === wk || null === (Hk = wk.personModel) || void 0 === Hk ? void 0 : Hk.fullBody) && void 0 !== ek && ek
              });
              for (const kk of HI.w) {
                var xk, Pk, Kk;
                const Fk = null === (xk = ak.textures) || void 0 === xk ? void 0 : xk[kk];
                Fk && null !== (Pk = (0, VI.k)(kk, Fk)) && void 0 !== Pk && null !== (Kk = Pk.attachments) && void 0 !== Kk && Kk.length && sI.c.Player.meshApi.updatePlayerCosmetic(this.eId, yk, kk, Fk)
              }
              Tk.Tu(this.eId, Tk.names.moveState), Tk.Tu(this.eId, "updateWalkingState", {
                Ip: yk,
                vIk: jk,
                walkingLegSwingDuration: SI.p
              }), Tk.Tu(this.eId, "humanoidMesh", {
                Ip: yk,
                vIk: jk,
                heldItemPositionParams: {},
                maxWalkingAngleOverride: null
              }), Tk.Tu(this.eId, "animator", {
                Ip: yk,
                vIk: jk,
                modelLifeformType: "Player"
              }), GI.h.hasAnimation("Person") && Tk.Tu(this.eId, "rigAnimation", {
                target: "Person",
                Ip: yk
              }), Tk.KFk(this.eId).pose = this.colyseusEntity.pose || "standing"
            } else if ("BloxdBlock" === lk && null !== yk) {
              Tk.Tu(this.eId, "animator", {
                Ip: yk,
                vIk: jk,
                modelLifeformType: null
              });
              const kk = (0, xI.r)(ak.blockName);
              null !== kk && Tk.Tu(this.eId, "rigAnimation", {
                target: kk,
                Ip: yk
              })
            }
            Tk.Plk(this.eId, "entityName", {
              name: this.colyseusEntity.name,
              nameYOffset: tk
            }), this.bloxd.setEntityName(this.eId, this.colyseusEntity.name), !0 === ak.autoRotate && (Tk.Eu(this.eId, "meshRotation"), Tk.Tu(this.eId, "autoRotate"));
            const {
              lineToEId: Qk
            } = ak;
            (0, JI.Q)(Qk) || Tk.Tu(this.eId, "lineToEntity", {
              lineToEId: Qk
            });
            const sk = Xk.xR[Xk.oR][this.eId];
            this.updateOverlayColour(null !== (kk = null === sk || void 0 === sk ? void 0 : sk.overlayColour) && void 0 !== kk ? kk : null), this.updateOpacity(null !== (Fk = null === sk || void 0 === sk ? void 0 : sk.opacity) && void 0 !== Fk ? Fk : 1), this.updateZIndex(null !== (Ik = null === sk || void 0 === sk ? void 0 : sk.zIndex) && void 0 !== Ik ? Ik : 0)
          },
          removeMeshComponent: () => {
            "Person" !== lk && "BloxdBlock" !== lk || Tk.Eu(this.eId, "rigAnimation"), Tk.Eu(this.eId, Tk.names.mesh), Tk.Ukk(this.eId, Tk.names.meshAttachments) && Tk.Eu(this.eId, Tk.names.meshAttachments), Tk.Eu(this.eId, "entityName"), Tk.Eu(this.eId, "autoRotate"), Tk.Eu(this.eId, "lineToEntity"), "Person" === lk ? (Tk.Eu(this.eId, Tk.names.moveState), Tk.Eu(this.eId, "updateWalkingState"), Tk.Eu(this.eId, "humanoidMesh"), Tk.Eu(this.eId, "animator")) : "BloxdBlock" === lk && Tk.Eu(this.eId, "animator")
          },
          hideDist: null !== (Fk = ak.hideDist) && void 0 !== Fk ? Fk : 80,
          movingHideDist: null !== (Ik = ak.hideDist) && void 0 !== Ik ? Ik : 120,
          displayOutsideLoadedChunk: ak.hideDist > 100,
          immediatelyUpdate: !0,
          Zy: "BloxdBlock" === lk ? ak.blockName : lk
        })
      }
      queueMeshRebuild() {
        this.meshRebuildQueued || (this.meshRebuildQueued = !0, queueMicrotask((() => {
          this.meshRebuildQueued = !1, this.ee || this.updateHidingMeshMgr()
        })))
      }
      getSpec() {
        return (0, PI.g)({
          meshKind: this.meshKind,
          meshOpts: this.meshOpts
        })
      }
      updateOverlayColour(kk) {
        var Fk, Ik;
        if ("Person" !== this.meshKind) return;
        let Xk = new QI.b(0, 0, 0, 0);
        if (null !== kk) {
          const Fk = (0, KI.Y)(kk);
          Xk = new QI.b(Fk[0] / 255, Fk[1] / 255, Fk[2] / 255, .5)
        }
        const Tk = null !== (Fk = null === (Ik = this.qZ.MJ.eFk(this.eId)) || void 0 === Ik ? void 0 : Ik.Ip) && void 0 !== Fk ? Fk : null;
        null !== Tk && sI.c.Player.meshApi.updateMeshOverlayColour(Tk, Xk)
      }
      updateZIndex(kk) {
        var Fk;
        if ("Person" !== this.meshKind) return;
        const Ik = null === (Fk = this.qZ.MJ.eFk(this.eId)) || void 0 === Fk ? void 0 : Fk.Ip;
        "number" === typeof Ik && this.qZ.Xw.kp.setRenderingGroupId(Ik, kk)
      }
      updateOpacity(kk) {
        const Fk = this.qZ.MJ.eFk(this.eId);
        Fk && ("number" !== typeof Fk.Ip ? Fk.mesh && "ParticleEmitter" !== this.meshKind && (0, OI.d)(Fk.mesh, kk) : sI.c.Player.meshApi.updateMeshOpacity(Fk.Ip, kk))
      }
    }
    var bI = Ik(38956);
    class RI {
      constructor(kk, Fk) {
        this.eId = Fk, this.qZ = void 0, this.schema = void 0, this.qZ = kk.qZ
      }
      initClient(kk) {
        this.schema = kk, this.qZ.MJ.add([kk.x, kk.y, kk.z], .1, .1, null, null, !1, !1, this.eId), this.qZ.MJ.Tu(this.eId, "smoothToServerPos"), bI.b.add(this.eId, this.copyOpts())
      }
      onChangeClient(kk) {
        iI.k.includes(kk) && bI.b.update(this.eId, this.copyOpts())
      }
      disposeClient() {
        bI.b.remove(this.eId), this.qZ.MJ.deleteEntity(this.eId)
      }
      copyOpts() {
        const {
          soundName: kk,
          volume: Fk,
          refDistance: Ik,
          maxHearDist: Xk,
          rate: Tk
        } = this.schema;
        return {
          soundName: kk,
          volume: Fk,
          refDistance: Ik,
          maxHearDist: Xk,
          rate: Tk
        }
      }
    }
    var UI = Ik(3631),
      CI = Ik(36783),
      NI = Ik(6475),
      cI = Ik(37794),
      WI = Ik(2700),
      fI = Ik(38143),
      BI = Ik(9054),
      dI = Ik(38469),
      YI = Ik(37777),
      AI = Ik(2852);
    class gI {
      constructor(kk, Fk) {
        let Ik = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 4,
          Xk = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : () => performance.now();
        this.sIk = kk, this.qZ = Fk, this.setupBudgetMs = Ik, this.now = Xk, this.createStateCallbacks = void 0, this.roomStateCallbacks = void 0, this.allItems = {}, this.detachers = new Map, this.deferredSetups = new Map, this.queuedSetups = new Map, this.promotedSetups = new Set, this.setupBudgetLeftMs = void 0, this.lastRefillMs = void 0, this.roomState = void 0, this.ee = !1, this.onFrame = () => {
          this.setUpQueuedEntities(!0)
        }, this.VJ = () => {
          this.setUpQueuedEntities(this.now() - this.lastRefillMs > 100)
        }, this.setUpPromoted = () => {
          for (const kk of this.promotedSetups) {
            this.promotedSetups.delete(kk);
            const Fk = this.queuedSetups.get(kk);
            Fk && (this.queuedSetups.delete(kk), this.timedSetup(Fk, kk))
          }
        }, this.createStateCallbacks = (0, BI.getStateCallbacks)(kk), this.roomStateCallbacks = this.createStateCallbacks(kk.state), this.roomState = kk.state, this.setupBudgetLeftMs = Ik, this.lastRefillMs = Xk()
      }
      setup() {
        this.setupEntityHandlers(), this.setupItemHandlers(), this.sIk.onStateChange(this.setUpPromoted), this.qZ.on("beforeInputs", this.onFrame), this.qZ.on("Dt", this.VJ)
      }
      setUpQueuedEntities(kk) {
        var Fk;
        if ((null === (Fk = (0, WI.c)().client.getMsgHandler()) || void 0 === Fk ? void 0 : Fk.sIk) !== this.sIk) return this.qZ.off("beforeInputs", this.onFrame), this.qZ.off("Dt", this.VJ), this.queuedSetups.clear(), void this.promotedSetups.clear();
        if (kk && (this.setupBudgetLeftMs = this.setupBudgetMs, this.lastRefillMs = this.now()), this.setUpPromoted(), 0 !== this.queuedSetups.size)
          for (EI().copy(mI, this.qZ.MJ.OJ(this.qZ.oR)); this.setupBudgetLeftMs > 0;) {
            const kk = this.nearestQueued(mI);
            if (null === kk) return;
            this.setUpIfQueued(kk), this.setUpPromoted()
          }
      }
      nearestQueued(kk) {
        let Fk = null,
          Ik = 1 / 0;
        return this.queuedSetups.forEach(((Xk, Tk) => {
          const ik = function(kk, Fk) {
            return (Fk.x - kk[0]) ** 2 + (Fk.y - kk[1]) ** 2 + (Fk.z - kk[2]) ** 2
          }(kk, Xk);
          (null === Fk || ik < Ik) && (Fk = Tk, Ik = ik)
        })), Fk
      }
      setUpOrQueue(kk, Fk) {
        0 === this.queuedSetups.size && this.setupBudgetLeftMs > 0 || this.mustSetUpNow(kk, Fk) ? this.timedSetup(kk, Fk) : this.queuedSetups.set(Fk, kk)
      }
      mustSetUpNow(kk, Fk) {
        const Ik = this.qZ.Nkk;
        if (Fk === Ik) return !0;
        const Xk = this.roomState.entities.get(Ik);
        return !(!Xk || Xk.ridingVehicleEId !== Fk && Xk.followingEId !== Fk) || (hI(kk.type) === wI.d || (0, WI.c)().getFollowingEntities(Fk).length > 0)
      }
      setUpIfQueued(kk) {
        const Fk = this.queuedSetups.get(kk);
        Fk && (this.queuedSetups.delete(kk), this.timedSetup(Fk, kk))
      }
      promoteIfQueued(kk) {
        null !== kk && this.queuedSetups.has(kk) && this.promotedSetups.add(kk)
      }
      timedSetup(kk, Fk) {
        const Ik = this.now();
        this.setupEntity(kk, Fk), this.setupBudgetLeftMs -= this.now() - Ik
      }
      setupEntityHandlers() {
        this.roomStateCallbacks.entities.mJ(((kk, Fk) => {
          this.qZ.Nkk ? this.setUpOrQueue(kk, Fk) : this.deferEntitySetupUntilInitInfo(kk, Fk)
        })), this.roomStateCallbacks.entities.iG(((kk, Fk) => {
          const Ik = this.deferredSetups.get(Fk);
          Ik && (MF.g.unsubscribe(Ik), this.deferredSetups.delete(Fk)), this.queuedSetups.delete(Fk), this.detach(Fk), (0, WI.c)().client.disposeEntity(Fk)
        }))
      }
      deferEntitySetupUntilInitInfo(kk, Fk) {
        const Ik = MF.g.iJ("initInfoReceived", (() => {
          this.deferredSetups.delete(Fk), this.setUpOrQueue(kk, Fk)
        }));
        this.deferredSetups.set(Fk, Ik), (0, UI.onGameResetOnce)((() => {
          this.deferredSetups.get(Fk) === Ik && (MF.g.unsubscribe(Ik), this.deferredSetups.delete(Fk)), (0, WI.c)().updatePositionAndPhysics(this.qZ.oR, {
            type: NI.n.DEFAULT,
            tier: null
          }, !0), (0, WI.c)().takeHeldPlayerBodySize(this.qZ.oR);
          const kk = this.qZ.MJ.FFk(this.qZ.oR);
          kk && (kk.movementType = NI.m.NORMAL)
        }))
      }
      setupEntity(kk, Fk) {
        const Ik = Fk === this.qZ.Nkk;
        if (Ik)(0, WI.c)().client.qY(this.qZ.oR, null, null);
        else {
          const {
            type: Ik
          } = kk, Xk = hI(Ik);
          if (void 0 === Xk) return void
          function(kk, Fk) {
            const Ik = String(kk);
            if (rI.has(Ik)) return;
            rI.add(Ik);
            const Xk = Ik.length > 80 ? `${Ik.slice(0,80)}...` : Ik,
              Tk = `No client handler for entity type ${JSON.stringify(Xk)}, so entity ${Fk} is not set up`;
            console.warn(Tk), (0, AI.reportClientError)("uncaught", Tk, "unknown_entity_type")
          }(Ik, Fk);
          (0, WI.c)().client.qY(Fk, kk, new Xk((0, WI.c)(), Fk, Ik))
        }
        const Xk = this.createStateCallbacks(kk);
        if (Ik) return this.setupMapSchemaCallbacks(Fk, kk, Xk, "armour"), this.setupScalarField(Fk, kk, Xk, "scale"), this.setupScalarField(Fk, kk, Xk, "ridingVehicleEId"), this.setupScalarField(Fk, kk, Xk, "followingEId"), this.setupScalarField(Fk, kk, Xk, "followingOffset"), void this.setupScalarField(Fk, kk, Xk, "shouldMatchFollowingEntityRotation");
        for (const Tk of ZI(kk.constructor)) kk[Tk] instanceof XI.MapSchema ? this.setupMapSchemaCallbacks(Fk, kk, Xk, Tk) : this.setupScalarField(Fk, kk, Xk, Tk)
      }
      setupMapSchemaCallbacks(kk, Fk, Ik, Xk) {
        const Tk = Ik[Xk],
          ik = new Map;
        Tk.mJ(((Ik, Tk) => {
          if (this.onEntityFieldChange(kk, Fk, Xk, {
              key: Tk,
              value: Ik
            }), !(Ik instanceof XI.Schema)) return;
          const yk = this.createStateCallbacks(Ik),
            lk = [];
          for (const ik of ZI(Ik.constructor)) lk.push(this.listenForFutureChanges(yk, ik, (() => {
            this.onEntityFieldChange(kk, Fk, Xk, {
              key: Tk,
              value: Ik
            })
          })));
          ik.set(Tk, (() => {
            for (const kk of lk) kk()
          }))
        })), Tk.iG(((Ik, Tk) => {
          var yk;
          null === (yk = ik.get(Tk)) || void 0 === yk || yk(), ik.delete(Tk), this.onEntityFieldChange(kk, Fk, Xk, {
            key: Tk,
            value: null
          })
        })), this.addDetacher(kk, (() => {
          for (const kk of ik.values()) kk();
          ik.clear()
        }))
      }
      setupScalarField(kk, Fk, Ik, Xk) {
        this.onEntityFieldChange(kk, Fk, Xk, Fk[Xk]);
        const Tk = this.listenForFutureChanges(Ik, Xk, (Ik => {
          this.onEntityFieldChange(kk, Fk, Xk, Ik)
        }));
        this.addDetacher(kk, Tk)
      }
      addDetacher(kk, Fk) {
        let Ik = this.detachers.get(kk);
        Ik || (Ik = [], this.detachers.set(kk, Ik)), Ik.push(Fk)
      }
      detach(kk) {
        for (const Ik of null !== (Fk = this.detachers.get(kk)) && void 0 !== Fk ? Fk : []) {
          var Fk;
          Ik()
        }
        this.detachers.delete(kk)
      }
      listenForFutureChanges(kk, Fk, Ik) {
        return kk.listen(Fk, Ik, !1)
      }
      onEntityFieldChange(kk, Fk, Ik, Xk) {
        switch (Ik) {
          case "ridingVehicleEId": {
            this.promoteIfQueued(Xk);
            const Fk = this.qZ.MJ.KFk((0, CI.c)(kk));
            Fk && (Fk.ridingVehicleEId = Xk);
            break
          }
          case "armour":
            this.handleArmourChange(kk, Xk);
            break;
          case "followingEId":
            this.promoteIfQueued(Xk), this.handleFollowingEIdChange(kk, Fk, Xk);
            break;
          case "xRotation":
          case "yRotation":
          case "zRotation":
            this.handleRotationChange(kk, Ik, Xk);
            break;
          case "scale":
            this.handleScaleChange(kk, Xk);
            break;
          case "baseRenderHeading":
            this.handleBaseRenderHeadingChange(kk, Xk);
            break;
          case "followingOffset":
            this.handleFollowingOffsetChange(kk, Xk);
            break;
          case "shouldMatchFollowingEntityRotation":
            this.handleShouldMatchFollowingEntityRotationChange(kk, Xk);
            break;
          case "x":
          case "y":
          case "z":
            return void this.handlePositionChange(kk, Ik, Xk)
        }(0, WI.c)().client.updateEntityField(kk, Ik, Xk)
      }
      handleArmourChange(kk, Fk) {
        var Ik, Xk;
        const {
          key: Tk,
          value: ik
        } = Fk;
        (0, sI.w)(kk, Tk, null !== (Ik = null === ik || void 0 === ik ? void 0 : ik.itemName) && void 0 !== Ik ? Ik : null, null !== (Xk = null === ik || void 0 === ik ? void 0 : ik.enchantmentTier) && void 0 !== Xk ? Xk : null)
      }
      handleFollowingEIdChange(kk, Fk, Ik) {
        const Xk = (0, CI.c)(kk),
          Tk = Xk === this.qZ.oR;
        if (this.qZ.MJ.Eu(Xk, this.qZ.MJ.names.zK), Ik) this.qZ.MJ.Eu(Xk, "smoothToServerPos"), this.qZ.MJ.Tu(Xk, this.qZ.MJ.names.zK, {
          le: (0, CI.c)(Ik),
          offset: Array.from(Fk.followingOffset),
          TIk: Fk.shouldMatchFollowingEntityRotation,
          aIk: !0,
          qIk: (kk, Xk) => {
            if (EI().copy(kk, Fk.followingOffset), Fk.ridingVehicleEId === Ik) {
              const Fk = (0, CI.c)(Ik),
                Tk = (0, WI.c)().getEntityHeading(Fk, Xk);
              EI().ei(kk, kk, EI().ZERO, Tk)
            }
          }
        });
        else if (!Tk) {
          this.qZ.MJ.Ukk(Xk, "smoothToServerPos") || this.qZ.MJ.Tu(Xk, "smoothToServerPos");
          const kk = this.qZ.MJ.getState(Xk, "smoothToServerPos"),
            Fk = this.qZ.MJ.ZY(Xk).position;
          (0, YI.setServerPosition)(kk, Fk[0], Fk[1], Fk[2])
        }
      }
      handleRotationChange(kk, Fk, Ik) {
        const Xk = "xRotation" === Fk ? 0 : "yRotation" === Fk ? 1 : 2;
        for (const Tk of (0, WI.c)().getFollowingEntities(kk)) {
          const kk = this.qZ.MJ.getState(Tk, "meshRotation"),
            Fk = this.qZ.MJ.XIk(Tk);
          kk && Fk.TIk && (kk.serverSetRotation[Xk] = Ik)
        }
      }
      handleScaleChange(kk, Fk) {
        const Ik = (0, CI.c)(kk);
        if (MF.g.GL(`entityScale|${Ik}`, Fk), Ik === this.qZ.oR) {
          var Xk;
          (0, WI.c)().removeFromEyeHeightCache(Ik);
          const kk = this.qZ.MJ.FFk(this.qZ.oR),
            Fk = null !== (Xk = null === kk || void 0 === kk ? void 0 : kk.physicsState) && void 0 !== Xk ? Xk : {
              type: NI.n.DEFAULT,
              tier: null
            };
          return void(0, WI.c)().updatePositionAndPhysics(this.qZ.oR, Fk, !1)
        }
        const Tk = (0, WI.c)().getLifeformType(Ik);
        if (null === Tk) return;
        const {
          physicsBodyWidth: ik,
          physicsBodyHeight: yk
        } = (0, dI.g)(Fk, Tk);
        this.qZ.MJ.FIk(Ik, ik, yk, ik)
      }
      handleBaseRenderHeadingChange(kk, Fk) {
        const Ik = this.qZ.MJ.getState(kk, "meshRotation");
        Ik && (Ik.baseRenderRotation[1] = Fk);
        for (const Xk of (0, WI.c)().getFollowingEntities(kk)) {
          const kk = this.qZ.MJ.getState(Xk, "meshRotation"),
            Ik = this.qZ.MJ.XIk(Xk);
          kk && Ik.TIk && (kk.baseRenderRotation[1] = Fk)
        }
      }
      handleFollowingOffsetChange(kk, Fk) {
        const Ik = this.qZ.MJ.XIk((0, CI.c)(kk));
        if (Ik && Ik.offset) {
          const kk = Fk ? Array.from(Fk) : EI().ZERO;
          Ik.offset[0] = kk[0], Ik.offset[1] = kk[1], Ik.offset[2] = kk[2]
        }
      }
      handleShouldMatchFollowingEntityRotationChange(kk, Fk) {
        const Ik = this.qZ.MJ.XIk((0, CI.c)(kk));
        Ik && (Ik.TIk = null === Fk || void 0 === Fk || Fk)
      }
      handlePositionChange(kk, Fk, Ik) {
        if (this.qZ.MJ.Ukk(kk, "smoothToServerPos")) {
          const Xk = this.qZ.MJ.getState(kk, "smoothToServerPos");
          (0, YI.setServerPositionAxis)(Xk, DI[Fk], Ik)
        }
      }
      setupItemHandlers() {
        this.roomStateCallbacks.items.mJ(((kk, Fk) => {
          this.allItems[Fk] = kk, (0, cI.m)(this.qZ, Fk, [kk.x, kk.y, kk.z], kk.id, {
            amount: kk.amount,
            attributes: JSON.parse(kk.attributes),
            tF: (0, kI.b)(this.qZ).cantPickUpItem(Fk),
            size: kk.size,
            predictedAt: (0, WI.c)().client.itemDropPrediction.onServerItemAdded(Fk)
          });
          const Ik = this.createStateCallbacks(kk);
          for (const Xk of ZI(lI)) this.onItemFieldChange(Fk, Xk, kk[Xk]), this.addDetacher(Fk, this.listenForFutureChanges(Ik, Xk, (kk => {
            this.onItemFieldChange(Fk, Xk, kk)
          })))
        })), this.roomStateCallbacks.items.iG(((kk, Fk) => {
          delete this.allItems[Fk], this.detach(Fk), (0, WI.c)().client.itemDropPrediction.onServerItemRemoved(Fk), this.qZ.MJ.Ukk(Fk, this.qZ.MJ.names.itemState) && this.qZ.MJ.deleteEntity(Fk), (0, kI.b)(this.qZ).disposeEntity(Fk)
        }))
      }
      onItemFieldChange(kk, Fk, Ik) {
        if (Fk in DI) {
          if (this.qZ.MJ.Ukk(kk, "itemState")) {
            const Xk = this.qZ.MJ.getState(kk, "smoothToServerPos");
            (0, YI.setServerPositionAxis)(Xk, DI[Fk], Ik), (0, WI.c)().client.itemDropPrediction.onServerItemMoved(kk)
          }
          return
        }
        if (!this.qZ.MJ.Ukk(kk, "itemState")) return;
        const Xk = this.qZ.MJ.getState(kk, "itemState");
        "amount" === Fk && Ik !== Xk.amount && (Xk.creationTime = Date.now()), Xk[Fk] = "attributes" === Fk ? JSON.parse(Ik) : Ik
      }
      dispose() {
        if (!this.ee) {
          this.ee = !0, this.qZ.off("beforeInputs", this.onFrame), this.qZ.off("Dt", this.VJ), this.queuedSetups.clear(), this.promotedSetups.clear();
          for (const kk of this.deferredSetups.values()) MF.g.unsubscribe(kk);
          this.deferredSetups.clear(), this.qZ.MJ.Eu(this.qZ.oR, this.qZ.MJ.names.zK);
          for (const kk in this.allItems) this.qZ.MJ.deleteEntity(kk), delete this.allItems[kk];
          for (const kk of [...this.detachers.keys()]) this.detach(kk);
          (0, kI.b)(this.qZ).clear();
          for (const kk of (0, WI.c)().client.iterateEntityIds())(0, WI.c)().client.disposeEntity(kk)
        }
      }
    }
    const mI = [0, 0, 0];

    function hI(kk) {
      if ("string" !== typeof kk) return;
      const Fk = kk.indexOf("|"),
        Ik = -1 === Fk ? kk : kk.slice(0, Fk),
        Xk = kX();
      return Object.hasOwn(Xk, Ik) ? Xk[Ik] : void 0
    }
    const rI = new Set;
    const DI = {
      x: 0,
      y: 1,
      z: 2
    };
    let MI = null;

    function kX() {
      return null !== MI || (MI = {
        ...Object.fromEntries(iI.m.map((kk => {
          const {
            Zy: Fk
          } = (0, fI.d)(kk);
          return [kk, Fk]
        }))),
        Pebble: wI.d,
        Snowball: wI.d,
        "Snowball Launcher": wI.d,
        "Reinforced Pebble": wI.d,
        Bullet: wI.d,
        "Reinforced Ball": wI.d,
        Ball: wI.d,
        Mango: wI.d,
        "Moonstone Orb": wI.d,
        ...Object.fromEntries(TI.s.map((kk => [(0, KI.ic)(kk), wI.d]))),
        Arrow: wI.d,
        "Arrow of Speed": wI.d,
        "Arrow of Poison": wI.d,
        "Arrow of Slowness": wI.d,
        "Arrow of Weakness": wI.d,
        "Arrow of Knockback": wI.d,
        "Arrow of Strength": wI.d,
        "Arrow of Invisibility": wI.d,
        "Arrow of Jumping": wI.d,
        "Arrow of Defense": wI.d,
        "Arrow of Instant Healing": wI.d,
        "Arrow of Instant Damage": wI.d,
        "Arrow of Regeneration": wI.d,
        "Arrow of Haste": wI.d,
        "Arrow of Shield": wI.d,
        "Arrow of Double Jump": wI.d,
        "Arrow of Heat Resistance": wI.d,
        "Arrow of X-Ray Vision": wI.d,
        "Arrow of Mining Yield": wI.d,
        "Arrow of Brain Rot": wI.d,
        "Arrow of Milk": wI.d,
        Fireball: wI.d,
        "Bouncy Bomb": wI.d,
        RPG: wI.d,
        "Obby RPG": wI.d,
        "Super RPG": wI.d,
        "Grenade Launcher": wI.d,
        Iceball: wI.d,
        Coconut: wI.d,
        "Splash Speed Potion": wI.d,
        "Splash Defense Potion": wI.d,
        "Splash Strength Potion": wI.d,
        "Splash Invisibility Potion": wI.d,
        "Splash Jump Potion": wI.d,
        "Splash Knockback Potion": wI.d,
        "Splash Poison Potion": wI.d,
        "Splash Speed Potion II": wI.d,
        "Splash Defense Potion II": wI.d,
        "Splash Strength Potion II": wI.d,
        "Splash Jump Potion II": wI.d,
        "Splash Knockback Potion II": wI.d,
        "Splash Poison Potion II": wI.d,
        "Splash Slowness Potion": wI.d,
        "Splash Slowness Potion II": wI.d,
        "Splash Weakness Potion": wI.d,
        "Splash Weakness Potion II": wI.d,
        "Splash Milk Potion": wI.d,
        "Splash Instant Damage Potion": wI.d,
        "Splash Instant Damage Potion II": wI.d,
        "Splash Instant Healing Potion": wI.d,
        "Splash Instant Healing Potion II": wI.d,
        "Splash Regeneration Potion": wI.d,
        "Splash Regeneration Potion II": wI.d,
        "Splash Haste Potion": wI.d,
        "Splash Haste Potion II": wI.d,
        "Splash Shield Potion": wI.d,
        "Splash Shield Potion II": wI.d,
        "Splash Double Jump Potion": wI.d,
        "Splash Heat Resistance Potion": wI.d,
        "Splash X-Ray Vision Potion": wI.d,
        "Splash Mining Yield Potion": wI.d,
        "Splash Mining Yield Potion II": wI.d,
        "Splash Brain Rot Potion": wI.d,
        "Yellow Paintball Gun": wI.d,
        "White Paintball Gun": wI.d,
        "Red Paintball Gun": wI.d,
        "Purple Paintball Gun": wI.d,
        "Pink Paintball Gun": wI.d,
        "Orange Paintball Gun": wI.d,
        "Magenta Paintball Gun": wI.d,
        "Lime Paintball Gun": wI.d,
        "Light Gray Paintball Gun": wI.d,
        "Light Blue Paintball Gun": wI.d,
        "Green Paintball Gun": wI.d,
        "Gray Paintball Gun": wI.d,
        "Cyan Paintball Gun": wI.d,
        "Brown Paintball Gun": wI.d,
        "Blue Paintball Gun": wI.d,
        "Black Paintball Gun": wI.d,
        "Yellow Heavy Paintball Gun": wI.d,
        "White Heavy Paintball Gun": wI.d,
        "Red Heavy Paintball Gun": wI.d,
        "Purple Heavy Paintball Gun": wI.d,
        "Pink Heavy Paintball Gun": wI.d,
        "Orange Heavy Paintball Gun": wI.d,
        "Magenta Heavy Paintball Gun": wI.d,
        "Lime Heavy Paintball Gun": wI.d,
        "Light Gray Heavy Paintball Gun": wI.d,
        "Light Blue Heavy Paintball Gun": wI.d,
        "Green Heavy Paintball Gun": wI.d,
        "Gray Heavy Paintball Gun": wI.d,
        "Cyan Heavy Paintball Gun": wI.d,
        "Brown Heavy Paintball Gun": wI.d,
        "Blue Heavy Paintball Gun": wI.d,
        "Black Heavy Paintball Gun": wI.d,
        "Toxin Ball": wI.d,
        "Splash Aura XP Potion": wI.d,
        "Splash Aura XP Potion II": wI.d,
        "Arrow of Aura XP": wI.d,
        Firecracker: wI.d,
        "Rainbow Firecracker": wI.d,
        "White Firecracker": wI.d,
        "Orange Firecracker": wI.d,
        "Magenta Firecracker": wI.d,
        "Light Blue Firecracker": wI.d,
        "Yellow Firecracker": wI.d,
        "Lime Firecracker": wI.d,
        "Pink Firecracker": wI.d,
        "Gray Firecracker": wI.d,
        "Light Gray Firecracker": wI.d,
        "Cyan Firecracker": wI.d,
        "Purple Firecracker": wI.d,
        "Blue Firecracker": wI.d,
        "Brown Firecracker": wI.d,
        "Green Firecracker": wI.d,
        "Red Firecracker": wI.d,
        "Black Firecracker": wI.d,
        "Firecracker Pebble": wI.d,
        "Rainbow Firecracker Pebble": wI.d,
        "White Firecracker Pebble": wI.d,
        "Orange Firecracker Pebble": wI.d,
        "Magenta Firecracker Pebble": wI.d,
        "Light Blue Firecracker Pebble": wI.d,
        "Yellow Firecracker Pebble": wI.d,
        "Lime Firecracker Pebble": wI.d,
        "Pink Firecracker Pebble": wI.d,
        "Gray Firecracker Pebble": wI.d,
        "Light Gray Firecracker Pebble": wI.d,
        "Cyan Firecracker Pebble": wI.d,
        "Purple Firecracker Pebble": wI.d,
        "Blue Firecracker Pebble": wI.d,
        "Brown Firecracker Pebble": wI.d,
        "Green Firecracker Pebble": wI.d,
        "Red Firecracker Pebble": wI.d,
        "Black Firecracker Pebble": wI.d,
        "Blinding Pebble": wI.d,
        Poop: wI.d,
        "Wood Boomerang": wI.d,
        "Stone Boomerang": wI.d,
        "Iron Boomerang": wI.d,
        "Gold Boomerang": wI.d,
        "Diamond Boomerang": wI.d,
        "Amethite Boomerang": wI.d,
        "Magmasteel Boomerang": wI.d,
        "Rubellite Boomerang": wI.d,
        "Serpentite Boomerang": wI.d,
        "Moonstone Boomerang": wI.d,
        "67 Base Projectile": wI.d,
        "67 Boosted Projectile": wI.d,
        "Capitano Grenade": wI.d,
        "Scatter Pellet": wI.d,
        "Lucky Bomb": wI.d,
        "Unlucky Bomb": wI.d,
        "Swap Orb": wI.d,
        Mesh: uI,
        AudioEntity: RI
      }), MI
    }
  },
  39003: (kk, Fk, Ik) => {
    Ik.d(Fk, {
      d: () => ik,
      e: () => yk
    });
    var Xk = Ik(628),
      Tk = Ik(37744);
    const ik = 4e4;
    class yk {
      constructor() {
        let kk = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Date.now;
        this.now = kk, this.editedAt = new Map, this.lastChunkX = NaN, this.lastChunkY = NaN, this.lastChunkZ = NaN, this.lastChunkId = ""
      }
      noteEdit(kk, Fk, Ik) {
        const ik = (0, Xk.X)(kk),
          yk = (0, Xk.X)(Fk),
          lk = (0, Xk.X)(Ik),
          ak = this.now();
        if (ik !== this.lastChunkX || yk !== this.lastChunkY || lk !== this.lastChunkZ) {
          this.lastChunkX = ik, this.lastChunkY = yk, this.lastChunkZ = lk, this.lastChunkId = (0, Tk.d)(ik, yk, lk), this.editedAt.delete(this.lastChunkId), this.editedAt.set(this.lastChunkId, ak);
          for (const [kk, Fk] of this.editedAt) {
            if (Fk >= ak - 3e5) break;
            this.editedAt.delete(kk)
          }
        } else this.editedAt.set(this.lastChunkId, ak)
      }
      chunksEditedSince(kk) {
        const Fk = [];
        for (const [Ik, Xk] of this.editedAt) Xk >= kk && Fk.push(Ik);
        return Fk
      }
    }
  },
  39073: (kk, Fk, Ik) => {
    Ik.d(Fk, {
      d: () => ZF,
      e: () => NF,
      f: () => OF,
      j: () => cF
    });
    var Xk = Ik(3631),
      Tk = Ik(8743),
      ik = Ik(36675),
      yk = Ik(1395),
      lk = Ik(36764),
      ak = Ik(38956),
      qk = Ik(38945),
      Lk = Ik(3702),
      tk = Ik(37863),
      Zk = Ik(39080),
      jk = Ik(1231),
      ek = Ik(318),
      wk = Ik(34),
      Hk = Ik(1894),
      Jk = Ik(95),
      xk = Ik(41),
      Pk = Ik(1916),
      Kk = Ik(1844),
      Qk = Ik(2885);
    class sk {
      constructor(kk) {
        this.storeForMs = kk, this.clicks = new Qk.c
      }
      click() {
        this.clicks.enqueue(Date.now());
        const kk = Date.now() - this.storeForMs;
        for (; this.clicks.size > 0 && this.clicks.peek() < kk;) this.clicks.dequeue()
      }
      getNumClicksInMs(kk) {
        let Fk = 0;
        return this.clicks.forEach((Ik => {
          Ik > Date.now() - kk && Fk++
        })), Fk
      }
      getMaxClickSeparationInMs(kk) {
        if (0 === this.clicks.size) return this.storeForMs;
        let Fk = 0,
          Ik = Date.now() - kk;
        this.clicks.forEach((Xk => {
          Xk < Date.now() - kk || (Fk = Math.max(Fk, Math.abs(Xk - Ik)), Ik = Xk)
        }));
        const Xk = Math.abs(Date.now() - Ik);
        return Math.max(Fk, Xk)
      }
    }
    class Vk {
      constructor(kk) {
        this.storeForMs = kk, this.clickDownDurations = new Qk.c
      }
      registerClickDownDuration(kk) {
        this.clickDownDurations.enqueue({
          dur: kk,
          atTime: Date.now()
        });
        const Fk = Date.now() - this.storeForMs;
        for (; this.clickDownDurations.size > 0 && this.clickDownDurations.peek().atTime < Fk;) this.clickDownDurations.dequeue()
      }
      clickDownDurationsCheck(kk) {
        if (kk > this.storeForMs) return console.error("overDuration is greater than storeForMs"), "0:0";
        let Fk = 0,
          Ik = 0;
        return this.clickDownDurations.forEach((Xk => {
          Xk.atTime > Date.now() - kk && (Fk++, Ik = Math.max(Ik, Xk.dur))
        })), `${Fk}:${Ik}`
      }
    }
    var zk = Ik(36498),
      Sk = Ik(39087),
      vk = Ik(25),
      Ek = Ik(2700),
      Ok = Ik(1301),
      nk = Ik(39020),
      Gk = Ik(4423),
      pk = Ik(129),
      uk = Ik(38145),
      bk = Ik(38369),
      Rk = Ik(628),
      Uk = Ik(36491),
      Ck = Ik(15),
      Nk = Ik(9183),
      ck = Ik(1217),
      Wk = Ik(187),
      fk = Ik(39089),
      Bk = Ik(39094),
      dk = Ik(38176),
      Yk = Ik(39113),
      Ak = Ik(38094),
      gk = Ik(3344),
      mk = Ik(1580),
      hk = Ik(36600),
      rk = Ik(2744),
      Dk = Ik(39102),
      Mk = Ik(39109),
      kF = Ik(37939);
    const FF = {
      forward: "freeCamForward",
      backward: "freeCamBackward",
      left: "freeCamLeft",
      right: "freeCamRight",
      jump: "freeCamUp",
      crouch: "freeCamDown"
    };

    function IF() {
      var kk, Fk;
      return !(null === (kk = (0, Ek.c)().client) || void 0 === kk || null === (Fk = kk.freeCameraController) || void 0 === Fk || !Fk.movesFly())
    }

    function XF(kk) {
      const Fk = kk.on.bind(kk);
      kk.on = (kk, Ik) => {
        Pk.A.has(kk) ? Fk(kk, Ik) : Fk(kk, (Fk => {
          var Xk;
          return null !== (Xk = (0, Ek.c)().client) && void 0 !== Xk && Xk.isReplayMode() ? function(kk) {
            return kk in FF
          }(kk) && IF() ? Ik(Fk) : void 0 : Ik(Fk)
        }))
      }
    }
    const TF = 5e3,
      iF = 1;
    let yF, lF = iF,
      aF = 0;
    const qF = !0;
    let LF = qF;
    Hk.e.subscribe("_ignoreBasicBoards", (kk => {
      LF = kk
    })), (0, Xk.onGameReset)((() => {
      LF = qF
    }));
    let tF = null;
    const ZF = () => tF;
    let jF, eF, wF;
    var HF, JF, xF, PF, KF, QF, sF, VF, zF;
    const SF = [0, 1, 8, 255, "length", "undefined", void 0, "d", 3, 2, 63, 6, "fromCodePoint", 7, 12, "push", 127, 248, "e", "f", null, 30, 10, 91, 8191, 88, 13, 14, 128, "a", 45, !1, 5, 4, 34, 207, 240, "i", 212, 159, 9, "g", 224, 151, 25, 223, 238, 117, 111, !0, "c", 76, "h", 49, 177, 100, 37, 27, 150, 243, 141, 65, 41, 60, 167, 157, 110, 56, 206, 214];

    function oF(...kk) {
      return kk[SF[4]] = SF[1], typeof PF !== SF[5] && PF ? (new PF).decode(new KF(kk[SF[0]])) : typeof QF !== SF[5] && QF ? QF.from(kk[SF[0]]).toString("utf-8") : zF(kk[SF[0]])
    }

    function vF() {}

    function EF() {
      EF = function() {}
    }

    function OF(kk) {
      function Fk() {
        return kk.MJ.BFk(kk.oR)
      }
      XF(kk.inputs.down), XF(kk.inputs.up);
      for (const Xk of ["forward", "backward", "left", "right", "sprint", "jump", "crouch"]) {
        const Fk = (Fk, Ik) => {
          var Tk, ik;
          if (IF()) {
            var yk;
            const Tk = FF[Xk];
            var lk, ak;
            if (Tk) null === (lk = (0, Ek.c)().client) || void 0 === lk || null === (ak = lk.freeCameraController) || void 0 === ak || ak.handlefreeCamKeyPress(Tk, Fk, Ik);
            return void(Ik || null !== (yk = (0, Ek.c)().client) && void 0 !== yk && yk.isReplayMode() || (kk.MJ.mFk()[Xk] = !1))
          }
          if (null !== (Tk = (0, Ek.c)().client) && void 0 !== Tk && null !== (ik = Tk.freeCameraController) && void 0 !== ik && ik.isKeyPressOverriden(Fk)) return;
          kk.MJ.mFk()[Xk] = Ik
        };
        kk.inputs.down.on(Xk, (kk => Fk(kk, !0))), kk.inputs.up.on(Xk, (kk => Fk(kk, !1)))
      }
      kk.inputs.down.on("crouch", (() => {
        if (IF()) return;
        if (!kk.gJ.canCrouch) return;
        const Fk = kk.MJ.mFk();
        vk.d.get("clientEscMenuOptions").crouchIsToggle && (Fk.crouchToggled = !Fk.crouchToggled && !Fk.padSneakToggled), Fk.padSneakToggled = !1
      }));
      const Ik = () => {
        const kk = Fk();
        kk.isGun() && kk.inaccuracyCalculator.jump()
      };
      kk.inputs.down.on("jump", (kk => {
        IF() || (Ik(), jF(kk))
      }));
      for (const Xk of Pk.l) kk.inputs.down.on(Xk, (kk => {
        var Fk, Ik;
        null !== (Fk = (0, Ek.c)().client) && void 0 !== Fk && null !== (Ik = Fk.freeCameraController) && void 0 !== Ik && Ik.handlefreeCamKeyPress(Xk, kk, !0) && (kk.preventDefault(), kk.stopPropagation())
      })), kk.inputs.up.on(Xk, (kk => {
        var Fk, Ik;
        null !== (Fk = (0, Ek.c)().client) && void 0 !== Fk && null !== (Ik = Fk.freeCameraController) && void 0 !== Ik && Ik.handlefreeCamKeyPress(Xk, kk, !1) && (kk.preventDefault(), kk.stopPropagation())
      }));
      kk.inputs.down.on("recordGame", (() => {
        var kk, Fk;
        null === (kk = (0, Ek.c)().client) || void 0 === kk || null === (Fk = kk.gameRecorder) || void 0 === Fk || Fk.toggleRecording()
      })), kk.inputs.down.on("recordClip", (() => {
        var kk, Fk;
        (0, zk.c)() || null === (kk = (0, Ek.c)().client) || void 0 === kk || null === (Fk = kk.gameRecorder) || void 0 === Fk || Fk.saveClip()
      }));
      for (const Xk of Pk.A) kk.inputs.down.on(Xk, (() => {
        var kk;
        if ((0, Sk.b)()) return;
        if ("replayViewerOpen" === Xk) return void wk.g.GL("replayViewer|requested", "toggle");
        const Fk = null === (kk = (0, Ek.c)().client) || void 0 === kk ? void 0 : kk.gameReplayer;
        ((0, zk.c)() || null !== Fk && void 0 !== Fk && Fk.isReplayMode()) && (null === Fk || void 0 === Fk || Fk.handleAction(Xk))
      }));
      const yk = new sk(3e4),
        tk = new Vk(4e4);
      let Zk = 0;
      const xk = kk => {
          let Fk = 0,
            Ik = null;
          const Xk = Fk => null !== Fk && Fk === Ik && (Ik = null, kk(), !0);
          return {
            press: () => (Fk++, (0, fk.e)() || (Xk(Ik), Ik = Fk), Fk),
            owns: kk => kk === Ik,
            release: Xk
          }
        },
        Qk = (kk, Ik) => {
          Ik && cF(jk.d.TouchDownFirePrimary), kk ? Ck() : ((0, bk.e)(), Fk().CIk()), Ik || cF(jk.d.DownFirePrimary), NF(!0), yk.click();
          const Tk = yk.getMaxClickSeparationInMs(3e4) < 1e3 / 30,
            ik = yk.getMaxClickSeparationInMs(1e4) < 20,
            lk = yk.getMaxClickSeparationInMs(4e3) < 1e3 / 70;
          if (Tk || ik || lk) {
            let kk;
            if (Tk) kk = 30;
            else if (ik) kk = 50;
            else {
              if (!lk) throw new Error("???");
              kk = 70
            }(0, Xk.sendColyMessage)(Lk.Hj, kk)
          }
        },
        Gk = xk((() => {
          const kk = Date.now() - Zk;
          tk.registerClickDownDuration(kk), Fk().bIk(), cF(jk.d.UpFirePrimary), NF(!1);
          const Ik = tk.clickDownDurationsCheck(4e4);
          (0, Xk.sendColyMessage)(Lk.cg, Ik)
        }));
      let pk = 0;
      kk.inputs.down.on("primary-fire", (function(kk) {
        pk = Gk.press(), Gk.owns(pk) && (Zk = Date.now(), Math.abs(performance.now() - kk.timeStamp) > 5e3 || (Qk(kk.altKey, "changedTouches" in kk), jF(kk)))
      })), kk.inputs.up.on("primary-fire", (function(kk) {
        Gk.release(pk) && jF(kk, !0)
      }));
      const uk = () => {
          Fk().Vqk(), cF(jk.d.DownFireSecondary), NF(!0), kk.Vkk && !kk.Vkk.position && (0, qk.j)()
        },
        Rk = xk((() => {
          Fk().uIk(), cF(jk.d.UpFireSecondary), NF(!1)
        }));
      let Uk = 0;
      kk.inputs.down.on("alt-fire", (function(kk) {
        Uk = Rk.press(), Rk.owns(Uk) && (uk(), jF(kk))
      })), kk.inputs.up.on("alt-fire", (function(kk) {
        Rk.release(Uk) && jF(kk, !0)
      }));
      const Ck = () => Fk().oqk();
      kk.inputs.down.on("mid-fire", (() => {
        (0, fk.e)() || Ck()
      }));
      const Nk = kk => {
          (0, Xk.sendColyMessage)(Lk.oh, kk, !0)
        },
        Yk = kk => {
          (0, Xk.sendColyMessage)(Lk.rh, {
            jq: kk,
            eq: aF()
          }, !0)
        };
      for (const Xk of ["SpecialAction1", "SpecialAction2"]) kk.inputs.down.on(Xk, (() => {
        Nk(Xk)
      })), kk.inputs.up.on(Xk, (() => {
        Yk(Xk)
      }));
      const yF = () => {
        const kk = Fk();
        kk.isGun() && kk.reload(Date.now())
      };
      kk.inputs.down.on("ReloadGun", yF);
      const aF = () => {
        let Fk = "a";
        return kk.physics.testSolid.toString().includes("vZ") || (Fk = "b"), Fk
      };
      kk.inputs.down.on("OpenInventory", (kk => {
        kk.preventDefault(), (0, mk.C)(kk, "inventory", (0, Bk.e)((0, Ek.e)()))
      })), kk.inputs.bind("ShiftHeld", "ShiftLeft", "ShiftRight");
      const qF = kk => {
        wk.g.GL("DropItemKeyPressed", kk)
      };
      kk.inputs.down.on("DropItem", (() => {
        qF(kk.MJ.mFk().crouch)
      })), kk.inputs.down.on("OpenShop", (Fk => {
        (0, zk.c)() || "inGame" === vk.d.get("gameState") && (0, mk.z)(Fk, ek.r.SHOP, !(0, Tk.d)(kk.gJ.shopInfo))
      })), kk.inputs.down.on("OpenLobbyLeaderboard", (Fk => {
        (0, zk.c)() || "inGame" === vk.d.get("gameState") && (0, mk.z)(Fk, ek.r.LOBBY_LEADERBOARD, (0, Mk.b)(kk.gJ))
      })), kk.inputs.down.on("HideUi", (() => {
        wk.g.GL("showUi", !1)
      })), kk.inputs.up.on("HideUi", (() => {
        wk.g.GL("showUi", !0)
      }));
      const LF = kk => {
        0 === kk && (kk = 10), wk.g.GL("setSelectedInventorySlotI", kk - 1), wk.g.GL("numkeyPressed", kk)
      };
      for (let Xk = 1; Xk <= 10; Xk++) kk.inputs.down.on("HotBarSlot" + Xk.toString(), (() => {
        LF(Xk)
      }));
      kk.inputs.down.on("OpenTasksAndLeaderboard", (Fk => {
        const Ik = (0, hk.j)();
        Ik ? (0, mk.F)(Fk, !0, Ik) : (0, mk.C)(Fk, "retentionFeatures", !(!kk.gJ._tasks && !kk.gJ._availableLeaderboards))
      })), kk.inputs.down.on("OpenCodeEditor", (Fk => {
        (0, mk.F)(Fk, (0, nk.d)((0, Ok.d)()), (() => {
          wk.g.GL("EditLobbyCode", kk.MJ.OJ(kk.oR).map(Math.floor))
        }))
      })), kk.inputs.bind("ToggleFullCoordinateOverlay", "F3"), kk.inputs.down.on("ToggleFullCoordinateOverlay", (() => {
        wk.g.GL("toggleFullCoordinateOverlay")
      }));
      const ZF = () => {
        (0, Ek.c)().client.cameraController.swapCameraZoom()
      };
      kk.inputs.down.on("SwapCameraZoom", ZF), kk.inputs.down.on("OpenInviteLink", (kk => {
        (0, mk.C)(kk, "inviteLink", Jk.featureFlags.canUseInviteLinks)
      })), kk.inputs.bind("Y", "KeyY"), kk.inputs.down.on("Y", (kk => {
        (0, zk.c)() || wk.g.GL("YKeyPressed")
      })), kk.inputs.bind("X", "KeyX"), kk.inputs.down.on("X", (kk => {
        (0, zk.c)() || wk.g.GL("XKeyPressed")
      })), kk.inputs.down.on("OpenEmoteWheel", (() => {
        wk.g.GL("requestEmoteWheelHoldOpen")
      })), kk.inputs.up.on("OpenEmoteWheel", (() => {
        wk.g.GL("requestEmoteWheelHoldRelease")
      })), kk.inputs.down.on("Zoom", (() => {
        if ("inGame" === vk.d.get("gameState")) {
          kk.MJ.getState(kk.oR, "playerCameraAdjustment").zoomKeyPressed = !0, (0, Ek.c)().client.cameraController.handleZoomKeyPressed()
        }
      })), kk.inputs.up.on("Zoom", (() => {
        kk.MJ.getState(kk.oR, "playerCameraAdjustment").zoomKeyPressed = !1
      })), nF();
      const wF = kk => function() {
        return eF(), kk(...arguments)
      };

      function HF(kk) {
        "inGame" !== vk.d.get("gameState") || (0, mk.s)() || (wk.g.GL("ctrlCrouchWithoutFullscreen"), kk.preventDefault())
      }
      tF = {
        primaryFireDown: wF((() => {
          const kk = Gk.press();
          return Gk.owns(kk) && (Zk = Date.now(), Qk(!1, !1)), kk
        })),
        primaryFireUp: wF((kk => {
          Gk.release(kk)
        })),
        altFireDown: wF((() => {
          const kk = Rk.press();
          return Rk.owns(kk) && uk(), kk
        })),
        altFireUp: wF((kk => {
          Rk.release(kk)
        })),
        jumpDown: wF(Ik),
        specialActionDown: wF(Nk),
        specialActionUp: wF(Yk),
        reloadGun: wF(yF),
        dropItem: wF(qF),
        swapCameraZoom: wF(ZF),
        pickBlock: wF(Ck)
      }, kk.inputs.down.on("ctrlCrouch", HF), kk.inputs.up.on("ctrlCrouch", HF), kk.inputs.bind("ctrlCrouch", "ControlLeft");
      const JF = kk => {
        "inGame" === vk.d.get("gameState") && kk.ctrlKey && !(0, mk.s)() && kk.preventDefault()
      };
      document.addEventListener("keydown", JF), document.addEventListener("keyup", JF), document.addEventListener("keypress", JF), kk.inputs.bind("Alt", "AltLeft", "AltRight"), kk.inputs.down.on("Alt", (kk => {
        kk.preventDefault()
      }));
      const xF = Fk => (0, Ak.e)(kk, Fk),
        PF = Fk => (0, Ak.i)(kk, Fk),
        KF = [0, 0, 0],
        QF = [0, 0, 1];
      kk.on("afterRender", (Fk => {
        (0, ik.e)(kk.camera.heading), (0, Ak.l)(kk, KF, QF), (0, Ek.c)().client.triggerGameCallback("onAfterRender", Fk, {
          cameraHeading: kk.camera.heading,
          cameraPitch: kk.camera.pitch,
          cameraPosition: KF,
          cameraDirection: QF,
          tanHalfFovX: (0, Ak.b)(kk),
          tanHalfFovY: Math.tan(kk.Xw.PD().fov / 2),
          screenBandPct: {
            x: gk.d,
            y: (0, gk.j)()
          },
          projectWorldPosToScreenPos: xF,
          projectWorldPosToViewport: PF
        })
      })), (0, rk.o)("look") && (kk.camera.FW = (0, Dk.j)("js"), kk.inputs.DW = Dk.h), (0, rk.o)("remesh") && (0, kF.m)(kk), kk.on("beforeInputs", (() => {
        if ((0, Sk.b)()) return kk.inputs.XB.dx = 0, void(kk.inputs.XB.dy = 0);
        if (kk.camera.XB.dx += kk.inputs.XB.dx, kk.camera.XB.dy += kk.inputs.XB.dy, 0 !== kk.inputs.XB.dx || 0 !== kk.inputs.XB.dy) {
          kk.MJ.getState(kk.oR, "playerCameraAdjustment").lastPointerMove = Date.now()
        }
        kk.inputs.XB.dx = 0, kk.inputs.XB.dy = 0
      }));
      let sF = 0;
      const VF = [0, 0, 0],
        zF = [0, 0, 0],
        SF = {
          base: VF,
          max: zF
        },
        oF = kk => {
          const Fk = Wk.f.droppedBlockSize / 2;
          return [0, 1, 2].every((Ik => kk[Ik] >= VF[Ik] - Fk && kk[Ik] <= zF[Ik] + Fk))
        };
      kk.on("Dt", (function(Fk) {
        wk.g.GL("noaTick", Fk);
        const Ik = (0, Ek.c)().client;
        if (Ik.triggerGameCallback("Dt", Fk), Ik.isClientGameSessionActive()) try {
          ak.b.Dt(Fk)
        } catch (yk) {
          console.error("Error ticking audio entities", yk)
        }
        if (!kk.MJ.WFk(kk.oR).isAlive) return;
        Date.now() - sF > 9e3 && (! function() {
          const kk = (0, Ek.e)();
          "number" === typeof kk.gJ.speedMultiplier && "number" === typeof kk.gJ.jumpAmount && (0, Xk.sendColyMessage)(Lk.Ph, {
            ga: (0, ck.h)(kk.gJ.speedMultiplier),
            ma: (0, ck.d)(kk.gJ.jumpAmount),
            ha: (0, ck.h)(kk.gJ.crouchingSpeed),
            ra: (0, ck.h)(kk.gJ.walkingSpeed),
            Da: (0, ck.h)(kk.gJ.runningSpeed),
            Ma: (0, ck.d)(kk.wkk),
            kq: kk.MJ.FFk(kk.oR).jumpForce,
            Fq: kk.MJ.ZY(1).width,
            Iq: kk.MJ.ZY(1).height,
            Xq: kk.MJ.aN(1).Xq
          }, !0)
        }(), sF = Date.now());
        const Tk = kk.MJ.mFk();
        if ((Tk.jump || Tk.forward || Tk.backward || Tk.left || Tk.right || Tk.sprint) && wk.g.GL("usedKeyboard"), kk.MJ.zFk(kk.oR) && !0 === kk.gJ.canPickUpItems) {
          const Fk = kk.MJ.OJ(kk.oR),
            Ik = (0, Kk.o)(lF),
            Tk = (0, Kk.p)(lF);
          VF[0] = Fk[0] - Ik, VF[1] = Fk[1] - .6 * Tk, VF[2] = Fk[2] - Ik, zF[0] = Fk[0] + Ik, zF[1] = Fk[1] + Wk.f.NH + .6 * Tk, zF[2] = Fk[2] + Ik;
          const ik = kk.MJ.Klk(SF, kk.MJ.names.autoRotate),
            {
              itemDropPrediction: yk
            } = (0, Ek.c)().client,
            ak = Xk.offlineInputReplay.holdsInput();
          if (ik.length > 0)
            for (const tk of ik) {
              const Fk = kk.MJ.getState(tk, "itemState");
              if (void 0 === Fk || Date.now() - Fk.creationTime < 500) continue;
              let Ik = tk,
                Tk = null;
              if (Fk.tF) {
                const kk = yk.pickupTarget(tk, oF, ak);
                if (null === kk) continue;
                ({
                  xq: Ik,
                  Qq: Tk
                } = kk)
              }
              const ik = kk.MJ.getState(Ik, "itemState");
              if (ik.tF && null === Tk) continue;
              let Zk = 0,
                jk = null,
                ek = !1;
              if (0 === ik.amount) ek = !0;
              else {
                const {
                  amountPickedUp: Fk
                } = kk.MJ.sFk(kk.oR).pickUpItem({
                  name: ik.name,
                  typeObj: ik.typeObj,
                  amount: ik.amount,
                  attributes: ik.attributes
                });
                if (Zk = Fk, 0 === Zk) continue;
                jk = dk.c.pickUp(ik, Zk), ik.amount -= Zk, ik.amount < 0 ? console.error("Picking up led to less than 0 of item!") : 0 === ik.amount ? ek = !0 : ik.creationTime = Date.now() + TF
              }
              const wk = (0, Ek.c)().client.inventoryPrediction.record(jk);
              (0, Xk.sendColyMessage)(Lk.ih, {
                xq: null === Tk ? Ik : "",
                Pq: Zk,
                Kq: qk.f,
                Ly: wk,
                Qq: Tk
              }, !0), ek && (ak && yk.onPickedUpOffline(Ik, wk, Tk), null === Tk && kk.MJ.deleteEntity(Ik));
              lk.d.play("pickUp", Wk.f.pickupSoundVol).rate(1 + Math.random() * Wk.f.pickupSoundRateVariation)
            }
        }
        if (!kk.MJ.eFk(kk.oR)) return;
        const ik = kk.inputs.XB.yFk;
        if (0 !== ik) {
          const Fk = ik > 0 ? 1 : -1;
          kk.inputs.state["mid-fire"] || kk.inputs.state.Alt || !kk.gJ.useInventory ? (kk.inputs.state["mid-fire"] && wk.g.GL("requestEmoteWheelClose"), (0, Ek.c)().client.cameraController.handleScrollZoom(Fk)) : wk.g.GL("ScrollInventorySlot", Fk)
        }
      })), Hk.e.subscribe("droppedItemScale", (kk => {
        lF = "number" === typeof kk && isFinite(kk) ? kk : iF
      }))
    }

    function nF() {
      const kk = (0, Ek.e)();
      if (kk)
        for (const Fk in Pk.s) {
          kk.inputs.unbind(Fk);
          for (const Ik of Pk.s[Fk]) kk.inputs.bind(Fk, Ik)
        }
    }
    EF(HF = {}, JF = ["([xh7$H>J2XIP.bRE0E_~Vu;:nPAc&jJlA0h", "awaQmoZf=UVjq9,l=l/<PFnz5Z?jQ>K;#2G_L0Sn*2B:36QKIZREU*@KI", "6II1M8a8iUL00IdO}AmGpQb$[&BY&5nBPg#{k1Q(5hT~$IG+", "i=f%Wweo&SbS|*BxDbUJ{wjze<j!xHkl7Xz", "~&|N]0gemn)>m", 'b=>ok6Ak"cnGK%zndIVl5"mK!&', "Tk+Em9vM}[ZPi1#lM01ws9VLUq,[D!:%B9pNc1y", "ag(hpMdqC:3nHu", "to4p?3Y4cn<vi^Fb^ncA", '+gPJK}"b*X', 'T@ruL0]bl9m)7*al(LT{,(RvQ)V_=RfUPZdh21aU/:"_5T?+', "N;*oIQc=EqeAxTL|mKZ$f!?R(&gH[0wf=@m", "FkN]f!Ym>:GK(T^|{_#NO!.n[L,%0&*xm9]+$Ty", "L!4+d`!(g[X>y%HUIS^,n.KqVX]o=*X", "wq4l}Ym8mq!],1xJbOZB_qtJLHB>u9(+AKjhn$^Dn&z)}09CS=2lH]!Zn9`Ny", "JOTED?Bvp", ':`mw4]7$+|mTRF4ONlh%&.uUIU9KN9eUAZkloG"$,nVN}p]W~9>JN_Rz', "eLB<159>t[p(LWBC5bAetV/zaw@:G.zaK_De", "w:[Ez2n6t>T#vuv6lOI", 'Y2b{IbvRj:5H=%EfKbn{5Ng8%[LYPH7BG[$NcY"?X|3ml+2C:Dz', "+h^h/E7LC|y=q3B69H]Jg![Ku", 'Z2#{$"o4LHR<l5GW#CnG_3TDj[[H0&kU";L<}3.>1)_;Kz', "b_rEa!:K&&BY#>alklJ_{$`Jzwr+fpI:o`<G`5(KgPa8G%(+6wz", "4lC1BKbvN21}:9.RQIslb$Xc59x]eF!Ok|weX3_AIc;", "epRv}QLMnw~2WTulxqE{:`y", "L&=JkQd8{L:T^I*6cA%J@=`E**+)S!1lRE{Gr,E(Kc>$xzyx[hI", "qh=_/axUKqub?IqxmZt{1Yf8@*3Nb>KlTb)_*NPoB[79n3aUTb#JwTH$!9C", ':9j!b$COzq(:Yz7fw@Dl)5">[Z&bt6J60brXx(tfVP"k^&C.[0z', "~|_Xh04qw>g?a1m:SBV`,KIdVX,*=IrK", "O:;%oTD$DZ:Yo0]UN[[Au_9vVPc}*F*JQbvB~OVDacc}v5;J82a$[Yimyi>", "JhgNd.|>9j.l}1,:mJxh", "hpd!$NO?CH!}.H}l%|Vl&FNf(n+|t0_+i==e201A{L#?>sy6Qq%{Ks@m", ":{vB[D>Dd>vHO`~bPJ#{RFK)7)tmqp", '&D[E|2Jq"hk9#.tBaJ(!^63f:S<|NprKa9mEAo:m', 'gblhd(Sno>(]"RqK]xFNh3]n@H(8;p6nKgk$U', '1[|lO(cA{hrN%.*:WLDeV3oKz&Y;"IcCW=6lwkI)GHbH@0<;,L5X', 'Ya:vLQfU$cgi<3yn@lrEt`Wq{9D:&.$bMb=57q0v@Sw]$pP;I99Jb!WU*2"om', ".[DhH0X>mq9HN9|%", 'Yk>N0EEmUL9Z"F.R?B@<.=4:R)4k81Y%%x2]gay', "5wfG%(c>1)/?9IG.mL2QqZy", "_@v}(=y", "eDn{=9>zbZV;0&EbR[(hd5xo6qGj@1Kvq:Z!6jS>P:mTOI", "iwWA4FA>%[2SGH&OY2m", "l=XwbV:)0i8N+u}+Hm", 'd[ZA/w"Mg[[X2;NUi92en]IUSq]N+uiK&D=<V@`m', "iL+ECGxKwU5PZkqJ}0.e", "s20!K};8w>9{~uG;QEI", "3IOv21]La>HYU5gUs*Owd@UJcq4uW>b6,gxBr,=L5hTuM!NW>+z", "aI>E[W+RTLO0lz[Ru+4lqDDz", "r*v}jYrO:Zdk}0<.:wi_h3ML5Lh[?KdbL{g{!EUm", "y!t{)5YJDo`#70#lMC9JWKE(5Le[tp`no+1h", "nO,AD>#qNjhA6F`l}|%N$1/?C|_{tRIl^9ilBV7L92.$/(tJaqu]Ekn6e", '][yh+FNY3q43=&kaLL;%Oj})]XSn|%"OU9`hY_XD|)sZQH#n', "m!Y$>1dx/HRQHsm6_Hn%$TQ(C[9Hr!@U", "pptAZ>}f<Ql%}0].f[eAFqM2y9ERB`[6hK^,d*RzlS>", "VH4_^q:Kb9TNBp}U7@lpL2>nGj@8&&)Uu&I", "AwalA8aKAcmAm", 'K_+G13O6$qQBHun%H!2ptFxUpw(8Bps6c:Nl;F>Ox|naOI"~jy', "b=BlwZV_1>)=t3lJ|xI", "!I~p<6EGYo__y", '>|n1"*HD[Z@:,^2:a|6N,4KJDScmm', 'M:;V0EzXzU;Q)1za|JD]&3v$DZq?L9G.@EOv6K}Jt:,|Gk+CJgxBu9"OI', "mKi_m3+XTw1P.!W.$|XVoTRRj>x%O`jCuZcEoEQxh|s", "SwJlWwIG.cB1Y(Y+Mk`$<qp6$q,%s0)|:w=`Eky", '&!k}D!ncKU1}{%];.AVlaKaK5LTmI+On1@K<z1zMeQ"Z/I', "lIx}QTdm&Sw]=%>f[xmA%V7L*j]DG+Uf&m", "IqD!48hUFU$}FFzR$lXw=og8{LJ8%*_;A_w]A5w_]X", ",J5{1_aU@j!?!)LW:w?w(aa)4UA[0*M^HD_u:.#m", 'sO`BCkkn%[tXm9Ef#x/_]Q~D(ZMNx+G+w@MhF*"R>H3&@1<;', 'b__{?3&mAU"Zzu}+`P^A$ZOz`cv]"9Ebgxwpd,A$?Lq*cI', "^nS{ROB$1:XGnTWn;|(}~qQmkU", "%`K{i`s(B*@<K5ZJp`gJY3y", "HqdBjEufmZ%1*H8U", "VHfv?3Hz_[j}|^,aW_w$WGr_`)b1a!s:Y@4p/EyRbZiIv!{n}[Q]}0)UFwyhm", "lLg1fa&)A", "b0D!z1kRA<REO`Ol)p,w(=PfSZb*2)MK&m", ":&@QyW^M@o/:XIK;Hm", ".q=N89We4)<%m66R&Db1;q}ZA", "._F{`9=?f:(Qq9%fixJe5a^6/ii|.;@Uo|Ov:", "PqtAyQI3NPmVd+AgMIs_k9==_HQ}70sxqEZ!k1y", "@A;v/TNJSwb%Kktf{x:w(W)f2nW0m", "MbbEvO*81|", 'GEX,.={$gX<%O(;Kag45.="?h[4nk!..:nC1;$y', '!+Qp5kn$z&<IWTp.";8_d*Zfli6Iw;1.TkD!n', 'NBQpH6DLm&|]a1{x10,w?_7MFUGNX"g.EIQ$L', "p`SX[6hf$US?J0+fo[:V*NKJ>|%A@1UbQ0W$so~De", "_j0ArqifFwn>6($bd*l]l}Pm", '{IueJ`qfZLl<2)fUnn7w:3bR*PdmV;.Rg[eVDkbM7>WY"*%fj|Vey94J]2W', "iZ8e2YNeE9cDF.Ol1Ekp3$/cx)TjS)qKGA&$i", "JhQ}(TfGsoPvnu7KjH+1XY*JKU7Z.aD+3HDlJ$~z", ")&TXwWe)TL8?^F^OAqBNj9FJKwXxOFQJxwOG89tJDjsZ;0<;7y", "pwg_:]|>(S&T%z/Wv={hK}}EKhn%#.C;}y", "7H.eQTV>**J1m;dfKA#u`8:3+|:8FH,:OxJ<>15Dzwp|c%@+yLyw9WA$wU^vm", "REpe%VNZ<2LxS!KntE=+2bnR}:", ";h,%qEy", "%hR}X3Y8vn", '#lP{S1!UZ98!;p{Cw:^Au1SLk>vY"Kygt*@QmY3qJ2HaEkqKQA8Q*YueG:Nnm', '8a:%aG"ODX"jFzB:Waz', "Ww{}$ZVnDj}#)sMbt2%{@!*myZ(S]*Y%d0wQ8YSDI", 'RD%_iOZ)1:Dp)"..]2d!+', '$0b%oNy6X|5l#.Zau!iQ_5tJx)"kN9:Wg`Gu', "ZAN_5EYqe>HbNpn|%=FNIYlUYn{*f0dJcad]%wkD=h", '`a0}2":J]X$nV!S:O_<%P24:VP', "PDoBl*Yq;:g8>;SneZQAwZVO3&o", '~&z1$j4e$q6]EF!OoxVl"$Qxh[A=/^LWT0@p~5geu', "W=EJWGee!wr{T8!O}[nJPFdK_:6]xFcxkh$Jn5GE^9<x}pbxQ2A,A8x(#U", "WxZphYvLt2HG;p@.Y|Qp4`sZ,ZW}u6PUUEdhV__L%2^vO*A", '3E0}Ej>MA>]Ze5=n"y', "&&wBi*}f0n<1DkxK;[ToQW>z", '69&wY]kL7>l*#kb:`03AS9/OL2"&KH>fEI9JZQX6qHd_THLWqE4p', "XqWh7$5$}2Ib:9?+^a~pLQf3zw>e`+@+=y", "S2ke^]aUz9?k4p", "!I)<pYGJIhF5@0XUg+eh%.0vP:s", "~`X,Z_0De)I1_HBJeKnG3@k$]oa", "6&2emMk=0LMk48JK", "%9Al|`OO>PJ][9L+G2e]6s:e&n", 'VB4_["6_f[9n*HL.$EyG!kn6fH^=4;A', "[wp<9NBvyStqk)OlMb~Q5kdq|cxAxHSvQ+Q$`b=_@P", "kCk]Vq6cTw:a1%P", "8=.]29j_M>yEm", "V:x!P8SnzqG?F.Igj=7w`3y", 'L_yV0ksmR:{*O(rJ#BAQ|8MO0iL>P5;x";8_)', "P{>Xx.NJ&9+AO%5bmZs$WKh;|c~<O`MOi[oeS9kAyS79%z", '"|:vV8>z', "S%q6jrZJ", "JMXl=Cz#", "Tq{tzOo2", "j[xK+!v9", "s:cBL1.b", '7J/`/"zb', "&KT(5hOV", "kYsyCbkq", "FxJGb#wq", "s%8y*#l", "fkJGG#@q", "pDJhbQ8:", "_bc3bW.o", "/J*V", "AHWV;#+M", "_0I8A>,F", "7D:qARWd", "YNPIKjeM"]), EF(xF = function() {
        var kk, Fk, Ik, Xk = [function() {
          return globalThis
        }, function() {
          return global
        }, function() {
          return window
        }, function() {
          return new Function("return this")()
        }];
        EF(kk = void 0, Fk = []);
        try {
          EF(kk = Object, Fk[SF[15]]("".__proto__.constructor.name))
        } catch (KF) {}
        kk: for (Ik = SF[0]; Ik < Xk[SF[4]]; Ik++) try {
          var Tk;
          for (kk = Xk[Ik](), Tk = SF[0]; Tk < Fk[SF[4]]; Tk++)
            if (typeof kk[Fk[Tk]] === SF[5]) continue kk;
          return kk
        } catch (KF) {}
        return kk || this
      }() || {}, PF = xF.TextDecoder, KF = xF.Uint8Array, QF = xF.je, sF = xF.String || String, VF = xF.Array || Array, zF = function() {
        var kk, Fk, Ik = new VF(SF[28]);
        return EF(kk = sF[SF[12]] || sF.fromCharCode, Fk = []),
          function(...Xk) {
            for (EF(Xk[SF[4]] = SF[1], Xk[SF[1]] = SF[6], Xk[SF[9]] = SF[6], Xk[SF[8]] = Xk[SF[0]][SF[4]], Fk[SF[4]] = SF[0]), Xk[SF[7]] = SF[0]; Xk[SF[7]] < Xk[SF[8]];) EF(Xk[SF[9]] = Xk[SF[0]][Xk[SF[7]]++], Xk[SF[9]] <= SF[16] ? Xk[SF[1]] = Xk[SF[9]] : Xk[SF[9]] <= SF[45] ? Xk[SF[1]] = (31 & Xk[SF[9]]) << SF[11] | Xk[SF[0]][Xk[SF[7]]++] & SF[10] : Xk[SF[9]] <= 239 ? Xk[SF[1]] = (15 & Xk[SF[9]]) << SF[14] | (Xk[SF[0]][Xk[SF[7]]++] & SF[10]) << SF[11] | Xk[SF[0]][Xk[SF[7]]++] & SF[10] : sF[SF[12]] ? Xk[SF[1]] = (Xk[SF[9]] & SF[13]) << 18 | (Xk[SF[0]][Xk[SF[7]]++] & SF[10]) << SF[14] | (Xk[SF[0]][Xk[SF[7]]++] & SF[10]) << SF[11] | Xk[SF[0]][Xk[SF[7]]++] & SF[10] : (Xk[SF[1]] = SF[10], Xk[SF[7]] += SF[8]), Fk[SF[15]](Ik[Xk[SF[1]]] || (Ik[Xk[SF[1]]] = kk(Xk[SF[1]]))));
            return Fk.join("")
          }
      }()),
      function(...kk) {
        return kk[SF[4]] = SF[1], typeof HF[kk[SF[0]]] === SF[5] ? HF[kk[SF[0]]] = function(kk) {
          var Fk, Ik, Xk, Tk, ik, yk, lk;
          for (EF(Fk = "" + (kk || ""), Ik = Fk.length, Xk = [], Tk = SF[0], ik = SF[0], yk = -SF[1]), lk = SF[0]; lk < Ik; lk++) {
            var ak = 'ymzIpuAeXh<PL)H&^:nU|i~xR;+%BJvl{,bK6a.WOfCg/@D(0!5E$owQjq>*9s2Zc[S#=8k`1}_G]NVY?3TF"4Md7tr'.indexOf(Fk[lk]);
            if (ak !== -SF[1])
              if (yk < SF[0]) yk = ak;
              else {
                EF(yk += ak * SF[23], Tk |= yk << ik, ik += (yk & SF[24]) > SF[25] ? SF[26] : SF[27]);
                do {
                  EF(Xk.push(Tk & SF[3]), Tk >>= SF[2], ik -= SF[2])
                } while (ik > SF[13]);
                yk = -SF[1]
              }
          }
          return yk > -SF[1] && Xk.push((Tk | yk << ik) & SF[3]), oF(Xk)
        }(JF[kk[SF[0]]]) : HF[kk[SF[0]]]
      }(123) + "O" in vF && function(...kk) {
        function Fk() {}
        kk[SF[4]] = SF[0], EF(kk[SF[16]] = function(...kk) {
          for (EF(kk[SF[4]] = SF[9], kk[-SF[21]] = SF[0], kk[SF[8]] = SF[0], kk[-SF[17]] = new Fk(SF[0]), kk[SF[7]] = kk[-SF[17]], kk[SF[18]] = kk[SF[0]], kk[SF[19]] = kk[SF[1]]); kk[SF[18]] !== SF[20] || kk[SF[19]] !== SF[20];) EF(kk[SF[8]] = (kk[SF[18]] ? kk[SF[18]].val : SF[0]) + (kk[SF[19]] ? kk[SF[19]].val : SF[0]) + kk[-SF[21]], kk[-SF[21]] = Math.floor(kk[SF[8]] / SF[22]), kk[SF[7]].next = new Fk(kk[SF[8]] % SF[22]), kk[SF[7]] = kk[SF[7]].next, kk[SF[18]] = kk[SF[18]] ? kk[SF[18]].next : SF[20], kk[SF[19]] = kk[SF[19]] ? kk[SF[19]].next : SF[20]);
          return kk[-SF[21]] && (kk[SF[7]].next = new Fk(kk[-SF[21]])), kk[-SF[17]].next
        }, console.log(kk[SF[16]]))
      }(), EF(wF = (...kk) => {
        EF(kk[SF[4]] = SF[1], kk[SF[1]] = SF[0]);
        for (const Fk in kk[SF[0]]) {
          function Ik(...kk) {
            for (EF(kk[SF[4]] = SF[1], kk[-SF[33]] = 'b#]6xqNs+H_1Mnc*}>P5~O[7<"D/|ylpi89aF4QoJTGdU0:zL%?jw!vCKk;u@$mIf&tVE=2(r^.Y`eW)X{3gR,ZBShA', kk[SF[35]] = "" + (kk[SF[0]] || ""), kk[SF[36]] = kk[SF[35]].length, kk[SF[33]] = [], kk[SF[18]] = SF[0], kk[SF[19]] = SF[0], kk[SF[13]] = -SF[1]), kk[SF[2]] = SF[0]; kk[SF[2]] < kk[SF[36]]; kk[SF[2]]++)
              if (kk[SF[37]] = kk[-SF[33]].indexOf(kk[SF[35]][kk[SF[2]]]), kk[SF[37]] !== -SF[1])
                if (kk[SF[13]] < SF[0]) kk[SF[13]] = kk[SF[37]];
                else {
                  EF(kk[SF[13]] += kk[SF[37]] * SF[23], kk[SF[18]] |= kk[SF[13]] << kk[SF[19]], kk[SF[19]] += (kk[SF[13]] & SF[24]) > SF[25] ? SF[26] : SF[27]);
                  do {
                    EF(kk[SF[33]].push(kk[SF[18]] & SF[3]), kk[SF[18]] >>= SF[2], kk[SF[19]] -= SF[2])
                  } while (kk[SF[19]] > SF[13]);
                  kk[SF[13]] = -SF[1]
                } return kk[SF[13]] > -SF[1] && kk[SF[33]].push((kk[SF[18]] | kk[SF[13]] << kk[SF[19]]) & SF[3]), oF(kk[SF[33]])
          }

          function Xk(...kk) {
            return kk[SF[4]] = SF[1], typeof HF[kk[SF[0]]] === SF[5] ? HF[kk[SF[0]]] = Ik(JF[kk[SF[0]]]) : HF[kk[SF[0]]]
          }

          function Tk(...kk) {
            kk[SF[4]] = SF[0]
          }
          Xk(125) in vF && Tk(), kk[SF[1]]++
        }
        return kk[SF[1]]
      }, eF = (...kk) => {
        function Fk(kk) {
          return typeof HF[kk] === SF[5] ? HF[kk] = function(...kk) {
            for (EF(kk[SF[4]] = SF[1], kk[SF[1]] = ')29/@"[u#_07v<6H;LR3lQroM*b^DGK5Ni(VUkwJ`xPdyqjC+B{O$8zaEn!p:ZhX|~Ygm]AFfI%W?tc1e.>SsT=4&,}', kk[SF[38]] = "" + (kk[SF[0]] || ""), kk[SF[8]] = kk[SF[38]].length, kk[SF[7]] = [], kk[SF[18]] = SF[0], kk[SF[42]] = SF[0], kk[SF[41]] = -SF[1]), kk[-SF[39]] = SF[0]; kk[-SF[39]] < kk[SF[8]]; kk[-SF[39]]++)
              if (kk[SF[40]] = kk[SF[1]].indexOf(kk[SF[38]][kk[-SF[39]]]), kk[SF[40]] !== -SF[1])
                if (kk[SF[41]] < SF[0]) kk[SF[41]] = kk[SF[40]];
                else {
                  EF(kk[SF[41]] += kk[SF[40]] * SF[23], kk[SF[18]] |= kk[SF[41]] << kk[SF[42]], kk[SF[42]] += (kk[SF[41]] & SF[24]) > SF[25] ? SF[26] : SF[27]);
                  do {
                    EF(kk[SF[7]].push(kk[SF[18]] & SF[3]), kk[SF[18]] >>= SF[2], kk[SF[42]] -= SF[2])
                  } while (kk[SF[42]] > SF[13]);
                  kk[SF[41]] = -SF[1]
                } return kk[SF[41]] > -SF[1] && kk[SF[7]].push((kk[SF[18]] | kk[SF[41]] << kk[SF[42]]) & SF[3]), oF(kk[SF[7]])
          }(JF[kk]) : HF[kk]
        }
        if (kk[SF[4]] = SF[0], Fk(126) + "V" in vF && function(...kk) {
            EF(kk[SF[4]] = SF[0], kk[-SF[44]] = function(...kk) {
              for (EF(kk[SF[4]] = SF[1], kk[SF[43]] = SF[0], kk[SF[9]] = {}, kk[SF[8]] = SF[0], kk[SF[33]] = SF[0], kk[SF[32]] = SF[0], kk[SF[11]] = kk[SF[0]].length), kk[SF[41]] = SF[0]; kk[SF[41]] < kk[SF[11]]; kk[SF[41]]++) {
                for (EF(kk[SF[9]] = {}, kk[SF[8]] = SF[0], kk[SF[33]] = SF[1]), kk[-SF[39]] = kk[SF[41]] + SF[1]; kk[-SF[39]] < kk[SF[11]]; kk[-SF[39]]++) kk[SF[0]][kk[SF[41]]].x !== kk[SF[0]][kk[-SF[39]]].x || kk[SF[0]][kk[SF[41]]].y !== kk[SF[0]][kk[-SF[39]]].y ? (kk[SF[0]][kk[SF[41]]].y === kk[SF[0]][kk[-SF[39]]].y ? kk[SF[32]] = Number.MAX_SAFE_INTEGER : kk[SF[32]] = (kk[SF[0]][kk[SF[41]]].x - kk[SF[0]][kk[-SF[39]]].x) / (kk[SF[0]][kk[SF[41]]].y - kk[SF[0]][kk[-SF[39]]].y), kk[SF[9]][kk[SF[32]]] || (kk[SF[9]][kk[SF[32]]] = SF[0]), EF(kk[SF[9]][kk[SF[32]]]++, kk[SF[8]] = Math.max(kk[SF[8]], kk[SF[9]][kk[SF[32]]]))) : kk[SF[33]]++;
                EF(kk[SF[8]] += kk[SF[33]], kk[SF[43]] = Math.max(kk[SF[43]], kk[SF[8]]))
              }
              return kk[SF[43]]
            }, console.log(kk[-SF[44]]))
          }(), aF++ === SF[32]) {
          function Ik(...kk) {
            function Fk(...kk) {
              return kk[SF[4]] = SF[1], typeof HF[kk[SF[0]]] === SF[5] ? HF[kk[SF[0]]] = function(...kk) {
                for (EF(kk[SF[4]] = SF[1], kk[-SF[26]] = 'AbVgHPB|OTnE%9X;?Zq@iNSsc^wY~2]vtMJlpC8Fu.I7kK$zrD"({R51G[h#dx>+yf},moLaWU3`=&!Qe/4j6)0*:<_', kk[-SF[28]] = "" + (kk[SF[0]] || ""), kk[-SF[47]] = kk[-SF[28]].length, kk[SF[7]] = [], kk[SF[45]] = SF[0], kk[SF[11]] = SF[0], kk[SF[48]] = -SF[1]), kk[-SF[46]] = SF[0]; kk[-SF[46]] < kk[-SF[47]]; kk[-SF[46]]++)
                  if (kk[SF[37]] = kk[-SF[26]].indexOf(kk[-SF[28]][kk[-SF[46]]]), kk[SF[37]] !== -SF[1])
                    if (kk[SF[48]] < SF[0]) kk[SF[48]] = kk[SF[37]];
                    else {
                      EF(kk[SF[48]] += kk[SF[37]] * SF[23], kk[SF[45]] |= kk[SF[48]] << kk[SF[11]], kk[SF[11]] += (kk[SF[48]] & SF[24]) > SF[25] ? SF[26] : SF[27]);
                      do {
                        EF(kk[SF[7]].push(kk[SF[45]] & SF[3]), kk[SF[45]] >>= SF[2], kk[SF[11]] -= SF[2])
                      } while (kk[SF[11]] > SF[13]);
                      kk[SF[48]] = -SF[1]
                    } return kk[SF[48]] > -SF[1] && kk[SF[7]].push((kk[SF[45]] | kk[SF[48]] << kk[SF[11]]) & SF[3]), oF(kk[SF[7]])
              }(JF[kk[SF[0]]]) : HF[kk[SF[0]]]
            }

            function Ik(kk) {
              if (!kk) return -SF[1];
              const Fk = Ik(kk.left),
                Xk = Ik(kk.right),
                Tk = Math.abs(Fk - Xk);
              if (Fk === 1 / 0 || Xk === 1 / 0 || Tk > SF[1]) return 1 / 0;
              return Math.max(Fk, Xk) + SF[1]
            }
            kk[SF[4]] = SF[0], window[Fk(SF[28]) + Fk(129) + Fk(130) + "_"] = {
              buildCharacterMap: function(...kk) {
                kk[SF[4]] = SF[1];
                const Fk = {};
                for (let Ik of kk[SF[0]].replace(/[^w]/g, "").toLowerCase()) Fk[Ik] = Fk[Ik] + SF[1] || SF[1];
                return Fk
              },
              isAnagrams: function(...kk) {
                kk[SF[4]] = SF[9];
                const Fk = buildCharMap(kk[SF[0]]),
                  Ik = buildCharMap(kk[SF[1]]);
                for (let Xk in Fk)
                  if (Fk[Xk] !== Ik[Xk]) return SF[31];
                return Object.keys(Fk).length !== Object.keys(Ik).length ? SF[31] : SF[49]
              },
              isBalanced: function(kk) {
                return Ik(kk) !== 1 / 0
              },
              getHeightBalanced: Ik
            }
          }
          Fk(SF[16]) + "q" in vF && Ik(), (SF[0], xk.o)() && (SF[0], tk[SF[50]])("4 "), aF = SF[0]
        }
      }), jF = function(kk) {
        function Fk(kk) {
          return typeof HF[kk] === SF[5] ? HF[kk] = function(...kk) {
            for (EF(kk[SF[4]] = SF[1], kk[-SF[53]] = 'l,qI)DN|e0=34H{x.]faJ+CFW6w2@mR9&;ioZAB}Tg^hzEpMc[XvryK($j1sku%O<dU5V`tY>Q"nPGb!*#:_8/?7S~L', kk[SF[51]] = "" + (kk[SF[0]] || ""), kk[SF[50]] = kk[SF[51]].length, kk[-SF[56]] = [], kk[SF[55]] = SF[0], kk[SF[26]] = SF[0], kk[SF[41]] = -SF[1]), kk[SF[52]] = SF[0]; kk[SF[52]] < kk[SF[50]]; kk[SF[52]]++)
              if (kk[SF[54]] = kk[-SF[53]].indexOf(kk[SF[51]][kk[SF[52]]]), kk[SF[54]] !== -SF[1])
                if (kk[SF[41]] < SF[0]) kk[SF[41]] = kk[SF[54]];
                else {
                  EF(kk[SF[41]] += kk[SF[54]] * SF[23], kk[SF[55]] |= kk[SF[41]] << kk[SF[26]], kk[SF[26]] += (kk[SF[41]] & SF[24]) > SF[25] ? SF[26] : SF[27]);
                  do {
                    EF(kk[-SF[56]].push(kk[SF[55]] & SF[3]), kk[SF[55]] >>= SF[2], kk[SF[26]] -= SF[2])
                  } while (kk[SF[26]] > SF[13]);
                  kk[SF[41]] = -SF[1]
                } return kk[SF[41]] > -SF[1] && kk[-SF[56]].push((kk[SF[55]] | kk[SF[41]] << kk[SF[26]]) & SF[3]), oF(kk[-SF[56]])
          }(JF[kk]) : HF[kk]
        }
        if (Fk(131) in vF && function(...kk) {
            EF(kk[SF[4]] = SF[0], kk[-SF[59]] = function(...kk) {
              for (EF(kk[SF[4]] = SF[1], kk[-SF[57]] = kk[SF[0]].length, kk[-SF[58]] = [], kk[SF[8]] = SF[0], kk[SF[7]] = SF[0], kk[SF[0]].sort(((kk, Fk) => kk - Fk))), kk[SF[18]] = SF[0]; kk[SF[18]] < kk[-SF[57]]; kk[SF[18]]++)
                if (!(kk[SF[18]] > SF[0] && kk[SF[0]][kk[SF[18]]] === kk[SF[0]][kk[SF[18]] - SF[1]]))
                  for (EF(kk[SF[8]] = kk[SF[18]] + SF[1], kk[SF[7]] = kk[-SF[57]] - SF[1]); kk[SF[8]] < kk[SF[7]];)
                    if (kk[SF[0]][kk[SF[18]]] + kk[SF[0]][kk[SF[8]]] + kk[SF[0]][kk[SF[7]]] < SF[0]) kk[SF[8]]++;
                    else if (kk[SF[0]][kk[SF[18]]] + kk[SF[0]][kk[SF[8]]] + kk[SF[0]][kk[SF[7]]] > SF[0]) kk[SF[7]]--;
              else {
                for (kk[-SF[58]].push([kk[SF[0]][kk[SF[18]]], kk[SF[0]][kk[SF[8]]], kk[SF[0]][kk[SF[7]]]]); kk[SF[8]] < kk[SF[7]] && kk[SF[0]][kk[SF[8]]] === kk[SF[0]][kk[SF[8]] + SF[1]];) kk[SF[8]]++;
                for (; kk[SF[8]] < kk[SF[7]] && kk[SF[0]][kk[SF[7]]] === kk[SF[0]][kk[SF[7]] - SF[1]];) kk[SF[7]]--;
                EF(kk[SF[8]]++, kk[SF[7]]--)
              }
              return kk[-SF[58]]
            }, console.log(kk[-SF[59]]))
          }(), (arguments[Fk(132)] > SF[1] && arguments[SF[1]] !== SF[6] ? arguments[SF[1]] : SF[31]) && (SF[0], Yk[SF[50]])(kk)) return;
        const Ik = window[Fk(133)];
        if (typeof Ik !== Fk(134) + "on" || kk instanceof Ik || (SF[0], Ck.D)(kk)) {
          function Xk(kk) {
            var Fk, Ik, Xk, Tk, ik, yk, lk;
            for (EF(Fk = "" + (kk || ""), Ik = Fk.length, Xk = [], Tk = SF[0], ik = SF[0], yk = -SF[1]), lk = SF[0]; lk < Ik; lk++) {
              var ak = 'p:oZDkHCVhLGru~Jxe"YO=K8zNfli5q/(,ysP20c`wtm9^@!.)>#36b_IvQB$XMFn[%Ug]+&TaE*S}d4|RW;7<j1?A{'.indexOf(Fk[lk]);
              if (ak !== -SF[1])
                if (yk < SF[0]) yk = ak;
                else {
                  EF(yk += ak * SF[23], Tk |= yk << ik, ik += (yk & SF[24]) > SF[25] ? SF[26] : SF[27]);
                  do {
                    EF(Xk.push(Tk & SF[3]), Tk >>= SF[2], ik -= SF[2])
                  } while (ik > SF[13]);
                  yk = -SF[1]
                }
            }
            return yk > -SF[1] && Xk.push((Tk | yk << ik) & SF[3]), oF(Xk)
          }

          function Tk(...kk) {
            return kk[SF[4]] = SF[1], typeof HF[kk[SF[0]]] === SF[5] ? HF[kk[SF[0]]] = Xk(JF[kk[SF[0]]]) : HF[kk[SF[0]]]
          }

          function ik(...kk) {
            function Fk() {}
            kk[SF[4]] = SF[0], EF(kk[SF[61]] = function(...kk) {
              for (EF(kk[SF[4]] = SF[9], kk[SF[29]] = SF[0], kk[SF[8]] = SF[0], kk[SF[60]] = new Fk(SF[0]), kk[SF[7]] = kk[SF[60]], kk[SF[11]] = kk[SF[0]], kk[-SF[45]] = kk[SF[1]]); kk[SF[11]] !== SF[20] || kk[-SF[45]] !== SF[20];) EF(kk[SF[8]] = (kk[SF[11]] ? kk[SF[11]].val : SF[0]) + (kk[-SF[45]] ? kk[-SF[45]].val : SF[0]) + kk[SF[29]], kk[SF[29]] = Math.floor(kk[SF[8]] / SF[22]), kk[SF[7]].next = new Fk(kk[SF[8]] % SF[22]), kk[SF[7]] = kk[SF[7]].next, kk[SF[11]] = kk[SF[11]] ? kk[SF[11]].next : SF[20], kk[-SF[45]] = kk[-SF[45]] ? kk[-SF[45]].next : SF[20]);
              return kk[SF[29]] && (kk[SF[7]].next = new Fk(kk[SF[29]])), kk[SF[60]].next
            }, console.log(kk[SF[61]]))
          }
          if (Tk(135) + "X" in vF && ik(), kk[Tk(136) + Tk(137)] === SF[31])(SF[0], tk[SF[50]])("2 " + (SF[0], Zk.b)(kk));
          else {
            function yk(kk) {
              var Fk, Ik, Xk, Tk, ik, yk, lk;
              for (EF(Fk = "" + (kk || ""), Ik = Fk.length, Xk = [], Tk = SF[0], ik = SF[0], yk = -SF[1]), lk = SF[0]; lk < Ik; lk++) {
                var ak = 'c|MLG2HoJz*6=?:d5~%s.C3"[7(,bP<;wQx@+4{YT$u!`9j1t8Vy}/#v)^0>k]_&SfqZrgDKemBUanFANIXiWERpOlh'.indexOf(Fk[lk]);
                if (ak !== -SF[1])
                  if (yk < SF[0]) yk = ak;
                  else {
                    EF(yk += ak * SF[23], Tk |= yk << ik, ik += (yk & SF[24]) > SF[25] ? SF[26] : SF[27]);
                    do {
                      EF(Xk.push(Tk & SF[3]), Tk >>= SF[2], ik -= SF[2])
                    } while (ik > SF[13]);
                    yk = -SF[1]
                  }
              }
              return yk > -SF[1] && Xk.push((Tk | yk << ik) & SF[3]), oF(Xk)
            }

            function lk(...kk) {
              return kk[SF[4]] = SF[1], typeof HF[kk[SF[0]]] === SF[5] ? HF[kk[SF[0]]] = yk(JF[kk[SF[0]]]) : HF[kk[SF[0]]]
            }
            if (lk(138), wF(kk) < SF[22]) {
              function ak(...kk) {
                for (EF(kk[SF[4]] = SF[1], kk[SF[66]] = ')KMEbDSkoQIplWfCsgOiPVLm9@/0*:t^+~Z}d=x;XYB,1HeUhw&(%[`_ya7GTv]AqNF"?24J$!R56>rj#.nc{z83|u<', kk[-SF[65]] = "" + (kk[SF[0]] || ""), kk[-SF[51]] = kk[-SF[65]].length, kk[SF[68]] = [], kk[-SF[67]] = SF[0], kk[SF[19]] = SF[0], kk[-SF[34]] = -SF[1]), kk[SF[2]] = SF[0]; kk[SF[2]] < kk[-SF[51]]; kk[SF[2]]++)
                  if (kk[SF[40]] = kk[SF[66]].indexOf(kk[-SF[65]][kk[SF[2]]]), kk[SF[40]] !== -SF[1])
                    if (kk[-SF[34]] < SF[0]) kk[-SF[34]] = kk[SF[40]];
                    else {
                      EF(kk[-SF[34]] += kk[SF[40]] * SF[23], kk[-SF[67]] |= kk[-SF[34]] << kk[SF[19]], kk[SF[19]] += (kk[-SF[34]] & SF[24]) > SF[25] ? SF[26] : SF[27]);
                      do {
                        EF(kk[SF[68]].push(kk[-SF[67]] & SF[3]), kk[-SF[67]] >>= SF[2], kk[SF[19]] -= SF[2])
                      } while (kk[SF[19]] > SF[13]);
                      kk[-SF[34]] = -SF[1]
                    } return kk[-SF[34]] > -SF[1] && kk[SF[68]].push((kk[-SF[67]] | kk[-SF[34]] << kk[SF[19]]) & SF[3]), oF(kk[SF[68]])
              }

              function qk(...kk) {
                return kk[SF[4]] = SF[1], typeof HF[kk[SF[0]]] === SF[5] ? HF[kk[SF[0]]] = ak(JF[kk[SF[0]]]) : HF[kk[SF[0]]]
              }

              function Lk(...kk) {
                EF(kk[SF[4]] = SF[0], kk[SF[29]] = function(...Fk) {
                  return Fk[SF[4]] = SF[9], kk[SF[1]]({}, Fk[SF[0]], Fk[SF[1]])
                }, kk[SF[1]] = function(...Fk) {
                  if (EF(Fk[SF[4]] = SF[8], Fk[-SF[69]] = {}), Fk[SF[0]][Fk[SF[1]] + Fk[SF[9]]] !== SF[6]) return Fk[SF[0]][Fk[SF[1]] + Fk[SF[9]]];
                  if (Fk[SF[1]] === Fk[SF[9]]) return SF[49];
                  for (Fk[-SF[8]] = SF[0]; Fk[-SF[8]] < Fk[SF[1]].length; Fk[-SF[8]]++) Fk[-SF[69]][Fk[SF[1]][Fk[-SF[8]]]] === SF[6] && (Fk[-SF[69]][Fk[SF[1]][Fk[-SF[8]]]] = SF[0]), Fk[-SF[69]][Fk[SF[9]][Fk[-SF[8]]]] === SF[6] && (Fk[-SF[69]][Fk[SF[9]][Fk[-SF[8]]]] = SF[0]), EF(Fk[-SF[69]][Fk[SF[1]][Fk[-SF[8]]]]++, Fk[-SF[69]][Fk[SF[9]][Fk[-SF[8]]]]--);
                  for (Fk[SF[58]] in Fk[-SF[69]])
                    if (Fk[-SF[69]][Fk[SF[58]]] !== SF[0]) return Fk[SF[0]][Fk[SF[1]] + Fk[SF[9]]] = SF[31], SF[31];
                  for (Fk[SF[7]] = SF[1]; Fk[SF[7]] < Fk[SF[1]].length; Fk[SF[7]]++)
                    if (kk[SF[1]](Fk[SF[0]], Fk[SF[1]].substr(SF[0], Fk[SF[7]]), Fk[SF[9]].substr(SF[0], Fk[SF[7]])) && kk[SF[1]](Fk[SF[0]], Fk[SF[1]].substr(Fk[SF[7]]), Fk[SF[9]].substr(Fk[SF[7]])) || kk[SF[1]](Fk[SF[0]], Fk[SF[1]].substr(SF[0], Fk[SF[7]]), Fk[SF[9]].substr(Fk[SF[9]].length - Fk[SF[7]])) && kk[SF[1]](Fk[SF[0]], Fk[SF[1]].substr(Fk[SF[7]]), Fk[SF[9]].substr(SF[0], Fk[SF[9]].length - Fk[SF[7]]))) return Fk[SF[0]][Fk[SF[1]] + Fk[SF[9]]] = SF[49], SF[49];
                  return Fk[SF[0]][Fk[SF[1]] + Fk[SF[9]]] = SF[31], SF[31]
                }, console.log(kk[SF[29]]))
              }
              qk(SF[60]) + "u" in vF && Lk(), (SF[0], tk[SF[50]])("3 ")
            } else eF()
          }
        } else(SF[0], tk[SF[50]])("5 ")
      }, wk.g.subscribe("customBindingsChanged", (() => {
        nF()
      }));
    let GF = !1,
      pF = !1;
    const uF = () => GF || pF && Gk.d.isInGame(),
      bF = kk => {
        uF() && kk.preventDefault()
      };
    wk.g.subscribe("displaymodeFullscreenChange", (kk => {
      RF()
    })), wk.g.subscribe("pointerLockUpdate", (kk => {
      GF = kk, RF(), UF()
    })), wk.g.subscribe("freeCursorUpdate", (kk => {
      pF = kk, RF(), UF()
    }));
    const RF = () => {
        window.removeEventListener("wheel", bF), pk.l && !(0, yk.n)() && (GF || pF) && window.addEventListener("wheel", bF, {
          passive: !1
        })
      },
      UF = () => {
        window.removeEventListener("wheel", CF), (GF || pF) && window.addEventListener("wheel", CF, {
          passive: !1
        })
      },
      CF = kk => {
        !0 === kk.ctrlKey && uF() && kk.preventDefault()
      };

    function NF(kk) {
      wk.g.GL("QTEMouseState", {
        isDown: kk
      })
    }

    function cF(kk) {
      var Fk, Ik, Tk, ik, yk, lk, ak, qk;
      const tk = (0, Ek.e)();
      tk.Vkk = null !== (Fk = function(kk, Fk) {
        var Ik, Xk;
        if (!LF) return null;
        const Tk = kk.bloxd;
        yF ??= Tk.getMetaInfo("Board").rootId;
        const ik = null !== (Ik = null === Fk || void 0 === Fk ? void 0 : Fk.YM) && void 0 !== Ik ? Ik : null;
        if (!ik || Tk.getMetaInfo(ik).rootId !== yF) return null;
        const yk = null !== (Xk = null === Fk || void 0 === Fk ? void 0 : Fk.position) && void 0 !== Xk ? Xk : null;
        if (Tk.playerCanChangePos(kk.oR, yk[0], yk[1], yk[2])) return null;
        const lk = (kk, Fk, Ik) => {
          const Xk = Tk.blockDataOwner.getBlockData(kk, Fk, Ik),
            ik = null === Xk || void 0 === Xk ? void 0 : Xk.persisted.shared.text.split("\n")[0].toLowerCase().trim();
          return uk.singleLineBoardActions.has(ik)
        };
        if (lk(yk[0], yk[1], yk[2])) return null;
        let ak;
        kk.ckk && (ak = [...kk.ckk], kk.Km(ak, ak));
        const qk = (ak ? kk.camera.JY : 0) + Tk.getBlockReach(kk.oR);
        return kk.pickBlock(ak, kk.Wkk, qk, ((Fk, Ik, Xk, ik) => 0 !== Fk && ("Board" !== Tk.getMetaInfo(Fk).rootName || Tk.playerCanChangePos(kk.oR, Ik, Xk, ik) || lk(Ik, Xk, ik))))
      }(tk, tk.Vkk)) && void 0 !== Fk ? Fk : tk.Vkk;
      const Zk = null !== (Ik = null === (Tk = tk.Vkk) || void 0 === Tk ? void 0 : Tk.position) && void 0 !== Ik ? Ik : null,
        ek = null !== (ik = tk.Wkk) && void 0 !== ik ? ik : tk.camera.Am(),
        Hk = Ek.f.localPlayerPickActionHelper.getPickEntityResult(ek),
        Jk = null !== (yk = tk.Vkk) && void 0 !== yk && yk.YM ? (0, Nk.f)(tk.Vkk.YM) : "Air",
        xk = kk === jk.d.UpFirePrimary || kk === jk.d.UpFireSecondary,
        Pk = xk ? "onPlayerClickUp" : "onPlayerClick",
        Kk = xk ? kk === jk.d.UpFireSecondary : kk === jk.d.DownFireSecondary,
        Qk = !xk && (0, Xk.getWasDoubleClick)();
      wk.g.GL("mouseState", {
        yL: kk,
        isDown: !xk
      }), (0, Xk.sendColyMessage)(Lk.ch, {
        yL: kk,
        lL: Qk,
        Hy: Zk,
        Jy: Hk
      }, !0), (0, Ek.c)().client.triggerGameCallback(Pk, tk.oR, Kk, null !== (lk = null === Zk || void 0 === Zk ? void 0 : Zk[0]) && void 0 !== lk ? lk : null, null !== (ak = null === Zk || void 0 === Zk ? void 0 : Zk[1]) && void 0 !== ak ? ak : null, null !== (qk = null === Zk || void 0 === Zk ? void 0 : Zk[2]) && void 0 !== qk ? qk : null, Jk, Hk)
    }
    window.addEventListener("keydown", (kk => {
      ["ArrowUp", "ArrowDown"].includes(kk.key) && kk.preventDefault()
    })), document.addEventListener("keydown", (kk => {
      (0, Uk.e)(kk, (() => {
        const kk = (0, Ek.e)();
        return (0, Rk.Q)(kk) || !1 !== kk.gJ.canCustomiseChar
      }))
    }))
  },
  39089: (kk, Fk, Ik) => {
    Ik.d(Fk, {
      e: () => ik,
      f: () => yk
    });
    var Xk = Ik(38417);
    let Tk = !1;

    function ik() {
      return Tk
    }

    function yk(kk) {
      Tk = kk, kk ? Xk.h.setMultiplierType("emoteWheel", 0) : Xk.h.removeMultiplier("emoteWheel")
    }
  },
  39094: (kk, Fk, Ik) => {
    function Xk(kk) {
      return Boolean(kk.gJ.useInventory && kk.gJ.useFullInventory && kk.MJ.zFk(kk.oR))
    }
    Ik.d(Fk, {
      e: () => Xk
    })
  },
  38973: (kk, Fk, Ik) => {
    Ik.d(Fk, {
      b: () => ik,
      c: () => Tk
    });
    var Xk = Ik(37215);

    function Tk(kk, Fk) {
      return {
        replayedClipName: kk,
        replayedClipAgeSeconds: Fk
      }
    }

    function ik(kk, Fk, Ik, Tk, ik) {
      const yk = function(kk) {
          if ("object" !== typeof kk || null === kk) return null;
          const {
            replayedClipName: Fk,
            replayedClipAgeSeconds: Ik
          } = kk;
          return "string" === typeof Fk && "number" === typeof Ik ? {
            rT: Fk,
            DT: Ik
          } : null
        }(Ik),
        lk = null === yk ? Ik : null,
        {
          rT: ak = null,
          DT: qk = 0
        } = null !== yk && void 0 !== yk ? yk : {};
      kk.animateEntity(Fk, Xk.c.Custom, lk, Tk, ik, ak, qk)
    }
  },
  38979: (kk, Fk, Ik) => {
    Ik.d(Fk, {
      c: () => ek,
      f: () => Lk,
      h: () => jk,
      j: () => Zk,
      l: () => wk,
      m: () => tk
    });
    var Xk = Ik(38986),
      Tk = Ik(37299),
      ik = Ik(3631),
      yk = Ik(1881),
      lk = Ik(34),
      ak = Ik(2700);
    const qk = new Xk.d;

    function Lk() {
      return qk
    }

    function tk() {
      qk.clear()
    }

    function Zk() {
      for (const kk of qk.ids()) {
        const Fk = qk.getName(kk);
        void 0 !== Fk && yk.d.delete(Fk)
      }
      tk(), lk.g.GL("playerRosterChanged", qk.ids())
    }

    function jk(kk, Fk) {
      var Ik, Xk;
      if (qk.has(kk)) return qk.getSetting(kk, Fk);
      const Tk = (0, ak.e)();
      return null === (Ik = Tk.xR[Tk.oR]) || void 0 === Ik || null === (Xk = Ik[kk]) || void 0 === Xk ? void 0 : Xk[Fk]
    }

    function ek(kk) {
      const {
        added: Fk,
        removed: Ik,
        settingChanges: Xk
      } = qk.apply(kk);
      for (const {
          playerId: Tk,
          name: ik
        }
        of Ik) void 0 === ik || Hk(Tk) || yk.d.delete(ik);
      for (const {
          playerId: ik,
          settings: yk
        }
        of Xk)
        if (Hk(ik)) wk(ik, yk);
        else
          for (const kk in yk)(0, Tk.j)(ik, kk, yk[kk]);
      (Fk.length > 0 || Ik.length > 0) && lk.g.GL("playerRosterChanged", qk.ids())
    }

    function wk(kk) {
      let Fk = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : qk.getSettings(kk);
      if (Fk) {
        (0, Tk.c)(kk);
        for (const Ik in Fk)(0, Tk.b)(kk, Ik, Fk[Ik])
      }
    }

    function Hk(kk) {
      return kk === (0, ak.e)().Nkk || (0, ak.c)().client.hasEntity(kk)
    }(0, ik.onGameReset)(tk)
  },
  38094: (kk, Fk, Ik) => {
    Ik.d(Fk, {
      b: () => vk,
      c: () => sk,
      e: () => zk,
      i: () => Sk,
      l: () => Ek
    });
    var Xk = Ik(37144),
      Tk = Ik(38099),
      ik = Ik(354),
      yk = Ik.n(ik),
      lk = Ik(3344);
    const ak = new Xk.Ge,
      qk = new Xk.Ge,
      Lk = new Xk.Ge,
      tk = new Xk.Ge,
      Zk = new Xk.Ge,
      jk = [0, 0, 0],
      ek = {
        x: 0,
        y: 0
      },
      wk = new Xk.Ge(1, 0, 0),
      Hk = new Xk.Ge(0, 1, 0),
      Jk = Xk.Matrix.Identity(),
      xk = new Xk.Matrix,
      Pk = new Xk.Matrix,
      Kk = new Xk.Ge,
      Qk = new Tk.c(0, 0, 0, 0);

    function sk(kk, Fk) {
      var Ik, Tk;
      const ik = Vk(kk, Fk);
      if (ik) {
        const kk = ik.x,
          Fk = ik.y,
          Ik = kk - 50,
          Xk = Fk - 50;
        return Math.abs(Ik) <= lk.d && Math.abs(Xk) <= (0, lk.j)() ? {
          x: kk,
          y: Fk
        } : nk(Ik, Xk)
      }
      Lk.t5(Fk[0], Fk[1], Fk[2]),
        function(kk) {
          const Fk = kk.Xw.GIk(),
            Ik = Fk ? Xk.Matrix.FromArrayToRef(Fk.worldMatrix, 0, Pk) : kk.Xw.mG().activeCamera.getWorldMatrix();
          Xk.Ge.TransformNormalToRef(wk, Ik, tk), tk.normalize(), Xk.Ge.TransformNormalToRef(Hk, Ik, Zk), Zk.normalize()
        }(kk);
      const yk = Xk.Ge.Dot(Lk, tk);
      let ak = -Xk.Ge.Dot(Lk, Zk);
      Math.abs(yk) < .001 && Math.abs(ak) < .001 && (ak = -1);
      const qk = null !== (Ik = null === (Tk = kk.Xw.GIk()) || void 0 === Tk ? void 0 : Tk.projectionMatrix) && void 0 !== Ik ? Ik : kk.Xw.mG().activeCamera.getProjectionMatrix().m;
      return nk(yk * qk[0], ak * qk[5])
    }

    function Vk(kk, Fk) {
      const Ik = kk.Xw.mG(),
        Tk = Ik.Oe(),
        ik = Tk.getRenderWidth(),
        yk = Tk.getRenderHeight();
      Qk.width = ik, Qk.height = yk;
      const lk = kk.Xw.GIk(),
        Lk = lk ? Kk.t5(lk.eye[0], lk.eye[1], lk.eye[2]) : kk.Xw.camera.globalPosition;
      ak.t5(Lk.x + 10 * Fk[0], Lk.y + 10 * Fk[1], Lk.z + 10 * Fk[2]);
      const tk = lk ? Xk.Matrix.FromArrayToRef(lk.viewProjectionMatrix, 0, xk) : Ik.getTransformMatrix();
      return Xk.Ge.ProjectToRef(ak, Jk, tk, Qk, qk), qk.z < 0 || qk.z > 1 ? null : (ek.x = qk.x / ik * 100, ek.y = qk.y / yk * 100, ek)
    }

    function zk(kk, Fk) {
      return sk(kk, Ok(kk, Fk))
    }

    function Sk(kk, Fk) {
      const Ik = Vk(kk, Ok(kk, Fk));
      return Ik && {
        x: Ik.x,
        y: Ik.y
      }
    }

    function vk(kk) {
      var Fk, Ik;
      return 1 / (null !== (Fk = null === (Ik = kk.Xw.GIk()) || void 0 === Ik ? void 0 : Ik.projectionMatrix[0]) && void 0 !== Fk ? Fk : kk.Xw.mG().activeCamera.getProjectionMatrix().m[0])
    }

    function Ek(kk, Fk, Ik) {
      const Xk = kk.Xw.GIk(),
        Tk = Xk ? Xk.worldMatrix : kk.Xw.mG().activeCamera.getWorldMatrix().m,
        ik = kk.SZ;
      for (let yk = 0; yk < 3; yk++) Fk[yk] = Tk[12 + yk] + ik[yk], Ik[yk] = Tk[8 + yk];
      yk().normalize(Ik, Ik)
    }

    function Ok(kk, Fk) {
      const Ik = kk.SZ,
        Xk = kk.Xw.GIk(),
        Tk = Xk ? Kk.t5(Xk.eye[0], Xk.eye[1], Xk.eye[2]) : kk.Xw.camera.globalPosition;
      return jk[0] = Fk[0] - Ik[0] - Tk.x, jk[1] = Fk[1] - Ik[1] - Tk.y, jk[2] = Fk[2] - Ik[2] - Tk.z, yk().normalize(jk, jk), jk
    }

    function nk(kk, Fk) {
      return (0, lk.g)(kk, Fk, lk.d, (0, lk.j)())
    }
  },
  39034: (kk, Fk, Ik) => {
    Ik.d(Fk, {
      b: () => lk
    });
    var Xk = Ik(34),
      Tk = Ik(1270),
      ik = Ik(2889);
    const yk = "Reconnecting";
    class lk {
      constructor(kk) {
        this.hooks = kk, this.graceMs = 0, this.sessionBased = !1, this.controller = void 0, this.frozen = !1, this.stopped = !1, this.listening = !1, this.ended = !1, this.retryNow = () => {
          "visible" === document.visibilityState && this.controller.retryNow()
        }, this.onPageHide = kk => {
          kk.persisted || this.leave()
        }, this.controller = new ik.c((Fk => kk.reconnect(Fk)), {
          isSessionLive: () => !this.ended && kk.isLive(),
          onPhaseChanged: kk => {
            this.onPhaseChanged(kk)
          },
          onReconnected: Fk => {
            kk.onReconnected(Fk)
          },
          onGaveUp: Fk => {
            !this.ended && kk.isLive() && kk.onGaveUp(this.sessionBased, Fk)
          }
        })
      }
      onInitialInfo(kk, Fk) {
        this.graceMs = kk, this.sessionBased = Fk
      }
      canHoldSeat() {
        return this.graceMs > 0 && !this.ended
      }
      isResuming() {
        return "connected" !== this.controller.phase
      }
      onConnectionLost(kk) {
        this.ended || this.controller.onConnectionLost(kk, this.graceMs)
      }
      onResuming() {
        this.ended || this.controller.onResuming()
      }
      onResumed() {
        this.controller.stop()
      }
      leave() {
        const kk = this.isResuming() && !this.controller.awaitingResumeOnRoom,
          Fk = this.controller.heldToken;
        this.end(), kk && "" !== Fk && this.hooks.releaseSeat(Fk)
      }
      end() {
        this.ended = !0, this.controller.stop()
      }
      onPhaseChanged(kk) {
        const Fk = (0, ik.n)(kk);
        Fk !== this.stopped && (this.stopped = Fk, this.hooks.freeze(Fk));
        const Ik = "frozen" === kk || "resuming" === kk && this.frozen;
        Ik && !this.frozen ? (0, Tk.m)(yk, {
          overridesPause: !0
        }) : !Ik && this.frozen && (0, Tk.l)(yk), this.frozen = Ik, this.setListening("connected" !== kk), Xk.g.GL(ik.m, Ik ? "frozen" : kk)
      }
      setListening(kk) {
        kk !== this.listening && (this.listening = kk, kk ? (window.addEventListener("online", this.retryNow), document.addEventListener("visibilitychange", this.retryNow), window.addEventListener("pagehide", this.onPageHide)) : (window.removeEventListener("online", this.retryNow), document.removeEventListener("visibilitychange", this.retryNow), window.removeEventListener("pagehide", this.onPageHide)))
      }
    }
  },
  39040: (kk, Fk, Ik) => {
    Ik.d(Fk, {
      b: () => Xk
    });
    class Xk {
      constructor(kk) {
        let Fk = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Date.now;
        this.onSilent = kk, this.now = Fk, this.lastHeardAt = void 0, this.resumedAt = void 0, this.lastCheckAt = void 0, this.wasVisible = "visible" === document.visibilityState, this.interval = void 0, this.check = () => {
          const kk = this.now(),
            Fk = kk - this.lastCheckAt <= 2e3;
          this.lastCheckAt = kk;
          const Ik = "visible" === document.visibilityState;
          !Ik || Fk && this.wasVisible || (this.resumedAt = kk), this.wasVisible = Ik, Ik && kk - this.lastHeardAt > 12e3 && kk - this.resumedAt > 2e3 && this.onSilent()
        }, this.lastHeardAt = Fk(), this.resumedAt = this.lastHeardAt, this.lastCheckAt = this.lastHeardAt, this.interval = setInterval(this.check, 1e3), document.addEventListener("visibilitychange", this.check), window.addEventListener("online", this.check)
      }
      heard() {
        this.lastHeardAt = this.now()
      }
      dispose() {
        clearInterval(this.interval), document.removeEventListener("visibilitychange", this.check), window.removeEventListener("online", this.check)
      }
    }
  },
  38956: (kk, Fk, Ik) => {
    Ik.d(Fk, {
      b: () => Zk
    });
    var Xk = Ik(187),
      Tk = Ik(354),
      ik = Ik.n(Tk),
      yk = Ik(36764),
      lk = Ik(36772),
      ak = Ik(2700);
    const qk = Xk.f.NH * Xk.f.playerEyeToHeightRatio,
      Lk = 250,
      tk = 1.1,
      Zk = new class {
        constructor() {
          this.entities = new Map, this.playing = new Map, this.msSinceLastScan = 0
        }
        add(kk, Fk) {
          this.entities.set(kk, Fk)
        }
        update(kk, Fk) {
          const Ik = this.entities.get(kk);
          this.entities.set(kk, Fk);
          const Xk = this.playing.get(kk);
          Xk && (Ik && Ik.soundName === Fk.soundName ? (Xk.sound.setRelativeVolume(Fk.volume), Xk.sound.rate(Fk.rate), Xk.sound.setPannerAttr({
            refDistance: Fk.refDistance
          })) : this.stopEntity(kk))
        }
        remove(kk) {
          this.stopEntity(kk), this.entities.delete(kk)
        }
        Dt(kk) {
          this.msSinceLastScan += kk, this.msSinceLastScan < Lk || (this.msSinceLastScan = 0, this.scan())
        }
        stopEntity(kk) {
          const Fk = this.playing.get(kk);
          Fk && (Fk.sound.stop(), this.playing.delete(kk))
        }
        startEntity(kk, Fk, Ik) {
          const Xk = (0, lk.f)(Fk.soundName);
          if (!Xk) return console.error(`AudioEntityManager: no sound found for "${Fk.soundName}", dropping audio entity ${kk}`), void this.remove(kk);
          const Tk = yk.d.play(Xk, Fk.volume, Ik, Fk.maxHearDist, Fk.refDistance, !0);
          Tk.rate(Fk.rate), this.playing.set(kk, {
            sound: Tk,
            lastPos: ik().clone(Ik)
          })
        }
        scan() {
          const kk = (0, ak.e)();
          if (!kk) return;
          const Fk = kk.MJ.OJ(kk.oR);
          if (Fk)
            for (const [Ik, Xk] of this.entities) {
              if (!kk.MJ.Ukk(Ik, "position")) continue;
              const Tk = kk.MJ.OJ(Ik),
                yk = ik().sqrDist(Fk, Tk),
                lk = this.playing.get(Ik);
              if (lk) {
                const kk = Xk.maxHearDist * tk;
                yk > kk * kk ? this.stopEntity(Ik) : ik().equals(Tk, lk.lastPos) || (lk.sound.setPosition([Tk[0], Tk[1] + qk, Tk[2]]), ik().copy(lk.lastPos, Tk))
              } else yk <= Xk.maxHearDist * Xk.maxHearDist && this.startEntity(Ik, Xk, Tk)
            }
        }
      }
  },
  39054: (kk, Fk, Ik) => {
    Ik.d(Fk, {
      d: () => qk,
      f: () => Lk
    });
    var Xk = Ik(1649),
      Tk = Ik(187),
      ik = Ik(1631),
      yk = Ik(1716),
      lk = Ik(1194),
      ak = Ik(1120);
    async function qk(kk, Fk) {
      return function(kk) {
        return "object" === typeof kk && null !== kk && kk.code === Tk.d.VpnIp.code
      }(Fk) && function(kk) {
        return ik.b.supports("appCheck") && kk.isLoggedIn() && !kk.hasTriedAppAttestation()
      }(kk) && await async function(kk) {
        try {
          const {
            token: Fk
          } = await (0, yk.b)(), {
            "3PSIDMCPP": Ik
          } = await (0, ak.postJsonWithMetricsCookiesAndJsonResponse)(`${lk.clientSideServerUrls.indexUrl}/index/app-attestation`, {
            appCheckToken: Fk
          }, {
            retries: 0
          }, kk.getMetricsCookies());
          return kk.setAppAttestedAuthJwt(Ik), !0
        } catch (Fk) {
          return Fk instanceof Xk.d && "failed" === Fk.code ? (console.warn("The app couldn't get an App Check token:", Fk), kk.markAppAttestationTried()) : console.error("Failed to attest the app:", Fk), !1
        }
      }(kk)
    }
    async function Lk(kk, Fk) {
      try {
        return await Fk()
      } catch (Ik) {
        if (!await qk(kk, Ik)) throw Ik
      }
      return Fk()
    }
  },
  39046: (kk, Fk, Ik) => {
    Ik.d(Fk, {
      e: () => Zk,
      i: () => Lk
    });
    var Xk = Ik(187),
      Tk = Ik(1759),
      ik = Ik(1199),
      yk = Ik(8880);
    const lk = [250, 500, 1e3, 2e3, 1250],
      ak = 406;

    function qk(kk) {
      if ("object" !== typeof kk || null === kk) return !1;
      const {
        code: Fk,
        message: Ik
      } = kk, Tk = Xk.d.duplicateLobbyNameError;
      return (Fk === Tk.code || Fk === ak) && (Ik === Tk.text || Ik === Tk.text + Xk.m)
    }
    async function Lk(kk, Fk) {
      let Ik = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Tk.b;
      for (let Tk = 0;; Tk++) {
        let yk;
        (0, ik.m)(Fk);
        try {
          return await kk()
        } catch (Xk) {
          if (yk = lk[Tk], void 0 === yk || !qk(Xk)) throw Xk
        }
        await Ik(yk, Fk)
      }
    }
    const tk = new Set([Xk.d.duplicateLobbyNameError.code, Xk.d.lobbyCantBeCreated.code, Xk.d.roomDisposedEarlyError.code, Xk.d.roomDisposedLateError.code, Xk.d.serverRoomLimitReached.code]);

    function Zk(kk) {
      if (qk(kk)) return !0;
      const Fk = (0, yk.g)(kk);
      return "number" === typeof Fk && tk.has(Fk)
    }
  },
  39016: (kk, Fk, Ik) => {
    Ik.d(Fk, {
      b: () => ik,
      c: () => Tk
    });
    var Xk = Ik(34);

    function Tk(kk) {
      return "refetchCode" === kk || "devDownloadJson" === kk || kk.startsWith("Plugin")
    }

    function ik(kk, Fk) {
      "refetchCode" !== kk ? "Plugin|MobAiPlugin|ShowPetUi" !== kk ? Promise.all([Ik.e(107), Ik.e(108), Ik.e(103), Ik.e(105), Ik.e(214)]).then((() => Ik(41734))).then((Ik => {
        let {
          runClientGameMessage: Xk
        } = Ik;
        Xk(kk, Fk)
      })).catch((Fk => {
        console.error(`Game message ${kk} failed`, Fk)
      })) : Xk.g.GL("showPetUi", Fk) : Xk.g.GL("refetchCode")
    }
  },
  38997: (kk, Fk, Ik) => {
    Ik.d(Fk, {
      b: () => Lk
    });
    var Xk = Ik(1217),
      Tk = Ik(1308),
      ik = Ik(25),
      yk = Ik(1287),
      lk = Ik(1301),
      ak = Ik(1475),
      qk = Ik(36458);

    function Lk(kk) {
      let {
        OT: Fk,
        nT: Ik
      } = kk;
      const Lk = null !== Fk && void 0 !== Fk ? Fk : (0, lk.d)().gameNameWithVariation;
      (0, Xk.J)(Lk) && ((0, qk.l)(), (0, yk.bb)((() => {
        console.log("Received matchmaking order from game server to game", Fk), (0, ik.h)("inGameReplay"), (0, ak.navigatePreserveSearch)((0, Tk.e)(Lk, null !== Ik && void 0 !== Ik ? Ik : void 0))
      }), "video_start"))
    }
  },
  38992: (kk, Fk, Ik) => {
    Ik.d(Fk, {
      d: () => ak,
      h: () => yk,
      j: () => lk,
      l: () => qk
    });
    var Xk = Ik(34),
      Tk = Ik(1324);
    const ik = new Map;

    function yk(kk, Fk) {
      Xk.g.GL("newUiRequest", {
        id: kk,
        clientParameters: Fk
      }, !0)
    }

    function lk(kk) {
      Xk.g.GL("removeUiRequest", kk, !0);
      const Fk = ik.get(kk);
      Fk && (Fk.tearDownNotification(), ik.delete(kk))
    }

    function ak() {
      Xk.g.GL("clearUiRequests");
      for (const kk of ik.values()) kk.tearDownNotification();
      ik.clear()
    }

    function qk(kk, Fk, Ik, Xk) {
      const yk = Tk.NotificationProvider.showPromptPopup({
        title: Fk,
        confirmText: "general:yes",
        cancelText: "general:no",
        destructive: Ik,
        unlockPointerKey: "uiRequestPopup"
      });
      ik.set(kk, yk), yk.getResult().then((Fk => {
        ik.delete(kk), "notificationTornDown" !== Fk && Xk(Fk)
      }))
    }
  },
  39080: (kk, Fk, Ik) => {
    Ik.d(Fk, {
      b: () => jk,
      e: () => Zk
    });
    const Xk = "ue:",
      Tk = ["keydown", "keyup", "mousedown", "mouseup", "pointerdown", "pointerup", "touchstart", "touchend"],
      ik = "[A-Za-z0-9]{1,24}",
      yk = 15,
      lk = new RegExp(`^${ik}$`);
    new RegExp(`^${Xk}(${[...Tk,"other"].join("|")}):(?:n|k(${ik})|b(0|[1-9][0-9]?)):([01])([01])$`);

    function ak(kk, Fk, Ik, ik, ak) {
      const qk = "string" === typeof kk && Tk.includes(kk) ? kk : "other";
      let Lk = "n";
      return "string" === typeof Fk ? Lk = lk.test(Fk) ? `k${Fk}` : "n" : "number" === typeof Ik && Number.isInteger(Ik) && Ik >= 0 && Ik <= yk && (Lk = `b${Ik}`), `${Xk}${qk}:${Lk}:${ik?1:0}${ak?1:0}`
    }
    var qk = Ik(1604),
      Lk = Ik(1668);
    let tk = null;

    function Zk(kk) {
      const Fk = kk instanceof Element && kk !== document.body && kk !== document.documentElement && !(0, qk.p)(kk) && !kk.closest("#root");
      return {
        editable: (0, Lk.b)(kk),
        outsideView: Fk
      }
    }

    function jk(kk) {
      return tk ??= function(kk) {
        try {
          const {
            editable: Fk,
            outsideView: Ik
          } = Zk(kk.target), Xk = kk;
          return ak(kk.type, Xk.code, Xk.button, Fk, Ik)
        } catch {
          return ak(null, null, null, !1, !1)
        }
      }(kk), tk
    }
  },
  39020: (kk, Fk, Ik) => {
    Ik.d(Fk, {
      d: () => lk,
      f: () => ak,
      g: () => qk
    });
    var Xk = Ik(1217),
      Tk = Ik(1018),
      ik = Ik(36899),
      yk = Ik(34);

    function lk(kk) {
      let {
        lobbyName: Fk,
        gameNameWithVariation: Ik
      } = kk;
      return !(0, Xk.K)(Fk) || null !== Ik && (Ik.startsWith("testGym") || (0, Tk.j)(Ik))
    }

    function ak(kk) {
      return kk.Wi === ik.e.Leave || kk.Wi === ik.e.Cursor
    }

    function qk(kk) {
      yk.g.GL("codeCollab", {
        type: kk.Wi,
        docKey: kk.Bi,
        version: kk.Yi,
        editorCount: kk.Ai,
        peers: kk.gi,
        updates: kk.mi,
        playerId: kk.ri,
        playerName: kk.Di,
        colour: kk.Mi,
        anchor: kk.ky,
        head: kk.Fy,
        existingCursors: kk.Iy,
        files: kk.Xy,
        engineSettings: kk.Ty
      })
    }
  },
  38986: (kk, Fk, Ik) => {
    Ik.d(Fk, {
      d: () => Xk
    });
    class Xk {
      constructor() {
        this.members = new Map
      }
      apply(kk) {
        const Fk = {
          added: [],
          removed: [],
          settingChanges: []
        };
        for (const Xk of kk.DI) {
          let kk = this.members.get(Xk.MI);
          if (kk || (kk = {
              name: null,
              settings: {}
            }, this.members.set(Xk.MI, kk), Fk.added.push(Xk.MI)), null !== Xk.kX && (kk.name = Xk.kX), null !== Xk.FX || Xk.IX.length > 0) {
            const Ik = null === Xk.FX ? {} : JSON.parse(Xk.FX);
            Object.assign(kk.settings, Ik);
            for (const Fk of Xk.IX) delete kk.settings[Fk], Ik[Fk] = void 0;
            Fk.settingChanges.push({
              playerId: Xk.MI,
              settings: Ik
            })
          }
        }
        for (const Xk of kk.XX) {
          const kk = this.members.get(Xk);
          var Ik;
          if (kk) this.members.delete(Xk), Fk.removed.push({
            playerId: Xk,
            name: null !== (Ik = kk.name) && void 0 !== Ik ? Ik : void 0
          })
        }
        return Fk
      }
      has(kk) {
        return this.members.has(kk)
      }
      ids() {
        return [...this.members.keys()]
      }
      getName(kk) {
        var Fk, Ik;
        return null !== (Fk = null === (Ik = this.members.get(kk)) || void 0 === Ik ? void 0 : Ik.name) && void 0 !== Fk ? Fk : void 0
      }
      getSettings(kk) {
        var Fk;
        return null === (Fk = this.members.get(kk)) || void 0 === Fk ? void 0 : Fk.settings
      }
      getSetting(kk, Fk) {
        var Ik;
        return null === (Ik = this.members.get(kk)) || void 0 === Ik ? void 0 : Ik.settings[Fk]
      }
      clear() {
        this.members.clear()
      }
    }
  },
  39028: (kk, Fk, Ik) => {
    Ik.d(Fk, {
      d: () => Xk,
      e: () => Tk
    });
    const Xk = ["description", "label"];

    function Tk(kk) {
      const Fk = kk.type;
      return {
        type: Fk,
        params: kk[Fk]
      }
    }
  }
};
Object.freeze(modules);
for (const kk in modules) Object.freeze(modules[kk]);