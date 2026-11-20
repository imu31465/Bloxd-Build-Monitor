export const id = 155;
export const ids = [155];
export const modules = {
  38631: (UU, RU, gU) => {
    gU.d(RU, {
      b: () => EU,
      f: () => PU
    });
    var tU = gU(24);
    let pU = !1;

    function EU() {
      return pU
    }

    function PU(UU) {
      pU !== UU && (pU = UU, tU.p.yh("replayViewer|videoExportChanged"))
    }
  },
  38524: (UU, RU, gU) => {
    gU.d(RU, {
      e: () => EU
    });
    var tU = gU(24),
      pU = gU(1821);

    function EU(UU) {
      let {
        taskId: RU,
        progress: gU
      } = UU;
      const tU = pU.b.get("_tasks");
      null !== tU && void 0 !== tU && tU[RU] && pU.b.apply({
        _tasks: {
          ...tU,
          [RU]: {
            ...tU[RU],
            progress: gU
          }
        }
      })
    }
    tU.p.subscribe("clientTaskProgress", (UU => {
      EU(UU)
    }))
  },
  38654: (UU, RU, gU) => {
    gU.d(RU, {
      e: () => hU,
      i: () => QU,
      m: () => CU
    });
    var tU = gU(2624);
    const pU = 0,
      EU = 2,
      PU = 3,
      TU = 4;
    class qU {
      constructor(UU, RU) {
        this.width = UU, this.hG = RU, this.data = void 0, this.next = 0, this.size = 0, this.data = new Float64Array(UU * RU)
      }
      push(UU) {
        let RU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        const gU = this.data.subarray(this.next * this.width, (this.next + 1) * this.width);
        for (let tU = 0; tU < this.width; tU++) gU[tU] = UU[RU + tU];
        return this.next = (this.next + 1) % this.hG, this.size = Math.min(this.size + 1, this.hG), gU
      }
      lines() {
        const UU = [],
          RU = (this.next - this.size + this.hG) % this.hG;
        for (let gU = 0; gU < this.size; gU++) {
          const tU = (RU + gU) % this.hG * this.width;
          UU.push(Array.from(this.data.subarray(tU, tU + this.width)).join(","))
        }
        return UU
      }
    }

    function KU(UU) {
      return Number.isFinite(UU) ? String(Math.round(10 * UU) / 10) : String(UU)
    }

    function cU(UU) {
      return Number.isFinite(UU) ? UU.toFixed(1) : String(UU)
    }
    class GU {
      constructor() {
        this.frames = 0, this.looked = 0, this.idle = 0, this.YH = 0, this.pastLimit = 0, this.lockSkips = 0, this.ih = 0, this.lost = 0, this.dropped = 0, this.longFrames = 0, this.dtMin = 1 / 0, this.dtMax = 0, this.dtSum = 0, this.raw = [0, 0], this.turned = [0, 0], this.peakRate = 0, this.events = 0, this.eventMax = 0, this.bigEvents = 0, this.outliers = 0, this.eventLines = 0, this.suppressed = 0
      }
    }
    class jU {
      constructor() {
        var UU = this;
        this.tally = new GU, this.records = new qU(10, 3600), this.events = new qU(4, 12e3), this.event = new Float64Array(4), this.take = null, this.client = "js", this.started = !1, this.record = function(RU) {
          let gU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
          const [tU, qU, GU, jU, uU, CU, hU, QU, eU, WU] = UU.records.push(RU, gU), fU = UU.tally;
          switch (fU.frames++, hU) {
            case pU:
              return void fU.idle++;
            case TU:
              return void fU.ih++;
            case PU:
              return fU.lockSkips++, void(0 === GU && 0 === jU || UU.outlier(`lock skip dropped raw (${KU(GU)}, ${KU(jU)}) at ${cU(tU)} ms`))
          }
          fU.looked++, Number.isFinite(qU) && (fU.dtMin = Math.min(fU.dtMin, qU), fU.dtMax = Math.max(fU.dtMax, qU), fU.dtSum += qU, qU > 0 && (fU.peakRate = Math.max(fU.peakRate, Math.hypot(uU, CU) / qU))), fU.raw[0] += GU, fU.raw[1] += jU, fU.turned[0] += uU, fU.turned[1] += CU;
          const xU = Math.abs(GU) > WU || Math.abs(jU) > WU,
            mU = `raw (${KU(GU)}, ${KU(jU)}) over ${cU(qU)} ms, limit ${KU(WU)}, filter v (${QU.toFixed(3)}, ${eU.toFixed(3)}) px/ms, at ${cU(tU)} ms`;
          hU === EU ? (fU.YH++, UU.outlier(`spike put right: ${mU} -> turned (${KU(uU)}, ${KU(CU)})`)) : xU ? (fU.pastLimit++, UU.outlier(`kept past limit: ${mU}`)) : qU > 50 && (fU.longFrames++, UU.outlier(`long frame: ${mU}, turned in full`))
        }, this.onMouseMove = UU => {
          const RU = this.tally,
            {
              movementX: gU,
              movementY: tU
            } = UU;
          RU.events++;
          const pU = Math.max(Math.abs(gU), Math.abs(tU));
          RU.eventMax = Math.max(RU.eventMax, pU);
          const EU = null !== document.pointerLockElement,
            PU = this.event;
          PU[0] = UU.timeStamp, PU[1] = gU, PU[2] = tU, PU[3] = EU ? 1 : 0, this.events.push(PU), pU >= 200 && (RU.bigEvents++, this.eventOutlier(`big mousemove (${gU}, ${tU}) at ${cU(UU.timeStamp)} ms, lock ${EU?"WT":"free"}`))
        }, this.onLockChange = () => {
          const UU = document.pointerLockElement;
          (0, tU.h)("look", `pointer lock ${UU?`gained (${UU.tagName.toLowerCase()})`:"lost"} at ${cU(performance.now())} ms`)
        }, this.onLockError = () => {
          (0, tU.h)("look", `pointer lock request failed at ${cU(performance.now())} ms`)
        }, this.onVisibility = () => {
          (0, tU.h)("look", `page ${document.visibilityState} at ${cU(performance.now())} ms`)
        }, this.flush = () => {
          this.takeRecords();
          const UU = this.tally;
          if (this.tally = new GU, 0 === UU.events && 0 === UU.raw[0] && 0 === UU.raw[1] && 0 === UU.lockSkips && 0 === UU.YH && 0 === UU.dropped) return;
          const RU = UU.looked > 0 ? UU.dtSum / UU.looked : NaN,
            gU = [`${UU.frames} frames (${UU.looked} looked, ${UU.idle} idle${"wasm"===this.client?`, ${UU.ih} carried`:""})`, `dt avg ${cU(RU)} min ${cU(UU.dtMin)} max ${cU(UU.dtMax)}, ${UU.longFrames} long`, `${UU.events} mousemoves (max ${KU(UU.eventMax)} px, ${UU.bigEvents} big)`, `raw (${KU(UU.raw[0])}, ${KU(UU.raw[1])}) turned (${KU(UU.turned[0])}, ${KU(UU.turned[1])})`, `peak ${UU.peakRate.toFixed(2)} px/ms`, `put right ${UU.YH}, past limit ${UU.pastLimit}, lock skips ${UU.lockSkips}`, "lock " + (document.pointerLockElement ? "WT" : "free")];
          UU.dropped > 0 && gU.push(`${UU.dropped} doubled spike copies dropped`), UU.lost > 0 && gU.push(`${UU.lost} records lost`), UU.suppressed > 0 && gU.push(`${UU.suppressed} outlier lines not shown`), (0, tU.h)("look", `1s: ${gU.join("; ")}`)
        }, this.dump = () => [`look records (${this.client}): nowMs,dtMs,rawX,rawY,turnedX,turnedY,outcome,vX,vY,limit`, ...this.records.lines(), "mousemove events: timeStamp,movementX,movementY,locked", ...this.events.lines()].join("\n")
      }
      start(UU, RU) {
        this.client = UU, this.take = RU;
        const {
          screen: gU
        } = window;
        (0, tU.h)("look", `start: ${UU} client, dpr ${window.devicePixelRatio}, screen ${gU.width}x${gU.height}, pointer lock ${document.pointerLockElement?"WT":"free"}`), this.started || (this.started = !0, window.addEventListener("mousemove", this.onMouseMove, {
          capture: !0,
          passive: !0
        }), document.addEventListener("pointerlockchange", this.onLockChange), document.addEventListener("pointerlockerror", this.onLockError), document.addEventListener("visibilitychange", this.onVisibility), setInterval(this.flush, 1e3), (0, tU.g)("look", this.dump))
      }
      outlier(UU) {
        const RU = this.tally;
        RU.outliers >= 20 ? RU.suppressed++ : (RU.outliers++, (0, tU.h)("look", UU))
      }
      eventOutlier(UU) {
        const RU = this.tally;
        RU.eventLines >= 10 ? RU.suppressed++ : (RU.eventLines++, (0, tU.h)("look", UU))
      }
      takeRecords() {
        var UU;
        const RU = null === (UU = this.take) || void 0 === UU ? void 0 : UU.call(this);
        if (RU && RU.length >= 2) {
          this.tally.lost += RU[0], this.tally.dropped += RU[1];
          for (let UU = 2; UU + 10 <= RU.length; UU += 10) this.record(RU, UU)
        }
      }
      droppedCopy() {
        this.tally.dropped++
      }
      endTake() {
        this.takeRecords(), this.take = null
      }
    }
    let uU = null;

    function CU(UU) {
      let RU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
      return uU ??= new jU, uU.start(UU, RU), uU.record
    }

    function hU() {
      var UU;
      null === (UU = uU) || void 0 === UU || UU.endTake()
    }

    function QU() {
      var UU;
      null === (UU = uU) || void 0 === UU || UU.droppedCopy()
    }
  },
  38517: (UU, RU, gU) => {
    gU.d(RU, {
      c: () => kR,
      f: () => sR,
      g: () => yR
    });
    var tU = gU(3349),
      pU = gU(165),
      EU = gU(189),
      PU = gU(587),
      TU = gU(34),
      qU = gU(2551),
      KU = gU(3420),
      cU = gU(3398),
      GU = gU(1217);
    const jU = new WeakMap;
    class uU {
      constructor(UU, RU) {
        let gU = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {
          pKU: !0
        };
        this.callbacks = RU, this.options = gU, this.ORU = void 0, this.sessionId = void 0, this.eJ = [], this.EKU = !1, this.pC = !1, this.PKU = void 0, this.QJ = 0, this.OtU = 0, this.TKU = (UU, RU) => {
          if (this.pC) return;
          const gU = Number(UU);
          this.EKU ? this.qKU(gU, RU) : this.eJ.push({
            id: gU,
            payload: RU
          })
        }, this.dispose = () => {
          this.pC || (this.pC = !0, jU.delete(this), this.eJ.length = 0, this.PKU())
        }, this.ORU = UU, this.sessionId = UU.sessionId, jU.set(this, []), this.PKU = this.KKU()
      }
      cKU(UU) {
        this.PKU(), this.ORU = UU, this.sessionId = UU.sessionId, this.QJ = 0, this.OtU = 0, this.PKU = this.KKU()
      }
      get KJ() {
        return this.OtU
      }
      KKU() {
        const UU = this.ORU.Tm("*", this.TKU);
        return this.options.pKU && this.ORU.qm(this.dispose), UU
      }
      qKU(UU, RU) {
        try {
          (0, KU.vc)(UU) && (RU = (0, KU.e)(UU, cU.tC.from(RU)));
          const gU = jU.get(this)[UU];
          if ("function" !== typeof gU) {
            if (this.callbacks.GKU) return void this.callbacks.GKU(UU, RU);
            throw new Error(`No onMessage handler registered for message id ${UU}`)
          }
          gU(RU)
        } catch (gU) {
          this.callbacks.jKU(`Error in onMessage ${UU} with payload ${JSON.stringify(RU)}`, gU)
        } finally {
          this.QJ++
        }
      }
      uKU() {
        for (const {
            id: UU,
            payload: RU
          }
          of this.eJ) {
          if (this.pC) break;
          this.qKU(UU, RU)
        }
        this.eJ.length = 0
      }
      lRU() {
        return this.pC
      }
      CKU() {
        if (this.EKU || this.pC) throw new Error("Trying to getOnMessageRegistrationHandler after registration finished");
        return {
          Tm: (UU, RU) => {
            if (this.EKU || this.pC) throw new Error("Trying to call onMessage after registration finished");
            this.Tm(UU, RU)
          },
          finishRegistration: () => {
            if (this.pC) throw new Error("Cannot finish message registration after disposal");
            this.EKU = !0, this.uKU()
          }
        }
      }
      Tm(UU, RU) {
        var gU, tU;
        null === (gU = (tU = this.callbacks).hKU) || void 0 === gU || gU.call(tU);
        const pU = jU.get(this);
        for (; UU > pU.length;) pU[pU.length] = null;
        pU[UU] = RU
      }
      send(UU, RU) {
        this.QKU(), (0, GU.E)(RU) ? this.ORU.aJ(UU, RU) : this.ORU.send(UU, RU)
      }
      QKU() {
        var UU, RU;
        (this.OtU++, 5 === CU++) && (null === (UU = (RU = this.callbacks).hKU) || void 0 === UU || UU.call(RU), CU = 0)
      }
      fW() {
        this.dispose(), this.ORU.fW()
      }
      leave() {
        this.dispose(), this.ORU.leave()
      }
    }
    let CU = 0;
    var hU = gU(3367);
    class QU extends uU {
      constructor(UU) {
        super(UU, {
          hKU: () => {
            (0, TU.p)(!0) && (0, tU.qJ)()
          },
          jKU: (UU, RU) => {
            var gU;
            null === (gU = (0, qU.g)()) || void 0 === gU || gU.Th(UU, RU)
          }
        }, {
          pKU: !1
        }), (0, hU.f)(UU)
      }
      xJ(UU, RU) {
        return !!(0, hU.h)((0, hU.b)(), this.ORU, UU, RU) && (this.QKU(), !0)
      }
      cKU(UU) {
        this.eKU(), super.cKU(UU), (0, hU.f)(UU)
      }
      fW() {
        super.fW(), this.eKU()
      }
      eKU() {
        this.ORU.oW.zu.uZ = void 0
      }
    }
    var eU = gU(24),
      WU = gU(1821),
      fU = gU(1637),
      xU = gU(36027);

    function mU(UU, RU, gU, tU, pU) {
      let EU = arguments.length > 5 && void 0 !== arguments[5] && arguments[5];
      if (!UU.Im.DUU(UU.AY)) return console.log("Got resync inven but don't have inven component"), void RU.acknowledge(tU);
      EU && console.error("Had to sync inven"), RU.n_(tU, pU) && gU.yh("chestToggleFromServer", !1, !0), gU.yh("syncedInvenFromServer")
    }
    var IU = gU(38524),
      JU = gU(38528),
      wU = gU(37581),
      nU = gU(37335),
      bU = gU(581),
      oU = gU(37971);

    function ZU(UU, RU, gU) {
      const tU = function(UU) {
          const RU = new Int32Array(UU.length * oU.d);
          return UU.forEach(((UU, gU) => {
            const tU = gU * oU.d;
            if (4 === UU.length) {
              const [gU, pU, EU, PU] = UU;
              RU.set([gU, pU, EU, gU, pU, EU, PU], tU)
            } else {
              const [gU, pU, EU, PU, TU, qU, KU] = UU;
              RU.set([gU, EU, TU, pU, PU, qU, KU], tU)
            }
          })), RU
        }(gU),
        pU = (RU, gU, tU, pU) => {
          UU.setBlockNoMulti(RU, gU, tU, pU, !0)
        };
      UU.client.gameRecorder.isCapturing() ? (0, oU.mb)(tU, (0, oU.lb)(tU), pU) : UU.LG.FG.uH(tU, {
        mH: pU,
        isHookId: RU => UU.blockChangeHasHooks(RU),
        watched: () => function(UU, RU, gU) {
          const tU = [],
            pU = (UU, RU, gU) => {
              tU.push(UU, RU, gU)
            },
            EU = new Set;
          for (let PU = 0; PU < gU.length; PU += oU.d)
            for (let RU = (0, bU.K)(gU[PU]); RU <= (0, bU.K)(gU[PU + 3]); RU++)
              for (let tU = (0, bU.K)(gU[PU + 1]); tU <= (0, bU.K)(gU[PU + 4]); tU++)
                for (let TU = (0, bU.K)(gU[PU + 2]); TU <= (0, bU.K)(gU[PU + 5]); TU++) {
                  const gU = `${RU}|${tU}|${TU}`;
                  EU.has(gU) || (EU.add(gU), UU.blockDataOwner.forEachDataCell(RU, tU, TU, pU))
                }
          return RU.forEachCell(pU), Int32Array.from(tU)
        }(UU, RU, tU)
      }), UU.LG.RUU()
    }
    var aU = gU(36658),
      YU = gU(38534),
      BU = gU(38540),
      VU = gU(994),
      rU = gU(1823);
    var XU = gU(4176);

    function vU(UU) {
      const RU = UU.FG;
      let gU = 0,
        pU = -1,
        PU = -1 / 0,
        TU = null,
        qU = !0;
      const cU = () => {
        if (++gU % 10 !== 0) return;
        const cU = (0, tU.getLastReceivedPacketId)();
        if (cU <= pU) return;
        const [GU, jU, uU] = UU.Im.Hx(UU.AY), CU = ! function(UU) {
          var RU;
          let gU = null === (RU = UU.Im.rRU(UU.AY)) || void 0 === RU ? void 0 : RU.Nu;
          if (void 0 === gU) return !1;
          const tU = new Set;
          for (; void 0 !== gU && !tU.has(gU);) {
            var pU;
            tU.add(gU);
            const RU = UU.Im.getState(gU, "smoothToServerPos"),
              EU = Array.isArray(RU) ? null : null === RU || void 0 === RU ? void 0 : RU.serverPosition;
            if (EU) {
              const RU = UU.Im.Hx(gU);
              if (Math.abs(RU[0] - EU[0]) > 10 || Math.abs(RU[1] - EU[1]) > 10 || Math.abs(RU[2] - EU[2]) > 10) return !0
            }
            gU = null === (pU = UU.Im.rRU(gU)) || void 0 === pU ? void 0 : pU.Nu
          }
          return !1
        }(UU) && function(UU, RU, gU, tU) {
          const pU = EU.e.jC;
          for (let EU = 0; EU < UU.length; EU++) {
            const PU = UU[EU];
            if (!(0, XU.h)(RU, gU, tU, PU[0] * pU, PU[1] * pU, PU[2] * pU)) return !1
          }
          return !0
        }(RU.sh.EC, GU, jU, uU), hU = null === TU || Math.abs(GU - TU[0]) > 8 || Math.abs(jU - TU[1]) > 8 || Math.abs(uU - TU[2]) > 8, QU = !qU || hU || performance.now() - PU >= 1e4;
        qU = CU, CU && QU && (pU = cU, PU = performance.now(), TU = [GU, jU, uU], (0, tU.sendColyMessage)(KU.yg, {
          KK: cU
        }))
      };
      return UU.on("HG", cU), () => {
        UU.off("HG", cU)
      }
    }
    var dU = gU(36313),
      HU = gU(316),
      SU = gU.n(HU),
      sU = gU(6152),
      yU = gU(37609),
      kU = gU(37314),
      FU = gU(37297),
      iU = gU(4187),
      AU = gU(37645),
      zU = gU(37453),
      MU = gU(36907),
      DU = gU(37186),
      LU = gU(38544),
      NU = gU(36307),
      lU = gU(36311),
      OU = gU(38546),
      UR = gU(38549),
      RR = gU(3322),
      gR = gU(1475),
      tR = gU(2545),
      pR = gU(2644),
      ER = gU(37814),
      PR = gU(36581),
      TR = gU(4438),
      qR = gU(38590),
      KR = gU(37635),
      cR = gU(3924),
      GR = gU(36651),
      jR = gU(36724),
      uR = gU(37649),
      CR = gU(38558),
      hR = gU(38565),
      QR = gU(36898);
    class eR {
      constructor(UU, RU, gU, tU) {
        this.gameNameWithVariation = UU, this.LG = gU, this.connectionResume = tU, this.stateReplicationHandler = void 0, this.stopChunkReports = () => {}, this.replayResume = null, this.stateReplicationHandler = new hR.b(RU, this.LG)
      }
      setupStateReplicationHandlers() {
        this.stateReplicationHandler.setup(), (0, tU.onGameResetOnce)((() => {
          this.stateReplicationHandler.dispose()
        }))
      }
      cKU(UU) {
        this.stateReplicationHandler.dispose(), this.stateReplicationHandler = new hR.b(UU, this.LG), this.stateReplicationHandler.setup()
      }
      clearBlockRules() {
        const UU = this.LG.FG;
        UU.kRU = new Set, UU.ARU = new Set, UU.FRU = new Set, UU.zRU = new Set, UU.iRU = [], UU.MRU = [], UU.Vr = new Set, UU.vE = [], UU.Hr = []
      }
      clearUiRequestsAndQTEs() {
        TR.c.reset(), (0, JU.d)()
      }
      startChunkReports() {
        const UU = function(UU) {
            let RU = null,
              gU = -1 / 0,
              pU = null;
            const EU = () => {
                pU = null;
                const EU = Math.ceil(UU.yJ[0]),
                  PU = Math.ceil(UU.yJ[1]);
                RU && RU[0] === EU && RU[1] === PU || (RU = [EU, PU], gU = performance.now(), (0, tU.sendColyMessage)(KU.wg, {
                  pP: EU,
                  EP: PU
                }))
              },
              PU = () => {
                null === pU && (pU = setTimeout(EU, Math.max(0, gU + 250 - performance.now())))
              };
            return EU(), UU.on("addRemoveDistanceChanged", PU), () => {
              UU.off("addRemoveDistanceChanged", PU), null !== pU && (clearTimeout(pU), pU = null)
            }
          }(this.LG.FG),
          RU = vU(this.LG);
        this.stopChunkReports = () => {
          UU(), RU()
        }
      }
      restartChunkStreaming() {
        (0, DU.j)(this.LG, (0, qU.c)().recentChunkEdits.chunksEditedSince(this.connectionResume.getDroppedAt() - LU.d)), this.startChunkReports()
      }
      setupOnMessageListeners(UU, RU) {
        const gU = this.LG,
          pU = this.gameNameWithVariation;
        UU.Tm(KU.Cc, (UU => {
          let {
            Fg: RU,
            ig: tU,
            Ag: pU,
            zg: EU,
            Mg: PU,
            Dg: TU,
            Lg: qU,
            Ng: KU,
            lg: cU
          } = UU;
          if (!gU.Im.cUU(RU, "itemState")) return void(0, kU.j)(gU, RU, [PU, TU, qU], tU, {
            amount: pU,
            attributes: JSON.parse(EU),
            Ng: KU,
            size: cU
          });
          const GU = gU.Im.getState(RU, "itemState");
          GU.amount = pU, GU.Ng = KU, GU.creationTime = Date.now(), (0, FU.setServerPosition)(gU.Im.getState(RU, "smoothToServerPos"), PU, TU, qU)
        })), UU.Tm(KU.qb, (UU => {
          (0, aU.d)(gU).setCantPickUp(UU, !0), gU.Im.cUU(UU, "itemState") && (gU.Im.getState(UU, "itemState").Ng = !0)
        })), UU.Tm(KU.fe, (UU => {
          (0, aU.d)(gU).setCantPickUp(UU, !1), gU.Im.cUU(UU, "itemState") && (gU.Im.getState(UU, "itemState").Ng = !1)
        })), UU.Tm(KU.Zc, (UU => {
          WU.b.applyNewClientOptions(UU)
        })), UU.Tm(KU.$c, (UU => {
          let {
            eId: RU,
            settings: tU
          } = UU;
          (0, jR.f)(RU);
          for (const gU in tU)(0, jR.e)(RU, gU, tU[gU]);
          if ("canSee" in tU && gU.Im.cUU(RU, "hidingMeshManager")) {
            const UU = gU.Im.getState(RU, "hidingMeshManager");
            UU.canSee = (0, uR.b)("canSee", tU.canSee), UU._forceUpdate = !0
          }
        })), UU.Tm(KU.ef, (UU => {
          let {
            Ug: RU,
            Rg: pU,
            gg: EU,
            tg: PU
          } = UU;
          const TU = [pU, EU, PU];
          gU.Im.setPosition(gU.AY, TU), (0, tU.sendColyMessage)(KU.Tg, {
            Tc: RU,
            qc: iU.e
          }), eU.p.yh("localPlayerTeleported", {
            pos: TU,
            isCorrection: !1
          })
        })), UU.Tm(KU.kd, (UU => {
          let {
            Gp: RU,
            jp: gU,
            Cp: tU,
            hp: pU
          } = UU;
          this.stateReplicationHandler.setUpIfQueued(RU);
          const EU = [gU, tU, pU];
          eU.p.yh(`otherPlayerTeleported|${RU}`, {
            pos: EU
          })
        })), UU.Tm(KU.Ed, (UU => {
          let {
            Hp: RU,
            Sp: pU,
            sp: EU,
            yp: PU,
            kp: TU,
            Fp: qU,
            ip: cU,
            zp: GU,
            Ap: jU,
            Lp: uU
          } = UU;
          const CU = [pU, EU, PU];
          gU.Im.setPosition(gU.AY, CU);
          const hU = gU.Im.bUU(gU.AY),
            QU = gU.Im.yX(gU.AY);
          SU().set(QU.vV, 0, 0, 0), SU().set(QU.HV, 0, 0, 0), SU().set(QU.Fh, TU, qU, cU), QU.sV(), hU._flying = null !== uU, uU ? (hU.flyAccel.Np = uU.Np, hU.flyAccel.lp = uU.lp) : hU.flyAccel.reset(), GU && hU.movementType === sU.r.GLIDING && (hU.Mp = GU.Mp, SU().copy(hU.Dp, GU.Dp)), (0, tU.sendColyMessage)(KU.Tg, {
            Tc: RU,
            qc: iU.e
          }), eU.p.yh("localPlayerTeleported", {
            pos: CU,
            isCorrection: !0
          })
        }));

        function EU() {
          return gU.Im.LUU(gU.AY)
        }
        UU.Tm(KU.Ab, (UU => {
          let {
            chatMsgId: RU,
            content: gU,
            chatterEId: tU
          } = UU;
          eU.p.yh("chat", {
            serverChatMsgId: RU,
            content: gU,
            chatterEId: tU
          }, !0)
        })), UU.Tm(KU.ud, (UU => {
          tR.e.onReceiveColyseusPing(UU)
        })), UU.Tm(KU.Ke, (UU => {
          let {
            key: RU,
            value: gU
          } = UU;
          (0, fU.setCookie)(pU, RU, gU)
        })), UU.Tm(KU.Pe, (UU => {
          eU.p.yh("setDiscordReportKey", UU)
        })), (0, tU.onGameResetOnce)((() => {
          this.stopChunkReports()
        })), UU.Tm(KU.xc, (RU => {
          const {
            rR: pU,
            XR: EU
          } = RU;
          if ((0, tU.setAdjustment)(EU), this.connectionResume.onInitialInfo(RU.vR, RU.dR), tU.offlineInputReplay.GJ(RU.HR), this.connectionResume.isResuming()) {
            console.log("Resumed the connection as eId", pU);
            try {
              null === RU.SR && (0, qU.c)().client.inventoryPrediction.dropPending(), this.stopChunkReports(), this.clearBlockRules(), WU.b.apply({
                shopInfo: null,
                _shopVersion: rU.e
              });
              const tU = gU.Im.NUU(gU.AY);
              tU.mg && (tU.chestClosed(), eU.p.yh("chestToggleFromServer", !1, !0)), this.clearUiRequestsAndQTEs(), eU.p.yh("initInfoReceived", UU)
            } finally {
              const UU = null === RU.SR ? null : {
                sync: null,
                endSeq: null
              };
              this.replayResume = UU, this.connectionResume.onResumeInitialInfo(RU.SR, (() => {
                UU.endSeq = (0, qU.c)().client.inventoryPrediction.lastActionSeq
              })), null === UU && this.restartChunkStreaming()
            }
          } else console.log("Local client is eId", pU), eU.p.yh("loadingScreenState", "loadingPage:loadingWorld"), gU.jUU = pU, gU.Im.cUU(gU.AY, gU.Im.names.entityName) && gU.Im.bY(gU.AY, gU.Im.names.entityName), (0, qU.c)().setEntityName(gU.jUU, (0, qU.c)().getRawEntityName(gU.AY)), gU.FY[gU.jUU] = {}, gU.Im.JY(gU.AY, gU.Im.names.entityName), eU.p.yh("initInfoReceived", UU), this.startChunkReports(), PU.client.onServerConnectionFinalised()
        })), UU.Tm(KU.re, (() => {
          this.connectionResume.isResuming() ? this.connectionResume.onResumed((() => {
            const UU = this.replayResume;
            if (this.replayResume = null, !UU) return;
            this.restartChunkStreaming();
            const {
              inventoryPrediction: RU
            } = (0, qU.c)().client, {
              sync: pU
            } = UU, EU = new Set(tU.offlineInputReplay.takeDroppedActions());
            if (pU) {
              var PU;
              const tU = null !== (PU = UU.endSeq) && void 0 !== PU ? PU : RU.lastActionSeq;
              RU.forget((UU => UU > pU.bg && UU <= tU || EU.has(UU))), mU(gU, RU, eU.p, pU.bg, pU.load)
            } else RU.dropPending(), RU.askForSnapshot()
          })) : console.warn("ResumeComplete arrived without a resume")
        })), UU.Tm(KU.if, (UU => {
          eU.p.yh("TopRightHelper", UU, !0)
        })), UU.Tm(KU.Jd, (UU => {
          let {
            type: RU,
            location1: gU,
            location2: tU,
            location3: pU,
            score: EU
          } = UU;
          (0, pR.y)({
            type: RU,
            location1: gU,
            location2: tU,
            location3: pU,
            score: EU
          })
        })), UU.Tm(KU.qe, (UU => {
          let {
            type: RU,
            resourceType: gU,
            amount: tU,
            category: pU,
            itemName: EU
          } = UU;
          (0, pR.C)({
            type: RU,
            resourceType: gU,
            amount: tU,
            category: pU,
            itemName: EU
          })
        })), UU.Tm(KU.bb, (UU => {
          gU.FG.kRU.add(UU), gU.FG.ARU.delete(UU)
        })), UU.Tm(KU.jb, (UU => {
          gU.FG.ARU.add(UU), gU.FG.kRU.delete(UU)
        })), UU.Tm(KU.he, (UU => {
          gU.FG.ARU.delete(UU), gU.FG.kRU.delete(UU)
        })), UU.Tm(KU.hb, (UU => {
          gU.FG.FRU.add(UU), gU.FG.zRU.delete(UU)
        })), UU.Tm(KU.pb, (UU => {
          gU.FG.zRU.add(UU), gU.FG.FRU.delete(UU)
        })), UU.Tm(KU.me, (UU => {
          gU.FG.zRU.delete(UU), gU.FG.FRU.delete(UU)
        })), UU.Tm(KU.fb, (UU => {
          (0, GU.db)(UU, gU.FG.MRU), (0, GU.db)(UU, gU.FG.iRU), gU.FG.iRU.push(UU)
        })), UU.Tm(KU.nb, (UU => {
          (0, GU.db)(UU, gU.FG.iRU), (0, GU.db)(UU, gU.FG.MRU), gU.FG.MRU.push(UU)
        })), UU.Tm(KU.ie, (UU => {
          (0, GU.db)(UU, gU.FG.iRU), (0, GU.db)(UU, gU.FG.MRU)
        })), UU.Tm(KU.xf, (UU => {
          let {
            Hg: RU,
            Sg: tU
          } = UU;
          tU ? gU.FG.Vr.delete(RU) : gU.FG.Vr.add(RU)
        })), UU.Tm(KU.vf, (UU => {
          let {
            vE: RU,
            dE: tU
          } = UU;
          PU.updateWalkThroughRect(gU.AY, RU, tU)
        })), (0, tU.onGameResetOnce)((() => {
          this.clearBlockRules()
        })), UU.Tm(KU.cf, (UU => {
          (0, IU.e)(UU)
        })), UU.Tm(KU.qc, (UU => {
          wU.b.applyServerUpdate(UU)
        })), UU.Tm(KU.ub, (UU => {
          PU.applyServerBlocks((() => {
            ! function(UU, RU) {
              for (const {
                  HE: gU,
                  SE: tU
                }
                of RU) {
                const RU = nU.c[tU];
                if (RU) {
                  const {
                    compX: tU,
                    compY: pU,
                    compZ: EU,
                    mainMultiblock: PU
                  } = RU;
                  UU.mw(gU[0] - tU, gU[1] - pU, gU[2] - EU, PU)
                }
              }
              for (const {
                  HE: gU,
                  SE: tU,
                  sE: pU
                }
                of RU) UU.setBlockNoMulti(gU[0], gU[1], gU[2], tU, !0), UU.blockDataOwner.setBlockData(gU[0], gU[1], gU[2], null === pU ? void 0 : JSON.parse(pU)), UU.blockAdded(gU[0], gU[1], gU[2], tU)
            }(PU, UU)
          })), eU.p.yh("changeBlockFail", UU), PU.client.triggerGameCallback("onChangeBlockFail", UU), eU.p.yh("EditBoard", {
            pos: null
          }), eU.p.yh("EditCodeBlock", {
            pos: null,
            canChangePos: null
          })
        })), UU.Tm(KU.qd, (UU => {
          let {
            pickUpItems: RU,
            pickUpAckSeq: gU
          } = UU;
          for (const {
              name: tU,
              amount: pU,
              attributes: PU
            }
            of RU) EU().pickUpItem({
            name: tU,
            amount: pU,
            typeObj: kU.v[tU],
            attributes: PU
          });
          (0, qU.c)().client.inventoryPrediction.serverChangeApplied(gU)
        })), UU.Tm(KU.Te, (UU => {
          let {
            index: RU,
            name: tU,
            amount: pU,
            attributes: EU,
            setSlotAckSeq: PU
          } = UU;
          const TU = gU.Im.NUU(gU.AY);
          (RU < TU.playerInventory.numSlots || TU.mg || TU.inCreative) && TU.setItemSlot(RU, tU, pU, EU), (0, qU.c)().client.inventoryPrediction.serverChangeApplied(PU)
        })), UU.Tm(KU.bf, (UU => {
          let {
            fg: RU,
            ng: tU,
            bg: pU
          } = UU;
          const {
            inventoryPrediction: EU
          } = (0, qU.c)().client, PU = () => {
            gU.Im.NUU(gU.AY).loadFromString(RU)
          };
          this.replayResume && (this.replayResume.sync = {
            bg: pU,
            load: PU
          }), mU(gU, EU, eU.p, pU, PU, tU)
        })), UU.Tm(KU.Bc, (UU => {
          (0, qU.c)().client.inventoryPrediction.acknowledge(UU)
        })), UU.Tm(KU.G, (UU => {
          let {
            KE: RU,
            cE: gU,
            GE: tU,
            jE: pU
          } = UU;
          (0, qU.c)().client.itemDropPrediction.onActionItemDrops(RU, gU, tU, pU)
        })), UU.Tm(KU.Nb, (UU => {
          EU().clearInventory(), (0, qU.c)().client.inventoryPrediction.serverChangeApplied(UU)
        })), UU.Tm(KU.Kc, (UU => {
          let {
            leaveEventType: RU,
            category: gU,
            subCategory: tU,
            value: pU
          } = UU;
          (0, pR.K)({
            leaveEventType: RU,
            category: gU,
            subCategory: tU,
            value: pU
          })
        })), UU.Tm(KU.Yb, (UU => {
          let {
            cat1: RU,
            cat2: gU,
            cat3: tU,
            value: pU
          } = UU;
          (0, pR.u)({
            cat1: RU,
            cat2: gU,
            cat3: tU,
            value: pU
          })
        }));
        const PU = (0, qU.c)();
        UU.Tm(KU.Rb, (UU => {
          PU.applyServerBlocks((() => {
            ZU(PU, wU.b, UU)
          }))
        })), UU.Tm(KU.Ue, (UU => {
          eU.p.yh("setSelectedInventorySlotI", UU, !0)
        })), UU.Tm(KU.Jc, (UU => {
          let {
            category: RU,
            timeframe: gU,
            data: tU
          } = UU;
          eU.p.yh("leaderboardResponse", {
            category: RU,
            timeframe: gU,
            data: tU
          })
        })), UU.Tm(KU._, (UU => {
          let {
            EE: RU,
            PE: gU
          } = UU;
          this.stateReplicationHandler.setUpIfQueued(RU), RU = (0, dU.c)(RU), (0, qU.c)().client.gameRecorder.recordBulletShot(RU, gU), eU.p.yh(`bulletShot|${RU}`, {
            bulletDirections: gU
          })
        })), UU.Tm(KU.rc, (UU => {
          let {
            yg: RU,
            kg: gU
          } = UU;
          eU.p.yh("damagedByOtherPlayer", {
            yg: RU,
            direction: gU
          }, !0)
        })), UU.Tm(KU.Bd, (UU => {
          eU.p.yh("playerKilled", UU, !0), (0, qU.c)().client.gameRecorder.recordPlayerKilled(UU.deadEId, UU.killerEId, UU.withItem, UU.killstreak)
        })), UU.Tm(KU.ac, (UU => {
          eU.p.yh("customKillfeed", UU, !0), (0, qU.c)().client.gameRecorder.recordCustomKillfeed(UU.killer, UU.victim, UU.withItem)
        })), UU.Tm(KU.Ld, (UU => {
          let {
            NR: RU,
            lR: tU
          } = UU;
          this.stateReplicationHandler.setUpIfQueued(RU);
          const pU = gU.Im.QRU(RU);
          null !== pU && void 0 !== pU && pU.isGun() && pU.reload(Date.now(), tU)
        })), UU.Tm(KU.af, (() => {
          eU.p.yh("showShopTutorial", null, !0)
        })), UU.Tm(KU.Fd, (UU => {
          eU.p.yh("progressBarUpdate", UU, !0)
        })), UU.Tm(KU.Ac, (UU => {
          eU.p.yh("middleScreenBarInitiate", {
            duration: UU.Og,
            Ut: UU.Ut,
            horizBarRemOffset: UU.Rt
          }, !0)
        })), UU.Tm(KU.Yd, (() => {
          eU.p.yh("middleScreenBarRemove", !0)
        })), UU.Tm(KU.xe, (UU => {
          let {
            DR: RU,
            LR: tU
          } = UU;
          const pU = tU ? (0, KR.f)(gU, tU) : void 0;
          eU.p.yh("sendHitmarker", {
            DR: RU,
            screenPos: pU
          }, !0)
        })), UU.Tm(KU.Ne, (UU => {
          let {
            id: RU,
            position: gU,
            style: tU,
            gE: pU,
            pE: EU
          } = UU;
          eU.p.yh("setDirectionArrow", {
            id: RU,
            position: gU,
            style: tU,
            text: (0, KU.w)(pU),
            pE: EU
          }, !0)
        })), UU.Tm(KU.Jb, (UU => {
          let {
            id: RU
          } = UU;
          eU.p.yh("clearDirectionArrow", {
            id: RU
          }, !0)
        })), UU.Tm(KU.J, (UU => {
          let {
            uE: RU,
            CE: tU,
            animationScript: pU,
            hE: EU,
            QE: PU,
            eE: TU,
            WE: KU
          } = UU;
          RU = (0, dU.c)(RU);
          const cU = null === pU && null !== TU ? (0, YU.d)(TU, KU) : pU;
          (0, qU.c)().client.gameRecorder.recordAnimateEntity(RU, tU, cU, EU, PU), (0, aU.d)(gU).animations.animateEntity(RU, tU, pU, EU, PU, TU, KU), null !== pU || RU === gU.AY && tU === GR.f.Emote && (0, qU.c)().client.cameraController.endTemporaryThirdPerson()
        })), UU.Tm(KU.nf, (UU => {
          let {
            Bg: RU,
            Vg: gU
          } = UU;
          if (PU.jy(RU[0], RU[1], RU[2])) {
            const UU = (0, qU.c)().Zx(RU[0], RU[1], RU[2]);
            (0, qU.c)().updateMailboxContents(RU[0], RU[1], RU[2], UU, gU)
          }
        })), UU.Tm(KU.Eb, (UU => {
          let {
            yE: RU,
            kE: tU,
            FE: pU,
            iE: EU,
            AE: PU,
            zE: TU,
            ME: KU,
            DE: cU
          } = UU;
          const GU = gU.Im.NUU(gU.AY);
          if (TU) {
            const {
              xg: UU,
              bg: RU
            } = cU;
            return (0, qU.c)().client.inventoryPrediction.n_(RU, (() => {
              GU.chestRefreshed(tU, pU, EU, KU, UU)
            })) && eU.p.yh("chestToggleFromServer", !1, !0), void eU.p.yh("chestRefreshedFromServer")
          }(RU || GU.mg) && (RU ? (GU.chestOpened(tU, pU, EU, PU, KU), null !== PU && (0, qU.c)().client.ironChestPasskeyCache.onChestOpened(EU, PU)) : GU.chestClosed(), eU.p.yh("chestToggleFromServer", RU, !0))
        })), UU.Tm(KU.cc, (UU => {
          let {
            craftingRecipeItemName: RU,
            recipesForItem: tU
          } = UU;
          RU ? PU.craftingManager.editRecipesForPlayer(gU.AY, RU, tU) : PU.craftingManager.resetAllPlayerRecipes(gU.AY), eU.p.yh("craftingRecipesEdited", {
            itemName: RU,
            recipesForItem: tU
          })
        })), UU.Tm(KU.We, (UU => {
          let {
            vehicleEId: RU,
            overrides: gU
          } = UU;
          (0, qU.c)().applyRiddenVehicleSettingOverrides(RU, gU)
        })), UU.Tm(KU.sf, (UU => {
          let {
            cR: RU,
            GR: tU,
            jR: pU
          } = UU;
          const EU = gU.Im.bUU(gU.AY).physicsState.type === sU.u.SLEEPING && RU === sU.u.DEFAULT;
          (0, qU.c)().updatePositionAndPhysics(gU.AY, {
            type: RU,
            tier: tU
          }, !0, pU), EU && (0, qU.c)().updateHeldVehicleStatus()
        })), UU.Tm(KU.wb, (UU => {
          let {
            UE: RU,
            RE: tU
          } = UU;
          gU.Im.MUU(gU.AY).setPose(RU, tU)
        })), UU.Tm(KU.te, (UU => {
          (0, CR.d)(UU)
        })), UU.Tm(KU.xd, (UU => {
          for (const RU of UU)(0, AU.v)(RU);
          eU.p.yh("playerCosmeticsUpdated", UU, !0)
        })), UU.Tm(KU.O, (UU => {
          for (const RU of UU)(0, PR.h)(gU, RU)
        })), UU.Tm(KU.Oc, (UU => {
          let {
            xp: RU,
            mp: tU,
            Jp: pU,
            wp: EU,
            np: TU,
            bp: qU,
            Zp: KU
          } = UU;
          this.stateReplicationHandler.setUpIfQueued(RU), RU = (0, dU.c)(RU);
          const cU = gU.Im.KRU(RU);
          if (cU && (cU.lastHurtTime = performance.now()), (0, yU.playRigHurt)(gU, RU, qU), eU.p.yh("lifeformHurt", {
              eId: RU,
              Zp: KU
            }), tU) {
            const UU = (0, KR.f)(gU, tU.LR);
            eU.p.yh("yourAttackHit", {
              DR: EU,
              screenPos: UU,
              hitSelf: RU === gU.AY
            })
          }
          RU === gU.AY && (PU.shakePlayerCamera(RU, TU / 40, 200), eU.p.yh("closeShopOnDamaged", null), eU.p.yh("damagedByOtherPlayer", {
            yg: null,
            direction: qU,
            np: TU
          }, !0));
          const GU = gU.Im.Hx(RU);
          if (GU && (pU || EU)) {
            const UU = [GU[0], GU[1] + 1, GU[2]];
            pU && (0, zU.j)(gU, zU.x, UU, 15), EU && (0, zU.j)(gU, zU.o, UU, 10)
          }
        })), UU.Tm(KU.Nc, (UU => {
          let {
            oR: RU,
            ZR: tU,
            aR: pU
          } = UU;
          (0, aU.d)(gU).setHealthFrac((0, dU.c)(RU), pU), eU.p.yh("lifeformHealthChanged", {
            eId: (0, dU.c)(RU),
            ZR: tU,
            aR: pU
          })
        })), UU.Tm(KU.S, (UU => {
          let {
            TE: RU,
            qE: tU
          } = UU;
          (0, qU.c)().playerAttacked(gU.AY, RU, tU)
        })), UU.Tm(KU.Hc, (UU => {
          (0, qU.c)().client.leaveGameUnwanted({
            reason: UU,
            requiresRefresh: !1,
            canReconnect: !1,
            automaticallyReconnect: !1
          }), (0, gR.navigatePreserveSearch)("/")
        })), UU.Tm(KU.Ud, (UU => {
          let {
            YR: RU,
            BR: gU,
            VR: tU
          } = UU;
          EU().removeItemName(RU, gU), (0, qU.c)().client.inventoryPrediction.serverChangeApplied(tU)
        })), UU.Tm(KU.Ge, (UU => {
          const {
            fp: RU,
            YRU: tU
          } = (0, MU.i)([UU[0], UU[1], UU[2]]);
          QR.c.setLookDirection(gU, RU, tU), (0, DU.o)(RU, tU);
          const pU = gU.Im.MUU(gU.AY);
          pU && (pU.heading = RU)
        })), UU.Tm(KU.Ie, (UU => {
          PU.client.cameraController.setCameraZoom(UU)
        })), UU.Tm(KU._e, (UU => {
          let {
            FR: RU,
            iR: tU
          } = UU;
          PU.shakePlayerCamera(gU.AY, RU, tU)
        })), UU.Tm(KU.Ub, (UU => {
          (0, RR.onCosmeticPackGranted)(UU)
        })), UU.Tm(KU.ze, (UU => {
          eU.p.yh("serverUpdating", Date.now() + UU, !0)
        })), UU.Tm(KU.Vc, BU.c), UU.Tm(KU.ed, (UU => {
          let {
            id: RU,
            nU: gU
          } = UU;
          const {
            type: pU,
            params: EU
          } = (0, qR.d)(gU), PU = {
            ...EU
          };
          for (const tU of qR.b) tU in PU && PU[tU] && (PU[tU] = (0, KU.w)(PU[tU]));
          TR.c.queueQTE(RU, pU, PU).getResult().then((UU => {
            "boolean" === typeof UU && (0, tU.sendColyMessage)(KU.ti, {
              qteId: RU,
              qteResponse: UU
            })
          }))
        })), UU.Tm(KU.Zd, (UU => {
          TR.c.cancelQTE(UU)
        })), (0, tU.onGameResetOnce)((() => {
          TR.c.reset()
        })), UU.Tm(KU.gd, (UU => {
          let {
            id: RU,
            clientParameters: gU
          } = UU;
          (0, JU.h)(RU, gU)
        })), UU.Tm(KU.be, (UU => {
          (0, JU.l)(UU)
        })), UU.Tm(KU.lf, (UU => {
          let {
            text: RU,
            id: gU
          } = UU;
          (0, JU.o)(gU, RU, (UU => {
            (0, tU.sendColyMessage)(KU.Dj, {
              xT: gU,
              mT: UU,
              IT: 5
            })
          }))
        })), UU.Tm(KU.dc, (UU => {
          let {
            gR: RU,
            tR: gU,
            pR: tU,
            ER: pU,
            PR: EU,
            TR: PU
          } = UU;
          RU = (0, dU.c)(RU), (0, qU.c)().client.updateEffect(RU, gU, {
            displayName: tU,
            icon: pU,
            duration: EU,
            level: PU
          })
        })), UU.Tm(KU.Od, (UU => {
          let {
            gR: RU,
            tR: gU
          } = UU;
          RU = (0, dU.c)(RU), (0, qU.c)().client.removeEffect(RU, gU)
        })), UU.Tm(KU.Ec, (UU => {
          gU.Im.MUU(gU.AY).jumpMultiplier.setMultiplierType("jumpEffectAmount", UU)
        })), UU.Tm(KU.kf, (UU => {
          eU.p.yh("ttbEffectMultiplier", UU)
        })), (0, tU.onGameResetOnce)((() => {
          gU.Im.MUU(gU.AY).jumpMultiplier.setMultiplierType("jumpEffectAmount", 1)
        })), UU.Tm(KU.bd, (UU => {
          (0, zU.k)(gU, (0, GU.s)(UU))
        })), UU.Tm(KU.cd, (UU => {
          cR.g[UU.Op] ? (0, zU.k)(gU, {
            ...cR.g[UU.Op],
            pos1: UU.pos1,
            pos2: UU.pos2
          }) : console.error(`Unknown preset id: ${UU.Op}`)
        })), UU.Tm(KU.vd, (UU => {
          var RU, gU;
          let {
            Yp: tU,
            Bp: pU,
            Vp: EU,
            rp: PU
          } = UU, {
            vp: TU,
            dp: KU
          } = null !== PU && void 0 !== PU ? PU : {};
          const {
            Xp: cU
          } = null !== PU && void 0 !== PU ? PU : {};
          TU = null !== (RU = TU) && void 0 !== RU ? RU : void 0, KU = null !== (gU = KU) && void 0 !== gU ? gU : void 0, "string" === typeof cU && this.stateReplicationHandler.setUpIfQueued(cU), (0, qU.c)().client.gameRecorder.recordPlaySound(tU, pU, EU, PU), NU.e.play((0, lU.d)(tU), pU, cU, TU, KU).rate(EU)
        })), UU.Tm(KU.Ce, (UU => {
          let {
            pos: RU,
            data: gU
          } = UU;
          PU.blockDataOwner.setBlockData(RU[0], RU[1], RU[2], gU), PU.blockAdded(RU[0], RU[1], RU[2], PU.Zx(RU[0], RU[1], RU[2]))
        })), UU.Tm(KU.nd, (UU => {
          let {
            info: RU
          } = UU;
          eU.p.yh("overShopInfo", RU, !0)
        })), UU.Tm(KU.kc, (UU => {
          let {
            qR: tU,
            KR: pU
          } = UU;
          RU.openShop(gU.AY, tU, pU)
        })), UU.Tm(KU.L, (UU => {
          gU.Im.yX(gU.AY).applyImpulse(UU)
        })), UU.Tm(KU.Xe, (UU => {
          const RU = gU.Im.yX(gU.AY);
          SU().set(RU.vV, 0, 0, 0), SU().set(RU.HV, 0, 0, 0), SU().copy(RU.Fh, UU), RU.sV()
        })), UU.Tm(KU.Qc, (UU => {
          console.error(`[logErrorToConsole]: ${UU}`)
        })), UU.Tm(KU.ic, (UU => {
          let {
            VE: RU,
            rE: gU,
            XE: tU
          } = UU;
          eU.p.yh("flyingMiddleMessage", {
            content: (0, KU.w)(RU),
            rE: gU,
            XE: tU
          }, !0)
        })), UU.Tm(KU.zf, (UU => {
          const RU = UU === VU.g ? null : {
            message: `Currently loaded as variation: ${UU}`,
            type: "Warning"
          };
          eU.p.yh("showPermanentBottomMessage", RU, !0)
        })), UU.Tm(KU.mc, (UU => {
          let {
            messageType: RU,
            data: gU
          } = UU;
          (0, OU.f)(RU) ? (0, OU.b)(RU, gU) : ("freeCamPerms" === RU && PU.client.freeCameraController.setPerms(gU.key, gU.value), PU.client.triggerGameCallback("onReceivedMessageFromServer", RU, gU))
        })), UU.Tm(KU.yb, (() => {
          const UU = gU.Im.QRU(gU.AY);
          null !== UU && void 0 !== UU && UU.isChargeable() && UU.finishCharging(!1, Date.now())
        })), UU.Tm(KU.Sd, (UU => {
          let {
            ap: RU
          } = UU;
          PU.craftingManager.removeRecipes(gU.AY, RU), eU.p.yh("craftingRecipesEdited", {
            itemName: RU,
            recipesForItem: []
          })
        })), UU.Tm(KU.of, (UU => {
          for (const RU in UU) {
            const gU = UU[RU];
            for (const UU in gU) PU.client.meshCreator.handleParticleSystemUpdate(RU, UU, gU[UU])
          }
        })), (0, tU.onGameResetOnce)((() => {
          (0, ER.setFloatingYValue)(gU.Im.getState(gU.AY, "physics"), gU.Im.Hk(gU.AY), null)
        })), UU.Tm(KU.ec, (UU => {
          let {
            AR: RU,
            zR: tU,
            MR: pU
          } = UU;
          const EU = (0, dU.c)(RU);
          if (EU === gU.AY) {
            const UU = gU.Im.Hk(gU.AY).position;
            pU ??= Math.floor(UU[1]) - 1, (0, ER.setFloatingYValue)(gU.Im.getState(gU.AY, "physics"), gU.Im.Hk(gU.AY), tU ? pU : null)
          }(0, aU.d)(gU).setFloating(EU, tU, pU);
          const PU = gU.Im.getState(EU, "floating");
          PU && (PU.isFloating = tU, PU.MR = tU ? pU : null)
        })), UU.Tm(KU.Ob, UR.i)
      }
    }
    window.addEventListener("beforeunload", (() => {}));
    var WR = gU(38598),
      fR = gU(38603),
      xR = gU(623),
      mR = gU(2927);
    class IR {
      constructor(UU, RU, gU, tU) {
        this.msgHandler = gU, this.listener = tU, this.session = void 0, this.attachedRoom = null, this.detachRoomListeners = null, this.suspended = !1, this.droppedAt = 0, this.session = new WR.e({
          reconnect: UU,
          isLive: () => tU.isLive(),
          onReconnected: UU => {
            this.resumeOnRoom(UU)
          },
          onGaveUp: (UU, RU) => {
            tU.onGaveUp(UU, RU)
          },
          freeze: RU,
          releaseSeat: RU => {
            UU(RU).then((UU => {
              UU.leave(!0)
            }), (UU => {
              console.warn("Couldn't release the held seat of a game left while reconnecting", UU)
            }))
          }
        })
      }
      onInitialInfo(UU, RU) {
        this.session.onInitialInfo(UU, RU)
      }
      isResuming() {
        return this.session.isResuming()
      }
      getDroppedAt() {
        return this.droppedAt
      }
      onResumeInitialInfo(UU, RU) {
        if (this.session.onResuming(), null === UU) {
          try {
            (0, qU.c)().client.itemDropPrediction.reset()
          } catch (gU) {
            console.error("Error dropping the item drop predictions on resuming", gU)
          }
          return tU.offlineInputReplay.discard(), void this.setSuspended(!1)
        }(0, qU.c)().client.itemDropPrediction.onResumeReplayOffered(), tU.offlineInputReplay.replayFrom(UU.yR, RU)
      }
      onResumed(UU) {
        this.setSuspended(!1), (0, tU.resendBeacons)();
        try {
          UU()
        } catch (RU) {
          console.error("Error completing the resume", RU)
        } finally {
          this.session.onResumed()
        }
      }
      attachRoom(UU) {
        const RU = (0, xR.e)((() => UU.connection.isOpen));
        UU.qm(RU);
        const gU = new fR.e((() => {
          this.session.canHoldSeat() && this.listener.isLive() && (console.warn("The game server went silent, reconnecting"), this.onConnectionDropped(UU, "silent"), UU.leave(!1))
        }));
        UU.onStateChange((() => {
          gU.heard()
        }));
        const tU = RU => {
          RU.persisted || UU.leave(!0)
        };
        window.addEventListener("pagehide", tU), UU.qm(((RU, gU) => {
          if (UU === this.attachedRoom && this.listener.isLive()) return (0, EU.g)(RU) && this.session.canHoldSeat() ? (console.warn(`Connection to the game server dropped with code ${RU}, reconnecting`), this.listener.onDropped(RU, gU), void this.onConnectionDropped(UU, String(RU))) : void this.listener.onRoomLeft(RU, gU)
        })), this.attachedRoom = UU, this.detachRoomListeners = () => {
          RU(), gU.dispose(), window.removeEventListener("pagehide", tU)
        }
      }
      dispose() {
        this.detachRoom(), this.session.leave(), this.setSuspended(!1)
      }
      setSuspended(UU) {
        UU !== this.suspended && (this.suspended = UU, (0, tU.setConnectionSuspended)(UU), (0, qU.c)().client.itemDropPrediction.setSuspended(UU))
      }
      detachRoom() {
        var UU;
        null === (UU = this.detachRoomListeners) || void 0 === UU || UU.call(this), this.detachRoomListeners = null, this.attachedRoom = null
      }
      onConnectionDropped(UU, RU) {
        (0, mR.e)("disconnect", "Left room", RU), this.isResuming() || (this.droppedAt = Date.now()), this.detachRoom(), tU.offlineInputReplay.onConnectionLost(), this.setSuspended(!0), this.session.onConnectionLost(UU.reconnectionToken)
      }
      resumeOnRoom(UU) {
        if (!this.listener.isLive()) return console.warn("Left the game while reconnecting, leaving the resumed room"), UU.leave(!0), void this.dispose();
        console.log("Reconnected to the game server, waiting for the game to resume"), (0, CR.q)(), tU.offlineInputReplay.onConnectionReplaced(), this.msgHandler.cKU(UU), this.listener.onReconnected(UU), this.attachRoom(UU)
      }
    }
    var JR = gU(3165),
      wR = gU(3167),
      nR = gU(1316),
      bR = gU(4336),
      oR = gU(2840),
      ZR = gU(1064),
      aR = gU(37222),
      YR = gU(38611),
      BR = gU(8522),
      VR = gU(38618),
      rR = gU(1704),
      XR = gU(38621),
      vR = gU(1629),
      dR = gU(2558);

    function HR(UU) {
      var RU, gU;
      if ("object" !== typeof UU || null === UU) return {
        errType: typeof UU
      };
      const tU = UU;
      return {
        errType: null !== (RU = null === (gU = UU.constructor) || void 0 === gU ? void 0 : gU.name) && void 0 !== RU ? RU : "",
        errName: "string" === typeof tU.name ? tU.name : "",
        eventType: "string" === typeof tU.type ? tU.type : "",
        errStack: "string" === typeof tU.stack ? tU.stack.split("\n").slice(1).join(" | ") : ""
      }
    }

    function SR(UU) {
      if ("undefined" !== typeof ProgressEvent && UU instanceof ProgressEvent) return !0;
      if (!(UU instanceof Error)) return !1;
      const RU = UU.code;
      return "ServerError" === UU.name && void 0 === RU || "AbortError" === UU.name || "seat reservation expired." === UU.message || "early_leave" === UU.message
    }(0, hU.k)((UU => {
      (0, mR.e)("wasm_net", UU)
    }));
    let sR = !0;

    function yR() {
      sR = !1
    }
    class kR {
      constructor(UU) {
        this.gameNameWithVariation = void 0, this.lobbyName = void 0, this.colyClient = void 0, this.userContext = void 0, this.joinedAt = null, this.checkSendPath = () => {}, this.LG = void 0, this.connectionResume = void 0, this.incomingMsgInitialisor = void 0, this.gameNameWithVariation = UU.gameNameWithVariation, this.lobbyName = UU.lobbyName, this.colyClient = UU.colyClient, this.userContext = UU.userContext
      }
      async connectToServer(UU, RU, gU) {
        WU.b.reset(), UU.FY = {
          [UU.AY]: {}
        }, UU.jUU = void 0, (0, CR.q)(), (0, qU.c)().removeAllEntityNames(), (0, qU.c)().setEntityName(UU.AY, this.userContext.getPlayerName()), (0, nR.m)({
          lobbyName: this.lobbyName
        }), console.log("Waiting for clientConnection passed promise to resolve");
        const PU = (0, vR.f)();
        console.log("joining server with game", this.gameNameWithVariation, "lobbyName", this.lobbyName);
        const TU = performance.now(),
          KU = (0, VR.e)(this.userContext, (() => {
            const {
              roomName: tU,
              joinOptions: pU
            } = (0, xU.d)(this.userContext, this.gameNameWithVariation, this.lobbyName, RU, (UU => oR.e.isUsingCustomGameTexturePack(UU)));
            return pU.joinAdHold = PU, pU.renderBackend = (0, dR.b)(UU.SC), (0, YR.h)((() => this.colyClient.joinOrCreate(tU, pU)), gU)
          }));
        return eU.p.yh("loadingScreenState", "loadingPage:joiningLobby"), await KU.then((RU => {
          if (this.joinedAt = performance.now(), this.LG = UU, PU) {
            const UU = (0, vR.p)((() => {
              RU.send(pU.f)
            }));
            RU.qm(UU), (0, tU.onGameResetOnce)(UU)
          }
          const gU = new QU(RU);
          this.connectionResume = new IR((UU => this.colyClient.reconnect(UU)), (RU => {
            UU.HJ(RU)
          }), gU, {
            isLive: () => (0, qU.c)().client.getMsgHandler() === gU,
            onDropped: (UU, RU) => {
              (0, wR.h)(UU) || this.logUnrecognisedConnectionLoss(UU, void 0, {
                site: "drop",
                closeReason: null !== RU && void 0 !== RU ? RU : "",
                sinceJoined: this.sinceJoined()
              })
            },
            onRoomLeft: (UU, RU) => {
              this.onRoomLeft(UU, RU)
            },
            onReconnected: UU => {
              this.incomingMsgInitialisor.cKU(UU), this.checkSendPath = (0, aR.e)(gU, UU, hU.n)
            },
            onGaveUp: (UU, RU) => {
              this.onResumeGaveUp(UU, RU)
            }
          }), this.connectionResume.attachRoom(RU), (0, tU.onGameResetOnce)((() => {
            this.connectionResume.dispose()
          }));
          const EU = gU.send,
            TU = gU.Tm,
            KU = gU.ORU.send,
            cU = gU.ORU.Tm,
            GU = gU.qKU;
          this.checkSendPath = (0, aR.e)(gU, RU, hU.n);
          const jU = setInterval((() => {
            EU === gU.send && TU === gU.Tm && KU === gU.ORU.send && cU === gU.ORU.Tm && GU === gU.qKU || yR(), this.checkSendPath()
          }), 1e4);
          return (0, tU.onGameResetOnce)((() => {
            clearInterval(jU)
          })), {
            success: !0,
            successDetails: gU
          }
        })).catch((RU => {
          if (gU.aborted && RU === (0, rR.g)(gU)) return {
            success: !1,
            failDetails: {
              reason: "Left the game while it loaded",
              requiresRefresh: !1,
              canReconnect: !1
            }
          };
          if (RU instanceof XR.e) return console.warn("Seat request timed out", this.lobbyName, this.gameNameWithVariation), {
            success: !1,
            failDetails: {
              reason: RU.message,
              requiresRefresh: !1,
              canReconnect: !1,
              gameServerUnreachable: "timedOut"
            }
          };
          UU.Th(`Failed to connect to bloxd room, check your internet connection. lobbyName: ${this.lobbyName}, gameNameWithVariation: ${this.gameNameWithVariation} code: ${RU.code}\n`, RU);
          const tU = RU.code;
          return tU === EU.d.serverUpdating.code ? (this.goToUpdateWaiting(), {
            success: !1,
            failDetails: {
              reason: EU.d.serverUpdating.text,
              requiresRefresh: !1,
              canReconnect: !0,
              goesToUpdateWaiting: !0
            }
          }) : {
            success: !1,
            failDetails: {
              ...this.onConnectionToServerLost(tU, RU.message, {
                site: "join",
                sinceJoinStart: (0, wR.c)(performance.now() - TU),
                ...HR(RU)
              }, SR(RU)),
              rematch: (0, YR.e)(RU),
              gameRefused: (0, BR.b)(RU)
            }
          }
        }))
      }
      setupServerListeners(UU, RU, gU) {
        eU.p.yh("loadingScreenState", "loadingPage:loadingPlayerInfo"), this.incomingMsgInitialisor = new eR(this.gameNameWithVariation, RU.ORU, UU, this.connectionResume), this.incomingMsgInitialisor.setupStateReplicationHandlers();
        const pU = RU.CKU();
        this.incomingMsgInitialisor.setupOnMessageListeners(pU, gU), (0, tU.onConnectionToServerReady)(pU, RU), pU.finishRegistration()
      }
      dispose() {
        this.connectionResume.dispose()
      }
      onResumeGaveUp(UU, RU) {
        (0, ZR.Kh)(new Error("Reconnect failed"), {
          ...(0, JR.n)(RU),
          game: this.gameNameWithVariation
        }), (0, mR.e)("disconnect", "Reconnect failed", RU.reason), (0, qU.c)().client.leaveGameUnwanted({
          reason: {
            translationKey: "general:lostConnection"
          },
          canReconnect: !UU,
          canPlayAgain: UU,
          requiresRefresh: !1,
          automaticallyReconnect: !1
        }), (0, gR.navigatePreserveSearch)("/")
      }
      sinceJoined() {
        return null === this.joinedAt ? "" : (0, wR.c)(performance.now() - this.joinedAt)
      }
      onRoomLeft(UU, RU) {
        var gU;
        if (UU === EU.d.gameOrPluginKick.code) return;
        if (console.log(`Left room with code ${UU}`), UU === EU.d.serverUpdating.code) return (0, mR.e)("disconnect", "Left room", "serverUpdating"), (0, qU.c)().client.leaveGame(this.getUpdateWaitingUrl()), void this.goToUpdateWaiting();
        this.LG.Th(`Kicked from server with code ${UU}`, new Error);
        const tU = Object.keys(EU.d).find((RU => EU.d[RU].code === UU));
        (0, mR.e)("disconnect", "Left room", null !== tU && void 0 !== tU ? tU : String(UU));
        const pU = this.onConnectionToServerLost(UU, void 0, {
          site: "leave",
          closeReason: null !== RU && void 0 !== RU ? RU : "",
          sinceJoined: this.sinceJoined()
        });
        (0, qU.c)().client.leaveGameUnwanted({
          reason: `You have disconnected from the server.\n${pU.reason}`,
          canReconnect: pU.canReconnect,
          requiresRefresh: pU.requiresRefresh,
          automaticallyReconnect: null !== (gU = pU.automaticallyReconnect) && void 0 !== gU && gU
        }), (0, gR.navigatePreserveSearch)("/")
      }
      getUpdateWaitingUrl() {
        return (0, bR.z)(this.gameNameWithVariation, this.lobbyName)
      }
      goToUpdateWaiting() {
        (0, gR.navigatePreserveSearch)(this.getUpdateWaitingUrl())
      }
      onConnectionToServerLost(UU, RU, gU) {
        var tU;
        let pU = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        if (null !== (tU = RU) && void 0 !== tU && tU.endsWith(EU.k) && (this.userContext.invalidateTrafficCode(), RU = RU.replace(EU.k, "")), UU === EU.d.outdatedVersion.code) return console.error("Outdated client with version ", PU.d, ", refreshing page"), (0, fU.reloadBloxd)(), {
          reason: "Outdated client",
          requiresRefresh: !0,
          canReconnect: !1
        };
        if (UU === EU.d.loadRecaptchaError.code) return console.error("Load recaptcha error, refreshing page"), (0, fU.reloadBloxd)(), {
          reason: "Failed to load recaptcha",
          requiresRefresh: !0,
          canReconnect: !1
        };
        for (const PU in EU.d) {
          const {
            code: gU,
            text: tU,
            canReconnect: pU
          } = EU.d[PU];
          if (gU === UU) {
            console.log("matched known error", UU, "leaving game");
            return {
              reason: "" !== tU ? tU : RU || `Code: ${UU}`,
              requiresRefresh: !1,
              canReconnect: pU,
              automaticallyReconnect: gU === EU.d.customGameUpdated.code || gU === EU.d.duplicateLobbyNameError.code
            }
          }
        }
        return console.log("Didn't match known error, leaving game"), (0, wR.d)(UU) || pU ? console.warn("Connection lost", UU, RU) : this.logUnrecognisedConnectionLoss(UU, RU, gU), {
          reason: `Either your internet isn't working or this is a bug.\nCode: ${UU}`,
          requiresRefresh: !1,
          canReconnect: !1,
          gameServerUnreachable: pU ? "failed" : void 0
        }
      }
      logUnrecognisedConnectionLoss(UU, RU, gU) {
        (0, ZR.Kh)(new Error("Unrecognised connection loss"), {
          code: String(UU),
          cause: null !== RU && void 0 !== RU ? RU : "",
          ...gU,
          game: this.gameNameWithVariation,
          ...(0, wR.k)()
        })
      }
    }
  },
  38565: (UU, RU, gU) => {
    gU.d(RU, {
      b: () => zg,
      d: () => Og
    });
    var tU, pU, EU, PU, TU, qU, KU, cU, GU, jU, uU, CU, hU, QU, eU, WU, fU, xU, mU, IU, JU, wU, nU, bU, oU, ZU, aU, YU, BU, VU, rU, XU, vU, dU, HU, SU, sU, yU, kU, FU, iU, AU, zU, MU, DU, LU, NU, lU, OU, UR, RR, gR, tR, pR, ER, PR, TR, qR, KR, cR, GR, jR, uR, CR, hR, QR, eR, WR, fR, xR, mR, IR, JR, wR, nR, bR, oR, ZR, aR, YR, BR, VR, rR, XR, vR, dR, HR, SR, sR, yR, kR, FR, iR, AR, zR, MR, DR, LR, NR, lR = gU(24),
      OR = gU(36658),
      Ug = gU(38578),
      Rg = gU(38584),
      gg = gU(8742),
      tg = gU(572),
      pg = gU(567),
      Eg = gU(36324);
    let Pg = (tU = (0, gg.type)("number"), pU = (0, gg.type)("number"), EU = (0, gg.type)("number"), PU = (0, gg.type)("number"), TU = (0, gg.type)("number"), qU = (0, gg.type)("number"), KU = (0, gg.type)("string"), cU = class extends gg.Schema {
        constructor() {
          super(...arguments), (0, Ug.d)(this, "id", GU, this), (0, Ug.d)(this, "amount", jU, this), (0, Ug.d)(this, "x", uU, this), (0, Ug.d)(this, "y", CU, this), (0, Ug.d)(this, "z", hU, this), (0, Ug.d)(this, "size", QU, this), (0, Ug.d)(this, "attributes", eU, this)
        }
      }, GU = (0, Rg.c)(cU.prototype, "id", [tU], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return 0
        }
      }), jU = (0, Rg.c)(cU.prototype, "amount", [pU], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return 0
        }
      }), uU = (0, Rg.c)(cU.prototype, "x", [EU], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return 0
        }
      }), CU = (0, Rg.c)(cU.prototype, "y", [PU], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return 0
        }
      }), hU = (0, Rg.c)(cU.prototype, "z", [TU], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return 0
        }
      }), QU = (0, Rg.c)(cU.prototype, "size", [qU], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return 1
        }
      }), eU = (0, Rg.c)(cU.prototype, "attributes", [KU], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return "{}"
        }
      }), cU),
      Tg = (WU = (0, gg.type)("string"), fU = (0, gg.type)("string"), xU = class extends gg.Schema {
        constructor() {
          super(...arguments), (0, Ug.d)(this, "itemName", mU, this), (0, Ug.d)(this, "enchantmentTier", IU, this)
        }
      }, mU = (0, Rg.c)(xU.prototype, "itemName", [WU], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: null
      }), IU = (0, Rg.c)(xU.prototype, "enchantmentTier", [fU], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: null
      }), xU),
      qg = (JU = (0, gg.type)("string"), wU = (0, gg.type)("string"), nU = (0, gg.type)("number"), bU = (0, gg.type)("number"), oU = (0, gg.type)("number"), ZU = (0, gg.type)("float32"), aU = (0, gg.type)("float32"), YU = (0, gg.type)("float32"), BU = (0, gg.type)("string"), VU = (0, gg.type)(["number"]), rU = (0, gg.type)("boolean"), XU = class extends gg.Schema {
        constructor() {
          super(...arguments), (0, Ug.d)(this, "type", vU, this), (0, Ug.d)(this, "name", dU, this), (0, Ug.d)(this, "x", HU, this), (0, Ug.d)(this, "y", SU, this), (0, Ug.d)(this, "z", sU, this), (0, Ug.d)(this, "xRotation", yU, this), (0, Ug.d)(this, "yRotation", kU, this), (0, Ug.d)(this, "zRotation", FU, this), (0, Ug.d)(this, "followingEId", iU, this), (0, Ug.d)(this, "followingOffset", AU, this), (0, Ug.d)(this, "shouldMatchFollowingEntityRotation", zU, this)
        }
      }, vU = (0, Rg.c)(XU.prototype, "type", [JU], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: null
      }), dU = (0, Rg.c)(XU.prototype, "name", [wU], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return ""
        }
      }), HU = (0, Rg.c)(XU.prototype, "x", [nU], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return 0
        }
      }), SU = (0, Rg.c)(XU.prototype, "y", [bU], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return 0
        }
      }), sU = (0, Rg.c)(XU.prototype, "z", [oU], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return 0
        }
      }), yU = (0, Rg.c)(XU.prototype, "xRotation", [ZU], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return 0
        }
      }), kU = (0, Rg.c)(XU.prototype, "yRotation", [aU], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return 0
        }
      }), FU = (0, Rg.c)(XU.prototype, "zRotation", [YU], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return 0
        }
      }), iU = (0, Rg.c)(XU.prototype, "followingEId", [BU], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: null
      }), AU = (0, Rg.c)(XU.prototype, "followingOffset", [VU], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return new gg.ArraySchema(0, 0, 0)
        }
      }), zU = (0, Rg.c)(XU.prototype, "shouldMatchFollowingEntityRotation", [rU], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return !0
        }
      }), XU),
      Kg = (MU = (0, gg.type)("float32"), DU = (0, gg.type)("float32"), LU = (0, gg.type)("boolean"), NU = (0, gg.type)("boolean"), lU = (0, gg.type)("float32"), OU = (0, gg.type)("boolean"), UR = (0, gg.type)("string"), RR = (0, gg.type)("string"), gR = (0, gg.type)("string"), tR = (0, gg.type)("string"), pR = (0, gg.type)(["number"]), ER = (0, gg.type)("number"), PR = (0, gg.type)({
        map: Tg
      }), TR = class extends qg {
        constructor() {
          super(...arguments), (0, Ug.d)(this, "scale", qR, this), (0, Ug.d)(this, "speed", KR, this), (0, Ug.d)(this, "jumping", cR, this), (0, Ug.d)(this, "crouching", GR, this), (0, Ug.d)(this, "cameraPitch", jR, this), (0, Ug.d)(this, "armSwinging", uR, this), (0, Ug.d)(this, "heldItemName", CR, this), (0, Ug.d)(this, "heldItemEnchantmentTier", hR, this), (0, Ug.d)(this, "pose", QR, this), (0, Ug.d)(this, "ridingVehicleEId", eR, this), (0, Ug.d)(this, "meshOffset", WR, this), (0, Ug.d)(this, "baseRenderHeading", fR, this), (0, Ug.d)(this, "armour", xR, this)
        }
      }, qR = (0, Rg.c)(TR.prototype, "scale", [MU], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return 1
        }
      }), KR = (0, Rg.c)(TR.prototype, "speed", [DU], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return 0
        }
      }), cR = (0, Rg.c)(TR.prototype, "jumping", [LU], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return !1
        }
      }), GR = (0, Rg.c)(TR.prototype, "crouching", [NU], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return !1
        }
      }), jR = (0, Rg.c)(TR.prototype, "cameraPitch", [lU], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return 0
        }
      }), uR = (0, Rg.c)(TR.prototype, "armSwinging", [OU], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return !1
        }
      }), CR = (0, Rg.c)(TR.prototype, "heldItemName", [UR], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: null
      }), hR = (0, Rg.c)(TR.prototype, "heldItemEnchantmentTier", [RR], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: null
      }), QR = (0, Rg.c)(TR.prototype, "pose", [gR], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return "standing"
        }
      }), eR = (0, Rg.c)(TR.prototype, "ridingVehicleEId", [tR], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return null
        }
      }), WR = (0, Rg.c)(TR.prototype, "meshOffset", [pR], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return new gg.ArraySchema(0, 0, 0)
        }
      }), fR = (0, Rg.c)(TR.prototype, "baseRenderHeading", [ER], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return 0
        }
      }), xR = (0, Rg.c)(TR.prototype, "armour", [PR], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return new gg.MapSchema
        }
      }), TR),
      cg = (mR = (0, gg.type)("string"), IR = (0, gg.type)("string"), JR = (0, gg.type)("string"), wR = (0, gg.type)("uint8"), nR = class extends Kg {
        constructor() {
          super(...arguments), (0, Ug.d)(this, "variation", bR, this), (0, Ug.d)(this, "ownerDbId", oR, this), (0, Ug.d)(this, "metaInfo", ZR, this), (0, Ug.d)(this, "aiState", aR, this)
        }
      }, bR = (0, Rg.c)(nR.prototype, "variation", [mR], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return "default"
        }
      }), oR = (0, Rg.c)(nR.prototype, "ownerDbId", [IR], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return null
        }
      }), ZR = (0, Rg.c)(nR.prototype, "metaInfo", [JR], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return ""
        }
      }), aR = (0, Rg.c)(nR.prototype, "aiState", [wR], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return 0
        }
      }), nR);
    YR = (0, gg.type)("string"), BR = (0, gg.type)("string"), VR = (0, gg.type)("string"), rR = (0, gg.type)("string"), XR = class extends qg {
      constructor() {
        super(...arguments), (0, Ug.d)(this, "meshKind", vR, this), (0, Ug.d)(this, "meshOpts", dR, this), (0, Ug.d)(this, "pose", HR, this), (0, Ug.d)(this, "leaderboardTop", SR, this)
      }
    }, vR = (0, Rg.c)(XR.prototype, "meshKind", [YR], {
      configurable: !0,
      enumerable: !0,
      writable: !0,
      initializer: null
    }), dR = (0, Rg.c)(XR.prototype, "meshOpts", [BR], {
      configurable: !0,
      enumerable: !0,
      writable: !0,
      initializer: null
    }), HR = (0, Rg.c)(XR.prototype, "pose", [VR], {
      configurable: !0,
      enumerable: !0,
      writable: !0,
      initializer: null
    }), SR = (0, Rg.c)(XR.prototype, "leaderboardTop", [rR], {
      configurable: !0,
      enumerable: !0,
      writable: !0,
      initializer: null
    });

    function Gg(UU) {
      return Object.keys(gg.Metadata.getFields(UU))
    }
    const jg = Gg(cg);
    for (const Ut of tg.o)
      if (!jg.includes(Ut)) throw new Error(`Mob Schema is missing a networked property: "${Ut}"`);
    const ug = Gg((sR = (0, gg.type)("string"), yR = (0, gg.type)("float32"), kR = (0, gg.type)("float32"), FR = (0, gg.type)("float32"), iR = (0, gg.type)("float32"), AR = class extends qg {
      constructor() {
        super(...arguments), (0, Ug.d)(this, "soundName", zR, this), (0, Ug.d)(this, "volume", MR, this), (0, Ug.d)(this, "refDistance", DR, this), (0, Ug.d)(this, "maxHearDist", LR, this), (0, Ug.d)(this, "rate", NR, this)
      }
    }, zR = (0, Rg.c)(AR.prototype, "soundName", [sR], {
      configurable: !0,
      enumerable: !0,
      writable: !0,
      initializer: function() {
        return ""
      }
    }), MR = (0, Rg.c)(AR.prototype, "volume", [yR], {
      configurable: !0,
      enumerable: !0,
      writable: !0,
      initializer: function() {
        return 1
      }
    }), DR = (0, Rg.c)(AR.prototype, "refDistance", [kR], {
      configurable: !0,
      enumerable: !0,
      writable: !0,
      initializer: function() {
        return Eg.e
      }
    }), LR = (0, Rg.c)(AR.prototype, "maxHearDist", [FR], {
      configurable: !0,
      enumerable: !0,
      writable: !0,
      initializer: function() {
        return Eg.b
      }
    }), NR = (0, Rg.c)(AR.prototype, "rate", [iR], {
      configurable: !0,
      enumerable: !0,
      writable: !0,
      initializer: function() {
        return 1
      }
    }), AR));
    for (const Ut of pg.j)
      if (!ug.includes(Ut)) throw new Error(`AudioEntity Schema is missing a replicated property: "${Ut}"`);
    var Cg = gU(37996),
      hg = gU(1238),
      Qg = gU(581),
      eg = gU(37774),
      Wg = gU(3937),
      fg = gU(311),
      xg = gU(36754),
      mg = gU(37645),
      Ig = gU(2053),
      Jg = gU(36724),
      wg = gU(38020),
      ng = gU(36886),
      bg = gU(316),
      og = gU.n(bg),
      Zg = gU(37476),
      ag = gU(36584),
      Yg = gU(37618),
      Bg = gU(37663);
    class Vg {
      constructor(UU, RU) {
        this.bloxd = UU, this.eId = RU, this.LG = void 0, this.colyseusEntity = void 0, this.canSeeSub = void 0, this.canAttackSub = void 0, this.interactableSub = void 0, this.overlayColourSub = void 0, this.opacitySub = void 0, this.zIndexSub = void 0, this.multilineTextBoxSub = void 0, this.previousHidingMeshManagerState = void 0, this.meshKind = void 0, this.meshOpts = void 0, this.leaderboardTop = void 0, this.meshRebuildQueued = !1, this.pC = !1, this.LG = UU.LG
      }
      initClient(UU) {
        var RU, gU, tU;
        this.colyseusEntity = UU, this.meshKind = UU.meshKind, this.meshOpts = UU.meshOpts, this.leaderboardTop = UU.leaderboardTop, this.LG.Im.add([UU.x, UU.y, UU.z], 1, 1, null, null, !1, !1, this.eId), this.LG.Im.JY(this.eId, "smoothToServerPos");
        const pU = "Person" === this.meshKind;
        this.LG.Im.JY(this.eId, "meshRotation", {
          isServerControlled: !0,
          ...pU ? {
            defaultRotationsPerSecond: .5
          } : {},
          childrenNodeParams: pU ? [{
            nodeName: "HeadMesh",
            softTolerance: wg.l,
            hardTolerance: null
          }] : []
        }), this.updateHidingMeshMgr(), this.canSeeSub = lR.p.subscribe(`otherEntitySettings|${this.eId}|canSee`, (UU => {
          this.updateHidingMeshMgr()
        }));
        const EU = () => {
          const UU = this.LG.Im.sUU(this.eId);
          if (!UU) return;
          const RU = (0, ng.j)(this.eId);
          if ("number" === typeof UU.RY) {
            var gU, tU, pU, EU;
            const PU = null === (gU = (0, Ig.j)("head", null === (pU = this.getSpec()) || void 0 === pU || null === (EU = pU.opts.textures) || void 0 === EU ? void 0 : EU.head)) || void 0 === gU || null === (tU = gU.personModel) || void 0 === tU ? void 0 : tU.fullBody;
            return this.LG.SC.iZ.setPickable(UU.RY, RU && !PU), void(0, ag.updatePersonAttachmentPickability)(this.LG, this.eId, RU)
          }
          const PU = UU.mesh;
          if (PU)
            for (const TU of [PU, ...PU.getChildMeshes(!1)]) "Yh" in TU && !TU.name.startsWith("Cape|") && (TU.Yh = RU)
        };
        this.canAttackSub = lR.p.subscribe(`otherEntitySettings|${this.eId}|canAttack`, EU), this.interactableSub = lR.p.subscribe(`otherEntitySettings|${this.eId}|interactable`, EU), this.overlayColourSub = lR.p.subscribe(`otherEntitySettingsClientifiedEId|${this.eId}|overlayColour`, (UU => {
          this.updateOverlayColour(UU)
        })), this.opacitySub = lR.p.subscribe(`otherEntitySettingsClientifiedEId|${this.eId}|opacity`, (UU => {
          this.updateOpacity(UU)
        })), this.zIndexSub = lR.p.subscribe(`otherEntitySettingsClientifiedEId|${this.eId}|zIndex`, (UU => {
          this.updateZIndex(UU)
        }));
        const PU = this.LG.FY[this.LG.AY][this.eId];
        this.updateOverlayColour(null !== (RU = null === PU || void 0 === PU ? void 0 : PU.overlayColour) && void 0 !== RU ? RU : null), this.updateOpacity(null !== (gU = null === PU || void 0 === PU ? void 0 : PU.opacity) && void 0 !== gU ? gU : 1), this.updateZIndex(null !== (tU = null === PU || void 0 === PU ? void 0 : PU.zIndex) && void 0 !== tU ? tU : 0), this.multilineTextBoxSub = (0, Jg.r)(this.LG, this.eId)
      }
      onChangeClient(UU, RU) {
        if ("xRotation" === UU || "yRotation" === UU || "zRotation" === UU)(0, Jg.v)(this.LG, this.eId, UU, RU);
        else if ("pose" === UU) {
          const UU = this.LG.Im.MUU(this.eId);
          UU && (UU.pose = RU || "standing")
        } else "meshKind" === UU || "meshOpts" === UU ? (this[UU] = RU, this.queueMeshRebuild()) : "name" === UU && "" !== RU ? this.updateHidingMeshMgr() : "leaderboardTop" === UU && (this.leaderboardTop = RU, lR.p.yh(`leaderboardTop|${this.eId}`, RU))
      }
      disposeClient() {
        this.pC = !0, this.LG.Im.deleteEntity(this.eId), lR.p.unsubscribe(this.canSeeSub), lR.p.unsubscribe(this.canAttackSub), lR.p.unsubscribe(this.interactableSub), lR.p.unsubscribe(this.overlayColourSub), lR.p.unsubscribe(this.opacitySub), lR.p.unsubscribe(this.zIndexSub), lR.p.unsubscribe(this.multilineTextBoxSub)
      }
      getCurrentHidingMeshMgrState() {
        var UU, RU;
        return {
          canSee: null !== (UU = null === (RU = this.LG.FY[this.LG.AY][this.eId]) || void 0 === RU ? void 0 : RU.canSee) && void 0 !== UU && UU,
          name: this.colyseusEntity.name,
          meshKind: this.meshKind,
          meshOpts: this.meshOpts
        }
      }
      updateHidingMeshMgr() {
        var UU, RU, gU;
        const {
          LG: tU
        } = this, {
          Im: pU
        } = tU, EU = this.getCurrentHidingMeshMgrState();
        if ((0, fg.re)(this.previousHidingMeshManagerState, EU)) return;
        if (this.previousHidingMeshManagerState = EU, pU.bY(this.eId, "hidingMeshManager"), null === (UU = tU.FY[tU.AY][this.eId]) || void 0 === UU || !UU.canSee) return;
        const PU = this.getSpec();
        if (!PU) return;
        const {
          type: TU,
          opts: qU
        } = PU;
        "Person" === TU && (qU.textures = (0, Ig.p)(qU.textures)), qU.eId = this.eId, pU.JY(this.eId, "hidingMeshManager", {
          addMeshComponent: () => {
            var UU, RU, gU;
            "Leaderboard" === TU && (qU.leaderboardTop = this.leaderboardTop);
            const EU = this.bloxd.client.meshCreator.getEntityMesh(TU, qU, (UU => {
              var RU, gU;
              if ("number" === typeof UU) {
                var pU, EU, PU;
                const RU = tU.SC.iZ;
                RU.setEntityId(UU, this.eId);
                const gU = "Person" === TU && (null === (pU = (0, Ig.j)("head", null === (PU = qU.textures) || void 0 === PU ? void 0 : PU.head)) || void 0 === pU || null === (EU = pU.personModel) || void 0 === EU ? void 0 : EU.fullBody);
                return void RU.setPickable(UU, (0, ng.j)(this.eId) && !gU)
              }
              const KU = UU;
              for (const TU of [KU, ...KU.getChildMeshes(!1)]) void 0 === TU.Yh || TU.name.startsWith("Cape|") || (TU.Yh = (0, ng.j)(this.eId), TU.metadata ??= new tU.SC.Bh, TU.metadata.eId = this.eId);
              this.updateOpacity(null !== (RU = null === (gU = tU.FY[tU.AY][this.eId]) || void 0 === gU ? void 0 : gU.opacity) && void 0 !== RU ? RU : 1)
            }));
            if (!EU) return;
            const {
              RY: PU,
              mesh: KU,
              meshOffset: cU,
              nameYOffset: GU,
              modelLoaded: jU
            } = EU;
            null === jU || void 0 === jU || jU.then((() => {
              var UU;
              (null === (UU = pU.sUU(this.eId)) || void 0 === UU ? void 0 : UU.mesh) === KU && (this.previousHidingMeshManagerState = null, this.updateHidingMeshMgr())
            }));
            const uU = null === PU ? null : tU.SC.iZ.rgU(PU, 0);
            if (pU.JY(this.eId, pU.names.mesh, {
                RY: PU,
                pgU: uU,
                mesh: KU,
                oPU: !1,
                TgU: "Leaderboard" !== TU,
                offset: cU.slice(),
                bPU: "ParticleEmitter" === TU && qU.followTargetMeshOffset ? UU => {
                  var RU;
                  og().copy(UU, cU);
                  const gU = null === (RU = pU.rRU(this.eId)) || void 0 === RU ? void 0 : RU.Nu,
                    tU = void 0 === gU ? null : pU.MUU(gU);
                  if (tU) {
                    var EU, PU;
                    const RU = this.bloxd.getEntityHeading(null !== (EU = tU.ridingVehicleEId) && void 0 !== EU ? EU : gU, !0),
                      pU = Math.sin(RU),
                      TU = Math.cos(RU);
                    UU[0] += tU.meshOffset[0] * TU + tU.meshOffset[2] * pU, UU[1] += tU.meshOffset[1], UU[2] += tU.meshOffset[2] * TU - tU.meshOffset[0] * pU;
                    const qU = null !== (PU = tU.ridingVehicleEId) && void 0 !== PU ? PU : null;
                    null !== qU && (0, Bg.e)(this.LG, qU, UU)
                  }
                } : null
              }), "Person" === TU) {
              var CU, hU, QU, eU;
              pU.JY(this.eId, pU.names.meshAttachments, {
                personFullBody: null !== (CU = null === (hU = (0, Ig.j)("head", null === (eU = qU.textures) || void 0 === eU ? void 0 : eU.head)) || void 0 === hU || null === (QU = hU.personModel) || void 0 === QU ? void 0 : QU.fullBody) && void 0 !== CU && CU
              });
              for (const UU of hg.r) {
                var WU, fU, xU;
                const RU = null === (WU = qU.textures) || void 0 === WU ? void 0 : WU[UU];
                RU && null !== (fU = (0, Ig.j)(UU, RU)) && void 0 !== fU && null !== (xU = fU.attachments) && void 0 !== xU && xU.length && mg.b.Player.meshApi.updatePlayerCosmetic(this.eId, PU, UU, RU)
              }
              pU.JY(this.eId, pU.names.moveState), pU.JY(this.eId, "updateWalkingState", {
                RY: PU,
                pgU: uU,
                walkingLegSwingDuration: wg.q
              }), pU.JY(this.eId, "humanoidMesh", {
                RY: PU,
                pgU: uU,
                heldItemPositionParams: {},
                maxWalkingAngleOverride: null
              }), pU.JY(this.eId, "animator", {
                RY: PU,
                pgU: uU,
                modelLifeformType: "Player"
              }), Yg.h.hasAnimation("Person") && pU.JY(this.eId, "rigAnimation", {
                target: "Person",
                RY: PU
              }), pU.MUU(this.eId).pose = this.colyseusEntity.pose || "standing"
            } else if ("BloxdBlock" === TU && null !== PU) {
              pU.JY(this.eId, "animator", {
                RY: PU,
                pgU: uU,
                modelLifeformType: null
              });
              const UU = (0, eg.q)(qU.blockName);
              null !== UU && pU.JY(this.eId, "rigAnimation", {
                target: UU,
                RY: PU
              })
            }
            pU.pTU(this.eId, "entityName", {
              name: this.colyseusEntity.name,
              nameYOffset: GU
            }), this.bloxd.setEntityName(this.eId, this.colyseusEntity.name), !0 === qU.autoRotate && (pU.bY(this.eId, "meshRotation"), pU.JY(this.eId, "autoRotate"));
            const {
              lineToEId: mU
            } = qU;
            (0, Qg.E)(mU) || pU.JY(this.eId, "lineToEntity", {
              lineToEId: mU
            });
            const IU = tU.FY[tU.AY][this.eId];
            this.updateOverlayColour(null !== (UU = null === IU || void 0 === IU ? void 0 : IU.overlayColour) && void 0 !== UU ? UU : null), this.updateOpacity(null !== (RU = null === IU || void 0 === IU ? void 0 : IU.opacity) && void 0 !== RU ? RU : 1), this.updateZIndex(null !== (gU = null === IU || void 0 === IU ? void 0 : IU.zIndex) && void 0 !== gU ? gU : 0)
          },
          removeMeshComponent: () => {
            "Person" !== TU && "BloxdBlock" !== TU || pU.bY(this.eId, "rigAnimation"), pU.bY(this.eId, pU.names.mesh), pU.cUU(this.eId, pU.names.meshAttachments) && pU.bY(this.eId, pU.names.meshAttachments), pU.bY(this.eId, "entityName"), pU.bY(this.eId, "autoRotate"), pU.bY(this.eId, "lineToEntity"), "Person" === TU ? (pU.bY(this.eId, pU.names.moveState), pU.bY(this.eId, "updateWalkingState"), pU.bY(this.eId, "humanoidMesh"), pU.bY(this.eId, "animator")) : "BloxdBlock" === TU && pU.bY(this.eId, "animator")
          },
          hideDist: null !== (RU = qU.hideDist) && void 0 !== RU ? RU : 80,
          movingHideDist: null !== (gU = qU.hideDist) && void 0 !== gU ? gU : 120,
          displayOutsideLoadedChunk: qU.hideDist > 100,
          immediatelyUpdate: !0,
          vc: "BloxdBlock" === TU ? qU.blockName : TU
        })
      }
      queueMeshRebuild() {
        this.meshRebuildQueued || (this.meshRebuildQueued = !0, queueMicrotask((() => {
          this.meshRebuildQueued = !1, this.pC || this.updateHidingMeshMgr()
        })))
      }
      getSpec() {
        return (0, Wg.j)({
          meshKind: this.meshKind,
          meshOpts: this.meshOpts
        })
      }
      updateOverlayColour(UU) {
        var RU, gU;
        if ("Person" !== this.meshKind) return;
        let tU = new xg.c(0, 0, 0, 0);
        if (null !== UU) {
          const RU = (0, fg.ab)(UU);
          tU = new xg.c(RU[0] / 255, RU[1] / 255, RU[2] / 255, .5)
        }
        const pU = null !== (RU = null === (gU = this.LG.Im.sUU(this.eId)) || void 0 === gU ? void 0 : gU.RY) && void 0 !== RU ? RU : null;
        null !== pU && mg.b.Player.meshApi.updateMeshOverlayColour(pU, tU)
      }
      updateZIndex(UU) {
        var RU;
        if ("Person" !== this.meshKind) return;
        const gU = null === (RU = this.LG.Im.sUU(this.eId)) || void 0 === RU ? void 0 : RU.RY;
        "number" === typeof gU && this.LG.SC.iZ.setRenderingGroupId(gU, UU)
      }
      updateOpacity(UU) {
        const RU = this.LG.Im.sUU(this.eId);
        RU && ("number" !== typeof RU.RY ? RU.mesh && "ParticleEmitter" !== this.meshKind && (0, Zg.e)(RU.mesh, UU) : mg.b.Player.meshApi.updateMeshOpacity(RU.RY, UU))
      }
    }
    var rg = gU(38569);
    class Xg {
      constructor(UU, RU) {
        this.eId = RU, this.LG = void 0, this.schema = void 0, this.LG = UU.LG
      }
      initClient(UU) {
        this.schema = UU, this.LG.Im.add([UU.x, UU.y, UU.z], .1, .1, null, null, !1, !1, this.eId), this.LG.Im.JY(this.eId, "smoothToServerPos"), rg.d.add(this.eId, this.copyOpts())
      }
      onChangeClient(UU) {
        pg.j.includes(UU) && rg.d.update(this.eId, this.copyOpts())
      }
      disposeClient() {
        rg.d.remove(this.eId), this.LG.Im.deleteEntity(this.eId)
      }
      copyOpts() {
        const {
          soundName: UU,
          volume: RU,
          refDistance: gU,
          maxHearDist: tU,
          rate: pU
        } = this.schema;
        return {
          soundName: UU,
          volume: RU,
          refDistance: gU,
          maxHearDist: tU,
          rate: pU
        }
      }
    }
    var vg = gU(3349),
      dg = gU(36313),
      Hg = gU(6152),
      Sg = gU(37314),
      sg = gU(2551),
      yg = gU(37703),
      kg = gU(8696),
      Fg = gU(38030),
      ig = gU(37297),
      Ag = gU(2927);
    class zg {
      constructor(UU, RU) {
        let gU = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 4,
          tU = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : () => performance.now();
        this.ORU = UU, this.LG = RU, this.setupBudgetMs = gU, this.now = tU, this.createStateCallbacks = void 0, this.roomStateCallbacks = void 0, this.allItems = {}, this.detachers = new Map, this.deferredSetups = new Map, this.queuedSetups = new Map, this.promotedSetups = new Set, this.setupBudgetLeftMs = void 0, this.lastRefillMs = void 0, this.roomState = void 0, this.pC = !1, this.onFrame = () => {
          this.setUpQueuedEntities(!0)
        }, this.Bx = () => {
          this.setUpQueuedEntities(this.now() - this.lastRefillMs > 100)
        }, this.setUpPromoted = () => {
          for (const UU of this.promotedSetups) {
            this.promotedSetups.delete(UU);
            const RU = this.queuedSetups.get(UU);
            RU && (this.queuedSetups.delete(UU), this.timedSetup(RU, UU))
          }
        }, this.createStateCallbacks = (0, kg.getStateCallbacks)(UU), this.roomStateCallbacks = this.createStateCallbacks(UU.state), this.roomState = UU.state, this.setupBudgetLeftMs = gU, this.lastRefillMs = tU()
      }
      setup() {
        this.setupEntityHandlers(), this.setupItemHandlers(), this.ORU.onStateChange(this.setUpPromoted), this.LG.on("beforeInputs", this.onFrame), this.LG.on("HG", this.Bx)
      }
      setUpQueuedEntities(UU) {
        var RU;
        if ((null === (RU = (0, sg.c)().client.getMsgHandler()) || void 0 === RU ? void 0 : RU.ORU) !== this.ORU) return this.LG.off("beforeInputs", this.onFrame), this.LG.off("HG", this.Bx), this.queuedSetups.clear(), void this.promotedSetups.clear();
        if (UU && (this.setupBudgetLeftMs = this.setupBudgetMs, this.lastRefillMs = this.now()), this.setUpPromoted(), 0 !== this.queuedSetups.size)
          for (og().copy(Mg, this.LG.Im.Hx(this.LG.AY)); this.setupBudgetLeftMs > 0;) {
            const UU = this.nearestQueued(Mg);
            if (null === UU) return;
            this.setUpIfQueued(UU), this.setUpPromoted()
          }
      }
      nearestQueued(UU) {
        let RU = null,
          gU = 1 / 0;
        return this.queuedSetups.forEach(((tU, pU) => {
          const EU = function(UU, RU) {
            return (RU.x - UU[0]) ** 2 + (RU.y - UU[1]) ** 2 + (RU.z - UU[2]) ** 2
          }(UU, tU);
          (null === RU || EU < gU) && (RU = pU, gU = EU)
        })), RU
      }
      setUpOrQueue(UU, RU) {
        0 === this.queuedSetups.size && this.setupBudgetLeftMs > 0 || this.mustSetUpNow(UU, RU) ? this.timedSetup(UU, RU) : this.queuedSetups.set(RU, UU)
      }
      mustSetUpNow(UU, RU) {
        const gU = this.LG.jUU;
        if (RU === gU) return !0;
        const tU = this.roomState.entities.get(gU);
        return !(!tU || tU.ridingVehicleEId !== RU && tU.followingEId !== RU) || (Dg(UU.type) === Cg.c || (0, sg.c)().getFollowingEntities(RU).length > 0)
      }
      setUpIfQueued(UU) {
        const RU = this.queuedSetups.get(UU);
        RU && (this.queuedSetups.delete(UU), this.timedSetup(RU, UU))
      }
      promoteIfQueued(UU) {
        null !== UU && this.queuedSetups.has(UU) && this.promotedSetups.add(UU)
      }
      timedSetup(UU, RU) {
        const gU = this.now();
        this.setupEntity(UU, RU), this.setupBudgetLeftMs -= this.now() - gU
      }
      setupEntityHandlers() {
        this.roomStateCallbacks.entities.Wm(((UU, RU) => {
          this.LG.jUU ? this.setUpOrQueue(UU, RU) : this.deferEntitySetupUntilInitInfo(UU, RU)
        })), this.roomStateCallbacks.entities.Kw(((UU, RU) => {
          const gU = this.deferredSetups.get(RU);
          gU && (lR.p.unsubscribe(gU), this.deferredSetups.delete(RU)), this.queuedSetups.delete(RU), this.detach(RU), (0, sg.c)().client.disposeEntity(RU)
        }))
      }
      deferEntitySetupUntilInitInfo(UU, RU) {
        const gU = lR.p.cW("initInfoReceived", (() => {
          this.deferredSetups.delete(RU), this.setUpOrQueue(UU, RU)
        }));
        this.deferredSetups.set(RU, gU), (0, vg.onGameResetOnce)((() => {
          this.deferredSetups.get(RU) === gU && (lR.p.unsubscribe(gU), this.deferredSetups.delete(RU)), (0, sg.c)().updatePositionAndPhysics(this.LG.AY, {
            type: Hg.u.DEFAULT,
            tier: null
          }, !0), (0, sg.c)().takeHeldPlayerBodySize(this.LG.AY);
          const UU = this.LG.Im.bUU(this.LG.AY);
          UU && (UU.movementType = Hg.r.NORMAL)
        }))
      }
      setupEntity(UU, RU) {
        const gU = RU === this.LG.jUU;
        if (gU)(0, sg.c)().client.Vk(this.LG.AY, null, null);
        else {
          const {
            type: gU
          } = UU, tU = Dg(gU);
          if (void 0 === tU) return void
          function(UU, RU) {
            const gU = String(UU);
            if (Lg.has(gU)) return;
            Lg.add(gU);
            const tU = gU.length > 80 ? `${gU.slice(0,80)}...` : gU,
              pU = `No client handler for entity type ${JSON.stringify(tU)}, so entity ${RU} is not set up`;
            console.warn(pU), (0, Ag.e)("uncaught", pU, "unknown_entity_type")
          }(gU, RU);
          (0, sg.c)().client.Vk(RU, UU, new tU((0, sg.c)(), RU, gU))
        }
        const tU = this.createStateCallbacks(UU);
        if (gU) return this.setupMapSchemaCallbacks(RU, UU, tU, "armour"), this.setupScalarField(RU, UU, tU, "scale"), this.setupScalarField(RU, UU, tU, "ridingVehicleEId"), this.setupScalarField(RU, UU, tU, "followingEId"), this.setupScalarField(RU, UU, tU, "followingOffset"), void this.setupScalarField(RU, UU, tU, "shouldMatchFollowingEntityRotation");
        for (const pU of Gg(UU.constructor)) UU[pU] instanceof gg.MapSchema ? this.setupMapSchemaCallbacks(RU, UU, tU, pU) : this.setupScalarField(RU, UU, tU, pU)
      }
      setupMapSchemaCallbacks(UU, RU, gU, tU) {
        const pU = gU[tU],
          EU = new Map;
        pU.Wm(((gU, pU) => {
          if (this.onEntityFieldChange(UU, RU, tU, {
              key: pU,
              value: gU
            }), !(gU instanceof gg.Schema)) return;
          const PU = this.createStateCallbacks(gU),
            TU = [];
          for (const EU of Gg(gU.constructor)) TU.push(this.listenForFutureChanges(PU, EU, (() => {
            this.onEntityFieldChange(UU, RU, tU, {
              key: pU,
              value: gU
            })
          })));
          EU.set(pU, (() => {
            for (const UU of TU) UU()
          }))
        })), pU.Kw(((gU, pU) => {
          var PU;
          null === (PU = EU.get(pU)) || void 0 === PU || PU(), EU.delete(pU), this.onEntityFieldChange(UU, RU, tU, {
            key: pU,
            value: null
          })
        })), this.addDetacher(UU, (() => {
          for (const UU of EU.values()) UU();
          EU.clear()
        }))
      }
      setupScalarField(UU, RU, gU, tU) {
        this.onEntityFieldChange(UU, RU, tU, RU[tU]);
        const pU = this.listenForFutureChanges(gU, tU, (gU => {
          this.onEntityFieldChange(UU, RU, tU, gU)
        }));
        this.addDetacher(UU, pU)
      }
      addDetacher(UU, RU) {
        let gU = this.detachers.get(UU);
        gU || (gU = [], this.detachers.set(UU, gU)), gU.push(RU)
      }
      detach(UU) {
        for (const gU of null !== (RU = this.detachers.get(UU)) && void 0 !== RU ? RU : []) {
          var RU;
          gU()
        }
        this.detachers.delete(UU)
      }
      listenForFutureChanges(UU, RU, gU) {
        return UU.listen(RU, gU, !1)
      }
      onEntityFieldChange(UU, RU, gU, tU) {
        switch (gU) {
          case "ridingVehicleEId": {
            this.promoteIfQueued(tU);
            const RU = this.LG.Im.MUU((0, dg.c)(UU));
            RU && (RU.ridingVehicleEId = tU);
            break
          }
          case "armour":
            this.handleArmourChange(UU, tU);
            break;
          case "followingEId":
            this.promoteIfQueued(tU), this.handleFollowingEIdChange(UU, RU, tU);
            break;
          case "xRotation":
          case "yRotation":
          case "zRotation":
            this.handleRotationChange(UU, gU, tU);
            break;
          case "scale":
            this.handleScaleChange(UU, tU);
            break;
          case "baseRenderHeading":
            this.handleBaseRenderHeadingChange(UU, tU);
            break;
          case "followingOffset":
            this.handleFollowingOffsetChange(UU, tU);
            break;
          case "shouldMatchFollowingEntityRotation":
            this.handleShouldMatchFollowingEntityRotationChange(UU, tU);
            break;
          case "x":
          case "y":
          case "z":
            return void this.handlePositionChange(UU, gU, tU)
        }(0, sg.c)().client.updateEntityField(UU, gU, tU)
      }
      handleArmourChange(UU, RU) {
        var gU, tU;
        const {
          key: pU,
          value: EU
        } = RU;
        (0, mg.t)(UU, pU, null !== (gU = null === EU || void 0 === EU ? void 0 : EU.itemName) && void 0 !== gU ? gU : null, null !== (tU = null === EU || void 0 === EU ? void 0 : EU.enchantmentTier) && void 0 !== tU ? tU : null)
      }
      handleFollowingEIdChange(UU, RU, gU) {
        const tU = (0, dg.c)(UU),
          pU = tU === this.LG.AY;
        if (this.LG.Im.bY(tU, this.LG.Im.names.MI), gU) this.LG.Im.bY(tU, "smoothToServerPos"), this.LG.Im.JY(tU, this.LG.Im.names.MI, {
          Nu: (0, dg.c)(gU),
          offset: Array.from(RU.followingOffset),
          XRU: RU.shouldMatchFollowingEntityRotation,
          SRU: !0,
          sRU: (UU, tU) => {
            if (og().copy(UU, RU.followingOffset), RU.ridingVehicleEId === gU) {
              const RU = (0, dg.c)(gU),
                pU = (0, sg.c)().getEntityHeading(RU, tU);
              og().gp(UU, UU, og().ZERO, pU)
            }
          }
        });
        else if (!pU) {
          this.LG.Im.cUU(tU, "smoothToServerPos") || this.LG.Im.JY(tU, "smoothToServerPos");
          const UU = this.LG.Im.getState(tU, "smoothToServerPos"),
            RU = this.LG.Im.Hk(tU).position;
          (0, ig.setServerPosition)(UU, RU[0], RU[1], RU[2])
        }
      }
      handleRotationChange(UU, RU, gU) {
        const tU = "xRotation" === RU ? 0 : "yRotation" === RU ? 1 : 2;
        for (const pU of (0, sg.c)().getFollowingEntities(UU)) {
          const UU = this.LG.Im.getState(pU, "meshRotation"),
            RU = this.LG.Im.rRU(pU);
          UU && RU.XRU && (UU.serverSetRotation[tU] = gU)
        }
      }
      handleScaleChange(UU, RU) {
        const gU = (0, dg.c)(UU);
        if (lR.p.yh(`entityScale|${gU}`, RU), gU === this.LG.AY) {
          var tU;
          (0, sg.c)().removeFromEyeHeightCache(gU);
          const UU = this.LG.Im.bUU(this.LG.AY),
            RU = null !== (tU = null === UU || void 0 === UU ? void 0 : UU.physicsState) && void 0 !== tU ? tU : {
              type: Hg.u.DEFAULT,
              tier: null
            };
          return void(0, sg.c)().updatePositionAndPhysics(this.LG.AY, RU, !1)
        }
        const pU = (0, sg.c)().getLifeformType(gU);
        if (null === pU) return;
        const {
          physicsBodyWidth: EU,
          physicsBodyHeight: PU
        } = (0, Fg.f)(RU, pU);
        this.LG.Im.BRU(gU, EU, PU, EU)
      }
      handleBaseRenderHeadingChange(UU, RU) {
        const gU = this.LG.Im.getState(UU, "meshRotation");
        gU && (gU.baseRenderRotation[1] = RU);
        for (const tU of (0, sg.c)().getFollowingEntities(UU)) {
          const UU = this.LG.Im.getState(tU, "meshRotation"),
            gU = this.LG.Im.rRU(tU);
          UU && gU.XRU && (UU.baseRenderRotation[1] = RU)
        }
      }
      handleFollowingOffsetChange(UU, RU) {
        const gU = this.LG.Im.rRU((0, dg.c)(UU));
        if (gU && gU.offset) {
          const UU = RU ? Array.from(RU) : og().ZERO;
          gU.offset[0] = UU[0], gU.offset[1] = UU[1], gU.offset[2] = UU[2]
        }
      }
      handleShouldMatchFollowingEntityRotationChange(UU, RU) {
        const gU = this.LG.Im.rRU((0, dg.c)(UU));
        gU && (gU.XRU = null === RU || void 0 === RU || RU)
      }
      handlePositionChange(UU, RU, gU) {
        if (this.LG.Im.cUU(UU, "smoothToServerPos")) {
          const tU = this.LG.Im.getState(UU, "smoothToServerPos");
          (0, ig.setServerPositionAxis)(tU, Ng[RU], gU)
        }
      }
      setupItemHandlers() {
        this.roomStateCallbacks.items.Wm(((UU, RU) => {
          this.allItems[RU] = UU, (0, Sg.j)(this.LG, RU, [UU.x, UU.y, UU.z], UU.id, {
            amount: UU.amount,
            attributes: JSON.parse(UU.attributes),
            Ng: (0, OR.d)(this.LG).cantPickUpItem(RU),
            size: UU.size,
            predictedAt: (0, sg.c)().client.itemDropPrediction.onServerItemAdded(RU)
          });
          const gU = this.createStateCallbacks(UU);
          for (const tU of Gg(Pg)) this.onItemFieldChange(RU, tU, UU[tU]), this.addDetacher(RU, this.listenForFutureChanges(gU, tU, (UU => {
            this.onItemFieldChange(RU, tU, UU)
          })))
        })), this.roomStateCallbacks.items.Kw(((UU, RU) => {
          delete this.allItems[RU], this.detach(RU), (0, sg.c)().client.itemDropPrediction.onServerItemRemoved(RU), this.LG.Im.cUU(RU, this.LG.Im.names.itemState) && this.LG.Im.deleteEntity(RU), (0, OR.d)(this.LG).disposeEntity(RU)
        }))
      }
      onItemFieldChange(UU, RU, gU) {
        if (RU in Ng) {
          if (this.LG.Im.cUU(UU, "itemState")) {
            const tU = this.LG.Im.getState(UU, "smoothToServerPos");
            (0, ig.setServerPositionAxis)(tU, Ng[RU], gU), (0, sg.c)().client.itemDropPrediction.onServerItemMoved(UU)
          }
          return
        }
        if (!this.LG.Im.cUU(UU, "itemState")) return;
        const tU = this.LG.Im.getState(UU, "itemState");
        "amount" === RU && gU !== tU.amount && (tU.creationTime = Date.now()), tU[RU] = "attributes" === RU ? JSON.parse(gU) : gU
      }
      dispose() {
        if (!this.pC) {
          this.pC = !0, this.LG.off("beforeInputs", this.onFrame), this.LG.off("HG", this.Bx), this.queuedSetups.clear(), this.promotedSetups.clear();
          for (const UU of this.deferredSetups.values()) lR.p.unsubscribe(UU);
          this.deferredSetups.clear(), this.LG.Im.bY(this.LG.AY, this.LG.Im.names.MI);
          for (const UU in this.allItems) this.LG.Im.deleteEntity(UU), delete this.allItems[UU];
          for (const UU of [...this.detachers.keys()]) this.detach(UU);
          (0, OR.d)(this.LG).clear();
          for (const UU of (0, sg.c)().client.iterateEntityIds())(0, sg.c)().client.disposeEntity(UU)
        }
      }
    }
    const Mg = [0, 0, 0];

    function Dg(UU) {
      if ("string" !== typeof UU) return;
      const RU = UU.indexOf("|"),
        gU = -1 === RU ? UU : UU.slice(0, RU),
        tU = Og();
      return Object.hasOwn(tU, gU) ? tU[gU] : void 0
    }
    const Lg = new Set;
    const Ng = {
      x: 0,
      y: 1,
      z: 2
    };
    let lg = null;

    function Og() {
      return null !== lg || (lg = {
        ...Object.fromEntries(pg.m.map((UU => {
          const {
            vc: RU
          } = (0, yg.e)(UU);
          return [UU, RU]
        }))),
        Pebble: Cg.c,
        Snowball: Cg.c,
        "Snowball Launcher": Cg.c,
        "Reinforced Pebble": Cg.c,
        Bullet: Cg.c,
        "Reinforced Ball": Cg.c,
        Ball: Cg.c,
        Mango: Cg.c,
        "Moonstone Orb": Cg.c,
        ...Object.fromEntries(tg.p.map((UU => [(0, fg.$b)(UU), Cg.c]))),
        Arrow: Cg.c,
        "Arrow of Speed": Cg.c,
        "Arrow of Poison": Cg.c,
        "Arrow of Slowness": Cg.c,
        "Arrow of Weakness": Cg.c,
        "Arrow of Knockback": Cg.c,
        "Arrow of Strength": Cg.c,
        "Arrow of Invisibility": Cg.c,
        "Arrow of Jumping": Cg.c,
        "Arrow of Defense": Cg.c,
        "Arrow of Instant Healing": Cg.c,
        "Arrow of Instant Damage": Cg.c,
        "Arrow of Regeneration": Cg.c,
        "Arrow of Haste": Cg.c,
        "Arrow of Shield": Cg.c,
        "Arrow of Double Jump": Cg.c,
        "Arrow of Heat Resistance": Cg.c,
        "Arrow of X-Ray Vision": Cg.c,
        "Arrow of Mining Yield": Cg.c,
        "Arrow of Brain Rot": Cg.c,
        "Arrow of Milk": Cg.c,
        Fireball: Cg.c,
        "Bouncy Bomb": Cg.c,
        RPG: Cg.c,
        "Obby RPG": Cg.c,
        "Super RPG": Cg.c,
        "Grenade Launcher": Cg.c,
        Iceball: Cg.c,
        Coconut: Cg.c,
        "Splash Speed Potion": Cg.c,
        "Splash Defense Potion": Cg.c,
        "Splash Strength Potion": Cg.c,
        "Splash Invisibility Potion": Cg.c,
        "Splash Jump Potion": Cg.c,
        "Splash Knockback Potion": Cg.c,
        "Splash Poison Potion": Cg.c,
        "Splash Speed Potion II": Cg.c,
        "Splash Defense Potion II": Cg.c,
        "Splash Strength Potion II": Cg.c,
        "Splash Jump Potion II": Cg.c,
        "Splash Knockback Potion II": Cg.c,
        "Splash Poison Potion II": Cg.c,
        "Splash Slowness Potion": Cg.c,
        "Splash Slowness Potion II": Cg.c,
        "Splash Weakness Potion": Cg.c,
        "Splash Weakness Potion II": Cg.c,
        "Splash Milk Potion": Cg.c,
        "Splash Instant Damage Potion": Cg.c,
        "Splash Instant Damage Potion II": Cg.c,
        "Splash Instant Healing Potion": Cg.c,
        "Splash Instant Healing Potion II": Cg.c,
        "Splash Regeneration Potion": Cg.c,
        "Splash Regeneration Potion II": Cg.c,
        "Splash Haste Potion": Cg.c,
        "Splash Haste Potion II": Cg.c,
        "Splash Shield Potion": Cg.c,
        "Splash Shield Potion II": Cg.c,
        "Splash Double Jump Potion": Cg.c,
        "Splash Heat Resistance Potion": Cg.c,
        "Splash X-Ray Vision Potion": Cg.c,
        "Splash Mining Yield Potion": Cg.c,
        "Splash Mining Yield Potion II": Cg.c,
        "Splash Brain Rot Potion": Cg.c,
        "Yellow Paintball Gun": Cg.c,
        "White Paintball Gun": Cg.c,
        "Red Paintball Gun": Cg.c,
        "Purple Paintball Gun": Cg.c,
        "Pink Paintball Gun": Cg.c,
        "Orange Paintball Gun": Cg.c,
        "Magenta Paintball Gun": Cg.c,
        "Lime Paintball Gun": Cg.c,
        "Light Gray Paintball Gun": Cg.c,
        "Light Blue Paintball Gun": Cg.c,
        "Green Paintball Gun": Cg.c,
        "Gray Paintball Gun": Cg.c,
        "Cyan Paintball Gun": Cg.c,
        "Brown Paintball Gun": Cg.c,
        "Blue Paintball Gun": Cg.c,
        "Black Paintball Gun": Cg.c,
        "Yellow Heavy Paintball Gun": Cg.c,
        "White Heavy Paintball Gun": Cg.c,
        "Red Heavy Paintball Gun": Cg.c,
        "Purple Heavy Paintball Gun": Cg.c,
        "Pink Heavy Paintball Gun": Cg.c,
        "Orange Heavy Paintball Gun": Cg.c,
        "Magenta Heavy Paintball Gun": Cg.c,
        "Lime Heavy Paintball Gun": Cg.c,
        "Light Gray Heavy Paintball Gun": Cg.c,
        "Light Blue Heavy Paintball Gun": Cg.c,
        "Green Heavy Paintball Gun": Cg.c,
        "Gray Heavy Paintball Gun": Cg.c,
        "Cyan Heavy Paintball Gun": Cg.c,
        "Brown Heavy Paintball Gun": Cg.c,
        "Blue Heavy Paintball Gun": Cg.c,
        "Black Heavy Paintball Gun": Cg.c,
        "Toxin Ball": Cg.c,
        "Splash Aura XP Potion": Cg.c,
        "Splash Aura XP Potion II": Cg.c,
        "Arrow of Aura XP": Cg.c,
        Firecracker: Cg.c,
        "Rainbow Firecracker": Cg.c,
        "White Firecracker": Cg.c,
        "Orange Firecracker": Cg.c,
        "Magenta Firecracker": Cg.c,
        "Light Blue Firecracker": Cg.c,
        "Yellow Firecracker": Cg.c,
        "Lime Firecracker": Cg.c,
        "Pink Firecracker": Cg.c,
        "Gray Firecracker": Cg.c,
        "Light Gray Firecracker": Cg.c,
        "Cyan Firecracker": Cg.c,
        "Purple Firecracker": Cg.c,
        "Blue Firecracker": Cg.c,
        "Brown Firecracker": Cg.c,
        "Green Firecracker": Cg.c,
        "Red Firecracker": Cg.c,
        "Black Firecracker": Cg.c,
        "Firecracker Pebble": Cg.c,
        "Rainbow Firecracker Pebble": Cg.c,
        "White Firecracker Pebble": Cg.c,
        "Orange Firecracker Pebble": Cg.c,
        "Magenta Firecracker Pebble": Cg.c,
        "Light Blue Firecracker Pebble": Cg.c,
        "Yellow Firecracker Pebble": Cg.c,
        "Lime Firecracker Pebble": Cg.c,
        "Pink Firecracker Pebble": Cg.c,
        "Gray Firecracker Pebble": Cg.c,
        "Light Gray Firecracker Pebble": Cg.c,
        "Cyan Firecracker Pebble": Cg.c,
        "Purple Firecracker Pebble": Cg.c,
        "Blue Firecracker Pebble": Cg.c,
        "Brown Firecracker Pebble": Cg.c,
        "Green Firecracker Pebble": Cg.c,
        "Red Firecracker Pebble": Cg.c,
        "Black Firecracker Pebble": Cg.c,
        "Blinding Pebble": Cg.c,
        Poop: Cg.c,
        "Wood Boomerang": Cg.c,
        "Stone Boomerang": Cg.c,
        "Iron Boomerang": Cg.c,
        "Gold Boomerang": Cg.c,
        "Diamond Boomerang": Cg.c,
        "Amethite Boomerang": Cg.c,
        "Magmasteel Boomerang": Cg.c,
        "Rubellite Boomerang": Cg.c,
        "Serpentite Boomerang": Cg.c,
        "Moonstone Boomerang": Cg.c,
        "67 Base Projectile": Cg.c,
        "67 Boosted Projectile": Cg.c,
        "Capitano Grenade": Cg.c,
        "Scatter Pellet": Cg.c,
        "Lucky Bomb": Cg.c,
        "Unlucky Bomb": Cg.c,
        "Swap Orb": Cg.c,
        Mesh: Vg,
        AudioEntity: Xg
      }), lg
    }
  },
  38544: (UU, RU, gU) => {
    gU.d(RU, {
      d: () => EU,
      h: () => PU
    });
    var tU = gU(581),
      pU = gU(37258);
    const EU = 4e4;
    class PU {
      constructor() {
        let UU = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Date.now;
        this.now = UU, this.editedAt = new Map, this.lastChunkX = NaN, this.lastChunkY = NaN, this.lastChunkZ = NaN, this.lastChunkId = ""
      }
      noteEdit(UU, RU, gU) {
        const EU = (0, tU.K)(UU),
          PU = (0, tU.K)(RU),
          TU = (0, tU.K)(gU),
          qU = this.now();
        if (EU !== this.lastChunkX || PU !== this.lastChunkY || TU !== this.lastChunkZ) {
          this.lastChunkX = EU, this.lastChunkY = PU, this.lastChunkZ = TU, this.lastChunkId = (0, pU.d)(EU, PU, TU), this.editedAt.delete(this.lastChunkId), this.editedAt.set(this.lastChunkId, qU);
          for (const [UU, RU] of this.editedAt) {
            if (RU >= qU - 3e5) break;
            this.editedAt.delete(UU)
          }
        } else this.editedAt.set(this.lastChunkId, qU)
      }
      chunksEditedSince(UU) {
        const RU = [];
        for (const [gU, tU] of this.editedAt) tU >= UU && RU.push(gU);
        return RU
      }
    }
  },
  38628: (UU, RU, gU) => {
    gU.d(RU, {
      b: () => KR,
      d: () => vR,
      h: () => bR,
      i: () => dR
    });
    var tU = gU(3349),
      pU = gU(8400),
      EU = gU(36266),
      PU = gU(1403),
      TU = gU(36307),
      qU = gU(38569),
      KU = gU(38517),
      cU = gU(3420),
      GU = gU(37399),
      jU = gU(1238),
      uU = gU(299),
      CU = gU(24),
      hU = gU(1821),
      QU = gU(96),
      eU = gU(34),
      WU = gU(1844),
      fU = gU(1771),
      xU = gU(2677);
    class mU {
      constructor(UU) {
        this.storeForMs = UU, this.clicks = new xU.d
      }
      click() {
        this.clicks.enqueue(Date.now());
        const UU = Date.now() - this.storeForMs;
        for (; this.clicks.size > 0 && this.clicks.peek() < UU;) this.clicks.dequeue()
      }
      getNumClicksInMs(UU) {
        let RU = 0;
        return this.clicks.forEach((gU => {
          gU > Date.now() - UU && RU++
        })), RU
      }
      getMaxClickSeparationInMs(UU) {
        if (0 === this.clicks.size) return this.storeForMs;
        let RU = 0,
          gU = Date.now() - UU;
        this.clicks.forEach((tU => {
          tU < Date.now() - UU || (RU = Math.max(RU, Math.abs(tU - gU)), gU = tU)
        }));
        const tU = Math.abs(Date.now() - gU);
        return Math.max(RU, tU)
      }
    }
    class IU {
      constructor(UU) {
        this.storeForMs = UU, this.clickDownDurations = new xU.d
      }
      registerClickDownDuration(UU) {
        this.clickDownDurations.enqueue({
          dur: UU,
          atTime: Date.now()
        });
        const RU = Date.now() - this.storeForMs;
        for (; this.clickDownDurations.size > 0 && this.clickDownDurations.peek().atTime < RU;) this.clickDownDurations.dequeue()
      }
      clickDownDurationsCheck(UU) {
        if (UU > this.storeForMs) return console.error("overDuration is greater than storeForMs"), "0:0";
        let RU = 0,
          gU = 0;
        return this.clickDownDurations.forEach((tU => {
          tU.atTime > Date.now() - UU && (RU++, gU = Math.max(gU, tU.dur))
        })), `${RU}:${gU}`
      }
    }
    var JU = gU(36072),
      wU = gU(38631),
      nU = gU(21),
      bU = gU(2551),
      oU = gU(1316),
      ZU = gU(38549),
      aU = gU(4099),
      YU = gU(135),
      BU = gU(37711),
      VU = gU(37940),
      rU = gU(581),
      XU = gU(36066),
      vU = gU(10),
      dU = gU(9078),
      HU = gU(1217),
      SU = gU(189),
      sU = gU(38640),
      yU = gU(38646),
      kU = gU(37749),
      FU = gU(38660),
      iU = gU(37635),
      AU = gU(3099),
      zU = gU(1567),
      MU = gU(36191),
      DU = gU(2624),
      LU = gU(38654),
      NU = gU(37479);
    const lU = {
      forward: "freeCamForward",
      backward: "freeCamBackward",
      left: "freeCamLeft",
      right: "freeCamRight",
      jump: "freeCamUp",
      crouch: "freeCamDown"
    };

    function OU() {
      var UU, RU;
      return !(null === (UU = (0, bU.c)().client) || void 0 === UU || null === (RU = UU.freeCameraController) || void 0 === RU || !RU.movesFly())
    }

    function UR(UU) {
      const RU = UU.on.bind(UU);
      UU.on = (UU, gU) => {
        WU.C.has(UU) ? RU(UU, gU) : RU(UU, (RU => {
          var tU;
          return null !== (tU = (0, bU.c)().client) && void 0 !== tU && tU.isReplayMode() ? function(UU) {
            return UU in lU
          }(UU) && OU() ? gU(RU) : void 0 : gU(RU)
        }))
      }
    }
    const RR = 5e3,
      gR = 1;
    let tR, pR = gR,
      ER = 0;
    const PR = !0;
    let TR = PR;
    hU.b.subscribe("_ignoreBasicBoards", (UU => {
      TR = UU
    })), (0, tU.onGameReset)((() => {
      TR = PR
    }));
    let qR = null;
    const KR = () => qR;
    let cR, GR, jR;
    var uR, CR, hR, QR, eR, WR, fR, xR, mR;
    const IR = [2, 0, 1, 55, 96, "a", 219, 7, "e", "f", 4, 8, 255, "length", "b", 40, "d", 134, 195, "undefined", void 0, 28, "c", 63, 6, "fromCodePoint", 12, "push", 81, 204, 152, 31, 47, 230, 86, 91, 118, 8191, 88, 13, 14, 3, 227, 9, 222, 5, 205, 1023, 214, 65536, 10, 55296, 56320, 225, 129, 128, 15, 18, 137, 52, 90, 64, 46, "i", "g", 164, 192, 209, 216, 178, 22, 224, 240, !1, 188, 108, 66, 60, "h", 174, 127, 43, 220, 92, 25, 237, 191, 149, !0, 228, 49, 65, 104, 172, "js", 166, 68, 157, 32, 241, 215, 187, 24, null, 146, 202, 162, 181, 239, 221, 156, 95, 232, 61, 100, 97, 175, 56, 167, 223];

    function JR(...UU) {
      return UU[IR[13]] = IR[2], typeof QR !== IR[19] && QR ? (new QR).decode(new eR(UU[IR[1]])) : typeof WR !== IR[19] && WR ? WR.from(UU[IR[1]]).toString("utf-8") : mR(UU[IR[1]])
    }

    function wR() {}

    function nR() {
      nR = function() {}
    }

    function bR(UU) {
      function RU() {
        return UU.Im.QRU(UU.AY)
      }
      UR(UU.inputs.down), UR(UU.inputs.up);
      for (const tU of ["forward", "backward", "left", "right", "sprint", "jump", "crouch"]) {
        const RU = (RU, gU) => {
          var pU, EU;
          if (OU()) {
            var PU;
            const pU = lU[tU];
            var TU, qU;
            if (pU) null === (TU = (0, bU.c)().client) || void 0 === TU || null === (qU = TU.freeCameraController) || void 0 === qU || qU.handlefreeCamKeyPress(pU, RU, gU);
            return void(gU || null !== (PU = (0, bU.c)().client) && void 0 !== PU && PU.isReplayMode() || (UU.Im.JRU()[tU] = !1))
          }
          if (null !== (pU = (0, bU.c)().client) && void 0 !== pU && null !== (EU = pU.freeCameraController) && void 0 !== EU && EU.isKeyPressOverriden(RU)) return;
          UU.Im.JRU()[tU] = gU
        };
        UU.inputs.down.on(tU, (UU => RU(UU, !0))), UU.inputs.up.on(tU, (UU => RU(UU, !1)))
      }
      UU.inputs.down.on("crouch", (() => {
        if (OU()) return;
        if (!UU.Qm.canCrouch) return;
        const RU = UU.Im.JRU();
        nU.b.get("clientEscMenuOptions").crouchIsToggle && (RU.crouchToggled = !RU.crouchToggled && !RU.padSneakToggled), RU.padSneakToggled = !1
      }));
      const gU = () => {
        const UU = RU();
        UU.isGun() && UU.inaccuracyCalculator.jump()
      };
      UU.inputs.down.on("jump", (UU => {
        OU() || (gU(), cR(UU))
      }));
      for (const tU of WU.l) UU.inputs.down.on(tU, (UU => {
        var RU, gU;
        null !== (RU = (0, bU.c)().client) && void 0 !== RU && null !== (gU = RU.freeCameraController) && void 0 !== gU && gU.handlefreeCamKeyPress(tU, UU, !0) && (UU.preventDefault(), UU.stopPropagation())
      })), UU.inputs.up.on(tU, (UU => {
        var RU, gU;
        null !== (RU = (0, bU.c)().client) && void 0 !== RU && null !== (gU = RU.freeCameraController) && void 0 !== gU && gU.handlefreeCamKeyPress(tU, UU, !1) && (UU.preventDefault(), UU.stopPropagation())
      }));
      UU.inputs.down.on("recordGame", (() => {
        var UU, RU;
        null === (UU = (0, bU.c)().client) || void 0 === UU || null === (RU = UU.gameRecorder) || void 0 === RU || RU.toggleRecording()
      })), UU.inputs.down.on("recordClip", (() => {
        var UU, RU;
        (0, JU.c)() || null === (UU = (0, bU.c)().client) || void 0 === UU || null === (RU = UU.gameRecorder) || void 0 === RU || RU.saveClip()
      }));
      for (const tU of WU.C) UU.inputs.down.on(tU, (() => {
        var UU;
        if ((0, wU.b)()) return;
        if ("replayViewerOpen" === tU) return void CU.p.yh("replayViewer|requested", "toggle");
        const RU = null === (UU = (0, bU.c)().client) || void 0 === UU ? void 0 : UU.gameReplayer;
        ((0, JU.c)() || null !== RU && void 0 !== RU && RU.isReplayMode()) && (null === RU || void 0 === RU || RU.handleAction(tU))
      }));
      const PU = new mU(3e4),
        GU = new IU(4e4);
      let eU = 0;
      const xU = UU => {
          let RU = 0,
            gU = null;
          const tU = RU => null !== RU && RU === gU && (gU = null, UU(), !0);
          return {
            press: () => (RU++, (0, sU.d)() || (tU(gU), gU = RU), RU),
            owns: UU => UU === gU,
            release: tU
          }
        },
        aU = (UU, gU) => {
          gU && dR(jU.b.TouchDownFirePrimary), UU ? dU() : ((0, VU.h)(), RU().hgU()), gU || dR(jU.b.DownFirePrimary), vR(!0), PU.click();
          const pU = PU.getMaxClickSeparationInMs(3e4) < 1e3 / 30,
            EU = PU.getMaxClickSeparationInMs(1e4) < 20,
            TU = PU.getMaxClickSeparationInMs(4e3) < 1e3 / 70;
          if (pU || EU || TU) {
            let UU;
            if (pU) UU = 30;
            else if (EU) UU = 50;
            else {
              if (!TU) throw new Error("???");
              UU = 70
            }(0, tU.sendColyMessage)(cU.Wj, UU)
          }
        },
        YU = xU((() => {
          const UU = Date.now() - eU;
          GU.registerClickDownDuration(UU), RU().jgU(), dR(jU.b.UpFirePrimary), vR(!1);
          const gU = GU.clickDownDurationsCheck(4e4);
          (0, tU.sendColyMessage)(cU.Cg, gU)
        }));
      let BU = 0;
      UU.inputs.down.on("primary-fire", (function(UU) {
        BU = YU.press(), YU.owns(BU) && (eU = Date.now(), Math.abs(performance.now() - UU.timeStamp) > 5e3 || (aU(UU.altKey, "changedTouches" in UU), cR(UU)))
      })), UU.inputs.up.on("primary-fire", (function(UU) {
        YU.release(BU) && cR(UU, !0)
      }));
      const rU = () => {
          RU().UKU(), dR(jU.b.DownFireSecondary), vR(!0), UU.N9 && !UU.N9.position && (0, KU.g)()
        },
        XU = xU((() => {
          RU().GgU(), dR(jU.b.UpFireSecondary), vR(!1)
        }));
      let vU = 0;
      UU.inputs.down.on("alt-fire", (function(UU) {
        vU = XU.press(), XU.owns(vU) && (rU(), cR(UU))
      })), UU.inputs.up.on("alt-fire", (function(UU) {
        XU.release(vU) && cR(UU, !0)
      }));
      const dU = () => RU().tKU();
      UU.inputs.down.on("mid-fire", (() => {
        (0, sU.d)() || dU()
      }));
      const FU = UU => {
          (0, tU.sendColyMessage)(cU.Ih, UU, !0)
        },
        tR = UU => {
          (0, tU.sendColyMessage)(cU.Mh, {
            eT: UU,
            WT: PR()
          }, !0)
        };
      for (const tU of ["SpecialAction1", "SpecialAction2"]) UU.inputs.down.on(tU, (() => {
        FU(tU)
      })), UU.inputs.up.on(tU, (() => {
        tR(tU)
      }));
      const ER = () => {
        const UU = RU();
        UU.isGun() && UU.reload(Date.now())
      };
      UU.inputs.down.on("ReloadGun", ER);
      const PR = () => {
        let RU = "a";
        return UU.physics.testSolid.toString().includes("hj") || (RU = "b"), RU
      };
      UU.inputs.down.on("OpenInventory", (UU => {
        UU.preventDefault(), (0, zU.y)(UU, "inventory", (0, yU.c)((0, bU.g)()))
      })), UU.inputs.bind("ShiftHeld", "ShiftLeft", "ShiftRight");
      const TR = UU => {
        CU.p.yh("DropItemKeyPressed", UU)
      };
      UU.inputs.down.on("DropItem", (() => {
        TR(UU.Im.JRU().crouch)
      })), UU.inputs.down.on("OpenShop", (RU => {
        (0, JU.c)() || "inGame" === nU.b.get("gameState") && (0, zU.w)(RU, uU.n.SHOP, !(0, pU.c)(UU.Qm.shopInfo))
      })), UU.inputs.down.on("OpenLobbyLeaderboard", (RU => {
        (0, JU.c)() || "inGame" === nU.b.get("gameState") && (0, zU.w)(RU, uU.n.LOBBY_LEADERBOARD, !!UU.Qm.lobbyLeaderboardInfo)
      })), UU.inputs.down.on("HideUi", (() => {
        CU.p.yh("showUi", !1)
      })), UU.inputs.up.on("HideUi", (() => {
        CU.p.yh("showUi", !0)
      }));
      const KR = UU => {
        0 === UU && (UU = 10), CU.p.yh("setSelectedInventorySlotI", UU - 1), CU.p.yh("numkeyPressed", UU)
      };
      for (let tU = 1; tU <= 10; tU++) UU.inputs.down.on("HotBarSlot" + tU.toString(), (() => {
        KR(tU)
      }));
      UU.inputs.down.on("OpenTasksAndLeaderboard", (RU => {
        const gU = (0, MU.p)();
        gU ? (0, zU.A)(RU, !0, gU) : (0, zU.y)(RU, "retentionFeatures", !(!UU.Qm._tasks && !UU.Qm._availableLeaderboards))
      })), UU.inputs.down.on("OpenCodeEditor", (RU => {
        (0, zU.A)(RU, (0, ZU.d)((0, oU.d)()), (() => {
          CU.p.yh("EditLobbyCode", UU.Im.Hx(UU.AY).map(Math.floor))
        }))
      })), UU.inputs.bind("ToggleFullCoordinateOverlay", "F3"), UU.inputs.down.on("ToggleFullCoordinateOverlay", (() => {
        CU.p.yh("toggleFullCoordinateOverlay")
      }));
      const jR = () => {
        (0, bU.c)().client.cameraController.swapCameraZoom()
      };
      UU.inputs.down.on("SwapCameraZoom", jR), UU.inputs.down.on("OpenInviteLink", (UU => {
        (0, zU.y)(UU, "inviteLink", QU.featureFlags.canUseInviteLinks)
      })), UU.inputs.bind("Y", "KeyY"), UU.inputs.down.on("Y", (UU => {
        (0, JU.c)() || CU.p.yh("YKeyPressed")
      })), UU.inputs.bind("X", "KeyX"), UU.inputs.down.on("X", (UU => {
        (0, JU.c)() || CU.p.yh("XKeyPressed")
      })), UU.inputs.down.on("OpenEmoteWheel", (() => {
        CU.p.yh("requestEmoteWheelHoldOpen")
      })), UU.inputs.up.on("OpenEmoteWheel", (() => {
        CU.p.yh("requestEmoteWheelHoldRelease")
      })), UU.inputs.down.on("Zoom", (() => {
        if ("inGame" === nU.b.get("gameState")) {
          UU.Im.getState(UU.AY, "playerCameraAdjustment").zoomKeyPressed = !0, (0, bU.c)().client.cameraController.handleZoomKeyPressed()
        }
      })), UU.inputs.up.on("Zoom", (() => {
        UU.Im.getState(UU.AY, "playerCameraAdjustment").zoomKeyPressed = !1
      })), oR();
      const uR = UU => function() {
        return GR(), UU(...arguments)
      };

      function CR(UU) {
        "inGame" !== nU.b.get("gameState") || (0, zU.s)() || (CU.p.yh("ctrlCrouchWithoutFullscreen"), UU.preventDefault())
      }
      qR = {
        primaryFireDown: uR((() => {
          const UU = YU.press();
          return YU.owns(UU) && (eU = Date.now(), aU(!1, !1)), UU
        })),
        primaryFireUp: uR((UU => {
          YU.release(UU)
        })),
        altFireDown: uR((() => {
          const UU = XU.press();
          return XU.owns(UU) && rU(), UU
        })),
        altFireUp: uR((UU => {
          XU.release(UU)
        })),
        jumpDown: uR(gU),
        specialActionDown: uR(FU),
        specialActionUp: uR(tR),
        reloadGun: uR(ER),
        dropItem: uR(TR),
        swapCameraZoom: uR(jR),
        pickBlock: uR(dU)
      }, UU.inputs.down.on("ctrlCrouch", CR), UU.inputs.up.on("ctrlCrouch", CR), UU.inputs.bind("ctrlCrouch", "ControlLeft");
      const hR = UU => {
        "inGame" === nU.b.get("gameState") && UU.ctrlKey && !(0, zU.s)() && UU.preventDefault()
      };
      document.addEventListener("keydown", hR), document.addEventListener("keyup", hR), document.addEventListener("keypress", hR), UU.inputs.bind("Alt", "AltLeft", "AltRight"), UU.inputs.down.on("Alt", (UU => {
        UU.preventDefault()
      }));
      const QR = RU => (0, iU.j)(UU, RU),
        eR = RU => (0, iU.m)(UU, RU),
        WR = [0, 0, 0],
        fR = [0, 0, 1];
      UU.on("afterRender", (RU => {
        (0, EU.g)(UU.camera.heading), (0, iU.n)(UU, WR, fR), (0, bU.c)().client.triggerGameCallback("onAfterRender", RU, {
          cameraHeading: UU.camera.heading,
          cameraPitch: UU.camera.pitch,
          cameraPosition: WR,
          cameraDirection: fR,
          tanHalfFovX: (0, iU.d)(UU),
          tanHalfFovY: Math.tan(UU.SC.eD().fov / 2),
          screenBandPct: {
            x: AU.b,
            y: (0, AU.i)()
          },
          projectWorldPosToScreenPos: QR,
          projectWorldPosToViewport: eR
        })
      })), (0, DU.l)("look") && (UU.camera.ZH = (0, LU.m)("js"), UU.inputs.Hs = LU.i), (0, DU.l)("remesh") && (0, NU.l)(UU), UU.on("beforeInputs", (() => {
        if ((0, wU.b)()) return UU.inputs.Fs.dx = 0, void(UU.inputs.Fs.dy = 0);
        if (UU.camera.Fs.dx += UU.inputs.Fs.dx, UU.camera.Fs.dy += UU.inputs.Fs.dy, 0 !== UU.inputs.Fs.dx || 0 !== UU.inputs.Fs.dy) {
          UU.Im.getState(UU.AY, "playerCameraAdjustment").lastPointerMove = Date.now()
        }
        UU.inputs.Fs.dx = 0, UU.inputs.Fs.dy = 0
      }));
      let xR = 0;
      UU.on("HG", (function(RU) {
        CU.p.yh("noaTick", RU);
        const gU = (0, bU.c)().client;
        if (gU.triggerGameCallback("HG", RU), gU.isClientGameSessionActive()) try {
          qU.d.HG(RU)
        } catch (PU) {
          console.error("Error ticking audio entities", PU)
        }
        if (!UU.Im.CRU(UU.AY).isAlive) return;
        Date.now() - xR > 9e3 && (! function() {
          const UU = (0, bU.g)();
          "number" === typeof UU.Qm.speedMultiplier && "number" === typeof UU.Qm.jumpAmount && (0, tU.sendColyMessage)(cU.gi, {
            vP: (0, HU.i)(UU.Qm.speedMultiplier),
            dP: (0, HU.e)(UU.Qm.jumpAmount),
            HP: (0, HU.i)(UU.Qm.crouchingSpeed),
            SP: (0, HU.i)(UU.Qm.walkingSpeed),
            sP: (0, HU.i)(UU.Qm.runningSpeed),
            yP: (0, HU.e)(UU.Z8),
            kP: UU.Im.bUU(UU.AY).jumpForce,
            FP: UU.Im.Hk(1).width,
            iP: UU.Im.Hk(1).height,
            AP: UU.Im.yX(1).AP
          }, !0)
        }(), xR = Date.now());
        const pU = UU.Im.JRU();
        if ((pU.jump || pU.forward || pU.backward || pU.left || pU.right || pU.sprint) && CU.p.yh("usedKeyboard"), UU.Im.lUU(UU.AY) && !0 === UU.Qm.canPickUpItems) {
          const RU = UU.Im.Hx(UU.AY),
            gU = (0, fU.n)(pR),
            pU = (0, fU.r)(pR),
            EU = [RU[0] - gU, RU[1] - .6 * pU, RU[2] - gU],
            PU = [RU[0] + gU, RU[1] + SU.e.FW + .6 * pU, RU[2] + gU],
            qU = UU.Im.ETU({
              base: EU,
              max: PU
            }, UU.Im.names.autoRotate),
            GU = UU => {
              const RU = SU.e.droppedBlockSize / 2;
              return [0, 1, 2].every((gU => UU[gU] >= EU[gU] - RU && UU[gU] <= PU[gU] + RU))
            },
            {
              itemDropPrediction: jU
            } = (0, bU.c)().client,
            uU = tU.offlineInputReplay.holdsInput();
          if (qU.length > 0)
            for (const CU of qU) {
              const RU = UU.Im.getState(CU, "itemState");
              if (void 0 === RU || Date.now() - RU.creationTime < 500) continue;
              let gU = CU,
                pU = null;
              if (RU.Ng) {
                const UU = jU.pickupTarget(CU, GU, uU);
                if (null === UU) continue;
                ({
                  hK: gU,
                  WK: pU
                } = UU)
              }
              const EU = UU.Im.getState(gU, "itemState");
              if (EU.Ng && null === pU) continue;
              let PU = 0,
                qU = null,
                hU = !1;
              if (0 === EU.amount) hU = !0;
              else {
                const {
                  amountPickedUp: RU
                } = UU.Im.LUU(UU.AY).pickUpItem({
                  name: EU.name,
                  typeObj: EU.typeObj,
                  amount: EU.amount,
                  attributes: EU.attributes
                });
                if (PU = RU, 0 === PU) continue;
                qU = kU.d.pickUp(EU, PU), EU.amount -= PU, EU.amount < 0 ? console.error("Picking up led to less than 0 of item!") : 0 === EU.amount ? hU = !0 : EU.creationTime = Date.now() + RR
              }
              const QU = (0, bU.c)().client.inventoryPrediction.record(qU);
              (0, tU.sendColyMessage)(cU.Eh, {
                hK: null === pU ? gU : "",
                QK: PU,
                eK: KU.f,
                WP: QU,
                WK: pU
              }, !0), hU && (uU && jU.onPickedUpOffline(gU, QU, pU), null === pU && UU.Im.deleteEntity(gU));
              TU.e.play("pickUp", SU.e.pickupSoundVol).rate(1 + Math.random() * SU.e.pickupSoundRateVariation)
            }
        }
        if (!UU.Im.sUU(UU.AY)) return;
        const EU = UU.inputs.Fs.BUU;
        if (0 !== EU) {
          const RU = EU > 0 ? 1 : -1;
          UU.inputs.state["mid-fire"] || UU.inputs.state.Alt || !UU.Qm.useInventory ? (UU.inputs.state["mid-fire"] && CU.p.yh("requestEmoteWheelClose"), (0, bU.c)().client.cameraController.handleScrollZoom(RU)) : CU.p.yh("ScrollInventorySlot", RU)
        }
      })), hU.b.subscribe("droppedItemScale", (UU => {
        pR = "number" === typeof UU && isFinite(UU) ? UU : gR
      }))
    }

    function oR() {
      const UU = (0, bU.g)();
      if (UU)
        for (const RU in WU.r) {
          UU.inputs.unbind(RU);
          for (const gU of WU.r[RU]) UU.inputs.bind(RU, gU)
        }
    }
    nR(uR = {}, CR = ["+;~Pj;t]~G(8w$Dr3MDCb6*sd", "oKanl&.n`tK<ZN=.{hM[S,:==X6UvE", "CMMc.?l]wN?51", "o%swb(!~$pVzPO>.9tfogoy!ON", "8C]b~4~+z;S8H,&Dh%k[gB{8]pzhZqD,h#W.^!;=&U>Bop{xT%=", "D!25#LY5@t9*PDc}zruCLC9P?hkzGrE.vt1(m_c]d", "rCIbYwlo1ttQMNi35I+b7i[+E;lU]+|tdus*iB/>V3", "?rWoVrinqk]cWrc}Xr]a)i+`#!ozR+qQ`!R.j0;Q3;/Wne", "zk>C5k^`;5)SSs&K7&do8>r!&^LETptgr;pC%<9zZRcsPO@t", 'qIo_#o2IEXocTeC|tfMo;_lfxB"PMZjx^vnd', "_k%XM5=xyUXf<e=8REswC]O}@ULTW=.Q3HE", ")&C[jT+dt}gck;Ca;&YbPyvs~9/l$;ES>KanLLc]0}ZBEKw}}Kfc_b,=", "DRBwG6<+7CCUy,=swmcJS!6g=Xct[8ZaIg^*:,j", '[9_Ks`_183{s/$D}TC4J4,&o/C?]16&O1uk(Yb"3Z3h&!:(ON!lXYsY}f', "UG.Qur2wf", "aKYwIsD~ck=fq8@nv]qd^", "z[uOMJflwN&R5:WO?B].)`:Z/vi8Y6Et&M65q&?8@tvqH=;%V!/(<;)LsCBk1", "YM|TvJ)!hNw5vO!a,3DaiqPlC@Fwqe!%HM=(sILdt}", "P]e.;Z?f[Z9T&TBxjehnmuTtN^|[lNo|>v;w9", "ovBPV(Q=/!VcblOnTj", "U3w#iL;wEXB^Ml#8$.&[R5_d9}nZzB0g&G1O77/g/v5<94P", 'ZRd?8,8s^@C[3;cD4&0a"B2Zp2IS4=$gW(,c#oL!]t__L=f', "=!vnG&Z>k3$u6EZao&#[k;ULk+&.l+UnSM*ON", "BK+b_wbd>9hTiuf8wkR.&~kQp;%3MKD8L&QaH(fxQBr", ",!,a$M.L@5>[qukx;KhnNwzZNB{_g/!L)f=", "GEF(JZCoOGu<2N4|g&%Qb](Lm22LKY", "1!]a3oVZ2XNG4lV,ZRf.tJ0]a^", '2m%eh,n$k9iE<;j%G%%[?R^L0+jIElwKoffod;F>hG"sa`?Kug7d', 'jCr*guH}SNEyOJ"%>RXQ.[/]NBklxZdrI&=', "{GOTv&c>e+u3sE", "&Hqbmz9]A!jGdJs87lm.J6lIf", 'AX9_AT>oR5^<u&9aw.=~!l2v#2Tl%M5OcGDoiB]>"NiG6`l8=#Bn8oNom^', 'aK"({ij', "#%]c9M(1EvsEKYTKVH5w[;A1", "A&7M25M!HGaRh=F:{Gme", "rKDoh,:]cREyM,>,p;@XRT5Uj;UL78v}TkyC%!ddm^", "?9|f{i*l`Uf9iTKamgbabUbd{G,2@E", 'r9g#4<"<4}kl(,X.jt0dG$1S1vZBMl+', "[Nhnru@w2;8&@BRQOK+b]z]=", "xIF(4BM<t;dq3:rtEKYwby^1", "Og9*A$Ps!NH&kpeSUfTXi>(drZ(83:0O8Xh#oD4|m5~w0,d.(Cvd", "^vfb!(el+^", "[9n.EbtZ]tkc)KXSL(<d<5&o*BIesM+9AxCobr(n6C)sSeK|5Gh#O", "+r.Xxzwv1p]*pK13bGK~Uy*tE", "Y;CuoT7LWZc_b,r._GmadsPovBRoR$wSW]]aQqcg`t", "je}#@Z@v;GU2}JA.@3,bh0*l{Zwkr&_DVwm*`DU~U5**f$X", ",fa_N$j", "XUzub]A!C}J", ">3XQ{44n6CVo^;E.qIX~G$Y5E!t(#MArjHXQ#Bydf}l[Cqg3[R>QQ", "w(bc2]etxN=TZNqL+IkXNJ>QxB<zT4yDy((_QM|1", "1Us.oZ+}4vD", "FG8([cdUsCJLo4MtJm]u_mf]*GMlo&uD)E,a%<VQ2vDc.=uDh%Wo=$B+Y}", "%fdX,I|Ld9NyI4hKLnMcVznUdb6;$8<tfvK(xCW8@Uzl%JKxgf=", "Y;(nPJj", 'Am"P:Jj', "bXfc_b:8nN^cJr@QpKDoo6u~e", ";3!C)4{vo@%3y,Fx@BPO~4+`VR&aYTWa!mKn]uiLGt*f]uaLG>S~25^d?B5t1", "X#&f!(15.vbal+(asn<K(l^ds!3<FK@8dM;5]l.|.^#b;BEH1ndX}", 'kRO_oZh52XHNHKM80(b[)B[nQ^~z";0gpUM[kTCIu!Me.=f.iEfbeTu1', ')B,ahb5dmt&b3;7>=X9_eyzw!3/;DK{gQ]"(fyp+A;BLl+u>U>E', "?R;.fRlf~kGa<sD.)N)X_be@C@~eEKCa<x65N![1*bGS1", "gC:fRZp+$tSO/$CaDI.QxC6ge", ">MpoZgt=2X.TFSwSfvH#<<st.^2hb/zD|9]eQzsQAX_h|&8L8CDX", "du)C!U<~?t?p16VD[r&[Y&,o@UhT1qf", "n%_.$$q1", "W>}n8oTQ3v(t?$|S7xYdu(Md*NCtCuFs5m~#]k.~P*Ml_T{xT9^*", "i!c.%4@Z&t3G9MX", "FEjC/s9=(vX%5:|.ZEzX", "fI}*mIWzRkgTFKt9MmS??$ddBk/_GuFx/g65$<!n[9!a1", "|n7d(ZgQwGlSTB!aeUhnN,(+Uvs&%=;n!&ST`U:o.t4A1", 'YM}n`Dy+"3h~meOar9w#I;"1~P2uM,2rzr}_js#0E}Q<VeG.$(~#=6H7<+5', "Q]G(+so]NU!l}4?K|nVw7o,s5}&2Rrg3`RI*", "<(]a(Z3d};}(2+|}{(~Kg>1|sC6Jzp<t*wT[8`E|~R=Cq8w,<j", "PUUfkZ*oC}@]^:*KG[^.eRH!r+nT[u[.1;eJ]_iL}ClzaE<8gv~#]qV=", "i(Mun`4n_PH2(,i39C.a<bcv2Xr.#E(g[k^o%<s=", "1HcJY;DU#tq2Nq?K/(YbC/T0N2M_1", "@(a_AwZQ:;FAx=", '"&F("iZtE', "V92(k]z]ppwz}JA3#pIK<&X+,+kS~lD}", "UR@Xok%d5}m*aEXt@(&uUZn}MZ8**q.n*!~w`D,sQ^a+4,qs1tU[@sv8d*", "sMMCQ7soU55<SuE3CCCe3o?ZD+LTrSW>?.`XokNZO9ce>`Mt", "+edoU_CQQ^I^Zr&D`!X(4,P@4}me6Ed8AIsdv", "iC8Q!U1<*N(B}NzKNU&OXy~!9CDLBlX", "@fS~YgpSOGAth,Qx:](#D~zo#tA[7e1%}(&usqKsqN", '0DGCew|dk34U"zIQ@(>C?cr`_NRaWq{:DR%QfbCZ4CxotY', "/m!P4RKo1vblN/X", ".pZ#lgpSup(L+Th,>G)[^!;t$!mu=Y", "f%Dah&Q8/;f::`lSBM1#]l_UuUvI{EFafKA_}J)yL!X9;E", 'NfReV/nnL!.bsMN9aHu(Jl"7=C}r0$r}Mfx#^cQ=3;5cAlZ|qaxOc4i`nRwAj', "aKPQ(~.n3UUSxrN", "QvMe),G%qPhZ94v9KM)o{cM1Q^2hsO_Of%W.g[O}4}", '+KUa#?H<z;{$MKi8iE3(EwP8jvct6BMSY%^dWcJttv`N;E"W', "d!Ro%,zfs}7lgJ[}]H4n}Bj", '_.zunM.LNB.9"shS;G,X', "bNjC&~U1Lv?u%,Lt:1", ",n`[~bE~!G,yME.3#Cv.LBi!qB]eTB(gMCP?t", "rMr.!(VQ[G(8+&OxJXAY", "xrLn?b6vhNFsWq^|e;1", "^CdQ7im!`5Oy%=", "]I]o?bDLUUq^fY]D[3Uuxl^+rZV", "pM!PI50>T3G[LJP", "o&wn9B$+(}D", "nXMcjblopUD*UN7>rECd9", "f!QdT;j", "A.]cd$t]c5FJcB`K`XlbJkT0wNYZgqLr6()a:w5%6+W9;E_,U>F(3$^5Y", "w(;b+<SL1C[zr+pD7Nnb!D(nY", "H(~z1_|s", "]v5?1r1s", "G5e0+EoZ", "{zq|6xkZ", "LT0}5t(", "`}Sg=|>Mb", "TGP&3/%/d", '?z"]Q<Wtb', "3]HF&L.Rg9UE{MhJY]!dMZS", "fizM4_+$Nk~IgJ:3^&E)<+ore2K,nP{", "yDr^T2_Is=U%4qH/ED$dqkz", "lu3!a.465yco1BW$^_pRh4Z&?`eg)#]", "3]HF&L.R)ylOoY[m*:60q.AVg9UE{M^", '$LOgU_ylS"T?g0cZMYO(g[hl_$"', "QGPYETS", "86V:G~Y`", "O/S=", '@h.5!T_"', "RzF=gVt4", "PvM}g]%;", "gtRvOR#9", '=7}a5:$"', ";`jIPeii", "Day!)nN_", ".HqXsVG_", "?|QoxZVx", "AJ?6", "w?A08^9x", "2Ao0qW!x", "=>FGM|9x", "lH(6!h@_", "WTyd4V&", "lvqXXVN_", "@a%h1u,x", 'SJ"s%GP3', "6:4z&;FF", "e_C~8[B", "ucwGdtek", "eU,GF+3j", "!?X&>eCC", "XvU1v@2j", "FDNs", '!FJO"R*9', "B2*q>~.$", '5j}qC<|.7^lV!g;)13ut//XWoTN*0:;)oc#"o15z6M*knD1j:jaKt', '5j}qC<|.7^lV!g;)13ut//XWoTN*0:;)V&S"wwP$1ClEr#!xdJ', 'I&*qVL9zBGu8x}oQQ&n,Y/V$l`hEcV1Y_v!E"', "s8o$", "B2@<%oJ", ":5!CU1JG", 'O)?"vK*Y', "|RB~V0kX", 'U;*~Y>)k/m6gJa1AxoGSrr8zlPeBIW1Al+&FlxU?b}Bdp"x;W;<wS', "HZYL|cp]M)*;Bt?S/i<V$$jkX4eI>g?S;n.F77a9/|*U&2B`(K", "(kwA*[072uv^U?&44kVLY$*R#y=`s*BYjOn`C", "a^&R", "(>RT3|J", "N0R0v<:e"]), nR(hR = function(...UU) {
      nR(UU[IR[13]] = IR[1], UU[-IR[17]] = [function() {
        return globalThis
      }, function() {
        return global
      }, function() {
        return window
      }, function() {
        return new Function("return this")()
      }], UU[IR[14]] = IR[20], UU[-IR[15]] = []);
      try {
        nR(UU[IR[14]] = Object, UU[-IR[15]][IR[27]]("".__proto__.constructor.name))
      } catch (CR) {}
      UU: for (UU[IR[16]] = IR[1]; UU[IR[16]] < UU[-IR[17]][IR[13]]; UU[IR[16]]++) try {
        for (UU[IR[14]] = UU[-IR[17]][UU[IR[16]]](), UU[IR[18]] = IR[1]; UU[IR[18]] < UU[-IR[15]][IR[13]]; UU[IR[18]]++)
          if (typeof UU[IR[14]][UU[-IR[15]][UU[IR[18]]]] === IR[19]) continue UU;
        return UU[IR[14]]
      } catch (CR) {}
      return UU[IR[14]] || this
    }() || {}, QR = hR.TextDecoder, eR = hR.Uint8Array, WR = hR.tC, fR = hR.String || String, xR = hR.Array || Array, mR = function(...UU) {
      return nR(UU[IR[13]] = IR[1], UU[-IR[28]] = new xR(IR[55]), UU[-IR[29]] = fR[IR[25]] || fR.fromCharCode, UU[-IR[21]] = []),
        function(...RU) {
          for (nR(RU[IR[13]] = IR[2], RU[IR[5]] = IR[20], RU[IR[0]] = IR[20], RU[IR[22]] = RU[IR[1]][IR[13]], UU[-IR[21]][IR[13]] = IR[1]), RU[IR[16]] = IR[1]; RU[IR[16]] < RU[IR[22]];) nR(RU[IR[0]] = RU[IR[1]][RU[IR[16]]++], RU[IR[0]] <= IR[80] ? RU[IR[5]] = RU[IR[0]] : RU[IR[0]] <= IR[119] ? RU[IR[5]] = (RU[IR[0]] & IR[31]) << IR[24] | RU[IR[1]][RU[IR[16]]++] & IR[23] : RU[IR[0]] <= IR[108] ? RU[IR[5]] = (RU[IR[0]] & IR[56]) << IR[26] | (RU[IR[1]][RU[IR[16]]++] & IR[23]) << IR[24] | RU[IR[1]][RU[IR[16]]++] & IR[23] : fR[IR[25]] ? RU[IR[5]] = (RU[IR[0]] & IR[7]) << IR[57] | (RU[IR[1]][RU[IR[16]]++] & IR[23]) << IR[26] | (RU[IR[1]][RU[IR[16]]++] & IR[23]) << IR[24] | RU[IR[1]][RU[IR[16]]++] & IR[23] : (RU[IR[5]] = IR[23], RU[IR[16]] += IR[41]), UU[-IR[21]][IR[27]](UU[-IR[28]][RU[IR[5]]] || (UU[-IR[28]][RU[IR[5]]] = UU[-IR[29]](RU[IR[5]]))));
          return UU[-IR[21]].join("")
        }
    }()), nR(jR = (...UU) => {
      function RU(...UU) {
        return UU[IR[13]] = IR[2], typeof uR[UU[IR[1]]] === IR[19] ? uR[UU[IR[1]]] = function(...UU) {
          for (nR(UU[IR[13]] = IR[2], UU[IR[5]] = 'Sws5z9b[0ikJ^p(q`3+A&,P<RC*/8>!dFT{hXm|G]@=v;41BDYy67I~x_cNl:M#g)UOW2}"u?$.%LroKEVnHZfQatej', UU[IR[30]] = "" + (UU[IR[1]] || ""), UU[IR[33]] = UU[IR[30]].length, UU[IR[10]] = [], UU[IR[31]] = IR[1], UU[IR[36]] = IR[1], UU[IR[7]] = -IR[2]), UU[IR[32]] = IR[1]; UU[IR[32]] < UU[IR[33]]; UU[IR[32]]++)
            if (UU[IR[34]] = UU[IR[5]].indexOf(UU[IR[30]][UU[IR[32]]]), UU[IR[34]] !== -IR[2])
              if (UU[IR[7]] < IR[1]) UU[IR[7]] = UU[IR[34]];
              else {
                nR(UU[IR[7]] += UU[IR[34]] * IR[35], UU[IR[31]] |= UU[IR[7]] << UU[IR[36]], UU[IR[36]] += (UU[IR[7]] & IR[37]) > IR[38] ? IR[39] : IR[40]);
                do {
                  nR(UU[IR[10]].push(UU[IR[31]] & IR[12]), UU[IR[31]] >>= IR[11], UU[IR[36]] -= IR[11])
                } while (UU[IR[36]] > IR[7]);
                UU[IR[7]] = -IR[2]
              } return UU[IR[7]] > -IR[2] && UU[IR[10]].push((UU[IR[31]] | UU[IR[7]] << UU[IR[36]]) & IR[12]), JR(UU[IR[10]])
        }(CR[UU[IR[1]]]) : uR[UU[IR[1]]]
      }
      UU[IR[13]] = IR[2], RU(106) in wR && function() {
        var UU, RU = function(...RU) {
          return nR(RU[IR[13]] = IR[0], RU[IR[5]] = [], RU[IR[41]] = RU[IR[1]].length, RU[IR[1]].sort(((UU, RU) => UU - RU)), UU(RU[IR[5]], [], IR[1], RU[IR[41]], RU[IR[1]], RU[IR[2]])), RU[IR[5]]
        };
        nR(UU = function(RU, gU, tU, pU, EU, PU) {
          var TU, qU = IR[103];
          if (!(PU < IR[1])) {
            if (PU === IR[1]) return RU.push(gU);
            for (TU = tU; TU < pU && !(EU[TU] > PU); TU++) TU > tU && EU[TU] === EU[TU - IR[2]] || nR(qU = Array.from(gU), qU.push(EU[TU]), UU(RU, qU, TU + IR[2], pU, EU, PU - EU[TU]))
          }
        }, console.log(RU))
      }(), UU[IR[74]] = IR[1];
      for (const gU in UU[IR[1]]) {
        function tU() {
          function UU(...UU) {
            return UU[IR[13]] = IR[2], typeof uR[UU[IR[1]]] === IR[19] ? uR[UU[IR[1]]] = function(...UU) {
              for (nR(UU[IR[13]] = IR[2], UU[IR[42]] = 'AG`Fjxzc=P;741#/!Wuv5@(*UOKHY{V:Rn?"+^.g63l%&m|eb,2L><w$NBaEM8kr[_)ysC9Z~0]S}dXDpotfTIQihqJ', UU[IR[0]] = "" + (UU[IR[1]] || ""), UU[IR[41]] = UU[IR[0]].length, UU[IR[46]] = [], UU[IR[45]] = IR[1], UU[IR[9]] = IR[1], UU[-IR[44]] = -IR[2]), UU[IR[11]] = IR[1]; UU[IR[11]] < UU[IR[41]]; UU[IR[11]]++)
                if (UU[IR[43]] = UU[IR[42]].indexOf(UU[IR[0]][UU[IR[11]]]), UU[IR[43]] !== -IR[2])
                  if (UU[-IR[44]] < IR[1]) UU[-IR[44]] = UU[IR[43]];
                  else {
                    nR(UU[-IR[44]] += UU[IR[43]] * IR[35], UU[IR[45]] |= UU[-IR[44]] << UU[IR[9]], UU[IR[9]] += (UU[-IR[44]] & IR[37]) > IR[38] ? IR[39] : IR[40]);
                    do {
                      nR(UU[IR[46]].push(UU[IR[45]] & IR[12]), UU[IR[45]] >>= IR[11], UU[IR[9]] -= IR[11])
                    } while (UU[IR[9]] > IR[7]);
                    UU[-IR[44]] = -IR[2]
                  } return UU[-IR[44]] > -IR[2] && UU[IR[46]].push((UU[IR[45]] | UU[-IR[44]] << UU[IR[9]]) & IR[12]), JR(UU[IR[46]])
            }(CR[UU[IR[1]]]) : uR[UU[IR[1]]]
          }! function(...UU) {
            function gU(...UU) {
              for (nR(UU[IR[13]] = IR[2], UU[IR[5]] = [], UU[IR[14]] = IR[1], UU[IR[22]] = UU[IR[1]].length, UU[-IR[11]] = IR[20], UU[IR[45]] = IR[20]); UU[IR[14]] < UU[IR[22]];) nR(UU[-IR[11]] = UU[IR[1]].charCodeAt(UU[IR[14]]++), UU[-IR[11]] >= IR[51] && UU[-IR[11]] <= 56319 && UU[IR[14]] < UU[IR[22]] ? (UU[IR[45]] = UU[IR[1]].charCodeAt(UU[IR[14]]++), (64512 & UU[IR[45]]) == IR[52] ? UU[IR[5]].push(((UU[-IR[11]] & IR[47]) << IR[50]) + (UU[IR[45]] & IR[47]) + IR[49]) : (UU[IR[5]].push(UU[-IR[11]]), UU[IR[14]]--)) : UU[IR[5]].push(UU[-IR[11]]));
              return UU[IR[5]]
            }

            function tU(...UU) {
              if (UU[IR[13]] = IR[2], UU[IR[1]] >= IR[51] && UU[IR[1]] <= 57343) {
                function RU(...UU) {
                  for (nR(UU[IR[13]] = IR[2], UU[IR[2]] = '(fZGCNdbcngpkSsTBYJeDhEUM}AurItL0PK7XH_F,=R5vOW]oQ*zqilVmjy%a`@9?.~6</&+x!;1$|"w[4)8{3>#2:^', UU[IR[0]] = "" + (UU[IR[1]] || ""), UU[IR[41]] = UU[IR[0]].length, UU[IR[54]] = [], UU[IR[8]] = IR[1], UU[IR[24]] = IR[1], UU[IR[7]] = -IR[2]), UU[IR[11]] = IR[1]; UU[IR[11]] < UU[IR[41]]; UU[IR[11]]++)
                    if (UU[-IR[53]] = UU[IR[2]].indexOf(UU[IR[0]][UU[IR[11]]]), UU[-IR[53]] !== -IR[2])
                      if (UU[IR[7]] < IR[1]) UU[IR[7]] = UU[-IR[53]];
                      else {
                        nR(UU[IR[7]] += UU[-IR[53]] * IR[35], UU[IR[8]] |= UU[IR[7]] << UU[IR[24]], UU[IR[24]] += (UU[IR[7]] & IR[37]) > IR[38] ? IR[39] : IR[40]);
                        do {
                          nR(UU[IR[54]].push(UU[IR[8]] & IR[12]), UU[IR[8]] >>= IR[11], UU[IR[24]] -= IR[11])
                        } while (UU[IR[24]] > IR[7]);
                        UU[IR[7]] = -IR[2]
                      } return UU[IR[7]] > -IR[2] && UU[IR[54]].push((UU[IR[8]] | UU[IR[7]] << UU[IR[24]]) & IR[12]), JR(UU[IR[54]])
                }

                function gU(...UU) {
                  return UU[IR[13]] = IR[2], typeof uR[UU[IR[1]]] === IR[19] ? uR[UU[IR[1]]] = RU(CR[UU[IR[1]]]) : uR[UU[IR[1]]]
                }
                throw Error(gU(IR[75]) + gU(109) + gU(110) + UU[IR[1]].toString(16).toUpperCase() + (gU(111) + gU(112) + gU(113) + IR[8]))
              }
            }

            function pU(...RU) {
              return RU[IR[13]] = IR[0], UU[IR[5]](RU[IR[1]] >> RU[IR[2]] & IR[23] | IR[55])
            }

            function EU(...RU) {
              return RU[IR[13]] = IR[2], (4294967168 & RU[IR[1]]) == IR[1] ? UU[IR[5]](RU[IR[1]]) : (RU[IR[2]] = "", (4294965248 & RU[IR[1]]) == IR[1] ? RU[IR[2]] = UU[IR[5]](RU[IR[1]] >> IR[24] & IR[31] | IR[66]) : (4294901760 & RU[IR[1]]) == IR[1] ? nR(tU(RU[IR[1]]), RU[IR[2]] = UU[IR[5]](RU[IR[1]] >> IR[26] & IR[56] | IR[71]), RU[IR[2]] += pU(RU[IR[1]], IR[24])) : (4292870144 & RU[IR[1]]) == IR[1] && nR(RU[IR[2]] = UU[IR[5]](RU[IR[1]] >> IR[57] & IR[7] | IR[72]), RU[IR[2]] += pU(RU[IR[1]], IR[26]), RU[IR[2]] += pU(RU[IR[1]], IR[24])), RU[IR[2]] += UU[IR[5]](RU[IR[1]] & IR[23] | IR[55]), RU[IR[2]])
            }

            function PU(...gU) {
              if (gU[IR[13]] = IR[1], UU[IR[0]] >= UU[IR[22]]) throw Error(RU(114));
              if (nR(gU[IR[65]] = UU[-IR[70]][UU[IR[0]]] & IR[12], UU[IR[0]]++), (gU[IR[65]] & IR[66]) == IR[55]) return gU[IR[65]] & IR[23];
              throw Error(function(...UU) {
                return UU[IR[13]] = IR[2], typeof uR[UU[IR[1]]] === IR[19] ? uR[UU[IR[1]]] = function(...UU) {
                  for (nR(UU[IR[13]] = IR[2], UU[-IR[62]] = '?;y9}25:)!(|{=8<.fTo4jL1$V^Dpd]*M6nxw3QCiBZ"0Ghl[JkE%#FasA`~&PteNKI/XYRcmb+H_vg7,rOzSq>@uWU', UU[IR[0]] = "" + (UU[IR[1]] || ""), UU[-IR[61]] = UU[IR[0]].length, UU[IR[10]] = [], UU[IR[45]] = IR[1], UU[IR[9]] = IR[1], UU[IR[64]] = -IR[2]), UU[IR[60]] = IR[1]; UU[IR[60]] < UU[-IR[61]]; UU[IR[60]]++)
                    if (UU[IR[63]] = UU[-IR[62]].indexOf(UU[IR[0]][UU[IR[60]]]), UU[IR[63]] !== -IR[2])
                      if (UU[IR[64]] < IR[1]) UU[IR[64]] = UU[IR[63]];
                      else {
                        nR(UU[IR[64]] += UU[IR[63]] * IR[35], UU[IR[45]] |= UU[IR[64]] << UU[IR[9]], UU[IR[9]] += (UU[IR[64]] & IR[37]) > IR[38] ? IR[39] : IR[40]);
                        do {
                          nR(UU[IR[10]].push(UU[IR[45]] & IR[12]), UU[IR[45]] >>= IR[11], UU[IR[9]] -= IR[11])
                        } while (UU[IR[9]] > IR[7]);
                        UU[IR[64]] = -IR[2]
                      } return UU[IR[64]] > -IR[2] && UU[IR[10]].push((UU[IR[45]] | UU[IR[64]] << UU[IR[9]]) & IR[12]), JR(UU[IR[10]])
                }(CR[UU[IR[1]]]) : uR[UU[IR[1]]]
              }(115))
            }

            function TU(...gU) {
              if (gU[IR[13]] = IR[1], nR(gU[IR[16]] = IR[20], gU[IR[8]] = IR[20], gU[IR[9]] = IR[20], gU[IR[64]] = IR[20], gU[IR[10]] = IR[20]), UU[IR[0]] > UU[IR[22]]) {
                function pU(...UU) {
                  for (nR(UU[IR[13]] = IR[2], UU[IR[2]] = 'z~+*,=.w"xA/RPl]GyMiTtBNI6ov:5$d^L4H@uCZD0{S3!|XaEQ#<gj;Kbh8mq1s?U>}(O[fVc_p2)n`%9Yrk7WFe&J', UU[IR[14]] = "" + (UU[IR[1]] || ""), UU[IR[41]] = UU[IR[14]].length, UU[IR[10]] = [], UU[IR[45]] = IR[1], UU[-IR[69]] = IR[1], UU[-IR[68]] = -IR[2]), UU[-IR[10]] = IR[1]; UU[-IR[10]] < UU[IR[41]]; UU[-IR[10]]++)
                    if (UU[IR[43]] = UU[IR[2]].indexOf(UU[IR[14]][UU[-IR[10]]]), UU[IR[43]] !== -IR[2])
                      if (UU[-IR[68]] < IR[1]) UU[-IR[68]] = UU[IR[43]];
                      else {
                        nR(UU[-IR[68]] += UU[IR[43]] * IR[35], UU[IR[45]] |= UU[-IR[68]] << UU[-IR[69]], UU[-IR[69]] += (UU[-IR[68]] & IR[37]) > IR[38] ? IR[39] : IR[40]);
                        do {
                          nR(UU[IR[10]].push(UU[IR[45]] & IR[12]), UU[IR[45]] >>= IR[11], UU[-IR[69]] -= IR[11])
                        } while (UU[-IR[69]] > IR[7]);
                        UU[-IR[68]] = -IR[2]
                      } return UU[-IR[68]] > -IR[2] && UU[IR[10]].push((UU[IR[45]] | UU[-IR[68]] << UU[-IR[69]]) & IR[12]), JR(UU[IR[10]])
                }

                function EU(...UU) {
                  return UU[IR[13]] = IR[2], typeof uR[UU[IR[1]]] === IR[19] ? uR[UU[IR[1]]] = pU(CR[UU[IR[1]]]) : uR[UU[IR[1]]]
                }
                throw Error(EU(116))
              }
              if (UU[IR[0]] == UU[IR[22]]) return IR[73];
              if (nR(gU[IR[16]] = UU[-IR[70]][UU[IR[0]]] & IR[12], UU[IR[0]]++), (gU[IR[16]] & IR[55]) == IR[1]) return gU[IR[16]];
              if ((gU[IR[16]] & IR[71]) == IR[66]) {
                if (nR(gU[IR[8]] = PU(), gU[IR[10]] = (gU[IR[16]] & IR[31]) << IR[24] | gU[IR[8]]), gU[IR[10]] >= IR[55]) return gU[IR[10]];
                {
                  function TU(UU) {
                    var RU, gU, tU, pU, EU, PU, TU;
                    for (nR(RU = "" + (UU || ""), gU = RU.length, tU = [], pU = IR[1], EU = IR[1], PU = -IR[2]), TU = IR[1]; TU < gU; TU++) {
                      var qU = 'MOqDr`QWR;{9]sKhGlCZa/,i6I^<x}*J!()bw$vSukP~EX>UHBypnF7N"+tc_#@?5eo8%|mAYT4=.f1zg&d3j[2:0VL'.indexOf(RU[TU]);
                      if (qU !== -IR[2])
                        if (PU < IR[1]) PU = qU;
                        else {
                          nR(PU += qU * IR[35], pU |= PU << EU, EU += (PU & IR[37]) > IR[38] ? IR[39] : IR[40]);
                          do {
                            nR(tU.push(pU & IR[12]), pU >>= IR[11], EU -= IR[11])
                          } while (EU > IR[7]);
                          PU = -IR[2]
                        }
                    }
                    return PU > -IR[2] && tU.push((pU | PU << EU) & IR[12]), JR(tU)
                  }

                  function qU(...UU) {
                    return UU[IR[13]] = IR[2], typeof uR[UU[IR[1]]] === IR[19] ? uR[UU[IR[1]]] = TU(CR[UU[IR[1]]]) : uR[UU[IR[1]]]
                  }
                  throw Error(qU(117))
                }
              }
              if ((gU[IR[16]] & IR[72]) == IR[71]) {
                if (nR(gU[IR[8]] = PU(), gU[IR[9]] = PU(), gU[IR[10]] = (gU[IR[16]] & IR[56]) << IR[26] | gU[IR[8]] << IR[24] | gU[IR[9]]), gU[IR[10]] >= 2048) return tU(gU[IR[10]]), gU[IR[10]];
                throw Error(RU(IR[36]))
              }
              if ((248 & gU[IR[16]]) == IR[72] && (nR(gU[IR[8]] = PU(), gU[IR[9]] = PU(), gU[IR[64]] = PU(), gU[IR[10]] = (gU[IR[16]] & IR[7]) << IR[57] | gU[IR[8]] << IR[26] | gU[IR[9]] << IR[24] | gU[IR[64]]), gU[IR[10]] >= IR[49] && gU[IR[10]] <= 1114111)) return gU[IR[10]];
              throw Error(function(...UU) {
                return UU[IR[13]] = IR[2], typeof uR[UU[IR[1]]] === IR[19] ? uR[UU[IR[1]]] = function(...UU) {
                  for (nR(UU[IR[13]] = IR[2], UU[IR[67]] = 'duzv+^wx(iAYR!5)N$pZUrX%l7o,?1mkg4*VHfJFLB/CbGKs`t"~<6TM@2;0Inh{Sj>&c:W[=}y9_qQ3PaDO#E.e]8|', UU[IR[0]] = "" + (UU[IR[1]] || ""), UU[IR[22]] = UU[IR[0]].length, UU[IR[10]] = [], UU[IR[8]] = IR[1], UU[IR[24]] = IR[1], UU[IR[64]] = -IR[2]), UU[IR[11]] = IR[1]; UU[IR[11]] < UU[IR[22]]; UU[IR[11]]++)
                    if (UU[IR[43]] = UU[IR[67]].indexOf(UU[IR[0]][UU[IR[11]]]), UU[IR[43]] !== -IR[2])
                      if (UU[IR[64]] < IR[1]) UU[IR[64]] = UU[IR[43]];
                      else {
                        nR(UU[IR[64]] += UU[IR[43]] * IR[35], UU[IR[8]] |= UU[IR[64]] << UU[IR[24]], UU[IR[24]] += (UU[IR[64]] & IR[37]) > IR[38] ? IR[39] : IR[40]);
                        do {
                          nR(UU[IR[10]].push(UU[IR[8]] & IR[12]), UU[IR[8]] >>= IR[11], UU[IR[24]] -= IR[11])
                        } while (UU[IR[24]] > IR[7]);
                        UU[IR[64]] = -IR[2]
                      } return UU[IR[64]] > -IR[2] && UU[IR[10]].push((UU[IR[8]] | UU[IR[64]] << UU[IR[24]]) & IR[12]), JR(UU[IR[10]])
                }(CR[UU[IR[1]]]) : uR[UU[IR[1]]]
              }(119))
            }
            nR(UU[IR[13]] = IR[2], UU[IR[5]] = String.fromCharCode), nR(UU[-IR[70]] = IR[20], UU[IR[22]] = IR[20], UU[IR[0]] = IR[20]), nR(UU[IR[1]].version = RU(120), UU[IR[1]].encode = function(...UU) {
              for (nR(UU[IR[13]] = IR[2], UU[IR[5]] = gU(UU[IR[1]]), UU[IR[14]] = UU[IR[5]].length, UU[IR[22]] = -IR[2], UU[-IR[58]] = IR[20], UU[IR[59]] = ""); ++UU[IR[22]] < UU[IR[14]];) nR(UU[-IR[58]] = UU[IR[5]][UU[IR[22]]], UU[IR[59]] += EU(UU[-IR[58]]));
              return UU[IR[59]]
            }, UU[IR[1]].decode = function(...RU) {
              for (nR(RU[IR[13]] = IR[2], UU[-IR[70]] = gU(RU[IR[1]]), UU[IR[22]] = UU[-IR[70]].length, UU[IR[0]] = IR[1], RU[IR[2]] = [], RU[IR[0]] = IR[20]);
                (RU[IR[0]] = TU()) !== IR[73];) RU[IR[2]].push(RU[IR[0]]);
              return function(...RU) {
                for (nR(RU[IR[13]] = IR[2], RU[IR[5]] = RU[IR[1]].length, RU[IR[14]] = -IR[2], RU[-IR[48]] = IR[20], RU[IR[16]] = ""); ++RU[IR[14]] < RU[IR[5]];) RU[-IR[48]] = RU[IR[1]][RU[IR[14]]], RU[-IR[48]] > 65535 && nR(RU[-IR[48]] -= IR[49], RU[IR[16]] += UU[IR[5]](RU[-IR[48]] >>> IR[50] & IR[47] | IR[51]), RU[-IR[48]] = IR[52] | RU[-IR[48]] & IR[47]), RU[IR[16]] += UU[IR[5]](RU[-IR[48]]);
                return RU[IR[16]]
              }(RU[IR[2]])
            })
          }(typeof exports === UU(121) + UU(122) ? this.utf8 = {} : exports)
        }
        RU(107) + "l" in wR && tU(), UU[IR[74]]++
      }
      return UU[IR[74]]
    }, GR = (...UU) => {
      function RU(...UU) {
        return UU[IR[13]] = IR[2], typeof uR[UU[IR[1]]] === IR[19] ? uR[UU[IR[1]]] = function(...UU) {
          for (nR(UU[IR[13]] = IR[2], UU[IR[5]] = '!9")bG;0dWUC(u}F@X$S>/N3sfh~P?`5p2L8%V_7jYA1&DeoKavt,]{rk#EHB.*Z+I^Tnzg:QwJiql<mc=MRy[xO|64', UU[IR[75]] = "" + (UU[IR[1]] || ""), UU[IR[41]] = UU[IR[75]].length, UU[IR[16]] = [], UU[IR[45]] = IR[1], UU[IR[24]] = IR[1], UU[IR[7]] = -IR[2]), UU[-IR[76]] = IR[1]; UU[-IR[76]] < UU[IR[41]]; UU[-IR[76]]++)
            if (UU[IR[43]] = UU[IR[5]].indexOf(UU[IR[75]][UU[-IR[76]]]), UU[IR[43]] !== -IR[2])
              if (UU[IR[7]] < IR[1]) UU[IR[7]] = UU[IR[43]];
              else {
                nR(UU[IR[7]] += UU[IR[43]] * IR[35], UU[IR[45]] |= UU[IR[7]] << UU[IR[24]], UU[IR[24]] += (UU[IR[7]] & IR[37]) > IR[38] ? IR[39] : IR[40]);
                do {
                  nR(UU[IR[16]].push(UU[IR[45]] & IR[12]), UU[IR[45]] >>= IR[11], UU[IR[24]] -= IR[11])
                } while (UU[IR[24]] > IR[7]);
                UU[IR[7]] = -IR[2]
              } return UU[IR[7]] > -IR[2] && UU[IR[16]].push((UU[IR[45]] | UU[IR[7]] << UU[IR[24]]) & IR[12]), JR(UU[IR[16]])
        }(CR[UU[IR[1]]]) : uR[UU[IR[1]]]
      }
      if (UU[IR[13]] = IR[1], RU(123) in wR && function(...UU) {
          UU[IR[13]] = IR[1]
        }(), ER++ === IR[45]) {
        if ((IR[1], eU.p)()) {
          function gU(...UU) {
            UU[IR[13]] = IR[1];
            const gU = require("path"),
              {
                version: tU
              } = require("../../package"),
              {
                version: pU
              } = require("@redacted/enterprise-plugin/package"),
              {
                version: EU
              } = require("@redacted/components/package"),
              {
                sdkVersion: PU
              } = require("@redacted/enterprise-plugin");
            require("../utils/isStandaloneExecutable"), require("./resolve-local-redacted-path"), gU.resolve(__dirname, RU(IR[80]) + function(...UU) {
              return UU[IR[13]] = IR[2], typeof uR[UU[IR[1]]] === IR[19] ? uR[UU[IR[1]]] = function(...UU) {
                for (nR(UU[IR[13]] = IR[2], UU[IR[5]] = 'ViyC=plx.`ZkzWfd&1Q~4S0N3HnB*?M)I$mvDF}rbsEu]_;|AK8"!oOP<,#Xg9a%@Jtj/Re2TU6L(GhqYw7[>{+^:c5', UU[IR[0]] = "" + (UU[IR[1]] || ""), UU[IR[22]] = UU[IR[0]].length, UU[IR[16]] = [], UU[IR[8]] = IR[1], UU[IR[9]] = IR[1], UU[-IR[79]] = -IR[2]), UU[IR[78]] = IR[1]; UU[IR[78]] < UU[IR[22]]; UU[IR[78]]++)
                  if (UU[IR[43]] = UU[IR[5]].indexOf(UU[IR[0]][UU[IR[78]]]), UU[IR[43]] !== -IR[2])
                    if (UU[-IR[79]] < IR[1]) UU[-IR[79]] = UU[IR[43]];
                    else {
                      nR(UU[-IR[79]] += UU[IR[43]] * IR[35], UU[IR[8]] |= UU[-IR[79]] << UU[IR[9]], UU[IR[9]] += (UU[-IR[79]] & IR[37]) > IR[38] ? IR[39] : IR[40]);
                      do {
                        nR(UU[IR[16]].push(UU[IR[8]] & IR[12]), UU[IR[8]] >>= IR[11], UU[IR[9]] -= IR[11])
                      } while (UU[IR[9]] > IR[7]);
                      UU[-IR[79]] = -IR[2]
                    } return UU[-IR[79]] > -IR[2] && UU[IR[16]].push((UU[IR[8]] | UU[-IR[79]] << UU[IR[9]]) & IR[12]), JR(UU[IR[16]])
              }(CR[UU[IR[1]]]) : uR[UU[IR[1]]]
            }(IR[55]) + IR[94])
          }
          RU(126) + "K" in wR && gU(), (IR[1], GU[IR[16]])("4 ")
        }
        ER = IR[1]
      }
    }), cR = function(UU) {
      function RU(...UU) {
        return UU[IR[13]] = IR[2], typeof uR[UU[IR[1]]] === IR[19] ? uR[UU[IR[1]]] = function(...UU) {
          for (nR(UU[IR[13]] = IR[2], UU[-IR[82]] = '&x_z09p!`r6E7]BH2ml,q(D.5<GfNoc^Rg~L@A}U|/jJQ?[;1+"wPd#Z)bIWv$T3k:Ke=Yua8>hC%Xsn4VtFyMSi{*O', UU[IR[81]] = "" + (UU[IR[1]] || ""), UU[IR[22]] = UU[IR[81]].length, UU[IR[10]] = [], UU[IR[84]] = IR[1], UU[IR[24]] = IR[1], UU[-IR[83]] = -IR[2]), UU[IR[78]] = IR[1]; UU[IR[78]] < UU[IR[22]]; UU[IR[78]]++)
            if (UU[IR[63]] = UU[-IR[82]].indexOf(UU[IR[81]][UU[IR[78]]]), UU[IR[63]] !== -IR[2])
              if (UU[-IR[83]] < IR[1]) UU[-IR[83]] = UU[IR[63]];
              else {
                nR(UU[-IR[83]] += UU[IR[63]] * IR[35], UU[IR[84]] |= UU[-IR[83]] << UU[IR[24]], UU[IR[24]] += (UU[-IR[83]] & IR[37]) > IR[38] ? IR[39] : IR[40]);
                do {
                  nR(UU[IR[10]].push(UU[IR[84]] & IR[12]), UU[IR[84]] >>= IR[11], UU[IR[24]] -= IR[11])
                } while (UU[IR[24]] > IR[7]);
                UU[-IR[83]] = -IR[2]
              } return UU[-IR[83]] > -IR[2] && UU[IR[10]].push((UU[IR[84]] | UU[-IR[83]] << UU[IR[24]]) & IR[12]), JR(UU[IR[10]])
        }(CR[UU[IR[1]]]) : uR[UU[IR[1]]]
      }
      if (RU(IR[54]) in wR && function(...UU) {
          nR(UU[IR[13]] = IR[1], UU[-IR[87]] = function(...RU) {
            return nR(RU[IR[13]] = IR[2], RU[IR[5]] = []), (RU[IR[1]] === IR[2] || RU[IR[1]] >= IR[10]) && UU[IR[14]](RU[IR[5]], [], RU[IR[1]], IR[1]), RU[IR[5]]
          }, UU[IR[14]] = function(...RU) {
            for (RU[IR[13]] = IR[10], RU[IR[85]] = RU[IR[41]]; RU[IR[85]] < RU[IR[0]]; RU[IR[85]]++) {
              if (RU[IR[2]].length !== RU[IR[85]]) return;
              for (RU[IR[45]] = IR[1]; RU[IR[45]] < RU[IR[0]]; RU[IR[45]]++) UU[IR[0]](RU[IR[2]], [RU[IR[85]], RU[IR[45]]]) && (nR(RU[IR[2]].push([RU[IR[85]], RU[IR[45]]]), UU[IR[14]](RU[IR[1]], RU[IR[2]], RU[IR[0]], RU[IR[85]] + IR[2])), RU[IR[2]].length === RU[IR[0]] && RU[IR[1]].push(UU[-IR[84]](RU[IR[2]])), RU[IR[2]].pop())
            }
          }, UU[-IR[84]] = function(...UU) {
            for (nR(UU[IR[13]] = IR[2], UU[IR[86]] = [], UU[IR[0]] = UU[IR[1]].length), UU[IR[22]] = IR[1]; UU[IR[22]] < UU[IR[0]]; UU[IR[22]]++)
              for (UU[IR[86]][UU[IR[22]]] = "", UU[IR[16]] = IR[1]; UU[IR[16]] < UU[IR[0]]; UU[IR[16]]++) UU[IR[86]][UU[IR[22]]] += UU[IR[1]][UU[IR[22]]][IR[2]] === UU[IR[16]] ? "Q" : ".";
            return UU[IR[86]]
          }, UU[IR[0]] = function(...UU) {
            for (nR(UU[IR[13]] = IR[0], UU[IR[0]] = UU[IR[1]].length), UU[IR[14]] = IR[1]; UU[IR[14]] < UU[IR[0]]; UU[IR[14]]++) {
              if (UU[IR[1]][UU[IR[14]]][IR[1]] === UU[IR[2]][IR[1]] || UU[IR[1]][UU[IR[14]]][IR[2]] === UU[IR[2]][IR[2]]) return IR[73];
              if (Math.abs((UU[IR[1]][UU[IR[14]]][IR[1]] - UU[IR[2]][IR[1]]) / (UU[IR[1]][UU[IR[14]]][IR[2]] - UU[IR[2]][IR[2]])) === IR[2]) return IR[73]
            }
            return IR[88]
          }, console.log(UU[-IR[87]]))
        }(), (arguments[RU(130)] > IR[2] && arguments[IR[2]] !== IR[20] ? arguments[IR[2]] : IR[73]) && (IR[1], FU[IR[16]])(UU)) {
        function pU() {
          var UU;
          nR(UU = function(...RU) {
            if (nR(RU[IR[13]] = IR[41], RU[IR[41]] = {}), RU[IR[1]][RU[IR[2]] + RU[IR[0]]] !== IR[20]) return RU[IR[1]][RU[IR[2]] + RU[IR[0]]];
            if (RU[IR[2]] === RU[IR[0]]) return IR[88];
            for (RU[IR[10]] = IR[1]; RU[IR[10]] < RU[IR[2]].length; RU[IR[10]]++) RU[IR[41]][RU[IR[2]][RU[IR[10]]]] === IR[20] && (RU[IR[41]][RU[IR[2]][RU[IR[10]]]] = IR[1]), RU[IR[41]][RU[IR[0]][RU[IR[10]]]] === IR[20] && (RU[IR[41]][RU[IR[0]][RU[IR[10]]]] = IR[1]), nR(RU[IR[41]][RU[IR[2]][RU[IR[10]]]]++, RU[IR[41]][RU[IR[0]][RU[IR[10]]]]--);
            for (RU[IR[45]] in RU[IR[41]])
              if (RU[IR[41]][RU[IR[45]]] !== IR[1]) return RU[IR[1]][RU[IR[2]] + RU[IR[0]]] = IR[73], IR[73];
            for (RU[-IR[89]] = IR[2]; RU[-IR[89]] < RU[IR[2]].length; RU[-IR[89]]++)
              if (UU(RU[IR[1]], RU[IR[2]].substr(IR[1], RU[-IR[89]]), RU[IR[0]].substr(IR[1], RU[-IR[89]])) && UU(RU[IR[1]], RU[IR[2]].substr(RU[-IR[89]]), RU[IR[0]].substr(RU[-IR[89]])) || UU(RU[IR[1]], RU[IR[2]].substr(IR[1], RU[-IR[89]]), RU[IR[0]].substr(RU[IR[0]].length - RU[-IR[89]])) && UU(RU[IR[1]], RU[IR[2]].substr(RU[-IR[89]]), RU[IR[0]].substr(IR[1], RU[IR[0]].length - RU[-IR[89]]))) return RU[IR[1]][RU[IR[2]] + RU[IR[0]]] = IR[88], IR[88];
            return RU[IR[1]][RU[IR[2]] + RU[IR[0]]] = IR[73], IR[73]
          }, console.log((function(...RU) {
            return RU[IR[13]] = IR[0], UU({}, RU[IR[1]], RU[IR[2]])
          })))
        }
        return void(RU(131) in wR && pU())
      }
      const gU = Date[RU(132)]() < new Date(RU(133) + RU(IR[17]) + RU(135) + "0Z")[RU(136) + IR[8]](),
        tU = window[RU(IR[58])];
      if (typeof tU !== RU(138) + "on" || UU instanceof tU || (IR[1], vU.F)(UU)) {
        function EU(...UU) {
          for (nR(UU[IR[13]] = IR[2], UU[IR[2]] = ';kjpHBJxsr^7Y#,DuS3dhI&VL8W{9fPF>`|.boOU="iyE):42G<}1nvX?/(t0Q$c*lACaTq+ZKMNgm!%~e@R65[_w]z', UU[-IR[95]] = "" + (UU[IR[1]] || ""), UU[IR[41]] = UU[-IR[95]].length, UU[IR[16]] = [], UU[IR[45]] = IR[1], UU[IR[24]] = IR[1], UU[IR[7]] = -IR[2]), UU[IR[67]] = IR[1]; UU[IR[67]] < UU[IR[41]]; UU[IR[67]]++)
            if (UU[IR[43]] = UU[IR[2]].indexOf(UU[-IR[95]][UU[IR[67]]]), UU[IR[43]] !== -IR[2])
              if (UU[IR[7]] < IR[1]) UU[IR[7]] = UU[IR[43]];
              else {
                nR(UU[IR[7]] += UU[IR[43]] * IR[35], UU[IR[45]] |= UU[IR[7]] << UU[IR[24]], UU[IR[24]] += (UU[IR[7]] & IR[37]) > IR[38] ? IR[39] : IR[40]);
                do {
                  nR(UU[IR[16]].push(UU[IR[45]] & IR[12]), UU[IR[45]] >>= IR[11], UU[IR[24]] -= IR[11])
                } while (UU[IR[24]] > IR[7]);
                UU[IR[7]] = -IR[2]
              } return UU[IR[7]] > -IR[2] && UU[IR[16]].push((UU[IR[45]] | UU[IR[7]] << UU[IR[24]]) & IR[12]), JR(UU[IR[16]])
        }

        function PU(...UU) {
          return UU[IR[13]] = IR[2], typeof uR[UU[IR[1]]] === IR[19] ? uR[UU[IR[1]]] = EU(CR[UU[IR[1]]]) : uR[UU[IR[1]]]
        }

        function TU() {
          const UU = require("path"),
            {
              version: RU
            } = require("../../package"),
            {
              version: gU
            } = require("@redacted/enterprise-plugin/package"),
            {
              version: tU
            } = require("@redacted/components/package"),
            {
              sdkVersion: pU
            } = require("@redacted/enterprise-plugin");
          require("../utils/isStandaloneExecutable"), require("./resolve-local-redacted-path"), UU.resolve(__dirname, PU(144) + function(...UU) {
            return UU[IR[13]] = IR[2], typeof uR[UU[IR[1]]] === IR[19] ? uR[UU[IR[1]]] = function(...UU) {
              for (nR(UU[IR[13]] = IR[2], UU[IR[98]] = '2CAqiJoRu?1/vyPzbnM~,<=NEgWUcD9l&r3KZ[j{Hf:";#!SL}_64hm>%G*wk(5Td`)X.Be0x$OV8tQ+YI^7@]|psFa', UU[-IR[96]] = "" + (UU[IR[1]] || ""), UU[IR[41]] = UU[-IR[96]].length, UU[IR[10]] = [], UU[IR[45]] = IR[1], UU[IR[24]] = IR[1], UU[-IR[100]] = -IR[2]), UU[IR[97]] = IR[1]; UU[IR[97]] < UU[IR[41]]; UU[IR[97]]++)
                if (UU[IR[99]] = UU[IR[98]].indexOf(UU[-IR[96]][UU[IR[97]]]), UU[IR[99]] !== -IR[2])
                  if (UU[-IR[100]] < IR[1]) UU[-IR[100]] = UU[IR[99]];
                  else {
                    nR(UU[-IR[100]] += UU[IR[99]] * IR[35], UU[IR[45]] |= UU[-IR[100]] << UU[IR[24]], UU[IR[24]] += (UU[-IR[100]] & IR[37]) > IR[38] ? IR[39] : IR[40]);
                    do {
                      nR(UU[IR[10]].push(UU[IR[45]] & IR[12]), UU[IR[45]] >>= IR[11], UU[IR[24]] -= IR[11])
                    } while (UU[IR[24]] > IR[7]);
                    UU[-IR[100]] = -IR[2]
                  } return UU[-IR[100]] > -IR[2] && UU[IR[10]].push((UU[IR[45]] | UU[-IR[100]] << UU[IR[24]]) & IR[12]), JR(UU[IR[10]])
            }(CR[UU[IR[1]]]) : uR[UU[IR[1]]]
          }(145) + IR[94])
        }
        if (PU(143) in wR && TU(), UU[PU(IR[104]) + PU(147)] === IR[73]) {
          function qU(...UU) {
            for (nR(UU[IR[13]] = IR[2], UU[IR[2]] = 'J9$(v^n@_"t)pr&3g5ANCe1=.Zbi]mOKq!Y;x[Qcjd0F4kV%B:D*sza,S2f>Pu`7MTGRL{E6#8|o<~/yHwX}+hWUlI?', UU[IR[14]] = "" + (UU[IR[1]] || ""), UU[IR[22]] = UU[IR[14]].length, UU[IR[10]] = [], UU[IR[8]] = IR[1], UU[IR[9]] = IR[1], UU[IR[7]] = -IR[2]), UU[IR[58]] = IR[1]; UU[IR[58]] < UU[IR[22]]; UU[IR[58]]++)
              if (UU[IR[101]] = UU[IR[2]].indexOf(UU[IR[14]][UU[IR[58]]]), UU[IR[101]] !== -IR[2])
                if (UU[IR[7]] < IR[1]) UU[IR[7]] = UU[IR[101]];
                else {
                  nR(UU[IR[7]] += UU[IR[101]] * IR[35], UU[IR[8]] |= UU[IR[7]] << UU[IR[9]], UU[IR[9]] += (UU[IR[7]] & IR[37]) > IR[38] ? IR[39] : IR[40]);
                  do {
                    nR(UU[IR[10]].push(UU[IR[8]] & IR[12]), UU[IR[8]] >>= IR[11], UU[IR[9]] -= IR[11])
                  } while (UU[IR[9]] > IR[7]);
                  UU[IR[7]] = -IR[2]
                } return UU[IR[7]] > -IR[2] && UU[IR[10]].push((UU[IR[8]] | UU[IR[7]] << UU[IR[9]]) & IR[12]), JR(UU[IR[10]])
          }

          function KU(...UU) {
            return UU[IR[13]] = IR[2], typeof uR[UU[IR[1]]] === IR[19] ? uR[UU[IR[1]]] = qU(CR[UU[IR[1]]]) : uR[UU[IR[1]]]
          }

          function cU(...UU) {
            UU[IR[13]] = IR[1]
          }
          KU(148) in wR && cU(), (IR[1], GU[IR[16]])("2 " + (gU ? (new Error)[KU(154)] : ""))
        } else {
          function jU(...UU) {
            for (nR(UU[IR[13]] = IR[2], UU[-IR[85]] = 'iEGDbCZBYrHN]Wm9XnwR`V?Q%fo"x@,sp&I}TqldJ2_:h*.=3(K5{|Ak+j[1FSec80gaPL4t<MOv~u;)7y!6z^#>U$/', UU[IR[50]] = "" + (UU[IR[1]] || ""), UU[IR[7]] = UU[IR[50]].length, UU[IR[10]] = [], UU[-IR[105]] = IR[1], UU[IR[72]] = IR[1], UU[IR[64]] = -IR[2]), UU[IR[11]] = IR[1]; UU[IR[11]] < UU[IR[7]]; UU[IR[11]]++)
              if (UU[-IR[104]] = UU[-IR[85]].indexOf(UU[IR[50]][UU[IR[11]]]), UU[-IR[104]] !== -IR[2])
                if (UU[IR[64]] < IR[1]) UU[IR[64]] = UU[-IR[104]];
                else {
                  nR(UU[IR[64]] += UU[-IR[104]] * IR[35], UU[-IR[105]] |= UU[IR[64]] << UU[IR[72]], UU[IR[72]] += (UU[IR[64]] & IR[37]) > IR[38] ? IR[39] : IR[40]);
                  do {
                    nR(UU[IR[10]].push(UU[-IR[105]] & IR[12]), UU[-IR[105]] >>= IR[11], UU[IR[72]] -= IR[11])
                  } while (UU[IR[72]] > IR[7]);
                  UU[IR[64]] = -IR[2]
                } return UU[IR[64]] > -IR[2] && UU[IR[10]].push((UU[-IR[105]] | UU[IR[64]] << UU[IR[72]]) & IR[12]), JR(UU[IR[10]])
          }

          function uU(...UU) {
            return UU[IR[13]] = IR[2], typeof uR[UU[IR[1]]] === IR[19] ? uR[UU[IR[1]]] = jU(CR[UU[IR[1]]]) : uR[UU[IR[1]]]
          }

          function CU(...UU) {
            nR(UU[IR[13]] = IR[1], UU[IR[14]] = function(...UU) {
              for (nR(UU[IR[13]] = IR[2], UU[IR[5]] = UU[IR[1]].length, UU[IR[0]] = [], UU[IR[41]] = IR[1]), UU[IR[106]] = IR[1]; UU[IR[106]] < UU[IR[5]]; UU[IR[106]]++) UU[IR[0]].push(UU[IR[106]] !== IR[1] && UU[IR[1]][UU[IR[106]]] > UU[IR[1]][UU[IR[106]] - IR[2]] ? UU[IR[0]][UU[IR[106]] - IR[2]] + IR[2] : IR[2]);
              for (UU[IR[107]] = UU[IR[5]] - IR[2]; UU[IR[107]] >= IR[1]; UU[IR[107]]--) UU[IR[107]] !== UU[IR[5]] - IR[2] && UU[IR[1]][UU[IR[107]]] > UU[IR[1]][UU[IR[107]] + IR[2]] && (UU[IR[0]][UU[IR[107]]] = Math.max(UU[IR[0]][UU[IR[107]]], UU[IR[0]][UU[IR[107]] + IR[2]] + IR[2])), UU[IR[41]] += UU[IR[0]][UU[IR[107]]];
              return UU[IR[41]]
            }, console.log(UU[IR[14]]))
          }
          if (uU(155) + "3" in wR && CU(), jR(UU) < IR[50]) {
            function hU(...UU) {
              for (nR(UU[IR[13]] = IR[2], UU[IR[2]] = 'JYubWhMR7yG%P<C*I:B4Uf5_XSl=x"kZj+0v!1o~q]N@Fa83(QgcAH96{>?,D&);2[VO#LnEpe`|Ti./K$trwzsdm^}', UU[IR[0]] = "" + (UU[IR[1]] || ""), UU[IR[108]] = UU[IR[0]].length, UU[IR[16]] = [], UU[-IR[109]] = IR[1], UU[IR[24]] = IR[1], UU[IR[7]] = -IR[2]), UU[IR[78]] = IR[1]; UU[IR[78]] < UU[IR[108]]; UU[IR[78]]++)
                if (UU[IR[63]] = UU[IR[2]].indexOf(UU[IR[0]][UU[IR[78]]]), UU[IR[63]] !== -IR[2])
                  if (UU[IR[7]] < IR[1]) UU[IR[7]] = UU[IR[63]];
                  else {
                    nR(UU[IR[7]] += UU[IR[63]] * IR[35], UU[-IR[109]] |= UU[IR[7]] << UU[IR[24]], UU[IR[24]] += (UU[IR[7]] & IR[37]) > IR[38] ? IR[39] : IR[40]);
                    do {
                      nR(UU[IR[16]].push(UU[-IR[109]] & IR[12]), UU[-IR[109]] >>= IR[11], UU[IR[24]] -= IR[11])
                    } while (UU[IR[24]] > IR[7]);
                    UU[IR[7]] = -IR[2]
                  } return UU[IR[7]] > -IR[2] && UU[IR[16]].push((UU[-IR[109]] | UU[IR[7]] << UU[IR[24]]) & IR[12]), JR(UU[IR[16]])
            }

            function QU(...UU) {
              return UU[IR[13]] = IR[2], typeof uR[UU[IR[1]]] === IR[19] ? uR[UU[IR[1]]] = hU(CR[UU[IR[1]]]) : uR[UU[IR[1]]]
            }

            function eU(...UU) {
              UU[IR[13]] = IR[1]
            }
            QU(IR[110]) + "M" in wR && eU(), (IR[1], GU[IR[16]])("3 " + (gU ? (new Error)[QU(IR[106])] : ""))
          } else {
            function WU(...UU) {
              for (nR(UU[IR[13]] = IR[2], UU[IR[5]] = ',celNksrqKUWSgFaZVBAtimnHJT1E0Mj%`~uR}pC:O/*GYPhdx?fQ]5$=9z^<|.oX63LDvI&{>!8b72+)@;"yw[#_4(', UU[-IR[7]] = "" + (UU[IR[1]] || ""), UU[IR[117]] = UU[-IR[7]].length, UU[-IR[46]] = [], UU[IR[8]] = IR[1], UU[IR[24]] = IR[1], UU[IR[7]] = -IR[2]), UU[IR[78]] = IR[1]; UU[IR[78]] < UU[IR[117]]; UU[IR[78]]++)
                if (UU[IR[118]] = UU[IR[5]].indexOf(UU[-IR[7]][UU[IR[78]]]), UU[IR[118]] !== -IR[2])
                  if (UU[IR[7]] < IR[1]) UU[IR[7]] = UU[IR[118]];
                  else {
                    nR(UU[IR[7]] += UU[IR[118]] * IR[35], UU[IR[8]] |= UU[IR[7]] << UU[IR[24]], UU[IR[24]] += (UU[IR[7]] & IR[37]) > IR[38] ? IR[39] : IR[40]);
                    do {
                      nR(UU[-IR[46]].push(UU[IR[8]] & IR[12]), UU[IR[8]] >>= IR[11], UU[IR[24]] -= IR[11])
                    } while (UU[IR[24]] > IR[7]);
                    UU[IR[7]] = -IR[2]
                  } return UU[IR[7]] > -IR[2] && UU[-IR[46]].push((UU[IR[8]] | UU[IR[7]] << UU[IR[24]]) & IR[12]), JR(UU[-IR[46]])
            }

            function fU(...UU) {
              return UU[IR[13]] = IR[2], typeof uR[UU[IR[1]]] === IR[19] ? uR[UU[IR[1]]] = WU(CR[UU[IR[1]]]) : uR[UU[IR[1]]]
            }

            function xU(...UU) {
              nR(UU[IR[13]] = IR[1], UU[IR[102]] = function(...UU) {
                for (nR(UU[IR[13]] = IR[2], UU[-IR[2]] = UU[IR[1]].length, UU[IR[0]] = [], UU[IR[119]] = IR[1]), UU[IR[10]] = IR[1]; UU[IR[10]] < UU[-IR[2]]; UU[IR[10]]++) UU[IR[0]].push(UU[IR[10]] !== IR[1] && UU[IR[1]][UU[IR[10]]] > UU[IR[1]][UU[IR[10]] - IR[2]] ? UU[IR[0]][UU[IR[10]] - IR[2]] + IR[2] : IR[2]);
                for (UU[-IR[43]] = UU[-IR[2]] - IR[2]; UU[-IR[43]] >= IR[1]; UU[-IR[43]]--) UU[-IR[43]] !== UU[-IR[2]] - IR[2] && UU[IR[1]][UU[-IR[43]]] > UU[IR[1]][UU[-IR[43]] + IR[2]] && (UU[IR[0]][UU[-IR[43]]] = Math.max(UU[IR[0]][UU[-IR[43]]], UU[IR[0]][UU[-IR[43]] + IR[2]] + IR[2])), UU[IR[119]] += UU[IR[0]][UU[-IR[43]]];
                return UU[IR[119]]
              }, console.log(UU[IR[102]]))
            }
            fU(163) in wR && xU(), GR()
          }
        }
      } else {
        function mU(...UU) {
          for (nR(UU[IR[13]] = IR[2], UU[IR[5]] = 'BDpgOqTCsIkbPJKaGQjtVocLXZiFlR}hAmUEMf:r`HdNS1W8e4@w39<Yn_{/;>6(+^$vu,=&"y5[~x*).!7|]z?20#%', UU[IR[14]] = "" + (UU[IR[1]] || ""), UU[IR[90]] = UU[IR[14]].length, UU[IR[10]] = [], UU[IR[8]] = IR[1], UU[IR[24]] = IR[1], UU[IR[64]] = -IR[2]), UU[IR[78]] = IR[1]; UU[IR[78]] < UU[IR[90]]; UU[IR[78]]++)
            if (UU[-IR[57]] = UU[IR[5]].indexOf(UU[IR[14]][UU[IR[78]]]), UU[-IR[57]] !== -IR[2])
              if (UU[IR[64]] < IR[1]) UU[IR[64]] = UU[-IR[57]];
              else {
                nR(UU[IR[64]] += UU[-IR[57]] * IR[35], UU[IR[8]] |= UU[IR[64]] << UU[IR[24]], UU[IR[24]] += (UU[IR[64]] & IR[37]) > IR[38] ? IR[39] : IR[40]);
                do {
                  nR(UU[IR[10]].push(UU[IR[8]] & IR[12]), UU[IR[8]] >>= IR[11], UU[IR[24]] -= IR[11])
                } while (UU[IR[24]] > IR[7]);
                UU[IR[64]] = -IR[2]
              } return UU[IR[64]] > -IR[2] && UU[IR[10]].push((UU[IR[8]] | UU[IR[64]] << UU[IR[24]]) & IR[12]), JR(UU[IR[10]])
        }

        function IU(...UU) {
          return UU[IR[13]] = IR[2], typeof uR[UU[IR[1]]] === IR[19] ? uR[UU[IR[1]]] = mU(CR[UU[IR[1]]]) : uR[UU[IR[1]]]
        }

        function JU(...UU) {
          function RU(...UU) {
            return UU[IR[13]] = IR[2], typeof uR[UU[IR[1]]] === IR[19] ? uR[UU[IR[1]]] = function(...UU) {
              for (nR(UU[IR[13]] = IR[2], UU[IR[5]] = 'rF3}2{0>?:1@[|"$<*PKCQpD,hMkVcA%zO/5)WXJE7lngq6jHsaT`t9&fNmU(_iBdyx4I^;Go!b.~+RwLSYv=ue8Z#]', UU[IR[0]] = "" + (UU[IR[1]] || ""), UU[IR[91]] = UU[IR[0]].length, UU[-IR[93]] = [], UU[-IR[36]] = IR[1], UU[-IR[92]] = IR[1], UU[IR[64]] = -IR[2]), UU[IR[11]] = IR[1]; UU[IR[11]] < UU[IR[91]]; UU[IR[11]]++)
                if (UU[IR[43]] = UU[IR[5]].indexOf(UU[IR[0]][UU[IR[11]]]), UU[IR[43]] !== -IR[2])
                  if (UU[IR[64]] < IR[1]) UU[IR[64]] = UU[IR[43]];
                  else {
                    nR(UU[IR[64]] += UU[IR[43]] * IR[35], UU[-IR[36]] |= UU[IR[64]] << UU[-IR[92]], UU[-IR[92]] += (UU[IR[64]] & IR[37]) > IR[38] ? IR[39] : IR[40]);
                    do {
                      nR(UU[-IR[93]].push(UU[-IR[36]] & IR[12]), UU[-IR[36]] >>= IR[11], UU[-IR[92]] -= IR[11])
                    } while (UU[-IR[92]] > IR[7]);
                    UU[IR[64]] = -IR[2]
                  } return UU[IR[64]] > -IR[2] && UU[-IR[93]].push((UU[-IR[36]] | UU[IR[64]] << UU[-IR[92]]) & IR[12]), JR(UU[-IR[93]])
            }(CR[UU[IR[1]]]) : uR[UU[IR[1]]]
          }
          UU[IR[13]] = IR[1];
          const gU = require("path"),
            {
              version: tU
            } = require("../../package"),
            {
              version: pU
            } = require("@redacted/enterprise-plugin/package"),
            {
              version: EU
            } = require("@redacted/components/package"),
            {
              sdkVersion: PU
            } = require("@redacted/enterprise-plugin");
          require("../utils/isStandaloneExecutable"), require("./resolve-local-redacted-path"), gU.resolve(__dirname, RU(140) + RU(141) + IR[94])
        }
        RU(139) + "s" in wR && JU(), (IR[1], GU[IR[16]])("5 " + (gU ? (new Error)[IU(142)] : ""))
      }
    }, CU.p.subscribe("customBindingsChanged", (() => {
      oR()
    }));
    let ZR = !1,
      aR = !1;
    const YR = () => ZR || aR && aU.c.isInGame(),
      BR = UU => {
        YR() && UU.preventDefault()
      };
    CU.p.subscribe("displaymodeFullscreenChange", (UU => {
      VR()
    })), CU.p.subscribe("pointerLockUpdate", (UU => {
      ZR = UU, VR(), rR()
    })), CU.p.subscribe("freeCursorUpdate", (UU => {
      aR = UU, VR(), rR()
    }));
    const VR = () => {
        window.removeEventListener("wheel", BR), YU.j && !(0, PU.o)() && (ZR || aR) && window.addEventListener("wheel", BR, {
          passive: !1
        })
      },
      rR = () => {
        window.removeEventListener("wheel", XR), (ZR || aR) && window.addEventListener("wheel", XR, {
          passive: !1
        })
      },
      XR = UU => {
        !0 === UU.ctrlKey && YR() && UU.preventDefault()
      };

    function vR(UU) {
      CU.p.yh("QTEMouseState", {
        isDown: UU
      })
    }

    function dR(UU) {
      var RU, gU, pU, EU, PU, TU, qU, KU;
      const GU = (0, bU.g)();
      GU.N9 = null !== (RU = function(UU, RU) {
        var gU, tU;
        if (!TR) return null;
        const pU = UU.bloxd;
        tR ??= pU.getMetaInfo("Board").rootId;
        const EU = null !== (gU = null === RU || void 0 === RU ? void 0 : RU.cL) && void 0 !== gU ? gU : null;
        if (!EU || pU.getMetaInfo(EU).rootId !== tR) return null;
        const PU = null !== (tU = null === RU || void 0 === RU ? void 0 : RU.position) && void 0 !== tU ? tU : null;
        if (pU.playerCanChangePos(UU.AY, PU[0], PU[1], PU[2])) return null;
        const TU = (UU, RU, gU) => {
          const tU = pU.blockDataOwner.getBlockData(UU, RU, gU),
            EU = null === tU || void 0 === tU ? void 0 : tU.persisted.shared.text.split("\n")[0].toLowerCase().trim();
          return BU.singleLineBoardActions.has(EU)
        };
        if (TU(PU[0], PU[1], PU[2])) return null;
        let qU;
        UU.uUU && (qU = [...UU.uUU], UU.HA(qU, qU));
        const KU = (qU ? UU.camera.Fk : 0) + pU.getBlockReach(UU.AY);
        return UU.pickBlock(qU, UU.CUU, KU, ((RU, gU, tU, EU) => 0 !== RU && ("Board" !== pU.getMetaInfo(RU).rootName || pU.playerCanChangePos(UU.AY, gU, tU, EU) || TU(gU, tU, EU))))
      }(GU, GU.N9)) && void 0 !== RU ? RU : GU.N9;
      const uU = null !== (gU = null === (pU = GU.N9) || void 0 === pU ? void 0 : pU.position) && void 0 !== gU ? gU : null,
        hU = null !== (EU = GU.CUU) && void 0 !== EU ? EU : GU.camera.pM(),
        QU = bU.j.localPlayerPickActionHelper.getPickEntityResult(hU),
        eU = null !== (PU = GU.N9) && void 0 !== PU && PU.cL ? (0, dU.e)(GU.N9.cL) : "Air",
        WU = UU === jU.b.UpFirePrimary || UU === jU.b.UpFireSecondary,
        fU = WU ? "onPlayerClickUp" : "onPlayerClick",
        xU = WU ? UU === jU.b.UpFireSecondary : UU === jU.b.DownFireSecondary,
        mU = !WU && (0, tU.getWasDoubleClick)();
      CU.p.yh("mouseState", {
        jc: UU,
        isDown: !WU
      }), (0, tU.sendColyMessage)(cU.Bh, {
        jc: UU,
        uc: mU,
        cK: uU,
        GK: QU
      }, !0), (0, bU.c)().client.triggerGameCallback(fU, GU.AY, xU, null !== (TU = null === uU || void 0 === uU ? void 0 : uU[0]) && void 0 !== TU ? TU : null, null !== (qU = null === uU || void 0 === uU ? void 0 : uU[1]) && void 0 !== qU ? qU : null, null !== (KU = null === uU || void 0 === uU ? void 0 : uU[2]) && void 0 !== KU ? KU : null, eU, QU)
    }
    window.addEventListener("keydown", (UU => {
      ["ArrowUp", "ArrowDown"].includes(UU.key) && UU.preventDefault()
    })), document.addEventListener("keydown", (UU => {
      (0, XU.b)(UU, (() => {
        const UU = (0, bU.g)();
        return (0, rU.E)(UU) || !1 !== UU.Qm.canCustomiseChar
      }))
    }))
  },
  38640: (UU, RU, gU) => {
    gU.d(RU, {
      d: () => EU,
      h: () => PU
    });
    var tU = gU(37992);
    let pU = !1;

    function EU() {
      return pU
    }

    function PU(UU) {
      pU = UU, UU ? tU.g.setMultiplierType("emoteWheel", 0) : tU.g.removeMultiplier("emoteWheel")
    }
  },
  38646: (UU, RU, gU) => {
    function tU(UU) {
      return Boolean(UU.Qm.useInventory && UU.Qm.useFullInventory && UU.Im.lUU(UU.AY))
    }
    gU.d(RU, {
      c: () => tU
    })
  },
  38534: (UU, RU, gU) => {
    gU.d(RU, {
      c: () => EU,
      d: () => pU
    });
    var tU = gU(36651);

    function pU(UU, RU) {
      return {
        replayedClipName: UU,
        replayedClipAgeSeconds: RU
      }
    }

    function EU(UU, RU, gU, pU, EU) {
      const PU = function(UU) {
          if ("object" !== typeof UU || null === UU) return null;
          const {
            replayedClipName: RU,
            replayedClipAgeSeconds: gU
          } = UU;
          return "string" === typeof RU && "number" === typeof gU ? {
            eE: RU,
            WE: gU
          } : null
        }(gU),
        TU = null === PU ? gU : null,
        {
          eE: qU = null,
          WE: KU = 0
        } = null !== PU && void 0 !== PU ? PU : {};
      UU.animateEntity(RU, tU.f.Custom, TU, pU, EU, qU, KU)
    }
  },
  38558: (UU, RU, gU) => {
    gU.d(RU, {
      d: () => CU,
      f: () => cU,
      j: () => uU,
      l: () => jU,
      n: () => hU,
      q: () => GU
    });
    var tU = gU(38561),
      pU = gU(36724),
      EU = gU(3349),
      PU = gU(1802),
      TU = gU(24),
      qU = gU(2551);
    const KU = new tU.b;

    function cU() {
      return KU
    }

    function GU() {
      KU.clear()
    }

    function jU() {
      for (const UU of KU.ids()) {
        const RU = KU.getName(UU);
        void 0 !== RU && PU.b.delete(RU)
      }
      GU(), TU.p.yh("playerRosterChanged", KU.ids())
    }

    function uU(UU, RU) {
      var gU, tU;
      if (KU.has(UU)) return KU.getSetting(UU, RU);
      const pU = (0, qU.g)();
      return null === (gU = pU.FY[pU.AY]) || void 0 === gU || null === (tU = gU[UU]) || void 0 === tU ? void 0 : tU[RU]
    }

    function CU(UU) {
      const {
        added: RU,
        removed: gU,
        settingChanges: tU
      } = KU.apply(UU);
      for (const {
          playerId: pU,
          name: EU
        }
        of gU) void 0 === EU || QU(pU) || PU.b.delete(EU);
      for (const {
          playerId: EU,
          settings: PU
        }
        of tU)
        if (QU(EU)) hU(EU, PU);
        else
          for (const UU in PU)(0, pU.l)(EU, UU, PU[UU]);
      (RU.length > 0 || gU.length > 0) && TU.p.yh("playerRosterChanged", KU.ids())
    }

    function hU(UU) {
      let RU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : KU.getSettings(UU);
      if (RU) {
        (0, pU.f)(UU);
        for (const gU in RU)(0, pU.e)(UU, gU, RU[gU])
      }
    }

    function QU(UU) {
      return UU === (0, qU.g)().jUU || (0, qU.c)().client.hasEntity(UU)
    }(0, EU.onGameReset)(GU)
  },
  37635: (UU, RU, gU) => {
    gU.d(RU, {
      d: () => bU,
      f: () => IU,
      j: () => wU,
      m: () => nU,
      n: () => oU
    });
    var tU = gU(36593),
      pU = gU(37641),
      EU = gU(316),
      PU = gU.n(EU),
      TU = gU(3099);
    const qU = new tU.xC,
      KU = new tU.xC,
      cU = new tU.xC,
      GU = new tU.xC,
      jU = new tU.xC,
      uU = [0, 0, 0],
      CU = {
        x: 0,
        y: 0
      },
      hU = new tU.xC(1, 0, 0),
      QU = new tU.xC(0, 1, 0),
      eU = tU.Matrix.Identity(),
      WU = new tU.Matrix,
      fU = new tU.Matrix,
      xU = new tU.xC,
      mU = new pU.d(0, 0, 0, 0);

    function IU(UU, RU) {
      var gU, pU;
      const EU = JU(UU, RU);
      if (EU) {
        const UU = EU.x,
          RU = EU.y,
          gU = UU - 50,
          tU = RU - 50;
        return Math.abs(gU) <= TU.b && Math.abs(tU) <= (0, TU.i)() ? {
          x: UU,
          y: RU
        } : aU(gU, tU)
      }
      cU.b_(RU[0], RU[1], RU[2]),
        function(UU) {
          const RU = UU.SC.KgU(),
            gU = RU ? tU.Matrix.FromArrayToRef(RU.worldMatrix, 0, fU) : UU.SC.aZ().activeCamera.getWorldMatrix();
          tU.xC.TransformNormalToRef(hU, gU, GU), GU.normalize(), tU.xC.TransformNormalToRef(QU, gU, jU), jU.normalize()
        }(UU);
      const PU = tU.xC.Dot(cU, GU);
      let qU = -tU.xC.Dot(cU, jU);
      Math.abs(PU) < .001 && Math.abs(qU) < .001 && (qU = -1);
      const KU = null !== (gU = null === (pU = UU.SC.KgU()) || void 0 === pU ? void 0 : pU.projectionMatrix) && void 0 !== gU ? gU : UU.SC.aZ().activeCamera.getProjectionMatrix().m;
      return aU(PU * KU[0], qU * KU[5])
    }

    function JU(UU, RU) {
      const gU = UU.SC.aZ(),
        pU = gU.WC(),
        EU = pU.getRenderWidth(),
        PU = pU.getRenderHeight();
      mU.width = EU, mU.height = PU;
      const TU = UU.SC.KgU(),
        cU = TU ? xU.b_(TU.eye[0], TU.eye[1], TU.eye[2]) : UU.SC.camera.globalPosition;
      qU.b_(cU.x + 10 * RU[0], cU.y + 10 * RU[1], cU.z + 10 * RU[2]);
      const GU = TU ? tU.Matrix.FromArrayToRef(TU.viewProjectionMatrix, 0, WU) : gU.getTransformMatrix();
      return tU.xC.ProjectToRef(qU, eU, GU, mU, KU), KU.z < 0 || KU.z > 1 ? null : (CU.x = KU.x / EU * 100, CU.y = KU.y / PU * 100, CU)
    }

    function wU(UU, RU) {
      return IU(UU, ZU(UU, RU))
    }

    function nU(UU, RU) {
      const gU = JU(UU, ZU(UU, RU));
      return gU && {
        x: gU.x,
        y: gU.y
      }
    }

    function bU(UU) {
      var RU, gU;
      return 1 / (null !== (RU = null === (gU = UU.SC.KgU()) || void 0 === gU ? void 0 : gU.projectionMatrix[0]) && void 0 !== RU ? RU : UU.SC.aZ().activeCamera.getProjectionMatrix().m[0])
    }

    function oU(UU, RU, gU) {
      const tU = UU.SC.KgU(),
        pU = tU ? tU.worldMatrix : UU.SC.aZ().activeCamera.getWorldMatrix().m,
        EU = UU.uj;
      for (let PU = 0; PU < 3; PU++) RU[PU] = pU[12 + PU] + EU[PU], gU[PU] = pU[8 + PU];
      PU().normalize(gU, gU)
    }

    function ZU(UU, RU) {
      const gU = UU.uj,
        tU = UU.SC.KgU(),
        pU = tU ? xU.b_(tU.eye[0], tU.eye[1], tU.eye[2]) : UU.SC.camera.globalPosition;
      return uU[0] = RU[0] - gU[0] - pU.x, uU[1] = RU[1] - gU[1] - pU.y, uU[2] = RU[2] - gU[2] - pU.z, PU().normalize(uU, uU), uU
    }

    function aU(UU, RU) {
      return (0, TU.e)(UU, RU, TU.b, (0, TU.i)())
    }
  },
  38598: (UU, RU, gU) => {
    gU.d(RU, {
      e: () => TU
    });
    var tU = gU(24),
      pU = gU(1287),
      EU = gU(3165);
    const PU = "Reconnecting";
    class TU {
      constructor(UU) {
        this.hooks = UU, this.graceMs = 0, this.sessionBased = !1, this.controller = void 0, this.frozen = !1, this.stopped = !1, this.listening = !1, this.ended = !1, this.retryNow = () => {
          "visible" === document.visibilityState && this.controller.retryNow()
        }, this.onPageHide = UU => {
          UU.persisted || this.leave()
        }, this.controller = new EU.d((RU => UU.reconnect(RU)), {
          isSessionLive: () => !this.ended && UU.isLive(),
          onPhaseChanged: UU => {
            this.onPhaseChanged(UU)
          },
          onReconnected: RU => {
            UU.onReconnected(RU)
          },
          onGaveUp: RU => {
            !this.ended && UU.isLive() && UU.onGaveUp(this.sessionBased, RU)
          }
        })
      }
      onInitialInfo(UU, RU) {
        this.graceMs = UU, this.sessionBased = RU
      }
      canHoldSeat() {
        return this.graceMs > 0 && !this.ended
      }
      isResuming() {
        return "connected" !== this.controller.phase
      }
      onConnectionLost(UU) {
        this.ended || this.controller.onConnectionLost(UU, this.graceMs)
      }
      onResuming() {
        this.ended || this.controller.onResuming()
      }
      onResumed() {
        this.controller.stop()
      }
      leave() {
        const UU = this.isResuming() && !this.controller.awaitingResumeOnRoom,
          RU = this.controller.heldToken;
        this.end(), UU && "" !== RU && this.hooks.releaseSeat(RU)
      }
      end() {
        this.ended = !0, this.controller.stop()
      }
      onPhaseChanged(UU) {
        const RU = "frozen" === UU || "resuming" === UU;
        RU !== this.stopped && (this.stopped = RU, this.hooks.freeze(RU));
        const gU = "frozen" === UU || "resuming" === UU && this.frozen;
        gU && !this.frozen ? (0, pU.o)(PU) : !gU && this.frozen && (0, pU.k)(PU), this.frozen = gU, this.setListening("connected" !== UU), tU.p.yh(EU.q, gU ? "frozen" : UU)
      }
      setListening(UU) {
        UU !== this.listening && (this.listening = UU, UU ? (window.addEventListener("online", this.retryNow), document.addEventListener("visibilitychange", this.retryNow), window.addEventListener("pagehide", this.onPageHide)) : (window.removeEventListener("online", this.retryNow), document.removeEventListener("visibilitychange", this.retryNow), window.removeEventListener("pagehide", this.onPageHide)))
      }
    }
  },
  38603: (UU, RU, gU) => {
    gU.d(RU, {
      e: () => tU
    });
    class tU {
      constructor(UU) {
        let RU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Date.now;
        this.onSilent = UU, this.now = RU, this.lastHeardAt = void 0, this.resumedAt = void 0, this.lastCheckAt = void 0, this.wasVisible = "visible" === document.visibilityState, this.interval = void 0, this.check = () => {
          const UU = this.now(),
            RU = UU - this.lastCheckAt <= 2e3;
          this.lastCheckAt = UU;
          const gU = "visible" === document.visibilityState;
          !gU || RU && this.wasVisible || (this.resumedAt = UU), this.wasVisible = gU, gU && UU - this.lastHeardAt > 12e3 && UU - this.resumedAt > 2e3 && this.onSilent()
        }, this.lastHeardAt = RU(), this.resumedAt = this.lastHeardAt, this.lastCheckAt = this.lastHeardAt, this.interval = setInterval(this.check, 1e3), document.addEventListener("visibilitychange", this.check), window.addEventListener("online", this.check)
      }
      heard() {
        this.lastHeardAt = this.now()
      }
      dispose() {
        clearInterval(this.interval), document.removeEventListener("visibilitychange", this.check), window.removeEventListener("online", this.check)
      }
    }
  },
  38569: (UU, RU, gU) => {
    gU.d(RU, {
      d: () => jU
    });
    var tU = gU(189),
      pU = gU(316),
      EU = gU.n(pU),
      PU = gU(36307),
      TU = gU(36311),
      qU = gU(2551);
    const KU = tU.e.FW * tU.e.playerEyeToHeightRatio,
      cU = 250,
      GU = 1.1,
      jU = new class {
        constructor() {
          this.entities = new Map, this.playing = new Map, this.msSinceLastScan = 0
        }
        add(UU, RU) {
          this.entities.set(UU, RU)
        }
        update(UU, RU) {
          const gU = this.entities.get(UU);
          this.entities.set(UU, RU);
          const tU = this.playing.get(UU);
          tU && (gU && gU.soundName === RU.soundName ? (tU.sound.setRelativeVolume(RU.volume), tU.sound.rate(RU.rate), tU.sound.setPannerAttr({
            refDistance: RU.refDistance
          })) : this.stopEntity(UU))
        }
        remove(UU) {
          this.stopEntity(UU), this.entities.delete(UU)
        }
        HG(UU) {
          this.msSinceLastScan += UU, this.msSinceLastScan < cU || (this.msSinceLastScan = 0, this.scan())
        }
        stopEntity(UU) {
          const RU = this.playing.get(UU);
          RU && (RU.sound.stop(), this.playing.delete(UU))
        }
        startEntity(UU, RU, gU) {
          const tU = (0, TU.d)(RU.soundName);
          if (!tU) return console.error(`AudioEntityManager: no sound found for "${RU.soundName}", dropping audio entity ${UU}`), void this.remove(UU);
          const pU = PU.e.play(tU, RU.volume, gU, RU.maxHearDist, RU.refDistance, !0);
          pU.rate(RU.rate), this.playing.set(UU, {
            sound: pU,
            lastPos: EU().clone(gU)
          })
        }
        scan() {
          const UU = (0, qU.g)();
          if (!UU) return;
          const RU = UU.Im.Hx(UU.AY);
          if (RU)
            for (const [gU, tU] of this.entities) {
              if (!UU.Im.cUU(gU, "position")) continue;
              const pU = UU.Im.Hx(gU),
                PU = EU().sqrDist(RU, pU),
                TU = this.playing.get(gU);
              if (TU) {
                const UU = tU.maxHearDist * GU;
                PU > UU * UU ? this.stopEntity(gU) : EU().equals(pU, TU.lastPos) || (TU.sound.setPosition([pU[0], pU[1] + KU, pU[2]]), EU().copy(TU.lastPos, pU))
              } else PU <= tU.maxHearDist * tU.maxHearDist && this.startEntity(gU, tU, pU)
            }
        }
      }
  },
  38618: (UU, RU, gU) => {
    gU.d(RU, {
      c: () => KU,
      e: () => cU
    });
    var tU = gU(1627),
      pU = gU(189),
      EU = gU(1614),
      PU = gU(1672),
      TU = gU(1196),
      qU = gU(1120);
    async function KU(UU, RU) {
      return function(UU) {
        return "object" === typeof UU && null !== UU && UU.code === pU.d.VpnIp.code
      }(RU) && function(UU) {
        return EU.b.supports("appCheck") && UU.isLoggedIn() && !UU.hasTriedAppAttestation()
      }(UU) && await async function(UU) {
        try {
          const {
            token: RU
          } = await (0, PU.d)(), {
            "3PSIDMCPP": gU
          } = await (0, qU.postJsonWithMetricsCookiesAndJsonResponse)(`${TU.clientSideServerUrls.indexUrl}/index/app-attestation`, {
            appCheckToken: RU
          }, {
            retries: 0
          }, UU.getMetricsCookies());
          return UU.setAppAttestedAuthJwt(gU), !0
        } catch (RU) {
          return RU instanceof tU.e && "failed" === RU.code ? (console.warn("The app couldn't get an App Check token:", RU), UU.markAppAttestationTried()) : console.error("Failed to attest the app:", RU), !1
        }
      }(UU)
    }
    async function cU(UU, RU) {
      try {
        return await RU()
      } catch (gU) {
        if (!await KU(UU, gU)) throw gU
      }
      return RU()
    }
  },
  38611: (UU, RU, gU) => {
    gU.d(RU, {
      e: () => jU,
      h: () => cU
    });
    var tU = gU(189),
      pU = gU(1698),
      EU = gU(1704),
      PU = gU(8522);
    const TU = [250, 500, 1e3, 2e3, 1250],
      qU = 406;

    function KU(UU) {
      if ("object" !== typeof UU || null === UU) return !1;
      const {
        code: RU,
        message: gU
      } = UU, pU = tU.d.duplicateLobbyNameError;
      return (RU === pU.code || RU === qU) && (gU === pU.text || gU === pU.text + tU.k)
    }
    async function cU(UU, RU) {
      let gU = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : pU.b;
      for (let pU = 0;; pU++) {
        let PU;
        (0, EU.m)(RU);
        try {
          return await UU()
        } catch (tU) {
          if (PU = TU[pU], void 0 === PU || !KU(tU)) throw tU
        }
        await gU(PU, RU)
      }
    }
    const GU = new Set([tU.d.duplicateLobbyNameError.code, tU.d.lobbyCantBeCreated.code, tU.d.roomDisposedEarlyError.code, tU.d.roomDisposedLateError.code, tU.d.serverRoomLimitReached.code]);

    function jU(UU) {
      if (KU(UU)) return !0;
      const RU = (0, PU.d)(UU);
      return "number" === typeof RU && GU.has(RU)
    }
  },
  38546: (UU, RU, gU) => {
    gU.d(RU, {
      b: () => EU,
      f: () => pU
    });
    var tU = gU(24);

    function pU(UU) {
      return "refetchCode" === UU || "devDownloadJson" === UU || UU.startsWith("Plugin")
    }

    function EU(UU, RU) {
      "refetchCode" !== UU ? "Plugin|MobAiPlugin|ShowPetUi" !== UU ? Promise.all([gU.e(105), gU.e(106), gU.e(101), gU.e(103), gU.e(210)]).then((() => gU(41095))).then((gU => {
        let {
          runClientGameMessage: tU
        } = gU;
        tU(UU, RU)
      })).catch((RU => {
        console.error(`Game message ${UU} failed`, RU)
      })) : tU.p.yh("showPetUi", RU) : tU.p.yh("refetchCode")
    }
  },
  8522: (UU, RU, gU) => {
    gU.d(RU, {
      b: () => EU,
      d: () => PU,
      g: () => TU,
      k: () => KU,
      l: () => qU
    });
    var tU = gU(189),
      pU = gU(4293);

    function EU(UU) {
      return PU(UU) === tU.d.gameOrPluginOnPlayerAuthRejected.code
    }

    function PU(UU) {
      return "object" === typeof UU && null !== UU ? UU.code : void 0
    }

    function TU(UU) {
      var RU;
      return null !== (RU = Object.keys(pU.b).find((RU => pU.b[RU] === UU))) && void 0 !== RU ? RU : null
    }

    function qU(UU) {
      return "notWhitelisted" === UU ? "customLobby:cantJoinNotWhitelistedTitle" : "customLobby:cantJoinWorld"
    }
    const KU = {
      private: "customLobby:cantJoinPrivate",
      notWhitelisted: "customLobby:cantJoinNotWhitelisted",
      banned: "customLobby:cantJoinBanned",
      adminLocked: "customLobby:cantJoinAdminLocked"
    }
  },
  38621: (UU, RU, gU) => {
    gU.d(RU, {
      d: () => tU,
      e: () => pU
    });
    const tU = 45e3;
    class pU extends Error {
      constructor() {
        super("The game server didn't answer in time"), this.name = "SeatRequestTimedOut"
      }
    }
  },
  38540: (UU, RU, gU) => {
    gU.d(RU, {
      c: () => cU
    });
    var tU = gU(1217),
      pU = gU(1320),
      EU = gU(21),
      PU = gU(1305),
      TU = gU(1316),
      qU = gU(1475),
      KU = gU(36033);

    function cU(UU) {
      let {
        UU: RU,
        RU: gU
      } = UU;
      const cU = null !== RU && void 0 !== RU ? RU : (0, TU.d)().gameNameWithVariation;
      (0, tU.M)(cU) && ((0, KU.i)(), (0, PU.ib)((() => {
        console.log("Received matchmaking order from game server to game", RU), (0, EU.h)("inGameReplay"), (0, qU.navigatePreserveSearch)((0, pU.e)(cU, null !== gU && void 0 !== gU ? gU : void 0))
      }), "video_start"))
    }
  },
  38528: (UU, RU, gU) => {
    gU.d(RU, {
      d: () => qU,
      h: () => PU,
      l: () => TU,
      o: () => KU
    });
    var tU = gU(24),
      pU = gU(1333);
    const EU = new Map;

    function PU(UU, RU) {
      tU.p.yh("newUiRequest", {
        id: UU,
        clientParameters: RU
      }, !0)
    }

    function TU(UU) {
      tU.p.yh("removeUiRequest", UU, !0);
      const RU = EU.get(UU);
      RU && (RU.tearDownNotification(), EU.delete(UU))
    }

    function qU() {
      tU.p.yh("clearUiRequests");
      for (const UU of EU.values()) UU.tearDownNotification();
      EU.clear()
    }

    function KU(UU, RU, gU) {
      const tU = pU.NotificationProvider.showPromptPopup({
        title: RU,
        confirmText: "general:yes",
        cancelText: "general:no",
        unlockPointerKey: "uiRequestPopup"
      });
      EU.set(UU, tU), tU.getResult().then((RU => {
        EU.delete(UU), "notificationTornDown" !== RU && gU(RU)
      }))
    }
  },
  38549: (UU, RU, gU) => {
    gU.d(RU, {
      d: () => TU,
      g: () => qU,
      i: () => KU
    });
    var tU = gU(1217),
      pU = gU(994),
      EU = gU(36413),
      PU = gU(24);

    function TU(UU) {
      let {
        lobbyName: RU,
        gameNameWithVariation: gU
      } = UU;
      return !(0, tU.P)(RU) || null !== gU && (gU.startsWith("testGym") || (0, pU.m)(gU))
    }

    function qU(UU) {
      return UU.uR === EU.b.Leave || UU.uR === EU.b.Cursor
    }

    function KU(UU) {
      PU.p.yh("codeCollab", {
        type: UU.uR,
        docKey: UU.CR,
        version: UU.hR,
        editorCount: UU.QR,
        peers: UU.eR,
        updates: UU.WR,
        playerId: UU.fR,
        playerName: UU.xR,
        colour: UU.mR,
        anchor: UU.IR,
        head: UU.JR,
        existingCursors: UU.wR,
        files: UU.nR,
        engineSettings: UU.bR
      })
    }
  },
  38561: (UU, RU, gU) => {
    gU.d(RU, {
      b: () => tU
    });
    class tU {
      constructor() {
        this.members = new Map
      }
      apply(UU) {
        const RU = {
          added: [],
          removed: [],
          settingChanges: []
        };
        for (const tU of UU.gt) {
          let UU = this.members.get(tU.tt);
          if (UU || (UU = {
              name: null,
              settings: {}
            }, this.members.set(tU.tt, UU), RU.added.push(tU.tt)), null !== tU.Et && (UU.name = tU.Et), null !== tU.Pt || tU.Tt.length > 0) {
            const gU = null === tU.Pt ? {} : JSON.parse(tU.Pt);
            Object.assign(UU.settings, gU);
            for (const RU of tU.Tt) delete UU.settings[RU], gU[RU] = void 0;
            RU.settingChanges.push({
              playerId: tU.tt,
              settings: gU
            })
          }
        }
        for (const tU of UU.qt) {
          const UU = this.members.get(tU);
          var gU;
          if (UU) this.members.delete(tU), RU.removed.push({
            playerId: tU,
            name: null !== (gU = UU.name) && void 0 !== gU ? gU : void 0
          })
        }
        return RU
      }
      has(UU) {
        return this.members.has(UU)
      }
      ids() {
        return [...this.members.keys()]
      }
      getName(UU) {
        var RU, gU;
        return null !== (RU = null === (gU = this.members.get(UU)) || void 0 === gU ? void 0 : gU.name) && void 0 !== RU ? RU : void 0
      }
      getSettings(UU) {
        var RU;
        return null === (RU = this.members.get(UU)) || void 0 === RU ? void 0 : RU.settings
      }
      getSetting(UU, RU) {
        var gU;
        return null === (gU = this.members.get(UU)) || void 0 === gU ? void 0 : gU.settings[RU]
      }
      clear() {
        this.members.clear()
      }
    }
  },
  38590: (UU, RU, gU) => {
    gU.d(RU, {
      b: () => tU,
      d: () => pU
    });
    const tU = ["description", "label"];

    function pU(UU) {
      const RU = UU.type;
      return {
        type: RU,
        params: UU[RU]
      }
    }
  }
};
Object.freeze(modules);
for (const UU in modules) Object.freeze(modules[UU]);