export const id = 156;
export const ids = [156];
export const modules = {
  38642: (QQ, FQ, wQ) => {
    function LQ(QQ) {
      return !(!QQ.lobbyLeaderboardInfo && !QQ.lobbyManage)
    }
    wQ.d(FQ, {
      b: () => LQ
    })
  },
  38620: (QQ, FQ, wQ) => {
    wQ.d(FQ, {
      d: () => oQ,
      e: () => DQ
    });
    var LQ = wQ(22);
    let qQ = !1;

    function oQ() {
      return qQ
    }

    function DQ(QQ) {
      qQ !== QQ && (qQ = QQ, LQ.l.GA("replayViewer|videoExportChanged"))
    }
  },
  38508: (QQ, FQ, wQ) => {
    wQ.d(FQ, {
      e: () => oQ
    });
    var LQ = wQ(22),
      qQ = wQ(1911);

    function oQ(QQ) {
      let {
        taskId: FQ,
        progress: wQ
      } = QQ;
      const LQ = qQ.b.get("_tasks");
      null !== LQ && void 0 !== LQ && LQ[FQ] && qQ.b.apply({
        _tasks: {
          ...LQ,
          [FQ]: {
            ...LQ[FQ],
            progress: wQ
          }
        }
      })
    }
    LQ.l.subscribe("clientTaskProgress", (QQ => {
      oQ(QQ)
    }))
  },
  38640: (QQ, FQ, wQ) => {
    wQ.d(FQ, {
      b: () => AQ,
      f: () => tQ,
      g: () => xQ
    });
    var LQ = wQ(2753);
    const qQ = 0,
      oQ = 2,
      DQ = 3,
      kQ = 4;
    class vQ {
      constructor(QQ, FQ) {
        this.width = QQ, this.MH = FQ, this.data = void 0, this.next = 0, this.size = 0, this.data = new Float64Array(QQ * FQ)
      }
      push(QQ) {
        let FQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        const wQ = this.data.subarray(this.next * this.width, (this.next + 1) * this.width);
        for (let LQ = 0; LQ < this.width; LQ++) wQ[LQ] = QQ[FQ + LQ];
        return this.next = (this.next + 1) % this.MH, this.size = Math.min(this.size + 1, this.MH), wQ
      }
      lines() {
        const QQ = [],
          FQ = (this.next - this.size + this.MH) % this.MH;
        for (let wQ = 0; wQ < this.size; wQ++) {
          const LQ = (FQ + wQ) % this.MH * this.width;
          QQ.push(Array.from(this.data.subarray(LQ, LQ + this.width)).join(","))
        }
        return QQ
      }
    }

    function mQ(QQ) {
      return Number.isFinite(QQ) ? String(Math.round(10 * QQ) / 10) : String(QQ)
    }

    function uQ(QQ) {
      return Number.isFinite(QQ) ? QQ.toFixed(1) : String(QQ)
    }
    class HQ {
      constructor() {
        this.frames = 0, this.looked = 0, this.idle = 0, this.vJ = 0, this.pastLimit = 0, this.lockSkips = 0, this.Ft = 0, this.lost = 0, this.dropped = 0, this.longFrames = 0, this.dtMin = 1 / 0, this.dtMax = 0, this.dtSum = 0, this.raw = [0, 0], this.turned = [0, 0], this.peakRate = 0, this.events = 0, this.eventMax = 0, this.bigEvents = 0, this.outliers = 0, this.eventLines = 0, this.suppressed = 0
      }
    }
    class bQ {
      constructor() {
        var QQ = this;
        this.tally = new HQ, this.records = new vQ(10, 3600), this.events = new vQ(4, 12e3), this.event = new Float64Array(4), this.take = null, this.client = "js", this.started = !1, this.record = function(FQ) {
          let wQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
          const [LQ, vQ, HQ, bQ, YQ, xQ, AQ, tQ, eQ, MQ] = QQ.records.push(FQ, wQ), GQ = QQ.tally;
          switch (GQ.frames++, AQ) {
            case qQ:
              return void GQ.idle++;
            case kQ:
              return void GQ.Ft++;
            case DQ:
              return GQ.lockSkips++, void(0 === HQ && 0 === bQ || QQ.outlier(`lock skip dropped raw (${mQ(HQ)}, ${mQ(bQ)}) at ${uQ(LQ)} ms`))
          }
          GQ.looked++, Number.isFinite(vQ) && (GQ.dtMin = Math.min(GQ.dtMin, vQ), GQ.dtMax = Math.max(GQ.dtMax, vQ), GQ.dtSum += vQ, vQ > 0 && (GQ.peakRate = Math.max(GQ.peakRate, Math.hypot(YQ, xQ) / vQ))), GQ.raw[0] += HQ, GQ.raw[1] += bQ, GQ.turned[0] += YQ, GQ.turned[1] += xQ;
          const pQ = Math.abs(HQ) > MQ || Math.abs(bQ) > MQ,
            cQ = `raw (${mQ(HQ)}, ${mQ(bQ)}) over ${uQ(vQ)} ms, limit ${mQ(MQ)}, filter v (${tQ.toFixed(3)}, ${eQ.toFixed(3)}) px/ms, at ${uQ(LQ)} ms`;
          AQ === oQ ? (GQ.vJ++, QQ.outlier(`spike put right: ${cQ} -> turned (${mQ(YQ)}, ${mQ(xQ)})`)) : pQ ? (GQ.pastLimit++, QQ.outlier(`kept past limit: ${cQ}`)) : vQ > 50 && (GQ.longFrames++, QQ.outlier(`long frame: ${cQ}, turned in full`))
        }, this.onMouseMove = QQ => {
          const FQ = this.tally,
            {
              movementX: wQ,
              movementY: LQ
            } = QQ;
          FQ.events++;
          const qQ = Math.max(Math.abs(wQ), Math.abs(LQ));
          FQ.eventMax = Math.max(FQ.eventMax, qQ);
          const oQ = null !== document.pointerLockElement,
            DQ = this.event;
          DQ[0] = QQ.timeStamp, DQ[1] = wQ, DQ[2] = LQ, DQ[3] = oQ ? 1 : 0, this.events.push(DQ), qQ >= 200 && (FQ.bigEvents++, this.eventOutlier(`big mousemove (${wQ}, ${LQ}) at ${uQ(QQ.timeStamp)} ms, lock ${oQ?"ym":"free"}`))
        }, this.onLockChange = () => {
          const QQ = document.pointerLockElement;
          (0, LQ.m)("look", `pointer lock ${QQ?`gained (${QQ.tagName.toLowerCase()})`:"lost"} at ${uQ(performance.now())} ms`)
        }, this.onLockError = () => {
          (0, LQ.m)("look", `pointer lock request failed at ${uQ(performance.now())} ms`)
        }, this.onVisibility = () => {
          (0, LQ.m)("look", `page ${document.visibilityState} at ${uQ(performance.now())} ms`)
        }, this.flush = () => {
          this.takeRecords();
          const QQ = this.tally;
          if (this.tally = new HQ, 0 === QQ.events && 0 === QQ.raw[0] && 0 === QQ.raw[1] && 0 === QQ.lockSkips && 0 === QQ.vJ && 0 === QQ.dropped) return;
          const FQ = QQ.looked > 0 ? QQ.dtSum / QQ.looked : NaN,
            wQ = [`${QQ.frames} frames (${QQ.looked} looked, ${QQ.idle} idle${"wasm"===this.client?`, ${QQ.Ft} carried`:""})`, `dt avg ${uQ(FQ)} min ${uQ(QQ.dtMin)} max ${uQ(QQ.dtMax)}, ${QQ.longFrames} long`, `${QQ.events} mousemoves (max ${mQ(QQ.eventMax)} px, ${QQ.bigEvents} big)`, `raw (${mQ(QQ.raw[0])}, ${mQ(QQ.raw[1])}) turned (${mQ(QQ.turned[0])}, ${mQ(QQ.turned[1])})`, `peak ${QQ.peakRate.toFixed(2)} px/ms`, `put right ${QQ.vJ}, past limit ${QQ.pastLimit}, lock skips ${QQ.lockSkips}`, "lock " + (document.pointerLockElement ? "ym" : "free")];
          QQ.dropped > 0 && wQ.push(`${QQ.dropped} doubled spike copies dropped`), QQ.lost > 0 && wQ.push(`${QQ.lost} records lost`), QQ.suppressed > 0 && wQ.push(`${QQ.suppressed} outlier lines not shown`), (0, LQ.m)("look", `1s: ${wQ.join("; ")}`)
        }, this.dump = () => [`look records (${this.client}): nowMs,dtMs,rawX,rawY,turnedX,turnedY,outcome,vX,vY,limit`, ...this.records.lines(), "mousemove events: timeStamp,movementX,movementY,locked", ...this.events.lines()].join("\n")
      }
      start(QQ, FQ) {
        this.client = QQ, this.take = FQ;
        const {
          screen: wQ
        } = window;
        (0, LQ.m)("look", `start: ${QQ} client, dpr ${window.devicePixelRatio}, screen ${wQ.width}x${wQ.height}, pointer lock ${document.pointerLockElement?"ym":"free"}`), this.started || (this.started = !0, window.addEventListener("mousemove", this.onMouseMove, {
          capture: !0,
          passive: !0
        }), document.addEventListener("pointerlockchange", this.onLockChange), document.addEventListener("pointerlockerror", this.onLockError), document.addEventListener("visibilitychange", this.onVisibility), setInterval(this.flush, 1e3), (0, LQ.i)("look", this.dump))
      }
      outlier(QQ) {
        const FQ = this.tally;
        FQ.outliers >= 20 ? FQ.suppressed++ : (FQ.outliers++, (0, LQ.m)("look", QQ))
      }
      eventOutlier(QQ) {
        const FQ = this.tally;
        FQ.eventLines >= 10 ? FQ.suppressed++ : (FQ.eventLines++, (0, LQ.m)("look", QQ))
      }
      takeRecords() {
        var QQ;
        const FQ = null === (QQ = this.take) || void 0 === QQ ? void 0 : QQ.call(this);
        if (FQ && FQ.length >= 2) {
          this.tally.lost += FQ[0], this.tally.dropped += FQ[1];
          for (let QQ = 2; QQ + 10 <= FQ.length; QQ += 10) this.record(FQ, QQ)
        }
      }
      droppedCopy() {
        this.tally.dropped++
      }
      endTake() {
        this.takeRecords(), this.take = null
      }
    }
    let YQ = null;

    function xQ(QQ) {
      let FQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
      return YQ ??= new bQ, YQ.start(QQ, FQ), YQ.record
    }

    function AQ() {
      var QQ;
      null === (QQ = YQ) || void 0 === QQ || QQ.endTake()
    }

    function tQ() {
      var QQ;
      null === (QQ = YQ) || void 0 === QQ || QQ.droppedCopy()
    }
  },
  38500: (QQ, FQ, wQ) => {
    wQ.d(FQ, {
      d: () => hF,
      h: () => fF,
      i: () => VF
    });
    var LQ = wQ(3561),
      qQ = wQ(160),
      oQ = wQ(201),
      DQ = wQ(626),
      kQ = wQ(27),
      vQ = wQ(2676),
      mQ = wQ(3621),
      uQ = wQ(3605),
      HQ = wQ(1237);
    const bQ = new WeakMap;
    class YQ {
      constructor(QQ, FQ) {
        let wQ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {
          jmQ: !0
        };
        this.callbacks = FQ, this.options = wQ, this.XwQ = void 0, this.sessionId = void 0, this.Kr = [], this.amQ = !1, this.kx = !1, this.XmQ = void 0, this.Hr = 0, this.fqQ = 0, this.fmQ = (QQ, FQ) => {
          if (this.kx) return;
          const wQ = Number(QQ);
          this.amQ ? this.VmQ(wQ, FQ) : this.Kr.push({
            id: wQ,
            payload: FQ
          })
        }, this.dispose = () => {
          this.kx || (this.kx = !0, bQ.delete(this), this.Kr.length = 0, this.XmQ())
        }, this.XwQ = QQ, this.sessionId = QQ.sessionId, bQ.set(this, []), this.XmQ = this.hmQ()
      }
      JmQ(QQ) {
        this.XmQ(), this.XwQ = QQ, this.sessionId = QQ.sessionId, this.Hr = 0, this.fqQ = 0, this.XmQ = this.hmQ()
      }
      get Xs() {
        return this.fqQ
      }
      hmQ() {
        const QQ = this.XwQ.mp("*", this.fmQ);
        return this.options.jmQ && this.XwQ.zp(this.dispose), QQ
      }
      VmQ(QQ, FQ) {
        try {
          (0, mQ.dc)(QQ) && (FQ = (0, mQ.d)(QQ, uQ.Dx.from(FQ)));
          const wQ = bQ.get(this)[QQ];
          if ("function" !== typeof wQ) {
            if (this.callbacks.EmQ) return void this.callbacks.EmQ(QQ, FQ);
            throw new Error(`No onMessage handler registered for message id ${QQ}`)
          }
          wQ(FQ)
        } catch (wQ) {
          this.callbacks.nmQ(`Error in onMessage ${QQ} with payload ${JSON.stringify(FQ)}`, wQ)
        } finally {
          this.Hr++
        }
      }
      gmQ() {
        for (const {
            id: QQ,
            payload: FQ
          }
          of this.Kr) {
          if (this.kx) break;
          this.VmQ(QQ, FQ)
        }
        this.Kr.length = 0
      }
      vW() {
        return this.kx
      }
      PmQ() {
        if (this.amQ || this.kx) throw new Error("Trying to getOnMessageRegistrationHandler after registration finished");
        return {
          mp: (QQ, FQ) => {
            if (this.amQ || this.kx) throw new Error("Trying to call onMessage after registration finished");
            this.mp(QQ, FQ)
          },
          finishRegistration: () => {
            if (this.kx) throw new Error("Cannot finish message registration after disposal");
            this.amQ = !0, this.gmQ()
          }
        }
      }
      mp(QQ, FQ) {
        var wQ, LQ;
        null === (wQ = (LQ = this.callbacks).ZmQ) || void 0 === wQ || wQ.call(LQ);
        const qQ = bQ.get(this);
        for (; QQ > qQ.length;) qQ[qQ.length] = null;
        qQ[QQ] = FQ
      }
      send(QQ, FQ) {
        this.ymQ(), (0, HQ.J)(FQ) ? this.XwQ.HI(QQ, FQ) : this.XwQ.send(QQ, FQ)
      }
      ymQ() {
        var QQ, FQ;
        (this.fqQ++, 5 === xQ++) && (null === (QQ = (FQ = this.callbacks).ZmQ) || void 0 === QQ || QQ.call(FQ), xQ = 0)
      }
      vG() {
        this.dispose(), this.XwQ.vG()
      }
      leave() {
        this.dispose(), this.XwQ.leave()
      }
    }
    let xQ = 0;
    var AQ = wQ(3574);
    class tQ extends YQ {
      constructor(QQ) {
        super(QQ, {
          ZmQ: () => {
            (0, kQ.q)(!0) && (0, LQ.Ws)()
          },
          nmQ: (QQ, FQ) => {
            var wQ;
            null === (wQ = (0, vQ.d)()) || void 0 === wQ || wQ.MA(QQ, FQ)
          }
        }, {
          jmQ: !1
        }), (0, AQ.f)(QQ)
      }
      Vr(QQ, FQ) {
        return !!(0, AQ.k)((0, AQ.c)(), this.XwQ, QQ, FQ) && (this.ymQ(), !0)
      }
      JmQ(QQ) {
        this.BmQ(), super.JmQ(QQ), (0, AQ.f)(QQ)
      }
      vG() {
        super.vG(), this.BmQ()
      }
      BmQ() {
        this.XwQ.mG.PY.qN = void 0
      }
    }
    var eQ = wQ(22),
      MQ = wQ(1911),
      GQ = wQ(1725),
      pQ = wQ(36102);

    function cQ(QQ, FQ, wQ, LQ, qQ) {
      let oQ = arguments.length > 5 && void 0 !== arguments[5] && arguments[5];
      if (!QQ.bC.lFQ(QQ.WK)) return console.log("Got resync inven but don't have inven component"), void FQ.acknowledge(LQ);
      oQ && console.error("Had to sync inven"), FQ.kQQ(LQ, qQ) && wQ.GA("chestToggleFromServer", !1, !0), wQ.GA("syncedInvenFromServer")
    }
    var CQ = wQ(38508),
      SQ = wQ(38510),
      iQ = wQ(37573),
      WQ = wQ(37359),
      RQ = wQ(619),
      OQ = wQ(37938);

    function sQ(QQ, FQ, wQ) {
      const LQ = function(QQ) {
          const FQ = new Int32Array(QQ.length * OQ.h);
          return QQ.forEach(((QQ, wQ) => {
            const LQ = wQ * OQ.h;
            if (4 === QQ.length) {
              const [wQ, qQ, oQ, DQ] = QQ;
              FQ.set([wQ, qQ, oQ, wQ, qQ, oQ, DQ], LQ)
            } else {
              const [wQ, qQ, oQ, DQ, kQ, vQ, mQ] = QQ;
              FQ.set([wQ, oQ, kQ, qQ, DQ, vQ, mQ], LQ)
            }
          })), FQ
        }(wQ),
        qQ = (FQ, wQ, LQ, qQ) => {
          QQ.setBlockNoMulti(FQ, wQ, LQ, qQ, !0)
        };
      QQ.client.gameRecorder.isCapturing() ? (0, OQ.Bb)(LQ, (0, OQ.xb)(LQ), qQ) : QQ.dH.nH.zW(LQ, {
        yV: qQ,
        isHookId: FQ => QQ.blockChangeHasHooks(FQ),
        watched: () => function(QQ, FQ, wQ) {
          const LQ = [],
            qQ = (QQ, FQ, wQ) => {
              LQ.push(QQ, FQ, wQ)
            },
            oQ = new Set;
          for (let DQ = 0; DQ < wQ.length; DQ += OQ.h)
            for (let FQ = (0, RQ.L)(wQ[DQ]); FQ <= (0, RQ.L)(wQ[DQ + 3]); FQ++)
              for (let LQ = (0, RQ.L)(wQ[DQ + 1]); LQ <= (0, RQ.L)(wQ[DQ + 4]); LQ++)
                for (let kQ = (0, RQ.L)(wQ[DQ + 2]); kQ <= (0, RQ.L)(wQ[DQ + 5]); kQ++) {
                  const wQ = `${FQ}|${LQ}|${kQ}`;
                  oQ.has(wQ) || (oQ.add(wQ), QQ.blockDataOwner.forEachDataCell(FQ, LQ, kQ, qQ))
                }
          return FQ.forEachCell(qQ), Int32Array.from(LQ)
        }(QQ, FQ, LQ)
      }), QQ.dH.VQQ()
    }
    var rQ = wQ(36762),
      IQ = wQ(38515),
      UQ = wQ(38520),
      NQ = wQ(1038),
      TQ = wQ(1916);
    var KQ = wQ(4350);

    function zQ(QQ) {
      const FQ = QQ.nH;
      let wQ = 0,
        qQ = -1,
        DQ = -1 / 0,
        kQ = null,
        vQ = !0;
      const uQ = () => {
        if (++wQ % 10 !== 0) return;
        const uQ = (0, LQ.getLastReceivedPacketId)();
        if (uQ <= qQ) return;
        const [HQ, bQ, YQ] = QQ.bC.Qp(QQ.WK), xQ = ! function(QQ) {
          var FQ;
          let wQ = null === (FQ = QQ.bC.pwQ(QQ.WK)) || void 0 === FQ ? void 0 : FQ.dY;
          if (void 0 === wQ) return !1;
          const LQ = new Set;
          for (; void 0 !== wQ && !LQ.has(wQ);) {
            var qQ;
            LQ.add(wQ);
            const FQ = QQ.bC.getState(wQ, "smoothToServerPos"),
              oQ = Array.isArray(FQ) ? null : null === FQ || void 0 === FQ ? void 0 : FQ.serverPosition;
            if (oQ) {
              const FQ = QQ.bC.Qp(wQ);
              if (Math.abs(FQ[0] - oQ[0]) > 10 || Math.abs(FQ[1] - oQ[1]) > 10 || Math.abs(FQ[2] - oQ[2]) > 10) return !0
            }
            wQ = null === (qQ = QQ.bC.pwQ(wQ)) || void 0 === qQ ? void 0 : qQ.dY
          }
          return !1
        }(QQ) && function(QQ, FQ, wQ, LQ) {
          const qQ = oQ.e.tx;
          for (let oQ = 0; oQ < QQ.length; oQ++) {
            const DQ = QQ[oQ];
            if (!(0, KQ.g)(FQ, wQ, LQ, DQ[0] * qQ, DQ[1] * qQ, DQ[2] * qQ)) return !1
          }
          return !0
        }(FQ.gA.vx, HQ, bQ, YQ), AQ = null === kQ || Math.abs(HQ - kQ[0]) > 8 || Math.abs(bQ - kQ[1]) > 8 || Math.abs(YQ - kQ[2]) > 8, tQ = !vQ || AQ || performance.now() - DQ >= 1e4;
        vQ = xQ, xQ && tQ && (qQ = uQ, DQ = performance.now(), kQ = [HQ, bQ, YQ], (0, LQ.sendColyMessage)(mQ.cg, {
          Bo: uQ
        }))
      };
      return QQ.on("fH", uQ), () => {
        QQ.off("fH", uQ)
      }
    }
    var lQ = wQ(36395),
      jQ = wQ(334),
      aQ = wQ.n(jQ),
      XQ = wQ(6314),
      fQ = wQ(37604),
      VQ = wQ(37341),
      hQ = wQ(37311),
      JQ = wQ(4367),
      EQ = wQ(37639),
      nQ = wQ(37464),
      gQ = wQ(36999),
      PQ = wQ(37242),
      ZQ = wQ(38527),
      yQ = wQ(36382),
      BQ = wQ(36388),
      dQ = wQ(38536),
      QF = wQ(38542),
      FF = wQ(3527),
      wF = wQ(1503),
      LF = wQ(2668),
      qF = wQ(2845),
      oF = wQ(37803),
      DF = wQ(36675),
      kF = wQ(4619),
      vF = wQ(38585),
      mF = wQ(37625),
      uF = wQ(4109),
      HF = wQ(36753),
      bF = wQ(36839),
      YF = wQ(37645),
      xF = wQ(38550),
      AF = wQ(38564),
      tF = wQ(36993);
    class eF {
      constructor(QQ, FQ, wQ, LQ) {
        this.gameNameWithVariation = QQ, this.dH = wQ, this.connectionResume = LQ, this.stateReplicationHandler = void 0, this.stopChunkReports = () => {}, this.replayResume = null, this.stateReplicationHandler = new AF.b(FQ, this.dH)
      }
      setupStateReplicationHandlers() {
        this.stateReplicationHandler.setup(), (0, LQ.onGameResetOnce)((() => {
          this.stateReplicationHandler.dispose()
        }))
      }
      JmQ(QQ) {
        this.stateReplicationHandler.dispose(), this.stateReplicationHandler = new AF.b(QQ, this.dH), this.stateReplicationHandler.setup()
      }
      clearBlockRules() {
        const QQ = this.dH.nH;
        QQ.rwQ = new Set, QQ.NwQ = new Set, QQ.IwQ = new Set, QQ.TwQ = new Set, QQ.UwQ = [], QQ.KwQ = [], QQ.rV = new Set, QQ.Eo = [], QQ.KV = []
      }
      clearUiRequestsAndQTEs() {
        kF.c.reset(), (0, SQ.c)()
      }
      startChunkReports() {
        const QQ = function(QQ) {
            let FQ = null,
              wQ = -1 / 0,
              qQ = null;
            const oQ = () => {
                qQ = null;
                const oQ = Math.ceil(QQ.JI[0]),
                  DQ = Math.ceil(QQ.JI[1]);
                FQ && FQ[0] === oQ && FQ[1] === DQ || (FQ = [oQ, DQ], wQ = performance.now(), (0, LQ.sendColyMessage)(mQ.ag, {
                  gm: oQ,
                  Pm: DQ
                }))
              },
              DQ = () => {
                null === qQ && (qQ = setTimeout(oQ, Math.max(0, wQ + 250 - performance.now())))
              };
            return oQ(), QQ.on("addRemoveDistanceChanged", DQ), () => {
              QQ.off("addRemoveDistanceChanged", DQ), null !== qQ && (clearTimeout(qQ), qQ = null)
            }
          }(this.dH.nH),
          FQ = zQ(this.dH);
        this.stopChunkReports = () => {
          QQ(), FQ()
        }
      }
      restartChunkStreaming() {
        (0, PQ.h)(this.dH, (0, vQ.c)().recentChunkEdits.chunksEditedSince(this.connectionResume.getDroppedAt() - ZQ.d)), this.startChunkReports()
      }
      setupOnMessageListeners(QQ, FQ) {
        const wQ = this.dH,
          qQ = this.gameNameWithVariation;
        QQ.mp(mQ.mc, (QQ => {
          let {
            fw: FQ,
            Vw: LQ,
            hw: qQ,
            Jw: oQ,
            Ew: DQ,
            nw: kQ,
            gw: vQ,
            Pw: mQ,
            Zw: uQ
          } = QQ;
          if (!wQ.bC.dQQ(FQ, "itemState")) return void(0, VQ.j)(wQ, FQ, [DQ, kQ, vQ], LQ, {
            amount: qQ,
            attributes: JSON.parse(oQ),
            Pw: mQ,
            size: uQ
          });
          const HQ = wQ.bC.getState(FQ, "itemState");
          HQ.amount = qQ, HQ.Pw = mQ, HQ.creationTime = Date.now(), (0, hQ.setServerPosition)(wQ.bC.getState(FQ, "smoothToServerPos"), DQ, kQ, vQ)
        })), QQ.mp(mQ.ab, (QQ => {
          (0, rQ.c)(wQ).setCantPickUp(QQ, !0), wQ.bC.dQQ(QQ, "itemState") && (wQ.bC.getState(QQ, "itemState").Pw = !0)
        })), QQ.mp(mQ.Md, (QQ => {
          (0, rQ.c)(wQ).setCantPickUp(QQ, !1), wQ.bC.dQQ(QQ, "itemState") && (wQ.bC.getState(QQ, "itemState").Pw = !1)
        })), QQ.mp(mQ.Fc, (QQ => {
          MQ.b.applyNewClientOptions(QQ)
        })), QQ.mp(mQ.Jc, (QQ => {
          let {
            eId: FQ,
            settings: LQ
          } = QQ;
          (0, bF.c)(FQ);
          for (const wQ in LQ)(0, bF.b)(FQ, wQ, LQ[wQ]);
          if ("canSee" in LQ && wQ.bC.dQQ(FQ, "hidingMeshManager")) {
            const QQ = wQ.bC.getState(FQ, "hidingMeshManager");
            QQ.canSee = (0, YF.e)("canSee", LQ.canSee), QQ._forceUpdate = !0
          }
        })), QQ.mp(mQ.We, (QQ => {
          let {
            LF: FQ,
            qF: qQ,
            oF: oQ,
            DF: DQ
          } = QQ;
          const kQ = [qQ, oQ, DQ];
          wQ.bC.setPosition(wQ.WK, kQ), (0, LQ.sendColyMessage)(mQ.ug, {
            Wm: FQ,
            Rm: JQ.g
          }), eQ.l.GA("localPlayerTeleported", {
            pos: kQ,
            isCorrection: !1
          })
        })), QQ.mp(mQ.Wc, (QQ => {
          let {
            QQ: FQ,
            FQ: wQ,
            wQ: LQ,
            LQ: qQ
          } = QQ;
          this.stateReplicationHandler.setUpIfQueued(FQ);
          const oQ = [wQ, LQ, qQ];
          eQ.l.GA(`otherPlayerTeleported|${FQ}`, {
            pos: oQ
          })
        })), QQ.mp(mQ.md, (QQ => {
          let {
            Qq: FQ,
            Fq: qQ,
            wq: oQ,
            Lq: DQ,
            qq: kQ,
            oq: vQ,
            Dq: uQ,
            vq: HQ,
            kq: bQ,
            Hq: YQ
          } = QQ;
          const xQ = [qQ, oQ, DQ];
          wQ.bC.setPosition(wQ.WK, xQ);
          const AQ = wQ.bC.tFQ(wQ.WK),
            tQ = wQ.bC.lV(wQ.WK);
          aQ().set(tQ.bV, 0, 0, 0), aQ().set(tQ.YV, 0, 0, 0), aQ().set(tQ.Qt, kQ, vQ, uQ), tQ.xV(), AQ._flying = null !== YQ, YQ ? (AQ.flyAccel.bq = YQ.bq, AQ.flyAccel.Yq = YQ.Yq) : AQ.flyAccel.reset(), HQ && AQ.movementType === XQ.q.GLIDING && (AQ.mq = HQ.mq, aQ().copy(AQ.uq, HQ.uq)), (0, LQ.sendColyMessage)(mQ.ug, {
            Wm: FQ,
            Rm: JQ.g
          }), eQ.l.GA("localPlayerTeleported", {
            pos: xQ,
            isCorrection: !0
          })
        }));

        function oQ() {
          return wQ.bC.jFQ(wQ.WK)
        }
        QQ.mp(mQ.jb, (QQ => {
          let {
            chatMsgId: FQ,
            content: wQ,
            chatterEId: LQ
          } = QQ;
          eQ.l.GA("chat", {
            serverChatMsgId: FQ,
            content: wQ,
            chatterEId: LQ
          }, !0)
        })), QQ.mp(mQ.bd, (QQ => {
          LF.d.onReceiveColyseusPing(QQ)
        })), QQ.mp(mQ.ve, (QQ => {
          let {
            key: FQ,
            value: wQ
          } = QQ;
          (0, GQ.setCookie)(qQ, FQ, wQ)
        })), QQ.mp(mQ.Be, (QQ => {
          eQ.l.GA("setDiscordReportKey", QQ)
        })), (0, LQ.onGameResetOnce)((() => {
          this.stopChunkReports()
        })), QQ.mp(mQ.ec, (FQ => {
          const {
            eF: qQ,
            MF: oQ
          } = FQ;
          if ((0, LQ.setAdjustment)(oQ), this.connectionResume.onInitialInfo(FQ.GF, FQ.pF), LQ.offlineInputReplay.Qr(FQ.cF), this.connectionResume.isResuming()) {
            console.log("Resumed the connection as eId", qQ);
            try {
              null === FQ.CF && (0, vQ.c)().client.inventoryPrediction.dropPending(), this.stopChunkReports(), this.clearBlockRules(), MQ.b.apply({
                shopInfo: null,
                _shopVersion: TQ.c
              });
              const LQ = wQ.bC.aFQ(wQ.WK);
              LQ.Tw && (LQ.chestClosed(), eQ.l.GA("chestToggleFromServer", !1, !0)), this.clearUiRequestsAndQTEs(), eQ.l.GA("initInfoReceived", QQ)
            } finally {
              const QQ = null === FQ.CF ? null : {
                sync: null,
                endSeq: null
              };
              this.replayResume = QQ, this.connectionResume.onResumeInitialInfo(FQ.CF, (() => {
                QQ.endSeq = (0, vQ.c)().client.inventoryPrediction.lastActionSeq
              })), null === QQ && this.restartChunkStreaming()
            }
          } else console.log("Local client is eId", qQ), eQ.l.GA("loadingScreenState", "loadingPage:loadingWorld"), wQ.FFQ = qQ, wQ.bC.dQQ(wQ.WK, wQ.bC.names.entityName) && wQ.bC.lT(wQ.WK, wQ.bC.names.entityName), (0, vQ.c)().setEntityName(wQ.FFQ, (0, vQ.c)().getRawEntityName(wQ.WK)), wQ.iK[wQ.FFQ] = {}, wQ.bC.pT(wQ.WK, wQ.bC.names.entityName), eQ.l.GA("initInfoReceived", QQ), this.startChunkReports(), DQ.client.onServerConnectionFinalised()
        })), QQ.mp(mQ.ce, (() => {
          this.connectionResume.isResuming() ? this.connectionResume.onResumed((() => {
            const QQ = this.replayResume;
            if (this.replayResume = null, !QQ) return;
            this.restartChunkStreaming();
            const {
              inventoryPrediction: FQ
            } = (0, vQ.c)().client, {
              sync: qQ
            } = QQ, oQ = new Set(LQ.offlineInputReplay.takeDroppedActions());
            if (qQ) {
              var DQ;
              const LQ = null !== (DQ = QQ.endSeq) && void 0 !== DQ ? DQ : FQ.lastActionSeq;
              FQ.forget((QQ => QQ > qQ.ZQ && QQ <= LQ || oQ.has(QQ))), cQ(wQ, FQ, eQ.l, qQ.ZQ, qQ.load)
            } else FQ.dropPending(), FQ.askForSnapshot()
          })) : console.warn("ResumeComplete arrived without a resume")
        })), QQ.mp(mQ.Ze, (QQ => {
          eQ.l.GA("TopRightHelper", QQ, !0)
        })), QQ.mp(mQ.td, (QQ => {
          let {
            type: FQ,
            location1: wQ,
            location2: LQ,
            location3: qQ,
            score: oQ
          } = QQ;
          (0, qF.t)({
            type: FQ,
            location1: wQ,
            location2: LQ,
            location3: qQ,
            score: oQ
          })
        })), QQ.mp(mQ.ae, (QQ => {
          let {
            type: FQ,
            resourceType: wQ,
            amount: LQ,
            category: qQ,
            itemName: oQ
          } = QQ;
          (0, qF.x)({
            type: FQ,
            resourceType: wQ,
            amount: LQ,
            category: qQ,
            itemName: oQ
          })
        })), QQ.mp(mQ.Q, (QQ => {
          wQ.nH.rwQ.add(QQ), wQ.nH.NwQ.delete(QQ)
        })), QQ.mp(mQ.X, (QQ => {
          wQ.nH.NwQ.add(QQ), wQ.nH.rwQ.delete(QQ)
        })), QQ.mp(mQ.Qd, (QQ => {
          wQ.nH.NwQ.delete(QQ), wQ.nH.rwQ.delete(QQ)
        })), QQ.mp(mQ.W, (QQ => {
          wQ.nH.IwQ.add(QQ), wQ.nH.TwQ.delete(QQ)
        })), QQ.mp(mQ.$, (QQ => {
          wQ.nH.TwQ.add(QQ), wQ.nH.IwQ.delete(QQ)
        })), QQ.mp(mQ.Vd, (QQ => {
          wQ.nH.TwQ.delete(QQ), wQ.nH.IwQ.delete(QQ)
        })), QQ.mp(mQ.T, (QQ => {
          (0, HQ.mb)(QQ, wQ.nH.KwQ), (0, HQ.mb)(QQ, wQ.nH.UwQ), wQ.nH.UwQ.push(QQ)
        })), QQ.mp(mQ.Y, (QQ => {
          (0, HQ.mb)(QQ, wQ.nH.UwQ), (0, HQ.mb)(QQ, wQ.nH.KwQ), wQ.nH.KwQ.push(QQ)
        })), QQ.mp(mQ.Td, (QQ => {
          (0, HQ.mb)(QQ, wQ.nH.UwQ), (0, HQ.mb)(QQ, wQ.nH.KwQ)
        })), QQ.mp(mQ.lf, (QQ => {
          let {
            Yw: FQ,
            xw: LQ
          } = QQ;
          LQ ? wQ.nH.rV.delete(FQ) : wQ.nH.rV.add(FQ)
        })), QQ.mp(mQ.kf, (QQ => {
          let {
            Eo: FQ,
            Po: LQ
          } = QQ;
          DQ.updateWalkThroughRect(wQ.WK, FQ, LQ)
        })), (0, LQ.onGameResetOnce)((() => {
          this.clearBlockRules()
        })), QQ.mp(mQ.Te, (QQ => {
          (0, CQ.e)(QQ)
        })), QQ.mp(mQ.Xb, (QQ => {
          iQ.d.applyServerUpdate(QQ)
        })), QQ.mp(mQ.bb, (QQ => {
          DQ.applyServerBlocks((() => {
            ! function(QQ, FQ) {
              for (const {
                  Vo: wQ,
                  ho: LQ
                }
                of FQ) {
                const FQ = WQ.d[LQ];
                if (FQ) {
                  const {
                    compX: LQ,
                    compY: qQ,
                    compZ: oQ,
                    mainMultiblock: DQ
                  } = FQ;
                  QQ.KU(wQ[0] - LQ, wQ[1] - qQ, wQ[2] - oQ, DQ)
                }
              }
              for (const {
                  Vo: wQ,
                  ho: LQ,
                  Jo: qQ
                }
                of FQ) QQ.setBlockNoMulti(wQ[0], wQ[1], wQ[2], LQ, !0), QQ.blockDataOwner.setBlockData(wQ[0], wQ[1], wQ[2], null === qQ ? void 0 : JSON.parse(qQ)), QQ.blockAdded(wQ[0], wQ[1], wQ[2], LQ)
            }(DQ, QQ)
          })), eQ.l.GA("changeBlockFail", QQ), DQ.client.triggerGameCallback("onChangeBlockFail", QQ), eQ.l.GA("EditBoard", {
            pos: null
          }), eQ.l.GA("EditCodeBlock", {
            pos: null,
            canChangePos: null
          })
        })), QQ.mp(mQ.Zc, (QQ => {
          let {
            pickUpItems: FQ,
            pickUpAckSeq: wQ
          } = QQ;
          for (const {
              name: LQ,
              amount: qQ,
              attributes: DQ
            }
            of FQ) oQ().pickUpItem({
            name: LQ,
            amount: qQ,
            typeObj: VQ.w[LQ],
            attributes: DQ
          });
          (0, vQ.c)().client.inventoryPrediction.serverChangeApplied(wQ)
        })), QQ.mp(mQ.Ee, (QQ => {
          let {
            index: FQ,
            name: LQ,
            amount: qQ,
            attributes: oQ,
            setSlotAckSeq: DQ
          } = QQ;
          const kQ = wQ.bC.aFQ(wQ.WK);
          (FQ < kQ.playerInventory.numSlots || kQ.Tw || kQ.inCreative) && kQ.setItemSlot(FQ, LQ, qQ, oQ), (0, vQ.c)().client.inventoryPrediction.serverChangeApplied(DQ)
        })), QQ.mp(mQ.Re, (QQ => {
          let {
            Nw: FQ,
            jw: LQ,
            ZQ: qQ
          } = QQ;
          const {
            inventoryPrediction: oQ
          } = (0, vQ.c)().client, DQ = () => {
            wQ.bC.aFQ(wQ.WK).loadFromString(FQ)
          };
          this.replayResume && (this.replayResume.sync = {
            ZQ: qQ,
            load: DQ
          }), cQ(wQ, oQ, eQ.l, qQ, DQ, LQ)
        })), QQ.mp(mQ.jc, (QQ => {
          (0, vQ.c)().client.inventoryPrediction.acknowledge(QQ)
        })), QQ.mp(mQ.x, (QQ => {
          let {
            KQ: FQ,
            zQ: wQ,
            lQ: LQ,
            jQ: qQ
          } = QQ;
          (0, vQ.c)().client.itemDropPrediction.onActionItemDrops(FQ, wQ, LQ, qQ)
        })), QQ.mp(mQ.sb, (QQ => {
          oQ().clearInventory(), (0, vQ.c)().client.inventoryPrediction.serverChangeApplied(QQ)
        })), QQ.mp(mQ.sc, (QQ => {
          let {
            leaveEventType: FQ,
            category: wQ,
            subCategory: LQ,
            value: qQ
          } = QQ;
          (0, qF.J)({
            leaveEventType: FQ,
            category: wQ,
            subCategory: LQ,
            value: qQ
          })
        })), QQ.mp(mQ.Cb, (QQ => {
          let {
            cat1: FQ,
            cat2: wQ,
            cat3: LQ,
            value: qQ
          } = QQ;
          (0, qF.q)({
            cat1: FQ,
            cat2: wQ,
            cat3: LQ,
            value: qQ
          })
        }));
        const DQ = (0, vQ.c)();
        QQ.mp(mQ.vb, (QQ => {
          DQ.applyServerBlocks((() => {
            sQ(DQ, iQ.d, QQ)
          }))
        })), QQ.mp(mQ.Fe, (QQ => {
          eQ.l.GA("setSelectedInventorySlotI", QQ, !0)
        })), QQ.mp(mQ.rc, (QQ => {
          let {
            category: FQ,
            timeframe: wQ,
            data: LQ
          } = QQ;
          eQ.l.GA("leaderboardResponse", {
            category: FQ,
            timeframe: wQ,
            data: LQ
          })
        })), QQ.mp(mQ.P, (QQ => {
          let {
            AF: FQ,
            tF: wQ
          } = QQ;
          this.stateReplicationHandler.setUpIfQueued(FQ), FQ = (0, lQ.c)(FQ), (0, vQ.c)().client.gameRecorder.recordBulletShot(FQ, wQ), eQ.l.GA(`bulletShot|${FQ}`, {
            bulletDirections: wQ
          })
        })), QQ.mp(mQ.$b, (QQ => {
          let {
            tL: FQ,
            eL: wQ
          } = QQ;
          eQ.l.GA("damagedByOtherPlayer", {
            tL: FQ,
            direction: wQ
          }, !0)
        })), QQ.mp(mQ.kd, (QQ => {
          eQ.l.GA("playerKilled", QQ, !0), (0, vQ.c)().client.gameRecorder.recordPlayerKilled(QQ.deadEId, QQ.killerEId, QQ.withItem, QQ.killstreak)
        })), QQ.mp(mQ.Eb, (QQ => {
          eQ.l.GA("customKillfeed", QQ, !0), (0, vQ.c)().client.gameRecorder.recordCustomKillfeed(QQ.killer, QQ.victim, QQ.withItem)
        })), QQ.mp(mQ.xd, (QQ => {
          let {
            Aq: FQ,
            tq: LQ
          } = QQ;
          this.stateReplicationHandler.setUpIfQueued(FQ);
          const qQ = wQ.bC.owQ(FQ);
          null !== qQ && void 0 !== qQ && qQ.isGun() && qQ.reload(Date.now(), LQ)
        })), QQ.mp(mQ.Pe, (() => {
          eQ.l.GA("showShopTutorial", null, !0)
        })), QQ.mp(mQ.qd, (QQ => {
          eQ.l.GA("progressBarUpdate", QQ, !0)
        })), QQ.mp(mQ.ic, (QQ => {
          eQ.l.GA("middleScreenBarInitiate", {
            duration: QQ.kF,
            vF: QQ.vF,
            horizBarRemOffset: QQ.mF
          }, !0)
        })), QQ.mp(mQ.Ed, (() => {
          eQ.l.GA("middleScreenBarRemove", !0)
        })), QQ.mp(mQ.he, (QQ => {
          let {
            iQ: FQ,
            WQ: LQ
          } = QQ;
          const qQ = LQ ? (0, mF.g)(wQ, LQ) : void 0;
          eQ.l.GA("sendHitmarker", {
            iQ: FQ,
            screenPos: qQ
          }, !0)
        })), QQ.mp(mQ.ze, (QQ => {
          let {
            id: FQ,
            position: wQ,
            style: LQ,
            oL: qQ,
            kL: oQ
          } = QQ;
          eQ.l.GA("setDirectionArrow", {
            id: FQ,
            position: wQ,
            style: LQ,
            text: (0, mQ.q)(qQ),
            kL: oQ
          }, !0)
        })), QQ.mp(mQ.pb, (QQ => {
          let {
            id: FQ
          } = QQ;
          eQ.l.GA("clearDirectionArrow", {
            id: FQ
          }, !0)
        })), QQ.mp(mQ.y, (QQ => {
          let {
            DQ: FQ,
            kQ: LQ,
            animationScript: qQ,
            vQ: oQ,
            mQ: DQ,
            uQ: kQ,
            HQ: mQ
          } = QQ;
          FQ = (0, lQ.c)(FQ);
          const uQ = null === qQ && null !== kQ ? (0, IQ.g)(kQ, mQ) : qQ;
          (0, vQ.c)().client.gameRecorder.recordAnimateEntity(FQ, LQ, uQ, oQ, DQ), (0, rQ.c)(wQ).animations.animateEntity(FQ, LQ, qQ, oQ, DQ, kQ, mQ), null !== qQ || FQ === wQ.WK && LQ === HF.h.Emote && (0, vQ.c)().client.cameraController.endTemporaryThirdPerson()
        })), QQ.mp(mQ.cf, (QQ => {
          let {
            Zo: FQ,
            yo: wQ
          } = QQ;
          if (DQ.dJ(FQ[0], FQ[1], FQ[2])) {
            const QQ = (0, vQ.c)().JG(FQ[0], FQ[1], FQ[2]);
            (0, vQ.c)().updateMailboxContents(FQ[0], FQ[1], FQ[2], QQ, wQ)
          }
        })), QQ.mp(mQ.lb, (QQ => {
          let {
            aQ: FQ,
            XQ: LQ,
            fQ: qQ,
            VQ: oQ,
            hQ: DQ,
            JQ: kQ,
            EQ: mQ,
            nQ: uQ
          } = QQ;
          const HQ = wQ.bC.aFQ(wQ.WK);
          if (kQ) {
            const {
              PQ: QQ,
              ZQ: FQ
            } = uQ;
            return (0, vQ.c)().client.inventoryPrediction.kQQ(FQ, (() => {
              HQ.chestRefreshed(LQ, qQ, oQ, mQ, QQ)
            })) && eQ.l.GA("chestToggleFromServer", !1, !0), void eQ.l.GA("chestRefreshedFromServer")
          }(FQ || HQ.Tw) && (FQ ? (HQ.chestOpened(LQ, qQ, oQ, DQ, mQ), null !== DQ && (0, vQ.c)().client.ironChestPasskeyCache.onChestOpened(oQ, DQ)) : HQ.chestClosed(), eQ.l.GA("chestToggleFromServer", FQ, !0))
        })), QQ.mp(mQ.Ib, (QQ => {
          let {
            craftingRecipeItemName: FQ,
            recipesForItem: LQ
          } = QQ;
          FQ ? DQ.craftingManager.editRecipesForPlayer(wQ.WK, FQ, LQ) : DQ.craftingManager.resetAllPlayerRecipes(wQ.WK), eQ.l.GA("craftingRecipesEdited", {
            itemName: FQ,
            recipesForItem: LQ
          })
        })), QQ.mp(mQ.He, (QQ => {
          let {
            vehicleEId: FQ,
            overrides: wQ
          } = QQ;
          (0, vQ.c)().applyRiddenVehicleSettingOverrides(FQ, wQ)
        })), QQ.mp(mQ.hf, (QQ => {
          let {
            rw: FQ,
            Iw: LQ,
            Uw: qQ
          } = QQ;
          const oQ = wQ.bC.tFQ(wQ.WK).physicsState.type === XQ.r.SLEEPING && FQ === XQ.r.DEFAULT;
          (0, vQ.c)().updatePositionAndPhysics(wQ.WK, {
            type: FQ,
            tier: LQ
          }, !0, qQ), oQ && (0, vQ.c)().updateHeldVehicleStatus()
        })), QQ.mp(mQ.cb, (QQ => {
          let {
            YL: FQ,
            xL: LQ
          } = QQ;
          wQ.bC.zFQ(wQ.WK).setPose(FQ, LQ)
        })), QQ.mp(mQ.de, (QQ => {
          (0, xF.c)(QQ)
        })), QQ.mp(mQ.hd, (QQ => {
          for (const FQ of QQ)(0, EQ.B)(FQ);
          eQ.l.GA("playerCosmeticsUpdated", QQ, !0)
        })), QQ.mp(mQ.D, (QQ => {
          for (const FQ of QQ)(0, DF.h)(wQ, FQ)
        })), QQ.mp(mQ.wc, (QQ => {
          let {
            RQ: FQ,
            OQ: LQ,
            rQ: qQ,
            IQ: oQ,
            UQ: kQ,
            NQ: vQ,
            TQ: mQ
          } = QQ;
          this.stateReplicationHandler.setUpIfQueued(FQ), FQ = (0, lQ.c)(FQ);
          const uQ = wQ.bC.BFQ(FQ);
          if (uQ && (uQ.lastHurtTime = performance.now()), (0, fQ.playRigHurt)(wQ, FQ, vQ), eQ.l.GA("lifeformHurt", {
              eId: FQ,
              TQ: mQ
            }), LQ) {
            const QQ = (0, mF.g)(wQ, LQ.WQ);
            eQ.l.GA("yourAttackHit", {
              iQ: oQ,
              screenPos: QQ,
              hitSelf: FQ === wQ.WK
            })
          }
          FQ === wQ.WK && (DQ.shakePlayerCamera(FQ, kQ / 40, 200), eQ.l.GA("closeShopOnDamaged", null), eQ.l.GA("damagedByOtherPlayer", {
            tL: null,
            direction: vQ,
            UQ: kQ
          }, !0));
          const HQ = wQ.bC.Qp(FQ);
          if (HQ && (qQ || oQ)) {
            const QQ = [HQ[0], HQ[1] + 1, HQ[2]];
            qQ && (0, nQ.h)(wQ, nQ.x, QQ, 15), oQ && (0, nQ.h)(wQ, nQ.o, QQ, 10)
          }
        })), QQ.mp(mQ.vc, (QQ => {
          let {
            Fw: FQ,
            ww: LQ,
            Lw: qQ
          } = QQ;
          (0, rQ.c)(wQ).setHealthFrac((0, lQ.c)(FQ), qQ), eQ.l.GA("lifeformHealthChanged", {
            eId: (0, lQ.c)(FQ),
            ww: LQ,
            Lw: qQ
          })
        })), QQ.mp(mQ.H, (QQ => {
          let {
            ew: FQ,
            Mw: LQ
          } = QQ;
          (0, vQ.c)().playerAttacked(wQ.WK, FQ, LQ)
        })), QQ.mp(mQ.qc, (QQ => {
          (0, vQ.c)().client.leaveGameUnwanted({
            reason: QQ,
            requiresRefresh: !1,
            canReconnect: !1,
            automaticallyReconnect: !1
          }), (0, wF.navigatePreserveSearch)("/")
        })), QQ.mp(mQ.Dd, (QQ => {
          let {
            Gw: FQ,
            pw: wQ,
            Cw: LQ
          } = QQ;
          oQ().removeItemName(FQ, wQ), (0, vQ.c)().client.inventoryPrediction.serverChangeApplied(LQ)
        })), QQ.mp(mQ.qe, (QQ => {
          const {
            uv: FQ,
            twQ: LQ
          } = (0, gQ.c)([QQ[0], QQ[1], QQ[2]]);
          tF.e.setLookDirection(wQ, FQ, LQ), (0, PQ.p)(FQ, LQ);
          const qQ = wQ.bC.zFQ(wQ.WK);
          qQ && (qQ.heading = FQ)
        })), QQ.mp(mQ.te, (QQ => {
          DQ.client.cameraController.setCameraZoom(QQ)
        })), QQ.mp(mQ.Ne, (QQ => {
          let {
            Aw: FQ,
            tw: LQ
          } = QQ;
          DQ.shakePlayerCamera(wQ.WK, FQ, LQ)
        })), QQ.mp(mQ.yb, (QQ => {
          (0, FF.onCosmeticPackGranted)(QQ)
        })), QQ.mp(mQ.le, (QQ => {
          eQ.l.GA("serverUpdating", Date.now() + QQ, !0)
        })), QQ.mp(mQ.Cc, UQ.d), QQ.mp(mQ.Sc, (QQ => {
          let {
            id: FQ,
            WL: wQ
          } = QQ;
          const {
            type: qQ,
            params: oQ
          } = (0, vF.f)(wQ), DQ = {
            ...oQ
          };
          for (const LQ of vF.c) LQ in DQ && DQ[LQ] && (DQ[LQ] = (0, mQ.q)(DQ[LQ]));
          kF.c.queueQTE(FQ, qQ, DQ).getResult().then((QQ => {
            "boolean" === typeof QQ && (0, LQ.sendColyMessage)(mQ.Yh, {
              qteId: FQ,
              qteResponse: QQ
            })
          }))
        })), QQ.mp(mQ.Hd, (QQ => {
          kF.c.cancelQTE(QQ)
        })), (0, LQ.onGameResetOnce)((() => {
          kF.c.reset()
        })), QQ.mp(mQ.Uc, (QQ => {
          let {
            id: FQ,
            clientParameters: wQ
          } = QQ;
          (0, SQ.f)(FQ, wQ)
        })), QQ.mp(mQ.Jd, (QQ => {
          (0, SQ.h)(QQ)
        })), QQ.mp(mQ.bf, (QQ => {
          let {
            text: FQ,
            id: wQ
          } = QQ;
          (0, SQ.i)(wQ, FQ, (QQ => {
            (0, LQ.sendColyMessage)(mQ.tj, {
              Wu: wQ,
              Ru: QQ,
              Ou: 5
            })
          }))
        })), QQ.mp(mQ.Lb, (QQ => {
          let {
            fF: FQ,
            VF: wQ,
            hF: LQ,
            JF: qQ,
            EF: oQ,
            nF: DQ
          } = QQ;
          FQ = (0, lQ.c)(FQ), (0, vQ.c)().client.updateEffect(FQ, wQ, {
            displayName: LQ,
            icon: qQ,
            duration: oQ,
            level: DQ
          })
        })), QQ.mp(mQ.Ad, (QQ => {
          let {
            fF: FQ,
            VF: wQ
          } = QQ;
          FQ = (0, lQ.c)(FQ), (0, vQ.c)().client.removeEffect(FQ, wQ)
        })), QQ.mp(mQ.pc, (QQ => {
          wQ.bC.zFQ(wQ.WK).jumpMultiplier.setMultiplierType("jumpEffectAmount", QQ)
        })), QQ.mp(mQ.af, (QQ => {
          eQ.l.GA("ttbEffectMultiplier", QQ)
        })), (0, LQ.onGameResetOnce)((() => {
          wQ.bC.zFQ(wQ.WK).jumpMultiplier.setMultiplierType("jumpEffectAmount", 1)
        })), QQ.mp(mQ.Mc, (QQ => {
          (0, nQ.l)(wQ, (0, HQ.x)(QQ))
        })), QQ.mp(mQ.Oc, (QQ => {
          uF.e[QQ.xq] ? (0, nQ.l)(wQ, {
            ...uF.e[QQ.xq],
            pos1: QQ.pos1,
            pos2: QQ.pos2
          }) : console.error(`Unknown preset id: ${QQ.xq}`)
        })), QQ.mp(mQ.ed, (QQ => {
          var FQ, wQ;
          let {
            gF: LQ,
            PF: qQ,
            ZF: oQ,
            yF: DQ
          } = QQ, {
            dF: kQ,
            Qw: mQ
          } = null !== DQ && void 0 !== DQ ? DQ : {};
          const {
            BF: uQ
          } = null !== DQ && void 0 !== DQ ? DQ : {};
          kQ = null !== (FQ = kQ) && void 0 !== FQ ? FQ : void 0, mQ = null !== (wQ = mQ) && void 0 !== wQ ? wQ : void 0, "string" === typeof uQ && this.stateReplicationHandler.setUpIfQueued(uQ), (0, vQ.c)().client.gameRecorder.recordPlaySound(LQ, qQ, oQ, DQ), yQ.b.play((0, BQ.c)(LQ), qQ, uQ, kQ, mQ).rate(oQ)
        })), QQ.mp(mQ.oe, (QQ => {
          let {
            pos: FQ,
            data: wQ
          } = QQ;
          DQ.blockDataOwner.setBlockData(FQ[0], FQ[1], FQ[2], wQ), DQ.blockAdded(FQ[0], FQ[1], FQ[2], DQ.JG(FQ[0], FQ[1], FQ[2]))
        })), QQ.mp(mQ.Yc, (QQ => {
          let {
            info: FQ
          } = QQ;
          eQ.l.GA("overShopInfo", FQ, !0)
        })), QQ.mp(mQ.Vb, (QQ => {
          let {
            aw: LQ,
            Xw: qQ
          } = QQ;
          FQ.openShop(wQ.WK, LQ, qQ)
        })), QQ.mp(mQ.z, (QQ => {
          wQ.bC.lV(wQ.WK).applyImpulse(QQ)
        })), QQ.mp(mQ.Je, (QQ => {
          const FQ = wQ.bC.lV(wQ.WK);
          aQ().set(FQ.bV, 0, 0, 0), aQ().set(FQ.YV, 0, 0, 0), aQ().copy(FQ.Qt, QQ), FQ.xV()
        })), QQ.mp(mQ.xc, (QQ => {
          console.error(`[logErrorToConsole]: ${QQ}`)
        })), QQ.mp(mQ.Rb, (QQ => {
          let {
            Sw: FQ,
            Rw: wQ,
            Ow: LQ
          } = QQ;
          eQ.l.GA("flyingMiddleMessage", {
            content: (0, mQ.q)(FQ),
            Rw: wQ,
            Ow: LQ
          }, !0)
        })), QQ.mp(mQ.pf, (QQ => {
          const FQ = QQ === NQ.c ? null : {
            message: `Currently loaded as variation: ${QQ}`,
            type: "Warning"
          };
          eQ.l.GA("showPermanentBottomMessage", FQ, !0)
        })), QQ.mp(mQ.Wb, (QQ => {
          let {
            messageType: FQ,
            data: wQ
          } = QQ;
          (0, dQ.g)(FQ) ? (0, dQ.e)(FQ, wQ) : ("freeCamPerms" === FQ && DQ.client.freeCameraController.setPerms(wQ.key, wQ.value), DQ.client.triggerGameCallback("onReceivedMessageFromServer", FQ, wQ))
        })), QQ.mp(mQ.gb, (() => {
          const QQ = wQ.bC.owQ(wQ.WK);
          null !== QQ && void 0 !== QQ && QQ.isChargeable() && QQ.finishCharging(!1, Date.now())
        })), QQ.mp(mQ.Bd, (QQ => {
          let {
            sw: FQ
          } = QQ;
          DQ.craftingManager.removeRecipes(wQ.WK, FQ), eQ.l.GA("craftingRecipesEdited", {
            itemName: FQ,
            recipesForItem: []
          })
        })), QQ.mp(mQ.df, (QQ => {
          for (const FQ in QQ) {
            const wQ = QQ[FQ];
            for (const QQ in wQ) DQ.client.meshCreator.handleParticleSystemUpdate(FQ, QQ, wQ[QQ])
          }
        })), (0, LQ.onGameResetOnce)((() => {
          (0, oF.setFloatingYValue)(wQ.bC.getState(wQ.WK, "physics"), wQ.bC.ZE(wQ.WK), null)
        })), QQ.mp(mQ.Pb, (QQ => {
          let {
            ML: FQ,
            pL: LQ,
            cL: qQ
          } = QQ;
          const oQ = (0, lQ.c)(FQ);
          if (oQ === wQ.WK) {
            const QQ = wQ.bC.ZE(wQ.WK).position;
            qQ ??= Math.floor(QQ[1]) - 1, (0, oF.setFloatingYValue)(wQ.bC.getState(wQ.WK, "physics"), wQ.bC.ZE(wQ.WK), LQ ? qQ : null)
          }(0, rQ.c)(wQ).setFloating(oQ, LQ, qQ);
          const DQ = wQ.bC.getState(oQ, "floating");
          DQ && (DQ.isFloating = LQ, DQ.cL = LQ ? qQ : null)
        })), QQ.mp(mQ.tb, QF.h)
      }
    }
    window.addEventListener("beforeunload", (() => {}));
    var MF = wQ(38590),
      GF = wQ(38593),
      pF = wQ(649),
      cF = wQ(2860);
    class CF {
      constructor(QQ, FQ, wQ, LQ) {
        this.msgHandler = wQ, this.listener = LQ, this.session = void 0, this.attachedRoom = null, this.detachRoomListeners = null, this.suspended = !1, this.droppedAt = 0, this.session = new MF.c({
          reconnect: QQ,
          isLive: () => LQ.isLive(),
          onReconnected: QQ => {
            this.resumeOnRoom(QQ)
          },
          onGaveUp: (QQ, FQ) => {
            LQ.onGaveUp(QQ, FQ)
          },
          freeze: FQ,
          releaseSeat: FQ => {
            QQ(FQ).then((QQ => {
              QQ.leave(!0)
            }), (QQ => {
              console.warn("Couldn't release the held seat of a game left while reconnecting", QQ)
            }))
          }
        })
      }
      onInitialInfo(QQ, FQ) {
        this.session.onInitialInfo(QQ, FQ)
      }
      isResuming() {
        return this.session.isResuming()
      }
      getDroppedAt() {
        return this.droppedAt
      }
      onResumeInitialInfo(QQ, FQ) {
        if (this.session.onResuming(), null === QQ) {
          try {
            (0, vQ.c)().client.itemDropPrediction.reset()
          } catch (wQ) {
            console.error("Error dropping the item drop predictions on resuming", wQ)
          }
          return LQ.offlineInputReplay.discard(), void this.setSuspended(!1)
        }(0, vQ.c)().client.itemDropPrediction.onResumeReplayOffered(), LQ.offlineInputReplay.replayFrom(QQ.iF, FQ)
      }
      onResumed(QQ) {
        this.setSuspended(!1), (0, LQ.resendBeacons)();
        try {
          QQ()
        } catch (FQ) {
          console.error("Error completing the resume", FQ)
        } finally {
          this.session.onResumed()
        }
      }
      attachRoom(QQ) {
        const FQ = (0, pF.g)((() => QQ.connection.isOpen));
        QQ.zp(FQ);
        const wQ = new GF.b((() => {
          this.session.canHoldSeat() && this.listener.isLive() && (console.warn("The game server went silent, reconnecting"), this.onConnectionDropped(QQ, "silent"), QQ.leave(!1))
        }));
        QQ.onStateChange((() => {
          wQ.heard()
        }));
        const LQ = FQ => {
          FQ.persisted || QQ.leave(!0)
        };
        window.addEventListener("pagehide", LQ), QQ.zp(((FQ, wQ) => {
          if (QQ === this.attachedRoom && this.listener.isLive()) return (0, oQ.i)(FQ) && this.session.canHoldSeat() ? (console.warn(`Connection to the game server dropped with code ${FQ}, reconnecting`), this.listener.onDropped(FQ, wQ), void this.onConnectionDropped(QQ, String(FQ))) : void this.listener.onRoomLeft(FQ, wQ)
        })), this.attachedRoom = QQ, this.detachRoomListeners = () => {
          FQ(), wQ.dispose(), window.removeEventListener("pagehide", LQ)
        }
      }
      dispose() {
        this.detachRoom(), this.session.leave(), this.setSuspended(!1)
      }
      setSuspended(QQ) {
        QQ !== this.suspended && (this.suspended = QQ, (0, LQ.setConnectionSuspended)(QQ), (0, vQ.c)().client.itemDropPrediction.setSuspended(QQ))
      }
      detachRoom() {
        var QQ;
        null === (QQ = this.detachRoomListeners) || void 0 === QQ || QQ.call(this), this.detachRoomListeners = null, this.attachedRoom = null
      }
      onConnectionDropped(QQ, FQ) {
        (0, cF.f)("disconnect", "Left room", FQ), this.isResuming() || (this.droppedAt = Date.now()), this.detachRoom(), LQ.offlineInputReplay.onConnectionLost(), this.setSuspended(!0), this.session.onConnectionLost(QQ.reconnectionToken)
      }
      resumeOnRoom(QQ) {
        if (!this.listener.isLive()) return console.warn("Left the game while reconnecting, leaving the resumed room"), QQ.leave(!0), void this.dispose();
        console.log("Reconnected to the game server, waiting for the game to resume"), (0, xF.r)(), LQ.offlineInputReplay.onConnectionReplaced(), this.msgHandler.JmQ(QQ), this.listener.onReconnected(QQ), this.attachRoom(QQ)
      }
    }
    var SF = wQ(3337),
      iF = wQ(3345),
      WF = wQ(1339),
      RF = wQ(1314),
      OF = wQ(4524),
      sF = wQ(3037),
      rF = wQ(1087),
      IF = wQ(37272),
      UF = wQ(38595),
      NF = wQ(8667),
      TF = wQ(38603),
      KF = wQ(1804),
      zF = wQ(38607),
      lF = wQ(1723),
      jF = wQ(2682);

    function aF(QQ) {
      var FQ, wQ;
      if ("object" !== typeof QQ || null === QQ) return {
        errType: typeof QQ
      };
      const LQ = QQ;
      return {
        errType: null !== (FQ = null === (wQ = QQ.constructor) || void 0 === wQ ? void 0 : wQ.name) && void 0 !== FQ ? FQ : "",
        errName: "string" === typeof LQ.name ? LQ.name : "",
        eventType: "string" === typeof LQ.type ? LQ.type : "",
        errStack: "string" === typeof LQ.stack ? LQ.stack.split("\n").slice(1).join(" | ") : ""
      }
    }

    function XF(QQ) {
      if ("undefined" !== typeof ProgressEvent && QQ instanceof ProgressEvent) return !0;
      if (!(QQ instanceof Error)) return !1;
      const FQ = QQ.code;
      return "ServerError" === QQ.name && void 0 === FQ || "AbortError" === QQ.name || "seat reservation expired." === QQ.message || "early_leave" === QQ.message
    }(0, AQ.n)((QQ => {
      (0, cF.f)("wasm_net", QQ)
    }));
    let fF = !0;

    function VF() {
      fF = !1
    }
    class hF {
      constructor(QQ) {
        this.gameNameWithVariation = void 0, this.lobbyName = void 0, this.colyClient = void 0, this.userContext = void 0, this.joinedAt = null, this.checkSendPath = () => {}, this.dH = void 0, this.connectionResume = void 0, this.incomingMsgInitialisor = void 0, this.gameNameWithVariation = QQ.gameNameWithVariation, this.lobbyName = QQ.lobbyName, this.colyClient = QQ.colyClient, this.userContext = QQ.userContext
      }
      async connectToServer(QQ, FQ, wQ) {
        MQ.b.reset(), QQ.iK = {
          [QQ.WK]: {}
        }, QQ.FFQ = void 0, (0, xF.r)(), (0, vQ.c)().removeAllEntityNames(), (0, vQ.c)().setEntityName(QQ.WK, this.userContext.getPlayerName()), (0, WF.s)({
          lobbyName: this.lobbyName
        }), console.log("Waiting for clientConnection passed promise to resolve");
        const DQ = (0, lF.e)();
        console.log("joining server with game", this.gameNameWithVariation, "lobbyName", this.lobbyName);
        const kQ = performance.now(),
          mQ = (0, TF.g)(this.userContext, (() => {
            const {
              roomName: LQ,
              joinOptions: qQ
            } = (0, pQ.f)(this.userContext, this.gameNameWithVariation, this.lobbyName, FQ, (QQ => sF.b.isUsingCustomGameTexturePack(QQ)));
            return qQ.joinAdHold = DQ, qQ.renderBackend = (0, jF.c)(QQ.Zx), (0, UF.e)((() => this.colyClient.joinOrCreate(LQ, qQ)), wQ)
          }));
        return eQ.l.GA("loadingScreenState", "loadingPage:joiningLobby"), await mQ.then((FQ => {
          if (this.joinedAt = performance.now(), this.dH = QQ, DQ) {
            const QQ = (0, lF.q)((() => {
              FQ.send(qQ.h), (0, RF.k)()
            }));
            FQ.zp(QQ), (0, LQ.onGameResetOnce)(QQ)
          }
          const wQ = new tQ(FQ);
          this.connectionResume = new CF((QQ => this.colyClient.reconnect(QQ)), (FQ => {
            QQ.pI(FQ)
          }), wQ, {
            isLive: () => (0, vQ.c)().client.getMsgHandler() === wQ,
            onDropped: (QQ, FQ) => {
              (0, iF.f)(QQ) || this.logUnrecognisedConnectionLoss(QQ, void 0, {
                site: "drop",
                closeReason: null !== FQ && void 0 !== FQ ? FQ : "",
                sinceJoined: this.sinceJoined()
              })
            },
            onRoomLeft: (QQ, FQ) => {
              this.onRoomLeft(QQ, FQ)
            },
            onReconnected: QQ => {
              this.incomingMsgInitialisor.JmQ(QQ), this.checkSendPath = (0, IF.f)(wQ, QQ, AQ.r)
            },
            onGaveUp: (QQ, FQ) => {
              this.onResumeGaveUp(QQ, FQ)
            }
          }), this.connectionResume.attachRoom(FQ), (0, LQ.onGameResetOnce)((() => {
            this.connectionResume.dispose()
          }));
          const oQ = wQ.send,
            kQ = wQ.mp,
            mQ = wQ.XwQ.send,
            uQ = wQ.XwQ.mp,
            HQ = wQ.VmQ;
          this.checkSendPath = (0, IF.f)(wQ, FQ, AQ.r);
          const bQ = setInterval((() => {
            oQ === wQ.send && kQ === wQ.mp && mQ === wQ.XwQ.send && uQ === wQ.XwQ.mp && HQ === wQ.VmQ || VF(), this.checkSendPath()
          }), 1e4);
          return (0, LQ.onGameResetOnce)((() => {
            clearInterval(bQ)
          })), {
            success: !0,
            successDetails: wQ
          }
        })).catch((FQ => {
          if (wQ.aborted && FQ === (0, KF.e)(wQ)) return {
            success: !1,
            failDetails: {
              reason: "Left the game while it loaded",
              requiresRefresh: !1,
              canReconnect: !1
            }
          };
          if (FQ instanceof zF.d) return console.warn("Seat request timed out", this.lobbyName, this.gameNameWithVariation), {
            success: !1,
            failDetails: {
              reason: FQ.message,
              requiresRefresh: !1,
              canReconnect: !1,
              gameServerUnreachable: "timedOut"
            }
          };
          QQ.MA(`Failed to connect to bloxd room, check your internet connection. lobbyName: ${this.lobbyName}, gameNameWithVariation: ${this.gameNameWithVariation} code: ${FQ.code}\n`, FQ);
          const LQ = FQ.code;
          return LQ === oQ.d.serverUpdating.code ? (this.goToUpdateWaiting(), {
            success: !1,
            failDetails: {
              reason: oQ.d.serverUpdating.text,
              requiresRefresh: !1,
              canReconnect: !0,
              goesToUpdateWaiting: !0
            }
          }) : {
            success: !1,
            failDetails: {
              ...this.onConnectionToServerLost(LQ, FQ.message, {
                site: "join",
                sinceJoinStart: (0, iF.b)(performance.now() - kQ),
                ...aF(FQ)
              }, XF(FQ)),
              rematch: (0, UF.c)(FQ),
              gameRefused: (0, NF.e)(FQ)
            }
          }
        }))
      }
      setupServerListeners(QQ, FQ, wQ) {
        eQ.l.GA("loadingScreenState", "loadingPage:loadingPlayerInfo"), this.incomingMsgInitialisor = new eF(this.gameNameWithVariation, FQ.XwQ, QQ, this.connectionResume), this.incomingMsgInitialisor.setupStateReplicationHandlers();
        const qQ = FQ.PmQ();
        this.incomingMsgInitialisor.setupOnMessageListeners(qQ, wQ), (0, LQ.onConnectionToServerReady)(qQ, FQ), qQ.finishRegistration()
      }
      dispose() {
        this.connectionResume.dispose()
      }
      onResumeGaveUp(QQ, FQ) {
        (0, rF.pA)(new Error("Reconnect failed"), {
          ...(0, SF.n)(FQ),
          game: this.gameNameWithVariation
        }), (0, cF.f)("disconnect", "Reconnect failed", FQ.reason), (0, vQ.c)().client.leaveGameUnwanted({
          reason: {
            translationKey: "general:lostConnection"
          },
          canReconnect: !QQ,
          canPlayAgain: QQ,
          requiresRefresh: !1,
          automaticallyReconnect: !1
        }), (0, wF.navigatePreserveSearch)("/")
      }
      sinceJoined() {
        return null === this.joinedAt ? "" : (0, iF.b)(performance.now() - this.joinedAt)
      }
      onRoomLeft(QQ, FQ) {
        var wQ;
        if (QQ === oQ.d.gameOrPluginKick.code) return;
        if (console.log(`Left room with code ${QQ}`), QQ === oQ.d.serverUpdating.code) return (0, cF.f)("disconnect", "Left room", "serverUpdating"), (0, vQ.c)().client.leaveGame(this.getUpdateWaitingUrl()), void this.goToUpdateWaiting();
        this.dH.MA(`Kicked from server with code ${QQ}`, new Error);
        const LQ = Object.keys(oQ.d).find((FQ => oQ.d[FQ].code === QQ));
        (0, cF.f)("disconnect", "Left room", null !== LQ && void 0 !== LQ ? LQ : String(QQ));
        const qQ = this.onConnectionToServerLost(QQ, void 0, {
          site: "leave",
          closeReason: null !== FQ && void 0 !== FQ ? FQ : "",
          sinceJoined: this.sinceJoined()
        });
        (0, vQ.c)().client.leaveGameUnwanted({
          reason: `You have disconnected from the server.\n${qQ.reason}`,
          canReconnect: qQ.canReconnect,
          requiresRefresh: qQ.requiresRefresh,
          automaticallyReconnect: null !== (wQ = qQ.automaticallyReconnect) && void 0 !== wQ && wQ
        }), (0, wF.navigatePreserveSearch)("/")
      }
      getUpdateWaitingUrl() {
        return (0, OF.G)(this.gameNameWithVariation, this.lobbyName)
      }
      goToUpdateWaiting() {
        (0, wF.navigatePreserveSearch)(this.getUpdateWaitingUrl())
      }
      onConnectionToServerLost(QQ, FQ, wQ) {
        var LQ;
        let qQ = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        if (null !== (LQ = FQ) && void 0 !== LQ && LQ.endsWith(oQ.l) && (this.userContext.invalidateTrafficCode(), FQ = FQ.replace(oQ.l, "")), QQ === oQ.d.outdatedVersion.code) return console.error("Outdated client with version ", DQ.b, ", refreshing page"), (0, GQ.reloadBloxd)(), {
          reason: "Outdated client",
          requiresRefresh: !0,
          canReconnect: !1
        };
        if (QQ === oQ.d.loadRecaptchaError.code) return console.error("Load recaptcha error, refreshing page"), (0, GQ.reloadBloxd)(), {
          reason: "Failed to load recaptcha",
          requiresRefresh: !0,
          canReconnect: !1
        };
        for (const DQ in oQ.d) {
          const {
            code: wQ,
            text: LQ,
            canReconnect: qQ
          } = oQ.d[DQ];
          if (wQ === QQ) {
            console.log("matched known error", QQ, "leaving game");
            return {
              reason: "" !== LQ ? LQ : FQ || `Code: ${QQ}`,
              requiresRefresh: !1,
              canReconnect: qQ,
              automaticallyReconnect: wQ === oQ.d.customGameUpdated.code || wQ === oQ.d.duplicateLobbyNameError.code
            }
          }
        }
        return console.log("Didn't match known error, leaving game"), (0, iF.e)(QQ) || qQ ? console.warn("Connection lost", QQ, FQ) : this.logUnrecognisedConnectionLoss(QQ, FQ, wQ), {
          reason: `Either your internet isn't working or this is a bug.\nCode: ${QQ}`,
          requiresRefresh: !1,
          canReconnect: !1,
          gameServerUnreachable: qQ ? "failed" : void 0
        }
      }
      logUnrecognisedConnectionLoss(QQ, FQ, wQ) {
        (0, rF.pA)(new Error("Unrecognised connection loss"), {
          code: String(QQ),
          cause: null !== FQ && void 0 !== FQ ? FQ : "",
          ...wQ,
          game: this.gameNameWithVariation,
          ...(0, iF.g)()
        })
      }
    }
  },
  38564: (QQ, FQ, wQ) => {
    wQ.d(FQ, {
      b: () => gw,
      d: () => QL
    });
    var LQ, qQ, oQ, DQ, kQ, vQ, mQ, uQ, HQ, bQ, YQ, xQ, AQ, tQ, eQ, MQ, GQ, pQ, cQ, CQ, SQ, iQ, WQ, RQ, OQ, sQ, rQ, IQ, UQ, NQ, TQ, KQ, zQ, lQ, jQ, aQ, XQ, fQ, VQ, hQ, JQ, EQ, nQ, gQ, PQ, ZQ, yQ, BQ, dQ, QF, FF, wF, LF, qF, oF, DF, kF, vF, mF, uF, HF, bF, YF, xF, AF, tF, eF, MF, GF, pF, cF, CF, SF, iF, WF, RF, OF, sF, rF, IF, UF, NF, TF, KF, zF, lF, jF, aF, XF, fF, VF, hF, JF, EF, nF, gF, PF, ZF, yF, BF = wQ(22),
      dF = wQ(36762),
      Qw = wQ(38579),
      Fw = wQ(38582),
      ww = wQ(8877),
      Lw = wQ(617),
      qw = wQ(609),
      ow = wQ(36419);
    let Dw = (LQ = (0, ww.type)("number"), qQ = (0, ww.type)("number"), oQ = (0, ww.type)("number"), DQ = (0, ww.type)("number"), kQ = (0, ww.type)("number"), vQ = (0, ww.type)("number"), mQ = (0, ww.type)("string"), uQ = class extends ww.Schema {
        constructor() {
          super(...arguments), (0, Qw.e)(this, "id", HQ, this), (0, Qw.e)(this, "amount", bQ, this), (0, Qw.e)(this, "x", YQ, this), (0, Qw.e)(this, "y", xQ, this), (0, Qw.e)(this, "z", AQ, this), (0, Qw.e)(this, "size", tQ, this), (0, Qw.e)(this, "attributes", eQ, this)
        }
      }, HQ = (0, Fw.c)(uQ.prototype, "id", [LQ], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return 0
        }
      }), bQ = (0, Fw.c)(uQ.prototype, "amount", [qQ], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return 0
        }
      }), YQ = (0, Fw.c)(uQ.prototype, "x", [oQ], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return 0
        }
      }), xQ = (0, Fw.c)(uQ.prototype, "y", [DQ], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return 0
        }
      }), AQ = (0, Fw.c)(uQ.prototype, "z", [kQ], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return 0
        }
      }), tQ = (0, Fw.c)(uQ.prototype, "size", [vQ], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return 1
        }
      }), eQ = (0, Fw.c)(uQ.prototype, "attributes", [mQ], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return "{}"
        }
      }), uQ),
      kw = (MQ = (0, ww.type)("string"), GQ = (0, ww.type)("string"), pQ = class extends ww.Schema {
        constructor() {
          super(...arguments), (0, Qw.e)(this, "itemName", cQ, this), (0, Qw.e)(this, "enchantmentTier", CQ, this)
        }
      }, cQ = (0, Fw.c)(pQ.prototype, "itemName", [MQ], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: null
      }), CQ = (0, Fw.c)(pQ.prototype, "enchantmentTier", [GQ], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: null
      }), pQ),
      vw = (SQ = (0, ww.type)("string"), iQ = (0, ww.type)("string"), WQ = (0, ww.type)("number"), RQ = (0, ww.type)("number"), OQ = (0, ww.type)("number"), sQ = (0, ww.type)("float32"), rQ = (0, ww.type)("float32"), IQ = (0, ww.type)("float32"), UQ = (0, ww.type)("string"), NQ = (0, ww.type)(["number"]), TQ = (0, ww.type)("boolean"), KQ = class extends ww.Schema {
        constructor() {
          super(...arguments), (0, Qw.e)(this, "type", zQ, this), (0, Qw.e)(this, "name", lQ, this), (0, Qw.e)(this, "x", jQ, this), (0, Qw.e)(this, "y", aQ, this), (0, Qw.e)(this, "z", XQ, this), (0, Qw.e)(this, "xRotation", fQ, this), (0, Qw.e)(this, "yRotation", VQ, this), (0, Qw.e)(this, "zRotation", hQ, this), (0, Qw.e)(this, "followingEId", JQ, this), (0, Qw.e)(this, "followingOffset", EQ, this), (0, Qw.e)(this, "shouldMatchFollowingEntityRotation", nQ, this)
        }
      }, zQ = (0, Fw.c)(KQ.prototype, "type", [SQ], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: null
      }), lQ = (0, Fw.c)(KQ.prototype, "name", [iQ], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return ""
        }
      }), jQ = (0, Fw.c)(KQ.prototype, "x", [WQ], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return 0
        }
      }), aQ = (0, Fw.c)(KQ.prototype, "y", [RQ], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return 0
        }
      }), XQ = (0, Fw.c)(KQ.prototype, "z", [OQ], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return 0
        }
      }), fQ = (0, Fw.c)(KQ.prototype, "xRotation", [sQ], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return 0
        }
      }), VQ = (0, Fw.c)(KQ.prototype, "yRotation", [rQ], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return 0
        }
      }), hQ = (0, Fw.c)(KQ.prototype, "zRotation", [IQ], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return 0
        }
      }), JQ = (0, Fw.c)(KQ.prototype, "followingEId", [UQ], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: null
      }), EQ = (0, Fw.c)(KQ.prototype, "followingOffset", [NQ], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return new ww.ArraySchema(0, 0, 0)
        }
      }), nQ = (0, Fw.c)(KQ.prototype, "shouldMatchFollowingEntityRotation", [TQ], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return !0
        }
      }), KQ),
      mw = (gQ = (0, ww.type)("float32"), PQ = (0, ww.type)("float32"), ZQ = (0, ww.type)("boolean"), yQ = (0, ww.type)("boolean"), BQ = (0, ww.type)("float32"), dQ = (0, ww.type)("boolean"), QF = (0, ww.type)("string"), FF = (0, ww.type)("string"), wF = (0, ww.type)("string"), LF = (0, ww.type)("string"), qF = (0, ww.type)(["number"]), oF = (0, ww.type)("number"), DF = (0, ww.type)({
        map: kw
      }), kF = class extends vw {
        constructor() {
          super(...arguments), (0, Qw.e)(this, "scale", vF, this), (0, Qw.e)(this, "speed", mF, this), (0, Qw.e)(this, "jumping", uF, this), (0, Qw.e)(this, "crouching", HF, this), (0, Qw.e)(this, "cameraPitch", bF, this), (0, Qw.e)(this, "armSwinging", YF, this), (0, Qw.e)(this, "heldItemName", xF, this), (0, Qw.e)(this, "heldItemEnchantmentTier", AF, this), (0, Qw.e)(this, "pose", tF, this), (0, Qw.e)(this, "ridingVehicleEId", eF, this), (0, Qw.e)(this, "meshOffset", MF, this), (0, Qw.e)(this, "baseRenderHeading", GF, this), (0, Qw.e)(this, "armour", pF, this)
        }
      }, vF = (0, Fw.c)(kF.prototype, "scale", [gQ], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return 1
        }
      }), mF = (0, Fw.c)(kF.prototype, "speed", [PQ], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return 0
        }
      }), uF = (0, Fw.c)(kF.prototype, "jumping", [ZQ], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return !1
        }
      }), HF = (0, Fw.c)(kF.prototype, "crouching", [yQ], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return !1
        }
      }), bF = (0, Fw.c)(kF.prototype, "cameraPitch", [BQ], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return 0
        }
      }), YF = (0, Fw.c)(kF.prototype, "armSwinging", [dQ], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return !1
        }
      }), xF = (0, Fw.c)(kF.prototype, "heldItemName", [QF], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: null
      }), AF = (0, Fw.c)(kF.prototype, "heldItemEnchantmentTier", [FF], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: null
      }), tF = (0, Fw.c)(kF.prototype, "pose", [wF], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return "standing"
        }
      }), eF = (0, Fw.c)(kF.prototype, "ridingVehicleEId", [LF], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return null
        }
      }), MF = (0, Fw.c)(kF.prototype, "meshOffset", [qF], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return new ww.ArraySchema(0, 0, 0)
        }
      }), GF = (0, Fw.c)(kF.prototype, "baseRenderHeading", [oF], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return 0
        }
      }), pF = (0, Fw.c)(kF.prototype, "armour", [DF], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return new ww.MapSchema
        }
      }), kF),
      uw = (cF = (0, ww.type)("string"), CF = (0, ww.type)("string"), SF = (0, ww.type)("string"), iF = (0, ww.type)("uint8"), WF = class extends mw {
        constructor() {
          super(...arguments), (0, Qw.e)(this, "variation", RF, this), (0, Qw.e)(this, "ownerDbId", OF, this), (0, Qw.e)(this, "metaInfo", sF, this), (0, Qw.e)(this, "aiState", rF, this)
        }
      }, RF = (0, Fw.c)(WF.prototype, "variation", [cF], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return "default"
        }
      }), OF = (0, Fw.c)(WF.prototype, "ownerDbId", [CF], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return null
        }
      }), sF = (0, Fw.c)(WF.prototype, "metaInfo", [SF], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return ""
        }
      }), rF = (0, Fw.c)(WF.prototype, "aiState", [iF], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return 0
        }
      }), WF);
    IF = (0, ww.type)("string"), UF = (0, ww.type)("string"), NF = (0, ww.type)("string"), TF = (0, ww.type)("string"), KF = class extends vw {
      constructor() {
        super(...arguments), (0, Qw.e)(this, "meshKind", zF, this), (0, Qw.e)(this, "meshOpts", lF, this), (0, Qw.e)(this, "pose", jF, this), (0, Qw.e)(this, "leaderboardTop", aF, this)
      }
    }, zF = (0, Fw.c)(KF.prototype, "meshKind", [IF], {
      configurable: !0,
      enumerable: !0,
      writable: !0,
      initializer: null
    }), lF = (0, Fw.c)(KF.prototype, "meshOpts", [UF], {
      configurable: !0,
      enumerable: !0,
      writable: !0,
      initializer: null
    }), jF = (0, Fw.c)(KF.prototype, "pose", [NF], {
      configurable: !0,
      enumerable: !0,
      writable: !0,
      initializer: null
    }), aF = (0, Fw.c)(KF.prototype, "leaderboardTop", [TF], {
      configurable: !0,
      enumerable: !0,
      writable: !0,
      initializer: null
    });

    function Hw(QQ) {
      return Object.keys(ww.Metadata.getFields(QQ))
    }
    const bw = Hw(uw);
    for (const FL of Lw.m)
      if (!bw.includes(FL)) throw new Error(`Mob Schema is missing a networked property: "${FL}"`);
    const Yw = Hw((XF = (0, ww.type)("string"), fF = (0, ww.type)("float32"), VF = (0, ww.type)("float32"), hF = (0, ww.type)("float32"), JF = (0, ww.type)("float32"), EF = class extends vw {
      constructor() {
        super(...arguments), (0, Qw.e)(this, "soundName", nF, this), (0, Qw.e)(this, "volume", gF, this), (0, Qw.e)(this, "refDistance", PF, this), (0, Qw.e)(this, "maxHearDist", ZF, this), (0, Qw.e)(this, "rate", yF, this)
      }
    }, nF = (0, Fw.c)(EF.prototype, "soundName", [XF], {
      configurable: !0,
      enumerable: !0,
      writable: !0,
      initializer: function() {
        return ""
      }
    }), gF = (0, Fw.c)(EF.prototype, "volume", [fF], {
      configurable: !0,
      enumerable: !0,
      writable: !0,
      initializer: function() {
        return 1
      }
    }), PF = (0, Fw.c)(EF.prototype, "refDistance", [VF], {
      configurable: !0,
      enumerable: !0,
      writable: !0,
      initializer: function() {
        return ow.h
      }
    }), ZF = (0, Fw.c)(EF.prototype, "maxHearDist", [hF], {
      configurable: !0,
      enumerable: !0,
      writable: !0,
      initializer: function() {
        return ow.c
      }
    }), yF = (0, Fw.c)(EF.prototype, "rate", [JF], {
      configurable: !0,
      enumerable: !0,
      writable: !0,
      initializer: function() {
        return 1
      }
    }), EF));
    for (const FL of qw.h)
      if (!Yw.includes(FL)) throw new Error(`AudioEntity Schema is missing a replicated property: "${FL}"`);
    var xw = wQ(37967),
      Aw = wQ(1254),
      tw = wQ(619),
      ew = wQ(37755),
      Mw = wQ(4119),
      Gw = wQ(317),
      pw = wQ(36870),
      Cw = wQ(37639),
      Sw = wQ(2148),
      iw = wQ(36839),
      Ww = wQ(38e3),
      Rw = wQ(36982),
      Ow = wQ(334),
      sw = wQ.n(Ow),
      rw = wQ(37483),
      Iw = wQ(36677),
      Uw = wQ(37611),
      Nw = wQ(37657);
    class Tw {
      constructor(QQ, FQ) {
        this.bloxd = QQ, this.eId = FQ, this.dH = void 0, this.colyseusEntity = void 0, this.canSeeSub = void 0, this.canAttackSub = void 0, this.interactableSub = void 0, this.overlayColourSub = void 0, this.opacitySub = void 0, this.zIndexSub = void 0, this.multilineTextBoxSub = void 0, this.previousHidingMeshManagerState = void 0, this.meshKind = void 0, this.meshOpts = void 0, this.leaderboardTop = void 0, this.meshRebuildQueued = !1, this.kx = !1, this.dH = QQ.dH
      }
      initClient(QQ) {
        var FQ, wQ, LQ;
        this.colyseusEntity = QQ, this.meshKind = QQ.meshKind, this.meshOpts = QQ.meshOpts, this.leaderboardTop = QQ.leaderboardTop, this.dH.bC.add([QQ.x, QQ.y, QQ.z], 1, 1, null, null, !1, !1, this.eId), this.dH.bC.pT(this.eId, "smoothToServerPos");
        const qQ = "Person" === this.meshKind;
        this.dH.bC.pT(this.eId, "meshRotation", {
          isServerControlled: !0,
          ...qQ ? {
            defaultRotationsPerSecond: .5
          } : {},
          childrenNodeParams: qQ ? [{
            nodeName: "HeadMesh",
            softTolerance: Ww.h,
            hardTolerance: null
          }] : []
        }), this.updateHidingMeshMgr(), this.canSeeSub = BF.l.subscribe(`otherEntitySettings|${this.eId}|canSee`, (QQ => {
          this.updateHidingMeshMgr()
        }));
        const oQ = () => {
          const QQ = this.dH.bC.rFQ(this.eId);
          if (!QQ) return;
          const FQ = (0, Rw.k)(this.eId);
          if ("number" === typeof QQ.XN) {
            var wQ, LQ, qQ, oQ;
            const DQ = null === (wQ = (0, Sw.i)("head", null === (qQ = this.getSpec()) || void 0 === qQ || null === (oQ = qQ.opts.textures) || void 0 === oQ ? void 0 : oQ.head)) || void 0 === wQ || null === (LQ = wQ.personModel) || void 0 === LQ ? void 0 : LQ.fullBody;
            return this.dH.Zx.aN.setPickable(QQ.XN, FQ && !DQ), void(0, Iw.updatePersonAttachmentPickability)(this.dH, this.eId, FQ)
          }
          const DQ = QQ.mesh;
          if (DQ)
            for (const kQ of [DQ, ...DQ.getChildMeshes(!1)]) "aA" in kQ && !kQ.name.startsWith("Cape|") && (kQ.aA = FQ)
        };
        this.canAttackSub = BF.l.subscribe(`otherEntitySettings|${this.eId}|canAttack`, oQ), this.interactableSub = BF.l.subscribe(`otherEntitySettings|${this.eId}|interactable`, oQ), this.overlayColourSub = BF.l.subscribe(`otherEntitySettingsClientifiedEId|${this.eId}|overlayColour`, (QQ => {
          this.updateOverlayColour(QQ)
        })), this.opacitySub = BF.l.subscribe(`otherEntitySettingsClientifiedEId|${this.eId}|opacity`, (QQ => {
          this.updateOpacity(QQ)
        })), this.zIndexSub = BF.l.subscribe(`otherEntitySettingsClientifiedEId|${this.eId}|zIndex`, (QQ => {
          this.updateZIndex(QQ)
        }));
        const DQ = this.dH.iK[this.dH.WK][this.eId];
        this.updateOverlayColour(null !== (FQ = null === DQ || void 0 === DQ ? void 0 : DQ.overlayColour) && void 0 !== FQ ? FQ : null), this.updateOpacity(null !== (wQ = null === DQ || void 0 === DQ ? void 0 : DQ.opacity) && void 0 !== wQ ? wQ : 1), this.updateZIndex(null !== (LQ = null === DQ || void 0 === DQ ? void 0 : DQ.zIndex) && void 0 !== LQ ? LQ : 0), this.multilineTextBoxSub = (0, iw.o)(this.dH, this.eId)
      }
      onChangeClient(QQ, FQ) {
        if ("xRotation" === QQ || "yRotation" === QQ || "zRotation" === QQ)(0, iw.q)(this.dH, this.eId, QQ, FQ);
        else if ("pose" === QQ) {
          const QQ = this.dH.bC.zFQ(this.eId);
          QQ && (QQ.pose = FQ || "standing")
        } else "meshKind" === QQ || "meshOpts" === QQ ? (this[QQ] = FQ, this.queueMeshRebuild()) : "name" === QQ && "" !== FQ ? this.updateHidingMeshMgr() : "leaderboardTop" === QQ && (this.leaderboardTop = FQ, BF.l.GA(`leaderboardTop|${this.eId}`, FQ))
      }
      disposeClient() {
        this.kx = !0, this.dH.bC.deleteEntity(this.eId), BF.l.unsubscribe(this.canSeeSub), BF.l.unsubscribe(this.canAttackSub), BF.l.unsubscribe(this.interactableSub), BF.l.unsubscribe(this.overlayColourSub), BF.l.unsubscribe(this.opacitySub), BF.l.unsubscribe(this.zIndexSub), BF.l.unsubscribe(this.multilineTextBoxSub)
      }
      getCurrentHidingMeshMgrState() {
        var QQ, FQ;
        return {
          canSee: null !== (QQ = null === (FQ = this.dH.iK[this.dH.WK][this.eId]) || void 0 === FQ ? void 0 : FQ.canSee) && void 0 !== QQ && QQ,
          name: this.colyseusEntity.name,
          meshKind: this.meshKind,
          meshOpts: this.meshOpts
        }
      }
      updateHidingMeshMgr() {
        var QQ, FQ, wQ;
        const {
          dH: LQ
        } = this, {
          bC: qQ
        } = LQ, oQ = this.getCurrentHidingMeshMgrState();
        if ((0, Gw.oe)(this.previousHidingMeshManagerState, oQ)) return;
        if (this.previousHidingMeshManagerState = oQ, qQ.lT(this.eId, "hidingMeshManager"), null === (QQ = LQ.iK[LQ.WK][this.eId]) || void 0 === QQ || !QQ.canSee) return;
        const DQ = this.getSpec();
        if (!DQ) return;
        const {
          type: kQ,
          opts: vQ
        } = DQ;
        "Person" === kQ && (vQ.textures = (0, Sw.n)(vQ.textures)), vQ.eId = this.eId, qQ.pT(this.eId, "hidingMeshManager", {
          addMeshComponent: () => {
            var QQ, FQ, wQ;
            "Leaderboard" === kQ && (vQ.leaderboardTop = this.leaderboardTop);
            const oQ = this.bloxd.client.meshCreator.getEntityMesh(kQ, vQ, (QQ => {
              var FQ, wQ;
              if ("number" === typeof QQ) {
                var qQ, oQ, DQ;
                const FQ = LQ.Zx.aN;
                FQ.setEntityId(QQ, this.eId);
                const wQ = "Person" === kQ && (null === (qQ = (0, Sw.i)("head", null === (DQ = vQ.textures) || void 0 === DQ ? void 0 : DQ.head)) || void 0 === qQ || null === (oQ = qQ.personModel) || void 0 === oQ ? void 0 : oQ.fullBody);
                return void FQ.setPickable(QQ, (0, Rw.k)(this.eId) && !wQ)
              }
              const mQ = QQ;
              for (const kQ of [mQ, ...mQ.getChildMeshes(!1)]) void 0 === kQ.aA || kQ.name.startsWith("Cape|") || (kQ.aA = (0, Rw.k)(this.eId), kQ.metadata ??= new LQ.Zx.XA, kQ.metadata.eId = this.eId);
              this.updateOpacity(null !== (FQ = null === (wQ = LQ.iK[LQ.WK][this.eId]) || void 0 === wQ ? void 0 : wQ.opacity) && void 0 !== FQ ? FQ : 1)
            }));
            if (!oQ) return;
            const {
              XN: DQ,
              mesh: mQ,
              meshOffset: uQ,
              nameYOffset: HQ,
              modelLoaded: bQ
            } = oQ;
            null === bQ || void 0 === bQ || bQ.then((() => {
              var QQ;
              (null === (QQ = qQ.rFQ(this.eId)) || void 0 === QQ ? void 0 : QQ.mesh) === mQ && (this.previousHidingMeshManagerState = null, this.updateHidingMeshMgr())
            }));
            const YQ = null === DQ ? null : LQ.Zx.aN.iLQ(DQ, 0);
            if (qQ.pT(this.eId, qQ.names.mesh, {
                XN: DQ,
                nwQ: YQ,
                mesh: mQ,
                GkQ: !1,
                PwQ: "Leaderboard" !== kQ,
                offset: uQ.slice(),
                MkQ: "ParticleEmitter" === kQ && vQ.followTargetMeshOffset ? QQ => {
                  var FQ;
                  sw().copy(QQ, uQ);
                  const wQ = null === (FQ = qQ.pwQ(this.eId)) || void 0 === FQ ? void 0 : FQ.dY,
                    LQ = void 0 === wQ ? null : qQ.zFQ(wQ);
                  if (LQ) {
                    var oQ, DQ;
                    const FQ = this.bloxd.getEntityHeading(null !== (oQ = LQ.ridingVehicleEId) && void 0 !== oQ ? oQ : wQ, !0),
                      qQ = Math.sin(FQ),
                      kQ = Math.cos(FQ);
                    QQ[0] += LQ.meshOffset[0] * kQ + LQ.meshOffset[2] * qQ, QQ[1] += LQ.meshOffset[1], QQ[2] += LQ.meshOffset[2] * kQ - LQ.meshOffset[0] * qQ;
                    const vQ = null !== (DQ = LQ.ridingVehicleEId) && void 0 !== DQ ? DQ : null;
                    null !== vQ && (0, Nw.c)(this.dH, vQ, QQ)
                  }
                } : null
              }), "Person" === kQ) {
              var xQ, AQ, tQ, eQ;
              qQ.pT(this.eId, qQ.names.meshAttachments, {
                personFullBody: null !== (xQ = null === (AQ = (0, Sw.i)("head", null === (eQ = vQ.textures) || void 0 === eQ ? void 0 : eQ.head)) || void 0 === AQ || null === (tQ = AQ.personModel) || void 0 === tQ ? void 0 : tQ.fullBody) && void 0 !== xQ && xQ
              });
              for (const QQ of Aw.w) {
                var MQ, GQ, pQ;
                const FQ = null === (MQ = vQ.textures) || void 0 === MQ ? void 0 : MQ[QQ];
                FQ && null !== (GQ = (0, Sw.i)(QQ, FQ)) && void 0 !== GQ && null !== (pQ = GQ.attachments) && void 0 !== pQ && pQ.length && Cw.d.Player.meshApi.updatePlayerCosmetic(this.eId, DQ, QQ, FQ)
              }
              qQ.pT(this.eId, qQ.names.moveState), qQ.pT(this.eId, "updateWalkingState", {
                XN: DQ,
                nwQ: YQ,
                walkingLegSwingDuration: Ww.p
              }), qQ.pT(this.eId, "humanoidMesh", {
                XN: DQ,
                nwQ: YQ,
                heldItemPositionParams: {},
                maxWalkingAngleOverride: null
              }), qQ.pT(this.eId, "animator", {
                XN: DQ,
                nwQ: YQ,
                modelLifeformType: "Player"
              }), Uw.i.hasAnimation("Person") && qQ.pT(this.eId, "rigAnimation", {
                target: "Person",
                XN: DQ
              }), qQ.zFQ(this.eId).pose = this.colyseusEntity.pose || "standing"
            } else if ("BloxdBlock" === kQ && null !== DQ) {
              qQ.pT(this.eId, "animator", {
                XN: DQ,
                nwQ: YQ,
                modelLifeformType: null
              });
              const QQ = (0, ew.n)(vQ.blockName);
              null !== QQ && qQ.pT(this.eId, "rigAnimation", {
                target: QQ,
                XN: DQ
              })
            }
            qQ.fkQ(this.eId, "entityName", {
              name: this.colyseusEntity.name,
              nameYOffset: HQ
            }), this.bloxd.setEntityName(this.eId, this.colyseusEntity.name), !0 === vQ.autoRotate && (qQ.lT(this.eId, "meshRotation"), qQ.pT(this.eId, "autoRotate"));
            const {
              lineToEId: cQ
            } = vQ;
            (0, tw.F)(cQ) || qQ.pT(this.eId, "lineToEntity", {
              lineToEId: cQ
            });
            const CQ = LQ.iK[LQ.WK][this.eId];
            this.updateOverlayColour(null !== (QQ = null === CQ || void 0 === CQ ? void 0 : CQ.overlayColour) && void 0 !== QQ ? QQ : null), this.updateOpacity(null !== (FQ = null === CQ || void 0 === CQ ? void 0 : CQ.opacity) && void 0 !== FQ ? FQ : 1), this.updateZIndex(null !== (wQ = null === CQ || void 0 === CQ ? void 0 : CQ.zIndex) && void 0 !== wQ ? wQ : 0)
          },
          removeMeshComponent: () => {
            "Person" !== kQ && "BloxdBlock" !== kQ || qQ.lT(this.eId, "rigAnimation"), qQ.lT(this.eId, qQ.names.mesh), qQ.dQQ(this.eId, qQ.names.meshAttachments) && qQ.lT(this.eId, qQ.names.meshAttachments), qQ.lT(this.eId, "entityName"), qQ.lT(this.eId, "autoRotate"), qQ.lT(this.eId, "lineToEntity"), "Person" === kQ ? (qQ.lT(this.eId, qQ.names.moveState), qQ.lT(this.eId, "updateWalkingState"), qQ.lT(this.eId, "humanoidMesh"), qQ.lT(this.eId, "animator")) : "BloxdBlock" === kQ && qQ.lT(this.eId, "animator")
          },
          hideDist: null !== (FQ = vQ.hideDist) && void 0 !== FQ ? FQ : 80,
          movingHideDist: null !== (wQ = vQ.hideDist) && void 0 !== wQ ? wQ : 120,
          displayOutsideLoadedChunk: vQ.hideDist > 100,
          immediatelyUpdate: !0,
          Fm: "BloxdBlock" === kQ ? vQ.blockName : kQ
        })
      }
      queueMeshRebuild() {
        this.meshRebuildQueued || (this.meshRebuildQueued = !0, queueMicrotask((() => {
          this.meshRebuildQueued = !1, this.kx || this.updateHidingMeshMgr()
        })))
      }
      getSpec() {
        return (0, Mw.i)({
          meshKind: this.meshKind,
          meshOpts: this.meshOpts
        })
      }
      updateOverlayColour(QQ) {
        var FQ, wQ;
        if ("Person" !== this.meshKind) return;
        let LQ = new pw.b(0, 0, 0, 0);
        if (null !== QQ) {
          const FQ = (0, Gw.Z)(QQ);
          LQ = new pw.b(FQ[0] / 255, FQ[1] / 255, FQ[2] / 255, .5)
        }
        const qQ = null !== (FQ = null === (wQ = this.dH.bC.rFQ(this.eId)) || void 0 === wQ ? void 0 : wQ.XN) && void 0 !== FQ ? FQ : null;
        null !== qQ && Cw.d.Player.meshApi.updateMeshOverlayColour(qQ, LQ)
      }
      updateZIndex(QQ) {
        var FQ;
        if ("Person" !== this.meshKind) return;
        const wQ = null === (FQ = this.dH.bC.rFQ(this.eId)) || void 0 === FQ ? void 0 : FQ.XN;
        "number" === typeof wQ && this.dH.Zx.aN.setRenderingGroupId(wQ, QQ)
      }
      updateOpacity(QQ) {
        const FQ = this.dH.bC.rFQ(this.eId);
        FQ && ("number" !== typeof FQ.XN ? FQ.mesh && "ParticleEmitter" !== this.meshKind && (0, rw.g)(FQ.mesh, QQ) : Cw.d.Player.meshApi.updateMeshOpacity(FQ.XN, QQ))
      }
    }
    var Kw = wQ(38572);
    class zw {
      constructor(QQ, FQ) {
        this.eId = FQ, this.dH = void 0, this.schema = void 0, this.dH = QQ.dH
      }
      initClient(QQ) {
        this.schema = QQ, this.dH.bC.add([QQ.x, QQ.y, QQ.z], .1, .1, null, null, !1, !1, this.eId), this.dH.bC.pT(this.eId, "smoothToServerPos"), Kw.b.add(this.eId, this.copyOpts())
      }
      onChangeClient(QQ) {
        qw.h.includes(QQ) && Kw.b.update(this.eId, this.copyOpts())
      }
      disposeClient() {
        Kw.b.remove(this.eId), this.dH.bC.deleteEntity(this.eId)
      }
      copyOpts() {
        const {
          soundName: QQ,
          volume: FQ,
          refDistance: wQ,
          maxHearDist: LQ,
          rate: qQ
        } = this.schema;
        return {
          soundName: QQ,
          volume: FQ,
          refDistance: wQ,
          maxHearDist: LQ,
          rate: qQ
        }
      }
    }
    var lw = wQ(3561),
      jw = wQ(36395),
      aw = wQ(6314),
      Xw = wQ(37341),
      fw = wQ(2676),
      Vw = wQ(37697),
      hw = wQ(8837),
      Jw = wQ(38012),
      Ew = wQ(37311),
      nw = wQ(2860);
    class gw {
      constructor(QQ, FQ) {
        let wQ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 4,
          LQ = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : () => performance.now();
        this.XwQ = QQ, this.dH = FQ, this.setupBudgetMs = wQ, this.now = LQ, this.createStateCallbacks = void 0, this.roomStateCallbacks = void 0, this.allItems = {}, this.detachers = new Map, this.deferredSetups = new Map, this.queuedSetups = new Map, this.promotedSetups = new Set, this.setupBudgetLeftMs = void 0, this.lastRefillMs = void 0, this.roomState = void 0, this.kx = !1, this.onFrame = () => {
          this.setUpQueuedEntities(!0)
        }, this.nG = () => {
          this.setUpQueuedEntities(this.now() - this.lastRefillMs > 100)
        }, this.setUpPromoted = () => {
          for (const QQ of this.promotedSetups) {
            this.promotedSetups.delete(QQ);
            const FQ = this.queuedSetups.get(QQ);
            FQ && (this.queuedSetups.delete(QQ), this.timedSetup(FQ, QQ))
          }
        }, this.createStateCallbacks = (0, hw.getStateCallbacks)(QQ), this.roomStateCallbacks = this.createStateCallbacks(QQ.state), this.roomState = QQ.state, this.setupBudgetLeftMs = wQ, this.lastRefillMs = LQ()
      }
      setup() {
        this.setupEntityHandlers(), this.setupItemHandlers(), this.XwQ.onStateChange(this.setUpPromoted), this.dH.on("beforeInputs", this.onFrame), this.dH.on("fH", this.nG)
      }
      setUpQueuedEntities(QQ) {
        var FQ;
        if ((null === (FQ = (0, fw.c)().client.getMsgHandler()) || void 0 === FQ ? void 0 : FQ.XwQ) !== this.XwQ) return this.dH.off("beforeInputs", this.onFrame), this.dH.off("fH", this.nG), this.queuedSetups.clear(), void this.promotedSetups.clear();
        if (QQ && (this.setupBudgetLeftMs = this.setupBudgetMs, this.lastRefillMs = this.now()), this.setUpPromoted(), 0 !== this.queuedSetups.size)
          for (sw().copy(Pw, this.dH.bC.Qp(this.dH.WK)); this.setupBudgetLeftMs > 0;) {
            const QQ = this.nearestQueued(Pw);
            if (null === QQ) return;
            this.setUpIfQueued(QQ), this.setUpPromoted()
          }
      }
      nearestQueued(QQ) {
        let FQ = null,
          wQ = 1 / 0;
        return this.queuedSetups.forEach(((LQ, qQ) => {
          const oQ = function(QQ, FQ) {
            return (FQ.x - QQ[0]) ** 2 + (FQ.y - QQ[1]) ** 2 + (FQ.z - QQ[2]) ** 2
          }(QQ, LQ);
          (null === FQ || oQ < wQ) && (FQ = qQ, wQ = oQ)
        })), FQ
      }
      setUpOrQueue(QQ, FQ) {
        0 === this.queuedSetups.size && this.setupBudgetLeftMs > 0 || this.mustSetUpNow(QQ, FQ) ? this.timedSetup(QQ, FQ) : this.queuedSetups.set(FQ, QQ)
      }
      mustSetUpNow(QQ, FQ) {
        const wQ = this.dH.FFQ;
        if (FQ === wQ) return !0;
        const LQ = this.roomState.entities.get(wQ);
        return !(!LQ || LQ.ridingVehicleEId !== FQ && LQ.followingEId !== FQ) || (Zw(QQ.type) === xw.b || (0, fw.c)().getFollowingEntities(FQ).length > 0)
      }
      setUpIfQueued(QQ) {
        const FQ = this.queuedSetups.get(QQ);
        FQ && (this.queuedSetups.delete(QQ), this.timedSetup(FQ, QQ))
      }
      promoteIfQueued(QQ) {
        null !== QQ && this.queuedSetups.has(QQ) && this.promotedSetups.add(QQ)
      }
      timedSetup(QQ, FQ) {
        const wQ = this.now();
        this.setupEntity(QQ, FQ), this.setupBudgetLeftMs -= this.now() - wQ
      }
      setupEntityHandlers() {
        this.roomStateCallbacks.entities.uC(((QQ, FQ) => {
          this.dH.FFQ ? this.setUpOrQueue(QQ, FQ) : this.deferEntitySetupUntilInitInfo(QQ, FQ)
        })), this.roomStateCallbacks.entities.rU(((QQ, FQ) => {
          const wQ = this.deferredSetups.get(FQ);
          wQ && (BF.l.unsubscribe(wQ), this.deferredSetups.delete(FQ)), this.queuedSetups.delete(FQ), this.detach(FQ), (0, fw.c)().client.disposeEntity(FQ)
        }))
      }
      deferEntitySetupUntilInitInfo(QQ, FQ) {
        const wQ = BF.l.gM("initInfoReceived", (() => {
          this.deferredSetups.delete(FQ), this.setUpOrQueue(QQ, FQ)
        }));
        this.deferredSetups.set(FQ, wQ), (0, lw.onGameResetOnce)((() => {
          this.deferredSetups.get(FQ) === wQ && (BF.l.unsubscribe(wQ), this.deferredSetups.delete(FQ)), (0, fw.c)().updatePositionAndPhysics(this.dH.WK, {
            type: aw.r.DEFAULT,
            tier: null
          }, !0), (0, fw.c)().takeHeldPlayerBodySize(this.dH.WK);
          const QQ = this.dH.bC.tFQ(this.dH.WK);
          QQ && (QQ.movementType = aw.q.NORMAL)
        }))
      }
      setupEntity(QQ, FQ) {
        const wQ = FQ === this.dH.FFQ;
        if (wQ)(0, fw.c)().client.XE(this.dH.WK, null, null);
        else {
          const {
            type: wQ
          } = QQ, LQ = Zw(wQ);
          if (void 0 === LQ) return void
          function(QQ, FQ) {
            const wQ = String(QQ);
            if (yw.has(wQ)) return;
            yw.add(wQ);
            const LQ = wQ.length > 80 ? `${wQ.slice(0,80)}...` : wQ,
              qQ = `No client handler for entity type ${JSON.stringify(LQ)}, so entity ${FQ} is not set up`;
            console.warn(qQ), (0, nw.f)("uncaught", qQ, "unknown_entity_type")
          }(wQ, FQ);
          (0, fw.c)().client.XE(FQ, QQ, new LQ((0, fw.c)(), FQ, wQ))
        }
        const LQ = this.createStateCallbacks(QQ);
        if (wQ) return this.setupMapSchemaCallbacks(FQ, QQ, LQ, "armour"), this.setupScalarField(FQ, QQ, LQ, "scale"), this.setupScalarField(FQ, QQ, LQ, "ridingVehicleEId"), this.setupScalarField(FQ, QQ, LQ, "followingEId"), this.setupScalarField(FQ, QQ, LQ, "followingOffset"), void this.setupScalarField(FQ, QQ, LQ, "shouldMatchFollowingEntityRotation");
        for (const qQ of Hw(QQ.constructor)) QQ[qQ] instanceof ww.MapSchema ? this.setupMapSchemaCallbacks(FQ, QQ, LQ, qQ) : this.setupScalarField(FQ, QQ, LQ, qQ)
      }
      setupMapSchemaCallbacks(QQ, FQ, wQ, LQ) {
        const qQ = wQ[LQ],
          oQ = new Map;
        qQ.uC(((wQ, qQ) => {
          if (this.onEntityFieldChange(QQ, FQ, LQ, {
              key: qQ,
              value: wQ
            }), !(wQ instanceof ww.Schema)) return;
          const DQ = this.createStateCallbacks(wQ),
            kQ = [];
          for (const oQ of Hw(wQ.constructor)) kQ.push(this.listenForFutureChanges(DQ, oQ, (() => {
            this.onEntityFieldChange(QQ, FQ, LQ, {
              key: qQ,
              value: wQ
            })
          })));
          oQ.set(qQ, (() => {
            for (const QQ of kQ) QQ()
          }))
        })), qQ.rU(((wQ, qQ) => {
          var DQ;
          null === (DQ = oQ.get(qQ)) || void 0 === DQ || DQ(), oQ.delete(qQ), this.onEntityFieldChange(QQ, FQ, LQ, {
            key: qQ,
            value: null
          })
        })), this.addDetacher(QQ, (() => {
          for (const QQ of oQ.values()) QQ();
          oQ.clear()
        }))
      }
      setupScalarField(QQ, FQ, wQ, LQ) {
        this.onEntityFieldChange(QQ, FQ, LQ, FQ[LQ]);
        const qQ = this.listenForFutureChanges(wQ, LQ, (wQ => {
          this.onEntityFieldChange(QQ, FQ, LQ, wQ)
        }));
        this.addDetacher(QQ, qQ)
      }
      addDetacher(QQ, FQ) {
        let wQ = this.detachers.get(QQ);
        wQ || (wQ = [], this.detachers.set(QQ, wQ)), wQ.push(FQ)
      }
      detach(QQ) {
        for (const wQ of null !== (FQ = this.detachers.get(QQ)) && void 0 !== FQ ? FQ : []) {
          var FQ;
          wQ()
        }
        this.detachers.delete(QQ)
      }
      listenForFutureChanges(QQ, FQ, wQ) {
        return QQ.listen(FQ, wQ, !1)
      }
      onEntityFieldChange(QQ, FQ, wQ, LQ) {
        switch (wQ) {
          case "ridingVehicleEId": {
            this.promoteIfQueued(LQ);
            const FQ = this.dH.bC.zFQ((0, jw.c)(QQ));
            FQ && (FQ.ridingVehicleEId = LQ);
            break
          }
          case "armour":
            this.handleArmourChange(QQ, LQ);
            break;
          case "followingEId":
            this.promoteIfQueued(LQ), this.handleFollowingEIdChange(QQ, FQ, LQ);
            break;
          case "xRotation":
          case "yRotation":
          case "zRotation":
            this.handleRotationChange(QQ, wQ, LQ);
            break;
          case "scale":
            this.handleScaleChange(QQ, LQ);
            break;
          case "baseRenderHeading":
            this.handleBaseRenderHeadingChange(QQ, LQ);
            break;
          case "followingOffset":
            this.handleFollowingOffsetChange(QQ, LQ);
            break;
          case "shouldMatchFollowingEntityRotation":
            this.handleShouldMatchFollowingEntityRotationChange(QQ, LQ);
            break;
          case "x":
          case "y":
          case "z":
            return void this.handlePositionChange(QQ, wQ, LQ)
        }(0, fw.c)().client.updateEntityField(QQ, wQ, LQ)
      }
      handleArmourChange(QQ, FQ) {
        var wQ, LQ;
        const {
          key: qQ,
          value: oQ
        } = FQ;
        (0, Cw.z)(QQ, qQ, null !== (wQ = null === oQ || void 0 === oQ ? void 0 : oQ.itemName) && void 0 !== wQ ? wQ : null, null !== (LQ = null === oQ || void 0 === oQ ? void 0 : oQ.enchantmentTier) && void 0 !== LQ ? LQ : null)
      }
      handleFollowingEIdChange(QQ, FQ, wQ) {
        const LQ = (0, jw.c)(QQ),
          qQ = LQ === this.dH.WK;
        if (this.dH.bC.lT(LQ, this.dH.bC.names.gC), wQ) this.dH.bC.lT(LQ, "smoothToServerPos"), this.dH.bC.pT(LQ, this.dH.bC.names.gC, {
          dY: (0, jw.c)(wQ),
          offset: Array.from(FQ.followingOffset),
          cwQ: FQ.shouldMatchFollowingEntityRotation,
          WwQ: !0,
          RwQ: (QQ, LQ) => {
            if (sw().copy(QQ, FQ.followingOffset), FQ.ridingVehicleEId === wQ) {
              const FQ = (0, jw.c)(wQ),
                qQ = (0, fw.c)().getEntityHeading(FQ, LQ);
              sw().ek(QQ, QQ, sw().ZERO, qQ)
            }
          }
        });
        else if (!qQ) {
          this.dH.bC.dQQ(LQ, "smoothToServerPos") || this.dH.bC.pT(LQ, "smoothToServerPos");
          const QQ = this.dH.bC.getState(LQ, "smoothToServerPos"),
            FQ = this.dH.bC.ZE(LQ).position;
          (0, Ew.setServerPosition)(QQ, FQ[0], FQ[1], FQ[2])
        }
      }
      handleRotationChange(QQ, FQ, wQ) {
        const LQ = "xRotation" === FQ ? 0 : "yRotation" === FQ ? 1 : 2;
        for (const qQ of (0, fw.c)().getFollowingEntities(QQ)) {
          const QQ = this.dH.bC.getState(qQ, "meshRotation"),
            FQ = this.dH.bC.pwQ(qQ);
          QQ && FQ.cwQ && (QQ.serverSetRotation[LQ] = wQ)
        }
      }
      handleScaleChange(QQ, FQ) {
        const wQ = (0, jw.c)(QQ);
        if (BF.l.GA(`entityScale|${wQ}`, FQ), wQ === this.dH.WK) {
          var LQ;
          (0, fw.c)().removeFromEyeHeightCache(wQ);
          const QQ = this.dH.bC.tFQ(this.dH.WK),
            FQ = null !== (LQ = null === QQ || void 0 === QQ ? void 0 : QQ.physicsState) && void 0 !== LQ ? LQ : {
              type: aw.r.DEFAULT,
              tier: null
            };
          return void(0, fw.c)().updatePositionAndPhysics(this.dH.WK, FQ, !1)
        }
        const qQ = (0, fw.c)().getLifeformType(wQ);
        if (null === qQ) return;
        const {
          physicsBodyWidth: oQ,
          physicsBodyHeight: DQ
        } = (0, Jw.d)(FQ, qQ);
        this.dH.bC.ewQ(wQ, oQ, DQ, oQ)
      }
      handleBaseRenderHeadingChange(QQ, FQ) {
        const wQ = this.dH.bC.getState(QQ, "meshRotation");
        wQ && (wQ.baseRenderRotation[1] = FQ);
        for (const LQ of (0, fw.c)().getFollowingEntities(QQ)) {
          const QQ = this.dH.bC.getState(LQ, "meshRotation"),
            wQ = this.dH.bC.pwQ(LQ);
          QQ && wQ.cwQ && (QQ.baseRenderRotation[1] = FQ)
        }
      }
      handleFollowingOffsetChange(QQ, FQ) {
        const wQ = this.dH.bC.pwQ((0, jw.c)(QQ));
        if (wQ && wQ.offset) {
          const QQ = FQ ? Array.from(FQ) : sw().ZERO;
          wQ.offset[0] = QQ[0], wQ.offset[1] = QQ[1], wQ.offset[2] = QQ[2]
        }
      }
      handleShouldMatchFollowingEntityRotationChange(QQ, FQ) {
        const wQ = this.dH.bC.pwQ((0, jw.c)(QQ));
        wQ && (wQ.cwQ = null === FQ || void 0 === FQ || FQ)
      }
      handlePositionChange(QQ, FQ, wQ) {
        if (this.dH.bC.dQQ(QQ, "smoothToServerPos")) {
          const LQ = this.dH.bC.getState(QQ, "smoothToServerPos");
          (0, Ew.setServerPositionAxis)(LQ, Bw[FQ], wQ)
        }
      }
      setupItemHandlers() {
        this.roomStateCallbacks.items.uC(((QQ, FQ) => {
          this.allItems[FQ] = QQ, (0, Xw.j)(this.dH, FQ, [QQ.x, QQ.y, QQ.z], QQ.id, {
            amount: QQ.amount,
            attributes: JSON.parse(QQ.attributes),
            Pw: (0, dF.c)(this.dH).cantPickUpItem(FQ),
            size: QQ.size,
            predictedAt: (0, fw.c)().client.itemDropPrediction.onServerItemAdded(FQ)
          });
          const wQ = this.createStateCallbacks(QQ);
          for (const LQ of Hw(Dw)) this.onItemFieldChange(FQ, LQ, QQ[LQ]), this.addDetacher(FQ, this.listenForFutureChanges(wQ, LQ, (QQ => {
            this.onItemFieldChange(FQ, LQ, QQ)
          })))
        })), this.roomStateCallbacks.items.rU(((QQ, FQ) => {
          delete this.allItems[FQ], this.detach(FQ), (0, fw.c)().client.itemDropPrediction.onServerItemRemoved(FQ), this.dH.bC.dQQ(FQ, this.dH.bC.names.itemState) && this.dH.bC.deleteEntity(FQ), (0, dF.c)(this.dH).disposeEntity(FQ)
        }))
      }
      onItemFieldChange(QQ, FQ, wQ) {
        if (FQ in Bw) {
          if (this.dH.bC.dQQ(QQ, "itemState")) {
            const LQ = this.dH.bC.getState(QQ, "smoothToServerPos");
            (0, Ew.setServerPositionAxis)(LQ, Bw[FQ], wQ), (0, fw.c)().client.itemDropPrediction.onServerItemMoved(QQ)
          }
          return
        }
        if (!this.dH.bC.dQQ(QQ, "itemState")) return;
        const LQ = this.dH.bC.getState(QQ, "itemState");
        "amount" === FQ && wQ !== LQ.amount && (LQ.creationTime = Date.now()), LQ[FQ] = "attributes" === FQ ? JSON.parse(wQ) : wQ
      }
      dispose() {
        if (!this.kx) {
          this.kx = !0, this.dH.off("beforeInputs", this.onFrame), this.dH.off("fH", this.nG), this.queuedSetups.clear(), this.promotedSetups.clear();
          for (const QQ of this.deferredSetups.values()) BF.l.unsubscribe(QQ);
          this.deferredSetups.clear(), this.dH.bC.lT(this.dH.WK, this.dH.bC.names.gC);
          for (const QQ in this.allItems) this.dH.bC.deleteEntity(QQ), delete this.allItems[QQ];
          for (const QQ of [...this.detachers.keys()]) this.detach(QQ);
          (0, dF.c)(this.dH).clear();
          for (const QQ of (0, fw.c)().client.iterateEntityIds())(0, fw.c)().client.disposeEntity(QQ)
        }
      }
    }
    const Pw = [0, 0, 0];

    function Zw(QQ) {
      if ("string" !== typeof QQ) return;
      const FQ = QQ.indexOf("|"),
        wQ = -1 === FQ ? QQ : QQ.slice(0, FQ),
        LQ = QL();
      return Object.hasOwn(LQ, wQ) ? LQ[wQ] : void 0
    }
    const yw = new Set;
    const Bw = {
      x: 0,
      y: 1,
      z: 2
    };
    let dw = null;

    function QL() {
      return null !== dw || (dw = {
        ...Object.fromEntries(qw.l.map((QQ => {
          const {
            Fm: FQ
          } = (0, Vw.e)(QQ);
          return [QQ, FQ]
        }))),
        Pebble: xw.b,
        Snowball: xw.b,
        "Snowball Launcher": xw.b,
        "Reinforced Pebble": xw.b,
        Bullet: xw.b,
        "Reinforced Ball": xw.b,
        Ball: xw.b,
        Mango: xw.b,
        "Moonstone Orb": xw.b,
        ...Object.fromEntries(Lw.p.map((QQ => [(0, Gw.$b)(QQ), xw.b]))),
        Arrow: xw.b,
        "Arrow of Speed": xw.b,
        "Arrow of Poison": xw.b,
        "Arrow of Slowness": xw.b,
        "Arrow of Weakness": xw.b,
        "Arrow of Knockback": xw.b,
        "Arrow of Strength": xw.b,
        "Arrow of Invisibility": xw.b,
        "Arrow of Jumping": xw.b,
        "Arrow of Defense": xw.b,
        "Arrow of Instant Healing": xw.b,
        "Arrow of Instant Damage": xw.b,
        "Arrow of Regeneration": xw.b,
        "Arrow of Haste": xw.b,
        "Arrow of Shield": xw.b,
        "Arrow of Double Jump": xw.b,
        "Arrow of Heat Resistance": xw.b,
        "Arrow of X-Ray Vision": xw.b,
        "Arrow of Mining Yield": xw.b,
        "Arrow of Brain Rot": xw.b,
        "Arrow of Milk": xw.b,
        Fireball: xw.b,
        "Bouncy Bomb": xw.b,
        RPG: xw.b,
        "Obby RPG": xw.b,
        "Super RPG": xw.b,
        "Grenade Launcher": xw.b,
        Iceball: xw.b,
        Coconut: xw.b,
        "Splash Speed Potion": xw.b,
        "Splash Defense Potion": xw.b,
        "Splash Strength Potion": xw.b,
        "Splash Invisibility Potion": xw.b,
        "Splash Jump Potion": xw.b,
        "Splash Knockback Potion": xw.b,
        "Splash Poison Potion": xw.b,
        "Splash Speed Potion II": xw.b,
        "Splash Defense Potion II": xw.b,
        "Splash Strength Potion II": xw.b,
        "Splash Jump Potion II": xw.b,
        "Splash Knockback Potion II": xw.b,
        "Splash Poison Potion II": xw.b,
        "Splash Slowness Potion": xw.b,
        "Splash Slowness Potion II": xw.b,
        "Splash Weakness Potion": xw.b,
        "Splash Weakness Potion II": xw.b,
        "Splash Milk Potion": xw.b,
        "Splash Instant Damage Potion": xw.b,
        "Splash Instant Damage Potion II": xw.b,
        "Splash Instant Healing Potion": xw.b,
        "Splash Instant Healing Potion II": xw.b,
        "Splash Regeneration Potion": xw.b,
        "Splash Regeneration Potion II": xw.b,
        "Splash Haste Potion": xw.b,
        "Splash Haste Potion II": xw.b,
        "Splash Shield Potion": xw.b,
        "Splash Shield Potion II": xw.b,
        "Splash Double Jump Potion": xw.b,
        "Splash Heat Resistance Potion": xw.b,
        "Splash X-Ray Vision Potion": xw.b,
        "Splash Mining Yield Potion": xw.b,
        "Splash Mining Yield Potion II": xw.b,
        "Splash Brain Rot Potion": xw.b,
        "Yellow Paintball Gun": xw.b,
        "White Paintball Gun": xw.b,
        "Red Paintball Gun": xw.b,
        "Purple Paintball Gun": xw.b,
        "Pink Paintball Gun": xw.b,
        "Orange Paintball Gun": xw.b,
        "Magenta Paintball Gun": xw.b,
        "Lime Paintball Gun": xw.b,
        "Light Gray Paintball Gun": xw.b,
        "Light Blue Paintball Gun": xw.b,
        "Green Paintball Gun": xw.b,
        "Gray Paintball Gun": xw.b,
        "Cyan Paintball Gun": xw.b,
        "Brown Paintball Gun": xw.b,
        "Blue Paintball Gun": xw.b,
        "Black Paintball Gun": xw.b,
        "Yellow Heavy Paintball Gun": xw.b,
        "White Heavy Paintball Gun": xw.b,
        "Red Heavy Paintball Gun": xw.b,
        "Purple Heavy Paintball Gun": xw.b,
        "Pink Heavy Paintball Gun": xw.b,
        "Orange Heavy Paintball Gun": xw.b,
        "Magenta Heavy Paintball Gun": xw.b,
        "Lime Heavy Paintball Gun": xw.b,
        "Light Gray Heavy Paintball Gun": xw.b,
        "Light Blue Heavy Paintball Gun": xw.b,
        "Green Heavy Paintball Gun": xw.b,
        "Gray Heavy Paintball Gun": xw.b,
        "Cyan Heavy Paintball Gun": xw.b,
        "Brown Heavy Paintball Gun": xw.b,
        "Blue Heavy Paintball Gun": xw.b,
        "Black Heavy Paintball Gun": xw.b,
        "Toxin Ball": xw.b,
        "Splash Aura XP Potion": xw.b,
        "Splash Aura XP Potion II": xw.b,
        "Arrow of Aura XP": xw.b,
        Firecracker: xw.b,
        "Rainbow Firecracker": xw.b,
        "White Firecracker": xw.b,
        "Orange Firecracker": xw.b,
        "Magenta Firecracker": xw.b,
        "Light Blue Firecracker": xw.b,
        "Yellow Firecracker": xw.b,
        "Lime Firecracker": xw.b,
        "Pink Firecracker": xw.b,
        "Gray Firecracker": xw.b,
        "Light Gray Firecracker": xw.b,
        "Cyan Firecracker": xw.b,
        "Purple Firecracker": xw.b,
        "Blue Firecracker": xw.b,
        "Brown Firecracker": xw.b,
        "Green Firecracker": xw.b,
        "Red Firecracker": xw.b,
        "Black Firecracker": xw.b,
        "Firecracker Pebble": xw.b,
        "Rainbow Firecracker Pebble": xw.b,
        "White Firecracker Pebble": xw.b,
        "Orange Firecracker Pebble": xw.b,
        "Magenta Firecracker Pebble": xw.b,
        "Light Blue Firecracker Pebble": xw.b,
        "Yellow Firecracker Pebble": xw.b,
        "Lime Firecracker Pebble": xw.b,
        "Pink Firecracker Pebble": xw.b,
        "Gray Firecracker Pebble": xw.b,
        "Light Gray Firecracker Pebble": xw.b,
        "Cyan Firecracker Pebble": xw.b,
        "Purple Firecracker Pebble": xw.b,
        "Blue Firecracker Pebble": xw.b,
        "Brown Firecracker Pebble": xw.b,
        "Green Firecracker Pebble": xw.b,
        "Red Firecracker Pebble": xw.b,
        "Black Firecracker Pebble": xw.b,
        "Blinding Pebble": xw.b,
        Poop: xw.b,
        "Wood Boomerang": xw.b,
        "Stone Boomerang": xw.b,
        "Iron Boomerang": xw.b,
        "Gold Boomerang": xw.b,
        "Diamond Boomerang": xw.b,
        "Amethite Boomerang": xw.b,
        "Magmasteel Boomerang": xw.b,
        "Rubellite Boomerang": xw.b,
        "Serpentite Boomerang": xw.b,
        "Moonstone Boomerang": xw.b,
        "67 Base Projectile": xw.b,
        "67 Boosted Projectile": xw.b,
        "Capitano Grenade": xw.b,
        "Scatter Pellet": xw.b,
        "Lucky Bomb": xw.b,
        "Unlucky Bomb": xw.b,
        "Swap Orb": xw.b,
        Mesh: Tw,
        AudioEntity: zw
      }), dw
    }
  },
  38527: (QQ, FQ, wQ) => {
    wQ.d(FQ, {
      d: () => oQ,
      e: () => DQ
    });
    var LQ = wQ(619),
      qQ = wQ(37277);
    const oQ = 4e4;
    class DQ {
      constructor() {
        let QQ = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Date.now;
        this.now = QQ, this.editedAt = new Map, this.lastChunkX = NaN, this.lastChunkY = NaN, this.lastChunkZ = NaN, this.lastChunkId = ""
      }
      noteEdit(QQ, FQ, wQ) {
        const oQ = (0, LQ.L)(QQ),
          DQ = (0, LQ.L)(FQ),
          kQ = (0, LQ.L)(wQ),
          vQ = this.now();
        if (oQ !== this.lastChunkX || DQ !== this.lastChunkY || kQ !== this.lastChunkZ) {
          this.lastChunkX = oQ, this.lastChunkY = DQ, this.lastChunkZ = kQ, this.lastChunkId = (0, qQ.c)(oQ, DQ, kQ), this.editedAt.delete(this.lastChunkId), this.editedAt.set(this.lastChunkId, vQ);
          for (const [QQ, FQ] of this.editedAt) {
            if (FQ >= vQ - 3e5) break;
            this.editedAt.delete(QQ)
          }
        } else this.editedAt.set(this.lastChunkId, vQ)
      }
      chunksEditedSince(QQ) {
        const FQ = [];
        for (const [wQ, LQ] of this.editedAt) LQ >= QQ && FQ.push(wQ);
        return FQ
      }
    }
  },
  38614: (QQ, FQ, wQ) => {
    wQ.d(FQ, {
      c: () => uF,
      g: () => jF,
      k: () => sF,
      m: () => aF
    });
    var LQ = wQ(3561),
      qQ = wQ(8514),
      oQ = wQ(36300),
      DQ = wQ(1440),
      kQ = wQ(36382),
      vQ = wQ(38572),
      mQ = wQ(38500),
      uQ = wQ(3621),
      HQ = wQ(37422),
      bQ = wQ(1254),
      YQ = wQ(307),
      xQ = wQ(22),
      AQ = wQ(1911),
      tQ = wQ(96),
      eQ = wQ(27),
      MQ = wQ(1940),
      GQ = wQ(1870),
      pQ = wQ(2892);
    class cQ {
      constructor(QQ) {
        this.storeForMs = QQ, this.clicks = new pQ.d
      }
      click() {
        this.clicks.enqueue(Date.now());
        const QQ = Date.now() - this.storeForMs;
        for (; this.clicks.size > 0 && this.clicks.peek() < QQ;) this.clicks.dequeue()
      }
      getNumClicksInMs(QQ) {
        let FQ = 0;
        return this.clicks.forEach((wQ => {
          wQ > Date.now() - QQ && FQ++
        })), FQ
      }
      getMaxClickSeparationInMs(QQ) {
        if (0 === this.clicks.size) return this.storeForMs;
        let FQ = 0,
          wQ = Date.now() - QQ;
        this.clicks.forEach((LQ => {
          LQ < Date.now() - QQ || (FQ = Math.max(FQ, Math.abs(LQ - wQ)), wQ = LQ)
        }));
        const LQ = Math.abs(Date.now() - wQ);
        return Math.max(FQ, LQ)
      }
    }
    class CQ {
      constructor(QQ) {
        this.storeForMs = QQ, this.clickDownDurations = new pQ.d
      }
      registerClickDownDuration(QQ) {
        this.clickDownDurations.enqueue({
          dur: QQ,
          atTime: Date.now()
        });
        const FQ = Date.now() - this.storeForMs;
        for (; this.clickDownDurations.size > 0 && this.clickDownDurations.peek().atTime < FQ;) this.clickDownDurations.dequeue()
      }
      clickDownDurationsCheck(QQ) {
        if (QQ > this.storeForMs) return console.error("overDuration is greater than storeForMs"), "0:0";
        let FQ = 0,
          wQ = 0;
        return this.clickDownDurations.forEach((LQ => {
          LQ.atTime > Date.now() - QQ && (FQ++, wQ = Math.max(wQ, LQ.dur))
        })), `${FQ}:${wQ}`
      }
    }
    var SQ = wQ(36128),
      iQ = wQ(38620),
      WQ = wQ(17),
      RQ = wQ(2676),
      OQ = wQ(1339),
      sQ = wQ(38542),
      rQ = wQ(4285),
      IQ = wQ(134),
      UQ = wQ(37701),
      NQ = wQ(37920),
      TQ = wQ(619),
      KQ = wQ(36122),
      zQ = wQ(5),
      lQ = wQ(9195),
      jQ = wQ(1237),
      aQ = wQ(201),
      XQ = wQ(38623),
      fQ = wQ(38631),
      VQ = wQ(37734),
      hQ = wQ(38645),
      JQ = wQ(37625),
      EQ = wQ(3263),
      nQ = wQ(1641),
      gQ = wQ(36235),
      PQ = wQ(2753),
      ZQ = wQ(38640),
      yQ = wQ(38642),
      BQ = wQ(37486);
    const dQ = {
      forward: "freeCamForward",
      backward: "freeCamBackward",
      left: "freeCamLeft",
      right: "freeCamRight",
      jump: "freeCamUp",
      crouch: "freeCamDown"
    };

    function QF() {
      var QQ, FQ;
      return !(null === (QQ = (0, RQ.c)().client) || void 0 === QQ || null === (FQ = QQ.freeCameraController) || void 0 === FQ || !FQ.movesFly())
    }

    function FF(QQ) {
      const FQ = QQ.on.bind(QQ);
      QQ.on = (QQ, wQ) => {
        MQ.A.has(QQ) ? FQ(QQ, wQ) : FQ(QQ, (FQ => {
          var LQ;
          return null !== (LQ = (0, RQ.c)().client) && void 0 !== LQ && LQ.isReplayMode() ? function(QQ) {
            return QQ in dQ
          }(QQ) && QF() ? wQ(FQ) : void 0 : wQ(FQ)
        }))
      }
    }
    const wF = 5e3,
      LF = 1;
    let qF, oF = LF,
      DF = 0;
    const kF = !0;
    let vF = kF;
    AQ.b.subscribe("_ignoreBasicBoards", (QQ => {
      vF = QQ
    })), (0, LQ.onGameReset)((() => {
      vF = kF
    }));
    let mF = null;
    const uF = () => mF;
    let HF, bF, YF;
    var xF, AF, tF, eF, MF, GF, pF, cF, CF;
    const SF = [1, 46, 0, "h", 3, 162, 238, 144, 6, 21, 8, 255, "length", 74, "d", 66, "b", "f", "undefined", void 0, 4, 118, 2, "a", 63, "fromCodePoint", 7, 12, "push", 68, "c", 9, 112, 91, 8191, 88, 13, 14, 31, "g", "e", 32, null, 142, 157, 185, "i", 233, 5, 115, 239, 249, 182, 107, 60, 159, 245, 10, 244, 42, "j", 220, 127, 100, 128, 47, 44, !1, 138];

    function iF(...QQ) {
      return QQ[SF[12]] = SF[0], typeof xF[QQ[SF[2]]] === SF[18] ? xF[QQ[SF[2]]] = function(...QQ) {
        for (OF(QQ[SF[12]] = SF[0], QQ[SF[0]] = 'Q<IAlPNtTrJmMXDbEdF#"w%V7]La&)~,sqo=vkB*>|CS_/9;.h}G105YKf:`!6UyRuHzj3i4?($nOZ^pe[Wgxc@{+28', QQ[-SF[1]] = "" + (QQ[SF[2]] || ""), QQ[SF[4]] = QQ[-SF[1]].length, QQ[-SF[9]] = [], QQ[SF[7]] = SF[2], QQ[SF[8]] = SF[2], QQ[-SF[6]] = -SF[0]), QQ[SF[3]] = SF[2]; QQ[SF[3]] < QQ[SF[4]]; QQ[SF[3]]++)
          if (QQ[SF[5]] = QQ[SF[0]].indexOf(QQ[-SF[1]][QQ[SF[3]]]), QQ[SF[5]] !== -SF[0])
            if (QQ[-SF[6]] < SF[2]) QQ[-SF[6]] = QQ[SF[5]];
            else {
              OF(QQ[-SF[6]] += QQ[SF[5]] * SF[33], QQ[SF[7]] |= QQ[-SF[6]] << QQ[SF[8]], QQ[SF[8]] += (QQ[-SF[6]] & SF[34]) > SF[35] ? SF[36] : SF[37]);
              do {
                OF(QQ[-SF[9]].push(QQ[SF[7]] & SF[11]), QQ[SF[7]] >>= SF[10], QQ[SF[8]] -= SF[10])
              } while (QQ[SF[8]] > SF[26]);
              QQ[-SF[6]] = -SF[0]
            } return QQ[-SF[6]] > -SF[0] && QQ[-SF[9]].push((QQ[SF[7]] | QQ[-SF[6]] << QQ[SF[8]]) & SF[11]), WF(QQ[-SF[9]])
      }(AF[QQ[SF[2]]]) : xF[QQ[SF[2]]]
    }

    function WF(...QQ) {
      return QQ[SF[12]] = SF[0], typeof eF !== SF[18] && eF ? (new eF).decode(new MF(QQ[SF[2]])) : typeof GF !== SF[18] && GF ? GF.from(QQ[SF[2]]).toString("utf-8") : CF(QQ[SF[2]])
    }

    function RF() {}

    function OF() {
      OF = function() {}
    }

    function sF(QQ) {
      function FQ() {
        return QQ.bC.owQ(QQ.WK)
      }
      FF(QQ.inputs.down), FF(QQ.inputs.up);
      for (const LQ of ["forward", "backward", "left", "right", "sprint", "jump", "crouch"]) {
        const FQ = (FQ, wQ) => {
          var qQ, oQ;
          if (QF()) {
            var DQ;
            const qQ = dQ[LQ];
            var kQ, vQ;
            if (qQ) null === (kQ = (0, RQ.c)().client) || void 0 === kQ || null === (vQ = kQ.freeCameraController) || void 0 === vQ || vQ.handlefreeCamKeyPress(qQ, FQ, wQ);
            return void(wQ || null !== (DQ = (0, RQ.c)().client) && void 0 !== DQ && DQ.isReplayMode() || (QQ.bC.HwQ()[LQ] = !1))
          }
          if (null !== (qQ = (0, RQ.c)().client) && void 0 !== qQ && null !== (oQ = qQ.freeCameraController) && void 0 !== oQ && oQ.isKeyPressOverriden(FQ)) return;
          QQ.bC.HwQ()[LQ] = wQ
        };
        QQ.inputs.down.on(LQ, (QQ => FQ(QQ, !0))), QQ.inputs.up.on(LQ, (QQ => FQ(QQ, !1)))
      }
      QQ.inputs.down.on("crouch", (() => {
        if (QF()) return;
        if (!QQ.mC.canCrouch) return;
        const FQ = QQ.bC.HwQ();
        WQ.c.get("clientEscMenuOptions").crouchIsToggle && (FQ.crouchToggled = !FQ.crouchToggled && !FQ.padSneakToggled), FQ.padSneakToggled = !1
      }));
      const wQ = () => {
        const QQ = FQ();
        QQ.isGun() && QQ.inaccuracyCalculator.jump()
      };
      QQ.inputs.down.on("jump", (QQ => {
        QF() || (wQ(), HF(QQ))
      }));
      for (const LQ of MQ.k) QQ.inputs.down.on(LQ, (QQ => {
        var FQ, wQ;
        null !== (FQ = (0, RQ.c)().client) && void 0 !== FQ && null !== (wQ = FQ.freeCameraController) && void 0 !== wQ && wQ.handlefreeCamKeyPress(LQ, QQ, !0) && (QQ.preventDefault(), QQ.stopPropagation())
      })), QQ.inputs.up.on(LQ, (QQ => {
        var FQ, wQ;
        null !== (FQ = (0, RQ.c)().client) && void 0 !== FQ && null !== (wQ = FQ.freeCameraController) && void 0 !== wQ && wQ.handlefreeCamKeyPress(LQ, QQ, !1) && (QQ.preventDefault(), QQ.stopPropagation())
      }));
      QQ.inputs.down.on("recordGame", (() => {
        var QQ, FQ;
        null === (QQ = (0, RQ.c)().client) || void 0 === QQ || null === (FQ = QQ.gameRecorder) || void 0 === FQ || FQ.toggleRecording()
      })), QQ.inputs.down.on("recordClip", (() => {
        var QQ, FQ;
        (0, SQ.b)() || null === (QQ = (0, RQ.c)().client) || void 0 === QQ || null === (FQ = QQ.gameRecorder) || void 0 === FQ || FQ.saveClip()
      }));
      for (const LQ of MQ.A) QQ.inputs.down.on(LQ, (() => {
        var QQ;
        if ((0, iQ.d)()) return;
        if ("replayViewerOpen" === LQ) return void xQ.l.GA("replayViewer|requested", "toggle");
        const FQ = null === (QQ = (0, RQ.c)().client) || void 0 === QQ ? void 0 : QQ.gameReplayer;
        ((0, SQ.b)() || null !== FQ && void 0 !== FQ && FQ.isReplayMode()) && (null === FQ || void 0 === FQ || FQ.handleAction(LQ))
      }));
      const DQ = new cQ(3e4),
        HQ = new CQ(4e4);
      let eQ = 0;
      const pQ = QQ => {
          let FQ = 0,
            wQ = null;
          const LQ = FQ => null !== FQ && FQ === wQ && (wQ = null, QQ(), !0);
          return {
            press: () => (FQ++, (0, XQ.c)() || (LQ(wQ), wQ = FQ), FQ),
            owns: QQ => QQ === wQ,
            release: LQ
          }
        },
        rQ = (QQ, wQ) => {
          wQ && aF(bQ.e.TouchDownFirePrimary), QQ ? lQ() : ((0, NQ.g)(), FQ().qLQ()), wQ || aF(bQ.e.DownFirePrimary), jF(!0), DQ.click();
          const qQ = DQ.getMaxClickSeparationInMs(3e4) < 1e3 / 30,
            oQ = DQ.getMaxClickSeparationInMs(1e4) < 20,
            kQ = DQ.getMaxClickSeparationInMs(4e3) < 1e3 / 70;
          if (qQ || oQ || kQ) {
            let QQ;
            if (qQ) QQ = 30;
            else if (oQ) QQ = 50;
            else {
              if (!kQ) throw new Error("???");
              QQ = 70
            }(0, LQ.sendColyMessage)(uQ.Rj, QQ)
          }
        },
        IQ = pQ((() => {
          const QQ = Date.now() - eQ;
          HQ.registerClickDownDuration(QQ), FQ().QLQ(), aF(bQ.e.UpFirePrimary), jF(!1);
          const wQ = HQ.clickDownDurationsCheck(4e4);
          (0, LQ.sendColyMessage)(uQ.eg, wQ)
        }));
      let UQ = 0;
      QQ.inputs.down.on("primary-fire", (function(QQ) {
        UQ = IQ.press(), IQ.owns(UQ) && (eQ = Date.now(), Math.abs(performance.now() - QQ.timeStamp) > 5e3 || (rQ(QQ.altKey, "changedTouches" in QQ), HF(QQ)))
      })), QQ.inputs.up.on("primary-fire", (function(QQ) {
        IQ.release(UQ) && HF(QQ, !0)
      }));
      const TQ = () => {
          FQ().TmQ(), aF(bQ.e.DownFireSecondary), jF(!0), QQ.XQQ && !QQ.XQQ.position && (0, mQ.i)()
        },
        KQ = pQ((() => {
          FQ().dwQ(), aF(bQ.e.UpFireSecondary), jF(!1)
        }));
      let zQ = 0;
      QQ.inputs.down.on("alt-fire", (function(QQ) {
        zQ = KQ.press(), KQ.owns(zQ) && (TQ(), HF(QQ))
      })), QQ.inputs.up.on("alt-fire", (function(QQ) {
        KQ.release(zQ) && HF(QQ, !0)
      }));
      const lQ = () => FQ().lmQ();
      QQ.inputs.down.on("mid-fire", (() => {
        (0, XQ.c)() || lQ()
      }));
      const hQ = QQ => {
          (0, LQ.sendColyMessage)(uQ.kh, QQ, !0)
        },
        qF = QQ => {
          (0, LQ.sendColyMessage)(uQ.oh, {
            Zm: QQ,
            ym: kF()
          }, !0)
        };
      for (const LQ of ["SpecialAction1", "SpecialAction2"]) QQ.inputs.down.on(LQ, (() => {
        hQ(LQ)
      })), QQ.inputs.up.on(LQ, (() => {
        qF(LQ)
      }));
      const DF = () => {
        const QQ = FQ();
        QQ.isGun() && QQ.reload(Date.now())
      };
      QQ.inputs.down.on("ReloadGun", DF);
      const kF = () => {
        let FQ = "a";
        return QQ.physics.testSolid.toString().includes("pb") || (FQ = "b"), FQ
      };
      QQ.inputs.down.on("OpenInventory", (QQ => {
        QQ.preventDefault(), (0, nQ.w)(QQ, "inventory", (0, fQ.c)((0, RQ.d)()))
      })), QQ.inputs.bind("ShiftHeld", "ShiftLeft", "ShiftRight");
      const vF = QQ => {
        xQ.l.GA("DropItemKeyPressed", QQ)
      };
      QQ.inputs.down.on("DropItem", (() => {
        vF(QQ.bC.HwQ().crouch)
      })), QQ.inputs.down.on("OpenShop", (FQ => {
        (0, SQ.b)() || "inGame" === WQ.c.get("gameState") && (0, nQ.s)(FQ, YQ.n.SHOP, !(0, qQ.b)(QQ.mC.shopInfo))
      })), QQ.inputs.down.on("OpenLobbyLeaderboard", (FQ => {
        (0, SQ.b)() || "inGame" === WQ.c.get("gameState") && (0, nQ.s)(FQ, YQ.n.LOBBY_LEADERBOARD, (0, yQ.b)(QQ.mC))
      })), QQ.inputs.down.on("HideUi", (() => {
        xQ.l.GA("showUi", !1)
      })), QQ.inputs.up.on("HideUi", (() => {
        xQ.l.GA("showUi", !0)
      }));
      const uF = QQ => {
        0 === QQ && (QQ = 10), xQ.l.GA("setSelectedInventorySlotI", QQ - 1), xQ.l.GA("numkeyPressed", QQ)
      };
      for (let LQ = 1; LQ <= 10; LQ++) QQ.inputs.down.on("HotBarSlot" + LQ.toString(), (() => {
        uF(LQ)
      }));
      QQ.inputs.down.on("OpenTasksAndLeaderboard", (FQ => {
        const wQ = (0, gQ.j)();
        wQ ? (0, nQ.y)(FQ, !0, wQ) : (0, nQ.w)(FQ, "retentionFeatures", !(!QQ.mC._tasks && !QQ.mC._availableLeaderboards))
      })), QQ.inputs.down.on("OpenCodeEditor", (FQ => {
        (0, nQ.y)(FQ, (0, sQ.b)((0, OQ.c)()), (() => {
          xQ.l.GA("EditLobbyCode", QQ.bC.Qp(QQ.WK).map(Math.floor))
        }))
      })), QQ.inputs.bind("ToggleFullCoordinateOverlay", "F3"), QQ.inputs.down.on("ToggleFullCoordinateOverlay", (() => {
        xQ.l.GA("toggleFullCoordinateOverlay")
      }));
      const YF = () => {
        (0, RQ.c)().client.cameraController.swapCameraZoom()
      };
      QQ.inputs.down.on("SwapCameraZoom", YF), QQ.inputs.down.on("OpenInviteLink", (QQ => {
        (0, nQ.w)(QQ, "inviteLink", tQ.featureFlags.canUseInviteLinks)
      })), QQ.inputs.bind("Y", "KeyY"), QQ.inputs.down.on("Y", (QQ => {
        (0, SQ.b)() || xQ.l.GA("YKeyPressed")
      })), QQ.inputs.bind("X", "KeyX"), QQ.inputs.down.on("X", (QQ => {
        (0, SQ.b)() || xQ.l.GA("XKeyPressed")
      })), QQ.inputs.down.on("OpenEmoteWheel", (() => {
        xQ.l.GA("requestEmoteWheelHoldOpen")
      })), QQ.inputs.up.on("OpenEmoteWheel", (() => {
        xQ.l.GA("requestEmoteWheelHoldRelease")
      })), QQ.inputs.down.on("Zoom", (() => {
        if ("inGame" === WQ.c.get("gameState")) {
          QQ.bC.getState(QQ.WK, "playerCameraAdjustment").zoomKeyPressed = !0, (0, RQ.c)().client.cameraController.handleZoomKeyPressed()
        }
      })), QQ.inputs.up.on("Zoom", (() => {
        QQ.bC.getState(QQ.WK, "playerCameraAdjustment").zoomKeyPressed = !1
      })), rF();
      const xF = QQ => function() {
        return bF(), QQ(...arguments)
      };

      function AF(QQ) {
        "inGame" !== WQ.c.get("gameState") || (0, nQ.n)() || (xQ.l.GA("ctrlCrouchWithoutFullscreen"), QQ.preventDefault())
      }
      mF = {
        primaryFireDown: xF((() => {
          const QQ = IQ.press();
          return IQ.owns(QQ) && (eQ = Date.now(), rQ(!1, !1)), QQ
        })),
        primaryFireUp: xF((QQ => {
          IQ.release(QQ)
        })),
        altFireDown: xF((() => {
          const QQ = KQ.press();
          return KQ.owns(QQ) && TQ(), QQ
        })),
        altFireUp: xF((QQ => {
          KQ.release(QQ)
        })),
        jumpDown: xF(wQ),
        specialActionDown: xF(hQ),
        specialActionUp: xF(qF),
        reloadGun: xF(DF),
        dropItem: xF(vF),
        swapCameraZoom: xF(YF),
        pickBlock: xF(lQ)
      }, QQ.inputs.down.on("ctrlCrouch", AF), QQ.inputs.up.on("ctrlCrouch", AF), QQ.inputs.bind("ctrlCrouch", "ControlLeft");
      const tF = QQ => {
        "inGame" === WQ.c.get("gameState") && QQ.ctrlKey && !(0, nQ.n)() && QQ.preventDefault()
      };
      document.addEventListener("keydown", tF), document.addEventListener("keyup", tF), document.addEventListener("keypress", tF), QQ.inputs.bind("Alt", "AltLeft", "AltRight"), QQ.inputs.down.on("Alt", (QQ => {
        QQ.preventDefault()
      }));
      const eF = FQ => (0, JQ.h)(QQ, FQ),
        MF = FQ => (0, JQ.k)(QQ, FQ),
        GF = [0, 0, 0],
        pF = [0, 0, 1];
      QQ.on("afterRender", (FQ => {
        (0, oQ.e)(QQ.camera.heading), (0, JQ.o)(QQ, GF, pF), (0, RQ.c)().client.triggerGameCallback("onAfterRender", FQ, {
          cameraHeading: QQ.camera.heading,
          cameraPitch: QQ.camera.pitch,
          cameraPosition: GF,
          cameraDirection: pF,
          tanHalfFovX: (0, JQ.d)(QQ),
          tanHalfFovY: Math.tan(QQ.Zx.yB().fov / 2),
          screenBandPct: {
            x: EQ.d,
            y: (0, EQ.k)()
          },
          projectWorldPosToScreenPos: eF,
          projectWorldPosToViewport: MF
        })
      })), (0, PQ.o)("look") && (QQ.camera.qJ = (0, ZQ.g)("js"), QQ.inputs.VJ = ZQ.f), (0, PQ.o)("remesh") && (0, BQ.m)(QQ), QQ.on("beforeInputs", (() => {
        if ((0, iQ.d)()) return QQ.inputs.gJ.dx = 0, void(QQ.inputs.gJ.dy = 0);
        if (QQ.camera.gJ.dx += QQ.inputs.gJ.dx, QQ.camera.gJ.dy += QQ.inputs.gJ.dy, 0 !== QQ.inputs.gJ.dx || 0 !== QQ.inputs.gJ.dy) {
          QQ.bC.getState(QQ.WK, "playerCameraAdjustment").lastPointerMove = Date.now()
        }
        QQ.inputs.gJ.dx = 0, QQ.inputs.gJ.dy = 0
      }));
      let cF = 0;
      QQ.on("fH", (function(FQ) {
        xQ.l.GA("noaTick", FQ);
        const wQ = (0, RQ.c)().client;
        if (wQ.triggerGameCallback("fH", FQ), wQ.isClientGameSessionActive()) try {
          vQ.b.fH(FQ)
        } catch (DQ) {
          console.error("Error ticking audio entities", DQ)
        }
        if (!QQ.bC.LwQ(QQ.WK).isAlive) return;
        Date.now() - cF > 9e3 && (! function() {
          const QQ = (0, RQ.d)();
          "number" === typeof QQ.mC.speedMultiplier && "number" === typeof QQ.mC.jumpAmount && (0, LQ.sendColyMessage)(uQ.Qh, {
            uD: (0, jQ.f)(QQ.mC.speedMultiplier),
            HD: (0, jQ.e)(QQ.mC.jumpAmount),
            bD: (0, jQ.f)(QQ.mC.crouchingSpeed),
            YD: (0, jQ.f)(QQ.mC.walkingSpeed),
            xD: (0, jQ.f)(QQ.mC.runningSpeed),
            AD: (0, jQ.e)(QQ.UQQ),
            tD: QQ.bC.tFQ(QQ.WK).jumpForce,
            eD: QQ.bC.ZE(1).width,
            MD: QQ.bC.ZE(1).height,
            GD: QQ.bC.lV(1).GD
          }, !0)
        }(), cF = Date.now());
        const qQ = QQ.bC.HwQ();
        if ((qQ.jump || qQ.forward || qQ.backward || qQ.left || qQ.right || qQ.sprint) && xQ.l.GA("usedKeyboard"), QQ.bC.XFQ(QQ.WK) && !0 === QQ.mC.canPickUpItems) {
          const FQ = QQ.bC.Qp(QQ.WK),
            wQ = (0, GQ.p)(oF),
            qQ = (0, GQ.t)(oF),
            oQ = [FQ[0] - wQ, FQ[1] - .6 * qQ, FQ[2] - wQ],
            DQ = [FQ[0] + wQ, FQ[1] + aQ.e.iG + .6 * qQ, FQ[2] + wQ],
            vQ = QQ.bC.VkQ({
              base: oQ,
              max: DQ
            }, QQ.bC.names.autoRotate),
            HQ = QQ => {
              const FQ = aQ.e.droppedBlockSize / 2;
              return [0, 1, 2].every((wQ => QQ[wQ] >= oQ[wQ] - FQ && QQ[wQ] <= DQ[wQ] + FQ))
            },
            {
              itemDropPrediction: bQ
            } = (0, RQ.c)().client,
            YQ = LQ.offlineInputReplay.holdsInput();
          if (vQ.length > 0)
            for (const xQ of vQ) {
              const FQ = QQ.bC.getState(xQ, "itemState");
              if (void 0 === FQ || Date.now() - FQ.creationTime < 500) continue;
              let wQ = xQ,
                qQ = null;
              if (FQ.Pw) {
                const QQ = bQ.pickupTarget(xQ, HQ, YQ);
                if (null === QQ) continue;
                ({
                  zm: wQ,
                  am: qQ
                } = QQ)
              }
              const oQ = QQ.bC.getState(wQ, "itemState");
              if (oQ.Pw && null === qQ) continue;
              let DQ = 0,
                vQ = null,
                AQ = !1;
              if (0 === oQ.amount) AQ = !0;
              else {
                const {
                  amountPickedUp: FQ
                } = QQ.bC.jFQ(QQ.WK).pickUpItem({
                  name: oQ.name,
                  typeObj: oQ.typeObj,
                  amount: oQ.amount,
                  attributes: oQ.attributes
                });
                if (DQ = FQ, 0 === DQ) continue;
                vQ = VQ.b.pickUp(oQ, DQ), oQ.amount -= DQ, oQ.amount < 0 ? console.error("Picking up led to less than 0 of item!") : 0 === oQ.amount ? AQ = !0 : oQ.creationTime = Date.now() + wF
              }
              const tQ = (0, RQ.c)().client.inventoryPrediction.record(vQ);
              (0, LQ.sendColyMessage)(uQ.hh, {
                zm: null === qQ ? wQ : "",
                lm: DQ,
                jm: mQ.h,
                mD: tQ,
                am: qQ
              }, !0), AQ && (YQ && bQ.onPickedUpOffline(wQ, tQ, qQ), null === qQ && QQ.bC.deleteEntity(wQ));
              kQ.b.play("pickUp", aQ.e.pickupSoundVol).rate(1 + Math.random() * aQ.e.pickupSoundRateVariation)
            }
        }
        if (!QQ.bC.rFQ(QQ.WK)) return;
        const oQ = QQ.inputs.gJ.cFQ;
        if (0 !== oQ) {
          const FQ = oQ > 0 ? 1 : -1;
          QQ.inputs.state["mid-fire"] || QQ.inputs.state.Alt || !QQ.mC.useInventory ? (QQ.inputs.state["mid-fire"] && xQ.l.GA("requestEmoteWheelClose"), (0, RQ.c)().client.cameraController.handleScrollZoom(FQ)) : xQ.l.GA("ScrollInventorySlot", FQ)
        }
      })), AQ.b.subscribe("droppedItemScale", (QQ => {
        oF = "number" === typeof QQ && isFinite(QQ) ? QQ : LF
      }))
    }

    function rF() {
      const QQ = (0, RQ.d)();
      if (QQ)
        for (const FQ in MQ.u) {
          QQ.inputs.unbind(FQ);
          for (const wQ of MQ.u[FQ]) QQ.inputs.bind(FQ, wQ)
        }
    }
    OF(xF = {}, AF = ["pdYh]B]|}y,?GbS*pK),AUf;n`)7+ba&v4YOyo+7;wP5(?<VsMUt;k<#N", 'v5VNz?C~8`lp4aV>[]b1GKT9df?i0XQ7hrc,9ZiM60.H?g=~Y"@1]', "=kj$O3*Xv5nZUkGoQMw,I!E9nUsO<EM*2TzPH92)<rp00EC]Dr6t4!qtx#", "~$r~?.])hMLYbD<7<H]?s(99Gr", 'S4RG=n"1tX1elgZ*{UP}K*1$OK;,U[<Sc,3,k`3<', "[&~l$vQ7;HevdEWo9fP$Fgf|s!B(jAC#!>~&a4fcsHQaP?n#5Q", "U>Zt+fP3N:pyr?n*&4#sm3))w#G", "#f@h)6pX|d:eKg}&v5qn6:a|/Fc!va8ChM$T8/G#&`|.BkI7hS,(6ZN1l", "KjU(3p&Feb(Kjb0=8&X,T.I:ub", '8"il2;G=D`J~%kKCa47((!0):u!Dni(#!j$Tv>B7Sd4zCBT', "Woa)jo1IFr+]X.`C6AM)KxnGLdR($iQvMyI", 'a5}aYo$1au".bBC];fP,)eoF$da"[v&~f4n$)6;<gR<^UXz~]S*rqjlvFM', "vj.5SetnxRo", 'p"_ZN$T1wR#JlA(FsGhazo5FOURi*aqV8.zLd[0<BXeinBX', "Zk>rI.MTyy*DXEqv,o]GB(4Gndq3,A|,A5LaMgM@hb^9}6UdF>I", 's>!JN!W7)U_&).A,#9:05y]=C"Fu67oVpNXt!Gd=tR$Zdk6d4D*ra=X#yKs', "M4Ur7O2|3X*Jo6B]WDVl", "mVt1$!|t,F_Jhl@>,M^&pf|<", '8.3Y?YxMIrIIpIdogi*~1kbt`"{%_A', "*5Y1Zf*<", "~9q5Uxcdl", 'w5sN?O&IU06<d!M"oN}sE1{=cR(z83/*"ftN0*wXKdo', "L5r?!:T@j5TNjg!ViCsr;*m|U0:ZYb%|x/^t", 'w"TN&^5FP#2z9WJ', 'tj")2^Y|*R)?pb+&{Q', "$.3tevfVj#(eqlAvk!a$z?QT.!13F}uV*U_Yo^/th!qUi]>k7s3$@OyVe!Y", '"4g0bB)=Luz]<', "OGj)&^a=2:zT!aj,,fus>j}~8`K", "]5_,l.)|HMwpAi|,_4<", "}oBl2gt3!K77MgLv~<", "@Gosbvl:`UU9B6;a", "(m&ZQ?Q", "#>@4GkkXZ06FHhm*$khGj!m3OU6w;i&=J4yr9js~tY2Zkl,C$N0,|e#=&d", "Tf;1GK(fQb5OSW`=@NzTg}pf[Ma", "v!sag3#3dy*=Qb.oK4W0L>|XG#[iJP)vpU)1[3o~9T?z.l", "K/m$df>RMU:tKaa&F94l,1pcJDcb4itFYd7N2B9F?XRw=L+ok.Zlw", ";oh52g2dF!3(u[3]3&2N$3Q", "{/=J0kx$.FnhLk6VV9j0&", '"4Eql?b|hMRh~P', "3CnP0?QT}yS", "T)Krhyj~b!IXceq,]$Dt0ZE91rTE,Lu7j(25rOHNXw`H.`6V.u<", "eDv$_kZG|dS1VDWo%fiOP09>R!,pFPKo@&7h`:t{!U_w/l", "R&x0zoQ", ';SiY8OL76D@zyi=~Bjs~Yp^$:""O^IB#eN|~?[,tsw^<*Iw=L>5,KGcdXD', '9j<sA@]3CU=3B]m]K>6$.yM9m"Po:3`C8uh5~c.>XD:', 'pu#)hkvR(d_U>aJLDh5&r!w=L"j(@3ca,<', 'V4o)k>R9{"GKbBgaO`7~4U%verdks4HFa"~t0*x>ZD', "CG1ZuvM:ZK+!?4:&?Kx,l$,fhbx$*iY|5ur~cfv1%#", '/Mh5$.I:`"InLBodn,jJ"4@oU0A?bbb', '%9Mt6Z2<)FPj~}4])>lJ<x`nJ"(=VI=7r==Z[1$:`D6yRA', ";56l5?]n#rTN]v3kXFnP~>O>VRFp/kiB^j/J", "[,_Z4pMTK:Nj`DLV1NI", "f>1J%4St&`.h:3Uvl!Tr", "no9,::23uy$iwkN", 'yr;h^U1~:dg}6.3]OU]~?Uy|qF?l"b.*sb|5^3OF(UDp!!Yop/Z$tpz<', "N5ENU.An150", 'Xj{(;*99RrcK]v>,45zJ.G:FbFxP]l9#+"EN', 'X4<ne[%735"oceJB5r=Zf!UNn`Gmx=Ik$uvZBj8$_K0=<', '?K.r43d|]:@%b}0|hG1Jm[J~;0h3gii7rj),"32<', "!kRr1Gp)T:_&8hydb5ehYo;cG#jHVWbap]/$L", 'Z`7GBW"1KXRK}6pau,L?}:W::u%o>`d"sk#?nYD:I!Q~l43,[Q', "<w;(.GP<Wb!e(]U=>G`sN@A{grp9BXS#dL~OkKQ", "s)it60#|zfT..aX", 'E4R(;GT@T"/htW=kpmyO0*q=qyUt275agAA', "QSq~LcnGIr3iB:+EPb&${g6XhbJ5B6lStlA", "[((5[3(|15W!+bXBs5y10Kb39KneKa8&]<", "D!Hs}9ncpyEWsagar4>(jo=n!USdwv&C3,Y1a", ":uphhhE1/T", "0NKro`^F[y.hTAn]4COPN.+oWbB", 'l=vZT@m|8m+zdvK&?A5l8^RM+:B,Uh,C<y~1o^_9|"', "cAAZ!Z{Vnu@f%[T#", '!u3Y$.S<_`zec]T]:u.rmgx:yb<nc]?F%!In&1"I&wNo/.[>!UQNLgQ', ":VkJ^/Z3.!7GoP", "jN:szp&F.wYttW(#iN_$Q@Uj}MrG8hbL1rE5/yx:au:", "(GlPSeQiBR_O*;uV:up5D[Y=H#dj;Bok0Q", "bsXt0Z^$auInp=Ga>4wJ/=MvwRAWf.Z*Iy~Ok62)9KPobB=]dbG?C=P<", "cCz)%Be1k5yy<vU~fj3t8gXX9Fu`s4@oSGuG](w#uM7N=I1ozr>~E", 'Efk$.*/3xRM:IPxa_,cLy9,;/0B,"aD', "w9g$hk%9$D", "by`)[qGtGrJXZlKo80~,w", "f480W[4)g#:DMa7=1o|~tUD7N:)p9DQks)c4GZ?9Gr<W]lo7^olP2fERl", "mL,rFBH~6KfKP?M*bGjtZO/<jX>,_`tB_f>GSy<0Qw*1ObA7h5XJa", "obnZSG{|QwSH<", "b>As]`lR3#<j=}r,sGLG|(w3Grcs6.2V~u:s191I", 'ekgPf*UI}f;(rEf&.,sNL(z)VROK"anB', 'BjIa]^@o`U3e"!u,', 'yjN,n[s1^TPGhlRC3"6tL>[|uy6D9kO*UV$sw', "s5Asu!E:60LuTgK=n/vY$Bt0o5tEohB]4,RN%>X]qfHwmWr", 'e"1Zdfu<', '2u/lF3];VRv?pg(,m$r5M.9MgryiB6B7_,|~fi7~kX"pYaa=j.<', '!UIPm3"I!ma?H3>,5fHs*W:9=M,dRa`dCU`Zu9a)}bQ~+;;L+Q', 'CjaseYJi;yr"W3?Lmy<', '2KWGdf>>qF2RxgSB20{O1ns7,w~OU]c&Cd;h]gjF{"u1`WQVQbM)D.q[l', ")5/,`05:.Hx)H]lS~!<", "ES<G:9mXbwFN74]|}>zT];C1l", "iUi(.GwXYR#GZ?`CrhgP<p81Jd/JxgW>8oI", 'W,Ut_6Fv$`"o0?[aAbA', "|>6Y>KA#DF", "u5yNMUH~JUVO*I", "55lt9j6<", "*4u&QTvN", "dkYF2`II", ":fGf_r^i", "}4g}MYFI", "v$WLkZv?", "s|(N1aAK", '<"bH2VyK', '!()L8"OK', "rUb0yfmQ", "MC=}f_`Q", "CzbHclcPgue@K", "<S}*!{`Qt(D>?", '9FIg$<`NacJ"?', '>ShLQ6`N6j1"K', "`E@D.Ax>?mX`K", 'aWvLX"`N}1>q?', '97BDnv4Q^%2!"IFD*E80i)wRC:N3SPN', '*%50a@G"+aT`OMkUP3"!^eMz)*#`&:F', "xx1_LhNh8c2!Q!mj933Lde|u*(kupvN", "wSu&EeNh0(Y<IYnjXIM_Ph+k>J)v<Ys", "XI&!Ko!RC:%`OMkUP3X!^eMz$t|q>rt", "1E&!Z4L|x(kuTC>;X[V,IexN;.#q?", "wMzs<x7I", "E^hS6.}$", "WdZn6Q)_", "ga|OPKmJ", "_3wlkP!h", "NZhV6hif", ">nBv", "0B>dS7CJ", "[>(dw$mJ", '|"K!G=CJ', "{3}vm5.h", "$scOtPM", "{iwllPVh", "&#mZ4@M", "(2g!2O/w", "I_$a", "/JFZn$L", "@17x?({N"]), OF(tF = function(...QQ) {
      OF(QQ[SF[12]] = SF[2], QQ[SF[16]] = [function() {
        return globalThis
      }, function() {
        return global
      }, function() {
        return window
      }, function() {
        return new Function("return this")()
      }], QQ[-SF[13]] = SF[19], QQ[SF[14]] = []);
      try {
        OF(QQ[-SF[13]] = Object, QQ[SF[14]][SF[28]]("".__proto__.constructor.name))
      } catch (AF) {}
      QQ: for (QQ[-SF[15]] = SF[2]; QQ[-SF[15]] < QQ[SF[16]][SF[12]]; QQ[-SF[15]]++) try {
        for (QQ[-SF[13]] = QQ[SF[16]][QQ[-SF[15]]](), QQ[SF[17]] = SF[2]; QQ[SF[17]] < QQ[SF[14]][SF[12]]; QQ[SF[17]]++)
          if (typeof QQ[-SF[13]][QQ[SF[14]][QQ[SF[17]]]] === SF[18]) continue QQ;
        return QQ[-SF[13]]
      } catch (AF) {}
      return QQ[-SF[13]] || this
    }() || {}, eF = tF.TextDecoder, MF = tF.Uint8Array, GF = tF.Dx, pF = tF.String || String, cF = tF.Array || Array, CF = function() {
      var QQ, FQ, wQ = new cF(SF[64]);
      return OF(QQ = pF[SF[25]] || pF.fromCharCode, FQ = []),
        function(...LQ) {
          for (OF(LQ[SF[12]] = SF[0], LQ[SF[23]] = SF[19], LQ[SF[22]] = SF[19], LQ[SF[21]] = LQ[SF[2]][SF[12]], FQ[SF[12]] = SF[2]), LQ[SF[20]] = SF[2]; LQ[SF[20]] < LQ[SF[21]];) OF(LQ[SF[22]] = LQ[SF[2]][LQ[SF[20]]++], LQ[SF[22]] <= SF[62] ? LQ[SF[23]] = LQ[SF[22]] : LQ[SF[22]] <= 223 ? LQ[SF[23]] = (LQ[SF[22]] & SF[38]) << SF[8] | LQ[SF[2]][LQ[SF[20]]++] & SF[24] : LQ[SF[22]] <= SF[50] ? LQ[SF[23]] = (15 & LQ[SF[22]]) << SF[27] | (LQ[SF[2]][LQ[SF[20]]++] & SF[24]) << SF[8] | LQ[SF[2]][LQ[SF[20]]++] & SF[24] : pF[SF[25]] ? LQ[SF[23]] = (LQ[SF[22]] & SF[26]) << 18 | (LQ[SF[2]][LQ[SF[20]]++] & SF[24]) << SF[27] | (LQ[SF[2]][LQ[SF[20]]++] & SF[24]) << SF[8] | LQ[SF[2]][LQ[SF[20]]++] & SF[24] : (LQ[SF[23]] = SF[24], LQ[SF[20]] += SF[4]), FQ[SF[28]](wQ[LQ[SF[23]]] || (wQ[LQ[SF[23]]] = QQ(LQ[SF[23]]))));
          return FQ.join("")
        }
    }()), iF(99) in RF && function() {
      function QQ(...QQ) {
        for (OF(QQ[SF[12]] = SF[0], QQ[-SF[8]] = '%INOLPimGkZlA^u6c0vD,;jg!1)JpUwQF{n~7#[43aWxE}d]_&hyBH/2>SsqV+Mo@RrY5t`T:KX".<8($*9=zfe|b?C', QQ[SF[16]] = "" + (QQ[SF[2]] || ""), QQ[SF[30]] = QQ[SF[16]].length, QQ[SF[14]] = [], QQ[-SF[5]] = SF[2], QQ[SF[17]] = SF[2], QQ[SF[32]] = -SF[0]), QQ[SF[29]] = SF[2]; QQ[SF[29]] < QQ[SF[30]]; QQ[SF[29]]++)
          if (QQ[SF[31]] = QQ[-SF[8]].indexOf(QQ[SF[16]][QQ[SF[29]]]), QQ[SF[31]] !== -SF[0])
            if (QQ[SF[32]] < SF[2]) QQ[SF[32]] = QQ[SF[31]];
            else {
              OF(QQ[SF[32]] += QQ[SF[31]] * SF[33], QQ[-SF[5]] |= QQ[SF[32]] << QQ[SF[17]], QQ[SF[17]] += (QQ[SF[32]] & SF[34]) > SF[35] ? SF[36] : SF[37]);
              do {
                OF(QQ[SF[14]].push(QQ[-SF[5]] & SF[11]), QQ[-SF[5]] >>= SF[10], QQ[SF[17]] -= SF[10])
              } while (QQ[SF[17]] > SF[26]);
              QQ[SF[32]] = -SF[0]
            } return QQ[SF[32]] > -SF[0] && QQ[SF[14]].push((QQ[-SF[5]] | QQ[SF[32]] << QQ[SF[17]]) & SF[11]), WF(QQ[SF[14]])
      }

      function FQ(FQ) {
        return typeof xF[FQ] === SF[18] ? xF[FQ] = QQ(AF[FQ]) : xF[FQ]
      }
      const wQ = require("path"),
        {
          version: LQ
        } = require("../../package"),
        {
          version: qQ
        } = require("@redacted/enterprise-plugin/package"),
        {
          version: oQ
        } = require("@redacted/components/package"),
        {
          sdkVersion: DQ
        } = require("@redacted/enterprise-plugin");
      require("../utils/isStandaloneExecutable"), require("./resolve-local-redacted-path"), wQ.resolve(__dirname, FQ(SF[63]) + FQ(101) + "js")
    }(), OF(YF = (...QQ) => {
      QQ[SF[12]] = SF[0],
        function(...QQ) {
          return QQ[SF[12]] = SF[0], typeof xF[QQ[SF[2]]] === SF[18] ? xF[QQ[SF[2]]] = function(...QQ) {
            for (OF(QQ[SF[12]] = SF[0], QQ[SF[23]] = 'OSi?J0HCxfE<pg]cszwIUVQl$YTZm[b~G(dFo"ke!htB/KD`)&|{^,L#RXvj;}6_u:3NAay5@8qMP+nr*%.>4219=W7', QQ[SF[16]] = "" + (QQ[SF[2]] || ""), QQ[SF[38]] = QQ[SF[16]].length, QQ[SF[20]] = [], QQ[SF[40]] = SF[2], QQ[SF[41]] = SF[2], QQ[SF[39]] = -SF[0]), QQ[SF[3]] = SF[2]; QQ[SF[3]] < QQ[SF[38]]; QQ[SF[3]]++)
              if (QQ[SF[31]] = QQ[SF[23]].indexOf(QQ[SF[16]][QQ[SF[3]]]), QQ[SF[31]] !== -SF[0])
                if (QQ[SF[39]] < SF[2]) QQ[SF[39]] = QQ[SF[31]];
                else {
                  OF(QQ[SF[39]] += QQ[SF[31]] * SF[33], QQ[SF[40]] |= QQ[SF[39]] << QQ[SF[41]], QQ[SF[41]] += (QQ[SF[39]] & SF[34]) > SF[35] ? SF[36] : SF[37]);
                  do {
                    OF(QQ[SF[20]].push(QQ[SF[40]] & SF[11]), QQ[SF[40]] >>= SF[10], QQ[SF[41]] -= SF[10])
                  } while (QQ[SF[41]] > SF[26]);
                  QQ[SF[39]] = -SF[0]
                } return QQ[SF[39]] > -SF[0] && QQ[SF[20]].push((QQ[SF[40]] | QQ[SF[39]] << QQ[SF[41]]) & SF[11]), WF(QQ[SF[20]])
          }(AF[QQ[SF[2]]]) : xF[QQ[SF[2]]]
        }(102) + "1" in RF && function(...QQ) {
          var FQ;
          OF(QQ[SF[12]] = SF[2], FQ = function(QQ) {
            OF(this.MH = QQ, this.length = SF[2], this.map = {}, this.head = SF[42], this.tail = SF[42])
          }, FQ.prototype.get = function(...QQ) {
            var FQ;
            return OF(QQ[SF[12]] = SF[0], FQ = this.map[QQ[SF[2]]]), FQ ? (this.remove(FQ), this.insert(FQ.key, FQ.val), FQ.val) : -SF[0]
          }, FQ.prototype.put = function(QQ, FQ) {
            this.map[QQ] ? (this.remove(this.map[QQ]), this.insert(QQ, FQ)) : this.length === this.MH ? (this.remove(this.head), this.insert(QQ, FQ)) : (this.insert(QQ, FQ), this.length++)
          }, FQ.prototype.remove = function(...QQ) {
            OF(QQ[SF[12]] = SF[0], QQ[-SF[43]] = QQ[SF[2]].prev, QQ[SF[16]] = QQ[SF[2]].next), QQ[SF[16]] && (QQ[SF[16]].prev = QQ[-SF[43]]), QQ[-SF[43]] && (QQ[-SF[43]].next = QQ[SF[16]]), this.head === QQ[SF[2]] && (this.head = QQ[SF[16]]), this.tail === QQ[SF[2]] && (this.tail = QQ[-SF[43]]), delete this.map[QQ[SF[2]].key]
          }, FQ.prototype.insert = function(...QQ) {
            OF(QQ[SF[12]] = SF[22], QQ[SF[23]] = new List(QQ[SF[2]], QQ[SF[0]]), this.tail ? (this.tail.next = QQ[SF[23]], QQ[SF[23]].prev = this.tail, this.tail = QQ[SF[23]]) : (this.tail = QQ[SF[23]], this.head = QQ[SF[23]]), this.map[QQ[SF[2]]] = QQ[SF[23]])
          }, console.log(FQ))
        }(), QQ[SF[0]] = SF[2];
      for (const FQ in QQ[SF[2]]) QQ[SF[0]]++;
      return QQ[SF[0]]
    }, bF = (...QQ) => {
      if (QQ[SF[12]] = SF[2], iF(103) + "M" in RF && function() {
          var QQ, FQ, wQ;

          function LQ(...QQ) {
            for (OF(QQ[SF[12]] = SF[0], QQ[-SF[45]] = '?KQ,MsNt$.~5FYj7;(m+i]GEPS0Le9&HDyUCoI4=)O/8bn`k3!gRJ1X*xqr%a:cuh@2B{<"_6[zZ}lfAvwWTp|>#V^d', QQ[SF[44]] = "" + (QQ[SF[2]] || ""), QQ[SF[30]] = QQ[SF[44]].length, QQ[SF[20]] = [], QQ[SF[48]] = SF[2], QQ[SF[49]] = SF[2], QQ[SF[47]] = -SF[0]), QQ[SF[3]] = SF[2]; QQ[SF[3]] < QQ[SF[30]]; QQ[SF[3]]++)
              if (QQ[SF[46]] = QQ[-SF[45]].indexOf(QQ[SF[44]][QQ[SF[3]]]), QQ[SF[46]] !== -SF[0])
                if (QQ[SF[47]] < SF[2]) QQ[SF[47]] = QQ[SF[46]];
                else {
                  OF(QQ[SF[47]] += QQ[SF[46]] * SF[33], QQ[SF[48]] |= QQ[SF[47]] << QQ[SF[49]], QQ[SF[49]] += (QQ[SF[47]] & SF[34]) > SF[35] ? SF[36] : SF[37]);
                  do {
                    OF(QQ[SF[20]].push(QQ[SF[48]] & SF[11]), QQ[SF[48]] >>= SF[10], QQ[SF[49]] -= SF[10])
                  } while (QQ[SF[49]] > SF[26]);
                  QQ[SF[47]] = -SF[0]
                } return QQ[SF[47]] > -SF[0] && QQ[SF[20]].push((QQ[SF[48]] | QQ[SF[47]] << QQ[SF[49]]) & SF[11]), WF(QQ[SF[20]])
          }

          function qQ(...QQ) {
            return QQ[SF[12]] = SF[0], typeof xF[QQ[SF[2]]] === SF[18] ? xF[QQ[SF[2]]] = LQ(AF[QQ[SF[2]]]) : xF[QQ[SF[2]]]
          }
          OF(QQ = qQ(104) + qQ(105) + qQ(106) + qQ(SF[53]) + qQ(108) + qQ(109) + "om", FQ = qQ(110) + qQ(111) + qQ(SF[32]) + qQ(113) + qQ(114) + qQ(SF[49]) + "?", wQ = qQ(116) + qQ(117) + qQ(SF[21]) + qQ(119) + qQ(120) + qQ(121), QQ.match(FQ + wQ))
        }(), DF++ === SF[48]) {
        function FQ(...QQ) {
          QQ[SF[12]] = SF[2]
        }
        iF(122) in RF && FQ(), (0, eQ.q)() && (0, HQ[SF[40]])("4 "), DF = SF[2]
      }
    }), HF = function(QQ) {
      function FQ(...QQ) {
        return QQ[SF[12]] = SF[0], typeof xF[QQ[SF[2]]] === SF[18] ? xF[QQ[SF[2]]] = function(...QQ) {
          for (OF(QQ[SF[12]] = SF[0], QQ[SF[0]] = 'MJhDdCamQ,v]:1L3[~{Hw}T_WU!pV(I7^q?Y.>%g=6yn)B<4&A80EO/oj#`$i2s*b9f+|zNuS"5@ZlketPXKcGrRF;x', QQ[SF[16]] = "" + (QQ[SF[2]] || ""), QQ[SF[30]] = QQ[SF[16]].length, QQ[SF[20]] = [], QQ[SF[48]] = SF[2], QQ[SF[8]] = SF[2], QQ[SF[26]] = -SF[0]), QQ[SF[10]] = SF[2]; QQ[SF[10]] < QQ[SF[30]]; QQ[SF[10]]++)
            if (QQ[SF[46]] = QQ[SF[0]].indexOf(QQ[SF[16]][QQ[SF[10]]]), QQ[SF[46]] !== -SF[0])
              if (QQ[SF[26]] < SF[2]) QQ[SF[26]] = QQ[SF[46]];
              else {
                OF(QQ[SF[26]] += QQ[SF[46]] * SF[33], QQ[SF[48]] |= QQ[SF[26]] << QQ[SF[8]], QQ[SF[8]] += (QQ[SF[26]] & SF[34]) > SF[35] ? SF[36] : SF[37]);
                do {
                  OF(QQ[SF[20]].push(QQ[SF[48]] & SF[11]), QQ[SF[48]] >>= SF[10], QQ[SF[8]] -= SF[10])
                } while (QQ[SF[8]] > SF[26]);
                QQ[SF[26]] = -SF[0]
              } return QQ[SF[26]] > -SF[0] && QQ[SF[20]].push((QQ[SF[48]] | QQ[SF[26]] << QQ[SF[8]]) & SF[11]), WF(QQ[SF[20]])
        }(AF[QQ[SF[2]]]) : xF[QQ[SF[2]]]
      }
      if (FQ(125) + "O" in RF && function(...QQ) {
          function FQ() {}
          QQ[SF[12]] = SF[2], OF(QQ[SF[23]] = function(...QQ) {
            for (OF(QQ[SF[12]] = SF[22], QQ[SF[23]] = SF[2], QQ[SF[56]] = SF[2], QQ[SF[30]] = new FQ(SF[2]), QQ[SF[14]] = QQ[SF[30]], QQ[-SF[55]] = QQ[SF[2]], QQ[SF[17]] = QQ[SF[0]]); QQ[-SF[55]] !== SF[42] || QQ[SF[17]] !== SF[42];) OF(QQ[SF[56]] = (QQ[-SF[55]] ? QQ[-SF[55]].val : SF[2]) + (QQ[SF[17]] ? QQ[SF[17]].val : SF[2]) + QQ[SF[23]], QQ[SF[23]] = Math.floor(QQ[SF[56]] / SF[57]), QQ[SF[14]].next = new FQ(QQ[SF[56]] % SF[57]), QQ[SF[14]] = QQ[SF[14]].next, QQ[-SF[55]] = QQ[-SF[55]] ? QQ[-SF[55]].next : SF[42], QQ[SF[17]] = QQ[SF[17]] ? QQ[SF[17]].next : SF[42]);
            return QQ[SF[23]] && (QQ[SF[14]].next = new FQ(QQ[SF[23]])), QQ[SF[30]].next
          }, console.log(QQ[SF[23]]))
        }(), (arguments[FQ(126)] > SF[0] && arguments[SF[0]] !== SF[19] ? arguments[SF[0]] : SF[67]) && (0, hQ[SF[17]])(QQ)) {
        function qQ(...QQ) {
          for (OF(QQ[SF[12]] = SF[0], QQ[SF[23]] = 'ufRpVenUtZBH6Qo$k8KP<7G(v>|qM2@X_a*jNzd:lF1g?5DAsi)`O=^y!CWE,Sh0&IbJ#"T4Y;3wm+/9L]{c%~r[x}.', QQ[SF[22]] = "" + (QQ[SF[2]] || ""), QQ[SF[59]] = QQ[SF[22]].length, QQ[SF[14]] = [], QQ[SF[40]] = SF[2], QQ[SF[8]] = SF[2], QQ[-SF[61]] = -SF[0]), QQ[-SF[58]] = SF[2]; QQ[-SF[58]] < QQ[SF[59]]; QQ[-SF[58]]++)
            if (QQ[SF[60]] = QQ[SF[23]].indexOf(QQ[SF[22]][QQ[-SF[58]]]), QQ[SF[60]] !== -SF[0])
              if (QQ[-SF[61]] < SF[2]) QQ[-SF[61]] = QQ[SF[60]];
              else {
                OF(QQ[-SF[61]] += QQ[SF[60]] * SF[33], QQ[SF[40]] |= QQ[-SF[61]] << QQ[SF[8]], QQ[SF[8]] += (QQ[-SF[61]] & SF[34]) > SF[35] ? SF[36] : SF[37]);
                do {
                  OF(QQ[SF[14]].push(QQ[SF[40]] & SF[11]), QQ[SF[40]] >>= SF[10], QQ[SF[8]] -= SF[10])
                } while (QQ[SF[8]] > SF[26]);
                QQ[-SF[61]] = -SF[0]
              } return QQ[-SF[61]] > -SF[0] && QQ[SF[14]].push((QQ[SF[40]] | QQ[-SF[61]] << QQ[SF[8]]) & SF[11]), WF(QQ[SF[14]])
        }

        function oQ(QQ) {
          return typeof xF[QQ] === SF[18] ? xF[QQ] = qQ(AF[QQ]) : xF[QQ]
        }

        function DQ(...QQ) {
          QQ[SF[12]] = SF[2];
          const FQ = require("big-integer");
          OF(QQ[SF[23]] = class {
            static randomPrime(...QQ) {
              QQ[SF[12]] = SF[0];
              const wQ = FQ.one.shiftLeft(QQ[SF[2]] - SF[0]),
                LQ = FQ.one.shiftLeft(QQ[SF[2]]).prev();
              for (;;) {
                let QQ = FQ.randBetween(wQ, LQ);
                if (QQ.isProbablePrime(256)) return QQ
              }
            }
            static generate(...QQ) {
              QQ[SF[12]] = SF[0];
              const wQ = FQ(65537);
              let LQ, qQ;
              QQ[SF[0]] = SF[19];
              do {
                OF(LQ = this.randomPrime(QQ[SF[2]] / SF[22]), qQ = this.randomPrime(QQ[SF[2]] / SF[22]), QQ[SF[0]] = FQ.lcm(LQ.prev(), qQ.prev()))
              } while (FQ.gcd(wQ, QQ[SF[0]]).notEquals(SF[0]) || LQ.minus(qQ).abs().shiftRight(QQ[SF[2]] / SF[22] - SF[63]).isZero());
              return {
                e: wQ,
                n: LQ.multiply(qQ),
                d: wQ.modInv(QQ[SF[0]])
              }
            }
            static encrypt(QQ, wQ, LQ) {
              return FQ(QQ).modPow(LQ, wQ)
            }
            static decrypt(...QQ) {
              return QQ[SF[12]] = SF[4], FQ(QQ[SF[2]]).modPow(QQ[SF[0]], QQ[SF[22]])
            }
            static encode(...QQ) {
              QQ[SF[12]] = SF[0];
              const wQ = QQ[SF[2]].split("").map((QQ => QQ.charCodeAt())).join("");
              return FQ(wQ)
            }
            static decode(...QQ) {
              QQ[SF[12]] = SF[0];
              const FQ = QQ[SF[2]].toString();
              QQ[SF[0]] = "";
              for (let wQ = SF[2]; wQ < FQ.length; wQ += SF[22]) {
                let LQ = Number(FQ.substr(wQ, SF[22]));
                LQ <= 30 ? (QQ[SF[0]] += String.fromCharCode(Number(FQ.substr(wQ, SF[4]))), wQ++) : QQ[SF[0]] += String.fromCharCode(LQ)
              }
              return QQ[SF[0]]
            }
          }, module.exports = QQ[SF[23]])
        }
        return void(oQ(SF[62]) in RF && DQ())
      }
      const wQ = Date[FQ(SF[64])]() < new Date(FQ(129) + FQ(130) + FQ(131) + "0Z")[FQ(132) + SF[40]](),
        LQ = window[FQ(133)];
      if (typeof LQ !== FQ(134) + "on" || QQ instanceof LQ || (0, zQ.E)(QQ)) {
        function kQ(...QQ) {
          for (OF(QQ[SF[12]] = SF[0], QQ[SF[23]] = 'LNwAQiBFaCeRG9P_o&bH1jtl%4hY=8pIEqvV;T.g<U7sK{dn/+#x!m2(DJ,}y`r6fu5@S":XW[^$Z|M?z~O0)kc]*3>', QQ[SF[22]] = "" + (QQ[SF[2]] || ""), QQ[SF[30]] = QQ[SF[22]].length, QQ[SF[14]] = [], QQ[-SF[66]] = SF[2], QQ[SF[8]] = SF[2], QQ[SF[26]] = -SF[0]), QQ[SF[3]] = SF[2]; QQ[SF[3]] < QQ[SF[30]]; QQ[SF[3]]++)
            if (QQ[-SF[65]] = QQ[SF[23]].indexOf(QQ[SF[22]][QQ[SF[3]]]), QQ[-SF[65]] !== -SF[0])
              if (QQ[SF[26]] < SF[2]) QQ[SF[26]] = QQ[-SF[65]];
              else {
                OF(QQ[SF[26]] += QQ[-SF[65]] * SF[33], QQ[-SF[66]] |= QQ[SF[26]] << QQ[SF[8]], QQ[SF[8]] += (QQ[SF[26]] & SF[34]) > SF[35] ? SF[36] : SF[37]);
                do {
                  OF(QQ[SF[14]].push(QQ[-SF[66]] & SF[11]), QQ[-SF[66]] >>= SF[10], QQ[SF[8]] -= SF[10])
                } while (QQ[SF[8]] > SF[26]);
                QQ[SF[26]] = -SF[0]
              } return QQ[SF[26]] > -SF[0] && QQ[SF[14]].push((QQ[-SF[66]] | QQ[SF[26]] << QQ[SF[8]]) & SF[11]), WF(QQ[SF[14]])
        }

        function vQ(...QQ) {
          return QQ[SF[12]] = SF[0], typeof xF[QQ[SF[2]]] === SF[18] ? xF[QQ[SF[2]]] = kQ(AF[QQ[SF[2]]]) : xF[QQ[SF[2]]]
        }
        if (QQ[vQ(136) + vQ(137)] === SF[67])(0, HQ[SF[40]])("2 " + (wQ ? (new Error)[vQ(SF[68])] : ""));
        else {
          vQ(139), YF(QQ) < SF[57] ? (0, HQ[SF[40]])("3 " + (wQ ? (new Error)[vQ(SF[68])] : "")) : bF()
        }
      } else(0, HQ[SF[40]])("5 " + (wQ ? (new Error)[FQ(135)] : ""))
    }, xQ.l.subscribe("customBindingsChanged", (() => {
      rF()
    }));
    let IF = !1,
      UF = !1;
    const NF = () => IF || UF && rQ.d.isInGame(),
      TF = QQ => {
        NF() && QQ.preventDefault()
      };
    xQ.l.subscribe("displaymodeFullscreenChange", (QQ => {
      KF()
    })), xQ.l.subscribe("pointerLockUpdate", (QQ => {
      IF = QQ, KF(), zF()
    })), xQ.l.subscribe("freeCursorUpdate", (QQ => {
      UF = QQ, KF(), zF()
    }));
    const KF = () => {
        window.removeEventListener("wheel", TF), IQ.j && !(0, DQ.p)() && (IF || UF) && window.addEventListener("wheel", TF, {
          passive: !1
        })
      },
      zF = () => {
        window.removeEventListener("wheel", lF), (IF || UF) && window.addEventListener("wheel", lF, {
          passive: !1
        })
      },
      lF = QQ => {
        !0 === QQ.ctrlKey && NF() && QQ.preventDefault()
      };

    function jF(QQ) {
      xQ.l.GA("QTEMouseState", {
        isDown: QQ
      })
    }

    function aF(QQ) {
      var FQ, wQ, qQ, oQ, DQ, kQ, vQ, mQ;
      const HQ = (0, RQ.d)();
      HQ.XQQ = null !== (FQ = function(QQ, FQ) {
        var wQ, LQ;
        if (!vF) return null;
        const qQ = QQ.bloxd;
        qF ??= qQ.getMetaInfo("Board").rootId;
        const oQ = null !== (wQ = null === FQ || void 0 === FQ ? void 0 : FQ.u9) && void 0 !== wQ ? wQ : null;
        if (!oQ || qQ.getMetaInfo(oQ).rootId !== qF) return null;
        const DQ = null !== (LQ = null === FQ || void 0 === FQ ? void 0 : FQ.position) && void 0 !== LQ ? LQ : null;
        if (qQ.playerCanChangePos(QQ.WK, DQ[0], DQ[1], DQ[2])) return null;
        const kQ = (QQ, FQ, wQ) => {
          const LQ = qQ.blockDataOwner.getBlockData(QQ, FQ, wQ),
            oQ = null === LQ || void 0 === LQ ? void 0 : LQ.persisted.shared.text.split("\n")[0].toLowerCase().trim();
          return UQ.singleLineBoardActions.has(oQ)
        };
        if (kQ(DQ[0], DQ[1], DQ[2])) return null;
        let vQ;
        QQ.wFQ && (vQ = [...QQ.wFQ], QQ.Wy(vQ, vQ));
        const mQ = (vQ ? QQ.camera.yE : 0) + qQ.getBlockReach(QQ.WK);
        return QQ.pickBlock(vQ, QQ.LFQ, mQ, ((FQ, wQ, LQ, oQ) => 0 !== FQ && ("Board" !== qQ.getMetaInfo(FQ).rootName || qQ.playerCanChangePos(QQ.WK, wQ, LQ, oQ) || kQ(wQ, LQ, oQ))))
      }(HQ, HQ.XQQ)) && void 0 !== FQ ? FQ : HQ.XQQ;
      const YQ = null !== (wQ = null === (qQ = HQ.XQQ) || void 0 === qQ ? void 0 : qQ.position) && void 0 !== wQ ? wQ : null,
        AQ = null !== (oQ = HQ.LFQ) && void 0 !== oQ ? oQ : HQ.camera.Py(),
        tQ = RQ.e.localPlayerPickActionHelper.getPickEntityResult(AQ),
        eQ = null !== (DQ = HQ.XQQ) && void 0 !== DQ && DQ.u9 ? (0, lQ.g)(HQ.XQQ.u9) : "Air",
        MQ = QQ === bQ.e.UpFirePrimary || QQ === bQ.e.UpFireSecondary,
        GQ = MQ ? "onPlayerClickUp" : "onPlayerClick",
        pQ = MQ ? QQ === bQ.e.UpFireSecondary : QQ === bQ.e.DownFireSecondary,
        cQ = !MQ && (0, LQ.getWasDoubleClick)();
      xQ.l.GA("mouseState", {
        Ku: QQ,
        isDown: !MQ
      }), (0, LQ.sendColyMessage)(uQ.bh, {
        Ku: QQ,
        zu: cQ,
        gv: YQ,
        Pv: tQ
      }, !0), (0, RQ.c)().client.triggerGameCallback(GQ, HQ.WK, pQ, null !== (kQ = null === YQ || void 0 === YQ ? void 0 : YQ[0]) && void 0 !== kQ ? kQ : null, null !== (vQ = null === YQ || void 0 === YQ ? void 0 : YQ[1]) && void 0 !== vQ ? vQ : null, null !== (mQ = null === YQ || void 0 === YQ ? void 0 : YQ[2]) && void 0 !== mQ ? mQ : null, eQ, tQ)
    }
    window.addEventListener("keydown", (QQ => {
      ["ArrowUp", "ArrowDown"].includes(QQ.key) && QQ.preventDefault()
    })), document.addEventListener("keydown", (QQ => {
      (0, KQ.e)(QQ, (() => {
        const QQ = (0, RQ.d)();
        return (0, TQ.F)(QQ) || !1 !== QQ.mC.canCustomiseChar
      }))
    }))
  },
  38623: (QQ, FQ, wQ) => {
    wQ.d(FQ, {
      c: () => oQ,
      g: () => DQ
    });
    var LQ = wQ(37964);
    let qQ = !1;

    function oQ() {
      return qQ
    }

    function DQ(QQ) {
      qQ = QQ, QQ ? LQ.e.setMultiplierType("emoteWheel", 0) : LQ.e.removeMultiplier("emoteWheel")
    }
  },
  38631: (QQ, FQ, wQ) => {
    function LQ(QQ) {
      return Boolean(QQ.mC.useInventory && QQ.mC.useFullInventory && QQ.bC.XFQ(QQ.WK))
    }
    wQ.d(FQ, {
      c: () => LQ
    })
  },
  38515: (QQ, FQ, wQ) => {
    wQ.d(FQ, {
      e: () => oQ,
      g: () => qQ
    });
    var LQ = wQ(36753);

    function qQ(QQ, FQ) {
      return {
        replayedClipName: QQ,
        replayedClipAgeSeconds: FQ
      }
    }

    function oQ(QQ, FQ, wQ, qQ, oQ) {
      const DQ = function(QQ) {
          if ("object" !== typeof QQ || null === QQ) return null;
          const {
            replayedClipName: FQ,
            replayedClipAgeSeconds: wQ
          } = QQ;
          return "string" === typeof FQ && "number" === typeof wQ ? {
            uQ: FQ,
            HQ: wQ
          } : null
        }(wQ),
        kQ = null === DQ ? wQ : null,
        {
          uQ: vQ = null,
          HQ: mQ = 0
        } = null !== DQ && void 0 !== DQ ? DQ : {};
      QQ.animateEntity(FQ, LQ.h.Custom, kQ, qQ, oQ, vQ, mQ)
    }
  },
  38550: (QQ, FQ, wQ) => {
    wQ.d(FQ, {
      c: () => xQ,
      g: () => uQ,
      h: () => YQ,
      l: () => bQ,
      n: () => AQ,
      r: () => HQ
    });
    var LQ = wQ(38557),
      qQ = wQ(36839),
      oQ = wQ(3561),
      DQ = wQ(1899),
      kQ = wQ(22),
      vQ = wQ(2676);
    const mQ = new LQ.e;

    function uQ() {
      return mQ
    }

    function HQ() {
      mQ.clear()
    }

    function bQ() {
      for (const QQ of mQ.ids()) {
        const FQ = mQ.getName(QQ);
        void 0 !== FQ && DQ.b.delete(FQ)
      }
      HQ(), kQ.l.GA("playerRosterChanged", mQ.ids())
    }

    function YQ(QQ, FQ) {
      var wQ, LQ;
      if (mQ.has(QQ)) return mQ.getSetting(QQ, FQ);
      const qQ = (0, vQ.d)();
      return null === (wQ = qQ.iK[qQ.WK]) || void 0 === wQ || null === (LQ = wQ[QQ]) || void 0 === LQ ? void 0 : LQ[FQ]
    }

    function xQ(QQ) {
      const {
        added: FQ,
        removed: wQ,
        settingChanges: LQ
      } = mQ.apply(QQ);
      for (const {
          playerId: qQ,
          name: oQ
        }
        of wQ) void 0 === oQ || tQ(qQ) || DQ.b.delete(oQ);
      for (const {
          playerId: oQ,
          settings: DQ
        }
        of LQ)
        if (tQ(oQ)) AQ(oQ, DQ);
        else
          for (const QQ in DQ)(0, qQ.i)(oQ, QQ, DQ[QQ]);
      (FQ.length > 0 || wQ.length > 0) && kQ.l.GA("playerRosterChanged", mQ.ids())
    }

    function AQ(QQ) {
      let FQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : mQ.getSettings(QQ);
      if (FQ) {
        (0, qQ.c)(QQ);
        for (const wQ in FQ)(0, qQ.b)(QQ, wQ, FQ[wQ])
      }
    }

    function tQ(QQ) {
      return QQ === (0, vQ.d)().FFQ || (0, vQ.c)().client.hasEntity(QQ)
    }(0, oQ.onGameReset)(HQ)
  },
  37625: (QQ, FQ, wQ) => {
    wQ.d(FQ, {
      d: () => RQ,
      g: () => CQ,
      h: () => iQ,
      k: () => WQ,
      o: () => OQ
    });
    var LQ = wQ(36688),
      qQ = wQ(37631),
      oQ = wQ(334),
      DQ = wQ.n(oQ),
      kQ = wQ(3263);
    const vQ = new LQ.Ox,
      mQ = new LQ.Ox,
      uQ = new LQ.Ox,
      HQ = new LQ.Ox,
      bQ = new LQ.Ox,
      YQ = [0, 0, 0],
      xQ = {
        x: 0,
        y: 0
      },
      AQ = new LQ.Ox(1, 0, 0),
      tQ = new LQ.Ox(0, 1, 0),
      eQ = LQ.Matrix.Identity(),
      MQ = new LQ.Matrix,
      GQ = new LQ.Matrix,
      pQ = new LQ.Ox,
      cQ = new qQ.c(0, 0, 0, 0);

    function CQ(QQ, FQ) {
      var wQ, qQ;
      const oQ = SQ(QQ, FQ);
      if (oQ) {
        const QQ = oQ.x,
          FQ = oQ.y,
          wQ = QQ - 50,
          LQ = FQ - 50;
        return Math.abs(wQ) <= kQ.d && Math.abs(LQ) <= (0, kQ.k)() ? {
          x: QQ,
          y: FQ
        } : rQ(wQ, LQ)
      }
      uQ.vQQ(FQ[0], FQ[1], FQ[2]),
        function(QQ) {
          const FQ = QQ.Zx.ywQ(),
            wQ = FQ ? LQ.Matrix.FromArrayToRef(FQ.worldMatrix, 0, GQ) : QQ.Zx.iN().activeCamera.getWorldMatrix();
          LQ.Ox.TransformNormalToRef(AQ, wQ, HQ), HQ.normalize(), LQ.Ox.TransformNormalToRef(tQ, wQ, bQ), bQ.normalize()
        }(QQ);
      const DQ = LQ.Ox.Dot(uQ, HQ);
      let vQ = -LQ.Ox.Dot(uQ, bQ);
      Math.abs(DQ) < .001 && Math.abs(vQ) < .001 && (vQ = -1);
      const mQ = null !== (wQ = null === (qQ = QQ.Zx.ywQ()) || void 0 === qQ ? void 0 : qQ.projectionMatrix) && void 0 !== wQ ? wQ : QQ.Zx.iN().activeCamera.getProjectionMatrix().m;
      return rQ(DQ * mQ[0], vQ * mQ[5])
    }

    function SQ(QQ, FQ) {
      const wQ = QQ.Zx.iN(),
        qQ = wQ.Wx(),
        oQ = qQ.getRenderWidth(),
        DQ = qQ.getRenderHeight();
      cQ.width = oQ, cQ.height = DQ;
      const kQ = QQ.Zx.ywQ(),
        uQ = kQ ? pQ.vQQ(kQ.eye[0], kQ.eye[1], kQ.eye[2]) : QQ.Zx.camera.globalPosition;
      vQ.vQQ(uQ.x + 10 * FQ[0], uQ.y + 10 * FQ[1], uQ.z + 10 * FQ[2]);
      const HQ = kQ ? LQ.Matrix.FromArrayToRef(kQ.viewProjectionMatrix, 0, MQ) : wQ.getTransformMatrix();
      return LQ.Ox.ProjectToRef(vQ, eQ, HQ, cQ, mQ), mQ.z < 0 || mQ.z > 1 ? null : (xQ.x = mQ.x / oQ * 100, xQ.y = mQ.y / DQ * 100, xQ)
    }

    function iQ(QQ, FQ) {
      return CQ(QQ, sQ(QQ, FQ))
    }

    function WQ(QQ, FQ) {
      const wQ = SQ(QQ, sQ(QQ, FQ));
      return wQ && {
        x: wQ.x,
        y: wQ.y
      }
    }

    function RQ(QQ) {
      var FQ, wQ;
      return 1 / (null !== (FQ = null === (wQ = QQ.Zx.ywQ()) || void 0 === wQ ? void 0 : wQ.projectionMatrix[0]) && void 0 !== FQ ? FQ : QQ.Zx.iN().activeCamera.getProjectionMatrix().m[0])
    }

    function OQ(QQ, FQ, wQ) {
      const LQ = QQ.Zx.ywQ(),
        qQ = LQ ? LQ.worldMatrix : QQ.Zx.iN().activeCamera.getWorldMatrix().m,
        oQ = QQ.Mb;
      for (let DQ = 0; DQ < 3; DQ++) FQ[DQ] = qQ[12 + DQ] + oQ[DQ], wQ[DQ] = qQ[8 + DQ];
      DQ().normalize(wQ, wQ)
    }

    function sQ(QQ, FQ) {
      const wQ = QQ.Mb,
        LQ = QQ.Zx.ywQ(),
        qQ = LQ ? pQ.vQQ(LQ.eye[0], LQ.eye[1], LQ.eye[2]) : QQ.Zx.camera.globalPosition;
      return YQ[0] = FQ[0] - wQ[0] - qQ.x, YQ[1] = FQ[1] - wQ[1] - qQ.y, YQ[2] = FQ[2] - wQ[2] - qQ.z, DQ().normalize(YQ, YQ), YQ
    }

    function rQ(QQ, FQ) {
      return (0, kQ.f)(QQ, FQ, kQ.d, (0, kQ.k)())
    }
  },
  38590: (QQ, FQ, wQ) => {
    wQ.d(FQ, {
      c: () => kQ
    });
    var LQ = wQ(22),
      qQ = wQ(1302),
      oQ = wQ(3337);
    const DQ = "Reconnecting";
    class kQ {
      constructor(QQ) {
        this.hooks = QQ, this.graceMs = 0, this.sessionBased = !1, this.controller = void 0, this.frozen = !1, this.stopped = !1, this.listening = !1, this.ended = !1, this.retryNow = () => {
          "visible" === document.visibilityState && this.controller.retryNow()
        }, this.onPageHide = QQ => {
          QQ.persisted || this.leave()
        }, this.controller = new oQ.e((FQ => QQ.reconnect(FQ)), {
          isSessionLive: () => !this.ended && QQ.isLive(),
          onPhaseChanged: QQ => {
            this.onPhaseChanged(QQ)
          },
          onReconnected: FQ => {
            QQ.onReconnected(FQ)
          },
          onGaveUp: FQ => {
            !this.ended && QQ.isLive() && QQ.onGaveUp(this.sessionBased, FQ)
          }
        })
      }
      onInitialInfo(QQ, FQ) {
        this.graceMs = QQ, this.sessionBased = FQ
      }
      canHoldSeat() {
        return this.graceMs > 0 && !this.ended
      }
      isResuming() {
        return "connected" !== this.controller.phase
      }
      onConnectionLost(QQ) {
        this.ended || this.controller.onConnectionLost(QQ, this.graceMs)
      }
      onResuming() {
        this.ended || this.controller.onResuming()
      }
      onResumed() {
        this.controller.stop()
      }
      leave() {
        const QQ = this.isResuming() && !this.controller.awaitingResumeOnRoom,
          FQ = this.controller.heldToken;
        this.end(), QQ && "" !== FQ && this.hooks.releaseSeat(FQ)
      }
      end() {
        this.ended = !0, this.controller.stop()
      }
      onPhaseChanged(QQ) {
        const FQ = "frozen" === QQ || "resuming" === QQ;
        FQ !== this.stopped && (this.stopped = FQ, this.hooks.freeze(FQ));
        const wQ = "frozen" === QQ || "resuming" === QQ && this.frozen;
        wQ && !this.frozen ? (0, qQ.n)(DQ) : !wQ && this.frozen && (0, qQ.l)(DQ), this.frozen = wQ, this.setListening("connected" !== QQ), LQ.l.GA(oQ.o, wQ ? "frozen" : QQ)
      }
      setListening(QQ) {
        QQ !== this.listening && (this.listening = QQ, QQ ? (window.addEventListener("online", this.retryNow), document.addEventListener("visibilitychange", this.retryNow), window.addEventListener("pagehide", this.onPageHide)) : (window.removeEventListener("online", this.retryNow), document.removeEventListener("visibilitychange", this.retryNow), window.removeEventListener("pagehide", this.onPageHide)))
      }
    }
  },
  38593: (QQ, FQ, wQ) => {
    wQ.d(FQ, {
      b: () => LQ
    });
    class LQ {
      constructor(QQ) {
        let FQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Date.now;
        this.onSilent = QQ, this.now = FQ, this.lastHeardAt = void 0, this.resumedAt = void 0, this.lastCheckAt = void 0, this.wasVisible = "visible" === document.visibilityState, this.interval = void 0, this.check = () => {
          const QQ = this.now(),
            FQ = QQ - this.lastCheckAt <= 2e3;
          this.lastCheckAt = QQ;
          const wQ = "visible" === document.visibilityState;
          !wQ || FQ && this.wasVisible || (this.resumedAt = QQ), this.wasVisible = wQ, wQ && QQ - this.lastHeardAt > 12e3 && QQ - this.resumedAt > 2e3 && this.onSilent()
        }, this.lastHeardAt = FQ(), this.resumedAt = this.lastHeardAt, this.lastCheckAt = this.lastHeardAt, this.interval = setInterval(this.check, 1e3), document.addEventListener("visibilitychange", this.check), window.addEventListener("online", this.check)
      }
      heard() {
        this.lastHeardAt = this.now()
      }
      dispose() {
        clearInterval(this.interval), document.removeEventListener("visibilitychange", this.check), window.removeEventListener("online", this.check)
      }
    }
  },
  38572: (QQ, FQ, wQ) => {
    wQ.d(FQ, {
      b: () => bQ
    });
    var LQ = wQ(201),
      qQ = wQ(334),
      oQ = wQ.n(qQ),
      DQ = wQ(36382),
      kQ = wQ(36388),
      vQ = wQ(2676);
    const mQ = LQ.e.iG * LQ.e.playerEyeToHeightRatio,
      uQ = 250,
      HQ = 1.1,
      bQ = new class {
        constructor() {
          this.entities = new Map, this.playing = new Map, this.msSinceLastScan = 0
        }
        add(QQ, FQ) {
          this.entities.set(QQ, FQ)
        }
        update(QQ, FQ) {
          const wQ = this.entities.get(QQ);
          this.entities.set(QQ, FQ);
          const LQ = this.playing.get(QQ);
          LQ && (wQ && wQ.soundName === FQ.soundName ? (LQ.sound.setRelativeVolume(FQ.volume), LQ.sound.rate(FQ.rate), LQ.sound.setPannerAttr({
            refDistance: FQ.refDistance
          })) : this.stopEntity(QQ))
        }
        remove(QQ) {
          this.stopEntity(QQ), this.entities.delete(QQ)
        }
        fH(QQ) {
          this.msSinceLastScan += QQ, this.msSinceLastScan < uQ || (this.msSinceLastScan = 0, this.scan())
        }
        stopEntity(QQ) {
          const FQ = this.playing.get(QQ);
          FQ && (FQ.sound.stop(), this.playing.delete(QQ))
        }
        startEntity(QQ, FQ, wQ) {
          const LQ = (0, kQ.c)(FQ.soundName);
          if (!LQ) return console.error(`AudioEntityManager: no sound found for "${FQ.soundName}", dropping audio entity ${QQ}`), void this.remove(QQ);
          const qQ = DQ.b.play(LQ, FQ.volume, wQ, FQ.maxHearDist, FQ.refDistance, !0);
          qQ.rate(FQ.rate), this.playing.set(QQ, {
            sound: qQ,
            lastPos: oQ().clone(wQ)
          })
        }
        scan() {
          const QQ = (0, vQ.d)();
          if (!QQ) return;
          const FQ = QQ.bC.Qp(QQ.WK);
          if (FQ)
            for (const [wQ, LQ] of this.entities) {
              if (!QQ.bC.dQQ(wQ, "position")) continue;
              const qQ = QQ.bC.Qp(wQ),
                DQ = oQ().sqrDist(FQ, qQ),
                kQ = this.playing.get(wQ);
              if (kQ) {
                const QQ = LQ.maxHearDist * HQ;
                DQ > QQ * QQ ? this.stopEntity(wQ) : oQ().equals(qQ, kQ.lastPos) || (kQ.sound.setPosition([qQ[0], qQ[1] + mQ, qQ[2]]), oQ().copy(kQ.lastPos, qQ))
              } else DQ <= LQ.maxHearDist * LQ.maxHearDist && this.startEntity(wQ, LQ, qQ)
            }
        }
      }
  },
  38603: (QQ, FQ, wQ) => {
    wQ.d(FQ, {
      d: () => mQ,
      g: () => uQ
    });
    var LQ = wQ(1715),
      qQ = wQ(201),
      oQ = wQ(1694),
      DQ = wQ(1766),
      kQ = wQ(1213),
      vQ = wQ(1147);
    async function mQ(QQ, FQ) {
      return function(QQ) {
        return "object" === typeof QQ && null !== QQ && QQ.code === qQ.d.VpnIp.code
      }(FQ) && function(QQ) {
        return oQ.d.supports("appCheck") && QQ.isLoggedIn() && !QQ.hasTriedAppAttestation()
      }(QQ) && await async function(QQ) {
        try {
          const {
            token: FQ
          } = await (0, DQ.d)(), {
            "3PSIDMCPP": wQ
          } = await (0, vQ.postJsonWithMetricsCookiesAndJsonResponse)(`${kQ.clientSideServerUrls.indexUrl}/index/app-attestation`, {
            appCheckToken: FQ
          }, {
            retries: 0
          }, QQ.getMetricsCookies());
          return QQ.setAppAttestedAuthJwt(wQ), !0
        } catch (FQ) {
          return FQ instanceof LQ.d && "failed" === FQ.code ? (console.warn("The app couldn't get an App Check token:", FQ), QQ.markAppAttestationTried()) : console.error("Failed to attest the app:", FQ), !1
        }
      }(QQ)
    }
    async function uQ(QQ, FQ) {
      try {
        return await FQ()
      } catch (wQ) {
        if (!await mQ(QQ, wQ)) throw wQ
      }
      return FQ()
    }
  },
  38595: (QQ, FQ, wQ) => {
    wQ.d(FQ, {
      c: () => bQ,
      e: () => uQ
    });
    var LQ = wQ(201),
      qQ = wQ(1799),
      oQ = wQ(1804),
      DQ = wQ(8667);
    const kQ = [250, 500, 1e3, 2e3, 1250],
      vQ = 406;

    function mQ(QQ) {
      if ("object" !== typeof QQ || null === QQ) return !1;
      const {
        code: FQ,
        message: wQ
      } = QQ, qQ = LQ.d.duplicateLobbyNameError;
      return (FQ === qQ.code || FQ === vQ) && (wQ === qQ.text || wQ === qQ.text + LQ.l)
    }
    async function uQ(QQ, FQ) {
      let wQ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : qQ.e;
      for (let qQ = 0;; qQ++) {
        let DQ;
        (0, oQ.n)(FQ);
        try {
          return await QQ()
        } catch (LQ) {
          if (DQ = kQ[qQ], void 0 === DQ || !mQ(LQ)) throw LQ
        }
        await wQ(DQ, FQ)
      }
    }
    const HQ = new Set([LQ.d.duplicateLobbyNameError.code, LQ.d.lobbyCantBeCreated.code, LQ.d.roomDisposedEarlyError.code, LQ.d.roomDisposedLateError.code, LQ.d.serverRoomLimitReached.code]);

    function bQ(QQ) {
      if (mQ(QQ)) return !0;
      const FQ = (0, DQ.i)(QQ);
      return "number" === typeof FQ && HQ.has(FQ)
    }
  },
  38536: (QQ, FQ, wQ) => {
    wQ.d(FQ, {
      e: () => oQ,
      g: () => qQ
    });
    var LQ = wQ(22);

    function qQ(QQ) {
      return "refetchCode" === QQ || "devDownloadJson" === QQ || QQ.startsWith("Plugin")
    }

    function oQ(QQ, FQ) {
      "refetchCode" !== QQ ? "Plugin|MobAiPlugin|ShowPetUi" !== QQ ? Promise.all([wQ.e(106), wQ.e(107), wQ.e(102), wQ.e(104), wQ.e(211)]).then((() => wQ(41143))).then((wQ => {
        let {
          runClientGameMessage: LQ
        } = wQ;
        LQ(QQ, FQ)
      })).catch((FQ => {
        console.error(`Game message ${QQ} failed`, FQ)
      })) : LQ.l.GA("showPetUi", FQ) : LQ.l.GA("refetchCode")
    }
  },
  8667: (QQ, FQ, wQ) => {
    wQ.d(FQ, {
      e: () => oQ,
      i: () => DQ,
      l: () => kQ,
      m: () => mQ,
      q: () => vQ
    });
    var LQ = wQ(201),
      qQ = wQ(4475);

    function oQ(QQ) {
      return DQ(QQ) === LQ.d.gameOrPluginOnPlayerAuthRejected.code
    }

    function DQ(QQ) {
      return "object" === typeof QQ && null !== QQ ? QQ.code : void 0
    }

    function kQ(QQ) {
      var FQ;
      return null !== (FQ = Object.keys(qQ.c).find((FQ => qQ.c[FQ] === QQ))) && void 0 !== FQ ? FQ : null
    }

    function vQ(QQ) {
      return "notWhitelisted" === QQ ? "customLobby:cantJoinNotWhitelistedTitle" : "customLobby:cantJoinWorld"
    }
    const mQ = {
      private: "customLobby:cantJoinPrivate",
      notWhitelisted: "customLobby:cantJoinNotWhitelisted",
      banned: "customLobby:cantJoinBanned",
      adminLocked: "customLobby:cantJoinAdminLocked"
    }
  },
  38607: (QQ, FQ, wQ) => {
    wQ.d(FQ, {
      c: () => LQ,
      d: () => qQ
    });
    const LQ = 45e3;
    class qQ extends Error {
      constructor() {
        super("The game server didn't answer in time"), this.name = "SeatRequestTimedOut"
      }
    }
  },
  38520: (QQ, FQ, wQ) => {
    wQ.d(FQ, {
      d: () => uQ
    });
    var LQ = wQ(1237),
      qQ = wQ(1342),
      oQ = wQ(17),
      DQ = wQ(1326),
      kQ = wQ(1339),
      vQ = wQ(1503),
      mQ = wQ(36110);

    function uQ(QQ) {
      let {
        qQ: FQ,
        oQ: wQ
      } = QQ;
      const uQ = null !== FQ && void 0 !== FQ ? FQ : (0, kQ.c)().gameNameWithVariation;
      (0, LQ.O)(uQ) && ((0, mQ.j)(), (0, DQ.fb)((() => {
        console.log("Received matchmaking order from game server to game", FQ), (0, oQ.k)("inGameReplay"), (0, vQ.navigatePreserveSearch)((0, qQ.e)(uQ, null !== wQ && void 0 !== wQ ? wQ : void 0))
      }), "video_start"))
    }
  },
  38510: (QQ, FQ, wQ) => {
    wQ.d(FQ, {
      c: () => vQ,
      f: () => DQ,
      h: () => kQ,
      i: () => mQ
    });
    var LQ = wQ(22),
      qQ = wQ(1362);
    const oQ = new Map;

    function DQ(QQ, FQ) {
      LQ.l.GA("newUiRequest", {
        id: QQ,
        clientParameters: FQ
      }, !0)
    }

    function kQ(QQ) {
      LQ.l.GA("removeUiRequest", QQ, !0);
      const FQ = oQ.get(QQ);
      FQ && (FQ.tearDownNotification(), oQ.delete(QQ))
    }

    function vQ() {
      LQ.l.GA("clearUiRequests");
      for (const QQ of oQ.values()) QQ.tearDownNotification();
      oQ.clear()
    }

    function mQ(QQ, FQ, wQ) {
      const LQ = qQ.NotificationProvider.showPromptPopup({
        title: FQ,
        confirmText: "general:yes",
        cancelText: "general:no",
        unlockPointerKey: "uiRequestPopup"
      });
      oQ.set(QQ, LQ), LQ.getResult().then((FQ => {
        oQ.delete(QQ), "notificationTornDown" !== FQ && wQ(FQ)
      }))
    }
  },
  38542: (QQ, FQ, wQ) => {
    wQ.d(FQ, {
      b: () => kQ,
      e: () => vQ,
      h: () => mQ
    });
    var LQ = wQ(1237),
      qQ = wQ(1038),
      oQ = wQ(36483),
      DQ = wQ(22);

    function kQ(QQ) {
      let {
        lobbyName: FQ,
        gameNameWithVariation: wQ
      } = QQ;
      return !(0, LQ.S)(FQ) || null !== wQ && (wQ.startsWith("testGym") || (0, qQ.f)(wQ))
    }

    function vQ(QQ) {
      return QQ.RF === oQ.d.Leave || QQ.RF === oQ.d.Cursor
    }

    function mQ(QQ) {
      DQ.l.GA("codeCollab", {
        type: QQ.RF,
        docKey: QQ.OF,
        version: QQ.sF,
        editorCount: QQ.rF,
        peers: QQ.IF,
        updates: QQ.UF,
        playerId: QQ.NF,
        playerName: QQ.TF,
        colour: QQ.KF,
        anchor: QQ.zF,
        head: QQ.lF,
        existingCursors: QQ.jF,
        files: QQ.aF,
        engineSettings: QQ.XF
      })
    }
  },
  38557: (QQ, FQ, wQ) => {
    wQ.d(FQ, {
      e: () => LQ
    });
    class LQ {
      constructor() {
        this.members = new Map
      }
      apply(QQ) {
        const FQ = {
          added: [],
          removed: [],
          settingChanges: []
        };
        for (const LQ of QQ.Dw) {
          let QQ = this.members.get(LQ.kw);
          if (QQ || (QQ = {
              name: null,
              settings: {}
            }, this.members.set(LQ.kw, QQ), FQ.added.push(LQ.kw)), null !== LQ.mw && (QQ.name = LQ.mw), null !== LQ.uw || LQ.Hw.length > 0) {
            const wQ = null === LQ.uw ? {} : JSON.parse(LQ.uw);
            Object.assign(QQ.settings, wQ);
            for (const FQ of LQ.Hw) delete QQ.settings[FQ], wQ[FQ] = void 0;
            FQ.settingChanges.push({
              playerId: LQ.kw,
              settings: wQ
            })
          }
        }
        for (const LQ of QQ.bw) {
          const QQ = this.members.get(LQ);
          var wQ;
          if (QQ) this.members.delete(LQ), FQ.removed.push({
            playerId: LQ,
            name: null !== (wQ = QQ.name) && void 0 !== wQ ? wQ : void 0
          })
        }
        return FQ
      }
      has(QQ) {
        return this.members.has(QQ)
      }
      ids() {
        return [...this.members.keys()]
      }
      getName(QQ) {
        var FQ, wQ;
        return null !== (FQ = null === (wQ = this.members.get(QQ)) || void 0 === wQ ? void 0 : wQ.name) && void 0 !== FQ ? FQ : void 0
      }
      getSettings(QQ) {
        var FQ;
        return null === (FQ = this.members.get(QQ)) || void 0 === FQ ? void 0 : FQ.settings
      }
      getSetting(QQ, FQ) {
        var wQ;
        return null === (wQ = this.members.get(QQ)) || void 0 === wQ ? void 0 : wQ.settings[FQ]
      }
      clear() {
        this.members.clear()
      }
    }
  },
  38585: (QQ, FQ, wQ) => {
    wQ.d(FQ, {
      c: () => LQ,
      f: () => qQ
    });
    const LQ = ["description", "label"];

    function qQ(QQ) {
      const FQ = QQ.type;
      return {
        type: FQ,
        params: QQ[FQ]
      }
    }
  }
};
Object.freeze(modules);
for (const QQ in modules) Object.freeze(modules[QQ]);