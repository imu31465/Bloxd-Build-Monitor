export const id = 242;
export const ids = [242];
export const modules = {
  39079: (DD, zD, wD) => {
    function pD(DD) {
      return !(!DD.lobbyLeaderboardInfo && !DD.lobbyManage)
    }
    wD.d(zD, {
      b: () => pD
    })
  },
  39055: (DD, zD, wD) => {
    wD.d(zD, {
      e: () => KD,
      h: () => rD
    });
    var pD = wD(25);
    let sD = !1;

    function KD() {
      return sD
    }

    function rD(DD) {
      sD !== DD && (sD = DD, pD.l.KG("replayViewer|videoExportChanged"))
    }
  },
  38989: (DD, zD, wD) => {
    wD.d(zD, {
      d: () => KD
    });
    var pD = wD(25),
      sD = wD(1956);

    function KD(DD) {
      let {
        taskId: zD,
        progress: wD
      } = DD;
      const pD = sD.e.get("_tasks");
      null !== pD && void 0 !== pD && pD[zD] && sD.e.apply({
        _tasks: {
          ...pD,
          [zD]: {
            ...pD[zD],
            progress: wD
          }
        }
      })
    }
    pD.l.subscribe("clientTaskProgress", (DD => {
      KD(DD)
    }))
  },
  39075: (DD, zD, wD) => {
    wD.d(zD, {
      b: () => OD,
      c: () => JD,
      e: () => MD
    });
    var pD = wD(4820),
      sD = wD(2811),
      KD = wD(1886);
    const rD = new Map(Object.entries(pD.m).map((DD => {
      let [zD, wD] = DD;
      return [wD, zD]
    })));

    function LD(DD) {
      return (0, KD.D)(DD).toFixed(1)
    }

    function cD(DD, zD) {
      return `camera set by ${rD.get(DD[zD+1])}: heading ${`${LD(DD[zD+2])} -> ${LD(DD[zD+4])}`} deg, pitch ${`${LD(DD[zD+3])} -> ${LD(DD[zD+5])}`} deg, at ${DD[zD].toFixed(1)} ms`
    }
    class gD {
      constructor(DD, zD) {
        this.width = DD, this.bA = zD, this.data = void 0, this.next = 0, this.size = 0, this.data = new Float64Array(DD * zD)
      }
      push(DD) {
        let zD = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        const wD = this.data.subarray(this.next * this.width, (this.next + 1) * this.width);
        for (let pD = 0; pD < this.width; pD++) wD[pD] = DD[zD + pD];
        return this.next = (this.next + 1) % this.bA, this.size = Math.min(this.size + 1, this.bA), wD
      }
      lines() {
        const DD = [],
          zD = (this.next - this.size + this.bA) % this.bA;
        for (let wD = 0; wD < this.size; wD++) {
          const pD = (zD + wD) % this.bA * this.width;
          DD.push(Array.from(this.data.subarray(pD, pD + this.width)).join(","))
        }
        return DD
      }
    }
    const RD = 0,
      AD = 2,
      UD = 3,
      fD = 4;

    function ID(DD) {
      return Number.isFinite(DD) ? String(Math.round(10 * DD) / 10) : String(DD)
    }

    function BD(DD) {
      return Number.isFinite(DD) ? DD.toFixed(1) : String(DD)
    }
    class GD {
      constructor() {
        this.frames = 0, this.looked = 0, this.idle = 0, this.Jm = 0, this.pastLimit = 0, this.lockSkips = 0, this.fG = 0, this.lost = 0, this.dropped = 0, this.longFrames = 0, this.dtMin = 1 / 0, this.dtMax = 0, this.dtSum = 0, this.raw = [0, 0], this.turned = [0, 0], this.peakRate = 0, this.events = 0, this.eventMax = 0, this.bigEvents = 0, this.cameraSets = 0, this.cameraSetsLost = 0, this.outliers = 0, this.eventLines = 0, this.suppressed = 0
      }
      moved() {
        return this.events > 0 || 0 !== this.raw[0] || 0 !== this.raw[1] || this.lockSkips > 0 || this.Jm > 0 || this.dropped > 0 || this.cameraSets > 0
      }
      hasEvent() {
        return this.Jm > 0 || this.pastLimit > 0 || this.bigEvents > 0 || this.dropped > 0 || this.cameraSets > 0
      }
    }
    class hD {
      constructor() {
        var DD = this;
        this.remote = (0, sD.v)(), this.tally = new GD, this.records = new gD(10, this.remote ? 1 : 3600), this.events = new gD(4, this.remote ? 1 : 12e3), this.event = new Float64Array(4), this.takes = null, this.client = "js", this.started = !1, this.record = function(zD) {
          let wD = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
          const [pD, sD, KD, rD, LD, cD, gD, GD, hD, nD] = DD.records.push(zD, wD), MD = DD.tally;
          switch (MD.frames++, gD) {
            case RD:
              return void MD.idle++;
            case fD:
              return void MD.fG++;
            case UD:
              return MD.lockSkips++, void(0 === KD && 0 === rD || DD.outlier(`lock skip dropped raw (${ID(KD)}, ${ID(rD)}) at ${BD(pD)} ms`))
          }
          MD.looked++, Number.isFinite(sD) && (MD.dtMin = Math.min(MD.dtMin, sD), MD.dtMax = Math.max(MD.dtMax, sD), MD.dtSum += sD, sD > 0 && (MD.peakRate = Math.max(MD.peakRate, Math.hypot(LD, cD) / sD))), MD.raw[0] += KD, MD.raw[1] += rD, MD.turned[0] += LD, MD.turned[1] += cD;
          const OD = Math.abs(KD) > nD || Math.abs(rD) > nD,
            JD = `raw (${ID(KD)}, ${ID(rD)}) over ${BD(sD)} ms, limit ${ID(nD)}, filter v (${GD.toFixed(3)}, ${hD.toFixed(3)}) px/ms, at ${BD(pD)} ms`;
          gD === AD ? (MD.Jm++, DD.outlier(`spike put right: ${JD} -> turned (${ID(LD)}, ${ID(cD)})`)) : OD ? (MD.pastLimit++, DD.outlier(`kept past limit: ${JD}`)) : sD > 50 && (MD.longFrames++, DD.remote || DD.outlier(`long frame: ${JD}, turned in full`))
        }, this.onMouseMove = DD => {
          const zD = this.tally,
            {
              movementX: wD,
              movementY: pD
            } = DD;
          zD.events++;
          const sD = Math.max(Math.abs(wD), Math.abs(pD));
          zD.eventMax = Math.max(zD.eventMax, sD);
          const KD = null !== document.pointerLockElement,
            rD = this.event;
          rD[0] = DD.timeStamp, rD[1] = wD, rD[2] = pD, rD[3] = KD ? 1 : 0, this.events.push(rD), sD >= 200 && (zD.bigEvents++, this.eventOutlier(`big mousemove (${wD}, ${pD}) at ${BD(DD.timeStamp)} ms, lock ${KD?"Qg":"free"}`))
        }, this.onLockChange = () => {
          const DD = document.pointerLockElement;
          (0, sD.l)("look", `pointer lock ${DD?`gained (${DD.tagName.toLowerCase()})`:"lost"} at ${BD(performance.now())} ms`)
        }, this.onLockError = () => {
          (0, sD.l)("look", `pointer lock request failed at ${BD(performance.now())} ms`)
        }, this.onVisibility = () => {
          (0, sD.l)("look", `page ${document.visibilityState} at ${BD(performance.now())} ms`)
        }, this.flush = () => {
          this.takeRecords();
          const DD = this.tally;
          if (this.tally = new GD, !DD.moved() || this.remote && !DD.hasEvent()) return;
          const zD = DD.looked > 0 ? DD.dtSum / DD.looked : NaN,
            wD = [`${DD.frames} frames (${DD.looked} looked, ${DD.idle} idle${"wasm"===this.client?`, ${DD.fG} carried`:""})`, `dt avg ${BD(zD)} min ${BD(DD.dtMin)} max ${BD(DD.dtMax)}, ${DD.longFrames} long`, `${DD.events} mousemoves (max ${ID(DD.eventMax)} px, ${DD.bigEvents} big)`, `raw (${ID(DD.raw[0])}, ${ID(DD.raw[1])}) turned (${ID(DD.turned[0])}, ${ID(DD.turned[1])})`, `peak ${DD.peakRate.toFixed(2)} px/ms`, `put right ${DD.Jm}, past limit ${DD.pastLimit}, lock skips ${DD.lockSkips}`, "lock " + (document.pointerLockElement ? "Qg" : "free")];
          DD.dropped > 0 && wD.push(`${DD.dropped} doubled spike copies dropped`), DD.cameraSets > 0 && wD.push(`${DD.cameraSets} camera sets`), DD.cameraSetsLost > 0 && wD.push(`${DD.cameraSetsLost} camera set records lost`), DD.lost > 0 && wD.push(`${DD.lost} records lost`), DD.suppressed > 0 && wD.push(`${DD.suppressed} outlier lines not shown`), (0, sD.l)("look", `1s: ${wD.join("; ")}`)
        }, this.dump = () => [`look records (${this.client}): nowMs,dtMs,rawX,rawY,turnedX,turnedY,outcome,vX,vY,limit`, ...this.records.lines(), "mousemove events: timeStamp,movementX,movementY,locked", ...this.events.lines()].join("\n")
      }
      start(DD, zD) {
        this.client = DD, this.takes = zD;
        const {
          screen: wD
        } = window;
        (0, sD.l)("look", `start: ${DD} client, dpr ${window.devicePixelRatio}, screen ${wD.width}x${wD.height}, pointer lock ${document.pointerLockElement?"Qg":"free"}`), this.started || (this.started = !0, window.addEventListener("mousemove", this.onMouseMove, {
          capture: !0,
          passive: !0
        }), document.addEventListener("pointerlockchange", this.onLockChange), document.addEventListener("pointerlockerror", this.onLockError), document.addEventListener("visibilitychange", this.onVisibility), setInterval(this.flush, 1e3), this.remote || (0, sD.i)("look", this.dump))
      }
      outlier(DD) {
        const zD = this.tally;
        zD.outliers >= 20 ? zD.suppressed++ : (zD.outliers++, (0, sD.l)("look", DD))
      }
      eventOutlier(DD) {
        const zD = this.tally;
        zD.eventLines >= 10 ? zD.suppressed++ : (zD.eventLines++, (0, sD.l)("look", DD))
      }
      takeRecords() {
        if (null === this.takes) return;
        const DD = this.takes.look();
        if (DD.length >= 2) {
          this.tally.lost += DD[0], this.tally.dropped += DD[1];
          for (let zD = 2; zD + 10 <= DD.length; zD += 10) this.record(DD, zD)
        }
        const zD = this.takes.cameraSets();
        if (zD.length >= pD.e) {
          this.tally.cameraSetsLost += zD[0];
          for (let DD = pD.e; DD + pD.h <= zD.length; DD += pD.h) this.tally.cameraSets++, this.outlier(cD(zD, DD))
        }
      }
      droppedCopy() {
        this.tally.dropped++
      }
      endTake() {
        this.takeRecords(), this.takes = null
      }
    }
    let nD = null;

    function MD(DD) {
      let zD = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
      return nD ??= new hD, nD.start(DD, zD), nD.record
    }

    function OD() {
      var DD;
      null === (DD = nD) || void 0 === DD || DD.endTake()
    }

    function JD() {
      var DD;
      null === (DD = nD) || void 0 === DD || DD.droppedCopy()
    }
  },
  38922: (DD, zD, wD) => {
    wD.d(zD, {
      e: () => qz,
      g: () => Yz,
      k: () => Hz
    });
    var pD = wD(3688),
      sD = wD(157),
      KD = wD(197),
      rD = wD(625),
      LD = wD(35),
      cD = wD(2769),
      gD = wD(3757),
      RD = wD(3750),
      AD = wD(1232);
    const UD = new WeakMap;
    class fD {
      constructor(DD, zD) {
        let wD = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {
          DRD: !0
        };
        this.callbacks = zD, this.options = wD, this.ywD = void 0, this.sessionId = void 0, this.bC = [], this.zRD = !1, this.MI = !1, this.wRD = void 0, this.JC = 0, this.ksD = 0, this.pRD = (DD, zD) => {
          if (this.MI) return;
          const wD = Number(DD);
          this.zRD ? this.sRD(wD, zD) : this.bC.push({
            id: wD,
            payload: zD
          })
        }, this.dispose = () => {
          this.MI || (this.MI = !0, UD.delete(this), this.bC.length = 0, this.wRD())
        }, this.ywD = DD, this.sessionId = DD.sessionId, UD.set(this, []), this.wRD = this.KRD()
      }
      rRD(DD) {
        this.wRD(), this.ywD = DD, this.sessionId = DD.sessionId, this.JC = 0, this.ksD = 0, this.wRD = this.KRD()
      }
      get fC() {
        return this.ksD
      }
      KRD() {
        const DD = this.ywD.bJ("*", this.pRD);
        return this.options.DRD && this.ywD.dJ(this.dispose), DD
      }
      sRD(DD, zD) {
        try {
          (0, gD.zc)(DD) && (zD = (0, gD.e)(DD, RD.nI.from(zD)));
          const wD = UD.get(this)[DD];
          if ("function" !== typeof wD) {
            if (this.callbacks.cRD) return void this.callbacks.cRD(DD, zD);
            throw new Error(`No onMessage handler registered for message id ${DD}`)
          }
          wD(zD)
        } catch (wD) {
          this.callbacks.gRD(`Error in onMessage ${DD} with payload ${JSON.stringify(zD)}`, wD)
        } finally {
          this.JC++
        }
      }
      RRD() {
        for (const {
            id: DD,
            payload: zD
          }
          of this.bC) {
          if (this.MI) break;
          this.sRD(DD, zD)
        }
        this.bC.length = 0
      }
      EX() {
        return this.MI
      }
      ARD() {
        if (this.zRD || this.MI) throw new Error("Trying to getOnMessageRegistrationHandler after registration finished");
        return {
          bJ: (DD, zD) => {
            if (this.zRD || this.MI) throw new Error("Trying to call onMessage after registration finished");
            this.bJ(DD, zD)
          },
          finishRegistration: () => {
            if (this.MI) throw new Error("Cannot finish message registration after disposal");
            this.zRD = !0, this.RRD()
          }
        }
      }
      bJ(DD, zD) {
        var wD, pD;
        null === (wD = (pD = this.callbacks).URD) || void 0 === wD || wD.call(pD);
        const sD = UD.get(this);
        for (; DD > sD.length;) sD[sD.length] = null;
        sD[DD] = zD
      }
      send(DD, zD) {
        this.fRD(), (0, AD.C)(zD) ? this.ywD.mC(DD, zD) : this.ywD.send(DD, zD)
      }
      fRD() {
        var DD, zD;
        (this.ksD++, 5 === ID++) && (null === (DD = (zD = this.callbacks).URD) || void 0 === DD || DD.call(zD), ID = 0)
      }
      YM() {
        this.dispose(), this.ywD.YM()
      }
      leave() {
        this.dispose(), this.ywD.leave()
      }
    }
    let ID = 0;
    var BD = wD(3707);
    class GD extends fD {
      constructor(DD) {
        super(DD, {
          URD: () => {
            (0, LD.l)(!0) && (0, pD.RC)()
          },
          gRD: (DD, zD) => {
            var wD;
            null === (wD = (0, cD.e)()) || void 0 === wD || wD.PB(DD, zD)
          }
        }, {
          DRD: !1
        }), (0, BD.e)(DD)
      }
      lC(DD, zD) {
        return !!(0, BD.k)((0, BD.b)(), this.ywD, DD, zD) && (this.fRD(), !0)
      }
      rRD(DD) {
        this.IRD(), super.rRD(DD), (0, BD.e)(DD)
      }
      YM() {
        super.YM(), this.IRD()
      }
      IRD() {
        this.ywD.LO.cI.bS = void 0
      }
    }
    var hD = wD(25),
      nD = wD(1956),
      MD = wD(1737),
      OD = wD(36463),
      JD = wD(38928),
      ED = wD(38013),
      QD = wD(37791),
      XD = wD(619),
      VD = wD(38397);

    function PD(DD, zD, wD) {
      const pD = function(DD) {
          const zD = new Int32Array(DD.length * VD.g);
          return DD.forEach(((DD, wD) => {
            const pD = wD * VD.g;
            if (4 === DD.length) {
              const [wD, sD, KD, rD] = DD;
              zD.set([wD, sD, KD, wD, sD, KD, rD], pD)
            } else {
              const [wD, sD, KD, rD, LD, cD, gD] = DD;
              zD.set([wD, KD, LD, sD, rD, cD, gD], pD)
            }
          })), zD
        }(wD),
        sD = (zD, wD, pD, sD) => {
          DD.setBlockNoMulti(zD, wD, pD, sD, !0)
        };
      DD.client.gameRecorder.isCapturing() ? (0, VD.ob)(pD, (0, VD.nb)(pD), sD) : DD.AU.KU.cV(pD, {
        Km: sD,
        isHookId: zD => DD.blockChangeHasHooks(zD),
        watched: () => function(DD, zD, wD) {
          const pD = [],
            sD = (DD, zD, wD) => {
              pD.push(DD, zD, wD)
            },
            KD = new Set;
          for (let rD = 0; rD < wD.length; rD += VD.g)
            for (let zD = (0, XD.L)(wD[rD]); zD <= (0, XD.L)(wD[rD + 3]); zD++)
              for (let pD = (0, XD.L)(wD[rD + 1]); pD <= (0, XD.L)(wD[rD + 4]); pD++)
                for (let LD = (0, XD.L)(wD[rD + 2]); LD <= (0, XD.L)(wD[rD + 5]); LD++) {
                  const wD = `${zD}|${pD}|${LD}`;
                  KD.has(wD) || (KD.add(wD), DD.blockDataOwner.forEachDataCell(zD, pD, LD, sD))
                }
          return zD.forEachCell(sD), Int32Array.from(pD)
        }(DD, zD, pD)
      }), DD.AU.SDD()
    }

    function CD(DD) {
      DD.xwD = new Set, DD.jwD = new Set, DD.TwD = new Set, DD.dwD = new Set, DD.bwD = [], DD.SwD = [], DD.zk = new Set, DD.NK = [], DD.Lk = []
    }
    class xD {
      constructor(DD) {
        this.AU = DD
      }
      register(DD) {
        const zD = this.AU,
          wD = (0, cD.b)();
        DD.bJ(gD.db, (DD => {
          zD.KU.xwD.add(DD), zD.KU.jwD.delete(DD)
        })), DD.bJ(gD.ob, (DD => {
          zD.KU.jwD.add(DD), zD.KU.xwD.delete(DD)
        })), DD.bJ(gD.ye, (DD => {
          zD.KU.jwD.delete(DD), zD.KU.xwD.delete(DD)
        })), DD.bJ(gD.lb, (DD => {
          zD.KU.TwD.add(DD), zD.KU.dwD.delete(DD)
        })), DD.bJ(gD.ub, (DD => {
          zD.KU.dwD.add(DD), zD.KU.TwD.delete(DD)
        })), DD.bJ(gD.De, (DD => {
          zD.KU.dwD.delete(DD), zD.KU.TwD.delete(DD)
        })), DD.bJ(gD.hb, (DD => {
          (0, AD.$)(DD, zD.KU.SwD), (0, AD.$)(DD, zD.KU.bwD), zD.KU.bwD.push(DD)
        })), DD.bJ(gD.qb, (DD => {
          (0, AD.$)(DD, zD.KU.bwD), (0, AD.$)(DD, zD.KU.SwD), zD.KU.SwD.push(DD)
        })), DD.bJ(gD.Ce, (DD => {
          (0, AD.$)(DD, zD.KU.bwD), (0, AD.$)(DD, zD.KU.SwD)
        })), DD.bJ(gD.Tf, (DD => {
          let {
            gw: wD,
            Rw: pD
          } = DD;
          pD ? zD.KU.zk.delete(wD) : zD.KU.zk.add(wD)
        })), DD.bJ(gD.Rf, (DD => {
          let {
            NK: pD,
            ZK: sD
          } = DD;
          wD.updateWalkThroughRect(zD.vW, pD, sD)
        })), (0, pD.onGameResetOnce)((() => {
          CD(zD.KU)
        })), DD.bJ(gD.wc, (DD => {
          ED.e.applyServerUpdate(DD)
        })), DD.bJ(gD.Bb, (DD => {
          wD.applyServerBlocks((() => {
            ! function(DD, zD) {
              for (const {
                  HK: wD,
                  qK: pD
                }
                of zD) {
                const zD = QD.e[pD];
                if (zD) {
                  const {
                    compX: pD,
                    compY: sD,
                    compZ: KD,
                    mainMultiblock: rD
                  } = zD;
                  DD.jT(wD[0] - pD, wD[1] - sD, wD[2] - KD, rD)
                }
              }
              for (const {
                  HK: wD,
                  qK: pD,
                  Dr: sD
                }
                of zD) DD.setBlockNoMulti(wD[0], wD[1], wD[2], pD, !0), DD.blockDataOwner.setBlockData(wD[0], wD[1], wD[2], null === sD ? void 0 : JSON.parse(sD)), DD.blockAdded(wD[0], wD[1], wD[2], pD)
            }(wD, DD)
          })), hD.l.KG("changeBlockFail", DD), wD.client.triggerGameCallback("onChangeBlockFail", DD), hD.l.KG("EditBoard", {
            pos: null
          }), hD.l.KG("EditCodeBlock", {
            pos: null,
            canChangePos: null
          })
        })), DD.bJ(gD.Wb, (DD => {
          wD.applyServerBlocks((() => {
            PD(wD, ED.e, DD)
          }))
        })), DD.bJ(gD.Kf, (DD => {
          let {
            gK: zD,
            RK: pD
          } = DD;
          if (wD.XF(zD[0], zD[1], zD[2])) {
            const DD = (0, cD.b)().OJ(zD[0], zD[1], zD[2]);
            (0, cD.b)().updateMailboxContents(zD[0], zD[1], zD[2], DD, pD)
          }
        })), DD.bJ(gD.We, (DD => {
          let {
            pos: zD,
            data: pD
          } = DD;
          wD.blockDataOwner.setBlockData(zD[0], zD[1], zD[2], pD), wD.blockAdded(zD[0], zD[1], zD[2], wD.OJ(zD[0], zD[1], zD[2]))
        }))
      }
    }
    var TD = wD(37157),
      bD = wD(36726),
      jD = wD(38055),
      dD = wD(37901),
      SD = wD(38066);
    class iD {
      constructor(DD, zD) {
        this.AU = DD, this.setUpQueuedEntity = zD
      }
      register(DD) {
        const zD = this.AU,
          wD = (0, cD.b)();
        DD.bJ(gD.$, (DD => {
          let {
            Fp: zD,
            Yp: wD
          } = DD;
          this.setUpQueuedEntity(zD), zD = (0, bD.b)(zD), (0, cD.b)().client.gameRecorder.recordBulletShot(zD, wD), hD.l.KG(`bulletShot|${zD}`, {
            bulletDirections: wD
          })
        })), DD.bJ(gD.yc, (DD => {
          let {
            tD: zD,
            FD: wD
          } = DD;
          hD.l.KG("damagedByOtherPlayer", {
            tD: zD,
            direction: wD
          }, !0)
        })), DD.bJ(gD.Ud, (DD => {
          hD.l.KG("playerKilled", DD, !0), (0, cD.b)().client.gameRecorder.recordPlayerKilled(DD.deadEId, DD.killerEId, DD.withItem, DD.killstreak)
        })), DD.bJ(gD.bc, (DD => {
          hD.l.KG("customKillfeed", DD, !0), (0, cD.b)().client.gameRecorder.recordCustomKillfeed(DD.killer, DD.victim, DD.withItem)
        })), DD.bJ(gD.ce, (DD => {
          let {
            Jp: wD,
            Ep: pD
          } = DD;
          this.setUpQueuedEntity(wD);
          const sD = zD.yJ.zwD(wD);
          null !== sD && void 0 !== sD && sD.isGun() && sD.reload(Date.now(), pD)
        })), DD.bJ(gD.Re, (DD => {
          let {
            Qp: wD,
            Xp: pD
          } = DD;
          const sD = pD ? (0, SD.f)(zD, pD) : void 0;
          hD.l.KG("sendHitmarker", {
            Qp: wD,
            screenPos: sD
          }, !0)
        })), DD.bJ(gD.cd, (DD => {
          let {
            eK: pD,
            oK: sD,
            uK: KD,
            vK: rD,
            tK: LD,
            FK: cD,
            YK: gD
          } = DD;
          this.setUpQueuedEntity(pD), pD = (0, bD.b)(pD);
          const RD = zD.yJ.uzD(pD);
          if (RD && (RD.lastHurtTime = performance.now()), (0, jD.playRigHurt)(zD, pD, cD), hD.l.KG("lifeformHurt", {
              eId: pD,
              YK: gD
            }), sD) {
            const DD = (0, SD.f)(zD, sD.Xp);
            hD.l.KG("yourAttackHit", {
              Qp: rD,
              screenPos: DD,
              hitSelf: pD === zD.vW
            })
          }
          pD === zD.vW && (wD.shakePlayerCamera(pD, LD / 40, 200), hD.l.KG("closeShopOnDamaged", null), hD.l.KG("damagedByOtherPlayer", {
            tD: null,
            direction: cD,
            tK: LD
          }, !0));
          const AD = zD.yJ.PJ(pD);
          if (AD && (KD || rD)) {
            const DD = [AD[0], AD[1] + 1, AD[2]];
            KD && (0, dD.h)(zD, dD.z, DD, 15), rD && (0, dD.h)(zD, dD.p, DD, 10)
          }
        })), DD.bJ(gD._c, (DD => {
          let {
            Gz: wD,
            hz: pD,
            nz: sD
          } = DD;
          (0, TD.e)(zD).setHealthFrac((0, bD.b)(wD), sD), hD.l.KG("lifeformHealthChanged", {
            eId: (0, bD.b)(wD),
            hz: pD,
            nz: sD
          })
        })), DD.bJ(gD.X, (DD => {
          let {
            Np: wD,
            Zp: pD
          } = DD;
          (0, cD.b)().playerAttacked(zD.vW, wD, pD)
        })), DD.bJ(gD.Gb, (() => {
          const DD = zD.yJ.zwD(zD.vW);
          null !== DD && void 0 !== DD && DD.isChargeable() && DD.finishCharging(!1, Date.now())
        })), DD.bJ(gD.ic, (DD => {
          let {
            np: zD,
            Mp: wD,
            Op: pD,
            Ss: sD,
            ls: KD,
            Ws: rD
          } = DD;
          zD = (0, bD.b)(zD), (0, cD.b)().client.updateEffect(zD, wD, {
            displayName: pD,
            icon: sD,
            duration: KD,
            level: rD
          })
        })), DD.bJ(gD.fe, (DD => {
          let {
            np: zD,
            Mp: wD
          } = DD;
          zD = (0, bD.b)(zD), (0, cD.b)().client.removeEffect(zD, wD)
        })), DD.bJ(gD.Gf, (DD => {
          hD.l.KG("ttbEffectMultiplier", DD)
        }))
      }
    }
    var lD = wD(38958),
      WD = wD(37151),
      ND = wD(4242),
      ZD = wD(38082),
      yD = wD(36711),
      kD = wD(36719),
      mD = wD(37048),
      eD = wD(37233),
      oD = wD(38086),
      aD = wD(38963);
    class uD {
      constructor(DD, zD) {
        this.AU = DD, this.setUpQueuedEntity = zD
      }
      register(DD) {
        const zD = this.AU,
          wD = (0, cD.b)();
        DD.bJ(gD.sd, (DD => {
          let {
            eId: wD,
            settings: pD
          } = DD;
          (0, eD.e)(wD);
          for (const zD in pD)(0, eD.d)(wD, zD, pD[zD]);
          if ("canSee" in pD && zD.yJ.aDD(wD, "hidingMeshManager")) {
            const DD = zD.yJ.getState(wD, "hidingMeshManager");
            DD.canSee = (0, oD.c)("canSee", pD.canSee), DD._forceUpdate = !0
          }
        })), DD.bJ(gD.L, (DD => {
          let {
            AK: wD,
            UK: pD,
            animationScript: sD,
            fK: KD,
            IK: rD,
            BK: LD,
            GK: gD
          } = DD;
          wD = (0, bD.b)(wD);
          const RD = null === sD && null !== LD ? (0, lD.f)(LD, gD) : sD;
          (0, cD.b)().client.gameRecorder.recordAnimateEntity(wD, pD, RD, KD, rD), (0, TD.e)(zD).animations.animateEntity(wD, pD, sD, KD, rD, LD, gD), null !== sD || wD === zD.vW && pD === WD.c.Emote && (0, cD.b)().client.cameraController.endTemporaryThirdPerson()
        })), DD.bJ(gD.Qe, (DD => {
          (0, aD.e)(DD)
        })), DD.bJ(gD.Rd, (DD => {
          for (const zD of DD)(0, ZD.L)(zD);
          hD.l.KG("playerCosmeticsUpdated", DD, !0)
        })), DD.bJ(gD.T, (DD => {
          for (const wD of DD)(0, mD.f)(zD, wD)
        })), DD.bJ(gD.ud, (DD => {
          (0, dD.l)(zD, (0, AD.p)(DD))
        })), DD.bJ(gD.wd, (DD => {
          ND.g[DD.bK] ? (0, dD.l)(zD, {
            ...ND.g[DD.bK],
            pos1: DD.pos1,
            pos2: DD.pos2
          }) : console.error(`Unknown preset id: ${DD.bK}`)
        })), DD.bJ(gD.Od, (DD => {
          var zD, wD;
          let {
            Hp: pD,
            qp: sD,
            Ds: KD,
            zs: rD
          } = DD, {
            ss: LD,
            Ks: gD
          } = null !== rD && void 0 !== rD ? rD : {};
          const {
            ws: RD
          } = null !== rD && void 0 !== rD ? rD : {};
          LD = null !== (zD = LD) && void 0 !== zD ? zD : void 0, gD = null !== (wD = gD) && void 0 !== wD ? wD : void 0, "string" === typeof RD && this.setUpQueuedEntity(RD), (0, cD.b)().client.gameRecorder.recordPlaySound(pD, sD, KD, rD), yD.c.play((0, kD.g)(pD), sD, RD, LD, gD).rate(KD)
        })), DD.bJ(gD.Mf, (DD => {
          for (const zD in DD) {
            const pD = DD[zD];
            for (const DD in pD) wD.client.meshCreator.handleParticleSystemUpdate(zD, DD, pD[DD])
          }
        }))
      }
    }
    var vD = wD(37762),
      tD = wD(37743);
    class FD {
      constructor(DD) {
        this.AU = DD
      }
      register(DD) {
        const zD = this.AU,
          wD = (0, cD.b)();

        function pD() {
          return zD.yJ.jzD(zD.vW)
        }
        DD.bJ(gD.Jc, (DD => {
          let {
            Dz: wD,
            zz: pD,
            wz: sD,
            pz: KD,
            sz: rD,
            Kz: LD,
            rz: cD,
            Lz: gD,
            gz: RD
          } = DD;
          if (!zD.yJ.aDD(wD, "itemState")) return void(0, vD.g)(zD, wD, [rD, LD, cD], pD, {
            amount: sD,
            attributes: JSON.parse(KD),
            Lz: gD,
            size: RD
          });
          const AD = zD.yJ.getState(wD, "itemState");
          AD.amount = sD, AD.Lz = gD, AD.creationTime = Date.now(), (0, tD.setServerPosition)(zD.yJ.getState(wD, "smoothToServerPos"), rD, LD, cD)
        })), DD.bJ(gD.xb, (DD => {
          (0, TD.e)(zD).setCantPickUp(DD, !0), zD.yJ.aDD(DD, "itemState") && (zD.yJ.getState(DD, "itemState").Lz = !0)
        })), DD.bJ(gD.xe, (DD => {
          (0, TD.e)(zD).setCantPickUp(DD, !1), zD.yJ.aDD(DD, "itemState") && (zD.yJ.getState(DD, "itemState").Lz = !1)
        })), DD.bJ(gD.Id, (DD => {
          let {
            pickUpItems: zD,
            pickUpAckSeq: wD
          } = DD;
          for (const {
              name: sD,
              amount: KD,
              attributes: rD
            }
            of zD) pD().pickUpItem({
            name: sD,
            amount: KD,
            typeObj: vD.u[sD],
            attributes: rD
          });
          (0, cD.b)().client.inventoryPrediction.serverChangeApplied(wD)
        })), DD.bJ(gD.lf, (DD => {
          let {
            index: wD,
            name: pD,
            amount: sD,
            attributes: KD,
            setSlotAckSeq: rD
          } = DD;
          const LD = zD.yJ.dzD(zD.vW);
          (wD < LD.playerInventory.numSlots || LD.Lp || LD.inCreative) && LD.setItemSlot(wD, pD, sD, KD), (0, cD.b)().client.inventoryPrediction.serverChangeApplied(rD)
        })), DD.bJ(gD.Ic, (DD => {
          (0, cD.b)().client.inventoryPrediction.acknowledge(DD)
        })), DD.bJ(gD.I, (DD => {
          let {
            Uz: zD,
            fz: wD,
            Iz: pD,
            Bz: sD
          } = DD;
          (0, cD.b)().client.itemDropPrediction.onActionItemDrops(zD, wD, pD, sD)
        })), DD.bJ(gD.Sb, (DD => {
          pD().clearInventory(), (0, cD.b)().client.inventoryPrediction.serverChangeApplied(DD)
        })), DD.bJ(gD.mf, (DD => {
          hD.l.KG("setSelectedInventorySlotI", DD, !0)
        })), DD.bJ(gD.Jb, (DD => {
          let {
            xp: wD,
            Tp: pD,
            bp: sD,
            jp: KD,
            dp: rD,
            Sp: LD,
            ip: gD,
            lp: RD
          } = DD;
          const AD = zD.yJ.dzD(zD.vW);
          if (LD) {
            const {
              rp: DD,
              Ip: zD
            } = RD;
            return (0, cD.b)().client.inventoryPrediction.Z6(zD, (() => {
              AD.chestRefreshed(pD, sD, KD, gD, DD)
            })) && hD.l.KG("chestToggleFromServer", !1, !0), void hD.l.KG("chestRefreshedFromServer")
          }(wD || AD.Lp) && (wD ? (AD.chestOpened(pD, sD, KD, rD, gD), null !== rD && (0, cD.b)().client.ironChestPasskeyCache.onChestOpened(KD, rD)) : AD.chestClosed(), hD.l.KG("chestToggleFromServer", wD, !0))
        })), DD.bJ(gD.ec, (DD => {
          let {
            craftingRecipeItemName: pD,
            recipesForItem: sD
          } = DD;
          pD ? wD.craftingManager.editRecipesForPlayer(zD.vW, pD, sD) : wD.craftingManager.resetAllPlayerRecipes(zD.vW), hD.l.KG("craftingRecipesEdited", {
            itemName: pD,
            recipesForItem: sD
          })
        })), DD.bJ(gD.ne, (DD => {
          let {
            YD: zD,
            HD: wD,
            qD: sD
          } = DD;
          pD().removeItemName(zD, wD), (0, cD.b)().client.inventoryPrediction.serverChangeApplied(sD)
        })), DD.bJ(gD.je, (DD => {
          let {
            WK: pD
          } = DD;
          wD.craftingManager.removeRecipes(zD.vW, pD), hD.l.KG("craftingRecipesEdited", {
            itemName: pD,
            recipesForItem: []
          })
        }))
      }
    }
    var YD = wD(6520),
      HD = wD(37401),
      qD = wD(358),
      Dz = wD.n(qD),
      zz = wD(4540),
      wz = wD(37669),
      pz = wD(38221),
      sz = wD(37394);
    class Kz {
      constructor(DD, zD) {
        this.AU = DD, this.setUpQueuedEntity = zD
      }
      register(DD) {
        const zD = this.AU,
          wD = (0, cD.b)();
        DD.bJ(gD.Bf, (DD => {
          let {
            KK: wD,
            rK: sD,
            LK: KD,
            cK: rD
          } = DD;
          const LD = [sD, KD, rD];
          zD.yJ.setPosition(zD.vW, LD), (0, pD.sendColyMessage)(gD.dh, {
            fL: wD,
            IL: zz.e
          }), hD.l.KG("localPlayerTeleported", {
            pos: LD,
            isCorrection: !1
          })
        })), DD.bJ(gD.Fd, (DD => {
          let {
            Vz: zD,
            Pz: wD,
            Cz: pD,
            xz: sD
          } = DD;
          this.setUpQueuedEntity(zD);
          const KD = [wD, pD, sD];
          hD.l.KG(`otherPlayerTeleported|${zD}`, {
            pos: KD
          })
        })), DD.bJ(gD.Xd, (DD => {
          let {
            Us: wD,
            fs: sD,
            Is: KD,
            Bs: rD,
            Gs: LD,
            hs: cD,
            ns: RD,
            Os: AD,
            Ms: UD,
            Xs: fD
          } = DD;
          const ID = [sD, KD, rD];
          zD.yJ.setPosition(zD.vW, ID);
          const BD = zD.yJ.gzD(zD.vW),
            GD = zD.yJ.Vk(zD.vW);
          Dz().set(GD.Qy, 0, 0, 0), Dz().set(GD.Py, 0, 0, 0), Dz().set(GD.UG, LD, cD, RD), GD.jy(), BD._flying = null !== fD, fD ? (BD.flyAccel.Vs = fD.Vs, BD.flyAccel.Ps = fD.Ps) : BD.flyAccel.reset(), AD && BD.movementType === YD.o.GLIDING && (BD.Es = AD.Es, Dz().copy(BD.Qs, AD.Qs)), (0, pD.sendColyMessage)(gD.dh, {
            fL: wD,
            IL: zz.e
          }), hD.l.KG("localPlayerTeleported", {
            pos: ID,
            isCorrection: !0
          })
        })), DD.bJ(gD.qf, (DD => {
          let {
            vehicleEId: zD,
            overrides: wD
          } = DD;
          (0, cD.b)().applyRiddenVehicleSettingOverrides(zD, wD)
        })), DD.bJ(gD.Pf, (DD => {
          let {
            oD: wD,
            aD: pD,
            uD: sD
          } = DD;
          const KD = zD.yJ.gzD(zD.vW).physicsState.type === YD.q.SLEEPING && wD === YD.q.DEFAULT;
          (0, cD.b)().updatePositionAndPhysics(zD.vW, {
            type: wD,
            tier: pD
          }, !0, sD), KD && (0, cD.b)().updateHeldVehicleStatus()
        })), DD.bJ(gD.Fb, (DD => {
          let {
            Rz: wD,
            Az: pD
          } = DD;
          zD.yJ.TzD(zD.vW).setPose(wD, pD)
        })), DD.bJ(gD.Ze, (DD => {
          const {
            pg: wD,
            fwD: pD
          } = (0, HD.e)([DD[0], DD[1], DD[2]]);
          sz.b.setLookDirection(zD, wD, pD), (0, wz.w)(wD, pD);
          const sD = zD.yJ.TzD(zD.vW);
          sD && (sD.heading = wD)
        })), DD.bJ(gD.$e, (DD => {
          wD.client.cameraController.setCameraZoom(DD)
        })), DD.bJ(gD.tf, (DD => {
          let {
            Ns: pD,
            Zs: sD
          } = DD;
          wD.shakePlayerCamera(zD.vW, pD, sD)
        })), DD.bJ(gD.Rc, (DD => {
          zD.yJ.TzD(zD.vW).jumpMultiplier.setMultiplierType("jumpEffectAmount", DD)
        })), (0, pD.onGameResetOnce)((() => {
          zD.yJ.TzD(zD.vW).jumpMultiplier.setMultiplierType("jumpEffectAmount", 1)
        })), DD.bJ(gD.P, (DD => {
          zD.yJ.Vk(zD.vW).applyImpulse(DD)
        })), DD.bJ(gD.rf, (DD => {
          const wD = zD.yJ.Vk(zD.vW);
          Dz().set(wD.Qy, 0, 0, 0), Dz().set(wD.Py, 0, 0, 0), Dz().copy(wD.UG, DD), wD.jy()
        })), (0, pD.onGameResetOnce)((() => {
          (0, pz.setFloatingYValue)(zD.yJ.getState(zD.vW, "physics"), zD.yJ.AY(zD.vW), null)
        })), DD.bJ(gD.mc, (DD => {
          let {
            yp: wD,
            kp: pD,
            mp: sD
          } = DD;
          const KD = (0, bD.b)(wD);
          if (KD === zD.vW) {
            const DD = zD.yJ.AY(zD.vW).position;
            sD ??= Math.floor(DD[1]) - 1, (0, pz.setFloatingYValue)(zD.yJ.getState(zD.vW, "physics"), zD.yJ.AY(zD.vW), pD ? sD : null)
          }(0, TD.e)(zD).setFloating(KD, pD, sD);
          const rD = zD.yJ.getState(KD, "floating");
          rD && (rD.isFloating = pD, rD.mp = pD ? sD : null)
        }))
      }
    }

    function rz(DD, zD, wD, pD, sD) {
      let KD = arguments.length > 5 && void 0 !== arguments[5] && arguments[5];
      if (!DD.yJ.bzD(DD.vW)) return console.log("Got resync inven but don't have inven component"), void zD.acknowledge(pD);
      KD && console.error("Had to sync inven"), zD.Z6(pD, sD) && wD.KG("chestToggleFromServer", !1, !0), wD.KG("syncedInvenFromServer")
    }
    var Lz = wD(38975),
      cz = wD(38984),
      gz = wD(1962);
    var Rz = wD(4520);

    function Az(DD) {
      const zD = DD.KU;
      let wD = 0,
        sD = -1,
        rD = -1 / 0,
        LD = null,
        cD = !0;
      const RD = () => {
        if (++wD % 10 !== 0) return;
        const RD = (0, pD.getLastReceivedPacketId)();
        if (RD <= sD) return;
        const [AD, UD, fD] = DD.yJ.PJ(DD.vW), ID = ! function(DD) {
          var zD;
          let wD = null === (zD = DD.yJ.nwD(DD.vW)) || void 0 === zD ? void 0 : zD.UI;
          if (void 0 === wD) return !1;
          const pD = new Set;
          for (; void 0 !== wD && !pD.has(wD);) {
            var sD;
            pD.add(wD);
            const zD = DD.yJ.getState(wD, "smoothToServerPos"),
              KD = Array.isArray(zD) ? null : null === zD || void 0 === zD ? void 0 : zD.serverPosition;
            if (KD) {
              const zD = DD.yJ.PJ(wD);
              if (Math.abs(zD[0] - KD[0]) > 10 || Math.abs(zD[1] - KD[1]) > 10 || Math.abs(zD[2] - KD[2]) > 10) return !0
            }
            wD = null === (sD = DD.yJ.nwD(wD)) || void 0 === sD ? void 0 : sD.UI
          }
          return !1
        }(DD) && function(DD, zD, wD, pD) {
          const sD = KD.f.CI;
          for (let KD = 0; KD < DD.length; KD++) {
            const rD = DD[KD];
            if (!(0, Rz.g)(zD, wD, pD, rD[0] * sD, rD[1] * sD, rD[2] * sD)) return !1
          }
          return !0
        }(zD.zG.OI, AD, UD, fD), BD = null === LD || Math.abs(AD - LD[0]) > 8 || Math.abs(UD - LD[1]) > 8 || Math.abs(fD - LD[2]) > 8, GD = !cD || BD || performance.now() - rD >= 1e4;
        cD = ID, ID && GD && (sD = RD, rD = performance.now(), LD = [AD, UD, fD], (0, pD.sendColyMessage)(gD.Ng, {
          KL: RD
        }))
      };
      return DD.on("DU", RD), () => {
        DD.off("DU", RD)
      }
    }
    var Uz = wD(38986),
      fz = wD(1511),
      Iz = wD(2762),
      Bz = wD(2901),
      Gz = wD(4791);
    class hz {
      constructor(DD, zD, wD) {
        this.AU = DD, this.gameNameWithVariation = zD, this.connectionResume = wD, this.stopChunkReports = () => {}, this.replayResume = null
      }
      clearUiRequestsAndQTEs() {
        Gz.e.reset(), (0, Lz.e)()
      }
      startChunkReports() {
        const DD = function(DD) {
            let zD = null,
              wD = -1 / 0,
              sD = null;
            const KD = () => {
                sD = null;
                const KD = Math.ceil(DD.Ix[0]),
                  rD = Math.ceil(DD.Ix[1]);
                zD && zD[0] === KD && zD[1] === rD || (zD = [KD, rD], wD = performance.now(), (0, pD.sendColyMessage)(gD.Mg, {
                  tr: KD,
                  Fr: rD
                }))
              },
              rD = () => {
                null === sD && (sD = setTimeout(KD, Math.max(0, wD + 250 - performance.now())))
              };
            return KD(), DD.on("addRemoveDistanceChanged", rD), () => {
              DD.off("addRemoveDistanceChanged", rD), null !== sD && (clearTimeout(sD), sD = null)
            }
          }(this.AU.KU),
          zD = Az(this.AU);
        this.stopChunkReports = () => {
          DD(), zD()
        }
      }
      restartChunkStreaming() {
        (0, wz.o)(this.AU, (0, cD.b)().recentChunkEdits.chunksEditedSince(this.connectionResume.getDroppedAt() - Uz.b)), this.startChunkReports()
      }
      register(DD) {
        const zD = this.AU,
          wD = (0, cD.b)();
        DD.bJ(gD.od, (DD => {
          nD.e.applyNewClientOptions(DD)
        })), DD.bJ(gD.Md, (DD => {
          Iz.c.onReceiveColyseusPing(DD)
        })), DD.bJ(gD.cf, (DD => {
          let {
            key: zD,
            value: wD
          } = DD;
          (0, MD.setCookie)(this.gameNameWithVariation, zD, wD)
        })), DD.bJ(gD.hf, (DD => {
          hD.l.KG("setDiscordReportKey", DD)
        })), (0, pD.onGameResetOnce)((() => {
          this.stopChunkReports()
        })), DD.bJ(gD.Cc, (sD => {
          const {
            Aw: KD,
            Uw: rD
          } = sD;
          if ((0, pD.setAdjustment)(rD), this.connectionResume.onInitialInfo(sD.fw, sD.Iw), pD.offlineInputReplay.nC(sD.Bw), this.connectionResume.isResuming()) {
            console.log("Resumed the connection as eId", KD);
            try {
              null === sD.Gw && (0, cD.b)().client.inventoryPrediction.dropPending(), this.stopChunkReports(), CD(zD.KU), nD.e.apply({
                shopInfo: null,
                _shopVersion: gz.c
              });
              const wD = zD.yJ.dzD(zD.vW);
              wD.Lp && (wD.chestClosed(), hD.l.KG("chestToggleFromServer", !1, !0)), this.clearUiRequestsAndQTEs(), hD.l.KG("initInfoReceived", DD)
            } finally {
              const DD = null === sD.Gw ? null : {
                sync: null,
                endSeq: null
              };
              this.replayResume = DD, this.connectionResume.onResumeInitialInfo(sD.Gw, (() => {
                DD.endSeq = (0, cD.b)().client.inventoryPrediction.lastActionSeq
              })), null === DD && this.restartChunkStreaming()
            }
          } else console.log("Local client is eId", KD), (0, wz.q)(zD), hD.l.KG("loadingScreenState", "loadingPage:loadingWorld"), zD.vDD = KD, zD.yJ.aDD(zD.vW, zD.yJ.names.entityName) && zD.yJ.fW(zD.vW, zD.yJ.names.entityName), (0, cD.b)().setEntityName(zD.vDD, (0, cD.b)().getRawEntityName(zD.vW)), zD.oW[zD.vDD] = {}, zD.yJ.UW(zD.vW, zD.yJ.names.entityName), hD.l.KG("initInfoReceived", DD), this.startChunkReports(), wD.client.onServerConnectionFinalised()
        })), DD.bJ(gD.Pe, (() => {
          this.connectionResume.isResuming() ? this.connectionResume.onResumed((() => {
            const DD = this.replayResume;
            if (this.replayResume = null, !DD) return;
            this.restartChunkStreaming();
            const {
              inventoryPrediction: wD
            } = (0, cD.b)().client, {
              sync: sD
            } = DD, KD = new Set(pD.offlineInputReplay.takeDroppedActions());
            if (sD) {
              var rD;
              const pD = null !== (rD = DD.endSeq) && void 0 !== rD ? rD : wD.lastActionSeq;
              wD.forget((DD => DD > sD.Ip && DD <= pD || KD.has(DD))), rz(zD, wD, hD.l, sD.Ip, sD.load)
            } else wD.dropPending(), wD.askForSnapshot()
          })) : console.warn("ResumeComplete arrived without a resume")
        })), DD.bJ(gD.wf, (DD => {
          let {
            Kp: wD,
            Up: pD,
            Ip: sD
          } = DD;
          const {
            inventoryPrediction: KD
          } = (0, cD.b)().client, rD = () => {
            zD.yJ.dzD(zD.vW).loadFromString(wD)
          };
          this.replayResume && (this.replayResume.sync = {
            Ip: sD,
            load: rD
          }), rz(zD, KD, hD.l, sD, rD, pD)
        })), DD.bJ(gD._d, (DD => {
          let {
            type: zD,
            location1: wD,
            location2: pD,
            location3: sD,
            score: KD
          } = DD;
          (0, Bz.t)({
            type: zD,
            location1: wD,
            location2: pD,
            location3: sD,
            score: KD
          })
        })), DD.bJ(gD.Ne, (DD => {
          let {
            type: zD,
            resourceType: wD,
            amount: pD,
            category: sD,
            itemName: KD
          } = DD;
          (0, Bz.v)({
            type: zD,
            resourceType: wD,
            amount: pD,
            category: sD,
            itemName: KD
          })
        })), DD.bJ(gD.Xc, (DD => {
          let {
            leaveEventType: zD,
            category: wD,
            subCategory: pD,
            value: sD
          } = DD;
          (0, Bz.J)({
            leaveEventType: zD,
            category: wD,
            subCategory: pD,
            value: sD
          })
        })), DD.bJ(gD._b, (DD => {
          let {
            cat1: zD,
            cat2: wD,
            cat3: pD,
            value: sD
          } = DD;
          (0, Bz.o)({
            cat1: zD,
            cat2: wD,
            cat3: pD,
            value: sD
          })
        })), DD.bJ(gD.Tc, (DD => {
          (0, cD.b)().client.leaveGameUnwanted({
            reason: DD,
            requiresRefresh: !1,
            canReconnect: !1,
            automaticallyReconnect: !1
          }), (0, fz.navigatePreserveSearch)("/")
        })), DD.bJ(gD.Te, (DD => {
          hD.l.KG("serverUpdating", Date.now() + DD, !0)
        })), DD.bJ(gD.ld, cz.e), DD.bJ(gD.ed, (DD => {
          console.error(`[logErrorToConsole]: ${DD}`)
        }))
      }
    }
    var nz = wD(38989),
      Mz = wD(39005),
      Oz = wD(1008),
      Jz = wD(38992),
      Ez = wD(38996),
      Qz = wD(3661);
    class Xz {
      constructor(DD, zD) {
        this.AU = DD, this.clientApi = zD
      }
      register(DD) {
        const zD = this.AU,
          wD = (0, cD.b)();
        DD.bJ(gD.Ib, (DD => {
          let {
            chatMsgId: zD,
            content: wD,
            chatterEId: pD
          } = DD;
          hD.l.KG("chat", {
            serverChatMsgId: zD,
            content: wD,
            chatterEId: pD
          }, !0)
        })), DD.bJ(gD.Cf, (DD => {
          hD.l.KG("TopRightHelper", DD, !0)
        })), DD.bJ(gD.Af, (DD => {
          (0, nz.d)(DD)
        })), DD.bJ(gD.Uc, (DD => {
          let {
            category: zD,
            timeframe: wD,
            data: pD
          } = DD;
          hD.l.KG("leaderboardResponse", {
            category: zD,
            timeframe: wD,
            data: pD
          })
        })), DD.bJ(gD.uf, (() => {
          hD.l.KG("showShopTutorial", null, !0)
        })), DD.bJ(gD.Yd, (DD => {
          hD.l.KG("progressBarUpdate", DD, !0)
        })), DD.bJ(gD.Gc, (DD => {
          hD.l.KG("middleScreenBarInitiate", {
            duration: DD.ap,
            vp: DD.vp,
            horizBarRemOffset: DD.tp
          }, !0)
        })), DD.bJ(gD.pe, (() => {
          hD.l.KG("middleScreenBarRemove", !0)
        })), DD.bJ(gD.gf, (DD => {
          let {
            id: zD,
            position: wD,
            style: pD,
            Bp: sD,
            hp: KD
          } = DD;
          hD.l.KG("setDirectionArrow", {
            id: zD,
            position: wD,
            style: pD,
            text: (0, gD.z)(sD),
            hp: KD
          }, !0)
        })), DD.bJ(gD.Pb, (DD => {
          let {
            id: zD
          } = DD;
          hD.l.KG("clearDirectionArrow", {
            id: zD
          }, !0)
        })), DD.bJ(gD.Zb, (DD => {
          (0, Qz.onCosmeticPackGranted)(DD)
        })), DD.bJ(gD.Ad, (DD => {
          let {
            id: zD,
            Ow: wD
          } = DD;
          const {
            type: sD,
            params: KD
          } = (0, Mz.h)(wD), rD = {
            ...KD
          };
          for (const pD of Mz.e) pD in rD && rD[pD] && (rD[pD] = (0, gD.z)(rD[pD]));
          Gz.e.queueQTE(zD, sD, rD).getResult().then((DD => {
            "boolean" === typeof DD && (0, pD.sendColyMessage)(gD.yi, {
              qteId: zD,
              qteResponse: DD
            })
          }))
        })), DD.bJ(gD.te, (DD => {
          Gz.e.cancelQTE(DD)
        })), (0, pD.onGameResetOnce)((() => {
          Gz.e.reset()
        })), DD.bJ(gD.Bd, (DD => {
          let {
            id: zD,
            clientParameters: wD
          } = DD;
          (0, Lz.f)(zD, wD)
        })), DD.bJ(gD.ue, (DD => {
          (0, Lz.h)(DD)
        })), DD.bJ(gD.Hf, (DD => {
          let {
            text: zD,
            id: wD,
            destructive: sD
          } = DD;
          (0, Lz.l)(wD, zD, sD, (DD => {
            (0, pD.sendColyMessage)(gD.bk, {
              ag: wD,
              ug: DD,
              vg: 5
            })
          }))
        })), DD.bJ(gD.Hd, (DD => {
          let {
            info: zD
          } = DD;
          hD.l.KG("overShopInfo", zD, !0)
        })), DD.bJ(gD.qc, (DD => {
          let {
            ys: wD,
            es: pD
          } = DD;
          this.clientApi.openShop(zD.vW, wD, pD)
        })), DD.bJ(gD.pc, (DD => {
          let {
            yK: zD,
            kK: wD,
            mK: pD
          } = DD;
          hD.l.KG("flyingMiddleMessage", {
            content: (0, gD.z)(zD),
            kK: wD,
            mK: pD
          }, !0)
        })), DD.bJ(gD.Vf, (DD => {
          const zD = DD === Oz.h ? null : {
            message: `Currently loaded as variation: ${DD}`,
            type: "Warning"
          };
          hD.l.KG("showPermanentBottomMessage", zD, !0)
        })), DD.bJ(gD.tc, (DD => {
          let {
            messageType: zD,
            data: pD
          } = DD;
          (0, Jz.c)(zD) ? (0, Jz.b)(zD, pD) : ("freeCamPerms" === zD && wD.client.freeCameraController.setPerms(pD.key, pD.value), wD.client.triggerGameCallback("onReceivedMessageFromServer", zD, pD))
        })), DD.bJ(gD.Vb, Ez.i)
      }
    }
    class Vz {
      constructor(DD, zD, wD, pD) {
        this.gameNameWithVariation = DD, this.AU = wD, this.connectionResume = pD, this.stateReplicationHandler = void 0, this.stateReplicationHandler = new JD.b(zD, this.AU)
      }
      setupStateReplicationHandlers() {
        this.stateReplicationHandler.setup(), (0, pD.onGameResetOnce)((() => {
          this.stateReplicationHandler.dispose()
        }))
      }
      rRD(DD) {
        this.stateReplicationHandler.dispose(), this.stateReplicationHandler = new JD.b(DD, this.AU), this.stateReplicationHandler.setup()
      }
      setupOnMessageListeners(DD, zD) {
        const wD = this.AU,
          pD = DD => {
            this.stateReplicationHandler.setUpIfQueued(DD)
          };
        new hz(wD, this.gameNameWithVariation, this.connectionResume).register(DD), new xD(wD).register(DD), new FD(wD).register(DD), new iD(wD, pD).register(DD), new uD(wD, pD).register(DD), new Xz(wD, zD).register(DD), new Kz(wD, pD).register(DD)
      }
    }
    window.addEventListener("beforeunload", (() => {}));
    var Pz = wD(39008),
      Cz = wD(39014),
      xz = wD(655),
      Tz = wD(2925);
    class bz {
      constructor(DD, zD, wD, pD) {
        this.msgHandler = wD, this.listener = pD, this.session = void 0, this.attachedRoom = null, this.detachRoomListeners = null, this.suspended = !1, this.droppedAt = 0, this.session = new Pz.e({
          reconnect: DD,
          isLive: () => pD.isLive(),
          onReconnected: DD => {
            this.resumeOnRoom(DD)
          },
          onGaveUp: (DD, zD) => {
            pD.onGaveUp(DD, zD)
          },
          freeze: zD,
          releaseSeat: zD => {
            DD(zD).then((DD => {
              DD.leave(!0)
            }), (DD => {
              console.warn("Couldn't release the held seat of a game left while reconnecting", DD)
            }))
          }
        })
      }
      onInitialInfo(DD, zD) {
        this.session.onInitialInfo(DD, zD)
      }
      isResuming() {
        return this.session.isResuming()
      }
      getDroppedAt() {
        return this.droppedAt
      }
      onResumeInitialInfo(DD, zD) {
        if (this.session.onResuming(), null === DD) {
          try {
            (0, cD.b)().client.itemDropPrediction.reset()
          } catch (wD) {
            console.error("Error dropping the item drop predictions on resuming", wD)
          }
          return pD.offlineInputReplay.discard(), void this.setSuspended(!1)
        }(0, cD.b)().client.itemDropPrediction.onResumeReplayOffered(), pD.offlineInputReplay.replayFrom(DD.nw, zD)
      }
      onResumed(DD) {
        this.setSuspended(!1), (0, pD.resendBeacons)();
        try {
          DD()
        } catch (zD) {
          console.error("Error completing the resume", zD)
        } finally {
          this.session.onResumed()
        }
      }
      attachRoom(DD) {
        const zD = (0, xz.e)((() => DD.connection.isOpen));
        DD.dJ(zD);
        const wD = new Cz.c((() => {
          this.session.canHoldSeat() && this.listener.isLive() && (console.warn("The game server went silent, reconnecting"), this.onConnectionDropped(DD, "silent"), DD.leave(!1))
        }));
        DD.onStateChange((() => {
          wD.heard()
        }));
        const pD = zD => {
          zD.persisted || DD.leave(!0)
        };
        window.addEventListener("pagehide", pD), DD.dJ(((zD, wD) => {
          if (DD === this.attachedRoom && this.listener.isLive()) return (0, KD.h)(zD) && this.session.canHoldSeat() ? (console.warn(`Connection to the game server dropped with code ${zD}, reconnecting`), this.listener.onDropped(zD, wD), void this.onConnectionDropped(DD, String(zD))) : void this.listener.onRoomLeft(zD, wD)
        })), this.attachedRoom = DD, this.detachRoomListeners = () => {
          zD(), wD.dispose(), window.removeEventListener("pagehide", pD)
        }
      }
      dispose() {
        this.detachRoom(), this.session.leave(), this.setSuspended(!1)
      }
      setSuspended(DD) {
        DD !== this.suspended && (this.suspended = DD, (0, pD.setConnectionSuspended)(DD), (0, cD.b)().client.itemDropPrediction.setSuspended(DD))
      }
      detachRoom() {
        var DD;
        null === (DD = this.detachRoomListeners) || void 0 === DD || DD.call(this), this.detachRoomListeners = null, this.attachedRoom = null
      }
      onConnectionDropped(DD, zD) {
        (0, Tz.reportClientError)("disconnect", "Left room", zD), this.isResuming() || (this.droppedAt = Date.now()), this.detachRoom(), pD.offlineInputReplay.onConnectionLost(), this.setSuspended(!0), this.session.onConnectionLost(DD.reconnectionToken)
      }
      resumeOnRoom(DD) {
        if (!this.listener.isLive()) return console.warn("Left the game while reconnecting, leaving the resumed room"), DD.leave(!0), void this.dispose();
        console.log("Reconnected to the game server, waiting for the game to resume"), (0, aD.v)(), pD.offlineInputReplay.onConnectionReplaced(), this.msgHandler.rRD(DD), this.listener.onReconnected(DD), this.attachRoom(DD)
      }
    }
    var jz = wD(2962),
      dz = wD(2968),
      Sz = wD(1332),
      iz = wD(1309),
      lz = wD(4702),
      Wz = wD(3139),
      Nz = wD(1075),
      Zz = wD(37702),
      yz = wD(39020),
      kz = wD(8901),
      mz = wD(39029),
      ez = wD(1217),
      oz = wD(36486),
      az = wD(39038),
      uz = wD(1727),
      vz = wD(2774);

    function tz(DD) {
      var zD, wD;
      if ("object" !== typeof DD || null === DD) return {
        errType: typeof DD
      };
      const pD = DD;
      return {
        errType: null !== (zD = null === (wD = DD.constructor) || void 0 === wD ? void 0 : wD.name) && void 0 !== zD ? zD : "",
        errName: "string" === typeof pD.name ? pD.name : "",
        eventType: "string" === typeof pD.type ? pD.type : "",
        errStack: "string" === typeof pD.stack ? pD.stack.split("\n").slice(1).join(" | ") : ""
      }
    }

    function Fz(DD) {
      if ("undefined" !== typeof ProgressEvent && DD instanceof ProgressEvent) return !0;
      if (!(DD instanceof Error)) return !1;
      const zD = DD.code;
      return "ServerError" === DD.name && void 0 === zD || "AbortError" === DD.name || "seat reservation expired." === DD.message || "early_leave" === DD.message
    }(0, BD.o)((DD => {
      (0, Tz.reportClientError)("wasm_net", DD)
    }));
    let Yz = !0;

    function Hz() {
      Yz = !1
    }
    class qz {
      constructor(DD) {
        this.gameNameWithVariation = void 0, this.lobbyName = void 0, this.colyClient = void 0, this.userContext = void 0, this.joinedAt = null, this.checkSendPath = () => {}, this.AU = void 0, this.connectionResume = void 0, this.incomingMsgInitialisor = void 0, this.gameNameWithVariation = DD.gameNameWithVariation, this.lobbyName = DD.lobbyName, this.colyClient = DD.colyClient, this.userContext = DD.userContext
      }
      async connectToServer(DD, zD, wD) {
        nD.e.reset(), DD.oW = {
          [DD.vW]: {}
        }, DD.vDD = void 0, (0, aD.v)(), (0, cD.b)().removeAllEntityNames(), (0, cD.b)().setEntityName(DD.vW, this.userContext.getPlayerName()), (0, Sz.q)({
          lobbyName: this.lobbyName
        }), console.log("Waiting for clientConnection passed promise to resolve");
        const rD = (0, uz.e)();
        console.log("joining server with game", this.gameNameWithVariation, "lobbyName", this.lobbyName);
        const LD = performance.now();
        wD.aborted || (0, iz.o)("wasm_core_ready", LD);
        const gD = (0, mz.g)(this.userContext, (() => {
          const {
            roomName: pD,
            joinOptions: sD
          } = (0, OD.d)(this.userContext, this.gameNameWithVariation, this.lobbyName, zD, (DD => Wz.b.isUsingCustomGameTexturePack(DD)));
          return sD.joinAdHold = rD, sD.renderBackend = (0, vz.b)(DD.wB), (0, yz.h)((() => this.colyClient.joinOrCreateUntil(wD, pD, sD)), wD)
        }));
        return hD.l.KG("loadingScreenState", "loadingPage:joiningLobby"), await gD.then((zD => {
          if (this.joinedAt = performance.now(), (0, iz.o)("wasm_joined", this.joinedAt), this.AU = DD, rD) {
            const DD = (0, uz.n)((() => {
              zD.send(sD.f), (0, iz.l)()
            }));
            zD.dJ(DD), (0, pD.onGameResetOnce)(DD)
          }
          const wD = new GD(zD);
          this.connectionResume = new bz((DD => this.colyClient.reconnect(DD)), (zD => {
            DD.YC(zD)
          }), wD, {
            isLive: () => (0, cD.b)().client.getMsgHandler() === wD,
            onDropped: (DD, zD) => {
              (0, dz.g)(DD) || this.logUnrecognisedConnectionLoss(DD, void 0, {
                site: "drop",
                closeReason: null !== zD && void 0 !== zD ? zD : "",
                sinceJoined: this.sinceJoined()
              })
            },
            onRoomLeft: (DD, zD) => {
              this.onRoomLeft(DD, zD)
            },
            onReconnected: DD => {
              this.incomingMsgInitialisor.rRD(DD), this.checkSendPath = (0, Zz.e)(wD, DD, BD.q)
            },
            onGaveUp: (DD, zD) => {
              this.onResumeGaveUp(DD, zD)
            }
          }), this.connectionResume.attachRoom(zD), (0, pD.onGameResetOnce)((() => {
            this.connectionResume.dispose()
          }));
          const KD = wD.send,
            LD = wD.bJ,
            gD = wD.ywD.send,
            RD = wD.ywD.bJ,
            AD = wD.sRD;
          this.checkSendPath = (0, Zz.e)(wD, zD, BD.q);
          const UD = setInterval((() => {
            KD === wD.send && LD === wD.bJ && gD === wD.ywD.send && RD === wD.ywD.bJ && AD === wD.sRD || Hz(), this.checkSendPath()
          }), 1e4);
          return (0, pD.onGameResetOnce)((() => {
            clearInterval(UD)
          })), {
            success: !0,
            successDetails: wD
          }
        })).catch((zD => {
          if (wD.aborted && zD === (0, ez.d)(wD)) return {
            success: !1,
            failDetails: {
              reason: "Left the game while it loaded",
              requiresRefresh: !1,
              canReconnect: !1
            }
          };
          if (zD instanceof oz.c) return console.warn("Seat request timed out", this.lobbyName, this.gameNameWithVariation), {
            success: !1,
            failDetails: {
              reason: zD.message,
              requiresRefresh: !1,
              canReconnect: !1,
              gameServerUnreachable: "timedOut",
              joinFailure: (0, az.b)(zD, zD.leg)
            }
          };
          DD.PB(`Failed to connect to bloxd room, check your internet connection. lobbyName: ${this.lobbyName}, gameNameWithVariation: ${this.gameNameWithVariation} code: ${zD.code}\n`, zD);
          const pD = zD.code;
          return pD === KD.e.serverUpdating.code ? (this.goToUpdateWaiting(), {
            success: !1,
            failDetails: {
              reason: KD.e.serverUpdating.text,
              requiresRefresh: !1,
              canReconnect: !0,
              goesToUpdateWaiting: !0
            }
          }) : {
            success: !1,
            failDetails: {
              ...this.onConnectionToServerLost(pD, zD.message, {
                site: "join",
                sinceJoinStart: (0, dz.c)(performance.now() - LD),
                ...tz(zD)
              }, Fz(zD)),
              rematch: (0, yz.e)(zD),
              gameRefused: (0, kz.e)(zD),
              joinFailure: (0, az.b)(zD, this.colyClient.legReached())
            }
          }
        }))
      }
      setupServerListeners(DD, zD, wD) {
        hD.l.KG("loadingScreenState", "loadingPage:loadingPlayerInfo"), this.incomingMsgInitialisor = new Vz(this.gameNameWithVariation, zD.ywD, DD, this.connectionResume), this.incomingMsgInitialisor.setupStateReplicationHandlers();
        const sD = zD.ARD();
        this.incomingMsgInitialisor.setupOnMessageListeners(sD, wD), (0, pD.onConnectionToServerReady)(sD, zD), sD.finishRegistration()
      }
      dispose() {
        this.connectionResume.dispose()
      }
      onResumeGaveUp(DD, zD) {
        (0, Nz.CB)(new Error("Reconnect failed"), {
          ...(0, jz.m)(zD),
          game: this.gameNameWithVariation
        }), (0, Tz.reportClientError)("disconnect", "Reconnect failed", zD.reason), (0, cD.b)().client.leaveGameUnwanted({
          reason: {
            translationKey: "general:lostConnection"
          },
          canReconnect: !DD,
          canPlayAgain: DD,
          requiresRefresh: !1,
          automaticallyReconnect: !1
        }), (0, fz.navigatePreserveSearch)("/")
      }
      sinceJoined() {
        return null === this.joinedAt ? "" : (0, dz.c)(performance.now() - this.joinedAt)
      }
      onRoomLeft(DD, zD) {
        var wD;
        if (DD === KD.e.gameOrPluginKick.code) return;
        if (console.log(`Left room with code ${DD}`), DD === KD.e.serverUpdating.code) return (0, Tz.reportClientError)("disconnect", "Left room", "serverUpdating"), (0, cD.b)().client.leaveGame(this.getUpdateWaitingUrl()), void this.goToUpdateWaiting();
        this.AU.PB(`Kicked from server with code ${DD}`, new Error);
        const pD = Object.keys(KD.e).find((zD => KD.e[zD].code === DD));
        (0, Tz.reportClientError)("disconnect", "Left room", null !== pD && void 0 !== pD ? pD : String(DD));
        const sD = this.onConnectionToServerLost(DD, void 0, {
          site: "leave",
          closeReason: null !== zD && void 0 !== zD ? zD : "",
          sinceJoined: this.sinceJoined()
        });
        (0, cD.b)().client.leaveGameUnwanted({
          reason: `You have disconnected from the server.\n${sD.reason}`,
          canReconnect: sD.canReconnect,
          requiresRefresh: sD.requiresRefresh,
          automaticallyReconnect: null !== (wD = sD.automaticallyReconnect) && void 0 !== wD && wD
        }), (0, fz.navigatePreserveSearch)("/")
      }
      getUpdateWaitingUrl() {
        return (0, lz.z)(this.gameNameWithVariation, this.lobbyName)
      }
      goToUpdateWaiting() {
        (0, fz.navigatePreserveSearch)(this.getUpdateWaitingUrl())
      }
      onConnectionToServerLost(DD, zD, wD) {
        var pD;
        let sD = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        if (null !== (pD = zD) && void 0 !== pD && pD.endsWith(KD.j) && (this.userContext.invalidateTrafficCode(), zD = zD.replace(KD.j, "")), DD === KD.e.outdatedVersion.code) return console.error("Outdated client with version ", rD.e, ", refreshing page"), (0, MD.reloadBloxd)(), {
          reason: "Outdated client",
          requiresRefresh: !0,
          canReconnect: !1
        };
        if (DD === KD.e.loadRecaptchaError.code) return console.error("Load recaptcha error, refreshing page"), (0, MD.reloadBloxd)(), {
          reason: "Failed to load recaptcha",
          requiresRefresh: !0,
          canReconnect: !1
        };
        for (const rD in KD.e) {
          const {
            code: wD,
            text: pD,
            canReconnect: sD
          } = KD.e[rD];
          if (wD === DD) {
            console.log("matched known error", DD, "leaving game");
            return {
              reason: "" !== pD ? pD : zD || `Code: ${DD}`,
              requiresRefresh: !1,
              canReconnect: sD,
              automaticallyReconnect: wD === KD.e.customGameUpdated.code || wD === KD.e.duplicateLobbyNameError.code
            }
          }
        }
        return console.log("Didn't match known error, leaving game"), (0, dz.f)(DD) || sD ? console.warn("Connection lost", DD, zD) : this.logUnrecognisedConnectionLoss(DD, zD, wD), {
          reason: `Either your internet isn't working or this is a bug.\nCode: ${DD}`,
          requiresRefresh: !1,
          canReconnect: !1,
          gameServerUnreachable: sD ? "failed" : void 0
        }
      }
      logUnrecognisedConnectionLoss(DD, zD, wD) {
        (0, Nz.CB)(new Error("Unrecognised connection loss"), {
          code: String(DD),
          cause: null !== zD && void 0 !== zD ? zD : "",
          ...wD,
          game: this.gameNameWithVariation,
          ...(0, dz.i)()
        })
      }
    }
  },
  38928: (DD, zD, wD) => {
    wD.d(zD, {
      b: () => vw,
      d: () => Dp
    });
    var pD, sD, KD, rD, LD, cD, gD, RD, AD, UD, fD, ID, BD, GD, hD, nD, MD, OD, JD, ED, QD, XD, VD, PD, CD, xD, TD, bD, jD, dD, SD, iD, lD, WD, ND, ZD, yD, kD, mD, eD, oD, aD, uD, vD, tD, FD, YD, HD, qD, Dz, zz, wz, pz, sz, Kz, rz, Lz, cz, gz, Rz, Az, Uz, fz, Iz, Bz, Gz, hz, nz, Mz, Oz, Jz, Ez, Qz, Xz, Vz, Pz, Cz, xz, Tz, bz, jz, dz, Sz, iz, lz, Wz, Nz, Zz, yz, kz, mz, ez, oz, az, uz, vz, tz, Fz, Yz, Hz = wD(25),
      qz = wD(37157),
      Dw = wD(38941),
      zw = wD(38950),
      ww = wD(9131),
      pw = wD(616),
      sw = wD(608),
      Kw = wD(36749);
    let rw = (pD = (0, ww.type)("number"), sD = (0, ww.type)("number"), KD = (0, ww.type)("number"), rD = (0, ww.type)("number"), LD = (0, ww.type)("number"), cD = (0, ww.type)("number"), gD = (0, ww.type)("string"), RD = class extends ww.Schema {
        constructor() {
          super(...arguments), (0, Dw.c)(this, "id", AD, this), (0, Dw.c)(this, "amount", UD, this), (0, Dw.c)(this, "x", fD, this), (0, Dw.c)(this, "y", ID, this), (0, Dw.c)(this, "z", BD, this), (0, Dw.c)(this, "size", GD, this), (0, Dw.c)(this, "attributes", hD, this)
        }
      }, AD = (0, zw.d)(RD.prototype, "id", [pD], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return 0
        }
      }), UD = (0, zw.d)(RD.prototype, "amount", [sD], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return 0
        }
      }), fD = (0, zw.d)(RD.prototype, "x", [KD], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return 0
        }
      }), ID = (0, zw.d)(RD.prototype, "y", [rD], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return 0
        }
      }), BD = (0, zw.d)(RD.prototype, "z", [LD], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return 0
        }
      }), GD = (0, zw.d)(RD.prototype, "size", [cD], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return 1
        }
      }), hD = (0, zw.d)(RD.prototype, "attributes", [gD], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return "{}"
        }
      }), RD),
      Lw = (nD = (0, ww.type)("string"), MD = (0, ww.type)("string"), OD = class extends ww.Schema {
        constructor() {
          super(...arguments), (0, Dw.c)(this, "itemName", JD, this), (0, Dw.c)(this, "enchantmentTier", ED, this)
        }
      }, JD = (0, zw.d)(OD.prototype, "itemName", [nD], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: null
      }), ED = (0, zw.d)(OD.prototype, "enchantmentTier", [MD], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: null
      }), OD),
      gw = (QD = (0, ww.type)("string"), XD = (0, ww.type)("string"), VD = (0, ww.type)("number"), PD = (0, ww.type)("number"), CD = (0, ww.type)("number"), xD = (0, ww.type)("float32"), TD = (0, ww.type)("float32"), bD = (0, ww.type)("float32"), jD = (0, ww.type)("string"), dD = (0, ww.type)(["number"]), SD = (0, ww.type)("boolean"), iD = class extends ww.Schema {
        constructor() {
          super(...arguments), (0, Dw.c)(this, "type", lD, this), (0, Dw.c)(this, "name", WD, this), (0, Dw.c)(this, "x", ND, this), (0, Dw.c)(this, "y", ZD, this), (0, Dw.c)(this, "z", yD, this), (0, Dw.c)(this, "xRotation", kD, this), (0, Dw.c)(this, "yRotation", mD, this), (0, Dw.c)(this, "zRotation", eD, this), (0, Dw.c)(this, "followingEId", oD, this), (0, Dw.c)(this, "followingOffset", aD, this), (0, Dw.c)(this, "shouldMatchFollowingEntityRotation", uD, this)
        }
      }, lD = (0, zw.d)(iD.prototype, "type", [QD], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: null
      }), WD = (0, zw.d)(iD.prototype, "name", [XD], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return ""
        }
      }), ND = (0, zw.d)(iD.prototype, "x", [VD], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return 0
        }
      }), ZD = (0, zw.d)(iD.prototype, "y", [PD], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return 0
        }
      }), yD = (0, zw.d)(iD.prototype, "z", [CD], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return 0
        }
      }), kD = (0, zw.d)(iD.prototype, "xRotation", [xD], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return 0
        }
      }), mD = (0, zw.d)(iD.prototype, "yRotation", [TD], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return 0
        }
      }), eD = (0, zw.d)(iD.prototype, "zRotation", [bD], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return 0
        }
      }), oD = (0, zw.d)(iD.prototype, "followingEId", [jD], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: null
      }), aD = (0, zw.d)(iD.prototype, "followingOffset", [dD], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return new ww.ArraySchema(0, 0, 0)
        }
      }), uD = (0, zw.d)(iD.prototype, "shouldMatchFollowingEntityRotation", [SD], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return !0
        }
      }), iD),
      Rw = (vD = (0, ww.type)("float32"), tD = (0, ww.type)("float32"), FD = (0, ww.type)("boolean"), YD = (0, ww.type)("boolean"), HD = (0, ww.type)("float32"), qD = (0, ww.type)("boolean"), Dz = (0, ww.type)("string"), zz = (0, ww.type)("string"), wz = (0, ww.type)("string"), pz = (0, ww.type)("string"), sz = (0, ww.type)(["number"]), Kz = (0, ww.type)("number"), rz = (0, ww.type)({
        map: Lw
      }), Lz = class extends gw {
        constructor() {
          super(...arguments), (0, Dw.c)(this, "scale", cz, this), (0, Dw.c)(this, "speed", gz, this), (0, Dw.c)(this, "jumping", Rz, this), (0, Dw.c)(this, "crouching", Az, this), (0, Dw.c)(this, "cameraPitch", Uz, this), (0, Dw.c)(this, "armSwinging", fz, this), (0, Dw.c)(this, "heldItemName", Iz, this), (0, Dw.c)(this, "heldItemEnchantmentTier", Bz, this), (0, Dw.c)(this, "pose", Gz, this), (0, Dw.c)(this, "ridingVehicleEId", hz, this), (0, Dw.c)(this, "meshOffset", nz, this), (0, Dw.c)(this, "baseRenderHeading", Mz, this), (0, Dw.c)(this, "armour", Oz, this)
        }
      }, cz = (0, zw.d)(Lz.prototype, "scale", [vD], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return 1
        }
      }), gz = (0, zw.d)(Lz.prototype, "speed", [tD], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return 0
        }
      }), Rz = (0, zw.d)(Lz.prototype, "jumping", [FD], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return !1
        }
      }), Az = (0, zw.d)(Lz.prototype, "crouching", [YD], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return !1
        }
      }), Uz = (0, zw.d)(Lz.prototype, "cameraPitch", [HD], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return 0
        }
      }), fz = (0, zw.d)(Lz.prototype, "armSwinging", [qD], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return !1
        }
      }), Iz = (0, zw.d)(Lz.prototype, "heldItemName", [Dz], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: null
      }), Bz = (0, zw.d)(Lz.prototype, "heldItemEnchantmentTier", [zz], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: null
      }), Gz = (0, zw.d)(Lz.prototype, "pose", [wz], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return "standing"
        }
      }), hz = (0, zw.d)(Lz.prototype, "ridingVehicleEId", [pz], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return null
        }
      }), nz = (0, zw.d)(Lz.prototype, "meshOffset", [sz], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return new ww.ArraySchema(0, 0, 0)
        }
      }), Mz = (0, zw.d)(Lz.prototype, "baseRenderHeading", [Kz], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return 0
        }
      }), Oz = (0, zw.d)(Lz.prototype, "armour", [rz], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return new ww.MapSchema
        }
      }), Lz),
      Aw = (Jz = (0, ww.type)("string"), Ez = (0, ww.type)("string"), Qz = (0, ww.type)("string"), Xz = (0, ww.type)("uint8"), Vz = class extends Rw {
        constructor() {
          super(...arguments), (0, Dw.c)(this, "variation", Pz, this), (0, Dw.c)(this, "ownerDbId", Cz, this), (0, Dw.c)(this, "metaInfo", xz, this), (0, Dw.c)(this, "aiState", Tz, this)
        }
      }, Pz = (0, zw.d)(Vz.prototype, "variation", [Jz], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return "default"
        }
      }), Cz = (0, zw.d)(Vz.prototype, "ownerDbId", [Ez], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return null
        }
      }), xz = (0, zw.d)(Vz.prototype, "metaInfo", [Qz], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return ""
        }
      }), Tz = (0, zw.d)(Vz.prototype, "aiState", [Xz], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return 0
        }
      }), Vz);
    bz = (0, ww.type)("string"), jz = (0, ww.type)("string"), dz = (0, ww.type)("string"), Sz = (0, ww.type)("string"), iz = class extends gw {
      constructor() {
        super(...arguments), (0, Dw.c)(this, "meshKind", lz, this), (0, Dw.c)(this, "meshOpts", Wz, this), (0, Dw.c)(this, "pose", Nz, this), (0, Dw.c)(this, "leaderboardTop", Zz, this)
      }
    }, lz = (0, zw.d)(iz.prototype, "meshKind", [bz], {
      configurable: !0,
      enumerable: !0,
      writable: !0,
      initializer: null
    }), Wz = (0, zw.d)(iz.prototype, "meshOpts", [jz], {
      configurable: !0,
      enumerable: !0,
      writable: !0,
      initializer: null
    }), Nz = (0, zw.d)(iz.prototype, "pose", [dz], {
      configurable: !0,
      enumerable: !0,
      writable: !0,
      initializer: null
    }), Zz = (0, zw.d)(iz.prototype, "leaderboardTop", [Sz], {
      configurable: !0,
      enumerable: !0,
      writable: !0,
      initializer: null
    });

    function Uw(DD) {
      return Object.keys(ww.Metadata.getFields(DD))
    }
    const fw = Uw(Aw);
    for (const zp of pw.r)
      if (!fw.includes(zp)) throw new Error(`Mob Schema is missing a networked property: "${zp}"`);
    const Iw = Uw((yz = (0, ww.type)("string"), kz = (0, ww.type)("float32"), mz = (0, ww.type)("float32"), ez = (0, ww.type)("float32"), oz = (0, ww.type)("float32"), az = class extends gw {
      constructor() {
        super(...arguments), (0, Dw.c)(this, "soundName", uz, this), (0, Dw.c)(this, "volume", vz, this), (0, Dw.c)(this, "refDistance", tz, this), (0, Dw.c)(this, "maxHearDist", Fz, this), (0, Dw.c)(this, "rate", Yz, this)
      }
    }, uz = (0, zw.d)(az.prototype, "soundName", [yz], {
      configurable: !0,
      enumerable: !0,
      writable: !0,
      initializer: function() {
        return ""
      }
    }), vz = (0, zw.d)(az.prototype, "volume", [kz], {
      configurable: !0,
      enumerable: !0,
      writable: !0,
      initializer: function() {
        return 1
      }
    }), tz = (0, zw.d)(az.prototype, "refDistance", [mz], {
      configurable: !0,
      enumerable: !0,
      writable: !0,
      initializer: function() {
        return Kw.g
      }
    }), Fz = (0, zw.d)(az.prototype, "maxHearDist", [ez], {
      configurable: !0,
      enumerable: !0,
      writable: !0,
      initializer: function() {
        return Kw.e
      }
    }), Yz = (0, zw.d)(az.prototype, "rate", [oz], {
      configurable: !0,
      enumerable: !0,
      writable: !0,
      initializer: function() {
        return 1
      }
    }), az));
    for (const zp of sw.h)
      if (!Iw.includes(zp)) throw new Error(`AudioEntity Schema is missing a replicated property: "${zp}"`);
    var Bw = wD(38420),
      Gw = wD(1245),
      hw = wD(619),
      nw = wD(38178),
      Mw = wD(4257),
      Ow = wD(351),
      Jw = wD(37267),
      Ew = wD(38082),
      Qw = wD(2197),
      Xw = wD(37233),
      Vw = wD(38445),
      Pw = wD(37385),
      Cw = wD(358),
      xw = wD.n(Cw),
      Tw = wD(37920),
      bw = wD(37052),
      jw = wD(38057),
      dw = wD(38094);
    class Sw {
      constructor(DD, zD) {
        this.bloxd = DD, this.eId = zD, this.AU = void 0, this.colyseusEntity = void 0, this.canSeeSub = void 0, this.canAttackSub = void 0, this.interactableSub = void 0, this.overlayColourSub = void 0, this.opacitySub = void 0, this.zIndexSub = void 0, this.multilineTextBoxSub = void 0, this.previousHidingMeshManagerState = void 0, this.meshKind = void 0, this.meshOpts = void 0, this.leaderboardTop = void 0, this.meshRebuildQueued = !1, this.MI = !1, this.AU = DD.AU
      }
      initClient(DD) {
        var zD, wD, pD;
        this.colyseusEntity = DD, this.meshKind = DD.meshKind, this.meshOpts = DD.meshOpts, this.leaderboardTop = DD.leaderboardTop, this.AU.yJ.add([DD.x, DD.y, DD.z], 1, 1, null, null, !1, !1, this.eId), this.AU.yJ.UW(this.eId, "smoothToServerPos");
        const sD = "Person" === this.meshKind;
        this.AU.yJ.UW(this.eId, "meshRotation", {
          isServerControlled: !0,
          ...sD ? {
            defaultRotationsPerSecond: .5
          } : {},
          childrenNodeParams: sD ? [{
            nodeName: "HeadMesh",
            softTolerance: Vw.j,
            hardTolerance: null
          }] : []
        }), this.updateHidingMeshMgr(), this.canSeeSub = Hz.l.subscribe(`otherEntitySettings|${this.eId}|canSee`, (DD => {
          this.updateHidingMeshMgr()
        }));
        const KD = () => {
          const DD = this.AU.yJ.QzD(this.eId);
          if (!DD) return;
          const zD = (0, Pw.k)(this.eId);
          if ("number" === typeof DD.Vl) {
            var wD, pD, sD, KD;
            const rD = null === (wD = (0, Qw.l)("head", null === (sD = this.getSpec()) || void 0 === sD || null === (KD = sD.opts.textures) || void 0 === KD ? void 0 : KD.head)) || void 0 === wD || null === (pD = wD.personModel) || void 0 === pD ? void 0 : pD.fullBody;
            return this.AU.wB.Ql.setPickable(DD.Vl, zD && !rD), void(0, bw.updatePersonAttachmentPickability)(this.AU, this.eId, zD)
          }
          const rD = DD.mesh;
          if (rD)
            for (const LD of [rD, ...rD.getChildMeshes(!1)]) "uB" in LD && !LD.name.startsWith("Cape|") && (LD.uB = zD)
        };
        this.canAttackSub = Hz.l.subscribe(`otherEntitySettings|${this.eId}|canAttack`, KD), this.interactableSub = Hz.l.subscribe(`otherEntitySettings|${this.eId}|interactable`, KD), this.overlayColourSub = Hz.l.subscribe(`otherEntitySettingsClientifiedEId|${this.eId}|overlayColour`, (DD => {
          this.updateOverlayColour(DD)
        })), this.opacitySub = Hz.l.subscribe(`otherEntitySettingsClientifiedEId|${this.eId}|opacity`, (DD => {
          this.updateOpacity(DD)
        })), this.zIndexSub = Hz.l.subscribe(`otherEntitySettingsClientifiedEId|${this.eId}|zIndex`, (DD => {
          this.updateZIndex(DD)
        }));
        const rD = this.AU.oW[this.AU.vW][this.eId];
        this.updateOverlayColour(null !== (zD = null === rD || void 0 === rD ? void 0 : rD.overlayColour) && void 0 !== zD ? zD : null), this.updateOpacity(null !== (wD = null === rD || void 0 === rD ? void 0 : rD.opacity) && void 0 !== wD ? wD : 1), this.updateZIndex(null !== (pD = null === rD || void 0 === rD ? void 0 : rD.zIndex) && void 0 !== pD ? pD : 0), this.multilineTextBoxSub = (0, Xw.l)(this.AU, this.eId)
      }
      onChangeClient(DD, zD) {
        if ("xRotation" === DD || "yRotation" === DD || "zRotation" === DD)(0, Xw.m)(this.AU, this.eId, DD, zD);
        else if ("pose" === DD) {
          const DD = this.AU.yJ.TzD(this.eId);
          DD && (DD.pose = zD || "standing")
        } else "meshKind" === DD || "meshOpts" === DD ? (this[DD] = zD, this.queueMeshRebuild()) : "name" === DD && "" !== zD ? this.updateHidingMeshMgr() : "leaderboardTop" === DD && (this.leaderboardTop = zD, Hz.l.KG(`leaderboardTop|${this.eId}`, zD))
      }
      disposeClient() {
        this.MI = !0, this.AU.yJ.deleteEntity(this.eId), Hz.l.unsubscribe(this.canSeeSub), Hz.l.unsubscribe(this.canAttackSub), Hz.l.unsubscribe(this.interactableSub), Hz.l.unsubscribe(this.overlayColourSub), Hz.l.unsubscribe(this.opacitySub), Hz.l.unsubscribe(this.zIndexSub), Hz.l.unsubscribe(this.multilineTextBoxSub)
      }
      getCurrentHidingMeshMgrState() {
        var DD, zD;
        return {
          canSee: null !== (DD = null === (zD = this.AU.oW[this.AU.vW][this.eId]) || void 0 === zD ? void 0 : zD.canSee) && void 0 !== DD && DD,
          name: this.colyseusEntity.name,
          meshKind: this.meshKind,
          meshOpts: this.meshOpts
        }
      }
      updateHidingMeshMgr() {
        var DD, zD, wD;
        const {
          AU: pD
        } = this, {
          yJ: sD
        } = pD, KD = this.getCurrentHidingMeshMgrState();
        if ((0, Ow._d)(this.previousHidingMeshManagerState, KD)) return;
        if (this.previousHidingMeshManagerState = KD, sD.fW(this.eId, "hidingMeshManager"), null === (DD = pD.oW[pD.vW][this.eId]) || void 0 === DD || !DD.canSee) return;
        const rD = this.getSpec();
        if (!rD) return;
        const {
          type: LD,
          opts: cD
        } = rD;
        "Person" === LD && (cD.textures = (0, Qw.o)(cD.textures)), cD.eId = this.eId, sD.UW(this.eId, "hidingMeshManager", {
          addMeshComponent: () => {
            var DD, zD, wD;
            "Leaderboard" === LD && (cD.leaderboardTop = this.leaderboardTop);
            const KD = this.bloxd.client.meshCreator.getEntityMesh(LD, cD, (DD => {
              var zD, wD;
              if ("number" === typeof DD) {
                var sD, KD, rD;
                const zD = pD.wB.Ql;
                zD.setEntityId(DD, this.eId);
                const wD = "Person" === LD && (null === (sD = (0, Qw.l)("head", null === (rD = cD.textures) || void 0 === rD ? void 0 : rD.head)) || void 0 === sD || null === (KD = sD.personModel) || void 0 === KD ? void 0 : KD.fullBody);
                return void zD.setPickable(DD, (0, Pw.k)(this.eId) && !wD)
              }
              const gD = DD;
              for (const LD of [gD, ...gD.getChildMeshes(!1)]) void 0 === LD.uB || LD.name.startsWith("Cape|") || (LD.uB = (0, Pw.k)(this.eId), LD.metadata ??= new pD.wB.vB, LD.metadata.eId = this.eId);
              this.updateOpacity(null !== (zD = null === (wD = pD.oW[pD.vW][this.eId]) || void 0 === wD ? void 0 : wD.opacity) && void 0 !== zD ? zD : 1)
            }));
            if (!KD) return;
            const {
              Vl: rD,
              mesh: gD,
              meshOffset: RD,
              nameYOffset: AD,
              modelLoaded: UD
            } = KD;
            null === UD || void 0 === UD || UD.then((() => {
              var DD;
              (null === (DD = sD.QzD(this.eId)) || void 0 === DD ? void 0 : DD.mesh) === gD && (this.previousHidingMeshManagerState = null, this.updateHidingMeshMgr())
            }));
            const fD = null === rD ? null : pD.wB.Ql.JpD(rD, 0);
            if (sD.UW(this.eId, sD.names.mesh, {
                Vl: rD,
                uwD: fD,
                mesh: gD,
                JLD: !1,
                twD: "Leaderboard" !== LD,
                offset: RD.slice(),
                MLD: "ParticleEmitter" === LD && cD.followTargetMeshOffset ? DD => {
                  var zD;
                  xw().copy(DD, RD);
                  const wD = null === (zD = sD.nwD(this.eId)) || void 0 === zD ? void 0 : zD.UI,
                    pD = void 0 === wD ? null : sD.TzD(wD);
                  if (pD) {
                    var KD, rD;
                    const zD = this.bloxd.getEntityHeading(null !== (KD = pD.ridingVehicleEId) && void 0 !== KD ? KD : wD, !0),
                      sD = Math.sin(zD),
                      LD = Math.cos(zD);
                    DD[0] += pD.meshOffset[0] * LD + pD.meshOffset[2] * sD, DD[1] += pD.meshOffset[1], DD[2] += pD.meshOffset[2] * LD - pD.meshOffset[0] * sD;
                    const cD = null !== (rD = pD.ridingVehicleEId) && void 0 !== rD ? rD : null;
                    null !== cD && (0, dw.c)(this.AU, cD, DD)
                  }
                } : null
              }), "Person" === LD) {
              var ID, BD, GD, hD;
              sD.UW(this.eId, sD.names.meshAttachments, {
                personFullBody: null !== (ID = null === (BD = (0, Qw.l)("head", null === (hD = cD.textures) || void 0 === hD ? void 0 : hD.head)) || void 0 === BD || null === (GD = BD.personModel) || void 0 === GD ? void 0 : GD.fullBody) && void 0 !== ID && ID
              });
              for (const DD of Gw.r) {
                var nD, MD, OD;
                const zD = null === (nD = cD.textures) || void 0 === nD ? void 0 : nD[DD];
                zD && null !== (MD = (0, Qw.l)(DD, zD)) && void 0 !== MD && null !== (OD = MD.attachments) && void 0 !== OD && OD.length && Ew.d.Player.meshApi.updatePlayerCosmetic(this.eId, rD, DD, zD)
              }
              sD.UW(this.eId, sD.names.moveState), sD.UW(this.eId, "updateWalkingState", {
                Vl: rD,
                uwD: fD,
                walkingLegSwingDuration: Vw.t
              }), sD.UW(this.eId, "humanoidMesh", {
                Vl: rD,
                uwD: fD,
                heldItemPositionParams: {},
                maxWalkingAngleOverride: null
              }), sD.UW(this.eId, "animator", {
                Vl: rD,
                uwD: fD,
                modelLifeformType: "Player"
              }), jw.h.hasAnimation("Person") && sD.UW(this.eId, "rigAnimation", {
                target: "Person",
                Vl: rD
              }), sD.TzD(this.eId).pose = this.colyseusEntity.pose || "standing"
            } else if ("BloxdBlock" === LD && null !== rD) {
              sD.UW(this.eId, "animator", {
                Vl: rD,
                uwD: fD,
                modelLifeformType: null
              });
              const DD = (0, nw.t)(cD.blockName);
              null !== DD && sD.UW(this.eId, "rigAnimation", {
                target: DD,
                Vl: rD
              })
            }
            sD.uLD(this.eId, "entityName", {
              name: this.colyseusEntity.name,
              nameYOffset: AD
            }), this.bloxd.setEntityName(this.eId, this.colyseusEntity.name), !0 === cD.autoRotate && (sD.fW(this.eId, "meshRotation"), sD.UW(this.eId, "autoRotate"));
            const {
              lineToEId: JD
            } = cD;
            (0, hw.B)(JD) || sD.UW(this.eId, "lineToEntity", {
              lineToEId: JD
            });
            const ED = pD.oW[pD.vW][this.eId];
            this.updateOverlayColour(null !== (DD = null === ED || void 0 === ED ? void 0 : ED.overlayColour) && void 0 !== DD ? DD : null), this.updateOpacity(null !== (zD = null === ED || void 0 === ED ? void 0 : ED.opacity) && void 0 !== zD ? zD : 1), this.updateZIndex(null !== (wD = null === ED || void 0 === ED ? void 0 : ED.zIndex) && void 0 !== wD ? wD : 0)
          },
          removeMeshComponent: () => {
            "Person" !== LD && "BloxdBlock" !== LD || sD.fW(this.eId, "rigAnimation"), sD.fW(this.eId, sD.names.mesh), sD.aDD(this.eId, sD.names.meshAttachments) && sD.fW(this.eId, sD.names.meshAttachments), sD.fW(this.eId, "entityName"), sD.fW(this.eId, "autoRotate"), sD.fW(this.eId, "lineToEntity"), "Person" === LD ? (sD.fW(this.eId, sD.names.moveState), sD.fW(this.eId, "updateWalkingState"), sD.fW(this.eId, "humanoidMesh"), sD.fW(this.eId, "animator")) : "BloxdBlock" === LD && sD.fW(this.eId, "animator")
          },
          hideDist: null !== (zD = cD.hideDist) && void 0 !== zD ? zD : 80,
          movingHideDist: null !== (wD = cD.hideDist) && void 0 !== wD ? wD : 120,
          displayOutsideLoadedChunk: cD.hideDist > 100,
          immediatelyUpdate: !0,
          Vr: "BloxdBlock" === LD ? cD.blockName : LD
        })
      }
      queueMeshRebuild() {
        this.meshRebuildQueued || (this.meshRebuildQueued = !0, queueMicrotask((() => {
          this.meshRebuildQueued = !1, this.MI || this.updateHidingMeshMgr()
        })))
      }
      getSpec() {
        return (0, Mw.g)({
          meshKind: this.meshKind,
          meshOpts: this.meshOpts
        })
      }
      updateOverlayColour(DD) {
        var zD, wD;
        if ("Person" !== this.meshKind) return;
        let pD = new Jw.e(0, 0, 0, 0);
        if (null !== DD) {
          const zD = (0, Ow.Y)(DD);
          pD = new Jw.e(zD[0] / 255, zD[1] / 255, zD[2] / 255, .5)
        }
        const sD = null !== (zD = null === (wD = this.AU.yJ.QzD(this.eId)) || void 0 === wD ? void 0 : wD.Vl) && void 0 !== zD ? zD : null;
        null !== sD && Ew.d.Player.meshApi.updateMeshOverlayColour(sD, pD)
      }
      updateZIndex(DD) {
        var zD;
        if ("Person" !== this.meshKind) return;
        const wD = null === (zD = this.AU.yJ.QzD(this.eId)) || void 0 === zD ? void 0 : zD.Vl;
        "number" === typeof wD && this.AU.wB.Ql.setRenderingGroupId(wD, DD)
      }
      updateOpacity(DD) {
        const zD = this.AU.yJ.QzD(this.eId);
        zD && ("number" !== typeof zD.Vl ? zD.mesh && "ParticleEmitter" !== this.meshKind && (0, Tw.i)(zD.mesh, DD) : Ew.d.Player.meshApi.updateMeshOpacity(zD.Vl, DD))
      }
    }
    var iw = wD(38933);
    class lw {
      constructor(DD, zD) {
        this.eId = zD, this.AU = void 0, this.schema = void 0, this.AU = DD.AU
      }
      initClient(DD) {
        this.schema = DD, this.AU.yJ.add([DD.x, DD.y, DD.z], .1, .1, null, null, !1, !1, this.eId), this.AU.yJ.UW(this.eId, "smoothToServerPos"), iw.e.add(this.eId, this.copyOpts())
      }
      onChangeClient(DD) {
        sw.h.includes(DD) && iw.e.update(this.eId, this.copyOpts())
      }
      disposeClient() {
        iw.e.remove(this.eId), this.AU.yJ.deleteEntity(this.eId)
      }
      copyOpts() {
        const {
          soundName: DD,
          volume: zD,
          refDistance: wD,
          maxHearDist: pD,
          rate: sD
        } = this.schema;
        return {
          soundName: DD,
          volume: zD,
          refDistance: wD,
          maxHearDist: pD,
          rate: sD
        }
      }
    }
    var Ww = wD(3688),
      Nw = wD(36726),
      Zw = wD(6520),
      yw = wD(37762),
      kw = wD(2769),
      mw = wD(38123),
      ew = wD(9080),
      ow = wD(38455),
      aw = wD(37743),
      uw = wD(2925);
    class vw {
      constructor(DD, zD) {
        let wD = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 4,
          pD = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : () => performance.now();
        this.ywD = DD, this.AU = zD, this.setupBudgetMs = wD, this.now = pD, this.createStateCallbacks = void 0, this.roomStateCallbacks = void 0, this.allItems = {}, this.detachers = new Map, this.deferredSetups = new Map, this.queuedSetups = new Map, this.promotedSetups = new Set, this.setupBudgetLeftMs = void 0, this.lastRefillMs = void 0, this.roomState = void 0, this.MI = !1, this.onFrame = () => {
          this.setUpQueuedEntities(!0)
        }, this.QJ = () => {
          this.setUpQueuedEntities(this.now() - this.lastRefillMs > 100)
        }, this.setUpPromoted = () => {
          for (const DD of this.promotedSetups) {
            this.promotedSetups.delete(DD);
            const zD = this.queuedSetups.get(DD);
            zD && (this.queuedSetups.delete(DD), this.timedSetup(zD, DD))
          }
        }, this.createStateCallbacks = (0, ew.getStateCallbacks)(DD), this.roomStateCallbacks = this.createStateCallbacks(DD.state), this.roomState = DD.state, this.setupBudgetLeftMs = wD, this.lastRefillMs = pD()
      }
      setup() {
        this.setupEntityHandlers(), this.setupItemHandlers(), this.ywD.onStateChange(this.setUpPromoted), this.AU.on("beforeInputs", this.onFrame), this.AU.on("DU", this.QJ)
      }
      setUpQueuedEntities(DD) {
        var zD;
        if ((null === (zD = (0, kw.b)().client.getMsgHandler()) || void 0 === zD ? void 0 : zD.ywD) !== this.ywD) return this.AU.off("beforeInputs", this.onFrame), this.AU.off("DU", this.QJ), this.queuedSetups.clear(), void this.promotedSetups.clear();
        if (DD && (this.setupBudgetLeftMs = this.setupBudgetMs, this.lastRefillMs = this.now()), this.setUpPromoted(), 0 !== this.queuedSetups.size)
          for (xw().copy(tw, this.AU.yJ.PJ(this.AU.vW)); this.setupBudgetLeftMs > 0;) {
            const DD = this.nearestQueued(tw);
            if (null === DD) return;
            this.setUpIfQueued(DD), this.setUpPromoted()
          }
      }
      nearestQueued(DD) {
        let zD = null,
          wD = 1 / 0;
        return this.queuedSetups.forEach(((pD, sD) => {
          const KD = function(DD, zD) {
            return (zD.x - DD[0]) ** 2 + (zD.y - DD[1]) ** 2 + (zD.z - DD[2]) ** 2
          }(DD, pD);
          (null === zD || KD < wD) && (zD = sD, wD = KD)
        })), zD
      }
      setUpOrQueue(DD, zD) {
        0 === this.queuedSetups.size && this.setupBudgetLeftMs > 0 || this.mustSetUpNow(DD, zD) ? this.timedSetup(DD, zD) : this.queuedSetups.set(zD, DD)
      }
      mustSetUpNow(DD, zD) {
        const wD = this.AU.vDD;
        if (zD === wD) return !0;
        const pD = this.roomState.entities.get(wD);
        return !(!pD || pD.ridingVehicleEId !== zD && pD.followingEId !== zD) || (Fw(DD.type) === Bw.b || (0, kw.b)().getFollowingEntities(zD).length > 0)
      }
      setUpIfQueued(DD) {
        const zD = this.queuedSetups.get(DD);
        zD && (this.queuedSetups.delete(DD), this.timedSetup(zD, DD))
      }
      promoteIfQueued(DD) {
        null !== DD && this.queuedSetups.has(DD) && this.promotedSetups.add(DD)
      }
      timedSetup(DD, zD) {
        const wD = this.now();
        this.setupEntity(DD, zD), this.setupBudgetLeftMs -= this.now() - wD
      }
      setupEntityHandlers() {
        this.roomStateCallbacks.entities.ZJ(((DD, zD) => {
          this.AU.vDD ? this.setUpOrQueue(DD, zD) : this.deferEntitySetupUntilInitInfo(DD, zD)
        })), this.roomStateCallbacks.entities.hT(((DD, zD) => {
          const wD = this.deferredSetups.get(zD);
          wD && (Hz.l.unsubscribe(wD), this.deferredSetups.delete(zD)), this.queuedSetups.delete(zD), this.detach(zD), (0, kw.b)().client.disposeEntity(zD)
        }))
      }
      deferEntitySetupUntilInitInfo(DD, zD) {
        const wD = Hz.l.gM("initInfoReceived", (() => {
          this.deferredSetups.delete(zD), this.setUpOrQueue(DD, zD)
        }));
        this.deferredSetups.set(zD, wD), (0, Ww.onGameResetOnce)((() => {
          this.deferredSetups.get(zD) === wD && (Hz.l.unsubscribe(wD), this.deferredSetups.delete(zD)), (0, kw.b)().updatePositionAndPhysics(this.AU.vW, {
            type: Zw.q.DEFAULT,
            tier: null
          }, !0), (0, kw.b)().takeHeldPlayerBodySize(this.AU.vW);
          const DD = this.AU.yJ.gzD(this.AU.vW);
          DD && (DD.movementType = Zw.o.NORMAL)
        }))
      }
      setupEntity(DD, zD) {
        const wD = zD === this.AU.vDD;
        if (wD)(0, kw.b)().client.RY(this.AU.vW, null, null);
        else {
          const {
            type: wD
          } = DD, pD = Fw(wD);
          if (void 0 === pD) return void
          function(DD, zD) {
            const wD = String(DD);
            if (Yw.has(wD)) return;
            Yw.add(wD);
            const pD = wD.length > 80 ? `${wD.slice(0,80)}...` : wD,
              sD = `No client handler for entity type ${JSON.stringify(pD)}, so entity ${zD} is not set up`;
            console.warn(sD), (0, uw.reportClientError)("uncaught", sD, "unknown_entity_type")
          }(wD, zD);
          (0, kw.b)().client.RY(zD, DD, new pD((0, kw.b)(), zD, wD))
        }
        const pD = this.createStateCallbacks(DD);
        if (wD) return this.setupMapSchemaCallbacks(zD, DD, pD, "armour"), this.setupScalarField(zD, DD, pD, "scale"), this.setupScalarField(zD, DD, pD, "ridingVehicleEId"), this.setupScalarField(zD, DD, pD, "followingEId"), this.setupScalarField(zD, DD, pD, "followingOffset"), void this.setupScalarField(zD, DD, pD, "shouldMatchFollowingEntityRotation");
        for (const sD of Uw(DD.constructor)) DD[sD] instanceof ww.MapSchema ? this.setupMapSchemaCallbacks(zD, DD, pD, sD) : this.setupScalarField(zD, DD, pD, sD)
      }
      setupMapSchemaCallbacks(DD, zD, wD, pD) {
        const sD = wD[pD],
          KD = new Map;
        sD.ZJ(((wD, sD) => {
          if (this.onEntityFieldChange(DD, zD, pD, {
              key: sD,
              value: wD
            }), !(wD instanceof ww.Schema)) return;
          const rD = this.createStateCallbacks(wD),
            LD = [];
          for (const KD of Uw(wD.constructor)) LD.push(this.listenForFutureChanges(rD, KD, (() => {
            this.onEntityFieldChange(DD, zD, pD, {
              key: sD,
              value: wD
            })
          })));
          KD.set(sD, (() => {
            for (const DD of LD) DD()
          }))
        })), sD.hT(((wD, sD) => {
          var rD;
          null === (rD = KD.get(sD)) || void 0 === rD || rD(), KD.delete(sD), this.onEntityFieldChange(DD, zD, pD, {
            key: sD,
            value: null
          })
        })), this.addDetacher(DD, (() => {
          for (const DD of KD.values()) DD();
          KD.clear()
        }))
      }
      setupScalarField(DD, zD, wD, pD) {
        this.onEntityFieldChange(DD, zD, pD, zD[pD]);
        const sD = this.listenForFutureChanges(wD, pD, (wD => {
          this.onEntityFieldChange(DD, zD, pD, wD)
        }));
        this.addDetacher(DD, sD)
      }
      addDetacher(DD, zD) {
        let wD = this.detachers.get(DD);
        wD || (wD = [], this.detachers.set(DD, wD)), wD.push(zD)
      }
      detach(DD) {
        for (const wD of null !== (zD = this.detachers.get(DD)) && void 0 !== zD ? zD : []) {
          var zD;
          wD()
        }
        this.detachers.delete(DD)
      }
      listenForFutureChanges(DD, zD, wD) {
        return DD.listen(zD, wD, !1)
      }
      onEntityFieldChange(DD, zD, wD, pD) {
        switch (wD) {
          case "ridingVehicleEId": {
            this.promoteIfQueued(pD);
            const zD = this.AU.yJ.TzD((0, Nw.b)(DD));
            zD && (zD.ridingVehicleEId = pD);
            break
          }
          case "armour":
            this.handleArmourChange(DD, pD);
            break;
          case "followingEId":
            this.promoteIfQueued(pD), this.handleFollowingEIdChange(DD, zD, pD);
            break;
          case "xRotation":
          case "yRotation":
          case "zRotation":
            this.handleRotationChange(DD, wD, pD);
            break;
          case "scale":
            this.handleScaleChange(DD, pD);
            break;
          case "baseRenderHeading":
            this.handleBaseRenderHeadingChange(DD, pD);
            break;
          case "followingOffset":
            this.handleFollowingOffsetChange(DD, pD);
            break;
          case "shouldMatchFollowingEntityRotation":
            this.handleShouldMatchFollowingEntityRotationChange(DD, pD);
            break;
          case "x":
          case "y":
          case "z":
            return void this.handlePositionChange(DD, wD, pD)
        }(0, kw.b)().client.updateEntityField(DD, wD, pD)
      }
      handleArmourChange(DD, zD) {
        var wD, pD;
        const {
          key: sD,
          value: KD
        } = zD;
        (0, Ew.H)(DD, sD, null !== (wD = null === KD || void 0 === KD ? void 0 : KD.itemName) && void 0 !== wD ? wD : null, null !== (pD = null === KD || void 0 === KD ? void 0 : KD.enchantmentTier) && void 0 !== pD ? pD : null)
      }
      handleFollowingEIdChange(DD, zD, wD) {
        const pD = (0, Nw.b)(DD),
          sD = pD === this.AU.vW;
        if (this.AU.yJ.fW(pD, this.AU.yJ.names.WE), wD) this.AU.yJ.fW(pD, "smoothToServerPos"), this.AU.yJ.UW(pD, this.AU.yJ.names.WE, {
          UI: (0, Nw.b)(wD),
          offset: Array.from(zD.followingOffset),
          MwD: zD.shouldMatchFollowingEntityRotation,
          XwD: !0,
          VwD: (DD, pD) => {
            if (xw().copy(DD, zD.followingOffset), zD.ridingVehicleEId === wD) {
              const zD = (0, Nw.b)(wD),
                sD = (0, kw.b)().getEntityHeading(zD, pD);
              xw().gr(DD, DD, xw().ZERO, sD)
            }
          }
        });
        else if (!sD) {
          this.AU.yJ.aDD(pD, "smoothToServerPos") || this.AU.yJ.UW(pD, "smoothToServerPos");
          const DD = this.AU.yJ.getState(pD, "smoothToServerPos"),
            zD = this.AU.yJ.AY(pD).position;
          (0, aw.setServerPosition)(DD, zD[0], zD[1], zD[2])
        }
      }
      handleRotationChange(DD, zD, wD) {
        const pD = "xRotation" === zD ? 0 : "yRotation" === zD ? 1 : 2;
        for (const sD of (0, kw.b)().getFollowingEntities(DD)) {
          const DD = this.AU.yJ.getState(sD, "meshRotation"),
            zD = this.AU.yJ.nwD(sD);
          DD && zD.MwD && (DD.serverSetRotation[pD] = wD)
        }
      }
      handleScaleChange(DD, zD) {
        const wD = (0, Nw.b)(DD);
        if (Hz.l.KG(`entityScale|${wD}`, zD), wD === this.AU.vW) {
          var pD;
          (0, kw.b)().removeFromEyeHeightCache(wD);
          const DD = this.AU.yJ.gzD(this.AU.vW),
            zD = null !== (pD = null === DD || void 0 === DD ? void 0 : DD.physicsState) && void 0 !== pD ? pD : {
              type: Zw.q.DEFAULT,
              tier: null
            };
          return void(0, kw.b)().updatePositionAndPhysics(this.AU.vW, zD, !1)
        }
        const sD = (0, kw.b)().getLifeformType(wD);
        if (null === sD) return;
        const {
          physicsBodyWidth: KD,
          physicsBodyHeight: rD
        } = (0, ow.g)(zD, sD);
        this.AU.yJ.GwD(wD, KD, rD, KD)
      }
      handleBaseRenderHeadingChange(DD, zD) {
        const wD = this.AU.yJ.getState(DD, "meshRotation");
        wD && (wD.baseRenderRotation[1] = zD);
        for (const pD of (0, kw.b)().getFollowingEntities(DD)) {
          const DD = this.AU.yJ.getState(pD, "meshRotation"),
            wD = this.AU.yJ.nwD(pD);
          DD && wD.MwD && (DD.baseRenderRotation[1] = zD)
        }
      }
      handleFollowingOffsetChange(DD, zD) {
        const wD = this.AU.yJ.nwD((0, Nw.b)(DD));
        if (wD && wD.offset) {
          const DD = zD ? Array.from(zD) : xw().ZERO;
          wD.offset[0] = DD[0], wD.offset[1] = DD[1], wD.offset[2] = DD[2]
        }
      }
      handleShouldMatchFollowingEntityRotationChange(DD, zD) {
        const wD = this.AU.yJ.nwD((0, Nw.b)(DD));
        wD && (wD.MwD = null === zD || void 0 === zD || zD)
      }
      handlePositionChange(DD, zD, wD) {
        if (this.AU.yJ.aDD(DD, "smoothToServerPos")) {
          const pD = this.AU.yJ.getState(DD, "smoothToServerPos");
          (0, aw.setServerPositionAxis)(pD, Hw[zD], wD)
        }
      }
      setupItemHandlers() {
        this.roomStateCallbacks.items.ZJ(((DD, zD) => {
          this.allItems[zD] = DD, (0, yw.g)(this.AU, zD, [DD.x, DD.y, DD.z], DD.id, {
            amount: DD.amount,
            attributes: JSON.parse(DD.attributes),
            Lz: (0, qz.e)(this.AU).cantPickUpItem(zD),
            size: DD.size,
            predictedAt: (0, kw.b)().client.itemDropPrediction.onServerItemAdded(zD)
          });
          const wD = this.createStateCallbacks(DD);
          for (const pD of Uw(rw)) this.onItemFieldChange(zD, pD, DD[pD]), this.addDetacher(zD, this.listenForFutureChanges(wD, pD, (DD => {
            this.onItemFieldChange(zD, pD, DD)
          })))
        })), this.roomStateCallbacks.items.hT(((DD, zD) => {
          delete this.allItems[zD], this.detach(zD), (0, kw.b)().client.itemDropPrediction.onServerItemRemoved(zD), this.AU.yJ.aDD(zD, this.AU.yJ.names.itemState) && this.AU.yJ.deleteEntity(zD), (0, qz.e)(this.AU).disposeEntity(zD)
        }))
      }
      onItemFieldChange(DD, zD, wD) {
        if (zD in Hw) {
          if (this.AU.yJ.aDD(DD, "itemState")) {
            const pD = this.AU.yJ.getState(DD, "smoothToServerPos");
            (0, aw.setServerPositionAxis)(pD, Hw[zD], wD), (0, kw.b)().client.itemDropPrediction.onServerItemMoved(DD)
          }
          return
        }
        if (!this.AU.yJ.aDD(DD, "itemState")) return;
        const pD = this.AU.yJ.getState(DD, "itemState");
        "amount" === zD && wD !== pD.amount && (pD.creationTime = Date.now()), pD[zD] = "attributes" === zD ? JSON.parse(wD) : wD
      }
      dispose() {
        if (!this.MI) {
          this.MI = !0, this.AU.off("beforeInputs", this.onFrame), this.AU.off("DU", this.QJ), this.queuedSetups.clear(), this.promotedSetups.clear();
          for (const DD of this.deferredSetups.values()) Hz.l.unsubscribe(DD);
          this.deferredSetups.clear(), this.AU.yJ.fW(this.AU.vW, this.AU.yJ.names.WE);
          for (const DD in this.allItems) this.AU.yJ.deleteEntity(DD), delete this.allItems[DD];
          for (const DD of [...this.detachers.keys()]) this.detach(DD);
          (0, qz.e)(this.AU).clear();
          for (const DD of (0, kw.b)().client.iterateEntityIds())(0, kw.b)().client.disposeEntity(DD)
        }
      }
    }
    const tw = [0, 0, 0];

    function Fw(DD) {
      if ("string" !== typeof DD) return;
      const zD = DD.indexOf("|"),
        wD = -1 === zD ? DD : DD.slice(0, zD),
        pD = Dp();
      return Object.hasOwn(pD, wD) ? pD[wD] : void 0
    }
    const Yw = new Set;
    const Hw = {
      x: 0,
      y: 1,
      z: 2
    };
    let qw = null;

    function Dp() {
      return null !== qw || (qw = {
        ...Object.fromEntries(sw.k.map((DD => {
          const {
            Vr: zD
          } = (0, mw.e)(DD);
          return [DD, zD]
        }))),
        Pebble: Bw.b,
        Snowball: Bw.b,
        "Snowball Launcher": Bw.b,
        "Reinforced Pebble": Bw.b,
        Bullet: Bw.b,
        "Reinforced Ball": Bw.b,
        Ball: Bw.b,
        Mango: Bw.b,
        "Moonstone Orb": Bw.b,
        ...Object.fromEntries(pw.v.map((DD => [(0, Ow.Yb)(DD), Bw.b]))),
        Arrow: Bw.b,
        "Arrow of Speed": Bw.b,
        "Arrow of Poison": Bw.b,
        "Arrow of Slowness": Bw.b,
        "Arrow of Weakness": Bw.b,
        "Arrow of Knockback": Bw.b,
        "Arrow of Strength": Bw.b,
        "Arrow of Invisibility": Bw.b,
        "Arrow of Jumping": Bw.b,
        "Arrow of Defense": Bw.b,
        "Arrow of Instant Healing": Bw.b,
        "Arrow of Instant Damage": Bw.b,
        "Arrow of Regeneration": Bw.b,
        "Arrow of Haste": Bw.b,
        "Arrow of Shield": Bw.b,
        "Arrow of Double Jump": Bw.b,
        "Arrow of Heat Resistance": Bw.b,
        "Arrow of X-Ray Vision": Bw.b,
        "Arrow of Mining Yield": Bw.b,
        "Arrow of Brain Rot": Bw.b,
        "Arrow of Milk": Bw.b,
        Fireball: Bw.b,
        "Bouncy Bomb": Bw.b,
        RPG: Bw.b,
        "Obby RPG": Bw.b,
        "Super RPG": Bw.b,
        "Grenade Launcher": Bw.b,
        Iceball: Bw.b,
        Coconut: Bw.b,
        "Splash Speed Potion": Bw.b,
        "Splash Defense Potion": Bw.b,
        "Splash Strength Potion": Bw.b,
        "Splash Invisibility Potion": Bw.b,
        "Splash Jump Potion": Bw.b,
        "Splash Knockback Potion": Bw.b,
        "Splash Poison Potion": Bw.b,
        "Splash Speed Potion II": Bw.b,
        "Splash Defense Potion II": Bw.b,
        "Splash Strength Potion II": Bw.b,
        "Splash Jump Potion II": Bw.b,
        "Splash Knockback Potion II": Bw.b,
        "Splash Poison Potion II": Bw.b,
        "Splash Slowness Potion": Bw.b,
        "Splash Slowness Potion II": Bw.b,
        "Splash Weakness Potion": Bw.b,
        "Splash Weakness Potion II": Bw.b,
        "Splash Milk Potion": Bw.b,
        "Splash Instant Damage Potion": Bw.b,
        "Splash Instant Damage Potion II": Bw.b,
        "Splash Instant Healing Potion": Bw.b,
        "Splash Instant Healing Potion II": Bw.b,
        "Splash Regeneration Potion": Bw.b,
        "Splash Regeneration Potion II": Bw.b,
        "Splash Haste Potion": Bw.b,
        "Splash Haste Potion II": Bw.b,
        "Splash Shield Potion": Bw.b,
        "Splash Shield Potion II": Bw.b,
        "Splash Double Jump Potion": Bw.b,
        "Splash Heat Resistance Potion": Bw.b,
        "Splash X-Ray Vision Potion": Bw.b,
        "Splash Mining Yield Potion": Bw.b,
        "Splash Mining Yield Potion II": Bw.b,
        "Splash Brain Rot Potion": Bw.b,
        "Yellow Paintball Gun": Bw.b,
        "White Paintball Gun": Bw.b,
        "Red Paintball Gun": Bw.b,
        "Purple Paintball Gun": Bw.b,
        "Pink Paintball Gun": Bw.b,
        "Orange Paintball Gun": Bw.b,
        "Magenta Paintball Gun": Bw.b,
        "Lime Paintball Gun": Bw.b,
        "Light Gray Paintball Gun": Bw.b,
        "Light Blue Paintball Gun": Bw.b,
        "Green Paintball Gun": Bw.b,
        "Gray Paintball Gun": Bw.b,
        "Cyan Paintball Gun": Bw.b,
        "Brown Paintball Gun": Bw.b,
        "Blue Paintball Gun": Bw.b,
        "Black Paintball Gun": Bw.b,
        "Yellow Heavy Paintball Gun": Bw.b,
        "White Heavy Paintball Gun": Bw.b,
        "Red Heavy Paintball Gun": Bw.b,
        "Purple Heavy Paintball Gun": Bw.b,
        "Pink Heavy Paintball Gun": Bw.b,
        "Orange Heavy Paintball Gun": Bw.b,
        "Magenta Heavy Paintball Gun": Bw.b,
        "Lime Heavy Paintball Gun": Bw.b,
        "Light Gray Heavy Paintball Gun": Bw.b,
        "Light Blue Heavy Paintball Gun": Bw.b,
        "Green Heavy Paintball Gun": Bw.b,
        "Gray Heavy Paintball Gun": Bw.b,
        "Cyan Heavy Paintball Gun": Bw.b,
        "Brown Heavy Paintball Gun": Bw.b,
        "Blue Heavy Paintball Gun": Bw.b,
        "Black Heavy Paintball Gun": Bw.b,
        "Toxin Ball": Bw.b,
        "Splash Aura XP Potion": Bw.b,
        "Splash Aura XP Potion II": Bw.b,
        "Arrow of Aura XP": Bw.b,
        Firecracker: Bw.b,
        "Rainbow Firecracker": Bw.b,
        "White Firecracker": Bw.b,
        "Orange Firecracker": Bw.b,
        "Magenta Firecracker": Bw.b,
        "Light Blue Firecracker": Bw.b,
        "Yellow Firecracker": Bw.b,
        "Lime Firecracker": Bw.b,
        "Pink Firecracker": Bw.b,
        "Gray Firecracker": Bw.b,
        "Light Gray Firecracker": Bw.b,
        "Cyan Firecracker": Bw.b,
        "Purple Firecracker": Bw.b,
        "Blue Firecracker": Bw.b,
        "Brown Firecracker": Bw.b,
        "Green Firecracker": Bw.b,
        "Red Firecracker": Bw.b,
        "Black Firecracker": Bw.b,
        "Firecracker Pebble": Bw.b,
        "Rainbow Firecracker Pebble": Bw.b,
        "White Firecracker Pebble": Bw.b,
        "Orange Firecracker Pebble": Bw.b,
        "Magenta Firecracker Pebble": Bw.b,
        "Light Blue Firecracker Pebble": Bw.b,
        "Yellow Firecracker Pebble": Bw.b,
        "Lime Firecracker Pebble": Bw.b,
        "Pink Firecracker Pebble": Bw.b,
        "Gray Firecracker Pebble": Bw.b,
        "Light Gray Firecracker Pebble": Bw.b,
        "Cyan Firecracker Pebble": Bw.b,
        "Purple Firecracker Pebble": Bw.b,
        "Blue Firecracker Pebble": Bw.b,
        "Brown Firecracker Pebble": Bw.b,
        "Green Firecracker Pebble": Bw.b,
        "Red Firecracker Pebble": Bw.b,
        "Black Firecracker Pebble": Bw.b,
        "Blinding Pebble": Bw.b,
        Poop: Bw.b,
        "Wood Boomerang": Bw.b,
        "Stone Boomerang": Bw.b,
        "Iron Boomerang": Bw.b,
        "Gold Boomerang": Bw.b,
        "Diamond Boomerang": Bw.b,
        "Amethite Boomerang": Bw.b,
        "Magmasteel Boomerang": Bw.b,
        "Rubellite Boomerang": Bw.b,
        "Serpentite Boomerang": Bw.b,
        "Moonstone Boomerang": Bw.b,
        "67 Base Projectile": Bw.b,
        "67 Boosted Projectile": Bw.b,
        "Capitano Grenade": Bw.b,
        "Scatter Pellet": Bw.b,
        "Lucky Bomb": Bw.b,
        "Unlucky Bomb": Bw.b,
        "Swap Orb": Bw.b,
        Mesh: Sw,
        AudioEntity: lw
      }), qw
    }
  },
  38986: (DD, zD, wD) => {
    wD.d(zD, {
      b: () => KD,
      e: () => rD
    });
    var pD = wD(619),
      sD = wD(37710);
    const KD = 4e4;
    class rD {
      constructor() {
        let DD = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Date.now;
        this.now = DD, this.editedAt = new Map, this.lastChunkX = NaN, this.lastChunkY = NaN, this.lastChunkZ = NaN, this.lastChunkId = ""
      }
      noteEdit(DD, zD, wD) {
        const KD = (0, pD.L)(DD),
          rD = (0, pD.L)(zD),
          LD = (0, pD.L)(wD),
          cD = this.now();
        if (KD !== this.lastChunkX || rD !== this.lastChunkY || LD !== this.lastChunkZ) {
          this.lastChunkX = KD, this.lastChunkY = rD, this.lastChunkZ = LD, this.lastChunkId = (0, sD.b)(KD, rD, LD), this.editedAt.delete(this.lastChunkId), this.editedAt.set(this.lastChunkId, cD);
          for (const [DD, zD] of this.editedAt) {
            if (zD >= cD - 3e5) break;
            this.editedAt.delete(DD)
          }
        } else this.editedAt.set(this.lastChunkId, cD)
      }
      chunksEditedSince(DD) {
        const zD = [];
        for (const [wD, pD] of this.editedAt) pD >= DD && zD.push(wD);
        return zD
      }
    }
  },
  39047: (DD, zD, wD) => {
    wD.d(zD, {
      b: () => Az,
      c: () => Zz,
      d: () => Tz,
      g: () => yz
    });
    var pD = wD(3688),
      sD = wD(8785),
      KD = wD(36646),
      rD = wD(1426),
      LD = wD(36711),
      cD = wD(38933),
      gD = wD(38922),
      RD = wD(3757),
      AD = wD(37850),
      UD = wD(39052),
      fD = wD(1245),
      ID = wD(338),
      BD = wD(25),
      GD = wD(1956),
      hD = wD(103),
      nD = wD(35),
      MD = wD(1981),
      OD = wD(1886),
      JD = wD(2957);
    class ED {
      constructor(DD) {
        this.storeForMs = DD, this.clicks = new JD.b
      }
      click() {
        this.clicks.enqueue(Date.now());
        const DD = Date.now() - this.storeForMs;
        for (; this.clicks.size > 0 && this.clicks.peek() < DD;) this.clicks.dequeue()
      }
      getNumClicksInMs(DD) {
        let zD = 0;
        return this.clicks.forEach((wD => {
          wD > Date.now() - DD && zD++
        })), zD
      }
      getMaxClickSeparationInMs(DD) {
        if (0 === this.clicks.size) return this.storeForMs;
        let zD = 0,
          wD = Date.now() - DD;
        this.clicks.forEach((pD => {
          pD < Date.now() - DD || (zD = Math.max(zD, Math.abs(pD - wD)), wD = pD)
        }));
        const pD = Math.abs(Date.now() - wD);
        return Math.max(zD, pD)
      }
    }
    class QD {
      constructor(DD) {
        this.storeForMs = DD, this.clickDownDurations = new JD.b
      }
      registerClickDownDuration(DD) {
        this.clickDownDurations.enqueue({
          dur: DD,
          atTime: Date.now()
        });
        const zD = Date.now() - this.storeForMs;
        for (; this.clickDownDurations.size > 0 && this.clickDownDurations.peek().atTime < zD;) this.clickDownDurations.dequeue()
      }
      clickDownDurationsCheck(DD) {
        if (DD > this.storeForMs) return console.error("overDuration is greater than storeForMs"), "0:0";
        let zD = 0,
          wD = 0;
        return this.clickDownDurations.forEach((pD => {
          pD.atTime > Date.now() - DD && (zD++, wD = Math.max(wD, pD.dur))
        })), `${zD}:${wD}`
      }
    }
    var XD = wD(36495),
      VD = wD(39055),
      PD = wD(20),
      CD = wD(2769),
      xD = wD(1332),
      TD = wD(38996),
      bD = wD(4468),
      jD = wD(128),
      dD = wD(38130),
      SD = wD(38361),
      iD = wD(619),
      lD = wD(36491),
      WD = wD(9),
      ND = wD(9198),
      ZD = wD(1232),
      yD = wD(197),
      kD = wD(39064),
      mD = wD(39066),
      eD = wD(38159),
      oD = wD(39083),
      aD = wD(38066),
      uD = wD(3405),
      vD = wD(1648),
      tD = wD(36580),
      FD = wD(2811),
      YD = wD(39075),
      HD = wD(39079),
      qD = wD(37927);
    const Dz = {
      forward: "freeCamForward",
      backward: "freeCamBackward",
      left: "freeCamLeft",
      right: "freeCamRight",
      jump: "freeCamUp",
      crouch: "freeCamDown"
    };

    function zz() {
      var DD, zD;
      return !(null === (DD = (0, CD.b)().client) || void 0 === DD || null === (zD = DD.freeCameraController) || void 0 === zD || !zD.movesFly())
    }

    function wz(DD) {
      const zD = DD.on.bind(DD);
      DD.on = (DD, wD) => {
        MD.z.has(DD) ? zD(DD, wD) : zD(DD, (zD => {
          var pD;
          return null !== (pD = (0, CD.b)().client) && void 0 !== pD && pD.isReplayMode() ? function(DD) {
            return DD in Dz
          }(DD) && zz() ? wD(zD) : void 0 : wD(zD)
        }))
      }
    }
    const pz = 5e3,
      sz = 1;
    let Kz, rz = sz,
      Lz = 0;
    const cz = !0;
    let gz = cz;
    GD.e.subscribe("_ignoreBasicBoards", (DD => {
      gz = DD
    })), (0, pD.onGameReset)((() => {
      gz = cz
    }));
    let Rz = null;
    const Az = () => Rz;
    let Uz, fz, Iz;
    var Bz, Gz, hz, nz, Mz, Oz, Jz, Ez, Qz;
    const Xz = ["b", 0, 1, 164, 243, "a", "i", "g", 4, 6, "d", 8, 255, "length", 226, 167, 171, "undefined", void 0, 2, 3, 63, "fromCodePoint", 7, 12, "push", "e", 224, 197, 10, 199, 5, 113, 91, 131, 8191, 88, 13, 14, 114, 39, "h", 180, 124, 19, !1];

    function Vz(...DD) {
      return DD[Xz[13]] = Xz[2], typeof Bz[DD[Xz[1]]] === Xz[17] ? Bz[DD[Xz[1]]] = function(...DD) {
        for (xz(DD[Xz[13]] = Xz[2], DD[Xz[5]] = 'vRMXd/9IZBLbN%5D)C]w.7#lx>^(~Y3V0H"qhAG6{E+ei4Ok:,KU1t|!W2<8g};nsm$ryFfSuz`Jc@_?Q&a[Tj*poP=', DD[Xz[0]] = "" + (DD[Xz[1]] || ""), DD[-Xz[4]] = DD[Xz[0]].length, DD[Xz[10]] = [], DD[Xz[8]] = Xz[1], DD[Xz[9]] = Xz[1], DD[Xz[7]] = -Xz[2]), DD[Xz[3]] = Xz[1]; DD[Xz[3]] < DD[-Xz[4]]; DD[Xz[3]]++)
          if (DD[Xz[6]] = DD[Xz[5]].indexOf(DD[Xz[0]][DD[Xz[3]]]), DD[Xz[6]] !== -Xz[2])
            if (DD[Xz[7]] < Xz[1]) DD[Xz[7]] = DD[Xz[6]];
            else {
              xz(DD[Xz[7]] += DD[Xz[6]] * Xz[33], DD[Xz[8]] |= DD[Xz[7]] << DD[Xz[9]], DD[Xz[9]] += (DD[Xz[7]] & Xz[35]) > Xz[36] ? Xz[37] : Xz[38]);
              do {
                xz(DD[Xz[10]].push(DD[Xz[8]] & Xz[12]), DD[Xz[8]] >>= Xz[11], DD[Xz[9]] -= Xz[11])
              } while (DD[Xz[9]] > Xz[23]);
              DD[Xz[7]] = -Xz[2]
            } return DD[Xz[7]] > -Xz[2] && DD[Xz[10]].push((DD[Xz[8]] | DD[Xz[7]] << DD[Xz[9]]) & Xz[12]), Pz(DD[Xz[10]])
      }(Gz[DD[Xz[1]]]) : Bz[DD[Xz[1]]]
    }

    function Pz(...DD) {
      return DD[Xz[13]] = Xz[2], typeof nz !== Xz[17] && nz ? (new nz).decode(new Mz(DD[Xz[1]])) : typeof Oz !== Xz[17] && Oz ? Oz.from(DD[Xz[1]]).toString("utf-8") : Qz(DD[Xz[1]])
    }

    function Cz() {}

    function xz() {
      xz = function() {}
    }

    function Tz(DD) {
      function zD() {
        return DD.yJ.zwD(DD.vW)
      }
      wz(DD.inputs.down), wz(DD.inputs.up);
      for (const pD of ["forward", "backward", "left", "right", "sprint", "jump", "crouch"]) {
        const zD = (zD, wD) => {
          var sD, KD;
          if (zz()) {
            var rD;
            const sD = Dz[pD];
            var LD, cD;
            if (sD) null === (LD = (0, CD.b)().client) || void 0 === LD || null === (cD = LD.freeCameraController) || void 0 === cD || cD.handlefreeCamKeyPress(sD, zD, wD);
            return void(wD || null !== (rD = (0, CD.b)().client) && void 0 !== rD && rD.isReplayMode() || (DD.yJ.LwD()[pD] = !1))
          }
          if (null !== (sD = (0, CD.b)().client) && void 0 !== sD && null !== (KD = sD.freeCameraController) && void 0 !== KD && KD.isKeyPressOverriden(zD)) return;
          DD.yJ.LwD()[pD] = wD
        };
        DD.inputs.down.on(pD, (DD => zD(DD, !0))), DD.inputs.up.on(pD, (DD => zD(DD, !1)))
      }
      DD.inputs.down.on("crouch", (() => {
        if (zz()) return;
        if (!DD.NJ.canCrouch) return;
        const zD = DD.yJ.LwD();
        PD.e.get("clientEscMenuOptions").crouchIsToggle && (zD.crouchToggled = !zD.crouchToggled && !zD.padSneakToggled), zD.padSneakToggled = !1
      }));
      const wD = () => {
        const DD = zD();
        DD.isGun() && DD.inaccuracyCalculator.jump()
      };
      DD.inputs.down.on("jump", (DD => {
        zz() || (wD(), Uz(DD))
      }));
      for (const pD of MD.j) DD.inputs.down.on(pD, (DD => {
        var zD, wD;
        null !== (zD = (0, CD.b)().client) && void 0 !== zD && null !== (wD = zD.freeCameraController) && void 0 !== wD && wD.handlefreeCamKeyPress(pD, DD, !0) && (DD.preventDefault(), DD.stopPropagation())
      })), DD.inputs.up.on(pD, (DD => {
        var zD, wD;
        null !== (zD = (0, CD.b)().client) && void 0 !== zD && null !== (wD = zD.freeCameraController) && void 0 !== wD && wD.handlefreeCamKeyPress(pD, DD, !1) && (DD.preventDefault(), DD.stopPropagation())
      }));
      DD.inputs.down.on("recordGame", (() => {
        var DD, zD;
        null === (DD = (0, CD.b)().client) || void 0 === DD || null === (zD = DD.gameRecorder) || void 0 === zD || zD.toggleRecording()
      })), DD.inputs.down.on("recordClip", (() => {
        var DD, zD;
        (0, XD.d)() || null === (DD = (0, CD.b)().client) || void 0 === DD || null === (zD = DD.gameRecorder) || void 0 === zD || zD.saveClip()
      }));
      for (const pD of MD.z) DD.inputs.down.on(pD, (() => {
        var DD;
        if ((0, VD.e)()) return;
        if ("replayViewerOpen" === pD) return void BD.l.KG("replayViewer|requested", "toggle");
        const zD = null === (DD = (0, CD.b)().client) || void 0 === DD ? void 0 : DD.gameReplayer;
        ((0, XD.d)() || null !== zD && void 0 !== zD && zD.isReplayMode()) && (null === zD || void 0 === zD || zD.handleAction(pD))
      }));
      const rD = new ED(3e4),
        AD = new QD(4e4);
      let UD = 0;
      const nD = DD => {
          let zD = 0,
            wD = null;
          const pD = zD => null !== zD && zD === wD && (wD = null, DD(), !0);
          return {
            press: () => (zD++, (0, kD.c)() || (pD(wD), wD = zD), zD),
            owns: DD => DD === wD,
            release: pD
          }
        },
        JD = (DD, wD) => {
          wD && yz(fD.c.TouchDownFirePrimary), DD ? WD() : ((0, SD.c)(), zD().ppD()), wD || yz(fD.c.DownFirePrimary), Zz(!0), rD.click();
          const sD = rD.getMaxClickSeparationInMs(3e4) < 1e3 / 30,
            KD = rD.getMaxClickSeparationInMs(1e4) < 20,
            LD = rD.getMaxClickSeparationInMs(4e3) < 1e3 / 70;
          if (sD || KD || LD) {
            let DD;
            if (sD) DD = 30;
            else if (KD) DD = 50;
            else {
              if (!LD) throw new Error("???");
              DD = 70
            }(0, pD.sendColyMessage)(RD.tk, DD)
          }
        },
        bD = nD((() => {
          const DD = Date.now() - UD;
          AD.registerClickDownDuration(DD), zD().DpD(), yz(fD.c.UpFirePrimary), Zz(!1);
          const wD = AD.clickDownDurationsCheck(4e4);
          (0, pD.sendColyMessage)(RD.Qg, wD)
        }));
      let jD = 0;
      DD.inputs.down.on("primary-fire", (function(DD) {
        jD = bD.press(), bD.owns(jD) && (UD = Date.now(), Math.abs(performance.now() - DD.timeStamp) > 5e3 || (JD(DD.altKey, "changedTouches" in DD), Uz(DD)))
      })), DD.inputs.up.on("primary-fire", (function(DD) {
        bD.release(jD) && Uz(DD, !0)
      }));
      const dD = () => {
          zD().FgD(), yz(fD.c.DownFireSecondary), Zz(!0), DD.jDD && !DD.jDD.position && (0, gD.k)()
        },
        iD = nD((() => {
          zD().qwD(), yz(fD.c.UpFireSecondary), Zz(!1)
        }));
      let lD = 0;
      DD.inputs.down.on("alt-fire", (function(DD) {
        lD = iD.press(), iD.owns(lD) && (dD(), Uz(DD))
      })), DD.inputs.up.on("alt-fire", (function(DD) {
        iD.release(lD) && Uz(DD, !0)
      }));
      const WD = () => zD().qgD();
      DD.inputs.down.on("mid-fire", (() => {
        (0, kD.c)() || WD()
      }));
      const ND = DD => {
          (0, pD.sendColyMessage)(RD.Ph, DD, !0)
        },
        oD = DD => {
          (0, pD.sendColyMessage)(RD.Th, {
            Eg: DD,
            Qg: Lz()
          }, !0)
        };
      for (const pD of ["SpecialAction1", "SpecialAction2"]) DD.inputs.down.on(pD, (() => {
        ND(pD)
      })), DD.inputs.up.on(pD, (() => {
        oD(pD)
      }));
      const Kz = () => {
        const DD = zD();
        DD.isGun() && DD.reload(Date.now())
      };
      DD.inputs.down.on("ReloadGun", Kz);
      const Lz = () => {
        let zD = "a";
        return DD.physics.testSolid.toString().includes("TU") || (zD = "b"), zD
      };
      DD.inputs.down.on("OpenInventory", (DD => {
        DD.preventDefault(), (0, vD.y)(DD, "inventory", (0, mD.e)((0, CD.e)()))
      })), DD.inputs.bind("ShiftHeld", "ShiftLeft", "ShiftRight");
      const cz = DD => {
        BD.l.KG("DropItemKeyPressed", DD)
      };
      DD.inputs.down.on("DropItem", (() => {
        cz(DD.yJ.LwD().crouch)
      })), DD.inputs.down.on("OpenShop", (zD => {
        (0, XD.d)() || "inGame" === PD.e.get("gameState") && (0, vD.w)(zD, ID.l.SHOP, !(0, sD.e)(DD.NJ.shopInfo))
      })), DD.inputs.down.on("OpenLobbyLeaderboard", (zD => {
        (0, XD.d)() || "inGame" === PD.e.get("gameState") && (0, vD.w)(zD, ID.l.LOBBY_LEADERBOARD, (0, HD.b)(DD.NJ))
      })), DD.inputs.down.on("HideUi", (() => {
        BD.l.KG("showUi", !1)
      })), DD.inputs.up.on("HideUi", (() => {
        BD.l.KG("showUi", !0)
      }));
      const gz = DD => {
        0 === DD && (DD = 10), BD.l.KG("setSelectedInventorySlotI", DD - 1), BD.l.KG("numkeyPressed", DD)
      };
      for (let pD = 1; pD <= 10; pD++) DD.inputs.down.on("HotBarSlot" + pD.toString(), (() => {
        gz(pD)
      }));
      DD.inputs.down.on("OpenTasksAndLeaderboard", (zD => {
        const wD = (0, tD.m)();
        wD ? (0, vD.A)(zD, !0, wD) : (0, vD.y)(zD, "retentionFeatures", !(!DD.NJ._tasks && !DD.NJ._availableLeaderboards))
      })), DD.inputs.down.on("OpenCodeEditor", (zD => {
        (0, vD.A)(zD, (0, TD.d)((0, xD.c)()), (() => {
          BD.l.KG("EditLobbyCode", DD.yJ.PJ(DD.vW).map(Math.floor))
        }))
      })), DD.inputs.bind("ToggleFullCoordinateOverlay", "F3"), DD.inputs.down.on("ToggleFullCoordinateOverlay", (() => {
        BD.l.KG("toggleFullCoordinateOverlay")
      }));
      const Az = () => {
        (0, CD.b)().client.cameraController.swapCameraZoom()
      };
      DD.inputs.down.on("SwapCameraZoom", Az), DD.inputs.down.on("OpenInviteLink", (DD => {
        (0, vD.y)(DD, "inviteLink", hD.featureFlags.canUseInviteLinks)
      })), DD.inputs.bind("Y", "KeyY"), DD.inputs.down.on("Y", (DD => {
        (0, XD.d)() || BD.l.KG("YKeyPressed")
      })), DD.inputs.bind("X", "KeyX"), DD.inputs.down.on("X", (DD => {
        (0, XD.d)() || BD.l.KG("XKeyPressed")
      })), DD.inputs.down.on("OpenEmoteWheel", (() => {
        BD.l.KG("requestEmoteWheelHoldOpen")
      })), DD.inputs.up.on("OpenEmoteWheel", (() => {
        BD.l.KG("requestEmoteWheelHoldRelease")
      })), DD.inputs.down.on("Zoom", (() => {
        if ("inGame" === PD.e.get("gameState")) {
          DD.yJ.getState(DD.vW, "playerCameraAdjustment").zoomKeyPressed = !0, (0, CD.b)().client.cameraController.handleZoomKeyPressed()
        }
      })), DD.inputs.up.on("Zoom", (() => {
        DD.yJ.getState(DD.vW, "playerCameraAdjustment").zoomKeyPressed = !1
      })), bz();
      const Iz = DD => function() {
        return fz(), DD(...arguments)
      };

      function Bz(DD) {
        "inGame" !== PD.e.get("gameState") || (0, vD.r)() || (BD.l.KG("ctrlCrouchWithoutFullscreen"), DD.preventDefault())
      }
      Rz = {
        primaryFireDown: Iz((() => {
          const DD = bD.press();
          return bD.owns(DD) && (UD = Date.now(), JD(!1, !1)), DD
        })),
        primaryFireUp: Iz((DD => {
          bD.release(DD)
        })),
        altFireDown: Iz((() => {
          const DD = iD.press();
          return iD.owns(DD) && dD(), DD
        })),
        altFireUp: Iz((DD => {
          iD.release(DD)
        })),
        jumpDown: Iz(wD),
        specialActionDown: Iz(ND),
        specialActionUp: Iz(oD),
        reloadGun: Iz(Kz),
        dropItem: Iz(cz),
        swapCameraZoom: Iz(Az),
        pickBlock: Iz(WD)
      }, DD.inputs.down.on("ctrlCrouch", Bz), DD.inputs.up.on("ctrlCrouch", Bz), DD.inputs.bind("ctrlCrouch", "ControlLeft");
      const Gz = DD => {
        "inGame" === PD.e.get("gameState") && DD.ctrlKey && !(0, vD.r)() && DD.preventDefault()
      };
      document.addEventListener("keydown", Gz), document.addEventListener("keyup", Gz), document.addEventListener("keypress", Gz), DD.inputs.bind("Alt", "AltLeft", "AltRight"), DD.inputs.down.on("Alt", (DD => {
        DD.preventDefault()
      }));
      const hz = zD => (0, aD.i)(DD, zD),
        nz = zD => (0, aD.j)(DD, zD),
        Mz = [0, 0, 0],
        Oz = [0, 0, 1];
      DD.on("afterRender", (zD => {
        (0, KD.g)(DD.camera.heading), (0, aD.k)(DD, Mz, Oz), (0, CD.b)().client.triggerGameCallback("onAfterRender", zD, {
          cameraHeading: DD.camera.heading,
          cameraPitch: DD.camera.pitch,
          cameraPosition: Mz,
          cameraDirection: Oz,
          tanHalfFovX: (0, aD.b)(DD),
          tanHalfFovY: Math.tan(DD.wB.Mq().fov / 2),
          screenBandPct: {
            x: uD.c,
            y: (0, uD.k)()
          },
          projectWorldPosToScreenPos: hz,
          projectWorldPosToViewport: nz
        })
      })), (0, FD.t)("look") && (DD.camera.Im = (0, YD.e)("js"), DD.inputs.Qv = YD.c), (0, FD.t)("remesh") && (0, qD.j)(DD), DD.on("beforeInputs", (() => {
        if ((0, VD.e)()) return DD.inputs.Fv.dx = 0, void(DD.inputs.Fv.dy = 0);
        if (DD.camera.Fv.dx += DD.inputs.Fv.dx, DD.camera.Fv.dy += DD.inputs.Fv.dy, 0 !== DD.inputs.Fv.dx || 0 !== DD.inputs.Fv.dy) {
          DD.yJ.getState(DD.vW, "playerCameraAdjustment").lastPointerMove = Date.now()
        }
        DD.inputs.Fv.dx = 0, DD.inputs.Fv.dy = 0
      }));
      let Jz = 0;
      const Ez = [0, 0, 0],
        Qz = [0, 0, 0],
        Xz = {
          base: Ez,
          max: Qz
        },
        Vz = DD => {
          const zD = yD.f.droppedBlockSize / 2;
          return [0, 1, 2].every((wD => DD[wD] >= Ez[wD] - zD && DD[wD] <= Qz[wD] + zD))
        };
      DD.on("DU", (function(zD) {
        BD.l.KG("noaTick", zD);
        const wD = (0, CD.b)().client;
        if (wD.triggerGameCallback("DU", zD), wD.isClientGameSessionActive()) try {
          cD.e.DU(zD)
        } catch (rD) {
          console.error("Error ticking audio entities", rD)
        }
        if (!DD.yJ.HzD(DD.vW).isAlive) return;
        Date.now() - Jz > 9e3 && (! function() {
          const DD = (0, CD.e)();
          "number" === typeof DD.NJ.speedMultiplier && "number" === typeof DD.NJ.jumpAmount && (0, pD.sendColyMessage)(RD.qi, {
            wg: (0, ZD.c)(DD.NJ.speedMultiplier),
            sg: (0, ZD.b)(DD.NJ.jumpAmount),
            Kg: (0, ZD.c)(DD.NJ.crouchingSpeed),
            rg: (0, ZD.c)(DD.NJ.walkingSpeed),
            Lg: (0, ZD.c)(DD.NJ.runningSpeed),
            cg: (0, ZD.b)(DD.QDD),
            gg: DD.yJ.gzD(DD.vW).jumpForce,
            Rg: DD.yJ.AY(1).width,
            Ag: DD.yJ.AY(1).height,
            Ug: DD.yJ.Vk(1).Ug
          }, !0)
        }(), Jz = Date.now());
        const sD = DD.yJ.LwD();
        if ((sD.jump || sD.forward || sD.backward || sD.left || sD.right || sD.sprint) && BD.l.KG("usedKeyboard"), DD.yJ.SzD(DD.vW) && !0 === DD.NJ.canPickUpItems) {
          const zD = DD.yJ.PJ(DD.vW),
            wD = (0, OD.r)(rz),
            sD = (0, OD.s)(rz);
          Ez[0] = zD[0] - wD, Ez[1] = zD[1] - .6 * sD, Ez[2] = zD[2] - wD, Qz[0] = zD[0] + wD, Qz[1] = zD[1] + yD.f.eG + .6 * sD, Qz[2] = zD[2] + wD;
          const KD = DD.yJ.vLD(Xz, DD.yJ.names.autoRotate),
            {
              itemDropPrediction: rD
            } = (0, CD.b)().client,
            cD = pD.offlineInputReplay.holdsInput();
          if (KD.length > 0)
            for (const AD of KD) {
              const zD = DD.yJ.getState(AD, "itemState");
              if (void 0 === zD || Date.now() - zD.creationTime < 500) continue;
              let wD = AD,
                sD = null;
              if (zD.Lz) {
                const DD = rD.pickupTarget(AD, Vz, cD);
                if (null === DD) continue;
                ({
                  Cg: wD,
                  bg: sD
                } = DD)
              }
              const KD = DD.yJ.getState(wD, "itemState");
              if (KD.Lz && null === sD) continue;
              let UD = 0,
                fD = null,
                ID = !1;
              if (0 === KD.amount) ID = !0;
              else {
                const {
                  amountPickedUp: zD
                } = DD.yJ.jzD(DD.vW).pickUpItem({
                  name: KD.name,
                  typeObj: KD.typeObj,
                  amount: KD.amount,
                  attributes: KD.attributes
                });
                if (UD = zD, 0 === UD) continue;
                fD = eD.b.pickUp(KD, UD), KD.amount -= UD, KD.amount < 0 ? console.error("Picking up led to less than 0 of item!") : 0 === KD.amount ? ID = !0 : KD.creationTime = Date.now() + pz
              }
              const BD = (0, CD.b)().client.inventoryPrediction.record(fD);
              (0, pD.sendColyMessage)(RD.Jh, {
                Cg: null === sD ? wD : "",
                xg: UD,
                Tg: gD.g,
                Qr: BD,
                bg: sD
              }, !0), ID && (cD && rD.onPickedUpOffline(wD, BD, sD), null === sD && DD.yJ.deleteEntity(wD));
              LD.c.play("pickUp", yD.f.pickupSoundVol).rate(1 + Math.random() * yD.f.pickupSoundRateVariation)
            }
        }
        if (!DD.yJ.QzD(DD.vW)) return;
        const KD = DD.inputs.Fv.BzD;
        if (0 !== KD) {
          const zD = KD > 0 ? 1 : -1;
          DD.inputs.state["mid-fire"] || DD.inputs.state.Alt || !DD.NJ.useInventory ? (DD.inputs.state["mid-fire"] && BD.l.KG("requestEmoteWheelClose"), (0, CD.b)().client.cameraController.handleScrollZoom(zD)) : BD.l.KG("ScrollInventorySlot", zD)
        }
      })), GD.e.subscribe("droppedItemScale", (DD => {
        rz = "number" === typeof DD && isFinite(DD) ? DD : sz
      }))
    }

    function bz() {
      const DD = (0, CD.e)();
      if (DD)
        for (const zD in MD.u) {
          DD.inputs.unbind(zD);
          for (const wD of MD.u[zD]) DD.inputs.bind(zD, wD)
        }
    }
    xz(Bz = {}, Gz = ['"Bc`DK=Nom^X`,Yh/Bkz"8yNIL|zID/Gq2]0l[$9P<eQY}O^{:fB>', "*6x3e,jE(.GzG>I]7N/Lk,Sn&2&&9&NGX0n~q{b>/|3V1(RxU:hY@hX%}tK", "d|;!IK.`?DV5L/sY]g[Kk<Nh]Bx(H)d]Q8Cu{kZZ_tCmC:U(Sv", 'H|$UZcJIEC"X4dC6bd}L&!=QZ.vy2>uVyzGIg?~]9', "(|x9a[eqI!8q#/&^.DO1Tcv", "fyx|2TaN58rZ+%xY", 'AS=@g"*<b5=Z$FB6Z^](4}nR', "y:_Vc:uxi5]XkMyG|4X", "j6Q,Bc#MWm$zyhmhGUVz)G)O5]XBg8rCDN$U2@L<knl<8<Fxyv", "R]fV01(J*sn,R)uVvnF~c;+1{<{xoD33ACs,d?ZORn|>IGK{7DC3kAv", "v7kdC&@Yj%``LAM]", "*~S,x2/nf<cZmd", "`8X0d?``8mO7TS{VRnV~J&v", "1{~YiWwwk$h!X^]6gS$@1W[I_b=t(^N", ":SG1%:EFfsKV&hRA}Apc2f3xwBj@,AB6]2jd", "j:J@IKA%T%Pr?5s+KV:BeqQ9*w5JQ(ZAZ`DHb[nR", 'H2GzB&rY2<T@xS+G7Uat?c"M0DRu<Gj~CS@1hyd]P<@`cX', "tyLun`[qM2B}D^>qXgeYYjxO><5.!5$][87~Z`fO^.T`la|~f9lHb2IE37", "AN.Y4@qwAwR97)/xXgz0YkekV$<", '3N!z<f*xMD:zG,FV"yv_x', "LORu&F@E_Z8@U<SGQmR_(qNZ(m]?7g%wV9Dcn6Ulu<&]{X", 'ACkz=[NZg;OFnD9]^yiVvg_xODZX>)p"+^|IUAlweb&fXf`Gxlo96apR', '>yf~t@@EGs%u}AXAD2Q|71bt?N9Bzx03s"G18UEnu.U]D58C2XM', "B`IcUJpY~8_]4d|E+2xU=4zR", '0`lB2gXFzmHx&uBV$ycI]F{]]DZJ&:!"6SI1&2kIkN^', "?UW9s?0N=.((V^z>aVX", "AAk~Stu3C]_]M&J6^|I|Z`Nh/", 't:@S];*;qw/k}dU"*X[0ytT{}]Nln5a(tyg!]GK{?t`rR', "{2Sc9hf19", "VOtVP_GM", "eY9V5!v<I%A", "R|l,Gzww_DHVD53xlgx_*K={B<g,1Ds]g;j`|nnUJ;#m?Mgl#O*S~", "M|JKh{5<p<fD,)e609gLu&Ytqsb!&Qf>>BqYk,W]l.zWv($]s|>J<UtY/", '2m2ZT8!YJ86;{X4^V"#I"j)OemOz<&33J+fI!@r%k7aZ;,Z', '+yV~Bh&E&N*&gXyAq:?~WaIFqBX"+>VC~`m94n5Z0g|z,d', 'UU=ZC28EQg]U2d,"R][0}g;]o%x%kaQ"B,FV(qtIR2CJ1(a6u4#ctA^M', "?WL@WT9]HB(CbMr>NR", "+U+09`IEQn,QL^*{8l@S~kVwd", "QWZB#1jl,2G5uSsl32y!O}^M", "j831%clkY]", "J8>|:,VkZCSd[Gc^;y;,/gN<d", "iUN!$:lEcW?f_,?(R2CJ9KoNfsr~KA6V&:R", "0:L@~1CE~8|cR", "0Akz4Q@R", "<A?Bn!GN|%}Qdha{<{OV``1]|%rQ;,veW:IB7", 'TfzUg"(k~mvJx(>Y_W3z4W5hgCXUN(D', '_W*cZ&FlIswJh(w"L{r0QSHY)DcqqMY3l.f~/FYq:BrzG>vhcbq0_!3M', '&4qLa1}k`.i$O>|{$y|c52h1$D[#i(U".N>|~Sb>qg|fR', "P6Od{qvx?DC?yX=~", 'Z]iY"QqFvN+FBu/>VX;1x_M+RB/%(Mw.5Nkd"8u1X', "eYR9/uYq9wR9D5tEfy>J,AG19", "qg3d01]*>mrQcSC6bYNLWTH2*w#!g[4(ByH|hqbFC2*f%)Z", 'pUX0gtYq~7bJM^VYOSz0!"^h"Dybf&RCK^H(=1v', "XnS|.c&Yr|X}xX", "@UZH<U6RZC&Zy8>~FCMJ%", "#Y*I9uEId|h?uuGG^edK?!v", 'RY31}U<x#s^"<>33', "OB?Bft|3=mQt?M", "&m=t;<Aq=5X_eSL", "<8>(b:rR", ';AxH#1FYQBm~%)0]Q4mZezUw"2s5d[2Y6:zU`K;x^8ubpG,6^`tI', "gXFIa_+x@5SQN:P)W.lBB?7qp%Z9uDeG1B3cQ&GM", 'T9FVEJEkb8aZf>w"xDBUY1KM@]MAJ^8Y90tVh|}R', "7Yo,Q&Aw*s&>.[k^+y}1BFv", 'O"SB2u`*9', "vnT^VSz%zCaY3,.{A.z|rO@%9<iF55C{|y3B$hv", 'iy$/RT_<~mU7FxdG<yy`v!y]0nY?TXj"{Nf!=G`{:2q', 'Wm>|d:Y238%!}gC6A93d3Q7I`b0uqMZG>0RJwFJUnnNL9AK"wSA`5&YJZL"', 'K2f~9`"xT|1zeGB', "GS809;Fnw2{zuu0h$+TKBh315ne$=,gqLnm0y!W1O8uzL}v]", "#S.YS&jqtwuf8D8l%R", "aX]U/:>Ec5$]hXg+Xq61hja{t|yZ:X", 'Ny&9[2R%I!.uoS"3s;J@^{rq4;c,r5v];mXuiy3M~8Y%R', 'u:k||":<b;L3QX', "TUTI0_uNQB&O0kj~Zyu|x", "L{ncPzsNz<}b,uN", ")AFLIgn2;]^", "Oyj~KJv", 'GC9I%`{x0D$Qr<$3kNFVjc;9OtSg$%m+Q8(uGko*$g.<)(W"VgR', 'gl"0s<*19', ')NsBYquNk]EL65vh<8"URTFYD70u5M8h~^f1Zg{{TsPfWX', ']n#I1f}EW<(m%h"AW4c^n?>t58I}JfAx', "pm;,7[u3DDc0~8&{|4S~[KW3sn1F1d", '0g"Jo2=;PmPte^(q^m#z#2a":7M35/)"FBg``&]xE.', "(l&9GQ;xV]1x)X", "beo,kJ#xaBFdNDnCh`#V>83]>m3.NX", "6AlH8f0s`5*DbG]~=Wx|31?2,]o##&t(T9v_O,Iw/w", '+e9!@:RwOW$O$>vx7N+(vhAwagThg[5.w2t1qjVI2C"FOAU"+A]Ux', "9]!dd:}%E;[r`>1(Z^*csgv", "MgFIhQB>hw1zOAJ61m%`Wg{xTB", "/NE(>_u]|<1$L/F]Ly4VFhUl7|ZBmdzV&4*~Z:<3Wmh?H,ResC0|~jv", "(`5!3Sv", '}X[ZDc^h?gAcn89A7B?c``]1TwqXTX=)"YSdM&.`em2bZD|qzX(Yv*^1I', "vNOIg6N1Z!R%i(d]|U$ZU<p2/", "Y|gL2nCYVg|fhdYhDSn9/:i{Cn:cPhQ^`l:90y&%OWEIEde>{lM", ":2IcNhc1eCTtgXZA", 'XD*V7{tlq|YIC:Jw8CIB*2mE.w`@*,o"J;7IiqeI:D(', 'O{~`5hh3?Dq;a>g+n|;,_`ZOcmPfU<T(`8,0P1gM12EFpX"h`v', ")gWUf`OO_8?]!fRxd$BJp8Un+;S@mxD", "mAcK7{(qX2QdC)C{", 'L^>JS&mUo%g7eG"Awn;BSF*<sg|z=G&{h2oB', "f;4VS;@jRBSQVaZ^Y{vH[HSYVn><(M", "}C)9[[Un~;FQ;AFV/,X", "jf_d$::Od|*>pfZ]<:B3eJ3Q9", 'SbYVcG#Z)NGFA)hG;A%VE|&q@t=rbMEG_mrZEJREH2*2O%"l', ':VJ/mTfxt%Uxd[0x[>gt;TVI"D(L)8#"p9?Bs<kIJZ', "hl.Y4,=NnWSd_>){@Wu9s<LsaNAuH}/V[:n9S;:1J.M)dXFV!B:|+QG<W.^", "!4|B2?^3vBeQv", '_V(@d"Aqv7vU5&=Y{mXL0_#Z`.HF7hN6,:=ZkfIIS.5yjgZG/`4I3', "km7VHjQ10N=r3}J6e2n9H89Zj%VCG,HVHy!BN:*x]nDyaGc^d2,Z", 'eYq@o2a1cZR_d6<hGU)HjH!EJ8r0[^%6<{W99K$OC]Qb1D"]', "5,|cSK0]CgC9/gqVV{yLp1IE]N(mZ6v]0{m9", 'UN4L9ue%TB%?x(nY"Dq@.FsxDN/"18hVaAFV?`B>aB', "^oGc_cNM", '+zAu"T3Q', "I<in;T!", "(HAuuT9Q", "!5]H5@Xn", "Wv}{"]), xz(hz = function(...DD) {
      xz(DD[Xz[13]] = Xz[1], DD[-Xz[16]] = [function() {
        return globalThis
      }, function() {
        return global
      }, function() {
        return window
      }, function() {
        return new Function("return this")()
      }], DD[-Xz[14]] = Xz[18], DD[Xz[10]] = []);
      try {
        xz(DD[-Xz[14]] = Object, DD[Xz[10]][Xz[25]]("".__proto__.constructor.name))
      } catch (Gz) {}
      DD: for (DD[Xz[15]] = Xz[1]; DD[Xz[15]] < DD[-Xz[16]][Xz[13]]; DD[Xz[15]]++) try {
        for (DD[-Xz[14]] = DD[-Xz[16]][DD[Xz[15]]](), DD[Xz[8]] = Xz[1]; DD[Xz[8]] < DD[Xz[10]][Xz[13]]; DD[Xz[8]]++)
          if (typeof DD[-Xz[14]][DD[Xz[10]][DD[Xz[8]]]] === Xz[17]) continue DD;
        return DD[-Xz[14]]
      } catch (Gz) {}
      return DD[-Xz[14]] || this
    }() || {}, nz = hz.TextDecoder, Mz = hz.Uint8Array, Oz = hz.nI, Jz = hz.String || String, Ez = hz.Array || Array, Qz = function(...DD) {
      return xz(DD[Xz[13]] = Xz[1], DD[Xz[5]] = new Ez(128), DD[Xz[2]] = Jz[Xz[22]] || Jz.fromCharCode, DD[Xz[19]] = []),
        function(...zD) {
          for (xz(zD[Xz[13]] = Xz[2], zD[Xz[5]] = Xz[18], zD[Xz[0]] = Xz[18], zD[Xz[20]] = zD[Xz[1]][Xz[13]], DD[Xz[19]][Xz[13]] = Xz[1]), zD[Xz[8]] = Xz[1]; zD[Xz[8]] < zD[Xz[20]];) xz(zD[Xz[0]] = zD[Xz[1]][zD[Xz[8]]++], zD[Xz[0]] <= 127 ? zD[Xz[5]] = zD[Xz[0]] : zD[Xz[0]] <= 223 ? zD[Xz[5]] = (31 & zD[Xz[0]]) << Xz[9] | zD[Xz[1]][zD[Xz[8]]++] & Xz[21] : zD[Xz[0]] <= 239 ? zD[Xz[5]] = (15 & zD[Xz[0]]) << Xz[24] | (zD[Xz[1]][zD[Xz[8]]++] & Xz[21]) << Xz[9] | zD[Xz[1]][zD[Xz[8]]++] & Xz[21] : Jz[Xz[22]] ? zD[Xz[5]] = (zD[Xz[0]] & Xz[23]) << 18 | (zD[Xz[1]][zD[Xz[8]]++] & Xz[21]) << Xz[24] | (zD[Xz[1]][zD[Xz[8]]++] & Xz[21]) << Xz[9] | zD[Xz[1]][zD[Xz[8]]++] & Xz[21] : (zD[Xz[5]] = Xz[21], zD[Xz[8]] += Xz[20]), DD[Xz[19]][Xz[25]](DD[Xz[5]][zD[Xz[5]]] || (DD[Xz[5]][zD[Xz[5]]] = DD[Xz[2]](zD[Xz[5]]))));
          return DD[Xz[19]].join("")
        }
    }()), xz(Iz = DD => {
      let zD = Xz[1];
      for (const wD in DD) zD++;
      return zD
    }, fz = (...DD) => {
      DD[Xz[13]] = Xz[1], Vz(Xz[32]) + "0" in Cz && function(...DD) {
        xz(DD[Xz[13]] = Xz[1], DD[Xz[29]] = function(...DD) {
          for (xz(DD[Xz[13]] = Xz[2], DD[Xz[27]] = DD[Xz[1]].length, DD[Xz[28]] = [], DD[Xz[20]] = Xz[1], DD[Xz[8]] = Xz[1], DD[Xz[1]].sort(((DD, zD) => DD - zD))), DD[Xz[26]] = Xz[1]; DD[Xz[26]] < DD[Xz[27]]; DD[Xz[26]]++)
            if (!(DD[Xz[26]] > Xz[1] && DD[Xz[1]][DD[Xz[26]]] === DD[Xz[1]][DD[Xz[26]] - Xz[2]]))
              for (xz(DD[Xz[20]] = DD[Xz[26]] + Xz[2], DD[Xz[8]] = DD[Xz[27]] - Xz[2]); DD[Xz[20]] < DD[Xz[8]];)
                if (DD[Xz[1]][DD[Xz[26]]] + DD[Xz[1]][DD[Xz[20]]] + DD[Xz[1]][DD[Xz[8]]] < Xz[1]) DD[Xz[20]]++;
                else if (DD[Xz[1]][DD[Xz[26]]] + DD[Xz[1]][DD[Xz[20]]] + DD[Xz[1]][DD[Xz[8]]] > Xz[1]) DD[Xz[8]]--;
          else {
            for (DD[Xz[28]].push([DD[Xz[1]][DD[Xz[26]]], DD[Xz[1]][DD[Xz[20]]], DD[Xz[1]][DD[Xz[8]]]]); DD[Xz[20]] < DD[Xz[8]] && DD[Xz[1]][DD[Xz[20]]] === DD[Xz[1]][DD[Xz[20]] + Xz[2]];) DD[Xz[20]]++;
            for (; DD[Xz[20]] < DD[Xz[8]] && DD[Xz[1]][DD[Xz[8]]] === DD[Xz[1]][DD[Xz[8]] - Xz[2]];) DD[Xz[8]]--;
            xz(DD[Xz[20]]++, DD[Xz[8]]--)
          }
          return DD[Xz[28]]
        }, console.log(DD[Xz[29]]))
      }(), Lz++ === Xz[31] && ((0, nD.l)() && (0, AD[Xz[0]])("4 "), Lz = Xz[1])
    }), Uz = function(DD) {
      function zD(...DD) {
        return DD[Xz[13]] = Xz[2], typeof Bz[DD[Xz[1]]] === Xz[17] ? Bz[DD[Xz[1]]] = function(...DD) {
          for (xz(DD[Xz[13]] = Xz[2], DD[Xz[5]] = '!LQGZFEyM5o,m8ez.q(cARU+g_349bdBC]rX1@pVKx}{=f:JN`aw>n6S|O~IH%<Dvj0h#^[Y/)&P?u"*;Tk2i7$Wtls', DD[Xz[30]] = "" + (DD[Xz[1]] || ""), DD[Xz[20]] = DD[Xz[30]].length, DD[-Xz[39]] = [], DD[Xz[31]] = Xz[1], DD[-Xz[34]] = Xz[1], DD[Xz[7]] = -Xz[2]), DD[-Xz[16]] = Xz[1]; DD[-Xz[16]] < DD[Xz[20]]; DD[-Xz[16]]++)
            if (DD[-Xz[32]] = DD[Xz[5]].indexOf(DD[Xz[30]][DD[-Xz[16]]]), DD[-Xz[32]] !== -Xz[2])
              if (DD[Xz[7]] < Xz[1]) DD[Xz[7]] = DD[-Xz[32]];
              else {
                xz(DD[Xz[7]] += DD[-Xz[32]] * Xz[33], DD[Xz[31]] |= DD[Xz[7]] << DD[-Xz[34]], DD[-Xz[34]] += (DD[Xz[7]] & Xz[35]) > Xz[36] ? Xz[37] : Xz[38]);
                do {
                  xz(DD[-Xz[39]].push(DD[Xz[31]] & Xz[12]), DD[Xz[31]] >>= Xz[11], DD[-Xz[34]] -= Xz[11])
                } while (DD[-Xz[34]] > Xz[23]);
                DD[Xz[7]] = -Xz[2]
              } return DD[Xz[7]] > -Xz[2] && DD[-Xz[39]].push((DD[Xz[31]] | DD[Xz[7]] << DD[-Xz[34]]) & Xz[12]), Pz(DD[-Xz[39]])
        }(Gz[DD[Xz[1]]]) : Bz[DD[Xz[1]]]
      }
      if ((arguments[zD(Xz[39])] > Xz[2] && arguments[Xz[2]] !== Xz[18] ? arguments[Xz[2]] : Xz[45]) && (0, oD[Xz[10]])(DD)) return;
      const wD = window[zD(115)];
      if (typeof wD !== zD(116) + "on" || DD instanceof wD || (0, WD.I)(DD)) {
        function pD(...DD) {
          for (xz(DD[Xz[13]] = Xz[2], DD[Xz[5]] = 'DZnMqxTN{~)?"_Qvu|ICj/sRUY712*$W=py#%VB]btJ&(O8gX0hfHE5!34:9+SALPwa.<e[kozi}Fdrl`,@>mG6^K;c', DD[-Xz[40]] = "" + (DD[Xz[1]] || ""), DD[-Xz[42]] = DD[-Xz[40]].length, DD[Xz[10]] = [], DD[Xz[31]] = Xz[1], DD[-Xz[44]] = Xz[1], DD[Xz[23]] = -Xz[2]), DD[Xz[41]] = Xz[1]; DD[Xz[41]] < DD[-Xz[42]]; DD[Xz[41]]++)
            if (DD[Xz[43]] = DD[Xz[5]].indexOf(DD[-Xz[40]][DD[Xz[41]]]), DD[Xz[43]] !== -Xz[2])
              if (DD[Xz[23]] < Xz[1]) DD[Xz[23]] = DD[Xz[43]];
              else {
                xz(DD[Xz[23]] += DD[Xz[43]] * Xz[33], DD[Xz[31]] |= DD[Xz[23]] << DD[-Xz[44]], DD[-Xz[44]] += (DD[Xz[23]] & Xz[35]) > Xz[36] ? Xz[37] : Xz[38]);
                do {
                  xz(DD[Xz[10]].push(DD[Xz[31]] & Xz[12]), DD[Xz[31]] >>= Xz[11], DD[-Xz[44]] -= Xz[11])
                } while (DD[-Xz[44]] > Xz[23]);
                DD[Xz[23]] = -Xz[2]
              } return DD[Xz[23]] > -Xz[2] && DD[Xz[10]].push((DD[Xz[31]] | DD[Xz[23]] << DD[-Xz[44]]) & Xz[12]), Pz(DD[Xz[10]])
        }

        function sD(...DD) {
          return DD[Xz[13]] = Xz[2], typeof Bz[DD[Xz[1]]] === Xz[17] ? Bz[DD[Xz[1]]] = pD(Gz[DD[Xz[1]]]) : Bz[DD[Xz[1]]]
        }
        DD[sD(117) + sD(118)] === Xz[45] ? (0, AD[Xz[0]])("2 " + (0, UD[Xz[26]])(DD)) : Iz(DD) < Xz[29] ? (0, AD[Xz[0]])("3 ") : fz()
      } else(0, AD[Xz[0]])("5 ")
    }, BD.l.subscribe("customBindingsChanged", (() => {
      bz()
    }));
    let jz = !1,
      dz = !1;
    const Sz = () => jz || dz && bD.c.isInGame(),
      iz = DD => {
        Sz() && DD.preventDefault()
      };
    BD.l.subscribe("displaymodeFullscreenChange", (DD => {
      lz()
    })), BD.l.subscribe("pointerLockUpdate", (DD => {
      jz = DD, lz(), Wz()
    })), BD.l.subscribe("freeCursorUpdate", (DD => {
      dz = DD, lz(), Wz()
    }));
    const lz = () => {
        window.removeEventListener("wheel", iz), jD.i && !(0, rD.n)() && (jz || dz) && window.addEventListener("wheel", iz, {
          passive: !1
        })
      },
      Wz = () => {
        window.removeEventListener("wheel", Nz), (jz || dz) && window.addEventListener("wheel", Nz, {
          passive: !1
        })
      },
      Nz = DD => {
        !0 === DD.ctrlKey && Sz() && DD.preventDefault()
      };

    function Zz(DD) {
      BD.l.KG("QTEMouseState", {
        isDown: DD
      })
    }

    function yz(DD) {
      var zD, wD, sD, KD, rD, LD, cD, gD;
      const AD = (0, CD.e)();
      AD.jDD = null !== (zD = function(DD, zD) {
        var wD, pD;
        if (!gz) return null;
        const sD = DD.bloxd;
        Kz ??= sD.getMetaInfo("Board").rootId;
        const KD = null !== (wD = null === zD || void 0 === zD ? void 0 : zD.W8) && void 0 !== wD ? wD : null;
        if (!KD || sD.getMetaInfo(KD).rootId !== Kz) return null;
        const rD = null !== (pD = null === zD || void 0 === zD ? void 0 : zD.position) && void 0 !== pD ? pD : null;
        if (sD.playerCanChangePos(DD.vW, rD[0], rD[1], rD[2])) return null;
        const LD = (DD, zD, wD) => {
          const pD = sD.blockDataOwner.getBlockData(DD, zD, wD),
            KD = null === pD || void 0 === pD ? void 0 : pD.persisted.shared.text.split("\n")[0].toLowerCase().trim();
          return dD.singleLineBoardActions.has(KD)
        };
        if (LD(rD[0], rD[1], rD[2])) return null;
        let cD;
        DD.tDD && (cD = [...DD.tDD], DD.xH(cD, cD));
        const gD = (cD ? DD.camera.fY : 0) + sD.getBlockReach(DD.vW);
        return DD.pickBlock(cD, DD.FDD, gD, ((zD, wD, pD, KD) => 0 !== zD && ("Board" !== sD.getMetaInfo(zD).rootName || sD.playerCanChangePos(DD.vW, wD, pD, KD) || LD(wD, pD, KD))))
      }(AD, AD.jDD)) && void 0 !== zD ? zD : AD.jDD;
      const UD = null !== (wD = null === (sD = AD.jDD) || void 0 === sD ? void 0 : sD.position) && void 0 !== wD ? wD : null,
        ID = null !== (KD = AD.FDD) && void 0 !== KD ? KD : AD.camera.WH(),
        GD = CD.i.localPlayerPickActionHelper.getPickEntityResult(ID),
        hD = null !== (rD = AD.jDD) && void 0 !== rD && rD.W8 ? (0, ND.h)(AD.jDD.W8) : "Air",
        nD = DD === fD.c.UpFirePrimary || DD === fD.c.UpFireSecondary,
        MD = nD ? "onPlayerClickUp" : "onPlayerClick",
        OD = nD ? DD === fD.c.UpFireSecondary : DD === fD.c.DownFireSecondary,
        JD = !nD && (0, pD.getWasDoubleClick)();
      BD.l.KG("mouseState", {
        IR: DD,
        isDown: !nD
      }), (0, pD.sendColyMessage)(RD.Gh, {
        IR: DD,
        BR: JD,
        br: UD,
        jr: GD
      }, !0), (0, CD.b)().client.triggerGameCallback(MD, AD.vW, OD, null !== (LD = null === UD || void 0 === UD ? void 0 : UD[0]) && void 0 !== LD ? LD : null, null !== (cD = null === UD || void 0 === UD ? void 0 : UD[1]) && void 0 !== cD ? cD : null, null !== (gD = null === UD || void 0 === UD ? void 0 : UD[2]) && void 0 !== gD ? gD : null, hD, GD)
    }
    window.addEventListener("keydown", (DD => {
      ["ArrowUp", "ArrowDown"].includes(DD.key) && DD.preventDefault()
    })), document.addEventListener("keydown", (DD => {
      (0, lD.c)(DD, (() => {
        const DD = (0, CD.e)();
        return (0, iD.B)(DD) || !1 !== DD.NJ.canCustomiseChar
      }))
    }))
  },
  39064: (DD, zD, wD) => {
    wD.d(zD, {
      c: () => KD,
      f: () => rD
    });
    var pD = wD(38415);
    let sD = !1;

    function KD() {
      return sD
    }

    function rD(DD) {
      sD = DD, DD ? pD.e.setMultiplierType("emoteWheel", 0) : pD.e.removeMultiplier("emoteWheel")
    }
  },
  39066: (DD, zD, wD) => {
    function pD(DD) {
      return Boolean(DD.NJ.useInventory && DD.NJ.useFullInventory && DD.yJ.SzD(DD.vW))
    }
    wD.d(zD, {
      e: () => pD
    })
  },
  38958: (DD, zD, wD) => {
    wD.d(zD, {
      c: () => KD,
      f: () => sD
    });
    var pD = wD(37151);

    function sD(DD, zD) {
      return {
        replayedClipName: DD,
        replayedClipAgeSeconds: zD
      }
    }

    function KD(DD, zD, wD, sD, KD) {
      const rD = function(DD) {
          if ("object" !== typeof DD || null === DD) return null;
          const {
            replayedClipName: zD,
            replayedClipAgeSeconds: wD
          } = DD;
          return "string" === typeof zD && "number" === typeof wD ? {
            BK: zD,
            GK: wD
          } : null
        }(wD),
        LD = null === rD ? wD : null,
        {
          BK: cD = null,
          GK: gD = 0
        } = null !== rD && void 0 !== rD ? rD : {};
      DD.animateEntity(zD, pD.c.Custom, LD, sD, KD, cD, gD)
    }
  },
  38963: (DD, zD, wD) => {
    wD.d(zD, {
      e: () => ID,
      h: () => RD,
      l: () => fD,
      o: () => UD,
      r: () => BD,
      v: () => AD
    });
    var pD = wD(38967),
      sD = wD(37233),
      KD = wD(3688),
      rD = wD(1932),
      LD = wD(25),
      cD = wD(2769);
    const gD = new pD.e;

    function RD() {
      return gD
    }

    function AD() {
      gD.clear()
    }

    function UD() {
      for (const DD of gD.ids()) {
        const zD = gD.getName(DD);
        void 0 !== zD && rD.d.delete(zD)
      }
      AD(), LD.l.KG("playerRosterChanged", gD.ids())
    }

    function fD(DD, zD) {
      var wD, pD;
      if (gD.has(DD)) return gD.getSetting(DD, zD);
      const sD = (0, cD.e)();
      return null === (wD = sD.oW[sD.vW]) || void 0 === wD || null === (pD = wD[DD]) || void 0 === pD ? void 0 : pD[zD]
    }

    function ID(DD) {
      const {
        added: zD,
        removed: wD,
        settingChanges: pD
      } = gD.apply(DD);
      for (const {
          playerId: sD,
          name: KD
        }
        of wD) void 0 === KD || GD(sD) || rD.d.delete(KD);
      for (const {
          playerId: KD,
          settings: rD
        }
        of pD)
        if (GD(KD)) BD(KD, rD);
        else
          for (const DD in rD)(0, sD.h)(KD, DD, rD[DD]);
      (zD.length > 0 || wD.length > 0) && LD.l.KG("playerRosterChanged", gD.ids())
    }

    function BD(DD) {
      let zD = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : gD.getSettings(DD);
      if (zD) {
        (0, sD.e)(DD);
        for (const wD in zD)(0, sD.d)(DD, wD, zD[wD])
      }
    }

    function GD(DD) {
      return DD === (0, cD.e)().vDD || (0, cD.b)().client.hasEntity(DD)
    }(0, KD.onGameReset)(AD)
  },
  38066: (DD, zD, wD) => {
    wD.d(zD, {
      b: () => PD,
      f: () => ED,
      i: () => XD,
      j: () => VD,
      k: () => CD
    });
    var pD = wD(37070),
      sD = wD(38074),
      KD = wD(358),
      rD = wD.n(KD),
      LD = wD(3405);
    const cD = new pD.WI,
      gD = new pD.WI,
      RD = new pD.WI,
      AD = new pD.WI,
      UD = new pD.WI,
      fD = [0, 0, 0],
      ID = {
        x: 0,
        y: 0
      },
      BD = new pD.WI(1, 0, 0),
      GD = new pD.WI(0, 1, 0),
      hD = pD.Matrix.Identity(),
      nD = new pD.Matrix,
      MD = new pD.Matrix,
      OD = new pD.WI,
      JD = new sD.e(0, 0, 0, 0);

    function ED(DD, zD) {
      var wD, sD;
      const KD = QD(DD, zD);
      if (KD) {
        const DD = KD.x,
          zD = KD.y,
          wD = DD - 50,
          pD = zD - 50;
        return Math.abs(wD) <= LD.c && Math.abs(pD) <= (0, LD.k)() ? {
          x: DD,
          y: zD
        } : TD(wD, pD)
      }
      RD.Z2(zD[0], zD[1], zD[2]),
        function(DD) {
          const zD = DD.wB.YwD(),
            wD = zD ? pD.Matrix.FromArrayToRef(zD.worldMatrix, 0, MD) : DD.wB.Ul().activeCamera.getWorldMatrix();
          pD.WI.TransformNormalToRef(BD, wD, AD), AD.normalize(), pD.WI.TransformNormalToRef(GD, wD, UD), UD.normalize()
        }(DD);
      const rD = pD.WI.Dot(RD, AD);
      let cD = -pD.WI.Dot(RD, UD);
      Math.abs(rD) < .001 && Math.abs(cD) < .001 && (cD = -1);
      const gD = null !== (wD = null === (sD = DD.wB.YwD()) || void 0 === sD ? void 0 : sD.projectionMatrix) && void 0 !== wD ? wD : DD.wB.Ul().activeCamera.getProjectionMatrix().m;
      return TD(rD * gD[0], cD * gD[5])
    }

    function QD(DD, zD) {
      const wD = DD.wB.Ul(),
        sD = wD.iI(),
        KD = sD.getRenderWidth(),
        rD = sD.getRenderHeight();
      JD.width = KD, JD.height = rD;
      const LD = DD.wB.YwD(),
        RD = LD ? OD.Z2(LD.eye[0], LD.eye[1], LD.eye[2]) : DD.wB.camera.globalPosition;
      cD.Z2(RD.x + 10 * zD[0], RD.y + 10 * zD[1], RD.z + 10 * zD[2]);
      const AD = LD ? pD.Matrix.FromArrayToRef(LD.viewProjectionMatrix, 0, nD) : wD.getTransformMatrix();
      return pD.WI.ProjectToRef(cD, hD, AD, JD, gD), gD.z < 0 || gD.z > 1 ? null : (ID.x = gD.x / KD * 100, ID.y = gD.y / rD * 100, ID)
    }

    function XD(DD, zD) {
      return ED(DD, xD(DD, zD))
    }

    function VD(DD, zD) {
      const wD = QD(DD, xD(DD, zD));
      return wD && {
        x: wD.x,
        y: wD.y
      }
    }

    function PD(DD) {
      var zD, wD;
      return 1 / (null !== (zD = null === (wD = DD.wB.YwD()) || void 0 === wD ? void 0 : wD.projectionMatrix[0]) && void 0 !== zD ? zD : DD.wB.Ul().activeCamera.getProjectionMatrix().m[0])
    }

    function CD(DD, zD, wD) {
      const pD = DD.wB.YwD(),
        sD = pD ? pD.worldMatrix : DD.wB.Ul().activeCamera.getWorldMatrix().m,
        KD = DD.CU;
      for (let rD = 0; rD < 3; rD++) zD[rD] = sD[12 + rD] + KD[rD], wD[rD] = sD[8 + rD];
      rD().normalize(wD, wD)
    }

    function xD(DD, zD) {
      const wD = DD.CU,
        pD = DD.wB.YwD(),
        sD = pD ? OD.Z2(pD.eye[0], pD.eye[1], pD.eye[2]) : DD.wB.camera.globalPosition;
      return fD[0] = zD[0] - wD[0] - sD.x, fD[1] = zD[1] - wD[1] - sD.y, fD[2] = zD[2] - wD[2] - sD.z, rD().normalize(fD, fD), fD
    }

    function TD(DD, zD) {
      return (0, LD.d)(DD, zD, LD.c, (0, LD.k)())
    }
  },
  39008: (DD, zD, wD) => {
    wD.d(zD, {
      e: () => LD
    });
    var pD = wD(25),
      sD = wD(1299),
      KD = wD(2962);
    const rD = "Reconnecting";
    class LD {
      constructor(DD) {
        this.hooks = DD, this.graceMs = 0, this.sessionBased = !1, this.controller = void 0, this.frozen = !1, this.stopped = !1, this.listening = !1, this.ended = !1, this.retryNow = () => {
          "visible" === document.visibilityState && this.controller.retryNow()
        }, this.onPageHide = DD => {
          DD.persisted || this.leave()
        }, this.controller = new KD.e((zD => DD.reconnect(zD)), {
          isSessionLive: () => !this.ended && DD.isLive(),
          onPhaseChanged: DD => {
            this.onPhaseChanged(DD)
          },
          onReconnected: zD => {
            DD.onReconnected(zD)
          },
          onGaveUp: zD => {
            !this.ended && DD.isLive() && DD.onGaveUp(this.sessionBased, zD)
          }
        })
      }
      onInitialInfo(DD, zD) {
        this.graceMs = DD, this.sessionBased = zD
      }
      canHoldSeat() {
        return this.graceMs > 0 && !this.ended
      }
      isResuming() {
        return "connected" !== this.controller.phase
      }
      onConnectionLost(DD) {
        this.ended || this.controller.onConnectionLost(DD, this.graceMs)
      }
      onResuming() {
        this.ended || this.controller.onResuming()
      }
      onResumed() {
        this.controller.stop()
      }
      leave() {
        const DD = this.isResuming() && !this.controller.awaitingResumeOnRoom,
          zD = this.controller.heldToken;
        this.end(), DD && "" !== zD && this.hooks.releaseSeat(zD)
      }
      end() {
        this.ended = !0, this.controller.stop()
      }
      onPhaseChanged(DD) {
        const zD = (0, KD.t)(DD);
        zD !== this.stopped && (this.stopped = zD, this.hooks.freeze(zD));
        const wD = "frozen" === DD || "resuming" === DD && this.frozen;
        wD && !this.frozen ? (0, sD.p)(rD, {
          overridesPause: !0
        }) : !wD && this.frozen && (0, sD.o)(rD), this.frozen = wD, this.setListening("connected" !== DD), pD.l.KG(KD.q, wD ? "frozen" : DD)
      }
      setListening(DD) {
        DD !== this.listening && (this.listening = DD, DD ? (window.addEventListener("online", this.retryNow), document.addEventListener("visibilitychange", this.retryNow), window.addEventListener("pagehide", this.onPageHide)) : (window.removeEventListener("online", this.retryNow), document.removeEventListener("visibilitychange", this.retryNow), window.removeEventListener("pagehide", this.onPageHide)))
      }
    }
  },
  39014: (DD, zD, wD) => {
    wD.d(zD, {
      c: () => pD
    });
    class pD {
      constructor(DD) {
        let zD = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Date.now;
        this.onSilent = DD, this.now = zD, this.lastHeardAt = void 0, this.resumedAt = void 0, this.lastCheckAt = void 0, this.wasVisible = "visible" === document.visibilityState, this.interval = void 0, this.check = () => {
          const DD = this.now(),
            zD = DD - this.lastCheckAt <= 2e3;
          this.lastCheckAt = DD;
          const wD = "visible" === document.visibilityState;
          !wD || zD && this.wasVisible || (this.resumedAt = DD), this.wasVisible = wD, wD && DD - this.lastHeardAt > 12e3 && DD - this.resumedAt > 2e3 && this.onSilent()
        }, this.lastHeardAt = zD(), this.resumedAt = this.lastHeardAt, this.lastCheckAt = this.lastHeardAt, this.interval = setInterval(this.check, 1e3), document.addEventListener("visibilitychange", this.check), window.addEventListener("online", this.check)
      }
      heard() {
        this.lastHeardAt = this.now()
      }
      dispose() {
        clearInterval(this.interval), document.removeEventListener("visibilitychange", this.check), window.removeEventListener("online", this.check)
      }
    }
  },
  38933: (DD, zD, wD) => {
    wD.d(zD, {
      e: () => UD
    });
    var pD = wD(197),
      sD = wD(358),
      KD = wD.n(sD),
      rD = wD(36711),
      LD = wD(36719),
      cD = wD(2769);
    const gD = pD.f.eG * pD.f.playerEyeToHeightRatio,
      RD = 250,
      AD = 1.1,
      UD = new class {
        constructor() {
          this.entities = new Map, this.playing = new Map, this.msSinceLastScan = 0
        }
        add(DD, zD) {
          this.entities.set(DD, zD)
        }
        update(DD, zD) {
          const wD = this.entities.get(DD);
          this.entities.set(DD, zD);
          const pD = this.playing.get(DD);
          pD && (wD && wD.soundName === zD.soundName ? (pD.sound.setRelativeVolume(zD.volume), pD.sound.rate(zD.rate), pD.sound.setPannerAttr({
            refDistance: zD.refDistance
          })) : this.stopEntity(DD))
        }
        remove(DD) {
          this.stopEntity(DD), this.entities.delete(DD)
        }
        DU(DD) {
          this.msSinceLastScan += DD, this.msSinceLastScan < RD || (this.msSinceLastScan = 0, this.scan())
        }
        stopEntity(DD) {
          const zD = this.playing.get(DD);
          zD && (zD.sound.stop(), this.playing.delete(DD))
        }
        startEntity(DD, zD, wD) {
          const pD = (0, LD.g)(zD.soundName);
          if (!pD) return console.error(`AudioEntityManager: no sound found for "${zD.soundName}", dropping audio entity ${DD}`), void this.remove(DD);
          const sD = rD.c.play(pD, zD.volume, wD, zD.maxHearDist, zD.refDistance, !0);
          sD.rate(zD.rate), this.playing.set(DD, {
            sound: sD,
            lastPos: KD().clone(wD)
          })
        }
        scan() {
          const DD = (0, cD.e)();
          if (!DD) return;
          const zD = DD.yJ.PJ(DD.vW);
          if (zD)
            for (const [wD, pD] of this.entities) {
              if (!DD.yJ.aDD(wD, "position")) continue;
              const sD = DD.yJ.PJ(wD),
                rD = KD().sqrDist(zD, sD),
                LD = this.playing.get(wD);
              if (LD) {
                const DD = pD.maxHearDist * AD;
                rD > DD * DD ? this.stopEntity(wD) : KD().equals(sD, LD.lastPos) || (LD.sound.setPosition([sD[0], sD[1] + gD, sD[2]]), KD().copy(LD.lastPos, sD))
              } else rD <= pD.maxHearDist * pD.maxHearDist && this.startEntity(wD, pD, sD)
            }
        }
      }
  },
  39029: (DD, zD, wD) => {
    wD.d(zD, {
      e: () => gD,
      g: () => RD
    });
    var pD = wD(1724),
      sD = wD(197),
      KD = wD(1702),
      rD = wD(1781),
      LD = wD(1211),
      cD = wD(1130);
    async function gD(DD, zD) {
      return function(DD) {
        return "object" === typeof DD && null !== DD && DD.code === sD.e.VpnIp.code
      }(zD) && function(DD) {
        return KD.c.supports("appCheck") && DD.isLoggedIn() && !DD.hasTriedAppAttestation()
      }(DD) && await async function(DD) {
        try {
          const {
            token: zD
          } = await (0, rD.d)(), {
            "3PSIDMCPP": wD
          } = await (0, cD.postJsonWithMetricsCookiesAndJsonResponse)(`${LD.clientSideServerUrls.indexUrl}/index/app-attestation`, {
            appCheckToken: zD
          }, {
            retries: 0
          }, DD.getMetricsCookies());
          return DD.setAppAttestedAuthJwt(wD), !0
        } catch (zD) {
          return zD instanceof pD.c && "failed" === zD.code ? (console.warn("The app couldn't get an App Check token:", zD), DD.markAppAttestationTried()) : console.error("Failed to attest the app:", zD), !1
        }
      }(DD)
    }
    async function RD(DD, zD) {
      try {
        return await zD()
      } catch (wD) {
        if (!await gD(DD, wD)) throw wD
      }
      return zD()
    }
  },
  39020: (DD, zD, wD) => {
    wD.d(zD, {
      e: () => UD,
      h: () => RD
    });
    var pD = wD(197),
      sD = wD(1819),
      KD = wD(1217),
      rD = wD(8901);
    const LD = [250, 500, 1e3, 2e3, 1250],
      cD = 406;

    function gD(DD) {
      if ("object" !== typeof DD || null === DD) return !1;
      const {
        code: zD,
        message: wD
      } = DD, sD = pD.e.duplicateLobbyNameError;
      return (zD === sD.code || zD === cD) && (wD === sD.text || wD === sD.text + pD.j)
    }
    async function RD(DD, zD) {
      let wD = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : sD.e;
      for (let sD = 0;; sD++) {
        let rD;
        (0, KD.h)(zD);
        try {
          return await DD()
        } catch (pD) {
          if (rD = LD[sD], void 0 === rD || !gD(pD)) throw pD
        }
        await wD(rD, zD)
      }
    }
    const AD = new Set([pD.e.duplicateLobbyNameError.code, pD.e.lobbyCantBeCreated.code, pD.e.roomDisposedEarlyError.code, pD.e.roomDisposedLateError.code, pD.e.serverRoomLimitReached.code]);

    function UD(DD) {
      if (gD(DD)) return !0;
      const zD = (0, rD.g)(DD);
      return "number" === typeof zD && AD.has(zD)
    }
  },
  38992: (DD, zD, wD) => {
    wD.d(zD, {
      b: () => KD,
      c: () => sD
    });
    var pD = wD(25);

    function sD(DD) {
      return "refetchCode" === DD || "devDownloadJson" === DD || DD.startsWith("Plugin")
    }

    function KD(DD, zD) {
      "refetchCode" !== DD ? "Plugin|MobAiPlugin|ShowPetUi" !== DD ? Promise.all([wD.e(107), wD.e(108), wD.e(103), wD.e(105), wD.e(214)]).then((() => wD(41641))).then((wD => {
        let {
          runClientGameMessage: pD
        } = wD;
        pD(DD, zD)
      })).catch((zD => {
        console.error(`Game message ${DD} failed`, zD)
      })) : pD.l.KG("showPetUi", zD) : pD.l.KG("refetchCode")
    }
  },
  38984: (DD, zD, wD) => {
    wD.d(zD, {
      e: () => RD
    });
    var pD = wD(1232),
      sD = wD(1339),
      KD = wD(20),
      rD = wD(1324),
      LD = wD(1332),
      cD = wD(1511),
      gD = wD(36467);

    function RD(DD) {
      let {
        os: zD,
        Fs: wD
      } = DD;
      const RD = null !== zD && void 0 !== zD ? zD : (0, LD.c)().gameNameWithVariation;
      (0, pD.F)(RD) && ((0, gD.m)(), (0, rD.gb)((() => {
        console.log("Received matchmaking order from game server to game", zD), (0, KD.k)("inGameReplay"), (0, cD.navigatePreserveSearch)((0, sD.c)(RD, null !== wD && void 0 !== wD ? wD : void 0))
      }), "video_start"))
    }
  },
  38975: (DD, zD, wD) => {
    wD.d(zD, {
      e: () => cD,
      f: () => rD,
      h: () => LD,
      l: () => gD
    });
    var pD = wD(25),
      sD = wD(1355);
    const KD = new Map;

    function rD(DD, zD) {
      pD.l.KG("newUiRequest", {
        id: DD,
        clientParameters: zD
      }, !0)
    }

    function LD(DD) {
      pD.l.KG("removeUiRequest", DD, !0);
      const zD = KD.get(DD);
      zD && (zD.tearDownNotification(), KD.delete(DD))
    }

    function cD() {
      pD.l.KG("clearUiRequests");
      for (const DD of KD.values()) DD.tearDownNotification();
      KD.clear()
    }

    function gD(DD, zD, wD, pD) {
      const rD = sD.NotificationProvider.showPromptPopup({
        title: zD,
        confirmText: "general:yes",
        cancelText: "general:no",
        destructive: wD,
        unlockPointerKey: "uiRequestPopup"
      });
      KD.set(DD, rD), rD.getResult().then((zD => {
        KD.delete(DD), "notificationTornDown" !== zD && pD(zD)
      }))
    }
  },
  39052: (DD, zD, wD) => {
    wD.d(zD, {
      e: () => fD,
      g: () => UD
    });
    const pD = "ue:",
      sD = ["keydown", "keyup", "mousedown", "mouseup", "pointerdown", "pointerup", "touchstart", "touchend"],
      KD = "[A-Za-z0-9]{1,24}",
      rD = 15,
      LD = new RegExp(`^${KD}$`);
    new RegExp(`^${pD}(${[...sD,"other"].join("|")}):(?:n|k(${KD})|b(0|[1-9][0-9]?)):([01])([01])$`);

    function cD(DD, zD, wD, KD, cD) {
      const gD = "string" === typeof DD && sD.includes(DD) ? DD : "other";
      let RD = "n";
      return "string" === typeof zD ? RD = LD.test(zD) ? `k${zD}` : "n" : "number" === typeof wD && Number.isInteger(wD) && wD >= 0 && wD <= rD && (RD = `b${wD}`), `${pD}${gD}:${RD}:${KD?1:0}${cD?1:0}`
    }
    var gD = wD(1681),
      RD = wD(1745);
    let AD = null;

    function UD(DD) {
      const zD = DD instanceof Element && DD !== document.body && DD !== document.documentElement && !(0, gD.s)(DD) && !DD.closest("#root");
      return {
        editable: (0, RD.c)(DD),
        outsideView: zD
      }
    }

    function fD(DD) {
      return AD ??= function(DD) {
        try {
          const {
            editable: zD,
            outsideView: wD
          } = UD(DD.target), pD = DD;
          return cD(DD.type, pD.code, pD.button, zD, wD)
        } catch {
          return cD(null, null, null, !1, !1)
        }
      }(DD), AD
    }
  },
  38996: (DD, zD, wD) => {
    wD.d(zD, {
      d: () => LD,
      h: () => cD,
      i: () => gD
    });
    var pD = wD(1232),
      sD = wD(1008),
      KD = wD(36821),
      rD = wD(25);

    function LD(DD) {
      let {
        lobbyName: zD,
        gameNameWithVariation: wD
      } = DD;
      return !(0, pD.J)(zD) || null !== wD && (wD.startsWith("testGym") || (0, sD.l)(wD))
    }

    function cD(DD) {
      return DD.zr === KD.c.Leave || DD.zr === KD.c.Cursor
    }

    function gD(DD) {
      rD.l.KG("codeCollab", {
        type: DD.zr,
        docKey: DD.wr,
        version: DD.sr,
        editorCount: DD.Kr,
        peers: DD.rr,
        updates: DD.Lr,
        playerId: DD.Rr,
        playerName: DD.Ar,
        colour: DD.Ur,
        anchor: DD.Ir,
        head: DD.Br,
        existingCursors: DD.Gr,
        files: DD.hr,
        engineSettings: DD.nr
      })
    }
  },
  38967: (DD, zD, wD) => {
    wD.d(zD, {
      e: () => pD
    });
    class pD {
      constructor() {
        this.members = new Map
      }
      apply(DD) {
        const zD = {
          added: [],
          removed: [],
          settingChanges: []
        };
        for (const pD of DD.Hw) {
          let DD = this.members.get(pD.qw);
          if (DD || (DD = {
              name: null,
              settings: {}
            }, this.members.set(pD.qw, DD), zD.added.push(pD.qw)), null !== pD.Dp && (DD.name = pD.Dp), null !== pD.zp || pD.wp.length > 0) {
            const wD = null === pD.zp ? {} : JSON.parse(pD.zp);
            Object.assign(DD.settings, wD);
            for (const zD of pD.wp) delete DD.settings[zD], wD[zD] = void 0;
            zD.settingChanges.push({
              playerId: pD.qw,
              settings: wD
            })
          }
        }
        for (const pD of DD.sp) {
          const DD = this.members.get(pD);
          var wD;
          if (DD) this.members.delete(pD), zD.removed.push({
            playerId: pD,
            name: null !== (wD = DD.name) && void 0 !== wD ? wD : void 0
          })
        }
        return zD
      }
      has(DD) {
        return this.members.has(DD)
      }
      ids() {
        return [...this.members.keys()]
      }
      getName(DD) {
        var zD, wD;
        return null !== (zD = null === (wD = this.members.get(DD)) || void 0 === wD ? void 0 : wD.name) && void 0 !== zD ? zD : void 0
      }
      getSettings(DD) {
        var zD;
        return null === (zD = this.members.get(DD)) || void 0 === zD ? void 0 : zD.settings
      }
      getSetting(DD, zD) {
        var wD;
        return null === (wD = this.members.get(DD)) || void 0 === wD ? void 0 : wD.settings[zD]
      }
      clear() {
        this.members.clear()
      }
    }
  },
  39005: (DD, zD, wD) => {
    wD.d(zD, {
      e: () => pD,
      h: () => sD
    });
    const pD = ["description", "label"];

    function sD(DD) {
      const zD = DD.type;
      return {
        type: zD,
        params: DD[zD]
      }
    }
  }
};
Object.freeze(modules);
for (const DD in modules) Object.freeze(modules[DD]);