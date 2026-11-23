export const id = 242;
export const ids = [242];
export const modules = {
  38944: (CC, zC, ZC) => {
    function QC(CC) {
      return !(!CC.lobbyLeaderboardInfo && !CC.lobbyManage)
    }
    ZC.d(zC, {
      d: () => QC
    })
  },
  38923: (CC, zC, ZC) => {
    ZC.d(zC, {
      e: () => bC,
      g: () => nC
    });
    var QC = ZC(28);
    let wC = !1;

    function bC() {
      return wC
    }

    function nC(CC) {
      wC !== CC && (wC = CC, QC.o.bp("replayViewer|videoExportChanged"))
    }
  },
  38859: (CC, zC, ZC) => {
    ZC.d(zC, {
      e: () => bC
    });
    var QC = ZC(28),
      wC = ZC(1865);

    function bC(CC) {
      let {
        taskId: zC,
        progress: ZC
      } = CC;
      const QC = wC.e.get("_tasks");
      null !== QC && void 0 !== QC && QC[zC] && wC.e.apply({
        _tasks: {
          ...QC,
          [zC]: {
            ...QC[zC],
            progress: ZC
          }
        }
      })
    }
    QC.o.subscribe("clientTaskProgress", (CC => {
      bC(CC)
    }))
  },
  38942: (CC, zC, ZC) => {
    ZC.d(zC, {
      e: () => AC,
      g: () => xC,
      k: () => RC
    });
    var QC = ZC(4733),
      wC = ZC(2800),
      bC = ZC(1806);
    const nC = new Map(Object.entries(QC.m).map((CC => {
      let [zC, ZC] = CC;
      return [ZC, zC]
    })));

    function fC(CC) {
      return (0, bC.w)(CC).toFixed(1)
    }

    function oC(CC, zC) {
      return `camera set by ${nC.get(CC[zC+1])}: heading ${`${fC(CC[zC+2])} -> ${fC(CC[zC+4])}`} deg, pitch ${`${fC(CC[zC+3])} -> ${fC(CC[zC+5])}`} deg, at ${CC[zC].toFixed(1)} ms`
    }
    class qC {
      constructor(CC, zC) {
        this.width = CC, this.HW = zC, this.data = void 0, this.next = 0, this.size = 0, this.data = new Float64Array(CC * zC)
      }
      push(CC) {
        let zC = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        const ZC = this.data.subarray(this.next * this.width, (this.next + 1) * this.width);
        for (let QC = 0; QC < this.width; QC++) ZC[QC] = CC[zC + QC];
        return this.next = (this.next + 1) % this.HW, this.size = Math.min(this.size + 1, this.HW), ZC
      }
      lines() {
        const CC = [],
          zC = (this.next - this.size + this.HW) % this.HW;
        for (let ZC = 0; ZC < this.size; ZC++) {
          const QC = (zC + ZC) % this.HW * this.width;
          CC.push(Array.from(this.data.subarray(QC, QC + this.width)).join(","))
        }
        return CC
      }
    }
    const FC = 0,
      WC = 2,
      NC = 3,
      MC = 4;

    function gC(CC) {
      return Number.isFinite(CC) ? String(Math.round(10 * CC) / 10) : String(CC)
    }

    function SC(CC) {
      return Number.isFinite(CC) ? CC.toFixed(1) : String(CC)
    }
    class pC {
      constructor() {
        this.frames = 0, this.looked = 0, this.idle = 0, this.qD = 0, this.pastLimit = 0, this.lockSkips = 0, this.Mp = 0, this.lost = 0, this.dropped = 0, this.longFrames = 0, this.dtMin = 1 / 0, this.dtMax = 0, this.dtSum = 0, this.raw = [0, 0], this.turned = [0, 0], this.peakRate = 0, this.events = 0, this.eventMax = 0, this.bigEvents = 0, this.cameraSets = 0, this.cameraSetsLost = 0, this.outliers = 0, this.eventLines = 0, this.suppressed = 0
      }
      moved() {
        return this.events > 0 || 0 !== this.raw[0] || 0 !== this.raw[1] || this.lockSkips > 0 || this.qD > 0 || this.dropped > 0 || this.cameraSets > 0
      }
      hasEvent() {
        return this.qD > 0 || this.pastLimit > 0 || this.bigEvents > 0 || this.dropped > 0 || this.cameraSets > 0
      }
    }
    class PC {
      constructor() {
        var CC = this;
        this.remote = (0, wC.l)(), this.tally = new pC, this.records = new qC(10, this.remote ? 1 : 3600), this.events = new qC(4, this.remote ? 1 : 12e3), this.event = new Float64Array(4), this.takes = null, this.client = "js", this.started = !1, this.record = function(zC) {
          let ZC = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
          const [QC, wC, bC, nC, fC, oC, qC, pC, PC, GC] = CC.records.push(zC, ZC), RC = CC.tally;
          switch (RC.frames++, qC) {
            case FC:
              return void RC.idle++;
            case MC:
              return void RC.Mp++;
            case NC:
              return RC.lockSkips++, void(0 === bC && 0 === nC || CC.outlier(`lock skip dropped raw (${gC(bC)}, ${gC(nC)}) at ${SC(QC)} ms`))
          }
          RC.looked++, Number.isFinite(wC) && (RC.dtMin = Math.min(RC.dtMin, wC), RC.dtMax = Math.max(RC.dtMax, wC), RC.dtSum += wC, wC > 0 && (RC.peakRate = Math.max(RC.peakRate, Math.hypot(fC, oC) / wC))), RC.raw[0] += bC, RC.raw[1] += nC, RC.turned[0] += fC, RC.turned[1] += oC;
          const AC = Math.abs(bC) > GC || Math.abs(nC) > GC,
            xC = `raw (${gC(bC)}, ${gC(nC)}) over ${SC(wC)} ms, limit ${gC(GC)}, filter v (${pC.toFixed(3)}, ${PC.toFixed(3)}) px/ms, at ${SC(QC)} ms`;
          qC === WC ? (RC.qD++, CC.outlier(`spike put right: ${xC} -> turned (${gC(fC)}, ${gC(oC)})`)) : AC ? (RC.pastLimit++, CC.outlier(`kept past limit: ${xC}`)) : wC > 50 && (RC.longFrames++, CC.remote || CC.outlier(`long frame: ${xC}, turned in full`))
        }, this.onMouseMove = CC => {
          const zC = this.tally,
            {
              movementX: ZC,
              movementY: QC
            } = CC;
          zC.events++;
          const wC = Math.max(Math.abs(ZC), Math.abs(QC));
          zC.eventMax = Math.max(zC.eventMax, wC);
          const bC = null !== document.pointerLockElement,
            nC = this.event;
          nC[0] = CC.timeStamp, nC[1] = ZC, nC[2] = QC, nC[3] = bC ? 1 : 0, this.events.push(nC), wC >= 200 && (zC.bigEvents++, this.eventOutlier(`big mousemove (${ZC}, ${QC}) at ${SC(CC.timeStamp)} ms, lock ${bC?"vq":"free"}`))
        }, this.onLockChange = () => {
          const CC = document.pointerLockElement;
          (0, wC.i)("look", `pointer lock ${CC?`gained (${CC.tagName.toLowerCase()})`:"lost"} at ${SC(performance.now())} ms`)
        }, this.onLockError = () => {
          (0, wC.i)("look", `pointer lock request failed at ${SC(performance.now())} ms`)
        }, this.onVisibility = () => {
          (0, wC.i)("look", `page ${document.visibilityState} at ${SC(performance.now())} ms`)
        }, this.flush = () => {
          this.takeRecords();
          const CC = this.tally;
          if (this.tally = new pC, !CC.moved() || this.remote && !CC.hasEvent()) return;
          const zC = CC.looked > 0 ? CC.dtSum / CC.looked : NaN,
            ZC = [`${CC.frames} frames (${CC.looked} looked, ${CC.idle} idle${"wasm"===this.client?`, ${CC.Mp} carried`:""})`, `dt avg ${SC(zC)} min ${SC(CC.dtMin)} max ${SC(CC.dtMax)}, ${CC.longFrames} long`, `${CC.events} mousemoves (max ${gC(CC.eventMax)} px, ${CC.bigEvents} big)`, `raw (${gC(CC.raw[0])}, ${gC(CC.raw[1])}) turned (${gC(CC.turned[0])}, ${gC(CC.turned[1])})`, `peak ${CC.peakRate.toFixed(2)} px/ms`, `put right ${CC.qD}, past limit ${CC.pastLimit}, lock skips ${CC.lockSkips}`, "lock " + (document.pointerLockElement ? "vq" : "free")];
          CC.dropped > 0 && ZC.push(`${CC.dropped} doubled spike copies dropped`), CC.cameraSets > 0 && ZC.push(`${CC.cameraSets} camera sets`), CC.cameraSetsLost > 0 && ZC.push(`${CC.cameraSetsLost} camera set records lost`), CC.lost > 0 && ZC.push(`${CC.lost} records lost`), CC.suppressed > 0 && ZC.push(`${CC.suppressed} outlier lines not shown`), (0, wC.i)("look", `1s: ${ZC.join("; ")}`)
        }, this.dump = () => [`look records (${this.client}): nowMs,dtMs,rawX,rawY,turnedX,turnedY,outcome,vX,vY,limit`, ...this.records.lines(), "mousemove events: timeStamp,movementX,movementY,locked", ...this.events.lines()].join("\n")
      }
      start(CC, zC) {
        this.client = CC, this.takes = zC;
        const {
          screen: ZC
        } = window;
        (0, wC.i)("look", `start: ${CC} client, dpr ${window.devicePixelRatio}, screen ${ZC.width}x${ZC.height}, pointer lock ${document.pointerLockElement?"vq":"free"}`), this.started || (this.started = !0, window.addEventListener("mousemove", this.onMouseMove, {
          capture: !0,
          passive: !0
        }), document.addEventListener("pointerlockchange", this.onLockChange), document.addEventListener("pointerlockerror", this.onLockError), document.addEventListener("visibilitychange", this.onVisibility), setInterval(this.flush, 1e3), this.remote || (0, wC.e)("look", this.dump))
      }
      outlier(CC) {
        const zC = this.tally;
        zC.outliers >= 20 ? zC.suppressed++ : (zC.outliers++, (0, wC.i)("look", CC))
      }
      eventOutlier(CC) {
        const zC = this.tally;
        zC.eventLines >= 10 ? zC.suppressed++ : (zC.eventLines++, (0, wC.i)("look", CC))
      }
      takeRecords() {
        if (null === this.takes) return;
        const CC = this.takes.look();
        if (CC.length >= 2) {
          this.tally.lost += CC[0], this.tally.dropped += CC[1];
          for (let zC = 2; zC + 10 <= CC.length; zC += 10) this.record(CC, zC)
        }
        const zC = this.takes.cameraSets();
        if (zC.length >= QC.d) {
          this.tally.cameraSetsLost += zC[0];
          for (let CC = QC.d; CC + QC.h <= zC.length; CC += QC.h) this.tally.cameraSets++, this.outlier(oC(zC, CC))
        }
      }
      droppedCopy() {
        this.tally.dropped++
      }
      endTake() {
        this.takeRecords(), this.takes = null
      }
    }
    let GC = null;

    function RC(CC) {
      let zC = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
      return GC ??= new PC, GC.start(CC, zC), GC.record
    }

    function AC() {
      var CC;
      null === (CC = GC) || void 0 === CC || CC.endTake()
    }

    function xC() {
      var CC;
      null === (CC = GC) || void 0 === CC || CC.droppedCopy()
    }
  },
  38786: (CC, zC, ZC) => {
    ZC.d(zC, {
      c: () => Vz,
      d: () => Oz,
      f: () => kz
    });
    var QC = ZC(3611),
      wC = ZC(134),
      bC = ZC(184),
      nC = ZC(603),
      fC = ZC(38),
      oC = ZC(2753),
      qC = ZC(3677),
      FC = ZC(3661),
      WC = ZC(1169);
    const NC = new WeakMap;
    class MC {
      constructor(CC, zC) {
        let ZC = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {
          FqC: !0
        };
        this.callbacks = zC, this.options = ZC, this.SZC = void 0, this.sessionId = void 0, this.hK = [], this.WqC = !1, this.Sg = !1, this.NqC = void 0, this.iK = 0, this.PwC = 0, this.MqC = (CC, zC) => {
          if (this.Sg) return;
          const ZC = Number(CC);
          this.WqC ? this.gqC(ZC, zC) : this.hK.push({
            id: ZC,
            payload: zC
          })
        }, this.dispose = () => {
          this.Sg || (this.Sg = !0, NC.delete(this), this.hK.length = 0, this.NqC())
        }, this.SZC = CC, this.sessionId = CC.sessionId, NC.set(this, []), this.NqC = this.SqC()
      }
      pqC(CC) {
        this.NqC(), this.SZC = CC, this.sessionId = CC.sessionId, this.iK = 0, this.PwC = 0, this.NqC = this.SqC()
      }
      get NK() {
        return this.PwC
      }
      SqC() {
        const CC = this.SZC.fR("*", this.MqC);
        return this.options.FqC && this.SZC.oR(this.dispose), CC
      }
      gqC(CC, zC) {
        try {
          (0, qC.lc)(CC) && (zC = (0, qC.d)(CC, FC.gg.from(zC)));
          const ZC = NC.get(this)[CC];
          if ("function" !== typeof ZC) {
            if (this.callbacks.PqC) return void this.callbacks.PqC(CC, zC);
            throw new Error(`No onMessage handler registered for message id ${CC}`)
          }
          ZC(zC)
        } catch (ZC) {
          this.callbacks.GqC(`Error in onMessage ${CC} with payload ${JSON.stringify(zC)}`, ZC)
        } finally {
          this.iK++
        }
      }
      RqC() {
        for (const {
            id: CC,
            payload: zC
          }
          of this.hK) {
          if (this.Sg) break;
          this.gqC(CC, zC)
        }
        this.hK.length = 0
      }
      GJ() {
        return this.Sg
      }
      AqC() {
        if (this.WqC || this.Sg) throw new Error("Trying to getOnMessageRegistrationHandler after registration finished");
        return {
          fR: (CC, zC) => {
            if (this.WqC || this.Sg) throw new Error("Trying to call onMessage after registration finished");
            this.fR(CC, zC)
          },
          finishRegistration: () => {
            if (this.Sg) throw new Error("Cannot finish message registration after disposal");
            this.WqC = !0, this.RqC()
          }
        }
      }
      fR(CC, zC) {
        var ZC, QC;
        null === (ZC = (QC = this.callbacks).xqC) || void 0 === ZC || ZC.call(QC);
        const wC = NC.get(this);
        for (; CC > wC.length;) wC[wC.length] = null;
        wC[CC] = zC
      }
      send(CC, zC) {
        this.JqC(), (0, WC.L)(zC) ? this.SZC.VK(CC, zC) : this.SZC.send(CC, zC)
      }
      JqC() {
        var CC, zC;
        (this.PwC++, 5 === gC++) && (null === (CC = (zC = this.callbacks).xqC) || void 0 === CC || CC.call(zC), gC = 0)
      }
      xG() {
        this.dispose(), this.SZC.xG()
      }
      leave() {
        this.dispose(), this.SZC.leave()
      }
    }
    let gC = 0;
    var SC = ZC(3631);
    class pC extends MC {
      constructor(CC) {
        super(CC, {
          xqC: () => {
            (0, fC.m)(!0) && (0, QC.WK)()
          },
          GqC: (CC, zC) => {
            var ZC;
            null === (ZC = (0, oC.e)()) || void 0 === ZC || ZC.xS(CC, zC)
          }
        }, {
          FqC: !1
        }), (0, SC.h)(CC)
      }
      lK(CC, zC) {
        return !!(0, SC.k)((0, SC.d)(), this.SZC, CC, zC) && (this.JqC(), !0)
      }
      pqC(CC) {
        this.IqC(), super.pqC(CC), (0, SC.h)(CC)
      }
      xG() {
        super.xG(), this.IqC()
      }
      IqC() {
        this.SZC.JG.wg.qm = void 0
      }
    }
    var PC = ZC(28),
      GC = ZC(1865),
      RC = ZC(1645),
      AC = ZC(36342),
      xC = ZC(38795),
      JC = ZC(37877),
      IC = ZC(37640),
      iC = ZC(600),
      vC = ZC(38249);

    function eC(CC, zC, ZC) {
      const QC = function(CC) {
          const zC = new Int32Array(CC.length * vC.h);
          return CC.forEach(((CC, ZC) => {
            const QC = ZC * vC.h;
            if (4 === CC.length) {
              const [ZC, wC, bC, nC] = CC;
              zC.set([ZC, wC, bC, ZC, wC, bC, nC], QC)
            } else {
              const [ZC, wC, bC, nC, fC, oC, qC] = CC;
              zC.set([ZC, bC, fC, wC, nC, oC, qC], QC)
            }
          })), zC
        }(ZC),
        wC = (zC, ZC, QC, wC) => {
          CC.setBlockNoMulti(zC, ZC, QC, wC, !0)
        };
      CC.client.gameRecorder.isCapturing() ? (0, vC.ob)(QC, (0, vC.lb)(QC), wC) : CC.MN.fN.HJ(QC, {
        zD: wC,
        isHookId: zC => CC.blockChangeHasHooks(zC),
        watched: () => function(CC, zC, ZC) {
          const QC = [],
            wC = (CC, zC, ZC) => {
              QC.push(CC, zC, ZC)
            },
            bC = new Set;
          for (let nC = 0; nC < ZC.length; nC += vC.h)
            for (let zC = (0, iC.Q)(ZC[nC]); zC <= (0, iC.Q)(ZC[nC + 3]); zC++)
              for (let QC = (0, iC.Q)(ZC[nC + 1]); QC <= (0, iC.Q)(ZC[nC + 4]); QC++)
                for (let fC = (0, iC.Q)(ZC[nC + 2]); fC <= (0, iC.Q)(ZC[nC + 5]); fC++) {
                  const ZC = `${zC}|${QC}|${fC}`;
                  bC.has(ZC) || (bC.add(ZC), CC.blockDataOwner.forEachDataCell(zC, QC, fC, wC))
                }
          return zC.forEachCell(wC), Int32Array.from(QC)
        }(CC, zC, QC)
      }), CC.MN.GCC()
    }

    function hC(CC) {
      CC.wZC = new Set, CC.fZC = new Set, CC.bZC = new Set, CC.oZC = new Set, CC.nZC = [], CC.qZC = [], CC.wT = new Set, CC.Rb = [], CC.qT = []
    }
    class KC {
      constructor(CC) {
        this.MN = CC
      }
      register(CC) {
        const zC = this.MN,
          ZC = (0, oC.c)();
        CC.fR(qC.V, (CC => {
          zC.fN.wZC.add(CC), zC.fN.fZC.delete(CC)
        })), CC.fR(qC.ab, (CC => {
          zC.fN.fZC.add(CC), zC.fN.wZC.delete(CC)
        })), CC.fR(qC.ee, (CC => {
          zC.fN.fZC.delete(CC), zC.fN.wZC.delete(CC)
        })), CC.fR(qC._, (CC => {
          zC.fN.bZC.add(CC), zC.fN.oZC.delete(CC)
        })), CC.fR(qC.cb, (CC => {
          zC.fN.oZC.add(CC), zC.fN.bZC.delete(CC)
        })), CC.fR(qC.le, (CC => {
          zC.fN.oZC.delete(CC), zC.fN.bZC.delete(CC)
        })), CC.fR(qC.Z, (CC => {
          (0, WC.mb)(CC, zC.fN.qZC), (0, WC.mb)(CC, zC.fN.nZC), zC.fN.nZC.push(CC)
        })), CC.fR(qC.bb, (CC => {
          (0, WC.mb)(CC, zC.fN.nZC), (0, WC.mb)(CC, zC.fN.qZC), zC.fN.qZC.push(CC)
        })), CC.fR(qC.he, (CC => {
          (0, WC.mb)(CC, zC.fN.nZC), (0, WC.mb)(CC, zC.fN.qZC)
        })), CC.fR(qC.Hf, (CC => {
          let {
            qZ: ZC,
            FZ: QC
          } = CC;
          QC ? zC.fN.wT.delete(ZC) : zC.fN.wT.add(ZC)
        })), CC.fR(qC.Df, (CC => {
          let {
            Rb: QC,
            Ab: wC
          } = CC;
          ZC.updateWalkThroughRect(zC.qE, QC, wC)
        })), (0, QC.onGameResetOnce)((() => {
          hC(zC.fN)
        })), CC.fR(qC.gc, (CC => {
          JC.c.applyServerUpdate(CC)
        })), CC.fR(qC.gb, (CC => {
          ZC.applyServerBlocks((() => {
            ! function(CC, zC) {
              for (const {
                  Xb: ZC,
                  cb: QC
                }
                of zC) {
                const zC = IC.b[QC];
                if (zC) {
                  const {
                    compX: QC,
                    compY: wC,
                    compZ: bC,
                    mainMultiblock: nC
                  } = zC;
                  CC.TY(ZC[0] - QC, ZC[1] - wC, ZC[2] - bC, nC)
                }
              }
              for (const {
                  Xb: ZC,
                  cb: QC,
                  ub: wC
                }
                of zC) CC.setBlockNoMulti(ZC[0], ZC[1], ZC[2], QC, !0), CC.blockDataOwner.setBlockData(ZC[0], ZC[1], ZC[2], null === wC ? void 0 : JSON.parse(wC)), CC.blockAdded(ZC[0], ZC[1], ZC[2], QC)
            }(ZC, CC)
          })), PC.o.bp("changeBlockFail", CC), ZC.client.triggerGameCallback("onChangeBlockFail", CC), PC.o.bp("EditBoard", {
            pos: null
          }), PC.o.bp("EditCodeBlock", {
            pos: null,
            canChangePos: null
          })
        })), CC.fR(qC.Gb, (CC => {
          ZC.applyServerBlocks((() => {
            eC(ZC, JC.c, CC)
          }))
        })), CC.fR(qC.wf, (CC => {
          let {
            Dw: zC,
            jw: QC
          } = CC;
          if (ZC.Gy(zC[0], zC[1], zC[2])) {
            const CC = (0, oC.c)().rG(zC[0], zC[1], zC[2]);
            (0, oC.c)().updateMailboxContents(zC[0], zC[1], zC[2], CC, QC)
          }
        })), CC.fR(qC.Ge, (CC => {
          let {
            pos: zC,
            data: QC
          } = CC;
          ZC.blockDataOwner.setBlockData(zC[0], zC[1], zC[2], QC), ZC.blockAdded(zC[0], zC[1], zC[2], ZC.rG(zC[0], zC[1], zC[2]))
        }))
      }
    }
    var YC = ZC(37018),
      dC = ZC(36647),
      mC = ZC(37911),
      HC = ZC(37748),
      EC = ZC(37928);
    class lC {
      constructor(CC, zC) {
        this.MN = CC, this.setUpQueuedEntity = zC
      }
      register(CC) {
        const zC = this.MN,
          ZC = (0, oC.c)();
        CC.fR(qC.S, (CC => {
          let {
            aQ: zC,
            tQ: ZC
          } = CC;
          this.setUpQueuedEntity(zC), zC = (0, dC.c)(zC), (0, oC.c)().client.gameRecorder.recordBulletShot(zC, ZC), PC.o.bp(`bulletShot|${zC}`, {
            bulletDirections: ZC
          })
        })), CC.fR(qC.ic, (CC => {
          let {
            UC: zC,
            BC: ZC
          } = CC;
          PC.o.bp("damagedByOtherPlayer", {
            UC: zC,
            direction: ZC
          }, !0)
        })), CC.fR(qC.Cd, (CC => {
          PC.o.bp("playerKilled", CC, !0), (0, oC.c)().client.gameRecorder.recordPlayerKilled(CC.deadEId, CC.killerEId, CC.withItem, CC.killstreak)
        })), CC.fR(qC.Pb, (CC => {
          PC.o.bp("customKillfeed", CC, !0), (0, oC.c)().client.gameRecorder.recordCustomKillfeed(CC.killer, CC.victim, CC.withItem)
        })), CC.fR(qC.Kd, (CC => {
          let {
            PQ: ZC,
            GQ: QC
          } = CC;
          this.setUpQueuedEntity(ZC);
          const wC = zC.JR.XzC(ZC);
          null !== wC && void 0 !== wC && wC.isGun() && wC.reload(Date.now(), QC)
        })), CC.fR(qC.Be, (CC => {
          let {
            RQ: ZC,
            AQ: QC
          } = CC;
          const wC = QC ? (0, EC.d)(zC, QC) : void 0;
          PC.o.bp("sendHitmarker", {
            RQ: ZC,
            screenPos: wC
          }, !0)
        })), CC.fR(qC.Uc, (CC => {
          let {
            ib: QC,
            eb: wC,
            Kb: bC,
            Yb: nC,
            Hb: fC,
            Eb: oC,
            lb: qC
          } = CC;
          this.setUpQueuedEntity(QC), QC = (0, dC.c)(QC);
          const FC = zC.JR.KzC(QC);
          if (FC && (FC.lastHurtTime = performance.now()), (0, mC.playRigHurt)(zC, QC, oC), PC.o.bp("lifeformHurt", {
              eId: QC,
              lb: qC
            }), wC) {
            const CC = (0, EC.d)(zC, wC.AQ);
            PC.o.bp("yourAttackHit", {
              RQ: nC,
              screenPos: CC,
              hitSelf: QC === zC.qE
            })
          }
          QC === zC.qE && (ZC.shakePlayerCamera(QC, fC / 40, 200), PC.o.bp("closeShopOnDamaged", null), PC.o.bp("damagedByOtherPlayer", {
            UC: null,
            direction: oC,
            Hb: fC
          }, !0));
          const WC = zC.JR.yG(QC);
          if (WC && (bC || nC)) {
            const CC = [WC[0], WC[1] + 1, WC[2]];
            bC && (0, HC.n)(zC, HC.B, CC, 15), nC && (0, HC.n)(zC, HC.q, CC, 10)
          }
        })), CC.fR(qC.Sc, (CC => {
          let {
            pz: ZC,
            Pz: QC,
            Gz: wC
          } = CC;
          (0, YC.c)(zC).setHealthFrac((0, dC.c)(ZC), wC), PC.o.bp("lifeformHealthChanged", {
            eId: (0, dC.c)(ZC),
            Pz: QC,
            Gz: wC
          })
        })), CC.fR(qC.N, (CC => {
          let {
            EQ: ZC,
            lQ: QC
          } = CC;
          (0, oC.c)().playerAttacked(zC.qE, ZC, QC)
        })), CC.fR(qC.kb, (() => {
          const CC = zC.JR.XzC(zC.qE);
          null !== CC && void 0 !== CC && CC.isChargeable() && CC.finishCharging(!1, Date.now())
        })), CC.fR(qC.Xb, (CC => {
          let {
            gQ: zC,
            SQ: ZC,
            pQ: QC,
            Aw: wC,
            xw: bC,
            Jw: nC
          } = CC;
          zC = (0, dC.c)(zC), (0, oC.c)().client.updateEffect(zC, ZC, {
            displayName: QC,
            icon: wC,
            duration: bC,
            level: nC
          })
        })), CC.fR(qC.Md, (CC => {
          let {
            gQ: zC,
            SQ: ZC
          } = CC;
          zC = (0, dC.c)(zC), (0, oC.c)().client.removeEffect(zC, ZC)
        })), CC.fR(qC.qf, (CC => {
          PC.o.bp("ttbEffectMultiplier", CC)
        }))
      }
    }
    var XC = ZC(38818),
      cC = ZC(37014),
      uC = ZC(4166),
      rC = ZC(37934),
      sC = ZC(36637),
      TC = ZC(36641),
      aC = ZC(36940),
      tC = ZC(37103),
      DC = ZC(37943),
      jC = ZC(38824);
    class yC {
      constructor(CC, zC) {
        this.MN = CC, this.setUpQueuedEntity = zC
      }
      register(CC) {
        const zC = this.MN,
          ZC = (0, oC.c)();
        CC.fR(qC.ed, (CC => {
          let {
            eId: ZC,
            settings: QC
          } = CC;
          (0, tC.d)(ZC);
          for (const zC in QC)(0, tC.b)(ZC, zC, QC[zC]);
          if ("canSee" in QC && zC.JR.YCC(ZC, "hidingMeshManager")) {
            const CC = zC.JR.getState(ZC, "hidingMeshManager");
            CC.canSee = (0, DC.c)("canSee", QC.canSee), CC._forceUpdate = !0
          }
        })), CC.fR(qC.G, (CC => {
          let {
            yw: ZC,
            Lw: QC,
            animationScript: wC,
            Uw: bC,
            Bw: nC,
            Ow: fC,
            kw: qC
          } = CC;
          ZC = (0, dC.c)(ZC);
          const FC = null === wC && null !== fC ? (0, XC.e)(fC, qC) : wC;
          (0, oC.c)().client.gameRecorder.recordAnimateEntity(ZC, QC, FC, bC, nC), (0, YC.c)(zC).animations.animateEntity(ZC, QC, wC, bC, nC, fC, qC), null !== wC || ZC === zC.qE && QC === cC.d.Emote && (0, oC.c)().client.cameraController.endTemporaryThirdPerson()
        })), CC.fR(qC.ze, (CC => {
          (0, jC.d)(CC)
        })), CC.fR(qC.Bd, (CC => {
          for (const zC of CC)(0, rC.w)(zC);
          PC.o.bp("playerCosmeticsUpdated", CC, !0)
        })), CC.fR(qC.J, (CC => {
          for (const ZC of CC)(0, aC.e)(zC, ZC)
        })), CC.fR(qC.fd, (CC => {
          (0, HC.p)(zC, (0, WC.x)(CC))
        })), CC.fR(qC.gd, (CC => {
          uC.e[CC.Nb] ? (0, HC.p)(zC, {
            ...uC.e[CC.Nb],
            pos1: CC.pos1,
            pos2: CC.pos2
          }) : console.error(`Unknown preset id: ${CC.Nb}`)
        })), CC.fR(qC.xd, (CC => {
          var zC, ZC;
          let {
            DQ: QC,
            jQ: wC,
            yQ: bC,
            LQ: nC
          } = CC, {
            BQ: fC,
            OQ: qC
          } = null !== nC && void 0 !== nC ? nC : {};
          const {
            UQ: FC
          } = null !== nC && void 0 !== nC ? nC : {};
          fC = null !== (zC = fC) && void 0 !== zC ? zC : void 0, qC = null !== (ZC = qC) && void 0 !== ZC ? ZC : void 0, "string" === typeof FC && this.setUpQueuedEntity(FC), (0, oC.c)().client.gameRecorder.recordPlaySound(QC, wC, bC, nC), sC.e.play((0, TC.g)(QC), wC, FC, fC, qC).rate(bC)
        })), CC.fR(qC.Af, (CC => {
          for (const zC in CC) {
            const QC = CC[zC];
            for (const CC in QC) ZC.client.meshCreator.handleParticleSystemUpdate(zC, CC, QC[CC])
          }
        }))
      }
    }
    var LC = ZC(37609),
      UC = ZC(37581);
    class BC {
      constructor(CC) {
        this.MN = CC
      }
      register(CC) {
        const zC = this.MN,
          ZC = (0, oC.c)();

        function QC() {
          return zC.JR.SzC(zC.qE)
        }
        CC.fR(qC.wc, (CC => {
          let {
            Cz: ZC,
            zz: QC,
            Zz: wC,
            Qz: bC,
            wz: nC,
            bz: fC,
            nz: oC,
            fz: qC,
            qz: FC
          } = CC;
          if (!zC.JR.YCC(ZC, "itemState")) return void(0, LC.m)(zC, ZC, [nC, fC, oC], QC, {
            amount: wC,
            attributes: JSON.parse(bC),
            fz: qC,
            size: FC
          });
          const WC = zC.JR.getState(ZC, "itemState");
          WC.amount = wC, WC.fz = qC, WC.creationTime = Date.now(), (0, UC.setServerPosition)(zC.JR.getState(ZC, "smoothToServerPos"), nC, fC, oC)
        })), CC.fR(qC.db, (CC => {
          (0, YC.c)(zC).setCantPickUp(CC, !0), zC.JR.YCC(CC, "itemState") && (zC.JR.getState(CC, "itemState").fz = !0)
        })), CC.fR(qC.ae, (CC => {
          (0, YC.c)(zC).setCantPickUp(CC, !1), zC.JR.YCC(CC, "itemState") && (zC.JR.getState(CC, "itemState").fz = !1)
        })), CC.fR(qC.ud, (CC => {
          let {
            pickUpItems: zC,
            pickUpAckSeq: ZC
          } = CC;
          for (const {
              name: wC,
              amount: bC,
              attributes: nC
            }
            of zC) QC().pickUpItem({
            name: wC,
            amount: bC,
            typeObj: LC.x[wC],
            attributes: nC
          });
          (0, oC.c)().client.inventoryPrediction.serverChangeApplied(ZC)
        })), CC.fR(qC.Ve, (CC => {
          let {
            index: ZC,
            name: QC,
            amount: wC,
            attributes: bC,
            setSlotAckSeq: nC
          } = CC;
          const fC = zC.JR.pzC(zC.qE);
          (ZC < fC.playerInventory.numSlots || fC.bQ || fC.inCreative) && fC.setItemSlot(ZC, QC, wC, bC), (0, oC.c)().client.inventoryPrediction.serverChangeApplied(nC)
        })), CC.fR(qC.tc, (CC => {
          (0, oC.c)().client.inventoryPrediction.acknowledge(CC)
        })), CC.fR(qC.E, (CC => {
          let {
            Nz: zC,
            Mz: ZC,
            gz: QC,
            Sz: wC
          } = CC;
          (0, oC.c)().client.itemDropPrediction.onActionItemDrops(zC, ZC, QC, wC)
        })), CC.fR(qC.Bb, (CC => {
          QC().clearInventory(), (0, oC.c)().client.inventoryPrediction.serverChangeApplied(CC)
        })), CC.fR(qC.Xe, (CC => {
          PC.o.bp("setSelectedInventorySlotI", CC, !0)
        })), CC.fR(qC.rb, (CC => {
          let {
            iQ: ZC,
            vQ: QC,
            eQ: wC,
            hQ: bC,
            KQ: nC,
            YQ: fC,
            dQ: qC,
            mQ: FC
          } = CC;
          const WC = zC.JR.pzC(zC.qE);
          if (fC) {
            const {
              wQ: CC,
              FQ: zC
            } = FC;
            return (0, oC.c)().client.inventoryPrediction.y_(zC, (() => {
              WC.chestRefreshed(QC, wC, bC, qC, CC)
            })) && PC.o.bp("chestToggleFromServer", !1, !0), void PC.o.bp("chestRefreshedFromServer")
          }(ZC || WC.bQ) && (ZC ? (WC.chestOpened(QC, wC, bC, nC, qC), null !== nC && (0, oC.c)().client.ironChestPasskeyCache.onChestOpened(bC, nC)) : WC.chestClosed(), PC.o.bp("chestToggleFromServer", ZC, !0))
        })), CC.fR(qC.Tb, (CC => {
          let {
            craftingRecipeItemName: QC,
            recipesForItem: wC
          } = CC;
          QC ? ZC.craftingManager.editRecipesForPlayer(zC.qE, QC, wC) : ZC.craftingManager.resetAllPlayerRecipes(zC.qE), PC.o.bp("craftingRecipesEdited", {
            itemName: QC,
            recipesForItem: wC
          })
        })), CC.fR(qC.Qd, (CC => {
          let {
            OC: zC,
            kC: ZC,
            VC: wC
          } = CC;
          QC().removeItemName(zC, ZC), (0, oC.c)().client.inventoryPrediction.serverChangeApplied(wC)
        })), CC.fR(qC.Nd, (CC => {
          let {
            Gb: QC
          } = CC;
          ZC.craftingManager.removeRecipes(zC.qE, QC), PC.o.bp("craftingRecipesEdited", {
            itemName: QC,
            recipesForItem: []
          })
        }))
      }
    }
    var OC = ZC(6484),
      kC = ZC(37277),
      VC = ZC(338),
      Cz = ZC.n(VC),
      zz = ZC(4456),
      Zz = ZC(37523),
      Qz = ZC(38078),
      wz = ZC(37275);
    class bz {
      constructor(CC, zC) {
        this.MN = CC, this.setUpQueuedEntity = zC
      }
      register(CC) {
        const zC = this.MN,
          ZC = (0, oC.c)();
        CC.fR(qC.kf, (CC => {
          let {
            sw: ZC,
            Tw: wC,
            aw: bC,
            tw: nC
          } = CC;
          const fC = [wC, bC, nC];
          zC.JR.setPosition(zC.qE, fC), (0, QC.sendColyMessage)(qC.Yg, {
            zf: ZC,
            Zf: zz.h
          }), PC.o.bp("localPlayerTeleported", {
            pos: fC,
            isCorrection: !1
          })
        })), CC.fR(qC.od, (CC => {
          let {
            vz: zC,
            ez: ZC,
            hz: QC,
            Kz: wC
          } = CC;
          this.setUpQueuedEntity(zC);
          const bC = [ZC, QC, wC];
          PC.o.bp(`otherPlayerTeleported|${zC}`, {
            pos: bC
          })
        })), CC.fR(qC.Fd, (CC => {
          let {
            zw: ZC,
            Zw: wC,
            Qw: bC,
            ww: nC,
            bw: fC,
            nw: oC,
            fw: FC,
            qw: WC,
            ow: NC,
            Nw: MC
          } = CC;
          const gC = [wC, bC, nC];
          zC.JR.setPosition(zC.qE, gC);
          const SC = zC.JR.yCC(zC.qE),
            pC = zC.JR.eT(zC.qE);
          Cz().set(pC.Hr, 0, 0, 0), Cz().set(pC.Vr, 0, 0, 0), Cz().set(pC.Np, fC, oC, FC), pC.Qs(), SC._flying = null !== MC, MC ? (SC.flyAccel.Mw = MC.Mw, SC.flyAccel.gw = MC.gw) : SC.flyAccel.reset(), WC && SC.movementType === OC.o.GLIDING && (SC.Fw = WC.Fw, Cz().copy(SC.Ww, WC.Ww)), (0, QC.sendColyMessage)(qC.Yg, {
            zf: ZC,
            Zf: zz.h
          }), PC.o.bp("localPlayerTeleported", {
            pos: gC,
            isCorrection: !0
          })
        })), CC.fR(qC.Ze, (CC => {
          let {
            vehicleEId: zC,
            overrides: ZC
          } = CC;
          (0, oC.c)().applyRiddenVehicleSettingOverrides(zC, ZC)
        })), CC.fR(qC.Cf, (CC => {
          let {
            DC: ZC,
            jC: QC,
            yC: wC
          } = CC;
          const bC = zC.JR.yCC(zC.qE).physicsState.type === OC.r.SLEEPING && ZC === OC.r.DEFAULT;
          (0, oC.c)().updatePositionAndPhysics(zC.qE, {
            type: ZC,
            tier: QC
          }, !0, wC), bC && (0, oC.c)().updateHeldVehicleStatus()
        })), CC.fR(qC.jb, (CC => {
          let {
            Fz: ZC,
            Wz: QC
          } = CC;
          zC.JR.MzC(zC.qE).setPose(ZC, QC)
        })), CC.fR(qC.Ie, (CC => {
          const {
            pg: ZC,
            yzC: QC
          } = (0, kC.d)([CC[0], CC[1], CC[2]]);
          wz.b.setLookDirection(zC, ZC, QC), (0, Zz.v)(ZC, QC);
          const wC = zC.JR.MzC(zC.qE);
          wC && (wC.heading = ZC)
        })), CC.fR(qC.Ke, (CC => {
          ZC.client.cameraController.setCameraZoom(CC)
        })), CC.fR(qC.af, (CC => {
          let {
            Iw: QC,
            iw: wC
          } = CC;
          ZC.shakePlayerCamera(zC.qE, QC, wC)
        })), CC.fR(qC.Ec, (CC => {
          zC.JR.MzC(zC.qE).jumpMultiplier.setMultiplierType("jumpEffectAmount", CC)
        })), (0, QC.onGameResetOnce)((() => {
          zC.JR.MzC(zC.qE).jumpMultiplier.setMultiplierType("jumpEffectAmount", 1)
        })), CC.fR(qC.H, (CC => {
          zC.JR.eT(zC.qE).applyImpulse(CC)
        })), CC.fR(qC._e, (CC => {
          const ZC = zC.JR.eT(zC.qE);
          Cz().set(ZC.Hr, 0, 0, 0), Cz().set(ZC.Vr, 0, 0, 0), Cz().copy(ZC.Np, CC), ZC.Qs()
        })), (0, QC.onGameResetOnce)((() => {
          (0, Qz.setFloatingYValue)(zC.JR.getState(zC.qE, "physics"), zC.JR.lL(zC.qE), null)
        })), CC.fR(qC.$b, (CC => {
          let {
            XQ: ZC,
            cQ: QC,
            uQ: wC
          } = CC;
          const bC = (0, dC.c)(ZC);
          if (bC === zC.qE) {
            const CC = zC.JR.lL(zC.qE).position;
            wC ??= Math.floor(CC[1]) - 1, (0, Qz.setFloatingYValue)(zC.JR.getState(zC.qE, "physics"), zC.JR.lL(zC.qE), QC ? wC : null)
          }(0, YC.c)(zC).setFloating(bC, QC, wC);
          const nC = zC.JR.getState(bC, "floating");
          nC && (nC.isFloating = QC, nC.uQ = QC ? wC : null)
        }))
      }
    }

    function nz(CC, zC, ZC, QC, wC) {
      let bC = arguments.length > 5 && void 0 !== arguments[5] && arguments[5];
      if (!CC.JR.gzC(CC.qE)) return console.log("Got resync inven but don't have inven component"), void zC.acknowledge(QC);
      bC && console.error("Had to sync inven"), zC.y_(QC, wC) && ZC.bp("chestToggleFromServer", !1, !0), ZC.bp("syncedInvenFromServer")
    }
    var fz = ZC(38841),
      oz = ZC(38848),
      qz = ZC(1867);
    var Fz = ZC(4437);

    function Wz(CC) {
      const zC = CC.fN;
      let ZC = 0,
        wC = -1,
        nC = -1 / 0,
        fC = null,
        oC = !0;
      const FC = () => {
        if (++ZC % 10 !== 0) return;
        const FC = (0, QC.getLastReceivedPacketId)();
        if (FC <= wC) return;
        const [WC, NC, MC] = CC.JR.yG(CC.qE), gC = ! function(CC) {
          var zC;
          let ZC = null === (zC = CC.JR.BzC(CC.qE)) || void 0 === zC ? void 0 : zC.og;
          if (void 0 === ZC) return !1;
          const QC = new Set;
          for (; void 0 !== ZC && !QC.has(ZC);) {
            var wC;
            QC.add(ZC);
            const zC = CC.JR.getState(ZC, "smoothToServerPos"),
              bC = Array.isArray(zC) ? null : null === zC || void 0 === zC ? void 0 : zC.serverPosition;
            if (bC) {
              const zC = CC.JR.yG(ZC);
              if (Math.abs(zC[0] - bC[0]) > 10 || Math.abs(zC[1] - bC[1]) > 10 || Math.abs(zC[2] - bC[2]) > 10) return !0
            }
            ZC = null === (wC = CC.JR.BzC(ZC)) || void 0 === wC ? void 0 : wC.og
          }
          return !1
        }(CC) && function(CC, zC, ZC, QC) {
          const wC = bC.f.Ig;
          for (let bC = 0; bC < CC.length; bC++) {
            const nC = CC[bC];
            if (!(0, Fz.i)(zC, ZC, QC, nC[0] * wC, nC[1] * wC, nC[2] * wC)) return !1
          }
          return !0
        }(zC.kS.Pg, WC, NC, MC), SC = null === fC || Math.abs(WC - fC[0]) > 8 || Math.abs(NC - fC[1]) > 8 || Math.abs(MC - fC[2]) > 8, pC = !oC || SC || performance.now() - nC >= 1e4;
        oC = gC, gC && pC && (wC = FC, nC = performance.now(), fC = [WC, NC, MC], (0, QC.sendColyMessage)(qC.Bg, {
          jn: FC
        }))
      };
      return CC.on("ZN", FC), () => {
        CC.off("ZN", FC)
      }
    }
    var Nz = ZC(38850),
      Mz = ZC(1453),
      gz = ZC(2745),
      Sz = ZC(2909),
      pz = ZC(4706);
    class Pz {
      constructor(CC, zC, ZC) {
        this.MN = CC, this.gameNameWithVariation = zC, this.connectionResume = ZC, this.stopChunkReports = () => {}, this.replayResume = null
      }
      clearUiRequestsAndQTEs() {
        pz.c.reset(), (0, fz.e)()
      }
      startChunkReports() {
        const CC = function(CC) {
            let zC = null,
              ZC = -1 / 0,
              wC = null;
            const bC = () => {
                wC = null;
                const bC = Math.ceil(CC.FY[0]),
                  nC = Math.ceil(CC.FY[1]);
                zC && zC[0] === bC && zC[1] === nC || (zC = [bC, nC], ZC = performance.now(), (0, QC.sendColyMessage)(qC.zg, {
                  mn: bC,
                  Hn: nC
                }))
              },
              nC = () => {
                null === wC && (wC = setTimeout(bC, Math.max(0, ZC + 250 - performance.now())))
              };
            return bC(), CC.on("addRemoveDistanceChanged", nC), () => {
              CC.off("addRemoveDistanceChanged", nC), null !== wC && (clearTimeout(wC), wC = null)
            }
          }(this.MN.fN),
          zC = Wz(this.MN);
        this.stopChunkReports = () => {
          CC(), zC()
        }
      }
      restartChunkStreaming() {
        (0, Zz.k)(this.MN, (0, oC.c)().recentChunkEdits.chunksEditedSince(this.connectionResume.getDroppedAt() - Nz.b)), this.startChunkReports()
      }
      register(CC) {
        const zC = this.MN,
          ZC = (0, oC.c)();
        CC.fR(qC.dd, (CC => {
          GC.e.applyNewClientOptions(CC)
        })), CC.fR(qC.vd, (CC => {
          gz.e.onReceiveColyseusPing(CC)
        })), CC.fR(qC.Oe, (CC => {
          let {
            key: zC,
            value: ZC
          } = CC;
          (0, RC.setCookie)(this.gameNameWithVariation, zC, ZC)
        })), CC.fR(qC.Te, (CC => {
          PC.o.bp("setDiscordReportKey", CC)
        })), (0, QC.onGameResetOnce)((() => {
          this.stopChunkReports()
        })), CC.fR(qC.oc, (wC => {
          const {
            WZ: bC,
            NZ: nC
          } = wC;
          if ((0, QC.setAdjustment)(nC), this.connectionResume.onInitialInfo(wC.MZ, wC.gZ), QC.offlineInputReplay.IK(wC.SZ), this.connectionResume.isResuming()) {
            console.log("Resumed the connection as eId", bC);
            try {
              null === wC.pZ && (0, oC.c)().client.inventoryPrediction.dropPending(), this.stopChunkReports(), hC(zC.fN), GC.e.apply({
                shopInfo: null,
                _shopVersion: qz.c
              });
              const ZC = zC.JR.pzC(zC.qE);
              ZC.bQ && (ZC.chestClosed(), PC.o.bp("chestToggleFromServer", !1, !0)), this.clearUiRequestsAndQTEs(), PC.o.bp("initInfoReceived", CC)
            } finally {
              const CC = null === wC.pZ ? null : {
                sync: null,
                endSeq: null
              };
              this.replayResume = CC, this.connectionResume.onResumeInitialInfo(wC.pZ, (() => {
                CC.endSeq = (0, oC.c)().client.inventoryPrediction.lastActionSeq
              })), null === CC && this.restartChunkStreaming()
            }
          } else console.log("Local client is eId", bC), (0, Zz.l)(zC), PC.o.bp("loadingScreenState", "loadingPage:loadingWorld"), zC.mCC = bC, zC.JR.YCC(zC.qE, zC.JR.names.entityName) && zC.JR.uH(zC.qE, zC.JR.names.entityName), (0, oC.c)().setEntityName(zC.mCC, (0, oC.c)().getRawEntityName(zC.qE)), zC.QE[zC.mCC] = {}, zC.JR.lH(zC.qE, zC.JR.names.entityName), PC.o.bp("initInfoReceived", CC), this.startChunkReports(), ZC.client.onServerConnectionFinalised()
        })), CC.fR(qC.ve, (() => {
          this.connectionResume.isResuming() ? this.connectionResume.onResumed((() => {
            const CC = this.replayResume;
            if (this.replayResume = null, !CC) return;
            this.restartChunkStreaming();
            const {
              inventoryPrediction: ZC
            } = (0, oC.c)().client, {
              sync: wC
            } = CC, bC = new Set(QC.offlineInputReplay.takeDroppedActions());
            if (wC) {
              var nC;
              const QC = null !== (nC = CC.endSeq) && void 0 !== nC ? nC : ZC.lastActionSeq;
              ZC.forget((CC => CC > wC.FQ && CC <= QC || bC.has(CC))), nz(zC, ZC, PC.o, wC.FQ, wC.load)
            } else ZC.dropPending(), ZC.askForSnapshot()
          })) : console.warn("ResumeComplete arrived without a resume")
        })), CC.fR(qC.ff, (CC => {
          let {
            QQ: ZC,
            qQ: QC,
            FQ: wC
          } = CC;
          const {
            inventoryPrediction: bC
          } = (0, oC.c)().client, nC = () => {
            zC.JR.pzC(zC.qE).loadFromString(ZC)
          };
          this.replayResume && (this.replayResume.sync = {
            FQ: wC,
            load: nC
          }), nz(zC, bC, PC.o, wC, nC, QC)
        })), CC.fR(qC.Jd, (CC => {
          let {
            type: zC,
            location1: ZC,
            location2: QC,
            location3: wC,
            score: bC
          } = CC;
          (0, Sz.t)({
            type: zC,
            location1: ZC,
            location2: QC,
            location3: wC,
            score: bC
          })
        })), CC.fR(qC.te, (CC => {
          let {
            type: zC,
            resourceType: ZC,
            amount: QC,
            category: wC,
            itemName: bC
          } = CC;
          (0, Sz.w)({
            type: zC,
            resourceType: ZC,
            amount: QC,
            category: wC,
            itemName: bC
          })
        })), CC.fR(qC.Pc, (CC => {
          let {
            leaveEventType: zC,
            category: ZC,
            subCategory: QC,
            value: wC
          } = CC;
          (0, Sz.K)({
            leaveEventType: zC,
            category: ZC,
            subCategory: QC,
            value: wC
          })
        })), CC.fR(qC.Lb, (CC => {
          let {
            cat1: zC,
            cat2: ZC,
            cat3: QC,
            value: wC
          } = CC;
          (0, Sz.o)({
            cat1: zC,
            cat2: ZC,
            cat3: QC,
            value: wC
          })
        })), CC.fR(qC.Ic, (CC => {
          (0, oC.c)().client.leaveGameUnwanted({
            reason: CC,
            requiresRefresh: !1,
            canReconnect: !1,
            automaticallyReconnect: !1
          }), (0, Mz.navigatePreserveSearch)("/")
        })), CC.fR(qC.Ee, (CC => {
          PC.o.bp("serverUpdating", Date.now() + CC, !0)
        })), CC.fR(qC.ad, oz.c), CC.fR(qC.Vc, (CC => {
          console.error(`[logErrorToConsole]: ${CC}`)
        }))
      }
    }
    var Gz = ZC(38859),
      Rz = ZC(38874),
      Az = ZC(970),
      xz = ZC(38865),
      Jz = ZC(38868),
      Iz = ZC(3586);
    class iz {
      constructor(CC, zC) {
        this.MN = CC, this.clientApi = zC
      }
      register(CC) {
        const zC = this.MN,
          ZC = (0, oC.c)();
        CC.fR(qC.nb, (CC => {
          let {
            chatMsgId: zC,
            content: ZC,
            chatterEId: QC
          } = CC;
          PC.o.bp("chat", {
            serverChatMsgId: zC,
            content: ZC,
            chatterEId: QC
          }, !0)
        })), CC.fR(qC.mf, (CC => {
          PC.o.bp("TopRightHelper", CC, !0)
        })), CC.fR(qC.gf, (CC => {
          (0, Gz.e)(CC)
        })), CC.fR(qC.Mc, (CC => {
          let {
            category: zC,
            timeframe: ZC,
            data: QC
          } = CC;
          PC.o.bp("leaderboardResponse", {
            category: zC,
            timeframe: ZC,
            data: QC
          })
        })), CC.fR(qC.bf, (() => {
          PC.o.bp("showShopTutorial", null, !0)
        })), CC.fR(qC.Id, (CC => {
          PC.o.bp("progressBarUpdate", CC, !0)
        })), CC.fR(qC.pc, (CC => {
          PC.o.bp("middleScreenBarInitiate", {
            duration: CC.rQ,
            sQ: CC.sQ,
            horizBarRemOffset: CC.TQ
          }, !0)
        })), CC.fR(qC.Rd, (() => {
          PC.o.bp("middleScreenBarRemove", !0)
        })), CC.fR(qC.Pe, (CC => {
          let {
            id: zC,
            position: ZC,
            style: QC,
            WQ: wC,
            MQ: bC
          } = CC;
          PC.o.bp("setDirectionArrow", {
            id: zC,
            position: ZC,
            style: QC,
            text: (0, qC.r)(wC),
            MQ: bC
          }, !0)
        })), CC.fR(qC.yb, (CC => {
          let {
            id: zC
          } = CC;
          PC.o.bp("clearDirectionArrow", {
            id: zC
          }, !0)
        })), CC.fR(qC.Hb, (CC => {
          (0, Iz.onCosmeticPackGranted)(CC)
        })), CC.fR(qC.jd, (CC => {
          let {
            id: zC,
            AZ: ZC
          } = CC;
          const {
            type: wC,
            params: bC
          } = (0, Rz.h)(ZC), nC = {
            ...bC
          };
          for (const QC of Rz.e) QC in nC && nC[QC] && (nC[QC] = (0, qC.r)(nC[QC]));
          pz.c.queueQTE(zC, wC, nC).getResult().then((CC => {
            "boolean" === typeof CC && (0, QC.sendColyMessage)(qC.Ai, {
              qteId: zC,
              qteResponse: CC
            })
          }))
        })), CC.fR(qC.Vd, (CC => {
          pz.c.cancelQTE(CC)
        })), (0, QC.onGameResetOnce)((() => {
          pz.c.reset()
        })), CC.fR(qC.ld, (CC => {
          let {
            id: zC,
            clientParameters: ZC
          } = CC;
          (0, fz.i)(zC, ZC)
        })), CC.fR(qC.Yd, (CC => {
          (0, fz.m)(CC)
        })), CC.fR(qC.tf, (CC => {
          let {
            text: zC,
            id: ZC,
            destructive: wC
          } = CC;
          (0, fz.o)(ZC, zC, wC, (CC => {
            (0, QC.sendColyMessage)(qC.hk, {
              Lq: ZC,
              Uq: CC,
              Bq: 5
            })
          }))
        })), CC.fR(qC.rd, (CC => {
          let {
            info: zC
          } = CC;
          PC.o.bp("overShopInfo", zC, !0)
        })), CC.fR(qC.cc, (CC => {
          let {
            ew: ZC,
            hw: QC
          } = CC;
          this.clientApi.openShop(zC.qE, ZC, QC)
        })), CC.fR(qC.ac, (CC => {
          let {
            xb: zC,
            Jb: ZC,
            Ib: QC
          } = CC;
          PC.o.bp("flyingMiddleMessage", {
            content: (0, qC.r)(zC),
            Jb: ZC,
            Ib: QC
          }, !0)
        })), CC.fR(qC.Kf, (CC => {
          const zC = CC === Az.e ? null : {
            message: `Currently loaded as variation: ${CC}`,
            type: "Warning"
          };
          PC.o.bp("showPermanentBottomMessage", zC, !0)
        })), CC.fR(qC.dc, (CC => {
          let {
            messageType: zC,
            data: QC
          } = CC;
          (0, xz.e)(zC) ? (0, xz.c)(zC, QC) : ("freeCamPerms" === zC && ZC.client.freeCameraController.setPerms(QC.key, QC.value), ZC.client.triggerGameCallback("onReceivedMessageFromServer", zC, QC))
        })), CC.fR(qC.Fb, Jz.h)
      }
    }
    class vz {
      constructor(CC, zC, ZC, QC) {
        this.gameNameWithVariation = CC, this.MN = ZC, this.connectionResume = QC, this.stateReplicationHandler = void 0, this.stateReplicationHandler = new xC.b(zC, this.MN)
      }
      setupStateReplicationHandlers() {
        this.stateReplicationHandler.setup(), (0, QC.onGameResetOnce)((() => {
          this.stateReplicationHandler.dispose()
        }))
      }
      pqC(CC) {
        this.stateReplicationHandler.dispose(), this.stateReplicationHandler = new xC.b(CC, this.MN), this.stateReplicationHandler.setup()
      }
      setupOnMessageListeners(CC, zC) {
        const ZC = this.MN,
          QC = CC => {
            this.stateReplicationHandler.setUpIfQueued(CC)
          };
        new Pz(ZC, this.gameNameWithVariation, this.connectionResume).register(CC), new KC(ZC).register(CC), new BC(ZC).register(CC), new lC(ZC, QC).register(CC), new yC(ZC, QC).register(CC), new iz(ZC, zC).register(CC), new bz(ZC, QC).register(CC)
      }
    }
    window.addEventListener("beforeunload", (() => {}));
    var ez = ZC(38879),
      hz = ZC(38883),
      Kz = ZC(625),
      Yz = ZC(2927);
    class dz {
      constructor(CC, zC, ZC, QC) {
        this.msgHandler = ZC, this.listener = QC, this.session = void 0, this.attachedRoom = null, this.detachRoomListeners = null, this.suspended = !1, this.droppedAt = 0, this.session = new ez.d({
          reconnect: CC,
          isLive: () => QC.isLive(),
          onReconnected: CC => {
            this.resumeOnRoom(CC)
          },
          onGaveUp: (CC, zC) => {
            QC.onGaveUp(CC, zC)
          },
          freeze: zC,
          releaseSeat: zC => {
            CC(zC).then((CC => {
              CC.leave(!0)
            }), (CC => {
              console.warn("Couldn't release the held seat of a game left while reconnecting", CC)
            }))
          }
        })
      }
      onInitialInfo(CC, zC) {
        this.session.onInitialInfo(CC, zC)
      }
      isResuming() {
        return this.session.isResuming()
      }
      getDroppedAt() {
        return this.droppedAt
      }
      onResumeInitialInfo(CC, zC) {
        if (this.session.onResuming(), null === CC) {
          try {
            (0, oC.c)().client.itemDropPrediction.reset()
          } catch (ZC) {
            console.error("Error dropping the item drop predictions on resuming", ZC)
          }
          return QC.offlineInputReplay.discard(), void this.setSuspended(!1)
        }(0, oC.c)().client.itemDropPrediction.onResumeReplayOffered(), QC.offlineInputReplay.replayFrom(CC.GZ, zC)
      }
      onResumed(CC) {
        this.setSuspended(!1), (0, QC.resendBeacons)();
        try {
          CC()
        } catch (zC) {
          console.error("Error completing the resume", zC)
        } finally {
          this.session.onResumed()
        }
      }
      attachRoom(CC) {
        const zC = (0, Kz.g)((() => CC.connection.isOpen));
        CC.oR(zC);
        const ZC = new hz.d((() => {
          this.session.canHoldSeat() && this.listener.isLive() && (console.warn("The game server went silent, reconnecting"), this.onConnectionDropped(CC, "silent"), CC.leave(!1))
        }));
        CC.onStateChange((() => {
          ZC.heard()
        }));
        const QC = zC => {
          zC.persisted || CC.leave(!0)
        };
        window.addEventListener("pagehide", QC), CC.oR(((zC, ZC) => {
          if (CC === this.attachedRoom && this.listener.isLive()) return (0, bC.h)(zC) && this.session.canHoldSeat() ? (console.warn(`Connection to the game server dropped with code ${zC}, reconnecting`), this.listener.onDropped(zC, ZC), void this.onConnectionDropped(CC, String(zC))) : void this.listener.onRoomLeft(zC, ZC)
        })), this.attachedRoom = CC, this.detachRoomListeners = () => {
          zC(), ZC.dispose(), window.removeEventListener("pagehide", QC)
        }
      }
      dispose() {
        this.detachRoom(), this.session.leave(), this.setSuspended(!1)
      }
      setSuspended(CC) {
        CC !== this.suspended && (this.suspended = CC, (0, QC.setConnectionSuspended)(CC), (0, oC.c)().client.itemDropPrediction.setSuspended(CC))
      }
      detachRoom() {
        var CC;
        null === (CC = this.detachRoomListeners) || void 0 === CC || CC.call(this), this.detachRoomListeners = null, this.attachedRoom = null
      }
      onConnectionDropped(CC, zC) {
        (0, Yz.reportClientError)("disconnect", "Left room", zC), this.isResuming() || (this.droppedAt = Date.now()), this.detachRoom(), QC.offlineInputReplay.onConnectionLost(), this.setSuspended(!0), this.session.onConnectionLost(CC.reconnectionToken)
      }
      resumeOnRoom(CC) {
        if (!this.listener.isLive()) return console.warn("Left the game while reconnecting, leaving the resumed room"), CC.leave(!0), void this.dispose();
        console.log("Reconnected to the game server, waiting for the game to resume"), (0, jC.o)(), QC.offlineInputReplay.onConnectionReplaced(), this.msgHandler.pqC(CC), this.listener.onReconnected(CC), this.attachRoom(CC)
      }
    }
    var mz = ZC(2957),
      Hz = ZC(2966),
      Ez = ZC(1275),
      lz = ZC(1257),
      Xz = ZC(4617),
      cz = ZC(3137),
      uz = ZC(1029),
      rz = ZC(37545),
      sz = ZC(38886),
      Tz = ZC(8897),
      az = ZC(38892),
      tz = ZC(1152),
      Dz = ZC(36369),
      jz = ZC(38898),
      yz = ZC(1637),
      Lz = ZC(2759);

    function Uz(CC) {
      var zC, ZC;
      if ("object" !== typeof CC || null === CC) return {
        errType: typeof CC
      };
      const QC = CC;
      return {
        errType: null !== (zC = null === (ZC = CC.constructor) || void 0 === ZC ? void 0 : ZC.name) && void 0 !== zC ? zC : "",
        errName: "string" === typeof QC.name ? QC.name : "",
        eventType: "string" === typeof QC.type ? QC.type : "",
        errStack: "string" === typeof QC.stack ? QC.stack.split("\n").slice(1).join(" | ") : ""
      }
    }

    function Bz(CC) {
      if ("undefined" !== typeof ProgressEvent && CC instanceof ProgressEvent) return !0;
      if (!(CC instanceof Error)) return !1;
      const zC = CC.code;
      return "ServerError" === CC.name && void 0 === zC || "AbortError" === CC.name || "seat reservation expired." === CC.message || "early_leave" === CC.message
    }(0, SC.l)((CC => {
      (0, Yz.reportClientError)("wasm_net", CC)
    }));
    let Oz = !0;

    function kz() {
      Oz = !1
    }
    class Vz {
      constructor(CC) {
        this.gameNameWithVariation = void 0, this.lobbyName = void 0, this.colyClient = void 0, this.userContext = void 0, this.joinedAt = null, this.checkSendPath = () => {}, this.MN = void 0, this.connectionResume = void 0, this.incomingMsgInitialisor = void 0, this.gameNameWithVariation = CC.gameNameWithVariation, this.lobbyName = CC.lobbyName, this.colyClient = CC.colyClient, this.userContext = CC.userContext
      }
      async connectToServer(CC, zC, ZC) {
        GC.e.reset(), CC.QE = {
          [CC.qE]: {}
        }, CC.mCC = void 0, (0, jC.o)(), (0, oC.c)().removeAllEntityNames(), (0, oC.c)().setEntityName(CC.qE, this.userContext.getPlayerName()), (0, Ez.r)({
          lobbyName: this.lobbyName
        }), console.log("Waiting for clientConnection passed promise to resolve");
        const nC = (0, yz.f)();
        console.log("joining server with game", this.gameNameWithVariation, "lobbyName", this.lobbyName);
        const fC = performance.now();
        ZC.aborted || (0, lz.o)("wasm_core_ready", fC);
        const qC = (0, az.f)(this.userContext, (() => {
          const {
            roomName: QC,
            joinOptions: wC
          } = (0, AC.e)(this.userContext, this.gameNameWithVariation, this.lobbyName, zC, (CC => cz.c.isUsingCustomGameTexturePack(CC)));
          return wC.joinAdHold = nC, wC.renderBackend = (0, Lz.b)(CC.Vg), (0, sz.f)((() => this.colyClient.joinOrCreateUntil(ZC, QC, wC)), ZC)
        }));
        return PC.o.bp("loadingScreenState", "loadingPage:joiningLobby"), await qC.then((zC => {
          if (this.joinedAt = performance.now(), (0, lz.o)("wasm_joined", this.joinedAt), this.MN = CC, nC) {
            const CC = (0, yz.p)((() => {
              zC.send(wC.g), (0, lz.l)()
            }));
            zC.oR(CC), (0, QC.onGameResetOnce)(CC)
          }
          const ZC = new pC(zC);
          this.connectionResume = new dz((CC => this.colyClient.reconnect(CC)), (zC => {
            CC.qY(zC)
          }), ZC, {
            isLive: () => (0, oC.c)().client.getMsgHandler() === ZC,
            onDropped: (CC, zC) => {
              (0, Hz.j)(CC) || this.logUnrecognisedConnectionLoss(CC, void 0, {
                site: "drop",
                closeReason: null !== zC && void 0 !== zC ? zC : "",
                sinceJoined: this.sinceJoined()
              })
            },
            onRoomLeft: (CC, zC) => {
              this.onRoomLeft(CC, zC)
            },
            onReconnected: CC => {
              this.incomingMsgInitialisor.pqC(CC), this.checkSendPath = (0, rz.d)(ZC, CC, SC.n)
            },
            onGaveUp: (CC, zC) => {
              this.onResumeGaveUp(CC, zC)
            }
          }), this.connectionResume.attachRoom(zC), (0, QC.onGameResetOnce)((() => {
            this.connectionResume.dispose()
          }));
          const bC = ZC.send,
            fC = ZC.fR,
            qC = ZC.SZC.send,
            FC = ZC.SZC.fR,
            WC = ZC.gqC;
          this.checkSendPath = (0, rz.d)(ZC, zC, SC.n);
          const NC = setInterval((() => {
            bC === ZC.send && fC === ZC.fR && qC === ZC.SZC.send && FC === ZC.SZC.fR && WC === ZC.gqC || kz(), this.checkSendPath()
          }), 1e4);
          return (0, QC.onGameResetOnce)((() => {
            clearInterval(NC)
          })), {
            success: !0,
            successDetails: ZC
          }
        })).catch((zC => {
          if (ZC.aborted && zC === (0, tz.g)(ZC)) return {
            success: !1,
            failDetails: {
              reason: "Left the game while it loaded",
              requiresRefresh: !1,
              canReconnect: !1
            }
          };
          if (zC instanceof Dz.f) return console.warn("Seat request timed out", this.lobbyName, this.gameNameWithVariation), {
            success: !1,
            failDetails: {
              reason: zC.message,
              requiresRefresh: !1,
              canReconnect: !1,
              gameServerUnreachable: "timedOut",
              joinFailure: (0, jz.d)(zC, zC.leg)
            }
          };
          CC.xS(`Failed to connect to bloxd room, check your internet connection. lobbyName: ${this.lobbyName}, gameNameWithVariation: ${this.gameNameWithVariation} code: ${zC.code}\n`, zC);
          const QC = zC.code;
          return QC === bC.e.serverUpdating.code ? (this.goToUpdateWaiting(), {
            success: !1,
            failDetails: {
              reason: bC.e.serverUpdating.text,
              requiresRefresh: !1,
              canReconnect: !0,
              goesToUpdateWaiting: !0
            }
          }) : {
            success: !1,
            failDetails: {
              ...this.onConnectionToServerLost(QC, zC.message, {
                site: "join",
                sinceJoinStart: (0, Hz.d)(performance.now() - fC),
                ...Uz(zC)
              }, Bz(zC)),
              rematch: (0, sz.c)(zC),
              gameRefused: (0, Tz.b)(zC),
              joinFailure: (0, jz.d)(zC, this.colyClient.legReached())
            }
          }
        }))
      }
      setupServerListeners(CC, zC, ZC) {
        PC.o.bp("loadingScreenState", "loadingPage:loadingPlayerInfo"), this.incomingMsgInitialisor = new vz(this.gameNameWithVariation, zC.SZC, CC, this.connectionResume), this.incomingMsgInitialisor.setupStateReplicationHandlers();
        const wC = zC.AqC();
        this.incomingMsgInitialisor.setupOnMessageListeners(wC, ZC), (0, QC.onConnectionToServerReady)(wC, zC), wC.finishRegistration()
      }
      dispose() {
        this.connectionResume.dispose()
      }
      onResumeGaveUp(CC, zC) {
        (0, uz.IS)(new Error("Reconnect failed"), {
          ...(0, mz.l)(zC),
          game: this.gameNameWithVariation
        }), (0, Yz.reportClientError)("disconnect", "Reconnect failed", zC.reason), (0, oC.c)().client.leaveGameUnwanted({
          reason: {
            translationKey: "general:lostConnection"
          },
          canReconnect: !CC,
          canPlayAgain: CC,
          requiresRefresh: !1,
          automaticallyReconnect: !1
        }), (0, Mz.navigatePreserveSearch)("/")
      }
      sinceJoined() {
        return null === this.joinedAt ? "" : (0, Hz.d)(performance.now() - this.joinedAt)
      }
      onRoomLeft(CC, zC) {
        var ZC;
        if (CC === bC.e.gameOrPluginKick.code) return;
        if (console.log(`Left room with code ${CC}`), CC === bC.e.serverUpdating.code) return (0, Yz.reportClientError)("disconnect", "Left room", "serverUpdating"), (0, oC.c)().client.leaveGame(this.getUpdateWaitingUrl()), void this.goToUpdateWaiting();
        this.MN.xS(`Kicked from server with code ${CC}`, new Error);
        const QC = Object.keys(bC.e).find((zC => bC.e[zC].code === CC));
        (0, Yz.reportClientError)("disconnect", "Left room", null !== QC && void 0 !== QC ? QC : String(CC));
        const wC = this.onConnectionToServerLost(CC, void 0, {
          site: "leave",
          closeReason: null !== zC && void 0 !== zC ? zC : "",
          sinceJoined: this.sinceJoined()
        });
        (0, oC.c)().client.leaveGameUnwanted({
          reason: `You have disconnected from the server.\n${wC.reason}`,
          canReconnect: wC.canReconnect,
          requiresRefresh: wC.requiresRefresh,
          automaticallyReconnect: null !== (ZC = wC.automaticallyReconnect) && void 0 !== ZC && ZC
        }), (0, Mz.navigatePreserveSearch)("/")
      }
      getUpdateWaitingUrl() {
        return (0, Xz.y)(this.gameNameWithVariation, this.lobbyName)
      }
      goToUpdateWaiting() {
        (0, Mz.navigatePreserveSearch)(this.getUpdateWaitingUrl())
      }
      onConnectionToServerLost(CC, zC, ZC) {
        var QC;
        let wC = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        if (null !== (QC = zC) && void 0 !== QC && QC.endsWith(bC.k) && (this.userContext.invalidateTrafficCode(), zC = zC.replace(bC.k, "")), CC === bC.e.outdatedVersion.code) return console.error("Outdated client with version ", nC.e, ", refreshing page"), (0, RC.reloadBloxd)(), {
          reason: "Outdated client",
          requiresRefresh: !0,
          canReconnect: !1
        };
        if (CC === bC.e.loadRecaptchaError.code) return console.error("Load recaptcha error, refreshing page"), (0, RC.reloadBloxd)(), {
          reason: "Failed to load recaptcha",
          requiresRefresh: !0,
          canReconnect: !1
        };
        for (const nC in bC.e) {
          const {
            code: ZC,
            text: QC,
            canReconnect: wC
          } = bC.e[nC];
          if (ZC === CC) {
            console.log("matched known error", CC, "leaving game");
            return {
              reason: "" !== QC ? QC : zC || `Code: ${CC}`,
              requiresRefresh: !1,
              canReconnect: wC,
              automaticallyReconnect: ZC === bC.e.customGameUpdated.code || ZC === bC.e.duplicateLobbyNameError.code
            }
          }
        }
        return console.log("Didn't match known error, leaving game"), (0, Hz.h)(CC) || wC ? console.warn("Connection lost", CC, zC) : this.logUnrecognisedConnectionLoss(CC, zC, ZC), {
          reason: `Either your internet isn't working or this is a bug.\nCode: ${CC}`,
          requiresRefresh: !1,
          canReconnect: !1,
          gameServerUnreachable: wC ? "failed" : void 0
        }
      }
      logUnrecognisedConnectionLoss(CC, zC, ZC) {
        (0, uz.IS)(new Error("Unrecognised connection loss"), {
          code: String(CC),
          cause: null !== zC && void 0 !== zC ? zC : "",
          ...ZC,
          game: this.gameNameWithVariation,
          ...(0, Hz.m)()
        })
      }
    }
  },
  38795: (CC, zC, ZC) => {
    ZC.d(zC, {
      b: () => yZ,
      e: () => VZ
    });
    var QC, wC, bC, nC, fC, oC, qC, FC, WC, NC, MC, gC, SC, pC, PC, GC, RC, AC, xC, JC, IC, iC, vC, eC, hC, KC, YC, dC, mC, HC, EC, lC, XC, cC, uC, rC, sC, TC, aC, tC, DC, jC, yC, LC, UC, BC, OC, kC, VC, Cz, zz, Zz, Qz, wz, bz, nz, fz, oz, qz, Fz, Wz, Nz, Mz, gz, Sz, pz, Pz, Gz, Rz, Az, xz, Jz, Iz, iz, vz, ez, hz, Kz, Yz, dz, mz, Hz, Ez, lz, Xz, cz, uz, rz, sz, Tz, az, tz, Dz, jz, yz, Lz, Uz, Bz, Oz, kz = ZC(28),
      Vz = ZC(37018),
      CZ = ZC(38813),
      zZ = ZC(38815),
      ZZ = ZC(9102),
      QZ = ZC(597),
      wZ = ZC(590),
      bZ = ZC(36667);
    let nZ = (QC = (0, ZZ.type)("number"), wC = (0, ZZ.type)("number"), bC = (0, ZZ.type)("number"), nC = (0, ZZ.type)("number"), fC = (0, ZZ.type)("number"), oC = (0, ZZ.type)("number"), qC = (0, ZZ.type)("string"), FC = class extends ZZ.Schema {
        constructor() {
          super(...arguments), (0, CZ.b)(this, "id", WC, this), (0, CZ.b)(this, "amount", NC, this), (0, CZ.b)(this, "x", MC, this), (0, CZ.b)(this, "y", gC, this), (0, CZ.b)(this, "z", SC, this), (0, CZ.b)(this, "size", pC, this), (0, CZ.b)(this, "attributes", PC, this)
        }
      }, WC = (0, zZ.d)(FC.prototype, "id", [QC], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return 0
        }
      }), NC = (0, zZ.d)(FC.prototype, "amount", [wC], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return 0
        }
      }), MC = (0, zZ.d)(FC.prototype, "x", [bC], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return 0
        }
      }), gC = (0, zZ.d)(FC.prototype, "y", [nC], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return 0
        }
      }), SC = (0, zZ.d)(FC.prototype, "z", [fC], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return 0
        }
      }), pC = (0, zZ.d)(FC.prototype, "size", [oC], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return 1
        }
      }), PC = (0, zZ.d)(FC.prototype, "attributes", [qC], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return "{}"
        }
      }), FC),
      fZ = (GC = (0, ZZ.type)("string"), RC = (0, ZZ.type)("string"), AC = class extends ZZ.Schema {
        constructor() {
          super(...arguments), (0, CZ.b)(this, "itemName", xC, this), (0, CZ.b)(this, "enchantmentTier", JC, this)
        }
      }, xC = (0, zZ.d)(AC.prototype, "itemName", [GC], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: null
      }), JC = (0, zZ.d)(AC.prototype, "enchantmentTier", [RC], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: null
      }), AC),
      oZ = (IC = (0, ZZ.type)("string"), iC = (0, ZZ.type)("string"), vC = (0, ZZ.type)("number"), eC = (0, ZZ.type)("number"), hC = (0, ZZ.type)("number"), KC = (0, ZZ.type)("float32"), YC = (0, ZZ.type)("float32"), dC = (0, ZZ.type)("float32"), mC = (0, ZZ.type)("string"), HC = (0, ZZ.type)(["number"]), EC = (0, ZZ.type)("boolean"), lC = class extends ZZ.Schema {
        constructor() {
          super(...arguments), (0, CZ.b)(this, "type", XC, this), (0, CZ.b)(this, "name", cC, this), (0, CZ.b)(this, "x", uC, this), (0, CZ.b)(this, "y", rC, this), (0, CZ.b)(this, "z", sC, this), (0, CZ.b)(this, "xRotation", TC, this), (0, CZ.b)(this, "yRotation", aC, this), (0, CZ.b)(this, "zRotation", tC, this), (0, CZ.b)(this, "followingEId", DC, this), (0, CZ.b)(this, "followingOffset", jC, this), (0, CZ.b)(this, "shouldMatchFollowingEntityRotation", yC, this)
        }
      }, XC = (0, zZ.d)(lC.prototype, "type", [IC], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: null
      }), cC = (0, zZ.d)(lC.prototype, "name", [iC], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return ""
        }
      }), uC = (0, zZ.d)(lC.prototype, "x", [vC], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return 0
        }
      }), rC = (0, zZ.d)(lC.prototype, "y", [eC], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return 0
        }
      }), sC = (0, zZ.d)(lC.prototype, "z", [hC], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return 0
        }
      }), TC = (0, zZ.d)(lC.prototype, "xRotation", [KC], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return 0
        }
      }), aC = (0, zZ.d)(lC.prototype, "yRotation", [YC], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return 0
        }
      }), tC = (0, zZ.d)(lC.prototype, "zRotation", [dC], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return 0
        }
      }), DC = (0, zZ.d)(lC.prototype, "followingEId", [mC], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: null
      }), jC = (0, zZ.d)(lC.prototype, "followingOffset", [HC], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return new ZZ.ArraySchema(0, 0, 0)
        }
      }), yC = (0, zZ.d)(lC.prototype, "shouldMatchFollowingEntityRotation", [EC], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return !0
        }
      }), lC),
      qZ = (LC = (0, ZZ.type)("float32"), UC = (0, ZZ.type)("float32"), BC = (0, ZZ.type)("boolean"), OC = (0, ZZ.type)("boolean"), kC = (0, ZZ.type)("float32"), VC = (0, ZZ.type)("boolean"), Cz = (0, ZZ.type)("string"), zz = (0, ZZ.type)("string"), Zz = (0, ZZ.type)("string"), Qz = (0, ZZ.type)("string"), wz = (0, ZZ.type)(["number"]), bz = (0, ZZ.type)("number"), nz = (0, ZZ.type)({
        map: fZ
      }), fz = class extends oZ {
        constructor() {
          super(...arguments), (0, CZ.b)(this, "scale", oz, this), (0, CZ.b)(this, "speed", qz, this), (0, CZ.b)(this, "jumping", Fz, this), (0, CZ.b)(this, "crouching", Wz, this), (0, CZ.b)(this, "cameraPitch", Nz, this), (0, CZ.b)(this, "armSwinging", Mz, this), (0, CZ.b)(this, "heldItemName", gz, this), (0, CZ.b)(this, "heldItemEnchantmentTier", Sz, this), (0, CZ.b)(this, "pose", pz, this), (0, CZ.b)(this, "ridingVehicleEId", Pz, this), (0, CZ.b)(this, "meshOffset", Gz, this), (0, CZ.b)(this, "baseRenderHeading", Rz, this), (0, CZ.b)(this, "armour", Az, this)
        }
      }, oz = (0, zZ.d)(fz.prototype, "scale", [LC], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return 1
        }
      }), qz = (0, zZ.d)(fz.prototype, "speed", [UC], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return 0
        }
      }), Fz = (0, zZ.d)(fz.prototype, "jumping", [BC], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return !1
        }
      }), Wz = (0, zZ.d)(fz.prototype, "crouching", [OC], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return !1
        }
      }), Nz = (0, zZ.d)(fz.prototype, "cameraPitch", [kC], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return 0
        }
      }), Mz = (0, zZ.d)(fz.prototype, "armSwinging", [VC], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return !1
        }
      }), gz = (0, zZ.d)(fz.prototype, "heldItemName", [Cz], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: null
      }), Sz = (0, zZ.d)(fz.prototype, "heldItemEnchantmentTier", [zz], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: null
      }), pz = (0, zZ.d)(fz.prototype, "pose", [Zz], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return "standing"
        }
      }), Pz = (0, zZ.d)(fz.prototype, "ridingVehicleEId", [Qz], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return null
        }
      }), Gz = (0, zZ.d)(fz.prototype, "meshOffset", [wz], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return new ZZ.ArraySchema(0, 0, 0)
        }
      }), Rz = (0, zZ.d)(fz.prototype, "baseRenderHeading", [bz], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return 0
        }
      }), Az = (0, zZ.d)(fz.prototype, "armour", [nz], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return new ZZ.MapSchema
        }
      }), fz),
      FZ = (xz = (0, ZZ.type)("string"), Jz = (0, ZZ.type)("string"), Iz = (0, ZZ.type)("string"), iz = (0, ZZ.type)("uint8"), vz = class extends qZ {
        constructor() {
          super(...arguments), (0, CZ.b)(this, "variation", ez, this), (0, CZ.b)(this, "ownerDbId", hz, this), (0, CZ.b)(this, "metaInfo", Kz, this), (0, CZ.b)(this, "aiState", Yz, this)
        }
      }, ez = (0, zZ.d)(vz.prototype, "variation", [xz], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return "default"
        }
      }), hz = (0, zZ.d)(vz.prototype, "ownerDbId", [Jz], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return null
        }
      }), Kz = (0, zZ.d)(vz.prototype, "metaInfo", [Iz], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return ""
        }
      }), Yz = (0, zZ.d)(vz.prototype, "aiState", [iz], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return 0
        }
      }), vz);
    dz = (0, ZZ.type)("string"), mz = (0, ZZ.type)("string"), Hz = (0, ZZ.type)("string"), Ez = (0, ZZ.type)("string"), lz = class extends oZ {
      constructor() {
        super(...arguments), (0, CZ.b)(this, "meshKind", Xz, this), (0, CZ.b)(this, "meshOpts", cz, this), (0, CZ.b)(this, "pose", uz, this), (0, CZ.b)(this, "leaderboardTop", rz, this)
      }
    }, Xz = (0, zZ.d)(lz.prototype, "meshKind", [dz], {
      configurable: !0,
      enumerable: !0,
      writable: !0,
      initializer: null
    }), cz = (0, zZ.d)(lz.prototype, "meshOpts", [mz], {
      configurable: !0,
      enumerable: !0,
      writable: !0,
      initializer: null
    }), uz = (0, zZ.d)(lz.prototype, "pose", [Hz], {
      configurable: !0,
      enumerable: !0,
      writable: !0,
      initializer: null
    }), rz = (0, zZ.d)(lz.prototype, "leaderboardTop", [Ez], {
      configurable: !0,
      enumerable: !0,
      writable: !0,
      initializer: null
    });

    function WZ(CC) {
      return Object.keys(ZZ.Metadata.getFields(CC))
    }
    const NZ = WZ(FZ);
    for (const CQ of QZ.x)
      if (!NZ.includes(CQ)) throw new Error(`Mob Schema is missing a networked property: "${CQ}"`);
    const MZ = WZ((sz = (0, ZZ.type)("string"), Tz = (0, ZZ.type)("float32"), az = (0, ZZ.type)("float32"), tz = (0, ZZ.type)("float32"), Dz = (0, ZZ.type)("float32"), jz = class extends oZ {
      constructor() {
        super(...arguments), (0, CZ.b)(this, "soundName", yz, this), (0, CZ.b)(this, "volume", Lz, this), (0, CZ.b)(this, "refDistance", Uz, this), (0, CZ.b)(this, "maxHearDist", Bz, this), (0, CZ.b)(this, "rate", Oz, this)
      }
    }, yz = (0, zZ.d)(jz.prototype, "soundName", [sz], {
      configurable: !0,
      enumerable: !0,
      writable: !0,
      initializer: function() {
        return ""
      }
    }), Lz = (0, zZ.d)(jz.prototype, "volume", [Tz], {
      configurable: !0,
      enumerable: !0,
      writable: !0,
      initializer: function() {
        return 1
      }
    }), Uz = (0, zZ.d)(jz.prototype, "refDistance", [az], {
      configurable: !0,
      enumerable: !0,
      writable: !0,
      initializer: function() {
        return bZ.j
      }
    }), Bz = (0, zZ.d)(jz.prototype, "maxHearDist", [tz], {
      configurable: !0,
      enumerable: !0,
      writable: !0,
      initializer: function() {
        return bZ.e
      }
    }), Oz = (0, zZ.d)(jz.prototype, "rate", [Dz], {
      configurable: !0,
      enumerable: !0,
      writable: !0,
      initializer: function() {
        return 1
      }
    }), jz));
    for (const CQ of wZ.e)
      if (!MZ.includes(CQ)) throw new Error(`AudioEntity Schema is missing a replicated property: "${CQ}"`);
    var gZ = ZC(38277),
      SZ = ZC(1183),
      pZ = ZC(600),
      PZ = ZC(38035),
      GZ = ZC(4179),
      RZ = ZC(326),
      AZ = ZC(37138),
      xZ = ZC(37934),
      JZ = ZC(2166),
      IZ = ZC(37103),
      iZ = ZC(38297),
      vZ = ZC(37260),
      eZ = ZC(338),
      hZ = ZC.n(eZ),
      KZ = ZC(37773),
      YZ = ZC(36943),
      dZ = ZC(37917),
      mZ = ZC(37955);
    class HZ {
      constructor(CC, zC) {
        this.bloxd = CC, this.eId = zC, this.MN = void 0, this.colyseusEntity = void 0, this.canSeeSub = void 0, this.canAttackSub = void 0, this.interactableSub = void 0, this.overlayColourSub = void 0, this.opacitySub = void 0, this.zIndexSub = void 0, this.multilineTextBoxSub = void 0, this.previousHidingMeshManagerState = void 0, this.meshKind = void 0, this.meshOpts = void 0, this.leaderboardTop = void 0, this.meshRebuildQueued = !1, this.Sg = !1, this.MN = CC.MN
      }
      initClient(CC) {
        var zC, ZC, QC;
        this.colyseusEntity = CC, this.meshKind = CC.meshKind, this.meshOpts = CC.meshOpts, this.leaderboardTop = CC.leaderboardTop, this.MN.JR.add([CC.x, CC.y, CC.z], 1, 1, null, null, !1, !1, this.eId), this.MN.JR.lH(this.eId, "smoothToServerPos");
        const wC = "Person" === this.meshKind;
        this.MN.JR.lH(this.eId, "meshRotation", {
          isServerControlled: !0,
          ...wC ? {
            defaultRotationsPerSecond: .5
          } : {},
          childrenNodeParams: wC ? [{
            nodeName: "HeadMesh",
            softTolerance: iZ.j,
            hardTolerance: null
          }] : []
        }), this.updateHidingMeshMgr(), this.canSeeSub = kz.o.subscribe(`otherEntitySettings|${this.eId}|canSee`, (CC => {
          this.updateHidingMeshMgr()
        }));
        const bC = () => {
          const CC = this.MN.JR.fzC(this.eId);
          if (!CC) return;
          const zC = (0, vZ.j)(this.eId);
          if ("number" === typeof CC.WH) {
            var ZC, QC, wC, bC;
            const nC = null === (ZC = (0, JZ.j)("head", null === (wC = this.getSpec()) || void 0 === wC || null === (bC = wC.opts.textures) || void 0 === bC ? void 0 : bC.head)) || void 0 === ZC || null === (QC = ZC.personModel) || void 0 === QC ? void 0 : QC.fullBody;
            return this.MN.Vg.nH.setPickable(CC.WH, zC && !nC), void(0, YZ.updatePersonAttachmentPickability)(this.MN, this.eId, zC)
          }
          const nC = CC.mesh;
          if (nC)
            for (const fC of [nC, ...nC.getChildMeshes(!1)]) "tS" in fC && !fC.name.startsWith("Cape|") && (fC.tS = zC)
        };
        this.canAttackSub = kz.o.subscribe(`otherEntitySettings|${this.eId}|canAttack`, bC), this.interactableSub = kz.o.subscribe(`otherEntitySettings|${this.eId}|interactable`, bC), this.overlayColourSub = kz.o.subscribe(`otherEntitySettingsClientifiedEId|${this.eId}|overlayColour`, (CC => {
          this.updateOverlayColour(CC)
        })), this.opacitySub = kz.o.subscribe(`otherEntitySettingsClientifiedEId|${this.eId}|opacity`, (CC => {
          this.updateOpacity(CC)
        })), this.zIndexSub = kz.o.subscribe(`otherEntitySettingsClientifiedEId|${this.eId}|zIndex`, (CC => {
          this.updateZIndex(CC)
        }));
        const nC = this.MN.QE[this.MN.qE][this.eId];
        this.updateOverlayColour(null !== (zC = null === nC || void 0 === nC ? void 0 : nC.overlayColour) && void 0 !== zC ? zC : null), this.updateOpacity(null !== (ZC = null === nC || void 0 === nC ? void 0 : nC.opacity) && void 0 !== ZC ? ZC : 1), this.updateZIndex(null !== (QC = null === nC || void 0 === nC ? void 0 : nC.zIndex) && void 0 !== QC ? QC : 0), this.multilineTextBoxSub = (0, IZ.o)(this.MN, this.eId)
      }
      onChangeClient(CC, zC) {
        if ("xRotation" === CC || "yRotation" === CC || "zRotation" === CC)(0, IZ.p)(this.MN, this.eId, CC, zC);
        else if ("pose" === CC) {
          const CC = this.MN.JR.MzC(this.eId);
          CC && (CC.pose = zC || "standing")
        } else "meshKind" === CC || "meshOpts" === CC ? (this[CC] = zC, this.queueMeshRebuild()) : "name" === CC && "" !== zC ? this.updateHidingMeshMgr() : "leaderboardTop" === CC && (this.leaderboardTop = zC, kz.o.bp(`leaderboardTop|${this.eId}`, zC))
      }
      disposeClient() {
        this.Sg = !0, this.MN.JR.deleteEntity(this.eId), kz.o.unsubscribe(this.canSeeSub), kz.o.unsubscribe(this.canAttackSub), kz.o.unsubscribe(this.interactableSub), kz.o.unsubscribe(this.overlayColourSub), kz.o.unsubscribe(this.opacitySub), kz.o.unsubscribe(this.zIndexSub), kz.o.unsubscribe(this.multilineTextBoxSub)
      }
      getCurrentHidingMeshMgrState() {
        var CC, zC;
        return {
          canSee: null !== (CC = null === (zC = this.MN.QE[this.MN.qE][this.eId]) || void 0 === zC ? void 0 : zC.canSee) && void 0 !== CC && CC,
          name: this.colyseusEntity.name,
          meshKind: this.meshKind,
          meshOpts: this.meshOpts
        }
      }
      updateHidingMeshMgr() {
        var CC, zC, ZC;
        const {
          MN: QC
        } = this, {
          JR: wC
        } = QC, bC = this.getCurrentHidingMeshMgrState();
        if ((0, RZ.Td)(this.previousHidingMeshManagerState, bC)) return;
        if (this.previousHidingMeshManagerState = bC, wC.uH(this.eId, "hidingMeshManager"), null === (CC = QC.QE[QC.qE][this.eId]) || void 0 === CC || !CC.canSee) return;
        const nC = this.getSpec();
        if (!nC) return;
        const {
          type: fC,
          opts: oC
        } = nC;
        "Person" === fC && (oC.textures = (0, JZ.m)(oC.textures)), oC.eId = this.eId, wC.lH(this.eId, "hidingMeshManager", {
          addMeshComponent: () => {
            var CC, zC, ZC;
            "Leaderboard" === fC && (oC.leaderboardTop = this.leaderboardTop);
            const bC = this.bloxd.client.meshCreator.getEntityMesh(fC, oC, (CC => {
              var zC, ZC;
              if ("number" === typeof CC) {
                var wC, bC, nC;
                const zC = QC.Vg.nH;
                zC.setEntityId(CC, this.eId);
                const ZC = "Person" === fC && (null === (wC = (0, JZ.j)("head", null === (nC = oC.textures) || void 0 === nC ? void 0 : nC.head)) || void 0 === wC || null === (bC = wC.personModel) || void 0 === bC ? void 0 : bC.fullBody);
                return void zC.setPickable(CC, (0, vZ.j)(this.eId) && !ZC)
              }
              const qC = CC;
              for (const fC of [qC, ...qC.getChildMeshes(!1)]) void 0 === fC.tS || fC.name.startsWith("Cape|") || (fC.tS = (0, vZ.j)(this.eId), fC.metadata ??= new QC.Vg.DS, fC.metadata.eId = this.eId);
              this.updateOpacity(null !== (zC = null === (ZC = QC.QE[QC.qE][this.eId]) || void 0 === ZC ? void 0 : ZC.opacity) && void 0 !== zC ? zC : 1)
            }));
            if (!bC) return;
            const {
              WH: nC,
              mesh: qC,
              meshOffset: FC,
              nameYOffset: WC,
              modelLoaded: NC
            } = bC;
            null === NC || void 0 === NC || NC.then((() => {
              var CC;
              (null === (CC = wC.fzC(this.eId)) || void 0 === CC ? void 0 : CC.mesh) === qC && (this.previousHidingMeshManagerState = null, this.updateHidingMeshMgr())
            }));
            const MC = null === nC ? null : QC.Vg.nH.OZC(nC, 0);
            if (wC.lH(this.eId, wC.names.mesh, {
                WH: nC,
                AZC: MC,
                mesh: qC,
                ynC: !1,
                JZC: "Leaderboard" !== fC,
                offset: FC.slice(),
                jnC: "ParticleEmitter" === fC && oC.followTargetMeshOffset ? CC => {
                  var zC;
                  hZ().copy(CC, FC);
                  const ZC = null === (zC = wC.BzC(this.eId)) || void 0 === zC ? void 0 : zC.og,
                    QC = void 0 === ZC ? null : wC.MzC(ZC);
                  if (QC) {
                    var bC, nC;
                    const zC = this.bloxd.getEntityHeading(null !== (bC = QC.ridingVehicleEId) && void 0 !== bC ? bC : ZC, !0),
                      wC = Math.sin(zC),
                      fC = Math.cos(zC);
                    CC[0] += QC.meshOffset[0] * fC + QC.meshOffset[2] * wC, CC[1] += QC.meshOffset[1], CC[2] += QC.meshOffset[2] * fC - QC.meshOffset[0] * wC;
                    const oC = null !== (nC = QC.ridingVehicleEId) && void 0 !== nC ? nC : null;
                    null !== oC && (0, mZ.c)(this.MN, oC, CC)
                  }
                } : null
              }), "Person" === fC) {
              var gC, SC, pC, PC;
              wC.lH(this.eId, wC.names.meshAttachments, {
                personFullBody: null !== (gC = null === (SC = (0, JZ.j)("head", null === (PC = oC.textures) || void 0 === PC ? void 0 : PC.head)) || void 0 === SC || null === (pC = SC.personModel) || void 0 === pC ? void 0 : pC.fullBody) && void 0 !== gC && gC
              });
              for (const CC of SZ.y) {
                var GC, RC, AC;
                const zC = null === (GC = oC.textures) || void 0 === GC ? void 0 : GC[CC];
                zC && null !== (RC = (0, JZ.j)(CC, zC)) && void 0 !== RC && null !== (AC = RC.attachments) && void 0 !== AC && AC.length && xZ.b.Player.meshApi.updatePlayerCosmetic(this.eId, nC, CC, zC)
              }
              wC.lH(this.eId, wC.names.moveState), wC.lH(this.eId, "updateWalkingState", {
                WH: nC,
                AZC: MC,
                walkingLegSwingDuration: iZ.r
              }), wC.lH(this.eId, "humanoidMesh", {
                WH: nC,
                AZC: MC,
                heldItemPositionParams: {},
                maxWalkingAngleOverride: null
              }), wC.lH(this.eId, "animator", {
                WH: nC,
                AZC: MC,
                modelLifeformType: "Player"
              }), dZ.c.hasAnimation("Person") && wC.lH(this.eId, "rigAnimation", {
                target: "Person",
                WH: nC
              }), wC.MzC(this.eId).pose = this.colyseusEntity.pose || "standing"
            } else if ("BloxdBlock" === fC && null !== nC) {
              wC.lH(this.eId, "animator", {
                WH: nC,
                AZC: MC,
                modelLifeformType: null
              });
              const CC = (0, PZ.r)(oC.blockName);
              null !== CC && wC.lH(this.eId, "rigAnimation", {
                target: CC,
                WH: nC
              })
            }
            wC.gfC(this.eId, "entityName", {
              name: this.colyseusEntity.name,
              nameYOffset: WC
            }), this.bloxd.setEntityName(this.eId, this.colyseusEntity.name), !0 === oC.autoRotate && (wC.uH(this.eId, "meshRotation"), wC.lH(this.eId, "autoRotate"));
            const {
              lineToEId: xC
            } = oC;
            (0, pZ.H)(xC) || wC.lH(this.eId, "lineToEntity", {
              lineToEId: xC
            });
            const JC = QC.QE[QC.qE][this.eId];
            this.updateOverlayColour(null !== (CC = null === JC || void 0 === JC ? void 0 : JC.overlayColour) && void 0 !== CC ? CC : null), this.updateOpacity(null !== (zC = null === JC || void 0 === JC ? void 0 : JC.opacity) && void 0 !== zC ? zC : 1), this.updateZIndex(null !== (ZC = null === JC || void 0 === JC ? void 0 : JC.zIndex) && void 0 !== ZC ? ZC : 0)
          },
          removeMeshComponent: () => {
            "Person" !== fC && "BloxdBlock" !== fC || wC.uH(this.eId, "rigAnimation"), wC.uH(this.eId, wC.names.mesh), wC.YCC(this.eId, wC.names.meshAttachments) && wC.uH(this.eId, wC.names.meshAttachments), wC.uH(this.eId, "entityName"), wC.uH(this.eId, "autoRotate"), wC.uH(this.eId, "lineToEntity"), "Person" === fC ? (wC.uH(this.eId, wC.names.moveState), wC.uH(this.eId, "updateWalkingState"), wC.uH(this.eId, "humanoidMesh"), wC.uH(this.eId, "animator")) : "BloxdBlock" === fC && wC.uH(this.eId, "animator")
          },
          hideDist: null !== (zC = oC.hideDist) && void 0 !== zC ? zC : 80,
          movingHideDist: null !== (ZC = oC.hideDist) && void 0 !== ZC ? ZC : 120,
          displayOutsideLoadedChunk: oC.hideDist > 100,
          immediatelyUpdate: !0,
          fn: "BloxdBlock" === fC ? oC.blockName : fC
        })
      }
      queueMeshRebuild() {
        this.meshRebuildQueued || (this.meshRebuildQueued = !0, queueMicrotask((() => {
          this.meshRebuildQueued = !1, this.Sg || this.updateHidingMeshMgr()
        })))
      }
      getSpec() {
        return (0, GZ.g)({
          meshKind: this.meshKind,
          meshOpts: this.meshOpts
        })
      }
      updateOverlayColour(CC) {
        var zC, ZC;
        if ("Person" !== this.meshKind) return;
        let QC = new AZ.e(0, 0, 0, 0);
        if (null !== CC) {
          const zC = (0, RZ.O)(CC);
          QC = new AZ.e(zC[0] / 255, zC[1] / 255, zC[2] / 255, .5)
        }
        const wC = null !== (zC = null === (ZC = this.MN.JR.fzC(this.eId)) || void 0 === ZC ? void 0 : ZC.WH) && void 0 !== zC ? zC : null;
        null !== wC && xZ.b.Player.meshApi.updateMeshOverlayColour(wC, QC)
      }
      updateZIndex(CC) {
        var zC;
        if ("Person" !== this.meshKind) return;
        const ZC = null === (zC = this.MN.JR.fzC(this.eId)) || void 0 === zC ? void 0 : zC.WH;
        "number" === typeof ZC && this.MN.Vg.nH.setRenderingGroupId(ZC, CC)
      }
      updateOpacity(CC) {
        const zC = this.MN.JR.fzC(this.eId);
        zC && ("number" !== typeof zC.WH ? zC.mesh && "ParticleEmitter" !== this.meshKind && (0, KZ.f)(zC.mesh, CC) : xZ.b.Player.meshApi.updateMeshOpacity(zC.WH, CC))
      }
    }
    var EZ = ZC(38804);
    class lZ {
      constructor(CC, zC) {
        this.eId = zC, this.MN = void 0, this.schema = void 0, this.MN = CC.MN
      }
      initClient(CC) {
        this.schema = CC, this.MN.JR.add([CC.x, CC.y, CC.z], .1, .1, null, null, !1, !1, this.eId), this.MN.JR.lH(this.eId, "smoothToServerPos"), EZ.b.add(this.eId, this.copyOpts())
      }
      onChangeClient(CC) {
        wZ.e.includes(CC) && EZ.b.update(this.eId, this.copyOpts())
      }
      disposeClient() {
        EZ.b.remove(this.eId), this.MN.JR.deleteEntity(this.eId)
      }
      copyOpts() {
        const {
          soundName: CC,
          volume: zC,
          refDistance: ZC,
          maxHearDist: QC,
          rate: wC
        } = this.schema;
        return {
          soundName: CC,
          volume: zC,
          refDistance: ZC,
          maxHearDist: QC,
          rate: wC
        }
      }
    }
    var XZ = ZC(3611),
      cZ = ZC(36647),
      uZ = ZC(6484),
      rZ = ZC(37609),
      sZ = ZC(2753),
      TZ = ZC(37988),
      aZ = ZC(9057),
      tZ = ZC(38309),
      DZ = ZC(37581),
      jZ = ZC(2927);
    class yZ {
      constructor(CC, zC) {
        let ZC = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 4,
          QC = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : () => performance.now();
        this.SZC = CC, this.MN = zC, this.setupBudgetMs = ZC, this.now = QC, this.createStateCallbacks = void 0, this.roomStateCallbacks = void 0, this.allItems = {}, this.detachers = new Map, this.deferredSetups = new Map, this.queuedSetups = new Map, this.promotedSetups = new Set, this.setupBudgetLeftMs = void 0, this.lastRefillMs = void 0, this.roomState = void 0, this.Sg = !1, this.onFrame = () => {
          this.setUpQueuedEntities(!0)
        }, this.sG = () => {
          this.setUpQueuedEntities(this.now() - this.lastRefillMs > 100)
        }, this.setUpPromoted = () => {
          for (const CC of this.promotedSetups) {
            this.promotedSetups.delete(CC);
            const zC = this.queuedSetups.get(CC);
            zC && (this.queuedSetups.delete(CC), this.timedSetup(zC, CC))
          }
        }, this.createStateCallbacks = (0, aZ.getStateCallbacks)(CC), this.roomStateCallbacks = this.createStateCallbacks(CC.state), this.roomState = CC.state, this.setupBudgetLeftMs = ZC, this.lastRefillMs = QC()
      }
      setup() {
        this.setupEntityHandlers(), this.setupItemHandlers(), this.SZC.onStateChange(this.setUpPromoted), this.MN.on("beforeInputs", this.onFrame), this.MN.on("ZN", this.sG)
      }
      setUpQueuedEntities(CC) {
        var zC;
        if ((null === (zC = (0, sZ.c)().client.getMsgHandler()) || void 0 === zC ? void 0 : zC.SZC) !== this.SZC) return this.MN.off("beforeInputs", this.onFrame), this.MN.off("ZN", this.sG), this.queuedSetups.clear(), void this.promotedSetups.clear();
        if (CC && (this.setupBudgetLeftMs = this.setupBudgetMs, this.lastRefillMs = this.now()), this.setUpPromoted(), 0 !== this.queuedSetups.size)
          for (hZ().copy(LZ, this.MN.JR.yG(this.MN.qE)); this.setupBudgetLeftMs > 0;) {
            const CC = this.nearestQueued(LZ);
            if (null === CC) return;
            this.setUpIfQueued(CC), this.setUpPromoted()
          }
      }
      nearestQueued(CC) {
        let zC = null,
          ZC = 1 / 0;
        return this.queuedSetups.forEach(((QC, wC) => {
          const bC = function(CC, zC) {
            return (zC.x - CC[0]) ** 2 + (zC.y - CC[1]) ** 2 + (zC.z - CC[2]) ** 2
          }(CC, QC);
          (null === zC || bC < ZC) && (zC = wC, ZC = bC)
        })), zC
      }
      setUpOrQueue(CC, zC) {
        0 === this.queuedSetups.size && this.setupBudgetLeftMs > 0 || this.mustSetUpNow(CC, zC) ? this.timedSetup(CC, zC) : this.queuedSetups.set(zC, CC)
      }
      mustSetUpNow(CC, zC) {
        const ZC = this.MN.mCC;
        if (zC === ZC) return !0;
        const QC = this.roomState.entities.get(ZC);
        return !(!QC || QC.ridingVehicleEId !== zC && QC.followingEId !== zC) || (UZ(CC.type) === gZ.d || (0, sZ.c)().getFollowingEntities(zC).length > 0)
      }
      setUpIfQueued(CC) {
        const zC = this.queuedSetups.get(CC);
        zC && (this.queuedSetups.delete(CC), this.timedSetup(zC, CC))
      }
      promoteIfQueued(CC) {
        null !== CC && this.queuedSetups.has(CC) && this.promotedSetups.add(CC)
      }
      timedSetup(CC, zC) {
        const ZC = this.now();
        this.setupEntity(CC, zC), this.setupBudgetLeftMs -= this.now() - ZC
      }
      setupEntityHandlers() {
        this.roomStateCallbacks.entities.xR(((CC, zC) => {
          this.MN.mCC ? this.setUpOrQueue(CC, zC) : this.deferEntitySetupUntilInitInfo(CC, zC)
        })), this.roomStateCallbacks.entities.lY(((CC, zC) => {
          const ZC = this.deferredSetups.get(zC);
          ZC && (kz.o.unsubscribe(ZC), this.deferredSetups.delete(zC)), this.queuedSetups.delete(zC), this.detach(zC), (0, sZ.c)().client.disposeEntity(zC)
        }))
      }
      deferEntitySetupUntilInitInfo(CC, zC) {
        const ZC = kz.o.nG("initInfoReceived", (() => {
          this.deferredSetups.delete(zC), this.setUpOrQueue(CC, zC)
        }));
        this.deferredSetups.set(zC, ZC), (0, XZ.onGameResetOnce)((() => {
          this.deferredSetups.get(zC) === ZC && (kz.o.unsubscribe(ZC), this.deferredSetups.delete(zC)), (0, sZ.c)().updatePositionAndPhysics(this.MN.qE, {
            type: uZ.r.DEFAULT,
            tier: null
          }, !0), (0, sZ.c)().takeHeldPlayerBodySize(this.MN.qE);
          const CC = this.MN.JR.yCC(this.MN.qE);
          CC && (CC.movementType = uZ.o.NORMAL)
        }))
      }
      setupEntity(CC, zC) {
        const ZC = zC === this.MN.mCC;
        if (ZC)(0, sZ.c)().client.dL(this.MN.qE, null, null);
        else {
          const {
            type: ZC
          } = CC, QC = UZ(ZC);
          if (void 0 === QC) return void
          function(CC, zC) {
            const ZC = String(CC);
            if (BZ.has(ZC)) return;
            BZ.add(ZC);
            const QC = ZC.length > 80 ? `${ZC.slice(0,80)}...` : ZC,
              wC = `No client handler for entity type ${JSON.stringify(QC)}, so entity ${zC} is not set up`;
            console.warn(wC), (0, jZ.reportClientError)("uncaught", wC, "unknown_entity_type")
          }(ZC, zC);
          (0, sZ.c)().client.dL(zC, CC, new QC((0, sZ.c)(), zC, ZC))
        }
        const QC = this.createStateCallbacks(CC);
        if (ZC) return this.setupMapSchemaCallbacks(zC, CC, QC, "armour"), this.setupScalarField(zC, CC, QC, "scale"), this.setupScalarField(zC, CC, QC, "ridingVehicleEId"), this.setupScalarField(zC, CC, QC, "followingEId"), this.setupScalarField(zC, CC, QC, "followingOffset"), void this.setupScalarField(zC, CC, QC, "shouldMatchFollowingEntityRotation");
        for (const wC of WZ(CC.constructor)) CC[wC] instanceof ZZ.MapSchema ? this.setupMapSchemaCallbacks(zC, CC, QC, wC) : this.setupScalarField(zC, CC, QC, wC)
      }
      setupMapSchemaCallbacks(CC, zC, ZC, QC) {
        const wC = ZC[QC],
          bC = new Map;
        wC.xR(((ZC, wC) => {
          if (this.onEntityFieldChange(CC, zC, QC, {
              key: wC,
              value: ZC
            }), !(ZC instanceof ZZ.Schema)) return;
          const nC = this.createStateCallbacks(ZC),
            fC = [];
          for (const bC of WZ(ZC.constructor)) fC.push(this.listenForFutureChanges(nC, bC, (() => {
            this.onEntityFieldChange(CC, zC, QC, {
              key: wC,
              value: ZC
            })
          })));
          bC.set(wC, (() => {
            for (const CC of fC) CC()
          }))
        })), wC.lY(((ZC, wC) => {
          var nC;
          null === (nC = bC.get(wC)) || void 0 === nC || nC(), bC.delete(wC), this.onEntityFieldChange(CC, zC, QC, {
            key: wC,
            value: null
          })
        })), this.addDetacher(CC, (() => {
          for (const CC of bC.values()) CC();
          bC.clear()
        }))
      }
      setupScalarField(CC, zC, ZC, QC) {
        this.onEntityFieldChange(CC, zC, QC, zC[QC]);
        const wC = this.listenForFutureChanges(ZC, QC, (ZC => {
          this.onEntityFieldChange(CC, zC, QC, ZC)
        }));
        this.addDetacher(CC, wC)
      }
      addDetacher(CC, zC) {
        let ZC = this.detachers.get(CC);
        ZC || (ZC = [], this.detachers.set(CC, ZC)), ZC.push(zC)
      }
      detach(CC) {
        for (const ZC of null !== (zC = this.detachers.get(CC)) && void 0 !== zC ? zC : []) {
          var zC;
          ZC()
        }
        this.detachers.delete(CC)
      }
      listenForFutureChanges(CC, zC, ZC) {
        return CC.listen(zC, ZC, !1)
      }
      onEntityFieldChange(CC, zC, ZC, QC) {
        switch (ZC) {
          case "ridingVehicleEId": {
            this.promoteIfQueued(QC);
            const zC = this.MN.JR.MzC((0, cZ.c)(CC));
            zC && (zC.ridingVehicleEId = QC);
            break
          }
          case "armour":
            this.handleArmourChange(CC, QC);
            break;
          case "followingEId":
            this.promoteIfQueued(QC), this.handleFollowingEIdChange(CC, zC, QC);
            break;
          case "xRotation":
          case "yRotation":
          case "zRotation":
            this.handleRotationChange(CC, ZC, QC);
            break;
          case "scale":
            this.handleScaleChange(CC, QC);
            break;
          case "baseRenderHeading":
            this.handleBaseRenderHeadingChange(CC, QC);
            break;
          case "followingOffset":
            this.handleFollowingOffsetChange(CC, QC);
            break;
          case "shouldMatchFollowingEntityRotation":
            this.handleShouldMatchFollowingEntityRotationChange(CC, QC);
            break;
          case "x":
          case "y":
          case "z":
            return void this.handlePositionChange(CC, ZC, QC)
        }(0, sZ.c)().client.updateEntityField(CC, ZC, QC)
      }
      handleArmourChange(CC, zC) {
        var ZC, QC;
        const {
          key: wC,
          value: bC
        } = zC;
        (0, xZ.v)(CC, wC, null !== (ZC = null === bC || void 0 === bC ? void 0 : bC.itemName) && void 0 !== ZC ? ZC : null, null !== (QC = null === bC || void 0 === bC ? void 0 : bC.enchantmentTier) && void 0 !== QC ? QC : null)
      }
      handleFollowingEIdChange(CC, zC, ZC) {
        const QC = (0, cZ.c)(CC),
          wC = QC === this.MN.qE;
        if (this.MN.JR.uH(QC, this.MN.JR.names.Xx), ZC) this.MN.JR.uH(QC, "smoothToServerPos"), this.MN.JR.lH(QC, this.MN.JR.names.Xx, {
          og: (0, cZ.c)(ZC),
          offset: Array.from(zC.followingOffset),
          OzC: zC.shouldMatchFollowingEntityRotation,
          zZC: !0,
          ZZC: (CC, QC) => {
            if (hZ().copy(CC, zC.followingOffset), zC.ridingVehicleEId === ZC) {
              const zC = (0, cZ.c)(ZC),
                wC = (0, sZ.c)().getEntityHeading(zC, QC);
              hZ().mo(CC, CC, hZ().ZERO, wC)
            }
          }
        });
        else if (!wC) {
          this.MN.JR.YCC(QC, "smoothToServerPos") || this.MN.JR.lH(QC, "smoothToServerPos");
          const CC = this.MN.JR.getState(QC, "smoothToServerPos"),
            zC = this.MN.JR.lL(QC).position;
          (0, DZ.setServerPosition)(CC, zC[0], zC[1], zC[2])
        }
      }
      handleRotationChange(CC, zC, ZC) {
        const QC = "xRotation" === zC ? 0 : "yRotation" === zC ? 1 : 2;
        for (const wC of (0, sZ.c)().getFollowingEntities(CC)) {
          const CC = this.MN.JR.getState(wC, "meshRotation"),
            zC = this.MN.JR.BzC(wC);
          CC && zC.OzC && (CC.serverSetRotation[QC] = ZC)
        }
      }
      handleScaleChange(CC, zC) {
        const ZC = (0, cZ.c)(CC);
        if (kz.o.bp(`entityScale|${ZC}`, zC), ZC === this.MN.qE) {
          var QC;
          (0, sZ.c)().removeFromEyeHeightCache(ZC);
          const CC = this.MN.JR.yCC(this.MN.qE),
            zC = null !== (QC = null === CC || void 0 === CC ? void 0 : CC.physicsState) && void 0 !== QC ? QC : {
              type: uZ.r.DEFAULT,
              tier: null
            };
          return void(0, sZ.c)().updatePositionAndPhysics(this.MN.qE, zC, !1)
        }
        const wC = (0, sZ.c)().getLifeformType(ZC);
        if (null === wC) return;
        const {
          physicsBodyWidth: bC,
          physicsBodyHeight: nC
        } = (0, tZ.h)(zC, wC);
        this.MN.JR.LzC(ZC, bC, nC, bC)
      }
      handleBaseRenderHeadingChange(CC, zC) {
        const ZC = this.MN.JR.getState(CC, "meshRotation");
        ZC && (ZC.baseRenderRotation[1] = zC);
        for (const QC of (0, sZ.c)().getFollowingEntities(CC)) {
          const CC = this.MN.JR.getState(QC, "meshRotation"),
            ZC = this.MN.JR.BzC(QC);
          CC && ZC.OzC && (CC.baseRenderRotation[1] = zC)
        }
      }
      handleFollowingOffsetChange(CC, zC) {
        const ZC = this.MN.JR.BzC((0, cZ.c)(CC));
        if (ZC && ZC.offset) {
          const CC = zC ? Array.from(zC) : hZ().ZERO;
          ZC.offset[0] = CC[0], ZC.offset[1] = CC[1], ZC.offset[2] = CC[2]
        }
      }
      handleShouldMatchFollowingEntityRotationChange(CC, zC) {
        const ZC = this.MN.JR.BzC((0, cZ.c)(CC));
        ZC && (ZC.OzC = null === zC || void 0 === zC || zC)
      }
      handlePositionChange(CC, zC, ZC) {
        if (this.MN.JR.YCC(CC, "smoothToServerPos")) {
          const QC = this.MN.JR.getState(CC, "smoothToServerPos");
          (0, DZ.setServerPositionAxis)(QC, OZ[zC], ZC)
        }
      }
      setupItemHandlers() {
        this.roomStateCallbacks.items.xR(((CC, zC) => {
          this.allItems[zC] = CC, (0, rZ.m)(this.MN, zC, [CC.x, CC.y, CC.z], CC.id, {
            amount: CC.amount,
            attributes: JSON.parse(CC.attributes),
            fz: (0, Vz.c)(this.MN).cantPickUpItem(zC),
            size: CC.size,
            predictedAt: (0, sZ.c)().client.itemDropPrediction.onServerItemAdded(zC)
          });
          const ZC = this.createStateCallbacks(CC);
          for (const QC of WZ(nZ)) this.onItemFieldChange(zC, QC, CC[QC]), this.addDetacher(zC, this.listenForFutureChanges(ZC, QC, (CC => {
            this.onItemFieldChange(zC, QC, CC)
          })))
        })), this.roomStateCallbacks.items.lY(((CC, zC) => {
          delete this.allItems[zC], this.detach(zC), (0, sZ.c)().client.itemDropPrediction.onServerItemRemoved(zC), this.MN.JR.YCC(zC, this.MN.JR.names.itemState) && this.MN.JR.deleteEntity(zC), (0, Vz.c)(this.MN).disposeEntity(zC)
        }))
      }
      onItemFieldChange(CC, zC, ZC) {
        if (zC in OZ) {
          if (this.MN.JR.YCC(CC, "itemState")) {
            const QC = this.MN.JR.getState(CC, "smoothToServerPos");
            (0, DZ.setServerPositionAxis)(QC, OZ[zC], ZC), (0, sZ.c)().client.itemDropPrediction.onServerItemMoved(CC)
          }
          return
        }
        if (!this.MN.JR.YCC(CC, "itemState")) return;
        const QC = this.MN.JR.getState(CC, "itemState");
        "amount" === zC && ZC !== QC.amount && (QC.creationTime = Date.now()), QC[zC] = "attributes" === zC ? JSON.parse(ZC) : ZC
      }
      dispose() {
        if (!this.Sg) {
          this.Sg = !0, this.MN.off("beforeInputs", this.onFrame), this.MN.off("ZN", this.sG), this.queuedSetups.clear(), this.promotedSetups.clear();
          for (const CC of this.deferredSetups.values()) kz.o.unsubscribe(CC);
          this.deferredSetups.clear(), this.MN.JR.uH(this.MN.qE, this.MN.JR.names.Xx);
          for (const CC in this.allItems) this.MN.JR.deleteEntity(CC), delete this.allItems[CC];
          for (const CC of [...this.detachers.keys()]) this.detach(CC);
          (0, Vz.c)(this.MN).clear();
          for (const CC of (0, sZ.c)().client.iterateEntityIds())(0, sZ.c)().client.disposeEntity(CC)
        }
      }
    }
    const LZ = [0, 0, 0];

    function UZ(CC) {
      if ("string" !== typeof CC) return;
      const zC = CC.indexOf("|"),
        ZC = -1 === zC ? CC : CC.slice(0, zC),
        QC = VZ();
      return Object.hasOwn(QC, ZC) ? QC[ZC] : void 0
    }
    const BZ = new Set;
    const OZ = {
      x: 0,
      y: 1,
      z: 2
    };
    let kZ = null;

    function VZ() {
      return null !== kZ || (kZ = {
        ...Object.fromEntries(wZ.i.map((CC => {
          const {
            fn: zC
          } = (0, TZ.b)(CC);
          return [CC, zC]
        }))),
        Pebble: gZ.d,
        Snowball: gZ.d,
        "Snowball Launcher": gZ.d,
        "Reinforced Pebble": gZ.d,
        Bullet: gZ.d,
        "Reinforced Ball": gZ.d,
        Ball: gZ.d,
        Mango: gZ.d,
        "Moonstone Orb": gZ.d,
        ...Object.fromEntries(QZ.B.map((CC => [(0, RZ.Jb)(CC), gZ.d]))),
        Arrow: gZ.d,
        "Arrow of Speed": gZ.d,
        "Arrow of Poison": gZ.d,
        "Arrow of Slowness": gZ.d,
        "Arrow of Weakness": gZ.d,
        "Arrow of Knockback": gZ.d,
        "Arrow of Strength": gZ.d,
        "Arrow of Invisibility": gZ.d,
        "Arrow of Jumping": gZ.d,
        "Arrow of Defense": gZ.d,
        "Arrow of Instant Healing": gZ.d,
        "Arrow of Instant Damage": gZ.d,
        "Arrow of Regeneration": gZ.d,
        "Arrow of Haste": gZ.d,
        "Arrow of Shield": gZ.d,
        "Arrow of Double Jump": gZ.d,
        "Arrow of Heat Resistance": gZ.d,
        "Arrow of X-Ray Vision": gZ.d,
        "Arrow of Mining Yield": gZ.d,
        "Arrow of Brain Rot": gZ.d,
        "Arrow of Milk": gZ.d,
        Fireball: gZ.d,
        "Bouncy Bomb": gZ.d,
        RPG: gZ.d,
        "Obby RPG": gZ.d,
        "Super RPG": gZ.d,
        "Grenade Launcher": gZ.d,
        Iceball: gZ.d,
        Coconut: gZ.d,
        "Splash Speed Potion": gZ.d,
        "Splash Defense Potion": gZ.d,
        "Splash Strength Potion": gZ.d,
        "Splash Invisibility Potion": gZ.d,
        "Splash Jump Potion": gZ.d,
        "Splash Knockback Potion": gZ.d,
        "Splash Poison Potion": gZ.d,
        "Splash Speed Potion II": gZ.d,
        "Splash Defense Potion II": gZ.d,
        "Splash Strength Potion II": gZ.d,
        "Splash Jump Potion II": gZ.d,
        "Splash Knockback Potion II": gZ.d,
        "Splash Poison Potion II": gZ.d,
        "Splash Slowness Potion": gZ.d,
        "Splash Slowness Potion II": gZ.d,
        "Splash Weakness Potion": gZ.d,
        "Splash Weakness Potion II": gZ.d,
        "Splash Milk Potion": gZ.d,
        "Splash Instant Damage Potion": gZ.d,
        "Splash Instant Damage Potion II": gZ.d,
        "Splash Instant Healing Potion": gZ.d,
        "Splash Instant Healing Potion II": gZ.d,
        "Splash Regeneration Potion": gZ.d,
        "Splash Regeneration Potion II": gZ.d,
        "Splash Haste Potion": gZ.d,
        "Splash Haste Potion II": gZ.d,
        "Splash Shield Potion": gZ.d,
        "Splash Shield Potion II": gZ.d,
        "Splash Double Jump Potion": gZ.d,
        "Splash Heat Resistance Potion": gZ.d,
        "Splash X-Ray Vision Potion": gZ.d,
        "Splash Mining Yield Potion": gZ.d,
        "Splash Mining Yield Potion II": gZ.d,
        "Splash Brain Rot Potion": gZ.d,
        "Yellow Paintball Gun": gZ.d,
        "White Paintball Gun": gZ.d,
        "Red Paintball Gun": gZ.d,
        "Purple Paintball Gun": gZ.d,
        "Pink Paintball Gun": gZ.d,
        "Orange Paintball Gun": gZ.d,
        "Magenta Paintball Gun": gZ.d,
        "Lime Paintball Gun": gZ.d,
        "Light Gray Paintball Gun": gZ.d,
        "Light Blue Paintball Gun": gZ.d,
        "Green Paintball Gun": gZ.d,
        "Gray Paintball Gun": gZ.d,
        "Cyan Paintball Gun": gZ.d,
        "Brown Paintball Gun": gZ.d,
        "Blue Paintball Gun": gZ.d,
        "Black Paintball Gun": gZ.d,
        "Yellow Heavy Paintball Gun": gZ.d,
        "White Heavy Paintball Gun": gZ.d,
        "Red Heavy Paintball Gun": gZ.d,
        "Purple Heavy Paintball Gun": gZ.d,
        "Pink Heavy Paintball Gun": gZ.d,
        "Orange Heavy Paintball Gun": gZ.d,
        "Magenta Heavy Paintball Gun": gZ.d,
        "Lime Heavy Paintball Gun": gZ.d,
        "Light Gray Heavy Paintball Gun": gZ.d,
        "Light Blue Heavy Paintball Gun": gZ.d,
        "Green Heavy Paintball Gun": gZ.d,
        "Gray Heavy Paintball Gun": gZ.d,
        "Cyan Heavy Paintball Gun": gZ.d,
        "Brown Heavy Paintball Gun": gZ.d,
        "Blue Heavy Paintball Gun": gZ.d,
        "Black Heavy Paintball Gun": gZ.d,
        "Toxin Ball": gZ.d,
        "Splash Aura XP Potion": gZ.d,
        "Splash Aura XP Potion II": gZ.d,
        "Arrow of Aura XP": gZ.d,
        Firecracker: gZ.d,
        "Rainbow Firecracker": gZ.d,
        "White Firecracker": gZ.d,
        "Orange Firecracker": gZ.d,
        "Magenta Firecracker": gZ.d,
        "Light Blue Firecracker": gZ.d,
        "Yellow Firecracker": gZ.d,
        "Lime Firecracker": gZ.d,
        "Pink Firecracker": gZ.d,
        "Gray Firecracker": gZ.d,
        "Light Gray Firecracker": gZ.d,
        "Cyan Firecracker": gZ.d,
        "Purple Firecracker": gZ.d,
        "Blue Firecracker": gZ.d,
        "Brown Firecracker": gZ.d,
        "Green Firecracker": gZ.d,
        "Red Firecracker": gZ.d,
        "Black Firecracker": gZ.d,
        "Firecracker Pebble": gZ.d,
        "Rainbow Firecracker Pebble": gZ.d,
        "White Firecracker Pebble": gZ.d,
        "Orange Firecracker Pebble": gZ.d,
        "Magenta Firecracker Pebble": gZ.d,
        "Light Blue Firecracker Pebble": gZ.d,
        "Yellow Firecracker Pebble": gZ.d,
        "Lime Firecracker Pebble": gZ.d,
        "Pink Firecracker Pebble": gZ.d,
        "Gray Firecracker Pebble": gZ.d,
        "Light Gray Firecracker Pebble": gZ.d,
        "Cyan Firecracker Pebble": gZ.d,
        "Purple Firecracker Pebble": gZ.d,
        "Blue Firecracker Pebble": gZ.d,
        "Brown Firecracker Pebble": gZ.d,
        "Green Firecracker Pebble": gZ.d,
        "Red Firecracker Pebble": gZ.d,
        "Black Firecracker Pebble": gZ.d,
        "Blinding Pebble": gZ.d,
        Poop: gZ.d,
        "Wood Boomerang": gZ.d,
        "Stone Boomerang": gZ.d,
        "Iron Boomerang": gZ.d,
        "Gold Boomerang": gZ.d,
        "Diamond Boomerang": gZ.d,
        "Amethite Boomerang": gZ.d,
        "Magmasteel Boomerang": gZ.d,
        "Rubellite Boomerang": gZ.d,
        "Serpentite Boomerang": gZ.d,
        "Moonstone Boomerang": gZ.d,
        "67 Base Projectile": gZ.d,
        "67 Boosted Projectile": gZ.d,
        "Capitano Grenade": gZ.d,
        "Scatter Pellet": gZ.d,
        "Lucky Bomb": gZ.d,
        "Unlucky Bomb": gZ.d,
        "Swap Orb": gZ.d,
        Mesh: HZ,
        AudioEntity: lZ
      }), kZ
    }
  },
  38850: (CC, zC, ZC) => {
    ZC.d(zC, {
      b: () => bC,
      d: () => nC
    });
    var QC = ZC(600),
      wC = ZC(37551);
    const bC = 4e4;
    class nC {
      constructor() {
        let CC = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Date.now;
        this.now = CC, this.editedAt = new Map, this.lastChunkX = NaN, this.lastChunkY = NaN, this.lastChunkZ = NaN, this.lastChunkId = ""
      }
      noteEdit(CC, zC, ZC) {
        const bC = (0, QC.Q)(CC),
          nC = (0, QC.Q)(zC),
          fC = (0, QC.Q)(ZC),
          oC = this.now();
        if (bC !== this.lastChunkX || nC !== this.lastChunkY || fC !== this.lastChunkZ) {
          this.lastChunkX = bC, this.lastChunkY = nC, this.lastChunkZ = fC, this.lastChunkId = (0, wC.b)(bC, nC, fC), this.editedAt.delete(this.lastChunkId), this.editedAt.set(this.lastChunkId, oC);
          for (const [CC, zC] of this.editedAt) {
            if (zC >= oC - 3e5) break;
            this.editedAt.delete(CC)
          }
        } else this.editedAt.set(this.lastChunkId, oC)
      }
      chunksEditedSince(CC) {
        const zC = [];
        for (const [ZC, QC] of this.editedAt) QC >= CC && zC.push(ZC);
        return zC
      }
    }
  },
  38913: (CC, zC, ZC) => {
    ZC.d(zC, {
      c: () => Wz,
      g: () => uz,
      k: () => Kz,
      o: () => rz
    });
    var QC = ZC(3611),
      wC = ZC(8774),
      bC = ZC(36552),
      nC = ZC(1375),
      fC = ZC(36637),
      oC = ZC(38804),
      qC = ZC(38786),
      FC = ZC(3677),
      WC = ZC(37694),
      NC = ZC(38920),
      MC = ZC(1183),
      gC = ZC(310),
      SC = ZC(28),
      pC = ZC(1865),
      PC = ZC(77),
      GC = ZC(38),
      RC = ZC(1887),
      AC = ZC(1806),
      xC = ZC(2950);
    class JC {
      constructor(CC) {
        this.storeForMs = CC, this.clicks = new xC.e
      }
      click() {
        this.clicks.enqueue(Date.now());
        const CC = Date.now() - this.storeForMs;
        for (; this.clicks.size > 0 && this.clicks.peek() < CC;) this.clicks.dequeue()
      }
      getNumClicksInMs(CC) {
        let zC = 0;
        return this.clicks.forEach((ZC => {
          ZC > Date.now() - CC && zC++
        })), zC
      }
      getMaxClickSeparationInMs(CC) {
        if (0 === this.clicks.size) return this.storeForMs;
        let zC = 0,
          ZC = Date.now() - CC;
        this.clicks.forEach((QC => {
          QC < Date.now() - CC || (zC = Math.max(zC, Math.abs(QC - ZC)), ZC = QC)
        }));
        const QC = Math.abs(Date.now() - ZC);
        return Math.max(zC, QC)
      }
    }
    class IC {
      constructor(CC) {
        this.storeForMs = CC, this.clickDownDurations = new xC.e
      }
      registerClickDownDuration(CC) {
        this.clickDownDurations.enqueue({
          dur: CC,
          atTime: Date.now()
        });
        const zC = Date.now() - this.storeForMs;
        for (; this.clickDownDurations.size > 0 && this.clickDownDurations.peek().atTime < zC;) this.clickDownDurations.dequeue()
      }
      clickDownDurationsCheck(CC) {
        if (CC > this.storeForMs) return console.error("overDuration is greater than storeForMs"), "0:0";
        let zC = 0,
          ZC = 0;
        return this.clickDownDurations.forEach((QC => {
          QC.atTime > Date.now() - CC && (zC++, ZC = Math.max(ZC, QC.dur))
        })), `${zC}:${ZC}`
      }
    }
    var iC = ZC(36375),
      vC = ZC(38923),
      eC = ZC(20),
      hC = ZC(2753),
      KC = ZC(1275),
      YC = ZC(38868),
      dC = ZC(4366),
      mC = ZC(113),
      HC = ZC(37990),
      EC = ZC(38210),
      lC = ZC(600),
      XC = ZC(36373),
      cC = ZC(10),
      uC = ZC(9194),
      rC = ZC(1169),
      sC = ZC(184),
      TC = ZC(38931),
      aC = ZC(38937),
      tC = ZC(38018),
      DC = ZC(38946),
      jC = ZC(37928),
      yC = ZC(3392),
      LC = ZC(1557),
      UC = ZC(36488),
      BC = ZC(2800),
      OC = ZC(38942),
      kC = ZC(38944),
      VC = ZC(37778);
    const Cz = {
      forward: "freeCamForward",
      backward: "freeCamBackward",
      left: "freeCamLeft",
      right: "freeCamRight",
      jump: "freeCamUp",
      crouch: "freeCamDown"
    };

    function zz() {
      var CC, zC;
      return !(null === (CC = (0, hC.c)().client) || void 0 === CC || null === (zC = CC.freeCameraController) || void 0 === zC || !zC.movesFly())
    }

    function Zz(CC) {
      const zC = CC.on.bind(CC);
      CC.on = (CC, ZC) => {
        RC.w.has(CC) ? zC(CC, ZC) : zC(CC, (zC => {
          var QC;
          return null !== (QC = (0, hC.c)().client) && void 0 !== QC && QC.isReplayMode() ? function(CC) {
            return CC in Cz
          }(CC) && zz() ? ZC(zC) : void 0 : ZC(zC)
        }))
      }
    }
    const Qz = 5e3,
      wz = 1;
    let bz, nz = wz,
      fz = 0;
    const oz = !0;
    let qz = oz;
    pC.e.subscribe("_ignoreBasicBoards", (CC => {
      qz = CC
    })), (0, QC.onGameReset)((() => {
      qz = oz
    }));
    let Fz = null;
    const Wz = () => Fz;
    let Nz, Mz, gz;
    var Sz, pz, Pz, Gz, Rz, Az, xz, Jz, Iz;
    const iz = [1, 76, 0, 57, "c", 9, 7, "e", 52, "d", 8, 255, "length", 249, 186, "a", 155, "undefined", void 0, "f", 4, "b", 177, 63, 6, "fromCodePoint", 12, "push", 129, 3, 2, 238, 66, 91, 8191, 88, 13, 14, 99, 24, 214, 158, 102, 44, "g", 79, 246, 191, 67, 248, 190, 136, 234, 132, 171, 115, 230, 122, "h", 47, 43, 92, 192, "i", 37, 165, !1, 217, 5, 202, 222, 231, 124, 141, !0, 100, 17, 75, 197, 32, 81, 127, 128, 34, 10, "k", 98, 114, 163, 167, 145, 53];

    function vz(...CC) {
      return CC[iz[12]] = iz[0], typeof Gz !== iz[17] && Gz ? (new Gz).decode(new Rz(CC[iz[2]])) : typeof Az !== iz[17] && Az ? Az.from(CC[iz[2]]).toString("utf-8") : Iz(CC[iz[2]])
    }

    function ez() {}

    function hz() {
      hz = function() {}
    }

    function Kz(CC) {
      function zC() {
        return CC.JR.XzC(CC.qE)
      }
      Zz(CC.inputs.down), Zz(CC.inputs.up);
      for (const QC of ["forward", "backward", "left", "right", "sprint", "jump", "crouch"]) {
        const zC = (zC, ZC) => {
          var wC, bC;
          if (zz()) {
            var nC;
            const wC = Cz[QC];
            var fC, oC;
            if (wC) null === (fC = (0, hC.c)().client) || void 0 === fC || null === (oC = fC.freeCameraController) || void 0 === oC || oC.handlefreeCamKeyPress(wC, zC, ZC);
            return void(ZC || null !== (nC = (0, hC.c)().client) && void 0 !== nC && nC.isReplayMode() || (CC.JR.TzC()[QC] = !1))
          }
          if (null !== (wC = (0, hC.c)().client) && void 0 !== wC && null !== (bC = wC.freeCameraController) && void 0 !== bC && bC.isKeyPressOverriden(zC)) return;
          CC.JR.TzC()[QC] = ZC
        };
        CC.inputs.down.on(QC, (CC => zC(CC, !0))), CC.inputs.up.on(QC, (CC => zC(CC, !1)))
      }
      CC.inputs.down.on("crouch", (() => {
        if (zz()) return;
        if (!CC.pR.canCrouch) return;
        const zC = CC.JR.TzC();
        eC.b.get("clientEscMenuOptions").crouchIsToggle && (zC.crouchToggled = !zC.crouchToggled && !zC.padSneakToggled), zC.padSneakToggled = !1
      }));
      const ZC = () => {
        const CC = zC();
        CC.isGun() && CC.inaccuracyCalculator.jump()
      };
      CC.inputs.down.on("jump", (CC => {
        zz() || (ZC(), Nz(CC))
      }));
      for (const QC of RC.g) CC.inputs.down.on(QC, (CC => {
        var zC, ZC;
        null !== (zC = (0, hC.c)().client) && void 0 !== zC && null !== (ZC = zC.freeCameraController) && void 0 !== ZC && ZC.handlefreeCamKeyPress(QC, CC, !0) && (CC.preventDefault(), CC.stopPropagation())
      })), CC.inputs.up.on(QC, (CC => {
        var zC, ZC;
        null !== (zC = (0, hC.c)().client) && void 0 !== zC && null !== (ZC = zC.freeCameraController) && void 0 !== ZC && ZC.handlefreeCamKeyPress(QC, CC, !1) && (CC.preventDefault(), CC.stopPropagation())
      }));
      CC.inputs.down.on("recordGame", (() => {
        var CC, zC;
        null === (CC = (0, hC.c)().client) || void 0 === CC || null === (zC = CC.gameRecorder) || void 0 === zC || zC.toggleRecording()
      })), CC.inputs.down.on("recordClip", (() => {
        var CC, zC;
        (0, iC.c)() || null === (CC = (0, hC.c)().client) || void 0 === CC || null === (zC = CC.gameRecorder) || void 0 === zC || zC.saveClip()
      }));
      for (const QC of RC.w) CC.inputs.down.on(QC, (() => {
        var CC;
        if ((0, vC.e)()) return;
        if ("replayViewerOpen" === QC) return void SC.o.bp("replayViewer|requested", "toggle");
        const zC = null === (CC = (0, hC.c)().client) || void 0 === CC ? void 0 : CC.gameReplayer;
        ((0, iC.c)() || null !== zC && void 0 !== zC && zC.isReplayMode()) && (null === zC || void 0 === zC || zC.handleAction(QC))
      }));
      const nC = new JC(3e4),
        WC = new IC(4e4);
      let NC = 0;
      const GC = CC => {
          let zC = 0,
            ZC = null;
          const QC = zC => null !== zC && zC === ZC && (ZC = null, CC(), !0);
          return {
            press: () => (zC++, (0, TC.c)() || (QC(ZC), ZC = zC), zC),
            owns: CC => CC === ZC,
            release: QC
          }
        },
        xC = (CC, ZC) => {
          ZC && rz(MC.e.TouchDownFirePrimary), CC ? cC() : ((0, EC.f)(), zC().mZC()), ZC || rz(MC.e.DownFirePrimary), uz(!0), nC.click();
          const wC = nC.getMaxClickSeparationInMs(3e4) < 1e3 / 30,
            bC = nC.getMaxClickSeparationInMs(1e4) < 20,
            fC = nC.getMaxClickSeparationInMs(4e3) < 1e3 / 70;
          if (wC || bC || fC) {
            let CC;
            if (wC) CC = 30;
            else if (bC) CC = 50;
            else {
              if (!fC) throw new Error("???");
              CC = 70
            }(0, QC.sendColyMessage)(FC.zk, CC)
          }
        },
        dC = GC((() => {
          const CC = Date.now() - NC;
          WC.registerClickDownDuration(CC), zC().KZC(), rz(MC.e.UpFirePrimary), uz(!1);
          const ZC = WC.clickDownDurationsCheck(4e4);
          (0, QC.sendColyMessage)(FC.Fg, ZC)
        }));
      let mC = 0;
      CC.inputs.down.on("primary-fire", (function(CC) {
        mC = dC.press(), dC.owns(mC) && (NC = Date.now(), Math.abs(performance.now() - CC.timeStamp) > 5e3 || (xC(CC.altKey, "changedTouches" in CC), Nz(CC)))
      })), CC.inputs.up.on("primary-fire", (function(CC) {
        dC.release(mC) && Nz(CC, !0)
      }));
      const HC = () => {
          zC().nqC(), rz(MC.e.DownFireSecondary), uz(!0), CC.pCC && !CC.pCC.position && (0, qC.f)()
        },
        lC = GC((() => {
          zC().hZC(), rz(MC.e.UpFireSecondary), uz(!1)
        }));
      let XC = 0;
      CC.inputs.down.on("alt-fire", (function(CC) {
        XC = lC.press(), lC.owns(XC) && (HC(), Nz(CC))
      })), CC.inputs.up.on("alt-fire", (function(CC) {
        lC.release(XC) && Nz(CC, !0)
      }));
      const cC = () => zC().qqC();
      CC.inputs.down.on("mid-fire", (() => {
        (0, TC.c)() || cC()
      }));
      const uC = CC => {
          (0, QC.sendColyMessage)(FC.Nh, CC, !0)
        },
        DC = CC => {
          (0, QC.sendColyMessage)(FC.Ph, {
            iq: CC,
            vq: fz()
          }, !0)
        };
      for (const QC of ["SpecialAction1", "SpecialAction2"]) CC.inputs.down.on(QC, (() => {
        uC(QC)
      })), CC.inputs.up.on(QC, (() => {
        DC(QC)
      }));
      const bz = () => {
        const CC = zC();
        CC.isGun() && CC.reload(Date.now())
      };
      CC.inputs.down.on("ReloadGun", bz);
      const fz = () => {
        let zC = "a";
        return CC.physics.testSolid.toString().includes("mN") || (zC = "b"), zC
      };
      CC.inputs.down.on("OpenInventory", (CC => {
        CC.preventDefault(), (0, LC.D)(CC, "inventory", (0, aC.e)((0, hC.e)()))
      })), CC.inputs.bind("ShiftHeld", "ShiftLeft", "ShiftRight");
      const oz = CC => {
        SC.o.bp("DropItemKeyPressed", CC)
      };
      CC.inputs.down.on("DropItem", (() => {
        oz(CC.JR.TzC().crouch)
      })), CC.inputs.down.on("OpenShop", (zC => {
        (0, iC.c)() || "inGame" === eC.b.get("gameState") && (0, LC.A)(zC, gC.o.SHOP, !(0, wC.d)(CC.pR.shopInfo))
      })), CC.inputs.down.on("OpenLobbyLeaderboard", (zC => {
        (0, iC.c)() || "inGame" === eC.b.get("gameState") && (0, LC.A)(zC, gC.o.LOBBY_LEADERBOARD, (0, kC.d)(CC.pR))
      })), CC.inputs.down.on("HideUi", (() => {
        SC.o.bp("showUi", !1)
      })), CC.inputs.up.on("HideUi", (() => {
        SC.o.bp("showUi", !0)
      }));
      const qz = CC => {
        0 === CC && (CC = 10), SC.o.bp("setSelectedInventorySlotI", CC - 1), SC.o.bp("numkeyPressed", CC)
      };
      for (let QC = 1; QC <= 10; QC++) CC.inputs.down.on("HotBarSlot" + QC.toString(), (() => {
        qz(QC)
      }));
      CC.inputs.down.on("OpenTasksAndLeaderboard", (zC => {
        const ZC = (0, UC.o)();
        ZC ? (0, LC.E)(zC, !0, ZC) : (0, LC.D)(zC, "retentionFeatures", !(!CC.pR._tasks && !CC.pR._availableLeaderboards))
      })), CC.inputs.down.on("OpenCodeEditor", (zC => {
        (0, LC.E)(zC, (0, YC.b)((0, KC.d)()), (() => {
          SC.o.bp("EditLobbyCode", CC.JR.yG(CC.qE).map(Math.floor))
        }))
      })), CC.inputs.bind("ToggleFullCoordinateOverlay", "F3"), CC.inputs.down.on("ToggleFullCoordinateOverlay", (() => {
        SC.o.bp("toggleFullCoordinateOverlay")
      }));
      const Wz = () => {
        (0, hC.c)().client.cameraController.swapCameraZoom()
      };
      CC.inputs.down.on("SwapCameraZoom", Wz), CC.inputs.down.on("OpenInviteLink", (CC => {
        (0, LC.D)(CC, "inviteLink", PC.featureFlags.canUseInviteLinks)
      })), CC.inputs.bind("Y", "KeyY"), CC.inputs.down.on("Y", (CC => {
        (0, iC.c)() || SC.o.bp("YKeyPressed")
      })), CC.inputs.bind("X", "KeyX"), CC.inputs.down.on("X", (CC => {
        (0, iC.c)() || SC.o.bp("XKeyPressed")
      })), CC.inputs.down.on("OpenEmoteWheel", (() => {
        SC.o.bp("requestEmoteWheelHoldOpen")
      })), CC.inputs.up.on("OpenEmoteWheel", (() => {
        SC.o.bp("requestEmoteWheelHoldRelease")
      })), CC.inputs.down.on("Zoom", (() => {
        if ("inGame" === eC.b.get("gameState")) {
          CC.JR.getState(CC.qE, "playerCameraAdjustment").zoomKeyPressed = !0, (0, hC.c)().client.cameraController.handleZoomKeyPressed()
        }
      })), CC.inputs.up.on("Zoom", (() => {
        CC.JR.getState(CC.qE, "playerCameraAdjustment").zoomKeyPressed = !1
      })), Yz();
      const gz = CC => function() {
        return Mz(), CC(...arguments)
      };

      function Sz(CC) {
        "inGame" !== eC.b.get("gameState") || (0, LC.w)() || (SC.o.bp("ctrlCrouchWithoutFullscreen"), CC.preventDefault())
      }
      Fz = {
        primaryFireDown: gz((() => {
          const CC = dC.press();
          return dC.owns(CC) && (NC = Date.now(), xC(!1, !1)), CC
        })),
        primaryFireUp: gz((CC => {
          dC.release(CC)
        })),
        altFireDown: gz((() => {
          const CC = lC.press();
          return lC.owns(CC) && HC(), CC
        })),
        altFireUp: gz((CC => {
          lC.release(CC)
        })),
        jumpDown: gz(ZC),
        specialActionDown: gz(uC),
        specialActionUp: gz(DC),
        reloadGun: gz(bz),
        dropItem: gz(oz),
        swapCameraZoom: gz(Wz),
        pickBlock: gz(cC)
      }, CC.inputs.down.on("ctrlCrouch", Sz), CC.inputs.up.on("ctrlCrouch", Sz), CC.inputs.bind("ctrlCrouch", "ControlLeft");
      const pz = CC => {
        "inGame" === eC.b.get("gameState") && CC.ctrlKey && !(0, LC.w)() && CC.preventDefault()
      };
      document.addEventListener("keydown", pz), document.addEventListener("keyup", pz), document.addEventListener("keypress", pz), CC.inputs.bind("Alt", "AltLeft", "AltRight"), CC.inputs.down.on("Alt", (CC => {
        CC.preventDefault()
      }));
      const Pz = zC => (0, jC.f)(CC, zC),
        Gz = zC => (0, jC.h)(CC, zC),
        Rz = [0, 0, 0],
        Az = [0, 0, 1];
      CC.on("afterRender", (zC => {
        (0, bC.e)(CC.camera.heading), (0, jC.j)(CC, Rz, Az), (0, hC.c)().client.triggerGameCallback("onAfterRender", zC, {
          cameraHeading: CC.camera.heading,
          cameraPitch: CC.camera.pitch,
          cameraPosition: Rz,
          cameraDirection: Az,
          tanHalfFovX: (0, jC.c)(CC),
          tanHalfFovY: Math.tan(CC.Vg.Lk().fov / 2),
          screenBandPct: {
            x: yC.c,
            y: (0, yC.n)()
          },
          projectWorldPosToScreenPos: Pz,
          projectWorldPosToViewport: Gz
        })
      })), (0, BC.k)("look") && (CC.camera.nD = (0, OC.k)("js"), CC.inputs.Qy = OC.g), (0, BC.k)("remesh") && (0, VC.i)(CC), CC.on("beforeInputs", (() => {
        if ((0, vC.e)()) return CC.inputs.Fy.dx = 0, void(CC.inputs.Fy.dy = 0);
        if (CC.camera.Fy.dx += CC.inputs.Fy.dx, CC.camera.Fy.dy += CC.inputs.Fy.dy, 0 !== CC.inputs.Fy.dx || 0 !== CC.inputs.Fy.dy) {
          CC.JR.getState(CC.qE, "playerCameraAdjustment").lastPointerMove = Date.now()
        }
        CC.inputs.Fy.dx = 0, CC.inputs.Fy.dy = 0
      }));
      let xz = 0;
      const Jz = [0, 0, 0],
        Iz = [0, 0, 0],
        iz = {
          base: Jz,
          max: Iz
        },
        vz = CC => {
          const zC = sC.f.droppedBlockSize / 2;
          return [0, 1, 2].every((ZC => CC[ZC] >= Jz[ZC] - zC && CC[ZC] <= Iz[ZC] + zC))
        };
      CC.on("ZN", (function(zC) {
        SC.o.bp("noaTick", zC);
        const ZC = (0, hC.c)().client;
        if (ZC.triggerGameCallback("ZN", zC), ZC.isClientGameSessionActive()) try {
          oC.b.ZN(zC)
        } catch (nC) {
          console.error("Error ticking audio entities", nC)
        }
        if (!CC.JR.EzC(CC.qE).isAlive) return;
        Date.now() - xz > 9e3 && (! function() {
          const CC = (0, hC.e)();
          "number" === typeof CC.pR.speedMultiplier && "number" === typeof CC.pR.jumpAmount && (0, QC.sendColyMessage)(FC.ni, {
            wq: (0, rC.g)(CC.pR.speedMultiplier),
            bq: (0, rC.e)(CC.pR.jumpAmount),
            nq: (0, rC.g)(CC.pR.crouchingSpeed),
            fq: (0, rC.g)(CC.pR.walkingSpeed),
            oq: (0, rC.g)(CC.pR.runningSpeed),
            qq: (0, rC.e)(CC.oCC),
            Fq: CC.JR.yCC(CC.qE).jumpForce,
            Wq: CC.JR.lL(1).width,
            Nq: CC.JR.lL(1).height,
            Mq: CC.JR.eT(1).Mq
          }, !0)
        }(), xz = Date.now());
        const wC = CC.JR.TzC();
        if ((wC.jump || wC.forward || wC.backward || wC.left || wC.right || wC.sprint) && SC.o.bp("usedKeyboard"), CC.JR.PzC(CC.qE) && !0 === CC.pR.canPickUpItems) {
          const zC = CC.JR.yG(CC.qE),
            ZC = (0, AC.n)(nz),
            wC = (0, AC.o)(nz);
          Jz[0] = zC[0] - ZC, Jz[1] = zC[1] - .6 * wC, Jz[2] = zC[2] - ZC, Iz[0] = zC[0] + ZC, Iz[1] = zC[1] + sC.f.Dp + .6 * wC, Iz[2] = zC[2] + ZC;
          const bC = CC.JR.SfC(iz, CC.JR.names.autoRotate),
            {
              itemDropPrediction: nC
            } = (0, hC.c)().client,
            oC = QC.offlineInputReplay.holdsInput();
          if (bC.length > 0)
            for (const WC of bC) {
              const zC = CC.JR.getState(WC, "itemState");
              if (void 0 === zC || Date.now() - zC.creationTime < 500) continue;
              let ZC = WC,
                wC = null;
              if (zC.fz) {
                const CC = nC.pickupTarget(WC, vz, oC);
                if (null === CC) continue;
                ({
                  Yq: ZC,
                  Hq: wC
                } = CC)
              }
              const bC = CC.JR.getState(ZC, "itemState");
              if (bC.fz && null === wC) continue;
              let NC = 0,
                MC = null,
                gC = !1;
              if (0 === bC.amount) gC = !0;
              else {
                const {
                  amountPickedUp: zC
                } = CC.JR.SzC(CC.qE).pickUpItem({
                  name: bC.name,
                  typeObj: bC.typeObj,
                  amount: bC.amount,
                  attributes: bC.attributes
                });
                if (NC = zC, 0 === NC) continue;
                MC = tC.c.pickUp(bC, NC), bC.amount -= NC, bC.amount < 0 ? console.error("Picking up led to less than 0 of item!") : 0 === bC.amount ? gC = !0 : bC.creationTime = Date.now() + Qz
              }
              const SC = (0, hC.c)().client.inventoryPrediction.record(MC);
              (0, QC.sendColyMessage)(FC.Jh, {
                Yq: null === wC ? ZC : "",
                dq: NC,
                mq: qC.d,
                bn: SC,
                Hq: wC
              }, !0), gC && (oC && nC.onPickedUpOffline(ZC, SC, wC), null === wC && CC.JR.deleteEntity(ZC));
              fC.e.play("pickUp", sC.f.pickupSoundVol).rate(1 + Math.random() * sC.f.pickupSoundRateVariation)
            }
        }
        if (!CC.JR.fzC(CC.qE)) return;
        const bC = CC.inputs.Fy.kCC;
        if (0 !== bC) {
          const zC = bC > 0 ? 1 : -1;
          CC.inputs.state["mid-fire"] || CC.inputs.state.Alt || !CC.pR.useInventory ? (CC.inputs.state["mid-fire"] && SC.o.bp("requestEmoteWheelClose"), (0, hC.c)().client.cameraController.handleScrollZoom(zC)) : SC.o.bp("ScrollInventorySlot", zC)
        }
      })), pC.e.subscribe("droppedItemScale", (CC => {
        nz = "number" === typeof CC && isFinite(CC) ? CC : wz
      }))
    }

    function Yz() {
      const CC = (0, hC.e)();
      if (CC)
        for (const zC in RC.o) {
          CC.inputs.unbind(zC);
          for (const ZC of RC.o[zC]) CC.inputs.bind(zC, ZC)
        }
    }
    hz(Sz = {}, pz = ["Mtj%U7T)5AysB*YpFSf", "]k{:O4BU~95,l@]My[wTv#hh2S`o7E*P!#TnU$L&&Ul/)Q", "aTd%6,..B", '!tz%a$q9fJU:acU}~q6_p;(s/jIk"2=W"z3erSH}$A^1MqSo8agn', '&E)rH+"jVYXeLqDbKtFX1`g_XS)`L?(btYJ`b', ")?+R(|Ojxn", '([)eOdCQs9*1P;X"`k}%Y1uoRjBc^N3taM9itw]}eqnvdyhoiXh$T`&f', "F?%$EU+|LkdoAV=tvf", "|nrn&U)hs+!?Q4t30S3{=#!9`kye6OJ", 'rYQv"XhpRF+?fcbwUAy+C,Z.nAb$dOh!h.#iC,JPKkphu0gvT&7B76x', "_Sy+!1w07S/,c@)w,EfTn+._%Vl/aOZt", "`ZbveSZJ[n", 'v3+R"SLOFJ~FaNttZ3@%EM1PDJQQ0|[rIV5S~#jUIkbyT42wif', '|S]T)aH#vkTGjqPvQ#/mT+^#SO@5R"pt%S1XwXBOiON<Wy)e1A3:J', "&r3,lMTPAO?q=o)MvSWXvo+3*A:0Rvx![x", "#MRB_zvoZUBA6O.CGA6RJ", "aCL%XHi0f#k5DXI}2?9tC", "QPjtRNBO&J?%32EpBChX[MdQIA?qF?!I.CNn4#vt@jRScv2M", ";y[UiM>9ek&ecE~ocV/iq", "hk`z8#7M8?*R~h3e}wam", "[Z^e;z4omq^/Gv%3Zb2%L4x", "V#~%e@1_.iM", ".rE*4@C_$?@t(c&0dEe`w,:TEng1QI{wW[eHUy;}^j:.HNnr[,.:q:P0B", "8aA+!,|s!LJkMyY3=L8zNXNQ", "Hq.:h_7M[jY_oQM0,[6rdXCg9AP$YVqw2NXz`<6Q`k^/cNz})I|:^^lf", "<[6e~@:w?q`5Gq^}5TQvF.:hUS`/%v[r)E>mi+sssA8/E6/P=x", "TCIvG<[[Kb#stcA}`Z,SlY~3nZki?2UwRJ]Xz.HzT", '%.K%{+R9<OGYkNTy~!2%k"&|FJQnRVkbI%Q', '7"s(14+t;U@1407edNh($<zO2n<1/6]W)?Ym&+9pc#b2kNXv+3zHv', 'uS"X)^g.A#b2cEe!8?5S$6Vs;Uhv4N3}R&pnFM%P1jCmURm"{1BsAlYP&V', 'kbL%<*&z2nbNJ@)cXCiTU"cQ', "DN;RzHP.k#CENvCtNniTF0>9fVN,Vd~}ozf*zzLONYxQ5vRPHZJm", 'f&.+V05P%DAz;0lyNz~SAwThLkY5|9.wG,5St^j}xYm*J",ICS{Xj', "=!{R_&]tfS*f#c#3@aMH:daf;Z(u$1cvLKus", 'zA"RM_P.&5$gf', "`[W,q#nfWjND,*Q0O%:C6;vsP&DH6C3};lp,K16_Bm_<R7n", "<a),g:6gw9WZ2I3t,5p_)l4z>q(k~gcwb%FTMg1TnZBSWBNC~x", "K`7UQZ`hS9ivKqTP)NW(<+&zzYvOclYo:rnze{jfYL1,^I6PjzE", "iodi{d{T|UcG*hqAPTf{MXmPZP3O5@(b*A):g+EOT", '_wCzY*y$4#|_/2,"7ML%_H~f', "lqNX[G(o)j80mBC}=MxTp^sI@Y^%ECr0aAK*_2I|bn@iO7;o9b)R[`s4ojw", "mwsnm)%0KZ$5eEk3sf", "=qS+YzBj5bizC;%!XS^e}y$s2#,R6IEINSf", "HAE%?U#t9bArtRA}vS;rQZN_>?Kr_vf3?McT", "6[!zY1z}:U~I,N=oZkQ$SUgJ^S~t<R", "!C@BdHAi|u", "bSRd%[C0PJM", "0T{R7dwpxPU,Ocij93r_62;|#ASP0EZb&qjtudG^XnbT%|JA6Cr:v6x", 'XE:C?"]bcYH.B0$j)qDz@4`.XV@1u;QPcSQ', 'H?;r$`0`QY7WP4#o%.6,?G&3P#{&Xct!J.:t"yx', "$z1nNXl}/FXg+1QyV&rSJ+4o{?`/hcK6ef", "(KJmNXTF$kZD`<dM)!C%v", 'P%I$DUp_x&?g[@EytJoHSH,$)F%Z#cQpPS/C&"iPAnA<C;Epuf', 'gy]XCS4sfJ":@q^W=em$.97.jn5LlCxbKAv*4#x', "}yC$voU$X#eA7?5!`af%05;}mqdof", 'ar,Tz9{M0OO97lDyuV=Xm)Y)"OA*EE', "alBmC?)ZZ5xyf", '`[|nS"D.;Z`/(I90],Q', "Yb,zC?uoa5$HrqTrey,Szyp0Y5kDgE", "6Eip6wCiF#)He?*rJynp_*FTwA", "e[8HEZmhPVr*dO=o;enSKy_.s", "UA+n:@K$fVC+jCYpsPdzb0Vj4Js[NV`CbTIzq0NpEj4L?2sye[sTPZ6Q", "@z)_t|gMxnzegvdMqy+:3:6QdVN<Y@4w~b+_W{I}Fn", "dNJ+B`;O$?,,wR", "~!+XKoiPQnrk,N&yot=X?z%P/JV[D9qA*3wpI:*pHUByf", "4I)R6;Dh|Y>Z&6uowSS+y|d_f#rM<0m", "YN%nV0yoFPbZ`480{Mle^:BjGPhG*@7v:Z:BG`__OZcb*l?}T&f", ",!bpb6!_%D`H,Yp!a3$%,NztrDSIyR", ")a;s~6uU+AeM[EW}sKgXQYT9~kdgsV9tKzyR](#}UFoMoC`j", "JJ?%v,WQ*kxcECDpTP`%rSsI_j&LC4<h3#AsHN#OR", "BRKtF`zoSjbTdO/rR#3eL`+taUESUY&!W[K*n0~^i90EnNwPvC^s", "e3/%wg@}cVFR`IjASzdzq:0PvkVzhE", ")TXviNA_MVUr}*wjT`3nk+5PRjfSVdrpZn<r.2UOrukiGCZtl!(TUySQpu", "|#I*I^ZTPj&&Jl(3(Ko%J", "2y(z~?q0r&i[mq]W$zte*NZpuS+rc?q", "}THrYUfI~kxyvdgv`3.+m)^<`q:0[Euwf&3e8^o&FJk1<IT", "YSt:0$`.BOp:66f0<NHCH`ojuSC*.2lIfY6XVdG}5ktZ0@6h#A@B", "sK#zU9Ut6F6qE6i", "8?pes``pESKrG1C0LCc{dzwQ$Z_", "sS3nE*]b?Z[VcE~Ma38%!;e0s+NZECThfRM*V:%_!L6eYvwPqf", "JVE%L4Ci|JrkHh@v<ZlT.H=_GY$&@C_MbTE", "_z=X]<0PJbab;0T", "VXRBewU|aDeh3Q7v>[+R_20_?kJ*)1$6}[tRpwKjAS8Fz6khv.f", "L`mz(?h_XP|bRlBh%32%c", "*?.,DMx", 'UJ7t<Nkt`Z|<NE83w[{X(;iFkn<R]11Pn&g,8S&z;?@`Elv!WzrTH+vo"OU', "+l9%6,J1`qv+*v3w8a|R", "ICmv(_{TX&0uGCZbjPP$M{^3OP,tq;nIFbb$%[bf", ".[F,.1|fzY2V5V&!ozysS7(o;?lL_E", 'Rn7tFM}jyS4Y7l+MYb@BT<l<{iLvx"Xv9a[dZHc.RO)&ZOnP*a&,c', "5E$%rlQP.P!gXyxhYk1r`N^OPYh+^N*Pwz~%v#!Feqa<14Dy", "TUTcBXWd", "Kp0S!NQ}", "2Pbt^c1>ZB,6wFM|Ru_!{{le)?s+}xM|)`@9)R2&kf+DJURPxPYC!", 'dPLSgJ$Q:y6r)<"j*2n%11UOm~l098"jr|Xa[[/}*g6@^_)qYA', "j639*tF:/ymb[4l&&6rEeM*Oo(~#q*Iecn$#f", "xblO", "3y.}dQXW", "m6mf@NVh", "#BQMbC#1", '>Lq("4<9', "&e!ash{9", "jq)M}ey9", "_f!T{DJ[", "7GtlDn^[", "GI!aP@PU:Xv", "8*,n+wGd8:F", "PQjB3}N,ucF", "o~wT=5Lr1J2", "kNKj5`G*/YN", "5}1g5SMCevF", "v*$j1%MLA", "+z./V#p[Wmsje~,/v*}T2)Hrf3", "6(rFH{0rGoQ|WEu/,zrF%5lfFg", "ei`Cn&9Rlq550#d/7@?l<&^UgK", "+FFM=5LXvqbX|#/JAQWA.&*dgK", "{FFMb81^)P,rA_TqOe6TQalf1g", "ei`C$SYb*qd&0&!]AQjAh5!IUq", 'UFiEW5H*ucz&?[!]R~0B&a"*3g', "$dDu5}1S", "gERjV}dA", "I:|l?}a", "BjDuu}zS", "pZK]eN*S", "PN~08oPD", "kDy]!;#X", "}_.d<Nuu", "o)q0)3PD", "pc+>", "`/6AT(d+", "tTT8B=Q}"]), hz(Pz = function(...CC) {
      hz(CC[iz[12]] = iz[2], CC[iz[15]] = [function() {
        return globalThis
      }, function() {
        return global
      }, function() {
        return window
      }, function() {
        return new Function("return this")()
      }], CC[iz[0]] = iz[18], CC[-iz[13]] = []);
      try {
        hz(CC[iz[0]] = Object, CC[-iz[13]][iz[27]]("".__proto__.constructor.name))
      } catch (pz) {}
      CC: for (CC[-iz[14]] = iz[2]; CC[-iz[14]] < CC[iz[15]][iz[12]]; CC[-iz[14]]++) try {
        for (CC[iz[0]] = CC[iz[15]][CC[-iz[14]]](), CC[-iz[16]] = iz[2]; CC[-iz[16]] < CC[-iz[13]][iz[12]]; CC[-iz[16]]++)
          if (typeof CC[iz[0]][CC[-iz[13]][CC[-iz[16]]]] === iz[17]) continue CC;
        return CC[iz[0]]
      } catch (pz) {}
      return CC[iz[0]] || this
    }() || {}, Gz = Pz.TextDecoder, Rz = Pz.Uint8Array, Az = Pz.gg, xz = Pz.String || String, Jz = Pz.Array || Array, Iz = function(...CC) {
      return hz(CC[iz[12]] = iz[2], CC[iz[28]] = new Jz(iz[82]), CC[iz[0]] = xz[iz[25]] || xz.fromCharCode, CC[iz[19]] = []),
        function(...zC) {
          for (hz(zC[iz[12]] = iz[0], zC[iz[22]] = iz[18], zC[iz[21]] = iz[18], zC[iz[4]] = zC[iz[2]][iz[12]], CC[iz[19]][iz[12]] = iz[2]), zC[iz[20]] = iz[2]; zC[iz[20]] < zC[iz[4]];) hz(zC[iz[21]] = zC[iz[2]][zC[iz[20]]++], zC[iz[21]] <= iz[81] ? zC[iz[22]] = zC[iz[21]] : zC[iz[21]] <= 223 ? zC[iz[22]] = (31 & zC[iz[21]]) << iz[24] | zC[iz[2]][zC[iz[20]]++] & iz[23] : zC[iz[21]] <= 239 ? zC[iz[22]] = (15 & zC[iz[21]]) << iz[26] | (zC[iz[2]][zC[iz[20]]++] & iz[23]) << iz[24] | zC[iz[2]][zC[iz[20]]++] & iz[23] : xz[iz[25]] ? zC[iz[22]] = (zC[iz[21]] & iz[6]) << 18 | (zC[iz[2]][zC[iz[20]]++] & iz[23]) << iz[26] | (zC[iz[2]][zC[iz[20]]++] & iz[23]) << iz[24] | zC[iz[2]][zC[iz[20]]++] & iz[23] : (zC[iz[22]] = iz[23], zC[iz[20]] += iz[29]), CC[iz[19]][iz[27]](CC[iz[28]][zC[iz[22]]] || (CC[iz[28]][zC[iz[22]]] = CC[iz[0]](zC[iz[22]]))));
          return CC[iz[19]].join("")
        }
    }()), hz(gz = (...CC) => {
      hz(CC[iz[12]] = iz[0], CC[iz[15]] = iz[2]);
      for (const zC in CC[iz[2]]) {
        function ZC(...CC) {
          for (hz(CC[iz[12]] = iz[0], CC[-iz[54]] = 'cAWkqD7OLm#lJhB6Mru/<[.v5!XY,eo`IVRfKQT%j+)nG*dt(@Sp^:{x;sH9N&?3ZywEF=4i]U$2}b8a|Pgz>10~C"_', CC[-iz[52]] = "" + (CC[iz[2]] || ""), CC[-iz[53]] = CC[-iz[52]].length, CC[iz[20]] = [], CC[iz[7]] = iz[2], CC[iz[19]] = iz[2], CC[iz[44]] = -iz[0]), CC[iz[10]] = iz[2]; CC[iz[10]] < CC[-iz[53]]; CC[iz[10]]++)
            if (CC[iz[5]] = CC[-iz[54]].indexOf(CC[-iz[52]][CC[iz[10]]]), CC[iz[5]] !== -iz[0])
              if (CC[iz[44]] < iz[2]) CC[iz[44]] = CC[iz[5]];
              else {
                hz(CC[iz[44]] += CC[iz[5]] * iz[33], CC[iz[7]] |= CC[iz[44]] << CC[iz[19]], CC[iz[19]] += (CC[iz[44]] & iz[34]) > iz[35] ? iz[36] : iz[37]);
                do {
                  hz(CC[iz[20]].push(CC[iz[7]] & iz[11]), CC[iz[7]] >>= iz[10], CC[iz[19]] -= iz[10])
                } while (CC[iz[19]] > iz[6]);
                CC[iz[44]] = -iz[0]
              } return CC[iz[44]] > -iz[0] && CC[iz[20]].push((CC[iz[7]] | CC[iz[44]] << CC[iz[19]]) & iz[11]), vz(CC[iz[20]])
        }

        function QC(CC) {
          return typeof Sz[CC] === iz[17] ? Sz[CC] = ZC(pz[CC]) : Sz[CC]
        }

        function wC(...CC) {
          CC[iz[12]] = iz[2]
        }
        QC(97) + "G" in ez && wC(), CC[iz[15]]++
      }
      return CC[iz[15]]
    }, Mz = () => {
      if (fz++ === iz[68]) {
        if ((0, GC.m)()) {
          function CC(...CC) {
            for (hz(CC[iz[12]] = iz[0], CC[iz[0]] = '8ohcjXmdRaqMsTFUVitDgSPGlYALJb^Kzfn`WeQN)ur1v<Z;@p.5BIk2EHO!C>w}x(3$*%760:94=_/[#&"y|?~]+,{', CC[-iz[55]] = "" + (CC[iz[2]] || ""), CC[iz[4]] = CC[-iz[55]].length, CC[iz[57]] = [], CC[-iz[56]] = iz[2], CC[iz[19]] = iz[2], CC[iz[44]] = -iz[0]), CC[iz[10]] = iz[2]; CC[iz[10]] < CC[iz[4]]; CC[iz[10]]++)
              if (CC[iz[5]] = CC[iz[0]].indexOf(CC[-iz[55]][CC[iz[10]]]), CC[iz[5]] !== -iz[0])
                if (CC[iz[44]] < iz[2]) CC[iz[44]] = CC[iz[5]];
                else {
                  hz(CC[iz[44]] += CC[iz[5]] * iz[33], CC[-iz[56]] |= CC[iz[44]] << CC[iz[19]], CC[iz[19]] += (CC[iz[44]] & iz[34]) > iz[35] ? iz[36] : iz[37]);
                  do {
                    hz(CC[iz[57]].push(CC[-iz[56]] & iz[11]), CC[-iz[56]] >>= iz[10], CC[iz[19]] -= iz[10])
                  } while (CC[iz[19]] > iz[6]);
                  CC[iz[44]] = -iz[0]
                } return CC[iz[44]] > -iz[0] && CC[iz[57]].push((CC[-iz[56]] | CC[iz[44]] << CC[iz[19]]) & iz[11]), vz(CC[iz[57]])
          }

          function zC(...zC) {
            return zC[iz[12]] = iz[0], typeof Sz[zC[iz[2]]] === iz[17] ? Sz[zC[iz[2]]] = CC(pz[zC[iz[2]]]) : Sz[zC[iz[2]]]
          }

          function ZC(...CC) {
            function zC(...CC) {
              return CC[iz[12]] = iz[0], typeof Sz[CC[iz[2]]] === iz[17] ? Sz[CC[iz[2]]] = function(...CC) {
                for (hz(CC[iz[12]] = iz[0], CC[iz[15]] = '19[A7>(KBgu6,d]z3qJR2Y?*UiTM5+$a/{fG%~pt)yZ}!V^bFj:rc"xvNk_m4oPX`8s.S&enE0ICl@D<#HQw|L;OhW=', CC[iz[30]] = "" + (CC[iz[2]] || ""), CC[iz[4]] = CC[iz[30]].length, CC[iz[9]] = [], CC[-iz[59]] = iz[2], CC[iz[24]] = iz[2], CC[iz[6]] = -iz[0]), CC[iz[58]] = iz[2]; CC[iz[58]] < CC[iz[4]]; CC[iz[58]]++)
                  if (CC[iz[5]] = CC[iz[15]].indexOf(CC[iz[30]][CC[iz[58]]]), CC[iz[5]] !== -iz[0])
                    if (CC[iz[6]] < iz[2]) CC[iz[6]] = CC[iz[5]];
                    else {
                      hz(CC[iz[6]] += CC[iz[5]] * iz[33], CC[-iz[59]] |= CC[iz[6]] << CC[iz[24]], CC[iz[24]] += (CC[iz[6]] & iz[34]) > iz[35] ? iz[36] : iz[37]);
                      do {
                        hz(CC[iz[9]].push(CC[-iz[59]] & iz[11]), CC[-iz[59]] >>= iz[10], CC[iz[24]] -= iz[10])
                      } while (CC[iz[24]] > iz[6]);
                      CC[iz[6]] = -iz[0]
                    } return CC[iz[6]] > -iz[0] && CC[iz[9]].push((CC[-iz[59]] | CC[iz[6]] << CC[iz[24]]) & iz[11]), vz(CC[iz[9]])
              }(pz[CC[iz[2]]]) : Sz[CC[iz[2]]]
            }
            CC[iz[12]] = iz[2], hz(CC[iz[15]] = zC(iz[38]) + zC(iz[75]) + zC(101) + zC(iz[42]) + zC(103) + zC(104) + "om", CC[iz[60]] = zC(105) + zC(106) + zC(107) + zC(108) + zC(109) + zC(110) + zC(111), CC[iz[30]] = zC(112) + zC(113) + zC(iz[87]) + zC(iz[55]) + zC(116) + zC(117) + zC(118) + ")", CC[iz[15]].match(CC[iz[60]] + CC[iz[30]]))
          }
          zC(iz[86]) + "x" in ez && ZC(), (0, WC[iz[9]])("4 ")
        }
        fz = iz[2]
      }
    }), Nz = function(CC) {
      function zC(...CC) {
        return CC[iz[12]] = iz[0], typeof Sz[CC[iz[2]]] === iz[17] ? Sz[CC[iz[2]]] = function(...CC) {
          for (hz(CC[iz[12]] = iz[0], CC[iz[0]] = 'aRSbiUXsAomeVxgd4hBCDW[$w/1Qzt2cqL>_8<Jr9Z%HfNP#@E0{FlvG~"YIj;:yK.kM7n*Op3],+u5!?}`&|6)(^=T', CC[-iz[62]] = "" + (CC[iz[2]] || ""), CC[-iz[61]] = CC[-iz[62]].length, CC[iz[9]] = [], CC[iz[7]] = iz[2], CC[iz[24]] = iz[2], CC[iz[44]] = -iz[0]), CC[iz[58]] = iz[2]; CC[iz[58]] < CC[-iz[61]]; CC[iz[58]]++)
            if (CC[iz[63]] = CC[iz[0]].indexOf(CC[-iz[62]][CC[iz[58]]]), CC[iz[63]] !== -iz[0])
              if (CC[iz[44]] < iz[2]) CC[iz[44]] = CC[iz[63]];
              else {
                hz(CC[iz[44]] += CC[iz[63]] * iz[33], CC[iz[7]] |= CC[iz[44]] << CC[iz[24]], CC[iz[24]] += (CC[iz[44]] & iz[34]) > iz[35] ? iz[36] : iz[37]);
                do {
                  hz(CC[iz[9]].push(CC[iz[7]] & iz[11]), CC[iz[7]] >>= iz[10], CC[iz[24]] -= iz[10])
                } while (CC[iz[24]] > iz[6]);
                CC[iz[44]] = -iz[0]
              } return CC[iz[44]] > -iz[0] && CC[iz[9]].push((CC[iz[7]] | CC[iz[44]] << CC[iz[24]]) & iz[11]), vz(CC[iz[9]])
        }(pz[CC[iz[2]]]) : Sz[CC[iz[2]]]
      }
      if ((arguments[zC(119)] > iz[0] && arguments[iz[0]] !== iz[18] ? arguments[iz[0]] : iz[66]) && (0, DC[iz[9]])(CC)) {
        function QC(...CC) {
          for (hz(CC[iz[12]] = iz[0], CC[iz[15]] = 'a{AZcOItdh1Lu@bBPfv;6gQzCDq=V!<5?0kRWil4n8m:(pMNe*oUT/>X|EsF)+#_SJ`H39^}jGr%]KY[.y"w$~,72x&', CC[iz[30]] = "" + (CC[iz[2]] || ""), CC[iz[29]] = CC[iz[30]].length, CC[iz[20]] = [], CC[iz[65]] = iz[2], CC[iz[19]] = iz[2], CC[iz[64]] = -iz[0]), CC[iz[58]] = iz[2]; CC[iz[58]] < CC[iz[29]]; CC[iz[58]]++)
            if (CC[iz[5]] = CC[iz[15]].indexOf(CC[iz[30]][CC[iz[58]]]), CC[iz[5]] !== -iz[0])
              if (CC[iz[64]] < iz[2]) CC[iz[64]] = CC[iz[5]];
              else {
                hz(CC[iz[64]] += CC[iz[5]] * iz[33], CC[iz[65]] |= CC[iz[64]] << CC[iz[19]], CC[iz[19]] += (CC[iz[64]] & iz[34]) > iz[35] ? iz[36] : iz[37]);
                do {
                  hz(CC[iz[20]].push(CC[iz[65]] & iz[11]), CC[iz[65]] >>= iz[10], CC[iz[19]] -= iz[10])
                } while (CC[iz[19]] > iz[6]);
                CC[iz[64]] = -iz[0]
              } return CC[iz[64]] > -iz[0] && CC[iz[20]].push((CC[iz[65]] | CC[iz[64]] << CC[iz[19]]) & iz[11]), vz(CC[iz[20]])
        }

        function wC(...CC) {
          return CC[iz[12]] = iz[0], typeof Sz[CC[iz[2]]] === iz[17] ? Sz[CC[iz[2]]] = QC(pz[CC[iz[2]]]) : Sz[CC[iz[2]]]
        }

        function bC(...CC) {
          hz(CC[iz[12]] = iz[2], CC[-iz[69]] = function(...zC) {
            return hz(zC[iz[12]] = iz[29], zC[iz[15]] = {}), zC[iz[30]].length !== zC[iz[2]].length + zC[iz[0]].length ? iz[66] : CC[iz[67]](zC[iz[2]], zC[iz[0]], zC[iz[30]], iz[2], iz[2], iz[2], zC[iz[15]])
          }, CC[iz[67]] = function(...zC) {
            return hz(zC[iz[12]] = iz[6], zC[iz[15]] = iz[66]), zC[iz[68]] >= zC[iz[30]].length ? iz[74] : zC[iz[24]]["" + zC[iz[29]] + zC[iz[20]] + zC[iz[68]]] !== iz[18] ? zC[iz[24]]["" + zC[iz[29]] + zC[iz[20]] + zC[iz[68]]] : (zC[iz[30]][zC[iz[68]]] === zC[iz[2]][zC[iz[29]]] && zC[iz[30]][zC[iz[68]]] === zC[iz[0]][zC[iz[20]]] ? zC[iz[15]] = CC[iz[67]](zC[iz[2]], zC[iz[0]], zC[iz[30]], zC[iz[29]] + iz[0], zC[iz[20]], zC[iz[68]] + iz[0], zC[iz[24]]) || CC[iz[67]](zC[iz[2]], zC[iz[0]], zC[iz[30]], zC[iz[29]], zC[iz[20]] + iz[0], zC[iz[68]] + iz[0], zC[iz[24]]) : zC[iz[30]][zC[iz[68]]] === zC[iz[2]][zC[iz[29]]] ? zC[iz[15]] = CC[iz[67]](zC[iz[2]], zC[iz[0]], zC[iz[30]], zC[iz[29]] + iz[0], zC[iz[20]], zC[iz[68]] + iz[0], zC[iz[24]]) : zC[iz[30]][zC[iz[68]]] === zC[iz[0]][zC[iz[20]]] && (zC[iz[15]] = CC[iz[67]](zC[iz[2]], zC[iz[0]], zC[iz[30]], zC[iz[29]], zC[iz[20]] + iz[0], zC[iz[68]] + iz[0], zC[iz[24]])), zC[iz[24]]["" + zC[iz[29]] + zC[iz[20]] + zC[iz[68]]] = zC[iz[15]], zC[iz[15]])
          }, console.log(CC[-iz[69]]))
        }
        return void(wC(120) + iz[19] in ez && bC())
      }
      const ZC = window[zC(121)];
      if (typeof ZC !== zC(iz[57]) + "on" || CC instanceof ZC || (0, cC.E)(CC)) {
        function nC(...CC) {
          for (hz(CC[iz[12]] = iz[0], CC[-iz[76]] = 'EYDw#gxL>GCraf,cW:KRm}b.`@9*zu{pBlhsjiJqSZA?O|I5P;![0t)oQ$FUV(vHeN^]dMT~kX/+=<y81%3_"724&6n', CC[iz[21]] = "" + (CC[iz[2]] || ""), CC[iz[29]] = CC[iz[21]].length, CC[iz[9]] = [], CC[iz[7]] = iz[2], CC[-iz[79]] = iz[2], CC[iz[78]] = -iz[0]), CC[iz[10]] = iz[2]; CC[iz[10]] < CC[iz[29]]; CC[iz[10]]++)
            if (CC[-iz[77]] = CC[-iz[76]].indexOf(CC[iz[21]][CC[iz[10]]]), CC[-iz[77]] !== -iz[0])
              if (CC[iz[78]] < iz[2]) CC[iz[78]] = CC[-iz[77]];
              else {
                hz(CC[iz[78]] += CC[-iz[77]] * iz[33], CC[iz[7]] |= CC[iz[78]] << CC[-iz[79]], CC[-iz[79]] += (CC[iz[78]] & iz[34]) > iz[35] ? iz[36] : iz[37]);
                do {
                  hz(CC[iz[9]].push(CC[iz[7]] & iz[11]), CC[iz[7]] >>= iz[10], CC[-iz[79]] -= iz[10])
                } while (CC[-iz[79]] > iz[6]);
                CC[iz[78]] = -iz[0]
              } return CC[iz[78]] > -iz[0] && CC[iz[9]].push((CC[iz[7]] | CC[iz[78]] << CC[-iz[79]]) & iz[11]), vz(CC[iz[9]])
        }

        function fC(...CC) {
          return CC[iz[12]] = iz[0], typeof Sz[CC[iz[2]]] === iz[17] ? Sz[CC[iz[2]]] = nC(pz[CC[iz[2]]]) : Sz[CC[iz[2]]]
        }

        function oC(...CC) {
          function zC(...CC) {
            return CC[iz[12]] = iz[0], typeof Sz[CC[iz[2]]] === iz[17] ? Sz[CC[iz[2]]] = function(...CC) {
              for (hz(CC[iz[12]] = iz[0], CC[iz[15]] = 'luX09Gt2R_$T>By"CY#P{@4([sE%mKH!djM3S^7DIA*nq,}Qf]p5g|v<e?+8rWzOVxF.woN;h=La`/ZbJkUi1~6&):c', CC[iz[21]] = "" + (CC[iz[2]] || ""), CC[iz[4]] = CC[iz[21]].length, CC[iz[20]] = [], CC[iz[7]] = iz[2], CC[iz[24]] = iz[2], CC[iz[6]] = -iz[0]), CC[iz[10]] = iz[2]; CC[iz[10]] < CC[iz[4]]; CC[iz[10]]++)
                if (CC[-iz[80]] = CC[iz[15]].indexOf(CC[iz[21]][CC[iz[10]]]), CC[-iz[80]] !== -iz[0])
                  if (CC[iz[6]] < iz[2]) CC[iz[6]] = CC[-iz[80]];
                  else {
                    hz(CC[iz[6]] += CC[-iz[80]] * iz[33], CC[iz[7]] |= CC[iz[6]] << CC[iz[24]], CC[iz[24]] += (CC[iz[6]] & iz[34]) > iz[35] ? iz[36] : iz[37]);
                    do {
                      hz(CC[iz[20]].push(CC[iz[7]] & iz[11]), CC[iz[7]] >>= iz[10], CC[iz[24]] -= iz[10])
                    } while (CC[iz[24]] > iz[6]);
                    CC[iz[6]] = -iz[0]
                  } return CC[iz[6]] > -iz[0] && CC[iz[20]].push((CC[iz[7]] | CC[iz[6]] << CC[iz[24]]) & iz[11]), vz(CC[iz[20]])
            }(pz[CC[iz[2]]]) : Sz[CC[iz[2]]]
          }
          CC[iz[12]] = iz[2];
          const ZC = require("path"),
            {
              version: QC
            } = require("../../package"),
            {
              version: wC
            } = require("@redacted/enterprise-plugin/package"),
            {
              version: bC
            } = require("@redacted/components/package"),
            {
              sdkVersion: nC
            } = require("@redacted/enterprise-plugin");
          require("../utils/isStandaloneExecutable"), require("./resolve-local-redacted-path"), ZC.resolve(__dirname, zC(125) + zC(126) + "js")
        }
        if (fC(iz[72]) in ez && oC(), CC[fC(iz[81]) + fC(iz[82])] === iz[66]) {
          function qC(...CC) {
            for (hz(CC[iz[12]] = iz[0], CC[iz[15]] = 'R+PGAdcSBWQfJLethFCVNsZU%EOT<Ykqpjnlgu5mw8ID&XoK2x.rM1zaHib(,_~]@^|$[v96*/);4>"!}3y0`=#7?{:', CC[iz[21]] = "" + (CC[iz[2]] || ""), CC[iz[28]] = CC[iz[21]].length, CC[iz[9]] = [], CC[iz[7]] = iz[2], CC[iz[24]] = iz[2], CC[iz[6]] = -iz[0]), CC[iz[10]] = iz[2]; CC[iz[10]] < CC[iz[28]]; CC[iz[10]]++)
              if (CC[iz[63]] = CC[iz[15]].indexOf(CC[iz[21]][CC[iz[10]]]), CC[iz[63]] !== -iz[0])
                if (CC[iz[6]] < iz[2]) CC[iz[6]] = CC[iz[63]];
                else {
                  hz(CC[iz[6]] += CC[iz[63]] * iz[33], CC[iz[7]] |= CC[iz[6]] << CC[iz[24]], CC[iz[24]] += (CC[iz[6]] & iz[34]) > iz[35] ? iz[36] : iz[37]);
                  do {
                    hz(CC[iz[9]].push(CC[iz[7]] & iz[11]), CC[iz[7]] >>= iz[10], CC[iz[24]] -= iz[10])
                  } while (CC[iz[24]] > iz[6]);
                  CC[iz[6]] = -iz[0]
                } return CC[iz[6]] > -iz[0] && CC[iz[9]].push((CC[iz[7]] | CC[iz[6]] << CC[iz[24]]) & iz[11]), vz(CC[iz[9]])
          }

          function FC(...CC) {
            return CC[iz[12]] = iz[0], typeof Sz[CC[iz[2]]] === iz[17] ? Sz[CC[iz[2]]] = qC(pz[CC[iz[2]]]) : Sz[CC[iz[2]]]
          }

          function MC(...CC) {
            hz(CC[iz[12]] = iz[2], CC[iz[15]] = function(...CC) {
              if (hz(CC[iz[12]] = iz[0], CC[iz[0]] = CC[iz[2]].length), CC[iz[0]] < iz[30]) return iz[2];
              if (hz(CC[iz[30]] = Math.max(...CC[iz[2]]), CC[iz[29]] = Math.min(...CC[iz[2]])), CC[iz[30]] === CC[iz[29]]) return iz[2];
              for (hz(CC[iz[20]] = Array(CC[iz[0]] - iz[0]).fill(Number.MAX_SAFE_INTEGER), CC[iz[7]] = Array(CC[iz[0]] - iz[0]).fill(Number.MIN_SAFE_INTEGER), CC[-iz[84]] = Math.ceil((CC[iz[30]] - CC[iz[29]]) / (CC[iz[0]] - iz[0])), CC[iz[83]] = iz[2]), CC[iz[58]] = iz[2]; CC[iz[58]] < CC[iz[0]]; CC[iz[58]]++) CC[iz[2]][CC[iz[58]]] !== CC[iz[29]] && CC[iz[2]][CC[iz[58]]] !== CC[iz[30]] && hz(CC[iz[83]] = Math.floor((CC[iz[2]][CC[iz[58]]] - CC[iz[29]]) / CC[-iz[84]]), CC[iz[20]][CC[iz[83]]] = Math.min(CC[iz[20]][CC[iz[83]]], CC[iz[2]][CC[iz[58]]]), CC[iz[7]][CC[iz[83]]] = Math.max(CC[iz[7]][CC[iz[83]]], CC[iz[2]][CC[iz[58]]]));
              for (hz(CC[iz[5]] = Number.MIN_SAFE_INTEGER, CC[iz[84]] = CC[iz[29]]), CC[iz[85]] = iz[2]; CC[iz[85]] < CC[iz[0]] - iz[0]; CC[iz[85]]++) CC[iz[20]][CC[iz[85]]] === Number.MAX_SAFE_INTEGER && CC[iz[7]][CC[iz[85]]] === Number.MIN_SAFE_INTEGER || hz(CC[iz[5]] = Math.max(CC[iz[5]], CC[iz[20]][CC[iz[85]]] - CC[iz[84]]), CC[iz[84]] = CC[iz[7]][CC[iz[85]]]);
              return CC[iz[5]] = Math.max(CC[iz[5]], CC[iz[30]] - CC[iz[84]]), CC[iz[5]]
            }, console.log(CC[iz[15]]))
          }
          FC(iz[28]) + "2" in ez && MC(), (0, WC[iz[9]])("2 " + (0, NC[iz[7]])(CC))
        } else if (gz(CC) < iz[84])(0, WC[iz[9]])("3 ");
        else {
          function gC(...CC) {
            for (hz(CC[iz[12]] = iz[0], CC[iz[15]] = '4;}2#3"|.)8&y,?>Wxh`GwnOK6(mtM+f9J$SHTEcsUQoX7dpqkl5R[g%v!/IF:eL_u*@NjDz1C=0<Br]bViYZ~AP^{a', CC[iz[21]] = "" + (CC[iz[2]] || ""), CC[iz[4]] = CC[iz[21]].length, CC[-iz[88]] = [], CC[iz[7]] = iz[2], CC[iz[86]] = iz[2], CC[iz[6]] = -iz[0]), CC[iz[58]] = iz[2]; CC[iz[58]] < CC[iz[4]]; CC[iz[58]]++)
              if (CC[iz[87]] = CC[iz[15]].indexOf(CC[iz[21]][CC[iz[58]]]), CC[iz[87]] !== -iz[0])
                if (CC[iz[6]] < iz[2]) CC[iz[6]] = CC[iz[87]];
                else {
                  hz(CC[iz[6]] += CC[iz[87]] * iz[33], CC[iz[7]] |= CC[iz[6]] << CC[iz[86]], CC[iz[86]] += (CC[iz[6]] & iz[34]) > iz[35] ? iz[36] : iz[37]);
                  do {
                    hz(CC[-iz[88]].push(CC[iz[7]] & iz[11]), CC[iz[7]] >>= iz[10], CC[iz[86]] -= iz[10])
                  } while (CC[iz[86]] > iz[6]);
                  CC[iz[6]] = -iz[0]
                } return CC[iz[6]] > -iz[0] && CC[-iz[88]].push((CC[iz[7]] | CC[iz[6]] << CC[iz[86]]) & iz[11]), vz(CC[-iz[88]])
          }

          function SC(...CC) {
            return CC[iz[12]] = iz[0], typeof Sz[CC[iz[2]]] === iz[17] ? Sz[CC[iz[2]]] = gC(pz[CC[iz[2]]]) : Sz[CC[iz[2]]]
          }

          function pC(...CC) {
            hz(CC[iz[12]] = iz[2], CC[-iz[35]] = function(...zC) {
              return hz(zC[iz[12]] = iz[0], zC[-iz[56]] = []), (zC[iz[2]] === iz[0] || zC[iz[2]] >= iz[20]) && CC[-iz[89]](zC[-iz[56]], [], zC[iz[2]], iz[2]), zC[-iz[56]]
            }, CC[-iz[89]] = function(...zC) {
              for (zC[iz[12]] = iz[20], zC[-iz[90]] = zC[iz[29]]; zC[-iz[90]] < zC[iz[30]]; zC[-iz[90]]++) {
                if (zC[iz[0]].length !== zC[-iz[90]]) return;
                for (zC[iz[21]] = iz[2]; zC[iz[21]] < zC[iz[30]]; zC[iz[21]]++) CC[iz[91]](zC[iz[0]], [zC[-iz[90]], zC[iz[21]]]) && (hz(zC[iz[0]].push([zC[-iz[90]], zC[iz[21]]]), CC[-iz[89]](zC[iz[2]], zC[iz[0]], zC[iz[30]], zC[-iz[90]] + iz[0])), zC[iz[0]].length === zC[iz[30]] && zC[iz[2]].push(CC[iz[29]](zC[iz[0]])), zC[iz[0]].pop())
              }
            }, CC[iz[29]] = function(...CC) {
              for (hz(CC[iz[12]] = iz[0], CC[iz[15]] = [], CC[iz[21]] = CC[iz[2]].length), CC[iz[29]] = iz[2]; CC[iz[29]] < CC[iz[21]]; CC[iz[29]]++)
                for (CC[iz[15]][CC[iz[29]]] = "", CC[-iz[57]] = iz[2]; CC[-iz[57]] < CC[iz[21]]; CC[-iz[57]]++) CC[iz[15]][CC[iz[29]]] += CC[iz[2]][CC[iz[29]]][iz[0]] === CC[-iz[57]] ? "Q" : ".";
              return CC[iz[15]]
            }, CC[iz[91]] = function(...CC) {
              for (hz(CC[iz[12]] = iz[30], CC[iz[30]] = CC[iz[2]].length), CC[-iz[64]] = iz[2]; CC[-iz[64]] < CC[iz[30]]; CC[-iz[64]]++) {
                if (CC[iz[2]][CC[-iz[64]]][iz[2]] === CC[iz[0]][iz[2]] || CC[iz[2]][CC[-iz[64]]][iz[0]] === CC[iz[0]][iz[0]]) return iz[66];
                if (Math.abs((CC[iz[2]][CC[-iz[64]]][iz[2]] - CC[iz[0]][iz[2]]) / (CC[iz[2]][CC[-iz[64]]][iz[0]] - CC[iz[0]][iz[0]])) === iz[0]) return iz[66]
              }
              return iz[74]
            }, console.log(CC[-iz[35]]))
          }
          SC(130) in ez && pC(), Mz()
        }
      } else {
        function PC(...CC) {
          for (hz(CC[iz[12]] = iz[0], CC[iz[0]] = 'G5Sgds}DAFu_%f=pI1(Vc:nj*JvqlHk]tYBbXRzUQx){,e"?[m@7^K<w290Ehr$Poi;CL#WZTOaN~`&M68!/y4>3+|.', CC[iz[21]] = "" + (CC[iz[2]] || ""), CC[-iz[71]] = CC[iz[21]].length, CC[iz[73]] = [], CC[iz[68]] = iz[2], CC[-iz[72]] = iz[2], CC[iz[44]] = -iz[0]), CC[-iz[70]] = iz[2]; CC[-iz[70]] < CC[-iz[71]]; CC[-iz[70]]++)
            if (CC[iz[56]] = CC[iz[0]].indexOf(CC[iz[21]][CC[-iz[70]]]), CC[iz[56]] !== -iz[0])
              if (CC[iz[44]] < iz[2]) CC[iz[44]] = CC[iz[56]];
              else {
                hz(CC[iz[44]] += CC[iz[56]] * iz[33], CC[iz[68]] |= CC[iz[44]] << CC[-iz[72]], CC[-iz[72]] += (CC[iz[44]] & iz[34]) > iz[35] ? iz[36] : iz[37]);
                do {
                  hz(CC[iz[73]].push(CC[iz[68]] & iz[11]), CC[iz[68]] >>= iz[10], CC[-iz[72]] -= iz[10])
                } while (CC[-iz[72]] > iz[6]);
                CC[iz[44]] = -iz[0]
              } return CC[iz[44]] > -iz[0] && CC[iz[73]].push((CC[iz[68]] | CC[iz[44]] << CC[-iz[72]]) & iz[11]), vz(CC[iz[73]])
        }

        function GC(...CC) {
          return CC[iz[12]] = iz[0], typeof Sz[CC[iz[2]]] === iz[17] ? Sz[CC[iz[2]]] = PC(pz[CC[iz[2]]]) : Sz[CC[iz[2]]]
        }

        function RC(...CC) {
          CC[iz[12]] = iz[2];
          const zC = require("big-integer");
          hz(CC[iz[15]] = class {
            static randomPrime(...CC) {
              CC[iz[12]] = iz[0];
              const ZC = zC.one.shiftLeft(CC[iz[2]] - iz[0]),
                QC = zC.one.shiftLeft(CC[iz[2]]).prev();
              for (; iz[74];) {
                let CC = zC.randBetween(ZC, QC);
                if (CC.isProbablePrime(256)) return CC
              }
            }
            static generate(...CC) {
              CC[iz[12]] = iz[0];
              const ZC = zC(65537);
              let QC, wC;
              CC[iz[15]] = iz[18];
              do {
                hz(QC = this.randomPrime(CC[iz[2]] / iz[30]), wC = this.randomPrime(CC[iz[2]] / iz[30]), CC[iz[15]] = zC.lcm(QC.prev(), wC.prev()))
              } while (zC.gcd(ZC, CC[iz[15]]).notEquals(iz[0]) || QC.minus(wC).abs().shiftRight(CC[iz[2]] / iz[30] - iz[75]).isZero());
              return {
                e: ZC,
                n: QC.multiply(wC),
                d: ZC.modInv(CC[iz[15]])
              }
            }
            static encrypt(...CC) {
              return CC[iz[12]] = iz[29], zC(CC[iz[2]]).modPow(CC[iz[30]], CC[iz[0]])
            }
            static decrypt(...CC) {
              return CC[iz[12]] = iz[29], zC(CC[iz[2]]).modPow(CC[iz[0]], CC[iz[30]])
            }
            static encode(...CC) {
              CC[iz[12]] = iz[0];
              const ZC = CC[iz[2]].split("").map((CC => CC.charCodeAt())).join("");
              return zC(ZC)
            }
            static decode(...CC) {
              CC[iz[12]] = iz[0];
              const zC = CC[iz[2]].toString();
              CC[iz[15]] = "";
              for (let ZC = iz[2]; ZC < zC.length; ZC += iz[30]) {
                let QC = Number(zC.substr(ZC, iz[30]));
                QC <= 30 ? (CC[iz[15]] += String.fromCharCode(Number(zC.substr(ZC, iz[29]))), ZC++) : CC[iz[15]] += String.fromCharCode(QC)
              }
              return CC[iz[15]]
            }
          }, module.exports = CC[iz[15]])
        }
        GC(123) in ez && RC(), (0, WC[iz[9]])("5 ")
      }
    }, SC.o.subscribe("customBindingsChanged", (() => {
      Yz()
    }));
    let dz = !1,
      mz = !1;
    const Hz = () => dz || mz && dC.b.isInGame(),
      Ez = CC => {
        Hz() && CC.preventDefault()
      };
    SC.o.subscribe("displaymodeFullscreenChange", (CC => {
      lz()
    })), SC.o.subscribe("pointerLockUpdate", (CC => {
      dz = CC, lz(), Xz()
    })), SC.o.subscribe("freeCursorUpdate", (CC => {
      mz = CC, lz(), Xz()
    }));
    const lz = () => {
        window.removeEventListener("wheel", Ez), mC.m && !(0, nC.t)() && (dz || mz) && window.addEventListener("wheel", Ez, {
          passive: !1
        })
      },
      Xz = () => {
        window.removeEventListener("wheel", cz), (dz || mz) && window.addEventListener("wheel", cz, {
          passive: !1
        })
      },
      cz = CC => {
        !0 === CC.ctrlKey && Hz() && CC.preventDefault()
      };

    function uz(CC) {
      SC.o.bp("QTEMouseState", {
        isDown: CC
      })
    }

    function rz(CC) {
      var zC, ZC, wC, bC, nC, fC, oC, qC;
      const WC = (0, hC.e)();
      WC.pCC = null !== (zC = function(CC, zC) {
        var ZC, QC;
        if (!qz) return null;
        const wC = CC.bloxd;
        bz ??= wC.getMetaInfo("Board").rootId;
        const bC = null !== (ZC = null === zC || void 0 === zC ? void 0 : zC.HV) && void 0 !== ZC ? ZC : null;
        if (!bC || wC.getMetaInfo(bC).rootId !== bz) return null;
        const nC = null !== (QC = null === zC || void 0 === zC ? void 0 : zC.position) && void 0 !== QC ? QC : null;
        if (wC.playerCanChangePos(CC.qE, nC[0], nC[1], nC[2])) return null;
        const fC = (CC, zC, ZC) => {
          const QC = wC.blockDataOwner.getBlockData(CC, zC, ZC),
            bC = null === QC || void 0 === QC ? void 0 : QC.persisted.shared.text.split("\n")[0].toLowerCase().trim();
          return HC.singleLineBoardActions.has(bC)
        };
        if (fC(nC[0], nC[1], nC[2])) return null;
        let oC;
        CC.HCC && (oC = [...CC.HCC], CC.lB(oC, oC));
        const qC = (oC ? CC.camera.cL : 0) + wC.getBlockReach(CC.qE);
        return CC.pickBlock(oC, CC.ECC, qC, ((zC, ZC, QC, bC) => 0 !== zC && ("Board" !== wC.getMetaInfo(zC).rootName || wC.playerCanChangePos(CC.qE, ZC, QC, bC) || fC(ZC, QC, bC))))
      }(WC, WC.pCC)) && void 0 !== zC ? zC : WC.pCC;
      const NC = null !== (ZC = null === (wC = WC.pCC) || void 0 === wC ? void 0 : wC.position) && void 0 !== ZC ? ZC : null,
        gC = null !== (bC = WC.ECC) && void 0 !== bC ? bC : WC.camera.yB(),
        pC = hC.g.localPlayerPickActionHelper.getPickEntityResult(gC),
        PC = null !== (nC = WC.pCC) && void 0 !== nC && nC.HV ? (0, uC.e)(WC.pCC.HV) : "Air",
        GC = CC === MC.e.UpFirePrimary || CC === MC.e.UpFireSecondary,
        RC = GC ? "onPlayerClickUp" : "onPlayerClick",
        AC = GC ? CC === MC.e.UpFireSecondary : CC === MC.e.DownFireSecondary,
        xC = !GC && (0, QC.getWasDoubleClick)();
      SC.o.bp("mouseState", {
        pF: CC,
        isDown: !GC
      }), (0, QC.sendColyMessage)(FC.Fh, {
        pF: CC,
        PF: xC,
        Nn: NC,
        Mn: pC
      }, !0), (0, hC.c)().client.triggerGameCallback(RC, WC.qE, AC, null !== (fC = null === NC || void 0 === NC ? void 0 : NC[0]) && void 0 !== fC ? fC : null, null !== (oC = null === NC || void 0 === NC ? void 0 : NC[1]) && void 0 !== oC ? oC : null, null !== (qC = null === NC || void 0 === NC ? void 0 : NC[2]) && void 0 !== qC ? qC : null, PC, pC)
    }
    window.addEventListener("keydown", (CC => {
      ["ArrowUp", "ArrowDown"].includes(CC.key) && CC.preventDefault()
    })), document.addEventListener("keydown", (CC => {
      (0, XC.b)(CC, (() => {
        const CC = (0, hC.e)();
        return (0, lC.H)(CC) || !1 !== CC.pR.canCustomiseChar
      }))
    }))
  },
  38931: (CC, zC, ZC) => {
    ZC.d(zC, {
      c: () => bC,
      d: () => nC
    });
    var QC = ZC(38268);
    let wC = !1;

    function bC() {
      return wC
    }

    function nC(CC) {
      wC = CC, CC ? QC.d.setMultiplierType("emoteWheel", 0) : QC.d.removeMultiplier("emoteWheel")
    }
  },
  38937: (CC, zC, ZC) => {
    function QC(CC) {
      return Boolean(CC.pR.useInventory && CC.pR.useFullInventory && CC.JR.PzC(CC.qE))
    }
    ZC.d(zC, {
      e: () => QC
    })
  },
  38818: (CC, zC, ZC) => {
    ZC.d(zC, {
      d: () => bC,
      e: () => wC
    });
    var QC = ZC(37014);

    function wC(CC, zC) {
      return {
        replayedClipName: CC,
        replayedClipAgeSeconds: zC
      }
    }

    function bC(CC, zC, ZC, wC, bC) {
      const nC = function(CC) {
          if ("object" !== typeof CC || null === CC) return null;
          const {
            replayedClipName: zC,
            replayedClipAgeSeconds: ZC
          } = CC;
          return "string" === typeof zC && "number" === typeof ZC ? {
            Ow: zC,
            kw: ZC
          } : null
        }(ZC),
        fC = null === nC ? ZC : null,
        {
          Ow: oC = null,
          kw: qC = 0
        } = null !== nC && void 0 !== nC ? nC : {};
      CC.animateEntity(zC, QC.d.Custom, fC, wC, bC, oC, qC)
    }
  },
  38824: (CC, zC, ZC) => {
    ZC.d(zC, {
      d: () => gC,
      e: () => FC,
      f: () => MC,
      j: () => NC,
      m: () => SC,
      o: () => WC
    });
    var QC = ZC(38832),
      wC = ZC(37103),
      bC = ZC(3611),
      nC = ZC(1843),
      fC = ZC(28),
      oC = ZC(2753);
    const qC = new QC.c;

    function FC() {
      return qC
    }

    function WC() {
      qC.clear()
    }

    function NC() {
      for (const CC of qC.ids()) {
        const zC = qC.getName(CC);
        void 0 !== zC && nC.d.delete(zC)
      }
      WC(), fC.o.bp("playerRosterChanged", qC.ids())
    }

    function MC(CC, zC) {
      var ZC, QC;
      if (qC.has(CC)) return qC.getSetting(CC, zC);
      const wC = (0, oC.e)();
      return null === (ZC = wC.QE[wC.qE]) || void 0 === ZC || null === (QC = ZC[CC]) || void 0 === QC ? void 0 : QC[zC]
    }

    function gC(CC) {
      const {
        added: zC,
        removed: ZC,
        settingChanges: QC
      } = qC.apply(CC);
      for (const {
          playerId: wC,
          name: bC
        }
        of ZC) void 0 === bC || pC(wC) || nC.d.delete(bC);
      for (const {
          playerId: bC,
          settings: nC
        }
        of QC)
        if (pC(bC)) SC(bC, nC);
        else
          for (const CC in nC)(0, wC.h)(bC, CC, nC[CC]);
      (zC.length > 0 || ZC.length > 0) && fC.o.bp("playerRosterChanged", qC.ids())
    }

    function SC(CC) {
      let zC = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : qC.getSettings(CC);
      if (zC) {
        (0, wC.d)(CC);
        for (const ZC in zC)(0, wC.b)(CC, ZC, zC[ZC])
      }
    }

    function pC(CC) {
      return CC === (0, oC.e)().mCC || (0, oC.c)().client.hasEntity(CC)
    }(0, bC.onGameReset)(WC)
  },
  37928: (CC, zC, ZC) => {
    ZC.d(zC, {
      c: () => eC,
      d: () => JC,
      f: () => iC,
      h: () => vC,
      j: () => hC
    });
    var QC = ZC(36961),
      wC = ZC(37931),
      bC = ZC(338),
      nC = ZC.n(bC),
      fC = ZC(3392);
    const oC = new QC.Eg,
      qC = new QC.Eg,
      FC = new QC.Eg,
      WC = new QC.Eg,
      NC = new QC.Eg,
      MC = [0, 0, 0],
      gC = {
        x: 0,
        y: 0
      },
      SC = new QC.Eg(1, 0, 0),
      pC = new QC.Eg(0, 1, 0),
      PC = QC.Matrix.Identity(),
      GC = new QC.Matrix,
      RC = new QC.Matrix,
      AC = new QC.Eg,
      xC = new wC.d(0, 0, 0, 0);

    function JC(CC, zC) {
      var ZC, wC;
      const bC = IC(CC, zC);
      if (bC) {
        const CC = bC.x,
          zC = bC.y,
          ZC = CC - 50,
          QC = zC - 50;
        return Math.abs(ZC) <= fC.c && Math.abs(QC) <= (0, fC.n)() ? {
          x: CC,
          y: zC
        } : YC(ZC, QC)
      }
      FC.L_(zC[0], zC[1], zC[2]),
        function(CC) {
          const zC = CC.Vg.iZC(),
            ZC = zC ? QC.Matrix.FromArrayToRef(zC.worldMatrix, 0, RC) : CC.Vg.Km().activeCamera.getWorldMatrix();
          QC.Eg.TransformNormalToRef(SC, ZC, WC), WC.normalize(), QC.Eg.TransformNormalToRef(pC, ZC, NC), NC.normalize()
        }(CC);
      const nC = QC.Eg.Dot(FC, WC);
      let oC = -QC.Eg.Dot(FC, NC);
      Math.abs(nC) < .001 && Math.abs(oC) < .001 && (oC = -1);
      const qC = null !== (ZC = null === (wC = CC.Vg.iZC()) || void 0 === wC ? void 0 : wC.projectionMatrix) && void 0 !== ZC ? ZC : CC.Vg.Km().activeCamera.getProjectionMatrix().m;
      return YC(nC * qC[0], oC * qC[5])
    }

    function IC(CC, zC) {
      const ZC = CC.Vg.Km(),
        wC = ZC.mg(),
        bC = wC.getRenderWidth(),
        nC = wC.getRenderHeight();
      xC.width = bC, xC.height = nC;
      const fC = CC.Vg.iZC(),
        FC = fC ? AC.L_(fC.eye[0], fC.eye[1], fC.eye[2]) : CC.Vg.camera.globalPosition;
      oC.L_(FC.x + 10 * zC[0], FC.y + 10 * zC[1], FC.z + 10 * zC[2]);
      const WC = fC ? QC.Matrix.FromArrayToRef(fC.viewProjectionMatrix, 0, GC) : ZC.getTransformMatrix();
      return QC.Eg.ProjectToRef(oC, PC, WC, xC, qC), qC.z < 0 || qC.z > 1 ? null : (gC.x = qC.x / bC * 100, gC.y = qC.y / nC * 100, gC)
    }

    function iC(CC, zC) {
      return JC(CC, KC(CC, zC))
    }

    function vC(CC, zC) {
      const ZC = IC(CC, KC(CC, zC));
      return ZC && {
        x: ZC.x,
        y: ZC.y
      }
    }

    function eC(CC) {
      var zC, ZC;
      return 1 / (null !== (zC = null === (ZC = CC.Vg.iZC()) || void 0 === ZC ? void 0 : ZC.projectionMatrix[0]) && void 0 !== zC ? zC : CC.Vg.Km().activeCamera.getProjectionMatrix().m[0])
    }

    function hC(CC, zC, ZC) {
      const QC = CC.Vg.iZC(),
        wC = QC ? QC.worldMatrix : CC.Vg.Km().activeCamera.getWorldMatrix().m,
        bC = CC.YN;
      for (let nC = 0; nC < 3; nC++) zC[nC] = wC[12 + nC] + bC[nC], ZC[nC] = wC[8 + nC];
      nC().normalize(ZC, ZC)
    }

    function KC(CC, zC) {
      const ZC = CC.YN,
        QC = CC.Vg.iZC(),
        wC = QC ? AC.L_(QC.eye[0], QC.eye[1], QC.eye[2]) : CC.Vg.camera.globalPosition;
      return MC[0] = zC[0] - ZC[0] - wC.x, MC[1] = zC[1] - ZC[1] - wC.y, MC[2] = zC[2] - ZC[2] - wC.z, nC().normalize(MC, MC), MC
    }

    function YC(CC, zC) {
      return (0, fC.f)(CC, zC, fC.c, (0, fC.n)())
    }
  },
  38879: (CC, zC, ZC) => {
    ZC.d(zC, {
      d: () => fC
    });
    var QC = ZC(28),
      wC = ZC(1240),
      bC = ZC(2957);
    const nC = "Reconnecting";
    class fC {
      constructor(CC) {
        this.hooks = CC, this.graceMs = 0, this.sessionBased = !1, this.controller = void 0, this.frozen = !1, this.stopped = !1, this.listening = !1, this.ended = !1, this.retryNow = () => {
          "visible" === document.visibilityState && this.controller.retryNow()
        }, this.onPageHide = CC => {
          CC.persisted || this.leave()
        }, this.controller = new bC.e((zC => CC.reconnect(zC)), {
          isSessionLive: () => !this.ended && CC.isLive(),
          onPhaseChanged: CC => {
            this.onPhaseChanged(CC)
          },
          onReconnected: zC => {
            CC.onReconnected(zC)
          },
          onGaveUp: zC => {
            !this.ended && CC.isLive() && CC.onGaveUp(this.sessionBased, zC)
          }
        })
      }
      onInitialInfo(CC, zC) {
        this.graceMs = CC, this.sessionBased = zC
      }
      canHoldSeat() {
        return this.graceMs > 0 && !this.ended
      }
      isResuming() {
        return "connected" !== this.controller.phase
      }
      onConnectionLost(CC) {
        this.ended || this.controller.onConnectionLost(CC, this.graceMs)
      }
      onResuming() {
        this.ended || this.controller.onResuming()
      }
      onResumed() {
        this.controller.stop()
      }
      leave() {
        const CC = this.isResuming() && !this.controller.awaitingResumeOnRoom,
          zC = this.controller.heldToken;
        this.end(), CC && "" !== zC && this.hooks.releaseSeat(zC)
      }
      end() {
        this.ended = !0, this.controller.stop()
      }
      onPhaseChanged(CC) {
        const zC = (0, bC.s)(CC);
        zC !== this.stopped && (this.stopped = zC, this.hooks.freeze(zC));
        const ZC = "frozen" === CC || "resuming" === CC && this.frozen;
        ZC && !this.frozen ? (0, wC.u)(nC, {
          overridesPause: !0
        }) : !ZC && this.frozen && (0, wC.s)(nC), this.frozen = ZC, this.setListening("connected" !== CC), QC.o.bp(bC.p, ZC ? "frozen" : CC)
      }
      setListening(CC) {
        CC !== this.listening && (this.listening = CC, CC ? (window.addEventListener("online", this.retryNow), document.addEventListener("visibilitychange", this.retryNow), window.addEventListener("pagehide", this.onPageHide)) : (window.removeEventListener("online", this.retryNow), document.removeEventListener("visibilitychange", this.retryNow), window.removeEventListener("pagehide", this.onPageHide)))
      }
    }
  },
  38883: (CC, zC, ZC) => {
    ZC.d(zC, {
      d: () => QC
    });
    class QC {
      constructor(CC) {
        let zC = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Date.now;
        this.onSilent = CC, this.now = zC, this.lastHeardAt = void 0, this.resumedAt = void 0, this.lastCheckAt = void 0, this.wasVisible = "visible" === document.visibilityState, this.interval = void 0, this.check = () => {
          const CC = this.now(),
            zC = CC - this.lastCheckAt <= 2e3;
          this.lastCheckAt = CC;
          const ZC = "visible" === document.visibilityState;
          !ZC || zC && this.wasVisible || (this.resumedAt = CC), this.wasVisible = ZC, ZC && CC - this.lastHeardAt > 12e3 && CC - this.resumedAt > 2e3 && this.onSilent()
        }, this.lastHeardAt = zC(), this.resumedAt = this.lastHeardAt, this.lastCheckAt = this.lastHeardAt, this.interval = setInterval(this.check, 1e3), document.addEventListener("visibilitychange", this.check), window.addEventListener("online", this.check)
      }
      heard() {
        this.lastHeardAt = this.now()
      }
      dispose() {
        clearInterval(this.interval), document.removeEventListener("visibilitychange", this.check), window.removeEventListener("online", this.check)
      }
    }
  },
  38804: (CC, zC, ZC) => {
    ZC.d(zC, {
      b: () => NC
    });
    var QC = ZC(184),
      wC = ZC(338),
      bC = ZC.n(wC),
      nC = ZC(36637),
      fC = ZC(36641),
      oC = ZC(2753);
    const qC = QC.f.Dp * QC.f.playerEyeToHeightRatio,
      FC = 250,
      WC = 1.1,
      NC = new class {
        constructor() {
          this.entities = new Map, this.playing = new Map, this.msSinceLastScan = 0
        }
        add(CC, zC) {
          this.entities.set(CC, zC)
        }
        update(CC, zC) {
          const ZC = this.entities.get(CC);
          this.entities.set(CC, zC);
          const QC = this.playing.get(CC);
          QC && (ZC && ZC.soundName === zC.soundName ? (QC.sound.setRelativeVolume(zC.volume), QC.sound.rate(zC.rate), QC.sound.setPannerAttr({
            refDistance: zC.refDistance
          })) : this.stopEntity(CC))
        }
        remove(CC) {
          this.stopEntity(CC), this.entities.delete(CC)
        }
        ZN(CC) {
          this.msSinceLastScan += CC, this.msSinceLastScan < FC || (this.msSinceLastScan = 0, this.scan())
        }
        stopEntity(CC) {
          const zC = this.playing.get(CC);
          zC && (zC.sound.stop(), this.playing.delete(CC))
        }
        startEntity(CC, zC, ZC) {
          const QC = (0, fC.g)(zC.soundName);
          if (!QC) return console.error(`AudioEntityManager: no sound found for "${zC.soundName}", dropping audio entity ${CC}`), void this.remove(CC);
          const wC = nC.e.play(QC, zC.volume, ZC, zC.maxHearDist, zC.refDistance, !0);
          wC.rate(zC.rate), this.playing.set(CC, {
            sound: wC,
            lastPos: bC().clone(ZC)
          })
        }
        scan() {
          const CC = (0, oC.e)();
          if (!CC) return;
          const zC = CC.JR.yG(CC.qE);
          if (zC)
            for (const [ZC, QC] of this.entities) {
              if (!CC.JR.YCC(ZC, "position")) continue;
              const wC = CC.JR.yG(ZC),
                nC = bC().sqrDist(zC, wC),
                fC = this.playing.get(ZC);
              if (fC) {
                const CC = QC.maxHearDist * WC;
                nC > CC * CC ? this.stopEntity(ZC) : bC().equals(wC, fC.lastPos) || (fC.sound.setPosition([wC[0], wC[1] + qC, wC[2]]), bC().copy(fC.lastPos, wC))
              } else nC <= QC.maxHearDist * QC.maxHearDist && this.startEntity(ZC, QC, wC)
            }
        }
      }
  },
  38892: (CC, zC, ZC) => {
    ZC.d(zC, {
      e: () => qC,
      f: () => FC
    });
    var QC = ZC(1633),
      wC = ZC(184),
      bC = ZC(1609),
      nC = ZC(1701),
      fC = ZC(1149),
      oC = ZC(1078);
    async function qC(CC, zC) {
      return function(CC) {
        return "object" === typeof CC && null !== CC && CC.code === wC.e.VpnIp.code
      }(zC) && function(CC) {
        return bC.d.supports("appCheck") && CC.isLoggedIn() && !CC.hasTriedAppAttestation()
      }(CC) && await async function(CC) {
        try {
          const {
            token: zC
          } = await (0, nC.d)(), {
            "3PSIDMCPP": ZC
          } = await (0, oC.postJsonWithMetricsCookiesAndJsonResponse)(`${fC.clientSideServerUrls.indexUrl}/index/app-attestation`, {
            appCheckToken: zC
          }, {
            retries: 0
          }, CC.getMetricsCookies());
          return CC.setAppAttestedAuthJwt(ZC), !0
        } catch (zC) {
          return zC instanceof QC.e && "failed" === zC.code ? (console.warn("The app couldn't get an App Check token:", zC), CC.markAppAttestationTried()) : console.error("Failed to attest the app:", zC), !1
        }
      }(CC)
    }
    async function FC(CC, zC) {
      try {
        return await zC()
      } catch (ZC) {
        if (!await qC(CC, ZC)) throw ZC
      }
      return zC()
    }
  },
  38886: (CC, zC, ZC) => {
    ZC.d(zC, {
      c: () => NC,
      f: () => FC
    });
    var QC = ZC(184),
      wC = ZC(1740),
      bC = ZC(1152),
      nC = ZC(8897);
    const fC = [250, 500, 1e3, 2e3, 1250],
      oC = 406;

    function qC(CC) {
      if ("object" !== typeof CC || null === CC) return !1;
      const {
        code: zC,
        message: ZC
      } = CC, wC = QC.e.duplicateLobbyNameError;
      return (zC === wC.code || zC === oC) && (ZC === wC.text || ZC === wC.text + QC.k)
    }
    async function FC(CC, zC) {
      let ZC = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : wC.c;
      for (let wC = 0;; wC++) {
        let nC;
        (0, bC.n)(zC);
        try {
          return await CC()
        } catch (QC) {
          if (nC = fC[wC], void 0 === nC || !qC(QC)) throw QC
        }
        await ZC(nC, zC)
      }
    }
    const WC = new Set([QC.e.duplicateLobbyNameError.code, QC.e.lobbyCantBeCreated.code, QC.e.roomDisposedEarlyError.code, QC.e.roomDisposedLateError.code, QC.e.serverRoomLimitReached.code]);

    function NC(CC) {
      if (qC(CC)) return !0;
      const zC = (0, nC.e)(CC);
      return "number" === typeof zC && WC.has(zC)
    }
  },
  38865: (CC, zC, ZC) => {
    ZC.d(zC, {
      c: () => bC,
      e: () => wC
    });
    var QC = ZC(28);

    function wC(CC) {
      return "refetchCode" === CC || "devDownloadJson" === CC || CC.startsWith("Plugin")
    }

    function bC(CC, zC) {
      "refetchCode" !== CC ? "Plugin|MobAiPlugin|ShowPetUi" !== CC ? Promise.all([ZC.e(107), ZC.e(108), ZC.e(103), ZC.e(105), ZC.e(214)]).then((() => ZC(41552))).then((ZC => {
        let {
          runClientGameMessage: QC
        } = ZC;
        QC(CC, zC)
      })).catch((zC => {
        console.error(`Game message ${CC} failed`, zC)
      })) : QC.o.bp("showPetUi", zC) : QC.o.bp("refetchCode")
    }
  },
  38848: (CC, zC, ZC) => {
    ZC.d(zC, {
      c: () => FC
    });
    var QC = ZC(1169),
      wC = ZC(1284),
      bC = ZC(20),
      nC = ZC(1263),
      fC = ZC(1275),
      oC = ZC(1453),
      qC = ZC(36346);

    function FC(CC) {
      let {
        Kw: zC,
        Yw: ZC
      } = CC;
      const FC = null !== zC && void 0 !== zC ? zC : (0, fC.d)().gameNameWithVariation;
      (0, QC.R)(FC) && ((0, qC.k)(), (0, nC.X)((() => {
        console.log("Received matchmaking order from game server to game", zC), (0, bC.g)("inGameReplay"), (0, oC.navigatePreserveSearch)((0, wC.b)(FC, null !== ZC && void 0 !== ZC ? ZC : void 0))
      }), "video_start"))
    }
  },
  38841: (CC, zC, ZC) => {
    ZC.d(zC, {
      e: () => oC,
      i: () => nC,
      m: () => fC,
      o: () => qC
    });
    var QC = ZC(28),
      wC = ZC(1307);
    const bC = new Map;

    function nC(CC, zC) {
      QC.o.bp("newUiRequest", {
        id: CC,
        clientParameters: zC
      }, !0)
    }

    function fC(CC) {
      QC.o.bp("removeUiRequest", CC, !0);
      const zC = bC.get(CC);
      zC && (zC.tearDownNotification(), bC.delete(CC))
    }

    function oC() {
      QC.o.bp("clearUiRequests");
      for (const CC of bC.values()) CC.tearDownNotification();
      bC.clear()
    }

    function qC(CC, zC, ZC, QC) {
      const nC = wC.NotificationProvider.showPromptPopup({
        title: zC,
        confirmText: "general:yes",
        cancelText: "general:no",
        destructive: ZC,
        unlockPointerKey: "uiRequestPopup"
      });
      bC.set(CC, nC), nC.getResult().then((zC => {
        bC.delete(CC), "notificationTornDown" !== zC && QC(zC)
      }))
    }
  },
  38920: (CC, zC, ZC) => {
    ZC.d(zC, {
      e: () => MC,
      h: () => NC
    });
    const QC = "ue:",
      wC = ["keydown", "keyup", "mousedown", "mouseup", "pointerdown", "pointerup", "touchstart", "touchend"],
      bC = "[A-Za-z0-9]{1,24}",
      nC = 15,
      fC = new RegExp(`^${bC}$`);
    new RegExp(`^${QC}(${[...wC,"other"].join("|")}):(?:n|k(${bC})|b(0|[1-9][0-9]?)):([01])([01])$`);

    function oC(CC, zC, ZC, bC, oC) {
      const qC = "string" === typeof CC && wC.includes(CC) ? CC : "other";
      let FC = "n";
      return "string" === typeof zC ? FC = fC.test(zC) ? `k${zC}` : "n" : "number" === typeof ZC && Number.isInteger(ZC) && ZC >= 0 && ZC <= nC && (FC = `b${ZC}`), `${QC}${qC}:${FC}:${bC?1:0}${oC?1:0}`
    }
    var qC = ZC(1584),
      FC = ZC(1654);
    let WC = null;

    function NC(CC) {
      const zC = CC instanceof Element && CC !== document.body && CC !== document.documentElement && !(0, qC.u)(CC) && !CC.closest("#root");
      return {
        editable: (0, FC.d)(CC),
        outsideView: zC
      }
    }

    function MC(CC) {
      return WC ??= function(CC) {
        try {
          const {
            editable: zC,
            outsideView: ZC
          } = NC(CC.target), QC = CC;
          return oC(CC.type, QC.code, QC.button, zC, ZC)
        } catch {
          return oC(null, null, null, !1, !1)
        }
      }(CC), WC
    }
  },
  38868: (CC, zC, ZC) => {
    ZC.d(zC, {
      b: () => fC,
      d: () => oC,
      h: () => qC
    });
    var QC = ZC(1169),
      wC = ZC(970),
      bC = ZC(36725),
      nC = ZC(28);

    function fC(CC) {
      let {
        lobbyName: zC,
        gameNameWithVariation: ZC
      } = CC;
      return !(0, QC.U)(zC) || null !== ZC && (ZC.startsWith("testGym") || (0, wC.i)(ZC))
    }

    function oC(CC) {
      return CC.rb === bC.d.Leave || CC.rb === bC.d.Cursor
    }

    function qC(CC) {
      nC.o.bp("codeCollab", {
        type: CC.rb,
        docKey: CC.sb,
        version: CC.Tb,
        editorCount: CC.ab,
        peers: CC.tb,
        updates: CC.Db,
        playerId: CC.jb,
        playerName: CC.yb,
        colour: CC.Lb,
        anchor: CC.Ub,
        head: CC.Bb,
        existingCursors: CC.Ob,
        files: CC.kb,
        engineSettings: CC.Vb
      })
    }
  },
  38832: (CC, zC, ZC) => {
    ZC.d(zC, {
      c: () => QC
    });
    class QC {
      constructor() {
        this.members = new Map
      }
      apply(CC) {
        const zC = {
          added: [],
          removed: [],
          settingChanges: []
        };
        for (const QC of CC.OZ) {
          let CC = this.members.get(QC.kZ);
          if (CC || (CC = {
              name: null,
              settings: {}
            }, this.members.set(QC.kZ, CC), zC.added.push(QC.kZ)), null !== QC.VZ && (CC.name = QC.VZ), null !== QC.CQ || QC.zQ.length > 0) {
            const ZC = null === QC.CQ ? {} : JSON.parse(QC.CQ);
            Object.assign(CC.settings, ZC);
            for (const zC of QC.zQ) delete CC.settings[zC], ZC[zC] = void 0;
            zC.settingChanges.push({
              playerId: QC.kZ,
              settings: ZC
            })
          }
        }
        for (const QC of CC.ZQ) {
          const CC = this.members.get(QC);
          var ZC;
          if (CC) this.members.delete(QC), zC.removed.push({
            playerId: QC,
            name: null !== (ZC = CC.name) && void 0 !== ZC ? ZC : void 0
          })
        }
        return zC
      }
      has(CC) {
        return this.members.has(CC)
      }
      ids() {
        return [...this.members.keys()]
      }
      getName(CC) {
        var zC, ZC;
        return null !== (zC = null === (ZC = this.members.get(CC)) || void 0 === ZC ? void 0 : ZC.name) && void 0 !== zC ? zC : void 0
      }
      getSettings(CC) {
        var zC;
        return null === (zC = this.members.get(CC)) || void 0 === zC ? void 0 : zC.settings
      }
      getSetting(CC, zC) {
        var ZC;
        return null === (ZC = this.members.get(CC)) || void 0 === ZC ? void 0 : ZC.settings[zC]
      }
      clear() {
        this.members.clear()
      }
    }
  },
  38874: (CC, zC, ZC) => {
    ZC.d(zC, {
      e: () => QC,
      h: () => wC
    });
    const QC = ["description", "label"];

    function wC(CC) {
      const zC = CC.type;
      return {
        type: zC,
        params: CC[zC]
      }
    }
  }
};
Object.freeze(modules);
for (const CC in modules) Object.freeze(modules[CC]);