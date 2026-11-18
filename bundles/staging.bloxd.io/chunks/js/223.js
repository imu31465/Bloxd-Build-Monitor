export const id = 223;
export const ids = [223];
export const modules = {
  38033: (JJ, cJ, ZJ) => {
    ZJ.d(cJ, {
      c: () => eJ,
      f: () => XJ
    });
    var FJ = ZJ(17);
    let UJ = !1;

    function eJ() {
      return UJ
    }

    function XJ(JJ) {
      UJ !== JJ && (UJ = JJ, FJ.i.Uf("replayViewer|videoExportChanged"))
    }
  },
  37914: (JJ, cJ, ZJ) => {
    ZJ.d(cJ, {
      c: () => eJ
    });
    var FJ = ZJ(17),
      UJ = ZJ(1725);

    function eJ(JJ) {
      let {
        taskId: cJ,
        progress: ZJ
      } = JJ;
      const FJ = UJ.b.get("_tasks");
      null !== FJ && void 0 !== FJ && FJ[cJ] && UJ.b.apply({
        _tasks: {
          ...FJ,
          [cJ]: {
            ...FJ[cJ],
            progress: ZJ
          }
        }
      })
    }
    FJ.i.subscribe("clientTaskProgress", (JJ => {
      eJ(JJ)
    }))
  },
  38052: (JJ, cJ, ZJ) => {
    ZJ.d(cJ, {
      d: () => GJ,
      f: () => fJ,
      j: () => nJ
    });
    var FJ = ZJ(2610);
    const UJ = 0,
      eJ = 2,
      XJ = 3,
      AJ = 4;
    class qJ {
      constructor(JJ, cJ) {
        this.width = JJ, this.qh = cJ, this.data = void 0, this.next = 0, this.size = 0, this.data = new Float64Array(JJ * cJ)
      }
      push(JJ) {
        let cJ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        const ZJ = this.data.subarray(this.next * this.width, (this.next + 1) * this.width);
        for (let FJ = 0; FJ < this.width; FJ++) ZJ[FJ] = JJ[cJ + FJ];
        return this.next = (this.next + 1) % this.qh, this.size = Math.min(this.size + 1, this.qh), ZJ
      }
      lines() {
        const JJ = [],
          cJ = (this.next - this.size + this.qh) % this.qh;
        for (let ZJ = 0; ZJ < this.size; ZJ++) {
          const FJ = (cJ + ZJ) % this.qh * this.width;
          JJ.push(Array.from(this.data.subarray(FJ, FJ + this.width)).join(","))
        }
        return JJ
      }
    }

    function jJ(JJ) {
      return Number.isFinite(JJ) ? String(Math.round(10 * JJ) / 10) : String(JJ)
    }

    function YJ(JJ) {
      return Number.isFinite(JJ) ? JJ.toFixed(1) : String(JJ)
    }
    class hJ {
      constructor() {
        this.frames = 0, this.looked = 0, this.idle = 0, this.Qp = 0, this.pastLimit = 0, this.lockSkips = 0, this.Yf = 0, this.lost = 0, this.dropped = 0, this.longFrames = 0, this.dtMin = 1 / 0, this.dtMax = 0, this.dtSum = 0, this.raw = [0, 0], this.turned = [0, 0], this.peakRate = 0, this.events = 0, this.eventMax = 0, this.bigEvents = 0, this.outliers = 0, this.eventLines = 0, this.suppressed = 0
      }
    }
    class DJ {
      constructor() {
        var JJ = this;
        this.tally = new hJ, this.records = new qJ(10, 3600), this.events = new qJ(4, 12e3), this.event = new Float64Array(4), this.take = null, this.client = "js", this.started = !1, this.record = function(cJ) {
          let ZJ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
          const [FJ, qJ, hJ, DJ, sJ, nJ, GJ, fJ, xJ, rJ] = JJ.records.push(cJ, ZJ), vJ = JJ.tally;
          switch (vJ.frames++, GJ) {
            case UJ:
              return void vJ.idle++;
            case AJ:
              return void vJ.Yf++;
            case XJ:
              return vJ.lockSkips++, void(0 === hJ && 0 === DJ || JJ.outlier(`lock skip dropped raw (${jJ(hJ)}, ${jJ(DJ)}) at ${YJ(FJ)} ms`))
          }
          vJ.looked++, Number.isFinite(qJ) && (vJ.dtMin = Math.min(vJ.dtMin, qJ), vJ.dtMax = Math.max(vJ.dtMax, qJ), vJ.dtSum += qJ, qJ > 0 && (vJ.peakRate = Math.max(vJ.peakRate, Math.hypot(sJ, nJ) / qJ))), vJ.raw[0] += hJ, vJ.raw[1] += DJ, vJ.turned[0] += sJ, vJ.turned[1] += nJ;
          const mJ = Math.abs(hJ) > rJ || Math.abs(DJ) > rJ,
            QJ = `raw (${jJ(hJ)}, ${jJ(DJ)}) over ${YJ(qJ)} ms, limit ${jJ(rJ)}, filter v (${fJ.toFixed(3)}, ${xJ.toFixed(3)}) px/ms, at ${YJ(FJ)} ms`;
          GJ === eJ ? (vJ.Qp++, JJ.outlier(`spike put right: ${QJ} -> turned (${jJ(sJ)}, ${jJ(nJ)})`)) : mJ ? (vJ.pastLimit++, JJ.outlier(`kept past limit: ${QJ}`)) : qJ > 50 && (vJ.longFrames++, JJ.outlier(`long frame: ${QJ}, turned in full`))
        }, this.onMouseMove = JJ => {
          const cJ = this.tally,
            {
              movementX: ZJ,
              movementY: FJ
            } = JJ;
          cJ.events++;
          const UJ = Math.max(Math.abs(ZJ), Math.abs(FJ));
          cJ.eventMax = Math.max(cJ.eventMax, UJ);
          const eJ = null !== document.pointerLockElement,
            XJ = this.event;
          XJ[0] = JJ.timeStamp, XJ[1] = ZJ, XJ[2] = FJ, XJ[3] = eJ ? 1 : 0, this.events.push(XJ), UJ >= 200 && (cJ.bigEvents++, this.eventOutlier(`big mousemove (${ZJ}, ${FJ}) at ${YJ(JJ.timeStamp)} ms, lock ${eJ?"hj":"free"}`))
        }, this.onLockChange = () => {
          const JJ = document.pointerLockElement;
          (0, FJ.j)("look", `pointer lock ${JJ?`gained (${JJ.tagName.toLowerCase()})`:"lost"} at ${YJ(performance.now())} ms`)
        }, this.onLockError = () => {
          (0, FJ.j)("look", `pointer lock request failed at ${YJ(performance.now())} ms`)
        }, this.onVisibility = () => {
          (0, FJ.j)("look", `page ${document.visibilityState} at ${YJ(performance.now())} ms`)
        }, this.flush = () => {
          this.takeRecords();
          const JJ = this.tally;
          if (this.tally = new hJ, 0 === JJ.events && 0 === JJ.raw[0] && 0 === JJ.raw[1] && 0 === JJ.lockSkips && 0 === JJ.Qp && 0 === JJ.dropped) return;
          const cJ = JJ.looked > 0 ? JJ.dtSum / JJ.looked : NaN,
            ZJ = [`${JJ.frames} frames (${JJ.looked} looked, ${JJ.idle} idle${"wasm"===this.client?`, ${JJ.Yf} carried`:""})`, `dt avg ${YJ(cJ)} min ${YJ(JJ.dtMin)} max ${YJ(JJ.dtMax)}, ${JJ.longFrames} long`, `${JJ.events} mousemoves (max ${jJ(JJ.eventMax)} px, ${JJ.bigEvents} big)`, `raw (${jJ(JJ.raw[0])}, ${jJ(JJ.raw[1])}) turned (${jJ(JJ.turned[0])}, ${jJ(JJ.turned[1])})`, `peak ${JJ.peakRate.toFixed(2)} px/ms`, `put right ${JJ.Qp}, past limit ${JJ.pastLimit}, lock skips ${JJ.lockSkips}`, "lock " + (document.pointerLockElement ? "hj" : "free")];
          JJ.dropped > 0 && ZJ.push(`${JJ.dropped} doubled spike copies dropped`), JJ.lost > 0 && ZJ.push(`${JJ.lost} records lost`), JJ.suppressed > 0 && ZJ.push(`${JJ.suppressed} outlier lines not shown`), (0, FJ.j)("look", `1s: ${ZJ.join("; ")}`)
        }, this.dump = () => [`look records (${this.client}): nowMs,dtMs,rawX,rawY,turnedX,turnedY,outcome,vX,vY,limit`, ...this.records.lines(), "mousemove events: timeStamp,movementX,movementY,locked", ...this.events.lines()].join("\n")
      }
      start(JJ, cJ) {
        this.client = JJ, this.take = cJ;
        const {
          screen: ZJ
        } = window;
        (0, FJ.j)("look", `start: ${JJ} client, dpr ${window.devicePixelRatio}, screen ${ZJ.width}x${ZJ.height}, pointer lock ${document.pointerLockElement?"hj":"free"}`), this.started || (this.started = !0, window.addEventListener("mousemove", this.onMouseMove, {
          capture: !0,
          passive: !0
        }), document.addEventListener("pointerlockchange", this.onLockChange), document.addEventListener("pointerlockerror", this.onLockError), document.addEventListener("visibilitychange", this.onVisibility), setInterval(this.flush, 1e3), (0, FJ.h)("look", this.dump))
      }
      outlier(JJ) {
        const cJ = this.tally;
        cJ.outliers >= 20 ? cJ.suppressed++ : (cJ.outliers++, (0, FJ.j)("look", JJ))
      }
      eventOutlier(JJ) {
        const cJ = this.tally;
        cJ.eventLines >= 10 ? cJ.suppressed++ : (cJ.eventLines++, (0, FJ.j)("look", JJ))
      }
      takeRecords() {
        var JJ;
        const cJ = null === (JJ = this.take) || void 0 === JJ ? void 0 : JJ.call(this);
        if (cJ && cJ.length >= 2) {
          this.tally.lost += cJ[0], this.tally.dropped += cJ[1];
          for (let JJ = 2; JJ + 10 <= cJ.length; JJ += 10) this.record(cJ, JJ)
        }
      }
      droppedCopy() {
        this.tally.dropped++
      }
      endTake() {
        this.takeRecords(), this.take = null
      }
    }
    let sJ = null;

    function nJ(JJ) {
      let cJ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
      return sJ ??= new DJ, sJ.start(JJ, cJ), sJ.record
    }

    function GJ() {
      var JJ;
      null === (JJ = sJ) || void 0 === JJ || JJ.endTake()
    }

    function fJ() {
      var JJ;
      null === (JJ = sJ) || void 0 === JJ || JJ.droppedCopy()
    }
  },
  37907: (JJ, cJ, ZJ) => {
    ZJ.d(cJ, {
      c: () => dc,
      d: () => kc,
      e: () => pc
    });
    var FJ = ZJ(3155),
      UJ = ZJ(157),
      eJ = ZJ(538),
      XJ = ZJ(29),
      AJ = ZJ(2401),
      qJ = ZJ(3242),
      jJ = ZJ(3226),
      YJ = ZJ(1122);
    const hJ = new WeakMap;
    class DJ {
      constructor(JJ, cJ) {
        let ZJ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {
          fjJ: !0
        };
        this.callbacks = cJ, this.options = ZJ, this.hZJ = void 0, this.sessionId = void 0, this.xV = [], this.xjJ = !1, this.xn = !1, this.rjJ = void 0, this.fV = 0, this.hUJ = 0, this.vjJ = (JJ, cJ) => {
          if (this.xn) return;
          const ZJ = Number(JJ);
          this.xjJ ? this.mjJ(ZJ, cJ) : this.xV.push({
            id: ZJ,
            payload: cJ
          })
        }, this.dispose = () => {
          this.xn || (this.xn = !0, hJ.delete(this), this.xV.length = 0, this.rjJ())
        }, this.hZJ = JJ, this.sessionId = JJ.sessionId, hJ.set(this, []), this.rjJ = this.QjJ()
      }
      EjJ(JJ) {
        this.rjJ(), this.hZJ = JJ, this.sessionId = JJ.sessionId, this.fV = 0, this.hUJ = 0, this.rjJ = this.QjJ()
      }
      get sV() {
        return this.hUJ
      }
      QjJ() {
        const JJ = this.hZJ.Rm("*", this.vjJ);
        return this.options.fjJ && this.hZJ.FQ(this.dispose), JJ
      }
      mjJ(JJ, cJ) {
        try {
          (0, qJ.jc)(JJ) && (cJ = (0, qJ.b)(JJ, jJ.fn.from(cJ)));
          const ZJ = hJ.get(this)[JJ];
          if ("function" !== typeof ZJ) {
            if (this.callbacks.VjJ) return void this.callbacks.VjJ(JJ, cJ);
            throw new Error(`No onMessage handler registered for message id ${JJ}`)
          }
          ZJ(cJ)
        } catch (ZJ) {
          this.callbacks.KjJ(`Error in onMessage ${JJ} with payload ${JSON.stringify(cJ)}`, ZJ)
        } finally {
          this.fV++
        }
      }
      yjJ() {
        for (const {
            id: JJ,
            payload: cJ
          }
          of this.xV) {
          if (this.xn) break;
          this.mjJ(JJ, cJ)
        }
        this.xV.length = 0
      }
      YZJ() {
        return this.xn
      }
      SjJ() {
        if (this.xjJ || this.xn) throw new Error("Trying to getOnMessageRegistrationHandler after registration finished");
        return {
          Rm: (JJ, cJ) => {
            if (this.xjJ || this.xn) throw new Error("Trying to call onMessage after registration finished");
            this.Rm(JJ, cJ)
          },
          finishRegistration: () => {
            if (this.xn) throw new Error("Cannot finish message registration after disposal");
            this.xjJ = !0, this.yjJ()
          }
        }
      }
      Rm(JJ, cJ) {
        var ZJ, FJ;
        null === (ZJ = (FJ = this.callbacks).IjJ) || void 0 === ZJ || ZJ.call(FJ);
        const UJ = hJ.get(this);
        for (; JJ > UJ.length;) UJ[UJ.length] = null;
        UJ[JJ] = cJ
      }
      send(JJ, cJ) {
        this.MjJ(), (0, YJ.E)(cJ) ? this.hZJ.KV(JJ, cJ) : this.hZJ.send(JJ, cJ)
      }
      MjJ() {
        var JJ, cJ;
        (this.hUJ++, 5 === sJ++) && (null === (JJ = (cJ = this.callbacks).IjJ) || void 0 === JJ || JJ.call(cJ), sJ = 0)
      }
      Qr() {
        this.dispose(), this.hZJ.Qr()
      }
      cn() {
        this.dispose(), this.hZJ.cn()
      }
    }
    let sJ = 0;
    var nJ = ZJ(3174);
    class GJ extends DJ {
      constructor(JJ) {
        super(JJ, {
          IjJ: () => {
            (0, XJ.o)(!0) && (0, FJ.YV)()
          },
          KjJ: (JJ, cJ) => {
            var ZJ;
            null === (ZJ = (0, AJ.h)()) || void 0 === ZJ || ZJ.SG(JJ, cJ)
          }
        }, {
          fjJ: !1
        }), (0, nJ.h)(JJ)
      }
      rV(JJ, cJ) {
        return !!(0, nJ.o)((0, nJ.e)(), this.hZJ, JJ, cJ) && (this.MjJ(), !0)
      }
      EjJ(JJ) {
        this.bjJ(), super.EjJ(JJ), (0, nJ.h)(JJ)
      }
      Qr() {
        super.Qr(), this.bjJ()
      }
      bjJ() {
        this.hZJ.Kr.en.lK = void 0
      }
    }
    var fJ = ZJ(17),
      xJ = ZJ(1725),
      rJ = ZJ(1599),
      vJ = ZJ(35551);

    function mJ(JJ, cJ, ZJ, FJ, UJ) {
      let eJ = arguments.length > 5 && void 0 !== arguments[5] && arguments[5];
      if (!JJ.qE.YcJ(JJ.XM)) return console.log("Got resync inven but don't have inven component"), void cJ.acknowledge(FJ);
      eJ && console.error("Had to sync inven"), cJ.J9(FJ, UJ) && ZJ.Uf("chestToggleFromServer", !1, !0), ZJ.Uf("syncedInvenFromServer")
    }
    var QJ = ZJ(37914),
      EJ = ZJ(37922),
      VJ = ZJ(37003),
      KJ = ZJ(36775),
      yJ = ZJ(535),
      SJ = ZJ(37397);

    function IJ(JJ, cJ, ZJ) {
      const FJ = function(JJ) {
          const cJ = new Int32Array(JJ.length * SJ.g);
          return JJ.forEach(((JJ, ZJ) => {
            const FJ = ZJ * SJ.g;
            if (4 === JJ.length) {
              const [ZJ, UJ, eJ, XJ] = JJ;
              cJ.set([ZJ, UJ, eJ, ZJ, UJ, eJ, XJ], FJ)
            } else {
              const [ZJ, UJ, eJ, XJ, AJ, qJ, jJ] = JJ;
              cJ.set([ZJ, eJ, AJ, UJ, XJ, qJ, jJ], FJ)
            }
          })), cJ
        }(ZJ),
        UJ = (cJ, ZJ, FJ, UJ) => {
          JJ.setBlockNoMulti(cJ, ZJ, FJ, UJ, !0)
        };
      JJ.client.gameRecorder.isCapturing() ? (0, SJ.sb)(FJ, (0, SJ.qb)(FJ), UJ) : JJ.ih.zh.zk(FJ, {
        Rk: UJ,
        isHookId: cJ => JJ.blockChangeHasHooks(cJ),
        watched: () => function(JJ, cJ, ZJ) {
          const FJ = [],
            UJ = (JJ, cJ, ZJ) => {
              FJ.push(JJ, cJ, ZJ)
            },
            eJ = new Set;
          for (let XJ = 0; XJ < ZJ.length; XJ += SJ.g)
            for (let cJ = (0, yJ.Y)(ZJ[XJ]); cJ <= (0, yJ.Y)(ZJ[XJ + 3]); cJ++)
              for (let FJ = (0, yJ.Y)(ZJ[XJ + 1]); FJ <= (0, yJ.Y)(ZJ[XJ + 4]); FJ++)
                for (let AJ = (0, yJ.Y)(ZJ[XJ + 2]); AJ <= (0, yJ.Y)(ZJ[XJ + 5]); AJ++) {
                  const ZJ = `${cJ}|${FJ}|${AJ}`;
                  eJ.has(ZJ) || (eJ.add(ZJ), JJ.blockDataOwner.forEachDataCell(cJ, FJ, AJ, UJ))
                }
          return cJ.forEachCell(UJ), Int32Array.from(FJ)
        }(JJ, cJ, FJ)
      }), JJ.ih.rJJ()
    }
    var MJ = ZJ(36548),
      bJ = ZJ(37927),
      wJ = ZJ(37931),
      WJ = ZJ(889),
      gJ = ZJ(1734);
    var HJ = ZJ(3933);

    function PJ(JJ) {
      const cJ = JJ.zh;
      let ZJ = 0,
        eJ = -1,
        XJ = -1 / 0,
        AJ = null,
        jJ = !0;
      const YJ = () => {
        if (++ZJ % 10 !== 0) return;
        const YJ = (0, FJ.getLastReceivedPacketId)();
        if (YJ <= eJ) return;
        const [hJ, DJ, sJ] = JJ.qE.Om(JJ.XM), nJ = ! function(JJ) {
          var cJ;
          let ZJ = null === (cJ = JJ.qE.RcJ(JJ.XM)) || void 0 === cJ ? void 0 : cJ.Yn;
          if (void 0 === ZJ) return !1;
          const FJ = new Set;
          for (; void 0 !== ZJ && !FJ.has(ZJ);) {
            var UJ;
            FJ.add(ZJ);
            const cJ = JJ.qE.getState(ZJ, "smoothToServerPos"),
              eJ = Array.isArray(cJ) ? null : null === cJ || void 0 === cJ ? void 0 : cJ.serverPosition;
            if (eJ) {
              const cJ = JJ.qE.Om(ZJ);
              if (Math.abs(cJ[0] - eJ[0]) > 10 || Math.abs(cJ[1] - eJ[1]) > 10 || Math.abs(cJ[2] - eJ[2]) > 10) return !0
            }
            ZJ = null === (UJ = JJ.qE.RcJ(ZJ)) || void 0 === UJ ? void 0 : UJ.Yn
          }
          return !1
        }(JJ) && function(JJ, cJ, ZJ, FJ) {
          const eJ = UJ.c.Kn;
          for (let UJ = 0; UJ < JJ.length; UJ++) {
            const XJ = JJ[UJ];
            if (!(0, HJ.i)(cJ, ZJ, FJ, XJ[0] * eJ, XJ[1] * eJ, XJ[2] * eJ)) return !1
          }
          return !0
        }(cJ.Ff.rn, hJ, DJ, sJ), GJ = null === AJ || Math.abs(hJ - AJ[0]) > 8 || Math.abs(DJ - AJ[1]) > 8 || Math.abs(sJ - AJ[2]) > 8, fJ = !jJ || GJ || performance.now() - XJ >= 1e4;
        jJ = nJ, nJ && fJ && (eJ = YJ, XJ = performance.now(), AJ = [hJ, DJ, sJ], (0, FJ.sendColyMessage)(qJ.lg, {
          OX: YJ
        }))
      };
      return JJ.on("Hh", YJ), () => {
        JJ.off("Hh", YJ)
      }
    }
    var kJ = ZJ(35797),
      pJ = ZJ(250),
      dJ = ZJ.n(pJ),
      zJ = ZJ(5817),
      NJ = ZJ(37038),
      OJ = ZJ(36759),
      TJ = ZJ(36738),
      CJ = ZJ(3935),
      uJ = ZJ(37108),
      iJ = ZJ(36876),
      RJ = ZJ(36302),
      LJ = ZJ(36655),
      aJ = ZJ(37940),
      BJ = ZJ(35783),
      tJ = ZJ(35789),
      oJ = ZJ(37945),
      lJ = ZJ(37948),
      Jc = ZJ(3126),
      cc = ZJ(1406),
      Zc = ZJ(2393),
      Fc = ZJ(2473),
      Uc = ZJ(37239),
      ec = ZJ(36070),
      Xc = ZJ(4171),
      Ac = ZJ(37992),
      qc = ZJ(37098),
      jc = ZJ(3709),
      Yc = ZJ(36555),
      hc = ZJ(36144),
      Dc = ZJ(37112),
      sc = ZJ(37950),
      nc = ZJ(37968),
      Gc = ZJ(36296);
    class fc {
      constructor(JJ, cJ, ZJ, FJ) {
        this.gameNameWithVariation = JJ, this.ih = ZJ, this.connectionResume = FJ, this.stateReplicationHandler = void 0, this.stopChunkReports = () => {}, this.replayResume = null, this.stateReplicationHandler = new nc.e(cJ, this.ih)
      }
      setupStateReplicationHandlers() {
        this.stateReplicationHandler.setup(), (0, FJ.onGameResetOnce)((() => {
          this.stateReplicationHandler.dispose()
        }))
      }
      EjJ(JJ) {
        this.stateReplicationHandler.dispose(), this.stateReplicationHandler = new nc.e(JJ, this.ih), this.stateReplicationHandler.setup()
      }
      clearBlockRules() {
        const JJ = this.ih.zh;
        JJ.cZJ = new Set, JJ.UZJ = new Set, JJ.ZZJ = new Set, JJ.eZJ = new Set, JJ.FZJ = [], JJ.XZJ = [], JJ.IH = new Set, JJ.uc = [], JJ.WH = []
      }
      clearUiRequestsAndQTEs() {
        Xc.c.reset(), (0, EJ.e)()
      }
      startChunkReports() {
        const JJ = function(JJ) {
            let cJ = null,
              ZJ = -1 / 0,
              UJ = null;
            const eJ = () => {
                UJ = null;
                const eJ = Math.ceil(JJ.dV[0]),
                  XJ = Math.ceil(JJ.dV[1]);
                cJ && cJ[0] === eJ && cJ[1] === XJ || (cJ = [eJ, XJ], ZJ = performance.now(), (0, FJ.sendColyMessage)(qJ.jg, {
                  oX: eJ,
                  lX: XJ
                }))
              },
              XJ = () => {
                null === UJ && (UJ = setTimeout(eJ, Math.max(0, ZJ + 250 - performance.now())))
              };
            return eJ(), JJ.on("addRemoveDistanceChanged", XJ), () => {
              JJ.off("addRemoveDistanceChanged", XJ), null !== UJ && (clearTimeout(UJ), UJ = null)
            }
          }(this.ih.zh),
          cJ = PJ(this.ih);
        this.stopChunkReports = () => {
          JJ(), cJ()
        }
      }
      restartChunkStreaming() {
        (0, LJ.j)(this.ih, (0, AJ.d)().recentChunkEdits.chunksEditedSince(this.connectionResume.getDroppedAt() - aJ.b)), this.startChunkReports()
      }
      setupOnMessageListeners(JJ, cJ) {
        const ZJ = this.ih,
          UJ = this.gameNameWithVariation;
        JJ.Rm(qJ.wc, (JJ => {
          let {
            EJ: cJ,
            VJ: FJ,
            KJ: UJ,
            yJ: eJ,
            SJ: XJ,
            IJ: AJ,
            MJ: qJ,
            bJ: jJ,
            wJ: YJ
          } = JJ;
          if (!ZJ.qE.KJJ(cJ, "itemState")) return void(0, OJ.k)(ZJ, cJ, [XJ, AJ, qJ], FJ, {
            amount: UJ,
            attributes: JSON.parse(eJ),
            bJ: jJ,
            size: YJ
          });
          const hJ = ZJ.qE.getState(cJ, "itemState");
          hJ.amount = UJ, hJ.bJ = jJ, hJ.creationTime = Date.now(), (0, TJ.setServerPosition)(ZJ.qE.getState(cJ, "smoothToServerPos"), XJ, AJ, qJ)
        })), JJ.Rm(qJ.gb, (JJ => {
          (0, MJ.c)(ZJ).setCantPickUp(JJ, !0), ZJ.qE.KJJ(JJ, "itemState") && (ZJ.qE.getState(JJ, "itemState").bJ = !0)
        })), JJ.Rm(qJ.Xd, (JJ => {
          (0, MJ.c)(ZJ).setCantPickUp(JJ, !1), ZJ.qE.KJJ(JJ, "itemState") && (ZJ.qE.getState(JJ, "itemState").bJ = !1)
        })), JJ.Rm(qJ.Yc, (JJ => {
          xJ.b.applyNewClientOptions(JJ)
        })), JJ.Rm(qJ.ad, (JJ => {
          let {
            eId: cJ,
            settings: FJ
          } = JJ;
          (0, hc.e)(cJ);
          for (const ZJ in FJ)(0, hc.b)(cJ, ZJ, FJ[ZJ]);
          if ("canSee" in FJ && ZJ.qE.KJJ(cJ, "hidingMeshManager")) {
            const JJ = ZJ.qE.getState(cJ, "hidingMeshManager");
            JJ.canSee = (0, Dc.e)("canSee", FJ.canSee), JJ._forceUpdate = !0
          }
        })), JJ.Rm(qJ.af, (JJ => {
          let {
            WF: cJ,
            gF: UJ,
            HF: eJ,
            PF: XJ
          } = JJ;
          const AJ = [UJ, eJ, XJ];
          ZJ.qE.setPosition(ZJ.XM, AJ), (0, FJ.sendColyMessage)(qJ.Gg, {
            bY: cJ,
            wY: CJ.e
          }), fJ.i.Uf("localPlayerTeleported", {
            pos: AJ,
            isCorrection: !1
          })
        })), JJ.Rm(qJ.ld, (JJ => {
          let {
            OZ: cJ,
            TZ: ZJ,
            CZ: FJ,
            uZ: UJ
          } = JJ;
          this.stateReplicationHandler.setUpIfQueued(cJ);
          const eJ = [ZJ, FJ, UJ];
          fJ.i.Uf(`otherPlayerTeleported|${cJ}`, {
            pos: eJ
          })
        })), JJ.Rm(qJ.Ad, (JJ => {
          let {
            oJ: cJ,
            lJ: UJ,
            Jc: eJ,
            Zc: XJ,
            Fc: AJ,
            Uc: jJ,
            Xc: YJ,
            qc: hJ,
            Ac: DJ,
            hc: sJ
          } = JJ;
          const nJ = [UJ, eJ, XJ];
          ZJ.qE.setPosition(ZJ.XM, nJ);
          const GJ = ZJ.qE.TJJ(ZJ.XM),
            xJ = ZJ.qE.iH(ZJ.XM);
          dJ().set(xJ.UH, 0, 0, 0), dJ().set(xJ.jH, 0, 0, 0), dJ().set(xJ.jf, AJ, jJ, YJ), xJ.YH(), GJ._flying = null !== sJ, sJ ? (GJ.flyAccel.Dc = sJ.Dc, GJ.flyAccel.sc = sJ.sc) : GJ.flyAccel.reset(), hJ && GJ.movementType === zJ.p.GLIDING && (GJ.jc = hJ.jc, dJ().copy(GJ.Yc, hJ.Yc)), (0, FJ.sendColyMessage)(qJ.Gg, {
            bY: cJ,
            wY: CJ.e
          }), fJ.i.Uf("localPlayerTeleported", {
            pos: nJ,
            isCorrection: !0
          })
        }));

        function eJ() {
          return ZJ.qE.hcJ(ZJ.XM)
        }
        JJ.Rm(qJ.qb, (JJ => {
          let {
            chatMsgId: cJ,
            content: ZJ,
            chatterEId: FJ
          } = JJ;
          fJ.i.Uf("chat", {
            serverChatMsgId: cJ,
            content: ZJ,
            chatterEId: FJ
          }, !0)
        })), JJ.Rm(qJ.qd, (JJ => {
          Zc.d.onReceiveColyseusPing(JJ)
        })), JJ.Rm(qJ.ye, (JJ => {
          let {
            key: cJ,
            value: ZJ
          } = JJ;
          (0, rJ.setCookie)(UJ, cJ, ZJ)
        })), JJ.Rm(qJ.Fe, (JJ => {
          fJ.i.Uf("setDiscordReportKey", JJ)
        })), (0, FJ.onGameResetOnce)((() => {
          this.stopChunkReports()
        })), JJ.Rm(qJ.nc, (cJ => {
          const {
            ZU: UJ,
            FU: eJ
          } = cJ;
          if ((0, FJ.setAdjustment)(eJ), this.connectionResume.onInitialInfo(cJ.UU, cJ.eU), FJ.offlineInputReplay.GV(cJ.XU), this.connectionResume.isResuming()) {
            console.log("Resumed the connection as eId", UJ);
            try {
              null === cJ.AU && (0, AJ.d)().client.inventoryPrediction.dropPending(), this.stopChunkReports(), this.clearBlockRules(), xJ.b.apply({
                shopInfo: null,
                _shopVersion: gJ.d
              });
              const FJ = ZJ.qE.DcJ(ZJ.XM);
              FJ.kJ && (FJ.chestClosed(), fJ.i.Uf("chestToggleFromServer", !1, !0)), this.clearUiRequestsAndQTEs(), fJ.i.Uf("initInfoReceived", JJ)
            } finally {
              const JJ = null === cJ.AU ? null : {
                sync: null,
                endSeq: null
              };
              this.replayResume = JJ, this.connectionResume.onResumeInitialInfo(cJ.AU, (() => {
                JJ.endSeq = (0, AJ.d)().client.inventoryPrediction.lastActionSeq
              })), null === JJ && this.restartChunkStreaming()
            }
          } else console.log("Local client is eId", UJ), fJ.i.Uf("loadingScreenState", "loadingPage:loadingWorld"), ZJ.IJJ = UJ, ZJ.qE.KJJ(ZJ.XM, ZJ.qE.names.entityName) && ZJ.qE.vI(ZJ.XM, ZJ.qE.names.entityName), (0, AJ.d)().setEntityName(ZJ.IJJ, (0, AJ.d)().getRawEntityName(ZJ.XM)), ZJ.pI[ZJ.IJJ] = {}, ZJ.qE.xI(ZJ.XM, ZJ.qE.names.entityName), fJ.i.Uf("initInfoReceived", JJ), this.startChunkReports(), XJ.client.onServerConnectionFinalised()
        })), JJ.Rm(qJ.me, (() => {
          this.connectionResume.isResuming() ? this.connectionResume.onResumed((() => {
            const JJ = this.replayResume;
            if (this.replayResume = null, !JJ) return;
            this.restartChunkStreaming();
            const {
              inventoryPrediction: cJ
            } = (0, AJ.d)().client, {
              sync: UJ
            } = JJ, eJ = new Set(FJ.offlineInputReplay.takeDroppedActions());
            if (UJ) {
              var XJ;
              const FJ = null !== (XJ = JJ.endSeq) && void 0 !== XJ ? XJ : cJ.lastActionSeq;
              cJ.forget((JJ => JJ > UJ.OJ && JJ <= FJ || eJ.has(JJ))), mJ(ZJ, cJ, fJ.i, UJ.OJ, UJ.load)
            } else cJ.dropPending(), cJ.askForSnapshot()
          })) : console.warn("ResumeComplete arrived without a resume")
        })), JJ.Rm(qJ.df, (JJ => {
          fJ.i.Uf("TopRightHelper", JJ, !0)
        })), JJ.Rm(qJ.Dd, (JJ => {
          let {
            type: cJ,
            location1: ZJ,
            location2: FJ,
            location3: UJ,
            score: eJ
          } = JJ;
          (0, Fc.x)({
            type: cJ,
            location1: ZJ,
            location2: FJ,
            location3: UJ,
            score: eJ
          })
        })), JJ.Rm(qJ.je, (JJ => {
          let {
            type: cJ,
            resourceType: ZJ,
            amount: FJ,
            category: UJ,
            itemName: eJ
          } = JJ;
          (0, Fc.B)({
            type: cJ,
            resourceType: ZJ,
            amount: FJ,
            category: UJ,
            itemName: eJ
          })
        })), JJ.Rm(qJ.Q, (JJ => {
          ZJ.zh.cZJ.add(JJ), ZJ.zh.UZJ.delete(JJ)
        })), JJ.Rm(qJ.W, (JJ => {
          ZJ.zh.UZJ.add(JJ), ZJ.zh.cZJ.delete(JJ)
        })), JJ.Rm(qJ.Yd, (JJ => {
          ZJ.zh.UZJ.delete(JJ), ZJ.zh.cZJ.delete(JJ)
        })), JJ.Rm(qJ.S, (JJ => {
          ZJ.zh.ZZJ.add(JJ), ZJ.zh.eZJ.delete(JJ)
        })), JJ.Rm(qJ.cb, (JJ => {
          ZJ.zh.eZJ.add(JJ), ZJ.zh.ZZJ.delete(JJ)
        })), JJ.Rm(qJ.ae, (JJ => {
          ZJ.zh.eZJ.delete(JJ), ZJ.zh.ZZJ.delete(JJ)
        })), JJ.Rm(qJ.R, (JJ => {
          (0, YJ.gb)(JJ, ZJ.zh.XZJ), (0, YJ.gb)(JJ, ZJ.zh.FZJ), ZJ.zh.FZJ.push(JJ)
        })), JJ.Rm(qJ._, (JJ => {
          (0, YJ.gb)(JJ, ZJ.zh.FZJ), (0, YJ.gb)(JJ, ZJ.zh.XZJ), ZJ.zh.XZJ.push(JJ)
        })), JJ.Rm(qJ.Zd, (JJ => {
          (0, YJ.gb)(JJ, ZJ.zh.FZJ), (0, YJ.gb)(JJ, ZJ.zh.XZJ)
        })), JJ.Rm(qJ.vf, (JJ => {
          let {
            ue: cJ,
            ie: FJ
          } = JJ;
          FJ ? ZJ.zh.IH.delete(cJ) : ZJ.zh.IH.add(cJ)
        })), JJ.Rm(qJ.uf, (JJ => {
          let {
            uc: cJ,
            Rc: FJ
          } = JJ;
          XJ.updateWalkThroughRect(ZJ.XM, cJ, FJ)
        })), (0, FJ.onGameResetOnce)((() => {
          this.clearBlockRules()
        })), JJ.Rm(qJ.Ye, (JJ => {
          (0, QJ.c)(JJ)
        })), JJ.Rm(qJ.dc, (JJ => {
          VJ.c.applyServerUpdate(JJ)
        })), JJ.Rm(qJ.kb, (JJ => {
          XJ.applyServerBlocks((() => {
            ! function(JJ, cJ) {
              for (const {
                  iF: ZJ,
                  RF: FJ
                }
                of cJ) {
                const cJ = KJ.d[FJ];
                if (cJ) {
                  const {
                    compX: FJ,
                    compY: UJ,
                    compZ: eJ,
                    mainMultiblock: XJ
                  } = cJ;
                  JJ.fK(ZJ[0] - FJ, ZJ[1] - UJ, ZJ[2] - eJ, XJ)
                }
              }
              for (const {
                  iF: ZJ,
                  RF: FJ,
                  LF: UJ
                }
                of cJ) JJ.setBlockNoMulti(ZJ[0], ZJ[1], ZJ[2], FJ, !0), JJ.blockDataOwner.setBlockData(ZJ[0], ZJ[1], ZJ[2], null === UJ ? void 0 : JSON.parse(UJ)), JJ.blockAdded(ZJ[0], ZJ[1], ZJ[2], FJ)
            }(XJ, JJ)
          })), fJ.i.Uf("changeBlockFail", JJ), XJ.client.triggerGameCallback("onChangeBlockFail", JJ), fJ.i.Uf("EditBoard", {
            pos: null
          }), fJ.i.Uf("EditCodeBlock", {
            pos: null,
            canChangePos: null
          })
        })), JJ.Rm(qJ.od, (JJ => {
          let {
            pickUpItems: cJ,
            pickUpAckSeq: ZJ
          } = JJ;
          for (const {
              name: FJ,
              amount: UJ,
              attributes: XJ
            }
            of cJ) eJ().pickUpItem({
            name: FJ,
            amount: UJ,
            typeObj: OJ.A[FJ],
            attributes: XJ
          });
          (0, AJ.d)().client.inventoryPrediction.serverChangeApplied(ZJ)
        })), JJ.Rm(qJ.He, (JJ => {
          let {
            index: cJ,
            name: FJ,
            amount: UJ,
            attributes: eJ,
            setSlotAckSeq: XJ
          } = JJ;
          const qJ = ZJ.qE.DcJ(ZJ.XM);
          (cJ < qJ.playerInventory.numSlots || qJ.kJ || qJ.inCreative) && qJ.setItemSlot(cJ, FJ, UJ, eJ), (0, AJ.d)().client.inventoryPrediction.serverChangeApplied(XJ)
        })), JJ.Rm(qJ.Xe, (JJ => {
          let {
            HJ: cJ,
            NJ: FJ,
            OJ: UJ
          } = JJ;
          const {
            inventoryPrediction: eJ
          } = (0, AJ.d)().client, XJ = () => {
            ZJ.qE.DcJ(ZJ.XM).loadFromString(cJ)
          };
          this.replayResume && (this.replayResume.sync = {
            OJ: UJ,
            load: XJ
          }), mJ(ZJ, eJ, fJ.i, UJ, XJ, FJ)
        })), JJ.Rm(qJ.uc, (JJ => {
          (0, AJ.d)().client.inventoryPrediction.acknowledge(JJ)
        })), JJ.Rm(qJ.B, (JJ => {
          let {
            iZ: cJ,
            RZ: ZJ,
            LZ: FJ,
            aZ: UJ
          } = JJ;
          (0, AJ.d)().client.itemDropPrediction.onActionItemDrops(cJ, ZJ, FJ, UJ)
        })), JJ.Rm(qJ.zb, (JJ => {
          eJ().clearInventory(), (0, AJ.d)().client.inventoryPrediction.serverChangeApplied(JJ)
        })), JJ.Rm(qJ.Gc, (JJ => {
          let {
            leaveEventType: cJ,
            category: ZJ,
            subCategory: FJ,
            value: UJ
          } = JJ;
          (0, Fc.J)({
            leaveEventType: cJ,
            category: ZJ,
            subCategory: FJ,
            value: UJ
          })
        })), JJ.Rm(qJ.Ib, (JJ => {
          let {
            cat1: cJ,
            cat2: ZJ,
            cat3: FJ,
            value: UJ
          } = JJ;
          (0, Fc.t)({
            cat1: cJ,
            cat2: ZJ,
            cat3: FJ,
            value: UJ
          })
        }));
        const XJ = (0, AJ.d)();
        JJ.Rm(qJ.Bb, (JJ => {
          XJ.applyServerBlocks((() => {
            IJ(XJ, VJ.c, JJ)
          }))
        })), JJ.Rm(qJ.Ke, (JJ => {
          fJ.i.Uf("setSelectedInventorySlotI", JJ, !0)
        })), JJ.Rm(qJ.Ec, (JJ => {
          let {
            category: cJ,
            timeframe: ZJ,
            data: FJ
          } = JJ;
          fJ.i.Uf("leaderboardResponse", {
            category: cJ,
            timeframe: ZJ,
            data: FJ
          })
        })), JJ.Rm(qJ.P, (JJ => {
          let {
            rU: cJ,
            vU: ZJ
          } = JJ;
          this.stateReplicationHandler.setUpIfQueued(cJ), cJ = (0, kJ.c)(cJ), (0, AJ.d)().client.gameRecorder.recordBulletShot(cJ, ZJ), fJ.i.Uf(`bulletShot|${cJ}`, {
            bulletDirections: ZJ
          })
        })), JJ.Rm(qJ.fc, (JJ => {
          let {
            ac: cJ,
            Bc: ZJ
          } = JJ;
          fJ.i.Uf("damagedByOtherPlayer", {
            ac: cJ,
            direction: ZJ
          }, !0)
        })), JJ.Rm(qJ.wd, (JJ => {
          fJ.i.Uf("playerKilled", JJ, !0), (0, AJ.d)().client.gameRecorder.recordPlayerKilled(JJ.deadEId, JJ.killerEId, JJ.withItem, JJ.killstreak)
        })), JJ.Rm(qJ.Mb, (JJ => {
          fJ.i.Uf("customKillfeed", JJ, !0), (0, AJ.d)().client.gameRecorder.recordCustomKillfeed(JJ.killer, JJ.victim, JJ.withItem)
        })), JJ.Rm(qJ.Hd, (JJ => {
          let {
            yZ: cJ,
            SZ: FJ
          } = JJ;
          this.stateReplicationHandler.setUpIfQueued(cJ);
          const UJ = ZJ.qE.WcJ(cJ);
          null !== UJ && void 0 !== UJ && UJ.isGun() && UJ.reload(Date.now(), FJ)
        })), JJ.Rm(qJ.We, (() => {
          fJ.i.Uf("showShopTutorial", null, !0)
        })), JJ.Rm(qJ.Bd, (JJ => {
          fJ.i.Uf("progressBarUpdate", JJ, !0)
        })), JJ.Rm(qJ.rc, (JJ => {
          fJ.i.Uf("middleScreenBarInitiate", {
            duration: JJ.nJ,
            GJ: JJ.GJ,
            horizBarRemOffset: JJ.fJ
          }, !0)
        })), JJ.Rm(qJ.Qd, (() => {
          fJ.i.Uf("middleScreenBarRemove", !0)
        })), JJ.Rm(qJ.pe, (JJ => {
          let {
            hU: cJ,
            iJ: FJ
          } = JJ;
          const UJ = FJ ? (0, qc.i)(ZJ, FJ) : void 0;
          fJ.i.Uf("sendHitmarker", {
            hU: cJ,
            screenPos: UJ
          }, !0)
        })), JJ.Rm(qJ.Ce, (JJ => {
          let {
            id: cJ,
            position: ZJ,
            style: FJ,
            nc: UJ,
            vc: eJ
          } = JJ;
          fJ.i.Uf("setDirectionArrow", {
            id: cJ,
            position: ZJ,
            style: FJ,
            text: (0, qJ.q)(UJ),
            vc: eJ
          }, !0)
        })), JJ.Rm(qJ.vb, (JJ => {
          let {
            id: cJ
          } = JJ;
          fJ.i.Uf("clearDirectionArrow", {
            id: cJ
          }, !0)
        })), JJ.Rm(qJ.F, (JJ => {
          let {
            mc: cJ,
            Qc: FJ,
            animationScript: UJ,
            Ec: eJ,
            Vc: XJ,
            Kc: qJ,
            yc: jJ
          } = JJ;
          cJ = (0, kJ.c)(cJ);
          const YJ = null === UJ && null !== qJ ? (0, bJ.h)(qJ, jJ) : UJ;
          (0, AJ.d)().client.gameRecorder.recordAnimateEntity(cJ, FJ, YJ, eJ, XJ), (0, MJ.c)(ZJ).animations.animateEntity(cJ, FJ, UJ, eJ, XJ, qJ, jJ), null !== UJ || cJ === ZJ.XM && FJ === Yc.f.Emote && (0, AJ.d)().client.cameraController.endTemporaryThirdPerson()
        })), JJ.Rm(qJ.pf, (JJ => {
          let {
            BZ: cJ,
            tZ: ZJ
          } = JJ;
          if (XJ.LO(cJ[0], cJ[1], cJ[2])) {
            const JJ = (0, AJ.d)().Qm(cJ[0], cJ[1], cJ[2]);
            (0, AJ.d)().updateMailboxContents(cJ[0], cJ[1], cJ[2], JJ, ZJ)
          }
        })), JJ.Rm(qJ.sb, (JJ => {
          let {
            tc: cJ,
            oc: FJ,
            lc: UJ,
            JZ: eJ,
            cZ: XJ,
            ZZ: qJ,
            FZ: jJ,
            UZ: YJ
          } = JJ;
          const hJ = ZJ.qE.DcJ(ZJ.XM);
          if (qJ) {
            const {
              PJ: JJ,
              OJ: cJ
            } = YJ;
            return (0, AJ.d)().client.inventoryPrediction.J9(cJ, (() => {
              hJ.chestRefreshed(FJ, UJ, eJ, jJ, JJ)
            })) && fJ.i.Uf("chestToggleFromServer", !1, !0), void fJ.i.Uf("chestRefreshedFromServer")
          }(cJ || hJ.kJ) && (cJ ? (hJ.chestOpened(FJ, UJ, eJ, XJ, jJ), null !== XJ && (0, AJ.d)().client.ironChestPasskeyCache.onChestOpened(eJ, XJ)) : hJ.chestClosed(), fJ.i.Uf("chestToggleFromServer", cJ, !0))
        })), JJ.Rm(qJ.Ob, (JJ => {
          let {
            craftingRecipeItemName: cJ,
            recipesForItem: FJ
          } = JJ;
          cJ ? XJ.craftingManager.editRecipesForPlayer(ZJ.XM, cJ, FJ) : XJ.craftingManager.resetAllPlayerRecipes(ZJ.XM), fJ.i.Uf("craftingRecipesEdited", {
            itemName: cJ,
            recipesForItem: FJ
          })
        })), JJ.Rm(qJ.Ne, (JJ => {
          let {
            vehicleEId: cJ,
            overrides: ZJ
          } = JJ;
          (0, AJ.d)().applyRiddenVehicleSettingOverrides(cJ, ZJ)
        })), JJ.Rm(qJ.rf, (JJ => {
          let {
            DU: cJ,
            sU: FJ,
            nU: UJ
          } = JJ;
          const eJ = ZJ.qE.TJJ(ZJ.XM).physicsState.type === zJ.s.SLEEPING && cJ === zJ.s.DEFAULT;
          (0, AJ.d)().updatePositionAndPhysics(ZJ.XM, {
            type: cJ,
            tier: FJ
          }, !0, UJ), eJ && (0, AJ.d)().updateHeldVehicleStatus()
        })), JJ.Rm(qJ.mb, (JJ => {
          let {
            xJ: cJ,
            rJ: FJ
          } = JJ;
          ZJ.qE.jcJ(ZJ.XM).setPose(cJ, FJ)
        })), JJ.Rm(qJ.ne, (JJ => {
          (0, sc.e)(JJ)
        })), JJ.Rm(qJ.ud, (JJ => {
          for (const cJ of JJ)(0, uJ.x)(cJ);
          fJ.i.Uf("playerCosmeticsUpdated", JJ, !0)
        })), JJ.Rm(qJ.K, (JJ => {
          for (const cJ of JJ)(0, ec.f)(ZJ, cJ)
        })), JJ.Rm(qJ.Lc, (JJ => {
          let {
            TJ: cJ,
            CJ: FJ,
            RJ: UJ,
            LJ: eJ,
            aJ: AJ,
            BJ: qJ,
            tJ: jJ
          } = JJ;
          this.stateReplicationHandler.setUpIfQueued(cJ), cJ = (0, kJ.c)(cJ);
          const YJ = ZJ.qE.KcJ(cJ);
          if (YJ && (YJ.lastHurtTime = performance.now()), (0, NJ.playRigHurt)(ZJ, cJ, qJ), fJ.i.Uf("lifeformHurt", {
              eId: cJ,
              tJ: jJ
            }), FJ) {
            const JJ = (0, qc.i)(ZJ, FJ.iJ);
            fJ.i.Uf("yourAttackHit", {
              hU: eJ,
              screenPos: JJ,
              hitSelf: cJ === ZJ.XM
            })
          }
          cJ === ZJ.XM && (XJ.shakePlayerCamera(cJ, AJ / 40, 200), fJ.i.Uf("closeShopOnDamaged", null), fJ.i.Uf("damagedByOtherPlayer", {
            ac: null,
            direction: qJ,
            aJ: AJ
          }, !0));
          const hJ = ZJ.qE.Om(cJ);
          if (hJ && (UJ || eJ)) {
            const JJ = [hJ[0], hJ[1] + 1, hJ[2]];
            UJ && (0, iJ.j)(ZJ, iJ.D, JJ, 15), eJ && (0, iJ.j)(ZJ, iJ.q, JJ, 10)
          }
        })), JJ.Rm(qJ.Kc, (JJ => {
          let {
            Le: cJ,
            ae: FJ,
            Be: UJ
          } = JJ;
          (0, MJ.c)(ZJ).setHealthFrac((0, kJ.c)(cJ), UJ), fJ.i.Uf("lifeformHealthChanged", {
            eId: (0, kJ.c)(cJ),
            ae: FJ,
            Be: UJ
          })
        })), JJ.Rm(qJ.L, (JJ => {
          let {
            CF: cJ,
            uF: FJ
          } = JJ;
          (0, AJ.d)().playerAttacked(ZJ.XM, cJ, FJ)
        })), JJ.Rm(qJ.Cc, (JJ => {
          (0, AJ.d)().client.leaveGameUnwanted({
            reason: JJ,
            requiresRefresh: !1,
            canReconnect: !1,
            automaticallyReconnect: !1
          }), (0, cc.navigatePreserveSearch)("/")
        })), JJ.Rm(qJ.Nd, (JJ => {
          let {
            IZ: cJ,
            MZ: ZJ,
            bZ: FJ
          } = JJ;
          eJ().removeItemName(cJ, ZJ), (0, AJ.d)().client.inventoryPrediction.serverChangeApplied(FJ)
        })), JJ.Rm(qJ.we, (JJ => {
          const {
            sq: cJ,
            CcJ: FJ
          } = (0, RJ.f)([JJ[0], JJ[1], JJ[2]]);
          Gc.c.setLookDirection(ZJ, cJ, FJ), (0, LJ.s)(cJ, FJ);
          const UJ = ZJ.qE.jcJ(ZJ.XM);
          UJ && (UJ.heading = cJ)
        })), JJ.Rm(qJ.xe, (JJ => {
          XJ.client.cameraController.setCameraZoom(JJ)
        })), JJ.Rm(qJ.Te, (JJ => {
          let {
            kF: cJ,
            pF: FJ
          } = JJ;
          XJ.shakePlayerCamera(ZJ.XM, cJ, FJ)
        })), JJ.Rm(qJ.Fb, (JJ => {
          (0, Jc.onCosmeticPackGranted)(JJ)
        })), JJ.Rm(qJ.se, (JJ => {
          fJ.i.Uf("serverUpdating", Date.now() + JJ, !0)
        })), JJ.Rm(qJ.Wc, wJ.d), JJ.Rm(qJ.fd, (JJ => {
          let {
            id: cJ,
            mU: ZJ
          } = JJ;
          const {
            type: UJ,
            params: eJ
          } = (0, Ac.d)(ZJ), XJ = {
            ...eJ
          };
          for (const FJ of Ac.b) FJ in XJ && XJ[FJ] && (XJ[FJ] = (0, qJ.q)(XJ[FJ]));
          Xc.c.queueQTE(cJ, UJ, XJ).getResult().then((JJ => {
            "boolean" === typeof JJ && (0, FJ.sendColyMessage)(qJ.di, {
              qteId: cJ,
              qteResponse: JJ
            })
          }))
        })), JJ.Rm(qJ.Sd, (JJ => {
          Xc.c.cancelQTE(JJ)
        })), (0, FJ.onGameResetOnce)((() => {
          Xc.c.reset()
        })), JJ.Rm(qJ.id, (JJ => {
          let {
            id: cJ,
            clientParameters: ZJ
          } = JJ;
          (0, EJ.f)(cJ, ZJ)
        })), JJ.Rm(qJ.Ud, (JJ => {
          (0, EJ.i)(JJ)
        })), JJ.Rm(qJ.lf, (JJ => {
          let {
            text: cJ,
            id: ZJ
          } = JJ;
          (0, EJ.k)(ZJ, cJ, (JJ => {
            (0, FJ.sendColyMessage)(qJ.wj, {
              Gj: ZJ,
              fj: JJ,
              xj: 5
            })
          }))
        })), JJ.Rm(qJ.Sb, (JJ => {
          let {
            vJ: cJ,
            mJ: ZJ,
            QJ: FJ,
            GU: UJ,
            fU: eJ,
            xU: XJ
          } = JJ;
          cJ = (0, kJ.c)(cJ), (0, AJ.d)().client.updateEffect(cJ, ZJ, {
            displayName: FJ,
            icon: UJ,
            duration: eJ,
            level: XJ
          })
        })), JJ.Rm(qJ.Id, (JJ => {
          let {
            vJ: cJ,
            mJ: ZJ
          } = JJ;
          cJ = (0, kJ.c)(cJ), (0, AJ.d)().client.removeEffect(cJ, ZJ)
        })), JJ.Rm(qJ.Ac, (JJ => {
          ZJ.qE.jcJ(ZJ.XM).jumpMultiplier.setMultiplierType("jumpEffectAmount", JJ)
        })), JJ.Rm(qJ.hf, (JJ => {
          fJ.i.Uf("ttbEffectMultiplier", JJ)
        })), (0, FJ.onGameResetOnce)((() => {
          ZJ.qE.jcJ(ZJ.XM).jumpMultiplier.setMultiplierType("jumpEffectAmount", 1)
        })), JJ.Rm(qJ.bd, (JJ => {
          (0, iJ.m)(ZJ, (0, YJ.p)(JJ))
        })), JJ.Rm(qJ.cd, (JJ => {
          jc.f[JJ.dF] ? (0, iJ.m)(ZJ, {
            ...jc.f[JJ.dF],
            pos1: JJ.pos1,
            pos2: JJ.pos2
          }) : console.error(`Unknown preset id: ${JJ.dF}`)
        })), JJ.Rm(qJ.rd, (JJ => {
          var cJ, ZJ;
          let {
            aF: FJ,
            BF: UJ,
            tF: eJ,
            oF: XJ
          } = JJ, {
            JU: qJ,
            cU: jJ
          } = null !== XJ && void 0 !== XJ ? XJ : {};
          const {
            lF: YJ
          } = null !== XJ && void 0 !== XJ ? XJ : {};
          qJ = null !== (cJ = qJ) && void 0 !== cJ ? cJ : void 0, jJ = null !== (ZJ = jJ) && void 0 !== ZJ ? ZJ : void 0, "string" === typeof YJ && this.stateReplicationHandler.setUpIfQueued(YJ), (0, AJ.d)().client.gameRecorder.recordPlaySound(FJ, UJ, eJ, XJ), BJ.c.play((0, tJ.e)(FJ), UJ, YJ, qJ, jJ).rate(eJ)
        })), JJ.Rm(qJ.ue, (JJ => {
          let {
            pos: cJ,
            data: ZJ
          } = JJ;
          XJ.blockDataOwner.setBlockData(cJ[0], cJ[1], cJ[2], ZJ), XJ.blockAdded(cJ[0], cJ[1], cJ[2], XJ.Qm(cJ[0], cJ[1], cJ[2]))
        })), JJ.Rm(qJ.nd, (JJ => {
          let {
            info: cJ
          } = JJ;
          fJ.i.Uf("overShopInfo", cJ, !0)
        })), JJ.Rm(qJ._b, (JJ => {
          let {
            wZ: FJ,
            WZ: UJ
          } = JJ;
          cJ.openShop(ZJ.XM, FJ, UJ)
        })), JJ.Rm(qJ.J, (JJ => {
          ZJ.qE.iH(ZJ.XM).applyImpulse(JJ)
        })), JJ.Rm(qJ.Re, (JJ => {
          const cJ = ZJ.qE.iH(ZJ.XM);
          dJ().set(cJ.UH, 0, 0, 0), dJ().set(cJ.jH, 0, 0, 0), dJ().copy(cJ.jf, JJ), cJ.YH()
        })), JJ.Rm(qJ.Oc, (JJ => {
          console.error(`[logErrorToConsole]: ${JJ}`)
        })), JJ.Rm(qJ.Wb, (JJ => {
          let {
            zF: cJ,
            NF: ZJ,
            TF: FJ
          } = JJ;
          fJ.i.Uf("flyingMiddleMessage", {
            content: (0, qJ.q)(cJ),
            NF: ZJ,
            TF: FJ
          }, !0)
        })), JJ.Rm(qJ.yf, (JJ => {
          const cJ = JJ === WJ.h ? null : {
            message: `Currently loaded as variation: ${JJ}`,
            type: "Warning"
          };
          fJ.i.Uf("showPermanentBottomMessage", cJ, !0)
        })), JJ.Rm(qJ.$b, (JJ => {
          let {
            messageType: cJ,
            data: ZJ
          } = JJ;
          (0, oJ.d)(cJ) ? (0, oJ.b)(cJ, ZJ) : ("freeCamPerms" === cJ && XJ.client.freeCameraController.setPerms(ZJ.key, ZJ.value), XJ.client.triggerGameCallback("onReceivedMessageFromServer", cJ, ZJ))
        })), JJ.Rm(qJ.nb, (() => {
          const JJ = ZJ.qE.WcJ(ZJ.XM);
          null !== JJ && void 0 !== JJ && JJ.isChargeable() && JJ.finishCharging(!1, Date.now())
        })), JJ.Rm(qJ.Jd, (JJ => {
          let {
            gZ: cJ
          } = JJ;
          XJ.craftingManager.removeRecipes(ZJ.XM, cJ), fJ.i.Uf("craftingRecipesEdited", {
            itemName: cJ,
            recipesForItem: []
          })
        })), JJ.Rm(qJ.qf, (JJ => {
          for (const cJ in JJ) {
            const ZJ = JJ[cJ];
            for (const JJ in ZJ) XJ.client.meshCreator.handleParticleSystemUpdate(cJ, JJ, ZJ[JJ])
          }
        })), (0, FJ.onGameResetOnce)((() => {
          (0, Uc.setFloatingYValue)(ZJ.qE.getState(ZJ.XM, "physics"), ZJ.qE.YC(ZJ.XM), null)
        })), JJ.Rm(qJ.Ub, (JJ => {
          let {
            Oc: cJ,
            Tc: FJ,
            Cc: UJ
          } = JJ;
          const eJ = (0, kJ.c)(cJ);
          if (eJ === ZJ.XM) {
            const JJ = ZJ.qE.YC(ZJ.XM).position;
            UJ ??= Math.floor(JJ[1]) - 1, (0, Uc.setFloatingYValue)(ZJ.qE.getState(ZJ.XM, "physics"), ZJ.qE.YC(ZJ.XM), FJ ? UJ : null)
          }(0, MJ.c)(ZJ).setFloating(eJ, FJ, UJ);
          const XJ = ZJ.qE.getState(eJ, "floating");
          XJ && (XJ.isFloating = FJ, XJ.Cc = FJ ? UJ : null)
        })), JJ.Rm(qJ.Ab, lJ.h)
      }
    }
    window.addEventListener("beforeunload", (() => {}));
    var xc = ZJ(37995),
      rc = ZJ(38e3),
      vc = ZJ(969),
      mc = ZJ(2710);
    class Qc {
      constructor(JJ, cJ, ZJ, FJ) {
        this.msgHandler = ZJ, this.listener = FJ, this.session = void 0, this.attachedRoom = null, this.detachRoomListeners = null, this.suspended = !1, this.droppedAt = 0, this.session = new xc.e({
          reconnect: JJ,
          isLive: () => FJ.isLive(),
          onReconnected: JJ => {
            this.resumeOnRoom(JJ)
          },
          onGaveUp: (JJ, cJ) => {
            FJ.onGaveUp(JJ, cJ)
          },
          freeze: cJ,
          releaseSeat: cJ => {
            JJ(cJ).then((JJ => {
              JJ.cn(!0)
            }), (JJ => {
              console.warn("Couldn't release the held seat of a game left while reconnecting", JJ)
            }))
          }
        })
      }
      onInitialInfo(JJ, cJ) {
        this.session.onInitialInfo(JJ, cJ)
      }
      isResuming() {
        return this.session.isResuming()
      }
      getDroppedAt() {
        return this.droppedAt
      }
      onResumeInitialInfo(JJ, cJ) {
        if (this.session.onResuming(), null === JJ) {
          try {
            (0, AJ.d)().client.itemDropPrediction.reset()
          } catch (ZJ) {
            console.error("Error dropping the item drop predictions on resuming", ZJ)
          }
          return FJ.offlineInputReplay.discard(), void this.setSuspended(!1)
        }(0, AJ.d)().client.itemDropPrediction.onResumeReplayOffered(), FJ.offlineInputReplay.replayFrom(JJ.jU, cJ)
      }
      onResumed(JJ) {
        this.setSuspended(!1), (0, FJ.resendBeacons)();
        try {
          JJ()
        } catch (cJ) {
          console.error("Error completing the resume", cJ)
        } finally {
          this.session.onResumed()
        }
      }
      attachRoom(JJ) {
        const cJ = (0, vc.e)((() => JJ.connection.isOpen));
        JJ.FQ(cJ);
        const ZJ = new rc.d((() => {
          this.session.canHoldSeat() && this.listener.isLive() && (console.warn("The game server went silent, reconnecting"), this.onConnectionDropped(JJ, "silent"), JJ.cn(!1))
        }));
        JJ.onStateChange((() => {
          ZJ.heard()
        }));
        const FJ = cJ => {
          cJ.persisted || JJ.cn(!0)
        };
        window.addEventListener("pagehide", FJ), JJ.FQ(((cJ, ZJ) => {
          if (JJ === this.attachedRoom && this.listener.isLive()) return (0, UJ.g)(cJ) && this.session.canHoldSeat() ? (console.warn(`Connection to the game server dropped with code ${cJ}, reconnecting`), this.listener.onDropped(cJ, ZJ), void this.onConnectionDropped(JJ, String(cJ))) : void this.listener.onRoomLeft(cJ, ZJ)
        })), this.attachedRoom = JJ, this.detachRoomListeners = () => {
          cJ(), ZJ.dispose(), window.removeEventListener("pagehide", FJ)
        }
      }
      dispose() {
        this.detachRoom(), this.session.cn(), this.setSuspended(!1)
      }
      setSuspended(JJ) {
        JJ !== this.suspended && (this.suspended = JJ, (0, FJ.setConnectionSuspended)(JJ), (0, AJ.d)().client.itemDropPrediction.setSuspended(JJ))
      }
      detachRoom() {
        var JJ;
        null === (JJ = this.detachRoomListeners) || void 0 === JJ || JJ.call(this), this.detachRoomListeners = null, this.attachedRoom = null
      }
      onConnectionDropped(JJ, cJ) {
        (0, mc.h)("disconnect", "Left room", cJ), this.isResuming() || (this.droppedAt = Date.now()), this.detachRoom(), FJ.offlineInputReplay.onConnectionLost(), this.setSuspended(!0), this.session.onConnectionLost(JJ.reconnectionToken)
      }
      resumeOnRoom(JJ) {
        if (!this.listener.isLive()) return console.warn("Left the game while reconnecting, leaving the resumed room"), JJ.cn(!0), void this.dispose();
        console.log("Reconnected to the game server, waiting for the game to resume"), (0, sc.s)(), FJ.offlineInputReplay.onConnectionReplaced(), this.msgHandler.EjJ(JJ), this.listener.onReconnected(JJ), this.attachRoom(JJ)
      }
    }
    var Ec = ZJ(2951),
      Vc = ZJ(2958),
      Kc = ZJ(1213),
      yc = ZJ(4092),
      Sc = ZJ(2642),
      Ic = ZJ(957),
      Mc = ZJ(36676),
      bc = ZJ(38009),
      wc = ZJ(38016),
      Wc = ZJ(3122),
      gc = ZJ(38019);

    function Hc(JJ) {
      var cJ, ZJ;
      if ("object" !== typeof JJ || null === JJ) return {
        errType: typeof JJ
      };
      const FJ = JJ;
      return {
        errType: null !== (cJ = null === (ZJ = JJ.constructor) || void 0 === ZJ ? void 0 : ZJ.name) && void 0 !== cJ ? cJ : "",
        errName: "string" === typeof FJ.name ? FJ.name : "",
        eventType: "string" === typeof FJ.type ? FJ.type : "",
        errStack: "string" === typeof FJ.stack ? FJ.stack.split("\n").slice(1).join(" | ") : ""
      }
    }

    function Pc(JJ) {
      if ("undefined" !== typeof ProgressEvent && JJ instanceof ProgressEvent) return !0;
      if (!(JJ instanceof Error)) return !1;
      const cJ = JJ.code;
      return "ServerError" === JJ.name && void 0 === cJ || "AbortError" === JJ.name || "seat reservation expired." === JJ.message || "early_leave" === JJ.message
    }(0, nJ.p)((JJ => {
      (0, mc.h)("wasm_net", JJ)
    }));
    let kc = !0;

    function pc() {
      kc = !1
    }
    class dc {
      constructor(JJ) {
        this.gameNameWithVariation = void 0, this.lobbyName = void 0, this.colyClient = void 0, this.userContext = void 0, this.joinedAt = null, this.checkSendPath = () => {}, this.ih = void 0, this.connectionResume = void 0, this.incomingMsgInitialisor = void 0, this.gameNameWithVariation = JJ.gameNameWithVariation, this.lobbyName = JJ.lobbyName, this.colyClient = JJ.colyClient, this.userContext = JJ.userContext
      }
      async connectToServer(JJ, cJ, ZJ) {
        xJ.b.reset(), JJ.pI = {
          [JJ.XM]: {}
        }, JJ.IJJ = void 0, (0, sc.s)(), (0, AJ.d)().removeAllEntityNames(), (0, AJ.d)().setEntityName(JJ.XM, this.userContext.getPlayerName()), (0, Kc.o)({
          lobbyName: this.lobbyName
        }), console.log("Waiting for clientConnection passed promise to resolve"), console.log("joining server with game", this.gameNameWithVariation, "lobbyName", this.lobbyName);
        const eJ = performance.now(),
          XJ = (0, wc.c)(this.userContext, (() => {
            const {
              roomName: JJ,
              joinOptions: FJ
            } = (0, vJ.c)(this.userContext, this.gameNameWithVariation, this.lobbyName, cJ, (JJ => Sc.b.isUsingCustomGameTexturePack(JJ)));
            return (0, bc.f)((() => this.colyClient.joinOrCreate(JJ, FJ)), ZJ)
          }));
        return fJ.i.Uf("loadingScreenState", "loadingPage:joiningLobby"), await XJ.then((cJ => {
          this.joinedAt = performance.now(), this.ih = JJ;
          const ZJ = new GJ(cJ);
          this.connectionResume = new Qc((JJ => this.colyClient.reconnect(JJ)), (cJ => {
            JJ.HV(cJ)
          }), ZJ, {
            isLive: () => (0, AJ.d)().client.getMsgHandler() === ZJ,
            onDropped: (JJ, cJ) => {
              (0, Vc.f)(JJ) || this.logUnrecognisedConnectionLoss(JJ, void 0, {
                site: "drop",
                closeReason: null !== cJ && void 0 !== cJ ? cJ : "",
                sinceJoined: this.sinceJoined()
              })
            },
            onRoomLeft: (JJ, cJ) => {
              this.onRoomLeft(JJ, cJ)
            },
            onReconnected: JJ => {
              this.incomingMsgInitialisor.EjJ(JJ), this.checkSendPath = (0, Mc.h)(ZJ, JJ, nJ.q)
            },
            onGaveUp: (JJ, cJ) => {
              this.onResumeGaveUp(JJ, cJ)
            }
          }), this.connectionResume.attachRoom(cJ), (0, FJ.onGameResetOnce)((() => {
            this.connectionResume.dispose()
          }));
          const UJ = ZJ.send,
            eJ = ZJ.Rm,
            XJ = ZJ.hZJ.send,
            qJ = ZJ.hZJ.Rm,
            jJ = ZJ.mjJ;
          this.checkSendPath = (0, Mc.h)(ZJ, cJ, nJ.q);
          const YJ = setInterval((() => {
            UJ === ZJ.send && eJ === ZJ.Rm && XJ === ZJ.hZJ.send && qJ === ZJ.hZJ.Rm && jJ === ZJ.mjJ || pc(), this.checkSendPath()
          }), 1e4);
          return (0, FJ.onGameResetOnce)((() => {
            clearInterval(YJ)
          })), {
            success: !0,
            successDetails: ZJ
          }
        })).catch((cJ => {
          if (ZJ.aborted && cJ === (0, Wc.e)(ZJ)) return {
            success: !1,
            failDetails: {
              reason: "Left the game while it loaded",
              requiresRefresh: !1,
              canReconnect: !1
            }
          };
          if (cJ instanceof gc.h) return console.warn("Seat request timed out", this.lobbyName, this.gameNameWithVariation), {
            success: !1,
            failDetails: {
              reason: cJ.message,
              requiresRefresh: !1,
              canReconnect: !1,
              gameServerUnreachable: "timedOut"
            }
          };
          JJ.SG(`Failed to connect to bloxd room, check your internet connection. lobbyName: ${this.lobbyName}, gameNameWithVariation: ${this.gameNameWithVariation} code: ${cJ.code}\n`, cJ);
          const FJ = cJ.code;
          return FJ === UJ.b.serverUpdating.code ? (this.goToUpdateWaiting(), {
            success: !1,
            failDetails: {
              reason: UJ.b.serverUpdating.text,
              requiresRefresh: !1,
              canReconnect: !0,
              goesToUpdateWaiting: !0
            }
          }) : {
            success: !1,
            failDetails: {
              ...this.onConnectionToServerLost(FJ, cJ.message, {
                site: "join",
                sinceJoinStart: (0, Vc.c)(performance.now() - eJ),
                ...Hc(cJ)
              }, Pc(cJ)),
              rematch: (0, bc.d)(cJ)
            }
          }
        }))
      }
      setupServerListeners(JJ, cJ, ZJ) {
        fJ.i.Uf("loadingScreenState", "loadingPage:loadingPlayerInfo"), this.incomingMsgInitialisor = new fc(this.gameNameWithVariation, cJ.hZJ, JJ, this.connectionResume), this.incomingMsgInitialisor.setupStateReplicationHandlers();
        const UJ = cJ.SjJ();
        this.incomingMsgInitialisor.setupOnMessageListeners(UJ, ZJ), (0, FJ.onConnectionToServerReady)(UJ, cJ), UJ.finishRegistration()
      }
      dispose() {
        this.connectionResume.dispose()
      }
      onResumeGaveUp(JJ, cJ) {
        (0, Ic.MG)(new Error("Reconnect failed"), {
          ...(0, Ec.m)(cJ),
          game: this.gameNameWithVariation
        }), (0, mc.h)("disconnect", "Reconnect failed", cJ.reason), (0, AJ.d)().client.leaveGameUnwanted({
          reason: {
            translationKey: "general:lostConnection"
          },
          canReconnect: !JJ,
          canPlayAgain: JJ,
          requiresRefresh: !1,
          automaticallyReconnect: !1
        }), (0, cc.navigatePreserveSearch)("/")
      }
      sinceJoined() {
        return null === this.joinedAt ? "" : (0, Vc.c)(performance.now() - this.joinedAt)
      }
      onRoomLeft(JJ, cJ) {
        var ZJ;
        if (JJ === UJ.b.gameOrPluginKick.code) return;
        if (console.log(`Left room with code ${JJ}`), JJ === UJ.b.serverUpdating.code) return (0, mc.h)("disconnect", "Left room", "serverUpdating"), (0, AJ.d)().client.leaveGame(this.getUpdateWaitingUrl()), void this.goToUpdateWaiting();
        this.ih.SG(`Kicked from server with code ${JJ}`, new Error);
        const FJ = Object.keys(UJ.b).find((cJ => UJ.b[cJ].code === JJ));
        (0, mc.h)("disconnect", "Left room", null !== FJ && void 0 !== FJ ? FJ : String(JJ));
        const eJ = this.onConnectionToServerLost(JJ, void 0, {
          site: "cn",
          closeReason: null !== cJ && void 0 !== cJ ? cJ : "",
          sinceJoined: this.sinceJoined()
        });
        (0, AJ.d)().client.leaveGameUnwanted({
          reason: `You have disconnected from the server.\n${eJ.reason}`,
          canReconnect: eJ.canReconnect,
          requiresRefresh: eJ.requiresRefresh,
          automaticallyReconnect: null !== (ZJ = eJ.automaticallyReconnect) && void 0 !== ZJ && ZJ
        }), (0, cc.navigatePreserveSearch)("/")
      }
      getUpdateWaitingUrl() {
        return (0, yc.H)(this.gameNameWithVariation, this.lobbyName)
      }
      goToUpdateWaiting() {
        (0, cc.navigatePreserveSearch)(this.getUpdateWaitingUrl())
      }
      onConnectionToServerLost(JJ, cJ, ZJ) {
        var FJ;
        let XJ = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        if (null !== (FJ = cJ) && void 0 !== FJ && FJ.endsWith(UJ.i) && (this.userContext.invalidateTrafficCode(), cJ = cJ.replace(UJ.i, "")), JJ === UJ.b.outdatedVersion.code) return console.error("Outdated client with version ", eJ.b, ", refreshing page"), (0, rJ.reloadBloxd)(), {
          reason: "Outdated client",
          requiresRefresh: !0,
          canReconnect: !1
        };
        if (JJ === UJ.b.loadRecaptchaError.code) return console.error("Load recaptcha error, refreshing page"), (0, rJ.reloadBloxd)(), {
          reason: "Failed to load recaptcha",
          requiresRefresh: !0,
          canReconnect: !1
        };
        for (const eJ in UJ.b) {
          const {
            code: ZJ,
            text: FJ,
            canReconnect: XJ
          } = UJ.b[eJ];
          if (ZJ === JJ) {
            console.log("matched known error", JJ, "leaving game");
            return {
              reason: "" !== FJ ? FJ : cJ || `Code: ${JJ}`,
              requiresRefresh: !1,
              canReconnect: XJ,
              automaticallyReconnect: ZJ === UJ.b.customGameUpdated.code || ZJ === UJ.b.duplicateLobbyNameError.code
            }
          }
        }
        return console.log("Didn't match known error, leaving game"), (0, Vc.e)(JJ) || XJ ? console.warn("Connection lost", JJ, cJ) : this.logUnrecognisedConnectionLoss(JJ, cJ, ZJ), {
          reason: `Either your internet isn't working or this is a bug.\nCode: ${JJ}`,
          requiresRefresh: !1,
          canReconnect: !1,
          gameServerUnreachable: XJ ? "failed" : void 0
        }
      }
      logUnrecognisedConnectionLoss(JJ, cJ, ZJ) {
        (0, Ic.MG)(new Error("Unrecognised connection loss"), {
          code: String(JJ),
          cause: null !== cJ && void 0 !== cJ ? cJ : "",
          ...ZJ,
          game: this.gameNameWithVariation,
          ...(0, Vc.h)()
        })
      }
    }
  },
  37968: (JJ, cJ, ZJ) => {
    ZJ.d(cJ, {
      e: () => RZ,
      i: () => lZ
    });
    var FJ, UJ, eJ, XJ, AJ, qJ, jJ, YJ, hJ, DJ, sJ, nJ, GJ, fJ, xJ, rJ, vJ, mJ, QJ, EJ, VJ, KJ, yJ, SJ, IJ, MJ, bJ, wJ, WJ, gJ, HJ, PJ, kJ, pJ, dJ, zJ, NJ, OJ, TJ, CJ, uJ, iJ, RJ, LJ, aJ, BJ, tJ, oJ, lJ, Jc, cc, Zc, Fc, Uc, ec, Xc, Ac, qc, jc, Yc, hc, Dc, sc, nc, Gc, fc, xc, rc, vc, mc, Qc, Ec, Vc, Kc, yc, Sc, Ic, Mc, bc, wc, Wc, gc, Hc, Pc, kc, pc, dc, zc, Nc, Oc, Tc, Cc, uc, ic, Rc, Lc, ac, Bc, tc, oc = ZJ(17),
      lc = ZJ(36548),
      JZ = ZJ(37984),
      cZ = ZJ(37988),
      ZZ = ZJ(8377),
      FZ = ZJ(528),
      UZ = ZJ(523),
      eZ = ZJ(35813);
    let XZ = (FJ = (0, ZZ.type)("number"), UJ = (0, ZZ.type)("number"), eJ = (0, ZZ.type)("number"), XJ = (0, ZZ.type)("number"), AJ = (0, ZZ.type)("number"), qJ = (0, ZZ.type)("number"), jJ = (0, ZZ.type)("string"), YJ = class extends ZZ.Schema {
        constructor() {
          super(...arguments), (0, JZ.b)(this, "id", hJ, this), (0, JZ.b)(this, "amount", DJ, this), (0, JZ.b)(this, "x", sJ, this), (0, JZ.b)(this, "y", nJ, this), (0, JZ.b)(this, "z", GJ, this), (0, JZ.b)(this, "size", fJ, this), (0, JZ.b)(this, "attributes", xJ, this)
        }
      }, hJ = (0, cZ.b)(YJ.prototype, "id", [FJ], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return 0
        }
      }), DJ = (0, cZ.b)(YJ.prototype, "amount", [UJ], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return 0
        }
      }), sJ = (0, cZ.b)(YJ.prototype, "x", [eJ], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return 0
        }
      }), nJ = (0, cZ.b)(YJ.prototype, "y", [XJ], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return 0
        }
      }), GJ = (0, cZ.b)(YJ.prototype, "z", [AJ], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return 0
        }
      }), fJ = (0, cZ.b)(YJ.prototype, "size", [qJ], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return 1
        }
      }), xJ = (0, cZ.b)(YJ.prototype, "attributes", [jJ], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return "{}"
        }
      }), YJ),
      AZ = (rJ = (0, ZZ.type)("string"), vJ = (0, ZZ.type)("string"), mJ = class extends ZZ.Schema {
        constructor() {
          super(...arguments), (0, JZ.b)(this, "itemName", QJ, this), (0, JZ.b)(this, "enchantmentTier", EJ, this)
        }
      }, QJ = (0, cZ.b)(mJ.prototype, "itemName", [rJ], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: null
      }), EJ = (0, cZ.b)(mJ.prototype, "enchantmentTier", [vJ], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: null
      }), mJ),
      qZ = (VJ = (0, ZZ.type)("string"), KJ = (0, ZZ.type)("string"), yJ = (0, ZZ.type)("number"), SJ = (0, ZZ.type)("number"), IJ = (0, ZZ.type)("number"), MJ = (0, ZZ.type)("float32"), bJ = (0, ZZ.type)("float32"), wJ = (0, ZZ.type)("float32"), WJ = (0, ZZ.type)("string"), gJ = (0, ZZ.type)(["number"]), HJ = (0, ZZ.type)("boolean"), PJ = class extends ZZ.Schema {
        constructor() {
          super(...arguments), (0, JZ.b)(this, "type", kJ, this), (0, JZ.b)(this, "name", pJ, this), (0, JZ.b)(this, "x", dJ, this), (0, JZ.b)(this, "y", zJ, this), (0, JZ.b)(this, "z", NJ, this), (0, JZ.b)(this, "xRotation", OJ, this), (0, JZ.b)(this, "yRotation", TJ, this), (0, JZ.b)(this, "zRotation", CJ, this), (0, JZ.b)(this, "followingEId", uJ, this), (0, JZ.b)(this, "followingOffset", iJ, this), (0, JZ.b)(this, "shouldMatchFollowingEntityRotation", RJ, this)
        }
      }, kJ = (0, cZ.b)(PJ.prototype, "type", [VJ], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: null
      }), pJ = (0, cZ.b)(PJ.prototype, "name", [KJ], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return ""
        }
      }), dJ = (0, cZ.b)(PJ.prototype, "x", [yJ], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return 0
        }
      }), zJ = (0, cZ.b)(PJ.prototype, "y", [SJ], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return 0
        }
      }), NJ = (0, cZ.b)(PJ.prototype, "z", [IJ], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return 0
        }
      }), OJ = (0, cZ.b)(PJ.prototype, "xRotation", [MJ], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return 0
        }
      }), TJ = (0, cZ.b)(PJ.prototype, "yRotation", [bJ], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return 0
        }
      }), CJ = (0, cZ.b)(PJ.prototype, "zRotation", [wJ], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return 0
        }
      }), uJ = (0, cZ.b)(PJ.prototype, "followingEId", [WJ], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: null
      }), iJ = (0, cZ.b)(PJ.prototype, "followingOffset", [gJ], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return new ZZ.ArraySchema(0, 0, 0)
        }
      }), RJ = (0, cZ.b)(PJ.prototype, "shouldMatchFollowingEntityRotation", [HJ], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return !0
        }
      }), PJ),
      jZ = (LJ = (0, ZZ.type)("float32"), aJ = (0, ZZ.type)("float32"), BJ = (0, ZZ.type)("boolean"), tJ = (0, ZZ.type)("boolean"), oJ = (0, ZZ.type)("float32"), lJ = (0, ZZ.type)("boolean"), Jc = (0, ZZ.type)("string"), cc = (0, ZZ.type)("string"), Zc = (0, ZZ.type)("string"), Fc = (0, ZZ.type)("string"), Uc = (0, ZZ.type)(["number"]), ec = (0, ZZ.type)("number"), Xc = (0, ZZ.type)({
        map: AZ
      }), Ac = class extends qZ {
        constructor() {
          super(...arguments), (0, JZ.b)(this, "scale", qc, this), (0, JZ.b)(this, "speed", jc, this), (0, JZ.b)(this, "jumping", Yc, this), (0, JZ.b)(this, "crouching", hc, this), (0, JZ.b)(this, "cameraPitch", Dc, this), (0, JZ.b)(this, "armSwinging", sc, this), (0, JZ.b)(this, "heldItemName", nc, this), (0, JZ.b)(this, "heldItemEnchantmentTier", Gc, this), (0, JZ.b)(this, "pose", fc, this), (0, JZ.b)(this, "ridingVehicleEId", xc, this), (0, JZ.b)(this, "meshOffset", rc, this), (0, JZ.b)(this, "baseRenderHeading", vc, this), (0, JZ.b)(this, "armour", mc, this)
        }
      }, qc = (0, cZ.b)(Ac.prototype, "scale", [LJ], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return 1
        }
      }), jc = (0, cZ.b)(Ac.prototype, "speed", [aJ], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return 0
        }
      }), Yc = (0, cZ.b)(Ac.prototype, "jumping", [BJ], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return !1
        }
      }), hc = (0, cZ.b)(Ac.prototype, "crouching", [tJ], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return !1
        }
      }), Dc = (0, cZ.b)(Ac.prototype, "cameraPitch", [oJ], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return 0
        }
      }), sc = (0, cZ.b)(Ac.prototype, "armSwinging", [lJ], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return !1
        }
      }), nc = (0, cZ.b)(Ac.prototype, "heldItemName", [Jc], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: null
      }), Gc = (0, cZ.b)(Ac.prototype, "heldItemEnchantmentTier", [cc], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: null
      }), fc = (0, cZ.b)(Ac.prototype, "pose", [Zc], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return "standing"
        }
      }), xc = (0, cZ.b)(Ac.prototype, "ridingVehicleEId", [Fc], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return null
        }
      }), rc = (0, cZ.b)(Ac.prototype, "meshOffset", [Uc], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return new ZZ.ArraySchema(0, 0, 0)
        }
      }), vc = (0, cZ.b)(Ac.prototype, "baseRenderHeading", [ec], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return 0
        }
      }), mc = (0, cZ.b)(Ac.prototype, "armour", [Xc], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return new ZZ.MapSchema
        }
      }), Ac),
      YZ = (Qc = (0, ZZ.type)("string"), Ec = (0, ZZ.type)("string"), Vc = (0, ZZ.type)("string"), Kc = (0, ZZ.type)("uint8"), yc = class extends jZ {
        constructor() {
          super(...arguments), (0, JZ.b)(this, "variation", Sc, this), (0, JZ.b)(this, "ownerDbId", Ic, this), (0, JZ.b)(this, "metaInfo", Mc, this), (0, JZ.b)(this, "aiState", bc, this)
        }
      }, Sc = (0, cZ.b)(yc.prototype, "variation", [Qc], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return "default"
        }
      }), Ic = (0, cZ.b)(yc.prototype, "ownerDbId", [Ec], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return null
        }
      }), Mc = (0, cZ.b)(yc.prototype, "metaInfo", [Vc], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return ""
        }
      }), bc = (0, cZ.b)(yc.prototype, "aiState", [Kc], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return 0
        }
      }), yc);
    wc = (0, ZZ.type)("string"), Wc = (0, ZZ.type)("string"), gc = (0, ZZ.type)("string"), Hc = (0, ZZ.type)("string"), Pc = class extends qZ {
      constructor() {
        super(...arguments), (0, JZ.b)(this, "meshKind", kc, this), (0, JZ.b)(this, "meshOpts", pc, this), (0, JZ.b)(this, "pose", dc, this), (0, JZ.b)(this, "leaderboardTop", zc, this)
      }
    }, kc = (0, cZ.b)(Pc.prototype, "meshKind", [wc], {
      configurable: !0,
      enumerable: !0,
      writable: !0,
      initializer: null
    }), pc = (0, cZ.b)(Pc.prototype, "meshOpts", [Wc], {
      configurable: !0,
      enumerable: !0,
      writable: !0,
      initializer: null
    }), dc = (0, cZ.b)(Pc.prototype, "pose", [gc], {
      configurable: !0,
      enumerable: !0,
      writable: !0,
      initializer: null
    }), zc = (0, cZ.b)(Pc.prototype, "leaderboardTop", [Hc], {
      configurable: !0,
      enumerable: !0,
      writable: !0,
      initializer: null
    });

    function hZ(JJ) {
      return Object.keys(ZZ.Metadata.getFields(JJ))
    }
    const DZ = hZ(YZ);
    for (const JF of FZ.n)
      if (!DZ.includes(JF)) throw new Error(`Mob Schema is missing a networked property: "${JF}"`);
    const sZ = hZ((Nc = (0, ZZ.type)("string"), Oc = (0, ZZ.type)("float32"), Tc = (0, ZZ.type)("float32"), Cc = (0, ZZ.type)("float32"), uc = (0, ZZ.type)("float32"), ic = class extends qZ {
      constructor() {
        super(...arguments), (0, JZ.b)(this, "soundName", Rc, this), (0, JZ.b)(this, "volume", Lc, this), (0, JZ.b)(this, "refDistance", ac, this), (0, JZ.b)(this, "maxHearDist", Bc, this), (0, JZ.b)(this, "rate", tc, this)
      }
    }, Rc = (0, cZ.b)(ic.prototype, "soundName", [Nc], {
      configurable: !0,
      enumerable: !0,
      writable: !0,
      initializer: function() {
        return ""
      }
    }), Lc = (0, cZ.b)(ic.prototype, "volume", [Oc], {
      configurable: !0,
      enumerable: !0,
      writable: !0,
      initializer: function() {
        return 1
      }
    }), ac = (0, cZ.b)(ic.prototype, "refDistance", [Tc], {
      configurable: !0,
      enumerable: !0,
      writable: !0,
      initializer: function() {
        return eZ.k
      }
    }), Bc = (0, cZ.b)(ic.prototype, "maxHearDist", [Cc], {
      configurable: !0,
      enumerable: !0,
      writable: !0,
      initializer: function() {
        return eZ.e
      }
    }), tc = (0, cZ.b)(ic.prototype, "rate", [uc], {
      configurable: !0,
      enumerable: !0,
      writable: !0,
      initializer: function() {
        return 1
      }
    }), ic));
    for (const JF of UZ.l)
      if (!sZ.includes(JF)) throw new Error(`AudioEntity Schema is missing a replicated property: "${JF}"`);
    var nZ = ZJ(37424),
      GZ = ZJ(1137),
      fZ = ZJ(535),
      xZ = ZJ(37198),
      rZ = ZJ(3726),
      vZ = ZJ(235),
      mZ = ZJ(36229),
      QZ = ZJ(37108),
      EZ = ZJ(1995),
      VZ = ZJ(36144),
      KZ = ZJ(37449),
      yZ = ZJ(36282),
      SZ = ZJ(250),
      IZ = ZJ.n(SZ),
      MZ = ZJ(36898),
      bZ = ZJ(36078),
      wZ = ZJ(37041),
      WZ = ZJ(37116);
    class gZ {
      constructor(JJ, cJ) {
        this.bloxd = JJ, this.eId = cJ, this.ih = void 0, this.colyseusEntity = void 0, this.canSeeSub = void 0, this.canAttackSub = void 0, this.interactableSub = void 0, this.overlayColourSub = void 0, this.opacitySub = void 0, this.zIndexSub = void 0, this.multilineTextBoxSub = void 0, this.previousHidingMeshManagerState = void 0, this.meshKind = void 0, this.meshOpts = void 0, this.leaderboardTop = void 0, this.meshRebuildQueued = !1, this.xn = !1, this.ih = JJ.ih
      }
      initClient(JJ) {
        var cJ, ZJ, FJ;
        this.colyseusEntity = JJ, this.meshKind = JJ.meshKind, this.meshOpts = JJ.meshOpts, this.leaderboardTop = JJ.leaderboardTop, this.ih.qE.add([JJ.x, JJ.y, JJ.z], 1, 1, null, null, !1, !1, this.eId), this.ih.qE.xI(this.eId, "smoothToServerPos");
        const UJ = "Person" === this.meshKind;
        this.ih.qE.xI(this.eId, "meshRotation", {
          isServerControlled: !0,
          ...UJ ? {
            defaultRotationsPerSecond: .5
          } : {},
          childrenNodeParams: UJ ? [{
            nodeName: "HeadMesh",
            softTolerance: KZ.k,
            hardTolerance: null
          }] : []
        }), this.updateHidingMeshMgr(), this.canSeeSub = oc.i.subscribe(`otherEntitySettings|${this.eId}|canSee`, (JJ => {
          this.updateHidingMeshMgr()
        }));
        const eJ = () => {
          const JJ = this.ih.qE.ZcJ(this.eId);
          if (!JJ) return;
          const cJ = (0, yZ.h)(this.eId);
          if ("number" === typeof JJ.Py) {
            var ZJ, FJ, UJ, eJ;
            const XJ = null === (ZJ = (0, EZ.i)("head", null === (UJ = this.getSpec()) || void 0 === UJ || null === (eJ = UJ.opts.textures) || void 0 === eJ ? void 0 : eJ.head)) || void 0 === ZJ || null === (FJ = ZJ.personModel) || void 0 === FJ ? void 0 : FJ.fullBody;
            return this.ih.XG.Wy.setPickable(JJ.Py, cJ && !XJ), void(0, bZ.updatePersonAttachmentPickability)(this.ih, this.eId, cJ)
          }
          const XJ = JJ.mesh;
          if (XJ)
            for (const AJ of [XJ, ...XJ.getChildMeshes(!1)]) "aG" in AJ && !AJ.name.startsWith("Cape|") && (AJ.aG = cJ)
        };
        this.canAttackSub = oc.i.subscribe(`otherEntitySettings|${this.eId}|canAttack`, eJ), this.interactableSub = oc.i.subscribe(`otherEntitySettings|${this.eId}|interactable`, eJ), this.overlayColourSub = oc.i.subscribe(`otherEntitySettingsClientifiedEId|${this.eId}|overlayColour`, (JJ => {
          this.updateOverlayColour(JJ)
        })), this.opacitySub = oc.i.subscribe(`otherEntitySettingsClientifiedEId|${this.eId}|opacity`, (JJ => {
          this.updateOpacity(JJ)
        })), this.zIndexSub = oc.i.subscribe(`otherEntitySettingsClientifiedEId|${this.eId}|zIndex`, (JJ => {
          this.updateZIndex(JJ)
        }));
        const XJ = this.ih.pI[this.ih.XM][this.eId];
        this.updateOverlayColour(null !== (cJ = null === XJ || void 0 === XJ ? void 0 : XJ.overlayColour) && void 0 !== cJ ? cJ : null), this.updateOpacity(null !== (ZJ = null === XJ || void 0 === XJ ? void 0 : XJ.opacity) && void 0 !== ZJ ? ZJ : 1), this.updateZIndex(null !== (FJ = null === XJ || void 0 === XJ ? void 0 : XJ.zIndex) && void 0 !== FJ ? FJ : 0), this.multilineTextBoxSub = (0, VZ.s)(this.ih, this.eId)
      }
      onChangeClient(JJ, cJ) {
        if ("xRotation" === JJ || "yRotation" === JJ || "zRotation" === JJ)(0, VZ.v)(this.ih, this.eId, JJ, cJ);
        else if ("pose" === JJ) {
          const JJ = this.ih.qE.jcJ(this.eId);
          JJ && (JJ.pose = cJ || "standing")
        } else "meshKind" === JJ || "meshOpts" === JJ ? (this[JJ] = cJ, this.queueMeshRebuild()) : "name" === JJ && "" !== cJ ? this.updateHidingMeshMgr() : "leaderboardTop" === JJ && (this.leaderboardTop = cJ, oc.i.Uf(`leaderboardTop|${this.eId}`, cJ))
      }
      disposeClient() {
        this.xn = !0, this.ih.qE.deleteEntity(this.eId), oc.i.unsubscribe(this.canSeeSub), oc.i.unsubscribe(this.canAttackSub), oc.i.unsubscribe(this.interactableSub), oc.i.unsubscribe(this.overlayColourSub), oc.i.unsubscribe(this.opacitySub), oc.i.unsubscribe(this.zIndexSub), oc.i.unsubscribe(this.multilineTextBoxSub)
      }
      getCurrentHidingMeshMgrState() {
        var JJ, cJ;
        return {
          canSee: null !== (JJ = null === (cJ = this.ih.pI[this.ih.XM][this.eId]) || void 0 === cJ ? void 0 : cJ.canSee) && void 0 !== JJ && JJ,
          name: this.colyseusEntity.name,
          meshKind: this.meshKind,
          meshOpts: this.meshOpts
        }
      }
      updateHidingMeshMgr() {
        var JJ, cJ, ZJ;
        const {
          ih: FJ
        } = this, {
          qE: UJ
        } = FJ, eJ = this.getCurrentHidingMeshMgrState();
        if ((0, vZ.Md)(this.previousHidingMeshManagerState, eJ)) return;
        if (this.previousHidingMeshManagerState = eJ, UJ.vI(this.eId, "hidingMeshManager"), null === (JJ = FJ.pI[FJ.XM][this.eId]) || void 0 === JJ || !JJ.canSee) return;
        const XJ = this.getSpec();
        if (!XJ) return;
        const {
          type: AJ,
          opts: qJ
        } = XJ;
        "Person" === AJ && (qJ.textures = (0, EZ.m)(qJ.textures)), qJ.eId = this.eId, UJ.xI(this.eId, "hidingMeshManager", {
          addMeshComponent: () => {
            var JJ, cJ, ZJ;
            "Leaderboard" === AJ && (qJ.leaderboardTop = this.leaderboardTop);
            const eJ = this.bloxd.client.meshCreator.getEntityMesh(AJ, qJ, (JJ => {
              var cJ, ZJ;
              if ("number" === typeof JJ) {
                var UJ, eJ, XJ;
                const cJ = FJ.XG.Wy;
                cJ.setEntityId(JJ, this.eId);
                const ZJ = "Person" === AJ && (null === (UJ = (0, EZ.i)("head", null === (XJ = qJ.textures) || void 0 === XJ ? void 0 : XJ.head)) || void 0 === UJ || null === (eJ = UJ.personModel) || void 0 === eJ ? void 0 : eJ.fullBody);
                return void cJ.setPickable(JJ, (0, yZ.h)(this.eId) && !ZJ)
              }
              const jJ = JJ;
              for (const AJ of [jJ, ...jJ.getChildMeshes(!1)]) void 0 === AJ.aG || AJ.name.startsWith("Cape|") || (AJ.aG = (0, yZ.h)(this.eId), AJ.metadata ??= new FJ.XG.BG, AJ.metadata.eId = this.eId);
              this.updateOpacity(null !== (cJ = null === (ZJ = FJ.pI[FJ.XM][this.eId]) || void 0 === ZJ ? void 0 : ZJ.opacity) && void 0 !== cJ ? cJ : 1)
            }));
            if (!eJ) return;
            const {
              Py: XJ,
              mesh: jJ,
              meshOffset: YJ,
              nameYOffset: hJ,
              modelLoaded: DJ
            } = eJ;
            null === DJ || void 0 === DJ || DJ.then((() => {
              var JJ;
              (null === (JJ = UJ.ZcJ(this.eId)) || void 0 === JJ ? void 0 : JJ.mesh) === jJ && (this.previousHidingMeshManagerState = null, this.updateHidingMeshMgr())
            }));
            const sJ = null === XJ ? null : FJ.XG.Wy.aZJ(XJ, 0);
            if (UJ.xI(this.eId, UJ.names.mesh, {
                Py: XJ,
                fZJ: sJ,
                mesh: jJ,
                NXJ: !1,
                vZJ: "Leaderboard" !== AJ,
                offset: YJ.slice(),
                zXJ: "ParticleEmitter" === AJ && qJ.followTargetMeshOffset ? JJ => {
                  var cJ;
                  IZ().copy(JJ, YJ);
                  const ZJ = null === (cJ = UJ.RcJ(this.eId)) || void 0 === cJ ? void 0 : cJ.Yn,
                    FJ = void 0 === ZJ ? null : UJ.jcJ(ZJ);
                  if (FJ) {
                    var eJ, XJ;
                    const cJ = this.bloxd.getEntityHeading(null !== (eJ = FJ.ridingVehicleEId) && void 0 !== eJ ? eJ : ZJ, !0),
                      UJ = Math.sin(cJ),
                      AJ = Math.cos(cJ);
                    JJ[0] += FJ.meshOffset[0] * AJ + FJ.meshOffset[2] * UJ, JJ[1] += FJ.meshOffset[1], JJ[2] += FJ.meshOffset[2] * AJ - FJ.meshOffset[0] * UJ;
                    const qJ = null !== (XJ = FJ.ridingVehicleEId) && void 0 !== XJ ? XJ : null;
                    null !== qJ && (0, WZ.e)(this.ih, qJ, JJ)
                  }
                } : null
              }), "Person" === AJ) {
              var nJ, GJ, fJ, xJ;
              UJ.xI(this.eId, UJ.names.meshAttachments, {
                personFullBody: null !== (nJ = null === (GJ = (0, EZ.i)("head", null === (xJ = qJ.textures) || void 0 === xJ ? void 0 : xJ.head)) || void 0 === GJ || null === (fJ = GJ.personModel) || void 0 === fJ ? void 0 : fJ.fullBody) && void 0 !== nJ && nJ
              });
              for (const JJ of GZ.s) {
                var rJ, vJ, mJ;
                const cJ = null === (rJ = qJ.textures) || void 0 === rJ ? void 0 : rJ[JJ];
                cJ && null !== (vJ = (0, EZ.i)(JJ, cJ)) && void 0 !== vJ && null !== (mJ = vJ.attachments) && void 0 !== mJ && mJ.length && QZ.e.Player.meshApi.updatePlayerCosmetic(this.eId, XJ, JJ, cJ)
              }
              UJ.xI(this.eId, UJ.names.moveState), UJ.xI(this.eId, "updateWalkingState", {
                Py: XJ,
                fZJ: sJ,
                walkingLegSwingDuration: KZ.w
              }), UJ.xI(this.eId, "humanoidMesh", {
                Py: XJ,
                fZJ: sJ,
                heldItemPositionParams: {},
                maxWalkingAngleOverride: null
              }), UJ.xI(this.eId, "animator", {
                Py: XJ,
                fZJ: sJ,
                modelLifeformType: "Player"
              }), wZ.c.hasAnimation("Person") && UJ.xI(this.eId, "rigAnimation", {
                target: "Person",
                Py: XJ
              }), UJ.jcJ(this.eId).pose = this.colyseusEntity.pose || "standing"
            } else if ("BloxdBlock" === AJ && null !== XJ) {
              UJ.xI(this.eId, "animator", {
                Py: XJ,
                fZJ: sJ,
                modelLifeformType: null
              });
              const JJ = (0, xZ.o)(qJ.blockName);
              null !== JJ && UJ.xI(this.eId, "rigAnimation", {
                target: JJ,
                Py: XJ
              })
            }
            UJ.GAJ(this.eId, "entityName", {
              name: this.colyseusEntity.name,
              nameYOffset: hJ
            }), this.bloxd.setEntityName(this.eId, this.colyseusEntity.name), !0 === qJ.autoRotate && (UJ.vI(this.eId, "meshRotation"), UJ.xI(this.eId, "autoRotate"));
            const {
              lineToEId: QJ
            } = qJ;
            (0, fZ.P)(QJ) || UJ.xI(this.eId, "lineToEntity", {
              lineToEId: QJ
            });
            const EJ = FJ.pI[FJ.XM][this.eId];
            this.updateOverlayColour(null !== (JJ = null === EJ || void 0 === EJ ? void 0 : EJ.overlayColour) && void 0 !== JJ ? JJ : null), this.updateOpacity(null !== (cJ = null === EJ || void 0 === EJ ? void 0 : EJ.opacity) && void 0 !== cJ ? cJ : 1), this.updateZIndex(null !== (ZJ = null === EJ || void 0 === EJ ? void 0 : EJ.zIndex) && void 0 !== ZJ ? ZJ : 0)
          },
          removeMeshComponent: () => {
            "Person" !== AJ && "BloxdBlock" !== AJ || UJ.vI(this.eId, "rigAnimation"), UJ.vI(this.eId, UJ.names.mesh), UJ.KJJ(this.eId, UJ.names.meshAttachments) && UJ.vI(this.eId, UJ.names.meshAttachments), UJ.vI(this.eId, "entityName"), UJ.vI(this.eId, "autoRotate"), UJ.vI(this.eId, "lineToEntity"), "Person" === AJ ? (UJ.vI(this.eId, UJ.names.moveState), UJ.vI(this.eId, "updateWalkingState"), UJ.vI(this.eId, "humanoidMesh"), UJ.vI(this.eId, "animator")) : "BloxdBlock" === AJ && UJ.vI(this.eId, "animator")
          },
          hideDist: null !== (cJ = qJ.hideDist) && void 0 !== cJ ? cJ : 80,
          movingHideDist: null !== (ZJ = qJ.hideDist) && void 0 !== ZJ ? ZJ : 120,
          displayOutsideLoadedChunk: qJ.hideDist > 100,
          immediatelyUpdate: !0,
          nA: "BloxdBlock" === AJ ? qJ.blockName : AJ
        })
      }
      queueMeshRebuild() {
        this.meshRebuildQueued || (this.meshRebuildQueued = !0, queueMicrotask((() => {
          this.meshRebuildQueued = !1, this.xn || this.updateHidingMeshMgr()
        })))
      }
      getSpec() {
        return (0, rZ.i)({
          meshKind: this.meshKind,
          meshOpts: this.meshOpts
        })
      }
      updateOverlayColour(JJ) {
        var cJ, ZJ;
        if ("Person" !== this.meshKind) return;
        let FJ = new mZ.e(0, 0, 0, 0);
        if (null !== JJ) {
          const cJ = (0, vZ.V)(JJ);
          FJ = new mZ.e(cJ[0] / 255, cJ[1] / 255, cJ[2] / 255, .5)
        }
        const UJ = null !== (cJ = null === (ZJ = this.ih.qE.ZcJ(this.eId)) || void 0 === ZJ ? void 0 : ZJ.Py) && void 0 !== cJ ? cJ : null;
        null !== UJ && QZ.e.Player.meshApi.updateMeshOverlayColour(UJ, FJ)
      }
      updateZIndex(JJ) {
        var cJ;
        if ("Person" !== this.meshKind) return;
        const ZJ = null === (cJ = this.ih.qE.ZcJ(this.eId)) || void 0 === cJ ? void 0 : cJ.Py;
        "number" === typeof ZJ && this.ih.XG.Wy.setRenderingGroupId(ZJ, JJ)
      }
      updateOpacity(JJ) {
        const cJ = this.ih.qE.ZcJ(this.eId);
        cJ && ("number" !== typeof cJ.Py ? cJ.mesh && "ParticleEmitter" !== this.meshKind && (0, MZ.g)(cJ.mesh, JJ) : QZ.e.Player.meshApi.updateMeshOpacity(cJ.Py, JJ))
      }
    }
    var HZ = ZJ(37977);
    class PZ {
      constructor(JJ, cJ) {
        this.eId = cJ, this.ih = void 0, this.schema = void 0, this.ih = JJ.ih
      }
      initClient(JJ) {
        this.schema = JJ, this.ih.qE.add([JJ.x, JJ.y, JJ.z], .1, .1, null, null, !1, !1, this.eId), this.ih.qE.xI(this.eId, "smoothToServerPos"), HZ.b.add(this.eId, this.copyOpts())
      }
      onChangeClient(JJ) {
        UZ.l.includes(JJ) && HZ.b.update(this.eId, this.copyOpts())
      }
      disposeClient() {
        HZ.b.remove(this.eId), this.ih.qE.deleteEntity(this.eId)
      }
      copyOpts() {
        const {
          soundName: JJ,
          volume: cJ,
          refDistance: ZJ,
          maxHearDist: FJ,
          rate: UJ
        } = this.schema;
        return {
          soundName: JJ,
          volume: cJ,
          refDistance: ZJ,
          maxHearDist: FJ,
          rate: UJ
        }
      }
    }
    var kZ = ZJ(3155),
      pZ = ZJ(35797),
      dZ = ZJ(5817),
      zZ = ZJ(36759),
      NZ = ZJ(2401),
      OZ = ZJ(37143),
      TZ = ZJ(8334),
      CZ = ZJ(37462),
      uZ = ZJ(36738),
      iZ = ZJ(2710);
    class RZ {
      constructor(JJ, cJ) {
        let ZJ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 4,
          FJ = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : () => performance.now();
        this.hZJ = JJ, this.ih = cJ, this.setupBudgetMs = ZJ, this.now = FJ, this.createStateCallbacks = void 0, this.roomStateCallbacks = void 0, this.allItems = {}, this.detachers = new Map, this.deferredSetups = new Map, this.queuedSetups = new Map, this.promotedSetups = new Set, this.setupBudgetLeftMs = void 0, this.lastRefillMs = void 0, this.roomState = void 0, this.xn = !1, this.onFrame = () => {
          this.setUpQueuedEntities(!0)
        }, this.Km = () => {
          this.setUpQueuedEntities(this.now() - this.lastRefillMs > 100)
        }, this.setUpPromoted = () => {
          for (const JJ of this.promotedSetups) {
            this.promotedSetups.delete(JJ);
            const cJ = this.queuedSetups.get(JJ);
            cJ && (this.queuedSetups.delete(JJ), this.timedSetup(cJ, JJ))
          }
        }, this.createStateCallbacks = (0, TZ.getStateCallbacks)(JJ), this.roomStateCallbacks = this.createStateCallbacks(JJ.state), this.roomState = JJ.state, this.setupBudgetLeftMs = ZJ, this.lastRefillMs = FJ()
      }
      setup() {
        this.setupEntityHandlers(), this.setupItemHandlers(), this.hZJ.onStateChange(this.setUpPromoted), this.ih.on("beforeInputs", this.onFrame), this.ih.on("Hh", this.Km)
      }
      setUpQueuedEntities(JJ) {
        var cJ;
        if ((null === (cJ = (0, NZ.d)().client.getMsgHandler()) || void 0 === cJ ? void 0 : cJ.hZJ) !== this.hZJ) return this.ih.off("beforeInputs", this.onFrame), this.ih.off("Hh", this.Km), this.queuedSetups.clear(), void this.promotedSetups.clear();
        if (JJ && (this.setupBudgetLeftMs = this.setupBudgetMs, this.lastRefillMs = this.now()), this.setUpPromoted(), 0 !== this.queuedSetups.size)
          for (IZ().copy(LZ, this.ih.qE.Om(this.ih.XM)); this.setupBudgetLeftMs > 0;) {
            const JJ = this.nearestQueued(LZ);
            if (null === JJ) return;
            this.setUpIfQueued(JJ), this.setUpPromoted()
          }
      }
      nearestQueued(JJ) {
        let cJ = null,
          ZJ = 1 / 0;
        return this.queuedSetups.forEach(((FJ, UJ) => {
          const eJ = function(JJ, cJ) {
            return (cJ.x - JJ[0]) ** 2 + (cJ.y - JJ[1]) ** 2 + (cJ.z - JJ[2]) ** 2
          }(JJ, FJ);
          (null === cJ || eJ < ZJ) && (cJ = UJ, ZJ = eJ)
        })), cJ
      }
      setUpOrQueue(JJ, cJ) {
        0 === this.queuedSetups.size && this.setupBudgetLeftMs > 0 || this.mustSetUpNow(JJ, cJ) ? this.timedSetup(JJ, cJ) : this.queuedSetups.set(cJ, JJ)
      }
      mustSetUpNow(JJ, cJ) {
        const ZJ = this.ih.IJJ;
        if (cJ === ZJ) return !0;
        const FJ = this.roomState.entities.get(ZJ);
        return !(!FJ || FJ.ridingVehicleEId !== cJ && FJ.followingEId !== cJ) || (aZ(JJ.type) === nZ.b || (0, NZ.d)().getFollowingEntities(cJ).length > 0)
      }
      setUpIfQueued(JJ) {
        const cJ = this.queuedSetups.get(JJ);
        cJ && (this.queuedSetups.delete(JJ), this.timedSetup(cJ, JJ))
      }
      promoteIfQueued(JJ) {
        null !== JJ && this.queuedSetups.has(JJ) && this.promotedSetups.add(JJ)
      }
      timedSetup(JJ, cJ) {
        const ZJ = this.now();
        this.setupEntity(JJ, cJ), this.setupBudgetLeftMs -= this.now() - ZJ
      }
      setupEntityHandlers() {
        this.roomStateCallbacks.entities.XE(((JJ, cJ) => {
          this.ih.IJJ ? this.setUpOrQueue(JJ, cJ) : this.deferEntitySetupUntilInitInfo(JJ, cJ)
        })), this.roomStateCallbacks.entities.jK(((JJ, cJ) => {
          const ZJ = this.deferredSetups.get(cJ);
          ZJ && (oc.i.unsubscribe(ZJ), this.deferredSetups.delete(cJ)), this.queuedSetups.delete(cJ), this.detach(cJ), (0, NZ.d)().client.disposeEntity(cJ)
        }))
      }
      deferEntitySetupUntilInitInfo(JJ, cJ) {
        const ZJ = oc.i.Hx("initInfoReceived", (() => {
          this.deferredSetups.delete(cJ), this.setUpOrQueue(JJ, cJ)
        }));
        this.deferredSetups.set(cJ, ZJ), (0, kZ.onGameResetOnce)((() => {
          this.deferredSetups.get(cJ) === ZJ && (oc.i.unsubscribe(ZJ), this.deferredSetups.delete(cJ)), (0, NZ.d)().updatePositionAndPhysics(this.ih.XM, {
            type: dZ.s.DEFAULT,
            tier: null
          }, !0), (0, NZ.d)().takeHeldPlayerBodySize(this.ih.XM);
          const JJ = this.ih.qE.TJJ(this.ih.XM);
          JJ && (JJ.movementType = dZ.p.NORMAL)
        }))
      }
      setupEntity(JJ, cJ) {
        const ZJ = cJ === this.ih.IJJ;
        if (ZJ)(0, NZ.d)().client.eC(this.ih.XM, null, null);
        else {
          const {
            type: ZJ
          } = JJ, FJ = aZ(ZJ);
          if (void 0 === FJ) return void
          function(JJ, cJ) {
            const ZJ = String(JJ);
            if (BZ.has(ZJ)) return;
            BZ.add(ZJ);
            const FJ = ZJ.length > 80 ? `${ZJ.slice(0,80)}...` : ZJ,
              UJ = `No client handler for entity type ${JSON.stringify(FJ)}, so entity ${cJ} is not set up`;
            console.warn(UJ), (0, iZ.h)("uncaught", UJ, "unknown_entity_type")
          }(ZJ, cJ);
          (0, NZ.d)().client.eC(cJ, JJ, new FJ((0, NZ.d)(), cJ, ZJ))
        }
        const FJ = this.createStateCallbacks(JJ);
        if (ZJ) return this.setupMapSchemaCallbacks(cJ, JJ, FJ, "armour"), this.setupScalarField(cJ, JJ, FJ, "scale"), this.setupScalarField(cJ, JJ, FJ, "ridingVehicleEId"), this.setupScalarField(cJ, JJ, FJ, "followingEId"), this.setupScalarField(cJ, JJ, FJ, "followingOffset"), void this.setupScalarField(cJ, JJ, FJ, "shouldMatchFollowingEntityRotation");
        for (const UJ of hZ(JJ.constructor)) JJ[UJ] instanceof ZZ.MapSchema ? this.setupMapSchemaCallbacks(cJ, JJ, FJ, UJ) : this.setupScalarField(cJ, JJ, FJ, UJ)
      }
      setupMapSchemaCallbacks(JJ, cJ, ZJ, FJ) {
        const UJ = ZJ[FJ],
          eJ = new Map;
        UJ.XE(((ZJ, UJ) => {
          if (this.onEntityFieldChange(JJ, cJ, FJ, {
              key: UJ,
              value: ZJ
            }), !(ZJ instanceof ZZ.Schema)) return;
          const XJ = this.createStateCallbacks(ZJ),
            AJ = [];
          for (const eJ of hZ(ZJ.constructor)) AJ.push(this.listenForFutureChanges(XJ, eJ, (() => {
            this.onEntityFieldChange(JJ, cJ, FJ, {
              key: UJ,
              value: ZJ
            })
          })));
          eJ.set(UJ, (() => {
            for (const JJ of AJ) JJ()
          }))
        })), UJ.jK(((ZJ, UJ) => {
          var XJ;
          null === (XJ = eJ.get(UJ)) || void 0 === XJ || XJ(), eJ.delete(UJ), this.onEntityFieldChange(JJ, cJ, FJ, {
            key: UJ,
            value: null
          })
        })), this.addDetacher(JJ, (() => {
          for (const JJ of eJ.values()) JJ();
          eJ.clear()
        }))
      }
      setupScalarField(JJ, cJ, ZJ, FJ) {
        this.onEntityFieldChange(JJ, cJ, FJ, cJ[FJ]);
        const UJ = this.listenForFutureChanges(ZJ, FJ, (ZJ => {
          this.onEntityFieldChange(JJ, cJ, FJ, ZJ)
        }));
        this.addDetacher(JJ, UJ)
      }
      addDetacher(JJ, cJ) {
        let ZJ = this.detachers.get(JJ);
        ZJ || (ZJ = [], this.detachers.set(JJ, ZJ)), ZJ.push(cJ)
      }
      detach(JJ) {
        for (const ZJ of null !== (cJ = this.detachers.get(JJ)) && void 0 !== cJ ? cJ : []) {
          var cJ;
          ZJ()
        }
        this.detachers.delete(JJ)
      }
      listenForFutureChanges(JJ, cJ, ZJ) {
        return JJ.listen(cJ, ZJ, !1)
      }
      onEntityFieldChange(JJ, cJ, ZJ, FJ) {
        switch (ZJ) {
          case "ridingVehicleEId": {
            this.promoteIfQueued(FJ);
            const cJ = this.ih.qE.jcJ((0, pZ.c)(JJ));
            cJ && (cJ.ridingVehicleEId = FJ);
            break
          }
          case "armour":
            this.handleArmourChange(JJ, FJ);
            break;
          case "followingEId":
            this.promoteIfQueued(FJ), this.handleFollowingEIdChange(JJ, cJ, FJ);
            break;
          case "xRotation":
          case "yRotation":
          case "zRotation":
            this.handleRotationChange(JJ, ZJ, FJ);
            break;
          case "scale":
            this.handleScaleChange(JJ, FJ);
            break;
          case "baseRenderHeading":
            this.handleBaseRenderHeadingChange(JJ, FJ);
            break;
          case "followingOffset":
            this.handleFollowingOffsetChange(JJ, FJ);
            break;
          case "shouldMatchFollowingEntityRotation":
            this.handleShouldMatchFollowingEntityRotationChange(JJ, FJ);
            break;
          case "x":
          case "y":
          case "z":
            return void this.handlePositionChange(JJ, ZJ, FJ)
        }(0, NZ.d)().client.updateEntityField(JJ, ZJ, FJ)
      }
      handleArmourChange(JJ, cJ) {
        var ZJ, FJ;
        const {
          key: UJ,
          value: eJ
        } = cJ;
        (0, QZ.v)(JJ, UJ, null !== (ZJ = null === eJ || void 0 === eJ ? void 0 : eJ.itemName) && void 0 !== ZJ ? ZJ : null, null !== (FJ = null === eJ || void 0 === eJ ? void 0 : eJ.enchantmentTier) && void 0 !== FJ ? FJ : null)
      }
      handleFollowingEIdChange(JJ, cJ, ZJ) {
        const FJ = (0, pZ.c)(JJ),
          UJ = FJ === this.ih.XM;
        if (this.ih.qE.vI(FJ, this.ih.qE.names.XV), ZJ) this.ih.qE.vI(FJ, "smoothToServerPos"), this.ih.qE.xI(FJ, this.ih.qE.names.XV, {
          Yn: (0, pZ.c)(ZJ),
          offset: Array.from(cJ.followingOffset),
          LcJ: cJ.shouldMatchFollowingEntityRotation,
          ocJ: !0,
          lcJ: (JJ, FJ) => {
            if (IZ().copy(JJ, cJ.followingOffset), cJ.ridingVehicleEId === ZJ) {
              const cJ = (0, pZ.c)(ZJ),
                UJ = (0, NZ.d)().getEntityHeading(cJ, FJ);
              IZ().Re(JJ, JJ, IZ().ZERO, UJ)
            }
          }
        });
        else if (!UJ) {
          this.ih.qE.KJJ(FJ, "smoothToServerPos") || this.ih.qE.xI(FJ, "smoothToServerPos");
          const JJ = this.ih.qE.getState(FJ, "smoothToServerPos"),
            cJ = this.ih.qE.YC(FJ).position;
          (0, uZ.setServerPosition)(JJ, cJ[0], cJ[1], cJ[2])
        }
      }
      handleRotationChange(JJ, cJ, ZJ) {
        const FJ = "xRotation" === cJ ? 0 : "yRotation" === cJ ? 1 : 2;
        for (const UJ of (0, NZ.d)().getFollowingEntities(JJ)) {
          const JJ = this.ih.qE.getState(UJ, "meshRotation"),
            cJ = this.ih.qE.RcJ(UJ);
          JJ && cJ.LcJ && (JJ.serverSetRotation[FJ] = ZJ)
        }
      }
      handleScaleChange(JJ, cJ) {
        const ZJ = (0, pZ.c)(JJ);
        if (oc.i.Uf(`entityScale|${ZJ}`, cJ), ZJ === this.ih.XM) {
          var FJ;
          (0, NZ.d)().removeFromEyeHeightCache(ZJ);
          const JJ = this.ih.qE.TJJ(this.ih.XM),
            cJ = null !== (FJ = null === JJ || void 0 === JJ ? void 0 : JJ.physicsState) && void 0 !== FJ ? FJ : {
              type: dZ.s.DEFAULT,
              tier: null
            };
          return void(0, NZ.d)().updatePositionAndPhysics(this.ih.XM, cJ, !1)
        }
        const UJ = (0, NZ.d)().getLifeformType(ZJ);
        if (null === UJ) return;
        const {
          physicsBodyWidth: eJ,
          physicsBodyHeight: XJ
        } = (0, CZ.h)(cJ, UJ);
        this.ih.qE.ucJ(ZJ, eJ, XJ, eJ)
      }
      handleBaseRenderHeadingChange(JJ, cJ) {
        const ZJ = this.ih.qE.getState(JJ, "meshRotation");
        ZJ && (ZJ.baseRenderRotation[1] = cJ);
        for (const FJ of (0, NZ.d)().getFollowingEntities(JJ)) {
          const JJ = this.ih.qE.getState(FJ, "meshRotation"),
            ZJ = this.ih.qE.RcJ(FJ);
          JJ && ZJ.LcJ && (JJ.baseRenderRotation[1] = cJ)
        }
      }
      handleFollowingOffsetChange(JJ, cJ) {
        const ZJ = this.ih.qE.RcJ((0, pZ.c)(JJ));
        if (ZJ && ZJ.offset) {
          const JJ = cJ ? Array.from(cJ) : IZ().ZERO;
          ZJ.offset[0] = JJ[0], ZJ.offset[1] = JJ[1], ZJ.offset[2] = JJ[2]
        }
      }
      handleShouldMatchFollowingEntityRotationChange(JJ, cJ) {
        const ZJ = this.ih.qE.RcJ((0, pZ.c)(JJ));
        ZJ && (ZJ.LcJ = null === cJ || void 0 === cJ || cJ)
      }
      handlePositionChange(JJ, cJ, ZJ) {
        if (this.ih.qE.KJJ(JJ, "smoothToServerPos")) {
          const FJ = this.ih.qE.getState(JJ, "smoothToServerPos");
          (0, uZ.setServerPositionAxis)(FJ, tZ[cJ], ZJ)
        }
      }
      setupItemHandlers() {
        this.roomStateCallbacks.items.XE(((JJ, cJ) => {
          this.allItems[cJ] = JJ, (0, zZ.k)(this.ih, cJ, [JJ.x, JJ.y, JJ.z], JJ.id, {
            amount: JJ.amount,
            attributes: JSON.parse(JJ.attributes),
            bJ: (0, lc.c)(this.ih).cantPickUpItem(cJ),
            size: JJ.size,
            predictedAt: (0, NZ.d)().client.itemDropPrediction.onServerItemAdded(cJ)
          });
          const ZJ = this.createStateCallbacks(JJ);
          for (const FJ of hZ(XZ)) this.onItemFieldChange(cJ, FJ, JJ[FJ]), this.addDetacher(cJ, this.listenForFutureChanges(ZJ, FJ, (JJ => {
            this.onItemFieldChange(cJ, FJ, JJ)
          })))
        })), this.roomStateCallbacks.items.jK(((JJ, cJ) => {
          delete this.allItems[cJ], this.detach(cJ), (0, NZ.d)().client.itemDropPrediction.onServerItemRemoved(cJ), this.ih.qE.KJJ(cJ, this.ih.qE.names.itemState) && this.ih.qE.deleteEntity(cJ), (0, lc.c)(this.ih).disposeEntity(cJ)
        }))
      }
      onItemFieldChange(JJ, cJ, ZJ) {
        if (cJ in tZ) {
          if (this.ih.qE.KJJ(JJ, "itemState")) {
            const FJ = this.ih.qE.getState(JJ, "smoothToServerPos");
            (0, uZ.setServerPositionAxis)(FJ, tZ[cJ], ZJ), (0, NZ.d)().client.itemDropPrediction.onServerItemMoved(JJ)
          }
          return
        }
        if (!this.ih.qE.KJJ(JJ, "itemState")) return;
        const FJ = this.ih.qE.getState(JJ, "itemState");
        "amount" === cJ && ZJ !== FJ.amount && (FJ.creationTime = Date.now()), FJ[cJ] = "attributes" === cJ ? JSON.parse(ZJ) : ZJ
      }
      dispose() {
        if (!this.xn) {
          this.xn = !0, this.ih.off("beforeInputs", this.onFrame), this.ih.off("Hh", this.Km), this.queuedSetups.clear(), this.promotedSetups.clear();
          for (const JJ of this.deferredSetups.values()) oc.i.unsubscribe(JJ);
          this.deferredSetups.clear(), this.ih.qE.vI(this.ih.XM, this.ih.qE.names.XV);
          for (const JJ in this.allItems) this.ih.qE.deleteEntity(JJ), delete this.allItems[JJ];
          for (const JJ of [...this.detachers.keys()]) this.detach(JJ);
          (0, lc.c)(this.ih).clear();
          for (const JJ of (0, NZ.d)().client.iterateEntityIds())(0, NZ.d)().client.disposeEntity(JJ)
        }
      }
    }
    const LZ = [0, 0, 0];

    function aZ(JJ) {
      if ("string" !== typeof JJ) return;
      const cJ = JJ.indexOf("|"),
        ZJ = -1 === cJ ? JJ : JJ.slice(0, cJ),
        FJ = lZ();
      return Object.hasOwn(FJ, ZJ) ? FJ[ZJ] : void 0
    }
    const BZ = new Set;
    const tZ = {
      x: 0,
      y: 1,
      z: 2
    };
    let oZ = null;

    function lZ() {
      return null !== oZ || (oZ = {
        ...Object.fromEntries(UZ.p.map((JJ => {
          const {
            nA: cJ
          } = (0, OZ.d)(JJ);
          return [JJ, cJ]
        }))),
        Pebble: nZ.b,
        Snowball: nZ.b,
        "Snowball Launcher": nZ.b,
        "Reinforced Pebble": nZ.b,
        Bullet: nZ.b,
        "Reinforced Ball": nZ.b,
        Ball: nZ.b,
        Mango: nZ.b,
        "Moonstone Orb": nZ.b,
        ...Object.fromEntries(FZ.o.map((JJ => [(0, vZ.Qb)(JJ), nZ.b]))),
        Arrow: nZ.b,
        "Arrow of Speed": nZ.b,
        "Arrow of Poison": nZ.b,
        "Arrow of Slowness": nZ.b,
        "Arrow of Weakness": nZ.b,
        "Arrow of Knockback": nZ.b,
        "Arrow of Strength": nZ.b,
        "Arrow of Invisibility": nZ.b,
        "Arrow of Jumping": nZ.b,
        "Arrow of Defense": nZ.b,
        "Arrow of Instant Healing": nZ.b,
        "Arrow of Instant Damage": nZ.b,
        "Arrow of Regeneration": nZ.b,
        "Arrow of Haste": nZ.b,
        "Arrow of Shield": nZ.b,
        "Arrow of Double Jump": nZ.b,
        "Arrow of Heat Resistance": nZ.b,
        "Arrow of X-Ray Vision": nZ.b,
        "Arrow of Mining Yield": nZ.b,
        "Arrow of Brain Rot": nZ.b,
        "Arrow of Milk": nZ.b,
        Fireball: nZ.b,
        "Bouncy Bomb": nZ.b,
        RPG: nZ.b,
        "Obby RPG": nZ.b,
        "Super RPG": nZ.b,
        "Grenade Launcher": nZ.b,
        Iceball: nZ.b,
        Coconut: nZ.b,
        "Splash Speed Potion": nZ.b,
        "Splash Defense Potion": nZ.b,
        "Splash Strength Potion": nZ.b,
        "Splash Invisibility Potion": nZ.b,
        "Splash Jump Potion": nZ.b,
        "Splash Knockback Potion": nZ.b,
        "Splash Poison Potion": nZ.b,
        "Splash Speed Potion II": nZ.b,
        "Splash Defense Potion II": nZ.b,
        "Splash Strength Potion II": nZ.b,
        "Splash Jump Potion II": nZ.b,
        "Splash Knockback Potion II": nZ.b,
        "Splash Poison Potion II": nZ.b,
        "Splash Slowness Potion": nZ.b,
        "Splash Slowness Potion II": nZ.b,
        "Splash Weakness Potion": nZ.b,
        "Splash Weakness Potion II": nZ.b,
        "Splash Milk Potion": nZ.b,
        "Splash Instant Damage Potion": nZ.b,
        "Splash Instant Damage Potion II": nZ.b,
        "Splash Instant Healing Potion": nZ.b,
        "Splash Instant Healing Potion II": nZ.b,
        "Splash Regeneration Potion": nZ.b,
        "Splash Regeneration Potion II": nZ.b,
        "Splash Haste Potion": nZ.b,
        "Splash Haste Potion II": nZ.b,
        "Splash Shield Potion": nZ.b,
        "Splash Shield Potion II": nZ.b,
        "Splash Double Jump Potion": nZ.b,
        "Splash Heat Resistance Potion": nZ.b,
        "Splash X-Ray Vision Potion": nZ.b,
        "Splash Mining Yield Potion": nZ.b,
        "Splash Mining Yield Potion II": nZ.b,
        "Splash Brain Rot Potion": nZ.b,
        "Yellow Paintball Gun": nZ.b,
        "White Paintball Gun": nZ.b,
        "Red Paintball Gun": nZ.b,
        "Purple Paintball Gun": nZ.b,
        "Pink Paintball Gun": nZ.b,
        "Orange Paintball Gun": nZ.b,
        "Magenta Paintball Gun": nZ.b,
        "Lime Paintball Gun": nZ.b,
        "Light Gray Paintball Gun": nZ.b,
        "Light Blue Paintball Gun": nZ.b,
        "Green Paintball Gun": nZ.b,
        "Gray Paintball Gun": nZ.b,
        "Cyan Paintball Gun": nZ.b,
        "Brown Paintball Gun": nZ.b,
        "Blue Paintball Gun": nZ.b,
        "Black Paintball Gun": nZ.b,
        "Yellow Heavy Paintball Gun": nZ.b,
        "White Heavy Paintball Gun": nZ.b,
        "Red Heavy Paintball Gun": nZ.b,
        "Purple Heavy Paintball Gun": nZ.b,
        "Pink Heavy Paintball Gun": nZ.b,
        "Orange Heavy Paintball Gun": nZ.b,
        "Magenta Heavy Paintball Gun": nZ.b,
        "Lime Heavy Paintball Gun": nZ.b,
        "Light Gray Heavy Paintball Gun": nZ.b,
        "Light Blue Heavy Paintball Gun": nZ.b,
        "Green Heavy Paintball Gun": nZ.b,
        "Gray Heavy Paintball Gun": nZ.b,
        "Cyan Heavy Paintball Gun": nZ.b,
        "Brown Heavy Paintball Gun": nZ.b,
        "Blue Heavy Paintball Gun": nZ.b,
        "Black Heavy Paintball Gun": nZ.b,
        "Toxin Ball": nZ.b,
        "Splash Aura XP Potion": nZ.b,
        "Splash Aura XP Potion II": nZ.b,
        "Arrow of Aura XP": nZ.b,
        Firecracker: nZ.b,
        "Rainbow Firecracker": nZ.b,
        "White Firecracker": nZ.b,
        "Orange Firecracker": nZ.b,
        "Magenta Firecracker": nZ.b,
        "Light Blue Firecracker": nZ.b,
        "Yellow Firecracker": nZ.b,
        "Lime Firecracker": nZ.b,
        "Pink Firecracker": nZ.b,
        "Gray Firecracker": nZ.b,
        "Light Gray Firecracker": nZ.b,
        "Cyan Firecracker": nZ.b,
        "Purple Firecracker": nZ.b,
        "Blue Firecracker": nZ.b,
        "Brown Firecracker": nZ.b,
        "Green Firecracker": nZ.b,
        "Red Firecracker": nZ.b,
        "Black Firecracker": nZ.b,
        "Firecracker Pebble": nZ.b,
        "Rainbow Firecracker Pebble": nZ.b,
        "White Firecracker Pebble": nZ.b,
        "Orange Firecracker Pebble": nZ.b,
        "Magenta Firecracker Pebble": nZ.b,
        "Light Blue Firecracker Pebble": nZ.b,
        "Yellow Firecracker Pebble": nZ.b,
        "Lime Firecracker Pebble": nZ.b,
        "Pink Firecracker Pebble": nZ.b,
        "Gray Firecracker Pebble": nZ.b,
        "Light Gray Firecracker Pebble": nZ.b,
        "Cyan Firecracker Pebble": nZ.b,
        "Purple Firecracker Pebble": nZ.b,
        "Blue Firecracker Pebble": nZ.b,
        "Brown Firecracker Pebble": nZ.b,
        "Green Firecracker Pebble": nZ.b,
        "Red Firecracker Pebble": nZ.b,
        "Black Firecracker Pebble": nZ.b,
        "Blinding Pebble": nZ.b,
        Poop: nZ.b,
        "Wood Boomerang": nZ.b,
        "Stone Boomerang": nZ.b,
        "Iron Boomerang": nZ.b,
        "Gold Boomerang": nZ.b,
        "Diamond Boomerang": nZ.b,
        "Amethite Boomerang": nZ.b,
        "Magmasteel Boomerang": nZ.b,
        "Rubellite Boomerang": nZ.b,
        "Serpentite Boomerang": nZ.b,
        "Moonstone Boomerang": nZ.b,
        "67 Base Projectile": nZ.b,
        "67 Boosted Projectile": nZ.b,
        "Capitano Grenade": nZ.b,
        "Scatter Pellet": nZ.b,
        "Lucky Bomb": nZ.b,
        "Unlucky Bomb": nZ.b,
        "Swap Orb": nZ.b,
        Mesh: gZ,
        AudioEntity: PZ
      }), oZ
    }
  },
  37940: (JJ, cJ, ZJ) => {
    ZJ.d(cJ, {
      b: () => eJ,
      f: () => XJ
    });
    var FJ = ZJ(535),
      UJ = ZJ(36708);
    const eJ = 4e4;
    class XJ {
      constructor() {
        let JJ = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Date.now;
        this.now = JJ, this.editedAt = new Map, this.lastChunkX = NaN, this.lastChunkY = NaN, this.lastChunkZ = NaN, this.lastChunkId = ""
      }
      noteEdit(JJ, cJ, ZJ) {
        const eJ = (0, FJ.Y)(JJ),
          XJ = (0, FJ.Y)(cJ),
          AJ = (0, FJ.Y)(ZJ),
          qJ = this.now();
        if (eJ !== this.lastChunkX || XJ !== this.lastChunkY || AJ !== this.lastChunkZ) {
          this.lastChunkX = eJ, this.lastChunkY = XJ, this.lastChunkZ = AJ, this.lastChunkId = (0, UJ.e)(eJ, XJ, AJ), this.editedAt.delete(this.lastChunkId), this.editedAt.set(this.lastChunkId, qJ);
          for (const [JJ, cJ] of this.editedAt) {
            if (cJ >= qJ - 3e5) break;
            this.editedAt.delete(JJ)
          }
        } else this.editedAt.set(this.lastChunkId, qJ)
      }
      chunksEditedSince(JJ) {
        const cJ = [];
        for (const [ZJ, FJ] of this.editedAt) FJ >= JJ && cJ.push(ZJ);
        return cJ
      }
    }
  },
  38026: (JJ, cJ, ZJ) => {
    ZJ.d(cJ, {
      b: () => jc,
      c: () => pc,
      e: () => Ic,
      g: () => dc
    });
    var FJ = ZJ(3155),
      UJ = ZJ(8043),
      eJ = ZJ(35745),
      XJ = ZJ(1319),
      AJ = ZJ(35783),
      qJ = ZJ(37977),
      jJ = ZJ(37907),
      YJ = ZJ(3242),
      hJ = ZJ(36837),
      DJ = ZJ(1137),
      sJ = ZJ(227),
      nJ = ZJ(17),
      GJ = ZJ(1725),
      fJ = ZJ(80),
      xJ = ZJ(29),
      rJ = ZJ(1756),
      vJ = ZJ(1671),
      mJ = ZJ(2498);
    class QJ {
      constructor(JJ) {
        this.storeForMs = JJ, this.clicks = new mJ.d
      }
      click() {
        this.clicks.enqueue(Date.now());
        const JJ = Date.now() - this.storeForMs;
        for (; this.clicks.size > 0 && this.clicks.peek() < JJ;) this.clicks.dequeue()
      }
      getNumClicksInMs(JJ) {
        let cJ = 0;
        return this.clicks.forEach((ZJ => {
          ZJ > Date.now() - JJ && cJ++
        })), cJ
      }
      getMaxClickSeparationInMs(JJ) {
        if (0 === this.clicks.size) return this.storeForMs;
        let cJ = 0,
          ZJ = Date.now() - JJ;
        this.clicks.forEach((FJ => {
          FJ < Date.now() - JJ || (cJ = Math.max(cJ, Math.abs(FJ - ZJ)), ZJ = FJ)
        }));
        const FJ = Math.abs(Date.now() - ZJ);
        return Math.max(cJ, FJ)
      }
    }
    class EJ {
      constructor(JJ) {
        this.storeForMs = JJ, this.clickDownDurations = new mJ.d
      }
      registerClickDownDuration(JJ) {
        this.clickDownDurations.enqueue({
          dur: JJ,
          atTime: Date.now()
        });
        const cJ = Date.now() - this.storeForMs;
        for (; this.clickDownDurations.size > 0 && this.clickDownDurations.peek().atTime < cJ;) this.clickDownDurations.dequeue()
      }
      clickDownDurationsCheck(JJ) {
        if (JJ > this.storeForMs) return console.error("overDuration is greater than storeForMs"), "0:0";
        let cJ = 0,
          ZJ = 0;
        return this.clickDownDurations.forEach((FJ => {
          FJ.atTime > Date.now() - JJ && (cJ++, ZJ = Math.max(ZJ, FJ.dur))
        })), `${cJ}:${ZJ}`
      }
    }
    var VJ = ZJ(35562),
      KJ = ZJ(38033),
      yJ = ZJ(13),
      SJ = ZJ(2401),
      IJ = ZJ(1213),
      MJ = ZJ(37948),
      bJ = ZJ(3845),
      wJ = ZJ(112),
      WJ = ZJ(37146),
      gJ = ZJ(37370),
      HJ = ZJ(535),
      PJ = ZJ(35560),
      kJ = ZJ(6),
      pJ = ZJ(8636),
      dJ = ZJ(1122),
      zJ = ZJ(157),
      NJ = ZJ(38036),
      OJ = ZJ(38044),
      TJ = ZJ(37179),
      CJ = ZJ(38060),
      uJ = ZJ(37098),
      iJ = ZJ(2893),
      RJ = ZJ(1528),
      LJ = ZJ(35661),
      aJ = ZJ(2610),
      BJ = ZJ(38052),
      tJ = ZJ(36906);
    const oJ = {
      forward: "freeCamForward",
      backward: "freeCamBackward",
      left: "freeCamLeft",
      right: "freeCamRight",
      jump: "freeCamUp",
      crouch: "freeCamDown"
    };

    function lJ() {
      var JJ;
      const cJ = (0, SJ.d)().client;
      return (null === cJ || void 0 === cJ ? void 0 : cJ.isReplayMode()) && (null === (JJ = cJ.freeCameraController) || void 0 === JJ ? void 0 : JJ.isEnabled())
    }

    function Jc(JJ) {
      const cJ = JJ.on.bind(JJ);
      JJ.on = (JJ, ZJ) => {
        rJ.D.has(JJ) ? cJ(JJ, ZJ) : cJ(JJ, (cJ => {
          var FJ;
          return null !== (FJ = (0, SJ.d)().client) && void 0 !== FJ && FJ.isReplayMode() ? function(JJ) {
            return JJ in oJ
          }(JJ) && lJ() ? ZJ(cJ) : void 0 : ZJ(cJ)
        }))
      }
    }
    const cc = 5e3,
      Zc = 1;
    let Fc, Uc = Zc,
      ec = 0;
    const Xc = !0;
    let Ac = Xc;
    GJ.b.subscribe("_ignoreBasicBoards", (JJ => {
      Ac = JJ
    })), (0, FJ.onGameReset)((() => {
      Ac = Xc
    }));
    let qc = null;
    const jc = () => qc;
    let Yc, hc, Dc;
    var sc, nc, Gc, fc, xc, rc, vc, mc, Qc;
    const Ec = ["b", 0, 1, 49, 3, 131, "i", 188, 195, 6, 21, 8, 255, "length", 213, 79, "d", 240, "e", "undefined", void 0, 2, "c", 63, "fromCodePoint", 7, 12, "push", 216, 34, "a", 11, "j", 88, 228, 115, 9, "g", 91, "f", 8191, 13, 14, 210, 108, 87, 211, 5, 183, 1023, 65536, 10, 55296, 56320, 129, 169, 196, 165, 128, 199, 31, 15, 18, 161, 43, 221, 192, 217, 243, 62, 193, 224, 191, 117, !1, 106, 82, 99, 158, 141, 4, "h", 127, "V", 76, 214, 93, 47, 233, 132, null, 247, 198, 187, !0, 50, "k", 172];

    function Vc(...JJ) {
      return JJ[Ec[13]] = Ec[2], typeof sc[JJ[Ec[1]]] === Ec[19] ? sc[JJ[Ec[1]]] = function(...JJ) {
        for (Sc(JJ[Ec[13]] = Ec[2], JJ[Ec[5]] = 'xMKQcrOldtZnWNLGFeY9}UAVw5aiHPD7*@;~#B0so!>,(pq[%6&f|:_I]={S.EJvgu`8"by1T?X^)<hzjk3mRC4$+2/', JJ[Ec[0]] = "" + (JJ[Ec[1]] || ""), JJ[Ec[4]] = JJ[Ec[0]].length, JJ[-Ec[10]] = [], JJ[-Ec[8]] = Ec[1], JJ[Ec[9]] = Ec[1], JJ[Ec[7]] = -Ec[2]), JJ[Ec[3]] = Ec[1]; JJ[Ec[3]] < JJ[Ec[4]]; JJ[Ec[3]]++)
          if (JJ[Ec[6]] = JJ[Ec[5]].indexOf(JJ[Ec[0]][JJ[Ec[3]]]), JJ[Ec[6]] !== -Ec[2])
            if (JJ[Ec[7]] < Ec[1]) JJ[Ec[7]] = JJ[Ec[6]];
            else {
              Sc(JJ[Ec[7]] += JJ[Ec[6]] * Ec[38], JJ[-Ec[8]] |= JJ[Ec[7]] << JJ[Ec[9]], JJ[Ec[9]] += (JJ[Ec[7]] & Ec[40]) > Ec[33] ? Ec[41] : Ec[42]);
              do {
                Sc(JJ[-Ec[10]].push(JJ[-Ec[8]] & Ec[12]), JJ[-Ec[8]] >>= Ec[11], JJ[Ec[9]] -= Ec[11])
              } while (JJ[Ec[9]] > Ec[25]);
              JJ[Ec[7]] = -Ec[2]
            } return JJ[Ec[7]] > -Ec[2] && JJ[-Ec[10]].push((JJ[-Ec[8]] | JJ[Ec[7]] << JJ[Ec[9]]) & Ec[12]), Kc(JJ[-Ec[10]])
      }(nc[JJ[Ec[1]]]) : sc[JJ[Ec[1]]]
    }

    function Kc(...JJ) {
      return JJ[Ec[13]] = Ec[2], typeof fc !== Ec[19] && fc ? (new fc).decode(new xc(JJ[Ec[1]])) : typeof rc !== Ec[19] && rc ? rc.from(JJ[Ec[1]]).toString("utf-8") : Qc(JJ[Ec[1]])
    }

    function yc() {}

    function Sc() {
      Sc = function() {}
    }

    function Ic(JJ) {
      function cJ() {
        return JJ.qE.WcJ(JJ.XM)
      }
      Jc(JJ.inputs.down), Jc(JJ.inputs.up);
      for (const FJ of ["forward", "backward", "left", "right", "sprint", "jump", "crouch"]) {
        const cJ = (cJ, ZJ) => {
          var UJ, eJ;
          if (lJ()) {
            const JJ = oJ[FJ];
            var XJ, AJ;
            if (JJ) null === (XJ = (0, SJ.d)().client) || void 0 === XJ || null === (AJ = XJ.freeCameraController) || void 0 === AJ || AJ.handlefreeCamKeyPress(JJ, cJ, ZJ);
            return
          }
          if (null !== (UJ = (0, SJ.d)().client) && void 0 !== UJ && null !== (eJ = UJ.freeCameraController) && void 0 !== eJ && eJ.isKeyPressOverriden(cJ)) return;
          JJ.qE.pcJ()[FJ] = ZJ
        };
        JJ.inputs.down.on(FJ, (JJ => cJ(JJ, !0))), JJ.inputs.up.on(FJ, (JJ => cJ(JJ, !1)))
      }
      JJ.inputs.down.on("crouch", (() => {
        if (lJ()) return;
        if (!JJ.ZE.canCrouch) return;
        const cJ = JJ.qE.pcJ();
        yJ.d.get("clientEscMenuOptions").crouchIsToggle && (cJ.crouchToggled = !cJ.crouchToggled && !cJ.padSneakToggled), cJ.padSneakToggled = !1
      }));
      const ZJ = () => {
        const JJ = cJ();
        JJ.isGun() && JJ.inaccuracyCalculator.jump()
      };
      JJ.inputs.down.on("jump", (JJ => {
        lJ() || (ZJ(), Yc(JJ))
      }));
      for (const FJ of rJ.n) JJ.inputs.down.on(FJ, (JJ => {
        var cJ, ZJ;
        null !== (cJ = (0, SJ.d)().client) && void 0 !== cJ && null !== (ZJ = cJ.freeCameraController) && void 0 !== ZJ && ZJ.handlefreeCamKeyPress(FJ, JJ, !0) && (JJ.preventDefault(), JJ.stopPropagation())
      })), JJ.inputs.up.on(FJ, (JJ => {
        var cJ, ZJ;
        null !== (cJ = (0, SJ.d)().client) && void 0 !== cJ && null !== (ZJ = cJ.freeCameraController) && void 0 !== ZJ && ZJ.handlefreeCamKeyPress(FJ, JJ, !1) && (JJ.preventDefault(), JJ.stopPropagation())
      }));
      JJ.inputs.down.on("recordGame", (() => {
        var JJ, cJ;
        null === (JJ = (0, SJ.d)().client) || void 0 === JJ || null === (cJ = JJ.gameRecorder) || void 0 === cJ || cJ.toggleRecording()
      })), JJ.inputs.down.on("recordClip", (() => {
        var JJ, cJ;
        (0, VJ.b)() || null === (JJ = (0, SJ.d)().client) || void 0 === JJ || null === (cJ = JJ.gameRecorder) || void 0 === cJ || cJ.saveClip()
      }));
      for (const FJ of rJ.D) JJ.inputs.down.on(FJ, (() => {
        var JJ;
        if ((0, KJ.c)()) return;
        if ("replayViewerOpen" === FJ) return void nJ.i.Uf("replayViewer|requested", "toggle");
        const cJ = null === (JJ = (0, SJ.d)().client) || void 0 === JJ ? void 0 : JJ.gameReplayer;
        ((0, VJ.b)() || null !== cJ && void 0 !== cJ && cJ.isReplayMode()) && (null === cJ || void 0 === cJ || cJ.handleAction(FJ))
      }));
      const XJ = new QJ(3e4),
        hJ = new EJ(4e4);
      let xJ = 0;
      const mJ = JJ => {
          let cJ = 0,
            ZJ = null;
          const FJ = cJ => null !== cJ && cJ === ZJ && (ZJ = null, JJ(), !0);
          return {
            press: () => (cJ++, (0, NJ.b)() || (FJ(ZJ), ZJ = cJ), cJ),
            owns: JJ => JJ === ZJ,
            release: FJ
          }
        },
        bJ = (JJ, ZJ) => {
          ZJ && dc(DJ.b.TouchDownFirePrimary), JJ ? pJ() : ((0, gJ.h)(), cJ().MZJ()), ZJ || dc(DJ.b.DownFirePrimary), pc(!0), XJ.click();
          const UJ = XJ.getMaxClickSeparationInMs(3e4) < 1e3 / 30,
            eJ = XJ.getMaxClickSeparationInMs(1e4) < 20,
            AJ = XJ.getMaxClickSeparationInMs(4e3) < 1e3 / 70;
          if (UJ || eJ || AJ) {
            let JJ;
            if (UJ) JJ = 30;
            else if (eJ) JJ = 50;
            else {
              if (!AJ) throw new Error("???");
              JJ = 70
            }(0, FJ.sendColyMessage)(YJ.Oj, JJ)
          }
        },
        wJ = mJ((() => {
          const JJ = Date.now() - xJ;
          hJ.registerClickDownDuration(JJ), cJ().VZJ(), dc(DJ.b.UpFirePrimary), pc(!1);
          const ZJ = hJ.clickDownDurationsCheck(4e4);
          (0, FJ.sendColyMessage)(YJ.pg, ZJ)
        }));
      let WJ = 0;
      JJ.inputs.down.on("primary-fire", (function(JJ) {
        WJ = wJ.press(), wJ.owns(WJ) && (xJ = Date.now(), Math.abs(performance.now() - JJ.timeStamp) > 5e3 || (bJ(JJ.altKey, "changedTouches" in JJ), Yc(JJ)))
      })), JJ.inputs.up.on("primary-fire", (function(JJ) {
        wJ.release(WJ) && Yc(JJ, !0)
      }));
      const HJ = () => {
          cJ().DjJ(), dc(DJ.b.DownFireSecondary), pc(!0), JJ.fJJ && !JJ.fJJ.position && (0, jJ.e)()
        },
        PJ = mJ((() => {
          cJ().EZJ(), dc(DJ.b.UpFireSecondary), pc(!1)
        }));
      let kJ = 0;
      JJ.inputs.down.on("alt-fire", (function(JJ) {
        kJ = PJ.press(), PJ.owns(kJ) && (HJ(), Yc(JJ))
      })), JJ.inputs.up.on("alt-fire", (function(JJ) {
        PJ.release(kJ) && Yc(JJ, !0)
      }));
      const pJ = () => cJ().GjJ();
      JJ.inputs.down.on("mid-fire", (() => {
        (0, NJ.b)() || pJ()
      }));
      const CJ = JJ => {
          (0, FJ.sendColyMessage)(YJ.sh, JJ)
        },
        Fc = JJ => {
          (0, FJ.sendColyMessage)(YJ.wh, {
            Yj: JJ,
            hj: Xc()
          })
        };
      for (const FJ of ["SpecialAction1", "SpecialAction2"]) JJ.inputs.down.on(FJ, (() => {
        CJ(FJ)
      })), JJ.inputs.up.on(FJ, (() => {
        Fc(FJ)
      }));
      const ec = () => {
        const JJ = cJ();
        JJ.isGun() && JJ.reload(Date.now())
      };
      JJ.inputs.down.on("ReloadGun", ec);
      const Xc = () => {
        let cJ = "a";
        return JJ.physics.testSolid.toString().includes("DD") || (cJ = "b"), cJ
      };
      JJ.inputs.down.on("OpenInventory", (JJ => {
        JJ.preventDefault(), (0, RJ.t)(JJ, "inventory", (0, OJ.b)((0, SJ.h)()))
      })), JJ.inputs.bind("ShiftHeld", "ShiftLeft", "ShiftRight");
      const Ac = JJ => {
        nJ.i.Uf("DropItemKeyPressed", JJ)
      };
      JJ.inputs.down.on("DropItem", (() => {
        Ac(JJ.qE.pcJ().crouch)
      })), JJ.inputs.down.on("OpenShop", (cJ => {
        (0, VJ.b)() || "inGame" === yJ.d.get("gameState") && (0, RJ.s)(cJ, sJ.m.SHOP, !(0, UJ.e)(JJ.ZE.shopInfo))
      })), JJ.inputs.down.on("OpenLobbyLeaderboard", (cJ => {
        (0, VJ.b)() || "inGame" === yJ.d.get("gameState") && (0, RJ.s)(cJ, sJ.m.LOBBY_LEADERBOARD, !!JJ.ZE.lobbyLeaderboardInfo)
      })), JJ.inputs.down.on("HideUi", (() => {
        nJ.i.Uf("showUi", !1)
      })), JJ.inputs.up.on("HideUi", (() => {
        nJ.i.Uf("showUi", !0)
      }));
      const jc = JJ => {
        0 === JJ && (JJ = 10), nJ.i.Uf("setSelectedInventorySlotI", JJ - 1), nJ.i.Uf("numkeyPressed", JJ)
      };
      for (let FJ = 1; FJ <= 10; FJ++) JJ.inputs.down.on("HotBarSlot" + FJ.toString(), (() => {
        jc(FJ)
      }));
      JJ.inputs.down.on("OpenTasksAndLeaderboard", (cJ => {
        const ZJ = (0, LJ.k)();
        ZJ ? (0, RJ.v)(cJ, !0, ZJ) : (0, RJ.t)(cJ, "retentionFeatures", !(!JJ.ZE._tasks && !JJ.ZE._availableLeaderboards))
      })), JJ.inputs.down.on("OpenCodeEditor", (cJ => {
        (0, RJ.v)(cJ, (0, MJ.c)((0, IJ.e)()), (() => {
          nJ.i.Uf("EditLobbyCode", JJ.qE.Om(JJ.XM).map(Math.floor))
        }))
      })), JJ.inputs.bind("ToggleFullCoordinateOverlay", "F3"), JJ.inputs.down.on("ToggleFullCoordinateOverlay", (() => {
        nJ.i.Uf("toggleFullCoordinateOverlay")
      }));
      const Dc = () => {
        (0, SJ.d)().client.cameraController.swapCameraZoom()
      };
      JJ.inputs.down.on("SwapCameraZoom", Dc), JJ.inputs.down.on("OpenInviteLink", (JJ => {
        (0, RJ.t)(JJ, "inviteLink", fJ.featureFlags.canUseInviteLinks)
      })), JJ.inputs.bind("Y", "KeyY"), JJ.inputs.down.on("Y", (JJ => {
        (0, VJ.b)() || nJ.i.Uf("YKeyPressed")
      })), JJ.inputs.bind("X", "KeyX"), JJ.inputs.down.on("X", (JJ => {
        (0, VJ.b)() || nJ.i.Uf("XKeyPressed")
      })), JJ.inputs.down.on("OpenEmoteWheel", (() => {
        nJ.i.Uf("requestEmoteWheelHoldOpen")
      })), JJ.inputs.up.on("OpenEmoteWheel", (() => {
        nJ.i.Uf("requestEmoteWheelHoldRelease")
      })), JJ.inputs.down.on("Zoom", (() => {
        if ("inGame" === yJ.d.get("gameState")) {
          JJ.qE.getState(JJ.XM, "playerCameraAdjustment").zoomKeyPressed = !0, (0, SJ.d)().client.cameraController.handleZoomKeyPressed()
        }
      })), JJ.inputs.up.on("Zoom", (() => {
        JJ.qE.getState(JJ.XM, "playerCameraAdjustment").zoomKeyPressed = !1
      })), Mc();
      const sc = JJ => function() {
        return hc(), JJ(...arguments)
      };

      function nc(JJ) {
        "inGame" !== yJ.d.get("gameState") || (0, RJ.o)() || (nJ.i.Uf("ctrlCrouchWithoutFullscreen"), JJ.preventDefault())
      }
      qc = {
        primaryFireDown: sc((() => {
          const JJ = wJ.press();
          return wJ.owns(JJ) && (xJ = Date.now(), bJ(!1, !1)), JJ
        })),
        primaryFireUp: sc((JJ => {
          wJ.release(JJ)
        })),
        altFireDown: sc((() => {
          const JJ = PJ.press();
          return PJ.owns(JJ) && HJ(), JJ
        })),
        altFireUp: sc((JJ => {
          PJ.release(JJ)
        })),
        jumpDown: sc(ZJ),
        specialActionDown: sc(CJ),
        specialActionUp: sc(Fc),
        reloadGun: sc(ec),
        dropItem: sc(Ac),
        swapCameraZoom: sc(Dc),
        Am: sc(pJ)
      }, JJ.inputs.down.on("ctrlCrouch", nc), JJ.inputs.up.on("ctrlCrouch", nc), JJ.inputs.bind("ctrlCrouch", "ControlLeft");
      const Gc = JJ => {
        "inGame" === yJ.d.get("gameState") && JJ.ctrlKey && !(0, RJ.o)() && JJ.preventDefault()
      };
      document.addEventListener("keydown", Gc), document.addEventListener("keyup", Gc), document.addEventListener("keypress", Gc), JJ.inputs.bind("Alt", "AltLeft", "AltRight"), JJ.inputs.down.on("Alt", (JJ => {
        JJ.preventDefault()
      }));
      const fc = cJ => (0, uJ.k)(JJ, cJ),
        xc = cJ => (0, uJ.m)(JJ, cJ),
        rc = [0, 0, 0],
        vc = [0, 0, 1];
      JJ.on("afterRender", (cJ => {
        (0, eJ.e)(JJ.camera.heading), (0, uJ.p)(JJ, rc, vc), (0, SJ.d)().client.triggerGameCallback("onAfterRender", cJ, {
          cameraHeading: JJ.camera.heading,
          cameraPitch: JJ.camera.pitch,
          cameraPosition: rc,
          cameraDirection: vc,
          tanHalfFovX: (0, uJ.e)(JJ),
          tanHalfFovY: Math.tan(JJ.XG.sL().fov / 2),
          screenBandPct: {
            x: iJ.e,
            y: (0, iJ.n)()
          },
          projectWorldPosToScreenPos: fc,
          projectWorldPosToViewport: xc
        })
      })), (0, aJ.q)("look") && (JJ.camera.mp = (0, BJ.j)("js"), JJ.inputs.zN = BJ.f), (0, aJ.q)("remesh") && (0, tJ.f)(JJ), JJ.on("beforeInputs", (() => {
        if ((0, KJ.c)()) return JJ.inputs.iN.dx = 0, void(JJ.inputs.iN.dy = 0);
        if (JJ.camera.iN.dx += JJ.inputs.iN.dx, JJ.camera.iN.dy += JJ.inputs.iN.dy, 0 !== JJ.inputs.iN.dx || 0 !== JJ.inputs.iN.dy) {
          JJ.qE.getState(JJ.XM, "playerCameraAdjustment").lastPointerMove = Date.now()
        }
        JJ.inputs.iN.dx = 0, JJ.inputs.iN.dy = 0
      }));
      let mc = 0;
      JJ.on("Hh", (function(cJ) {
        nJ.i.Uf("noaTick", cJ);
        const ZJ = (0, SJ.d)().client;
        if (ZJ.triggerGameCallback("Hh", cJ), ZJ.isClientGameSessionActive()) try {
          qJ.b.Hh(cJ)
        } catch (XJ) {
          console.error("Error ticking audio entities", XJ)
        }
        if (!JJ.qE.bcJ(JJ.XM).isAlive) return;
        Date.now() - mc > 9e3 && (! function() {
          const JJ = (0, SJ.h)();
          "number" === typeof JJ.ZE.speedMultiplier && "number" === typeof JJ.ZE.jumpAmount && (0, FJ.sendColyMessage)(YJ.Xh, {
            wj: (0, dJ.e)(JJ.ZE.speedMultiplier),
            Wj: (0, dJ.d)(JJ.ZE.jumpAmount),
            gj: (0, dJ.e)(JJ.ZE.crouchingSpeed),
            Hj: (0, dJ.e)(JJ.ZE.walkingSpeed),
            Pj: (0, dJ.e)(JJ.ZE.runningSpeed),
            kj: (0, dJ.d)(JJ.AJJ),
            pj: JJ.qE.TJJ(JJ.XM).jumpForce,
            zj: JJ.qE.YC(1).width,
            Nj: JJ.qE.YC(1).height,
            Oj: JJ.qE.iH(1).Oj
          }, !0)
        }(), mc = Date.now());
        const UJ = JJ.qE.pcJ();
        if ((UJ.jump || UJ.forward || UJ.backward || UJ.left || UJ.right || UJ.sprint) && nJ.i.Uf("usedKeyboard"), JJ.qE.scJ(JJ.XM) && !0 === JJ.ZE.canPickUpItems) {
          const cJ = JJ.qE.Om(JJ.XM),
            ZJ = (0, vJ.n)(Uc),
            UJ = (0, vJ.r)(Uc),
            eJ = [cJ[0] - ZJ, cJ[1] - .6 * UJ, cJ[2] - ZJ],
            XJ = [cJ[0] + ZJ, cJ[1] + zJ.c.Dv + .6 * UJ, cJ[2] + ZJ],
            qJ = JJ.qE.fAJ({
              base: eJ,
              max: XJ
            }, JJ.qE.names.autoRotate),
            hJ = JJ => {
              const cJ = zJ.c.droppedBlockSize / 2;
              return [0, 1, 2].every((ZJ => JJ[ZJ] >= eJ[ZJ] - cJ && JJ[ZJ] <= XJ[ZJ] + cJ))
            },
            {
              itemDropPrediction: DJ
            } = (0, SJ.d)().client,
            sJ = FJ.offlineInputReplay.holdsInput();
          if (qJ.length > 0)
            for (const nJ of qJ) {
              const cJ = JJ.qE.getState(nJ, "itemState");
              if (void 0 === cJ || Date.now() - cJ.creationTime < 500) continue;
              let ZJ = nJ,
                UJ = null;
              if (cJ.bJ) {
                const JJ = DJ.pickupTarget(nJ, hJ, sJ);
                if (null === JJ) continue;
                ({
                  wX: ZJ,
                  HX: UJ
                } = JJ)
              }
              const eJ = JJ.qE.getState(ZJ, "itemState");
              if (eJ.bJ && null === UJ) continue;
              let XJ = 0,
                qJ = null,
                GJ = !1;
              if (0 === eJ.amount) GJ = !0;
              else {
                const {
                  amountPickedUp: cJ
                } = JJ.qE.hcJ(JJ.XM).pickUpItem({
                  name: eJ.name,
                  typeObj: eJ.typeObj,
                  amount: eJ.amount,
                  attributes: eJ.attributes
                });
                if (XJ = cJ, 0 === XJ) continue;
                qJ = TJ.c.pickUp(eJ, XJ), eJ.amount -= XJ, eJ.amount < 0 ? console.error("Picking up led to less than 0 of item!") : 0 === eJ.amount ? GJ = !0 : eJ.creationTime = Date.now() + cc
              }
              const fJ = (0, SJ.d)().client.inventoryPrediction.record(qJ);
              (0, FJ.sendColyMessage)(YJ.nh, {
                wX: null === UJ ? ZJ : "",
                WX: XJ,
                gX: jJ.d,
                ZX: fJ,
                HX: UJ
              }, !0), GJ && (sJ && DJ.onPickedUpOffline(ZJ, fJ, UJ), null === UJ && JJ.qE.deleteEntity(ZJ));
              AJ.c.play("pickUp", zJ.c.pickupSoundVol).rate(1 + Math.random() * zJ.c.pickupSoundRateVariation)
            }
        }
        if (!JJ.qE.ZcJ(JJ.XM)) return;
        const eJ = JJ.inputs.iN.LJJ;
        if (0 !== eJ) {
          const cJ = eJ > 0 ? 1 : -1;
          JJ.inputs.state["mid-fire"] || JJ.inputs.state.Alt || !JJ.ZE.useInventory ? (JJ.inputs.state["mid-fire"] && nJ.i.Uf("requestEmoteWheelClose"), (0, SJ.d)().client.cameraController.handleScrollZoom(cJ)) : nJ.i.Uf("ScrollInventorySlot", cJ)
        }
      })), GJ.b.subscribe("droppedItemScale", (JJ => {
        Uc = "number" === typeof JJ && isFinite(JJ) ? JJ : Zc
      }))
    }

    function Mc() {
      const JJ = (0, SJ.h)();
      if (JJ)
        for (const cJ in rJ.z) {
          JJ.inputs.unbind(cJ);
          for (const ZJ of rJ.z[cJ]) JJ.inputs.bind(cJ, ZJ)
        }
    }
    Sc(sc = {}, nc = ["!fP|%^tby{b:U#d", "8e%O;67PuYzYcsSV_ubZF0Kj*W7;R~T7V})XeJxj0g^~BFO5);Q", 'X}s?|T@~I}GJ$0M,)]G|6fCl~.L;~K7>my"X!")OSd%egiyBR%Q', 'Xu"l5)>|2uoZtF@7_tQr5=l5hS/AMFp08V1t@?GNHL%e*iLohy8Ps?x', 'a,eh!"1PLGlzUF@#ZaGtR1c>au7S>BP#G,q|$05:lZIj>0M7_ps|A', "OaeiaSr$m=mnNFO06,B7X%x", "CffXKqvV!u{<|G5HAqa<?b!~YGzyOBKwUGG@[yl!O", "MWN7OTnM", "zO+?xsW|jv^YVLHP$Q{*#_;D9_FTUk[i,PD7KTx", "3pzH2@fVc=hyJ3lYfafPYmMv5uXA#QN0~=t_Z0yY^}(", 'Y1J?]z0YFt``nK`V8"Dl:f{w5e&bYr7P"V#<b:f[6W$kqN+PPWf<W', ">}s6w|eMn}V7@%]>+f%6|T]|aL^d~KcYSL&f9k^=K.wJmyQBb}BX~CwK", "W6EIj&)qk_nfdQC~F_:))%w#c", "?QMOo3v[%G[?%GxV]x", "GG^:n4wKl}e;_N5;+x", 'ffY^Xk~P,dt"8Q', "|VUX|sFw+ew{*[=~;.Ff>^oD${s", 'Aq*i0CZ|kWZZpT+~ILplTk?MLUP;#Sr7*OQ<LJ3q<d&Lji{>#"w^9', '0"DlxX:^^e', "k%#l[3PPF=6UE#^0`fbXA)ww|NMfG3ZaCx", 'h]"78qDY)eB', 'Vu2_s6N!g=;L`NvB3fhc(_zM?}"]6.X5?S1t<bO|O', "k]g_r:j|YtANGLxPL=NINXvMv]V{kT/P&p2f^XiP[vQ[k#)0rW,P7Cx", "=;xt,_L{3=nI|QLsXfLt7_]qnJ;Z0Efi`p5^BCgO*=nVFi=!n*4cQ;.YzYiOM", "G,):G=_Dw}.lM%qa7M", "QvyIV1n:HeNuI{D>", 'T%(Z_B:VZLVZRmzsf7I6(Ef~vG{yrE7>"x', ':piXF=N[o{!L2%b5+HxD8kLqxWu5"SZa$pj?y.#Kcth6MT@Vd~:Z', "~B+6Q%X;t{ct/k]~=e0I8zQN*GCrCw9oiM", "_WvHv{Y#Jd$vRSKD^eBZk);D+u`~^0yB2;y1N", "9_CcK.a|B_a}DB4AU1:It#YjX}Bb;5]H", '";Xd,3EM', "y%pHsCzzQ=@TmG17IQ@i5|M$T}d^Za?0VunXT)&oXL6j/y;wNM", "CLs?x.:[DGxV=#10uQzHkbW{m9", "secP=qIV.eie(QCAPXG@[3}#ZeWi:%4;$O6iB^L|)n0eFml7/s:7^XcDc", 'f%pX/Sel9_{<fyI~Ytthk@$P>e8?{5$Ht"_Hw=ooO', 'sa+6cz8V%.Jq6cMD!1@*B]hoUg(b:NC;.a;*IB;4K.O"?kY;?>7tL#^b+}', 'zHbX(]>|SLkk>EB9"x', "Te1).;3;):xti3WapeZf(~b!vGxTM5?7q7M_2=OdX}", "TfotdXXWEnQhpcdYR5OlhX}|6_#%zL?aPM", "17oD}0=NeWS69LCoF1Q", "st@iT&~bHLC<TQ!sAqK", "sXCl%R/q5}.]1a7PgoI6L=x", '#"vOuz3wp`"*%GZ', 'T"}InJD#u.X~tTv>TS(<D[:NUN}bargDs,c&<kA4O', "1_l)!?:^8t/#akFa`J4ti", '=V[c/hyO~9xT$K4FrVZTw[ZD:{Iy9G/>Ha+t6yvV"9C]Dr', ",}%_km~km9X5f3KesP!i/0&4>}1<S3O5Vuq)xTV~Q", "ZWeDkI2l;GUz*FL}>Wg?s[jw3tnuGa/AU.@_gRQ:^e(", "`f*OJ%dDmW_)6.RA(Ji*8zZ4ft", 'p"_)>y@9~9%`Qy4H"HCaF=w4|_g]7KOwxGj69', "k7rIG&V!OZCAiar5cctivI998=#", "HoO7$p_KoegH*m,9iBMD:^z=y9}O;r", "xqwhIyZ#Y97u)Q", 'tal)B6nN"9C<2k9!cW6ON', "/J|Z03aDe`wu4kfiEQn*}hOw9.szviLo1%UlW", "OtPlK#>wZekkZrd5qB)<lkEPz.,btkpinqN7Z0FK", "Bf0cT;hO9gdEN%B7TBI6uzgwgYxu2wNai.U|Z.zP(LMB<wJ#yf_lxqB9,n!", "a_d^Fm6~9.q`q5vPU}S<0[(DCNxt_Er9E_#I?%pb5e", "}*_H0?Pk#gkPiaQwUGQ", 'AX@_u%TwrgDiR~Me8tt^e#nl6.H}:F};PtUIA0EbevF"[{5H', 'a_,X;E.Y4Ng5mL~Y"pUHT;g"[:]lE#^0&fkO~?I!oNIl5#`Yu_R1X04499', "of#<Cb2!F=j5}it7Zo8rPo2M", "}X]6&6JD&G.`ia2!", 'S"y|gIZw:NSns0S>Va8P`#[[jtMKcsH>', "ZcMfuqx", "9=~<$&A|={o?O3Q7yB0)+Shqb_3]%GhaW1X:F1>K", 'D"e__BvN$NUT05T0>J#XM4S[*`d^2b|i', '/>"a#hTq/}tDF[MBn,@i%s##p`O"sy&HRyA|%y/waS@%+[<sS1G_`:e~c', '`?@_?%rlftr[o1OYL*!Df<.DOI!~h5$H"O|ZL&9!LS}zYrKw0a>TW&eM,d', "3%Ca%{![auwQW[Lo", "2H[)jkblzG{<1mY;<7&TO&6v@tf)k./AmB#PE<rv%W*b{EW", '5"Bl3)l!GY~`_BKD(BWZ6y?=QW*T]TE#?}/*.;;#p`"<]F5~e,cZz0|Dr', "ILyHB?s^q]j.G0(shJO7w=hqVN", '.VV@V1xD_gMBsyOY8O!Op"P~3v:YS{QBmp,*%{x', "JSd^Z%hoktGeb%f!^>q|WI,Cf=j.KE8Y|a@fQXQ:%Gc;;BI;Kcyc", "6aqlY#|K498j?T8D9_v6O#x", '~a9PbbDjgW"v&68Y,enTMR4;LURyqLYsr_=d/|Qv6GM3~yPeISLtA', "=%}<wh>wlgp|Dr", "6awhO4W|/Lhn<.UooPV)Y&(Y.LFfN.[aC71?{{eP<dLNN%N", "E%=*%3x", 'I_kdE:xDweN^YLP#`_;i%":PHu#TwiUH$Hv)x.+JC9&7(mt', "r1pX/=Vl]}jMybQ7gOo?9", '<OTt?I.YP`AZji!s0BbX:R"wVg>', "_VcPBodg!ev`,yko@o=_b;>ouG1?b#05tqK", "r=QZF|^!EYBQVa5HTpE7STOq6.S`PT2HD.ElB[4qZS!jrk&;", "9W6_E:j|}_;z#1t", ',7"a(BBlr{p|r%b5muK<E:x>;G', "sfOlYk$=VNX]wQB9s_)Xf<k~l", ";=KrU|8=6GGeM%UH%,Y*Y#^N,Sai{6>5Vq_?A)VkgY", "/?[tGJcdQ", "{B7H|]);B_EvV&w>$%VOh%3o0gK{n3#D+HElYbTwSL#Tn[w>2ds?4@1M", "WG,*6<2em_8<1QPDia|<Dh_o3.qUciEP{S2d+)u~%GZB?chsbpMDL=D|p]]", "!a6_S{KY5J&)_0JeFqiTt###FGxVxii!bQ(Xh0#|qn", ">u*tUSyO8_<:ci_!`oLl<#oD_NYN.iw>BWzc", "`_aPAo}qmgAzZL_H*B2_9&+wPU)~Va/Ay%.7;?;wkY)P)QZ9>}.<Ezx", 'Eu{<0[%|aLp)^aTBB%_luTk!"=6?]QFa17{fmb1=b993]Q', "no@_zm|q4gky8Q+>6x", "WV>Ti~HWMv+WH1N", "#a>izXekEnszEk`Y", '#_baW#"{1{|w;6P#S}UI|TDj&WvMgQ', "V=M^Ho$!<YA{{Nr7jHyl~S@P2L*TYrAH)LMO/h~[PSI~GLksv7jt", "|;o_n0.jE:jYS3N", "(1CcybNl~=y?uk;B<Ofdxs{4PUb]~{+~WcI6$1[~!L`U!cGa_tQ", "ittD;6$~l};", "`%06=ThwCNz:LEYH9M", "kS1|t)rM", "hJ7?&{LK", '>"mrmp:M', "CsHJ;bvq", "{#k602Xq", "pTJQsVW", "ZQjMz6%q", "QDri]&hq", "8Uk(|bNq", "8U8JQ", "Ibry)wiH^c.v6AL&>b1:A<N", "eom*})Xwg&S`h6lBa.fdGX9kvruj;EW", "eom*})Xwvruj;E~n6oD7ERx", '"~,O%BuWT8HxOFDIvf,VOi^WB"8', "4sA6j@x", "7W[#IC2d", "ek0V", "f1l@8k(K", "r,h[71^l,eJ|BcssD=Fthh34^u9f>6W", "YE4}S{n//t#", "y=mV6U7Q", ",XIl3leQ", "y=Ql0(ZQ", "ORW,>+?k", "(x^,tTKk", "nc4C", "]4nA_9TTE", "mo*A8fcpE", "pQCP+U:M", "gR(CN6tk", "Ql/*}+$", "gxW,,+7k", "zEcKi{&9", "z:k{7IC", 'Sc"#H!0D', "=HSCHB>D", "Nr<s", ">[w$]<e", "Q5hNdY8|", "+9Hkfp@.", "AL(%()^.", "h7u,X&TS", "Nev@ZpWh", "![&I6MQ"]), Sc(Gc = function(...JJ) {
      Sc(JJ[Ec[13]] = Ec[1], JJ[Ec[17]] = [function() {
        return globalThis
      }, function() {
        return global
      }, function() {
        return window
      }, function() {
        return new Function("return this")()
      }], JJ[-Ec[14]] = Ec[20], JJ[Ec[15]] = []);
      try {
        Sc(JJ[-Ec[14]] = Object, JJ[Ec[15]][Ec[27]]("".__proto__.constructor.name))
      } catch (nc) {}
      JJ: for (JJ[Ec[16]] = Ec[1]; JJ[Ec[16]] < JJ[Ec[17]][Ec[13]]; JJ[Ec[16]]++) try {
        for (JJ[-Ec[14]] = JJ[Ec[17]][JJ[Ec[16]]](), JJ[Ec[18]] = Ec[1]; JJ[Ec[18]] < JJ[Ec[15]][Ec[13]]; JJ[Ec[18]]++)
          if (typeof JJ[-Ec[14]][JJ[Ec[15]][JJ[Ec[18]]]] === Ec[19]) continue JJ;
        return JJ[-Ec[14]]
      } catch (nc) {}
      return JJ[-Ec[14]] || this
    }() || {}, fc = Gc.TextDecoder, xc = Gc.Uint8Array, rc = Gc.fn, vc = Gc.String || String, mc = Gc.Array || Array, Qc = function(...JJ) {
      return Sc(JJ[Ec[13]] = Ec[1], JJ[-Ec[28]] = new mc(Ec[58]), JJ[Ec[29]] = vc[Ec[24]] || vc.fromCharCode, JJ[Ec[21]] = []),
        function(...cJ) {
          for (Sc(cJ[Ec[13]] = Ec[2], cJ[Ec[2]] = Ec[20], cJ[Ec[0]] = Ec[20], cJ[Ec[22]] = cJ[Ec[1]][Ec[13]], JJ[Ec[21]][Ec[13]] = Ec[1]), cJ[Ec[16]] = Ec[1]; cJ[Ec[16]] < cJ[Ec[22]];) Sc(cJ[Ec[0]] = cJ[Ec[1]][cJ[Ec[16]]++], cJ[Ec[0]] <= Ec[82] ? cJ[Ec[2]] = cJ[Ec[0]] : cJ[Ec[0]] <= 223 ? cJ[Ec[2]] = (cJ[Ec[0]] & Ec[60]) << Ec[9] | cJ[Ec[1]][cJ[Ec[16]]++] & Ec[23] : cJ[Ec[0]] <= 239 ? cJ[Ec[2]] = (cJ[Ec[0]] & Ec[61]) << Ec[26] | (cJ[Ec[1]][cJ[Ec[16]]++] & Ec[23]) << Ec[9] | cJ[Ec[1]][cJ[Ec[16]]++] & Ec[23] : vc[Ec[24]] ? cJ[Ec[2]] = (cJ[Ec[0]] & Ec[25]) << Ec[62] | (cJ[Ec[1]][cJ[Ec[16]]++] & Ec[23]) << Ec[26] | (cJ[Ec[1]][cJ[Ec[16]]++] & Ec[23]) << Ec[9] | cJ[Ec[1]][cJ[Ec[16]]++] & Ec[23] : (cJ[Ec[2]] = Ec[23], cJ[Ec[16]] += Ec[4]), JJ[Ec[21]][Ec[27]](JJ[-Ec[28]][cJ[Ec[2]]] || (JJ[-Ec[28]][cJ[Ec[2]]] = JJ[Ec[29]](cJ[Ec[2]]))));
          return JJ[Ec[21]].join("")
        }
    }()), Vc(Ec[75]), Sc(Dc = (...JJ) => {
      Sc(JJ[Ec[13]] = Ec[2], JJ[Ec[2]] = Ec[1]);
      for (const cJ in JJ[Ec[1]]) {
        function ZJ(...JJ) {
          Sc(JJ[Ec[13]] = Ec[1], JJ[Ec[30]] = function(...JJ) {
            if (Sc(JJ[Ec[13]] = Ec[2], JJ[Ec[2]] = JJ[Ec[1]].length), JJ[Ec[2]] < Ec[21]) return Ec[1];
            if (Sc(JJ[Ec[21]] = Math.max(...JJ[Ec[1]]), JJ[Ec[22]] = Math.min(...JJ[Ec[1]])), JJ[Ec[21]] === JJ[Ec[22]]) return Ec[1];
            for (Sc(JJ[Ec[16]] = Array(JJ[Ec[2]] - Ec[2]).fill(Number.MAX_SAFE_INTEGER), JJ[Ec[28]] = Array(JJ[Ec[2]] - Ec[2]).fill(Number.MIN_SAFE_INTEGER), JJ[Ec[9]] = Math.ceil((JJ[Ec[21]] - JJ[Ec[22]]) / (JJ[Ec[2]] - Ec[2])), JJ[Ec[25]] = Ec[1]), JJ[Ec[11]] = Ec[1]; JJ[Ec[11]] < JJ[Ec[2]]; JJ[Ec[11]]++) JJ[Ec[1]][JJ[Ec[11]]] !== JJ[Ec[22]] && JJ[Ec[1]][JJ[Ec[11]]] !== JJ[Ec[21]] && Sc(JJ[Ec[25]] = Math.floor((JJ[Ec[1]][JJ[Ec[11]]] - JJ[Ec[22]]) / JJ[Ec[9]]), JJ[Ec[16]][JJ[Ec[25]]] = Math.min(JJ[Ec[16]][JJ[Ec[25]]], JJ[Ec[1]][JJ[Ec[11]]]), JJ[Ec[28]][JJ[Ec[25]]] = Math.max(JJ[Ec[28]][JJ[Ec[25]]], JJ[Ec[1]][JJ[Ec[11]]]));
            for (Sc(JJ[Ec[6]] = Number.MIN_SAFE_INTEGER, JJ[Ec[32]] = JJ[Ec[22]]), JJ[Ec[31]] = Ec[1]; JJ[Ec[31]] < JJ[Ec[2]] - Ec[2]; JJ[Ec[31]]++) JJ[Ec[16]][JJ[Ec[31]]] === Number.MAX_SAFE_INTEGER && JJ[Ec[28]][JJ[Ec[31]]] === Number.MIN_SAFE_INTEGER || Sc(JJ[Ec[6]] = Math.max(JJ[Ec[6]], JJ[Ec[16]][JJ[Ec[31]]] - JJ[Ec[32]]), JJ[Ec[32]] = JJ[Ec[28]][JJ[Ec[31]]]);
            return JJ[Ec[6]] = Math.max(JJ[Ec[6]], JJ[Ec[21]] - JJ[Ec[32]]), JJ[Ec[6]]
          }, console.log(JJ[Ec[30]]))
        }
        Vc(107) + "A" in yc && ZJ(), JJ[Ec[2]]++
      }
      return JJ[Ec[2]]
    }, hc = (...JJ) => {
      JJ[Ec[13]] = Ec[1], Vc(Ec[44]) + Ec[30] in yc && function(...JJ) {
        function cJ(...JJ) {
          for (Sc(JJ[Ec[13]] = Ec[2], JJ[Ec[35]] = '=IdMslbDVZQoPhYkFfJtXjnTieEz2y[#gU+O:8|/W5_{ax.r*"p>19&6!?`;w7)%^v4<(@3uCLG0A$,]RNmqHS~}BKc', JJ[Ec[0]] = "" + (JJ[Ec[1]] || ""), JJ[-Ec[34]] = JJ[Ec[0]].length, JJ[Ec[43]] = [], JJ[-Ec[33]] = Ec[1], JJ[Ec[39]] = Ec[1], JJ[Ec[37]] = -Ec[2]), JJ[Ec[11]] = Ec[1]; JJ[Ec[11]] < JJ[-Ec[34]]; JJ[Ec[11]]++)
            if (JJ[Ec[36]] = JJ[Ec[35]].indexOf(JJ[Ec[0]][JJ[Ec[11]]]), JJ[Ec[36]] !== -Ec[2])
              if (JJ[Ec[37]] < Ec[1]) JJ[Ec[37]] = JJ[Ec[36]];
              else {
                Sc(JJ[Ec[37]] += JJ[Ec[36]] * Ec[38], JJ[-Ec[33]] |= JJ[Ec[37]] << JJ[Ec[39]], JJ[Ec[39]] += (JJ[Ec[37]] & Ec[40]) > Ec[33] ? Ec[41] : Ec[42]);
                do {
                  Sc(JJ[Ec[43]].push(JJ[-Ec[33]] & Ec[12]), JJ[-Ec[33]] >>= Ec[11], JJ[Ec[39]] -= Ec[11])
                } while (JJ[Ec[39]] > Ec[25]);
                JJ[Ec[37]] = -Ec[2]
              } return JJ[Ec[37]] > -Ec[2] && JJ[Ec[43]].push((JJ[-Ec[33]] | JJ[Ec[37]] << JJ[Ec[39]]) & Ec[12]), Kc(JJ[Ec[43]])
        }

        function ZJ(JJ) {
          return typeof sc[JJ] === Ec[19] ? sc[JJ] = cJ(nc[JJ]) : sc[JJ]
        }
        JJ[Ec[13]] = Ec[1],
          function(...JJ) {
            function cJ(...JJ) {
              for (Sc(JJ[Ec[13]] = Ec[2], JJ[Ec[48]] = [], JJ[Ec[44]] = Ec[1], JJ[-Ec[45]] = JJ[Ec[1]].length, JJ[Ec[46]] = Ec[20], JJ[Ec[47]] = Ec[20]); JJ[Ec[44]] < JJ[-Ec[45]];) Sc(JJ[Ec[46]] = JJ[Ec[1]].charCodeAt(JJ[Ec[44]]++), JJ[Ec[46]] >= Ec[52] && JJ[Ec[46]] <= 56319 && JJ[Ec[44]] < JJ[-Ec[45]] ? (JJ[Ec[47]] = JJ[Ec[1]].charCodeAt(JJ[Ec[44]]++), (64512 & JJ[Ec[47]]) == Ec[53] ? JJ[Ec[48]].push(((JJ[Ec[46]] & Ec[49]) << Ec[51]) + (JJ[Ec[47]] & Ec[49]) + Ec[50]) : (JJ[Ec[48]].push(JJ[Ec[46]]), JJ[Ec[44]]--)) : JJ[Ec[48]].push(JJ[Ec[46]]));
              return JJ[Ec[48]]
            }

            function ZJ(...cJ) {
              for (Sc(cJ[Ec[13]] = Ec[2], cJ[-Ec[15]] = cJ[Ec[1]].length, cJ[Ec[11]] = -Ec[2], cJ[Ec[22]] = Ec[20], cJ[Ec[16]] = ""); ++cJ[Ec[11]] < cJ[-Ec[15]];) cJ[Ec[22]] = cJ[Ec[1]][cJ[Ec[11]]], cJ[Ec[22]] > 65535 && Sc(cJ[Ec[22]] -= Ec[50], cJ[Ec[16]] += JJ[Ec[2]](cJ[Ec[22]] >>> Ec[51] & Ec[49] | Ec[52]), cJ[Ec[22]] = Ec[53] | cJ[Ec[22]] & Ec[49]), cJ[Ec[16]] += JJ[Ec[2]](cJ[Ec[22]]);
              return cJ[Ec[16]]
            }

            function FJ(...JJ) {
              if (JJ[Ec[13]] = Ec[2], JJ[Ec[1]] >= Ec[52] && JJ[Ec[1]] <= 57343) {
                function cJ(...JJ) {
                  for (Sc(JJ[Ec[13]] = Ec[2], JJ[Ec[56]] = 'WDqCIBfRimMKXjdThYgHG.bScQtPLaVpJFUOle,o%z)swE=Avr~#k(N!<9n:+Z5?u/}0@>y;2[|8$61^&x73{_4"]*`', JJ[Ec[54]] = "" + (JJ[Ec[1]] || ""), JJ[Ec[4]] = JJ[Ec[54]].length, JJ[Ec[16]] = [], JJ[Ec[18]] = Ec[1], JJ[-Ec[57]] = Ec[1], JJ[Ec[25]] = -Ec[2]), JJ[Ec[55]] = Ec[1]; JJ[Ec[55]] < JJ[Ec[4]]; JJ[Ec[55]]++)
                    if (JJ[Ec[6]] = JJ[Ec[56]].indexOf(JJ[Ec[54]][JJ[Ec[55]]]), JJ[Ec[6]] !== -Ec[2])
                      if (JJ[Ec[25]] < Ec[1]) JJ[Ec[25]] = JJ[Ec[6]];
                      else {
                        Sc(JJ[Ec[25]] += JJ[Ec[6]] * Ec[38], JJ[Ec[18]] |= JJ[Ec[25]] << JJ[-Ec[57]], JJ[-Ec[57]] += (JJ[Ec[25]] & Ec[40]) > Ec[33] ? Ec[41] : Ec[42]);
                        do {
                          Sc(JJ[Ec[16]].push(JJ[Ec[18]] & Ec[12]), JJ[Ec[18]] >>= Ec[11], JJ[-Ec[57]] -= Ec[11])
                        } while (JJ[-Ec[57]] > Ec[25]);
                        JJ[Ec[25]] = -Ec[2]
                      } return JJ[Ec[25]] > -Ec[2] && JJ[Ec[16]].push((JJ[Ec[18]] | JJ[Ec[25]] << JJ[-Ec[57]]) & Ec[12]), Kc(JJ[Ec[16]])
                }

                function ZJ(...JJ) {
                  return JJ[Ec[13]] = Ec[2], typeof sc[JJ[Ec[1]]] === Ec[19] ? sc[JJ[Ec[1]]] = cJ(nc[JJ[Ec[1]]]) : sc[JJ[Ec[1]]]
                }
                throw Error(ZJ(109) + ZJ(110) + ZJ(111) + JJ[Ec[1]].toString(16).toUpperCase() + (ZJ(112) + ZJ(113) + ZJ(114) + ZJ(Ec[35])))
              }
            }

            function UJ(...cJ) {
              return cJ[Ec[13]] = Ec[21], JJ[Ec[2]](cJ[Ec[1]] >> cJ[Ec[2]] & Ec[23] | Ec[58])
            }

            function eJ(...cJ) {
              return cJ[Ec[13]] = Ec[2], (4294967168 & cJ[Ec[1]]) == Ec[1] ? JJ[Ec[2]](cJ[Ec[1]]) : (cJ[-Ec[59]] = "", (4294965248 & cJ[Ec[1]]) == Ec[1] ? cJ[-Ec[59]] = JJ[Ec[2]](cJ[Ec[1]] >> Ec[9] & Ec[60] | Ec[66]) : (4294901760 & cJ[Ec[1]]) == Ec[1] ? Sc(FJ(cJ[Ec[1]]), cJ[-Ec[59]] = JJ[Ec[2]](cJ[Ec[1]] >> Ec[26] & Ec[61] | Ec[71]), cJ[-Ec[59]] += UJ(cJ[Ec[1]], Ec[9])) : (4292870144 & cJ[Ec[1]]) == Ec[1] && Sc(cJ[-Ec[59]] = JJ[Ec[2]](cJ[Ec[1]] >> Ec[62] & Ec[25] | Ec[17]), cJ[-Ec[59]] += UJ(cJ[Ec[1]], Ec[26]), cJ[-Ec[59]] += UJ(cJ[Ec[1]], Ec[9])), cJ[-Ec[59]] += JJ[Ec[2]](cJ[Ec[1]] & Ec[23] | Ec[58]), cJ[-Ec[59]])
            }

            function XJ(JJ) {
              var ZJ, FJ, UJ, XJ, AJ = cJ(JJ);
              for (Sc(ZJ = AJ.length, FJ = -Ec[2], UJ = void 0, XJ = ""); ++FJ < ZJ;) Sc(UJ = AJ[FJ], XJ += eJ(UJ));
              return XJ
            }

            function AJ(...cJ) {
              if (cJ[Ec[13]] = Ec[1], JJ[Ec[0]] >= JJ[Ec[4]]) {
                function ZJ(...JJ) {
                  for (Sc(JJ[Ec[13]] = Ec[2], JJ[Ec[2]] = 'N,GZCcjFBaD&5g0PTI;z)}$YHqfEnO1:y36L8x{Qb!+ekml`7>*#=@WK~R]%(AJ^S.[Mdo|hUsipwV9"vtXr<?/42_u', JJ[Ec[0]] = "" + (JJ[Ec[1]] || ""), JJ[Ec[4]] = JJ[Ec[0]].length, JJ[Ec[16]] = [], JJ[Ec[65]] = Ec[1], JJ[Ec[39]] = Ec[1], JJ[-Ec[64]] = -Ec[2]), JJ[Ec[11]] = Ec[1]; JJ[Ec[11]] < JJ[Ec[4]]; JJ[Ec[11]]++)
                    if (JJ[Ec[63]] = JJ[Ec[2]].indexOf(JJ[Ec[0]][JJ[Ec[11]]]), JJ[Ec[63]] !== -Ec[2])
                      if (JJ[-Ec[64]] < Ec[1]) JJ[-Ec[64]] = JJ[Ec[63]];
                      else {
                        Sc(JJ[-Ec[64]] += JJ[Ec[63]] * Ec[38], JJ[Ec[65]] |= JJ[-Ec[64]] << JJ[Ec[39]], JJ[Ec[39]] += (JJ[-Ec[64]] & Ec[40]) > Ec[33] ? Ec[41] : Ec[42]);
                        do {
                          Sc(JJ[Ec[16]].push(JJ[Ec[65]] & Ec[12]), JJ[Ec[65]] >>= Ec[11], JJ[Ec[39]] -= Ec[11])
                        } while (JJ[Ec[39]] > Ec[25]);
                        JJ[-Ec[64]] = -Ec[2]
                      } return JJ[-Ec[64]] > -Ec[2] && JJ[Ec[16]].push((JJ[Ec[65]] | JJ[-Ec[64]] << JJ[Ec[39]]) & Ec[12]), Kc(JJ[Ec[16]])
                }

                function FJ(...JJ) {
                  return JJ[Ec[13]] = Ec[2], typeof sc[JJ[Ec[1]]] === Ec[19] ? sc[JJ[Ec[1]]] = ZJ(nc[JJ[Ec[1]]]) : sc[JJ[Ec[1]]]
                }
                throw Error(FJ(116))
              }
              if (Sc(cJ[-Ec[57]] = JJ[Ec[69]][JJ[Ec[0]]] & Ec[12], JJ[Ec[0]]++), (cJ[-Ec[57]] & Ec[66]) == Ec[58]) return cJ[-Ec[57]] & Ec[23];
              throw Error(Vc(Ec[73]))
            }

            function qJ(...cJ) {
              function ZJ(...JJ) {
                for (Sc(JJ[Ec[13]] = Ec[2], JJ[Ec[2]] = '(PYnhGs6V9EfU`[+@"KI%|!NWp5?xA=;Od1>3bS#~C{wky)r/]8Xg&Hvo4MFj<^cT2:_DJ*i}ZueBz70lm.,QL$qRat', JJ[Ec[0]] = "" + (JJ[Ec[1]] || ""), JJ[Ec[22]] = JJ[Ec[0]].length, JJ[Ec[68]] = [], JJ[Ec[47]] = Ec[1], JJ[Ec[39]] = Ec[1], JJ[Ec[25]] = -Ec[2]), JJ[-Ec[14]] = Ec[1]; JJ[-Ec[14]] < JJ[Ec[22]]; JJ[-Ec[14]]++)
                  if (JJ[Ec[67]] = JJ[Ec[2]].indexOf(JJ[Ec[0]][JJ[-Ec[14]]]), JJ[Ec[67]] !== -Ec[2])
                    if (JJ[Ec[25]] < Ec[1]) JJ[Ec[25]] = JJ[Ec[67]];
                    else {
                      Sc(JJ[Ec[25]] += JJ[Ec[67]] * Ec[38], JJ[Ec[47]] |= JJ[Ec[25]] << JJ[Ec[39]], JJ[Ec[39]] += (JJ[Ec[25]] & Ec[40]) > Ec[33] ? Ec[41] : Ec[42]);
                      do {
                        Sc(JJ[Ec[68]].push(JJ[Ec[47]] & Ec[12]), JJ[Ec[47]] >>= Ec[11], JJ[Ec[39]] -= Ec[11])
                      } while (JJ[Ec[39]] > Ec[25]);
                      JJ[Ec[25]] = -Ec[2]
                    } return JJ[Ec[25]] > -Ec[2] && JJ[Ec[68]].push((JJ[Ec[47]] | JJ[Ec[25]] << JJ[Ec[39]]) & Ec[12]), Kc(JJ[Ec[68]])
              }

              function UJ(...JJ) {
                return JJ[Ec[13]] = Ec[2], typeof sc[JJ[Ec[1]]] === Ec[19] ? sc[JJ[Ec[1]]] = ZJ(nc[JJ[Ec[1]]]) : sc[JJ[Ec[1]]]
              }
              if (cJ[Ec[13]] = Ec[1], Sc(cJ[Ec[70]] = Ec[20], cJ[-Ec[69]] = Ec[20], cJ[Ec[21]] = Ec[20], cJ[Ec[16]] = Ec[20], cJ[-Ec[72]] = Ec[20]), JJ[Ec[0]] > JJ[Ec[4]]) throw Error(Vc(118));
              if (JJ[Ec[0]] == JJ[Ec[4]]) return Ec[74];
              if (Sc(cJ[Ec[70]] = JJ[Ec[69]][JJ[Ec[0]]] & Ec[12], JJ[Ec[0]]++), (cJ[Ec[70]] & Ec[58]) == Ec[1]) return cJ[Ec[70]];
              if ((cJ[Ec[70]] & Ec[71]) == Ec[66]) {
                if (Sc(cJ[-Ec[69]] = AJ(), cJ[-Ec[72]] = (cJ[Ec[70]] & Ec[60]) << Ec[9] | cJ[-Ec[69]]), cJ[-Ec[72]] >= Ec[58]) return cJ[-Ec[72]];
                throw Error(Vc(Ec[73]))
              }
              if ((cJ[Ec[70]] & Ec[17]) == Ec[71]) {
                if (Sc(cJ[-Ec[69]] = AJ(), cJ[Ec[21]] = AJ(), cJ[-Ec[72]] = (cJ[Ec[70]] & Ec[61]) << Ec[26] | cJ[-Ec[69]] << Ec[9] | cJ[Ec[21]]), cJ[-Ec[72]] >= 2048) return FJ(cJ[-Ec[72]]), cJ[-Ec[72]];
                throw Error(Vc(Ec[73]))
              }
              if ((248 & cJ[Ec[70]]) == Ec[17] && (Sc(cJ[-Ec[69]] = AJ(), cJ[Ec[21]] = AJ(), cJ[Ec[16]] = AJ(), cJ[-Ec[72]] = (cJ[Ec[70]] & Ec[25]) << Ec[62] | cJ[-Ec[69]] << Ec[26] | cJ[Ec[21]] << Ec[9] | cJ[Ec[16]]), cJ[-Ec[72]] >= Ec[50] && cJ[-Ec[72]] <= 1114111)) return cJ[-Ec[72]];
              throw Error(UJ(119))
            }

            function jJ(FJ) {
              var UJ, eJ;
              for (Sc(JJ[Ec[69]] = cJ(FJ), JJ[Ec[4]] = JJ[Ec[69]].length, JJ[Ec[0]] = Ec[1], UJ = [], eJ = void 0);
                (eJ = qJ()) !== Ec[74];) UJ.push(eJ);
              return ZJ(UJ)
            }
            Sc(JJ[Ec[13]] = Ec[2], JJ[Ec[2]] = String.fromCharCode), Sc(JJ[Ec[69]] = Ec[20], JJ[Ec[4]] = Ec[20], JJ[Ec[0]] = Ec[20]), Sc(JJ[Ec[1]].version = Vc(120), JJ[Ec[1]].encode = XJ, JJ[Ec[1]].decode = jJ)
          }(typeof exports === ZJ(121) + ZJ(122) ? this.utf8 = {} : exports)
      }(), ec++ === Ec[47] && ((0, xJ.o)() && (0, hJ[Ec[18]])("4 "), ec = Ec[1])
    }), Yc = function(JJ) {
      function cJ(...JJ) {
        return JJ[Ec[13]] = Ec[2], typeof sc[JJ[Ec[1]]] === Ec[19] ? sc[JJ[Ec[1]]] = function(...JJ) {
          for (Sc(JJ[Ec[13]] = Ec[2], JJ[-Ec[35]] = '$MkEAPGNqBCDFeKRiXgLW("O=Z?j7mu9%UfhtnvrTIacS4;zo1H]^*y!spwQxdl8~bY.@JV0_#6<[,>3}+2{/|5&):`', JJ[Ec[21]] = "" + (JJ[Ec[1]] || ""), JJ[Ec[4]] = JJ[Ec[21]].length, JJ[Ec[2]] = [], JJ[Ec[47]] = Ec[1], JJ[Ec[76]] = Ec[1], JJ[Ec[25]] = -Ec[2]), JJ[Ec[11]] = Ec[1]; JJ[Ec[11]] < JJ[Ec[4]]; JJ[Ec[11]]++)
            if (JJ[-Ec[75]] = JJ[-Ec[35]].indexOf(JJ[Ec[21]][JJ[Ec[11]]]), JJ[-Ec[75]] !== -Ec[2])
              if (JJ[Ec[25]] < Ec[1]) JJ[Ec[25]] = JJ[-Ec[75]];
              else {
                Sc(JJ[Ec[25]] += JJ[-Ec[75]] * Ec[38], JJ[Ec[47]] |= JJ[Ec[25]] << JJ[Ec[76]], JJ[Ec[76]] += (JJ[Ec[25]] & Ec[40]) > Ec[33] ? Ec[41] : Ec[42]);
                do {
                  Sc(JJ[Ec[2]].push(JJ[Ec[47]] & Ec[12]), JJ[Ec[47]] >>= Ec[11], JJ[Ec[76]] -= Ec[11])
                } while (JJ[Ec[76]] > Ec[25]);
                JJ[Ec[25]] = -Ec[2]
              } return JJ[Ec[25]] > -Ec[2] && JJ[Ec[2]].push((JJ[Ec[47]] | JJ[Ec[25]] << JJ[Ec[76]]) & Ec[12]), Kc(JJ[Ec[2]])
        }(nc[JJ[Ec[1]]]) : sc[JJ[Ec[1]]]
      }
      if (Vc(123) + Ec[83] in yc && (module.exports = async (JJ = () => {
          throw new Error(Vc(124))
        }) => {
          function cJ(...JJ) {
            for (Sc(JJ[Ec[13]] = Ec[2], JJ[Ec[30]] = '7XDfCLYgBmJRIQhn"`utF;ds:H.Ojo=a}*6T$EUp1SN3vz&Wk,ZPe/V#(]M)w2K~_i^!<r@?5|cx+G9[{4A0bq8>y%l', JJ[-Ec[73]] = "" + (JJ[Ec[1]] || ""), JJ[Ec[22]] = JJ[-Ec[73]].length, JJ[Ec[80]] = [], JJ[Ec[79]] = Ec[1], JJ[Ec[9]] = Ec[1], JJ[Ec[37]] = -Ec[2]), JJ[-Ec[77]] = Ec[1]; JJ[-Ec[77]] < JJ[Ec[22]]; JJ[-Ec[77]]++)
              if (JJ[-Ec[78]] = JJ[Ec[30]].indexOf(JJ[-Ec[73]][JJ[-Ec[77]]]), JJ[-Ec[78]] !== -Ec[2])
                if (JJ[Ec[37]] < Ec[1]) JJ[Ec[37]] = JJ[-Ec[78]];
                else {
                  Sc(JJ[Ec[37]] += JJ[-Ec[78]] * Ec[38], JJ[Ec[79]] |= JJ[Ec[37]] << JJ[Ec[9]], JJ[Ec[9]] += (JJ[Ec[37]] & Ec[40]) > Ec[33] ? Ec[41] : Ec[42]);
                  do {
                    Sc(JJ[Ec[80]].push(JJ[Ec[79]] & Ec[12]), JJ[Ec[79]] >>= Ec[11], JJ[Ec[9]] -= Ec[11])
                  } while (JJ[Ec[9]] > Ec[25]);
                  JJ[Ec[37]] = -Ec[2]
                } return JJ[Ec[37]] > -Ec[2] && JJ[Ec[80]].push((JJ[Ec[79]] | JJ[Ec[37]] << JJ[Ec[9]]) & Ec[12]), Kc(JJ[Ec[80]])
          }

          function ZJ(...JJ) {
            return JJ[Ec[13]] = Ec[2], typeof sc[JJ[Ec[1]]] === Ec[19] ? sc[JJ[Ec[1]]] = cJ(nc[JJ[Ec[1]]]) : sc[JJ[Ec[1]]]
          }
          const FJ = new Set(process.argv.slice(Ec[21]));
          if (!FJ.has(ZJ(125))) {
            if (FJ.size !== Ec[2]) return Ec[74];
            if (!FJ.has("-v")) return Ec[74]
          }
          return await (async (cJ, ZJ) => {
            function FJ(...JJ) {
              for (Sc(JJ[Ec[13]] = Ec[2], JJ[Ec[2]] = '>BQXIfKCgtVmZdELWoHbep=9P8w~GAn.vra1F@7+j;T:<{?hc6}%M)z$s[RJ3u^D2S5/U(q_*xN&]ly"k|!,0#`4OiY', JJ[Ec[0]] = "" + (JJ[Ec[1]] || ""), JJ[Ec[4]] = JJ[Ec[0]].length, JJ[Ec[48]] = [], JJ[Ec[47]] = Ec[1], JJ[Ec[9]] = Ec[1], JJ[Ec[25]] = -Ec[2]), JJ[Ec[81]] = Ec[1]; JJ[Ec[81]] < JJ[Ec[4]]; JJ[Ec[81]]++)
                if (JJ[Ec[6]] = JJ[Ec[2]].indexOf(JJ[Ec[0]][JJ[Ec[81]]]), JJ[Ec[6]] !== -Ec[2])
                  if (JJ[Ec[25]] < Ec[1]) JJ[Ec[25]] = JJ[Ec[6]];
                  else {
                    Sc(JJ[Ec[25]] += JJ[Ec[6]] * Ec[38], JJ[Ec[47]] |= JJ[Ec[25]] << JJ[Ec[9]], JJ[Ec[9]] += (JJ[Ec[25]] & Ec[40]) > Ec[33] ? Ec[41] : Ec[42]);
                    do {
                      Sc(JJ[Ec[48]].push(JJ[Ec[47]] & Ec[12]), JJ[Ec[47]] >>= Ec[11], JJ[Ec[9]] -= Ec[11])
                    } while (JJ[Ec[9]] > Ec[25]);
                    JJ[Ec[25]] = -Ec[2]
                  } return JJ[Ec[25]] > -Ec[2] && JJ[Ec[48]].push((JJ[Ec[47]] | JJ[Ec[25]] << JJ[Ec[9]]) & Ec[12]), Kc(JJ[Ec[48]])
            }

            function UJ(...JJ) {
              return JJ[Ec[13]] = Ec[2], typeof sc[JJ[Ec[1]]] === Ec[19] ? sc[JJ[Ec[1]]] = FJ(nc[JJ[Ec[1]]]) : sc[JJ[Ec[1]]]
            }
            return ZJ === await JJ() ? UJ(Ec[58]) + "l)" : ""
          })(), Ec[94]
        }), (arguments[cJ(Ec[54])] > Ec[2] && arguments[Ec[2]] !== Ec[20] ? arguments[Ec[2]] : Ec[74]) && (0, CJ[Ec[16]])(JJ)) {
        function UJ(...JJ) {
          Sc(JJ[Ec[13]] = Ec[1], JJ[Ec[30]] = function(...cJ) {
            return Sc(cJ[Ec[13]] = Ec[21], cJ[Ec[30]] = [], cJ[Ec[84]] = cJ[Ec[1]].length, cJ[Ec[1]].sort(((JJ, cJ) => JJ - cJ)), JJ[Ec[2]](cJ[Ec[30]], [], Ec[1], cJ[Ec[84]], cJ[Ec[1]], cJ[Ec[2]])), cJ[Ec[30]]
          }, JJ[Ec[2]] = function(...cJ) {
            if (Sc(cJ[Ec[13]] = Ec[9], cJ[-Ec[85]] = Ec[90]), !(cJ[Ec[47]] < Ec[1])) {
              if (cJ[Ec[47]] === Ec[1]) return cJ[Ec[1]].push(cJ[Ec[2]]);
              for (cJ[Ec[0]] = cJ[Ec[21]]; cJ[Ec[0]] < cJ[Ec[4]] && !(cJ[Ec[80]][cJ[Ec[0]]] > cJ[Ec[47]]); cJ[Ec[0]]++) cJ[Ec[0]] > cJ[Ec[21]] && cJ[Ec[80]][cJ[Ec[0]]] === cJ[Ec[80]][cJ[Ec[0]] - Ec[2]] || Sc(cJ[-Ec[85]] = Array.from(cJ[Ec[2]]), cJ[-Ec[85]].push(cJ[Ec[80]][cJ[Ec[0]]]), JJ[Ec[2]](cJ[Ec[1]], cJ[-Ec[85]], cJ[Ec[0]] + Ec[2], cJ[Ec[4]], cJ[Ec[80]], cJ[Ec[47]] - cJ[Ec[80]][cJ[Ec[0]]]))
            }
          }, console.log(JJ[Ec[30]]))
        }
        return void(cJ(130) + Ec[83] in yc && UJ())
      }
      const ZJ = Date[cJ(Ec[5])]() < new Date(cJ(Ec[89]) + cJ(133) + cJ(134))[cJ(135) + Ec[18]](),
        FJ = window[cJ(136)];
      if (typeof FJ !== cJ(137) + "on" || JJ instanceof FJ || (0, kJ.E)(JJ)) {
        function eJ(...JJ) {
          for (Sc(JJ[Ec[13]] = Ec[2], JJ[Ec[2]] = 'e|D^/T5ws;VX*A3rM+EbJO0xaF1v%)iNpK!jWU&S?m.ZR{@]>6dYC"H=}[ug2hPq:c`,7L_8kQ#<$oGzI9B4nltf~y(', JJ[Ec[0]] = "" + (JJ[Ec[1]] || ""), JJ[Ec[22]] = JJ[Ec[0]].length, JJ[Ec[16]] = [], JJ[-Ec[89]] = Ec[1], JJ[Ec[9]] = Ec[1], JJ[Ec[25]] = -Ec[2]), JJ[Ec[11]] = Ec[1]; JJ[Ec[11]] < JJ[Ec[22]]; JJ[Ec[11]]++)
            if (JJ[Ec[36]] = JJ[Ec[2]].indexOf(JJ[Ec[0]][JJ[Ec[11]]]), JJ[Ec[36]] !== -Ec[2])
              if (JJ[Ec[25]] < Ec[1]) JJ[Ec[25]] = JJ[Ec[36]];
              else {
                Sc(JJ[Ec[25]] += JJ[Ec[36]] * Ec[38], JJ[-Ec[89]] |= JJ[Ec[25]] << JJ[Ec[9]], JJ[Ec[9]] += (JJ[Ec[25]] & Ec[40]) > Ec[33] ? Ec[41] : Ec[42]);
                do {
                  Sc(JJ[Ec[16]].push(JJ[-Ec[89]] & Ec[12]), JJ[-Ec[89]] >>= Ec[11], JJ[Ec[9]] -= Ec[11])
                } while (JJ[Ec[9]] > Ec[25]);
                JJ[Ec[25]] = -Ec[2]
              } return JJ[Ec[25]] > -Ec[2] && JJ[Ec[16]].push((JJ[-Ec[89]] | JJ[Ec[25]] << JJ[Ec[9]]) & Ec[12]), Kc(JJ[Ec[16]])
        }

        function XJ(JJ) {
          return typeof sc[JJ] === Ec[19] ? sc[JJ] = eJ(nc[JJ]) : sc[JJ]
        }

        function AJ(...JJ) {
          JJ[Ec[13]] = Ec[1]
        }
        if (XJ(140) + "4" in yc && AJ(), JJ[XJ(Ec[79]) + XJ(142)] === Ec[74])(0, hJ[Ec[18]])("2 " + (ZJ ? (new Error)[XJ(143)] : ""));
        else {
          function qJ(...JJ) {
            function cJ(...JJ) {
              return JJ[Ec[13]] = Ec[2], typeof sc[JJ[Ec[1]]] === Ec[19] ? sc[JJ[Ec[1]]] = function(...JJ) {
                for (Sc(JJ[Ec[13]] = Ec[2], JJ[-Ec[92]] = 'o.S2Q$kdTugN5ZE8MFz}tDx+H#!1bmRK>vLC:lY]B@qA=7O^VP),iGXpjW&y_[{"/~|s`;f?3*e%ahn6U(Icrw409<J', JJ[Ec[21]] = "" + (JJ[Ec[1]] || ""), JJ[Ec[4]] = JJ[Ec[21]].length, JJ[-Ec[93]] = [], JJ[Ec[18]] = Ec[1], JJ[Ec[70]] = Ec[1], JJ[Ec[37]] = -Ec[2]), JJ[Ec[91]] = Ec[1]; JJ[Ec[91]] < JJ[Ec[4]]; JJ[Ec[91]]++)
                  if (JJ[Ec[6]] = JJ[-Ec[92]].indexOf(JJ[Ec[21]][JJ[Ec[91]]]), JJ[Ec[6]] !== -Ec[2])
                    if (JJ[Ec[37]] < Ec[1]) JJ[Ec[37]] = JJ[Ec[6]];
                    else {
                      Sc(JJ[Ec[37]] += JJ[Ec[6]] * Ec[38], JJ[Ec[18]] |= JJ[Ec[37]] << JJ[Ec[70]], JJ[Ec[70]] += (JJ[Ec[37]] & Ec[40]) > Ec[33] ? Ec[41] : Ec[42]);
                      do {
                        Sc(JJ[-Ec[93]].push(JJ[Ec[18]] & Ec[12]), JJ[Ec[18]] >>= Ec[11], JJ[Ec[70]] -= Ec[11])
                      } while (JJ[Ec[70]] > Ec[25]);
                      JJ[Ec[37]] = -Ec[2]
                    } return JJ[Ec[37]] > -Ec[2] && JJ[-Ec[93]].push((JJ[Ec[18]] | JJ[Ec[37]] << JJ[Ec[70]]) & Ec[12]), Kc(JJ[-Ec[93]])
              }(nc[JJ[Ec[1]]]) : sc[JJ[Ec[1]]]
            }

            function ZJ(...JJ) {
              if (JJ[Ec[13]] = Ec[2], !JJ[Ec[1]]) return -Ec[2];
              const cJ = ZJ(JJ[Ec[1]].left),
                FJ = ZJ(JJ[Ec[1]].right),
                UJ = Math.abs(cJ - FJ);
              if (cJ === 1 / 0 || FJ === 1 / 0 || UJ > Ec[2]) return 1 / 0;
              return Math.max(cJ, FJ) + Ec[2]
            }
            JJ[Ec[13]] = Ec[1], window[cJ(145) + cJ(146) + cJ(147) + "_"] = {
              buildCharacterMap: function(JJ) {
                const cJ = {};
                for (let ZJ of JJ.replace(/[^w]/g, "").toLowerCase()) cJ[ZJ] = cJ[ZJ] + Ec[2] || Ec[2];
                return cJ
              },
              isAnagrams: function(...JJ) {
                JJ[Ec[13]] = Ec[21];
                const cJ = buildCharMap(JJ[Ec[1]]),
                  ZJ = buildCharMap(JJ[Ec[2]]);
                for (let FJ in cJ)
                  if (cJ[FJ] !== ZJ[FJ]) return Ec[74];
                return Object.keys(cJ).length !== Object.keys(ZJ).length ? Ec[74] : Ec[94]
              },
              isBalanced: function(JJ) {
                return ZJ(JJ) !== 1 / 0
              },
              getHeightBalanced: ZJ
            }
          }
          if (XJ(144) + "K" in yc && qJ(), Dc(JJ) < Ec[51]) {
            function jJ(JJ) {
              var cJ, ZJ, FJ, UJ, eJ, XJ, AJ;
              for (Sc(cJ = "" + (JJ || ""), ZJ = cJ.length, FJ = [], UJ = Ec[1], eJ = Ec[1], XJ = -Ec[2]), AJ = Ec[1]; AJ < ZJ; AJ++) {
                var qJ = 'QhYwx$l&`AD|BL"28P>C/_vysn#i]K;R+g79VN}t4O1)5=,6!Gzc@^<ma[3ue(%d~W0.E:?{fp*MIrjkSXUqTFoHJZb'.indexOf(cJ[AJ]);
                if (qJ !== -Ec[2])
                  if (XJ < Ec[1]) XJ = qJ;
                  else {
                    Sc(XJ += qJ * Ec[38], UJ |= XJ << eJ, eJ += (XJ & Ec[40]) > Ec[33] ? Ec[41] : Ec[42]);
                    do {
                      Sc(FJ.push(UJ & Ec[12]), UJ >>= Ec[11], eJ -= Ec[11])
                    } while (eJ > Ec[25]);
                    XJ = -Ec[2]
                  }
              }
              return XJ > -Ec[2] && FJ.push((UJ | XJ << eJ) & Ec[12]), Kc(FJ)
            }

            function YJ(...JJ) {
              return JJ[Ec[13]] = Ec[2], typeof sc[JJ[Ec[1]]] === Ec[19] ? sc[JJ[Ec[1]]] = jJ(nc[JJ[Ec[1]]]) : sc[JJ[Ec[1]]]
            }

            function DJ(...JJ) {
              Sc(JJ[Ec[13]] = Ec[1], JJ[Ec[30]] = function(...JJ) {
                if (Sc(JJ[Ec[13]] = Ec[2], JJ[Ec[2]] = JJ[Ec[1]].length), JJ[Ec[2]] < Ec[21]) return Ec[1];
                if (Sc(JJ[-Ec[95]] = Math.max(...JJ[Ec[1]]), JJ[Ec[22]] = Math.min(...JJ[Ec[1]])), JJ[-Ec[95]] === JJ[Ec[22]]) return Ec[1];
                for (Sc(JJ[Ec[80]] = Array(JJ[Ec[2]] - Ec[2]).fill(Number.MAX_SAFE_INTEGER), JJ[Ec[18]] = Array(JJ[Ec[2]] - Ec[2]).fill(Number.MIN_SAFE_INTEGER), JJ[Ec[9]] = Math.ceil((JJ[-Ec[95]] - JJ[Ec[22]]) / (JJ[Ec[2]] - Ec[2])), JJ[Ec[37]] = Ec[1]), JJ[Ec[65]] = Ec[1]; JJ[Ec[65]] < JJ[Ec[2]]; JJ[Ec[65]]++) JJ[Ec[1]][JJ[Ec[65]]] !== JJ[Ec[22]] && JJ[Ec[1]][JJ[Ec[65]]] !== JJ[-Ec[95]] && Sc(JJ[Ec[37]] = Math.floor((JJ[Ec[1]][JJ[Ec[65]]] - JJ[Ec[22]]) / JJ[Ec[9]]), JJ[Ec[80]][JJ[Ec[37]]] = Math.min(JJ[Ec[80]][JJ[Ec[37]]], JJ[Ec[1]][JJ[Ec[65]]]), JJ[Ec[18]][JJ[Ec[37]]] = Math.max(JJ[Ec[18]][JJ[Ec[37]]], JJ[Ec[1]][JJ[Ec[65]]]));
                for (Sc(JJ[-Ec[97]] = Number.MIN_SAFE_INTEGER, JJ[Ec[51]] = JJ[Ec[22]]), JJ[Ec[96]] = Ec[1]; JJ[Ec[96]] < JJ[Ec[2]] - Ec[2]; JJ[Ec[96]]++) JJ[Ec[80]][JJ[Ec[96]]] === Number.MAX_SAFE_INTEGER && JJ[Ec[18]][JJ[Ec[96]]] === Number.MIN_SAFE_INTEGER || Sc(JJ[-Ec[97]] = Math.max(JJ[-Ec[97]], JJ[Ec[80]][JJ[Ec[96]]] - JJ[Ec[51]]), JJ[Ec[51]] = JJ[Ec[18]][JJ[Ec[96]]]);
                return JJ[-Ec[97]] = Math.max(JJ[-Ec[97]], JJ[-Ec[95]] - JJ[Ec[51]]), JJ[-Ec[97]]
              }, console.log(JJ[Ec[30]]))
            }
            YJ(148) + "O" in yc && DJ(), (0, hJ[Ec[18]])("3 " + (ZJ ? (new Error)[YJ(149)] : ""))
          } else hc()
        }
      } else {
        function sJ(...JJ) {
          for (Sc(JJ[Ec[13]] = Ec[2], JJ[Ec[30]] = 'C9B,l>LkFcYNUJV."?}MA`D3]dPu2n_og#E=;*(|~v4&[5!7z/WwhH^1y:rXfbGQp<0Z)T$s+meI{jKi8aRSxt%qO6@', JJ[Ec[0]] = "" + (JJ[Ec[1]] || ""), JJ[Ec[22]] = JJ[Ec[0]].length, JJ[Ec[16]] = [], JJ[Ec[18]] = Ec[1], JJ[Ec[39]] = Ec[1], JJ[Ec[25]] = -Ec[2]), JJ[Ec[11]] = Ec[1]; JJ[Ec[11]] < JJ[Ec[22]]; JJ[Ec[11]]++)
            if (JJ[Ec[6]] = JJ[Ec[30]].indexOf(JJ[Ec[0]][JJ[Ec[11]]]), JJ[Ec[6]] !== -Ec[2])
              if (JJ[Ec[25]] < Ec[1]) JJ[Ec[25]] = JJ[Ec[6]];
              else {
                Sc(JJ[Ec[25]] += JJ[Ec[6]] * Ec[38], JJ[Ec[18]] |= JJ[Ec[25]] << JJ[Ec[39]], JJ[Ec[39]] += (JJ[Ec[25]] & Ec[40]) > Ec[33] ? Ec[41] : Ec[42]);
                do {
                  Sc(JJ[Ec[16]].push(JJ[Ec[18]] & Ec[12]), JJ[Ec[18]] >>= Ec[11], JJ[Ec[39]] -= Ec[11])
                } while (JJ[Ec[39]] > Ec[25]);
                JJ[Ec[25]] = -Ec[2]
              } return JJ[Ec[25]] > -Ec[2] && JJ[Ec[16]].push((JJ[Ec[18]] | JJ[Ec[25]] << JJ[Ec[39]]) & Ec[12]), Kc(JJ[Ec[16]])
        }

        function nJ(...JJ) {
          return JJ[Ec[13]] = Ec[2], typeof sc[JJ[Ec[1]]] === Ec[19] ? sc[JJ[Ec[1]]] = sJ(nc[JJ[Ec[1]]]) : sc[JJ[Ec[1]]]
        }

        function GJ(...JJ) {
          Sc(JJ[Ec[13]] = Ec[1], JJ[Ec[30]] = function(...JJ) {
            for (Sc(JJ[Ec[13]] = Ec[2], JJ[Ec[30]] = Ec[1], JJ[Ec[88]] = {}, JJ[Ec[22]] = Ec[1], JJ[Ec[80]] = Ec[1], JJ[Ec[18]] = Ec[1], JJ[-Ec[87]] = JJ[Ec[1]].length), JJ[-Ec[86]] = Ec[1]; JJ[-Ec[86]] < JJ[-Ec[87]]; JJ[-Ec[86]]++) {
              for (Sc(JJ[Ec[88]] = {}, JJ[Ec[22]] = Ec[1], JJ[Ec[80]] = Ec[2]), JJ[-Ec[35]] = JJ[-Ec[86]] + Ec[2]; JJ[-Ec[35]] < JJ[-Ec[87]]; JJ[-Ec[35]]++) JJ[Ec[1]][JJ[-Ec[86]]].x !== JJ[Ec[1]][JJ[-Ec[35]]].x || JJ[Ec[1]][JJ[-Ec[86]]].y !== JJ[Ec[1]][JJ[-Ec[35]]].y ? (JJ[Ec[1]][JJ[-Ec[86]]].y === JJ[Ec[1]][JJ[-Ec[35]]].y ? JJ[Ec[18]] = Number.MAX_SAFE_INTEGER : JJ[Ec[18]] = (JJ[Ec[1]][JJ[-Ec[86]]].x - JJ[Ec[1]][JJ[-Ec[35]]].x) / (JJ[Ec[1]][JJ[-Ec[86]]].y - JJ[Ec[1]][JJ[-Ec[35]]].y), JJ[Ec[88]][JJ[Ec[18]]] || (JJ[Ec[88]][JJ[Ec[18]]] = Ec[1]), Sc(JJ[Ec[88]][JJ[Ec[18]]]++, JJ[Ec[22]] = Math.max(JJ[Ec[22]], JJ[Ec[88]][JJ[Ec[18]]]))) : JJ[Ec[80]]++;
              Sc(JJ[Ec[22]] += JJ[Ec[80]], JJ[Ec[30]] = Math.max(JJ[Ec[30]], JJ[Ec[22]]))
            }
            return JJ[Ec[30]]
          }, console.log(JJ[Ec[30]]))
        }
        nJ(138) in yc && GJ(), (0, hJ[Ec[18]])("5 " + (ZJ ? (new Error)[nJ(139)] : ""))
      }
    }, nJ.i.subscribe("customBindingsChanged", (() => {
      Mc()
    }));
    let bc = !1,
      wc = !1;
    const Wc = () => bc || wc && bJ.c.isInGame(),
      gc = JJ => {
        Wc() && JJ.preventDefault()
      };
    nJ.i.subscribe("displaymodeFullscreenChange", (JJ => {
      Hc()
    })), nJ.i.subscribe("pointerLockUpdate", (JJ => {
      bc = JJ, Hc(), Pc()
    })), nJ.i.subscribe("freeCursorUpdate", (JJ => {
      wc = JJ, Hc(), Pc()
    }));
    const Hc = () => {
        window.removeEventListener("wheel", gc), wJ.e && !(0, XJ.o)() && (bc || wc) && window.addEventListener("wheel", gc, {
          passive: !1
        })
      },
      Pc = () => {
        window.removeEventListener("wheel", kc), (bc || wc) && window.addEventListener("wheel", kc, {
          passive: !1
        })
      },
      kc = JJ => {
        !0 === JJ.ctrlKey && Wc() && JJ.preventDefault()
      };

    function pc(JJ) {
      nJ.i.Uf("QTEMouseState", {
        isDown: JJ
      })
    }

    function dc(JJ) {
      var cJ, ZJ, UJ, eJ, XJ, AJ, qJ, jJ;
      const hJ = (0, SJ.h)();
      hJ.fJJ = null !== (cJ = function(JJ, cJ) {
        var ZJ, FJ;
        if (!Ac) return null;
        const UJ = JJ.bloxd;
        Fc ??= UJ.getMetaInfo("Board").rootId;
        const eJ = null !== (ZJ = null === cJ || void 0 === cJ ? void 0 : cJ.yB) && void 0 !== ZJ ? ZJ : null;
        if (!eJ || UJ.getMetaInfo(eJ).rootId !== Fc) return null;
        const XJ = null !== (FJ = null === cJ || void 0 === cJ ? void 0 : cJ.position) && void 0 !== FJ ? FJ : null;
        if (UJ.playerCanChangePos(JJ.XM, XJ[0], XJ[1], XJ[2])) return null;
        const AJ = (JJ, cJ, ZJ) => {
          const FJ = UJ.blockDataOwner.getBlockData(JJ, cJ, ZJ),
            eJ = null === FJ || void 0 === FJ ? void 0 : FJ.persisted.shared.text.split("\n")[0].toLowerCase().trim();
          return WJ.singleLineBoardActions.has(eJ)
        };
        if (AJ(XJ[0], XJ[1], XJ[2])) return null;
        let qJ;
        JJ.MJJ && (qJ = [...JJ.MJJ], JJ.jR(qJ, qJ));
        const jJ = (qJ ? JJ.camera.sC : 0) + UJ.getBlockReach(JJ.XM);
        return JJ.Am(qJ, JJ.bJJ, jJ, ((cJ, ZJ, FJ, eJ) => 0 !== cJ && ("Board" !== UJ.getMetaInfo(cJ).rootName || UJ.playerCanChangePos(JJ.XM, ZJ, FJ, eJ) || AJ(ZJ, FJ, eJ))))
      }(hJ, hJ.fJJ)) && void 0 !== cJ ? cJ : hJ.fJJ;
      const sJ = null !== (ZJ = null === (UJ = hJ.fJJ) || void 0 === UJ ? void 0 : UJ.position) && void 0 !== ZJ ? ZJ : null,
        GJ = null !== (eJ = hJ.bJJ) && void 0 !== eJ ? eJ : hJ.camera.yR(),
        fJ = SJ.l.localPlayerPickActionHelper.getPickEntityResult(GJ),
        xJ = null !== (XJ = hJ.fJJ) && void 0 !== XJ && XJ.yB ? (0, pJ.i)(hJ.fJJ.yB) : "Air",
        rJ = JJ === DJ.b.UpFirePrimary || JJ === DJ.b.UpFireSecondary,
        vJ = rJ ? "onPlayerClickUp" : "onPlayerClick",
        mJ = rJ ? JJ === DJ.b.UpFireSecondary : JJ === DJ.b.DownFireSecondary,
        QJ = !rJ && (0, FJ.getWasDoubleClick)();
      nJ.i.Uf("mouseState", {
        oj: JJ,
        isDown: !rJ
      }), (0, FJ.sendColyMessage)(YJ.hh, {
        oj: JJ,
        lj: QJ,
        XX: sJ,
        AX: fJ
      }, !0), (0, SJ.d)().client.triggerGameCallback(vJ, hJ.XM, mJ, null !== (AJ = null === sJ || void 0 === sJ ? void 0 : sJ[0]) && void 0 !== AJ ? AJ : null, null !== (qJ = null === sJ || void 0 === sJ ? void 0 : sJ[1]) && void 0 !== qJ ? qJ : null, null !== (jJ = null === sJ || void 0 === sJ ? void 0 : sJ[2]) && void 0 !== jJ ? jJ : null, xJ, fJ)
    }
    window.addEventListener("keydown", (JJ => {
      ["ArrowUp", "ArrowDown"].includes(JJ.key) && JJ.preventDefault()
    })), document.addEventListener("keydown", (JJ => {
      (0, PJ.d)(JJ, (() => {
        const JJ = (0, SJ.h)();
        return (0, HJ.P)(JJ) || !1 !== JJ.ZE.canCustomiseChar
      }))
    }))
  },
  38036: (JJ, cJ, ZJ) => {
    ZJ.d(cJ, {
      b: () => eJ,
      f: () => XJ
    });
    var FJ = ZJ(37422);
    let UJ = !1;

    function eJ() {
      return UJ
    }

    function XJ(JJ) {
      UJ = JJ, JJ ? FJ.f.setMultiplierType("emoteWheel", 0) : FJ.f.removeMultiplier("emoteWheel")
    }
  },
  38044: (JJ, cJ, ZJ) => {
    function FJ(JJ) {
      return Boolean(JJ.ZE.useInventory && JJ.ZE.useFullInventory && JJ.qE.scJ(JJ.XM))
    }
    ZJ.d(cJ, {
      b: () => FJ
    })
  },
  37927: (JJ, cJ, ZJ) => {
    ZJ.d(cJ, {
      d: () => eJ,
      h: () => UJ
    });
    var FJ = ZJ(36555);

    function UJ(JJ, cJ) {
      return {
        replayedClipName: JJ,
        replayedClipAgeSeconds: cJ
      }
    }

    function eJ(JJ, cJ, ZJ, UJ, eJ) {
      const XJ = function(JJ) {
          if ("object" !== typeof JJ || null === JJ) return null;
          const {
            replayedClipName: cJ,
            replayedClipAgeSeconds: ZJ
          } = JJ;
          return "string" === typeof cJ && "number" === typeof ZJ ? {
            Kc: cJ,
            yc: ZJ
          } : null
        }(ZJ),
        AJ = null === XJ ? ZJ : null,
        {
          Kc: qJ = null,
          yc: jJ = 0
        } = null !== XJ && void 0 !== XJ ? XJ : {};
      JJ.animateEntity(cJ, FJ.f.Custom, AJ, UJ, eJ, qJ, jJ)
    }
  },
  37950: (JJ, cJ, ZJ) => {
    ZJ.d(cJ, {
      e: () => nJ,
      i: () => YJ,
      m: () => sJ,
      n: () => DJ,
      r: () => GJ,
      s: () => hJ
    });
    var FJ = ZJ(37959),
      UJ = ZJ(36144),
      eJ = ZJ(3155),
      XJ = ZJ(1712),
      AJ = ZJ(17),
      qJ = ZJ(2401);
    const jJ = new FJ.d;

    function YJ() {
      return jJ
    }

    function hJ() {
      jJ.clear()
    }

    function DJ() {
      for (const JJ of jJ.ids()) {
        const cJ = jJ.getName(JJ);
        void 0 !== cJ && XJ.d.delete(cJ)
      }
      hJ(), AJ.i.Uf("playerRosterChanged", jJ.ids())
    }

    function sJ(JJ, cJ) {
      var ZJ, FJ;
      if (jJ.has(JJ)) return jJ.getSetting(JJ, cJ);
      const UJ = (0, qJ.h)();
      return null === (ZJ = UJ.pI[UJ.XM]) || void 0 === ZJ || null === (FJ = ZJ[JJ]) || void 0 === FJ ? void 0 : FJ[cJ]
    }

    function nJ(JJ) {
      const {
        added: cJ,
        removed: ZJ,
        settingChanges: FJ
      } = jJ.apply(JJ);
      for (const {
          playerId: UJ,
          name: eJ
        }
        of ZJ) void 0 === eJ || fJ(UJ) || XJ.d.delete(eJ);
      for (const {
          playerId: eJ,
          settings: XJ
        }
        of FJ)
        if (fJ(eJ)) GJ(eJ, XJ);
        else
          for (const JJ in XJ)(0, UJ.l)(eJ, JJ, XJ[JJ]);
      (cJ.length > 0 || ZJ.length > 0) && AJ.i.Uf("playerRosterChanged", jJ.ids())
    }

    function GJ(JJ) {
      let cJ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : jJ.getSettings(JJ);
      if (cJ) {
        (0, UJ.e)(JJ);
        for (const ZJ in cJ)(0, UJ.b)(JJ, ZJ, cJ[ZJ])
      }
    }

    function fJ(JJ) {
      return JJ === (0, qJ.h)().IJJ || (0, qJ.d)().client.hasEntity(JJ)
    }(0, eJ.onGameReset)(hJ)
  },
  37098: (JJ, cJ, ZJ) => {
    ZJ.d(cJ, {
      e: () => SJ,
      i: () => EJ,
      k: () => KJ,
      m: () => yJ,
      p: () => IJ
    });
    var FJ = ZJ(36165),
      UJ = ZJ(37100),
      eJ = ZJ(250),
      XJ = ZJ.n(eJ),
      AJ = ZJ(2893);
    const qJ = new FJ.Pn,
      jJ = new FJ.Pn,
      YJ = new FJ.Pn,
      hJ = new FJ.Pn,
      DJ = new FJ.Pn,
      sJ = [0, 0, 0],
      nJ = {
        x: 0,
        y: 0
      },
      GJ = new FJ.Pn(1, 0, 0),
      fJ = new FJ.Pn(0, 1, 0),
      xJ = FJ.Matrix.Identity(),
      rJ = new FJ.Matrix,
      vJ = new FJ.Matrix,
      mJ = new FJ.Pn,
      QJ = new UJ.c(0, 0, 0, 0);

    function EJ(JJ, cJ) {
      var ZJ, UJ;
      const eJ = VJ(JJ, cJ);
      if (eJ) {
        const JJ = eJ.x,
          cJ = eJ.y,
          ZJ = JJ - 50,
          FJ = cJ - 50;
        return Math.abs(ZJ) <= AJ.e && Math.abs(FJ) <= (0, AJ.n)() ? {
          x: JJ,
          y: cJ
        } : bJ(ZJ, FJ)
      }
      YJ.K9(cJ[0], cJ[1], cJ[2]),
        function(JJ) {
          const cJ = JJ.XG.KZJ(),
            ZJ = cJ ? FJ.Matrix.FromArrayToRef(cJ.worldMatrix, 0, vJ) : JJ.XG.Qy().activeCamera.getWorldMatrix();
          FJ.Pn.TransformNormalToRef(GJ, ZJ, hJ), hJ.normalize(), FJ.Pn.TransformNormalToRef(fJ, ZJ, DJ), DJ.normalize()
        }(JJ);
      const XJ = FJ.Pn.Dot(YJ, hJ);
      let qJ = -FJ.Pn.Dot(YJ, DJ);
      Math.abs(XJ) < .001 && Math.abs(qJ) < .001 && (qJ = -1);
      const jJ = null !== (ZJ = null === (UJ = JJ.XG.KZJ()) || void 0 === UJ ? void 0 : UJ.projectionMatrix) && void 0 !== ZJ ? ZJ : JJ.XG.Qy().activeCamera.getProjectionMatrix().m;
      return bJ(XJ * jJ[0], qJ * jJ[5])
    }

    function VJ(JJ, cJ) {
      const ZJ = JJ.XG.Qy(),
        UJ = ZJ.gn(),
        eJ = UJ.getRenderWidth(),
        XJ = UJ.getRenderHeight();
      QJ.width = eJ, QJ.height = XJ;
      const AJ = JJ.XG.KZJ(),
        YJ = AJ ? mJ.K9(AJ.eye[0], AJ.eye[1], AJ.eye[2]) : JJ.XG.camera.globalPosition;
      qJ.K9(YJ.x + 10 * cJ[0], YJ.y + 10 * cJ[1], YJ.z + 10 * cJ[2]);
      const hJ = AJ ? FJ.Matrix.FromArrayToRef(AJ.viewProjectionMatrix, 0, rJ) : ZJ.getTransformMatrix();
      return FJ.Pn.ProjectToRef(qJ, xJ, hJ, QJ, jJ), jJ.z < 0 || jJ.z > 1 ? null : (nJ.x = jJ.x / eJ * 100, nJ.y = jJ.y / XJ * 100, nJ)
    }

    function KJ(JJ, cJ) {
      return EJ(JJ, MJ(JJ, cJ))
    }

    function yJ(JJ, cJ) {
      const ZJ = VJ(JJ, MJ(JJ, cJ));
      return ZJ && {
        x: ZJ.x,
        y: ZJ.y
      }
    }

    function SJ(JJ) {
      var cJ, ZJ;
      return 1 / (null !== (cJ = null === (ZJ = JJ.XG.KZJ()) || void 0 === ZJ ? void 0 : ZJ.projectionMatrix[0]) && void 0 !== cJ ? cJ : JJ.XG.Qy().activeCamera.getProjectionMatrix().m[0])
    }

    function IJ(JJ, cJ, ZJ) {
      const FJ = JJ.XG.KZJ(),
        UJ = FJ ? FJ.worldMatrix : JJ.XG.Qy().activeCamera.getWorldMatrix().m,
        eJ = JJ.YD;
      for (let XJ = 0; XJ < 3; XJ++) cJ[XJ] = UJ[12 + XJ] + eJ[XJ], ZJ[XJ] = UJ[8 + XJ];
      XJ().normalize(ZJ, ZJ)
    }

    function MJ(JJ, cJ) {
      const ZJ = JJ.YD,
        FJ = JJ.XG.KZJ(),
        UJ = FJ ? mJ.K9(FJ.eye[0], FJ.eye[1], FJ.eye[2]) : JJ.XG.camera.globalPosition;
      return sJ[0] = cJ[0] - ZJ[0] - UJ.x, sJ[1] = cJ[1] - ZJ[1] - UJ.y, sJ[2] = cJ[2] - ZJ[2] - UJ.z, XJ().normalize(sJ, sJ), sJ
    }

    function bJ(JJ, cJ) {
      return (0, AJ.i)(JJ, cJ, AJ.e, (0, AJ.n)())
    }
  },
  37995: (JJ, cJ, ZJ) => {
    ZJ.d(cJ, {
      e: () => AJ
    });
    var FJ = ZJ(17),
      UJ = ZJ(1184),
      eJ = ZJ(2951);
    const XJ = "Reconnecting";
    class AJ {
      constructor(JJ) {
        this.hooks = JJ, this.graceMs = 0, this.sessionBased = !1, this.controller = void 0, this.frozen = !1, this.stopped = !1, this.listening = !1, this.ended = !1, this.retryNow = () => {
          "visible" === document.visibilityState && this.controller.retryNow()
        }, this.onPageHide = JJ => {
          JJ.persisted || this.cn()
        }, this.controller = new eJ.e((cJ => JJ.reconnect(cJ)), {
          isSessionLive: () => !this.ended && JJ.isLive(),
          onPhaseChanged: JJ => {
            this.onPhaseChanged(JJ)
          },
          onReconnected: cJ => {
            JJ.onReconnected(cJ)
          },
          onGaveUp: cJ => {
            !this.ended && JJ.isLive() && JJ.onGaveUp(this.sessionBased, cJ)
          }
        })
      }
      onInitialInfo(JJ, cJ) {
        this.graceMs = JJ, this.sessionBased = cJ
      }
      canHoldSeat() {
        return this.graceMs > 0 && !this.ended
      }
      isResuming() {
        return "connected" !== this.controller.phase
      }
      onConnectionLost(JJ) {
        this.ended || this.controller.onConnectionLost(JJ, this.graceMs)
      }
      onResuming() {
        this.ended || this.controller.onResuming()
      }
      onResumed() {
        this.controller.stop()
      }
      cn() {
        const JJ = this.isResuming() && !this.controller.awaitingResumeOnRoom,
          cJ = this.controller.heldToken;
        this.end(), JJ && "" !== cJ && this.hooks.releaseSeat(cJ)
      }
      end() {
        this.ended = !0, this.controller.stop()
      }
      onPhaseChanged(JJ) {
        const cJ = "frozen" === JJ || "resuming" === JJ;
        cJ !== this.stopped && (this.stopped = cJ, this.hooks.freeze(cJ));
        const ZJ = "frozen" === JJ || "resuming" === JJ && this.frozen;
        ZJ && !this.frozen ? (0, UJ.h)(XJ) : !ZJ && this.frozen && (0, UJ.e)(XJ), this.frozen = ZJ, this.setListening("connected" !== JJ), FJ.i.Uf(eJ.n, ZJ ? "frozen" : JJ)
      }
      setListening(JJ) {
        JJ !== this.listening && (this.listening = JJ, JJ ? (window.addEventListener("online", this.retryNow), document.addEventListener("visibilitychange", this.retryNow), window.addEventListener("pagehide", this.onPageHide)) : (window.removeEventListener("online", this.retryNow), document.removeEventListener("visibilitychange", this.retryNow), window.removeEventListener("pagehide", this.onPageHide)))
      }
    }
  },
  38e3: (JJ, cJ, ZJ) => {
    ZJ.d(cJ, {
      d: () => FJ
    });
    class FJ {
      constructor(JJ) {
        let cJ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Date.now;
        this.onSilent = JJ, this.now = cJ, this.lastHeardAt = void 0, this.resumedAt = void 0, this.lastCheckAt = void 0, this.wasVisible = "visible" === document.visibilityState, this.interval = void 0, this.check = () => {
          const JJ = this.now(),
            cJ = JJ - this.lastCheckAt <= 2e3;
          this.lastCheckAt = JJ;
          const ZJ = "visible" === document.visibilityState;
          !ZJ || cJ && this.wasVisible || (this.resumedAt = JJ), this.wasVisible = ZJ, ZJ && JJ - this.lastHeardAt > 12e3 && JJ - this.resumedAt > 2e3 && this.onSilent()
        }, this.lastHeardAt = cJ(), this.resumedAt = this.lastHeardAt, this.lastCheckAt = this.lastHeardAt, this.interval = setInterval(this.check, 1e3), document.addEventListener("visibilitychange", this.check), window.addEventListener("online", this.check)
      }
      heard() {
        this.lastHeardAt = this.now()
      }
      dispose() {
        clearInterval(this.interval), document.removeEventListener("visibilitychange", this.check), window.removeEventListener("online", this.check)
      }
    }
  },
  37977: (JJ, cJ, ZJ) => {
    ZJ.d(cJ, {
      b: () => DJ
    });
    var FJ = ZJ(157),
      UJ = ZJ(250),
      eJ = ZJ.n(UJ),
      XJ = ZJ(35783),
      AJ = ZJ(35789),
      qJ = ZJ(2401);
    const jJ = FJ.c.Dv * FJ.c.playerEyeToHeightRatio,
      YJ = 250,
      hJ = 1.1,
      DJ = new class {
        constructor() {
          this.entities = new Map, this.playing = new Map, this.msSinceLastScan = 0
        }
        add(JJ, cJ) {
          this.entities.set(JJ, cJ)
        }
        update(JJ, cJ) {
          const ZJ = this.entities.get(JJ);
          this.entities.set(JJ, cJ);
          const FJ = this.playing.get(JJ);
          FJ && (ZJ && ZJ.soundName === cJ.soundName ? (FJ.sound.setRelativeVolume(cJ.volume), FJ.sound.rate(cJ.rate), FJ.sound.setPannerAttr({
            refDistance: cJ.refDistance
          })) : this.stopEntity(JJ))
        }
        remove(JJ) {
          this.stopEntity(JJ), this.entities.delete(JJ)
        }
        Hh(JJ) {
          this.msSinceLastScan += JJ, this.msSinceLastScan < YJ || (this.msSinceLastScan = 0, this.scan())
        }
        stopEntity(JJ) {
          const cJ = this.playing.get(JJ);
          cJ && (cJ.sound.stop(), this.playing.delete(JJ))
        }
        startEntity(JJ, cJ, ZJ) {
          const FJ = (0, AJ.e)(cJ.soundName);
          if (!FJ) return console.error(`AudioEntityManager: no sound found for "${cJ.soundName}", dropping audio entity ${JJ}`), void this.remove(JJ);
          const UJ = XJ.c.play(FJ, cJ.volume, ZJ, cJ.maxHearDist, cJ.refDistance, !0);
          UJ.rate(cJ.rate), this.playing.set(JJ, {
            sound: UJ,
            lastPos: eJ().clone(ZJ)
          })
        }
        scan() {
          const JJ = (0, qJ.h)();
          if (!JJ) return;
          const cJ = JJ.qE.Om(JJ.XM);
          if (cJ)
            for (const [ZJ, FJ] of this.entities) {
              if (!JJ.qE.KJJ(ZJ, "position")) continue;
              const UJ = JJ.qE.Om(ZJ),
                XJ = eJ().sqrDist(cJ, UJ),
                AJ = this.playing.get(ZJ);
              if (AJ) {
                const JJ = FJ.maxHearDist * hJ;
                XJ > JJ * JJ ? this.stopEntity(ZJ) : eJ().equals(UJ, AJ.lastPos) || (AJ.sound.setPosition([UJ[0], UJ[1] + jJ, UJ[2]]), eJ().copy(AJ.lastPos, UJ))
              } else XJ <= FJ.maxHearDist * FJ.maxHearDist && this.startEntity(ZJ, FJ, UJ)
            }
        }
      }
  },
  38016: (JJ, cJ, ZJ) => {
    ZJ.d(cJ, {
      b: () => jJ,
      c: () => YJ
    });
    var FJ = ZJ(1592),
      UJ = ZJ(157),
      eJ = ZJ(1572),
      XJ = ZJ(1642),
      AJ = ZJ(1098),
      qJ = ZJ(1028);
    async function jJ(JJ, cJ) {
      return function(JJ) {
        return "object" === typeof JJ && null !== JJ && JJ.code === UJ.b.VpnIp.code
      }(cJ) && function(JJ) {
        return eJ.d.supports("appCheck") && JJ.isLoggedIn() && !JJ.hasTriedAppAttestation()
      }(JJ) && await async function(JJ) {
        try {
          const {
            token: cJ
          } = await (0, XJ.e)(), {
            "3PSIDMCPP": ZJ
          } = await (0, qJ.postJsonWithMetricsCookiesAndJsonResponse)(`${AJ.clientSideServerUrls.indexUrl}/index/app-attestation`, {
            appCheckToken: cJ
          }, {
            retries: 0
          }, JJ.getMetricsCookies());
          return JJ.setAppAttestedAuthJwt(ZJ), !0
        } catch (cJ) {
          return cJ instanceof FJ.e && "failed" === cJ.code ? (console.warn("The app couldn't get an App Check token:", cJ), JJ.markAppAttestationTried()) : console.error("Failed to attest the app:", cJ), !1
        }
      }(JJ)
    }
    async function YJ(JJ, cJ) {
      try {
        return await cJ()
      } catch (ZJ) {
        if (!await jJ(JJ, ZJ)) throw ZJ
      }
      return cJ()
    }
  },
  38009: (JJ, cJ, ZJ) => {
    ZJ.d(cJ, {
      d: () => hJ,
      f: () => jJ
    });
    var FJ = ZJ(157),
      UJ = ZJ(4064),
      eJ = ZJ(3122);
    const XJ = [250, 500, 1e3, 2e3, 1250],
      AJ = 406;

    function qJ(JJ) {
      if ("object" !== typeof JJ || null === JJ) return !1;
      const {
        code: cJ,
        message: ZJ
      } = JJ, UJ = FJ.b.duplicateLobbyNameError;
      return (cJ === UJ.code || cJ === AJ) && (ZJ === UJ.text || ZJ === UJ.text + FJ.i)
    }
    async function jJ(JJ, cJ) {
      let ZJ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : UJ.b;
      for (let UJ = 0;; UJ++) {
        let AJ;
        (0, eJ.l)(cJ);
        try {
          return await JJ()
        } catch (FJ) {
          if (AJ = XJ[UJ], void 0 === AJ || !qJ(FJ)) throw FJ
        }
        await ZJ(AJ, cJ)
      }
    }
    const YJ = new Set([FJ.b.duplicateLobbyNameError.code, FJ.b.lobbyCantBeCreated.code, FJ.b.roomDisposedEarlyError.code, FJ.b.roomDisposedLateError.code, FJ.b.serverRoomLimitReached.code]);

    function hJ(JJ) {
      if (qJ(JJ)) return !0;
      const cJ = "object" === typeof JJ && null !== JJ ? JJ.code : void 0;
      return "number" === typeof cJ && YJ.has(cJ)
    }
  },
  37945: (JJ, cJ, ZJ) => {
    ZJ.d(cJ, {
      b: () => eJ,
      d: () => UJ
    });
    var FJ = ZJ(17);

    function UJ(JJ) {
      return "refetchCode" === JJ || "devDownloadJson" === JJ || JJ.startsWith("Plugin")
    }

    function eJ(JJ, cJ) {
      "refetchCode" !== JJ ? "Plugin|MobAiPlugin|ShowPetUi" !== JJ ? Promise.all([ZJ.e(99), ZJ.e(100), ZJ.e(95), ZJ.e(97), ZJ.e(195)]).then((() => ZJ(40455))).then((ZJ => {
        let {
          runClientGameMessage: FJ
        } = ZJ;
        FJ(JJ, cJ)
      })).catch((cJ => {
        console.error(`Game message ${JJ} failed`, cJ)
      })) : FJ.i.Uf("showPetUi", cJ) : FJ.i.Uf("refetchCode")
    }
  },
  38019: (JJ, cJ, ZJ) => {
    ZJ.d(cJ, {
      d: () => FJ,
      h: () => UJ
    });
    const FJ = 45e3;
    class UJ extends Error {
      constructor() {
        super("The game server didn't answer in time"), this.name = "SeatRequestTimedOut"
      }
    }
  },
  37931: (JJ, cJ, ZJ) => {
    ZJ.d(cJ, {
      d: () => YJ
    });
    var FJ = ZJ(1122),
      UJ = ZJ(1221),
      eJ = ZJ(13),
      XJ = ZJ(1201),
      AJ = ZJ(1213),
      qJ = ZJ(1406),
      jJ = ZJ(35554);

    function YJ(JJ) {
      let {
        WJ: cJ,
        gJ: ZJ
      } = JJ;
      const YJ = null !== cJ && void 0 !== cJ ? cJ : (0, AJ.e)().gameNameWithVariation;
      (0, FJ.K)(YJ) && ((0, jJ.i)(), (0, XJ.db)((() => {
        console.log("Received matchmaking order from game server to game", cJ), (0, eJ.h)("inGameReplay"), (0, qJ.navigatePreserveSearch)((0, UJ.c)(YJ, null !== ZJ && void 0 !== ZJ ? ZJ : void 0))
      }), "video_start"))
    }
  },
  37922: (JJ, cJ, ZJ) => {
    ZJ.d(cJ, {
      e: () => qJ,
      f: () => XJ,
      i: () => AJ,
      k: () => jJ
    });
    var FJ = ZJ(17),
      UJ = ZJ(1247);
    const eJ = new Map;

    function XJ(JJ, cJ) {
      FJ.i.Uf("newUiRequest", {
        id: JJ,
        clientParameters: cJ
      }, !0)
    }

    function AJ(JJ) {
      FJ.i.Uf("removeUiRequest", JJ, !0);
      const cJ = eJ.get(JJ);
      cJ && (cJ.tearDownNotification(), eJ.delete(JJ))
    }

    function qJ() {
      FJ.i.Uf("clearUiRequests");
      for (const JJ of eJ.values()) JJ.tearDownNotification();
      eJ.clear()
    }

    function jJ(JJ, cJ, ZJ) {
      const FJ = UJ.NotificationProvider.showPromptPopup({
        title: cJ,
        confirmText: "general:yes",
        cancelText: "general:no",
        unlockPointerKey: "uiRequestPopup"
      });
      eJ.set(JJ, FJ), FJ.getResult().then((cJ => {
        eJ.delete(JJ), "notificationTornDown" !== cJ && ZJ(cJ)
      }))
    }
  },
  37948: (JJ, cJ, ZJ) => {
    ZJ.d(cJ, {
      c: () => AJ,
      f: () => qJ,
      h: () => jJ
    });
    var FJ = ZJ(1122),
      UJ = ZJ(889),
      eJ = ZJ(35886),
      XJ = ZJ(17);

    function AJ(JJ) {
      let {
        lobbyName: cJ,
        gameNameWithVariation: ZJ
      } = JJ;
      return !(0, FJ.N)(cJ) || null !== ZJ && (ZJ.startsWith("testGym") || (0, UJ.k)(ZJ))
    }

    function qJ(JJ) {
      return JJ.JJ === eJ.e.Leave || JJ.JJ === eJ.e.Cursor
    }

    function jJ(JJ) {
      XJ.i.Uf("codeCollab", {
        type: JJ.JJ,
        docKey: JJ.cJ,
        version: JJ.ZJ,
        editorCount: JJ.FJ,
        peers: JJ.UJ,
        updates: JJ.eJ,
        playerId: JJ.XJ,
        playerName: JJ.AJ,
        colour: JJ.qJ,
        anchor: JJ.jJ,
        head: JJ.YJ,
        existingCursors: JJ.hJ,
        files: JJ.DJ,
        engineSettings: JJ.sJ
      })
    }
  },
  37959: (JJ, cJ, ZJ) => {
    ZJ.d(cJ, {
      d: () => FJ
    });
    class FJ {
      constructor() {
        this.members = new Map
      }
      apply(JJ) {
        const cJ = {
          added: [],
          removed: [],
          settingChanges: []
        };
        for (const FJ of JJ.yF) {
          let JJ = this.members.get(FJ.SF);
          if (JJ || (JJ = {
              name: null,
              settings: {}
            }, this.members.set(FJ.SF, JJ), cJ.added.push(FJ.SF)), null !== FJ.IF && (JJ.name = FJ.IF), null !== FJ.MF || FJ.bF.length > 0) {
            const ZJ = null === FJ.MF ? {} : JSON.parse(FJ.MF);
            Object.assign(JJ.settings, ZJ);
            for (const cJ of FJ.bF) delete JJ.settings[cJ], ZJ[cJ] = void 0;
            cJ.settingChanges.push({
              playerId: FJ.SF,
              settings: ZJ
            })
          }
        }
        for (const FJ of JJ.wF) {
          const JJ = this.members.get(FJ);
          var ZJ;
          if (JJ) this.members.delete(FJ), cJ.removed.push({
            playerId: FJ,
            name: null !== (ZJ = JJ.name) && void 0 !== ZJ ? ZJ : void 0
          })
        }
        return cJ
      }
      has(JJ) {
        return this.members.has(JJ)
      }
      ids() {
        return [...this.members.keys()]
      }
      getName(JJ) {
        var cJ, ZJ;
        return null !== (cJ = null === (ZJ = this.members.get(JJ)) || void 0 === ZJ ? void 0 : ZJ.name) && void 0 !== cJ ? cJ : void 0
      }
      getSettings(JJ) {
        var cJ;
        return null === (cJ = this.members.get(JJ)) || void 0 === cJ ? void 0 : cJ.settings
      }
      getSetting(JJ, cJ) {
        var ZJ;
        return null === (ZJ = this.members.get(JJ)) || void 0 === ZJ ? void 0 : ZJ.settings[cJ]
      }
      clear() {
        this.members.clear()
      }
    }
  },
  37992: (JJ, cJ, ZJ) => {
    ZJ.d(cJ, {
      b: () => FJ,
      d: () => UJ
    });
    const FJ = ["description", "label"];

    function UJ(JJ) {
      const cJ = JJ.type;
      return {
        type: cJ,
        params: JJ[cJ]
      }
    }
  }
};
Object.freeze(modules);
for (const JJ in modules) Object.freeze(modules[JJ]);