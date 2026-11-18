export const id = 223;
export const ids = [223];
export const modules = {
  38028: (BB, TB, dB) => {
    dB.d(TB, {
      c: () => pB,
      f: () => lB
    });
    var VB = dB(24);
    let yB = !1;

    function pB() {
      return yB
    }

    function lB(BB) {
      yB !== BB && (yB = BB, VB.h.yH("replayViewer|videoExportChanged"))
    }
  },
  37912: (BB, TB, dB) => {
    dB.d(TB, {
      d: () => pB
    });
    var VB = dB(24),
      yB = dB(1708);

    function pB(BB) {
      let {
        taskId: TB,
        progress: dB
      } = BB;
      const VB = yB.c.get("_tasks");
      null !== VB && void 0 !== VB && VB[TB] && yB.c.apply({
        _tasks: {
          ...VB,
          [TB]: {
            ...VB[TB],
            progress: dB
          }
        }
      })
    }
    VB.h.subscribe("clientTaskProgress", (BB => {
      pB(BB)
    }))
  },
  38043: (BB, TB, dB) => {
    dB.d(TB, {
      d: () => uB,
      h: () => HB,
      j: () => DB
    });
    var VB = dB(2583);
    const yB = 0,
      pB = 2,
      lB = 3,
      JB = 4;
    class YB {
      constructor(BB, TB) {
        this.width = BB, this.Kk = TB, this.data = void 0, this.next = 0, this.size = 0, this.data = new Float64Array(BB * TB)
      }
      push(BB) {
        let TB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        const dB = this.data.subarray(this.next * this.width, (this.next + 1) * this.width);
        for (let VB = 0; VB < this.width; VB++) dB[VB] = BB[TB + VB];
        return this.next = (this.next + 1) % this.Kk, this.size = Math.min(this.size + 1, this.Kk), dB
      }
      lines() {
        const BB = [],
          TB = (this.next - this.size + this.Kk) % this.Kk;
        for (let dB = 0; dB < this.size; dB++) {
          const VB = (TB + dB) % this.Kk * this.width;
          BB.push(Array.from(this.data.subarray(VB, VB + this.width)).join(","))
        }
        return BB
      }
    }

    function gB(BB) {
      return Number.isFinite(BB) ? String(Math.round(10 * BB) / 10) : String(BB)
    }

    function oB(BB) {
      return Number.isFinite(BB) ? BB.toFixed(1) : String(BB)
    }
    class kB {
      constructor() {
        this.frames = 0, this.looked = 0, this.idle = 0, this.iW = 0, this.pastLimit = 0, this.lockSkips = 0, this.pH = 0, this.lost = 0, this.dropped = 0, this.longFrames = 0, this.dtMin = 1 / 0, this.dtMax = 0, this.dtSum = 0, this.raw = [0, 0], this.turned = [0, 0], this.peakRate = 0, this.events = 0, this.eventMax = 0, this.bigEvents = 0, this.outliers = 0, this.eventLines = 0, this.suppressed = 0
      }
    }
    class LB {
      constructor() {
        var BB = this;
        this.tally = new kB, this.records = new YB(10, 3600), this.events = new YB(4, 12e3), this.event = new Float64Array(4), this.take = null, this.client = "js", this.started = !1, this.record = function(TB) {
          let dB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
          const [VB, YB, kB, LB, OB, DB, uB, HB, EB, vB] = BB.records.push(TB, dB), mB = BB.tally;
          switch (mB.frames++, uB) {
            case yB:
              return void mB.idle++;
            case JB:
              return void mB.pH++;
            case lB:
              return mB.lockSkips++, void(0 === kB && 0 === LB || BB.outlier(`lock skip dropped raw (${gB(kB)}, ${gB(LB)}) at ${oB(VB)} ms`))
          }
          mB.looked++, Number.isFinite(YB) && (mB.dtMin = Math.min(mB.dtMin, YB), mB.dtMax = Math.max(mB.dtMax, YB), mB.dtSum += YB, YB > 0 && (mB.peakRate = Math.max(mB.peakRate, Math.hypot(OB, DB) / YB))), mB.raw[0] += kB, mB.raw[1] += LB, mB.turned[0] += OB, mB.turned[1] += DB;
          const iB = Math.abs(kB) > vB || Math.abs(LB) > vB,
            NB = `raw (${gB(kB)}, ${gB(LB)}) over ${oB(YB)} ms, limit ${gB(vB)}, filter v (${HB.toFixed(3)}, ${EB.toFixed(3)}) px/ms, at ${oB(VB)} ms`;
          uB === pB ? (mB.iW++, BB.outlier(`spike put right: ${NB} -> turned (${gB(OB)}, ${gB(DB)})`)) : iB ? (mB.pastLimit++, BB.outlier(`kept past limit: ${NB}`)) : YB > 50 && (mB.longFrames++, BB.outlier(`long frame: ${NB}, turned in full`))
        }, this.onMouseMove = BB => {
          const TB = this.tally,
            {
              movementX: dB,
              movementY: VB
            } = BB;
          TB.events++;
          const yB = Math.max(Math.abs(dB), Math.abs(VB));
          TB.eventMax = Math.max(TB.eventMax, yB);
          const pB = null !== document.pointerLockElement,
            lB = this.event;
          lB[0] = BB.timeStamp, lB[1] = dB, lB[2] = VB, lB[3] = pB ? 1 : 0, this.events.push(lB), yB >= 200 && (TB.bigEvents++, this.eventOutlier(`big mousemove (${dB}, ${VB}) at ${oB(BB.timeStamp)} ms, lock ${pB?"Dg":"free"}`))
        }, this.onLockChange = () => {
          const BB = document.pointerLockElement;
          (0, VB.i)("look", `pointer lock ${BB?`gained (${BB.tagName.toLowerCase()})`:"lost"} at ${oB(performance.now())} ms`)
        }, this.onLockError = () => {
          (0, VB.i)("look", `pointer lock request failed at ${oB(performance.now())} ms`)
        }, this.onVisibility = () => {
          (0, VB.i)("look", `page ${document.visibilityState} at ${oB(performance.now())} ms`)
        }, this.flush = () => {
          this.takeRecords();
          const BB = this.tally;
          if (this.tally = new kB, 0 === BB.events && 0 === BB.raw[0] && 0 === BB.raw[1] && 0 === BB.lockSkips && 0 === BB.iW && 0 === BB.dropped) return;
          const TB = BB.looked > 0 ? BB.dtSum / BB.looked : NaN,
            dB = [`${BB.frames} frames (${BB.looked} looked, ${BB.idle} idle${"wasm"===this.client?`, ${BB.pH} carried`:""})`, `dt avg ${oB(TB)} min ${oB(BB.dtMin)} max ${oB(BB.dtMax)}, ${BB.longFrames} long`, `${BB.events} mousemoves (max ${gB(BB.eventMax)} px, ${BB.bigEvents} big)`, `raw (${gB(BB.raw[0])}, ${gB(BB.raw[1])}) turned (${gB(BB.turned[0])}, ${gB(BB.turned[1])})`, `peak ${BB.peakRate.toFixed(2)} px/ms`, `put right ${BB.iW}, past limit ${BB.pastLimit}, lock skips ${BB.lockSkips}`, "lock " + (document.pointerLockElement ? "Dg" : "free")];
          BB.dropped > 0 && dB.push(`${BB.dropped} doubled spike copies dropped`), BB.lost > 0 && dB.push(`${BB.lost} records lost`), BB.suppressed > 0 && dB.push(`${BB.suppressed} outlier lines not shown`), (0, VB.i)("look", `1s: ${dB.join("; ")}`)
        }, this.dump = () => [`look records (${this.client}): nowMs,dtMs,rawX,rawY,turnedX,turnedY,outcome,vX,vY,limit`, ...this.records.lines(), "mousemove events: timeStamp,movementX,movementY,locked", ...this.events.lines()].join("\n")
      }
      start(BB, TB) {
        this.client = BB, this.take = TB;
        const {
          screen: dB
        } = window;
        (0, VB.i)("look", `start: ${BB} client, dpr ${window.devicePixelRatio}, screen ${dB.width}x${dB.height}, pointer lock ${document.pointerLockElement?"Dg":"free"}`), this.started || (this.started = !0, window.addEventListener("mousemove", this.onMouseMove, {
          capture: !0,
          passive: !0
        }), document.addEventListener("pointerlockchange", this.onLockChange), document.addEventListener("pointerlockerror", this.onLockError), document.addEventListener("visibilitychange", this.onVisibility), setInterval(this.flush, 1e3), (0, VB.f)("look", this.dump))
      }
      outlier(BB) {
        const TB = this.tally;
        TB.outliers >= 20 ? TB.suppressed++ : (TB.outliers++, (0, VB.i)("look", BB))
      }
      eventOutlier(BB) {
        const TB = this.tally;
        TB.eventLines >= 10 ? TB.suppressed++ : (TB.eventLines++, (0, VB.i)("look", BB))
      }
      takeRecords() {
        var BB;
        const TB = null === (BB = this.take) || void 0 === BB ? void 0 : BB.call(this);
        if (TB && TB.length >= 2) {
          this.tally.lost += TB[0], this.tally.dropped += TB[1];
          for (let BB = 2; BB + 10 <= TB.length; BB += 10) this.record(TB, BB)
        }
      }
      droppedCopy() {
        this.tally.dropped++
      }
      endTake() {
        this.takeRecords(), this.take = null
      }
    }
    let OB = null;

    function DB(BB) {
      let TB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
      return OB ??= new LB, OB.start(BB, TB), OB.record
    }

    function uB() {
      var BB;
      null === (BB = OB) || void 0 === BB || BB.endTake()
    }

    function HB() {
      var BB;
      null === (BB = OB) || void 0 === BB || BB.droppedCopy()
    }
  },
  37905: (BB, TB, dB) => {
    dB.d(TB, {
      e: () => RT,
      f: () => PT,
      g: () => QT
    });
    var VB = dB(3191),
      yB = dB(184),
      pB = dB(581),
      lB = dB(33),
      JB = dB(2385),
      YB = dB(3249),
      gB = dB(3239),
      oB = dB(1105);
    const kB = new WeakMap;
    class LB {
      constructor(BB, TB) {
        let dB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {
          AgB: !0
        };
        this.callbacks = TB, this.options = dB, this.hdB = void 0, this.sessionId = void 0, this.Hs = [], this.bgB = !1, this.ND = !1, this.ngB = void 0, this.qN = 0, this.ZyB = 0, this.egB = (BB, TB) => {
          if (this.ND) return;
          const dB = Number(BB);
          this.bgB ? this.BoB(dB, TB) : this.Hs.push({
            id: dB,
            payload: TB
          })
        }, this.dispose = () => {
          this.ND || (this.ND = !0, kB.delete(this), this.Hs.length = 0, this.ngB())
        }, this.hdB = BB, this.sessionId = BB.sessionId, kB.set(this, []), this.ngB = this.ToB()
      }
      doB(BB) {
        this.ngB(), this.hdB = BB, this.sessionId = BB.sessionId, this.qN = 0, this.ZyB = 0, this.ngB = this.ToB()
      }
      get XN() {
        return this.ZyB
      }
      ToB() {
        const BB = this.hdB.Qv("*", this.egB);
        return this.options.AgB && this.hdB.Av(this.dispose), BB
      }
      BoB(BB, TB) {
        try {
          (0, YB.ec)(BB) && (TB = (0, YB.c)(BB, gB.iD.from(TB)));
          const dB = kB.get(this)[BB];
          if ("function" !== typeof dB) {
            if (this.callbacks.VoB) return void this.callbacks.VoB(BB, TB);
            throw new Error(`No onMessage handler registered for message id ${BB}`)
          }
          dB(TB)
        } catch (dB) {
          this.callbacks.yoB(`Error in onMessage ${BB} with payload ${JSON.stringify(TB)}`, dB)
        } finally {
          this.qN++
        }
      }
      poB() {
        for (const {
            id: BB,
            payload: TB
          }
          of this.Hs) {
          if (this.ND) break;
          this.BoB(BB, TB)
        }
        this.Hs.length = 0
      }
      WdB() {
        return this.ND
      }
      JoB() {
        if (this.bgB || this.ND) throw new Error("Trying to getOnMessageRegistrationHandler after registration finished");
        return {
          Qv: (BB, TB) => {
            if (this.bgB || this.ND) throw new Error("Trying to call onMessage after registration finished");
            this.Qv(BB, TB)
          },
          finishRegistration: () => {
            if (this.ND) throw new Error("Cannot finish message registration after disposal");
            this.bgB = !0, this.poB()
          }
        }
      }
      Qv(BB, TB) {
        var dB, VB;
        null === (dB = (VB = this.callbacks).YoB) || void 0 === dB || dB.call(VB);
        const yB = kB.get(this);
        for (; BB > yB.length;) yB[yB.length] = null;
        yB[BB] = TB
      }
      send(BB, TB) {
        this.goB(), (0, oB.H)(TB) ? this.hdB.Gs(BB, TB) : this.hdB.send(BB, TB)
      }
      goB() {
        var BB, TB;
        (this.ZyB++, 5 === OB++) && (null === (BB = (TB = this.callbacks).YoB) || void 0 === BB || BB.call(TB), OB = 0)
      }
      nH() {
        this.dispose(), this.hdB.nH()
      }
      lD() {
        this.dispose(), this.hdB.lD()
      }
    }
    let OB = 0;
    var DB = dB(3204);
    class uB extends LB {
      constructor(BB) {
        super(BB, {
          YoB: () => {
            (0, lB.o)(!0) && (0, VB.aN)()
          },
          yoB: (BB, TB) => {
            var dB;
            null === (dB = (0, JB.d)()) || void 0 === dB || dB.Mu(BB, TB)
          }
        }, {
          AgB: !1
        }), (0, DB.d)(BB)
      }
      Fs(BB, TB) {
        return !!(0, DB.g)((0, DB.b)(), this.hdB, BB, TB) && (this.goB(), !0)
      }
      doB(BB) {
        this.ooB(), super.doB(BB), (0, DB.d)(BB)
      }
      nH() {
        super.nH(), this.ooB()
      }
      ooB() {
        this.hdB.TE.oD.rU = void 0
      }
    }
    var HB = dB(24),
      EB = dB(1708),
      vB = dB(1596),
      mB = dB(35476);

    function iB(BB, TB, dB, VB, yB) {
      let pB = arguments.length > 5 && void 0 !== arguments[5] && arguments[5];
      if (!BB.Km.XTB(BB.rK)) return console.log("Got resync inven but don't have inven component"), void TB.acknowledge(VB);
      pB && console.error("Had to sync inven"), TB.JBB(VB, yB) && dB.yH("chestToggleFromServer", !1, !0), dB.yH("syncedInvenFromServer")
    }
    var NB = dB(37912),
      tB = dB(37918),
      fB = dB(36927),
      sB = dB(36727),
      MB = dB(572),
      zB = dB(37359);

    function wB(BB, TB, dB) {
      const VB = function(BB) {
          const TB = new Int32Array(BB.length * zB.g);
          return BB.forEach(((BB, dB) => {
            const VB = dB * zB.g;
            if (4 === BB.length) {
              const [dB, yB, pB, lB] = BB;
              TB.set([dB, yB, pB, dB, yB, pB, lB], VB)
            } else {
              const [dB, yB, pB, lB, JB, YB, gB] = BB;
              TB.set([dB, pB, JB, yB, lB, YB, gB], VB)
            }
          })), TB
        }(dB),
        yB = (TB, dB, VB, yB) => {
          BB.setBlockNoMulti(TB, dB, VB, yB, !0)
        };
      BB.client.gameRecorder.isCapturing() ? (0, zB.vb)(VB, (0, zB.ub)(VB), yB) : BB.OL.JL.dW(VB, {
        OW: yB,
        isHookId: TB => BB.blockChangeHasHooks(TB),
        watched: () => function(BB, TB, dB) {
          const VB = [],
            yB = (BB, TB, dB) => {
              VB.push(BB, TB, dB)
            },
            pB = new Set;
          for (let lB = 0; lB < dB.length; lB += zB.g)
            for (let TB = (0, MB.W)(dB[lB]); TB <= (0, MB.W)(dB[lB + 3]); TB++)
              for (let VB = (0, MB.W)(dB[lB + 1]); VB <= (0, MB.W)(dB[lB + 4]); VB++)
                for (let JB = (0, MB.W)(dB[lB + 2]); JB <= (0, MB.W)(dB[lB + 5]); JB++) {
                  const dB = `${TB}|${VB}|${JB}`;
                  pB.has(dB) || (pB.add(dB), BB.blockDataOwner.forEachDataCell(TB, VB, JB, yB))
                }
          return TB.forEachCell(yB), Int32Array.from(VB)
        }(BB, TB, VB)
      }), BB.OL.jBB()
    }
    var UB = dB(36483),
      FB = dB(37927),
      KB = dB(37930),
      rB = dB(900),
      IB = dB(1711);
    var cB = dB(3924);

    function SB(BB) {
      const TB = BB.JL;
      let dB = 0,
        pB = -1,
        lB = -1 / 0,
        JB = null,
        gB = !0;
      const oB = () => {
        if (++dB % 10 !== 0) return;
        const oB = (0, VB.getLastReceivedPacketId)();
        if (oB <= pB) return;
        const [kB, LB, OB] = BB.Km.Dv(BB.rK), DB = ! function(BB) {
          var TB;
          let dB = null === (TB = BB.Km.sdB(BB.rK)) || void 0 === TB ? void 0 : TB.DD;
          if (void 0 === dB) return !1;
          const VB = new Set;
          for (; void 0 !== dB && !VB.has(dB);) {
            var yB;
            VB.add(dB);
            const TB = BB.Km.getState(dB, "smoothToServerPos"),
              pB = Array.isArray(TB) ? null : null === TB || void 0 === TB ? void 0 : TB.serverPosition;
            if (pB) {
              const TB = BB.Km.Dv(dB);
              if (Math.abs(TB[0] - pB[0]) > 10 || Math.abs(TB[1] - pB[1]) > 10 || Math.abs(TB[2] - pB[2]) > 10) return !0
            }
            dB = null === (yB = BB.Km.sdB(dB)) || void 0 === yB ? void 0 : yB.DD
          }
          return !1
        }(BB) && function(BB, TB, dB, VB) {
          const pB = yB.c.UD;
          for (let yB = 0; yB < BB.length; yB++) {
            const lB = BB[yB];
            if (!(0, cB.h)(TB, dB, VB, lB[0] * pB, lB[1] * pB, lB[2] * pB)) return !1
          }
          return !0
        }(TB.VH.tD, kB, LB, OB), uB = null === JB || Math.abs(kB - JB[0]) > 8 || Math.abs(LB - JB[1]) > 8 || Math.abs(OB - JB[2]) > 8, HB = !gB || uB || performance.now() - lB >= 1e4;
        gB = DB, DB && HB && (pB = oB, lB = performance.now(), JB = [kB, LB, OB], (0, VB.sendColyMessage)(YB.dg, {
          ul: oB
        }))
      };
      return BB.on("dL", oB), () => {
        BB.off("dL", oB)
      }
    }
    var PB = dB(35741),
      QB = dB(287),
      RB = dB.n(QB),
      aB = dB(5839),
      ZB = dB(36963),
      XB = dB(36702),
      WB = dB(36683),
      hB = dB(3931),
      CB = dB(37038),
      GB = dB(36832),
      qB = dB(36246),
      xB = dB(36590),
      jB = dB(37939),
      AB = dB(35725),
      bB = dB(35732),
      nB = dB(37943),
      eB = dB(37951),
      BT = dB(3145),
      TT = dB(1407),
      dT = dB(2380),
      VT = dB(2465),
      yT = dB(37200),
      pT = dB(36004),
      lT = dB(4167),
      JT = dB(37983),
      YT = dB(37024),
      gT = dB(3704),
      oT = dB(36491),
      kT = dB(36087),
      LT = dB(37042),
      OT = dB(37958),
      DT = dB(37963),
      uT = dB(36244);
    class HT {
      constructor(BB, TB, dB, VB) {
        this.gameNameWithVariation = BB, this.OL = dB, this.connectionResume = VB, this.stateReplicationHandler = void 0, this.stopChunkReports = () => {}, this.replayResume = null, this.stateReplicationHandler = new DT.d(TB, this.OL)
      }
      setupStateReplicationHandlers() {
        this.stateReplicationHandler.setup(), (0, VB.onGameResetOnce)((() => {
          this.stateReplicationHandler.dispose()
        }))
      }
      doB(BB) {
        this.stateReplicationHandler.dispose(), this.stateReplicationHandler = new DT.d(BB, this.OL), this.stateReplicationHandler.setup()
      }
      clearBlockRules() {
        const BB = this.OL.JL;
        BB.IdB = new Set, BB.PdB = new Set, BB.cdB = new Set, BB.QdB = new Set, BB.SdB = [], BB.RdB = [], BB.HZ = new Set, BB.jd = [], BB.iZ = []
      }
      clearUiRequestsAndQTEs() {
        lT.c.reset(), (0, tB.b)()
      }
      startChunkReports() {
        const BB = function(BB) {
            let TB = null,
              dB = -1 / 0,
              yB = null;
            const pB = () => {
                yB = null;
                const pB = Math.ceil(BB.bM[0]),
                  lB = Math.ceil(BB.bM[1]);
                TB && TB[0] === pB && TB[1] === lB || (TB = [pB, lB], dB = performance.now(), (0, VB.sendColyMessage)(YB.ag, {
                  Pl: pB,
                  Ql: lB
                }))
              },
              lB = () => {
                null === yB && (yB = setTimeout(pB, Math.max(0, dB + 250 - performance.now())))
              };
            return pB(), BB.on("addRemoveDistanceChanged", lB), () => {
              BB.off("addRemoveDistanceChanged", lB), null !== yB && (clearTimeout(yB), yB = null)
            }
          }(this.OL.JL),
          TB = SB(this.OL);
        this.stopChunkReports = () => {
          BB(), TB()
        }
      }
      restartChunkStreaming() {
        (0, xB.m)(this.OL, (0, JB.b)().recentChunkEdits.chunksEditedSince(this.connectionResume.getDroppedAt() - jB.d)), this.startChunkReports()
      }
      setupOnMessageListeners(BB, TB) {
        const dB = this.OL,
          yB = this.gameNameWithVariation;
        BB.Qv(YB.mc, (BB => {
          let {
            Dy: TB,
            Hy: VB,
            Ey: yB,
            vy: pB,
            my: lB,
            iy: JB,
            Ny: YB,
            ty: gB,
            sy: oB
          } = BB;
          if (!dB.Km.TTB(TB, "itemState")) return void(0, XB.m)(dB, TB, [lB, JB, YB], VB, {
            amount: yB,
            attributes: JSON.parse(pB),
            ty: gB,
            size: oB
          });
          const kB = dB.Km.getState(TB, "itemState");
          kB.amount = yB, kB.ty = gB, kB.creationTime = Date.now(), (0, WB.setServerPosition)(dB.Km.getState(TB, "smoothToServerPos"), lB, JB, YB)
        })), BB.Qv(YB._, (BB => {
          (0, UB.b)(dB).setCantPickUp(BB, !0), dB.Km.TTB(BB, "itemState") && (dB.Km.getState(BB, "itemState").ty = !0)
        })), BB.Qv(YB.Nd, (BB => {
          (0, UB.b)(dB).setCantPickUp(BB, !1), dB.Km.TTB(BB, "itemState") && (dB.Km.getState(BB, "itemState").ty = !1)
        })), BB.Qv(YB.Kc, (BB => {
          EB.c.applyNewClientOptions(BB)
        })), BB.Qv(YB.Mc, (BB => {
          let {
            eId: TB,
            settings: VB
          } = BB;
          (0, kT.e)(TB);
          for (const dB in VB)(0, kT.d)(TB, dB, VB[dB]);
          if ("canSee" in VB && dB.Km.TTB(TB, "hidingMeshManager")) {
            const BB = dB.Km.getState(TB, "hidingMeshManager");
            BB.canSee = (0, LT.e)("canSee", VB.canSee), BB._forceUpdate = !0
          }
        })), BB.Qv(YB.Ne, (BB => {
          let {
            cT: TB,
            ST: yB,
            PT: pB,
            QT: lB
          } = BB;
          const JB = [yB, pB, lB];
          dB.Km.setPosition(dB.rK, JB), (0, VB.sendColyMessage)(YB.Cg, {
            Vo: TB,
            yo: hB.e
          }), HB.h.yH("localPlayerTeleported", {
            pos: JB,
            isCorrection: !1
          })
        })), BB.Qv(YB.$c, (BB => {
          let {
            Mp: TB,
            zp: dB,
            wp: VB,
            Up: yB
          } = BB;
          this.stateReplicationHandler.setUpIfQueued(TB);
          const pB = [dB, VB, yB];
          HB.h.yH(`otherPlayerTeleported|${TB}`, {
            pos: pB
          })
        })), BB.Qv(YB.sd, (BB => {
          let {
            bV: TB,
            nV: yB,
            eV: pB,
            Ty: lB,
            Vy: JB,
            yy: gB,
            py: oB,
            Jy: kB,
            ly: LB,
            ky: OB
          } = BB;
          const DB = [yB, pB, lB];
          dB.Km.setPosition(dB.rK, DB);
          const uB = dB.Km.mTB(dB.rK),
            EB = dB.Km.RZ(dB.rK);
          RB().set(EB.kR, 0, 0, 0), RB().set(EB.uR, 0, 0, 0), RB().set(EB.bu, JB, gB, oB), EB.vR(), uB._flying = null !== OB, OB ? (uB.flyAccel.Ly = OB.Ly, uB.flyAccel.Oy = OB.Oy) : uB.flyAccel.reset(), kB && uB.movementType === aB.o.GLIDING && (uB.Yy = kB.Yy, RB().copy(uB.gy, kB.gy)), (0, VB.sendColyMessage)(YB.Cg, {
            Vo: TB,
            yo: hB.e
          }), HB.h.yH("localPlayerTeleported", {
            pos: DB,
            isCorrection: !0
          })
        }));

        function pB() {
          return dB.Km.WTB(dB.rK)
        }
        BB.Qv(YB.hb, (BB => {
          let {
            chatMsgId: TB,
            content: dB,
            chatterEId: VB
          } = BB;
          HB.h.yH("chat", {
            serverChatMsgId: TB,
            content: dB,
            chatterEId: VB
          }, !0)
        })), BB.Qv(YB.fd, (BB => {
          dT.b.onReceiveColyseusPing(BB)
        })), BB.Qv(YB.te, (BB => {
          let {
            key: TB,
            value: dB
          } = BB;
          (0, vB.setCookie)(yB, TB, dB)
        })), BB.Qv(YB.we, (BB => {
          HB.h.yH("setDiscordReportKey", BB)
        })), (0, VB.onGameResetOnce)((() => {
          this.stopChunkReports()
        })), BB.Qv(YB.gc, (TB => {
          const {
            AT: yB,
            bT: pB
          } = TB;
          if ((0, VB.setAdjustment)(pB), this.connectionResume.onInitialInfo(TB.nT, TB.eT), VB.offlineInputReplay.hN(TB.Bd), this.connectionResume.isResuming()) {
            console.log("Resumed the connection as eId", yB);
            try {
              null === TB.Td && (0, JB.b)().client.inventoryPrediction.dropPending(), this.stopChunkReports(), this.clearBlockRules(), EB.c.apply({
                shopInfo: null,
                _shopVersion: IB.b
              });
              const VB = dB.Km.hTB(dB.rK);
              VB.mT && (VB.chestClosed(), HB.h.yH("chestToggleFromServer", !1, !0)), this.clearUiRequestsAndQTEs(), HB.h.yH("initInfoReceived", BB)
            } finally {
              const BB = null === TB.Td ? null : {
                sync: null,
                endSeq: null
              };
              this.replayResume = BB, this.connectionResume.onResumeInitialInfo(TB.Td, (() => {
                BB.endSeq = (0, JB.b)().client.inventoryPrediction.lastActionSeq
              })), null === BB && this.restartChunkStreaming()
            }
          } else console.log("Local client is eId", yB), HB.h.yH("loadingScreenState", "loadingPage:loadingWorld"), dB.yTB = yB, dB.Km.TTB(dB.rK, dB.Km.names.entityName) && dB.Km.jF(dB.rK, dB.Km.names.entityName), (0, JB.b)().setEntityName(dB.yTB, (0, JB.b)().getRawEntityName(dB.rK)), dB.zK[dB.yTB] = {}, dB.Km.XF(dB.rK, dB.Km.names.entityName), HB.h.yH("initInfoReceived", BB), this.startChunkReports(), lB.client.onServerConnectionFinalised()
        })), BB.Qv(YB.ce, (() => {
          this.connectionResume.isResuming() ? this.connectionResume.onResumed((() => {
            const BB = this.replayResume;
            if (this.replayResume = null, !BB) return;
            this.restartChunkStreaming();
            const {
              inventoryPrediction: TB
            } = (0, JB.b)().client, {
              sync: yB
            } = BB, pB = new Set(VB.offlineInputReplay.takeDroppedActions());
            if (yB) {
              var lB;
              const VB = null !== (lB = BB.endSeq) && void 0 !== lB ? lB : TB.lastActionSeq;
              TB.forget((BB => BB > yB.sT && BB <= VB || pB.has(BB))), iB(dB, TB, HB.h, yB.sT, yB.load)
            } else TB.dropPending(), TB.askForSnapshot()
          })) : console.warn("ResumeComplete arrived without a resume")
        })), BB.Qv(YB.Re, (BB => {
          HB.h.yH("TopRightHelper", BB, !0)
        })), BB.Qv(YB.wd, (BB => {
          let {
            type: TB,
            location1: dB,
            location2: VB,
            location3: yB,
            score: pB
          } = BB;
          (0, VT.t)({
            type: TB,
            location1: dB,
            location2: VB,
            location3: yB,
            score: pB
          })
        })), BB.Qv(YB.be, (BB => {
          let {
            type: TB,
            resourceType: dB,
            amount: VB,
            category: yB,
            itemName: pB
          } = BB;
          (0, VT.u)({
            type: TB,
            resourceType: dB,
            amount: VB,
            category: yB,
            itemName: pB
          })
        })), BB.Qv(YB.L, (BB => {
          dB.JL.IdB.add(BB), dB.JL.PdB.delete(BB)
        })), BB.Qv(YB.Q, (BB => {
          dB.JL.PdB.add(BB), dB.JL.IdB.delete(BB)
        })), BB.Qv(YB.Rd, (BB => {
          dB.JL.PdB.delete(BB), dB.JL.IdB.delete(BB)
        })), BB.Qv(YB.P, (BB => {
          dB.JL.cdB.add(BB), dB.JL.QdB.delete(BB)
        })), BB.Qv(YB.W, (BB => {
          dB.JL.QdB.add(BB), dB.JL.cdB.delete(BB)
        })), BB.Qv(YB.Ud, (BB => {
          dB.JL.QdB.delete(BB), dB.JL.cdB.delete(BB)
        })), BB.Qv(YB.O, (BB => {
          (0, oB.nb)(BB, dB.JL.RdB), (0, oB.nb)(BB, dB.JL.SdB), dB.JL.SdB.push(BB)
        })), BB.Qv(YB.S, (BB => {
          (0, oB.nb)(BB, dB.JL.SdB), (0, oB.nb)(BB, dB.JL.RdB), dB.JL.RdB.push(BB)
        })), BB.Qv(YB.Sd, (BB => {
          (0, oB.nb)(BB, dB.JL.SdB), (0, oB.nb)(BB, dB.JL.RdB)
        })), BB.Qv(YB.df, (BB => {
          let {
            Ld: TB,
            Od: VB
          } = BB;
          VB ? dB.JL.HZ.delete(TB) : dB.JL.HZ.add(TB)
        })), BB.Qv(YB.bf, (BB => {
          let {
            jd: TB,
            Ad: VB
          } = BB;
          lB.updateWalkThroughRect(dB.rK, TB, VB)
        })), (0, VB.onGameResetOnce)((() => {
          this.clearBlockRules()
        })), BB.Qv(YB.Je, (BB => {
          (0, NB.d)(BB)
        })), BB.Qv(YB.Yb, (BB => {
          fB.e.applyServerUpdate(BB)
        })), BB.Qv(YB.bb, (BB => {
          lB.applyServerBlocks((() => {
            ! function(BB, TB) {
              for (const {
                  BB: dB,
                  TB: VB
                }
                of TB) {
                const TB = sB.d[VB];
                if (TB) {
                  const {
                    compX: VB,
                    compY: yB,
                    compZ: pB,
                    mainMultiblock: lB
                  } = TB;
                  BB.Cw(dB[0] - VB, dB[1] - yB, dB[2] - pB, lB)
                }
              }
              for (const {
                  BB: dB,
                  TB: VB,
                  dB: yB
                }
                of TB) BB.setBlockNoMulti(dB[0], dB[1], dB[2], VB, !0), BB.blockDataOwner.setBlockData(dB[0], dB[1], dB[2], null === yB ? void 0 : JSON.parse(yB)), BB.blockAdded(dB[0], dB[1], dB[2], VB)
            }(lB, BB)
          })), HB.h.yH("changeBlockFail", BB), lB.client.triggerGameCallback("onChangeBlockFail", BB), HB.h.yH("EditBoard", {
            pos: null
          }), HB.h.yH("EditCodeBlock", {
            pos: null,
            canChangePos: null
          })
        })), BB.Qv(YB.ed, (BB => {
          let {
            pickUpItems: TB,
            pickUpAckSeq: dB
          } = BB;
          for (const {
              name: VB,
              amount: yB,
              attributes: lB
            }
            of TB) pB().pickUpItem({
            name: VB,
            amount: yB,
            typeObj: XB.A[VB],
            attributes: lB
          });
          (0, JB.b)().client.inventoryPrediction.serverChangeApplied(dB)
        })), BB.Qv(YB.ye, (BB => {
          let {
            index: TB,
            name: VB,
            amount: yB,
            attributes: pB,
            setSlotAckSeq: lB
          } = BB;
          const YB = dB.Km.hTB(dB.rK);
          (TB < YB.playerInventory.numSlots || YB.mT || YB.inCreative) && YB.setItemSlot(TB, VB, yB, pB), (0, JB.b)().client.inventoryPrediction.serverChangeApplied(lB)
        })), BB.Qv(YB.Ie, (BB => {
          let {
            ET: TB,
            fT: VB,
            sT: yB
          } = BB;
          const {
            inventoryPrediction: pB
          } = (0, JB.b)().client, lB = () => {
            dB.Km.hTB(dB.rK).loadFromString(TB)
          };
          this.replayResume && (this.replayResume.sync = {
            sT: yB,
            load: lB
          }), iB(dB, pB, HB.h, yB, lB, VB)
        })), BB.Qv(YB.lc, (BB => {
          (0, JB.b)().client.inventoryPrediction.acknowledge(BB)
        })), BB.Qv(YB.B, (BB => {
          let {
            pd: TB,
            ld: dB,
            Jd: VB,
            Yd: yB
          } = BB;
          (0, JB.b)().client.itemDropPrediction.onActionItemDrops(TB, dB, VB, yB)
        })), BB.Qv(YB.rb, (BB => {
          pB().clearInventory(), (0, JB.b)().client.inventoryPrediction.serverChangeApplied(BB)
        })), BB.Qv(YB.wc, (BB => {
          let {
            leaveEventType: TB,
            category: dB,
            subCategory: VB,
            value: yB
          } = BB;
          (0, VT.C)({
            leaveEventType: TB,
            category: dB,
            subCategory: VB,
            value: yB
          })
        })), BB.Qv(YB.Eb, (BB => {
          let {
            cat1: TB,
            cat2: dB,
            cat3: VB,
            value: yB
          } = BB;
          (0, VT.p)({
            cat1: TB,
            cat2: dB,
            cat3: VB,
            value: yB
          })
        }));
        const lB = (0, JB.b)();
        BB.Qv(YB.yb, (BB => {
          lB.applyServerBlocks((() => {
            wB(lB, fB.e, BB)
          }))
        })), BB.Qv(YB.ze, (BB => {
          HB.h.yH("setSelectedInventorySlotI", BB, !0)
        })), BB.Qv(YB.tc, (BB => {
          let {
            category: TB,
            timeframe: dB,
            data: VB
          } = BB;
          HB.h.yH("leaderboardResponse", {
            category: TB,
            timeframe: dB,
            data: VB
          })
        })), BB.Qv(YB.I, (BB => {
          let {
            HB: TB,
            EB: dB
          } = BB;
          this.stateReplicationHandler.setUpIfQueued(TB), TB = (0, PB.e)(TB), (0, JB.b)().client.gameRecorder.recordBulletShot(TB, dB), HB.h.yH(`bulletShot|${TB}`, {
            bulletDirections: dB
          })
        })), BB.Qv(YB.ac, (BB => {
          let {
            uT: TB,
            HT: dB
          } = BB;
          HB.h.yH("damagedByOtherPlayer", {
            uT: TB,
            direction: dB
          }, !0)
        })), BB.Qv(YB.pd, (BB => {
          HB.h.yH("playerKilled", BB, !0), (0, JB.b)().client.gameRecorder.recordPlayerKilled(BB.deadEId, BB.killerEId, BB.withItem, BB.killstreak)
        })), BB.Qv(YB.Fb, (BB => {
          HB.h.yH("customKillfeed", BB, !0), (0, JB.b)().client.gameRecorder.recordCustomKillfeed(BB.killer, BB.victim, BB.withItem)
        })), BB.Qv(YB.Ad, (BB => {
          let {
            xy: TB,
            jy: VB
          } = BB;
          this.stateReplicationHandler.setUpIfQueued(TB);
          const yB = dB.Km.gdB(TB);
          null !== yB && void 0 !== yB && yB.isGun() && yB.reload(Date.now(), VB)
        })), BB.Qv(YB.Fe, (() => {
          HB.h.yH("showShopTutorial", null, !0)
        })), BB.Qv(YB.ud, (BB => {
          HB.h.yH("progressBarUpdate", BB, !0)
        })), BB.Qv(YB.kc, (BB => {
          HB.h.yH("middleScreenBarInitiate", {
            duration: BB.Zp,
            Xp: BB.Xp,
            horizBarRemOffset: BB.Wp
          }, !0)
        })), BB.Qv(YB.Id, (() => {
          HB.h.yH("middleScreenBarRemove", !0)
        })), BB.Qv(YB.ge, (BB => {
          let {
            jT: TB,
            YB: VB
          } = BB;
          const yB = VB ? (0, YT.f)(dB, VB) : void 0;
          HB.h.yH("sendHitmarker", {
            jT: TB,
            screenPos: yB
          }, !0)
        })), BB.Qv(YB.ue, (BB => {
          let {
            id: TB,
            position: dB,
            style: VB,
            cp: yB,
            Pp: pB
          } = BB;
          HB.h.yH("setDirectionArrow", {
            id: TB,
            position: dB,
            style: VB,
            text: (0, YB.q)(yB),
            Pp: pB
          }, !0)
        })), BB.Qv(YB.nb, (BB => {
          let {
            id: TB
          } = BB;
          HB.h.yH("clearDirectionArrow", {
            id: TB
          }, !0)
        })), BB.Qv(YB.C, (BB => {
          let {
            My: TB,
            zy: VB,
            animationScript: yB,
            wy: pB,
            Uy: lB,
            Fy: YB,
            Ky: gB
          } = BB;
          TB = (0, PB.e)(TB);
          const oB = null === yB && null !== YB ? (0, FB.f)(YB, gB) : yB;
          (0, JB.b)().client.gameRecorder.recordAnimateEntity(TB, VB, oB, pB, lB), (0, UB.b)(dB).animations.animateEntity(TB, VB, yB, pB, lB, YB, gB), null !== yB || TB === dB.rK && VB === oT.f.Emote && (0, JB.b)().client.cameraController.endTemporaryThirdPerson()
        })), BB.Qv(YB.Xe, (BB => {
          let {
            VB: TB,
            yB: dB
          } = BB;
          if (lB.zC(TB[0], TB[1], TB[2])) {
            const BB = (0, JB.b)().XE(TB[0], TB[1], TB[2]);
            (0, JB.b)().updateMailboxContents(TB[0], TB[1], TB[2], BB, dB)
          }
        })), BB.Qv(YB.jb, (BB => {
          let {
            Pd: TB,
            Qd: VB,
            Rd: yB,
            ad: pB,
            Zd: lB,
            Xd: YB,
            Wd: gB,
            hd: oB
          } = BB;
          const kB = dB.Km.hTB(dB.rK);
          if (YB) {
            const {
              vT: BB,
              sT: TB
            } = oB;
            return (0, JB.b)().client.inventoryPrediction.JBB(TB, (() => {
              kB.chestRefreshed(VB, yB, pB, gB, BB)
            })) && HB.h.yH("chestToggleFromServer", !1, !0), void HB.h.yH("chestRefreshedFromServer")
          }(TB || kB.mT) && (TB ? (kB.chestOpened(VB, yB, pB, lB, gB), null !== lB && (0, JB.b)().client.ironChestPasskeyCache.onChestOpened(pB, lB)) : kB.chestClosed(), HB.h.yH("chestToggleFromServer", TB, !0))
        })), BB.Qv(YB.Jb, (BB => {
          let {
            craftingRecipeItemName: TB,
            recipesForItem: VB
          } = BB;
          TB ? lB.craftingManager.editRecipesForPlayer(dB.rK, TB, VB) : lB.craftingManager.resetAllPlayerRecipes(dB.rK), HB.h.yH("craftingRecipesEdited", {
            itemName: TB,
            recipesForItem: VB
          })
        })), BB.Qv(YB.Ae, (BB => {
          let {
            vehicleEId: TB,
            overrides: dB
          } = BB;
          (0, JB.b)().applyRiddenVehicleSettingOverrides(TB, dB)
        })), BB.Qv(YB.$e, (BB => {
          let {
            fd: TB,
            sd: VB,
            Md: yB
          } = BB;
          const pB = dB.Km.mTB(dB.rK).physicsState.type === aB.q.SLEEPING && TB === aB.q.DEFAULT;
          (0, JB.b)().updatePositionAndPhysics(dB.rK, {
            type: TB,
            tier: VB
          }, !0, yB), pB && (0, JB.b)().updateHeldVehicleStatus()
        })), BB.Qv(YB.db, (BB => {
          let {
            Dd: TB,
            ud: VB
          } = BB;
          dB.Km.ZTB(dB.rK).setPose(TB, VB)
        })), BB.Qv(YB.de, (BB => {
          (0, OT.b)(BB)
        })), BB.Qv(YB.md, (BB => {
          for (const TB of BB)(0, CB.D)(TB);
          HB.h.yH("playerCosmeticsUpdated", BB, !0)
        })), BB.Qv(YB.F, (BB => {
          for (const TB of BB)(0, pT.h)(dB, TB)
        })), BB.Qv(YB.Bc, (BB => {
          let {
            pB: TB,
            lB: VB,
            gB: yB,
            oB: pB,
            kB: JB,
            LB: YB,
            OB: gB
          } = BB;
          this.stateReplicationHandler.setUpIfQueued(TB), TB = (0, PB.e)(TB);
          const oB = dB.Km.ddB(TB);
          if (oB && (oB.lastHurtTime = performance.now()), (0, ZB.playRigHurt)(dB, TB, YB), HB.h.yH("lifeformHurt", {
              eId: TB,
              OB: gB
            }), VB) {
            const BB = (0, YT.f)(dB, VB.YB);
            HB.h.yH("yourAttackHit", {
              jT: pB,
              screenPos: BB,
              hitSelf: TB === dB.rK
            })
          }
          TB === dB.rK && (lB.shakePlayerCamera(TB, JB / 40, 200), HB.h.yH("closeShopOnDamaged", null), HB.h.yH("damagedByOtherPlayer", {
            uT: null,
            direction: YB,
            kB: JB
          }, !0));
          const kB = dB.Km.Dv(TB);
          if (kB && (yB || pB)) {
            const BB = [kB[0], kB[1] + 1, kB[2]];
            yB && (0, GB.m)(dB, GB.A, BB, 15), pB && (0, GB.m)(dB, GB.q, BB, 10)
          }
        })), BB.Qv(YB.Ac, (BB => {
          let {
            Qp: TB,
            Rp: VB,
            ap: yB
          } = BB;
          (0, UB.b)(dB).setHealthFrac((0, PB.e)(TB), yB), HB.h.yH("lifeformHealthChanged", {
            eId: (0, PB.e)(TB),
            Rp: VB,
            ap: yB
          })
        })), BB.Qv(YB.G, (BB => {
          let {
            MT: TB,
            zT: VB
          } = BB;
          (0, JB.b)().playerAttacked(dB.rK, TB, VB)
        })), BB.Qv(YB.pc, (BB => {
          (0, JB.b)().client.leaveGameUnwanted({
            reason: BB,
            requiresRefresh: !1,
            canReconnect: !1,
            automaticallyReconnect: !1
          }), (0, TT.navigatePreserveSearch)("/")
        })), BB.Qv(YB.Hd, (BB => {
          let {
            GT: TB,
            qT: dB,
            xT: VB
          } = BB;
          pB().removeItemName(TB, dB), (0, JB.b)().client.inventoryPrediction.serverChangeApplied(VB)
        })), BB.Qv(YB.oe, (BB => {
          const {
            bl: TB,
            NdB: VB
          } = (0, qB.f)([BB[0], BB[1], BB[2]]);
          uT.d.setLookDirection(dB, TB, VB), (0, xB.u)(TB, VB);
          const yB = dB.Km.ZTB(dB.rK);
          yB && (yB.heading = TB)
        })), BB.Qv(YB.qe, (BB => {
          lB.client.cameraController.setCameraZoom(BB)
        })), BB.Qv(YB.Ee, (BB => {
          let {
            vB: TB,
            mB: VB
          } = BB;
          lB.shakePlayerCamera(dB.rK, TB, VB)
        })), BB.Qv(YB.Cb, (BB => {
          (0, BT.onCosmeticPackGranted)(BB)
        })), BB.Qv(YB.ie, (BB => {
          HB.h.yH("serverUpdating", Date.now() + BB, !0)
        })), BB.Qv(YB.Jc, KB.e), BB.Qv(YB.Vc, (BB => {
          let {
            id: TB,
            bd: dB
          } = BB;
          const {
            type: yB,
            params: pB
          } = (0, JT.i)(dB), lB = {
            ...pB
          };
          for (const VB of JT.e) VB in lB && lB[VB] && (lB[VB] = (0, YB.q)(lB[VB]));
          lT.c.queueQTE(TB, yB, lB).getResult().then((BB => {
            "boolean" === typeof BB && (0, VB.sendColyMessage)(YB.$h, {
              qteId: TB,
              qteResponse: BB
            })
          }))
        })), BB.Qv(YB.Kd, (BB => {
          lT.c.cancelQTE(BB)
        })), (0, VB.onGameResetOnce)((() => {
          lT.c.reset()
        })), BB.Qv(YB.Zc, (BB => {
          let {
            id: TB,
            clientParameters: dB
          } = BB;
          (0, tB.c)(TB, dB)
        })), BB.Qv(YB.Ld, (BB => {
          (0, tB.g)(BB)
        })), BB.Qv(YB.We, (BB => {
          let {
            text: TB,
            id: dB
          } = BB;
          (0, tB.i)(dB, TB, (BB => {
            (0, VB.sendColyMessage)(YB.tj, {
              vo: dB,
              fo: BB,
              Mo: 5
            })
          }))
        })), BB.Qv(YB.Lb, (BB => {
          let {
            aT: TB,
            ZT: dB,
            XT: VB,
            WT: yB,
            hT: pB,
            CT: lB
          } = BB;
          TB = (0, PB.e)(TB), (0, JB.b)().client.updateEffect(TB, dB, {
            displayName: VB,
            icon: yB,
            duration: pB,
            level: lB
          })
        })), BB.Qv(YB.Cd, (BB => {
          let {
            aT: TB,
            ZT: dB
          } = BB;
          TB = (0, PB.e)(TB), (0, JB.b)().client.removeEffect(TB, dB)
        })), BB.Qv(YB.oc, (BB => {
          dB.Km.ZTB(dB.rK).jumpMultiplier.setMultiplierType("jumpEffectAmount", BB)
        })), BB.Qv(YB.Se, (BB => {
          HB.h.yH("ttbEffectMultiplier", BB)
        })), (0, VB.onGameResetOnce)((() => {
          dB.Km.ZTB(dB.rK).jumpMultiplier.setMultiplierType("jumpEffectAmount", 1)
        })), BB.Qv(YB.Qc, (BB => {
          (0, GB.p)(dB, (0, oB.y)(BB))
        })), BB.Qv(YB.Sc, (BB => {
          gT.f[BB.Vl] ? (0, GB.p)(dB, {
            ...gT.f[BB.Vl],
            pos1: BB.pos1,
            pos2: BB.pos2
          }) : console.error(`Unknown preset id: ${BB.Vl}`)
        })), BB.Qv(YB.id, (BB => {
          var TB, dB;
          let {
            hp: VB,
            Cp: yB,
            Gp: pB,
            qp: lB
          } = BB, {
            jp: YB,
            Ap: gB
          } = null !== lB && void 0 !== lB ? lB : {};
          const {
            xp: oB
          } = null !== lB && void 0 !== lB ? lB : {};
          YB = null !== (TB = YB) && void 0 !== TB ? TB : void 0, gB = null !== (dB = gB) && void 0 !== dB ? dB : void 0, "string" === typeof oB && this.stateReplicationHandler.setUpIfQueued(oB), (0, JB.b)().client.gameRecorder.recordPlaySound(VB, yB, pB, lB), AB.d.play((0, bB.c)(VB), yB, oB, YB, gB).rate(pB)
        })), BB.Qv(YB.le, (BB => {
          let {
            pos: TB,
            data: dB
          } = BB;
          lB.blockDataOwner.setBlockData(TB[0], TB[1], TB[2], dB), lB.blockAdded(TB[0], TB[1], TB[2], lB.XE(TB[0], TB[1], TB[2]))
        })), BB.Qv(YB.bd, (BB => {
          let {
            info: TB
          } = BB;
          HB.h.yH("overShopInfo", TB, !0)
        })), BB.Qv(YB.Ub, (BB => {
          let {
            od: VB,
            kd: yB
          } = BB;
          TB.openShop(dB.rK, VB, yB)
        })), BB.Qv(YB.D, (BB => {
          dB.Km.RZ(dB.rK).applyImpulse(BB)
        })), BB.Qv(YB.Be, (BB => {
          const TB = dB.Km.RZ(dB.rK);
          RB().set(TB.kR, 0, 0, 0), RB().set(TB.uR, 0, 0, 0), RB().copy(TB.bu, BB), TB.vR()
        })), BB.Qv(YB.Cc, (BB => {
          console.error(`[logErrorToConsole]: ${BB}`)
        })), BB.Qv(YB.Sb, (BB => {
          let {
            Hd: TB,
            Nd: dB,
            td: VB
          } = BB;
          HB.h.yH("flyingMiddleMessage", {
            content: (0, YB.q)(TB),
            Nd: dB,
            td: VB
          }, !0)
        })), BB.Qv(YB.hf, (BB => {
          const TB = BB === rB.f ? null : {
            message: `Currently loaded as variation: ${BB}`,
            type: "Warning"
          };
          HB.h.yH("showPermanentBottomMessage", TB, !0)
        })), BB.Qv(YB.Wb, (BB => {
          let {
            messageType: TB,
            data: dB
          } = BB;
          (0, nB.h)(TB) ? (0, nB.e)(TB, dB) : ("freeCamPerms" === TB && lB.client.freeCameraController.setPerms(dB.key, dB.value), lB.client.triggerGameCallback("onReceivedMessageFromServer", TB, dB))
        })), BB.Qv(YB.gb, (() => {
          const BB = dB.Km.gdB(dB.rK);
          null !== BB && void 0 !== BB && BB.isChargeable() && BB.finishCharging(!1, Date.now())
        })), BB.Qv(YB.Ed, (BB => {
          let {
            RT: TB
          } = BB;
          lB.craftingManager.removeRecipes(dB.rK, TB), HB.h.yH("craftingRecipesEdited", {
            itemName: TB,
            recipesForItem: []
          })
        })), BB.Qv(YB.Ze, (BB => {
          for (const TB in BB) {
            const dB = BB[TB];
            for (const BB in dB) lB.client.meshCreator.handleParticleSystemUpdate(TB, BB, dB[BB])
          }
        })), (0, VB.onGameResetOnce)((() => {
          (0, yT.setFloatingYValue)(dB.Km.getState(dB.rK, "physics"), dB.Km.mG(dB.rK), null)
        })), BB.Qv(YB.Ob, (BB => {
          let {
            Gd: TB,
            qd: VB,
            xd: yB
          } = BB;
          const pB = (0, PB.e)(TB);
          if (pB === dB.rK) {
            const BB = dB.Km.mG(dB.rK).position;
            yB ??= Math.floor(BB[1]) - 1, (0, yT.setFloatingYValue)(dB.Km.getState(dB.rK, "physics"), dB.Km.mG(dB.rK), VB ? yB : null)
          }(0, UB.b)(dB).setFloating(pB, VB, yB);
          const lB = dB.Km.getState(pB, "floating");
          lB && (lB.isFloating = VB, lB.xd = VB ? yB : null)
        })), BB.Qv(YB.ub, eB.i)
      }
    }
    window.addEventListener("beforeunload", (() => {}));
    var ET = dB(37990),
      vT = dB(37998),
      mT = dB(965),
      iT = dB(2702);
    class NT {
      constructor(BB, TB, dB, VB) {
        this.msgHandler = dB, this.listener = VB, this.session = void 0, this.attachedRoom = null, this.detachRoomListeners = null, this.suspended = !1, this.droppedAt = 0, this.session = new ET.d({
          reconnect: BB,
          isLive: () => VB.isLive(),
          onReconnected: BB => {
            this.resumeOnRoom(BB)
          },
          onGaveUp: (BB, TB) => {
            VB.onGaveUp(BB, TB)
          },
          freeze: TB,
          releaseSeat: TB => {
            BB(TB).then((BB => {
              BB.lD(!0)
            }), (BB => {
              console.warn("Couldn't release the held seat of a game left while reconnecting", BB)
            }))
          }
        })
      }
      onInitialInfo(BB, TB) {
        this.session.onInitialInfo(BB, TB)
      }
      isResuming() {
        return this.session.isResuming()
      }
      getDroppedAt() {
        return this.droppedAt
      }
      onResumeInitialInfo(BB, TB) {
        if (this.session.onResuming(), null === BB) {
          try {
            (0, JB.b)().client.itemDropPrediction.reset()
          } catch (dB) {
            console.error("Error dropping the item drop predictions on resuming", dB)
          }
          return VB.offlineInputReplay.discard(), void this.setSuspended(!1)
        }(0, JB.b)().client.itemDropPrediction.onResumeReplayOffered(), VB.offlineInputReplay.replayFrom(BB.Vd, TB)
      }
      onResumed(BB) {
        this.setSuspended(!1), (0, VB.resendBeacons)();
        try {
          BB()
        } catch (TB) {
          console.error("Error completing the resume", TB)
        } finally {
          this.session.onResumed()
        }
      }
      attachRoom(BB) {
        const TB = (0, mT.c)((() => BB.connection.isOpen));
        BB.Av(TB);
        const dB = new vT.c((() => {
          this.session.canHoldSeat() && this.listener.isLive() && (console.warn("The game server went silent, reconnecting"), this.onConnectionDropped(BB, "silent"), BB.lD(!1))
        }));
        BB.onStateChange((() => {
          dB.heard()
        }));
        const VB = TB => {
          TB.persisted || BB.lD(!0)
        };
        window.addEventListener("pagehide", VB), BB.Av(((TB, dB) => {
          if (BB === this.attachedRoom && this.listener.isLive()) return (0, yB.g)(TB) && this.session.canHoldSeat() ? (console.warn(`Connection to the game server dropped with code ${TB}, reconnecting`), this.listener.onDropped(TB, dB), void this.onConnectionDropped(BB, String(TB))) : void this.listener.onRoomLeft(TB, dB)
        })), this.attachedRoom = BB, this.detachRoomListeners = () => {
          TB(), dB.dispose(), window.removeEventListener("pagehide", VB)
        }
      }
      dispose() {
        this.detachRoom(), this.session.lD(), this.setSuspended(!1)
      }
      setSuspended(BB) {
        BB !== this.suspended && (this.suspended = BB, (0, VB.setConnectionSuspended)(BB), (0, JB.b)().client.itemDropPrediction.setSuspended(BB))
      }
      detachRoom() {
        var BB;
        null === (BB = this.detachRoomListeners) || void 0 === BB || BB.call(this), this.detachRoomListeners = null, this.attachedRoom = null
      }
      onConnectionDropped(BB, TB) {
        (0, iT.i)("disconnect", "Left room", TB), this.isResuming() || (this.droppedAt = Date.now()), this.detachRoom(), VB.offlineInputReplay.onConnectionLost(), this.setSuspended(!0), this.session.onConnectionLost(BB.reconnectionToken)
      }
      resumeOnRoom(BB) {
        if (!this.listener.isLive()) return console.warn("Left the game while reconnecting, leaving the resumed room"), BB.lD(!0), void this.dispose();
        console.log("Reconnected to the game server, waiting for the game to resume"), (0, OT.l)(), VB.offlineInputReplay.onConnectionReplaced(), this.msgHandler.doB(BB), this.listener.onReconnected(BB), this.attachRoom(BB)
      }
    }
    var tT = dB(2951),
      fT = dB(2956),
      sT = dB(1209),
      MT = dB(4081),
      zT = dB(2614),
      wT = dB(955),
      UT = dB(36610),
      FT = dB(38002),
      KT = dB(38010),
      rT = dB(3138),
      IT = dB(38015);

    function cT(BB) {
      var TB, dB;
      if ("object" !== typeof BB || null === BB) return {
        errType: typeof BB
      };
      const VB = BB;
      return {
        errType: null !== (TB = null === (dB = BB.constructor) || void 0 === dB ? void 0 : dB.name) && void 0 !== TB ? TB : "",
        errName: "string" === typeof VB.name ? VB.name : "",
        eventType: "string" === typeof VB.type ? VB.type : "",
        errStack: "string" === typeof VB.stack ? VB.stack.split("\n").slice(1).join(" | ") : ""
      }
    }

    function ST(BB) {
      if ("undefined" !== typeof ProgressEvent && BB instanceof ProgressEvent) return !0;
      if (!(BB instanceof Error)) return !1;
      const TB = BB.code;
      return "ServerError" === BB.name && void 0 === TB || "AbortError" === BB.name || "seat reservation expired." === BB.message || "early_leave" === BB.message
    }(0, DB.k)((BB => {
      (0, iT.i)("wasm_net", BB)
    }));
    let PT = !0;

    function QT() {
      PT = !1
    }
    class RT {
      constructor(BB) {
        this.gameNameWithVariation = void 0, this.lobbyName = void 0, this.colyClient = void 0, this.userContext = void 0, this.joinedAt = null, this.checkSendPath = () => {}, this.OL = void 0, this.connectionResume = void 0, this.incomingMsgInitialisor = void 0, this.gameNameWithVariation = BB.gameNameWithVariation, this.lobbyName = BB.lobbyName, this.colyClient = BB.colyClient, this.userContext = BB.userContext
      }
      async connectToServer(BB, TB, dB) {
        EB.c.reset(), BB.zK = {
          [BB.rK]: {}
        }, BB.yTB = void 0, (0, OT.l)(), (0, JB.b)().removeAllEntityNames(), (0, JB.b)().setEntityName(BB.rK, this.userContext.getPlayerName()), (0, sT.r)({
          lobbyName: this.lobbyName
        }), console.log("Waiting for clientConnection passed promise to resolve"), console.log("joining server with game", this.gameNameWithVariation, "lobbyName", this.lobbyName);
        const pB = performance.now(),
          lB = (0, KT.g)(this.userContext, (() => {
            const {
              roomName: BB,
              joinOptions: VB
            } = (0, mB.f)(this.userContext, this.gameNameWithVariation, this.lobbyName, TB, (BB => zT.b.isUsingCustomGameTexturePack(BB)));
            return (0, FT.g)((() => this.colyClient.joinOrCreate(BB, VB)), dB)
          }));
        return HB.h.yH("loadingScreenState", "loadingPage:joiningLobby"), await lB.then((TB => {
          this.joinedAt = performance.now(), this.OL = BB;
          const dB = new uB(TB);
          this.connectionResume = new NT((BB => this.colyClient.reconnect(BB)), (TB => {
            BB.XM(TB)
          }), dB, {
            isLive: () => (0, JB.b)().client.getMsgHandler() === dB,
            onDropped: (BB, TB) => {
              (0, fT.h)(BB) || this.logUnrecognisedConnectionLoss(BB, void 0, {
                site: "drop",
                closeReason: null !== TB && void 0 !== TB ? TB : "",
                sinceJoined: this.sinceJoined()
              })
            },
            onRoomLeft: (BB, TB) => {
              this.onRoomLeft(BB, TB)
            },
            onReconnected: BB => {
              this.incomingMsgInitialisor.doB(BB), this.checkSendPath = (0, UT.i)(dB, BB, DB.m)
            },
            onGaveUp: (BB, TB) => {
              this.onResumeGaveUp(BB, TB)
            }
          }), this.connectionResume.attachRoom(TB), (0, VB.onGameResetOnce)((() => {
            this.connectionResume.dispose()
          }));
          const yB = dB.send,
            pB = dB.Qv,
            lB = dB.hdB.send,
            YB = dB.hdB.Qv,
            gB = dB.BoB;
          this.checkSendPath = (0, UT.i)(dB, TB, DB.m);
          const oB = setInterval((() => {
            yB === dB.send && pB === dB.Qv && lB === dB.hdB.send && YB === dB.hdB.Qv && gB === dB.BoB || QT(), this.checkSendPath()
          }), 1e4);
          return (0, VB.onGameResetOnce)((() => {
            clearInterval(oB)
          })), {
            success: !0,
            successDetails: dB
          }
        })).catch((TB => {
          if (dB.aborted && TB === (0, rT.c)(dB)) return {
            success: !1,
            failDetails: {
              reason: "Left the game while it loaded",
              requiresRefresh: !1,
              canReconnect: !1
            }
          };
          if (TB instanceof IT.i) return console.warn("Seat request timed out", this.lobbyName, this.gameNameWithVariation), {
            success: !1,
            failDetails: {
              reason: TB.message,
              requiresRefresh: !1,
              canReconnect: !1,
              gameServerUnreachable: "timedOut"
            }
          };
          BB.Mu(`Failed to connect to bloxd room, check your internet connection. lobbyName: ${this.lobbyName}, gameNameWithVariation: ${this.gameNameWithVariation} code: ${TB.code}\n`, TB);
          const VB = TB.code;
          return VB === yB.b.serverUpdating.code ? (this.goToUpdateWaiting(), {
            success: !1,
            failDetails: {
              reason: yB.b.serverUpdating.text,
              requiresRefresh: !1,
              canReconnect: !0,
              goesToUpdateWaiting: !0
            }
          }) : {
            success: !1,
            failDetails: {
              ...this.onConnectionToServerLost(VB, TB.message, {
                site: "join",
                sinceJoinStart: (0, fT.d)(performance.now() - pB),
                ...cT(TB)
              }, ST(TB)),
              rematch: (0, FT.d)(TB)
            }
          }
        }))
      }
      setupServerListeners(BB, TB, dB) {
        HB.h.yH("loadingScreenState", "loadingPage:loadingPlayerInfo"), this.incomingMsgInitialisor = new HT(this.gameNameWithVariation, TB.hdB, BB, this.connectionResume), this.incomingMsgInitialisor.setupStateReplicationHandlers();
        const yB = TB.JoB();
        this.incomingMsgInitialisor.setupOnMessageListeners(yB, dB), (0, VB.onConnectionToServerReady)(yB, TB), yB.finishRegistration()
      }
      dispose() {
        this.connectionResume.dispose()
      }
      onResumeGaveUp(BB, TB) {
        (0, wT.wu)(new Error("Reconnect failed"), {
          ...(0, tT.l)(TB),
          game: this.gameNameWithVariation
        }), (0, iT.i)("disconnect", "Reconnect failed", TB.reason), (0, JB.b)().client.leaveGameUnwanted({
          reason: {
            translationKey: "general:lostConnection"
          },
          canReconnect: !BB,
          canPlayAgain: BB,
          requiresRefresh: !1,
          automaticallyReconnect: !1
        }), (0, TT.navigatePreserveSearch)("/")
      }
      sinceJoined() {
        return null === this.joinedAt ? "" : (0, fT.d)(performance.now() - this.joinedAt)
      }
      onRoomLeft(BB, TB) {
        var dB;
        if (BB === yB.b.gameOrPluginKick.code) return;
        if (console.log(`Left room with code ${BB}`), BB === yB.b.serverUpdating.code) return (0, iT.i)("disconnect", "Left room", "serverUpdating"), (0, JB.b)().client.leaveGame(this.getUpdateWaitingUrl()), void this.goToUpdateWaiting();
        this.OL.Mu(`Kicked from server with code ${BB}`, new Error);
        const VB = Object.keys(yB.b).find((TB => yB.b[TB].code === BB));
        (0, iT.i)("disconnect", "Left room", null !== VB && void 0 !== VB ? VB : String(BB));
        const pB = this.onConnectionToServerLost(BB, void 0, {
          site: "lD",
          closeReason: null !== TB && void 0 !== TB ? TB : "",
          sinceJoined: this.sinceJoined()
        });
        (0, JB.b)().client.leaveGameUnwanted({
          reason: `You have disconnected from the server.\n${pB.reason}`,
          canReconnect: pB.canReconnect,
          requiresRefresh: pB.requiresRefresh,
          automaticallyReconnect: null !== (dB = pB.automaticallyReconnect) && void 0 !== dB && dB
        }), (0, TT.navigatePreserveSearch)("/")
      }
      getUpdateWaitingUrl() {
        return (0, MT.z)(this.gameNameWithVariation, this.lobbyName)
      }
      goToUpdateWaiting() {
        (0, TT.navigatePreserveSearch)(this.getUpdateWaitingUrl())
      }
      onConnectionToServerLost(BB, TB, dB) {
        var VB;
        let lB = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        if (null !== (VB = TB) && void 0 !== VB && VB.endsWith(yB.h) && (this.userContext.invalidateTrafficCode(), TB = TB.replace(yB.h, "")), BB === yB.b.outdatedVersion.code) return console.error("Outdated client with version ", pB.b, ", refreshing page"), (0, vB.reloadBloxd)(), {
          reason: "Outdated client",
          requiresRefresh: !0,
          canReconnect: !1
        };
        if (BB === yB.b.loadRecaptchaError.code) return console.error("Load recaptcha error, refreshing page"), (0, vB.reloadBloxd)(), {
          reason: "Failed to load recaptcha",
          requiresRefresh: !0,
          canReconnect: !1
        };
        for (const pB in yB.b) {
          const {
            code: dB,
            text: VB,
            canReconnect: lB
          } = yB.b[pB];
          if (dB === BB) {
            console.log("matched known error", BB, "leaving game");
            return {
              reason: "" !== VB ? VB : TB || `Code: ${BB}`,
              requiresRefresh: !1,
              canReconnect: lB,
              automaticallyReconnect: dB === yB.b.customGameUpdated.code || dB === yB.b.duplicateLobbyNameError.code
            }
          }
        }
        return console.log("Didn't match known error, leaving game"), (0, fT.e)(BB) || lB ? console.warn("Connection lost", BB, TB) : this.logUnrecognisedConnectionLoss(BB, TB, dB), {
          reason: `Either your internet isn't working or this is a bug.\nCode: ${BB}`,
          requiresRefresh: !1,
          canReconnect: !1,
          gameServerUnreachable: lB ? "failed" : void 0
        }
      }
      logUnrecognisedConnectionLoss(BB, TB, dB) {
        (0, wT.wu)(new Error("Unrecognised connection loss"), {
          code: String(BB),
          cause: null !== TB && void 0 !== TB ? TB : "",
          ...dB,
          game: this.gameNameWithVariation,
          ...(0, fT.i)()
        })
      }
    }
  },
  37963: (BB, TB, dB) => {
    dB.d(TB, {
      d: () => xd,
      g: () => BV
    });
    var VB, yB, pB, lB, JB, YB, gB, oB, kB, LB, OB, DB, uB, HB, EB, vB, mB, iB, NB, tB, fB, sB, MB, zB, wB, UB, FB, KB, rB, IB, cB, SB, PB, QB, RB, aB, ZB, XB, WB, hB, CB, GB, qB, xB, jB, AB, bB, nB, eB, BT, TT, dT, VT, yT, pT, lT, JT, YT, gT, oT, kT, LT, OT, DT, uT, HT, ET, vT, mT, iT, NT, tT, fT, sT, MT, zT, wT, UT, FT, KT, rT, IT, cT, ST, PT, QT, RT, aT, ZT, XT, WT, hT, CT, GT, qT, xT, jT, AT, bT, nT = dB(24),
      eT = dB(36483),
      Bd = dB(37976),
      Td = dB(37979),
      dd = dB(8409),
      Vd = dB(568),
      yd = dB(560),
      pd = dB(35755);
    let ld = (VB = (0, dd.type)("number"), yB = (0, dd.type)("number"), pB = (0, dd.type)("number"), lB = (0, dd.type)("number"), JB = (0, dd.type)("number"), YB = (0, dd.type)("number"), gB = (0, dd.type)("string"), oB = class extends dd.Schema {
        constructor() {
          super(...arguments), (0, Bd.d)(this, "id", kB, this), (0, Bd.d)(this, "amount", LB, this), (0, Bd.d)(this, "x", OB, this), (0, Bd.d)(this, "y", DB, this), (0, Bd.d)(this, "z", uB, this), (0, Bd.d)(this, "size", HB, this), (0, Bd.d)(this, "attributes", EB, this)
        }
      }, kB = (0, Td.c)(oB.prototype, "id", [VB], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return 0
        }
      }), LB = (0, Td.c)(oB.prototype, "amount", [yB], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return 0
        }
      }), OB = (0, Td.c)(oB.prototype, "x", [pB], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return 0
        }
      }), DB = (0, Td.c)(oB.prototype, "y", [lB], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return 0
        }
      }), uB = (0, Td.c)(oB.prototype, "z", [JB], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return 0
        }
      }), HB = (0, Td.c)(oB.prototype, "size", [YB], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return 1
        }
      }), EB = (0, Td.c)(oB.prototype, "attributes", [gB], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return "{}"
        }
      }), oB),
      Jd = (vB = (0, dd.type)("string"), mB = (0, dd.type)("string"), iB = class extends dd.Schema {
        constructor() {
          super(...arguments), (0, Bd.d)(this, "itemName", NB, this), (0, Bd.d)(this, "enchantmentTier", tB, this)
        }
      }, NB = (0, Td.c)(iB.prototype, "itemName", [vB], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: null
      }), tB = (0, Td.c)(iB.prototype, "enchantmentTier", [mB], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: null
      }), iB),
      Yd = (fB = (0, dd.type)("string"), sB = (0, dd.type)("string"), MB = (0, dd.type)("number"), zB = (0, dd.type)("number"), wB = (0, dd.type)("number"), UB = (0, dd.type)("float32"), FB = (0, dd.type)("float32"), KB = (0, dd.type)("float32"), rB = (0, dd.type)("string"), IB = (0, dd.type)(["number"]), cB = (0, dd.type)("boolean"), SB = class extends dd.Schema {
        constructor() {
          super(...arguments), (0, Bd.d)(this, "type", PB, this), (0, Bd.d)(this, "name", QB, this), (0, Bd.d)(this, "x", RB, this), (0, Bd.d)(this, "y", aB, this), (0, Bd.d)(this, "z", ZB, this), (0, Bd.d)(this, "xRotation", XB, this), (0, Bd.d)(this, "yRotation", WB, this), (0, Bd.d)(this, "zRotation", hB, this), (0, Bd.d)(this, "followingEId", CB, this), (0, Bd.d)(this, "followingOffset", GB, this), (0, Bd.d)(this, "shouldMatchFollowingEntityRotation", qB, this)
        }
      }, PB = (0, Td.c)(SB.prototype, "type", [fB], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: null
      }), QB = (0, Td.c)(SB.prototype, "name", [sB], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return ""
        }
      }), RB = (0, Td.c)(SB.prototype, "x", [MB], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return 0
        }
      }), aB = (0, Td.c)(SB.prototype, "y", [zB], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return 0
        }
      }), ZB = (0, Td.c)(SB.prototype, "z", [wB], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return 0
        }
      }), XB = (0, Td.c)(SB.prototype, "xRotation", [UB], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return 0
        }
      }), WB = (0, Td.c)(SB.prototype, "yRotation", [FB], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return 0
        }
      }), hB = (0, Td.c)(SB.prototype, "zRotation", [KB], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return 0
        }
      }), CB = (0, Td.c)(SB.prototype, "followingEId", [rB], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: null
      }), GB = (0, Td.c)(SB.prototype, "followingOffset", [IB], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return new dd.ArraySchema(0, 0, 0)
        }
      }), qB = (0, Td.c)(SB.prototype, "shouldMatchFollowingEntityRotation", [cB], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return !0
        }
      }), SB),
      gd = (xB = (0, dd.type)("float32"), jB = (0, dd.type)("float32"), AB = (0, dd.type)("boolean"), bB = (0, dd.type)("boolean"), nB = (0, dd.type)("float32"), eB = (0, dd.type)("boolean"), BT = (0, dd.type)("string"), TT = (0, dd.type)("string"), dT = (0, dd.type)("string"), VT = (0, dd.type)("string"), yT = (0, dd.type)(["number"]), pT = (0, dd.type)("number"), lT = (0, dd.type)({
        map: Jd
      }), JT = class extends Yd {
        constructor() {
          super(...arguments), (0, Bd.d)(this, "scale", YT, this), (0, Bd.d)(this, "speed", gT, this), (0, Bd.d)(this, "jumping", oT, this), (0, Bd.d)(this, "crouching", kT, this), (0, Bd.d)(this, "cameraPitch", LT, this), (0, Bd.d)(this, "armSwinging", OT, this), (0, Bd.d)(this, "heldItemName", DT, this), (0, Bd.d)(this, "heldItemEnchantmentTier", uT, this), (0, Bd.d)(this, "pose", HT, this), (0, Bd.d)(this, "ridingVehicleEId", ET, this), (0, Bd.d)(this, "meshOffset", vT, this), (0, Bd.d)(this, "baseRenderHeading", mT, this), (0, Bd.d)(this, "armour", iT, this)
        }
      }, YT = (0, Td.c)(JT.prototype, "scale", [xB], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return 1
        }
      }), gT = (0, Td.c)(JT.prototype, "speed", [jB], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return 0
        }
      }), oT = (0, Td.c)(JT.prototype, "jumping", [AB], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return !1
        }
      }), kT = (0, Td.c)(JT.prototype, "crouching", [bB], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return !1
        }
      }), LT = (0, Td.c)(JT.prototype, "cameraPitch", [nB], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return 0
        }
      }), OT = (0, Td.c)(JT.prototype, "armSwinging", [eB], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return !1
        }
      }), DT = (0, Td.c)(JT.prototype, "heldItemName", [BT], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: null
      }), uT = (0, Td.c)(JT.prototype, "heldItemEnchantmentTier", [TT], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: null
      }), HT = (0, Td.c)(JT.prototype, "pose", [dT], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return "standing"
        }
      }), ET = (0, Td.c)(JT.prototype, "ridingVehicleEId", [VT], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return null
        }
      }), vT = (0, Td.c)(JT.prototype, "meshOffset", [yT], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return new dd.ArraySchema(0, 0, 0)
        }
      }), mT = (0, Td.c)(JT.prototype, "baseRenderHeading", [pT], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return 0
        }
      }), iT = (0, Td.c)(JT.prototype, "armour", [lT], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return new dd.MapSchema
        }
      }), JT),
      od = (NT = (0, dd.type)("string"), tT = (0, dd.type)("string"), fT = (0, dd.type)("string"), sT = (0, dd.type)("uint8"), MT = class extends gd {
        constructor() {
          super(...arguments), (0, Bd.d)(this, "variation", zT, this), (0, Bd.d)(this, "ownerDbId", wT, this), (0, Bd.d)(this, "metaInfo", UT, this), (0, Bd.d)(this, "aiState", FT, this)
        }
      }, zT = (0, Td.c)(MT.prototype, "variation", [NT], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return "default"
        }
      }), wT = (0, Td.c)(MT.prototype, "ownerDbId", [tT], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return null
        }
      }), UT = (0, Td.c)(MT.prototype, "metaInfo", [fT], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return ""
        }
      }), FT = (0, Td.c)(MT.prototype, "aiState", [sT], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return 0
        }
      }), MT);
    KT = (0, dd.type)("string"), rT = (0, dd.type)("string"), IT = (0, dd.type)("string"), cT = (0, dd.type)("string"), ST = class extends Yd {
      constructor() {
        super(...arguments), (0, Bd.d)(this, "meshKind", PT, this), (0, Bd.d)(this, "meshOpts", QT, this), (0, Bd.d)(this, "pose", RT, this), (0, Bd.d)(this, "leaderboardTop", aT, this)
      }
    }, PT = (0, Td.c)(ST.prototype, "meshKind", [KT], {
      configurable: !0,
      enumerable: !0,
      writable: !0,
      initializer: null
    }), QT = (0, Td.c)(ST.prototype, "meshOpts", [rT], {
      configurable: !0,
      enumerable: !0,
      writable: !0,
      initializer: null
    }), RT = (0, Td.c)(ST.prototype, "pose", [IT], {
      configurable: !0,
      enumerable: !0,
      writable: !0,
      initializer: null
    }), aT = (0, Td.c)(ST.prototype, "leaderboardTop", [cT], {
      configurable: !0,
      enumerable: !0,
      writable: !0,
      initializer: null
    });

    function kd(BB) {
      return Object.keys(dd.Metadata.getFields(BB))
    }
    const Ld = kd(od);
    for (const TV of Vd.p)
      if (!Ld.includes(TV)) throw new Error(`Mob Schema is missing a networked property: "${TV}"`);
    const Od = kd((ZT = (0, dd.type)("string"), XT = (0, dd.type)("float32"), WT = (0, dd.type)("float32"), hT = (0, dd.type)("float32"), CT = (0, dd.type)("float32"), GT = class extends Yd {
      constructor() {
        super(...arguments), (0, Bd.d)(this, "soundName", qT, this), (0, Bd.d)(this, "volume", xT, this), (0, Bd.d)(this, "refDistance", jT, this), (0, Bd.d)(this, "maxHearDist", AT, this), (0, Bd.d)(this, "rate", bT, this)
      }
    }, qT = (0, Td.c)(GT.prototype, "soundName", [ZT], {
      configurable: !0,
      enumerable: !0,
      writable: !0,
      initializer: function() {
        return ""
      }
    }), xT = (0, Td.c)(GT.prototype, "volume", [XT], {
      configurable: !0,
      enumerable: !0,
      writable: !0,
      initializer: function() {
        return 1
      }
    }), jT = (0, Td.c)(GT.prototype, "refDistance", [WT], {
      configurable: !0,
      enumerable: !0,
      writable: !0,
      initializer: function() {
        return pd.f
      }
    }), AT = (0, Td.c)(GT.prototype, "maxHearDist", [hT], {
      configurable: !0,
      enumerable: !0,
      writable: !0,
      initializer: function() {
        return pd.b
      }
    }), bT = (0, Td.c)(GT.prototype, "rate", [CT], {
      configurable: !0,
      enumerable: !0,
      writable: !0,
      initializer: function() {
        return 1
      }
    }), GT));
    for (const TV of yd.i)
      if (!Od.includes(TV)) throw new Error(`AudioEntity Schema is missing a replicated property: "${TV}"`);
    var Dd = dB(37385),
      ud = dB(1117),
      Hd = dB(572),
      Ed = dB(37152),
      vd = dB(3716),
      md = dB(279),
      Nd = dB(36180),
      td = dB(37038),
      fd = dB(1978),
      sd = dB(36087),
      Md = dB(37418),
      zd = dB(36231),
      wd = dB(287),
      Ud = dB.n(wd),
      Fd = dB(36847),
      Kd = dB(36012),
      rd = dB(36967),
      Id = dB(37053);
    class cd {
      constructor(BB, TB) {
        this.bloxd = BB, this.eId = TB, this.OL = void 0, this.colyseusEntity = void 0, this.canSeeSub = void 0, this.canAttackSub = void 0, this.interactableSub = void 0, this.overlayColourSub = void 0, this.opacitySub = void 0, this.zIndexSub = void 0, this.multilineTextBoxSub = void 0, this.previousHidingMeshManagerState = void 0, this.meshKind = void 0, this.meshOpts = void 0, this.leaderboardTop = void 0, this.meshRebuildQueued = !1, this.ND = !1, this.OL = BB.OL
      }
      initClient(BB) {
        var TB, dB, VB;
        this.colyseusEntity = BB, this.meshKind = BB.meshKind, this.meshOpts = BB.meshOpts, this.leaderboardTop = BB.leaderboardTop, this.OL.Km.add([BB.x, BB.y, BB.z], 1, 1, null, null, !1, !1, this.eId), this.OL.Km.XF(this.eId, "smoothToServerPos");
        const yB = "Person" === this.meshKind;
        this.OL.Km.XF(this.eId, "meshRotation", {
          isServerControlled: !0,
          ...yB ? {
            defaultRotationsPerSecond: .5
          } : {},
          childrenNodeParams: yB ? [{
            nodeName: "HeadMesh",
            softTolerance: Md.k,
            hardTolerance: null
          }] : []
        }), this.updateHidingMeshMgr(), this.canSeeSub = nT.h.subscribe(`otherEntitySettings|${this.eId}|canSee`, (BB => {
          this.updateHidingMeshMgr()
        }));
        const pB = () => {
          const BB = this.OL.Km.ITB(this.eId);
          if (!BB) return;
          const TB = (0, zd.i)(this.eId);
          if ("number" === typeof BB.kF) {
            var dB, VB, yB, pB;
            const lB = null === (dB = (0, fd.h)("head", null === (yB = this.getSpec()) || void 0 === yB || null === (pB = yB.opts.textures) || void 0 === pB ? void 0 : pB.head)) || void 0 === dB || null === (VB = dB.personModel) || void 0 === VB ? void 0 : VB.fullBody;
            return this.OL.yu.YF.setPickable(BB.kF, TB && !lB), void(0, Kd.updatePersonAttachmentPickability)(this.OL, this.eId, TB)
          }
          const lB = BB.mesh;
          if (lB)
            for (const JB of [lB, ...lB.getChildMeshes(!1)]) "xu" in JB && !JB.name.startsWith("Cape|") && (JB.xu = TB)
        };
        this.canAttackSub = nT.h.subscribe(`otherEntitySettings|${this.eId}|canAttack`, pB), this.interactableSub = nT.h.subscribe(`otherEntitySettings|${this.eId}|interactable`, pB), this.overlayColourSub = nT.h.subscribe(`otherEntitySettingsClientifiedEId|${this.eId}|overlayColour`, (BB => {
          this.updateOverlayColour(BB)
        })), this.opacitySub = nT.h.subscribe(`otherEntitySettingsClientifiedEId|${this.eId}|opacity`, (BB => {
          this.updateOpacity(BB)
        })), this.zIndexSub = nT.h.subscribe(`otherEntitySettingsClientifiedEId|${this.eId}|zIndex`, (BB => {
          this.updateZIndex(BB)
        }));
        const lB = this.OL.zK[this.OL.rK][this.eId];
        this.updateOverlayColour(null !== (TB = null === lB || void 0 === lB ? void 0 : lB.overlayColour) && void 0 !== TB ? TB : null), this.updateOpacity(null !== (dB = null === lB || void 0 === lB ? void 0 : lB.opacity) && void 0 !== dB ? dB : 1), this.updateZIndex(null !== (VB = null === lB || void 0 === lB ? void 0 : lB.zIndex) && void 0 !== VB ? VB : 0), this.multilineTextBoxSub = (0, sd.r)(this.OL, this.eId)
      }
      onChangeClient(BB, TB) {
        if ("xRotation" === BB || "yRotation" === BB || "zRotation" === BB)(0, sd.u)(this.OL, this.eId, BB, TB);
        else if ("pose" === BB) {
          const BB = this.OL.Km.ZTB(this.eId);
          BB && (BB.pose = TB || "standing")
        } else "meshKind" === BB || "meshOpts" === BB ? (this[BB] = TB, this.queueMeshRebuild()) : "name" === BB && "" !== TB ? this.updateHidingMeshMgr() : "leaderboardTop" === BB && (this.leaderboardTop = TB, nT.h.yH(`leaderboardTop|${this.eId}`, TB))
      }
      disposeClient() {
        this.ND = !0, this.OL.Km.deleteEntity(this.eId), nT.h.unsubscribe(this.canSeeSub), nT.h.unsubscribe(this.canAttackSub), nT.h.unsubscribe(this.interactableSub), nT.h.unsubscribe(this.overlayColourSub), nT.h.unsubscribe(this.opacitySub), nT.h.unsubscribe(this.zIndexSub), nT.h.unsubscribe(this.multilineTextBoxSub)
      }
      getCurrentHidingMeshMgrState() {
        var BB, TB;
        return {
          canSee: null !== (BB = null === (TB = this.OL.zK[this.OL.rK][this.eId]) || void 0 === TB ? void 0 : TB.canSee) && void 0 !== BB && BB,
          name: this.colyseusEntity.name,
          meshKind: this.meshKind,
          meshOpts: this.meshOpts
        }
      }
      updateHidingMeshMgr() {
        var BB, TB, dB;
        const {
          OL: VB
        } = this, {
          Km: yB
        } = VB, pB = this.getCurrentHidingMeshMgrState();
        if ((0, md.ae)(this.previousHidingMeshManagerState, pB)) return;
        if (this.previousHidingMeshManagerState = pB, yB.jF(this.eId, "hidingMeshManager"), null === (BB = VB.zK[VB.rK][this.eId]) || void 0 === BB || !BB.canSee) return;
        const lB = this.getSpec();
        if (!lB) return;
        const {
          type: JB,
          opts: YB
        } = lB;
        "Person" === JB && (YB.textures = (0, fd.m)(YB.textures)), YB.eId = this.eId, yB.XF(this.eId, "hidingMeshManager", {
          addMeshComponent: () => {
            var BB, TB, dB;
            "Leaderboard" === JB && (YB.leaderboardTop = this.leaderboardTop);
            const pB = this.bloxd.client.meshCreator.getEntityMesh(JB, YB, (BB => {
              var TB, dB;
              if ("number" === typeof BB) {
                var yB, pB, lB;
                const TB = VB.yu.YF;
                TB.setEntityId(BB, this.eId);
                const dB = "Person" === JB && (null === (yB = (0, fd.h)("head", null === (lB = YB.textures) || void 0 === lB ? void 0 : lB.head)) || void 0 === yB || null === (pB = yB.personModel) || void 0 === pB ? void 0 : pB.fullBody);
                return void TB.setPickable(BB, (0, zd.i)(this.eId) && !dB)
              }
              const gB = BB;
              for (const JB of [gB, ...gB.getChildMeshes(!1)]) void 0 === JB.xu || JB.name.startsWith("Cape|") || (JB.xu = (0, zd.i)(this.eId), JB.metadata ??= new VB.yu.ju, JB.metadata.eId = this.eId);
              this.updateOpacity(null !== (TB = null === (dB = VB.zK[VB.rK][this.eId]) || void 0 === dB ? void 0 : dB.opacity) && void 0 !== TB ? TB : 1)
            }));
            if (!pB) return;
            const {
              kF: lB,
              mesh: gB,
              meshOffset: oB,
              nameYOffset: kB,
              modelLoaded: LB
            } = pB;
            null === LB || void 0 === LB || LB.then((() => {
              var BB;
              (null === (BB = yB.ITB(this.eId)) || void 0 === BB ? void 0 : BB.mesh) === gB && (this.previousHidingMeshManagerState = null, this.updateHidingMeshMgr())
            }));
            const OB = null === lB ? null : VB.yu.YF.sVB(lB, 0);
            if (yB.XF(this.eId, yB.names.mesh, {
                kF: lB,
                jdB: OB,
                mesh: gB,
                EJB: !1,
                ndB: "Leaderboard" !== JB,
                offset: oB.slice(),
                HJB: "ParticleEmitter" === JB && YB.followTargetMeshOffset ? BB => {
                  var TB;
                  Ud().copy(BB, oB);
                  const dB = null === (TB = yB.sdB(this.eId)) || void 0 === TB ? void 0 : TB.DD,
                    VB = void 0 === dB ? null : yB.ZTB(dB);
                  if (VB) {
                    var pB, lB;
                    const TB = this.bloxd.getEntityHeading(null !== (pB = VB.ridingVehicleEId) && void 0 !== pB ? pB : dB, !0),
                      yB = Math.sin(TB),
                      JB = Math.cos(TB);
                    BB[0] += VB.meshOffset[0] * JB + VB.meshOffset[2] * yB, BB[1] += VB.meshOffset[1], BB[2] += VB.meshOffset[2] * JB - VB.meshOffset[0] * yB;
                    const YB = null !== (lB = VB.ridingVehicleEId) && void 0 !== lB ? lB : null;
                    null !== YB && (0, Id.c)(this.OL, YB, BB)
                  }
                } : null
              }), "Person" === JB) {
              var DB, uB, HB, EB;
              yB.XF(this.eId, yB.names.meshAttachments, {
                personFullBody: null !== (DB = null === (uB = (0, fd.h)("head", null === (EB = YB.textures) || void 0 === EB ? void 0 : EB.head)) || void 0 === uB || null === (HB = uB.personModel) || void 0 === HB ? void 0 : HB.fullBody) && void 0 !== DB && DB
              });
              for (const BB of ud.q) {
                var vB, mB, iB;
                const TB = null === (vB = YB.textures) || void 0 === vB ? void 0 : vB[BB];
                TB && null !== (mB = (0, fd.h)(BB, TB)) && void 0 !== mB && null !== (iB = mB.attachments) && void 0 !== iB && iB.length && td.d.Player.meshApi.updatePlayerCosmetic(this.eId, lB, BB, TB)
              }
              yB.XF(this.eId, yB.names.moveState), yB.XF(this.eId, "updateWalkingState", {
                kF: lB,
                jdB: OB,
                walkingLegSwingDuration: Md.q
              }), yB.XF(this.eId, "humanoidMesh", {
                kF: lB,
                jdB: OB,
                heldItemPositionParams: {},
                maxWalkingAngleOverride: null
              }), yB.XF(this.eId, "animator", {
                kF: lB,
                jdB: OB,
                modelLifeformType: "Player"
              }), rd.f.hasAnimation("Person") && yB.XF(this.eId, "rigAnimation", {
                target: "Person",
                kF: lB
              }), yB.ZTB(this.eId).pose = this.colyseusEntity.pose || "standing"
            } else if ("BloxdBlock" === JB && null !== lB) {
              yB.XF(this.eId, "animator", {
                kF: lB,
                jdB: OB,
                modelLifeformType: null
              });
              const BB = (0, Ed.q)(YB.blockName);
              null !== BB && yB.XF(this.eId, "rigAnimation", {
                target: BB,
                kF: lB
              })
            }
            yB.qJB(this.eId, "entityName", {
              name: this.colyseusEntity.name,
              nameYOffset: kB
            }), this.bloxd.setEntityName(this.eId, this.colyseusEntity.name), !0 === YB.autoRotate && (yB.jF(this.eId, "meshRotation"), yB.XF(this.eId, "autoRotate"));
            const {
              lineToEId: NB
            } = YB;
            (0, Hd.M)(NB) || yB.XF(this.eId, "lineToEntity", {
              lineToEId: NB
            });
            const tB = VB.zK[VB.rK][this.eId];
            this.updateOverlayColour(null !== (BB = null === tB || void 0 === tB ? void 0 : tB.overlayColour) && void 0 !== BB ? BB : null), this.updateOpacity(null !== (TB = null === tB || void 0 === tB ? void 0 : tB.opacity) && void 0 !== TB ? TB : 1), this.updateZIndex(null !== (dB = null === tB || void 0 === tB ? void 0 : tB.zIndex) && void 0 !== dB ? dB : 0)
          },
          removeMeshComponent: () => {
            "Person" !== JB && "BloxdBlock" !== JB || yB.jF(this.eId, "rigAnimation"), yB.jF(this.eId, yB.names.mesh), yB.TTB(this.eId, yB.names.meshAttachments) && yB.jF(this.eId, yB.names.meshAttachments), yB.jF(this.eId, "entityName"), yB.jF(this.eId, "autoRotate"), yB.jF(this.eId, "lineToEntity"), "Person" === JB ? (yB.jF(this.eId, yB.names.moveState), yB.jF(this.eId, "updateWalkingState"), yB.jF(this.eId, "humanoidMesh"), yB.jF(this.eId, "animator")) : "BloxdBlock" === JB && yB.jF(this.eId, "animator")
          },
          hideDist: null !== (TB = YB.hideDist) && void 0 !== TB ? TB : 80,
          movingHideDist: null !== (dB = YB.hideDist) && void 0 !== dB ? dB : 120,
          displayOutsideLoadedChunk: YB.hideDist > 100,
          immediatelyUpdate: !0,
          xg: "BloxdBlock" === JB ? YB.blockName : JB
        })
      }
      queueMeshRebuild() {
        this.meshRebuildQueued || (this.meshRebuildQueued = !0, queueMicrotask((() => {
          this.meshRebuildQueued = !1, this.ND || this.updateHidingMeshMgr()
        })))
      }
      getSpec() {
        return (0, vd.g)({
          meshKind: this.meshKind,
          meshOpts: this.meshOpts
        })
      }
      updateOverlayColour(BB) {
        var TB, dB;
        if ("Person" !== this.meshKind) return;
        let VB = new Nd.d(0, 0, 0, 0);
        if (null !== BB) {
          const TB = (0, md.Z)(BB);
          VB = new Nd.d(TB[0] / 255, TB[1] / 255, TB[2] / 255, .5)
        }
        const yB = null !== (TB = null === (dB = this.OL.Km.ITB(this.eId)) || void 0 === dB ? void 0 : dB.kF) && void 0 !== TB ? TB : null;
        null !== yB && td.d.Player.meshApi.updateMeshOverlayColour(yB, VB)
      }
      updateZIndex(BB) {
        var TB;
        if ("Person" !== this.meshKind) return;
        const dB = null === (TB = this.OL.Km.ITB(this.eId)) || void 0 === TB ? void 0 : TB.kF;
        "number" === typeof dB && this.OL.yu.YF.setRenderingGroupId(dB, BB)
      }
      updateOpacity(BB) {
        const TB = this.OL.Km.ITB(this.eId);
        TB && ("number" !== typeof TB.kF ? TB.mesh && "ParticleEmitter" !== this.meshKind && (0, Fd.e)(TB.mesh, BB) : td.d.Player.meshApi.updateMeshOpacity(TB.kF, BB))
      }
    }
    var Sd = dB(37967);
    class Pd {
      constructor(BB, TB) {
        this.eId = TB, this.OL = void 0, this.schema = void 0, this.OL = BB.OL
      }
      initClient(BB) {
        this.schema = BB, this.OL.Km.add([BB.x, BB.y, BB.z], .1, .1, null, null, !1, !1, this.eId), this.OL.Km.XF(this.eId, "smoothToServerPos"), Sd.c.add(this.eId, this.copyOpts())
      }
      onChangeClient(BB) {
        yd.i.includes(BB) && Sd.c.update(this.eId, this.copyOpts())
      }
      disposeClient() {
        Sd.c.remove(this.eId), this.OL.Km.deleteEntity(this.eId)
      }
      copyOpts() {
        const {
          soundName: BB,
          volume: TB,
          refDistance: dB,
          maxHearDist: VB,
          rate: yB
        } = this.schema;
        return {
          soundName: BB,
          volume: TB,
          refDistance: dB,
          maxHearDist: VB,
          rate: yB
        }
      }
    }
    var Qd = dB(3191),
      Rd = dB(35741),
      ad = dB(5839),
      Zd = dB(36702),
      Xd = dB(2385),
      Wd = dB(37090),
      hd = dB(8375),
      Cd = dB(37423),
      Gd = dB(36683),
      qd = dB(2702);
    class xd {
      constructor(BB, TB) {
        let dB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 4,
          VB = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : () => performance.now();
        this.hdB = BB, this.OL = TB, this.setupBudgetMs = dB, this.now = VB, this.createStateCallbacks = void 0, this.roomStateCallbacks = void 0, this.allItems = {}, this.detachers = new Map, this.deferredSetups = new Map, this.queuedSetups = new Map, this.promotedSetups = new Set, this.setupBudgetLeftMs = void 0, this.lastRefillMs = void 0, this.roomState = void 0, this.ND = !1, this.onFrame = () => {
          this.setUpQueuedEntities(!0)
        }, this.WE = () => {
          this.setUpQueuedEntities(this.now() - this.lastRefillMs > 100)
        }, this.setUpPromoted = () => {
          for (const BB of this.promotedSetups) {
            this.promotedSetups.delete(BB);
            const TB = this.queuedSetups.get(BB);
            TB && (this.queuedSetups.delete(BB), this.timedSetup(TB, BB))
          }
        }, this.createStateCallbacks = (0, hd.getStateCallbacks)(BB), this.roomStateCallbacks = this.createStateCallbacks(BB.state), this.roomState = BB.state, this.setupBudgetLeftMs = dB, this.lastRefillMs = VB()
      }
      setup() {
        this.setupEntityHandlers(), this.setupItemHandlers(), this.hdB.onStateChange(this.setUpPromoted), this.OL.on("beforeInputs", this.onFrame), this.OL.on("dL", this.WE)
      }
      setUpQueuedEntities(BB) {
        var TB;
        if ((null === (TB = (0, Xd.b)().client.getMsgHandler()) || void 0 === TB ? void 0 : TB.hdB) !== this.hdB) return this.OL.off("beforeInputs", this.onFrame), this.OL.off("dL", this.WE), this.queuedSetups.clear(), void this.promotedSetups.clear();
        if (BB && (this.setupBudgetLeftMs = this.setupBudgetMs, this.lastRefillMs = this.now()), this.setUpPromoted(), 0 !== this.queuedSetups.size)
          for (Ud().copy(jd, this.OL.Km.Dv(this.OL.rK)); this.setupBudgetLeftMs > 0;) {
            const BB = this.nearestQueued(jd);
            if (null === BB) return;
            this.setUpIfQueued(BB), this.setUpPromoted()
          }
      }
      nearestQueued(BB) {
        let TB = null,
          dB = 1 / 0;
        return this.queuedSetups.forEach(((VB, yB) => {
          const pB = function(BB, TB) {
            return (TB.x - BB[0]) ** 2 + (TB.y - BB[1]) ** 2 + (TB.z - BB[2]) ** 2
          }(BB, VB);
          (null === TB || pB < dB) && (TB = yB, dB = pB)
        })), TB
      }
      setUpOrQueue(BB, TB) {
        0 === this.queuedSetups.size && this.setupBudgetLeftMs > 0 || this.mustSetUpNow(BB, TB) ? this.timedSetup(BB, TB) : this.queuedSetups.set(TB, BB)
      }
      mustSetUpNow(BB, TB) {
        const dB = this.OL.yTB;
        if (TB === dB) return !0;
        const VB = this.roomState.entities.get(dB);
        return !(!VB || VB.ridingVehicleEId !== TB && VB.followingEId !== TB) || (Ad(BB.type) === Dd.b || (0, Xd.b)().getFollowingEntities(TB).length > 0)
      }
      setUpIfQueued(BB) {
        const TB = this.queuedSetups.get(BB);
        TB && (this.queuedSetups.delete(BB), this.timedSetup(TB, BB))
      }
      promoteIfQueued(BB) {
        null !== BB && this.queuedSetups.has(BB) && this.promotedSetups.add(BB)
      }
      timedSetup(BB, TB) {
        const dB = this.now();
        this.setupEntity(BB, TB), this.setupBudgetLeftMs -= this.now() - dB
      }
      setupEntityHandlers() {
        this.roomStateCallbacks.entities.Om(((BB, TB) => {
          this.OL.yTB ? this.setUpOrQueue(BB, TB) : this.deferEntitySetupUntilInitInfo(BB, TB)
        })), this.roomStateCallbacks.entities.Kw(((BB, TB) => {
          const dB = this.deferredSetups.get(TB);
          dB && (nT.h.unsubscribe(dB), this.deferredSetups.delete(TB)), this.queuedSetups.delete(TB), this.detach(TB), (0, Xd.b)().client.disposeEntity(TB)
        }))
      }
      deferEntitySetupUntilInitInfo(BB, TB) {
        const dB = nT.h.xH("initInfoReceived", (() => {
          this.deferredSetups.delete(TB), this.setUpOrQueue(BB, TB)
        }));
        this.deferredSetups.set(TB, dB), (0, Qd.onGameResetOnce)((() => {
          this.deferredSetups.get(TB) === dB && (nT.h.unsubscribe(dB), this.deferredSetups.delete(TB)), (0, Xd.b)().updatePositionAndPhysics(this.OL.rK, {
            type: ad.q.DEFAULT,
            tier: null
          }, !0), (0, Xd.b)().takeHeldPlayerBodySize(this.OL.rK);
          const BB = this.OL.Km.mTB(this.OL.rK);
          BB && (BB.movementType = ad.o.NORMAL)
        }))
      }
      setupEntity(BB, TB) {
        const dB = TB === this.OL.yTB;
        if (dB)(0, Xd.b)().client.YG(this.OL.rK, null, null);
        else {
          const {
            type: dB
          } = BB, VB = Ad(dB);
          if (void 0 === VB) return void
          function(BB, TB) {
            const dB = String(BB);
            if (bd.has(dB)) return;
            bd.add(dB);
            const VB = dB.length > 80 ? `${dB.slice(0,80)}...` : dB,
              yB = `No client handler for entity type ${JSON.stringify(VB)}, so entity ${TB} is not set up`;
            console.warn(yB), (0, qd.i)("uncaught", yB, "unknown_entity_type")
          }(dB, TB);
          (0, Xd.b)().client.YG(TB, BB, new VB((0, Xd.b)(), TB, dB))
        }
        const VB = this.createStateCallbacks(BB);
        if (dB) return this.setupMapSchemaCallbacks(TB, BB, VB, "armour"), this.setupScalarField(TB, BB, VB, "scale"), this.setupScalarField(TB, BB, VB, "ridingVehicleEId"), this.setupScalarField(TB, BB, VB, "followingEId"), this.setupScalarField(TB, BB, VB, "followingOffset"), void this.setupScalarField(TB, BB, VB, "shouldMatchFollowingEntityRotation");
        for (const yB of kd(BB.constructor)) BB[yB] instanceof dd.MapSchema ? this.setupMapSchemaCallbacks(TB, BB, VB, yB) : this.setupScalarField(TB, BB, VB, yB)
      }
      setupMapSchemaCallbacks(BB, TB, dB, VB) {
        const yB = dB[VB],
          pB = new Map;
        yB.Om(((dB, yB) => {
          if (this.onEntityFieldChange(BB, TB, VB, {
              key: yB,
              value: dB
            }), !(dB instanceof dd.Schema)) return;
          const lB = this.createStateCallbacks(dB),
            JB = [];
          for (const pB of kd(dB.constructor)) JB.push(this.listenForFutureChanges(lB, pB, (() => {
            this.onEntityFieldChange(BB, TB, VB, {
              key: yB,
              value: dB
            })
          })));
          pB.set(yB, (() => {
            for (const BB of JB) BB()
          }))
        })), yB.Kw(((dB, yB) => {
          var lB;
          null === (lB = pB.get(yB)) || void 0 === lB || lB(), pB.delete(yB), this.onEntityFieldChange(BB, TB, VB, {
            key: yB,
            value: null
          })
        })), this.addDetacher(BB, (() => {
          for (const BB of pB.values()) BB();
          pB.clear()
        }))
      }
      setupScalarField(BB, TB, dB, VB) {
        this.onEntityFieldChange(BB, TB, VB, TB[VB]);
        const yB = this.listenForFutureChanges(dB, VB, (dB => {
          this.onEntityFieldChange(BB, TB, VB, dB)
        }));
        this.addDetacher(BB, yB)
      }
      addDetacher(BB, TB) {
        let dB = this.detachers.get(BB);
        dB || (dB = [], this.detachers.set(BB, dB)), dB.push(TB)
      }
      detach(BB) {
        for (const dB of null !== (TB = this.detachers.get(BB)) && void 0 !== TB ? TB : []) {
          var TB;
          dB()
        }
        this.detachers.delete(BB)
      }
      listenForFutureChanges(BB, TB, dB) {
        return BB.listen(TB, dB, !1)
      }
      onEntityFieldChange(BB, TB, dB, VB) {
        switch (dB) {
          case "ridingVehicleEId": {
            this.promoteIfQueued(VB);
            const TB = this.OL.Km.ZTB((0, Rd.e)(BB));
            TB && (TB.ridingVehicleEId = VB);
            break
          }
          case "armour":
            this.handleArmourChange(BB, VB);
            break;
          case "followingEId":
            this.promoteIfQueued(VB), this.handleFollowingEIdChange(BB, TB, VB);
            break;
          case "xRotation":
          case "yRotation":
          case "zRotation":
            this.handleRotationChange(BB, dB, VB);
            break;
          case "scale":
            this.handleScaleChange(BB, VB);
            break;
          case "baseRenderHeading":
            this.handleBaseRenderHeadingChange(BB, VB);
            break;
          case "followingOffset":
            this.handleFollowingOffsetChange(BB, VB);
            break;
          case "shouldMatchFollowingEntityRotation":
            this.handleShouldMatchFollowingEntityRotationChange(BB, VB);
            break;
          case "x":
          case "y":
          case "z":
            return void this.handlePositionChange(BB, dB, VB)
        }(0, Xd.b)().client.updateEntityField(BB, dB, VB)
      }
      handleArmourChange(BB, TB) {
        var dB, VB;
        const {
          key: yB,
          value: pB
        } = TB;
        (0, td.B)(BB, yB, null !== (dB = null === pB || void 0 === pB ? void 0 : pB.itemName) && void 0 !== dB ? dB : null, null !== (VB = null === pB || void 0 === pB ? void 0 : pB.enchantmentTier) && void 0 !== VB ? VB : null)
      }
      handleFollowingEIdChange(BB, TB, dB) {
        const VB = (0, Rd.e)(BB),
          yB = VB === this.OL.rK;
        if (this.OL.Km.jF(VB, this.OL.Km.names.iN), dB) this.OL.Km.jF(VB, "smoothToServerPos"), this.OL.Km.XF(VB, this.OL.Km.names.iN, {
          DD: (0, Rd.e)(dB),
          offset: Array.from(TB.followingOffset),
          MdB: TB.shouldMatchFollowingEntityRotation,
          FdB: !0,
          KdB: (BB, VB) => {
            if (Ud().copy(BB, TB.followingOffset), TB.ridingVehicleEId === dB) {
              const TB = (0, Rd.e)(dB),
                yB = (0, Xd.b)().getEntityHeading(TB, VB);
              Ud().ol(BB, BB, Ud().ZERO, yB)
            }
          }
        });
        else if (!yB) {
          this.OL.Km.TTB(VB, "smoothToServerPos") || this.OL.Km.XF(VB, "smoothToServerPos");
          const BB = this.OL.Km.getState(VB, "smoothToServerPos"),
            TB = this.OL.Km.mG(VB).position;
          (0, Gd.setServerPosition)(BB, TB[0], TB[1], TB[2])
        }
      }
      handleRotationChange(BB, TB, dB) {
        const VB = "xRotation" === TB ? 0 : "yRotation" === TB ? 1 : 2;
        for (const yB of (0, Xd.b)().getFollowingEntities(BB)) {
          const BB = this.OL.Km.getState(yB, "meshRotation"),
            TB = this.OL.Km.sdB(yB);
          BB && TB.MdB && (BB.serverSetRotation[VB] = dB)
        }
      }
      handleScaleChange(BB, TB) {
        const dB = (0, Rd.e)(BB);
        if (nT.h.yH(`entityScale|${dB}`, TB), dB === this.OL.rK) {
          var VB;
          (0, Xd.b)().removeFromEyeHeightCache(dB);
          const BB = this.OL.Km.mTB(this.OL.rK),
            TB = null !== (VB = null === BB || void 0 === BB ? void 0 : BB.physicsState) && void 0 !== VB ? VB : {
              type: ad.q.DEFAULT,
              tier: null
            };
          return void(0, Xd.b)().updatePositionAndPhysics(this.OL.rK, TB, !1)
        }
        const yB = (0, Xd.b)().getLifeformType(dB);
        if (null === yB) return;
        const {
          physicsBodyWidth: pB,
          physicsBodyHeight: lB
        } = (0, Cd.f)(TB, yB);
        this.OL.Km.tdB(dB, pB, lB, pB)
      }
      handleBaseRenderHeadingChange(BB, TB) {
        const dB = this.OL.Km.getState(BB, "meshRotation");
        dB && (dB.baseRenderRotation[1] = TB);
        for (const VB of (0, Xd.b)().getFollowingEntities(BB)) {
          const BB = this.OL.Km.getState(VB, "meshRotation"),
            dB = this.OL.Km.sdB(VB);
          BB && dB.MdB && (BB.baseRenderRotation[1] = TB)
        }
      }
      handleFollowingOffsetChange(BB, TB) {
        const dB = this.OL.Km.sdB((0, Rd.e)(BB));
        if (dB && dB.offset) {
          const BB = TB ? Array.from(TB) : Ud().ZERO;
          dB.offset[0] = BB[0], dB.offset[1] = BB[1], dB.offset[2] = BB[2]
        }
      }
      handleShouldMatchFollowingEntityRotationChange(BB, TB) {
        const dB = this.OL.Km.sdB((0, Rd.e)(BB));
        dB && (dB.MdB = null === TB || void 0 === TB || TB)
      }
      handlePositionChange(BB, TB, dB) {
        if (this.OL.Km.TTB(BB, "smoothToServerPos")) {
          const VB = this.OL.Km.getState(BB, "smoothToServerPos");
          (0, Gd.setServerPositionAxis)(VB, nd[TB], dB)
        }
      }
      setupItemHandlers() {
        this.roomStateCallbacks.items.Om(((BB, TB) => {
          this.allItems[TB] = BB, (0, Zd.m)(this.OL, TB, [BB.x, BB.y, BB.z], BB.id, {
            amount: BB.amount,
            attributes: JSON.parse(BB.attributes),
            ty: (0, eT.b)(this.OL).cantPickUpItem(TB),
            size: BB.size,
            predictedAt: (0, Xd.b)().client.itemDropPrediction.onServerItemAdded(TB)
          });
          const dB = this.createStateCallbacks(BB);
          for (const VB of kd(ld)) this.onItemFieldChange(TB, VB, BB[VB]), this.addDetacher(TB, this.listenForFutureChanges(dB, VB, (BB => {
            this.onItemFieldChange(TB, VB, BB)
          })))
        })), this.roomStateCallbacks.items.Kw(((BB, TB) => {
          delete this.allItems[TB], this.detach(TB), (0, Xd.b)().client.itemDropPrediction.onServerItemRemoved(TB), this.OL.Km.TTB(TB, this.OL.Km.names.itemState) && this.OL.Km.deleteEntity(TB), (0, eT.b)(this.OL).disposeEntity(TB)
        }))
      }
      onItemFieldChange(BB, TB, dB) {
        if (TB in nd) {
          if (this.OL.Km.TTB(BB, "itemState")) {
            const VB = this.OL.Km.getState(BB, "smoothToServerPos");
            (0, Gd.setServerPositionAxis)(VB, nd[TB], dB), (0, Xd.b)().client.itemDropPrediction.onServerItemMoved(BB)
          }
          return
        }
        if (!this.OL.Km.TTB(BB, "itemState")) return;
        const VB = this.OL.Km.getState(BB, "itemState");
        "amount" === TB && dB !== VB.amount && (VB.creationTime = Date.now()), VB[TB] = "attributes" === TB ? JSON.parse(dB) : dB
      }
      dispose() {
        if (!this.ND) {
          this.ND = !0, this.OL.off("beforeInputs", this.onFrame), this.OL.off("dL", this.WE), this.queuedSetups.clear(), this.promotedSetups.clear();
          for (const BB of this.deferredSetups.values()) nT.h.unsubscribe(BB);
          this.deferredSetups.clear(), this.OL.Km.jF(this.OL.rK, this.OL.Km.names.iN);
          for (const BB in this.allItems) this.OL.Km.deleteEntity(BB), delete this.allItems[BB];
          for (const BB of [...this.detachers.keys()]) this.detach(BB);
          (0, eT.b)(this.OL).clear();
          for (const BB of (0, Xd.b)().client.iterateEntityIds())(0, Xd.b)().client.disposeEntity(BB)
        }
      }
    }
    const jd = [0, 0, 0];

    function Ad(BB) {
      if ("string" !== typeof BB) return;
      const TB = BB.indexOf("|"),
        dB = -1 === TB ? BB : BB.slice(0, TB),
        VB = BV();
      return Object.hasOwn(VB, dB) ? VB[dB] : void 0
    }
    const bd = new Set;
    const nd = {
      x: 0,
      y: 1,
      z: 2
    };
    let ed = null;

    function BV() {
      return null !== ed || (ed = {
        ...Object.fromEntries(yd.l.map((BB => {
          const {
            xg: TB
          } = (0, Wd.c)(BB);
          return [BB, TB]
        }))),
        Pebble: Dd.b,
        Snowball: Dd.b,
        "Snowball Launcher": Dd.b,
        "Reinforced Pebble": Dd.b,
        Bullet: Dd.b,
        "Reinforced Ball": Dd.b,
        Ball: Dd.b,
        Mango: Dd.b,
        "Moonstone Orb": Dd.b,
        ...Object.fromEntries(Vd.r.map((BB => [(0, md._b)(BB), Dd.b]))),
        Arrow: Dd.b,
        "Arrow of Speed": Dd.b,
        "Arrow of Poison": Dd.b,
        "Arrow of Slowness": Dd.b,
        "Arrow of Weakness": Dd.b,
        "Arrow of Knockback": Dd.b,
        "Arrow of Strength": Dd.b,
        "Arrow of Invisibility": Dd.b,
        "Arrow of Jumping": Dd.b,
        "Arrow of Defense": Dd.b,
        "Arrow of Instant Healing": Dd.b,
        "Arrow of Instant Damage": Dd.b,
        "Arrow of Regeneration": Dd.b,
        "Arrow of Haste": Dd.b,
        "Arrow of Shield": Dd.b,
        "Arrow of Double Jump": Dd.b,
        "Arrow of Heat Resistance": Dd.b,
        "Arrow of X-Ray Vision": Dd.b,
        "Arrow of Mining Yield": Dd.b,
        "Arrow of Brain Rot": Dd.b,
        "Arrow of Milk": Dd.b,
        Fireball: Dd.b,
        "Bouncy Bomb": Dd.b,
        RPG: Dd.b,
        "Obby RPG": Dd.b,
        "Super RPG": Dd.b,
        "Grenade Launcher": Dd.b,
        Iceball: Dd.b,
        Coconut: Dd.b,
        "Splash Speed Potion": Dd.b,
        "Splash Defense Potion": Dd.b,
        "Splash Strength Potion": Dd.b,
        "Splash Invisibility Potion": Dd.b,
        "Splash Jump Potion": Dd.b,
        "Splash Knockback Potion": Dd.b,
        "Splash Poison Potion": Dd.b,
        "Splash Speed Potion II": Dd.b,
        "Splash Defense Potion II": Dd.b,
        "Splash Strength Potion II": Dd.b,
        "Splash Jump Potion II": Dd.b,
        "Splash Knockback Potion II": Dd.b,
        "Splash Poison Potion II": Dd.b,
        "Splash Slowness Potion": Dd.b,
        "Splash Slowness Potion II": Dd.b,
        "Splash Weakness Potion": Dd.b,
        "Splash Weakness Potion II": Dd.b,
        "Splash Milk Potion": Dd.b,
        "Splash Instant Damage Potion": Dd.b,
        "Splash Instant Damage Potion II": Dd.b,
        "Splash Instant Healing Potion": Dd.b,
        "Splash Instant Healing Potion II": Dd.b,
        "Splash Regeneration Potion": Dd.b,
        "Splash Regeneration Potion II": Dd.b,
        "Splash Haste Potion": Dd.b,
        "Splash Haste Potion II": Dd.b,
        "Splash Shield Potion": Dd.b,
        "Splash Shield Potion II": Dd.b,
        "Splash Double Jump Potion": Dd.b,
        "Splash Heat Resistance Potion": Dd.b,
        "Splash X-Ray Vision Potion": Dd.b,
        "Splash Mining Yield Potion": Dd.b,
        "Splash Mining Yield Potion II": Dd.b,
        "Splash Brain Rot Potion": Dd.b,
        "Yellow Paintball Gun": Dd.b,
        "White Paintball Gun": Dd.b,
        "Red Paintball Gun": Dd.b,
        "Purple Paintball Gun": Dd.b,
        "Pink Paintball Gun": Dd.b,
        "Orange Paintball Gun": Dd.b,
        "Magenta Paintball Gun": Dd.b,
        "Lime Paintball Gun": Dd.b,
        "Light Gray Paintball Gun": Dd.b,
        "Light Blue Paintball Gun": Dd.b,
        "Green Paintball Gun": Dd.b,
        "Gray Paintball Gun": Dd.b,
        "Cyan Paintball Gun": Dd.b,
        "Brown Paintball Gun": Dd.b,
        "Blue Paintball Gun": Dd.b,
        "Black Paintball Gun": Dd.b,
        "Yellow Heavy Paintball Gun": Dd.b,
        "White Heavy Paintball Gun": Dd.b,
        "Red Heavy Paintball Gun": Dd.b,
        "Purple Heavy Paintball Gun": Dd.b,
        "Pink Heavy Paintball Gun": Dd.b,
        "Orange Heavy Paintball Gun": Dd.b,
        "Magenta Heavy Paintball Gun": Dd.b,
        "Lime Heavy Paintball Gun": Dd.b,
        "Light Gray Heavy Paintball Gun": Dd.b,
        "Light Blue Heavy Paintball Gun": Dd.b,
        "Green Heavy Paintball Gun": Dd.b,
        "Gray Heavy Paintball Gun": Dd.b,
        "Cyan Heavy Paintball Gun": Dd.b,
        "Brown Heavy Paintball Gun": Dd.b,
        "Blue Heavy Paintball Gun": Dd.b,
        "Black Heavy Paintball Gun": Dd.b,
        "Toxin Ball": Dd.b,
        "Splash Aura XP Potion": Dd.b,
        "Splash Aura XP Potion II": Dd.b,
        "Arrow of Aura XP": Dd.b,
        Firecracker: Dd.b,
        "Rainbow Firecracker": Dd.b,
        "White Firecracker": Dd.b,
        "Orange Firecracker": Dd.b,
        "Magenta Firecracker": Dd.b,
        "Light Blue Firecracker": Dd.b,
        "Yellow Firecracker": Dd.b,
        "Lime Firecracker": Dd.b,
        "Pink Firecracker": Dd.b,
        "Gray Firecracker": Dd.b,
        "Light Gray Firecracker": Dd.b,
        "Cyan Firecracker": Dd.b,
        "Purple Firecracker": Dd.b,
        "Blue Firecracker": Dd.b,
        "Brown Firecracker": Dd.b,
        "Green Firecracker": Dd.b,
        "Red Firecracker": Dd.b,
        "Black Firecracker": Dd.b,
        "Firecracker Pebble": Dd.b,
        "Rainbow Firecracker Pebble": Dd.b,
        "White Firecracker Pebble": Dd.b,
        "Orange Firecracker Pebble": Dd.b,
        "Magenta Firecracker Pebble": Dd.b,
        "Light Blue Firecracker Pebble": Dd.b,
        "Yellow Firecracker Pebble": Dd.b,
        "Lime Firecracker Pebble": Dd.b,
        "Pink Firecracker Pebble": Dd.b,
        "Gray Firecracker Pebble": Dd.b,
        "Light Gray Firecracker Pebble": Dd.b,
        "Cyan Firecracker Pebble": Dd.b,
        "Purple Firecracker Pebble": Dd.b,
        "Blue Firecracker Pebble": Dd.b,
        "Brown Firecracker Pebble": Dd.b,
        "Green Firecracker Pebble": Dd.b,
        "Red Firecracker Pebble": Dd.b,
        "Black Firecracker Pebble": Dd.b,
        "Blinding Pebble": Dd.b,
        Poop: Dd.b,
        "Wood Boomerang": Dd.b,
        "Stone Boomerang": Dd.b,
        "Iron Boomerang": Dd.b,
        "Gold Boomerang": Dd.b,
        "Diamond Boomerang": Dd.b,
        "Amethite Boomerang": Dd.b,
        "Magmasteel Boomerang": Dd.b,
        "Rubellite Boomerang": Dd.b,
        "Serpentite Boomerang": Dd.b,
        "Moonstone Boomerang": Dd.b,
        "67 Base Projectile": Dd.b,
        "67 Boosted Projectile": Dd.b,
        "Capitano Grenade": Dd.b,
        "Scatter Pellet": Dd.b,
        "Lucky Bomb": Dd.b,
        "Unlucky Bomb": Dd.b,
        "Swap Orb": Dd.b,
        Mesh: cd,
        AudioEntity: Pd
      }), ed
    }
  },
  37939: (BB, TB, dB) => {
    dB.d(TB, {
      d: () => pB,
      h: () => lB
    });
    var VB = dB(572),
      yB = dB(36645);
    const pB = 4e4;
    class lB {
      constructor() {
        let BB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Date.now;
        this.now = BB, this.editedAt = new Map, this.lastChunkX = NaN, this.lastChunkY = NaN, this.lastChunkZ = NaN, this.lastChunkId = ""
      }
      noteEdit(BB, TB, dB) {
        const pB = (0, VB.W)(BB),
          lB = (0, VB.W)(TB),
          JB = (0, VB.W)(dB),
          YB = this.now();
        if (pB !== this.lastChunkX || lB !== this.lastChunkY || JB !== this.lastChunkZ) {
          this.lastChunkX = pB, this.lastChunkY = lB, this.lastChunkZ = JB, this.lastChunkId = (0, yB.c)(pB, lB, JB), this.editedAt.delete(this.lastChunkId), this.editedAt.set(this.lastChunkId, YB);
          for (const [BB, TB] of this.editedAt) {
            if (TB >= YB - 3e5) break;
            this.editedAt.delete(BB)
          }
        } else this.editedAt.set(this.lastChunkId, YB)
      }
      chunksEditedSince(BB) {
        const TB = [];
        for (const [dB, VB] of this.editedAt) VB >= BB && TB.push(dB);
        return TB
      }
    }
  },
  38023: (BB, TB, dB) => {
    dB.d(TB, {
      b: () => gT,
      f: () => QT,
      j: () => wT,
      k: () => RT
    });
    var VB = dB(3191),
      yB = dB(8070),
      pB = dB(35688),
      lB = dB(1304),
      JB = dB(35725),
      YB = dB(37967),
      gB = dB(37905),
      oB = dB(3249),
      kB = dB(36788),
      LB = dB(1117),
      OB = dB(270),
      DB = dB(24),
      uB = dB(1708),
      HB = dB(95),
      EB = dB(33),
      vB = dB(1738),
      mB = dB(1652),
      iB = dB(2477);
    class NB {
      constructor(BB) {
        this.storeForMs = BB, this.clicks = new iB.e
      }
      click() {
        this.clicks.enqueue(Date.now());
        const BB = Date.now() - this.storeForMs;
        for (; this.clicks.size > 0 && this.clicks.peek() < BB;) this.clicks.dequeue()
      }
      getNumClicksInMs(BB) {
        let TB = 0;
        return this.clicks.forEach((dB => {
          dB > Date.now() - BB && TB++
        })), TB
      }
      getMaxClickSeparationInMs(BB) {
        if (0 === this.clicks.size) return this.storeForMs;
        let TB = 0,
          dB = Date.now() - BB;
        this.clicks.forEach((VB => {
          VB < Date.now() - BB || (TB = Math.max(TB, Math.abs(VB - dB)), dB = VB)
        }));
        const VB = Math.abs(Date.now() - dB);
        return Math.max(TB, VB)
      }
    }
    class tB {
      constructor(BB) {
        this.storeForMs = BB, this.clickDownDurations = new iB.e
      }
      registerClickDownDuration(BB) {
        this.clickDownDurations.enqueue({
          dur: BB,
          atTime: Date.now()
        });
        const TB = Date.now() - this.storeForMs;
        for (; this.clickDownDurations.size > 0 && this.clickDownDurations.peek().atTime < TB;) this.clickDownDurations.dequeue()
      }
      clickDownDurationsCheck(BB) {
        if (BB > this.storeForMs) return console.error("overDuration is greater than storeForMs"), "0:0";
        let TB = 0,
          dB = 0;
        return this.clickDownDurations.forEach((VB => {
          VB.atTime > Date.now() - BB && (TB++, dB = Math.max(dB, VB.dur))
        })), `${TB}:${dB}`
      }
    }
    var fB = dB(35497),
      sB = dB(38028),
      MB = dB(21),
      zB = dB(2385),
      wB = dB(1209),
      UB = dB(37951),
      FB = dB(3850),
      KB = dB(138),
      rB = dB(37093),
      IB = dB(37325),
      cB = dB(572),
      SB = dB(35488),
      PB = dB(5),
      QB = dB(8653),
      RB = dB(1105),
      aB = dB(184),
      ZB = dB(38033),
      XB = dB(38039),
      WB = dB(37131),
      hB = dB(38049),
      CB = dB(37024),
      GB = dB(2876),
      qB = dB(1507),
      xB = dB(35595),
      jB = dB(2583),
      AB = dB(38043),
      bB = dB(36852);
    const nB = {
      forward: "freeCamForward",
      backward: "freeCamBackward",
      left: "freeCamLeft",
      right: "freeCamRight",
      jump: "freeCamUp",
      crouch: "freeCamDown"
    };

    function eB() {
      var BB;
      const TB = (0, zB.b)().client;
      return (null === TB || void 0 === TB ? void 0 : TB.isReplayMode()) && (null === (BB = TB.freeCameraController) || void 0 === BB ? void 0 : BB.isEnabled())
    }

    function BT(BB) {
      const TB = BB.on.bind(BB);
      BB.on = (BB, dB) => {
        vB.x.has(BB) ? TB(BB, dB) : TB(BB, (TB => {
          var VB;
          return null !== (VB = (0, zB.b)().client) && void 0 !== VB && VB.isReplayMode() ? function(BB) {
            return BB in nB
          }(BB) && eB() ? dB(TB) : void 0 : dB(TB)
        }))
      }
    }
    const TT = 5e3,
      dT = 1;
    let VT, yT = dT,
      pT = 0;
    const lT = !0;
    let JT = lT;
    uB.c.subscribe("_ignoreBasicBoards", (BB => {
      JT = BB
    })), (0, VB.onGameReset)((() => {
      JT = lT
    }));
    let YT = null;
    const gT = () => YT;
    let oT, kT, LT;
    var OT, DT, uT, HT, ET, vT, mT, iT, NT;
    const tT = ["b", 0, 1, 8, 3, "a", 9, 73, 5, "f", 4, 255, "length", "undefined", void 0, 23, 182, 63, 6, "fromCodePoint", 7, 12, "push", "i", 167, 91, 46, 8191, 88, 13, 14, "d", 64, "c", 147, "e", !1, 38, 217, 136, 157, 96, 86, 209, 153, 2, "h", 102, "g", 98, 246, 164, 176, 33554432, 67108864, 151, 45, 199, 94, 208, 211, 44, null, 241, 10, 146, 190, 189, 29, 134, 228, 11, "j", 95, 154, 173, 55, 174, 82, 127, 128, 110, !0, 78, 183, 77, 35, "-v", ")", "l)", 201, 177, 117, 212, 103, 200];

    function fT(...BB) {
      return BB[tT[12]] = tT[2], typeof OT[BB[tT[1]]] === tT[13] ? OT[BB[tT[1]]] = function(...BB) {
        for (zT(BB[tT[12]] = tT[2], BB[tT[5]] = '|KYhIAPkNOMBqJU:l.`pt"T5fjo^9Q=w@~Rb0,CD8u<gi/[Ev1nS&XZ+(7$;?FHx3)aWsVz_4}mr2#Gd{Lce!y*]%6>', BB[tT[0]] = "" + (BB[tT[1]] || ""), BB[tT[4]] = BB[tT[0]].length, BB[tT[10]] = [], BB[tT[8]] = tT[1], BB[tT[9]] = tT[1], BB[tT[7]] = -tT[2]), BB[tT[3]] = tT[1]; BB[tT[3]] < BB[tT[4]]; BB[tT[3]]++)
          if (BB[tT[6]] = BB[tT[5]].indexOf(BB[tT[0]][BB[tT[3]]]), BB[tT[6]] !== -tT[2])
            if (BB[tT[7]] < tT[1]) BB[tT[7]] = BB[tT[6]];
            else {
              zT(BB[tT[7]] += BB[tT[6]] * tT[25], BB[tT[8]] |= BB[tT[7]] << BB[tT[9]], BB[tT[9]] += (BB[tT[7]] & tT[27]) > tT[28] ? tT[29] : tT[30]);
              do {
                zT(BB[tT[10]].push(BB[tT[8]] & tT[11]), BB[tT[8]] >>= tT[3], BB[tT[9]] -= tT[3])
              } while (BB[tT[9]] > tT[20]);
              BB[tT[7]] = -tT[2]
            } return BB[tT[7]] > -tT[2] && BB[tT[10]].push((BB[tT[8]] | BB[tT[7]] << BB[tT[9]]) & tT[11]), sT(BB[tT[10]])
      }(DT[BB[tT[1]]]) : OT[BB[tT[1]]]
    }

    function sT(...BB) {
      return BB[tT[12]] = tT[2], typeof HT !== tT[13] && HT ? (new HT).decode(new ET(BB[tT[1]])) : typeof vT !== tT[13] && vT ? vT.from(BB[tT[1]]).toString("utf-8") : NT(BB[tT[1]])
    }

    function MT() {}

    function zT() {
      zT = function() {}
    }

    function wT(BB) {
      function TB() {
        return BB.Km.gdB(BB.rK)
      }
      BT(BB.inputs.down), BT(BB.inputs.up);
      for (const VB of ["forward", "backward", "left", "right", "sprint", "jump", "crouch"]) {
        const TB = (TB, dB) => {
          var yB, pB;
          if (eB()) {
            const BB = nB[VB];
            var lB, JB;
            if (BB) null === (lB = (0, zB.b)().client) || void 0 === lB || null === (JB = lB.freeCameraController) || void 0 === JB || JB.handlefreeCamKeyPress(BB, TB, dB);
            return
          }
          if (null !== (yB = (0, zB.b)().client) && void 0 !== yB && null !== (pB = yB.freeCameraController) && void 0 !== pB && pB.isKeyPressOverriden(TB)) return;
          BB.Km.DdB()[VB] = dB
        };
        BB.inputs.down.on(VB, (BB => TB(BB, !0))), BB.inputs.up.on(VB, (BB => TB(BB, !1)))
      }
      BB.inputs.down.on("crouch", (() => {
        if (eB()) return;
        if (!BB.Jm.canCrouch) return;
        const TB = BB.Km.DdB();
        MB.d.get("clientEscMenuOptions").crouchIsToggle && (TB.crouchToggled = !TB.crouchToggled && !TB.padSneakToggled), TB.padSneakToggled = !1
      }));
      const dB = () => {
        const BB = TB();
        BB.isGun() && BB.inaccuracyCalculator.jump()
      };
      BB.inputs.down.on("jump", (BB => {
        eB() || (dB(), oT(BB))
      }));
      for (const VB of vB.i) BB.inputs.down.on(VB, (BB => {
        var TB, dB;
        null !== (TB = (0, zB.b)().client) && void 0 !== TB && null !== (dB = TB.freeCameraController) && void 0 !== dB && dB.handlefreeCamKeyPress(VB, BB, !0) && (BB.preventDefault(), BB.stopPropagation())
      })), BB.inputs.up.on(VB, (BB => {
        var TB, dB;
        null !== (TB = (0, zB.b)().client) && void 0 !== TB && null !== (dB = TB.freeCameraController) && void 0 !== dB && dB.handlefreeCamKeyPress(VB, BB, !1) && (BB.preventDefault(), BB.stopPropagation())
      }));
      BB.inputs.down.on("recordGame", (() => {
        var BB, TB;
        null === (BB = (0, zB.b)().client) || void 0 === BB || null === (TB = BB.gameRecorder) || void 0 === TB || TB.toggleRecording()
      })), BB.inputs.down.on("recordClip", (() => {
        var BB, TB;
        (0, fB.d)() || null === (BB = (0, zB.b)().client) || void 0 === BB || null === (TB = BB.gameRecorder) || void 0 === TB || TB.saveClip()
      }));
      for (const VB of vB.x) BB.inputs.down.on(VB, (() => {
        var BB;
        if ((0, sB.c)()) return;
        if ("replayViewerOpen" === VB) return void DB.h.yH("replayViewer|requested", "toggle");
        const TB = null === (BB = (0, zB.b)().client) || void 0 === BB ? void 0 : BB.gameReplayer;
        ((0, fB.d)() || null !== TB && void 0 !== TB && TB.isReplayMode()) && (null === TB || void 0 === TB || TB.handleAction(VB))
      }));
      const lB = new NB(3e4),
        kB = new tB(4e4);
      let EB = 0;
      const iB = BB => {
          let TB = 0,
            dB = null;
          const VB = TB => null !== TB && TB === dB && (dB = null, BB(), !0);
          return {
            press: () => (TB++, (0, ZB.b)() || (VB(dB), dB = TB), TB),
            owns: BB => BB === dB,
            release: VB
          }
        },
        FB = (BB, dB) => {
          dB && RT(LB.b.TouchDownFirePrimary), BB ? QB() : ((0, IB.c)(), TB().lVB()), dB || RT(LB.b.DownFirePrimary), QT(!0), lB.click();
          const yB = lB.getMaxClickSeparationInMs(3e4) < 1e3 / 30,
            pB = lB.getMaxClickSeparationInMs(1e4) < 20,
            JB = lB.getMaxClickSeparationInMs(4e3) < 1e3 / 70;
          if (yB || pB || JB) {
            let BB;
            if (yB) BB = 30;
            else if (pB) BB = 50;
            else {
              if (!JB) throw new Error("???");
              BB = 70
            }(0, VB.sendColyMessage)(oB.Dj, BB)
          }
        },
        KB = iB((() => {
          const BB = Date.now() - EB;
          kB.registerClickDownDuration(BB), TB().dVB(), RT(LB.b.UpFirePrimary), QT(!1);
          const dB = kB.clickDownDurationsCheck(4e4);
          (0, VB.sendColyMessage)(oB.fg, dB)
        }));
      let rB = 0;
      BB.inputs.down.on("primary-fire", (function(BB) {
        rB = KB.press(), KB.owns(rB) && (EB = Date.now(), Math.abs(performance.now() - BB.timeStamp) > 5e3 || (FB(BB.altKey, "changedTouches" in BB), oT(BB)))
      })), BB.inputs.up.on("primary-fire", (function(BB) {
        KB.release(rB) && oT(BB, !0)
      }));
      const cB = () => {
          TB().GgB(), RT(LB.b.DownFireSecondary), QT(!0), BB.qBB && !BB.qBB.position && (0, gB.g)()
        },
        SB = iB((() => {
          TB().TVB(), RT(LB.b.UpFireSecondary), QT(!1)
        }));
      let PB = 0;
      BB.inputs.down.on("alt-fire", (function(BB) {
        PB = SB.press(), SB.owns(PB) && (cB(), oT(BB))
      })), BB.inputs.up.on("alt-fire", (function(BB) {
        SB.release(PB) && oT(BB, !0)
      }));
      const QB = () => TB().jgB();
      BB.inputs.down.on("mid-fire", (() => {
        (0, ZB.b)() || QB()
      }));
      const hB = BB => {
          (0, VB.sendColyMessage)(oB.rh, BB)
        },
        VT = BB => {
          (0, VB.sendColyMessage)(oB.vh, {
            Og: BB,
            Dg: lT()
          })
        };
      for (const VB of ["SpecialAction1", "SpecialAction2"]) BB.inputs.down.on(VB, (() => {
        hB(VB)
      })), BB.inputs.up.on(VB, (() => {
        VT(VB)
      }));
      const pT = () => {
        const BB = TB();
        BB.isGun() && BB.reload(Date.now())
      };
      BB.inputs.down.on("ReloadGun", pT);
      const lT = () => {
        let TB = "a";
        return BB.physics.testSolid.toString().includes("rL") || (TB = "b"), TB
      };
      BB.inputs.down.on("OpenInventory", (BB => {
        BB.preventDefault(), (0, qB.u)(BB, "inventory", (0, XB.c)((0, zB.d)()))
      })), BB.inputs.bind("ShiftHeld", "ShiftLeft", "ShiftRight");
      const JT = BB => {
        DB.h.yH("DropItemKeyPressed", BB)
      };
      BB.inputs.down.on("DropItem", (() => {
        JT(BB.Km.DdB().crouch)
      })), BB.inputs.down.on("OpenShop", (TB => {
        (0, fB.d)() || "inGame" === MB.d.get("gameState") && (0, qB.s)(TB, OB.m.SHOP, !(0, yB.e)(BB.Jm.shopInfo))
      })), BB.inputs.down.on("OpenLobbyLeaderboard", (TB => {
        (0, fB.d)() || "inGame" === MB.d.get("gameState") && (0, qB.s)(TB, OB.m.LOBBY_LEADERBOARD, !!BB.Jm.lobbyLeaderboardInfo)
      })), BB.inputs.down.on("HideUi", (() => {
        DB.h.yH("showUi", !1)
      })), BB.inputs.up.on("HideUi", (() => {
        DB.h.yH("showUi", !0)
      }));
      const gT = BB => {
        0 === BB && (BB = 10), DB.h.yH("setSelectedInventorySlotI", BB - 1), DB.h.yH("numkeyPressed", BB)
      };
      for (let VB = 1; VB <= 10; VB++) BB.inputs.down.on("HotBarSlot" + VB.toString(), (() => {
        gT(VB)
      }));
      BB.inputs.down.on("OpenTasksAndLeaderboard", (TB => {
        const dB = (0, xB.j)();
        dB ? (0, qB.v)(TB, !0, dB) : (0, qB.u)(TB, "retentionFeatures", !(!BB.Jm._tasks && !BB.Jm._availableLeaderboards))
      })), BB.inputs.down.on("OpenCodeEditor", (TB => {
        (0, qB.v)(TB, (0, UB.e)((0, wB.e)()), (() => {
          DB.h.yH("EditLobbyCode", BB.Km.Dv(BB.rK).map(Math.floor))
        }))
      })), BB.inputs.bind("ToggleFullCoordinateOverlay", "F3"), BB.inputs.down.on("ToggleFullCoordinateOverlay", (() => {
        DB.h.yH("toggleFullCoordinateOverlay")
      }));
      const LT = () => {
        (0, zB.b)().client.cameraController.swapCameraZoom()
      };
      BB.inputs.down.on("SwapCameraZoom", LT), BB.inputs.down.on("OpenInviteLink", (BB => {
        (0, qB.u)(BB, "inviteLink", HB.featureFlags.canUseInviteLinks)
      })), BB.inputs.bind("Y", "KeyY"), BB.inputs.down.on("Y", (BB => {
        (0, fB.d)() || DB.h.yH("YKeyPressed")
      })), BB.inputs.bind("X", "KeyX"), BB.inputs.down.on("X", (BB => {
        (0, fB.d)() || DB.h.yH("XKeyPressed")
      })), BB.inputs.down.on("OpenEmoteWheel", (() => {
        DB.h.yH("requestEmoteWheelHoldOpen")
      })), BB.inputs.up.on("OpenEmoteWheel", (() => {
        DB.h.yH("requestEmoteWheelHoldRelease")
      })), BB.inputs.down.on("Zoom", (() => {
        if ("inGame" === MB.d.get("gameState")) {
          BB.Km.getState(BB.rK, "playerCameraAdjustment").zoomKeyPressed = !0, (0, zB.b)().client.cameraController.handleZoomKeyPressed()
        }
      })), BB.inputs.up.on("Zoom", (() => {
        BB.Km.getState(BB.rK, "playerCameraAdjustment").zoomKeyPressed = !1
      })), UT();
      const OT = BB => function() {
        return kT(), BB(...arguments)
      };

      function DT(BB) {
        "inGame" !== MB.d.get("gameState") || (0, qB.o)() || (DB.h.yH("ctrlCrouchWithoutFullscreen"), BB.preventDefault())
      }
      YT = {
        primaryFireDown: OT((() => {
          const BB = KB.press();
          return KB.owns(BB) && (EB = Date.now(), FB(!1, !1)), BB
        })),
        primaryFireUp: OT((BB => {
          KB.release(BB)
        })),
        altFireDown: OT((() => {
          const BB = SB.press();
          return SB.owns(BB) && cB(), BB
        })),
        altFireUp: OT((BB => {
          SB.release(BB)
        })),
        jumpDown: OT(dB),
        specialActionDown: OT(hB),
        specialActionUp: OT(VT),
        reloadGun: OT(pT),
        dropItem: OT(JT),
        swapCameraZoom: OT(LT),
        aE: OT(QB)
      }, BB.inputs.down.on("ctrlCrouch", DT), BB.inputs.up.on("ctrlCrouch", DT), BB.inputs.bind("ctrlCrouch", "ControlLeft");
      const uT = BB => {
        "inGame" === MB.d.get("gameState") && BB.ctrlKey && !(0, qB.o)() && BB.preventDefault()
      };
      document.addEventListener("keydown", uT), document.addEventListener("keyup", uT), document.addEventListener("keypress", uT), BB.inputs.bind("Alt", "AltLeft", "AltRight"), BB.inputs.down.on("Alt", (BB => {
        BB.preventDefault()
      }));
      const HT = TB => (0, CB.j)(BB, TB),
        ET = TB => (0, CB.k)(BB, TB),
        vT = [0, 0, 0],
        mT = [0, 0, 1];
      BB.on("afterRender", (TB => {
        (0, pB.f)(BB.camera.heading), (0, CB.o)(BB, vT, mT), (0, zB.b)().client.triggerGameCallback("onAfterRender", TB, {
          cameraHeading: BB.camera.heading,
          cameraPitch: BB.camera.pitch,
          cameraPosition: vT,
          cameraDirection: mT,
          tanHalfFovX: (0, CB.e)(BB),
          tanHalfFovY: Math.tan(BB.yu.hA().fov / 2),
          screenBandPct: {
            x: GB.d,
            y: (0, GB.m)()
          },
          projectWorldPosToScreenPos: HT,
          projectWorldPosToViewport: ET
        })
      })), (0, jB.n)("look") && (BB.camera.vW = (0, AB.j)("js"), BB.inputs.uC = AB.h), (0, jB.n)("remesh") && (0, bB.d)(BB), BB.on("beforeInputs", (() => {
        if ((0, sB.c)()) return BB.inputs.mC.dx = 0, void(BB.inputs.mC.dy = 0);
        if (BB.camera.mC.dx += BB.inputs.mC.dx, BB.camera.mC.dy += BB.inputs.mC.dy, 0 !== BB.inputs.mC.dx || 0 !== BB.inputs.mC.dy) {
          BB.Km.getState(BB.rK, "playerCameraAdjustment").lastPointerMove = Date.now()
        }
        BB.inputs.mC.dx = 0, BB.inputs.mC.dy = 0
      }));
      let iT = 0;
      BB.on("dL", (function(TB) {
        DB.h.yH("noaTick", TB);
        const dB = (0, zB.b)().client;
        if (dB.triggerGameCallback("dL", TB), dB.isClientGameSessionActive()) try {
          YB.c.dL(TB)
        } catch (lB) {
          console.error("Error ticking audio entities", lB)
        }
        if (!BB.Km.JdB(BB.rK).isAlive) return;
        Date.now() - iT > 9e3 && (! function() {
          const BB = (0, zB.d)();
          "number" === typeof BB.Jm.speedMultiplier && "number" === typeof BB.Jm.jumpAmount && (0, VB.sendColyMessage)(oB.Ph, {
            ro: (0, RB.f)(BB.Jm.speedMultiplier),
            Io: (0, RB.e)(BB.Jm.jumpAmount),
            Po: (0, RB.f)(BB.Jm.crouchingSpeed),
            Qo: (0, RB.f)(BB.Jm.walkingSpeed),
            Ro: (0, RB.f)(BB.Jm.runningSpeed),
            ao: (0, RB.e)(BB.PBB),
            Zo: BB.Km.mTB(BB.rK).jumpForce,
            Xo: BB.Km.mG(1).width,
            Wo: BB.Km.mG(1).height,
            ho: BB.Km.RZ(1).ho
          }, !0)
        }(), iT = Date.now());
        const yB = BB.Km.DdB();
        if ((yB.jump || yB.forward || yB.backward || yB.left || yB.right || yB.sprint) && DB.h.yH("usedKeyboard"), BB.Km.CTB(BB.rK) && !0 === BB.Jm.canPickUpItems) {
          const TB = BB.Km.Dv(BB.rK),
            dB = (0, mB.l)(yT),
            yB = (0, mB.o)(yT),
            pB = [TB[0] - dB, TB[1] - .6 * yB, TB[2] - dB],
            lB = [TB[0] + dB, TB[1] + aB.c.kE + .6 * yB, TB[2] + dB],
            YB = BB.Km.xJB({
              base: pB,
              max: lB
            }, BB.Km.names.autoRotate),
            kB = BB => {
              const TB = aB.c.droppedBlockSize / 2;
              return [0, 1, 2].every((dB => BB[dB] >= pB[dB] - TB && BB[dB] <= lB[dB] + TB))
            },
            {
              itemDropPrediction: LB
            } = (0, zB.b)().client,
            OB = VB.offlineInputReplay.holdsInput();
          if (YB.length > 0)
            for (const DB of YB) {
              const TB = BB.Km.getState(DB, "itemState");
              if (void 0 === TB || Date.now() - TB.creationTime < 500) continue;
              let dB = DB,
                yB = null;
              if (TB.ty) {
                const BB = LB.pickupTarget(DB, kB, OB);
                if (null === BB) continue;
                ({
                  Pg: dB,
                  ag: yB
                } = BB)
              }
              const pB = BB.Km.getState(dB, "itemState");
              if (pB.ty && null === yB) continue;
              let lB = 0,
                YB = null,
                uB = !1;
              if (0 === pB.amount) uB = !0;
              else {
                const {
                  amountPickedUp: TB
                } = BB.Km.WTB(BB.rK).pickUpItem({
                  name: pB.name,
                  typeObj: pB.typeObj,
                  amount: pB.amount,
                  attributes: pB.attributes
                });
                if (lB = TB, 0 === lB) continue;
                YB = WB.d.pickUp(pB, lB), pB.amount -= lB, pB.amount < 0 ? console.error("Picking up led to less than 0 of item!") : 0 === pB.amount ? uB = !0 : pB.creationTime = Date.now() + TT
              }
              const HB = (0, zB.b)().client.inventoryPrediction.record(YB);
              (0, VB.sendColyMessage)(oB.ph, {
                Pg: null === yB ? dB : "",
                Qg: lB,
                Rg: gB.f,
                Dl: HB,
                ag: yB
              }, !0), uB && (OB && LB.onPickedUpOffline(dB, HB, yB), null === yB && BB.Km.deleteEntity(dB));
              JB.d.play("pickUp", aB.c.pickupSoundVol).rate(1 + Math.random() * aB.c.pickupSoundRateVariation)
            }
        }
        if (!BB.Km.ITB(BB.rK)) return;
        const pB = BB.inputs.mC.sTB;
        if (0 !== pB) {
          const TB = pB > 0 ? 1 : -1;
          BB.inputs.state["mid-fire"] || BB.inputs.state.Alt || !BB.Jm.useInventory ? (BB.inputs.state["mid-fire"] && DB.h.yH("requestEmoteWheelClose"), (0, zB.b)().client.cameraController.handleScrollZoom(TB)) : DB.h.yH("ScrollInventorySlot", TB)
        }
      })), uB.c.subscribe("droppedItemScale", (BB => {
        yT = "number" === typeof BB && isFinite(BB) ? BB : dT
      }))
    }

    function UT() {
      const BB = (0, zB.d)();
      if (BB)
        for (const TB in vB.r) {
          BB.inputs.unbind(TB);
          for (const dB of vB.r[TB]) BB.inputs.bind(TB, dB)
        }
    }
    zT(OT = {}, DT = [";HH}&r=q{?H}lehw]SH&ibMNnx<v]Y<jU,Tk9", '1ZYSncv{PM~4+:P,}5OPBCwu9"^$_$@=z<2oG/R{S7b4~1IC+|', "U_l^dV3f17)#VJhf07h", "[_5ZubY<kJ2mK,4p2|", "*jim34Lb.q:d@e?0?Z,&>CKXkJkZV?$9FOD220l*j)s(3^c89K", "J1TOyn;V.OL:&:W=H}~=3d_K", 'GzH&T7/V=aRf<1ODTS2n5G8qM.7zWzdDnt!oy;.KTp"+Dc$u{/,mis%R8J+zK', 'cS0m^85Q{:{(Ff#D2/A+CZ"JbO(&%b*90s|PsHqY', "~?g@)?@f0Jgb)0qtI_Wn@GoY", "3;0+K*$=Ja?(K", "g5x2ZzSk|?%[;CzC#/*2^ZDki.j^K", '[P+ImHs$mtNZs^WfsvFw]Vi`"$6W!:A`.:w&UvJk&Z6[BCD,)Ou^q', "X7Mre/Ajm;(", "J8mN;[9=}.;", 'Qg:OBCJKG:ymt_gj}PF+"', "g.V+{_hXC$g&|_8`nZ1^bGv[d(>WVvv8.`#_QFy5^Ui", "2HmX}2N&}.ks{fAjl[aQc/Eu2Hr1:Uy^%Uh", "M76@rv.u.`6z<oz,6;5GPV|", "o?Y4]~P&/XajSU/owQE&#7U3P", 'sZ+2A0}Q2)wV4f"9`:CIwZs=::qrm1TRe;Vm+$.Jk3ohYjeR8mvOzm#K', "nZ*_S,dKk$xzC1gCU8EO<r]u~Zcj9h4jKZpm%7:X[xD", '`x#nn(5X_$(1bU@=&v/+C{dK@7WjJl#DC_UOS(z=p3emdC|<Ts"I', '?.cSH#[Y#H"+$V>ld/R4X!Jx4$;', 'qI{P.04`J"8}(h=QP7R#6eQX7t@t7I4Cx5*k:HyK', "<7,w2HwE}tfHq^c9YghQCEdynZqt3;}pw7Pw<,)K", "zvn^a4}7$)pheY/C<_3O6&~b`?~.%:7Ry}JMHXOuNMNO2:kjI`Imq", "69{1`7QpsZG1I:f<", '+Z@PR}WSY:t,yvF.MmEO"eBu%JD}dC$uw[<@>Zm&cpK4ih', 'd)POzmfY="J+qE_jHs/9VXbJKO#QYA2C$H@1*y`&7)y`4^/owK', "58u^q*2q8.|Ox$n8cv?XG/LKM.FB$Jmj};(}1,q$G`b;TA", 'Cq|ZOHkk{qeQbny^w?j=Hmf{"J`dhoZuXoVk', ':Z5IqHdyAJs#he6b"m1S#0;5e7*T?hU8b:hQgx7x&3j', '6hNP"Vm`vxGzYA~fk[SXm76u[N2mW;5RA5d9qn|', '1o/mixukHB@V6{h=rU8O`&^QVp{0VI|Q"QY', "[q8=|[<fJUQRlh/C`xj=E#OjmH=dBe2C*9o@A0Bp@ao", "2)#od0f[uHU$Av^54sz_k?JuTJab9hM", '`P591S9Nv"NJ@e#DWZ!A0r[q4J@4K', 'VS/&j7y5`7"tcV&RT_K', 'QmOG.&U3{?4W8E$Qd9yo5_ydE"_Tq;F0#5h#k0t0C$PEKlDwa|', "0_<r98&Y3x:+EUTbwZRS|*/K", "@5n^*nDx*3n{s;iDL(Y", "VhC+R12*XpcTGV;.No/+sXU*t3&V%eI`Ht,+%nXu:`qMJ!mCK1U~T", "QOK=`e7bUab4RC[8}(U&sRSQjH@4Q,)5r/0wib9Nh70f3h2p^?+2X$|", "98+9jy$$NtyWZc2C", "VO5OU+|`UxcQ3hsj(vD}s47Qf)a{:cXu", "%N1SH!;QH(ft[jx<@R`@:n8q|?hE>LV,_wuSQ{QkQ`kc&h", "ugeNO728tJ4zUn%bq@JM#2Ap)7UHGV/D", "},2#H$bb;;&kF?3<%|", 'qx+O";#yg.uhSC<jJ?dIqVOjgNlr%I', '^Z7Z`G;E`Z,"yv$9=?O=AX|<9UnUND1DfO:&H!AkY7Z1j0mC]<U2ixgJ{O;', 'h:U+e/#S03B$D$R,BI7PTn($="c`GVN', "3S%1A4Cq`qB=bou`EZ4O9Z`Y37%z(v`R4HK", "UxeQ,F|fzJ2BK", "]9sn>e~7oHG:L{jQX8h", "N7kZl&65x`s;%;x={jd&VXTYc7v2K", "v7Z9Sc9`*psX4_NoZtP&5EQL<H7{v^H<:gS#YLG&[xd[?h", 'uS~@lCQQ5J"VTFQ5.oT+vxU&HXV1t_gC]|', "bv:PoeW71:J4RAmDNxnN", "Kx$#$$P<I", "@ZfSjeZ{6)tM5c><T:2mPX=fi;L1dz[8%R]I._xSMU*x9^c^x.|P=", "m<QMN*d78JtM0ENo)S#9n#upRx<HWUz`%<XM", ":[GO:LQrKO@;3e}j%./wZ4_JXJ=tEzt^9[kOF$iYb?|r:et^!}Y", "qqW@GC2R1x%mK", "BxO@[#GqoUz{Fj(9p7g4OV,pkM,45Eyb=[N~8EN*R?Q&mj(<dHV9O2U[7H,", '6HK@"ycRA$}KAlQ=+7ZO&zn89.]#cUBDOqrXhm7ucpvfI_L^.xIM', "8sF&Es==RO>APA%b9K", 'R7n4IRx7vq);<,4`6BJ+"2P<vXPRDow0B@[kH4jL.:', "dtC&`0bEgUZz)jAg:1COQ;|", "lZn#U+2$1?)zFj8w^[;#XD^k0p!WEYJ", '(H+99bhjP$cBLI5u"_emfe[qCJwUg$&9Sv$SF4yyU`Ttg$M', "#9o^1!`YAZMSZ1<CSZ3ZgZ28Sp", "^oK=!nL7eOXx|_w.6vLZY*5ErUXIu4c95s?mO2dxP", "as=w|R`Y", "YZZI_RT&zJ_aa,nRDto^Dy+E/`>z!;9<)P5}bG|", "7)T1n[wxhO#L2:}p(S51|ROp<.<UXlhgM1zkz?^u@`v1y0w<9[9mlL_uR:ghK", 'mHR4fe#uv"7BcjF.5)@}RF8fH(Yr>YMj3sh@57^khO!@@e,,%v|~r7?=f)D', "Ps8}hdXJdq^tyfAgsPLSV+kjnOr#ehy8m.EO@_*R8.K~le?0%)O=l", "9?%1fn:ktO", "{zNO+,+kx:PR8hfuN[K=Bv8&FB$@[1)fe<59(c1Ek", "gRGwkXl$hO", "x)1Sp_X5~O!?VI75?t&MDcH`iXn", "sPymV0/bMH=45o`t6hh", "/,jrR;wQU:<._o>bt?C&Q", 'CZo^}V{Rz3Twbn"^ZqjZeGbkyJ.c+$8ohQQw_+gp"Zz`sh', "U_YA0E%m/X!`Kl%l;ZB4kdhrI", "yvsk}2bb?Nx[X4Cjr,h", 'ntCke7[&/X[+Nelo"5:~_HUzG`<"wC6l}/SXo;<qDty?fEOw5mY', "`ZFw%&$Y2)M5{^Pf`::~^Zn[Mt0a6IR5`:fPa4)7/H~", "Q:QM_duLK:4#S$%RH.Ak;[Nf6.j$Kl^<!z.@9GApK`y@<FOprPx9??9Y", 'AsP&@{"prH0VKl"R~qC2DrY`v?;"EUybZ7TI9', "{Sl~l&6K.Zjh%hOw_Ox2e_+b}.Rd)V=.A_IMY*&Y", "iH*k_HlzIZeN2^5b~Qj^IXJpN)iaA?^.<)_2zXTY", "15RYgMfn", "fn$~T.}Mn12[Pjhh{%oQ$$e6}@v,:Hi", "JQdL#$9))I%", 'l^"k6oX}', "+u`$G$J}", "l^}$b&)}", "rfcC6I%l", "K*mnqXAL", ',>{nva_A5F+IbsDoy%`httx0J.OmcRDoJQ;jJy,(#Wm"H/y>R>M^h', ",>{nva_A5F+IbsDoy%`httx0J.OmcRDoIPGj44!Lyv+9k;b:S1", "]PmnIYf(K|`[:{J}}PHETtIL+u)9QIyTlCb9j", "Iv*t", "WV(j^@t/", "(qW,HV@&", "Nva_bg.8", "VtKZeeOK", "CRlOTvPN", '!h9O6|.P"f*obL(k]rDx,,>u%yHl^:(k%@?K%]!_FdlMqZ]h:h`cx', "Frf=qxGw.!M&_>ItWVkZ{{:gcR~*]0It&);o$$v+WqMEi2_D71", 'qB(Q*w)&/Feg:K!>>B$Wz5*^j";=D*`zf|r=a', "7g!^", "e.cSr/k3", "F=zvvYZ;", "8&4K%$8]", "[nR=fj|;", "bz,l+<`=", "U;p)Czd=", '(f,S`yu"', '!.rTyPG"', '.k,l/e/2X3hB"jhC0!D', 'J=UH~C(2A0V{"j).qv=', 'ZE7)"AGRALsz=!eplGD', 'hC%gho)[z@Vv"j|;1E=', ':V^K#1}"t|+UznqK@JCS*p5v.]R{E2Z~$E3cIw,MR]iiz=', 'sJcU>}Uv.]XUD}].&&sP)7R7C/+U"UuL:{{)Yhx3@;a3L"', "?&>S$lb;R~F&nj0*D$tD^bG20iVbbj#LWncU=MUv.]|Gd!", 'RR9S7M[vQiz&`jG6)R9S0}evg>k&6j%ueE&)dz"k(HrFF=', "5Cl!", "*l5}Hs[;", "_5u}cT#;", "+G6knt[;", "P.J!#LF3", "TEMf8/]", "PjcSS/73", "PzZ=crj3", "oi#>%$]", "Pj^gpt6;", "u4/oP!U?4lYa%1cc5hr>//fEUTFxSGe", "~;[SlAkxxK}", ",&_cQV[p", "GdL=z=qp", ",&p=|KAp", 'rS^/S"jT', "[M,V", '"jJhe1;T', "S5|!=uG", ",#=dS,9/", "GVaE{bQ", "WACPaR+D"]), zT(uT = function() {
      var BB, TB, dB, VB = [function() {
        return globalThis
      }, function() {
        return global
      }, function() {
        return window
      }, function() {
        return new Function("return this")()
      }];
      zT(BB = void 0, TB = []);
      try {
        zT(BB = Object, TB[tT[22]]("".__proto__.constructor.name))
      } catch (ET) {}
      BB: for (dB = tT[1]; dB < VB[tT[12]]; dB++) try {
        var yB;
        for (BB = VB[dB](), yB = tT[1]; yB < TB[tT[12]]; yB++)
          if (typeof BB[TB[yB]] === tT[13]) continue BB;
        return BB
      } catch (ET) {}
      return BB || this
    }() || {}, HT = uT.TextDecoder, ET = uT.Uint8Array, vT = uT.iD, mT = uT.String || String, iT = uT.Array || Array, NT = function(...BB) {
      return zT(BB[tT[12]] = tT[1], BB[tT[5]] = new iT(tT[80]), BB[tT[2]] = mT[tT[19]] || mT.fromCharCode, BB[tT[15]] = []),
        function(...TB) {
          for (zT(TB[tT[12]] = tT[2], TB[tT[2]] = tT[14], TB[tT[16]] = tT[14], TB[tT[4]] = TB[tT[1]][tT[12]], BB[tT[15]][tT[12]] = tT[1]), TB[tT[10]] = tT[1]; TB[tT[10]] < TB[tT[4]];) zT(TB[tT[16]] = TB[tT[1]][TB[tT[10]]++], TB[tT[16]] <= tT[79] ? TB[tT[2]] = TB[tT[16]] : TB[tT[16]] <= 223 ? TB[tT[2]] = (31 & TB[tT[16]]) << tT[18] | TB[tT[1]][TB[tT[10]]++] & tT[17] : TB[tT[16]] <= 239 ? TB[tT[2]] = (15 & TB[tT[16]]) << tT[21] | (TB[tT[1]][TB[tT[10]]++] & tT[17]) << tT[18] | TB[tT[1]][TB[tT[10]]++] & tT[17] : mT[tT[19]] ? TB[tT[2]] = (TB[tT[16]] & tT[20]) << 18 | (TB[tT[1]][TB[tT[10]]++] & tT[17]) << tT[21] | (TB[tT[1]][TB[tT[10]]++] & tT[17]) << tT[18] | TB[tT[1]][TB[tT[10]]++] & tT[17] : (TB[tT[2]] = tT[17], TB[tT[10]] += tT[4]), BB[tT[15]][tT[22]](BB[tT[5]][TB[tT[2]]] || (BB[tT[5]][TB[tT[2]]] = BB[tT[2]](TB[tT[2]]))));
          return BB[tT[15]].join("")
        }
    }()), zT(LT = (...BB) => {
      BB[tT[12]] = tT[2],
        function(...BB) {
          return BB[tT[12]] = tT[2], typeof OT[BB[tT[1]]] === tT[13] ? OT[BB[tT[1]]] = function(...BB) {
            for (zT(BB[tT[12]] = tT[2], BB[tT[43]] = '&JlNpTHKPCQZdoscbVmh@XFn~3Ly5^%<4u7;!BgAGiYkzWv/6|e8}U=(#[E`MDO]afj)2xtSR$q0,*{1"_I+.wr9>:?', BB[tT[40]] = "" + (BB[tT[1]] || ""), BB[tT[33]] = BB[tT[40]].length, BB[-tT[41]] = [], BB[-tT[44]] = tT[1], BB[tT[18]] = tT[1], BB[tT[20]] = -tT[2]), BB[-tT[42]] = tT[1]; BB[-tT[42]] < BB[tT[33]]; BB[-tT[42]]++)
              if (BB[-tT[7]] = BB[tT[43]].indexOf(BB[tT[40]][BB[-tT[42]]]), BB[-tT[7]] !== -tT[2])
                if (BB[tT[20]] < tT[1]) BB[tT[20]] = BB[-tT[7]];
                else {
                  zT(BB[tT[20]] += BB[-tT[7]] * tT[25], BB[-tT[44]] |= BB[tT[20]] << BB[tT[18]], BB[tT[18]] += (BB[tT[20]] & tT[27]) > tT[28] ? tT[29] : tT[30]);
                  do {
                    zT(BB[-tT[41]].push(BB[-tT[44]] & tT[11]), BB[-tT[44]] >>= tT[3], BB[tT[18]] -= tT[3])
                  } while (BB[tT[18]] > tT[20]);
                  BB[tT[20]] = -tT[2]
                } return BB[tT[20]] > -tT[2] && BB[-tT[41]].push((BB[-tT[44]] | BB[tT[20]] << BB[tT[18]]) & tT[11]), sT(BB[-tT[41]])
          }(DT[BB[tT[1]]]) : OT[BB[tT[1]]]
        }(tT[49]) in MT && function(...BB) {
          BB[tT[12]] = tT[1]
        }(), BB[tT[2]] = tT[1];
      for (const TB in BB[tT[1]]) {
        function dB(...BB) {
          for (zT(BB[tT[12]] = tT[2], BB[tT[5]] = '.u/5;]<9:Rv3Am1?BsrfCI}wDQ,~dlgN)Pt!E(x>HFki_=UT2MeGj@SJyh%bcOzW7q^aV"L#*$`{84KX+Zn0[Yo&|6p', BB[tT[0]] = "" + (BB[tT[1]] || ""), BB[tT[51]] = BB[tT[0]].length, BB[tT[31]] = [], BB[tT[8]] = tT[1], BB[tT[9]] = tT[1], BB[tT[52]] = -tT[2]), BB[tT[3]] = tT[1]; BB[tT[3]] < BB[tT[51]]; BB[tT[3]]++)
            if (BB[tT[6]] = BB[tT[5]].indexOf(BB[tT[0]][BB[tT[3]]]), BB[tT[6]] !== -tT[2])
              if (BB[tT[52]] < tT[1]) BB[tT[52]] = BB[tT[6]];
              else {
                zT(BB[tT[52]] += BB[tT[6]] * tT[25], BB[tT[8]] |= BB[tT[52]] << BB[tT[9]], BB[tT[9]] += (BB[tT[52]] & tT[27]) > tT[28] ? tT[29] : tT[30]);
                do {
                  zT(BB[tT[31]].push(BB[tT[8]] & tT[11]), BB[tT[8]] >>= tT[3], BB[tT[9]] -= tT[3])
                } while (BB[tT[9]] > tT[20]);
                BB[tT[52]] = -tT[2]
              } return BB[tT[52]] > -tT[2] && BB[tT[31]].push((BB[tT[8]] | BB[tT[52]] << BB[tT[9]]) & tT[11]), sT(BB[tT[31]])
        }

        function VB(...BB) {
          return BB[tT[12]] = tT[2], typeof OT[BB[tT[1]]] === tT[13] ? OT[BB[tT[1]]] = dB(DT[BB[tT[1]]]) : OT[BB[tT[1]]]
        }

        function yB(...BB) {
          function TB(...BB) {
            return BB[tT[12]] = tT[2], BB[tT[1]][tT[2]] * tT[54] + (BB[tT[1]][tT[1]] < tT[1] ? tT[53] | BB[tT[1]][tT[1]] : BB[tT[1]][tT[1]])
          }

          function dB(...BB) {
            switch (BB[tT[12]] = tT[2], ((BB[tT[1]] & tT[53]) !== tT[1]) * tT[2] + (BB[tT[1]] < tT[1]) * tT[45]) {
              case tT[1]:
                return [BB[tT[1]] % tT[53], Math.trunc(BB[tT[1]] / tT[54])];
              case tT[2]:
                return [BB[tT[1]] % tT[53] - tT[53], Math.trunc(BB[tT[1]] / tT[54]) + tT[2]];
              case tT[45]:
                return [((BB[tT[1]] + tT[53]) % tT[53] + tT[53]) % tT[53], Math.round(BB[tT[1]] / tT[54])];
              case tT[4]:
                return [BB[tT[1]] % tT[53], Math.trunc(BB[tT[1]] / tT[54])]
            }
          }
          BB[tT[12]] = tT[1], zT(BB[tT[43]] = TB([tT[45], tT[10]]), BB[tT[55]] = TB([tT[2], tT[45]]), BB[-tT[56]] = BB[tT[43]] + BB[tT[55]], BB[-tT[57]] = BB[-tT[56]] - BB[tT[55]], BB[tT[35]] = BB[-tT[57]] * tT[45], BB[tT[8]] = BB[tT[35]] / tT[45], console.log(dB(BB[-tT[56]])), console.log(dB(BB[-tT[57]])), console.log(dB(BB[tT[35]])), console.log(dB(BB[tT[8]])))
        }
        VB(104) in MT && yB(), BB[tT[2]]++
      }
      return BB[tT[2]]
    }, kT = (...BB) => {
      if (BB[tT[12]] = tT[1], function(...BB) {
          return BB[tT[12]] = tT[2], typeof OT[BB[tT[1]]] === tT[13] ? OT[BB[tT[1]]] = function(...BB) {
            for (zT(BB[tT[12]] = tT[2], BB[-tT[60]] = 'B&OmSN0+fWu2"n}hy?M!.;Z]1HAb^J`F3:9|=T%Q[dw@KqReg>LU)#*7IxrVPcoz45(vEj6Y,$ks_/D<8{~CptGlXai', BB[tT[45]] = "" + (BB[tT[1]] || ""), BB[tT[59]] = BB[tT[45]].length, BB[tT[10]] = [], BB[tT[35]] = tT[1], BB[tT[18]] = tT[1], BB[-tT[37]] = -tT[2]), BB[-tT[58]] = tT[1]; BB[-tT[58]] < BB[tT[59]]; BB[-tT[58]]++)
              if (BB[tT[23]] = BB[-tT[60]].indexOf(BB[tT[45]][BB[-tT[58]]]), BB[tT[23]] !== -tT[2])
                if (BB[-tT[37]] < tT[1]) BB[-tT[37]] = BB[tT[23]];
                else {
                  zT(BB[-tT[37]] += BB[tT[23]] * tT[25], BB[tT[35]] |= BB[-tT[37]] << BB[tT[18]], BB[tT[18]] += (BB[-tT[37]] & tT[27]) > tT[28] ? tT[29] : tT[30]);
                  do {
                    zT(BB[tT[10]].push(BB[tT[35]] & tT[11]), BB[tT[35]] >>= tT[3], BB[tT[18]] -= tT[3])
                  } while (BB[tT[18]] > tT[20]);
                  BB[-tT[37]] = -tT[2]
                } return BB[-tT[37]] > -tT[2] && BB[tT[10]].push((BB[tT[35]] | BB[-tT[37]] << BB[tT[18]]) & tT[11]), sT(BB[tT[10]])
          }(DT[BB[tT[1]]]) : OT[BB[tT[1]]]
        }(105) + "I" in MT && function(...BB) {
          function TB() {}
          BB[tT[12]] = tT[1], zT(BB[-tT[65]] = function(...BB) {
            for (zT(BB[tT[12]] = tT[45], BB[tT[45]] = tT[1], BB[tT[0]] = tT[1], BB[tT[61]] = new TB(tT[1]), BB[tT[8]] = BB[tT[61]], BB[tT[18]] = BB[tT[1]], BB[tT[63]] = BB[tT[2]]); BB[tT[18]] !== tT[62] || BB[tT[63]] !== tT[62];) zT(BB[tT[0]] = (BB[tT[18]] ? BB[tT[18]].val : tT[1]) + (BB[tT[63]] ? BB[tT[63]].val : tT[1]) + BB[tT[45]], BB[tT[45]] = Math.floor(BB[tT[0]] / tT[64]), BB[tT[8]].next = new TB(BB[tT[0]] % tT[64]), BB[tT[8]] = BB[tT[8]].next, BB[tT[18]] = BB[tT[18]] ? BB[tT[18]].next : tT[62], BB[tT[63]] = BB[tT[63]] ? BB[tT[63]].next : tT[62]);
            return BB[tT[45]] && (BB[tT[8]].next = new TB(BB[tT[45]])), BB[tT[61]].next
          }, console.log(BB[-tT[65]]))
        }(), pT++ === tT[8]) {
        if ((0, EB.o)()) {
          function TB(...BB) {
            for (zT(BB[tT[12]] = tT[2], BB[tT[2]] = 'UF8:rHR$|_`{^wv2/43@%f}zbGcj9]JmA5o?VyLki7.Z>!MqSx)ngP1Yu~W(Ot"Qp+B0TC6h=<XKsE#alNeD,;[&I*d', BB[tT[0]] = "" + (BB[tT[1]] || ""), BB[tT[4]] = BB[tT[0]].length, BB[tT[68]] = [], BB[tT[35]] = tT[1], BB[tT[9]] = tT[1], BB[-tT[67]] = -tT[2]), BB[tT[46]] = tT[1]; BB[tT[46]] < BB[tT[4]]; BB[tT[46]]++)
              if (BB[tT[66]] = BB[tT[2]].indexOf(BB[tT[0]][BB[tT[46]]]), BB[tT[66]] !== -tT[2])
                if (BB[-tT[67]] < tT[1]) BB[-tT[67]] = BB[tT[66]];
                else {
                  zT(BB[-tT[67]] += BB[tT[66]] * tT[25], BB[tT[35]] |= BB[-tT[67]] << BB[tT[9]], BB[tT[9]] += (BB[-tT[67]] & tT[27]) > tT[28] ? tT[29] : tT[30]);
                  do {
                    zT(BB[tT[68]].push(BB[tT[35]] & tT[11]), BB[tT[35]] >>= tT[3], BB[tT[9]] -= tT[3])
                  } while (BB[tT[9]] > tT[20]);
                  BB[-tT[67]] = -tT[2]
                } return BB[-tT[67]] > -tT[2] && BB[tT[68]].push((BB[tT[35]] | BB[-tT[67]] << BB[tT[9]]) & tT[11]), sT(BB[tT[68]])
          }

          function dB(BB) {
            return typeof OT[BB] === tT[13] ? OT[BB] = TB(DT[BB]) : OT[BB]
          }

          function VB(...BB) {
            zT(BB[tT[12]] = tT[1], BB[tT[5]] = function(...BB) {
              if (zT(BB[tT[12]] = tT[2], BB[tT[2]] = BB[tT[1]].length), BB[tT[2]] < tT[45]) return tT[1];
              if (zT(BB[tT[0]] = Math.max(...BB[tT[1]]), BB[tT[33]] = Math.min(...BB[tT[1]])), BB[tT[0]] === BB[tT[33]]) return tT[1];
              for (zT(BB[-tT[70]] = Array(BB[tT[2]] - tT[2]).fill(Number.MAX_SAFE_INTEGER), BB[tT[8]] = Array(BB[tT[2]] - tT[2]).fill(Number.MIN_SAFE_INTEGER), BB[tT[9]] = Math.ceil((BB[tT[0]] - BB[tT[33]]) / (BB[tT[2]] - tT[2])), BB[tT[48]] = tT[1]), BB[tT[69]] = tT[1]; BB[tT[69]] < BB[tT[2]]; BB[tT[69]]++) BB[tT[1]][BB[tT[69]]] !== BB[tT[33]] && BB[tT[1]][BB[tT[69]]] !== BB[tT[0]] && zT(BB[tT[48]] = Math.floor((BB[tT[1]][BB[tT[69]]] - BB[tT[33]]) / BB[tT[9]]), BB[-tT[70]][BB[tT[48]]] = Math.min(BB[-tT[70]][BB[tT[48]]], BB[tT[1]][BB[tT[69]]]), BB[tT[8]][BB[tT[48]]] = Math.max(BB[tT[8]][BB[tT[48]]], BB[tT[1]][BB[tT[69]]]));
              for (zT(BB[tT[23]] = Number.MIN_SAFE_INTEGER, BB[tT[72]] = BB[tT[33]]), BB[tT[71]] = tT[1]; BB[tT[71]] < BB[tT[2]] - tT[2]; BB[tT[71]]++) BB[-tT[70]][BB[tT[71]]] === Number.MAX_SAFE_INTEGER && BB[tT[8]][BB[tT[71]]] === Number.MIN_SAFE_INTEGER || zT(BB[tT[23]] = Math.max(BB[tT[23]], BB[-tT[70]][BB[tT[71]]] - BB[tT[72]]), BB[tT[72]] = BB[tT[8]][BB[tT[71]]]);
              return BB[tT[23]] = Math.max(BB[tT[23]], BB[tT[0]] - BB[tT[72]]), BB[tT[23]]
            }, console.log(BB[tT[5]]))
          }
          dB(106) in MT && VB(), (0, kB[tT[31]])("4 ")
        }
        pT = tT[1]
      }
    }), oT = function(BB) {
      function TB(...BB) {
        return BB[tT[12]] = tT[2], typeof OT[BB[tT[1]]] === tT[13] ? OT[BB[tT[1]]] = function(...BB) {
          for (zT(BB[tT[12]] = tT[2], BB[-tT[73]] = '];3{}[=#&1!0:2`._RPUcJaemqkK7ups(hOAF5",tB?CQlX%oID*vfgWyibTj~E^@<dV+)YzHGL$>Sr|8/46MnNw9Zx', BB[-tT[74]] = "" + (BB[tT[1]] || ""), BB[tT[33]] = BB[-tT[74]].length, BB[tT[31]] = [], BB[tT[35]] = tT[1], BB[-tT[75]] = tT[1], BB[tT[59]] = -tT[2]), BB[tT[46]] = tT[1]; BB[tT[46]] < BB[tT[33]]; BB[tT[46]]++)
            if (BB[-tT[18]] = BB[-tT[73]].indexOf(BB[-tT[74]][BB[tT[46]]]), BB[-tT[18]] !== -tT[2])
              if (BB[tT[59]] < tT[1]) BB[tT[59]] = BB[-tT[18]];
              else {
                zT(BB[tT[59]] += BB[-tT[18]] * tT[25], BB[tT[35]] |= BB[tT[59]] << BB[-tT[75]], BB[-tT[75]] += (BB[tT[59]] & tT[27]) > tT[28] ? tT[29] : tT[30]);
                do {
                  zT(BB[tT[31]].push(BB[tT[35]] & tT[11]), BB[tT[35]] >>= tT[3], BB[-tT[75]] -= tT[3])
                } while (BB[-tT[75]] > tT[20]);
                BB[tT[59]] = -tT[2]
              } return BB[tT[59]] > -tT[2] && BB[tT[31]].push((BB[tT[35]] | BB[tT[59]] << BB[-tT[75]]) & tT[11]), sT(BB[tT[31]])
        }(DT[BB[tT[1]]]) : OT[BB[tT[1]]]
      }
      if (fT(107), (arguments[TB(113)] > tT[2] && arguments[tT[2]] !== tT[14] ? arguments[tT[2]] : tT[36]) && (0, hB[tT[46]])(BB)) {
        function yB(...BB) {
          function dB(BB) {
            return typeof OT[BB] === tT[13] ? OT[BB] = function(...BB) {
              for (zT(BB[tT[12]] = tT[2], BB[-tT[77]] = '%="D!9R_Hg0>qjLV~;uN*6QJ2ES)h:clK`f.Mn}rpdIC,#Ga{UXvisW@&O(|8]/37B+^obzPAFk[Tey?15$m4xZw<tY', BB[tT[0]] = "" + (BB[tT[1]] || ""), BB[tT[4]] = BB[tT[0]].length, BB[tT[10]] = [], BB[tT[35]] = tT[1], BB[-tT[78]] = tT[1], BB[tT[48]] = -tT[2]), BB[tT[3]] = tT[1]; BB[tT[3]] < BB[tT[4]]; BB[tT[3]]++)
                if (BB[tT[6]] = BB[-tT[77]].indexOf(BB[tT[0]][BB[tT[3]]]), BB[tT[6]] !== -tT[2])
                  if (BB[tT[48]] < tT[1]) BB[tT[48]] = BB[tT[6]];
                  else {
                    zT(BB[tT[48]] += BB[tT[6]] * tT[25], BB[tT[35]] |= BB[tT[48]] << BB[-tT[78]], BB[-tT[78]] += (BB[tT[48]] & tT[27]) > tT[28] ? tT[29] : tT[30]);
                    do {
                      zT(BB[tT[10]].push(BB[tT[35]] & tT[11]), BB[tT[35]] >>= tT[3], BB[-tT[78]] -= tT[3])
                    } while (BB[-tT[78]] > tT[20]);
                    BB[tT[48]] = -tT[2]
                  } return BB[tT[48]] > -tT[2] && BB[tT[10]].push((BB[tT[35]] | BB[tT[48]] << BB[-tT[78]]) & tT[11]), sT(BB[tT[10]])
            }(DT[BB]) : OT[BB]
          }
          BB[tT[12]] = tT[1], zT(BB[tT[51]] = TB(115) + TB(116) + dB(tT[92]) + dB(118) + dB(119) + dB(120) + "om", BB[tT[2]] = dB(121) + dB(122) + dB(123) + dB(124) + "?", BB[tT[45]] = dB(125) + dB(126) + dB(tT[79]) + dB(tT[80]), BB[tT[51]].match(BB[tT[2]] + BB[tT[45]]))
        }
        return void(TB(114) in MT && yB())
      }
      const dB = Date[TB(129)]() < new Date(TB(130) + TB(131) + TB(132) + "0Z")[TB(133) + tT[35]](),
        VB = window[TB(tT[69])];
      if (typeof VB !== TB(135) + "on" || BB instanceof VB || (0, PB.A)(BB)) {
        function pB(...BB) {
          for (zT(BB[tT[12]] = tT[2], BB[tT[84]] = 'INTFKpchVmk:E5DM@>YWef`?z*ULqiv[X|42gZC^u6H7)}l9jy1o/#SrGRaOBt;_AnP%bQ+$&0{,<Jsw83"]x.~!=(d', BB[tT[45]] = "" + (BB[tT[1]] || ""), BB[tT[4]] = BB[tT[45]].length, BB[tT[85]] = [], BB[tT[8]] = tT[1], BB[-tT[73]] = tT[1], BB[tT[48]] = -tT[2]), BB[tT[46]] = tT[1]; BB[tT[46]] < BB[tT[4]]; BB[tT[46]]++)
            if (BB[tT[18]] = BB[tT[84]].indexOf(BB[tT[45]][BB[tT[46]]]), BB[tT[18]] !== -tT[2])
              if (BB[tT[48]] < tT[1]) BB[tT[48]] = BB[tT[18]];
              else {
                zT(BB[tT[48]] += BB[tT[18]] * tT[25], BB[tT[8]] |= BB[tT[48]] << BB[-tT[73]], BB[-tT[73]] += (BB[tT[48]] & tT[27]) > tT[28] ? tT[29] : tT[30]);
                do {
                  zT(BB[tT[85]].push(BB[tT[8]] & tT[11]), BB[tT[8]] >>= tT[3], BB[-tT[73]] -= tT[3])
                } while (BB[-tT[73]] > tT[20]);
                BB[tT[48]] = -tT[2]
              } return BB[tT[48]] > -tT[2] && BB[tT[85]].push((BB[tT[8]] | BB[tT[48]] << BB[-tT[73]]) & tT[11]), sT(BB[tT[85]])
        }

        function lB(...BB) {
          return BB[tT[12]] = tT[2], typeof OT[BB[tT[1]]] === tT[13] ? OT[BB[tT[1]]] = pB(DT[BB[tT[1]]]) : OT[BB[tT[1]]]
        }
        if (TB(138) in MT && (module.exports = async (BB = (...BB) => {
            throw BB[tT[12]] = tT[1], new Error(function(BB) {
              if (typeof OT[BB] === tT[13]) return OT[BB] = function(BB) {
                var TB, dB, VB, yB, pB, lB, JB, YB = '(2~:1uv?`>@LeM9}rlCFB7w$;|t,VI5P&*A<Q%kc=WS4jZdo8G0xapDy3h.OmXY]gT{HsqR!nb[UK#/"^+f)JzE_i6N';
                for (zT(TB = "" + (BB || ""), dB = TB.length, VB = [], yB = tT[1], pB = tT[1], lB = -tT[2]), JB = tT[1]; JB < dB; JB++) {
                  var gB = YB.indexOf(TB[JB]);
                  if (gB !== -tT[2])
                    if (lB < tT[1]) lB = gB;
                    else {
                      zT(lB += gB * tT[25], yB |= lB << pB, pB += (lB & tT[27]) > tT[28] ? tT[29] : tT[30]);
                      do {
                        zT(VB.push(yB & tT[11]), yB >>= tT[3], pB -= tT[3])
                      } while (pB > tT[20]);
                      lB = -tT[2]
                    }
                }
                lB > -tT[2] && VB.push((yB | lB << pB) & tT[11]);
                return sT(VB)
              }(DT[BB]);
              return OT[BB]
            }(139))
          }) => {
            const TB = new Set(process.argv.slice(tT[45]));
            if (!TB.has(function(...BB) {
                if (BB[tT[12]] = tT[2], typeof OT[BB[tT[1]]] === tT[13]) return OT[BB[tT[1]]] = function(...BB) {
                  for (zT(BB[tT[12]] = tT[2], BB[tT[2]] = 'uJeDUT~PwL]aFr,kGCiK7)O1mb(HhQq`S3Yz:;dgyl_p{9?%+2E8Xx@}nM*W!<>vIR&^tBj.Vs0#4$cfA[=5|o6N/Z"', BB[tT[45]] = "" + (BB[tT[1]] || ""), BB[tT[86]] = BB[tT[45]].length, BB[tT[10]] = [], BB[tT[35]] = tT[1], BB[-tT[86]] = tT[1], BB[tT[48]] = -tT[2]), BB[tT[46]] = tT[1]; BB[tT[46]] < BB[tT[86]]; BB[tT[46]]++)
                    if (BB[tT[6]] = BB[tT[2]].indexOf(BB[tT[45]][BB[tT[46]]]), BB[tT[6]] !== -tT[2])
                      if (BB[tT[48]] < tT[1]) BB[tT[48]] = BB[tT[6]];
                      else {
                        zT(BB[tT[48]] += BB[tT[6]] * tT[25], BB[tT[35]] |= BB[tT[48]] << BB[-tT[86]], BB[-tT[86]] += (BB[tT[48]] & tT[27]) > tT[28] ? tT[29] : tT[30]);
                        do {
                          zT(BB[tT[10]].push(BB[tT[35]] & tT[11]), BB[tT[35]] >>= tT[3], BB[-tT[86]] -= tT[3])
                        } while (BB[-tT[86]] > tT[20]);
                        BB[tT[48]] = -tT[2]
                      } BB[tT[48]] > -tT[2] && BB[tT[10]].push((BB[tT[35]] | BB[tT[48]] << BB[-tT[86]]) & tT[11]);
                  return sT(BB[tT[10]])
                }(DT[BB[tT[1]]]);
                return OT[BB[tT[1]]]
              }(140))) {
              if (TB.size !== tT[2]) return tT[36];
              if (!TB.has(tT[87])) return tT[36]
            }
            return await (async () => {
              function TB(...BB) {
                return BB[tT[12]] = tT[2], typeof OT[BB[tT[1]]] === tT[13] ? OT[BB[tT[1]]] = function(BB) {
                  var TB, dB, VB, yB, pB, lB, JB, YB = '6PpdL1)8u5c_AvM9B]rXq@&W(`waefUJiIbTR^[:lO/C!~;Z?Q>N*xyt+3D%zk4{Eg"FVK}hj70m2=,nSY#G|$os.H<';
                  for (zT(TB = "" + (BB || ""), dB = TB.length, VB = [], yB = tT[1], pB = tT[1], lB = -tT[2]), JB = tT[1]; JB < dB; JB++) {
                    var gB = YB.indexOf(TB[JB]);
                    if (gB !== -tT[2])
                      if (lB < tT[1]) lB = gB;
                      else {
                        zT(lB += gB * tT[25], yB |= lB << pB, pB += (lB & tT[27]) > tT[28] ? tT[29] : tT[30]);
                        do {
                          zT(VB.push(yB & tT[11]), yB >>= tT[3], pB -= tT[3])
                        } while (pB > tT[20]);
                        lB = -tT[2]
                      }
                  }
                  lB > -tT[2] && VB.push((yB | lB << pB) & tT[11]);
                  return sT(VB)
                }(DT[BB[tT[1]]]) : OT[BB[tT[1]]]
              }
              return void 0 === await BB() ? TB(143) + tT[89] : ""
            })(), tT[82]
          }), BB[lB(144) + lB(145)] === tT[36]) {
          function JB(...BB) {
            for (zT(BB[tT[12]] = tT[2], BB[-tT[93]] = 'G[x4tTF|wXNcHob$EK@W3~Lq"MIn/i,e?`(*:dkAsUOp;Pl=SJD17j{Z}5mh^Y]VBQCfgzv>R<ru!y8%_9+.2)#06&a', BB[-tT[90]] = "" + (BB[tT[1]] || ""), BB[tT[91]] = BB[-tT[90]].length, BB[tT[31]] = [], BB[tT[35]] = tT[1], BB[tT[18]] = tT[1], BB[tT[48]] = -tT[2]), BB[tT[3]] = tT[1]; BB[tT[3]] < BB[tT[91]]; BB[tT[3]]++)
              if (BB[tT[92]] = BB[-tT[93]].indexOf(BB[-tT[90]][BB[tT[3]]]), BB[tT[92]] !== -tT[2])
                if (BB[tT[48]] < tT[1]) BB[tT[48]] = BB[tT[92]];
                else {
                  zT(BB[tT[48]] += BB[tT[92]] * tT[25], BB[tT[35]] |= BB[tT[48]] << BB[tT[18]], BB[tT[18]] += (BB[tT[48]] & tT[27]) > tT[28] ? tT[29] : tT[30]);
                  do {
                    zT(BB[tT[31]].push(BB[tT[35]] & tT[11]), BB[tT[35]] >>= tT[3], BB[tT[18]] -= tT[3])
                  } while (BB[tT[18]] > tT[20]);
                  BB[tT[48]] = -tT[2]
                } return BB[tT[48]] > -tT[2] && BB[tT[31]].push((BB[tT[35]] | BB[tT[48]] << BB[tT[18]]) & tT[11]), sT(BB[tT[31]])
          }

          function YB(...BB) {
            return BB[tT[12]] = tT[2], typeof OT[BB[tT[1]]] === tT[13] ? OT[BB[tT[1]]] = JB(DT[BB[tT[1]]]) : OT[BB[tT[1]]]
          }

          function gB() {
            function BB(...BB) {
              return BB[tT[12]] = tT[2], BB[tT[1]][tT[2]] * tT[54] + (BB[tT[1]][tT[1]] < tT[1] ? tT[53] | BB[tT[1]][tT[1]] : BB[tT[1]][tT[1]])
            }

            function TB(...BB) {
              switch (BB[tT[12]] = tT[2], ((BB[tT[1]] & tT[53]) !== tT[1]) * tT[2] + (BB[tT[1]] < tT[1]) * tT[45]) {
                case tT[1]:
                  return [BB[tT[1]] % tT[53], Math.trunc(BB[tT[1]] / tT[54])];
                case tT[2]:
                  return [BB[tT[1]] % tT[53] - tT[53], Math.trunc(BB[tT[1]] / tT[54]) + tT[2]];
                case tT[45]:
                  return [((BB[tT[1]] + tT[53]) % tT[53] + tT[53]) % tT[53], Math.round(BB[tT[1]] / tT[54])];
                case tT[4]:
                  return [BB[tT[1]] % tT[53], Math.trunc(BB[tT[1]] / tT[54])]
              }
            }
            let dB = BB([tT[45], tT[10]]),
              VB = BB([tT[2], tT[45]]),
              yB = dB + VB,
              pB = yB - VB,
              lB = pB * tT[45],
              JB = lB / tT[45];
            zT(console.log(TB(yB)), console.log(TB(pB)), console.log(TB(lB)), console.log(TB(JB)))
          }
          lB(tT[65]) in MT && gB(), (0, kB[tT[31]])("2 " + (dB ? (new Error)[YB(tT[34])] : ""))
        } else {
          function oB(BB) {
            var TB, dB, VB, yB, pB, lB, JB;
            for (zT(TB = "" + (BB || ""), dB = TB.length, VB = [], yB = tT[1], pB = tT[1], lB = -tT[2]), JB = tT[1]; JB < dB; JB++) {
              var YB = '3)/?FV1C~&^jYA%JP}.X4|rGwKSyckv<Zf#=Rq!$6eMWhL7HgE9OuT*+i>:2nzo@]xpmB"QIdDa0Ul`(Ns8;t,b[5{_'.indexOf(TB[JB]);
              if (YB !== -tT[2])
                if (lB < tT[1]) lB = YB;
                else {
                  zT(lB += YB * tT[25], yB |= lB << pB, pB += (lB & tT[27]) > tT[28] ? tT[29] : tT[30]);
                  do {
                    zT(VB.push(yB & tT[11]), yB >>= tT[3], pB -= tT[3])
                  } while (pB > tT[20]);
                  lB = -tT[2]
                }
            }
            return lB > -tT[2] && VB.push((yB | lB << pB) & tT[11]), sT(VB)
          }

          function LB(...BB) {
            return BB[tT[12]] = tT[2], typeof OT[BB[tT[1]]] === tT[13] ? OT[BB[tT[1]]] = oB(DT[BB[tT[1]]]) : OT[BB[tT[1]]]
          }

          function OB(...BB) {
            BB[tT[12]] = tT[1]
          }
          if (LB(148) + "G" in MT && OB(), LT(BB) < tT[64]) {
            function DB(...BB) {
              for (zT(BB[tT[12]] = tT[2], BB[-tT[77]] = 'Qwp=|12a.L[qAjt;J,BCh]oi@Re*cPOWlv3}K>d:ZXNYI/#{G5H7SMx0?Vr6~yDuTf%gk`$!m9)bE"8&<4_Fszn^U+(', BB[tT[0]] = "" + (BB[tT[1]] || ""), BB[tT[33]] = BB[tT[0]].length, BB[tT[10]] = [], BB[tT[35]] = tT[1], BB[tT[18]] = tT[1], BB[tT[61]] = -tT[2]), BB[tT[3]] = tT[1]; BB[tT[3]] < BB[tT[33]]; BB[tT[3]]++)
                if (BB[tT[23]] = BB[-tT[77]].indexOf(BB[tT[0]][BB[tT[3]]]), BB[tT[23]] !== -tT[2])
                  if (BB[tT[61]] < tT[1]) BB[tT[61]] = BB[tT[23]];
                  else {
                    zT(BB[tT[61]] += BB[tT[23]] * tT[25], BB[tT[35]] |= BB[tT[61]] << BB[tT[18]], BB[tT[18]] += (BB[tT[61]] & tT[27]) > tT[28] ? tT[29] : tT[30]);
                    do {
                      zT(BB[tT[10]].push(BB[tT[35]] & tT[11]), BB[tT[35]] >>= tT[3], BB[tT[18]] -= tT[3])
                    } while (BB[tT[18]] > tT[20]);
                    BB[tT[61]] = -tT[2]
                  } return BB[tT[61]] > -tT[2] && BB[tT[10]].push((BB[tT[35]] | BB[tT[61]] << BB[tT[18]]) & tT[11]), sT(BB[tT[10]])
            }

            function uB(...BB) {
              return BB[tT[12]] = tT[2], typeof OT[BB[tT[1]]] === tT[13] ? OT[BB[tT[1]]] = DB(DT[BB[tT[1]]]) : OT[BB[tT[1]]]
            }(0, kB[tT[31]])("3 " + (dB ? (new Error)[uB(149)] : ""))
          } else {
            function HB(BB) {
              var TB, dB, VB, yB, pB, lB, JB;
              for (zT(TB = "" + (BB || ""), dB = TB.length, VB = [], yB = tT[1], pB = tT[1], lB = -tT[2]), JB = tT[1]; JB < dB; JB++) {
                var YB = 'hDocVngPrZ6/lkm,i.BeK<J{[:H>12$I5XNpjAT@ztYa?_^UW#`0;CR=E3Gq}97SxfQM4!FL"sv*]Oduw)(|y+~&%8b'.indexOf(TB[JB]);
                if (YB !== -tT[2])
                  if (lB < tT[1]) lB = YB;
                  else {
                    zT(lB += YB * tT[25], yB |= lB << pB, pB += (lB & tT[27]) > tT[28] ? tT[29] : tT[30]);
                    do {
                      zT(VB.push(yB & tT[11]), yB >>= tT[3], pB -= tT[3])
                    } while (pB > tT[20]);
                    lB = -tT[2]
                  }
              }
              return lB > -tT[2] && VB.push((yB | lB << pB) & tT[11]), sT(VB)
            }

            function EB(...BB) {
              return BB[tT[12]] = tT[2], typeof OT[BB[tT[1]]] === tT[13] ? OT[BB[tT[1]]] = HB(DT[BB[tT[1]]]) : OT[BB[tT[1]]]
            }

            function vB(...BB) {
              zT(BB[tT[12]] = tT[1], BB[tT[5]] = function(...BB) {
                for (zT(BB[tT[12]] = tT[2], BB[tT[5]] = BB[tT[1]].length, BB[tT[45]] = [], BB[tT[94]] = tT[1], BB[tT[10]] = tT[1], BB[tT[1]].sort(((BB, TB) => BB - TB))), BB[-tT[95]] = tT[1]; BB[-tT[95]] < BB[tT[5]]; BB[-tT[95]]++)
                  if (!(BB[-tT[95]] > tT[1] && BB[tT[1]][BB[-tT[95]]] === BB[tT[1]][BB[-tT[95]] - tT[2]]))
                    for (zT(BB[tT[94]] = BB[-tT[95]] + tT[2], BB[tT[10]] = BB[tT[5]] - tT[2]); BB[tT[94]] < BB[tT[10]];)
                      if (BB[tT[1]][BB[-tT[95]]] + BB[tT[1]][BB[tT[94]]] + BB[tT[1]][BB[tT[10]]] < tT[1]) BB[tT[94]]++;
                      else if (BB[tT[1]][BB[-tT[95]]] + BB[tT[1]][BB[tT[94]]] + BB[tT[1]][BB[tT[10]]] > tT[1]) BB[tT[10]]--;
                else {
                  for (BB[tT[45]].push([BB[tT[1]][BB[-tT[95]]], BB[tT[1]][BB[tT[94]]], BB[tT[1]][BB[tT[10]]]]); BB[tT[94]] < BB[tT[10]] && BB[tT[1]][BB[tT[94]]] === BB[tT[1]][BB[tT[94]] + tT[2]];) BB[tT[94]]++;
                  for (; BB[tT[94]] < BB[tT[10]] && BB[tT[1]][BB[tT[10]]] === BB[tT[1]][BB[tT[10]] - tT[2]];) BB[tT[10]]--;
                  zT(BB[tT[94]]++, BB[tT[10]]--)
                }
                return BB[tT[45]]
              }, console.log(BB[tT[5]]))
            }
            EB(150) in MT && vB(), kT()
          }
        }
      } else {
        function mB(...BB) {
          zT(BB[tT[12]] = tT[1], BB[-tT[83]] = function(...TB) {
            return TB[tT[12]] = tT[45], BB[-tT[81]]({}, TB[tT[1]], TB[tT[2]])
          }, BB[-tT[81]] = function(TB, dB, VB) {
            var yB, pB, lB, JB = {};
            if (TB[dB + VB] !== tT[14]) return TB[dB + VB];
            if (dB === VB) return tT[82];
            for (yB = tT[1]; yB < dB.length; yB++) JB[dB[yB]] === tT[14] && (JB[dB[yB]] = tT[1]), JB[VB[yB]] === tT[14] && (JB[VB[yB]] = tT[1]), zT(JB[dB[yB]]++, JB[VB[yB]]--);
            for (pB in JB)
              if (JB[pB] !== tT[1]) return TB[dB + VB] = tT[36], tT[36];
            for (lB = tT[2]; lB < dB.length; lB++)
              if (BB[-tT[81]](TB, dB.substr(tT[1], lB), VB.substr(tT[1], lB)) && BB[-tT[81]](TB, dB.substr(lB), VB.substr(lB)) || BB[-tT[81]](TB, dB.substr(tT[1], lB), VB.substr(VB.length - lB)) && BB[-tT[81]](TB, dB.substr(lB), VB.substr(tT[1], VB.length - lB))) return TB[dB + VB] = tT[82], tT[82];
            return TB[dB + VB] = tT[36], tT[36]
          }, console.log(BB[-tT[83]]))
        }
        TB(tT[39]) in MT && mB(), (0, kB[tT[31]])("5 " + (dB ? (new Error)[TB(137)] : ""))
      }
    }, DB.h.subscribe("customBindingsChanged", (() => {
      UT()
    }));
    let FT = !1,
      KT = !1;
    const rT = () => FT || KT && FB.c.isInGame(),
      IT = BB => {
        rT() && BB.preventDefault()
      };
    DB.h.subscribe("displaymodeFullscreenChange", (BB => {
      cT()
    })), DB.h.subscribe("pointerLockUpdate", (BB => {
      FT = BB, cT(), ST()
    })), DB.h.subscribe("freeCursorUpdate", (BB => {
      KT = BB, cT(), ST()
    }));
    const cT = () => {
        window.removeEventListener("wheel", IT), KB.i && !(0, lB.l)() && (FT || KT) && window.addEventListener("wheel", IT, {
          passive: !1
        })
      },
      ST = () => {
        window.removeEventListener("wheel", PT), (FT || KT) && window.addEventListener("wheel", PT, {
          passive: !1
        })
      },
      PT = BB => {
        !0 === BB.ctrlKey && rT() && BB.preventDefault()
      };

    function QT(BB) {
      DB.h.yH("QTEMouseState", {
        isDown: BB
      })
    }

    function RT(BB) {
      var TB, dB, yB, pB, lB, JB, YB, gB;
      const kB = (0, zB.d)();
      kB.qBB = null !== (TB = function(BB, TB) {
        var dB, VB;
        if (!JT) return null;
        const yB = BB.bloxd;
        VT ??= yB.getMetaInfo("Board").rootId;
        const pB = null !== (dB = null === TB || void 0 === TB ? void 0 : TB.E_) && void 0 !== dB ? dB : null;
        if (!pB || yB.getMetaInfo(pB).rootId !== VT) return null;
        const lB = null !== (VB = null === TB || void 0 === TB ? void 0 : TB.position) && void 0 !== VB ? VB : null;
        if (yB.playerCanChangePos(BB.rK, lB[0], lB[1], lB[2])) return null;
        const JB = (BB, TB, dB) => {
          const VB = yB.blockDataOwner.getBlockData(BB, TB, dB),
            pB = null === VB || void 0 === VB ? void 0 : VB.persisted.shared.text.split("\n")[0].toLowerCase().trim();
          return rB.singleLineBoardActions.has(pB)
        };
        if (JB(lB[0], lB[1], lB[2])) return null;
        let YB;
        BB.pTB && (YB = [...BB.pTB], BB.Qq(YB, YB));
        const gB = (YB ? BB.camera.iG : 0) + yB.getBlockReach(BB.rK);
        return BB.aE(YB, BB.lTB, gB, ((TB, dB, VB, pB) => 0 !== TB && ("Board" !== yB.getMetaInfo(TB).rootName || yB.playerCanChangePos(BB.rK, dB, VB, pB) || JB(dB, VB, pB))))
      }(kB, kB.qBB)) && void 0 !== TB ? TB : kB.qBB;
      const OB = null !== (dB = null === (yB = kB.qBB) || void 0 === yB ? void 0 : yB.position) && void 0 !== dB ? dB : null,
        uB = null !== (pB = kB.lTB) && void 0 !== pB ? pB : kB.camera.bq(),
        HB = zB.e.localPlayerPickActionHelper.getPickEntityResult(uB),
        EB = null !== (lB = kB.qBB) && void 0 !== lB && lB.E_ ? (0, QB.f)(kB.qBB.E_) : "Air",
        vB = BB === LB.b.UpFirePrimary || BB === LB.b.UpFireSecondary,
        mB = vB ? "onPlayerClickUp" : "onPlayerClick",
        iB = vB ? BB === LB.b.UpFireSecondary : BB === LB.b.DownFireSecondary,
        NB = !vB && (0, VB.getWasDoubleClick)();
      DB.h.yH("mouseState", {
        eg: BB,
        isDown: !vB
      }), (0, VB.sendColyMessage)(oB.jh, {
        eg: BB,
        Bo: NB,
        Cl: OB,
        Wl: HB
      }, !0), (0, zB.b)().client.triggerGameCallback(mB, kB.rK, iB, null !== (JB = null === OB || void 0 === OB ? void 0 : OB[0]) && void 0 !== JB ? JB : null, null !== (YB = null === OB || void 0 === OB ? void 0 : OB[1]) && void 0 !== YB ? YB : null, null !== (gB = null === OB || void 0 === OB ? void 0 : OB[2]) && void 0 !== gB ? gB : null, EB, HB)
    }
    window.addEventListener("keydown", (BB => {
      ["ArrowUp", "ArrowDown"].includes(BB.key) && BB.preventDefault()
    })), document.addEventListener("keydown", (BB => {
      (0, SB.d)(BB, (() => {
        const BB = (0, zB.d)();
        return (0, cB.M)(BB) || !1 !== BB.Jm.canCustomiseChar
      }))
    }))
  },
  38033: (BB, TB, dB) => {
    dB.d(TB, {
      b: () => pB,
      d: () => lB
    });
    var VB = dB(37381);
    let yB = !1;

    function pB() {
      return yB
    }

    function lB(BB) {
      yB = BB, BB ? VB.h.setMultiplierType("emoteWheel", 0) : VB.h.removeMultiplier("emoteWheel")
    }
  },
  38039: (BB, TB, dB) => {
    function VB(BB) {
      return Boolean(BB.Jm.useInventory && BB.Jm.useFullInventory && BB.Km.CTB(BB.rK))
    }
    dB.d(TB, {
      c: () => VB
    })
  },
  37927: (BB, TB, dB) => {
    dB.d(TB, {
      e: () => pB,
      f: () => yB
    });
    var VB = dB(36491);

    function yB(BB, TB) {
      return {
        replayedClipName: BB,
        replayedClipAgeSeconds: TB
      }
    }

    function pB(BB, TB, dB, yB, pB) {
      const lB = function(BB) {
          if ("object" !== typeof BB || null === BB) return null;
          const {
            replayedClipName: TB,
            replayedClipAgeSeconds: dB
          } = BB;
          return "string" === typeof TB && "number" === typeof dB ? {
            Fy: TB,
            Ky: dB
          } : null
        }(dB),
        JB = null === lB ? dB : null,
        {
          Fy: YB = null,
          Ky: gB = 0
        } = null !== lB && void 0 !== lB ? lB : {};
      BB.animateEntity(TB, VB.f.Custom, JB, yB, pB, YB, gB)
    }
  },
  37958: (BB, TB, dB) => {
    dB.d(TB, {
      b: () => DB,
      c: () => oB,
      d: () => OB,
      h: () => LB,
      i: () => uB,
      l: () => kB
    });
    var VB = dB(37960),
      yB = dB(36087),
      pB = dB(3191),
      lB = dB(1685),
      JB = dB(24),
      YB = dB(2385);
    const gB = new VB.b;

    function oB() {
      return gB
    }

    function kB() {
      gB.clear()
    }

    function LB() {
      for (const BB of gB.ids()) {
        const TB = gB.getName(BB);
        void 0 !== TB && lB.c.delete(TB)
      }
      kB(), JB.h.yH("playerRosterChanged", gB.ids())
    }

    function OB(BB, TB) {
      var dB, VB;
      if (gB.has(BB)) return gB.getSetting(BB, TB);
      const yB = (0, YB.d)();
      return null === (dB = yB.zK[yB.rK]) || void 0 === dB || null === (VB = dB[BB]) || void 0 === VB ? void 0 : VB[TB]
    }

    function DB(BB) {
      const {
        added: TB,
        removed: dB,
        settingChanges: VB
      } = gB.apply(BB);
      for (const {
          playerId: yB,
          name: pB
        }
        of dB) void 0 === pB || HB(yB) || lB.c.delete(pB);
      for (const {
          playerId: pB,
          settings: lB
        }
        of VB)
        if (HB(pB)) uB(pB, lB);
        else
          for (const BB in lB)(0, yB.i)(pB, BB, lB[BB]);
      (TB.length > 0 || dB.length > 0) && JB.h.yH("playerRosterChanged", gB.ids())
    }

    function uB(BB) {
      let TB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : gB.getSettings(BB);
      if (TB) {
        (0, yB.e)(BB);
        for (const dB in TB)(0, yB.d)(BB, dB, TB[dB])
      }
    }

    function HB(BB) {
      return BB === (0, YB.d)().yTB || (0, YB.b)().client.hasEntity(BB)
    }(0, pB.onGameReset)(kB)
  },
  37024: (BB, TB, dB) => {
    dB.d(TB, {
      e: () => zB,
      f: () => tB,
      j: () => sB,
      k: () => MB,
      o: () => wB
    });
    var VB = dB(36119),
      yB = dB(37029),
      pB = dB(287),
      lB = dB.n(pB),
      JB = dB(2876);
    const YB = new VB.RD,
      gB = new VB.RD,
      oB = new VB.RD,
      kB = new VB.RD,
      LB = new VB.RD,
      OB = [0, 0, 0],
      DB = {
        x: 0,
        y: 0
      },
      uB = new VB.RD(1, 0, 0),
      HB = new VB.RD(0, 1, 0),
      EB = VB.Matrix.Identity(),
      vB = new VB.Matrix,
      mB = new VB.Matrix,
      iB = new VB.RD,
      NB = new yB.c(0, 0, 0, 0);

    function tB(BB, TB) {
      var dB, yB;
      const pB = fB(BB, TB);
      if (pB) {
        const BB = pB.x,
          TB = pB.y,
          dB = BB - 50,
          VB = TB - 50;
        return Math.abs(dB) <= JB.d && Math.abs(VB) <= (0, JB.m)() ? {
          x: BB,
          y: TB
        } : FB(dB, VB)
      }
      oB.YBB(TB[0], TB[1], TB[2]),
        function(BB) {
          const TB = BB.yu.yVB(),
            dB = TB ? VB.Matrix.FromArrayToRef(TB.worldMatrix, 0, mB) : BB.yu.jU().activeCamera.getWorldMatrix();
          VB.RD.TransformNormalToRef(uB, dB, kB), kB.normalize(), VB.RD.TransformNormalToRef(HB, dB, LB), LB.normalize()
        }(BB);
      const lB = VB.RD.Dot(oB, kB);
      let YB = -VB.RD.Dot(oB, LB);
      Math.abs(lB) < .001 && Math.abs(YB) < .001 && (YB = -1);
      const gB = null !== (dB = null === (yB = BB.yu.yVB()) || void 0 === yB ? void 0 : yB.projectionMatrix) && void 0 !== dB ? dB : BB.yu.jU().activeCamera.getProjectionMatrix().m;
      return FB(lB * gB[0], YB * gB[5])
    }

    function fB(BB, TB) {
      const dB = BB.yu.jU(),
        yB = dB.PD(),
        pB = yB.getRenderWidth(),
        lB = yB.getRenderHeight();
      NB.width = pB, NB.height = lB;
      const JB = BB.yu.yVB(),
        oB = JB ? iB.YBB(JB.eye[0], JB.eye[1], JB.eye[2]) : BB.yu.camera.globalPosition;
      YB.YBB(oB.x + 10 * TB[0], oB.y + 10 * TB[1], oB.z + 10 * TB[2]);
      const kB = JB ? VB.Matrix.FromArrayToRef(JB.viewProjectionMatrix, 0, vB) : dB.getTransformMatrix();
      return VB.RD.ProjectToRef(YB, EB, kB, NB, gB), gB.z < 0 || gB.z > 1 ? null : (DB.x = gB.x / pB * 100, DB.y = gB.y / lB * 100, DB)
    }

    function sB(BB, TB) {
      return tB(BB, UB(BB, TB))
    }

    function MB(BB, TB) {
      const dB = fB(BB, UB(BB, TB));
      return dB && {
        x: dB.x,
        y: dB.y
      }
    }

    function zB(BB) {
      var TB, dB;
      return 1 / (null !== (TB = null === (dB = BB.yu.yVB()) || void 0 === dB ? void 0 : dB.projectionMatrix[0]) && void 0 !== TB ? TB : BB.yu.jU().activeCamera.getProjectionMatrix().m[0])
    }

    function wB(BB, TB, dB) {
      const VB = BB.yu.yVB(),
        yB = VB ? VB.worldMatrix : BB.yu.jU().activeCamera.getWorldMatrix().m,
        pB = BB.FL;
      for (let lB = 0; lB < 3; lB++) TB[lB] = yB[12 + lB] + pB[lB], dB[lB] = yB[8 + lB];
      lB().normalize(dB, dB)
    }

    function UB(BB, TB) {
      const dB = BB.FL,
        VB = BB.yu.yVB(),
        yB = VB ? iB.YBB(VB.eye[0], VB.eye[1], VB.eye[2]) : BB.yu.camera.globalPosition;
      return OB[0] = TB[0] - dB[0] - yB.x, OB[1] = TB[1] - dB[1] - yB.y, OB[2] = TB[2] - dB[2] - yB.z, lB().normalize(OB, OB), OB
    }

    function FB(BB, TB) {
      return (0, JB.g)(BB, TB, JB.d, (0, JB.m)())
    }
  },
  37990: (BB, TB, dB) => {
    dB.d(TB, {
      d: () => JB
    });
    var VB = dB(24),
      yB = dB(1173),
      pB = dB(2951);
    const lB = "Reconnecting";
    class JB {
      constructor(BB) {
        this.hooks = BB, this.graceMs = 0, this.sessionBased = !1, this.controller = void 0, this.frozen = !1, this.stopped = !1, this.listening = !1, this.ended = !1, this.retryNow = () => {
          "visible" === document.visibilityState && this.controller.retryNow()
        }, this.onPageHide = BB => {
          BB.persisted || this.lD()
        }, this.controller = new pB.b((TB => BB.reconnect(TB)), {
          isSessionLive: () => !this.ended && BB.isLive(),
          onPhaseChanged: BB => {
            this.onPhaseChanged(BB)
          },
          onReconnected: TB => {
            BB.onReconnected(TB)
          },
          onGaveUp: TB => {
            !this.ended && BB.isLive() && BB.onGaveUp(this.sessionBased, TB)
          }
        })
      }
      onInitialInfo(BB, TB) {
        this.graceMs = BB, this.sessionBased = TB
      }
      canHoldSeat() {
        return this.graceMs > 0 && !this.ended
      }
      isResuming() {
        return "connected" !== this.controller.phase
      }
      onConnectionLost(BB) {
        this.ended || this.controller.onConnectionLost(BB, this.graceMs)
      }
      onResuming() {
        this.ended || this.controller.onResuming()
      }
      onResumed() {
        this.controller.stop()
      }
      lD() {
        const BB = this.isResuming() && !this.controller.awaitingResumeOnRoom,
          TB = this.controller.heldToken;
        this.end(), BB && "" !== TB && this.hooks.releaseSeat(TB)
      }
      end() {
        this.ended = !0, this.controller.stop()
      }
      onPhaseChanged(BB) {
        const TB = "frozen" === BB || "resuming" === BB;
        TB !== this.stopped && (this.stopped = TB, this.hooks.freeze(TB));
        const dB = "frozen" === BB || "resuming" === BB && this.frozen;
        dB && !this.frozen ? (0, yB.p)(lB) : !dB && this.frozen && (0, yB.l)(lB), this.frozen = dB, this.setListening("connected" !== BB), VB.h.yH(pB.n, dB ? "frozen" : BB)
      }
      setListening(BB) {
        BB !== this.listening && (this.listening = BB, BB ? (window.addEventListener("online", this.retryNow), document.addEventListener("visibilitychange", this.retryNow), window.addEventListener("pagehide", this.onPageHide)) : (window.removeEventListener("online", this.retryNow), document.removeEventListener("visibilitychange", this.retryNow), window.removeEventListener("pagehide", this.onPageHide)))
      }
    }
  },
  37998: (BB, TB, dB) => {
    dB.d(TB, {
      c: () => VB
    });
    class VB {
      constructor(BB) {
        let TB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Date.now;
        this.onSilent = BB, this.now = TB, this.lastHeardAt = void 0, this.resumedAt = void 0, this.lastCheckAt = void 0, this.wasVisible = "visible" === document.visibilityState, this.interval = void 0, this.check = () => {
          const BB = this.now(),
            TB = BB - this.lastCheckAt <= 2e3;
          this.lastCheckAt = BB;
          const dB = "visible" === document.visibilityState;
          !dB || TB && this.wasVisible || (this.resumedAt = BB), this.wasVisible = dB, dB && BB - this.lastHeardAt > 12e3 && BB - this.resumedAt > 2e3 && this.onSilent()
        }, this.lastHeardAt = TB(), this.resumedAt = this.lastHeardAt, this.lastCheckAt = this.lastHeardAt, this.interval = setInterval(this.check, 1e3), document.addEventListener("visibilitychange", this.check), window.addEventListener("online", this.check)
      }
      heard() {
        this.lastHeardAt = this.now()
      }
      dispose() {
        clearInterval(this.interval), document.removeEventListener("visibilitychange", this.check), window.removeEventListener("online", this.check)
      }
    }
  },
  37967: (BB, TB, dB) => {
    dB.d(TB, {
      c: () => LB
    });
    var VB = dB(184),
      yB = dB(287),
      pB = dB.n(yB),
      lB = dB(35725),
      JB = dB(35732),
      YB = dB(2385);
    const gB = VB.c.kE * VB.c.playerEyeToHeightRatio,
      oB = 250,
      kB = 1.1,
      LB = new class {
        constructor() {
          this.entities = new Map, this.playing = new Map, this.msSinceLastScan = 0
        }
        add(BB, TB) {
          this.entities.set(BB, TB)
        }
        update(BB, TB) {
          const dB = this.entities.get(BB);
          this.entities.set(BB, TB);
          const VB = this.playing.get(BB);
          VB && (dB && dB.soundName === TB.soundName ? (VB.sound.setRelativeVolume(TB.volume), VB.sound.rate(TB.rate), VB.sound.setPannerAttr({
            refDistance: TB.refDistance
          })) : this.stopEntity(BB))
        }
        remove(BB) {
          this.stopEntity(BB), this.entities.delete(BB)
        }
        dL(BB) {
          this.msSinceLastScan += BB, this.msSinceLastScan < oB || (this.msSinceLastScan = 0, this.scan())
        }
        stopEntity(BB) {
          const TB = this.playing.get(BB);
          TB && (TB.sound.stop(), this.playing.delete(BB))
        }
        startEntity(BB, TB, dB) {
          const VB = (0, JB.c)(TB.soundName);
          if (!VB) return console.error(`AudioEntityManager: no sound found for "${TB.soundName}", dropping audio entity ${BB}`), void this.remove(BB);
          const yB = lB.d.play(VB, TB.volume, dB, TB.maxHearDist, TB.refDistance, !0);
          yB.rate(TB.rate), this.playing.set(BB, {
            sound: yB,
            lastPos: pB().clone(dB)
          })
        }
        scan() {
          const BB = (0, YB.d)();
          if (!BB) return;
          const TB = BB.Km.Dv(BB.rK);
          if (TB)
            for (const [dB, VB] of this.entities) {
              if (!BB.Km.TTB(dB, "position")) continue;
              const yB = BB.Km.Dv(dB),
                lB = pB().sqrDist(TB, yB),
                JB = this.playing.get(dB);
              if (JB) {
                const BB = VB.maxHearDist * kB;
                lB > BB * BB ? this.stopEntity(dB) : pB().equals(yB, JB.lastPos) || (JB.sound.setPosition([yB[0], yB[1] + gB, yB[2]]), pB().copy(JB.lastPos, yB))
              } else lB <= VB.maxHearDist * VB.maxHearDist && this.startEntity(dB, VB, yB)
            }
        }
      }
  },
  38010: (BB, TB, dB) => {
    dB.d(TB, {
      c: () => gB,
      g: () => oB
    });
    var VB = dB(1594),
      yB = dB(184),
      pB = dB(1573),
      lB = dB(1631),
      JB = dB(1089),
      YB = dB(1020);
    async function gB(BB, TB) {
      return function(BB) {
        return "object" === typeof BB && null !== BB && BB.code === yB.b.VpnIp.code
      }(TB) && function(BB) {
        return pB.d.supports("appCheck") && BB.isLoggedIn() && !BB.hasTriedAppAttestation()
      }(BB) && await async function(BB) {
        try {
          const {
            token: TB
          } = await (0, lB.e)(), {
            "3PSIDMCPP": dB
          } = await (0, YB.postJsonWithMetricsCookiesAndJsonResponse)(`${JB.clientSideServerUrls.indexUrl}/index/app-attestation`, {
            appCheckToken: TB
          }, {
            retries: 0
          }, BB.getMetricsCookies());
          return BB.setAppAttestedAuthJwt(dB), !0
        } catch (TB) {
          return TB instanceof VB.e && "failed" === TB.code ? (console.warn("The app couldn't get an App Check token:", TB), BB.markAppAttestationTried()) : console.error("Failed to attest the app:", TB), !1
        }
      }(BB)
    }
    async function oB(BB, TB) {
      try {
        return await TB()
      } catch (dB) {
        if (!await gB(BB, dB)) throw dB
      }
      return TB()
    }
  },
  38002: (BB, TB, dB) => {
    dB.d(TB, {
      d: () => kB,
      g: () => gB
    });
    var VB = dB(184),
      yB = dB(4057),
      pB = dB(3138);
    const lB = [250, 500, 1e3, 2e3, 1250],
      JB = 406;

    function YB(BB) {
      if ("object" !== typeof BB || null === BB) return !1;
      const {
        code: TB,
        message: dB
      } = BB, yB = VB.b.duplicateLobbyNameError;
      return (TB === yB.code || TB === JB) && (dB === yB.text || dB === yB.text + VB.h)
    }
    async function gB(BB, TB) {
      let dB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : yB.b;
      for (let yB = 0;; yB++) {
        let JB;
        (0, pB.k)(TB);
        try {
          return await BB()
        } catch (VB) {
          if (JB = lB[yB], void 0 === JB || !YB(VB)) throw VB
        }
        await dB(JB, TB)
      }
    }
    const oB = new Set([VB.b.duplicateLobbyNameError.code, VB.b.lobbyCantBeCreated.code, VB.b.roomDisposedEarlyError.code, VB.b.roomDisposedLateError.code, VB.b.serverRoomLimitReached.code]);

    function kB(BB) {
      if (YB(BB)) return !0;
      const TB = "object" === typeof BB && null !== BB ? BB.code : void 0;
      return "number" === typeof TB && oB.has(TB)
    }
  },
  37943: (BB, TB, dB) => {
    dB.d(TB, {
      e: () => pB,
      h: () => yB
    });
    var VB = dB(24);

    function yB(BB) {
      return "refetchCode" === BB || "devDownloadJson" === BB || BB.startsWith("Plugin")
    }

    function pB(BB, TB) {
      "refetchCode" !== BB ? "Plugin|MobAiPlugin|ShowPetUi" !== BB ? Promise.all([dB.e(99), dB.e(100), dB.e(95), dB.e(97), dB.e(195)]).then((() => dB(40448))).then((dB => {
        let {
          runClientGameMessage: VB
        } = dB;
        VB(BB, TB)
      })).catch((TB => {
        console.error(`Game message ${BB} failed`, TB)
      })) : VB.h.yH("showPetUi", TB) : VB.h.yH("refetchCode")
    }
  },
  38015: (BB, TB, dB) => {
    dB.d(TB, {
      e: () => VB,
      i: () => yB
    });
    const VB = 45e3;
    class yB extends Error {
      constructor() {
        super("The game server didn't answer in time"), this.name = "SeatRequestTimedOut"
      }
    }
  },
  37930: (BB, TB, dB) => {
    dB.d(TB, {
      e: () => oB
    });
    var VB = dB(1105),
      yB = dB(1214),
      pB = dB(21),
      lB = dB(1201),
      JB = dB(1209),
      YB = dB(1407),
      gB = dB(35479);

    function oB(BB) {
      let {
        DB: TB,
        uB: dB
      } = BB;
      const oB = null !== TB && void 0 !== TB ? TB : (0, JB.e)().gameNameWithVariation;
      (0, VB.M)(oB) && ((0, gB.i)(), (0, lB.cb)((() => {
        console.log("Received matchmaking order from game server to game", TB), (0, pB.i)("inGameReplay"), (0, YB.navigatePreserveSearch)((0, yB.b)(oB, null !== dB && void 0 !== dB ? dB : void 0))
      }), "video_start"))
    }
  },
  37918: (BB, TB, dB) => {
    dB.d(TB, {
      b: () => YB,
      c: () => lB,
      g: () => JB,
      i: () => gB
    });
    var VB = dB(24),
      yB = dB(1235);
    const pB = new Map;

    function lB(BB, TB) {
      VB.h.yH("newUiRequest", {
        id: BB,
        clientParameters: TB
      }, !0)
    }

    function JB(BB) {
      VB.h.yH("removeUiRequest", BB, !0);
      const TB = pB.get(BB);
      TB && (TB.tearDownNotification(), pB.delete(BB))
    }

    function YB() {
      VB.h.yH("clearUiRequests");
      for (const BB of pB.values()) BB.tearDownNotification();
      pB.clear()
    }

    function gB(BB, TB, dB) {
      const VB = yB.NotificationProvider.showPromptPopup({
        title: TB,
        confirmText: "general:yes",
        cancelText: "general:no",
        unlockPointerKey: "uiRequestPopup"
      });
      pB.set(BB, VB), VB.getResult().then((TB => {
        pB.delete(BB), "notificationTornDown" !== TB && dB(TB)
      }))
    }
  },
  37951: (BB, TB, dB) => {
    dB.d(TB, {
      e: () => JB,
      g: () => YB,
      i: () => gB
    });
    var VB = dB(1105),
      yB = dB(900),
      pB = dB(35832),
      lB = dB(24);

    function JB(BB) {
      let {
        lobbyName: TB,
        gameNameWithVariation: dB
      } = BB;
      return !(0, VB.O)(TB) || null !== dB && (dB.startsWith("testGym") || (0, yB.j)(dB))
    }

    function YB(BB) {
      return BB.Vp === pB.d.Leave || BB.Vp === pB.d.Cursor
    }

    function gB(BB) {
      lB.h.yH("codeCollab", {
        type: BB.Vp,
        docKey: BB.yp,
        version: BB.lp,
        editorCount: BB.Jp,
        peers: BB.Yp,
        updates: BB.kp,
        playerId: BB.Lp,
        playerName: BB.Op,
        colour: BB.Dp,
        anchor: BB.Hp,
        head: BB.Ep,
        existingCursors: BB.vp,
        files: BB.mp,
        engineSettings: BB.ip
      })
    }
  },
  37960: (BB, TB, dB) => {
    dB.d(TB, {
      b: () => VB
    });
    class VB {
      constructor() {
        this.members = new Map
      }
      apply(BB) {
        const TB = {
          added: [],
          removed: [],
          settingChanges: []
        };
        for (const VB of BB.Ay) {
          let BB = this.members.get(VB.ny);
          if (BB || (BB = {
              name: null,
              settings: {}
            }, this.members.set(VB.ny, BB), TB.added.push(VB.ny)), null !== VB.ey && (BB.name = VB.ey), null !== VB.Bp || VB.Tp.length > 0) {
            const dB = null === VB.Bp ? {} : JSON.parse(VB.Bp);
            Object.assign(BB.settings, dB);
            for (const TB of VB.Tp) delete BB.settings[TB], dB[TB] = void 0;
            TB.settingChanges.push({
              playerId: VB.ny,
              settings: dB
            })
          }
        }
        for (const VB of BB.dp) {
          const BB = this.members.get(VB);
          var dB;
          if (BB) this.members.delete(VB), TB.removed.push({
            playerId: VB,
            name: null !== (dB = BB.name) && void 0 !== dB ? dB : void 0
          })
        }
        return TB
      }
      has(BB) {
        return this.members.has(BB)
      }
      ids() {
        return [...this.members.keys()]
      }
      getName(BB) {
        var TB, dB;
        return null !== (TB = null === (dB = this.members.get(BB)) || void 0 === dB ? void 0 : dB.name) && void 0 !== TB ? TB : void 0
      }
      getSettings(BB) {
        var TB;
        return null === (TB = this.members.get(BB)) || void 0 === TB ? void 0 : TB.settings
      }
      getSetting(BB, TB) {
        var dB;
        return null === (dB = this.members.get(BB)) || void 0 === dB ? void 0 : dB.settings[TB]
      }
      clear() {
        this.members.clear()
      }
    }
  },
  37983: (BB, TB, dB) => {
    dB.d(TB, {
      e: () => VB,
      i: () => yB
    });
    const VB = ["description", "label"];

    function yB(BB) {
      const TB = BB.type;
      return {
        type: TB,
        params: BB[TB]
      }
    }
  }
};
Object.freeze(modules);
for (const BB in modules) Object.freeze(modules[BB]);