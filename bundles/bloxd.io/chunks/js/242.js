export const id = 242;
export const ids = [242];
export const modules = {
  39127: (SS, HS, gS) => {
    function tS(SS) {
      return !(!SS.lobbyLeaderboardInfo && !SS.lobbyManage)
    }
    gS.d(HS, {
      e: () => tS
    })
  },
  39106: (SS, HS, gS) => {
    gS.d(HS, {
      e: () => XS,
      g: () => xS
    });
    var tS = gS(31);
    let bS = !1;

    function XS() {
      return bS
    }

    function xS(SS) {
      bS !== SS && (bS = SS, tS.k.cj("replayViewer|videoExportChanged"))
    }
  },
  39043: (SS, HS, gS) => {
    gS.d(HS, {
      c: () => XS
    });
    var tS = gS(31),
      bS = gS(2083);

    function XS(SS) {
      let {
        taskId: HS,
        progress: gS
      } = SS;
      const tS = bS.d.get("_tasks");
      null !== tS && void 0 !== tS && tS[HS] && bS.d.apply({
        _tasks: {
          ...tS,
          [HS]: {
            ...tS[HS],
            progress: gS
          }
        }
      })
    }
    tS.k.subscribe("clientTaskProgress", (SS => {
      XS(SS)
    }))
  },
  39119: (SS, HS, gS) => {
    gS.d(HS, {
      b: () => QS,
      d: () => DS,
      e: () => PS
    });
    var tS = gS(4935),
      bS = gS(2953),
      XS = gS(2022);
    const xS = new Map(Object.entries(tS.j).map((SS => {
      let [HS, gS] = SS;
      return [gS, HS]
    })));

    function NS(SS) {
      return (0, XS.D)(SS).toFixed(1)
    }

    function qS(SS, HS) {
      return `camera set by ${xS.get(SS[HS+1])}: heading ${`${NS(SS[HS+2])} -> ${NS(SS[HS+4])}`} deg, pitch ${`${NS(SS[HS+3])} -> ${NS(SS[HS+5])}`} deg, at ${SS[HS].toFixed(1)} ms`
    }
    class uS {
      constructor(SS, HS) {
        this.width = SS, this.hf = HS, this.data = void 0, this.next = 0, this.size = 0, this.data = new Float64Array(SS * HS)
      }
      push(SS) {
        let HS = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        const gS = this.data.subarray(this.next * this.width, (this.next + 1) * this.width);
        for (let tS = 0; tS < this.width; tS++) gS[tS] = SS[HS + tS];
        return this.next = (this.next + 1) % this.hf, this.size = Math.min(this.size + 1, this.hf), gS
      }
      lines() {
        const SS = [],
          HS = (this.next - this.size + this.hf) % this.hf;
        for (let gS = 0; gS < this.size; gS++) {
          const tS = (HS + gS) % this.hf * this.width;
          SS.push(Array.from(this.data.subarray(tS, tS + this.width)).join(","))
        }
        return SS
      }
    }
    const IS = 0,
      fS = 2,
      kS = 3,
      aS = 4;

    function KS(SS) {
      return Number.isFinite(SS) ? String(Math.round(10 * SS) / 10) : String(SS)
    }

    function jS(SS) {
      return Number.isFinite(SS) ? SS.toFixed(1) : String(SS)
    }
    class GS {
      constructor() {
        this.frames = 0, this.looked = 0, this.idle = 0, this.IU = 0, this.pastLimit = 0, this.lockSkips = 0, this.NG = 0, this.lost = 0, this.dropped = 0, this.longFrames = 0, this.dtMin = 1 / 0, this.dtMax = 0, this.dtSum = 0, this.raw = [0, 0], this.turned = [0, 0], this.peakRate = 0, this.events = 0, this.eventMax = 0, this.bigEvents = 0, this.cameraSets = 0, this.cameraSetsLost = 0, this.outliers = 0, this.eventLines = 0, this.suppressed = 0
      }
      moved() {
        return this.events > 0 || 0 !== this.raw[0] || 0 !== this.raw[1] || this.lockSkips > 0 || this.IU > 0 || this.dropped > 0 || this.cameraSets > 0
      }
      hasEvent() {
        return this.IU > 0 || this.pastLimit > 0 || this.bigEvents > 0 || this.dropped > 0 || this.cameraSets > 0
      }
    }
    class CS {
      constructor() {
        var SS = this;
        this.remote = (0, bS.r)(), this.tally = new GS, this.records = new uS(10, this.remote ? 1 : 3600), this.events = new uS(4, this.remote ? 1 : 12e3), this.event = new Float64Array(4), this.takes = null, this.client = "js", this.started = !1, this.record = function(HS) {
          let gS = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
          const [tS, bS, XS, xS, NS, qS, uS, GS, CS, nS] = SS.records.push(HS, gS), PS = SS.tally;
          switch (PS.frames++, uS) {
            case IS:
              return void PS.idle++;
            case aS:
              return void PS.NG++;
            case kS:
              return PS.lockSkips++, void(0 === XS && 0 === xS || SS.outlier(`lock skip dropped raw (${KS(XS)}, ${KS(xS)}) at ${jS(tS)} ms`))
          }
          PS.looked++, Number.isFinite(bS) && (PS.dtMin = Math.min(PS.dtMin, bS), PS.dtMax = Math.max(PS.dtMax, bS), PS.dtSum += bS, bS > 0 && (PS.peakRate = Math.max(PS.peakRate, Math.hypot(NS, qS) / bS))), PS.raw[0] += XS, PS.raw[1] += xS, PS.turned[0] += NS, PS.turned[1] += qS;
          const QS = Math.abs(XS) > nS || Math.abs(xS) > nS,
            DS = `raw (${KS(XS)}, ${KS(xS)}) over ${jS(bS)} ms, limit ${KS(nS)}, filter v (${GS.toFixed(3)}, ${CS.toFixed(3)}) px/ms, at ${jS(tS)} ms`;
          uS === fS ? (PS.IU++, SS.outlier(`spike put right: ${DS} -> turned (${KS(NS)}, ${KS(qS)})`)) : QS ? (PS.pastLimit++, SS.outlier(`kept past limit: ${DS}`)) : bS > 50 && (PS.longFrames++, SS.remote || SS.outlier(`long frame: ${DS}, turned in full`))
        }, this.onMouseMove = SS => {
          const HS = this.tally,
            {
              movementX: gS,
              movementY: tS
            } = SS;
          HS.events++;
          const bS = Math.max(Math.abs(gS), Math.abs(tS));
          HS.eventMax = Math.max(HS.eventMax, bS);
          const XS = null !== document.pointerLockElement,
            xS = this.event;
          xS[0] = SS.timeStamp, xS[1] = gS, xS[2] = tS, xS[3] = XS ? 1 : 0, this.events.push(xS), bS >= 200 && (HS.bigEvents++, this.eventOutlier(`big mousemove (${gS}, ${tS}) at ${jS(SS.timeStamp)} ms, lock ${XS?"Ku":"free"}`))
        }, this.onLockChange = () => {
          const SS = document.pointerLockElement;
          (0, bS.i)("look", `pointer lock ${SS?`gained (${SS.tagName.toLowerCase()})`:"lost"} at ${jS(performance.now())} ms`)
        }, this.onLockError = () => {
          (0, bS.i)("look", `pointer lock request failed at ${jS(performance.now())} ms`)
        }, this.onVisibility = () => {
          (0, bS.i)("look", `page ${document.visibilityState} at ${jS(performance.now())} ms`)
        }, this.flush = () => {
          this.takeRecords();
          const SS = this.tally;
          if (this.tally = new GS, !SS.moved() || this.remote && !SS.hasEvent()) return;
          const HS = SS.looked > 0 ? SS.dtSum / SS.looked : NaN,
            gS = [`${SS.frames} frames (${SS.looked} looked, ${SS.idle} idle${"wasm"===this.client?`, ${SS.NG} carried`:""})`, `dt avg ${jS(HS)} min ${jS(SS.dtMin)} max ${jS(SS.dtMax)}, ${SS.longFrames} long`, `${SS.events} mousemoves (max ${KS(SS.eventMax)} px, ${SS.bigEvents} big)`, `raw (${KS(SS.raw[0])}, ${KS(SS.raw[1])}) turned (${KS(SS.turned[0])}, ${KS(SS.turned[1])})`, `peak ${SS.peakRate.toFixed(2)} px/ms`, `put right ${SS.IU}, past limit ${SS.pastLimit}, lock skips ${SS.lockSkips}`, "lock " + (document.pointerLockElement ? "Ku" : "free")];
          SS.dropped > 0 && gS.push(`${SS.dropped} doubled spike copies dropped`), SS.cameraSets > 0 && gS.push(`${SS.cameraSets} camera sets`), SS.cameraSetsLost > 0 && gS.push(`${SS.cameraSetsLost} camera set records lost`), SS.lost > 0 && gS.push(`${SS.lost} records lost`), SS.suppressed > 0 && gS.push(`${SS.suppressed} outlier lines not shown`), (0, bS.i)("look", `1s: ${gS.join("; ")}`)
        }, this.dump = () => [`look records (${this.client}): nowMs,dtMs,rawX,rawY,turnedX,turnedY,outcome,vX,vY,limit`, ...this.records.lines(), "mousemove events: timeStamp,movementX,movementY,locked", ...this.events.lines()].join("\n")
      }
      start(SS, HS) {
        this.client = SS, this.takes = HS;
        const {
          screen: gS
        } = window;
        (0, bS.i)("look", `start: ${SS} client, dpr ${window.devicePixelRatio}, screen ${gS.width}x${gS.height}, pointer lock ${document.pointerLockElement?"Ku":"free"}`), this.started || (this.started = !0, window.addEventListener("mousemove", this.onMouseMove, {
          capture: !0,
          passive: !0
        }), document.addEventListener("pointerlockchange", this.onLockChange), document.addEventListener("pointerlockerror", this.onLockError), document.addEventListener("visibilitychange", this.onVisibility), setInterval(this.flush, 1e3), this.remote || (0, bS.h)("look", this.dump))
      }
      outlier(SS) {
        const HS = this.tally;
        HS.outliers >= 20 ? HS.suppressed++ : (HS.outliers++, (0, bS.i)("look", SS))
      }
      eventOutlier(SS) {
        const HS = this.tally;
        HS.eventLines >= 10 ? HS.suppressed++ : (HS.eventLines++, (0, bS.i)("look", SS))
      }
      takeRecords() {
        if (null === this.takes) return;
        const SS = this.takes.look();
        if (SS.length >= 2) {
          this.tally.lost += SS[0], this.tally.dropped += SS[1];
          for (let HS = 2; HS + 10 <= SS.length; HS += 10) this.record(SS, HS)
        }
        const HS = this.takes.cameraSets();
        if (HS.length >= tS.c) {
          this.tally.cameraSetsLost += HS[0];
          for (let SS = tS.c; SS + tS.g <= HS.length; SS += tS.g) this.tally.cameraSets++, this.outlier(qS(HS, SS))
        }
      }
      droppedCopy() {
        this.tally.dropped++
      }
      endTake() {
        this.takeRecords(), this.takes = null
      }
    }
    let nS = null;

    function PS(SS) {
      let HS = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
      return nS ??= new CS, nS.start(SS, HS), nS.record
    }

    function QS() {
      var SS;
      null === (SS = nS) || void 0 === SS || SS.endTake()
    }

    function DS() {
      var SS;
      null === (SS = nS) || void 0 === SS || SS.droppedCopy()
    }
  },
  38983: (SS, HS, gS) => {
    gS.d(HS, {
      c: () => rH,
      f: () => mH,
      i: () => eH
    });
    var tS = gS(3811),
      bS = gS(160),
      XS = gS(198),
      xS = gS(687),
      NS = gS(45),
      qS = gS(2910),
      uS = gS(3870),
      IS = gS(3858),
      fS = gS(1309);
    const kS = new WeakMap;
    class aS {
      constructor(SS, HS) {
        let gS = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {
          XuS: !0
        };
        this.callbacks = HS, this.options = gS, this.agS = void 0, this.sessionId = void 0, this.eJ = [], this.xuS = !1, this.nK = !1, this.NuS = void 0, this.mJ = 0, this.kbS = 0, this.quS = (SS, HS) => {
          if (this.nK) return;
          const gS = Number(SS);
          this.xuS ? this.uuS(gS, HS) : this.eJ.push({
            id: gS,
            payload: HS
          })
        }, this.dispose = () => {
          this.nK || (this.nK = !0, kS.delete(this), this.eJ.length = 0, this.NuS())
        }, this.agS = SS, this.sessionId = SS.sessionId, kS.set(this, []), this.NuS = this.IuS()
      }
      fuS(SS) {
        this.NuS(), this.agS = SS, this.sessionId = SS.sessionId, this.mJ = 0, this.kbS = 0, this.NuS = this.IuS()
      }
      get iJ() {
        return this.kbS
      }
      IuS() {
        const SS = this.agS.eC("*", this.quS);
        return this.options.XuS && this.agS.rC(this.dispose), SS
      }
      uuS(SS, HS) {
        try {
          (0, uS.rc)(SS) && (HS = (0, uS.d)(SS, IS.CK.from(HS)));
          const gS = kS.get(this)[SS];
          if ("function" !== typeof gS) {
            if (this.callbacks.kuS) return void this.callbacks.kuS(SS, HS);
            throw new Error(`No onMessage handler registered for message id ${SS}`)
          }
          gS(HS)
        } catch (gS) {
          this.callbacks.auS(`Error in onMessage ${SS} with payload ${JSON.stringify(HS)}`, gS)
        } finally {
          this.mJ++
        }
      }
      KuS() {
        for (const {
            id: SS,
            payload: HS
          }
          of this.eJ) {
          if (this.nK) break;
          this.uuS(SS, HS)
        }
        this.eJ.length = 0
      }
      Ow() {
        return this.nK
      }
      juS() {
        if (this.xuS || this.nK) throw new Error("Trying to getOnMessageRegistrationHandler after registration finished");
        return {
          eC: (SS, HS) => {
            if (this.xuS || this.nK) throw new Error("Trying to call onMessage after registration finished");
            this.eC(SS, HS)
          },
          finishRegistration: () => {
            if (this.nK) throw new Error("Cannot finish message registration after disposal");
            this.xuS = !0, this.KuS()
          }
        }
      }
      eC(SS, HS) {
        var gS, tS;
        null === (gS = (tS = this.callbacks).GuS) || void 0 === gS || gS.call(tS);
        const bS = kS.get(this);
        for (; SS > bS.length;) bS[bS.length] = null;
        bS[SS] = HS
      }
      send(SS, HS) {
        this.CuS(), (0, fS.E)(HS) ? this.agS.Av(SS, HS) : this.agS.send(SS, HS)
      }
      CuS() {
        var SS, HS;
        (this.kbS++, 5 === KS++) && (null === (SS = (HS = this.callbacks).GuS) || void 0 === SS || SS.call(HS), KS = 0)
      }
      fC() {
        this.dispose(), this.agS.fC()
      }
      leave() {
        this.dispose(), this.agS.leave()
      }
    }
    let KS = 0;
    var jS = gS(3824);
    class GS extends aS {
      constructor(SS) {
        super(SS, {
          GuS: () => {
            (0, NS.i)(!0) && (0, tS.VJ)()
          },
          auS: (SS, HS) => {
            var gS;
            null === (gS = (0, qS.e)()) || void 0 === gS || gS.hj(SS, HS)
          }
        }, {
          XuS: !1
        }), (0, jS.d)(SS)
      }
      HO(SS, HS) {
        return !!(0, jS.l)((0, jS.c)(), this.agS, SS, HS) && (this.CuS(), !0)
      }
      fuS(SS) {
        this.nuS(), super.fuS(SS), (0, jS.d)(SS)
      }
      fC() {
        super.fC(), this.nuS()
      }
      nuS() {
        this.agS.nC.NK.fL = void 0
      }
    }
    var CS = gS(31),
      nS = gS(2083),
      PS = gS(1844),
      QS = gS(36471),
      DS = gS(38991),
      wS = gS(38058),
      hS = gS(37827),
      ZS = gS(680),
      JS = gS(38452);

    function OS(SS, HS, gS) {
      const tS = function(SS) {
          const HS = new Int32Array(SS.length * JS.g);
          return SS.forEach(((SS, gS) => {
            const tS = gS * JS.g;
            if (4 === SS.length) {
              const [gS, bS, XS, xS] = SS;
              HS.set([gS, bS, XS, gS, bS, XS, xS], tS)
            } else {
              const [gS, bS, XS, xS, NS, qS, uS] = SS;
              HS.set([gS, XS, NS, bS, xS, qS, uS], tS)
            }
          })), HS
        }(gS),
        bS = (HS, gS, tS, bS) => {
          SS.setBlockNoMulti(HS, gS, tS, bS, !0)
        };
      SS.client.gameRecorder.isCapturing() ? (0, JS.xb)(tS, (0, JS.tb)(tS), bS) : SS.qk.gk.wZ(tS, {
        FW: bS,
        isHookId: HS => SS.blockChangeHasHooks(HS),
        watched: () => function(SS, HS, gS) {
          const tS = [],
            bS = (SS, HS, gS) => {
              tS.push(SS, HS, gS)
            },
            XS = new Set;
          for (let xS = 0; xS < gS.length; xS += JS.g)
            for (let HS = (0, ZS.T)(gS[xS]); HS <= (0, ZS.T)(gS[xS + 3]); HS++)
              for (let tS = (0, ZS.T)(gS[xS + 1]); tS <= (0, ZS.T)(gS[xS + 4]); tS++)
                for (let NS = (0, ZS.T)(gS[xS + 2]); NS <= (0, ZS.T)(gS[xS + 5]); NS++) {
                  const gS = `${HS}|${tS}|${NS}`;
                  XS.has(gS) || (XS.add(gS), SS.blockDataOwner.forEachDataCell(HS, tS, NS, bS))
                }
          return HS.forEachCell(bS), Int32Array.from(tS)
        }(SS, HS, tS)
      }), SS.qk.kSS()
    }

    function dS(SS) {
      SS.ggS = new Set, SS.XgS = new Set, SS.tgS = new Set, SS.xgS = new Set, SS.bgS = [], SS.NgS = [], SS.OW = new Set, SS.OX = [], SS.dW = []
    }
    class cS {
      constructor(SS) {
        this.qk = SS
      }
      register(SS) {
        const HS = this.qk,
          gS = (0, qS.b)();
        SS.eC(uS.ab, (SS => {
          HS.gk.ggS.add(SS), HS.gk.XgS.delete(SS)
        })), SS.eC(uS.jb, (SS => {
          HS.gk.XgS.add(SS), HS.gk.ggS.delete(SS)
        })), SS.eC(uS.ie, (SS => {
          HS.gk.XgS.delete(SS), HS.gk.ggS.delete(SS)
        })), SS.eC(uS.fb, (SS => {
          HS.gk.tgS.add(SS), HS.gk.xgS.delete(SS)
        })), SS.eC(uS.pb, (SS => {
          HS.gk.xgS.add(SS), HS.gk.tgS.delete(SS)
        })), SS.eC(uS.me, (SS => {
          HS.gk.xgS.delete(SS), HS.gk.tgS.delete(SS)
        })), SS.eC(uS.cb, (SS => {
          (0, fS.fb)(SS, HS.gk.NgS), (0, fS.fb)(SS, HS.gk.bgS), HS.gk.bgS.push(SS)
        })), SS.eC(uS.lb, (SS => {
          (0, fS.fb)(SS, HS.gk.bgS), (0, fS.fb)(SS, HS.gk.NgS), HS.gk.NgS.push(SS)
        })), SS.eC(uS.je, (SS => {
          (0, fS.fb)(SS, HS.gk.bgS), (0, fS.fb)(SS, HS.gk.NgS)
        })), SS.eC(uS.Kf, (SS => {
          let {
            Xg: gS,
            xg: tS
          } = SS;
          tS ? HS.gk.OW.delete(gS) : HS.gk.OW.add(gS)
        })), SS.eC(uS.Hf, (SS => {
          let {
            OX: tS,
            dX: bS
          } = SS;
          gS.updateWalkThroughRect(HS.HA, tS, bS)
        })), (0, tS.onGameResetOnce)((() => {
          dS(HS.gk)
        })), SS.eC(uS.nc, (SS => {
          wS.c.applyServerUpdate(SS)
        })), SS.eC(uS.vb, (SS => {
          gS.applyServerBlocks((() => {
            ! function(SS, HS) {
              for (const {
                  UX: gS,
                  pX: tS
                }
                of HS) {
                const HS = hS.d[tS];
                if (HS) {
                  const {
                    compX: tS,
                    compY: bS,
                    compZ: XS,
                    mainMultiblock: xS
                  } = HS;
                  SS.TE(gS[0] - tS, gS[1] - bS, gS[2] - XS, xS)
                }
              }
              for (const {
                  UX: gS,
                  pX: tS,
                  sX: bS
                }
                of HS) SS.setBlockNoMulti(gS[0], gS[1], gS[2], tS, !0), SS.blockDataOwner.setBlockData(gS[0], gS[1], gS[2], null === bS ? void 0 : JSON.parse(bS)), SS.blockAdded(gS[0], gS[1], gS[2], tS)
            }(gS, SS)
          })), CS.k.cj("changeBlockFail", SS), gS.client.triggerGameCallback("onChangeBlockFail", SS), CS.k.cj("EditBoard", {
            pos: null
          }), CS.k.cj("EditCodeBlock", {
            pos: null,
            canChangePos: null
          })
        })), SS.eC(uS.Sb, (SS => {
          gS.applyServerBlocks((() => {
            OS(gS, wS.c, SS)
          }))
        })), SS.eC(uS.yf, (SS => {
          let {
            eb: HS,
            rb: tS
          } = SS;
          if (gS.Xs(HS[0], HS[1], HS[2])) {
            const SS = (0, qS.b)().pC(HS[0], HS[1], HS[2]);
            (0, qS.b)().updateMailboxContents(HS[0], HS[1], HS[2], SS, tS)
          }
        })), SS.eC(uS.Ge, (SS => {
          let {
            pos: HS,
            data: tS
          } = SS;
          gS.blockDataOwner.setBlockData(HS[0], HS[1], HS[2], tS), gS.blockAdded(HS[0], HS[1], HS[2], gS.pC(HS[0], HS[1], HS[2]))
        }))
      }
    }
    var vS = gS(37176),
      ES = gS(36785),
      LS = gS(38102),
      YS = gS(37944),
      AS = gS(38125);
    class yS {
      constructor(SS, HS) {
        this.qk = SS, this.setUpQueuedEntity = HS
      }
      register(SS) {
        const HS = this.qk,
          gS = (0, qS.b)();
        SS.eC(uS._, (SS => {
          let {
            Rt: HS,
            Tt: gS
          } = SS;
          this.setUpQueuedEntity(HS), HS = (0, ES.e)(HS), (0, qS.b)().client.gameRecorder.recordBulletShot(HS, gS), CS.k.cj(`bulletShot|${HS}`, {
            bulletDirections: gS
          })
        })), SS.eC(uS.qc, (SS => {
          let {
            lS: HS,
            mS: gS
          } = SS;
          CS.k.cj("damagedByOtherPlayer", {
            lS: HS,
            direction: gS
          }, !0)
        })), SS.eC(uS.Fd, (SS => {
          CS.k.cj("playerKilled", SS, !0), (0, qS.b)().client.gameRecorder.recordPlayerKilled(SS.deadEId, SS.killerEId, SS.withItem, SS.killstreak)
        })), SS.eC(uS.Yb, (SS => {
          CS.k.cj("customKillfeed", SS, !0), (0, qS.b)().client.gameRecorder.recordCustomKillfeed(SS.killer, SS.victim, SS.withItem)
        })), SS.eC(uS.Qd, (SS => {
          let {
            Ct: gS,
            nt: tS
          } = SS;
          this.setUpQueuedEntity(gS);
          const bS = HS.FQ.AHS(gS);
          null !== bS && void 0 !== bS && bS.isGun() && bS.reload(Date.now(), tS)
        })), SS.eC(uS.Ae, (SS => {
          let {
            Pt: gS,
            Qt: tS
          } = SS;
          const bS = tS ? (0, AS.f)(HS, tS) : void 0;
          CS.k.cj("sendHitmarker", {
            Pt: gS,
            screenPos: bS
          }, !0)
        })), SS.eC(uS.Rc, (SS => {
          let {
            LX: tS,
            YX: bS,
            yX: XS,
            VX: xS,
            iX: NS,
            WX: qS,
            zX: uS
          } = SS;
          this.setUpQueuedEntity(tS), tS = (0, ES.e)(tS);
          const IS = HS.FQ.JHS(tS);
          if (IS && (IS.lastHurtTime = performance.now()), (0, LS.playRigHurt)(HS, tS, qS), CS.k.cj("lifeformHurt", {
              eId: tS,
              zX: uS
            }), bS) {
            const SS = (0, AS.f)(HS, bS.Qt);
            CS.k.cj("yourAttackHit", {
              Pt: xS,
              screenPos: SS,
              hitSelf: tS === HS.HA
            })
          }
          tS === HS.HA && (gS.shakePlayerCamera(tS, NS / 40, 200), CS.k.cj("closeShopOnDamaged", null), CS.k.cj("damagedByOtherPlayer", {
            lS: null,
            direction: qS,
            iX: NS
          }, !0));
          const fS = HS.FQ.lC(tS);
          if (fS && (XS || xS)) {
            const SS = [fS[0], fS[1] + 1, fS[2]];
            XS && (0, YS.k)(HS, YS.A, SS, 15), xS && (0, YS.k)(HS, YS.n, SS, 10)
          }
        })), SS.eC(uS.Qc, (SS => {
          let {
            GH: gS,
            CH: tS,
            nH: bS
          } = SS;
          (0, vS.d)(HS).setHealthFrac((0, ES.e)(gS), bS), CS.k.cj("lifeformHealthChanged", {
            eId: (0, ES.e)(gS),
            CH: tS,
            nH: bS
          })
        })), SS.eC(uS.W, (SS => {
          let {
            yt: gS,
            Vt: tS
          } = SS;
          (0, qS.b)().playerAttacked(HS.HA, gS, tS)
        })), SS.eC(uS.Bb, (() => {
          const SS = HS.FQ.AHS(HS.HA);
          null !== SS && void 0 !== SS && SS.isChargeable() && SS.finishCharging(!1, Date.now())
        })), SS.eC(uS.$b, (SS => {
          let {
            Kt: HS,
            jt: gS,
            Gt: tS,
            Ob: bS,
            cb: XS,
            Eb: xS
          } = SS;
          HS = (0, ES.e)(HS), (0, qS.b)().client.updateEffect(HS, gS, {
            displayName: tS,
            icon: bS,
            duration: XS,
            level: xS
          })
        })), SS.eC(uS.Rd, (SS => {
          let {
            Kt: HS,
            jt: gS
          } = SS;
          HS = (0, ES.e)(HS), (0, qS.b)().client.removeEffect(HS, gS)
        })), SS.eC(uS.uf, (SS => {
          CS.k.cj("ttbEffectMultiplier", SS)
        }))
      }
    }
    var VS = gS(39016),
      iS = gS(37171),
      WS = gS(4346),
      zS = gS(38141),
      US = gS(36771),
      pS = gS(36773),
      sS = gS(37097),
      BS = gS(37261),
      MS = gS(38147),
      FS = gS(39019);
    class RS {
      constructor(SS, HS) {
        this.qk = SS, this.setUpQueuedEntity = HS
      }
      register(SS) {
        const HS = this.qk,
          gS = (0, qS.b)();
        SS.eC(uS.cd, (SS => {
          let {
            eId: gS,
            settings: tS
          } = SS;
          (0, BS.g)(gS);
          for (const HS in tS)(0, BS.d)(gS, HS, tS[HS]);
          if ("canSee" in tS && HS.FQ.ZSS(gS, "hidingMeshManager")) {
            const SS = HS.FQ.getState(gS, "hidingMeshManager");
            SS.canSee = (0, MS.b)("canSee", tS.canSee), SS._forceUpdate = !0
          }
        })), SS.eC(uS.M, (SS => {
          let {
            SX: gS,
            HX: tS,
            animationScript: bS,
            gX: XS,
            tX: xS,
            bX: NS,
            XX: uS
          } = SS;
          gS = (0, ES.e)(gS);
          const IS = null === bS && null !== NS ? (0, VS.g)(NS, uS) : bS;
          (0, qS.b)().client.gameRecorder.recordAnimateEntity(gS, tS, IS, XS, xS), (0, vS.d)(HS).animations.animateEntity(gS, tS, bS, XS, xS, NS, uS), null !== bS || gS === HS.HA && tS === iS.g.Emote && (0, qS.b)().client.cameraController.endTemporaryThirdPerson()
        })), SS.eC(uS.ye, (SS => {
          (0, FS.d)(SS)
        })), SS.eC(uS.Bd, (SS => {
          for (const HS of SS)(0, zS.v)(HS);
          CS.k.cj("playerCosmeticsUpdated", SS, !0)
        })), SS.eC(uS.U, (SS => {
          for (const gS of SS)(0, sS.f)(HS, gS)
        })), SS.eC(uS.fd, (SS => {
          (0, YS.m)(HS, (0, fS.s)(SS))
        })), SS.eC(uS.jd, (SS => {
          WS.g[SS.PX] ? (0, YS.m)(HS, {
            ...WS.g[SS.PX],
            pos1: SS.pos1,
            pos2: SS.pos2
          }) : console.error(`Unknown preset id: ${SS.PX}`)
        })), SS.eC(uS.Ad, (SS => {
          var HS, gS;
          let {
            ot: tS,
            lt: bS,
            et: XS,
            rt: xS
          } = SS, {
            Hb: NS,
            gb: uS
          } = null !== xS && void 0 !== xS ? xS : {};
          const {
            Sb: IS
          } = null !== xS && void 0 !== xS ? xS : {};
          NS = null !== (HS = NS) && void 0 !== HS ? HS : void 0, uS = null !== (gS = uS) && void 0 !== gS ? gS : void 0, "string" === typeof IS && this.setUpQueuedEntity(IS), (0, qS.b)().client.gameRecorder.recordPlaySound(tS, bS, XS, xS), US.e.play((0, pS.e)(tS), bS, IS, NS, uS).rate(XS)
        })), SS.eC(uS.Bf, (SS => {
          for (const HS in SS) {
            const tS = SS[HS];
            for (const SS in tS) gS.client.meshCreator.handleParticleSystemUpdate(HS, SS, tS[SS])
          }
        }))
      }
    }
    var TS = gS(37806),
      oS = gS(37774);
    class lS {
      constructor(SS) {
        this.qk = SS
      }
      register(SS) {
        const HS = this.qk,
          gS = (0, qS.b)();

        function tS() {
          return HS.FQ.fHS(HS.HA)
        }
        SS.eC(uS.Ac, (SS => {
          let {
            HH: gS,
            gH: tS,
            tH: bS,
            bH: XS,
            XH: xS,
            xH: NS,
            NH: qS,
            qH: uS,
            uH: IS
          } = SS;
          if (!HS.FQ.ZSS(gS, "itemState")) return void(0, TS.k)(HS, gS, [xS, NS, qS], tS, {
            amount: bS,
            attributes: JSON.parse(XS),
            qH: uS,
            size: IS
          });
          const fS = HS.FQ.getState(gS, "itemState");
          fS.amount = bS, fS.qH = uS, fS.creationTime = Date.now(), (0, oS.setServerPosition)(HS.FQ.getState(gS, "smoothToServerPos"), xS, NS, qS)
        })), SS.eC(uS.tb, (SS => {
          (0, vS.d)(HS).setCantPickUp(SS, !0), HS.FQ.ZSS(SS, "itemState") && (HS.FQ.getState(SS, "itemState").qH = !0)
        })), SS.eC(uS.fe, (SS => {
          (0, vS.d)(HS).setCantPickUp(SS, !1), HS.FQ.ZSS(SS, "itemState") && (HS.FQ.getState(SS, "itemState").qH = !1)
        })), SS.eC(uS.td, (SS => {
          let {
            pickUpItems: HS,
            pickUpAckSeq: gS
          } = SS;
          for (const {
              name: bS,
              amount: XS,
              attributes: xS
            }
            of HS) tS().pickUpItem({
            name: bS,
            amount: XS,
            typeObj: TS.A[bS],
            attributes: xS
          });
          (0, qS.b)().client.inventoryPrediction.serverChangeApplied(gS)
        })), SS.eC(uS.We, (SS => {
          let {
            index: gS,
            name: tS,
            amount: bS,
            attributes: XS,
            setSlotAckSeq: xS
          } = SS;
          const NS = HS.FQ.kHS(HS.HA);
          (gS < NS.playerInventory.numSlots || NS.tt || NS.inCreative) && NS.setItemSlot(gS, tS, bS, XS), (0, qS.b)().client.inventoryPrediction.serverChangeApplied(xS)
        })), SS.eC(uS.xc, (SS => {
          (0, qS.b)().client.inventoryPrediction.acknowledge(SS)
        })), SS.eC(uS.J, (SS => {
          let {
            kH: HS,
            aH: gS,
            KH: tS,
            jH: bS
          } = SS;
          (0, qS.b)().client.itemDropPrediction.onActionItemDrops(HS, gS, tS, bS)
        })), SS.eC(uS.Mb, (SS => {
          tS().clearInventory(), (0, qS.b)().client.inventoryPrediction.serverChangeApplied(SS)
        })), SS.eC(uS._e, (SS => {
          CS.k.cj("setSelectedInventorySlotI", SS, !0)
        })), SS.eC(uS.Eb, (SS => {
          let {
            Zt: gS,
            Jt: tS,
            Ot: bS,
            dt: XS,
            ct: xS,
            vt: NS,
            Et: uS,
            Lt: IS
          } = SS;
          const fS = HS.FQ.kHS(HS.HA);
          if (NS) {
            const {
              gt: SS,
              qt: HS
            } = IS;
            return (0, qS.b)().client.inventoryPrediction.t5(HS, (() => {
              fS.chestRefreshed(tS, bS, XS, uS, SS)
            })) && CS.k.cj("chestToggleFromServer", !1, !0), void CS.k.cj("chestRefreshedFromServer")
          }(gS || fS.tt) && (gS ? (fS.chestOpened(tS, bS, XS, xS, uS), null !== xS && (0, qS.b)().client.ironChestPasskeyCache.onChestOpened(XS, xS)) : fS.chestClosed(), CS.k.cj("chestToggleFromServer", gS, !0))
        })), SS.eC(uS._b, (SS => {
          let {
            craftingRecipeItemName: tS,
            recipesForItem: bS
          } = SS;
          tS ? gS.craftingManager.editRecipesForPlayer(HS.HA, tS, bS) : gS.craftingManager.resetAllPlayerRecipes(HS.HA), CS.k.cj("craftingRecipesEdited", {
            itemName: tS,
            recipesForItem: bS
          })
        })), SS.eC(uS.Wd, (SS => {
          let {
            eS: HS,
            rS: gS,
            SH: bS
          } = SS;
          tS().removeItemName(HS, gS), (0, qS.b)().client.inventoryPrediction.serverChangeApplied(bS)
        })), SS.eC(uS.Ud, (SS => {
          let {
            JX: tS
          } = SS;
          gS.craftingManager.removeRecipes(HS.HA, tS), CS.k.cj("craftingRecipesEdited", {
            itemName: tS,
            recipesForItem: []
          })
        }))
      }
    }
    var mS = gS(6672),
      eS = gS(37429),
      rS = gS(402),
      SH = gS.n(rS),
      HH = gS(4656),
      gH = gS(37715),
      tH = gS(38286),
      bH = gS(37422);
    class XH {
      constructor(SS, HS) {
        this.qk = SS, this.setUpQueuedEntity = HS
      }
      register(SS) {
        const HS = this.qk,
          gS = (0, qS.b)();
        SS.eC(uS.sf, (SS => {
          let {
            Rb: gS,
            Tb: bS,
            ob: XS,
            lb: xS
          } = SS;
          const NS = [bS, XS, xS];
          HS.FQ.setPosition(HS.HA, NS), (0, tS.sendColyMessage)(uS.ah, {
            xN: gS,
            NN: HH.d
          }), CS.k.cj("localPlayerTeleported", {
            pos: NS,
            isCorrection: !1
          })
        })), SS.eC(uS.od, (SS => {
          let {
            JH: HS,
            OH: gS,
            dH: tS,
            cH: bS
          } = SS;
          this.setUpQueuedEntity(HS);
          const XS = [gS, tS, bS];
          CS.k.cj(`otherPlayerTeleported|${HS}`, {
            pos: XS
          })
        })), SS.eC(uS.Gd, (SS => {
          let {
            xb: gS,
            Nb: bS,
            qb: XS,
            ub: xS,
            Ib: NS,
            fb: qS,
            kb: IS,
            Kb: fS,
            ab: kS,
            Cb: aS
          } = SS;
          const KS = [bS, XS, xS];
          HS.FQ.setPosition(HS.HA, KS);
          const jS = HS.FQ.sSS(HS.HA),
            GS = HS.FQ.vW(HS.HA);
          SH().set(GS.RV, 0, 0, 0), SH().set(GS.oV, 0, 0, 0), SH().set(GS.xG, NS, qS, IS), GS.lV(), jS._flying = null !== aS, aS ? (jS.flyAccel.nb = aS.nb, jS.flyAccel.Pb = aS.Pb) : jS.flyAccel.reset(), fS && jS.movementType === mS.l.GLIDING && (jS.jb = fS.jb, SH().copy(jS.Gb, fS.Gb)), (0, tS.sendColyMessage)(uS.ah, {
            xN: gS,
            NN: HH.d
          }), CS.k.cj("localPlayerTeleported", {
            pos: KS,
            isCorrection: !0
          })
        })), SS.eC(uS.af, (SS => {
          let {
            vehicleEId: HS,
            overrides: gS
          } = SS;
          (0, qS.b)().applyRiddenVehicleSettingOverrides(HS, gS)
        })), SS.eC(uS.Ff, (SS => {
          let {
            MS: gS,
            FS: tS,
            RS: bS
          } = SS;
          const XS = HS.FQ.sSS(HS.HA).physicsState.type === mS.o.SLEEPING && gS === mS.o.DEFAULT;
          (0, qS.b)().updatePositionAndPhysics(HS.HA, {
            type: gS,
            tier: tS
          }, !0, bS), XS && (0, qS.b)().updateHeldVehicleStatus()
        })), SS.eC(uS.yb, (SS => {
          let {
            IH: gS,
            fH: tS
          } = SS;
          HS.FQ.uHS(HS.HA).setPose(gS, tS)
        })), SS.eC(uS.Ie, (SS => {
          const {
            Of: gS,
            MHS: tS
          } = (0, eS.f)([SS[0], SS[1], SS[2]]);
          bH.c.setLookDirection(HS, gS, tS), (0, gH.x)(gS, tS);
          const bS = HS.FQ.uHS(HS.HA);
          bS && (bS.heading = gS)
        })), SS.eC(uS.Ke, (SS => {
          gS.client.cameraController.setCameraZoom(SS)
        })), SS.eC(uS.if, (SS => {
          let {
            Lb: tS,
            Yb: bS
          } = SS;
          gS.shakePlayerCamera(HS.HA, tS, bS)
        })), SS.eC(uS.Ec, (SS => {
          HS.FQ.uHS(HS.HA).jumpMultiplier.setMultiplierType("jumpEffectAmount", SS)
        })), (0, tS.onGameResetOnce)((() => {
          HS.FQ.uHS(HS.HA).jumpMultiplier.setMultiplierType("jumpEffectAmount", 1)
        })), SS.eC(uS.Q, (SS => {
          HS.FQ.vW(HS.HA).applyImpulse(SS)
        })), SS.eC(uS.ef, (SS => {
          const gS = HS.FQ.vW(HS.HA);
          SH().set(gS.RV, 0, 0, 0), SH().set(gS.oV, 0, 0, 0), SH().copy(gS.xG, SS), gS.lV()
        })), (0, tS.onGameResetOnce)((() => {
          (0, tH.setFloatingYValue)(HS.FQ.getState(HS.HA, "physics"), HS.FQ.zB(HS.HA), null)
        })), SS.eC(uS.bc, (SS => {
          let {
            Wt: gS,
            zt: tS,
            Ut: bS
          } = SS;
          const XS = (0, ES.e)(gS);
          if (XS === HS.HA) {
            const SS = HS.FQ.zB(HS.HA).position;
            bS ??= Math.floor(SS[1]) - 1, (0, tH.setFloatingYValue)(HS.FQ.getState(HS.HA, "physics"), HS.FQ.zB(HS.HA), tS ? bS : null)
          }(0, vS.d)(HS).setFloating(XS, tS, bS);
          const xS = HS.FQ.getState(XS, "floating");
          xS && (xS.isFloating = tS, xS.Ut = tS ? bS : null)
        }))
      }
    }

    function xH(SS, HS, gS, tS, bS) {
      let XS = arguments.length > 5 && void 0 !== arguments[5] && arguments[5];
      if (!SS.FQ.IHS(SS.HA)) return console.log("Got resync inven but don't have inven component"), void HS.acknowledge(tS);
      XS && console.error("Had to sync inven"), HS.t5(tS, bS) && gS.cj("chestToggleFromServer", !1, !0), gS.cj("syncedInvenFromServer")
    }
    var NH = gS(39029),
      qH = gS(39031),
      uH = gS(2092);
    var IH = gS(4640);

    function fH(SS) {
      const HS = SS.gk;
      let gS = 0,
        bS = -1,
        xS = -1 / 0,
        NS = null,
        qS = !0;
      const IS = () => {
        if (++gS % 10 !== 0) return;
        const IS = (0, tS.getLastReceivedPacketId)();
        if (IS <= bS) return;
        const [fS, kS, aS] = SS.FQ.lC(SS.HA), KS = ! function(SS) {
          var HS;
          let gS = null === (HS = SS.FQ.THS(SS.HA)) || void 0 === HS ? void 0 : HS.fK;
          if (void 0 === gS) return !1;
          const tS = new Set;
          for (; void 0 !== gS && !tS.has(gS);) {
            var bS;
            tS.add(gS);
            const HS = SS.FQ.getState(gS, "smoothToServerPos"),
              XS = Array.isArray(HS) ? null : null === HS || void 0 === HS ? void 0 : HS.serverPosition;
            if (XS) {
              const HS = SS.FQ.lC(gS);
              if (Math.abs(HS[0] - XS[0]) > 10 || Math.abs(HS[1] - XS[1]) > 10 || Math.abs(HS[2] - XS[2]) > 10) return !0
            }
            gS = null === (bS = SS.FQ.THS(gS)) || void 0 === bS ? void 0 : bS.fK
          }
          return !1
        }(SS) && function(SS, HS, gS, tS) {
          const bS = XS.e.JK;
          for (let XS = 0; XS < SS.length; XS++) {
            const xS = SS[XS];
            if (!(0, IH.i)(HS, gS, tS, xS[0] * bS, xS[1] * bS, xS[2] * bS)) return !1
          }
          return !0
        }(HS.SG.PK, fS, kS, aS), jS = null === NS || Math.abs(fS - NS[0]) > 8 || Math.abs(kS - NS[1]) > 8 || Math.abs(aS - NS[2]) > 8, GS = !qS || jS || performance.now() - xS >= 1e4;
        qS = KS, KS && GS && (bS = IS, xS = performance.now(), NS = [fS, kS, aS], (0, tS.sendColyMessage)(uS.Dg, {
          lx: IS
        }))
      };
      return SS.on("mf", IS), () => {
        SS.off("mf", IS)
      }
    }
    var kH = gS(39038),
      aH = gS(1608),
      KH = gS(2903),
      jH = gS(3067),
      GH = gS(4904);
    class CH {
      constructor(SS, HS, gS) {
        this.qk = SS, this.gameNameWithVariation = HS, this.connectionResume = gS, this.stopChunkReports = () => {}, this.replayResume = null
      }
      clearUiRequestsAndQTEs() {
        GH.c.reset(), (0, NH.e)()
      }
      startChunkReports() {
        const SS = function(SS) {
            let HS = null,
              gS = -1 / 0,
              bS = null;
            const XS = () => {
                bS = null;
                const XS = Math.ceil(SS.kE[0]),
                  xS = Math.ceil(SS.kE[1]);
                HS && HS[0] === XS && HS[1] === xS || (HS = [XS, xS], gS = performance.now(), (0, tS.sendColyMessage)(uS.Bg, {
                  ix: XS,
                  Wx: xS
                }))
              },
              xS = () => {
                null === bS && (bS = setTimeout(XS, Math.max(0, gS + 250 - performance.now())))
              };
            return XS(), SS.on("addRemoveDistanceChanged", xS), () => {
              SS.off("addRemoveDistanceChanged", xS), null !== bS && (clearTimeout(bS), bS = null)
            }
          }(this.qk.gk),
          HS = fH(this.qk);
        this.stopChunkReports = () => {
          SS(), HS()
        }
      }
      restartChunkStreaming() {
        (0, gH.m)(this.qk, (0, qS.b)().recentChunkEdits.chunksEditedSince(this.connectionResume.getDroppedAt() - kH.b)), this.startChunkReports()
      }
      register(SS) {
        const HS = this.qk,
          gS = (0, qS.b)();
        SS.eC(uS._c, (SS => {
          nS.d.applyNewClientOptions(SS)
        })), SS.eC(uS.xd, (SS => {
          KH.d.onReceiveColyseusPing(SS)
        })), SS.eC(uS.Oe, (SS => {
          let {
            key: HS,
            value: gS
          } = SS;
          (0, PS.setCookie)(this.gameNameWithVariation, HS, gS)
        })), SS.eC(uS.Ue, (SS => {
          CS.k.cj("setDiscordReportKey", SS)
        })), (0, tS.onGameResetOnce)((() => {
          this.stopChunkReports()
        })), SS.eC(uS.sc, (bS => {
          const {
            Ng: XS,
            qg: xS
          } = bS;
          if ((0, tS.setAdjustment)(xS), this.connectionResume.onInitialInfo(bS.ug, bS.Ig), tS.offlineInputReplay.MJ(bS.fg), this.connectionResume.isResuming()) {
            console.log("Resumed the connection as eId", XS);
            try {
              null === bS.kg && (0, qS.b)().client.inventoryPrediction.dropPending(), this.stopChunkReports(), dS(HS.gk), nS.d.apply({
                shopInfo: null,
                _shopVersion: uH.b
              });
              const gS = HS.FQ.kHS(HS.HA);
              gS.tt && (gS.chestClosed(), CS.k.cj("chestToggleFromServer", !1, !0)), this.clearUiRequestsAndQTEs(), CS.k.cj("initInfoReceived", SS)
            } finally {
              const SS = null === bS.kg ? null : {
                sync: null,
                endSeq: null
              };
              this.replayResume = SS, this.connectionResume.onResumeInitialInfo(bS.kg, (() => {
                SS.endSeq = (0, qS.b)().client.inventoryPrediction.lastActionSeq
              })), null === SS && this.restartChunkStreaming()
            }
          } else console.log("Local client is eId", XS), (0, gH.q)(HS), CS.k.cj("loadingScreenState", "loadingPage:loadingWorld"), HS.OSS = XS, HS.FQ.ZSS(HS.HA, HS.FQ.names.entityName) && HS.FQ.pY(HS.HA, HS.FQ.names.entityName), (0, qS.b)().setEntityName(HS.OSS, (0, qS.b)().getRawEntityName(HS.HA)), HS.rY[HS.OSS] = {}, HS.FQ.VY(HS.HA, HS.FQ.names.entityName), CS.k.cj("initInfoReceived", SS), this.startChunkReports(), gS.client.onServerConnectionFinalised()
        })), SS.eC(uS.xe, (() => {
          this.connectionResume.isResuming() ? this.connectionResume.onResumed((() => {
            const SS = this.replayResume;
            if (this.replayResume = null, !SS) return;
            this.restartChunkStreaming();
            const {
              inventoryPrediction: gS
            } = (0, qS.b)().client, {
              sync: bS
            } = SS, XS = new Set(tS.offlineInputReplay.takeDroppedActions());
            if (bS) {
              var xS;
              const tS = null !== (xS = SS.endSeq) && void 0 !== xS ? xS : gS.lastActionSeq;
              gS.forget((SS => SS > bS.qt && SS <= tS || XS.has(SS))), xH(HS, gS, CS.k, bS.qt, bS.load)
            } else gS.dropPending(), gS.askForSnapshot()
          })) : console.warn("ResumeComplete arrived without a resume")
        })), SS.eC(uS.of, (SS => {
          let {
            Ht: gS,
            Nt: tS,
            qt: bS
          } = SS;
          const {
            inventoryPrediction: XS
          } = (0, qS.b)().client, xS = () => {
            HS.FQ.kHS(HS.HA).loadFromString(gS)
          };
          this.replayResume && (this.replayResume.sync = {
            qt: bS,
            load: xS
          }), xH(HS, XS, CS.k, bS, xS, tS)
        })), SS.eC(uS.Md, (SS => {
          let {
            type: HS,
            location1: gS,
            location2: tS,
            location3: bS,
            score: XS
          } = SS;
          (0, jH.r)({
            type: HS,
            location1: gS,
            location2: tS,
            location3: bS,
            score: XS
          })
        })), SS.eC(uS.ve, (SS => {
          let {
            type: HS,
            resourceType: gS,
            amount: tS,
            category: bS,
            itemName: XS
          } = SS;
          (0, jH.s)({
            type: HS,
            resourceType: gS,
            amount: tS,
            category: bS,
            itemName: XS
          })
        })), SS.eC(uS.Pc, (SS => {
          let {
            leaveEventType: HS,
            category: gS,
            subCategory: tS,
            value: bS
          } = SS;
          (0, jH.A)({
            leaveEventType: HS,
            category: gS,
            subCategory: tS,
            value: bS
          })
        })), SS.eC(uS.Xb, (SS => {
          let {
            cat1: HS,
            cat2: gS,
            cat3: tS,
            value: bS
          } = SS;
          (0, jH.m)({
            cat1: HS,
            cat2: gS,
            cat3: tS,
            value: bS
          })
        })), SS.eC(uS.Hc, (SS => {
          (0, qS.b)().client.leaveGameUnwanted({
            reason: SS,
            requiresRefresh: !1,
            canReconnect: !1,
            automaticallyReconnect: !1
          }), (0, aH.navigatePreserveSearch)("/")
        })), SS.eC(uS.Ce, (SS => {
          CS.k.cj("serverUpdating", Date.now() + SS, !0)
        })), SS.eC(uS.Zc, qH.d), SS.eC(uS.Sc, (SS => {
          console.error(`[logErrorToConsole]: ${SS}`)
        }))
      }
    }
    var nH = gS(39043),
      PH = gS(39058),
      QH = gS(1087),
      DH = gS(39050),
      wH = gS(39054),
      hH = gS(3779);
    class ZH {
      constructor(SS, HS) {
        this.qk = SS, this.clientApi = HS
      }
      register(SS) {
        const HS = this.qk,
          gS = (0, qS.b)();
        SS.eC(uS.Cb, (SS => {
          let {
            chatMsgId: HS,
            content: gS,
            chatterEId: tS
          } = SS;
          CS.k.cj("chat", {
            serverChatMsgId: HS,
            content: gS,
            chatterEId: tS
          }, !0)
        })), SS.eC(uS.tf, (SS => {
          CS.k.cj("TopRightHelper", SS, !0)
        })), SS.eC(uS.qf, (SS => {
          (0, nH.c)(SS)
        })), SS.eC(uS.Lc, (SS => {
          let {
            category: HS,
            timeframe: gS,
            data: tS
          } = SS;
          CS.k.cj("leaderboardResponse", {
            category: HS,
            timeframe: gS,
            data: tS
          })
        })), SS.eC(uS.lf, (() => {
          CS.k.cj("showShopTutorial", null, !0)
        })), SS.eC(uS.Kd, (SS => {
          CS.k.cj("progressBarUpdate", SS, !0)
        })), SS.eC(uS.tc, (SS => {
          CS.k.cj("middleScreenBarInitiate", {
            duration: SS.Bt,
            Mt: SS.Mt,
            horizBarRemOffset: SS.Ft
          }, !0)
        })), SS.eC(uS.Yd, (() => {
          CS.k.cj("middleScreenBarRemove", !0)
        })), SS.eC(uS.Qe, (SS => {
          let {
            id: HS,
            position: gS,
            style: tS,
            ut: bS,
            kt: XS
          } = SS;
          CS.k.cj("setDirectionArrow", {
            id: HS,
            position: gS,
            style: tS,
            text: (0, uS.A)(bS),
            kt: XS
          }, !0)
        })), SS.eC(uS.Jb, (SS => {
          let {
            id: HS
          } = SS;
          CS.k.cj("clearDirectionArrow", {
            id: HS
          }, !0)
        })), SS.eC(uS.Wb, (SS => {
          (0, hH.onCosmeticPackGranted)(SS)
        })), SS.eC(uS.ld, (SS => {
          let {
            id: HS,
            Gg: gS
          } = SS;
          const {
            type: bS,
            params: XS
          } = (0, PH.g)(gS), xS = {
            ...XS
          };
          for (const tS of PH.e) tS in xS && xS[tS] && (xS[tS] = (0, uS.A)(xS[tS]));
          GH.c.queueQTE(HS, bS, xS).getResult().then((SS => {
            "boolean" === typeof SS && (0, tS.sendColyMessage)(uS.Gi, {
              qteId: HS,
              qteResponse: SS
            })
          }))
        })), SS.eC(uS.$d, (SS => {
          GH.c.cancelQTE(SS)
        })), (0, tS.onGameResetOnce)((() => {
          GH.c.reset()
        })), SS.eC(uS.nd, (SS => {
          let {
            id: HS,
            clientParameters: gS
          } = SS;
          (0, NH.i)(HS, gS)
        })), SS.eC(uS.be, (SS => {
          (0, NH.j)(SS)
        })), SS.eC(uS.vf, (SS => {
          let {
            text: HS,
            id: gS,
            destructive: bS
          } = SS;
          (0, NH.m)(gS, HS, bS, (SS => {
            (0, tS.sendColyMessage)(uS.Vj, {
              Vu: gS,
              iu: SS,
              Wu: 5
            })
          }))
        })), SS.eC(uS.qd, (SS => {
          let {
            info: HS
          } = SS;
          CS.k.cj("overShopInfo", HS, !0)
        })), SS.eC(uS.ic, (SS => {
          let {
            Ab: gS,
            yb: tS
          } = SS;
          this.clientApi.openShop(HS.HA, gS, tS)
        })), SS.eC(uS.fc, (SS => {
          let {
            cX: HS,
            vX: gS,
            EX: tS
          } = SS;
          CS.k.cj("flyingMiddleMessage", {
            content: (0, uS.A)(HS),
            vX: gS,
            EX: tS
          }, !0)
        })), SS.eC(uS.Mf, (SS => {
          const HS = SS === QH.g ? null : {
            message: `Currently loaded as variation: ${SS}`,
            type: "Warning"
          };
          CS.k.cj("showPermanentBottomMessage", HS, !0)
        })), SS.eC(uS.mc, (SS => {
          let {
            messageType: HS,
            data: tS
          } = SS;
          (0, DH.g)(HS) ? (0, DH.c)(HS, tS) : ("freeCamPerms" === HS && gS.client.freeCameraController.setPerms(tS.key, tS.value), gS.client.triggerGameCallback("onReceivedMessageFromServer", HS, tS))
        })), SS.eC(uS.Ob, wH.g)
      }
    }
    class JH {
      constructor(SS, HS, gS, tS) {
        this.gameNameWithVariation = SS, this.qk = gS, this.connectionResume = tS, this.stateReplicationHandler = void 0, this.stateReplicationHandler = new DS.c(HS, this.qk)
      }
      setupStateReplicationHandlers() {
        this.stateReplicationHandler.setup(), (0, tS.onGameResetOnce)((() => {
          this.stateReplicationHandler.dispose()
        }))
      }
      fuS(SS) {
        this.stateReplicationHandler.dispose(), this.stateReplicationHandler = new DS.c(SS, this.qk), this.stateReplicationHandler.setup()
      }
      setupOnMessageListeners(SS, HS) {
        const gS = this.qk,
          tS = SS => {
            this.stateReplicationHandler.setUpIfQueued(SS)
          };
        new CH(gS, this.gameNameWithVariation, this.connectionResume).register(SS), new cS(gS).register(SS), new lS(gS).register(SS), new yS(gS, tS).register(SS), new RS(gS, tS).register(SS), new ZH(gS, HS).register(SS), new XH(gS, tS).register(SS)
      }
    }
    window.addEventListener("beforeunload", (() => {}));
    var OH = gS(39062),
      dH = gS(39068),
      cH = gS(713),
      vH = gS(3083);
    class EH {
      constructor(SS, HS, gS, tS) {
        this.msgHandler = gS, this.listener = tS, this.session = void 0, this.attachedRoom = null, this.detachRoomListeners = null, this.suspended = !1, this.droppedAt = 0, this.session = new OH.e({
          reconnect: SS,
          isLive: () => tS.isLive(),
          onReconnected: SS => {
            this.resumeOnRoom(SS)
          },
          onGaveUp: (SS, HS) => {
            tS.onGaveUp(SS, HS)
          },
          freeze: HS,
          releaseSeat: HS => {
            SS(HS).then((SS => {
              SS.leave(!0)
            }), (SS => {
              console.warn("Couldn't release the held seat of a game left while reconnecting", SS)
            }))
          }
        })
      }
      onInitialInfo(SS, HS) {
        this.session.onInitialInfo(SS, HS)
      }
      isResuming() {
        return this.session.isResuming()
      }
      getDroppedAt() {
        return this.droppedAt
      }
      onResumeInitialInfo(SS, HS) {
        if (this.session.onResuming(), null === SS) {
          try {
            (0, qS.b)().client.itemDropPrediction.reset()
          } catch (gS) {
            console.error("Error dropping the item drop predictions on resuming", gS)
          }
          return tS.offlineInputReplay.discard(), void this.setSuspended(!1)
        }(0, qS.b)().client.itemDropPrediction.onResumeReplayOffered(), tS.offlineInputReplay.replayFrom(SS.Kg, HS)
      }
      onResumed(SS) {
        this.setSuspended(!1), (0, tS.resendBeacons)();
        try {
          SS()
        } catch (HS) {
          console.error("Error completing the resume", HS)
        } finally {
          this.session.onResumed()
        }
      }
      attachRoom(SS) {
        const HS = (0, cH.k)((() => SS.connection.isOpen));
        SS.rC(HS);
        const gS = new dH.d((() => {
          this.session.canHoldSeat() && this.listener.isLive() && (console.warn("The game server went silent, reconnecting"), this.onConnectionDropped(SS, "silent"), SS.leave(!1))
        }));
        SS.onStateChange((() => {
          gS.heard()
        }));
        const tS = HS => {
          HS.persisted || SS.leave(!0)
        };
        window.addEventListener("pagehide", tS), SS.rC(((HS, gS) => {
          if (SS === this.attachedRoom && this.listener.isLive()) return (0, XS.f)(HS) && this.session.canHoldSeat() ? (console.warn(`Connection to the game server dropped with code ${HS}, reconnecting`), this.listener.onDropped(HS, gS), void this.onConnectionDropped(SS, String(HS))) : void this.listener.onRoomLeft(HS, gS)
        })), this.attachedRoom = SS, this.detachRoomListeners = () => {
          HS(), gS.dispose(), window.removeEventListener("pagehide", tS)
        }
      }
      dispose() {
        this.detachRoom(), this.session.leave(), this.setSuspended(!1)
      }
      setSuspended(SS) {
        SS !== this.suspended && (this.suspended = SS, (0, tS.setConnectionSuspended)(SS), (0, qS.b)().client.itemDropPrediction.setSuspended(SS))
      }
      detachRoom() {
        var SS;
        null === (SS = this.detachRoomListeners) || void 0 === SS || SS.call(this), this.detachRoomListeners = null, this.attachedRoom = null
      }
      onConnectionDropped(SS, HS) {
        (0, vH.reportClientError)("disconnect", "Left room", HS), this.isResuming() || (this.droppedAt = Date.now()), this.detachRoom(), tS.offlineInputReplay.onConnectionLost(), this.setSuspended(!0), this.session.onConnectionLost(SS.reconnectionToken)
      }
      resumeOnRoom(SS) {
        if (!this.listener.isLive()) return console.warn("Left the game while reconnecting, leaving the resumed room"), SS.leave(!0), void this.dispose();
        console.log("Reconnected to the game server, waiting for the game to resume"), (0, FS.q)(), tS.offlineInputReplay.onConnectionReplaced(), this.msgHandler.fuS(SS), this.listener.onReconnected(SS), this.attachRoom(SS)
      }
    }
    var LH = gS(3127),
      YH = gS(3133),
      AH = gS(1400),
      yH = gS(1378),
      VH = gS(4794),
      iH = gS(3320),
      WH = gS(1149),
      zH = gS(37738),
      UH = gS(39070),
      pH = gS(9093),
      sH = gS(39076),
      BH = gS(1290),
      MH = gS(36503),
      FH = gS(39083),
      RH = gS(1830),
      TH = gS(2917);

    function oH(SS) {
      var HS, gS;
      if ("object" !== typeof SS || null === SS) return {
        errType: typeof SS
      };
      const tS = SS;
      return {
        errType: null !== (HS = null === (gS = SS.constructor) || void 0 === gS ? void 0 : gS.name) && void 0 !== HS ? HS : "",
        errName: "string" === typeof tS.name ? tS.name : "",
        eventType: "string" === typeof tS.type ? tS.type : "",
        errStack: "string" === typeof tS.stack ? tS.stack.split("\n").slice(1).join(" | ") : ""
      }
    }

    function lH(SS) {
      if ("undefined" !== typeof ProgressEvent && SS instanceof ProgressEvent) return !0;
      if (!(SS instanceof Error)) return !1;
      const HS = SS.code;
      return "ServerError" === SS.name && void 0 === HS || "AbortError" === SS.name || "seat reservation expired." === SS.message || "early_leave" === SS.message
    }(0, jS.m)((SS => {
      (0, vH.reportClientError)("wasm_net", SS)
    }));
    let mH = !0;

    function eH() {
      mH = !1
    }
    class rH {
      constructor(SS) {
        this.gameNameWithVariation = void 0, this.lobbyName = void 0, this.colyClient = void 0, this.userContext = void 0, this.joinedAt = null, this.checkSendPath = () => {}, this.qk = void 0, this.connectionResume = void 0, this.incomingMsgInitialisor = void 0, this.gameNameWithVariation = SS.gameNameWithVariation, this.lobbyName = SS.lobbyName, this.colyClient = SS.colyClient, this.userContext = SS.userContext
      }
      async connectToServer(SS, HS, gS) {
        nS.d.reset(), SS.rY = {
          [SS.HA]: {}
        }, SS.OSS = void 0, (0, FS.q)(), (0, qS.b)().removeAllEntityNames(), (0, qS.b)().setEntityName(SS.HA, this.userContext.getPlayerName()), (0, AH.r)({
          lobbyName: this.lobbyName
        }), console.log("Waiting for clientConnection passed promise to resolve");
        const xS = (0, RH.g)();
        console.log("joining server with game", this.gameNameWithVariation, "lobbyName", this.lobbyName);
        const NS = performance.now();
        gS.aborted || (0, yH.n)("wasm_core_ready", NS);
        const uS = (0, sH.f)(this.userContext, (() => {
          const {
            roomName: tS,
            joinOptions: bS
          } = (0, QS.f)(this.userContext, this.gameNameWithVariation, this.lobbyName, HS, (SS => iH.d.isUsingCustomGameTexturePack(SS)));
          return bS.joinAdHold = xS, bS.renderBackend = (0, TH.b)(SS.Hj), (0, UH.e)((() => this.colyClient.joinOrCreateUntil(gS, tS, bS)), gS)
        }));
        return CS.k.cj("loadingScreenState", "loadingPage:joiningLobby"), await uS.then((HS => {
          if (this.joinedAt = performance.now(), (0, yH.n)("wasm_joined", this.joinedAt), this.qk = SS, xS) {
            const SS = (0, RH.r)((() => {
              HS.send(bS.c), (0, yH.m)()
            }));
            HS.rC(SS), (0, tS.onGameResetOnce)(SS)
          }
          const gS = new GS(HS);
          this.connectionResume = new EH((SS => this.colyClient.reconnect(SS)), (HS => {
            SS.uE(HS)
          }), gS, {
            isLive: () => (0, qS.b)().client.getMsgHandler() === gS,
            onDropped: (SS, HS) => {
              (0, YH.g)(SS) || this.logUnrecognisedConnectionLoss(SS, void 0, {
                site: "drop",
                closeReason: null !== HS && void 0 !== HS ? HS : "",
                sinceJoined: this.sinceJoined()
              })
            },
            onRoomLeft: (SS, HS) => {
              this.onRoomLeft(SS, HS)
            },
            onReconnected: SS => {
              this.incomingMsgInitialisor.fuS(SS), this.checkSendPath = (0, zH.f)(gS, SS, jS.q)
            },
            onGaveUp: (SS, HS) => {
              this.onResumeGaveUp(SS, HS)
            }
          }), this.connectionResume.attachRoom(HS), (0, tS.onGameResetOnce)((() => {
            this.connectionResume.dispose()
          }));
          const XS = gS.send,
            NS = gS.eC,
            uS = gS.agS.send,
            IS = gS.agS.eC,
            fS = gS.uuS;
          this.checkSendPath = (0, zH.f)(gS, HS, jS.q);
          const kS = setInterval((() => {
            XS === gS.send && NS === gS.eC && uS === gS.agS.send && IS === gS.agS.eC && fS === gS.uuS || eH(), this.checkSendPath()
          }), 1e4);
          return (0, tS.onGameResetOnce)((() => {
            clearInterval(kS)
          })), {
            success: !0,
            successDetails: gS
          }
        })).catch((HS => {
          if (gS.aborted && HS === (0, BH.c)(gS)) return {
            success: !1,
            failDetails: {
              reason: "Left the game while it loaded",
              requiresRefresh: !1,
              canReconnect: !1
            }
          };
          if (HS instanceof MH.e) return console.warn("Seat request timed out", this.lobbyName, this.gameNameWithVariation), {
            success: !1,
            failDetails: {
              reason: HS.message,
              requiresRefresh: !1,
              canReconnect: !1,
              gameServerUnreachable: "timedOut",
              joinFailure: (0, FH.d)(HS, HS.leg)
            }
          };
          SS.hj(`Failed to connect to bloxd room, check your internet connection. lobbyName: ${this.lobbyName}, gameNameWithVariation: ${this.gameNameWithVariation} code: ${HS.code}\n`, HS);
          const tS = HS.code;
          return tS === XS.c.serverUpdating.code ? (this.goToUpdateWaiting(), {
            success: !1,
            failDetails: {
              reason: XS.c.serverUpdating.text,
              requiresRefresh: !1,
              canReconnect: !0,
              goesToUpdateWaiting: !0
            }
          }) : {
            success: !1,
            failDetails: {
              ...this.onConnectionToServerLost(tS, HS.message, {
                site: "join",
                sinceJoinStart: (0, YH.b)(performance.now() - NS),
                ...oH(HS)
              }, lH(HS)),
              rematch: (0, UH.c)(HS),
              gameRefused: (0, pH.e)(HS),
              joinFailure: (0, FH.d)(HS, this.colyClient.legReached())
            }
          }
        }))
      }
      setupServerListeners(SS, HS, gS) {
        CS.k.cj("loadingScreenState", "loadingPage:loadingPlayerInfo"), this.incomingMsgInitialisor = new JH(this.gameNameWithVariation, HS.agS, SS, this.connectionResume), this.incomingMsgInitialisor.setupStateReplicationHandlers();
        const bS = HS.juS();
        this.incomingMsgInitialisor.setupOnMessageListeners(bS, gS), (0, tS.onConnectionToServerReady)(bS, HS), bS.finishRegistration()
      }
      dispose() {
        this.connectionResume.dispose()
      }
      onResumeGaveUp(SS, HS) {
        (0, WH.Zj)(new Error("Reconnect failed"), {
          ...(0, LH.l)(HS),
          game: this.gameNameWithVariation
        }), (0, vH.reportClientError)("disconnect", "Reconnect failed", HS.reason), (0, qS.b)().client.leaveGameUnwanted({
          reason: {
            translationKey: "general:lostConnection"
          },
          canReconnect: !SS,
          canPlayAgain: SS,
          requiresRefresh: !1,
          automaticallyReconnect: !1
        }), (0, aH.navigatePreserveSearch)("/")
      }
      sinceJoined() {
        return null === this.joinedAt ? "" : (0, YH.b)(performance.now() - this.joinedAt)
      }
      onRoomLeft(SS, HS) {
        var gS;
        if (SS === XS.c.gameOrPluginKick.code) return;
        if (console.log(`Left room with code ${SS}`), SS === XS.c.serverUpdating.code) return (0, vH.reportClientError)("disconnect", "Left room", "serverUpdating"), (0, qS.b)().client.leaveGame(this.getUpdateWaitingUrl()), void this.goToUpdateWaiting();
        this.qk.hj(`Kicked from server with code ${SS}`, new Error);
        const tS = Object.keys(XS.c).find((HS => XS.c[HS].code === SS));
        (0, vH.reportClientError)("disconnect", "Left room", null !== tS && void 0 !== tS ? tS : String(SS));
        const bS = this.onConnectionToServerLost(SS, void 0, {
          site: "leave",
          closeReason: null !== HS && void 0 !== HS ? HS : "",
          sinceJoined: this.sinceJoined()
        });
        (0, qS.b)().client.leaveGameUnwanted({
          reason: `You have disconnected from the server.\n${bS.reason}`,
          canReconnect: bS.canReconnect,
          requiresRefresh: bS.requiresRefresh,
          automaticallyReconnect: null !== (gS = bS.automaticallyReconnect) && void 0 !== gS && gS
        }), (0, aH.navigatePreserveSearch)("/")
      }
      getUpdateWaitingUrl() {
        return (0, VH.E)(this.gameNameWithVariation, this.lobbyName)
      }
      goToUpdateWaiting() {
        (0, aH.navigatePreserveSearch)(this.getUpdateWaitingUrl())
      }
      onConnectionToServerLost(SS, HS, gS) {
        var tS;
        let bS = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        if (null !== (tS = HS) && void 0 !== tS && tS.endsWith(XS.g) && (this.userContext.invalidateTrafficCode(), HS = HS.replace(XS.g, "")), SS === XS.c.outdatedVersion.code) return console.error("Outdated client with version ", xS.b, ", refreshing page"), (0, PS.reloadBloxd)(), {
          reason: "Outdated client",
          requiresRefresh: !0,
          canReconnect: !1
        };
        if (SS === XS.c.loadRecaptchaError.code) return console.error("Load recaptcha error, refreshing page"), (0, PS.reloadBloxd)(), {
          reason: "Failed to load recaptcha",
          requiresRefresh: !0,
          canReconnect: !1
        };
        for (const xS in XS.c) {
          const {
            code: gS,
            text: tS,
            canReconnect: bS
          } = XS.c[xS];
          if (gS === SS) {
            console.log("matched known error", SS, "leaving game");
            return {
              reason: "" !== tS ? tS : HS || `Code: ${SS}`,
              requiresRefresh: !1,
              canReconnect: bS,
              automaticallyReconnect: gS === XS.c.customGameUpdated.code || gS === XS.c.duplicateLobbyNameError.code
            }
          }
        }
        return console.log("Didn't match known error, leaving game"), (0, YH.c)(SS) || bS ? console.warn("Connection lost", SS, HS) : this.logUnrecognisedConnectionLoss(SS, HS, gS), {
          reason: `Either your internet isn't working or this is a bug.\nCode: ${SS}`,
          requiresRefresh: !1,
          canReconnect: !1,
          gameServerUnreachable: bS ? "failed" : void 0
        }
      }
      logUnrecognisedConnectionLoss(SS, HS, gS) {
        (0, WH.Zj)(new Error("Unrecognised connection loss"), {
          code: String(SS),
          cause: null !== HS && void 0 !== HS ? HS : "",
          ...gS,
          game: this.gameNameWithVariation,
          ...(0, YH.i)()
        })
      }
    }
  },
  38991: (SS, HS, gS) => {
    gS.d(HS, {
      c: () => Rg,
      d: () => rg
    });
    var tS, bS, XS, xS, NS, qS, uS, IS, fS, kS, aS, KS, jS, GS, CS, nS, PS, QS, DS, wS, hS, ZS, JS, OS, dS, cS, vS, ES, LS, YS, AS, yS, VS, iS, WS, zS, US, pS, sS, BS, MS, FS, RS, TS, oS, lS, mS, eS, rS, SH, HH, gH, tH, bH, XH, xH, NH, qH, uH, IH, fH, kH, aH, KH, jH, GH, CH, nH, PH, QH, DH, wH, hH, ZH, JH, OH, dH, cH, vH, EH, LH, YH, AH, yH, VH, iH, WH, zH, UH, pH, sH, BH, MH, FH, RH, TH, oH, lH, mH, eH = gS(31),
      rH = gS(37176),
      Sg = gS(39006),
      Hg = gS(39009),
      gg = gS(9273),
      tg = gS(672),
      bg = gS(665),
      Xg = gS(36820);
    let xg = (tS = (0, gg.type)("number"), bS = (0, gg.type)("number"), XS = (0, gg.type)("number"), xS = (0, gg.type)("number"), NS = (0, gg.type)("number"), qS = (0, gg.type)("number"), uS = (0, gg.type)("string"), IS = class extends gg.Schema {
        constructor() {
          super(...arguments), (0, Sg.b)(this, "id", fS, this), (0, Sg.b)(this, "amount", kS, this), (0, Sg.b)(this, "x", aS, this), (0, Sg.b)(this, "y", KS, this), (0, Sg.b)(this, "z", jS, this), (0, Sg.b)(this, "size", GS, this), (0, Sg.b)(this, "attributes", CS, this)
        }
      }, fS = (0, Hg.c)(IS.prototype, "id", [tS], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return 0
        }
      }), kS = (0, Hg.c)(IS.prototype, "amount", [bS], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return 0
        }
      }), aS = (0, Hg.c)(IS.prototype, "x", [XS], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return 0
        }
      }), KS = (0, Hg.c)(IS.prototype, "y", [xS], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return 0
        }
      }), jS = (0, Hg.c)(IS.prototype, "z", [NS], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return 0
        }
      }), GS = (0, Hg.c)(IS.prototype, "size", [qS], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return 1
        }
      }), CS = (0, Hg.c)(IS.prototype, "attributes", [uS], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return "{}"
        }
      }), IS),
      Ng = (nS = (0, gg.type)("string"), PS = (0, gg.type)("string"), QS = class extends gg.Schema {
        constructor() {
          super(...arguments), (0, Sg.b)(this, "itemName", DS, this), (0, Sg.b)(this, "enchantmentTier", wS, this)
        }
      }, DS = (0, Hg.c)(QS.prototype, "itemName", [nS], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: null
      }), wS = (0, Hg.c)(QS.prototype, "enchantmentTier", [PS], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: null
      }), QS),
      qg = (hS = (0, gg.type)("string"), ZS = (0, gg.type)("string"), JS = (0, gg.type)("number"), OS = (0, gg.type)("number"), dS = (0, gg.type)("number"), cS = (0, gg.type)("float32"), vS = (0, gg.type)("float32"), ES = (0, gg.type)("float32"), LS = (0, gg.type)("string"), YS = (0, gg.type)(["number"]), AS = (0, gg.type)("boolean"), yS = class extends gg.Schema {
        constructor() {
          super(...arguments), (0, Sg.b)(this, "type", VS, this), (0, Sg.b)(this, "name", iS, this), (0, Sg.b)(this, "x", WS, this), (0, Sg.b)(this, "y", zS, this), (0, Sg.b)(this, "z", US, this), (0, Sg.b)(this, "xRotation", pS, this), (0, Sg.b)(this, "yRotation", sS, this), (0, Sg.b)(this, "zRotation", BS, this), (0, Sg.b)(this, "followingEId", MS, this), (0, Sg.b)(this, "followingOffset", FS, this), (0, Sg.b)(this, "shouldMatchFollowingEntityRotation", RS, this)
        }
      }, VS = (0, Hg.c)(yS.prototype, "type", [hS], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: null
      }), iS = (0, Hg.c)(yS.prototype, "name", [ZS], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return ""
        }
      }), WS = (0, Hg.c)(yS.prototype, "x", [JS], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return 0
        }
      }), zS = (0, Hg.c)(yS.prototype, "y", [OS], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return 0
        }
      }), US = (0, Hg.c)(yS.prototype, "z", [dS], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return 0
        }
      }), pS = (0, Hg.c)(yS.prototype, "xRotation", [cS], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return 0
        }
      }), sS = (0, Hg.c)(yS.prototype, "yRotation", [vS], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return 0
        }
      }), BS = (0, Hg.c)(yS.prototype, "zRotation", [ES], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return 0
        }
      }), MS = (0, Hg.c)(yS.prototype, "followingEId", [LS], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: null
      }), FS = (0, Hg.c)(yS.prototype, "followingOffset", [YS], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return new gg.ArraySchema(0, 0, 0)
        }
      }), RS = (0, Hg.c)(yS.prototype, "shouldMatchFollowingEntityRotation", [AS], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return !0
        }
      }), yS),
      ug = (TS = (0, gg.type)("float32"), oS = (0, gg.type)("float32"), lS = (0, gg.type)("boolean"), mS = (0, gg.type)("boolean"), eS = (0, gg.type)("float32"), rS = (0, gg.type)("boolean"), SH = (0, gg.type)("string"), HH = (0, gg.type)("string"), gH = (0, gg.type)("string"), tH = (0, gg.type)("string"), bH = (0, gg.type)(["number"]), XH = (0, gg.type)("number"), xH = (0, gg.type)({
        map: Ng
      }), NH = class extends qg {
        constructor() {
          super(...arguments), (0, Sg.b)(this, "scale", qH, this), (0, Sg.b)(this, "speed", uH, this), (0, Sg.b)(this, "jumping", IH, this), (0, Sg.b)(this, "crouching", fH, this), (0, Sg.b)(this, "cameraPitch", kH, this), (0, Sg.b)(this, "armSwinging", aH, this), (0, Sg.b)(this, "heldItemName", KH, this), (0, Sg.b)(this, "heldItemEnchantmentTier", jH, this), (0, Sg.b)(this, "pose", GH, this), (0, Sg.b)(this, "ridingVehicleEId", CH, this), (0, Sg.b)(this, "meshOffset", nH, this), (0, Sg.b)(this, "baseRenderHeading", PH, this), (0, Sg.b)(this, "armour", QH, this)
        }
      }, qH = (0, Hg.c)(NH.prototype, "scale", [TS], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return 1
        }
      }), uH = (0, Hg.c)(NH.prototype, "speed", [oS], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return 0
        }
      }), IH = (0, Hg.c)(NH.prototype, "jumping", [lS], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return !1
        }
      }), fH = (0, Hg.c)(NH.prototype, "crouching", [mS], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return !1
        }
      }), kH = (0, Hg.c)(NH.prototype, "cameraPitch", [eS], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return 0
        }
      }), aH = (0, Hg.c)(NH.prototype, "armSwinging", [rS], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return !1
        }
      }), KH = (0, Hg.c)(NH.prototype, "heldItemName", [SH], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: null
      }), jH = (0, Hg.c)(NH.prototype, "heldItemEnchantmentTier", [HH], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: null
      }), GH = (0, Hg.c)(NH.prototype, "pose", [gH], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return "standing"
        }
      }), CH = (0, Hg.c)(NH.prototype, "ridingVehicleEId", [tH], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return null
        }
      }), nH = (0, Hg.c)(NH.prototype, "meshOffset", [bH], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return new gg.ArraySchema(0, 0, 0)
        }
      }), PH = (0, Hg.c)(NH.prototype, "baseRenderHeading", [XH], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return 0
        }
      }), QH = (0, Hg.c)(NH.prototype, "armour", [xH], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return new gg.MapSchema
        }
      }), NH),
      Ig = (DH = (0, gg.type)("string"), wH = (0, gg.type)("string"), hH = (0, gg.type)("string"), ZH = (0, gg.type)("uint8"), JH = class extends ug {
        constructor() {
          super(...arguments), (0, Sg.b)(this, "variation", OH, this), (0, Sg.b)(this, "ownerDbId", dH, this), (0, Sg.b)(this, "metaInfo", cH, this), (0, Sg.b)(this, "aiState", vH, this)
        }
      }, OH = (0, Hg.c)(JH.prototype, "variation", [DH], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return "default"
        }
      }), dH = (0, Hg.c)(JH.prototype, "ownerDbId", [wH], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return null
        }
      }), cH = (0, Hg.c)(JH.prototype, "metaInfo", [hH], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return ""
        }
      }), vH = (0, Hg.c)(JH.prototype, "aiState", [ZH], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return 0
        }
      }), JH);
    EH = (0, gg.type)("string"), LH = (0, gg.type)("string"), YH = (0, gg.type)("string"), AH = (0, gg.type)("string"), yH = class extends qg {
      constructor() {
        super(...arguments), (0, Sg.b)(this, "meshKind", VH, this), (0, Sg.b)(this, "meshOpts", iH, this), (0, Sg.b)(this, "pose", WH, this), (0, Sg.b)(this, "leaderboardTop", zH, this)
      }
    }, VH = (0, Hg.c)(yH.prototype, "meshKind", [EH], {
      configurable: !0,
      enumerable: !0,
      writable: !0,
      initializer: null
    }), iH = (0, Hg.c)(yH.prototype, "meshOpts", [LH], {
      configurable: !0,
      enumerable: !0,
      writable: !0,
      initializer: null
    }), WH = (0, Hg.c)(yH.prototype, "pose", [YH], {
      configurable: !0,
      enumerable: !0,
      writable: !0,
      initializer: null
    }), zH = (0, Hg.c)(yH.prototype, "leaderboardTop", [AH], {
      configurable: !0,
      enumerable: !0,
      writable: !0,
      initializer: null
    });

    function fg(SS) {
      return Object.keys(gg.Metadata.getFields(SS))
    }
    const kg = fg(Ig);
    for (const St of tg.u)
      if (!kg.includes(St)) throw new Error(`Mob Schema is missing a networked property: "${St}"`);
    const ag = fg((UH = (0, gg.type)("string"), pH = (0, gg.type)("float32"), sH = (0, gg.type)("float32"), BH = (0, gg.type)("float32"), MH = (0, gg.type)("float32"), FH = class extends qg {
      constructor() {
        super(...arguments), (0, Sg.b)(this, "soundName", RH, this), (0, Sg.b)(this, "volume", TH, this), (0, Sg.b)(this, "refDistance", oH, this), (0, Sg.b)(this, "maxHearDist", lH, this), (0, Sg.b)(this, "rate", mH, this)
      }
    }, RH = (0, Hg.c)(FH.prototype, "soundName", [UH], {
      configurable: !0,
      enumerable: !0,
      writable: !0,
      initializer: function() {
        return ""
      }
    }), TH = (0, Hg.c)(FH.prototype, "volume", [pH], {
      configurable: !0,
      enumerable: !0,
      writable: !0,
      initializer: function() {
        return 1
      }
    }), oH = (0, Hg.c)(FH.prototype, "refDistance", [sH], {
      configurable: !0,
      enumerable: !0,
      writable: !0,
      initializer: function() {
        return Xg.f
      }
    }), lH = (0, Hg.c)(FH.prototype, "maxHearDist", [BH], {
      configurable: !0,
      enumerable: !0,
      writable: !0,
      initializer: function() {
        return Xg.b
      }
    }), mH = (0, Hg.c)(FH.prototype, "rate", [MH], {
      configurable: !0,
      enumerable: !0,
      writable: !0,
      initializer: function() {
        return 1
      }
    }), FH));
    for (const St of bg.i)
      if (!ag.includes(St)) throw new Error(`AudioEntity Schema is missing a replicated property: "${St}"`);
    var Kg = gS(38476),
      jg = gS(1327),
      Gg = gS(680),
      Cg = gS(38239),
      ng = gS(4356),
      Pg = gS(387),
      Qg = gS(37294),
      Dg = gS(38141),
      wg = gS(2340),
      hg = gS(37261),
      Zg = gS(38496),
      Jg = gS(37417),
      Og = gS(402),
      dg = gS.n(Og),
      cg = gS(37963),
      vg = gS(37101),
      Eg = gS(38110),
      Lg = gS(38151);
    class Yg {
      constructor(SS, HS) {
        this.bloxd = SS, this.eId = HS, this.qk = void 0, this.colyseusEntity = void 0, this.canSeeSub = void 0, this.canAttackSub = void 0, this.interactableSub = void 0, this.overlayColourSub = void 0, this.opacitySub = void 0, this.zIndexSub = void 0, this.multilineTextBoxSub = void 0, this.previousHidingMeshManagerState = void 0, this.meshKind = void 0, this.meshOpts = void 0, this.leaderboardTop = void 0, this.meshRebuildQueued = !1, this.nK = !1, this.qk = SS.qk
      }
      initClient(SS) {
        var HS, gS, tS;
        this.colyseusEntity = SS, this.meshKind = SS.meshKind, this.meshOpts = SS.meshOpts, this.leaderboardTop = SS.leaderboardTop, this.qk.FQ.add([SS.x, SS.y, SS.z], 1, 1, null, null, !1, !1, this.eId), this.qk.FQ.VY(this.eId, "smoothToServerPos");
        const bS = "Person" === this.meshKind;
        this.qk.FQ.VY(this.eId, "meshRotation", {
          isServerControlled: !0,
          ...bS ? {
            defaultRotationsPerSecond: .5
          } : {},
          childrenNodeParams: bS ? [{
            nodeName: "HeadMesh",
            softTolerance: Zg.l,
            hardTolerance: null
          }] : []
        }), this.updateHidingMeshMgr(), this.canSeeSub = eH.k.subscribe(`otherEntitySettings|${this.eId}|canSee`, (SS => {
          this.updateHidingMeshMgr()
        }));
        const XS = () => {
          const SS = this.qk.FQ.tHS(this.eId);
          if (!SS) return;
          const HS = (0, Jg.l)(this.eId);
          if ("number" === typeof SS.kY) {
            var gS, tS, bS, XS;
            const xS = null === (gS = (0, wg.j)("head", null === (bS = this.getSpec()) || void 0 === bS || null === (XS = bS.opts.textures) || void 0 === XS ? void 0 : XS.head)) || void 0 === gS || null === (tS = gS.personModel) || void 0 === tS ? void 0 : tS.fullBody;
            return this.qk.Hj.fY.setPickable(SS.kY, HS && !xS), void(0, vg.updatePersonAttachmentPickability)(this.qk, this.eId, HS)
          }
          const xS = SS.mesh;
          if (xS)
            for (const NS of [xS, ...xS.getChildMeshes(!1)]) "Fj" in NS && !NS.name.startsWith("Cape|") && (NS.Fj = HS)
        };
        this.canAttackSub = eH.k.subscribe(`otherEntitySettings|${this.eId}|canAttack`, XS), this.interactableSub = eH.k.subscribe(`otherEntitySettings|${this.eId}|interactable`, XS), this.overlayColourSub = eH.k.subscribe(`otherEntitySettingsClientifiedEId|${this.eId}|overlayColour`, (SS => {
          this.updateOverlayColour(SS)
        })), this.opacitySub = eH.k.subscribe(`otherEntitySettingsClientifiedEId|${this.eId}|opacity`, (SS => {
          this.updateOpacity(SS)
        })), this.zIndexSub = eH.k.subscribe(`otherEntitySettingsClientifiedEId|${this.eId}|zIndex`, (SS => {
          this.updateZIndex(SS)
        }));
        const xS = this.qk.rY[this.qk.HA][this.eId];
        this.updateOverlayColour(null !== (HS = null === xS || void 0 === xS ? void 0 : xS.overlayColour) && void 0 !== HS ? HS : null), this.updateOpacity(null !== (gS = null === xS || void 0 === xS ? void 0 : xS.opacity) && void 0 !== gS ? gS : 1), this.updateZIndex(null !== (tS = null === xS || void 0 === xS ? void 0 : xS.zIndex) && void 0 !== tS ? tS : 0), this.multilineTextBoxSub = (0, hg.u)(this.qk, this.eId)
      }
      onChangeClient(SS, HS) {
        if ("xRotation" === SS || "yRotation" === SS || "zRotation" === SS)(0, hg.x)(this.qk, this.eId, SS, HS);
        else if ("pose" === SS) {
          const SS = this.qk.FQ.uHS(this.eId);
          SS && (SS.pose = HS || "standing")
        } else "meshKind" === SS || "meshOpts" === SS ? (this[SS] = HS, this.queueMeshRebuild()) : "name" === SS && "" !== HS ? this.updateHidingMeshMgr() : "leaderboardTop" === SS && (this.leaderboardTop = HS, eH.k.cj(`leaderboardTop|${this.eId}`, HS))
      }
      disposeClient() {
        this.nK = !0, this.qk.FQ.deleteEntity(this.eId), eH.k.unsubscribe(this.canSeeSub), eH.k.unsubscribe(this.canAttackSub), eH.k.unsubscribe(this.interactableSub), eH.k.unsubscribe(this.overlayColourSub), eH.k.unsubscribe(this.opacitySub), eH.k.unsubscribe(this.zIndexSub), eH.k.unsubscribe(this.multilineTextBoxSub)
      }
      getCurrentHidingMeshMgrState() {
        var SS, HS;
        return {
          canSee: null !== (SS = null === (HS = this.qk.rY[this.qk.HA][this.eId]) || void 0 === HS ? void 0 : HS.canSee) && void 0 !== SS && SS,
          name: this.colyseusEntity.name,
          meshKind: this.meshKind,
          meshOpts: this.meshOpts
        }
      }
      updateHidingMeshMgr() {
        var SS, HS, gS;
        const {
          qk: tS
        } = this, {
          FQ: bS
        } = tS, XS = this.getCurrentHidingMeshMgrState();
        if ((0, Pg.Wd)(this.previousHidingMeshManagerState, XS)) return;
        if (this.previousHidingMeshManagerState = XS, bS.pY(this.eId, "hidingMeshManager"), null === (SS = tS.rY[tS.HA][this.eId]) || void 0 === SS || !SS.canSee) return;
        const xS = this.getSpec();
        if (!xS) return;
        const {
          type: NS,
          opts: qS
        } = xS;
        "Person" === NS && (qS.textures = (0, wg.o)(qS.textures)), qS.eId = this.eId, bS.VY(this.eId, "hidingMeshManager", {
          addMeshComponent: () => {
            var SS, HS, gS;
            "Leaderboard" === NS && (qS.leaderboardTop = this.leaderboardTop);
            const XS = this.bloxd.client.meshCreator.getEntityMesh(NS, qS, (SS => {
              var HS, gS;
              if ("number" === typeof SS) {
                var bS, XS, xS;
                const HS = tS.Hj.fY;
                HS.setEntityId(SS, this.eId);
                const gS = "Person" === NS && (null === (bS = (0, wg.j)("head", null === (xS = qS.textures) || void 0 === xS ? void 0 : xS.head)) || void 0 === bS || null === (XS = bS.personModel) || void 0 === XS ? void 0 : XS.fullBody);
                return void HS.setPickable(SS, (0, Jg.l)(this.eId) && !gS)
              }
              const uS = SS;
              for (const NS of [uS, ...uS.getChildMeshes(!1)]) void 0 === NS.Fj || NS.name.startsWith("Cape|") || (NS.Fj = (0, Jg.l)(this.eId), NS.metadata ??= new tS.Hj.Rj, NS.metadata.eId = this.eId);
              this.updateOpacity(null !== (HS = null === (gS = tS.rY[tS.HA][this.eId]) || void 0 === gS ? void 0 : gS.opacity) && void 0 !== HS ? HS : 1)
            }));
            if (!XS) return;
            const {
              kY: xS,
              mesh: uS,
              meshOffset: IS,
              nameYOffset: fS,
              modelLoaded: kS
            } = XS;
            null === kS || void 0 === kS || kS.then((() => {
              var SS;
              (null === (SS = bS.tHS(this.eId)) || void 0 === SS ? void 0 : SS.mesh) === uS && (this.previousHidingMeshManagerState = null, this.updateHidingMeshMgr())
            }));
            const aS = null === xS ? null : tS.Hj.fY.TgS(xS, 0);
            if (bS.VY(this.eId, bS.names.mesh, {
                kY: xS,
                ngS: aS,
                mesh: uS,
                UxS: !1,
                QgS: "Leaderboard" !== NS,
                offset: IS.slice(),
                zxS: "ParticleEmitter" === NS && qS.followTargetMeshOffset ? SS => {
                  var HS;
                  dg().copy(SS, IS);
                  const gS = null === (HS = bS.THS(this.eId)) || void 0 === HS ? void 0 : HS.fK,
                    tS = void 0 === gS ? null : bS.uHS(gS);
                  if (tS) {
                    var XS, xS;
                    const HS = this.bloxd.getEntityHeading(null !== (XS = tS.ridingVehicleEId) && void 0 !== XS ? XS : gS, !0),
                      bS = Math.sin(HS),
                      NS = Math.cos(HS);
                    SS[0] += tS.meshOffset[0] * NS + tS.meshOffset[2] * bS, SS[1] += tS.meshOffset[1], SS[2] += tS.meshOffset[2] * NS - tS.meshOffset[0] * bS;
                    const qS = null !== (xS = tS.ridingVehicleEId) && void 0 !== xS ? xS : null;
                    null !== qS && (0, Lg.e)(this.qk, qS, SS)
                  }
                } : null
              }), "Person" === NS) {
              var KS, jS, GS, CS;
              bS.VY(this.eId, bS.names.meshAttachments, {
                personFullBody: null !== (KS = null === (jS = (0, wg.j)("head", null === (CS = qS.textures) || void 0 === CS ? void 0 : CS.head)) || void 0 === jS || null === (GS = jS.personModel) || void 0 === GS ? void 0 : GS.fullBody) && void 0 !== KS && KS
              });
              for (const SS of jg.r) {
                var nS, PS, QS;
                const HS = null === (nS = qS.textures) || void 0 === nS ? void 0 : nS[SS];
                HS && null !== (PS = (0, wg.j)(SS, HS)) && void 0 !== PS && null !== (QS = PS.attachments) && void 0 !== QS && QS.length && Dg.b.Player.meshApi.updatePlayerCosmetic(this.eId, xS, SS, HS)
              }
              bS.VY(this.eId, bS.names.moveState), bS.VY(this.eId, "updateWalkingState", {
                kY: xS,
                ngS: aS,
                walkingLegSwingDuration: Zg.t
              }), bS.VY(this.eId, "humanoidMesh", {
                kY: xS,
                ngS: aS,
                heldItemPositionParams: {},
                maxWalkingAngleOverride: null
              }), bS.VY(this.eId, "animator", {
                kY: xS,
                ngS: aS,
                modelLifeformType: "Player"
              }), Eg.g.hasAnimation("Person") && bS.VY(this.eId, "rigAnimation", {
                target: "Person",
                kY: xS
              }), bS.uHS(this.eId).pose = this.colyseusEntity.pose || "standing"
            } else if ("BloxdBlock" === NS && null !== xS) {
              bS.VY(this.eId, "animator", {
                kY: xS,
                ngS: aS,
                modelLifeformType: null
              });
              const SS = (0, Cg.z)(qS.blockName);
              null !== SS && bS.VY(this.eId, "rigAnimation", {
                target: SS,
                kY: xS
              })
            }
            bS.qNS(this.eId, "entityName", {
              name: this.colyseusEntity.name,
              nameYOffset: fS
            }), this.bloxd.setEntityName(this.eId, this.colyseusEntity.name), !0 === qS.autoRotate && (bS.pY(this.eId, "meshRotation"), bS.VY(this.eId, "autoRotate"));
            const {
              lineToEId: DS
            } = qS;
            (0, Gg.K)(DS) || bS.VY(this.eId, "lineToEntity", {
              lineToEId: DS
            });
            const wS = tS.rY[tS.HA][this.eId];
            this.updateOverlayColour(null !== (SS = null === wS || void 0 === wS ? void 0 : wS.overlayColour) && void 0 !== SS ? SS : null), this.updateOpacity(null !== (HS = null === wS || void 0 === wS ? void 0 : wS.opacity) && void 0 !== HS ? HS : 1), this.updateZIndex(null !== (gS = null === wS || void 0 === wS ? void 0 : wS.zIndex) && void 0 !== gS ? gS : 0)
          },
          removeMeshComponent: () => {
            "Person" !== NS && "BloxdBlock" !== NS || bS.pY(this.eId, "rigAnimation"), bS.pY(this.eId, bS.names.mesh), bS.ZSS(this.eId, bS.names.meshAttachments) && bS.pY(this.eId, bS.names.meshAttachments), bS.pY(this.eId, "entityName"), bS.pY(this.eId, "autoRotate"), bS.pY(this.eId, "lineToEntity"), "Person" === NS ? (bS.pY(this.eId, bS.names.moveState), bS.pY(this.eId, "updateWalkingState"), bS.pY(this.eId, "humanoidMesh"), bS.pY(this.eId, "animator")) : "BloxdBlock" === NS && bS.pY(this.eId, "animator")
          },
          hideDist: null !== (HS = qS.hideDist) && void 0 !== HS ? HS : 80,
          movingHideDist: null !== (gS = qS.hideDist) && void 0 !== gS ? gS : 120,
          displayOutsideLoadedChunk: qS.hideDist > 100,
          immediatelyUpdate: !0,
          Kx: "BloxdBlock" === NS ? qS.blockName : NS
        })
      }
      queueMeshRebuild() {
        this.meshRebuildQueued || (this.meshRebuildQueued = !0, queueMicrotask((() => {
          this.meshRebuildQueued = !1, this.nK || this.updateHidingMeshMgr()
        })))
      }
      getSpec() {
        return (0, ng.k)({
          meshKind: this.meshKind,
          meshOpts: this.meshOpts
        })
      }
      updateOverlayColour(SS) {
        var HS, gS;
        if ("Person" !== this.meshKind) return;
        let tS = new Qg.b(0, 0, 0, 0);
        if (null !== SS) {
          const HS = (0, Pg.M)(SS);
          tS = new Qg.b(HS[0] / 255, HS[1] / 255, HS[2] / 255, .5)
        }
        const bS = null !== (HS = null === (gS = this.qk.FQ.tHS(this.eId)) || void 0 === gS ? void 0 : gS.kY) && void 0 !== HS ? HS : null;
        null !== bS && Dg.b.Player.meshApi.updateMeshOverlayColour(bS, tS)
      }
      updateZIndex(SS) {
        var HS;
        if ("Person" !== this.meshKind) return;
        const gS = null === (HS = this.qk.FQ.tHS(this.eId)) || void 0 === HS ? void 0 : HS.kY;
        "number" === typeof gS && this.qk.Hj.fY.setRenderingGroupId(gS, SS)
      }
      updateOpacity(SS) {
        const HS = this.qk.FQ.tHS(this.eId);
        HS && ("number" !== typeof HS.kY ? HS.mesh && "ParticleEmitter" !== this.meshKind && (0, cg.f)(HS.mesh, SS) : Dg.b.Player.meshApi.updateMeshOpacity(HS.kY, SS))
      }
    }
    var Ag = gS(39e3);
    class yg {
      constructor(SS, HS) {
        this.eId = HS, this.qk = void 0, this.schema = void 0, this.qk = SS.qk
      }
      initClient(SS) {
        this.schema = SS, this.qk.FQ.add([SS.x, SS.y, SS.z], .1, .1, null, null, !1, !1, this.eId), this.qk.FQ.VY(this.eId, "smoothToServerPos"), Ag.e.add(this.eId, this.copyOpts())
      }
      onChangeClient(SS) {
        bg.i.includes(SS) && Ag.e.update(this.eId, this.copyOpts())
      }
      disposeClient() {
        Ag.e.remove(this.eId), this.qk.FQ.deleteEntity(this.eId)
      }
      copyOpts() {
        const {
          soundName: SS,
          volume: HS,
          refDistance: gS,
          maxHearDist: tS,
          rate: bS
        } = this.schema;
        return {
          soundName: SS,
          volume: HS,
          refDistance: gS,
          maxHearDist: tS,
          rate: bS
        }
      }
    }
    var Vg = gS(3811),
      ig = gS(36785),
      Wg = gS(6672),
      zg = gS(37806),
      Ug = gS(2910),
      pg = gS(38184),
      sg = gS(9233),
      Bg = gS(38510),
      Mg = gS(37774),
      Fg = gS(3083);
    class Rg {
      constructor(SS, HS) {
        let gS = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 4,
          tS = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : () => performance.now();
        this.agS = SS, this.qk = HS, this.setupBudgetMs = gS, this.now = tS, this.createStateCallbacks = void 0, this.roomStateCallbacks = void 0, this.allItems = {}, this.detachers = new Map, this.deferredSetups = new Map, this.queuedSetups = new Map, this.promotedSetups = new Set, this.setupBudgetLeftMs = void 0, this.lastRefillMs = void 0, this.roomState = void 0, this.nK = !1, this.onFrame = () => {
          this.setUpQueuedEntities(!0)
        }, this.sC = () => {
          this.setUpQueuedEntities(this.now() - this.lastRefillMs > 100)
        }, this.setUpPromoted = () => {
          for (const SS of this.promotedSetups) {
            this.promotedSetups.delete(SS);
            const HS = this.queuedSetups.get(SS);
            HS && (this.queuedSetups.delete(SS), this.timedSetup(HS, SS))
          }
        }, this.createStateCallbacks = (0, sg.getStateCallbacks)(SS), this.roomStateCallbacks = this.createStateCallbacks(SS.state), this.roomState = SS.state, this.setupBudgetLeftMs = gS, this.lastRefillMs = tS()
      }
      setup() {
        this.setupEntityHandlers(), this.setupItemHandlers(), this.agS.onStateChange(this.setUpPromoted), this.qk.on("beforeInputs", this.onFrame), this.qk.on("mf", this.sC)
      }
      setUpQueuedEntities(SS) {
        var HS;
        if ((null === (HS = (0, Ug.b)().client.getMsgHandler()) || void 0 === HS ? void 0 : HS.agS) !== this.agS) return this.qk.off("beforeInputs", this.onFrame), this.qk.off("mf", this.sC), this.queuedSetups.clear(), void this.promotedSetups.clear();
        if (SS && (this.setupBudgetLeftMs = this.setupBudgetMs, this.lastRefillMs = this.now()), this.setUpPromoted(), 0 !== this.queuedSetups.size)
          for (dg().copy(Tg, this.qk.FQ.lC(this.qk.HA)); this.setupBudgetLeftMs > 0;) {
            const SS = this.nearestQueued(Tg);
            if (null === SS) return;
            this.setUpIfQueued(SS), this.setUpPromoted()
          }
      }
      nearestQueued(SS) {
        let HS = null,
          gS = 1 / 0;
        return this.queuedSetups.forEach(((tS, bS) => {
          const XS = function(SS, HS) {
            return (HS.x - SS[0]) ** 2 + (HS.y - SS[1]) ** 2 + (HS.z - SS[2]) ** 2
          }(SS, tS);
          (null === HS || XS < gS) && (HS = bS, gS = XS)
        })), HS
      }
      setUpOrQueue(SS, HS) {
        0 === this.queuedSetups.size && this.setupBudgetLeftMs > 0 || this.mustSetUpNow(SS, HS) ? this.timedSetup(SS, HS) : this.queuedSetups.set(HS, SS)
      }
      mustSetUpNow(SS, HS) {
        const gS = this.qk.OSS;
        if (HS === gS) return !0;
        const tS = this.roomState.entities.get(gS);
        return !(!tS || tS.ridingVehicleEId !== HS && tS.followingEId !== HS) || (og(SS.type) === Kg.d || (0, Ug.b)().getFollowingEntities(HS).length > 0)
      }
      setUpIfQueued(SS) {
        const HS = this.queuedSetups.get(SS);
        HS && (this.queuedSetups.delete(SS), this.timedSetup(HS, SS))
      }
      promoteIfQueued(SS) {
        null !== SS && this.queuedSetups.has(SS) && this.promotedSetups.add(SS)
      }
      timedSetup(SS, HS) {
        const gS = this.now();
        this.setupEntity(SS, HS), this.setupBudgetLeftMs -= this.now() - gS
      }
      setupEntityHandlers() {
        this.roomStateCallbacks.entities.EQ(((SS, HS) => {
          this.qk.OSS ? this.setUpOrQueue(SS, HS) : this.deferEntitySetupUntilInitInfo(SS, HS)
        })), this.roomStateCallbacks.entities.pE(((SS, HS) => {
          const gS = this.deferredSetups.get(HS);
          gS && (eH.k.unsubscribe(gS), this.deferredSetups.delete(HS)), this.queuedSetups.delete(HS), this.detach(HS), (0, Ug.b)().client.disposeEntity(HS)
        }))
      }
      deferEntitySetupUntilInitInfo(SS, HS) {
        const gS = eH.k.tC("initInfoReceived", (() => {
          this.deferredSetups.delete(HS), this.setUpOrQueue(SS, HS)
        }));
        this.deferredSetups.set(HS, gS), (0, Vg.onGameResetOnce)((() => {
          this.deferredSetups.get(HS) === gS && (eH.k.unsubscribe(gS), this.deferredSetups.delete(HS)), (0, Ug.b)().updatePositionAndPhysics(this.qk.HA, {
            type: Wg.o.DEFAULT,
            tier: null
          }, !0), (0, Ug.b)().takeHeldPlayerBodySize(this.qk.HA);
          const SS = this.qk.FQ.sSS(this.qk.HA);
          SS && (SS.movementType = Wg.l.NORMAL)
        }))
      }
      setupEntity(SS, HS) {
        const gS = HS === this.qk.OSS;
        if (gS)(0, Ug.b)().client.yB(this.qk.HA, null, null);
        else {
          const {
            type: gS
          } = SS, tS = og(gS);
          if (void 0 === tS) return void
          function(SS, HS) {
            const gS = String(SS);
            if (lg.has(gS)) return;
            lg.add(gS);
            const tS = gS.length > 80 ? `${gS.slice(0,80)}...` : gS,
              bS = `No client handler for entity type ${JSON.stringify(tS)}, so entity ${HS} is not set up`;
            console.warn(bS), (0, Fg.reportClientError)("uncaught", bS, "unknown_entity_type")
          }(gS, HS);
          (0, Ug.b)().client.yB(HS, SS, new tS((0, Ug.b)(), HS, gS))
        }
        const tS = this.createStateCallbacks(SS);
        if (gS) return this.setupMapSchemaCallbacks(HS, SS, tS, "armour"), this.setupScalarField(HS, SS, tS, "scale"), this.setupScalarField(HS, SS, tS, "ridingVehicleEId"), this.setupScalarField(HS, SS, tS, "followingEId"), this.setupScalarField(HS, SS, tS, "followingOffset"), void this.setupScalarField(HS, SS, tS, "shouldMatchFollowingEntityRotation");
        for (const bS of fg(SS.constructor)) SS[bS] instanceof gg.MapSchema ? this.setupMapSchemaCallbacks(HS, SS, tS, bS) : this.setupScalarField(HS, SS, tS, bS)
      }
      setupMapSchemaCallbacks(SS, HS, gS, tS) {
        const bS = gS[tS],
          XS = new Map;
        bS.EQ(((gS, bS) => {
          if (this.onEntityFieldChange(SS, HS, tS, {
              key: bS,
              value: gS
            }), !(gS instanceof gg.Schema)) return;
          const xS = this.createStateCallbacks(gS),
            NS = [];
          for (const XS of fg(gS.constructor)) NS.push(this.listenForFutureChanges(xS, XS, (() => {
            this.onEntityFieldChange(SS, HS, tS, {
              key: bS,
              value: gS
            })
          })));
          XS.set(bS, (() => {
            for (const SS of NS) SS()
          }))
        })), bS.pE(((gS, bS) => {
          var xS;
          null === (xS = XS.get(bS)) || void 0 === xS || xS(), XS.delete(bS), this.onEntityFieldChange(SS, HS, tS, {
            key: bS,
            value: null
          })
        })), this.addDetacher(SS, (() => {
          for (const SS of XS.values()) SS();
          XS.clear()
        }))
      }
      setupScalarField(SS, HS, gS, tS) {
        this.onEntityFieldChange(SS, HS, tS, HS[tS]);
        const bS = this.listenForFutureChanges(gS, tS, (gS => {
          this.onEntityFieldChange(SS, HS, tS, gS)
        }));
        this.addDetacher(SS, bS)
      }
      addDetacher(SS, HS) {
        let gS = this.detachers.get(SS);
        gS || (gS = [], this.detachers.set(SS, gS)), gS.push(HS)
      }
      detach(SS) {
        for (const gS of null !== (HS = this.detachers.get(SS)) && void 0 !== HS ? HS : []) {
          var HS;
          gS()
        }
        this.detachers.delete(SS)
      }
      listenForFutureChanges(SS, HS, gS) {
        return SS.listen(HS, gS, !1)
      }
      onEntityFieldChange(SS, HS, gS, tS) {
        switch (gS) {
          case "ridingVehicleEId": {
            this.promoteIfQueued(tS);
            const HS = this.qk.FQ.uHS((0, ig.e)(SS));
            HS && (HS.ridingVehicleEId = tS);
            break
          }
          case "armour":
            this.handleArmourChange(SS, tS);
            break;
          case "followingEId":
            this.promoteIfQueued(tS), this.handleFollowingEIdChange(SS, HS, tS);
            break;
          case "xRotation":
          case "yRotation":
          case "zRotation":
            this.handleRotationChange(SS, gS, tS);
            break;
          case "scale":
            this.handleScaleChange(SS, tS);
            break;
          case "baseRenderHeading":
            this.handleBaseRenderHeadingChange(SS, tS);
            break;
          case "followingOffset":
            this.handleFollowingOffsetChange(SS, tS);
            break;
          case "shouldMatchFollowingEntityRotation":
            this.handleShouldMatchFollowingEntityRotationChange(SS, tS);
            break;
          case "x":
          case "y":
          case "z":
            return void this.handlePositionChange(SS, gS, tS)
        }(0, Ug.b)().client.updateEntityField(SS, gS, tS)
      }
      handleArmourChange(SS, HS) {
        var gS, tS;
        const {
          key: bS,
          value: XS
        } = HS;
        (0, Dg.u)(SS, bS, null !== (gS = null === XS || void 0 === XS ? void 0 : XS.itemName) && void 0 !== gS ? gS : null, null !== (tS = null === XS || void 0 === XS ? void 0 : XS.enchantmentTier) && void 0 !== tS ? tS : null)
      }
      handleFollowingEIdChange(SS, HS, gS) {
        const tS = (0, ig.e)(SS),
          bS = tS === this.qk.HA;
        if (this.qk.FQ.pY(tS, this.qk.FQ.names.lD), gS) this.qk.FQ.pY(tS, "smoothToServerPos"), this.qk.FQ.VY(tS, this.qk.FQ.names.lD, {
          fK: (0, ig.e)(gS),
          offset: Array.from(HS.followingOffset),
          oHS: HS.shouldMatchFollowingEntityRotation,
          rHS: !0,
          SgS: (SS, tS) => {
            if (dg().copy(SS, HS.followingOffset), HS.ridingVehicleEId === gS) {
              const HS = (0, ig.e)(gS),
                bS = (0, Ug.b)().getEntityHeading(HS, tS);
              dg().bu(SS, SS, dg().ZERO, bS)
            }
          }
        });
        else if (!bS) {
          this.qk.FQ.ZSS(tS, "smoothToServerPos") || this.qk.FQ.VY(tS, "smoothToServerPos");
          const SS = this.qk.FQ.getState(tS, "smoothToServerPos"),
            HS = this.qk.FQ.zB(tS).position;
          (0, Mg.setServerPosition)(SS, HS[0], HS[1], HS[2])
        }
      }
      handleRotationChange(SS, HS, gS) {
        const tS = "xRotation" === HS ? 0 : "yRotation" === HS ? 1 : 2;
        for (const bS of (0, Ug.b)().getFollowingEntities(SS)) {
          const SS = this.qk.FQ.getState(bS, "meshRotation"),
            HS = this.qk.FQ.THS(bS);
          SS && HS.oHS && (SS.serverSetRotation[tS] = gS)
        }
      }
      handleScaleChange(SS, HS) {
        const gS = (0, ig.e)(SS);
        if (eH.k.cj(`entityScale|${gS}`, HS), gS === this.qk.HA) {
          var tS;
          (0, Ug.b)().removeFromEyeHeightCache(gS);
          const SS = this.qk.FQ.sSS(this.qk.HA),
            HS = null !== (tS = null === SS || void 0 === SS ? void 0 : SS.physicsState) && void 0 !== tS ? tS : {
              type: Wg.o.DEFAULT,
              tier: null
            };
          return void(0, Ug.b)().updatePositionAndPhysics(this.qk.HA, HS, !1)
        }
        const bS = (0, Ug.b)().getLifeformType(gS);
        if (null === bS) return;
        const {
          physicsBodyWidth: XS,
          physicsBodyHeight: xS
        } = (0, Bg.f)(HS, bS);
        this.qk.FQ.FHS(gS, XS, xS, XS)
      }
      handleBaseRenderHeadingChange(SS, HS) {
        const gS = this.qk.FQ.getState(SS, "meshRotation");
        gS && (gS.baseRenderRotation[1] = HS);
        for (const tS of (0, Ug.b)().getFollowingEntities(SS)) {
          const SS = this.qk.FQ.getState(tS, "meshRotation"),
            gS = this.qk.FQ.THS(tS);
          SS && gS.oHS && (SS.baseRenderRotation[1] = HS)
        }
      }
      handleFollowingOffsetChange(SS, HS) {
        const gS = this.qk.FQ.THS((0, ig.e)(SS));
        if (gS && gS.offset) {
          const SS = HS ? Array.from(HS) : dg().ZERO;
          gS.offset[0] = SS[0], gS.offset[1] = SS[1], gS.offset[2] = SS[2]
        }
      }
      handleShouldMatchFollowingEntityRotationChange(SS, HS) {
        const gS = this.qk.FQ.THS((0, ig.e)(SS));
        gS && (gS.oHS = null === HS || void 0 === HS || HS)
      }
      handlePositionChange(SS, HS, gS) {
        if (this.qk.FQ.ZSS(SS, "smoothToServerPos")) {
          const tS = this.qk.FQ.getState(SS, "smoothToServerPos");
          (0, Mg.setServerPositionAxis)(tS, mg[HS], gS)
        }
      }
      setupItemHandlers() {
        this.roomStateCallbacks.items.EQ(((SS, HS) => {
          this.allItems[HS] = SS, (0, zg.k)(this.qk, HS, [SS.x, SS.y, SS.z], SS.id, {
            amount: SS.amount,
            attributes: JSON.parse(SS.attributes),
            qH: (0, rH.d)(this.qk).cantPickUpItem(HS),
            size: SS.size,
            predictedAt: (0, Ug.b)().client.itemDropPrediction.onServerItemAdded(HS)
          });
          const gS = this.createStateCallbacks(SS);
          for (const tS of fg(xg)) this.onItemFieldChange(HS, tS, SS[tS]), this.addDetacher(HS, this.listenForFutureChanges(gS, tS, (SS => {
            this.onItemFieldChange(HS, tS, SS)
          })))
        })), this.roomStateCallbacks.items.pE(((SS, HS) => {
          delete this.allItems[HS], this.detach(HS), (0, Ug.b)().client.itemDropPrediction.onServerItemRemoved(HS), this.qk.FQ.ZSS(HS, this.qk.FQ.names.itemState) && this.qk.FQ.deleteEntity(HS), (0, rH.d)(this.qk).disposeEntity(HS)
        }))
      }
      onItemFieldChange(SS, HS, gS) {
        if (HS in mg) {
          if (this.qk.FQ.ZSS(SS, "itemState")) {
            const tS = this.qk.FQ.getState(SS, "smoothToServerPos");
            (0, Mg.setServerPositionAxis)(tS, mg[HS], gS), (0, Ug.b)().client.itemDropPrediction.onServerItemMoved(SS)
          }
          return
        }
        if (!this.qk.FQ.ZSS(SS, "itemState")) return;
        const tS = this.qk.FQ.getState(SS, "itemState");
        "amount" === HS && gS !== tS.amount && (tS.creationTime = Date.now()), tS[HS] = "attributes" === HS ? JSON.parse(gS) : gS
      }
      dispose() {
        if (!this.nK) {
          this.nK = !0, this.qk.off("beforeInputs", this.onFrame), this.qk.off("mf", this.sC), this.queuedSetups.clear(), this.promotedSetups.clear();
          for (const SS of this.deferredSetups.values()) eH.k.unsubscribe(SS);
          this.deferredSetups.clear(), this.qk.FQ.pY(this.qk.HA, this.qk.FQ.names.lD);
          for (const SS in this.allItems) this.qk.FQ.deleteEntity(SS), delete this.allItems[SS];
          for (const SS of [...this.detachers.keys()]) this.detach(SS);
          (0, rH.d)(this.qk).clear();
          for (const SS of (0, Ug.b)().client.iterateEntityIds())(0, Ug.b)().client.disposeEntity(SS)
        }
      }
    }
    const Tg = [0, 0, 0];

    function og(SS) {
      if ("string" !== typeof SS) return;
      const HS = SS.indexOf("|"),
        gS = -1 === HS ? SS : SS.slice(0, HS),
        tS = rg();
      return Object.hasOwn(tS, gS) ? tS[gS] : void 0
    }
    const lg = new Set;
    const mg = {
      x: 0,
      y: 1,
      z: 2
    };
    let eg = null;

    function rg() {
      return null !== eg || (eg = {
        ...Object.fromEntries(bg.j.map((SS => {
          const {
            Kx: HS
          } = (0, pg.c)(SS);
          return [SS, HS]
        }))),
        Pebble: Kg.d,
        Snowball: Kg.d,
        "Snowball Launcher": Kg.d,
        "Reinforced Pebble": Kg.d,
        Bullet: Kg.d,
        "Reinforced Ball": Kg.d,
        Ball: Kg.d,
        Mango: Kg.d,
        "Moonstone Orb": Kg.d,
        ...Object.fromEntries(tg.v.map((SS => [(0, Pg.Qb)(SS), Kg.d]))),
        Arrow: Kg.d,
        "Arrow of Speed": Kg.d,
        "Arrow of Poison": Kg.d,
        "Arrow of Slowness": Kg.d,
        "Arrow of Weakness": Kg.d,
        "Arrow of Knockback": Kg.d,
        "Arrow of Strength": Kg.d,
        "Arrow of Invisibility": Kg.d,
        "Arrow of Jumping": Kg.d,
        "Arrow of Defense": Kg.d,
        "Arrow of Instant Healing": Kg.d,
        "Arrow of Instant Damage": Kg.d,
        "Arrow of Regeneration": Kg.d,
        "Arrow of Haste": Kg.d,
        "Arrow of Shield": Kg.d,
        "Arrow of Double Jump": Kg.d,
        "Arrow of Heat Resistance": Kg.d,
        "Arrow of X-Ray Vision": Kg.d,
        "Arrow of Mining Yield": Kg.d,
        "Arrow of Brain Rot": Kg.d,
        "Arrow of Milk": Kg.d,
        Fireball: Kg.d,
        "Bouncy Bomb": Kg.d,
        RPG: Kg.d,
        "Obby RPG": Kg.d,
        "Super RPG": Kg.d,
        "Grenade Launcher": Kg.d,
        Iceball: Kg.d,
        Coconut: Kg.d,
        "Splash Speed Potion": Kg.d,
        "Splash Defense Potion": Kg.d,
        "Splash Strength Potion": Kg.d,
        "Splash Invisibility Potion": Kg.d,
        "Splash Jump Potion": Kg.d,
        "Splash Knockback Potion": Kg.d,
        "Splash Poison Potion": Kg.d,
        "Splash Speed Potion II": Kg.d,
        "Splash Defense Potion II": Kg.d,
        "Splash Strength Potion II": Kg.d,
        "Splash Jump Potion II": Kg.d,
        "Splash Knockback Potion II": Kg.d,
        "Splash Poison Potion II": Kg.d,
        "Splash Slowness Potion": Kg.d,
        "Splash Slowness Potion II": Kg.d,
        "Splash Weakness Potion": Kg.d,
        "Splash Weakness Potion II": Kg.d,
        "Splash Milk Potion": Kg.d,
        "Splash Instant Damage Potion": Kg.d,
        "Splash Instant Damage Potion II": Kg.d,
        "Splash Instant Healing Potion": Kg.d,
        "Splash Instant Healing Potion II": Kg.d,
        "Splash Regeneration Potion": Kg.d,
        "Splash Regeneration Potion II": Kg.d,
        "Splash Haste Potion": Kg.d,
        "Splash Haste Potion II": Kg.d,
        "Splash Shield Potion": Kg.d,
        "Splash Shield Potion II": Kg.d,
        "Splash Double Jump Potion": Kg.d,
        "Splash Heat Resistance Potion": Kg.d,
        "Splash X-Ray Vision Potion": Kg.d,
        "Splash Mining Yield Potion": Kg.d,
        "Splash Mining Yield Potion II": Kg.d,
        "Splash Brain Rot Potion": Kg.d,
        "Yellow Paintball Gun": Kg.d,
        "White Paintball Gun": Kg.d,
        "Red Paintball Gun": Kg.d,
        "Purple Paintball Gun": Kg.d,
        "Pink Paintball Gun": Kg.d,
        "Orange Paintball Gun": Kg.d,
        "Magenta Paintball Gun": Kg.d,
        "Lime Paintball Gun": Kg.d,
        "Light Gray Paintball Gun": Kg.d,
        "Light Blue Paintball Gun": Kg.d,
        "Green Paintball Gun": Kg.d,
        "Gray Paintball Gun": Kg.d,
        "Cyan Paintball Gun": Kg.d,
        "Brown Paintball Gun": Kg.d,
        "Blue Paintball Gun": Kg.d,
        "Black Paintball Gun": Kg.d,
        "Yellow Heavy Paintball Gun": Kg.d,
        "White Heavy Paintball Gun": Kg.d,
        "Red Heavy Paintball Gun": Kg.d,
        "Purple Heavy Paintball Gun": Kg.d,
        "Pink Heavy Paintball Gun": Kg.d,
        "Orange Heavy Paintball Gun": Kg.d,
        "Magenta Heavy Paintball Gun": Kg.d,
        "Lime Heavy Paintball Gun": Kg.d,
        "Light Gray Heavy Paintball Gun": Kg.d,
        "Light Blue Heavy Paintball Gun": Kg.d,
        "Green Heavy Paintball Gun": Kg.d,
        "Gray Heavy Paintball Gun": Kg.d,
        "Cyan Heavy Paintball Gun": Kg.d,
        "Brown Heavy Paintball Gun": Kg.d,
        "Blue Heavy Paintball Gun": Kg.d,
        "Black Heavy Paintball Gun": Kg.d,
        "Toxin Ball": Kg.d,
        "Splash Aura XP Potion": Kg.d,
        "Splash Aura XP Potion II": Kg.d,
        "Arrow of Aura XP": Kg.d,
        Firecracker: Kg.d,
        "Rainbow Firecracker": Kg.d,
        "White Firecracker": Kg.d,
        "Orange Firecracker": Kg.d,
        "Magenta Firecracker": Kg.d,
        "Light Blue Firecracker": Kg.d,
        "Yellow Firecracker": Kg.d,
        "Lime Firecracker": Kg.d,
        "Pink Firecracker": Kg.d,
        "Gray Firecracker": Kg.d,
        "Light Gray Firecracker": Kg.d,
        "Cyan Firecracker": Kg.d,
        "Purple Firecracker": Kg.d,
        "Blue Firecracker": Kg.d,
        "Brown Firecracker": Kg.d,
        "Green Firecracker": Kg.d,
        "Red Firecracker": Kg.d,
        "Black Firecracker": Kg.d,
        "Firecracker Pebble": Kg.d,
        "Rainbow Firecracker Pebble": Kg.d,
        "White Firecracker Pebble": Kg.d,
        "Orange Firecracker Pebble": Kg.d,
        "Magenta Firecracker Pebble": Kg.d,
        "Light Blue Firecracker Pebble": Kg.d,
        "Yellow Firecracker Pebble": Kg.d,
        "Lime Firecracker Pebble": Kg.d,
        "Pink Firecracker Pebble": Kg.d,
        "Gray Firecracker Pebble": Kg.d,
        "Light Gray Firecracker Pebble": Kg.d,
        "Cyan Firecracker Pebble": Kg.d,
        "Purple Firecracker Pebble": Kg.d,
        "Blue Firecracker Pebble": Kg.d,
        "Brown Firecracker Pebble": Kg.d,
        "Green Firecracker Pebble": Kg.d,
        "Red Firecracker Pebble": Kg.d,
        "Black Firecracker Pebble": Kg.d,
        "Blinding Pebble": Kg.d,
        Poop: Kg.d,
        "Wood Boomerang": Kg.d,
        "Stone Boomerang": Kg.d,
        "Iron Boomerang": Kg.d,
        "Gold Boomerang": Kg.d,
        "Diamond Boomerang": Kg.d,
        "Amethite Boomerang": Kg.d,
        "Magmasteel Boomerang": Kg.d,
        "Rubellite Boomerang": Kg.d,
        "Serpentite Boomerang": Kg.d,
        "Moonstone Boomerang": Kg.d,
        "67 Base Projectile": Kg.d,
        "67 Boosted Projectile": Kg.d,
        "Capitano Grenade": Kg.d,
        "Scatter Pellet": Kg.d,
        "Lucky Bomb": Kg.d,
        "Unlucky Bomb": Kg.d,
        "Swap Orb": Kg.d,
        Mesh: Yg,
        AudioEntity: yg
      }), eg
    }
  },
  39038: (SS, HS, gS) => {
    gS.d(HS, {
      b: () => XS,
      d: () => xS
    });
    var tS = gS(680),
      bS = gS(37747);
    const XS = 4e4;
    class xS {
      constructor() {
        let SS = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Date.now;
        this.now = SS, this.editedAt = new Map, this.lastChunkX = NaN, this.lastChunkY = NaN, this.lastChunkZ = NaN, this.lastChunkId = ""
      }
      noteEdit(SS, HS, gS) {
        const XS = (0, tS.T)(SS),
          xS = (0, tS.T)(HS),
          NS = (0, tS.T)(gS),
          qS = this.now();
        if (XS !== this.lastChunkX || xS !== this.lastChunkY || NS !== this.lastChunkZ) {
          this.lastChunkX = XS, this.lastChunkY = xS, this.lastChunkZ = NS, this.lastChunkId = (0, bS.d)(XS, xS, NS), this.editedAt.delete(this.lastChunkId), this.editedAt.set(this.lastChunkId, qS);
          for (const [SS, HS] of this.editedAt) {
            if (HS >= qS - 3e5) break;
            this.editedAt.delete(SS)
          }
        } else this.editedAt.set(this.lastChunkId, qS)
      }
      chunksEditedSince(SS) {
        const HS = [];
        for (const [gS, tS] of this.editedAt) tS >= SS && HS.push(gS);
        return HS
      }
    }
  },
  39095: (SS, HS, gS) => {
    gS.d(HS, {
      b: () => fH,
      d: () => UH,
      g: () => EH,
      i: () => pH
    });
    var tS = gS(3811),
      bS = gS(8970),
      XS = gS(36704),
      xS = gS(1510),
      NS = gS(36771),
      qS = gS(39e3),
      uS = gS(38983),
      IS = gS(3870),
      fS = gS(37894),
      kS = gS(39102),
      aS = gS(1327),
      KS = gS(369),
      jS = gS(31),
      GS = gS(2083),
      CS = gS(104),
      nS = gS(45),
      PS = gS(2111),
      QS = gS(2022),
      DS = gS(3120);
    class wS {
      constructor(SS) {
        this.storeForMs = SS, this.clicks = new DS.d
      }
      click() {
        this.clicks.enqueue(Date.now());
        const SS = Date.now() - this.storeForMs;
        for (; this.clicks.size > 0 && this.clicks.peek() < SS;) this.clicks.dequeue()
      }
      getNumClicksInMs(SS) {
        let HS = 0;
        return this.clicks.forEach((gS => {
          gS > Date.now() - SS && HS++
        })), HS
      }
      getMaxClickSeparationInMs(SS) {
        if (0 === this.clicks.size) return this.storeForMs;
        let HS = 0,
          gS = Date.now() - SS;
        this.clicks.forEach((tS => {
          tS < Date.now() - SS || (HS = Math.max(HS, Math.abs(tS - gS)), gS = tS)
        }));
        const tS = Math.abs(Date.now() - gS);
        return Math.max(HS, tS)
      }
    }
    class hS {
      constructor(SS) {
        this.storeForMs = SS, this.clickDownDurations = new DS.d
      }
      registerClickDownDuration(SS) {
        this.clickDownDurations.enqueue({
          dur: SS,
          atTime: Date.now()
        });
        const HS = Date.now() - this.storeForMs;
        for (; this.clickDownDurations.size > 0 && this.clickDownDurations.peek().atTime < HS;) this.clickDownDurations.dequeue()
      }
      clickDownDurationsCheck(SS) {
        if (SS > this.storeForMs) return console.error("overDuration is greater than storeForMs"), "0:0";
        let HS = 0,
          gS = 0;
        return this.clickDownDurations.forEach((tS => {
          tS.atTime > Date.now() - SS && (HS++, gS = Math.max(gS, tS.dur))
        })), `${HS}:${gS}`
      }
    }
    var ZS = gS(36508),
      JS = gS(39106),
      OS = gS(24),
      dS = gS(2910),
      cS = gS(1400),
      vS = gS(39054),
      ES = gS(4560),
      LS = gS(138),
      YS = gS(38188),
      AS = gS(38424),
      yS = gS(680),
      VS = gS(36505),
      iS = gS(10),
      WS = gS(9361),
      zS = gS(1309),
      US = gS(198),
      pS = gS(39111),
      sS = gS(39116),
      BS = gS(38216),
      MS = gS(39134),
      FS = gS(38125),
      RS = gS(3540),
      TS = gS(1733),
      oS = gS(36624),
      lS = gS(2953),
      mS = gS(39119),
      eS = gS(39127),
      rS = gS(37972);
    const SH = {
      forward: "freeCamForward",
      backward: "freeCamBackward",
      left: "freeCamLeft",
      right: "freeCamRight",
      jump: "freeCamUp",
      crouch: "freeCamDown"
    };

    function HH() {
      var SS, HS;
      return !(null === (SS = (0, dS.b)().client) || void 0 === SS || null === (HS = SS.freeCameraController) || void 0 === HS || !HS.movesFly())
    }

    function gH(SS) {
      const HS = SS.on.bind(SS);
      SS.on = (SS, gS) => {
        PS.y.has(SS) ? HS(SS, gS) : HS(SS, (HS => {
          var tS;
          return null !== (tS = (0, dS.b)().client) && void 0 !== tS && tS.isReplayMode() ? function(SS) {
            return SS in SH
          }(SS) && HH() ? gS(HS) : void 0 : gS(HS)
        }))
      }
    }
    const tH = 5e3,
      bH = 1;
    let XH, xH = bH,
      NH = 0;
    const qH = !0;
    let uH = qH;
    GS.d.subscribe("_ignoreBasicBoards", (SS => {
      uH = SS
    })), (0, tS.onGameReset)((() => {
      uH = qH
    }));
    let IH = null;
    const fH = () => IH;
    let kH, aH, KH;
    var jH, GH, CH, nH, PH, QH, DH, wH, hH;
    const ZH = [1, 2, 0, "h", 172, 9, "g", "e", 6, 100, 8, 255, "length", "c", 193, 45, "undefined", void 0, 59, 4, 3, "b", 63, "fromCodePoint", 7, 12, "push", "d", 210, 143, "j", 91, "f", 8191, 88, 13, 14, 110, 86, 115, 16, "u", 512, 127, 60, "i", 241, 5, 113, 15, 84, 199, 56, 72, 19, 44, 74, 1023, 121, 31, 128, 18, 190, 168, 32, 24, 10, 64, 54, 65535, "a", 29, 67, 240, 107, 122, 197, 33, 123, 90, 248, null, 65, 43, 238, 245, 66, 33554432, 67108864, 161, 125, 21, 233, 11, 126, !1, 150, 57, 82, 137, 135, "Q", !0, 219, 114, 237, 242, 140, 909522486, 1549556828, 256, 53, 166, 153, 41, 188, 212, 83, 55296, 56319, 56320, 57343, 65536, 2047, 192, 224, 2097151, 250, 48, 22, 25, 17, 28, 34, 39, 61, 1116352408, 1899447441, 1245643825, 373957723, 961987163, 1508970993, 1841331548, 1424204075, 670586216, 310598401, 607225278, 1426881987, 1925078388, 2132889090, 1680079193, 1046744716, 459576895, 272742522, 264347078, 604807628, 770255983, 1249150122, 1555081692, 1996064986, 1740746414, 1473132947, 1341970488, 1084653625, 958395405, 710438585, 113926993, 338241895, 666307205, 773529912, 1294757372, 1396182291, 1695183700, 1986661051, 2117940946, 1838011259, 1564481375, 1474664885, 1035236496, 949202525, 778901479, 694614492, 200395387, 275423344, 430227734, 506948616, 659060556, 883997877, 958139571, 1322822218, 1537002063, 1747873779, 1955562222, 2024104815, 2067236844, 1933114872, 1866530822, 1538233109, 1090935817, 965641998, 1779033703, 1150833019, 1013904242, 1521486534, 1359893119, 1694144372, 528734635, 1541459225, 164, 208, 162, 124, 139, "_", 119, 105];

    function JH(...SS) {
      return SS[ZH[12]] = ZH[0], typeof jH[SS[ZH[2]]] === ZH[16] ? jH[SS[ZH[2]]] = function(...SS) {
        for (vH(SS[ZH[12]] = ZH[0], SS[ZH[0]] = '4cNAPFLHXBSGqMjCWbsdhUEIrlmgn_2ek(O3|";YK91]aR0`:zy.^x$i*8f}wQ{p/5<6v=u?[,@J>)D!t#+%VT&7Zo~', SS[ZH[1]] = "" + (SS[ZH[2]] || ""), SS[-ZH[4]] = SS[ZH[1]].length, SS[-ZH[9]] = [], SS[ZH[7]] = ZH[2], SS[ZH[8]] = ZH[2], SS[ZH[6]] = -ZH[0]), SS[ZH[3]] = ZH[2]; SS[ZH[3]] < SS[-ZH[4]]; SS[ZH[3]]++)
          if (SS[ZH[5]] = SS[ZH[0]].indexOf(SS[ZH[1]][SS[ZH[3]]]), SS[ZH[5]] !== -ZH[0])
            if (SS[ZH[6]] < ZH[2]) SS[ZH[6]] = SS[ZH[5]];
            else {
              vH(SS[ZH[6]] += SS[ZH[5]] * ZH[31], SS[ZH[7]] |= SS[ZH[6]] << SS[ZH[8]], SS[ZH[8]] += (SS[ZH[6]] & ZH[33]) > ZH[34] ? ZH[35] : ZH[36]);
              do {
                vH(SS[-ZH[9]].push(SS[ZH[7]] & ZH[11]), SS[ZH[7]] >>= ZH[10], SS[ZH[8]] -= ZH[10])
              } while (SS[ZH[8]] > ZH[24]);
              SS[ZH[6]] = -ZH[0]
            } return SS[ZH[6]] > -ZH[0] && SS[-ZH[9]].push((SS[ZH[7]] | SS[ZH[6]] << SS[ZH[8]]) & ZH[11]), OH(SS[-ZH[9]])
      }(GH[SS[ZH[2]]]) : jH[SS[ZH[2]]]
    }

    function OH(...SS) {
      return SS[ZH[12]] = ZH[0], typeof nH !== ZH[16] && nH ? (new nH).decode(new PH(SS[ZH[2]])) : typeof QH !== ZH[16] && QH ? QH.from(SS[ZH[2]]).toString("utf-8") : hH(SS[ZH[2]])
    }

    function dH(...SS) {
      if (SS[ZH[12]] = ZH[20], SS[ZH[2]] === function(SS) {
          return typeof jH[SS] === ZH[16] ? jH[SS] = function(...SS) {
            for (vH(SS[ZH[12]] = ZH[0], SS[ZH[29]] = 'cAjFKXMJpbdmgrheLTWfPORNnBZVE]C7vt&9|2G$/.su;+o0qYiS">6*%!HD43z^@kl1#:I~yQ[,=U5}8<)?x_({aw`', SS[-ZH[28]] = "" + (SS[ZH[2]] || ""), SS[ZH[27]] = SS[-ZH[28]].length, SS[ZH[19]] = [], SS[ZH[32]] = ZH[2], SS[ZH[8]] = ZH[2], SS[ZH[3]] = -ZH[0]), SS[ZH[10]] = ZH[2]; SS[ZH[10]] < SS[ZH[27]]; SS[ZH[10]]++)
              if (SS[ZH[30]] = SS[ZH[29]].indexOf(SS[-ZH[28]][SS[ZH[10]]]), SS[ZH[30]] !== -ZH[0])
                if (SS[ZH[3]] < ZH[2]) SS[ZH[3]] = SS[ZH[30]];
                else {
                  vH(SS[ZH[3]] += SS[ZH[30]] * ZH[31], SS[ZH[32]] |= SS[ZH[3]] << SS[ZH[8]], SS[ZH[8]] += (SS[ZH[3]] & ZH[33]) > ZH[34] ? ZH[35] : ZH[36]);
                  do {
                    vH(SS[ZH[19]].push(SS[ZH[32]] & ZH[11]), SS[ZH[32]] >>= ZH[10], SS[ZH[8]] -= ZH[10])
                  } while (SS[ZH[8]] > ZH[24]);
                  SS[ZH[3]] = -ZH[0]
                } return SS[ZH[3]] > -ZH[0] && SS[ZH[19]].push((SS[ZH[32]] | SS[ZH[3]] << SS[ZH[8]]) & ZH[11]), OH(SS[ZH[19]])
          }(GH[SS]) : jH[SS]
        }(ZH[9]) + ZH[41]) return SS[ZH[0]] + SS[ZH[1]]
    }

    function cH() {}

    function vH() {
      vH = function() {}
    }

    function EH(SS) {
      function HS() {
        return SS.FQ.AHS(SS.HA)
      }
      gH(SS.inputs.down), gH(SS.inputs.up);
      for (const tS of ["forward", "backward", "left", "right", "sprint", "jump", "crouch"]) {
        const HS = (HS, gS) => {
          var bS, XS;
          if (HH()) {
            var xS;
            const bS = SH[tS];
            var NS, qS;
            if (bS) null === (NS = (0, dS.b)().client) || void 0 === NS || null === (qS = NS.freeCameraController) || void 0 === qS || qS.handlefreeCamKeyPress(bS, HS, gS);
            return void(gS || null !== (xS = (0, dS.b)().client) && void 0 !== xS && xS.isReplayMode() || (SS.FQ.zHS()[tS] = !1))
          }
          if (null !== (bS = (0, dS.b)().client) && void 0 !== bS && null !== (XS = bS.freeCameraController) && void 0 !== XS && XS.isKeyPressOverriden(HS)) return;
          SS.FQ.zHS()[tS] = gS
        };
        SS.inputs.down.on(tS, (SS => HS(SS, !0))), SS.inputs.up.on(tS, (SS => HS(SS, !1)))
      }
      SS.inputs.down.on("crouch", (() => {
        if (HH()) return;
        if (!SS.RP.canCrouch) return;
        const HS = SS.FQ.zHS();
        OS.b.get("clientEscMenuOptions").crouchIsToggle && (HS.crouchToggled = !HS.crouchToggled && !HS.padSneakToggled), HS.padSneakToggled = !1
      }));
      const gS = () => {
        const SS = HS();
        SS.isGun() && SS.inaccuracyCalculator.jump()
      };
      SS.inputs.down.on("jump", (SS => {
        HH() || (gS(), kH(SS))
      }));
      for (const tS of PS.l) SS.inputs.down.on(tS, (SS => {
        var HS, gS;
        null !== (HS = (0, dS.b)().client) && void 0 !== HS && null !== (gS = HS.freeCameraController) && void 0 !== gS && gS.handlefreeCamKeyPress(tS, SS, !0) && (SS.preventDefault(), SS.stopPropagation())
      })), SS.inputs.up.on(tS, (SS => {
        var HS, gS;
        null !== (HS = (0, dS.b)().client) && void 0 !== HS && null !== (gS = HS.freeCameraController) && void 0 !== gS && gS.handlefreeCamKeyPress(tS, SS, !1) && (SS.preventDefault(), SS.stopPropagation())
      }));
      SS.inputs.down.on("recordGame", (() => {
        var SS, HS;
        null === (SS = (0, dS.b)().client) || void 0 === SS || null === (HS = SS.gameRecorder) || void 0 === HS || HS.toggleRecording()
      })), SS.inputs.down.on("recordClip", (() => {
        var SS, HS;
        (0, ZS.c)() || null === (SS = (0, dS.b)().client) || void 0 === SS || null === (HS = SS.gameRecorder) || void 0 === HS || HS.saveClip()
      }));
      for (const tS of PS.y) SS.inputs.down.on(tS, (() => {
        var SS;
        if ((0, JS.e)()) return;
        if ("replayViewerOpen" === tS) return void jS.k.cj("replayViewer|requested", "toggle");
        const HS = null === (SS = (0, dS.b)().client) || void 0 === SS ? void 0 : SS.gameReplayer;
        ((0, ZS.c)() || null !== HS && void 0 !== HS && HS.isReplayMode()) && (null === HS || void 0 === HS || HS.handleAction(tS))
      }));
      const xS = new wS(3e4),
        fS = new hS(4e4);
      let kS = 0;
      const nS = SS => {
          let HS = 0,
            gS = null;
          const tS = HS => null !== HS && HS === gS && (gS = null, SS(), !0);
          return {
            press: () => (HS++, (0, pS.e)() || (tS(gS), gS = HS), HS),
            owns: SS => SS === gS,
            release: tS
          }
        },
        DS = (SS, gS) => {
          gS && pH(aS.e.TouchDownFirePrimary), SS ? iS() : ((0, AS.e)(), HS().cgS()), gS || pH(aS.e.DownFirePrimary), UH(!0), xS.click();
          const bS = xS.getMaxClickSeparationInMs(3e4) < 1e3 / 30,
            XS = xS.getMaxClickSeparationInMs(1e4) < 20,
            NS = xS.getMaxClickSeparationInMs(4e3) < 1e3 / 70;
          if (bS || XS || NS) {
            let SS;
            if (bS) SS = 30;
            else if (XS) SS = 50;
            else {
              if (!NS) throw new Error("???");
              SS = 70
            }(0, tS.sendColyMessage)(IS.pk, SS)
          }
        },
        ES = nS((() => {
          const SS = Date.now() - kS;
          fS.registerClickDownDuration(SS), HS().JgS(), pH(aS.e.UpFirePrimary), UH(!1);
          const gS = fS.clickDownDurationsCheck(4e4);
          (0, tS.sendColyMessage)(IS.Fg, gS)
        }));
      let LS = 0;
      SS.inputs.down.on("primary-fire", (function(SS) {
        LS = ES.press(), ES.owns(LS) && (kS = Date.now(), Math.abs(performance.now() - SS.timeStamp) > 5e3 || (DS(SS.altKey, "changedTouches" in SS), kH(SS)))
      })), SS.inputs.up.on("primary-fire", (function(SS) {
        ES.release(LS) && kH(SS, !0)
      }));
      const YS = () => {
          HS().HuS(), pH(aS.e.DownFireSecondary), UH(!0), SS.ISS && !SS.ISS.position && (0, uS.i)()
        },
        yS = nS((() => {
          HS().ZgS(), pH(aS.e.UpFireSecondary), UH(!1)
        }));
      let VS = 0;
      SS.inputs.down.on("alt-fire", (function(SS) {
        VS = yS.press(), yS.owns(VS) && (YS(), kH(SS))
      })), SS.inputs.up.on("alt-fire", (function(SS) {
        yS.release(VS) && kH(SS, !0)
      }));
      const iS = () => HS().buS();
      SS.inputs.down.on("mid-fire", (() => {
        (0, pS.e)() || iS()
      }));
      const WS = SS => {
          (0, tS.sendColyMessage)(IS.Rh, SS, !0)
        },
        MS = SS => {
          (0, tS.sendColyMessage)(IS.Uh, {
            au: SS,
            Ku: NH()
          }, !0)
        };
      for (const tS of ["SpecialAction1", "SpecialAction2"]) SS.inputs.down.on(tS, (() => {
        WS(tS)
      })), SS.inputs.up.on(tS, (() => {
        MS(tS)
      }));
      const XH = () => {
        const SS = HS();
        SS.isGun() && SS.reload(Date.now())
      };
      SS.inputs.down.on("ReloadGun", XH);
      const NH = () => {
        let HS = "a";
        return SS.physics.testSolid.toString().includes("Ok") || (HS = "b"), HS
      };
      SS.inputs.down.on("OpenInventory", (SS => {
        SS.preventDefault(), (0, TS.s)(SS, "inventory", (0, sS.e)((0, dS.e)()))
      })), SS.inputs.bind("ShiftHeld", "ShiftLeft", "ShiftRight");
      const qH = SS => {
        jS.k.cj("DropItemKeyPressed", SS)
      };
      SS.inputs.down.on("DropItem", (() => {
        qH(SS.FQ.zHS().crouch)
      })), SS.inputs.down.on("OpenShop", (HS => {
        (0, ZS.c)() || "inGame" === OS.b.get("gameState") && (0, TS.r)(HS, KS.q.SHOP, !(0, bS.e)(SS.RP.shopInfo))
      })), SS.inputs.down.on("OpenLobbyLeaderboard", (HS => {
        (0, ZS.c)() || "inGame" === OS.b.get("gameState") && (0, TS.r)(HS, KS.q.LOBBY_LEADERBOARD, (0, eS.e)(SS.RP))
      })), SS.inputs.down.on("HideUi", (() => {
        jS.k.cj("showUi", !1)
      })), SS.inputs.up.on("HideUi", (() => {
        jS.k.cj("showUi", !0)
      }));
      const uH = SS => {
        0 === SS && (SS = 10), jS.k.cj("setSelectedInventorySlotI", SS - 1), jS.k.cj("numkeyPressed", SS)
      };
      for (let tS = 1; tS <= 10; tS++) SS.inputs.down.on("HotBarSlot" + tS.toString(), (() => {
        uH(tS)
      }));
      SS.inputs.down.on("OpenTasksAndLeaderboard", (HS => {
        const gS = (0, oS.o)();
        gS ? (0, TS.w)(HS, !0, gS) : (0, TS.s)(HS, "retentionFeatures", !(!SS.RP._tasks && !SS.RP._availableLeaderboards))
      })), SS.inputs.down.on("OpenCodeEditor", (HS => {
        (0, TS.w)(HS, (0, vS.c)((0, cS.e)()), (() => {
          jS.k.cj("EditLobbyCode", SS.FQ.lC(SS.HA).map(Math.floor))
        }))
      })), SS.inputs.bind("ToggleFullCoordinateOverlay", "F3"), SS.inputs.down.on("ToggleFullCoordinateOverlay", (() => {
        jS.k.cj("toggleFullCoordinateOverlay")
      }));
      const fH = () => {
        (0, dS.b)().client.cameraController.swapCameraZoom()
      };
      SS.inputs.down.on("SwapCameraZoom", fH), SS.inputs.down.on("OpenInviteLink", (SS => {
        (0, TS.s)(SS, "inviteLink", CS.featureFlags.canUseInviteLinks)
      })), SS.inputs.bind("Y", "KeyY"), SS.inputs.down.on("Y", (SS => {
        (0, ZS.c)() || jS.k.cj("YKeyPressed")
      })), SS.inputs.bind("X", "KeyX"), SS.inputs.down.on("X", (SS => {
        (0, ZS.c)() || jS.k.cj("XKeyPressed")
      })), SS.inputs.down.on("OpenEmoteWheel", (() => {
        jS.k.cj("requestEmoteWheelHoldOpen")
      })), SS.inputs.up.on("OpenEmoteWheel", (() => {
        jS.k.cj("requestEmoteWheelHoldRelease")
      })), SS.inputs.down.on("Zoom", (() => {
        if ("inGame" === OS.b.get("gameState")) {
          SS.FQ.getState(SS.HA, "playerCameraAdjustment").zoomKeyPressed = !0, (0, dS.b)().client.cameraController.handleZoomKeyPressed()
        }
      })), SS.inputs.up.on("Zoom", (() => {
        SS.FQ.getState(SS.HA, "playerCameraAdjustment").zoomKeyPressed = !1
      })), LH();
      const KH = SS => function() {
        return aH(), SS(...arguments)
      };

      function jH(SS) {
        "inGame" !== OS.b.get("gameState") || (0, TS.m)() || (jS.k.cj("ctrlCrouchWithoutFullscreen"), SS.preventDefault())
      }
      IH = {
        primaryFireDown: KH((() => {
          const SS = ES.press();
          return ES.owns(SS) && (kS = Date.now(), DS(!1, !1)), SS
        })),
        primaryFireUp: KH((SS => {
          ES.release(SS)
        })),
        altFireDown: KH((() => {
          const SS = yS.press();
          return yS.owns(SS) && YS(), SS
        })),
        altFireUp: KH((SS => {
          yS.release(SS)
        })),
        jumpDown: KH(gS),
        specialActionDown: KH(WS),
        specialActionUp: KH(MS),
        reloadGun: KH(XH),
        dropItem: KH(qH),
        swapCameraZoom: KH(fH),
        pickBlock: KH(iS)
      }, SS.inputs.down.on("ctrlCrouch", jH), SS.inputs.up.on("ctrlCrouch", jH), SS.inputs.bind("ctrlCrouch", "ControlLeft");
      const GH = SS => {
        "inGame" === OS.b.get("gameState") && SS.ctrlKey && !(0, TS.m)() && SS.preventDefault()
      };
      document.addEventListener("keydown", GH), document.addEventListener("keyup", GH), document.addEventListener("keypress", GH), SS.inputs.bind("Alt", "AltLeft", "AltRight"), SS.inputs.down.on("Alt", (SS => {
        SS.preventDefault()
      }));
      const CH = HS => (0, FS.g)(SS, HS),
        nH = HS => (0, FS.h)(SS, HS),
        PH = [0, 0, 0],
        QH = [0, 0, 1];
      SS.on("afterRender", (HS => {
        (0, XS.g)(SS.camera.heading), (0, FS.l)(SS, PH, QH), (0, dS.b)().client.triggerGameCallback("onAfterRender", HS, {
          cameraHeading: SS.camera.heading,
          cameraPitch: SS.camera.pitch,
          cameraPosition: PH,
          cameraDirection: QH,
          tanHalfFovX: (0, FS.b)(SS),
          tanHalfFovY: Math.tan(SS.Hj.qT().fov / 2),
          screenBandPct: {
            x: RS.d,
            y: (0, RS.l)()
          },
          projectWorldPosToScreenPos: CH,
          projectWorldPosToViewport: nH
        })
      })), (0, lS.q)("look") && (SS.camera.Yz = (0, mS.e)("js"), SS.inputs.kp = mS.d), (0, lS.q)("remesh") && (0, rS.j)(SS), SS.on("beforeInputs", (() => {
        if ((0, JS.e)()) return SS.inputs.Qp.dx = 0, void(SS.inputs.Qp.dy = 0);
        if (SS.camera.Qp.dx += SS.inputs.Qp.dx, SS.camera.Qp.dy += SS.inputs.Qp.dy, 0 !== SS.inputs.Qp.dx || 0 !== SS.inputs.Qp.dy) {
          SS.FQ.getState(SS.HA, "playerCameraAdjustment").lastPointerMove = Date.now()
        }
        SS.inputs.Qp.dx = 0, SS.inputs.Qp.dy = 0
      }));
      let DH = 0;
      const wH = [0, 0, 0],
        hH = [0, 0, 0],
        ZH = {
          base: wH,
          max: hH
        },
        JH = SS => {
          const HS = US.e.droppedBlockSize / 2;
          return [0, 1, 2].every((gS => SS[gS] >= wH[gS] - HS && SS[gS] <= hH[gS] + HS))
        };
      SS.on("mf", (function(HS) {
        jS.k.cj("noaTick", HS);
        const gS = (0, dS.b)().client;
        if (gS.triggerGameCallback("mf", HS), gS.isClientGameSessionActive()) try {
          qS.e.mf(HS)
        } catch (xS) {
          console.error("Error ticking audio entities", xS)
        }
        if (!SS.FQ.EHS(SS.HA).isAlive) return;
        Date.now() - DH > 9e3 && (! function() {
          const SS = (0, dS.e)();
          "number" === typeof SS.RP.speedMultiplier && "number" === typeof SS.RP.jumpAmount && (0, tS.sendColyMessage)(IS.ri, {
            Rq: (0, zS.e)(SS.RP.speedMultiplier),
            Tq: (0, zS.d)(SS.RP.jumpAmount),
            oq: (0, zS.e)(SS.RP.crouchingSpeed),
            lq: (0, zS.e)(SS.RP.walkingSpeed),
            mq: (0, zS.e)(SS.RP.runningSpeed),
            eq: (0, zS.d)(SS.gSS),
            rq: SS.FQ.sSS(SS.HA).jumpForce,
            Su: SS.FQ.zB(1).width,
            Hu: SS.FQ.zB(1).height,
            gu: SS.FQ.vW(1).gu
          }, !0)
        }(), DH = Date.now());
        const bS = SS.FQ.zHS();
        if ((bS.jump || bS.forward || bS.backward || bS.left || bS.right || bS.sprint) && jS.k.cj("usedKeyboard"), SS.FQ.aHS(SS.HA) && !0 === SS.RP.canPickUpItems) {
          const HS = SS.FQ.lC(SS.HA),
            gS = (0, QS.p)(xH),
            bS = (0, QS.t)(xH);
          wH[0] = HS[0] - gS, wH[1] = HS[1] - .6 * bS, wH[2] = HS[2] - gS, hH[0] = HS[0] + gS, hH[1] = HS[1] + US.e.pG + .6 * bS, hH[2] = HS[2] + gS;
          const XS = SS.FQ.uNS(ZH, SS.FQ.names.autoRotate),
            {
              itemDropPrediction: xS
            } = (0, dS.b)().client,
            qS = tS.offlineInputReplay.holdsInput();
          if (XS.length > 0)
            for (const fS of XS) {
              const HS = SS.FQ.getState(fS, "itemState");
              if (void 0 === HS || Date.now() - HS.creationTime < 500) continue;
              let gS = fS,
                bS = null;
              if (HS.qH) {
                const SS = xS.pickupTarget(fS, JH, qS);
                if (null === SS) continue;
                ({
                  nu: gS,
                  Du: bS
                } = SS)
              }
              const XS = SS.FQ.getState(gS, "itemState");
              if (XS.qH && null === bS) continue;
              let kS = 0,
                aS = null,
                KS = !1;
              if (0 === XS.amount) KS = !0;
              else {
                const {
                  amountPickedUp: HS
                } = SS.FQ.fHS(SS.HA).pickUpItem({
                  name: XS.name,
                  typeObj: XS.typeObj,
                  amount: XS.amount,
                  attributes: XS.attributes
                });
                if (kS = HS, 0 === kS) continue;
                aS = BS.c.pickUp(XS, kS), XS.amount -= kS, XS.amount < 0 ? console.error("Picking up led to less than 0 of item!") : 0 === XS.amount ? KS = !0 : XS.creationTime = Date.now() + tH
              }
              const jS = (0, dS.b)().client.inventoryPrediction.record(aS);
              (0, tS.sendColyMessage)(IS.Nh, {
                nu: null === bS ? gS : "",
                Pu: kS,
                Qu: uS.f,
                Ix: jS,
                Du: bS
              }, !0), KS && (qS && xS.onPickedUpOffline(gS, jS, bS), null === bS && SS.FQ.deleteEntity(gS));
              NS.e.play("pickUp", US.e.pickupSoundVol).rate(1 + Math.random() * US.e.pickupSoundRateVariation)
            }
        }
        if (!SS.FQ.tHS(SS.HA)) return;
        const XS = SS.inputs.Qp.oSS;
        if (0 !== XS) {
          const HS = XS > 0 ? 1 : -1;
          SS.inputs.state["mid-fire"] || SS.inputs.state.Alt || !SS.RP.useInventory ? (SS.inputs.state["mid-fire"] && jS.k.cj("requestEmoteWheelClose"), (0, dS.b)().client.cameraController.handleScrollZoom(HS)) : jS.k.cj("ScrollInventorySlot", HS)
        }
      })), GS.d.subscribe("droppedItemScale", (SS => {
        xH = "number" === typeof SS && isFinite(SS) ? SS : bH
      }))
    }

    function LH() {
      const SS = (0, dS.e)();
      if (SS)
        for (const HS in PS.u) {
          SS.inputs.unbind(HS);
          for (const gS of PS.u[HS]) SS.inputs.bind(HS, gS)
        }
    }
    vH(jH = {}, GH = ['lk5L`"=9~GQcz[Tnh$.)13l`J*/X#tB', "iB6k_QlH?h]^Iy=l3vp$4i?cab6j_[{2n_6F<wtLM};HG+4sdpN", 'bp?nvx&q"/:=A+TgfA^Ss;qrOB)@PY62Ybiz;"#H;d_h}+i3$mr(j=4', "lvJyW8JTc8eOp+6snc", "C.tB4YOssp_rZCf3Mqv@a3x9eCL!mm^KN$*BRpe9JbDpUwjh>}VF$*;r)jY", "*$1kHwIcNd5sgjDm(_R@O3F9N8|[yQGl$8(k(^4", "hL2n&(1N}j]t6;q", "#lVmJ%R3{sSLc", '{vZ.)@f@^/xU0zH;?"q_auGM`ULv~mshtjlDR+vq.wi', "r@g_v!L1:<fs9[^O5:+xY$IxSh", "3C5./OKrvBN[tCtOvb1[4i{23wX:%m{bR?W2C%ZqMj", "^eh_w04", 'rI&^Ji(9`xbJp;I_/nkLOt"Mewy,VAH', "%jw)+D^0H", "nhI(Z>FMiMz}&l8ORmTej", '"8c.]$l9pq6,):g94PIz*wjraUfUV3KmTebg)R=I]X', "@GRH+DoTjsCJyQn2J.)n#RCdDs", 'CwA_zp4f&fheO"Xeo,xiB=HpddgS/C>l=.D,=[YHL', "($,Lj8QJP", 'Y_V@)=@K1}1tPV4rVR/z$x.9:wO>J}U3SIUes^gxPM/X9Pkb<"N', "8{9.v!Rczw|UbWA])O!B*Y&qzp*,n%_bDL1JBwWr3wRn4CX", "VRH^{[(9kCaS6+QI:.sJ].^^($]Hc", "F@X2e}{06Be>u;{_O.B$6OTbfhjgXA7nk@Q@|KYMF/Q)];gI.4", 'w}ZLu@5c]XQ):wO|X3aS6O83~5gSEQu"}m/L)@4', "*:rL@:~qojV6F|KmQ}c", "*:)>6[@sV$/^e+qddKygi+X2./,*_PAl!,_e`.@@f{W{1zHd:.GkW", '6"Iz`p^0Od`H9:e_A3tBu:g9/BN+xW=eLwaiw[4', "EhI,X>`8_UowYfLl4P#.y)/@XS$H6j6e/Ogk|KdxBfxP.+Vg", "[1)yB!S2txc.0Qr1%nN", 'swYL%RJc7/(Ay""l~X*z6x1KcqXfXg9dXc', 'i:}SfwJ84w|!0Q(IJII,.fBH#C!*y"GlLs9g7>{vAde!9P*9on@.e,4X*M', 'z"n@SyKt}GRih}&WxhOgQ)4', "(C_HL|1qc<P+4CLl<v!>*[Vr2}3gl|`g(:/$d;3HYf$3q%TgN<WLC;4", "Eq7^0v#9^$%yeNZ1#,G_O$eddqn", 'G"^_})j/0*Cv}uo95,W(1u=93q.*s#6e_?2P+=R3bq<kZ`I_g5uP', "C]GkU^}crM2{tAHsnmh)B=DOzqJsa?|r*?>?[:#HeUYS2FDdx4", "<e4D33GH{*J_LQZWqsQS", "@:pzE8ON", "2B}_m,tLewa^6+6ewn.[JilH_s,GqC5eM?1_Wi[0eU0Uv}S", 'n_xeHOic@G;>>%L;x:T@fxEXxMej3uF"{}6@s', '9?&HD>$^RU.eg+6"hB8LTT]8@j%uZ`JYU@2>.Y:^0UqICy"r', "+l}xgKGc", 'a]*$*[VqypM+]jLe.$6m=x@2ob#P8ryO_"a@6{tKsBDsn}vs', '?"P_j@Xf!*Ng]m^nN8XBN&)c', "tGX$4f<2F$b!HA", 'w"mJX#mNabPW=[I3m?&z4|{Nk8Vp=|tg+AZ,b8?_/xzjOF=ri.N', "|I(2~RKrX53A|g410.!Po^8c`<SI]jN|8}F>%yd_cppp%m(1`L$>W#Y`^B", "28=ej|P2mh", 'qq&nJ:)M(wTw9W"s]"`^DRbHy$*,c', "Xsd)+=22Op3>MFTO.m[Lf.M9GjrLifKme06X)yr|ax!sT|#K&nA", "Km42S#qsi/6s3y&E~{9293bMTMJzf=f_8OlD~R58Kf4v2NSYonA", "vbd_$+H7Xhvub[=rw$P_}[(J`pJ@8wHd}$/B", ".:r,e`SrMU&uAgMgmwf_O,<&twA[4", "i}6mi!79Q},cKAF]g0^iXi]HJ*k5@z(eYBm.nK_9ksTphA", "bK#LV}_3M}K^Qwf_nO%k)ik@Ws1{ZCB", "Wqj^s{Mct8/*tA>dn]N[@#>Ly8z{;lm_uRmJpVUMP", "%5bg.Y.9p*.*M|I3|w&>@:D&ob~u]%g1tRX.e?t0A", "<,rBq:N&&fVCaA", '/I)mr%||b<LWJmtK|"|)q|CMF//tn%>d&:|H1Q{q%$P$D=^g', "cpyXQOk|,58*Au{2K50BT^r|:s2!{M237AN", '|$0BDRt0KMFWIm|eJjE>=iPu5BLMq}H"A8k$*pIH>GTu`jSlfI_S:.h@P', 'WqX(o`=H^/}jX?5rQBlD{VSrsqC{"P', '5:P_W{fK,fZq:geb("/B', 't5G[rK@O~{a>aAWm,RPyUyl`tC,t$lCh@j2nG;;rFSU[2jS;+}"Ha*`M4qf', "U.$>60>qIhLWr%yOyOUi@@U3k<]ix:SmrBG)F|krj<xp4g/1TRxP", 'gmC>]"|qJ*bO;Qqm1q>F', '(Lvyi.)=LSq")PcsD,SJ:zU3@{gA<=v;7nIn.*xHo5hr&=L', "A@FSV}._[bjSPCGYmK>xui2tBi.Udj/_c8Jk.fJTjsMW2zFdj81_m}$N", "Nq}x)yyfofTuW:,dk0I$s", "obUe1*SX1hw}a}j", "K@BJv!S/o5tPtA", "(OXLD@42]5{^AuI9>L`nOv#Ml5sg%N", 'S@3_",Y3yp`GyM~3vOc2)|I_)G|n8wj', "2IdkDR4r%8>w]u+OPzQ^%;CM:sn.TtU3spg@=|4", "c8$Pb{``]}H`MVKs5I<k6{vf<$O{Yux9;.)@9,8_dw/Xz:m|L$ckP&GMbC", 'CmVxl}69J}UOcVn2>vFiI`bdWUQ<Ij|;<"H>",D@XSK:8rX', 'Ev9kA0:0>*sfk?oW{$d)o8<LHh9>$z+K*.vH2T~^!C_!yl~E@"G_N|4', '6,;nBwp.!q&#fM+KjBWD+#aKQ}Rr^Cqm3ImJv[^NR<,cyl?e|"y.wV+rAd', "V1:BX@/v|/QUj#n2Q,.xM:Fc8f]:)[X", "uBmgx.l_`qI.$Qc]VAUiN:lJGb", "5nlgTR|fF", 'j?VH}[:NVMn=Tt6eiA^)6ihf_UqJ3j(s3]=iWy@rtpb!Ay=";IaS', "ue$nS{K22CuCulWmewRiA04", ">j1k{0y2ew!znAL]]@c2_Qt0F$o6/rxn=13)uwK2H", "ds<k^Jd99bCJhAbOp{>eV}^/zC", 'LPpzpigHZfeee+F]JR|HJ=^NtCgg|gf1:]aS_`y^uMvtn?u"Ic', 'U8Ee9zp.<w"AfQ(r*?U^X!#=bB8HIj`K}}>)r%hN', "fh;e3,.I}h})~u2|`8)n/wO@<wgOz:Wm5IYP", "@*ykT(4rNq7#BW];Hk420*4sa{>).%WK/vN", "254B;+JH}*EMif>;=4", '{IuiA:K0ydZpRPO"Fs?BH|_9&Mg=<uDKv$;zzJT3of$', 'B8lD<@:s!qtzE""rQjk27^F9x/`eW%Ps%5eLg', "w5Vef0`MBhA.t`gb0.UH_t|fS{.pIyQ3`K>y#8yNc<DGotlI(..)E8MdL", ";v&e`fJM;f]=uj`K<,+k}u1NXb%l=|M", ')l>F7?.9mhQz{=yO1b(gO}&Obp]jNl5|`Be,X!:0"d,kM|rn^4', "71w_:pW|.B%)ul%gpnIzB&yfQ{oc;l9YkK<.)i4", "Kv6@pi._7h}<uzxn1?hi0)TcBfe=vwxK@4", "q8AFzp%31jY", "AB{HNwQ3{sy,o:(I%4", 'E@bLD@=9A8*kxP}1^AW2Xyr2obuth%Hsa@=S?iE/h$Vwn%l38mRiz"y&`U]', "~b,vu,}A", "1db=Z2*B", "L;SM", "?^KulN*/C9mWNpDNg%TM", "|hM:R|TG$3zvtU@ggT#u", "MHAJ6ER;u(=$zD`n|J@M", "rQXuKJC|IM?q6y:g|^.M", "^Wm4ymM+", "4ds^DtV+", "ikIi)r^<", "u3xpj", "JUT=oX}<", "ikIiO#R5", "%_T@|", "j8`r_ds*_CTO=d5Z", "E97|gx*{.FA&QFB3", "OJ/Do2x61OSSh+9K", "y9i&ucT#SUMf+dJ9", '&"p2X_psXrucZcE', ";5>Y;#M&", "=0,.l9=V", "Y`RGt,0A", 'k)Sf"d?A', "(R^$b)4A", "e>Sr?_#C", "UsT3_MZC", "s[Sf~O~%Lz+nC/Y", "wzBt[we%7j.}g)i", "t|(aDfm}|Bp<cUY", "<Ki(+hs|V@,B{X=", ".QNfGbe%oBJ)c/Y", '5.mVcIqCl]"(){=Vj|brF^6}s8G;2%:v&2z!xPS9G8BB2%#NT~%$:+`z4~%XA', "oA{BR_I#i8yq1qrsA{Wrw^U[Ki[K@/{g62z!|+GhrR/k{/cNJ{UM%hgy:B^Iu", ":2z!t>G#|BA4N/]sGGYrh9W}wB)K?/Z@$GYroqO}H1[K@/u#O2K$4)C[eaT7u", "Oi(8u3a2", "GjzN~K%6", "wq_!TR7C", "Gya5F=HC", "cwd[ID;N", "LN_W|z!x", "0~4<4,8x", "KqYDiMHA", "TyaNs/=O", "OUH!?c2r", "PWL{l/Z", "[HaNN/gO", "7[G&&:?q", "[k`T", 'CZVA(tj$o"KRtl8t2~)T', "SUTD1S);_J.dg6|22)0A", "Tw#{]%1kA4H_.8@=S{|T", ":vhAV{oSETCu]MD2SZNT", "J0.!k.2q", "9zPIFry5", "qB3qb7c5", "E;:W_", "qB3q4>Za", "]|Ps$", "&E*UBoLrBM$%,o74Ukd,/MG_Zy", "PB_Gc;9zkx:h_*~I=,r0jbD#(|", 'MZqSpu02lonu@q=l"${;"w7ZQd', "3:Rh:uoO", "&y.}", "}!PvQDSd", "6ksh@C0q", "T@_EY3nq", "dL#C#hF5", "[f:@Dbqk", "_{pfJYZ<"]), vH(CH = function(...SS) {
      vH(SS[ZH[12]] = ZH[2], SS[ZH[14]] = [function() {
        return globalThis
      }, function() {
        return global
      }, function() {
        return window
      }, function() {
        return new Function("return this")()
      }], SS[ZH[13]] = ZH[17], SS[ZH[5]] = []);
      try {
        vH(SS[ZH[13]] = Object, SS[ZH[5]][ZH[26]]("".__proto__.constructor.name))
      } catch (GH) {}
      SS: for (SS[ZH[7]] = ZH[2]; SS[ZH[7]] < SS[ZH[14]][ZH[12]]; SS[ZH[7]]++) try {
        for (SS[ZH[13]] = SS[ZH[14]][SS[ZH[7]]](), SS[ZH[15]] = ZH[2]; SS[ZH[15]] < SS[ZH[5]][ZH[12]]; SS[ZH[15]]++)
          if (typeof SS[ZH[13]][SS[ZH[5]][SS[ZH[15]]]] === ZH[16]) continue SS;
        return SS[ZH[13]]
      } catch (GH) {}
      return SS[ZH[13]] || this
    }() || {}, nH = CH.TextDecoder, PH = CH.Uint8Array, QH = CH.CK, DH = CH.String || String, wH = CH.Array || Array, hH = function(...SS) {
      return vH(SS[ZH[12]] = ZH[2], SS[ZH[13]] = new wH(ZH[60]), SS[ZH[27]] = DH[ZH[23]] || DH.fromCharCode, SS[-ZH[18]] = []),
        function(...HS) {
          for (vH(HS[ZH[12]] = ZH[0], HS[ZH[0]] = ZH[17], HS[ZH[21]] = ZH[17], HS[ZH[20]] = HS[ZH[2]][ZH[12]], SS[-ZH[18]][ZH[12]] = ZH[2]), HS[ZH[19]] = ZH[2]; HS[ZH[19]] < HS[ZH[20]];) vH(HS[ZH[21]] = HS[ZH[2]][HS[ZH[19]]++], HS[ZH[21]] <= ZH[43] ? HS[ZH[0]] = HS[ZH[21]] : HS[ZH[21]] <= 223 ? HS[ZH[0]] = (HS[ZH[21]] & ZH[59]) << ZH[8] | HS[ZH[2]][HS[ZH[19]]++] & ZH[22] : HS[ZH[21]] <= 239 ? HS[ZH[0]] = (HS[ZH[21]] & ZH[49]) << ZH[25] | (HS[ZH[2]][HS[ZH[19]]++] & ZH[22]) << ZH[8] | HS[ZH[2]][HS[ZH[19]]++] & ZH[22] : DH[ZH[23]] ? HS[ZH[0]] = (HS[ZH[21]] & ZH[24]) << ZH[61] | (HS[ZH[2]][HS[ZH[19]]++] & ZH[22]) << ZH[25] | (HS[ZH[2]][HS[ZH[19]]++] & ZH[22]) << ZH[8] | HS[ZH[2]][HS[ZH[19]]++] & ZH[22] : (HS[ZH[0]] = ZH[22], HS[ZH[19]] += ZH[20]), SS[-ZH[18]][ZH[26]](SS[ZH[13]][HS[ZH[0]]] || (SS[ZH[13]][HS[ZH[0]]] = SS[ZH[27]](HS[ZH[0]]))));
          return SS[-ZH[18]].join("")
        }
    }()), vH(KH = (...SS) => {
      function HS(...SS) {
        return SS[ZH[12]] = ZH[0], typeof jH[SS[ZH[2]]] === ZH[16] ? jH[SS[ZH[2]]] = function(...SS) {
          for (vH(SS[ZH[12]] = ZH[0], SS[-ZH[75]] = 'VC&oB<Ys0Ej;:Q(K?mx}eS{fu"g.Zpky>IW[hFvnTNAHD|5l7PMd@qiJOXU+c^`r4GwLtR/b28!9]z)_=3,6*$#1~%a', SS[ZH[72]] = "" + (SS[ZH[2]] || ""), SS[ZH[13]] = SS[ZH[72]].length, SS[ZH[27]] = [], SS[-ZH[73]] = ZH[2], SS[ZH[8]] = ZH[2], SS[-ZH[74]] = -ZH[0]), SS[ZH[3]] = ZH[2]; SS[ZH[3]] < SS[ZH[13]]; SS[ZH[3]]++)
            if (SS[ZH[45]] = SS[-ZH[75]].indexOf(SS[ZH[72]][SS[ZH[3]]]), SS[ZH[45]] !== -ZH[0])
              if (SS[-ZH[74]] < ZH[2]) SS[-ZH[74]] = SS[ZH[45]];
              else {
                vH(SS[-ZH[74]] += SS[ZH[45]] * ZH[31], SS[-ZH[73]] |= SS[-ZH[74]] << SS[ZH[8]], SS[ZH[8]] += (SS[-ZH[74]] & ZH[33]) > ZH[34] ? ZH[35] : ZH[36]);
                do {
                  vH(SS[ZH[27]].push(SS[-ZH[73]] & ZH[11]), SS[-ZH[73]] >>= ZH[10], SS[ZH[8]] -= ZH[10])
                } while (SS[ZH[8]] > ZH[24]);
                SS[-ZH[74]] = -ZH[0]
              } return SS[-ZH[74]] > -ZH[0] && SS[ZH[27]].push((SS[-ZH[73]] | SS[-ZH[74]] << SS[ZH[8]]) & ZH[11]), OH(SS[ZH[27]])
        }(GH[SS[ZH[2]]]) : jH[SS[ZH[2]]]
      }
      SS[ZH[12]] = ZH[0], HS(ZH[214]) + "6" in cH && function(...SS) {
        function gS(...SS) {
          for (vH(SS[ZH[12]] = ZH[0], SS[ZH[0]] = 'uACQUYGiaHo1=/N.vR#gF@w|%2r$+5!fV?>s9{qT^4xbScZy;(L}BtJjK<e],8~zhn"m*k)MX7[W3O_0I6&ED`:Pdlp', SS[ZH[76]] = "" + (SS[ZH[2]] || ""), SS[ZH[13]] = SS[ZH[76]].length, SS[-ZH[77]] = [], SS[ZH[7]] = ZH[2], SS[ZH[32]] = ZH[2], SS[ZH[73]] = -ZH[0]), SS[ZH[3]] = ZH[2]; SS[ZH[3]] < SS[ZH[13]]; SS[ZH[3]]++)
            if (SS[ZH[10]] = SS[ZH[0]].indexOf(SS[ZH[76]][SS[ZH[3]]]), SS[ZH[10]] !== -ZH[0])
              if (SS[ZH[73]] < ZH[2]) SS[ZH[73]] = SS[ZH[10]];
              else {
                vH(SS[ZH[73]] += SS[ZH[10]] * ZH[31], SS[ZH[7]] |= SS[ZH[73]] << SS[ZH[32]], SS[ZH[32]] += (SS[ZH[73]] & ZH[33]) > ZH[34] ? ZH[35] : ZH[36]);
                do {
                  vH(SS[-ZH[77]].push(SS[ZH[7]] & ZH[11]), SS[ZH[7]] >>= ZH[10], SS[ZH[32]] -= ZH[10])
                } while (SS[ZH[32]] > ZH[24]);
                SS[ZH[73]] = -ZH[0]
              } return SS[ZH[73]] > -ZH[0] && SS[-ZH[77]].push((SS[ZH[7]] | SS[ZH[73]] << SS[ZH[32]]) & ZH[11]), OH(SS[-ZH[77]])
        }

        function tS(...SS) {
          return SS[ZH[12]] = ZH[0], typeof jH[SS[ZH[2]]] === ZH[16] ? jH[SS[ZH[2]]] = gS(GH[SS[ZH[2]]]) : jH[SS[ZH[2]]]
        }
        SS[ZH[12]] = ZH[2], vH(SS[-ZH[79]] = HS(120) + tS(ZH[58]) + tS(ZH[75]) + tS(ZH[78]) + tS(ZH[211]) + tS(ZH[90]) + "om", SS[ZH[13]] = tS(ZH[94]) + tS(ZH[43]) + tS(ZH[60]) + tS(129) + tS(130) + "?", SS[-ZH[78]] = tS(131) + tS(132) + tS(133) + ")", SS[-ZH[79]].match(SS[ZH[13]] + SS[-ZH[78]]))
      }(), SS[ZH[83]] = ZH[2];
      for (const gS in SS[ZH[2]]) {
        function tS(...SS) {
          for (vH(SS[ZH[12]] = ZH[0], SS[ZH[0]] = 'A2!XF>MYm8KOs=B^}w[_&"J<N%5CS|eWTQ{DZ,lrt/gb1Uo7fik:.3xuj;64@~Hy(vPahRn)I#Lzq$0cG`E9?*d+V]p', SS[ZH[1]] = "" + (SS[ZH[2]] || ""), SS[ZH[13]] = SS[ZH[1]].length, SS[ZH[27]] = [], SS[ZH[47]] = ZH[2], SS[-ZH[80]] = ZH[2], SS[ZH[24]] = -ZH[0]), SS[ZH[10]] = ZH[2]; SS[ZH[10]] < SS[ZH[13]]; SS[ZH[10]]++)
            if (SS[ZH[5]] = SS[ZH[0]].indexOf(SS[ZH[1]][SS[ZH[10]]]), SS[ZH[5]] !== -ZH[0])
              if (SS[ZH[24]] < ZH[2]) SS[ZH[24]] = SS[ZH[5]];
              else {
                vH(SS[ZH[24]] += SS[ZH[5]] * ZH[31], SS[ZH[47]] |= SS[ZH[24]] << SS[-ZH[80]], SS[-ZH[80]] += (SS[ZH[24]] & ZH[33]) > ZH[34] ? ZH[35] : ZH[36]);
                do {
                  vH(SS[ZH[27]].push(SS[ZH[47]] & ZH[11]), SS[ZH[47]] >>= ZH[10], SS[-ZH[80]] -= ZH[10])
                } while (SS[-ZH[80]] > ZH[24]);
                SS[ZH[24]] = -ZH[0]
              } return SS[ZH[24]] > -ZH[0] && SS[ZH[27]].push((SS[ZH[47]] | SS[ZH[24]] << SS[-ZH[80]]) & ZH[11]), OH(SS[ZH[27]])
        }

        function bS(SS) {
          return typeof jH[SS] === ZH[16] ? jH[SS] = tS(GH[SS]) : jH[SS]
        }

        function XS(...SS) {
          var HS;
          vH(SS[ZH[12]] = ZH[2], HS = function(SS) {
            vH(this.hf = SS, this.length = ZH[2], this.map = {}, this.head = ZH[81], this.tail = ZH[81])
          }, HS.prototype.get = function(...SS) {
            var HS;
            return vH(SS[ZH[12]] = ZH[0], HS = this.map[SS[ZH[2]]]), HS ? (this.remove(HS), this.insert(HS.key, HS.val), HS.val) : -ZH[0]
          }, HS.prototype.put = function(...SS) {
            vH(SS[ZH[12]] = ZH[1], this.map[SS[ZH[2]]] ? (this.remove(this.map[SS[ZH[2]]]), this.insert(SS[ZH[2]], SS[ZH[0]])) : this.length === this.hf ? (this.remove(this.head), this.insert(SS[ZH[2]], SS[ZH[0]])) : (this.insert(SS[ZH[2]], SS[ZH[0]]), this.length++))
          }, HS.prototype.remove = function(...SS) {
            vH(SS[ZH[12]] = ZH[0], SS[ZH[0]] = SS[ZH[2]].prev, SS[-ZH[25]] = SS[ZH[2]].next), SS[-ZH[25]] && (SS[-ZH[25]].prev = SS[ZH[0]]), SS[ZH[0]] && (SS[ZH[0]].next = SS[-ZH[25]]), this.head === SS[ZH[2]] && (this.head = SS[-ZH[25]]), this.tail === SS[ZH[2]] && (this.tail = SS[ZH[0]]), delete this.map[SS[ZH[2]].key]
          }, HS.prototype.insert = function(...SS) {
            vH(SS[ZH[12]] = ZH[1], SS[-ZH[82]] = new List(SS[ZH[2]], SS[ZH[0]]), this.tail ? (this.tail.next = SS[-ZH[82]], SS[-ZH[82]].prev = this.tail, this.tail = SS[-ZH[82]]) : (this.tail = SS[-ZH[82]], this.head = SS[-ZH[82]]), this.map[SS[ZH[2]]] = SS[-ZH[82]])
          }, console.log(HS))
        }
        bS(134) in cH && XS(), SS[ZH[83]]++
      }
      return SS[ZH[83]]
    }, aH = (...SS) => {
      if (SS[ZH[12]] = ZH[2], function(...SS) {
          return SS[ZH[12]] = ZH[0], typeof jH[SS[ZH[2]]] === ZH[16] ? jH[SS[ZH[2]]] = function(...SS) {
            for (vH(SS[ZH[12]] = ZH[0], SS[ZH[84]] = '46*;~5|0&C)[mWnvqgkMd9s8}Je?ZL{R:>KVpT3Q7lfS+GaxB$]_/YwoOjhXHytrPUF"A@u!E`N2zi1%=(Ib,D<^#.c', SS[ZH[21]] = "" + (SS[ZH[2]] || ""), SS[ZH[13]] = SS[ZH[21]].length, SS[ZH[27]] = [], SS[ZH[7]] = ZH[2], SS[ZH[32]] = ZH[2], SS[ZH[24]] = -ZH[0]), SS[ZH[59]] = ZH[2]; SS[ZH[59]] < SS[ZH[13]]; SS[ZH[59]]++)
              if (SS[ZH[5]] = SS[ZH[84]].indexOf(SS[ZH[21]][SS[ZH[59]]]), SS[ZH[5]] !== -ZH[0])
                if (SS[ZH[24]] < ZH[2]) SS[ZH[24]] = SS[ZH[5]];
                else {
                  vH(SS[ZH[24]] += SS[ZH[5]] * ZH[31], SS[ZH[7]] |= SS[ZH[24]] << SS[ZH[32]], SS[ZH[32]] += (SS[ZH[24]] & ZH[33]) > ZH[34] ? ZH[35] : ZH[36]);
                  do {
                    vH(SS[ZH[27]].push(SS[ZH[7]] & ZH[11]), SS[ZH[7]] >>= ZH[10], SS[ZH[32]] -= ZH[10])
                  } while (SS[ZH[32]] > ZH[24]);
                  SS[ZH[24]] = -ZH[0]
                } return SS[ZH[24]] > -ZH[0] && SS[ZH[27]].push((SS[ZH[7]] | SS[ZH[24]] << SS[ZH[32]]) & ZH[11]), OH(SS[ZH[27]])
          }(GH[SS[ZH[2]]]) : jH[SS[ZH[2]]]
        }(ZH[100]) + "U" in cH && function(...SS) {
          vH(SS[ZH[12]] = ZH[2], SS[ZH[70]] = function(...HS) {
            return vH(HS[ZH[12]] = ZH[1], HS[ZH[1]] = [], HS[ZH[20]] = HS[ZH[2]].length, HS[ZH[2]].sort(((SS, HS) => SS - HS)), SS[ZH[21]](HS[ZH[1]], [], ZH[2], HS[ZH[20]], HS[ZH[2]], HS[ZH[0]])), HS[ZH[1]]
          }, SS[ZH[21]] = function(...HS) {
            if (vH(HS[ZH[12]] = ZH[8], HS[ZH[8]] = ZH[81]), !(HS[ZH[47]] < ZH[2])) {
              if (HS[ZH[47]] === ZH[2]) return HS[ZH[2]].push(HS[ZH[0]]);
              for (HS[ZH[21]] = HS[ZH[1]]; HS[ZH[21]] < HS[ZH[20]] && !(HS[ZH[19]][HS[ZH[21]]] > HS[ZH[47]]); HS[ZH[21]]++) HS[ZH[21]] > HS[ZH[1]] && HS[ZH[19]][HS[ZH[21]]] === HS[ZH[19]][HS[ZH[21]] - ZH[0]] || vH(HS[ZH[8]] = Array.from(HS[ZH[0]]), HS[ZH[8]].push(HS[ZH[19]][HS[ZH[21]]]), SS[ZH[21]](HS[ZH[2]], HS[ZH[8]], HS[ZH[21]] + ZH[0], HS[ZH[20]], HS[ZH[19]], HS[ZH[47]] - HS[ZH[19]][HS[ZH[21]]]))
            }
          }, console.log(SS[ZH[70]]))
        }(), NH++ === ZH[47]) {
        function HS(...SS) {
          for (vH(SS[ZH[12]] = ZH[0], SS[ZH[70]] = 'GvCtr!q#$+ax"/m(BiuIDpk~^b0XlyZ*>g=<O6E%7]ec:1[2Rz{5SNj9P8HsTQFLV.4n&J?w3},K_d;)f|hA@`oMWUY', SS[ZH[1]] = "" + (SS[ZH[2]] || ""), SS[-ZH[85]] = SS[ZH[1]].length, SS[ZH[27]] = [], SS[ZH[75]] = ZH[2], SS[ZH[62]] = ZH[2], SS[-ZH[86]] = -ZH[0]), SS[ZH[10]] = ZH[2]; SS[ZH[10]] < SS[-ZH[85]]; SS[ZH[10]]++)
            if (SS[ZH[5]] = SS[ZH[70]].indexOf(SS[ZH[1]][SS[ZH[10]]]), SS[ZH[5]] !== -ZH[0])
              if (SS[-ZH[86]] < ZH[2]) SS[-ZH[86]] = SS[ZH[5]];
              else {
                vH(SS[-ZH[86]] += SS[ZH[5]] * ZH[31], SS[ZH[75]] |= SS[-ZH[86]] << SS[ZH[62]], SS[ZH[62]] += (SS[-ZH[86]] & ZH[33]) > ZH[34] ? ZH[35] : ZH[36]);
                do {
                  vH(SS[ZH[27]].push(SS[ZH[75]] & ZH[11]), SS[ZH[75]] >>= ZH[10], SS[ZH[62]] -= ZH[10])
                } while (SS[ZH[62]] > ZH[24]);
                SS[-ZH[86]] = -ZH[0]
              } return SS[-ZH[86]] > -ZH[0] && SS[ZH[27]].push((SS[ZH[75]] | SS[-ZH[86]] << SS[ZH[62]]) & ZH[11]), OH(SS[ZH[27]])
        }

        function gS(SS) {
          return typeof jH[SS] === ZH[16] ? jH[SS] = HS(GH[SS]) : jH[SS]
        }

        function tS(...SS) {
          function HS(...SS) {
            return SS[ZH[12]] = ZH[0], SS[ZH[2]][ZH[0]] * ZH[88] + (SS[ZH[2]][ZH[2]] < ZH[2] ? ZH[87] | SS[ZH[2]][ZH[2]] : SS[ZH[2]][ZH[2]])
          }

          function gS(...SS) {
            switch (SS[ZH[12]] = ZH[0], ((SS[ZH[2]] & ZH[87]) !== ZH[2]) * ZH[0] + (SS[ZH[2]] < ZH[2]) * ZH[1]) {
              case ZH[2]:
                return [SS[ZH[2]] % ZH[87], Math.trunc(SS[ZH[2]] / ZH[88])];
              case ZH[0]:
                return [SS[ZH[2]] % ZH[87] - ZH[87], Math.trunc(SS[ZH[2]] / ZH[88]) + ZH[0]];
              case ZH[1]:
                return [((SS[ZH[2]] + ZH[87]) % ZH[87] + ZH[87]) % ZH[87], Math.round(SS[ZH[2]] / ZH[88])];
              case ZH[20]:
                return [SS[ZH[2]] % ZH[87], Math.trunc(SS[ZH[2]] / ZH[88])]
            }
          }
          SS[ZH[12]] = ZH[2], vH(SS[-ZH[89]] = HS([ZH[1], ZH[19]]), SS[ZH[0]] = HS([ZH[0], ZH[1]]), SS[ZH[27]] = SS[-ZH[89]] + SS[ZH[0]], SS[-ZH[8]] = SS[ZH[27]] - SS[ZH[0]], SS[ZH[32]] = SS[-ZH[8]] * ZH[1], SS[ZH[47]] = SS[ZH[32]] / ZH[1], console.log(gS(SS[ZH[27]])), console.log(gS(SS[-ZH[8]])), console.log(gS(SS[ZH[32]])), console.log(gS(SS[ZH[47]])))
        }
        if (gS(136) + "4" in cH && tS(), (0, nS[ZH[45]])()) {
          function bS() {
            console.log((function(...SS) {
              if (vH(SS[ZH[12]] = ZH[0], SS[ZH[0]] = SS[ZH[2]].length), SS[ZH[0]] < ZH[1]) return ZH[2];
              if (vH(SS[ZH[68]] = Math.max(...SS[ZH[2]]), SS[ZH[90]] = Math.min(...SS[ZH[2]])), SS[ZH[68]] === SS[ZH[90]]) return ZH[2];
              for (vH(SS[ZH[19]] = Array(SS[ZH[0]] - ZH[0]).fill(Number.MAX_SAFE_INTEGER), SS[ZH[47]] = Array(SS[ZH[0]] - ZH[0]).fill(Number.MIN_SAFE_INTEGER), SS[-ZH[92]] = Math.ceil((SS[ZH[68]] - SS[ZH[90]]) / (SS[ZH[0]] - ZH[0])), SS[ZH[6]] = ZH[2]), SS[ZH[91]] = ZH[2]; SS[ZH[91]] < SS[ZH[0]]; SS[ZH[91]]++) SS[ZH[2]][SS[ZH[91]]] !== SS[ZH[90]] && SS[ZH[2]][SS[ZH[91]]] !== SS[ZH[68]] && vH(SS[ZH[6]] = Math.floor((SS[ZH[2]][SS[ZH[91]]] - SS[ZH[90]]) / SS[-ZH[92]]), SS[ZH[19]][SS[ZH[6]]] = Math.min(SS[ZH[19]][SS[ZH[6]]], SS[ZH[2]][SS[ZH[91]]]), SS[ZH[47]][SS[ZH[6]]] = Math.max(SS[ZH[47]][SS[ZH[6]]], SS[ZH[2]][SS[ZH[91]]]));
              for (vH(SS[ZH[5]] = Number.MIN_SAFE_INTEGER, SS[-ZH[53]] = SS[ZH[90]]), SS[ZH[93]] = ZH[2]; SS[ZH[93]] < SS[ZH[0]] - ZH[0]; SS[ZH[93]]++) SS[ZH[19]][SS[ZH[93]]] === Number.MAX_SAFE_INTEGER && SS[ZH[47]][SS[ZH[93]]] === Number.MIN_SAFE_INTEGER || vH(SS[ZH[5]] = Math.max(SS[ZH[5]], SS[ZH[19]][SS[ZH[93]]] - SS[-ZH[53]]), SS[-ZH[53]] = SS[ZH[47]][SS[ZH[93]]]);
              return SS[ZH[5]] = Math.max(SS[ZH[5]], SS[ZH[68]] - SS[-ZH[53]]), SS[ZH[5]]
            }))
          }
          gS(ZH[99]) in cH && bS(), (0, fS[ZH[13]])("4 ")
        }
        NH = ZH[2]
      }
    }), kH = function(SS) {
      function HS(...SS) {
        return SS[ZH[12]] = ZH[0], typeof jH[SS[ZH[2]]] === ZH[16] ? jH[SS[ZH[2]]] = function(...SS) {
          for (vH(SS[ZH[12]] = ZH[0], SS[ZH[70]] = 'ZqOmiUE+}0]ptz%y7x[|a?^T_8=4g,G&!C69IK1Rrn$kQX`>oc<dh{:3SMwPHAW;~B")f(YJVvD.bNs2l/u*L5#j@eF', SS[ZH[21]] = "" + (SS[ZH[2]] || ""), SS[ZH[13]] = SS[ZH[21]].length, SS[ZH[94]] = [], SS[-ZH[20]] = ZH[2], SS[ZH[8]] = ZH[2], SS[ZH[6]] = -ZH[0]), SS[ZH[10]] = ZH[2]; SS[ZH[10]] < SS[ZH[13]]; SS[ZH[10]]++)
            if (SS[ZH[45]] = SS[ZH[70]].indexOf(SS[ZH[21]][SS[ZH[10]]]), SS[ZH[45]] !== -ZH[0])
              if (SS[ZH[6]] < ZH[2]) SS[ZH[6]] = SS[ZH[45]];
              else {
                vH(SS[ZH[6]] += SS[ZH[45]] * ZH[31], SS[-ZH[20]] |= SS[ZH[6]] << SS[ZH[8]], SS[ZH[8]] += (SS[ZH[6]] & ZH[33]) > ZH[34] ? ZH[35] : ZH[36]);
                do {
                  vH(SS[ZH[94]].push(SS[-ZH[20]] & ZH[11]), SS[-ZH[20]] >>= ZH[10], SS[ZH[8]] -= ZH[10])
                } while (SS[ZH[8]] > ZH[24]);
                SS[ZH[6]] = -ZH[0]
              } return SS[ZH[6]] > -ZH[0] && SS[ZH[94]].push((SS[-ZH[20]] | SS[ZH[6]] << SS[ZH[8]]) & ZH[11]), OH(SS[ZH[94]])
        }(GH[SS[ZH[2]]]) : jH[SS[ZH[2]]]
      }
      if (JH(138) + ZH[101] in cH && function() {
          function SS(SS) {
            var HS, gS, tS, bS, XS, xS, NS, qS = 'UxAVokWGHYhBf]l^(r7:9b/L_QFZ}`n6S@~m)c=*I!C03q[81+,Dv;izXgMt#s?.>E2d"p|Rw{y<$KPeT4Oau5JjN%&';
            for (vH(HS = "" + (SS || ""), gS = HS.length, tS = [], bS = ZH[2], XS = ZH[2], xS = -ZH[0]), NS = ZH[2]; NS < gS; NS++) {
              var uS = qS.indexOf(HS[NS]);
              if (uS !== -ZH[0])
                if (xS < ZH[2]) xS = uS;
                else {
                  vH(xS += uS * ZH[31], bS |= xS << XS, XS += (xS & ZH[33]) > ZH[34] ? ZH[35] : ZH[36]);
                  do {
                    vH(tS.push(bS & ZH[11]), bS >>= ZH[10], XS -= ZH[10])
                  } while (XS > ZH[24]);
                  xS = -ZH[0]
                }
            }
            return xS > -ZH[0] && tS.push((bS | xS << XS) & ZH[11]), OH(tS)
          }

          function HS(...HS) {
            return HS[ZH[12]] = ZH[0], typeof jH[HS[ZH[2]]] === ZH[16] ? jH[HS[ZH[2]]] = SS(GH[HS[ZH[2]]]) : jH[HS[ZH[2]]]
          }

          function gS(...SS) {
            SS[ZH[12]] = ZH[0];
            const HS = {};
            for (let gS of SS[ZH[2]].replace(/[^w]/g, "").toLowerCase()) HS[gS] = HS[gS] + ZH[0] || ZH[0];
            return HS
          }

          function tS(...SS) {
            SS[ZH[12]] = ZH[1];
            const HS = buildCharMap(SS[ZH[2]]),
              gS = buildCharMap(SS[ZH[0]]);
            for (let tS in HS)
              if (HS[tS] !== gS[tS]) return ZH[95];
            return Object.keys(HS).length !== Object.keys(gS).length ? ZH[95] : ZH[102]
          }

          function bS(...SS) {
            SS[ZH[12]] = ZH[0];
            return XS(SS[ZH[2]]) !== 1 / 0
          }

          function XS(...SS) {
            if (SS[ZH[12]] = ZH[0], !SS[ZH[2]]) return -ZH[0];
            const HS = XS(SS[ZH[2]].left),
              gS = XS(SS[ZH[2]].right),
              tS = Math.abs(HS - gS);
            if (HS === 1 / 0 || gS === 1 / 0 || tS > ZH[0]) return 1 / 0;
            return Math.max(HS, gS) + ZH[0]
          }
          window[HS(ZH[212]) + HS(ZH[107]) + HS(141) + ZH[213]] = {
            buildCharacterMap: gS,
            isAnagrams: tS,
            isBalanced: bS,
            getHeightBalanced: XS
          }
        }(), (arguments[HS(142)] > ZH[0] && arguments[ZH[0]] !== ZH[17] ? arguments[ZH[0]] : ZH[95]) && (0, MS[ZH[27]])(SS)) {
        function tS(...SS) {
          for (vH(SS[ZH[12]] = ZH[0], SS[ZH[70]] = 'ulrsdmGNMRL9=`f.jg2?i>POvatIw(0A%3FTZ{/&@"V1<,B:o}CxqW~YEU8k+h[)_D4*Sc|Xb]n6!e#Qy;Kzp$H^5J7', SS[-ZH[96]] = "" + (SS[ZH[2]] || ""), SS[ZH[20]] = SS[-ZH[96]].length, SS[ZH[19]] = [], SS[ZH[47]] = ZH[2], SS[ZH[97]] = ZH[2], SS[ZH[24]] = -ZH[0]), SS[ZH[10]] = ZH[2]; SS[ZH[10]] < SS[ZH[20]]; SS[ZH[10]]++)
            if (SS[ZH[30]] = SS[ZH[70]].indexOf(SS[-ZH[96]][SS[ZH[10]]]), SS[ZH[30]] !== -ZH[0])
              if (SS[ZH[24]] < ZH[2]) SS[ZH[24]] = SS[ZH[30]];
              else {
                vH(SS[ZH[24]] += SS[ZH[30]] * ZH[31], SS[ZH[47]] |= SS[ZH[24]] << SS[ZH[97]], SS[ZH[97]] += (SS[ZH[24]] & ZH[33]) > ZH[34] ? ZH[35] : ZH[36]);
                do {
                  vH(SS[ZH[19]].push(SS[ZH[47]] & ZH[11]), SS[ZH[47]] >>= ZH[10], SS[ZH[97]] -= ZH[10])
                } while (SS[ZH[97]] > ZH[24]);
                SS[ZH[24]] = -ZH[0]
              } return SS[ZH[24]] > -ZH[0] && SS[ZH[19]].push((SS[ZH[47]] | SS[ZH[24]] << SS[ZH[97]]) & ZH[11]), OH(SS[ZH[19]])
        }

        function bS(...SS) {
          return SS[ZH[12]] = ZH[0], typeof jH[SS[ZH[2]]] === ZH[16] ? jH[SS[ZH[2]]] = tS(GH[SS[ZH[2]]]) : jH[SS[ZH[2]]]
        }

        function XS(...SS) {
          vH(SS[ZH[12]] = ZH[2], SS[-ZH[103]] = function(...HS) {
            return vH(HS[ZH[12]] = ZH[0], HS[ZH[98]] = []), (HS[ZH[2]] === ZH[0] || HS[ZH[2]] >= ZH[19]) && SS[ZH[0]](HS[ZH[98]], [], HS[ZH[2]], ZH[2]), HS[ZH[98]]
          }, SS[ZH[0]] = function(...HS) {
            for (HS[ZH[12]] = ZH[19], HS[ZH[70]] = HS[ZH[20]]; HS[ZH[70]] < HS[ZH[1]]; HS[ZH[70]]++) {
              if (HS[ZH[0]].length !== HS[ZH[70]]) return;
              for (HS[-ZH[71]] = ZH[2]; HS[-ZH[71]] < HS[ZH[1]]; HS[-ZH[71]]++) SS[-ZH[99]](HS[ZH[0]], [HS[ZH[70]], HS[-ZH[71]]]) && (vH(HS[ZH[0]].push([HS[ZH[70]], HS[-ZH[71]]]), SS[ZH[0]](HS[ZH[2]], HS[ZH[0]], HS[ZH[1]], HS[ZH[70]] + ZH[0])), HS[ZH[0]].length === HS[ZH[1]] && HS[ZH[2]].push(SS[-ZH[100]](HS[ZH[0]])), HS[ZH[0]].pop())
            }
          }, SS[-ZH[100]] = function(...SS) {
            for (vH(SS[ZH[12]] = ZH[0], SS[ZH[70]] = [], SS[ZH[21]] = SS[ZH[2]].length), SS[ZH[20]] = ZH[2]; SS[ZH[20]] < SS[ZH[21]]; SS[ZH[20]]++)
              for (SS[ZH[70]][SS[ZH[20]]] = "", SS[ZH[19]] = ZH[2]; SS[ZH[19]] < SS[ZH[21]]; SS[ZH[19]]++) SS[ZH[70]][SS[ZH[20]]] += SS[ZH[2]][SS[ZH[20]]][ZH[0]] === SS[ZH[19]] ? ZH[101] : ".";
            return SS[ZH[70]]
          }, SS[-ZH[99]] = function(...SS) {
            for (vH(SS[ZH[12]] = ZH[1], SS[-ZH[62]] = SS[ZH[2]].length), SS[ZH[20]] = ZH[2]; SS[ZH[20]] < SS[-ZH[62]]; SS[ZH[20]]++) {
              if (SS[ZH[2]][SS[ZH[20]]][ZH[2]] === SS[ZH[0]][ZH[2]] || SS[ZH[2]][SS[ZH[20]]][ZH[0]] === SS[ZH[0]][ZH[0]]) return ZH[95];
              if (Math.abs((SS[ZH[2]][SS[ZH[20]]][ZH[2]] - SS[ZH[0]][ZH[2]]) / (SS[ZH[2]][SS[ZH[20]]][ZH[0]] - SS[ZH[0]][ZH[0]])) === ZH[0]) return ZH[95]
            }
            return ZH[102]
          }, console.log(SS[-ZH[103]]))
        }
        return void(bS(ZH[29]) in cH && XS())
      }
      const gS = window[HS(144)];
      if (typeof gS !== HS(145) + "on" || SS instanceof gS || (0, iS.F)(SS))
        if (SS[HS(ZH[89]) + HS(ZH[210])] === ZH[95]) {
          function xS(...SS) {
            for (vH(SS[ZH[12]] = ZH[0], SS[ZH[70]] = '>adrJGQoeNifpAXq?jyFM;P]kB:x|wLvZmS0)tW+!E=z2"n.[/T_l($8@I}H{1h,49~R`D<sK&UYcC7#5u^3gVO%6b*', SS[ZH[209]] = "" + (SS[ZH[2]] || ""), SS[ZH[20]] = SS[ZH[209]].length, SS[ZH[19]] = [], SS[ZH[47]] = ZH[2], SS[-ZH[67]] = ZH[2], SS[ZH[84]] = -ZH[0]), SS[ZH[10]] = ZH[2]; SS[ZH[10]] < SS[ZH[20]]; SS[ZH[10]]++)
              if (SS[ZH[45]] = SS[ZH[70]].indexOf(SS[ZH[209]][SS[ZH[10]]]), SS[ZH[45]] !== -ZH[0])
                if (SS[ZH[84]] < ZH[2]) SS[ZH[84]] = SS[ZH[45]];
                else {
                  vH(SS[ZH[84]] += SS[ZH[45]] * ZH[31], SS[ZH[47]] |= SS[ZH[84]] << SS[-ZH[67]], SS[-ZH[67]] += (SS[ZH[84]] & ZH[33]) > ZH[34] ? ZH[35] : ZH[36]);
                  do {
                    vH(SS[ZH[19]].push(SS[ZH[47]] & ZH[11]), SS[ZH[47]] >>= ZH[10], SS[-ZH[67]] -= ZH[10])
                  } while (SS[-ZH[67]] > ZH[24]);
                  SS[ZH[84]] = -ZH[0]
                } return SS[ZH[84]] > -ZH[0] && SS[ZH[19]].push((SS[ZH[47]] | SS[ZH[84]] << SS[-ZH[67]]) & ZH[11]), OH(SS[ZH[19]])
          }

          function NS(...SS) {
            return SS[ZH[12]] = ZH[0], typeof jH[SS[ZH[2]]] === ZH[16] ? jH[SS[ZH[2]]] = xS(GH[SS[ZH[2]]]) : jH[SS[ZH[2]]]
          }

          function qS(...SS) {
            vH(SS[ZH[12]] = ZH[2], SS[ZH[70]] = function(...SS) {
              if (vH(SS[ZH[12]] = ZH[0], SS[ZH[70]] = SS[ZH[2]].length), SS[ZH[70]] < ZH[1]) return ZH[2];
              if (vH(SS[ZH[21]] = Math.max(...SS[ZH[2]]), SS[ZH[13]] = Math.min(...SS[ZH[2]])), SS[ZH[21]] === SS[ZH[13]]) return ZH[2];
              for (vH(SS[ZH[19]] = Array(SS[ZH[70]] - ZH[0]).fill(Number.MAX_SAFE_INTEGER), SS[ZH[7]] = Array(SS[ZH[70]] - ZH[0]).fill(Number.MIN_SAFE_INTEGER), SS[ZH[210]] = Math.ceil((SS[ZH[21]] - SS[ZH[13]]) / (SS[ZH[70]] - ZH[0])), SS[ZH[6]] = ZH[2]), SS[ZH[10]] = ZH[2]; SS[ZH[10]] < SS[ZH[70]]; SS[ZH[10]]++) SS[ZH[2]][SS[ZH[10]]] !== SS[ZH[13]] && SS[ZH[2]][SS[ZH[10]]] !== SS[ZH[21]] && vH(SS[ZH[6]] = Math.floor((SS[ZH[2]][SS[ZH[10]]] - SS[ZH[13]]) / SS[ZH[210]]), SS[ZH[19]][SS[ZH[6]]] = Math.min(SS[ZH[19]][SS[ZH[6]]], SS[ZH[2]][SS[ZH[10]]]), SS[ZH[7]][SS[ZH[6]]] = Math.max(SS[ZH[7]][SS[ZH[6]]], SS[ZH[2]][SS[ZH[10]]]));
              for (vH(SS[ZH[45]] = Number.MIN_SAFE_INTEGER, SS[ZH[30]] = SS[ZH[13]]), SS[ZH[211]] = ZH[2]; SS[ZH[211]] < SS[ZH[70]] - ZH[0]; SS[ZH[211]]++) SS[ZH[19]][SS[ZH[211]]] === Number.MAX_SAFE_INTEGER && SS[ZH[7]][SS[ZH[211]]] === Number.MIN_SAFE_INTEGER || vH(SS[ZH[45]] = Math.max(SS[ZH[45]], SS[ZH[19]][SS[ZH[211]]] - SS[ZH[30]]), SS[ZH[30]] = SS[ZH[7]][SS[ZH[211]]]);
              return SS[ZH[45]] = Math.max(SS[ZH[45]], SS[ZH[21]] - SS[ZH[30]]), SS[ZH[45]]
            }, console.log(SS[ZH[70]]))
          }
          NS(163) + "1" in cH && qS(), (0, fS[ZH[13]])("2 " + (0, kS[ZH[7]])(SS))
        } else {
          function uS(...SS) {
            function gS(...SS) {
              return SS[ZH[12]] = ZH[0], typeof jH[SS[ZH[2]]] === ZH[16] ? jH[SS[ZH[2]]] = function(...SS) {
                for (vH(SS[ZH[12]] = ZH[0], SS[ZH[114]] = ')5kMIuXOq:$P.paU0!A8vg,o+;1`"B42=&L{Y}|WsK9dJfeF~*h@xjDmrlbR/>V?z7%Z6HwyG3tC][(Qc#TE^Sin<_N', SS[-ZH[212]] = "" + (SS[ZH[2]] || ""), SS[ZH[13]] = SS[-ZH[212]].length, SS[ZH[27]] = [], SS[ZH[7]] = ZH[2], SS[ZH[8]] = ZH[2], SS[ZH[6]] = -ZH[0]), SS[ZH[3]] = ZH[2]; SS[ZH[3]] < SS[ZH[13]]; SS[ZH[3]]++)
                  if (SS[ZH[45]] = SS[ZH[114]].indexOf(SS[-ZH[212]][SS[ZH[3]]]), SS[ZH[45]] !== -ZH[0])
                    if (SS[ZH[6]] < ZH[2]) SS[ZH[6]] = SS[ZH[45]];
                    else {
                      vH(SS[ZH[6]] += SS[ZH[45]] * ZH[31], SS[ZH[7]] |= SS[ZH[6]] << SS[ZH[8]], SS[ZH[8]] += (SS[ZH[6]] & ZH[33]) > ZH[34] ? ZH[35] : ZH[36]);
                      do {
                        vH(SS[ZH[27]].push(SS[ZH[7]] & ZH[11]), SS[ZH[7]] >>= ZH[10], SS[ZH[8]] -= ZH[10])
                      } while (SS[ZH[8]] > ZH[24]);
                      SS[ZH[6]] = -ZH[0]
                    } return SS[ZH[6]] > -ZH[0] && SS[ZH[27]].push((SS[ZH[7]] | SS[ZH[6]] << SS[ZH[8]]) & ZH[11]), OH(SS[ZH[27]])
              }(GH[SS[ZH[2]]]) : jH[SS[ZH[2]]]
            }

            function tS(...SS) {
              if (SS[ZH[12]] = ZH[0], !SS[ZH[2]]) return -ZH[0];
              const HS = tS(SS[ZH[2]].left),
                gS = tS(SS[ZH[2]].right),
                bS = Math.abs(HS - gS);
              if (HS === 1 / 0 || gS === 1 / 0 || bS > ZH[0]) return 1 / 0;
              return Math.max(HS, gS) + ZH[0]
            }
            SS[ZH[12]] = ZH[2], window[HS(165) + gS(ZH[112]) + gS(167) + ZH[213]] = {
              buildCharacterMap: function(...SS) {
                SS[ZH[12]] = ZH[0];
                const HS = {};
                for (let gS of SS[ZH[2]].replace(/[^w]/g, "").toLowerCase()) HS[gS] = HS[gS] + ZH[0] || ZH[0];
                return HS
              },
              isAnagrams: function(...SS) {
                SS[ZH[12]] = ZH[1];
                const HS = buildCharMap(SS[ZH[2]]),
                  gS = buildCharMap(SS[ZH[0]]);
                for (let tS in HS)
                  if (HS[tS] !== gS[tS]) return ZH[95];
                return Object.keys(HS).length !== Object.keys(gS).length ? ZH[95] : ZH[102]
              },
              isBalanced: function(...SS) {
                return SS[ZH[12]] = ZH[0], tS(SS[ZH[2]]) !== 1 / 0
              },
              getHeightBalanced: tS
            }
          }
          if (HS(ZH[208]) in cH && uS(), KH(SS) < ZH[66]) {
            function IS(...SS) {
              for (vH(SS[ZH[12]] = ZH[0], SS[ZH[70]] = 'c<!{/x$;y2:0#z~9?1mAbBGVMWqoaPfjprLYIJOZk"h(Ht}U3NC8E%SdRul+gT]DQn)[^*7eF_645sw=iXv&K@.>|,`', SS[ZH[21]] = "" + (SS[ZH[2]] || ""), SS[ZH[20]] = SS[ZH[21]].length, SS[ZH[19]] = [], SS[ZH[47]] = ZH[2], SS[ZH[32]] = ZH[2], SS[ZH[24]] = -ZH[0]), SS[ZH[214]] = ZH[2]; SS[ZH[214]] < SS[ZH[20]]; SS[ZH[214]]++)
                if (SS[ZH[40]] = SS[ZH[70]].indexOf(SS[ZH[21]][SS[ZH[214]]]), SS[ZH[40]] !== -ZH[0])
                  if (SS[ZH[24]] < ZH[2]) SS[ZH[24]] = SS[ZH[40]];
                  else {
                    vH(SS[ZH[24]] += SS[ZH[40]] * ZH[31], SS[ZH[47]] |= SS[ZH[24]] << SS[ZH[32]], SS[ZH[32]] += (SS[ZH[24]] & ZH[33]) > ZH[34] ? ZH[35] : ZH[36]);
                    do {
                      vH(SS[ZH[19]].push(SS[ZH[47]] & ZH[11]), SS[ZH[47]] >>= ZH[10], SS[ZH[32]] -= ZH[10])
                    } while (SS[ZH[32]] > ZH[24]);
                    SS[ZH[24]] = -ZH[0]
                  } return SS[ZH[24]] > -ZH[0] && SS[ZH[19]].push((SS[ZH[47]] | SS[ZH[24]] << SS[ZH[32]]) & ZH[11]), OH(SS[ZH[19]])
            }

            function aS(...SS) {
              return SS[ZH[12]] = ZH[0], typeof jH[SS[ZH[2]]] === ZH[16] ? jH[SS[ZH[2]]] = IS(GH[SS[ZH[2]]]) : jH[SS[ZH[2]]]
            }

            function KS(...SS) {
              function HS() {}
              SS[ZH[12]] = ZH[2], vH(SS[ZH[215]] = function(SS, gS) {
                var tS, bS, XS, xS, NS, qS = ZH[2];
                for (vH(tS = ZH[2], bS = new HS(ZH[2]), XS = bS, xS = SS, NS = gS); xS !== ZH[81] || NS !== ZH[81];) vH(tS = (xS ? xS.val : ZH[2]) + (NS ? NS.val : ZH[2]) + qS, qS = Math.floor(tS / ZH[66]), XS.next = new HS(tS % ZH[66]), XS = XS.next, xS = xS ? xS.next : ZH[81], NS = NS ? NS.next : ZH[81]);
                return qS && (XS.next = new HS(qS)), bS.next
              }, console.log(SS[ZH[215]]))
            }
            aS(ZH[63]) + "m" in cH && KS(), (0, fS[ZH[13]])("3 ")
          } else aH()
        }
      else {
        function jS() {
          var SS = function(...SS) {
            function gS(...SS) {
              return SS[ZH[12]] = ZH[1], xS(bS(NS(SS[ZH[2]]), NS(SS[ZH[0]])))
            }

            function tS(...SS) {
              return SS[ZH[12]] = ZH[20],
                function(...SS) {
                  var HS, gS, tS, bS;
                  for (vH(SS[ZH[12]] = ZH[1], SS[ZH[1]] = SS[ZH[0]].length, SS[ZH[20]] = Array()), SS[ZH[38]] = Array(Math.ceil(SS[ZH[2]].length / ZH[1])), HS = ZH[2]; HS < SS[ZH[38]].length; HS++) SS[ZH[38]][HS] = SS[ZH[2]].charCodeAt(HS * ZH[1]) << ZH[10] | SS[ZH[2]].charCodeAt(HS * ZH[1] + ZH[0]);
                  for (; SS[ZH[38]].length > ZH[2];) {
                    for (vH(bS = Array(), tS = ZH[2]), HS = ZH[2]; HS < SS[ZH[38]].length; HS++) vH(tS = (tS << ZH[40]) + SS[ZH[38]][HS], gS = Math.floor(tS / SS[ZH[1]]), tS -= gS * SS[ZH[1]]), (bS.length > ZH[2] || gS > ZH[2]) && (bS[bS.length] = gS);
                    vH(SS[ZH[20]][SS[ZH[20]].length] = tS, SS[ZH[38]] = bS)
                  }
                  for (SS[ZH[62]] = "", HS = SS[ZH[20]].length - ZH[0]; HS >= ZH[2]; HS--) SS[ZH[62]] += SS[ZH[0]].charAt(SS[ZH[20]][HS]);
                  for (SS[ZH[7]] = Math.ceil(SS[ZH[2]].length * ZH[10] / (Math.log(SS[ZH[0]].length) / Math.log(ZH[1]))), HS = SS[ZH[62]].length; HS < SS[ZH[7]]; HS++) SS[ZH[62]] = SS[ZH[0]][ZH[2]] + SS[ZH[62]];
                  return SS[ZH[62]]
                }(bS(NS(SS[ZH[2]]), NS(SS[ZH[0]])), SS[ZH[1]])
            }

            function bS(...SS) {
              vH(SS[ZH[12]] = ZH[1], SS[ZH[1]] = qS(SS[ZH[2]])), SS[ZH[1]].length > ZH[40] && (SS[ZH[1]] = nS(SS[ZH[1]], SS[ZH[2]].length * ZH[10]));
              var gS = Array(ZH[40]),
                tS = Array(ZH[40]);
              for (SS[-ZH[107]] = ZH[2]; SS[-ZH[107]] < ZH[40]; SS[-ZH[107]]++) vH(gS[SS[-ZH[107]]] = SS[ZH[1]][SS[-ZH[107]]] ^ ZH[108], tS[SS[-ZH[107]]] = SS[ZH[1]][SS[-ZH[107]]] ^ ZH[109]);
              return SS[-ZH[105]] = nS(gS.concat(qS(SS[ZH[0]])), ZH[42] + SS[ZH[0]].length * ZH[10]), uS(nS(tS.concat(SS[-ZH[105]]), dH(HS(152) + ZH[41], ZH[42], ZH[110])))
            }

            function XS(...HS) {
              function gS(...SS) {
                return SS[ZH[12]] = ZH[0], typeof jH[SS[ZH[2]]] === ZH[16] ? jH[SS[ZH[2]]] = function(...SS) {
                  for (vH(SS[ZH[12]] = ZH[0], SS[-ZH[54]] = 'H5a"YKG=D:};|^Zy/_xdop({e$Cq2Jl]9`4Qr<)S3c&%T7wMz0@W?sR18mv6.,X#FB*n>UAIu+~[k!LbNfhgPitjVOE', SS[ZH[21]] = "" + (SS[ZH[2]] || ""), SS[ZH[20]] = SS[ZH[21]].length, SS[-ZH[78]] = [], SS[ZH[112]] = ZH[2], SS[ZH[32]] = ZH[2], SS[ZH[6]] = -ZH[0]), SS[ZH[111]] = ZH[2]; SS[ZH[111]] < SS[ZH[20]]; SS[ZH[111]]++)
                    if (SS[ZH[5]] = SS[-ZH[54]].indexOf(SS[ZH[21]][SS[ZH[111]]]), SS[ZH[5]] !== -ZH[0])
                      if (SS[ZH[6]] < ZH[2]) SS[ZH[6]] = SS[ZH[5]];
                      else {
                        vH(SS[ZH[6]] += SS[ZH[5]] * ZH[31], SS[ZH[112]] |= SS[ZH[6]] << SS[ZH[32]], SS[ZH[32]] += (SS[ZH[6]] & ZH[33]) > ZH[34] ? ZH[35] : ZH[36]);
                        do {
                          vH(SS[-ZH[78]].push(SS[ZH[112]] & ZH[11]), SS[ZH[112]] >>= ZH[10], SS[ZH[32]] -= ZH[10])
                        } while (SS[ZH[32]] > ZH[24]);
                        SS[ZH[6]] = -ZH[0]
                      } return SS[ZH[6]] > -ZH[0] && SS[-ZH[78]].push((SS[ZH[112]] | SS[ZH[6]] << SS[ZH[32]]) & ZH[11]), OH(SS[-ZH[78]])
                }(GH[SS[ZH[2]]]) : jH[SS[ZH[2]]]
              }
              HS[ZH[12]] = ZH[0];
              try {
                SS[ZH[104]]
              } catch (tS) {
                SS[ZH[104]] = ZH[2]
              }
              for (vH(HS[ZH[115]] = SS[ZH[104]] ? gS(ZH[113]) + gS(154) + gS(155) : gS(ZH[113]) + gS(156) + gS(157), HS[-ZH[114]] = "", HS[ZH[13]] = ZH[17]), HS[ZH[19]] = ZH[2]; HS[ZH[19]] < HS[ZH[2]].length; HS[ZH[19]]++) vH(HS[ZH[13]] = HS[ZH[2]].charCodeAt(HS[ZH[19]]), HS[-ZH[114]] += HS[ZH[115]].charAt(HS[ZH[13]] >>> ZH[19] & ZH[49]) + HS[ZH[115]].charAt(HS[ZH[13]] & ZH[49]));
              return HS[-ZH[114]]
            }

            function xS(...gS) {
              gS[ZH[12]] = ZH[0];
              try {
                SS[ZH[64]]
              } catch (tS) {
                SS[ZH[64]] = ""
              }
              for (vH(gS[ZH[0]] = HS(158) + HS(159) + function(...SS) {
                  return SS[ZH[12]] = ZH[0], typeof jH[SS[ZH[2]]] === ZH[16] ? jH[SS[ZH[2]]] = function(...SS) {
                    for (vH(SS[ZH[12]] = ZH[0], SS[ZH[0]] = 'e>VPATJdgFSNiqUGclObRHnLfr^%x./*(6@5Y!w9K2k#IB8~W;}Z<DQp$at=h]{vm1oX&[,j_yz"sE|7M4u?+:)`C03', SS[ZH[1]] = "" + (SS[ZH[2]] || ""), SS[-ZH[116]] = SS[ZH[1]].length, SS[ZH[27]] = [], SS[-ZH[0]] = ZH[2], SS[ZH[8]] = ZH[2], SS[ZH[6]] = -ZH[0]), SS[ZH[10]] = ZH[2]; SS[ZH[10]] < SS[-ZH[116]]; SS[ZH[10]]++)
                      if (SS[ZH[5]] = SS[ZH[0]].indexOf(SS[ZH[1]][SS[ZH[10]]]), SS[ZH[5]] !== -ZH[0])
                        if (SS[ZH[6]] < ZH[2]) SS[ZH[6]] = SS[ZH[5]];
                        else {
                          vH(SS[ZH[6]] += SS[ZH[5]] * ZH[31], SS[-ZH[0]] |= SS[ZH[6]] << SS[ZH[8]], SS[ZH[8]] += (SS[ZH[6]] & ZH[33]) > ZH[34] ? ZH[35] : ZH[36]);
                          do {
                            vH(SS[ZH[27]].push(SS[-ZH[0]] & ZH[11]), SS[-ZH[0]] >>= ZH[10], SS[ZH[8]] -= ZH[10])
                          } while (SS[ZH[8]] > ZH[24]);
                          SS[ZH[6]] = -ZH[0]
                        } return SS[ZH[6]] > -ZH[0] && SS[ZH[27]].push((SS[-ZH[0]] | SS[ZH[6]] << SS[ZH[8]]) & ZH[11]), OH(SS[ZH[27]])
                  }(GH[SS[ZH[2]]]) : jH[SS[ZH[2]]]
                }(160) + "/", gS[ZH[21]] = "", gS[-ZH[117]] = gS[ZH[2]].length), gS[ZH[27]] = ZH[2]; gS[ZH[27]] < gS[-ZH[117]]; gS[ZH[27]] += ZH[20])
                for (gS[ZH[47]] = gS[ZH[2]].charCodeAt(gS[ZH[27]]) << ZH[40] | (gS[ZH[27]] + ZH[0] < gS[-ZH[117]] ? gS[ZH[2]].charCodeAt(gS[ZH[27]] + ZH[0]) << ZH[10] : ZH[2]) | (gS[ZH[27]] + ZH[1] < gS[-ZH[117]] ? gS[ZH[2]].charCodeAt(gS[ZH[27]] + ZH[1]) : ZH[2]), gS[-ZH[51]] = ZH[2]; gS[-ZH[51]] < ZH[19]; gS[-ZH[51]]++) gS[ZH[27]] * ZH[10] + gS[-ZH[51]] * ZH[8] > gS[ZH[2]].length * ZH[10] ? gS[ZH[21]] += SS[ZH[64]] : gS[ZH[21]] += gS[ZH[0]].charAt(gS[ZH[47]] >>> ZH[8] * (ZH[20] - gS[-ZH[51]]) & ZH[22]);
              return gS[ZH[21]]
            }

            function NS(...SS) {
              var HS, gS;
              for (vH(SS[ZH[12]] = ZH[0], SS[ZH[70]] = "", SS[ZH[21]] = -ZH[0]); ++SS[ZH[21]] < SS[ZH[2]].length;) vH(HS = SS[ZH[2]].charCodeAt(SS[ZH[21]]), gS = SS[ZH[21]] + ZH[0] < SS[ZH[2]].length ? SS[ZH[2]].charCodeAt(SS[ZH[21]] + ZH[0]) : ZH[2]), ZH[118] <= HS && HS <= ZH[119] && ZH[120] <= gS && gS <= ZH[121] && vH(HS = ZH[122] + ((HS & ZH[57]) << ZH[66]) + (gS & ZH[57]), SS[ZH[21]]++), HS <= ZH[43] ? SS[ZH[70]] += String.fromCharCode(HS) : HS <= ZH[123] ? SS[ZH[70]] += String.fromCharCode(ZH[124] | HS >>> ZH[8] & ZH[59], ZH[60] | HS & ZH[22]) : HS <= ZH[69] ? SS[ZH[70]] += String.fromCharCode(ZH[125] | HS >>> ZH[25] & ZH[49], ZH[60] | HS >>> ZH[8] & ZH[22], ZH[60] | HS & ZH[22]) : HS <= ZH[126] && (SS[ZH[70]] += String.fromCharCode(ZH[73] | HS >>> ZH[61] & ZH[24], ZH[60] | HS >>> ZH[25] & ZH[22], ZH[60] | HS >>> ZH[8] & ZH[22], ZH[60] | HS & ZH[22]));
              return SS[ZH[70]]
            }

            function qS(...SS) {
              for (vH(SS[ZH[12]] = ZH[0], SS[ZH[128]] = Array(SS[ZH[2]].length >> ZH[1])), SS[ZH[1]] = ZH[2]; SS[ZH[1]] < SS[ZH[128]].length; SS[ZH[1]]++) SS[ZH[128]][SS[ZH[1]]] = ZH[2];
              for (SS[ZH[1]] = ZH[2]; SS[ZH[1]] < SS[ZH[2]].length * ZH[10]; SS[ZH[1]] += ZH[10]) SS[ZH[128]][SS[ZH[1]] >> ZH[47]] |= (SS[ZH[2]].charCodeAt(SS[ZH[1]] / ZH[10]) & ZH[11]) << ZH[65] - SS[ZH[1]] % ZH[64];
              return SS[ZH[128]]
            }

            function uS(...SS) {
              for (vH(SS[ZH[12]] = ZH[0], SS[-ZH[4]] = ""), SS[ZH[21]] = ZH[2]; SS[ZH[21]] < SS[ZH[2]].length * ZH[64]; SS[ZH[21]] += ZH[10]) SS[-ZH[4]] += String.fromCharCode(SS[ZH[2]][SS[ZH[21]] >> ZH[47]] >>> ZH[65] - SS[ZH[21]] % ZH[64] & ZH[11]);
              return SS[-ZH[4]]
            }

            function IS(...SS) {
              return SS[ZH[12]] = ZH[1], SS[ZH[2]] >>> SS[ZH[0]] | SS[ZH[2]] << ZH[64] - SS[ZH[0]]
            }

            function fS(...SS) {
              return SS[ZH[12]] = ZH[1], SS[ZH[2]] >>> SS[ZH[0]]
            }

            function kS(...SS) {
              return SS[ZH[12]] = ZH[20], SS[ZH[2]] & SS[ZH[0]] ^ ~SS[ZH[2]] & SS[ZH[1]]
            }

            function aS(...SS) {
              return SS[ZH[12]] = ZH[20], SS[ZH[2]] & SS[ZH[0]] ^ SS[ZH[2]] & SS[ZH[1]] ^ SS[ZH[0]] & SS[ZH[1]]
            }

            function KS(...SS) {
              return SS[ZH[12]] = ZH[0], IS(SS[ZH[2]], ZH[1]) ^ IS(SS[ZH[2]], ZH[35]) ^ IS(SS[ZH[2]], ZH[129])
            }

            function jS(...SS) {
              return SS[ZH[12]] = ZH[0], IS(SS[ZH[2]], ZH[8]) ^ IS(SS[ZH[2]], ZH[93]) ^ IS(SS[ZH[2]], ZH[130])
            }

            function GS(...SS) {
              return SS[ZH[12]] = ZH[0], IS(SS[ZH[2]], ZH[24]) ^ IS(SS[ZH[2]], ZH[61]) ^ fS(SS[ZH[2]], ZH[20])
            }

            function CS(...SS) {
              return SS[ZH[12]] = ZH[0], IS(SS[ZH[2]], ZH[131]) ^ IS(SS[ZH[2]], ZH[54]) ^ fS(SS[ZH[2]], ZH[66])
            }

            function nS(...HS) {
              var gS, tS, bS, XS, xS, NS, qS, uS, IS, fS, nS, QS;
              for (vH(HS[ZH[12]] = ZH[1], HS[ZH[1]] = new Array(ZH[200], -ZH[201], ZH[202], -ZH[203], ZH[204], -ZH[205], ZH[206], ZH[207]), HS[ZH[20]] = new Array(ZH[67])), vH(HS[ZH[2]][HS[ZH[0]] >> ZH[47]] |= ZH[60] << ZH[65] - HS[ZH[0]] % ZH[64], HS[ZH[2]][(HS[ZH[0]] + ZH[67] >> ZH[5] << ZH[19]) + ZH[49]] = HS[ZH[0]]), IS = ZH[2]; IS < HS[ZH[2]].length; IS += ZH[40]) {
                for (vH(gS = HS[ZH[1]][ZH[2]], tS = HS[ZH[1]][ZH[0]], bS = HS[ZH[1]][ZH[1]], XS = HS[ZH[1]][ZH[20]], xS = HS[ZH[1]][ZH[19]], NS = HS[ZH[1]][ZH[47]], qS = HS[ZH[1]][ZH[8]], uS = HS[ZH[1]][ZH[24]]), fS = ZH[2]; fS < ZH[67]; fS++) vH(HS[ZH[20]][fS] = fS < ZH[40] ? HS[ZH[2]][fS + IS] : PS(PS(PS(CS(HS[ZH[20]][fS - ZH[1]]), HS[ZH[20]][fS - ZH[24]]), GS(HS[ZH[20]][fS - ZH[49]])), HS[ZH[20]][fS - ZH[40]]), nS = PS(PS(PS(PS(uS, jS(xS)), kS(xS, NS, qS)), SS[ZH[208]][fS]), HS[ZH[20]][fS]), QS = PS(KS(gS), aS(gS, tS, bS)), uS = qS, qS = NS, NS = xS, xS = PS(XS, nS), XS = bS, bS = tS, tS = gS, gS = PS(nS, QS));
                vH(HS[ZH[1]][ZH[2]] = PS(gS, HS[ZH[1]][ZH[2]]), HS[ZH[1]][ZH[0]] = PS(tS, HS[ZH[1]][ZH[0]]), HS[ZH[1]][ZH[1]] = PS(bS, HS[ZH[1]][ZH[1]]), HS[ZH[1]][ZH[20]] = PS(XS, HS[ZH[1]][ZH[20]]), HS[ZH[1]][ZH[19]] = PS(xS, HS[ZH[1]][ZH[19]]), HS[ZH[1]][ZH[47]] = PS(NS, HS[ZH[1]][ZH[47]]), HS[ZH[1]][ZH[8]] = PS(qS, HS[ZH[1]][ZH[8]]), HS[ZH[1]][ZH[24]] = PS(uS, HS[ZH[1]][ZH[24]]))
              }
              return HS[ZH[1]]
            }

            function PS(SS, HS) {
              var gS = (SS & ZH[69]) + (HS & ZH[69]);
              return (SS >> ZH[40]) + (HS >> ZH[40]) + (gS >> ZH[40]) << ZH[40] | gS & ZH[69]
            }
            return vH(SS[ZH[12]] = ZH[2], SS[ZH[104]] = ZH[2], SS[ZH[64]] = ""), SS[ZH[208]] = new Array(ZH[136], ZH[137], -ZH[138], -ZH[139], ZH[140], ZH[141], -ZH[142], -ZH[143], -ZH[144], ZH[145], ZH[146], ZH[147], ZH[148], -ZH[149], -ZH[150], -ZH[151], -ZH[152], -ZH[153], ZH[154], ZH[155], ZH[156], ZH[157], ZH[158], ZH[159], -ZH[160], -ZH[161], -ZH[162], -ZH[163], -ZH[164], -ZH[165], ZH[166], ZH[167], ZH[168], ZH[169], ZH[170], ZH[171], ZH[172], ZH[173], -ZH[174], -ZH[175], -ZH[176], -ZH[177], -ZH[178], -ZH[179], -ZH[180], -ZH[181], -ZH[182], ZH[183], ZH[184], ZH[185], ZH[186], ZH[187], ZH[188], ZH[189], ZH[190], ZH[191], ZH[192], ZH[193], -ZH[194], -ZH[195], -ZH[196], -ZH[197], -ZH[198], -ZH[199]), {
              hex: function(...SS) {
                return SS[ZH[12]] = ZH[0], XS(function(...SS) {
                  return SS[ZH[12]] = ZH[0], uS(nS(qS(SS[ZH[2]]), SS[ZH[2]].length * ZH[10]))
                }(NS(SS[ZH[2]])))
              },
              b64: gS,
              any: tS,
              hex_hmac: function(...SS) {
                return SS[ZH[12]] = ZH[1], XS(bS(NS(SS[ZH[2]]), NS(SS[ZH[0]])))
              },
              b64_hmac: gS,
              any_hmac: tS
            }
          }();
          console.log(SS)
        }
        HS(146) in cH && jS(), (0, fS[ZH[13]])("5 ")
      }
    }, jS.k.subscribe("customBindingsChanged", (() => {
      LH()
    }));
    let YH = !1,
      AH = !1;
    const yH = () => YH || AH && ES.e.isInGame(),
      VH = SS => {
        yH() && SS.preventDefault()
      };
    jS.k.subscribe("displaymodeFullscreenChange", (SS => {
      iH()
    })), jS.k.subscribe("pointerLockUpdate", (SS => {
      YH = SS, iH(), WH()
    })), jS.k.subscribe("freeCursorUpdate", (SS => {
      AH = SS, iH(), WH()
    }));
    const iH = () => {
        window.removeEventListener("wheel", VH), LS.i && !(0, xS.l)() && (YH || AH) && window.addEventListener("wheel", VH, {
          passive: !1
        })
      },
      WH = () => {
        window.removeEventListener("wheel", zH), (YH || AH) && window.addEventListener("wheel", zH, {
          passive: !1
        })
      },
      zH = SS => {
        !0 === SS.ctrlKey && yH() && SS.preventDefault()
      };

    function UH(SS) {
      jS.k.cj("QTEMouseState", {
        isDown: SS
      })
    }

    function pH(SS) {
      var HS, gS, bS, XS, xS, NS, qS, uS;
      const fS = (0, dS.e)();
      fS.ISS = null !== (HS = function(SS, HS) {
        var gS, tS;
        if (!uH) return null;
        const bS = SS.bloxd;
        XH ??= bS.getMetaInfo("Board").rootId;
        const XS = null !== (gS = null === HS || void 0 === HS ? void 0 : HS.Rl) && void 0 !== gS ? gS : null;
        if (!XS || bS.getMetaInfo(XS).rootId !== XH) return null;
        const xS = null !== (tS = null === HS || void 0 === HS ? void 0 : HS.position) && void 0 !== tS ? tS : null;
        if (bS.playerCanChangePos(SS.HA, xS[0], xS[1], xS[2])) return null;
        const NS = (SS, HS, gS) => {
          const tS = bS.blockDataOwner.getBlockData(SS, HS, gS),
            XS = null === tS || void 0 === tS ? void 0 : tS.persisted.shared.text.split("\n")[0].toLowerCase().trim();
          return YS.singleLineBoardActions.has(XS)
        };
        if (NS(xS[0], xS[1], xS[2])) return null;
        let qS;
        SS.dSS && (qS = [...SS.dSS], SS.mF(qS, qS));
        const uS = (qS ? SS.camera.oB : 0) + bS.getBlockReach(SS.HA);
        return SS.pickBlock(qS, SS.cSS, uS, ((HS, gS, tS, XS) => 0 !== HS && ("Board" !== bS.getMetaInfo(HS).rootName || bS.playerCanChangePos(SS.HA, gS, tS, XS) || NS(gS, tS, XS))))
      }(fS, fS.ISS)) && void 0 !== HS ? HS : fS.ISS;
      const kS = null !== (gS = null === (bS = fS.ISS) || void 0 === bS ? void 0 : bS.position) && void 0 !== gS ? gS : null,
        KS = null !== (XS = fS.cSS) && void 0 !== XS ? XS : fS.camera.uR(),
        GS = dS.g.localPlayerPickActionHelper.getPickEntityResult(KS),
        CS = null !== (xS = fS.ISS) && void 0 !== xS && xS.Rl ? (0, WS.h)(fS.ISS.Rl) : "Air",
        nS = SS === aS.e.UpFirePrimary || SS === aS.e.UpFireSecondary,
        PS = nS ? "onPlayerClickUp" : "onPlayerClick",
        QS = nS ? SS === aS.e.UpFireSecondary : SS === aS.e.DownFireSecondary,
        DS = !nS && (0, tS.getWasDoubleClick)();
      jS.k.cj("mouseState", {
        xI: SS,
        isDown: !nS
      }), (0, tS.sendColyMessage)(IS.Ih, {
        xI: SS,
        NI: DS,
        nx: kS,
        Px: GS
      }, !0), (0, dS.b)().client.triggerGameCallback(PS, fS.HA, QS, null !== (NS = null === kS || void 0 === kS ? void 0 : kS[0]) && void 0 !== NS ? NS : null, null !== (qS = null === kS || void 0 === kS ? void 0 : kS[1]) && void 0 !== qS ? qS : null, null !== (uS = null === kS || void 0 === kS ? void 0 : kS[2]) && void 0 !== uS ? uS : null, CS, GS)
    }
    window.addEventListener("keydown", (SS => {
      ["ArrowUp", "ArrowDown"].includes(SS.key) && SS.preventDefault()
    })), document.addEventListener("keydown", (SS => {
      (0, VS.d)(SS, (() => {
        const SS = (0, dS.e)();
        return (0, yS.K)(SS) || !1 !== SS.RP.canCustomiseChar
      }))
    }))
  },
  39111: (SS, HS, gS) => {
    gS.d(HS, {
      e: () => XS,
      h: () => xS
    });
    var tS = gS(38470);
    let bS = !1;

    function XS() {
      return bS
    }

    function xS(SS) {
      bS = SS, SS ? tS.h.setMultiplierType("emoteWheel", 0) : tS.h.removeMultiplier("emoteWheel")
    }
  },
  39116: (SS, HS, gS) => {
    function tS(SS) {
      return Boolean(SS.RP.useInventory && SS.RP.useFullInventory && SS.FQ.aHS(SS.HA))
    }
    gS.d(HS, {
      e: () => tS
    })
  },
  39016: (SS, HS, gS) => {
    gS.d(HS, {
      e: () => XS,
      g: () => bS
    });
    var tS = gS(37171);

    function bS(SS, HS) {
      return {
        replayedClipName: SS,
        replayedClipAgeSeconds: HS
      }
    }

    function XS(SS, HS, gS, bS, XS) {
      const xS = function(SS) {
          if ("object" !== typeof SS || null === SS) return null;
          const {
            replayedClipName: HS,
            replayedClipAgeSeconds: gS
          } = SS;
          return "string" === typeof HS && "number" === typeof gS ? {
            bX: HS,
            XX: gS
          } : null
        }(gS),
        NS = null === xS ? gS : null,
        {
          bX: qS = null,
          XX: uS = 0
        } = null !== xS && void 0 !== xS ? xS : {};
      SS.animateEntity(HS, tS.g.Custom, NS, bS, XS, qS, uS)
    }
  },
  39019: (SS, HS, gS) => {
    gS.d(HS, {
      d: () => KS,
      g: () => IS,
      h: () => aS,
      i: () => kS,
      m: () => jS,
      q: () => fS
    });
    var tS = gS(39023),
      bS = gS(37261),
      XS = gS(3811),
      xS = gS(2069),
      NS = gS(31),
      qS = gS(2910);
    const uS = new tS.c;

    function IS() {
      return uS
    }

    function fS() {
      uS.clear()
    }

    function kS() {
      for (const SS of uS.ids()) {
        const HS = uS.getName(SS);
        void 0 !== HS && xS.c.delete(HS)
      }
      fS(), NS.k.cj("playerRosterChanged", uS.ids())
    }

    function aS(SS, HS) {
      var gS, tS;
      if (uS.has(SS)) return uS.getSetting(SS, HS);
      const bS = (0, qS.e)();
      return null === (gS = bS.rY[bS.HA]) || void 0 === gS || null === (tS = gS[SS]) || void 0 === tS ? void 0 : tS[HS]
    }

    function KS(SS) {
      const {
        added: HS,
        removed: gS,
        settingChanges: tS
      } = uS.apply(SS);
      for (const {
          playerId: bS,
          name: XS
        }
        of gS) void 0 === XS || GS(bS) || xS.c.delete(XS);
      for (const {
          playerId: XS,
          settings: xS
        }
        of tS)
        if (GS(XS)) jS(XS, xS);
        else
          for (const SS in xS)(0, bS.l)(XS, SS, xS[SS]);
      (HS.length > 0 || gS.length > 0) && NS.k.cj("playerRosterChanged", uS.ids())
    }

    function jS(SS) {
      let HS = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : uS.getSettings(SS);
      if (HS) {
        (0, bS.g)(SS);
        for (const gS in HS)(0, bS.d)(SS, gS, HS[gS])
      }
    }

    function GS(SS) {
      return SS === (0, qS.e)().OSS || (0, qS.b)().client.hasEntity(SS)
    }(0, XS.onGameReset)(fS)
  },
  38125: (SS, HS, gS) => {
    gS.d(HS, {
      b: () => OS,
      f: () => wS,
      g: () => ZS,
      h: () => JS,
      l: () => dS
    });
    var tS = gS(37113),
      bS = gS(38134),
      XS = gS(402),
      xS = gS.n(XS),
      NS = gS(3540);
    const qS = new tS.VK,
      uS = new tS.VK,
      IS = new tS.VK,
      fS = new tS.VK,
      kS = new tS.VK,
      aS = [0, 0, 0],
      KS = {
        x: 0,
        y: 0
      },
      jS = new tS.VK(1, 0, 0),
      GS = new tS.VK(0, 1, 0),
      CS = tS.Matrix.Identity(),
      nS = new tS.Matrix,
      PS = new tS.Matrix,
      QS = new tS.VK,
      DS = new bS.b(0, 0, 0, 0);

    function wS(SS, HS) {
      var gS, bS;
      const XS = hS(SS, HS);
      if (XS) {
        const SS = XS.x,
          HS = XS.y,
          gS = SS - 50,
          tS = HS - 50;
        return Math.abs(gS) <= NS.d && Math.abs(tS) <= (0, NS.l)() ? {
          x: SS,
          y: HS
        } : vS(gS, tS)
      }
      IS.I5(HS[0], HS[1], HS[2]),
        function(SS) {
          const HS = SS.Hj.wgS(),
            gS = HS ? tS.Matrix.FromArrayToRef(HS.worldMatrix, 0, PS) : SS.Hj.lL().activeCamera.getWorldMatrix();
          tS.VK.TransformNormalToRef(jS, gS, fS), fS.normalize(), tS.VK.TransformNormalToRef(GS, gS, kS), kS.normalize()
        }(SS);
      const xS = tS.VK.Dot(IS, fS);
      let qS = -tS.VK.Dot(IS, kS);
      Math.abs(xS) < .001 && Math.abs(qS) < .001 && (qS = -1);
      const uS = null !== (gS = null === (bS = SS.Hj.wgS()) || void 0 === bS ? void 0 : bS.projectionMatrix) && void 0 !== gS ? gS : SS.Hj.lL().activeCamera.getProjectionMatrix().m;
      return vS(xS * uS[0], qS * uS[5])
    }

    function hS(SS, HS) {
      const gS = SS.Hj.lL(),
        bS = gS.AK(),
        XS = bS.getRenderWidth(),
        xS = bS.getRenderHeight();
      DS.width = XS, DS.height = xS;
      const NS = SS.Hj.wgS(),
        IS = NS ? QS.I5(NS.eye[0], NS.eye[1], NS.eye[2]) : SS.Hj.camera.globalPosition;
      qS.I5(IS.x + 10 * HS[0], IS.y + 10 * HS[1], IS.z + 10 * HS[2]);
      const fS = NS ? tS.Matrix.FromArrayToRef(NS.viewProjectionMatrix, 0, nS) : gS.getTransformMatrix();
      return tS.VK.ProjectToRef(qS, CS, fS, DS, uS), uS.z < 0 || uS.z > 1 ? null : (KS.x = uS.x / XS * 100, KS.y = uS.y / xS * 100, KS)
    }

    function ZS(SS, HS) {
      return wS(SS, cS(SS, HS))
    }

    function JS(SS, HS) {
      const gS = hS(SS, cS(SS, HS));
      return gS && {
        x: gS.x,
        y: gS.y
      }
    }

    function OS(SS) {
      var HS, gS;
      return 1 / (null !== (HS = null === (gS = SS.Hj.wgS()) || void 0 === gS ? void 0 : gS.projectionMatrix[0]) && void 0 !== HS ? HS : SS.Hj.lL().activeCamera.getProjectionMatrix().m[0])
    }

    function dS(SS, HS, gS) {
      const tS = SS.Hj.wgS(),
        bS = tS ? tS.worldMatrix : SS.Hj.lL().activeCamera.getWorldMatrix().m,
        XS = SS.Zk;
      for (let xS = 0; xS < 3; xS++) HS[xS] = bS[12 + xS] + XS[xS], gS[xS] = bS[8 + xS];
      xS().normalize(gS, gS)
    }

    function cS(SS, HS) {
      const gS = SS.Zk,
        tS = SS.Hj.wgS(),
        bS = tS ? QS.I5(tS.eye[0], tS.eye[1], tS.eye[2]) : SS.Hj.camera.globalPosition;
      return aS[0] = HS[0] - gS[0] - bS.x, aS[1] = HS[1] - gS[1] - bS.y, aS[2] = HS[2] - gS[2] - bS.z, xS().normalize(aS, aS), aS
    }

    function vS(SS, HS) {
      return (0, NS.g)(SS, HS, NS.d, (0, NS.l)())
    }
  },
  39062: (SS, HS, gS) => {
    gS.d(HS, {
      e: () => NS
    });
    var tS = gS(31),
      bS = gS(1366),
      XS = gS(3127);
    const xS = "Reconnecting";
    class NS {
      constructor(SS) {
        this.hooks = SS, this.graceMs = 0, this.sessionBased = !1, this.controller = void 0, this.frozen = !1, this.stopped = !1, this.listening = !1, this.ended = !1, this.retryNow = () => {
          "visible" === document.visibilityState && this.controller.retryNow()
        }, this.onPageHide = SS => {
          SS.persisted || this.leave()
        }, this.controller = new XS.c((HS => SS.reconnect(HS)), {
          isSessionLive: () => !this.ended && SS.isLive(),
          onPhaseChanged: SS => {
            this.onPhaseChanged(SS)
          },
          onReconnected: HS => {
            SS.onReconnected(HS)
          },
          onGaveUp: HS => {
            !this.ended && SS.isLive() && SS.onGaveUp(this.sessionBased, HS)
          }
        })
      }
      onInitialInfo(SS, HS) {
        this.graceMs = SS, this.sessionBased = HS
      }
      canHoldSeat() {
        return this.graceMs > 0 && !this.ended
      }
      isResuming() {
        return "connected" !== this.controller.phase
      }
      onConnectionLost(SS) {
        this.ended || this.controller.onConnectionLost(SS, this.graceMs)
      }
      onResuming() {
        this.ended || this.controller.onResuming()
      }
      onResumed() {
        this.controller.stop()
      }
      leave() {
        const SS = this.isResuming() && !this.controller.awaitingResumeOnRoom,
          HS = this.controller.heldToken;
        this.end(), SS && "" !== HS && this.hooks.releaseSeat(HS)
      }
      end() {
        this.ended = !0, this.controller.stop()
      }
      onPhaseChanged(SS) {
        const HS = (0, XS.p)(SS);
        HS !== this.stopped && (this.stopped = HS, this.hooks.freeze(HS));
        const gS = "frozen" === SS || "resuming" === SS && this.frozen;
        gS && !this.frozen ? (0, bS.u)(xS, {
          overridesPause: !0
        }) : !gS && this.frozen && (0, bS.q)(xS), this.frozen = gS, this.setListening("connected" !== SS), tS.k.cj(XS.o, gS ? "frozen" : SS)
      }
      setListening(SS) {
        SS !== this.listening && (this.listening = SS, SS ? (window.addEventListener("online", this.retryNow), document.addEventListener("visibilitychange", this.retryNow), window.addEventListener("pagehide", this.onPageHide)) : (window.removeEventListener("online", this.retryNow), document.removeEventListener("visibilitychange", this.retryNow), window.removeEventListener("pagehide", this.onPageHide)))
      }
    }
  },
  39068: (SS, HS, gS) => {
    gS.d(HS, {
      d: () => tS
    });
    class tS {
      constructor(SS) {
        let HS = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Date.now;
        this.onSilent = SS, this.now = HS, this.lastHeardAt = void 0, this.resumedAt = void 0, this.lastCheckAt = void 0, this.wasVisible = "visible" === document.visibilityState, this.interval = void 0, this.check = () => {
          const SS = this.now(),
            HS = SS - this.lastCheckAt <= 2e3;
          this.lastCheckAt = SS;
          const gS = "visible" === document.visibilityState;
          !gS || HS && this.wasVisible || (this.resumedAt = SS), this.wasVisible = gS, gS && SS - this.lastHeardAt > 12e3 && SS - this.resumedAt > 2e3 && this.onSilent()
        }, this.lastHeardAt = HS(), this.resumedAt = this.lastHeardAt, this.lastCheckAt = this.lastHeardAt, this.interval = setInterval(this.check, 1e3), document.addEventListener("visibilitychange", this.check), window.addEventListener("online", this.check)
      }
      heard() {
        this.lastHeardAt = this.now()
      }
      dispose() {
        clearInterval(this.interval), document.removeEventListener("visibilitychange", this.check), window.removeEventListener("online", this.check)
      }
    }
  },
  39e3: (SS, HS, gS) => {
    gS.d(HS, {
      e: () => kS
    });
    var tS = gS(198),
      bS = gS(402),
      XS = gS.n(bS),
      xS = gS(36771),
      NS = gS(36773),
      qS = gS(2910);
    const uS = tS.e.pG * tS.e.playerEyeToHeightRatio,
      IS = 250,
      fS = 1.1,
      kS = new class {
        constructor() {
          this.entities = new Map, this.playing = new Map, this.msSinceLastScan = 0
        }
        add(SS, HS) {
          this.entities.set(SS, HS)
        }
        update(SS, HS) {
          const gS = this.entities.get(SS);
          this.entities.set(SS, HS);
          const tS = this.playing.get(SS);
          tS && (gS && gS.soundName === HS.soundName ? (tS.sound.setRelativeVolume(HS.volume), tS.sound.rate(HS.rate), tS.sound.setPannerAttr({
            refDistance: HS.refDistance
          })) : this.stopEntity(SS))
        }
        remove(SS) {
          this.stopEntity(SS), this.entities.delete(SS)
        }
        mf(SS) {
          this.msSinceLastScan += SS, this.msSinceLastScan < IS || (this.msSinceLastScan = 0, this.scan())
        }
        stopEntity(SS) {
          const HS = this.playing.get(SS);
          HS && (HS.sound.stop(), this.playing.delete(SS))
        }
        startEntity(SS, HS, gS) {
          const tS = (0, NS.e)(HS.soundName);
          if (!tS) return console.error(`AudioEntityManager: no sound found for "${HS.soundName}", dropping audio entity ${SS}`), void this.remove(SS);
          const bS = xS.e.play(tS, HS.volume, gS, HS.maxHearDist, HS.refDistance, !0);
          bS.rate(HS.rate), this.playing.set(SS, {
            sound: bS,
            lastPos: XS().clone(gS)
          })
        }
        scan() {
          const SS = (0, qS.e)();
          if (!SS) return;
          const HS = SS.FQ.lC(SS.HA);
          if (HS)
            for (const [gS, tS] of this.entities) {
              if (!SS.FQ.ZSS(gS, "position")) continue;
              const bS = SS.FQ.lC(gS),
                xS = XS().sqrDist(HS, bS),
                NS = this.playing.get(gS);
              if (NS) {
                const SS = tS.maxHearDist * fS;
                xS > SS * SS ? this.stopEntity(gS) : XS().equals(bS, NS.lastPos) || (NS.sound.setPosition([bS[0], bS[1] + uS, bS[2]]), XS().copy(NS.lastPos, bS))
              } else xS <= tS.maxHearDist * tS.maxHearDist && this.startEntity(gS, tS, bS)
            }
        }
      }
  },
  39076: (SS, HS, gS) => {
    gS.d(HS, {
      c: () => uS,
      f: () => IS
    });
    var tS = gS(1822),
      bS = gS(198),
      XS = gS(1792),
      xS = gS(1898),
      NS = gS(1286),
      qS = gS(1216);
    async function uS(SS, HS) {
      return function(SS) {
        return "object" === typeof SS && null !== SS && SS.code === bS.c.VpnIp.code
      }(HS) && function(SS) {
        return XS.d.supports("appCheck") && SS.isLoggedIn() && !SS.hasTriedAppAttestation()
      }(SS) && await async function(SS) {
        try {
          const {
            token: HS
          } = await (0, xS.b)(), {
            "3PSIDMCPP": gS
          } = await (0, qS.postJsonWithMetricsCookiesAndJsonResponse)(`${NS.clientSideServerUrls.indexUrl}/index/app-attestation`, {
            appCheckToken: HS
          }, {
            retries: 0
          }, SS.getMetricsCookies());
          return SS.setAppAttestedAuthJwt(gS), !0
        } catch (HS) {
          return HS instanceof tS.e && "failed" === HS.code ? (console.warn("The app couldn't get an App Check token:", HS), SS.markAppAttestationTried()) : console.error("Failed to attest the app:", HS), !1
        }
      }(SS)
    }
    async function IS(SS, HS) {
      try {
        return await HS()
      } catch (gS) {
        if (!await uS(SS, gS)) throw gS
      }
      return HS()
    }
  },
  39070: (SS, HS, gS) => {
    gS.d(HS, {
      c: () => kS,
      e: () => IS
    });
    var tS = gS(198),
      bS = gS(1934),
      XS = gS(1290),
      xS = gS(9093);
    const NS = [250, 500, 1e3, 2e3, 1250],
      qS = 406;

    function uS(SS) {
      if ("object" !== typeof SS || null === SS) return !1;
      const {
        code: HS,
        message: gS
      } = SS, bS = tS.c.duplicateLobbyNameError;
      return (HS === bS.code || HS === qS) && (gS === bS.text || gS === bS.text + tS.g)
    }
    async function IS(SS, HS) {
      let gS = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : bS.e;
      for (let bS = 0;; bS++) {
        let xS;
        (0, XS.m)(HS);
        try {
          return await SS()
        } catch (tS) {
          if (xS = NS[bS], void 0 === xS || !uS(tS)) throw tS
        }
        await gS(xS, HS)
      }
    }
    const fS = new Set([tS.c.duplicateLobbyNameError.code, tS.c.lobbyCantBeCreated.code, tS.c.roomDisposedEarlyError.code, tS.c.roomDisposedLateError.code, tS.c.serverRoomLimitReached.code]);

    function kS(SS) {
      if (uS(SS)) return !0;
      const HS = (0, xS.i)(SS);
      return "number" === typeof HS && fS.has(HS)
    }
  },
  39050: (SS, HS, gS) => {
    gS.d(HS, {
      c: () => XS,
      g: () => bS
    });
    var tS = gS(31);

    function bS(SS) {
      return "refetchCode" === SS || "devDownloadJson" === SS || SS.startsWith("Plugin")
    }

    function XS(SS, HS) {
      "refetchCode" !== SS ? "Plugin|MobAiPlugin|ShowPetUi" !== SS ? Promise.all([gS.e(107), gS.e(108), gS.e(103), gS.e(105), gS.e(214)]).then((() => gS(41754))).then((gS => {
        let {
          runClientGameMessage: tS
        } = gS;
        tS(SS, HS)
      })).catch((HS => {
        console.error(`Game message ${SS} failed`, HS)
      })) : tS.k.cj("showPetUi", HS) : tS.k.cj("refetchCode")
    }
  },
  39031: (SS, HS, gS) => {
    gS.d(HS, {
      d: () => IS
    });
    var tS = gS(1309),
      bS = gS(1406),
      XS = gS(24),
      xS = gS(1390),
      NS = gS(1400),
      qS = gS(1608),
      uS = gS(36479);

    function IS(SS) {
      let {
        Vb: HS,
        ib: gS
      } = SS;
      const IS = null !== HS && void 0 !== HS ? HS : (0, NS.e)().gameNameWithVariation;
      (0, tS.M)(IS) && ((0, uS.i)(), (0, xS.gb)((() => {
        console.log("Received matchmaking order from game server to game", HS), (0, XS.k)("inGameReplay"), (0, qS.navigatePreserveSearch)((0, bS.d)(IS, null !== gS && void 0 !== gS ? gS : void 0))
      }), "video_start"))
    }
  },
  39029: (SS, HS, gS) => {
    gS.d(HS, {
      e: () => qS,
      i: () => xS,
      j: () => NS,
      m: () => uS
    });
    var tS = gS(31),
      bS = gS(1435);
    const XS = new Map;

    function xS(SS, HS) {
      tS.k.cj("newUiRequest", {
        id: SS,
        clientParameters: HS
      }, !0)
    }

    function NS(SS) {
      tS.k.cj("removeUiRequest", SS, !0);
      const HS = XS.get(SS);
      HS && (HS.tearDownNotification(), XS.delete(SS))
    }

    function qS() {
      tS.k.cj("clearUiRequests");
      for (const SS of XS.values()) SS.tearDownNotification();
      XS.clear()
    }

    function uS(SS, HS, gS, tS) {
      const xS = bS.NotificationProvider.showPromptPopup({
        title: HS,
        confirmText: "general:yes",
        cancelText: "general:no",
        destructive: gS,
        unlockPointerKey: "uiRequestPopup"
      });
      XS.set(SS, xS), xS.getResult().then((HS => {
        XS.delete(SS), "notificationTornDown" !== HS && tS(HS)
      }))
    }
  },
  39102: (SS, HS, gS) => {
    gS.d(HS, {
      e: () => aS,
      g: () => kS
    });
    const tS = "ue:",
      bS = ["keydown", "keyup", "mousedown", "mouseup", "pointerdown", "pointerup", "touchstart", "touchend"],
      XS = "[A-Za-z0-9]{1,24}",
      xS = 15,
      NS = new RegExp(`^${XS}$`);
    new RegExp(`^${tS}(${[...bS,"other"].join("|")}):(?:n|k(${XS})|b(0|[1-9][0-9]?)):([01])([01])$`);

    function qS(SS, HS, gS, XS, qS) {
      const uS = "string" === typeof SS && bS.includes(SS) ? SS : "other";
      let IS = "n";
      return "string" === typeof HS ? IS = NS.test(HS) ? `k${HS}` : "n" : "number" === typeof gS && Number.isInteger(gS) && gS >= 0 && gS <= xS && (IS = `b${gS}`), `${tS}${uS}:${IS}:${XS?1:0}${qS?1:0}`
    }
    var uS = gS(1758),
      IS = gS(1846);
    let fS = null;

    function kS(SS) {
      const HS = SS instanceof Element && SS !== document.body && SS !== document.documentElement && !(0, uS.n)(SS) && !SS.closest("#root");
      return {
        editable: (0, IS.d)(SS),
        outsideView: HS
      }
    }

    function aS(SS) {
      return fS ??= function(SS) {
        try {
          const {
            editable: HS,
            outsideView: gS
          } = kS(SS.target), tS = SS;
          return qS(SS.type, tS.code, tS.button, HS, gS)
        } catch {
          return qS(null, null, null, !1, !1)
        }
      }(SS), fS
    }
  },
  39054: (SS, HS, gS) => {
    gS.d(HS, {
      c: () => NS,
      d: () => qS,
      g: () => uS
    });
    var tS = gS(1309),
      bS = gS(1087),
      XS = gS(36887),
      xS = gS(31);

    function NS(SS) {
      let {
        lobbyName: HS,
        gameNameWithVariation: gS
      } = SS;
      return !(0, tS.P)(HS) || null !== gS && (gS.startsWith("testGym") || (0, bS.m)(gS))
    }

    function qS(SS) {
      return SS.BX === XS.b.Leave || SS.BX === XS.b.Cursor
    }

    function uS(SS) {
      xS.k.cj("codeCollab", {
        type: SS.BX,
        docKey: SS.MX,
        version: SS.FX,
        editorCount: SS.RX,
        peers: SS.TX,
        updates: SS.oX,
        playerId: SS.lX,
        playerName: SS.mX,
        colour: SS.eX,
        anchor: SS.rX,
        head: SS.Sx,
        existingCursors: SS.Hx,
        files: SS.gx,
        engineSettings: SS.tx
      })
    }
  },
  39023: (SS, HS, gS) => {
    gS.d(HS, {
      c: () => tS
    });
    class tS {
      constructor() {
        this.members = new Map
      }
      apply(SS) {
        const HS = {
          added: [],
          removed: [],
          settingChanges: []
        };
        for (const tS of SS.og) {
          let SS = this.members.get(tS.lg);
          if (SS || (SS = {
              name: null,
              settings: {}
            }, this.members.set(tS.lg, SS), HS.added.push(tS.lg)), null !== tS.mg && (SS.name = tS.mg), null !== tS.eg || tS.rg.length > 0) {
            const gS = null === tS.eg ? {} : JSON.parse(tS.eg);
            Object.assign(SS.settings, gS);
            for (const HS of tS.rg) delete SS.settings[HS], gS[HS] = void 0;
            HS.settingChanges.push({
              playerId: tS.lg,
              settings: gS
            })
          }
        }
        for (const tS of SS.St) {
          const SS = this.members.get(tS);
          var gS;
          if (SS) this.members.delete(tS), HS.removed.push({
            playerId: tS,
            name: null !== (gS = SS.name) && void 0 !== gS ? gS : void 0
          })
        }
        return HS
      }
      has(SS) {
        return this.members.has(SS)
      }
      ids() {
        return [...this.members.keys()]
      }
      getName(SS) {
        var HS, gS;
        return null !== (HS = null === (gS = this.members.get(SS)) || void 0 === gS ? void 0 : gS.name) && void 0 !== HS ? HS : void 0
      }
      getSettings(SS) {
        var HS;
        return null === (HS = this.members.get(SS)) || void 0 === HS ? void 0 : HS.settings
      }
      getSetting(SS, HS) {
        var gS;
        return null === (gS = this.members.get(SS)) || void 0 === gS ? void 0 : gS.settings[HS]
      }
      clear() {
        this.members.clear()
      }
    }
  },
  39058: (SS, HS, gS) => {
    gS.d(HS, {
      e: () => tS,
      g: () => bS
    });
    const tS = ["description", "label"];

    function bS(SS) {
      const HS = SS.type;
      return {
        type: HS,
        params: SS[HS]
      }
    }
  }
};
Object.freeze(modules);
for (const SS in modules) Object.freeze(modules[SS]);