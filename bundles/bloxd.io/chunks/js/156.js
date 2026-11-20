export const id = 156;
export const ids = [156];
export const modules = {
  38727: (bb, ub, hb) => {
    function Bb(bb) {
      return !(!bb.lobbyLeaderboardInfo && !bb.lobbyManage)
    }
    hb.d(ub, {
      c: () => Bb
    })
  },
  38710: (bb, ub, hb) => {
    hb.d(ub, {
      b: () => Gb,
      e: () => Ub
    });
    var Bb = hb(16);
    let Ob = !1;

    function Gb() {
      return Ob
    }

    function Ub(bb) {
      Ob !== bb && (Ob = bb, Bb.i.vp("replayViewer|videoExportChanged"))
    }
  },
  38585: (bb, ub, hb) => {
    hb.d(ub, {
      c: () => Gb
    });
    var Bb = hb(16),
      Ob = hb(1836);

    function Gb(bb) {
      let {
        taskId: ub,
        progress: hb
      } = bb;
      const Bb = Ob.b.get("_tasks");
      null !== Bb && void 0 !== Bb && Bb[ub] && Ob.b.apply({
        _tasks: {
          ...Bb,
          [ub]: {
            ...Bb[ub],
            progress: hb
          }
        }
      })
    }
    Bb.i.subscribe("clientTaskProgress", (bb => {
      Gb(bb)
    }))
  },
  38722: (bb, ub, hb) => {
    hb.d(ub, {
      e: () => pb,
      i: () => ob,
      m: () => Xb
    });
    var Bb = hb(2633);
    const Ob = 0,
      Gb = 2,
      Ub = 3,
      Lb = 4;
    class Yb {
      constructor(bb, ub) {
        this.width = bb, this.LH = ub, this.data = void 0, this.next = 0, this.size = 0, this.data = new Float64Array(bb * ub)
      }
      push(bb) {
        let ub = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        const hb = this.data.subarray(this.next * this.width, (this.next + 1) * this.width);
        for (let Bb = 0; Bb < this.width; Bb++) hb[Bb] = bb[ub + Bb];
        return this.next = (this.next + 1) % this.LH, this.size = Math.min(this.size + 1, this.LH), hb
      }
      lines() {
        const bb = [],
          ub = (this.next - this.size + this.LH) % this.LH;
        for (let hb = 0; hb < this.size; hb++) {
          const Bb = (ub + hb) % this.LH * this.width;
          bb.push(Array.from(this.data.subarray(Bb, Bb + this.width)).join(","))
        }
        return bb
      }
    }

    function Sb(bb) {
      return Number.isFinite(bb) ? String(Math.round(10 * bb) / 10) : String(bb)
    }

    function ab(bb) {
      return Number.isFinite(bb) ? bb.toFixed(1) : String(bb)
    }
    class Hb {
      constructor() {
        this.frames = 0, this.looked = 0, this.idle = 0, this.qE = 0, this.pastLimit = 0, this.lockSkips = 0, this.mp = 0, this.lost = 0, this.dropped = 0, this.longFrames = 0, this.dtMin = 1 / 0, this.dtMax = 0, this.dtSum = 0, this.raw = [0, 0], this.turned = [0, 0], this.peakRate = 0, this.events = 0, this.eventMax = 0, this.bigEvents = 0, this.outliers = 0, this.eventLines = 0, this.suppressed = 0
      }
    }
    class wb {
      constructor() {
        var bb = this;
        this.tally = new Hb, this.records = new Yb(10, 3600), this.events = new Yb(4, 12e3), this.event = new Float64Array(4), this.take = null, this.client = "js", this.started = !1, this.record = function(ub) {
          let hb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
          const [Bb, Yb, Hb, wb, Zb, Xb, pb, ob, Ab, lb] = bb.records.push(ub, hb), Kb = bb.tally;
          switch (Kb.frames++, pb) {
            case Ob:
              return void Kb.idle++;
            case Lb:
              return void Kb.mp++;
            case Ub:
              return Kb.lockSkips++, void(0 === Hb && 0 === wb || bb.outlier(`lock skip dropped raw (${Sb(Hb)}, ${Sb(wb)}) at ${ab(Bb)} ms`))
          }
          Kb.looked++, Number.isFinite(Yb) && (Kb.dtMin = Math.min(Kb.dtMin, Yb), Kb.dtMax = Math.max(Kb.dtMax, Yb), Kb.dtSum += Yb, Yb > 0 && (Kb.peakRate = Math.max(Kb.peakRate, Math.hypot(Zb, Xb) / Yb))), Kb.raw[0] += Hb, Kb.raw[1] += wb, Kb.turned[0] += Zb, Kb.turned[1] += Xb;
          const Wb = Math.abs(Hb) > lb || Math.abs(wb) > lb,
            Cb = `raw (${Sb(Hb)}, ${Sb(wb)}) over ${ab(Yb)} ms, limit ${Sb(lb)}, filter v (${ob.toFixed(3)}, ${Ab.toFixed(3)}) px/ms, at ${ab(Bb)} ms`;
          pb === Gb ? (Kb.qE++, bb.outlier(`spike put right: ${Cb} -> turned (${Sb(Zb)}, ${Sb(Xb)})`)) : Wb ? (Kb.pastLimit++, bb.outlier(`kept past limit: ${Cb}`)) : Yb > 50 && (Kb.longFrames++, bb.outlier(`long frame: ${Cb}, turned in full`))
        }, this.onMouseMove = bb => {
          const ub = this.tally,
            {
              movementX: hb,
              movementY: Bb
            } = bb;
          ub.events++;
          const Ob = Math.max(Math.abs(hb), Math.abs(Bb));
          ub.eventMax = Math.max(ub.eventMax, Ob);
          const Gb = null !== document.pointerLockElement,
            Ub = this.event;
          Ub[0] = bb.timeStamp, Ub[1] = hb, Ub[2] = Bb, Ub[3] = Gb ? 1 : 0, this.events.push(Ub), Ob >= 200 && (ub.bigEvents++, this.eventOutlier(`big mousemove (${hb}, ${Bb}) at ${ab(bb.timeStamp)} ms, lock ${Gb?"MS":"free"}`))
        }, this.onLockChange = () => {
          const bb = document.pointerLockElement;
          (0, Bb.l)("look", `pointer lock ${bb?`gained (${bb.tagName.toLowerCase()})`:"lost"} at ${ab(performance.now())} ms`)
        }, this.onLockError = () => {
          (0, Bb.l)("look", `pointer lock request failed at ${ab(performance.now())} ms`)
        }, this.onVisibility = () => {
          (0, Bb.l)("look", `page ${document.visibilityState} at ${ab(performance.now())} ms`)
        }, this.flush = () => {
          this.takeRecords();
          const bb = this.tally;
          if (this.tally = new Hb, 0 === bb.events && 0 === bb.raw[0] && 0 === bb.raw[1] && 0 === bb.lockSkips && 0 === bb.qE && 0 === bb.dropped) return;
          const ub = bb.looked > 0 ? bb.dtSum / bb.looked : NaN,
            hb = [`${bb.frames} frames (${bb.looked} looked, ${bb.idle} idle${"wasm"===this.client?`, ${bb.mp} carried`:""})`, `dt avg ${ab(ub)} min ${ab(bb.dtMin)} max ${ab(bb.dtMax)}, ${bb.longFrames} long`, `${bb.events} mousemoves (max ${Sb(bb.eventMax)} px, ${bb.bigEvents} big)`, `raw (${Sb(bb.raw[0])}, ${Sb(bb.raw[1])}) turned (${Sb(bb.turned[0])}, ${Sb(bb.turned[1])})`, `peak ${bb.peakRate.toFixed(2)} px/ms`, `put right ${bb.qE}, past limit ${bb.pastLimit}, lock skips ${bb.lockSkips}`, "lock " + (document.pointerLockElement ? "MS" : "free")];
          bb.dropped > 0 && hb.push(`${bb.dropped} doubled spike copies dropped`), bb.lost > 0 && hb.push(`${bb.lost} records lost`), bb.suppressed > 0 && hb.push(`${bb.suppressed} outlier lines not shown`), (0, Bb.l)("look", `1s: ${hb.join("; ")}`)
        }, this.dump = () => [`look records (${this.client}): nowMs,dtMs,rawX,rawY,turnedX,turnedY,outcome,vX,vY,limit`, ...this.records.lines(), "mousemove events: timeStamp,movementX,movementY,locked", ...this.events.lines()].join("\n")
      }
      start(bb, ub) {
        this.client = bb, this.take = ub;
        const {
          screen: hb
        } = window;
        (0, Bb.l)("look", `start: ${bb} client, dpr ${window.devicePixelRatio}, screen ${hb.width}x${hb.height}, pointer lock ${document.pointerLockElement?"MS":"free"}`), this.started || (this.started = !0, window.addEventListener("mousemove", this.onMouseMove, {
          capture: !0,
          passive: !0
        }), document.addEventListener("pointerlockchange", this.onLockChange), document.addEventListener("pointerlockerror", this.onLockError), document.addEventListener("visibilitychange", this.onVisibility), setInterval(this.flush, 1e3), (0, Bb.i)("look", this.dump))
      }
      outlier(bb) {
        const ub = this.tally;
        ub.outliers >= 20 ? ub.suppressed++ : (ub.outliers++, (0, Bb.l)("look", bb))
      }
      eventOutlier(bb) {
        const ub = this.tally;
        ub.eventLines >= 10 ? ub.suppressed++ : (ub.eventLines++, (0, Bb.l)("look", bb))
      }
      takeRecords() {
        var bb;
        const ub = null === (bb = this.take) || void 0 === bb ? void 0 : bb.call(this);
        if (ub && ub.length >= 2) {
          this.tally.lost += ub[0], this.tally.dropped += ub[1];
          for (let bb = 2; bb + 10 <= ub.length; bb += 10) this.record(ub, bb)
        }
      }
      droppedCopy() {
        this.tally.dropped++
      }
      endTake() {
        this.takeRecords(), this.take = null
      }
    }
    let Zb = null;

    function Xb(bb) {
      let ub = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
      return Zb ??= new wb, Zb.start(bb, ub), Zb.record
    }

    function pb() {
      var bb;
      null === (bb = Zb) || void 0 === bb || bb.endTake()
    }

    function ob() {
      var bb;
      null === (bb = Zb) || void 0 === bb || bb.droppedCopy()
    }
  },
  38582: (bb, ub, hb) => {
    hb.d(ub, {
      d: () => Eu,
      e: () => Pu,
      h: () => qu
    });
    var Bb = hb(3463),
      Ob = hb(148),
      Gb = hb(191),
      Ub = hb(595),
      Lb = hb(29),
      Yb = hb(2560),
      Sb = hb(3516),
      ab = hb(3507),
      Hb = hb(1124);
    const wb = new WeakMap;
    class Zb {
      constructor(bb, ub) {
        let hb = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {
          pSb: !0
        };
        this.callbacks = ub, this.options = hb, this.ghb = void 0, this.sessionId = void 0, this.vx = [], this.ASb = !1, this.FZ = !1, this.lSb = void 0, this.Xx = 0, this.nOb = 0, this.KSb = (bb, ub) => {
          if (this.FZ) return;
          const hb = Number(bb);
          this.ASb ? this.WSb(hb, ub) : this.vx.push({
            id: hb,
            payload: ub
          })
        }, this.dispose = () => {
          this.FZ || (this.FZ = !0, wb.delete(this), this.vx.length = 0, this.lSb())
        }, this.ghb = bb, this.sessionId = bb.sessionId, wb.set(this, []), this.lSb = this.CSb()
      }
      dSb(bb) {
        this.lSb(), this.ghb = bb, this.sessionId = bb.sessionId, this.Xx = 0, this.nOb = 0, this.lSb = this.CSb()
      }
      get Hx() {
        return this.nOb
      }
      CSb() {
        const bb = this.ghb.sK("*", this.KSb);
        return this.options.pSb && this.ghb.IK(this.dispose), bb
      }
      WSb(bb, ub) {
        try {
          (0, Sb.ic)(bb) && (ub = (0, Sb.c)(bb, ab.VZ.from(ub)));
          const hb = wb.get(this)[bb];
          if ("function" !== typeof hb) {
            if (this.callbacks.rSb) return void this.callbacks.rSb(bb, ub);
            throw new Error(`No onMessage handler registered for message id ${bb}`)
          }
          hb(ub)
        } catch (hb) {
          this.callbacks.jSb(`Error in onMessage ${bb} with payload ${JSON.stringify(ub)}`, hb)
        } finally {
          this.Xx++
        }
      }
      nSb() {
        for (const {
            id: bb,
            payload: ub
          }
          of this.vx) {
          if (this.FZ) break;
          this.WSb(bb, ub)
        }
        this.vx.length = 0
      }
      tC() {
        return this.FZ
      }
      DSb() {
        if (this.ASb || this.FZ) throw new Error("Trying to getOnMessageRegistrationHandler after registration finished");
        return {
          sK: (bb, ub) => {
            if (this.ASb || this.FZ) throw new Error("Trying to call onMessage after registration finished");
            this.sK(bb, ub)
          },
          finishRegistration: () => {
            if (this.FZ) throw new Error("Cannot finish message registration after disposal");
            this.ASb = !0, this.nSb()
          }
        }
      }
      sK(bb, ub) {
        var hb, Bb;
        null === (hb = (Bb = this.callbacks).xSb) || void 0 === hb || hb.call(Bb);
        const Ob = wb.get(this);
        for (; bb > Ob.length;) Ob[Ob.length] = null;
        Ob[bb] = ub
      }
      send(bb, ub) {
        this.zSb(), (0, Hb.O)(ub) ? this.ghb.Fv(bb, ub) : this.ghb.send(bb, ub)
      }
      zSb() {
        var bb, ub;
        (this.nOb++, 5 === Xb++) && (null === (bb = (ub = this.callbacks).xSb) || void 0 === bb || bb.call(ub), Xb = 0)
      }
      Gl() {
        this.dispose(), this.ghb.Gl()
      }
      leave() {
        this.dispose(), this.ghb.leave()
      }
    }
    let Xb = 0;
    var pb = hb(3474);
    class ob extends Zb {
      constructor(bb) {
        super(bb, {
          xSb: () => {
            (0, Lb.p)(!0) && (0, Bb.Bx)()
          },
          jSb: (bb, ub) => {
            var hb;
            null === (hb = (0, Yb.g)()) || void 0 === hb || hb.TX(bb, ub)
          }
        }, {
          pSb: !1
        }), (0, pb.g)(bb)
      }
      Ix(bb, ub) {
        return !!(0, pb.k)((0, pb.e)(), this.ghb, bb, ub) && (this.zSb(), !0)
      }
      dSb(bb) {
        this.gSb(), super.dSb(bb), (0, pb.g)(bb)
      }
      Gl() {
        super.Gl(), this.gSb()
      }
      gSb() {
        this.ghb.Ul.eZ.qJ = void 0
      }
    }
    var Ab = hb(16),
      lb = hb(1836),
      Kb = hb(1622),
      Wb = hb(36074);

    function Cb(bb, ub, hb, Bb, Ob) {
      let Gb = arguments.length > 5 && void 0 !== arguments[5] && arguments[5];
      if (!bb.pW.Dub(bb.bM)) return console.log("Got resync inven but don't have inven component"), void ub.acknowledge(Bb);
      Gb && console.error("Had to sync inven"), ub.N_(Bb, Ob) && hb.vp("chestToggleFromServer", !1, !0), hb.vp("syncedInvenFromServer")
    }
    var db = hb(38585),
      rb = hb(38588),
      jb = hb(37635),
      nb = hb(37420),
      Db = hb(588),
      xb = hb(38035);

    function zb(bb, ub, hb) {
      const Bb = function(bb) {
          const ub = new Int32Array(bb.length * xb.g);
          return bb.forEach(((bb, hb) => {
            const Bb = hb * xb.g;
            if (4 === bb.length) {
              const [hb, Ob, Gb, Ub] = bb;
              ub.set([hb, Ob, Gb, hb, Ob, Gb, Ub], Bb)
            } else {
              const [hb, Ob, Gb, Ub, Lb, Yb, Sb] = bb;
              ub.set([hb, Gb, Lb, Ob, Ub, Yb, Sb], Bb)
            }
          })), ub
        }(hb),
        Ob = (ub, hb, Bb, Ob) => {
          bb.setBlockNoMulti(ub, hb, Bb, Ob, !0)
        };
      bb.client.gameRecorder.isCapturing() ? (0, xb.ub)(Bb, (0, xb.rb)(Bb), Ob) : bb.PH.eH.RC(Bb, {
        pE: Ob,
        isHookId: ub => bb.blockChangeHasHooks(ub),
        watched: () => function(bb, ub, hb) {
          const Bb = [],
            Ob = (bb, ub, hb) => {
              Bb.push(bb, ub, hb)
            },
            Gb = new Set;
          for (let Ub = 0; Ub < hb.length; Ub += xb.g)
            for (let ub = (0, Db.Q)(hb[Ub]); ub <= (0, Db.Q)(hb[Ub + 3]); ub++)
              for (let Bb = (0, Db.Q)(hb[Ub + 1]); Bb <= (0, Db.Q)(hb[Ub + 4]); Bb++)
                for (let Lb = (0, Db.Q)(hb[Ub + 2]); Lb <= (0, Db.Q)(hb[Ub + 5]); Lb++) {
                  const hb = `${ub}|${Bb}|${Lb}`;
                  Gb.has(hb) || (Gb.add(hb), bb.blockDataOwner.forEachDataCell(ub, Bb, Lb, Ob))
                }
          return ub.forEachCell(Ob), Int32Array.from(Bb)
        }(bb, ub, Bb)
      }), bb.PH.nbb()
    }
    var gb = hb(36780),
      ib = hb(38591),
      vb = hb(38598),
      tb = hb(934),
      Jb = hb(1843);
    var eb = hb(4262);

    function Nb(bb) {
      const ub = bb.eH;
      let hb = 0,
        Ob = -1,
        Ub = -1 / 0,
        Lb = null,
        Yb = !0;
      const ab = () => {
        if (++hb % 10 !== 0) return;
        const ab = (0, Bb.getLastReceivedPacketId)();
        if (ab <= Ob) return;
        const [Hb, wb, Zb] = bb.pW.iK(bb.bM), Xb = ! function(bb) {
          var ub;
          let hb = null === (ub = bb.pW.Hhb(bb.bM)) || void 0 === ub ? void 0 : ub.mZ;
          if (void 0 === hb) return !1;
          const Bb = new Set;
          for (; void 0 !== hb && !Bb.has(hb);) {
            var Ob;
            Bb.add(hb);
            const ub = bb.pW.getState(hb, "smoothToServerPos"),
              Gb = Array.isArray(ub) ? null : null === ub || void 0 === ub ? void 0 : ub.serverPosition;
            if (Gb) {
              const ub = bb.pW.iK(hb);
              if (Math.abs(ub[0] - Gb[0]) > 10 || Math.abs(ub[1] - Gb[1]) > 10 || Math.abs(ub[2] - Gb[2]) > 10) return !0
            }
            hb = null === (Ob = bb.pW.Hhb(hb)) || void 0 === Ob ? void 0 : Ob.mZ
          }
          return !1
        }(bb) && function(bb, ub, hb, Bb) {
          const Ob = Gb.e.bX;
          for (let Gb = 0; Gb < bb.length; Gb++) {
            const Ub = bb[Gb];
            if (!(0, eb.j)(ub, hb, Bb, Ub[0] * Ob, Ub[1] * Ob, Ub[2] * Ob)) return !1
          }
          return !0
        }(ub.Dp.fZ, Hb, wb, Zb), pb = null === Lb || Math.abs(Hb - Lb[0]) > 8 || Math.abs(wb - Lb[1]) > 8 || Math.abs(Zb - Lb[2]) > 8, ob = !Yb || pb || performance.now() - Ub >= 1e4;
        Yb = Xb, Xb && ob && (Ob = ab, Ub = performance.now(), Lb = [Hb, wb, Zb], (0, Bb.sendColyMessage)(Sb.qg, {
          TG: ab
        }))
      };
      return bb.on("gH", ab), () => {
        bb.off("gH", ab)
      }
    }
    var sb = hb(36404),
      Mb = hb(324),
      mb = hb.n(Mb),
      Ib = hb(6213),
      Pb = hb(37675),
      qb = hb(37406),
      Eb = hb(37387),
      yb = hb(4281),
      Vb = hb(37708),
      Fb = hb(37517),
      fb = hb(37036),
      kb = hb(37317),
      Tb = hb(38604),
      cb = hb(36386),
      Qb = hb(36393),
      Rb = hb(38607),
      bu = hb(38615),
      uu = hb(3437),
      hu = hb(1415),
      Bu = hb(2554),
      Ou = hb(2712),
      Gu = hb(37865),
      Uu = hb(36707),
      Lu = hb(4542),
      Yu = hb(38666),
      Su = hb(37696),
      au = hb(4002),
      Hu = hb(36772),
      wu = hb(36871),
      Zu = hb(37717),
      Xu = hb(38623),
      pu = hb(38637),
      ou = hb(37027);
    class Au {
      constructor(bb, ub, hb, Bb) {
        this.gameNameWithVariation = bb, this.PH = hb, this.connectionResume = Bb, this.stateReplicationHandler = void 0, this.stopChunkReports = () => {}, this.replayResume = null, this.stateReplicationHandler = new pu.c(ub, this.PH)
      }
      setupStateReplicationHandlers() {
        this.stateReplicationHandler.setup(), (0, Bb.onGameResetOnce)((() => {
          this.stateReplicationHandler.dispose()
        }))
      }
      dSb(bb) {
        this.stateReplicationHandler.dispose(), this.stateReplicationHandler = new pu.c(bb, this.PH), this.stateReplicationHandler.setup()
      }
      clearBlockRules() {
        const bb = this.PH.eH;
        bb.Khb = new Set, bb.dhb = new Set, bb.Whb = new Set, bb.rhb = new Set, bb.Chb = [], bb.jhb = [], bb.mq = new Set, bb.VG = [], bb.Iq = []
      }
      clearUiRequestsAndQTEs() {
        Lu.c.reset(), (0, rb.c)()
      }
      startChunkReports() {
        const bb = function(bb) {
            let ub = null,
              hb = -1 / 0,
              Ob = null;
            const Gb = () => {
                Ob = null;
                const Gb = Math.ceil(bb.GJ[0]),
                  Ub = Math.ceil(bb.GJ[1]);
                ub && ub[0] === Gb && ub[1] === Ub || (ub = [Gb, Ub], hb = performance.now(), (0, Bb.sendColyMessage)(Sb.ng, {
                  eS: Gb,
                  NS: Ub
                }))
              },
              Ub = () => {
                null === Ob && (Ob = setTimeout(Gb, Math.max(0, hb + 250 - performance.now())))
              };
            return Gb(), bb.on("addRemoveDistanceChanged", Ub), () => {
              bb.off("addRemoveDistanceChanged", Ub), null !== Ob && (clearTimeout(Ob), Ob = null)
            }
          }(this.PH.eH),
          ub = Nb(this.PH);
        this.stopChunkReports = () => {
          bb(), ub()
        }
      }
      restartChunkStreaming() {
        (0, kb.j)(this.PH, (0, Yb.e)().recentChunkEdits.chunksEditedSince(this.connectionResume.getDroppedAt() - Tb.b)), this.startChunkReports()
      }
      setupOnMessageListeners(bb, ub) {
        const hb = this.PH,
          Ob = this.gameNameWithVariation;
        bb.sK(Sb.sc, (bb => {
          let {
            Th: ub,
            Qh: Bb,
            Rh: Ob,
            bB: Gb,
            uB: Ub,
            hB: Lb,
            BB: Yb,
            OB: Sb,
            GB: ab
          } = bb;
          if (!hb.pW.Nbb(ub, "itemState")) return void(0, qb.g)(hb, ub, [Ub, Lb, Yb], Bb, {
            amount: Ob,
            attributes: JSON.parse(Gb),
            OB: Sb,
            size: ab
          });
          const Hb = hb.pW.getState(ub, "itemState");
          Hb.amount = Ob, Hb.OB = Sb, Hb.creationTime = Date.now(), (0, Eb.setServerPosition)(hb.pW.getState(ub, "smoothToServerPos"), Ub, Lb, Yb)
        })), bb.sK(Sb.lb, (bb => {
          (0, gb.e)(hb).setCantPickUp(bb, !0), hb.pW.Nbb(bb, "itemState") && (hb.pW.getState(bb, "itemState").OB = !0)
        })), bb.sK(Sb.Nd, (bb => {
          (0, gb.e)(hb).setCantPickUp(bb, !1), hb.pW.Nbb(bb, "itemState") && (hb.pW.getState(bb, "itemState").OB = !1)
        })), bb.sK(Sb.Qc, (bb => {
          lb.b.applyNewClientOptions(bb)
        })), bb.sK(Sb.Sc, (bb => {
          let {
            eId: ub,
            settings: Bb
          } = bb;
          (0, wu.d)(ub);
          for (const hb in Bb)(0, wu.c)(ub, hb, Bb[hb]);
          if ("canSee" in Bb && hb.pW.Nbb(ub, "hidingMeshManager")) {
            const bb = hb.pW.getState(ub, "hidingMeshManager");
            bb.canSee = (0, Zu.e)("canSee", Bb.canSee), bb._forceUpdate = !0
          }
        })), bb.sK(Sb.ef, (bb => {
          let {
            Yu: ub,
            Su: Ob,
            au: Gb,
            Hu: Ub
          } = bb;
          const Lb = [Ob, Gb, Ub];
          hb.pW.setPosition(hb.bM, Lb), (0, Bb.sendColyMessage)(Sb.Pg, {
            wS: ub,
            ZS: yb.h
          }), Ab.i.vp("localPlayerTeleported", {
            pos: Lb,
            isCorrection: !1
          })
        })), bb.sK(Sb.bd, (bb => {
          let {
            bb: ub,
            ub: hb,
            hb: Bb,
            Bb: Ob
          } = bb;
          this.stateReplicationHandler.setUpIfQueued(ub);
          const Gb = [hb, Bb, Ob];
          Ab.i.vp(`otherPlayerTeleported|${ub}`, {
            pos: Gb
          })
        })), bb.sK(Sb.qd, (bb => {
          let {
            aO: ub,
            HO: Ob,
            wO: Gb,
            ZO: Ub,
            XO: Lb,
            pO: Yb,
            oO: ab,
            KO: Hb,
            lO: wb,
            dO: Zb
          } = bb;
          const Xb = [Ob, Gb, Ub];
          hb.pW.setPosition(hb.bM, Xb);
          const pb = hb.pW.uub(hb.bM),
            ob = hb.pW.Qq(hb.bM);
          mb().set(ob.Yq, 0, 0, 0), mb().set(ob.wq, 0, 0, 0), mb().set(ob.Mp, Lb, Yb, ab), ob.oq(), pb._flying = null !== Zb, Zb ? (pb.flyAccel.rO = Zb.rO, pb.flyAccel.jO = Zb.jO) : pb.flyAccel.reset(), Hb && pb.movementType === Ib.m.GLIDING && (pb.WO = Hb.WO, mb().copy(pb.CO, Hb.CO)), (0, Bb.sendColyMessage)(Sb.Pg, {
            wS: ub,
            ZS: yb.h
          }), Ab.i.vp("localPlayerTeleported", {
            pos: Xb,
            isCorrection: !0
          })
        }));

        function Gb() {
          return hb.pW.xub(hb.bM)
        }
        bb.sK(Sb.ub, (bb => {
          let {
            chatMsgId: ub,
            content: hb,
            chatterEId: Bb
          } = bb;
          Ab.i.vp("chat", {
            serverChatMsgId: ub,
            content: hb,
            chatterEId: Bb
          }, !0)
        })), bb.sK(Sb.id, (bb => {
          Bu.b.onReceiveColyseusPing(bb)
        })), bb.sK(Sb.Be, (bb => {
          let {
            key: ub,
            value: hb
          } = bb;
          (0, Kb.setCookie)(Ob, ub, hb)
        })), bb.sK(Sb.Ge, (bb => {
          Ab.i.vp("setDiscordReportKey", bb)
        })), (0, Bb.onGameResetOnce)((() => {
          this.stopChunkReports()
        })), bb.sK(Sb.lc, (ub => {
          const {
            Cu: Ob,
            ru: Gb
          } = ub;
          if ((0, Bb.setAdjustment)(Gb), this.connectionResume.onInitialInfo(ub.ju, ub.nu), Bb.offlineInputReplay.Zx(ub.Du), this.connectionResume.isResuming()) {
            console.log("Resumed the connection as eId", Ob);
            try {
              null === ub.xu && (0, Yb.e)().client.inventoryPrediction.dropPending(), this.stopChunkReports(), this.clearBlockRules(), lb.b.apply({
                shopInfo: null,
                _shopVersion: Jb.c
              });
              const Bb = hb.pW.zub(hb.bM);
              Bb.qh && (Bb.chestClosed(), Ab.i.vp("chestToggleFromServer", !1, !0)), this.clearUiRequestsAndQTEs(), Ab.i.vp("initInfoReceived", bb)
            } finally {
              const bb = null === ub.xu ? null : {
                sync: null,
                endSeq: null
              };
              this.replayResume = bb, this.connectionResume.onResumeInitialInfo(ub.xu, (() => {
                bb.endSeq = (0, Yb.e)().client.inventoryPrediction.lastActionSeq
              })), null === bb && this.restartChunkStreaming()
            }
          } else console.log("Local client is eId", Ob), Ab.i.vp("loadingScreenState", "loadingPage:loadingWorld"), hb.Mbb = Ob, hb.pW.Nbb(hb.bM, hb.pW.names.entityName) && hb.pW.kN(hb.bM, hb.pW.names.entityName), (0, Yb.e)().setEntityName(hb.Mbb, (0, Yb.e)().getRawEntityName(hb.bM)), hb.Qs[hb.Mbb] = {}, hb.pW.FN(hb.bM, hb.pW.names.entityName), Ab.i.vp("initInfoReceived", bb), this.startChunkReports(), Ub.client.onServerConnectionFinalised()
        })), bb.sK(Sb.ke, (() => {
          this.connectionResume.isResuming() ? this.connectionResume.onResumed((() => {
            const bb = this.replayResume;
            if (this.replayResume = null, !bb) return;
            this.restartChunkStreaming();
            const {
              inventoryPrediction: ub
            } = (0, Yb.e)().client, {
              sync: Ob
            } = bb, Gb = new Set(Bb.offlineInputReplay.takeDroppedActions());
            if (Ob) {
              var Ub;
              const Bb = null !== (Ub = bb.endSeq) && void 0 !== Ub ? Ub : ub.lastActionSeq;
              ub.forget((bb => bb > Ob.uu && bb <= Bb || Gb.has(bb))), Cb(hb, ub, Ab.i, Ob.uu, Ob.load)
            } else ub.dropPending(), ub.askForSnapshot()
          })) : console.warn("ResumeComplete arrived without a resume")
        })), bb.sK(Sb.if, (bb => {
          Ab.i.vp("TopRightHelper", bb, !0)
        })), bb.sK(Sb.td, (bb => {
          let {
            type: ub,
            location1: hb,
            location2: Bb,
            location3: Ob,
            score: Gb
          } = bb;
          (0, Ou.q)({
            type: ub,
            location1: hb,
            location2: Bb,
            location3: Ob,
            score: Gb
          })
        })), bb.sK(Sb.ge, (bb => {
          let {
            type: ub,
            resourceType: hb,
            amount: Bb,
            category: Ob,
            itemName: Gb
          } = bb;
          (0, Ou.t)({
            type: ub,
            resourceType: hb,
            amount: Bb,
            category: Ob,
            itemName: Gb
          })
        })), bb.sK(Sb.Y, (bb => {
          hb.eH.Khb.add(bb), hb.eH.dhb.delete(bb)
        })), bb.sK(Sb.fb, (bb => {
          hb.eH.dhb.add(bb), hb.eH.Khb.delete(bb)
        })), bb.sK(Sb.Qd, (bb => {
          hb.eH.dhb.delete(bb), hb.eH.Khb.delete(bb)
        })), bb.sK(Sb.eb, (bb => {
          hb.eH.Whb.add(bb), hb.eH.rhb.delete(bb)
        })), bb.sK(Sb.ib, (bb => {
          hb.eH.rhb.add(bb), hb.eH.Whb.delete(bb)
        })), bb.sK(Sb.Xd, (bb => {
          hb.eH.rhb.delete(bb), hb.eH.Whb.delete(bb)
        })), bb.sK(Sb.ab, (bb => {
          (0, Hb.tb)(bb, hb.eH.jhb), (0, Hb.tb)(bb, hb.eH.Chb), hb.eH.Chb.push(bb)
        })), bb.sK(Sb.gb, (bb => {
          (0, Hb.tb)(bb, hb.eH.Chb), (0, Hb.tb)(bb, hb.eH.jhb), hb.eH.jhb.push(bb)
        })), bb.sK(Sb.Ud, (bb => {
          (0, Hb.tb)(bb, hb.eH.Chb), (0, Hb.tb)(bb, hb.eH.jhb)
        })), bb.sK(Sb.Bf, (bb => {
          let {
            Wh: ub,
            Ch: Bb
          } = bb;
          Bb ? hb.eH.mq.delete(ub) : hb.eH.mq.add(ub)
        })), bb.sK(Sb.xf, (bb => {
          let {
            VG: ub,
            FG: Bb
          } = bb;
          Ub.updateWalkThroughRect(hb.bM, ub, Bb)
        })), (0, Bb.onGameResetOnce)((() => {
          this.clearBlockRules()
        })), bb.sK(Sb.af, (bb => {
          (0, db.c)(bb)
        })), bb.sK(Sb.ec, (bb => {
          jb.c.applyServerUpdate(bb)
        })), bb.sK(Sb.nb, (bb => {
          Ub.applyServerBlocks((() => {
            ! function(bb, ub) {
              for (const {
                  qG: hb,
                  EG: Bb
                }
                of ub) {
                const ub = nb.d[Bb];
                if (ub) {
                  const {
                    compX: Bb,
                    compY: Ob,
                    compZ: Gb,
                    mainMultiblock: Ub
                  } = ub;
                  bb.vJ(hb[0] - Bb, hb[1] - Ob, hb[2] - Gb, Ub)
                }
              }
              for (const {
                  qG: hb,
                  EG: Bb,
                  yG: Ob
                }
                of ub) bb.setBlockNoMulti(hb[0], hb[1], hb[2], Bb, !0), bb.blockDataOwner.setBlockData(hb[0], hb[1], hb[2], null === Ob ? void 0 : JSON.parse(Ob)), bb.blockAdded(hb[0], hb[1], hb[2], Bb)
            }(Ub, bb)
          })), Ab.i.vp("changeBlockFail", bb), Ub.client.triggerGameCallback("onChangeBlockFail", bb), Ab.i.vp("EditBoard", {
            pos: null
          }), Ab.i.vp("EditCodeBlock", {
            pos: null,
            canChangePos: null
          })
        })), bb.sK(Sb.fd, (bb => {
          let {
            pickUpItems: ub,
            pickUpAckSeq: hb
          } = bb;
          for (const {
              name: Bb,
              amount: Ob,
              attributes: Ub
            }
            of ub) Gb().pickUpItem({
            name: Bb,
            amount: Ob,
            typeObj: qb.z[Bb],
            attributes: Ub
          });
          (0, Yb.e)().client.inventoryPrediction.serverChangeApplied(hb)
        })), bb.sK(Sb.Ke, (bb => {
          let {
            index: ub,
            name: Bb,
            amount: Ob,
            attributes: Gb,
            setSlotAckSeq: Ub
          } = bb;
          const Lb = hb.pW.zub(hb.bM);
          (ub < Lb.playerInventory.numSlots || Lb.qh || Lb.inCreative) && Lb.setItemSlot(ub, Bb, Ob, Gb), (0, Yb.e)().client.inventoryPrediction.serverChangeApplied(Ub)
        })), bb.sK(Sb.Ye, (bb => {
          let {
            Ph: ub,
            Fh: Bb,
            uu: Ob
          } = bb;
          const {
            inventoryPrediction: Gb
          } = (0, Yb.e)().client, Ub = () => {
            hb.pW.zub(hb.bM).loadFromString(ub)
          };
          this.replayResume && (this.replayResume.sync = {
            uu: Ob,
            load: Ub
          }), Cb(hb, Gb, Ab.i, Ob, Ub, Bb)
        })), bb.sK(Sb.qc, (bb => {
          (0, Yb.e)().client.inventoryPrediction.acknowledge(bb)
        })), bb.sK(Sb.F, (bb => {
          let {
            Mb: ub,
            Ib: hb,
            Pb: Bb,
            qb: Ob
          } = bb;
          (0, Yb.e)().client.itemDropPrediction.onActionItemDrops(ub, hb, Bb, Ob)
        })), bb.sK(Sb.Hb, (bb => {
          Gb().clearInventory(), (0, Yb.e)().client.inventoryPrediction.serverChangeApplied(bb)
        })), bb.sK(Sb.Ac, (bb => {
          let {
            leaveEventType: ub,
            category: hb,
            subCategory: Bb,
            value: Ob
          } = bb;
          (0, Ou.E)({
            leaveEventType: ub,
            category: hb,
            subCategory: Bb,
            value: Ob
          })
        })), bb.sK(Sb.Sb, (bb => {
          let {
            cat1: ub,
            cat2: hb,
            cat3: Bb,
            value: Ob
          } = bb;
          (0, Ou.m)({
            cat1: ub,
            cat2: hb,
            cat3: Bb,
            value: Ob
          })
        }));
        const Ub = (0, Yb.e)();
        bb.sK(Sb.Nb, (bb => {
          Ub.applyServerBlocks((() => {
            zb(Ub, jb.c, bb)
          }))
        })), bb.sK(Sb.Le, (bb => {
          Ab.i.vp("setSelectedInventorySlotI", bb, !0)
        })), bb.sK(Sb.yc, (bb => {
          let {
            category: ub,
            timeframe: hb,
            data: Bb
          } = bb;
          Ab.i.vp("leaderboardResponse", {
            category: ub,
            timeframe: hb,
            data: Bb
          })
        })), bb.sK(Sb.W, (bb => {
          let {
            Ku: ub,
            Wu: hb
          } = bb;
          this.stateReplicationHandler.setUpIfQueued(ub), ub = (0, sb.d)(ub), (0, Yb.e)().client.gameRecorder.recordBulletShot(ub, hb), Ab.i.vp(`bulletShot|${ub}`, {
            bulletDirections: hb
          })
        })), bb.sK(Sb.hc, (bb => {
          let {
            DB: ub,
            xB: hb
          } = bb;
          Ab.i.vp("damagedByOtherPlayer", {
            DB: ub,
            direction: hb
          }, !0)
        })), bb.sK(Sb.od, (bb => {
          Ab.i.vp("playerKilled", bb, !0), (0, Yb.e)().client.gameRecorder.recordPlayerKilled(bb.deadEId, bb.killerEId, bb.withItem, bb.killstreak)
        })), bb.sK(Sb.Ub, (bb => {
          Ab.i.vp("customKillfeed", bb, !0), (0, Yb.e)().client.gameRecorder.recordCustomKillfeed(bb.killer, bb.victim, bb.withItem)
        })), bb.sK(Sb.ud, (bb => {
          let {
            DO: ub,
            xO: Bb
          } = bb;
          this.stateReplicationHandler.setUpIfQueued(ub);
          const Ob = hb.pW.cub(ub);
          null !== Ob && void 0 !== Ob && Ob.isGun() && Ob.reload(Date.now(), Bb)
        })), bb.sK(Sb.Xe, (() => {
          Ab.i.vp("showShopTutorial", null, !0)
        })), bb.sK(Sb.rd, (bb => {
          Ab.i.vp("progressBarUpdate", bb, !0)
        })), bb.sK(Sb.pc, (bb => {
          Ab.i.vp("middleScreenBarInitiate", {
            duration: bb.wu,
            Zu: bb.Zu,
            horizBarRemOffset: bb.Xu
          }, !0)
        })), bb.sK(Sb.Cd, (() => {
          Ab.i.vp("middleScreenBarRemove", !0)
        })), bb.sK(Sb.pe, (bb => {
          let {
            Db: ub,
            xb: Bb
          } = bb;
          const Ob = Bb ? (0, Su.g)(hb, Bb) : void 0;
          Ab.i.vp("sendHitmarker", {
            Db: ub,
            screenPos: Ob
          }, !0)
        })), bb.sK(Sb.Fe, (bb => {
          let {
            id: ub,
            position: hb,
            style: Bb,
            XB: Ob,
            oB: Gb
          } = bb;
          Ab.i.vp("setDirectionArrow", {
            id: ub,
            position: hb,
            style: Bb,
            text: (0, Sb.y)(Ob),
            oB: Gb
          }, !0)
        })), bb.sK(Sb.Fb, (bb => {
          let {
            id: ub
          } = bb;
          Ab.i.vp("clearDirectionArrow", {
            id: ub
          }, !0)
        })), bb.sK(Sb.J, (bb => {
          let {
            Ub: ub,
            Lb: Bb,
            animationScript: Ob,
            Yb: Gb,
            Sb: Ub,
            ab: Lb,
            Hb: Sb
          } = bb;
          ub = (0, sb.d)(ub);
          const ab = null === Ob && null !== Lb ? (0, ib.h)(Lb, Sb) : Ob;
          (0, Yb.e)().client.gameRecorder.recordAnimateEntity(ub, Bb, ab, Gb, Ub), (0, gb.e)(hb).animations.animateEntity(ub, Bb, Ob, Gb, Ub, Lb, Sb), null !== Ob || ub === hb.bM && Bb === Hu.f.Emote && (0, Yb.e)().client.cameraController.endTemporaryThirdPerson()
        })), bb.sK(Sb.pf, (bb => {
          let {
            fG: ub,
            kG: hb
          } = bb;
          if (Ub.GV(ub[0], ub[1], ub[2])) {
            const bb = (0, Yb.e)().rK(ub[0], ub[1], ub[2]);
            (0, Yb.e)().updateMailboxContents(ub[0], ub[1], ub[2], bb, hb)
          }
        })), bb.sK(Sb.xb, (bb => {
          let {
            Eb: ub,
            yb: Bb,
            Vb: Ob,
            Fb: Gb,
            fb: Ub,
            kb: Lb,
            Tb: Sb,
            cb: ab
          } = bb;
          const Hb = hb.pW.zub(hb.bM);
          if (Lb) {
            const {
              Rb: bb,
              uu: ub
            } = ab;
            return (0, Yb.e)().client.inventoryPrediction.N_(ub, (() => {
              Hb.chestRefreshed(Bb, Ob, Gb, Sb, bb)
            })) && Ab.i.vp("chestToggleFromServer", !1, !0), void Ab.i.vp("chestRefreshedFromServer")
          }(ub || Hb.qh) && (ub ? (Hb.chestOpened(Bb, Ob, Gb, Ub, Sb), null !== Ub && (0, Yb.e)().client.ironChestPasskeyCache.onChestOpened(Gb, Ub)) : Hb.chestClosed(), Ab.i.vp("chestToggleFromServer", ub, !0))
        })), bb.sK(Sb.Vb, (bb => {
          let {
            craftingRecipeItemName: ub,
            recipesForItem: Bb
          } = bb;
          ub ? Ub.craftingManager.editRecipesForPlayer(hb.bM, ub, Bb) : Ub.craftingManager.resetAllPlayerRecipes(hb.bM), Ab.i.vp("craftingRecipesEdited", {
            itemName: ub,
            recipesForItem: Bb
          })
        })), bb.sK(Sb.Pe, (bb => {
          let {
            vehicleEId: ub,
            overrides: hb
          } = bb;
          (0, Yb.e)().applyRiddenVehicleSettingOverrides(ub, hb)
        })), bb.sK(Sb.vf, (bb => {
          let {
            Mh: ub,
            mh: Bb,
            Ih: Ob
          } = bb;
          const Gb = hb.pW.uub(hb.bM).physicsState.type === Ib.n.SLEEPING && ub === Ib.n.DEFAULT;
          (0, Yb.e)().updatePositionAndPhysics(hb.bM, {
            type: ub,
            tier: Bb
          }, !0, Ob), Gb && (0, Yb.e)().updateHeldVehicleStatus()
        })), bb.sK(Sb.pb, (bb => {
          let {
            rB: ub,
            jB: Bb
          } = bb;
          hb.pW.nub(hb.bM).setPose(ub, Bb)
        })), bb.sK(Sb.me, (bb => {
          (0, Xu.b)(bb)
        })), bb.sK(Sb.md, (bb => {
          for (const ub of bb)(0, Vb.B)(ub);
          Ab.i.vp("playerCosmeticsUpdated", bb, !0)
        })), bb.sK(Sb.P, (bb => {
          for (const ub of bb)(0, Uu.d)(hb, ub)
        })), bb.sK(Sb.Ic, (bb => {
          let {
            zb: ub,
            gb: Bb,
            tb: Ob,
            Jb: Gb,
            eb: Lb,
            Nb: Yb,
            sb: Sb
          } = bb;
          this.stateReplicationHandler.setUpIfQueued(ub), ub = (0, sb.d)(ub);
          const ab = hb.pW.Eub(ub);
          if (ab && (ab.lastHurtTime = performance.now()), (0, Pb.playRigHurt)(hb, ub, Yb), Ab.i.vp("lifeformHurt", {
              eId: ub,
              sb: Sb
            }), Bb) {
            const bb = (0, Su.g)(hb, Bb.xb);
            Ab.i.vp("yourAttackHit", {
              Db: Gb,
              screenPos: bb,
              hitSelf: ub === hb.bM
            })
          }
          ub === hb.bM && (Ub.shakePlayerCamera(ub, Lb / 40, 200), Ab.i.vp("closeShopOnDamaged", null), Ab.i.vp("damagedByOtherPlayer", {
            DB: null,
            direction: Yb,
            eb: Lb
          }, !0));
          const Hb = hb.pW.iK(ub);
          if (Hb && (Ob || Gb)) {
            const bb = [Hb[0], Hb[1] + 1, Hb[2]];
            Ob && (0, Fb.j)(hb, Fb.x, bb, 15), Gb && (0, Fb.j)(hb, Fb.o, bb, 10)
          }
        })), bb.sK(Sb.Ec, (bb => {
          let {
            Lh: ub,
            Yh: Bb,
            Sh: Ob
          } = bb;
          (0, gb.e)(hb).setHealthFrac((0, sb.d)(ub), Ob), Ab.i.vp("lifeformHealthChanged", {
            eId: (0, sb.d)(ub),
            Yh: Bb,
            Sh: Ob
          })
        })), bb.sK(Sb.T, (bb => {
          let {
            jh: ub,
            nh: Bb
          } = bb;
          (0, Yb.e)().playerAttacked(hb.bM, ub, Bb)
        })), bb.sK(Sb.xc, (bb => {
          (0, Yb.e)().client.leaveGameUnwanted({
            reason: bb,
            requiresRefresh: !1,
            canReconnect: !1,
            automaticallyReconnect: !1
          }), (0, hu.navigatePreserveSearch)("/")
        })), bb.sK(Sb.zd, (bb => {
          let {
            Dh: ub,
            xh: hb,
            zh: Bb
          } = bb;
          Gb().removeItemName(ub, hb), (0, Yb.e)().client.inventoryPrediction.serverChangeApplied(Bb)
        })), bb.sK(Sb.xe, (bb => {
          const {
            ta: ub,
            Yhb: Bb
          } = (0, fb.f)([bb[0], bb[1], bb[2]]);
          ou.c.setLookDirection(hb, ub, Bb), (0, kb.n)(ub, Bb);
          const Ob = hb.pW.nub(hb.bM);
          Ob && (Ob.heading = ub)
        })), bb.sK(Sb.Ae, (bb => {
          Ub.client.cameraController.setCameraZoom(bb)
        })), bb.sK(Sb.Te, (bb => {
          let {
            dh: ub,
            rh: Bb
          } = bb;
          Ub.shakePlayerCamera(hb.bM, ub, Bb)
        })), bb.sK(Sb.Qb, (bb => {
          (0, uu.onCosmeticPackGranted)(bb)
        })), bb.sK(Sb.te, (bb => {
          Ab.i.vp("serverUpdating", Date.now() + bb, !0)
        })), bb.sK(Sb.Nc, vb.c), bb.sK(Sb._c, (bb => {
          let {
            id: ub,
            eB: hb
          } = bb;
          const {
            type: Ob,
            params: Gb
          } = (0, Yu.h)(hb), Ub = {
            ...Gb
          };
          for (const Bb of Yu.e) Bb in Ub && Ub[Bb] && (Ub[Bb] = (0, Sb.y)(Ub[Bb]));
          Lu.c.queueQTE(ub, Ob, Ub).getResult().then((bb => {
            "boolean" === typeof bb && (0, Bb.sendColyMessage)(Sb.$h, {
              qteId: ub,
              qteResponse: bb
            })
          }))
        })), bb.sK(Sb.Fd, (bb => {
          Lu.c.cancelQTE(bb)
        })), (0, Bb.onGameResetOnce)((() => {
          Lu.c.reset()
        })), bb.sK(Sb.$c, (bb => {
          let {
            id: ub,
            clientParameters: hb
          } = bb;
          (0, rb.f)(ub, hb)
        })), bb.sK(Sb.Jd, (bb => {
          (0, rb.g)(bb)
        })), bb.sK(Sb.mf, (bb => {
          let {
            text: ub,
            id: hb
          } = bb;
          (0, rb.i)(hb, ub, (bb => {
            (0, Bb.sendColyMessage)(Sb.rj, {
              Xa: hb,
              oa: bb,
              Aa: 5
            })
          }))
        })), bb.sK(Sb.Wb, (bb => {
          let {
            fu: ub,
            ku: hb,
            Tu: Bb,
            cu: Ob,
            Qu: Gb,
            Ru: Ub
          } = bb;
          ub = (0, sb.d)(ub), (0, Yb.e)().client.updateEffect(ub, hb, {
            displayName: Bb,
            icon: Ob,
            duration: Gb,
            level: Ub
          })
        })), bb.sK(Sb.wd, (bb => {
          let {
            fu: ub,
            ku: hb
          } = bb;
          ub = (0, sb.d)(ub), (0, Yb.e)().client.removeEffect(ub, hb)
        })), bb.sK(Sb.wc, (bb => {
          hb.pW.nub(hb.bM).jumpMultiplier.setMultiplierType("jumpEffectAmount", bb)
        })), bb.sK(Sb.kf, (bb => {
          Ab.i.vp("ttbEffectMultiplier", bb)
        })), (0, Bb.onGameResetOnce)((() => {
          hb.pW.nub(hb.bM).jumpMultiplier.setMultiplierType("jumpEffectAmount", 1)
        })), bb.sK(Sb.Wc, (bb => {
          (0, Fb.n)(hb, (0, Hb.x)(bb))
        })), bb.sK(Sb.Yc, (bb => {
          au.d[bb.nO] ? (0, Fb.n)(hb, {
            ...au.d[bb.nO],
            pos1: bb.pos1,
            pos2: bb.pos2
          }) : console.error(`Unknown preset id: ${bb.nO}`)
        })), bb.sK(Sb.jd, (bb => {
          var ub, hb;
          let {
            bh: Bb,
            uh: Ob,
            hh: Gb,
            Bh: Ub
          } = bb, {
            Gh: Lb,
            Uh: Sb
          } = null !== Ub && void 0 !== Ub ? Ub : {};
          const {
            Oh: ab
          } = null !== Ub && void 0 !== Ub ? Ub : {};
          Lb = null !== (ub = Lb) && void 0 !== ub ? ub : void 0, Sb = null !== (hb = Sb) && void 0 !== hb ? hb : void 0, "string" === typeof ab && this.stateReplicationHandler.setUpIfQueued(ab), (0, Yb.e)().client.gameRecorder.recordPlaySound(Bb, Ob, Gb, Ub), cb.e.play((0, Qb.i)(Bb), Ob, ab, Lb, Sb).rate(Gb)
        })), bb.sK(Sb.ue, (bb => {
          let {
            pos: ub,
            data: hb
          } = bb;
          Ub.blockDataOwner.setBlockData(ub[0], ub[1], ub[2], hb), Ub.blockAdded(ub[0], ub[1], ub[2], Ub.rK(ub[0], ub[1], ub[2]))
        })), bb.sK(Sb.cd, (bb => {
          let {
            info: ub
          } = bb;
          Ab.i.vp("overShopInfo", ub, !0)
        })), bb.sK(Sb.$b, (bb => {
          let {
            fh: Bb,
            kh: Ob
          } = bb;
          ub.openShop(hb.bM, Bb, Ob)
        })), bb.sK(Sb.L, (bb => {
          hb.pW.Qq(hb.bM).applyImpulse(bb)
        })), bb.sK(Sb.Re, (bb => {
          const ub = hb.pW.Qq(hb.bM);
          mb().set(ub.Yq, 0, 0, 0), mb().set(ub.wq, 0, 0, 0), mb().copy(ub.Mp, bb), ub.oq()
        })), bb.sK(Sb.Kc, (bb => {
          console.error(`[logErrorToConsole]: ${bb}`)
        })), bb.sK(Sb.Zb, (bb => {
          let {
            gh: ub,
            eh: hb,
            Nh: Bb
          } = bb;
          Ab.i.vp("flyingMiddleMessage", {
            content: (0, Sb.y)(ub),
            eh: hb,
            Nh: Bb
          }, !0)
        })), bb.sK(Sb.Ff, (bb => {
          const ub = bb === tb.g ? null : {
            message: `Currently loaded as variation: ${bb}`,
            type: "Warning"
          };
          Ab.i.vp("showPermanentBottomMessage", ub, !0)
        })), bb.sK(Sb.cc, (bb => {
          let {
            messageType: ub,
            data: hb
          } = bb;
          (0, Rb.e)(ub) ? (0, Rb.b)(ub, hb) : ("freeCamPerms" === ub && Ub.client.freeCameraController.setPerms(hb.key, hb.value), Ub.client.triggerGameCallback("onReceivedMessageFromServer", ub, hb))
        })), bb.sK(Sb.qb, (() => {
          const bb = hb.pW.cub(hb.bM);
          null !== bb && void 0 !== bb && bb.isChargeable() && bb.finishCharging(!1, Date.now())
        })), bb.sK(Sb.xd, (bb => {
          let {
            sh: ub
          } = bb;
          Ub.craftingManager.removeRecipes(hb.bM, ub), Ab.i.vp("craftingRecipesEdited", {
            itemName: ub,
            recipesForItem: []
          })
        })), bb.sK(Sb.sf, (bb => {
          for (const ub in bb) {
            const hb = bb[ub];
            for (const bb in hb) Ub.client.meshCreator.handleParticleSystemUpdate(ub, bb, hb[bb])
          }
        })), (0, Bb.onGameResetOnce)((() => {
          (0, Gu.setFloatingYValue)(hb.pW.getState(hb.bM, "physics"), hb.pW.JV(hb.bM), null)
        })), bb.sK(Sb.Xb, (bb => {
          let {
            zB: ub,
            gB: Bb,
            iB: Ob
          } = bb;
          const Gb = (0, sb.d)(ub);
          if (Gb === hb.bM) {
            const bb = hb.pW.JV(hb.bM).position;
            Ob ??= Math.floor(bb[1]) - 1, (0, Gu.setFloatingYValue)(hb.pW.getState(hb.bM, "physics"), hb.pW.JV(hb.bM), Bb ? Ob : null)
          }(0, gb.e)(hb).setFloating(Gb, Bb, Ob);
          const Ub = hb.pW.getState(Gb, "floating");
          Ub && (Ub.isFloating = Bb, Ub.iB = Bb ? Ob : null)
        })), bb.sK(Sb.Kb, bu.i)
      }
    }
    window.addEventListener("beforeunload", (() => {}));
    var lu = hb(38672),
      Ku = hb(38679),
      Wu = hb(612),
      Cu = hb(2736);
    class du {
      constructor(bb, ub, hb, Bb) {
        this.msgHandler = hb, this.listener = Bb, this.session = void 0, this.attachedRoom = null, this.detachRoomListeners = null, this.suspended = !1, this.droppedAt = 0, this.session = new lu.e({
          reconnect: bb,
          isLive: () => Bb.isLive(),
          onReconnected: bb => {
            this.resumeOnRoom(bb)
          },
          onGaveUp: (bb, ub) => {
            Bb.onGaveUp(bb, ub)
          },
          freeze: ub,
          releaseSeat: ub => {
            bb(ub).then((bb => {
              bb.leave(!0)
            }), (bb => {
              console.warn("Couldn't release the held seat of a game left while reconnecting", bb)
            }))
          }
        })
      }
      onInitialInfo(bb, ub) {
        this.session.onInitialInfo(bb, ub)
      }
      isResuming() {
        return this.session.isResuming()
      }
      getDroppedAt() {
        return this.droppedAt
      }
      onResumeInitialInfo(bb, ub) {
        if (this.session.onResuming(), null === bb) {
          try {
            (0, Yb.e)().client.itemDropPrediction.reset()
          } catch (hb) {
            console.error("Error dropping the item drop predictions on resuming", hb)
          }
          return Bb.offlineInputReplay.discard(), void this.setSuspended(!1)
        }(0, Yb.e)().client.itemDropPrediction.onResumeReplayOffered(), Bb.offlineInputReplay.replayFrom(bb.gu, ub)
      }
      onResumed(bb) {
        this.setSuspended(!1), (0, Bb.resendBeacons)();
        try {
          bb()
        } catch (ub) {
          console.error("Error completing the resume", ub)
        } finally {
          this.session.onResumed()
        }
      }
      attachRoom(bb) {
        const ub = (0, Wu.d)((() => bb.connection.isOpen));
        bb.IK(ub);
        const hb = new Ku.d((() => {
          this.session.canHoldSeat() && this.listener.isLive() && (console.warn("The game server went silent, reconnecting"), this.onConnectionDropped(bb, "silent"), bb.leave(!1))
        }));
        bb.onStateChange((() => {
          hb.heard()
        }));
        const Bb = ub => {
          ub.persisted || bb.leave(!0)
        };
        window.addEventListener("pagehide", Bb), bb.IK(((ub, hb) => {
          if (bb === this.attachedRoom && this.listener.isLive()) return (0, Gb.h)(ub) && this.session.canHoldSeat() ? (console.warn(`Connection to the game server dropped with code ${ub}, reconnecting`), this.listener.onDropped(ub, hb), void this.onConnectionDropped(bb, String(ub))) : void this.listener.onRoomLeft(ub, hb)
        })), this.attachedRoom = bb, this.detachRoomListeners = () => {
          ub(), hb.dispose(), window.removeEventListener("pagehide", Bb)
        }
      }
      dispose() {
        this.detachRoom(), this.session.leave(), this.setSuspended(!1)
      }
      setSuspended(bb) {
        bb !== this.suspended && (this.suspended = bb, (0, Bb.setConnectionSuspended)(bb), (0, Yb.e)().client.itemDropPrediction.setSuspended(bb))
      }
      detachRoom() {
        var bb;
        null === (bb = this.detachRoomListeners) || void 0 === bb || bb.call(this), this.detachRoomListeners = null, this.attachedRoom = null
      }
      onConnectionDropped(bb, ub) {
        (0, Cu.i)("disconnect", "Left room", ub), this.isResuming() || (this.droppedAt = Date.now()), this.detachRoom(), Bb.offlineInputReplay.onConnectionLost(), this.setSuspended(!0), this.session.onConnectionLost(bb.reconnectionToken)
      }
      resumeOnRoom(bb) {
        if (!this.listener.isLive()) return console.warn("Left the game while reconnecting, leaving the resumed room"), bb.leave(!0), void this.dispose();
        console.log("Reconnected to the game server, waiting for the game to resume"), (0, Xu.s)(), Bb.offlineInputReplay.onConnectionReplaced(), this.msgHandler.dSb(bb), this.listener.onReconnected(bb), this.attachRoom(bb)
      }
    }
    var ru = hb(3256),
      ju = hb(3259),
      nu = hb(1218),
      Du = hb(1193),
      xu = hb(4444),
      zu = hb(2941),
      gu = hb(981),
      iu = hb(37350),
      vu = hb(38688),
      tu = hb(8626),
      Ju = hb(38692),
      eu = hb(1713),
      Nu = hb(38699),
      su = hb(1613),
      Mu = hb(2566);

    function mu(bb) {
      var ub, hb;
      if ("object" !== typeof bb || null === bb) return {
        errType: typeof bb
      };
      const Bb = bb;
      return {
        errType: null !== (ub = null === (hb = bb.constructor) || void 0 === hb ? void 0 : hb.name) && void 0 !== ub ? ub : "",
        errName: "string" === typeof Bb.name ? Bb.name : "",
        eventType: "string" === typeof Bb.type ? Bb.type : "",
        errStack: "string" === typeof Bb.stack ? Bb.stack.split("\n").slice(1).join(" | ") : ""
      }
    }

    function Iu(bb) {
      if ("undefined" !== typeof ProgressEvent && bb instanceof ProgressEvent) return !0;
      if (!(bb instanceof Error)) return !1;
      const ub = bb.code;
      return "ServerError" === bb.name && void 0 === ub || "AbortError" === bb.name || "seat reservation expired." === bb.message || "early_leave" === bb.message
    }(0, pb.o)((bb => {
      (0, Cu.i)("wasm_net", bb)
    }));
    let Pu = !0;

    function qu() {
      Pu = !1
    }
    class Eu {
      constructor(bb) {
        this.gameNameWithVariation = void 0, this.lobbyName = void 0, this.colyClient = void 0, this.userContext = void 0, this.joinedAt = null, this.checkSendPath = () => {}, this.PH = void 0, this.connectionResume = void 0, this.incomingMsgInitialisor = void 0, this.gameNameWithVariation = bb.gameNameWithVariation, this.lobbyName = bb.lobbyName, this.colyClient = bb.colyClient, this.userContext = bb.userContext
      }
      async connectToServer(bb, ub, hb) {
        lb.b.reset(), bb.Qs = {
          [bb.bM]: {}
        }, bb.Mbb = void 0, (0, Xu.s)(), (0, Yb.e)().removeAllEntityNames(), (0, Yb.e)().setEntityName(bb.bM, this.userContext.getPlayerName()), (0, nu.l)({
          lobbyName: this.lobbyName
        }), console.log("Waiting for clientConnection passed promise to resolve");
        const Ub = (0, su.c)();
        console.log("joining server with game", this.gameNameWithVariation, "lobbyName", this.lobbyName);
        const Lb = performance.now(),
          Sb = (0, Ju.h)(this.userContext, (() => {
            const {
              roomName: Bb,
              joinOptions: Ob
            } = (0, Wb.d)(this.userContext, this.gameNameWithVariation, this.lobbyName, ub, (bb => zu.b.isUsingCustomGameTexturePack(bb)));
            return Ob.joinAdHold = Ub, Ob.renderBackend = (0, Mu.e)(bb.xX), (0, vu.f)((() => this.colyClient.joinOrCreate(Bb, Ob)), hb)
          }));
        return Ab.i.vp("loadingScreenState", "loadingPage:joiningLobby"), await Sb.then((ub => {
          if (this.joinedAt = performance.now(), this.PH = bb, Ub) {
            const bb = (0, su.l)((() => {
              ub.send(Ob.f), (0, Du.n)()
            }));
            ub.IK(bb), (0, Bb.onGameResetOnce)(bb)
          }
          const hb = new ob(ub);
          this.connectionResume = new du((bb => this.colyClient.reconnect(bb)), (ub => {
            bb.OJ(ub)
          }), hb, {
            isLive: () => (0, Yb.e)().client.getMsgHandler() === hb,
            onDropped: (bb, ub) => {
              (0, ju.g)(bb) || this.logUnrecognisedConnectionLoss(bb, void 0, {
                site: "drop",
                closeReason: null !== ub && void 0 !== ub ? ub : "",
                sinceJoined: this.sinceJoined()
              })
            },
            onRoomLeft: (bb, ub) => {
              this.onRoomLeft(bb, ub)
            },
            onReconnected: bb => {
              this.incomingMsgInitialisor.dSb(bb), this.checkSendPath = (0, iu.g)(hb, bb, pb.p)
            },
            onGaveUp: (bb, ub) => {
              this.onResumeGaveUp(bb, ub)
            }
          }), this.connectionResume.attachRoom(ub), (0, Bb.onGameResetOnce)((() => {
            this.connectionResume.dispose()
          }));
          const Gb = hb.send,
            Lb = hb.sK,
            Sb = hb.ghb.send,
            ab = hb.ghb.sK,
            Hb = hb.WSb;
          this.checkSendPath = (0, iu.g)(hb, ub, pb.p);
          const wb = setInterval((() => {
            Gb === hb.send && Lb === hb.sK && Sb === hb.ghb.send && ab === hb.ghb.sK && Hb === hb.WSb || qu(), this.checkSendPath()
          }), 1e4);
          return (0, Bb.onGameResetOnce)((() => {
            clearInterval(wb)
          })), {
            success: !0,
            successDetails: hb
          }
        })).catch((ub => {
          if (hb.aborted && ub === (0, eu.f)(hb)) return {
            success: !1,
            failDetails: {
              reason: "Left the game while it loaded",
              requiresRefresh: !1,
              canReconnect: !1
            }
          };
          if (ub instanceof Nu.c) return console.warn("Seat request timed out", this.lobbyName, this.gameNameWithVariation), {
            success: !1,
            failDetails: {
              reason: ub.message,
              requiresRefresh: !1,
              canReconnect: !1,
              gameServerUnreachable: "timedOut"
            }
          };
          bb.TX(`Failed to connect to bloxd room, check your internet connection. lobbyName: ${this.lobbyName}, gameNameWithVariation: ${this.gameNameWithVariation} code: ${ub.code}\n`, ub);
          const Bb = ub.code;
          return Bb === Gb.d.serverUpdating.code ? (this.goToUpdateWaiting(), {
            success: !1,
            failDetails: {
              reason: Gb.d.serverUpdating.text,
              requiresRefresh: !1,
              canReconnect: !0,
              goesToUpdateWaiting: !0
            }
          }) : {
            success: !1,
            failDetails: {
              ...this.onConnectionToServerLost(Bb, ub.message, {
                site: "join",
                sinceJoinStart: (0, ju.c)(performance.now() - Lb),
                ...mu(ub)
              }, Iu(ub)),
              rematch: (0, vu.b)(ub),
              gameRefused: (0, tu.d)(ub)
            }
          }
        }))
      }
      setupServerListeners(bb, ub, hb) {
        Ab.i.vp("loadingScreenState", "loadingPage:loadingPlayerInfo"), this.incomingMsgInitialisor = new Au(this.gameNameWithVariation, ub.ghb, bb, this.connectionResume), this.incomingMsgInitialisor.setupStateReplicationHandlers();
        const Ob = ub.DSb();
        this.incomingMsgInitialisor.setupOnMessageListeners(Ob, hb), (0, Bb.onConnectionToServerReady)(Ob, ub), Ob.finishRegistration()
      }
      dispose() {
        this.connectionResume.dispose()
      }
      onResumeGaveUp(bb, ub) {
        (0, gu.cX)(new Error("Reconnect failed"), {
          ...(0, ru.j)(ub),
          game: this.gameNameWithVariation
        }), (0, Cu.i)("disconnect", "Reconnect failed", ub.reason), (0, Yb.e)().client.leaveGameUnwanted({
          reason: {
            translationKey: "general:lostConnection"
          },
          canReconnect: !bb,
          canPlayAgain: bb,
          requiresRefresh: !1,
          automaticallyReconnect: !1
        }), (0, hu.navigatePreserveSearch)("/")
      }
      sinceJoined() {
        return null === this.joinedAt ? "" : (0, ju.c)(performance.now() - this.joinedAt)
      }
      onRoomLeft(bb, ub) {
        var hb;
        if (bb === Gb.d.gameOrPluginKick.code) return;
        if (console.log(`Left room with code ${bb}`), bb === Gb.d.serverUpdating.code) return (0, Cu.i)("disconnect", "Left room", "serverUpdating"), (0, Yb.e)().client.leaveGame(this.getUpdateWaitingUrl()), void this.goToUpdateWaiting();
        this.PH.TX(`Kicked from server with code ${bb}`, new Error);
        const Bb = Object.keys(Gb.d).find((ub => Gb.d[ub].code === bb));
        (0, Cu.i)("disconnect", "Left room", null !== Bb && void 0 !== Bb ? Bb : String(bb));
        const Ob = this.onConnectionToServerLost(bb, void 0, {
          site: "leave",
          closeReason: null !== ub && void 0 !== ub ? ub : "",
          sinceJoined: this.sinceJoined()
        });
        (0, Yb.e)().client.leaveGameUnwanted({
          reason: `You have disconnected from the server.\n${Ob.reason}`,
          canReconnect: Ob.canReconnect,
          requiresRefresh: Ob.requiresRefresh,
          automaticallyReconnect: null !== (hb = Ob.automaticallyReconnect) && void 0 !== hb && hb
        }), (0, hu.navigatePreserveSearch)("/")
      }
      getUpdateWaitingUrl() {
        return (0, xu.A)(this.gameNameWithVariation, this.lobbyName)
      }
      goToUpdateWaiting() {
        (0, hu.navigatePreserveSearch)(this.getUpdateWaitingUrl())
      }
      onConnectionToServerLost(bb, ub, hb) {
        var Bb;
        let Ob = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        if (null !== (Bb = ub) && void 0 !== Bb && Bb.endsWith(Gb.i) && (this.userContext.invalidateTrafficCode(), ub = ub.replace(Gb.i, "")), bb === Gb.d.outdatedVersion.code) return console.error("Outdated client with version ", Ub.b, ", refreshing page"), (0, Kb.reloadBloxd)(), {
          reason: "Outdated client",
          requiresRefresh: !0,
          canReconnect: !1
        };
        if (bb === Gb.d.loadRecaptchaError.code) return console.error("Load recaptcha error, refreshing page"), (0, Kb.reloadBloxd)(), {
          reason: "Failed to load recaptcha",
          requiresRefresh: !0,
          canReconnect: !1
        };
        for (const Ub in Gb.d) {
          const {
            code: hb,
            text: Bb,
            canReconnect: Ob
          } = Gb.d[Ub];
          if (hb === bb) {
            console.log("matched known error", bb, "leaving game");
            return {
              reason: "" !== Bb ? Bb : ub || `Code: ${bb}`,
              requiresRefresh: !1,
              canReconnect: Ob,
              automaticallyReconnect: hb === Gb.d.customGameUpdated.code || hb === Gb.d.duplicateLobbyNameError.code
            }
          }
        }
        return console.log("Didn't match known error, leaving game"), (0, ju.e)(bb) || Ob ? console.warn("Connection lost", bb, ub) : this.logUnrecognisedConnectionLoss(bb, ub, hb), {
          reason: `Either your internet isn't working or this is a bug.\nCode: ${bb}`,
          requiresRefresh: !1,
          canReconnect: !1,
          gameServerUnreachable: Ob ? "failed" : void 0
        }
      }
      logUnrecognisedConnectionLoss(bb, ub, hb) {
        (0, gu.cX)(new Error("Unrecognised connection loss"), {
          code: String(bb),
          cause: null !== ub && void 0 !== ub ? ub : "",
          ...hb,
          game: this.gameNameWithVariation,
          ...(0, ju.j)()
        })
      }
    }
  },
  38637: (bb, ub, hb) => {
    hb.d(ub, {
      c: () => Fh,
      d: () => Rh
    });
    var Bb, Ob, Gb, Ub, Lb, Yb, Sb, ab, Hb, wb, Zb, Xb, pb, ob, Ab, lb, Kb, Wb, Cb, db, rb, jb, nb, Db, xb, zb, gb, ib, vb, tb, Jb, eb, Nb, sb, Mb, mb, Ib, Pb, qb, Eb, yb, Vb, Fb, fb, kb, Tb, cb, Qb, Rb, bu, uu, hu, Bu, Ou, Gu, Uu, Lu, Yu, Su, au, Hu, wu, Zu, Xu, pu, ou, Au, lu, Ku, Wu, Cu, du, ru, ju, nu, Du, xu, zu, gu, iu, vu, tu, Ju, eu, Nu, su, Mu, mu, Iu, Pu, qu, Eu, yu, Vu, Fu, fu, ku, Tu, cu, Qu = hb(16),
      Ru = hb(36780),
      bh = hb(38654),
      uh = hb(38657),
      hh = hb(8843),
      Bh = hb(580),
      Oh = hb(571),
      Gh = hb(36430);
    let Uh = (Bb = (0, hh.type)("number"), Ob = (0, hh.type)("number"), Gb = (0, hh.type)("number"), Ub = (0, hh.type)("number"), Lb = (0, hh.type)("number"), Yb = (0, hh.type)("number"), Sb = (0, hh.type)("string"), ab = class extends hh.Schema {
        constructor() {
          super(...arguments), (0, bh.c)(this, "id", Hb, this), (0, bh.c)(this, "amount", wb, this), (0, bh.c)(this, "x", Zb, this), (0, bh.c)(this, "y", Xb, this), (0, bh.c)(this, "z", pb, this), (0, bh.c)(this, "size", ob, this), (0, bh.c)(this, "attributes", Ab, this)
        }
      }, Hb = (0, uh.b)(ab.prototype, "id", [Bb], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return 0
        }
      }), wb = (0, uh.b)(ab.prototype, "amount", [Ob], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return 0
        }
      }), Zb = (0, uh.b)(ab.prototype, "x", [Gb], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return 0
        }
      }), Xb = (0, uh.b)(ab.prototype, "y", [Ub], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return 0
        }
      }), pb = (0, uh.b)(ab.prototype, "z", [Lb], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return 0
        }
      }), ob = (0, uh.b)(ab.prototype, "size", [Yb], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return 1
        }
      }), Ab = (0, uh.b)(ab.prototype, "attributes", [Sb], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return "{}"
        }
      }), ab),
      Lh = (lb = (0, hh.type)("string"), Kb = (0, hh.type)("string"), Wb = class extends hh.Schema {
        constructor() {
          super(...arguments), (0, bh.c)(this, "itemName", Cb, this), (0, bh.c)(this, "enchantmentTier", db, this)
        }
      }, Cb = (0, uh.b)(Wb.prototype, "itemName", [lb], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: null
      }), db = (0, uh.b)(Wb.prototype, "enchantmentTier", [Kb], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: null
      }), Wb),
      Yh = (rb = (0, hh.type)("string"), jb = (0, hh.type)("string"), nb = (0, hh.type)("number"), Db = (0, hh.type)("number"), xb = (0, hh.type)("number"), zb = (0, hh.type)("float32"), gb = (0, hh.type)("float32"), ib = (0, hh.type)("float32"), vb = (0, hh.type)("string"), tb = (0, hh.type)(["number"]), Jb = (0, hh.type)("boolean"), eb = class extends hh.Schema {
        constructor() {
          super(...arguments), (0, bh.c)(this, "type", Nb, this), (0, bh.c)(this, "name", sb, this), (0, bh.c)(this, "x", Mb, this), (0, bh.c)(this, "y", mb, this), (0, bh.c)(this, "z", Ib, this), (0, bh.c)(this, "xRotation", Pb, this), (0, bh.c)(this, "yRotation", qb, this), (0, bh.c)(this, "zRotation", Eb, this), (0, bh.c)(this, "followingEId", yb, this), (0, bh.c)(this, "followingOffset", Vb, this), (0, bh.c)(this, "shouldMatchFollowingEntityRotation", Fb, this)
        }
      }, Nb = (0, uh.b)(eb.prototype, "type", [rb], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: null
      }), sb = (0, uh.b)(eb.prototype, "name", [jb], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return ""
        }
      }), Mb = (0, uh.b)(eb.prototype, "x", [nb], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return 0
        }
      }), mb = (0, uh.b)(eb.prototype, "y", [Db], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return 0
        }
      }), Ib = (0, uh.b)(eb.prototype, "z", [xb], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return 0
        }
      }), Pb = (0, uh.b)(eb.prototype, "xRotation", [zb], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return 0
        }
      }), qb = (0, uh.b)(eb.prototype, "yRotation", [gb], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return 0
        }
      }), Eb = (0, uh.b)(eb.prototype, "zRotation", [ib], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return 0
        }
      }), yb = (0, uh.b)(eb.prototype, "followingEId", [vb], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: null
      }), Vb = (0, uh.b)(eb.prototype, "followingOffset", [tb], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return new hh.ArraySchema(0, 0, 0)
        }
      }), Fb = (0, uh.b)(eb.prototype, "shouldMatchFollowingEntityRotation", [Jb], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return !0
        }
      }), eb),
      Sh = (fb = (0, hh.type)("float32"), kb = (0, hh.type)("float32"), Tb = (0, hh.type)("boolean"), cb = (0, hh.type)("boolean"), Qb = (0, hh.type)("float32"), Rb = (0, hh.type)("boolean"), bu = (0, hh.type)("string"), uu = (0, hh.type)("string"), hu = (0, hh.type)("string"), Bu = (0, hh.type)("string"), Ou = (0, hh.type)(["number"]), Gu = (0, hh.type)("number"), Uu = (0, hh.type)({
        map: Lh
      }), Lu = class extends Yh {
        constructor() {
          super(...arguments), (0, bh.c)(this, "scale", Yu, this), (0, bh.c)(this, "speed", Su, this), (0, bh.c)(this, "jumping", au, this), (0, bh.c)(this, "crouching", Hu, this), (0, bh.c)(this, "cameraPitch", wu, this), (0, bh.c)(this, "armSwinging", Zu, this), (0, bh.c)(this, "heldItemName", Xu, this), (0, bh.c)(this, "heldItemEnchantmentTier", pu, this), (0, bh.c)(this, "pose", ou, this), (0, bh.c)(this, "ridingVehicleEId", Au, this), (0, bh.c)(this, "meshOffset", lu, this), (0, bh.c)(this, "baseRenderHeading", Ku, this), (0, bh.c)(this, "armour", Wu, this)
        }
      }, Yu = (0, uh.b)(Lu.prototype, "scale", [fb], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return 1
        }
      }), Su = (0, uh.b)(Lu.prototype, "speed", [kb], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return 0
        }
      }), au = (0, uh.b)(Lu.prototype, "jumping", [Tb], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return !1
        }
      }), Hu = (0, uh.b)(Lu.prototype, "crouching", [cb], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return !1
        }
      }), wu = (0, uh.b)(Lu.prototype, "cameraPitch", [Qb], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return 0
        }
      }), Zu = (0, uh.b)(Lu.prototype, "armSwinging", [Rb], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return !1
        }
      }), Xu = (0, uh.b)(Lu.prototype, "heldItemName", [bu], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: null
      }), pu = (0, uh.b)(Lu.prototype, "heldItemEnchantmentTier", [uu], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: null
      }), ou = (0, uh.b)(Lu.prototype, "pose", [hu], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return "standing"
        }
      }), Au = (0, uh.b)(Lu.prototype, "ridingVehicleEId", [Bu], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return null
        }
      }), lu = (0, uh.b)(Lu.prototype, "meshOffset", [Ou], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return new hh.ArraySchema(0, 0, 0)
        }
      }), Ku = (0, uh.b)(Lu.prototype, "baseRenderHeading", [Gu], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return 0
        }
      }), Wu = (0, uh.b)(Lu.prototype, "armour", [Uu], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return new hh.MapSchema
        }
      }), Lu),
      ah = (Cu = (0, hh.type)("string"), du = (0, hh.type)("string"), ru = (0, hh.type)("string"), ju = (0, hh.type)("uint8"), nu = class extends Sh {
        constructor() {
          super(...arguments), (0, bh.c)(this, "variation", Du, this), (0, bh.c)(this, "ownerDbId", xu, this), (0, bh.c)(this, "metaInfo", zu, this), (0, bh.c)(this, "aiState", gu, this)
        }
      }, Du = (0, uh.b)(nu.prototype, "variation", [Cu], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return "default"
        }
      }), xu = (0, uh.b)(nu.prototype, "ownerDbId", [du], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return null
        }
      }), zu = (0, uh.b)(nu.prototype, "metaInfo", [ru], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return ""
        }
      }), gu = (0, uh.b)(nu.prototype, "aiState", [ju], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return 0
        }
      }), nu);
    iu = (0, hh.type)("string"), vu = (0, hh.type)("string"), tu = (0, hh.type)("string"), Ju = (0, hh.type)("string"), eu = class extends Yh {
      constructor() {
        super(...arguments), (0, bh.c)(this, "meshKind", Nu, this), (0, bh.c)(this, "meshOpts", su, this), (0, bh.c)(this, "pose", Mu, this), (0, bh.c)(this, "leaderboardTop", mu, this)
      }
    }, Nu = (0, uh.b)(eu.prototype, "meshKind", [iu], {
      configurable: !0,
      enumerable: !0,
      writable: !0,
      initializer: null
    }), su = (0, uh.b)(eu.prototype, "meshOpts", [vu], {
      configurable: !0,
      enumerable: !0,
      writable: !0,
      initializer: null
    }), Mu = (0, uh.b)(eu.prototype, "pose", [tu], {
      configurable: !0,
      enumerable: !0,
      writable: !0,
      initializer: null
    }), mu = (0, uh.b)(eu.prototype, "leaderboardTop", [Ju], {
      configurable: !0,
      enumerable: !0,
      writable: !0,
      initializer: null
    });

    function Hh(bb) {
      return Object.keys(hh.Metadata.getFields(bb))
    }
    const wh = Hh(ah);
    for (const bB of Bh.p)
      if (!wh.includes(bB)) throw new Error(`Mob Schema is missing a networked property: "${bB}"`);
    const Zh = Hh((Iu = (0, hh.type)("string"), Pu = (0, hh.type)("float32"), qu = (0, hh.type)("float32"), Eu = (0, hh.type)("float32"), yu = (0, hh.type)("float32"), Vu = class extends Yh {
      constructor() {
        super(...arguments), (0, bh.c)(this, "soundName", Fu, this), (0, bh.c)(this, "volume", fu, this), (0, bh.c)(this, "refDistance", ku, this), (0, bh.c)(this, "maxHearDist", Tu, this), (0, bh.c)(this, "rate", cu, this)
      }
    }, Fu = (0, uh.b)(Vu.prototype, "soundName", [Iu], {
      configurable: !0,
      enumerable: !0,
      writable: !0,
      initializer: function() {
        return ""
      }
    }), fu = (0, uh.b)(Vu.prototype, "volume", [Pu], {
      configurable: !0,
      enumerable: !0,
      writable: !0,
      initializer: function() {
        return 1
      }
    }), ku = (0, uh.b)(Vu.prototype, "refDistance", [qu], {
      configurable: !0,
      enumerable: !0,
      writable: !0,
      initializer: function() {
        return Gh.d
      }
    }), Tu = (0, uh.b)(Vu.prototype, "maxHearDist", [Eu], {
      configurable: !0,
      enumerable: !0,
      writable: !0,
      initializer: function() {
        return Gh.b
      }
    }), cu = (0, uh.b)(Vu.prototype, "rate", [yu], {
      configurable: !0,
      enumerable: !0,
      writable: !0,
      initializer: function() {
        return 1
      }
    }), Vu));
    for (const bB of Oh.h)
      if (!Zh.includes(bB)) throw new Error(`AudioEntity Schema is missing a replicated property: "${bB}"`);
    var Xh = hb(38068),
      ph = hb(1133),
      oh = hb(588),
      Ah = hb(37821),
      lh = hb(4013),
      Kh = hb(314),
      Wh = hb(36889),
      Ch = hb(37708),
      dh = hb(2100),
      rh = hb(36871),
      jh = hb(38086),
      nh = hb(37016),
      Dh = hb(324),
      xh = hb.n(Dh),
      zh = hb(37535),
      gh = hb(36711),
      ih = hb(37683),
      vh = hb(37730);
    class th {
      constructor(bb, ub) {
        this.bloxd = bb, this.eId = ub, this.PH = void 0, this.colyseusEntity = void 0, this.canSeeSub = void 0, this.canAttackSub = void 0, this.interactableSub = void 0, this.overlayColourSub = void 0, this.opacitySub = void 0, this.zIndexSub = void 0, this.multilineTextBoxSub = void 0, this.previousHidingMeshManagerState = void 0, this.meshKind = void 0, this.meshOpts = void 0, this.leaderboardTop = void 0, this.meshRebuildQueued = !1, this.FZ = !1, this.PH = bb.PH
      }
      initClient(bb) {
        var ub, hb, Bb;
        this.colyseusEntity = bb, this.meshKind = bb.meshKind, this.meshOpts = bb.meshOpts, this.leaderboardTop = bb.leaderboardTop, this.PH.pW.add([bb.x, bb.y, bb.z], 1, 1, null, null, !1, !1, this.eId), this.PH.pW.FN(this.eId, "smoothToServerPos");
        const Ob = "Person" === this.meshKind;
        this.PH.pW.FN(this.eId, "meshRotation", {
          isServerControlled: !0,
          ...Ob ? {
            defaultRotationsPerSecond: .5
          } : {},
          childrenNodeParams: Ob ? [{
            nodeName: "HeadMesh",
            softTolerance: jh.n,
            hardTolerance: null
          }] : []
        }), this.updateHidingMeshMgr(), this.canSeeSub = Qu.i.subscribe(`otherEntitySettings|${this.eId}|canSee`, (bb => {
          this.updateHidingMeshMgr()
        }));
        const Gb = () => {
          const bb = this.PH.pW.lub(this.eId);
          if (!bb) return;
          const ub = (0, nh.l)(this.eId);
          if ("number" === typeof bb.lN) {
            var hb, Bb, Ob, Gb;
            const Ub = null === (hb = (0, dh.h)("head", null === (Ob = this.getSpec()) || void 0 === Ob || null === (Gb = Ob.opts.textures) || void 0 === Gb ? void 0 : Gb.head)) || void 0 === hb || null === (Bb = hb.personModel) || void 0 === Bb ? void 0 : Bb.fullBody;
            return this.PH.xX.oN.setPickable(bb.lN, ub && !Ub), void(0, gh.updatePersonAttachmentPickability)(this.PH, this.eId, ub)
          }
          const Ub = bb.mesh;
          if (Ub)
            for (const Lb of [Ub, ...Ub.getChildMeshes(!1)]) "lp" in Lb && !Lb.name.startsWith("Cape|") && (Lb.lp = ub)
        };
        this.canAttackSub = Qu.i.subscribe(`otherEntitySettings|${this.eId}|canAttack`, Gb), this.interactableSub = Qu.i.subscribe(`otherEntitySettings|${this.eId}|interactable`, Gb), this.overlayColourSub = Qu.i.subscribe(`otherEntitySettingsClientifiedEId|${this.eId}|overlayColour`, (bb => {
          this.updateOverlayColour(bb)
        })), this.opacitySub = Qu.i.subscribe(`otherEntitySettingsClientifiedEId|${this.eId}|opacity`, (bb => {
          this.updateOpacity(bb)
        })), this.zIndexSub = Qu.i.subscribe(`otherEntitySettingsClientifiedEId|${this.eId}|zIndex`, (bb => {
          this.updateZIndex(bb)
        }));
        const Ub = this.PH.Qs[this.PH.bM][this.eId];
        this.updateOverlayColour(null !== (ub = null === Ub || void 0 === Ub ? void 0 : Ub.overlayColour) && void 0 !== ub ? ub : null), this.updateOpacity(null !== (hb = null === Ub || void 0 === Ub ? void 0 : Ub.opacity) && void 0 !== hb ? hb : 1), this.updateZIndex(null !== (Bb = null === Ub || void 0 === Ub ? void 0 : Ub.zIndex) && void 0 !== Bb ? Bb : 0), this.multilineTextBoxSub = (0, rh.r)(this.PH, this.eId)
      }
      onChangeClient(bb, ub) {
        if ("xRotation" === bb || "yRotation" === bb || "zRotation" === bb)(0, rh.t)(this.PH, this.eId, bb, ub);
        else if ("pose" === bb) {
          const bb = this.PH.pW.nub(this.eId);
          bb && (bb.pose = ub || "standing")
        } else "meshKind" === bb || "meshOpts" === bb ? (this[bb] = ub, this.queueMeshRebuild()) : "name" === bb && "" !== ub ? this.updateHidingMeshMgr() : "leaderboardTop" === bb && (this.leaderboardTop = ub, Qu.i.vp(`leaderboardTop|${this.eId}`, ub))
      }
      disposeClient() {
        this.FZ = !0, this.PH.pW.deleteEntity(this.eId), Qu.i.unsubscribe(this.canSeeSub), Qu.i.unsubscribe(this.canAttackSub), Qu.i.unsubscribe(this.interactableSub), Qu.i.unsubscribe(this.overlayColourSub), Qu.i.unsubscribe(this.opacitySub), Qu.i.unsubscribe(this.zIndexSub), Qu.i.unsubscribe(this.multilineTextBoxSub)
      }
      getCurrentHidingMeshMgrState() {
        var bb, ub;
        return {
          canSee: null !== (bb = null === (ub = this.PH.Qs[this.PH.bM][this.eId]) || void 0 === ub ? void 0 : ub.canSee) && void 0 !== bb && bb,
          name: this.colyseusEntity.name,
          meshKind: this.meshKind,
          meshOpts: this.meshOpts
        }
      }
      updateHidingMeshMgr() {
        var bb, ub, hb;
        const {
          PH: Bb
        } = this, {
          pW: Ob
        } = Bb, Gb = this.getCurrentHidingMeshMgrState();
        if ((0, Kh.Xd)(this.previousHidingMeshManagerState, Gb)) return;
        if (this.previousHidingMeshManagerState = Gb, Ob.kN(this.eId, "hidingMeshManager"), null === (bb = Bb.Qs[Bb.bM][this.eId]) || void 0 === bb || !bb.canSee) return;
        const Ub = this.getSpec();
        if (!Ub) return;
        const {
          type: Lb,
          opts: Yb
        } = Ub;
        "Person" === Lb && (Yb.textures = (0, dh.k)(Yb.textures)), Yb.eId = this.eId, Ob.FN(this.eId, "hidingMeshManager", {
          addMeshComponent: () => {
            var bb, ub, hb;
            "Leaderboard" === Lb && (Yb.leaderboardTop = this.leaderboardTop);
            const Gb = this.bloxd.client.meshCreator.getEntityMesh(Lb, Yb, (bb => {
              var ub, hb;
              if ("number" === typeof bb) {
                var Ob, Gb, Ub;
                const ub = Bb.xX.oN;
                ub.setEntityId(bb, this.eId);
                const hb = "Person" === Lb && (null === (Ob = (0, dh.h)("head", null === (Ub = Yb.textures) || void 0 === Ub ? void 0 : Ub.head)) || void 0 === Ob || null === (Gb = Ob.personModel) || void 0 === Gb ? void 0 : Gb.fullBody);
                return void ub.setPickable(bb, (0, nh.l)(this.eId) && !hb)
              }
              const Sb = bb;
              for (const Lb of [Sb, ...Sb.getChildMeshes(!1)]) void 0 === Lb.lp || Lb.name.startsWith("Cape|") || (Lb.lp = (0, nh.l)(this.eId), Lb.metadata ??= new Bb.xX.Kp, Lb.metadata.eId = this.eId);
              this.updateOpacity(null !== (ub = null === (hb = Bb.Qs[Bb.bM][this.eId]) || void 0 === hb ? void 0 : hb.opacity) && void 0 !== ub ? ub : 1)
            }));
            if (!Gb) return;
            const {
              lN: Ub,
              mesh: Sb,
              meshOffset: ab,
              nameYOffset: Hb,
              modelLoaded: wb
            } = Gb;
            null === wb || void 0 === wb || wb.then((() => {
              var bb;
              (null === (bb = Ob.lub(this.eId)) || void 0 === bb ? void 0 : bb.mesh) === Sb && (this.previousHidingMeshManagerState = null, this.updateHidingMeshMgr())
            }));
            const Zb = null === Ub ? null : Bb.xX.oN.HBb(Ub, 0);
            if (Ob.FN(this.eId, Ob.names.mesh, {
                lN: Ub,
                Nhb: Zb,
                mesh: Sb,
                RUb: !1,
                Mhb: "Leaderboard" !== Lb,
                offset: ab.slice(),
                QUb: "ParticleEmitter" === Lb && Yb.followTargetMeshOffset ? bb => {
                  var ub;
                  xh().copy(bb, ab);
                  const hb = null === (ub = Ob.Hhb(this.eId)) || void 0 === ub ? void 0 : ub.mZ,
                    Bb = void 0 === hb ? null : Ob.nub(hb);
                  if (Bb) {
                    var Gb, Ub;
                    const ub = this.bloxd.getEntityHeading(null !== (Gb = Bb.ridingVehicleEId) && void 0 !== Gb ? Gb : hb, !0),
                      Ob = Math.sin(ub),
                      Lb = Math.cos(ub);
                    bb[0] += Bb.meshOffset[0] * Lb + Bb.meshOffset[2] * Ob, bb[1] += Bb.meshOffset[1], bb[2] += Bb.meshOffset[2] * Lb - Bb.meshOffset[0] * Ob;
                    const Yb = null !== (Ub = Bb.ridingVehicleEId) && void 0 !== Ub ? Ub : null;
                    null !== Yb && (0, vh.b)(this.PH, Yb, bb)
                  }
                } : null
              }), "Person" === Lb) {
              var Xb, pb, ob, Ab;
              Ob.FN(this.eId, Ob.names.meshAttachments, {
                personFullBody: null !== (Xb = null === (pb = (0, dh.h)("head", null === (Ab = Yb.textures) || void 0 === Ab ? void 0 : Ab.head)) || void 0 === pb || null === (ob = pb.personModel) || void 0 === ob ? void 0 : ob.fullBody) && void 0 !== Xb && Xb
              });
              for (const bb of ph.y) {
                var lb, Kb, Wb;
                const ub = null === (lb = Yb.textures) || void 0 === lb ? void 0 : lb[bb];
                ub && null !== (Kb = (0, dh.h)(bb, ub)) && void 0 !== Kb && null !== (Wb = Kb.attachments) && void 0 !== Wb && Wb.length && Ch.c.Player.meshApi.updatePlayerCosmetic(this.eId, Ub, bb, ub)
              }
              Ob.FN(this.eId, Ob.names.moveState), Ob.FN(this.eId, "updateWalkingState", {
                lN: Ub,
                Nhb: Zb,
                walkingLegSwingDuration: jh.w
              }), Ob.FN(this.eId, "humanoidMesh", {
                lN: Ub,
                Nhb: Zb,
                heldItemPositionParams: {},
                maxWalkingAngleOverride: null
              }), Ob.FN(this.eId, "animator", {
                lN: Ub,
                Nhb: Zb,
                modelLifeformType: "Player"
              }), ih.d.hasAnimation("Person") && Ob.FN(this.eId, "rigAnimation", {
                target: "Person",
                lN: Ub
              }), Ob.nub(this.eId).pose = this.colyseusEntity.pose || "standing"
            } else if ("BloxdBlock" === Lb && null !== Ub) {
              Ob.FN(this.eId, "animator", {
                lN: Ub,
                Nhb: Zb,
                modelLifeformType: null
              });
              const bb = (0, Ah.p)(Yb.blockName);
              null !== bb && Ob.FN(this.eId, "rigAnimation", {
                target: bb,
                lN: Ub
              })
            }
            Ob.CLb(this.eId, "entityName", {
              name: this.colyseusEntity.name,
              nameYOffset: Hb
            }), this.bloxd.setEntityName(this.eId, this.colyseusEntity.name), !0 === Yb.autoRotate && (Ob.kN(this.eId, "meshRotation"), Ob.FN(this.eId, "autoRotate"));
            const {
              lineToEId: Cb
            } = Yb;
            (0, oh.J)(Cb) || Ob.FN(this.eId, "lineToEntity", {
              lineToEId: Cb
            });
            const db = Bb.Qs[Bb.bM][this.eId];
            this.updateOverlayColour(null !== (bb = null === db || void 0 === db ? void 0 : db.overlayColour) && void 0 !== bb ? bb : null), this.updateOpacity(null !== (ub = null === db || void 0 === db ? void 0 : db.opacity) && void 0 !== ub ? ub : 1), this.updateZIndex(null !== (hb = null === db || void 0 === db ? void 0 : db.zIndex) && void 0 !== hb ? hb : 0)
          },
          removeMeshComponent: () => {
            "Person" !== Lb && "BloxdBlock" !== Lb || Ob.kN(this.eId, "rigAnimation"), Ob.kN(this.eId, Ob.names.mesh), Ob.Nbb(this.eId, Ob.names.meshAttachments) && Ob.kN(this.eId, Ob.names.meshAttachments), Ob.kN(this.eId, "entityName"), Ob.kN(this.eId, "autoRotate"), Ob.kN(this.eId, "lineToEntity"), "Person" === Lb ? (Ob.kN(this.eId, Ob.names.moveState), Ob.kN(this.eId, "updateWalkingState"), Ob.kN(this.eId, "humanoidMesh"), Ob.kN(this.eId, "animator")) : "BloxdBlock" === Lb && Ob.kN(this.eId, "animator")
          },
          hideDist: null !== (ub = Yb.hideDist) && void 0 !== ub ? ub : 80,
          movingHideDist: null !== (hb = Yb.hideDist) && void 0 !== hb ? hb : 120,
          displayOutsideLoadedChunk: Yb.hideDist > 100,
          immediatelyUpdate: !0,
          FY: "BloxdBlock" === Lb ? Yb.blockName : Lb
        })
      }
      queueMeshRebuild() {
        this.meshRebuildQueued || (this.meshRebuildQueued = !0, queueMicrotask((() => {
          this.meshRebuildQueued = !1, this.FZ || this.updateHidingMeshMgr()
        })))
      }
      getSpec() {
        return (0, lh.g)({
          meshKind: this.meshKind,
          meshOpts: this.meshOpts
        })
      }
      updateOverlayColour(bb) {
        var ub, hb;
        if ("Person" !== this.meshKind) return;
        let Bb = new Wh.b(0, 0, 0, 0);
        if (null !== bb) {
          const ub = (0, Kh.X)(bb);
          Bb = new Wh.b(ub[0] / 255, ub[1] / 255, ub[2] / 255, .5)
        }
        const Ob = null !== (ub = null === (hb = this.PH.pW.lub(this.eId)) || void 0 === hb ? void 0 : hb.lN) && void 0 !== ub ? ub : null;
        null !== Ob && Ch.c.Player.meshApi.updateMeshOverlayColour(Ob, Bb)
      }
      updateZIndex(bb) {
        var ub;
        if ("Person" !== this.meshKind) return;
        const hb = null === (ub = this.PH.pW.lub(this.eId)) || void 0 === ub ? void 0 : ub.lN;
        "number" === typeof hb && this.PH.xX.oN.setRenderingGroupId(hb, bb)
      }
      updateOpacity(bb) {
        const ub = this.PH.pW.lub(this.eId);
        ub && ("number" !== typeof ub.lN ? ub.mesh && "ParticleEmitter" !== this.meshKind && (0, zh.h)(ub.mesh, bb) : Ch.c.Player.meshApi.updateMeshOpacity(ub.lN, bb))
      }
    }
    var Jh = hb(38645);
    class eh {
      constructor(bb, ub) {
        this.eId = ub, this.PH = void 0, this.schema = void 0, this.PH = bb.PH
      }
      initClient(bb) {
        this.schema = bb, this.PH.pW.add([bb.x, bb.y, bb.z], .1, .1, null, null, !1, !1, this.eId), this.PH.pW.FN(this.eId, "smoothToServerPos"), Jh.e.add(this.eId, this.copyOpts())
      }
      onChangeClient(bb) {
        Oh.h.includes(bb) && Jh.e.update(this.eId, this.copyOpts())
      }
      disposeClient() {
        Jh.e.remove(this.eId), this.PH.pW.deleteEntity(this.eId)
      }
      copyOpts() {
        const {
          soundName: bb,
          volume: ub,
          refDistance: hb,
          maxHearDist: Bb,
          rate: Ob
        } = this.schema;
        return {
          soundName: bb,
          volume: ub,
          refDistance: hb,
          maxHearDist: Bb,
          rate: Ob
        }
      }
    }
    var Nh = hb(3463),
      sh = hb(36404),
      Mh = hb(6213),
      mh = hb(37406),
      Ih = hb(2560),
      Ph = hb(37756),
      qh = hb(8795),
      Eh = hb(38102),
      yh = hb(37387),
      Vh = hb(2736);
    class Fh {
      constructor(bb, ub) {
        let hb = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 4,
          Bb = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : () => performance.now();
        this.ghb = bb, this.PH = ub, this.setupBudgetMs = hb, this.now = Bb, this.createStateCallbacks = void 0, this.roomStateCallbacks = void 0, this.allItems = {}, this.detachers = new Map, this.deferredSetups = new Map, this.queuedSetups = new Map, this.promotedSetups = new Set, this.setupBudgetLeftMs = void 0, this.lastRefillMs = void 0, this.roomState = void 0, this.FZ = !1, this.onFrame = () => {
          this.setUpQueuedEntities(!0)
        }, this.jK = () => {
          this.setUpQueuedEntities(this.now() - this.lastRefillMs > 100)
        }, this.setUpPromoted = () => {
          for (const bb of this.promotedSetups) {
            this.promotedSetups.delete(bb);
            const ub = this.queuedSetups.get(bb);
            ub && (this.queuedSetups.delete(bb), this.timedSetup(ub, bb))
          }
        }, this.createStateCallbacks = (0, qh.getStateCallbacks)(bb), this.roomStateCallbacks = this.createStateCallbacks(bb.state), this.roomState = bb.state, this.setupBudgetLeftMs = hb, this.lastRefillMs = Bb()
      }
      setup() {
        this.setupEntityHandlers(), this.setupItemHandlers(), this.ghb.onStateChange(this.setUpPromoted), this.PH.on("beforeInputs", this.onFrame), this.PH.on("gH", this.jK)
      }
      setUpQueuedEntities(bb) {
        var ub;
        if ((null === (ub = (0, Ih.e)().client.getMsgHandler()) || void 0 === ub ? void 0 : ub.ghb) !== this.ghb) return this.PH.off("beforeInputs", this.onFrame), this.PH.off("gH", this.jK), this.queuedSetups.clear(), void this.promotedSetups.clear();
        if (bb && (this.setupBudgetLeftMs = this.setupBudgetMs, this.lastRefillMs = this.now()), this.setUpPromoted(), 0 !== this.queuedSetups.size)
          for (xh().copy(fh, this.PH.pW.iK(this.PH.bM)); this.setupBudgetLeftMs > 0;) {
            const bb = this.nearestQueued(fh);
            if (null === bb) return;
            this.setUpIfQueued(bb), this.setUpPromoted()
          }
      }
      nearestQueued(bb) {
        let ub = null,
          hb = 1 / 0;
        return this.queuedSetups.forEach(((Bb, Ob) => {
          const Gb = function(bb, ub) {
            return (ub.x - bb[0]) ** 2 + (ub.y - bb[1]) ** 2 + (ub.z - bb[2]) ** 2
          }(bb, Bb);
          (null === ub || Gb < hb) && (ub = Ob, hb = Gb)
        })), ub
      }
      setUpOrQueue(bb, ub) {
        0 === this.queuedSetups.size && this.setupBudgetLeftMs > 0 || this.mustSetUpNow(bb, ub) ? this.timedSetup(bb, ub) : this.queuedSetups.set(ub, bb)
      }
      mustSetUpNow(bb, ub) {
        const hb = this.PH.Mbb;
        if (ub === hb) return !0;
        const Bb = this.roomState.entities.get(hb);
        return !(!Bb || Bb.ridingVehicleEId !== ub && Bb.followingEId !== ub) || (kh(bb.type) === Xh.c || (0, Ih.e)().getFollowingEntities(ub).length > 0)
      }
      setUpIfQueued(bb) {
        const ub = this.queuedSetups.get(bb);
        ub && (this.queuedSetups.delete(bb), this.timedSetup(ub, bb))
      }
      promoteIfQueued(bb) {
        null !== bb && this.queuedSetups.has(bb) && this.promotedSetups.add(bb)
      }
      timedSetup(bb, ub) {
        const hb = this.now();
        this.setupEntity(bb, ub), this.setupBudgetLeftMs -= this.now() - hb
      }
      setupEntityHandlers() {
        this.roomStateCallbacks.entities.UW(((bb, ub) => {
          this.PH.Mbb ? this.setUpOrQueue(bb, ub) : this.deferEntitySetupUntilInitInfo(bb, ub)
        })), this.roomStateCallbacks.entities.gJ(((bb, ub) => {
          const hb = this.deferredSetups.get(ub);
          hb && (Qu.i.unsubscribe(hb), this.deferredSetups.delete(ub)), this.queuedSetups.delete(ub), this.detach(ub), (0, Ih.e)().client.disposeEntity(ub)
        }))
      }
      deferEntitySetupUntilInitInfo(bb, ub) {
        const hb = Qu.i.sA("initInfoReceived", (() => {
          this.deferredSetups.delete(ub), this.setUpOrQueue(bb, ub)
        }));
        this.deferredSetups.set(ub, hb), (0, Nh.onGameResetOnce)((() => {
          this.deferredSetups.get(ub) === hb && (Qu.i.unsubscribe(hb), this.deferredSetups.delete(ub)), (0, Ih.e)().updatePositionAndPhysics(this.PH.bM, {
            type: Mh.n.DEFAULT,
            tier: null
          }, !0), (0, Ih.e)().takeHeldPlayerBodySize(this.PH.bM);
          const bb = this.PH.pW.uub(this.PH.bM);
          bb && (bb.movementType = Mh.m.NORMAL)
        }))
      }
      setupEntity(bb, ub) {
        const hb = ub === this.PH.Mbb;
        if (hb)(0, Ih.e)().client.tV(this.PH.bM, null, null);
        else {
          const {
            type: hb
          } = bb, Bb = kh(hb);
          if (void 0 === Bb) return void
          function(bb, ub) {
            const hb = String(bb);
            if (Th.has(hb)) return;
            Th.add(hb);
            const Bb = hb.length > 80 ? `${hb.slice(0,80)}...` : hb,
              Ob = `No client handler for entity type ${JSON.stringify(Bb)}, so entity ${ub} is not set up`;
            console.warn(Ob), (0, Vh.i)("uncaught", Ob, "unknown_entity_type")
          }(hb, ub);
          (0, Ih.e)().client.tV(ub, bb, new Bb((0, Ih.e)(), ub, hb))
        }
        const Bb = this.createStateCallbacks(bb);
        if (hb) return this.setupMapSchemaCallbacks(ub, bb, Bb, "armour"), this.setupScalarField(ub, bb, Bb, "scale"), this.setupScalarField(ub, bb, Bb, "ridingVehicleEId"), this.setupScalarField(ub, bb, Bb, "followingEId"), this.setupScalarField(ub, bb, Bb, "followingOffset"), void this.setupScalarField(ub, bb, Bb, "shouldMatchFollowingEntityRotation");
        for (const Ob of Hh(bb.constructor)) bb[Ob] instanceof hh.MapSchema ? this.setupMapSchemaCallbacks(ub, bb, Bb, Ob) : this.setupScalarField(ub, bb, Bb, Ob)
      }
      setupMapSchemaCallbacks(bb, ub, hb, Bb) {
        const Ob = hb[Bb],
          Gb = new Map;
        Ob.UW(((hb, Ob) => {
          if (this.onEntityFieldChange(bb, ub, Bb, {
              key: Ob,
              value: hb
            }), !(hb instanceof hh.Schema)) return;
          const Ub = this.createStateCallbacks(hb),
            Lb = [];
          for (const Gb of Hh(hb.constructor)) Lb.push(this.listenForFutureChanges(Ub, Gb, (() => {
            this.onEntityFieldChange(bb, ub, Bb, {
              key: Ob,
              value: hb
            })
          })));
          Gb.set(Ob, (() => {
            for (const bb of Lb) bb()
          }))
        })), Ob.gJ(((hb, Ob) => {
          var Ub;
          null === (Ub = Gb.get(Ob)) || void 0 === Ub || Ub(), Gb.delete(Ob), this.onEntityFieldChange(bb, ub, Bb, {
            key: Ob,
            value: null
          })
        })), this.addDetacher(bb, (() => {
          for (const bb of Gb.values()) bb();
          Gb.clear()
        }))
      }
      setupScalarField(bb, ub, hb, Bb) {
        this.onEntityFieldChange(bb, ub, Bb, ub[Bb]);
        const Ob = this.listenForFutureChanges(hb, Bb, (hb => {
          this.onEntityFieldChange(bb, ub, Bb, hb)
        }));
        this.addDetacher(bb, Ob)
      }
      addDetacher(bb, ub) {
        let hb = this.detachers.get(bb);
        hb || (hb = [], this.detachers.set(bb, hb)), hb.push(ub)
      }
      detach(bb) {
        for (const hb of null !== (ub = this.detachers.get(bb)) && void 0 !== ub ? ub : []) {
          var ub;
          hb()
        }
        this.detachers.delete(bb)
      }
      listenForFutureChanges(bb, ub, hb) {
        return bb.listen(ub, hb, !1)
      }
      onEntityFieldChange(bb, ub, hb, Bb) {
        switch (hb) {
          case "ridingVehicleEId": {
            this.promoteIfQueued(Bb);
            const ub = this.PH.pW.nub((0, sh.d)(bb));
            ub && (ub.ridingVehicleEId = Bb);
            break
          }
          case "armour":
            this.handleArmourChange(bb, Bb);
            break;
          case "followingEId":
            this.promoteIfQueued(Bb), this.handleFollowingEIdChange(bb, ub, Bb);
            break;
          case "xRotation":
          case "yRotation":
          case "zRotation":
            this.handleRotationChange(bb, hb, Bb);
            break;
          case "scale":
            this.handleScaleChange(bb, Bb);
            break;
          case "baseRenderHeading":
            this.handleBaseRenderHeadingChange(bb, Bb);
            break;
          case "followingOffset":
            this.handleFollowingOffsetChange(bb, Bb);
            break;
          case "shouldMatchFollowingEntityRotation":
            this.handleShouldMatchFollowingEntityRotationChange(bb, Bb);
            break;
          case "x":
          case "y":
          case "z":
            return void this.handlePositionChange(bb, hb, Bb)
        }(0, Ih.e)().client.updateEntityField(bb, hb, Bb)
      }
      handleArmourChange(bb, ub) {
        var hb, Bb;
        const {
          key: Ob,
          value: Gb
        } = ub;
        (0, Ch.z)(bb, Ob, null !== (hb = null === Gb || void 0 === Gb ? void 0 : Gb.itemName) && void 0 !== hb ? hb : null, null !== (Bb = null === Gb || void 0 === Gb ? void 0 : Gb.enchantmentTier) && void 0 !== Bb ? Bb : null)
      }
      handleFollowingEIdChange(bb, ub, hb) {
        const Bb = (0, sh.d)(bb),
          Ob = Bb === this.PH.bM;
        if (this.PH.pW.kN(Bb, this.PH.pW.names.uC), hb) this.PH.pW.kN(Bb, "smoothToServerPos"), this.PH.pW.FN(Bb, this.PH.pW.names.uC, {
          mZ: (0, sh.d)(hb),
          offset: Array.from(ub.followingOffset),
          whb: ub.shouldMatchFollowingEntityRotation,
          ohb: !0,
          Ahb: (bb, Bb) => {
            if (xh().copy(bb, ub.followingOffset), ub.ridingVehicleEId === hb) {
              const ub = (0, sh.d)(hb),
                Ob = (0, Ih.e)().getEntityHeading(ub, Bb);
              xh().nY(bb, bb, xh().ZERO, Ob)
            }
          }
        });
        else if (!Ob) {
          this.PH.pW.Nbb(Bb, "smoothToServerPos") || this.PH.pW.FN(Bb, "smoothToServerPos");
          const bb = this.PH.pW.getState(Bb, "smoothToServerPos"),
            ub = this.PH.pW.JV(Bb).position;
          (0, yh.setServerPosition)(bb, ub[0], ub[1], ub[2])
        }
      }
      handleRotationChange(bb, ub, hb) {
        const Bb = "xRotation" === ub ? 0 : "yRotation" === ub ? 1 : 2;
        for (const Ob of (0, Ih.e)().getFollowingEntities(bb)) {
          const bb = this.PH.pW.getState(Ob, "meshRotation"),
            ub = this.PH.pW.Hhb(Ob);
          bb && ub.whb && (bb.serverSetRotation[Bb] = hb)
        }
      }
      handleScaleChange(bb, ub) {
        const hb = (0, sh.d)(bb);
        if (Qu.i.vp(`entityScale|${hb}`, ub), hb === this.PH.bM) {
          var Bb;
          (0, Ih.e)().removeFromEyeHeightCache(hb);
          const bb = this.PH.pW.uub(this.PH.bM),
            ub = null !== (Bb = null === bb || void 0 === bb ? void 0 : bb.physicsState) && void 0 !== Bb ? Bb : {
              type: Mh.n.DEFAULT,
              tier: null
            };
          return void(0, Ih.e)().updatePositionAndPhysics(this.PH.bM, ub, !1)
        }
        const Ob = (0, Ih.e)().getLifeformType(hb);
        if (null === Ob) return;
        const {
          physicsBodyWidth: Gb,
          physicsBodyHeight: Ub
        } = (0, Eh.f)(ub, Ob);
        this.PH.pW.Shb(hb, Gb, Ub, Gb)
      }
      handleBaseRenderHeadingChange(bb, ub) {
        const hb = this.PH.pW.getState(bb, "meshRotation");
        hb && (hb.baseRenderRotation[1] = ub);
        for (const Bb of (0, Ih.e)().getFollowingEntities(bb)) {
          const bb = this.PH.pW.getState(Bb, "meshRotation"),
            hb = this.PH.pW.Hhb(Bb);
          bb && hb.whb && (bb.baseRenderRotation[1] = ub)
        }
      }
      handleFollowingOffsetChange(bb, ub) {
        const hb = this.PH.pW.Hhb((0, sh.d)(bb));
        if (hb && hb.offset) {
          const bb = ub ? Array.from(ub) : xh().ZERO;
          hb.offset[0] = bb[0], hb.offset[1] = bb[1], hb.offset[2] = bb[2]
        }
      }
      handleShouldMatchFollowingEntityRotationChange(bb, ub) {
        const hb = this.PH.pW.Hhb((0, sh.d)(bb));
        hb && (hb.whb = null === ub || void 0 === ub || ub)
      }
      handlePositionChange(bb, ub, hb) {
        if (this.PH.pW.Nbb(bb, "smoothToServerPos")) {
          const Bb = this.PH.pW.getState(bb, "smoothToServerPos");
          (0, yh.setServerPositionAxis)(Bb, ch[ub], hb)
        }
      }
      setupItemHandlers() {
        this.roomStateCallbacks.items.UW(((bb, ub) => {
          this.allItems[ub] = bb, (0, mh.g)(this.PH, ub, [bb.x, bb.y, bb.z], bb.id, {
            amount: bb.amount,
            attributes: JSON.parse(bb.attributes),
            OB: (0, Ru.e)(this.PH).cantPickUpItem(ub),
            size: bb.size,
            predictedAt: (0, Ih.e)().client.itemDropPrediction.onServerItemAdded(ub)
          });
          const hb = this.createStateCallbacks(bb);
          for (const Bb of Hh(Uh)) this.onItemFieldChange(ub, Bb, bb[Bb]), this.addDetacher(ub, this.listenForFutureChanges(hb, Bb, (bb => {
            this.onItemFieldChange(ub, Bb, bb)
          })))
        })), this.roomStateCallbacks.items.gJ(((bb, ub) => {
          delete this.allItems[ub], this.detach(ub), (0, Ih.e)().client.itemDropPrediction.onServerItemRemoved(ub), this.PH.pW.Nbb(ub, this.PH.pW.names.itemState) && this.PH.pW.deleteEntity(ub), (0, Ru.e)(this.PH).disposeEntity(ub)
        }))
      }
      onItemFieldChange(bb, ub, hb) {
        if (ub in ch) {
          if (this.PH.pW.Nbb(bb, "itemState")) {
            const Bb = this.PH.pW.getState(bb, "smoothToServerPos");
            (0, yh.setServerPositionAxis)(Bb, ch[ub], hb), (0, Ih.e)().client.itemDropPrediction.onServerItemMoved(bb)
          }
          return
        }
        if (!this.PH.pW.Nbb(bb, "itemState")) return;
        const Bb = this.PH.pW.getState(bb, "itemState");
        "amount" === ub && hb !== Bb.amount && (Bb.creationTime = Date.now()), Bb[ub] = "attributes" === ub ? JSON.parse(hb) : hb
      }
      dispose() {
        if (!this.FZ) {
          this.FZ = !0, this.PH.off("beforeInputs", this.onFrame), this.PH.off("gH", this.jK), this.queuedSetups.clear(), this.promotedSetups.clear();
          for (const bb of this.deferredSetups.values()) Qu.i.unsubscribe(bb);
          this.deferredSetups.clear(), this.PH.pW.kN(this.PH.bM, this.PH.pW.names.uC);
          for (const bb in this.allItems) this.PH.pW.deleteEntity(bb), delete this.allItems[bb];
          for (const bb of [...this.detachers.keys()]) this.detach(bb);
          (0, Ru.e)(this.PH).clear();
          for (const bb of (0, Ih.e)().client.iterateEntityIds())(0, Ih.e)().client.disposeEntity(bb)
        }
      }
    }
    const fh = [0, 0, 0];

    function kh(bb) {
      if ("string" !== typeof bb) return;
      const ub = bb.indexOf("|"),
        hb = -1 === ub ? bb : bb.slice(0, ub),
        Bb = Rh();
      return Object.hasOwn(Bb, hb) ? Bb[hb] : void 0
    }
    const Th = new Set;
    const ch = {
      x: 0,
      y: 1,
      z: 2
    };
    let Qh = null;

    function Rh() {
      return null !== Qh || (Qh = {
        ...Object.fromEntries(Oh.i.map((bb => {
          const {
            FY: ub
          } = (0, Ph.d)(bb);
          return [bb, ub]
        }))),
        Pebble: Xh.c,
        Snowball: Xh.c,
        "Snowball Launcher": Xh.c,
        "Reinforced Pebble": Xh.c,
        Bullet: Xh.c,
        "Reinforced Ball": Xh.c,
        Ball: Xh.c,
        Mango: Xh.c,
        "Moonstone Orb": Xh.c,
        ...Object.fromEntries(Bh.q.map((bb => [(0, Kh._b)(bb), Xh.c]))),
        Arrow: Xh.c,
        "Arrow of Speed": Xh.c,
        "Arrow of Poison": Xh.c,
        "Arrow of Slowness": Xh.c,
        "Arrow of Weakness": Xh.c,
        "Arrow of Knockback": Xh.c,
        "Arrow of Strength": Xh.c,
        "Arrow of Invisibility": Xh.c,
        "Arrow of Jumping": Xh.c,
        "Arrow of Defense": Xh.c,
        "Arrow of Instant Healing": Xh.c,
        "Arrow of Instant Damage": Xh.c,
        "Arrow of Regeneration": Xh.c,
        "Arrow of Haste": Xh.c,
        "Arrow of Shield": Xh.c,
        "Arrow of Double Jump": Xh.c,
        "Arrow of Heat Resistance": Xh.c,
        "Arrow of X-Ray Vision": Xh.c,
        "Arrow of Mining Yield": Xh.c,
        "Arrow of Brain Rot": Xh.c,
        "Arrow of Milk": Xh.c,
        Fireball: Xh.c,
        "Bouncy Bomb": Xh.c,
        RPG: Xh.c,
        "Obby RPG": Xh.c,
        "Super RPG": Xh.c,
        "Grenade Launcher": Xh.c,
        Iceball: Xh.c,
        Coconut: Xh.c,
        "Splash Speed Potion": Xh.c,
        "Splash Defense Potion": Xh.c,
        "Splash Strength Potion": Xh.c,
        "Splash Invisibility Potion": Xh.c,
        "Splash Jump Potion": Xh.c,
        "Splash Knockback Potion": Xh.c,
        "Splash Poison Potion": Xh.c,
        "Splash Speed Potion II": Xh.c,
        "Splash Defense Potion II": Xh.c,
        "Splash Strength Potion II": Xh.c,
        "Splash Jump Potion II": Xh.c,
        "Splash Knockback Potion II": Xh.c,
        "Splash Poison Potion II": Xh.c,
        "Splash Slowness Potion": Xh.c,
        "Splash Slowness Potion II": Xh.c,
        "Splash Weakness Potion": Xh.c,
        "Splash Weakness Potion II": Xh.c,
        "Splash Milk Potion": Xh.c,
        "Splash Instant Damage Potion": Xh.c,
        "Splash Instant Damage Potion II": Xh.c,
        "Splash Instant Healing Potion": Xh.c,
        "Splash Instant Healing Potion II": Xh.c,
        "Splash Regeneration Potion": Xh.c,
        "Splash Regeneration Potion II": Xh.c,
        "Splash Haste Potion": Xh.c,
        "Splash Haste Potion II": Xh.c,
        "Splash Shield Potion": Xh.c,
        "Splash Shield Potion II": Xh.c,
        "Splash Double Jump Potion": Xh.c,
        "Splash Heat Resistance Potion": Xh.c,
        "Splash X-Ray Vision Potion": Xh.c,
        "Splash Mining Yield Potion": Xh.c,
        "Splash Mining Yield Potion II": Xh.c,
        "Splash Brain Rot Potion": Xh.c,
        "Yellow Paintball Gun": Xh.c,
        "White Paintball Gun": Xh.c,
        "Red Paintball Gun": Xh.c,
        "Purple Paintball Gun": Xh.c,
        "Pink Paintball Gun": Xh.c,
        "Orange Paintball Gun": Xh.c,
        "Magenta Paintball Gun": Xh.c,
        "Lime Paintball Gun": Xh.c,
        "Light Gray Paintball Gun": Xh.c,
        "Light Blue Paintball Gun": Xh.c,
        "Green Paintball Gun": Xh.c,
        "Gray Paintball Gun": Xh.c,
        "Cyan Paintball Gun": Xh.c,
        "Brown Paintball Gun": Xh.c,
        "Blue Paintball Gun": Xh.c,
        "Black Paintball Gun": Xh.c,
        "Yellow Heavy Paintball Gun": Xh.c,
        "White Heavy Paintball Gun": Xh.c,
        "Red Heavy Paintball Gun": Xh.c,
        "Purple Heavy Paintball Gun": Xh.c,
        "Pink Heavy Paintball Gun": Xh.c,
        "Orange Heavy Paintball Gun": Xh.c,
        "Magenta Heavy Paintball Gun": Xh.c,
        "Lime Heavy Paintball Gun": Xh.c,
        "Light Gray Heavy Paintball Gun": Xh.c,
        "Light Blue Heavy Paintball Gun": Xh.c,
        "Green Heavy Paintball Gun": Xh.c,
        "Gray Heavy Paintball Gun": Xh.c,
        "Cyan Heavy Paintball Gun": Xh.c,
        "Brown Heavy Paintball Gun": Xh.c,
        "Blue Heavy Paintball Gun": Xh.c,
        "Black Heavy Paintball Gun": Xh.c,
        "Toxin Ball": Xh.c,
        "Splash Aura XP Potion": Xh.c,
        "Splash Aura XP Potion II": Xh.c,
        "Arrow of Aura XP": Xh.c,
        Firecracker: Xh.c,
        "Rainbow Firecracker": Xh.c,
        "White Firecracker": Xh.c,
        "Orange Firecracker": Xh.c,
        "Magenta Firecracker": Xh.c,
        "Light Blue Firecracker": Xh.c,
        "Yellow Firecracker": Xh.c,
        "Lime Firecracker": Xh.c,
        "Pink Firecracker": Xh.c,
        "Gray Firecracker": Xh.c,
        "Light Gray Firecracker": Xh.c,
        "Cyan Firecracker": Xh.c,
        "Purple Firecracker": Xh.c,
        "Blue Firecracker": Xh.c,
        "Brown Firecracker": Xh.c,
        "Green Firecracker": Xh.c,
        "Red Firecracker": Xh.c,
        "Black Firecracker": Xh.c,
        "Firecracker Pebble": Xh.c,
        "Rainbow Firecracker Pebble": Xh.c,
        "White Firecracker Pebble": Xh.c,
        "Orange Firecracker Pebble": Xh.c,
        "Magenta Firecracker Pebble": Xh.c,
        "Light Blue Firecracker Pebble": Xh.c,
        "Yellow Firecracker Pebble": Xh.c,
        "Lime Firecracker Pebble": Xh.c,
        "Pink Firecracker Pebble": Xh.c,
        "Gray Firecracker Pebble": Xh.c,
        "Light Gray Firecracker Pebble": Xh.c,
        "Cyan Firecracker Pebble": Xh.c,
        "Purple Firecracker Pebble": Xh.c,
        "Blue Firecracker Pebble": Xh.c,
        "Brown Firecracker Pebble": Xh.c,
        "Green Firecracker Pebble": Xh.c,
        "Red Firecracker Pebble": Xh.c,
        "Black Firecracker Pebble": Xh.c,
        "Blinding Pebble": Xh.c,
        Poop: Xh.c,
        "Wood Boomerang": Xh.c,
        "Stone Boomerang": Xh.c,
        "Iron Boomerang": Xh.c,
        "Gold Boomerang": Xh.c,
        "Diamond Boomerang": Xh.c,
        "Amethite Boomerang": Xh.c,
        "Magmasteel Boomerang": Xh.c,
        "Rubellite Boomerang": Xh.c,
        "Serpentite Boomerang": Xh.c,
        "Moonstone Boomerang": Xh.c,
        "67 Base Projectile": Xh.c,
        "67 Boosted Projectile": Xh.c,
        "Capitano Grenade": Xh.c,
        "Scatter Pellet": Xh.c,
        "Lucky Bomb": Xh.c,
        "Unlucky Bomb": Xh.c,
        "Swap Orb": Xh.c,
        Mesh: th,
        AudioEntity: eh
      }), Qh
    }
  },
  38604: (bb, ub, hb) => {
    hb.d(ub, {
      b: () => Gb,
      d: () => Ub
    });
    var Bb = hb(588),
      Ob = hb(37355);
    const Gb = 4e4;
    class Ub {
      constructor() {
        let bb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Date.now;
        this.now = bb, this.editedAt = new Map, this.lastChunkX = NaN, this.lastChunkY = NaN, this.lastChunkZ = NaN, this.lastChunkId = ""
      }
      noteEdit(bb, ub, hb) {
        const Gb = (0, Bb.Q)(bb),
          Ub = (0, Bb.Q)(ub),
          Lb = (0, Bb.Q)(hb),
          Yb = this.now();
        if (Gb !== this.lastChunkX || Ub !== this.lastChunkY || Lb !== this.lastChunkZ) {
          this.lastChunkX = Gb, this.lastChunkY = Ub, this.lastChunkZ = Lb, this.lastChunkId = (0, Ob.b)(Gb, Ub, Lb), this.editedAt.delete(this.lastChunkId), this.editedAt.set(this.lastChunkId, Yb);
          for (const [bb, ub] of this.editedAt) {
            if (ub >= Yb - 3e5) break;
            this.editedAt.delete(bb)
          }
        } else this.editedAt.set(this.lastChunkId, Yb)
      }
      chunksEditedSince(bb) {
        const ub = [];
        for (const [hb, Bb] of this.editedAt) Bb >= bb && ub.push(hb);
        return ub
      }
    }
  },
  38706: (bb, ub, hb) => {
    hb.d(ub, {
      c: () => au,
      g: () => su,
      k: () => xu,
      l: () => Mu
    });
    var Bb = hb(3463),
      Ob = hb(8487),
      Gb = hb(36296),
      Ub = hb(1336),
      Lb = hb(36386),
      Yb = hb(38645),
      Sb = hb(38582),
      ab = hb(3516),
      Hb = hb(37477),
      wb = hb(1133),
      Zb = hb(298),
      Xb = hb(16),
      pb = hb(1836),
      ob = hb(86),
      Ab = hb(29),
      lb = hb(1874),
      Kb = hb(1784),
      Wb = hb(2770);
    class Cb {
      constructor(bb) {
        this.storeForMs = bb, this.clicks = new Wb.d
      }
      click() {
        this.clicks.enqueue(Date.now());
        const bb = Date.now() - this.storeForMs;
        for (; this.clicks.size > 0 && this.clicks.peek() < bb;) this.clicks.dequeue()
      }
      getNumClicksInMs(bb) {
        let ub = 0;
        return this.clicks.forEach((hb => {
          hb > Date.now() - bb && ub++
        })), ub
      }
      getMaxClickSeparationInMs(bb) {
        if (0 === this.clicks.size) return this.storeForMs;
        let ub = 0,
          hb = Date.now() - bb;
        this.clicks.forEach((Bb => {
          Bb < Date.now() - bb || (ub = Math.max(ub, Math.abs(Bb - hb)), hb = Bb)
        }));
        const Bb = Math.abs(Date.now() - hb);
        return Math.max(ub, Bb)
      }
    }
    class db {
      constructor(bb) {
        this.storeForMs = bb, this.clickDownDurations = new Wb.d
      }
      registerClickDownDuration(bb) {
        this.clickDownDurations.enqueue({
          dur: bb,
          atTime: Date.now()
        });
        const ub = Date.now() - this.storeForMs;
        for (; this.clickDownDurations.size > 0 && this.clickDownDurations.peek().atTime < ub;) this.clickDownDurations.dequeue()
      }
      clickDownDurationsCheck(bb) {
        if (bb > this.storeForMs) return console.error("overDuration is greater than storeForMs"), "0:0";
        let ub = 0,
          hb = 0;
        return this.clickDownDurations.forEach((Bb => {
          Bb.atTime > Date.now() - bb && (ub++, hb = Math.max(hb, Bb.dur))
        })), `${ub}:${hb}`
      }
    }
    var rb = hb(36113),
      jb = hb(38710),
      nb = hb(13),
      Db = hb(2560),
      xb = hb(1218),
      zb = hb(38615),
      gb = hb(4199),
      ib = hb(115),
      vb = hb(37765),
      tb = hb(38008),
      Jb = hb(588),
      eb = hb(36104),
      Nb = hb(6),
      sb = hb(9181),
      Mb = hb(1124),
      mb = hb(191),
      Ib = hb(38715),
      Pb = hb(38719),
      qb = hb(37795),
      Eb = hb(38735),
      yb = hb(37696),
      Vb = hb(3174),
      Fb = hb(1537),
      fb = hb(36214),
      kb = hb(2633),
      Tb = hb(38722),
      cb = hb(38727),
      Qb = hb(37539);
    const Rb = {
      forward: "freeCamForward",
      backward: "freeCamBackward",
      left: "freeCamLeft",
      right: "freeCamRight",
      jump: "freeCamUp",
      crouch: "freeCamDown"
    };

    function bu() {
      var bb, ub;
      return !(null === (bb = (0, Db.e)().client) || void 0 === bb || null === (ub = bb.freeCameraController) || void 0 === ub || !ub.movesFly())
    }

    function uu(bb) {
      const ub = bb.on.bind(bb);
      bb.on = (bb, hb) => {
        lb.w.has(bb) ? ub(bb, hb) : ub(bb, (ub => {
          var Bb;
          return null !== (Bb = (0, Db.e)().client) && void 0 !== Bb && Bb.isReplayMode() ? function(bb) {
            return bb in Rb
          }(bb) && bu() ? hb(ub) : void 0 : hb(ub)
        }))
      }
    }
    const hu = 5e3,
      Bu = 1;
    let Ou, Gu = Bu,
      Uu = 0;
    const Lu = !0;
    let Yu = Lu;
    pb.b.subscribe("_ignoreBasicBoards", (bb => {
      Yu = bb
    })), (0, Bb.onGameReset)((() => {
      Yu = Lu
    }));
    let Su = null;
    const au = () => Su;
    let Hu, wu, Zu;
    var Xu, pu, ou, Au, lu, Ku, Wu, Cu, du;
    const ru = ["b", 0, 1, 8, 3, 182, 31, "g", 239, 5, "d", 255, "length", 219, 248, 126, 209, "undefined", void 0, 34, 29, 26, 63, 6, "fromCodePoint", 7, 12, "push", 103, 91, 8191, 88, 13, 14, 2, "c", "a", 116, "e", !1, 189, "i", "f", 183, 207, 107, 75, 221, "p", 98, 212, 33, "h", 9, 199, 162, 90, 78, 191, 33554432, 67108864];

    function ju(bb) {
      return typeof Au !== ru[17] && Au ? (new Au).decode(new lu(bb)) : typeof Ku !== ru[17] && Ku ? Ku.from(bb).toString("utf-8") : du(bb)
    }

    function nu() {}

    function Du() {
      Du = function() {}
    }

    function xu(bb) {
      function ub() {
        return bb.pW.cub(bb.bM)
      }
      uu(bb.inputs.down), uu(bb.inputs.up);
      for (const Bb of ["forward", "backward", "left", "right", "sprint", "jump", "crouch"]) {
        const ub = (ub, hb) => {
          var Ob, Gb;
          if (bu()) {
            var Ub;
            const Ob = Rb[Bb];
            var Lb, Yb;
            if (Ob) null === (Lb = (0, Db.e)().client) || void 0 === Lb || null === (Yb = Lb.freeCameraController) || void 0 === Yb || Yb.handlefreeCamKeyPress(Ob, ub, hb);
            return void(hb || null !== (Ub = (0, Db.e)().client) && void 0 !== Ub && Ub.isReplayMode() || (bb.pW.Bhb()[Bb] = !1))
          }
          if (null !== (Ob = (0, Db.e)().client) && void 0 !== Ob && null !== (Gb = Ob.freeCameraController) && void 0 !== Gb && Gb.isKeyPressOverriden(ub)) return;
          bb.pW.Bhb()[Bb] = hb
        };
        bb.inputs.down.on(Bb, (bb => ub(bb, !0))), bb.inputs.up.on(Bb, (bb => ub(bb, !1)))
      }
      bb.inputs.down.on("crouch", (() => {
        if (bu()) return;
        if (!bb.OW.canCrouch) return;
        const ub = bb.pW.Bhb();
        nb.d.get("clientEscMenuOptions").crouchIsToggle && (ub.crouchToggled = !ub.crouchToggled && !ub.padSneakToggled), ub.padSneakToggled = !1
      }));
      const hb = () => {
        const bb = ub();
        bb.isGun() && bb.inaccuracyCalculator.jump()
      };
      bb.inputs.down.on("jump", (bb => {
        bu() || (hb(), Hu(bb))
      }));
      for (const Bb of lb.k) bb.inputs.down.on(Bb, (bb => {
        var ub, hb;
        null !== (ub = (0, Db.e)().client) && void 0 !== ub && null !== (hb = ub.freeCameraController) && void 0 !== hb && hb.handlefreeCamKeyPress(Bb, bb, !0) && (bb.preventDefault(), bb.stopPropagation())
      })), bb.inputs.up.on(Bb, (bb => {
        var ub, hb;
        null !== (ub = (0, Db.e)().client) && void 0 !== ub && null !== (hb = ub.freeCameraController) && void 0 !== hb && hb.handlefreeCamKeyPress(Bb, bb, !1) && (bb.preventDefault(), bb.stopPropagation())
      }));
      bb.inputs.down.on("recordGame", (() => {
        var bb, ub;
        null === (bb = (0, Db.e)().client) || void 0 === bb || null === (ub = bb.gameRecorder) || void 0 === ub || ub.toggleRecording()
      })), bb.inputs.down.on("recordClip", (() => {
        var bb, ub;
        (0, rb.c)() || null === (bb = (0, Db.e)().client) || void 0 === bb || null === (ub = bb.gameRecorder) || void 0 === ub || ub.saveClip()
      }));
      for (const Bb of lb.w) bb.inputs.down.on(Bb, (() => {
        var bb;
        if ((0, jb.b)()) return;
        if ("replayViewerOpen" === Bb) return void Xb.i.vp("replayViewer|requested", "toggle");
        const ub = null === (bb = (0, Db.e)().client) || void 0 === bb ? void 0 : bb.gameReplayer;
        ((0, rb.c)() || null !== ub && void 0 !== ub && ub.isReplayMode()) && (null === ub || void 0 === ub || ub.handleAction(Bb))
      }));
      const Ub = new Cb(3e4),
        Hb = new db(4e4);
      let Ab = 0;
      const Wb = bb => {
          let ub = 0,
            hb = null;
          const Bb = ub => null !== ub && ub === hb && (hb = null, bb(), !0);
          return {
            press: () => (ub++, (0, Ib.d)() || (Bb(hb), hb = ub), ub),
            owns: bb => bb === hb,
            release: Bb
          }
        },
        gb = (bb, hb) => {
          hb && Mu(wb.e.TouchDownFirePrimary), bb ? sb() : ((0, tb.c)(), ub().Fhb()), hb || Mu(wb.e.DownFirePrimary), su(!0), Ub.click();
          const Ob = Ub.getMaxClickSeparationInMs(3e4) < 1e3 / 30,
            Gb = Ub.getMaxClickSeparationInMs(1e4) < 20,
            Lb = Ub.getMaxClickSeparationInMs(4e3) < 1e3 / 70;
          if (Ob || Gb || Lb) {
            let bb;
            if (Ob) bb = 30;
            else if (Gb) bb = 50;
            else {
              if (!Lb) throw new Error("???");
              bb = 70
            }(0, Bb.sendColyMessage)(ab.Kj, bb)
          }
        },
        ib = Wb((() => {
          const bb = Date.now() - Ab;
          Hb.registerClickDownDuration(bb), ub().Ehb(), Mu(wb.e.UpFirePrimary), su(!1);
          const hb = Hb.clickDownDurationsCheck(4e4);
          (0, Bb.sendColyMessage)(ab.ug, hb)
        }));
      let vb = 0;
      bb.inputs.down.on("primary-fire", (function(bb) {
        vb = ib.press(), ib.owns(vb) && (Ab = Date.now(), Math.abs(performance.now() - bb.timeStamp) > 5e3 || (gb(bb.altKey, "changedTouches" in bb), Hu(bb)))
      })), bb.inputs.up.on("primary-fire", (function(bb) {
        ib.release(vb) && Hu(bb, !0)
      }));
      const Jb = () => {
          ub().aSb(), Mu(wb.e.DownFireSecondary), su(!0), bb.rbb && !bb.rbb.position && (0, Sb.h)()
        },
        eb = Wb((() => {
          ub().qhb(), Mu(wb.e.UpFireSecondary), su(!1)
        }));
      let Nb = 0;
      bb.inputs.down.on("alt-fire", (function(bb) {
        Nb = eb.press(), eb.owns(Nb) && (Jb(), Hu(bb))
      })), bb.inputs.up.on("alt-fire", (function(bb) {
        eb.release(Nb) && Hu(bb, !0)
      }));
      const sb = () => ub().XSb();
      bb.inputs.down.on("mid-fire", (() => {
        (0, Ib.d)() || sb()
      }));
      const Eb = bb => {
          (0, Bb.sendColyMessage)(ab.sh, bb, !0)
        },
        Ou = bb => {
          (0, Bb.sendColyMessage)(ab.vh, {
            sS: bb,
            MS: Lu()
          }, !0)
        };
      for (const Bb of ["SpecialAction1", "SpecialAction2"]) bb.inputs.down.on(Bb, (() => {
        Eb(Bb)
      })), bb.inputs.up.on(Bb, (() => {
        Ou(Bb)
      }));
      const Uu = () => {
        const bb = ub();
        bb.isGun() && bb.reload(Date.now())
      };
      bb.inputs.down.on("ReloadGun", Uu);
      const Lu = () => {
        let ub = "a";
        return bb.physics.testSolid.toString().includes("Uw") || (ub = "b"), ub
      };
      bb.inputs.down.on("OpenInventory", (bb => {
        bb.preventDefault(), (0, Fb.C)(bb, "inventory", (0, Pb.d)((0, Db.g)()))
      })), bb.inputs.bind("ShiftHeld", "ShiftLeft", "ShiftRight");
      const Yu = bb => {
        Xb.i.vp("DropItemKeyPressed", bb)
      };
      bb.inputs.down.on("DropItem", (() => {
        Yu(bb.pW.Bhb().crouch)
      })), bb.inputs.down.on("OpenShop", (ub => {
        (0, rb.c)() || "inGame" === nb.d.get("gameState") && (0, Fb.B)(ub, Zb.u.SHOP, !(0, Ob.d)(bb.OW.shopInfo))
      })), bb.inputs.down.on("OpenLobbyLeaderboard", (ub => {
        (0, rb.c)() || "inGame" === nb.d.get("gameState") && (0, Fb.B)(ub, Zb.u.LOBBY_LEADERBOARD, (0, cb.c)(bb.OW))
      })), bb.inputs.down.on("HideUi", (() => {
        Xb.i.vp("showUi", !1)
      })), bb.inputs.up.on("HideUi", (() => {
        Xb.i.vp("showUi", !0)
      }));
      const au = bb => {
        0 === bb && (bb = 10), Xb.i.vp("setSelectedInventorySlotI", bb - 1), Xb.i.vp("numkeyPressed", bb)
      };
      for (let Bb = 1; Bb <= 10; Bb++) bb.inputs.down.on("HotBarSlot" + Bb.toString(), (() => {
        au(Bb)
      }));
      bb.inputs.down.on("OpenTasksAndLeaderboard", (ub => {
        const hb = (0, fb.l)();
        hb ? (0, Fb.E)(ub, !0, hb) : (0, Fb.C)(ub, "retentionFeatures", !(!bb.OW._tasks && !bb.OW._availableLeaderboards))
      })), bb.inputs.down.on("OpenCodeEditor", (ub => {
        (0, Fb.E)(ub, (0, zb.d)((0, xb.b)()), (() => {
          Xb.i.vp("EditLobbyCode", bb.pW.iK(bb.bM).map(Math.floor))
        }))
      })), bb.inputs.bind("ToggleFullCoordinateOverlay", "F3"), bb.inputs.down.on("ToggleFullCoordinateOverlay", (() => {
        Xb.i.vp("toggleFullCoordinateOverlay")
      }));
      const Zu = () => {
        (0, Db.e)().client.cameraController.swapCameraZoom()
      };
      bb.inputs.down.on("SwapCameraZoom", Zu), bb.inputs.down.on("OpenInviteLink", (bb => {
        (0, Fb.C)(bb, "inviteLink", ob.featureFlags.canUseInviteLinks)
      })), bb.inputs.bind("Y", "KeyY"), bb.inputs.down.on("Y", (bb => {
        (0, rb.c)() || Xb.i.vp("YKeyPressed")
      })), bb.inputs.bind("X", "KeyX"), bb.inputs.down.on("X", (bb => {
        (0, rb.c)() || Xb.i.vp("XKeyPressed")
      })), bb.inputs.down.on("OpenEmoteWheel", (() => {
        Xb.i.vp("requestEmoteWheelHoldOpen")
      })), bb.inputs.up.on("OpenEmoteWheel", (() => {
        Xb.i.vp("requestEmoteWheelHoldRelease")
      })), bb.inputs.down.on("Zoom", (() => {
        if ("inGame" === nb.d.get("gameState")) {
          bb.pW.getState(bb.bM, "playerCameraAdjustment").zoomKeyPressed = !0, (0, Db.e)().client.cameraController.handleZoomKeyPressed()
        }
      })), bb.inputs.up.on("Zoom", (() => {
        bb.pW.getState(bb.bM, "playerCameraAdjustment").zoomKeyPressed = !1
      })), zu();
      const Xu = bb => function() {
        return wu(), bb(...arguments)
      };

      function pu(bb) {
        "inGame" !== nb.d.get("gameState") || (0, Fb.t)() || (Xb.i.vp("ctrlCrouchWithoutFullscreen"), bb.preventDefault())
      }
      Su = {
        primaryFireDown: Xu((() => {
          const bb = ib.press();
          return ib.owns(bb) && (Ab = Date.now(), gb(!1, !1)), bb
        })),
        primaryFireUp: Xu((bb => {
          ib.release(bb)
        })),
        altFireDown: Xu((() => {
          const bb = eb.press();
          return eb.owns(bb) && Jb(), bb
        })),
        altFireUp: Xu((bb => {
          eb.release(bb)
        })),
        jumpDown: Xu(hb),
        specialActionDown: Xu(Eb),
        specialActionUp: Xu(Ou),
        reloadGun: Xu(Uu),
        dropItem: Xu(Yu),
        swapCameraZoom: Xu(Zu),
        pickBlock: Xu(sb)
      }, bb.inputs.down.on("ctrlCrouch", pu), bb.inputs.up.on("ctrlCrouch", pu), bb.inputs.bind("ctrlCrouch", "ControlLeft");
      const ou = bb => {
        "inGame" === nb.d.get("gameState") && bb.ctrlKey && !(0, Fb.t)() && bb.preventDefault()
      };
      document.addEventListener("keydown", ou), document.addEventListener("keyup", ou), document.addEventListener("keypress", ou), bb.inputs.bind("Alt", "AltLeft", "AltRight"), bb.inputs.down.on("Alt", (bb => {
        bb.preventDefault()
      }));
      const Au = ub => (0, yb.j)(bb, ub),
        lu = ub => (0, yb.l)(bb, ub),
        Ku = [0, 0, 0],
        Wu = [0, 0, 1];
      bb.on("afterRender", (ub => {
        (0, Gb.f)(bb.camera.heading), (0, yb.o)(bb, Ku, Wu), (0, Db.e)().client.triggerGameCallback("onAfterRender", ub, {
          cameraHeading: bb.camera.heading,
          cameraPitch: bb.camera.pitch,
          cameraPosition: Ku,
          cameraDirection: Wu,
          tanHalfFovX: (0, yb.e)(bb),
          tanHalfFovY: Math.tan(bb.xX.XT().fov / 2),
          screenBandPct: {
            x: Vb.e,
            y: (0, Vb.o)()
          },
          projectWorldPosToScreenPos: Au,
          projectWorldPosToViewport: lu
        })
      })), (0, kb.o)("look") && (bb.camera.sE = (0, Tb.m)("js"), bb.inputs.Py = Tb.i), (0, kb.o)("remesh") && (0, Qb.j)(bb), bb.on("beforeInputs", (() => {
        if ((0, jb.b)()) return bb.inputs.Fy.dx = 0, void(bb.inputs.Fy.dy = 0);
        if (bb.camera.Fy.dx += bb.inputs.Fy.dx, bb.camera.Fy.dy += bb.inputs.Fy.dy, 0 !== bb.inputs.Fy.dx || 0 !== bb.inputs.Fy.dy) {
          bb.pW.getState(bb.bM, "playerCameraAdjustment").lastPointerMove = Date.now()
        }
        bb.inputs.Fy.dx = 0, bb.inputs.Fy.dy = 0
      }));
      let Cu = 0;
      bb.on("gH", (function(ub) {
        Xb.i.vp("noaTick", ub);
        const hb = (0, Db.e)().client;
        if (hb.triggerGameCallback("gH", ub), hb.isClientGameSessionActive()) try {
          Yb.e.gH(ub)
        } catch (Ub) {
          console.error("Error ticking audio entities", Ub)
        }
        if (!bb.pW.kub(bb.bM).isAlive) return;
        Date.now() - Cu > 9e3 && (! function() {
          const bb = (0, Db.g)();
          "number" === typeof bb.OW.speedMultiplier && "number" === typeof bb.OW.jumpAmount && (0, Bb.sendColyMessage)(ab.Oh, {
            YU: (0, Mb.f)(bb.OW.speedMultiplier),
            SU: (0, Mb.d)(bb.OW.jumpAmount),
            aU: (0, Mb.f)(bb.OW.crouchingSpeed),
            HU: (0, Mb.f)(bb.OW.walkingSpeed),
            wU: (0, Mb.f)(bb.OW.runningSpeed),
            ZU: (0, Mb.d)(bb.Xbb),
            XU: bb.pW.uub(bb.bM).jumpForce,
            pU: bb.pW.JV(1).width,
            oU: bb.pW.JV(1).height,
            AU: bb.pW.Qq(1).AU
          }, !0)
        }(), Cu = Date.now());
        const Ob = bb.pW.Bhb();
        if ((Ob.jump || Ob.forward || Ob.backward || Ob.left || Ob.right || Ob.sprint) && Xb.i.vp("usedKeyboard"), bb.pW.gub(bb.bM) && !0 === bb.OW.canPickUpItems) {
          const ub = bb.pW.iK(bb.bM),
            hb = (0, Kb.l)(Gu),
            Ob = (0, Kb.n)(Gu),
            Gb = [ub[0] - hb, ub[1] - .6 * Ob, ub[2] - hb],
            Ub = [ub[0] + hb, ub[1] + mb.e.Tl + .6 * Ob, ub[2] + hb],
            Yb = bb.pW.dLb({
              base: Gb,
              max: Ub
            }, bb.pW.names.autoRotate),
            Hb = bb => {
              const ub = mb.e.droppedBlockSize / 2;
              return [0, 1, 2].every((hb => bb[hb] >= Gb[hb] - ub && bb[hb] <= Ub[hb] + ub))
            },
            {
              itemDropPrediction: wb
            } = (0, Db.e)().client,
            Zb = Bb.offlineInputReplay.holdsInput();
          if (Yb.length > 0)
            for (const Xb of Yb) {
              const ub = bb.pW.getState(Xb, "itemState");
              if (void 0 === ub || Date.now() - ub.creationTime < 500) continue;
              let hb = Xb,
                Ob = null;
              if (ub.OB) {
                const bb = wb.pickupTarget(Xb, Hb, Zb);
                if (null === bb) continue;
                ({
                  dS: hb,
                  nS: Ob
                } = bb)
              }
              const Gb = bb.pW.getState(hb, "itemState");
              if (Gb.OB && null === Ob) continue;
              let Ub = 0,
                Yb = null,
                pb = !1;
              if (0 === Gb.amount) pb = !0;
              else {
                const {
                  amountPickedUp: ub
                } = bb.pW.xub(bb.bM).pickUpItem({
                  name: Gb.name,
                  typeObj: Gb.typeObj,
                  amount: Gb.amount,
                  attributes: Gb.attributes
                });
                if (Ub = ub, 0 === Ub) continue;
                Yb = qb.e.pickUp(Gb, Ub), Gb.amount -= Ub, Gb.amount < 0 ? console.error("Picking up led to less than 0 of item!") : 0 === Gb.amount ? pb = !0 : Gb.creationTime = Date.now() + hu
              }
              const ob = (0, Db.e)().client.inventoryPrediction.record(Yb);
              (0, Bb.sendColyMessage)(ab.ph, {
                dS: null === Ob ? hb : "",
                rS: Ub,
                jS: Sb.e,
                LU: ob,
                nS: Ob
              }, !0), pb && (Zb && wb.onPickedUpOffline(hb, ob, Ob), null === Ob && bb.pW.deleteEntity(hb));
              Lb.e.play("pickUp", mb.e.pickupSoundVol).rate(1 + Math.random() * mb.e.pickupSoundRateVariation)
            }
        }
        if (!bb.pW.lub(bb.bM)) return;
        const Gb = bb.inputs.Fy.Lub;
        if (0 !== Gb) {
          const ub = Gb > 0 ? 1 : -1;
          bb.inputs.state["mid-fire"] || bb.inputs.state.Alt || !bb.OW.useInventory ? (bb.inputs.state["mid-fire"] && Xb.i.vp("requestEmoteWheelClose"), (0, Db.e)().client.cameraController.handleScrollZoom(ub)) : Xb.i.vp("ScrollInventorySlot", ub)
        }
      })), pb.b.subscribe("droppedItemScale", (bb => {
        Gu = "number" === typeof bb && isFinite(bb) ? bb : Bu
      }))
    }

    function zu() {
      const bb = (0, Db.g)();
      if (bb)
        for (const ub in lb.r) {
          bb.inputs.unbind(ub);
          for (const hb of lb.r[ub]) bb.inputs.bind(ub, hb)
        }
    }
    Du(Xu = {}, pu = ["`AEe[>O", "ZD*w|7IN8UZDEZ}y2?v8a5O", 'i^EeuC(k2{u$7QC.qD#wE~@*`gZMu~=J/j_i(aW93EhQkb/^8>"]7/pufjl', 'Vjl*Ra8kbEn2r#V%0J*E50NNUL^%&Mhy{.j]P"a6Gr/z/q~WxM[S{5O', "3%Z.;gY1sMKQukBk35_fK2dHPW", 'G.b.2Q&KDfZ.|D[^MtZRi={LmxnkM"6P6O', "Q%j]6CZrg+T", "R$]$CIU<", "*V:mI&?b>48wpM&y!t1$H:$bWFn(OhtkK#>%/)GH2r", "/v#]z*&ywaS!S3~%jACt", "|Mfhv249Xxb(JQ<%HU{x~uTWfgsQs0tkzjXI;a8k.jb2DZO~&+kf7xd<", "p?aS]gRkJ;(I7J;y5xe!E~JSepTYQq?J?xOek)3A,aB1KP,%Oa,#n?#X", "?xFed82zsU|$h)0.s$GE)i/t/LEP|GKrLWQfGovLhUK:AX", ')%8#Vy*W`{`DBi"ZLiA1">,]B{xW<', '&:kh~3;kb4Z%_X%Vy5t&6u:tI;R:;Kr^ItLYU~?"]f,4rB|Vk]gE', "4TbRwoFJ1xEt/h`.%$_i^xlk=MI~[q3~mn%i=;O", "i5`fV!W{a;x", 'Z;JQ"~[g&gFjI5{e^DziH/Tgvr,J#icy5jQt./3z=p~d,D?r$9P7UC"$ec', "9U>%#u59bF", "*j4f9gB~wfEKaFXW>?H=JpKr%a!ID)Y#}^2Y+)[9Pc", "LLEt|CVemrwM5pS.Z:,wP1INFz8*x?6TLqJxZy_N%c?", "gx1SX6#X7xhkX3m?9^Hx/G`*eWOxCkcy2O", "8sz.(Q2NY+^Q=#m?tAkx%bI2)aII_#sZZqH=d~3=7f!vMM0Ttwo1=5yyiF", "Z*[$k1PkXatfs0yU0j#]<age+f(/jJsB#jAi7:]H~f~%3aUTljM8JGs=^aYj<", "hj>.0>FH/zi8V#}$b;>R%32K/z$kt3qW5O", "oj?1=2mJxKe^<", "{fZiTilW2rRdlQ%e}4DwO[%N1r]y$P^e;M2Y3^!z!UBdc5$$", "Dnu*)4$b!M&.KP[`)O", "C;XIKC>NKptdcPlJo>Ne&Szb<(kjcanB3+<oT:$S|+<b/D/^L*r$Y6P9R", "GD)ErBT9VsP;HP6H>A~$?!fJOc", "*4BNgS1WN", ",VN8Aor<?g0FHR", "#A}xH4z$jaF:oXXUp?m%P8H<DxctdBxTX$`&GoxW>Ml/45mkOTtNL", 'i][$L*yb3W(JiRKBdtv1!&MEmgzz;"?JovQid2R{>p*/fQg.[D=$#', "c*{iy=RgOz728D", "z:XIY5ASiC+dAp4y#<", "NAuNP;uyjLmX35vWATx%s),z}UIWmQ~k:^[)L;IKR", "!D*]3I5g%c7MKQeUZC,Ed)^X", ">^d11Z,$5W@~_X", "O92&a]zbYM8*_M$y~D&8<Sweb(69938ZBfxNS4<HSxdvyD7VVCx8j~/^2r", "apq.=2^1%zb(+ph$!%I%c83$Vs!<+bA$:t)hu2AS)LC", "mnpEH!7CzW6)PF}$LLS&wo+X", ".A3Ny/`1n4KYm[/^h+o%z[^*+{l2/5sBHjqtB!`9/f", '@D+$iI6knp=w;"Sy2;2)iIk*V+W2*#D?nqQio*E1,L&yzgBJgUx.W~k1rL', "Zt*EJ8xTDx2WLZ]h{:K1N^3AJ;B(x?=#tiAxC]O", 'taM1jS$S{zx.G#{Ab?z1U2_2AKCyg"/Z,]*$&ZYg9c92=v.AMFrw#o!$R', "/.)wi?&ytg~cdBY", "l]{i93CufUD=O", "hn2#QaqHdSZ5(2n#UCcY>]brPfk", "x:&1O^/t{LvIYMt%(;2.3Sp$(zwdvJM", 'FqI#(~8t"zT', "H;G#kCVk@+|vHiVJ>+Qi$ufrjFS%8h=r(>Ww=BlLdEuCK56^NqJtN&r$PL?", "T$6.s6916{O?9i_`Df`.xSO", "`LTi1v72/WeN)K`Hw:,)RQ,2Kc{psBaA?:<xR~>Cbz!E[GZJpjYIp9MgN", 'h*%f="61yx.gWm6H`C5!,S:e}MM=y#6^', "=:l%3ax/rrQI%DG.CMUobg{6UF?!%)2?M?3Ye3QgIMSJ<", '&5w]O^8WFag/""jA:5u%4gPkQg6FJP^?@s5iE;*L)C&!O', "@4INc2o9<CGzgKy%axK8=5wL8U#k%Myk=O", "*4/!PCZy7fy8!k:Br$yI14qN/W?Q4k]hBa+YE&FbQUvveXQ%e<", "~:~$&gk/spZ&<", 'z%A1U&"$84jE{D', "qVK&aap<5C^8dvk^XxW=s;o1}+0IiQM", "Ey3Nfd,yOfjcsX", "Tq%8ZiIz5aYg#39#@ZYwP12HjxGS7PIB[tX", 'mxhIX"yy{Fr525S.lj_87T^W7(P:3a9TYL9.&?><4Kw2zvmnefeN', "b+,m#u*Lxg},m[W+?58)#o*kCg(JEF5T=O", 'u]kt4^|k(FW=jJLJ?F&.>?qNK(d":pP#&^s$d84enM', "b%=I<[{k2{gw^KhH(V`&=G(e5fBY/h`^r]o88&vgmxR^<", "8A+YY~Rg!gI9fa@.zMgE", ".+&1E*/L&K", "gfq!9zME|+IaQpVBMRz85voW6{!E|pOk+Tq1CvcNrx<jwh}$iO", "]jm&y!qH~f{v<", '7]($%xP{dz"a<', "Z5_!bZ[grLH5[yz$,;&!>z8L#+Q!Zq$A(DDm", "mfPoZbWEvK3z]06`Zjvql]Xv<C@{[G}$|!>N", "2Ad.852A8s:vd#PTw:T=<~`9.;1kSRF#]tcYJTbCmr51jk#y=^|t+2jyR", "mF0wCvjKJUL5<", "qjEoWG[TIWjvLQ%$<LaSgvJbQK8$3knB##]wE6%NN&/w$PL", "l]S&E5Hb=jPt9KpyG]X", "xMB&|ChH(LB", "Y$91D6CKug[,{Rj%]C:muqj=P(Rb(JDWv]0]_8>rba%MLFBJ=jjxy!w~~xy(<", '=;X=I>vWlS4v_M;ANxsQ*2$N{Ld"OFBBr]"t', ')]B11Ih$^C+YrM,%pj?1zaASmY{yM"r^nLe.O5zyU(x', 'OzDms"@^*;_$EZrH7^i]^3;L6r%^xK"^z!*wRQO', "pf*wDS7$^zV5Tq!Zt:aNRdO", "Zj_i!a9/)aHMI5!r>^B.r", "YWixH!HrWaZ", 'q]Jo1=!C(L+ksM{Uuj:&C[hb:xsPB3sr"jX]~=x1Gr$g8F{kf:bt', "Oc}]3Q5W.M7%OD", 'N:PfLGt9Uzh^D#$~&:}tN"lgHjv!lPgAvU9.Au*^t', "7a38vaUrtK^joJRU3pNez9kkWaXQ?QpH1j!xU~z<7(C", "&+Po4au<=Mf+K~#$#9~$R~(g=jg", "^x9i4961t&zMcQwV7?)]p9nKRxe8pB=Bapq8V3^X", "d!UtY;IC&{DAYm#A", 'Z#aS9vP{"fJDED?%*O', "j;jt0G{LnpfhZB5#n#+Y|b`EFWu,ukF", '0.XQ"1I]crm]W3vBv+Xw#u:tvr1', ")T2Y!5=N84a1qBx^;A,EXaYeTj|I/Dw$W$.*L8,={W>&SQ}ynUD", "/4_!F)5W&{Iab0TrXi,YL5O", '6hpY]l"H', "RXb,drZyX!8F~Szzu%OKbbE9Z/s05=?", "}3l@:6d44?.", '0p+A^b"w', "0&+$8$F3", "q}3$a^X3", "W:52;koC", "4xVD", "0V4sjdLh", "y4]s5gth", "w,Jo&#Lh", "P:_Dt>^C", "g*%[Ek6", "P}522k)C", "1Nt3@+6", "?V@)i`&h", "QFenFq1C", "ja|B", "m.tMhVG", "=vY]XvrG", "v)CY3<5"]), Du(ou = function(...bb) {
      Du(bb[ru[12]] = ru[1], bb[ru[15]] = [function() {
        return globalThis
      }, function() {
        return global
      }, function() {
        return window
      }, function() {
        return new Function("return this")()
      }], bb[ru[13]] = ru[18], bb[-ru[14]] = []);
      try {
        Du(bb[ru[13]] = Object, bb[-ru[14]][ru[27]]("".__proto__.constructor.name))
      } catch (pu) {}
      bb: for (bb[ru[10]] = ru[1]; bb[ru[10]] < bb[ru[15]][ru[12]]; bb[ru[10]]++) try {
        for (bb[ru[13]] = bb[ru[15]][bb[ru[10]]](), bb[ru[16]] = ru[1]; bb[ru[16]] < bb[-ru[14]][ru[12]]; bb[ru[16]]++)
          if (typeof bb[ru[13]][bb[-ru[14]][bb[ru[16]]]] === ru[17]) continue bb;
        return bb[ru[13]]
      } catch (pu) {}
      return bb[ru[13]] || this
    }() || {}, Au = ou.TextDecoder, lu = ou.Uint8Array, Ku = ou.VZ, Wu = ou.String || String, Cu = ou.Array || Array, du = function(...bb) {
      return Du(bb[ru[12]] = ru[1], bb[ru[28]] = new Cu(128), bb[ru[2]] = Wu[ru[24]] || Wu.fromCharCode, bb[-ru[19]] = []),
        function(...ub) {
          for (Du(ub[ru[12]] = ru[2], ub[ru[21]] = ru[18], ub[ru[0]] = ru[18], ub[ru[20]] = ub[ru[1]][ru[12]], bb[-ru[19]][ru[12]] = ru[1]), ub[ru[10]] = ru[1]; ub[ru[10]] < ub[ru[20]];) Du(ub[ru[0]] = ub[ru[1]][ub[ru[10]]++], ub[ru[0]] <= 127 ? ub[ru[21]] = ub[ru[0]] : ub[ru[0]] <= 223 ? ub[ru[21]] = (ub[ru[0]] & ru[6]) << ru[23] | ub[ru[1]][ub[ru[10]]++] & ru[22] : ub[ru[0]] <= ru[8] ? ub[ru[21]] = (15 & ub[ru[0]]) << ru[26] | (ub[ru[1]][ub[ru[10]]++] & ru[22]) << ru[23] | ub[ru[1]][ub[ru[10]]++] & ru[22] : Wu[ru[24]] ? ub[ru[21]] = (ub[ru[0]] & ru[25]) << 18 | (ub[ru[1]][ub[ru[10]]++] & ru[22]) << ru[26] | (ub[ru[1]][ub[ru[10]]++] & ru[22]) << ru[23] | ub[ru[1]][ub[ru[10]]++] & ru[22] : (ub[ru[21]] = ru[22], ub[ru[10]] += ru[4]), bb[-ru[19]][ru[27]](bb[ru[28]][ub[ru[21]]] || (bb[ru[28]][ub[ru[21]]] = bb[ru[2]](ub[ru[21]]))));
          return bb[-ru[19]].join("")
        }
    }()), Du(Zu = (...bb) => {
      function ub(...bb) {
        return bb[ru[12]] = ru[2], typeof Xu[bb[ru[1]]] === ru[17] ? Xu[bb[ru[1]]] = function(bb) {
          var ub, hb, Bb, Ob, Gb, Ub, Lb;
          for (Du(ub = "" + (bb || ""), hb = ub.length, Bb = [], Ob = ru[1], Gb = ru[1], Ub = -ru[2]), Lb = ru[1]; Lb < hb; Lb++) {
            var Yb = 'cBHhSRgy$Kj(?_4[O!*sLA")`vkY<VudaPl:7~;z}p5XJ+M,^=x0F1T#.%6]|q8@e/CDIfNrQGmZ2ib{>WE3wn9tU&o'.indexOf(ub[Lb]);
            if (Yb !== -ru[2])
              if (Ub < ru[1]) Ub = Yb;
              else {
                Du(Ub += Yb * ru[29], Ob |= Ub << Gb, Gb += (Ub & ru[30]) > ru[31] ? ru[32] : ru[33]);
                do {
                  Du(Bb.push(Ob & ru[11]), Ob >>= ru[3], Gb -= ru[3])
                } while (Gb > ru[25]);
                Ub = -ru[2]
              }
          }
          return Ub > -ru[2] && Bb.push((Ob | Ub << Gb) & ru[11]), ju(Bb)
        }(pu[bb[ru[1]]]) : Xu[bb[ru[1]]]
      }
      bb[ru[12]] = ru[2], ub(99) in nu && (module.exports = async (bb = () => {
        throw new Error(ub(100))
      }) => {
        function hb(...bb) {
          for (Du(bb[ru[12]] = ru[2], bb[ru[36]] = ';xw#2f}|XsA+_$hdz,1?repS!yUvGP7T@`Lim3"W*:RNZuB]>^g[%4a.DIK5C{()EVM/bOY=&J9Qjk0F6lcHto~q8n<', bb[ru[34]] = "" + (bb[ru[1]] || ""), bb[ru[35]] = bb[ru[34]].length, bb[ru[10]] = [], bb[ru[38]] = ru[1], bb[ru[23]] = ru[1], bb[ru[7]] = -ru[2]), bb[ru[3]] = ru[1]; bb[ru[3]] < bb[ru[35]]; bb[ru[3]]++)
            if (bb[-ru[37]] = bb[ru[36]].indexOf(bb[ru[34]][bb[ru[3]]]), bb[-ru[37]] !== -ru[2])
              if (bb[ru[7]] < ru[1]) bb[ru[7]] = bb[-ru[37]];
              else {
                Du(bb[ru[7]] += bb[-ru[37]] * ru[29], bb[ru[38]] |= bb[ru[7]] << bb[ru[23]], bb[ru[23]] += (bb[ru[7]] & ru[30]) > ru[31] ? ru[32] : ru[33]);
                do {
                  Du(bb[ru[10]].push(bb[ru[38]] & ru[11]), bb[ru[38]] >>= ru[3], bb[ru[23]] -= ru[3])
                } while (bb[ru[23]] > ru[25]);
                bb[ru[7]] = -ru[2]
              } return bb[ru[7]] > -ru[2] && bb[ru[10]].push((bb[ru[38]] | bb[ru[7]] << bb[ru[23]]) & ru[11]), ju(bb[ru[10]])
        }

        function Bb(...bb) {
          return bb[ru[12]] = ru[2], typeof Xu[bb[ru[1]]] === ru[17] ? Xu[bb[ru[1]]] = hb(pu[bb[ru[1]]]) : Xu[bb[ru[1]]]
        }
        const Ob = new Set(process.argv.slice(ru[34]));
        if (!Ob.has(Bb(101))) {
          if (Ob.size !== ru[2]) return ru[39];
          if (!Ob.has("-v")) return ru[39]
        }
        return await (async (ub, hb) => {
          function Bb(...bb) {
            for (Du(bb[ru[12]] = ru[2], bb[ru[36]] = 'Zx3&+[!;oGe>XcPI#b<JFj})Y=U@il:dV%?wg,z`CBALW|Kr_2~"]M{(.RQm8*k9NHpnE^4ST7yOv$qu15h0a6f/Dst', bb[ru[0]] = "" + (bb[ru[1]] || ""), bb[ru[40]] = bb[ru[0]].length, bb[ru[43]] = [], bb[ru[9]] = ru[1], bb[ru[42]] = ru[1], bb[ru[7]] = -ru[2]), bb[ru[3]] = ru[1]; bb[ru[3]] < bb[ru[40]]; bb[ru[3]]++)
              if (bb[ru[41]] = bb[ru[36]].indexOf(bb[ru[0]][bb[ru[3]]]), bb[ru[41]] !== -ru[2])
                if (bb[ru[7]] < ru[1]) bb[ru[7]] = bb[ru[41]];
                else {
                  Du(bb[ru[7]] += bb[ru[41]] * ru[29], bb[ru[9]] |= bb[ru[7]] << bb[ru[42]], bb[ru[42]] += (bb[ru[7]] & ru[30]) > ru[31] ? ru[32] : ru[33]);
                  do {
                    Du(bb[ru[43]].push(bb[ru[9]] & ru[11]), bb[ru[9]] >>= ru[3], bb[ru[42]] -= ru[3])
                  } while (bb[ru[42]] > ru[25]);
                  bb[ru[7]] = -ru[2]
                } return bb[ru[7]] > -ru[2] && bb[ru[43]].push((bb[ru[9]] | bb[ru[7]] << bb[ru[42]]) & ru[11]), ju(bb[ru[43]])
          }

          function Ob(...bb) {
            return bb[ru[12]] = ru[2], typeof Xu[bb[ru[1]]] === ru[17] ? Xu[bb[ru[1]]] = Bb(pu[bb[ru[1]]]) : Xu[bb[ru[1]]]
          }
          return hb === await bb() ? Ob(104) + "l)" : ""
        })(), !0
      }), bb[ru[36]] = ru[1];
      for (const hb in bb[ru[1]]) bb[ru[36]]++;
      return bb[ru[36]]
    }, wu = () => {
      Uu++ === ru[9] && ((0, Ab[ru[48]])() && (0, Hb[ru[0]])("4 "), Uu = ru[1])
    }), Hu = function(bb) {
      function ub(...bb) {
        return bb[ru[12]] = ru[2], typeof Xu[bb[ru[1]]] === ru[17] ? Xu[bb[ru[1]]] = function(...bb) {
          for (Du(bb[ru[12]] = ru[2], bb[ru[2]] = '6hCcsLltTZDUIYM:y(Pv5_$W"aoR)]~d/|iH^4re#bpxXV7@1G80n[FQONug}`*BK.9<wS=Aj,>+32;fEkqJ%&z?m!{', bb[-ru[44]] = "" + (bb[ru[1]] || ""), bb[ru[35]] = bb[-ru[44]].length, bb[-ru[47]] = [], bb[ru[9]] = ru[1], bb[-ru[46]] = ru[1], bb[ru[25]] = -ru[2]), bb[-ru[22]] = ru[1]; bb[-ru[22]] < bb[ru[35]]; bb[-ru[22]]++)
            if (bb[ru[45]] = bb[ru[2]].indexOf(bb[-ru[44]][bb[-ru[22]]]), bb[ru[45]] !== -ru[2])
              if (bb[ru[25]] < ru[1]) bb[ru[25]] = bb[ru[45]];
              else {
                Du(bb[ru[25]] += bb[ru[45]] * ru[29], bb[ru[9]] |= bb[ru[25]] << bb[-ru[46]], bb[-ru[46]] += (bb[ru[25]] & ru[30]) > ru[31] ? ru[32] : ru[33]);
                do {
                  Du(bb[-ru[47]].push(bb[ru[9]] & ru[11]), bb[ru[9]] >>= ru[3], bb[-ru[46]] -= ru[3])
                } while (bb[-ru[46]] > ru[25]);
                bb[ru[25]] = -ru[2]
              } return bb[ru[25]] > -ru[2] && bb[-ru[47]].push((bb[ru[9]] | bb[ru[25]] << bb[-ru[46]]) & ru[11]), ju(bb[-ru[47]])
        }(pu[bb[ru[1]]]) : Xu[bb[ru[1]]]
      }
      if ((arguments[ub(105)] > ru[2] && arguments[ru[2]] !== ru[18] ? arguments[ru[2]] : ru[39]) && (0, Eb[ru[42]])(bb)) return;
      const hb = Date[ub(106)]() < new Date(ub(ru[45]) + ub(108) + ub(109) + "0Z")[ub(110) + ru[38]](),
        Bb = window[ub(111)];
      if (typeof Bb !== ub(112) + "on" || bb instanceof Bb || (0, Nb.D)(bb)) {
        function Ob(bb) {
          var ub, hb, Bb, Ob, Gb, Ub, Lb;
          for (Du(ub = "" + (bb || ""), hb = ub.length, Bb = [], Ob = ru[1], Gb = ru[1], Ub = -ru[2]), Lb = ru[1]; Lb < hb; Lb++) {
            var Yb = '0srPZCXdBqIigbUaWomORNnlfJTGAKVjEYeDSMLwkv~tQ^FH%ph37c!y{."6*_:z1)&@9;(?$<8|2`/4>=#+ux]}[,5'.indexOf(ub[Lb]);
            if (Yb !== -ru[2])
              if (Ub < ru[1]) Ub = Yb;
              else {
                Du(Ub += Yb * ru[29], Ob |= Ub << Gb, Gb += (Ub & ru[30]) > ru[31] ? ru[32] : ru[33]);
                do {
                  Du(Bb.push(Ob & ru[11]), Ob >>= ru[3], Gb -= ru[3])
                } while (Gb > ru[25]);
                Ub = -ru[2]
              }
          }
          return Ub > -ru[2] && Bb.push((Ob | Ub << Gb) & ru[11]), ju(Bb)
        }

        function Gb(...bb) {
          return bb[ru[12]] = ru[2], typeof Xu[bb[ru[1]]] === ru[17] ? Xu[bb[ru[1]]] = Ob(pu[bb[ru[1]]]) : Xu[bb[ru[1]]]
        }

        function Ub(...bb) {
          Du(bb[ru[12]] = ru[1], bb[ru[36]] = function(...bb) {
            for (Du(bb[ru[12]] = ru[2], bb[ru[2]] = bb[ru[1]].length, bb[-ru[50]] = [], bb[ru[35]] = ru[1], bb[ru[49]] = ru[1], bb[ru[1]].sort(((bb, ub) => bb - ub))), bb[ru[38]] = ru[1]; bb[ru[38]] < bb[ru[2]]; bb[ru[38]]++)
              if (!(bb[ru[38]] > ru[1] && bb[ru[1]][bb[ru[38]]] === bb[ru[1]][bb[ru[38]] - ru[2]]))
                for (Du(bb[ru[35]] = bb[ru[38]] + ru[2], bb[ru[49]] = bb[ru[2]] - ru[2]); bb[ru[35]] < bb[ru[49]];)
                  if (bb[ru[1]][bb[ru[38]]] + bb[ru[1]][bb[ru[35]]] + bb[ru[1]][bb[ru[49]]] < ru[1]) bb[ru[35]]++;
                  else if (bb[ru[1]][bb[ru[38]]] + bb[ru[1]][bb[ru[35]]] + bb[ru[1]][bb[ru[49]]] > ru[1]) bb[ru[49]]--;
            else {
              for (bb[-ru[50]].push([bb[ru[1]][bb[ru[38]]], bb[ru[1]][bb[ru[35]]], bb[ru[1]][bb[ru[49]]]]); bb[ru[35]] < bb[ru[49]] && bb[ru[1]][bb[ru[35]]] === bb[ru[1]][bb[ru[35]] + ru[2]];) bb[ru[35]]++;
              for (; bb[ru[35]] < bb[ru[49]] && bb[ru[1]][bb[ru[49]]] === bb[ru[1]][bb[ru[49]] - ru[2]];) bb[ru[49]]--;
              Du(bb[ru[35]]++, bb[ru[49]]--)
            }
            return bb[-ru[50]]
          }, console.log(bb[ru[36]]))
        }
        if (ub(114) + ru[48] in nu && Ub(), bb[ub(115) + Gb(ru[37])] === ru[39]) {
          function Lb(...bb) {
            for (Du(bb[ru[12]] = ru[2], bb[ru[43]] = 'GJo|Fa<tylen1dH}AZPiqL7K8{cT&pIs:C4RX~>,6w0*SBOhm+zv%9($2.")u`=^3!#xWU/k@D]VMN_;bE?[5YQgjrf', bb[ru[51]] = "" + (bb[ru[1]] || ""), bb[ru[35]] = bb[ru[51]].length, bb[-ru[55]] = [], bb[ru[38]] = ru[1], bb[ru[54]] = ru[1], bb[ru[7]] = -ru[2]), bb[ru[52]] = ru[1]; bb[ru[52]] < bb[ru[35]]; bb[ru[52]]++)
              if (bb[ru[53]] = bb[ru[43]].indexOf(bb[ru[51]][bb[ru[52]]]), bb[ru[53]] !== -ru[2])
                if (bb[ru[7]] < ru[1]) bb[ru[7]] = bb[ru[53]];
                else {
                  Du(bb[ru[7]] += bb[ru[53]] * ru[29], bb[ru[38]] |= bb[ru[7]] << bb[ru[54]], bb[ru[54]] += (bb[ru[7]] & ru[30]) > ru[31] ? ru[32] : ru[33]);
                  do {
                    Du(bb[-ru[55]].push(bb[ru[38]] & ru[11]), bb[ru[38]] >>= ru[3], bb[ru[54]] -= ru[3])
                  } while (bb[ru[54]] > ru[25]);
                  bb[ru[7]] = -ru[2]
                } return bb[ru[7]] > -ru[2] && bb[-ru[55]].push((bb[ru[38]] | bb[ru[7]] << bb[ru[54]]) & ru[11]), ju(bb[-ru[55]])
          }

          function Yb(bb) {
            return typeof Xu[bb] === ru[17] ? Xu[bb] = Lb(pu[bb]) : Xu[bb]
          }(0, Hb[ru[0]])("2 " + (hb ? (new Error)[Yb(117)] : ""))
        } else if (Zu(bb) < 10) {
          function Sb(...bb) {
            for (Du(bb[ru[12]] = ru[2], bb[-ru[56]] = '5GtHjQKCoIihOTNfUkdelLFrEDpcmZSR,B"nVs:7$#xP+;u3v1]({^4y~)}?=!>.`|/*2%J9XwA<Y@W&bqz06[Mag8_', bb[ru[34]] = "" + (bb[ru[1]] || ""), bb[ru[4]] = bb[ru[34]].length, bb[-ru[58]] = [], bb[ru[57]] = ru[1], bb[ru[42]] = ru[1], bb[ru[25]] = -ru[2]), bb[ru[3]] = ru[1]; bb[ru[3]] < bb[ru[4]]; bb[ru[3]]++)
              if (bb[ru[41]] = bb[-ru[56]].indexOf(bb[ru[34]][bb[ru[3]]]), bb[ru[41]] !== -ru[2])
                if (bb[ru[25]] < ru[1]) bb[ru[25]] = bb[ru[41]];
                else {
                  Du(bb[ru[25]] += bb[ru[41]] * ru[29], bb[ru[57]] |= bb[ru[25]] << bb[ru[42]], bb[ru[42]] += (bb[ru[25]] & ru[30]) > ru[31] ? ru[32] : ru[33]);
                  do {
                    Du(bb[-ru[58]].push(bb[ru[57]] & ru[11]), bb[ru[57]] >>= ru[3], bb[ru[42]] -= ru[3])
                  } while (bb[ru[42]] > ru[25]);
                  bb[ru[25]] = -ru[2]
                } return bb[ru[25]] > -ru[2] && bb[-ru[58]].push((bb[ru[57]] | bb[ru[25]] << bb[ru[42]]) & ru[11]), ju(bb[-ru[58]])
          }

          function ab(...bb) {
            return bb[ru[12]] = ru[2], typeof Xu[bb[ru[1]]] === ru[17] ? Xu[bb[ru[1]]] = Sb(pu[bb[ru[1]]]) : Xu[bb[ru[1]]]
          }

          function wb(...bb) {
            function ub(...bb) {
              return bb[ru[12]] = ru[2], bb[ru[1]][ru[2]] * ru[60] + (bb[ru[1]][ru[1]] < ru[1] ? ru[59] | bb[ru[1]][ru[1]] : bb[ru[1]][ru[1]])
            }

            function hb(...bb) {
              switch (bb[ru[12]] = ru[2], ((bb[ru[1]] & ru[59]) !== ru[1]) * ru[2] + (bb[ru[1]] < ru[1]) * ru[34]) {
                case ru[1]:
                  return [bb[ru[1]] % ru[59], Math.trunc(bb[ru[1]] / ru[60])];
                case ru[2]:
                  return [bb[ru[1]] % ru[59] - ru[59], Math.trunc(bb[ru[1]] / ru[60]) + ru[2]];
                case ru[34]:
                  return [((bb[ru[1]] + ru[59]) % ru[59] + ru[59]) % ru[59], Math.round(bb[ru[1]] / ru[60])];
                case ru[4]:
                  return [bb[ru[1]] % ru[59], Math.trunc(bb[ru[1]] / ru[60])]
              }
            }
            bb[ru[12]] = ru[1], Du(bb[ru[36]] = ub([ru[34], 4]), bb[ru[0]] = ub([ru[2], ru[34]]), bb[ru[34]] = bb[ru[36]] + bb[ru[0]], bb[ru[10]] = bb[ru[34]] - bb[ru[0]], bb[ru[38]] = bb[ru[10]] * ru[34], bb[ru[42]] = bb[ru[38]] / ru[34], console.log(hb(bb[ru[34]])), console.log(hb(bb[ru[10]])), console.log(hb(bb[ru[38]])), console.log(hb(bb[ru[42]])))
          }
          ab(118) in nu && wb(), (0, Hb[ru[0]])("3 " + (hb ? (new Error)[ab(119)] : ""))
        } else wu()
      } else(0, Hb[ru[0]])("5 " + (hb ? (new Error)[ub(113)] : ""))
    }, Xb.i.subscribe("customBindingsChanged", (() => {
      zu()
    }));
    let gu = !1,
      iu = !1;
    const vu = () => gu || iu && gb.d.isInGame(),
      tu = bb => {
        vu() && bb.preventDefault()
      };
    Xb.i.subscribe("displaymodeFullscreenChange", (bb => {
      Ju()
    })), Xb.i.subscribe("pointerLockUpdate", (bb => {
      gu = bb, Ju(), eu()
    })), Xb.i.subscribe("freeCursorUpdate", (bb => {
      iu = bb, Ju(), eu()
    }));
    const Ju = () => {
        window.removeEventListener("wheel", tu), ib.i && !(0, Ub.m)() && (gu || iu) && window.addEventListener("wheel", tu, {
          passive: !1
        })
      },
      eu = () => {
        window.removeEventListener("wheel", Nu), (gu || iu) && window.addEventListener("wheel", Nu, {
          passive: !1
        })
      },
      Nu = bb => {
        !0 === bb.ctrlKey && vu() && bb.preventDefault()
      };

    function su(bb) {
      Xb.i.vp("QTEMouseState", {
        isDown: bb
      })
    }

    function Mu(bb) {
      var ub, hb, Ob, Gb, Ub, Lb, Yb, Sb;
      const Hb = (0, Db.g)();
      Hb.rbb = null !== (ub = function(bb, ub) {
        var hb, Bb;
        if (!Yu) return null;
        const Ob = bb.bloxd;
        Ou ??= Ob.getMetaInfo("Board").rootId;
        const Gb = null !== (hb = null === ub || void 0 === ub ? void 0 : ub.vR) && void 0 !== hb ? hb : null;
        if (!Gb || Ob.getMetaInfo(Gb).rootId !== Ou) return null;
        const Ub = null !== (Bb = null === ub || void 0 === ub ? void 0 : ub.position) && void 0 !== Bb ? Bb : null;
        if (Ob.playerCanChangePos(bb.bM, Ub[0], Ub[1], Ub[2])) return null;
        const Lb = (bb, ub, hb) => {
          const Bb = Ob.blockDataOwner.getBlockData(bb, ub, hb),
            Gb = null === Bb || void 0 === Bb ? void 0 : Bb.persisted.shared.text.split("\n")[0].toLowerCase().trim();
          return vb.singleLineBoardActions.has(Gb)
        };
        if (Lb(Ub[0], Ub[1], Ub[2])) return null;
        let Yb;
        bb.Ibb && (Yb = [...bb.Ibb], bb.kF(Yb, Yb));
        const Sb = (Yb ? bb.camera.sV : 0) + Ob.getBlockReach(bb.bM);
        return bb.pickBlock(Yb, bb.Pbb, Sb, ((ub, hb, Bb, Gb) => 0 !== ub && ("Board" !== Ob.getMetaInfo(ub).rootName || Ob.playerCanChangePos(bb.bM, hb, Bb, Gb) || Lb(hb, Bb, Gb))))
      }(Hb, Hb.rbb)) && void 0 !== ub ? ub : Hb.rbb;
      const Zb = null !== (hb = null === (Ob = Hb.rbb) || void 0 === Ob ? void 0 : Ob.position) && void 0 !== hb ? hb : null,
        pb = null !== (Gb = Hb.Pbb) && void 0 !== Gb ? Gb : Hb.camera.Zk(),
        ob = Db.i.localPlayerPickActionHelper.getPickEntityResult(pb),
        Ab = null !== (Ub = Hb.rbb) && void 0 !== Ub && Ub.vR ? (0, sb.g)(Hb.rbb.vR) : "Air",
        lb = bb === wb.e.UpFirePrimary || bb === wb.e.UpFireSecondary,
        Kb = lb ? "onPlayerClickUp" : "onPlayerClick",
        Wb = lb ? bb === wb.e.UpFireSecondary : bb === wb.e.DownFireSecondary,
        Cb = !lb && (0, Bb.getWasDoubleClick)();
      Xb.i.vp("mouseState", {
        ra: bb,
        isDown: !lb
      }), (0, Bb.sendColyMessage)(ab.kh, {
        ra: bb,
        ja: Cb,
        IY: Zb,
        PY: ob
      }, !0), (0, Db.e)().client.triggerGameCallback(Kb, Hb.bM, Wb, null !== (Lb = null === Zb || void 0 === Zb ? void 0 : Zb[0]) && void 0 !== Lb ? Lb : null, null !== (Yb = null === Zb || void 0 === Zb ? void 0 : Zb[1]) && void 0 !== Yb ? Yb : null, null !== (Sb = null === Zb || void 0 === Zb ? void 0 : Zb[2]) && void 0 !== Sb ? Sb : null, Ab, ob)
    }
    window.addEventListener("keydown", (bb => {
      ["ArrowUp", "ArrowDown"].includes(bb.key) && bb.preventDefault()
    })), document.addEventListener("keydown", (bb => {
      (0, eb.c)(bb, (() => {
        const bb = (0, Db.g)();
        return (0, Jb.J)(bb) || !1 !== bb.OW.canCustomiseChar
      }))
    }))
  },
  38715: (bb, ub, hb) => {
    hb.d(ub, {
      d: () => Gb,
      g: () => Ub
    });
    var Bb = hb(38064);
    let Ob = !1;

    function Gb() {
      return Ob
    }

    function Ub(bb) {
      Ob = bb, bb ? Bb.g.setMultiplierType("emoteWheel", 0) : Bb.g.removeMultiplier("emoteWheel")
    }
  },
  38719: (bb, ub, hb) => {
    function Bb(bb) {
      return Boolean(bb.OW.useInventory && bb.OW.useFullInventory && bb.pW.gub(bb.bM))
    }
    hb.d(ub, {
      d: () => Bb
    })
  },
  38591: (bb, ub, hb) => {
    hb.d(ub, {
      e: () => Gb,
      h: () => Ob
    });
    var Bb = hb(36772);

    function Ob(bb, ub) {
      return {
        replayedClipName: bb,
        replayedClipAgeSeconds: ub
      }
    }

    function Gb(bb, ub, hb, Ob, Gb) {
      const Ub = function(bb) {
          if ("object" !== typeof bb || null === bb) return null;
          const {
            replayedClipName: ub,
            replayedClipAgeSeconds: hb
          } = bb;
          return "string" === typeof ub && "number" === typeof hb ? {
            ab: ub,
            Hb: hb
          } : null
        }(hb),
        Lb = null === Ub ? hb : null,
        {
          ab: Yb = null,
          Hb: Sb = 0
        } = null !== Ub && void 0 !== Ub ? Ub : {};
      bb.animateEntity(ub, Bb.f.Custom, Lb, Ob, Gb, Yb, Sb)
    }
  },
  38623: (bb, ub, hb) => {
    hb.d(ub, {
      b: () => Xb,
      f: () => ab,
      j: () => Zb,
      n: () => wb,
      r: () => pb,
      s: () => Hb
    });
    var Bb = hb(38632),
      Ob = hb(36871),
      Gb = hb(3463),
      Ub = hb(1819),
      Lb = hb(16),
      Yb = hb(2560);
    const Sb = new Bb.d;

    function ab() {
      return Sb
    }

    function Hb() {
      Sb.clear()
    }

    function wb() {
      for (const bb of Sb.ids()) {
        const ub = Sb.getName(bb);
        void 0 !== ub && Ub.d.delete(ub)
      }
      Hb(), Lb.i.vp("playerRosterChanged", Sb.ids())
    }

    function Zb(bb, ub) {
      var hb, Bb;
      if (Sb.has(bb)) return Sb.getSetting(bb, ub);
      const Ob = (0, Yb.g)();
      return null === (hb = Ob.Qs[Ob.bM]) || void 0 === hb || null === (Bb = hb[bb]) || void 0 === Bb ? void 0 : Bb[ub]
    }

    function Xb(bb) {
      const {
        added: ub,
        removed: hb,
        settingChanges: Bb
      } = Sb.apply(bb);
      for (const {
          playerId: Ob,
          name: Gb
        }
        of hb) void 0 === Gb || ob(Ob) || Ub.d.delete(Gb);
      for (const {
          playerId: Gb,
          settings: Ub
        }
        of Bb)
        if (ob(Gb)) pb(Gb, Ub);
        else
          for (const bb in Ub)(0, Ob.j)(Gb, bb, Ub[bb]);
      (ub.length > 0 || hb.length > 0) && Lb.i.vp("playerRosterChanged", Sb.ids())
    }

    function pb(bb) {
      let ub = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Sb.getSettings(bb);
      if (ub) {
        (0, Ob.d)(bb);
        for (const hb in ub)(0, Ob.c)(bb, hb, ub[hb])
      }
    }

    function ob(bb) {
      return bb === (0, Yb.g)().Mbb || (0, Yb.e)().client.hasEntity(bb)
    }(0, Gb.onGameReset)(Hb)
  },
  37696: (bb, ub, hb) => {
    hb.d(ub, {
      e: () => Db,
      g: () => db,
      j: () => jb,
      l: () => nb,
      o: () => xb
    });
    var Bb = hb(36720),
      Ob = hb(37699),
      Gb = hb(324),
      Ub = hb.n(Gb),
      Lb = hb(3174);
    const Yb = new Bb.YX,
      Sb = new Bb.YX,
      ab = new Bb.YX,
      Hb = new Bb.YX,
      wb = new Bb.YX,
      Zb = [0, 0, 0],
      Xb = {
        x: 0,
        y: 0
      },
      pb = new Bb.YX(1, 0, 0),
      ob = new Bb.YX(0, 1, 0),
      Ab = Bb.Matrix.Identity(),
      lb = new Bb.Matrix,
      Kb = new Bb.Matrix,
      Wb = new Bb.YX,
      Cb = new Ob.e(0, 0, 0, 0);

    function db(bb, ub) {
      var hb, Ob;
      const Gb = rb(bb, ub);
      if (Gb) {
        const bb = Gb.x,
          ub = Gb.y,
          hb = bb - 50,
          Bb = ub - 50;
        return Math.abs(hb) <= Lb.e && Math.abs(Bb) <= (0, Lb.o)() ? {
          x: bb,
          y: ub
        } : gb(hb, Bb)
      }
      ab.M_(ub[0], ub[1], ub[2]),
        function(bb) {
          const ub = bb.xX.Ihb(),
            hb = ub ? Bb.Matrix.FromArrayToRef(ub.worldMatrix, 0, Kb) : bb.xX.ZN().activeCamera.getWorldMatrix();
          Bb.YX.TransformNormalToRef(pb, hb, Hb), Hb.normalize(), Bb.YX.TransformNormalToRef(ob, hb, wb), wb.normalize()
        }(bb);
      const Ub = Bb.YX.Dot(ab, Hb);
      let Yb = -Bb.YX.Dot(ab, wb);
      Math.abs(Ub) < .001 && Math.abs(Yb) < .001 && (Yb = -1);
      const Sb = null !== (hb = null === (Ob = bb.xX.Ihb()) || void 0 === Ob ? void 0 : Ob.projectionMatrix) && void 0 !== hb ? hb : bb.xX.ZN().activeCamera.getProjectionMatrix().m;
      return gb(Ub * Sb[0], Yb * Sb[5])
    }

    function rb(bb, ub) {
      const hb = bb.xX.ZN(),
        Ob = hb.UX(),
        Gb = Ob.getRenderWidth(),
        Ub = Ob.getRenderHeight();
      Cb.width = Gb, Cb.height = Ub;
      const Lb = bb.xX.Ihb(),
        ab = Lb ? Wb.M_(Lb.eye[0], Lb.eye[1], Lb.eye[2]) : bb.xX.camera.globalPosition;
      Yb.M_(ab.x + 10 * ub[0], ab.y + 10 * ub[1], ab.z + 10 * ub[2]);
      const Hb = Lb ? Bb.Matrix.FromArrayToRef(Lb.viewProjectionMatrix, 0, lb) : hb.getTransformMatrix();
      return Bb.YX.ProjectToRef(Yb, Ab, Hb, Cb, Sb), Sb.z < 0 || Sb.z > 1 ? null : (Xb.x = Sb.x / Gb * 100, Xb.y = Sb.y / Ub * 100, Xb)
    }

    function jb(bb, ub) {
      return db(bb, zb(bb, ub))
    }

    function nb(bb, ub) {
      const hb = rb(bb, zb(bb, ub));
      return hb && {
        x: hb.x,
        y: hb.y
      }
    }

    function Db(bb) {
      var ub, hb;
      return 1 / (null !== (ub = null === (hb = bb.xX.Ihb()) || void 0 === hb ? void 0 : hb.projectionMatrix[0]) && void 0 !== ub ? ub : bb.xX.ZN().activeCamera.getProjectionMatrix().m[0])
    }

    function xb(bb, ub, hb) {
      const Bb = bb.xX.Ihb(),
        Ob = Bb ? Bb.worldMatrix : bb.xX.ZN().activeCamera.getWorldMatrix().m,
        Gb = bb.Ow;
      for (let Ub = 0; Ub < 3; Ub++) ub[Ub] = Ob[12 + Ub] + Gb[Ub], hb[Ub] = Ob[8 + Ub];
      Ub().normalize(hb, hb)
    }

    function zb(bb, ub) {
      const hb = bb.Ow,
        Bb = bb.xX.Ihb(),
        Ob = Bb ? Wb.M_(Bb.eye[0], Bb.eye[1], Bb.eye[2]) : bb.xX.camera.globalPosition;
      return Zb[0] = ub[0] - hb[0] - Ob.x, Zb[1] = ub[1] - hb[1] - Ob.y, Zb[2] = ub[2] - hb[2] - Ob.z, Ub().normalize(Zb, Zb), Zb
    }

    function gb(bb, ub) {
      return (0, Lb.i)(bb, ub, Lb.e, (0, Lb.o)())
    }
  },
  38672: (bb, ub, hb) => {
    hb.d(ub, {
      e: () => Lb
    });
    var Bb = hb(16),
      Ob = hb(1184),
      Gb = hb(3256);
    const Ub = "Reconnecting";
    class Lb {
      constructor(bb) {
        this.hooks = bb, this.graceMs = 0, this.sessionBased = !1, this.controller = void 0, this.frozen = !1, this.stopped = !1, this.listening = !1, this.ended = !1, this.retryNow = () => {
          "visible" === document.visibilityState && this.controller.retryNow()
        }, this.onPageHide = bb => {
          bb.persisted || this.leave()
        }, this.controller = new Gb.d((ub => bb.reconnect(ub)), {
          isSessionLive: () => !this.ended && bb.isLive(),
          onPhaseChanged: bb => {
            this.onPhaseChanged(bb)
          },
          onReconnected: ub => {
            bb.onReconnected(ub)
          },
          onGaveUp: ub => {
            !this.ended && bb.isLive() && bb.onGaveUp(this.sessionBased, ub)
          }
        })
      }
      onInitialInfo(bb, ub) {
        this.graceMs = bb, this.sessionBased = ub
      }
      canHoldSeat() {
        return this.graceMs > 0 && !this.ended
      }
      isResuming() {
        return "connected" !== this.controller.phase
      }
      onConnectionLost(bb) {
        this.ended || this.controller.onConnectionLost(bb, this.graceMs)
      }
      onResuming() {
        this.ended || this.controller.onResuming()
      }
      onResumed() {
        this.controller.stop()
      }
      leave() {
        const bb = this.isResuming() && !this.controller.awaitingResumeOnRoom,
          ub = this.controller.heldToken;
        this.end(), bb && "" !== ub && this.hooks.releaseSeat(ub)
      }
      end() {
        this.ended = !0, this.controller.stop()
      }
      onPhaseChanged(bb) {
        const ub = "frozen" === bb || "resuming" === bb;
        ub !== this.stopped && (this.stopped = ub, this.hooks.freeze(ub));
        const hb = "frozen" === bb || "resuming" === bb && this.frozen;
        hb && !this.frozen ? (0, Ob.l)(Ub) : !hb && this.frozen && (0, Ob.j)(Ub), this.frozen = hb, this.setListening("connected" !== bb), Bb.i.vp(Gb.k, hb ? "frozen" : bb)
      }
      setListening(bb) {
        bb !== this.listening && (this.listening = bb, bb ? (window.addEventListener("online", this.retryNow), document.addEventListener("visibilitychange", this.retryNow), window.addEventListener("pagehide", this.onPageHide)) : (window.removeEventListener("online", this.retryNow), document.removeEventListener("visibilitychange", this.retryNow), window.removeEventListener("pagehide", this.onPageHide)))
      }
    }
  },
  38679: (bb, ub, hb) => {
    hb.d(ub, {
      d: () => Bb
    });
    class Bb {
      constructor(bb) {
        let ub = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Date.now;
        this.onSilent = bb, this.now = ub, this.lastHeardAt = void 0, this.resumedAt = void 0, this.lastCheckAt = void 0, this.wasVisible = "visible" === document.visibilityState, this.interval = void 0, this.check = () => {
          const bb = this.now(),
            ub = bb - this.lastCheckAt <= 2e3;
          this.lastCheckAt = bb;
          const hb = "visible" === document.visibilityState;
          !hb || ub && this.wasVisible || (this.resumedAt = bb), this.wasVisible = hb, hb && bb - this.lastHeardAt > 12e3 && bb - this.resumedAt > 2e3 && this.onSilent()
        }, this.lastHeardAt = ub(), this.resumedAt = this.lastHeardAt, this.lastCheckAt = this.lastHeardAt, this.interval = setInterval(this.check, 1e3), document.addEventListener("visibilitychange", this.check), window.addEventListener("online", this.check)
      }
      heard() {
        this.lastHeardAt = this.now()
      }
      dispose() {
        clearInterval(this.interval), document.removeEventListener("visibilitychange", this.check), window.removeEventListener("online", this.check)
      }
    }
  },
  38645: (bb, ub, hb) => {
    hb.d(ub, {
      e: () => wb
    });
    var Bb = hb(191),
      Ob = hb(324),
      Gb = hb.n(Ob),
      Ub = hb(36386),
      Lb = hb(36393),
      Yb = hb(2560);
    const Sb = Bb.e.Tl * Bb.e.playerEyeToHeightRatio,
      ab = 250,
      Hb = 1.1,
      wb = new class {
        constructor() {
          this.entities = new Map, this.playing = new Map, this.msSinceLastScan = 0
        }
        add(bb, ub) {
          this.entities.set(bb, ub)
        }
        update(bb, ub) {
          const hb = this.entities.get(bb);
          this.entities.set(bb, ub);
          const Bb = this.playing.get(bb);
          Bb && (hb && hb.soundName === ub.soundName ? (Bb.sound.setRelativeVolume(ub.volume), Bb.sound.rate(ub.rate), Bb.sound.setPannerAttr({
            refDistance: ub.refDistance
          })) : this.stopEntity(bb))
        }
        remove(bb) {
          this.stopEntity(bb), this.entities.delete(bb)
        }
        gH(bb) {
          this.msSinceLastScan += bb, this.msSinceLastScan < ab || (this.msSinceLastScan = 0, this.scan())
        }
        stopEntity(bb) {
          const ub = this.playing.get(bb);
          ub && (ub.sound.stop(), this.playing.delete(bb))
        }
        startEntity(bb, ub, hb) {
          const Bb = (0, Lb.i)(ub.soundName);
          if (!Bb) return console.error(`AudioEntityManager: no sound found for "${ub.soundName}", dropping audio entity ${bb}`), void this.remove(bb);
          const Ob = Ub.e.play(Bb, ub.volume, hb, ub.maxHearDist, ub.refDistance, !0);
          Ob.rate(ub.rate), this.playing.set(bb, {
            sound: Ob,
            lastPos: Gb().clone(hb)
          })
        }
        scan() {
          const bb = (0, Yb.g)();
          if (!bb) return;
          const ub = bb.pW.iK(bb.bM);
          if (ub)
            for (const [hb, Bb] of this.entities) {
              if (!bb.pW.Nbb(hb, "position")) continue;
              const Ob = bb.pW.iK(hb),
                Ub = Gb().sqrDist(ub, Ob),
                Lb = this.playing.get(hb);
              if (Lb) {
                const bb = Bb.maxHearDist * Hb;
                Ub > bb * bb ? this.stopEntity(hb) : Gb().equals(Ob, Lb.lastPos) || (Lb.sound.setPosition([Ob[0], Ob[1] + Sb, Ob[2]]), Gb().copy(Lb.lastPos, Ob))
              } else Ub <= Bb.maxHearDist * Bb.maxHearDist && this.startEntity(hb, Bb, Ob)
            }
        }
      }
  },
  38692: (bb, ub, hb) => {
    hb.d(ub, {
      d: () => Sb,
      h: () => ab
    });
    var Bb = hb(1611),
      Ob = hb(191),
      Gb = hb(1593),
      Ub = hb(1667),
      Lb = hb(1103),
      Yb = hb(1038);
    async function Sb(bb, ub) {
      return function(bb) {
        return "object" === typeof bb && null !== bb && bb.code === Ob.d.VpnIp.code
      }(ub) && function(bb) {
        return Gb.e.supports("appCheck") && bb.isLoggedIn() && !bb.hasTriedAppAttestation()
      }(bb) && await async function(bb) {
        try {
          const {
            token: ub
          } = await (0, Ub.d)(), {
            "3PSIDMCPP": hb
          } = await (0, Yb.postJsonWithMetricsCookiesAndJsonResponse)(`${Lb.clientSideServerUrls.indexUrl}/index/app-attestation`, {
            appCheckToken: ub
          }, {
            retries: 0
          }, bb.getMetricsCookies());
          return bb.setAppAttestedAuthJwt(hb), !0
        } catch (ub) {
          return ub instanceof Bb.b && "failed" === ub.code ? (console.warn("The app couldn't get an App Check token:", ub), bb.markAppAttestationTried()) : console.error("Failed to attest the app:", ub), !1
        }
      }(bb)
    }
    async function ab(bb, ub) {
      try {
        return await ub()
      } catch (hb) {
        if (!await Sb(bb, hb)) throw hb
      }
      return ub()
    }
  },
  38688: (bb, ub, hb) => {
    hb.d(ub, {
      b: () => wb,
      f: () => ab
    });
    var Bb = hb(191),
      Ob = hb(1709),
      Gb = hb(1713),
      Ub = hb(8626);
    const Lb = [250, 500, 1e3, 2e3, 1250],
      Yb = 406;

    function Sb(bb) {
      if ("object" !== typeof bb || null === bb) return !1;
      const {
        code: ub,
        message: hb
      } = bb, Ob = Bb.d.duplicateLobbyNameError;
      return (ub === Ob.code || ub === Yb) && (hb === Ob.text || hb === Ob.text + Bb.i)
    }
    async function ab(bb, ub) {
      let hb = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Ob.b;
      for (let Ob = 0;; Ob++) {
        let Ub;
        (0, Gb.r)(ub);
        try {
          return await bb()
        } catch (Bb) {
          if (Ub = Lb[Ob], void 0 === Ub || !Sb(Bb)) throw Bb
        }
        await hb(Ub, ub)
      }
    }
    const Hb = new Set([Bb.d.duplicateLobbyNameError.code, Bb.d.lobbyCantBeCreated.code, Bb.d.roomDisposedEarlyError.code, Bb.d.roomDisposedLateError.code, Bb.d.serverRoomLimitReached.code]);

    function wb(bb) {
      if (Sb(bb)) return !0;
      const ub = (0, Ub.e)(bb);
      return "number" === typeof ub && Hb.has(ub)
    }
  },
  38607: (bb, ub, hb) => {
    hb.d(ub, {
      b: () => Gb,
      e: () => Ob
    });
    var Bb = hb(16);

    function Ob(bb) {
      return "refetchCode" === bb || "devDownloadJson" === bb || bb.startsWith("Plugin")
    }

    function Gb(bb, ub) {
      "refetchCode" !== bb ? "Plugin|MobAiPlugin|ShowPetUi" !== bb ? Promise.all([hb.e(106), hb.e(107), hb.e(102), hb.e(104), hb.e(211)]).then((() => hb(41199))).then((hb => {
        let {
          runClientGameMessage: Bb
        } = hb;
        Bb(bb, ub)
      })).catch((ub => {
        console.error(`Game message ${bb} failed`, ub)
      })) : Bb.i.vp("showPetUi", ub) : Bb.i.vp("refetchCode")
    }
  },
  8626: (bb, ub, hb) => {
    hb.d(ub, {
      d: () => Gb,
      e: () => Ub,
      h: () => Lb,
      k: () => Sb,
      n: () => Yb
    });
    var Bb = hb(191),
      Ob = hb(4393);

    function Gb(bb) {
      return Ub(bb) === Bb.d.gameOrPluginOnPlayerAuthRejected.code
    }

    function Ub(bb) {
      return "object" === typeof bb && null !== bb ? bb.code : void 0
    }

    function Lb(bb) {
      var ub;
      return null !== (ub = Object.keys(Ob.c).find((ub => Ob.c[ub] === bb))) && void 0 !== ub ? ub : null
    }

    function Yb(bb) {
      return "notWhitelisted" === bb ? "customLobby:cantJoinNotWhitelistedTitle" : "customLobby:cantJoinWorld"
    }
    const Sb = {
      private: "customLobby:cantJoinPrivate",
      notWhitelisted: "customLobby:cantJoinNotWhitelisted",
      banned: "customLobby:cantJoinBanned",
      adminLocked: "customLobby:cantJoinAdminLocked"
    }
  },
  38699: (bb, ub, hb) => {
    hb.d(ub, {
      b: () => Bb,
      c: () => Ob
    });
    const Bb = 45e3;
    class Ob extends Error {
      constructor() {
        super("The game server didn't answer in time"), this.name = "SeatRequestTimedOut"
      }
    }
  },
  38598: (bb, ub, hb) => {
    hb.d(ub, {
      c: () => ab
    });
    var Bb = hb(1124),
      Ob = hb(1227),
      Gb = hb(13),
      Ub = hb(1206),
      Lb = hb(1218),
      Yb = hb(1415),
      Sb = hb(36083);

    function ab(bb) {
      let {
        Ob: ub,
        Gb: hb
      } = bb;
      const ab = null !== ub && void 0 !== ub ? ub : (0, Lb.b)().gameNameWithVariation;
      (0, Bb.W)(ab) && ((0, Sb.k)(), (0, Ub.fb)((() => {
        console.log("Received matchmaking order from game server to game", ub), (0, Gb.h)("inGameReplay"), (0, Yb.navigatePreserveSearch)((0, Ob.e)(ab, null !== hb && void 0 !== hb ? hb : void 0))
      }), "video_start"))
    }
  },
  38588: (bb, ub, hb) => {
    hb.d(ub, {
      c: () => Yb,
      f: () => Ub,
      g: () => Lb,
      i: () => Sb
    });
    var Bb = hb(16),
      Ob = hb(1249);
    const Gb = new Map;

    function Ub(bb, ub) {
      Bb.i.vp("newUiRequest", {
        id: bb,
        clientParameters: ub
      }, !0)
    }

    function Lb(bb) {
      Bb.i.vp("removeUiRequest", bb, !0);
      const ub = Gb.get(bb);
      ub && (ub.tearDownNotification(), Gb.delete(bb))
    }

    function Yb() {
      Bb.i.vp("clearUiRequests");
      for (const bb of Gb.values()) bb.tearDownNotification();
      Gb.clear()
    }

    function Sb(bb, ub, hb) {
      const Bb = Ob.NotificationProvider.showPromptPopup({
        title: ub,
        confirmText: "general:yes",
        cancelText: "general:no",
        unlockPointerKey: "uiRequestPopup"
      });
      Gb.set(bb, Bb), Bb.getResult().then((ub => {
        Gb.delete(bb), "notificationTornDown" !== ub && hb(ub)
      }))
    }
  },
  38615: (bb, ub, hb) => {
    hb.d(ub, {
      d: () => Lb,
      e: () => Yb,
      i: () => Sb
    });
    var Bb = hb(1124),
      Ob = hb(934),
      Gb = hb(36504),
      Ub = hb(16);

    function Lb(bb) {
      let {
        lobbyName: ub,
        gameNameWithVariation: hb
      } = bb;
      return !(0, Bb.X)(ub) || null !== hb && (hb.startsWith("testGym") || (0, Ob.i)(hb))
    }

    function Yb(bb) {
      return bb.vu === Gb.b.Leave || bb.vu === Gb.b.Cursor
    }

    function Sb(bb) {
      Ub.i.vp("codeCollab", {
        type: bb.vu,
        docKey: bb.tu,
        version: bb.Ju,
        editorCount: bb.eu,
        peers: bb.Nu,
        updates: bb.Mu,
        playerId: bb.mu,
        playerName: bb.Iu,
        colour: bb.Pu,
        anchor: bb.qu,
        head: bb.Eu,
        existingCursors: bb.yu,
        files: bb.Vu,
        engineSettings: bb.Fu
      })
    }
  },
  38632: (bb, ub, hb) => {
    hb.d(ub, {
      d: () => Bb
    });
    class Bb {
      constructor() {
        this.members = new Map
      }
      apply(bb) {
        const ub = {
          added: [],
          removed: [],
          settingChanges: []
        };
        for (const Bb of bb.Zh) {
          let bb = this.members.get(Bb.Xh);
          if (bb || (bb = {
              name: null,
              settings: {}
            }, this.members.set(Bb.Xh, bb), ub.added.push(Bb.Xh)), null !== Bb.ph && (bb.name = Bb.ph), null !== Bb.oh || Bb.Ah.length > 0) {
            const hb = null === Bb.oh ? {} : JSON.parse(Bb.oh);
            Object.assign(bb.settings, hb);
            for (const ub of Bb.Ah) delete bb.settings[ub], hb[ub] = void 0;
            ub.settingChanges.push({
              playerId: Bb.Xh,
              settings: hb
            })
          }
        }
        for (const Bb of bb.Kh) {
          const bb = this.members.get(Bb);
          var hb;
          if (bb) this.members.delete(Bb), ub.removed.push({
            playerId: Bb,
            name: null !== (hb = bb.name) && void 0 !== hb ? hb : void 0
          })
        }
        return ub
      }
      has(bb) {
        return this.members.has(bb)
      }
      ids() {
        return [...this.members.keys()]
      }
      getName(bb) {
        var ub, hb;
        return null !== (ub = null === (hb = this.members.get(bb)) || void 0 === hb ? void 0 : hb.name) && void 0 !== ub ? ub : void 0
      }
      getSettings(bb) {
        var ub;
        return null === (ub = this.members.get(bb)) || void 0 === ub ? void 0 : ub.settings
      }
      getSetting(bb, ub) {
        var hb;
        return null === (hb = this.members.get(bb)) || void 0 === hb ? void 0 : hb.settings[ub]
      }
      clear() {
        this.members.clear()
      }
    }
  },
  38666: (bb, ub, hb) => {
    hb.d(ub, {
      e: () => Bb,
      h: () => Ob
    });
    const Bb = ["description", "label"];

    function Ob(bb) {
      const ub = bb.type;
      return {
        type: ub,
        params: bb[ub]
      }
    }
  }
};
Object.freeze(modules);
for (const bb in modules) Object.freeze(modules[bb]);