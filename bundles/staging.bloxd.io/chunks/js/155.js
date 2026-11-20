export const id = 155;
export const ids = [155];
export const modules = {
  38914: (TT, kT, cT) => {
    function lT(TT) {
      return !(!TT.lobbyLeaderboardInfo && !TT.lobbyManage)
    }
    cT.d(kT, {
      b: () => lT
    })
  },
  38888: (TT, kT, cT) => {
    cT.d(kT, {
      e: () => KT,
      h: () => OT
    });
    var lT = cT(36);
    let MT = !1;

    function KT() {
      return MT
    }

    function OT(TT) {
      MT !== TT && (MT = TT, lT.k.nt("replayViewer|videoExportChanged"))
    }
  },
  38796: (TT, kT, cT) => {
    cT.d(kT, {
      b: () => KT
    });
    var lT = cT(36),
      MT = cT(1974);

    function KT(TT) {
      let {
        taskId: kT,
        progress: cT
      } = TT;
      const lT = MT.b.get("_tasks");
      null !== lT && void 0 !== lT && lT[kT] && MT.b.apply({
        _tasks: {
          ...lT,
          [kT]: {
            ...lT[kT],
            progress: cT
          }
        }
      })
    }
    lT.k.subscribe("clientTaskProgress", (TT => {
      KT(TT)
    }))
  },
  38906: (TT, kT, cT) => {
    cT.d(kT, {
      e: () => tT,
      h: () => hT,
      k: () => vT
    });
    var lT = cT(2853);
    const MT = 0,
      KT = 2,
      OT = 3,
      yT = 4;
    class fT {
      constructor(TT, kT) {
        this.width = TT, this.DA = kT, this.data = void 0, this.next = 0, this.size = 0, this.data = new Float64Array(TT * kT)
      }
      push(TT) {
        let kT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        const cT = this.data.subarray(this.next * this.width, (this.next + 1) * this.width);
        for (let lT = 0; lT < this.width; lT++) cT[lT] = TT[kT + lT];
        return this.next = (this.next + 1) % this.DA, this.size = Math.min(this.size + 1, this.DA), cT
      }
      lines() {
        const TT = [],
          kT = (this.next - this.size + this.DA) % this.DA;
        for (let cT = 0; cT < this.size; cT++) {
          const lT = (kT + cT) % this.DA * this.width;
          TT.push(Array.from(this.data.subarray(lT, lT + this.width)).join(","))
        }
        return TT
      }
    }

    function xT(TT) {
      return Number.isFinite(TT) ? String(Math.round(10 * TT) / 10) : String(TT)
    }

    function IT(TT) {
      return Number.isFinite(TT) ? TT.toFixed(1) : String(TT)
    }
    class AT {
      constructor() {
        this.frames = 0, this.looked = 0, this.idle = 0, this.ZE = 0, this.pastLimit = 0, this.lockSkips = 0, this.yh = 0, this.lost = 0, this.dropped = 0, this.longFrames = 0, this.dtMin = 1 / 0, this.dtMax = 0, this.dtSum = 0, this.raw = [0, 0], this.turned = [0, 0], this.peakRate = 0, this.events = 0, this.eventMax = 0, this.bigEvents = 0, this.outliers = 0, this.eventLines = 0, this.suppressed = 0
      }
    }
    class CT {
      constructor() {
        var TT = this;
        this.tally = new AT, this.records = new fT(10, 3600), this.events = new fT(4, 12e3), this.event = new Float64Array(4), this.take = null, this.client = "js", this.started = !1, this.record = function(kT) {
          let cT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
          const [lT, fT, AT, CT, jT, vT, tT, hT, NT, QT] = TT.records.push(kT, cT), ST = TT.tally;
          switch (ST.frames++, tT) {
            case MT:
              return void ST.idle++;
            case yT:
              return void ST.yh++;
            case OT:
              return ST.lockSkips++, void(0 === AT && 0 === CT || TT.outlier(`lock skip dropped raw (${xT(AT)}, ${xT(CT)}) at ${IT(lT)} ms`))
          }
          ST.looked++, Number.isFinite(fT) && (ST.dtMin = Math.min(ST.dtMin, fT), ST.dtMax = Math.max(ST.dtMax, fT), ST.dtSum += fT, fT > 0 && (ST.peakRate = Math.max(ST.peakRate, Math.hypot(jT, vT) / fT))), ST.raw[0] += AT, ST.raw[1] += CT, ST.turned[0] += jT, ST.turned[1] += vT;
          const DT = Math.abs(AT) > QT || Math.abs(CT) > QT,
            aT = `raw (${xT(AT)}, ${xT(CT)}) over ${IT(fT)} ms, limit ${xT(QT)}, filter v (${hT.toFixed(3)}, ${NT.toFixed(3)}) px/ms, at ${IT(lT)} ms`;
          tT === KT ? (ST.ZE++, TT.outlier(`spike put right: ${aT} -> turned (${xT(jT)}, ${xT(vT)})`)) : DT ? (ST.pastLimit++, TT.outlier(`kept past limit: ${aT}`)) : fT > 50 && (ST.longFrames++, TT.outlier(`long frame: ${aT}, turned in full`))
        }, this.onMouseMove = TT => {
          const kT = this.tally,
            {
              movementX: cT,
              movementY: lT
            } = TT;
          kT.events++;
          const MT = Math.max(Math.abs(cT), Math.abs(lT));
          kT.eventMax = Math.max(kT.eventMax, MT);
          const KT = null !== document.pointerLockElement,
            OT = this.event;
          OT[0] = TT.timeStamp, OT[1] = cT, OT[2] = lT, OT[3] = KT ? 1 : 0, this.events.push(OT), MT >= 200 && (kT.bigEvents++, this.eventOutlier(`big mousemove (${cT}, ${lT}) at ${IT(TT.timeStamp)} ms, lock ${KT?"ty":"free"}`))
        }, this.onLockChange = () => {
          const TT = document.pointerLockElement;
          (0, lT.k)("look", `pointer lock ${TT?`gained (${TT.tagName.toLowerCase()})`:"lost"} at ${IT(performance.now())} ms`)
        }, this.onLockError = () => {
          (0, lT.k)("look", `pointer lock request failed at ${IT(performance.now())} ms`)
        }, this.onVisibility = () => {
          (0, lT.k)("look", `page ${document.visibilityState} at ${IT(performance.now())} ms`)
        }, this.flush = () => {
          this.takeRecords();
          const TT = this.tally;
          if (this.tally = new AT, 0 === TT.events && 0 === TT.raw[0] && 0 === TT.raw[1] && 0 === TT.lockSkips && 0 === TT.ZE && 0 === TT.dropped) return;
          const kT = TT.looked > 0 ? TT.dtSum / TT.looked : NaN,
            cT = [`${TT.frames} frames (${TT.looked} looked, ${TT.idle} idle${"wasm"===this.client?`, ${TT.yh} carried`:""})`, `dt avg ${IT(kT)} min ${IT(TT.dtMin)} max ${IT(TT.dtMax)}, ${TT.longFrames} long`, `${TT.events} mousemoves (max ${xT(TT.eventMax)} px, ${TT.bigEvents} big)`, `raw (${xT(TT.raw[0])}, ${xT(TT.raw[1])}) turned (${xT(TT.turned[0])}, ${xT(TT.turned[1])})`, `peak ${TT.peakRate.toFixed(2)} px/ms`, `put right ${TT.ZE}, past limit ${TT.pastLimit}, lock skips ${TT.lockSkips}`, "lock " + (document.pointerLockElement ? "ty" : "free")];
          TT.dropped > 0 && cT.push(`${TT.dropped} doubled spike copies dropped`), TT.lost > 0 && cT.push(`${TT.lost} records lost`), TT.suppressed > 0 && cT.push(`${TT.suppressed} outlier lines not shown`), (0, lT.k)("look", `1s: ${cT.join("; ")}`)
        }, this.dump = () => [`look records (${this.client}): nowMs,dtMs,rawX,rawY,turnedX,turnedY,outcome,vX,vY,limit`, ...this.records.lines(), "mousemove events: timeStamp,movementX,movementY,locked", ...this.events.lines()].join("\n")
      }
      start(TT, kT) {
        this.client = TT, this.take = kT;
        const {
          screen: cT
        } = window;
        (0, lT.k)("look", `start: ${TT} client, dpr ${window.devicePixelRatio}, screen ${cT.width}x${cT.height}, pointer lock ${document.pointerLockElement?"ty":"free"}`), this.started || (this.started = !0, window.addEventListener("mousemove", this.onMouseMove, {
          capture: !0,
          passive: !0
        }), document.addEventListener("pointerlockchange", this.onLockChange), document.addEventListener("pointerlockerror", this.onLockError), document.addEventListener("visibilitychange", this.onVisibility), setInterval(this.flush, 1e3), (0, lT.j)("look", this.dump))
      }
      outlier(TT) {
        const kT = this.tally;
        kT.outliers >= 20 ? kT.suppressed++ : (kT.outliers++, (0, lT.k)("look", TT))
      }
      eventOutlier(TT) {
        const kT = this.tally;
        kT.eventLines >= 10 ? kT.suppressed++ : (kT.eventLines++, (0, lT.k)("look", TT))
      }
      takeRecords() {
        var TT;
        const kT = null === (TT = this.take) || void 0 === TT ? void 0 : TT.call(this);
        if (kT && kT.length >= 2) {
          this.tally.lost += kT[0], this.tally.dropped += kT[1];
          for (let TT = 2; TT + 10 <= kT.length; TT += 10) this.record(kT, TT)
        }
      }
      droppedCopy() {
        this.tally.dropped++
      }
      endTake() {
        this.takeRecords(), this.take = null
      }
    }
    let jT = null;

    function vT(TT) {
      let kT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
      return jT ??= new CT, jT.start(TT, kT), jT.record
    }

    function tT() {
      var TT;
      null === (TT = jT) || void 0 === TT || TT.endTake()
    }

    function hT() {
      var TT;
      null === (TT = jT) || void 0 === TT || TT.droppedCopy()
    }
  },
  38789: (TT, kT, cT) => {
    cT.d(kT, {
      c: () => Uk,
      g: () => Rk,
      k: () => gk
    });
    var lT = cT(3644),
      MT = cT(184),
      KT = cT(218),
      OT = cT(623),
      yT = cT(47),
      fT = cT(2790),
      xT = cT(3732),
      IT = cT(3719),
      AT = cT(1226);
    const CT = new WeakMap;
    class jT {
      constructor(TT, kT) {
        let cT = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {
          yxT: !0
        };
        this.callbacks = kT, this.options = cT, this.EkT = void 0, this.sessionId = void 0, this.bD = [], this.fxT = !1, this.yv = !1, this.xxT = void 0, this.mD = 0, this.ZlT = 0, this.IxT = (TT, kT) => {
          if (this.yv) return;
          const cT = Number(TT);
          this.fxT ? this.jxT(cT, kT) : this.bD.push({
            id: cT,
            payload: kT
          })
        }, this.dispose = () => {
          this.yv || (this.yv = !0, CT.delete(this), this.bD.length = 0, this.xxT())
        }, this.EkT = TT, this.sessionId = TT.sessionId, CT.set(this, []), this.xxT = this.vxT()
      }
      txT(TT) {
        this.xxT(), this.EkT = TT, this.sessionId = TT.sessionId, this.mD = 0, this.ZlT = 0, this.xxT = this.vxT()
      }
      get rD() {
        return this.ZlT
      }
      vxT() {
        const TT = this.EkT.yN("*", this.IxT);
        return this.options.yxT && this.EkT.ZF(this.dispose), TT
      }
      jxT(TT, kT) {
        try {
          (0, xT.lc)(TT) && (kT = (0, xT.c)(TT, IT.Ov.from(kT)));
          const cT = CT.get(this)[TT];
          if ("function" !== typeof cT) {
            if (this.callbacks.hxT) return void this.callbacks.hxT(TT, kT);
            throw new Error(`No onMessage handler registered for message id ${TT}`)
          }
          cT(kT)
        } catch (cT) {
          this.callbacks.NxT(`Error in onMessage ${TT} with payload ${JSON.stringify(kT)}`, cT)
        } finally {
          this.mD++
        }
      }
      QxT() {
        for (const {
            id: TT,
            payload: kT
          }
          of this.bD) {
          if (this.yv) break;
          this.jxT(TT, kT)
        }
        this.bD.length = 0
      }
      VkT() {
        return this.yv
      }
      SxT() {
        if (this.fxT || this.yv) throw new Error("Trying to getOnMessageRegistrationHandler after registration finished");
        return {
          yN: (TT, kT) => {
            if (this.fxT || this.yv) throw new Error("Trying to call onMessage after registration finished");
            this.yN(TT, kT)
          },
          finishRegistration: () => {
            if (this.yv) throw new Error("Cannot finish message registration after disposal");
            this.fxT = !0, this.QxT()
          }
        }
      }
      yN(TT, kT) {
        var cT, lT;
        null === (cT = (lT = this.callbacks).axT) || void 0 === cT || cT.call(lT);
        const MT = CT.get(this);
        for (; TT > MT.length;) MT[MT.length] = null;
        MT[TT] = kT
      }
      send(TT, kT) {
        this.FxT(), (0, AT.C)(kT) ? this.EkT.SF(TT, kT) : this.EkT.send(TT, kT)
      }
      FxT() {
        var TT, kT;
        (this.ZlT++, 5 === vT++) && (null === (TT = (kT = this.callbacks).axT) || void 0 === TT || TT.call(kT), vT = 0)
      }
      hN() {
        this.dispose(), this.EkT.hN()
      }
      leave() {
        this.dispose(), this.EkT.leave()
      }
    }
    let vT = 0;
    var tT = cT(3665);
    class hT extends jT {
      constructor(TT) {
        super(TT, {
          axT: () => {
            (0, yT.k)(!0) && (0, lT.ND)()
          },
          NxT: (TT, kT) => {
            var cT;
            null === (cT = (0, fT.f)()) || void 0 === cT || cT.jt(TT, kT)
          }
        }, {
          yxT: !1
        }), (0, tT.d)(TT)
      }
      eD(TT, kT) {
        return !!(0, tT.g)((0, tT.b)(), this.EkT, TT, kT) && (this.FxT(), !0)
      }
      txT(TT) {
        this.rxT(), super.txT(TT), (0, tT.d)(TT)
      }
      hN() {
        super.hN(), this.rxT()
      }
      rxT() {
        this.EkT.aN.pj.MJ = void 0
      }
    }
    var NT = cT(36),
      QT = cT(1974),
      ST = cT(1741),
      DT = cT(36278);

    function aT(TT, kT, cT, lT, MT) {
      let KT = arguments.length > 5 && void 0 !== arguments[5] && arguments[5];
      if (!TT.oN.HTT(TT.jH)) return console.log("Got resync inven but don't have inven component"), void kT.acknowledge(lT);
      KT && console.error("Had to sync inven"), kT.y5(lT, MT) && cT.nt("chestToggleFromServer", !1, !0), cT.nt("syncedInvenFromServer")
    }
    var FT = cT(38796),
      rT = cT(38799),
      PT = cT(37882),
      wT = cT(37669),
      mT = cT(617),
      bT = cT(38245);

    function zT(TT, kT, cT) {
      const lT = function(TT) {
          const kT = new Int32Array(TT.length * bT.g);
          return TT.forEach(((TT, cT) => {
            const lT = cT * bT.g;
            if (4 === TT.length) {
              const [cT, MT, KT, OT] = TT;
              kT.set([cT, MT, KT, cT, MT, KT, OT], lT)
            } else {
              const [cT, MT, KT, OT, yT, fT, xT] = TT;
              kT.set([cT, KT, yT, MT, OT, fT, xT], lT)
            }
          })), kT
        }(cT),
        MT = (kT, cT, lT, MT) => {
          TT.setBlockNoMulti(kT, cT, lT, MT, !0)
        };
      TT.client.gameRecorder.isCapturing() ? (0, bT.vb)(lT, (0, bT.tb)(lT), MT) : TT.cC.pA.TE(lT, {
        OE: MT,
        isHookId: kT => TT.blockChangeHasHooks(kT),
        watched: () => function(TT, kT, cT) {
          const lT = [],
            MT = (TT, kT, cT) => {
              lT.push(TT, kT, cT)
            },
            KT = new Set;
          for (let OT = 0; OT < cT.length; OT += bT.g)
            for (let kT = (0, mT.ab)(cT[OT]); kT <= (0, mT.ab)(cT[OT + 3]); kT++)
              for (let lT = (0, mT.ab)(cT[OT + 1]); lT <= (0, mT.ab)(cT[OT + 4]); lT++)
                for (let yT = (0, mT.ab)(cT[OT + 2]); yT <= (0, mT.ab)(cT[OT + 5]); yT++) {
                  const cT = `${kT}|${lT}|${yT}`;
                  KT.has(cT) || (KT.add(cT), TT.blockDataOwner.forEachDataCell(kT, lT, yT, MT))
                }
          return kT.forEachCell(MT), Int32Array.from(lT)
        }(TT, kT, lT)
      }), TT.cC.B_()
    }
    var JT = cT(36963),
      oT = cT(38803),
      HT = cT(38808),
      eT = cT(1018),
      GT = cT(1982);
    var VT = cT(4488);

    function ET(TT) {
      const kT = TT.pA;
      let cT = 0,
        MT = -1,
        OT = -1 / 0,
        yT = null,
        fT = !0;
      const IT = () => {
        if (++cT % 10 !== 0) return;
        const IT = (0, lT.getLastReceivedPacketId)();
        if (IT <= MT) return;
        const [AT, CT, jT] = TT.oN.kN(TT.jH), vT = ! function(TT) {
          var kT;
          let cT = null === (kT = TT.oN.hkT(TT.jH)) || void 0 === kT ? void 0 : kT.Tv;
          if (void 0 === cT) return !1;
          const lT = new Set;
          for (; void 0 !== cT && !lT.has(cT);) {
            var MT;
            lT.add(cT);
            const kT = TT.oN.getState(cT, "smoothToServerPos"),
              KT = Array.isArray(kT) ? null : null === kT || void 0 === kT ? void 0 : kT.serverPosition;
            if (KT) {
              const kT = TT.oN.kN(cT);
              if (Math.abs(kT[0] - KT[0]) > 10 || Math.abs(kT[1] - KT[1]) > 10 || Math.abs(kT[2] - KT[2]) > 10) return !0
            }
            cT = null === (MT = TT.oN.hkT(cT)) || void 0 === MT ? void 0 : MT.Tv
          }
          return !1
        }(TT) && function(TT, kT, cT, lT) {
          const MT = KT.f.vv;
          for (let KT = 0; KT < TT.length; KT++) {
            const OT = TT[KT];
            if (!(0, VT.j)(kT, cT, lT, OT[0] * MT, OT[1] * MT, OT[2] * MT)) return !1
          }
          return !0
        }(kT.gt.fv, AT, CT, jT), tT = null === yT || Math.abs(AT - yT[0]) > 8 || Math.abs(CT - yT[1]) > 8 || Math.abs(jT - yT[2]) > 8, hT = !fT || tT || performance.now() - OT >= 1e4;
        fT = vT, vT && hT && (MT = IT, OT = performance.now(), yT = [AT, CT, jT], (0, lT.sendColyMessage)(xT.ng, {
          kI: IT
        }))
      };
      return TT.on("UA", IT), () => {
        TT.off("UA", IT)
      }
    }
    var ZT = cT(36591),
      uT = cT(350),
      XT = cT.n(uT),
      dT = cT(6486),
      LT = cT(37909),
      RT = cT(37650),
      gT = cT(37630),
      UT = cT(4508),
      YT = cT(37943),
      BT = cT(37767),
      WT = cT(37235),
      nT = cT(37539),
      pT = cT(38810),
      iT = cT(36573),
      qT = cT(36580),
      sT = cT(38815),
      Tk = cT(38819),
      kk = cT(3615),
      ck = cT(1530),
      lk = cT(2784),
      Mk = cT(2873),
      Kk = cT(38097),
      Ok = cT(36868),
      yk = cT(4745),
      fk = cT(38856),
      xk = cT(37930),
      Ik = cT(4220),
      Ak = cT(36955),
      Ck = cT(37056),
      jk = cT(37951),
      vk = cT(38823),
      tk = cT(38834),
      hk = cT(37233);
    class Nk {
      constructor(TT, kT, cT, lT) {
        this.gameNameWithVariation = TT, this.cC = cT, this.connectionResume = lT, this.stateReplicationHandler = void 0, this.stopChunkReports = () => {}, this.replayResume = null, this.stateReplicationHandler = new tk.e(kT, this.cC)
      }
      setupStateReplicationHandlers() {
        this.stateReplicationHandler.setup(), (0, lT.onGameResetOnce)((() => {
          this.stateReplicationHandler.dispose()
        }))
      }
      txT(TT) {
        this.stateReplicationHandler.dispose(), this.stateReplicationHandler = new tk.e(TT, this.cC), this.stateReplicationHandler.setup()
      }
      clearBlockRules() {
        const TT = this.cC.pA;
        TT.PkT = new Set, TT.bkT = new Set, TT.wkT = new Set, TT.zkT = new Set, TT.mkT = [], TT.JkT = [], TT.wV = new Set, TT.wc = [], TT.mV = []
      }
      clearUiRequestsAndQTEs() {
        yk.d.reset(), (0, rT.d)()
      }
      startChunkReports() {
        const TT = function(TT) {
            let kT = null,
              cT = -1 / 0,
              MT = null;
            const KT = () => {
                MT = null;
                const KT = Math.ceil(TT.uD[0]),
                  OT = Math.ceil(TT.uD[1]);
                kT && kT[0] === KT && kT[1] === OT || (kT = [KT, OT], cT = performance.now(), (0, lT.sendColyMessage)(xT.mg, {
                  ZI: KT,
                  uI: OT
                }))
              },
              OT = () => {
                null === MT && (MT = setTimeout(KT, Math.max(0, cT + 250 - performance.now())))
              };
            return KT(), TT.on("addRemoveDistanceChanged", OT), () => {
              TT.off("addRemoveDistanceChanged", OT), null !== MT && (clearTimeout(MT), MT = null)
            }
          }(this.cC.pA),
          kT = ET(this.cC);
        this.stopChunkReports = () => {
          TT(), kT()
        }
      }
      restartChunkStreaming() {
        (0, nT.i)(this.cC, (0, fT.c)().recentChunkEdits.chunksEditedSince(this.connectionResume.getDroppedAt() - pT.c)), this.startChunkReports()
      }
      setupOnMessageListeners(TT, kT) {
        const cT = this.cC,
          MT = this.gameNameWithVariation;
        TT.yN(xT.xc, (TT => {
          let {
            dl: kT,
            Ll: lT,
            Rl: MT,
            gl: KT,
            Ul: OT,
            Yl: yT,
            Bl: fT,
            Wl: xT,
            nl: IT
          } = TT;
          if (!cT.oN.o9(kT, "itemState")) return void(0, RT.j)(cT, kT, [OT, yT, fT], lT, {
            amount: MT,
            attributes: JSON.parse(KT),
            Wl: xT,
            size: IT
          });
          const AT = cT.oN.getState(kT, "itemState");
          AT.amount = MT, AT.Wl = xT, AT.creationTime = Date.now(), (0, gT.setServerPosition)(cT.oN.getState(kT, "smoothToServerPos"), OT, yT, fT)
        })), TT.yN(xT.ob, (TT => {
          (0, JT.e)(cT).setCantPickUp(TT, !0), cT.oN.o9(TT, "itemState") && (cT.oN.getState(TT, "itemState").Wl = !0)
        })), TT.yN(xT.Sd, (TT => {
          (0, JT.e)(cT).setCantPickUp(TT, !1), cT.oN.o9(TT, "itemState") && (cT.oN.getState(TT, "itemState").Wl = !1)
        })), TT.yN(xT.Tc, (TT => {
          QT.b.applyNewClientOptions(TT)
        })), TT.yN(xT.Wc, (TT => {
          let {
            eId: kT,
            settings: lT
          } = TT;
          (0, Ck.f)(kT);
          for (const cT in lT)(0, Ck.b)(kT, cT, lT[cT]);
          if ("canSee" in lT && cT.oN.o9(kT, "hidingMeshManager")) {
            const TT = cT.oN.getState(kT, "hidingMeshManager");
            TT.canSee = (0, jk.e)("canSee", lT.canSee), TT._forceUpdate = !0
          }
        })), TT.yN(xT.$e, (TT => {
          let {
            GM: kT,
            VM: MT,
            EM: KT,
            ZM: OT
          } = TT;
          const yT = [MT, KT, OT];
          cT.oN.setPosition(cT.jH, yT), (0, lT.sendColyMessage)(xT.Kg, {
            ly: kT,
            My: UT.g
          }), NT.k.nt("localPlayerTeleported", {
            pos: yT,
            isCorrection: !1
          })
        })), TT.yN(xT.fd, (TT => {
          let {
            xl: kT,
            Il: cT,
            Al: lT,
            Cl: MT
          } = TT;
          this.stateReplicationHandler.setUpIfQueued(kT);
          const KT = [cT, lT, MT];
          NT.k.nt(`otherPlayerTeleported|${kT}`, {
            pos: KT
          })
        })), TT.yN(xT.xd, (TT => {
          let {
            jk: kT,
            vk: MT,
            tk: KT,
            hk: OT,
            Nk: yT,
            Qk: fT,
            Sk: IT,
            ak: AT,
            Dk: CT,
            Pk: jT
          } = TT;
          const vT = [MT, KT, OT];
          cT.oN.setPosition(cT.jH, vT);
          const tT = cT.oN.ITT(cT.jH),
            hT = cT.oN.JV(cT.jH);
          XT().set(hT.KV, 0, 0, 0), XT().set(hT.yV, 0, 0, 0), XT().set(hT.Oh, yT, fT, IT), hT.fV(), tT._flying = null !== jT, jT ? (tT.flyAccel.wk = jT.wk, tT.flyAccel.mk = jT.mk) : tT.flyAccel.reset(), AT && tT.movementType === dT.s.GLIDING && (tT.Fk = AT.Fk, XT().copy(tT.rk, AT.rk)), (0, lT.sendColyMessage)(xT.Kg, {
            ly: kT,
            My: UT.g
          }), NT.k.nt("localPlayerTeleported", {
            pos: vT,
            isCorrection: !0
          })
        }));

        function KT() {
          return cT.oN.eTT(cT.jH)
        }
        TT.yN(xT.wb, (TT => {
          let {
            chatMsgId: kT,
            content: cT,
            chatterEId: lT
          } = TT;
          NT.k.nt("chat", {
            serverChatMsgId: kT,
            content: cT,
            chatterEId: lT
          }, !0)
        })), TT.yN(xT.md, (TT => {
          lk.e.onReceiveColyseusPing(TT)
        })), TT.yN(xT.ye, (TT => {
          let {
            key: kT,
            value: cT
          } = TT;
          (0, ST.setCookie)(MT, kT, cT)
        })), TT.yN(xT.De, (TT => {
          NT.k.nt("setDiscordReportKey", TT)
        })), (0, lT.onGameResetOnce)((() => {
          this.stopChunkReports()
        })), TT.yN(xT.pc, (kT => {
          const {
            dc: MT,
            Lc: KT
          } = kT;
          if ((0, lT.setAdjustment)(KT), this.connectionResume.onInitialInfo(kT.Rc, kT.gc), lT.offlineInputReplay.PD(kT.Uc), this.connectionResume.isResuming()) {
            console.log("Resumed the connection as eId", MT);
            try {
              null === kT.Yc && (0, fT.c)().client.inventoryPrediction.dropPending(), this.stopChunkReports(), this.clearBlockRules(), QT.b.apply({
                shopInfo: null,
                _shopVersion: GT.e
              });
              const lT = cT.oN.VTT(cT.jH);
              lT.Hl && (lT.chestClosed(), NT.k.nt("chestToggleFromServer", !1, !0)), this.clearUiRequestsAndQTEs(), NT.k.nt("initInfoReceived", TT)
            } finally {
              const TT = null === kT.Yc ? null : {
                sync: null,
                endSeq: null
              };
              this.replayResume = TT, this.connectionResume.onResumeInitialInfo(kT.Yc, (() => {
                TT.endSeq = (0, fT.c)().client.inventoryPrediction.lastActionSeq
              })), null === TT && this.restartChunkStreaming()
            }
          } else console.log("Local client is eId", MT), NT.k.nt("loadingScreenState", "loadingPage:loadingWorld"), cT.W9 = MT, cT.oN.o9(cT.jH, cT.oN.names.entityName) && cT.oN.LJ(cT.jH, cT.oN.names.entityName), (0, fT.c)().setEntityName(cT.W9, (0, fT.c)().getRawEntityName(cT.jH)), cT.IH[cT.W9] = {}, cT.oN.dJ(cT.jH, cT.oN.names.entityName), NT.k.nt("initInfoReceived", TT), this.startChunkReports(), OT.client.onServerConnectionFinalised()
        })), TT.yN(xT.he, (() => {
          this.connectionResume.isResuming() ? this.connectionResume.onResumed((() => {
            const TT = this.replayResume;
            if (this.replayResume = null, !TT) return;
            this.restartChunkStreaming();
            const {
              inventoryPrediction: kT
            } = (0, fT.c)().client, {
              sync: MT
            } = TT, KT = new Set(lT.offlineInputReplay.takeDroppedActions());
            if (MT) {
              var OT;
              const lT = null !== (OT = TT.endSeq) && void 0 !== OT ? OT : kT.lastActionSeq;
              kT.forget((TT => TT > MT.Zl && TT <= lT || KT.has(TT))), aT(cT, kT, NT.k, MT.Zl, MT.load)
            } else kT.dropPending(), kT.askForSnapshot()
          })) : console.warn("ResumeComplete arrived without a resume")
        })), TT.yN(xT.bf, (TT => {
          NT.k.nt("TopRightHelper", TT, !0)
        })), TT.yN(xT.Cd, (TT => {
          let {
            type: kT,
            location1: cT,
            location2: lT,
            location3: MT,
            score: KT
          } = TT;
          (0, Mk.v)({
            type: kT,
            location1: cT,
            location2: lT,
            location3: MT,
            score: KT
          })
        })), TT.yN(xT.de, (TT => {
          let {
            type: kT,
            resourceType: cT,
            amount: lT,
            category: MT,
            itemName: KT
          } = TT;
          (0, Mk.y)({
            type: kT,
            resourceType: cT,
            amount: lT,
            category: MT,
            itemName: KT
          })
        })), TT.yN(xT.Z, (TT => {
          cT.pA.PkT.add(TT), cT.pA.bkT.delete(TT)
        })), TT.yN(xT.gb, (TT => {
          cT.pA.bkT.add(TT), cT.pA.PkT.delete(TT)
        })), TT.yN(xT.Ud, (TT => {
          cT.pA.bkT.delete(TT), cT.pA.PkT.delete(TT)
        })), TT.yN(xT.cb, (TT => {
          cT.pA.wkT.add(TT), cT.pA.zkT.delete(TT)
        })), TT.yN(xT.kb, (TT => {
          cT.pA.zkT.add(TT), cT.pA.wkT.delete(TT)
        })), TT.yN(xT.Yd, (TT => {
          cT.pA.zkT.delete(TT), cT.pA.wkT.delete(TT)
        })), TT.yN(xT.$, (TT => {
          (0, AT.kb)(TT, cT.pA.JkT), (0, AT.kb)(TT, cT.pA.mkT), cT.pA.mkT.push(TT)
        })), TT.yN(xT.ib, (TT => {
          (0, AT.kb)(TT, cT.pA.mkT), (0, AT.kb)(TT, cT.pA.JkT), cT.pA.JkT.push(TT)
        })), TT.yN(xT.Vd, (TT => {
          (0, AT.kb)(TT, cT.pA.mkT), (0, AT.kb)(TT, cT.pA.JkT)
        })), TT.yN(xT.Af, (TT => {
          let {
            bl: kT,
            zl: lT
          } = TT;
          lT ? cT.pA.wV.delete(kT) : cT.pA.wV.add(kT)
        })), TT.yN(xT.xf, (TT => {
          let {
            wc: kT,
            mc: lT
          } = TT;
          OT.updateWalkThroughRect(cT.jH, kT, lT)
        })), (0, lT.onGameResetOnce)((() => {
          this.clearBlockRules()
        })), TT.yN(xT.Ye, (TT => {
          (0, FT.b)(TT)
        })), TT.yN(xT.fc, (TT => {
          PT.b.applyServerUpdate(TT)
        })), TT.yN(xT.rb, (TT => {
          OT.applyServerBlocks((() => {
            ! function(TT, kT) {
              for (const {
                  qc: cT,
                  sc: lT
                }
                of kT) {
                const kT = wT.c[lT];
                if (kT) {
                  const {
                    compX: lT,
                    compY: MT,
                    compZ: KT,
                    mainMultiblock: OT
                  } = kT;
                  TT.Qm(cT[0] - lT, cT[1] - MT, cT[2] - KT, OT)
                }
              }
              for (const {
                  qc: cT,
                  sc: lT,
                  Tl: MT
                }
                of kT) TT.setBlockNoMulti(cT[0], cT[1], cT[2], lT, !0), TT.blockDataOwner.setBlockData(cT[0], cT[1], cT[2], null === MT ? void 0 : JSON.parse(MT)), TT.blockAdded(cT[0], cT[1], cT[2], lT)
            }(OT, TT)
          })), NT.k.nt("changeBlockFail", TT), OT.client.triggerGameCallback("onChangeBlockFail", TT), NT.k.nt("EditBoard", {
            pos: null
          }), NT.k.nt("EditCodeBlock", {
            pos: null,
            canChangePos: null
          })
        })), TT.yN(xT.jd, (TT => {
          let {
            pickUpItems: kT,
            pickUpAckSeq: cT
          } = TT;
          for (const {
              name: lT,
              amount: MT,
              attributes: OT
            }
            of kT) KT().pickUpItem({
            name: lT,
            amount: MT,
            typeObj: RT.x[lT],
            attributes: OT
          });
          (0, fT.c)().client.inventoryPrediction.serverChangeApplied(cT)
        })), TT.yN(xT.Ge, (TT => {
          let {
            index: kT,
            name: lT,
            amount: MT,
            attributes: KT,
            setSlotAckSeq: OT
          } = TT;
          const yT = cT.oN.VTT(cT.jH);
          (kT < yT.playerInventory.numSlots || yT.Hl || yT.inCreative) && yT.setItemSlot(kT, lT, MT, KT), (0, fT.c)().client.inventoryPrediction.serverChangeApplied(OT)
        })), TT.yN(xT.Ue, (TT => {
          let {
            Jl: kT,
            El: lT,
            Zl: MT
          } = TT;
          const {
            inventoryPrediction: KT
          } = (0, fT.c)().client, OT = () => {
            cT.oN.VTT(cT.jH).loadFromString(kT)
          };
          this.replayResume && (this.replayResume.sync = {
            Zl: MT,
            load: OT
          }), aT(cT, KT, NT.k, MT, OT, lT)
        })), TT.yN(xT.tc, (TT => {
          (0, fT.c)().client.inventoryPrediction.acknowledge(TT)
        })), TT.yN(xT.G, (TT => {
          let {
            Ec: kT,
            Zc: cT,
            uc: lT,
            Xc: MT
          } = TT;
          (0, fT.c)().client.itemDropPrediction.onActionItemDrops(kT, cT, lT, MT)
        })), TT.yN(xT.Fb, (TT => {
          KT().clearInventory(), (0, fT.c)().client.inventoryPrediction.serverChangeApplied(TT)
        })), TT.yN(xT.Fc, (TT => {
          let {
            leaveEventType: kT,
            category: cT,
            subCategory: lT,
            value: MT
          } = TT;
          (0, Mk.K)({
            leaveEventType: kT,
            category: cT,
            subCategory: lT,
            value: MT
          })
        })), TT.yN(xT.Qb, (TT => {
          let {
            cat1: kT,
            cat2: cT,
            cat3: lT,
            value: MT
          } = TT;
          (0, Mk.n)({
            cat1: kT,
            cat2: cT,
            cat3: lT,
            value: MT
          })
        }));
        const OT = (0, fT.c)();
        TT.yN(xT.Kb, (TT => {
          OT.applyServerBlocks((() => {
            zT(OT, PT.b, TT)
          }))
        })), TT.yN(xT.He, (TT => {
          NT.k.nt("setSelectedInventorySlotI", TT, !0)
        })), TT.yN(xT.Cc, (TT => {
          let {
            category: kT,
            timeframe: cT,
            data: lT
          } = TT;
          NT.k.nt("leaderboardResponse", {
            category: kT,
            timeframe: cT,
            data: lT
          })
        })), TT.yN(xT.W, (TT => {
          let {
            Hk: kT,
            Gk: cT
          } = TT;
          this.stateReplicationHandler.setUpIfQueued(kT), kT = (0, ZT.b)(kT), (0, fT.c)().client.gameRecorder.recordBulletShot(kT, cT), NT.k.nt(`bulletShot|${kT}`, {
            bulletDirections: cT
          })
        })), TT.yN(xT.ic, (TT => {
          let {
            EK: kT,
            ZK: cT
          } = TT;
          NT.k.nt("damagedByOtherPlayer", {
            EK: kT,
            direction: cT
          }, !0)
        })), TT.yN(xT.td, (TT => {
          NT.k.nt("playerKilled", TT, !0), (0, fT.c)().client.gameRecorder.recordPlayerKilled(TT.deadEId, TT.killerEId, TT.withItem, TT.killstreak)
        })), TT.yN(xT.Tb, (TT => {
          NT.k.nt("customKillfeed", TT, !0), (0, fT.c)().client.gameRecorder.recordCustomKillfeed(TT.killer, TT.victim, TT.withItem)
        })), TT.yN(xT.Gd, (TT => {
          let {
            zM: kT,
            JM: lT
          } = TT;
          this.stateReplicationHandler.setUpIfQueued(kT);
          const MT = cT.oN.ckT(kT);
          null !== MT && void 0 !== MT && MT.isGun() && MT.reload(Date.now(), lT)
        })), TT.yN(xT.Se, (() => {
          NT.k.nt("showShopTutorial", null, !0)
        })), TT.yN(xT.zd, (TT => {
          NT.k.nt("progressBarUpdate", TT, !0)
        })), TT.yN(xT.sc, (TT => {
          NT.k.nt("middleScreenBarInitiate", {
            duration: TT.oT,
            HT: TT.HT,
            horizBarRemOffset: TT.eT
          }, !0)
        })), TT.yN(xT.Md, (() => {
          NT.k.nt("middleScreenBarRemove", !0)
        })), TT.yN(xT.le, (TT => {
          let {
            Ac: kT,
            PT: lT
          } = TT;
          const MT = lT ? (0, xk.d)(cT, lT) : void 0;
          NT.k.nt("sendHitmarker", {
            Ac: kT,
            screenPos: MT
          }, !0)
        })), TT.yN(xT.Be, (TT => {
          let {
            id: kT,
            position: cT,
            style: lT,
            IT: MT,
            vT: KT
          } = TT;
          NT.k.nt("setDirectionArrow", {
            id: kT,
            position: cT,
            style: lT,
            text: (0, xT.v)(MT),
            vT: KT
          }, !0)
        })), TT.yN(xT.Eb, (TT => {
          let {
            id: kT
          } = TT;
          NT.k.nt("clearDirectionArrow", {
            id: kT
          }, !0)
        })), TT.yN(xT.J, (TT => {
          let {
            yM: kT,
            fM: lT,
            animationScript: MT,
            xM: KT,
            IM: OT,
            AM: yT,
            CM: xT
          } = TT;
          kT = (0, ZT.b)(kT);
          const IT = null === MT && null !== yT ? (0, oT.f)(yT, xT) : MT;
          (0, fT.c)().client.gameRecorder.recordAnimateEntity(kT, lT, IT, KT, OT), (0, JT.e)(cT).animations.animateEntity(kT, lT, MT, KT, OT, yT, xT), null !== MT || kT === cT.jH && lT === Ak.g.Emote && (0, fT.c)().client.cameraController.endTemporaryThirdPerson()
        })), TT.yN(xT.lf, (TT => {
          let {
            OT: kT,
            yT: cT
          } = TT;
          if (OT.Tu(kT[0], kT[1], kT[2])) {
            const TT = (0, fT.c)().Tm(kT[0], kT[1], kT[2]);
            (0, fT.c)().updateMailboxContents(kT[0], kT[1], kT[2], TT, cT)
          }
        })), TT.yN(xT.zb, (TT => {
          let {
            pl: kT,
            il: lT,
            ql: MT,
            sl: KT,
            TM: OT,
            kM: yT,
            cM: xT,
            lM: IT
          } = TT;
          const AT = cT.oN.VTT(cT.jH);
          if (yT) {
            const {
              ol: TT,
              Zl: kT
            } = IT;
            return (0, fT.c)().client.inventoryPrediction.y5(kT, (() => {
              AT.chestRefreshed(lT, MT, KT, xT, TT)
            })) && NT.k.nt("chestToggleFromServer", !1, !0), void NT.k.nt("chestRefreshedFromServer")
          }(kT || AT.Hl) && (kT ? (AT.chestOpened(lT, MT, KT, OT, xT), null !== OT && (0, fT.c)().client.ironChestPasskeyCache.onChestOpened(KT, OT)) : AT.chestClosed(), NT.k.nt("chestToggleFromServer", kT, !0))
        })), TT.yN(xT.Vb, (TT => {
          let {
            craftingRecipeItemName: kT,
            recipesForItem: lT
          } = TT;
          kT ? OT.craftingManager.editRecipesForPlayer(cT.jH, kT, lT) : OT.craftingManager.resetAllPlayerRecipes(cT.jH), NT.k.nt("craftingRecipesEdited", {
            itemName: kT,
            recipesForItem: lT
          })
        })), TT.yN(xT.Ke, (TT => {
          let {
            vehicleEId: kT,
            overrides: cT
          } = TT;
          (0, fT.c)().applyRiddenVehicleSettingOverrides(kT, cT)
        })), TT.yN(xT.tf, (TT => {
          let {
            oM: kT,
            HM: lT,
            eM: MT
          } = TT;
          const KT = cT.oN.ITT(cT.jH).physicsState.type === dT.v.SLEEPING && kT === dT.v.DEFAULT;
          (0, fT.c)().updatePositionAndPhysics(cT.jH, {
            type: kT,
            tier: lT
          }, !0, MT), KT && (0, fT.c)().updateHeldVehicleStatus()
        })), TT.yN(xT.tb, (TT => {
          let {
            ul: kT,
            Xl: lT
          } = TT;
          cT.oN.oTT(cT.jH).setPose(kT, lT)
        })), TT.yN(xT.ie, (TT => {
          (0, vk.e)(TT)
        })), TT.yN(xT.rd, (TT => {
          for (const kT of TT)(0, YT.y)(kT);
          NT.k.nt("playerCosmeticsUpdated", TT, !0)
        })), TT.yN(xT.R, (TT => {
          for (const kT of TT)(0, Ok.d)(cT, kT)
        })), TT.yN(xT.Kc, (TT => {
          let {
            aT: kT,
            FT: lT,
            wT: MT,
            mT: KT,
            bT: yT,
            zT: fT,
            JT: xT
          } = TT;
          this.stateReplicationHandler.setUpIfQueued(kT), kT = (0, ZT.b)(kT);
          const IT = cT.oN.nTT(kT);
          if (IT && (IT.lastHurtTime = performance.now()), (0, LT.playRigHurt)(cT, kT, fT), NT.k.nt("lifeformHurt", {
              eId: kT,
              JT: xT
            }), lT) {
            const TT = (0, xk.d)(cT, lT.PT);
            NT.k.nt("yourAttackHit", {
              Ac: KT,
              screenPos: TT,
              hitSelf: kT === cT.jH
            })
          }
          kT === cT.jH && (OT.shakePlayerCamera(kT, yT / 40, 200), NT.k.nt("closeShopOnDamaged", null), NT.k.nt("damagedByOtherPlayer", {
            EK: null,
            direction: fT,
            bT: yT
          }, !0));
          const AT = cT.oN.kN(kT);
          if (AT && (MT || KT)) {
            const TT = [AT[0], AT[1] + 1, AT[2]];
            MT && (0, BT.l)(cT, BT.y, TT, 15), KT && (0, BT.l)(cT, BT.p, TT, 10)
          }
        })), TT.yN(xT.Gc, (TT => {
          let {
            bk: kT,
            zk: lT,
            Jk: MT
          } = TT;
          (0, JT.e)(cT).setHealthFrac((0, ZT.b)(kT), MT), NT.k.nt("lifeformHealthChanged", {
            eId: (0, ZT.b)(kT),
            zk: lT,
            Jk: MT
          })
        })), TT.yN(xT.S, (TT => {
          let {
            fT: kT,
            xT: lT
          } = TT;
          (0, fT.c)().playerAttacked(cT.jH, kT, lT)
        })), TT.yN(xT.zc, (TT => {
          (0, fT.c)().client.leaveGameUnwanted({
            reason: TT,
            requiresRefresh: !1,
            canReconnect: !1,
            automaticallyReconnect: !1
          }), (0, ck.navigatePreserveSearch)("/")
        })), TT.yN(xT.Ld, (TT => {
          let {
            uM: kT,
            XM: cT,
            dM: lT
          } = TT;
          KT().removeItemName(kT, cT), (0, fT.c)().client.inventoryPrediction.serverChangeApplied(lT)
        })), TT.yN(xT.we, (TT => {
          const {
            cj: kT,
            jkT: lT
          } = (0, WT.e)([TT[0], TT[1], TT[2]]);
          hk.c.setLookDirection(cT, kT, lT), (0, nT.r)(kT, lT);
          const MT = cT.oN.oTT(cT.jH);
          MT && (MT.heading = kT)
        })), TT.yN(xT.xe, (TT => {
          OT.client.cameraController.setCameraZoom(TT)
        })), TT.yN(xT.Oe, (TT => {
          let {
            eK: kT,
            GK: lT
          } = TT;
          OT.shakePlayerCamera(cT.jH, kT, lT)
        })), TT.yN(xT.Mb, (TT => {
          (0, kk.onCosmeticPackGranted)(TT)
        })), TT.yN(xT.pe, (TT => {
          NT.k.nt("serverUpdating", Date.now() + TT, !0)
        })), TT.yN(xT.Qc, HT.e), TT.yN(xT.$c, (TT => {
          let {
            id: kT,
            Vk: cT
          } = TT;
          const {
            type: MT,
            params: KT
          } = (0, fk.e)(cT), OT = {
            ...KT
          };
          for (const lT of fk.c) lT in OT && OT[lT] && (OT[lT] = (0, xT.v)(OT[lT]));
          yk.d.queueQTE(kT, MT, OT).getResult().then((TT => {
            "boolean" === typeof TT && (0, lT.sendColyMessage)(xT.ki, {
              qteId: kT,
              qteResponse: TT
            })
          }))
        })), TT.yN(xT.Nd, (TT => {
          yk.d.cancelQTE(TT)
        })), (0, lT.onGameResetOnce)((() => {
          yk.d.reset()
        })), TT.yN(xT.bd, (TT => {
          let {
            id: kT,
            clientParameters: cT
          } = TT;
          (0, rT.g)(kT, cT)
        })), TT.yN(xT.Qd, (TT => {
          (0, rT.h)(TT)
        })), TT.yN(xT.if, (TT => {
          let {
            text: kT,
            id: cT
          } = TT;
          (0, rT.k)(cT, kT, (TT => {
            (0, lT.sendColyMessage)(xT.Lj, {
              dI: cT,
              LI: TT,
              RI: 5
            })
          }))
        })), TT.yN(xT.Yb, (TT => {
          let {
            tT: kT,
            hT: cT,
            NT: lT,
            QT: MT,
            ST: KT,
            DT: OT
          } = TT;
          kT = (0, ZT.b)(kT), (0, fT.c)().client.updateEffect(kT, cT, {
            displayName: lT,
            icon: MT,
            duration: KT,
            level: OT
          })
        })), TT.yN(xT.Id, (TT => {
          let {
            tT: kT,
            hT: cT
          } = TT;
          kT = (0, ZT.b)(kT), (0, fT.c)().client.removeEffect(kT, cT)
        })), TT.yN(xT.yc, (TT => {
          cT.oN.oTT(cT.jH).jumpMultiplier.setMultiplierType("jumpEffectAmount", TT)
        })), TT.yN(xT.ff, (TT => {
          NT.k.nt("ttbEffectMultiplier", TT)
        })), (0, lT.onGameResetOnce)((() => {
          cT.oN.oTT(cT.jH).jumpMultiplier.setMultiplierType("jumpEffectAmount", 1)
        })), TT.yN(xT.Zc, (TT => {
          (0, BT.n)(cT, (0, AT.q)(TT))
        })), TT.yN(xT._c, (TT => {
          Ik.d[TT.HK] ? (0, BT.n)(cT, {
            ...Ik.d[TT.HK],
            pos1: TT.pos1,
            pos2: TT.pos2
          }) : console.error(`Unknown preset id: ${TT.HK}`)
        })), TT.yN(xT.pd, (TT => {
          var kT, cT;
          let {
            zc: lT,
            Jc: MT,
            oc: KT,
            Hc: OT
          } = TT, {
            Gc: yT,
            Vc: xT
          } = null !== OT && void 0 !== OT ? OT : {};
          const {
            ec: IT
          } = null !== OT && void 0 !== OT ? OT : {};
          yT = null !== (kT = yT) && void 0 !== kT ? kT : void 0, xT = null !== (cT = xT) && void 0 !== cT ? cT : void 0, "string" === typeof IT && this.stateReplicationHandler.setUpIfQueued(IT), (0, fT.c)().client.gameRecorder.recordPlaySound(lT, MT, KT, OT), iT.d.play((0, qT.h)(lT), MT, IT, yT, xT).rate(KT)
        })), TT.yN(xT.se, (TT => {
          let {
            pos: kT,
            data: cT
          } = TT;
          OT.blockDataOwner.setBlockData(kT[0], kT[1], kT[2], cT), OT.blockAdded(kT[0], kT[1], kT[2], OT.Tm(kT[0], kT[1], kT[2]))
        })), TT.yN(xT.id, (TT => {
          let {
            info: kT
          } = TT;
          NT.k.nt("overShopInfo", kT, !0)
        })), TT.yN(xT.dc, (TT => {
          let {
            Kk: lT,
            Ok: MT
          } = TT;
          kT.openShop(cT.jH, lT, MT)
        })), TT.yN(xT.N, (TT => {
          cT.oN.JV(cT.jH).applyImpulse(TT)
        })), TT.yN(xT.Me, (TT => {
          const kT = cT.oN.JV(cT.jH);
          XT().set(kT.KV, 0, 0, 0), XT().set(kT.yV, 0, 0, 0), XT().copy(kT.Oh, TT), kT.fV()
        })), TT.yN(xT.Lc, (TT => {
          console.error(`[logErrorToConsole]: ${TT}`)
        })), TT.yN(xT.ac, (TT => {
          let {
            Cc: kT,
            jc: cT,
            vc: lT
          } = TT;
          NT.k.nt("flyingMiddleMessage", {
            content: (0, xT.v)(kT),
            jc: cT,
            vc: lT
          }, !0)
        })), TT.yN(xT.Ef, (TT => {
          const kT = TT === eT.d ? null : {
            message: `Currently loaded as variation: ${TT}`,
            type: "Warning"
          };
          NT.k.nt("showPermanentBottomMessage", kT, !0)
        })), TT.yN(xT.ec, (TT => {
          let {
            messageType: kT,
            data: cT
          } = TT;
          (0, sT.e)(kT) ? (0, sT.d)(kT, cT) : ("freeCamPerms" === kT && OT.client.freeCameraController.setPerms(cT.key, cT.value), OT.client.triggerGameCallback("onReceivedMessageFromServer", kT, cT))
        })), TT.yN(xT.ub, (() => {
          const TT = cT.oN.ckT(cT.jH);
          null !== TT && void 0 !== TT && TT.isChargeable() && TT.finishCharging(!1, Date.now())
        })), TT.yN(xT.Jd, (TT => {
          let {
            bc: kT
          } = TT;
          OT.craftingManager.removeRecipes(cT.jH, kT), NT.k.nt("craftingRecipesEdited", {
            itemName: kT,
            recipesForItem: []
          })
        })), TT.yN(xT.pf, (TT => {
          for (const kT in TT) {
            const cT = TT[kT];
            for (const TT in cT) OT.client.meshCreator.handleParticleSystemUpdate(kT, TT, cT[TT])
          }
        })), (0, lT.onGameResetOnce)((() => {
          (0, Kk.setFloatingYValue)(cT.oN.getState(cT.jH, "physics"), cT.oN.wL(cT.jH), null)
        })), TT.yN(xT.Zb, (TT => {
          let {
            wM: kT,
            mM: lT,
            bM: MT
          } = TT;
          const KT = (0, ZT.b)(kT);
          if (KT === cT.jH) {
            const TT = cT.oN.wL(cT.jH).position;
            MT ??= Math.floor(TT[1]) - 1, (0, Kk.setFloatingYValue)(cT.oN.getState(cT.jH, "physics"), cT.oN.wL(cT.jH), lT ? MT : null)
          }(0, JT.e)(cT).setFloating(KT, lT, MT);
          const OT = cT.oN.getState(KT, "floating");
          OT && (OT.isFloating = lT, OT.bM = lT ? MT : null)
        })), TT.yN(xT.Ib, Tk.g)
      }
    }
    window.addEventListener("beforeunload", (() => {}));
    var Qk = cT(38859),
      Sk = cT(38861),
      Dk = cT(651),
      ak = cT(2891);
    class Fk {
      constructor(TT, kT, cT, lT) {
        this.msgHandler = cT, this.listener = lT, this.session = void 0, this.attachedRoom = null, this.detachRoomListeners = null, this.suspended = !1, this.droppedAt = 0, this.session = new Qk.b({
          reconnect: TT,
          isLive: () => lT.isLive(),
          onReconnected: TT => {
            this.resumeOnRoom(TT)
          },
          onGaveUp: (TT, kT) => {
            lT.onGaveUp(TT, kT)
          },
          freeze: kT,
          releaseSeat: kT => {
            TT(kT).then((TT => {
              TT.leave(!0)
            }), (TT => {
              console.warn("Couldn't release the held seat of a game left while reconnecting", TT)
            }))
          }
        })
      }
      onInitialInfo(TT, kT) {
        this.session.onInitialInfo(TT, kT)
      }
      isResuming() {
        return this.session.isResuming()
      }
      getDroppedAt() {
        return this.droppedAt
      }
      onResumeInitialInfo(TT, kT) {
        if (this.session.onResuming(), null === TT) {
          try {
            (0, fT.c)().client.itemDropPrediction.reset()
          } catch (cT) {
            console.error("Error dropping the item drop predictions on resuming", cT)
          }
          return lT.offlineInputReplay.discard(), void this.setSuspended(!1)
        }(0, fT.c)().client.itemDropPrediction.onResumeReplayOffered(), lT.offlineInputReplay.replayFrom(TT.Wc, kT)
      }
      onResumed(TT) {
        this.setSuspended(!1), (0, lT.resendBeacons)();
        try {
          TT()
        } catch (kT) {
          console.error("Error completing the resume", kT)
        } finally {
          this.session.onResumed()
        }
      }
      attachRoom(TT) {
        const kT = (0, Dk.e)((() => TT.connection.isOpen));
        TT.ZF(kT);
        const cT = new Sk.c((() => {
          this.session.canHoldSeat() && this.listener.isLive() && (console.warn("The game server went silent, reconnecting"), this.onConnectionDropped(TT, "silent"), TT.leave(!1))
        }));
        TT.onStateChange((() => {
          cT.heard()
        }));
        const lT = kT => {
          kT.persisted || TT.leave(!0)
        };
        window.addEventListener("pagehide", lT), TT.ZF(((kT, cT) => {
          if (TT === this.attachedRoom && this.listener.isLive()) return (0, KT.i)(kT) && this.session.canHoldSeat() ? (console.warn(`Connection to the game server dropped with code ${kT}, reconnecting`), this.listener.onDropped(kT, cT), void this.onConnectionDropped(TT, String(kT))) : void this.listener.onRoomLeft(kT, cT)
        })), this.attachedRoom = TT, this.detachRoomListeners = () => {
          kT(), cT.dispose(), window.removeEventListener("pagehide", lT)
        }
      }
      dispose() {
        this.detachRoom(), this.session.leave(), this.setSuspended(!1)
      }
      setSuspended(TT) {
        TT !== this.suspended && (this.suspended = TT, (0, lT.setConnectionSuspended)(TT), (0, fT.c)().client.itemDropPrediction.setSuspended(TT))
      }
      detachRoom() {
        var TT;
        null === (TT = this.detachRoomListeners) || void 0 === TT || TT.call(this), this.detachRoomListeners = null, this.attachedRoom = null
      }
      onConnectionDropped(TT, kT) {
        (0, ak.e)("disconnect", "Left room", kT), this.isResuming() || (this.droppedAt = Date.now()), this.detachRoom(), lT.offlineInputReplay.onConnectionLost(), this.setSuspended(!0), this.session.onConnectionLost(TT.reconnectionToken)
      }
      resumeOnRoom(TT) {
        if (!this.listener.isLive()) return console.warn("Left the game while reconnecting, leaving the resumed room"), TT.leave(!0), void this.dispose();
        console.log("Reconnected to the game server, waiting for the game to resume"), (0, vk.w)(), lT.offlineInputReplay.onConnectionReplaced(), this.msgHandler.txT(TT), this.listener.onReconnected(TT), this.attachRoom(TT)
      }
    }
    var rk = cT(3402),
      Pk = cT(3407),
      wk = cT(1327),
      mk = cT(1303),
      bk = cT(4663),
      zk = cT(3081),
      Jk = cT(1082),
      Hk = cT(37569),
      ek = cT(38868),
      Gk = cT(8924),
      Vk = cT(38875),
      Ek = cT(1833),
      Zk = cT(38879),
      uk = cT(1734),
      Xk = cT(2796);

    function dk(TT) {
      var kT, cT;
      if ("object" !== typeof TT || null === TT) return {
        errType: typeof TT
      };
      const lT = TT;
      return {
        errType: null !== (kT = null === (cT = TT.constructor) || void 0 === cT ? void 0 : cT.name) && void 0 !== kT ? kT : "",
        errName: "string" === typeof lT.name ? lT.name : "",
        eventType: "string" === typeof lT.type ? lT.type : "",
        errStack: "string" === typeof lT.stack ? lT.stack.split("\n").slice(1).join(" | ") : ""
      }
    }

    function Lk(TT) {
      if ("undefined" !== typeof ProgressEvent && TT instanceof ProgressEvent) return !0;
      if (!(TT instanceof Error)) return !1;
      const kT = TT.code;
      return "ServerError" === TT.name && void 0 === kT || "AbortError" === TT.name || "seat reservation expired." === TT.message || "early_leave" === TT.message
    }(0, tT.k)((TT => {
      (0, ak.e)("wasm_net", TT)
    }));
    let Rk = !0;

    function gk() {
      Rk = !1
    }
    class Uk {
      constructor(TT) {
        this.gameNameWithVariation = void 0, this.lobbyName = void 0, this.colyClient = void 0, this.userContext = void 0, this.joinedAt = null, this.checkSendPath = () => {}, this.cC = void 0, this.connectionResume = void 0, this.incomingMsgInitialisor = void 0, this.gameNameWithVariation = TT.gameNameWithVariation, this.lobbyName = TT.lobbyName, this.colyClient = TT.colyClient, this.userContext = TT.userContext
      }
      async connectToServer(TT, kT, cT) {
        QT.b.reset(), TT.IH = {
          [TT.jH]: {}
        }, TT.W9 = void 0, (0, vk.w)(), (0, fT.c)().removeAllEntityNames(), (0, fT.c)().setEntityName(TT.jH, this.userContext.getPlayerName()), (0, wk.l)({
          lobbyName: this.lobbyName
        }), console.log("Waiting for clientConnection passed promise to resolve");
        const OT = (0, uk.c)();
        console.log("joining server with game", this.gameNameWithVariation, "lobbyName", this.lobbyName);
        const yT = performance.now(),
          xT = (0, Vk.e)(this.userContext, (() => {
            const {
              roomName: lT,
              joinOptions: MT
            } = (0, DT.f)(this.userContext, this.gameNameWithVariation, this.lobbyName, kT, (TT => zk.e.isUsingCustomGameTexturePack(TT)));
            return MT.joinAdHold = OT, MT.renderBackend = (0, Xk.c)(TT.gv), (0, ek.e)((() => this.colyClient.joinOrCreate(lT, MT)), cT)
          }));
        return NT.k.nt("loadingScreenState", "loadingPage:joiningLobby"), await xT.then((kT => {
          if (this.joinedAt = performance.now(), this.cC = TT, OT) {
            const TT = (0, uk.l)((() => {
              kT.send(MT.d), (0, mk.j)()
            }));
            kT.ZF(TT), (0, lT.onGameResetOnce)(TT)
          }
          const cT = new hT(kT);
          this.connectionResume = new Fk((TT => this.colyClient.reconnect(TT)), (kT => {
            TT.ZD(kT)
          }), cT, {
            isLive: () => (0, fT.c)().client.getMsgHandler() === cT,
            onDropped: (TT, kT) => {
              (0, Pk.i)(TT) || this.logUnrecognisedConnectionLoss(TT, void 0, {
                site: "drop",
                closeReason: null !== kT && void 0 !== kT ? kT : "",
                sinceJoined: this.sinceJoined()
              })
            },
            onRoomLeft: (TT, kT) => {
              this.onRoomLeft(TT, kT)
            },
            onReconnected: TT => {
              this.incomingMsgInitialisor.txT(TT), this.checkSendPath = (0, Hk.e)(cT, TT, tT.o)
            },
            onGaveUp: (TT, kT) => {
              this.onResumeGaveUp(TT, kT)
            }
          }), this.connectionResume.attachRoom(kT), (0, lT.onGameResetOnce)((() => {
            this.connectionResume.dispose()
          }));
          const KT = cT.send,
            yT = cT.yN,
            xT = cT.EkT.send,
            IT = cT.EkT.yN,
            AT = cT.jxT;
          this.checkSendPath = (0, Hk.e)(cT, kT, tT.o);
          const CT = setInterval((() => {
            KT === cT.send && yT === cT.yN && xT === cT.EkT.send && IT === cT.EkT.yN && AT === cT.jxT || gk(), this.checkSendPath()
          }), 1e4);
          return (0, lT.onGameResetOnce)((() => {
            clearInterval(CT)
          })), {
            success: !0,
            successDetails: cT
          }
        })).catch((kT => {
          if (cT.aborted && kT === (0, Ek.e)(cT)) return {
            success: !1,
            failDetails: {
              reason: "Left the game while it loaded",
              requiresRefresh: !1,
              canReconnect: !1
            }
          };
          if (kT instanceof Zk.f) return console.warn("Seat request timed out", this.lobbyName, this.gameNameWithVariation), {
            success: !1,
            failDetails: {
              reason: kT.message,
              requiresRefresh: !1,
              canReconnect: !1,
              gameServerUnreachable: "timedOut"
            }
          };
          TT.jt(`Failed to connect to bloxd room, check your internet connection. lobbyName: ${this.lobbyName}, gameNameWithVariation: ${this.gameNameWithVariation} code: ${kT.code}\n`, kT);
          const lT = kT.code;
          return lT === KT.c.serverUpdating.code ? (this.goToUpdateWaiting(), {
            success: !1,
            failDetails: {
              reason: KT.c.serverUpdating.text,
              requiresRefresh: !1,
              canReconnect: !0,
              goesToUpdateWaiting: !0
            }
          }) : {
            success: !1,
            failDetails: {
              ...this.onConnectionToServerLost(lT, kT.message, {
                site: "join",
                sinceJoinStart: (0, Pk.c)(performance.now() - yT),
                ...dk(kT)
              }, Lk(kT)),
              rematch: (0, ek.d)(kT),
              gameRefused: (0, Gk.b)(kT)
            }
          }
        }))
      }
      setupServerListeners(TT, kT, cT) {
        NT.k.nt("loadingScreenState", "loadingPage:loadingPlayerInfo"), this.incomingMsgInitialisor = new Nk(this.gameNameWithVariation, kT.EkT, TT, this.connectionResume), this.incomingMsgInitialisor.setupStateReplicationHandlers();
        const MT = kT.SxT();
        this.incomingMsgInitialisor.setupOnMessageListeners(MT, cT), (0, lT.onConnectionToServerReady)(MT, kT), MT.finishRegistration()
      }
      dispose() {
        this.connectionResume.dispose()
      }
      onResumeGaveUp(TT, kT) {
        (0, Jk.vt)(new Error("Reconnect failed"), {
          ...(0, rk.n)(kT),
          game: this.gameNameWithVariation
        }), (0, ak.e)("disconnect", "Reconnect failed", kT.reason), (0, fT.c)().client.leaveGameUnwanted({
          reason: {
            translationKey: "general:lostConnection"
          },
          canReconnect: !TT,
          canPlayAgain: TT,
          requiresRefresh: !1,
          automaticallyReconnect: !1
        }), (0, ck.navigatePreserveSearch)("/")
      }
      sinceJoined() {
        return null === this.joinedAt ? "" : (0, Pk.c)(performance.now() - this.joinedAt)
      }
      onRoomLeft(TT, kT) {
        var cT;
        if (TT === KT.c.gameOrPluginKick.code) return;
        if (console.log(`Left room with code ${TT}`), TT === KT.c.serverUpdating.code) return (0, ak.e)("disconnect", "Left room", "serverUpdating"), (0, fT.c)().client.leaveGame(this.getUpdateWaitingUrl()), void this.goToUpdateWaiting();
        this.cC.jt(`Kicked from server with code ${TT}`, new Error);
        const lT = Object.keys(KT.c).find((kT => KT.c[kT].code === TT));
        (0, ak.e)("disconnect", "Left room", null !== lT && void 0 !== lT ? lT : String(TT));
        const MT = this.onConnectionToServerLost(TT, void 0, {
          site: "leave",
          closeReason: null !== kT && void 0 !== kT ? kT : "",
          sinceJoined: this.sinceJoined()
        });
        (0, fT.c)().client.leaveGameUnwanted({
          reason: `You have disconnected from the server.\n${MT.reason}`,
          canReconnect: MT.canReconnect,
          requiresRefresh: MT.requiresRefresh,
          automaticallyReconnect: null !== (cT = MT.automaticallyReconnect) && void 0 !== cT && cT
        }), (0, ck.navigatePreserveSearch)("/")
      }
      getUpdateWaitingUrl() {
        return (0, bk.u)(this.gameNameWithVariation, this.lobbyName)
      }
      goToUpdateWaiting() {
        (0, ck.navigatePreserveSearch)(this.getUpdateWaitingUrl())
      }
      onConnectionToServerLost(TT, kT, cT) {
        var lT;
        let MT = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        if (null !== (lT = kT) && void 0 !== lT && lT.endsWith(KT.k) && (this.userContext.invalidateTrafficCode(), kT = kT.replace(KT.k, "")), TT === KT.c.outdatedVersion.code) return console.error("Outdated client with version ", OT.d, ", refreshing page"), (0, ST.reloadBloxd)(), {
          reason: "Outdated client",
          requiresRefresh: !0,
          canReconnect: !1
        };
        if (TT === KT.c.loadRecaptchaError.code) return console.error("Load recaptcha error, refreshing page"), (0, ST.reloadBloxd)(), {
          reason: "Failed to load recaptcha",
          requiresRefresh: !0,
          canReconnect: !1
        };
        for (const OT in KT.c) {
          const {
            code: cT,
            text: lT,
            canReconnect: MT
          } = KT.c[OT];
          if (cT === TT) {
            console.log("matched known error", TT, "leaving game");
            return {
              reason: "" !== lT ? lT : kT || `Code: ${TT}`,
              requiresRefresh: !1,
              canReconnect: MT,
              automaticallyReconnect: cT === KT.c.customGameUpdated.code || cT === KT.c.duplicateLobbyNameError.code
            }
          }
        }
        return console.log("Didn't match known error, leaving game"), (0, Pk.g)(TT) || MT ? console.warn("Connection lost", TT, kT) : this.logUnrecognisedConnectionLoss(TT, kT, cT), {
          reason: `Either your internet isn't working or this is a bug.\nCode: ${TT}`,
          requiresRefresh: !1,
          canReconnect: !1,
          gameServerUnreachable: MT ? "failed" : void 0
        }
      }
      logUnrecognisedConnectionLoss(TT, kT, cT) {
        (0, Jk.vt)(new Error("Unrecognised connection loss"), {
          code: String(TT),
          cause: null !== kT && void 0 !== kT ? kT : "",
          ...cT,
          game: this.gameNameWithVariation,
          ...(0, Pk.l)()
        })
      }
    }
  },
  38834: (TT, kT, cT) => {
    cT.d(kT, {
      e: () => Wc,
      f: () => Tl
    });
    var lT, MT, KT, OT, yT, fT, xT, IT, AT, CT, jT, vT, tT, hT, NT, QT, ST, DT, aT, FT, rT, PT, wT, mT, bT, zT, JT, oT, HT, eT, GT, VT, ET, ZT, uT, XT, dT, LT, RT, gT, UT, YT, BT, WT, nT, pT, iT, qT, sT, Tk, kk, ck, lk, Mk, Kk, Ok, yk, fk, xk, Ik, Ak, Ck, jk, vk, tk, hk, Nk, Qk, Sk, Dk, ak, Fk, rk, Pk, wk, mk, bk, zk, Jk, Hk, ek, Gk, Vk, Ek, Zk, uk, Xk, dk, Lk, Rk, gk, Uk, Yk, Bk, Wk, nk, pk, ik, qk, sk = cT(36),
      Tc = cT(36963),
      kc = cT(38844),
      cc = cT(38853),
      lc = cT(9115),
      Mc = cT(608),
      Kc = cT(606),
      Oc = cT(36614);
    let yc = (lT = (0, lc.type)("number"), MT = (0, lc.type)("number"), KT = (0, lc.type)("number"), OT = (0, lc.type)("number"), yT = (0, lc.type)("number"), fT = (0, lc.type)("number"), xT = (0, lc.type)("string"), IT = class extends lc.Schema {
        constructor() {
          super(...arguments), (0, kc.e)(this, "id", AT, this), (0, kc.e)(this, "amount", CT, this), (0, kc.e)(this, "x", jT, this), (0, kc.e)(this, "y", vT, this), (0, kc.e)(this, "z", tT, this), (0, kc.e)(this, "size", hT, this), (0, kc.e)(this, "attributes", NT, this)
        }
      }, AT = (0, cc.b)(IT.prototype, "id", [lT], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return 0
        }
      }), CT = (0, cc.b)(IT.prototype, "amount", [MT], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return 0
        }
      }), jT = (0, cc.b)(IT.prototype, "x", [KT], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return 0
        }
      }), vT = (0, cc.b)(IT.prototype, "y", [OT], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return 0
        }
      }), tT = (0, cc.b)(IT.prototype, "z", [yT], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return 0
        }
      }), hT = (0, cc.b)(IT.prototype, "size", [fT], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return 1
        }
      }), NT = (0, cc.b)(IT.prototype, "attributes", [xT], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return "{}"
        }
      }), IT),
      fc = (QT = (0, lc.type)("string"), ST = (0, lc.type)("string"), DT = class extends lc.Schema {
        constructor() {
          super(...arguments), (0, kc.e)(this, "itemName", aT, this), (0, kc.e)(this, "enchantmentTier", FT, this)
        }
      }, aT = (0, cc.b)(DT.prototype, "itemName", [QT], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: null
      }), FT = (0, cc.b)(DT.prototype, "enchantmentTier", [ST], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: null
      }), DT),
      xc = (rT = (0, lc.type)("string"), PT = (0, lc.type)("string"), wT = (0, lc.type)("number"), mT = (0, lc.type)("number"), bT = (0, lc.type)("number"), zT = (0, lc.type)("float32"), JT = (0, lc.type)("float32"), oT = (0, lc.type)("float32"), HT = (0, lc.type)("string"), eT = (0, lc.type)(["number"]), GT = (0, lc.type)("boolean"), VT = class extends lc.Schema {
        constructor() {
          super(...arguments), (0, kc.e)(this, "type", ET, this), (0, kc.e)(this, "name", ZT, this), (0, kc.e)(this, "x", uT, this), (0, kc.e)(this, "y", XT, this), (0, kc.e)(this, "z", dT, this), (0, kc.e)(this, "xRotation", LT, this), (0, kc.e)(this, "yRotation", RT, this), (0, kc.e)(this, "zRotation", gT, this), (0, kc.e)(this, "followingEId", UT, this), (0, kc.e)(this, "followingOffset", YT, this), (0, kc.e)(this, "shouldMatchFollowingEntityRotation", BT, this)
        }
      }, ET = (0, cc.b)(VT.prototype, "type", [rT], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: null
      }), ZT = (0, cc.b)(VT.prototype, "name", [PT], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return ""
        }
      }), uT = (0, cc.b)(VT.prototype, "x", [wT], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return 0
        }
      }), XT = (0, cc.b)(VT.prototype, "y", [mT], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return 0
        }
      }), dT = (0, cc.b)(VT.prototype, "z", [bT], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return 0
        }
      }), LT = (0, cc.b)(VT.prototype, "xRotation", [zT], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return 0
        }
      }), RT = (0, cc.b)(VT.prototype, "yRotation", [JT], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return 0
        }
      }), gT = (0, cc.b)(VT.prototype, "zRotation", [oT], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return 0
        }
      }), UT = (0, cc.b)(VT.prototype, "followingEId", [HT], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: null
      }), YT = (0, cc.b)(VT.prototype, "followingOffset", [eT], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return new lc.ArraySchema(0, 0, 0)
        }
      }), BT = (0, cc.b)(VT.prototype, "shouldMatchFollowingEntityRotation", [GT], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return !0
        }
      }), VT),
      Ic = (WT = (0, lc.type)("float32"), nT = (0, lc.type)("float32"), pT = (0, lc.type)("boolean"), iT = (0, lc.type)("boolean"), qT = (0, lc.type)("float32"), sT = (0, lc.type)("boolean"), Tk = (0, lc.type)("string"), kk = (0, lc.type)("string"), ck = (0, lc.type)("string"), lk = (0, lc.type)("string"), Mk = (0, lc.type)(["number"]), Kk = (0, lc.type)("number"), Ok = (0, lc.type)({
        map: fc
      }), yk = class extends xc {
        constructor() {
          super(...arguments), (0, kc.e)(this, "scale", fk, this), (0, kc.e)(this, "speed", xk, this), (0, kc.e)(this, "jumping", Ik, this), (0, kc.e)(this, "crouching", Ak, this), (0, kc.e)(this, "cameraPitch", Ck, this), (0, kc.e)(this, "armSwinging", jk, this), (0, kc.e)(this, "heldItemName", vk, this), (0, kc.e)(this, "heldItemEnchantmentTier", tk, this), (0, kc.e)(this, "pose", hk, this), (0, kc.e)(this, "ridingVehicleEId", Nk, this), (0, kc.e)(this, "meshOffset", Qk, this), (0, kc.e)(this, "baseRenderHeading", Sk, this), (0, kc.e)(this, "armour", Dk, this)
        }
      }, fk = (0, cc.b)(yk.prototype, "scale", [WT], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return 1
        }
      }), xk = (0, cc.b)(yk.prototype, "speed", [nT], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return 0
        }
      }), Ik = (0, cc.b)(yk.prototype, "jumping", [pT], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return !1
        }
      }), Ak = (0, cc.b)(yk.prototype, "crouching", [iT], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return !1
        }
      }), Ck = (0, cc.b)(yk.prototype, "cameraPitch", [qT], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return 0
        }
      }), jk = (0, cc.b)(yk.prototype, "armSwinging", [sT], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return !1
        }
      }), vk = (0, cc.b)(yk.prototype, "heldItemName", [Tk], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: null
      }), tk = (0, cc.b)(yk.prototype, "heldItemEnchantmentTier", [kk], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: null
      }), hk = (0, cc.b)(yk.prototype, "pose", [ck], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return "standing"
        }
      }), Nk = (0, cc.b)(yk.prototype, "ridingVehicleEId", [lk], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return null
        }
      }), Qk = (0, cc.b)(yk.prototype, "meshOffset", [Mk], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return new lc.ArraySchema(0, 0, 0)
        }
      }), Sk = (0, cc.b)(yk.prototype, "baseRenderHeading", [Kk], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return 0
        }
      }), Dk = (0, cc.b)(yk.prototype, "armour", [Ok], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return new lc.MapSchema
        }
      }), yk),
      Ac = (ak = (0, lc.type)("string"), Fk = (0, lc.type)("string"), rk = (0, lc.type)("string"), Pk = (0, lc.type)("uint8"), wk = class extends Ic {
        constructor() {
          super(...arguments), (0, kc.e)(this, "variation", mk, this), (0, kc.e)(this, "ownerDbId", bk, this), (0, kc.e)(this, "metaInfo", zk, this), (0, kc.e)(this, "aiState", Jk, this)
        }
      }, mk = (0, cc.b)(wk.prototype, "variation", [ak], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return "default"
        }
      }), bk = (0, cc.b)(wk.prototype, "ownerDbId", [Fk], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return null
        }
      }), zk = (0, cc.b)(wk.prototype, "metaInfo", [rk], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return ""
        }
      }), Jk = (0, cc.b)(wk.prototype, "aiState", [Pk], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return 0
        }
      }), wk);
    Hk = (0, lc.type)("string"), ek = (0, lc.type)("string"), Gk = (0, lc.type)("string"), Vk = (0, lc.type)("string"), Ek = class extends xc {
      constructor() {
        super(...arguments), (0, kc.e)(this, "meshKind", Zk, this), (0, kc.e)(this, "meshOpts", uk, this), (0, kc.e)(this, "pose", Xk, this), (0, kc.e)(this, "leaderboardTop", dk, this)
      }
    }, Zk = (0, cc.b)(Ek.prototype, "meshKind", [Hk], {
      configurable: !0,
      enumerable: !0,
      writable: !0,
      initializer: null
    }), uk = (0, cc.b)(Ek.prototype, "meshOpts", [ek], {
      configurable: !0,
      enumerable: !0,
      writable: !0,
      initializer: null
    }), Xk = (0, cc.b)(Ek.prototype, "pose", [Gk], {
      configurable: !0,
      enumerable: !0,
      writable: !0,
      initializer: null
    }), dk = (0, cc.b)(Ek.prototype, "leaderboardTop", [Vk], {
      configurable: !0,
      enumerable: !0,
      writable: !0,
      initializer: null
    });

    function Cc(TT) {
      return Object.keys(lc.Metadata.getFields(TT))
    }
    const jc = Cc(Ac);
    for (const kl of Mc.u)
      if (!jc.includes(kl)) throw new Error(`Mob Schema is missing a networked property: "${kl}"`);
    const vc = Cc((Lk = (0, lc.type)("string"), Rk = (0, lc.type)("float32"), gk = (0, lc.type)("float32"), Uk = (0, lc.type)("float32"), Yk = (0, lc.type)("float32"), Bk = class extends xc {
      constructor() {
        super(...arguments), (0, kc.e)(this, "soundName", Wk, this), (0, kc.e)(this, "volume", nk, this), (0, kc.e)(this, "refDistance", pk, this), (0, kc.e)(this, "maxHearDist", ik, this), (0, kc.e)(this, "rate", qk, this)
      }
    }, Wk = (0, cc.b)(Bk.prototype, "soundName", [Lk], {
      configurable: !0,
      enumerable: !0,
      writable: !0,
      initializer: function() {
        return ""
      }
    }), nk = (0, cc.b)(Bk.prototype, "volume", [Rk], {
      configurable: !0,
      enumerable: !0,
      writable: !0,
      initializer: function() {
        return 1
      }
    }), pk = (0, cc.b)(Bk.prototype, "refDistance", [gk], {
      configurable: !0,
      enumerable: !0,
      writable: !0,
      initializer: function() {
        return Oc.g
      }
    }), ik = (0, cc.b)(Bk.prototype, "maxHearDist", [Uk], {
      configurable: !0,
      enumerable: !0,
      writable: !0,
      initializer: function() {
        return Oc.b
      }
    }), qk = (0, cc.b)(Bk.prototype, "rate", [Yk], {
      configurable: !0,
      enumerable: !0,
      writable: !0,
      initializer: function() {
        return 1
      }
    }), Bk));
    for (const kl of Kc.g)
      if (!vc.includes(kl)) throw new Error(`AudioEntity Schema is missing a replicated property: "${kl}"`);
    var tc = cT(38270),
      hc = cT(1244),
      Nc = cT(617),
      Qc = cT(38060),
      Sc = cT(4235),
      Dc = cT(339),
      ac = cT(37086),
      Fc = cT(37943),
      rc = cT(2260),
      Pc = cT(37056),
      wc = cT(38297),
      mc = cT(37219),
      bc = cT(350),
      zc = cT.n(bc),
      Jc = cT(37790),
      oc = cT(36875),
      Hc = cT(37915),
      ec = cT(37967);
    class Gc {
      constructor(TT, kT) {
        this.bloxd = TT, this.eId = kT, this.cC = void 0, this.colyseusEntity = void 0, this.canSeeSub = void 0, this.canAttackSub = void 0, this.interactableSub = void 0, this.overlayColourSub = void 0, this.opacitySub = void 0, this.zIndexSub = void 0, this.multilineTextBoxSub = void 0, this.previousHidingMeshManagerState = void 0, this.meshKind = void 0, this.meshOpts = void 0, this.leaderboardTop = void 0, this.meshRebuildQueued = !1, this.yv = !1, this.cC = TT.cC
      }
      initClient(TT) {
        var kT, cT, lT;
        this.colyseusEntity = TT, this.meshKind = TT.meshKind, this.meshOpts = TT.meshOpts, this.leaderboardTop = TT.leaderboardTop, this.cC.oN.add([TT.x, TT.y, TT.z], 1, 1, null, null, !1, !1, this.eId), this.cC.oN.dJ(this.eId, "smoothToServerPos");
        const MT = "Person" === this.meshKind;
        this.cC.oN.dJ(this.eId, "meshRotation", {
          isServerControlled: !0,
          ...MT ? {
            defaultRotationsPerSecond: .5
          } : {},
          childrenNodeParams: MT ? [{
            nodeName: "HeadMesh",
            softTolerance: wc.g,
            hardTolerance: null
          }] : []
        }), this.updateHidingMeshMgr(), this.canSeeSub = sk.k.subscribe(`otherEntitySettings|${this.eId}|canSee`, (TT => {
          this.updateHidingMeshMgr()
        }));
        const KT = () => {
          const TT = this.cC.oN.PTT(this.eId);
          if (!TT) return;
          const kT = (0, mc.h)(this.eId);
          if ("number" === typeof TT.mJ) {
            var cT, lT, MT, KT;
            const OT = null === (cT = (0, rc.j)("head", null === (MT = this.getSpec()) || void 0 === MT || null === (KT = MT.opts.textures) || void 0 === KT ? void 0 : KT.head)) || void 0 === cT || null === (lT = cT.personModel) || void 0 === lT ? void 0 : lT.fullBody;
            return this.cC.gv.PJ.setPickable(TT.mJ, kT && !OT), void(0, oc.updatePersonAttachmentPickability)(this.cC, this.eId, kT)
          }
          const OT = TT.mesh;
          if (OT)
            for (const yT of [OT, ...OT.getChildMeshes(!1)]) "Vt" in yT && !yT.name.startsWith("Cape|") && (yT.Vt = kT)
        };
        this.canAttackSub = sk.k.subscribe(`otherEntitySettings|${this.eId}|canAttack`, KT), this.interactableSub = sk.k.subscribe(`otherEntitySettings|${this.eId}|interactable`, KT), this.overlayColourSub = sk.k.subscribe(`otherEntitySettingsClientifiedEId|${this.eId}|overlayColour`, (TT => {
          this.updateOverlayColour(TT)
        })), this.opacitySub = sk.k.subscribe(`otherEntitySettingsClientifiedEId|${this.eId}|opacity`, (TT => {
          this.updateOpacity(TT)
        })), this.zIndexSub = sk.k.subscribe(`otherEntitySettingsClientifiedEId|${this.eId}|zIndex`, (TT => {
          this.updateZIndex(TT)
        }));
        const OT = this.cC.IH[this.cC.jH][this.eId];
        this.updateOverlayColour(null !== (kT = null === OT || void 0 === OT ? void 0 : OT.overlayColour) && void 0 !== kT ? kT : null), this.updateOpacity(null !== (cT = null === OT || void 0 === OT ? void 0 : OT.opacity) && void 0 !== cT ? cT : 1), this.updateZIndex(null !== (lT = null === OT || void 0 === OT ? void 0 : OT.zIndex) && void 0 !== lT ? lT : 0), this.multilineTextBoxSub = (0, Pc.u)(this.cC, this.eId)
      }
      onChangeClient(TT, kT) {
        if ("xRotation" === TT || "yRotation" === TT || "zRotation" === TT)(0, Pc.x)(this.cC, this.eId, TT, kT);
        else if ("pose" === TT) {
          const TT = this.cC.oN.oTT(this.eId);
          TT && (TT.pose = kT || "standing")
        } else "meshKind" === TT || "meshOpts" === TT ? (this[TT] = kT, this.queueMeshRebuild()) : "name" === TT && "" !== kT ? this.updateHidingMeshMgr() : "leaderboardTop" === TT && (this.leaderboardTop = kT, sk.k.nt(`leaderboardTop|${this.eId}`, kT))
      }
      disposeClient() {
        this.yv = !0, this.cC.oN.deleteEntity(this.eId), sk.k.unsubscribe(this.canSeeSub), sk.k.unsubscribe(this.canAttackSub), sk.k.unsubscribe(this.interactableSub), sk.k.unsubscribe(this.overlayColourSub), sk.k.unsubscribe(this.opacitySub), sk.k.unsubscribe(this.zIndexSub), sk.k.unsubscribe(this.multilineTextBoxSub)
      }
      getCurrentHidingMeshMgrState() {
        var TT, kT;
        return {
          canSee: null !== (TT = null === (kT = this.cC.IH[this.cC.jH][this.eId]) || void 0 === kT ? void 0 : kT.canSee) && void 0 !== TT && TT,
          name: this.colyseusEntity.name,
          meshKind: this.meshKind,
          meshOpts: this.meshOpts
        }
      }
      updateHidingMeshMgr() {
        var TT, kT, cT;
        const {
          cC: lT
        } = this, {
          oN: MT
        } = lT, KT = this.getCurrentHidingMeshMgrState();
        if ((0, Dc.de)(this.previousHidingMeshManagerState, KT)) return;
        if (this.previousHidingMeshManagerState = KT, MT.LJ(this.eId, "hidingMeshManager"), null === (TT = lT.IH[lT.jH][this.eId]) || void 0 === TT || !TT.canSee) return;
        const OT = this.getSpec();
        if (!OT) return;
        const {
          type: yT,
          opts: fT
        } = OT;
        "Person" === yT && (fT.textures = (0, rc.q)(fT.textures)), fT.eId = this.eId, MT.dJ(this.eId, "hidingMeshManager", {
          addMeshComponent: () => {
            var TT, kT, cT;
            "Leaderboard" === yT && (fT.leaderboardTop = this.leaderboardTop);
            const KT = this.bloxd.client.meshCreator.getEntityMesh(yT, fT, (TT => {
              var kT, cT;
              if ("number" === typeof TT) {
                var MT, KT, OT;
                const kT = lT.gv.PJ;
                kT.setEntityId(TT, this.eId);
                const cT = "Person" === yT && (null === (MT = (0, rc.j)("head", null === (OT = fT.textures) || void 0 === OT ? void 0 : OT.head)) || void 0 === MT || null === (KT = MT.personModel) || void 0 === KT ? void 0 : KT.fullBody);
                return void kT.setPickable(TT, (0, mc.h)(this.eId) && !cT)
              }
              const xT = TT;
              for (const yT of [xT, ...xT.getChildMeshes(!1)]) void 0 === yT.Vt || yT.name.startsWith("Cape|") || (yT.Vt = (0, mc.h)(this.eId), yT.metadata ??= new lT.gv.Et, yT.metadata.eId = this.eId);
              this.updateOpacity(null !== (kT = null === (cT = lT.IH[lT.jH][this.eId]) || void 0 === cT ? void 0 : cT.opacity) && void 0 !== kT ? kT : 1)
            }));
            if (!KT) return;
            const {
              mJ: OT,
              mesh: xT,
              meshOffset: IT,
              nameYOffset: AT,
              modelLoaded: CT
            } = KT;
            null === CT || void 0 === CT || CT.then((() => {
              var TT;
              (null === (TT = MT.PTT(this.eId)) || void 0 === TT ? void 0 : TT.mesh) === xT && (this.previousHidingMeshManagerState = null, this.updateHidingMeshMgr())
            }));
            const jT = null === OT ? null : lT.gv.PJ.ScT(OT, 0);
            if (MT.dJ(this.eId, MT.names.mesh, {
                mJ: OT,
                RkT: jT,
                mesh: xT,
                jOT: !1,
                YkT: "Leaderboard" !== yT,
                offset: IT.slice(),
                COT: "ParticleEmitter" === yT && fT.followTargetMeshOffset ? TT => {
                  var kT;
                  zc().copy(TT, IT);
                  const cT = null === (kT = MT.hkT(this.eId)) || void 0 === kT ? void 0 : kT.Tv,
                    lT = void 0 === cT ? null : MT.oTT(cT);
                  if (lT) {
                    var KT, OT;
                    const kT = this.bloxd.getEntityHeading(null !== (KT = lT.ridingVehicleEId) && void 0 !== KT ? KT : cT, !0),
                      MT = Math.sin(kT),
                      yT = Math.cos(kT);
                    TT[0] += lT.meshOffset[0] * yT + lT.meshOffset[2] * MT, TT[1] += lT.meshOffset[1], TT[2] += lT.meshOffset[2] * yT - lT.meshOffset[0] * MT;
                    const fT = null !== (OT = lT.ridingVehicleEId) && void 0 !== OT ? OT : null;
                    null !== fT && (0, ec.d)(this.cC, fT, TT)
                  }
                } : null
              }), "Person" === yT) {
              var vT, tT, hT, NT;
              MT.dJ(this.eId, MT.names.meshAttachments, {
                personFullBody: null !== (vT = null === (tT = (0, rc.j)("head", null === (NT = fT.textures) || void 0 === NT ? void 0 : NT.head)) || void 0 === tT || null === (hT = tT.personModel) || void 0 === hT ? void 0 : hT.fullBody) && void 0 !== vT && vT
              });
              for (const TT of hc.u) {
                var QT, ST, DT;
                const kT = null === (QT = fT.textures) || void 0 === QT ? void 0 : QT[TT];
                kT && null !== (ST = (0, rc.j)(TT, kT)) && void 0 !== ST && null !== (DT = ST.attachments) && void 0 !== DT && DT.length && Fc.b.Player.meshApi.updatePlayerCosmetic(this.eId, OT, TT, kT)
              }
              MT.dJ(this.eId, MT.names.moveState), MT.dJ(this.eId, "updateWalkingState", {
                mJ: OT,
                RkT: jT,
                walkingLegSwingDuration: wc.k
              }), MT.dJ(this.eId, "humanoidMesh", {
                mJ: OT,
                RkT: jT,
                heldItemPositionParams: {},
                maxWalkingAngleOverride: null
              }), MT.dJ(this.eId, "animator", {
                mJ: OT,
                RkT: jT,
                modelLifeformType: "Player"
              }), Hc.g.hasAnimation("Person") && MT.dJ(this.eId, "rigAnimation", {
                target: "Person",
                mJ: OT
              }), MT.oTT(this.eId).pose = this.colyseusEntity.pose || "standing"
            } else if ("BloxdBlock" === yT && null !== OT) {
              MT.dJ(this.eId, "animator", {
                mJ: OT,
                RkT: jT,
                modelLifeformType: null
              });
              const TT = (0, Qc.r)(fT.blockName);
              null !== TT && MT.dJ(this.eId, "rigAnimation", {
                target: TT,
                mJ: OT
              })
            }
            MT.YOT(this.eId, "entityName", {
              name: this.colyseusEntity.name,
              nameYOffset: AT
            }), this.bloxd.setEntityName(this.eId, this.colyseusEntity.name), !0 === fT.autoRotate && (MT.LJ(this.eId, "meshRotation"), MT.dJ(this.eId, "autoRotate"));
            const {
              lineToEId: aT
            } = fT;
            (0, Nc.R)(aT) || MT.dJ(this.eId, "lineToEntity", {
              lineToEId: aT
            });
            const FT = lT.IH[lT.jH][this.eId];
            this.updateOverlayColour(null !== (TT = null === FT || void 0 === FT ? void 0 : FT.overlayColour) && void 0 !== TT ? TT : null), this.updateOpacity(null !== (kT = null === FT || void 0 === FT ? void 0 : FT.opacity) && void 0 !== kT ? kT : 1), this.updateZIndex(null !== (cT = null === FT || void 0 === FT ? void 0 : FT.zIndex) && void 0 !== cT ? cT : 0)
          },
          removeMeshComponent: () => {
            "Person" !== yT && "BloxdBlock" !== yT || MT.LJ(this.eId, "rigAnimation"), MT.LJ(this.eId, MT.names.mesh), MT.o9(this.eId, MT.names.meshAttachments) && MT.LJ(this.eId, MT.names.meshAttachments), MT.LJ(this.eId, "entityName"), MT.LJ(this.eId, "autoRotate"), MT.LJ(this.eId, "lineToEntity"), "Person" === yT ? (MT.LJ(this.eId, MT.names.moveState), MT.LJ(this.eId, "updateWalkingState"), MT.LJ(this.eId, "humanoidMesh"), MT.LJ(this.eId, "animator")) : "BloxdBlock" === yT && MT.LJ(this.eId, "animator")
          },
          hideDist: null !== (kT = fT.hideDist) && void 0 !== kT ? kT : 80,
          movingHideDist: null !== (cT = fT.hideDist) && void 0 !== cT ? cT : 120,
          displayOutsideLoadedChunk: fT.hideDist > 100,
          immediatelyUpdate: !0,
          JI: "BloxdBlock" === yT ? fT.blockName : yT
        })
      }
      queueMeshRebuild() {
        this.meshRebuildQueued || (this.meshRebuildQueued = !0, queueMicrotask((() => {
          this.meshRebuildQueued = !1, this.yv || this.updateHidingMeshMgr()
        })))
      }
      getSpec() {
        return (0, Sc.g)({
          meshKind: this.meshKind,
          meshOpts: this.meshOpts
        })
      }
      updateOverlayColour(TT) {
        var kT, cT;
        if ("Person" !== this.meshKind) return;
        let lT = new ac.e(0, 0, 0, 0);
        if (null !== TT) {
          const kT = (0, Dc.Q)(TT);
          lT = new ac.e(kT[0] / 255, kT[1] / 255, kT[2] / 255, .5)
        }
        const MT = null !== (kT = null === (cT = this.cC.oN.PTT(this.eId)) || void 0 === cT ? void 0 : cT.mJ) && void 0 !== kT ? kT : null;
        null !== MT && Fc.b.Player.meshApi.updateMeshOverlayColour(MT, lT)
      }
      updateZIndex(TT) {
        var kT;
        if ("Person" !== this.meshKind) return;
        const cT = null === (kT = this.cC.oN.PTT(this.eId)) || void 0 === kT ? void 0 : kT.mJ;
        "number" === typeof cT && this.cC.gv.PJ.setRenderingGroupId(cT, TT)
      }
      updateOpacity(TT) {
        const kT = this.cC.oN.PTT(this.eId);
        kT && ("number" !== typeof kT.mJ ? kT.mesh && "ParticleEmitter" !== this.meshKind && (0, Jc.f)(kT.mesh, TT) : Fc.b.Player.meshApi.updateMeshOpacity(kT.mJ, TT))
      }
    }
    var Vc = cT(38837);
    class Ec {
      constructor(TT, kT) {
        this.eId = kT, this.cC = void 0, this.schema = void 0, this.cC = TT.cC
      }
      initClient(TT) {
        this.schema = TT, this.cC.oN.add([TT.x, TT.y, TT.z], .1, .1, null, null, !1, !1, this.eId), this.cC.oN.dJ(this.eId, "smoothToServerPos"), Vc.b.add(this.eId, this.copyOpts())
      }
      onChangeClient(TT) {
        Kc.g.includes(TT) && Vc.b.update(this.eId, this.copyOpts())
      }
      disposeClient() {
        Vc.b.remove(this.eId), this.cC.oN.deleteEntity(this.eId)
      }
      copyOpts() {
        const {
          soundName: TT,
          volume: kT,
          refDistance: cT,
          maxHearDist: lT,
          rate: MT
        } = this.schema;
        return {
          soundName: TT,
          volume: kT,
          refDistance: cT,
          maxHearDist: lT,
          rate: MT
        }
      }
    }
    var Zc = cT(3644),
      uc = cT(36591),
      Xc = cT(6486),
      dc = cT(37650),
      Lc = cT(2790),
      Rc = cT(38e3),
      gc = cT(9071),
      Uc = cT(38309),
      Yc = cT(37630),
      Bc = cT(2891);
    class Wc {
      constructor(TT, kT) {
        let cT = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 4,
          lT = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : () => performance.now();
        this.EkT = TT, this.cC = kT, this.setupBudgetMs = cT, this.now = lT, this.createStateCallbacks = void 0, this.roomStateCallbacks = void 0, this.allItems = {}, this.detachers = new Map, this.deferredSetups = new Map, this.queuedSetups = new Map, this.promotedSetups = new Set, this.setupBudgetLeftMs = void 0, this.lastRefillMs = void 0, this.roomState = void 0, this.yv = !1, this.onFrame = () => {
          this.setUpQueuedEntities(!0)
        }, this.pN = () => {
          this.setUpQueuedEntities(this.now() - this.lastRefillMs > 100)
        }, this.setUpPromoted = () => {
          for (const TT of this.promotedSetups) {
            this.promotedSetups.delete(TT);
            const kT = this.queuedSetups.get(TT);
            kT && (this.queuedSetups.delete(TT), this.timedSetup(kT, TT))
          }
        }, this.createStateCallbacks = (0, gc.getStateCallbacks)(TT), this.roomStateCallbacks = this.createStateCallbacks(TT.state), this.roomState = TT.state, this.setupBudgetLeftMs = cT, this.lastRefillMs = lT()
      }
      setup() {
        this.setupEntityHandlers(), this.setupItemHandlers(), this.EkT.onStateChange(this.setUpPromoted), this.cC.on("beforeInputs", this.onFrame), this.cC.on("UA", this.pN)
      }
      setUpQueuedEntities(TT) {
        var kT;
        if ((null === (kT = (0, Lc.c)().client.getMsgHandler()) || void 0 === kT ? void 0 : kT.EkT) !== this.EkT) return this.cC.off("beforeInputs", this.onFrame), this.cC.off("UA", this.pN), this.queuedSetups.clear(), void this.promotedSetups.clear();
        if (TT && (this.setupBudgetLeftMs = this.setupBudgetMs, this.lastRefillMs = this.now()), this.setUpPromoted(), 0 !== this.queuedSetups.size)
          for (zc().copy(nc, this.cC.oN.kN(this.cC.jH)); this.setupBudgetLeftMs > 0;) {
            const TT = this.nearestQueued(nc);
            if (null === TT) return;
            this.setUpIfQueued(TT), this.setUpPromoted()
          }
      }
      nearestQueued(TT) {
        let kT = null,
          cT = 1 / 0;
        return this.queuedSetups.forEach(((lT, MT) => {
          const KT = function(TT, kT) {
            return (kT.x - TT[0]) ** 2 + (kT.y - TT[1]) ** 2 + (kT.z - TT[2]) ** 2
          }(TT, lT);
          (null === kT || KT < cT) && (kT = MT, cT = KT)
        })), kT
      }
      setUpOrQueue(TT, kT) {
        0 === this.queuedSetups.size && this.setupBudgetLeftMs > 0 || this.mustSetUpNow(TT, kT) ? this.timedSetup(TT, kT) : this.queuedSetups.set(kT, TT)
      }
      mustSetUpNow(TT, kT) {
        const cT = this.cC.W9;
        if (kT === cT) return !0;
        const lT = this.roomState.entities.get(cT);
        return !(!lT || lT.ridingVehicleEId !== kT && lT.followingEId !== kT) || (pc(TT.type) === tc.d || (0, Lc.c)().getFollowingEntities(kT).length > 0)
      }
      setUpIfQueued(TT) {
        const kT = this.queuedSetups.get(TT);
        kT && (this.queuedSetups.delete(TT), this.timedSetup(kT, TT))
      }
      promoteIfQueued(TT) {
        null !== TT && this.queuedSetups.has(TT) && this.promotedSetups.add(TT)
      }
      timedSetup(TT, kT) {
        const cT = this.now();
        this.setupEntity(TT, kT), this.setupBudgetLeftMs -= this.now() - cT
      }
      setupEntityHandlers() {
        this.roomStateCallbacks.entities.uF(((TT, kT) => {
          this.cC.W9 ? this.setUpOrQueue(TT, kT) : this.deferEntitySetupUntilInitInfo(TT, kT)
        })), this.roomStateCallbacks.entities.Om(((TT, kT) => {
          const cT = this.deferredSetups.get(kT);
          cT && (sk.k.unsubscribe(cT), this.deferredSetups.delete(kT)), this.queuedSetups.delete(kT), this.detach(kT), (0, Lc.c)().client.disposeEntity(kT)
        }))
      }
      deferEntitySetupUntilInitInfo(TT, kT) {
        const cT = sk.k.qD("initInfoReceived", (() => {
          this.deferredSetups.delete(kT), this.setUpOrQueue(TT, kT)
        }));
        this.deferredSetups.set(kT, cT), (0, Zc.onGameResetOnce)((() => {
          this.deferredSetups.get(kT) === cT && (sk.k.unsubscribe(cT), this.deferredSetups.delete(kT)), (0, Lc.c)().updatePositionAndPhysics(this.cC.jH, {
            type: Xc.v.DEFAULT,
            tier: null
          }, !0), (0, Lc.c)().takeHeldPlayerBodySize(this.cC.jH);
          const TT = this.cC.oN.ITT(this.cC.jH);
          TT && (TT.movementType = Xc.s.NORMAL)
        }))
      }
      setupEntity(TT, kT) {
        const cT = kT === this.cC.W9;
        if (cT)(0, Lc.c)().client.tL(this.cC.jH, null, null);
        else {
          const {
            type: cT
          } = TT, lT = pc(cT);
          if (void 0 === lT) return void
          function(TT, kT) {
            const cT = String(TT);
            if (ic.has(cT)) return;
            ic.add(cT);
            const lT = cT.length > 80 ? `${cT.slice(0,80)}...` : cT,
              MT = `No client handler for entity type ${JSON.stringify(lT)}, so entity ${kT} is not set up`;
            console.warn(MT), (0, Bc.e)("uncaught", MT, "unknown_entity_type")
          }(cT, kT);
          (0, Lc.c)().client.tL(kT, TT, new lT((0, Lc.c)(), kT, cT))
        }
        const lT = this.createStateCallbacks(TT);
        if (cT) return this.setupMapSchemaCallbacks(kT, TT, lT, "armour"), this.setupScalarField(kT, TT, lT, "scale"), this.setupScalarField(kT, TT, lT, "ridingVehicleEId"), this.setupScalarField(kT, TT, lT, "followingEId"), this.setupScalarField(kT, TT, lT, "followingOffset"), void this.setupScalarField(kT, TT, lT, "shouldMatchFollowingEntityRotation");
        for (const MT of Cc(TT.constructor)) TT[MT] instanceof lc.MapSchema ? this.setupMapSchemaCallbacks(kT, TT, lT, MT) : this.setupScalarField(kT, TT, lT, MT)
      }
      setupMapSchemaCallbacks(TT, kT, cT, lT) {
        const MT = cT[lT],
          KT = new Map;
        MT.uF(((cT, MT) => {
          if (this.onEntityFieldChange(TT, kT, lT, {
              key: MT,
              value: cT
            }), !(cT instanceof lc.Schema)) return;
          const OT = this.createStateCallbacks(cT),
            yT = [];
          for (const KT of Cc(cT.constructor)) yT.push(this.listenForFutureChanges(OT, KT, (() => {
            this.onEntityFieldChange(TT, kT, lT, {
              key: MT,
              value: cT
            })
          })));
          KT.set(MT, (() => {
            for (const TT of yT) TT()
          }))
        })), MT.Om(((cT, MT) => {
          var OT;
          null === (OT = KT.get(MT)) || void 0 === OT || OT(), KT.delete(MT), this.onEntityFieldChange(TT, kT, lT, {
            key: MT,
            value: null
          })
        })), this.addDetacher(TT, (() => {
          for (const TT of KT.values()) TT();
          KT.clear()
        }))
      }
      setupScalarField(TT, kT, cT, lT) {
        this.onEntityFieldChange(TT, kT, lT, kT[lT]);
        const MT = this.listenForFutureChanges(cT, lT, (cT => {
          this.onEntityFieldChange(TT, kT, lT, cT)
        }));
        this.addDetacher(TT, MT)
      }
      addDetacher(TT, kT) {
        let cT = this.detachers.get(TT);
        cT || (cT = [], this.detachers.set(TT, cT)), cT.push(kT)
      }
      detach(TT) {
        for (const cT of null !== (kT = this.detachers.get(TT)) && void 0 !== kT ? kT : []) {
          var kT;
          cT()
        }
        this.detachers.delete(TT)
      }
      listenForFutureChanges(TT, kT, cT) {
        return TT.listen(kT, cT, !1)
      }
      onEntityFieldChange(TT, kT, cT, lT) {
        switch (cT) {
          case "ridingVehicleEId": {
            this.promoteIfQueued(lT);
            const kT = this.cC.oN.oTT((0, uc.b)(TT));
            kT && (kT.ridingVehicleEId = lT);
            break
          }
          case "armour":
            this.handleArmourChange(TT, lT);
            break;
          case "followingEId":
            this.promoteIfQueued(lT), this.handleFollowingEIdChange(TT, kT, lT);
            break;
          case "xRotation":
          case "yRotation":
          case "zRotation":
            this.handleRotationChange(TT, cT, lT);
            break;
          case "scale":
            this.handleScaleChange(TT, lT);
            break;
          case "baseRenderHeading":
            this.handleBaseRenderHeadingChange(TT, lT);
            break;
          case "followingOffset":
            this.handleFollowingOffsetChange(TT, lT);
            break;
          case "shouldMatchFollowingEntityRotation":
            this.handleShouldMatchFollowingEntityRotationChange(TT, lT);
            break;
          case "x":
          case "y":
          case "z":
            return void this.handlePositionChange(TT, cT, lT)
        }(0, Lc.c)().client.updateEntityField(TT, cT, lT)
      }
      handleArmourChange(TT, kT) {
        var cT, lT;
        const {
          key: MT,
          value: KT
        } = kT;
        (0, Fc.w)(TT, MT, null !== (cT = null === KT || void 0 === KT ? void 0 : KT.itemName) && void 0 !== cT ? cT : null, null !== (lT = null === KT || void 0 === KT ? void 0 : KT.enchantmentTier) && void 0 !== lT ? lT : null)
      }
      handleFollowingEIdChange(TT, kT, cT) {
        const lT = (0, uc.b)(TT),
          MT = lT === this.cC.jH;
        if (this.cC.oN.LJ(lT, this.cC.oN.names.Xw), cT) this.cC.oN.LJ(lT, "smoothToServerPos"), this.cC.oN.dJ(lT, this.cC.oN.names.Xw, {
          Tv: (0, uc.b)(cT),
          offset: Array.from(kT.followingOffset),
          NkT: kT.shouldMatchFollowingEntityRotation,
          akT: !0,
          FkT: (TT, lT) => {
            if (zc().copy(TT, kT.followingOffset), kT.ridingVehicleEId === cT) {
              const kT = (0, uc.b)(cT),
                MT = (0, Lc.c)().getEntityHeading(kT, lT);
              zc().Of(TT, TT, zc().ZERO, MT)
            }
          }
        });
        else if (!MT) {
          this.cC.oN.o9(lT, "smoothToServerPos") || this.cC.oN.dJ(lT, "smoothToServerPos");
          const TT = this.cC.oN.getState(lT, "smoothToServerPos"),
            kT = this.cC.oN.wL(lT).position;
          (0, Yc.setServerPosition)(TT, kT[0], kT[1], kT[2])
        }
      }
      handleRotationChange(TT, kT, cT) {
        const lT = "xRotation" === kT ? 0 : "yRotation" === kT ? 1 : 2;
        for (const MT of (0, Lc.c)().getFollowingEntities(TT)) {
          const TT = this.cC.oN.getState(MT, "meshRotation"),
            kT = this.cC.oN.hkT(MT);
          TT && kT.NkT && (TT.serverSetRotation[lT] = cT)
        }
      }
      handleScaleChange(TT, kT) {
        const cT = (0, uc.b)(TT);
        if (sk.k.nt(`entityScale|${cT}`, kT), cT === this.cC.jH) {
          var lT;
          (0, Lc.c)().removeFromEyeHeightCache(cT);
          const TT = this.cC.oN.ITT(this.cC.jH),
            kT = null !== (lT = null === TT || void 0 === TT ? void 0 : TT.physicsState) && void 0 !== lT ? lT : {
              type: Xc.v.DEFAULT,
              tier: null
            };
          return void(0, Lc.c)().updatePositionAndPhysics(this.cC.jH, kT, !1)
        }
        const MT = (0, Lc.c)().getLifeformType(cT);
        if (null === MT) return;
        const {
          physicsBodyWidth: KT,
          physicsBodyHeight: OT
        } = (0, Uc.e)(kT, MT);
        this.cC.oN.vkT(cT, KT, OT, KT)
      }
      handleBaseRenderHeadingChange(TT, kT) {
        const cT = this.cC.oN.getState(TT, "meshRotation");
        cT && (cT.baseRenderRotation[1] = kT);
        for (const lT of (0, Lc.c)().getFollowingEntities(TT)) {
          const TT = this.cC.oN.getState(lT, "meshRotation"),
            cT = this.cC.oN.hkT(lT);
          TT && cT.NkT && (TT.baseRenderRotation[1] = kT)
        }
      }
      handleFollowingOffsetChange(TT, kT) {
        const cT = this.cC.oN.hkT((0, uc.b)(TT));
        if (cT && cT.offset) {
          const TT = kT ? Array.from(kT) : zc().ZERO;
          cT.offset[0] = TT[0], cT.offset[1] = TT[1], cT.offset[2] = TT[2]
        }
      }
      handleShouldMatchFollowingEntityRotationChange(TT, kT) {
        const cT = this.cC.oN.hkT((0, uc.b)(TT));
        cT && (cT.NkT = null === kT || void 0 === kT || kT)
      }
      handlePositionChange(TT, kT, cT) {
        if (this.cC.oN.o9(TT, "smoothToServerPos")) {
          const lT = this.cC.oN.getState(TT, "smoothToServerPos");
          (0, Yc.setServerPositionAxis)(lT, qc[kT], cT)
        }
      }
      setupItemHandlers() {
        this.roomStateCallbacks.items.uF(((TT, kT) => {
          this.allItems[kT] = TT, (0, dc.j)(this.cC, kT, [TT.x, TT.y, TT.z], TT.id, {
            amount: TT.amount,
            attributes: JSON.parse(TT.attributes),
            Wl: (0, Tc.e)(this.cC).cantPickUpItem(kT),
            size: TT.size,
            predictedAt: (0, Lc.c)().client.itemDropPrediction.onServerItemAdded(kT)
          });
          const cT = this.createStateCallbacks(TT);
          for (const lT of Cc(yc)) this.onItemFieldChange(kT, lT, TT[lT]), this.addDetacher(kT, this.listenForFutureChanges(cT, lT, (TT => {
            this.onItemFieldChange(kT, lT, TT)
          })))
        })), this.roomStateCallbacks.items.Om(((TT, kT) => {
          delete this.allItems[kT], this.detach(kT), (0, Lc.c)().client.itemDropPrediction.onServerItemRemoved(kT), this.cC.oN.o9(kT, this.cC.oN.names.itemState) && this.cC.oN.deleteEntity(kT), (0, Tc.e)(this.cC).disposeEntity(kT)
        }))
      }
      onItemFieldChange(TT, kT, cT) {
        if (kT in qc) {
          if (this.cC.oN.o9(TT, "itemState")) {
            const lT = this.cC.oN.getState(TT, "smoothToServerPos");
            (0, Yc.setServerPositionAxis)(lT, qc[kT], cT), (0, Lc.c)().client.itemDropPrediction.onServerItemMoved(TT)
          }
          return
        }
        if (!this.cC.oN.o9(TT, "itemState")) return;
        const lT = this.cC.oN.getState(TT, "itemState");
        "amount" === kT && cT !== lT.amount && (lT.creationTime = Date.now()), lT[kT] = "attributes" === kT ? JSON.parse(cT) : cT
      }
      dispose() {
        if (!this.yv) {
          this.yv = !0, this.cC.off("beforeInputs", this.onFrame), this.cC.off("UA", this.pN), this.queuedSetups.clear(), this.promotedSetups.clear();
          for (const TT of this.deferredSetups.values()) sk.k.unsubscribe(TT);
          this.deferredSetups.clear(), this.cC.oN.LJ(this.cC.jH, this.cC.oN.names.Xw);
          for (const TT in this.allItems) this.cC.oN.deleteEntity(TT), delete this.allItems[TT];
          for (const TT of [...this.detachers.keys()]) this.detach(TT);
          (0, Tc.e)(this.cC).clear();
          for (const TT of (0, Lc.c)().client.iterateEntityIds())(0, Lc.c)().client.disposeEntity(TT)
        }
      }
    }
    const nc = [0, 0, 0];

    function pc(TT) {
      if ("string" !== typeof TT) return;
      const kT = TT.indexOf("|"),
        cT = -1 === kT ? TT : TT.slice(0, kT),
        lT = Tl();
      return Object.hasOwn(lT, cT) ? lT[cT] : void 0
    }
    const ic = new Set;
    const qc = {
      x: 0,
      y: 1,
      z: 2
    };
    let sc = null;

    function Tl() {
      return null !== sc || (sc = {
        ...Object.fromEntries(Kc.i.map((TT => {
          const {
            JI: kT
          } = (0, Rc.b)(TT);
          return [TT, kT]
        }))),
        Pebble: tc.d,
        Snowball: tc.d,
        "Snowball Launcher": tc.d,
        "Reinforced Pebble": tc.d,
        Bullet: tc.d,
        "Reinforced Ball": tc.d,
        Ball: tc.d,
        Mango: tc.d,
        "Moonstone Orb": tc.d,
        ...Object.fromEntries(Mc.y.map((TT => [(0, Dc.Pb)(TT), tc.d]))),
        Arrow: tc.d,
        "Arrow of Speed": tc.d,
        "Arrow of Poison": tc.d,
        "Arrow of Slowness": tc.d,
        "Arrow of Weakness": tc.d,
        "Arrow of Knockback": tc.d,
        "Arrow of Strength": tc.d,
        "Arrow of Invisibility": tc.d,
        "Arrow of Jumping": tc.d,
        "Arrow of Defense": tc.d,
        "Arrow of Instant Healing": tc.d,
        "Arrow of Instant Damage": tc.d,
        "Arrow of Regeneration": tc.d,
        "Arrow of Haste": tc.d,
        "Arrow of Shield": tc.d,
        "Arrow of Double Jump": tc.d,
        "Arrow of Heat Resistance": tc.d,
        "Arrow of X-Ray Vision": tc.d,
        "Arrow of Mining Yield": tc.d,
        "Arrow of Brain Rot": tc.d,
        "Arrow of Milk": tc.d,
        Fireball: tc.d,
        "Bouncy Bomb": tc.d,
        RPG: tc.d,
        "Obby RPG": tc.d,
        "Super RPG": tc.d,
        "Grenade Launcher": tc.d,
        Iceball: tc.d,
        Coconut: tc.d,
        "Splash Speed Potion": tc.d,
        "Splash Defense Potion": tc.d,
        "Splash Strength Potion": tc.d,
        "Splash Invisibility Potion": tc.d,
        "Splash Jump Potion": tc.d,
        "Splash Knockback Potion": tc.d,
        "Splash Poison Potion": tc.d,
        "Splash Speed Potion II": tc.d,
        "Splash Defense Potion II": tc.d,
        "Splash Strength Potion II": tc.d,
        "Splash Jump Potion II": tc.d,
        "Splash Knockback Potion II": tc.d,
        "Splash Poison Potion II": tc.d,
        "Splash Slowness Potion": tc.d,
        "Splash Slowness Potion II": tc.d,
        "Splash Weakness Potion": tc.d,
        "Splash Weakness Potion II": tc.d,
        "Splash Milk Potion": tc.d,
        "Splash Instant Damage Potion": tc.d,
        "Splash Instant Damage Potion II": tc.d,
        "Splash Instant Healing Potion": tc.d,
        "Splash Instant Healing Potion II": tc.d,
        "Splash Regeneration Potion": tc.d,
        "Splash Regeneration Potion II": tc.d,
        "Splash Haste Potion": tc.d,
        "Splash Haste Potion II": tc.d,
        "Splash Shield Potion": tc.d,
        "Splash Shield Potion II": tc.d,
        "Splash Double Jump Potion": tc.d,
        "Splash Heat Resistance Potion": tc.d,
        "Splash X-Ray Vision Potion": tc.d,
        "Splash Mining Yield Potion": tc.d,
        "Splash Mining Yield Potion II": tc.d,
        "Splash Brain Rot Potion": tc.d,
        "Yellow Paintball Gun": tc.d,
        "White Paintball Gun": tc.d,
        "Red Paintball Gun": tc.d,
        "Purple Paintball Gun": tc.d,
        "Pink Paintball Gun": tc.d,
        "Orange Paintball Gun": tc.d,
        "Magenta Paintball Gun": tc.d,
        "Lime Paintball Gun": tc.d,
        "Light Gray Paintball Gun": tc.d,
        "Light Blue Paintball Gun": tc.d,
        "Green Paintball Gun": tc.d,
        "Gray Paintball Gun": tc.d,
        "Cyan Paintball Gun": tc.d,
        "Brown Paintball Gun": tc.d,
        "Blue Paintball Gun": tc.d,
        "Black Paintball Gun": tc.d,
        "Yellow Heavy Paintball Gun": tc.d,
        "White Heavy Paintball Gun": tc.d,
        "Red Heavy Paintball Gun": tc.d,
        "Purple Heavy Paintball Gun": tc.d,
        "Pink Heavy Paintball Gun": tc.d,
        "Orange Heavy Paintball Gun": tc.d,
        "Magenta Heavy Paintball Gun": tc.d,
        "Lime Heavy Paintball Gun": tc.d,
        "Light Gray Heavy Paintball Gun": tc.d,
        "Light Blue Heavy Paintball Gun": tc.d,
        "Green Heavy Paintball Gun": tc.d,
        "Gray Heavy Paintball Gun": tc.d,
        "Cyan Heavy Paintball Gun": tc.d,
        "Brown Heavy Paintball Gun": tc.d,
        "Blue Heavy Paintball Gun": tc.d,
        "Black Heavy Paintball Gun": tc.d,
        "Toxin Ball": tc.d,
        "Splash Aura XP Potion": tc.d,
        "Splash Aura XP Potion II": tc.d,
        "Arrow of Aura XP": tc.d,
        Firecracker: tc.d,
        "Rainbow Firecracker": tc.d,
        "White Firecracker": tc.d,
        "Orange Firecracker": tc.d,
        "Magenta Firecracker": tc.d,
        "Light Blue Firecracker": tc.d,
        "Yellow Firecracker": tc.d,
        "Lime Firecracker": tc.d,
        "Pink Firecracker": tc.d,
        "Gray Firecracker": tc.d,
        "Light Gray Firecracker": tc.d,
        "Cyan Firecracker": tc.d,
        "Purple Firecracker": tc.d,
        "Blue Firecracker": tc.d,
        "Brown Firecracker": tc.d,
        "Green Firecracker": tc.d,
        "Red Firecracker": tc.d,
        "Black Firecracker": tc.d,
        "Firecracker Pebble": tc.d,
        "Rainbow Firecracker Pebble": tc.d,
        "White Firecracker Pebble": tc.d,
        "Orange Firecracker Pebble": tc.d,
        "Magenta Firecracker Pebble": tc.d,
        "Light Blue Firecracker Pebble": tc.d,
        "Yellow Firecracker Pebble": tc.d,
        "Lime Firecracker Pebble": tc.d,
        "Pink Firecracker Pebble": tc.d,
        "Gray Firecracker Pebble": tc.d,
        "Light Gray Firecracker Pebble": tc.d,
        "Cyan Firecracker Pebble": tc.d,
        "Purple Firecracker Pebble": tc.d,
        "Blue Firecracker Pebble": tc.d,
        "Brown Firecracker Pebble": tc.d,
        "Green Firecracker Pebble": tc.d,
        "Red Firecracker Pebble": tc.d,
        "Black Firecracker Pebble": tc.d,
        "Blinding Pebble": tc.d,
        Poop: tc.d,
        "Wood Boomerang": tc.d,
        "Stone Boomerang": tc.d,
        "Iron Boomerang": tc.d,
        "Gold Boomerang": tc.d,
        "Diamond Boomerang": tc.d,
        "Amethite Boomerang": tc.d,
        "Magmasteel Boomerang": tc.d,
        "Rubellite Boomerang": tc.d,
        "Serpentite Boomerang": tc.d,
        "Moonstone Boomerang": tc.d,
        "67 Base Projectile": tc.d,
        "67 Boosted Projectile": tc.d,
        "Capitano Grenade": tc.d,
        "Scatter Pellet": tc.d,
        "Lucky Bomb": tc.d,
        "Unlucky Bomb": tc.d,
        "Swap Orb": tc.d,
        Mesh: Gc,
        AudioEntity: Ec
      }), sc
    }
  },
  38810: (TT, kT, cT) => {
    cT.d(kT, {
      c: () => KT,
      e: () => OT
    });
    var lT = cT(617),
      MT = cT(37588);
    const KT = 4e4;
    class OT {
      constructor() {
        let TT = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Date.now;
        this.now = TT, this.editedAt = new Map, this.lastChunkX = NaN, this.lastChunkY = NaN, this.lastChunkZ = NaN, this.lastChunkId = ""
      }
      noteEdit(TT, kT, cT) {
        const KT = (0, lT.ab)(TT),
          OT = (0, lT.ab)(kT),
          yT = (0, lT.ab)(cT),
          fT = this.now();
        if (KT !== this.lastChunkX || OT !== this.lastChunkY || yT !== this.lastChunkZ) {
          this.lastChunkX = KT, this.lastChunkY = OT, this.lastChunkZ = yT, this.lastChunkId = (0, MT.e)(KT, OT, yT), this.editedAt.delete(this.lastChunkId), this.editedAt.set(this.lastChunkId, fT);
          for (const [TT, kT] of this.editedAt) {
            if (kT >= fT - 3e5) break;
            this.editedAt.delete(TT)
          }
        } else this.editedAt.set(this.lastChunkId, fT)
      }
      chunksEditedSince(TT) {
        const kT = [];
        for (const [cT, lT] of this.editedAt) lT >= TT && kT.push(cT);
        return kT
      }
    }
  },
  38882: (TT, kT, cT) => {
    cT.d(kT, {
      d: () => Ik,
      e: () => Xk,
      i: () => zk,
      j: () => dk
    });
    var lT = cT(3644),
      MT = cT(8802),
      KT = cT(36496),
      OT = cT(1452),
      yT = cT(36573),
      fT = cT(38837),
      xT = cT(38789),
      IT = cT(3732),
      AT = cT(37732),
      CT = cT(1244),
      jT = cT(328),
      vT = cT(36),
      tT = cT(1974),
      hT = cT(118),
      NT = cT(47),
      QT = cT(2009),
      ST = cT(1915),
      DT = cT(2918);
    class aT {
      constructor(TT) {
        this.storeForMs = TT, this.clicks = new DT.c
      }
      click() {
        this.clicks.enqueue(Date.now());
        const TT = Date.now() - this.storeForMs;
        for (; this.clicks.size > 0 && this.clicks.peek() < TT;) this.clicks.dequeue()
      }
      getNumClicksInMs(TT) {
        let kT = 0;
        return this.clicks.forEach((cT => {
          cT > Date.now() - TT && kT++
        })), kT
      }
      getMaxClickSeparationInMs(TT) {
        if (0 === this.clicks.size) return this.storeForMs;
        let kT = 0,
          cT = Date.now() - TT;
        this.clicks.forEach((lT => {
          lT < Date.now() - TT || (kT = Math.max(kT, Math.abs(lT - cT)), cT = lT)
        }));
        const lT = Math.abs(Date.now() - cT);
        return Math.max(kT, lT)
      }
    }
    class FT {
      constructor(TT) {
        this.storeForMs = TT, this.clickDownDurations = new DT.c
      }
      registerClickDownDuration(TT) {
        this.clickDownDurations.enqueue({
          dur: TT,
          atTime: Date.now()
        });
        const kT = Date.now() - this.storeForMs;
        for (; this.clickDownDurations.size > 0 && this.clickDownDurations.peek().atTime < kT;) this.clickDownDurations.dequeue()
      }
      clickDownDurationsCheck(TT) {
        if (TT > this.storeForMs) return console.error("overDuration is greater than storeForMs"), "0:0";
        let kT = 0,
          cT = 0;
        return this.clickDownDurations.forEach((lT => {
          lT.atTime > Date.now() - TT && (kT++, cT = Math.max(cT, lT.dur))
        })), `${kT}:${cT}`
      }
    }
    var rT = cT(36310),
      PT = cT(38888),
      wT = cT(31),
      mT = cT(2790),
      bT = cT(1327),
      zT = cT(38819),
      JT = cT(4428),
      oT = cT(159),
      HT = cT(38006),
      eT = cT(38218),
      GT = cT(617),
      VT = cT(36302),
      ET = cT(15),
      ZT = cT(9447),
      uT = cT(1226),
      XT = cT(218),
      dT = cT(38895),
      LT = cT(38901),
      RT = cT(38038),
      gT = cT(38919),
      UT = cT(37930),
      YT = cT(3343),
      BT = cT(1654),
      WT = cT(36423),
      nT = cT(2853),
      pT = cT(38906),
      iT = cT(38914),
      qT = cT(37794);
    const sT = {
      forward: "freeCamForward",
      backward: "freeCamBackward",
      left: "freeCamLeft",
      right: "freeCamRight",
      jump: "freeCamUp",
      crouch: "freeCamDown"
    };

    function Tk() {
      var TT, kT;
      return !(null === (TT = (0, mT.c)().client) || void 0 === TT || null === (kT = TT.freeCameraController) || void 0 === kT || !kT.movesFly())
    }

    function kk(TT) {
      const kT = TT.on.bind(TT);
      TT.on = (TT, cT) => {
        QT.G.has(TT) ? kT(TT, cT) : kT(TT, (kT => {
          var lT;
          return null !== (lT = (0, mT.c)().client) && void 0 !== lT && lT.isReplayMode() ? function(TT) {
            return TT in sT
          }(TT) && Tk() ? cT(kT) : void 0 : cT(kT)
        }))
      }
    }
    const ck = 5e3,
      lk = 1;
    let Mk, Kk = lk,
      Ok = 0;
    const yk = !0;
    let fk = yk;
    tT.b.subscribe("_ignoreBasicBoards", (TT => {
      fk = TT
    })), (0, lT.onGameReset)((() => {
      fk = yk
    }));
    let xk = null;
    const Ik = () => xk;
    let Ak, Ck, jk;
    var vk, tk, hk, Nk, Qk, Sk, Dk, ak, Fk;
    const rk = [0, 1, 8, 255, "length", 2, "f", "c", 16, "undefined", void 0, "b", 194, 3, 153, 223, 63, 6, "fromCodePoint", 7, 12, "push", null, 10, 18, 132, "j", "h", 91, 5, 209, 8191, 88, 13, 14, "e", 86, 177, !1, !0, "d", 173, 192, 178, 166, 9, 222, 4, 89, 101, 22, "i", 138, 221, 217, 142, 1023, "a", 126, 65536, 180, 139, 55296, 56320, 52, 93, 127, 128, 31, 15, 27, 78, 73, 111, 238, 133, 218, 32, 224, 116, 191, "g", 240, 182, 143, 75, 246, 48, 159, 115, 69, 41, 44, 74, 150, 186, 29, 211, 179, "k", 30, 189, 55, 76, 131, 45];

    function Pk(...TT) {
      return TT[rk[4]] = rk[1], typeof vk[TT[rk[0]]] === rk[9] ? vk[TT[rk[0]]] = function(TT) {
        var kT, cT, lT, MT, KT, OT, yT;
        for (bk(kT = "" + (TT || ""), cT = kT.length, lT = [], MT = rk[0], KT = rk[0], OT = -rk[1]), yT = rk[0]; yT < cT; yT++) {
          var fT = 't^fD*kwg&6j}xAW>?%"7;@HiBrLdhJnpoEOb0,9)v`{8(:#yleRPGqCFcmUXQYKZaVIsM53STN[]u<=|24!+_./~1z$'.indexOf(kT[yT]);
          if (fT !== -rk[1])
            if (OT < rk[0]) OT = fT;
            else {
              bk(OT += fT * rk[28], MT |= OT << KT, KT += (OT & rk[31]) > rk[32] ? rk[33] : rk[34]);
              do {
                bk(lT.push(MT & rk[3]), MT >>= rk[2], KT -= rk[2])
              } while (KT > rk[19]);
              OT = -rk[1]
            }
        }
        return OT > -rk[1] && lT.push((MT | OT << KT) & rk[3]), wk(lT)
      }(tk[TT[rk[0]]]) : vk[TT[rk[0]]]
    }

    function wk(...TT) {
      return TT[rk[4]] = rk[1], typeof Nk !== rk[9] && Nk ? (new Nk).decode(new Qk(TT[rk[0]])) : typeof Sk !== rk[9] && Sk ? Sk.from(TT[rk[0]]).toString("utf-8") : Fk(TT[rk[0]])
    }

    function mk() {}

    function bk() {
      bk = function() {}
    }

    function zk(TT) {
      function kT() {
        return TT.oN.ckT(TT.jH)
      }
      kk(TT.inputs.down), kk(TT.inputs.up);
      for (const lT of ["forward", "backward", "left", "right", "sprint", "jump", "crouch"]) {
        const kT = (kT, cT) => {
          var MT, KT;
          if (Tk()) {
            var OT;
            const MT = sT[lT];
            var yT, fT;
            if (MT) null === (yT = (0, mT.c)().client) || void 0 === yT || null === (fT = yT.freeCameraController) || void 0 === fT || fT.handlefreeCamKeyPress(MT, kT, cT);
            return void(cT || null !== (OT = (0, mT.c)().client) && void 0 !== OT && OT.isReplayMode() || (TT.oN.ykT()[lT] = !1))
          }
          if (null !== (MT = (0, mT.c)().client) && void 0 !== MT && null !== (KT = MT.freeCameraController) && void 0 !== KT && KT.isKeyPressOverriden(kT)) return;
          TT.oN.ykT()[lT] = cT
        };
        TT.inputs.down.on(lT, (TT => kT(TT, !0))), TT.inputs.up.on(lT, (TT => kT(TT, !1)))
      }
      TT.inputs.down.on("crouch", (() => {
        if (Tk()) return;
        if (!TT.lD.canCrouch) return;
        const kT = TT.oN.ykT();
        wT.e.get("clientEscMenuOptions").crouchIsToggle && (kT.crouchToggled = !kT.crouchToggled && !kT.padSneakToggled), kT.padSneakToggled = !1
      }));
      const cT = () => {
        const TT = kT();
        TT.isGun() && TT.inaccuracyCalculator.jump()
      };
      TT.inputs.down.on("jump", (TT => {
        Tk() || (cT(), Ak(TT))
      }));
      for (const lT of QT.n) TT.inputs.down.on(lT, (TT => {
        var kT, cT;
        null !== (kT = (0, mT.c)().client) && void 0 !== kT && null !== (cT = kT.freeCameraController) && void 0 !== cT && cT.handlefreeCamKeyPress(lT, TT, !0) && (TT.preventDefault(), TT.stopPropagation())
      })), TT.inputs.up.on(lT, (TT => {
        var kT, cT;
        null !== (kT = (0, mT.c)().client) && void 0 !== kT && null !== (cT = kT.freeCameraController) && void 0 !== cT && cT.handlefreeCamKeyPress(lT, TT, !1) && (TT.preventDefault(), TT.stopPropagation())
      }));
      TT.inputs.down.on("recordGame", (() => {
        var TT, kT;
        null === (TT = (0, mT.c)().client) || void 0 === TT || null === (kT = TT.gameRecorder) || void 0 === kT || kT.toggleRecording()
      })), TT.inputs.down.on("recordClip", (() => {
        var TT, kT;
        (0, rT.b)() || null === (TT = (0, mT.c)().client) || void 0 === TT || null === (kT = TT.gameRecorder) || void 0 === kT || kT.saveClip()
      }));
      for (const lT of QT.G) TT.inputs.down.on(lT, (() => {
        var TT;
        if ((0, PT.e)()) return;
        if ("replayViewerOpen" === lT) return void vT.k.nt("replayViewer|requested", "toggle");
        const kT = null === (TT = (0, mT.c)().client) || void 0 === TT ? void 0 : TT.gameReplayer;
        ((0, rT.b)() || null !== kT && void 0 !== kT && kT.isReplayMode()) && (null === kT || void 0 === kT || kT.handleAction(lT))
      }));
      const OT = new aT(3e4),
        AT = new FT(4e4);
      let NT = 0;
      const DT = TT => {
          let kT = 0,
            cT = null;
          const lT = kT => null !== kT && kT === cT && (cT = null, TT(), !0);
          return {
            press: () => (kT++, (0, dT.d)() || (lT(cT), cT = kT), kT),
            owns: TT => TT === cT,
            release: lT
          }
        },
        JT = (TT, cT) => {
          cT && dk(CT.c.TouchDownFirePrimary), TT ? ZT() : ((0, eT.e)(), kT().TcT()), cT || dk(CT.c.DownFirePrimary), Xk(!0), OT.click();
          const MT = OT.getMaxClickSeparationInMs(3e4) < 1e3 / 30,
            KT = OT.getMaxClickSeparationInMs(1e4) < 20,
            yT = OT.getMaxClickSeparationInMs(4e3) < 1e3 / 70;
          if (MT || KT || yT) {
            let TT;
            if (MT) TT = 30;
            else if (KT) TT = 50;
            else {
              if (!yT) throw new Error("???");
              TT = 70
            }(0, lT.sendColyMessage)(IT.$j, TT)
          }
        },
        oT = DT((() => {
          const TT = Date.now() - NT;
          AT.registerClickDownDuration(TT), kT().ikT(), dk(CT.c.UpFirePrimary), Xk(!1);
          const cT = AT.clickDownDurationsCheck(4e4);
          (0, lT.sendColyMessage)(IT.rg, cT)
        }));
      let HT = 0;
      TT.inputs.down.on("primary-fire", (function(TT) {
        HT = oT.press(), oT.owns(HT) && (NT = Date.now(), Math.abs(performance.now() - TT.timeStamp) > 5e3 || (JT(TT.altKey, "changedTouches" in TT), Ak(TT)))
      })), TT.inputs.up.on("primary-fire", (function(TT) {
        oT.release(HT) && Ak(TT, !0)
      }));
      const GT = () => {
          kT().cxT(), dk(CT.c.DownFireSecondary), Xk(!0), TT.U_ && !TT.U_.position && (0, xT.k)()
        },
        VT = DT((() => {
          kT().pkT(), dk(CT.c.UpFireSecondary), Xk(!1)
        }));
      let ET = 0;
      TT.inputs.down.on("alt-fire", (function(TT) {
        ET = VT.press(), VT.owns(ET) && (GT(), Ak(TT))
      })), TT.inputs.up.on("alt-fire", (function(TT) {
        VT.release(ET) && Ak(TT, !0)
      }));
      const ZT = () => kT().OxT();
      TT.inputs.down.on("mid-fire", (() => {
        (0, dT.d)() || ZT()
      }));
      const gT = TT => {
          (0, lT.sendColyMessage)(IT.Ah, TT, !0)
        },
        Mk = TT => {
          (0, lT.sendColyMessage)(IT.Bh, {
            vy: TT,
            ty: yk()
          }, !0)
        };
      for (const lT of ["SpecialAction1", "SpecialAction2"]) TT.inputs.down.on(lT, (() => {
        gT(lT)
      })), TT.inputs.up.on(lT, (() => {
        Mk(lT)
      }));
      const Ok = () => {
        const TT = kT();
        TT.isGun() && TT.reload(Date.now())
      };
      TT.inputs.down.on("ReloadGun", Ok);
      const yk = () => {
        let kT = "a";
        return TT.physics.testSolid.toString().includes("DC") || (kT = "b"), kT
      };
      TT.inputs.down.on("OpenInventory", (TT => {
        TT.preventDefault(), (0, BT.A)(TT, "inventory", (0, LT.b)((0, mT.f)()))
      })), TT.inputs.bind("ShiftHeld", "ShiftLeft", "ShiftRight");
      const fk = TT => {
        vT.k.nt("DropItemKeyPressed", TT)
      };
      TT.inputs.down.on("DropItem", (() => {
        fk(TT.oN.ykT().crouch)
      })), TT.inputs.down.on("OpenShop", (kT => {
        (0, rT.b)() || "inGame" === wT.e.get("gameState") && (0, BT.z)(kT, jT.o.SHOP, !(0, MT.b)(TT.lD.shopInfo))
      })), TT.inputs.down.on("OpenLobbyLeaderboard", (kT => {
        (0, rT.b)() || "inGame" === wT.e.get("gameState") && (0, BT.z)(kT, jT.o.LOBBY_LEADERBOARD, (0, iT.b)(TT.lD))
      })), TT.inputs.down.on("HideUi", (() => {
        vT.k.nt("showUi", !1)
      })), TT.inputs.up.on("HideUi", (() => {
        vT.k.nt("showUi", !0)
      }));
      const Ik = TT => {
        0 === TT && (TT = 10), vT.k.nt("setSelectedInventorySlotI", TT - 1), vT.k.nt("numkeyPressed", TT)
      };
      for (let lT = 1; lT <= 10; lT++) TT.inputs.down.on("HotBarSlot" + lT.toString(), (() => {
        Ik(lT)
      }));
      TT.inputs.down.on("OpenTasksAndLeaderboard", (kT => {
        const cT = (0, WT.h)();
        cT ? (0, BT.D)(kT, !0, cT) : (0, BT.A)(kT, "retentionFeatures", !(!TT.lD._tasks && !TT.lD._availableLeaderboards))
      })), TT.inputs.down.on("OpenCodeEditor", (kT => {
        (0, BT.D)(kT, (0, zT.c)((0, bT.b)()), (() => {
          vT.k.nt("EditLobbyCode", TT.oN.kN(TT.jH).map(Math.floor))
        }))
      })), TT.inputs.bind("ToggleFullCoordinateOverlay", "F3"), TT.inputs.down.on("ToggleFullCoordinateOverlay", (() => {
        vT.k.nt("toggleFullCoordinateOverlay")
      }));
      const jk = () => {
        (0, mT.c)().client.cameraController.swapCameraZoom()
      };
      TT.inputs.down.on("SwapCameraZoom", jk), TT.inputs.down.on("OpenInviteLink", (TT => {
        (0, BT.A)(TT, "inviteLink", hT.featureFlags.canUseInviteLinks)
      })), TT.inputs.bind("Y", "KeyY"), TT.inputs.down.on("Y", (TT => {
        (0, rT.b)() || vT.k.nt("YKeyPressed")
      })), TT.inputs.bind("X", "KeyX"), TT.inputs.down.on("X", (TT => {
        (0, rT.b)() || vT.k.nt("XKeyPressed")
      })), TT.inputs.down.on("OpenEmoteWheel", (() => {
        vT.k.nt("requestEmoteWheelHoldOpen")
      })), TT.inputs.up.on("OpenEmoteWheel", (() => {
        vT.k.nt("requestEmoteWheelHoldRelease")
      })), TT.inputs.down.on("Zoom", (() => {
        if ("inGame" === wT.e.get("gameState")) {
          TT.oN.getState(TT.jH, "playerCameraAdjustment").zoomKeyPressed = !0, (0, mT.c)().client.cameraController.handleZoomKeyPressed()
        }
      })), TT.inputs.up.on("Zoom", (() => {
        TT.oN.getState(TT.jH, "playerCameraAdjustment").zoomKeyPressed = !1
      })), Jk();
      const vk = TT => function() {
        return Ck(), TT(...arguments)
      };

      function tk(TT) {
        "inGame" !== wT.e.get("gameState") || (0, BT.u)() || (vT.k.nt("ctrlCrouchWithoutFullscreen"), TT.preventDefault())
      }
      xk = {
        primaryFireDown: vk((() => {
          const TT = oT.press();
          return oT.owns(TT) && (NT = Date.now(), JT(!1, !1)), TT
        })),
        primaryFireUp: vk((TT => {
          oT.release(TT)
        })),
        altFireDown: vk((() => {
          const TT = VT.press();
          return VT.owns(TT) && GT(), TT
        })),
        altFireUp: vk((TT => {
          VT.release(TT)
        })),
        jumpDown: vk(cT),
        specialActionDown: vk(gT),
        specialActionUp: vk(Mk),
        reloadGun: vk(Ok),
        dropItem: vk(fk),
        swapCameraZoom: vk(jk),
        pickBlock: vk(ZT)
      }, TT.inputs.down.on("ctrlCrouch", tk), TT.inputs.up.on("ctrlCrouch", tk), TT.inputs.bind("ctrlCrouch", "ControlLeft");
      const hk = TT => {
        "inGame" === wT.e.get("gameState") && TT.ctrlKey && !(0, BT.u)() && TT.preventDefault()
      };
      document.addEventListener("keydown", hk), document.addEventListener("keyup", hk), document.addEventListener("keypress", hk), TT.inputs.bind("Alt", "AltLeft", "AltRight"), TT.inputs.down.on("Alt", (TT => {
        TT.preventDefault()
      }));
      const Nk = kT => (0, UT.g)(TT, kT),
        Qk = kT => (0, UT.h)(TT, kT),
        Sk = [0, 0, 0],
        Dk = [0, 0, 1];
      TT.on("afterRender", (kT => {
        (0, KT.c)(TT.camera.heading), (0, UT.k)(TT, Sk, Dk), (0, mT.c)().client.triggerGameCallback("onAfterRender", kT, {
          cameraHeading: TT.camera.heading,
          cameraPitch: TT.camera.pitch,
          cameraPosition: Sk,
          cameraDirection: Dk,
          tanHalfFovX: (0, UT.c)(TT),
          tanHalfFovY: Math.tan(TT.gv.hY().fov / 2),
          screenBandPct: {
            x: YT.c,
            y: (0, YT.i)()
          },
          projectWorldPosToScreenPos: Nk,
          projectWorldPosToViewport: Qk
        })
      })), (0, nT.o)("look") && (TT.camera.aE = (0, pT.k)("js"), TT.inputs.ZZ = pT.h), (0, nT.o)("remesh") && (0, qT.k)(TT), TT.on("beforeInputs", (() => {
        if ((0, PT.e)()) return TT.inputs.uZ.dx = 0, void(TT.inputs.uZ.dy = 0);
        if (TT.camera.uZ.dx += TT.inputs.uZ.dx, TT.camera.uZ.dy += TT.inputs.uZ.dy, 0 !== TT.inputs.uZ.dx || 0 !== TT.inputs.uZ.dy) {
          TT.oN.getState(TT.jH, "playerCameraAdjustment").lastPointerMove = Date.now()
        }
        TT.inputs.uZ.dx = 0, TT.inputs.uZ.dy = 0
      }));
      let ak = 0;
      TT.on("UA", (function(kT) {
        vT.k.nt("noaTick", kT);
        const cT = (0, mT.c)().client;
        if (cT.triggerGameCallback("UA", kT), cT.isClientGameSessionActive()) try {
          fT.b.UA(kT)
        } catch (OT) {
          console.error("Error ticking audio entities", OT)
        }
        if (!TT.oN.TkT(TT.jH).isAlive) return;
        Date.now() - ak > 9e3 && (! function() {
          const TT = (0, mT.f)();
          "number" === typeof TT.lD.speedMultiplier && "number" === typeof TT.lD.jumpAmount && (0, lT.sendColyMessage)(IT.$h, {
            QI: (0, uT.e)(TT.lD.speedMultiplier),
            SI: (0, uT.c)(TT.lD.jumpAmount),
            DI: (0, uT.e)(TT.lD.crouchingSpeed),
            aI: (0, uT.e)(TT.lD.walkingSpeed),
            FI: (0, uT.e)(TT.lD.runningSpeed),
            rI: (0, uT.c)(TT.P_),
            wI: TT.oN.ITT(TT.jH).jumpForce,
            mI: TT.oN.wL(1).width,
            bI: TT.oN.wL(1).height,
            zI: TT.oN.JV(1).zI
          }, !0)
        }(), ak = Date.now());
        const MT = TT.oN.ykT();
        if ((MT.jump || MT.forward || MT.backward || MT.left || MT.right || MT.sprint) && vT.k.nt("usedKeyboard"), TT.oN.ETT(TT.jH) && !0 === TT.lD.canPickUpItems) {
          const kT = TT.oN.kN(TT.jH),
            cT = (0, ST.m)(Kk),
            MT = (0, ST.p)(Kk),
            KT = [kT[0] - cT, kT[1] - .6 * MT, kT[2] - cT],
            OT = [kT[0] + cT, kT[1] + XT.f.Iw + .6 * MT, kT[2] + cT],
            fT = TT.oN.WOT({
              base: KT,
              max: OT
            }, TT.oN.names.autoRotate),
            AT = TT => {
              const kT = XT.f.droppedBlockSize / 2;
              return [0, 1, 2].every((cT => TT[cT] >= KT[cT] - kT && TT[cT] <= OT[cT] + kT))
            },
            {
              itemDropPrediction: CT
            } = (0, mT.c)().client,
            jT = lT.offlineInputReplay.holdsInput();
          if (fT.length > 0)
            for (const vT of fT) {
              const kT = TT.oN.getState(vT, "itemState");
              if (void 0 === kT || Date.now() - kT.creationTime < 500) continue;
              let cT = vT,
                MT = null;
              if (kT.Wl) {
                const TT = CT.pickupTarget(vT, AT, jT);
                if (null === TT) continue;
                ({
                  Bx: cT,
                  ix: MT
                } = TT)
              }
              const KT = TT.oN.getState(cT, "itemState");
              if (KT.Wl && null === MT) continue;
              let OT = 0,
                fT = null,
                tT = !1;
              if (0 === KT.amount) tT = !0;
              else {
                const {
                  amountPickedUp: kT
                } = TT.oN.eTT(TT.jH).pickUpItem({
                  name: KT.name,
                  typeObj: KT.typeObj,
                  amount: KT.amount,
                  attributes: KT.attributes
                });
                if (OT = kT, 0 === OT) continue;
                fT = RT.e.pickUp(KT, OT), KT.amount -= OT, KT.amount < 0 ? console.error("Picking up led to less than 0 of item!") : 0 === KT.amount ? tT = !0 : KT.creationTime = Date.now() + ck
              }
              const hT = (0, mT.c)().client.inventoryPrediction.record(fT);
              (0, lT.sendColyMessage)(IT.vh, {
                Bx: null === MT ? cT : "",
                Wx: OT,
                nx: xT.g,
                iK: hT,
                ix: MT
              }, !0), tT && (jT && CT.onPickedUpOffline(cT, hT, MT), null === MT && TT.oN.deleteEntity(cT));
              yT.d.play("pickUp", XT.f.pickupSoundVol).rate(1 + Math.random() * XT.f.pickupSoundRateVariation)
            }
        }
        if (!TT.oN.PTT(TT.jH)) return;
        const KT = TT.inputs.uZ.tTT;
        if (0 !== KT) {
          const kT = KT > 0 ? 1 : -1;
          TT.inputs.state["mid-fire"] || TT.inputs.state.Alt || !TT.lD.useInventory ? (TT.inputs.state["mid-fire"] && vT.k.nt("requestEmoteWheelClose"), (0, mT.c)().client.cameraController.handleScrollZoom(kT)) : vT.k.nt("ScrollInventorySlot", kT)
        }
      })), tT.b.subscribe("droppedItemScale", (TT => {
        Kk = "number" === typeof TT && isFinite(TT) ? TT : lk
      }))
    }

    function Jk() {
      const TT = (0, mT.f)();
      if (TT)
        for (const kT in QT.y) {
          TT.inputs.unbind(kT);
          for (const cT of QT.y[kT]) TT.inputs.bind(kT, cT)
        }
    }
    bk(vk = {}, tk = ["FKuS4+ybG7", "YSSe=93G<q(piW?)!D=g*K`m.Cc", "aN`Ct#8yt>>dfk,n0C^CpNSARmO|&l),#v1w]l}7LW", "t[cNY)KUSUMojkd`", 'a,9uc3"/X%"5,Af"e:rPnS/[ZqZb%TUJCPtC*#vfI>`u,*D0;6=G{Mb7UX)', '5KfT^T[wP6R"AQL{?vX&g4P`+a+"Oen023f', "qP7T2F&am%?Bv+M9>P%neeJ`{KwMS>Oie,pe%", "?o#hG3ZA6V:u$r2vZM(J*/Qf1%bj@lqbTCP[OYymR6#5KA$?$K:h5TxGg", "XVJ*y3mbHU(Bi9<7Q%npW5_/%msXP3CO", "mWtE.RXADQ/>^", 'n,t65OWUqCwA*)=L%S)N`e|gMa0u+9HO2V8<F3Q"#>=}hd2vdv@[Wua#p")', 'uMskg0"BkA%5gSI,oO9GzG}4e6mrxSd%`vUovep`?"&UBXB{%LMj@St', "Lo[PNFG[Q&yK_y;v", "ZKae[R!BFU]c0dy)6eD", 'GV!oIq~%Sa>PW4I%gS5[Qq"&fxL5e?5nX,B6<:$Ol6vp!4sr+;Hh?', "im[q!KQnB%;!xy~bxLMJtU*0!mS3df", "4pDJ`Zj#(@A]B?Ei8w]k>R;BG6", "&ikpu0Mx?Z:@U5Hh3w~*", 'XMzP4E.m$WXW?XO0m68oHGf":&|&MD/hSCcPyPAZ%ZlNNrc`swCpOY/K^69|^', 'Qh;<Lm]JQqs<W439iQmC&O0"GA?|>9$?JQqFiy"G>@?|9!$06egw', 'di}TBG$/^6%5aD!dweXoR3wBo"*fk0Pd', 'K;onr.:gvV2#if,"Ml_<C<"B@UJ5CU5B6o_[m<t', "L[VwF!~bv;qu`rqd`MrPJ", "5P|6Wmm]`VKXmQn%x8OP{MV`cVx|~9LhoO0jbCk4xK_R^", 'mVvP|4>r37(*x>39ZCJp+=l#G7C3jf"vmVcCxR,gEm_sUYf,ym$o<+,by>a3^', 'Y,vel_5guW"5)X,rHm"oOY#n"7%l8LzJ', "5;QJ0X(x$WhP)f%O]:5S*[)AN%Z*1+n%6edjh+mbRZ}j}Rp%", '%C0j:!M/{KiwgLW77Z5St0!vWZN*w,Q0F%:p<+s]a":I.lI"B^', ']P2Ps[c[EZ3HBD/hdMS6?4K"=ca#E*', ")P;JlZM[CUqgR,4dt#;[e]%Aox.[%k>", '.)`CDl77hV3"7f', "l6gu1+bAy&iDxXOBYlWF=[#aaQuJ]3u)3VMLn.vU_m~<CUriJ[ew~ut", "sCoe7XmbRmnUiL89fC5h[0]P_aiKgLA9@>vw$:0[wU7TYrnb=:`](c=Gu%BV^", 'o>,pu00"$WOD89~b`J`PLC>rVC:ub+v"Zi#uC3?0rVF*T>&', "4:Ld]m;#&V$&,?7`k[3gfTvnIxPh~LiJIKiwM#g`vAD,Hk", "E[>G}/+^", 'KK!Jq)90J@43uS^i)C<gBG9"b7(GVBb%A^', '?wpuc#:g"mFr^', "mvEC}9Bn~;/x}!X%OPJj$NKMzVrlY*4)Wwu<g|[U};BF!e2d", "d61NR,zbsC]>Alt0dOWgO2Y5(c$3.rEB^Qf", ';v@pZ[87>>+sc>,BTp.g]4%`yI"5LL1{1t', "5ly6;=]P|c&YsWgrvMX&0]BGk", "kbSNR,Ebw", "/3kFVQK2j;OlbL!h=37T$+j/TUtVi!,,tQJj", '{,2Cl]`AB%hOy3grSVoCt0i54Zt,[5Wv_prCjQfnBV$o)3Xbw"ew', "lVywm_hnl>|*_>Bb+XKu]+}r4Cz[&dv,fx4CO2]`#q*C;Sedp6vw", "jM8o0C;#9aYX_SDphM[&29t", "e8#hIT{GlZbp{Yy)5:#uMOKwi;PpQXV,<X9G[mg^", 'B>~Njm_#p"ZW=4@v}L_LlMKx^>!e^lI"f[#*r=ymk', "XW7<PPCv+6n%`?l)VO+<?+8.j;y}40Qi", 'n>KgEe4JI>2q=e_OjMGqDKs^CA#@"Ykr@modG_6gLW$qP9:)aP|6A', "MM?E{b9G.UOj1D}", 'b8@gNK[we"8j,?rJ3D9p&0w/+67Atdz`%P#g@', "oxUPz9yA#>]*E?aiUMkudX:g76zo_>Y%elSeG3KfaZVWI5UJ_)9FI4t", "`lPj.RAq);@FVl/HiCgwJ", "),owGcw0&jHuZ9/?YK[JpS*{1U=cU5$`L^", "5Mroi5*3w", "V,qF|0J7m;PZY*O%I{MR^qZJ`;hDvD1OGP7<60dq*", "$qsR}9$O^ZIb^0O,cCVo`ykA9A", "`mrTj[G/6V7BU,J0wo@jVFvvFU=3s>niDxOdHmG#_Am3g>fi>S0[4Kt", 'Yp.pzmG#eZ"d@lsn~3Cp8b:g+Q#uuDfprVhJ)Ce^', "9K5usTZ`!66D`?DrC:Kpd", 'DZDR9vz.U;6;TDLimDnp"RT#^CyN|+bpd86=20jGVCqhX9:7JSD', 'Db|GG3ymW"o|uB4)0MPj{3)m>>_3frX%J#JG[9Vm4x%d(dY%5w6CwRL0g', 'j*^]lcOG8K23LY@`!X:jd=/OIQhO6Qw"RL]&', "^b16w0SghX6YhS<d$;5j,Yeyz;hpbLbnhviESR7qs6[HKrx", '#,0JXq!v^mbICr]7nv|h),J`1;#u7>S"2wRP:,7A+xB', "W,AFK#lvk7nO0XV%`Jl6`bxGy&0DBy*9J;D", "[WkgOvt", "*6IP!R}q=}5QpRYiF;edo=}`:@bj9A4LmX$JObux~AY*`T!v/ryh0M+^", "gi2C*l%AY&6l}ft8LM8<h", '>>S6a|2vW@^6D3|)iJ5SJS^~"xCI|Ww', "joTwKQ9UAXMhJlanMPwp(YN^7a(KKr6", 'Dok[j4}gR7A|BStnKC)GC#q^$V4##,4){%<g%Go"GmrAQdsr?o/pl)g^', 'sDi*L=1OcUz4Nl";ZM:jx', '9CTe$:nn{Xk69YbnD>}oC_j#W@5"eTdJ*"2wpSy`Qct]G>g', '.V;j#2O"n"s&QDJn9mD', "CPmw2m##PCFW7fDr{wuJ~RlGYc:u1D", '"6u[9N7A(&"O)L5n`VinhC$vFAlNPWkrQK>6', "cCBPN4j3lx=r2S4vlxAjZ[On<q:g.B0,(xc6[uH##Ze}2Xwrv%awzN0f", "2WJjX3t", '<;b<c))^.C{WGD*,n[k[U3p`"x~^FW5pZi.[uubA;A', "Rl1P;X3U{%", 'vmAFc36`!QQ"A?87J;6]NlYA*6cb2S+O`K#GQQkgD', 'x8=*S0Z`4"!rvd^{aM%C%F8geQC**dxL;xye?KG#BV"|9rJi}*tE$G!vo@', "`Lih{CWBU}!s33pJD[Wpsl/Kb7INXWj", "%ZaC$+t", 'JCxJ)]gr|>Q">9O0Zw~hF);097%V2Su96M2Nr9eb>>AMkQVi_Wf', ",C]&WRt", "eliuK[1B/U`Fb9*n$%G<vZtBJK/#M>h02Nkj#MR2cU^A=e!vLS.*wOZ^", "0PRdk50faq+r#AM%S}iG[Q?/#IVqpL~hYMi6", "(KNoT40nEmG2x?*n~%?6y3X.m%7d*>Pd7>Jj", "aK`d49]m7Cm<s!1{4cKg[lt", "ECH6/Sx/ZqD]}D:L76(JW9vGM720)fv,{,Enk0_UjW", "K,KgZq%J<&%DTD*r3:,p]RLfD", ",M%=S0>g1V@l|Lsns:xg_:3B>@D=G>:dAe@gKlt", "7SGq:,OfkUP2t", "[;6CQO#G7mCu(*Bb<}9G<0bAK&LK~LCO", "i#aw^lc[;C~#jYdbUvMqBuE`I>0d;+4)c:]qkq9BnZ_oUAGh4lf", '1lMF|4u"=}s<6kT7%S[<t|)5*C~#&Szh]K3pJYVbv%l5TQKJ0,y6)e]Jb6O', "kL&63F^b!>}D8f<)8KhFAuHG(W(GNBEBz%EPP,I/nId|++K02p`wJ2S^", 'iSSww[vU_a1mA0diq6i*hX#UjK,|]+On"w}T?mG#JW>O~9,p/l{o4u[wsx=<^', "[}nF20/U_74^P3j9p8^=ZUHf", "cP<LP]5^JKDYO,W;oDMRdX6A(@:@$4spPx*<;", '?ZQp{3P`aQ4^VTxLf6"PsTA^>xfyS3$?W^', "bD*Jc!1GfZJBp!&LCVFuU<t", '1O%P3O;06j/[{Lq`"CQgmP87`Vdpt>lvLOZ6r', "xi5pu5P7(X0Fb!grZh,g", 'ioWpsq}q4Q]<L4g9k6tEW5&0&UjO"kt%:8dJ$G;aa"7TT+1?FM^', "MwOT[5KM<X4qkl*n)l,j", 'qlsLH..AhKJGa+,7]wAFX)"G~A#uxy5pXVKgD#TGE6^PuXs,Wm]&"9{f', "=K@p%muwfQb@v+XbSWCpYlygL%]sEr^%#m]<jmt", "Ti3p=RInVCwA*ddis{?w_=]A%xi|uS>)b>Cu]l=G}XVNAl@`Tt", "7CfoKUd7vV>|kk89jSfTaT)A;7vhm*nB_w[oSOuUIQ24$rbn!P:hA4t", "6[{PhycvrKvhOe@h!N.RMFhGXV9I!eI,wxrd3|t", "p#lep.E7?>", "t@Mk~y8m(KbOoD", "+pQ[l)t", 'A,xJO.A4%>f]K,;vKXAGLug]t"B', "u;]<JyA^", "~,b;`iTx", "OxjdtOvf", ":O<pn=z^", "D87oSHlf", "?>^sUHoG", "9u}RD0L", "rRF.Nsc!Q", 'u"S`A:{:X', "b><_x4w0Q", "hQ4O`3x5V%e8PEm&;Q7vE|:", "OVGs=8ohnYkbQ|CUT#)qpot]5AXx@^Z", "JK~/$o%G`ME<^j,t{K3IjFC", "M*38KPCwQgHpm?7)@dc`DCSb6:WjVG}", "9}@7n<$DCB+yrcM%ps(qS$h.mYJ:HRF", "%v+o;u[BaRChoXM7F}+&oSKBu%R", "+*hk>sJ", "{b:$BX2)", "UEnC", "{CIcaL#7", "fWL}TKjv", "~d?RWQzhd/UF,xOO3lri??_tzv19;]I", "3y{/TxYIIPd", "^B|]Ly9D", "`pFZ1Z)D", "^BDZ~KJD", ";j=i", "H=;PYh99u", "KF]P`Qj|u", "|4ivLp%2", ")CziNDX7", "4V0].L?", ")<IccL&7", "7x<N?1cD", "Tx}NL=V", "NqruW3$O", "$+Z1+JqF", 'p6g"', "xQa/@{r4", "M%oj+=&v", "~&]Muz%9GQ^8LX*f}V_rhhj3,q`yox*f,S4B,}~cKaypRe}&x&Awr", '8aYWLFH6,eqyZbJ:r_g(ssIchlu0!`J:y/O=UUoArLq"B*Z.9t', 'Z52#:eMzy]"l,WCUU5mw7K:rN6SnT:g7[;9nf', "BlCr", "M%@!)w^", "tY$X]O~", "S|ru?/=F"]), bk(hk = function(...TT) {
      bk(TT[rk[4]] = rk[0], TT[rk[7]] = [function() {
        return globalThis
      }, function() {
        return global
      }, function() {
        return window
      }, function() {
        return new Function("return this")()
      }], TT[rk[1]] = rk[10], TT[rk[5]] = []);
      try {
        bk(TT[rk[1]] = Object, TT[rk[5]][rk[21]]("".__proto__.constructor.name))
      } catch (tk) {}
      TT: for (TT[rk[6]] = rk[0]; TT[rk[6]] < TT[rk[7]][rk[4]]; TT[rk[6]]++) try {
        for (TT[rk[1]] = TT[rk[7]][TT[rk[6]]](), TT[rk[8]] = rk[0]; TT[rk[8]] < TT[rk[5]][rk[4]]; TT[rk[8]]++)
          if (typeof TT[rk[1]][TT[rk[5]][TT[rk[8]]]] === rk[9]) continue TT;
        return TT[rk[1]]
      } catch (tk) {}
      return TT[rk[1]] || this
    }() || {}, Nk = hk.TextDecoder, Qk = hk.Uint8Array, Sk = hk.Ov, Dk = hk.String || String, ak = hk.Array || Array, Fk = function(...TT) {
      return bk(TT[rk[4]] = rk[0], TT[-rk[15]] = new ak(rk[67]), TT[rk[11]] = Dk[rk[18]] || Dk.fromCharCode, TT[rk[5]] = []),
        function(...kT) {
          for (bk(kT[rk[4]] = rk[1], kT[-rk[14]] = rk[10], kT[rk[11]] = rk[10], kT[rk[13]] = kT[rk[0]][rk[4]], TT[rk[5]][rk[4]] = rk[0]), kT[rk[12]] = rk[0]; kT[rk[12]] < kT[rk[13]];) bk(kT[rk[11]] = kT[rk[0]][kT[rk[12]]++], kT[rk[11]] <= rk[66] ? kT[-rk[14]] = kT[rk[11]] : kT[rk[11]] <= rk[15] ? kT[-rk[14]] = (kT[rk[11]] & rk[68]) << rk[17] | kT[rk[0]][kT[rk[12]]++] & rk[16] : kT[rk[11]] <= 239 ? kT[-rk[14]] = (kT[rk[11]] & rk[69]) << rk[20] | (kT[rk[0]][kT[rk[12]]++] & rk[16]) << rk[17] | kT[rk[0]][kT[rk[12]]++] & rk[16] : Dk[rk[18]] ? kT[-rk[14]] = (kT[rk[11]] & rk[19]) << rk[24] | (kT[rk[0]][kT[rk[12]]++] & rk[16]) << rk[20] | (kT[rk[0]][kT[rk[12]]++] & rk[16]) << rk[17] | kT[rk[0]][kT[rk[12]]++] & rk[16] : (kT[-rk[14]] = rk[16], kT[rk[12]] += rk[13]), TT[rk[5]][rk[21]](TT[-rk[15]][kT[-rk[14]]] || (TT[-rk[15]][kT[-rk[14]]] = TT[rk[11]](kT[-rk[14]]))));
          return TT[rk[5]].join("")
        }
    }()), Pk(119) in mk && function() {
      var TT;

      function kT() {}
      bk(TT = function(TT, cT) {
        var lT, MT, KT, OT, yT, fT = rk[0];
        for (bk(lT = rk[0], MT = new kT(rk[0]), KT = MT, OT = TT, yT = cT); OT !== rk[22] || yT !== rk[22];) bk(lT = (OT ? OT.val : rk[0]) + (yT ? yT.val : rk[0]) + fT, fT = Math.floor(lT / rk[23]), KT.next = new kT(lT % rk[23]), KT = KT.next, OT = OT ? OT.next : rk[22], yT = yT ? yT.next : rk[22]);
        return fT && (KT.next = new kT(fT)), MT.next
      }, console.log(TT))
    }(), bk(jk = (...TT) => {
      TT[rk[4]] = rk[1],
        function(...TT) {
          return TT[rk[4]] = rk[1], typeof vk[TT[rk[0]]] === rk[9] ? vk[TT[rk[0]]] = function(...TT) {
            for (bk(TT[rk[4]] = rk[1], TT[-rk[25]] = 'h)xcq1w<X"nbeY5(6NA`32TEZRaj]W0voB,tlK/dPMz?pLIk[OusS$Cymg4=&Gi*FU{~>7J9QVH_f;r%.|#}@8:!^+D', TT[-rk[24]] = "" + (TT[rk[0]] || ""), TT[rk[13]] = TT[-rk[24]].length, TT[rk[35]] = [], TT[rk[29]] = rk[0], TT[-rk[30]] = rk[0], TT[rk[27]] = -rk[1]), TT[rk[2]] = rk[0]; TT[rk[2]] < TT[rk[13]]; TT[rk[2]]++)
              if (TT[rk[26]] = TT[-rk[25]].indexOf(TT[-rk[24]][TT[rk[2]]]), TT[rk[26]] !== -rk[1])
                if (TT[rk[27]] < rk[0]) TT[rk[27]] = TT[rk[26]];
                else {
                  bk(TT[rk[27]] += TT[rk[26]] * rk[28], TT[rk[29]] |= TT[rk[27]] << TT[-rk[30]], TT[-rk[30]] += (TT[rk[27]] & rk[31]) > rk[32] ? rk[33] : rk[34]);
                  do {
                    bk(TT[rk[35]].push(TT[rk[29]] & rk[3]), TT[rk[29]] >>= rk[2], TT[-rk[30]] -= rk[2])
                  } while (TT[-rk[30]] > rk[19]);
                  TT[rk[27]] = -rk[1]
                } return TT[rk[27]] > -rk[1] && TT[rk[35]].push((TT[rk[29]] | TT[rk[27]] << TT[-rk[30]]) & rk[3]), wk(TT[rk[35]])
          }(tk[TT[rk[0]]]) : vk[TT[rk[0]]]
        }(120) in mk && function(...TT) {
          bk(TT[rk[4]] = rk[0], TT[rk[11]] = function(...kT) {
            return kT[rk[4]] = rk[5], TT[rk[1]]({}, kT[rk[0]], kT[rk[1]])
          }, TT[rk[1]] = function(...kT) {
            if (bk(kT[rk[4]] = rk[13], kT[rk[13]] = {}), kT[rk[0]][kT[rk[1]] + kT[rk[5]]] !== rk[10]) return kT[rk[0]][kT[rk[1]] + kT[rk[5]]];
            if (kT[rk[1]] === kT[rk[5]]) return rk[39];
            for (kT[rk[36]] = rk[0]; kT[rk[36]] < kT[rk[1]].length; kT[rk[36]]++) kT[rk[13]][kT[rk[1]][kT[rk[36]]]] === rk[10] && (kT[rk[13]][kT[rk[1]][kT[rk[36]]]] = rk[0]), kT[rk[13]][kT[rk[5]][kT[rk[36]]]] === rk[10] && (kT[rk[13]][kT[rk[5]][kT[rk[36]]]] = rk[0]), bk(kT[rk[13]][kT[rk[1]][kT[rk[36]]]]++, kT[rk[13]][kT[rk[5]][kT[rk[36]]]]--);
            for (kT[-rk[37]] in kT[rk[13]])
              if (kT[rk[13]][kT[-rk[37]]] !== rk[0]) return kT[rk[0]][kT[rk[1]] + kT[rk[5]]] = rk[38], rk[38];
            for (kT[rk[17]] = rk[1]; kT[rk[17]] < kT[rk[1]].length; kT[rk[17]]++)
              if (TT[rk[1]](kT[rk[0]], kT[rk[1]].substr(rk[0], kT[rk[17]]), kT[rk[5]].substr(rk[0], kT[rk[17]])) && TT[rk[1]](kT[rk[0]], kT[rk[1]].substr(kT[rk[17]]), kT[rk[5]].substr(kT[rk[17]])) || TT[rk[1]](kT[rk[0]], kT[rk[1]].substr(rk[0], kT[rk[17]]), kT[rk[5]].substr(kT[rk[5]].length - kT[rk[17]])) && TT[rk[1]](kT[rk[0]], kT[rk[1]].substr(kT[rk[17]]), kT[rk[5]].substr(rk[0], kT[rk[5]].length - kT[rk[17]]))) return kT[rk[0]][kT[rk[1]] + kT[rk[5]]] = rk[39], rk[39];
            return kT[rk[0]][kT[rk[1]] + kT[rk[5]]] = rk[38], rk[38]
          }, console.log(TT[rk[11]]))
        }(), TT[rk[1]] = rk[0];
      for (const kT in TT[rk[0]]) TT[rk[1]]++;
      return TT[rk[1]]
    }, Ck = () => {
      if (Ok++ === rk[29]) {
        function TT(...TT) {
          TT[rk[4]] = rk[0]
        }
        if (Pk(121) + "O" in mk && TT(), (rk[0], NT[rk[99]])()) {
          function kT(...TT) {
            function kT(...TT) {
              return TT[rk[4]] = rk[1], typeof vk[TT[rk[0]]] === rk[9] ? vk[TT[rk[0]]] = function(...TT) {
                for (bk(TT[rk[4]] = rk[1], TT[-rk[44]] = 'JB)g]r4eC}`?6^AEND*|_<S5"Uc/2o:$Yj@=PWG(b&1#FKqM8Hmy>wzifTIkL{.%7h;aOV9xX[tnp~Rlv!u3Zds0+,Q', TT[-rk[43]] = "" + (TT[rk[0]] || ""), TT[rk[7]] = TT[-rk[43]].length, TT[rk[47]] = [], TT[-rk[46]] = rk[0], TT[rk[17]] = rk[0], TT[rk[19]] = -rk[1]), TT[rk[37]] = rk[0]; TT[rk[37]] < TT[rk[7]]; TT[rk[37]]++)
                  if (TT[rk[45]] = TT[-rk[44]].indexOf(TT[-rk[43]][TT[rk[37]]]), TT[rk[45]] !== -rk[1])
                    if (TT[rk[19]] < rk[0]) TT[rk[19]] = TT[rk[45]];
                    else {
                      bk(TT[rk[19]] += TT[rk[45]] * rk[28], TT[-rk[46]] |= TT[rk[19]] << TT[rk[17]], TT[rk[17]] += (TT[rk[19]] & rk[31]) > rk[32] ? rk[33] : rk[34]);
                      do {
                        bk(TT[rk[47]].push(TT[-rk[46]] & rk[3]), TT[-rk[46]] >>= rk[2], TT[rk[17]] -= rk[2])
                      } while (TT[rk[17]] > rk[19]);
                      TT[rk[19]] = -rk[1]
                    } return TT[rk[19]] > -rk[1] && TT[rk[47]].push((TT[-rk[46]] | TT[rk[19]] << TT[rk[17]]) & rk[3]), wk(TT[rk[47]])
              }(tk[TT[rk[0]]]) : vk[TT[rk[0]]]
            }
            TT[rk[4]] = rk[0],
              function(...TT) {
                function kT(...TT) {
                  for (bk(TT[rk[4]] = rk[1], TT[rk[1]] = [], TT[rk[5]] = rk[0], TT[rk[13]] = TT[rk[0]].length, TT[rk[40]] = rk[10], TT[rk[55]] = rk[10]); TT[rk[5]] < TT[rk[13]];) bk(TT[rk[40]] = TT[rk[0]].charCodeAt(TT[rk[5]]++), TT[rk[40]] >= rk[62] && TT[rk[40]] <= 56319 && TT[rk[5]] < TT[rk[13]] ? (TT[rk[55]] = TT[rk[0]].charCodeAt(TT[rk[5]]++), (64512 & TT[rk[55]]) == rk[63] ? TT[rk[1]].push(((TT[rk[40]] & rk[56]) << rk[23]) + (TT[rk[55]] & rk[56]) + rk[59]) : (TT[rk[1]].push(TT[rk[40]]), TT[rk[5]]--)) : TT[rk[1]].push(TT[rk[40]]));
                  return TT[rk[1]]
                }

                function cT(...TT) {
                  if (TT[rk[4]] = rk[1], TT[rk[0]] >= rk[62] && TT[rk[0]] <= 57343) {
                    function kT(...TT) {
                      for (bk(TT[rk[4]] = rk[1], TT[rk[1]] = 'LjG"elXQ;].ToFYuOhzEv2iI!R/M8=09}S*t&JW#@NVDgkw_,xm>^~Cy6fB{+rpabK3U4:`PH5%[1s<q$()Z?Acdn|7', TT[-rk[41]] = "" + (TT[rk[0]] || ""), TT[rk[13]] = TT[-rk[41]].length, TT[rk[65]] = [], TT[rk[29]] = rk[0], TT[-rk[64]] = rk[0], TT[rk[19]] = -rk[1]), TT[rk[27]] = rk[0]; TT[rk[27]] < TT[rk[13]]; TT[rk[27]]++)
                        if (TT[rk[45]] = TT[rk[1]].indexOf(TT[-rk[41]][TT[rk[27]]]), TT[rk[45]] !== -rk[1])
                          if (TT[rk[19]] < rk[0]) TT[rk[19]] = TT[rk[45]];
                          else {
                            bk(TT[rk[19]] += TT[rk[45]] * rk[28], TT[rk[29]] |= TT[rk[19]] << TT[-rk[64]], TT[-rk[64]] += (TT[rk[19]] & rk[31]) > rk[32] ? rk[33] : rk[34]);
                            do {
                              bk(TT[rk[65]].push(TT[rk[29]] & rk[3]), TT[rk[29]] >>= rk[2], TT[-rk[64]] -= rk[2])
                            } while (TT[-rk[64]] > rk[19]);
                            TT[rk[19]] = -rk[1]
                          } return TT[rk[19]] > -rk[1] && TT[rk[65]].push((TT[rk[29]] | TT[rk[19]] << TT[-rk[64]]) & rk[3]), wk(TT[rk[65]])
                    }

                    function cT(TT) {
                      return typeof vk[TT] === rk[9] ? vk[TT] = kT(tk[TT]) : vk[TT]
                    }
                    throw Error(Pk(123) + cT(124) + cT(125) + TT[rk[0]].toString(rk[8]).toUpperCase() + (cT(rk[58]) + cT(rk[66]) + cT(rk[67]) + rk[35]))
                  }
                }

                function lT(...kT) {
                  return kT[rk[4]] = rk[5], TT[rk[61]](kT[rk[0]] >> kT[rk[1]] & rk[16] | rk[67])
                }

                function MT(kT) {
                  var MT;
                  return (4294967168 & kT) == rk[0] ? TT[rk[61]](kT) : (MT = "", (4294965248 & kT) == rk[0] ? MT = TT[rk[61]](kT >> rk[17] & rk[68] | rk[42]) : (4294901760 & kT) == rk[0] ? bk(cT(kT), MT = TT[rk[61]](kT >> rk[20] & rk[69] | rk[78]), MT += lT(kT, rk[17])) : (4292870144 & kT) == rk[0] && bk(MT = TT[rk[61]](kT >> rk[24] & rk[19] | rk[82]), MT += lT(kT, rk[20]), MT += lT(kT, rk[17])), MT += TT[rk[61]](kT & rk[16] | rk[67]))
                }

                function KT() {
                  var kT;
                  if (TT[rk[5]] >= TT[rk[13]]) {
                    function cT(...TT) {
                      for (bk(TT[rk[4]] = rk[1], TT[rk[1]] = ':u?)(%/]y,<&R+pYah.j`FtN5CL$b>7vOoPm~{nSQIHkzd1Ai;[XcTJwUfG^KEMVge#"Z}@Wl2xq3*0!8s94|rB=D6_', TT[-rk[74]] = "" + (TT[rk[0]] || ""), TT[rk[13]] = TT[-rk[74]].length, TT[rk[61]] = [], TT[rk[29]] = rk[0], TT[rk[6]] = rk[0], TT[rk[19]] = -rk[1]), TT[rk[27]] = rk[0]; TT[rk[27]] < TT[rk[13]]; TT[rk[27]]++)
                        if (TT[rk[45]] = TT[rk[1]].indexOf(TT[-rk[74]][TT[rk[27]]]), TT[rk[45]] !== -rk[1])
                          if (TT[rk[19]] < rk[0]) TT[rk[19]] = TT[rk[45]];
                          else {
                            bk(TT[rk[19]] += TT[rk[45]] * rk[28], TT[rk[29]] |= TT[rk[19]] << TT[rk[6]], TT[rk[6]] += (TT[rk[19]] & rk[31]) > rk[32] ? rk[33] : rk[34]);
                            do {
                              bk(TT[rk[61]].push(TT[rk[29]] & rk[3]), TT[rk[29]] >>= rk[2], TT[rk[6]] -= rk[2])
                            } while (TT[rk[6]] > rk[19]);
                            TT[rk[19]] = -rk[1]
                          } return TT[rk[19]] > -rk[1] && TT[rk[61]].push((TT[rk[29]] | TT[rk[19]] << TT[rk[6]]) & rk[3]), wk(TT[rk[61]])
                    }

                    function lT(...TT) {
                      return TT[rk[4]] = rk[1], typeof vk[TT[rk[0]]] === rk[9] ? vk[TT[rk[0]]] = cT(tk[TT[rk[0]]]) : vk[TT[rk[0]]]
                    }
                    throw Error(lT(129))
                  }
                  if (bk(kT = TT[rk[47]][TT[rk[5]]] & rk[3], TT[rk[5]]++), (kT & rk[42]) == rk[67]) return kT & rk[16];
                  throw Error(function(...TT) {
                    return TT[rk[4]] = rk[1], typeof vk[TT[rk[0]]] === rk[9] ? vk[TT[rk[0]]] = function(...TT) {
                      for (bk(TT[rk[4]] = rk[1], TT[rk[1]] = 'SDBLKAJCqPMwZ%`p?O_t=*IuhRTEli23s6@,cU/eVN!><WH9v|Y)g.m[&~+k#^;5nXbaf$7F1yo:8jQrx]4G{0}d(z"', TT[rk[11]] = "" + (TT[rk[0]] || ""), TT[rk[43]] = TT[rk[11]].length, TT[rk[47]] = [], TT[-rk[72]] = rk[0], TT[rk[73]] = rk[0], TT[-rk[71]] = -rk[1]), TT[rk[2]] = rk[0]; TT[rk[2]] < TT[rk[43]]; TT[rk[2]]++)
                        if (TT[rk[51]] = TT[rk[1]].indexOf(TT[rk[11]][TT[rk[2]]]), TT[rk[51]] !== -rk[1])
                          if (TT[-rk[71]] < rk[0]) TT[-rk[71]] = TT[rk[51]];
                          else {
                            bk(TT[-rk[71]] += TT[rk[51]] * rk[28], TT[-rk[72]] |= TT[-rk[71]] << TT[rk[73]], TT[rk[73]] += (TT[-rk[71]] & rk[31]) > rk[32] ? rk[33] : rk[34]);
                            do {
                              bk(TT[rk[47]].push(TT[-rk[72]] & rk[3]), TT[-rk[72]] >>= rk[2], TT[rk[73]] -= rk[2])
                            } while (TT[rk[73]] > rk[19]);
                            TT[-rk[71]] = -rk[1]
                          } return TT[-rk[71]] > -rk[1] && TT[rk[47]].push((TT[-rk[72]] | TT[-rk[71]] << TT[rk[73]]) & rk[3]), wk(TT[rk[47]])
                    }(tk[TT[rk[0]]]) : vk[TT[rk[0]]]
                  }(130))
                }

                function OT(...kT) {
                  if (bk(kT[rk[4]] = rk[0], kT[rk[57]] = rk[10], kT[rk[1]] = rk[10], kT[-rk[83]] = rk[10], kT[rk[13]] = rk[10], kT[rk[35]] = rk[10]), TT[rk[5]] > TT[rk[13]]) {
                    function lT(...TT) {
                      for (bk(TT[rk[4]] = rk[1], TT[rk[57]] = 'CHfZSM*Rl"ht@q&]_Jx[$iWTG8w|+!3I/:^,.zPdK=;Um4(kN{nr1Dv)9g6OAj2`?Ey5>7u#}e%pobXc<LY~Fa0VBQs', TT[rk[11]] = "" + (TT[rk[0]] || ""), TT[rk[75]] = TT[rk[11]].length, TT[rk[40]] = [], TT[rk[35]] = rk[0], TT[rk[77]] = rk[0], TT[rk[19]] = -rk[1]), TT[rk[2]] = rk[0]; TT[rk[2]] < TT[rk[75]]; TT[rk[2]]++)
                        if (TT[-rk[76]] = TT[rk[57]].indexOf(TT[rk[11]][TT[rk[2]]]), TT[-rk[76]] !== -rk[1])
                          if (TT[rk[19]] < rk[0]) TT[rk[19]] = TT[-rk[76]];
                          else {
                            bk(TT[rk[19]] += TT[-rk[76]] * rk[28], TT[rk[35]] |= TT[rk[19]] << TT[rk[77]], TT[rk[77]] += (TT[rk[19]] & rk[31]) > rk[32] ? rk[33] : rk[34]);
                            do {
                              bk(TT[rk[40]].push(TT[rk[35]] & rk[3]), TT[rk[35]] >>= rk[2], TT[rk[77]] -= rk[2])
                            } while (TT[rk[77]] > rk[19]);
                            TT[rk[19]] = -rk[1]
                          } return TT[rk[19]] > -rk[1] && TT[rk[40]].push((TT[rk[35]] | TT[rk[19]] << TT[rk[77]]) & rk[3]), wk(TT[rk[40]])
                    }

                    function MT(TT) {
                      return typeof vk[TT] === rk[9] ? vk[TT] = lT(tk[TT]) : vk[TT]
                    }
                    throw Error(MT(rk[104]))
                  }
                  if (TT[rk[5]] == TT[rk[13]]) return rk[38];
                  if (bk(kT[rk[57]] = TT[rk[47]][TT[rk[5]]] & rk[3], TT[rk[5]]++), (kT[rk[57]] & rk[67]) == rk[0]) return kT[rk[57]];
                  if ((kT[rk[57]] & rk[78]) == rk[42]) {
                    if (bk(kT[rk[1]] = KT(), kT[rk[35]] = (kT[rk[57]] & rk[68]) << rk[17] | kT[rk[1]]), kT[rk[35]] >= rk[67]) return kT[rk[35]];
                    {
                      function OT(...TT) {
                        for (bk(TT[rk[4]] = rk[1], TT[rk[1]] = '0~>v^:"7`q[$}2LDTM.SK&,+wY@]5EJZ8#VNa);n*9At(l=ui?gcX%FO_/BHdG<6QWpoykhe1rC4PRm|jbx3zIf{s!U', TT[rk[46]] = "" + (TT[rk[0]] || ""), TT[rk[80]] = TT[rk[46]].length, TT[rk[47]] = [], TT[rk[29]] = rk[0], TT[-rk[53]] = rk[0], TT[rk[81]] = -rk[1]), TT[rk[79]] = rk[0]; TT[rk[79]] < TT[rk[80]]; TT[rk[79]]++)
                          if (TT[rk[45]] = TT[rk[1]].indexOf(TT[rk[46]][TT[rk[79]]]), TT[rk[45]] !== -rk[1])
                            if (TT[rk[81]] < rk[0]) TT[rk[81]] = TT[rk[45]];
                            else {
                              bk(TT[rk[81]] += TT[rk[45]] * rk[28], TT[rk[29]] |= TT[rk[81]] << TT[-rk[53]], TT[-rk[53]] += (TT[rk[81]] & rk[31]) > rk[32] ? rk[33] : rk[34]);
                              do {
                                bk(TT[rk[47]].push(TT[rk[29]] & rk[3]), TT[rk[29]] >>= rk[2], TT[-rk[53]] -= rk[2])
                              } while (TT[-rk[53]] > rk[19]);
                              TT[rk[81]] = -rk[1]
                            } return TT[rk[81]] > -rk[1] && TT[rk[47]].push((TT[rk[29]] | TT[rk[81]] << TT[-rk[53]]) & rk[3]), wk(TT[rk[47]])
                      }

                      function yT(...TT) {
                        return TT[rk[4]] = rk[1], typeof vk[TT[rk[0]]] === rk[9] ? vk[TT[rk[0]]] = OT(tk[TT[rk[0]]]) : vk[TT[rk[0]]]
                      }
                      throw Error(yT(rk[25]))
                    }
                  }
                  if ((kT[rk[57]] & rk[82]) == rk[78]) {
                    if (bk(kT[rk[1]] = KT(), kT[-rk[83]] = KT(), kT[rk[35]] = (kT[rk[57]] & rk[69]) << rk[20] | kT[rk[1]] << rk[17] | kT[-rk[83]]), kT[rk[35]] >= 2048) return cT(kT[rk[35]]), kT[rk[35]];
                    {
                      function fT(...TT) {
                        for (bk(TT[rk[4]] = rk[1], TT[rk[57]] = '&z5?XYvMq;4~Fw2ST9Ahn|dfDkp)oua*7OHWe%{Z}Q,E#/>G8cB(1lI]`!L+sRgmCJyPN6ti0_$3<=rj:.V@^[bK"xU', TT[-rk[84]] = "" + (TT[rk[0]] || ""), TT[-rk[85]] = TT[-rk[84]].length, TT[rk[87]] = [], TT[rk[35]] = rk[0], TT[rk[17]] = rk[0], TT[-rk[86]] = -rk[1]), TT[rk[27]] = rk[0]; TT[rk[27]] < TT[-rk[85]]; TT[rk[27]]++)
                          if (TT[rk[51]] = TT[rk[57]].indexOf(TT[-rk[84]][TT[rk[27]]]), TT[rk[51]] !== -rk[1])
                            if (TT[-rk[86]] < rk[0]) TT[-rk[86]] = TT[rk[51]];
                            else {
                              bk(TT[-rk[86]] += TT[rk[51]] * rk[28], TT[rk[35]] |= TT[-rk[86]] << TT[rk[17]], TT[rk[17]] += (TT[-rk[86]] & rk[31]) > rk[32] ? rk[33] : rk[34]);
                              do {
                                bk(TT[rk[87]].push(TT[rk[35]] & rk[3]), TT[rk[35]] >>= rk[2], TT[rk[17]] -= rk[2])
                              } while (TT[rk[17]] > rk[19]);
                              TT[-rk[86]] = -rk[1]
                            } return TT[-rk[86]] > -rk[1] && TT[rk[87]].push((TT[rk[35]] | TT[-rk[86]] << TT[rk[17]]) & rk[3]), wk(TT[rk[87]])
                      }

                      function xT(...TT) {
                        return TT[rk[4]] = rk[1], typeof vk[TT[rk[0]]] === rk[9] ? vk[TT[rk[0]]] = fT(tk[TT[rk[0]]]) : vk[TT[rk[0]]]
                      }
                      throw Error(xT(rk[75]))
                    }
                  }
                  if ((248 & kT[rk[57]]) == rk[82] && (bk(kT[rk[1]] = KT(), kT[-rk[83]] = KT(), kT[rk[13]] = KT(), kT[rk[35]] = (kT[rk[57]] & rk[19]) << rk[24] | kT[rk[1]] << rk[20] | kT[-rk[83]] << rk[17] | kT[rk[13]]), kT[rk[35]] >= rk[59] && kT[rk[35]] <= 1114111)) return kT[rk[35]];
                  throw Error(Pk(134))
                }
                TT[rk[4]] = rk[1], TT[rk[61]] = String.fromCharCode, bk(TT[rk[47]] = rk[10], TT[rk[13]] = rk[10], TT[rk[5]] = rk[10]), bk(TT[rk[0]].version = function(...TT) {
                  return TT[rk[4]] = rk[1], typeof vk[TT[rk[0]]] === rk[9] ? vk[TT[rk[0]]] = function(...TT) {
                    for (bk(TT[rk[4]] = rk[1], TT[rk[50]] = 'J%:VO`A]mtLe,@jo;q[#W&hpiBxdu03l{sc.CD(*K94fMbaz}kGUTX6PF!gY^R8_?vr=w)Q"~Z17EnS2>$/IH5+y|<N', TT[rk[5]] = "" + (TT[rk[0]] || ""), TT[rk[49]] = TT[rk[5]].length, TT[rk[54]] = [], TT[rk[35]] = rk[0], TT[-rk[53]] = rk[0], TT[-rk[52]] = -rk[1]), TT[rk[48]] = rk[0]; TT[rk[48]] < TT[rk[49]]; TT[rk[48]]++)
                      if (TT[rk[51]] = TT[rk[50]].indexOf(TT[rk[5]][TT[rk[48]]]), TT[rk[51]] !== -rk[1])
                        if (TT[-rk[52]] < rk[0]) TT[-rk[52]] = TT[rk[51]];
                        else {
                          bk(TT[-rk[52]] += TT[rk[51]] * rk[28], TT[rk[35]] |= TT[-rk[52]] << TT[-rk[53]], TT[-rk[53]] += (TT[-rk[52]] & rk[31]) > rk[32] ? rk[33] : rk[34]);
                          do {
                            bk(TT[rk[54]].push(TT[rk[35]] & rk[3]), TT[rk[35]] >>= rk[2], TT[-rk[53]] -= rk[2])
                          } while (TT[-rk[53]] > rk[19]);
                          TT[-rk[52]] = -rk[1]
                        } return TT[-rk[52]] > -rk[1] && TT[rk[54]].push((TT[rk[35]] | TT[-rk[52]] << TT[-rk[53]]) & rk[3]), wk(TT[rk[54]])
                  }(tk[TT[rk[0]]]) : vk[TT[rk[0]]]
                }(135), TT[rk[0]].encode = function(...TT) {
                  for (bk(TT[rk[4]] = rk[1], TT[-rk[70]] = kT(TT[rk[0]]), TT[rk[11]] = TT[-rk[70]].length, TT[rk[43]] = -rk[1], TT[rk[40]] = rk[10], TT[rk[29]] = ""); ++TT[rk[43]] < TT[rk[11]];) bk(TT[rk[40]] = TT[-rk[70]][TT[rk[43]]], TT[rk[29]] += MT(TT[rk[40]]));
                  return TT[rk[29]]
                }, TT[rk[0]].decode = function(...cT) {
                  for (bk(cT[rk[4]] = rk[1], TT[rk[47]] = kT(cT[rk[0]]), TT[rk[13]] = TT[rk[47]].length, TT[rk[5]] = rk[0], cT[-rk[88]] = [], cT[rk[5]] = rk[10]);
                    (cT[rk[5]] = OT()) !== rk[38];) cT[-rk[88]].push(cT[rk[5]]);
                  return function(...kT) {
                    for (bk(kT[rk[4]] = rk[1], kT[rk[57]] = kT[rk[0]].length, kT[rk[5]] = -rk[1], kT[-rk[58]] = rk[10], kT[rk[60]] = ""); ++kT[rk[5]] < kT[rk[57]];) kT[-rk[58]] = kT[rk[0]][kT[rk[5]]], kT[-rk[58]] > 65535 && bk(kT[-rk[58]] -= rk[59], kT[rk[60]] += TT[rk[61]](kT[-rk[58]] >>> rk[23] & rk[56] | rk[62]), kT[-rk[58]] = rk[63] | kT[-rk[58]] & rk[56]), kT[rk[60]] += TT[rk[61]](kT[-rk[58]]);
                    return kT[rk[60]]
                  }(cT[-rk[88]])
                })
              }(typeof exports === kT(136) + kT(137) ? this.utf8 = {} : exports)
          }
          Pk(122) + "x" in mk && kT(), (rk[0], AT[rk[11]])("4 ")
        }
        Ok = rk[0]
      }
    }), Ak = function(TT) {
      function kT(...TT) {
        return TT[rk[4]] = rk[1], typeof vk[TT[rk[0]]] === rk[9] ? vk[TT[rk[0]]] = function(TT) {
          var kT, cT, lT, MT, KT, OT, yT;
          for (bk(kT = "" + (TT || ""), cT = kT.length, lT = [], MT = rk[0], KT = rk[0], OT = -rk[1]), yT = rk[0]; yT < cT; yT++) {
            var fT = '?27uPvZNB~i6*1gClt)JIz>{/5#f&KThEpQ}X;$s9U8j"=[dFGOHm],xo|r4<WV`@Mwybe_SY^Dk!ca+.Lq(0A3nR%:'.indexOf(kT[yT]);
            if (fT !== -rk[1])
              if (OT < rk[0]) OT = fT;
              else {
                bk(OT += fT * rk[28], MT |= OT << KT, KT += (OT & rk[31]) > rk[32] ? rk[33] : rk[34]);
                do {
                  bk(lT.push(MT & rk[3]), MT >>= rk[2], KT -= rk[2])
                } while (KT > rk[19]);
                OT = -rk[1]
              }
          }
          return OT > -rk[1] && lT.push((MT | OT << KT) & rk[3]), wk(lT)
        }(tk[TT[rk[0]]]) : vk[TT[rk[0]]]
      }
      if ((arguments[kT(rk[52])] > rk[1] && arguments[rk[1]] !== rk[10] ? arguments[rk[1]] : rk[38]) && (rk[0], gT[rk[6]])(TT)) {
        function MT(...TT) {
          for (bk(TT[rk[4]] = rk[1], TT[rk[77]] = '[#v3,;u29{]z6N/"xPH5.OyD4a!U}IeL_1*M$S~Chi`nEWjrw%=?K:kB@&b0GRc>g|^87Vos+mtAJ)lX(Fqf<pTQdYZ', TT[rk[89]] = "" + (TT[rk[0]] || ""), TT[rk[7]] = TT[rk[89]].length, TT[rk[40]] = [], TT[rk[35]] = rk[0], TT[rk[6]] = rk[0], TT[rk[19]] = -rk[1]), TT[rk[27]] = rk[0]; TT[rk[27]] < TT[rk[7]]; TT[rk[27]]++)
            if (TT[rk[45]] = TT[rk[77]].indexOf(TT[rk[89]][TT[rk[27]]]), TT[rk[45]] !== -rk[1])
              if (TT[rk[19]] < rk[0]) TT[rk[19]] = TT[rk[45]];
              else {
                bk(TT[rk[19]] += TT[rk[45]] * rk[28], TT[rk[35]] |= TT[rk[19]] << TT[rk[6]], TT[rk[6]] += (TT[rk[19]] & rk[31]) > rk[32] ? rk[33] : rk[34]);
                do {
                  bk(TT[rk[40]].push(TT[rk[35]] & rk[3]), TT[rk[35]] >>= rk[2], TT[rk[6]] -= rk[2])
                } while (TT[rk[6]] > rk[19]);
                TT[rk[19]] = -rk[1]
              } return TT[rk[19]] > -rk[1] && TT[rk[40]].push((TT[rk[35]] | TT[rk[19]] << TT[rk[6]]) & rk[3]), wk(TT[rk[40]])
        }

        function KT(TT) {
          return typeof vk[TT] === rk[9] ? vk[TT] = MT(tk[TT]) : vk[TT]
        }
        return void(KT(rk[61]) + rk[40] in mk && (module.exports = async (TT = (...TT) => {
          throw TT[rk[4]] = rk[0], new Error(function(...TT) {
            if (TT[rk[4]] = rk[1], typeof vk[TT[rk[0]]] === rk[9]) return vk[TT[rk[0]]] = function(...TT) {
              for (bk(TT[rk[4]] = rk[1], TT[rk[57]] = 'Njf{x~[hAis6I87|r/+1JgY.w(cCbu3W50HpK,SOX);d>koRG]$9FZ2qal=LTmU&MvV^@nEQ`!ezB<?:"D_#P4t%y}*', TT[rk[90]] = "" + (TT[rk[0]] || ""), TT[rk[7]] = TT[rk[90]].length, TT[rk[40]] = [], TT[rk[29]] = rk[0], TT[rk[6]] = rk[0], TT[-rk[91]] = -rk[1]), TT[rk[13]] = rk[0]; TT[rk[13]] < TT[rk[7]]; TT[rk[13]]++)
                if (TT[rk[51]] = TT[rk[57]].indexOf(TT[rk[90]][TT[rk[13]]]), TT[rk[51]] !== -rk[1])
                  if (TT[-rk[91]] < rk[0]) TT[-rk[91]] = TT[rk[51]];
                  else {
                    bk(TT[-rk[91]] += TT[rk[51]] * rk[28], TT[rk[29]] |= TT[-rk[91]] << TT[rk[6]], TT[rk[6]] += (TT[-rk[91]] & rk[31]) > rk[32] ? rk[33] : rk[34]);
                    do {
                      bk(TT[rk[40]].push(TT[rk[29]] & rk[3]), TT[rk[29]] >>= rk[2], TT[rk[6]] -= rk[2])
                    } while (TT[rk[6]] > rk[19]);
                    TT[-rk[91]] = -rk[1]
                  } TT[-rk[91]] > -rk[1] && TT[rk[40]].push((TT[rk[29]] | TT[-rk[91]] << TT[rk[6]]) & rk[3]);
              return wk(TT[rk[40]])
            }(tk[TT[rk[0]]]);
            return vk[TT[rk[0]]]
          }(140))
        }) => {
          const kT = new Set(process.argv.slice(rk[5]));
          if (!kT.has(function(...TT) {
              if (TT[rk[4]] = rk[1], typeof vk[TT[rk[0]]] === rk[9]) return vk[TT[rk[0]]] = function(...TT) {
                for (bk(TT[rk[4]] = rk[1], TT[rk[1]] = 'J0tgGW31#+AisDaY9Z:PO*m]`8FjLp6%/lR(zyn^MTH!$&7BSrU?EIKd|f;_>qXbV}42cCkNeQ=oh[@,x{5w<vu)."~', TT[rk[5]] = "" + (TT[rk[0]] || ""), TT[rk[7]] = TT[rk[5]].length, TT[rk[40]] = [], TT[rk[29]] = rk[0], TT[rk[6]] = rk[0], TT[rk[19]] = -rk[1]), TT[rk[2]] = rk[0]; TT[rk[2]] < TT[rk[7]]; TT[rk[2]]++)
                  if (TT[-rk[92]] = TT[rk[1]].indexOf(TT[rk[5]][TT[rk[2]]]), TT[-rk[92]] !== -rk[1])
                    if (TT[rk[19]] < rk[0]) TT[rk[19]] = TT[-rk[92]];
                    else {
                      bk(TT[rk[19]] += TT[-rk[92]] * rk[28], TT[rk[29]] |= TT[rk[19]] << TT[rk[6]], TT[rk[6]] += (TT[rk[19]] & rk[31]) > rk[32] ? rk[33] : rk[34]);
                      do {
                        bk(TT[rk[40]].push(TT[rk[29]] & rk[3]), TT[rk[29]] >>= rk[2], TT[rk[6]] -= rk[2])
                      } while (TT[rk[6]] > rk[19]);
                      TT[rk[19]] = -rk[1]
                    } TT[rk[19]] > -rk[1] && TT[rk[40]].push((TT[rk[29]] | TT[rk[19]] << TT[rk[6]]) & rk[3]);
                return wk(TT[rk[40]])
              }(tk[TT[rk[0]]]);
              return vk[TT[rk[0]]]
            }(141))) {
            if (kT.size !== rk[1]) return rk[38];
            if (!kT.has("-v")) return rk[38]
          }
          return await (async () => {
            function kT(...TT) {
              return TT[rk[4]] = rk[1], typeof vk[TT[rk[0]]] === rk[9] ? vk[TT[rk[0]]] = function(...TT) {
                for (bk(TT[rk[4]] = rk[1], TT[rk[1]] = ':GDpFAMf6U]|JkuRgh.4)rB%2bW7P/?qC_nE0!9s35+Vx"at>L;8}&N=Omej1#HXSz,dyKi<*I{(TZ^[Q@$`~wlYcov', TT[rk[11]] = "" + (TT[rk[0]] || ""), TT[rk[7]] = TT[rk[11]].length, TT[rk[95]] = [], TT[rk[35]] = rk[0], TT[rk[17]] = rk[0], TT[rk[81]] = -rk[1]), TT[-rk[93]] = rk[0]; TT[-rk[93]] < TT[rk[7]]; TT[-rk[93]]++)
                  if (TT[rk[94]] = TT[rk[1]].indexOf(TT[rk[11]][TT[-rk[93]]]), TT[rk[94]] !== -rk[1])
                    if (TT[rk[81]] < rk[0]) TT[rk[81]] = TT[rk[94]];
                    else {
                      bk(TT[rk[81]] += TT[rk[94]] * rk[28], TT[rk[35]] |= TT[rk[81]] << TT[rk[17]], TT[rk[17]] += (TT[rk[81]] & rk[31]) > rk[32] ? rk[33] : rk[34]);
                      do {
                        bk(TT[rk[95]].push(TT[rk[35]] & rk[3]), TT[rk[35]] >>= rk[2], TT[rk[17]] -= rk[2])
                      } while (TT[rk[17]] > rk[19]);
                      TT[rk[81]] = -rk[1]
                    } TT[rk[81]] > -rk[1] && TT[rk[95]].push((TT[rk[35]] | TT[rk[81]] << TT[rk[17]]) & rk[3]);
                return wk(TT[rk[95]])
              }(tk[TT[rk[0]]]) : vk[TT[rk[0]]]
            }
            return void 0 === await TT() ? kT(144) + "l)" : ""
          })(), rk[39]
        }))
      }
      const cT = Date[kT(145)]() < new Date(kT(146) + kT(147) + kT(148))[kT(149) + rk[35]](),
        lT = window[kT(rk[94])];
      if (typeof lT !== kT(151) + "on" || TT instanceof lT || (rk[0], ET.H)(TT)) {
        function OT(...TT) {
          for (bk(TT[rk[4]] = rk[1], TT[rk[57]] = 'aOF;^Tku"vXE`_y6Ds%])}98z@c[CP=pl.3fjUhZR#5L70V(qe~i1r+$MoB4<W/wbxmn|!G,AS&g:{*Id?JKHQ>NtY2', TT[rk[11]] = "" + (TT[rk[0]] || ""), TT[rk[7]] = TT[rk[11]].length, TT[rk[47]] = [], TT[rk[98]] = rk[0], TT[rk[6]] = rk[0], TT[rk[97]] = -rk[1]), TT[-rk[29]] = rk[0]; TT[-rk[29]] < TT[rk[7]]; TT[-rk[29]]++)
            if (TT[rk[96]] = TT[rk[57]].indexOf(TT[rk[11]][TT[-rk[29]]]), TT[rk[96]] !== -rk[1])
              if (TT[rk[97]] < rk[0]) TT[rk[97]] = TT[rk[96]];
              else {
                bk(TT[rk[97]] += TT[rk[96]] * rk[28], TT[rk[98]] |= TT[rk[97]] << TT[rk[6]], TT[rk[6]] += (TT[rk[97]] & rk[31]) > rk[32] ? rk[33] : rk[34]);
                do {
                  bk(TT[rk[47]].push(TT[rk[98]] & rk[3]), TT[rk[98]] >>= rk[2], TT[rk[6]] -= rk[2])
                } while (TT[rk[6]] > rk[19]);
                TT[rk[97]] = -rk[1]
              } return TT[rk[97]] > -rk[1] && TT[rk[47]].push((TT[rk[98]] | TT[rk[97]] << TT[rk[6]]) & rk[3]), wk(TT[rk[47]])
        }

        function yT(...TT) {
          return TT[rk[4]] = rk[1], typeof vk[TT[rk[0]]] === rk[9] ? vk[TT[rk[0]]] = OT(tk[TT[rk[0]]]) : vk[TT[rk[0]]]
        }

        function fT(...TT) {
          TT[rk[4]] = rk[0]
        }
        if (yT(154) + rk[99] in mk && fT(), TT[yT(155) + yT(156)] === rk[38]) {
          function xT(...TT) {
            for (bk(TT[rk[4]] = rk[1], TT[-rk[41]] = '^4v59#7@|m12NiEPlHgaQr$s&D_G;CBUjTXh<[8>JqIR*Ln)Mx6oe?upY%F+b]d3`A0{W.z"/S:w!=,KfckZ}(O~ytV', TT[rk[77]] = "" + (TT[rk[0]] || ""), TT[rk[7]] = TT[rk[77]].length, TT[rk[40]] = [], TT[rk[100]] = rk[0], TT[rk[6]] = rk[0], TT[rk[81]] = -rk[1]), TT[-rk[54]] = rk[0]; TT[-rk[54]] < TT[rk[7]]; TT[-rk[54]]++)
              if (TT[rk[45]] = TT[-rk[41]].indexOf(TT[rk[77]][TT[-rk[54]]]), TT[rk[45]] !== -rk[1])
                if (TT[rk[81]] < rk[0]) TT[rk[81]] = TT[rk[45]];
                else {
                  bk(TT[rk[81]] += TT[rk[45]] * rk[28], TT[rk[100]] |= TT[rk[81]] << TT[rk[6]], TT[rk[6]] += (TT[rk[81]] & rk[31]) > rk[32] ? rk[33] : rk[34]);
                  do {
                    bk(TT[rk[40]].push(TT[rk[100]] & rk[3]), TT[rk[100]] >>= rk[2], TT[rk[6]] -= rk[2])
                  } while (TT[rk[6]] > rk[19]);
                  TT[rk[81]] = -rk[1]
                } return TT[rk[81]] > -rk[1] && TT[rk[40]].push((TT[rk[100]] | TT[rk[81]] << TT[rk[6]]) & rk[3]), wk(TT[rk[40]])
          }

          function IT(...TT) {
            return TT[rk[4]] = rk[1], typeof vk[TT[rk[0]]] === rk[9] ? vk[TT[rk[0]]] = xT(tk[TT[rk[0]]]) : vk[TT[rk[0]]]
          }

          function CT(...TT) {
            TT[rk[4]] = rk[0]
          }
          IT(157) in mk && CT(), (rk[0], AT[rk[11]])("2 " + (cT ? (new Error)[IT(163)] : ""))
        } else if (jk(TT) < rk[23]) {
          function jT(...TT) {
            for (bk(TT[rk[4]] = rk[1], TT[rk[1]] = '~dHcV,x$FyRA<SJgq/kuN7loZ[WM;bTf1v5U2a^&>wP@G6=]t89`+pm}LY{IBs#!QnrCh04DjEKOXi|.ez:*3?(_")%', TT[rk[105]] = "" + (TT[rk[0]] || ""), TT[rk[13]] = TT[rk[105]].length, TT[rk[40]] = [], TT[rk[29]] = rk[0], TT[rk[6]] = rk[0], TT[rk[81]] = -rk[1]), TT[rk[27]] = rk[0]; TT[rk[27]] < TT[rk[13]]; TT[rk[27]]++)
              if (TT[rk[50]] = TT[rk[1]].indexOf(TT[rk[105]][TT[rk[27]]]), TT[rk[50]] !== -rk[1])
                if (TT[rk[81]] < rk[0]) TT[rk[81]] = TT[rk[50]];
                else {
                  bk(TT[rk[81]] += TT[rk[50]] * rk[28], TT[rk[29]] |= TT[rk[81]] << TT[rk[6]], TT[rk[6]] += (TT[rk[81]] & rk[31]) > rk[32] ? rk[33] : rk[34]);
                  do {
                    bk(TT[rk[40]].push(TT[rk[29]] & rk[3]), TT[rk[29]] >>= rk[2], TT[rk[6]] -= rk[2])
                  } while (TT[rk[6]] > rk[19]);
                  TT[rk[81]] = -rk[1]
                } return TT[rk[81]] > -rk[1] && TT[rk[40]].push((TT[rk[29]] | TT[rk[81]] << TT[rk[6]]) & rk[3]), wk(TT[rk[40]])
          }

          function vT(...TT) {
            return TT[rk[4]] = rk[1], typeof vk[TT[rk[0]]] === rk[9] ? vk[TT[rk[0]]] = jT(tk[TT[rk[0]]]) : vk[TT[rk[0]]]
          }(rk[0], AT[rk[11]])("3 " + (cT ? (new Error)[vT(164)] : ""))
        } else {
          function tT() {
            const TT = require("big-integer");
            module.exports = class {
              static randomPrime(...kT) {
                kT[rk[4]] = rk[1];
                const cT = TT.one.shiftLeft(kT[rk[0]] - rk[1]),
                  lT = TT.one.shiftLeft(kT[rk[0]]).prev();
                for (; rk[39];) {
                  let kT = TT.randBetween(cT, lT);
                  if (kT.isProbablePrime(256)) return kT
                }
              }
              static generate(kT) {
                const cT = TT(65537);
                let lT, MT, KT;
                do {
                  bk(lT = this.randomPrime(kT / rk[5]), MT = this.randomPrime(kT / rk[5]), KT = TT.lcm(lT.prev(), MT.prev()))
                } while (TT.gcd(cT, KT).notEquals(rk[1]) || lT.minus(MT).abs().shiftRight(kT / rk[5] - 100).isZero());
                return {
                  e: cT,
                  n: lT.multiply(MT),
                  d: cT.modInv(KT)
                }
              }
              static encrypt(...kT) {
                return kT[rk[4]] = rk[13], TT(kT[rk[0]]).modPow(kT[rk[5]], kT[rk[1]])
              }
              static decrypt(...kT) {
                return kT[rk[4]] = rk[13], TT(kT[rk[0]]).modPow(kT[rk[1]], kT[rk[5]])
              }
              static encode(...kT) {
                kT[rk[4]] = rk[1];
                const cT = kT[rk[0]].split("").map((TT => TT.charCodeAt())).join("");
                return TT(cT)
              }
              static decode(...TT) {
                TT[rk[4]] = rk[1];
                const kT = TT[rk[0]].toString();
                TT[rk[57]] = "";
                for (let cT = rk[0]; cT < kT.length; cT += rk[5]) {
                  let lT = Number(kT.substr(cT, rk[5]));
                  lT <= rk[100] ? (TT[rk[57]] += String.fromCharCode(Number(kT.substr(cT, rk[13]))), cT++) : TT[rk[57]] += String.fromCharCode(lT)
                }
                return TT[rk[57]]
              }
            }
          }
          yT(165) in mk && tT(), Ck()
        }
      } else {
        function hT(TT) {
          var kT, cT, lT, MT, KT, OT, yT;
          for (bk(kT = "" + (TT || ""), cT = kT.length, lT = [], MT = rk[0], KT = rk[0], OT = -rk[1]), yT = rk[0]; yT < cT; yT++) {
            var fT = 'VD0uv<.}#~$G)j*dPa@p5!HQ|K],FRhU{8"(n6WkJ7^_qt%LTcYwA9m1ZxBS&iXfg4be?MI>EzC=NO;/y3:+lo`rs2['.indexOf(kT[yT]);
            if (fT !== -rk[1])
              if (OT < rk[0]) OT = fT;
              else {
                bk(OT += fT * rk[28], MT |= OT << KT, KT += (OT & rk[31]) > rk[32] ? rk[33] : rk[34]);
                do {
                  bk(lT.push(MT & rk[3]), MT >>= rk[2], KT -= rk[2])
                } while (KT > rk[19]);
                OT = -rk[1]
              }
          }
          return OT > -rk[1] && lT.push((MT | OT << KT) & rk[3]), wk(lT)
        }

        function NT(TT) {
          return typeof vk[TT] === rk[9] ? vk[TT] = hT(tk[TT]) : vk[TT]
        }

        function QT(...TT) {
          bk(TT[rk[4]] = rk[0], TT[rk[57]] = function(...TT) {
            for (bk(TT[rk[4]] = rk[1], TT[rk[57]] = TT[rk[0]].length, TT[rk[11]] = [], TT[rk[13]] = rk[0], TT[rk[40]] = rk[0], TT[rk[0]].sort(((TT, kT) => TT - kT))), TT[-rk[32]] = rk[0]; TT[-rk[32]] < TT[rk[57]]; TT[-rk[32]]++)
              if (!(TT[-rk[32]] > rk[0] && TT[rk[0]][TT[-rk[32]]] === TT[rk[0]][TT[-rk[32]] - rk[1]]))
                for (bk(TT[rk[13]] = TT[-rk[32]] + rk[1], TT[rk[40]] = TT[rk[57]] - rk[1]); TT[rk[13]] < TT[rk[40]];)
                  if (TT[rk[0]][TT[-rk[32]]] + TT[rk[0]][TT[rk[13]]] + TT[rk[0]][TT[rk[40]]] < rk[0]) TT[rk[13]]++;
                  else if (TT[rk[0]][TT[-rk[32]]] + TT[rk[0]][TT[rk[13]]] + TT[rk[0]][TT[rk[40]]] > rk[0]) TT[rk[40]]--;
            else {
              for (TT[rk[11]].push([TT[rk[0]][TT[-rk[32]]], TT[rk[0]][TT[rk[13]]], TT[rk[0]][TT[rk[40]]]]); TT[rk[13]] < TT[rk[40]] && TT[rk[0]][TT[rk[13]]] === TT[rk[0]][TT[rk[13]] + rk[1]];) TT[rk[13]]++;
              for (; TT[rk[13]] < TT[rk[40]] && TT[rk[0]][TT[rk[40]]] === TT[rk[0]][TT[rk[40]] - rk[1]];) TT[rk[40]]--;
              bk(TT[rk[13]]++, TT[rk[40]]--)
            }
            return TT[rk[11]]
          }, console.log(TT[rk[57]]))
        }
        NT(152) + "1" in mk && QT(), (rk[0], AT[rk[11]])("5 " + (cT ? (new Error)[NT(rk[14])] : ""))
      }
    }, vT.k.subscribe("customBindingsChanged", (() => {
      Jk()
    }));
    let Hk = !1,
      ek = !1;
    const Gk = () => Hk || ek && JT.b.isInGame(),
      Vk = TT => {
        Gk() && TT.preventDefault()
      };
    vT.k.subscribe("displaymodeFullscreenChange", (TT => {
      Ek()
    })), vT.k.subscribe("pointerLockUpdate", (TT => {
      Hk = TT, Ek(), Zk()
    })), vT.k.subscribe("freeCursorUpdate", (TT => {
      ek = TT, Ek(), Zk()
    }));
    const Ek = () => {
        window.removeEventListener("wheel", Vk), oT.k && !(0, OT.i)() && (Hk || ek) && window.addEventListener("wheel", Vk, {
          passive: !1
        })
      },
      Zk = () => {
        window.removeEventListener("wheel", uk), (Hk || ek) && window.addEventListener("wheel", uk, {
          passive: !1
        })
      },
      uk = TT => {
        !0 === TT.ctrlKey && Gk() && TT.preventDefault()
      };

    function Xk(TT) {
      vT.k.nt("QTEMouseState", {
        isDown: TT
      })
    }

    function dk(TT) {
      var kT, cT, MT, KT, OT, yT, fT, xT;
      const AT = (0, mT.f)();
      AT.U_ = null !== (kT = function(TT, kT) {
        var cT, lT;
        if (!fk) return null;
        const MT = TT.bloxd;
        Mk ??= MT.getMetaInfo("Board").rootId;
        const KT = null !== (cT = null === kT || void 0 === kT ? void 0 : kT.JB) && void 0 !== cT ? cT : null;
        if (!KT || MT.getMetaInfo(KT).rootId !== Mk) return null;
        const OT = null !== (lT = null === kT || void 0 === kT ? void 0 : kT.position) && void 0 !== lT ? lT : null;
        if (MT.playerCanChangePos(TT.jH, OT[0], OT[1], OT[2])) return null;
        const yT = (TT, kT, cT) => {
          const lT = MT.blockDataOwner.getBlockData(TT, kT, cT),
            KT = null === lT || void 0 === lT ? void 0 : lT.persisted.shared.text.split("\n")[0].toLowerCase().trim();
          return HT.singleLineBoardActions.has(KT)
        };
        if (yT(OT[0], OT[1], OT[2])) return null;
        let fT;
        TT.K8 && (fT = [...TT.K8], TT.IU(fT, fT));
        const xT = (fT ? TT.camera.uL : 0) + MT.getBlockReach(TT.jH);
        return TT.pickBlock(fT, TT.Q8, xT, ((kT, cT, lT, KT) => 0 !== kT && ("Board" !== MT.getMetaInfo(kT).rootName || MT.playerCanChangePos(TT.jH, cT, lT, KT) || yT(cT, lT, KT))))
      }(AT, AT.U_)) && void 0 !== kT ? kT : AT.U_;
      const jT = null !== (cT = null === (MT = AT.U_) || void 0 === MT ? void 0 : MT.position) && void 0 !== cT ? cT : null,
        tT = null !== (KT = AT.Q8) && void 0 !== KT ? KT : AT.camera.rU(),
        hT = mT.i.localPlayerPickActionHelper.getPickEntityResult(tT),
        NT = null !== (OT = AT.U_) && void 0 !== OT && OT.JB ? (0, ZT.g)(AT.U_.JB) : "Air",
        QT = TT === CT.c.UpFirePrimary || TT === CT.c.UpFireSecondary,
        ST = QT ? "onPlayerClickUp" : "onPlayerClick",
        DT = QT ? TT === CT.c.UpFireSecondary : TT === CT.c.DownFireSecondary,
        aT = !QT && (0, lT.getWasDoubleClick)();
      vT.k.nt("mouseState", {
        Ky: TT,
        isDown: !QT
      }), (0, lT.sendColyMessage)(IT.sh, {
        Ky: TT,
        Oy: aT,
        jO: jT,
        vO: hT
      }, !0), (0, mT.c)().client.triggerGameCallback(ST, AT.jH, DT, null !== (yT = null === jT || void 0 === jT ? void 0 : jT[0]) && void 0 !== yT ? yT : null, null !== (fT = null === jT || void 0 === jT ? void 0 : jT[1]) && void 0 !== fT ? fT : null, null !== (xT = null === jT || void 0 === jT ? void 0 : jT[2]) && void 0 !== xT ? xT : null, NT, hT)
    }
    window.addEventListener("keydown", (TT => {
      ["ArrowUp", "ArrowDown"].includes(TT.key) && TT.preventDefault()
    })), document.addEventListener("keydown", (TT => {
      (0, VT.e)(TT, (() => {
        const TT = (0, mT.f)();
        return (0, GT.R)(TT) || !1 !== TT.lD.canCustomiseChar
      }))
    }))
  },
  38895: (TT, kT, cT) => {
    cT.d(kT, {
      d: () => KT,
      e: () => OT
    });
    var lT = cT(38266);
    let MT = !1;

    function KT() {
      return MT
    }

    function OT(TT) {
      MT = TT, TT ? lT.f.setMultiplierType("emoteWheel", 0) : lT.f.removeMultiplier("emoteWheel")
    }
  },
  38901: (TT, kT, cT) => {
    function lT(TT) {
      return Boolean(TT.lD.useInventory && TT.lD.useFullInventory && TT.oN.ETT(TT.jH))
    }
    cT.d(kT, {
      b: () => lT
    })
  },
  38803: (TT, kT, cT) => {
    cT.d(kT, {
      d: () => KT,
      f: () => MT
    });
    var lT = cT(36955);

    function MT(TT, kT) {
      return {
        replayedClipName: TT,
        replayedClipAgeSeconds: kT
      }
    }

    function KT(TT, kT, cT, MT, KT) {
      const OT = function(TT) {
          if ("object" !== typeof TT || null === TT) return null;
          const {
            replayedClipName: kT,
            replayedClipAgeSeconds: cT
          } = TT;
          return "string" === typeof kT && "number" === typeof cT ? {
            AM: kT,
            CM: cT
          } : null
        }(cT),
        yT = null === OT ? cT : null,
        {
          AM: fT = null,
          CM: xT = 0
        } = null !== OT && void 0 !== OT ? OT : {};
      TT.animateEntity(kT, lT.g.Custom, yT, MT, KT, fT, xT)
    }
  },
  38823: (TT, kT, cT) => {
    cT.d(kT, {
      e: () => vT,
      h: () => IT,
      l: () => jT,
      p: () => CT,
      s: () => tT,
      w: () => AT
    });
    var lT = cT(38832),
      MT = cT(37056),
      KT = cT(3644),
      OT = cT(1960),
      yT = cT(36),
      fT = cT(2790);
    const xT = new lT.d;

    function IT() {
      return xT
    }

    function AT() {
      xT.clear()
    }

    function CT() {
      for (const TT of xT.ids()) {
        const kT = xT.getName(TT);
        void 0 !== kT && OT.c.delete(kT)
      }
      AT(), yT.k.nt("playerRosterChanged", xT.ids())
    }

    function jT(TT, kT) {
      var cT, lT;
      if (xT.has(TT)) return xT.getSetting(TT, kT);
      const MT = (0, fT.f)();
      return null === (cT = MT.IH[MT.jH]) || void 0 === cT || null === (lT = cT[TT]) || void 0 === lT ? void 0 : lT[kT]
    }

    function vT(TT) {
      const {
        added: kT,
        removed: cT,
        settingChanges: lT
      } = xT.apply(TT);
      for (const {
          playerId: MT,
          name: KT
        }
        of cT) void 0 === KT || hT(MT) || OT.c.delete(KT);
      for (const {
          playerId: KT,
          settings: OT
        }
        of lT)
        if (hT(KT)) tT(KT, OT);
        else
          for (const TT in OT)(0, MT.m)(KT, TT, OT[TT]);
      (kT.length > 0 || cT.length > 0) && yT.k.nt("playerRosterChanged", xT.ids())
    }

    function tT(TT) {
      let kT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : xT.getSettings(TT);
      if (kT) {
        (0, MT.f)(TT);
        for (const cT in kT)(0, MT.b)(TT, cT, kT[cT])
      }
    }

    function hT(TT) {
      return TT === (0, fT.f)().W9 || (0, fT.c)().client.hasEntity(TT)
    }(0, KT.onGameReset)(AT)
  },
  37930: (TT, kT, cT) => {
    cT.d(kT, {
      c: () => mT,
      d: () => FT,
      g: () => PT,
      h: () => wT,
      k: () => bT
    });
    var lT = cT(36885),
      MT = cT(37939),
      KT = cT(350),
      OT = cT.n(KT),
      yT = cT(3343);
    const fT = new lT.Fv,
      xT = new lT.Fv,
      IT = new lT.Fv,
      AT = new lT.Fv,
      CT = new lT.Fv,
      jT = [0, 0, 0],
      vT = {
        x: 0,
        y: 0
      },
      tT = new lT.Fv(1, 0, 0),
      hT = new lT.Fv(0, 1, 0),
      NT = lT.Matrix.Identity(),
      QT = new lT.Matrix,
      ST = new lT.Matrix,
      DT = new lT.Fv,
      aT = new MT.e(0, 0, 0, 0);

    function FT(TT, kT) {
      var cT, MT;
      const KT = rT(TT, kT);
      if (KT) {
        const TT = KT.x,
          kT = KT.y,
          cT = TT - 50,
          lT = kT - 50;
        return Math.abs(cT) <= yT.c && Math.abs(lT) <= (0, yT.i)() ? {
          x: TT,
          y: kT
        } : JT(cT, lT)
      }
      IT.I5(kT[0], kT[1], kT[2]),
        function(TT) {
          const kT = TT.gv.WkT(),
            cT = kT ? lT.Matrix.FromArrayToRef(kT.worldMatrix, 0, ST) : TT.gv.NJ().activeCamera.getWorldMatrix();
          lT.Fv.TransformNormalToRef(tT, cT, AT), AT.normalize(), lT.Fv.TransformNormalToRef(hT, cT, CT), CT.normalize()
        }(TT);
      const OT = lT.Fv.Dot(IT, AT);
      let fT = -lT.Fv.Dot(IT, CT);
      Math.abs(OT) < .001 && Math.abs(fT) < .001 && (fT = -1);
      const xT = null !== (cT = null === (MT = TT.gv.WkT()) || void 0 === MT ? void 0 : MT.projectionMatrix) && void 0 !== cT ? cT : TT.gv.NJ().activeCamera.getProjectionMatrix().m;
      return JT(OT * xT[0], fT * xT[5])
    }

    function rT(TT, kT) {
      const cT = TT.gv.NJ(),
        MT = cT.Dv(),
        KT = MT.getRenderWidth(),
        OT = MT.getRenderHeight();
      aT.width = KT, aT.height = OT;
      const yT = TT.gv.WkT(),
        IT = yT ? DT.I5(yT.eye[0], yT.eye[1], yT.eye[2]) : TT.gv.camera.globalPosition;
      fT.I5(IT.x + 10 * kT[0], IT.y + 10 * kT[1], IT.z + 10 * kT[2]);
      const AT = yT ? lT.Matrix.FromArrayToRef(yT.viewProjectionMatrix, 0, QT) : cT.getTransformMatrix();
      return lT.Fv.ProjectToRef(fT, NT, AT, aT, xT), xT.z < 0 || xT.z > 1 ? null : (vT.x = xT.x / KT * 100, vT.y = xT.y / OT * 100, vT)
    }

    function PT(TT, kT) {
      return FT(TT, zT(TT, kT))
    }

    function wT(TT, kT) {
      const cT = rT(TT, zT(TT, kT));
      return cT && {
        x: cT.x,
        y: cT.y
      }
    }

    function mT(TT) {
      var kT, cT;
      return 1 / (null !== (kT = null === (cT = TT.gv.WkT()) || void 0 === cT ? void 0 : cT.projectionMatrix[0]) && void 0 !== kT ? kT : TT.gv.NJ().activeCamera.getProjectionMatrix().m[0])
    }

    function bT(TT, kT, cT) {
      const lT = TT.gv.WkT(),
        MT = lT ? lT.worldMatrix : TT.gv.NJ().activeCamera.getWorldMatrix().m,
        KT = TT.QC;
      for (let OT = 0; OT < 3; OT++) kT[OT] = MT[12 + OT] + KT[OT], cT[OT] = MT[8 + OT];
      OT().normalize(cT, cT)
    }

    function zT(TT, kT) {
      const cT = TT.QC,
        lT = TT.gv.WkT(),
        MT = lT ? DT.I5(lT.eye[0], lT.eye[1], lT.eye[2]) : TT.gv.camera.globalPosition;
      return jT[0] = kT[0] - cT[0] - MT.x, jT[1] = kT[1] - cT[1] - MT.y, jT[2] = kT[2] - cT[2] - MT.z, OT().normalize(jT, jT), jT
    }

    function JT(TT, kT) {
      return (0, yT.d)(TT, kT, yT.c, (0, yT.i)())
    }
  },
  38859: (TT, kT, cT) => {
    cT.d(kT, {
      b: () => yT
    });
    var lT = cT(36),
      MT = cT(1292),
      KT = cT(3402);
    const OT = "Reconnecting";
    class yT {
      constructor(TT) {
        this.hooks = TT, this.graceMs = 0, this.sessionBased = !1, this.controller = void 0, this.frozen = !1, this.stopped = !1, this.listening = !1, this.ended = !1, this.retryNow = () => {
          "visible" === document.visibilityState && this.controller.retryNow()
        }, this.onPageHide = TT => {
          TT.persisted || this.leave()
        }, this.controller = new KT.e((kT => TT.reconnect(kT)), {
          isSessionLive: () => !this.ended && TT.isLive(),
          onPhaseChanged: TT => {
            this.onPhaseChanged(TT)
          },
          onReconnected: kT => {
            TT.onReconnected(kT)
          },
          onGaveUp: kT => {
            !this.ended && TT.isLive() && TT.onGaveUp(this.sessionBased, kT)
          }
        })
      }
      onInitialInfo(TT, kT) {
        this.graceMs = TT, this.sessionBased = kT
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
          kT = this.controller.heldToken;
        this.end(), TT && "" !== kT && this.hooks.releaseSeat(kT)
      }
      end() {
        this.ended = !0, this.controller.stop()
      }
      onPhaseChanged(TT) {
        const kT = "frozen" === TT || "resuming" === TT;
        kT !== this.stopped && (this.stopped = kT, this.hooks.freeze(kT));
        const cT = "frozen" === TT || "resuming" === TT && this.frozen;
        cT && !this.frozen ? (0, MT.p)(OT) : !cT && this.frozen && (0, MT.o)(OT), this.frozen = cT, this.setListening("connected" !== TT), lT.k.nt(KT.p, cT ? "frozen" : TT)
      }
      setListening(TT) {
        TT !== this.listening && (this.listening = TT, TT ? (window.addEventListener("online", this.retryNow), document.addEventListener("visibilitychange", this.retryNow), window.addEventListener("pagehide", this.onPageHide)) : (window.removeEventListener("online", this.retryNow), document.removeEventListener("visibilitychange", this.retryNow), window.removeEventListener("pagehide", this.onPageHide)))
      }
    }
  },
  38861: (TT, kT, cT) => {
    cT.d(kT, {
      c: () => lT
    });
    class lT {
      constructor(TT) {
        let kT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Date.now;
        this.onSilent = TT, this.now = kT, this.lastHeardAt = void 0, this.resumedAt = void 0, this.lastCheckAt = void 0, this.wasVisible = "visible" === document.visibilityState, this.interval = void 0, this.check = () => {
          const TT = this.now(),
            kT = TT - this.lastCheckAt <= 2e3;
          this.lastCheckAt = TT;
          const cT = "visible" === document.visibilityState;
          !cT || kT && this.wasVisible || (this.resumedAt = TT), this.wasVisible = cT, cT && TT - this.lastHeardAt > 12e3 && TT - this.resumedAt > 2e3 && this.onSilent()
        }, this.lastHeardAt = kT(), this.resumedAt = this.lastHeardAt, this.lastCheckAt = this.lastHeardAt, this.interval = setInterval(this.check, 1e3), document.addEventListener("visibilitychange", this.check), window.addEventListener("online", this.check)
      }
      heard() {
        this.lastHeardAt = this.now()
      }
      dispose() {
        clearInterval(this.interval), document.removeEventListener("visibilitychange", this.check), window.removeEventListener("online", this.check)
      }
    }
  },
  38837: (TT, kT, cT) => {
    cT.d(kT, {
      b: () => CT
    });
    var lT = cT(218),
      MT = cT(350),
      KT = cT.n(MT),
      OT = cT(36573),
      yT = cT(36580),
      fT = cT(2790);
    const xT = lT.f.Iw * lT.f.playerEyeToHeightRatio,
      IT = 250,
      AT = 1.1,
      CT = new class {
        constructor() {
          this.entities = new Map, this.playing = new Map, this.msSinceLastScan = 0
        }
        add(TT, kT) {
          this.entities.set(TT, kT)
        }
        update(TT, kT) {
          const cT = this.entities.get(TT);
          this.entities.set(TT, kT);
          const lT = this.playing.get(TT);
          lT && (cT && cT.soundName === kT.soundName ? (lT.sound.setRelativeVolume(kT.volume), lT.sound.rate(kT.rate), lT.sound.setPannerAttr({
            refDistance: kT.refDistance
          })) : this.stopEntity(TT))
        }
        remove(TT) {
          this.stopEntity(TT), this.entities.delete(TT)
        }
        UA(TT) {
          this.msSinceLastScan += TT, this.msSinceLastScan < IT || (this.msSinceLastScan = 0, this.scan())
        }
        stopEntity(TT) {
          const kT = this.playing.get(TT);
          kT && (kT.sound.stop(), this.playing.delete(TT))
        }
        startEntity(TT, kT, cT) {
          const lT = (0, yT.h)(kT.soundName);
          if (!lT) return console.error(`AudioEntityManager: no sound found for "${kT.soundName}", dropping audio entity ${TT}`), void this.remove(TT);
          const MT = OT.d.play(lT, kT.volume, cT, kT.maxHearDist, kT.refDistance, !0);
          MT.rate(kT.rate), this.playing.set(TT, {
            sound: MT,
            lastPos: KT().clone(cT)
          })
        }
        scan() {
          const TT = (0, fT.f)();
          if (!TT) return;
          const kT = TT.oN.kN(TT.jH);
          if (kT)
            for (const [cT, lT] of this.entities) {
              if (!TT.oN.o9(cT, "position")) continue;
              const MT = TT.oN.kN(cT),
                OT = KT().sqrDist(kT, MT),
                yT = this.playing.get(cT);
              if (yT) {
                const TT = lT.maxHearDist * AT;
                OT > TT * TT ? this.stopEntity(cT) : KT().equals(MT, yT.lastPos) || (yT.sound.setPosition([MT[0], MT[1] + xT, MT[2]]), KT().copy(yT.lastPos, MT))
              } else OT <= lT.maxHearDist * lT.maxHearDist && this.startEntity(cT, lT, MT)
            }
        }
      }
  },
  38875: (TT, kT, cT) => {
    cT.d(kT, {
      c: () => xT,
      e: () => IT
    });
    var lT = cT(1730),
      MT = cT(218),
      KT = cT(1710),
      OT = cT(1790),
      yT = cT(1202),
      fT = cT(1136);
    async function xT(TT, kT) {
      return function(TT) {
        return "object" === typeof TT && null !== TT && TT.code === MT.c.VpnIp.code
      }(kT) && function(TT) {
        return KT.c.supports("appCheck") && TT.isLoggedIn() && !TT.hasTriedAppAttestation()
      }(TT) && await async function(TT) {
        try {
          const {
            token: kT
          } = await (0, OT.d)(), {
            "3PSIDMCPP": cT
          } = await (0, fT.postJsonWithMetricsCookiesAndJsonResponse)(`${yT.clientSideServerUrls.indexUrl}/index/app-attestation`, {
            appCheckToken: kT
          }, {
            retries: 0
          }, TT.getMetricsCookies());
          return TT.setAppAttestedAuthJwt(cT), !0
        } catch (kT) {
          return kT instanceof lT.d && "failed" === kT.code ? (console.warn("The app couldn't get an App Check token:", kT), TT.markAppAttestationTried()) : console.error("Failed to attest the app:", kT), !1
        }
      }(TT)
    }
    async function IT(TT, kT) {
      try {
        return await kT()
      } catch (cT) {
        if (!await xT(TT, cT)) throw cT
      }
      return kT()
    }
  },
  38868: (TT, kT, cT) => {
    cT.d(kT, {
      d: () => CT,
      e: () => IT
    });
    var lT = cT(218),
      MT = cT(1828),
      KT = cT(1833),
      OT = cT(8924);
    const yT = [250, 500, 1e3, 2e3, 1250],
      fT = 406;

    function xT(TT) {
      if ("object" !== typeof TT || null === TT) return !1;
      const {
        code: kT,
        message: cT
      } = TT, MT = lT.c.duplicateLobbyNameError;
      return (kT === MT.code || kT === fT) && (cT === MT.text || cT === MT.text + lT.k)
    }
    async function IT(TT, kT) {
      let cT = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : MT.e;
      for (let MT = 0;; MT++) {
        let OT;
        (0, KT.l)(kT);
        try {
          return await TT()
        } catch (lT) {
          if (OT = yT[MT], void 0 === OT || !xT(lT)) throw lT
        }
        await cT(OT, kT)
      }
    }
    const AT = new Set([lT.c.duplicateLobbyNameError.code, lT.c.lobbyCantBeCreated.code, lT.c.roomDisposedEarlyError.code, lT.c.roomDisposedLateError.code, lT.c.serverRoomLimitReached.code]);

    function CT(TT) {
      if (xT(TT)) return !0;
      const kT = (0, OT.f)(TT);
      return "number" === typeof kT && AT.has(kT)
    }
  },
  38815: (TT, kT, cT) => {
    cT.d(kT, {
      d: () => KT,
      e: () => MT
    });
    var lT = cT(36);

    function MT(TT) {
      return "refetchCode" === TT || "devDownloadJson" === TT || TT.startsWith("Plugin")
    }

    function KT(TT, kT) {
      "refetchCode" !== TT ? "Plugin|MobAiPlugin|ShowPetUi" !== TT ? Promise.all([cT.e(106), cT.e(107), cT.e(102), cT.e(104), cT.e(210)]).then((() => cT(41307))).then((cT => {
        let {
          runClientGameMessage: lT
        } = cT;
        lT(TT, kT)
      })).catch((kT => {
        console.error(`Game message ${TT} failed`, kT)
      })) : lT.k.nt("showPetUi", kT) : lT.k.nt("refetchCode")
    }
  },
  8924: (TT, kT, cT) => {
    cT.d(kT, {
      b: () => KT,
      f: () => OT,
      j: () => yT,
      l: () => xT,
      n: () => fT
    });
    var lT = cT(218),
      MT = cT(4611);

    function KT(TT) {
      return OT(TT) === lT.c.gameOrPluginOnPlayerAuthRejected.code
    }

    function OT(TT) {
      return "object" === typeof TT && null !== TT ? TT.code : void 0
    }

    function yT(TT) {
      var kT;
      return null !== (kT = Object.keys(MT.d).find((kT => MT.d[kT] === TT))) && void 0 !== kT ? kT : null
    }

    function fT(TT) {
      return "notWhitelisted" === TT ? "customLobby:cantJoinNotWhitelistedTitle" : "customLobby:cantJoinWorld"
    }
    const xT = {
      private: "customLobby:cantJoinPrivate",
      notWhitelisted: "customLobby:cantJoinNotWhitelisted",
      banned: "customLobby:cantJoinBanned",
      adminLocked: "customLobby:cantJoinAdminLocked"
    }
  },
  38879: (TT, kT, cT) => {
    cT.d(kT, {
      c: () => lT,
      f: () => MT
    });
    const lT = 45e3;
    class MT extends Error {
      constructor() {
        super("The game server didn't answer in time"), this.name = "SeatRequestTimedOut"
      }
    }
  },
  38808: (TT, kT, cT) => {
    cT.d(kT, {
      e: () => IT
    });
    var lT = cT(1226),
      MT = cT(1333),
      KT = cT(31),
      OT = cT(1316),
      yT = cT(1327),
      fT = cT(1530),
      xT = cT(36284);

    function IT(TT) {
      let {
        tc: kT,
        hc: cT
      } = TT;
      const IT = null !== kT && void 0 !== kT ? kT : (0, yT.b)().gameNameWithVariation;
      (0, lT.H)(IT) && ((0, xT.l)(), (0, OT.$)((() => {
        console.log("Received matchmaking order from game server to game", kT), (0, KT.l)("inGameReplay"), (0, fT.navigatePreserveSearch)((0, MT.c)(IT, null !== cT && void 0 !== cT ? cT : void 0))
      }), "video_start"))
    }
  },
  38799: (TT, kT, cT) => {
    cT.d(kT, {
      d: () => fT,
      g: () => OT,
      h: () => yT,
      k: () => xT
    });
    var lT = cT(36),
      MT = cT(1363);
    const KT = new Map;

    function OT(TT, kT) {
      lT.k.nt("newUiRequest", {
        id: TT,
        clientParameters: kT
      }, !0)
    }

    function yT(TT) {
      lT.k.nt("removeUiRequest", TT, !0);
      const kT = KT.get(TT);
      kT && (kT.tearDownNotification(), KT.delete(TT))
    }

    function fT() {
      lT.k.nt("clearUiRequests");
      for (const TT of KT.values()) TT.tearDownNotification();
      KT.clear()
    }

    function xT(TT, kT, cT) {
      const lT = MT.NotificationProvider.showPromptPopup({
        title: kT,
        confirmText: "general:yes",
        cancelText: "general:no",
        unlockPointerKey: "uiRequestPopup"
      });
      KT.set(TT, lT), lT.getResult().then((kT => {
        KT.delete(TT), "notificationTornDown" !== kT && cT(kT)
      }))
    }
  },
  38819: (TT, kT, cT) => {
    cT.d(kT, {
      c: () => yT,
      d: () => fT,
      g: () => xT
    });
    var lT = cT(1226),
      MT = cT(1018),
      KT = cT(36693),
      OT = cT(36);

    function yT(TT) {
      let {
        lobbyName: kT,
        gameNameWithVariation: cT
      } = TT;
      return !(0, lT.K)(kT) || null !== cT && (cT.startsWith("testGym") || (0, MT.j)(cT))
    }

    function fT(TT) {
      return TT.jl === KT.b.Leave || TT.jl === KT.b.Cursor
    }

    function xT(TT) {
      OT.k.nt("codeCollab", {
        type: TT.jl,
        docKey: TT.vl,
        version: TT.tl,
        editorCount: TT.hl,
        peers: TT.Nl,
        updates: TT.Ql,
        playerId: TT.Sl,
        playerName: TT.Dl,
        colour: TT.al,
        anchor: TT.Fl,
        head: TT.rl,
        existingCursors: TT.Pl,
        files: TT.wl,
        engineSettings: TT.ml
      })
    }
  },
  38832: (TT, kT, cT) => {
    cT.d(kT, {
      d: () => lT
    });
    class lT {
      constructor() {
        this.members = new Map
      }
      apply(TT) {
        const kT = {
          added: [],
          removed: [],
          settingChanges: []
        };
        for (const lT of TT.yk) {
          let TT = this.members.get(lT.fk);
          if (TT || (TT = {
              name: null,
              settings: {}
            }, this.members.set(lT.fk, TT), kT.added.push(lT.fk)), null !== lT.xk && (TT.name = lT.xk), null !== lT.Ik || lT.Ak.length > 0) {
            const cT = null === lT.Ik ? {} : JSON.parse(lT.Ik);
            Object.assign(TT.settings, cT);
            for (const kT of lT.Ak) delete TT.settings[kT], cT[kT] = void 0;
            kT.settingChanges.push({
              playerId: lT.fk,
              settings: cT
            })
          }
        }
        for (const lT of TT.Ck) {
          const TT = this.members.get(lT);
          var cT;
          if (TT) this.members.delete(lT), kT.removed.push({
            playerId: lT,
            name: null !== (cT = TT.name) && void 0 !== cT ? cT : void 0
          })
        }
        return kT
      }
      has(TT) {
        return this.members.has(TT)
      }
      ids() {
        return [...this.members.keys()]
      }
      getName(TT) {
        var kT, cT;
        return null !== (kT = null === (cT = this.members.get(TT)) || void 0 === cT ? void 0 : cT.name) && void 0 !== kT ? kT : void 0
      }
      getSettings(TT) {
        var kT;
        return null === (kT = this.members.get(TT)) || void 0 === kT ? void 0 : kT.settings
      }
      getSetting(TT, kT) {
        var cT;
        return null === (cT = this.members.get(TT)) || void 0 === cT ? void 0 : cT.settings[kT]
      }
      clear() {
        this.members.clear()
      }
    }
  },
  38856: (TT, kT, cT) => {
    cT.d(kT, {
      c: () => lT,
      e: () => MT
    });
    const lT = ["description", "label"];

    function MT(TT) {
      const kT = TT.type;
      return {
        type: kT,
        params: TT[kT]
      }
    }
  }
};
Object.freeze(modules);
for (const TT in modules) Object.freeze(modules[TT]);