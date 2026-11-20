export const id = 156;
export const ids = [156];
export const modules = {
  39056: (qq, Eq, gq) => {
    function Yq(qq) {
      return !(!qq.lobbyLeaderboardInfo && !qq.lobbyManage)
    }
    gq.d(Eq, {
      d: () => Yq
    })
  },
  39024: (qq, Eq, gq) => {
    gq.d(Eq, {
      b: () => Oq,
      c: () => mq
    });
    var Yq = gq(31);
    let lq = !1;

    function Oq() {
      return lq
    }

    function mq(qq) {
      lq !== qq && (lq = qq, Yq.i.TV("replayViewer|videoExportChanged"))
    }
  },
  38910: (qq, Eq, gq) => {
    gq.d(Eq, {
      c: () => Oq
    });
    var Yq = gq(31),
      lq = gq(1926);

    function Oq(qq) {
      let {
        taskId: Eq,
        progress: gq
      } = qq;
      const Yq = lq.c.get("_tasks");
      null !== Yq && void 0 !== Yq && Yq[Eq] && lq.c.apply({
        _tasks: {
          ...Yq,
          [Eq]: {
            ...Yq[Eq],
            progress: gq
          }
        }
      })
    }
    Yq.i.subscribe("clientTaskProgress", (qq => {
      Oq(qq)
    }))
  },
  39047: (qq, Eq, gq) => {
    gq.d(Eq, {
      d: () => Vq,
      h: () => dq,
      k: () => aq
    });
    var Yq = gq(2733);
    const lq = 0,
      Oq = 2,
      mq = 3,
      xq = 4;
    class Aq {
      constructor(qq, Eq) {
        this.width = qq, this.WB = Eq, this.data = void 0, this.next = 0, this.size = 0, this.data = new Float64Array(qq * Eq)
      }
      push(qq) {
        let Eq = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        const gq = this.data.subarray(this.next * this.width, (this.next + 1) * this.width);
        for (let Yq = 0; Yq < this.width; Yq++) gq[Yq] = qq[Eq + Yq];
        return this.next = (this.next + 1) % this.WB, this.size = Math.min(this.size + 1, this.WB), gq
      }
      lines() {
        const qq = [],
          Eq = (this.next - this.size + this.WB) % this.WB;
        for (let gq = 0; gq < this.size; gq++) {
          const Yq = (Eq + gq) % this.WB * this.width;
          qq.push(Array.from(this.data.subarray(Yq, Yq + this.width)).join(","))
        }
        return qq
      }
    }

    function cq(qq) {
      return Number.isFinite(qq) ? String(Math.round(10 * qq) / 10) : String(qq)
    }

    function uq(qq) {
      return Number.isFinite(qq) ? qq.toFixed(1) : String(qq)
    }
    class Bq {
      constructor() {
        this.frames = 0, this.looked = 0, this.idle = 0, this.lK = 0, this.pastLimit = 0, this.lockSkips = 0, this.kV = 0, this.lost = 0, this.dropped = 0, this.longFrames = 0, this.dtMin = 1 / 0, this.dtMax = 0, this.dtSum = 0, this.raw = [0, 0], this.turned = [0, 0], this.peakRate = 0, this.events = 0, this.eventMax = 0, this.bigEvents = 0, this.outliers = 0, this.eventLines = 0, this.suppressed = 0
      }
    }
    class Wq {
      constructor() {
        var qq = this;
        this.tally = new Bq, this.records = new Aq(10, 3600), this.events = new Aq(4, 12e3), this.event = new Float64Array(4), this.take = null, this.client = "js", this.started = !1, this.record = function(Eq) {
          let gq = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
          const [Yq, Aq, Bq, Wq, Nq, aq, Vq, dq, jq, Hq] = qq.records.push(Eq, gq), oq = qq.tally;
          switch (oq.frames++, Vq) {
            case lq:
              return void oq.idle++;
            case xq:
              return void oq.kV++;
            case mq:
              return oq.lockSkips++, void(0 === Bq && 0 === Wq || qq.outlier(`lock skip dropped raw (${cq(Bq)}, ${cq(Wq)}) at ${uq(Yq)} ms`))
          }
          oq.looked++, Number.isFinite(Aq) && (oq.dtMin = Math.min(oq.dtMin, Aq), oq.dtMax = Math.max(oq.dtMax, Aq), oq.dtSum += Aq, Aq > 0 && (oq.peakRate = Math.max(oq.peakRate, Math.hypot(Nq, aq) / Aq))), oq.raw[0] += Bq, oq.raw[1] += Wq, oq.turned[0] += Nq, oq.turned[1] += aq;
          const Pq = Math.abs(Bq) > Hq || Math.abs(Wq) > Hq,
            Qq = `raw (${cq(Bq)}, ${cq(Wq)}) over ${uq(Aq)} ms, limit ${cq(Hq)}, filter v (${dq.toFixed(3)}, ${jq.toFixed(3)}) px/ms, at ${uq(Yq)} ms`;
          Vq === Oq ? (oq.lK++, qq.outlier(`spike put right: ${Qq} -> turned (${cq(Nq)}, ${cq(aq)})`)) : Pq ? (oq.pastLimit++, qq.outlier(`kept past limit: ${Qq}`)) : Aq > 50 && (oq.longFrames++, qq.outlier(`long frame: ${Qq}, turned in full`))
        }, this.onMouseMove = qq => {
          const Eq = this.tally,
            {
              movementX: gq,
              movementY: Yq
            } = qq;
          Eq.events++;
          const lq = Math.max(Math.abs(gq), Math.abs(Yq));
          Eq.eventMax = Math.max(Eq.eventMax, lq);
          const Oq = null !== document.pointerLockElement,
            mq = this.event;
          mq[0] = qq.timeStamp, mq[1] = gq, mq[2] = Yq, mq[3] = Oq ? 1 : 0, this.events.push(mq), lq >= 200 && (Eq.bigEvents++, this.eventOutlier(`big mousemove (${gq}, ${Yq}) at ${uq(qq.timeStamp)} ms, lock ${Oq?"Fc":"free"}`))
        }, this.onLockChange = () => {
          const qq = document.pointerLockElement;
          (0, Yq.m)("look", `pointer lock ${qq?`gained (${qq.tagName.toLowerCase()})`:"lost"} at ${uq(performance.now())} ms`)
        }, this.onLockError = () => {
          (0, Yq.m)("look", `pointer lock request failed at ${uq(performance.now())} ms`)
        }, this.onVisibility = () => {
          (0, Yq.m)("look", `page ${document.visibilityState} at ${uq(performance.now())} ms`)
        }, this.flush = () => {
          this.takeRecords();
          const qq = this.tally;
          if (this.tally = new Bq, 0 === qq.events && 0 === qq.raw[0] && 0 === qq.raw[1] && 0 === qq.lockSkips && 0 === qq.lK && 0 === qq.dropped) return;
          const Eq = qq.looked > 0 ? qq.dtSum / qq.looked : NaN,
            gq = [`${qq.frames} frames (${qq.looked} looked, ${qq.idle} idle${"wasm"===this.client?`, ${qq.kV} carried`:""})`, `dt avg ${uq(Eq)} min ${uq(qq.dtMin)} max ${uq(qq.dtMax)}, ${qq.longFrames} long`, `${qq.events} mousemoves (max ${cq(qq.eventMax)} px, ${qq.bigEvents} big)`, `raw (${cq(qq.raw[0])}, ${cq(qq.raw[1])}) turned (${cq(qq.turned[0])}, ${cq(qq.turned[1])})`, `peak ${qq.peakRate.toFixed(2)} px/ms`, `put right ${qq.lK}, past limit ${qq.pastLimit}, lock skips ${qq.lockSkips}`, "lock " + (document.pointerLockElement ? "Fc" : "free")];
          qq.dropped > 0 && gq.push(`${qq.dropped} doubled spike copies dropped`), qq.lost > 0 && gq.push(`${qq.lost} records lost`), qq.suppressed > 0 && gq.push(`${qq.suppressed} outlier lines not shown`), (0, Yq.m)("look", `1s: ${gq.join("; ")}`)
        }, this.dump = () => [`look records (${this.client}): nowMs,dtMs,rawX,rawY,turnedX,turnedY,outcome,vX,vY,limit`, ...this.records.lines(), "mousemove events: timeStamp,movementX,movementY,locked", ...this.events.lines()].join("\n")
      }
      start(qq, Eq) {
        this.client = qq, this.take = Eq;
        const {
          screen: gq
        } = window;
        (0, Yq.m)("look", `start: ${qq} client, dpr ${window.devicePixelRatio}, screen ${gq.width}x${gq.height}, pointer lock ${document.pointerLockElement?"Fc":"free"}`), this.started || (this.started = !0, window.addEventListener("mousemove", this.onMouseMove, {
          capture: !0,
          passive: !0
        }), document.addEventListener("pointerlockchange", this.onLockChange), document.addEventListener("pointerlockerror", this.onLockError), document.addEventListener("visibilitychange", this.onVisibility), setInterval(this.flush, 1e3), (0, Yq.j)("look", this.dump))
      }
      outlier(qq) {
        const Eq = this.tally;
        Eq.outliers >= 20 ? Eq.suppressed++ : (Eq.outliers++, (0, Yq.m)("look", qq))
      }
      eventOutlier(qq) {
        const Eq = this.tally;
        Eq.eventLines >= 10 ? Eq.suppressed++ : (Eq.eventLines++, (0, Yq.m)("look", qq))
      }
      takeRecords() {
        var qq;
        const Eq = null === (qq = this.take) || void 0 === qq ? void 0 : qq.call(this);
        if (Eq && Eq.length >= 2) {
          this.tally.lost += Eq[0], this.tally.dropped += Eq[1];
          for (let qq = 2; qq + 10 <= Eq.length; qq += 10) this.record(Eq, qq)
        }
      }
      droppedCopy() {
        this.tally.dropped++
      }
      endTake() {
        this.takeRecords(), this.take = null
      }
    }
    let Nq = null;

    function aq(qq) {
      let Eq = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
      return Nq ??= new Wq, Nq.start(qq, Eq), Nq.record
    }

    function Vq() {
      var qq;
      null === (qq = Nq) || void 0 === qq || qq.endTake()
    }

    function dq() {
      var qq;
      null === (qq = Nq) || void 0 === qq || qq.droppedCopy()
    }
  },
  38904: (qq, Eq, gq) => {
    gq.d(Eq, {
      d: () => UE,
      f: () => kE,
      j: () => RE
    });
    var Yq = gq(3545),
      lq = gq(163),
      Oq = gq(190),
      mq = gq(600),
      xq = gq(38),
      Aq = gq(2668),
      cq = gq(3595),
      uq = gq(3584),
      Bq = gq(1214);
    const Wq = new WeakMap;
    class Nq {
      constructor(qq, Eq) {
        let gq = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {
          ncq: !0
        };
        this.callbacks = Eq, this.options = gq, this.Xgq = void 0, this.sessionId = void 0, this.iG = [], this.bcq = !1, this.eN = !1, this.icq = void 0, this.nG = 0, this.Llq = 0, this.Zcq = (qq, Eq) => {
          if (this.eN) return;
          const gq = Number(qq);
          this.bcq ? this.Mcq(gq, Eq) : this.iG.push({
            id: gq,
            payload: Eq
          })
        }, this.dispose = () => {
          this.eN || (this.eN = !0, Wq.delete(this), this.iG.length = 0, this.icq())
        }, this.Xgq = qq, this.sessionId = qq.sessionId, Wq.set(this, []), this.icq = this.Tcq()
      }
      zcq(qq) {
        this.icq(), this.Xgq = qq, this.sessionId = qq.sessionId, this.nG = 0, this.Llq = 0, this.icq = this.Tcq()
      }
      get vG() {
        return this.Llq
      }
      Tcq() {
        const qq = this.Xgq.vy("*", this.Zcq);
        return this.options.ncq && this.Xgq.Sy(this.dispose), qq
      }
      Mcq(qq, Eq) {
        try {
          (0, cq.yc)(qq) && (Eq = (0, cq.e)(qq, uq.IN.from(Eq)));
          const gq = Wq.get(this)[qq];
          if ("function" !== typeof gq) {
            if (this.callbacks.Scq) return void this.callbacks.Scq(qq, Eq);
            throw new Error(`No onMessage handler registered for message id ${qq}`)
          }
          gq(Eq)
        } catch (gq) {
          this.callbacks.pcq(`Error in onMessage ${qq} with payload ${JSON.stringify(Eq)}`, gq)
        } finally {
          this.nG++
        }
      }
      Gcq() {
        for (const {
            id: qq,
            payload: Eq
          }
          of this.iG) {
          if (this.eN) break;
          this.Mcq(qq, Eq)
        }
        this.iG.length = 0
      }
      bM() {
        return this.eN
      }
      Lcq() {
        if (this.bcq || this.eN) throw new Error("Trying to getOnMessageRegistrationHandler after registration finished");
        return {
          vy: (qq, Eq) => {
            if (this.bcq || this.eN) throw new Error("Trying to call onMessage after registration finished");
            this.vy(qq, Eq)
          },
          finishRegistration: () => {
            if (this.eN) throw new Error("Cannot finish message registration after disposal");
            this.bcq = !0, this.Gcq()
          }
        }
      }
      vy(qq, Eq) {
        var gq, Yq;
        null === (gq = (Yq = this.callbacks).Jcq) || void 0 === gq || gq.call(Yq);
        const lq = Wq.get(this);
        for (; qq > lq.length;) lq[lq.length] = null;
        lq[qq] = Eq
      }
      send(qq, Eq) {
        this.kcq(), (0, Bq.E)(Eq) ? this.Xgq.gL(qq, Eq) : this.Xgq.send(qq, Eq)
      }
      kcq() {
        var qq, Eq;
        (this.Llq++, 5 === aq++) && (null === (qq = (Eq = this.callbacks).Jcq) || void 0 === qq || qq.call(Eq), aq = 0)
      }
      WH() {
        this.dispose(), this.Xgq.WH()
      }
      leave() {
        this.dispose(), this.Xgq.leave()
      }
    }
    let aq = 0;
    var Vq = gq(3557);
    class dq extends Nq {
      constructor(qq) {
        super(qq, {
          Jcq: () => {
            (0, xq.l)(!0) && (0, Yq.rG)()
          },
          pcq: (qq, Eq) => {
            var gq;
            null === (gq = (0, Aq.e)()) || void 0 === gq || gq.YV(qq, Eq)
          }
        }, {
          ncq: !1
        }), (0, Vq.f)(qq)
      }
      pG(qq, Eq) {
        return !!(0, Vq.h)((0, Vq.e)(), this.Xgq, qq, Eq) && (this.kcq(), !0)
      }
      zcq(qq) {
        this.Rcq(), super.zcq(qq), (0, Vq.f)(qq)
      }
      WH() {
        super.WH(), this.Rcq()
      }
      Rcq() {
        this.Xgq.jH.JN.PJ = void 0
      }
    }
    var jq = gq(31),
      Hq = gq(1926),
      oq = gq(1710),
      Pq = gq(36515);

    function Qq(qq, Eq, gq, Yq, lq) {
      let Oq = arguments.length > 5 && void 0 !== arguments[5] && arguments[5];
      if (!qq.Iy.FEq(qq.oR)) return console.log("Got resync inven but don't have inven component"), void Eq.acknowledge(Yq);
      Oq && console.error("Had to sync inven"), Eq.aqq(Yq, lq) && gq.TV("chestToggleFromServer", !1, !0), gq.TV("syncedInvenFromServer")
    }
    var yq = gq(38910),
      tq = gq(38915),
      rq = gq(38016),
      vq = gq(37796),
      hq = gq(598),
      nq = gq(38396);

    function bq(qq, Eq, gq) {
      const Yq = function(qq) {
          const Eq = new Int32Array(qq.length * nq.e);
          return qq.forEach(((qq, gq) => {
            const Yq = gq * nq.e;
            if (4 === qq.length) {
              const [gq, lq, Oq, mq] = qq;
              Eq.set([gq, lq, Oq, gq, lq, Oq, mq], Yq)
            } else {
              const [gq, lq, Oq, mq, xq, Aq, cq] = qq;
              Eq.set([gq, Oq, xq, lq, mq, Aq, cq], Yq)
            }
          })), Eq
        }(gq),
        lq = (Eq, gq, Yq, lq) => {
          qq.setBlockNoMulti(Eq, gq, Yq, lq, !0)
        };
      qq.client.gameRecorder.isCapturing() ? (0, nq.kb)(Yq, (0, nq.hb)(Yq), lq) : qq.wB.kB.hT(Yq, {
        Xw: lq,
        isHookId: Eq => qq.blockChangeHasHooks(Eq),
        watched: () => function(qq, Eq, gq) {
          const Yq = [],
            lq = (qq, Eq, gq) => {
              Yq.push(qq, Eq, gq)
            },
            Oq = new Set;
          for (let mq = 0; mq < gq.length; mq += nq.e)
            for (let Eq = (0, hq.Q)(gq[mq]); Eq <= (0, hq.Q)(gq[mq + 3]); Eq++)
              for (let Yq = (0, hq.Q)(gq[mq + 1]); Yq <= (0, hq.Q)(gq[mq + 4]); Yq++)
                for (let xq = (0, hq.Q)(gq[mq + 2]); xq <= (0, hq.Q)(gq[mq + 5]); xq++) {
                  const gq = `${Eq}|${Yq}|${xq}`;
                  Oq.has(gq) || (Oq.add(gq), qq.blockDataOwner.forEachDataCell(Eq, Yq, xq, lq))
                }
          return Eq.forEachCell(lq), Int32Array.from(Yq)
        }(qq, Eq, Yq)
      }), qq.wB.Iqq()
    }
    var iq = gq(37192),
      Zq = gq(38921),
      fq = gq(38927),
      Mq = gq(987),
      Tq = gq(1928);
    var zq = gq(4334);

    function Sq(qq) {
      const Eq = qq.kB;
      let gq = 0,
        lq = -1,
        mq = -1 / 0,
        xq = null,
        Aq = !0;
      const uq = () => {
        if (++gq % 10 !== 0) return;
        const uq = (0, Yq.getLastReceivedPacketId)();
        if (uq <= lq) return;
        const [Bq, Wq, Nq] = qq.Iy.Py(qq.oR), aq = ! function(qq) {
          var Eq;
          let gq = null === (Eq = qq.Iy.hgq(qq.oR)) || void 0 === Eq ? void 0 : Eq.FN;
          if (void 0 === gq) return !1;
          const Yq = new Set;
          for (; void 0 !== gq && !Yq.has(gq);) {
            var lq;
            Yq.add(gq);
            const Eq = qq.Iy.getState(gq, "smoothToServerPos"),
              Oq = Array.isArray(Eq) ? null : null === Eq || void 0 === Eq ? void 0 : Eq.serverPosition;
            if (Oq) {
              const Eq = qq.Iy.Py(gq);
              if (Math.abs(Eq[0] - Oq[0]) > 10 || Math.abs(Eq[1] - Oq[1]) > 10 || Math.abs(Eq[2] - Oq[2]) > 10) return !0
            }
            gq = null === (lq = qq.Iy.hgq(gq)) || void 0 === lq ? void 0 : lq.FN
          }
          return !1
        }(qq) && function(qq, Eq, gq, Yq) {
          const lq = Oq.c.Oa;
          for (let Oq = 0; Oq < qq.length; Oq++) {
            const mq = qq[Oq];
            if (!(0, zq.k)(Eq, gq, Yq, mq[0] * lq, mq[1] * lq, mq[2] * lq)) return !1
          }
          return !0
        }(Eq.ZV.DN, Bq, Wq, Nq), Vq = null === xq || Math.abs(Bq - xq[0]) > 8 || Math.abs(Wq - xq[1]) > 8 || Math.abs(Nq - xq[2]) > 8, dq = !Aq || Vq || performance.now() - mq >= 1e4;
        Aq = aq, aq && dq && (lq = uq, mq = performance.now(), xq = [Bq, Wq, Nq], (0, Yq.sendColyMessage)(cq.Ng, {
          JO: uq
        }))
      };
      return qq.on("SB", uq), () => {
        qq.off("SB", uq)
      }
    }
    var pq = gq(36808),
      Gq = gq(317),
      Lq = gq.n(Gq),
      Jq = gq(6348),
      kq = gq(38050),
      Rq = gq(37776),
      Uq = gq(37754),
      Fq = gq(4346),
      sq = gq(38074),
      Xq = gq(37885),
      wq = gq(37413),
      Kq = gq(37686),
      Cq = gq(38931),
      Iq = gq(36789),
      eq = gq(36796),
      Dq = gq(38935),
      qE = gq(38939),
      EE = gq(3514),
      gE = gq(1498),
      YE = gq(2664),
      lE = gq(2834),
      OE = gq(38244),
      mE = gq(37113),
      xE = gq(4606),
      AE = gq(38976),
      cE = gq(38061),
      uE = gq(4076),
      BE = gq(37183),
      WE = gq(37264),
      NE = gq(38082),
      aE = gq(38948),
      VE = gq(38959),
      dE = gq(37407);
    class jE {
      constructor(qq, Eq, gq, Yq) {
        this.gameNameWithVariation = qq, this.wB = gq, this.connectionResume = Yq, this.stateReplicationHandler = void 0, this.stopChunkReports = () => {}, this.replayResume = null, this.stateReplicationHandler = new VE.b(Eq, this.wB)
      }
      setupStateReplicationHandlers() {
        this.stateReplicationHandler.setup(), (0, Yq.onGameResetOnce)((() => {
          this.stateReplicationHandler.dispose()
        }))
      }
      zcq(qq) {
        this.stateReplicationHandler.dispose(), this.stateReplicationHandler = new VE.b(qq, this.wB), this.stateReplicationHandler.setup()
      }
      clearBlockRules() {
        const qq = this.wB.kB;
        qq.Sgq = new Set, qq.Lgq = new Set, qq.pgq = new Set, qq.Jgq = new Set, qq.Ggq = [], qq.kgq = [], qq.EX = new Set, qq.SO = [], qq.BX = []
      }
      clearUiRequestsAndQTEs() {
        xE.b.reset(), (0, tq.e)()
      }
      startChunkReports() {
        const qq = function(qq) {
            let Eq = null,
              gq = -1 / 0,
              lq = null;
            const Oq = () => {
                lq = null;
                const Oq = Math.ceil(qq.dL[0]),
                  mq = Math.ceil(qq.dL[1]);
                Eq && Eq[0] === Oq && Eq[1] === mq || (Eq = [Oq, mq], gq = performance.now(), (0, Yq.sendColyMessage)(cq.Lg, {
                  kc: Oq,
                  Rc: mq
                }))
              },
              mq = () => {
                null === lq && (lq = setTimeout(Oq, Math.max(0, gq + 250 - performance.now())))
              };
            return Oq(), qq.on("addRemoveDistanceChanged", mq), () => {
              qq.off("addRemoveDistanceChanged", mq), null !== lq && (clearTimeout(lq), lq = null)
            }
          }(this.wB.kB),
          Eq = Sq(this.wB);
        this.stopChunkReports = () => {
          qq(), Eq()
        }
      }
      restartChunkStreaming() {
        (0, Kq.j)(this.wB, (0, Aq.b)().recentChunkEdits.chunksEditedSince(this.connectionResume.getDroppedAt() - Cq.d)), this.startChunkReports()
      }
      setupOnMessageListeners(qq, Eq) {
        const gq = this.wB,
          lq = this.gameNameWithVariation;
        qq.vy(cq.Gc, (qq => {
          let {
            Rg: Eq,
            Ug: Yq,
            Fg: lq,
            sg: Oq,
            Xg: mq,
            wg: xq,
            Kg: Aq,
            Cg: cq,
            Ig: uq
          } = qq;
          if (!gq.Iy.mEq(Eq, "itemState")) return void(0, Rq.k)(gq, Eq, [mq, xq, Aq], Yq, {
            amount: lq,
            attributes: JSON.parse(Oq),
            Cg: cq,
            size: uq
          });
          const Bq = gq.Iy.getState(Eq, "itemState");
          Bq.amount = lq, Bq.Cg = cq, Bq.creationTime = Date.now(), (0, Uq.setServerPosition)(gq.Iy.getState(Eq, "smoothToServerPos"), mq, xq, Aq)
        })), qq.vy(cq.lb, (qq => {
          (0, iq.b)(gq).setCantPickUp(qq, !0), gq.Iy.mEq(qq, "itemState") && (gq.Iy.getState(qq, "itemState").Cg = !0)
        })), qq.vy(cq.fe, (qq => {
          (0, iq.b)(gq).setCantPickUp(qq, !1), gq.Iy.mEq(qq, "itemState") && (gq.Iy.getState(qq, "itemState").Cg = !1)
        })), qq.vy(cq.dd, (qq => {
          Hq.c.applyNewClientOptions(qq)
        })), qq.vy(cq.hd, (qq => {
          let {
            eId: Eq,
            settings: Yq
          } = qq;
          (0, WE.e)(Eq);
          for (const gq in Yq)(0, WE.d)(Eq, gq, Yq[gq]);
          if ("canSee" in Yq && gq.Iy.mEq(Eq, "hidingMeshManager")) {
            const qq = gq.Iy.getState(Eq, "hidingMeshManager");
            qq.canSee = (0, NE.d)("canSee", Yq.canSee), qq._forceUpdate = !0
          }
        })), qq.vy(cq.lf, (qq => {
          let {
            OE: Eq,
            mE: lq,
            xE: Oq,
            AE: mq
          } = qq;
          const xq = [lq, Oq, mq];
          gq.Iy.setPosition(gq.oR, xq), (0, Yq.sendColyMessage)(cq.gh, {
            dc: Eq,
            jc: Fq.d
          }), jq.i.TV("localPlayerTeleported", {
            pos: xq,
            isCorrection: !1
          })
        })), qq.vy(cq.qd, (qq => {
          let {
            qq: Eq,
            Eq: gq,
            Yq: Yq,
            lq: lq
          } = qq;
          this.stateReplicationHandler.setUpIfQueued(Eq);
          const Oq = [gq, Yq, lq];
          jq.i.TV(`otherPlayerTeleported|${Eq}`, {
            pos: Oq
          })
        })), qq.vy(cq.Ld, (qq => {
          let {
            El: Eq,
            gl: lq,
            Yl: Oq,
            ll: mq,
            Ol: xq,
            ml: Aq,
            xl: uq,
            cl: Bq,
            Al: Wq,
            Wl: Nq
          } = qq;
          const aq = [lq, Oq, mq];
          gq.Iy.setPosition(gq.oR, aq);
          const Vq = gq.Iy.yEq(gq.oR),
            dq = gq.Iy.FX(gq.oR);
          Lq().set(dq.XF, 0, 0, 0), Lq().set(dq.KF, 0, 0, 0), Lq().set(dq.JV, xq, Aq, uq), dq.Ws(), Vq._flying = null !== Nq, Nq ? (Vq.flyAccel.Nl = Nq.Nl, Vq.flyAccel.al = Nq.al) : Vq.flyAccel.reset(), Bq && Vq.movementType === Jq.p.GLIDING && (Vq.ul = Bq.ul, Lq().copy(Vq.Bl, Bq.Bl)), (0, Yq.sendColyMessage)(cq.gh, {
            dc: Eq,
            jc: Fq.d
          }), jq.i.TV("localPlayerTeleported", {
            pos: aq,
            isCorrection: !0
          })
        }));

        function Oq() {
          return gq.Iy.sEq(gq.oR)
        }
        qq.vy(cq.vb, (qq => {
          let {
            chatMsgId: Eq,
            content: gq,
            chatterEId: Yq
          } = qq;
          jq.i.TV("chat", {
            serverChatMsgId: Eq,
            content: gq,
            chatterEId: Yq
          }, !0)
        })), qq.vy(cq.xd, (qq => {
          YE.c.onReceiveColyseusPing(qq)
        })), qq.vy(cq.Qe, (qq => {
          let {
            key: Eq,
            value: gq
          } = qq;
          (0, oq.setCookie)(lq, Eq, gq)
        })), qq.vy(cq.Te, (qq => {
          jq.i.TV("setDiscordReportKey", qq)
        })), (0, Yq.onGameResetOnce)((() => {
          this.stopChunkReports()
        })), qq.vy(cq.zc, (Eq => {
          const {
            HE: lq,
            oE: Oq
          } = Eq;
          if ((0, Yq.setAdjustment)(Oq), this.connectionResume.onInitialInfo(Eq.PE, Eq.QE), Yq.offlineInputReplay.hG(Eq.yE), this.connectionResume.isResuming()) {
            console.log("Resumed the connection as eId", lq);
            try {
              null === Eq.tE && (0, Aq.b)().client.inventoryPrediction.dropPending(), this.stopChunkReports(), this.clearBlockRules(), Hq.c.apply({
                shopInfo: null,
                _shopVersion: Tq.c
              });
              const Yq = gq.Iy.XEq(gq.oR);
              Yq.Tg && (Yq.chestClosed(), jq.i.TV("chestToggleFromServer", !1, !0)), this.clearUiRequestsAndQTEs(), jq.i.TV("initInfoReceived", qq)
            } finally {
              const qq = null === Eq.tE ? null : {
                sync: null,
                endSeq: null
              };
              this.replayResume = qq, this.connectionResume.onResumeInitialInfo(Eq.tE, (() => {
                qq.endSeq = (0, Aq.b)().client.inventoryPrediction.lastActionSeq
              })), null === qq && this.restartChunkStreaming()
            }
          } else console.log("Local client is eId", lq), jq.i.TV("loadingScreenState", "loadingPage:loadingWorld"), gq.AEq = lq, gq.Iy.mEq(gq.oR, gq.Iy.names.entityName) && gq.Iy.Lk(gq.oR, gq.Iy.names.entityName), (0, Aq.b)().setEntityName(gq.AEq, (0, Aq.b)().getRawEntityName(gq.oR)), gq.jR[gq.AEq] = {}, gq.Iy.zk(gq.oR, gq.Iy.names.entityName), jq.i.TV("initInfoReceived", qq), this.startChunkReports(), mq.client.onServerConnectionFinalised()
        })), qq.vy(cq.ze, (() => {
          this.connectionResume.isResuming() ? this.connectionResume.onResumed((() => {
            const qq = this.replayResume;
            if (this.replayResume = null, !qq) return;
            this.restartChunkStreaming();
            const {
              inventoryPrediction: Eq
            } = (0, Aq.b)().client, {
              sync: lq
            } = qq, Oq = new Set(Yq.offlineInputReplay.takeDroppedActions());
            if (lq) {
              var mq;
              const Yq = null !== (mq = qq.endSeq) && void 0 !== mq ? mq : Eq.lastActionSeq;
              Eq.forget((qq => qq > lq.eq && qq <= Yq || Oq.has(qq))), Qq(gq, Eq, jq.i, lq.eq, lq.load)
            } else Eq.dropPending(), Eq.askForSnapshot()
          })) : console.warn("ResumeComplete arrived without a resume")
        })), qq.vy(cq.of, (qq => {
          jq.i.TV("TopRightHelper", qq, !0)
        })), qq.vy(cq.Od, (qq => {
          let {
            type: Eq,
            location1: gq,
            location2: Yq,
            location3: lq,
            score: Oq
          } = qq;
          (0, lE.y)({
            type: Eq,
            location1: gq,
            location2: Yq,
            location3: lq,
            score: Oq
          })
        })), qq.vy(cq.xe, (qq => {
          let {
            type: Eq,
            resourceType: gq,
            amount: Yq,
            category: lq,
            itemName: Oq
          } = qq;
          (0, lE.C)({
            type: Eq,
            resourceType: gq,
            amount: Yq,
            category: lq,
            itemName: Oq
          })
        })), qq.vy(cq.Z, (qq => {
          gq.kB.Sgq.add(qq), gq.kB.Lgq.delete(qq)
        })), qq.vy(cq.db, (qq => {
          gq.kB.Lgq.add(qq), gq.kB.Sgq.delete(qq)
        })), qq.vy(cq.ie, (qq => {
          gq.kB.Lgq.delete(qq), gq.kB.Sgq.delete(qq)
        })), qq.vy(cq.bb, (qq => {
          gq.kB.pgq.add(qq), gq.kB.Jgq.delete(qq)
        })), qq.vy(cq.kb, (qq => {
          gq.kB.Jgq.add(qq), gq.kB.pgq.delete(qq)
        })), qq.vy(cq.ne, (qq => {
          gq.kB.Jgq.delete(qq), gq.kB.pgq.delete(qq)
        })), qq.vy(cq.ab, (qq => {
          (0, Bq.qb)(qq, gq.kB.kgq), (0, Bq.qb)(qq, gq.kB.Ggq), gq.kB.Ggq.push(qq)
        })), qq.vy(cq.gb, (qq => {
          (0, Bq.qb)(qq, gq.kB.Ggq), (0, Bq.qb)(qq, gq.kB.kgq), gq.kB.kgq.push(qq)
        })), qq.vy(cq.me, (qq => {
          (0, Bq.qb)(qq, gq.kB.Ggq), (0, Bq.qb)(qq, gq.kB.kgq)
        })), qq.vy(cq.Lf, (qq => {
          let {
            Ng: Eq,
            ag: Yq
          } = qq;
          Yq ? gq.kB.EX.delete(Eq) : gq.kB.EX.add(Eq)
        })), qq.vy(cq.Jf, (qq => {
          let {
            SO: Eq,
            pO: Yq
          } = qq;
          mq.updateWalkThroughRect(gq.oR, Eq, Yq)
        })), (0, Yq.onGameResetOnce)((() => {
          this.clearBlockRules()
        })), qq.vy(cq.kf, (qq => {
          (0, yq.c)(qq)
        })), qq.vy(cq.sc, (qq => {
          rq.d.applyServerUpdate(qq)
        })), qq.vy(cq.mb, (qq => {
          mq.applyServerBlocks((() => {
            ! function(qq, Eq) {
              for (const {
                  MO: gq,
                  TO: Yq
                }
                of Eq) {
                const Eq = vq.c[Yq];
                if (Eq) {
                  const {
                    compX: Yq,
                    compY: lq,
                    compZ: Oq,
                    mainMultiblock: mq
                  } = Eq;
                  qq.xJ(gq[0] - Yq, gq[1] - lq, gq[2] - Oq, mq)
                }
              }
              for (const {
                  MO: gq,
                  TO: Yq,
                  zO: lq
                }
                of Eq) qq.setBlockNoMulti(gq[0], gq[1], gq[2], Yq, !0), qq.blockDataOwner.setBlockData(gq[0], gq[1], gq[2], null === lq ? void 0 : JSON.parse(lq)), qq.blockAdded(gq[0], gq[1], gq[2], Yq)
            }(mq, qq)
          })), jq.i.TV("changeBlockFail", qq), mq.client.triggerGameCallback("onChangeBlockFail", qq), jq.i.TV("EditBoard", {
            pos: null
          }), jq.i.TV("EditCodeBlock", {
            pos: null,
            canChangePos: null
          })
        })), qq.vy(cq.td, (qq => {
          let {
            pickUpItems: Eq,
            pickUpAckSeq: gq
          } = qq;
          for (const {
              name: Yq,
              amount: lq,
              attributes: mq
            }
            of Eq) Oq().pickUpItem({
            name: Yq,
            amount: lq,
            typeObj: Rq.C[Yq],
            attributes: mq
          });
          (0, Aq.b)().client.inventoryPrediction.serverChangeApplied(gq)
        })), qq.vy(cq.We, (qq => {
          let {
            index: Eq,
            name: Yq,
            amount: lq,
            attributes: Oq,
            setSlotAckSeq: mq
          } = qq;
          const xq = gq.Iy.XEq(gq.oR);
          (Eq < xq.playerInventory.numSlots || xq.Tg || xq.inCreative) && xq.setItemSlot(Eq, Yq, lq, Oq), (0, Aq.b)().client.inventoryPrediction.serverChangeApplied(mq)
        })), qq.vy(cq.jf, (qq => {
          let {
            Mg: Eq,
            Lg: Yq,
            eq: lq
          } = qq;
          const {
            inventoryPrediction: Oq
          } = (0, Aq.b)().client, mq = () => {
            gq.Iy.XEq(gq.oR).loadFromString(Eq)
          };
          this.replayResume && (this.replayResume.sync = {
            eq: lq,
            load: mq
          }), Qq(gq, Oq, jq.i, lq, mq, Yq)
        })), qq.vy(cq.Cc, (qq => {
          (0, Aq.b)().client.inventoryPrediction.acknowledge(qq)
        })), qq.vy(cq.J, (qq => {
          let {
            Sq: Eq,
            pq: gq,
            Gq: Yq,
            Lq: lq
          } = qq;
          (0, Aq.b)().client.itemDropPrediction.onActionItemDrops(Eq, gq, Yq, lq)
        })), qq.vy(cq.Hb, (qq => {
          Oq().clearInventory(), (0, Aq.b)().client.inventoryPrediction.serverChangeApplied(qq)
        })), qq.vy(cq.Oc, (qq => {
          let {
            leaveEventType: Eq,
            category: gq,
            subCategory: Yq,
            value: lq
          } = qq;
          (0, lE.L)({
            leaveEventType: Eq,
            category: gq,
            subCategory: Yq,
            value: lq
          })
        })), qq.vy(cq.Sb, (qq => {
          let {
            cat1: Eq,
            cat2: gq,
            cat3: Yq,
            value: lq
          } = qq;
          (0, lE.s)({
            cat1: Eq,
            cat2: gq,
            cat3: Yq,
            value: lq
          })
        }));
        const mq = (0, Aq.b)();
        qq.vy(cq.Lb, (qq => {
          mq.applyServerBlocks((() => {
            bq(mq, rq.d, qq)
          }))
        })), qq.vy(cq.Ye, (qq => {
          jq.i.TV("setSelectedInventorySlotI", qq, !0)
        })), qq.vy(cq.Lc, (qq => {
          let {
            category: Eq,
            timeframe: gq,
            data: Yq
          } = qq;
          jq.i.TV("leaderboardResponse", {
            category: Eq,
            timeframe: gq,
            data: Yq
          })
        })), qq.vy(cq.Y, (qq => {
          let {
            dE: Eq,
            jE: gq
          } = qq;
          this.stateReplicationHandler.setUpIfQueued(Eq), Eq = (0, pq.b)(Eq), (0, Aq.b)().client.gameRecorder.recordBulletShot(Eq, gq), jq.i.TV(`bulletShot|${Eq}`, {
            bulletDirections: gq
          })
        })), qq.vy(cq.uc, (qq => {
          let {
            jY: Eq,
            HY: gq
          } = qq;
          jq.i.TV("damagedByOtherPlayer", {
            jY: Eq,
            direction: gq
          }, !0)
        })), qq.vy(cq.Hd, (qq => {
          jq.i.TV("playerKilled", qq, !0), (0, Aq.b)().client.gameRecorder.recordPlayerKilled(qq.deadEId, qq.killerEId, qq.withItem, qq.killstreak)
        })), qq.vy(cq.Wb, (qq => {
          jq.i.TV("customKillfeed", qq, !0), (0, Aq.b)().client.gameRecorder.recordCustomKillfeed(qq.killer, qq.victim, qq.withItem)
        })), qq.vy(cq.Pd, (qq => {
          let {
            dl: Eq,
            jl: Yq
          } = qq;
          this.stateReplicationHandler.setUpIfQueued(Eq);
          const lq = gq.Iy.Ngq(Eq);
          null !== lq && void 0 !== lq && lq.isGun() && lq.reload(Date.now(), Yq)
        })), qq.vy(cq.hf, (() => {
          jq.i.TV("showShopTutorial", null, !0)
        })), qq.vy(cq.Nd, (qq => {
          jq.i.TV("progressBarUpdate", qq, !0)
        })), qq.vy(cq.Ac, (qq => {
          jq.i.TV("middleScreenBarInitiate", {
            duration: qq.cE,
            uE: qq.uE,
            horizBarRemOffset: qq.BE
          }, !0)
        })), qq.vy(cq.$d, (() => {
          jq.i.TV("middleScreenBarRemove", !0)
        })), qq.vy(cq.He, (qq => {
          let {
            vq: Eq,
            hq: Yq
          } = qq;
          const lq = Yq ? (0, cE.g)(gq, Yq) : void 0;
          jq.i.TV("sendHitmarker", {
            vq: Eq,
            screenPos: lq
          }, !0)
        })), qq.vy(cq.Se, (qq => {
          let {
            id: Eq,
            position: gq,
            style: Yq,
            mY: lq,
            AY: Oq
          } = qq;
          jq.i.TV("setDirectionArrow", {
            id: Eq,
            position: gq,
            style: Yq,
            text: (0, cq.u)(lq),
            AY: Oq
          }, !0)
        })), qq.vy(cq.Eb, (qq => {
          let {
            id: Eq
          } = qq;
          jq.i.TV("clearDirectionArrow", {
            id: Eq
          }, !0)
        })), qq.vy(cq.K, (qq => {
          let {
            xq: Eq,
            Aq: Yq,
            animationScript: lq,
            cq: Oq,
            uq: mq,
            Bq: xq,
            Wq: cq
          } = qq;
          Eq = (0, pq.b)(Eq);
          const uq = null === lq && null !== xq ? (0, Zq.g)(xq, cq) : lq;
          (0, Aq.b)().client.gameRecorder.recordAnimateEntity(Eq, Yq, uq, Oq, mq), (0, iq.b)(gq).animations.animateEntity(Eq, Yq, lq, Oq, mq, xq, cq), null !== lq || Eq === gq.oR && Yq === BE.g.Emote && (0, Aq.b)().client.cameraController.endTemporaryThirdPerson()
        })), qq.vy(cq.yf, (qq => {
          let {
            GO: Eq,
            LO: gq
          } = qq;
          if (mq.yC(Eq[0], Eq[1], Eq[2])) {
            const qq = (0, Aq.b)().Ay(Eq[0], Eq[1], Eq[2]);
            (0, Aq.b)().updateMailboxContents(Eq[0], Eq[1], Eq[2], qq, gq)
          }
        })), qq.vy(cq.zb, (qq => {
          let {
            Jq: Eq,
            kq: Yq,
            Rq: lq,
            Uq: Oq,
            Fq: mq,
            Xq: xq,
            wq: cq,
            Kq: uq
          } = qq;
          const Bq = gq.Iy.XEq(gq.oR);
          if (xq) {
            const {
              Iq: qq,
              eq: Eq
            } = uq;
            return (0, Aq.b)().client.inventoryPrediction.aqq(Eq, (() => {
              Bq.chestRefreshed(Yq, lq, Oq, cq, qq)
            })) && jq.i.TV("chestToggleFromServer", !1, !0), void jq.i.TV("chestRefreshedFromServer")
          }(Eq || Bq.Tg) && (Eq ? (Bq.chestOpened(Yq, lq, Oq, mq, cq), null !== mq && (0, Aq.b)().client.ironChestPasskeyCache.onChestOpened(Oq, mq)) : Bq.chestClosed(), jq.i.TV("chestToggleFromServer", Eq, !0))
        })), qq.vy(cq._b, (qq => {
          let {
            craftingRecipeItemName: Eq,
            recipesForItem: Yq
          } = qq;
          Eq ? mq.craftingManager.editRecipesForPlayer(gq.oR, Eq, Yq) : mq.craftingManager.resetAllPlayerRecipes(gq.oR), jq.i.TV("craftingRecipesEdited", {
            itemName: Eq,
            recipesForItem: Yq
          })
        })), qq.vy(cq._e, (qq => {
          let {
            vehicleEId: Eq,
            overrides: gq
          } = qq;
          (0, Aq.b)().applyRiddenVehicleSettingOverrides(Eq, gq)
        })), qq.vy(cq.Ff, (qq => {
          let {
            ig: Eq,
            Zg: Yq,
            fg: lq
          } = qq;
          const Oq = gq.Iy.yEq(gq.oR).physicsState.type === Jq.t.SLEEPING && Eq === Jq.t.DEFAULT;
          (0, Aq.b)().updatePositionAndPhysics(gq.oR, {
            type: Eq,
            tier: Yq
          }, !0, lq), Oq && (0, Aq.b)().updateHeldVehicleStatus()
        })), qq.vy(cq.ob, (qq => {
          let {
            aY: Eq,
            VY: Yq
          } = qq;
          gq.Iy.REq(gq.oR).setPose(Eq, Yq)
        })), qq.vy(cq.De, (qq => {
          (0, aE.e)(qq)
        })), qq.vy(cq.Ed, (qq => {
          for (const Eq of qq)(0, sq.A)(Eq);
          jq.i.TV("playerCosmeticsUpdated", qq, !0)
        })), qq.vy(cq.P, (qq => {
          for (const Eq of qq)(0, mE.c)(gq, Eq)
        })), qq.vy(cq.Rc, (qq => {
          let {
            nq: Eq,
            bq: Yq,
            Zq: lq,
            fq: Oq,
            Mq: xq,
            Tq: Aq,
            zq: cq
          } = qq;
          this.stateReplicationHandler.setUpIfQueued(Eq), Eq = (0, pq.b)(Eq);
          const uq = gq.Iy.mgq(Eq);
          if (uq && (uq.lastHurtTime = performance.now()), (0, kq.playRigHurt)(gq, Eq, Aq), jq.i.TV("lifeformHurt", {
              eId: Eq,
              zq: cq
            }), Yq) {
            const qq = (0, cE.g)(gq, Yq.hq);
            jq.i.TV("yourAttackHit", {
              vq: Oq,
              screenPos: qq,
              hitSelf: Eq === gq.oR
            })
          }
          Eq === gq.oR && (mq.shakePlayerCamera(Eq, xq / 40, 200), jq.i.TV("closeShopOnDamaged", null), jq.i.TV("damagedByOtherPlayer", {
            jY: null,
            direction: Aq,
            Mq: xq
          }, !0));
          const Bq = gq.Iy.Py(Eq);
          if (Bq && (lq || Oq)) {
            const qq = [Bq[0], Bq[1] + 1, Bq[2]];
            lq && (0, Xq.i)(gq, Xq.t, qq, 15), Oq && (0, Xq.i)(gq, Xq.k, qq, 10)
          }
        })), qq.vy(cq.Qc, (qq => {
          let {
            gg: Eq,
            Yg: Yq,
            lg: lq
          } = qq;
          (0, iq.b)(gq).setHealthFrac((0, pq.b)(Eq), lq), jq.i.TV("lifeformHealthChanged", {
            eId: (0, pq.b)(Eq),
            Yg: Yq,
            lg: lq
          })
        })), qq.vy(cq.S, (qq => {
          let {
            Hg: Eq,
            og: Yq
          } = qq;
          (0, Aq.b)().playerAttacked(gq.oR, Eq, Yq)
        })), qq.vy(cq.Kc, (qq => {
          (0, Aq.b)().client.leaveGameUnwanted({
            reason: qq,
            requiresRefresh: !1,
            canReconnect: !1,
            automaticallyReconnect: !1
          }), (0, gE.navigatePreserveSearch)("/")
        })), qq.vy(cq.Yd, (qq => {
          let {
            Pg: Eq,
            Qg: gq,
            yg: Yq
          } = qq;
          Oq().removeItemName(Eq, gq), (0, Aq.b)().client.inventoryPrediction.serverChangeApplied(Yq)
        })), qq.vy(cq.Ne, (qq => {
          const {
            du: Eq,
            tgq: Yq
          } = (0, wq.e)([qq[0], qq[1], qq[2]]);
          dE.d.setLookDirection(gq, Eq, Yq), (0, Kq.s)(Eq, Yq);
          const lq = gq.Iy.REq(gq.oR);
          lq && (lq.heading = Eq)
        })), qq.vy(cq.Pe, (qq => {
          mq.client.cameraController.setCameraZoom(qq)
        })), qq.vy(cq.gf, (qq => {
          let {
            Vg: Eq,
            jg: Yq
          } = qq;
          mq.shakePlayerCamera(gq.oR, Eq, Yq)
        })), qq.vy(cq.Pb, (qq => {
          (0, EE.onCosmeticPackGranted)(qq)
        })), qq.vy(cq.Le, (qq => {
          jq.i.TV("serverUpdating", Date.now() + qq, !0)
        })), qq.vy(cq.$c, fq.d), qq.vy(cq.nd, (qq => {
          let {
            id: Eq,
            vY: gq
          } = qq;
          const {
            type: lq,
            params: Oq
          } = (0, AE.c)(gq), mq = {
            ...Oq
          };
          for (const Yq of AE.b) Yq in mq && mq[Yq] && (mq[Yq] = (0, cq.u)(mq[Yq]));
          xE.b.queueQTE(Eq, lq, mq).getResult().then((qq => {
            "boolean" === typeof qq && (0, Yq.sendColyMessage)(cq.Ki, {
              qteId: Eq,
              qteResponse: qq
            })
          }))
        })), qq.vy(cq.ae, (qq => {
          xE.b.cancelQTE(qq)
        })), (0, Yq.onGameResetOnce)((() => {
          xE.b.reset()
        })), qq.vy(cq.od, (qq => {
          let {
            id: Eq,
            clientParameters: gq
          } = qq;
          (0, tq.f)(Eq, gq)
        })), qq.vy(cq.de, (qq => {
          (0, tq.i)(qq)
        })), qq.vy(cq.uf, (qq => {
          let {
            text: Eq,
            id: gq
          } = qq;
          (0, tq.l)(gq, Eq, (qq => {
            (0, Yq.sendColyMessage)(cq.ik, {
              ou: gq,
              Pu: qq,
              Qu: 5
            })
          }))
        })), qq.vy(cq.cc, (qq => {
          let {
            RE: Eq,
            UE: gq,
            FE: Yq,
            sE: lq,
            XE: Oq,
            wE: mq
          } = qq;
          Eq = (0, pq.b)(Eq), (0, Aq.b)().client.updateEffect(Eq, gq, {
            displayName: Yq,
            icon: lq,
            duration: Oq,
            level: mq
          })
        })), qq.vy(cq.Rd, (qq => {
          let {
            RE: Eq,
            UE: gq
          } = qq;
          Eq = (0, pq.b)(Eq), (0, Aq.b)().client.removeEffect(Eq, gq)
        })), qq.vy(cq.Hc, (qq => {
          gq.Iy.REq(gq.oR).jumpMultiplier.setMultiplierType("jumpEffectAmount", qq)
        })), qq.vy(cq.qf, (qq => {
          jq.i.TV("ttbEffectMultiplier", qq)
        })), (0, Yq.onGameResetOnce)((() => {
          gq.Iy.REq(gq.oR).jumpMultiplier.setMultiplierType("jumpEffectAmount", 1)
        })), qq.vy(cq.id, (qq => {
          (0, Xq.j)(gq, (0, Bq.p)(qq))
        })), qq.vy(cq.jd, (qq => {
          uE.g[qq.Vl] ? (0, Xq.j)(gq, {
            ...uE.g[qq.Vl],
            pos1: qq.pos1,
            pos2: qq.pos2
          }) : console.error(`Unknown preset id: ${qq.Vl}`)
        })), qq.vy(cq.Ad, (qq => {
          var Eq, gq;
          let {
            KE: Yq,
            CE: lq,
            IE: Oq,
            eE: mq
          } = qq, {
            qg: xq,
            Eg: cq
          } = null !== mq && void 0 !== mq ? mq : {};
          const {
            DE: uq
          } = null !== mq && void 0 !== mq ? mq : {};
          xq = null !== (Eq = xq) && void 0 !== Eq ? Eq : void 0, cq = null !== (gq = cq) && void 0 !== gq ? gq : void 0, "string" === typeof uq && this.stateReplicationHandler.setUpIfQueued(uq), (0, Aq.b)().client.gameRecorder.recordPlaySound(Yq, lq, Oq, mq), Iq.b.play((0, eq.c)(Yq), lq, uq, xq, cq).rate(Oq)
        })), qq.vy(cq.Me, (qq => {
          let {
            pos: Eq,
            data: gq
          } = qq;
          mq.blockDataOwner.setBlockData(Eq[0], Eq[1], Eq[2], gq), mq.blockAdded(Eq[0], Eq[1], Eq[2], mq.Ay(Eq[0], Eq[1], Eq[2]))
        })), qq.vy(cq.sd, (qq => {
          let {
            info: Eq
          } = qq;
          jq.i.TV("overShopInfo", Eq, !0)
        })), qq.vy(cq.lc, (qq => {
          let {
            Jg: Yq,
            kg: lq
          } = qq;
          Eq.openShop(gq.oR, Yq, lq)
        })), qq.vy(cq.N, (qq => {
          gq.Iy.FX(gq.oR).applyImpulse(qq)
        })), qq.vy(cq.cf, (qq => {
          const Eq = gq.Iy.FX(gq.oR);
          Lq().set(Eq.XF, 0, 0, 0), Lq().set(Eq.KF, 0, 0, 0), Lq().copy(Eq.JV, qq), Eq.Ws()
        })), qq.vy(cq.Tc, (qq => {
          console.error(`[logErrorToConsole]: ${qq}`)
        })), qq.vy(cq.hc, (qq => {
          let {
            tg: Eq,
            hg: gq,
            ng: Yq
          } = qq;
          jq.i.TV("flyingMiddleMessage", {
            content: (0, cq.u)(Eq),
            hg: gq,
            ng: Yq
          }, !0)
        })), qq.vy(cq.Pf, (qq => {
          const Eq = qq === Mq.e ? null : {
            message: `Currently loaded as variation: ${qq}`,
            type: "Warning"
          };
          jq.i.TV("showPermanentBottomMessage", Eq, !0)
        })), qq.vy(cq.oc, (qq => {
          let {
            messageType: Eq,
            data: gq
          } = qq;
          (0, Dq.h)(Eq) ? (0, Dq.d)(Eq, gq) : ("freeCamPerms" === Eq && mq.client.freeCameraController.setPerms(gq.key, gq.value), mq.client.triggerGameCallback("onReceivedMessageFromServer", Eq, gq))
        })), qq.vy(cq.sb, (() => {
          const qq = gq.Iy.Ngq(gq.oR);
          null !== qq && void 0 !== qq && qq.isChargeable() && qq.finishCharging(!1, Date.now())
        })), qq.vy(cq.Ud, (qq => {
          let {
            bg: Eq
          } = qq;
          mq.craftingManager.removeRecipes(gq.oR, Eq), jq.i.TV("craftingRecipesEdited", {
            itemName: Eq,
            recipesForItem: []
          })
        })), qq.vy(cq.Bf, (qq => {
          for (const Eq in qq) {
            const gq = qq[Eq];
            for (const qq in gq) mq.client.meshCreator.handleParticleSystemUpdate(Eq, qq, gq[qq])
          }
        })), (0, Yq.onGameResetOnce)((() => {
          (0, OE.setFloatingYValue)(gq.Iy.getState(gq.oR, "physics"), gq.Iy.qI(gq.oR), null)
        })), qq.vy(cq.dc, (qq => {
          let {
            oY: Eq,
            PY: Yq,
            QY: lq
          } = qq;
          const Oq = (0, pq.b)(Eq);
          if (Oq === gq.oR) {
            const qq = gq.Iy.qI(gq.oR).position;
            lq ??= Math.floor(qq[1]) - 1, (0, OE.setFloatingYValue)(gq.Iy.getState(gq.oR, "physics"), gq.Iy.qI(gq.oR), Yq ? lq : null)
          }(0, iq.b)(gq).setFloating(Oq, Yq, lq);
          const mq = gq.Iy.getState(Oq, "floating");
          mq && (mq.isFloating = Yq, mq.QY = Yq ? lq : null)
        })), qq.vy(cq.Ib, qE.i)
      }
    }
    window.addEventListener("beforeunload", (() => {}));
    var HE = gq(38983),
      oE = gq(38991),
      PE = gq(623),
      QE = gq(2853);
    class yE {
      constructor(qq, Eq, gq, Yq) {
        this.msgHandler = gq, this.listener = Yq, this.session = void 0, this.attachedRoom = null, this.detachRoomListeners = null, this.suspended = !1, this.droppedAt = 0, this.session = new HE.d({
          reconnect: qq,
          isLive: () => Yq.isLive(),
          onReconnected: qq => {
            this.resumeOnRoom(qq)
          },
          onGaveUp: (qq, Eq) => {
            Yq.onGaveUp(qq, Eq)
          },
          freeze: Eq,
          releaseSeat: Eq => {
            qq(Eq).then((qq => {
              qq.leave(!0)
            }), (qq => {
              console.warn("Couldn't release the held seat of a game left while reconnecting", qq)
            }))
          }
        })
      }
      onInitialInfo(qq, Eq) {
        this.session.onInitialInfo(qq, Eq)
      }
      isResuming() {
        return this.session.isResuming()
      }
      getDroppedAt() {
        return this.droppedAt
      }
      onResumeInitialInfo(qq, Eq) {
        if (this.session.onResuming(), null === qq) {
          try {
            (0, Aq.b)().client.itemDropPrediction.reset()
          } catch (gq) {
            console.error("Error dropping the item drop predictions on resuming", gq)
          }
          return Yq.offlineInputReplay.discard(), void this.setSuspended(!1)
        }(0, Aq.b)().client.itemDropPrediction.onResumeReplayOffered(), Yq.offlineInputReplay.replayFrom(qq.vE, Eq)
      }
      onResumed(qq) {
        this.setSuspended(!1), (0, Yq.resendBeacons)();
        try {
          qq()
        } catch (Eq) {
          console.error("Error completing the resume", Eq)
        } finally {
          this.session.onResumed()
        }
      }
      attachRoom(qq) {
        const Eq = (0, PE.h)((() => qq.connection.isOpen));
        qq.Sy(Eq);
        const gq = new oE.b((() => {
          this.session.canHoldSeat() && this.listener.isLive() && (console.warn("The game server went silent, reconnecting"), this.onConnectionDropped(qq, "silent"), qq.leave(!1))
        }));
        qq.onStateChange((() => {
          gq.heard()
        }));
        const Yq = Eq => {
          Eq.persisted || qq.leave(!0)
        };
        window.addEventListener("pagehide", Yq), qq.Sy(((Eq, gq) => {
          if (qq === this.attachedRoom && this.listener.isLive()) return (0, Oq.g)(Eq) && this.session.canHoldSeat() ? (console.warn(`Connection to the game server dropped with code ${Eq}, reconnecting`), this.listener.onDropped(Eq, gq), void this.onConnectionDropped(qq, String(Eq))) : void this.listener.onRoomLeft(Eq, gq)
        })), this.attachedRoom = qq, this.detachRoomListeners = () => {
          Eq(), gq.dispose(), window.removeEventListener("pagehide", Yq)
        }
      }
      dispose() {
        this.detachRoom(), this.session.leave(), this.setSuspended(!1)
      }
      setSuspended(qq) {
        qq !== this.suspended && (this.suspended = qq, (0, Yq.setConnectionSuspended)(qq), (0, Aq.b)().client.itemDropPrediction.setSuspended(qq))
      }
      detachRoom() {
        var qq;
        null === (qq = this.detachRoomListeners) || void 0 === qq || qq.call(this), this.detachRoomListeners = null, this.attachedRoom = null
      }
      onConnectionDropped(qq, Eq) {
        (0, QE.d)("disconnect", "Left room", Eq), this.isResuming() || (this.droppedAt = Date.now()), this.detachRoom(), Yq.offlineInputReplay.onConnectionLost(), this.setSuspended(!0), this.session.onConnectionLost(qq.reconnectionToken)
      }
      resumeOnRoom(qq) {
        if (!this.listener.isLive()) return console.warn("Left the game while reconnecting, leaving the resumed room"), qq.leave(!0), void this.dispose();
        console.log("Reconnected to the game server, waiting for the game to resume"), (0, aE.o)(), Yq.offlineInputReplay.onConnectionReplaced(), this.msgHandler.zcq(qq), this.listener.onReconnected(qq), this.attachRoom(qq)
      }
    }
    var tE = gq(3341),
      rE = gq(3347),
      vE = gq(1308),
      hE = gq(1283),
      nE = gq(4508),
      bE = gq(3056),
      iE = gq(1046),
      ZE = gq(37709),
      fE = gq(38995),
      ME = gq(8858),
      TE = gq(39004),
      zE = gq(1792),
      SE = gq(39012),
      pE = gq(1702),
      GE = gq(2675);

    function LE(qq) {
      var Eq, gq;
      if ("object" !== typeof qq || null === qq) return {
        errType: typeof qq
      };
      const Yq = qq;
      return {
        errType: null !== (Eq = null === (gq = qq.constructor) || void 0 === gq ? void 0 : gq.name) && void 0 !== Eq ? Eq : "",
        errName: "string" === typeof Yq.name ? Yq.name : "",
        eventType: "string" === typeof Yq.type ? Yq.type : "",
        errStack: "string" === typeof Yq.stack ? Yq.stack.split("\n").slice(1).join(" | ") : ""
      }
    }

    function JE(qq) {
      if ("undefined" !== typeof ProgressEvent && qq instanceof ProgressEvent) return !0;
      if (!(qq instanceof Error)) return !1;
      const Eq = qq.code;
      return "ServerError" === qq.name && void 0 === Eq || "AbortError" === qq.name || "seat reservation expired." === qq.message || "early_leave" === qq.message
    }(0, Vq.k)((qq => {
      (0, QE.d)("wasm_net", qq)
    }));
    let kE = !0;

    function RE() {
      kE = !1
    }
    class UE {
      constructor(qq) {
        this.gameNameWithVariation = void 0, this.lobbyName = void 0, this.colyClient = void 0, this.userContext = void 0, this.joinedAt = null, this.checkSendPath = () => {}, this.wB = void 0, this.connectionResume = void 0, this.incomingMsgInitialisor = void 0, this.gameNameWithVariation = qq.gameNameWithVariation, this.lobbyName = qq.lobbyName, this.colyClient = qq.colyClient, this.userContext = qq.userContext
      }
      async connectToServer(qq, Eq, gq) {
        Hq.c.reset(), qq.jR = {
          [qq.oR]: {}
        }, qq.AEq = void 0, (0, aE.o)(), (0, Aq.b)().removeAllEntityNames(), (0, Aq.b)().setEntityName(qq.oR, this.userContext.getPlayerName()), (0, vE.w)({
          lobbyName: this.lobbyName
        }), console.log("Waiting for clientConnection passed promise to resolve");
        const mq = (0, pE.d)();
        console.log("joining server with game", this.gameNameWithVariation, "lobbyName", this.lobbyName);
        const xq = performance.now(),
          cq = (0, TE.f)(this.userContext, (() => {
            const {
              roomName: Yq,
              joinOptions: lq
            } = (0, Pq.c)(this.userContext, this.gameNameWithVariation, this.lobbyName, Eq, (qq => bE.c.isUsingCustomGameTexturePack(qq)));
            return lq.joinAdHold = mq, lq.renderBackend = (0, GE.d)(qq.Ma), (0, fE.f)((() => this.colyClient.joinOrCreate(Yq, lq)), gq)
          }));
        return jq.i.TV("loadingScreenState", "loadingPage:joiningLobby"), await cq.then((Eq => {
          if (this.joinedAt = performance.now(), this.wB = qq, mq) {
            const qq = (0, pE.m)((() => {
              Eq.send(lq.d), (0, hE.m)()
            }));
            Eq.Sy(qq), (0, Yq.onGameResetOnce)(qq)
          }
          const gq = new dq(Eq);
          this.connectionResume = new yE((qq => this.colyClient.reconnect(qq)), (Eq => {
            qq.uL(Eq)
          }), gq, {
            isLive: () => (0, Aq.b)().client.getMsgHandler() === gq,
            onDropped: (qq, Eq) => {
              (0, rE.g)(qq) || this.logUnrecognisedConnectionLoss(qq, void 0, {
                site: "drop",
                closeReason: null !== Eq && void 0 !== Eq ? Eq : "",
                sinceJoined: this.sinceJoined()
              })
            },
            onRoomLeft: (qq, Eq) => {
              this.onRoomLeft(qq, Eq)
            },
            onReconnected: qq => {
              this.incomingMsgInitialisor.zcq(qq), this.checkSendPath = (0, ZE.g)(gq, qq, Vq.n)
            },
            onGaveUp: (qq, Eq) => {
              this.onResumeGaveUp(qq, Eq)
            }
          }), this.connectionResume.attachRoom(Eq), (0, Yq.onGameResetOnce)((() => {
            this.connectionResume.dispose()
          }));
          const Oq = gq.send,
            xq = gq.vy,
            cq = gq.Xgq.send,
            uq = gq.Xgq.vy,
            Bq = gq.Mcq;
          this.checkSendPath = (0, ZE.g)(gq, Eq, Vq.n);
          const Wq = setInterval((() => {
            Oq === gq.send && xq === gq.vy && cq === gq.Xgq.send && uq === gq.Xgq.vy && Bq === gq.Mcq || RE(), this.checkSendPath()
          }), 1e4);
          return (0, Yq.onGameResetOnce)((() => {
            clearInterval(Wq)
          })), {
            success: !0,
            successDetails: gq
          }
        })).catch((Eq => {
          if (gq.aborted && Eq === (0, zE.e)(gq)) return {
            success: !1,
            failDetails: {
              reason: "Left the game while it loaded",
              requiresRefresh: !1,
              canReconnect: !1
            }
          };
          if (Eq instanceof SE.f) return console.warn("Seat request timed out", this.lobbyName, this.gameNameWithVariation), {
            success: !1,
            failDetails: {
              reason: Eq.message,
              requiresRefresh: !1,
              canReconnect: !1,
              gameServerUnreachable: "timedOut"
            }
          };
          qq.YV(`Failed to connect to bloxd room, check your internet connection. lobbyName: ${this.lobbyName}, gameNameWithVariation: ${this.gameNameWithVariation} code: ${Eq.code}\n`, Eq);
          const Yq = Eq.code;
          return Yq === Oq.b.serverUpdating.code ? (this.goToUpdateWaiting(), {
            success: !1,
            failDetails: {
              reason: Oq.b.serverUpdating.text,
              requiresRefresh: !1,
              canReconnect: !0,
              goesToUpdateWaiting: !0
            }
          }) : {
            success: !1,
            failDetails: {
              ...this.onConnectionToServerLost(Yq, Eq.message, {
                site: "join",
                sinceJoinStart: (0, rE.b)(performance.now() - xq),
                ...LE(Eq)
              }, JE(Eq)),
              rematch: (0, fE.b)(Eq),
              gameRefused: (0, ME.b)(Eq)
            }
          }
        }))
      }
      setupServerListeners(qq, Eq, gq) {
        jq.i.TV("loadingScreenState", "loadingPage:loadingPlayerInfo"), this.incomingMsgInitialisor = new jE(this.gameNameWithVariation, Eq.Xgq, qq, this.connectionResume), this.incomingMsgInitialisor.setupStateReplicationHandlers();
        const lq = Eq.Lcq();
        this.incomingMsgInitialisor.setupOnMessageListeners(lq, gq), (0, Yq.onConnectionToServerReady)(lq, Eq), lq.finishRegistration()
      }
      dispose() {
        this.connectionResume.dispose()
      }
      onResumeGaveUp(qq, Eq) {
        (0, iE.lV)(new Error("Reconnect failed"), {
          ...(0, tE.k)(Eq),
          game: this.gameNameWithVariation
        }), (0, QE.d)("disconnect", "Reconnect failed", Eq.reason), (0, Aq.b)().client.leaveGameUnwanted({
          reason: {
            translationKey: "general:lostConnection"
          },
          canReconnect: !qq,
          canPlayAgain: qq,
          requiresRefresh: !1,
          automaticallyReconnect: !1
        }), (0, gE.navigatePreserveSearch)("/")
      }
      sinceJoined() {
        return null === this.joinedAt ? "" : (0, rE.b)(performance.now() - this.joinedAt)
      }
      onRoomLeft(qq, Eq) {
        var gq;
        if (qq === Oq.b.gameOrPluginKick.code) return;
        if (console.log(`Left room with code ${qq}`), qq === Oq.b.serverUpdating.code) return (0, QE.d)("disconnect", "Left room", "serverUpdating"), (0, Aq.b)().client.leaveGame(this.getUpdateWaitingUrl()), void this.goToUpdateWaiting();
        this.wB.YV(`Kicked from server with code ${qq}`, new Error);
        const Yq = Object.keys(Oq.b).find((Eq => Oq.b[Eq].code === qq));
        (0, QE.d)("disconnect", "Left room", null !== Yq && void 0 !== Yq ? Yq : String(qq));
        const lq = this.onConnectionToServerLost(qq, void 0, {
          site: "leave",
          closeReason: null !== Eq && void 0 !== Eq ? Eq : "",
          sinceJoined: this.sinceJoined()
        });
        (0, Aq.b)().client.leaveGameUnwanted({
          reason: `You have disconnected from the server.\n${lq.reason}`,
          canReconnect: lq.canReconnect,
          requiresRefresh: lq.requiresRefresh,
          automaticallyReconnect: null !== (gq = lq.automaticallyReconnect) && void 0 !== gq && gq
        }), (0, gE.navigatePreserveSearch)("/")
      }
      getUpdateWaitingUrl() {
        return (0, nE.A)(this.gameNameWithVariation, this.lobbyName)
      }
      goToUpdateWaiting() {
        (0, gE.navigatePreserveSearch)(this.getUpdateWaitingUrl())
      }
      onConnectionToServerLost(qq, Eq, gq) {
        var Yq;
        let lq = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        if (null !== (Yq = Eq) && void 0 !== Yq && Yq.endsWith(Oq.h) && (this.userContext.invalidateTrafficCode(), Eq = Eq.replace(Oq.h, "")), qq === Oq.b.outdatedVersion.code) return console.error("Outdated client with version ", mq.e, ", refreshing page"), (0, oq.reloadBloxd)(), {
          reason: "Outdated client",
          requiresRefresh: !0,
          canReconnect: !1
        };
        if (qq === Oq.b.loadRecaptchaError.code) return console.error("Load recaptcha error, refreshing page"), (0, oq.reloadBloxd)(), {
          reason: "Failed to load recaptcha",
          requiresRefresh: !0,
          canReconnect: !1
        };
        for (const mq in Oq.b) {
          const {
            code: gq,
            text: Yq,
            canReconnect: lq
          } = Oq.b[mq];
          if (gq === qq) {
            console.log("matched known error", qq, "leaving game");
            return {
              reason: "" !== Yq ? Yq : Eq || `Code: ${qq}`,
              requiresRefresh: !1,
              canReconnect: lq,
              automaticallyReconnect: gq === Oq.b.customGameUpdated.code || gq === Oq.b.duplicateLobbyNameError.code
            }
          }
        }
        return console.log("Didn't match known error, leaving game"), (0, rE.c)(qq) || lq ? console.warn("Connection lost", qq, Eq) : this.logUnrecognisedConnectionLoss(qq, Eq, gq), {
          reason: `Either your internet isn't working or this is a bug.\nCode: ${qq}`,
          requiresRefresh: !1,
          canReconnect: !1,
          gameServerUnreachable: lq ? "failed" : void 0
        }
      }
      logUnrecognisedConnectionLoss(qq, Eq, gq) {
        (0, iE.lV)(new Error("Unrecognised connection loss"), {
          code: String(qq),
          cause: null !== Eq && void 0 !== Eq ? Eq : "",
          ...gq,
          game: this.gameNameWithVariation,
          ...(0, rE.h)()
        })
      }
    }
  },
  38959: (qq, Eq, gq) => {
    gq.d(Eq, {
      b: () => Xg,
      f: () => Dg
    });
    var Yq, lq, Oq, mq, xq, Aq, cq, uq, Bq, Wq, Nq, aq, Vq, dq, jq, Hq, oq, Pq, Qq, yq, tq, rq, vq, hq, nq, bq, iq, Zq, fq, Mq, Tq, zq, Sq, pq, Gq, Lq, Jq, kq, Rq, Uq, Fq, sq, Xq, wq, Kq, Cq, Iq, eq, Dq, qE, EE, gE, YE, lE, OE, mE, xE, AE, cE, uE, BE, WE, NE, aE, VE, dE, jE, HE, oE, PE, QE, yE, tE, rE, vE, hE, nE, bE, iE, ZE, fE, ME, TE, zE, SE, pE, GE, LE, JE, kE, RE, UE, FE, sE, XE, wE, KE, CE, IE, eE = gq(31),
      DE = gq(37192),
      qg = gq(38968),
      Eg = gq(38974),
      gg = gq(9055),
      Yg = gq(590),
      lg = gq(583),
      Og = gq(36832);
    let mg = (Yq = (0, gg.type)("number"), lq = (0, gg.type)("number"), Oq = (0, gg.type)("number"), mq = (0, gg.type)("number"), xq = (0, gg.type)("number"), Aq = (0, gg.type)("number"), cq = (0, gg.type)("string"), uq = class extends gg.Schema {
        constructor() {
          super(...arguments), (0, qg.d)(this, "id", Bq, this), (0, qg.d)(this, "amount", Wq, this), (0, qg.d)(this, "x", Nq, this), (0, qg.d)(this, "y", aq, this), (0, qg.d)(this, "z", Vq, this), (0, qg.d)(this, "size", dq, this), (0, qg.d)(this, "attributes", jq, this)
        }
      }, Bq = (0, Eg.c)(uq.prototype, "id", [Yq], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return 0
        }
      }), Wq = (0, Eg.c)(uq.prototype, "amount", [lq], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return 0
        }
      }), Nq = (0, Eg.c)(uq.prototype, "x", [Oq], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return 0
        }
      }), aq = (0, Eg.c)(uq.prototype, "y", [mq], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return 0
        }
      }), Vq = (0, Eg.c)(uq.prototype, "z", [xq], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return 0
        }
      }), dq = (0, Eg.c)(uq.prototype, "size", [Aq], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return 1
        }
      }), jq = (0, Eg.c)(uq.prototype, "attributes", [cq], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return "{}"
        }
      }), uq),
      xg = (Hq = (0, gg.type)("string"), oq = (0, gg.type)("string"), Pq = class extends gg.Schema {
        constructor() {
          super(...arguments), (0, qg.d)(this, "itemName", Qq, this), (0, qg.d)(this, "enchantmentTier", yq, this)
        }
      }, Qq = (0, Eg.c)(Pq.prototype, "itemName", [Hq], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: null
      }), yq = (0, Eg.c)(Pq.prototype, "enchantmentTier", [oq], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: null
      }), Pq),
      Ag = (tq = (0, gg.type)("string"), rq = (0, gg.type)("string"), vq = (0, gg.type)("number"), hq = (0, gg.type)("number"), nq = (0, gg.type)("number"), bq = (0, gg.type)("float32"), iq = (0, gg.type)("float32"), Zq = (0, gg.type)("float32"), fq = (0, gg.type)("string"), Mq = (0, gg.type)(["number"]), Tq = (0, gg.type)("boolean"), zq = class extends gg.Schema {
        constructor() {
          super(...arguments), (0, qg.d)(this, "type", Sq, this), (0, qg.d)(this, "name", pq, this), (0, qg.d)(this, "x", Gq, this), (0, qg.d)(this, "y", Lq, this), (0, qg.d)(this, "z", Jq, this), (0, qg.d)(this, "xRotation", kq, this), (0, qg.d)(this, "yRotation", Rq, this), (0, qg.d)(this, "zRotation", Uq, this), (0, qg.d)(this, "followingEId", Fq, this), (0, qg.d)(this, "followingOffset", sq, this), (0, qg.d)(this, "shouldMatchFollowingEntityRotation", Xq, this)
        }
      }, Sq = (0, Eg.c)(zq.prototype, "type", [tq], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: null
      }), pq = (0, Eg.c)(zq.prototype, "name", [rq], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return ""
        }
      }), Gq = (0, Eg.c)(zq.prototype, "x", [vq], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return 0
        }
      }), Lq = (0, Eg.c)(zq.prototype, "y", [hq], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return 0
        }
      }), Jq = (0, Eg.c)(zq.prototype, "z", [nq], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return 0
        }
      }), kq = (0, Eg.c)(zq.prototype, "xRotation", [bq], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return 0
        }
      }), Rq = (0, Eg.c)(zq.prototype, "yRotation", [iq], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return 0
        }
      }), Uq = (0, Eg.c)(zq.prototype, "zRotation", [Zq], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return 0
        }
      }), Fq = (0, Eg.c)(zq.prototype, "followingEId", [fq], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: null
      }), sq = (0, Eg.c)(zq.prototype, "followingOffset", [Mq], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return new gg.ArraySchema(0, 0, 0)
        }
      }), Xq = (0, Eg.c)(zq.prototype, "shouldMatchFollowingEntityRotation", [Tq], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return !0
        }
      }), zq),
      cg = (wq = (0, gg.type)("float32"), Kq = (0, gg.type)("float32"), Cq = (0, gg.type)("boolean"), Iq = (0, gg.type)("boolean"), eq = (0, gg.type)("float32"), Dq = (0, gg.type)("boolean"), qE = (0, gg.type)("string"), EE = (0, gg.type)("string"), gE = (0, gg.type)("string"), YE = (0, gg.type)("string"), lE = (0, gg.type)(["number"]), OE = (0, gg.type)("number"), mE = (0, gg.type)({
        map: xg
      }), xE = class extends Ag {
        constructor() {
          super(...arguments), (0, qg.d)(this, "scale", AE, this), (0, qg.d)(this, "speed", cE, this), (0, qg.d)(this, "jumping", uE, this), (0, qg.d)(this, "crouching", BE, this), (0, qg.d)(this, "cameraPitch", WE, this), (0, qg.d)(this, "armSwinging", NE, this), (0, qg.d)(this, "heldItemName", aE, this), (0, qg.d)(this, "heldItemEnchantmentTier", VE, this), (0, qg.d)(this, "pose", dE, this), (0, qg.d)(this, "ridingVehicleEId", jE, this), (0, qg.d)(this, "meshOffset", HE, this), (0, qg.d)(this, "baseRenderHeading", oE, this), (0, qg.d)(this, "armour", PE, this)
        }
      }, AE = (0, Eg.c)(xE.prototype, "scale", [wq], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return 1
        }
      }), cE = (0, Eg.c)(xE.prototype, "speed", [Kq], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return 0
        }
      }), uE = (0, Eg.c)(xE.prototype, "jumping", [Cq], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return !1
        }
      }), BE = (0, Eg.c)(xE.prototype, "crouching", [Iq], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return !1
        }
      }), WE = (0, Eg.c)(xE.prototype, "cameraPitch", [eq], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return 0
        }
      }), NE = (0, Eg.c)(xE.prototype, "armSwinging", [Dq], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return !1
        }
      }), aE = (0, Eg.c)(xE.prototype, "heldItemName", [qE], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: null
      }), VE = (0, Eg.c)(xE.prototype, "heldItemEnchantmentTier", [EE], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: null
      }), dE = (0, Eg.c)(xE.prototype, "pose", [gE], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return "standing"
        }
      }), jE = (0, Eg.c)(xE.prototype, "ridingVehicleEId", [YE], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return null
        }
      }), HE = (0, Eg.c)(xE.prototype, "meshOffset", [lE], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return new gg.ArraySchema(0, 0, 0)
        }
      }), oE = (0, Eg.c)(xE.prototype, "baseRenderHeading", [OE], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return 0
        }
      }), PE = (0, Eg.c)(xE.prototype, "armour", [mE], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return new gg.MapSchema
        }
      }), xE),
      ug = (QE = (0, gg.type)("string"), yE = (0, gg.type)("string"), tE = (0, gg.type)("string"), rE = (0, gg.type)("uint8"), vE = class extends cg {
        constructor() {
          super(...arguments), (0, qg.d)(this, "variation", hE, this), (0, qg.d)(this, "ownerDbId", nE, this), (0, qg.d)(this, "metaInfo", bE, this), (0, qg.d)(this, "aiState", iE, this)
        }
      }, hE = (0, Eg.c)(vE.prototype, "variation", [QE], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return "default"
        }
      }), nE = (0, Eg.c)(vE.prototype, "ownerDbId", [yE], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return null
        }
      }), bE = (0, Eg.c)(vE.prototype, "metaInfo", [tE], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return ""
        }
      }), iE = (0, Eg.c)(vE.prototype, "aiState", [rE], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return 0
        }
      }), vE);
    ZE = (0, gg.type)("string"), fE = (0, gg.type)("string"), ME = (0, gg.type)("string"), TE = (0, gg.type)("string"), zE = class extends Ag {
      constructor() {
        super(...arguments), (0, qg.d)(this, "meshKind", SE, this), (0, qg.d)(this, "meshOpts", pE, this), (0, qg.d)(this, "pose", GE, this), (0, qg.d)(this, "leaderboardTop", LE, this)
      }
    }, SE = (0, Eg.c)(zE.prototype, "meshKind", [ZE], {
      configurable: !0,
      enumerable: !0,
      writable: !0,
      initializer: null
    }), pE = (0, Eg.c)(zE.prototype, "meshOpts", [fE], {
      configurable: !0,
      enumerable: !0,
      writable: !0,
      initializer: null
    }), GE = (0, Eg.c)(zE.prototype, "pose", [ME], {
      configurable: !0,
      enumerable: !0,
      writable: !0,
      initializer: null
    }), LE = (0, Eg.c)(zE.prototype, "leaderboardTop", [TE], {
      configurable: !0,
      enumerable: !0,
      writable: !0,
      initializer: null
    });

    function Bg(qq) {
      return Object.keys(gg.Metadata.getFields(qq))
    }
    const Wg = Bg(ug);
    for (const qY of Yg.n)
      if (!Wg.includes(qY)) throw new Error(`Mob Schema is missing a networked property: "${qY}"`);
    const Ng = Bg((JE = (0, gg.type)("string"), kE = (0, gg.type)("float32"), RE = (0, gg.type)("float32"), UE = (0, gg.type)("float32"), FE = (0, gg.type)("float32"), sE = class extends Ag {
      constructor() {
        super(...arguments), (0, qg.d)(this, "soundName", XE, this), (0, qg.d)(this, "volume", wE, this), (0, qg.d)(this, "refDistance", KE, this), (0, qg.d)(this, "maxHearDist", CE, this), (0, qg.d)(this, "rate", IE, this)
      }
    }, XE = (0, Eg.c)(sE.prototype, "soundName", [JE], {
      configurable: !0,
      enumerable: !0,
      writable: !0,
      initializer: function() {
        return ""
      }
    }), wE = (0, Eg.c)(sE.prototype, "volume", [kE], {
      configurable: !0,
      enumerable: !0,
      writable: !0,
      initializer: function() {
        return 1
      }
    }), KE = (0, Eg.c)(sE.prototype, "refDistance", [RE], {
      configurable: !0,
      enumerable: !0,
      writable: !0,
      initializer: function() {
        return Og.f
      }
    }), CE = (0, Eg.c)(sE.prototype, "maxHearDist", [UE], {
      configurable: !0,
      enumerable: !0,
      writable: !0,
      initializer: function() {
        return Og.b
      }
    }), IE = (0, Eg.c)(sE.prototype, "rate", [FE], {
      configurable: !0,
      enumerable: !0,
      writable: !0,
      initializer: function() {
        return 1
      }
    }), sE));
    for (const qY of lg.i)
      if (!Ng.includes(qY)) throw new Error(`AudioEntity Schema is missing a replicated property: "${qY}"`);
    var ag = gq(38425),
      Vg = gq(1226),
      dg = gq(598),
      jg = gq(38195),
      Hg = gq(4096),
      og = gq(307),
      Pg = gq(37286),
      Qg = gq(38074),
      yg = gq(2182),
      tg = gq(37264),
      rg = gq(38452),
      vg = gq(37399),
      hg = gq(317),
      ng = gq.n(hg),
      bg = gq(37907),
      ig = gq(37122),
      Zg = gq(38054),
      fg = gq(38093);
    class Mg {
      constructor(qq, Eq) {
        this.bloxd = qq, this.eId = Eq, this.wB = void 0, this.colyseusEntity = void 0, this.canSeeSub = void 0, this.canAttackSub = void 0, this.interactableSub = void 0, this.overlayColourSub = void 0, this.opacitySub = void 0, this.zIndexSub = void 0, this.multilineTextBoxSub = void 0, this.previousHidingMeshManagerState = void 0, this.meshKind = void 0, this.meshOpts = void 0, this.leaderboardTop = void 0, this.meshRebuildQueued = !1, this.eN = !1, this.wB = qq.wB
      }
      initClient(qq) {
        var Eq, gq, Yq;
        this.colyseusEntity = qq, this.meshKind = qq.meshKind, this.meshOpts = qq.meshOpts, this.leaderboardTop = qq.leaderboardTop, this.wB.Iy.add([qq.x, qq.y, qq.z], 1, 1, null, null, !1, !1, this.eId), this.wB.Iy.zk(this.eId, "smoothToServerPos");
        const lq = "Person" === this.meshKind;
        this.wB.Iy.zk(this.eId, "meshRotation", {
          isServerControlled: !0,
          ...lq ? {
            defaultRotationsPerSecond: .5
          } : {},
          childrenNodeParams: lq ? [{
            nodeName: "HeadMesh",
            softTolerance: rg.n,
            hardTolerance: null
          }] : []
        }), this.updateHidingMeshMgr(), this.canSeeSub = eE.i.subscribe(`otherEntitySettings|${this.eId}|canSee`, (qq => {
          this.updateHidingMeshMgr()
        }));
        const Oq = () => {
          const qq = this.wB.Iy.SEq(this.eId);
          if (!qq) return;
          const Eq = (0, vg.f)(this.eId);
          if ("number" === typeof qq.KJ) {
            var gq, Yq, lq, Oq;
            const mq = null === (gq = (0, yg.l)("head", null === (lq = this.getSpec()) || void 0 === lq || null === (Oq = lq.opts.textures) || void 0 === Oq ? void 0 : Oq.head)) || void 0 === gq || null === (Yq = gq.personModel) || void 0 === Yq ? void 0 : Yq.fullBody;
            return this.wB.Ma.LJ.setPickable(qq.KJ, Eq && !mq), void(0, ig.updatePersonAttachmentPickability)(this.wB, this.eId, Eq)
          }
          const mq = qq.mesh;
          if (mq)
            for (const xq of [mq, ...mq.getChildMeshes(!1)]) "yV" in xq && !xq.name.startsWith("Cape|") && (xq.yV = Eq)
        };
        this.canAttackSub = eE.i.subscribe(`otherEntitySettings|${this.eId}|canAttack`, Oq), this.interactableSub = eE.i.subscribe(`otherEntitySettings|${this.eId}|interactable`, Oq), this.overlayColourSub = eE.i.subscribe(`otherEntitySettingsClientifiedEId|${this.eId}|overlayColour`, (qq => {
          this.updateOverlayColour(qq)
        })), this.opacitySub = eE.i.subscribe(`otherEntitySettingsClientifiedEId|${this.eId}|opacity`, (qq => {
          this.updateOpacity(qq)
        })), this.zIndexSub = eE.i.subscribe(`otherEntitySettingsClientifiedEId|${this.eId}|zIndex`, (qq => {
          this.updateZIndex(qq)
        }));
        const mq = this.wB.jR[this.wB.oR][this.eId];
        this.updateOverlayColour(null !== (Eq = null === mq || void 0 === mq ? void 0 : mq.overlayColour) && void 0 !== Eq ? Eq : null), this.updateOpacity(null !== (gq = null === mq || void 0 === mq ? void 0 : mq.opacity) && void 0 !== gq ? gq : 1), this.updateZIndex(null !== (Yq = null === mq || void 0 === mq ? void 0 : mq.zIndex) && void 0 !== Yq ? Yq : 0), this.multilineTextBoxSub = (0, tg.r)(this.wB, this.eId)
      }
      onChangeClient(qq, Eq) {
        if ("xRotation" === qq || "yRotation" === qq || "zRotation" === qq)(0, tg.s)(this.wB, this.eId, qq, Eq);
        else if ("pose" === qq) {
          const qq = this.wB.Iy.REq(this.eId);
          qq && (qq.pose = Eq || "standing")
        } else "meshKind" === qq || "meshOpts" === qq ? (this[qq] = Eq, this.queueMeshRebuild()) : "name" === qq && "" !== Eq ? this.updateHidingMeshMgr() : "leaderboardTop" === qq && (this.leaderboardTop = Eq, eE.i.TV(`leaderboardTop|${this.eId}`, Eq))
      }
      disposeClient() {
        this.eN = !0, this.wB.Iy.deleteEntity(this.eId), eE.i.unsubscribe(this.canSeeSub), eE.i.unsubscribe(this.canAttackSub), eE.i.unsubscribe(this.interactableSub), eE.i.unsubscribe(this.overlayColourSub), eE.i.unsubscribe(this.opacitySub), eE.i.unsubscribe(this.zIndexSub), eE.i.unsubscribe(this.multilineTextBoxSub)
      }
      getCurrentHidingMeshMgrState() {
        var qq, Eq;
        return {
          canSee: null !== (qq = null === (Eq = this.wB.jR[this.wB.oR][this.eId]) || void 0 === Eq ? void 0 : Eq.canSee) && void 0 !== qq && qq,
          name: this.colyseusEntity.name,
          meshKind: this.meshKind,
          meshOpts: this.meshOpts
        }
      }
      updateHidingMeshMgr() {
        var qq, Eq, gq;
        const {
          wB: Yq
        } = this, {
          Iy: lq
        } = Yq, Oq = this.getCurrentHidingMeshMgrState();
        if ((0, og.be)(this.previousHidingMeshManagerState, Oq)) return;
        if (this.previousHidingMeshManagerState = Oq, lq.Lk(this.eId, "hidingMeshManager"), null === (qq = Yq.jR[Yq.oR][this.eId]) || void 0 === qq || !qq.canSee) return;
        const mq = this.getSpec();
        if (!mq) return;
        const {
          type: xq,
          opts: Aq
        } = mq;
        "Person" === xq && (Aq.textures = (0, yg.q)(Aq.textures)), Aq.eId = this.eId, lq.zk(this.eId, "hidingMeshManager", {
          addMeshComponent: () => {
            var qq, Eq, gq;
            "Leaderboard" === xq && (Aq.leaderboardTop = this.leaderboardTop);
            const Oq = this.bloxd.client.meshCreator.getEntityMesh(xq, Aq, (qq => {
              var Eq, gq;
              if ("number" === typeof qq) {
                var lq, Oq, mq;
                const Eq = Yq.Ma.LJ;
                Eq.setEntityId(qq, this.eId);
                const gq = "Person" === xq && (null === (lq = (0, yg.l)("head", null === (mq = Aq.textures) || void 0 === mq ? void 0 : mq.head)) || void 0 === lq || null === (Oq = lq.personModel) || void 0 === Oq ? void 0 : Oq.fullBody);
                return void Eq.setPickable(qq, (0, vg.f)(this.eId) && !gq)
              }
              const cq = qq;
              for (const xq of [cq, ...cq.getChildMeshes(!1)]) void 0 === xq.yV || xq.name.startsWith("Cape|") || (xq.yV = (0, vg.f)(this.eId), xq.metadata ??= new Yq.Ma.tV, xq.metadata.eId = this.eId);
              this.updateOpacity(null !== (Eq = null === (gq = Yq.jR[Yq.oR][this.eId]) || void 0 === gq ? void 0 : gq.opacity) && void 0 !== Eq ? Eq : 1)
            }));
            if (!Oq) return;
            const {
              KJ: mq,
              mesh: cq,
              meshOffset: uq,
              nameYOffset: Bq,
              modelLoaded: Wq
            } = Oq;
            null === Wq || void 0 === Wq || Wq.then((() => {
              var qq;
              (null === (qq = lq.SEq(this.eId)) || void 0 === qq ? void 0 : qq.mesh) === cq && (this.previousHidingMeshManagerState = null, this.updateHidingMeshMgr())
            }));
            const Nq = null === mq ? null : Yq.Ma.LJ.hYq(mq, 0);
            if (lq.zk(this.eId, lq.names.mesh, {
                KJ: mq,
                egq: Nq,
                mesh: cq,
                Bxq: !1,
                qYq: "Leaderboard" !== xq,
                offset: uq.slice(),
                uxq: "ParticleEmitter" === xq && Aq.followTargetMeshOffset ? qq => {
                  var Eq;
                  ng().copy(qq, uq);
                  const gq = null === (Eq = lq.hgq(this.eId)) || void 0 === Eq ? void 0 : Eq.FN,
                    Yq = void 0 === gq ? null : lq.REq(gq);
                  if (Yq) {
                    var Oq, mq;
                    const Eq = this.bloxd.getEntityHeading(null !== (Oq = Yq.ridingVehicleEId) && void 0 !== Oq ? Oq : gq, !0),
                      lq = Math.sin(Eq),
                      xq = Math.cos(Eq);
                    qq[0] += Yq.meshOffset[0] * xq + Yq.meshOffset[2] * lq, qq[1] += Yq.meshOffset[1], qq[2] += Yq.meshOffset[2] * xq - Yq.meshOffset[0] * lq;
                    const Aq = null !== (mq = Yq.ridingVehicleEId) && void 0 !== mq ? mq : null;
                    null !== Aq && (0, fg.c)(this.wB, Aq, qq)
                  }
                } : null
              }), "Person" === xq) {
              var aq, Vq, dq, jq;
              lq.zk(this.eId, lq.names.meshAttachments, {
                personFullBody: null !== (aq = null === (Vq = (0, yg.l)("head", null === (jq = Aq.textures) || void 0 === jq ? void 0 : jq.head)) || void 0 === Vq || null === (dq = Vq.personModel) || void 0 === dq ? void 0 : dq.fullBody) && void 0 !== aq && aq
              });
              for (const qq of Vg.w) {
                var Hq, oq, Pq;
                const Eq = null === (Hq = Aq.textures) || void 0 === Hq ? void 0 : Hq[qq];
                Eq && null !== (oq = (0, yg.l)(qq, Eq)) && void 0 !== oq && null !== (Pq = oq.attachments) && void 0 !== Pq && Pq.length && Qg.d.Player.meshApi.updatePlayerCosmetic(this.eId, mq, qq, Eq)
              }
              lq.zk(this.eId, lq.names.moveState), lq.zk(this.eId, "updateWalkingState", {
                KJ: mq,
                egq: Nq,
                walkingLegSwingDuration: rg.r
              }), lq.zk(this.eId, "humanoidMesh", {
                KJ: mq,
                egq: Nq,
                heldItemPositionParams: {},
                maxWalkingAngleOverride: null
              }), lq.zk(this.eId, "animator", {
                KJ: mq,
                egq: Nq,
                modelLifeformType: "Player"
              }), Zg.f.hasAnimation("Person") && lq.zk(this.eId, "rigAnimation", {
                target: "Person",
                KJ: mq
              }), lq.REq(this.eId).pose = this.colyseusEntity.pose || "standing"
            } else if ("BloxdBlock" === xq && null !== mq) {
              lq.zk(this.eId, "animator", {
                KJ: mq,
                egq: Nq,
                modelLifeformType: null
              });
              const qq = (0, jg.t)(Aq.blockName);
              null !== qq && lq.zk(this.eId, "rigAnimation", {
                target: qq,
                KJ: mq
              })
            }
            lq.Mxq(this.eId, "entityName", {
              name: this.colyseusEntity.name,
              nameYOffset: Bq
            }), this.bloxd.setEntityName(this.eId, this.colyseusEntity.name), !0 === Aq.autoRotate && (lq.Lk(this.eId, "meshRotation"), lq.zk(this.eId, "autoRotate"));
            const {
              lineToEId: Qq
            } = Aq;
            (0, dg.H)(Qq) || lq.zk(this.eId, "lineToEntity", {
              lineToEId: Qq
            });
            const yq = Yq.jR[Yq.oR][this.eId];
            this.updateOverlayColour(null !== (qq = null === yq || void 0 === yq ? void 0 : yq.overlayColour) && void 0 !== qq ? qq : null), this.updateOpacity(null !== (Eq = null === yq || void 0 === yq ? void 0 : yq.opacity) && void 0 !== Eq ? Eq : 1), this.updateZIndex(null !== (gq = null === yq || void 0 === yq ? void 0 : yq.zIndex) && void 0 !== gq ? gq : 0)
          },
          removeMeshComponent: () => {
            "Person" !== xq && "BloxdBlock" !== xq || lq.Lk(this.eId, "rigAnimation"), lq.Lk(this.eId, lq.names.mesh), lq.mEq(this.eId, lq.names.meshAttachments) && lq.Lk(this.eId, lq.names.meshAttachments), lq.Lk(this.eId, "entityName"), lq.Lk(this.eId, "autoRotate"), lq.Lk(this.eId, "lineToEntity"), "Person" === xq ? (lq.Lk(this.eId, lq.names.moveState), lq.Lk(this.eId, "updateWalkingState"), lq.Lk(this.eId, "humanoidMesh"), lq.Lk(this.eId, "animator")) : "BloxdBlock" === xq && lq.Lk(this.eId, "animator")
          },
          hideDist: null !== (Eq = Aq.hideDist) && void 0 !== Eq ? Eq : 80,
          movingHideDist: null !== (gq = Aq.hideDist) && void 0 !== gq ? gq : 120,
          displayOutsideLoadedChunk: Aq.hideDist > 100,
          immediatelyUpdate: !0,
          IA: "BloxdBlock" === xq ? Aq.blockName : xq
        })
      }
      queueMeshRebuild() {
        this.meshRebuildQueued || (this.meshRebuildQueued = !0, queueMicrotask((() => {
          this.meshRebuildQueued = !1, this.eN || this.updateHidingMeshMgr()
        })))
      }
      getSpec() {
        return (0, Hg.i)({
          meshKind: this.meshKind,
          meshOpts: this.meshOpts
        })
      }
      updateOverlayColour(qq) {
        var Eq, gq;
        if ("Person" !== this.meshKind) return;
        let Yq = new Pg.e(0, 0, 0, 0);
        if (null !== qq) {
          const Eq = (0, og.bb)(qq);
          Yq = new Pg.e(Eq[0] / 255, Eq[1] / 255, Eq[2] / 255, .5)
        }
        const lq = null !== (Eq = null === (gq = this.wB.Iy.SEq(this.eId)) || void 0 === gq ? void 0 : gq.KJ) && void 0 !== Eq ? Eq : null;
        null !== lq && Qg.d.Player.meshApi.updateMeshOverlayColour(lq, Yq)
      }
      updateZIndex(qq) {
        var Eq;
        if ("Person" !== this.meshKind) return;
        const gq = null === (Eq = this.wB.Iy.SEq(this.eId)) || void 0 === Eq ? void 0 : Eq.KJ;
        "number" === typeof gq && this.wB.Ma.LJ.setRenderingGroupId(gq, qq)
      }
      updateOpacity(qq) {
        const Eq = this.wB.Iy.SEq(this.eId);
        Eq && ("number" !== typeof Eq.KJ ? Eq.mesh && "ParticleEmitter" !== this.meshKind && (0, bg.h)(Eq.mesh, qq) : Qg.d.Player.meshApi.updateMeshOpacity(Eq.KJ, qq))
      }
    }
    var Tg = gq(38966);
    class zg {
      constructor(qq, Eq) {
        this.eId = Eq, this.wB = void 0, this.schema = void 0, this.wB = qq.wB
      }
      initClient(qq) {
        this.schema = qq, this.wB.Iy.add([qq.x, qq.y, qq.z], .1, .1, null, null, !1, !1, this.eId), this.wB.Iy.zk(this.eId, "smoothToServerPos"), Tg.d.add(this.eId, this.copyOpts())
      }
      onChangeClient(qq) {
        lg.i.includes(qq) && Tg.d.update(this.eId, this.copyOpts())
      }
      disposeClient() {
        Tg.d.remove(this.eId), this.wB.Iy.deleteEntity(this.eId)
      }
      copyOpts() {
        const {
          soundName: qq,
          volume: Eq,
          refDistance: gq,
          maxHearDist: Yq,
          rate: lq
        } = this.schema;
        return {
          soundName: qq,
          volume: Eq,
          refDistance: gq,
          maxHearDist: Yq,
          rate: lq
        }
      }
    }
    var Sg = gq(3545),
      pg = gq(36808),
      Gg = gq(6348),
      Lg = gq(37776),
      Jg = gq(2668),
      kg = gq(38130),
      Rg = gq(9022),
      Ug = gq(38458),
      Fg = gq(37754),
      sg = gq(2853);
    class Xg {
      constructor(qq, Eq) {
        let gq = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 4,
          Yq = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : () => performance.now();
        this.Xgq = qq, this.wB = Eq, this.setupBudgetMs = gq, this.now = Yq, this.createStateCallbacks = void 0, this.roomStateCallbacks = void 0, this.allItems = {}, this.detachers = new Map, this.deferredSetups = new Map, this.queuedSetups = new Map, this.promotedSetups = new Set, this.setupBudgetLeftMs = void 0, this.lastRefillMs = void 0, this.roomState = void 0, this.eN = !1, this.onFrame = () => {
          this.setUpQueuedEntities(!0)
        }, this.Wy = () => {
          this.setUpQueuedEntities(this.now() - this.lastRefillMs > 100)
        }, this.setUpPromoted = () => {
          for (const qq of this.promotedSetups) {
            this.promotedSetups.delete(qq);
            const Eq = this.queuedSetups.get(qq);
            Eq && (this.queuedSetups.delete(qq), this.timedSetup(Eq, qq))
          }
        }, this.createStateCallbacks = (0, Rg.getStateCallbacks)(qq), this.roomStateCallbacks = this.createStateCallbacks(qq.state), this.roomState = qq.state, this.setupBudgetLeftMs = gq, this.lastRefillMs = Yq()
      }
      setup() {
        this.setupEntityHandlers(), this.setupItemHandlers(), this.Xgq.onStateChange(this.setUpPromoted), this.wB.on("beforeInputs", this.onFrame), this.wB.on("SB", this.Wy)
      }
      setUpQueuedEntities(qq) {
        var Eq;
        if ((null === (Eq = (0, Jg.b)().client.getMsgHandler()) || void 0 === Eq ? void 0 : Eq.Xgq) !== this.Xgq) return this.wB.off("beforeInputs", this.onFrame), this.wB.off("SB", this.Wy), this.queuedSetups.clear(), void this.promotedSetups.clear();
        if (qq && (this.setupBudgetLeftMs = this.setupBudgetMs, this.lastRefillMs = this.now()), this.setUpPromoted(), 0 !== this.queuedSetups.size)
          for (ng().copy(wg, this.wB.Iy.Py(this.wB.oR)); this.setupBudgetLeftMs > 0;) {
            const qq = this.nearestQueued(wg);
            if (null === qq) return;
            this.setUpIfQueued(qq), this.setUpPromoted()
          }
      }
      nearestQueued(qq) {
        let Eq = null,
          gq = 1 / 0;
        return this.queuedSetups.forEach(((Yq, lq) => {
          const Oq = function(qq, Eq) {
            return (Eq.x - qq[0]) ** 2 + (Eq.y - qq[1]) ** 2 + (Eq.z - qq[2]) ** 2
          }(qq, Yq);
          (null === Eq || Oq < gq) && (Eq = lq, gq = Oq)
        })), Eq
      }
      setUpOrQueue(qq, Eq) {
        0 === this.queuedSetups.size && this.setupBudgetLeftMs > 0 || this.mustSetUpNow(qq, Eq) ? this.timedSetup(qq, Eq) : this.queuedSetups.set(Eq, qq)
      }
      mustSetUpNow(qq, Eq) {
        const gq = this.wB.AEq;
        if (Eq === gq) return !0;
        const Yq = this.roomState.entities.get(gq);
        return !(!Yq || Yq.ridingVehicleEId !== Eq && Yq.followingEId !== Eq) || (Kg(qq.type) === ag.c || (0, Jg.b)().getFollowingEntities(Eq).length > 0)
      }
      setUpIfQueued(qq) {
        const Eq = this.queuedSetups.get(qq);
        Eq && (this.queuedSetups.delete(qq), this.timedSetup(Eq, qq))
      }
      promoteIfQueued(qq) {
        null !== qq && this.queuedSetups.has(qq) && this.promotedSetups.add(qq)
      }
      timedSetup(qq, Eq) {
        const gq = this.now();
        this.setupEntity(qq, Eq), this.setupBudgetLeftMs -= this.now() - gq
      }
      setupEntityHandlers() {
        this.roomStateCallbacks.entities.Fy(((qq, Eq) => {
          this.wB.AEq ? this.setUpOrQueue(qq, Eq) : this.deferEntitySetupUntilInitInfo(qq, Eq)
        })), this.roomStateCallbacks.entities.OJ(((qq, Eq) => {
          const gq = this.deferredSetups.get(Eq);
          gq && (eE.i.unsubscribe(gq), this.deferredSetups.delete(Eq)), this.queuedSetups.delete(Eq), this.detach(Eq), (0, Jg.b)().client.disposeEntity(Eq)
        }))
      }
      deferEntitySetupUntilInitInfo(qq, Eq) {
        const gq = eE.i.xH("initInfoReceived", (() => {
          this.deferredSetups.delete(Eq), this.setUpOrQueue(qq, Eq)
        }));
        this.deferredSetups.set(Eq, gq), (0, Sg.onGameResetOnce)((() => {
          this.deferredSetups.get(Eq) === gq && (eE.i.unsubscribe(gq), this.deferredSetups.delete(Eq)), (0, Jg.b)().updatePositionAndPhysics(this.wB.oR, {
            type: Gg.t.DEFAULT,
            tier: null
          }, !0), (0, Jg.b)().takeHeldPlayerBodySize(this.wB.oR);
          const qq = this.wB.Iy.yEq(this.wB.oR);
          qq && (qq.movementType = Gg.p.NORMAL)
        }))
      }
      setupEntity(qq, Eq) {
        const gq = Eq === this.wB.AEq;
        if (gq)(0, Jg.b)().client.eC(this.wB.oR, null, null);
        else {
          const {
            type: gq
          } = qq, Yq = Kg(gq);
          if (void 0 === Yq) return void
          function(qq, Eq) {
            const gq = String(qq);
            if (Cg.has(gq)) return;
            Cg.add(gq);
            const Yq = gq.length > 80 ? `${gq.slice(0,80)}...` : gq,
              lq = `No client handler for entity type ${JSON.stringify(Yq)}, so entity ${Eq} is not set up`;
            console.warn(lq), (0, sg.d)("uncaught", lq, "unknown_entity_type")
          }(gq, Eq);
          (0, Jg.b)().client.eC(Eq, qq, new Yq((0, Jg.b)(), Eq, gq))
        }
        const Yq = this.createStateCallbacks(qq);
        if (gq) return this.setupMapSchemaCallbacks(Eq, qq, Yq, "armour"), this.setupScalarField(Eq, qq, Yq, "scale"), this.setupScalarField(Eq, qq, Yq, "ridingVehicleEId"), this.setupScalarField(Eq, qq, Yq, "followingEId"), this.setupScalarField(Eq, qq, Yq, "followingOffset"), void this.setupScalarField(Eq, qq, Yq, "shouldMatchFollowingEntityRotation");
        for (const lq of Bg(qq.constructor)) qq[lq] instanceof gg.MapSchema ? this.setupMapSchemaCallbacks(Eq, qq, Yq, lq) : this.setupScalarField(Eq, qq, Yq, lq)
      }
      setupMapSchemaCallbacks(qq, Eq, gq, Yq) {
        const lq = gq[Yq],
          Oq = new Map;
        lq.Fy(((gq, lq) => {
          if (this.onEntityFieldChange(qq, Eq, Yq, {
              key: lq,
              value: gq
            }), !(gq instanceof gg.Schema)) return;
          const mq = this.createStateCallbacks(gq),
            xq = [];
          for (const Oq of Bg(gq.constructor)) xq.push(this.listenForFutureChanges(mq, Oq, (() => {
            this.onEntityFieldChange(qq, Eq, Yq, {
              key: lq,
              value: gq
            })
          })));
          Oq.set(lq, (() => {
            for (const qq of xq) qq()
          }))
        })), lq.OJ(((gq, lq) => {
          var mq;
          null === (mq = Oq.get(lq)) || void 0 === mq || mq(), Oq.delete(lq), this.onEntityFieldChange(qq, Eq, Yq, {
            key: lq,
            value: null
          })
        })), this.addDetacher(qq, (() => {
          for (const qq of Oq.values()) qq();
          Oq.clear()
        }))
      }
      setupScalarField(qq, Eq, gq, Yq) {
        this.onEntityFieldChange(qq, Eq, Yq, Eq[Yq]);
        const lq = this.listenForFutureChanges(gq, Yq, (gq => {
          this.onEntityFieldChange(qq, Eq, Yq, gq)
        }));
        this.addDetacher(qq, lq)
      }
      addDetacher(qq, Eq) {
        let gq = this.detachers.get(qq);
        gq || (gq = [], this.detachers.set(qq, gq)), gq.push(Eq)
      }
      detach(qq) {
        for (const gq of null !== (Eq = this.detachers.get(qq)) && void 0 !== Eq ? Eq : []) {
          var Eq;
          gq()
        }
        this.detachers.delete(qq)
      }
      listenForFutureChanges(qq, Eq, gq) {
        return qq.listen(Eq, gq, !1)
      }
      onEntityFieldChange(qq, Eq, gq, Yq) {
        switch (gq) {
          case "ridingVehicleEId": {
            this.promoteIfQueued(Yq);
            const Eq = this.wB.Iy.REq((0, pg.b)(qq));
            Eq && (Eq.ridingVehicleEId = Yq);
            break
          }
          case "armour":
            this.handleArmourChange(qq, Yq);
            break;
          case "followingEId":
            this.promoteIfQueued(Yq), this.handleFollowingEIdChange(qq, Eq, Yq);
            break;
          case "xRotation":
          case "yRotation":
          case "zRotation":
            this.handleRotationChange(qq, gq, Yq);
            break;
          case "scale":
            this.handleScaleChange(qq, Yq);
            break;
          case "baseRenderHeading":
            this.handleBaseRenderHeadingChange(qq, Yq);
            break;
          case "followingOffset":
            this.handleFollowingOffsetChange(qq, Yq);
            break;
          case "shouldMatchFollowingEntityRotation":
            this.handleShouldMatchFollowingEntityRotationChange(qq, Yq);
            break;
          case "x":
          case "y":
          case "z":
            return void this.handlePositionChange(qq, gq, Yq)
        }(0, Jg.b)().client.updateEntityField(qq, gq, Yq)
      }
      handleArmourChange(qq, Eq) {
        var gq, Yq;
        const {
          key: lq,
          value: Oq
        } = Eq;
        (0, Qg.y)(qq, lq, null !== (gq = null === Oq || void 0 === Oq ? void 0 : Oq.itemName) && void 0 !== gq ? gq : null, null !== (Yq = null === Oq || void 0 === Oq ? void 0 : Oq.enchantmentTier) && void 0 !== Yq ? Yq : null)
      }
      handleFollowingEIdChange(qq, Eq, gq) {
        const Yq = (0, pg.b)(qq),
          lq = Yq === this.wB.oR;
        if (this.wB.Iy.Lk(Yq, this.wB.Iy.names.HZ), gq) this.wB.Iy.Lk(Yq, "smoothToServerPos"), this.wB.Iy.zk(Yq, this.wB.Iy.names.HZ, {
          FN: (0, pg.b)(gq),
          offset: Array.from(Eq.followingOffset),
          ngq: Eq.shouldMatchFollowingEntityRotation,
          Mgq: !0,
          Tgq: (qq, Yq) => {
            if (ng().copy(qq, Eq.followingOffset), Eq.ridingVehicleEId === gq) {
              const Eq = (0, pg.b)(gq),
                lq = (0, Jg.b)().getEntityHeading(Eq, Yq);
              ng().tm(qq, qq, ng().ZERO, lq)
            }
          }
        });
        else if (!lq) {
          this.wB.Iy.mEq(Yq, "smoothToServerPos") || this.wB.Iy.zk(Yq, "smoothToServerPos");
          const qq = this.wB.Iy.getState(Yq, "smoothToServerPos"),
            Eq = this.wB.Iy.qI(Yq).position;
          (0, Fg.setServerPosition)(qq, Eq[0], Eq[1], Eq[2])
        }
      }
      handleRotationChange(qq, Eq, gq) {
        const Yq = "xRotation" === Eq ? 0 : "yRotation" === Eq ? 1 : 2;
        for (const lq of (0, Jg.b)().getFollowingEntities(qq)) {
          const qq = this.wB.Iy.getState(lq, "meshRotation"),
            Eq = this.wB.Iy.hgq(lq);
          qq && Eq.ngq && (qq.serverSetRotation[Yq] = gq)
        }
      }
      handleScaleChange(qq, Eq) {
        const gq = (0, pg.b)(qq);
        if (eE.i.TV(`entityScale|${gq}`, Eq), gq === this.wB.oR) {
          var Yq;
          (0, Jg.b)().removeFromEyeHeightCache(gq);
          const qq = this.wB.Iy.yEq(this.wB.oR),
            Eq = null !== (Yq = null === qq || void 0 === qq ? void 0 : qq.physicsState) && void 0 !== Yq ? Yq : {
              type: Gg.t.DEFAULT,
              tier: null
            };
          return void(0, Jg.b)().updatePositionAndPhysics(this.wB.oR, Eq, !1)
        }
        const lq = (0, Jg.b)().getLifeformType(gq);
        if (null === lq) return;
        const {
          physicsBodyWidth: Oq,
          physicsBodyHeight: mq
        } = (0, Ug.f)(Eq, lq);
        this.wB.Iy.rgq(gq, Oq, mq, Oq)
      }
      handleBaseRenderHeadingChange(qq, Eq) {
        const gq = this.wB.Iy.getState(qq, "meshRotation");
        gq && (gq.baseRenderRotation[1] = Eq);
        for (const Yq of (0, Jg.b)().getFollowingEntities(qq)) {
          const qq = this.wB.Iy.getState(Yq, "meshRotation"),
            gq = this.wB.Iy.hgq(Yq);
          qq && gq.ngq && (qq.baseRenderRotation[1] = Eq)
        }
      }
      handleFollowingOffsetChange(qq, Eq) {
        const gq = this.wB.Iy.hgq((0, pg.b)(qq));
        if (gq && gq.offset) {
          const qq = Eq ? Array.from(Eq) : ng().ZERO;
          gq.offset[0] = qq[0], gq.offset[1] = qq[1], gq.offset[2] = qq[2]
        }
      }
      handleShouldMatchFollowingEntityRotationChange(qq, Eq) {
        const gq = this.wB.Iy.hgq((0, pg.b)(qq));
        gq && (gq.ngq = null === Eq || void 0 === Eq || Eq)
      }
      handlePositionChange(qq, Eq, gq) {
        if (this.wB.Iy.mEq(qq, "smoothToServerPos")) {
          const Yq = this.wB.Iy.getState(qq, "smoothToServerPos");
          (0, Fg.setServerPositionAxis)(Yq, Ig[Eq], gq)
        }
      }
      setupItemHandlers() {
        this.roomStateCallbacks.items.Fy(((qq, Eq) => {
          this.allItems[Eq] = qq, (0, Lg.k)(this.wB, Eq, [qq.x, qq.y, qq.z], qq.id, {
            amount: qq.amount,
            attributes: JSON.parse(qq.attributes),
            Cg: (0, DE.b)(this.wB).cantPickUpItem(Eq),
            size: qq.size,
            predictedAt: (0, Jg.b)().client.itemDropPrediction.onServerItemAdded(Eq)
          });
          const gq = this.createStateCallbacks(qq);
          for (const Yq of Bg(mg)) this.onItemFieldChange(Eq, Yq, qq[Yq]), this.addDetacher(Eq, this.listenForFutureChanges(gq, Yq, (qq => {
            this.onItemFieldChange(Eq, Yq, qq)
          })))
        })), this.roomStateCallbacks.items.OJ(((qq, Eq) => {
          delete this.allItems[Eq], this.detach(Eq), (0, Jg.b)().client.itemDropPrediction.onServerItemRemoved(Eq), this.wB.Iy.mEq(Eq, this.wB.Iy.names.itemState) && this.wB.Iy.deleteEntity(Eq), (0, DE.b)(this.wB).disposeEntity(Eq)
        }))
      }
      onItemFieldChange(qq, Eq, gq) {
        if (Eq in Ig) {
          if (this.wB.Iy.mEq(qq, "itemState")) {
            const Yq = this.wB.Iy.getState(qq, "smoothToServerPos");
            (0, Fg.setServerPositionAxis)(Yq, Ig[Eq], gq), (0, Jg.b)().client.itemDropPrediction.onServerItemMoved(qq)
          }
          return
        }
        if (!this.wB.Iy.mEq(qq, "itemState")) return;
        const Yq = this.wB.Iy.getState(qq, "itemState");
        "amount" === Eq && gq !== Yq.amount && (Yq.creationTime = Date.now()), Yq[Eq] = "attributes" === Eq ? JSON.parse(gq) : gq
      }
      dispose() {
        if (!this.eN) {
          this.eN = !0, this.wB.off("beforeInputs", this.onFrame), this.wB.off("SB", this.Wy), this.queuedSetups.clear(), this.promotedSetups.clear();
          for (const qq of this.deferredSetups.values()) eE.i.unsubscribe(qq);
          this.deferredSetups.clear(), this.wB.Iy.Lk(this.wB.oR, this.wB.Iy.names.HZ);
          for (const qq in this.allItems) this.wB.Iy.deleteEntity(qq), delete this.allItems[qq];
          for (const qq of [...this.detachers.keys()]) this.detach(qq);
          (0, DE.b)(this.wB).clear();
          for (const qq of (0, Jg.b)().client.iterateEntityIds())(0, Jg.b)().client.disposeEntity(qq)
        }
      }
    }
    const wg = [0, 0, 0];

    function Kg(qq) {
      if ("string" !== typeof qq) return;
      const Eq = qq.indexOf("|"),
        gq = -1 === Eq ? qq : qq.slice(0, Eq),
        Yq = Dg();
      return Object.hasOwn(Yq, gq) ? Yq[gq] : void 0
    }
    const Cg = new Set;
    const Ig = {
      x: 0,
      y: 1,
      z: 2
    };
    let eg = null;

    function Dg() {
      return null !== eg || (eg = {
        ...Object.fromEntries(lg.m.map((qq => {
          const {
            IA: Eq
          } = (0, kg.e)(qq);
          return [qq, Eq]
        }))),
        Pebble: ag.c,
        Snowball: ag.c,
        "Snowball Launcher": ag.c,
        "Reinforced Pebble": ag.c,
        Bullet: ag.c,
        "Reinforced Ball": ag.c,
        Ball: ag.c,
        Mango: ag.c,
        "Moonstone Orb": ag.c,
        ...Object.fromEntries(Yg.o.map((qq => [(0, og.$b)(qq), ag.c]))),
        Arrow: ag.c,
        "Arrow of Speed": ag.c,
        "Arrow of Poison": ag.c,
        "Arrow of Slowness": ag.c,
        "Arrow of Weakness": ag.c,
        "Arrow of Knockback": ag.c,
        "Arrow of Strength": ag.c,
        "Arrow of Invisibility": ag.c,
        "Arrow of Jumping": ag.c,
        "Arrow of Defense": ag.c,
        "Arrow of Instant Healing": ag.c,
        "Arrow of Instant Damage": ag.c,
        "Arrow of Regeneration": ag.c,
        "Arrow of Haste": ag.c,
        "Arrow of Shield": ag.c,
        "Arrow of Double Jump": ag.c,
        "Arrow of Heat Resistance": ag.c,
        "Arrow of X-Ray Vision": ag.c,
        "Arrow of Mining Yield": ag.c,
        "Arrow of Brain Rot": ag.c,
        "Arrow of Milk": ag.c,
        Fireball: ag.c,
        "Bouncy Bomb": ag.c,
        RPG: ag.c,
        "Obby RPG": ag.c,
        "Super RPG": ag.c,
        "Grenade Launcher": ag.c,
        Iceball: ag.c,
        Coconut: ag.c,
        "Splash Speed Potion": ag.c,
        "Splash Defense Potion": ag.c,
        "Splash Strength Potion": ag.c,
        "Splash Invisibility Potion": ag.c,
        "Splash Jump Potion": ag.c,
        "Splash Knockback Potion": ag.c,
        "Splash Poison Potion": ag.c,
        "Splash Speed Potion II": ag.c,
        "Splash Defense Potion II": ag.c,
        "Splash Strength Potion II": ag.c,
        "Splash Jump Potion II": ag.c,
        "Splash Knockback Potion II": ag.c,
        "Splash Poison Potion II": ag.c,
        "Splash Slowness Potion": ag.c,
        "Splash Slowness Potion II": ag.c,
        "Splash Weakness Potion": ag.c,
        "Splash Weakness Potion II": ag.c,
        "Splash Milk Potion": ag.c,
        "Splash Instant Damage Potion": ag.c,
        "Splash Instant Damage Potion II": ag.c,
        "Splash Instant Healing Potion": ag.c,
        "Splash Instant Healing Potion II": ag.c,
        "Splash Regeneration Potion": ag.c,
        "Splash Regeneration Potion II": ag.c,
        "Splash Haste Potion": ag.c,
        "Splash Haste Potion II": ag.c,
        "Splash Shield Potion": ag.c,
        "Splash Shield Potion II": ag.c,
        "Splash Double Jump Potion": ag.c,
        "Splash Heat Resistance Potion": ag.c,
        "Splash X-Ray Vision Potion": ag.c,
        "Splash Mining Yield Potion": ag.c,
        "Splash Mining Yield Potion II": ag.c,
        "Splash Brain Rot Potion": ag.c,
        "Yellow Paintball Gun": ag.c,
        "White Paintball Gun": ag.c,
        "Red Paintball Gun": ag.c,
        "Purple Paintball Gun": ag.c,
        "Pink Paintball Gun": ag.c,
        "Orange Paintball Gun": ag.c,
        "Magenta Paintball Gun": ag.c,
        "Lime Paintball Gun": ag.c,
        "Light Gray Paintball Gun": ag.c,
        "Light Blue Paintball Gun": ag.c,
        "Green Paintball Gun": ag.c,
        "Gray Paintball Gun": ag.c,
        "Cyan Paintball Gun": ag.c,
        "Brown Paintball Gun": ag.c,
        "Blue Paintball Gun": ag.c,
        "Black Paintball Gun": ag.c,
        "Yellow Heavy Paintball Gun": ag.c,
        "White Heavy Paintball Gun": ag.c,
        "Red Heavy Paintball Gun": ag.c,
        "Purple Heavy Paintball Gun": ag.c,
        "Pink Heavy Paintball Gun": ag.c,
        "Orange Heavy Paintball Gun": ag.c,
        "Magenta Heavy Paintball Gun": ag.c,
        "Lime Heavy Paintball Gun": ag.c,
        "Light Gray Heavy Paintball Gun": ag.c,
        "Light Blue Heavy Paintball Gun": ag.c,
        "Green Heavy Paintball Gun": ag.c,
        "Gray Heavy Paintball Gun": ag.c,
        "Cyan Heavy Paintball Gun": ag.c,
        "Brown Heavy Paintball Gun": ag.c,
        "Blue Heavy Paintball Gun": ag.c,
        "Black Heavy Paintball Gun": ag.c,
        "Toxin Ball": ag.c,
        "Splash Aura XP Potion": ag.c,
        "Splash Aura XP Potion II": ag.c,
        "Arrow of Aura XP": ag.c,
        Firecracker: ag.c,
        "Rainbow Firecracker": ag.c,
        "White Firecracker": ag.c,
        "Orange Firecracker": ag.c,
        "Magenta Firecracker": ag.c,
        "Light Blue Firecracker": ag.c,
        "Yellow Firecracker": ag.c,
        "Lime Firecracker": ag.c,
        "Pink Firecracker": ag.c,
        "Gray Firecracker": ag.c,
        "Light Gray Firecracker": ag.c,
        "Cyan Firecracker": ag.c,
        "Purple Firecracker": ag.c,
        "Blue Firecracker": ag.c,
        "Brown Firecracker": ag.c,
        "Green Firecracker": ag.c,
        "Red Firecracker": ag.c,
        "Black Firecracker": ag.c,
        "Firecracker Pebble": ag.c,
        "Rainbow Firecracker Pebble": ag.c,
        "White Firecracker Pebble": ag.c,
        "Orange Firecracker Pebble": ag.c,
        "Magenta Firecracker Pebble": ag.c,
        "Light Blue Firecracker Pebble": ag.c,
        "Yellow Firecracker Pebble": ag.c,
        "Lime Firecracker Pebble": ag.c,
        "Pink Firecracker Pebble": ag.c,
        "Gray Firecracker Pebble": ag.c,
        "Light Gray Firecracker Pebble": ag.c,
        "Cyan Firecracker Pebble": ag.c,
        "Purple Firecracker Pebble": ag.c,
        "Blue Firecracker Pebble": ag.c,
        "Brown Firecracker Pebble": ag.c,
        "Green Firecracker Pebble": ag.c,
        "Red Firecracker Pebble": ag.c,
        "Black Firecracker Pebble": ag.c,
        "Blinding Pebble": ag.c,
        Poop: ag.c,
        "Wood Boomerang": ag.c,
        "Stone Boomerang": ag.c,
        "Iron Boomerang": ag.c,
        "Gold Boomerang": ag.c,
        "Diamond Boomerang": ag.c,
        "Amethite Boomerang": ag.c,
        "Magmasteel Boomerang": ag.c,
        "Rubellite Boomerang": ag.c,
        "Serpentite Boomerang": ag.c,
        "Moonstone Boomerang": ag.c,
        "67 Base Projectile": ag.c,
        "67 Boosted Projectile": ag.c,
        "Capitano Grenade": ag.c,
        "Scatter Pellet": ag.c,
        "Lucky Bomb": ag.c,
        "Unlucky Bomb": ag.c,
        "Swap Orb": ag.c,
        Mesh: Mg,
        AudioEntity: zg
      }), eg
    }
  },
  38931: (qq, Eq, gq) => {
    gq.d(Eq, {
      d: () => Oq,
      e: () => mq
    });
    var Yq = gq(598),
      lq = gq(37717);
    const Oq = 4e4;
    class mq {
      constructor() {
        let qq = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Date.now;
        this.now = qq, this.editedAt = new Map, this.lastChunkX = NaN, this.lastChunkY = NaN, this.lastChunkZ = NaN, this.lastChunkId = ""
      }
      noteEdit(qq, Eq, gq) {
        const Oq = (0, Yq.Q)(qq),
          mq = (0, Yq.Q)(Eq),
          xq = (0, Yq.Q)(gq),
          Aq = this.now();
        if (Oq !== this.lastChunkX || mq !== this.lastChunkY || xq !== this.lastChunkZ) {
          this.lastChunkX = Oq, this.lastChunkY = mq, this.lastChunkZ = xq, this.lastChunkId = (0, lq.e)(Oq, mq, xq), this.editedAt.delete(this.lastChunkId), this.editedAt.set(this.lastChunkId, Aq);
          for (const [qq, Eq] of this.editedAt) {
            if (Eq >= Aq - 3e5) break;
            this.editedAt.delete(qq)
          }
        } else this.editedAt.set(this.lastChunkId, Aq)
      }
      chunksEditedSince(qq) {
        const Eq = [];
        for (const [gq, Yq] of this.editedAt) Yq >= qq && Eq.push(gq);
        return Eq
      }
    }
  },
  39021: (qq, Eq, gq) => {
    gq.d(Eq, {
      c: () => uE,
      f: () => GE,
      g: () => bE,
      j: () => LE
    });
    var Yq = gq(3545),
      lq = gq(8723),
      Oq = gq(36734),
      mq = gq(1405),
      xq = gq(36789),
      Aq = gq(38966),
      cq = gq(38904),
      uq = gq(3595),
      Bq = gq(37853),
      Wq = gq(1226),
      Nq = gq(296),
      aq = gq(31),
      Vq = gq(1926),
      dq = gq(96),
      jq = gq(38),
      Hq = gq(1952),
      oq = gq(1870),
      Pq = gq(2893);
    class Qq {
      constructor(qq) {
        this.storeForMs = qq, this.clicks = new Pq.d
      }
      click() {
        this.clicks.enqueue(Date.now());
        const qq = Date.now() - this.storeForMs;
        for (; this.clicks.size > 0 && this.clicks.peek() < qq;) this.clicks.dequeue()
      }
      getNumClicksInMs(qq) {
        let Eq = 0;
        return this.clicks.forEach((gq => {
          gq > Date.now() - qq && Eq++
        })), Eq
      }
      getMaxClickSeparationInMs(qq) {
        if (0 === this.clicks.size) return this.storeForMs;
        let Eq = 0,
          gq = Date.now() - qq;
        this.clicks.forEach((Yq => {
          Yq < Date.now() - qq || (Eq = Math.max(Eq, Math.abs(Yq - gq)), gq = Yq)
        }));
        const Yq = Math.abs(Date.now() - gq);
        return Math.max(Eq, Yq)
      }
    }
    class yq {
      constructor(qq) {
        this.storeForMs = qq, this.clickDownDurations = new Pq.d
      }
      registerClickDownDuration(qq) {
        this.clickDownDurations.enqueue({
          dur: qq,
          atTime: Date.now()
        });
        const Eq = Date.now() - this.storeForMs;
        for (; this.clickDownDurations.size > 0 && this.clickDownDurations.peek().atTime < Eq;) this.clickDownDurations.dequeue()
      }
      clickDownDurationsCheck(qq) {
        if (qq > this.storeForMs) return console.error("overDuration is greater than storeForMs"), "0:0";
        let Eq = 0,
          gq = 0;
        return this.clickDownDurations.forEach((Yq => {
          Yq.atTime > Date.now() - qq && (Eq++, gq = Math.max(gq, Yq.dur))
        })), `${Eq}:${gq}`
      }
    }
    var tq = gq(36543),
      rq = gq(39024),
      vq = gq(24),
      hq = gq(2668),
      nq = gq(1308),
      bq = gq(38939),
      iq = gq(4264),
      Zq = gq(136),
      fq = gq(38138),
      Mq = gq(38368),
      Tq = gq(598),
      zq = gq(36534),
      Sq = gq(15),
      pq = gq(9379),
      Gq = gq(1214),
      Lq = gq(190),
      Jq = gq(39031),
      kq = gq(39040),
      Rq = gq(38173),
      Uq = gq(39064),
      Fq = gq(38061),
      sq = gq(3265),
      Xq = gq(1622),
      wq = gq(36657),
      Kq = gq(2733),
      Cq = gq(39047),
      Iq = gq(39056),
      eq = gq(37910);
    const Dq = {
      forward: "freeCamForward",
      backward: "freeCamBackward",
      left: "freeCamLeft",
      right: "freeCamRight",
      jump: "freeCamUp",
      crouch: "freeCamDown"
    };

    function qE() {
      var qq, Eq;
      return !(null === (qq = (0, hq.b)().client) || void 0 === qq || null === (Eq = qq.freeCameraController) || void 0 === Eq || !Eq.movesFly())
    }

    function EE(qq) {
      const Eq = qq.on.bind(qq);
      qq.on = (qq, gq) => {
        Hq.A.has(qq) ? Eq(qq, gq) : Eq(qq, (Eq => {
          var Yq;
          return null !== (Yq = (0, hq.b)().client) && void 0 !== Yq && Yq.isReplayMode() ? function(qq) {
            return qq in Dq
          }(qq) && qE() ? gq(Eq) : void 0 : gq(Eq)
        }))
      }
    }
    const gE = 5e3,
      YE = 1;
    let lE, OE = YE,
      mE = 0;
    const xE = !0;
    let AE = xE;
    Vq.c.subscribe("_ignoreBasicBoards", (qq => {
      AE = qq
    })), (0, Yq.onGameReset)((() => {
      AE = xE
    }));
    let cE = null;
    const uE = () => cE;
    let BE, WE, NE;
    var aE, VE, dE, jE, HE, oE, PE, QE, yE;
    const tE = ["b", 0, 1, "h", 3, 135, "i", 7, 5, 6, "d", 8, 255, "length", "c", 68, 213, "undefined", void 0, 2, 4, 229, 63, "fromCodePoint", 12, "push", 77, 220, 81, 11, "g", 91, 8191, 88, 13, 14, 188, 54, 60, 195, "a", 72, 89, 217, 230, 225, 98, 175, null, 171, 50, 10, 223, 134, "e", "f", 189, 112, 117, 226, 36, !1, 127, 128, 35, 27, 9, 133, 115, 166, 239, 179];

    function rE(...qq) {
      return qq[tE[13]] = tE[2], typeof aE[qq[tE[1]]] === tE[17] ? aE[qq[tE[1]]] = function(...qq) {
        for (nE(qq[tE[13]] = tE[2], qq[-tE[5]] = 'fE=n[,xm~5zVl$0ij#bkp?WTosU>e3w}(H^Ag|9qQN]O6M*Jc.YI@:8L!Z_;G{2v&ruFRDd"7h1KXBaCtS%/)y4+`<P', qq[tE[0]] = "" + (qq[tE[1]] || ""), qq[tE[4]] = qq[tE[0]].length, qq[tE[10]] = [], qq[tE[8]] = tE[1], qq[tE[9]] = tE[1], qq[tE[7]] = -tE[2]), qq[tE[3]] = tE[1]; qq[tE[3]] < qq[tE[4]]; qq[tE[3]]++)
          if (qq[tE[6]] = qq[-tE[5]].indexOf(qq[tE[0]][qq[tE[3]]]), qq[tE[6]] !== -tE[2])
            if (qq[tE[7]] < tE[1]) qq[tE[7]] = qq[tE[6]];
            else {
              nE(qq[tE[7]] += qq[tE[6]] * tE[31], qq[tE[8]] |= qq[tE[7]] << qq[tE[9]], qq[tE[9]] += (qq[tE[7]] & tE[32]) > tE[33] ? tE[34] : tE[35]);
              do {
                nE(qq[tE[10]].push(qq[tE[8]] & tE[12]), qq[tE[8]] >>= tE[11], qq[tE[9]] -= tE[11])
              } while (qq[tE[9]] > tE[7]);
              qq[tE[7]] = -tE[2]
            } return qq[tE[7]] > -tE[2] && qq[tE[10]].push((qq[tE[8]] | qq[tE[7]] << qq[tE[9]]) & tE[12]), vE(qq[tE[10]])
      }(VE[qq[tE[1]]]) : aE[qq[tE[1]]]
    }

    function vE(...qq) {
      return qq[tE[13]] = tE[2], typeof jE !== tE[17] && jE ? (new jE).decode(new HE(qq[tE[1]])) : typeof oE !== tE[17] && oE ? oE.from(qq[tE[1]]).toString("utf-8") : yE(qq[tE[1]])
    }

    function hE() {}

    function nE() {
      nE = function() {}
    }

    function bE(qq) {
      function Eq() {
        return qq.Iy.Ngq(qq.oR)
      }
      EE(qq.inputs.down), EE(qq.inputs.up);
      for (const Yq of ["forward", "backward", "left", "right", "sprint", "jump", "crouch"]) {
        const Eq = (Eq, gq) => {
          var lq, Oq;
          if (qE()) {
            var mq;
            const lq = Dq[Yq];
            var xq, Aq;
            if (lq) null === (xq = (0, hq.b)().client) || void 0 === xq || null === (Aq = xq.freeCameraController) || void 0 === Aq || Aq.handlefreeCamKeyPress(lq, Eq, gq);
            return void(gq || null !== (mq = (0, hq.b)().client) && void 0 !== mq && mq.isReplayMode() || (qq.Iy.Hgq()[Yq] = !1))
          }
          if (null !== (lq = (0, hq.b)().client) && void 0 !== lq && null !== (Oq = lq.freeCameraController) && void 0 !== Oq && Oq.isKeyPressOverriden(Eq)) return;
          qq.Iy.Hgq()[Yq] = gq
        };
        qq.inputs.down.on(Yq, (qq => Eq(qq, !0))), qq.inputs.up.on(Yq, (qq => Eq(qq, !1)))
      }
      qq.inputs.down.on("crouch", (() => {
        if (qE()) return;
        if (!qq.Uy.canCrouch) return;
        const Eq = qq.Iy.Hgq();
        vq.b.get("clientEscMenuOptions").crouchIsToggle && (Eq.crouchToggled = !Eq.crouchToggled && !Eq.padSneakToggled), Eq.padSneakToggled = !1
      }));
      const gq = () => {
        const qq = Eq();
        qq.isGun() && qq.inaccuracyCalculator.jump()
      };
      qq.inputs.down.on("jump", (qq => {
        qE() || (gq(), BE(qq))
      }));
      for (const Yq of Hq.k) qq.inputs.down.on(Yq, (qq => {
        var Eq, gq;
        null !== (Eq = (0, hq.b)().client) && void 0 !== Eq && null !== (gq = Eq.freeCameraController) && void 0 !== gq && gq.handlefreeCamKeyPress(Yq, qq, !0) && (qq.preventDefault(), qq.stopPropagation())
      })), qq.inputs.up.on(Yq, (qq => {
        var Eq, gq;
        null !== (Eq = (0, hq.b)().client) && void 0 !== Eq && null !== (gq = Eq.freeCameraController) && void 0 !== gq && gq.handlefreeCamKeyPress(Yq, qq, !1) && (qq.preventDefault(), qq.stopPropagation())
      }));
      qq.inputs.down.on("recordGame", (() => {
        var qq, Eq;
        null === (qq = (0, hq.b)().client) || void 0 === qq || null === (Eq = qq.gameRecorder) || void 0 === Eq || Eq.toggleRecording()
      })), qq.inputs.down.on("recordClip", (() => {
        var qq, Eq;
        (0, tq.e)() || null === (qq = (0, hq.b)().client) || void 0 === qq || null === (Eq = qq.gameRecorder) || void 0 === Eq || Eq.saveClip()
      }));
      for (const Yq of Hq.A) qq.inputs.down.on(Yq, (() => {
        var qq;
        if ((0, rq.b)()) return;
        if ("replayViewerOpen" === Yq) return void aq.i.TV("replayViewer|requested", "toggle");
        const Eq = null === (qq = (0, hq.b)().client) || void 0 === qq ? void 0 : qq.gameReplayer;
        ((0, tq.e)() || null !== Eq && void 0 !== Eq && Eq.isReplayMode()) && (null === Eq || void 0 === Eq || Eq.handleAction(Yq))
      }));
      const mq = new Qq(3e4),
        Bq = new yq(4e4);
      let jq = 0;
      const Pq = qq => {
          let Eq = 0,
            gq = null;
          const Yq = Eq => null !== Eq && Eq === gq && (gq = null, qq(), !0);
          return {
            press: () => (Eq++, (0, Jq.e)() || (Yq(gq), gq = Eq), Eq),
            owns: qq => qq === gq,
            release: Yq
          }
        },
        iq = (qq, gq) => {
          gq && LE(Wq.d.TouchDownFirePrimary), qq ? pq() : ((0, Mq.d)(), Eq().AYq()), gq || LE(Wq.d.DownFirePrimary), GE(!0), mq.click();
          const lq = mq.getMaxClickSeparationInMs(3e4) < 1e3 / 30,
            Oq = mq.getMaxClickSeparationInMs(1e4) < 20,
            xq = mq.getMaxClickSeparationInMs(4e3) < 1e3 / 70;
          if (lq || Oq || xq) {
            let qq;
            if (lq) qq = 30;
            else if (Oq) qq = 50;
            else {
              if (!xq) throw new Error("???");
              qq = 70
            }(0, Yq.sendColyMessage)(uq.Dk, qq)
          }
        },
        Zq = Pq((() => {
          const qq = Date.now() - jq;
          Bq.registerClickDownDuration(qq), Eq().OYq(), LE(Wq.d.UpFirePrimary), GE(!1);
          const gq = Bq.clickDownDurationsCheck(4e4);
          (0, Yq.sendColyMessage)(uq.Rg, gq)
        }));
      let fq = 0;
      qq.inputs.down.on("primary-fire", (function(qq) {
        fq = Zq.press(), Zq.owns(fq) && (jq = Date.now(), Math.abs(performance.now() - qq.timeStamp) > 5e3 || (iq(qq.altKey, "changedTouches" in qq), BE(qq)))
      })), qq.inputs.up.on("primary-fire", (function(qq) {
        Zq.release(fq) && BE(qq, !0)
      }));
      const Tq = () => {
          Eq().tcq(), LE(Wq.d.DownFireSecondary), GE(!0), qq.Kqq && !qq.Kqq.position && (0, cq.j)()
        },
        zq = Pq((() => {
          Eq().lYq(), LE(Wq.d.UpFireSecondary), GE(!1)
        }));
      let Sq = 0;
      qq.inputs.down.on("alt-fire", (function(qq) {
        Sq = zq.press(), zq.owns(Sq) && (Tq(), BE(qq))
      })), qq.inputs.up.on("alt-fire", (function(qq) {
        zq.release(Sq) && BE(qq, !0)
      }));
      const pq = () => Eq().hcq();
      qq.inputs.down.on("mid-fire", (() => {
        (0, Jq.e)() || pq()
      }));
      const Uq = qq => {
          (0, Yq.sendColyMessage)(uq.Uh, qq, !0)
        },
        lE = qq => {
          (0, Yq.sendColyMessage)(uq.Wh, {
            Uc: qq,
            Fc: xE()
          }, !0)
        };
      for (const Yq of ["SpecialAction1", "SpecialAction2"]) qq.inputs.down.on(Yq, (() => {
        Uq(Yq)
      })), qq.inputs.up.on(Yq, (() => {
        lE(Yq)
      }));
      const mE = () => {
        const qq = Eq();
        qq.isGun() && qq.reload(Date.now())
      };
      qq.inputs.down.on("ReloadGun", mE);
      const xE = () => {
        let Eq = "a";
        return qq.physics.testSolid.toString().includes("NW") || (Eq = "b"), Eq
      };
      qq.inputs.down.on("OpenInventory", (qq => {
        qq.preventDefault(), (0, Xq.v)(qq, "inventory", (0, kq.c)((0, hq.e)()))
      })), qq.inputs.bind("ShiftHeld", "ShiftLeft", "ShiftRight");
      const AE = qq => {
        aq.i.TV("DropItemKeyPressed", qq)
      };
      qq.inputs.down.on("DropItem", (() => {
        AE(qq.Iy.Hgq().crouch)
      })), qq.inputs.down.on("OpenShop", (Eq => {
        (0, tq.e)() || "inGame" === vq.b.get("gameState") && (0, Xq.u)(Eq, Nq.p.SHOP, !(0, lq.d)(qq.Uy.shopInfo))
      })), qq.inputs.down.on("OpenLobbyLeaderboard", (Eq => {
        (0, tq.e)() || "inGame" === vq.b.get("gameState") && (0, Xq.u)(Eq, Nq.p.LOBBY_LEADERBOARD, (0, Iq.d)(qq.Uy))
      })), qq.inputs.down.on("HideUi", (() => {
        aq.i.TV("showUi", !1)
      })), qq.inputs.up.on("HideUi", (() => {
        aq.i.TV("showUi", !0)
      }));
      const uE = qq => {
        0 === qq && (qq = 10), aq.i.TV("setSelectedInventorySlotI", qq - 1), aq.i.TV("numkeyPressed", qq)
      };
      for (let Yq = 1; Yq <= 10; Yq++) qq.inputs.down.on("HotBarSlot" + Yq.toString(), (() => {
        uE(Yq)
      }));
      qq.inputs.down.on("OpenTasksAndLeaderboard", (Eq => {
        const gq = (0, wq.j)();
        gq ? (0, Xq.y)(Eq, !0, gq) : (0, Xq.v)(Eq, "retentionFeatures", !(!qq.Uy._tasks && !qq.Uy._availableLeaderboards))
      })), qq.inputs.down.on("OpenCodeEditor", (Eq => {
        (0, Xq.y)(Eq, (0, bq.c)((0, nq.e)()), (() => {
          aq.i.TV("EditLobbyCode", qq.Iy.Py(qq.oR).map(Math.floor))
        }))
      })), qq.inputs.bind("ToggleFullCoordinateOverlay", "F3"), qq.inputs.down.on("ToggleFullCoordinateOverlay", (() => {
        aq.i.TV("toggleFullCoordinateOverlay")
      }));
      const NE = () => {
        (0, hq.b)().client.cameraController.swapCameraZoom()
      };
      qq.inputs.down.on("SwapCameraZoom", NE), qq.inputs.down.on("OpenInviteLink", (qq => {
        (0, Xq.v)(qq, "inviteLink", dq.featureFlags.canUseInviteLinks)
      })), qq.inputs.bind("Y", "KeyY"), qq.inputs.down.on("Y", (qq => {
        (0, tq.e)() || aq.i.TV("YKeyPressed")
      })), qq.inputs.bind("X", "KeyX"), qq.inputs.down.on("X", (qq => {
        (0, tq.e)() || aq.i.TV("XKeyPressed")
      })), qq.inputs.down.on("OpenEmoteWheel", (() => {
        aq.i.TV("requestEmoteWheelHoldOpen")
      })), qq.inputs.up.on("OpenEmoteWheel", (() => {
        aq.i.TV("requestEmoteWheelHoldRelease")
      })), qq.inputs.down.on("Zoom", (() => {
        if ("inGame" === vq.b.get("gameState")) {
          qq.Iy.getState(qq.oR, "playerCameraAdjustment").zoomKeyPressed = !0, (0, hq.b)().client.cameraController.handleZoomKeyPressed()
        }
      })), qq.inputs.up.on("Zoom", (() => {
        qq.Iy.getState(qq.oR, "playerCameraAdjustment").zoomKeyPressed = !1
      })), iE();
      const aE = qq => function() {
        return WE(), qq(...arguments)
      };

      function VE(qq) {
        "inGame" !== vq.b.get("gameState") || (0, Xq.r)() || (aq.i.TV("ctrlCrouchWithoutFullscreen"), qq.preventDefault())
      }
      cE = {
        primaryFireDown: aE((() => {
          const qq = Zq.press();
          return Zq.owns(qq) && (jq = Date.now(), iq(!1, !1)), qq
        })),
        primaryFireUp: aE((qq => {
          Zq.release(qq)
        })),
        altFireDown: aE((() => {
          const qq = zq.press();
          return zq.owns(qq) && Tq(), qq
        })),
        altFireUp: aE((qq => {
          zq.release(qq)
        })),
        jumpDown: aE(gq),
        specialActionDown: aE(Uq),
        specialActionUp: aE(lE),
        reloadGun: aE(mE),
        dropItem: aE(AE),
        swapCameraZoom: aE(NE),
        pickBlock: aE(pq)
      }, qq.inputs.down.on("ctrlCrouch", VE), qq.inputs.up.on("ctrlCrouch", VE), qq.inputs.bind("ctrlCrouch", "ControlLeft");
      const dE = qq => {
        "inGame" === vq.b.get("gameState") && qq.ctrlKey && !(0, Xq.r)() && qq.preventDefault()
      };
      document.addEventListener("keydown", dE), document.addEventListener("keyup", dE), document.addEventListener("keypress", dE), qq.inputs.bind("Alt", "AltLeft", "AltRight"), qq.inputs.down.on("Alt", (qq => {
        qq.preventDefault()
      }));
      const jE = Eq => (0, Fq.i)(qq, Eq),
        HE = Eq => (0, Fq.j)(qq, Eq),
        oE = [0, 0, 0],
        PE = [0, 0, 1];
      qq.on("afterRender", (Eq => {
        (0, Oq.e)(qq.camera.heading), (0, Fq.k)(qq, oE, PE), (0, hq.b)().client.triggerGameCallback("onAfterRender", Eq, {
          cameraHeading: qq.camera.heading,
          cameraPitch: qq.camera.pitch,
          cameraPosition: oE,
          cameraDirection: PE,
          tanHalfFovX: (0, Fq.e)(qq),
          tanHalfFovY: Math.tan(qq.Ma.o3().fov / 2),
          screenBandPct: {
            x: sq.c,
            y: (0, sq.l)()
          },
          projectWorldPosToScreenPos: jE,
          projectWorldPosToViewport: HE
        })
      })), (0, Kq.s)("look") && (qq.camera.Iw = (0, Cq.k)("js"), qq.inputs.YC = Cq.h), (0, Kq.s)("remesh") && (0, eq.i)(qq), qq.on("beforeInputs", (() => {
        if ((0, rq.b)()) return qq.inputs.lC.dx = 0, void(qq.inputs.lC.dy = 0);
        if (qq.camera.lC.dx += qq.inputs.lC.dx, qq.camera.lC.dy += qq.inputs.lC.dy, 0 !== qq.inputs.lC.dx || 0 !== qq.inputs.lC.dy) {
          qq.Iy.getState(qq.oR, "playerCameraAdjustment").lastPointerMove = Date.now()
        }
        qq.inputs.lC.dx = 0, qq.inputs.lC.dy = 0
      }));
      let QE = 0;
      qq.on("SB", (function(Eq) {
        aq.i.TV("noaTick", Eq);
        const gq = (0, hq.b)().client;
        if (gq.triggerGameCallback("SB", Eq), gq.isClientGameSessionActive()) try {
          Aq.d.SB(Eq)
        } catch (mq) {
          console.error("Error ticking audio entities", mq)
        }
        if (!qq.Iy.Bgq(qq.oR).isAlive) return;
        Date.now() - QE > 9e3 && (! function() {
          const qq = (0, hq.e)();
          "number" === typeof qq.Uy.speedMultiplier && "number" === typeof qq.Uy.jumpAmount && (0, Yq.sendColyMessage)(uq.yi, {
            eO: (0, Gq.f)(qq.Uy.speedMultiplier),
            DO: (0, Gq.c)(qq.Uy.jumpAmount),
            qm: (0, Gq.f)(qq.Uy.crouchingSpeed),
            Em: (0, Gq.f)(qq.Uy.walkingSpeed),
            gm: (0, Gq.f)(qq.Uy.runningSpeed),
            Ym: (0, Gq.c)(qq.Jqq),
            lm: qq.Iy.yEq(qq.oR).jumpForce,
            Om: qq.Iy.qI(1).width,
            xm: qq.Iy.qI(1).height,
            Am: qq.Iy.FX(1).Am
          }, !0)
        }(), QE = Date.now());
        const lq = qq.Iy.Hgq();
        if ((lq.jump || lq.forward || lq.backward || lq.left || lq.right || lq.sprint) && aq.i.TV("usedKeyboard"), qq.Iy.wEq(qq.oR) && !0 === qq.Uy.canPickUpItems) {
          const Eq = qq.Iy.Py(qq.oR),
            gq = (0, oq.n)(OE),
            lq = (0, oq.r)(OE),
            Oq = [Eq[0] - gq, Eq[1] - .6 * lq, Eq[2] - gq],
            mq = [Eq[0] + gq, Eq[1] + Lq.c.UH + .6 * lq, Eq[2] + gq],
            Aq = qq.Iy.Txq({
              base: Oq,
              max: mq
            }, qq.Iy.names.autoRotate),
            Bq = qq => {
              const Eq = Lq.c.droppedBlockSize / 2;
              return [0, 1, 2].every((gq => qq[gq] >= Oq[gq] - Eq && qq[gq] <= mq[gq] + Eq))
            },
            {
              itemDropPrediction: Wq
            } = (0, hq.b)().client,
            Nq = Yq.offlineInputReplay.holdsInput();
          if (Aq.length > 0)
            for (const aq of Aq) {
              const Eq = qq.Iy.getState(aq, "itemState");
              if (void 0 === Eq || Date.now() - Eq.creationTime < 500) continue;
              let gq = aq,
                lq = null;
              if (Eq.Cg) {
                const qq = Wq.pickupTarget(aq, Bq, Nq);
                if (null === qq) continue;
                ({
                  nc: gq,
                  fc: lq
                } = qq)
              }
              const Oq = qq.Iy.getState(gq, "itemState");
              if (Oq.Cg && null === lq) continue;
              let mq = 0,
                Aq = null,
                Vq = !1;
              if (0 === Oq.amount) Vq = !0;
              else {
                const {
                  amountPickedUp: Eq
                } = qq.Iy.sEq(qq.oR).pickUpItem({
                  name: Oq.name,
                  typeObj: Oq.typeObj,
                  amount: Oq.amount,
                  attributes: Oq.attributes
                });
                if (mq = Eq, 0 === mq) continue;
                Aq = Rq.e.pickUp(Oq, mq), Oq.amount -= mq, Oq.amount < 0 ? console.error("Picking up led to less than 0 of item!") : 0 === Oq.amount ? Vq = !0 : Oq.creationTime = Date.now() + gE
              }
              const dq = (0, hq.b)().client.inventoryPrediction.record(Aq);
              (0, Yq.sendColyMessage)(uq.Qh, {
                nc: null === lq ? gq : "",
                bc: mq,
                Zc: cq.f,
                IO: dq,
                fc: lq
              }, !0), Vq && (Nq && Wq.onPickedUpOffline(gq, dq, lq), null === lq && qq.Iy.deleteEntity(gq));
              xq.b.play("pickUp", Lq.c.pickupSoundVol).rate(1 + Math.random() * Lq.c.pickupSoundRateVariation)
            }
        }
        if (!qq.Iy.SEq(qq.oR)) return;
        const Oq = qq.inputs.lC.nEq;
        if (0 !== Oq) {
          const Eq = Oq > 0 ? 1 : -1;
          qq.inputs.state["mid-fire"] || qq.inputs.state.Alt || !qq.Uy.useInventory ? (qq.inputs.state["mid-fire"] && aq.i.TV("requestEmoteWheelClose"), (0, hq.b)().client.cameraController.handleScrollZoom(Eq)) : aq.i.TV("ScrollInventorySlot", Eq)
        }
      })), Vq.c.subscribe("droppedItemScale", (qq => {
        OE = "number" === typeof qq && isFinite(qq) ? qq : YE
      }))
    }

    function iE() {
      const qq = (0, hq.e)();
      if (qq)
        for (const Eq in Hq.u) {
          qq.inputs.unbind(Eq);
          for (const gq of Hq.u[Eq]) qq.inputs.bind(Eq, gq)
        }
    }
    nE(aE = {}, VE = ["&eU7QAkE32=a8_Ok,b$m^a{$1#LuIdw3cf", "IM4X*B#mvbTCbSd|YIZ8$", "aI@L_^^o4kA7$,D9F5Mm", "J2oK,CV$b5D();bpO|V701`@=i.D.[#>xA`8BgW*=iUDE", "5UEKZ*(bAZ##`n", '!pRzrL[]Al0#:c@e@}x}f*/EXr(2t"4j|OzKT"vI+$T_.j,oy;RBshmm,zh[E', "yd1,.)QQj5eC*|sA}E", "gl9@_*[oJ:9XW,IN5bDY0gJE", "y;DL%M+AB:<,fiM>FhB1EG5N,_^X;>y>x1mX%Mzwg$", "oIA3Y._*RZ7(,jPNmZ7xtLkkk&y(E", "O^de)/f", 'a2;("gQ@)$9zgn', ']Ilm4X"Eo$~rH7WQ;^R,1Dc@HbZhFiJQ[R0L49yTs2)Ba.DkP;^Blcf', "=.i@f_vE", "0(ez{cr3xL~_,):AV3u(=1X^bZVLas0kwQR3zZtoklPWP.msHTDm,LRldk>", "Cr|e09Om#beobS+33^3Le", "/qi5mSmms#iR5)wg?re}QKGoc5tV[i]}xvq8^.5N=5=%X/xbwZ/3=*o@[&fKE", "9RI:TJ_Q*vvs?j=wIp2L02NvSvUcc>~", '!RJ5b2c=]#"h49@Q', '|GK(,DXo,&~p"djpD}T@T@nsk8Le~ixo<#f5[CVsm', "w*a}Hy;Afb,{^|?>.ZS8<Xf", "(3A(cKCNClRt#S.qadl3IqMk5#3oC933LIi@CgrNA5IXqJAsuR9eU", 'RM)"AayN=k', "hIj>AQooLpN;aS&]a!I~xGisCGz_KUSqZQBYHQ_RivyvBGkN", '(|^I]A>Nnk"FV"f]K2F3_)o=Op[Cu|?eH|qe.df', "aRs8DcZyZrt.H[", "M20X]tj48_{hF;P]", "QrHwN8Uwnk)B?jI^%hk(7g9oE5@ez|?A/IxL0X/CL$`SE", "yq0@|R#3,$Qtf", "ShveIKkNEG41[>+Qf.](Z*1@{~,{E", ";Rz(EG}Aqpk70,", "Y8/38quw>pX:ti^gHlyUE*uwmL2h{[", 'U"^(ZqAZ}uZ0t>r|@xq@iDImVpDBCi3wH^*@gJf]*?', '<!M1_^Q=+&w0BorT#iJ[hX]=52vvrgbevr"5', ";c3XpD>mCv&.,jEw/dI3KLI3M~P1f", "7Rs8{cb~S8asas#><hEa@|LA_rU", "$|3z@d~oK![p0,", 'L2L[":yN_pY?i=DwB2R}cIC$D&?xh[', "Ssg3i/Uwn", "6Q!.:KnN9$Jh!GW^;0zKPyRwBVcX?c?>[OR1gA,s~rzI@>Rb`r5a3", "q361oQAZEZ_ufiMqHG.(PHU~cb|", '!#JeP93:viSdh7GT)IXUCZ1@#vB3:7cU+rd@+"f', ';TI~Zq?3p$N02|Dom(xmTyv3{;,C[j@^)Ik(2GcwN0&~j"?>}ZL[Uaf', "GeUKr7O$&l/W[/zUMR5I}hHAQp<(8|V9);ch5Sa*IGzK)c=g.MA33", '}iWL]{x]~_rd)otUHG_BBSDT`ppzX"+ACp=(U', "yq4m||VEXV;", "!2w@_7;N^i*.T0Hw=3c.wJa_yk", 'rR2[Idc@~z8t#j^w"5`5PMf', ".|9[YRUtEvmIOd1s", "g5Q.Zq|$d_@XIi<WY^BUrcTAM?Dd7G>]wGpBpQJE", "Cr{m.qGRtblT8$G]d|I3^t8@.ikwi9[bP!n", "YnJh1ZR_jbID@j]q>Rdh_7z&;rz^Xnx", "nuFzO!GbbiZh:{sex[H>G)c*uv,%>=~9[1:z.vuwcvM#%.:Q`I9X<Hsk,", "Ox:zSH.k~p^7`AcqL8S86%(=", "=?8L3;#kGV", 'h}I~u2jovbg7..sT"|~w(;HZJ~B:,GNq!#/:8drNUr!', '#bK3L:wo}l4(Ec^|,.i87S8@l?Cd@>F#;TNw{79bnkag"0peQ8kBd1w=', "h|*mgJU@nk=JnUz}rTn(YRvvH5y!s[", "qx31)Y+#TpyB0SA#Wr2.D^2bMb*}]$i", "}^y}|Kf", "n.P3kZ6o]p|LG;6qK#l1@|hIMV2*v0egg1jwsJ!QN0V^Z[HT", "M}JXZBQoSipI<Gdo*2jx", '!M@::_@=^ZEa5c!]s"DXOAkmZ2^^>==TBTc5<Z.vx', "%|b7HAkE", 'MUZxPac=zrJLjiH|S;n3}@Tm12]DO=e]m"I~8!<#Kr!', '"Ro50S,v%GW%Nj&wnT`xCXE:ykSEsjDkNR4"$', "0*H(oJl4CiK1N74e4x[3,CzbgkkD;>59/xdmn^x]0b)bT0cUBxXUe", "OI]7YKf", "7R.(N!;3!_{hj;zs[Rj5M|IAci1EV0VqCr3mLqG*`$!sTY>T*2[mW", "GeQ8g8.m%kS:a.|k.pveR^,:l;#Cy.Ue?*n", "^O`5>y#krb41*|eApQT5~S7_D&X.Zo{#)pD}dL^wfv;td00", '^T0@$S"$gZ![/U<3MZ=', '$UX,%M%ofu@hecNk9"/,W', "~v$m{qY&Ik?Xw0ipsUD}5CKE{~=H|cx", 'p*u:lXetJ:fr0|9o|",YnCal{0gnL0PehI}[hG[_.v{@1skQ', "m1/Bd^hE", "iOz>n40~nZ<F80RbJr5ItSAAR5Lu~i23vxO7F*+ZV0zn6JfT+qn", "7#FBO{[bJiP&e/t>^c}XSZi:%8?z(>rTCM;(?", '0ltx~Cj&FZ9mJ=GTW*BYzYa^U0op}Yg}/qc5"1Y=q_2d.7/>Hi&.P8zo`#G', "9n]IBY@_uleC4d}|wRweG_a@}uWc@i,|t|Y7>", "@}We%MEK(l>^dDKq:IK,W", "AiM1Q.(&=ljnrop>J87x3", "T3RBQthI];h(iUFb$v!.4Xul7$CdK>4jO#*L{c7bTp7[r[fTUQk7L)IT[", "NO78Z7QwK0!}dsMkm8D}mD!1[8Bi(;lU>1}.oQo@~$mR[g$", ":pZ8Jvkk2bT2=,&bOR3@>;6oEl37&>[O^IJ5]dloj5(D@n", '^iDm]hW_d_uh~i+AKMV((h7oN_mCjc7kL5zIkSfg)$"W2$Kqyeq5', 'r8iw<J`^~#w@t>t>6^e3/"DI}G8vpn=OO""8ga.v]2&(.GoehV$LAJf~[', 'H|fai"ooVr`G<c<j<09m<@0o]r&Ae/:N3p4X:vVNbihh[/>]pvn', "IZvxhS`*y$202D[}H39e]RvN5#", "+qnBbS}Do_:[QJUgB}X:G^XQjZnT)JZ3tM+X$Lc_[", "{;5a!v#3nG{susu#dR!x@%KDcuoL>%l9zQm5xcSyu8Qton", 'Opx}2CKm/kP,J=o^Mlo.O!~o0;.D!ouo.5X:0Z?JEZK3f"L3{Rmx', "OZn,>;_RS543ti(]dIo53@|mC!U$p;+N7V8X`HulP#[Iasj^^8L[", "HQj5n*k$_#", 'O^{zHJ:Ae;aSZo=w$RV3s9+T_VtWz,eNy^4"l', "G^W@,Sl&{:!VE", '!U@BH@71A50{KdewbvH(0Seo,_;be;Ds}*w@t2TJU2P&?7E#k"}x0Zjdbl', 'Q"ZI*_alsrSFY9Gg|xsaBS9gL&fw)i|kd8FYw"~~wu]nE', "m*oK}81x*bAz/0(bFf", "qpqe%S?Sl29hCA||[Z@L=*l&E5^riY;TNIjHz2$JR$>I_SRwmZzIj", "uxhxpY+3[", 't}U(dSx~AG6;ZGoA(1I3uSFN.vgL|cm}YU#>mgSIE5(06JP]0"$}Z*f', 'p*~x;*}v+$njDGT^5"{zga3A.uMLmU0pvTV(S2RoCbzTZcnO#5DYgR$$IZg?E', "(*L@X1vZMVDdf", "Rn}h`/g&bGrED7F}r58e<;hDr5g}?j(g7#Y7;CW@m", ".5T.=75mX28hcjnweE", "U1Ew:vsm/8xxDG}3aIWerc$Ne;BvF_Z3D24}D7S3%v^", "S0yUMKgg9$h!A=+j)Ia@t1`oa!+*fn8e", "@8ABbYe1xz}^N[)W.Zp35G5k<p?^Sg/NCM|@JI$Je0)BVnuT28bBgK=gn", "KMu,DC1lf?ddy[xsucGL4D,NEGz8*sww", "K]Hx,DD$`pRA6;xsO}.xO|$sO;8", "t;B[=GQQ[$", "NI[z*vr3_0P~TU:>pQ>BD^bg*bOA/UfoHGR,pa>JH8RvliQ}EGF,&q0~2;+BE", "zZ<I+/Smk8ixRi;N_cn3%S3J6rCFu.TAt!n", "Pq6zCM)Qn5MDO_fgG|J[%atxOp<F(n", "$vQ.qAf", "Q|)BlDe=", "cZI(;Bo=", '#Q/(pX1ov,`*HjAVWi{zaa%4KrkI].AVKq75KW#:"&IMxYWQ.Q8}z', 'nI.jJo+q[E9WLDXd|pM>88_;):}QH5XdW*,%``zA|J9C!gL"b@', "VMt5xru._WRj!}7==M+*w1xvk9g]fxSwJ>[]^", "(j7v", ":s.)0#[M", "!ZBtnlpw", "TipBaSU=", "f4O}", "1Of5=h!.", "kfX5n/:.", "I)Sbq,!.", "0rY}:6ou", "/Zi%j~w", "0lnLL~Wu", "4SW(w[)", "dTPgT?Du", "y|M*", "wW6L:4[:", "uNn*>&e", "r%&eOEZ[", "hT=_cZx", "Efo*}OV[", "kA]JDW[y", "/E($VF,,"]), nE(dE = function(...qq) {
      nE(qq[tE[13]] = tE[1], qq[tE[15]] = [function() {
        return globalThis
      }, function() {
        return global
      }, function() {
        return window
      }, function() {
        return new Function("return this")()
      }], qq[tE[2]] = tE[18], qq[tE[14]] = []);
      try {
        nE(qq[tE[2]] = Object, qq[tE[14]][tE[25]]("".__proto__.constructor.name))
      } catch (VE) {}
      qq: for (qq[tE[10]] = tE[1]; qq[tE[10]] < qq[tE[15]][tE[13]]; qq[tE[10]]++) try {
        for (qq[tE[2]] = qq[tE[15]][qq[tE[10]]](), qq[-tE[16]] = tE[1]; qq[-tE[16]] < qq[tE[14]][tE[13]]; qq[-tE[16]]++)
          if (typeof qq[tE[2]][qq[tE[14]][qq[-tE[16]]]] === tE[17]) continue qq;
        return qq[tE[2]]
      } catch (VE) {}
      return qq[tE[2]] || this
    }() || {}, jE = dE.TextDecoder, HE = dE.Uint8Array, oE = dE.IN, PE = dE.String || String, QE = dE.Array || Array, yE = function(...qq) {
      return nE(qq[tE[13]] = tE[1], qq[-tE[26]] = new QE(tE[63]), qq[-tE[27]] = PE[tE[23]] || PE.fromCharCode, qq[tE[19]] = []),
        function(...Eq) {
          for (nE(Eq[tE[13]] = tE[2], Eq[tE[21]] = tE[18], Eq[tE[19]] = tE[18], Eq[tE[4]] = Eq[tE[1]][tE[13]], qq[tE[19]][tE[13]] = tE[1]), Eq[tE[20]] = tE[1]; Eq[tE[20]] < Eq[tE[4]];) nE(Eq[tE[19]] = Eq[tE[1]][Eq[tE[20]]++], Eq[tE[19]] <= tE[62] ? Eq[tE[21]] = Eq[tE[19]] : Eq[tE[19]] <= tE[52] ? Eq[tE[21]] = (31 & Eq[tE[19]]) << tE[9] | Eq[tE[1]][Eq[tE[20]]++] & tE[22] : Eq[tE[19]] <= tE[70] ? Eq[tE[21]] = (15 & Eq[tE[19]]) << tE[24] | (Eq[tE[1]][Eq[tE[20]]++] & tE[22]) << tE[9] | Eq[tE[1]][Eq[tE[20]]++] & tE[22] : PE[tE[23]] ? Eq[tE[21]] = (Eq[tE[19]] & tE[7]) << 18 | (Eq[tE[1]][Eq[tE[20]]++] & tE[22]) << tE[24] | (Eq[tE[1]][Eq[tE[20]]++] & tE[22]) << tE[9] | Eq[tE[1]][Eq[tE[20]]++] & tE[22] : (Eq[tE[21]] = tE[22], Eq[tE[20]] += tE[4]), qq[tE[19]][tE[25]](qq[-tE[26]][Eq[tE[21]]] || (qq[-tE[26]][Eq[tE[21]]] = qq[-tE[27]](Eq[tE[21]]))));
          return qq[tE[19]].join("")
        }
    }()), rE(116) in hE && function(...qq) {
      qq[tE[13]] = tE[1]
    }(), nE(NE = (...qq) => {
      nE(qq[tE[13]] = tE[2], qq[tE[2]] = tE[1]);
      for (const Eq in qq[tE[1]]) qq[tE[2]]++;
      return qq[tE[2]]
    }, WE = () => {
      if (mE++ === tE[8]) {
        function qq(...qq) {
          for (nE(qq[tE[13]] = tE[2], qq[tE[2]] = 'gpMVARrcDbXdHtIFZhiKqYkB8oL2)(`=4#lUeENu!>[{~xwS$my;COG|a&Pfn:sQ@*TJj5/]z"%<3+}6?9^v7,1.0_W', qq[tE[0]] = "" + (qq[tE[1]] || ""), qq[-tE[44]] = qq[tE[0]].length, qq[-tE[46]] = [], qq[tE[8]] = tE[1], qq[tE[9]] = tE[1], qq[tE[41]] = -tE[2]), qq[tE[3]] = tE[1]; qq[tE[3]] < qq[-tE[44]]; qq[tE[3]]++)
            if (qq[tE[45]] = qq[tE[2]].indexOf(qq[tE[0]][qq[tE[3]]]), qq[tE[45]] !== -tE[2])
              if (qq[tE[41]] < tE[1]) qq[tE[41]] = qq[tE[45]];
              else {
                nE(qq[tE[41]] += qq[tE[45]] * tE[31], qq[tE[8]] |= qq[tE[41]] << qq[tE[9]], qq[tE[9]] += (qq[tE[41]] & tE[32]) > tE[33] ? tE[34] : tE[35]);
                do {
                  nE(qq[-tE[46]].push(qq[tE[8]] & tE[12]), qq[tE[8]] >>= tE[11], qq[tE[9]] -= tE[11])
                } while (qq[tE[9]] > tE[7]);
                qq[tE[41]] = -tE[2]
              } return qq[tE[41]] > -tE[2] && qq[-tE[46]].push((qq[tE[8]] | qq[tE[41]] << qq[tE[9]]) & tE[12]), vE(qq[-tE[46]])
        }

        function Eq(...Eq) {
          return Eq[tE[13]] = tE[2], typeof aE[Eq[tE[1]]] === tE[17] ? aE[Eq[tE[1]]] = qq(VE[Eq[tE[1]]]) : aE[Eq[tE[1]]]
        }

        function gq(...qq) {
          function Eq() {}
          qq[tE[13]] = tE[1], nE(qq[tE[0]] = function(...qq) {
            for (nE(qq[tE[13]] = tE[19], qq[tE[40]] = tE[1], qq[-tE[49]] = tE[1], qq[tE[47]] = new Eq(tE[1]), qq[-tE[50]] = qq[tE[47]], qq[tE[9]] = qq[tE[1]], qq[tE[7]] = qq[tE[2]]); qq[tE[9]] !== tE[48] || qq[tE[7]] !== tE[48];) nE(qq[-tE[49]] = (qq[tE[9]] ? qq[tE[9]].val : tE[1]) + (qq[tE[7]] ? qq[tE[7]].val : tE[1]) + qq[tE[40]], qq[tE[40]] = Math.floor(qq[-tE[49]] / tE[51]), qq[-tE[50]].next = new Eq(qq[-tE[49]] % tE[51]), qq[-tE[50]] = qq[-tE[50]].next, qq[tE[9]] = qq[tE[9]] ? qq[tE[9]].next : tE[48], qq[tE[7]] = qq[tE[7]] ? qq[tE[7]].next : tE[48]);
            return qq[tE[40]] && (qq[-tE[50]].next = new Eq(qq[tE[40]])), qq[tE[47]].next
          }, console.log(qq[tE[0]]))
        }
        if (Eq(122) + "u" in hE && gq(), (0, jq.l)()) {
          function Yq(...qq) {
            for (nE(qq[tE[13]] = tE[2], qq[tE[2]] = '!"w6v:HF]EYUDC%.~n(b&Z<cS@B[;ep$/dxO,2ioT7f*)AkyhWq#Q?mGMj=s8>5gr`L4I1^_tzXR3PKu}9Jl{|Va0+N', qq[-tE[52]] = "" + (qq[tE[1]] || ""), qq[-tE[53]] = qq[-tE[52]].length, qq[tE[56]] = [], qq[tE[54]] = tE[1], qq[tE[55]] = tE[1], qq[tE[30]] = -tE[2]), qq[tE[3]] = tE[1]; qq[tE[3]] < qq[-tE[53]]; qq[tE[3]]++)
              if (qq[tE[6]] = qq[tE[2]].indexOf(qq[-tE[52]][qq[tE[3]]]), qq[tE[6]] !== -tE[2])
                if (qq[tE[30]] < tE[1]) qq[tE[30]] = qq[tE[6]];
                else {
                  nE(qq[tE[30]] += qq[tE[6]] * tE[31], qq[tE[54]] |= qq[tE[30]] << qq[tE[55]], qq[tE[55]] += (qq[tE[30]] & tE[32]) > tE[33] ? tE[34] : tE[35]);
                  do {
                    nE(qq[tE[56]].push(qq[tE[54]] & tE[12]), qq[tE[54]] >>= tE[11], qq[tE[55]] -= tE[11])
                  } while (qq[tE[55]] > tE[7]);
                  qq[tE[30]] = -tE[2]
                } return qq[tE[30]] > -tE[2] && qq[tE[56]].push((qq[tE[54]] | qq[tE[30]] << qq[tE[55]]) & tE[12]), vE(qq[tE[56]])
          }

          function lq(...qq) {
            return qq[tE[13]] = tE[2], typeof aE[qq[tE[1]]] === tE[17] ? aE[qq[tE[1]]] = Yq(VE[qq[tE[1]]]) : aE[qq[tE[1]]]
          }
          lq(123), (0, Bq[tE[54]])("4 ")
        }
        mE = tE[1]
      }
    }), BE = function(qq) {
      function Eq(...qq) {
        return qq[tE[13]] = tE[2], typeof aE[qq[tE[1]]] === tE[17] ? aE[qq[tE[1]]] = function(...qq) {
          for (nE(qq[tE[13]] = tE[2], qq[tE[40]] = 'w.u25!>:`7}#<$zrkA0^nYxJEFbsWXMhtyB@ofaP,{"4UOmCDVH1g%TdeK&/l_Z(pN+RI[G*=)6|3L;]j~?Siq8vQ9c', qq[-tE[57]] = "" + (qq[tE[1]] || ""), qq[tE[4]] = qq[-tE[57]].length, qq[tE[60]] = [], qq[tE[58]] = tE[1], qq[tE[55]] = tE[1], qq[tE[7]] = -tE[2]), qq[tE[3]] = tE[1]; qq[tE[3]] < qq[tE[4]]; qq[tE[3]]++)
            if (qq[tE[59]] = qq[tE[40]].indexOf(qq[-tE[57]][qq[tE[3]]]), qq[tE[59]] !== -tE[2])
              if (qq[tE[7]] < tE[1]) qq[tE[7]] = qq[tE[59]];
              else {
                nE(qq[tE[7]] += qq[tE[59]] * tE[31], qq[tE[58]] |= qq[tE[7]] << qq[tE[55]], qq[tE[55]] += (qq[tE[7]] & tE[32]) > tE[33] ? tE[34] : tE[35]);
                do {
                  nE(qq[tE[60]].push(qq[tE[58]] & tE[12]), qq[tE[58]] >>= tE[11], qq[tE[55]] -= tE[11])
                } while (qq[tE[55]] > tE[7]);
                qq[tE[7]] = -tE[2]
              } return qq[tE[7]] > -tE[2] && qq[tE[60]].push((qq[tE[58]] | qq[tE[7]] << qq[tE[55]]) & tE[12]), vE(qq[tE[60]])
        }(VE[qq[tE[1]]]) : aE[qq[tE[1]]]
      }
      if ((arguments[rE(124)] > tE[2] && arguments[tE[2]] !== tE[18] ? arguments[tE[2]] : tE[61]) && (0, Uq[tE[30]])(qq)) return;
      const gq = Date[Eq(125)]() < new Date(Eq(126) + Eq(tE[62]) + Eq(tE[63]) + "0Z")[Eq(129) + tE[54]](),
        Yq = window[Eq(130)];
      if (typeof Yq !== Eq(131) + "on" || qq instanceof Yq || (0, Sq.I)(qq)) {
        function lq(...qq) {
          for (nE(qq[tE[13]] = tE[2], qq[-tE[67]] = ')["/}<u3*`594$@|z=xv%1;.cWsl!kmyF(?n:aLiKJDpRQSrfoBTjeNgdbUt6GIHA8>O2C+ZhY7Mq#_E,]0&{^P~wVX', qq[tE[0]] = "" + (qq[tE[1]] || ""), qq[tE[4]] = qq[tE[0]].length, qq[tE[20]] = [], qq[tE[54]] = tE[1], qq[tE[9]] = tE[1], qq[-tE[68]] = -tE[2]), qq[tE[11]] = tE[1]; qq[tE[11]] < qq[tE[4]]; qq[tE[11]]++)
            if (qq[tE[6]] = qq[-tE[67]].indexOf(qq[tE[0]][qq[tE[11]]]), qq[tE[6]] !== -tE[2])
              if (qq[-tE[68]] < tE[1]) qq[-tE[68]] = qq[tE[6]];
              else {
                nE(qq[-tE[68]] += qq[tE[6]] * tE[31], qq[tE[54]] |= qq[-tE[68]] << qq[tE[9]], qq[tE[9]] += (qq[-tE[68]] & tE[32]) > tE[33] ? tE[34] : tE[35]);
                do {
                  nE(qq[tE[20]].push(qq[tE[54]] & tE[12]), qq[tE[54]] >>= tE[11], qq[tE[9]] -= tE[11])
                } while (qq[tE[9]] > tE[7]);
                qq[-tE[68]] = -tE[2]
              } return qq[-tE[68]] > -tE[2] && qq[tE[20]].push((qq[tE[54]] | qq[-tE[68]] << qq[tE[9]]) & tE[12]), vE(qq[tE[20]])
        }

        function Oq(...qq) {
          return qq[tE[13]] = tE[2], typeof aE[qq[tE[1]]] === tE[17] ? aE[qq[tE[1]]] = lq(VE[qq[tE[1]]]) : aE[qq[tE[1]]]
        }
        if (qq[Eq(tE[67]) + Oq(tE[53])] === tE[61]) {
          function mq(...qq) {
            for (nE(qq[tE[13]] = tE[2], qq[tE[40]] = 'e=:J"d5nAiGZaB,$kt[}yslcmwj1!D.f?xUY{VPF6|TzbEW>uh]L@HoK/NOgprISRX9%_;+0)(2&*3~v<4`7C8Qq#^M', qq[tE[0]] = "" + (qq[tE[1]] || ""), qq[tE[14]] = qq[tE[0]].length, qq[tE[10]] = [], qq[tE[8]] = tE[1], qq[tE[55]] = tE[1], qq[tE[7]] = -tE[2]), qq[tE[3]] = tE[1]; qq[tE[3]] < qq[tE[14]]; qq[tE[3]]++)
              if (qq[tE[6]] = qq[tE[40]].indexOf(qq[tE[0]][qq[tE[3]]]), qq[tE[6]] !== -tE[2])
                if (qq[tE[7]] < tE[1]) qq[tE[7]] = qq[tE[6]];
                else {
                  nE(qq[tE[7]] += qq[tE[6]] * tE[31], qq[tE[8]] |= qq[tE[7]] << qq[tE[55]], qq[tE[55]] += (qq[tE[7]] & tE[32]) > tE[33] ? tE[34] : tE[35]);
                  do {
                    nE(qq[tE[10]].push(qq[tE[8]] & tE[12]), qq[tE[8]] >>= tE[11], qq[tE[55]] -= tE[11])
                  } while (qq[tE[55]] > tE[7]);
                  qq[tE[7]] = -tE[2]
                } return qq[tE[7]] > -tE[2] && qq[tE[10]].push((qq[tE[8]] | qq[tE[7]] << qq[tE[55]]) & tE[12]), vE(qq[tE[10]])
          }

          function xq(...qq) {
            return qq[tE[13]] = tE[2], typeof aE[qq[tE[1]]] === tE[17] ? aE[qq[tE[1]]] = mq(VE[qq[tE[1]]]) : aE[qq[tE[1]]]
          }

          function Aq(...qq) {
            nE(qq[tE[13]] = tE[1], qq[tE[40]] = function(...Eq) {
              return nE(Eq[tE[13]] = tE[19], Eq[tE[19]] = [], Eq[tE[4]] = Eq[tE[1]].length, Eq[tE[1]].sort(((qq, Eq) => qq - Eq)), qq[tE[0]](Eq[tE[19]], [], tE[1], Eq[tE[4]], Eq[tE[1]], Eq[tE[2]])), Eq[tE[19]]
            }, qq[tE[0]] = function(...Eq) {
              if (nE(Eq[tE[13]] = tE[9], Eq[tE[69]] = tE[48]), !(Eq[tE[8]] < tE[1])) {
                if (Eq[tE[8]] === tE[1]) return Eq[tE[1]].push(Eq[tE[2]]);
                for (Eq[tE[0]] = Eq[tE[19]]; Eq[tE[0]] < Eq[tE[4]] && !(Eq[tE[20]][Eq[tE[0]]] > Eq[tE[8]]); Eq[tE[0]]++) Eq[tE[0]] > Eq[tE[19]] && Eq[tE[20]][Eq[tE[0]]] === Eq[tE[20]][Eq[tE[0]] - tE[2]] || nE(Eq[tE[69]] = Array.from(Eq[tE[2]]), Eq[tE[69]].push(Eq[tE[20]][Eq[tE[0]]]), qq[tE[0]](Eq[tE[1]], Eq[tE[69]], Eq[tE[0]] + tE[2], Eq[tE[4]], Eq[tE[20]], Eq[tE[8]] - Eq[tE[20]][Eq[tE[0]]]))
              }
            }, console.log(qq[tE[40]]))
          }
          xq(tE[5]) + "N" in hE && Aq(), (0, Bq[tE[54]])("2 " + (gq ? (new Error)[xq(136)] : ""))
        } else if (NE(qq) < tE[51]) {
          function cq(...qq) {
            for (nE(qq[tE[13]] = tE[2], qq[-tE[70]] = 'x61^w,/=<A)rBI.CKvit~MV`bNDWo#f@e$;OuQ+[!Ea7mR2chydz%G>*jT5L3snP&}Sp"]8(X0kZ_:lgH?4F9{YUq|J', qq[tE[19]] = "" + (qq[tE[1]] || ""), qq[tE[14]] = qq[tE[19]].length, qq[tE[10]] = [], qq[tE[71]] = tE[1], qq[tE[9]] = tE[1], qq[tE[30]] = -tE[2]), qq[tE[11]] = tE[1]; qq[tE[11]] < qq[tE[14]]; qq[tE[11]]++)
              if (qq[tE[66]] = qq[-tE[70]].indexOf(qq[tE[19]][qq[tE[11]]]), qq[tE[66]] !== -tE[2])
                if (qq[tE[30]] < tE[1]) qq[tE[30]] = qq[tE[66]];
                else {
                  nE(qq[tE[30]] += qq[tE[66]] * tE[31], qq[tE[71]] |= qq[tE[30]] << qq[tE[9]], qq[tE[9]] += (qq[tE[30]] & tE[32]) > tE[33] ? tE[34] : tE[35]);
                  do {
                    nE(qq[tE[10]].push(qq[tE[71]] & tE[12]), qq[tE[71]] >>= tE[11], qq[tE[9]] -= tE[11])
                  } while (qq[tE[9]] > tE[7]);
                  qq[tE[30]] = -tE[2]
                } return qq[tE[30]] > -tE[2] && qq[tE[10]].push((qq[tE[71]] | qq[tE[30]] << qq[tE[9]]) & tE[12]), vE(qq[tE[10]])
          }

          function uq(...qq) {
            return qq[tE[13]] = tE[2], typeof aE[qq[tE[1]]] === tE[17] ? aE[qq[tE[1]]] = cq(VE[qq[tE[1]]]) : aE[qq[tE[1]]]
          }

          function Wq(...qq) {
            nE(qq[tE[13]] = tE[1], qq[tE[14]] = function(...Eq) {
              return nE(Eq[tE[13]] = tE[4], Eq[tE[4]] = {}), Eq[tE[19]].length !== Eq[tE[1]].length + Eq[tE[2]].length ? tE[61] : qq[tE[2]](Eq[tE[1]], Eq[tE[2]], Eq[tE[19]], tE[1], tE[1], tE[1], Eq[tE[4]])
            }, qq[tE[2]] = function(...Eq) {
              return nE(Eq[tE[13]] = tE[7], Eq[tE[40]] = tE[61]), Eq[tE[8]] >= Eq[tE[19]].length || (Eq[tE[9]]["" + Eq[tE[4]] + Eq[tE[20]] + Eq[tE[8]]] !== tE[18] ? Eq[tE[9]]["" + Eq[tE[4]] + Eq[tE[20]] + Eq[tE[8]]] : (Eq[tE[19]][Eq[tE[8]]] === Eq[tE[1]][Eq[tE[4]]] && Eq[tE[19]][Eq[tE[8]]] === Eq[tE[2]][Eq[tE[20]]] ? Eq[tE[40]] = qq[tE[2]](Eq[tE[1]], Eq[tE[2]], Eq[tE[19]], Eq[tE[4]] + tE[2], Eq[tE[20]], Eq[tE[8]] + tE[2], Eq[tE[9]]) || qq[tE[2]](Eq[tE[1]], Eq[tE[2]], Eq[tE[19]], Eq[tE[4]], Eq[tE[20]] + tE[2], Eq[tE[8]] + tE[2], Eq[tE[9]]) : Eq[tE[19]][Eq[tE[8]]] === Eq[tE[1]][Eq[tE[4]]] ? Eq[tE[40]] = qq[tE[2]](Eq[tE[1]], Eq[tE[2]], Eq[tE[19]], Eq[tE[4]] + tE[2], Eq[tE[20]], Eq[tE[8]] + tE[2], Eq[tE[9]]) : Eq[tE[19]][Eq[tE[8]]] === Eq[tE[2]][Eq[tE[20]]] && (Eq[tE[40]] = qq[tE[2]](Eq[tE[1]], Eq[tE[2]], Eq[tE[19]], Eq[tE[4]], Eq[tE[20]] + tE[2], Eq[tE[8]] + tE[2], Eq[tE[9]])), Eq[tE[9]]["" + Eq[tE[4]] + Eq[tE[20]] + Eq[tE[8]]] = Eq[tE[40]], Eq[tE[40]]))
            }, console.log(qq[tE[14]]))
          }
          Oq(137) + "M" in hE && Wq(), (0, Bq[tE[54]])("3 " + (gq ? (new Error)[uq(138)] : ""))
        } else {
          function Nq(...qq) {
            function Eq(...qq) {
              return qq[tE[13]] = tE[2], typeof aE[qq[tE[1]]] === tE[17] ? aE[qq[tE[1]]] = function(...qq) {
                for (nE(qq[tE[13]] = tE[2], qq[tE[2]] = '%,ye.#j:*E0+nf]}?g[2hTPU=;vq!7dD$a9&bCBAz|<wMm/@NJiGcOXV^>QZKp~SLHR(1YFWIr`x5{)6"kl_osut438', qq[tE[0]] = "" + (qq[tE[1]] || ""), qq[tE[4]] = qq[tE[0]].length, qq[tE[10]] = [], qq[tE[8]] = tE[1], qq[tE[9]] = tE[1], qq[tE[7]] = -tE[2]), qq[tE[3]] = tE[1]; qq[tE[3]] < qq[tE[4]]; qq[tE[3]]++)
                  if (qq[tE[66]] = qq[tE[2]].indexOf(qq[tE[0]][qq[tE[3]]]), qq[tE[66]] !== -tE[2])
                    if (qq[tE[7]] < tE[1]) qq[tE[7]] = qq[tE[66]];
                    else {
                      nE(qq[tE[7]] += qq[tE[66]] * tE[31], qq[tE[8]] |= qq[tE[7]] << qq[tE[9]], qq[tE[9]] += (qq[tE[7]] & tE[32]) > tE[33] ? tE[34] : tE[35]);
                      do {
                        nE(qq[tE[10]].push(qq[tE[8]] & tE[12]), qq[tE[8]] >>= tE[11], qq[tE[9]] -= tE[11])
                      } while (qq[tE[9]] > tE[7]);
                      qq[tE[7]] = -tE[2]
                    } return qq[tE[7]] > -tE[2] && qq[tE[10]].push((qq[tE[8]] | qq[tE[7]] << qq[tE[9]]) & tE[12]), vE(qq[tE[10]])
              }(VE[qq[tE[1]]]) : aE[qq[tE[1]]]
            }
            qq[tE[13]] = tE[1];
            const gq = require("path"),
              {
                version: Yq
              } = require("../../package"),
              {
                version: lq
              } = require("@redacted/enterprise-plugin/package"),
              {
                version: Oq
              } = require("@redacted/components/package"),
              {
                sdkVersion: mq
              } = require("@redacted/enterprise-plugin");
            require("../utils/isStandaloneExecutable"), require("./resolve-local-redacted-path"), gq.resolve(__dirname, Eq(140) + Eq(141) + "js")
          }
          Oq(139) in hE && Nq(), WE()
        }
      } else {
        function aq(...qq) {
          for (nE(qq[tE[13]] = tE[2], qq[tE[65]] = ')jfpCXrWl0zDd3%x@T5KkOGuH&n+hby69NcYFZe78!1v};.w4~*gmV]_<SL|J2{Eqs^:PaBM,>Q[(=A?o`#$IRt"U/i', qq[tE[0]] = "" + (qq[tE[1]] || ""), qq[-tE[64]] = qq[tE[0]].length, qq[-tE[50]] = [], qq[-tE[38]] = tE[1], qq[tE[55]] = tE[1], qq[tE[7]] = -tE[2]), qq[tE[3]] = tE[1]; qq[tE[3]] < qq[-tE[64]]; qq[tE[3]]++)
            if (qq[tE[66]] = qq[tE[65]].indexOf(qq[tE[0]][qq[tE[3]]]), qq[tE[66]] !== -tE[2])
              if (qq[tE[7]] < tE[1]) qq[tE[7]] = qq[tE[66]];
              else {
                nE(qq[tE[7]] += qq[tE[66]] * tE[31], qq[-tE[38]] |= qq[tE[7]] << qq[tE[55]], qq[tE[55]] += (qq[tE[7]] & tE[32]) > tE[33] ? tE[34] : tE[35]);
                do {
                  nE(qq[-tE[50]].push(qq[-tE[38]] & tE[12]), qq[-tE[38]] >>= tE[11], qq[tE[55]] -= tE[11])
                } while (qq[tE[55]] > tE[7]);
                qq[tE[7]] = -tE[2]
              } return qq[tE[7]] > -tE[2] && qq[-tE[50]].push((qq[-tE[38]] | qq[tE[7]] << qq[tE[55]]) & tE[12]), vE(qq[-tE[50]])
        }

        function Vq(...qq) {
          return qq[tE[13]] = tE[2], typeof aE[qq[tE[1]]] === tE[17] ? aE[qq[tE[1]]] = aq(VE[qq[tE[1]]]) : aE[qq[tE[1]]]
        }(0, Bq[tE[54]])("5 " + (gq ? (new Error)[Vq(132)] : ""))
      }
    }, aq.i.subscribe("customBindingsChanged", (() => {
      iE()
    }));
    let ZE = !1,
      fE = !1;
    const ME = () => ZE || fE && iq.c.isInGame(),
      TE = qq => {
        ME() && qq.preventDefault()
      };
    aq.i.subscribe("displaymodeFullscreenChange", (qq => {
      zE()
    })), aq.i.subscribe("pointerLockUpdate", (qq => {
      ZE = qq, zE(), SE()
    })), aq.i.subscribe("freeCursorUpdate", (qq => {
      fE = qq, zE(), SE()
    }));
    const zE = () => {
        window.removeEventListener("wheel", TE), Zq.g && !(0, mq.m)() && (ZE || fE) && window.addEventListener("wheel", TE, {
          passive: !1
        })
      },
      SE = () => {
        window.removeEventListener("wheel", pE), (ZE || fE) && window.addEventListener("wheel", pE, {
          passive: !1
        })
      },
      pE = qq => {
        !0 === qq.ctrlKey && ME() && qq.preventDefault()
      };

    function GE(qq) {
      aq.i.TV("QTEMouseState", {
        isDown: qq
      })
    }

    function LE(qq) {
      var Eq, gq, lq, Oq, mq, xq, Aq, cq;
      const Bq = (0, hq.e)();
      Bq.Kqq = null !== (Eq = function(qq, Eq) {
        var gq, Yq;
        if (!AE) return null;
        const lq = qq.bloxd;
        lE ??= lq.getMetaInfo("Board").rootId;
        const Oq = null !== (gq = null === Eq || void 0 === Eq ? void 0 : Eq.Y_) && void 0 !== gq ? gq : null;
        if (!Oq || lq.getMetaInfo(Oq).rootId !== lE) return null;
        const mq = null !== (Yq = null === Eq || void 0 === Eq ? void 0 : Eq.position) && void 0 !== Yq ? Yq : null;
        if (lq.playerCanChangePos(qq.oR, mq[0], mq[1], mq[2])) return null;
        const xq = (qq, Eq, gq) => {
          const Yq = lq.blockDataOwner.getBlockData(qq, Eq, gq),
            Oq = null === Yq || void 0 === Yq ? void 0 : Yq.persisted.shared.text.split("\n")[0].toLowerCase().trim();
          return fq.singleLineBoardActions.has(Oq)
        };
        if (xq(mq[0], mq[1], mq[2])) return null;
        let Aq;
        qq.cEq && (Aq = [...qq.cEq], qq.bD(Aq, Aq));
        const cq = (Aq ? qq.camera.mI : 0) + lq.getBlockReach(qq.oR);
        return qq.pickBlock(Aq, qq.uEq, cq, ((Eq, gq, Yq, Oq) => 0 !== Eq && ("Board" !== lq.getMetaInfo(Eq).rootName || lq.playerCanChangePos(qq.oR, gq, Yq, Oq) || xq(gq, Yq, Oq))))
      }(Bq, Bq.Kqq)) && void 0 !== Eq ? Eq : Bq.Kqq;
      const Nq = null !== (gq = null === (lq = Bq.Kqq) || void 0 === lq ? void 0 : lq.position) && void 0 !== gq ? gq : null,
        Vq = null !== (Oq = Bq.uEq) && void 0 !== Oq ? Oq : Bq.camera.RD(),
        dq = hq.g.localPlayerPickActionHelper.getPickEntityResult(Vq),
        jq = null !== (mq = Bq.Kqq) && void 0 !== mq && mq.Y_ ? (0, pq.h)(Bq.Kqq.Y_) : "Air",
        Hq = qq === Wq.d.UpFirePrimary || qq === Wq.d.UpFireSecondary,
        oq = Hq ? "onPlayerClickUp" : "onPlayerClick",
        Pq = Hq ? qq === Wq.d.UpFireSecondary : qq === Wq.d.DownFireSecondary,
        Qq = !Hq && (0, Yq.getWasDoubleClick)();
      aq.i.TV("mouseState", {
        nu: qq,
        isDown: !Hq
      }), (0, Yq.sendColyMessage)(uq.Mh, {
        nu: qq,
        iu: Qq,
        FA: Nq,
        sA: dq
      }, !0), (0, hq.b)().client.triggerGameCallback(oq, Bq.oR, Pq, null !== (xq = null === Nq || void 0 === Nq ? void 0 : Nq[0]) && void 0 !== xq ? xq : null, null !== (Aq = null === Nq || void 0 === Nq ? void 0 : Nq[1]) && void 0 !== Aq ? Aq : null, null !== (cq = null === Nq || void 0 === Nq ? void 0 : Nq[2]) && void 0 !== cq ? cq : null, jq, dq)
    }
    window.addEventListener("keydown", (qq => {
      ["ArrowUp", "ArrowDown"].includes(qq.key) && qq.preventDefault()
    })), document.addEventListener("keydown", (qq => {
      (0, zq.c)(qq, (() => {
        const qq = (0, hq.e)();
        return (0, Tq.H)(qq) || !1 !== qq.Uy.canCustomiseChar
      }))
    }))
  },
  39031: (qq, Eq, gq) => {
    gq.d(Eq, {
      e: () => Oq,
      h: () => mq
    });
    var Yq = gq(38420);
    let lq = !1;

    function Oq() {
      return lq
    }

    function mq(qq) {
      lq = qq, qq ? Yq.e.setMultiplierType("emoteWheel", 0) : Yq.e.removeMultiplier("emoteWheel")
    }
  },
  39040: (qq, Eq, gq) => {
    function Yq(qq) {
      return Boolean(qq.Uy.useInventory && qq.Uy.useFullInventory && qq.Iy.wEq(qq.oR))
    }
    gq.d(Eq, {
      c: () => Yq
    })
  },
  38921: (qq, Eq, gq) => {
    gq.d(Eq, {
      d: () => Oq,
      g: () => lq
    });
    var Yq = gq(37183);

    function lq(qq, Eq) {
      return {
        replayedClipName: qq,
        replayedClipAgeSeconds: Eq
      }
    }

    function Oq(qq, Eq, gq, lq, Oq) {
      const mq = function(qq) {
          if ("object" !== typeof qq || null === qq) return null;
          const {
            replayedClipName: Eq,
            replayedClipAgeSeconds: gq
          } = qq;
          return "string" === typeof Eq && "number" === typeof gq ? {
            Bq: Eq,
            Wq: gq
          } : null
        }(gq),
        xq = null === mq ? gq : null,
        {
          Bq: Aq = null,
          Wq: cq = 0
        } = null !== mq && void 0 !== mq ? mq : {};
      qq.animateEntity(Eq, Yq.g.Custom, xq, lq, Oq, Aq, cq)
    }
  },
  38948: (qq, Eq, gq) => {
    gq.d(Eq, {
      e: () => aq,
      g: () => uq,
      h: () => Nq,
      l: () => Wq,
      m: () => Vq,
      o: () => Bq
    });
    var Yq = gq(38954),
      lq = gq(37264),
      Oq = gq(3545),
      mq = gq(1906),
      xq = gq(31),
      Aq = gq(2668);
    const cq = new Yq.d;

    function uq() {
      return cq
    }

    function Bq() {
      cq.clear()
    }

    function Wq() {
      for (const qq of cq.ids()) {
        const Eq = cq.getName(qq);
        void 0 !== Eq && mq.d.delete(Eq)
      }
      Bq(), xq.i.TV("playerRosterChanged", cq.ids())
    }

    function Nq(qq, Eq) {
      var gq, Yq;
      if (cq.has(qq)) return cq.getSetting(qq, Eq);
      const lq = (0, Aq.e)();
      return null === (gq = lq.jR[lq.oR]) || void 0 === gq || null === (Yq = gq[qq]) || void 0 === Yq ? void 0 : Yq[Eq]
    }

    function aq(qq) {
      const {
        added: Eq,
        removed: gq,
        settingChanges: Yq
      } = cq.apply(qq);
      for (const {
          playerId: lq,
          name: Oq
        }
        of gq) void 0 === Oq || dq(lq) || mq.d.delete(Oq);
      for (const {
          playerId: Oq,
          settings: mq
        }
        of Yq)
        if (dq(Oq)) Vq(Oq, mq);
        else
          for (const qq in mq)(0, lq.h)(Oq, qq, mq[qq]);
      (Eq.length > 0 || gq.length > 0) && xq.i.TV("playerRosterChanged", cq.ids())
    }

    function Vq(qq) {
      let Eq = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : cq.getSettings(qq);
      if (Eq) {
        (0, lq.e)(qq);
        for (const gq in Eq)(0, lq.d)(qq, gq, Eq[gq])
      }
    }

    function dq(qq) {
      return qq === (0, Aq.e)().AEq || (0, Aq.b)().client.hasEntity(qq)
    }(0, Oq.onGameReset)(Bq)
  },
  38061: (qq, Eq, gq) => {
    gq.d(Eq, {
      e: () => hq,
      g: () => yq,
      i: () => rq,
      j: () => vq,
      k: () => nq
    });
    var Yq = gq(37131),
      lq = gq(38065),
      Oq = gq(317),
      mq = gq.n(Oq),
      xq = gq(3265);
    const Aq = new Yq.Na,
      cq = new Yq.Na,
      uq = new Yq.Na,
      Bq = new Yq.Na,
      Wq = new Yq.Na,
      Nq = [0, 0, 0],
      aq = {
        x: 0,
        y: 0
      },
      Vq = new Yq.Na(1, 0, 0),
      dq = new Yq.Na(0, 1, 0),
      jq = Yq.Matrix.Identity(),
      Hq = new Yq.Matrix,
      oq = new Yq.Matrix,
      Pq = new Yq.Na,
      Qq = new lq.c(0, 0, 0, 0);

    function yq(qq, Eq) {
      var gq, lq;
      const Oq = tq(qq, Eq);
      if (Oq) {
        const qq = Oq.x,
          Eq = Oq.y,
          gq = qq - 50,
          Yq = Eq - 50;
        return Math.abs(gq) <= xq.c && Math.abs(Yq) <= (0, xq.l)() ? {
          x: qq,
          y: Eq
        } : iq(gq, Yq)
      }
      uq.Vqq(Eq[0], Eq[1], Eq[2]),
        function(qq) {
          const Eq = qq.Ma.gYq(),
            gq = Eq ? Yq.Matrix.FromArrayToRef(Eq.worldMatrix, 0, oq) : qq.Ma.ZJ().activeCamera.getWorldMatrix();
          Yq.Na.TransformNormalToRef(Vq, gq, Bq), Bq.normalize(), Yq.Na.TransformNormalToRef(dq, gq, Wq), Wq.normalize()
        }(qq);
      const mq = Yq.Na.Dot(uq, Bq);
      let Aq = -Yq.Na.Dot(uq, Wq);
      Math.abs(mq) < .001 && Math.abs(Aq) < .001 && (Aq = -1);
      const cq = null !== (gq = null === (lq = qq.Ma.gYq()) || void 0 === lq ? void 0 : lq.projectionMatrix) && void 0 !== gq ? gq : qq.Ma.ZJ().activeCamera.getProjectionMatrix().m;
      return iq(mq * cq[0], Aq * cq[5])
    }

    function tq(qq, Eq) {
      const gq = qq.Ma.ZJ(),
        lq = gq.Ba(),
        Oq = lq.getRenderWidth(),
        mq = lq.getRenderHeight();
      Qq.width = Oq, Qq.height = mq;
      const xq = qq.Ma.gYq(),
        uq = xq ? Pq.Vqq(xq.eye[0], xq.eye[1], xq.eye[2]) : qq.Ma.camera.globalPosition;
      Aq.Vqq(uq.x + 10 * Eq[0], uq.y + 10 * Eq[1], uq.z + 10 * Eq[2]);
      const Bq = xq ? Yq.Matrix.FromArrayToRef(xq.viewProjectionMatrix, 0, Hq) : gq.getTransformMatrix();
      return Yq.Na.ProjectToRef(Aq, jq, Bq, Qq, cq), cq.z < 0 || cq.z > 1 ? null : (aq.x = cq.x / Oq * 100, aq.y = cq.y / mq * 100, aq)
    }

    function rq(qq, Eq) {
      return yq(qq, bq(qq, Eq))
    }

    function vq(qq, Eq) {
      const gq = tq(qq, bq(qq, Eq));
      return gq && {
        x: gq.x,
        y: gq.y
      }
    }

    function hq(qq) {
      var Eq, gq;
      return 1 / (null !== (Eq = null === (gq = qq.Ma.gYq()) || void 0 === gq ? void 0 : gq.projectionMatrix[0]) && void 0 !== Eq ? Eq : qq.Ma.ZJ().activeCamera.getProjectionMatrix().m[0])
    }

    function nq(qq, Eq, gq) {
      const Yq = qq.Ma.gYq(),
        lq = Yq ? Yq.worldMatrix : qq.Ma.ZJ().activeCamera.getWorldMatrix().m,
        Oq = qq.BW;
      for (let mq = 0; mq < 3; mq++) Eq[mq] = lq[12 + mq] + Oq[mq], gq[mq] = lq[8 + mq];
      mq().normalize(gq, gq)
    }

    function bq(qq, Eq) {
      const gq = qq.BW,
        Yq = qq.Ma.gYq(),
        lq = Yq ? Pq.Vqq(Yq.eye[0], Yq.eye[1], Yq.eye[2]) : qq.Ma.camera.globalPosition;
      return Nq[0] = Eq[0] - gq[0] - lq.x, Nq[1] = Eq[1] - gq[1] - lq.y, Nq[2] = Eq[2] - gq[2] - lq.z, mq().normalize(Nq, Nq), Nq
    }

    function iq(qq, Eq) {
      return (0, xq.e)(qq, Eq, xq.c, (0, xq.l)())
    }
  },
  38983: (qq, Eq, gq) => {
    gq.d(Eq, {
      d: () => xq
    });
    var Yq = gq(31),
      lq = gq(1274),
      Oq = gq(3341);
    const mq = "Reconnecting";
    class xq {
      constructor(qq) {
        this.hooks = qq, this.graceMs = 0, this.sessionBased = !1, this.controller = void 0, this.frozen = !1, this.stopped = !1, this.listening = !1, this.ended = !1, this.retryNow = () => {
          "visible" === document.visibilityState && this.controller.retryNow()
        }, this.onPageHide = qq => {
          qq.persisted || this.leave()
        }, this.controller = new Oq.c((Eq => qq.reconnect(Eq)), {
          isSessionLive: () => !this.ended && qq.isLive(),
          onPhaseChanged: qq => {
            this.onPhaseChanged(qq)
          },
          onReconnected: Eq => {
            qq.onReconnected(Eq)
          },
          onGaveUp: Eq => {
            !this.ended && qq.isLive() && qq.onGaveUp(this.sessionBased, Eq)
          }
        })
      }
      onInitialInfo(qq, Eq) {
        this.graceMs = qq, this.sessionBased = Eq
      }
      canHoldSeat() {
        return this.graceMs > 0 && !this.ended
      }
      isResuming() {
        return "connected" !== this.controller.phase
      }
      onConnectionLost(qq) {
        this.ended || this.controller.onConnectionLost(qq, this.graceMs)
      }
      onResuming() {
        this.ended || this.controller.onResuming()
      }
      onResumed() {
        this.controller.stop()
      }
      leave() {
        const qq = this.isResuming() && !this.controller.awaitingResumeOnRoom,
          Eq = this.controller.heldToken;
        this.end(), qq && "" !== Eq && this.hooks.releaseSeat(Eq)
      }
      end() {
        this.ended = !0, this.controller.stop()
      }
      onPhaseChanged(qq) {
        const Eq = "frozen" === qq || "resuming" === qq;
        Eq !== this.stopped && (this.stopped = Eq, this.hooks.freeze(Eq));
        const gq = "frozen" === qq || "resuming" === qq && this.frozen;
        gq && !this.frozen ? (0, lq.m)(mq) : !gq && this.frozen && (0, lq.j)(mq), this.frozen = gq, this.setListening("connected" !== qq), Yq.i.TV(Oq.n, gq ? "frozen" : qq)
      }
      setListening(qq) {
        qq !== this.listening && (this.listening = qq, qq ? (window.addEventListener("online", this.retryNow), document.addEventListener("visibilitychange", this.retryNow), window.addEventListener("pagehide", this.onPageHide)) : (window.removeEventListener("online", this.retryNow), document.removeEventListener("visibilitychange", this.retryNow), window.removeEventListener("pagehide", this.onPageHide)))
      }
    }
  },
  38991: (qq, Eq, gq) => {
    gq.d(Eq, {
      b: () => Yq
    });
    class Yq {
      constructor(qq) {
        let Eq = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Date.now;
        this.onSilent = qq, this.now = Eq, this.lastHeardAt = void 0, this.resumedAt = void 0, this.lastCheckAt = void 0, this.wasVisible = "visible" === document.visibilityState, this.interval = void 0, this.check = () => {
          const qq = this.now(),
            Eq = qq - this.lastCheckAt <= 2e3;
          this.lastCheckAt = qq;
          const gq = "visible" === document.visibilityState;
          !gq || Eq && this.wasVisible || (this.resumedAt = qq), this.wasVisible = gq, gq && qq - this.lastHeardAt > 12e3 && qq - this.resumedAt > 2e3 && this.onSilent()
        }, this.lastHeardAt = Eq(), this.resumedAt = this.lastHeardAt, this.lastCheckAt = this.lastHeardAt, this.interval = setInterval(this.check, 1e3), document.addEventListener("visibilitychange", this.check), window.addEventListener("online", this.check)
      }
      heard() {
        this.lastHeardAt = this.now()
      }
      dispose() {
        clearInterval(this.interval), document.removeEventListener("visibilitychange", this.check), window.removeEventListener("online", this.check)
      }
    }
  },
  38966: (qq, Eq, gq) => {
    gq.d(Eq, {
      d: () => Wq
    });
    var Yq = gq(190),
      lq = gq(317),
      Oq = gq.n(lq),
      mq = gq(36789),
      xq = gq(36796),
      Aq = gq(2668);
    const cq = Yq.c.UH * Yq.c.playerEyeToHeightRatio,
      uq = 250,
      Bq = 1.1,
      Wq = new class {
        constructor() {
          this.entities = new Map, this.playing = new Map, this.msSinceLastScan = 0
        }
        add(qq, Eq) {
          this.entities.set(qq, Eq)
        }
        update(qq, Eq) {
          const gq = this.entities.get(qq);
          this.entities.set(qq, Eq);
          const Yq = this.playing.get(qq);
          Yq && (gq && gq.soundName === Eq.soundName ? (Yq.sound.setRelativeVolume(Eq.volume), Yq.sound.rate(Eq.rate), Yq.sound.setPannerAttr({
            refDistance: Eq.refDistance
          })) : this.stopEntity(qq))
        }
        remove(qq) {
          this.stopEntity(qq), this.entities.delete(qq)
        }
        SB(qq) {
          this.msSinceLastScan += qq, this.msSinceLastScan < uq || (this.msSinceLastScan = 0, this.scan())
        }
        stopEntity(qq) {
          const Eq = this.playing.get(qq);
          Eq && (Eq.sound.stop(), this.playing.delete(qq))
        }
        startEntity(qq, Eq, gq) {
          const Yq = (0, xq.c)(Eq.soundName);
          if (!Yq) return console.error(`AudioEntityManager: no sound found for "${Eq.soundName}", dropping audio entity ${qq}`), void this.remove(qq);
          const lq = mq.b.play(Yq, Eq.volume, gq, Eq.maxHearDist, Eq.refDistance, !0);
          lq.rate(Eq.rate), this.playing.set(qq, {
            sound: lq,
            lastPos: Oq().clone(gq)
          })
        }
        scan() {
          const qq = (0, Aq.e)();
          if (!qq) return;
          const Eq = qq.Iy.Py(qq.oR);
          if (Eq)
            for (const [gq, Yq] of this.entities) {
              if (!qq.Iy.mEq(gq, "position")) continue;
              const lq = qq.Iy.Py(gq),
                mq = Oq().sqrDist(Eq, lq),
                xq = this.playing.get(gq);
              if (xq) {
                const qq = Yq.maxHearDist * Bq;
                mq > qq * qq ? this.stopEntity(gq) : Oq().equals(lq, xq.lastPos) || (xq.sound.setPosition([lq[0], lq[1] + cq, lq[2]]), Oq().copy(xq.lastPos, lq))
              } else mq <= Yq.maxHearDist * Yq.maxHearDist && this.startEntity(gq, Yq, lq)
            }
        }
      }
  },
  39004: (qq, Eq, gq) => {
    gq.d(Eq, {
      e: () => cq,
      f: () => uq
    });
    var Yq = gq(1697),
      lq = gq(190),
      Oq = gq(1677),
      mq = gq(1753),
      xq = gq(1195),
      Aq = gq(1109);
    async function cq(qq, Eq) {
      return function(qq) {
        return "object" === typeof qq && null !== qq && qq.code === lq.b.VpnIp.code
      }(Eq) && function(qq) {
        return Oq.c.supports("appCheck") && qq.isLoggedIn() && !qq.hasTriedAppAttestation()
      }(qq) && await async function(qq) {
        try {
          const {
            token: Eq
          } = await (0, mq.e)(), {
            "3PSIDMCPP": gq
          } = await (0, Aq.postJsonWithMetricsCookiesAndJsonResponse)(`${xq.clientSideServerUrls.indexUrl}/index/app-attestation`, {
            appCheckToken: Eq
          }, {
            retries: 0
          }, qq.getMetricsCookies());
          return qq.setAppAttestedAuthJwt(gq), !0
        } catch (Eq) {
          return Eq instanceof Yq.d && "failed" === Eq.code ? (console.warn("The app couldn't get an App Check token:", Eq), qq.markAppAttestationTried()) : console.error("Failed to attest the app:", Eq), !1
        }
      }(qq)
    }
    async function uq(qq, Eq) {
      try {
        return await Eq()
      } catch (gq) {
        if (!await cq(qq, gq)) throw gq
      }
      return Eq()
    }
  },
  38995: (qq, Eq, gq) => {
    gq.d(Eq, {
      b: () => Wq,
      f: () => uq
    });
    var Yq = gq(190),
      lq = gq(1789),
      Oq = gq(1792),
      mq = gq(8858);
    const xq = [250, 500, 1e3, 2e3, 1250],
      Aq = 406;

    function cq(qq) {
      if ("object" !== typeof qq || null === qq) return !1;
      const {
        code: Eq,
        message: gq
      } = qq, lq = Yq.b.duplicateLobbyNameError;
      return (Eq === lq.code || Eq === Aq) && (gq === lq.text || gq === lq.text + Yq.h)
    }
    async function uq(qq, Eq) {
      let gq = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : lq.b;
      for (let lq = 0;; lq++) {
        let mq;
        (0, Oq.o)(Eq);
        try {
          return await qq()
        } catch (Yq) {
          if (mq = xq[lq], void 0 === mq || !cq(Yq)) throw Yq
        }
        await gq(mq, Eq)
      }
    }
    const Bq = new Set([Yq.b.duplicateLobbyNameError.code, Yq.b.lobbyCantBeCreated.code, Yq.b.roomDisposedEarlyError.code, Yq.b.roomDisposedLateError.code, Yq.b.serverRoomLimitReached.code]);

    function Wq(qq) {
      if (cq(qq)) return !0;
      const Eq = (0, mq.f)(qq);
      return "number" === typeof Eq && Bq.has(Eq)
    }
  },
  38935: (qq, Eq, gq) => {
    gq.d(Eq, {
      d: () => Oq,
      h: () => lq
    });
    var Yq = gq(31);

    function lq(qq) {
      return "refetchCode" === qq || "devDownloadJson" === qq || qq.startsWith("Plugin")
    }

    function Oq(qq, Eq) {
      "refetchCode" !== qq ? "Plugin|MobAiPlugin|ShowPetUi" !== qq ? Promise.all([gq.e(106), gq.e(107), gq.e(102), gq.e(104), gq.e(211)]).then((() => gq(41495))).then((gq => {
        let {
          runClientGameMessage: Yq
        } = gq;
        Yq(qq, Eq)
      })).catch((Eq => {
        console.error(`Game message ${qq} failed`, Eq)
      })) : Yq.i.TV("showPetUi", Eq) : Yq.i.TV("refetchCode")
    }
  },
  8858: (qq, Eq, gq) => {
    gq.d(Eq, {
      b: () => Oq,
      f: () => mq,
      i: () => xq,
      j: () => cq,
      l: () => Aq
    });
    var Yq = gq(190),
      lq = gq(4456);

    function Oq(qq) {
      return mq(qq) === Yq.b.gameOrPluginOnPlayerAuthRejected.code
    }

    function mq(qq) {
      return "object" === typeof qq && null !== qq ? qq.code : void 0
    }

    function xq(qq) {
      var Eq;
      return null !== (Eq = Object.keys(lq.c).find((Eq => lq.c[Eq] === qq))) && void 0 !== Eq ? Eq : null
    }

    function Aq(qq) {
      return "notWhitelisted" === qq ? "customLobby:cantJoinNotWhitelistedTitle" : "customLobby:cantJoinWorld"
    }
    const cq = {
      private: "customLobby:cantJoinPrivate",
      notWhitelisted: "customLobby:cantJoinNotWhitelisted",
      banned: "customLobby:cantJoinBanned",
      adminLocked: "customLobby:cantJoinAdminLocked"
    }
  },
  39012: (qq, Eq, gq) => {
    gq.d(Eq, {
      e: () => Yq,
      f: () => lq
    });
    const Yq = 45e3;
    class lq extends Error {
      constructor() {
        super("The game server didn't answer in time"), this.name = "SeatRequestTimedOut"
      }
    }
  },
  38927: (qq, Eq, gq) => {
    gq.d(Eq, {
      d: () => uq
    });
    var Yq = gq(1214),
      lq = gq(1313),
      Oq = gq(24),
      mq = gq(1298),
      xq = gq(1308),
      Aq = gq(1498),
      cq = gq(36519);

    function uq(qq) {
      let {
        Oq: Eq,
        mq: gq
      } = qq;
      const uq = null !== Eq && void 0 !== Eq ? Eq : (0, xq.e)().gameNameWithVariation;
      (0, Yq.K)(uq) && ((0, cq.i)(), (0, mq.ob)((() => {
        console.log("Received matchmaking order from game server to game", Eq), (0, Oq.f)("inGameReplay"), (0, Aq.navigatePreserveSearch)((0, lq.e)(uq, null !== gq && void 0 !== gq ? gq : void 0))
      }), "video_start"))
    }
  },
  38915: (qq, Eq, gq) => {
    gq.d(Eq, {
      e: () => Aq,
      f: () => mq,
      i: () => xq,
      l: () => cq
    });
    var Yq = gq(31),
      lq = gq(1336);
    const Oq = new Map;

    function mq(qq, Eq) {
      Yq.i.TV("newUiRequest", {
        id: qq,
        clientParameters: Eq
      }, !0)
    }

    function xq(qq) {
      Yq.i.TV("removeUiRequest", qq, !0);
      const Eq = Oq.get(qq);
      Eq && (Eq.tearDownNotification(), Oq.delete(qq))
    }

    function Aq() {
      Yq.i.TV("clearUiRequests");
      for (const qq of Oq.values()) qq.tearDownNotification();
      Oq.clear()
    }

    function cq(qq, Eq, gq) {
      const Yq = lq.NotificationProvider.showPromptPopup({
        title: Eq,
        confirmText: "general:yes",
        cancelText: "general:no",
        unlockPointerKey: "uiRequestPopup"
      });
      Oq.set(qq, Yq), Yq.getResult().then((Eq => {
        Oq.delete(qq), "notificationTornDown" !== Eq && gq(Eq)
      }))
    }
  },
  38939: (qq, Eq, gq) => {
    gq.d(Eq, {
      c: () => xq,
      g: () => Aq,
      i: () => cq
    });
    var Yq = gq(1214),
      lq = gq(987),
      Oq = gq(36912),
      mq = gq(31);

    function xq(qq) {
      let {
        lobbyName: Eq,
        gameNameWithVariation: gq
      } = qq;
      return !(0, Yq.N)(Eq) || null !== gq && (gq.startsWith("testGym") || (0, lq.j)(gq))
    }

    function Aq(qq) {
      return qq.nE === Oq.c.Leave || qq.nE === Oq.c.Cursor
    }

    function cq(qq) {
      mq.i.TV("codeCollab", {
        type: qq.nE,
        docKey: qq.bE,
        version: qq.iE,
        editorCount: qq.ZE,
        peers: qq.fE,
        updates: qq.ME,
        playerId: qq.TE,
        playerName: qq.zE,
        colour: qq.SE,
        anchor: qq.pE,
        head: qq.GE,
        existingCursors: qq.LE,
        files: qq.JE,
        engineSettings: qq.kE
      })
    }
  },
  38954: (qq, Eq, gq) => {
    gq.d(Eq, {
      d: () => Yq
    });
    class Yq {
      constructor() {
        this.members = new Map
      }
      apply(qq) {
        const Eq = {
          added: [],
          removed: [],
          settingChanges: []
        };
        for (const Yq of qq.xg) {
          let qq = this.members.get(Yq.Ag);
          if (qq || (qq = {
              name: null,
              settings: {}
            }, this.members.set(Yq.Ag, qq), Eq.added.push(Yq.Ag)), null !== Yq.cg && (qq.name = Yq.cg), null !== Yq.ug || Yq.Bg.length > 0) {
            const gq = null === Yq.ug ? {} : JSON.parse(Yq.ug);
            Object.assign(qq.settings, gq);
            for (const Eq of Yq.Bg) delete qq.settings[Eq], gq[Eq] = void 0;
            Eq.settingChanges.push({
              playerId: Yq.Ag,
              settings: gq
            })
          }
        }
        for (const Yq of qq.Wg) {
          const qq = this.members.get(Yq);
          var gq;
          if (qq) this.members.delete(Yq), Eq.removed.push({
            playerId: Yq,
            name: null !== (gq = qq.name) && void 0 !== gq ? gq : void 0
          })
        }
        return Eq
      }
      has(qq) {
        return this.members.has(qq)
      }
      ids() {
        return [...this.members.keys()]
      }
      getName(qq) {
        var Eq, gq;
        return null !== (Eq = null === (gq = this.members.get(qq)) || void 0 === gq ? void 0 : gq.name) && void 0 !== Eq ? Eq : void 0
      }
      getSettings(qq) {
        var Eq;
        return null === (Eq = this.members.get(qq)) || void 0 === Eq ? void 0 : Eq.settings
      }
      getSetting(qq, Eq) {
        var gq;
        return null === (gq = this.members.get(qq)) || void 0 === gq ? void 0 : gq.settings[Eq]
      }
      clear() {
        this.members.clear()
      }
    }
  },
  38976: (qq, Eq, gq) => {
    gq.d(Eq, {
      b: () => Yq,
      c: () => lq
    });
    const Yq = ["description", "label"];

    function lq(qq) {
      const Eq = qq.type;
      return {
        type: Eq,
        params: qq[Eq]
      }
    }
  }
};
Object.freeze(modules);
for (const qq in modules) Object.freeze(modules[qq]);