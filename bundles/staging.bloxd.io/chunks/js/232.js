export const id = 232;
export const ids = [232];
export const modules = {
  38044: (TT, oT, IT) => {
    IT.d(oT, {
      e: () => kT,
      i: () => WT
    });
    var iT = IT(16);
    let zT = !1;

    function kT() {
      return zT
    }

    function WT(TT) {
      zT !== TT && (zT = TT, iT.h.XM("replayViewer|videoExportChanged"))
    }
  },
  37935: (TT, oT, IT) => {
    IT.d(oT, {
      b: () => kT
    });
    var iT = IT(16),
      zT = IT(1770);

    function kT(TT) {
      let {
        taskId: oT,
        progress: IT
      } = TT;
      const iT = zT.e.get("_tasks");
      null !== iT && void 0 !== iT && iT[oT] && zT.e.apply({
        _tasks: {
          ...iT,
          [oT]: {
            ...iT[oT],
            progress: IT
          }
        }
      })
    }
    iT.h.subscribe("clientTaskProgress", (TT => {
      kT(TT)
    }))
  },
  38061: (TT, oT, IT) => {
    IT.d(oT, {
      b: () => KT,
      d: () => MT,
      e: () => cT
    });
    var iT = IT(2541);
    const zT = 0,
      kT = 2,
      WT = 3,
      XT = 4;
    class BT {
      constructor(TT, oT) {
        this.width = TT, this.fD = oT, this.data = void 0, this.next = 0, this.size = 0, this.data = new Float64Array(TT * oT)
      }
      push(TT) {
        let oT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        const IT = this.data.subarray(this.next * this.width, (this.next + 1) * this.width);
        for (let iT = 0; iT < this.width; iT++) IT[iT] = TT[oT + iT];
        return this.next = (this.next + 1) % this.fD, this.size = Math.min(this.size + 1, this.fD), IT
      }
      lines() {
        const TT = [],
          oT = (this.next - this.size + this.fD) % this.fD;
        for (let IT = 0; IT < this.size; IT++) {
          const iT = (oT + IT) % this.fD * this.width;
          TT.push(Array.from(this.data.subarray(iT, iT + this.width)).join(","))
        }
        return TT
      }
    }

    function FT(TT) {
      return Number.isFinite(TT) ? String(Math.round(10 * TT) / 10) : String(TT)
    }

    function ST(TT) {
      return Number.isFinite(TT) ? TT.toFixed(1) : String(TT)
    }
    class DT {
      constructor() {
        this.frames = 0, this.looked = 0, this.idle = 0, this.zq = 0, this.pastLimit = 0, this.lockSkips = 0, this.xM = 0, this.lost = 0, this.dropped = 0, this.longFrames = 0, this.dtMin = 1 / 0, this.dtMax = 0, this.dtSum = 0, this.raw = [0, 0], this.turned = [0, 0], this.peakRate = 0, this.events = 0, this.eventMax = 0, this.bigEvents = 0, this.outliers = 0, this.eventLines = 0, this.suppressed = 0
      }
    }
    class LT {
      constructor() {
        var TT = this;
        this.tally = new DT, this.records = new BT(10, 3600), this.events = new BT(4, 12e3), this.event = new Float64Array(4), this.take = null, this.client = "js", this.started = !1, this.record = function(oT) {
          let IT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
          const [iT, BT, DT, LT, xT, cT, KT, MT, rT, AT] = TT.records.push(oT, IT), gT = TT.tally;
          switch (gT.frames++, KT) {
            case zT:
              return void gT.idle++;
            case XT:
              return void gT.xM++;
            case WT:
              return gT.lockSkips++, void(0 === DT && 0 === LT || TT.outlier(`lock skip dropped raw (${FT(DT)}, ${FT(LT)}) at ${ST(iT)} ms`))
          }
          gT.looked++, Number.isFinite(BT) && (gT.dtMin = Math.min(gT.dtMin, BT), gT.dtMax = Math.max(gT.dtMax, BT), gT.dtSum += BT, BT > 0 && (gT.peakRate = Math.max(gT.peakRate, Math.hypot(xT, cT) / BT))), gT.raw[0] += DT, gT.raw[1] += LT, gT.turned[0] += xT, gT.turned[1] += cT;
          const hT = Math.abs(DT) > AT || Math.abs(LT) > AT,
            wT = `raw (${FT(DT)}, ${FT(LT)}) over ${ST(BT)} ms, limit ${FT(AT)}, filter v (${MT.toFixed(3)}, ${rT.toFixed(3)}) px/ms, at ${ST(iT)} ms`;
          KT === kT ? (gT.zq++, TT.outlier(`spike put right: ${wT} -> turned (${FT(xT)}, ${FT(cT)})`)) : hT ? (gT.pastLimit++, TT.outlier(`kept past limit: ${wT}`)) : BT > 50 && (gT.longFrames++, TT.outlier(`long frame: ${wT}, turned in full`))
        }, this.onMouseMove = TT => {
          const oT = this.tally,
            {
              movementX: IT,
              movementY: iT
            } = TT;
          oT.events++;
          const zT = Math.max(Math.abs(IT), Math.abs(iT));
          oT.eventMax = Math.max(oT.eventMax, zT);
          const kT = null !== document.pointerLockElement,
            WT = this.event;
          WT[0] = TT.timeStamp, WT[1] = IT, WT[2] = iT, WT[3] = kT ? 1 : 0, this.events.push(WT), zT >= 200 && (oT.bigEvents++, this.eventOutlier(`big mousemove (${IT}, ${iT}) at ${ST(TT.timeStamp)} ms, lock ${kT?"kS":"free"}`))
        }, this.onLockChange = () => {
          const TT = document.pointerLockElement;
          (0, iT.l)("look", `pointer lock ${TT?`gained (${TT.tagName.toLowerCase()})`:"lost"} at ${ST(performance.now())} ms`)
        }, this.onLockError = () => {
          (0, iT.l)("look", `pointer lock request failed at ${ST(performance.now())} ms`)
        }, this.onVisibility = () => {
          (0, iT.l)("look", `page ${document.visibilityState} at ${ST(performance.now())} ms`)
        }, this.flush = () => {
          this.takeRecords();
          const TT = this.tally;
          if (this.tally = new DT, 0 === TT.events && 0 === TT.raw[0] && 0 === TT.raw[1] && 0 === TT.lockSkips && 0 === TT.zq && 0 === TT.dropped) return;
          const oT = TT.looked > 0 ? TT.dtSum / TT.looked : NaN,
            IT = [`${TT.frames} frames (${TT.looked} looked, ${TT.idle} idle${"wasm"===this.client?`, ${TT.xM} carried`:""})`, `dt avg ${ST(oT)} min ${ST(TT.dtMin)} max ${ST(TT.dtMax)}, ${TT.longFrames} long`, `${TT.events} mousemoves (max ${FT(TT.eventMax)} px, ${TT.bigEvents} big)`, `raw (${FT(TT.raw[0])}, ${FT(TT.raw[1])}) turned (${FT(TT.turned[0])}, ${FT(TT.turned[1])})`, `peak ${TT.peakRate.toFixed(2)} px/ms`, `put right ${TT.zq}, past limit ${TT.pastLimit}, lock skips ${TT.lockSkips}`, "lock " + (document.pointerLockElement ? "kS" : "free")];
          TT.dropped > 0 && IT.push(`${TT.dropped} doubled spike copies dropped`), TT.lost > 0 && IT.push(`${TT.lost} records lost`), TT.suppressed > 0 && IT.push(`${TT.suppressed} outlier lines not shown`), (0, iT.l)("look", `1s: ${IT.join("; ")}`)
        }, this.dump = () => [`look records (${this.client}): nowMs,dtMs,rawX,rawY,turnedX,turnedY,outcome,vX,vY,limit`, ...this.records.lines(), "mousemove events: timeStamp,movementX,movementY,locked", ...this.events.lines()].join("\n")
      }
      start(TT, oT) {
        this.client = TT, this.take = oT;
        const {
          screen: IT
        } = window;
        (0, iT.l)("look", `start: ${TT} client, dpr ${window.devicePixelRatio}, screen ${IT.width}x${IT.height}, pointer lock ${document.pointerLockElement?"kS":"free"}`), this.started || (this.started = !0, window.addEventListener("mousemove", this.onMouseMove, {
          capture: !0,
          passive: !0
        }), document.addEventListener("pointerlockchange", this.onLockChange), document.addEventListener("pointerlockerror", this.onLockError), document.addEventListener("visibilitychange", this.onVisibility), setInterval(this.flush, 1e3), (0, iT.j)("look", this.dump))
      }
      outlier(TT) {
        const oT = this.tally;
        oT.outliers >= 20 ? oT.suppressed++ : (oT.outliers++, (0, iT.l)("look", TT))
      }
      eventOutlier(TT) {
        const oT = this.tally;
        oT.eventLines >= 10 ? oT.suppressed++ : (oT.eventLines++, (0, iT.l)("look", TT))
      }
      takeRecords() {
        var TT;
        const oT = null === (TT = this.take) || void 0 === TT ? void 0 : TT.call(this);
        if (oT && oT.length >= 2) {
          this.tally.lost += oT[0], this.tally.dropped += oT[1];
          for (let TT = 2; TT + 10 <= oT.length; TT += 10) this.record(oT, TT)
        }
      }
      droppedCopy() {
        this.tally.dropped++
      }
      endTake() {
        this.takeRecords(), this.take = null
      }
    }
    let xT = null;

    function cT(TT) {
      let oT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
      return xT ??= new LT, xT.start(TT, oT), xT.record
    }

    function KT() {
      var TT;
      null === (TT = xT) || void 0 === TT || TT.endTake()
    }

    function MT() {
      var TT;
      null === (TT = xT) || void 0 === TT || TT.droppedCopy()
    }
  },
  37933: (TT, oT, IT) => {
    IT.d(oT, {
      d: () => Zo,
      e: () => no,
      f: () => qo
    });
    var iT = IT(3251),
      zT = IT(159),
      kT = IT(193),
      WT = IT(623),
      XT = IT(26),
      BT = IT(2465),
      FT = IT(3330),
      ST = IT(3316),
      DT = IT(1193);
    const LT = new WeakMap;
    class xT {
      constructor(TT, oT) {
        let IT = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {
          mFT: !0
        };
        this.callbacks = oT, this.options = IT, this.iIT = void 0, this.sessionId = void 0, this.Av = [], this.eFT = !1, this.Ec = !1, this.RFT = void 0, this.Dv = 0, this.WzT = 0, this.uFT = (TT, oT) => {
          if (this.Ec) return;
          const IT = Number(TT);
          this.eFT ? this.vFT(IT, oT) : this.Av.push({
            id: IT,
            payload: oT
          })
        }, this.dispose = () => {
          this.Ec || (this.Ec = !0, LT.delete(this), this.Av.length = 0, this.RFT())
        }, this.iIT = TT, this.sessionId = TT.sessionId, LT.set(this, []), this.RFT = this.EFT()
      }
      fFT(TT) {
        this.RFT(), this.iIT = TT, this.sessionId = TT.sessionId, this.Dv = 0, this.WzT = 0, this.RFT = this.EFT()
      }
      get Tv() {
        return this.WzT
      }
      EFT() {
        const TT = this.iIT.Am("*", this.uFT);
        return this.options.mFT && this.iIT.Rm(this.dispose), TT
      }
      vFT(TT, oT) {
        try {
          (0, FT.gc)(TT) && (oT = (0, FT.d)(TT, ST.vc.from(oT)));
          const IT = LT.get(this)[TT];
          if ("function" !== typeof IT) {
            if (this.callbacks.CFT) return void this.callbacks.CFT(TT, oT);
            throw new Error(`No onMessage handler registered for message id ${TT}`)
          }
          IT(oT)
        } catch (IT) {
          this.callbacks.jFT(`Error in onMessage ${TT} with payload ${JSON.stringify(oT)}`, IT)
        } finally {
          this.Dv++
        }
      }
      JFT() {
        for (const {
            id: TT,
            payload: oT
          }
          of this.Av) {
          if (this.Ec) break;
          this.vFT(TT, oT)
        }
        this.Av.length = 0
      }
      IIT() {
        return this.Ec
      }
      UFT() {
        if (this.eFT || this.Ec) throw new Error("Trying to getOnMessageRegistrationHandler after registration finished");
        return {
          Am: (TT, oT) => {
            if (this.eFT || this.Ec) throw new Error("Trying to call onMessage after registration finished");
            this.Am(TT, oT)
          },
          finishRegistration: () => {
            if (this.Ec) throw new Error("Cannot finish message registration after disposal");
            this.eFT = !0, this.JFT()
          }
        }
      }
      Am(TT, oT) {
        var IT, iT;
        null === (IT = (iT = this.callbacks).aFT) || void 0 === IT || IT.call(iT);
        const zT = LT.get(this);
        for (; TT > zT.length;) zT[zT.length] = null;
        zT[TT] = oT
      }
      send(TT, oT) {
        this.YFT(), (0, DT.D)(oT) ? this.iIT.XE(TT, oT) : this.iIT.send(TT, oT)
      }
      YFT() {
        var TT, oT;
        (this.WzT++, 5 === cT++) && (null === (TT = (oT = this.callbacks).aFT) || void 0 === TT || TT.call(oT), cT = 0)
      }
      hA() {
        this.dispose(), this.iIT.hA()
      }
      leave() {
        this.dispose(), this.iIT.leave()
      }
    }
    let cT = 0;
    var KT = IT(3270);
    class MT extends xT {
      constructor(TT) {
        super(TT, {
          aFT: () => {
            (0, XT.j)(!0) && (0, iT.Yu)()
          },
          jFT: (TT, oT) => {
            var IT;
            null === (IT = (0, BT.i)()) || void 0 === IT || IT.CK(TT, oT)
          }
        }, {
          mFT: !1
        }), (0, KT.f)(TT)
      }
      Qv(TT, oT) {
        return !!(0, KT.i)((0, KT.b)(), this.iIT, TT, oT) && (this.YFT(), !0)
      }
      fFT(TT) {
        this.QFT(), super.fFT(TT), (0, KT.f)(TT)
      }
      hA() {
        super.hA(), this.QFT()
      }
      QFT() {
        this.iIT.JA.Lc.YC = void 0
      }
    }
    var rT = IT(16),
      AT = IT(1770),
      gT = IT(1665),
      hT = IT(35465);

    function wT(TT, oT, IT, iT, zT) {
      let kT = arguments.length > 5 && void 0 !== arguments[5] && arguments[5];
      if (!TT.qm.ooT(TT.ZJ)) return console.log("Got resync inven but don't have inven component"), void oT.acknowledge(iT);
      kT && console.error("Had to sync inven"), oT.F_(iT, zT) && IT.XM("chestToggleFromServer", !1, !0), IT.XM("syncedInvenFromServer")
    }
    var mT = IT(37935),
      eT = IT(37938),
      RT = IT(36991),
      uT = IT(36753),
      vT = IT(618),
      ET = IT(37383);

    function fT(TT, oT, IT) {
      const iT = function(TT) {
          const oT = new Int32Array(TT.length * ET.e);
          return TT.forEach(((TT, IT) => {
            const iT = IT * ET.e;
            if (4 === TT.length) {
              const [IT, zT, kT, WT] = TT;
              oT.set([IT, zT, kT, IT, zT, kT, WT], iT)
            } else {
              const [IT, zT, kT, WT, XT, BT, FT] = TT;
              oT.set([IT, kT, XT, zT, WT, BT, FT], iT)
            }
          })), oT
        }(IT),
        zT = (oT, IT, iT, zT) => {
          TT.setBlockNoMulti(oT, IT, iT, zT, !0)
        };
      TT.client.gameRecorder.isCapturing() ? (0, ET.sb)(iT, (0, ET.qb)(iT), zT) : TT.FL.iL.YH(iT, {
        lH: zT,
        isHookId: oT => TT.blockChangeHasHooks(oT),
        watched: () => function(TT, oT, IT) {
          const iT = [],
            zT = (TT, oT, IT) => {
              iT.push(TT, oT, IT)
            },
            kT = new Set;
          for (let WT = 0; WT < IT.length; WT += ET.e)
            for (let oT = (0, vT.N)(IT[WT]); oT <= (0, vT.N)(IT[WT + 3]); oT++)
              for (let iT = (0, vT.N)(IT[WT + 1]); iT <= (0, vT.N)(IT[WT + 4]); iT++)
                for (let XT = (0, vT.N)(IT[WT + 2]); XT <= (0, vT.N)(IT[WT + 5]); XT++) {
                  const IT = `${oT}|${iT}|${XT}`;
                  kT.has(IT) || (kT.add(IT), TT.blockDataOwner.forEachDataCell(oT, iT, XT, zT))
                }
          return oT.forEachCell(zT), Int32Array.from(iT)
        }(TT, oT, iT)
      }), TT.FL.zTT()
    }
    var CT = IT(36497),
      jT = IT(37945),
      JT = IT(37951),
      UT = IT(1007),
      aT = IT(1777);
    var YT = IT(4024);

    function QT(TT) {
      const oT = TT.iL;
      let IT = 0,
        zT = -1,
        WT = -1 / 0,
        XT = null,
        BT = !0;
      const ST = () => {
        if (++IT % 10 !== 0) return;
        const ST = (0, iT.getLastReceivedPacketId)();
        if (ST <= zT) return;
        const [DT, LT, xT] = TT.qm.Wm(TT.ZJ), cT = ! function(TT) {
          var oT;
          let IT = null === (oT = TT.qm.HoT(TT.ZJ)) || void 0 === oT ? void 0 : oT.Ac;
          if (void 0 === IT) return !1;
          const iT = new Set;
          for (; void 0 !== IT && !iT.has(IT);) {
            var zT;
            iT.add(IT);
            const oT = TT.qm.getState(IT, "smoothToServerPos"),
              kT = Array.isArray(oT) ? null : null === oT || void 0 === oT ? void 0 : oT.serverPosition;
            if (kT) {
              const oT = TT.qm.Wm(IT);
              if (Math.abs(oT[0] - kT[0]) > 10 || Math.abs(oT[1] - kT[1]) > 10 || Math.abs(oT[2] - kT[2]) > 10) return !0
            }
            IT = null === (zT = TT.qm.HoT(IT)) || void 0 === zT ? void 0 : zT.Ac
          }
          return !1
        }(TT) && function(TT, oT, IT, iT) {
          const zT = kT.c.Yc;
          for (let kT = 0; kT < TT.length; kT++) {
            const WT = TT[kT];
            if (!(0, YT.j)(oT, IT, iT, WT[0] * zT, WT[1] * zT, WT[2] * zT)) return !1
          }
          return !0
        }(oT.WM.fc, DT, LT, xT), KT = null === XT || Math.abs(DT - XT[0]) > 8 || Math.abs(LT - XT[1]) > 8 || Math.abs(xT - XT[2]) > 8, MT = !BT || KT || performance.now() - WT >= 1e4;
        BT = cT, cT && MT && (zT = ST, WT = performance.now(), XT = [DT, LT, xT], (0, iT.sendColyMessage)(FT.xg, {
          ZF: ST
        }))
      };
      return TT.on("dD", ST), () => {
        TT.off("dD", ST)
      }
    }
    var OT = IT(35722),
      HT = IT(319),
      nT = IT.n(HT),
      qT = IT(5975),
      ZT = IT(37026),
      lT = IT(36729),
      sT = IT(36704),
      tT = IT(4041),
      GT = IT(37111),
      pT = IT(36865),
      bT = IT(36242),
      yT = IT(36600),
      NT = IT(37953),
      PT = IT(35706),
      dT = IT(35713),
      VT = IT(37960),
      To = IT(37962),
      oo = IT(3219),
      Io = IT(1468),
      io = IT(2458),
      zo = IT(2556),
      ko = IT(37254),
      Wo = IT(36025),
      Xo = IT(4266),
      Bo = IT(38004),
      Fo = IT(37101),
      So = IT(3795),
      Do = IT(36501),
      Lo = IT(36094),
      xo = IT(37114),
      co = IT(37964),
      Ko = IT(37982),
      Mo = IT(36233);
    class ro {
      constructor(TT, oT, IT, iT) {
        this.gameNameWithVariation = TT, this.FL = IT, this.connectionResume = iT, this.stateReplicationHandler = void 0, this.stopChunkReports = () => {}, this.replayResume = null, this.stateReplicationHandler = new Ko.d(oT, this.FL)
      }
      setupStateReplicationHandlers() {
        this.stateReplicationHandler.setup(), (0, iT.onGameResetOnce)((() => {
          this.stateReplicationHandler.dispose()
        }))
      }
      fFT(TT) {
        this.stateReplicationHandler.dispose(), this.stateReplicationHandler = new Ko.d(TT, this.FL), this.stateReplicationHandler.setup()
      }
      clearBlockRules() {
        const TT = this.FL.iL;
        TT.poT = new Set, TT.NoT = new Set, TT.boT = new Set, TT.PoT = new Set, TT.yoT = [], TT.doT = [], TT.EQ = new Set, TT.CI = [], TT.LO = []
      }
      clearUiRequestsAndQTEs() {
        Xo.e.reset(), (0, eT.d)()
      }
      startChunkReports() {
        const TT = function(TT) {
            let oT = null,
              IT = -1 / 0,
              zT = null;
            const kT = () => {
                zT = null;
                const kT = Math.ceil(TT.qE[0]),
                  WT = Math.ceil(TT.qE[1]);
                oT && oT[0] === kT && oT[1] === WT || (oT = [kT, WT], IT = performance.now(), (0, iT.sendColyMessage)(FT.ug, {
                  eS: kT,
                  RS: WT
                }))
              },
              WT = () => {
                null === zT && (zT = setTimeout(kT, Math.max(0, IT + 250 - performance.now())))
              };
            return kT(), TT.on("addRemoveDistanceChanged", WT), () => {
              TT.off("addRemoveDistanceChanged", WT), null !== zT && (clearTimeout(zT), zT = null)
            }
          }(this.FL.iL),
          oT = QT(this.FL);
        this.stopChunkReports = () => {
          TT(), oT()
        }
      }
      restartChunkStreaming() {
        (0, yT.l)(this.FL, (0, BT.e)().recentChunkEdits.chunksEditedSince(this.connectionResume.getDroppedAt() - NT.b)), this.startChunkReports()
      }
      setupOnMessageListeners(TT, oT) {
        const IT = this.FL,
          zT = this.gameNameWithVariation;
        TT.Am(FT.sc, (TT => {
          let {
            li: oT,
            si: iT,
            Gi: zT,
            bi: kT,
            yi: WT,
            Ni: XT,
            Pi: BT,
            Vi: FT,
            Tz: ST
          } = TT;
          if (!IT.qm.xTT(oT, "itemState")) return void(0, lT.i)(IT, oT, [WT, XT, BT], iT, {
            amount: zT,
            attributes: JSON.parse(kT),
            Vi: FT,
            size: ST
          });
          const DT = IT.qm.getState(oT, "itemState");
          DT.amount = zT, DT.Vi = FT, DT.creationTime = Date.now(), (0, sT.setServerPosition)(IT.qm.getState(oT, "smoothToServerPos"), WT, XT, BT)
        })), TT.Am(FT.db, (TT => {
          (0, CT.e)(IT).setCantPickUp(TT, !0), IT.qm.xTT(TT, "itemState") && (IT.qm.getState(TT, "itemState").Vi = !0)
        })), TT.Am(FT.be, (TT => {
          (0, CT.e)(IT).setCantPickUp(TT, !1), IT.qm.xTT(TT, "itemState") && (IT.qm.getState(TT, "itemState").Vi = !1)
        })), TT.Am(FT.Rc, (TT => {
          AT.e.applyNewClientOptions(TT)
        })), TT.Am(FT.Uc, (TT => {
          let {
            eId: oT,
            settings: iT
          } = TT;
          (0, Lo.d)(oT);
          for (const IT in iT)(0, Lo.c)(oT, IT, iT[IT]);
          if ("canSee" in iT && IT.qm.xTT(oT, "hidingMeshManager")) {
            const TT = IT.qm.getState(oT, "hidingMeshManager");
            TT.canSee = (0, xo.d)("canSee", iT.canSee), TT._forceUpdate = !0
          }
        })), TT.Am(FT.gf, (TT => {
          let {
            eI: oT,
            RI: zT,
            uI: kT,
            vI: WT
          } = TT;
          const XT = [zT, kT, WT];
          IT.qm.setPosition(IT.ZJ, XT), (0, iT.sendColyMessage)(FT.Tg, {
            PS: oT,
            dS: tT.f
          }), rT.h.XM("localPlayerTeleported", {
            pos: XT,
            isCorrection: !1
          })
        })), TT.Am(FT.id, (TT => {
          let {
            WW: oT,
            XW: IT,
            BW: iT,
            FW: zT
          } = TT;
          this.stateReplicationHandler.setUpIfQueued(oT);
          const kT = [IT, iT, zT];
          rT.h.XM(`otherPlayerTeleported|${oT}`, {
            pos: kT
          })
        })), TT.Am(FT.Bd, (TT => {
          let {
            Ck: oT,
            jk: zT,
            Jk: kT,
            Uk: WT,
            ak: XT,
            Yk: BT,
            Qk: ST,
            Hk: DT,
            Ok: LT,
            Zk: xT
          } = TT;
          const cT = [zT, kT, WT];
          IT.qm.setPosition(IT.ZJ, cT);
          const KT = IT.qm.jTT(IT.ZJ),
            MT = IT.qm.iH(IT.ZJ);
          nT().set(MT.aY, 0, 0, 0), nT().set(MT.qY, 0, 0, 0), nT().set(MT.LM, XT, BT, ST), MT.ZY(), KT._flying = null !== xT, xT ? (KT.flyAccel.lk = xT.lk, KT.flyAccel.sk = xT.sk) : KT.flyAccel.reset(), DT && KT.movementType === qT.o.GLIDING && (KT.nk = DT.nk, nT().copy(KT.qk, DT.qk)), (0, iT.sendColyMessage)(FT.Tg, {
            PS: oT,
            dS: tT.f
          }), rT.h.XM("localPlayerTeleported", {
            pos: cT,
            isCorrection: !0
          })
        }));

        function kT() {
          return IT.qm.IoT(IT.ZJ)
        }
        TT.Am(FT.pb, (TT => {
          let {
            chatMsgId: oT,
            content: IT,
            chatterEId: iT
          } = TT;
          rT.h.XM("chat", {
            serverChatMsgId: oT,
            content: IT,
            chatterEId: iT
          }, !0)
        })), TT.Am(FT.qd, (TT => {
          io.c.onReceiveColyseusPing(TT)
        })), TT.Am(FT.Je, (TT => {
          let {
            key: oT,
            value: IT
          } = TT;
          (0, gT.setCookie)(zT, oT, IT)
        })), TT.Am(FT.Qe, (TT => {
          rT.h.XM("setDiscordReportKey", TT)
        })), (0, iT.onGameResetOnce)((() => {
          this.stopChunkReports()
        })), TT.Am(FT.jc, (oT => {
          const {
            Mo: zT,
            ro: kT
          } = oT;
          if ((0, iT.setAdjustment)(kT), this.connectionResume.onInitialInfo(oT.Ao, oT.ho), iT.offlineInputReplay.Fv(oT.wo), this.connectionResume.isResuming()) {
            console.log("Resumed the connection as eId", zT);
            try {
              null === oT.eo && (0, BT.e)().client.inventoryPrediction.dropPending(), this.stopChunkReports(), this.clearBlockRules(), AT.e.apply({
                shopInfo: null,
                _shopVersion: aT.e
              });
              const iT = IT.qm.ioT(IT.ZJ);
              iT.aI && (iT.chestClosed(), rT.h.XM("chestToggleFromServer", !1, !0)), this.clearUiRequestsAndQTEs(), rT.h.XM("initInfoReceived", TT)
            } finally {
              const TT = null === oT.eo ? null : {
                sync: null,
                endSeq: null
              };
              this.replayResume = TT, this.connectionResume.onResumeInitialInfo(oT.eo, (() => {
                TT.endSeq = (0, BT.e)().client.inventoryPrediction.lastActionSeq
              })), null === TT && this.restartChunkStreaming()
            }
          } else console.log("Local client is eId", zT), rT.h.XM("loadingScreenState", "loadingPage:loadingWorld"), IT.KTT = zT, IT.qm.xTT(IT.ZJ, IT.qm.names.entityName) && IT.qm.RJ(IT.ZJ, IT.qm.names.entityName), (0, BT.e)().setEntityName(IT.KTT, (0, BT.e)().getRawEntityName(IT.ZJ)), IT.qJ[IT.KTT] = {}, IT.qm.eJ(IT.ZJ, IT.qm.names.entityName), rT.h.XM("initInfoReceived", TT), this.startChunkReports(), WT.client.onServerConnectionFinalised()
        })), TT.Am(FT.re, (() => {
          this.connectionResume.isResuming() ? this.connectionResume.onResumed((() => {
            const TT = this.replayResume;
            if (this.replayResume = null, !TT) return;
            this.restartChunkStreaming();
            const {
              inventoryPrediction: oT
            } = (0, BT.e)().client, {
              sync: zT
            } = TT, kT = new Set(iT.offlineInputReplay.takeDroppedActions());
            if (zT) {
              var WT;
              const iT = null !== (WT = TT.endSeq) && void 0 !== WT ? WT : oT.lastActionSeq;
              oT.forget((TT => TT > zT.nI && TT <= iT || kT.has(TT))), wT(IT, oT, rT.h, zT.nI, zT.load)
            } else oT.dropPending(), oT.askForSnapshot()
          })) : console.warn("ResumeComplete arrived without a resume")
        })), TT.Am(FT.jf, (TT => {
          rT.h.XM("TopRightHelper", TT, !0)
        })), TT.Am(FT.Id, (TT => {
          let {
            type: oT,
            location1: IT,
            location2: iT,
            location3: zT,
            score: kT
          } = TT;
          (0, zo.y)({
            type: oT,
            location1: IT,
            location2: iT,
            location3: zT,
            score: kT
          })
        })), TT.Am(FT.pe, (TT => {
          let {
            type: oT,
            resourceType: IT,
            amount: iT,
            category: zT,
            itemName: kT
          } = TT;
          (0, zo.A)({
            type: oT,
            resourceType: IT,
            amount: iT,
            category: zT,
            itemName: kT
          })
        })), TT.Am(FT.W, (TT => {
          IT.iL.poT.add(TT), IT.iL.NoT.delete(TT)
        })), TT.Am(FT.$, (TT => {
          IT.iL.NoT.add(TT), IT.iL.poT.delete(TT)
        })), TT.Am(FT.ee, (TT => {
          IT.iL.NoT.delete(TT), IT.iL.poT.delete(TT)
        })), TT.Am(FT.Y, (TT => {
          IT.iL.boT.add(TT), IT.iL.PoT.delete(TT)
        })), TT.Am(FT.bb, (TT => {
          IT.iL.PoT.add(TT), IT.iL.boT.delete(TT)
        })), TT.Am(FT.ke, (TT => {
          IT.iL.PoT.delete(TT), IT.iL.boT.delete(TT)
        })), TT.Am(FT.X, (TT => {
          (0, DT.kb)(TT, IT.iL.doT), (0, DT.kb)(TT, IT.iL.yoT), IT.iL.yoT.push(TT)
        })), TT.Am(FT.ab, (TT => {
          (0, DT.kb)(TT, IT.iL.yoT), (0, DT.kb)(TT, IT.iL.doT), IT.iL.doT.push(TT)
        })), TT.Am(FT.ie, (TT => {
          (0, DT.kb)(TT, IT.iL.yoT), (0, DT.kb)(TT, IT.iL.doT)
        })), TT.Am(FT.yf, (TT => {
          let {
            qT: oT,
            ZT: iT
          } = TT;
          iT ? IT.iL.EQ.delete(oT) : IT.iL.EQ.add(oT)
        })), TT.Am(FT.uf, (TT => {
          let {
            CI: oT,
            jI: iT
          } = TT;
          WT.updateWalkThroughRect(IT.ZJ, oT, iT)
        })), (0, iT.onGameResetOnce)((() => {
          this.clearBlockRules()
        })), TT.Am(FT.df, (TT => {
          (0, mT.b)(TT)
        })), TT.Am(FT.bc, (TT => {
          RT.d.applyServerUpdate(TT)
        })), TT.Am(FT.hb, (TT => {
          WT.applyServerBlocks((() => {
            ! function(TT, oT) {
              for (const {
                  hI: IT,
                  wI: iT
                }
                of oT) {
                const oT = uT.b[iT];
                if (oT) {
                  const {
                    compX: iT,
                    compY: zT,
                    compZ: kT,
                    mainMultiblock: WT
                  } = oT;
                  TT.gC(IT[0] - iT, IT[1] - zT, IT[2] - kT, WT)
                }
              }
              for (const {
                  hI: IT,
                  wI: iT,
                  mI: zT
                }
                of oT) TT.setBlockNoMulti(IT[0], IT[1], IT[2], iT, !0), TT.blockDataOwner.setBlockData(IT[0], IT[1], IT[2], null === zT ? void 0 : JSON.parse(zT)), TT.blockAdded(IT[0], IT[1], IT[2], iT)
            }(WT, TT)
          })), rT.h.XM("changeBlockFail", TT), WT.client.triggerGameCallback("onChangeBlockFail", TT), rT.h.XM("EditBoard", {
            pos: null
          }), rT.h.XM("EditCodeBlock", {
            pos: null,
            canChangePos: null
          })
        })), TT.Am(FT.nd, (TT => {
          let {
            pickUpItems: oT,
            pickUpAckSeq: IT
          } = TT;
          for (const {
              name: iT,
              amount: zT,
              attributes: WT
            }
            of oT) kT().pickUpItem({
            name: iT,
            amount: zT,
            typeObj: lT.B[iT],
            attributes: WT
          });
          (0, BT.e)().client.inventoryPrediction.serverChangeApplied(IT)
        })), TT.Am(FT.Se, (TT => {
          let {
            index: oT,
            name: iT,
            amount: zT,
            attributes: kT,
            setSlotAckSeq: WT
          } = TT;
          const XT = IT.qm.ioT(IT.ZJ);
          (oT < XT.playerInventory.numSlots || XT.aI || XT.inCreative) && XT.setItemSlot(oT, iT, zT, kT), (0, BT.e)().client.inventoryPrediction.serverChangeApplied(WT)
        })), TT.Am(FT.bf, (TT => {
          let {
            JI: oT,
            HI: iT,
            nI: zT
          } = TT;
          const {
            inventoryPrediction: kT
          } = (0, BT.e)().client, WT = () => {
            IT.qm.ioT(IT.ZJ).loadFromString(oT)
          };
          this.replayResume && (this.replayResume.sync = {
            nI: zT,
            load: WT
          }), wT(IT, kT, rT.h, zT, WT, iT)
        })), TT.Am(FT.oc, (TT => {
          (0, BT.e)().client.inventoryPrediction.acknowledge(TT)
        })), TT.Am(FT.E, (TT => {
          let {
            Iz: oT,
            iz: IT,
            zz: iT,
            kz: zT
          } = TT;
          (0, BT.e)().client.itemDropPrediction.onActionItemDrops(oT, IT, iT, zT)
        })), TT.Am(FT.yb, (TT => {
          kT().clearInventory(), (0, BT.e)().client.inventoryPrediction.serverChangeApplied(TT)
        })), TT.Am(FT.Cc, (TT => {
          let {
            leaveEventType: oT,
            category: IT,
            subCategory: iT,
            value: zT
          } = TT;
          (0, zo.I)({
            leaveEventType: oT,
            category: IT,
            subCategory: iT,
            value: zT
          })
        })), TT.Am(FT.Gb, (TT => {
          let {
            cat1: oT,
            cat2: IT,
            cat3: iT,
            value: zT
          } = TT;
          (0, zo.s)({
            cat1: oT,
            cat2: IT,
            cat3: iT,
            value: zT
          })
        }));
        const WT = (0, BT.e)();
        TT.Am(FT.Eb, (TT => {
          WT.applyServerBlocks((() => {
            fT(WT, RT.d, TT)
          }))
        })), TT.Am(FT.Te, (TT => {
          rT.h.XM("setSelectedInventorySlotI", TT, !0)
        })), TT.Am(FT.Ac, (TT => {
          let {
            category: oT,
            timeframe: IT,
            data: iT
          } = TT;
          rT.h.XM("leaderboardResponse", {
            category: oT,
            timeframe: IT,
            data: iT
          })
        })), TT.Am(FT.V, (TT => {
          let {
            Ei: oT,
            Ci: IT
          } = TT;
          this.stateReplicationHandler.setUpIfQueued(oT), oT = (0, OT.d)(oT), (0, BT.e)().client.gameRecorder.recordBulletShot(oT, IT), rT.h.XM(`bulletShot|${oT}`, {
            bulletDirections: IT
          })
        })), TT.Am(FT.dc, (TT => {
          let {
            Ri: oT,
            ui: IT
          } = TT;
          rT.h.XM("damagedByOtherPlayer", {
            Ri: oT,
            direction: IT
          }, !0)
        })), TT.Am(FT.yd, (TT => {
          rT.h.XM("playerKilled", TT, !0), (0, BT.e)().client.gameRecorder.recordPlayerKilled(TT.deadEId, TT.killerEId, TT.withItem, TT.killstreak)
        })), TT.Am(FT.Kb, (TT => {
          rT.h.XM("customKillfeed", TT, !0), (0, BT.e)().client.gameRecorder.recordCustomKillfeed(TT.killer, TT.victim, TT.withItem)
        })), TT.Am(FT.Kd, (TT => {
          let {
            iT: oT,
            zT: iT
          } = TT;
          this.stateReplicationHandler.setUpIfQueued(oT);
          const zT = IT.qm.eoT(oT);
          null !== zT && void 0 !== zT && zT.isGun() && zT.reload(Date.now(), iT)
        })), TT.Am(FT._e, (() => {
          rT.h.XM("showShopTutorial", null, !0)
        })), TT.Am(FT.Fd, (TT => {
          rT.h.XM("progressBarUpdate", TT, !0)
        })), TT.Am(FT.mc, (TT => {
          rT.h.XM("middleScreenBarInitiate", {
            duration: TT.Eo,
            fo: TT.fo,
            horizBarRemOffset: TT.Co
          }, !0)
        })), TT.Am(FT.Ud, (() => {
          rT.h.XM("middleScreenBarRemove", !0)
        })), TT.Am(FT.ve, (TT => {
          let {
            rI: oT,
            xT: iT
          } = TT;
          const zT = iT ? (0, Fo.e)(IT, iT) : void 0;
          rT.h.XM("sendHitmarker", {
            rI: oT,
            screenPos: zT
          }, !0)
        })), TT.Am(FT.Me, (TT => {
          let {
            id: oT,
            position: IT,
            style: iT,
            kT: zT,
            FT: kT
          } = TT;
          rT.h.XM("setDirectionArrow", {
            id: oT,
            position: IT,
            style: iT,
            text: (0, FT.s)(zT),
            FT: kT
          }, !0)
        })), TT.Am(FT.vb, (TT => {
          let {
            id: oT
          } = TT;
          rT.h.XM("clearDirectionArrow", {
            id: oT
          }, !0)
        })), TT.Am(FT.I, (TT => {
          let {
            Wz: oT,
            Xz: iT,
            animationScript: zT,
            Bz: kT,
            Fz: WT,
            Sz: XT,
            Dz: FT
          } = TT;
          oT = (0, OT.d)(oT);
          const ST = null === zT && null !== XT ? (0, jT.h)(XT, FT) : zT;
          (0, BT.e)().client.gameRecorder.recordAnimateEntity(oT, iT, ST, kT, WT), (0, CT.e)(IT).animations.animateEntity(oT, iT, zT, kT, WT, XT, FT), null !== zT || oT === IT.ZJ && iT === Do.e.Emote && (0, BT.e)().client.cameraController.endTemporaryThirdPerson()
        })), TT.Am(FT.qf, (TT => {
          let {
            LW: oT,
            xW: IT
          } = TT;
          if (WT.aZ(oT[0], oT[1], oT[2])) {
            const TT = (0, BT.e)().Gw(oT[0], oT[1], oT[2]);
            (0, BT.e)().updateMailboxContents(oT[0], oT[1], oT[2], TT, IT)
          }
        })), TT.Am(FT.rb, (TT => {
          let {
            ji: oT,
            Ji: iT,
            Ui: zT,
            ai: kT,
            Yi: WT,
            Qi: XT,
            Oi: FT,
            Hi: ST
          } = TT;
          const DT = IT.qm.ioT(IT.ZJ);
          if (XT) {
            const {
              UI: TT,
              nI: oT
            } = ST;
            return (0, BT.e)().client.inventoryPrediction.F_(oT, (() => {
              DT.chestRefreshed(iT, zT, kT, FT, TT)
            })) && rT.h.XM("chestToggleFromServer", !1, !0), void rT.h.XM("chestRefreshedFromServer")
          }(oT || DT.aI) && (oT ? (DT.chestOpened(iT, zT, kT, WT, FT), null !== WT && (0, BT.e)().client.ironChestPasskeyCache.onChestOpened(kT, WT)) : DT.chestClosed(), rT.h.XM("chestToggleFromServer", oT, !0))
        })), TT.Am(FT.Nb, (TT => {
          let {
            craftingRecipeItemName: oT,
            recipesForItem: iT
          } = TT;
          oT ? WT.craftingManager.editRecipesForPlayer(IT.ZJ, oT, iT) : WT.craftingManager.resetAllPlayerRecipes(IT.ZJ), rT.h.XM("craftingRecipesEdited", {
            itemName: oT,
            recipesForItem: iT
          })
        })), TT.Am(FT.Ve, (TT => {
          let {
            vehicleEId: oT,
            overrides: IT
          } = TT;
          (0, BT.e)().applyRiddenVehicleSettingOverrides(oT, IT)
        })), TT.Am(FT.tf, (TT => {
          let {
            vz: oT,
            Ez: iT,
            fz: zT
          } = TT;
          const kT = IT.qm.jTT(IT.ZJ).physicsState.type === qT.r.SLEEPING && oT === qT.r.DEFAULT;
          (0, BT.e)().updatePositionAndPhysics(IT.ZJ, {
            type: oT,
            tier: iT
          }, !0, zT), kT && (0, BT.e)().updateHeldVehicleStatus()
        })), TT.Am(FT.kb, (TT => {
          let {
            EI: oT,
            fI: iT
          } = TT;
          IT.qm.ToT(IT.ZJ).setPose(oT, iT)
        })), TT.Am(FT.se, (TT => {
          (0, co.e)(TT)
        })), TT.Am(FT.xd, (TT => {
          for (const oT of TT)(0, GT.z)(oT);
          rT.h.XM("playerCosmeticsUpdated", TT, !0)
        })), TT.Am(FT.N, (TT => {
          for (const oT of TT)(0, Wo.g)(IT, oT)
        })), TT.Am(FT.Gc, (TT => {
          let {
            ST: oT,
            DT: iT,
            cT: zT,
            KT: kT,
            MT: XT,
            rT: BT,
            AT: FT
          } = TT;
          this.stateReplicationHandler.setUpIfQueued(oT), oT = (0, OT.d)(oT);
          const ST = IT.qm.MoT(oT);
          if (ST && (ST.lastHurtTime = performance.now()), (0, ZT.playRigHurt)(IT, oT, BT), rT.h.XM("lifeformHurt", {
              eId: oT,
              AT: FT
            }), iT) {
            const TT = (0, Fo.e)(IT, iT.xT);
            rT.h.XM("yourAttackHit", {
              rI: kT,
              screenPos: TT,
              hitSelf: oT === IT.ZJ
            })
          }
          oT === IT.ZJ && (WT.shakePlayerCamera(oT, XT / 40, 200), rT.h.XM("closeShopOnDamaged", null), rT.h.XM("damagedByOtherPlayer", {
            Ri: null,
            direction: BT,
            MT: XT
          }, !0));
          const DT = IT.qm.Wm(oT);
          if (DT && (zT || kT)) {
            const TT = [DT[0], DT[1] + 1, DT[2]];
            zT && (0, pT.i)(IT, pT.z, TT, 15), kT && (0, pT.i)(IT, pT.p, TT, 10)
          }
        })), TT.Am(FT.Fc, (TT => {
          let {
            Mi: oT,
            Ai: iT,
            gi: zT
          } = TT;
          (0, CT.e)(IT).setHealthFrac((0, OT.d)(oT), zT), rT.h.XM("lifeformHealthChanged", {
            eId: (0, OT.d)(oT),
            Ai: iT,
            gi: zT
          })
        })), TT.Am(FT.O, (TT => {
          let {
            HT: oT,
            nT: iT
          } = TT;
          (0, BT.e)().playerAttacked(IT.ZJ, oT, iT)
        })), TT.Am(FT.xc, (TT => {
          (0, BT.e)().client.leaveGameUnwanted({
            reason: TT,
            requiresRefresh: !1,
            canReconnect: !1,
            automaticallyReconnect: !1
          }), (0, Io.navigatePreserveSearch)("/")
        })), TT.Am(FT.Sd, (TT => {
          let {
            cI: oT,
            KI: IT,
            MI: iT
          } = TT;
          kT().removeItemName(oT, IT), (0, BT.e)().client.inventoryPrediction.serverChangeApplied(iT)
        })), TT.Am(FT.Ce, (TT => {
          const {
            ck: oT,
            YoT: iT
          } = (0, bT.f)([TT[0], TT[1], TT[2]]);
          Mo.e.setLookDirection(IT, oT, iT), (0, yT.v)(oT, iT);
          const zT = IT.qm.ToT(IT.ZJ);
          zT && (zT.heading = oT)
        })), TT.Am(FT.Ge, (TT => {
          WT.client.cameraController.setCameraZoom(TT)
        })), TT.Am(FT.Ze, (TT => {
          let {
            qi: oT,
            Zi: iT
          } = TT;
          WT.shakePlayerCamera(IT.ZJ, oT, iT)
        })), TT.Am(FT.Fb, (TT => {
          (0, oo.onCosmeticPackGranted)(TT)
        })), TT.Am(FT.xe, (TT => {
          rT.h.XM("serverUpdating", Date.now() + TT, !0)
        })), TT.Am(FT.Nc, JT.c), TT.Am(FT.dd, (TT => {
          let {
            id: oT,
            qI: IT
          } = TT;
          const {
            type: zT,
            params: kT
          } = (0, Bo.g)(IT), WT = {
            ...kT
          };
          for (const iT of Bo.e) iT in WT && WT[iT] && (WT[iT] = (0, FT.s)(WT[iT]));
          Xo.e.queueQTE(oT, zT, WT).getResult().then((TT => {
            "boolean" === typeof TT && (0, iT.sendColyMessage)(FT.xi, {
              qteId: oT,
              qteResponse: TT
            })
          }))
        })), TT.Am(FT.Yd, (TT => {
          Xo.e.cancelQTE(TT)
        })), (0, iT.onGameResetOnce)((() => {
          Xo.e.reset()
        })), TT.Am(FT.fd, (TT => {
          let {
            id: oT,
            clientParameters: IT
          } = TT;
          (0, eT.g)(oT, IT)
        })), TT.Am(FT.$d, (TT => {
          (0, eT.i)(TT)
        })), TT.Am(FT.of, (TT => {
          let {
            text: oT,
            id: IT
          } = TT;
          (0, eT.l)(IT, oT, (TT => {
            (0, iT.sendColyMessage)(FT.Sj, {
              VF: IT,
              oS: TT,
              iS: 5
            })
          }))
        })), TT.Am(FT.Pb, (TT => {
          let {
            hT: oT,
            wT: IT,
            mT: iT,
            eT: zT,
            RT: kT,
            uT: WT
          } = TT;
          oT = (0, OT.d)(oT), (0, BT.e)().client.updateEffect(oT, IT, {
            displayName: iT,
            icon: zT,
            duration: kT,
            level: WT
          })
        })), TT.Am(FT.Ld, (TT => {
          let {
            hT: oT,
            wT: IT
          } = TT;
          oT = (0, OT.d)(oT), (0, BT.e)().client.removeEffect(oT, IT)
        })), TT.Am(FT.wc, (TT => {
          IT.qm.ToT(IT.ZJ).jumpMultiplier.setMultiplierType("jumpEffectAmount", TT)
        })), TT.Am(FT.lf, (TT => {
          rT.h.XM("ttbEffectMultiplier", TT)
        })), (0, iT.onGameResetOnce)((() => {
          IT.qm.ToT(IT.ZJ).jumpMultiplier.setMultiplierType("jumpEffectAmount", 1)
        })), TT.Am(FT.Yc, (TT => {
          (0, pT.m)(IT, (0, DT.u)(TT))
        })), TT.Am(FT.ad, (TT => {
          So.i[TT.aT] ? (0, pT.m)(IT, {
            ...So.i[TT.aT],
            pos1: TT.pos1,
            pos2: TT.pos2
          }) : console.error(`Unknown preset id: ${TT.aT}`)
        })), TT.Am(FT.td, (TT => {
          var oT, IT;
          let {
            vT: iT,
            ET: zT,
            fT: kT,
            CT: WT
          } = TT, {
            JT: XT,
            UT: FT
          } = null !== WT && void 0 !== WT ? WT : {};
          const {
            jT: ST
          } = null !== WT && void 0 !== WT ? WT : {};
          XT = null !== (oT = XT) && void 0 !== oT ? oT : void 0, FT = null !== (IT = FT) && void 0 !== IT ? IT : void 0, "string" === typeof ST && this.stateReplicationHandler.setUpIfQueued(ST), (0, BT.e)().client.gameRecorder.recordPlaySound(iT, zT, kT, WT), PT.d.play((0, dT.b)(iT), zT, ST, XT, FT).rate(kT)
        })), TT.Am(FT.ye, (TT => {
          let {
            pos: oT,
            data: IT
          } = TT;
          WT.blockDataOwner.setBlockData(oT[0], oT[1], oT[2], IT), WT.blockAdded(oT[0], oT[1], oT[2], WT.Gw(oT[0], oT[1], oT[2]))
        })), TT.Am(FT.ld, (TT => {
          let {
            info: oT
          } = TT;
          rT.h.XM("overShopInfo", oT, !0)
        })), TT.Am(FT._b, (TT => {
          let {
            AI: iT,
            gI: zT
          } = TT;
          oT.openShop(IT.ZJ, iT, zT)
        })), TT.Am(FT.K, (TT => {
          IT.qm.iH(IT.ZJ).applyImpulse(TT)
        })), TT.Am(FT.Xe, (TT => {
          const oT = IT.qm.iH(IT.ZJ);
          nT().set(oT.aY, 0, 0, 0), nT().set(oT.qY, 0, 0, 0), nT().copy(oT.LM, TT), oT.ZY()
        })), TT.Am(FT.Jc, (TT => {
          console.error(`[logErrorToConsole]: ${TT}`)
        })), TT.Am(FT.Wb, (TT => {
          let {
            YT: oT,
            QT: IT,
            OT: iT
          } = TT;
          rT.h.XM("flyingMiddleMessage", {
            content: (0, FT.s)(oT),
            QT: IT,
            OT: iT
          }, !0)
        })), TT.Am(FT.Bf, (TT => {
          const oT = TT === UT.f ? null : {
            message: `Currently loaded as variation: ${TT}`,
            type: "Warning"
          };
          rT.h.XM("showPermanentBottomMessage", oT, !0)
        })), TT.Am(FT.$b, (TT => {
          let {
            messageType: oT,
            data: IT
          } = TT;
          (0, VT.g)(oT) ? (0, VT.c)(oT, IT) : ("freeCamPerms" === oT && WT.client.freeCameraController.setPerms(IT.key, IT.value), WT.client.triggerGameCallback("onReceivedMessageFromServer", oT, IT))
        })), TT.Am(FT.ob, (() => {
          const TT = IT.qm.eoT(IT.ZJ);
          null !== TT && void 0 !== TT && TT.isChargeable() && TT.finishCharging(!1, Date.now())
        })), TT.Am(FT.Pd, (TT => {
          let {
            gT: oT
          } = TT;
          WT.craftingManager.removeRecipes(IT.ZJ, oT), rT.h.XM("craftingRecipesEdited", {
            itemName: oT,
            recipesForItem: []
          })
        })), TT.Am(FT.rf, (TT => {
          for (const oT in TT) {
            const IT = TT[oT];
            for (const TT in IT) WT.client.meshCreator.handleParticleSystemUpdate(oT, TT, IT[TT])
          }
        })), (0, iT.onGameResetOnce)((() => {
          (0, ko.setFloatingYValue)(IT.qm.getState(IT.ZJ, "physics"), IT.qm.Gl(IT.ZJ), null)
        })), TT.Am(FT.Tb, (TT => {
          let {
            DI: oT,
            LI: iT,
            xI: zT
          } = TT;
          const kT = (0, OT.d)(oT);
          if (kT === IT.ZJ) {
            const TT = IT.qm.Gl(IT.ZJ).position;
            zT ??= Math.floor(TT[1]) - 1, (0, ko.setFloatingYValue)(IT.qm.getState(IT.ZJ, "physics"), IT.qm.Gl(IT.ZJ), iT ? zT : null)
          }(0, CT.e)(IT).setFloating(kT, iT, zT);
          const WT = IT.qm.getState(kT, "floating");
          WT && (WT.isFloating = iT, WT.xI = iT ? zT : null)
        })), TT.Am(FT.Ab, To.g)
      }
    }
    window.addEventListener("beforeunload", (() => {}));
    var Ao = IT(38010),
      go = IT(38012),
      ho = IT(648),
      wo = IT(2788);
    class mo {
      constructor(TT, oT, IT, iT) {
        this.msgHandler = IT, this.listener = iT, this.session = void 0, this.attachedRoom = null, this.detachRoomListeners = null, this.suspended = !1, this.droppedAt = 0, this.session = new Ao.e({
          reconnect: TT,
          isLive: () => iT.isLive(),
          onReconnected: TT => {
            this.resumeOnRoom(TT)
          },
          onGaveUp: (TT, oT) => {
            iT.onGaveUp(TT, oT)
          },
          freeze: oT,
          releaseSeat: oT => {
            TT(oT).then((TT => {
              TT.leave(!0)
            }), (TT => {
              console.warn("Couldn't release the held seat of a game left while reconnecting", TT)
            }))
          }
        })
      }
      onInitialInfo(TT, oT) {
        this.session.onInitialInfo(TT, oT)
      }
      isResuming() {
        return this.session.isResuming()
      }
      getDroppedAt() {
        return this.droppedAt
      }
      onResumeInitialInfo(TT, oT) {
        if (this.session.onResuming(), null === TT) {
          try {
            (0, BT.e)().client.itemDropPrediction.reset()
          } catch (IT) {
            console.error("Error dropping the item drop predictions on resuming", IT)
          }
          return iT.offlineInputReplay.discard(), void this.setSuspended(!1)
        }(0, BT.e)().client.itemDropPrediction.onResumeReplayOffered(), iT.offlineInputReplay.replayFrom(TT.uo, oT)
      }
      onResumed(TT) {
        this.setSuspended(!1), (0, iT.resendBeacons)();
        try {
          TT()
        } catch (oT) {
          console.error("Error completing the resume", oT)
        } finally {
          this.session.onResumed()
        }
      }
      attachRoom(TT) {
        const oT = (0, ho.i)((() => TT.connection.isOpen));
        TT.Rm(oT);
        const IT = new go.e((() => {
          this.session.canHoldSeat() && this.listener.isLive() && (console.warn("The game server went silent, reconnecting"), this.onConnectionDropped(TT, "silent"), TT.leave(!1))
        }));
        TT.onStateChange((() => {
          IT.heard()
        }));
        const iT = oT => {
          oT.persisted || TT.leave(!0)
        };
        window.addEventListener("pagehide", iT), TT.Rm(((oT, IT) => {
          if (TT === this.attachedRoom && this.listener.isLive()) return (0, kT.g)(oT) && this.session.canHoldSeat() ? (console.warn(`Connection to the game server dropped with code ${oT}, reconnecting`), this.listener.onDropped(oT, IT), void this.onConnectionDropped(TT, String(oT))) : void this.listener.onRoomLeft(oT, IT)
        })), this.attachedRoom = TT, this.detachRoomListeners = () => {
          oT(), IT.dispose(), window.removeEventListener("pagehide", iT)
        }
      }
      dispose() {
        this.detachRoom(), this.session.leave(), this.setSuspended(!1)
      }
      setSuspended(TT) {
        TT !== this.suspended && (this.suspended = TT, (0, iT.setConnectionSuspended)(TT), (0, BT.e)().client.itemDropPrediction.setSuspended(TT))
      }
      detachRoom() {
        var TT;
        null === (TT = this.detachRoomListeners) || void 0 === TT || TT.call(this), this.detachRoomListeners = null, this.attachedRoom = null
      }
      onConnectionDropped(TT, oT) {
        (0, wo.i)("disconnect", "Left room", oT), this.isResuming() || (this.droppedAt = Date.now()), this.detachRoom(), iT.offlineInputReplay.onConnectionLost(), this.setSuspended(!0), this.session.onConnectionLost(TT.reconnectionToken)
      }
      resumeOnRoom(TT) {
        if (!this.listener.isLive()) return console.warn("Left the game while reconnecting, leaving the resumed room"), TT.leave(!0), void this.dispose();
        console.log("Reconnected to the game server, waiting for the game to resume"), (0, co.s)(), iT.offlineInputReplay.onConnectionReplaced(), this.msgHandler.fFT(TT), this.listener.onReconnected(TT), this.attachRoom(TT)
      }
    }
    var eo = IT(3022),
      Ro = IT(3028),
      uo = IT(1293),
      vo = IT(4181),
      Eo = IT(2710),
      fo = IT(1071),
      Co = IT(36628),
      jo = IT(38020),
      Jo = IT(38029),
      Uo = IT(3210),
      ao = IT(38038),
      Yo = IT(1658),
      Qo = IT(2472);

    function Oo(TT) {
      var oT, IT;
      if ("object" !== typeof TT || null === TT) return {
        errType: typeof TT
      };
      const iT = TT;
      return {
        errType: null !== (oT = null === (IT = TT.constructor) || void 0 === IT ? void 0 : IT.name) && void 0 !== oT ? oT : "",
        errName: "string" === typeof iT.name ? iT.name : "",
        eventType: "string" === typeof iT.type ? iT.type : "",
        errStack: "string" === typeof iT.stack ? iT.stack.split("\n").slice(1).join(" | ") : ""
      }
    }

    function Ho(TT) {
      if ("undefined" !== typeof ProgressEvent && TT instanceof ProgressEvent) return !0;
      if (!(TT instanceof Error)) return !1;
      const oT = TT.code;
      return "ServerError" === TT.name && void 0 === oT || "AbortError" === TT.name || "seat reservation expired." === TT.message || "early_leave" === TT.message
    }(0, KT.m)((TT => {
      (0, wo.i)("wasm_net", TT)
    }));
    let no = !0;

    function qo() {
      no = !1
    }
    class Zo {
      constructor(TT) {
        this.gameNameWithVariation = void 0, this.lobbyName = void 0, this.colyClient = void 0, this.userContext = void 0, this.joinedAt = null, this.checkSendPath = () => {}, this.FL = void 0, this.connectionResume = void 0, this.incomingMsgInitialisor = void 0, this.gameNameWithVariation = TT.gameNameWithVariation, this.lobbyName = TT.lobbyName, this.colyClient = TT.colyClient, this.userContext = TT.userContext
      }
      async connectToServer(TT, oT, IT) {
        AT.e.reset(), TT.qJ = {
          [TT.ZJ]: {}
        }, TT.KTT = void 0, (0, co.s)(), (0, BT.e)().removeAllEntityNames(), (0, BT.e)().setEntityName(TT.ZJ, this.userContext.getPlayerName()), (0, uo.o)({
          lobbyName: this.lobbyName
        }), console.log("Waiting for clientConnection passed promise to resolve");
        const WT = (0, Yo.e)();
        console.log("joining server with game", this.gameNameWithVariation, "lobbyName", this.lobbyName);
        const XT = performance.now(),
          FT = (0, Jo.e)(this.userContext, (() => {
            const {
              roomName: iT,
              joinOptions: zT
            } = (0, hT.i)(this.userContext, this.gameNameWithVariation, this.lobbyName, oT, (TT => Eo.e.isUsingCustomGameTexturePack(TT)));
            return zT.joinAdHold = WT, zT.renderBackend = (0, Qo.e)(TT.FK), (0, jo.g)((() => this.colyClient.joinOrCreate(iT, zT)), IT)
          }));
        return rT.h.XM("loadingScreenState", "loadingPage:joiningLobby"), await FT.then((oT => {
          if (this.joinedAt = performance.now(), this.FL = TT, WT) {
            const TT = (0, Yo.o)((() => {
              oT.send(zT.g)
            }));
            oT.Rm(TT), (0, iT.onGameResetOnce)(TT)
          }
          const IT = new MT(oT);
          this.connectionResume = new mo((TT => this.colyClient.reconnect(TT)), (oT => {
            TT.OE(oT)
          }), IT, {
            isLive: () => (0, BT.e)().client.getMsgHandler() === IT,
            onDropped: (TT, oT) => {
              (0, Ro.h)(TT) || this.logUnrecognisedConnectionLoss(TT, void 0, {
                site: "drop",
                closeReason: null !== oT && void 0 !== oT ? oT : "",
                sinceJoined: this.sinceJoined()
              })
            },
            onRoomLeft: (TT, oT) => {
              this.onRoomLeft(TT, oT)
            },
            onReconnected: TT => {
              this.incomingMsgInitialisor.fFT(TT), this.checkSendPath = (0, Co.i)(IT, TT, KT.q)
            },
            onGaveUp: (TT, oT) => {
              this.onResumeGaveUp(TT, oT)
            }
          }), this.connectionResume.attachRoom(oT), (0, iT.onGameResetOnce)((() => {
            this.connectionResume.dispose()
          }));
          const kT = IT.send,
            XT = IT.Am,
            FT = IT.iIT.send,
            ST = IT.iIT.Am,
            DT = IT.vFT;
          this.checkSendPath = (0, Co.i)(IT, oT, KT.q);
          const LT = setInterval((() => {
            kT === IT.send && XT === IT.Am && FT === IT.iIT.send && ST === IT.iIT.Am && DT === IT.vFT || qo(), this.checkSendPath()
          }), 1e4);
          return (0, iT.onGameResetOnce)((() => {
            clearInterval(LT)
          })), {
            success: !0,
            successDetails: IT
          }
        })).catch((oT => {
          if (IT.aborted && oT === (0, Uo.f)(IT)) return {
            success: !1,
            failDetails: {
              reason: "Left the game while it loaded",
              requiresRefresh: !1,
              canReconnect: !1
            }
          };
          if (oT instanceof ao.f) return console.warn("Seat request timed out", this.lobbyName, this.gameNameWithVariation), {
            success: !1,
            failDetails: {
              reason: oT.message,
              requiresRefresh: !1,
              canReconnect: !1,
              gameServerUnreachable: "timedOut"
            }
          };
          TT.CK(`Failed to connect to bloxd room, check your internet connection. lobbyName: ${this.lobbyName}, gameNameWithVariation: ${this.gameNameWithVariation} code: ${oT.code}\n`, oT);
          const iT = oT.code;
          return iT === kT.b.serverUpdating.code ? (this.goToUpdateWaiting(), {
            success: !1,
            failDetails: {
              reason: kT.b.serverUpdating.text,
              requiresRefresh: !1,
              canReconnect: !0,
              goesToUpdateWaiting: !0
            }
          }) : {
            success: !1,
            failDetails: {
              ...this.onConnectionToServerLost(iT, oT.message, {
                site: "join",
                sinceJoinStart: (0, Ro.b)(performance.now() - XT),
                ...Oo(oT)
              }, Ho(oT)),
              rematch: (0, jo.e)(oT)
            }
          }
        }))
      }
      setupServerListeners(TT, oT, IT) {
        rT.h.XM("loadingScreenState", "loadingPage:loadingPlayerInfo"), this.incomingMsgInitialisor = new ro(this.gameNameWithVariation, oT.iIT, TT, this.connectionResume), this.incomingMsgInitialisor.setupStateReplicationHandlers();
        const zT = oT.UFT();
        this.incomingMsgInitialisor.setupOnMessageListeners(zT, IT), (0, iT.onConnectionToServerReady)(zT, oT), zT.finishRegistration()
      }
      dispose() {
        this.connectionResume.dispose()
      }
      onResumeGaveUp(TT, oT) {
        (0, fo.JK)(new Error("Reconnect failed"), {
          ...(0, eo.j)(oT),
          game: this.gameNameWithVariation
        }), (0, wo.i)("disconnect", "Reconnect failed", oT.reason), (0, BT.e)().client.leaveGameUnwanted({
          reason: {
            translationKey: "general:lostConnection"
          },
          canReconnect: !TT,
          canPlayAgain: TT,
          requiresRefresh: !1,
          automaticallyReconnect: !1
        }), (0, Io.navigatePreserveSearch)("/")
      }
      sinceJoined() {
        return null === this.joinedAt ? "" : (0, Ro.b)(performance.now() - this.joinedAt)
      }
      onRoomLeft(TT, oT) {
        var IT;
        if (TT === kT.b.gameOrPluginKick.code) return;
        if (console.log(`Left room with code ${TT}`), TT === kT.b.serverUpdating.code) return (0, wo.i)("disconnect", "Left room", "serverUpdating"), (0, BT.e)().client.leaveGame(this.getUpdateWaitingUrl()), void this.goToUpdateWaiting();
        this.FL.CK(`Kicked from server with code ${TT}`, new Error);
        const iT = Object.keys(kT.b).find((oT => kT.b[oT].code === TT));
        (0, wo.i)("disconnect", "Left room", null !== iT && void 0 !== iT ? iT : String(TT));
        const zT = this.onConnectionToServerLost(TT, void 0, {
          site: "leave",
          closeReason: null !== oT && void 0 !== oT ? oT : "",
          sinceJoined: this.sinceJoined()
        });
        (0, BT.e)().client.leaveGameUnwanted({
          reason: `You have disconnected from the server.\n${zT.reason}`,
          canReconnect: zT.canReconnect,
          requiresRefresh: zT.requiresRefresh,
          automaticallyReconnect: null !== (IT = zT.automaticallyReconnect) && void 0 !== IT && IT
        }), (0, Io.navigatePreserveSearch)("/")
      }
      getUpdateWaitingUrl() {
        return (0, vo.E)(this.gameNameWithVariation, this.lobbyName)
      }
      goToUpdateWaiting() {
        (0, Io.navigatePreserveSearch)(this.getUpdateWaitingUrl())
      }
      onConnectionToServerLost(TT, oT, IT) {
        var iT;
        let zT = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        if (null !== (iT = oT) && void 0 !== iT && iT.endsWith(kT.k) && (this.userContext.invalidateTrafficCode(), oT = oT.replace(kT.k, "")), TT === kT.b.outdatedVersion.code) return console.error("Outdated client with version ", WT.c, ", refreshing page"), (0, gT.reloadBloxd)(), {
          reason: "Outdated client",
          requiresRefresh: !0,
          canReconnect: !1
        };
        if (TT === kT.b.loadRecaptchaError.code) return console.error("Load recaptcha error, refreshing page"), (0, gT.reloadBloxd)(), {
          reason: "Failed to load recaptcha",
          requiresRefresh: !0,
          canReconnect: !1
        };
        for (const WT in kT.b) {
          const {
            code: IT,
            text: iT,
            canReconnect: zT
          } = kT.b[WT];
          if (IT === TT) {
            console.log("matched known error", TT, "leaving game");
            return {
              reason: "" !== iT ? iT : oT || `Code: ${TT}`,
              requiresRefresh: !1,
              canReconnect: zT,
              automaticallyReconnect: IT === kT.b.customGameUpdated.code || IT === kT.b.duplicateLobbyNameError.code
            }
          }
        }
        return console.log("Didn't match known error, leaving game"), (0, Ro.e)(TT) || zT ? console.warn("Connection lost", TT, oT) : this.logUnrecognisedConnectionLoss(TT, oT, IT), {
          reason: `Either your internet isn't working or this is a bug.\nCode: ${TT}`,
          requiresRefresh: !1,
          canReconnect: !1,
          gameServerUnreachable: zT ? "failed" : void 0
        }
      }
      logUnrecognisedConnectionLoss(TT, oT, IT) {
        (0, fo.JK)(new Error("Unrecognised connection loss"), {
          code: String(TT),
          cause: null !== oT && void 0 !== oT ? oT : "",
          ...IT,
          game: this.gameNameWithVariation,
          ...(0, Ro.k)()
        })
      }
    }
  },
  37982: (TT, oT, IT) => {
    IT.d(oT, {
      d: () => yI,
      e: () => oi
    });
    var iT, zT, kT, WT, XT, BT, FT, ST, DT, LT, xT, cT, KT, MT, rT, AT, gT, hT, wT, mT, eT, RT, uT, vT, ET, fT, CT, jT, JT, UT, aT, YT, QT, OT, HT, nT, qT, ZT, lT, sT, tT, GT, pT, bT, yT, NT, PT, dT, VT, To, oo, Io, io, zo, ko, Wo, Xo, Bo, Fo, So, Do, Lo, xo, co, Ko, Mo, ro, Ao, go, ho, wo, mo, eo, Ro, uo, vo, Eo, fo, Co, jo, Jo, Uo, ao, Yo, Qo, Oo, Ho, no, qo, Zo, so, to, Go, po, bo, yo, No, Po, Vo, TI = IT(16),
      oI = IT(36497),
      II = IT(37994),
      iI = IT(37997),
      zI = IT(8521),
      kI = IT(609),
      WI = IT(601),
      XI = IT(35732);
    let BI = (iT = (0, zI.type)("number"), zT = (0, zI.type)("number"), kT = (0, zI.type)("number"), WT = (0, zI.type)("number"), XT = (0, zI.type)("number"), BT = (0, zI.type)("number"), FT = (0, zI.type)("string"), ST = class extends zI.Schema {
        constructor() {
          super(...arguments), (0, II.d)(this, "id", DT, this), (0, II.d)(this, "amount", LT, this), (0, II.d)(this, "x", xT, this), (0, II.d)(this, "y", cT, this), (0, II.d)(this, "z", KT, this), (0, II.d)(this, "size", MT, this), (0, II.d)(this, "attributes", rT, this)
        }
      }, DT = (0, iI.e)(ST.prototype, "id", [iT], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return 0
        }
      }), LT = (0, iI.e)(ST.prototype, "amount", [zT], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return 0
        }
      }), xT = (0, iI.e)(ST.prototype, "x", [kT], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return 0
        }
      }), cT = (0, iI.e)(ST.prototype, "y", [WT], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return 0
        }
      }), KT = (0, iI.e)(ST.prototype, "z", [XT], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return 0
        }
      }), MT = (0, iI.e)(ST.prototype, "size", [BT], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return 1
        }
      }), rT = (0, iI.e)(ST.prototype, "attributes", [FT], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return "{}"
        }
      }), ST),
      FI = (AT = (0, zI.type)("string"), gT = (0, zI.type)("string"), hT = class extends zI.Schema {
        constructor() {
          super(...arguments), (0, II.d)(this, "itemName", wT, this), (0, II.d)(this, "enchantmentTier", mT, this)
        }
      }, wT = (0, iI.e)(hT.prototype, "itemName", [AT], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: null
      }), mT = (0, iI.e)(hT.prototype, "enchantmentTier", [gT], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: null
      }), hT),
      SI = (eT = (0, zI.type)("string"), RT = (0, zI.type)("string"), uT = (0, zI.type)("number"), vT = (0, zI.type)("number"), ET = (0, zI.type)("number"), fT = (0, zI.type)("float32"), CT = (0, zI.type)("float32"), jT = (0, zI.type)("float32"), JT = (0, zI.type)("string"), UT = (0, zI.type)(["number"]), aT = (0, zI.type)("boolean"), YT = class extends zI.Schema {
        constructor() {
          super(...arguments), (0, II.d)(this, "type", QT, this), (0, II.d)(this, "name", OT, this), (0, II.d)(this, "x", HT, this), (0, II.d)(this, "y", nT, this), (0, II.d)(this, "z", qT, this), (0, II.d)(this, "xRotation", ZT, this), (0, II.d)(this, "yRotation", lT, this), (0, II.d)(this, "zRotation", sT, this), (0, II.d)(this, "followingEId", tT, this), (0, II.d)(this, "followingOffset", GT, this), (0, II.d)(this, "shouldMatchFollowingEntityRotation", pT, this)
        }
      }, QT = (0, iI.e)(YT.prototype, "type", [eT], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: null
      }), OT = (0, iI.e)(YT.prototype, "name", [RT], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return ""
        }
      }), HT = (0, iI.e)(YT.prototype, "x", [uT], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return 0
        }
      }), nT = (0, iI.e)(YT.prototype, "y", [vT], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return 0
        }
      }), qT = (0, iI.e)(YT.prototype, "z", [ET], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return 0
        }
      }), ZT = (0, iI.e)(YT.prototype, "xRotation", [fT], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return 0
        }
      }), lT = (0, iI.e)(YT.prototype, "yRotation", [CT], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return 0
        }
      }), sT = (0, iI.e)(YT.prototype, "zRotation", [jT], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return 0
        }
      }), tT = (0, iI.e)(YT.prototype, "followingEId", [JT], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: null
      }), GT = (0, iI.e)(YT.prototype, "followingOffset", [UT], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return new zI.ArraySchema(0, 0, 0)
        }
      }), pT = (0, iI.e)(YT.prototype, "shouldMatchFollowingEntityRotation", [aT], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return !0
        }
      }), YT),
      DI = (bT = (0, zI.type)("float32"), yT = (0, zI.type)("float32"), NT = (0, zI.type)("boolean"), PT = (0, zI.type)("boolean"), dT = (0, zI.type)("float32"), VT = (0, zI.type)("boolean"), To = (0, zI.type)("string"), oo = (0, zI.type)("string"), Io = (0, zI.type)("string"), io = (0, zI.type)("string"), zo = (0, zI.type)(["number"]), ko = (0, zI.type)("number"), Wo = (0, zI.type)({
        map: FI
      }), Xo = class extends SI {
        constructor() {
          super(...arguments), (0, II.d)(this, "scale", Bo, this), (0, II.d)(this, "speed", Fo, this), (0, II.d)(this, "jumping", So, this), (0, II.d)(this, "crouching", Do, this), (0, II.d)(this, "cameraPitch", Lo, this), (0, II.d)(this, "armSwinging", xo, this), (0, II.d)(this, "heldItemName", co, this), (0, II.d)(this, "heldItemEnchantmentTier", Ko, this), (0, II.d)(this, "pose", Mo, this), (0, II.d)(this, "ridingVehicleEId", ro, this), (0, II.d)(this, "meshOffset", Ao, this), (0, II.d)(this, "baseRenderHeading", go, this), (0, II.d)(this, "armour", ho, this)
        }
      }, Bo = (0, iI.e)(Xo.prototype, "scale", [bT], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return 1
        }
      }), Fo = (0, iI.e)(Xo.prototype, "speed", [yT], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return 0
        }
      }), So = (0, iI.e)(Xo.prototype, "jumping", [NT], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return !1
        }
      }), Do = (0, iI.e)(Xo.prototype, "crouching", [PT], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return !1
        }
      }), Lo = (0, iI.e)(Xo.prototype, "cameraPitch", [dT], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return 0
        }
      }), xo = (0, iI.e)(Xo.prototype, "armSwinging", [VT], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return !1
        }
      }), co = (0, iI.e)(Xo.prototype, "heldItemName", [To], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: null
      }), Ko = (0, iI.e)(Xo.prototype, "heldItemEnchantmentTier", [oo], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: null
      }), Mo = (0, iI.e)(Xo.prototype, "pose", [Io], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return "standing"
        }
      }), ro = (0, iI.e)(Xo.prototype, "ridingVehicleEId", [io], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return null
        }
      }), Ao = (0, iI.e)(Xo.prototype, "meshOffset", [zo], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return new zI.ArraySchema(0, 0, 0)
        }
      }), go = (0, iI.e)(Xo.prototype, "baseRenderHeading", [ko], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return 0
        }
      }), ho = (0, iI.e)(Xo.prototype, "armour", [Wo], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return new zI.MapSchema
        }
      }), Xo),
      LI = (wo = (0, zI.type)("string"), mo = (0, zI.type)("string"), eo = (0, zI.type)("string"), Ro = (0, zI.type)("uint8"), uo = class extends DI {
        constructor() {
          super(...arguments), (0, II.d)(this, "variation", vo, this), (0, II.d)(this, "ownerDbId", Eo, this), (0, II.d)(this, "metaInfo", fo, this), (0, II.d)(this, "aiState", Co, this)
        }
      }, vo = (0, iI.e)(uo.prototype, "variation", [wo], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return "default"
        }
      }), Eo = (0, iI.e)(uo.prototype, "ownerDbId", [mo], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return null
        }
      }), fo = (0, iI.e)(uo.prototype, "metaInfo", [eo], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return ""
        }
      }), Co = (0, iI.e)(uo.prototype, "aiState", [Ro], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return 0
        }
      }), uo);
    jo = (0, zI.type)("string"), Jo = (0, zI.type)("string"), Uo = (0, zI.type)("string"), ao = (0, zI.type)("string"), Yo = class extends SI {
      constructor() {
        super(...arguments), (0, II.d)(this, "meshKind", Qo, this), (0, II.d)(this, "meshOpts", Oo, this), (0, II.d)(this, "pose", Ho, this), (0, II.d)(this, "leaderboardTop", no, this)
      }
    }, Qo = (0, iI.e)(Yo.prototype, "meshKind", [jo], {
      configurable: !0,
      enumerable: !0,
      writable: !0,
      initializer: null
    }), Oo = (0, iI.e)(Yo.prototype, "meshOpts", [Jo], {
      configurable: !0,
      enumerable: !0,
      writable: !0,
      initializer: null
    }), Ho = (0, iI.e)(Yo.prototype, "pose", [Uo], {
      configurable: !0,
      enumerable: !0,
      writable: !0,
      initializer: null
    }), no = (0, iI.e)(Yo.prototype, "leaderboardTop", [ao], {
      configurable: !0,
      enumerable: !0,
      writable: !0,
      initializer: null
    });

    function xI(TT) {
      return Object.keys(zI.Metadata.getFields(TT))
    }
    const cI = xI(LI);
    for (const Ii of kI.n)
      if (!cI.includes(Ii)) throw new Error(`Mob Schema is missing a networked property: "${Ii}"`);
    const KI = xI((qo = (0, zI.type)("string"), Zo = (0, zI.type)("float32"), so = (0, zI.type)("float32"), to = (0, zI.type)("float32"), Go = (0, zI.type)("float32"), po = class extends SI {
      constructor() {
        super(...arguments), (0, II.d)(this, "soundName", bo, this), (0, II.d)(this, "volume", yo, this), (0, II.d)(this, "refDistance", No, this), (0, II.d)(this, "maxHearDist", Po, this), (0, II.d)(this, "rate", Vo, this)
      }
    }, bo = (0, iI.e)(po.prototype, "soundName", [qo], {
      configurable: !0,
      enumerable: !0,
      writable: !0,
      initializer: function() {
        return ""
      }
    }), yo = (0, iI.e)(po.prototype, "volume", [Zo], {
      configurable: !0,
      enumerable: !0,
      writable: !0,
      initializer: function() {
        return 1
      }
    }), No = (0, iI.e)(po.prototype, "refDistance", [so], {
      configurable: !0,
      enumerable: !0,
      writable: !0,
      initializer: function() {
        return XI.k
      }
    }), Po = (0, iI.e)(po.prototype, "maxHearDist", [to], {
      configurable: !0,
      enumerable: !0,
      writable: !0,
      initializer: function() {
        return XI.c
      }
    }), Vo = (0, iI.e)(po.prototype, "rate", [Go], {
      configurable: !0,
      enumerable: !0,
      writable: !0,
      initializer: function() {
        return 1
      }
    }), po));
    for (const Ii of WI.f)
      if (!KI.includes(Ii)) throw new Error(`AudioEntity Schema is missing a replicated property: "${Ii}"`);
    var MI = IT(37418),
      rI = IT(1214),
      AI = IT(618),
      gI = IT(37212),
      hI = IT(3811),
      wI = IT(314),
      mI = IT(36175),
      eI = IT(37111),
      RI = IT(2026),
      uI = IT(36094),
      vI = IT(37451),
      EI = IT(36224),
      fI = IT(319),
      CI = IT.n(fI),
      jI = IT(36888),
      JI = IT(36030),
      UI = IT(37034),
      aI = IT(37120);
    class YI {
      constructor(TT, oT) {
        this.bloxd = TT, this.eId = oT, this.FL = void 0, this.colyseusEntity = void 0, this.canSeeSub = void 0, this.canAttackSub = void 0, this.interactableSub = void 0, this.overlayColourSub = void 0, this.opacitySub = void 0, this.zIndexSub = void 0, this.multilineTextBoxSub = void 0, this.previousHidingMeshManagerState = void 0, this.meshKind = void 0, this.meshOpts = void 0, this.leaderboardTop = void 0, this.meshRebuildQueued = !1, this.Ec = !1, this.FL = TT.FL
      }
      initClient(TT) {
        var oT, IT, iT;
        this.colyseusEntity = TT, this.meshKind = TT.meshKind, this.meshOpts = TT.meshOpts, this.leaderboardTop = TT.leaderboardTop, this.FL.qm.add([TT.x, TT.y, TT.z], 1, 1, null, null, !1, !1, this.eId), this.FL.qm.eJ(this.eId, "smoothToServerPos");
        const zT = "Person" === this.meshKind;
        this.FL.qm.eJ(this.eId, "meshRotation", {
          isServerControlled: !0,
          ...zT ? {
            defaultRotationsPerSecond: .5
          } : {},
          childrenNodeParams: zT ? [{
            nodeName: "HeadMesh",
            softTolerance: vI.g,
            hardTolerance: null
          }] : []
        }), this.updateHidingMeshMgr(), this.canSeeSub = TI.h.subscribe(`otherEntitySettings|${this.eId}|canSee`, (TT => {
          this.updateHidingMeshMgr()
        }));
        const kT = () => {
          const TT = this.FL.qm.pTT(this.eId);
          if (!TT) return;
          const oT = (0, EI.i)(this.eId);
          if ("number" === typeof TT.WJ) {
            var IT, iT, zT, kT;
            const WT = null === (IT = (0, RI.g)("head", null === (zT = this.getSpec()) || void 0 === zT || null === (kT = zT.opts.textures) || void 0 === kT ? void 0 : kT.head)) || void 0 === IT || null === (iT = IT.personModel) || void 0 === iT ? void 0 : iT.fullBody;
            return this.FL.FK.iJ.setPickable(TT.WJ, oT && !WT), void(0, JI.updatePersonAttachmentPickability)(this.FL, this.eId, oT)
          }
          const WT = TT.mesh;
          if (WT)
            for (const XT of [WT, ...WT.getChildMeshes(!1)]) "dK" in XT && !XT.name.startsWith("Cape|") && (XT.dK = oT)
        };
        this.canAttackSub = TI.h.subscribe(`otherEntitySettings|${this.eId}|canAttack`, kT), this.interactableSub = TI.h.subscribe(`otherEntitySettings|${this.eId}|interactable`, kT), this.overlayColourSub = TI.h.subscribe(`otherEntitySettingsClientifiedEId|${this.eId}|overlayColour`, (TT => {
          this.updateOverlayColour(TT)
        })), this.opacitySub = TI.h.subscribe(`otherEntitySettingsClientifiedEId|${this.eId}|opacity`, (TT => {
          this.updateOpacity(TT)
        })), this.zIndexSub = TI.h.subscribe(`otherEntitySettingsClientifiedEId|${this.eId}|zIndex`, (TT => {
          this.updateZIndex(TT)
        }));
        const WT = this.FL.qJ[this.FL.ZJ][this.eId];
        this.updateOverlayColour(null !== (oT = null === WT || void 0 === WT ? void 0 : WT.overlayColour) && void 0 !== oT ? oT : null), this.updateOpacity(null !== (IT = null === WT || void 0 === WT ? void 0 : WT.opacity) && void 0 !== IT ? IT : 1), this.updateZIndex(null !== (iT = null === WT || void 0 === WT ? void 0 : WT.zIndex) && void 0 !== iT ? iT : 0), this.multilineTextBoxSub = (0, uI.m)(this.FL, this.eId)
      }
      onChangeClient(TT, oT) {
        if ("xRotation" === TT || "yRotation" === TT || "zRotation" === TT)(0, uI.n)(this.FL, this.eId, TT, oT);
        else if ("pose" === TT) {
          const TT = this.FL.qm.ToT(this.eId);
          TT && (TT.pose = oT || "standing")
        } else "meshKind" === TT || "meshOpts" === TT ? (this[TT] = oT, this.queueMeshRebuild()) : "name" === TT && "" !== oT ? this.updateHidingMeshMgr() : "leaderboardTop" === TT && (this.leaderboardTop = oT, TI.h.XM(`leaderboardTop|${this.eId}`, oT))
      }
      disposeClient() {
        this.Ec = !0, this.FL.qm.deleteEntity(this.eId), TI.h.unsubscribe(this.canSeeSub), TI.h.unsubscribe(this.canAttackSub), TI.h.unsubscribe(this.interactableSub), TI.h.unsubscribe(this.overlayColourSub), TI.h.unsubscribe(this.opacitySub), TI.h.unsubscribe(this.zIndexSub), TI.h.unsubscribe(this.multilineTextBoxSub)
      }
      getCurrentHidingMeshMgrState() {
        var TT, oT;
        return {
          canSee: null !== (TT = null === (oT = this.FL.qJ[this.FL.ZJ][this.eId]) || void 0 === oT ? void 0 : oT.canSee) && void 0 !== TT && TT,
          name: this.colyseusEntity.name,
          meshKind: this.meshKind,
          meshOpts: this.meshOpts
        }
      }
      updateHidingMeshMgr() {
        var TT, oT, IT;
        const {
          FL: iT
        } = this, {
          qm: zT
        } = iT, kT = this.getCurrentHidingMeshMgrState();
        if ((0, wI.Vd)(this.previousHidingMeshManagerState, kT)) return;
        if (this.previousHidingMeshManagerState = kT, zT.RJ(this.eId, "hidingMeshManager"), null === (TT = iT.qJ[iT.ZJ][this.eId]) || void 0 === TT || !TT.canSee) return;
        const WT = this.getSpec();
        if (!WT) return;
        const {
          type: XT,
          opts: BT
        } = WT;
        "Person" === XT && (BT.textures = (0, RI.l)(BT.textures)), BT.eId = this.eId, zT.eJ(this.eId, "hidingMeshManager", {
          addMeshComponent: () => {
            var TT, oT, IT;
            "Leaderboard" === XT && (BT.leaderboardTop = this.leaderboardTop);
            const kT = this.bloxd.client.meshCreator.getEntityMesh(XT, BT, (TT => {
              var oT, IT;
              if ("number" === typeof TT) {
                var zT, kT, WT;
                const oT = iT.FK.iJ;
                oT.setEntityId(TT, this.eId);
                const IT = "Person" === XT && (null === (zT = (0, RI.g)("head", null === (WT = BT.textures) || void 0 === WT ? void 0 : WT.head)) || void 0 === zT || null === (kT = zT.personModel) || void 0 === kT ? void 0 : kT.fullBody);
                return void oT.setPickable(TT, (0, EI.i)(this.eId) && !IT)
              }
              const FT = TT;
              for (const XT of [FT, ...FT.getChildMeshes(!1)]) void 0 === XT.dK || XT.name.startsWith("Cape|") || (XT.dK = (0, EI.i)(this.eId), XT.metadata ??= new iT.FK.VK, XT.metadata.eId = this.eId);
              this.updateOpacity(null !== (oT = null === (IT = iT.qJ[iT.ZJ][this.eId]) || void 0 === IT ? void 0 : IT.opacity) && void 0 !== oT ? oT : 1)
            }));
            if (!kT) return;
            const {
              WJ: WT,
              mesh: FT,
              meshOffset: ST,
              nameYOffset: DT,
              modelLoaded: LT
            } = kT;
            null === LT || void 0 === LT || LT.then((() => {
              var TT;
              (null === (TT = zT.pTT(this.eId)) || void 0 === TT ? void 0 : TT.mesh) === FT && (this.previousHidingMeshManagerState = null, this.updateHidingMeshMgr())
            }));
            const xT = null === WT ? null : iT.FK.iJ.sIT(WT, 0);
            if (zT.eJ(this.eId, zT.names.mesh, {
                WJ: WT,
                BIT: xT,
                mesh: FT,
                ZWT: !1,
                DIT: "Leaderboard" !== XT,
                offset: ST.slice(),
                qWT: "ParticleEmitter" === XT && BT.followTargetMeshOffset ? TT => {
                  var oT;
                  CI().copy(TT, ST);
                  const IT = null === (oT = zT.HoT(this.eId)) || void 0 === oT ? void 0 : oT.Ac,
                    iT = void 0 === IT ? null : zT.ToT(IT);
                  if (iT) {
                    var kT, WT;
                    const oT = this.bloxd.getEntityHeading(null !== (kT = iT.ridingVehicleEId) && void 0 !== kT ? kT : IT, !0),
                      zT = Math.sin(oT),
                      XT = Math.cos(oT);
                    TT[0] += iT.meshOffset[0] * XT + iT.meshOffset[2] * zT, TT[1] += iT.meshOffset[1], TT[2] += iT.meshOffset[2] * XT - iT.meshOffset[0] * zT;
                    const BT = null !== (WT = iT.ridingVehicleEId) && void 0 !== WT ? WT : null;
                    null !== BT && (0, aI.d)(this.FL, BT, TT)
                  }
                } : null
              }), "Person" === XT) {
              var cT, KT, MT, rT;
              zT.eJ(this.eId, zT.names.meshAttachments, {
                personFullBody: null !== (cT = null === (KT = (0, RI.g)("head", null === (rT = BT.textures) || void 0 === rT ? void 0 : rT.head)) || void 0 === KT || null === (MT = KT.personModel) || void 0 === MT ? void 0 : MT.fullBody) && void 0 !== cT && cT
              });
              for (const TT of rI.v) {
                var AT, gT, hT;
                const oT = null === (AT = BT.textures) || void 0 === AT ? void 0 : AT[TT];
                oT && null !== (gT = (0, RI.g)(TT, oT)) && void 0 !== gT && null !== (hT = gT.attachments) && void 0 !== hT && hT.length && eI.b.Player.meshApi.updatePlayerCosmetic(this.eId, WT, TT, oT)
              }
              zT.eJ(this.eId, zT.names.moveState), zT.eJ(this.eId, "updateWalkingState", {
                WJ: WT,
                BIT: xT,
                walkingLegSwingDuration: vI.p
              }), zT.eJ(this.eId, "humanoidMesh", {
                WJ: WT,
                BIT: xT,
                heldItemPositionParams: {},
                maxWalkingAngleOverride: null
              }), zT.eJ(this.eId, "animator", {
                WJ: WT,
                BIT: xT,
                modelLifeformType: "Player"
              }), UI.g.hasAnimation("Person") && zT.eJ(this.eId, "rigAnimation", {
                target: "Person",
                WJ: WT
              }), zT.ToT(this.eId).pose = this.colyseusEntity.pose || "standing"
            } else if ("BloxdBlock" === XT && null !== WT) {
              zT.eJ(this.eId, "animator", {
                WJ: WT,
                BIT: xT,
                modelLifeformType: null
              });
              const TT = (0, gI.w)(BT.blockName);
              null !== TT && zT.eJ(this.eId, "rigAnimation", {
                target: TT,
                WJ: WT
              })
            }
            zT.rXT(this.eId, "entityName", {
              name: this.colyseusEntity.name,
              nameYOffset: DT
            }), this.bloxd.setEntityName(this.eId, this.colyseusEntity.name), !0 === BT.autoRotate && (zT.RJ(this.eId, "meshRotation"), zT.eJ(this.eId, "autoRotate"));
            const {
              lineToEId: wT
            } = BT;
            (0, AI.K)(wT) || zT.eJ(this.eId, "lineToEntity", {
              lineToEId: wT
            });
            const mT = iT.qJ[iT.ZJ][this.eId];
            this.updateOverlayColour(null !== (TT = null === mT || void 0 === mT ? void 0 : mT.overlayColour) && void 0 !== TT ? TT : null), this.updateOpacity(null !== (oT = null === mT || void 0 === mT ? void 0 : mT.opacity) && void 0 !== oT ? oT : 1), this.updateZIndex(null !== (IT = null === mT || void 0 === mT ? void 0 : mT.zIndex) && void 0 !== IT ? IT : 0)
          },
          removeMeshComponent: () => {
            "Person" !== XT && "BloxdBlock" !== XT || zT.RJ(this.eId, "rigAnimation"), zT.RJ(this.eId, zT.names.mesh), zT.xTT(this.eId, zT.names.meshAttachments) && zT.RJ(this.eId, zT.names.meshAttachments), zT.RJ(this.eId, "entityName"), zT.RJ(this.eId, "autoRotate"), zT.RJ(this.eId, "lineToEntity"), "Person" === XT ? (zT.RJ(this.eId, zT.names.moveState), zT.RJ(this.eId, "updateWalkingState"), zT.RJ(this.eId, "humanoidMesh"), zT.RJ(this.eId, "animator")) : "BloxdBlock" === XT && zT.RJ(this.eId, "animator")
          },
          hideDist: null !== (oT = BT.hideDist) && void 0 !== oT ? oT : 80,
          movingHideDist: null !== (IT = BT.hideDist) && void 0 !== IT ? IT : 120,
          displayOutsideLoadedChunk: BT.hideDist > 100,
          immediatelyUpdate: !0,
          WS: "BloxdBlock" === XT ? BT.blockName : XT
        })
      }
      queueMeshRebuild() {
        this.meshRebuildQueued || (this.meshRebuildQueued = !0, queueMicrotask((() => {
          this.meshRebuildQueued = !1, this.Ec || this.updateHidingMeshMgr()
        })))
      }
      getSpec() {
        return (0, hI.l)({
          meshKind: this.meshKind,
          meshOpts: this.meshOpts
        })
      }
      updateOverlayColour(TT) {
        var oT, IT;
        if ("Person" !== this.meshKind) return;
        let iT = new mI.b(0, 0, 0, 0);
        if (null !== TT) {
          const oT = (0, wI.X)(TT);
          iT = new mI.b(oT[0] / 255, oT[1] / 255, oT[2] / 255, .5)
        }
        const zT = null !== (oT = null === (IT = this.FL.qm.pTT(this.eId)) || void 0 === IT ? void 0 : IT.WJ) && void 0 !== oT ? oT : null;
        null !== zT && eI.b.Player.meshApi.updateMeshOverlayColour(zT, iT)
      }
      updateZIndex(TT) {
        var oT;
        if ("Person" !== this.meshKind) return;
        const IT = null === (oT = this.FL.qm.pTT(this.eId)) || void 0 === oT ? void 0 : oT.WJ;
        "number" === typeof IT && this.FL.FK.iJ.setRenderingGroupId(IT, TT)
      }
      updateOpacity(TT) {
        const oT = this.FL.qm.pTT(this.eId);
        oT && ("number" !== typeof oT.WJ ? oT.mesh && "ParticleEmitter" !== this.meshKind && (0, jI.d)(oT.mesh, TT) : eI.b.Player.meshApi.updateMeshOpacity(oT.WJ, TT))
      }
    }
    var QI = IT(37989);
    class OI {
      constructor(TT, oT) {
        this.eId = oT, this.FL = void 0, this.schema = void 0, this.FL = TT.FL
      }
      initClient(TT) {
        this.schema = TT, this.FL.qm.add([TT.x, TT.y, TT.z], .1, .1, null, null, !1, !1, this.eId), this.FL.qm.eJ(this.eId, "smoothToServerPos"), QI.c.add(this.eId, this.copyOpts())
      }
      onChangeClient(TT) {
        WI.f.includes(TT) && QI.c.update(this.eId, this.copyOpts())
      }
      disposeClient() {
        QI.c.remove(this.eId), this.FL.qm.deleteEntity(this.eId)
      }
      copyOpts() {
        const {
          soundName: TT,
          volume: oT,
          refDistance: IT,
          maxHearDist: iT,
          rate: zT
        } = this.schema;
        return {
          soundName: TT,
          volume: oT,
          refDistance: IT,
          maxHearDist: iT,
          rate: zT
        }
      }
    }
    var HI = IT(3251),
      nI = IT(35722),
      qI = IT(5975),
      ZI = IT(36729),
      lI = IT(2465),
      sI = IT(37151),
      tI = IT(8471),
      GI = IT(37462),
      pI = IT(36704),
      bI = IT(2788);
    class yI {
      constructor(TT, oT) {
        let IT = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 4,
          iT = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : () => performance.now();
        this.iIT = TT, this.FL = oT, this.setupBudgetMs = IT, this.now = iT, this.createStateCallbacks = void 0, this.roomStateCallbacks = void 0, this.allItems = {}, this.detachers = new Map, this.deferredSetups = new Map, this.queuedSetups = new Map, this.promotedSetups = new Set, this.setupBudgetLeftMs = void 0, this.lastRefillMs = void 0, this.roomState = void 0, this.Ec = !1, this.onFrame = () => {
          this.setUpQueuedEntities(!0)
        }, this.pw = () => {
          this.setUpQueuedEntities(this.now() - this.lastRefillMs > 100)
        }, this.setUpPromoted = () => {
          for (const TT of this.promotedSetups) {
            this.promotedSetups.delete(TT);
            const oT = this.queuedSetups.get(TT);
            oT && (this.queuedSetups.delete(TT), this.timedSetup(oT, TT))
          }
        }, this.createStateCallbacks = (0, tI.getStateCallbacks)(TT), this.roomStateCallbacks = this.createStateCallbacks(TT.state), this.roomState = TT.state, this.setupBudgetLeftMs = IT, this.lastRefillMs = iT()
      }
      setup() {
        this.setupEntityHandlers(), this.setupItemHandlers(), this.iIT.onStateChange(this.setUpPromoted), this.FL.on("beforeInputs", this.onFrame), this.FL.on("dD", this.pw)
      }
      setUpQueuedEntities(TT) {
        var oT;
        if ((null === (oT = (0, lI.e)().client.getMsgHandler()) || void 0 === oT ? void 0 : oT.iIT) !== this.iIT) return this.FL.off("beforeInputs", this.onFrame), this.FL.off("dD", this.pw), this.queuedSetups.clear(), void this.promotedSetups.clear();
        if (TT && (this.setupBudgetLeftMs = this.setupBudgetMs, this.lastRefillMs = this.now()), this.setUpPromoted(), 0 !== this.queuedSetups.size)
          for (CI().copy(NI, this.FL.qm.Wm(this.FL.ZJ)); this.setupBudgetLeftMs > 0;) {
            const TT = this.nearestQueued(NI);
            if (null === TT) return;
            this.setUpIfQueued(TT), this.setUpPromoted()
          }
      }
      nearestQueued(TT) {
        let oT = null,
          IT = 1 / 0;
        return this.queuedSetups.forEach(((iT, zT) => {
          const kT = function(TT, oT) {
            return (oT.x - TT[0]) ** 2 + (oT.y - TT[1]) ** 2 + (oT.z - TT[2]) ** 2
          }(TT, iT);
          (null === oT || kT < IT) && (oT = zT, IT = kT)
        })), oT
      }
      setUpOrQueue(TT, oT) {
        0 === this.queuedSetups.size && this.setupBudgetLeftMs > 0 || this.mustSetUpNow(TT, oT) ? this.timedSetup(TT, oT) : this.queuedSetups.set(oT, TT)
      }
      mustSetUpNow(TT, oT) {
        const IT = this.FL.KTT;
        if (oT === IT) return !0;
        const iT = this.roomState.entities.get(IT);
        return !(!iT || iT.ridingVehicleEId !== oT && iT.followingEId !== oT) || (PI(TT.type) === MI.e || (0, lI.e)().getFollowingEntities(oT).length > 0)
      }
      setUpIfQueued(TT) {
        const oT = this.queuedSetups.get(TT);
        oT && (this.queuedSetups.delete(TT), this.timedSetup(oT, TT))
      }
      promoteIfQueued(TT) {
        null !== TT && this.queuedSetups.has(TT) && this.promotedSetups.add(TT)
      }
      timedSetup(TT, oT) {
        const IT = this.now();
        this.setupEntity(TT, oT), this.setupBudgetLeftMs -= this.now() - IT
      }
      setupEntityHandlers() {
        this.roomStateCallbacks.entities.Om(((TT, oT) => {
          this.FL.KTT ? this.setUpOrQueue(TT, oT) : this.deferEntitySetupUntilInitInfo(TT, oT)
        })), this.roomStateCallbacks.entities.zC(((TT, oT) => {
          const IT = this.deferredSetups.get(oT);
          IT && (TI.h.unsubscribe(IT), this.deferredSetups.delete(oT)), this.queuedSetups.delete(oT), this.detach(oT), (0, lI.e)().client.disposeEntity(oT)
        }))
      }
      deferEntitySetupUntilInitInfo(TT, oT) {
        const IT = TI.h.Hr("initInfoReceived", (() => {
          this.deferredSetups.delete(oT), this.setUpOrQueue(TT, oT)
        }));
        this.deferredSetups.set(oT, IT), (0, HI.onGameResetOnce)((() => {
          this.deferredSetups.get(oT) === IT && (TI.h.unsubscribe(IT), this.deferredSetups.delete(oT)), (0, lI.e)().updatePositionAndPhysics(this.FL.ZJ, {
            type: qI.r.DEFAULT,
            tier: null
          }, !0), (0, lI.e)().takeHeldPlayerBodySize(this.FL.ZJ);
          const TT = this.FL.qm.jTT(this.FL.ZJ);
          TT && (TT.movementType = qI.o.NORMAL)
        }))
      }
      setupEntity(TT, oT) {
        const IT = oT === this.FL.KTT;
        if (IT)(0, lI.e)().client.Ql(this.FL.ZJ, null, null);
        else {
          const {
            type: IT
          } = TT, iT = PI(IT);
          if (void 0 === iT) return void
          function(TT, oT) {
            const IT = String(TT);
            if (dI.has(IT)) return;
            dI.add(IT);
            const iT = IT.length > 80 ? `${IT.slice(0,80)}...` : IT,
              zT = `No client handler for entity type ${JSON.stringify(iT)}, so entity ${oT} is not set up`;
            console.warn(zT), (0, bI.i)("uncaught", zT, "unknown_entity_type")
          }(IT, oT);
          (0, lI.e)().client.Ql(oT, TT, new iT((0, lI.e)(), oT, IT))
        }
        const iT = this.createStateCallbacks(TT);
        if (IT) return this.setupMapSchemaCallbacks(oT, TT, iT, "armour"), this.setupScalarField(oT, TT, iT, "scale"), this.setupScalarField(oT, TT, iT, "ridingVehicleEId"), this.setupScalarField(oT, TT, iT, "followingEId"), this.setupScalarField(oT, TT, iT, "followingOffset"), void this.setupScalarField(oT, TT, iT, "shouldMatchFollowingEntityRotation");
        for (const zT of xI(TT.constructor)) TT[zT] instanceof zI.MapSchema ? this.setupMapSchemaCallbacks(oT, TT, iT, zT) : this.setupScalarField(oT, TT, iT, zT)
      }
      setupMapSchemaCallbacks(TT, oT, IT, iT) {
        const zT = IT[iT],
          kT = new Map;
        zT.Om(((IT, zT) => {
          if (this.onEntityFieldChange(TT, oT, iT, {
              key: zT,
              value: IT
            }), !(IT instanceof zI.Schema)) return;
          const WT = this.createStateCallbacks(IT),
            XT = [];
          for (const kT of xI(IT.constructor)) XT.push(this.listenForFutureChanges(WT, kT, (() => {
            this.onEntityFieldChange(TT, oT, iT, {
              key: zT,
              value: IT
            })
          })));
          kT.set(zT, (() => {
            for (const TT of XT) TT()
          }))
        })), zT.zC(((IT, zT) => {
          var WT;
          null === (WT = kT.get(zT)) || void 0 === WT || WT(), kT.delete(zT), this.onEntityFieldChange(TT, oT, iT, {
            key: zT,
            value: null
          })
        })), this.addDetacher(TT, (() => {
          for (const TT of kT.values()) TT();
          kT.clear()
        }))
      }
      setupScalarField(TT, oT, IT, iT) {
        this.onEntityFieldChange(TT, oT, iT, oT[iT]);
        const zT = this.listenForFutureChanges(IT, iT, (IT => {
          this.onEntityFieldChange(TT, oT, iT, IT)
        }));
        this.addDetacher(TT, zT)
      }
      addDetacher(TT, oT) {
        let IT = this.detachers.get(TT);
        IT || (IT = [], this.detachers.set(TT, IT)), IT.push(oT)
      }
      detach(TT) {
        for (const IT of null !== (oT = this.detachers.get(TT)) && void 0 !== oT ? oT : []) {
          var oT;
          IT()
        }
        this.detachers.delete(TT)
      }
      listenForFutureChanges(TT, oT, IT) {
        return TT.listen(oT, IT, !1)
      }
      onEntityFieldChange(TT, oT, IT, iT) {
        switch (IT) {
          case "ridingVehicleEId": {
            this.promoteIfQueued(iT);
            const oT = this.FL.qm.ToT((0, nI.d)(TT));
            oT && (oT.ridingVehicleEId = iT);
            break
          }
          case "armour":
            this.handleArmourChange(TT, iT);
            break;
          case "followingEId":
            this.promoteIfQueued(iT), this.handleFollowingEIdChange(TT, oT, iT);
            break;
          case "xRotation":
          case "yRotation":
          case "zRotation":
            this.handleRotationChange(TT, IT, iT);
            break;
          case "scale":
            this.handleScaleChange(TT, iT);
            break;
          case "baseRenderHeading":
            this.handleBaseRenderHeadingChange(TT, iT);
            break;
          case "followingOffset":
            this.handleFollowingOffsetChange(TT, iT);
            break;
          case "shouldMatchFollowingEntityRotation":
            this.handleShouldMatchFollowingEntityRotationChange(TT, iT);
            break;
          case "x":
          case "y":
          case "z":
            return void this.handlePositionChange(TT, IT, iT)
        }(0, lI.e)().client.updateEntityField(TT, IT, iT)
      }
      handleArmourChange(TT, oT) {
        var IT, iT;
        const {
          key: zT,
          value: kT
        } = oT;
        (0, eI.y)(TT, zT, null !== (IT = null === kT || void 0 === kT ? void 0 : kT.itemName) && void 0 !== IT ? IT : null, null !== (iT = null === kT || void 0 === kT ? void 0 : kT.enchantmentTier) && void 0 !== iT ? iT : null)
      }
      handleFollowingEIdChange(TT, oT, IT) {
        const iT = (0, nI.d)(TT),
          zT = iT === this.FL.ZJ;
        if (this.FL.qm.RJ(iT, this.FL.qm.names.ku), IT) this.FL.qm.RJ(iT, "smoothToServerPos"), this.FL.qm.eJ(iT, this.FL.qm.names.ku, {
          Ac: (0, nI.d)(IT),
          offset: Array.from(oT.followingOffset),
          noT: oT.shouldMatchFollowingEntityRotation,
          soT: !0,
          toT: (TT, iT) => {
            if (CI().copy(TT, oT.followingOffset), oT.ridingVehicleEId === IT) {
              const oT = (0, nI.d)(IT),
                zT = (0, lI.e)().getEntityHeading(oT, iT);
              CI().ei(TT, TT, CI().ZERO, zT)
            }
          }
        });
        else if (!zT) {
          this.FL.qm.xTT(iT, "smoothToServerPos") || this.FL.qm.eJ(iT, "smoothToServerPos");
          const TT = this.FL.qm.getState(iT, "smoothToServerPos"),
            oT = this.FL.qm.Gl(iT).position;
          (0, pI.setServerPosition)(TT, oT[0], oT[1], oT[2])
        }
      }
      handleRotationChange(TT, oT, IT) {
        const iT = "xRotation" === oT ? 0 : "yRotation" === oT ? 1 : 2;
        for (const zT of (0, lI.e)().getFollowingEntities(TT)) {
          const TT = this.FL.qm.getState(zT, "meshRotation"),
            oT = this.FL.qm.HoT(zT);
          TT && oT.noT && (TT.serverSetRotation[iT] = IT)
        }
      }
      handleScaleChange(TT, oT) {
        const IT = (0, nI.d)(TT);
        if (TI.h.XM(`entityScale|${IT}`, oT), IT === this.FL.ZJ) {
          var iT;
          (0, lI.e)().removeFromEyeHeightCache(IT);
          const TT = this.FL.qm.jTT(this.FL.ZJ),
            oT = null !== (iT = null === TT || void 0 === TT ? void 0 : TT.physicsState) && void 0 !== iT ? iT : {
              type: qI.r.DEFAULT,
              tier: null
            };
          return void(0, lI.e)().updatePositionAndPhysics(this.FL.ZJ, oT, !1)
        }
        const zT = (0, lI.e)().getLifeformType(IT);
        if (null === zT) return;
        const {
          physicsBodyWidth: kT,
          physicsBodyHeight: WT
        } = (0, GI.d)(oT, zT);
        this.FL.qm.QoT(IT, kT, WT, kT)
      }
      handleBaseRenderHeadingChange(TT, oT) {
        const IT = this.FL.qm.getState(TT, "meshRotation");
        IT && (IT.baseRenderRotation[1] = oT);
        for (const iT of (0, lI.e)().getFollowingEntities(TT)) {
          const TT = this.FL.qm.getState(iT, "meshRotation"),
            IT = this.FL.qm.HoT(iT);
          TT && IT.noT && (TT.baseRenderRotation[1] = oT)
        }
      }
      handleFollowingOffsetChange(TT, oT) {
        const IT = this.FL.qm.HoT((0, nI.d)(TT));
        if (IT && IT.offset) {
          const TT = oT ? Array.from(oT) : CI().ZERO;
          IT.offset[0] = TT[0], IT.offset[1] = TT[1], IT.offset[2] = TT[2]
        }
      }
      handleShouldMatchFollowingEntityRotationChange(TT, oT) {
        const IT = this.FL.qm.HoT((0, nI.d)(TT));
        IT && (IT.noT = null === oT || void 0 === oT || oT)
      }
      handlePositionChange(TT, oT, IT) {
        if (this.FL.qm.xTT(TT, "smoothToServerPos")) {
          const iT = this.FL.qm.getState(TT, "smoothToServerPos");
          (0, pI.setServerPositionAxis)(iT, VI[oT], IT)
        }
      }
      setupItemHandlers() {
        this.roomStateCallbacks.items.Om(((TT, oT) => {
          this.allItems[oT] = TT, (0, ZI.i)(this.FL, oT, [TT.x, TT.y, TT.z], TT.id, {
            amount: TT.amount,
            attributes: JSON.parse(TT.attributes),
            Vi: (0, oI.e)(this.FL).cantPickUpItem(oT),
            size: TT.size,
            predictedAt: (0, lI.e)().client.itemDropPrediction.onServerItemAdded(oT)
          });
          const IT = this.createStateCallbacks(TT);
          for (const iT of xI(BI)) this.onItemFieldChange(oT, iT, TT[iT]), this.addDetacher(oT, this.listenForFutureChanges(IT, iT, (TT => {
            this.onItemFieldChange(oT, iT, TT)
          })))
        })), this.roomStateCallbacks.items.zC(((TT, oT) => {
          delete this.allItems[oT], this.detach(oT), (0, lI.e)().client.itemDropPrediction.onServerItemRemoved(oT), this.FL.qm.xTT(oT, this.FL.qm.names.itemState) && this.FL.qm.deleteEntity(oT), (0, oI.e)(this.FL).disposeEntity(oT)
        }))
      }
      onItemFieldChange(TT, oT, IT) {
        if (oT in VI) {
          if (this.FL.qm.xTT(TT, "itemState")) {
            const iT = this.FL.qm.getState(TT, "smoothToServerPos");
            (0, pI.setServerPositionAxis)(iT, VI[oT], IT), (0, lI.e)().client.itemDropPrediction.onServerItemMoved(TT)
          }
          return
        }
        if (!this.FL.qm.xTT(TT, "itemState")) return;
        const iT = this.FL.qm.getState(TT, "itemState");
        "amount" === oT && IT !== iT.amount && (iT.creationTime = Date.now()), iT[oT] = "attributes" === oT ? JSON.parse(IT) : IT
      }
      dispose() {
        if (!this.Ec) {
          this.Ec = !0, this.FL.off("beforeInputs", this.onFrame), this.FL.off("dD", this.pw), this.queuedSetups.clear(), this.promotedSetups.clear();
          for (const TT of this.deferredSetups.values()) TI.h.unsubscribe(TT);
          this.deferredSetups.clear(), this.FL.qm.RJ(this.FL.ZJ, this.FL.qm.names.ku);
          for (const TT in this.allItems) this.FL.qm.deleteEntity(TT), delete this.allItems[TT];
          for (const TT of [...this.detachers.keys()]) this.detach(TT);
          (0, oI.e)(this.FL).clear();
          for (const TT of (0, lI.e)().client.iterateEntityIds())(0, lI.e)().client.disposeEntity(TT)
        }
      }
    }
    const NI = [0, 0, 0];

    function PI(TT) {
      if ("string" !== typeof TT) return;
      const oT = TT.indexOf("|"),
        IT = -1 === oT ? TT : TT.slice(0, oT),
        iT = oi();
      return Object.hasOwn(iT, IT) ? iT[IT] : void 0
    }
    const dI = new Set;
    const VI = {
      x: 0,
      y: 1,
      z: 2
    };
    let Ti = null;

    function oi() {
      return null !== Ti || (Ti = {
        ...Object.fromEntries(WI.h.map((TT => {
          const {
            WS: oT
          } = (0, sI.c)(TT);
          return [TT, oT]
        }))),
        Pebble: MI.e,
        Snowball: MI.e,
        "Snowball Launcher": MI.e,
        "Reinforced Pebble": MI.e,
        Bullet: MI.e,
        "Reinforced Ball": MI.e,
        Ball: MI.e,
        Mango: MI.e,
        "Moonstone Orb": MI.e,
        ...Object.fromEntries(kI.o.map((TT => [(0, wI.Qb)(TT), MI.e]))),
        Arrow: MI.e,
        "Arrow of Speed": MI.e,
        "Arrow of Poison": MI.e,
        "Arrow of Slowness": MI.e,
        "Arrow of Weakness": MI.e,
        "Arrow of Knockback": MI.e,
        "Arrow of Strength": MI.e,
        "Arrow of Invisibility": MI.e,
        "Arrow of Jumping": MI.e,
        "Arrow of Defense": MI.e,
        "Arrow of Instant Healing": MI.e,
        "Arrow of Instant Damage": MI.e,
        "Arrow of Regeneration": MI.e,
        "Arrow of Haste": MI.e,
        "Arrow of Shield": MI.e,
        "Arrow of Double Jump": MI.e,
        "Arrow of Heat Resistance": MI.e,
        "Arrow of X-Ray Vision": MI.e,
        "Arrow of Mining Yield": MI.e,
        "Arrow of Brain Rot": MI.e,
        "Arrow of Milk": MI.e,
        Fireball: MI.e,
        "Bouncy Bomb": MI.e,
        RPG: MI.e,
        "Obby RPG": MI.e,
        "Super RPG": MI.e,
        "Grenade Launcher": MI.e,
        Iceball: MI.e,
        Coconut: MI.e,
        "Splash Speed Potion": MI.e,
        "Splash Defense Potion": MI.e,
        "Splash Strength Potion": MI.e,
        "Splash Invisibility Potion": MI.e,
        "Splash Jump Potion": MI.e,
        "Splash Knockback Potion": MI.e,
        "Splash Poison Potion": MI.e,
        "Splash Speed Potion II": MI.e,
        "Splash Defense Potion II": MI.e,
        "Splash Strength Potion II": MI.e,
        "Splash Jump Potion II": MI.e,
        "Splash Knockback Potion II": MI.e,
        "Splash Poison Potion II": MI.e,
        "Splash Slowness Potion": MI.e,
        "Splash Slowness Potion II": MI.e,
        "Splash Weakness Potion": MI.e,
        "Splash Weakness Potion II": MI.e,
        "Splash Milk Potion": MI.e,
        "Splash Instant Damage Potion": MI.e,
        "Splash Instant Damage Potion II": MI.e,
        "Splash Instant Healing Potion": MI.e,
        "Splash Instant Healing Potion II": MI.e,
        "Splash Regeneration Potion": MI.e,
        "Splash Regeneration Potion II": MI.e,
        "Splash Haste Potion": MI.e,
        "Splash Haste Potion II": MI.e,
        "Splash Shield Potion": MI.e,
        "Splash Shield Potion II": MI.e,
        "Splash Double Jump Potion": MI.e,
        "Splash Heat Resistance Potion": MI.e,
        "Splash X-Ray Vision Potion": MI.e,
        "Splash Mining Yield Potion": MI.e,
        "Splash Mining Yield Potion II": MI.e,
        "Splash Brain Rot Potion": MI.e,
        "Yellow Paintball Gun": MI.e,
        "White Paintball Gun": MI.e,
        "Red Paintball Gun": MI.e,
        "Purple Paintball Gun": MI.e,
        "Pink Paintball Gun": MI.e,
        "Orange Paintball Gun": MI.e,
        "Magenta Paintball Gun": MI.e,
        "Lime Paintball Gun": MI.e,
        "Light Gray Paintball Gun": MI.e,
        "Light Blue Paintball Gun": MI.e,
        "Green Paintball Gun": MI.e,
        "Gray Paintball Gun": MI.e,
        "Cyan Paintball Gun": MI.e,
        "Brown Paintball Gun": MI.e,
        "Blue Paintball Gun": MI.e,
        "Black Paintball Gun": MI.e,
        "Yellow Heavy Paintball Gun": MI.e,
        "White Heavy Paintball Gun": MI.e,
        "Red Heavy Paintball Gun": MI.e,
        "Purple Heavy Paintball Gun": MI.e,
        "Pink Heavy Paintball Gun": MI.e,
        "Orange Heavy Paintball Gun": MI.e,
        "Magenta Heavy Paintball Gun": MI.e,
        "Lime Heavy Paintball Gun": MI.e,
        "Light Gray Heavy Paintball Gun": MI.e,
        "Light Blue Heavy Paintball Gun": MI.e,
        "Green Heavy Paintball Gun": MI.e,
        "Gray Heavy Paintball Gun": MI.e,
        "Cyan Heavy Paintball Gun": MI.e,
        "Brown Heavy Paintball Gun": MI.e,
        "Blue Heavy Paintball Gun": MI.e,
        "Black Heavy Paintball Gun": MI.e,
        "Toxin Ball": MI.e,
        "Splash Aura XP Potion": MI.e,
        "Splash Aura XP Potion II": MI.e,
        "Arrow of Aura XP": MI.e,
        Firecracker: MI.e,
        "Rainbow Firecracker": MI.e,
        "White Firecracker": MI.e,
        "Orange Firecracker": MI.e,
        "Magenta Firecracker": MI.e,
        "Light Blue Firecracker": MI.e,
        "Yellow Firecracker": MI.e,
        "Lime Firecracker": MI.e,
        "Pink Firecracker": MI.e,
        "Gray Firecracker": MI.e,
        "Light Gray Firecracker": MI.e,
        "Cyan Firecracker": MI.e,
        "Purple Firecracker": MI.e,
        "Blue Firecracker": MI.e,
        "Brown Firecracker": MI.e,
        "Green Firecracker": MI.e,
        "Red Firecracker": MI.e,
        "Black Firecracker": MI.e,
        "Firecracker Pebble": MI.e,
        "Rainbow Firecracker Pebble": MI.e,
        "White Firecracker Pebble": MI.e,
        "Orange Firecracker Pebble": MI.e,
        "Magenta Firecracker Pebble": MI.e,
        "Light Blue Firecracker Pebble": MI.e,
        "Yellow Firecracker Pebble": MI.e,
        "Lime Firecracker Pebble": MI.e,
        "Pink Firecracker Pebble": MI.e,
        "Gray Firecracker Pebble": MI.e,
        "Light Gray Firecracker Pebble": MI.e,
        "Cyan Firecracker Pebble": MI.e,
        "Purple Firecracker Pebble": MI.e,
        "Blue Firecracker Pebble": MI.e,
        "Brown Firecracker Pebble": MI.e,
        "Green Firecracker Pebble": MI.e,
        "Red Firecracker Pebble": MI.e,
        "Black Firecracker Pebble": MI.e,
        "Blinding Pebble": MI.e,
        Poop: MI.e,
        "Wood Boomerang": MI.e,
        "Stone Boomerang": MI.e,
        "Iron Boomerang": MI.e,
        "Gold Boomerang": MI.e,
        "Diamond Boomerang": MI.e,
        "Amethite Boomerang": MI.e,
        "Magmasteel Boomerang": MI.e,
        "Rubellite Boomerang": MI.e,
        "Serpentite Boomerang": MI.e,
        "Moonstone Boomerang": MI.e,
        "67 Base Projectile": MI.e,
        "67 Boosted Projectile": MI.e,
        "Capitano Grenade": MI.e,
        "Scatter Pellet": MI.e,
        "Lucky Bomb": MI.e,
        "Unlucky Bomb": MI.e,
        "Swap Orb": MI.e,
        Mesh: YI,
        AudioEntity: OI
      }), Ti
    }
  },
  37953: (TT, oT, IT) => {
    IT.d(oT, {
      b: () => kT,
      e: () => WT
    });
    var iT = IT(618),
      zT = IT(36665);
    const kT = 4e4;
    class WT {
      constructor() {
        let TT = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Date.now;
        this.now = TT, this.editedAt = new Map, this.lastChunkX = NaN, this.lastChunkY = NaN, this.lastChunkZ = NaN, this.lastChunkId = ""
      }
      noteEdit(TT, oT, IT) {
        const kT = (0, iT.N)(TT),
          WT = (0, iT.N)(oT),
          XT = (0, iT.N)(IT),
          BT = this.now();
        if (kT !== this.lastChunkX || WT !== this.lastChunkY || XT !== this.lastChunkZ) {
          this.lastChunkX = kT, this.lastChunkY = WT, this.lastChunkZ = XT, this.lastChunkId = (0, zT.d)(kT, WT, XT), this.editedAt.delete(this.lastChunkId), this.editedAt.set(this.lastChunkId, BT);
          for (const [TT, oT] of this.editedAt) {
            if (oT >= BT - 3e5) break;
            this.editedAt.delete(TT)
          }
        } else this.editedAt.set(this.lastChunkId, BT)
      }
      chunksEditedSince(TT) {
        const oT = [];
        for (const [IT, iT] of this.editedAt) iT >= TT && oT.push(IT);
        return oT
      }
    }
  },
  38042: (TT, oT, IT) => {
    IT.d(oT, {
      b: () => Fo,
      c: () => Oo,
      d: () => Eo,
      f: () => Ho
    });
    var iT = IT(3251),
      zT = IT(8193),
      kT = IT(35676),
      WT = IT(1398),
      XT = IT(35706),
      BT = IT(37989),
      FT = IT(37933),
      ST = IT(3330),
      DT = IT(36819),
      LT = IT(1214),
      xT = IT(306),
      cT = IT(16),
      KT = IT(1770),
      MT = IT(90),
      rT = IT(26),
      AT = IT(1794),
      gT = IT(1724),
      hT = IT(2595);
    class wT {
      constructor(TT) {
        this.storeForMs = TT, this.clicks = new hT.c
      }
      click() {
        this.clicks.enqueue(Date.now());
        const TT = Date.now() - this.storeForMs;
        for (; this.clicks.size > 0 && this.clicks.peek() < TT;) this.clicks.dequeue()
      }
      getNumClicksInMs(TT) {
        let oT = 0;
        return this.clicks.forEach((IT => {
          IT > Date.now() - TT && oT++
        })), oT
      }
      getMaxClickSeparationInMs(TT) {
        if (0 === this.clicks.size) return this.storeForMs;
        let oT = 0,
          IT = Date.now() - TT;
        this.clicks.forEach((iT => {
          iT < Date.now() - TT || (oT = Math.max(oT, Math.abs(iT - IT)), IT = iT)
        }));
        const iT = Math.abs(Date.now() - IT);
        return Math.max(oT, iT)
      }
    }
    class mT {
      constructor(TT) {
        this.storeForMs = TT, this.clickDownDurations = new hT.c
      }
      registerClickDownDuration(TT) {
        this.clickDownDurations.enqueue({
          dur: TT,
          atTime: Date.now()
        });
        const oT = Date.now() - this.storeForMs;
        for (; this.clickDownDurations.size > 0 && this.clickDownDurations.peek().atTime < oT;) this.clickDownDurations.dequeue()
      }
      clickDownDurationsCheck(TT) {
        if (TT > this.storeForMs) return console.error("overDuration is greater than storeForMs"), "0:0";
        let oT = 0,
          IT = 0;
        return this.clickDownDurations.forEach((iT => {
          iT.atTime > Date.now() - TT && (oT++, IT = Math.max(IT, iT.dur))
        })), `${oT}:${IT}`
      }
    }
    var eT = IT(35498),
      RT = IT(38044),
      uT = IT(12),
      vT = IT(2465),
      ET = IT(1293),
      fT = IT(37962),
      CT = IT(3964),
      jT = IT(139),
      JT = IT(37158),
      UT = IT(37358),
      aT = IT(618),
      YT = IT(35490),
      QT = IT(8),
      OT = IT(8829),
      HT = IT(1193),
      nT = IT(193),
      qT = IT(38051),
      ZT = IT(38055),
      lT = IT(37188),
      sT = IT(38068),
      tT = IT(37101),
      GT = IT(2956),
      pT = IT(1585),
      bT = IT(35599),
      yT = IT(2541),
      NT = IT(38061),
      PT = IT(36890);
    const dT = {
      forward: "freeCamForward",
      backward: "freeCamBackward",
      left: "freeCamLeft",
      right: "freeCamRight",
      jump: "freeCamUp",
      crouch: "freeCamDown"
    };

    function VT() {
      var TT, oT;
      return !(null === (TT = (0, vT.e)().client) || void 0 === TT || null === (oT = TT.freeCameraController) || void 0 === oT || !oT.movesFly())
    }

    function To(TT) {
      const oT = TT.on.bind(TT);
      TT.on = (TT, IT) => {
        AT.G.has(TT) ? oT(TT, IT) : oT(TT, (oT => {
          var iT;
          return null !== (iT = (0, vT.e)().client) && void 0 !== iT && iT.isReplayMode() ? function(TT) {
            return TT in dT
          }(TT) && VT() ? IT(oT) : void 0 : IT(oT)
        }))
      }
    }
    const oo = 5e3,
      Io = 1;
    let io, zo = Io,
      ko = 0;
    const Wo = !0;
    let Xo = Wo;
    KT.e.subscribe("_ignoreBasicBoards", (TT => {
      Xo = TT
    })), (0, iT.onGameReset)((() => {
      Xo = Wo
    }));
    let Bo = null;
    const Fo = () => Bo;
    let So, Do, Lo;
    var xo, co, Ko, Mo, ro, Ao, go, ho, wo;
    const mo = [2, 0, 1, 8, 22, "a", 9, 7, "e", "f", "d", 255, "length", "b", 38, 4, "undefined", 63, 6, "fromCodePoint", 12, "push", 3, 20, "c", null, 10, 176, "g", 91, 80, 8191, 88, 13, 14, 144, 5, 192, "h", "i", 60, 72, void 0, 165, 156, 177, 130, 204, 158, !1, 100, 82, 246, 234, 207, 47, 64, 46, 223, !0];

    function eo(...TT) {
      return TT[mo[12]] = mo[2], typeof xo[TT[mo[1]]] === mo[16] ? xo[TT[mo[1]]] = function(...TT) {
        for (vo(TT[mo[12]] = mo[2], TT[mo[5]] = '2{;<&_[z=~^3>0S6u9jA@Bog5CO1e$G`:Jtx/h4l|vYbFMaUr7wLX8?N,"QPfyWqI!#Rd(kpVsZm*.T)cH%KinDE}]+', TT[mo[0]] = "" + (TT[mo[1]] || ""), TT[mo[4]] = TT[mo[0]].length, TT[mo[10]] = [], TT[mo[8]] = mo[1], TT[mo[9]] = mo[1], TT[mo[7]] = -mo[2]), TT[mo[3]] = mo[1]; TT[mo[3]] < TT[mo[4]]; TT[mo[3]]++)
          if (TT[mo[6]] = TT[mo[5]].indexOf(TT[mo[0]][TT[mo[3]]]), TT[mo[6]] !== -mo[2])
            if (TT[mo[7]] < mo[1]) TT[mo[7]] = TT[mo[6]];
            else {
              vo(TT[mo[7]] += TT[mo[6]] * mo[29], TT[mo[8]] |= TT[mo[7]] << TT[mo[9]], TT[mo[9]] += (TT[mo[7]] & mo[31]) > mo[32] ? mo[33] : mo[34]);
              do {
                vo(TT[mo[10]].push(TT[mo[8]] & mo[11]), TT[mo[8]] >>= mo[3], TT[mo[9]] -= mo[3])
              } while (TT[mo[9]] > mo[7]);
              TT[mo[7]] = -mo[2]
            } return TT[mo[7]] > -mo[2] && TT[mo[10]].push((TT[mo[8]] | TT[mo[7]] << TT[mo[9]]) & mo[11]), Ro(TT[mo[10]])
      }(co[TT[mo[1]]]) : xo[TT[mo[1]]]
    }

    function Ro(...TT) {
      return TT[mo[12]] = mo[2], typeof Mo !== mo[16] && Mo ? (new Mo).decode(new ro(TT[mo[1]])) : typeof Ao !== mo[16] && Ao ? Ao.from(TT[mo[1]]).toString("utf-8") : wo(TT[mo[1]])
    }

    function uo() {}

    function vo() {
      vo = function() {}
    }

    function Eo(TT) {
      function oT() {
        return TT.qm.eoT(TT.ZJ)
      }
      To(TT.inputs.down), To(TT.inputs.up);
      for (const iT of ["forward", "backward", "left", "right", "sprint", "jump", "crouch"]) {
        const oT = (oT, IT) => {
          var zT, kT;
          if (VT()) {
            var WT;
            const zT = dT[iT];
            var XT, BT;
            if (zT) null === (XT = (0, vT.e)().client) || void 0 === XT || null === (BT = XT.freeCameraController) || void 0 === BT || BT.handlefreeCamKeyPress(zT, oT, IT);
            return void(IT || null !== (WT = (0, vT.e)().client) && void 0 !== WT && WT.isReplayMode() || (TT.qm.foT()[iT] = !1))
          }
          if (null !== (zT = (0, vT.e)().client) && void 0 !== zT && null !== (kT = zT.freeCameraController) && void 0 !== kT && kT.isKeyPressOverriden(oT)) return;
          TT.qm.foT()[iT] = IT
        };
        TT.inputs.down.on(iT, (TT => oT(TT, !0))), TT.inputs.up.on(iT, (TT => oT(TT, !1)))
      }
      TT.inputs.down.on("crouch", (() => {
        if (VT()) return;
        if (!TT.Qm.canCrouch) return;
        const oT = TT.qm.foT();
        uT.c.get("clientEscMenuOptions").crouchIsToggle && (oT.crouchToggled = !oT.crouchToggled && !oT.padSneakToggled), oT.padSneakToggled = !1
      }));
      const IT = () => {
        const TT = oT();
        TT.isGun() && TT.inaccuracyCalculator.jump()
      };
      TT.inputs.down.on("jump", (TT => {
        VT() || (IT(), So(TT))
      }));
      for (const iT of AT.p) TT.inputs.down.on(iT, (TT => {
        var oT, IT;
        null !== (oT = (0, vT.e)().client) && void 0 !== oT && null !== (IT = oT.freeCameraController) && void 0 !== IT && IT.handlefreeCamKeyPress(iT, TT, !0) && (TT.preventDefault(), TT.stopPropagation())
      })), TT.inputs.up.on(iT, (TT => {
        var oT, IT;
        null !== (oT = (0, vT.e)().client) && void 0 !== oT && null !== (IT = oT.freeCameraController) && void 0 !== IT && IT.handlefreeCamKeyPress(iT, TT, !1) && (TT.preventDefault(), TT.stopPropagation())
      }));
      TT.inputs.down.on("recordGame", (() => {
        var TT, oT;
        null === (TT = (0, vT.e)().client) || void 0 === TT || null === (oT = TT.gameRecorder) || void 0 === oT || oT.toggleRecording()
      })), TT.inputs.down.on("recordClip", (() => {
        var TT, oT;
        (0, eT.e)() || null === (TT = (0, vT.e)().client) || void 0 === TT || null === (oT = TT.gameRecorder) || void 0 === oT || oT.saveClip()
      }));
      for (const iT of AT.G) TT.inputs.down.on(iT, (() => {
        var TT;
        if ((0, RT.e)()) return;
        if ("replayViewerOpen" === iT) return void cT.h.XM("replayViewer|requested", "toggle");
        const oT = null === (TT = (0, vT.e)().client) || void 0 === TT ? void 0 : TT.gameReplayer;
        ((0, eT.e)() || null !== oT && void 0 !== oT && oT.isReplayMode()) && (null === oT || void 0 === oT || oT.handleAction(iT))
      }));
      const WT = new wT(3e4),
        DT = new mT(4e4);
      let rT = 0;
      const hT = TT => {
          let oT = 0,
            IT = null;
          const iT = oT => null !== oT && oT === IT && (IT = null, TT(), !0);
          return {
            press: () => (oT++, (0, qT.c)() || (iT(IT), IT = oT), oT),
            owns: TT => TT === IT,
            release: iT
          }
        },
        CT = (TT, IT) => {
          IT && Ho(LT.e.TouchDownFirePrimary), TT ? OT() : ((0, UT.g)(), oT().wIT()), IT || Ho(LT.e.DownFirePrimary), Oo(!0), WT.click();
          const zT = WT.getMaxClickSeparationInMs(3e4) < 1e3 / 30,
            kT = WT.getMaxClickSeparationInMs(1e4) < 20,
            XT = WT.getMaxClickSeparationInMs(4e3) < 1e3 / 70;
          if (zT || kT || XT) {
            let TT;
            if (zT) TT = 30;
            else if (kT) TT = 50;
            else {
              if (!XT) throw new Error("???");
              TT = 70
            }(0, iT.sendColyMessage)(ST.gk, TT)
          }
        },
        jT = hT((() => {
          const TT = Date.now() - rT;
          DT.registerClickDownDuration(TT), oT().AIT(), Ho(LT.e.UpFirePrimary), Oo(!1);
          const IT = DT.clickDownDurationsCheck(4e4);
          (0, iT.sendColyMessage)(ST.yg, IT)
        }));
      let JT = 0;
      TT.inputs.down.on("primary-fire", (function(TT) {
        JT = jT.press(), jT.owns(JT) && (rT = Date.now(), Math.abs(performance.now() - TT.timeStamp) > 5e3 || (CT(TT.altKey, "changedTouches" in TT), So(TT)))
      })), TT.inputs.up.on("primary-fire", (function(TT) {
        jT.release(JT) && So(TT, !0)
      }));
      const aT = () => {
          oT().AFT(), Ho(LT.e.DownFireSecondary), Oo(!0), TT.ITT && !TT.ITT.position && (0, FT.f)()
        },
        YT = hT((() => {
          oT().rIT(), Ho(LT.e.UpFireSecondary), Oo(!1)
        }));
      let QT = 0;
      TT.inputs.down.on("alt-fire", (function(TT) {
        QT = YT.press(), YT.owns(QT) && (aT(), So(TT))
      })), TT.inputs.up.on("alt-fire", (function(TT) {
        YT.release(QT) && So(TT, !0)
      }));
      const OT = () => oT().wFT();
      TT.inputs.down.on("mid-fire", (() => {
        (0, qT.c)() || OT()
      }));
      const sT = TT => {
          (0, iT.sendColyMessage)(ST.Mh, TT, !0)
        },
        io = TT => {
          (0, iT.sendColyMessage)(ST.Nh, {
            zS: TT,
            kS: Wo()
          }, !0)
        };
      for (const iT of ["SpecialAction1", "SpecialAction2"]) TT.inputs.down.on(iT, (() => {
        sT(iT)
      })), TT.inputs.up.on(iT, (() => {
        io(iT)
      }));
      const ko = () => {
        const TT = oT();
        TT.isGun() && TT.reload(Date.now())
      };
      TT.inputs.down.on("ReloadGun", ko);
      const Wo = () => {
        let oT = "a";
        return TT.physics.testSolid.toString().includes("EL") || (oT = "b"), oT
      };
      TT.inputs.down.on("OpenInventory", (TT => {
        TT.preventDefault(), (0, pT.B)(TT, "inventory", (0, ZT.e)((0, vT.i)()))
      })), TT.inputs.bind("ShiftHeld", "ShiftLeft", "ShiftRight");
      const Xo = TT => {
        cT.h.XM("DropItemKeyPressed", TT)
      };
      TT.inputs.down.on("DropItem", (() => {
        Xo(TT.qm.foT().crouch)
      })), TT.inputs.down.on("OpenShop", (oT => {
        (0, eT.e)() || "inGame" === uT.c.get("gameState") && (0, pT.y)(oT, xT.q.SHOP, !(0, zT.e)(TT.Qm.shopInfo))
      })), TT.inputs.down.on("OpenLobbyLeaderboard", (oT => {
        (0, eT.e)() || "inGame" === uT.c.get("gameState") && (0, pT.y)(oT, xT.q.LOBBY_LEADERBOARD, !!TT.Qm.lobbyLeaderboardInfo)
      })), TT.inputs.down.on("HideUi", (() => {
        cT.h.XM("showUi", !1)
      })), TT.inputs.up.on("HideUi", (() => {
        cT.h.XM("showUi", !0)
      }));
      const Fo = TT => {
        0 === TT && (TT = 10), cT.h.XM("setSelectedInventorySlotI", TT - 1), cT.h.XM("numkeyPressed", TT)
      };
      for (let iT = 1; iT <= 10; iT++) TT.inputs.down.on("HotBarSlot" + iT.toString(), (() => {
        Fo(iT)
      }));
      TT.inputs.down.on("OpenTasksAndLeaderboard", (oT => {
        const IT = (0, bT.i)();
        IT ? (0, pT.E)(oT, !0, IT) : (0, pT.B)(oT, "retentionFeatures", !(!TT.Qm._tasks && !TT.Qm._availableLeaderboards))
      })), TT.inputs.down.on("OpenCodeEditor", (oT => {
        (0, pT.E)(oT, (0, fT.c)((0, ET.e)()), (() => {
          cT.h.XM("EditLobbyCode", TT.qm.Wm(TT.ZJ).map(Math.floor))
        }))
      })), TT.inputs.bind("ToggleFullCoordinateOverlay", "F3"), TT.inputs.down.on("ToggleFullCoordinateOverlay", (() => {
        cT.h.XM("toggleFullCoordinateOverlay")
      }));
      const Lo = () => {
        (0, vT.e)().client.cameraController.swapCameraZoom()
      };
      TT.inputs.down.on("SwapCameraZoom", Lo), TT.inputs.down.on("OpenInviteLink", (TT => {
        (0, pT.B)(TT, "inviteLink", MT.featureFlags.canUseInviteLinks)
      })), TT.inputs.bind("Y", "KeyY"), TT.inputs.down.on("Y", (TT => {
        (0, eT.e)() || cT.h.XM("YKeyPressed")
      })), TT.inputs.bind("X", "KeyX"), TT.inputs.down.on("X", (TT => {
        (0, eT.e)() || cT.h.XM("XKeyPressed")
      })), TT.inputs.down.on("OpenEmoteWheel", (() => {
        cT.h.XM("requestEmoteWheelHoldOpen")
      })), TT.inputs.up.on("OpenEmoteWheel", (() => {
        cT.h.XM("requestEmoteWheelHoldRelease")
      })), TT.inputs.down.on("Zoom", (() => {
        if ("inGame" === uT.c.get("gameState")) {
          TT.qm.getState(TT.ZJ, "playerCameraAdjustment").zoomKeyPressed = !0, (0, vT.e)().client.cameraController.handleZoomKeyPressed()
        }
      })), TT.inputs.up.on("Zoom", (() => {
        TT.qm.getState(TT.ZJ, "playerCameraAdjustment").zoomKeyPressed = !1
      })), fo();
      const xo = TT => function() {
        return Do(), TT(...arguments)
      };

      function co(TT) {
        "inGame" !== uT.c.get("gameState") || (0, pT.u)() || (cT.h.XM("ctrlCrouchWithoutFullscreen"), TT.preventDefault())
      }
      Bo = {
        primaryFireDown: xo((() => {
          const TT = jT.press();
          return jT.owns(TT) && (rT = Date.now(), CT(!1, !1)), TT
        })),
        primaryFireUp: xo((TT => {
          jT.release(TT)
        })),
        altFireDown: xo((() => {
          const TT = YT.press();
          return YT.owns(TT) && aT(), TT
        })),
        altFireUp: xo((TT => {
          YT.release(TT)
        })),
        jumpDown: xo(IT),
        specialActionDown: xo(sT),
        specialActionUp: xo(io),
        reloadGun: xo(ko),
        dropItem: xo(Xo),
        swapCameraZoom: xo(Lo),
        pickBlock: xo(OT)
      }, TT.inputs.down.on("ctrlCrouch", co), TT.inputs.up.on("ctrlCrouch", co), TT.inputs.bind("ctrlCrouch", "ControlLeft");
      const Ko = TT => {
        "inGame" === uT.c.get("gameState") && TT.ctrlKey && !(0, pT.u)() && TT.preventDefault()
      };
      document.addEventListener("keydown", Ko), document.addEventListener("keyup", Ko), document.addEventListener("keypress", Ko), TT.inputs.bind("Alt", "AltLeft", "AltRight"), TT.inputs.down.on("Alt", (TT => {
        TT.preventDefault()
      }));
      const Mo = oT => (0, tT.h)(TT, oT),
        ro = oT => (0, tT.j)(TT, oT),
        Ao = [0, 0, 0],
        go = [0, 0, 1];
      TT.on("afterRender", (oT => {
        (0, kT.g)(TT.camera.heading), (0, tT.l)(TT, Ao, go), (0, vT.e)().client.triggerGameCallback("onAfterRender", oT, {
          cameraHeading: TT.camera.heading,
          cameraPitch: TT.camera.pitch,
          cameraPosition: Ao,
          cameraDirection: go,
          tanHalfFovX: (0, tT.c)(TT),
          tanHalfFovY: Math.tan(TT.FK.Uy().fov / 2),
          screenBandPct: {
            x: GT.c,
            y: (0, GT.k)()
          },
          projectWorldPosToScreenPos: Mo,
          projectWorldPosToViewport: ro
        })
      })), (0, yT.r)("look") && (TT.camera.Iq = (0, NT.e)("js"), TT.inputs.iZ = NT.d), (0, yT.r)("remesh") && (0, PT.k)(TT), TT.on("beforeInputs", (() => {
        if ((0, RT.e)()) return TT.inputs.xZ.dx = 0, void(TT.inputs.xZ.dy = 0);
        if (TT.camera.xZ.dx += TT.inputs.xZ.dx, TT.camera.xZ.dy += TT.inputs.xZ.dy, 0 !== TT.inputs.xZ.dx || 0 !== TT.inputs.xZ.dy) {
          TT.qm.getState(TT.ZJ, "playerCameraAdjustment").lastPointerMove = Date.now()
        }
        TT.inputs.xZ.dx = 0, TT.inputs.xZ.dy = 0
      }));
      let ho = 0;
      TT.on("dD", (function(oT) {
        cT.h.XM("noaTick", oT);
        const IT = (0, vT.e)().client;
        if (IT.triggerGameCallback("dD", oT), IT.isClientGameSessionActive()) try {
          BT.c.dD(oT)
        } catch (WT) {
          console.error("Error ticking audio entities", WT)
        }
        if (!TT.qm.woT(TT.ZJ).isAlive) return;
        Date.now() - ho > 9e3 && (! function() {
          const TT = (0, vT.i)();
          "number" === typeof TT.Qm.speedMultiplier && "number" === typeof TT.Qm.jumpAmount && (0, iT.sendColyMessage)(ST.ji, {
            QW: (0, HT.g)(TT.Qm.speedMultiplier),
            OW: (0, HT.c)(TT.Qm.jumpAmount),
            HW: (0, HT.g)(TT.Qm.crouchingSpeed),
            nW: (0, HT.g)(TT.Qm.walkingSpeed),
            qW: (0, HT.g)(TT.Qm.runningSpeed),
            ZW: (0, HT.c)(TT.o4),
            lW: TT.qm.jTT(TT.ZJ).jumpForce,
            sW: TT.qm.Gl(1).width,
            tW: TT.qm.Gl(1).height,
            GW: TT.qm.iH(1).GW
          }, !0)
        }(), ho = Date.now());
        const zT = TT.qm.foT();
        if ((zT.jump || zT.forward || zT.backward || zT.left || zT.right || zT.sprint) && cT.h.XM("usedKeyboard"), TT.qm.zoT(TT.ZJ) && !0 === TT.Qm.canPickUpItems) {
          const oT = TT.qm.Wm(TT.ZJ),
            IT = (0, gT.q)(zo),
            zT = (0, gT.t)(zo),
            kT = [oT[0] - IT, oT[1] - .6 * zT, oT[2] - IT],
            WT = [oT[0] + IT, oT[1] + nT.c.Xw + .6 * zT, oT[2] + IT],
            BT = TT.qm.AXT({
              base: kT,
              max: WT
            }, TT.qm.names.autoRotate),
            DT = TT => {
              const oT = nT.c.droppedBlockSize / 2;
              return [0, 1, 2].every((IT => TT[IT] >= kT[IT] - oT && TT[IT] <= WT[IT] + oT))
            },
            {
              itemDropPrediction: LT
            } = (0, vT.e)().client,
            xT = iT.offlineInputReplay.holdsInput();
          if (BT.length > 0)
            for (const cT of BT) {
              const oT = TT.qm.getState(cT, "itemState");
              if (void 0 === oT || Date.now() - oT.creationTime < 500) continue;
              let IT = cT,
                zT = null;
              if (oT.Vi) {
                const TT = LT.pickupTarget(cT, DT, xT);
                if (null === TT) continue;
                ({
                  AW: IT,
                  wW: zT
                } = TT)
              }
              const kT = TT.qm.getState(IT, "itemState");
              if (kT.Vi && null === zT) continue;
              let WT = 0,
                BT = null,
                KT = !1;
              if (0 === kT.amount) KT = !0;
              else {
                const {
                  amountPickedUp: oT
                } = TT.qm.IoT(TT.ZJ).pickUpItem({
                  name: kT.name,
                  typeObj: kT.typeObj,
                  amount: kT.amount,
                  attributes: kT.attributes
                });
                if (WT = oT, 0 === WT) continue;
                BT = lT.e.pickUp(kT, WT), kT.amount -= WT, kT.amount < 0 ? console.error("Picking up led to less than 0 of item!") : 0 === kT.amount ? KT = !0 : kT.creationTime = Date.now() + oo
              }
              const MT = (0, vT.e)().client.inventoryPrediction.record(BT);
              (0, iT.sendColyMessage)(ST.Eh, {
                AW: null === zT ? IT : "",
                gW: WT,
                hW: FT.e,
                rW: MT,
                wW: zT
              }, !0), KT && (xT && LT.onPickedUpOffline(IT, MT, zT), null === zT && TT.qm.deleteEntity(IT));
              XT.d.play("pickUp", nT.c.pickupSoundVol).rate(1 + Math.random() * nT.c.pickupSoundRateVariation)
            }
        }
        if (!TT.qm.pTT(TT.ZJ)) return;
        const kT = TT.inputs.xZ.QTT;
        if (0 !== kT) {
          const oT = kT > 0 ? 1 : -1;
          TT.inputs.state["mid-fire"] || TT.inputs.state.Alt || !TT.Qm.useInventory ? (TT.inputs.state["mid-fire"] && cT.h.XM("requestEmoteWheelClose"), (0, vT.e)().client.cameraController.handleScrollZoom(oT)) : cT.h.XM("ScrollInventorySlot", oT)
        }
      })), KT.e.subscribe("droppedItemScale", (TT => {
        zo = "number" === typeof TT && isFinite(TT) ? TT : Io
      }))
    }

    function fo() {
      const TT = (0, vT.i)();
      if (TT)
        for (const oT in AT.z) {
          TT.inputs.unbind(oT);
          for (const IT of AT.z[oT]) TT.inputs.bind(oT, IT)
        }
    }
    vo(xo = {}, co = ["]Pnwj(R0@0)flS*lG{", 'wt.`?h>D!",cAO+ou?{', "TWaXMm_0b,`Vf6%17ME&aq)q80)o:p>", "W`DpMhZ|B?6@u1)1Wds:u", '&qgG9p!g>9jG$uoxHL7Vby&GmP3VW%0@Pd)?FqVa$j+.@/<G^"{', "`b`siMiQ:fif:pHlY>J?LaZa$jDC?0T1+tdZj4P$J?WC3SO/Jf~Lhx2", "rbOVj4B$CQ%j~f8x4~o`:U]9j>i6HVQe1hgXIV({9fvrF<d9o{", "3gWen*z8A>_;)kQv@$&_", 'Yd#=WfUqUBioe1sC;B?&Ys?|z0#s,1TOvh4Nbsx"^!$!a02/+lk&Awbq[', "%@[X{V9H9~", "9hx.|7r;", "<q?7S4]9@IzLoyKvp!zJB", '[?2mG?i|hQa9"r`gBgW`G', '<7h`F,L0Ij&;)Op5)sD&lyY58?2Uvu"Y"!tLJ7fQ<?|rIK>OXOgeMml{', 'z"qe~H|XsSr*D;', "l~=T[)d[1SL", 'nC{?rm"gzQ?e_VFO/rdw=)`vo0ssgpoe8>c[', "c<N*Pa@XIjGz^H`h2>uTGTY>N@|", "<#vmon7AF9d8l;|h6~e.L%bUujRBl%2GiMrs0NSQVQ,cHVW9Gbl&)W80/0", "ZP,s;H6v5@eNsrLv", "RL`*}4I>vQ?ei6Eo|!G&9N@=;~", 'Wd9:qiZ[]Q8slO!5"~<_ayWQd"8(aQmCN9~GftEz3@<V+;/j1aX^}XWDUq9t{', '"St:/T:;I~*c4;cOq[X.j(c>=QjGX1_A,|_wuNWc2jNXqS=', "FOHLeP+c(0K6W0}Yfph^FLf5$juGf<`hX>=[;HSXdAf", '~7Wzts&=9"cR/PH|R`nz^W$$y3', "TPS~g4IQEQKky0kj%!4zSH7v?AZ=f6r16ON*rLNg59@)ZHhC;Bl7R89UkQE:{", 'u>Mz1x_z~S9(,5Exb[*8/dc|7?C9YCDoLpxV4n`(mPSNxk"$WSv11', '"S.`.(%X%>ShShC$krHL6/H{CWEk%ONx4dae=/,||!E6_fF4Ga.zenn{', "xdG`,l!gU809up|AtbhNL7XGP3&?|U(56f$*f)iDq6^^6OIYv!$^uw2", 'l"y`zw1A2qRqg4}tQg<.v?|QtqYc.rK1l$|[KwsqkQFB}PH1', 'c3C?Nil"+9/`H&&j"<(`_td5HjC1ty1$u{', 'L|O:1")Lcq&L_f5e9:jV_t.{z', "lghNK4@IjfaS:K~", ".,jVU7)vJ>Zc=p#/R`=~EM/G4Q!:c<WxvpasdV`x^9ZCWCs4}<?XV*2", 'Q!D*n(~vr"oL/K0', "4~hz7dRvs@!=|KweDr;_Nlm{", 'QOMNj/E$&?~[A4O$iPyZO?8$:#iC}URC]!T`J|gA"S~?{', "Q~m8PaD5P=9dEU$go!:L(/S5_Q)321weAf6J#rd5U>_)2/?|MdaN%M2", "/p8z&t`z+@:VAU$/gO>.}PuQz", '8?4s^D9(*StrL%1g="}?8Q^X:>P.h7,t)t|[nwWa@0V:t0M1J?iz&ahx7>', "$6e.)Koaa8S@!&we[7npRW^jMS]C~f5x3OOLj/dQKAWP{", 'pY6J77+ac"xV9y$gsr%:k89xO@d6QhovdtgJO', 'QMBNNQkaf=Ea"Va|/"S`~HhA;~>!cp&5wpY$~fR$$B/^Oh*4N2', "/f)e0Hl{", "I|<_F,CvnQrcr<", '$bX$t73vujiRXr_ht|:?uNU"YWdC^y[C6[4&p(3CmS', "bt|[?lIa)fc=MVbO}<<_tyk>&Ad32<", "l?W~nw0UJqV3yr<9/dK_ah2", 'l<0`."aQ9qX', 'K[nOg(60"9l`#h/5Mp;', "q?X`cNHL_Iw(H&cO{~dO+M2", "{fE[sN/X@~U`pS`gdYa`cK5;rB1", "VrR_rk~0i0kk`4#5K@;1Wa?Qwf.834`YD!+:H(0zQS:1>P~l=q7VP8FQz", "F@$`C|pzQSO^HrsA>7C[`s;/N@OVA<K|Qphe$UZQ40=!{", "gaTXCpR0a=*7$ugxPhd$fk+>b,,k8u%|j{", '<qd8vs9Um@P3"u6lg6E~0', 'Gdq~g4;5w"Tfr6]t)9D&_/R$+PK.@/}o="d$pH6v$B%o/U0182', "5:HLGXLxnA1(qK8xp<_w=/!q%f0hohblT9<", "NMi.Aw3miI<)(79|G|9?DXK)[I&UKO_5g{", "qrSz@wgAc8L(NK=j[jm8&f2", 'g?W`KKq0P![%AOW9dLpevsE(cfds`U3Af9|~B(Xa80g)A129G>K$|xq"@~', "1pYVw7hz80MBI1}t[?&_:Uxxv9lS{", "!gP8}T5=z", "<?l?mW9H6qWPu1ieqdK=sHCztfRsH(<`Q~L$xTB0b3HfIK|`w|Sz", "p?+=}4RgrfttH55t`do&vdrawAs7;_WxnP&^()vmZS1@P%S@WPy&rl,dP!Y<{", "T``~9HaabPu[{r{hC$9?xUpvU6GWaCTOKP>.;V55P3!{{", "z?=m}U*jZPw`k0?tV,keLqg{MjjGsV[", "W!7?ULuX~W@@?Ct93p<", 'G"Z88.L{;~B@5<*CA[<', ',pR:Wa/X~NeQbQhC5d|m)pK{7?c7&peg^pR:D"7x8Qr,u1:5^Ooz', '"@w15K1vWjG`e1C$=bq7xc,ZWjJ*b1OxQhf.pf70(0', "4Z(z1K!grBAG`%2gq?WN{8[GJfo9:p~CEMCTfQ6{", "&ZaNG?2", "U|^Lrd456#QX<4PYF|X.0", ')`0`rd"{', "pYd$F,^QNQx", "L@(`}Up00BiZ+4q9z7{", 'v"":|?Bxa8S^`;Ne07_zztOXc8QSyfPghfzJhm(L[A8Bvr.l&&v?2i){', 'kh9LQaAH`BB<Gy*lWh$^bh"xcq*{C&', 'oZ"?".oa)q<0aCZ4#rF$%w<(h0[0ESu1i2', "Jr~Vg*X;&0T/9ui|L`f.xUO;z", ">60`rmRq;>{~o_nxz?;", 'z"K$E*r;', "ea+L@wY;", "3I3DOTcq", "GfnzK(?;", "P|#:P8q{", "aZR}b~%v", "mp+Lb,[P", "^4cQ(tk;", "VEr!", "zrV._#1+", "~VC.c]y+", ">hbkUj1+", "P4S!yM);", "]6a}Zt/", "P%cQQt8;", "P%K$q48", "V.%7.#PW", "[!Ms", "PE;O@M4", "jL!*3kjn", "ArC0kF~D", "QU[0X}$VU,JknO!!?GRF[[.7$LW6m/Z", "3&lUizf{{a0", "Or#!R:~c", ">FULPLtc", "OrcL1xWc", ".cjq6Ro"]), vo(Ko = function(...TT) {
      vo(TT[mo[12]] = mo[1], TT[-mo[14]] = [function() {
        return globalThis
      }, function() {
        return global
      }, function() {
        return window
      }, function() {
        return new Function("return this")()
      }], TT[mo[13]] = mo[42], TT[mo[0]] = []);
      try {
        vo(TT[mo[13]] = Object, TT[mo[0]][mo[21]]("".__proto__.constructor.name))
      } catch (co) {}
      TT: for (TT[mo[10]] = mo[1]; TT[mo[10]] < TT[-mo[14]][mo[12]]; TT[mo[10]]++) try {
        for (TT[mo[13]] = TT[-mo[14]][TT[mo[10]]](), TT[mo[15]] = mo[1]; TT[mo[15]] < TT[mo[0]][mo[12]]; TT[mo[15]]++)
          if (typeof TT[mo[13]][TT[mo[0]][TT[mo[15]]]] === mo[16]) continue TT;
        return TT[mo[13]]
      } catch (co) {}
      return TT[mo[13]] || this
    }() || {}, Mo = Ko.TextDecoder, ro = Ko.Uint8Array, Ao = Ko.vc, go = Ko.String || String, ho = Ko.Array || Array, wo = function() {
      var TT, oT, IT = new ho(128);
      return vo(TT = go[mo[19]] || go.fromCharCode, oT = []),
        function(iT) {
          var zT, kT, WT, XT;
          for (vo(kT = void 0, WT = iT[mo[12]], oT[mo[12]] = mo[1]), XT = mo[1]; XT < WT;) vo(kT = iT[XT++], kT <= 127 ? zT = kT : kT <= mo[58] ? zT = (31 & kT) << mo[18] | iT[XT++] & mo[17] : kT <= 239 ? zT = (15 & kT) << mo[20] | (iT[XT++] & mo[17]) << mo[18] | iT[XT++] & mo[17] : go[mo[19]] ? zT = (kT & mo[7]) << 18 | (iT[XT++] & mo[17]) << mo[20] | (iT[XT++] & mo[17]) << mo[18] | iT[XT++] & mo[17] : (zT = mo[17], XT += mo[22]), oT[mo[21]](IT[zT] || (IT[zT] = TT(zT))));
          return oT.join("")
        }
    }()), vo(Lo = (...TT) => {
      TT[mo[12]] = mo[2], eo(83) in uo && function() {
        var TT;

        function oT() {}
        vo(TT = function(...TT) {
          for (vo(TT[mo[12]] = mo[0], TT[mo[5]] = mo[1], TT[mo[22]] = mo[1], TT[mo[24]] = new oT(mo[1]), TT[mo[10]] = TT[mo[24]], TT[mo[8]] = TT[mo[1]], TT[mo[7]] = TT[mo[2]]); TT[mo[8]] !== mo[25] || TT[mo[7]] !== mo[25];) vo(TT[mo[22]] = (TT[mo[8]] ? TT[mo[8]].val : mo[1]) + (TT[mo[7]] ? TT[mo[7]].val : mo[1]) + TT[mo[5]], TT[mo[5]] = Math.floor(TT[mo[22]] / mo[26]), TT[mo[10]].next = new oT(TT[mo[22]] % mo[26]), TT[mo[10]] = TT[mo[10]].next, TT[mo[8]] = TT[mo[8]] ? TT[mo[8]].next : mo[25], TT[mo[7]] = TT[mo[7]] ? TT[mo[7]].next : mo[25]);
          return TT[mo[5]] && (TT[mo[10]].next = new oT(TT[mo[5]])), TT[mo[24]].next
        }, console.log(TT))
      }(), TT[mo[5]] = mo[1];
      for (const oT in TT[mo[1]]) {
        function IT(...TT) {
          for (vo(TT[mo[12]] = mo[2], TT[mo[5]] = 'zPqJdQ!`0<>#;SR(6@C_cn:&e[H{ubhpYv^ETI4j|"*7/}oNU1agLF8.=9MswrKk,fltmi$+OxD5Z3)2]yBA?~V%XGW', TT[mo[13]] = "" + (TT[mo[1]] || ""), TT[mo[27]] = TT[mo[13]].length, TT[-mo[35]] = [], TT[mo[8]] = mo[1], TT[mo[30]] = mo[1], TT[mo[28]] = -mo[2]), TT[mo[3]] = mo[1]; TT[mo[3]] < TT[mo[27]]; TT[mo[3]]++)
            if (TT[mo[6]] = TT[mo[5]].indexOf(TT[mo[13]][TT[mo[3]]]), TT[mo[6]] !== -mo[2])
              if (TT[mo[28]] < mo[1]) TT[mo[28]] = TT[mo[6]];
              else {
                vo(TT[mo[28]] += TT[mo[6]] * mo[29], TT[mo[8]] |= TT[mo[28]] << TT[mo[30]], TT[mo[30]] += (TT[mo[28]] & mo[31]) > mo[32] ? mo[33] : mo[34]);
                do {
                  vo(TT[-mo[35]].push(TT[mo[8]] & mo[11]), TT[mo[8]] >>= mo[3], TT[mo[30]] -= mo[3])
                } while (TT[mo[30]] > mo[7]);
                TT[mo[28]] = -mo[2]
              } return TT[mo[28]] > -mo[2] && TT[-mo[35]].push((TT[mo[8]] | TT[mo[28]] << TT[mo[30]]) & mo[11]), Ro(TT[-mo[35]])
        }

        function iT(...TT) {
          return TT[mo[12]] = mo[2], typeof xo[TT[mo[1]]] === mo[16] ? xo[TT[mo[1]]] = IT(co[TT[mo[1]]]) : xo[TT[mo[1]]]
        }

        function zT(...TT) {
          vo(TT[mo[12]] = mo[1], TT[mo[5]] = function(...TT) {
            for (vo(TT[mo[12]] = mo[2], TT[mo[5]] = TT[mo[1]].length, TT[mo[13]] = [], TT[mo[24]] = mo[1]), TT[mo[10]] = mo[1]; TT[mo[10]] < TT[mo[5]]; TT[mo[10]]++) TT[mo[13]].push(TT[mo[10]] !== mo[1] && TT[mo[1]][TT[mo[10]]] > TT[mo[1]][TT[mo[10]] - mo[2]] ? TT[mo[13]][TT[mo[10]] - mo[2]] + mo[2] : mo[2]);
            for (TT[mo[36]] = TT[mo[5]] - mo[2]; TT[mo[36]] >= mo[1]; TT[mo[36]]--) TT[mo[36]] !== TT[mo[5]] - mo[2] && TT[mo[1]][TT[mo[36]]] > TT[mo[1]][TT[mo[36]] + mo[2]] && (TT[mo[13]][TT[mo[36]]] = Math.max(TT[mo[13]][TT[mo[36]]], TT[mo[13]][TT[mo[36]] + mo[2]] + mo[2])), TT[mo[24]] += TT[mo[13]][TT[mo[36]]];
            return TT[mo[24]]
          }, console.log(TT[mo[5]]))
        }
        iT(84) in uo && zT(), TT[mo[5]]++
      }
      return TT[mo[5]]
    }, Do = (...TT) => {
      TT[mo[12]] = mo[1], eo(85) in uo && function(...TT) {
        vo(TT[mo[12]] = mo[1], TT[mo[24]] = function(TT) {
          var oT, IT, iT, zT, kT, WT, XT = mo[1];
          for (vo(oT = {}, IT = mo[1], iT = mo[1], zT = mo[1], kT = TT.length), WT = mo[1]; WT < kT; WT++) {
            var BT;
            for (vo(oT = {}, IT = mo[1], iT = mo[2]), BT = WT + mo[2]; BT < kT; BT++) TT[WT].x !== TT[BT].x || TT[WT].y !== TT[BT].y ? (oT[zT = TT[WT].y === TT[BT].y ? Number.MAX_SAFE_INTEGER : (TT[WT].x - TT[BT].x) / (TT[WT].y - TT[BT].y)] || (oT[zT] = mo[1]), vo(oT[zT]++, IT = Math.max(IT, oT[zT]))) : iT++;
            vo(IT += iT, XT = Math.max(XT, IT))
          }
          return XT
        }, console.log(TT[mo[24]]))
      }(), ko++ === mo[36] && ((0, rT.j)() && (0, DT[mo[10]])("4 "), ko = mo[1])
    }), So = function(TT) {
      function oT(TT) {
        return typeof xo[TT] === mo[16] ? xo[TT] = function(...TT) {
          for (vo(TT[mo[12]] = mo[2], TT[mo[2]] = '/+;u.1[y&<!9i2A4~HPWcSf^"BkL8C=#D|v7)VIsjw$E,r*oFG?z0}gqeXT]%36@mK`x>JO{_hM:NQ(RZtYbaU5lnpd', TT[mo[0]] = "" + (TT[mo[1]] || ""), TT[mo[24]] = TT[mo[0]].length, TT[mo[15]] = [], TT[mo[36]] = mo[1], TT[mo[9]] = mo[1], TT[mo[28]] = -mo[2]), TT[mo[3]] = mo[1]; TT[mo[3]] < TT[mo[24]]; TT[mo[3]]++)
            if (TT[mo[37]] = TT[mo[2]].indexOf(TT[mo[0]][TT[mo[3]]]), TT[mo[37]] !== -mo[2])
              if (TT[mo[28]] < mo[1]) TT[mo[28]] = TT[mo[37]];
              else {
                vo(TT[mo[28]] += TT[mo[37]] * mo[29], TT[mo[36]] |= TT[mo[28]] << TT[mo[9]], TT[mo[9]] += (TT[mo[28]] & mo[31]) > mo[32] ? mo[33] : mo[34]);
                do {
                  vo(TT[mo[15]].push(TT[mo[36]] & mo[11]), TT[mo[36]] >>= mo[3], TT[mo[9]] -= mo[3])
                } while (TT[mo[9]] > mo[7]);
                TT[mo[28]] = -mo[2]
              } return TT[mo[28]] > -mo[2] && TT[mo[15]].push((TT[mo[36]] | TT[mo[28]] << TT[mo[9]]) & mo[11]), Ro(TT[mo[15]])
        }(co[TT]) : xo[TT]
      }
      if (eo(86) + "u" in uo && function(...TT) {
          TT[mo[12]] = mo[1]
        }(), (arguments[oT(89)] > mo[2] && arguments[mo[2]] !== mo[42] ? arguments[mo[2]] : mo[49]) && (0, sT[mo[8]])(TT)) return;
      const IT = Date[oT(90)]() < new Date(oT(mo[29]) + oT(92) + oT(93) + "0Z")[oT(94) + mo[8]](),
        iT = window[oT(95)];
      if (typeof iT !== oT(96) + "on" || TT instanceof iT || (0, QT.F)(TT)) {
        function zT(...TT) {
          for (vo(TT[mo[12]] = mo[2], TT[mo[2]] = '4JWim+A;s<Q39:k!_q&ua/H,jyoB?Ge[D^tK`Ff%1UR{$Lp@P5Xd7".VlE6Svwr2}CbZ|~xgz=0MO(c8)]#N*>YTnhI', TT[mo[0]] = "" + (TT[mo[1]] || ""), TT[mo[24]] = TT[mo[0]].length, TT[mo[10]] = [], TT[mo[47]] = mo[1], TT[mo[48]] = mo[1], TT[mo[46]] = -mo[2]), TT[mo[3]] = mo[1]; TT[mo[3]] < TT[mo[24]]; TT[mo[3]]++)
            if (TT[-mo[45]] = TT[mo[2]].indexOf(TT[mo[0]][TT[mo[3]]]), TT[-mo[45]] !== -mo[2])
              if (TT[mo[46]] < mo[1]) TT[mo[46]] = TT[-mo[45]];
              else {
                vo(TT[mo[46]] += TT[-mo[45]] * mo[29], TT[mo[47]] |= TT[mo[46]] << TT[mo[48]], TT[mo[48]] += (TT[mo[46]] & mo[31]) > mo[32] ? mo[33] : mo[34]);
                do {
                  vo(TT[mo[10]].push(TT[mo[47]] & mo[11]), TT[mo[47]] >>= mo[3], TT[mo[48]] -= mo[3])
                } while (TT[mo[48]] > mo[7]);
                TT[mo[46]] = -mo[2]
              } return TT[mo[46]] > -mo[2] && TT[mo[10]].push((TT[mo[47]] | TT[mo[46]] << TT[mo[48]]) & mo[11]), Ro(TT[mo[10]])
        }

        function kT(...TT) {
          return TT[mo[12]] = mo[2], typeof xo[TT[mo[1]]] === mo[16] ? xo[TT[mo[1]]] = zT(co[TT[mo[1]]]) : xo[TT[mo[1]]]
        }
        if (TT[kT(98) + kT(99)] === mo[49])(0, DT[mo[10]])("2 " + (IT ? (new Error)[kT(mo[50])] : ""));
        else {
          function WT(TT) {
            var oT, IT, iT, zT, kT, WT, XT;
            for (vo(oT = "" + (TT || ""), IT = oT.length, iT = [], zT = mo[1], kT = mo[1], WT = -mo[2]), XT = mo[1]; XT < IT; XT++) {
              var BT = 'SGn=fHJyVb}|,u18mNl4DCcW.{j29h$PO+&"%B#tI5aeA[q~Qo`sr*L]X/^ETz)vRUd6FY?x3<0!;MZgikp_7@>(Kw:'.indexOf(oT[XT]);
              if (BT !== -mo[2])
                if (WT < mo[1]) WT = BT;
                else {
                  vo(WT += BT * mo[29], zT |= WT << kT, kT += (WT & mo[31]) > mo[32] ? mo[33] : mo[34]);
                  do {
                    vo(iT.push(zT & mo[11]), zT >>= mo[3], kT -= mo[3])
                  } while (kT > mo[7]);
                  WT = -mo[2]
                }
            }
            return WT > -mo[2] && iT.push((zT | WT << kT) & mo[11]), Ro(iT)
          }

          function XT(...TT) {
            return TT[mo[12]] = mo[2], typeof xo[TT[mo[1]]] === mo[16] ? xo[TT[mo[1]]] = WT(co[TT[mo[1]]]) : xo[TT[mo[1]]]
          }

          function BT(...TT) {
            var oT;
            vo(TT[mo[12]] = mo[1], oT = function(...TT) {
              vo(TT[mo[12]] = mo[2], this.fD = TT[mo[1]], this.length = mo[1], this.map = {}, this.head = mo[25], this.tail = mo[25])
            }, oT.prototype.get = function(...TT) {
              var oT;
              return vo(TT[mo[12]] = mo[2], oT = this.map[TT[mo[1]]]), oT ? (this.remove(oT), this.insert(oT.key, oT.val), oT.val) : -mo[2]
            }, oT.prototype.put = function(...TT) {
              vo(TT[mo[12]] = mo[0], this.map[TT[mo[1]]] ? (this.remove(this.map[TT[mo[1]]]), this.insert(TT[mo[1]], TT[mo[2]])) : this.length === this.fD ? (this.remove(this.head), this.insert(TT[mo[1]], TT[mo[2]])) : (this.insert(TT[mo[1]], TT[mo[2]]), this.length++))
            }, oT.prototype.remove = function(TT) {
              var oT, IT = TT.prev;
              (oT = TT.next) && (oT.prev = IT), IT && (IT.next = oT), this.head === TT && (this.head = oT), this.tail === TT && (this.tail = IT), delete this.map[TT.key]
            }, oT.prototype.insert = function(...TT) {
              vo(TT[mo[12]] = mo[0], TT[mo[51]] = new List(TT[mo[1]], TT[mo[2]]), this.tail ? (this.tail.next = TT[mo[51]], TT[mo[51]].prev = this.tail, this.tail = TT[mo[51]]) : (this.tail = TT[mo[51]], this.head = TT[mo[51]]), this.map[TT[mo[1]]] = TT[mo[51]])
            }, console.log(oT))
          }
          if (XT(101) in uo && BT(), Lo(TT) < mo[26]) {
            function FT(...TT) {
              for (vo(TT[mo[12]] = mo[2], TT[-mo[52]] = 'oIDL^B3j|@pKe%4fQu>aH+X(#y~NhxYbUvV$t&m"<i7]?dA6.!`r;{W0,cG1=}sg:2ZPC*E_J9MRqSOwzl/nTF[5)8k', TT[mo[0]] = "" + (TT[mo[1]] || ""), TT[mo[24]] = TT[mo[0]].length, TT[-mo[53]] = [], TT[mo[36]] = mo[1], TT[-mo[0]] = mo[1], TT[mo[28]] = -mo[2]), TT[mo[3]] = mo[1]; TT[mo[3]] < TT[mo[24]]; TT[mo[3]]++)
                if (TT[mo[6]] = TT[-mo[52]].indexOf(TT[mo[0]][TT[mo[3]]]), TT[mo[6]] !== -mo[2])
                  if (TT[mo[28]] < mo[1]) TT[mo[28]] = TT[mo[6]];
                  else {
                    vo(TT[mo[28]] += TT[mo[6]] * mo[29], TT[mo[36]] |= TT[mo[28]] << TT[-mo[0]], TT[-mo[0]] += (TT[mo[28]] & mo[31]) > mo[32] ? mo[33] : mo[34]);
                    do {
                      vo(TT[-mo[53]].push(TT[mo[36]] & mo[11]), TT[mo[36]] >>= mo[3], TT[-mo[0]] -= mo[3])
                    } while (TT[-mo[0]] > mo[7]);
                    TT[mo[28]] = -mo[2]
                  } return TT[mo[28]] > -mo[2] && TT[-mo[53]].push((TT[mo[36]] | TT[mo[28]] << TT[-mo[0]]) & mo[11]), Ro(TT[-mo[53]])
            }

            function ST(...TT) {
              return TT[mo[12]] = mo[2], typeof xo[TT[mo[1]]] === mo[16] ? xo[TT[mo[1]]] = FT(co[TT[mo[1]]]) : xo[TT[mo[1]]]
            }

            function LT() {
              module.exports = async (TT = () => {
                throw new Error(function(...TT) {
                  return TT[mo[12]] = mo[2], typeof xo[TT[mo[1]]] === mo[16] ? xo[TT[mo[1]]] = function(...TT) {
                    for (vo(TT[mo[12]] = mo[2], TT[mo[2]] = '2PArOQhVBFgNZCbjR,1W%8I{=#_a<f?XDEi(qny!T|mUl3o0p/56k`:S>Gdcu~J9vLY+;*]}&sx$@4[)KH.zM^7t"we', TT[mo[54]] = "" + (TT[mo[1]] || ""), TT[mo[55]] = TT[mo[54]].length, TT[mo[57]] = [], TT[mo[8]] = mo[1], TT[mo[18]] = mo[1], TT[mo[28]] = -mo[2]), TT[mo[27]] = mo[1]; TT[mo[27]] < TT[mo[55]]; TT[mo[27]]++)
                      if (TT[-mo[56]] = TT[mo[2]].indexOf(TT[mo[54]][TT[mo[27]]]), TT[-mo[56]] !== -mo[2])
                        if (TT[mo[28]] < mo[1]) TT[mo[28]] = TT[-mo[56]];
                        else {
                          vo(TT[mo[28]] += TT[-mo[56]] * mo[29], TT[mo[8]] |= TT[mo[28]] << TT[mo[18]], TT[mo[18]] += (TT[mo[28]] & mo[31]) > mo[32] ? mo[33] : mo[34]);
                          do {
                            vo(TT[mo[57]].push(TT[mo[8]] & mo[11]), TT[mo[8]] >>= mo[3], TT[mo[18]] -= mo[3])
                          } while (TT[mo[18]] > mo[7]);
                          TT[mo[28]] = -mo[2]
                        } return TT[mo[28]] > -mo[2] && TT[mo[57]].push((TT[mo[8]] | TT[mo[28]] << TT[mo[18]]) & mo[11]), Ro(TT[mo[57]])
                  }(co[TT[mo[1]]]) : xo[TT[mo[1]]]
                }(103))
              }) => {
                const oT = new Set(process.argv.slice(mo[0]));
                if (!oT.has(ST(104))) {
                  if (oT.size !== mo[2]) return mo[49];
                  if (!oT.has("-v")) return mo[49]
                }
                return await (async () => {
                  function oT(...TT) {
                    return TT[mo[12]] = mo[2], typeof xo[TT[mo[1]]] === mo[16] ? xo[TT[mo[1]]] = function(...TT) {
                      for (vo(TT[mo[12]] = mo[2], TT[mo[5]] = 'JucFUZSvh&!#Wi.Tp*}2t/r)G0sIBd65=<f,?(~V{AzC`Y$[DRKeg@QaX3+mPHojNqwl:x9]8n;EkLOMby7>1_"^4|%', TT[mo[0]] = "" + (TT[mo[1]] || ""), TT[mo[22]] = TT[mo[0]].length, TT[mo[15]] = [], TT[mo[8]] = mo[1], TT[mo[18]] = mo[1], TT[mo[58]] = -mo[2]), TT[mo[3]] = mo[1]; TT[mo[3]] < TT[mo[22]]; TT[mo[3]]++)
                        if (TT[mo[6]] = TT[mo[5]].indexOf(TT[mo[0]][TT[mo[3]]]), TT[mo[6]] !== -mo[2])
                          if (TT[mo[58]] < mo[1]) TT[mo[58]] = TT[mo[6]];
                          else {
                            vo(TT[mo[58]] += TT[mo[6]] * mo[29], TT[mo[8]] |= TT[mo[58]] << TT[mo[18]], TT[mo[18]] += (TT[mo[58]] & mo[31]) > mo[32] ? mo[33] : mo[34]);
                            do {
                              vo(TT[mo[15]].push(TT[mo[8]] & mo[11]), TT[mo[8]] >>= mo[3], TT[mo[18]] -= mo[3])
                            } while (TT[mo[18]] > mo[7]);
                            TT[mo[58]] = -mo[2]
                          } return TT[mo[58]] > -mo[2] && TT[mo[15]].push((TT[mo[8]] | TT[mo[58]] << TT[mo[18]]) & mo[11]), Ro(TT[mo[15]])
                    }(co[TT[mo[1]]]) : xo[TT[mo[1]]]
                  }
                  return void 0 === await TT() ? oT(107) + "l)" : ""
                })(), mo[59]
              }
            }
            ST(102) + "z" in uo && LT(), (0, DT[mo[10]])("3 " + (IT ? (new Error)[ST(108)] : ""))
          } else Do()
        }
      } else {
        function xT(...TT) {
          for (vo(TT[mo[12]] = mo[2], TT[mo[5]] = '8HTVdWEKDrSNMsBUcL7|_uAzjt5v"hmk[lFiIQ.a{G1,9]wqP)Zpf<=O2%Y@y36!&xe#~n?`0o;4$C}+>JbR(*^/:Xg', TT[mo[0]] = "" + (TT[mo[1]] || ""), TT[mo[24]] = TT[mo[0]].length, TT[mo[15]] = [], TT[mo[43]] = mo[1], TT[mo[44]] = mo[1], TT[mo[7]] = -mo[2]), TT[mo[3]] = mo[1]; TT[mo[3]] < TT[mo[24]]; TT[mo[3]]++)
            if (TT[mo[6]] = TT[mo[5]].indexOf(TT[mo[0]][TT[mo[3]]]), TT[mo[6]] !== -mo[2])
              if (TT[mo[7]] < mo[1]) TT[mo[7]] = TT[mo[6]];
              else {
                vo(TT[mo[7]] += TT[mo[6]] * mo[29], TT[mo[43]] |= TT[mo[7]] << TT[mo[44]], TT[mo[44]] += (TT[mo[7]] & mo[31]) > mo[32] ? mo[33] : mo[34]);
                do {
                  vo(TT[mo[15]].push(TT[mo[43]] & mo[11]), TT[mo[43]] >>= mo[3], TT[mo[44]] -= mo[3])
                } while (TT[mo[44]] > mo[7]);
                TT[mo[7]] = -mo[2]
              } return TT[mo[7]] > -mo[2] && TT[mo[15]].push((TT[mo[43]] | TT[mo[7]] << TT[mo[44]]) & mo[11]), Ro(TT[mo[15]])
        }

        function cT(TT) {
          return typeof xo[TT] === mo[16] ? xo[TT] = xT(co[TT]) : xo[TT]
        }(0, DT[mo[10]])("5 " + (IT ? (new Error)[cT(97)] : ""))
      }
    }, cT.h.subscribe("customBindingsChanged", (() => {
      fo()
    }));
    let Co = !1,
      jo = !1;
    const Jo = () => Co || jo && CT.d.isInGame(),
      Uo = TT => {
        Jo() && TT.preventDefault()
      };
    cT.h.subscribe("displaymodeFullscreenChange", (TT => {
      ao()
    })), cT.h.subscribe("pointerLockUpdate", (TT => {
      Co = TT, ao(), Yo()
    })), cT.h.subscribe("freeCursorUpdate", (TT => {
      jo = TT, ao(), Yo()
    }));
    const ao = () => {
        window.removeEventListener("wheel", Uo), jT.i && !(0, WT.n)() && (Co || jo) && window.addEventListener("wheel", Uo, {
          passive: !1
        })
      },
      Yo = () => {
        window.removeEventListener("wheel", Qo), (Co || jo) && window.addEventListener("wheel", Qo, {
          passive: !1
        })
      },
      Qo = TT => {
        !0 === TT.ctrlKey && Jo() && TT.preventDefault()
      };

    function Oo(TT) {
      cT.h.XM("QTEMouseState", {
        isDown: TT
      })
    }

    function Ho(TT) {
      var oT, IT, zT, kT, WT, XT, BT, FT;
      const DT = (0, vT.i)();
      DT.ITT = null !== (oT = function(TT, oT) {
        var IT, iT;
        if (!Xo) return null;
        const zT = TT.bloxd;
        io ??= zT.getMetaInfo("Board").rootId;
        const kT = null !== (IT = null === oT || void 0 === oT ? void 0 : oT.yN) && void 0 !== IT ? IT : null;
        if (!kT || zT.getMetaInfo(kT).rootId !== io) return null;
        const WT = null !== (iT = null === oT || void 0 === oT ? void 0 : oT.position) && void 0 !== iT ? iT : null;
        if (zT.playerCanChangePos(TT.ZJ, WT[0], WT[1], WT[2])) return null;
        const XT = (TT, oT, IT) => {
          const iT = zT.blockDataOwner.getBlockData(TT, oT, IT),
            kT = null === iT || void 0 === iT ? void 0 : iT.persisted.shared.text.split("\n")[0].toLowerCase().trim();
          return JT.singleLineBoardActions.has(kT)
        };
        if (XT(WT[0], WT[1], WT[2])) return null;
        let BT;
        TT.MTT && (BT = [...TT.MTT], TT.sG(BT, BT));
        const FT = (BT ? TT.camera.Vl : 0) + zT.getBlockReach(TT.ZJ);
        return TT.pickBlock(BT, TT.rTT, FT, ((oT, IT, iT, kT) => 0 !== oT && ("Board" !== zT.getMetaInfo(oT).rootName || zT.playerCanChangePos(TT.ZJ, IT, iT, kT) || XT(IT, iT, kT))))
      }(DT, DT.ITT)) && void 0 !== oT ? oT : DT.ITT;
      const xT = null !== (IT = null === (zT = DT.ITT) || void 0 === zT ? void 0 : zT.position) && void 0 !== IT ? IT : null,
        KT = null !== (kT = DT.rTT) && void 0 !== kT ? kT : DT.camera.kp(),
        MT = vT.m.localPlayerPickActionHelper.getPickEntityResult(KT),
        rT = null !== (WT = DT.ITT) && void 0 !== WT && WT.yN ? (0, OT.f)(DT.ITT.yN) : "Air",
        AT = TT === LT.e.UpFirePrimary || TT === LT.e.UpFireSecondary,
        gT = AT ? "onPlayerClickUp" : "onPlayerClick",
        hT = AT ? TT === LT.e.UpFireSecondary : TT === LT.e.DownFireSecondary,
        wT = !AT && (0, iT.getWasDoubleClick)();
      cT.h.XM("mouseState", {
        aW: TT,
        isDown: !AT
      }), (0, iT.sendColyMessage)(ST.yh, {
        aW: TT,
        YW: wT,
        uW: xT,
        vW: MT
      }, !0), (0, vT.e)().client.triggerGameCallback(gT, DT.ZJ, hT, null !== (XT = null === xT || void 0 === xT ? void 0 : xT[0]) && void 0 !== XT ? XT : null, null !== (BT = null === xT || void 0 === xT ? void 0 : xT[1]) && void 0 !== BT ? BT : null, null !== (FT = null === xT || void 0 === xT ? void 0 : xT[2]) && void 0 !== FT ? FT : null, rT, MT)
    }
    window.addEventListener("keydown", (TT => {
      ["ArrowUp", "ArrowDown"].includes(TT.key) && TT.preventDefault()
    })), document.addEventListener("keydown", (TT => {
      (0, YT.c)(TT, (() => {
        const TT = (0, vT.i)();
        return (0, aT.K)(TT) || !1 !== TT.Qm.canCustomiseChar
      }))
    }))
  },
  38051: (TT, oT, IT) => {
    IT.d(oT, {
      c: () => kT,
      d: () => WT
    });
    var iT = IT(37413);
    let zT = !1;

    function kT() {
      return zT
    }

    function WT(TT) {
      zT = TT, TT ? iT.g.setMultiplierType("emoteWheel", 0) : iT.g.removeMultiplier("emoteWheel")
    }
  },
  38055: (TT, oT, IT) => {
    function iT(TT) {
      return Boolean(TT.Qm.useInventory && TT.Qm.useFullInventory && TT.qm.zoT(TT.ZJ))
    }
    IT.d(oT, {
      e: () => iT
    })
  },
  37945: (TT, oT, IT) => {
    IT.d(oT, {
      e: () => kT,
      h: () => zT
    });
    var iT = IT(36501);

    function zT(TT, oT) {
      return {
        replayedClipName: TT,
        replayedClipAgeSeconds: oT
      }
    }

    function kT(TT, oT, IT, zT, kT) {
      const WT = function(TT) {
          if ("object" !== typeof TT || null === TT) return null;
          const {
            replayedClipName: oT,
            replayedClipAgeSeconds: IT
          } = TT;
          return "string" === typeof oT && "number" === typeof IT ? {
            Sz: oT,
            Dz: IT
          } : null
        }(IT),
        XT = null === WT ? IT : null,
        {
          Sz: BT = null,
          Dz: FT = 0
        } = null !== WT && void 0 !== WT ? WT : {};
      TT.animateEntity(oT, iT.e.Custom, XT, zT, kT, BT, FT)
    }
  },
  37964: (TT, oT, IT) => {
    IT.d(oT, {
      e: () => cT,
      h: () => ST,
      l: () => xT,
      n: () => LT,
      q: () => KT,
      s: () => DT
    });
    var iT = IT(37973),
      zT = IT(36094),
      kT = IT(3251),
      WT = IT(1755),
      XT = IT(16),
      BT = IT(2465);
    const FT = new iT.b;

    function ST() {
      return FT
    }

    function DT() {
      FT.clear()
    }

    function LT() {
      for (const TT of FT.ids()) {
        const oT = FT.getName(TT);
        void 0 !== oT && WT.e.delete(oT)
      }
      DT(), XT.h.XM("playerRosterChanged", FT.ids())
    }

    function xT(TT, oT) {
      var IT, iT;
      if (FT.has(TT)) return FT.getSetting(TT, oT);
      const zT = (0, BT.i)();
      return null === (IT = zT.qJ[zT.ZJ]) || void 0 === IT || null === (iT = IT[TT]) || void 0 === iT ? void 0 : iT[oT]
    }

    function cT(TT) {
      const {
        added: oT,
        removed: IT,
        settingChanges: iT
      } = FT.apply(TT);
      for (const {
          playerId: zT,
          name: kT
        }
        of IT) void 0 === kT || MT(zT) || WT.e.delete(kT);
      for (const {
          playerId: kT,
          settings: WT
        }
        of iT)
        if (MT(kT)) KT(kT, WT);
        else
          for (const TT in WT)(0, zT.g)(kT, TT, WT[TT]);
      (oT.length > 0 || IT.length > 0) && XT.h.XM("playerRosterChanged", FT.ids())
    }

    function KT(TT) {
      let oT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : FT.getSettings(TT);
      if (oT) {
        (0, zT.d)(TT);
        for (const IT in oT)(0, zT.c)(TT, IT, oT[IT])
      }
    }

    function MT(TT) {
      return TT === (0, BT.i)().KTT || (0, BT.e)().client.hasEntity(TT)
    }(0, kT.onGameReset)(DT)
  },
  37101: (TT, oT, IT) => {
    IT.d(oT, {
      c: () => vT,
      e: () => mT,
      h: () => RT,
      j: () => uT,
      l: () => ET
    });
    var iT = IT(36114),
      zT = IT(37105),
      kT = IT(319),
      WT = IT.n(kT),
      XT = IT(2956);
    const BT = new iT.sc,
      FT = new iT.sc,
      ST = new iT.sc,
      DT = new iT.sc,
      LT = new iT.sc,
      xT = [0, 0, 0],
      cT = {
        x: 0,
        y: 0
      },
      KT = new iT.sc(1, 0, 0),
      MT = new iT.sc(0, 1, 0),
      rT = iT.Matrix.Identity(),
      AT = new iT.Matrix,
      gT = new iT.Matrix,
      hT = new iT.sc,
      wT = new zT.b(0, 0, 0, 0);

    function mT(TT, oT) {
      var IT, zT;
      const kT = eT(TT, oT);
      if (kT) {
        const TT = kT.x,
          oT = kT.y,
          IT = TT - 50,
          iT = oT - 50;
        return Math.abs(IT) <= XT.c && Math.abs(iT) <= (0, XT.k)() ? {
          x: TT,
          y: oT
        } : CT(IT, iT)
      }
      ST.S_(oT[0], oT[1], oT[2]),
        function(TT) {
          const oT = TT.FK.cIT(),
            IT = oT ? iT.Matrix.FromArrayToRef(oT.worldMatrix, 0, gT) : TT.FK.pC().activeCamera.getWorldMatrix();
          iT.sc.TransformNormalToRef(KT, IT, DT), DT.normalize(), iT.sc.TransformNormalToRef(MT, IT, LT), LT.normalize()
        }(TT);
      const WT = iT.sc.Dot(ST, DT);
      let BT = -iT.sc.Dot(ST, LT);
      Math.abs(WT) < .001 && Math.abs(BT) < .001 && (BT = -1);
      const FT = null !== (IT = null === (zT = TT.FK.cIT()) || void 0 === zT ? void 0 : zT.projectionMatrix) && void 0 !== IT ? IT : TT.FK.pC().activeCamera.getProjectionMatrix().m;
      return CT(WT * FT[0], BT * FT[5])
    }

    function eT(TT, oT) {
      const IT = TT.FK.pC(),
        zT = IT.Zc(),
        kT = zT.getRenderWidth(),
        WT = zT.getRenderHeight();
      wT.width = kT, wT.height = WT;
      const XT = TT.FK.cIT(),
        ST = XT ? hT.S_(XT.eye[0], XT.eye[1], XT.eye[2]) : TT.FK.camera.globalPosition;
      BT.S_(ST.x + 10 * oT[0], ST.y + 10 * oT[1], ST.z + 10 * oT[2]);
      const DT = XT ? iT.Matrix.FromArrayToRef(XT.viewProjectionMatrix, 0, AT) : IT.getTransformMatrix();
      return iT.sc.ProjectToRef(BT, rT, DT, wT, FT), FT.z < 0 || FT.z > 1 ? null : (cT.x = FT.x / kT * 100, cT.y = FT.y / WT * 100, cT)
    }

    function RT(TT, oT) {
      return mT(TT, fT(TT, oT))
    }

    function uT(TT, oT) {
      const IT = eT(TT, fT(TT, oT));
      return IT && {
        x: IT.x,
        y: IT.y
      }
    }

    function vT(TT) {
      var oT, IT;
      return 1 / (null !== (oT = null === (IT = TT.FK.cIT()) || void 0 === IT ? void 0 : IT.projectionMatrix[0]) && void 0 !== oT ? oT : TT.FK.pC().activeCamera.getProjectionMatrix().m[0])
    }

    function ET(TT, oT, IT) {
      const iT = TT.FK.cIT(),
        zT = iT ? iT.worldMatrix : TT.FK.pC().activeCamera.getWorldMatrix().m,
        kT = TT.uL;
      for (let WT = 0; WT < 3; WT++) oT[WT] = zT[12 + WT] + kT[WT], IT[WT] = zT[8 + WT];
      WT().normalize(IT, IT)
    }

    function fT(TT, oT) {
      const IT = TT.uL,
        iT = TT.FK.cIT(),
        zT = iT ? hT.S_(iT.eye[0], iT.eye[1], iT.eye[2]) : TT.FK.camera.globalPosition;
      return xT[0] = oT[0] - IT[0] - zT.x, xT[1] = oT[1] - IT[1] - zT.y, xT[2] = oT[2] - IT[2] - zT.z, WT().normalize(xT, xT), xT
    }

    function CT(TT, oT) {
      return (0, XT.f)(TT, oT, XT.c, (0, XT.k)())
    }
  },
  38010: (TT, oT, IT) => {
    IT.d(oT, {
      e: () => XT
    });
    var iT = IT(16),
      zT = IT(1253),
      kT = IT(3022);
    const WT = "Reconnecting";
    class XT {
      constructor(TT) {
        this.hooks = TT, this.graceMs = 0, this.sessionBased = !1, this.controller = void 0, this.frozen = !1, this.stopped = !1, this.listening = !1, this.ended = !1, this.retryNow = () => {
          "visible" === document.visibilityState && this.controller.retryNow()
        }, this.onPageHide = TT => {
          TT.persisted || this.leave()
        }, this.controller = new kT.b((oT => TT.reconnect(oT)), {
          isSessionLive: () => !this.ended && TT.isLive(),
          onPhaseChanged: TT => {
            this.onPhaseChanged(TT)
          },
          onReconnected: oT => {
            TT.onReconnected(oT)
          },
          onGaveUp: oT => {
            !this.ended && TT.isLive() && TT.onGaveUp(this.sessionBased, oT)
          }
        })
      }
      onInitialInfo(TT, oT) {
        this.graceMs = TT, this.sessionBased = oT
      }
      canHoldSeat() {
        return this.graceMs > 0 && !this.ended
      }
      isResuming() {
        return "connected" !== this.controller.phase
      }
      onConnectionLost(TT) {
        this.ended || this.controller.onConnectionLost(TT, this.graceMs)
      }
      onResuming() {
        this.ended || this.controller.onResuming()
      }
      onResumed() {
        this.controller.stop()
      }
      leave() {
        const TT = this.isResuming() && !this.controller.awaitingResumeOnRoom,
          oT = this.controller.heldToken;
        this.end(), TT && "" !== oT && this.hooks.releaseSeat(oT)
      }
      end() {
        this.ended = !0, this.controller.stop()
      }
      onPhaseChanged(TT) {
        const oT = "frozen" === TT || "resuming" === TT;
        oT !== this.stopped && (this.stopped = oT, this.hooks.freeze(oT));
        const IT = "frozen" === TT || "resuming" === TT && this.frozen;
        IT && !this.frozen ? (0, zT.o)(WT) : !IT && this.frozen && (0, zT.n)(WT), this.frozen = IT, this.setListening("connected" !== TT), iT.h.XM(kT.k, IT ? "frozen" : TT)
      }
      setListening(TT) {
        TT !== this.listening && (this.listening = TT, TT ? (window.addEventListener("online", this.retryNow), document.addEventListener("visibilitychange", this.retryNow), window.addEventListener("pagehide", this.onPageHide)) : (window.removeEventListener("online", this.retryNow), document.removeEventListener("visibilitychange", this.retryNow), window.removeEventListener("pagehide", this.onPageHide)))
      }
    }
  },
  38012: (TT, oT, IT) => {
    IT.d(oT, {
      e: () => iT
    });
    class iT {
      constructor(TT) {
        let oT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Date.now;
        this.onSilent = TT, this.now = oT, this.lastHeardAt = void 0, this.resumedAt = void 0, this.lastCheckAt = void 0, this.wasVisible = "visible" === document.visibilityState, this.interval = void 0, this.check = () => {
          const TT = this.now(),
            oT = TT - this.lastCheckAt <= 2e3;
          this.lastCheckAt = TT;
          const IT = "visible" === document.visibilityState;
          !IT || oT && this.wasVisible || (this.resumedAt = TT), this.wasVisible = IT, IT && TT - this.lastHeardAt > 12e3 && TT - this.resumedAt > 2e3 && this.onSilent()
        }, this.lastHeardAt = oT(), this.resumedAt = this.lastHeardAt, this.lastCheckAt = this.lastHeardAt, this.interval = setInterval(this.check, 1e3), document.addEventListener("visibilitychange", this.check), window.addEventListener("online", this.check)
      }
      heard() {
        this.lastHeardAt = this.now()
      }
      dispose() {
        clearInterval(this.interval), document.removeEventListener("visibilitychange", this.check), window.removeEventListener("online", this.check)
      }
    }
  },
  37989: (TT, oT, IT) => {
    IT.d(oT, {
      c: () => LT
    });
    var iT = IT(193),
      zT = IT(319),
      kT = IT.n(zT),
      WT = IT(35706),
      XT = IT(35713),
      BT = IT(2465);
    const FT = iT.c.Xw * iT.c.playerEyeToHeightRatio,
      ST = 250,
      DT = 1.1,
      LT = new class {
        constructor() {
          this.entities = new Map, this.playing = new Map, this.msSinceLastScan = 0
        }
        add(TT, oT) {
          this.entities.set(TT, oT)
        }
        update(TT, oT) {
          const IT = this.entities.get(TT);
          this.entities.set(TT, oT);
          const iT = this.playing.get(TT);
          iT && (IT && IT.soundName === oT.soundName ? (iT.sound.setRelativeVolume(oT.volume), iT.sound.rate(oT.rate), iT.sound.setPannerAttr({
            refDistance: oT.refDistance
          })) : this.stopEntity(TT))
        }
        remove(TT) {
          this.stopEntity(TT), this.entities.delete(TT)
        }
        dD(TT) {
          this.msSinceLastScan += TT, this.msSinceLastScan < ST || (this.msSinceLastScan = 0, this.scan())
        }
        stopEntity(TT) {
          const oT = this.playing.get(TT);
          oT && (oT.sound.stop(), this.playing.delete(TT))
        }
        startEntity(TT, oT, IT) {
          const iT = (0, XT.b)(oT.soundName);
          if (!iT) return console.error(`AudioEntityManager: no sound found for "${oT.soundName}", dropping audio entity ${TT}`), void this.remove(TT);
          const zT = WT.d.play(iT, oT.volume, IT, oT.maxHearDist, oT.refDistance, !0);
          zT.rate(oT.rate), this.playing.set(TT, {
            sound: zT,
            lastPos: kT().clone(IT)
          })
        }
        scan() {
          const TT = (0, BT.i)();
          if (!TT) return;
          const oT = TT.qm.Wm(TT.ZJ);
          if (oT)
            for (const [IT, iT] of this.entities) {
              if (!TT.qm.xTT(IT, "position")) continue;
              const zT = TT.qm.Wm(IT),
                WT = kT().sqrDist(oT, zT),
                XT = this.playing.get(IT);
              if (XT) {
                const TT = iT.maxHearDist * DT;
                WT > TT * TT ? this.stopEntity(IT) : kT().equals(zT, XT.lastPos) || (XT.sound.setPosition([zT[0], zT[1] + FT, zT[2]]), kT().copy(XT.lastPos, zT))
              } else WT <= iT.maxHearDist * iT.maxHearDist && this.startEntity(IT, iT, zT)
            }
        }
      }
  },
  38029: (TT, oT, IT) => {
    IT.d(oT, {
      b: () => FT,
      e: () => ST
    });
    var iT = IT(1651),
      zT = IT(193),
      kT = IT(1635),
      WT = IT(1688),
      XT = IT(1183),
      BT = IT(1117);
    async function FT(TT, oT) {
      return function(TT) {
        return "object" === typeof TT && null !== TT && TT.code === zT.b.VpnIp.code
      }(oT) && function(TT) {
        return kT.c.supports("appCheck") && TT.isLoggedIn() && !TT.hasTriedAppAttestation()
      }(TT) && await async function(TT) {
        try {
          const {
            token: oT
          } = await (0, WT.c)(), {
            "3PSIDMCPP": IT
          } = await (0, BT.postJsonWithMetricsCookiesAndJsonResponse)(`${XT.clientSideServerUrls.indexUrl}/index/app-attestation`, {
            appCheckToken: oT
          }, {
            retries: 0
          }, TT.getMetricsCookies());
          return TT.setAppAttestedAuthJwt(IT), !0
        } catch (oT) {
          return oT instanceof iT.e && "failed" === oT.code ? (console.warn("The app couldn't get an App Check token:", oT), TT.markAppAttestationTried()) : console.error("Failed to attest the app:", oT), !1
        }
      }(TT)
    }
    async function ST(TT, oT) {
      try {
        return await oT()
      } catch (IT) {
        if (!await FT(TT, IT)) throw IT
      }
      return oT()
    }
  },
  38020: (TT, oT, IT) => {
    IT.d(oT, {
      e: () => DT,
      g: () => FT
    });
    var iT = IT(193),
      zT = IT(4161),
      kT = IT(3210);
    const WT = [250, 500, 1e3, 2e3, 1250],
      XT = 406;

    function BT(TT) {
      if ("object" !== typeof TT || null === TT) return !1;
      const {
        code: oT,
        message: IT
      } = TT, zT = iT.b.duplicateLobbyNameError;
      return (oT === zT.code || oT === XT) && (IT === zT.text || IT === zT.text + iT.k)
    }
    async function FT(TT, oT) {
      let IT = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : zT.c;
      for (let zT = 0;; zT++) {
        let XT;
        (0, kT.o)(oT);
        try {
          return await TT()
        } catch (iT) {
          if (XT = WT[zT], void 0 === XT || !BT(iT)) throw iT
        }
        await IT(XT, oT)
      }
    }
    const ST = new Set([iT.b.duplicateLobbyNameError.code, iT.b.lobbyCantBeCreated.code, iT.b.roomDisposedEarlyError.code, iT.b.roomDisposedLateError.code, iT.b.serverRoomLimitReached.code]);

    function DT(TT) {
      if (BT(TT)) return !0;
      const oT = "object" === typeof TT && null !== TT ? TT.code : void 0;
      return "number" === typeof oT && ST.has(oT)
    }
  },
  37960: (TT, oT, IT) => {
    IT.d(oT, {
      c: () => kT,
      g: () => zT
    });
    var iT = IT(16);

    function zT(TT) {
      return "refetchCode" === TT || "devDownloadJson" === TT || TT.startsWith("Plugin")
    }

    function kT(TT, oT) {
      "refetchCode" !== TT ? "Plugin|MobAiPlugin|ShowPetUi" !== TT ? Promise.all([IT.e(106), IT.e(107), IT.e(102), IT.e(104), IT.e(205)]).then((() => IT(40571))).then((IT => {
        let {
          runClientGameMessage: iT
        } = IT;
        iT(TT, oT)
      })).catch((oT => {
        console.error(`Game message ${TT} failed`, oT)
      })) : iT.h.XM("showPetUi", oT) : iT.h.XM("refetchCode")
    }
  },
  38038: (TT, oT, IT) => {
    IT.d(oT, {
      b: () => iT,
      f: () => zT
    });
    const iT = 45e3;
    class zT extends Error {
      constructor() {
        super("The game server didn't answer in time"), this.name = "SeatRequestTimedOut"
      }
    }
  },
  37951: (TT, oT, IT) => {
    IT.d(oT, {
      c: () => ST
    });
    var iT = IT(1193),
      zT = IT(1296),
      kT = IT(12),
      WT = IT(1280),
      XT = IT(1293),
      BT = IT(1468),
      FT = IT(35468);

    function ST(TT) {
      let {
        FI: oT,
        SI: IT
      } = TT;
      const ST = null !== oT && void 0 !== oT ? oT : (0, XT.e)().gameNameWithVariation;
      (0, iT.J)(ST) && ((0, FT.l)(), (0, WT.db)((() => {
        console.log("Received matchmaking order from game server to game", oT), (0, kT.h)("inGameReplay"), (0, BT.navigatePreserveSearch)((0, zT.c)(ST, null !== IT && void 0 !== IT ? IT : void 0))
      }), "video_start"))
    }
  },
  37938: (TT, oT, IT) => {
    IT.d(oT, {
      d: () => BT,
      g: () => WT,
      i: () => XT,
      l: () => FT
    });
    var iT = IT(16),
      zT = IT(1325);
    const kT = new Map;

    function WT(TT, oT) {
      iT.h.XM("newUiRequest", {
        id: TT,
        clientParameters: oT
      }, !0)
    }

    function XT(TT) {
      iT.h.XM("removeUiRequest", TT, !0);
      const oT = kT.get(TT);
      oT && (oT.tearDownNotification(), kT.delete(TT))
    }

    function BT() {
      iT.h.XM("clearUiRequests");
      for (const TT of kT.values()) TT.tearDownNotification();
      kT.clear()
    }

    function FT(TT, oT, IT) {
      const iT = zT.NotificationProvider.showPromptPopup({
        title: oT,
        confirmText: "general:yes",
        cancelText: "general:no",
        unlockPointerKey: "uiRequestPopup"
      });
      kT.set(TT, iT), iT.getResult().then((oT => {
        kT.delete(TT), "notificationTornDown" !== oT && IT(oT)
      }))
    }
  },
  37962: (TT, oT, IT) => {
    IT.d(oT, {
      c: () => XT,
      d: () => BT,
      g: () => FT
    });
    var iT = IT(1193),
      zT = IT(1007),
      kT = IT(35823),
      WT = IT(16);

    function XT(TT) {
      let {
        lobbyName: oT,
        gameNameWithVariation: IT
      } = TT;
      return !(0, iT.L)(oT) || null !== IT && (IT.startsWith("testGym") || (0, zT.m)(IT))
    }

    function BT(TT) {
      return TT.po === kT.e.Leave || TT.po === kT.e.Cursor
    }

    function FT(TT) {
      WT.h.XM("codeCollab", {
        type: TT.po,
        docKey: TT.bo,
        version: TT.yo,
        editorCount: TT.Po,
        peers: TT.Vo,
        updates: TT.TI,
        playerId: TT.oI,
        playerName: TT.II,
        colour: TT.iI,
        anchor: TT.zI,
        head: TT.kI,
        existingCursors: TT.WI,
        files: TT.XI,
        engineSettings: TT.BI
      })
    }
  },
  37973: (TT, oT, IT) => {
    IT.d(oT, {
      b: () => iT
    });
    class iT {
      constructor() {
        this.members = new Map
      }
      apply(TT) {
        const oT = {
          added: [],
          removed: [],
          settingChanges: []
        };
        for (const iT of TT.Qo) {
          let TT = this.members.get(iT.Oo);
          if (TT || (TT = {
              name: null,
              settings: {}
            }, this.members.set(iT.Oo, TT), oT.added.push(iT.Oo)), null !== iT.Ho && (TT.name = iT.Ho), null !== iT.qo || iT.Zo.length > 0) {
            const IT = null === iT.qo ? {} : JSON.parse(iT.qo);
            Object.assign(TT.settings, IT);
            for (const oT of iT.Zo) delete TT.settings[oT], IT[oT] = void 0;
            oT.settingChanges.push({
              playerId: iT.Oo,
              settings: IT
            })
          }
        }
        for (const iT of TT.Go) {
          const TT = this.members.get(iT);
          var IT;
          if (TT) this.members.delete(iT), oT.removed.push({
            playerId: iT,
            name: null !== (IT = TT.name) && void 0 !== IT ? IT : void 0
          })
        }
        return oT
      }
      has(TT) {
        return this.members.has(TT)
      }
      ids() {
        return [...this.members.keys()]
      }
      getName(TT) {
        var oT, IT;
        return null !== (oT = null === (IT = this.members.get(TT)) || void 0 === IT ? void 0 : IT.name) && void 0 !== oT ? oT : void 0
      }
      getSettings(TT) {
        var oT;
        return null === (oT = this.members.get(TT)) || void 0 === oT ? void 0 : oT.settings
      }
      getSetting(TT, oT) {
        var IT;
        return null === (IT = this.members.get(TT)) || void 0 === IT ? void 0 : IT.settings[oT]
      }
      clear() {
        this.members.clear()
      }
    }
  },
  38004: (TT, oT, IT) => {
    IT.d(oT, {
      e: () => iT,
      g: () => zT
    });
    const iT = ["description", "label"];

    function zT(TT) {
      const oT = TT.type;
      return {
        type: oT,
        params: TT[oT]
      }
    }
  }
};
Object.freeze(modules);
for (const TT in modules) Object.freeze(modules[TT]);