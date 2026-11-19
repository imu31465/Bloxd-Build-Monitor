export const id = 232;
export const ids = [232];
export const modules = {
  38437: (YY, rY, DY) => {
    DY.d(rY, {
      d: () => IY,
      e: () => RY
    });
    var FY = DY(25);
    let AY = !1;

    function IY() {
      return AY
    }

    function RY(YY) {
      AY !== YY && (AY = YY, FY.g.vo("replayViewer|videoExportChanged"))
    }
  },
  38331: (YY, rY, DY) => {
    DY.d(rY, {
      c: () => IY
    });
    var FY = DY(25),
      AY = DY(1823);

    function IY(YY) {
      let {
        taskId: rY,
        progress: DY
      } = YY;
      const FY = AY.b.get("_tasks");
      null !== FY && void 0 !== FY && FY[rY] && AY.b.apply({
        _tasks: {
          ...FY,
          [rY]: {
            ...FY[rY],
            progress: DY
          }
        }
      })
    }
    FY.g.subscribe("clientTaskProgress", (YY => {
      IY(YY)
    }))
  },
  38453: (YY, rY, DY) => {
    DY.d(rY, {
      b: () => QY,
      c: () => oY,
      e: () => yY
    });
    var FY = DY(2565);
    const AY = 0,
      IY = 2,
      RY = 3,
      OY = 4;
    class gY {
      constructor(YY, rY) {
        this.width = YY, this.gu = rY, this.data = void 0, this.next = 0, this.size = 0, this.data = new Float64Array(YY * rY)
      }
      push(YY) {
        let rY = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        const DY = this.data.subarray(this.next * this.width, (this.next + 1) * this.width);
        for (let FY = 0; FY < this.width; FY++) DY[FY] = YY[rY + FY];
        return this.next = (this.next + 1) % this.gu, this.size = Math.min(this.size + 1, this.gu), DY
      }
      lines() {
        const YY = [],
          rY = (this.next - this.size + this.gu) % this.gu;
        for (let DY = 0; DY < this.size; DY++) {
          const FY = (rY + DY) % this.gu * this.width;
          YY.push(Array.from(this.data.subarray(FY, FY + this.width)).join(","))
        }
        return YY
      }
    }

    function aY(YY) {
      return Number.isFinite(YY) ? String(Math.round(10 * YY) / 10) : String(YY)
    }

    function vY(YY) {
      return Number.isFinite(YY) ? YY.toFixed(1) : String(YY)
    }
    class uY {
      constructor() {
        this.frames = 0, this.looked = 0, this.idle = 0, this.fC = 0, this.pastLimit = 0, this.lockSkips = 0, this.fi = 0, this.lost = 0, this.dropped = 0, this.longFrames = 0, this.dtMin = 1 / 0, this.dtMax = 0, this.dtSum = 0, this.raw = [0, 0], this.turned = [0, 0], this.peakRate = 0, this.events = 0, this.eventMax = 0, this.bigEvents = 0, this.outliers = 0, this.eventLines = 0, this.suppressed = 0
      }
    }
    class sY {
      constructor() {
        var YY = this;
        this.tally = new uY, this.records = new gY(10, 3600), this.events = new gY(4, 12e3), this.event = new Float64Array(4), this.take = null, this.client = "js", this.started = !1, this.record = function(rY) {
          let DY = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
          const [FY, gY, uY, sY, iY, yY, QY, oY, WY, EY] = YY.records.push(rY, DY), mY = YY.tally;
          switch (mY.frames++, QY) {
            case AY:
              return void mY.idle++;
            case OY:
              return void mY.fi++;
            case RY:
              return mY.lockSkips++, void(0 === uY && 0 === sY || YY.outlier(`lock skip dropped raw (${aY(uY)}, ${aY(sY)}) at ${vY(FY)} ms`))
          }
          mY.looked++, Number.isFinite(gY) && (mY.dtMin = Math.min(mY.dtMin, gY), mY.dtMax = Math.max(mY.dtMax, gY), mY.dtSum += gY, gY > 0 && (mY.peakRate = Math.max(mY.peakRate, Math.hypot(iY, yY) / gY))), mY.raw[0] += uY, mY.raw[1] += sY, mY.turned[0] += iY, mY.turned[1] += yY;
          const VY = Math.abs(uY) > EY || Math.abs(sY) > EY,
            SY = `raw (${aY(uY)}, ${aY(sY)}) over ${vY(gY)} ms, limit ${aY(EY)}, filter v (${oY.toFixed(3)}, ${WY.toFixed(3)}) px/ms, at ${vY(FY)} ms`;
          QY === IY ? (mY.fC++, YY.outlier(`spike put right: ${SY} -> turned (${aY(iY)}, ${aY(yY)})`)) : VY ? (mY.pastLimit++, YY.outlier(`kept past limit: ${SY}`)) : gY > 50 && (mY.longFrames++, YY.outlier(`long frame: ${SY}, turned in full`))
        }, this.onMouseMove = YY => {
          const rY = this.tally,
            {
              movementX: DY,
              movementY: FY
            } = YY;
          rY.events++;
          const AY = Math.max(Math.abs(DY), Math.abs(FY));
          rY.eventMax = Math.max(rY.eventMax, AY);
          const IY = null !== document.pointerLockElement,
            RY = this.event;
          RY[0] = YY.timeStamp, RY[1] = DY, RY[2] = FY, RY[3] = IY ? 1 : 0, this.events.push(RY), AY >= 200 && (rY.bigEvents++, this.eventOutlier(`big mousemove (${DY}, ${FY}) at ${vY(YY.timeStamp)} ms, lock ${IY?"ja":"free"}`))
        }, this.onLockChange = () => {
          const YY = document.pointerLockElement;
          (0, FY.n)("look", `pointer lock ${YY?`gained (${YY.tagName.toLowerCase()})`:"lost"} at ${vY(performance.now())} ms`)
        }, this.onLockError = () => {
          (0, FY.n)("look", `pointer lock request failed at ${vY(performance.now())} ms`)
        }, this.onVisibility = () => {
          (0, FY.n)("look", `page ${document.visibilityState} at ${vY(performance.now())} ms`)
        }, this.flush = () => {
          this.takeRecords();
          const YY = this.tally;
          if (this.tally = new uY, 0 === YY.events && 0 === YY.raw[0] && 0 === YY.raw[1] && 0 === YY.lockSkips && 0 === YY.fC && 0 === YY.dropped) return;
          const rY = YY.looked > 0 ? YY.dtSum / YY.looked : NaN,
            DY = [`${YY.frames} frames (${YY.looked} looked, ${YY.idle} idle${"wasm"===this.client?`, ${YY.fi} carried`:""})`, `dt avg ${vY(rY)} min ${vY(YY.dtMin)} max ${vY(YY.dtMax)}, ${YY.longFrames} long`, `${YY.events} mousemoves (max ${aY(YY.eventMax)} px, ${YY.bigEvents} big)`, `raw (${aY(YY.raw[0])}, ${aY(YY.raw[1])}) turned (${aY(YY.turned[0])}, ${aY(YY.turned[1])})`, `peak ${YY.peakRate.toFixed(2)} px/ms`, `put right ${YY.fC}, past limit ${YY.pastLimit}, lock skips ${YY.lockSkips}`, "lock " + (document.pointerLockElement ? "ja" : "free")];
          YY.dropped > 0 && DY.push(`${YY.dropped} doubled spike copies dropped`), YY.lost > 0 && DY.push(`${YY.lost} records lost`), YY.suppressed > 0 && DY.push(`${YY.suppressed} outlier lines not shown`), (0, FY.n)("look", `1s: ${DY.join("; ")}`)
        }, this.dump = () => [`look records (${this.client}): nowMs,dtMs,rawX,rawY,turnedX,turnedY,outcome,vX,vY,limit`, ...this.records.lines(), "mousemove events: timeStamp,movementX,movementY,locked", ...this.events.lines()].join("\n")
      }
      start(YY, rY) {
        this.client = YY, this.take = rY;
        const {
          screen: DY
        } = window;
        (0, FY.n)("look", `start: ${YY} client, dpr ${window.devicePixelRatio}, screen ${DY.width}x${DY.height}, pointer lock ${document.pointerLockElement?"ja":"free"}`), this.started || (this.started = !0, window.addEventListener("mousemove", this.onMouseMove, {
          capture: !0,
          passive: !0
        }), document.addEventListener("pointerlockchange", this.onLockChange), document.addEventListener("pointerlockerror", this.onLockError), document.addEventListener("visibilitychange", this.onVisibility), setInterval(this.flush, 1e3), (0, FY.k)("look", this.dump))
      }
      outlier(YY) {
        const rY = this.tally;
        rY.outliers >= 20 ? rY.suppressed++ : (rY.outliers++, (0, FY.n)("look", YY))
      }
      eventOutlier(YY) {
        const rY = this.tally;
        rY.eventLines >= 10 ? rY.suppressed++ : (rY.eventLines++, (0, FY.n)("look", YY))
      }
      takeRecords() {
        var YY;
        const rY = null === (YY = this.take) || void 0 === YY ? void 0 : YY.call(this);
        if (rY && rY.length >= 2) {
          this.tally.lost += rY[0], this.tally.dropped += rY[1];
          for (let YY = 2; YY + 10 <= rY.length; YY += 10) this.record(rY, YY)
        }
      }
      droppedCopy() {
        this.tally.dropped++
      }
      endTake() {
        this.takeRecords(), this.take = null
      }
    }
    let iY = null;

    function yY(YY) {
      let rY = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
      return iY ??= new sY, iY.start(YY, rY), iY.record
    }

    function QY() {
      var YY;
      null === (YY = iY) || void 0 === YY || YY.endTake()
    }

    function oY() {
      var YY;
      null === (YY = iY) || void 0 === YY || YY.droppedCopy()
    }
  },
  38323: (YY, rY, DY) => {
    DY.d(rY, {
      b: () => br,
      d: () => Mr,
      f: () => wr
    });
    var FY = DY(3289),
      AY = DY(183),
      IY = DY(213),
      RY = DY(631),
      OY = DY(40),
      gY = DY(2501),
      aY = DY(3366),
      vY = DY(3353),
      uY = DY(1231);
    const sY = new WeakMap;
    class iY {
      constructor(YY, rY) {
        let DY = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {
          GgY: !0
        };
        this.callbacks = rY, this.options = DY, this.frY = void 0, this.sessionId = void 0, this.lV = [], this.xgY = !1, this.Ky = !1, this.ngY = void 0, this.VV = 0, this.HFY = 0, this.PgY = (YY, rY) => {
          if (this.Ky) return;
          const DY = Number(YY);
          this.xgY ? this.UgY(DY, rY) : this.lV.push({
            id: DY,
            payload: rY
          })
        }, this.dispose = () => {
          this.Ky || (this.Ky = !0, sY.delete(this), this.lV.length = 0, this.ngY())
        }, this.frY = YY, this.sessionId = YY.sessionId, sY.set(this, []), this.ngY = this.LgY()
      }
      tgY(YY) {
        this.ngY(), this.frY = YY, this.sessionId = YY.sessionId, this.VV = 0, this.HFY = 0, this.ngY = this.LgY()
      }
      get oV() {
        return this.HFY
      }
      LgY() {
        const YY = this.frY.ZE("*", this.PgY);
        return this.options.GgY && this.frY.XE(this.dispose), YY
      }
      UgY(YY, rY) {
        try {
          (0, aY.mc)(YY) && (rY = (0, aY.d)(YY, vY.Ny.from(rY)));
          const DY = sY.get(this)[YY];
          if ("function" !== typeof DY) {
            if (this.callbacks.YaY) return void this.callbacks.YaY(YY, rY);
            throw new Error(`No onMessage handler registered for message id ${YY}`)
          }
          DY(rY)
        } catch (DY) {
          this.callbacks.raY(`Error in onMessage ${YY} with payload ${JSON.stringify(rY)}`, DY)
        } finally {
          this.VV++
        }
      }
      DaY() {
        for (const {
            id: YY,
            payload: rY
          }
          of this.lV) {
          if (this.Ky) break;
          this.UgY(YY, rY)
        }
        this.lV.length = 0
      }
      CrY() {
        return this.Ky
      }
      FaY() {
        if (this.xgY || this.Ky) throw new Error("Trying to getOnMessageRegistrationHandler after registration finished");
        return {
          ZE: (YY, rY) => {
            if (this.xgY || this.Ky) throw new Error("Trying to call onMessage after registration finished");
            this.ZE(YY, rY)
          },
          finishRegistration: () => {
            if (this.Ky) throw new Error("Cannot finish message registration after disposal");
            this.xgY = !0, this.DaY()
          }
        }
      }
      ZE(YY, rY) {
        var DY, FY;
        null === (DY = (FY = this.callbacks).AaY) || void 0 === DY || DY.call(FY);
        const AY = sY.get(this);
        for (; YY > AY.length;) AY[AY.length] = null;
        AY[YY] = rY
      }
      send(YY, rY) {
        this.RaY(), (0, uY.I)(rY) ? this.frY.fV(YY, rY) : this.frY.send(YY, rY)
      }
      RaY() {
        var YY, rY;
        (this.HFY++, 5 === yY++) && (null === (YY = (rY = this.callbacks).AaY) || void 0 === YY || YY.call(rY), yY = 0)
      }
      oW() {
        this.dispose(), this.frY.oW()
      }
      leave() {
        this.dispose(), this.frY.leave()
      }
    }
    let yY = 0;
    var QY = DY(3303);
    class oY extends iY {
      constructor(YY) {
        super(YY, {
          AaY: () => {
            (0, OY.s)(!0) && (0, FY.yV)()
          },
          raY: (YY, rY) => {
            var DY;
            null === (DY = (0, gY.e)()) || void 0 === DY || DY.CQ(YY, rY)
          }
        }, {
          GgY: !1
        }), (0, QY.f)(YY)
      }
      cV(YY, rY) {
        return !!(0, QY.h)((0, QY.b)(), this.frY, YY, rY) && (this.RaY(), !0)
      }
      tgY(YY) {
        this.OaY(), super.tgY(YY), (0, QY.f)(YY)
      }
      oW() {
        super.oW(), this.OaY()
      }
      OaY() {
        this.frY.EW.yy.Gl = void 0
      }
    }
    var WY = DY(25),
      EY = DY(1823),
      mY = DY(1699),
      VY = DY(35894);

    function SY(YY, rY, DY, FY, AY) {
      let IY = arguments.length > 5 && void 0 !== arguments[5] && arguments[5];
      if (!YY.Am.CYY(YY.yB)) return console.log("Got resync inven but don't have inven component"), void rY.acknowledge(FY);
      IY && console.error("Had to sync inven"), rY.q_(FY, AY) && DY.vo("chestToggleFromServer", !1, !0), DY.vo("syncedInvenFromServer")
    }
    var lY = DY(38331),
      TY = DY(38336),
      eY = DY(37378),
      NY = DY(37146),
      BY = DY(625),
      cY = DY(37789);

    function KY(YY, rY, DY) {
      const FY = function(YY) {
          const rY = new Int32Array(YY.length * cY.i);
          return YY.forEach(((YY, DY) => {
            const FY = DY * cY.i;
            if (4 === YY.length) {
              const [DY, AY, IY, RY] = YY;
              rY.set([DY, AY, IY, DY, AY, IY, RY], FY)
            } else {
              const [DY, AY, IY, RY, OY, gY, aY] = YY;
              rY.set([DY, IY, OY, AY, RY, gY, aY], FY)
            }
          })), rY
        }(DY),
        AY = (rY, DY, FY, AY) => {
          YY.setBlockNoMulti(rY, DY, FY, AY, !0)
        };
      YY.client.gameRecorder.isCapturing() ? (0, cY.vb)(FY, (0, cY.tb)(FY), AY) : YY.Gu.Mu.yC(FY, {
        lC: AY,
        isHookId: rY => YY.blockChangeHasHooks(rY),
        watched: () => function(YY, rY, DY) {
          const FY = [],
            AY = (YY, rY, DY) => {
              FY.push(YY, rY, DY)
            },
            IY = new Set;
          for (let RY = 0; RY < DY.length; RY += cY.i)
            for (let rY = (0, BY.P)(DY[RY]); rY <= (0, BY.P)(DY[RY + 3]); rY++)
              for (let FY = (0, BY.P)(DY[RY + 1]); FY <= (0, BY.P)(DY[RY + 4]); FY++)
                for (let OY = (0, BY.P)(DY[RY + 2]); OY <= (0, BY.P)(DY[RY + 5]); OY++) {
                  const DY = `${rY}|${FY}|${OY}`;
                  IY.has(DY) || (IY.add(DY), YY.blockDataOwner.forEachDataCell(rY, FY, OY, AY))
                }
          return rY.forEachCell(AY), Int32Array.from(FY)
        }(YY, rY, FY)
      }), YY.Gu.K4()
    }
    var HY = DY(36892),
      zY = DY(38342),
      ZY = DY(38344),
      CY = DY(1057),
      fY = DY(1828);
    var jY = DY(4047);

    function hY(YY) {
      const rY = YY.Mu;
      let DY = 0,
        AY = -1,
        RY = -1 / 0,
        OY = null,
        gY = !0;
      const vY = () => {
        if (++DY % 10 !== 0) return;
        const vY = (0, FY.getLastReceivedPacketId)();
        if (vY <= AY) return;
        const [uY, sY, iY] = YY.Am.lE(YY.yB), yY = ! function(YY) {
          var rY;
          let DY = null === (rY = YY.Am.QrY(YY.yB)) || void 0 === rY ? void 0 : rY.my;
          if (void 0 === DY) return !1;
          const FY = new Set;
          for (; void 0 !== DY && !FY.has(DY);) {
            var AY;
            FY.add(DY);
            const rY = YY.Am.getState(DY, "smoothToServerPos"),
              IY = Array.isArray(rY) ? null : null === rY || void 0 === rY ? void 0 : rY.serverPosition;
            if (IY) {
              const rY = YY.Am.lE(DY);
              if (Math.abs(rY[0] - IY[0]) > 10 || Math.abs(rY[1] - IY[1]) > 10 || Math.abs(rY[2] - IY[2]) > 10) return !0
            }
            DY = null === (AY = YY.Am.QrY(DY)) || void 0 === AY ? void 0 : AY.my
          }
          return !1
        }(YY) && function(YY, rY, DY, FY) {
          const AY = IY.d.Jy;
          for (let IY = 0; IY < YY.length; IY++) {
            const RY = YY[IY];
            if (!(0, jY.j)(rY, DY, FY, RY[0] * AY, RY[1] * AY, RY[2] * AY)) return !1
          }
          return !0
        }(rY.ao.Hy, uY, sY, iY), QY = null === OY || Math.abs(uY - OY[0]) > 8 || Math.abs(sY - OY[1]) > 8 || Math.abs(iY - OY[2]) > 8, oY = !gY || QY || performance.now() - RY >= 1e4;
        gY = yY, yY && oY && (AY = vY, RY = performance.now(), OY = [uY, sY, iY], (0, FY.sendColyMessage)(aY.pg, {
          ma: vY
        }))
      };
      return YY.on("Zu", vY), () => {
        YY.off("Zu", vY)
      }
    }
    var dY = DY(36158),
      JY = DY(358),
      MY = DY.n(JY),
      wY = DY(6041),
      bY = DY(37413),
      XY = DY(37123),
      qY = DY(37097),
      pY = DY(4070),
      kY = DY(37500),
      GY = DY(37253),
      xY = DY(36659),
      nY = DY(36999),
      PY = DY(38348),
      UY = DY(36149),
      LY = DY(36151),
      tY = DY(38353),
      Yr = DY(38356),
      rr = DY(3260),
      Dr = DY(1488),
      Fr = DY(2496),
      Ar = DY(2579),
      Ir = DY(37638),
      Rr = DY(36430),
      Or = DY(4361),
      gr = DY(38400),
      ar = DY(37490),
      vr = DY(3806),
      ur = DY(36894),
      sr = DY(36495),
      ir = DY(37507),
      yr = DY(38363),
      Qr = DY(38375),
      or = DY(36653);
    class Wr {
      constructor(YY, rY, DY, FY) {
        this.gameNameWithVariation = YY, this.Gu = DY, this.connectionResume = FY, this.stateReplicationHandler = void 0, this.stopChunkReports = () => {}, this.replayResume = null, this.stateReplicationHandler = new Qr.b(rY, this.Gu)
      }
      setupStateReplicationHandlers() {
        this.stateReplicationHandler.setup(), (0, FY.onGameResetOnce)((() => {
          this.stateReplicationHandler.dispose()
        }))
      }
      tgY(YY) {
        this.stateReplicationHandler.dispose(), this.stateReplicationHandler = new Qr.b(YY, this.Gu), this.stateReplicationHandler.setup()
      }
      clearBlockRules() {
        const YY = this.Gu.Mu;
        YY.TrY = new Set, YY.BrY = new Set, YY.erY = new Set, YY.crY = new Set, YY.NrY = [], YY.KrY = [], YY.sZ = new Set, YY.ND = [], YY.iZ = []
      }
      clearUiRequestsAndQTEs() {
        Or.b.reset(), (0, TY.e)()
      }
      startChunkReports() {
        const YY = function(YY) {
            let rY = null,
              DY = -1 / 0,
              AY = null;
            const IY = () => {
                AY = null;
                const IY = Math.ceil(YY.XV[0]),
                  RY = Math.ceil(YY.XV[1]);
                rY && rY[0] === IY && rY[1] === RY || (rY = [IY, RY], DY = performance.now(), (0, FY.sendColyMessage)(aY.mg, {
                  Dv: IY,
                  Fv: RY
                }))
              },
              RY = () => {
                null === AY && (AY = setTimeout(IY, Math.max(0, DY + 250 - performance.now())))
              };
            return IY(), YY.on("addRemoveDistanceChanged", RY), () => {
              YY.off("addRemoveDistanceChanged", RY), null !== AY && (clearTimeout(AY), AY = null)
            }
          }(this.Gu.Mu),
          rY = hY(this.Gu);
        this.stopChunkReports = () => {
          YY(), rY()
        }
      }
      restartChunkStreaming() {
        (0, nY.j)(this.Gu, (0, gY.c)().recentChunkEdits.chunksEditedSince(this.connectionResume.getDroppedAt() - PY.c)), this.startChunkReports()
      }
      setupOnMessageListeners(YY, rY) {
        const DY = this.Gu,
          AY = this.gameNameWithVariation;
        YY.ZE(aY.vc, (YY => {
          let {
            zF: rY,
            ZF: FY,
            CF: AY,
            fF: IY,
            jF: RY,
            hF: OY,
            dF: gY,
            JF: aY,
            MF: vY
          } = YY;
          if (!DY.Am.t5(rY, "itemState")) return void(0, XY.m)(DY, rY, [RY, OY, gY], FY, {
            amount: AY,
            attributes: JSON.parse(IY),
            JF: aY,
            size: vY
          });
          const uY = DY.Am.getState(rY, "itemState");
          uY.amount = AY, uY.JF = aY, uY.creationTime = Date.now(), (0, qY.setServerPosition)(DY.Am.getState(rY, "smoothToServerPos"), RY, OY, gY)
        })), YY.ZE(aY.mb, (YY => {
          (0, HY.c)(DY).setCantPickUp(YY, !0), DY.Am.t5(YY, "itemState") && (DY.Am.getState(YY, "itemState").JF = !0)
        })), YY.ZE(aY.Ud, (YY => {
          (0, HY.c)(DY).setCantPickUp(YY, !1), DY.Am.t5(YY, "itemState") && (DY.Am.getState(YY, "itemState").JF = !1)
        })), YY.ZE(aY.Vc, (YY => {
          EY.b.applyNewClientOptions(YY)
        })), YY.ZE(aY.Zc, (YY => {
          let {
            eId: rY,
            settings: FY
          } = YY;
          (0, sr.h)(rY);
          for (const DY in FY)(0, sr.e)(rY, DY, FY[DY]);
          if ("canSee" in FY && DY.Am.t5(rY, "hidingMeshManager")) {
            const YY = DY.Am.getState(rY, "hidingMeshManager");
            YY.canSee = (0, ir.c)("canSee", FY.canSee), YY._forceUpdate = !0
          }
        })), YY.ZE(aY.bf, (YY => {
          let {
            mD: rY,
            VD: AY,
            SD: IY,
            lD: RY
          } = YY;
          const OY = [AY, IY, RY];
          DY.Am.setPosition(DY.yB, OY), (0, FY.sendColyMessage)(aY.Hg, {
            Kv: rY,
            Hv: pY.g
          }), WY.g.vo("localPlayerTeleported", {
            pos: OY,
            isCorrection: !1
          })
        })), YY.ZE(aY.hd, (YY => {
          let {
            dI: rY,
            JI: DY,
            MI: FY,
            wI: AY
          } = YY;
          this.stateReplicationHandler.setUpIfQueued(rY);
          const IY = [DY, FY, AY];
          WY.g.vo(`otherPlayerTeleported|${rY}`, {
            pos: IY
          })
        })), YY.ZE(aY.zd, (YY => {
          let {
            aI: rY,
            vI: AY,
            uI: IY,
            sI: RY,
            iI: OY,
            yI: gY,
            QI: vY,
            WI: uY,
            oI: sY,
            VI: iY
          } = YY;
          const yY = [AY, IY, RY];
          DY.Am.setPosition(DY.yB, yY);
          const QY = DY.Am.uYY(DY.yB),
            oY = DY.Am.ZZ(DY.yB);
          MY().set(oY.jH, 0, 0, 0), MY().set(oY.kH, 0, 0, 0), MY().set(oY.ci, OY, gY, vY), oY.xH(), QY._flying = null !== iY, iY ? (QY.flyAccel.SI = iY.SI, QY.flyAccel.lI = iY.lI) : QY.flyAccel.reset(), uY && QY.movementType === wY.m.GLIDING && (QY.EI = uY.EI, MY().copy(QY.mI, uY.mI)), (0, FY.sendColyMessage)(aY.Hg, {
            Kv: rY,
            Hv: pY.g
          }), WY.g.vo("localPlayerTeleported", {
            pos: yY,
            isCorrection: !0
          })
        }));

        function IY() {
          return DY.Am.fYY(DY.yB)
        }
        YY.ZE(aY.vb, (YY => {
          let {
            chatMsgId: rY,
            content: DY,
            chatterEId: FY
          } = YY;
          WY.g.vo("chat", {
            serverChatMsgId: rY,
            content: DY,
            chatterEId: FY
          }, !0)
        })), YY.ZE(aY.pd, (YY => {
          Fr.d.onReceiveColyseusPing(YY)
        })), YY.ZE(aY.Ce, (YY => {
          let {
            key: rY,
            value: DY
          } = YY;
          (0, mY.setCookie)(AY, rY, DY)
        })), YY.ZE(aY.Ie, (YY => {
          WY.g.vo("setDiscordReportKey", YY)
        })), (0, FY.onGameResetOnce)((() => {
          this.stopChunkReports()
        })), YY.ZE(aY.pc, (rY => {
          const {
            yr: AY,
            Qr: IY
          } = rY;
          if ((0, FY.setAdjustment)(IY), this.connectionResume.onInitialInfo(rY.Wr, rY.Er), FY.offlineInputReplay.mV(rY.mr), this.connectionResume.isResuming()) {
            console.log("Resumed the connection as eId", AY);
            try {
              null === rY.Vr && (0, gY.c)().client.inventoryPrediction.dropPending(), this.stopChunkReports(), this.clearBlockRules(), EY.b.apply({
                shopInfo: null,
                _shopVersion: fY.e
              });
              const FY = DY.Am.jYY(DY.yB);
              FY.HD && (FY.chestClosed(), WY.g.vo("chestToggleFromServer", !1, !0)), this.clearUiRequestsAndQTEs(), WY.g.vo("initInfoReceived", YY)
            } finally {
              const YY = null === rY.Vr ? null : {
                sync: null,
                endSeq: null
              };
              this.replayResume = YY, this.connectionResume.onResumeInitialInfo(rY.Vr, (() => {
                YY.endSeq = (0, gY.c)().client.inventoryPrediction.lastActionSeq
              })), null === YY && this.restartChunkStreaming()
            }
          } else console.log("Local client is eId", AY), WY.g.vo("loadingScreenState", "loadingPage:loadingWorld"), DY.W8 = AY, DY.Am.t5(DY.yB, DY.Am.names.entityName) && DY.Am.ZN(DY.yB, DY.Am.names.entityName), (0, gY.c)().setEntityName(DY.W8, (0, gY.c)().getRawEntityName(DY.yB)), DY.uB[DY.W8] = {}, DY.Am.zN(DY.yB, DY.Am.names.entityName), WY.g.vo("initInfoReceived", YY), this.startChunkReports(), RY.client.onServerConnectionFinalised()
        })), YY.ZE(aY.le, (() => {
          this.connectionResume.isResuming() ? this.connectionResume.onResumed((() => {
            const YY = this.replayResume;
            if (this.replayResume = null, !YY) return;
            this.restartChunkStreaming();
            const {
              inventoryPrediction: rY
            } = (0, gY.c)().client, {
              sync: AY
            } = YY, IY = new Set(FY.offlineInputReplay.takeDroppedActions());
            if (AY) {
              var RY;
              const FY = null !== (RY = YY.endSeq) && void 0 !== RY ? RY : rY.lastActionSeq;
              rY.forget((YY => YY > AY.jD && YY <= FY || IY.has(YY))), SY(DY, rY, WY.g, AY.jD, AY.load)
            } else rY.dropPending(), rY.askForSnapshot()
          })) : console.warn("ResumeComplete arrived without a resume")
        })), YY.ZE(aY.cf, (YY => {
          WY.g.vo("TopRightHelper", YY, !0)
        })), YY.ZE(aY.Dd, (YY => {
          let {
            type: rY,
            location1: DY,
            location2: FY,
            location3: AY,
            score: IY
          } = YY;
          (0, Ar.r)({
            type: rY,
            location1: DY,
            location2: FY,
            location3: AY,
            score: IY
          })
        })), YY.ZE(aY.ie, (YY => {
          let {
            type: rY,
            resourceType: DY,
            amount: FY,
            category: AY,
            itemName: IY
          } = YY;
          (0, Ar.u)({
            type: rY,
            resourceType: DY,
            amount: FY,
            category: AY,
            itemName: IY
          })
        })), YY.ZE(aY.Y, (YY => {
          DY.Mu.TrY.add(YY), DY.Mu.BrY.delete(YY)
        })), YY.ZE(aY.eb, (YY => {
          DY.Mu.BrY.add(YY), DY.Mu.TrY.delete(YY)
        })), YY.ZE(aY.Xd, (YY => {
          DY.Mu.BrY.delete(YY), DY.Mu.TrY.delete(YY)
        })), YY.ZE(aY.db, (YY => {
          DY.Mu.erY.add(YY), DY.Mu.crY.delete(YY)
        })), YY.ZE(aY.jb, (YY => {
          DY.Mu.crY.add(YY), DY.Mu.erY.delete(YY)
        })), YY.ZE(aY.Zd, (YY => {
          DY.Mu.crY.delete(YY), DY.Mu.erY.delete(YY)
        })), YY.ZE(aY.$, (YY => {
          (0, uY.ib)(YY, DY.Mu.KrY), (0, uY.ib)(YY, DY.Mu.NrY), DY.Mu.NrY.push(YY)
        })), YY.ZE(aY.fb, (YY => {
          (0, uY.ib)(YY, DY.Mu.NrY), (0, uY.ib)(YY, DY.Mu.KrY), DY.Mu.KrY.push(YY)
        })), YY.ZE(aY.Yd, (YY => {
          (0, uY.ib)(YY, DY.Mu.NrY), (0, uY.ib)(YY, DY.Mu.KrY)
        })), YY.ZE(aY.tf, (YY => {
          let {
            wY: rY,
            bY: FY
          } = YY;
          FY ? DY.Mu.sZ.delete(rY) : DY.Mu.sZ.add(rY)
        })), YY.ZE(aY.qf, (YY => {
          let {
            ND: rY,
            BD: FY
          } = YY;
          RY.updateWalkThroughRect(DY.yB, rY, FY)
        })), (0, FY.onGameResetOnce)((() => {
          this.clearBlockRules()
        })), YY.ZE(aY.$e, (YY => {
          (0, lY.c)(YY)
        })), YY.ZE(aY.ic, (YY => {
          eY.c.applyServerUpdate(YY)
        })), YY.ZE(aY.ob, (YY => {
          RY.applyServerBlocks((() => {
            ! function(YY, rY) {
              for (const {
                  oD: DY,
                  WD: FY
                }
                of rY) {
                const rY = NY.d[FY];
                if (rY) {
                  const {
                    compX: FY,
                    compY: AY,
                    compZ: IY,
                    mainMultiblock: RY
                  } = rY;
                  YY.Rl(DY[0] - FY, DY[1] - AY, DY[2] - IY, RY)
                }
              }
              for (const {
                  oD: DY,
                  WD: FY,
                  ED: AY
                }
                of rY) YY.setBlockNoMulti(DY[0], DY[1], DY[2], FY, !0), YY.blockDataOwner.setBlockData(DY[0], DY[1], DY[2], null === AY ? void 0 : JSON.parse(AY)), YY.blockAdded(DY[0], DY[1], DY[2], FY)
            }(RY, YY)
          })), WY.g.vo("changeBlockFail", YY), RY.client.triggerGameCallback("onChangeBlockFail", YY), WY.g.vo("EditBoard", {
            pos: null
          }), WY.g.vo("EditCodeBlock", {
            pos: null,
            canChangePos: null
          })
        })), YY.ZE(aY.nd, (YY => {
          let {
            pickUpItems: rY,
            pickUpAckSeq: DY
          } = YY;
          for (const {
              name: FY,
              amount: AY,
              attributes: RY
            }
            of rY) IY().pickUpItem({
            name: FY,
            amount: AY,
            typeObj: XY.C[FY],
            attributes: RY
          });
          (0, gY.c)().client.inventoryPrediction.serverChangeApplied(DY)
        })), YY.ZE(aY.Je, (YY => {
          let {
            index: rY,
            name: FY,
            amount: AY,
            attributes: IY,
            setSlotAckSeq: RY
          } = YY;
          const OY = DY.Am.jYY(DY.yB);
          (rY < OY.playerInventory.numSlots || OY.HD || OY.inCreative) && OY.setItemSlot(rY, FY, AY, IY), (0, gY.c)().client.inventoryPrediction.serverChangeApplied(RY)
        })), YY.ZE(aY.Ze, (YY => {
          let {
            cD: rY,
            fD: FY,
            jD: AY
          } = YY;
          const {
            inventoryPrediction: IY
          } = (0, gY.c)().client, RY = () => {
            DY.Am.jYY(DY.yB).loadFromString(rY)
          };
          this.replayResume && (this.replayResume.sync = {
            jD: AY,
            load: RY
          }), SY(DY, IY, WY.g, AY, RY, FY)
        })), YY.ZE(aY.rc, (YY => {
          (0, gY.c)().client.inventoryPrediction.acknowledge(YY)
        })), YY.ZE(aY.E, (YY => {
          let {
            wF: rY,
            bF: DY,
            XF: FY,
            qF: AY
          } = YY;
          (0, gY.c)().client.itemDropPrediction.onActionItemDrops(rY, DY, FY, AY)
        })), YY.ZE(aY.Jb, (YY => {
          IY().clearInventory(), (0, gY.c)().client.inventoryPrediction.serverChangeApplied(YY)
        })), YY.ZE(aY.Gc, (YY => {
          let {
            leaveEventType: rY,
            category: DY,
            subCategory: FY,
            value: AY
          } = YY;
          (0, Ar.D)({
            leaveEventType: rY,
            category: DY,
            subCategory: FY,
            value: AY
          })
        })), YY.ZE(aY.Tb, (YY => {
          let {
            cat1: rY,
            cat2: DY,
            cat3: FY,
            value: AY
          } = YY;
          (0, Ar.l)({
            cat1: rY,
            cat2: DY,
            cat3: FY,
            value: AY
          })
        }));
        const RY = (0, gY.c)();
        YY.ZE(aY.Ob, (YY => {
          RY.applyServerBlocks((() => {
            KY(RY, eY.c, YY)
          }))
        })), YY.ZE(aY.Me, (YY => {
          WY.g.vo("setSelectedInventorySlotI", YY, !0)
        })), YY.ZE(aY.Cc, (YY => {
          let {
            category: rY,
            timeframe: DY,
            data: FY
          } = YY;
          WY.g.vo("leaderboardResponse", {
            category: rY,
            timeframe: DY,
            data: FY
          })
        })), YY.ZE(aY.V, (YY => {
          let {
            WF: rY,
            EF: DY
          } = YY;
          this.stateReplicationHandler.setUpIfQueued(rY), rY = (0, dY.e)(rY), (0, gY.c)().client.gameRecorder.recordBulletShot(rY, DY), WY.g.vo(`bulletShot|${rY}`, {
            bulletDirections: DY
          })
        })), YY.ZE(aY.kc, (YY => {
          let {
            QF: rY,
            oF: DY
          } = YY;
          WY.g.vo("damagedByOtherPlayer", {
            QF: rY,
            direction: DY
          }, !0)
        })), YY.ZE(aY.wd, (YY => {
          WY.g.vo("playerKilled", YY, !0), (0, gY.c)().client.gameRecorder.recordPlayerKilled(YY.deadEId, YY.killerEId, YY.withItem, YY.killstreak)
        })), YY.ZE(aY.Ub, (YY => {
          WY.g.vo("customKillfeed", YY, !0), (0, gY.c)().client.gameRecorder.recordCustomKillfeed(YY.killer, YY.victim, YY.withItem)
        })), YY.ZE(aY.Ed, (YY => {
          let {
            FY: rY,
            AY: FY
          } = YY;
          this.stateReplicationHandler.setUpIfQueued(rY);
          const AY = DY.Am.rrY(rY);
          null !== AY && void 0 !== AY && AY.isGun() && AY.reload(Date.now(), FY)
        })), YY.ZE(aY.Ve, (() => {
          WY.g.vo("showShopTutorial", null, !0)
        })), YY.ZE(aY.Bd, (YY => {
          WY.g.vo("progressBarUpdate", YY, !0)
        })), YY.ZE(aY.qc, (YY => {
          WY.g.vo("middleScreenBarInitiate", {
            duration: YY.er,
            Nr: YY.Nr,
            horizBarRemOffset: YY.Br
          }, !0)
        })), YY.ZE(aY.Nd, (() => {
          WY.g.vo("middleScreenBarRemove", !0)
        })), YY.ZE(aY.qe, (YY => {
          let {
            iD: rY,
            iY: FY
          } = YY;
          const AY = FY ? (0, ar.e)(DY, FY) : void 0;
          WY.g.vo("sendHitmarker", {
            iD: rY,
            screenPos: AY
          }, !0)
        })), YY.ZE(aY.Fe, (YY => {
          let {
            id: rY,
            position: DY,
            style: FY,
            IY: AY,
            aY: IY
          } = YY;
          WY.g.vo("setDirectionArrow", {
            id: rY,
            position: DY,
            style: FY,
            text: (0, aY.q)(AY),
            aY: IY
          }, !0)
        })), YY.ZE(aY.Fb, (YY => {
          let {
            id: rY
          } = YY;
          WY.g.vo("clearDirectionArrow", {
            id: rY
          }, !0)
        })), YY.ZE(aY.H, (YY => {
          let {
            pF: rY,
            kF: FY,
            animationScript: AY,
            GF: IY,
            nF: RY,
            PF: OY,
            UF: aY
          } = YY;
          rY = (0, dY.e)(rY);
          const vY = null === AY && null !== OY ? (0, zY.f)(OY, aY) : AY;
          (0, gY.c)().client.gameRecorder.recordAnimateEntity(rY, FY, vY, IY, RY), (0, HY.c)(DY).animations.animateEntity(rY, FY, AY, IY, RY, OY, aY), null !== AY || rY === DY.yB && FY === ur.d.Emote && (0, gY.c)().client.cameraController.endTemporaryThirdPerson()
        })), YY.ZE(aY.kf, (YY => {
          let {
            qI: rY,
            pI: DY
          } = YY;
          if (RY.KJ(rY[0], rY[1], rY[2])) {
            const YY = (0, gY.c)().sE(rY[0], rY[1], rY[2]);
            (0, gY.c)().updateMailboxContents(rY[0], rY[1], rY[2], YY, DY)
          }
        })), YY.ZE(aY.zb, (YY => {
          let {
            mF: rY,
            VF: FY,
            SF: AY,
            lF: IY,
            TF: RY,
            eF: OY,
            NF: aY,
            BF: vY
          } = YY;
          const uY = DY.Am.jYY(DY.yB);
          if (OY) {
            const {
              KD: YY,
              jD: rY
            } = vY;
            return (0, gY.c)().client.inventoryPrediction.q_(rY, (() => {
              uY.chestRefreshed(FY, AY, IY, aY, YY)
            })) && WY.g.vo("chestToggleFromServer", !1, !0), void WY.g.vo("chestRefreshedFromServer")
          }(rY || uY.HD) && (rY ? (uY.chestOpened(FY, AY, IY, RY, aY), null !== RY && (0, gY.c)().client.ironChestPasskeyCache.onChestOpened(IY, RY)) : uY.chestClosed(), WY.g.vo("chestToggleFromServer", rY, !0))
        })), YY.ZE(aY.Wb, (YY => {
          let {
            craftingRecipeItemName: rY,
            recipesForItem: FY
          } = YY;
          rY ? RY.craftingManager.editRecipesForPlayer(DY.yB, rY, FY) : RY.craftingManager.resetAllPlayerRecipes(DY.yB), WY.g.vo("craftingRecipesEdited", {
            itemName: rY,
            recipesForItem: FY
          })
        })), YY.ZE(aY.Pe, (YY => {
          let {
            vehicleEId: rY,
            overrides: DY
          } = YY;
          (0, gY.c)().applyRiddenVehicleSettingOverrides(rY, DY)
        })), YY.ZE(aY.pf, (YY => {
          let {
            vA: rY,
            uA: FY,
            sA: AY
          } = YY;
          const IY = DY.Am.uYY(DY.yB).physicsState.type === wY.n.SLEEPING && rY === wY.n.DEFAULT;
          (0, gY.c)().updatePositionAndPhysics(DY.yB, {
            type: rY,
            tier: FY
          }, !0, AY), IY && (0, gY.c)().updateHeldVehicleStatus()
        })), YY.ZE(aY.qb, (YY => {
          let {
            TD: rY,
            eD: FY
          } = YY;
          DY.Am.ZYY(DY.yB).setPose(rY, FY)
        })), YY.ZE(aY.oe, (YY => {
          (0, yr.b)(YY)
        })), YY.ZE(aY.ud, (YY => {
          for (const rY of YY)(0, kY.A)(rY);
          WY.g.vo("playerCosmeticsUpdated", YY, !0)
        })), YY.ZE(aY.L, (YY => {
          for (const rY of YY)(0, Rr.f)(DY, rY)
        })), YY.ZE(aY.Mc, (YY => {
          let {
            vY: rY,
            uY: FY,
            yY: AY,
            QY: IY,
            oY: OY,
            WY: gY,
            EY: aY
          } = YY;
          this.stateReplicationHandler.setUpIfQueued(rY), rY = (0, dY.e)(rY);
          const vY = DY.Am.xYY(rY);
          if (vY && (vY.lastHurtTime = performance.now()), (0, bY.playRigHurt)(DY, rY, gY), WY.g.vo("lifeformHurt", {
              eId: rY,
              EY: aY
            }), FY) {
            const YY = (0, ar.e)(DY, FY.iY);
            WY.g.vo("yourAttackHit", {
              iD: IY,
              screenPos: YY,
              hitSelf: rY === DY.yB
            })
          }
          rY === DY.yB && (RY.shakePlayerCamera(rY, OY / 40, 200), WY.g.vo("closeShopOnDamaged", null), WY.g.vo("damagedByOtherPlayer", {
            QF: null,
            direction: gY,
            oY: OY
          }, !0));
          const uY = DY.Am.lE(rY);
          if (uY && (AY || IY)) {
            const YY = [uY[0], uY[1] + 1, uY[2]];
            AY && (0, GY.g)(DY, GY.D, YY, 15), IY && (0, GY.g)(DY, GY.n, YY, 10)
          }
        })), YY.ZE(aY.Kc, (YY => {
          let {
            uF: rY,
            sF: FY,
            iF: AY
          } = YY;
          (0, HY.c)(DY).setHealthFrac((0, dY.e)(rY), AY), WY.g.vo("lifeformHealthChanged", {
            eId: (0, dY.e)(rY),
            sF: FY,
            iF: AY
          })
        })), YY.ZE(aY.P, (YY => {
          let {
            JY: rY,
            MY: FY
          } = YY;
          (0, gY.c)().playerAttacked(DY.yB, rY, FY)
        })), YY.ZE(aY.Bc, (YY => {
          (0, gY.c)().client.leaveGameUnwanted({
            reason: YY,
            requiresRefresh: !1,
            canReconnect: !1,
            automaticallyReconnect: !1
          }), (0, Dr.navigatePreserveSearch)("/")
        })), YY.ZE(aY.Kd, (YY => {
          let {
            vD: rY,
            uD: DY,
            sD: FY
          } = YY;
          IY().removeItemName(rY, DY), (0, gY.c)().client.inventoryPrediction.serverChangeApplied(FY)
        })), YY.ZE(aY.ye, (YY => {
          const {
            ta: rY,
            srY: FY
          } = (0, xY.f)([YY[0], YY[1], YY[2]]);
          or.c.setLookDirection(DY, rY, FY), (0, nY.o)(rY, FY);
          const AY = DY.Am.ZYY(DY.yB);
          AY && (AY.heading = rY)
        })), YY.ZE(aY.Be, (YY => {
          RY.client.cameraController.setCameraZoom(YY)
        })), YY.ZE(aY.Re, (YY => {
          let {
            KF: rY,
            HF: FY
          } = YY;
          RY.shakePlayerCamera(DY.yB, rY, FY)
        })), YY.ZE(aY.Pb, (YY => {
          (0, rr.onCosmeticPackGranted)(YY)
        })), YY.ZE(aY.re, (YY => {
          WY.g.vo("serverUpdating", Date.now() + YY, !0)
        })), YY.ZE(aY.Uc, ZY.e), YY.ZE(aY.bd, (YY => {
          let {
            id: rY,
            hD: DY
          } = YY;
          const {
            type: AY,
            params: IY
          } = (0, gr.d)(DY), RY = {
            ...IY
          };
          for (const FY of gr.c) FY in RY && RY[FY] && (RY[FY] = (0, aY.q)(RY[FY]));
          Or.b.queueQTE(rY, AY, RY).getResult().then((YY => {
            "boolean" === typeof YY && (0, FY.sendColyMessage)(aY.Yh, {
              qteId: rY,
              qteResponse: YY
            })
          }))
        })), YY.ZE(aY.Rd, (YY => {
          Or.b.cancelQTE(YY)
        })), (0, FY.onGameResetOnce)((() => {
          Or.b.reset()
        })), YY.ZE(aY.dd, (YY => {
          let {
            id: rY,
            clientParameters: DY
          } = YY;
          (0, TY.g)(rY, DY)
        })), YY.ZE(aY.Sd, (YY => {
          (0, TY.i)(YY)
        })), YY.ZE(aY.hf, (YY => {
          let {
            text: rY,
            id: DY
          } = YY;
          (0, TY.j)(DY, rY, (YY => {
            (0, FY.sendColyMessage)(aY.rj, {
              za: DY,
              Za: YY,
              Ca: 5
            })
          }))
        })), YY.ZE(aY.Xb, (YY => {
          let {
            VY: rY,
            SY: DY,
            lY: FY,
            TY: AY,
            eY: IY,
            NY: RY
          } = YY;
          rY = (0, dY.e)(rY), (0, gY.c)().client.updateEffect(rY, DY, {
            displayName: FY,
            icon: AY,
            duration: IY,
            level: RY
          })
        })), YY.ZE(aY.Gd, (YY => {
          let {
            VY: rY,
            SY: DY
          } = YY;
          rY = (0, dY.e)(rY), (0, gY.c)().client.removeEffect(rY, DY)
        })), YY.ZE(aY.yc, (YY => {
          DY.Am.ZYY(DY.yB).jumpMultiplier.setMultiplierType("jumpEffectAmount", YY)
        })), YY.ZE(aY.ef, (YY => {
          WY.g.vo("ttbEffectMultiplier", YY)
        })), (0, FY.onGameResetOnce)((() => {
          DY.Am.ZYY(DY.yB).jumpMultiplier.setMultiplierType("jumpEffectAmount", 1)
        })), YY.ZE(aY.$c, (YY => {
          (0, GY.j)(DY, (0, uY.v)(YY))
        })), YY.ZE(aY.ad, (YY => {
          vr.d[YY.fY] ? (0, GY.j)(DY, {
            ...vr.d[YY.fY],
            pos1: YY.pos1,
            pos2: YY.pos2
          }) : console.error(`Unknown preset id: ${YY.fY}`)
        })), YY.ZE(aY.qd, (YY => {
          var rY, DY;
          let {
            BY: FY,
            cY: AY,
            KY: IY,
            HY: RY
          } = YY, {
            ZY: OY,
            CY: aY
          } = null !== RY && void 0 !== RY ? RY : {};
          const {
            zY: vY
          } = null !== RY && void 0 !== RY ? RY : {};
          OY = null !== (rY = OY) && void 0 !== rY ? rY : void 0, aY = null !== (DY = aY) && void 0 !== DY ? DY : void 0, "string" === typeof vY && this.stateReplicationHandler.setUpIfQueued(vY), (0, gY.c)().client.gameRecorder.recordPlaySound(FY, AY, IY, RY), UY.b.play((0, LY.d)(FY), AY, vY, OY, aY).rate(IY)
        })), YY.ZE(aY.ve, (YY => {
          let {
            pos: rY,
            data: DY
          } = YY;
          RY.blockDataOwner.setBlockData(rY[0], rY[1], rY[2], DY), RY.blockAdded(rY[0], rY[1], rY[2], RY.sE(rY[0], rY[1], rY[2]))
        })), YY.ZE(aY.ld, (YY => {
          let {
            info: rY
          } = YY;
          WY.g.vo("overShopInfo", rY, !0)
        })), YY.ZE(aY.dc, (YY => {
          let {
            yD: FY,
            QD: AY
          } = YY;
          rY.openShop(DY.yB, FY, AY)
        })), YY.ZE(aY.I, (YY => {
          DY.Am.ZZ(DY.yB).applyImpulse(YY)
        })), YY.ZE(aY.Qe, (YY => {
          const rY = DY.Am.ZZ(DY.yB);
          MY().set(rY.jH, 0, 0, 0), MY().set(rY.kH, 0, 0, 0), MY().copy(rY.ci, YY), rY.xH()
        })), YY.ZE(aY.Qc, (YY => {
          console.error(`[logErrorToConsole]: ${YY}`)
        })), YY.ZE(aY.bc, (YY => {
          let {
            jY: rY,
            hY: DY,
            dY: FY
          } = YY;
          WY.g.vo("flyingMiddleMessage", {
            content: (0, aY.q)(rY),
            hY: DY,
            dY: FY
          }, !0)
        })), YY.ZE(aY.xf, (YY => {
          const rY = YY === CY.g ? null : {
            message: `Currently loaded as variation: ${YY}`,
            type: "Warning"
          };
          WY.g.vo("showPermanentBottomMessage", rY, !0)
        })), YY.ZE(aY.gc, (YY => {
          let {
            messageType: rY,
            data: DY
          } = YY;
          (0, tY.d)(rY) ? (0, tY.b)(rY, DY) : ("freeCamPerms" === rY && RY.client.freeCameraController.setPerms(DY.key, DY.value), RY.client.triggerGameCallback("onReceivedMessageFromServer", rY, DY))
        })), YY.ZE(aY.tb, (() => {
          const YY = DY.Am.rrY(DY.yB);
          null !== YY && void 0 !== YY && YY.isChargeable() && YY.finishCharging(!1, Date.now())
        })), YY.ZE(aY.Id, (YY => {
          let {
            mY: rY
          } = YY;
          RY.craftingManager.removeRecipes(DY.yB, rY), WY.g.vo("craftingRecipesEdited", {
            itemName: rY,
            recipesForItem: []
          })
        })), YY.ZE(aY.nf, (YY => {
          for (const rY in YY) {
            const DY = YY[rY];
            for (const YY in DY) RY.client.meshCreator.handleParticleSystemUpdate(rY, YY, DY[YY])
          }
        })), (0, FY.onGameResetOnce)((() => {
          (0, Ir.setFloatingYValue)(DY.Am.getState(DY.yB, "physics"), DY.Am.bM(DY.yB), null)
        })), YY.ZE(aY.$b, (YY => {
          let {
            OD: rY,
            gD: FY,
            aD: AY
          } = YY;
          const IY = (0, dY.e)(rY);
          if (IY === DY.yB) {
            const YY = DY.Am.bM(DY.yB).position;
            AY ??= Math.floor(YY[1]) - 1, (0, Ir.setFloatingYValue)(DY.Am.getState(DY.yB, "physics"), DY.Am.bM(DY.yB), FY ? AY : null)
          }(0, HY.c)(DY).setFloating(IY, FY, AY);
          const RY = DY.Am.getState(IY, "floating");
          RY && (RY.isFloating = FY, RY.aD = FY ? AY : null)
        })), YY.ZE(aY.Nb, Yr.m)
      }
    }
    window.addEventListener("beforeunload", (() => {}));
    var Er = DY(38405),
      mr = DY(38410),
      Vr = DY(668),
      Sr = DY(2817);
    class lr {
      constructor(YY, rY, DY, FY) {
        this.msgHandler = DY, this.listener = FY, this.session = void 0, this.attachedRoom = null, this.detachRoomListeners = null, this.suspended = !1, this.droppedAt = 0, this.session = new Er.c({
          reconnect: YY,
          isLive: () => FY.isLive(),
          onReconnected: YY => {
            this.resumeOnRoom(YY)
          },
          onGaveUp: (YY, rY) => {
            FY.onGaveUp(YY, rY)
          },
          freeze: rY,
          releaseSeat: rY => {
            YY(rY).then((YY => {
              YY.leave(!0)
            }), (YY => {
              console.warn("Couldn't release the held seat of a game left while reconnecting", YY)
            }))
          }
        })
      }
      onInitialInfo(YY, rY) {
        this.session.onInitialInfo(YY, rY)
      }
      isResuming() {
        return this.session.isResuming()
      }
      getDroppedAt() {
        return this.droppedAt
      }
      onResumeInitialInfo(YY, rY) {
        if (this.session.onResuming(), null === YY) {
          try {
            (0, gY.c)().client.itemDropPrediction.reset()
          } catch (DY) {
            console.error("Error dropping the item drop predictions on resuming", DY)
          }
          return FY.offlineInputReplay.discard(), void this.setSuspended(!1)
        }(0, gY.c)().client.itemDropPrediction.onResumeReplayOffered(), FY.offlineInputReplay.replayFrom(YY.lr, rY)
      }
      onResumed(YY) {
        this.setSuspended(!1), (0, FY.resendBeacons)();
        try {
          YY()
        } catch (rY) {
          console.error("Error completing the resume", rY)
        } finally {
          this.session.onResumed()
        }
      }
      attachRoom(YY) {
        const rY = (0, Vr.f)((() => YY.connection.isOpen));
        YY.XE(rY);
        const DY = new mr.b((() => {
          this.session.canHoldSeat() && this.listener.isLive() && (console.warn("The game server went silent, reconnecting"), this.onConnectionDropped(YY, "silent"), YY.leave(!1))
        }));
        YY.onStateChange((() => {
          DY.heard()
        }));
        const FY = rY => {
          rY.persisted || YY.leave(!0)
        };
        window.addEventListener("pagehide", FY), YY.XE(((rY, DY) => {
          if (YY === this.attachedRoom && this.listener.isLive()) return (0, IY.e)(rY) && this.session.canHoldSeat() ? (console.warn(`Connection to the game server dropped with code ${rY}, reconnecting`), this.listener.onDropped(rY, DY), void this.onConnectionDropped(YY, String(rY))) : void this.listener.onRoomLeft(rY, DY)
        })), this.attachedRoom = YY, this.detachRoomListeners = () => {
          rY(), DY.dispose(), window.removeEventListener("pagehide", FY)
        }
      }
      dispose() {
        this.detachRoom(), this.session.leave(), this.setSuspended(!1)
      }
      setSuspended(YY) {
        YY !== this.suspended && (this.suspended = YY, (0, FY.setConnectionSuspended)(YY), (0, gY.c)().client.itemDropPrediction.setSuspended(YY))
      }
      detachRoom() {
        var YY;
        null === (YY = this.detachRoomListeners) || void 0 === YY || YY.call(this), this.detachRoomListeners = null, this.attachedRoom = null
      }
      onConnectionDropped(YY, rY) {
        (0, Sr.e)("disconnect", "Left room", rY), this.isResuming() || (this.droppedAt = Date.now()), this.detachRoom(), FY.offlineInputReplay.onConnectionLost(), this.setSuspended(!0), this.session.onConnectionLost(YY.reconnectionToken)
      }
      resumeOnRoom(YY) {
        if (!this.listener.isLive()) return console.warn("Left the game while reconnecting, leaving the resumed room"), YY.leave(!0), void this.dispose();
        console.log("Reconnected to the game server, waiting for the game to resume"), (0, yr.p)(), FY.offlineInputReplay.onConnectionReplaced(), this.msgHandler.tgY(YY), this.listener.onReconnected(YY), this.attachRoom(YY)
      }
    }
    var Tr = DY(3036),
      er = DY(3045),
      Nr = DY(1322),
      Br = DY(4252),
      cr = DY(2743),
      Kr = DY(1113),
      Hr = DY(37027),
      zr = DY(38418),
      Zr = DY(38420),
      Cr = DY(3258),
      fr = DY(38427),
      jr = DY(1692),
      hr = DY(2507);

    function dr(YY) {
      var rY, DY;
      if ("object" !== typeof YY || null === YY) return {
        errType: typeof YY
      };
      const FY = YY;
      return {
        errType: null !== (rY = null === (DY = YY.constructor) || void 0 === DY ? void 0 : DY.name) && void 0 !== rY ? rY : "",
        errName: "string" === typeof FY.name ? FY.name : "",
        eventType: "string" === typeof FY.type ? FY.type : "",
        errStack: "string" === typeof FY.stack ? FY.stack.split("\n").slice(1).join(" | ") : ""
      }
    }

    function Jr(YY) {
      if ("undefined" !== typeof ProgressEvent && YY instanceof ProgressEvent) return !0;
      if (!(YY instanceof Error)) return !1;
      const rY = YY.code;
      return "ServerError" === YY.name && void 0 === rY || "AbortError" === YY.name || "seat reservation expired." === YY.message || "early_leave" === YY.message
    }(0, QY.j)((YY => {
      (0, Sr.e)("wasm_net", YY)
    }));
    let Mr = !0;

    function wr() {
      Mr = !1
    }
    class br {
      constructor(YY) {
        this.gameNameWithVariation = void 0, this.lobbyName = void 0, this.colyClient = void 0, this.userContext = void 0, this.joinedAt = null, this.checkSendPath = () => {}, this.Gu = void 0, this.connectionResume = void 0, this.incomingMsgInitialisor = void 0, this.gameNameWithVariation = YY.gameNameWithVariation, this.lobbyName = YY.lobbyName, this.colyClient = YY.colyClient, this.userContext = YY.userContext
      }
      async connectToServer(YY, rY, DY) {
        EY.b.reset(), YY.uB = {
          [YY.yB]: {}
        }, YY.W8 = void 0, (0, yr.p)(), (0, gY.c)().removeAllEntityNames(), (0, gY.c)().setEntityName(YY.yB, this.userContext.getPlayerName()), (0, Nr.n)({
          lobbyName: this.lobbyName
        }), console.log("Waiting for clientConnection passed promise to resolve");
        const RY = (0, jr.g)();
        console.log("joining server with game", this.gameNameWithVariation, "lobbyName", this.lobbyName);
        const OY = performance.now(),
          aY = (0, Zr.g)(this.userContext, (() => {
            const {
              roomName: FY,
              joinOptions: AY
            } = (0, VY.d)(this.userContext, this.gameNameWithVariation, this.lobbyName, rY, (YY => cr.d.isUsingCustomGameTexturePack(YY)));
            return AY.joinAdHold = RY, AY.renderBackend = (0, hr.c)(YY.sQ), (0, zr.f)((() => this.colyClient.joinOrCreate(FY, AY)), DY)
          }));
        return WY.g.vo("loadingScreenState", "loadingPage:joiningLobby"), await aY.then((rY => {
          if (this.joinedAt = performance.now(), this.Gu = YY, RY) {
            const YY = (0, jr.o)((() => {
              rY.send(AY.f)
            }));
            rY.XE(YY), (0, FY.onGameResetOnce)(YY)
          }
          const DY = new oY(rY);
          this.connectionResume = new lr((YY => this.colyClient.reconnect(YY)), (rY => {
            YY.wV(rY)
          }), DY, {
            isLive: () => (0, gY.c)().client.getMsgHandler() === DY,
            onDropped: (YY, rY) => {
              (0, er.l)(YY) || this.logUnrecognisedConnectionLoss(YY, void 0, {
                site: "drop",
                closeReason: null !== rY && void 0 !== rY ? rY : "",
                sinceJoined: this.sinceJoined()
              })
            },
            onRoomLeft: (YY, rY) => {
              this.onRoomLeft(YY, rY)
            },
            onReconnected: YY => {
              this.incomingMsgInitialisor.tgY(YY), this.checkSendPath = (0, Hr.d)(DY, YY, QY.k)
            },
            onGaveUp: (YY, rY) => {
              this.onResumeGaveUp(YY, rY)
            }
          }), this.connectionResume.attachRoom(rY), (0, FY.onGameResetOnce)((() => {
            this.connectionResume.dispose()
          }));
          const IY = DY.send,
            OY = DY.ZE,
            aY = DY.frY.send,
            vY = DY.frY.ZE,
            uY = DY.UgY;
          this.checkSendPath = (0, Hr.d)(DY, rY, QY.k);
          const sY = setInterval((() => {
            IY === DY.send && OY === DY.ZE && aY === DY.frY.send && vY === DY.frY.ZE && uY === DY.UgY || wr(), this.checkSendPath()
          }), 1e4);
          return (0, FY.onGameResetOnce)((() => {
            clearInterval(sY)
          })), {
            success: !0,
            successDetails: DY
          }
        })).catch((rY => {
          if (DY.aborted && rY === (0, Cr.h)(DY)) return {
            success: !1,
            failDetails: {
              reason: "Left the game while it loaded",
              requiresRefresh: !1,
              canReconnect: !1
            }
          };
          if (rY instanceof fr.e) return console.warn("Seat request timed out", this.lobbyName, this.gameNameWithVariation), {
            success: !1,
            failDetails: {
              reason: rY.message,
              requiresRefresh: !1,
              canReconnect: !1,
              gameServerUnreachable: "timedOut"
            }
          };
          YY.CQ(`Failed to connect to bloxd room, check your internet connection. lobbyName: ${this.lobbyName}, gameNameWithVariation: ${this.gameNameWithVariation} code: ${rY.code}\n`, rY);
          const FY = rY.code;
          return FY === IY.c.serverUpdating.code ? (this.goToUpdateWaiting(), {
            success: !1,
            failDetails: {
              reason: IY.c.serverUpdating.text,
              requiresRefresh: !1,
              canReconnect: !0,
              goesToUpdateWaiting: !0
            }
          }) : {
            success: !1,
            failDetails: {
              ...this.onConnectionToServerLost(FY, rY.message, {
                site: "join",
                sinceJoinStart: (0, er.d)(performance.now() - OY),
                ...dr(rY)
              }, Jr(rY)),
              rematch: (0, zr.d)(rY)
            }
          }
        }))
      }
      setupServerListeners(YY, rY, DY) {
        WY.g.vo("loadingScreenState", "loadingPage:loadingPlayerInfo"), this.incomingMsgInitialisor = new Wr(this.gameNameWithVariation, rY.frY, YY, this.connectionResume), this.incomingMsgInitialisor.setupStateReplicationHandlers();
        const AY = rY.FaY();
        this.incomingMsgInitialisor.setupOnMessageListeners(AY, DY), (0, FY.onConnectionToServerReady)(AY, rY), AY.finishRegistration()
      }
      dispose() {
        this.connectionResume.dispose()
      }
      onResumeGaveUp(YY, rY) {
        (0, Kr.jQ)(new Error("Reconnect failed"), {
          ...(0, Tr.k)(rY),
          game: this.gameNameWithVariation
        }), (0, Sr.e)("disconnect", "Reconnect failed", rY.reason), (0, gY.c)().client.leaveGameUnwanted({
          reason: {
            translationKey: "general:lostConnection"
          },
          canReconnect: !YY,
          canPlayAgain: YY,
          requiresRefresh: !1,
          automaticallyReconnect: !1
        }), (0, Dr.navigatePreserveSearch)("/")
      }
      sinceJoined() {
        return null === this.joinedAt ? "" : (0, er.d)(performance.now() - this.joinedAt)
      }
      onRoomLeft(YY, rY) {
        var DY;
        if (YY === IY.c.gameOrPluginKick.code) return;
        if (console.log(`Left room with code ${YY}`), YY === IY.c.serverUpdating.code) return (0, Sr.e)("disconnect", "Left room", "serverUpdating"), (0, gY.c)().client.leaveGame(this.getUpdateWaitingUrl()), void this.goToUpdateWaiting();
        this.Gu.CQ(`Kicked from server with code ${YY}`, new Error);
        const FY = Object.keys(IY.c).find((rY => IY.c[rY].code === YY));
        (0, Sr.e)("disconnect", "Left room", null !== FY && void 0 !== FY ? FY : String(YY));
        const AY = this.onConnectionToServerLost(YY, void 0, {
          site: "leave",
          closeReason: null !== rY && void 0 !== rY ? rY : "",
          sinceJoined: this.sinceJoined()
        });
        (0, gY.c)().client.leaveGameUnwanted({
          reason: `You have disconnected from the server.\n${AY.reason}`,
          canReconnect: AY.canReconnect,
          requiresRefresh: AY.requiresRefresh,
          automaticallyReconnect: null !== (DY = AY.automaticallyReconnect) && void 0 !== DY && DY
        }), (0, Dr.navigatePreserveSearch)("/")
      }
      getUpdateWaitingUrl() {
        return (0, Br.C)(this.gameNameWithVariation, this.lobbyName)
      }
      goToUpdateWaiting() {
        (0, Dr.navigatePreserveSearch)(this.getUpdateWaitingUrl())
      }
      onConnectionToServerLost(YY, rY, DY) {
        var FY;
        let AY = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        if (null !== (FY = rY) && void 0 !== FY && FY.endsWith(IY.h) && (this.userContext.invalidateTrafficCode(), rY = rY.replace(IY.h, "")), YY === IY.c.outdatedVersion.code) return console.error("Outdated client with version ", RY.d, ", refreshing page"), (0, mY.reloadBloxd)(), {
          reason: "Outdated client",
          requiresRefresh: !0,
          canReconnect: !1
        };
        if (YY === IY.c.loadRecaptchaError.code) return console.error("Load recaptcha error, refreshing page"), (0, mY.reloadBloxd)(), {
          reason: "Failed to load recaptcha",
          requiresRefresh: !0,
          canReconnect: !1
        };
        for (const RY in IY.c) {
          const {
            code: DY,
            text: FY,
            canReconnect: AY
          } = IY.c[RY];
          if (DY === YY) {
            console.log("matched known error", YY, "leaving game");
            return {
              reason: "" !== FY ? FY : rY || `Code: ${YY}`,
              requiresRefresh: !1,
              canReconnect: AY,
              automaticallyReconnect: DY === IY.c.customGameUpdated.code || DY === IY.c.duplicateLobbyNameError.code
            }
          }
        }
        return console.log("Didn't match known error, leaving game"), (0, er.h)(YY) || AY ? console.warn("Connection lost", YY, rY) : this.logUnrecognisedConnectionLoss(YY, rY, DY), {
          reason: `Either your internet isn't working or this is a bug.\nCode: ${YY}`,
          requiresRefresh: !1,
          canReconnect: !1,
          gameServerUnreachable: AY ? "failed" : void 0
        }
      }
      logUnrecognisedConnectionLoss(YY, rY, DY) {
        (0, Kr.jQ)(new Error("Unrecognised connection loss"), {
          code: String(YY),
          cause: null !== rY && void 0 !== rY ? rY : "",
          ...DY,
          game: this.gameNameWithVariation,
          ...(0, er.m)()
        })
      }
    }
  },
  38375: (YY, rY, DY) => {
    DY.d(rY, {
      b: () => GD,
      d: () => tD
    });
    var FY, AY, IY, RY, OY, gY, aY, vY, uY, sY, iY, yY, QY, oY, WY, EY, mY, VY, SY, lY, TY, eY, NY, BY, cY, KY, HY, zY, ZY, CY, fY, jY, hY, dY, JY, MY, wY, bY, XY, qY, pY, kY, GY, xY, nY, PY, UY, LY, tY, Yr, rr, Dr, Fr, Ar, Ir, Rr, Or, gr, ar, vr, ur, sr, ir, yr, Qr, or, Wr, Er, mr, Vr, Sr, lr, Tr, er, Nr, Br, cr, Kr, Hr, zr, Zr, Cr, fr, jr, hr, dr, Jr, Mr, wr, br, Xr, qr, pr, kr, Gr, xr, nr, Pr, Ur, Lr = DY(25),
      tr = DY(36892),
      YD = DY(38389),
      rD = DY(38394),
      DD = DY(8526),
      FD = DY(616),
      AD = DY(614),
      ID = DY(36174);
    let RD = (FY = (0, DD.type)("number"), AY = (0, DD.type)("number"), IY = (0, DD.type)("number"), RY = (0, DD.type)("number"), OY = (0, DD.type)("number"), gY = (0, DD.type)("number"), aY = (0, DD.type)("string"), vY = class extends DD.Schema {
        constructor() {
          super(...arguments), (0, YD.b)(this, "id", uY, this), (0, YD.b)(this, "amount", sY, this), (0, YD.b)(this, "x", iY, this), (0, YD.b)(this, "y", yY, this), (0, YD.b)(this, "z", QY, this), (0, YD.b)(this, "size", oY, this), (0, YD.b)(this, "attributes", WY, this)
        }
      }, uY = (0, rD.e)(vY.prototype, "id", [FY], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return 0
        }
      }), sY = (0, rD.e)(vY.prototype, "amount", [AY], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return 0
        }
      }), iY = (0, rD.e)(vY.prototype, "x", [IY], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return 0
        }
      }), yY = (0, rD.e)(vY.prototype, "y", [RY], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return 0
        }
      }), QY = (0, rD.e)(vY.prototype, "z", [OY], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return 0
        }
      }), oY = (0, rD.e)(vY.prototype, "size", [gY], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return 1
        }
      }), WY = (0, rD.e)(vY.prototype, "attributes", [aY], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return "{}"
        }
      }), vY),
      OD = (EY = (0, DD.type)("string"), mY = (0, DD.type)("string"), VY = class extends DD.Schema {
        constructor() {
          super(...arguments), (0, YD.b)(this, "itemName", SY, this), (0, YD.b)(this, "enchantmentTier", lY, this)
        }
      }, SY = (0, rD.e)(VY.prototype, "itemName", [EY], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: null
      }), lY = (0, rD.e)(VY.prototype, "enchantmentTier", [mY], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: null
      }), VY),
      gD = (TY = (0, DD.type)("string"), eY = (0, DD.type)("string"), NY = (0, DD.type)("number"), BY = (0, DD.type)("number"), cY = (0, DD.type)("number"), KY = (0, DD.type)("float32"), HY = (0, DD.type)("float32"), zY = (0, DD.type)("float32"), ZY = (0, DD.type)("string"), CY = (0, DD.type)(["number"]), fY = (0, DD.type)("boolean"), jY = class extends DD.Schema {
        constructor() {
          super(...arguments), (0, YD.b)(this, "type", hY, this), (0, YD.b)(this, "name", dY, this), (0, YD.b)(this, "x", JY, this), (0, YD.b)(this, "y", MY, this), (0, YD.b)(this, "z", wY, this), (0, YD.b)(this, "xRotation", bY, this), (0, YD.b)(this, "yRotation", XY, this), (0, YD.b)(this, "zRotation", qY, this), (0, YD.b)(this, "followingEId", pY, this), (0, YD.b)(this, "followingOffset", kY, this), (0, YD.b)(this, "shouldMatchFollowingEntityRotation", GY, this)
        }
      }, hY = (0, rD.e)(jY.prototype, "type", [TY], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: null
      }), dY = (0, rD.e)(jY.prototype, "name", [eY], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return ""
        }
      }), JY = (0, rD.e)(jY.prototype, "x", [NY], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return 0
        }
      }), MY = (0, rD.e)(jY.prototype, "y", [BY], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return 0
        }
      }), wY = (0, rD.e)(jY.prototype, "z", [cY], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return 0
        }
      }), bY = (0, rD.e)(jY.prototype, "xRotation", [KY], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return 0
        }
      }), XY = (0, rD.e)(jY.prototype, "yRotation", [HY], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return 0
        }
      }), qY = (0, rD.e)(jY.prototype, "zRotation", [zY], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return 0
        }
      }), pY = (0, rD.e)(jY.prototype, "followingEId", [ZY], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: null
      }), kY = (0, rD.e)(jY.prototype, "followingOffset", [CY], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return new DD.ArraySchema(0, 0, 0)
        }
      }), GY = (0, rD.e)(jY.prototype, "shouldMatchFollowingEntityRotation", [fY], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return !0
        }
      }), jY),
      aD = (xY = (0, DD.type)("float32"), nY = (0, DD.type)("float32"), PY = (0, DD.type)("boolean"), UY = (0, DD.type)("boolean"), LY = (0, DD.type)("float32"), tY = (0, DD.type)("boolean"), Yr = (0, DD.type)("string"), rr = (0, DD.type)("string"), Dr = (0, DD.type)("string"), Fr = (0, DD.type)("string"), Ar = (0, DD.type)(["number"]), Ir = (0, DD.type)("number"), Rr = (0, DD.type)({
        map: OD
      }), Or = class extends gD {
        constructor() {
          super(...arguments), (0, YD.b)(this, "scale", gr, this), (0, YD.b)(this, "speed", ar, this), (0, YD.b)(this, "jumping", vr, this), (0, YD.b)(this, "crouching", ur, this), (0, YD.b)(this, "cameraPitch", sr, this), (0, YD.b)(this, "armSwinging", ir, this), (0, YD.b)(this, "heldItemName", yr, this), (0, YD.b)(this, "heldItemEnchantmentTier", Qr, this), (0, YD.b)(this, "pose", or, this), (0, YD.b)(this, "ridingVehicleEId", Wr, this), (0, YD.b)(this, "meshOffset", Er, this), (0, YD.b)(this, "baseRenderHeading", mr, this), (0, YD.b)(this, "armour", Vr, this)
        }
      }, gr = (0, rD.e)(Or.prototype, "scale", [xY], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return 1
        }
      }), ar = (0, rD.e)(Or.prototype, "speed", [nY], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return 0
        }
      }), vr = (0, rD.e)(Or.prototype, "jumping", [PY], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return !1
        }
      }), ur = (0, rD.e)(Or.prototype, "crouching", [UY], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return !1
        }
      }), sr = (0, rD.e)(Or.prototype, "cameraPitch", [LY], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return 0
        }
      }), ir = (0, rD.e)(Or.prototype, "armSwinging", [tY], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return !1
        }
      }), yr = (0, rD.e)(Or.prototype, "heldItemName", [Yr], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: null
      }), Qr = (0, rD.e)(Or.prototype, "heldItemEnchantmentTier", [rr], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: null
      }), or = (0, rD.e)(Or.prototype, "pose", [Dr], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return "standing"
        }
      }), Wr = (0, rD.e)(Or.prototype, "ridingVehicleEId", [Fr], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return null
        }
      }), Er = (0, rD.e)(Or.prototype, "meshOffset", [Ar], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return new DD.ArraySchema(0, 0, 0)
        }
      }), mr = (0, rD.e)(Or.prototype, "baseRenderHeading", [Ir], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return 0
        }
      }), Vr = (0, rD.e)(Or.prototype, "armour", [Rr], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return new DD.MapSchema
        }
      }), Or),
      vD = (Sr = (0, DD.type)("string"), lr = (0, DD.type)("string"), Tr = (0, DD.type)("string"), er = (0, DD.type)("uint8"), Nr = class extends aD {
        constructor() {
          super(...arguments), (0, YD.b)(this, "variation", Br, this), (0, YD.b)(this, "ownerDbId", cr, this), (0, YD.b)(this, "metaInfo", Kr, this), (0, YD.b)(this, "aiState", Hr, this)
        }
      }, Br = (0, rD.e)(Nr.prototype, "variation", [Sr], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return "default"
        }
      }), cr = (0, rD.e)(Nr.prototype, "ownerDbId", [lr], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return null
        }
      }), Kr = (0, rD.e)(Nr.prototype, "metaInfo", [Tr], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return ""
        }
      }), Hr = (0, rD.e)(Nr.prototype, "aiState", [er], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return 0
        }
      }), Nr);
    zr = (0, DD.type)("string"), Zr = (0, DD.type)("string"), Cr = (0, DD.type)("string"), fr = (0, DD.type)("string"), jr = class extends gD {
      constructor() {
        super(...arguments), (0, YD.b)(this, "meshKind", hr, this), (0, YD.b)(this, "meshOpts", dr, this), (0, YD.b)(this, "pose", Jr, this), (0, YD.b)(this, "leaderboardTop", Mr, this)
      }
    }, hr = (0, rD.e)(jr.prototype, "meshKind", [zr], {
      configurable: !0,
      enumerable: !0,
      writable: !0,
      initializer: null
    }), dr = (0, rD.e)(jr.prototype, "meshOpts", [Zr], {
      configurable: !0,
      enumerable: !0,
      writable: !0,
      initializer: null
    }), Jr = (0, rD.e)(jr.prototype, "pose", [Cr], {
      configurable: !0,
      enumerable: !0,
      writable: !0,
      initializer: null
    }), Mr = (0, rD.e)(jr.prototype, "leaderboardTop", [fr], {
      configurable: !0,
      enumerable: !0,
      writable: !0,
      initializer: null
    });

    function uD(YY) {
      return Object.keys(DD.Metadata.getFields(YY))
    }
    const sD = uD(vD);
    for (const YF of FD.r)
      if (!sD.includes(YF)) throw new Error(`Mob Schema is missing a networked property: "${YF}"`);
    const iD = uD((wr = (0, DD.type)("string"), br = (0, DD.type)("float32"), Xr = (0, DD.type)("float32"), qr = (0, DD.type)("float32"), pr = (0, DD.type)("float32"), kr = class extends gD {
      constructor() {
        super(...arguments), (0, YD.b)(this, "soundName", Gr, this), (0, YD.b)(this, "volume", xr, this), (0, YD.b)(this, "refDistance", nr, this), (0, YD.b)(this, "maxHearDist", Pr, this), (0, YD.b)(this, "rate", Ur, this)
      }
    }, Gr = (0, rD.e)(kr.prototype, "soundName", [wr], {
      configurable: !0,
      enumerable: !0,
      writable: !0,
      initializer: function() {
        return ""
      }
    }), xr = (0, rD.e)(kr.prototype, "volume", [br], {
      configurable: !0,
      enumerable: !0,
      writable: !0,
      initializer: function() {
        return 1
      }
    }), nr = (0, rD.e)(kr.prototype, "refDistance", [Xr], {
      configurable: !0,
      enumerable: !0,
      writable: !0,
      initializer: function() {
        return ID.g
      }
    }), Pr = (0, rD.e)(kr.prototype, "maxHearDist", [qr], {
      configurable: !0,
      enumerable: !0,
      writable: !0,
      initializer: function() {
        return ID.c
      }
    }), Ur = (0, rD.e)(kr.prototype, "rate", [pr], {
      configurable: !0,
      enumerable: !0,
      writable: !0,
      initializer: function() {
        return 1
      }
    }), kr));
    for (const YF of AD.i)
      if (!iD.includes(YF)) throw new Error(`AudioEntity Schema is missing a replicated property: "${YF}"`);
    var yD = DY(37819),
      QD = DY(1244),
      oD = DY(625),
      WD = DY(37594),
      ED = DY(3815),
      mD = DY(341),
      VD = DY(36586),
      SD = DY(37500),
      lD = DY(2091),
      TD = DY(36495),
      eD = DY(37851),
      ND = DY(36639),
      BD = DY(358),
      cD = DY.n(BD),
      KD = DY(37277),
      HD = DY(36437),
      zD = DY(37419),
      ZD = DY(37520);
    class CD {
      constructor(YY, rY) {
        this.bloxd = YY, this.eId = rY, this.Gu = void 0, this.colyseusEntity = void 0, this.canSeeSub = void 0, this.canAttackSub = void 0, this.interactableSub = void 0, this.overlayColourSub = void 0, this.opacitySub = void 0, this.zIndexSub = void 0, this.multilineTextBoxSub = void 0, this.previousHidingMeshManagerState = void 0, this.meshKind = void 0, this.meshOpts = void 0, this.leaderboardTop = void 0, this.meshRebuildQueued = !1, this.Ky = !1, this.Gu = YY.Gu
      }
      initClient(YY) {
        var rY, DY, FY;
        this.colyseusEntity = YY, this.meshKind = YY.meshKind, this.meshOpts = YY.meshOpts, this.leaderboardTop = YY.leaderboardTop, this.Gu.Am.add([YY.x, YY.y, YY.z], 1, 1, null, null, !1, !1, this.eId), this.Gu.Am.zN(this.eId, "smoothToServerPos");
        const AY = "Person" === this.meshKind;
        this.Gu.Am.zN(this.eId, "meshRotation", {
          isServerControlled: !0,
          ...AY ? {
            defaultRotationsPerSecond: .5
          } : {},
          childrenNodeParams: AY ? [{
            nodeName: "HeadMesh",
            softTolerance: eD.m,
            hardTolerance: null
          }] : []
        }), this.updateHidingMeshMgr(), this.canSeeSub = Lr.g.subscribe(`otherEntitySettings|${this.eId}|canSee`, (YY => {
          this.updateHidingMeshMgr()
        }));
        const IY = () => {
          const YY = this.Gu.Am.eYY(this.eId);
          if (!YY) return;
          const rY = (0, ND.h)(this.eId);
          if ("number" === typeof YY.pT) {
            var DY, FY, AY, IY;
            const RY = null === (DY = (0, lD.n)("head", null === (AY = this.getSpec()) || void 0 === AY || null === (IY = AY.opts.textures) || void 0 === IY ? void 0 : IY.head)) || void 0 === DY || null === (FY = DY.personModel) || void 0 === FY ? void 0 : FY.fullBody;
            return this.Gu.sQ.qT.setPickable(YY.pT, rY && !RY), void(0, HD.updatePersonAttachmentPickability)(this.Gu, this.eId, rY)
          }
          const RY = YY.mesh;
          if (RY)
            for (const OY of [RY, ...RY.getChildMeshes(!1)]) "Yo" in OY && !OY.name.startsWith("Cape|") && (OY.Yo = rY)
        };
        this.canAttackSub = Lr.g.subscribe(`otherEntitySettings|${this.eId}|canAttack`, IY), this.interactableSub = Lr.g.subscribe(`otherEntitySettings|${this.eId}|interactable`, IY), this.overlayColourSub = Lr.g.subscribe(`otherEntitySettingsClientifiedEId|${this.eId}|overlayColour`, (YY => {
          this.updateOverlayColour(YY)
        })), this.opacitySub = Lr.g.subscribe(`otherEntitySettingsClientifiedEId|${this.eId}|opacity`, (YY => {
          this.updateOpacity(YY)
        })), this.zIndexSub = Lr.g.subscribe(`otherEntitySettingsClientifiedEId|${this.eId}|zIndex`, (YY => {
          this.updateZIndex(YY)
        }));
        const RY = this.Gu.uB[this.Gu.yB][this.eId];
        this.updateOverlayColour(null !== (rY = null === RY || void 0 === RY ? void 0 : RY.overlayColour) && void 0 !== rY ? rY : null), this.updateOpacity(null !== (DY = null === RY || void 0 === RY ? void 0 : RY.opacity) && void 0 !== DY ? DY : 1), this.updateZIndex(null !== (FY = null === RY || void 0 === RY ? void 0 : RY.zIndex) && void 0 !== FY ? FY : 0), this.multilineTextBoxSub = (0, TD.t)(this.Gu, this.eId)
      }
      onChangeClient(YY, rY) {
        if ("xRotation" === YY || "yRotation" === YY || "zRotation" === YY)(0, TD.v)(this.Gu, this.eId, YY, rY);
        else if ("pose" === YY) {
          const YY = this.Gu.Am.ZYY(this.eId);
          YY && (YY.pose = rY || "standing")
        } else "meshKind" === YY || "meshOpts" === YY ? (this[YY] = rY, this.queueMeshRebuild()) : "name" === YY && "" !== rY ? this.updateHidingMeshMgr() : "leaderboardTop" === YY && (this.leaderboardTop = rY, Lr.g.vo(`leaderboardTop|${this.eId}`, rY))
      }
      disposeClient() {
        this.Ky = !0, this.Gu.Am.deleteEntity(this.eId), Lr.g.unsubscribe(this.canSeeSub), Lr.g.unsubscribe(this.canAttackSub), Lr.g.unsubscribe(this.interactableSub), Lr.g.unsubscribe(this.overlayColourSub), Lr.g.unsubscribe(this.opacitySub), Lr.g.unsubscribe(this.zIndexSub), Lr.g.unsubscribe(this.multilineTextBoxSub)
      }
      getCurrentHidingMeshMgrState() {
        var YY, rY;
        return {
          canSee: null !== (YY = null === (rY = this.Gu.uB[this.Gu.yB][this.eId]) || void 0 === rY ? void 0 : rY.canSee) && void 0 !== YY && YY,
          name: this.colyseusEntity.name,
          meshKind: this.meshKind,
          meshOpts: this.meshOpts
        }
      }
      updateHidingMeshMgr() {
        var YY, rY, DY;
        const {
          Gu: FY
        } = this, {
          Am: AY
        } = FY, IY = this.getCurrentHidingMeshMgrState();
        if ((0, mD.Zd)(this.previousHidingMeshManagerState, IY)) return;
        if (this.previousHidingMeshManagerState = IY, AY.ZN(this.eId, "hidingMeshManager"), null === (YY = FY.uB[FY.yB][this.eId]) || void 0 === YY || !YY.canSee) return;
        const RY = this.getSpec();
        if (!RY) return;
        const {
          type: OY,
          opts: gY
        } = RY;
        "Person" === OY && (gY.textures = (0, lD.r)(gY.textures)), gY.eId = this.eId, AY.zN(this.eId, "hidingMeshManager", {
          addMeshComponent: () => {
            var YY, rY, DY;
            "Leaderboard" === OY && (gY.leaderboardTop = this.leaderboardTop);
            const IY = this.bloxd.client.meshCreator.getEntityMesh(OY, gY, (YY => {
              var rY, DY;
              if ("number" === typeof YY) {
                var AY, IY, RY;
                const rY = FY.sQ.qT;
                rY.setEntityId(YY, this.eId);
                const DY = "Person" === OY && (null === (AY = (0, lD.n)("head", null === (RY = gY.textures) || void 0 === RY ? void 0 : RY.head)) || void 0 === AY || null === (IY = AY.personModel) || void 0 === IY ? void 0 : IY.fullBody);
                return void rY.setPickable(YY, (0, ND.h)(this.eId) && !DY)
              }
              const aY = YY;
              for (const OY of [aY, ...aY.getChildMeshes(!1)]) void 0 === OY.Yo || OY.name.startsWith("Cape|") || (OY.Yo = (0, ND.h)(this.eId), OY.metadata ??= new FY.sQ.ro, OY.metadata.eId = this.eId);
              this.updateOpacity(null !== (rY = null === (DY = FY.uB[FY.yB][this.eId]) || void 0 === DY ? void 0 : DY.opacity) && void 0 !== rY ? rY : 1)
            }));
            if (!IY) return;
            const {
              pT: RY,
              mesh: aY,
              meshOffset: vY,
              nameYOffset: uY,
              modelLoaded: sY
            } = IY;
            null === sY || void 0 === sY || sY.then((() => {
              var YY;
              (null === (YY = AY.eYY(this.eId)) || void 0 === YY ? void 0 : YY.mesh) === aY && (this.previousHidingMeshManagerState = null, this.updateHidingMeshMgr())
            }));
            const iY = null === RY ? null : FY.sQ.qT.oDY(RY, 0);
            if (AY.zN(this.eId, AY.names.mesh, {
                pT: RY,
                MrY: iY,
                mesh: aY,
                gRY: !1,
                XrY: "Leaderboard" !== OY,
                offset: vY.slice(),
                ORY: "ParticleEmitter" === OY && gY.followTargetMeshOffset ? YY => {
                  var rY;
                  cD().copy(YY, vY);
                  const DY = null === (rY = AY.QrY(this.eId)) || void 0 === rY ? void 0 : rY.my,
                    FY = void 0 === DY ? null : AY.ZYY(DY);
                  if (FY) {
                    var IY, RY;
                    const rY = this.bloxd.getEntityHeading(null !== (IY = FY.ridingVehicleEId) && void 0 !== IY ? IY : DY, !0),
                      AY = Math.sin(rY),
                      OY = Math.cos(rY);
                    YY[0] += FY.meshOffset[0] * OY + FY.meshOffset[2] * AY, YY[1] += FY.meshOffset[1], YY[2] += FY.meshOffset[2] * OY - FY.meshOffset[0] * AY;
                    const gY = null !== (RY = FY.ridingVehicleEId) && void 0 !== RY ? RY : null;
                    null !== gY && (0, ZD.b)(this.Gu, gY, YY)
                  }
                } : null
              }), "Person" === OY) {
              var yY, QY, oY, WY;
              AY.zN(this.eId, AY.names.meshAttachments, {
                personFullBody: null !== (yY = null === (QY = (0, lD.n)("head", null === (WY = gY.textures) || void 0 === WY ? void 0 : WY.head)) || void 0 === QY || null === (oY = QY.personModel) || void 0 === oY ? void 0 : oY.fullBody) && void 0 !== yY && yY
              });
              for (const YY of QD.u) {
                var EY, mY, VY;
                const rY = null === (EY = gY.textures) || void 0 === EY ? void 0 : EY[YY];
                rY && null !== (mY = (0, lD.n)(YY, rY)) && void 0 !== mY && null !== (VY = mY.attachments) && void 0 !== VY && VY.length && SD.b.Player.meshApi.updatePlayerCosmetic(this.eId, RY, YY, rY)
              }
              AY.zN(this.eId, AY.names.moveState), AY.zN(this.eId, "updateWalkingState", {
                pT: RY,
                MrY: iY,
                walkingLegSwingDuration: eD.w
              }), AY.zN(this.eId, "humanoidMesh", {
                pT: RY,
                MrY: iY,
                heldItemPositionParams: {},
                maxWalkingAngleOverride: null
              }), AY.zN(this.eId, "animator", {
                pT: RY,
                MrY: iY,
                modelLifeformType: "Player"
              }), zD.h.hasAnimation("Person") && AY.zN(this.eId, "rigAnimation", {
                target: "Person",
                pT: RY
              }), AY.ZYY(this.eId).pose = this.colyseusEntity.pose || "standing"
            } else if ("BloxdBlock" === OY && null !== RY) {
              AY.zN(this.eId, "animator", {
                pT: RY,
                MrY: iY,
                modelLifeformType: null
              });
              const YY = (0, WD.r)(gY.blockName);
              null !== YY && AY.zN(this.eId, "rigAnimation", {
                target: YY,
                pT: RY
              })
            }
            AY.JRY(this.eId, "entityName", {
              name: this.colyseusEntity.name,
              nameYOffset: uY
            }), this.bloxd.setEntityName(this.eId, this.colyseusEntity.name), !0 === gY.autoRotate && (AY.ZN(this.eId, "meshRotation"), AY.zN(this.eId, "autoRotate"));
            const {
              lineToEId: SY
            } = gY;
            (0, oD.H)(SY) || AY.zN(this.eId, "lineToEntity", {
              lineToEId: SY
            });
            const lY = FY.uB[FY.yB][this.eId];
            this.updateOverlayColour(null !== (YY = null === lY || void 0 === lY ? void 0 : lY.overlayColour) && void 0 !== YY ? YY : null), this.updateOpacity(null !== (rY = null === lY || void 0 === lY ? void 0 : lY.opacity) && void 0 !== rY ? rY : 1), this.updateZIndex(null !== (DY = null === lY || void 0 === lY ? void 0 : lY.zIndex) && void 0 !== DY ? DY : 0)
          },
          removeMeshComponent: () => {
            "Person" !== OY && "BloxdBlock" !== OY || AY.ZN(this.eId, "rigAnimation"), AY.ZN(this.eId, AY.names.mesh), AY.t5(this.eId, AY.names.meshAttachments) && AY.ZN(this.eId, AY.names.meshAttachments), AY.ZN(this.eId, "entityName"), AY.ZN(this.eId, "autoRotate"), AY.ZN(this.eId, "lineToEntity"), "Person" === OY ? (AY.ZN(this.eId, AY.names.moveState), AY.ZN(this.eId, "updateWalkingState"), AY.ZN(this.eId, "humanoidMesh"), AY.ZN(this.eId, "animator")) : "BloxdBlock" === OY && AY.ZN(this.eId, "animator")
          },
          hideDist: null !== (rY = gY.hideDist) && void 0 !== rY ? rY : 80,
          movingHideDist: null !== (DY = gY.hideDist) && void 0 !== DY ? DY : 120,
          displayOutsideLoadedChunk: gY.hideDist > 100,
          immediatelyUpdate: !0,
          ha: "BloxdBlock" === OY ? gY.blockName : OY
        })
      }
      queueMeshRebuild() {
        this.meshRebuildQueued || (this.meshRebuildQueued = !0, queueMicrotask((() => {
          this.meshRebuildQueued = !1, this.Ky || this.updateHidingMeshMgr()
        })))
      }
      getSpec() {
        return (0, ED.j)({
          meshKind: this.meshKind,
          meshOpts: this.meshOpts
        })
      }
      updateOverlayColour(YY) {
        var rY, DY;
        if ("Person" !== this.meshKind) return;
        let FY = new VD.c(0, 0, 0, 0);
        if (null !== YY) {
          const rY = (0, mD.Y)(YY);
          FY = new VD.c(rY[0] / 255, rY[1] / 255, rY[2] / 255, .5)
        }
        const AY = null !== (rY = null === (DY = this.Gu.Am.eYY(this.eId)) || void 0 === DY ? void 0 : DY.pT) && void 0 !== rY ? rY : null;
        null !== AY && SD.b.Player.meshApi.updateMeshOverlayColour(AY, FY)
      }
      updateZIndex(YY) {
        var rY;
        if ("Person" !== this.meshKind) return;
        const DY = null === (rY = this.Gu.Am.eYY(this.eId)) || void 0 === rY ? void 0 : rY.pT;
        "number" === typeof DY && this.Gu.sQ.qT.setRenderingGroupId(DY, YY)
      }
      updateOpacity(YY) {
        const rY = this.Gu.Am.eYY(this.eId);
        rY && ("number" !== typeof rY.pT ? rY.mesh && "ParticleEmitter" !== this.meshKind && (0, KD.g)(rY.mesh, YY) : SD.b.Player.meshApi.updateMeshOpacity(rY.pT, YY))
      }
    }
    var fD = DY(38384);
    class jD {
      constructor(YY, rY) {
        this.eId = rY, this.Gu = void 0, this.schema = void 0, this.Gu = YY.Gu
      }
      initClient(YY) {
        this.schema = YY, this.Gu.Am.add([YY.x, YY.y, YY.z], .1, .1, null, null, !1, !1, this.eId), this.Gu.Am.zN(this.eId, "smoothToServerPos"), fD.c.add(this.eId, this.copyOpts())
      }
      onChangeClient(YY) {
        AD.i.includes(YY) && fD.c.update(this.eId, this.copyOpts())
      }
      disposeClient() {
        fD.c.remove(this.eId), this.Gu.Am.deleteEntity(this.eId)
      }
      copyOpts() {
        const {
          soundName: YY,
          volume: rY,
          refDistance: DY,
          maxHearDist: FY,
          rate: AY
        } = this.schema;
        return {
          soundName: YY,
          volume: rY,
          refDistance: DY,
          maxHearDist: FY,
          rate: AY
        }
      }
    }
    var hD = DY(3289),
      dD = DY(36158),
      JD = DY(6041),
      MD = DY(37123),
      wD = DY(2501),
      bD = DY(37545),
      XD = DY(8481),
      qD = DY(37862),
      pD = DY(37097),
      kD = DY(2817);
    class GD {
      constructor(YY, rY) {
        let DY = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 4,
          FY = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : () => performance.now();
        this.frY = YY, this.Gu = rY, this.setupBudgetMs = DY, this.now = FY, this.createStateCallbacks = void 0, this.roomStateCallbacks = void 0, this.allItems = {}, this.detachers = new Map, this.deferredSetups = new Map, this.queuedSetups = new Map, this.promotedSetups = new Set, this.setupBudgetLeftMs = void 0, this.lastRefillMs = void 0, this.roomState = void 0, this.Ky = !1, this.onFrame = () => {
          this.setUpQueuedEntities(!0)
        }, this.yE = () => {
          this.setUpQueuedEntities(this.now() - this.lastRefillMs > 100)
        }, this.setUpPromoted = () => {
          for (const YY of this.promotedSetups) {
            this.promotedSetups.delete(YY);
            const rY = this.queuedSetups.get(YY);
            rY && (this.queuedSetups.delete(YY), this.timedSetup(rY, YY))
          }
        }, this.createStateCallbacks = (0, XD.getStateCallbacks)(YY), this.roomStateCallbacks = this.createStateCallbacks(YY.state), this.roomState = YY.state, this.setupBudgetLeftMs = DY, this.lastRefillMs = FY()
      }
      setup() {
        this.setupEntityHandlers(), this.setupItemHandlers(), this.frY.onStateChange(this.setUpPromoted), this.Gu.on("beforeInputs", this.onFrame), this.Gu.on("Zu", this.yE)
      }
      setUpQueuedEntities(YY) {
        var rY;
        if ((null === (rY = (0, wD.c)().client.getMsgHandler()) || void 0 === rY ? void 0 : rY.frY) !== this.frY) return this.Gu.off("beforeInputs", this.onFrame), this.Gu.off("Zu", this.yE), this.queuedSetups.clear(), void this.promotedSetups.clear();
        if (YY && (this.setupBudgetLeftMs = this.setupBudgetMs, this.lastRefillMs = this.now()), this.setUpPromoted(), 0 !== this.queuedSetups.size)
          for (cD().copy(xD, this.Gu.Am.lE(this.Gu.yB)); this.setupBudgetLeftMs > 0;) {
            const YY = this.nearestQueued(xD);
            if (null === YY) return;
            this.setUpIfQueued(YY), this.setUpPromoted()
          }
      }
      nearestQueued(YY) {
        let rY = null,
          DY = 1 / 0;
        return this.queuedSetups.forEach(((FY, AY) => {
          const IY = function(YY, rY) {
            return (rY.x - YY[0]) ** 2 + (rY.y - YY[1]) ** 2 + (rY.z - YY[2]) ** 2
          }(YY, FY);
          (null === rY || IY < DY) && (rY = AY, DY = IY)
        })), rY
      }
      setUpOrQueue(YY, rY) {
        0 === this.queuedSetups.size && this.setupBudgetLeftMs > 0 || this.mustSetUpNow(YY, rY) ? this.timedSetup(YY, rY) : this.queuedSetups.set(rY, YY)
      }
      mustSetUpNow(YY, rY) {
        const DY = this.Gu.W8;
        if (rY === DY) return !0;
        const FY = this.roomState.entities.get(DY);
        return !(!FY || FY.ridingVehicleEId !== rY && FY.followingEId !== rY) || (nD(YY.type) === yD.c || (0, wD.c)().getFollowingEntities(rY).length > 0)
      }
      setUpIfQueued(YY) {
        const rY = this.queuedSetups.get(YY);
        rY && (this.queuedSetups.delete(YY), this.timedSetup(rY, YY))
      }
      promoteIfQueued(YY) {
        null !== YY && this.queuedSetups.has(YY) && this.promotedSetups.add(YY)
      }
      timedSetup(YY, rY) {
        const DY = this.now();
        this.setupEntity(YY, rY), this.setupBudgetLeftMs -= this.now() - DY
      }
      setupEntityHandlers() {
        this.roomStateCallbacks.entities.kE(((YY, rY) => {
          this.Gu.W8 ? this.setUpOrQueue(YY, rY) : this.deferEntitySetupUntilInitInfo(YY, rY)
        })), this.roomStateCallbacks.entities.kS(((YY, rY) => {
          const DY = this.deferredSetups.get(rY);
          DY && (Lr.g.unsubscribe(DY), this.deferredSetups.delete(rY)), this.queuedSetups.delete(rY), this.detach(rY), (0, wD.c)().client.disposeEntity(rY)
        }))
      }
      deferEntitySetupUntilInitInfo(YY, rY) {
        const DY = Lr.g.vW("initInfoReceived", (() => {
          this.deferredSetups.delete(rY), this.setUpOrQueue(YY, rY)
        }));
        this.deferredSetups.set(rY, DY), (0, hD.onGameResetOnce)((() => {
          this.deferredSetups.get(rY) === DY && (Lr.g.unsubscribe(DY), this.deferredSetups.delete(rY)), (0, wD.c)().updatePositionAndPhysics(this.Gu.yB, {
            type: JD.n.DEFAULT,
            tier: null
          }, !0), (0, wD.c)().takeHeldPlayerBodySize(this.Gu.yB);
          const YY = this.Gu.Am.uYY(this.Gu.yB);
          YY && (YY.movementType = JD.m.NORMAL)
        }))
      }
      setupEntity(YY, rY) {
        const DY = rY === this.Gu.W8;
        if (DY)(0, wD.c)().client.gM(this.Gu.yB, null, null);
        else {
          const {
            type: DY
          } = YY, FY = nD(DY);
          if (void 0 === FY) return void
          function(YY, rY) {
            const DY = String(YY);
            if (PD.has(DY)) return;
            PD.add(DY);
            const FY = DY.length > 80 ? `${DY.slice(0,80)}...` : DY,
              AY = `No client handler for entity type ${JSON.stringify(FY)}, so entity ${rY} is not set up`;
            console.warn(AY), (0, kD.e)("uncaught", AY, "unknown_entity_type")
          }(DY, rY);
          (0, wD.c)().client.gM(rY, YY, new FY((0, wD.c)(), rY, DY))
        }
        const FY = this.createStateCallbacks(YY);
        if (DY) return this.setupMapSchemaCallbacks(rY, YY, FY, "armour"), this.setupScalarField(rY, YY, FY, "scale"), this.setupScalarField(rY, YY, FY, "ridingVehicleEId"), this.setupScalarField(rY, YY, FY, "followingEId"), this.setupScalarField(rY, YY, FY, "followingOffset"), void this.setupScalarField(rY, YY, FY, "shouldMatchFollowingEntityRotation");
        for (const AY of uD(YY.constructor)) YY[AY] instanceof DD.MapSchema ? this.setupMapSchemaCallbacks(rY, YY, FY, AY) : this.setupScalarField(rY, YY, FY, AY)
      }
      setupMapSchemaCallbacks(YY, rY, DY, FY) {
        const AY = DY[FY],
          IY = new Map;
        AY.kE(((DY, AY) => {
          if (this.onEntityFieldChange(YY, rY, FY, {
              key: AY,
              value: DY
            }), !(DY instanceof DD.Schema)) return;
          const RY = this.createStateCallbacks(DY),
            OY = [];
          for (const IY of uD(DY.constructor)) OY.push(this.listenForFutureChanges(RY, IY, (() => {
            this.onEntityFieldChange(YY, rY, FY, {
              key: AY,
              value: DY
            })
          })));
          IY.set(AY, (() => {
            for (const YY of OY) YY()
          }))
        })), AY.kS(((DY, AY) => {
          var RY;
          null === (RY = IY.get(AY)) || void 0 === RY || RY(), IY.delete(AY), this.onEntityFieldChange(YY, rY, FY, {
            key: AY,
            value: null
          })
        })), this.addDetacher(YY, (() => {
          for (const YY of IY.values()) YY();
          IY.clear()
        }))
      }
      setupScalarField(YY, rY, DY, FY) {
        this.onEntityFieldChange(YY, rY, FY, rY[FY]);
        const AY = this.listenForFutureChanges(DY, FY, (DY => {
          this.onEntityFieldChange(YY, rY, FY, DY)
        }));
        this.addDetacher(YY, AY)
      }
      addDetacher(YY, rY) {
        let DY = this.detachers.get(YY);
        DY || (DY = [], this.detachers.set(YY, DY)), DY.push(rY)
      }
      detach(YY) {
        for (const DY of null !== (rY = this.detachers.get(YY)) && void 0 !== rY ? rY : []) {
          var rY;
          DY()
        }
        this.detachers.delete(YY)
      }
      listenForFutureChanges(YY, rY, DY) {
        return YY.listen(rY, DY, !1)
      }
      onEntityFieldChange(YY, rY, DY, FY) {
        switch (DY) {
          case "ridingVehicleEId": {
            this.promoteIfQueued(FY);
            const rY = this.Gu.Am.ZYY((0, dD.e)(YY));
            rY && (rY.ridingVehicleEId = FY);
            break
          }
          case "armour":
            this.handleArmourChange(YY, FY);
            break;
          case "followingEId":
            this.promoteIfQueued(FY), this.handleFollowingEIdChange(YY, rY, FY);
            break;
          case "xRotation":
          case "yRotation":
          case "zRotation":
            this.handleRotationChange(YY, DY, FY);
            break;
          case "scale":
            this.handleScaleChange(YY, FY);
            break;
          case "baseRenderHeading":
            this.handleBaseRenderHeadingChange(YY, FY);
            break;
          case "followingOffset":
            this.handleFollowingOffsetChange(YY, FY);
            break;
          case "shouldMatchFollowingEntityRotation":
            this.handleShouldMatchFollowingEntityRotationChange(YY, FY);
            break;
          case "x":
          case "y":
          case "z":
            return void this.handlePositionChange(YY, DY, FY)
        }(0, wD.c)().client.updateEntityField(YY, DY, FY)
      }
      handleArmourChange(YY, rY) {
        var DY, FY;
        const {
          key: AY,
          value: IY
        } = rY;
        (0, SD.z)(YY, AY, null !== (DY = null === IY || void 0 === IY ? void 0 : IY.itemName) && void 0 !== DY ? DY : null, null !== (FY = null === IY || void 0 === IY ? void 0 : IY.enchantmentTier) && void 0 !== FY ? FY : null)
      }
      handleFollowingEIdChange(YY, rY, DY) {
        const FY = (0, dD.e)(YY),
          AY = FY === this.Gu.yB;
        if (this.Gu.Am.ZN(FY, this.Gu.Am.names.vV), DY) this.Gu.Am.ZN(FY, "smoothToServerPos"), this.Gu.Am.zN(FY, this.Gu.Am.names.vV, {
          my: (0, dD.e)(DY),
          offset: Array.from(rY.followingOffset),
          orY: rY.shouldMatchFollowingEntityRotation,
          VrY: !0,
          SrY: (YY, FY) => {
            if (cD().copy(YY, rY.followingOffset), rY.ridingVehicleEId === DY) {
              const rY = (0, dD.e)(DY),
                AY = (0, wD.c)().getEntityHeading(rY, FY);
              cD().pg(YY, YY, cD().ZERO, AY)
            }
          }
        });
        else if (!AY) {
          this.Gu.Am.t5(FY, "smoothToServerPos") || this.Gu.Am.zN(FY, "smoothToServerPos");
          const YY = this.Gu.Am.getState(FY, "smoothToServerPos"),
            rY = this.Gu.Am.bM(FY).position;
          (0, pD.setServerPosition)(YY, rY[0], rY[1], rY[2])
        }
      }
      handleRotationChange(YY, rY, DY) {
        const FY = "xRotation" === rY ? 0 : "yRotation" === rY ? 1 : 2;
        for (const AY of (0, wD.c)().getFollowingEntities(YY)) {
          const YY = this.Gu.Am.getState(AY, "meshRotation"),
            rY = this.Gu.Am.QrY(AY);
          YY && rY.orY && (YY.serverSetRotation[FY] = DY)
        }
      }
      handleScaleChange(YY, rY) {
        const DY = (0, dD.e)(YY);
        if (Lr.g.vo(`entityScale|${DY}`, rY), DY === this.Gu.yB) {
          var FY;
          (0, wD.c)().removeFromEyeHeightCache(DY);
          const YY = this.Gu.Am.uYY(this.Gu.yB),
            rY = null !== (FY = null === YY || void 0 === YY ? void 0 : YY.physicsState) && void 0 !== FY ? FY : {
              type: JD.n.DEFAULT,
              tier: null
            };
          return void(0, wD.c)().updatePositionAndPhysics(this.Gu.yB, rY, !1)
        }
        const AY = (0, wD.c)().getLifeformType(DY);
        if (null === AY) return;
        const {
          physicsBodyWidth: IY,
          physicsBodyHeight: RY
        } = (0, qD.c)(rY, AY);
        this.Gu.Am.irY(DY, IY, RY, IY)
      }
      handleBaseRenderHeadingChange(YY, rY) {
        const DY = this.Gu.Am.getState(YY, "meshRotation");
        DY && (DY.baseRenderRotation[1] = rY);
        for (const FY of (0, wD.c)().getFollowingEntities(YY)) {
          const YY = this.Gu.Am.getState(FY, "meshRotation"),
            DY = this.Gu.Am.QrY(FY);
          YY && DY.orY && (YY.baseRenderRotation[1] = rY)
        }
      }
      handleFollowingOffsetChange(YY, rY) {
        const DY = this.Gu.Am.QrY((0, dD.e)(YY));
        if (DY && DY.offset) {
          const YY = rY ? Array.from(rY) : cD().ZERO;
          DY.offset[0] = YY[0], DY.offset[1] = YY[1], DY.offset[2] = YY[2]
        }
      }
      handleShouldMatchFollowingEntityRotationChange(YY, rY) {
        const DY = this.Gu.Am.QrY((0, dD.e)(YY));
        DY && (DY.orY = null === rY || void 0 === rY || rY)
      }
      handlePositionChange(YY, rY, DY) {
        if (this.Gu.Am.t5(YY, "smoothToServerPos")) {
          const FY = this.Gu.Am.getState(YY, "smoothToServerPos");
          (0, pD.setServerPositionAxis)(FY, UD[rY], DY)
        }
      }
      setupItemHandlers() {
        this.roomStateCallbacks.items.kE(((YY, rY) => {
          this.allItems[rY] = YY, (0, MD.m)(this.Gu, rY, [YY.x, YY.y, YY.z], YY.id, {
            amount: YY.amount,
            attributes: JSON.parse(YY.attributes),
            JF: (0, tr.c)(this.Gu).cantPickUpItem(rY),
            size: YY.size,
            predictedAt: (0, wD.c)().client.itemDropPrediction.onServerItemAdded(rY)
          });
          const DY = this.createStateCallbacks(YY);
          for (const FY of uD(RD)) this.onItemFieldChange(rY, FY, YY[FY]), this.addDetacher(rY, this.listenForFutureChanges(DY, FY, (YY => {
            this.onItemFieldChange(rY, FY, YY)
          })))
        })), this.roomStateCallbacks.items.kS(((YY, rY) => {
          delete this.allItems[rY], this.detach(rY), (0, wD.c)().client.itemDropPrediction.onServerItemRemoved(rY), this.Gu.Am.t5(rY, this.Gu.Am.names.itemState) && this.Gu.Am.deleteEntity(rY), (0, tr.c)(this.Gu).disposeEntity(rY)
        }))
      }
      onItemFieldChange(YY, rY, DY) {
        if (rY in UD) {
          if (this.Gu.Am.t5(YY, "itemState")) {
            const FY = this.Gu.Am.getState(YY, "smoothToServerPos");
            (0, pD.setServerPositionAxis)(FY, UD[rY], DY), (0, wD.c)().client.itemDropPrediction.onServerItemMoved(YY)
          }
          return
        }
        if (!this.Gu.Am.t5(YY, "itemState")) return;
        const FY = this.Gu.Am.getState(YY, "itemState");
        "amount" === rY && DY !== FY.amount && (FY.creationTime = Date.now()), FY[rY] = "attributes" === rY ? JSON.parse(DY) : DY
      }
      dispose() {
        if (!this.Ky) {
          this.Ky = !0, this.Gu.off("beforeInputs", this.onFrame), this.Gu.off("Zu", this.yE), this.queuedSetups.clear(), this.promotedSetups.clear();
          for (const YY of this.deferredSetups.values()) Lr.g.unsubscribe(YY);
          this.deferredSetups.clear(), this.Gu.Am.ZN(this.Gu.yB, this.Gu.Am.names.vV);
          for (const YY in this.allItems) this.Gu.Am.deleteEntity(YY), delete this.allItems[YY];
          for (const YY of [...this.detachers.keys()]) this.detach(YY);
          (0, tr.c)(this.Gu).clear();
          for (const YY of (0, wD.c)().client.iterateEntityIds())(0, wD.c)().client.disposeEntity(YY)
        }
      }
    }
    const xD = [0, 0, 0];

    function nD(YY) {
      if ("string" !== typeof YY) return;
      const rY = YY.indexOf("|"),
        DY = -1 === rY ? YY : YY.slice(0, rY),
        FY = tD();
      return Object.hasOwn(FY, DY) ? FY[DY] : void 0
    }
    const PD = new Set;
    const UD = {
      x: 0,
      y: 1,
      z: 2
    };
    let LD = null;

    function tD() {
      return null !== LD || (LD = {
        ...Object.fromEntries(AD.j.map((YY => {
          const {
            ha: rY
          } = (0, bD.b)(YY);
          return [YY, rY]
        }))),
        Pebble: yD.c,
        Snowball: yD.c,
        "Snowball Launcher": yD.c,
        "Reinforced Pebble": yD.c,
        Bullet: yD.c,
        "Reinforced Ball": yD.c,
        Ball: yD.c,
        Mango: yD.c,
        "Moonstone Orb": yD.c,
        ...Object.fromEntries(FD.s.map((YY => [(0, mD.Vb)(YY), yD.c]))),
        Arrow: yD.c,
        "Arrow of Speed": yD.c,
        "Arrow of Poison": yD.c,
        "Arrow of Slowness": yD.c,
        "Arrow of Weakness": yD.c,
        "Arrow of Knockback": yD.c,
        "Arrow of Strength": yD.c,
        "Arrow of Invisibility": yD.c,
        "Arrow of Jumping": yD.c,
        "Arrow of Defense": yD.c,
        "Arrow of Instant Healing": yD.c,
        "Arrow of Instant Damage": yD.c,
        "Arrow of Regeneration": yD.c,
        "Arrow of Haste": yD.c,
        "Arrow of Shield": yD.c,
        "Arrow of Double Jump": yD.c,
        "Arrow of Heat Resistance": yD.c,
        "Arrow of X-Ray Vision": yD.c,
        "Arrow of Mining Yield": yD.c,
        "Arrow of Brain Rot": yD.c,
        "Arrow of Milk": yD.c,
        Fireball: yD.c,
        "Bouncy Bomb": yD.c,
        RPG: yD.c,
        "Obby RPG": yD.c,
        "Super RPG": yD.c,
        "Grenade Launcher": yD.c,
        Iceball: yD.c,
        Coconut: yD.c,
        "Splash Speed Potion": yD.c,
        "Splash Defense Potion": yD.c,
        "Splash Strength Potion": yD.c,
        "Splash Invisibility Potion": yD.c,
        "Splash Jump Potion": yD.c,
        "Splash Knockback Potion": yD.c,
        "Splash Poison Potion": yD.c,
        "Splash Speed Potion II": yD.c,
        "Splash Defense Potion II": yD.c,
        "Splash Strength Potion II": yD.c,
        "Splash Jump Potion II": yD.c,
        "Splash Knockback Potion II": yD.c,
        "Splash Poison Potion II": yD.c,
        "Splash Slowness Potion": yD.c,
        "Splash Slowness Potion II": yD.c,
        "Splash Weakness Potion": yD.c,
        "Splash Weakness Potion II": yD.c,
        "Splash Milk Potion": yD.c,
        "Splash Instant Damage Potion": yD.c,
        "Splash Instant Damage Potion II": yD.c,
        "Splash Instant Healing Potion": yD.c,
        "Splash Instant Healing Potion II": yD.c,
        "Splash Regeneration Potion": yD.c,
        "Splash Regeneration Potion II": yD.c,
        "Splash Haste Potion": yD.c,
        "Splash Haste Potion II": yD.c,
        "Splash Shield Potion": yD.c,
        "Splash Shield Potion II": yD.c,
        "Splash Double Jump Potion": yD.c,
        "Splash Heat Resistance Potion": yD.c,
        "Splash X-Ray Vision Potion": yD.c,
        "Splash Mining Yield Potion": yD.c,
        "Splash Mining Yield Potion II": yD.c,
        "Splash Brain Rot Potion": yD.c,
        "Yellow Paintball Gun": yD.c,
        "White Paintball Gun": yD.c,
        "Red Paintball Gun": yD.c,
        "Purple Paintball Gun": yD.c,
        "Pink Paintball Gun": yD.c,
        "Orange Paintball Gun": yD.c,
        "Magenta Paintball Gun": yD.c,
        "Lime Paintball Gun": yD.c,
        "Light Gray Paintball Gun": yD.c,
        "Light Blue Paintball Gun": yD.c,
        "Green Paintball Gun": yD.c,
        "Gray Paintball Gun": yD.c,
        "Cyan Paintball Gun": yD.c,
        "Brown Paintball Gun": yD.c,
        "Blue Paintball Gun": yD.c,
        "Black Paintball Gun": yD.c,
        "Yellow Heavy Paintball Gun": yD.c,
        "White Heavy Paintball Gun": yD.c,
        "Red Heavy Paintball Gun": yD.c,
        "Purple Heavy Paintball Gun": yD.c,
        "Pink Heavy Paintball Gun": yD.c,
        "Orange Heavy Paintball Gun": yD.c,
        "Magenta Heavy Paintball Gun": yD.c,
        "Lime Heavy Paintball Gun": yD.c,
        "Light Gray Heavy Paintball Gun": yD.c,
        "Light Blue Heavy Paintball Gun": yD.c,
        "Green Heavy Paintball Gun": yD.c,
        "Gray Heavy Paintball Gun": yD.c,
        "Cyan Heavy Paintball Gun": yD.c,
        "Brown Heavy Paintball Gun": yD.c,
        "Blue Heavy Paintball Gun": yD.c,
        "Black Heavy Paintball Gun": yD.c,
        "Toxin Ball": yD.c,
        "Splash Aura XP Potion": yD.c,
        "Splash Aura XP Potion II": yD.c,
        "Arrow of Aura XP": yD.c,
        Firecracker: yD.c,
        "Rainbow Firecracker": yD.c,
        "White Firecracker": yD.c,
        "Orange Firecracker": yD.c,
        "Magenta Firecracker": yD.c,
        "Light Blue Firecracker": yD.c,
        "Yellow Firecracker": yD.c,
        "Lime Firecracker": yD.c,
        "Pink Firecracker": yD.c,
        "Gray Firecracker": yD.c,
        "Light Gray Firecracker": yD.c,
        "Cyan Firecracker": yD.c,
        "Purple Firecracker": yD.c,
        "Blue Firecracker": yD.c,
        "Brown Firecracker": yD.c,
        "Green Firecracker": yD.c,
        "Red Firecracker": yD.c,
        "Black Firecracker": yD.c,
        "Firecracker Pebble": yD.c,
        "Rainbow Firecracker Pebble": yD.c,
        "White Firecracker Pebble": yD.c,
        "Orange Firecracker Pebble": yD.c,
        "Magenta Firecracker Pebble": yD.c,
        "Light Blue Firecracker Pebble": yD.c,
        "Yellow Firecracker Pebble": yD.c,
        "Lime Firecracker Pebble": yD.c,
        "Pink Firecracker Pebble": yD.c,
        "Gray Firecracker Pebble": yD.c,
        "Light Gray Firecracker Pebble": yD.c,
        "Cyan Firecracker Pebble": yD.c,
        "Purple Firecracker Pebble": yD.c,
        "Blue Firecracker Pebble": yD.c,
        "Brown Firecracker Pebble": yD.c,
        "Green Firecracker Pebble": yD.c,
        "Red Firecracker Pebble": yD.c,
        "Black Firecracker Pebble": yD.c,
        "Blinding Pebble": yD.c,
        Poop: yD.c,
        "Wood Boomerang": yD.c,
        "Stone Boomerang": yD.c,
        "Iron Boomerang": yD.c,
        "Gold Boomerang": yD.c,
        "Diamond Boomerang": yD.c,
        "Amethite Boomerang": yD.c,
        "Magmasteel Boomerang": yD.c,
        "Rubellite Boomerang": yD.c,
        "Serpentite Boomerang": yD.c,
        "Moonstone Boomerang": yD.c,
        "67 Base Projectile": yD.c,
        "67 Boosted Projectile": yD.c,
        "Capitano Grenade": yD.c,
        "Scatter Pellet": yD.c,
        "Lucky Bomb": yD.c,
        "Unlucky Bomb": yD.c,
        "Swap Orb": yD.c,
        Mesh: CD,
        AudioEntity: jD
      }), LD
    }
  },
  38348: (YY, rY, DY) => {
    DY.d(rY, {
      c: () => IY,
      d: () => RY
    });
    var FY = DY(625),
      AY = DY(37057);
    const IY = 4e4;
    class RY {
      constructor() {
        let YY = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Date.now;
        this.now = YY, this.editedAt = new Map, this.lastChunkX = NaN, this.lastChunkY = NaN, this.lastChunkZ = NaN, this.lastChunkId = ""
      }
      noteEdit(YY, rY, DY) {
        const IY = (0, FY.P)(YY),
          RY = (0, FY.P)(rY),
          OY = (0, FY.P)(DY),
          gY = this.now();
        if (IY !== this.lastChunkX || RY !== this.lastChunkY || OY !== this.lastChunkZ) {
          this.lastChunkX = IY, this.lastChunkY = RY, this.lastChunkZ = OY, this.lastChunkId = (0, AY.d)(IY, RY, OY), this.editedAt.delete(this.lastChunkId), this.editedAt.set(this.lastChunkId, gY);
          for (const [YY, rY] of this.editedAt) {
            if (rY >= gY - 3e5) break;
            this.editedAt.delete(YY)
          }
        } else this.editedAt.set(this.lastChunkId, gY)
      }
      chunksEditedSince(YY) {
        const rY = [];
        for (const [DY, FY] of this.editedAt) FY >= YY && rY.push(DY);
        return rY
      }
    }
  },
  38433: (YY, rY, DY) => {
    DY.d(rY, {
      b: () => ar,
      d: () => dr,
      e: () => cr,
      i: () => Jr
    });
    var FY = DY(3289),
      AY = DY(8173),
      IY = DY(36114),
      RY = DY(1413),
      OY = DY(36149),
      gY = DY(38384),
      aY = DY(38323),
      vY = DY(3366),
      uY = DY(37216),
      sY = DY(1244),
      iY = DY(332),
      yY = DY(25),
      QY = DY(1823),
      oY = DY(99),
      WY = DY(40),
      EY = DY(1851),
      mY = DY(1774),
      VY = DY(2608);
    class SY {
      constructor(YY) {
        this.storeForMs = YY, this.clicks = new VY.b
      }
      click() {
        this.clicks.enqueue(Date.now());
        const YY = Date.now() - this.storeForMs;
        for (; this.clicks.size > 0 && this.clicks.peek() < YY;) this.clicks.dequeue()
      }
      getNumClicksInMs(YY) {
        let rY = 0;
        return this.clicks.forEach((DY => {
          DY > Date.now() - YY && rY++
        })), rY
      }
      getMaxClickSeparationInMs(YY) {
        if (0 === this.clicks.size) return this.storeForMs;
        let rY = 0,
          DY = Date.now() - YY;
        this.clicks.forEach((FY => {
          FY < Date.now() - YY || (rY = Math.max(rY, Math.abs(FY - DY)), DY = FY)
        }));
        const FY = Math.abs(Date.now() - DY);
        return Math.max(rY, FY)
      }
    }
    class lY {
      constructor(YY) {
        this.storeForMs = YY, this.clickDownDurations = new VY.b
      }
      registerClickDownDuration(YY) {
        this.clickDownDurations.enqueue({
          dur: YY,
          atTime: Date.now()
        });
        const rY = Date.now() - this.storeForMs;
        for (; this.clickDownDurations.size > 0 && this.clickDownDurations.peek().atTime < rY;) this.clickDownDurations.dequeue()
      }
      clickDownDurationsCheck(YY) {
        if (YY > this.storeForMs) return console.error("overDuration is greater than storeForMs"), "0:0";
        let rY = 0,
          DY = 0;
        return this.clickDownDurations.forEach((FY => {
          FY.atTime > Date.now() - YY && (rY++, DY = Math.max(DY, FY.dur))
        })), `${rY}:${DY}`
      }
    }
    var TY = DY(35928),
      eY = DY(38437),
      NY = DY(19),
      BY = DY(2501),
      cY = DY(1322),
      KY = DY(38356),
      HY = DY(3976),
      zY = DY(144),
      ZY = DY(37550),
      CY = DY(37769),
      fY = DY(625),
      jY = DY(35921),
      hY = DY(10),
      dY = DY(8830),
      JY = DY(1231),
      MY = DY(213),
      wY = DY(38445),
      bY = DY(38449),
      XY = DY(37578),
      qY = DY(38459),
      pY = DY(37490),
      kY = DY(2963),
      GY = DY(1619),
      xY = DY(36032),
      nY = DY(2565),
      PY = DY(38453),
      UY = DY(37279);
    const LY = {
      forward: "freeCamForward",
      backward: "freeCamBackward",
      left: "freeCamLeft",
      right: "freeCamRight",
      jump: "freeCamUp",
      crouch: "freeCamDown"
    };

    function tY() {
      var YY, rY;
      return !(null === (YY = (0, BY.c)().client) || void 0 === YY || null === (rY = YY.freeCameraController) || void 0 === rY || !rY.movesFly())
    }

    function Yr(YY) {
      const rY = YY.on.bind(YY);
      YY.on = (YY, DY) => {
        EY.C.has(YY) ? rY(YY, DY) : rY(YY, (rY => {
          var FY;
          return null !== (FY = (0, BY.c)().client) && void 0 !== FY && FY.isReplayMode() ? function(YY) {
            return YY in LY
          }(YY) && tY() ? DY(rY) : void 0 : DY(rY)
        }))
      }
    }
    const rr = 5e3,
      Dr = 1;
    let Fr, Ar = Dr,
      Ir = 0;
    const Rr = !0;
    let Or = Rr;
    QY.b.subscribe("_ignoreBasicBoards", (YY => {
      Or = YY
    })), (0, FY.onGameReset)((() => {
      Or = Rr
    }));
    let gr = null;
    const ar = () => gr;
    let vr, ur, sr;
    var ir, yr, Qr, or, Wr, Er, mr, Vr, Sr;
    const lr = [1, "b", 0, 8, "c", 9, 7, 212, "f", 47, 255, "length", 88, 194, 3, "undefined", void 0, 2, 4, 241, "a", 12, 63, 6, "fromCodePoint", "push", 14, "h", 228, 125, 132, "g", 91, 5, 8191, 13, 216, 126, 246, 167, 45, 200, 237, 17, null, 50, 115, "d", "i", "e", !1, 128, 152, 40, 202, 242, 168, 154, 206, 245, 186, 211, 189, 16, 75, 512, 108, 72, 19, 60, 121, 176, 61, 15, 137, 127, 90, 76, 42, 22, 220, 83, 68, 1023, 31, 18, 158, 130, 32, 24, 10, 64, 217, 65535, 52, 20, 187, 101, 102, 107, 250, 59, 229, 180, 160, 38, 214, 113, 134, 218, 55296, 56319, 43, 56320, 65536, 57343, 98, 208, 192, 224, 240, 231, 179, 161, 77, 86, 162, 195, 177, 80, 153, 81, 57, 215, 66, "s", 249, !0, 100];

    function Tr(...YY) {
      return YY[lr[11]] = lr[0], typeof or !== lr[15] && or ? (new or).decode(new Wr(YY[lr[2]])) : typeof Er !== lr[15] && Er ? Er.from(YY[lr[2]]).toString("utf-8") : Sr(YY[lr[2]])
    }

    function er(...YY) {
      if (YY[lr[11]] = lr[14], YY[lr[2]] === function(...YY) {
          return YY[lr[11]] = lr[0], typeof ir[YY[lr[2]]] === lr[15] ? ir[YY[lr[2]]] = function(...YY) {
            for (Br(YY[lr[11]] = lr[0], YY[-lr[29]] = '(EGKZTeUIJkNDdbOV&<t?[57$)/uf#0>M."rH3lP~vCwR%Ba9{,s*ncjgh;LF^_p4:+=AoYyXQ2qWm8|x6iSz!1`]@}', YY[lr[1]] = "" + (YY[lr[2]] || ""), YY[lr[28]] = YY[lr[1]].length, YY[-lr[36]] = [], YY[lr[33]] = lr[2], YY[-lr[26]] = lr[2], YY[lr[31]] = -lr[0]), YY[lr[27]] = lr[2]; YY[lr[27]] < YY[lr[28]]; YY[lr[27]]++)
              if (YY[-lr[30]] = YY[-lr[29]].indexOf(YY[lr[1]][YY[lr[27]]]), YY[-lr[30]] !== -lr[0])
                if (YY[lr[31]] < lr[2]) YY[lr[31]] = YY[-lr[30]];
                else {
                  Br(YY[lr[31]] += YY[-lr[30]] * lr[32], YY[lr[33]] |= YY[lr[31]] << YY[-lr[26]], YY[-lr[26]] += (YY[lr[31]] & lr[34]) > lr[12] ? lr[35] : lr[26]);
                  do {
                    Br(YY[-lr[36]].push(YY[lr[33]] & lr[10]), YY[lr[33]] >>= lr[3], YY[-lr[26]] -= lr[3])
                  } while (YY[-lr[26]] > lr[6]);
                  YY[lr[31]] = -lr[0]
                } return YY[lr[31]] > -lr[0] && YY[-lr[36]].push((YY[lr[33]] | YY[lr[31]] << YY[-lr[26]]) & lr[10]), Tr(YY[-lr[36]])
          }(yr[YY[lr[2]]]) : ir[YY[lr[2]]]
        }(87) + lr[1]) return YY[lr[0]] + YY[lr[17]]
    }

    function Nr() {}

    function Br() {
      Br = function() {}
    }

    function cr(YY) {
      function rY() {
        return YY.Am.rrY(YY.yB)
      }
      Yr(YY.inputs.down), Yr(YY.inputs.up);
      for (const FY of ["forward", "backward", "left", "right", "sprint", "jump", "crouch"]) {
        const rY = (rY, DY) => {
          var AY, IY;
          if (tY()) {
            var RY;
            const AY = LY[FY];
            var OY, gY;
            if (AY) null === (OY = (0, BY.c)().client) || void 0 === OY || null === (gY = OY.freeCameraController) || void 0 === gY || gY.handlefreeCamKeyPress(AY, rY, DY);
            return void(DY || null !== (RY = (0, BY.c)().client) && void 0 !== RY && RY.isReplayMode() || (YY.Am.RrY()[FY] = !1))
          }
          if (null !== (AY = (0, BY.c)().client) && void 0 !== AY && null !== (IY = AY.freeCameraController) && void 0 !== IY && IY.isKeyPressOverriden(rY)) return;
          YY.Am.RrY()[FY] = DY
        };
        YY.inputs.down.on(FY, (YY => rY(YY, !0))), YY.inputs.up.on(FY, (YY => rY(YY, !1)))
      }
      YY.inputs.down.on("crouch", (() => {
        if (tY()) return;
        if (!YY.pE.canCrouch) return;
        const rY = YY.Am.RrY();
        NY.b.get("clientEscMenuOptions").crouchIsToggle && (rY.crouchToggled = !rY.crouchToggled && !rY.padSneakToggled), rY.padSneakToggled = !1
      }));
      const DY = () => {
        const YY = rY();
        YY.isGun() && YY.inaccuracyCalculator.jump()
      };
      YY.inputs.down.on("jump", (YY => {
        tY() || (DY(), vr(YY))
      }));
      for (const FY of EY.m) YY.inputs.down.on(FY, (YY => {
        var rY, DY;
        null !== (rY = (0, BY.c)().client) && void 0 !== rY && null !== (DY = rY.freeCameraController) && void 0 !== DY && DY.handlefreeCamKeyPress(FY, YY, !0) && (YY.preventDefault(), YY.stopPropagation())
      })), YY.inputs.up.on(FY, (YY => {
        var rY, DY;
        null !== (rY = (0, BY.c)().client) && void 0 !== rY && null !== (DY = rY.freeCameraController) && void 0 !== DY && DY.handlefreeCamKeyPress(FY, YY, !1) && (YY.preventDefault(), YY.stopPropagation())
      }));
      YY.inputs.down.on("recordGame", (() => {
        var YY, rY;
        null === (YY = (0, BY.c)().client) || void 0 === YY || null === (rY = YY.gameRecorder) || void 0 === rY || rY.toggleRecording()
      })), YY.inputs.down.on("recordClip", (() => {
        var YY, rY;
        (0, TY.e)() || null === (YY = (0, BY.c)().client) || void 0 === YY || null === (rY = YY.gameRecorder) || void 0 === rY || rY.saveClip()
      }));
      for (const FY of EY.C) YY.inputs.down.on(FY, (() => {
        var YY;
        if ((0, eY.d)()) return;
        if ("replayViewerOpen" === FY) return void yY.g.vo("replayViewer|requested", "toggle");
        const rY = null === (YY = (0, BY.c)().client) || void 0 === YY ? void 0 : YY.gameReplayer;
        ((0, TY.e)() || null !== rY && void 0 !== rY && rY.isReplayMode()) && (null === rY || void 0 === rY || rY.handleAction(FY))
      }));
      const RY = new SY(3e4),
        uY = new lY(4e4);
      let WY = 0;
      const VY = YY => {
          let rY = 0,
            DY = null;
          const FY = rY => null !== rY && rY === DY && (DY = null, YY(), !0);
          return {
            press: () => (rY++, (0, wY.e)() || (FY(DY), DY = rY), rY),
            owns: YY => YY === DY,
            release: FY
          }
        },
        HY = (YY, DY) => {
          DY && Jr(sY.c.TouchDownFirePrimary), YY ? dY() : ((0, CY.f)(), rY().UrY()), DY || Jr(sY.c.DownFirePrimary), dr(!0), RY.click();
          const AY = RY.getMaxClickSeparationInMs(3e4) < 1e3 / 30,
            IY = RY.getMaxClickSeparationInMs(1e4) < 20,
            OY = RY.getMaxClickSeparationInMs(4e3) < 1e3 / 70;
          if (AY || IY || OY) {
            let YY;
            if (AY) YY = 30;
            else if (IY) YY = 50;
            else {
              if (!OY) throw new Error("???");
              YY = 70
            }(0, FY.sendColyMessage)(vY.Nj, YY)
          }
        },
        zY = VY((() => {
          const YY = Date.now() - WY;
          uY.registerClickDownDuration(YY), rY().xrY(), Jr(sY.c.UpFirePrimary), dr(!1);
          const DY = uY.clickDownDurationsCheck(4e4);
          (0, FY.sendColyMessage)(vY.qg, DY)
        }));
      let ZY = 0;
      YY.inputs.down.on("primary-fire", (function(YY) {
        ZY = zY.press(), zY.owns(ZY) && (WY = Date.now(), Math.abs(performance.now() - YY.timeStamp) > 5e3 || (HY(YY.altKey, "changedTouches" in YY), vr(YY)))
      })), YY.inputs.up.on("primary-fire", (function(YY) {
        zY.release(ZY) && vr(YY, !0)
      }));
      const fY = () => {
          rY().XgY(), Jr(sY.c.DownFireSecondary), dr(!0), YY.o4 && !YY.o4.position && (0, aY.f)()
        },
        jY = VY((() => {
          rY().GrY(), Jr(sY.c.UpFireSecondary), dr(!1)
        }));
      let hY = 0;
      YY.inputs.down.on("alt-fire", (function(YY) {
        hY = jY.press(), jY.owns(hY) && (fY(), vr(YY))
      })), YY.inputs.up.on("alt-fire", (function(YY) {
        jY.release(hY) && vr(YY, !0)
      }));
      const dY = () => rY().kgY();
      YY.inputs.down.on("mid-fire", (() => {
        (0, wY.e)() || dY()
      }));
      const qY = YY => {
          (0, FY.sendColyMessage)(vY.rh, YY, !0)
        },
        Fr = YY => {
          (0, FY.sendColyMessage)(vY.uh, {
            fa: YY,
            ja: Rr()
          }, !0)
        };
      for (const FY of ["SpecialAction1", "SpecialAction2"]) YY.inputs.down.on(FY, (() => {
        qY(FY)
      })), YY.inputs.up.on(FY, (() => {
        Fr(FY)
      }));
      const Ir = () => {
        const YY = rY();
        YY.isGun() && YY.reload(Date.now())
      };
      YY.inputs.down.on("ReloadGun", Ir);
      const Rr = () => {
        let rY = "a";
        return YY.physics.testSolid.toString().includes("Es") || (rY = "b"), rY
      };
      YY.inputs.down.on("OpenInventory", (YY => {
        YY.preventDefault(), (0, GY.x)(YY, "inventory", (0, bY.e)((0, BY.e)()))
      })), YY.inputs.bind("ShiftHeld", "ShiftLeft", "ShiftRight");
      const Or = YY => {
        yY.g.vo("DropItemKeyPressed", YY)
      };
      YY.inputs.down.on("DropItem", (() => {
        Or(YY.Am.RrY().crouch)
      })), YY.inputs.down.on("OpenShop", (rY => {
        (0, TY.e)() || "inGame" === NY.b.get("gameState") && (0, GY.v)(rY, iY.t.SHOP, !(0, AY.d)(YY.pE.shopInfo))
      })), YY.inputs.down.on("OpenLobbyLeaderboard", (rY => {
        (0, TY.e)() || "inGame" === NY.b.get("gameState") && (0, GY.v)(rY, iY.t.LOBBY_LEADERBOARD, !!YY.pE.lobbyLeaderboardInfo)
      })), YY.inputs.down.on("HideUi", (() => {
        yY.g.vo("showUi", !1)
      })), YY.inputs.up.on("HideUi", (() => {
        yY.g.vo("showUi", !0)
      }));
      const ar = YY => {
        0 === YY && (YY = 10), yY.g.vo("setSelectedInventorySlotI", YY - 1), yY.g.vo("numkeyPressed", YY)
      };
      for (let FY = 1; FY <= 10; FY++) YY.inputs.down.on("HotBarSlot" + FY.toString(), (() => {
        ar(FY)
      }));
      YY.inputs.down.on("OpenTasksAndLeaderboard", (rY => {
        const DY = (0, xY.j)();
        DY ? (0, GY.z)(rY, !0, DY) : (0, GY.x)(rY, "retentionFeatures", !(!YY.pE._tasks && !YY.pE._availableLeaderboards))
      })), YY.inputs.down.on("OpenCodeEditor", (rY => {
        (0, GY.z)(rY, (0, KY.e)((0, cY.b)()), (() => {
          yY.g.vo("EditLobbyCode", YY.Am.lE(YY.yB).map(Math.floor))
        }))
      })), YY.inputs.bind("ToggleFullCoordinateOverlay", "F3"), YY.inputs.down.on("ToggleFullCoordinateOverlay", (() => {
        yY.g.vo("toggleFullCoordinateOverlay")
      }));
      const sr = () => {
        (0, BY.c)().client.cameraController.swapCameraZoom()
      };
      YY.inputs.down.on("SwapCameraZoom", sr), YY.inputs.down.on("OpenInviteLink", (YY => {
        (0, GY.x)(YY, "inviteLink", oY.featureFlags.canUseInviteLinks)
      })), YY.inputs.bind("Y", "KeyY"), YY.inputs.down.on("Y", (YY => {
        (0, TY.e)() || yY.g.vo("YKeyPressed")
      })), YY.inputs.bind("X", "KeyX"), YY.inputs.down.on("X", (YY => {
        (0, TY.e)() || yY.g.vo("XKeyPressed")
      })), YY.inputs.down.on("OpenEmoteWheel", (() => {
        yY.g.vo("requestEmoteWheelHoldOpen")
      })), YY.inputs.up.on("OpenEmoteWheel", (() => {
        yY.g.vo("requestEmoteWheelHoldRelease")
      })), YY.inputs.down.on("Zoom", (() => {
        if ("inGame" === NY.b.get("gameState")) {
          YY.Am.getState(YY.yB, "playerCameraAdjustment").zoomKeyPressed = !0, (0, BY.c)().client.cameraController.handleZoomKeyPressed()
        }
      })), YY.inputs.up.on("Zoom", (() => {
        YY.Am.getState(YY.yB, "playerCameraAdjustment").zoomKeyPressed = !1
      })), Kr();
      const ir = YY => function() {
        return ur(), YY(...arguments)
      };

      function yr(YY) {
        "inGame" !== NY.b.get("gameState") || (0, GY.t)() || (yY.g.vo("ctrlCrouchWithoutFullscreen"), YY.preventDefault())
      }
      gr = {
        primaryFireDown: ir((() => {
          const YY = zY.press();
          return zY.owns(YY) && (WY = Date.now(), HY(!1, !1)), YY
        })),
        primaryFireUp: ir((YY => {
          zY.release(YY)
        })),
        altFireDown: ir((() => {
          const YY = jY.press();
          return jY.owns(YY) && fY(), YY
        })),
        altFireUp: ir((YY => {
          jY.release(YY)
        })),
        jumpDown: ir(DY),
        specialActionDown: ir(qY),
        specialActionUp: ir(Fr),
        reloadGun: ir(Ir),
        dropItem: ir(Or),
        swapCameraZoom: ir(sr),
        pickBlock: ir(dY)
      }, YY.inputs.down.on("ctrlCrouch", yr), YY.inputs.up.on("ctrlCrouch", yr), YY.inputs.bind("ctrlCrouch", "ControlLeft");
      const Qr = YY => {
        "inGame" === NY.b.get("gameState") && YY.ctrlKey && !(0, GY.t)() && YY.preventDefault()
      };
      document.addEventListener("keydown", Qr), document.addEventListener("keyup", Qr), document.addEventListener("keypress", Qr), YY.inputs.bind("Alt", "AltLeft", "AltRight"), YY.inputs.down.on("Alt", (YY => {
        YY.preventDefault()
      }));
      const or = rY => (0, pY.g)(YY, rY),
        Wr = rY => (0, pY.i)(YY, rY),
        Er = [0, 0, 0],
        mr = [0, 0, 1];
      YY.on("afterRender", (rY => {
        (0, IY.g)(YY.camera.heading), (0, pY.l)(YY, Er, mr), (0, BY.c)().client.triggerGameCallback("onAfterRender", rY, {
          cameraHeading: YY.camera.heading,
          cameraPitch: YY.camera.pitch,
          cameraPosition: Er,
          cameraDirection: mr,
          tanHalfFovX: (0, pY.d)(YY),
          tanHalfFovY: Math.tan(YY.sQ.kp().fov / 2),
          screenBandPct: {
            x: kY.c,
            y: (0, kY.h)()
          },
          projectWorldPosToScreenPos: or,
          projectWorldPosToViewport: Wr
        })
      })), (0, nY.q)("look") && (YY.camera.ZC = (0, PY.e)("js"), YY.inputs.WJ = PY.c), (0, nY.q)("remesh") && (0, UY.l)(YY), YY.on("beforeInputs", (() => {
        if ((0, eY.d)()) return YY.inputs.mJ.dx = 0, void(YY.inputs.mJ.dy = 0);
        if (YY.camera.mJ.dx += YY.inputs.mJ.dx, YY.camera.mJ.dy += YY.inputs.mJ.dy, 0 !== YY.inputs.mJ.dx || 0 !== YY.inputs.mJ.dy) {
          YY.Am.getState(YY.yB, "playerCameraAdjustment").lastPointerMove = Date.now()
        }
        YY.inputs.mJ.dx = 0, YY.inputs.mJ.dy = 0
      }));
      let Vr = 0;
      YY.on("Zu", (function(rY) {
        yY.g.vo("noaTick", rY);
        const DY = (0, BY.c)().client;
        if (DY.triggerGameCallback("Zu", rY), DY.isClientGameSessionActive()) try {
          gY.c.Zu(rY)
        } catch (RY) {
          console.error("Error ticking audio entities", RY)
        }
        if (!YY.Am.tYY(YY.yB).isAlive) return;
        Date.now() - Vr > 9e3 && (! function() {
          const YY = (0, BY.e)();
          "number" === typeof YY.pE.speedMultiplier && "number" === typeof YY.pE.jumpAmount && (0, FY.sendColyMessage)(vY.Ph, {
            yR: (0, JY.h)(YY.pE.speedMultiplier),
            QR: (0, JY.d)(YY.pE.jumpAmount),
            oR: (0, JY.h)(YY.pE.crouchingSpeed),
            WR: (0, JY.h)(YY.pE.walkingSpeed),
            ER: (0, JY.h)(YY.pE.runningSpeed),
            mR: (0, JY.d)(YY.u9),
            VR: YY.Am.uYY(YY.yB).jumpForce,
            SR: YY.Am.bM(1).width,
            lR: YY.Am.bM(1).height,
            TR: YY.Am.ZZ(1).TR
          }, !0)
        }(), Vr = Date.now());
        const AY = YY.Am.RrY();
        if ((AY.jump || AY.forward || AY.backward || AY.left || AY.right || AY.sprint) && yY.g.vo("usedKeyboard"), YY.Am.hYY(YY.yB) && !0 === YY.pE.canPickUpItems) {
          const rY = YY.Am.lE(YY.yB),
            DY = (0, mY.t)(Ar),
            AY = (0, mY.x)(Ar),
            IY = [rY[0] - DY, rY[1] - .6 * AY, rY[2] - DY],
            RY = [rY[0] + DY, rY[1] + MY.d.jW + .6 * AY, rY[2] + DY],
            gY = YY.Am.MRY({
              base: IY,
              max: RY
            }, YY.Am.names.autoRotate),
            uY = YY => {
              const rY = MY.d.droppedBlockSize / 2;
              return [0, 1, 2].every((DY => YY[DY] >= IY[DY] - rY && YY[DY] <= RY[DY] + rY))
            },
            {
              itemDropPrediction: sY
            } = (0, BY.c)().client,
            iY = FY.offlineInputReplay.holdsInput();
          if (gY.length > 0)
            for (const yY of gY) {
              const rY = YY.Am.getState(yY, "itemState");
              if (void 0 === rY || Date.now() - rY.creationTime < 500) continue;
              let DY = yY,
                AY = null;
              if (rY.JF) {
                const YY = sY.pickupTarget(yY, uY, iY);
                if (null === YY) continue;
                ({
                  UI: DY,
                  YR: AY
                } = YY)
              }
              const IY = YY.Am.getState(DY, "itemState");
              if (IY.JF && null === AY) continue;
              let RY = 0,
                gY = null,
                QY = !1;
              if (0 === IY.amount) QY = !0;
              else {
                const {
                  amountPickedUp: rY
                } = YY.Am.fYY(YY.yB).pickUpItem({
                  name: IY.name,
                  typeObj: IY.typeObj,
                  amount: IY.amount,
                  attributes: IY.attributes
                });
                if (RY = rY, 0 === RY) continue;
                gY = XY.e.pickUp(IY, RY), IY.amount -= RY, IY.amount < 0 ? console.error("Picking up led to less than 0 of item!") : 0 === IY.amount ? QY = !0 : IY.creationTime = Date.now() + rr
              }
              const oY = (0, BY.c)().client.inventoryPrediction.record(gY);
              (0, FY.sendColyMessage)(vY.ph, {
                UI: null === AY ? DY : "",
                LI: RY,
                tI: aY.d,
                nI: oY,
                YR: AY
              }, !0), QY && (iY && sY.onPickedUpOffline(DY, oY, AY), null === AY && YY.Am.deleteEntity(DY));
              OY.b.play("pickUp", MY.d.pickupSoundVol).rate(1 + Math.random() * MY.d.pickupSoundRateVariation)
            }
        }
        if (!YY.Am.eYY(YY.yB)) return;
        const IY = YY.inputs.mJ.oYY;
        if (0 !== IY) {
          const rY = IY > 0 ? 1 : -1;
          YY.inputs.state["mid-fire"] || YY.inputs.state.Alt || !YY.pE.useInventory ? (YY.inputs.state["mid-fire"] && yY.g.vo("requestEmoteWheelClose"), (0, BY.c)().client.cameraController.handleScrollZoom(rY)) : yY.g.vo("ScrollInventorySlot", rY)
        }
      })), QY.b.subscribe("droppedItemScale", (YY => {
        Ar = "number" === typeof YY && isFinite(YY) ? YY : Dr
      }))
    }

    function Kr() {
      const YY = (0, BY.e)();
      if (YY)
        for (const rY in EY.u) {
          YY.inputs.unbind(rY);
          for (const DY of EY.u[rY]) YY.inputs.bind(rY, DY)
        }
    }
    Br(ir = {}, yr = ["+AIYdI[Jq^A>}H3n", 'wiq={m=rP4a/^[jN%x^JC0|YXhS"Zu|J"{)Uwa"7@ko(u0YN?Kdl{t^:', ';[aUt3l*JFQ{d&"X^AX=NesU?me4Sk}R6QivHiDU<6MV&TrX', '82Et&<kAf%"./|}u/m;U/kGAB^w?UN%', "[|tUkkXx@k=", "_2@]amAL}?_[73+q_m|WM!b~TsFatLn}~:", "iQvC*khYn6IZ,hKu9=zW|W.P@@)cHR)TLe6tkYdOgeyTnHAHgQ!}5uV6jLT", 'Ui_t~k]xKGCF{ubi3)1}jIIBNsg>F"9B&kAU}`,la,?Tq_(8', "%9P~Wt+", "5}#C5WLOKG|EV3]Hw+", "@`gtPoiLgGC#gW4_Kh*>_2w7De,{oE17NqP~D`Li*", '((+Nzr8#I5UU"/|#k%fvpm2][kGa+<:Ru[U1n3i&DwR{No%', "M8[%cip^QsQ?Cf4_W+", '@lL1URo5:,:6($0NB(.zPmf))Lob[Nw9O{F*OU8#+,#t`6rK=v:vElC"fx', "Gh!}for#q(9wY/w}@:", "SlDtel$0WL|aZ/rfz,Tvk)l,hFzEWI9Xb10Kq`I;Y6q[a&E9m[o=ue!vF5Mx:", "<smvwWc]$hy{Y6_}HXr/3(:Pk(p@[0%", "Ck_${[1*_L%R>N=^Bi#Co2<#Le4P$6|bP8BN$nZ6Ns<Zbo(Jme|]D2Im/", "X|%NjQXu.L_>MQR#eR&", "Yw/}&Xk#v5l>N&", 'Y%}>$yIB{Lb6+h]T@`?Y)"D&>^v%K0IN3+', "@h&lZ]8&t5sv:W/}1xK1[lvUB^$?iN)_C]Q/N`*@P^UO:", "clFz,a/uQssPx|y1v,n`H>e:/%T[^f~_Kw:PaQi&Je`K@Gd9[iqWBRe,v", "?v_}o)1;25Z1SO+uHH+`h_*;gY>4u|S9Ze:", "UwM{8{F:y6@#f0_#ps!Q^", "0Rn{(AE:.LZbY/tiV%nUR{`UvzpZAT7b", '0s^J<gr(OkBzU|~@s9IZfu=&L^X("/)@k95%:[=Jee{V<0ibUwt%={+', '5XQUO(+O=?n}GE^N_llzKOOL9L*a?"v', "0`g]=`ib]4rZeGkJf`a`1i17s%dYfI~b|FNZMCH&", '(^`>}eq7fx/3K|17+b|Z02"1iLb(_$IBe2v}>(e1=krZeNJ7bmIHb;VPe^4s:', "L`v>rCZ:psrV4QXR4mn$oR%Tzt{Yg/", "^Q]1$RbUvzR>;6d9I[a`tRr2=xa$z.(1iR1zi{.T[Y@NrTz}ay)*J", "lgr}Zo:TD^96lG=u#`O$q`+~ZGK", "<8A}*XH~m(sL.f0Hc%blf>WUI`w=.Wg@im:lY,xAHwU}B/mX&%|.", "*$e~u!+", "=k)Qa(i&UmHWL$6", "C2*CiOx~qGMcgfIia}_/B0=uhhU?X6VJt9:JImCP!y>4#Q#X[|O$@Iw:", "]loZdg+", "Il4WrgF03`QA<|%HDx?~Zg00#^,?S#[Xo+", "Oe[`HioL,YG(fNz", "./Ov8{V,R@^PjTScJ2vtf_T*s5l,E#7uJR{`!]},k~", "y(#$I!,7kYO)M0`K(^HW>[)#5hX(G.", "Ie!KtA,7c6G6L6VTh`_*ml.6^x4L8RF7W40>5nd#|", "zA7=HI+", '/2U*W">]l@myOI7}#H{v@oe0%(7t/Q/};[;z+A6YJhTLHR)b82&', "4,av03}B6G$;S/", ';{gznjDx3%NLf|p1n`K*]ukJ$?!:D0fn`wZ*<e{,l%0/"#qn/]71?[e9$`]O+', "%=J*xtmBd446n)91cw2*#0Lbgba:R[?Jew<]#", "$ip/82]#Ze*EhGZHlgZ]_Ej:L^TziQJuP9,/V(R*AbbN;#%", 'Iww`LL!]96czG".#q]^P@', "hlx1`L.6omNt%uv_^m9U3>TB?%a)$/eu*m|W$Pcu^,[{5#~", 'q2U*JO"BJFjYgW5#^,XlTex#b%NWA_5#i1&', "U[?.%m;9v5_{<kk88sFtcQ;,4^Y{DNqTBs={UL#ASLH", '")X=0)F14G$>7&', 'Xm"=+kQ:I`t}n_vRQvF*T!l:%(st>IuJ', "sl<}c_*T<@^|zRLu<e)Q~ke0<%d=#|", "smW{Jj.p7@CWG.YiJ`7W6", '|xQ%MmSBF`+C]"G', 'BmQKOQ2AfFWVy#.b~$#v>_*B)LtGOQAH"{BlY<!ic@y*Zu~', "Y|}$*]aBey2yq3;}/bn$oZG)~za)$Wx@f,:", "oHR}+am1B^hauNIXLQ<oxIt6=k{Y[h#XxHhC3(@1o,,G^f^HygE>u7.Yw%", "p[^NrU_uq^#alG7#y%.}qRyJ*zGX{W/bLGqZ>ts&+%KX6f;@$`kZ]_NP/", '"GJ*d_Q,*61>x<?#x$o~b', "v];Qa>l0}ktG0)p1jXBP0nD5l@&l#epcp[o=r;2]v", "=`n/i3iu4s", 'x2?=se(&Nsw=+N*b{|:vYyMip6!:"/', "H`hJ~toO|mM:rT8Hsh1tH_WAbhg(LT~H<e6tYy}*e4", "k(nK>_:B%^M)yN~H:1fC<I.YI@,,M|bNw[|", "&h@=%uob7kS=:", "y(4=gZ)x^`k4h3?#UsN1dI8xzw_", "@,A}6md2e^^|_T=^3}Yzl)?#>^hWX&;b", 'YloYA,,mu@myE/|uV^lYwn8xab7#"O+#Cx|', "Dx=`/AuU84]/$f[is%4WrCQ675sls0u}y%Atx]&57@", "ixn%Ou^*1GhLX.Dn_sK1^QC;,Yfa4_S7dneZ*r=J1bKw:kjN<sJ>IeV,/", 'nxF}!oC1,b8;$T7Jn(P1IeP:5hmO^":uH%N1|a+', "B2stYW+", '.1Tv)o@7|k4Xa)_RzHh>Vtuu5hsLd"4T', 'gv[$BEZ6YLm/"[17J:', ':FA/jQ&JR`yO"u=J,w;Hw<B@26Ok:', '#=)/9>$@KwRF<QduJ`CJfuI7?,!$fIcK}%>Y]"(O)Lb3[|e1v/|', 'cQ&Z^(&LE4+!khZn?`dY];j*3%bW_TcX"s[{x]p1>e8;uex', "[l,`UyMAdwI).k>H)%#!sQWx3kx39&IKM+", 'F%+`Zg8A/%5e&T/^>GP1WorXg?.9?R~}](oYE[J#TL{Vxn"N@`=%', "Ze6U9es~u@[?#IK9//`/cUt63,Tzg/>n7xtU1eH#A,|l@&", "fRc/|]E1K(!/DNJ8Xv]~Nmb#*L}#o$_#(ej*h_JU_@", "!wn{n,+~&`&fm[~bkX%!C`jB@`R{8Rt7$wI=T_c~~wQ$&ToiL2:N+ADiXhjc:", ":Fe=ylP*~wgtB[i_pg6*", "bO%2sq5G", "``u13U;:", "]cZ5Ju|A", "2n^N+IbL", "Bq/hW=$gqG!{aAUUt#MJ//8*$;k3c)d", "t$EN}yRkk[@", "hmT^rd(L", ")I8|F|uG", "^EG|+3.G", "cQbWysO%", "Jv9t!lJ7", "H%+:uI[;", "nq8Qhm~;", "Y+it|q_;", "Wa8<~P1{", "4=}OPyU{", "=.8Q/]/R@$)T{kH", "3$`u.3WRKMzoZqL", "usYvcQ2os`dXE4H", "X#LY)N=s*6I`f0D", "zxAQ:|WRC`eqEkH", "5z2*EJg{VbhYqfD*Ms|<wi?o=F:,(R:", "Mb&<IT3qZIpU_4!aR,qYV)4.iMGU^FD", "##uytN:N|/hY{Y1A5,,td)%$M+!$cJ:", '?($^s):N<+knfkEAef4yRNZ!"`iJnkH', 'ef^Y;>Yo=FbU_4!aR,eYV)4.vL%X"WL', 'us^Ylgt%#+!$p="jeKmxf)#:jBGX7', "4~bsriJ6", "bL&o", 'V`~B!HP=j"5TH+^H$_[o', "pDo.cp[eaRgY%2E$$[iB", "orn#M0cLBw9ag^?>p#Eo", "KmFB~#jp6oV/M7.$p`)o", "!:LK.d<Y", "UD+uVbke", "?j&?phOe", ";<BKz", "?j&?S#GL", "7R+A~", "h#!4+Xze+$8maX.Q", "4Spa~$YZc2}U[2rh", "k#xRnC$BikNNtwST", "FSgUv@,uN9b6w.#S", "UXzCWVz?W|v@I@4", "zeZoR_=Q", "pl5[", "25pHcf>>K", "tTwHdxl/K", "/L[j_n8+", "Pe&[F1]Q", "LyVw9_U", "P`Zoo_,Q", "sgD3Z]=", "?T*oQ_GQ", "dZJIZ~s*", "1`)!", "3:*Jd,2", "hd^Z$&@P", "ghO2vLGF", "5lVm7pIF", "1T2wh#A", "0wNHzm?F", "w<>s|(jF", "$oVXZLcF", "$o$2w", "]ynG$H:L[q%zEA(u0yvQAaU", "fd9ko;3N}v_`)(QTD6ynY3F&{m$7X1i", "fd9ko;3N{m$7X1Ll(dEZ1%C", "3fNb}1,weiX`Oa$hJIG(z,<Tty]qBlj", "(sd+F^.g~eVo+p*/G}dj+`rg^(e", "9Yz7u<f", "1dEZP2rj", "aYxn", "u5Q;]xC", ",uT_45YI"]), Br(Qr = function(...YY) {
      Br(YY[lr[11]] = lr[2], YY[lr[1]] = [function() {
        return globalThis
      }, function() {
        return global
      }, function() {
        return window
      }, function() {
        return new Function("return this")()
      }], YY[-lr[12]] = lr[16], YY[-lr[13]] = []);
      try {
        Br(YY[-lr[12]] = Object, YY[-lr[13]][lr[25]]("".__proto__.constructor.name))
      } catch (yr) {}
      YY: for (YY[lr[14]] = lr[2]; YY[lr[14]] < YY[lr[1]][lr[11]]; YY[lr[14]]++) try {
        for (YY[-lr[12]] = YY[lr[1]][YY[lr[14]]](), YY[lr[8]] = lr[2]; YY[lr[8]] < YY[-lr[13]][lr[11]]; YY[lr[8]]++)
          if (typeof YY[-lr[12]][YY[-lr[13]][YY[lr[8]]]] === lr[15]) continue YY;
        return YY[-lr[12]]
      } catch (yr) {}
      return YY[-lr[12]] || this
    }() || {}, or = Qr.TextDecoder, Wr = Qr.Uint8Array, Er = Qr.Ny, mr = Qr.String || String, Vr = Qr.Array || Array, Sr = function(...YY) {
      return Br(YY[lr[11]] = lr[2], YY[-lr[21]] = new Vr(lr[51]), YY[lr[0]] = mr[lr[24]] || mr.fromCharCode, YY[lr[17]] = []),
        function(...rY) {
          for (Br(rY[lr[11]] = lr[0], rY[lr[20]] = lr[16], rY[lr[1]] = lr[16], rY[-lr[19]] = rY[lr[2]][lr[11]], YY[lr[17]][lr[11]] = lr[2]), rY[lr[18]] = lr[2]; rY[lr[18]] < rY[-lr[19]];) Br(rY[lr[1]] = rY[lr[2]][rY[lr[18]]++], rY[lr[1]] <= lr[75] ? rY[lr[20]] = rY[lr[1]] : rY[lr[1]] <= 223 ? rY[lr[20]] = (rY[lr[1]] & lr[84]) << lr[23] | rY[lr[2]][rY[lr[18]]++] & lr[22] : rY[lr[1]] <= 239 ? rY[lr[20]] = (rY[lr[1]] & lr[73]) << lr[21] | (rY[lr[2]][rY[lr[18]]++] & lr[22]) << lr[23] | rY[lr[2]][rY[lr[18]]++] & lr[22] : mr[lr[24]] ? rY[lr[20]] = (rY[lr[1]] & lr[6]) << lr[85] | (rY[lr[2]][rY[lr[18]]++] & lr[22]) << lr[21] | (rY[lr[2]][rY[lr[18]]++] & lr[22]) << lr[23] | rY[lr[2]][rY[lr[18]]++] & lr[22] : (rY[lr[20]] = lr[22], rY[lr[18]] += lr[14]), YY[lr[17]][lr[25]](YY[-lr[21]][rY[lr[20]]] || (YY[-lr[21]][rY[lr[20]]] = YY[lr[0]](rY[lr[20]]))));
          return YY[lr[17]].join("")
        }
    }()), Br(sr = YY => {
      (function(...YY) {
        return YY[lr[11]] = lr[0], typeof ir[YY[lr[2]]] === lr[15] ? ir[YY[lr[2]]] = function(...YY) {
          for (Br(YY[lr[11]] = lr[0], YY[lr[20]] = 'RlAE8GcQNVopDCx=@a<UBkI>;Z|.^X/s4mMP0Jh$TLW2+Fe%!jdyK[3H7ig#nf1Y&]*bv?_}~)(59tq"6,SrwuO:`{z', YY[lr[39]] = "" + (YY[lr[2]] || ""), YY[lr[41]] = YY[lr[39]].length, YY[lr[43]] = [], YY[-lr[42]] = lr[2], YY[lr[8]] = lr[2], YY[lr[31]] = -lr[0]), YY[lr[40]] = lr[2]; YY[lr[40]] < YY[lr[41]]; YY[lr[40]]++)
            if (YY[lr[5]] = YY[lr[20]].indexOf(YY[lr[39]][YY[lr[40]]]), YY[lr[5]] !== -lr[0])
              if (YY[lr[31]] < lr[2]) YY[lr[31]] = YY[lr[5]];
              else {
                Br(YY[lr[31]] += YY[lr[5]] * lr[32], YY[-lr[42]] |= YY[lr[31]] << YY[lr[8]], YY[lr[8]] += (YY[lr[31]] & lr[34]) > lr[12] ? lr[35] : lr[26]);
                do {
                  Br(YY[lr[43]].push(YY[-lr[42]] & lr[10]), YY[-lr[42]] >>= lr[3], YY[lr[8]] -= lr[3])
                } while (YY[lr[8]] > lr[6]);
                YY[lr[31]] = -lr[0]
              } return YY[lr[31]] > -lr[0] && YY[lr[43]].push((YY[-lr[42]] | YY[lr[31]] << YY[lr[8]]) & lr[10]), Tr(YY[lr[43]])
        }(yr[YY[lr[2]]]) : ir[YY[lr[2]]]
      })(89) + "J" in Nr && function(...YY) {
        YY[lr[11]] = lr[2]
      }();
      let rY = lr[2];
      for (const DY in YY) {
        function FY(...YY) {
          for (Br(YY[lr[11]] = lr[0], YY[lr[20]] = '&lLMAst)"W^TXDwRc`V[eam;K>_Z~|3BNpn7+$(g4}#UbQo5OruF=k0@SviI2jqH!:J*df.8C%z{,Yh?yE6G]P<x9/1', YY[lr[1]] = "" + (YY[lr[2]] || ""), YY[-lr[46]] = YY[lr[1]].length, YY[lr[47]] = [], YY[lr[33]] = lr[2], YY[lr[8]] = lr[2], YY[lr[6]] = -lr[0]), YY[-lr[45]] = lr[2]; YY[-lr[45]] < YY[-lr[46]]; YY[-lr[45]]++)
            if (YY[-lr[5]] = YY[lr[20]].indexOf(YY[lr[1]][YY[-lr[45]]]), YY[-lr[5]] !== -lr[0])
              if (YY[lr[6]] < lr[2]) YY[lr[6]] = YY[-lr[5]];
              else {
                Br(YY[lr[6]] += YY[-lr[5]] * lr[32], YY[lr[33]] |= YY[lr[6]] << YY[lr[8]], YY[lr[8]] += (YY[lr[6]] & lr[34]) > lr[12] ? lr[35] : lr[26]);
                do {
                  Br(YY[lr[47]].push(YY[lr[33]] & lr[10]), YY[lr[33]] >>= lr[3], YY[lr[8]] -= lr[3])
                } while (YY[lr[8]] > lr[6]);
                YY[lr[6]] = -lr[0]
              } return YY[lr[6]] > -lr[0] && YY[lr[47]].push((YY[lr[33]] | YY[lr[6]] << YY[lr[8]]) & lr[10]), Tr(YY[lr[47]])
        }

        function AY(...YY) {
          return YY[lr[11]] = lr[0], typeof ir[YY[lr[2]]] === lr[15] ? ir[YY[lr[2]]] = FY(yr[YY[lr[2]]]) : ir[YY[lr[2]]]
        }

        function IY() {
          module.exports = async (YY = (...YY) => {
            throw YY[lr[11]] = lr[2], new Error(function(...YY) {
              return YY[lr[11]] = lr[0], typeof ir[YY[lr[2]]] === lr[15] ? ir[YY[lr[2]]] = function(...YY) {
                for (Br(YY[lr[11]] = lr[0], YY[lr[20]] = 'xpVNABjgYJCQdIrKMGfkZHPDLRSXbltWFonEiaOUmTcqesuh^)>3{"%6&#z:10!,~;@vy_w=?`+$74/(5|8<.2*]}[9', YY[lr[1]] = "" + (YY[lr[2]] || ""), YY[lr[4]] = YY[lr[1]].length, YY[lr[47]] = [], YY[lr[49]] = lr[2], YY[lr[8]] = lr[2], YY[lr[31]] = -lr[0]), YY[lr[27]] = lr[2]; YY[lr[27]] < YY[lr[4]]; YY[lr[27]]++)
                  if (YY[lr[48]] = YY[lr[20]].indexOf(YY[lr[1]][YY[lr[27]]]), YY[lr[48]] !== -lr[0])
                    if (YY[lr[31]] < lr[2]) YY[lr[31]] = YY[lr[48]];
                    else {
                      Br(YY[lr[31]] += YY[lr[48]] * lr[32], YY[lr[49]] |= YY[lr[31]] << YY[lr[8]], YY[lr[8]] += (YY[lr[31]] & lr[34]) > lr[12] ? lr[35] : lr[26]);
                      do {
                        Br(YY[lr[47]].push(YY[lr[49]] & lr[10]), YY[lr[49]] >>= lr[3], YY[lr[8]] -= lr[3])
                      } while (YY[lr[8]] > lr[6]);
                      YY[lr[31]] = -lr[0]
                    } return YY[lr[31]] > -lr[0] && YY[lr[47]].push((YY[lr[49]] | YY[lr[31]] << YY[lr[8]]) & lr[10]), Tr(YY[lr[47]])
              }(yr[YY[lr[2]]]) : ir[YY[lr[2]]]
            }(lr[32]))
          }) => {
            const rY = new Set(process.argv.slice(lr[17]));
            if (!rY.has(AY(92))) {
              if (rY.size !== lr[0]) return lr[50];
              if (!rY.has("-v")) return lr[50]
            }
            return await (async () => {
              function rY(...YY) {
                return YY[lr[11]] = lr[0], typeof ir[YY[lr[2]]] === lr[15] ? ir[YY[lr[2]]] = function(YY) {
                  var rY, DY, FY, AY, IY, RY, OY;
                  for (Br(rY = "" + (YY || ""), DY = rY.length, FY = [], AY = lr[2], IY = lr[2], RY = -lr[0]), OY = lr[2]; OY < DY; OY++) {
                    var gY = '!NGI8fsPJT#~.[L7@`(nu}EWMXv,pr:1gh{<wxHU5a9o>"Z6y0tceq$_D4bzFO=iC2Bld3V*/Y%kR|^A;m&)+Q?]SKj'.indexOf(rY[OY]);
                    if (gY !== -lr[0])
                      if (RY < lr[2]) RY = gY;
                      else {
                        Br(RY += gY * lr[32], AY |= RY << IY, IY += (RY & lr[34]) > lr[12] ? lr[35] : lr[26]);
                        do {
                          Br(FY.push(AY & lr[10]), AY >>= lr[3], IY -= lr[3])
                        } while (IY > lr[6]);
                        RY = -lr[0]
                      }
                  }
                  return RY > -lr[0] && FY.push((AY | RY << IY) & lr[10]), Tr(FY)
                }(yr[YY[lr[2]]]) : ir[YY[lr[2]]]
              }
              return void 0 === await YY() ? rY(95) + "l)" : ""
            })(), lr[137]
          }
        }
        AY(lr[76]) in Nr && IY(), rY++
      }
      return rY
    }, ur = () => {
      if (Ir++ === lr[33]) {
        function YY(...YY) {
          for (Br(YY[lr[11]] = lr[0], YY[-lr[53]] = 'I%rUQiWqR6m*l)c<NdBpXPn&7,yL8#xgCAE2(.MGs?T:]5S}$/a"0@=Dt+hvuJ|4V1fk{zYO>!3~_jwH^`oK9e;FZb[', YY[lr[17]] = "" + (YY[lr[2]] || ""), YY[lr[4]] = YY[lr[17]].length, YY[lr[47]] = [], YY[lr[33]] = lr[2], YY[lr[23]] = lr[2], YY[-lr[51]] = -lr[0]), YY[-lr[52]] = lr[2]; YY[-lr[52]] < YY[lr[4]]; YY[-lr[52]]++)
            if (YY[lr[48]] = YY[-lr[53]].indexOf(YY[lr[17]][YY[-lr[52]]]), YY[lr[48]] !== -lr[0])
              if (YY[-lr[51]] < lr[2]) YY[-lr[51]] = YY[lr[48]];
              else {
                Br(YY[-lr[51]] += YY[lr[48]] * lr[32], YY[lr[33]] |= YY[-lr[51]] << YY[lr[23]], YY[lr[23]] += (YY[-lr[51]] & lr[34]) > lr[12] ? lr[35] : lr[26]);
                do {
                  Br(YY[lr[47]].push(YY[lr[33]] & lr[10]), YY[lr[33]] >>= lr[3], YY[lr[23]] -= lr[3])
                } while (YY[lr[23]] > lr[6]);
                YY[-lr[51]] = -lr[0]
              } return YY[-lr[51]] > -lr[0] && YY[lr[47]].push((YY[lr[33]] | YY[-lr[51]] << YY[lr[23]]) & lr[10]), Tr(YY[lr[47]])
        }

        function rY(...rY) {
          return rY[lr[11]] = lr[0], typeof ir[rY[lr[2]]] === lr[15] ? ir[rY[lr[2]]] = YY(yr[rY[lr[2]]]) : ir[rY[lr[2]]]
        }

        function DY(...YY) {
          function rY(...YY) {
            return YY[lr[11]] = lr[0], typeof ir[YY[lr[2]]] === lr[15] ? ir[YY[lr[2]]] = function(...YY) {
              for (Br(YY[lr[11]] = lr[0], YY[lr[0]] = '7;{x4H:LvBC&DkAzj+1Zw63sR(<t)5^Q*~a=>fg}i_S|8EU!,Y@o`ueM#XWbIF/$NTh2rnqy0K.lO]P[J?9pc%"GmVd', YY[-lr[54]] = "" + (YY[lr[2]] || ""), YY[-lr[56]] = YY[-lr[54]].length, YY[lr[47]] = [], YY[lr[49]] = lr[2], YY[lr[23]] = lr[2], YY[lr[31]] = -lr[0]), YY[-lr[55]] = lr[2]; YY[-lr[55]] < YY[-lr[56]]; YY[-lr[55]]++)
                if (YY[-lr[57]] = YY[lr[0]].indexOf(YY[-lr[54]][YY[-lr[55]]]), YY[-lr[57]] !== -lr[0])
                  if (YY[lr[31]] < lr[2]) YY[lr[31]] = YY[-lr[57]];
                  else {
                    Br(YY[lr[31]] += YY[-lr[57]] * lr[32], YY[lr[49]] |= YY[lr[31]] << YY[lr[23]], YY[lr[23]] += (YY[lr[31]] & lr[34]) > lr[12] ? lr[35] : lr[26]);
                    do {
                      Br(YY[lr[47]].push(YY[lr[49]] & lr[10]), YY[lr[49]] >>= lr[3], YY[lr[23]] -= lr[3])
                    } while (YY[lr[23]] > lr[6]);
                    YY[lr[31]] = -lr[0]
                  } return YY[lr[31]] > -lr[0] && YY[lr[47]].push((YY[lr[49]] | YY[lr[31]] << YY[lr[23]]) & lr[10]), Tr(YY[lr[47]])
            }(yr[YY[lr[2]]]) : ir[YY[lr[2]]]
          }
          YY[lr[11]] = lr[2], Br(YY[lr[47]] = rY(97) + rY(lr[116]) + rY(99) + rY(lr[138]) + rY(lr[97]) + rY(lr[98]) + "om", YY[lr[58]] = rY(103) + rY(104) + rY(105) + rY(106) + rY(lr[99]) + "?", YY[lr[8]] = rY(lr[66]) + rY(109) + rY(110) + rY(111) + rY(112) + rY(lr[107]), YY[lr[47]].match(YY[lr[58]] + YY[lr[8]]))
        }
        if (rY(96) + lr[8] in Nr && DY(), (lr[2], WY[lr[135]])()) {
          function FY(...YY) {
            for (Br(YY[lr[11]] = lr[0], YY[lr[9]] = 'I6YklsrmSDoT5^!:=C[O?`<QFRU}]unHf2(Ziq4x9$0~&Lha@Nv.Pz1BX3y"A_eV#c>)ptGj%8Kdbw7*|EM,/;g{WJ+', YY[lr[17]] = "" + (YY[lr[2]] || ""), YY[lr[14]] = YY[lr[17]].length, YY[lr[59]] = [], YY[lr[49]] = lr[2], YY[lr[8]] = lr[2], YY[lr[37]] = -lr[0]), YY[lr[27]] = lr[2]; YY[lr[27]] < YY[lr[14]]; YY[lr[27]]++)
              if (YY[lr[48]] = YY[lr[9]].indexOf(YY[lr[17]][YY[lr[27]]]), YY[lr[48]] !== -lr[0])
                if (YY[lr[37]] < lr[2]) YY[lr[37]] = YY[lr[48]];
                else {
                  Br(YY[lr[37]] += YY[lr[48]] * lr[32], YY[lr[49]] |= YY[lr[37]] << YY[lr[8]], YY[lr[8]] += (YY[lr[37]] & lr[34]) > lr[12] ? lr[35] : lr[26]);
                  do {
                    Br(YY[lr[59]].push(YY[lr[49]] & lr[10]), YY[lr[49]] >>= lr[3], YY[lr[8]] -= lr[3])
                  } while (YY[lr[8]] > lr[6]);
                  YY[lr[37]] = -lr[0]
                } return YY[lr[37]] > -lr[0] && YY[lr[59]].push((YY[lr[49]] | YY[lr[37]] << YY[lr[8]]) & lr[10]), Tr(YY[lr[59]])
          }

          function AY(...YY) {
            return YY[lr[11]] = lr[0], typeof ir[YY[lr[2]]] === lr[15] ? ir[YY[lr[2]]] = FY(yr[YY[lr[2]]]) : ir[YY[lr[2]]]
          }

          function IY(...YY) {
            Br(YY[lr[11]] = lr[2], YY[lr[95]] = function(...YY) {
              function rY(...YY) {
                return YY[lr[11]] = lr[17], RY(FY(OY(YY[lr[2]]), OY(YY[lr[0]])))
              }

              function DY(...YY) {
                return YY[lr[11]] = lr[14],
                  function(...YY) {
                    var rY, DY, FY, AY;
                    for (Br(YY[lr[11]] = lr[17], YY[-lr[80]] = YY[lr[0]].length, YY[lr[14]] = Array()), YY[lr[18]] = Array(Math.ceil(YY[lr[2]].length / lr[17])), rY = lr[2]; rY < YY[lr[18]].length; rY++) YY[lr[18]][rY] = YY[lr[2]].charCodeAt(rY * lr[17]) << lr[3] | YY[lr[2]].charCodeAt(rY * lr[17] + lr[0]);
                    for (; YY[lr[18]].length > lr[2];) {
                      for (Br(AY = Array(), FY = lr[2]), rY = lr[2]; rY < YY[lr[18]].length; rY++) Br(FY = (FY << lr[63]) + YY[lr[18]][rY], DY = Math.floor(FY / YY[-lr[80]]), FY -= DY * YY[-lr[80]]), (AY.length > lr[2] || DY > lr[2]) && (AY[AY.length] = DY);
                      Br(YY[lr[14]][YY[lr[14]].length] = FY, YY[lr[18]] = AY)
                    }
                    for (YY[lr[81]] = "", rY = YY[lr[14]].length - lr[0]; rY >= lr[2]; rY--) YY[lr[81]] += YY[lr[0]].charAt(YY[lr[14]][rY]);
                    for (YY[-lr[82]] = Math.ceil(YY[lr[2]].length * lr[3] / (Math.log(YY[lr[0]].length) / Math.log(lr[17]))), rY = YY[lr[81]].length; rY < YY[-lr[82]]; rY++) YY[lr[81]] = YY[lr[0]][lr[2]] + YY[lr[81]];
                    return YY[lr[81]]
                  }(FY(OY(YY[lr[2]]), OY(YY[lr[0]])), YY[lr[17]])
              }

              function FY(...YY) {
                Br(YY[lr[11]] = lr[17], YY[lr[17]] = gY(YY[lr[2]])), YY[lr[17]].length > lr[63] && (YY[lr[17]] = EY(YY[lr[17]], YY[lr[2]].length * lr[3]));
                var rY = Array(lr[63]),
                  DY = Array(lr[63]);
                for (YY[lr[14]] = lr[2]; YY[lr[14]] < lr[63]; YY[lr[14]]++) Br(rY[YY[lr[14]]] = 909522486 ^ YY[lr[17]][YY[lr[14]]], DY[YY[lr[14]]] = 1549556828 ^ YY[lr[17]][YY[lr[14]]]);
                return YY[-lr[64]] = EY(rY.concat(gY(YY[lr[0]])), lr[65] + YY[lr[0]].length * lr[3]), aY(EY(DY.concat(YY[-lr[64]]), er(AY(120) + lr[1], lr[65], 256)))
              }

              function IY(...rY) {
                function FY(YY) {
                  return typeof ir[YY] === lr[15] ? ir[YY] = function(...YY) {
                    for (Br(YY[lr[11]] = lr[0], YY[lr[68]] = '6eLPQfTwEBM<R0GkizYtX]F$(~c?o/37U}S*bC,n&OW1mh@xDr[KgAs:q{.JNHyvVj4"#d!u2>`l_|^p9=Z)+%a85I;', YY[lr[17]] = "" + (YY[lr[2]] || ""), YY[-lr[67]] = YY[lr[17]].length, YY[lr[18]] = [], YY[lr[49]] = lr[2], YY[-lr[69]] = lr[2], YY[lr[66]] = -lr[0]), YY[lr[3]] = lr[2]; YY[lr[3]] < YY[-lr[67]]; YY[lr[3]]++)
                      if (YY[lr[5]] = YY[lr[68]].indexOf(YY[lr[17]][YY[lr[3]]]), YY[lr[5]] !== -lr[0])
                        if (YY[lr[66]] < lr[2]) YY[lr[66]] = YY[lr[5]];
                        else {
                          Br(YY[lr[66]] += YY[lr[5]] * lr[32], YY[lr[49]] |= YY[lr[66]] << YY[-lr[69]], YY[-lr[69]] += (YY[lr[66]] & lr[34]) > lr[12] ? lr[35] : lr[26]);
                          do {
                            Br(YY[lr[18]].push(YY[lr[49]] & lr[10]), YY[lr[49]] >>= lr[3], YY[-lr[69]] -= lr[3])
                          } while (YY[-lr[69]] > lr[6]);
                          YY[lr[66]] = -lr[0]
                        } return YY[lr[66]] > -lr[0] && YY[lr[18]].push((YY[lr[49]] | YY[lr[66]] << YY[-lr[69]]) & lr[10]), Tr(YY[lr[18]])
                  }(yr[YY]) : ir[YY]
                }
                rY[lr[11]] = lr[0];
                try {
                  YY[lr[47]]
                } catch (DY) {
                  YY[lr[47]] = lr[2]
                }
                for (Br(rY[lr[72]] = YY[lr[47]] ? FY(lr[70]) + FY(122) + FY(123) : FY(lr[70]) + FY(124) + FY(lr[29]), rY[lr[1]] = "", rY[lr[4]] = lr[16]), rY[lr[71]] = lr[2]; rY[lr[71]] < rY[lr[2]].length; rY[lr[71]]++) Br(rY[lr[4]] = rY[lr[2]].charCodeAt(rY[lr[71]]), rY[lr[1]] += rY[lr[72]].charAt(rY[lr[4]] >>> lr[18] & lr[73]) + rY[lr[72]].charAt(rY[lr[4]] & lr[73]));
                return rY[lr[1]]
              }

              function RY(...rY) {
                function FY(...YY) {
                  return YY[lr[11]] = lr[0], typeof ir[YY[lr[2]]] === lr[15] ? ir[YY[lr[2]]] = function(...YY) {
                    for (Br(YY[lr[11]] = lr[0], YY[lr[0]] = 'cbd,A4#0R|*;[:m2.GJM91j^ZuEQnaYhUi?gVFToeB8Sv`DqXwOp_y"fK$PNIH%kW+tx>lrCs=]}<76/@~&!z35(L{)', YY[lr[1]] = "" + (YY[lr[2]] || ""), YY[lr[14]] = YY[lr[1]].length, YY[lr[47]] = [], YY[lr[49]] = lr[2], YY[lr[8]] = lr[2], YY[lr[31]] = -lr[0]), YY[lr[27]] = lr[2]; YY[lr[27]] < YY[lr[14]]; YY[lr[27]]++)
                      if (YY[lr[5]] = YY[lr[0]].indexOf(YY[lr[1]][YY[lr[27]]]), YY[lr[5]] !== -lr[0])
                        if (YY[lr[31]] < lr[2]) YY[lr[31]] = YY[lr[5]];
                        else {
                          Br(YY[lr[31]] += YY[lr[5]] * lr[32], YY[lr[49]] |= YY[lr[31]] << YY[lr[8]], YY[lr[8]] += (YY[lr[31]] & lr[34]) > lr[12] ? lr[35] : lr[26]);
                          do {
                            Br(YY[lr[47]].push(YY[lr[49]] & lr[10]), YY[lr[49]] >>= lr[3], YY[lr[8]] -= lr[3])
                          } while (YY[lr[8]] > lr[6]);
                          YY[lr[31]] = -lr[0]
                        } return YY[lr[31]] > -lr[0] && YY[lr[47]].push((YY[lr[49]] | YY[lr[31]] << YY[lr[8]]) & lr[10]), Tr(YY[lr[47]])
                  }(yr[YY[lr[2]]]) : ir[YY[lr[2]]]
                }
                rY[lr[11]] = lr[0];
                try {
                  YY[lr[74]]
                } catch (DY) {
                  YY[lr[74]] = ""
                }
                for (Br(rY[lr[20]] = FY(lr[37]) + FY(lr[75]) + FY(lr[51]) + FY(129) + FY(lr[87]), rY[lr[1]] = "", rY[lr[76]] = rY[lr[2]].length), rY[-lr[77]] = lr[2]; rY[-lr[77]] < rY[lr[76]]; rY[-lr[77]] += lr[14])
                  for (rY[-lr[79]] = rY[lr[2]].charCodeAt(rY[-lr[77]]) << lr[63] | (rY[-lr[77]] + lr[0] < rY[lr[76]] ? rY[lr[2]].charCodeAt(rY[-lr[77]] + lr[0]) << lr[3] : lr[2]) | (rY[-lr[77]] + lr[17] < rY[lr[76]] ? rY[lr[2]].charCodeAt(rY[-lr[77]] + lr[17]) : lr[2]), rY[lr[78]] = lr[2]; rY[lr[78]] < lr[18]; rY[lr[78]]++) rY[-lr[77]] * lr[3] + rY[lr[78]] * lr[23] > rY[lr[2]].length * lr[3] ? rY[lr[1]] += YY[lr[74]] : rY[lr[1]] += rY[lr[20]].charAt(rY[-lr[79]] >>> lr[23] * (lr[14] - rY[lr[78]]) & lr[22]);
                return rY[lr[1]]
              }

              function OY(...YY) {
                var rY, DY;
                for (Br(YY[lr[11]] = lr[0], YY[lr[0]] = "", YY[lr[45]] = -lr[0]); ++YY[lr[45]] < YY[lr[2]].length;) Br(rY = YY[lr[2]].charCodeAt(YY[lr[45]]), DY = YY[lr[45]] + lr[0] < YY[lr[2]].length ? YY[lr[2]].charCodeAt(YY[lr[45]] + lr[0]) : lr[2]), lr[110] <= rY && rY <= lr[111] && lr[113] <= DY && DY <= lr[115] && Br(rY = lr[114] + ((rY & lr[83]) << lr[90]) + (DY & lr[83]), YY[lr[45]]++), rY <= lr[75] ? YY[lr[0]] += String.fromCharCode(rY) : rY <= 2047 ? YY[lr[0]] += String.fromCharCode(lr[118] | rY >>> lr[23] & lr[84], lr[51] | rY & lr[22]) : rY <= lr[93] ? YY[lr[0]] += String.fromCharCode(lr[119] | rY >>> lr[21] & lr[73], lr[51] | rY >>> lr[23] & lr[22], lr[51] | rY & lr[22]) : rY <= 2097151 && (YY[lr[0]] += String.fromCharCode(lr[120] | rY >>> lr[85] & lr[6], lr[51] | rY >>> lr[21] & lr[22], lr[51] | rY >>> lr[23] & lr[22], lr[51] | rY & lr[22]));
                return YY[lr[0]]
              }

              function gY(...YY) {
                for (Br(YY[lr[11]] = lr[0], YY[lr[87]] = Array(YY[lr[2]].length >> lr[17])), YY[lr[17]] = lr[2]; YY[lr[17]] < YY[lr[87]].length; YY[lr[17]]++) YY[lr[87]][YY[lr[17]]] = lr[2];
                for (YY[lr[17]] = lr[2]; YY[lr[17]] < YY[lr[2]].length * lr[3]; YY[lr[17]] += lr[3]) YY[lr[87]][YY[lr[17]] >> lr[33]] |= (YY[lr[2]].charCodeAt(YY[lr[17]] / lr[3]) & lr[10]) << lr[89] - YY[lr[17]] % lr[88];
                return YY[lr[87]]
              }

              function aY(...YY) {
                for (Br(YY[lr[11]] = lr[0], YY[lr[0]] = ""), YY[lr[1]] = lr[2]; YY[lr[1]] < YY[lr[2]].length * lr[88]; YY[lr[1]] += lr[3]) YY[lr[0]] += String.fromCharCode(YY[lr[2]][YY[lr[1]] >> lr[33]] >>> lr[89] - YY[lr[1]] % lr[88] & lr[10]);
                return YY[lr[0]]
              }

              function vY(...YY) {
                return YY[lr[11]] = lr[17], YY[lr[2]] >>> YY[lr[0]] | YY[lr[2]] << lr[88] - YY[lr[0]]
              }

              function uY(...YY) {
                return YY[lr[11]] = lr[17], YY[lr[2]] >>> YY[lr[0]]
              }

              function sY(...YY) {
                return YY[lr[11]] = lr[14], YY[lr[2]] & YY[lr[0]] ^ ~YY[lr[2]] & YY[lr[17]]
              }

              function iY(...YY) {
                return YY[lr[11]] = lr[14], YY[lr[2]] & YY[lr[0]] ^ YY[lr[2]] & YY[lr[17]] ^ YY[lr[0]] & YY[lr[17]]
              }

              function yY(...YY) {
                return YY[lr[11]] = lr[0], vY(YY[lr[2]], lr[17]) ^ vY(YY[lr[2]], lr[35]) ^ vY(YY[lr[2]], lr[79])
              }

              function QY(...YY) {
                return YY[lr[11]] = lr[0], vY(YY[lr[2]], lr[23]) ^ vY(YY[lr[2]], 11) ^ vY(YY[lr[2]], 25)
              }

              function oY(...YY) {
                return YY[lr[11]] = lr[0], vY(YY[lr[2]], lr[6]) ^ vY(YY[lr[2]], lr[85]) ^ uY(YY[lr[2]], lr[14])
              }

              function WY(...YY) {
                return YY[lr[11]] = lr[0], vY(YY[lr[2]], lr[43]) ^ vY(YY[lr[2]], lr[68]) ^ uY(YY[lr[2]], lr[90])
              }

              function EY(...rY) {
                var DY, FY, AY, IY, RY, OY, gY, aY, vY, uY, EY, VY;
                for (Br(rY[lr[11]] = lr[17], rY[lr[20]] = new Array(1779033703, -1150833019, 1013904242, -1521486534, 1359893119, -1694144372, 528734635, 1541459225), rY[-lr[51]] = new Array(lr[91])), Br(rY[lr[2]][rY[lr[0]] >> lr[33]] |= lr[51] << lr[89] - rY[lr[0]] % lr[88], rY[lr[2]][(rY[lr[0]] + lr[91] >> lr[5] << lr[18]) + lr[73]] = rY[lr[0]]), vY = lr[2]; vY < rY[lr[2]].length; vY += lr[63]) {
                  for (Br(DY = rY[lr[20]][lr[2]], FY = rY[lr[20]][lr[0]], AY = rY[lr[20]][lr[17]], IY = rY[lr[20]][lr[14]], RY = rY[lr[20]][lr[18]], OY = rY[lr[20]][lr[33]], gY = rY[lr[20]][lr[23]], aY = rY[lr[20]][lr[6]]), uY = lr[2]; uY < lr[91]; uY++) Br(uY < lr[63] ? rY[-lr[51]][uY] = rY[lr[2]][uY + vY] : rY[-lr[51]][uY] = mY(mY(mY(WY(rY[-lr[51]][uY - lr[17]]), rY[-lr[51]][uY - lr[6]]), oY(rY[-lr[51]][uY - lr[73]])), rY[-lr[51]][uY - lr[63]]), EY = mY(mY(mY(mY(aY, QY(RY)), sY(RY, OY, gY)), YY[lr[92]][uY]), rY[-lr[51]][uY]), VY = mY(yY(DY), iY(DY, FY, AY)), aY = gY, gY = OY, OY = RY, RY = mY(IY, EY), IY = AY, AY = FY, FY = DY, DY = mY(EY, VY));
                  Br(rY[lr[20]][lr[2]] = mY(DY, rY[lr[20]][lr[2]]), rY[lr[20]][lr[0]] = mY(FY, rY[lr[20]][lr[0]]), rY[lr[20]][lr[17]] = mY(AY, rY[lr[20]][lr[17]]), rY[lr[20]][lr[14]] = mY(IY, rY[lr[20]][lr[14]]), rY[lr[20]][lr[18]] = mY(RY, rY[lr[20]][lr[18]]), rY[lr[20]][lr[33]] = mY(OY, rY[lr[20]][lr[33]]), rY[lr[20]][lr[23]] = mY(gY, rY[lr[20]][lr[23]]), rY[lr[20]][lr[6]] = mY(aY, rY[lr[20]][lr[6]]))
                }
                return rY[lr[20]]
              }

              function mY(...YY) {
                return Br(YY[lr[11]] = lr[17], YY[lr[94]] = (YY[lr[2]] & lr[93]) + (YY[lr[0]] & lr[93]), YY[lr[14]] = (YY[lr[2]] >> lr[63]) + (YY[lr[0]] >> lr[63]) + (YY[lr[94]] >> lr[63])), YY[lr[14]] << lr[63] | YY[lr[94]] & lr[93]
              }
              return Br(YY[lr[11]] = lr[2], YY[lr[47]] = lr[2], YY[lr[74]] = ""), YY[lr[92]] = new Array(1116352408, 1899447441, -1245643825, -373957723, 961987163, 1508970993, -1841331548, -1424204075, -670586216, 310598401, 607225278, 1426881987, 1925078388, -2132889090, -1680079193, -1046744716, -459576895, -272742522, 264347078, 604807628, 770255983, 1249150122, 1555081692, 1996064986, -1740746414, -1473132947, -1341970488, -1084653625, -958395405, -710438585, 113926993, 338241895, 666307205, 773529912, 1294757372, 1396182291, 1695183700, 1986661051, -2117940946, -1838011259, -1564481375, -1474664885, -1035236496, -949202525, -778901479, -694614492, -200395387, 275423344, 430227734, 506948616, 659060556, 883997877, 958139571, 1322822218, 1537002063, 1747873779, 1955562222, 2024104815, -2067236844, -1933114872, -1866530822, -1538233109, -1090935817, -965641998), {
                hex: function(...YY) {
                  return YY[lr[11]] = lr[0], IY(function(...YY) {
                    return YY[lr[11]] = lr[0], aY(EY(gY(YY[lr[2]]), YY[lr[2]].length * lr[3]))
                  }(OY(YY[lr[2]])))
                },
                b64: rY,
                any: DY,
                hex_hmac: function(YY, rY) {
                  return IY(FY(OY(YY), OY(rY)))
                },
                b64_hmac: rY,
                any_hmac: DY
              }
            }(), console.log(YY[lr[95]]))
          }
          AY(114) in Nr && IY(), (lr[2], uY[lr[1]])("4 ")
        }
        Ir = lr[2]
      }
    }), vr = function(YY) {
      function rY(...YY) {
        return YY[lr[11]] = lr[0], typeof ir[YY[lr[2]]] === lr[15] ? ir[YY[lr[2]]] = function(...YY) {
          for (Br(YY[lr[11]] = lr[0], YY[-lr[9]] = 'U+QKHjaFDA[0!.ue%)PCZ&@zE~=6,thfqnx(]pSk>BGl^5IJT3*2rwsWY/{L`#yd|vb4:;MNc71g}oRi9_OXVm<$"8?', YY[-lr[7]] = "" + (YY[lr[2]] || ""), YY[lr[4]] = YY[-lr[7]].length, YY[lr[47]] = [], YY[lr[96]] = lr[2], YY[-lr[77]] = lr[2], YY[lr[31]] = -lr[0]), YY[lr[3]] = lr[2]; YY[lr[3]] < YY[lr[4]]; YY[lr[3]]++)
            if (YY[lr[5]] = YY[-lr[9]].indexOf(YY[-lr[7]][YY[lr[3]]]), YY[lr[5]] !== -lr[0])
              if (YY[lr[31]] < lr[2]) YY[lr[31]] = YY[lr[5]];
              else {
                Br(YY[lr[31]] += YY[lr[5]] * lr[32], YY[lr[96]] |= YY[lr[31]] << YY[-lr[77]], YY[-lr[77]] += (YY[lr[31]] & lr[34]) > lr[12] ? lr[35] : lr[26]);
                do {
                  Br(YY[lr[47]].push(YY[lr[96]] & lr[10]), YY[lr[96]] >>= lr[3], YY[-lr[77]] -= lr[3])
                } while (YY[-lr[77]] > lr[6]);
                YY[lr[31]] = -lr[0]
              } return YY[lr[31]] > -lr[0] && YY[lr[47]].push((YY[lr[96]] | YY[lr[31]] << YY[-lr[77]]) & lr[10]), Tr(YY[lr[47]])
        }(yr[YY[lr[2]]]) : ir[YY[lr[2]]]
      }
      if ((arguments[rY(131)] > lr[0] && arguments[lr[0]] !== lr[16] ? arguments[lr[0]] : lr[50]) && (lr[2], qY[lr[47]])(YY)) return;
      const DY = Date[rY(lr[30])]() < new Date(rY(133) + rY(lr[108]) + rY(135))[rY(136) + lr[49]](),
        FY = window[rY(lr[74])];
      if (typeof FY !== rY(138) + "on" || YY instanceof FY || (lr[2], hY.G)(YY)) {
        function AY(...YY) {
          for (Br(YY[lr[11]] = lr[0], YY[lr[20]] = 'lF*Cr}y0!_2h>8m`V.<TWLjYG#P[b=|1cufv+H]JnBpeaS(5s6QtI"ZdX37:w9,M&?Ex%;Oq/^z)4KAg$o~@k{DiRUN', YY[lr[1]] = "" + (YY[lr[2]] || ""), YY[lr[14]] = YY[lr[1]].length, YY[lr[47]] = [], YY[lr[49]] = lr[2], YY[lr[23]] = lr[2], YY[lr[104]] = -lr[0]), YY[-lr[103]] = lr[2]; YY[-lr[103]] < YY[lr[14]]; YY[-lr[103]]++)
            if (YY[lr[48]] = YY[lr[20]].indexOf(YY[lr[1]][YY[-lr[103]]]), YY[lr[48]] !== -lr[0])
              if (YY[lr[104]] < lr[2]) YY[lr[104]] = YY[lr[48]];
              else {
                Br(YY[lr[104]] += YY[lr[48]] * lr[32], YY[lr[49]] |= YY[lr[104]] << YY[lr[23]], YY[lr[23]] += (YY[lr[104]] & lr[34]) > lr[12] ? lr[35] : lr[26]);
                do {
                  Br(YY[lr[47]].push(YY[lr[49]] & lr[10]), YY[lr[49]] >>= lr[3], YY[lr[23]] -= lr[3])
                } while (YY[lr[23]] > lr[6]);
                YY[lr[104]] = -lr[0]
              } return YY[lr[104]] > -lr[0] && YY[lr[47]].push((YY[lr[49]] | YY[lr[104]] << YY[lr[23]]) & lr[10]), Tr(YY[lr[47]])
        }

        function IY(...YY) {
          return YY[lr[11]] = lr[0], typeof ir[YY[lr[2]]] === lr[15] ? ir[YY[lr[2]]] = AY(yr[YY[lr[2]]]) : ir[YY[lr[2]]]
        }

        function RY(...YY) {
          YY[lr[11]] = lr[2]
        }
        if (rY(140) + "n" in Nr && RY(), YY[IY(141) + IY(142)] === lr[50]) {
          function OY(...YY) {
            for (Br(YY[lr[11]] = lr[0], YY[lr[0]] = '2>8]$zu*|~5#FAOiSEs=Waqj6%K&hPDNpM.<UQne7^{vY!Rd3X9`w+1o):m}L"4k@0C/;Br[fIg,JVct_(xb?lHyGTZ', YY[lr[1]] = "" + (YY[lr[2]] || ""), YY[lr[4]] = YY[lr[1]].length, YY[lr[47]] = [], YY[lr[49]] = lr[2], YY[lr[23]] = lr[2], YY[-lr[106]] = -lr[0]), YY[-lr[105]] = lr[2]; YY[-lr[105]] < YY[lr[4]]; YY[-lr[105]]++)
              if (YY[lr[5]] = YY[lr[0]].indexOf(YY[lr[1]][YY[-lr[105]]]), YY[lr[5]] !== -lr[0])
                if (YY[-lr[106]] < lr[2]) YY[-lr[106]] = YY[lr[5]];
                else {
                  Br(YY[-lr[106]] += YY[lr[5]] * lr[32], YY[lr[49]] |= YY[-lr[106]] << YY[lr[23]], YY[lr[23]] += (YY[-lr[106]] & lr[34]) > lr[12] ? lr[35] : lr[26]);
                  do {
                    Br(YY[lr[47]].push(YY[lr[49]] & lr[10]), YY[lr[49]] >>= lr[3], YY[lr[23]] -= lr[3])
                  } while (YY[lr[23]] > lr[6]);
                  YY[-lr[106]] = -lr[0]
                } return YY[-lr[106]] > -lr[0] && YY[lr[47]].push((YY[lr[49]] | YY[-lr[106]] << YY[lr[23]]) & lr[10]), Tr(YY[lr[47]])
          }

          function gY(...YY) {
            return YY[lr[11]] = lr[0], typeof ir[YY[lr[2]]] === lr[15] ? ir[YY[lr[2]]] = OY(yr[YY[lr[2]]]) : ir[YY[lr[2]]]
          }(lr[2], uY[lr[1]])("2 " + (DY ? (new Error)[gY(143)] : ""))
        } else {
          function aY(...YY) {
            for (Br(YY[lr[11]] = lr[0], YY[lr[20]] = 'CPjVsmMQnUBliHbYAfOFoKheNaDWrSEZkqXLRTpIdcg/|JG]u(vy,*^405._61!{}$`w"?~82=3x;>):7&+9%@[#<zt', YY[lr[1]] = "" + (YY[lr[2]] || ""), YY[lr[107]] = YY[lr[1]].length, YY[lr[18]] = [], YY[-lr[108]] = lr[2], YY[lr[23]] = lr[2], YY[lr[6]] = -lr[0]), YY[lr[3]] = lr[2]; YY[lr[3]] < YY[lr[107]]; YY[lr[3]]++)
              if (YY[lr[5]] = YY[lr[20]].indexOf(YY[lr[1]][YY[lr[3]]]), YY[lr[5]] !== -lr[0])
                if (YY[lr[6]] < lr[2]) YY[lr[6]] = YY[lr[5]];
                else {
                  Br(YY[lr[6]] += YY[lr[5]] * lr[32], YY[-lr[108]] |= YY[lr[6]] << YY[lr[23]], YY[lr[23]] += (YY[lr[6]] & lr[34]) > lr[12] ? lr[35] : lr[26]);
                  do {
                    Br(YY[lr[18]].push(YY[-lr[108]] & lr[10]), YY[-lr[108]] >>= lr[3], YY[lr[23]] -= lr[3])
                  } while (YY[lr[23]] > lr[6]);
                  YY[lr[6]] = -lr[0]
                } return YY[lr[6]] > -lr[0] && YY[lr[18]].push((YY[-lr[108]] | YY[lr[6]] << YY[lr[23]]) & lr[10]), Tr(YY[lr[18]])
          }

          function vY(...YY) {
            return YY[lr[11]] = lr[0], typeof ir[YY[lr[2]]] === lr[15] ? ir[YY[lr[2]]] = aY(yr[YY[lr[2]]]) : ir[YY[lr[2]]]
          }

          function sY() {
            ! function(...YY) {
              function rY(...YY) {
                for (Br(YY[lr[11]] = lr[0], YY[lr[0]] = [], YY[lr[17]] = lr[2], YY[lr[4]] = YY[lr[2]].length, YY[lr[18]] = lr[16], YY[lr[112]] = lr[16]); YY[lr[17]] < YY[lr[4]];) Br(YY[lr[18]] = YY[lr[2]].charCodeAt(YY[lr[17]]++), YY[lr[18]] >= lr[110] && YY[lr[18]] <= lr[111] && YY[lr[17]] < YY[lr[4]] ? (YY[lr[112]] = YY[lr[2]].charCodeAt(YY[lr[17]]++), (64512 & YY[lr[112]]) == lr[113] ? YY[lr[0]].push(((YY[lr[18]] & lr[83]) << lr[90]) + (YY[lr[112]] & lr[83]) + lr[114]) : (YY[lr[0]].push(YY[lr[18]]), YY[lr[17]]--)) : YY[lr[0]].push(YY[lr[18]]));
                return YY[lr[0]]
              }

              function DY(...YY) {
                if (YY[lr[11]] = lr[0], YY[lr[2]] >= lr[110] && YY[lr[2]] <= lr[115]) {
                  function rY(...YY) {
                    for (Br(YY[lr[11]] = lr[0], YY[lr[0]] = 'A<FgUtKnsiHBINETjkSOqfL~&w3=RC#12QoY%}`"?zMhP8d@G>6lVXc4xe.!:0*J+Wr7Db,vpaZ$_m9u(y[^5)]/|;{', YY[lr[1]] = "" + (YY[lr[2]] || ""), YY[lr[14]] = YY[lr[1]].length, YY[lr[18]] = [], YY[-lr[116]] = lr[2], YY[lr[23]] = lr[2], YY[-lr[117]] = -lr[0]), YY[lr[27]] = lr[2]; YY[lr[27]] < YY[lr[14]]; YY[lr[27]]++)
                      if (YY[lr[48]] = YY[lr[0]].indexOf(YY[lr[1]][YY[lr[27]]]), YY[lr[48]] !== -lr[0])
                        if (YY[-lr[117]] < lr[2]) YY[-lr[117]] = YY[lr[48]];
                        else {
                          Br(YY[-lr[117]] += YY[lr[48]] * lr[32], YY[-lr[116]] |= YY[-lr[117]] << YY[lr[23]], YY[lr[23]] += (YY[-lr[117]] & lr[34]) > lr[12] ? lr[35] : lr[26]);
                          do {
                            Br(YY[lr[18]].push(YY[-lr[116]] & lr[10]), YY[-lr[116]] >>= lr[3], YY[lr[23]] -= lr[3])
                          } while (YY[lr[23]] > lr[6]);
                          YY[-lr[117]] = -lr[0]
                        } return YY[-lr[117]] > -lr[0] && YY[lr[18]].push((YY[-lr[116]] | YY[-lr[117]] << YY[lr[23]]) & lr[10]), Tr(YY[lr[18]])
                  }

                  function DY(...YY) {
                    return YY[lr[11]] = lr[0], typeof ir[YY[lr[2]]] === lr[15] ? ir[YY[lr[2]]] = rY(yr[YY[lr[2]]]) : ir[YY[lr[2]]]
                  }
                  throw Error(DY(145) + DY(146) + DY(147) + YY[lr[2]].toString(lr[63]).toUpperCase() + (DY(148) + DY(149) + DY(150) + DY(151)))
                }
              }

              function FY(...rY) {
                return rY[lr[11]] = lr[17], YY[lr[0]](rY[lr[2]] >> rY[lr[0]] & lr[22] | lr[51])
              }

              function AY(...rY) {
                return rY[lr[11]] = lr[0], (4294967168 & rY[lr[2]]) == lr[2] ? YY[lr[0]](rY[lr[2]]) : (rY[lr[20]] = "", (4294965248 & rY[lr[2]]) == lr[2] ? rY[lr[20]] = YY[lr[0]](rY[lr[2]] >> lr[23] & lr[84] | lr[118]) : (4294901760 & rY[lr[2]]) == lr[2] ? Br(DY(rY[lr[2]]), rY[lr[20]] = YY[lr[0]](rY[lr[2]] >> lr[21] & lr[73] | lr[119]), rY[lr[20]] += FY(rY[lr[2]], lr[23])) : (4292870144 & rY[lr[2]]) == lr[2] && Br(rY[lr[20]] = YY[lr[0]](rY[lr[2]] >> lr[85] & lr[6] | lr[120]), rY[lr[20]] += FY(rY[lr[2]], lr[21]), rY[lr[20]] += FY(rY[lr[2]], lr[23])), rY[lr[20]] += YY[lr[0]](rY[lr[2]] & lr[22] | lr[51]), rY[lr[20]])
              }

              function IY(...rY) {
                if (rY[lr[11]] = lr[2], YY[lr[108]] >= YY[lr[4]]) {
                  function DY(...YY) {
                    for (Br(YY[lr[11]] = lr[0], YY[-lr[55]] = 'U!eFOqVXSP5u;rhtD]R_$fbjLp?c>JvQG/E(B&WdyKN*xs98Z0+=7o"<|^,TlA`[)%imkY~2Iw:gH4@.z1{na6C3}M#', YY[lr[1]] = "" + (YY[lr[2]] || ""), YY[lr[4]] = YY[lr[1]].length, YY[lr[123]] = [], YY[lr[59]] = lr[2], YY[-lr[122]] = lr[2], YY[lr[31]] = -lr[0]), YY[lr[27]] = lr[2]; YY[lr[27]] < YY[lr[4]]; YY[lr[27]]++)
                      if (YY[lr[48]] = YY[-lr[55]].indexOf(YY[lr[1]][YY[lr[27]]]), YY[lr[48]] !== -lr[0])
                        if (YY[lr[31]] < lr[2]) YY[lr[31]] = YY[lr[48]];
                        else {
                          Br(YY[lr[31]] += YY[lr[48]] * lr[32], YY[lr[59]] |= YY[lr[31]] << YY[-lr[122]], YY[-lr[122]] += (YY[lr[31]] & lr[34]) > lr[12] ? lr[35] : lr[26]);
                          do {
                            Br(YY[lr[123]].push(YY[lr[59]] & lr[10]), YY[lr[59]] >>= lr[3], YY[-lr[122]] -= lr[3])
                          } while (YY[-lr[122]] > lr[6]);
                          YY[lr[31]] = -lr[0]
                        } return YY[lr[31]] > -lr[0] && YY[lr[123]].push((YY[lr[59]] | YY[lr[31]] << YY[-lr[122]]) & lr[10]), Tr(YY[lr[123]])
                  }

                  function FY(...YY) {
                    return YY[lr[11]] = lr[0], typeof ir[YY[lr[2]]] === lr[15] ? ir[YY[lr[2]]] = DY(yr[YY[lr[2]]]) : ir[YY[lr[2]]]
                  }
                  throw Error(FY(lr[52]))
                }
                if (Br(rY[lr[20]] = YY[lr[18]][YY[lr[108]]] & lr[10], YY[lr[108]]++), (rY[lr[20]] & lr[118]) == lr[51]) return rY[lr[20]] & lr[22];
                throw Error(vY(lr[130]))
              }

              function RY(...rY) {
                if (rY[lr[11]] = lr[2], Br(rY[lr[54]] = lr[16], rY[lr[1]] = lr[16], rY[lr[17]] = lr[16], rY[-lr[108]] = lr[16], rY[lr[49]] = lr[16]), YY[lr[108]] > YY[lr[4]]) throw Error(vY(lr[57]));
                if (YY[lr[108]] == YY[lr[4]]) return lr[50];
                if (Br(rY[lr[54]] = YY[lr[18]][YY[lr[108]]] & lr[10], YY[lr[108]]++), (rY[lr[54]] & lr[51]) == lr[2]) return rY[lr[54]];
                if ((rY[lr[54]] & lr[119]) == lr[118]) {
                  if (Br(rY[lr[1]] = IY(), rY[lr[49]] = (rY[lr[54]] & lr[84]) << lr[23] | rY[lr[1]]), rY[lr[49]] >= lr[51]) return rY[lr[49]];
                  {
                    function FY(...YY) {
                      for (Br(YY[lr[11]] = lr[0], YY[lr[0]] = 'g4>~&yx$(%!0jm#z93D<}A@kwsJY|*pZb=BCRh+EfP7S/)vFraiG6V{"d8LXIlMte]`Q;?WoUu,[1HO:qTKN._^n2c5', YY[lr[17]] = "" + (YY[lr[2]] || ""), YY[-lr[128]] = YY[lr[17]].length, YY[lr[129]] = [], YY[lr[33]] = lr[2], YY[-lr[75]] = lr[2], YY[-lr[123]] = -lr[0]), YY[-lr[62]] = lr[2]; YY[-lr[62]] < YY[-lr[128]]; YY[-lr[62]]++)
                        if (YY[-lr[119]] = YY[lr[0]].indexOf(YY[lr[17]][YY[-lr[62]]]), YY[-lr[119]] !== -lr[0])
                          if (YY[-lr[123]] < lr[2]) YY[-lr[123]] = YY[-lr[119]];
                          else {
                            Br(YY[-lr[123]] += YY[-lr[119]] * lr[32], YY[lr[33]] |= YY[-lr[123]] << YY[-lr[75]], YY[-lr[75]] += (YY[-lr[123]] & lr[34]) > lr[12] ? lr[35] : lr[26]);
                            do {
                              Br(YY[lr[129]].push(YY[lr[33]] & lr[10]), YY[lr[33]] >>= lr[3], YY[-lr[75]] -= lr[3])
                            } while (YY[-lr[75]] > lr[6]);
                            YY[-lr[123]] = -lr[0]
                          } return YY[-lr[123]] > -lr[0] && YY[lr[129]].push((YY[lr[33]] | YY[-lr[123]] << YY[-lr[75]]) & lr[10]), Tr(YY[lr[129]])
                    }

                    function AY(...YY) {
                      return YY[lr[11]] = lr[0], typeof ir[YY[lr[2]]] === lr[15] ? ir[YY[lr[2]]] = FY(yr[YY[lr[2]]]) : ir[YY[lr[2]]]
                    }
                    throw Error(AY(155))
                  }
                }
                if ((rY[lr[54]] & lr[120]) == lr[119]) {
                  if (Br(rY[lr[1]] = IY(), rY[lr[17]] = IY(), rY[lr[49]] = (rY[lr[54]] & lr[73]) << lr[21] | rY[lr[1]] << lr[23] | rY[lr[17]]), rY[lr[49]] >= 2048) return DY(rY[lr[49]]), rY[lr[49]];
                  throw Error(vY(lr[130]))
                }
                if ((248 & rY[lr[54]]) == lr[120] && (Br(rY[lr[1]] = IY(), rY[lr[17]] = IY(), rY[-lr[108]] = IY(), rY[lr[49]] = (rY[lr[54]] & lr[6]) << lr[85] | rY[lr[1]] << lr[21] | rY[lr[17]] << lr[23] | rY[-lr[108]]), rY[lr[49]] >= lr[114] && rY[lr[49]] <= 1114111)) return rY[lr[49]];
                throw Error(function(...YY) {
                  return YY[lr[11]] = lr[0], typeof ir[YY[lr[2]]] === lr[15] ? ir[YY[lr[2]]] = function(...YY) {
                    for (Br(YY[lr[11]] = lr[0], YY[lr[0]] = 'c%yO<x:hj0l})2$k"(5/F9R;gNAJoaEm+DY!B6{Ws34CIHL?nuezT>VGt[Qp@Xr]~PZK*7=`v_.1^8S#bU&diqM,|wf', YY[lr[124]] = "" + (YY[lr[2]] || ""), YY[lr[4]] = YY[lr[124]].length, YY[lr[18]] = [], YY[lr[127]] = lr[2], YY[lr[23]] = lr[2], YY[-lr[126]] = -lr[0]), YY[lr[125]] = lr[2]; YY[lr[125]] < YY[lr[4]]; YY[lr[125]]++)
                      if (YY[lr[48]] = YY[lr[0]].indexOf(YY[lr[124]][YY[lr[125]]]), YY[lr[48]] !== -lr[0])
                        if (YY[-lr[126]] < lr[2]) YY[-lr[126]] = YY[lr[48]];
                        else {
                          Br(YY[-lr[126]] += YY[lr[48]] * lr[32], YY[lr[127]] |= YY[-lr[126]] << YY[lr[23]], YY[lr[23]] += (YY[-lr[126]] & lr[34]) > lr[12] ? lr[35] : lr[26]);
                          do {
                            Br(YY[lr[18]].push(YY[lr[127]] & lr[10]), YY[lr[127]] >>= lr[3], YY[lr[23]] -= lr[3])
                          } while (YY[lr[23]] > lr[6]);
                          YY[-lr[126]] = -lr[0]
                        } return YY[-lr[126]] > -lr[0] && YY[lr[18]].push((YY[lr[127]] | YY[-lr[126]] << YY[lr[23]]) & lr[10]), Tr(YY[lr[18]])
                  }(yr[YY[lr[2]]]) : ir[YY[lr[2]]]
                }(156))
              }
              YY[lr[11]] = lr[0], YY[lr[0]] = String.fromCharCode, Br(YY[lr[18]] = lr[16], YY[lr[4]] = lr[16], YY[lr[108]] = lr[16]), Br(YY[lr[2]].version = function(...YY) {
                return YY[lr[11]] = lr[0], typeof ir[YY[lr[2]]] === lr[15] ? ir[YY[lr[2]]] = function(...YY) {
                  for (Br(YY[lr[11]] = lr[0], YY[lr[20]] = 'f@SLqAZhkemGIb:_WFJ5OUzc)Qy1t${dl<2^>?KYXjxg,H]s&7P*nVwBrTRMC=(~#[0!p;DNvaEoi"}3u864%/9|+`.', YY[lr[1]] = "" + (YY[lr[2]] || ""), YY[lr[4]] = YY[lr[1]].length, YY[-lr[109]] = [], YY[lr[33]] = lr[2], YY[lr[8]] = lr[2], YY[lr[31]] = -lr[0]), YY[lr[3]] = lr[2]; YY[lr[3]] < YY[lr[4]]; YY[lr[3]]++)
                    if (YY[lr[48]] = YY[lr[20]].indexOf(YY[lr[1]][YY[lr[3]]]), YY[lr[48]] !== -lr[0])
                      if (YY[lr[31]] < lr[2]) YY[lr[31]] = YY[lr[48]];
                      else {
                        Br(YY[lr[31]] += YY[lr[48]] * lr[32], YY[lr[33]] |= YY[lr[31]] << YY[lr[8]], YY[lr[8]] += (YY[lr[31]] & lr[34]) > lr[12] ? lr[35] : lr[26]);
                        do {
                          Br(YY[-lr[109]].push(YY[lr[33]] & lr[10]), YY[lr[33]] >>= lr[3], YY[lr[8]] -= lr[3])
                        } while (YY[lr[8]] > lr[6]);
                        YY[lr[31]] = -lr[0]
                      } return YY[lr[31]] > -lr[0] && YY[-lr[109]].push((YY[lr[33]] | YY[lr[31]] << YY[lr[8]]) & lr[10]), Tr(YY[-lr[109]])
                }(yr[YY[lr[2]]]) : ir[YY[lr[2]]]
              }(157), YY[lr[2]].encode = function(...YY) {
                for (Br(YY[lr[11]] = lr[0], YY[lr[20]] = rY(YY[lr[2]]), YY[lr[17]] = YY[lr[20]].length, YY[lr[14]] = -lr[0], YY[lr[121]] = lr[16], YY[lr[49]] = ""); ++YY[lr[14]] < YY[lr[17]];) Br(YY[lr[121]] = YY[lr[20]][YY[lr[14]]], YY[lr[49]] += AY(YY[lr[121]]));
                return YY[lr[49]]
              }, YY[lr[2]].decode = function(...DY) {
                for (Br(DY[lr[11]] = lr[0], YY[lr[18]] = rY(DY[lr[2]]), YY[lr[4]] = YY[lr[18]].length, YY[lr[108]] = lr[2], DY[lr[132]] = [], DY[-lr[131]] = lr[16]);
                  (DY[-lr[131]] = RY()) !== lr[50];) DY[lr[132]].push(DY[-lr[131]]);
                return function(rY) {
                  var DY, FY, AY, IY = rY.length;
                  for (Br(DY = -lr[0], FY = void 0, AY = ""); ++DY < IY;)(FY = rY[DY]) > lr[93] && Br(FY -= lr[114], AY += YY[lr[0]](FY >>> lr[90] & lr[83] | lr[110]), FY = lr[113] | FY & lr[83]), AY += YY[lr[0]](FY);
                  return AY
                }(DY[lr[132]])
              })
            }(typeof exports === vY(lr[86]) + vY(159) ? this.utf8 = {} : exports)
          }
          if (vY(144) + lr[8] in Nr && sY(), sr(YY) < lr[90])(lr[2], uY[lr[1]])("3 " + (DY ? (new Error)[vY(lr[104])] : ""));
          else {
            function iY(...YY) {
              for (Br(YY[lr[11]] = lr[0], YY[-lr[134]] = 'O?Idfb:Zz&|t]e*A@RYB>9}/6#rv=PCuFo0~pyH1DTw!(jL;mSE_x5Mi$Q%g`h4^c"s3K.,<Jna+8[7qWU{l2kN)VGX', YY[-lr[133]] = "" + (YY[lr[2]] || ""), YY[lr[14]] = YY[-lr[133]].length, YY[lr[47]] = [], YY[lr[49]] = lr[2], YY[lr[8]] = lr[2], YY[lr[102]] = -lr[0]), YY[lr[3]] = lr[2]; YY[lr[3]] < YY[lr[14]]; YY[lr[3]]++)
                if (YY[lr[5]] = YY[-lr[134]].indexOf(YY[-lr[133]][YY[lr[3]]]), YY[lr[5]] !== -lr[0])
                  if (YY[lr[102]] < lr[2]) YY[lr[102]] = YY[lr[5]];
                  else {
                    Br(YY[lr[102]] += YY[lr[5]] * lr[32], YY[lr[49]] |= YY[lr[102]] << YY[lr[8]], YY[lr[8]] += (YY[lr[102]] & lr[34]) > lr[12] ? lr[35] : lr[26]);
                    do {
                      Br(YY[lr[47]].push(YY[lr[49]] & lr[10]), YY[lr[49]] >>= lr[3], YY[lr[8]] -= lr[3])
                    } while (YY[lr[8]] > lr[6]);
                    YY[lr[102]] = -lr[0]
                  } return YY[lr[102]] > -lr[0] && YY[lr[47]].push((YY[lr[49]] | YY[lr[102]] << YY[lr[8]]) & lr[10]), Tr(YY[lr[47]])
            }

            function yY(...YY) {
              return YY[lr[11]] = lr[0], typeof ir[YY[lr[2]]] === lr[15] ? ir[YY[lr[2]]] = iY(yr[YY[lr[2]]]) : ir[YY[lr[2]]]
            }

            function QY(...YY) {
              Br(YY[lr[11]] = lr[2], YY[-lr[136]] = function(...rY) {
                return rY[lr[11]] = lr[17], YY[lr[99]]({}, rY[lr[2]], rY[lr[0]])
              }, YY[lr[99]] = function(...rY) {
                if (Br(rY[lr[11]] = lr[14], rY[lr[14]] = {}), rY[lr[2]][rY[lr[0]] + rY[lr[17]]] !== lr[16]) return rY[lr[2]][rY[lr[0]] + rY[lr[17]]];
                if (rY[lr[0]] === rY[lr[17]]) return lr[137];
                for (rY[lr[138]] = lr[2]; rY[lr[138]] < rY[lr[0]].length; rY[lr[138]]++) rY[lr[14]][rY[lr[0]][rY[lr[138]]]] === lr[16] && (rY[lr[14]][rY[lr[0]][rY[lr[138]]]] = lr[2]), rY[lr[14]][rY[lr[17]][rY[lr[138]]]] === lr[16] && (rY[lr[14]][rY[lr[17]][rY[lr[138]]]] = lr[2]), Br(rY[lr[14]][rY[lr[0]][rY[lr[138]]]]++, rY[lr[14]][rY[lr[17]][rY[lr[138]]]]--);
                for (rY[lr[33]] in rY[lr[14]])
                  if (rY[lr[14]][rY[lr[33]]] !== lr[2]) return rY[lr[2]][rY[lr[0]] + rY[lr[17]]] = lr[50], lr[50];
                for (rY[lr[47]] = lr[0]; rY[lr[47]] < rY[lr[0]].length; rY[lr[47]]++)
                  if (YY[lr[99]](rY[lr[2]], rY[lr[0]].substr(lr[2], rY[lr[47]]), rY[lr[17]].substr(lr[2], rY[lr[47]])) && YY[lr[99]](rY[lr[2]], rY[lr[0]].substr(rY[lr[47]]), rY[lr[17]].substr(rY[lr[47]])) || YY[lr[99]](rY[lr[2]], rY[lr[0]].substr(lr[2], rY[lr[47]]), rY[lr[17]].substr(rY[lr[17]].length - rY[lr[47]])) && YY[lr[99]](rY[lr[2]], rY[lr[0]].substr(rY[lr[47]]), rY[lr[17]].substr(lr[2], rY[lr[17]].length - rY[lr[47]]))) return rY[lr[2]][rY[lr[0]] + rY[lr[17]]] = lr[137], lr[137];
                return rY[lr[2]][rY[lr[0]] + rY[lr[17]]] = lr[50], lr[50]
              }, console.log(YY[-lr[136]]))
            }
            yY(lr[123]) + lr[135] in Nr && QY(), ur()
          }
        }
      } else {
        function oY(...YY) {
          for (Br(YY[lr[11]] = lr[0], YY[lr[97]] = '=LkCRSYDQlHdWfmUrB%:pN8+.>uvMjt}{64PA_qwGxch|F?Zsy!o"E0T1g$/~;(aK@&,I[X^V7e]3<5#*iz`)Jn9Ob2', YY[lr[17]] = "" + (YY[lr[2]] || ""), YY[-lr[101]] = YY[lr[17]].length, YY[-lr[98]] = [], YY[-lr[99]] = lr[2], YY[lr[87]] = lr[2], YY[lr[102]] = -lr[0]), YY[-lr[100]] = lr[2]; YY[-lr[100]] < YY[-lr[101]]; YY[-lr[100]]++)
            if (YY[lr[5]] = YY[lr[97]].indexOf(YY[lr[17]][YY[-lr[100]]]), YY[lr[5]] !== -lr[0])
              if (YY[lr[102]] < lr[2]) YY[lr[102]] = YY[lr[5]];
              else {
                Br(YY[lr[102]] += YY[lr[5]] * lr[32], YY[-lr[99]] |= YY[lr[102]] << YY[lr[87]], YY[lr[87]] += (YY[lr[102]] & lr[34]) > lr[12] ? lr[35] : lr[26]);
                do {
                  Br(YY[-lr[98]].push(YY[-lr[99]] & lr[10]), YY[-lr[99]] >>= lr[3], YY[lr[87]] -= lr[3])
                } while (YY[lr[87]] > lr[6]);
                YY[lr[102]] = -lr[0]
              } return YY[lr[102]] > -lr[0] && YY[-lr[98]].push((YY[-lr[99]] | YY[lr[102]] << YY[lr[87]]) & lr[10]), Tr(YY[-lr[98]])
        }

        function WY(...YY) {
          return YY[lr[11]] = lr[0], typeof ir[YY[lr[2]]] === lr[15] ? ir[YY[lr[2]]] = oY(yr[YY[lr[2]]]) : ir[YY[lr[2]]]
        }(lr[2], uY[lr[1]])("5 " + (DY ? (new Error)[WY(139)] : ""))
      }
    }, yY.g.subscribe("customBindingsChanged", (() => {
      Kr()
    }));
    let Hr = !1,
      zr = !1;
    const Zr = () => Hr || zr && HY.e.isInGame(),
      Cr = YY => {
        Zr() && YY.preventDefault()
      };
    yY.g.subscribe("displaymodeFullscreenChange", (YY => {
      fr()
    })), yY.g.subscribe("pointerLockUpdate", (YY => {
      Hr = YY, fr(), jr()
    })), yY.g.subscribe("freeCursorUpdate", (YY => {
      zr = YY, fr(), jr()
    }));
    const fr = () => {
        window.removeEventListener("wheel", Cr), zY.f && !(0, RY.s)() && (Hr || zr) && window.addEventListener("wheel", Cr, {
          passive: !1
        })
      },
      jr = () => {
        window.removeEventListener("wheel", hr), (Hr || zr) && window.addEventListener("wheel", hr, {
          passive: !1
        })
      },
      hr = YY => {
        !0 === YY.ctrlKey && Zr() && YY.preventDefault()
      };

    function dr(YY) {
      yY.g.vo("QTEMouseState", {
        isDown: YY
      })
    }

    function Jr(YY) {
      var rY, DY, AY, IY, RY, OY, gY, aY;
      const uY = (0, BY.e)();
      uY.o4 = null !== (rY = function(YY, rY) {
        var DY, FY;
        if (!Or) return null;
        const AY = YY.bloxd;
        Fr ??= AY.getMetaInfo("Board").rootId;
        const IY = null !== (DY = null === rY || void 0 === rY ? void 0 : rY.aG) && void 0 !== DY ? DY : null;
        if (!IY || AY.getMetaInfo(IY).rootId !== Fr) return null;
        const RY = null !== (FY = null === rY || void 0 === rY ? void 0 : rY.position) && void 0 !== FY ? FY : null;
        if (AY.playerCanChangePos(YY.yB, RY[0], RY[1], RY[2])) return null;
        const OY = (YY, rY, DY) => {
          const FY = AY.blockDataOwner.getBlockData(YY, rY, DY),
            IY = null === FY || void 0 === FY ? void 0 : FY.persisted.shared.text.split("\n")[0].toLowerCase().trim();
          return ZY.singleLineBoardActions.has(IY)
        };
        if (OY(RY[0], RY[1], RY[2])) return null;
        let gY;
        YY.K8 && (gY = [...YY.K8], YY.Qq(gY, gY));
        const aY = (gY ? YY.camera.XM : 0) + AY.getBlockReach(YY.yB);
        return YY.pickBlock(gY, YY.Z8, aY, ((rY, DY, FY, IY) => 0 !== rY && ("Board" !== AY.getMetaInfo(rY).rootName || AY.playerCanChangePos(YY.yB, DY, FY, IY) || OY(DY, FY, IY))))
      }(uY, uY.o4)) && void 0 !== rY ? rY : uY.o4;
      const iY = null !== (DY = null === (AY = uY.o4) || void 0 === AY ? void 0 : AY.position) && void 0 !== DY ? DY : null,
        QY = null !== (IY = uY.Z8) && void 0 !== IY ? IY : uY.camera.zq(),
        oY = BY.g.localPlayerPickActionHelper.getPickEntityResult(QY),
        WY = null !== (RY = uY.o4) && void 0 !== RY && RY.aG ? (0, dY.f)(uY.o4.aG) : "Air",
        EY = YY === sY.c.UpFirePrimary || YY === sY.c.UpFireSecondary,
        mY = EY ? "onPlayerClickUp" : "onPlayerClick",
        VY = EY ? YY === sY.c.UpFireSecondary : YY === sY.c.DownFireSecondary,
        SY = !EY && (0, FY.getWasDoubleClick)();
      yY.g.vo("mouseState", {
        sR: YY,
        isDown: !EY
      }), (0, FY.sendColyMessage)(vY.jh, {
        sR: YY,
        iR: SY,
        AR: iY,
        IR: oY
      }, !0), (0, BY.c)().client.triggerGameCallback(mY, uY.yB, VY, null !== (OY = null === iY || void 0 === iY ? void 0 : iY[0]) && void 0 !== OY ? OY : null, null !== (gY = null === iY || void 0 === iY ? void 0 : iY[1]) && void 0 !== gY ? gY : null, null !== (aY = null === iY || void 0 === iY ? void 0 : iY[2]) && void 0 !== aY ? aY : null, WY, oY)
    }
    window.addEventListener("keydown", (YY => {
      ["ArrowUp", "ArrowDown"].includes(YY.key) && YY.preventDefault()
    })), document.addEventListener("keydown", (YY => {
      (0, jY.e)(YY, (() => {
        const YY = (0, BY.e)();
        return (0, fY.H)(YY) || !1 !== YY.pE.canCustomiseChar
      }))
    }))
  },
  38445: (YY, rY, DY) => {
    DY.d(rY, {
      e: () => IY,
      h: () => RY
    });
    var FY = DY(37817);
    let AY = !1;

    function IY() {
      return AY
    }

    function RY(YY) {
      AY = YY, YY ? FY.e.setMultiplierType("emoteWheel", 0) : FY.e.removeMultiplier("emoteWheel")
    }
  },
  38449: (YY, rY, DY) => {
    function FY(YY) {
      return Boolean(YY.pE.useInventory && YY.pE.useFullInventory && YY.Am.hYY(YY.yB))
    }
    DY.d(rY, {
      e: () => FY
    })
  },
  38342: (YY, rY, DY) => {
    DY.d(rY, {
      e: () => IY,
      f: () => AY
    });
    var FY = DY(36894);

    function AY(YY, rY) {
      return {
        replayedClipName: YY,
        replayedClipAgeSeconds: rY
      }
    }

    function IY(YY, rY, DY, AY, IY) {
      const RY = function(YY) {
          if ("object" !== typeof YY || null === YY) return null;
          const {
            replayedClipName: rY,
            replayedClipAgeSeconds: DY
          } = YY;
          return "string" === typeof rY && "number" === typeof DY ? {
            PF: rY,
            UF: DY
          } : null
        }(DY),
        OY = null === RY ? DY : null,
        {
          PF: gY = null,
          UF: aY = 0
        } = null !== RY && void 0 !== RY ? RY : {};
      YY.animateEntity(rY, FY.d.Custom, OY, AY, IY, gY, aY)
    }
  },
  38363: (YY, rY, DY) => {
    DY.d(rY, {
      b: () => yY,
      f: () => vY,
      h: () => iY,
      i: () => sY,
      l: () => QY,
      p: () => uY
    });
    var FY = DY(38367),
      AY = DY(36495),
      IY = DY(3289),
      RY = DY(1816),
      OY = DY(25),
      gY = DY(2501);
    const aY = new FY.b;

    function vY() {
      return aY
    }

    function uY() {
      aY.clear()
    }

    function sY() {
      for (const YY of aY.ids()) {
        const rY = aY.getName(YY);
        void 0 !== rY && RY.e.delete(rY)
      }
      uY(), OY.g.vo("playerRosterChanged", aY.ids())
    }

    function iY(YY, rY) {
      var DY, FY;
      if (aY.has(YY)) return aY.getSetting(YY, rY);
      const AY = (0, gY.e)();
      return null === (DY = AY.uB[AY.yB]) || void 0 === DY || null === (FY = DY[YY]) || void 0 === FY ? void 0 : FY[rY]
    }

    function yY(YY) {
      const {
        added: rY,
        removed: DY,
        settingChanges: FY
      } = aY.apply(YY);
      for (const {
          playerId: AY,
          name: IY
        }
        of DY) void 0 === IY || oY(AY) || RY.e.delete(IY);
      for (const {
          playerId: IY,
          settings: RY
        }
        of FY)
        if (oY(IY)) QY(IY, RY);
        else
          for (const YY in RY)(0, AY.l)(IY, YY, RY[YY]);
      (rY.length > 0 || DY.length > 0) && OY.g.vo("playerRosterChanged", aY.ids())
    }

    function QY(YY) {
      let rY = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : aY.getSettings(YY);
      if (rY) {
        (0, AY.h)(YY);
        for (const DY in rY)(0, AY.e)(YY, DY, rY[DY])
      }
    }

    function oY(YY) {
      return YY === (0, gY.e)().W8 || (0, gY.c)().client.hasEntity(YY)
    }(0, IY.onGameReset)(uY)
  },
  37490: (YY, rY, DY) => {
    DY.d(rY, {
      d: () => BY,
      e: () => lY,
      g: () => eY,
      i: () => NY,
      l: () => cY
    });
    var FY = DY(36518),
      AY = DY(37493),
      IY = DY(358),
      RY = DY.n(IY),
      OY = DY(2963);
    const gY = new FY.xy,
      aY = new FY.xy,
      vY = new FY.xy,
      uY = new FY.xy,
      sY = new FY.xy,
      iY = [0, 0, 0],
      yY = {
        x: 0,
        y: 0
      },
      QY = new FY.xy(1, 0, 0),
      oY = new FY.xy(0, 1, 0),
      WY = FY.Matrix.Identity(),
      EY = new FY.Matrix,
      mY = new FY.Matrix,
      VY = new FY.xy,
      SY = new AY.b(0, 0, 0, 0);

    function lY(YY, rY) {
      var DY, AY;
      const IY = TY(YY, rY);
      if (IY) {
        const YY = IY.x,
          rY = IY.y,
          DY = YY - 50,
          FY = rY - 50;
        return Math.abs(DY) <= OY.c && Math.abs(FY) <= (0, OY.h)() ? {
          x: YY,
          y: rY
        } : HY(DY, FY)
      }
      vY.p_(rY[0], rY[1], rY[2]),
        function(YY) {
          const rY = YY.sQ.prY(),
            DY = rY ? FY.Matrix.FromArrayToRef(rY.worldMatrix, 0, mY) : YY.sQ.hT().activeCamera.getWorldMatrix();
          FY.xy.TransformNormalToRef(QY, DY, uY), uY.normalize(), FY.xy.TransformNormalToRef(oY, DY, sY), sY.normalize()
        }(YY);
      const RY = FY.xy.Dot(vY, uY);
      let gY = -FY.xy.Dot(vY, sY);
      Math.abs(RY) < .001 && Math.abs(gY) < .001 && (gY = -1);
      const aY = null !== (DY = null === (AY = YY.sQ.prY()) || void 0 === AY ? void 0 : AY.projectionMatrix) && void 0 !== DY ? DY : YY.sQ.hT().activeCamera.getProjectionMatrix().m;
      return HY(RY * aY[0], gY * aY[5])
    }

    function TY(YY, rY) {
      const DY = YY.sQ.hT(),
        AY = DY.ky(),
        IY = AY.getRenderWidth(),
        RY = AY.getRenderHeight();
      SY.width = IY, SY.height = RY;
      const OY = YY.sQ.prY(),
        vY = OY ? VY.p_(OY.eye[0], OY.eye[1], OY.eye[2]) : YY.sQ.camera.globalPosition;
      gY.p_(vY.x + 10 * rY[0], vY.y + 10 * rY[1], vY.z + 10 * rY[2]);
      const uY = OY ? FY.Matrix.FromArrayToRef(OY.viewProjectionMatrix, 0, EY) : DY.getTransformMatrix();
      return FY.xy.ProjectToRef(gY, WY, uY, SY, aY), aY.z < 0 || aY.z > 1 ? null : (yY.x = aY.x / IY * 100, yY.y = aY.y / RY * 100, yY)
    }

    function eY(YY, rY) {
      return lY(YY, KY(YY, rY))
    }

    function NY(YY, rY) {
      const DY = TY(YY, KY(YY, rY));
      return DY && {
        x: DY.x,
        y: DY.y
      }
    }

    function BY(YY) {
      var rY, DY;
      return 1 / (null !== (rY = null === (DY = YY.sQ.prY()) || void 0 === DY ? void 0 : DY.projectionMatrix[0]) && void 0 !== rY ? rY : YY.sQ.hT().activeCamera.getProjectionMatrix().m[0])
    }

    function cY(YY, rY, DY) {
      const FY = YY.sQ.prY(),
        AY = FY ? FY.worldMatrix : YY.sQ.hT().activeCamera.getWorldMatrix().m,
        IY = YY.os;
      for (let RY = 0; RY < 3; RY++) rY[RY] = AY[12 + RY] + IY[RY], DY[RY] = AY[8 + RY];
      RY().normalize(DY, DY)
    }

    function KY(YY, rY) {
      const DY = YY.os,
        FY = YY.sQ.prY(),
        AY = FY ? VY.p_(FY.eye[0], FY.eye[1], FY.eye[2]) : YY.sQ.camera.globalPosition;
      return iY[0] = rY[0] - DY[0] - AY.x, iY[1] = rY[1] - DY[1] - AY.y, iY[2] = rY[2] - DY[2] - AY.z, RY().normalize(iY, iY), iY
    }

    function HY(YY, rY) {
      return (0, OY.d)(YY, rY, OY.c, (0, OY.h)())
    }
  },
  38405: (YY, rY, DY) => {
    DY.d(rY, {
      c: () => OY
    });
    var FY = DY(25),
      AY = DY(1287),
      IY = DY(3036);
    const RY = "Reconnecting";
    class OY {
      constructor(YY) {
        this.hooks = YY, this.graceMs = 0, this.sessionBased = !1, this.controller = void 0, this.frozen = !1, this.stopped = !1, this.listening = !1, this.ended = !1, this.retryNow = () => {
          "visible" === document.visibilityState && this.controller.retryNow()
        }, this.onPageHide = YY => {
          YY.persisted || this.leave()
        }, this.controller = new IY.e((rY => YY.reconnect(rY)), {
          isSessionLive: () => !this.ended && YY.isLive(),
          onPhaseChanged: YY => {
            this.onPhaseChanged(YY)
          },
          onReconnected: rY => {
            YY.onReconnected(rY)
          },
          onGaveUp: rY => {
            !this.ended && YY.isLive() && YY.onGaveUp(this.sessionBased, rY)
          }
        })
      }
      onInitialInfo(YY, rY) {
        this.graceMs = YY, this.sessionBased = rY
      }
      canHoldSeat() {
        return this.graceMs > 0 && !this.ended
      }
      isResuming() {
        return "connected" !== this.controller.phase
      }
      onConnectionLost(YY) {
        this.ended || this.controller.onConnectionLost(YY, this.graceMs)
      }
      onResuming() {
        this.ended || this.controller.onResuming()
      }
      onResumed() {
        this.controller.stop()
      }
      leave() {
        const YY = this.isResuming() && !this.controller.awaitingResumeOnRoom,
          rY = this.controller.heldToken;
        this.end(), YY && "" !== rY && this.hooks.releaseSeat(rY)
      }
      end() {
        this.ended = !0, this.controller.stop()
      }
      onPhaseChanged(YY) {
        const rY = "frozen" === YY || "resuming" === YY;
        rY !== this.stopped && (this.stopped = rY, this.hooks.freeze(rY));
        const DY = "frozen" === YY || "resuming" === YY && this.frozen;
        DY && !this.frozen ? (0, AY.k)(RY) : !DY && this.frozen && (0, AY.j)(RY), this.frozen = DY, this.setListening("connected" !== YY), FY.g.vo(IY.l, DY ? "frozen" : YY)
      }
      setListening(YY) {
        YY !== this.listening && (this.listening = YY, YY ? (window.addEventListener("online", this.retryNow), document.addEventListener("visibilitychange", this.retryNow), window.addEventListener("pagehide", this.onPageHide)) : (window.removeEventListener("online", this.retryNow), document.removeEventListener("visibilitychange", this.retryNow), window.removeEventListener("pagehide", this.onPageHide)))
      }
    }
  },
  38410: (YY, rY, DY) => {
    DY.d(rY, {
      b: () => FY
    });
    class FY {
      constructor(YY) {
        let rY = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Date.now;
        this.onSilent = YY, this.now = rY, this.lastHeardAt = void 0, this.resumedAt = void 0, this.lastCheckAt = void 0, this.wasVisible = "visible" === document.visibilityState, this.interval = void 0, this.check = () => {
          const YY = this.now(),
            rY = YY - this.lastCheckAt <= 2e3;
          this.lastCheckAt = YY;
          const DY = "visible" === document.visibilityState;
          !DY || rY && this.wasVisible || (this.resumedAt = YY), this.wasVisible = DY, DY && YY - this.lastHeardAt > 12e3 && YY - this.resumedAt > 2e3 && this.onSilent()
        }, this.lastHeardAt = rY(), this.resumedAt = this.lastHeardAt, this.lastCheckAt = this.lastHeardAt, this.interval = setInterval(this.check, 1e3), document.addEventListener("visibilitychange", this.check), window.addEventListener("online", this.check)
      }
      heard() {
        this.lastHeardAt = this.now()
      }
      dispose() {
        clearInterval(this.interval), document.removeEventListener("visibilitychange", this.check), window.removeEventListener("online", this.check)
      }
    }
  },
  38384: (YY, rY, DY) => {
    DY.d(rY, {
      c: () => sY
    });
    var FY = DY(213),
      AY = DY(358),
      IY = DY.n(AY),
      RY = DY(36149),
      OY = DY(36151),
      gY = DY(2501);
    const aY = FY.d.jW * FY.d.playerEyeToHeightRatio,
      vY = 250,
      uY = 1.1,
      sY = new class {
        constructor() {
          this.entities = new Map, this.playing = new Map, this.msSinceLastScan = 0
        }
        add(YY, rY) {
          this.entities.set(YY, rY)
        }
        update(YY, rY) {
          const DY = this.entities.get(YY);
          this.entities.set(YY, rY);
          const FY = this.playing.get(YY);
          FY && (DY && DY.soundName === rY.soundName ? (FY.sound.setRelativeVolume(rY.volume), FY.sound.rate(rY.rate), FY.sound.setPannerAttr({
            refDistance: rY.refDistance
          })) : this.stopEntity(YY))
        }
        remove(YY) {
          this.stopEntity(YY), this.entities.delete(YY)
        }
        Zu(YY) {
          this.msSinceLastScan += YY, this.msSinceLastScan < vY || (this.msSinceLastScan = 0, this.scan())
        }
        stopEntity(YY) {
          const rY = this.playing.get(YY);
          rY && (rY.sound.stop(), this.playing.delete(YY))
        }
        startEntity(YY, rY, DY) {
          const FY = (0, OY.d)(rY.soundName);
          if (!FY) return console.error(`AudioEntityManager: no sound found for "${rY.soundName}", dropping audio entity ${YY}`), void this.remove(YY);
          const AY = RY.b.play(FY, rY.volume, DY, rY.maxHearDist, rY.refDistance, !0);
          AY.rate(rY.rate), this.playing.set(YY, {
            sound: AY,
            lastPos: IY().clone(DY)
          })
        }
        scan() {
          const YY = (0, gY.e)();
          if (!YY) return;
          const rY = YY.Am.lE(YY.yB);
          if (rY)
            for (const [DY, FY] of this.entities) {
              if (!YY.Am.t5(DY, "position")) continue;
              const AY = YY.Am.lE(DY),
                RY = IY().sqrDist(rY, AY),
                OY = this.playing.get(DY);
              if (OY) {
                const YY = FY.maxHearDist * uY;
                RY > YY * YY ? this.stopEntity(DY) : IY().equals(AY, OY.lastPos) || (OY.sound.setPosition([AY[0], AY[1] + aY, AY[2]]), IY().copy(OY.lastPos, AY))
              } else RY <= FY.maxHearDist * FY.maxHearDist && this.startEntity(DY, FY, AY)
            }
        }
      }
  },
  38420: (YY, rY, DY) => {
    DY.d(rY, {
      c: () => aY,
      g: () => vY
    });
    var FY = DY(1683),
      AY = DY(213),
      IY = DY(1665),
      RY = DY(1735),
      OY = DY(1222),
      gY = DY(1159);
    async function aY(YY, rY) {
      return function(YY) {
        return "object" === typeof YY && null !== YY && YY.code === AY.c.VpnIp.code
      }(rY) && function(YY) {
        return IY.e.supports("appCheck") && YY.isLoggedIn() && !YY.hasTriedAppAttestation()
      }(YY) && await async function(YY) {
        try {
          const {
            token: rY
          } = await (0, RY.c)(), {
            "3PSIDMCPP": DY
          } = await (0, gY.postJsonWithMetricsCookiesAndJsonResponse)(`${OY.clientSideServerUrls.indexUrl}/index/app-attestation`, {
            appCheckToken: rY
          }, {
            retries: 0
          }, YY.getMetricsCookies());
          return YY.setAppAttestedAuthJwt(DY), !0
        } catch (rY) {
          return rY instanceof FY.e && "failed" === rY.code ? (console.warn("The app couldn't get an App Check token:", rY), YY.markAppAttestationTried()) : console.error("Failed to attest the app:", rY), !1
        }
      }(YY)
    }
    async function vY(YY, rY) {
      try {
        return await rY()
      } catch (DY) {
        if (!await aY(YY, DY)) throw DY
      }
      return rY()
    }
  },
  38418: (YY, rY, DY) => {
    DY.d(rY, {
      d: () => uY,
      f: () => aY
    });
    var FY = DY(213),
      AY = DY(4227),
      IY = DY(3258);
    const RY = [250, 500, 1e3, 2e3, 1250],
      OY = 406;

    function gY(YY) {
      if ("object" !== typeof YY || null === YY) return !1;
      const {
        code: rY,
        message: DY
      } = YY, AY = FY.c.duplicateLobbyNameError;
      return (rY === AY.code || rY === OY) && (DY === AY.text || DY === AY.text + FY.h)
    }
    async function aY(YY, rY) {
      let DY = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : AY.c;
      for (let AY = 0;; AY++) {
        let OY;
        (0, IY.q)(rY);
        try {
          return await YY()
        } catch (FY) {
          if (OY = RY[AY], void 0 === OY || !gY(FY)) throw FY
        }
        await DY(OY, rY)
      }
    }
    const vY = new Set([FY.c.duplicateLobbyNameError.code, FY.c.lobbyCantBeCreated.code, FY.c.roomDisposedEarlyError.code, FY.c.roomDisposedLateError.code, FY.c.serverRoomLimitReached.code]);

    function uY(YY) {
      if (gY(YY)) return !0;
      const rY = "object" === typeof YY && null !== YY ? YY.code : void 0;
      return "number" === typeof rY && vY.has(rY)
    }
  },
  38353: (YY, rY, DY) => {
    DY.d(rY, {
      b: () => IY,
      d: () => AY
    });
    var FY = DY(25);

    function AY(YY) {
      return "refetchCode" === YY || "devDownloadJson" === YY || YY.startsWith("Plugin")
    }

    function IY(YY, rY) {
      "refetchCode" !== YY ? "Plugin|MobAiPlugin|ShowPetUi" !== YY ? Promise.all([DY.e(106), DY.e(107), DY.e(102), DY.e(104), DY.e(205)]).then((() => DY(40802))).then((DY => {
        let {
          runClientGameMessage: FY
        } = DY;
        FY(YY, rY)
      })).catch((rY => {
        console.error(`Game message ${YY} failed`, rY)
      })) : FY.g.vo("showPetUi", rY) : FY.g.vo("refetchCode")
    }
  },
  38427: (YY, rY, DY) => {
    DY.d(rY, {
      b: () => FY,
      e: () => AY
    });
    const FY = 45e3;
    class AY extends Error {
      constructor() {
        super("The game server didn't answer in time"), this.name = "SeatRequestTimedOut"
      }
    }
  },
  38344: (YY, rY, DY) => {
    DY.d(rY, {
      e: () => vY
    });
    var FY = DY(1231),
      AY = DY(1330),
      IY = DY(19),
      RY = DY(1314),
      OY = DY(1322),
      gY = DY(1488),
      aY = DY(35903);

    function vY(YY) {
      let {
        AD: rY,
        RD: DY
      } = YY;
      const vY = null !== rY && void 0 !== rY ? rY : (0, OY.b)().gameNameWithVariation;
      (0, FY.O)(vY) && ((0, aY.f)(), (0, RY.W)((() => {
        console.log("Received matchmaking order from game server to game", rY), (0, IY.g)("inGameReplay"), (0, gY.navigatePreserveSearch)((0, AY.d)(vY, null !== DY && void 0 !== DY ? DY : void 0))
      }), "video_start"))
    }
  },
  38336: (YY, rY, DY) => {
    DY.d(rY, {
      e: () => gY,
      g: () => RY,
      i: () => OY,
      j: () => aY
    });
    var FY = DY(25),
      AY = DY(1346);
    const IY = new Map;

    function RY(YY, rY) {
      FY.g.vo("newUiRequest", {
        id: YY,
        clientParameters: rY
      }, !0)
    }

    function OY(YY) {
      FY.g.vo("removeUiRequest", YY, !0);
      const rY = IY.get(YY);
      rY && (rY.tearDownNotification(), IY.delete(YY))
    }

    function gY() {
      FY.g.vo("clearUiRequests");
      for (const YY of IY.values()) YY.tearDownNotification();
      IY.clear()
    }

    function aY(YY, rY, DY) {
      const FY = AY.NotificationProvider.showPromptPopup({
        title: rY,
        confirmText: "general:yes",
        cancelText: "general:no",
        unlockPointerKey: "uiRequestPopup"
      });
      IY.set(YY, FY), FY.getResult().then((rY => {
        IY.delete(YY), "notificationTornDown" !== rY && DY(rY)
      }))
    }
  },
  38356: (YY, rY, DY) => {
    DY.d(rY, {
      e: () => OY,
      i: () => gY,
      m: () => aY
    });
    var FY = DY(1231),
      AY = DY(1057),
      IY = DY(36244),
      RY = DY(25);

    function OY(YY) {
      let {
        lobbyName: rY,
        gameNameWithVariation: DY
      } = YY;
      return !(0, FY.P)(rY) || null !== DY && (DY.startsWith("testGym") || (0, AY.l)(DY))
    }

    function gY(YY) {
      return YY.br === IY.c.Leave || YY.br === IY.c.Cursor
    }

    function aY(YY) {
      RY.g.vo("codeCollab", {
        type: YY.br,
        docKey: YY.Xr,
        version: YY.qr,
        editorCount: YY.kr,
        peers: YY.Gr,
        updates: YY.nr,
        playerId: YY.Pr,
        playerName: YY.Ur,
        colour: YY.Lr,
        anchor: YY.tr,
        head: YY.YD,
        existingCursors: YY.rD,
        files: YY.DD,
        engineSettings: YY.FD
      })
    }
  },
  38367: (YY, rY, DY) => {
    DY.d(rY, {
      b: () => FY
    });
    class FY {
      constructor() {
        this.members = new Map
      }
      apply(YY) {
        const rY = {
          added: [],
          removed: [],
          settingChanges: []
        };
        for (const FY of YY.jr) {
          let YY = this.members.get(FY.hr);
          if (YY || (YY = {
              name: null,
              settings: {}
            }, this.members.set(FY.hr, YY), rY.added.push(FY.hr)), null !== FY.dr && (YY.name = FY.dr), null !== FY.Jr || FY.Mr.length > 0) {
            const DY = null === FY.Jr ? {} : JSON.parse(FY.Jr);
            Object.assign(YY.settings, DY);
            for (const rY of FY.Mr) delete YY.settings[rY], DY[rY] = void 0;
            rY.settingChanges.push({
              playerId: FY.hr,
              settings: DY
            })
          }
        }
        for (const FY of YY.wr) {
          const YY = this.members.get(FY);
          var DY;
          if (YY) this.members.delete(FY), rY.removed.push({
            playerId: FY,
            name: null !== (DY = YY.name) && void 0 !== DY ? DY : void 0
          })
        }
        return rY
      }
      has(YY) {
        return this.members.has(YY)
      }
      ids() {
        return [...this.members.keys()]
      }
      getName(YY) {
        var rY, DY;
        return null !== (rY = null === (DY = this.members.get(YY)) || void 0 === DY ? void 0 : DY.name) && void 0 !== rY ? rY : void 0
      }
      getSettings(YY) {
        var rY;
        return null === (rY = this.members.get(YY)) || void 0 === rY ? void 0 : rY.settings
      }
      getSetting(YY, rY) {
        var DY;
        return null === (DY = this.members.get(YY)) || void 0 === DY ? void 0 : DY.settings[rY]
      }
      clear() {
        this.members.clear()
      }
    }
  },
  38400: (YY, rY, DY) => {
    DY.d(rY, {
      c: () => FY,
      d: () => AY
    });
    const FY = ["description", "label"];

    function AY(YY) {
      const rY = YY.type;
      return {
        type: rY,
        params: YY[rY]
      }
    }
  }
};
Object.freeze(modules);
for (const YY in modules) Object.freeze(modules[YY]);