export const id = 155;
export const ids = [155];
export const modules = {
  38648: (bb, cb, sb) => {
    sb.d(cb, {
      b: () => ab,
      d: () => Tb
    });
    var kb = sb(26);
    let Wb = !1;

    function ab() {
      return Wb
    }

    function Tb(bb) {
      Wb !== bb && (Wb = bb, kb.j.QQ("replayViewer|videoExportChanged"))
    }
  },
  38543: (bb, cb, sb) => {
    sb.d(cb, {
      b: () => ab
    });
    var kb = sb(26),
      Wb = sb(1895);

    function ab(bb) {
      let {
        taskId: cb,
        progress: sb
      } = bb;
      const kb = Wb.e.get("_tasks");
      null !== kb && void 0 !== kb && kb[cb] && Wb.e.apply({
        _tasks: {
          ...kb,
          [cb]: {
            ...kb[cb],
            progress: sb
          }
        }
      })
    }
    kb.j.subscribe("clientTaskProgress", (bb => {
      ab(bb)
    }))
  },
  38672: (bb, cb, sb) => {
    sb.d(cb, {
      b: () => lb,
      f: () => Qb,
      j: () => mb
    });
    var kb = sb(2680);
    const Wb = 0,
      ab = 2,
      Tb = 3,
      Ub = 4;
    class Ib {
      constructor(bb, cb) {
        this.width = bb, this.GM = cb, this.data = void 0, this.next = 0, this.size = 0, this.data = new Float64Array(bb * cb)
      }
      push(bb) {
        let cb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        const sb = this.data.subarray(this.next * this.width, (this.next + 1) * this.width);
        for (let kb = 0; kb < this.width; kb++) sb[kb] = bb[cb + kb];
        return this.next = (this.next + 1) % this.GM, this.size = Math.min(this.size + 1, this.GM), sb
      }
      lines() {
        const bb = [],
          cb = (this.next - this.size + this.GM) % this.GM;
        for (let sb = 0; sb < this.size; sb++) {
          const kb = (cb + sb) % this.GM * this.width;
          bb.push(Array.from(this.data.subarray(kb, kb + this.width)).join(","))
        }
        return bb
      }
    }

    function Hb(bb) {
      return Number.isFinite(bb) ? String(Math.round(10 * bb) / 10) : String(bb)
    }

    function fb(bb) {
      return Number.isFinite(bb) ? bb.toFixed(1) : String(bb)
    }
    class Mb {
      constructor() {
        this.frames = 0, this.looked = 0, this.idle = 0, this.yE = 0, this.pastLimit = 0, this.lockSkips = 0, this.tQ = 0, this.lost = 0, this.dropped = 0, this.longFrames = 0, this.dtMin = 1 / 0, this.dtMax = 0, this.dtSum = 0, this.raw = [0, 0], this.turned = [0, 0], this.peakRate = 0, this.events = 0, this.eventMax = 0, this.bigEvents = 0, this.outliers = 0, this.eventLines = 0, this.suppressed = 0
      }
    }
    class Xb {
      constructor() {
        var bb = this;
        this.tally = new Mb, this.records = new Ib(10, 3600), this.events = new Ib(4, 12e3), this.event = new Float64Array(4), this.take = null, this.client = "js", this.started = !1, this.record = function(cb) {
          let sb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
          const [kb, Ib, Mb, Xb, nb, mb, lb, Qb, eb, Cb] = bb.records.push(cb, sb), Nb = bb.tally;
          switch (Nb.frames++, lb) {
            case Wb:
              return void Nb.idle++;
            case Ub:
              return void Nb.tQ++;
            case Tb:
              return Nb.lockSkips++, void(0 === Mb && 0 === Xb || bb.outlier(`lock skip dropped raw (${Hb(Mb)}, ${Hb(Xb)}) at ${fb(kb)} ms`))
          }
          Nb.looked++, Number.isFinite(Ib) && (Nb.dtMin = Math.min(Nb.dtMin, Ib), Nb.dtMax = Math.max(Nb.dtMax, Ib), Nb.dtSum += Ib, Ib > 0 && (Nb.peakRate = Math.max(Nb.peakRate, Math.hypot(nb, mb) / Ib))), Nb.raw[0] += Mb, Nb.raw[1] += Xb, Nb.turned[0] += nb, Nb.turned[1] += mb;
          const Vb = Math.abs(Mb) > Cb || Math.abs(Xb) > Cb,
            Lb = `raw (${Hb(Mb)}, ${Hb(Xb)}) over ${fb(Ib)} ms, limit ${Hb(Cb)}, filter v (${Qb.toFixed(3)}, ${eb.toFixed(3)}) px/ms, at ${fb(kb)} ms`;
          lb === ab ? (Nb.yE++, bb.outlier(`spike put right: ${Lb} -> turned (${Hb(nb)}, ${Hb(mb)})`)) : Vb ? (Nb.pastLimit++, bb.outlier(`kept past limit: ${Lb}`)) : Ib > 50 && (Nb.longFrames++, bb.outlier(`long frame: ${Lb}, turned in full`))
        }, this.onMouseMove = bb => {
          const cb = this.tally,
            {
              movementX: sb,
              movementY: kb
            } = bb;
          cb.events++;
          const Wb = Math.max(Math.abs(sb), Math.abs(kb));
          cb.eventMax = Math.max(cb.eventMax, Wb);
          const ab = null !== document.pointerLockElement,
            Tb = this.event;
          Tb[0] = bb.timeStamp, Tb[1] = sb, Tb[2] = kb, Tb[3] = ab ? 1 : 0, this.events.push(Tb), Wb >= 200 && (cb.bigEvents++, this.eventOutlier(`big mousemove (${sb}, ${kb}) at ${fb(bb.timeStamp)} ms, lock ${ab?"qU":"free"}`))
        }, this.onLockChange = () => {
          const bb = document.pointerLockElement;
          (0, kb.m)("look", `pointer lock ${bb?`gained (${bb.tagName.toLowerCase()})`:"lost"} at ${fb(performance.now())} ms`)
        }, this.onLockError = () => {
          (0, kb.m)("look", `pointer lock request failed at ${fb(performance.now())} ms`)
        }, this.onVisibility = () => {
          (0, kb.m)("look", `page ${document.visibilityState} at ${fb(performance.now())} ms`)
        }, this.flush = () => {
          this.takeRecords();
          const bb = this.tally;
          if (this.tally = new Mb, 0 === bb.events && 0 === bb.raw[0] && 0 === bb.raw[1] && 0 === bb.lockSkips && 0 === bb.yE && 0 === bb.dropped) return;
          const cb = bb.looked > 0 ? bb.dtSum / bb.looked : NaN,
            sb = [`${bb.frames} frames (${bb.looked} looked, ${bb.idle} idle${"wasm"===this.client?`, ${bb.tQ} carried`:""})`, `dt avg ${fb(cb)} min ${fb(bb.dtMin)} max ${fb(bb.dtMax)}, ${bb.longFrames} long`, `${bb.events} mousemoves (max ${Hb(bb.eventMax)} px, ${bb.bigEvents} big)`, `raw (${Hb(bb.raw[0])}, ${Hb(bb.raw[1])}) turned (${Hb(bb.turned[0])}, ${Hb(bb.turned[1])})`, `peak ${bb.peakRate.toFixed(2)} px/ms`, `put right ${bb.yE}, past limit ${bb.pastLimit}, lock skips ${bb.lockSkips}`, "lock " + (document.pointerLockElement ? "qU" : "free")];
          bb.dropped > 0 && sb.push(`${bb.dropped} doubled spike copies dropped`), bb.lost > 0 && sb.push(`${bb.lost} records lost`), bb.suppressed > 0 && sb.push(`${bb.suppressed} outlier lines not shown`), (0, kb.m)("look", `1s: ${sb.join("; ")}`)
        }, this.dump = () => [`look records (${this.client}): nowMs,dtMs,rawX,rawY,turnedX,turnedY,outcome,vX,vY,limit`, ...this.records.lines(), "mousemove events: timeStamp,movementX,movementY,locked", ...this.events.lines()].join("\n")
      }
      start(bb, cb) {
        this.client = bb, this.take = cb;
        const {
          screen: sb
        } = window;
        (0, kb.m)("look", `start: ${bb} client, dpr ${window.devicePixelRatio}, screen ${sb.width}x${sb.height}, pointer lock ${document.pointerLockElement?"qU":"free"}`), this.started || (this.started = !0, window.addEventListener("mousemove", this.onMouseMove, {
          capture: !0,
          passive: !0
        }), document.addEventListener("pointerlockchange", this.onLockChange), document.addEventListener("pointerlockerror", this.onLockError), document.addEventListener("visibilitychange", this.onVisibility), setInterval(this.flush, 1e3), (0, kb.k)("look", this.dump))
      }
      outlier(bb) {
        const cb = this.tally;
        cb.outliers >= 20 ? cb.suppressed++ : (cb.outliers++, (0, kb.m)("look", bb))
      }
      eventOutlier(bb) {
        const cb = this.tally;
        cb.eventLines >= 10 ? cb.suppressed++ : (cb.eventLines++, (0, kb.m)("look", bb))
      }
      takeRecords() {
        var bb;
        const cb = null === (bb = this.take) || void 0 === bb ? void 0 : bb.call(this);
        if (cb && cb.length >= 2) {
          this.tally.lost += cb[0], this.tally.dropped += cb[1];
          for (let bb = 2; bb + 10 <= cb.length; bb += 10) this.record(cb, bb)
        }
      }
      droppedCopy() {
        this.tally.dropped++
      }
      endTake() {
        this.takeRecords(), this.take = null
      }
    }
    let nb = null;

    function mb(bb) {
      let cb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
      return nb ??= new Xb, nb.start(bb, cb), nb.record
    }

    function lb() {
      var bb;
      null === (bb = nb) || void 0 === bb || bb.endTake()
    }

    function Qb() {
      var bb;
      null === (bb = nb) || void 0 === bb || bb.droppedCopy()
    }
  },
  38540: (bb, cb, sb) => {
    sb.d(cb, {
      b: () => Ac,
      c: () => qc,
      f: () => dc
    });
    var kb = sb(3470),
      Wb = sb(195),
      ab = sb(223),
      Tb = sb(635),
      Ub = sb(37),
      Ib = sb(2612),
      Hb = sb(3565),
      fb = sb(3543),
      Mb = sb(1235);
    const Xb = new WeakMap;
    class nb {
      constructor(bb, cb) {
        let sb = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {
          fHb: !0
        };
        this.callbacks = cb, this.options = sb, this.Rcb = void 0, this.sessionId = void 0, this.zV = [], this.MHb = !1, this.Em = !1, this.XHb = void 0, this.KV = 0, this.xkb = 0, this.nHb = (bb, cb) => {
          if (this.Em) return;
          const sb = Number(bb);
          this.MHb ? this.mHb(sb, cb) : this.zV.push({
            id: sb,
            payload: cb
          })
        }, this.dispose = () => {
          this.Em || (this.Em = !0, Xb.delete(this), this.zV.length = 0, this.XHb())
        }, this.Rcb = bb, this.sessionId = bb.sessionId, Xb.set(this, []), this.XHb = this.lHb()
      }
      QHb(bb) {
        this.XHb(), this.Rcb = bb, this.sessionId = bb.sessionId, this.KV = 0, this.xkb = 0, this.XHb = this.lHb()
      }
      get yV() {
        return this.xkb
      }
      lHb() {
        const bb = this.Rcb.mN("*", this.nHb);
        return this.options.fHb && this.Rcb.hN(this.dispose), bb
      }
      mHb(bb, cb) {
        try {
          (0, Hb.mc)(bb) && (cb = (0, Hb.c)(bb, fb.Dm.from(cb)));
          const sb = Xb.get(this)[bb];
          if ("function" !== typeof sb) {
            if (this.callbacks.eHb) return void this.callbacks.eHb(bb, cb);
            throw new Error(`No onMessage handler registered for message id ${bb}`)
          }
          sb(cb)
        } catch (sb) {
          this.callbacks.CHb(`Error in onMessage ${bb} with payload ${JSON.stringify(cb)}`, sb)
        } finally {
          this.KV++
        }
      }
      NHb() {
        for (const {
            id: bb,
            payload: cb
          }
          of this.zV) {
          if (this.Em) break;
          this.mHb(bb, cb)
        }
        this.zV.length = 0
      }
      Scb() {
        return this.Em
      }
      VHb() {
        if (this.MHb || this.Em) throw new Error("Trying to getOnMessageRegistrationHandler after registration finished");
        return {
          mN: (bb, cb) => {
            if (this.MHb || this.Em) throw new Error("Trying to call onMessage after registration finished");
            this.mN(bb, cb)
          },
          finishRegistration: () => {
            if (this.Em) throw new Error("Cannot finish message registration after disposal");
            this.MHb = !0, this.NHb()
          }
        }
      }
      mN(bb, cb) {
        var sb, kb;
        null === (sb = (kb = this.callbacks).LHb) || void 0 === sb || sb.call(kb);
        const Wb = Xb.get(this);
        for (; bb > Wb.length;) Wb[Wb.length] = null;
        Wb[bb] = cb
      }
      send(bb, cb) {
        this.uHb(), (0, Mb.x)(cb) ? this.Rcb.RV(bb, cb) : this.Rcb.send(bb, cb)
      }
      uHb() {
        var bb, cb;
        (this.xkb++, 5 === mb++) && (null === (bb = (cb = this.callbacks).LHb) || void 0 === bb || bb.call(cb), mb = 0)
      }
      mC() {
        this.dispose(), this.Rcb.mC()
      }
      leave() {
        this.dispose(), this.Rcb.leave()
      }
    }
    let mb = 0;
    var lb = sb(3492);
    class Qb extends nb {
      constructor(bb) {
        super(bb, {
          LHb: () => {
            (0, Ub.m)(!0) && (0, kb.tV)()
          },
          CHb: (bb, cb) => {
            var sb;
            null === (sb = (0, Ib.e)()) || void 0 === sb || sb.zl(bb, cb)
          }
        }, {
          fHb: !1
        }), (0, lb.f)(bb)
      }
      qV(bb, cb) {
        return !!(0, lb.j)((0, lb.c)(), this.Rcb, bb, cb) && (this.uHb(), !0)
      }
      QHb(bb) {
        this.YHb(), super.QHb(bb), (0, lb.f)(bb)
      }
      mC() {
        super.mC(), this.YHb()
      }
      YHb() {
        this.Rcb.lC.Vm.TY = void 0
      }
    }
    var eb = sb(26),
      Cb = sb(1895),
      Nb = sb(1704),
      Vb = sb(36112);

    function Lb(bb, cb, sb, kb, Wb) {
      let ab = arguments.length > 5 && void 0 !== arguments[5] && arguments[5];
      if (!bb.zN.Abb(bb.yJ)) return console.log("Got resync inven but don't have inven component"), void cb.acknowledge(kb);
      ab && console.error("Had to sync inven"), cb.o3(kb, Wb) && sb.QQ("chestToggleFromServer", !1, !0), sb.QQ("syncedInvenFromServer")
    }
    var ub = sb(38543),
      Yb = sb(38545),
      hb = sb(37633),
      Jb = sb(37403),
      gb = sb(628),
      Bb = sb(38014);

    function tb(bb, cb, sb) {
      const kb = function(bb) {
          const cb = new Int32Array(bb.length * Bb.h);
          return bb.forEach(((bb, sb) => {
            const kb = sb * Bb.h;
            if (4 === bb.length) {
              const [sb, Wb, ab, Tb] = bb;
              cb.set([sb, Wb, ab, sb, Wb, ab, Tb], kb)
            } else {
              const [sb, Wb, ab, Tb, Ub, Ib, Hb] = bb;
              cb.set([sb, ab, Ub, Wb, Tb, Ib, Hb], kb)
            }
          })), cb
        }(sb),
        Wb = (cb, sb, kb, Wb) => {
          bb.setBlockNoMulti(cb, sb, kb, Wb, !0)
        };
      bb.client.gameRecorder.isCapturing() ? (0, Bb.mb)(kb, (0, Bb.lb)(kb), Wb) : bb.eX.fX.WE(kb, {
        XE: Wb,
        isHookId: cb => bb.blockChangeHasHooks(cb),
        watched: () => function(bb, cb, sb) {
          const kb = [],
            Wb = (bb, cb, sb) => {
              kb.push(bb, cb, sb)
            },
            ab = new Set;
          for (let Tb = 0; Tb < sb.length; Tb += Bb.h)
            for (let cb = (0, gb.U)(sb[Tb]); cb <= (0, gb.U)(sb[Tb + 3]); cb++)
              for (let kb = (0, gb.U)(sb[Tb + 1]); kb <= (0, gb.U)(sb[Tb + 4]); kb++)
                for (let Ub = (0, gb.U)(sb[Tb + 2]); Ub <= (0, gb.U)(sb[Tb + 5]); Ub++) {
                  const sb = `${cb}|${kb}|${Ub}`;
                  ab.has(sb) || (ab.add(sb), bb.blockDataOwner.forEachDataCell(cb, kb, Ub, Wb))
                }
          return cb.forEachCell(Wb), Int32Array.from(kb)
        }(bb, cb, kb)
      }), bb.eX.q_()
    }
    var yb = sb(36712),
      Pb = sb(38550),
      Db = sb(38553),
      Eb = sb(1008),
      ib = sb(1902);
    var Ob = sb(4241);

    function Gb(bb) {
      const cb = bb.fX;
      let sb = 0,
        Wb = -1,
        Tb = -1 / 0,
        Ub = null,
        Ib = !0;
      const fb = () => {
        if (++sb % 10 !== 0) return;
        const fb = (0, kb.getLastReceivedPacketId)();
        if (fb <= Wb) return;
        const [Mb, Xb, nb] = bb.zN.aN(bb.yJ), mb = ! function(bb) {
          var cb;
          let sb = null === (cb = bb.zN.gcb(bb.yJ)) || void 0 === cb ? void 0 : cb.hm;
          if (void 0 === sb) return !1;
          const kb = new Set;
          for (; void 0 !== sb && !kb.has(sb);) {
            var Wb;
            kb.add(sb);
            const cb = bb.zN.getState(sb, "smoothToServerPos"),
              ab = Array.isArray(cb) ? null : null === cb || void 0 === cb ? void 0 : cb.serverPosition;
            if (ab) {
              const cb = bb.zN.aN(sb);
              if (Math.abs(cb[0] - ab[0]) > 10 || Math.abs(cb[1] - ab[1]) > 10 || Math.abs(cb[2] - ab[2]) > 10) return !0
            }
            sb = null === (Wb = bb.zN.gcb(sb)) || void 0 === Wb ? void 0 : Wb.hm
          }
          return !1
        }(bb) && function(bb, cb, sb, kb) {
          const Wb = ab.e.qm;
          for (let ab = 0; ab < bb.length; ab++) {
            const Tb = bb[ab];
            if (!(0, Ob.h)(cb, sb, kb, Tb[0] * Wb, Tb[1] * Wb, Tb[2] * Wb)) return !1
          }
          return !0
        }(cb.lQ.im, Mb, Xb, nb), lb = null === Ub || Math.abs(Mb - Ub[0]) > 8 || Math.abs(Xb - Ub[1]) > 8 || Math.abs(nb - Ub[2]) > 8, Qb = !Ib || lb || performance.now() - Tb >= 1e4;
        Ib = mb, mb && Qb && (Wb = fb, Tb = performance.now(), Ub = [Mb, Xb, nb], (0, kb.sendColyMessage)(Hb.Kg, {
          yH: fb
        }))
      };
      return bb.on("aX", fb), () => {
        bb.off("aX", fb)
      }
    }
    var Kb = sb(36365),
      Zb = sb(356),
      zb = sb.n(Zb),
      qb = sb(6134),
      db = sb(37669),
      Ab = sb(37377),
      wb = sb(37360),
      rb = sb(4257),
      ob = sb(37706),
      Sb = sb(37507),
      Rb = sb(36952),
      vb = sb(37250),
      Fb = sb(38558),
      xb = sb(36356),
      jb = sb(36359),
      pb = sb(38560),
      bc = sb(38569),
      cc = sb(3438),
      sc = sb(1495),
      kc = sb(2610),
      Wc = sb(2697),
      ac = sb(37874),
      Tc = sb(36636),
      Uc = sb(4493),
      Ic = sb(38604),
      Hc = sb(37691),
      fc = sb(4003),
      Mc = sb(36705),
      Xc = sb(36793),
      nc = sb(37711),
      mc = sb(38571),
      lc = sb(38587),
      Qc = sb(36946);
    class ec {
      constructor(bb, cb, sb, kb) {
        this.gameNameWithVariation = bb, this.eX = sb, this.connectionResume = kb, this.stateReplicationHandler = void 0, this.stopChunkReports = () => {}, this.replayResume = null, this.stateReplicationHandler = new lc.c(cb, this.eX)
      }
      setupStateReplicationHandlers() {
        this.stateReplicationHandler.setup(), (0, kb.onGameResetOnce)((() => {
          this.stateReplicationHandler.dispose()
        }))
      }
      QHb(bb) {
        this.stateReplicationHandler.dispose(), this.stateReplicationHandler = new lc.c(bb, this.eX), this.stateReplicationHandler.setup()
      }
      clearBlockRules() {
        const bb = this.eX.fX;
        bb.Ocb = new Set, bb.Zcb = new Set, bb.Gcb = new Set, bb.zcb = new Set, bb.Kcb = [], bb.qcb = [], bb.eD = new Set, bb.WT = [], bb.ND = []
      }
      clearUiRequestsAndQTEs() {
        Uc.c.reset(), (0, Yb.e)()
      }
      startChunkReports() {
        const bb = function(bb) {
            let cb = null,
              sb = -1 / 0,
              Wb = null;
            const ab = () => {
                Wb = null;
                const ab = Math.ceil(bb.lL[0]),
                  Tb = Math.ceil(bb.lL[1]);
                cb && cb[0] === ab && cb[1] === Tb || (cb = [ab, Tb], sb = performance.now(), (0, kb.sendColyMessage)(Hb.Gg, {
                  JT: ab,
                  gT: Tb
                }))
              },
              Tb = () => {
                null === Wb && (Wb = setTimeout(ab, Math.max(0, sb + 250 - performance.now())))
              };
            return ab(), bb.on("addRemoveDistanceChanged", Tb), () => {
              bb.off("addRemoveDistanceChanged", Tb), null !== Wb && (clearTimeout(Wb), Wb = null)
            }
          }(this.eX.fX),
          cb = Gb(this.eX);
        this.stopChunkReports = () => {
          bb(), cb()
        }
      }
      restartChunkStreaming() {
        (0, vb.k)(this.eX, (0, Ib.d)().recentChunkEdits.chunksEditedSince(this.connectionResume.getDroppedAt() - Fb.c)), this.startChunkReports()
      }
      setupOnMessageListeners(bb, cb) {
        const sb = this.eX,
          Wb = this.gameNameWithVariation;
        bb.mN(Hb.Cc, (bb => {
          let {
            uk: cb,
            Yk: kb,
            hk: Wb,
            Jk: ab,
            gk: Tb,
            Bk: Ub,
            tk: Ib,
            yk: Hb,
            Pk: fb
          } = bb;
          if (!sb.zN.j_(cb, "itemState")) return void(0, Ab.k)(sb, cb, [Tb, Ub, Ib], kb, {
            amount: Wb,
            attributes: JSON.parse(ab),
            yk: Hb,
            size: fb
          });
          const Mb = sb.zN.getState(cb, "itemState");
          Mb.amount = Wb, Mb.yk = Hb, Mb.creationTime = Date.now(), (0, wb.setServerPosition)(sb.zN.getState(cb, "smoothToServerPos"), Tb, Ub, Ib)
        })), bb.mN(Hb.fb, (bb => {
          (0, yb.c)(sb).setCantPickUp(bb, !0), sb.zN.j_(bb, "itemState") && (sb.zN.getState(bb, "itemState").yk = !0)
        })), bb.mN(Hb.he, (bb => {
          (0, yb.c)(sb).setCantPickUp(bb, !1), sb.zN.j_(bb, "itemState") && (sb.zN.getState(bb, "itemState").yk = !1)
        })), bb.mN(Hb.ad, (bb => {
          Cb.e.applyNewClientOptions(bb)
        })), bb.mN(Hb.ed, (bb => {
          let {
            eId: cb,
            settings: kb
          } = bb;
          (0, Xc.f)(cb);
          for (const sb in kb)(0, Xc.c)(cb, sb, kb[sb]);
          if ("canSee" in kb && sb.zN.j_(cb, "hidingMeshManager")) {
            const bb = sb.zN.getState(cb, "hidingMeshManager");
            bb.canSee = (0, nc.c)("canSee", kb.canSee), bb._forceUpdate = !0
          }
        })), bb.mN(Hb.qf, (bb => {
          let {
            Ys: cb,
            hs: Wb,
            gs: ab,
            Bs: Tb
          } = bb;
          const Ub = [Wb, ab, Tb];
          sb.zN.setPosition(sb.yJ, Ub), (0, kb.sendColyMessage)(Hb.kh, {
            yf: cb,
            Pf: rb.f
          }), eb.j.QQ("localPlayerTeleported", {
            pos: Ub,
            isCorrection: !1
          })
        })), bb.mN(Hb.md, (bb => {
          let {
            OW: cb,
            GW: sb,
            KW: kb,
            ZW: Wb
          } = bb;
          this.stateReplicationHandler.setUpIfQueued(cb);
          const ab = [sb, kb, Wb];
          eb.j.QQ(`otherPlayerTeleported|${cb}`, {
            pos: ab
          })
        })), bb.mN(Hb.Hd, (bb => {
          let {
            Wa: cb,
            aa: Wb,
            Ta: ab,
            Ua: Tb,
            Ia: Ub,
            Ha: Ib,
            fa: fb,
            Xa: Mb,
            Ma: Xb,
            la: nb
          } = bb;
          const mb = [Wb, ab, Tb];
          sb.zN.setPosition(sb.yJ, mb);
          const lb = sb.zN.Cbb(sb.yJ),
            Qb = sb.zN.ZD(sb.yJ);
          zb().set(Qb.Fy, 0, 0, 0), zb().set(Qb.jy, 0, 0, 0), zb().set(Qb.BQ, Ub, Ib, fb), Qb.RP(), lb._flying = null !== nb, nb ? (lb.flyAccel.Qa = nb.Qa, lb.flyAccel.ea = nb.ea) : lb.flyAccel.reset(), Mb && lb.movementType === qb.r.GLIDING && (lb.na = Mb.na, zb().copy(lb.ma, Mb.ma)), (0, kb.sendColyMessage)(Hb.kh, {
            yf: cb,
            Pf: rb.f
          }), eb.j.QQ("localPlayerTeleported", {
            pos: mb,
            isCorrection: !0
          })
        }));

        function ab() {
          return sb.zN.wbb(sb.yJ)
        }
        bb.mN(Hb.pb, (bb => {
          let {
            chatMsgId: cb,
            content: sb,
            chatterEId: kb
          } = bb;
          eb.j.QQ("chat", {
            serverChatMsgId: cb,
            content: sb,
            chatterEId: kb
          }, !0)
        })), bb.mN(Hb.ud, (bb => {
          kc.c.onReceiveColyseusPing(bb)
        })), bb.mN(Hb.Oe, (bb => {
          let {
            key: cb,
            value: sb
          } = bb;
          (0, Nb.setCookie)(Wb, cb, sb)
        })), bb.mN(Hb.Te, (bb => {
          eb.j.QQ("setDiscordReportKey", bb)
        })), (0, kb.onGameResetOnce)((() => {
          this.stopChunkReports()
        })), bb.mN(Hb.qc, (cb => {
          const {
            Fc: Wb,
            xc: ab
          } = cb;
          if ((0, kb.setAdjustment)(ab), this.connectionResume.onInitialInfo(cb.jc, cb.Ws), kb.offlineInputReplay.GV(cb.Ts), this.connectionResume.isResuming()) {
            console.log("Resumed the connection as eId", Wb);
            try {
              null === cb.Us && (0, Ib.d)().client.inventoryPrediction.dropPending(), this.stopChunkReports(), this.clearBlockRules(), Cb.e.apply({
                shopInfo: null,
                _shopVersion: ib.b
              });
              const kb = sb.zN.rbb(sb.yJ);
              kb.bk && (kb.chestClosed(), eb.j.QQ("chestToggleFromServer", !1, !0)), this.clearUiRequestsAndQTEs(), eb.j.QQ("initInfoReceived", bb)
            } finally {
              const bb = null === cb.Us ? null : {
                sync: null,
                endSeq: null
              };
              this.replayResume = bb, this.connectionResume.onResumeInitialInfo(cb.Us, (() => {
                bb.endSeq = (0, Ib.d)().client.inventoryPrediction.lastActionSeq
              })), null === bb && this.restartChunkStreaming()
            }
          } else console.log("Local client is eId", Wb), eb.j.QQ("loadingScreenState", "loadingPage:loadingWorld"), sb.sbb = Wb, sb.zN.j_(sb.yJ, sb.zN.names.entityName) && sb.zN.mJ(sb.yJ, sb.zN.names.entityName), (0, Ib.d)().setEntityName(sb.sbb, (0, Ib.d)().getRawEntityName(sb.yJ)), sb.gJ[sb.sbb] = {}, sb.zN.MJ(sb.yJ, sb.zN.names.entityName), eb.j.QQ("initInfoReceived", bb), this.startChunkReports(), Tb.client.onServerConnectionFinalised()
        })), bb.mN(Hb.we, (() => {
          this.connectionResume.isResuming() ? this.connectionResume.onResumed((() => {
            const bb = this.replayResume;
            if (this.replayResume = null, !bb) return;
            this.restartChunkStreaming();
            const {
              inventoryPrediction: cb
            } = (0, Ib.d)().client, {
              sync: Wb
            } = bb, ab = new Set(kb.offlineInputReplay.takeDroppedActions());
            if (Wb) {
              var Tb;
              const kb = null !== (Tb = bb.endSeq) && void 0 !== Tb ? Tb : cb.lastActionSeq;
              cb.forget((bb => bb > Wb.Tk && bb <= kb || ab.has(bb))), Lb(sb, cb, eb.j, Wb.Tk, Wb.load)
            } else cb.dropPending(), cb.askForSnapshot()
          })) : console.warn("ResumeComplete arrived without a resume")
        })), bb.mN(Hb.tf, (bb => {
          eb.j.QQ("TopRightHelper", bb, !0)
        })), bb.mN(Hb.Nd, (bb => {
          let {
            type: cb,
            location1: sb,
            location2: kb,
            location3: Wb,
            score: ab
          } = bb;
          (0, Wc.p)({
            type: cb,
            location1: sb,
            location2: kb,
            location3: Wb,
            score: ab
          })
        })), bb.mN(Hb.ue, (bb => {
          let {
            type: cb,
            resourceType: sb,
            amount: kb,
            category: Wb,
            itemName: ab
          } = bb;
          (0, Wc.s)({
            type: cb,
            resourceType: sb,
            amount: kb,
            category: Wb,
            itemName: ab
          })
        })), bb.mN(Hb.O, (bb => {
          sb.fX.Ocb.add(bb), sb.fX.Zcb.delete(bb)
        })), bb.mN(Hb.Z, (bb => {
          sb.fX.Zcb.add(bb), sb.fX.Ocb.delete(bb)
        })), bb.mN(Hb.ke, (bb => {
          sb.fX.Zcb.delete(bb), sb.fX.Ocb.delete(bb)
        })), bb.mN(Hb.V, (bb => {
          sb.fX.Gcb.add(bb), sb.fX.zcb.delete(bb)
        })), bb.mN(Hb.cb, (bb => {
          sb.fX.zcb.add(bb), sb.fX.Gcb.delete(bb)
        })), bb.mN(Hb.me, (bb => {
          sb.fX.zcb.delete(bb), sb.fX.Gcb.delete(bb)
        })), bb.mN(Hb.S, (bb => {
          (0, Mb.ab)(bb, sb.fX.qcb), (0, Mb.ab)(bb, sb.fX.Kcb), sb.fX.Kcb.push(bb)
        })), bb.mN(Hb.ab, (bb => {
          (0, Mb.ab)(bb, sb.fX.Kcb), (0, Mb.ab)(bb, sb.fX.qcb), sb.fX.qcb.push(bb)
        })), bb.mN(Hb.le, (bb => {
          (0, Mb.ab)(bb, sb.fX.Kcb), (0, Mb.ab)(bb, sb.fX.qcb)
        })), bb.mN(Hb.Kf, (bb => {
          let {
            Qk: cb,
            Ck: kb
          } = bb;
          kb ? sb.fX.eD.delete(cb) : sb.fX.eD.add(cb)
        })), bb.mN(Hb.Hf, (bb => {
          let {
            WT: cb,
            aT: kb
          } = bb;
          Tb.updateWalkThroughRect(sb.yJ, cb, kb)
        })), (0, kb.onGameResetOnce)((() => {
          this.clearBlockRules()
        })), bb.mN(Hb.nf, (bb => {
          (0, ub.b)(bb)
        })), bb.mN(Hb.gc, (bb => {
          hb.b.applyServerUpdate(bb)
        })), bb.mN(Hb.jb, (bb => {
          Tb.applyServerBlocks((() => {
            ! function(bb, cb) {
              for (const {
                  TT: sb,
                  UT: kb
                }
                of cb) {
                const cb = Jb.d[kb];
                if (cb) {
                  const {
                    compX: kb,
                    compY: Wb,
                    compZ: ab,
                    mainMultiblock: Tb
                  } = cb;
                  bb.Tu(sb[0] - kb, sb[1] - Wb, sb[2] - ab, Tb)
                }
              }
              for (const {
                  TT: sb,
                  UT: kb,
                  IT: Wb
                }
                of cb) bb.setBlockNoMulti(sb[0], sb[1], sb[2], kb, !0), bb.blockDataOwner.setBlockData(sb[0], sb[1], sb[2], null === Wb ? void 0 : JSON.parse(Wb)), bb.blockAdded(sb[0], sb[1], sb[2], kb)
            }(Tb, bb)
          })), eb.j.QQ("changeBlockFail", bb), Tb.client.triggerGameCallback("onChangeBlockFail", bb), eb.j.QQ("EditBoard", {
            pos: null
          }), eb.j.QQ("EditCodeBlock", {
            pos: null,
            canChangePos: null
          })
        })), bb.mN(Hb.rd, (bb => {
          let {
            pickUpItems: cb,
            pickUpAckSeq: sb
          } = bb;
          for (const {
              name: kb,
              amount: Wb,
              attributes: Tb
            }
            of cb) ab().pickUpItem({
            name: kb,
            amount: Wb,
            typeObj: Ab.x[kb],
            attributes: Tb
          });
          (0, Ib.d)().client.inventoryPrediction.serverChangeApplied(sb)
        })), bb.mN(Hb.We, (bb => {
          let {
            index: cb,
            name: kb,
            amount: Wb,
            attributes: ab,
            setSlotAckSeq: Tb
          } = bb;
          const Ub = sb.zN.rbb(sb.yJ);
          (cb < Ub.playerInventory.numSlots || Ub.bk || Ub.inCreative) && Ub.setItemSlot(cb, kb, Wb, ab), (0, Ib.d)().client.inventoryPrediction.serverChangeApplied(Tb)
        })), bb.mN(Hb.kf, (bb => {
          let {
            Fs: cb,
            ak: kb,
            Tk: Wb
          } = bb;
          const {
            inventoryPrediction: ab
          } = (0, Ib.d)().client, Tb = () => {
            sb.zN.rbb(sb.yJ).loadFromString(cb)
          };
          this.replayResume && (this.replayResume.sync = {
            Tk: Wb,
            load: Tb
          }), Lb(sb, ab, eb.j, Wb, Tb, kb)
        })), bb.mN(Hb.yc, (bb => {
          (0, Ib.d)().client.inventoryPrediction.acknowledge(bb)
        })), bb.mN(Hb.A, (bb => {
          let {
            ya: cb,
            Pa: sb,
            Da: kb,
            Ea: Wb
          } = bb;
          (0, Ib.d)().client.itemDropPrediction.onActionItemDrops(cb, sb, kb, Wb)
        })), bb.mN(Hb.yb, (bb => {
          ab().clearInventory(), (0, Ib.d)().client.inventoryPrediction.serverChangeApplied(bb)
        })), bb.mN(Hb.Nc, (bb => {
          let {
            leaveEventType: cb,
            category: sb,
            subCategory: kb,
            value: Wb
          } = bb;
          (0, Wc.E)({
            leaveEventType: cb,
            category: sb,
            subCategory: kb,
            value: Wb
          })
        })), bb.mN(Hb.Hb, (bb => {
          let {
            cat1: cb,
            cat2: sb,
            cat3: kb,
            value: Wb
          } = bb;
          (0, Wc.k)({
            cat1: cb,
            cat2: sb,
            cat3: kb,
            value: Wb
          })
        }));
        const Tb = (0, Ib.d)();
        bb.mN(Hb.Cb, (bb => {
          Tb.applyServerBlocks((() => {
            tb(Tb, hb.b, bb)
          }))
        })), bb.mN(Hb.Ye, (bb => {
          eb.j.QQ("setSelectedInventorySlotI", bb, !0)
        })), bb.mN(Hb.Mc, (bb => {
          let {
            category: cb,
            timeframe: sb,
            data: kb
          } = bb;
          eb.j.QQ("leaderboardResponse", {
            category: cb,
            timeframe: sb,
            data: kb
          })
        })), bb.mN(Hb.K, (bb => {
          let {
            ha: cb,
            Ja: sb
          } = bb;
          this.stateReplicationHandler.setUpIfQueued(cb), cb = (0, Kb.d)(cb), (0, Ib.d)().client.gameRecorder.recordBulletShot(cb, sb), eb.j.QQ(`bulletShot|${cb}`, {
            bulletDirections: sb
          })
        })), bb.mN(Hb.jc, (bb => {
          let {
            Vk: cb,
            Lk: sb
          } = bb;
          eb.j.QQ("damagedByOtherPlayer", {
            Vk: cb,
            direction: sb
          }, !0)
        })), bb.mN(Hb.Dd, (bb => {
          eb.j.QQ("playerKilled", bb, !0), (0, Ib.d)().client.gameRecorder.recordPlayerKilled(bb.deadEId, bb.killerEId, bb.withItem, bb.killstreak)
        })), bb.mN(Hb.Kb, (bb => {
          eb.j.QQ("customKillfeed", bb, !0), (0, Ib.d)().client.gameRecorder.recordCustomKillfeed(bb.killer, bb.victim, bb.withItem)
        })), bb.mN(Hb.Qd, (bb => {
          let {
            Vs: cb,
            Ls: kb
          } = bb;
          this.stateReplicationHandler.setUpIfQueued(cb);
          const Wb = sb.zN.Xcb(cb);
          null !== Wb && void 0 !== Wb && Wb.isGun() && Wb.reload(Date.now(), kb)
        })), bb.mN(Hb.if, (() => {
          eb.j.QQ("showShopTutorial", null, !0)
        })), bb.mN(Hb.Jd, (bb => {
          eb.j.QQ("progressBarUpdate", bb, !0)
        })), bb.mN(Hb.uc, (bb => {
          eb.j.QQ("middleScreenBarInitiate", {
            duration: bb.Dk,
            Ek: bb.Ek,
            horizBarRemOffset: bb.ik
          }, !0)
        })), bb.mN(Hb.$d, (() => {
          eb.j.QQ("middleScreenBarRemove", !0)
        })), bb.mN(Hb.Ce, (bb => {
          let {
            Cs: cb,
            Ns: kb
          } = bb;
          const Wb = kb ? (0, Hc.e)(sb, kb) : void 0;
          eb.j.QQ("sendHitmarker", {
            Cs: cb,
            screenPos: Wb
          }, !0)
        })), bb.mN(Hb.Se, (bb => {
          let {
            id: cb,
            position: sb,
            style: kb,
            La: Wb,
            Ya: ab
          } = bb;
          eb.j.QQ("setDirectionArrow", {
            id: cb,
            position: sb,
            style: kb,
            text: (0, Hb.u)(Wb),
            Ya: ab
          }, !0)
        })), bb.mN(Hb.vb, (bb => {
          let {
            id: cb
          } = bb;
          eb.j.QQ("clearDirectionArrow", {
            id: cb
          }, !0)
        })), bb.mN(Hb.B, (bb => {
          let {
            ia: cb,
            Oa: kb,
            animationScript: Wb,
            Ga: ab,
            Ka: Tb,
            Za: Ub,
            za: Hb
          } = bb;
          cb = (0, Kb.d)(cb);
          const fb = null === Wb && null !== Ub ? (0, Pb.e)(Ub, Hb) : Wb;
          (0, Ib.d)().client.gameRecorder.recordAnimateEntity(cb, kb, fb, ab, Tb), (0, yb.c)(sb).animations.animateEntity(cb, kb, Wb, ab, Tb, Ub, Hb), null !== Wb || cb === sb.yJ && kb === Mc.f.Emote && (0, Ib.d)().client.cameraController.endTemporaryThirdPerson()
        })), bb.mN(Hb.Af, (bb => {
          let {
            Mk: cb,
            Xk: sb
          } = bb;
          if (Tb.iG(cb[0], cb[1], cb[2])) {
            const bb = (0, Ib.d)().rC(cb[0], cb[1], cb[2]);
            (0, Ib.d)().updateMailboxContents(cb[0], cb[1], cb[2], bb, sb)
          }
        })), bb.mN(Hb.sb, (bb => {
          let {
            HT: cb,
            fT: kb,
            MT: Wb,
            XT: ab,
            nT: Tb,
            mT: Ub,
            lT: Hb,
            QT: fb
          } = bb;
          const Mb = sb.zN.rbb(sb.yJ);
          if (Ub) {
            const {
              xs: bb,
              Tk: cb
            } = fb;
            return (0, Ib.d)().client.inventoryPrediction.o3(cb, (() => {
              Mb.chestRefreshed(kb, Wb, ab, Hb, bb)
            })) && eb.j.QQ("chestToggleFromServer", !1, !0), void eb.j.QQ("chestRefreshedFromServer")
          }(cb || Mb.bk) && (cb ? (Mb.chestOpened(kb, Wb, ab, Tb, Hb), null !== Tb && (0, Ib.d)().client.ironChestPasskeyCache.onChestOpened(ab, Tb)) : Mb.chestClosed(), eb.j.QQ("chestToggleFromServer", cb, !0))
        })), bb.mN(Hb.Ob, (bb => {
          let {
            craftingRecipeItemName: cb,
            recipesForItem: kb
          } = bb;
          cb ? Tb.craftingManager.editRecipesForPlayer(sb.yJ, cb, kb) : Tb.craftingManager.resetAllPlayerRecipes(sb.yJ), eb.j.QQ("craftingRecipesEdited", {
            itemName: cb,
            recipesForItem: kb
          })
        })), bb.mN(Hb.Ze, (bb => {
          let {
            vehicleEId: cb,
            overrides: sb
          } = bb;
          (0, Ib.d)().applyRiddenVehicleSettingOverrides(cb, sb)
        })), bb.mN(Hb.Df, (bb => {
          let {
            uc: cb,
            Yc: kb,
            hc: Wb
          } = bb;
          const ab = sb.zN.Cbb(sb.yJ).physicsState.type === qb.t.SLEEPING && cb === qb.t.DEFAULT;
          (0, Ib.d)().updatePositionAndPhysics(sb.yJ, {
            type: cb,
            tier: kb
          }, !0, Wb), ab && (0, Ib.d)().updateHeldVehicleStatus()
        })), bb.mN(Hb.mb, (bb => {
          let {
            Na: cb,
            Va: kb
          } = bb;
          sb.zN.qbb(sb.yJ).setPose(cb, kb)
        })), bb.mN(Hb.ze, (bb => {
          (0, mc.d)(bb)
        })), bb.mN(Hb.zd, (bb => {
          for (const cb of bb)(0, ob.s)(cb);
          eb.j.QQ("playerCosmeticsUpdated", bb, !0)
        })), bb.mN(Hb.D, (bb => {
          for (const cb of bb)(0, Tc.i)(sb, cb)
        })), bb.mN(Hb.Sc, (bb => {
          let {
            dW: cb,
            AW: kb,
            rW: Wb,
            oW: ab,
            SW: Ub,
            RW: Ib,
            vW: Hb
          } = bb;
          this.stateReplicationHandler.setUpIfQueued(cb), cb = (0, Kb.d)(cb);
          const fb = sb.zN.acb(cb);
          if (fb && (fb.lastHurtTime = performance.now()), (0, db.playRigHurt)(sb, cb, Ib), eb.j.QQ("lifeformHurt", {
              eId: cb,
              vW: Hb
            }), kb) {
            const bb = (0, Hc.e)(sb, kb.Ns);
            eb.j.QQ("yourAttackHit", {
              Cs: ab,
              screenPos: bb,
              hitSelf: cb === sb.yJ
            })
          }
          cb === sb.yJ && (Tb.shakePlayerCamera(cb, Ub / 40, 200), eb.j.QQ("closeShopOnDamaged", null), eb.j.QQ("damagedByOtherPlayer", {
            Vk: null,
            direction: Ib,
            SW: Ub
          }, !0));
          const Mb = sb.zN.aN(cb);
          if (Mb && (Wb || ab)) {
            const bb = [Mb[0], Mb[1] + 1, Mb[2]];
            Wb && (0, Sb.j)(sb, Sb.A, bb, 15), ab && (0, Sb.j)(sb, Sb.r, bb, 10)
          }
        })), bb.mN(Hb.Oc, (bb => {
          let {
            dc: cb,
            Ac: kb,
            oc: Wb
          } = bb;
          (0, yb.c)(sb).setHealthFrac((0, Kb.d)(cb), Wb), eb.j.QQ("lifeformHealthChanged", {
            eId: (0, Kb.d)(cb),
            Ac: kb,
            oc: Wb
          })
        })), bb.mN(Hb.F, (bb => {
          let {
            ga: cb,
            Ba: kb
          } = bb;
          (0, Ib.d)().playerAttacked(sb.yJ, cb, kb)
        })), bb.mN(Hb.Ic, (bb => {
          (0, Ib.d)().client.leaveGameUnwanted({
            reason: bb,
            requiresRefresh: !1,
            canReconnect: !1,
            automaticallyReconnect: !1
          }), (0, sc.navigatePreserveSearch)("/")
        })), bb.mN(Hb.Yd, (bb => {
          let {
            Sc: cb,
            Rc: sb,
            vc: kb
          } = bb;
          ab().removeItemName(cb, sb), (0, Ib.d)().client.inventoryPrediction.serverChangeApplied(kb)
        })), bb.mN(Hb.Ke, (bb => {
          const {
            al: cb,
            Ycb: kb
          } = (0, Rb.e)([bb[0], bb[1], bb[2]]);
          Qc.b.setLookDirection(sb, cb, kb), (0, vb.t)(cb, kb);
          const Wb = sb.zN.qbb(sb.yJ);
          Wb && (Wb.heading = cb)
        })), bb.mN(Hb.Me, (bb => {
          Tb.client.cameraController.setCameraZoom(bb)
        })), bb.mN(Hb.ef, (bb => {
          let {
            Ms: cb,
            Xs: kb
          } = bb;
          Tb.shakePlayerCamera(sb.yJ, cb, kb)
        })), bb.mN(Hb.Gb, (bb => {
          (0, cc.onCosmeticPackGranted)(bb)
        })), bb.mN(Hb.Fe, (bb => {
          eb.j.QQ("serverUpdating", Date.now() + bb, !0)
        })), bb.mN(Hb._c, Db.c), bb.mN(Hb.hd, (bb => {
          let {
            id: cb,
            Db: sb
          } = bb;
          const {
            type: Wb,
            params: ab
          } = (0, Ic.g)(sb), Tb = {
            ...ab
          };
          for (const kb of Ic.d) kb in Tb && Tb[kb] && (Tb[kb] = (0, Hb.u)(Tb[kb]));
          Uc.c.queueQTE(cb, Wb, Tb).getResult().then((bb => {
            "boolean" === typeof bb && (0, kb.sendColyMessage)(Hb.ui, {
              qteId: cb,
              qteResponse: bb
            })
          }))
        })), bb.mN(Hb.de, (bb => {
          Uc.c.cancelQTE(bb)
        })), (0, kb.onGameResetOnce)((() => {
          Uc.c.reset()
        })), bb.mN(Hb.ld, (bb => {
          let {
            id: cb,
            clientParameters: sb
          } = bb;
          (0, Yb.i)(cb, sb)
        })), bb.mN(Hb.ge, (bb => {
          (0, Yb.j)(bb)
        })), bb.mN(Hb.wf, (bb => {
          let {
            text: cb,
            id: sb
          } = bb;
          (0, Yb.k)(sb, cb, (bb => {
            (0, kb.sendColyMessage)(Hb.Uj, {
              AU: sb,
              wU: bb,
              rU: 5
            })
          }))
        })), bb.mN(Hb.Sb, (bb => {
          let {
            nc: cb,
            mc: sb,
            lc: kb,
            Qc: Wb,
            Cc: ab,
            Nc: Tb
          } = bb;
          cb = (0, Kb.d)(cb), (0, Ib.d)().client.updateEffect(cb, sb, {
            displayName: kb,
            icon: Wb,
            duration: ab,
            level: Tb
          })
        })), bb.mN(Hb.Td, (bb => {
          let {
            nc: cb,
            mc: sb
          } = bb;
          cb = (0, Kb.d)(cb), (0, Ib.d)().client.removeEffect(cb, sb)
        })), bb.mN(Hb.Fc, (bb => {
          sb.zN.qbb(sb.yJ).jumpMultiplier.setMultiplierType("jumpEffectAmount", bb)
        })), bb.mN(Hb.uf, (bb => {
          eb.j.QQ("ttbEffectMultiplier", bb)
        })), (0, kb.onGameResetOnce)((() => {
          sb.zN.qbb(sb.yJ).jumpMultiplier.setMultiplierType("jumpEffectAmount", 1)
        })), bb.mN(Hb.fd, (bb => {
          (0, Sb.n)(sb, (0, Mb.q)(bb))
        })), bb.mN(Hb.gd, (bb => {
          fc.f[bb.Ca] ? (0, Sb.n)(sb, {
            ...fc.f[bb.Ca],
            pos1: bb.pos1,
            pos2: bb.pos2
          }) : console.error(`Unknown preset id: ${bb.Ca}`)
        })), bb.mN(Hb.xd, (bb => {
          var cb, sb;
          let {
            xW: kb,
            jW: Wb,
            pW: ab,
            ba: Tb
          } = bb, {
            sa: Ub,
            ka: Hb
          } = null !== Tb && void 0 !== Tb ? Tb : {};
          const {
            ca: fb
          } = null !== Tb && void 0 !== Tb ? Tb : {};
          Ub = null !== (cb = Ub) && void 0 !== cb ? cb : void 0, Hb = null !== (sb = Hb) && void 0 !== sb ? sb : void 0, "string" === typeof fb && this.stateReplicationHandler.setUpIfQueued(fb), (0, Ib.d)().client.gameRecorder.recordPlaySound(kb, Wb, ab, Tb), xb.c.play((0, jb.c)(kb), Wb, fb, Ub, Hb).rate(ab)
        })), bb.mN(Hb.Ge, (bb => {
          let {
            pos: cb,
            data: sb
          } = bb;
          Tb.blockDataOwner.setBlockData(cb[0], cb[1], cb[2], sb), Tb.blockAdded(cb[0], cb[1], cb[2], Tb.rC(cb[0], cb[1], cb[2]))
        })), bb.mN(Hb.nd, (bb => {
          let {
            info: cb
          } = bb;
          eb.j.QQ("overShopInfo", cb, !0)
        })), bb.mN(Hb._b, (bb => {
          let {
            Vc: kb,
            Lc: Wb
          } = bb;
          cb.openShop(sb.yJ, kb, Wb)
        })), bb.mN(Hb.C, (bb => {
          sb.zN.ZD(sb.yJ).applyImpulse(bb)
        })), bb.mN(Hb.bf, (bb => {
          const cb = sb.zN.ZD(sb.yJ);
          zb().set(cb.Fy, 0, 0, 0), zb().set(cb.jy, 0, 0, 0), zb().copy(cb.BQ, bb), cb.RP()
        })), bb.mN(Hb.Uc, (bb => {
          console.error(`[logErrorToConsole]: ${bb}`)
        })), bb.mN(Hb.Zb, (bb => {
          let {
            cT: cb,
            sT: sb,
            kT: kb
          } = bb;
          eb.j.QQ("flyingMiddleMessage", {
            content: (0, Hb.u)(cb),
            sT: sb,
            kT: kb
          }, !0)
        })), bb.mN(Hb.Mf, (bb => {
          const cb = bb === Eb.g ? null : {
            message: `Currently loaded as variation: ${bb}`,
            type: "Warning"
          };
          eb.j.QQ("showPermanentBottomMessage", cb, !0)
        })), bb.mN(Hb.cc, (bb => {
          let {
            messageType: cb,
            data: sb
          } = bb;
          (0, pb.c)(cb) ? (0, pb.b)(cb, sb) : ("freeCamPerms" === cb && Tb.client.freeCameraController.setPerms(sb.key, sb.value), Tb.client.triggerGameCallback("onReceivedMessageFromServer", cb, sb))
        })), bb.mN(Hb.ob, (() => {
          const bb = sb.zN.Xcb(sb.yJ);
          null !== bb && void 0 !== bb && bb.isChargeable() && bb.finishCharging(!1, Date.now())
        })), bb.mN(Hb.Xd, (bb => {
          let {
            FW: cb
          } = bb;
          Tb.craftingManager.removeRecipes(sb.yJ, cb), eb.j.QQ("craftingRecipesEdited", {
            itemName: cb,
            recipesForItem: []
          })
        })), bb.mN(Hb.Bf, (bb => {
          for (const cb in bb) {
            const sb = bb[cb];
            for (const bb in sb) Tb.client.meshCreator.handleParticleSystemUpdate(cb, bb, sb[bb])
          }
        })), (0, kb.onGameResetOnce)((() => {
          (0, ac.setFloatingYValue)(sb.zN.getState(sb.yJ, "physics"), sb.zN.iK(sb.yJ), null)
        })), bb.mN(Hb.Wb, (bb => {
          let {
            ls: cb,
            Qs: kb,
            es: Wb
          } = bb;
          const ab = (0, Kb.d)(cb);
          if (ab === sb.yJ) {
            const bb = sb.zN.iK(sb.yJ).position;
            Wb ??= Math.floor(bb[1]) - 1, (0, ac.setFloatingYValue)(sb.zN.getState(sb.yJ, "physics"), sb.zN.iK(sb.yJ), kb ? Wb : null)
          }(0, yb.c)(sb).setFloating(ab, kb, Wb);
          const Tb = sb.zN.getState(ab, "floating");
          Tb && (Tb.isFloating = kb, Tb.es = kb ? Wb : null)
        })), bb.mN(Hb.Bb, bc.h)
      }
    }
    window.addEventListener("beforeunload", (() => {}));
    var Cc = sb(38611),
      Nc = sb(38620),
      Vc = sb(667),
      Lc = sb(2984);
    class uc {
      constructor(bb, cb, sb, kb) {
        this.msgHandler = sb, this.listener = kb, this.session = void 0, this.attachedRoom = null, this.detachRoomListeners = null, this.suspended = !1, this.droppedAt = 0, this.session = new Cc.d({
          reconnect: bb,
          isLive: () => kb.isLive(),
          onReconnected: bb => {
            this.resumeOnRoom(bb)
          },
          onGaveUp: (bb, cb) => {
            kb.onGaveUp(bb, cb)
          },
          freeze: cb,
          releaseSeat: cb => {
            bb(cb).then((bb => {
              bb.leave(!0)
            }), (bb => {
              console.warn("Couldn't release the held seat of a game left while reconnecting", bb)
            }))
          }
        })
      }
      onInitialInfo(bb, cb) {
        this.session.onInitialInfo(bb, cb)
      }
      isResuming() {
        return this.session.isResuming()
      }
      getDroppedAt() {
        return this.droppedAt
      }
      onResumeInitialInfo(bb, cb) {
        if (this.session.onResuming(), null === bb) {
          try {
            (0, Ib.d)().client.itemDropPrediction.reset()
          } catch (sb) {
            console.error("Error dropping the item drop predictions on resuming", sb)
          }
          return kb.offlineInputReplay.discard(), void this.setSuspended(!1)
        }(0, Ib.d)().client.itemDropPrediction.onResumeReplayOffered(), kb.offlineInputReplay.replayFrom(bb.Hs, cb)
      }
      onResumed(bb) {
        this.setSuspended(!1), (0, kb.resendBeacons)();
        try {
          bb()
        } catch (cb) {
          console.error("Error completing the resume", cb)
        } finally {
          this.session.onResumed()
        }
      }
      attachRoom(bb) {
        const cb = (0, Vc.d)((() => bb.connection.isOpen));
        bb.hN(cb);
        const sb = new Nc.c((() => {
          this.session.canHoldSeat() && this.listener.isLive() && (console.warn("The game server went silent, reconnecting"), this.onConnectionDropped(bb, "silent"), bb.leave(!1))
        }));
        bb.onStateChange((() => {
          sb.heard()
        }));
        const kb = cb => {
          cb.persisted || bb.leave(!0)
        };
        window.addEventListener("pagehide", kb), bb.hN(((cb, sb) => {
          if (bb === this.attachedRoom && this.listener.isLive()) return (0, ab.g)(cb) && this.session.canHoldSeat() ? (console.warn(`Connection to the game server dropped with code ${cb}, reconnecting`), this.listener.onDropped(cb, sb), void this.onConnectionDropped(bb, String(cb))) : void this.listener.onRoomLeft(cb, sb)
        })), this.attachedRoom = bb, this.detachRoomListeners = () => {
          cb(), sb.dispose(), window.removeEventListener("pagehide", kb)
        }
      }
      dispose() {
        this.detachRoom(), this.session.leave(), this.setSuspended(!1)
      }
      setSuspended(bb) {
        bb !== this.suspended && (this.suspended = bb, (0, kb.setConnectionSuspended)(bb), (0, Ib.d)().client.itemDropPrediction.setSuspended(bb))
      }
      detachRoom() {
        var bb;
        null === (bb = this.detachRoomListeners) || void 0 === bb || bb.call(this), this.detachRoomListeners = null, this.attachedRoom = null
      }
      onConnectionDropped(bb, cb) {
        (0, Lc.d)("disconnect", "Left room", cb), this.isResuming() || (this.droppedAt = Date.now()), this.detachRoom(), kb.offlineInputReplay.onConnectionLost(), this.setSuspended(!0), this.session.onConnectionLost(bb.reconnectionToken)
      }
      resumeOnRoom(bb) {
        if (!this.listener.isLive()) return console.warn("Left the game while reconnecting, leaving the resumed room"), bb.leave(!0), void this.dispose();
        console.log("Reconnected to the game server, waiting for the game to resume"), (0, mc.r)(), kb.offlineInputReplay.onConnectionReplaced(), this.msgHandler.QHb(bb), this.listener.onReconnected(bb), this.attachRoom(bb)
      }
    }
    var Yc = sb(3243),
      hc = sb(3251),
      Jc = sb(1312),
      gc = sb(4408),
      Bc = sb(2904),
      tc = sb(1058),
      yc = sb(37282),
      Pc = sb(38625),
      Dc = sb(8506),
      Ec = sb(38633),
      ic = sb(1770),
      Oc = sb(38639),
      Gc = sb(1702),
      Kc = sb(2619);

    function Zc(bb) {
      var cb, sb;
      if ("object" !== typeof bb || null === bb) return {
        errType: typeof bb
      };
      const kb = bb;
      return {
        errType: null !== (cb = null === (sb = bb.constructor) || void 0 === sb ? void 0 : sb.name) && void 0 !== cb ? cb : "",
        errName: "string" === typeof kb.name ? kb.name : "",
        eventType: "string" === typeof kb.type ? kb.type : "",
        errStack: "string" === typeof kb.stack ? kb.stack.split("\n").slice(1).join(" | ") : ""
      }
    }

    function zc(bb) {
      if ("undefined" !== typeof ProgressEvent && bb instanceof ProgressEvent) return !0;
      if (!(bb instanceof Error)) return !1;
      const cb = bb.code;
      return "ServerError" === bb.name && void 0 === cb || "AbortError" === bb.name || "seat reservation expired." === bb.message || "early_leave" === bb.message
    }(0, lb.k)((bb => {
      (0, Lc.d)("wasm_net", bb)
    }));
    let qc = !0;

    function dc() {
      qc = !1
    }
    class Ac {
      constructor(bb) {
        this.gameNameWithVariation = void 0, this.lobbyName = void 0, this.colyClient = void 0, this.userContext = void 0, this.joinedAt = null, this.checkSendPath = () => {}, this.eX = void 0, this.connectionResume = void 0, this.incomingMsgInitialisor = void 0, this.gameNameWithVariation = bb.gameNameWithVariation, this.lobbyName = bb.lobbyName, this.colyClient = bb.colyClient, this.userContext = bb.userContext
      }
      async connectToServer(bb, cb, sb) {
        Cb.e.reset(), bb.gJ = {
          [bb.yJ]: {}
        }, bb.sbb = void 0, (0, mc.r)(), (0, Ib.d)().removeAllEntityNames(), (0, Ib.d)().setEntityName(bb.yJ, this.userContext.getPlayerName()), (0, Jc.o)({
          lobbyName: this.lobbyName
        }), console.log("Waiting for clientConnection passed promise to resolve");
        const Tb = (0, Gc.g)();
        console.log("joining server with game", this.gameNameWithVariation, "lobbyName", this.lobbyName);
        const Ub = performance.now(),
          Hb = (0, Ec.f)(this.userContext, (() => {
            const {
              roomName: kb,
              joinOptions: Wb
            } = (0, Vb.i)(this.userContext, this.gameNameWithVariation, this.lobbyName, cb, (bb => Bc.e.isUsingCustomGameTexturePack(bb)));
            return Wb.joinAdHold = Tb, Wb.renderBackend = (0, Kc.e)(bb.Cl), (0, Pc.d)((() => this.colyClient.joinOrCreate(kb, Wb)), sb)
          }));
        return eb.j.QQ("loadingScreenState", "loadingPage:joiningLobby"), await Hb.then((cb => {
          if (this.joinedAt = performance.now(), this.eX = bb, Tb) {
            const bb = (0, Gc.s)((() => {
              cb.send(Wb.h)
            }));
            cb.hN(bb), (0, kb.onGameResetOnce)(bb)
          }
          const sb = new Qb(cb);
          this.connectionResume = new uc((bb => this.colyClient.reconnect(bb)), (cb => {
            bb.fL(cb)
          }), sb, {
            isLive: () => (0, Ib.d)().client.getMsgHandler() === sb,
            onDropped: (bb, cb) => {
              (0, hc.h)(bb) || this.logUnrecognisedConnectionLoss(bb, void 0, {
                site: "drop",
                closeReason: null !== cb && void 0 !== cb ? cb : "",
                sinceJoined: this.sinceJoined()
              })
            },
            onRoomLeft: (bb, cb) => {
              this.onRoomLeft(bb, cb)
            },
            onReconnected: bb => {
              this.incomingMsgInitialisor.QHb(bb), this.checkSendPath = (0, yc.e)(sb, bb, lb.o)
            },
            onGaveUp: (bb, cb) => {
              this.onResumeGaveUp(bb, cb)
            }
          }), this.connectionResume.attachRoom(cb), (0, kb.onGameResetOnce)((() => {
            this.connectionResume.dispose()
          }));
          const ab = sb.send,
            Ub = sb.mN,
            Hb = sb.Rcb.send,
            fb = sb.Rcb.mN,
            Mb = sb.mHb;
          this.checkSendPath = (0, yc.e)(sb, cb, lb.o);
          const Xb = setInterval((() => {
            ab === sb.send && Ub === sb.mN && Hb === sb.Rcb.send && fb === sb.Rcb.mN && Mb === sb.mHb || dc(), this.checkSendPath()
          }), 1e4);
          return (0, kb.onGameResetOnce)((() => {
            clearInterval(Xb)
          })), {
            success: !0,
            successDetails: sb
          }
        })).catch((cb => {
          if (sb.aborted && cb === (0, ic.f)(sb)) return {
            success: !1,
            failDetails: {
              reason: "Left the game while it loaded",
              requiresRefresh: !1,
              canReconnect: !1
            }
          };
          if (cb instanceof Oc.i) return console.warn("Seat request timed out", this.lobbyName, this.gameNameWithVariation), {
            success: !1,
            failDetails: {
              reason: cb.message,
              requiresRefresh: !1,
              canReconnect: !1,
              gameServerUnreachable: "timedOut"
            }
          };
          bb.zl(`Failed to connect to bloxd room, check your internet connection. lobbyName: ${this.lobbyName}, gameNameWithVariation: ${this.gameNameWithVariation} code: ${cb.code}\n`, cb);
          const kb = cb.code;
          return kb === ab.d.serverUpdating.code ? (this.goToUpdateWaiting(), {
            success: !1,
            failDetails: {
              reason: ab.d.serverUpdating.text,
              requiresRefresh: !1,
              canReconnect: !0,
              goesToUpdateWaiting: !0
            }
          }) : {
            success: !1,
            failDetails: {
              ...this.onConnectionToServerLost(kb, cb.message, {
                site: "join",
                sinceJoinStart: (0, hc.e)(performance.now() - Ub),
                ...Zc(cb)
              }, zc(cb)),
              rematch: (0, Pc.b)(cb),
              gameRefused: (0, Dc.d)(cb)
            }
          }
        }))
      }
      setupServerListeners(bb, cb, sb) {
        eb.j.QQ("loadingScreenState", "loadingPage:loadingPlayerInfo"), this.incomingMsgInitialisor = new ec(this.gameNameWithVariation, cb.Rcb, bb, this.connectionResume), this.incomingMsgInitialisor.setupStateReplicationHandlers();
        const Wb = cb.VHb();
        this.incomingMsgInitialisor.setupOnMessageListeners(Wb, sb), (0, kb.onConnectionToServerReady)(Wb, cb), Wb.finishRegistration()
      }
      dispose() {
        this.connectionResume.dispose()
      }
      onResumeGaveUp(bb, cb) {
        (0, tc.dl)(new Error("Reconnect failed"), {
          ...(0, Yc.k)(cb),
          game: this.gameNameWithVariation
        }), (0, Lc.d)("disconnect", "Reconnect failed", cb.reason), (0, Ib.d)().client.leaveGameUnwanted({
          reason: {
            translationKey: "general:lostConnection"
          },
          canReconnect: !bb,
          canPlayAgain: bb,
          requiresRefresh: !1,
          automaticallyReconnect: !1
        }), (0, sc.navigatePreserveSearch)("/")
      }
      sinceJoined() {
        return null === this.joinedAt ? "" : (0, hc.e)(performance.now() - this.joinedAt)
      }
      onRoomLeft(bb, cb) {
        var sb;
        if (bb === ab.d.gameOrPluginKick.code) return;
        if (console.log(`Left room with code ${bb}`), bb === ab.d.serverUpdating.code) return (0, Lc.d)("disconnect", "Left room", "serverUpdating"), (0, Ib.d)().client.leaveGame(this.getUpdateWaitingUrl()), void this.goToUpdateWaiting();
        this.eX.zl(`Kicked from server with code ${bb}`, new Error);
        const kb = Object.keys(ab.d).find((cb => ab.d[cb].code === bb));
        (0, Lc.d)("disconnect", "Left room", null !== kb && void 0 !== kb ? kb : String(bb));
        const Wb = this.onConnectionToServerLost(bb, void 0, {
          site: "leave",
          closeReason: null !== cb && void 0 !== cb ? cb : "",
          sinceJoined: this.sinceJoined()
        });
        (0, Ib.d)().client.leaveGameUnwanted({
          reason: `You have disconnected from the server.\n${Wb.reason}`,
          canReconnect: Wb.canReconnect,
          requiresRefresh: Wb.requiresRefresh,
          automaticallyReconnect: null !== (sb = Wb.automaticallyReconnect) && void 0 !== sb && sb
        }), (0, sc.navigatePreserveSearch)("/")
      }
      getUpdateWaitingUrl() {
        return (0, gc.z)(this.gameNameWithVariation, this.lobbyName)
      }
      goToUpdateWaiting() {
        (0, sc.navigatePreserveSearch)(this.getUpdateWaitingUrl())
      }
      onConnectionToServerLost(bb, cb, sb) {
        var kb;
        let Wb = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        if (null !== (kb = cb) && void 0 !== kb && kb.endsWith(ab.j) && (this.userContext.invalidateTrafficCode(), cb = cb.replace(ab.j, "")), bb === ab.d.outdatedVersion.code) return console.error("Outdated client with version ", Tb.d, ", refreshing page"), (0, Nb.reloadBloxd)(), {
          reason: "Outdated client",
          requiresRefresh: !0,
          canReconnect: !1
        };
        if (bb === ab.d.loadRecaptchaError.code) return console.error("Load recaptcha error, refreshing page"), (0, Nb.reloadBloxd)(), {
          reason: "Failed to load recaptcha",
          requiresRefresh: !0,
          canReconnect: !1
        };
        for (const Tb in ab.d) {
          const {
            code: sb,
            text: kb,
            canReconnect: Wb
          } = ab.d[Tb];
          if (sb === bb) {
            console.log("matched known error", bb, "leaving game");
            return {
              reason: "" !== kb ? kb : cb || `Code: ${bb}`,
              requiresRefresh: !1,
              canReconnect: Wb,
              automaticallyReconnect: sb === ab.d.customGameUpdated.code || sb === ab.d.duplicateLobbyNameError.code
            }
          }
        }
        return console.log("Didn't match known error, leaving game"), (0, hc.g)(bb) || Wb ? console.warn("Connection lost", bb, cb) : this.logUnrecognisedConnectionLoss(bb, cb, sb), {
          reason: `Either your internet isn't working or this is a bug.\nCode: ${bb}`,
          requiresRefresh: !1,
          canReconnect: !1,
          gameServerUnreachable: Wb ? "failed" : void 0
        }
      }
      logUnrecognisedConnectionLoss(bb, cb, sb) {
        (0, tc.dl)(new Error("Unrecognised connection loss"), {
          code: String(bb),
          cause: null !== cb && void 0 !== cb ? cb : "",
          ...sb,
          game: this.gameNameWithVariation,
          ...(0, hc.i)()
        })
      }
    }
  },
  38587: (bb, cb, sb) => {
    sb.d(cb, {
      c: () => Rs,
      d: () => ck
    });
    var kb, Wb, ab, Tb, Ub, Ib, Hb, fb, Mb, Xb, nb, mb, lb, Qb, eb, Cb, Nb, Vb, Lb, ub, Yb, hb, Jb, gb, Bb, tb, yb, Pb, Db, Eb, ib, Ob, Gb, Kb, Zb, zb, qb, db, Ab, wb, rb, ob, Sb, Rb, vb, Fb, xb, jb, pb, bc, cc, sc, kc, Wc, ac, Tc, Uc, Ic, Hc, fc, Mc, Xc, nc, mc, lc, Qc, ec, Cc, Nc, Vc, Lc, uc, Yc, hc, Jc, gc, Bc, tc, yc, Pc, Dc, Ec, ic, Oc, Gc, Kc, Zc, zc, qc, dc, Ac, wc, rc, oc, Sc, Rc, vc, Fc, xc, jc = sb(26),
      pc = sb(36712),
      bs = sb(38594),
      cs = sb(38599),
      ss = sb(8713),
      ks = sb(624),
      Ws = sb(620),
      as = sb(36372);
    let Ts = (kb = (0, ss.type)("number"), Wb = (0, ss.type)("number"), ab = (0, ss.type)("number"), Tb = (0, ss.type)("number"), Ub = (0, ss.type)("number"), Ib = (0, ss.type)("number"), Hb = (0, ss.type)("string"), fb = class extends ss.Schema {
        constructor() {
          super(...arguments), (0, bs.b)(this, "id", Mb, this), (0, bs.b)(this, "amount", Xb, this), (0, bs.b)(this, "x", nb, this), (0, bs.b)(this, "y", mb, this), (0, bs.b)(this, "z", lb, this), (0, bs.b)(this, "size", Qb, this), (0, bs.b)(this, "attributes", eb, this)
        }
      }, Mb = (0, cs.b)(fb.prototype, "id", [kb], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return 0
        }
      }), Xb = (0, cs.b)(fb.prototype, "amount", [Wb], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return 0
        }
      }), nb = (0, cs.b)(fb.prototype, "x", [ab], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return 0
        }
      }), mb = (0, cs.b)(fb.prototype, "y", [Tb], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return 0
        }
      }), lb = (0, cs.b)(fb.prototype, "z", [Ub], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return 0
        }
      }), Qb = (0, cs.b)(fb.prototype, "size", [Ib], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return 1
        }
      }), eb = (0, cs.b)(fb.prototype, "attributes", [Hb], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return "{}"
        }
      }), fb),
      Us = (Cb = (0, ss.type)("string"), Nb = (0, ss.type)("string"), Vb = class extends ss.Schema {
        constructor() {
          super(...arguments), (0, bs.b)(this, "itemName", Lb, this), (0, bs.b)(this, "enchantmentTier", ub, this)
        }
      }, Lb = (0, cs.b)(Vb.prototype, "itemName", [Cb], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: null
      }), ub = (0, cs.b)(Vb.prototype, "enchantmentTier", [Nb], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: null
      }), Vb),
      Is = (Yb = (0, ss.type)("string"), hb = (0, ss.type)("string"), Jb = (0, ss.type)("number"), gb = (0, ss.type)("number"), Bb = (0, ss.type)("number"), tb = (0, ss.type)("float32"), yb = (0, ss.type)("float32"), Pb = (0, ss.type)("float32"), Db = (0, ss.type)("string"), Eb = (0, ss.type)(["number"]), ib = (0, ss.type)("boolean"), Ob = class extends ss.Schema {
        constructor() {
          super(...arguments), (0, bs.b)(this, "type", Gb, this), (0, bs.b)(this, "name", Kb, this), (0, bs.b)(this, "x", Zb, this), (0, bs.b)(this, "y", zb, this), (0, bs.b)(this, "z", qb, this), (0, bs.b)(this, "xRotation", db, this), (0, bs.b)(this, "yRotation", Ab, this), (0, bs.b)(this, "zRotation", wb, this), (0, bs.b)(this, "followingEId", rb, this), (0, bs.b)(this, "followingOffset", ob, this), (0, bs.b)(this, "shouldMatchFollowingEntityRotation", Sb, this)
        }
      }, Gb = (0, cs.b)(Ob.prototype, "type", [Yb], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: null
      }), Kb = (0, cs.b)(Ob.prototype, "name", [hb], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return ""
        }
      }), Zb = (0, cs.b)(Ob.prototype, "x", [Jb], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return 0
        }
      }), zb = (0, cs.b)(Ob.prototype, "y", [gb], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return 0
        }
      }), qb = (0, cs.b)(Ob.prototype, "z", [Bb], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return 0
        }
      }), db = (0, cs.b)(Ob.prototype, "xRotation", [tb], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return 0
        }
      }), Ab = (0, cs.b)(Ob.prototype, "yRotation", [yb], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return 0
        }
      }), wb = (0, cs.b)(Ob.prototype, "zRotation", [Pb], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return 0
        }
      }), rb = (0, cs.b)(Ob.prototype, "followingEId", [Db], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: null
      }), ob = (0, cs.b)(Ob.prototype, "followingOffset", [Eb], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return new ss.ArraySchema(0, 0, 0)
        }
      }), Sb = (0, cs.b)(Ob.prototype, "shouldMatchFollowingEntityRotation", [ib], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return !0
        }
      }), Ob),
      Hs = (Rb = (0, ss.type)("float32"), vb = (0, ss.type)("float32"), Fb = (0, ss.type)("boolean"), xb = (0, ss.type)("boolean"), jb = (0, ss.type)("float32"), pb = (0, ss.type)("boolean"), bc = (0, ss.type)("string"), cc = (0, ss.type)("string"), sc = (0, ss.type)("string"), kc = (0, ss.type)("string"), Wc = (0, ss.type)(["number"]), ac = (0, ss.type)("number"), Tc = (0, ss.type)({
        map: Us
      }), Uc = class extends Is {
        constructor() {
          super(...arguments), (0, bs.b)(this, "scale", Ic, this), (0, bs.b)(this, "speed", Hc, this), (0, bs.b)(this, "jumping", fc, this), (0, bs.b)(this, "crouching", Mc, this), (0, bs.b)(this, "cameraPitch", Xc, this), (0, bs.b)(this, "armSwinging", nc, this), (0, bs.b)(this, "heldItemName", mc, this), (0, bs.b)(this, "heldItemEnchantmentTier", lc, this), (0, bs.b)(this, "pose", Qc, this), (0, bs.b)(this, "ridingVehicleEId", ec, this), (0, bs.b)(this, "meshOffset", Cc, this), (0, bs.b)(this, "baseRenderHeading", Nc, this), (0, bs.b)(this, "armour", Vc, this)
        }
      }, Ic = (0, cs.b)(Uc.prototype, "scale", [Rb], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return 1
        }
      }), Hc = (0, cs.b)(Uc.prototype, "speed", [vb], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return 0
        }
      }), fc = (0, cs.b)(Uc.prototype, "jumping", [Fb], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return !1
        }
      }), Mc = (0, cs.b)(Uc.prototype, "crouching", [xb], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return !1
        }
      }), Xc = (0, cs.b)(Uc.prototype, "cameraPitch", [jb], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return 0
        }
      }), nc = (0, cs.b)(Uc.prototype, "armSwinging", [pb], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return !1
        }
      }), mc = (0, cs.b)(Uc.prototype, "heldItemName", [bc], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: null
      }), lc = (0, cs.b)(Uc.prototype, "heldItemEnchantmentTier", [cc], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: null
      }), Qc = (0, cs.b)(Uc.prototype, "pose", [sc], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return "standing"
        }
      }), ec = (0, cs.b)(Uc.prototype, "ridingVehicleEId", [kc], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return null
        }
      }), Cc = (0, cs.b)(Uc.prototype, "meshOffset", [Wc], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return new ss.ArraySchema(0, 0, 0)
        }
      }), Nc = (0, cs.b)(Uc.prototype, "baseRenderHeading", [ac], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return 0
        }
      }), Vc = (0, cs.b)(Uc.prototype, "armour", [Tc], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return new ss.MapSchema
        }
      }), Uc),
      fs = (Lc = (0, ss.type)("string"), uc = (0, ss.type)("string"), Yc = (0, ss.type)("string"), hc = (0, ss.type)("uint8"), Jc = class extends Hs {
        constructor() {
          super(...arguments), (0, bs.b)(this, "variation", gc, this), (0, bs.b)(this, "ownerDbId", Bc, this), (0, bs.b)(this, "metaInfo", tc, this), (0, bs.b)(this, "aiState", yc, this)
        }
      }, gc = (0, cs.b)(Jc.prototype, "variation", [Lc], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return "default"
        }
      }), Bc = (0, cs.b)(Jc.prototype, "ownerDbId", [uc], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return null
        }
      }), tc = (0, cs.b)(Jc.prototype, "metaInfo", [Yc], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return ""
        }
      }), yc = (0, cs.b)(Jc.prototype, "aiState", [hc], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return 0
        }
      }), Jc);
    Pc = (0, ss.type)("string"), Dc = (0, ss.type)("string"), Ec = (0, ss.type)("string"), ic = (0, ss.type)("string"), Oc = class extends Is {
      constructor() {
        super(...arguments), (0, bs.b)(this, "meshKind", Gc, this), (0, bs.b)(this, "meshOpts", Kc, this), (0, bs.b)(this, "pose", Zc, this), (0, bs.b)(this, "leaderboardTop", zc, this)
      }
    }, Gc = (0, cs.b)(Oc.prototype, "meshKind", [Pc], {
      configurable: !0,
      enumerable: !0,
      writable: !0,
      initializer: null
    }), Kc = (0, cs.b)(Oc.prototype, "meshOpts", [Dc], {
      configurable: !0,
      enumerable: !0,
      writable: !0,
      initializer: null
    }), Zc = (0, cs.b)(Oc.prototype, "pose", [Ec], {
      configurable: !0,
      enumerable: !0,
      writable: !0,
      initializer: null
    }), zc = (0, cs.b)(Oc.prototype, "leaderboardTop", [ic], {
      configurable: !0,
      enumerable: !0,
      writable: !0,
      initializer: null
    });

    function Ms(bb) {
      return Object.keys(ss.Metadata.getFields(bb))
    }
    const Xs = Ms(fs);
    for (const sk of ks.r)
      if (!Xs.includes(sk)) throw new Error(`Mob Schema is missing a networked property: "${sk}"`);
    const ns = Ms((qc = (0, ss.type)("string"), dc = (0, ss.type)("float32"), Ac = (0, ss.type)("float32"), wc = (0, ss.type)("float32"), rc = (0, ss.type)("float32"), oc = class extends Is {
      constructor() {
        super(...arguments), (0, bs.b)(this, "soundName", Sc, this), (0, bs.b)(this, "volume", Rc, this), (0, bs.b)(this, "refDistance", vc, this), (0, bs.b)(this, "maxHearDist", Fc, this), (0, bs.b)(this, "rate", xc, this)
      }
    }, Sc = (0, cs.b)(oc.prototype, "soundName", [qc], {
      configurable: !0,
      enumerable: !0,
      writable: !0,
      initializer: function() {
        return ""
      }
    }), Rc = (0, cs.b)(oc.prototype, "volume", [dc], {
      configurable: !0,
      enumerable: !0,
      writable: !0,
      initializer: function() {
        return 1
      }
    }), vc = (0, cs.b)(oc.prototype, "refDistance", [Ac], {
      configurable: !0,
      enumerable: !0,
      writable: !0,
      initializer: function() {
        return as.l
      }
    }), Fc = (0, cs.b)(oc.prototype, "maxHearDist", [wc], {
      configurable: !0,
      enumerable: !0,
      writable: !0,
      initializer: function() {
        return as.e
      }
    }), xc = (0, cs.b)(oc.prototype, "rate", [rc], {
      configurable: !0,
      enumerable: !0,
      writable: !0,
      initializer: function() {
        return 1
      }
    }), oc));
    for (const sk of Ws.j)
      if (!ns.includes(sk)) throw new Error(`AudioEntity Schema is missing a replicated property: "${sk}"`);
    var ms = sb(38039),
      ls = sb(1253),
      Qs = sb(628),
      es = sb(37816),
      Cs = sb(4023),
      Ns = sb(344),
      Vs = sb(36821),
      Ls = sb(37706),
      us = sb(2141),
      Ys = sb(36793),
      hs = sb(38074),
      gs = sb(36931),
      Bs = sb(356),
      ts = sb.n(Bs),
      ys = sb(37527),
      Ps = sb(36643),
      Ds = sb(37674),
      Es = sb(37720);
    class is {
      constructor(bb, cb) {
        this.bloxd = bb, this.eId = cb, this.eX = void 0, this.colyseusEntity = void 0, this.canSeeSub = void 0, this.canAttackSub = void 0, this.interactableSub = void 0, this.overlayColourSub = void 0, this.opacitySub = void 0, this.zIndexSub = void 0, this.multilineTextBoxSub = void 0, this.previousHidingMeshManagerState = void 0, this.meshKind = void 0, this.meshOpts = void 0, this.leaderboardTop = void 0, this.meshRebuildQueued = !1, this.Em = !1, this.eX = bb.eX
      }
      initClient(bb) {
        var cb, sb, kb;
        this.colyseusEntity = bb, this.meshKind = bb.meshKind, this.meshOpts = bb.meshOpts, this.leaderboardTop = bb.leaderboardTop, this.eX.zN.add([bb.x, bb.y, bb.z], 1, 1, null, null, !1, !1, this.eId), this.eX.zN.MJ(this.eId, "smoothToServerPos");
        const Wb = "Person" === this.meshKind;
        this.eX.zN.MJ(this.eId, "meshRotation", {
          isServerControlled: !0,
          ...Wb ? {
            defaultRotationsPerSecond: .5
          } : {},
          childrenNodeParams: Wb ? [{
            nodeName: "HeadMesh",
            softTolerance: hs.l,
            hardTolerance: null
          }] : []
        }), this.updateHidingMeshMgr(), this.canSeeSub = jc.j.subscribe(`otherEntitySettings|${this.eId}|canSee`, (bb => {
          this.updateHidingMeshMgr()
        }));
        const ab = () => {
          const bb = this.eX.zN.Ebb(this.eId);
          if (!bb) return;
          const cb = (0, gs.g)(this.eId);
          if ("number" === typeof bb.rY) {
            var sb, kb, Wb, ab;
            const Tb = null === (sb = (0, us.i)("head", null === (Wb = this.getSpec()) || void 0 === Wb || null === (ab = Wb.opts.textures) || void 0 === ab ? void 0 : ab.head)) || void 0 === sb || null === (kb = sb.personModel) || void 0 === kb ? void 0 : kb.fullBody;
            return this.eX.Cl.AY.setPickable(bb.rY, cb && !Tb), void(0, Ps.updatePersonAttachmentPickability)(this.eX, this.eId, cb)
          }
          const Tb = bb.mesh;
          if (Tb)
            for (const Ub of [Tb, ...Tb.getChildMeshes(!1)]) "UQ" in Ub && !Ub.name.startsWith("Cape|") && (Ub.UQ = cb)
        };
        this.canAttackSub = jc.j.subscribe(`otherEntitySettings|${this.eId}|canAttack`, ab), this.interactableSub = jc.j.subscribe(`otherEntitySettings|${this.eId}|interactable`, ab), this.overlayColourSub = jc.j.subscribe(`otherEntitySettingsClientifiedEId|${this.eId}|overlayColour`, (bb => {
          this.updateOverlayColour(bb)
        })), this.opacitySub = jc.j.subscribe(`otherEntitySettingsClientifiedEId|${this.eId}|opacity`, (bb => {
          this.updateOpacity(bb)
        })), this.zIndexSub = jc.j.subscribe(`otherEntitySettingsClientifiedEId|${this.eId}|zIndex`, (bb => {
          this.updateZIndex(bb)
        }));
        const Tb = this.eX.gJ[this.eX.yJ][this.eId];
        this.updateOverlayColour(null !== (cb = null === Tb || void 0 === Tb ? void 0 : Tb.overlayColour) && void 0 !== cb ? cb : null), this.updateOpacity(null !== (sb = null === Tb || void 0 === Tb ? void 0 : Tb.opacity) && void 0 !== sb ? sb : 1), this.updateZIndex(null !== (kb = null === Tb || void 0 === Tb ? void 0 : Tb.zIndex) && void 0 !== kb ? kb : 0), this.multilineTextBoxSub = (0, Ys.p)(this.eX, this.eId)
      }
      onChangeClient(bb, cb) {
        if ("xRotation" === bb || "yRotation" === bb || "zRotation" === bb)(0, Ys.q)(this.eX, this.eId, bb, cb);
        else if ("pose" === bb) {
          const bb = this.eX.zN.qbb(this.eId);
          bb && (bb.pose = cb || "standing")
        } else "meshKind" === bb || "meshOpts" === bb ? (this[bb] = cb, this.queueMeshRebuild()) : "name" === bb && "" !== cb ? this.updateHidingMeshMgr() : "leaderboardTop" === bb && (this.leaderboardTop = cb, jc.j.QQ(`leaderboardTop|${this.eId}`, cb))
      }
      disposeClient() {
        this.Em = !0, this.eX.zN.deleteEntity(this.eId), jc.j.unsubscribe(this.canSeeSub), jc.j.unsubscribe(this.canAttackSub), jc.j.unsubscribe(this.interactableSub), jc.j.unsubscribe(this.overlayColourSub), jc.j.unsubscribe(this.opacitySub), jc.j.unsubscribe(this.zIndexSub), jc.j.unsubscribe(this.multilineTextBoxSub)
      }
      getCurrentHidingMeshMgrState() {
        var bb, cb;
        return {
          canSee: null !== (bb = null === (cb = this.eX.gJ[this.eX.yJ][this.eId]) || void 0 === cb ? void 0 : cb.canSee) && void 0 !== bb && bb,
          name: this.colyseusEntity.name,
          meshKind: this.meshKind,
          meshOpts: this.meshOpts
        }
      }
      updateHidingMeshMgr() {
        var bb, cb, sb;
        const {
          eX: kb
        } = this, {
          zN: Wb
        } = kb, ab = this.getCurrentHidingMeshMgrState();
        if ((0, Ns.qe)(this.previousHidingMeshManagerState, ab)) return;
        if (this.previousHidingMeshManagerState = ab, Wb.mJ(this.eId, "hidingMeshManager"), null === (bb = kb.gJ[kb.yJ][this.eId]) || void 0 === bb || !bb.canSee) return;
        const Tb = this.getSpec();
        if (!Tb) return;
        const {
          type: Ub,
          opts: Ib
        } = Tb;
        "Person" === Ub && (Ib.textures = (0, us.m)(Ib.textures)), Ib.eId = this.eId, Wb.MJ(this.eId, "hidingMeshManager", {
          addMeshComponent: () => {
            var bb, cb, sb;
            "Leaderboard" === Ub && (Ib.leaderboardTop = this.leaderboardTop);
            const ab = this.bloxd.client.meshCreator.getEntityMesh(Ub, Ib, (bb => {
              var cb, sb;
              if ("number" === typeof bb) {
                var Wb, ab, Tb;
                const cb = kb.Cl.AY;
                cb.setEntityId(bb, this.eId);
                const sb = "Person" === Ub && (null === (Wb = (0, us.i)("head", null === (Tb = Ib.textures) || void 0 === Tb ? void 0 : Tb.head)) || void 0 === Wb || null === (ab = Wb.personModel) || void 0 === ab ? void 0 : ab.fullBody);
                return void cb.setPickable(bb, (0, gs.g)(this.eId) && !sb)
              }
              const Hb = bb;
              for (const Ub of [Hb, ...Hb.getChildMeshes(!1)]) void 0 === Ub.UQ || Ub.name.startsWith("Cape|") || (Ub.UQ = (0, gs.g)(this.eId), Ub.metadata ??= new kb.Cl.IQ, Ub.metadata.eId = this.eId);
              this.updateOpacity(null !== (cb = null === (sb = kb.gJ[kb.yJ][this.eId]) || void 0 === sb ? void 0 : sb.opacity) && void 0 !== cb ? cb : 1)
            }));
            if (!ab) return;
            const {
              rY: Tb,
              mesh: Hb,
              meshOffset: fb,
              nameYOffset: Mb,
              modelLoaded: Xb
            } = ab;
            null === Xb || void 0 === Xb || Xb.then((() => {
              var bb;
              (null === (bb = Wb.Ebb(this.eId)) || void 0 === bb ? void 0 : bb.mesh) === Hb && (this.previousHidingMeshManagerState = null, this.updateHidingMeshMgr())
            }));
            const nb = null === Tb ? null : kb.Cl.AY.Esb(Tb, 0);
            if (Wb.MJ(this.eId, Wb.names.mesh, {
                rY: Tb,
                bsb: nb,
                mesh: Hb,
                iTb: !1,
                ksb: "Leaderboard" !== Ub,
                offset: fb.slice(),
                ETb: "ParticleEmitter" === Ub && Ib.followTargetMeshOffset ? bb => {
                  var cb;
                  ts().copy(bb, fb);
                  const sb = null === (cb = Wb.gcb(this.eId)) || void 0 === cb ? void 0 : cb.hm,
                    kb = void 0 === sb ? null : Wb.qbb(sb);
                  if (kb) {
                    var ab, Tb;
                    const cb = this.bloxd.getEntityHeading(null !== (ab = kb.ridingVehicleEId) && void 0 !== ab ? ab : sb, !0),
                      Wb = Math.sin(cb),
                      Ub = Math.cos(cb);
                    bb[0] += kb.meshOffset[0] * Ub + kb.meshOffset[2] * Wb, bb[1] += kb.meshOffset[1], bb[2] += kb.meshOffset[2] * Ub - kb.meshOffset[0] * Wb;
                    const Ib = null !== (Tb = kb.ridingVehicleEId) && void 0 !== Tb ? Tb : null;
                    null !== Ib && (0, Es.b)(this.eX, Ib, bb)
                  }
                } : null
              }), "Person" === Ub) {
              var mb, lb, Qb, eb;
              Wb.MJ(this.eId, Wb.names.meshAttachments, {
                personFullBody: null !== (mb = null === (lb = (0, us.i)("head", null === (eb = Ib.textures) || void 0 === eb ? void 0 : eb.head)) || void 0 === lb || null === (Qb = lb.personModel) || void 0 === Qb ? void 0 : Qb.fullBody) && void 0 !== mb && mb
              });
              for (const bb of ls.p) {
                var Cb, Nb, Vb;
                const cb = null === (Cb = Ib.textures) || void 0 === Cb ? void 0 : Cb[bb];
                cb && null !== (Nb = (0, us.i)(bb, cb)) && void 0 !== Nb && null !== (Vb = Nb.attachments) && void 0 !== Vb && Vb.length && Ls.b.Player.meshApi.updatePlayerCosmetic(this.eId, Tb, bb, cb)
              }
              Wb.MJ(this.eId, Wb.names.moveState), Wb.MJ(this.eId, "updateWalkingState", {
                rY: Tb,
                bsb: nb,
                walkingLegSwingDuration: hs.q
              }), Wb.MJ(this.eId, "humanoidMesh", {
                rY: Tb,
                bsb: nb,
                heldItemPositionParams: {},
                maxWalkingAngleOverride: null
              }), Wb.MJ(this.eId, "animator", {
                rY: Tb,
                bsb: nb,
                modelLifeformType: "Player"
              }), Ds.f.hasAnimation("Person") && Wb.MJ(this.eId, "rigAnimation", {
                target: "Person",
                rY: Tb
              }), Wb.qbb(this.eId).pose = this.colyseusEntity.pose || "standing"
            } else if ("BloxdBlock" === Ub && null !== Tb) {
              Wb.MJ(this.eId, "animator", {
                rY: Tb,
                bsb: nb,
                modelLifeformType: null
              });
              const bb = (0, es.w)(Ib.blockName);
              null !== bb && Wb.MJ(this.eId, "rigAnimation", {
                target: bb,
                rY: Tb
              })
            }
            Wb.HUb(this.eId, "entityName", {
              name: this.colyseusEntity.name,
              nameYOffset: Mb
            }), this.bloxd.setEntityName(this.eId, this.colyseusEntity.name), !0 === Ib.autoRotate && (Wb.mJ(this.eId, "meshRotation"), Wb.MJ(this.eId, "autoRotate"));
            const {
              lineToEId: Lb
            } = Ib;
            (0, Qs.L)(Lb) || Wb.MJ(this.eId, "lineToEntity", {
              lineToEId: Lb
            });
            const ub = kb.gJ[kb.yJ][this.eId];
            this.updateOverlayColour(null !== (bb = null === ub || void 0 === ub ? void 0 : ub.overlayColour) && void 0 !== bb ? bb : null), this.updateOpacity(null !== (cb = null === ub || void 0 === ub ? void 0 : ub.opacity) && void 0 !== cb ? cb : 1), this.updateZIndex(null !== (sb = null === ub || void 0 === ub ? void 0 : ub.zIndex) && void 0 !== sb ? sb : 0)
          },
          removeMeshComponent: () => {
            "Person" !== Ub && "BloxdBlock" !== Ub || Wb.mJ(this.eId, "rigAnimation"), Wb.mJ(this.eId, Wb.names.mesh), Wb.j_(this.eId, Wb.names.meshAttachments) && Wb.mJ(this.eId, Wb.names.meshAttachments), Wb.mJ(this.eId, "entityName"), Wb.mJ(this.eId, "autoRotate"), Wb.mJ(this.eId, "lineToEntity"), "Person" === Ub ? (Wb.mJ(this.eId, Wb.names.moveState), Wb.mJ(this.eId, "updateWalkingState"), Wb.mJ(this.eId, "humanoidMesh"), Wb.mJ(this.eId, "animator")) : "BloxdBlock" === Ub && Wb.mJ(this.eId, "animator")
          },
          hideDist: null !== (cb = Ib.hideDist) && void 0 !== cb ? cb : 80,
          movingHideDist: null !== (sb = Ib.hideDist) && void 0 !== sb ? sb : 120,
          displayOutsideLoadedChunk: Ib.hideDist > 100,
          immediatelyUpdate: !0,
          aM: "BloxdBlock" === Ub ? Ib.blockName : Ub
        })
      }
      queueMeshRebuild() {
        this.meshRebuildQueued || (this.meshRebuildQueued = !0, queueMicrotask((() => {
          this.meshRebuildQueued = !1, this.Em || this.updateHidingMeshMgr()
        })))
      }
      getSpec() {
        return (0, Cs.h)({
          meshKind: this.meshKind,
          meshOpts: this.meshOpts
        })
      }
      updateOverlayColour(bb) {
        var cb, sb;
        if ("Person" !== this.meshKind) return;
        let kb = new Vs.e(0, 0, 0, 0);
        if (null !== bb) {
          const cb = (0, Ns.U)(bb);
          kb = new Vs.e(cb[0] / 255, cb[1] / 255, cb[2] / 255, .5)
        }
        const Wb = null !== (cb = null === (sb = this.eX.zN.Ebb(this.eId)) || void 0 === sb ? void 0 : sb.rY) && void 0 !== cb ? cb : null;
        null !== Wb && Ls.b.Player.meshApi.updateMeshOverlayColour(Wb, kb)
      }
      updateZIndex(bb) {
        var cb;
        if ("Person" !== this.meshKind) return;
        const sb = null === (cb = this.eX.zN.Ebb(this.eId)) || void 0 === cb ? void 0 : cb.rY;
        "number" === typeof sb && this.eX.Cl.AY.setRenderingGroupId(sb, bb)
      }
      updateOpacity(bb) {
        const cb = this.eX.zN.Ebb(this.eId);
        cb && ("number" !== typeof cb.rY ? cb.mesh && "ParticleEmitter" !== this.meshKind && (0, ys.h)(cb.mesh, bb) : Ls.b.Player.meshApi.updateMeshOpacity(cb.rY, bb))
      }
    }
    var Os = sb(38589);
    class Gs {
      constructor(bb, cb) {
        this.eId = cb, this.eX = void 0, this.schema = void 0, this.eX = bb.eX
      }
      initClient(bb) {
        this.schema = bb, this.eX.zN.add([bb.x, bb.y, bb.z], .1, .1, null, null, !1, !1, this.eId), this.eX.zN.MJ(this.eId, "smoothToServerPos"), Os.d.add(this.eId, this.copyOpts())
      }
      onChangeClient(bb) {
        Ws.j.includes(bb) && Os.d.update(this.eId, this.copyOpts())
      }
      disposeClient() {
        Os.d.remove(this.eId), this.eX.zN.deleteEntity(this.eId)
      }
      copyOpts() {
        const {
          soundName: bb,
          volume: cb,
          refDistance: sb,
          maxHearDist: kb,
          rate: Wb
        } = this.schema;
        return {
          soundName: bb,
          volume: cb,
          refDistance: sb,
          maxHearDist: kb,
          rate: Wb
        }
      }
    }
    var Ks = sb(3470),
      Zs = sb(36365),
      zs = sb(6134),
      qs = sb(37377),
      ds = sb(2612),
      As = sb(37756),
      ws = sb(8677),
      rs = sb(38088),
      os = sb(37360),
      Ss = sb(2984);
    class Rs {
      constructor(bb, cb) {
        let sb = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 4,
          kb = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : () => performance.now();
        this.Rcb = bb, this.eX = cb, this.setupBudgetMs = sb, this.now = kb, this.createStateCallbacks = void 0, this.roomStateCallbacks = void 0, this.allItems = {}, this.detachers = new Map, this.deferredSetups = new Map, this.queuedSetups = new Map, this.promotedSetups = new Set, this.setupBudgetLeftMs = void 0, this.lastRefillMs = void 0, this.roomState = void 0, this.Em = !1, this.onFrame = () => {
          this.setUpQueuedEntities(!0)
        }, this.RC = () => {
          this.setUpQueuedEntities(this.now() - this.lastRefillMs > 100)
        }, this.setUpPromoted = () => {
          for (const bb of this.promotedSetups) {
            this.promotedSetups.delete(bb);
            const cb = this.queuedSetups.get(bb);
            cb && (this.queuedSetups.delete(bb), this.timedSetup(cb, bb))
          }
        }, this.createStateCallbacks = (0, ws.getStateCallbacks)(bb), this.roomStateCallbacks = this.createStateCallbacks(bb.state), this.roomState = bb.state, this.setupBudgetLeftMs = sb, this.lastRefillMs = kb()
      }
      setup() {
        this.setupEntityHandlers(), this.setupItemHandlers(), this.Rcb.onStateChange(this.setUpPromoted), this.eX.on("beforeInputs", this.onFrame), this.eX.on("aX", this.RC)
      }
      setUpQueuedEntities(bb) {
        var cb;
        if ((null === (cb = (0, ds.d)().client.getMsgHandler()) || void 0 === cb ? void 0 : cb.Rcb) !== this.Rcb) return this.eX.off("beforeInputs", this.onFrame), this.eX.off("aX", this.RC), this.queuedSetups.clear(), void this.promotedSetups.clear();
        if (bb && (this.setupBudgetLeftMs = this.setupBudgetMs, this.lastRefillMs = this.now()), this.setUpPromoted(), 0 !== this.queuedSetups.size)
          for (ts().copy(vs, this.eX.zN.aN(this.eX.yJ)); this.setupBudgetLeftMs > 0;) {
            const bb = this.nearestQueued(vs);
            if (null === bb) return;
            this.setUpIfQueued(bb), this.setUpPromoted()
          }
      }
      nearestQueued(bb) {
        let cb = null,
          sb = 1 / 0;
        return this.queuedSetups.forEach(((kb, Wb) => {
          const ab = function(bb, cb) {
            return (cb.x - bb[0]) ** 2 + (cb.y - bb[1]) ** 2 + (cb.z - bb[2]) ** 2
          }(bb, kb);
          (null === cb || ab < sb) && (cb = Wb, sb = ab)
        })), cb
      }
      setUpOrQueue(bb, cb) {
        0 === this.queuedSetups.size && this.setupBudgetLeftMs > 0 || this.mustSetUpNow(bb, cb) ? this.timedSetup(bb, cb) : this.queuedSetups.set(cb, bb)
      }
      mustSetUpNow(bb, cb) {
        const sb = this.eX.sbb;
        if (cb === sb) return !0;
        const kb = this.roomState.entities.get(sb);
        return !(!kb || kb.ridingVehicleEId !== cb && kb.followingEId !== cb) || (Fs(bb.type) === ms.d || (0, ds.d)().getFollowingEntities(cb).length > 0)
      }
      setUpIfQueued(bb) {
        const cb = this.queuedSetups.get(bb);
        cb && (this.queuedSetups.delete(bb), this.timedSetup(cb, bb))
      }
      promoteIfQueued(bb) {
        null !== bb && this.queuedSetups.has(bb) && this.promotedSetups.add(bb)
      }
      timedSetup(bb, cb) {
        const sb = this.now();
        this.setupEntity(bb, cb), this.setupBudgetLeftMs -= this.now() - sb
      }
      setupEntityHandlers() {
        this.roomStateCallbacks.entities.ZN(((bb, cb) => {
          this.eX.sbb ? this.setUpOrQueue(bb, cb) : this.deferEntitySetupUntilInitInfo(bb, cb)
        })), this.roomStateCallbacks.entities.wL(((bb, cb) => {
          const sb = this.deferredSetups.get(cb);
          sb && (jc.j.unsubscribe(sb), this.deferredSetups.delete(cb)), this.queuedSetups.delete(cb), this.detach(cb), (0, ds.d)().client.disposeEntity(cb)
        }))
      }
      deferEntitySetupUntilInitInfo(bb, cb) {
        const sb = jc.j.fC("initInfoReceived", (() => {
          this.deferredSetups.delete(cb), this.setUpOrQueue(bb, cb)
        }));
        this.deferredSetups.set(cb, sb), (0, Ks.onGameResetOnce)((() => {
          this.deferredSetups.get(cb) === sb && (jc.j.unsubscribe(sb), this.deferredSetups.delete(cb)), (0, ds.d)().updatePositionAndPhysics(this.eX.yJ, {
            type: zs.t.DEFAULT,
            tier: null
          }, !0), (0, ds.d)().takeHeldPlayerBodySize(this.eX.yJ);
          const bb = this.eX.zN.Cbb(this.eX.yJ);
          bb && (bb.movementType = zs.r.NORMAL)
        }))
      }
      setupEntity(bb, cb) {
        const sb = cb === this.eX.sbb;
        if (sb)(0, ds.d)().client.hK(this.eX.yJ, null, null);
        else {
          const {
            type: sb
          } = bb, kb = Fs(sb);
          if (void 0 === kb) return void
          function(bb, cb) {
            const sb = String(bb);
            if (xs.has(sb)) return;
            xs.add(sb);
            const kb = sb.length > 80 ? `${sb.slice(0,80)}...` : sb,
              Wb = `No client handler for entity type ${JSON.stringify(kb)}, so entity ${cb} is not set up`;
            console.warn(Wb), (0, Ss.d)("uncaught", Wb, "unknown_entity_type")
          }(sb, cb);
          (0, ds.d)().client.hK(cb, bb, new kb((0, ds.d)(), cb, sb))
        }
        const kb = this.createStateCallbacks(bb);
        if (sb) return this.setupMapSchemaCallbacks(cb, bb, kb, "armour"), this.setupScalarField(cb, bb, kb, "scale"), this.setupScalarField(cb, bb, kb, "ridingVehicleEId"), this.setupScalarField(cb, bb, kb, "followingEId"), this.setupScalarField(cb, bb, kb, "followingOffset"), void this.setupScalarField(cb, bb, kb, "shouldMatchFollowingEntityRotation");
        for (const Wb of Ms(bb.constructor)) bb[Wb] instanceof ss.MapSchema ? this.setupMapSchemaCallbacks(cb, bb, kb, Wb) : this.setupScalarField(cb, bb, kb, Wb)
      }
      setupMapSchemaCallbacks(bb, cb, sb, kb) {
        const Wb = sb[kb],
          ab = new Map;
        Wb.ZN(((sb, Wb) => {
          if (this.onEntityFieldChange(bb, cb, kb, {
              key: Wb,
              value: sb
            }), !(sb instanceof ss.Schema)) return;
          const Tb = this.createStateCallbacks(sb),
            Ub = [];
          for (const ab of Ms(sb.constructor)) Ub.push(this.listenForFutureChanges(Tb, ab, (() => {
            this.onEntityFieldChange(bb, cb, kb, {
              key: Wb,
              value: sb
            })
          })));
          ab.set(Wb, (() => {
            for (const bb of Ub) bb()
          }))
        })), Wb.wL(((sb, Wb) => {
          var Tb;
          null === (Tb = ab.get(Wb)) || void 0 === Tb || Tb(), ab.delete(Wb), this.onEntityFieldChange(bb, cb, kb, {
            key: Wb,
            value: null
          })
        })), this.addDetacher(bb, (() => {
          for (const bb of ab.values()) bb();
          ab.clear()
        }))
      }
      setupScalarField(bb, cb, sb, kb) {
        this.onEntityFieldChange(bb, cb, kb, cb[kb]);
        const Wb = this.listenForFutureChanges(sb, kb, (sb => {
          this.onEntityFieldChange(bb, cb, kb, sb)
        }));
        this.addDetacher(bb, Wb)
      }
      addDetacher(bb, cb) {
        let sb = this.detachers.get(bb);
        sb || (sb = [], this.detachers.set(bb, sb)), sb.push(cb)
      }
      detach(bb) {
        for (const sb of null !== (cb = this.detachers.get(bb)) && void 0 !== cb ? cb : []) {
          var cb;
          sb()
        }
        this.detachers.delete(bb)
      }
      listenForFutureChanges(bb, cb, sb) {
        return bb.listen(cb, sb, !1)
      }
      onEntityFieldChange(bb, cb, sb, kb) {
        switch (sb) {
          case "ridingVehicleEId": {
            this.promoteIfQueued(kb);
            const cb = this.eX.zN.qbb((0, Zs.d)(bb));
            cb && (cb.ridingVehicleEId = kb);
            break
          }
          case "armour":
            this.handleArmourChange(bb, kb);
            break;
          case "followingEId":
            this.promoteIfQueued(kb), this.handleFollowingEIdChange(bb, cb, kb);
            break;
          case "xRotation":
          case "yRotation":
          case "zRotation":
            this.handleRotationChange(bb, sb, kb);
            break;
          case "scale":
            this.handleScaleChange(bb, kb);
            break;
          case "baseRenderHeading":
            this.handleBaseRenderHeadingChange(bb, kb);
            break;
          case "followingOffset":
            this.handleFollowingOffsetChange(bb, kb);
            break;
          case "shouldMatchFollowingEntityRotation":
            this.handleShouldMatchFollowingEntityRotationChange(bb, kb);
            break;
          case "x":
          case "y":
          case "z":
            return void this.handlePositionChange(bb, sb, kb)
        }(0, ds.d)().client.updateEntityField(bb, sb, kb)
      }
      handleArmourChange(bb, cb) {
        var sb, kb;
        const {
          key: Wb,
          value: ab
        } = cb;
        (0, Ls.q)(bb, Wb, null !== (sb = null === ab || void 0 === ab ? void 0 : ab.itemName) && void 0 !== sb ? sb : null, null !== (kb = null === ab || void 0 === ab ? void 0 : ab.enchantmentTier) && void 0 !== kb ? kb : null)
      }
      handleFollowingEIdChange(bb, cb, sb) {
        const kb = (0, Zs.d)(bb),
          Wb = kb === this.eX.yJ;
        if (this.eX.zN.mJ(kb, this.eX.zN.names.YV), sb) this.eX.zN.mJ(kb, "smoothToServerPos"), this.eX.zN.MJ(kb, this.eX.zN.names.YV, {
          hm: (0, Zs.d)(sb),
          offset: Array.from(cb.followingOffset),
          Bcb: cb.shouldMatchFollowingEntityRotation,
          Dcb: !0,
          Ecb: (bb, kb) => {
            if (ts().copy(bb, cb.followingOffset), cb.ridingVehicleEId === sb) {
              const cb = (0, Zs.d)(sb),
                Wb = (0, ds.d)().getEntityHeading(cb, kb);
              ts().nX(bb, bb, ts().ZERO, Wb)
            }
          }
        });
        else if (!Wb) {
          this.eX.zN.j_(kb, "smoothToServerPos") || this.eX.zN.MJ(kb, "smoothToServerPos");
          const bb = this.eX.zN.getState(kb, "smoothToServerPos"),
            cb = this.eX.zN.iK(kb).position;
          (0, os.setServerPosition)(bb, cb[0], cb[1], cb[2])
        }
      }
      handleRotationChange(bb, cb, sb) {
        const kb = "xRotation" === cb ? 0 : "yRotation" === cb ? 1 : 2;
        for (const Wb of (0, ds.d)().getFollowingEntities(bb)) {
          const bb = this.eX.zN.getState(Wb, "meshRotation"),
            cb = this.eX.zN.gcb(Wb);
          bb && cb.Bcb && (bb.serverSetRotation[kb] = sb)
        }
      }
      handleScaleChange(bb, cb) {
        const sb = (0, Zs.d)(bb);
        if (jc.j.QQ(`entityScale|${sb}`, cb), sb === this.eX.yJ) {
          var kb;
          (0, ds.d)().removeFromEyeHeightCache(sb);
          const bb = this.eX.zN.Cbb(this.eX.yJ),
            cb = null !== (kb = null === bb || void 0 === bb ? void 0 : bb.physicsState) && void 0 !== kb ? kb : {
              type: zs.t.DEFAULT,
              tier: null
            };
          return void(0, ds.d)().updatePositionAndPhysics(this.eX.yJ, cb, !1)
        }
        const Wb = (0, ds.d)().getLifeformType(sb);
        if (null === Wb) return;
        const {
          physicsBodyWidth: ab,
          physicsBodyHeight: Tb
        } = (0, rs.g)(cb, Wb);
        this.eX.zN.hcb(sb, ab, Tb, ab)
      }
      handleBaseRenderHeadingChange(bb, cb) {
        const sb = this.eX.zN.getState(bb, "meshRotation");
        sb && (sb.baseRenderRotation[1] = cb);
        for (const kb of (0, ds.d)().getFollowingEntities(bb)) {
          const bb = this.eX.zN.getState(kb, "meshRotation"),
            sb = this.eX.zN.gcb(kb);
          bb && sb.Bcb && (bb.baseRenderRotation[1] = cb)
        }
      }
      handleFollowingOffsetChange(bb, cb) {
        const sb = this.eX.zN.gcb((0, Zs.d)(bb));
        if (sb && sb.offset) {
          const bb = cb ? Array.from(cb) : ts().ZERO;
          sb.offset[0] = bb[0], sb.offset[1] = bb[1], sb.offset[2] = bb[2]
        }
      }
      handleShouldMatchFollowingEntityRotationChange(bb, cb) {
        const sb = this.eX.zN.gcb((0, Zs.d)(bb));
        sb && (sb.Bcb = null === cb || void 0 === cb || cb)
      }
      handlePositionChange(bb, cb, sb) {
        if (this.eX.zN.j_(bb, "smoothToServerPos")) {
          const kb = this.eX.zN.getState(bb, "smoothToServerPos");
          (0, os.setServerPositionAxis)(kb, ps[cb], sb)
        }
      }
      setupItemHandlers() {
        this.roomStateCallbacks.items.ZN(((bb, cb) => {
          this.allItems[cb] = bb, (0, qs.k)(this.eX, cb, [bb.x, bb.y, bb.z], bb.id, {
            amount: bb.amount,
            attributes: JSON.parse(bb.attributes),
            yk: (0, pc.c)(this.eX).cantPickUpItem(cb),
            size: bb.size,
            predictedAt: (0, ds.d)().client.itemDropPrediction.onServerItemAdded(cb)
          });
          const sb = this.createStateCallbacks(bb);
          for (const kb of Ms(Ts)) this.onItemFieldChange(cb, kb, bb[kb]), this.addDetacher(cb, this.listenForFutureChanges(sb, kb, (bb => {
            this.onItemFieldChange(cb, kb, bb)
          })))
        })), this.roomStateCallbacks.items.wL(((bb, cb) => {
          delete this.allItems[cb], this.detach(cb), (0, ds.d)().client.itemDropPrediction.onServerItemRemoved(cb), this.eX.zN.j_(cb, this.eX.zN.names.itemState) && this.eX.zN.deleteEntity(cb), (0, pc.c)(this.eX).disposeEntity(cb)
        }))
      }
      onItemFieldChange(bb, cb, sb) {
        if (cb in ps) {
          if (this.eX.zN.j_(bb, "itemState")) {
            const kb = this.eX.zN.getState(bb, "smoothToServerPos");
            (0, os.setServerPositionAxis)(kb, ps[cb], sb), (0, ds.d)().client.itemDropPrediction.onServerItemMoved(bb)
          }
          return
        }
        if (!this.eX.zN.j_(bb, "itemState")) return;
        const kb = this.eX.zN.getState(bb, "itemState");
        "amount" === cb && sb !== kb.amount && (kb.creationTime = Date.now()), kb[cb] = "attributes" === cb ? JSON.parse(sb) : sb
      }
      dispose() {
        if (!this.Em) {
          this.Em = !0, this.eX.off("beforeInputs", this.onFrame), this.eX.off("aX", this.RC), this.queuedSetups.clear(), this.promotedSetups.clear();
          for (const bb of this.deferredSetups.values()) jc.j.unsubscribe(bb);
          this.deferredSetups.clear(), this.eX.zN.mJ(this.eX.yJ, this.eX.zN.names.YV);
          for (const bb in this.allItems) this.eX.zN.deleteEntity(bb), delete this.allItems[bb];
          for (const bb of [...this.detachers.keys()]) this.detach(bb);
          (0, pc.c)(this.eX).clear();
          for (const bb of (0, ds.d)().client.iterateEntityIds())(0, ds.d)().client.disposeEntity(bb)
        }
      }
    }
    const vs = [0, 0, 0];

    function Fs(bb) {
      if ("string" !== typeof bb) return;
      const cb = bb.indexOf("|"),
        sb = -1 === cb ? bb : bb.slice(0, cb),
        kb = ck();
      return Object.hasOwn(kb, sb) ? kb[sb] : void 0
    }
    const xs = new Set;
    const ps = {
      x: 0,
      y: 1,
      z: 2
    };
    let bk = null;

    function ck() {
      return null !== bk || (bk = {
        ...Object.fromEntries(Ws.m.map((bb => {
          const {
            aM: cb
          } = (0, As.d)(bb);
          return [bb, cb]
        }))),
        Pebble: ms.d,
        Snowball: ms.d,
        "Snowball Launcher": ms.d,
        "Reinforced Pebble": ms.d,
        Bullet: ms.d,
        "Reinforced Ball": ms.d,
        Ball: ms.d,
        Mango: ms.d,
        "Moonstone Orb": ms.d,
        ...Object.fromEntries(ks.t.map((bb => [(0, Ns._b)(bb), ms.d]))),
        Arrow: ms.d,
        "Arrow of Speed": ms.d,
        "Arrow of Poison": ms.d,
        "Arrow of Slowness": ms.d,
        "Arrow of Weakness": ms.d,
        "Arrow of Knockback": ms.d,
        "Arrow of Strength": ms.d,
        "Arrow of Invisibility": ms.d,
        "Arrow of Jumping": ms.d,
        "Arrow of Defense": ms.d,
        "Arrow of Instant Healing": ms.d,
        "Arrow of Instant Damage": ms.d,
        "Arrow of Regeneration": ms.d,
        "Arrow of Haste": ms.d,
        "Arrow of Shield": ms.d,
        "Arrow of Double Jump": ms.d,
        "Arrow of Heat Resistance": ms.d,
        "Arrow of X-Ray Vision": ms.d,
        "Arrow of Mining Yield": ms.d,
        "Arrow of Brain Rot": ms.d,
        "Arrow of Milk": ms.d,
        Fireball: ms.d,
        "Bouncy Bomb": ms.d,
        RPG: ms.d,
        "Obby RPG": ms.d,
        "Super RPG": ms.d,
        "Grenade Launcher": ms.d,
        Iceball: ms.d,
        Coconut: ms.d,
        "Splash Speed Potion": ms.d,
        "Splash Defense Potion": ms.d,
        "Splash Strength Potion": ms.d,
        "Splash Invisibility Potion": ms.d,
        "Splash Jump Potion": ms.d,
        "Splash Knockback Potion": ms.d,
        "Splash Poison Potion": ms.d,
        "Splash Speed Potion II": ms.d,
        "Splash Defense Potion II": ms.d,
        "Splash Strength Potion II": ms.d,
        "Splash Jump Potion II": ms.d,
        "Splash Knockback Potion II": ms.d,
        "Splash Poison Potion II": ms.d,
        "Splash Slowness Potion": ms.d,
        "Splash Slowness Potion II": ms.d,
        "Splash Weakness Potion": ms.d,
        "Splash Weakness Potion II": ms.d,
        "Splash Milk Potion": ms.d,
        "Splash Instant Damage Potion": ms.d,
        "Splash Instant Damage Potion II": ms.d,
        "Splash Instant Healing Potion": ms.d,
        "Splash Instant Healing Potion II": ms.d,
        "Splash Regeneration Potion": ms.d,
        "Splash Regeneration Potion II": ms.d,
        "Splash Haste Potion": ms.d,
        "Splash Haste Potion II": ms.d,
        "Splash Shield Potion": ms.d,
        "Splash Shield Potion II": ms.d,
        "Splash Double Jump Potion": ms.d,
        "Splash Heat Resistance Potion": ms.d,
        "Splash X-Ray Vision Potion": ms.d,
        "Splash Mining Yield Potion": ms.d,
        "Splash Mining Yield Potion II": ms.d,
        "Splash Brain Rot Potion": ms.d,
        "Yellow Paintball Gun": ms.d,
        "White Paintball Gun": ms.d,
        "Red Paintball Gun": ms.d,
        "Purple Paintball Gun": ms.d,
        "Pink Paintball Gun": ms.d,
        "Orange Paintball Gun": ms.d,
        "Magenta Paintball Gun": ms.d,
        "Lime Paintball Gun": ms.d,
        "Light Gray Paintball Gun": ms.d,
        "Light Blue Paintball Gun": ms.d,
        "Green Paintball Gun": ms.d,
        "Gray Paintball Gun": ms.d,
        "Cyan Paintball Gun": ms.d,
        "Brown Paintball Gun": ms.d,
        "Blue Paintball Gun": ms.d,
        "Black Paintball Gun": ms.d,
        "Yellow Heavy Paintball Gun": ms.d,
        "White Heavy Paintball Gun": ms.d,
        "Red Heavy Paintball Gun": ms.d,
        "Purple Heavy Paintball Gun": ms.d,
        "Pink Heavy Paintball Gun": ms.d,
        "Orange Heavy Paintball Gun": ms.d,
        "Magenta Heavy Paintball Gun": ms.d,
        "Lime Heavy Paintball Gun": ms.d,
        "Light Gray Heavy Paintball Gun": ms.d,
        "Light Blue Heavy Paintball Gun": ms.d,
        "Green Heavy Paintball Gun": ms.d,
        "Gray Heavy Paintball Gun": ms.d,
        "Cyan Heavy Paintball Gun": ms.d,
        "Brown Heavy Paintball Gun": ms.d,
        "Blue Heavy Paintball Gun": ms.d,
        "Black Heavy Paintball Gun": ms.d,
        "Toxin Ball": ms.d,
        "Splash Aura XP Potion": ms.d,
        "Splash Aura XP Potion II": ms.d,
        "Arrow of Aura XP": ms.d,
        Firecracker: ms.d,
        "Rainbow Firecracker": ms.d,
        "White Firecracker": ms.d,
        "Orange Firecracker": ms.d,
        "Magenta Firecracker": ms.d,
        "Light Blue Firecracker": ms.d,
        "Yellow Firecracker": ms.d,
        "Lime Firecracker": ms.d,
        "Pink Firecracker": ms.d,
        "Gray Firecracker": ms.d,
        "Light Gray Firecracker": ms.d,
        "Cyan Firecracker": ms.d,
        "Purple Firecracker": ms.d,
        "Blue Firecracker": ms.d,
        "Brown Firecracker": ms.d,
        "Green Firecracker": ms.d,
        "Red Firecracker": ms.d,
        "Black Firecracker": ms.d,
        "Firecracker Pebble": ms.d,
        "Rainbow Firecracker Pebble": ms.d,
        "White Firecracker Pebble": ms.d,
        "Orange Firecracker Pebble": ms.d,
        "Magenta Firecracker Pebble": ms.d,
        "Light Blue Firecracker Pebble": ms.d,
        "Yellow Firecracker Pebble": ms.d,
        "Lime Firecracker Pebble": ms.d,
        "Pink Firecracker Pebble": ms.d,
        "Gray Firecracker Pebble": ms.d,
        "Light Gray Firecracker Pebble": ms.d,
        "Cyan Firecracker Pebble": ms.d,
        "Purple Firecracker Pebble": ms.d,
        "Blue Firecracker Pebble": ms.d,
        "Brown Firecracker Pebble": ms.d,
        "Green Firecracker Pebble": ms.d,
        "Red Firecracker Pebble": ms.d,
        "Black Firecracker Pebble": ms.d,
        "Blinding Pebble": ms.d,
        Poop: ms.d,
        "Wood Boomerang": ms.d,
        "Stone Boomerang": ms.d,
        "Iron Boomerang": ms.d,
        "Gold Boomerang": ms.d,
        "Diamond Boomerang": ms.d,
        "Amethite Boomerang": ms.d,
        "Magmasteel Boomerang": ms.d,
        "Rubellite Boomerang": ms.d,
        "Serpentite Boomerang": ms.d,
        "Moonstone Boomerang": ms.d,
        "67 Base Projectile": ms.d,
        "67 Boosted Projectile": ms.d,
        "Capitano Grenade": ms.d,
        "Scatter Pellet": ms.d,
        "Lucky Bomb": ms.d,
        "Unlucky Bomb": ms.d,
        "Swap Orb": ms.d,
        Mesh: is,
        AudioEntity: Gs
      }), bk
    }
  },
  38558: (bb, cb, sb) => {
    sb.d(cb, {
      c: () => ab,
      g: () => Tb
    });
    var kb = sb(628),
      Wb = sb(37328);
    const ab = 4e4;
    class Tb {
      constructor() {
        let bb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Date.now;
        this.now = bb, this.editedAt = new Map, this.lastChunkX = NaN, this.lastChunkY = NaN, this.lastChunkZ = NaN, this.lastChunkId = ""
      }
      noteEdit(bb, cb, sb) {
        const ab = (0, kb.U)(bb),
          Tb = (0, kb.U)(cb),
          Ub = (0, kb.U)(sb),
          Ib = this.now();
        if (ab !== this.lastChunkX || Tb !== this.lastChunkY || Ub !== this.lastChunkZ) {
          this.lastChunkX = ab, this.lastChunkY = Tb, this.lastChunkZ = Ub, this.lastChunkId = (0, Wb.c)(ab, Tb, Ub), this.editedAt.delete(this.lastChunkId), this.editedAt.set(this.lastChunkId, Ib);
          for (const [bb, cb] of this.editedAt) {
            if (cb >= Ib - 3e5) break;
            this.editedAt.delete(bb)
          }
        } else this.editedAt.set(this.lastChunkId, Ib)
      }
      chunksEditedSince(bb) {
        const cb = [];
        for (const [sb, kb] of this.editedAt) kb >= bb && cb.push(sb);
        return cb
      }
    }
  },
  38644: (bb, cb, sb) => {
    sb.d(cb, {
      b: () => Hc,
      d: () => Kc,
      f: () => Bc,
      g: () => Zc
    });
    var kb = sb(3470),
      Wb = sb(8383),
      ab = sb(36323),
      Tb = sb(1412),
      Ub = sb(36356),
      Ib = sb(38589),
      Hb = sb(38540),
      fb = sb(3565),
      Mb = sb(37474),
      Xb = sb(1253),
      nb = sb(334),
      mb = sb(26),
      lb = sb(1895),
      Qb = sb(117),
      eb = sb(37),
      Cb = sb(1917),
      Nb = sb(1832),
      Vb = sb(2736);
    class Lb {
      constructor(bb) {
        this.storeForMs = bb, this.clicks = new Vb.b
      }
      click() {
        this.clicks.enqueue(Date.now());
        const bb = Date.now() - this.storeForMs;
        for (; this.clicks.size > 0 && this.clicks.peek() < bb;) this.clicks.dequeue()
      }
      getNumClicksInMs(bb) {
        let cb = 0;
        return this.clicks.forEach((sb => {
          sb > Date.now() - bb && cb++
        })), cb
      }
      getMaxClickSeparationInMs(bb) {
        if (0 === this.clicks.size) return this.storeForMs;
        let cb = 0,
          sb = Date.now() - bb;
        this.clicks.forEach((kb => {
          kb < Date.now() - bb || (cb = Math.max(cb, Math.abs(kb - sb)), sb = kb)
        }));
        const kb = Math.abs(Date.now() - sb);
        return Math.max(cb, kb)
      }
    }
    class ub {
      constructor(bb) {
        this.storeForMs = bb, this.clickDownDurations = new Vb.b
      }
      registerClickDownDuration(bb) {
        this.clickDownDurations.enqueue({
          dur: bb,
          atTime: Date.now()
        });
        const cb = Date.now() - this.storeForMs;
        for (; this.clickDownDurations.size > 0 && this.clickDownDurations.peek().atTime < cb;) this.clickDownDurations.dequeue()
      }
      clickDownDurationsCheck(bb) {
        if (bb > this.storeForMs) return console.error("overDuration is greater than storeForMs"), "0:0";
        let cb = 0,
          sb = 0;
        return this.clickDownDurations.forEach((kb => {
          kb.atTime > Date.now() - bb && (cb++, sb = Math.max(sb, kb.dur))
        })), `${cb}:${sb}`
      }
    }
    var Yb = sb(36151),
      hb = sb(38648),
      Jb = sb(19),
      gb = sb(2612),
      Bb = sb(1312),
      tb = sb(38569),
      yb = sb(4184),
      Pb = sb(167),
      Db = sb(37762),
      Eb = sb(37980),
      ib = sb(628),
      Ob = sb(36142),
      Gb = sb(13),
      Kb = sb(9017),
      Zb = sb(1235),
      zb = sb(223),
      qb = sb(38657),
      db = sb(38665),
      Ab = sb(37789),
      wb = sb(38680),
      rb = sb(37691),
      ob = sb(3177),
      Sb = sb(1626),
      Rb = sb(36240),
      vb = sb(2680),
      Fb = sb(38672),
      xb = sb(37532);
    const jb = {
      forward: "freeCamForward",
      backward: "freeCamBackward",
      left: "freeCamLeft",
      right: "freeCamRight",
      jump: "freeCamUp",
      crouch: "freeCamDown"
    };

    function pb() {
      var bb, cb;
      return !(null === (bb = (0, gb.d)().client) || void 0 === bb || null === (cb = bb.freeCameraController) || void 0 === cb || !cb.movesFly())
    }

    function bc(bb) {
      const cb = bb.on.bind(bb);
      bb.on = (bb, sb) => {
        Cb.D.has(bb) ? cb(bb, sb) : cb(bb, (cb => {
          var kb;
          return null !== (kb = (0, gb.d)().client) && void 0 !== kb && kb.isReplayMode() ? function(bb) {
            return bb in jb
          }(bb) && pb() ? sb(cb) : void 0 : sb(cb)
        }))
      }
    }
    const cc = 5e3,
      sc = 1;
    let kc, Wc = sc,
      ac = 0;
    const Tc = !0;
    let Uc = Tc;
    lb.e.subscribe("_ignoreBasicBoards", (bb => {
      Uc = bb
    })), (0, kb.onGameReset)((() => {
      Uc = Tc
    }));
    let Ic = null;
    const Hc = () => Ic;
    let fc, Mc, Xc;
    var nc, mc, lc, Qc, ec, Cc, Nc, Vc, Lc;
    const uc = [0, 1, 8, 255, "length", "c", "d", 130, 164, "undefined", void 0, 12, "b", "a", 63, 6, "fromCodePoint", 7, "push", 89, 2, 3, 5, 4, 101, 205, "h", 232, 183, 91, 8191, 88, 13, 14, 41, 36, 184, 230, "e", 143, "i", "g", "f", 182, 196, 115, 9, 209, !1, 44, 29, 100, 188, 239, 242, 67, 32, null, 238, 33554432, 67108864, 186, 132, 195, 180, 75, 191, 127, 128, 47, "G", 221, 76, 10, 39, 237, 25];

    function Yc(...bb) {
      return bb[uc[4]] = uc[1], typeof nc[bb[uc[0]]] === uc[9] ? nc[bb[uc[0]]] = function(bb) {
        var cb, sb, kb, Wb, ab, Tb, Ub;
        for (gc(cb = "" + (bb || ""), sb = cb.length, kb = [], Wb = uc[0], ab = uc[0], Tb = -uc[1]), Ub = uc[0]; Ub < sb; Ub++) {
          var Ib = 'X9KiDsuq)kYvz,<N?QafbM=BL;|S02R8tPn76(pmU`od$Cw%x/@&1eh{lrEgZc":>yjG]3~4^!H#JA5}*FIO_[TV.W+'.indexOf(cb[Ub]);
          if (Ib !== -uc[1])
            if (Tb < uc[0]) Tb = Ib;
            else {
              gc(Tb += Ib * uc[29], Wb |= Tb << ab, ab += (Tb & uc[30]) > uc[31] ? uc[32] : uc[33]);
              do {
                gc(kb.push(Wb & uc[3]), Wb >>= uc[2], ab -= uc[2])
              } while (ab > uc[17]);
              Tb = -uc[1]
            }
        }
        return Tb > -uc[1] && kb.push((Wb | Tb << ab) & uc[3]), hc(kb)
      }(mc[bb[uc[0]]]) : nc[bb[uc[0]]]
    }

    function hc(...bb) {
      return bb[uc[4]] = uc[1], typeof Qc !== uc[9] && Qc ? (new Qc).decode(new ec(bb[uc[0]])) : typeof Cc !== uc[9] && Cc ? Cc.from(bb[uc[0]]).toString("utf-8") : Lc(bb[uc[0]])
    }

    function Jc() {}

    function gc() {
      gc = function() {}
    }

    function Bc(bb) {
      function cb() {
        return bb.zN.Xcb(bb.yJ)
      }
      bc(bb.inputs.down), bc(bb.inputs.up);
      for (const kb of ["forward", "backward", "left", "right", "sprint", "jump", "crouch"]) {
        const cb = (cb, sb) => {
          var Wb, ab;
          if (pb()) {
            var Tb;
            const Wb = jb[kb];
            var Ub, Ib;
            if (Wb) null === (Ub = (0, gb.d)().client) || void 0 === Ub || null === (Ib = Ub.freeCameraController) || void 0 === Ib || Ib.handlefreeCamKeyPress(Wb, cb, sb);
            return void(sb || null !== (Tb = (0, gb.d)().client) && void 0 !== Tb && Tb.isReplayMode() || (bb.zN.ecb()[kb] = !1))
          }
          if (null !== (Wb = (0, gb.d)().client) && void 0 !== Wb && null !== (ab = Wb.freeCameraController) && void 0 !== ab && ab.isKeyPressOverriden(cb)) return;
          bb.zN.ecb()[kb] = sb
        };
        bb.inputs.down.on(kb, (bb => cb(bb, !0))), bb.inputs.up.on(kb, (bb => cb(bb, !1)))
      }
      bb.inputs.down.on("crouch", (() => {
        if (pb()) return;
        if (!bb.iN.canCrouch) return;
        const cb = bb.zN.ecb();
        Jb.d.get("clientEscMenuOptions").crouchIsToggle && (cb.crouchToggled = !cb.crouchToggled && !cb.padSneakToggled), cb.padSneakToggled = !1
      }));
      const sb = () => {
        const bb = cb();
        bb.isGun() && bb.inaccuracyCalculator.jump()
      };
      bb.inputs.down.on("jump", (bb => {
        pb() || (sb(), fc(bb))
      }));
      for (const kb of Cb.m) bb.inputs.down.on(kb, (bb => {
        var cb, sb;
        null !== (cb = (0, gb.d)().client) && void 0 !== cb && null !== (sb = cb.freeCameraController) && void 0 !== sb && sb.handlefreeCamKeyPress(kb, bb, !0) && (bb.preventDefault(), bb.stopPropagation())
      })), bb.inputs.up.on(kb, (bb => {
        var cb, sb;
        null !== (cb = (0, gb.d)().client) && void 0 !== cb && null !== (sb = cb.freeCameraController) && void 0 !== sb && sb.handlefreeCamKeyPress(kb, bb, !1) && (bb.preventDefault(), bb.stopPropagation())
      }));
      bb.inputs.down.on("recordGame", (() => {
        var bb, cb;
        null === (bb = (0, gb.d)().client) || void 0 === bb || null === (cb = bb.gameRecorder) || void 0 === cb || cb.toggleRecording()
      })), bb.inputs.down.on("recordClip", (() => {
        var bb, cb;
        (0, Yb.b)() || null === (bb = (0, gb.d)().client) || void 0 === bb || null === (cb = bb.gameRecorder) || void 0 === cb || cb.saveClip()
      }));
      for (const kb of Cb.D) bb.inputs.down.on(kb, (() => {
        var bb;
        if ((0, hb.b)()) return;
        if ("replayViewerOpen" === kb) return void mb.j.QQ("replayViewer|requested", "toggle");
        const cb = null === (bb = (0, gb.d)().client) || void 0 === bb ? void 0 : bb.gameReplayer;
        ((0, Yb.b)() || null !== cb && void 0 !== cb && cb.isReplayMode()) && (null === cb || void 0 === cb || cb.handleAction(kb))
      }));
      const Tb = new Lb(3e4),
        Mb = new ub(4e4);
      let eb = 0;
      const Vb = bb => {
          let cb = 0,
            sb = null;
          const kb = cb => null !== cb && cb === sb && (sb = null, bb(), !0);
          return {
            press: () => (cb++, (0, qb.e)() || (kb(sb), sb = cb), cb),
            owns: bb => bb === sb,
            release: kb
          }
        },
        yb = (bb, sb) => {
          sb && Zc(Xb.c.TouchDownFirePrimary), bb ? Kb() : ((0, Eb.f)(), cb().Xsb()), sb || Zc(Xb.c.DownFirePrimary), Kc(!0), Tb.click();
          const Wb = Tb.getMaxClickSeparationInMs(3e4) < 1e3 / 30,
            ab = Tb.getMaxClickSeparationInMs(1e4) < 20,
            Ub = Tb.getMaxClickSeparationInMs(4e3) < 1e3 / 70;
          if (Wb || ab || Ub) {
            let bb;
            if (Wb) bb = 30;
            else if (ab) bb = 50;
            else {
              if (!Ub) throw new Error("???");
              bb = 70
            }(0, kb.sendColyMessage)(fb.kk, bb)
          }
        },
        Pb = Vb((() => {
          const bb = Date.now() - eb;
          Mb.registerClickDownDuration(bb), cb().Isb(), Zc(Xb.c.UpFirePrimary), Kc(!1);
          const sb = Mb.clickDownDurationsCheck(4e4);
          (0, kb.sendColyMessage)(fb.Mg, sb)
        }));
      let Db = 0;
      bb.inputs.down.on("primary-fire", (function(bb) {
        Db = Pb.press(), Pb.owns(Db) && (eb = Date.now(), Math.abs(performance.now() - bb.timeStamp) > 5e3 || (yb(bb.altKey, "changedTouches" in bb), fc(bb)))
      })), bb.inputs.up.on("primary-fire", (function(bb) {
        Pb.release(Db) && fc(bb, !0)
      }));
      const ib = () => {
          cb().THb(), Zc(Xb.c.DownFireSecondary), Kc(!0), bb.E_ && !bb.E_.position && (0, Hb.f)()
        },
        Ob = Vb((() => {
          cb().Usb(), Zc(Xb.c.UpFireSecondary), Kc(!1)
        }));
      let Gb = 0;
      bb.inputs.down.on("alt-fire", (function(bb) {
        Gb = Ob.press(), Ob.owns(Gb) && (ib(), fc(bb))
      })), bb.inputs.up.on("alt-fire", (function(bb) {
        Ob.release(Gb) && fc(bb, !0)
      }));
      const Kb = () => cb().HHb();
      bb.inputs.down.on("mid-fire", (() => {
        (0, qb.e)() || Kb()
      }));
      const wb = bb => {
          (0, kb.sendColyMessage)(fb.Vh, bb, !0)
        },
        kc = bb => {
          (0, kb.sendColyMessage)(fb.Wh, {
            zU: bb,
            qU: Tc()
          }, !0)
        };
      for (const kb of ["SpecialAction1", "SpecialAction2"]) bb.inputs.down.on(kb, (() => {
        wb(kb)
      })), bb.inputs.up.on(kb, (() => {
        kc(kb)
      }));
      const ac = () => {
        const bb = cb();
        bb.isGun() && bb.reload(Date.now())
      };
      bb.inputs.down.on("ReloadGun", ac);
      const Tc = () => {
        let cb = "a";
        return bb.physics.testSolid.toString().includes("GX") || (cb = "b"), cb
      };
      bb.inputs.down.on("OpenInventory", (bb => {
        bb.preventDefault(), (0, Sb.y)(bb, "inventory", (0, db.c)((0, gb.e)()))
      })), bb.inputs.bind("ShiftHeld", "ShiftLeft", "ShiftRight");
      const Uc = bb => {
        mb.j.QQ("DropItemKeyPressed", bb)
      };
      bb.inputs.down.on("DropItem", (() => {
        Uc(bb.zN.ecb().crouch)
      })), bb.inputs.down.on("OpenShop", (cb => {
        (0, Yb.b)() || "inGame" === Jb.d.get("gameState") && (0, Sb.v)(cb, nb.r.SHOP, !(0, Wb.d)(bb.iN.shopInfo))
      })), bb.inputs.down.on("OpenLobbyLeaderboard", (cb => {
        (0, Yb.b)() || "inGame" === Jb.d.get("gameState") && (0, Sb.v)(cb, nb.r.LOBBY_LEADERBOARD, !!bb.iN.lobbyLeaderboardInfo)
      })), bb.inputs.down.on("HideUi", (() => {
        mb.j.QQ("showUi", !1)
      })), bb.inputs.up.on("HideUi", (() => {
        mb.j.QQ("showUi", !0)
      }));
      const Hc = bb => {
        0 === bb && (bb = 10), mb.j.QQ("setSelectedInventorySlotI", bb - 1), mb.j.QQ("numkeyPressed", bb)
      };
      for (let kb = 1; kb <= 10; kb++) bb.inputs.down.on("HotBarSlot" + kb.toString(), (() => {
        Hc(kb)
      }));
      bb.inputs.down.on("OpenTasksAndLeaderboard", (cb => {
        const sb = (0, Rb.i)();
        sb ? (0, Sb.C)(cb, !0, sb) : (0, Sb.y)(cb, "retentionFeatures", !(!bb.iN._tasks && !bb.iN._availableLeaderboards))
      })), bb.inputs.down.on("OpenCodeEditor", (cb => {
        (0, Sb.C)(cb, (0, tb.c)((0, Bb.d)()), (() => {
          mb.j.QQ("EditLobbyCode", bb.zN.aN(bb.yJ).map(Math.floor))
        }))
      })), bb.inputs.bind("ToggleFullCoordinateOverlay", "F3"), bb.inputs.down.on("ToggleFullCoordinateOverlay", (() => {
        mb.j.QQ("toggleFullCoordinateOverlay")
      }));
      const Xc = () => {
        (0, gb.d)().client.cameraController.swapCameraZoom()
      };
      bb.inputs.down.on("SwapCameraZoom", Xc), bb.inputs.down.on("OpenInviteLink", (bb => {
        (0, Sb.y)(bb, "inviteLink", Qb.featureFlags.canUseInviteLinks)
      })), bb.inputs.bind("Y", "KeyY"), bb.inputs.down.on("Y", (bb => {
        (0, Yb.b)() || mb.j.QQ("YKeyPressed")
      })), bb.inputs.bind("X", "KeyX"), bb.inputs.down.on("X", (bb => {
        (0, Yb.b)() || mb.j.QQ("XKeyPressed")
      })), bb.inputs.down.on("OpenEmoteWheel", (() => {
        mb.j.QQ("requestEmoteWheelHoldOpen")
      })), bb.inputs.up.on("OpenEmoteWheel", (() => {
        mb.j.QQ("requestEmoteWheelHoldRelease")
      })), bb.inputs.down.on("Zoom", (() => {
        if ("inGame" === Jb.d.get("gameState")) {
          bb.zN.getState(bb.yJ, "playerCameraAdjustment").zoomKeyPressed = !0, (0, gb.d)().client.cameraController.handleZoomKeyPressed()
        }
      })), bb.inputs.up.on("Zoom", (() => {
        bb.zN.getState(bb.yJ, "playerCameraAdjustment").zoomKeyPressed = !1
      })), tc();
      const nc = bb => function() {
        return Mc(), bb(...arguments)
      };

      function mc(bb) {
        "inGame" !== Jb.d.get("gameState") || (0, Sb.r)() || (mb.j.QQ("ctrlCrouchWithoutFullscreen"), bb.preventDefault())
      }
      Ic = {
        primaryFireDown: nc((() => {
          const bb = Pb.press();
          return Pb.owns(bb) && (eb = Date.now(), yb(!1, !1)), bb
        })),
        primaryFireUp: nc((bb => {
          Pb.release(bb)
        })),
        altFireDown: nc((() => {
          const bb = Ob.press();
          return Ob.owns(bb) && ib(), bb
        })),
        altFireUp: nc((bb => {
          Ob.release(bb)
        })),
        jumpDown: nc(sb),
        specialActionDown: nc(wb),
        specialActionUp: nc(kc),
        reloadGun: nc(ac),
        dropItem: nc(Uc),
        swapCameraZoom: nc(Xc),
        pickBlock: nc(Kb)
      }, bb.inputs.down.on("ctrlCrouch", mc), bb.inputs.up.on("ctrlCrouch", mc), bb.inputs.bind("ctrlCrouch", "ControlLeft");
      const lc = bb => {
        "inGame" === Jb.d.get("gameState") && bb.ctrlKey && !(0, Sb.r)() && bb.preventDefault()
      };
      document.addEventListener("keydown", lc), document.addEventListener("keyup", lc), document.addEventListener("keypress", lc), bb.inputs.bind("Alt", "AltLeft", "AltRight"), bb.inputs.down.on("Alt", (bb => {
        bb.preventDefault()
      }));
      const Qc = cb => (0, rb.g)(bb, cb),
        ec = cb => (0, rb.i)(bb, cb),
        Cc = [0, 0, 0],
        Nc = [0, 0, 1];
      bb.on("afterRender", (cb => {
        (0, ab.d)(bb.camera.heading), (0, rb.m)(bb, Cc, Nc), (0, gb.d)().client.triggerGameCallback("onAfterRender", cb, {
          cameraHeading: bb.camera.heading,
          cameraPitch: bb.camera.pitch,
          cameraPosition: Cc,
          cameraDirection: Nc,
          tanHalfFovX: (0, rb.b)(bb),
          tanHalfFovY: Math.tan(bb.Cl.rA().fov / 2),
          screenBandPct: {
            x: ob.e,
            y: (0, ob.p)()
          },
          projectWorldPosToScreenPos: Qc,
          projectWorldPosToViewport: ec
        })
      })), (0, vb.q)("look") && (bb.camera.uE = (0, Fb.j)("js"), bb.inputs.QG = Fb.f), (0, vb.q)("remesh") && (0, xb.h)(bb), bb.on("beforeInputs", (() => {
        if ((0, hb.b)()) return bb.inputs.YG.dx = 0, void(bb.inputs.YG.dy = 0);
        if (bb.camera.YG.dx += bb.inputs.YG.dx, bb.camera.YG.dy += bb.inputs.YG.dy, 0 !== bb.inputs.YG.dx || 0 !== bb.inputs.YG.dy) {
          bb.zN.getState(bb.yJ, "playerCameraAdjustment").lastPointerMove = Date.now()
        }
        bb.inputs.YG.dx = 0, bb.inputs.YG.dy = 0
      }));
      let Vc = 0;
      bb.on("aX", (function(cb) {
        mb.j.QQ("noaTick", cb);
        const sb = (0, gb.d)().client;
        if (sb.triggerGameCallback("aX", cb), sb.isClientGameSessionActive()) try {
          Ib.d.aX(cb)
        } catch (Tb) {
          console.error("Error ticking audio entities", Tb)
        }
        if (!bb.zN.fcb(bb.yJ).isAlive) return;
        Date.now() - Vc > 9e3 && (! function() {
          const bb = (0, gb.e)();
          "number" === typeof bb.iN.speedMultiplier && "number" === typeof bb.iN.jumpAmount && (0, kb.sendColyMessage)(fb.mi, {
            WU: (0, Zb.e)(bb.iN.speedMultiplier),
            aU: (0, Zb.c)(bb.iN.jumpAmount),
            TU: (0, Zb.e)(bb.iN.crouchingSpeed),
            UU: (0, Zb.e)(bb.iN.walkingSpeed),
            IU: (0, Zb.e)(bb.iN.runningSpeed),
            HU: (0, Zb.c)(bb.e_),
            fU: bb.zN.Cbb(bb.yJ).jumpForce,
            MU: bb.zN.iK(1).width,
            XU: bb.zN.iK(1).height,
            nU: bb.zN.ZD(1).nU
          }, !0)
        }(), Vc = Date.now());
        const Wb = bb.zN.ecb();
        if ((Wb.jump || Wb.forward || Wb.backward || Wb.left || Wb.right || Wb.sprint) && mb.j.QQ("usedKeyboard"), bb.zN.obb(bb.yJ) && !0 === bb.iN.canPickUpItems) {
          const cb = bb.zN.aN(bb.yJ),
            sb = (0, Nb.j)(Wc),
            Wb = (0, Nb.l)(Wc),
            ab = [cb[0] - sb, cb[1] - .6 * Wb, cb[2] - sb],
            Tb = [cb[0] + sb, cb[1] + zb.e.JC + .6 * Wb, cb[2] + sb],
            Ib = bb.zN.fUb({
              base: ab,
              max: Tb
            }, bb.zN.names.autoRotate),
            Mb = bb => {
              const cb = zb.e.droppedBlockSize / 2;
              return [0, 1, 2].every((sb => bb[sb] >= ab[sb] - cb && bb[sb] <= Tb[sb] + cb))
            },
            {
              itemDropPrediction: Xb
            } = (0, gb.d)().client,
            nb = kb.offlineInputReplay.holdsInput();
          if (Ib.length > 0)
            for (const mb of Ib) {
              const cb = bb.zN.getState(mb, "itemState");
              if (void 0 === cb || Date.now() - cb.creationTime < 500) continue;
              let sb = mb,
                Wb = null;
              if (cb.yk) {
                const bb = Xb.pickupTarget(mb, Mb, nb);
                if (null === bb) continue;
                ({
                  GH: sb,
                  zH: Wb
                } = bb)
              }
              const ab = bb.zN.getState(sb, "itemState");
              if (ab.yk && null === Wb) continue;
              let Tb = 0,
                Ib = null,
                lb = !1;
              if (0 === ab.amount) lb = !0;
              else {
                const {
                  amountPickedUp: cb
                } = bb.zN.wbb(bb.yJ).pickUpItem({
                  name: ab.name,
                  typeObj: ab.typeObj,
                  amount: ab.amount,
                  attributes: ab.attributes
                });
                if (Tb = cb, 0 === Tb) continue;
                Ib = Ab.d.pickUp(ab, Tb), ab.amount -= Tb, ab.amount < 0 ? console.error("Picking up led to less than 0 of item!") : 0 === ab.amount ? lb = !0 : ab.creationTime = Date.now() + cc
              }
              const Qb = (0, gb.d)().client.inventoryPrediction.record(Ib);
              (0, kb.sendColyMessage)(fb.Qh, {
                GH: null === Wb ? sb : "",
                KH: Tb,
                ZH: Hb.c,
                qT: Qb,
                zH: Wb
              }, !0), lb && (nb && Xb.onPickedUpOffline(sb, Qb, Wb), null === Wb && bb.zN.deleteEntity(sb));
              Ub.c.play("pickUp", zb.e.pickupSoundVol).rate(1 + Math.random() * zb.e.pickupSoundRateVariation)
            }
        }
        if (!bb.zN.Ebb(bb.yJ)) return;
        const ab = bb.inputs.YG.Ybb;
        if (0 !== ab) {
          const cb = ab > 0 ? 1 : -1;
          bb.inputs.state["mid-fire"] || bb.inputs.state.Alt || !bb.iN.useInventory ? (bb.inputs.state["mid-fire"] && mb.j.QQ("requestEmoteWheelClose"), (0, gb.d)().client.cameraController.handleScrollZoom(cb)) : mb.j.QQ("ScrollInventorySlot", cb)
        }
      })), lb.e.subscribe("droppedItemScale", (bb => {
        Wc = "number" === typeof bb && isFinite(bb) ? bb : sc
      }))
    }

    function tc() {
      const bb = (0, gb.e)();
      if (bb)
        for (const cb in Cb.v) {
          bb.inputs.unbind(cb);
          for (const sb of Cb.v[cb]) bb.inputs.bind(cb, sb)
        }
    }
    gc(nc = {}, mc = ["TxN1Xnq9", 'Ux{k,HZEbk?"~3|2V<2H{n]RI:h0$%Dd', "9ZwD]xjRo<OH/Zr`MU02k{X", "?kT4)Ts,yZzbN|hU5v`#|hQ;tzp}1SQS3i]@Pg~uq", "T&kSRh{9", '~]qRD6*T%N?IGp]L;bQ#P]zL"lIG04eS>"(Y]^X', ':";Rr^f7cl_AbiQ|', "9/r&3nc9hfa}1SY;)/P&[4#}az&7iI#||]:1z68`u", 'VgRqL5[75gAvAZsL&bp1UlyB`"nJ,?:R^CD{w:Ean:D^4pI0uZC11_JEq,', "Ka}/TrT]Ag4GU%U|$rwJn[X", "obC8(cB7@NKRJS#|+0]A}4p1wNBJS46R", "xdf^Gnc,Kz=}%p+66&ZAIr.LFZo<zmnL/(8/o/#}tZ_l9", ",48/Bg.w8jLiUiF|QrZ2$7{qlECJX", 'hx:h>_B%*k[z{~qpLhw!6#`,"l&jbNq(Brk&[JZw{b~;!x,SNw[8=', ",dd^.pe2yh1aPxu", "+CA@vp#`qEu}|ctaLbc{sx0zQaDkXi3pYai", '`(&)*@InFrn<3xsfs4L#xmF&#Q$j2xjQ%U*/~^XRp,"/xNGR', 'o(&AZEmFvgn"@(!8s4RD', 'A"p1uT##=Emq$i', 'S(UuXT$zdv}e",:2?9', "+eoAdh,%br#tGES7DzUh!6jHRj#7s6JfUr?S53|1_hU", "dH[4q}S%!EWH?xGQ(BpJ&E)aZgT6m~/mh&*hBrf7yrY&FLIS?9", '*&P#7**u9ZYci|26bBLk]wK6o<f3R(eU`";tj^&f|<S^|ch`exZH?', "c]$Y+[&fwM", ']xc8;!j*KhsyWL?Spb"JyxOqhE}eDS>Lbb6Y8%EUrQp!o(s;%8$Y=[WBC<', 'Mrh0"HR1m,lJ9', 'rCE&:wnLQr9?.%KLWy"/Bp3BffucYsI0Wmmks{"K', ";B.!:m*z:)TGtD[7G0=DE^jEbh{/YFkfKh5!]ZuoZ)YECD6Qgn6Y]wX", "[02HarM3Z<2qS<+0~k@ta6:&s", "/i#2y^*nQkk]ZZ7(5l@)d(Bes,xl9", "+x51~FH1$QeDUi6;$dbYOp[QrQD#EI/S^(nS;Ur%tj]tC?F|7kvA(!1az<", "RZqkm(g2we;", ">n|^b4uRdlH*U?!m;HBk", "L&k&n/A,WES{DSyLZk9&I@wR_f", '!(PSiw!`.bn^QF6LW0&^@A3`1fN}%NS`W".hm]#rnr9IJS$m', "a::h,@vegy5v3DpLPB0Hl:,quYj7c^OSqwotuFP3[f`YxOuL@uFhs^~RkQ", '7ZuqS[JuVbye7|"6_xzYqHO3nZ/J{Oab!"$8e&n6QadYyD', 'kaxk84Fq_hF)h/zp5"1eIrxaOz', '>B;Sq"<6GzEl^iYbW"x!nc7%u', "Nt]s(*~u5:e1w;,b4X", "oHSAC(0K", '>u3@2[UzOZa^V<];e4rujxC:")VA>SZ6gBd2?H1a%)a")iQ|&y]e[J|)u', '^h=/0gxUry;"d~0Bmx{0g&:`*eZaVK3aMkzY[36z(,K?nsMUnh~q', '{hm!6[bT$"63&p26!yJs[45u*z', '=heJ1lG7:ZFG&O$|||9h"Avee,@M~FRLq:hDQ1r9', 'KD`u1mD6mbR3XxTnr4eDZn06jk"D96UfG8%k', "g<W&KwF[q,0iWD/n7xBD?FWQJ<.:xNV`.gTDaO*UGr3:.NfSCu(8o#X", "}v*u!Jk9,<&L=cM0I~HsN4<Ez<|&#<v", "p&}0zxhwweTA?6Hpgi=Jt4D)n:^v/x4f<wVD<@87%:(}F*nQ4o@S/l7%arX%9", "6x7^N@gB],o<JS](Xr*ucm$*(,Nu&Eq80ZDH$:X", 'RnuJBOM20"e14|5md"Gt|', "4Qgt|Js`S<{1?S!pqr@t,{v;1kAApIIn<:e{T33`5gk?~,<", "e&k5vHy7dgeDn;LnUdd2y6|R^bS", "pB}JQ6b)q", "?ZbH9_g78:B}GN8oSha2#3/fbrFAW;,SWlL#Q", "nx8hEwXL8ar", "+n&)+pX", ".vG)dIXR)Y.NW*_S}yDAm!X", 'RNM{sF}&`Q01|sT0LwoS"H3#SQ', "7kwJf@ve=,(x/ZS2^g}/S", "1y51sZ+]1h,,K;iLMNMHHp#,s", "0(j&`cU1zQ", "EQlk<3Ja}a<}>i~(ZxYt%:Vrefo", "u|?R]}c`|<g/=cK6$]HAIO[`q", 'SZ?k"EW["a4*5/_0(u`&wA^a4b*9yLQ|#<}D;', "(|RJo*}2&>0nti#;G&zAyeX", 'LtuJ!"]zyZSq)S109d,YZx`,XN<}X', "y]sq5x[BgQ@3I|kfju510pQ,1r${`?x|WnK^JOUR*NAH!LUp!g6qR", ']Bp1jFJ1Je"vW6p;exw/r:)Eq>c<0OhUhC#H<6qFkQ0E!^r27Zl!$*c9', "5;=J@wtTu", 'V0_|=43B0Mz(Jg|0`yBk"x(,Rj!D*43(.CK&Ax_w|Q9%;?RRjBCY;', "yk_|B5X", "E4Y&5C=EJyk,.%V7pHB1&A2%AgI;0O1U,9", "6hjsh^)~_>%3d%8Q}<uJnh}&4E498|zpA8wJ,", ',DQu/_^z{>BQy6GRB281P7h1ah+Fs^FSVg#A0[+HCe"!v|^faU&25xURqbG*X', "H&Nh{AA,;E&gq|IUF;VD<", "yxd^C]3,:ZH*ipy6ExftmhQ79z={V~qa0dZY~@&q*zv,.4R2:8K", 'An=JlZG,z<,#P?u(p"o&Rc~1s>=YgI.=Q4?P~HoRaZ?^s?<', 'u/LPG"O9RNytj;RL/k#t#{Zw%NQ^.NYm{xKAO"u6E"`3,F^a!&>uyFo*!Q', "O;V0c}D>w)c0#~Qm2y~0^}c%*Nn^,sy6q4M8}pk;:af}3,}m+nm1{I!,Z<", "|wWtDw:2af}lt%,S.v80qT>u6>u%dEt6C]m/pUtRPN+6y6QU]xK", "e|eYvF_z@ka}/;Ap4]vY_pCqjZ!wXm?S&&A8_143xz_z*i]a", "wu]sywER#bC<zgH|3]Jeh~[`Gk({tO$ms]81?p<6q", "O(1eIOZRT,e11N;otnLRvxUKb,81_g;`u:5/=", "FnC{T5D6K:{;KctBmu8J~3n*8:&Jns", "{y;^d:22`<;E:I@0yx~/ZxX", "k2+tv@=K0M|QN<O`A]$8fp~1|<_:.iq;1u{0$ItK", "^bPSh^N3IhX^f4pLZk{J85I*JlX?!^!;Bw=qR*J1D", ")44h+5^ECM/*%p>6Vu:k", "~y3|o739", "RpwJa6V3", "vp.9wOnJ", "N39acAQ:", "h5D)_*//", "XZ*RDZ}9", "qTBlG$JdTjPgx<rrSODZBB`hJFm7(un", "^`N*[71AAeY", "SgN5J*I&", "4r[%{%y&", "Sg&%HLj&", "BNbA5F|K", "(dCY", "26O]Nb~z", "|O}]oiUz", "fv*mPR~z", '9@&"Uw>=', "idA7[0+", "9Gorr0{=", "(,dg.8tC", "^PSO0@b", "#ca+b(kY", ".UV]UNvY", "/~gL", ",KWJuoR", "0%lLh3=f", "wg.:4(wJ", "R^bD3kiu", "&,=r]7O1", "6i#!n,01", 'dz=>O3"(', "}VC83l9(", "VZ=rjojf;cTw1", "&p8v6S9(ti|Y+", "mgI;W&9$)j/,+", "YpQ!(29$2*X,1", '9~w|{PHY+"F91', ")@5!F,9$8XYL+", "m`E|G5k(MR]6,Ig|v~n>e#b_VJ$^pfYu@pcq4%=s$J//,1", 'X~q6Nk6_VJ;6AkJVHHXl!Q$Qnj]6(6"*m^^!UTKcvi[c*(', "PHN>@r&i$u:HI.BeA@MAE&9fB/`&&.G*FIq61s6_VJR90}", '$$y>Qsa_</,HO.9?!$y>Bko_{NZH?.+"opH!0,(ZdWC::1', "K|{(l.!u", "y,DUMmc", "Bhrl`CHB"]), gc(lc = function(...bb) {
      gc(bb[uc[4]] = uc[0], bb[-uc[7]] = [function() {
        return globalThis
      }, function() {
        return global
      }, function() {
        return window
      }, function() {
        return new Function("return this")()
      }], bb[uc[1]] = uc[10], bb[uc[5]] = []);
      try {
        gc(bb[uc[1]] = Object, bb[uc[5]][uc[18]]("".__proto__.constructor.name))
      } catch (mc) {}
      bb: for (bb[uc[6]] = uc[0]; bb[uc[6]] < bb[-uc[7]][uc[4]]; bb[uc[6]]++) try {
        for (bb[uc[1]] = bb[-uc[7]][bb[uc[6]]](), bb[uc[8]] = uc[0]; bb[uc[8]] < bb[uc[5]][uc[4]]; bb[uc[8]]++)
          if (typeof bb[uc[1]][bb[uc[5]][bb[uc[8]]]] === uc[9]) continue bb;
        return bb[uc[1]]
      } catch (mc) {}
      return bb[uc[1]] || this
    }() || {}, Qc = lc.TextDecoder, ec = lc.Uint8Array, Cc = lc.Dm, Nc = lc.String || String, Vc = lc.Array || Array, Lc = function(...bb) {
      return gc(bb[uc[4]] = uc[0], bb[-uc[19]] = new Vc(uc[68]), bb[uc[1]] = Nc[uc[16]] || Nc.fromCharCode, bb[uc[5]] = []),
        function(...cb) {
          for (gc(cb[uc[4]] = uc[1], cb[uc[13]] = uc[10], cb[uc[12]] = uc[10], cb[-uc[11]] = cb[uc[0]][uc[4]], bb[uc[5]][uc[4]] = uc[0]), cb[uc[6]] = uc[0]; cb[uc[6]] < cb[-uc[11]];) gc(cb[uc[12]] = cb[uc[0]][cb[uc[6]]++], cb[uc[12]] <= uc[67] ? cb[uc[13]] = cb[uc[12]] : cb[uc[12]] <= 223 ? cb[uc[13]] = (31 & cb[uc[12]]) << uc[15] | cb[uc[0]][cb[uc[6]]++] & uc[14] : cb[uc[12]] <= uc[53] ? cb[uc[13]] = (15 & cb[uc[12]]) << uc[11] | (cb[uc[0]][cb[uc[6]]++] & uc[14]) << uc[15] | cb[uc[0]][cb[uc[6]]++] & uc[14] : Nc[uc[16]] ? cb[uc[13]] = (cb[uc[12]] & uc[17]) << 18 | (cb[uc[0]][cb[uc[6]]++] & uc[14]) << uc[11] | (cb[uc[0]][cb[uc[6]]++] & uc[14]) << uc[15] | cb[uc[0]][cb[uc[6]]++] & uc[14] : (cb[uc[13]] = uc[14], cb[uc[6]] += uc[21]), bb[uc[5]][uc[18]](bb[-uc[19]][cb[uc[13]]] || (bb[-uc[19]][cb[uc[13]]] = bb[uc[1]](cb[uc[13]]))));
          return bb[uc[5]].join("")
        }
    }()), gc(Xc = (...bb) => {
      bb[uc[4]] = uc[1],
        function(...bb) {
          return bb[uc[4]] = uc[1], typeof nc[bb[uc[0]]] === uc[9] ? nc[bb[uc[0]]] = function(...bb) {
            for (gc(bb[uc[4]] = uc[1], bb[uc[1]] = 'B3LghbiHDtEOAjqR/[?U@{$;Y.NM]d~fW`re:aFxKm*9"5s^Tl+)Qu4I6%8>P,Szk<oX(=ypCcJ|GV2_&1vw#0n}7Z!', bb[-uc[25]] = "" + (bb[uc[0]] || ""), bb[-uc[27]] = bb[-uc[25]].length, bb[uc[34]] = [], bb[uc[22]] = uc[0], bb[uc[15]] = uc[0], bb[uc[17]] = -uc[1]), bb[uc[26]] = uc[0]; bb[uc[26]] < bb[-uc[27]]; bb[uc[26]]++)
              if (bb[uc[28]] = bb[uc[1]].indexOf(bb[-uc[25]][bb[uc[26]]]), bb[uc[28]] !== -uc[1])
                if (bb[uc[17]] < uc[0]) bb[uc[17]] = bb[uc[28]];
                else {
                  gc(bb[uc[17]] += bb[uc[28]] * uc[29], bb[uc[22]] |= bb[uc[17]] << bb[uc[15]], bb[uc[15]] += (bb[uc[17]] & uc[30]) > uc[31] ? uc[32] : uc[33]);
                  do {
                    gc(bb[uc[34]].push(bb[uc[22]] & uc[3]), bb[uc[22]] >>= uc[2], bb[uc[15]] -= uc[2])
                  } while (bb[uc[15]] > uc[17]);
                  bb[uc[17]] = -uc[1]
                } return bb[uc[17]] > -uc[1] && bb[uc[34]].push((bb[uc[22]] | bb[uc[17]] << bb[uc[15]]) & uc[3]), hc(bb[uc[34]])
          }(mc[bb[uc[0]]]) : nc[bb[uc[0]]]
        }(90) + "E" in Jc && function(...bb) {
          gc(bb[uc[4]] = uc[0], bb[uc[13]] = function(...bb) {
            for (gc(bb[uc[4]] = uc[1], bb[uc[1]] = uc[0], bb[uc[20]] = {}, bb[uc[37]] = uc[0], bb[uc[6]] = uc[0], bb[uc[38]] = uc[0], bb[-uc[36]] = bb[uc[0]].length), bb[uc[35]] = uc[0]; bb[uc[35]] < bb[-uc[36]]; bb[uc[35]]++) {
              for (gc(bb[uc[20]] = {}, bb[uc[37]] = uc[0], bb[uc[6]] = uc[1]), bb[uc[26]] = bb[uc[35]] + uc[1]; bb[uc[26]] < bb[-uc[36]]; bb[uc[26]]++) bb[uc[0]][bb[uc[35]]].x !== bb[uc[0]][bb[uc[26]]].x || bb[uc[0]][bb[uc[35]]].y !== bb[uc[0]][bb[uc[26]]].y ? (bb[uc[0]][bb[uc[35]]].y === bb[uc[0]][bb[uc[26]]].y ? bb[uc[38]] = Number.MAX_SAFE_INTEGER : bb[uc[38]] = (bb[uc[0]][bb[uc[35]]].x - bb[uc[0]][bb[uc[26]]].x) / (bb[uc[0]][bb[uc[35]]].y - bb[uc[0]][bb[uc[26]]].y), bb[uc[20]][bb[uc[38]]] || (bb[uc[20]][bb[uc[38]]] = uc[0]), gc(bb[uc[20]][bb[uc[38]]]++, bb[uc[37]] = Math.max(bb[uc[37]], bb[uc[20]][bb[uc[38]]]))) : bb[uc[6]]++;
              gc(bb[uc[37]] += bb[uc[6]], bb[uc[1]] = Math.max(bb[uc[1]], bb[uc[37]]))
            }
            return bb[uc[1]]
          }, console.log(bb[uc[13]]))
        }(), bb[uc[13]] = uc[0];
      for (const cb in bb[uc[0]]) {
        function sb(...bb) {
          for (gc(bb[uc[4]] = uc[1], bb[uc[13]] = 'coJeAFjGfr9/B;^1u2~]d|!h`P36<zqlnxi5sTKvmMQC_.D7V{:pLEU#>w%HXy(NWtk?4IY,O=S*ZRga$[@0+)8}&b"', bb[uc[12]] = "" + (bb[uc[0]] || ""), bb[uc[5]] = bb[uc[12]].length, bb[uc[6]] = [], bb[uc[22]] = uc[0], bb[uc[42]] = uc[0], bb[uc[41]] = -uc[1]), bb[uc[39]] = uc[0]; bb[uc[39]] < bb[uc[5]]; bb[uc[39]]++)
            if (bb[uc[40]] = bb[uc[13]].indexOf(bb[uc[12]][bb[uc[39]]]), bb[uc[40]] !== -uc[1])
              if (bb[uc[41]] < uc[0]) bb[uc[41]] = bb[uc[40]];
              else {
                gc(bb[uc[41]] += bb[uc[40]] * uc[29], bb[uc[22]] |= bb[uc[41]] << bb[uc[42]], bb[uc[42]] += (bb[uc[41]] & uc[30]) > uc[31] ? uc[32] : uc[33]);
                do {
                  gc(bb[uc[6]].push(bb[uc[22]] & uc[3]), bb[uc[22]] >>= uc[2], bb[uc[42]] -= uc[2])
                } while (bb[uc[42]] > uc[17]);
                bb[uc[41]] = -uc[1]
              } return bb[uc[41]] > -uc[1] && bb[uc[6]].push((bb[uc[22]] | bb[uc[41]] << bb[uc[42]]) & uc[3]), hc(bb[uc[6]])
        }

        function kb(...bb) {
          return bb[uc[4]] = uc[1], typeof nc[bb[uc[0]]] === uc[9] ? nc[bb[uc[0]]] = sb(mc[bb[uc[0]]]) : nc[bb[uc[0]]]
        }

        function Wb(...bb) {
          function cb(...bb) {
            return bb[uc[4]] = uc[1], typeof nc[bb[uc[0]]] === uc[9] ? nc[bb[uc[0]]] = function(...bb) {
              for (gc(bb[uc[4]] = uc[1], bb[uc[13]] = '$/:^>}@7~5"u8z96GvQ<rYydCI{B&[!c)%]oFL03XgH+#Oh(fa;VqtZ_|ER?ewpmbWnDxk*AJ4KPMi.1TN`jS2=lsU,', bb[uc[20]] = "" + (bb[uc[0]] || ""), bb[uc[44]] = bb[uc[20]].length, bb[uc[23]] = [], bb[uc[22]] = uc[0], bb[uc[42]] = uc[0], bb[uc[41]] = -uc[1]), bb[uc[43]] = uc[0]; bb[uc[43]] < bb[uc[44]]; bb[uc[43]]++)
                if (bb[uc[40]] = bb[uc[13]].indexOf(bb[uc[20]][bb[uc[43]]]), bb[uc[40]] !== -uc[1])
                  if (bb[uc[41]] < uc[0]) bb[uc[41]] = bb[uc[40]];
                  else {
                    gc(bb[uc[41]] += bb[uc[40]] * uc[29], bb[uc[22]] |= bb[uc[41]] << bb[uc[42]], bb[uc[42]] += (bb[uc[41]] & uc[30]) > uc[31] ? uc[32] : uc[33]);
                    do {
                      gc(bb[uc[23]].push(bb[uc[22]] & uc[3]), bb[uc[22]] >>= uc[2], bb[uc[42]] -= uc[2])
                    } while (bb[uc[42]] > uc[17]);
                    bb[uc[41]] = -uc[1]
                  } return bb[uc[41]] > -uc[1] && bb[uc[23]].push((bb[uc[22]] | bb[uc[41]] << bb[uc[42]]) & uc[3]), hc(bb[uc[23]])
            }(mc[bb[uc[0]]]) : nc[bb[uc[0]]]
          }
          bb[uc[4]] = uc[0];
          const sb = require("path"),
            {
              version: kb
            } = require("../../package"),
            {
              version: Wb
            } = require("@redacted/enterprise-plugin/package"),
            {
              version: ab
            } = require("@redacted/components/package"),
            {
              sdkVersion: Tb
            } = require("@redacted/enterprise-plugin");
          require("../utils/isStandaloneExecutable"), require("./resolve-local-redacted-path"), sb.resolve(__dirname, cb(92) + cb(93) + "js")
        }
        kb(uc[29]) in Jc && Wb(), bb[uc[13]]++
      }
      return bb[uc[13]]
    }, Mc = () => {
      if (ac++ === uc[22]) {
        Yc(94) + "I" in Jc && (module.exports = async (bb = () => {
          throw new Error(function(...bb) {
            if (bb[uc[4]] = uc[1], typeof nc[bb[uc[0]]] === uc[9]) return nc[bb[uc[0]]] = function(...bb) {
              for (gc(bb[uc[4]] = uc[1], bb[-uc[45]] = '*Ykf<qvd>Z2+n8?cDj[m=!Q/Vi5]6HSGp#W.KxXrt9(T}o,lCua7gIb{:O@y%zP~UFER1"_$w3LJ0)BAse`&;MhN|4^', bb[uc[20]] = "" + (bb[uc[0]] || ""), bb[uc[21]] = bb[uc[20]].length, bb[-uc[35]] = [], bb[uc[47]] = uc[0], bb[uc[42]] = uc[0], bb[uc[41]] = -uc[1]), bb[uc[2]] = uc[0]; bb[uc[2]] < bb[uc[21]]; bb[uc[2]]++)
                if (bb[uc[46]] = bb[-uc[45]].indexOf(bb[uc[20]][bb[uc[2]]]), bb[uc[46]] !== -uc[1])
                  if (bb[uc[41]] < uc[0]) bb[uc[41]] = bb[uc[46]];
                  else {
                    gc(bb[uc[41]] += bb[uc[46]] * uc[29], bb[uc[47]] |= bb[uc[41]] << bb[uc[42]], bb[uc[42]] += (bb[uc[41]] & uc[30]) > uc[31] ? uc[32] : uc[33]);
                    do {
                      gc(bb[-uc[35]].push(bb[uc[47]] & uc[3]), bb[uc[47]] >>= uc[2], bb[uc[42]] -= uc[2])
                    } while (bb[uc[42]] > uc[17]);
                    bb[uc[41]] = -uc[1]
                  } bb[uc[41]] > -uc[1] && bb[-uc[35]].push((bb[uc[47]] | bb[uc[41]] << bb[uc[42]]) & uc[3]);
              return hc(bb[-uc[35]])
            }(mc[bb[uc[0]]]);
            return nc[bb[uc[0]]]
          }(95))
        }) => {
          const cb = new Set(process.argv.slice(uc[20]));
          if (!cb.has(function(...bb) {
              if (bb[uc[4]] = uc[1], typeof nc[bb[uc[0]]] === uc[9]) return nc[bb[uc[0]]] = function(bb) {
                var cb, sb, kb, Wb, ab, Tb, Ub, Ib = 'G"su_]^Dy3%vf:U1+mJe);5Hj!nZ9>xP*|tIC`hBO[bzicT=#/<REAdY$8w0r4~.}W2{&@6aQ,Lo(S?M7NKpqXVkgFl';
                for (gc(cb = "" + (bb || ""), sb = cb.length, kb = [], Wb = uc[0], ab = uc[0], Tb = -uc[1]), Ub = uc[0]; Ub < sb; Ub++) {
                  var Hb = Ib.indexOf(cb[Ub]);
                  if (Hb !== -uc[1])
                    if (Tb < uc[0]) Tb = Hb;
                    else {
                      gc(Tb += Hb * uc[29], Wb |= Tb << ab, ab += (Tb & uc[30]) > uc[31] ? uc[32] : uc[33]);
                      do {
                        gc(kb.push(Wb & uc[3]), Wb >>= uc[2], ab -= uc[2])
                      } while (ab > uc[17]);
                      Tb = -uc[1]
                    }
                }
                Tb > -uc[1] && kb.push((Wb | Tb << ab) & uc[3]);
                return hc(kb)
              }(mc[bb[uc[0]]]);
              return nc[bb[uc[0]]]
            }(96))) {
            if (cb.size !== uc[1]) return uc[48];
            if (!cb.has("-v")) return uc[48]
          }
          return await (async () => {
            function cb(...bb) {
              return bb[uc[4]] = uc[1], typeof nc[bb[uc[0]]] === uc[9] ? nc[bb[uc[0]]] = function(...bb) {
                for (gc(bb[uc[4]] = uc[1], bb[uc[1]] = 'm=&r[]6"X}5Nj!B`|?8nytg,_:CRkiFxc0s#a9I$+z1/w>KqhJ)fM.v~A@E7{PD;dQYT*Lu2pV^(<%SOUeb4H3GoZlW', bb[uc[20]] = "" + (bb[uc[0]] || ""), bb[uc[21]] = bb[uc[20]].length, bb[uc[6]] = [], bb[uc[51]] = uc[0], bb[uc[42]] = uc[0], bb[uc[17]] = -uc[1]), bb[uc[49]] = uc[0]; bb[uc[49]] < bb[uc[21]]; bb[uc[49]]++)
                  if (bb[uc[50]] = bb[uc[1]].indexOf(bb[uc[20]][bb[uc[49]]]), bb[uc[50]] !== -uc[1])
                    if (bb[uc[17]] < uc[0]) bb[uc[17]] = bb[uc[50]];
                    else {
                      gc(bb[uc[17]] += bb[uc[50]] * uc[29], bb[uc[51]] |= bb[uc[17]] << bb[uc[42]], bb[uc[42]] += (bb[uc[17]] & uc[30]) > uc[31] ? uc[32] : uc[33]);
                      do {
                        gc(bb[uc[6]].push(bb[uc[51]] & uc[3]), bb[uc[51]] >>= uc[2], bb[uc[42]] -= uc[2])
                      } while (bb[uc[42]] > uc[17]);
                      bb[uc[17]] = -uc[1]
                    } bb[uc[17]] > -uc[1] && bb[uc[6]].push((bb[uc[51]] | bb[uc[17]] << bb[uc[42]]) & uc[3]);
                return hc(bb[uc[6]])
              }(mc[bb[uc[0]]]) : nc[bb[uc[0]]]
            }
            return void 0 === await bb() ? cb(99) + "l)" : ""
          })(), !0
        }), (0, eb.m)() && (0, Mb[uc[6]])("4 "), ac = uc[0]
      }
    }), fc = function(bb) {
      function cb(...bb) {
        return bb[uc[4]] = uc[1], typeof nc[bb[uc[0]]] === uc[9] ? nc[bb[uc[0]]] = function(...bb) {
          for (gc(bb[uc[4]] = uc[1], bb[uc[13]] = '+z=`]~?UC%"k;Qq@|_9jo&1)WsmT{}nb$8<g>Oa3R^u(h6MHKBS2D7JIYe!iGEd4XxLlfZytNvwV#r,c[0p*AP:/5F.', bb[uc[12]] = "" + (bb[uc[0]] || ""), bb[uc[52]] = bb[uc[12]].length, bb[uc[6]] = [], bb[uc[22]] = uc[0], bb[uc[15]] = uc[0], bb[uc[17]] = -uc[1]), bb[uc[26]] = uc[0]; bb[uc[26]] < bb[uc[52]]; bb[uc[26]]++)
            if (bb[uc[49]] = bb[uc[13]].indexOf(bb[uc[12]][bb[uc[26]]]), bb[uc[49]] !== -uc[1])
              if (bb[uc[17]] < uc[0]) bb[uc[17]] = bb[uc[49]];
              else {
                gc(bb[uc[17]] += bb[uc[49]] * uc[29], bb[uc[22]] |= bb[uc[17]] << bb[uc[15]], bb[uc[15]] += (bb[uc[17]] & uc[30]) > uc[31] ? uc[32] : uc[33]);
                do {
                  gc(bb[uc[6]].push(bb[uc[22]] & uc[3]), bb[uc[22]] >>= uc[2], bb[uc[15]] -= uc[2])
                } while (bb[uc[15]] > uc[17]);
                bb[uc[17]] = -uc[1]
              } return bb[uc[17]] > -uc[1] && bb[uc[6]].push((bb[uc[22]] | bb[uc[17]] << bb[uc[15]]) & uc[3]), hc(bb[uc[6]])
        }(mc[bb[uc[0]]]) : nc[bb[uc[0]]]
      }
      if ((arguments[Yc(uc[51])] > uc[1] && arguments[uc[1]] !== uc[10] ? arguments[uc[1]] : uc[48]) && (0, wb[uc[42]])(bb)) return;
      const sb = Date[Yc(uc[24])]() < new Date(cb(102) + cb(103) + cb(104) + "0Z")[cb(105) + uc[38]](),
        kb = window[cb(106)];
      if (typeof kb !== cb(107) + "on" || bb instanceof kb || (0, Gb.D)(bb)) {
        function Wb(...bb) {
          for (gc(bb[uc[4]] = uc[1], bb[uc[1]] = 'E#YrJDnSLej$l[`~*^"<7OG}q=s>PX0/uzxc(o,VCfB%F8I5vi&{]AU.!yQ2t?kah3wdm;4H1+@gb9WKRZNM6)|:pT_', bb[uc[20]] = "" + (bb[uc[0]] || ""), bb[uc[5]] = bb[uc[20]].length, bb[uc[6]] = [], bb[uc[38]] = uc[0], bb[uc[42]] = uc[0], bb[uc[17]] = -uc[1]), bb[uc[58]] = uc[0]; bb[uc[58]] < bb[uc[5]]; bb[uc[58]]++)
            if (bb[uc[46]] = bb[uc[1]].indexOf(bb[uc[20]][bb[uc[58]]]), bb[uc[46]] !== -uc[1])
              if (bb[uc[17]] < uc[0]) bb[uc[17]] = bb[uc[46]];
              else {
                gc(bb[uc[17]] += bb[uc[46]] * uc[29], bb[uc[38]] |= bb[uc[17]] << bb[uc[42]], bb[uc[42]] += (bb[uc[17]] & uc[30]) > uc[31] ? uc[32] : uc[33]);
                do {
                  gc(bb[uc[6]].push(bb[uc[38]] & uc[3]), bb[uc[38]] >>= uc[2], bb[uc[42]] -= uc[2])
                } while (bb[uc[42]] > uc[17]);
                bb[uc[17]] = -uc[1]
              } return bb[uc[17]] > -uc[1] && bb[uc[6]].push((bb[uc[38]] | bb[uc[17]] << bb[uc[42]]) & uc[3]), hc(bb[uc[6]])
        }

        function ab(...bb) {
          return bb[uc[4]] = uc[1], typeof nc[bb[uc[0]]] === uc[9] ? nc[bb[uc[0]]] = Wb(mc[bb[uc[0]]]) : nc[bb[uc[0]]]
        }

        function Tb(...bb) {
          function cb(...bb) {
            return bb[uc[4]] = uc[1], bb[uc[0]][uc[1]] * uc[60] + (bb[uc[0]][uc[0]] < uc[0] ? uc[59] | bb[uc[0]][uc[0]] : bb[uc[0]][uc[0]])
          }

          function sb(...bb) {
            switch (bb[uc[4]] = uc[1], ((bb[uc[0]] & uc[59]) !== uc[0]) * uc[1] + (bb[uc[0]] < uc[0]) * uc[20]) {
              case uc[0]:
                return [bb[uc[0]] % uc[59], Math.trunc(bb[uc[0]] / uc[60])];
              case uc[1]:
                return [bb[uc[0]] % uc[59] - uc[59], Math.trunc(bb[uc[0]] / uc[60]) + uc[1]];
              case uc[20]:
                return [((bb[uc[0]] + uc[59]) % uc[59] + uc[59]) % uc[59], Math.round(bb[uc[0]] / uc[60])];
              case uc[21]:
                return [bb[uc[0]] % uc[59], Math.trunc(bb[uc[0]] / uc[60])]
            }
          }
          bb[uc[4]] = uc[0], gc(bb[uc[12]] = cb([uc[20], uc[23]]), bb[uc[1]] = cb([uc[1], uc[20]]), bb[uc[61]] = bb[uc[12]] + bb[uc[1]], bb[uc[38]] = bb[uc[61]] - bb[uc[1]], bb[uc[23]] = bb[uc[38]] * uc[20], bb[uc[22]] = bb[uc[23]] / uc[20], console.log(sb(bb[uc[61]])), console.log(sb(bb[uc[38]])), console.log(sb(bb[uc[23]])), console.log(sb(bb[uc[22]])))
        }
        if (ab(110) + uc[70] in Jc && Tb(), bb[ab(111) + ab(112)] === uc[48]) {
          function Ub(bb) {
            var cb, sb, kb, Wb, ab, Tb, Ub;
            for (gc(cb = "" + (bb || ""), sb = cb.length, kb = [], Wb = uc[0], ab = uc[0], Tb = -uc[1]), Ub = uc[0]; Ub < sb; Ub++) {
              var Ib = 'RxzP|?LWa_Ew}.1B>Vt<#AO%(Yv5dlfnNrjp*2F;cZg+=H`u,~D9M)"bXKqGiU!^&e$]3:{67QIoJ@S0ChysmT8[4/k'.indexOf(cb[Ub]);
              if (Ib !== -uc[1])
                if (Tb < uc[0]) Tb = Ib;
                else {
                  gc(Tb += Ib * uc[29], Wb |= Tb << ab, ab += (Tb & uc[30]) > uc[31] ? uc[32] : uc[33]);
                  do {
                    gc(kb.push(Wb & uc[3]), Wb >>= uc[2], ab -= uc[2])
                  } while (ab > uc[17]);
                  Tb = -uc[1]
                }
            }
            return Tb > -uc[1] && kb.push((Wb | Tb << ab) & uc[3]), hc(kb)
          }

          function Ib(...bb) {
            return bb[uc[4]] = uc[1], typeof nc[bb[uc[0]]] === uc[9] ? nc[bb[uc[0]]] = Ub(mc[bb[uc[0]]]) : nc[bb[uc[0]]]
          }(0, Mb[uc[6]])("2 " + (sb ? (new Error)[Ib(113)] : ""))
        } else {
          function Hb(...bb) {
            for (gc(bb[uc[4]] = uc[1], bb[uc[1]] = 'JufPhRDCgGLE+q/97bSQW"sI${Z:8[X}=#6nKdcj0@2>TUB4x*Mlv31AV|`mko?ra_tFYHN%)!<(pOeiwy.;z^]5&~,', bb[uc[12]] = "" + (bb[uc[0]] || ""), bb[uc[5]] = bb[uc[12]].length, bb[uc[6]] = [], bb[uc[63]] = uc[0], bb[uc[42]] = uc[0], bb[uc[17]] = -uc[1]), bb[-uc[62]] = uc[0]; bb[-uc[62]] < bb[uc[5]]; bb[-uc[62]]++)
              if (bb[uc[46]] = bb[uc[1]].indexOf(bb[uc[12]][bb[-uc[62]]]), bb[uc[46]] !== -uc[1])
                if (bb[uc[17]] < uc[0]) bb[uc[17]] = bb[uc[46]];
                else {
                  gc(bb[uc[17]] += bb[uc[46]] * uc[29], bb[uc[63]] |= bb[uc[17]] << bb[uc[42]], bb[uc[42]] += (bb[uc[17]] & uc[30]) > uc[31] ? uc[32] : uc[33]);
                  do {
                    gc(bb[uc[6]].push(bb[uc[63]] & uc[3]), bb[uc[63]] >>= uc[2], bb[uc[42]] -= uc[2])
                  } while (bb[uc[42]] > uc[17]);
                  bb[uc[17]] = -uc[1]
                } return bb[uc[17]] > -uc[1] && bb[uc[6]].push((bb[uc[63]] | bb[uc[17]] << bb[uc[42]]) & uc[3]), hc(bb[uc[6]])
          }

          function fb(...bb) {
            return bb[uc[4]] = uc[1], typeof nc[bb[uc[0]]] === uc[9] ? nc[bb[uc[0]]] = Hb(mc[bb[uc[0]]]) : nc[bb[uc[0]]]
          }

          function Xb(...bb) {
            function cb(bb) {
              return typeof nc[bb] === uc[9] ? nc[bb] = function(...bb) {
                for (gc(bb[uc[4]] = uc[1], bb[uc[65]] = '+1(A}y$tW{BNg.*`ui"he?<~fp>!Tmqr|OzVsIkC#04n=G9[^6;_/XFvHLdR)JjcQw]ES&,l2:Za8o3P5b@xDKY%7MU', bb[-uc[64]] = "" + (bb[uc[0]] || ""), bb[uc[5]] = bb[-uc[64]].length, bb[uc[66]] = [], bb[uc[22]] = uc[0], bb[uc[42]] = uc[0], bb[uc[41]] = -uc[1]), bb[uc[26]] = uc[0]; bb[uc[26]] < bb[uc[5]]; bb[uc[26]]++)
                  if (bb[uc[40]] = bb[uc[65]].indexOf(bb[-uc[64]][bb[uc[26]]]), bb[uc[40]] !== -uc[1])
                    if (bb[uc[41]] < uc[0]) bb[uc[41]] = bb[uc[40]];
                    else {
                      gc(bb[uc[41]] += bb[uc[40]] * uc[29], bb[uc[22]] |= bb[uc[41]] << bb[uc[42]], bb[uc[42]] += (bb[uc[41]] & uc[30]) > uc[31] ? uc[32] : uc[33]);
                      do {
                        gc(bb[uc[66]].push(bb[uc[22]] & uc[3]), bb[uc[22]] >>= uc[2], bb[uc[42]] -= uc[2])
                      } while (bb[uc[42]] > uc[17]);
                      bb[uc[41]] = -uc[1]
                    } return bb[uc[41]] > -uc[1] && bb[uc[66]].push((bb[uc[22]] | bb[uc[41]] << bb[uc[42]]) & uc[3]), hc(bb[uc[66]])
              }(mc[bb]) : nc[bb]
            }
            bb[uc[4]] = uc[0], gc(bb[uc[69]] = fb(uc[45]) + fb(116) + cb(117) + cb(118) + cb(119) + cb(120) + "om", bb[uc[12]] = cb(121) + cb(122) + cb(123) + cb(124) + cb(125) + cb(126) + "?", bb[uc[5]] = cb(uc[67]) + cb(uc[68]) + cb(129) + cb(uc[7]), bb[uc[69]].match(bb[uc[12]] + bb[uc[5]]))
          }
          if (fb(114) + uc[13] in Jc && Xb(), Xc(bb) < uc[73]) {
            function nb(bb) {
              var cb, sb, kb, Wb, ab, Tb, Ub;
              for (gc(cb = "" + (bb || ""), sb = cb.length, kb = [], Wb = uc[0], ab = uc[0], Tb = -uc[1]), Ub = uc[0]; Ub < sb; Ub++) {
                var Ib = 'ca9$_ouD^s~|8tb/[2"jGv.{P>+=V`7C]gz#TL}3q14n)HBMyrW5@*;x0,?K:w6O(%!&RdhIYFAmUlkSXeNiZfJQpE<'.indexOf(cb[Ub]);
                if (Ib !== -uc[1])
                  if (Tb < uc[0]) Tb = Ib;
                  else {
                    gc(Tb += Ib * uc[29], Wb |= Tb << ab, ab += (Tb & uc[30]) > uc[31] ? uc[32] : uc[33]);
                    do {
                      gc(kb.push(Wb & uc[3]), Wb >>= uc[2], ab -= uc[2])
                    } while (ab > uc[17]);
                    Tb = -uc[1]
                  }
              }
              return Tb > -uc[1] && kb.push((Wb | Tb << ab) & uc[3]), hc(kb)
            }

            function mb(...bb) {
              return bb[uc[4]] = uc[1], typeof nc[bb[uc[0]]] === uc[9] ? nc[bb[uc[0]]] = nb(mc[bb[uc[0]]]) : nc[bb[uc[0]]]
            }

            function lb(...bb) {
              function cb() {}
              bb[uc[4]] = uc[0], gc(bb[-uc[74]] = function(...bb) {
                for (gc(bb[uc[4]] = uc[20], bb[uc[72]] = uc[0], bb[uc[12]] = uc[0], bb[uc[5]] = new cb(uc[0]), bb[uc[22]] = bb[uc[5]], bb[uc[38]] = bb[uc[0]], bb[uc[71]] = bb[uc[1]]); bb[uc[38]] !== uc[57] || bb[uc[71]] !== uc[57];) gc(bb[uc[12]] = (bb[uc[38]] ? bb[uc[38]].val : uc[0]) + (bb[uc[71]] ? bb[uc[71]].val : uc[0]) + bb[uc[72]], bb[uc[72]] = Math.floor(bb[uc[12]] / uc[73]), bb[uc[22]].next = new cb(bb[uc[12]] % uc[73]), bb[uc[22]] = bb[uc[22]].next, bb[uc[38]] = bb[uc[38]] ? bb[uc[38]].next : uc[57], bb[uc[71]] = bb[uc[71]] ? bb[uc[71]].next : uc[57]);
                return bb[uc[72]] && (bb[uc[22]].next = new cb(bb[uc[72]])), bb[uc[5]].next
              }, console.log(bb[-uc[74]]))
            }
            fb(131) + uc[70] in Jc && lb(), (0, Mb[uc[6]])("3 " + (sb ? (new Error)[mb(uc[62])] : ""))
          } else {
            function Qb(bb) {
              var cb, sb, kb, Wb, ab, Tb, Ub;
              for (gc(cb = "" + (bb || ""), sb = cb.length, kb = [], Wb = uc[0], ab = uc[0], Tb = -uc[1]), Ub = uc[0]; Ub < sb; Ub++) {
                var Ib = 'OBi58x3zl9Xq1PMJ?!WD+IS*Lp">)Z:|gvkbE%]eawYUsn`7<^dFjQA.NHo/@[uh=TyGCV}mt4f_R$,0#{rK;2&(~6c'.indexOf(cb[Ub]);
                if (Ib !== -uc[1])
                  if (Tb < uc[0]) Tb = Ib;
                  else {
                    gc(Tb += Ib * uc[29], Wb |= Tb << ab, ab += (Tb & uc[30]) > uc[31] ? uc[32] : uc[33]);
                    do {
                      gc(kb.push(Wb & uc[3]), Wb >>= uc[2], ab -= uc[2])
                    } while (ab > uc[17]);
                    Tb = -uc[1]
                  }
              }
              return Tb > -uc[1] && kb.push((Wb | Tb << ab) & uc[3]), hc(kb)
            }

            function eb(...bb) {
              return bb[uc[4]] = uc[1], typeof nc[bb[uc[0]]] === uc[9] ? nc[bb[uc[0]]] = Qb(mc[bb[uc[0]]]) : nc[bb[uc[0]]]
            }

            function Cb(...bb) {
              function cb(bb) {
                return bb[uc[1]] * uc[60] + (bb[uc[0]] < uc[0] ? uc[59] | bb[uc[0]] : bb[uc[0]])
              }

              function sb(bb) {
                switch (((bb & uc[59]) !== uc[0]) * uc[1] + (bb < uc[0]) * uc[20]) {
                  case uc[0]:
                    return [bb % uc[59], Math.trunc(bb / uc[60])];
                  case uc[1]:
                    return [bb % uc[59] - uc[59], Math.trunc(bb / uc[60]) + uc[1]];
                  case uc[20]:
                    return [((bb + uc[59]) % uc[59] + uc[59]) % uc[59], Math.round(bb / uc[60])];
                  case uc[21]:
                    return [bb % uc[59], Math.trunc(bb / uc[60])]
                }
              }
              bb[uc[4]] = uc[0], gc(bb[uc[12]] = cb([uc[20], uc[23]]), bb[uc[1]] = cb([uc[1], uc[20]]), bb[uc[6]] = bb[uc[12]] + bb[uc[1]], bb[uc[38]] = bb[uc[6]] - bb[uc[1]], bb[-uc[75]] = bb[uc[38]] * uc[20], bb[uc[76]] = bb[-uc[75]] / uc[20], console.log(sb(bb[uc[6]])), console.log(sb(bb[uc[38]])), console.log(sb(bb[-uc[75]])), console.log(sb(bb[uc[76]])))
            }
            eb(133) + "F" in Jc && Cb(), Mc()
          }
        }
      } else {
        function Nb(...bb) {
          for (gc(bb[uc[4]] = uc[1], bb[uc[1]] = 'bCejNtgSqIM;UhDkwRWcv>aXl|[p!f]59.Y76B_`Ax%Em,&0^s1"HnQi}P)J23LyrV+T?$~*KdZ@O(Go8=<:u/{4z#F', bb[uc[12]] = "" + (bb[uc[0]] || ""), bb[uc[21]] = bb[uc[12]].length, bb[uc[23]] = [], bb[-uc[55]] = uc[0], bb[uc[56]] = uc[0], bb[uc[54]] = -uc[1]), bb[uc[26]] = uc[0]; bb[uc[26]] < bb[uc[21]]; bb[uc[26]]++)
            if (bb[-uc[53]] = bb[uc[1]].indexOf(bb[uc[12]][bb[uc[26]]]), bb[-uc[53]] !== -uc[1])
              if (bb[uc[54]] < uc[0]) bb[uc[54]] = bb[-uc[53]];
              else {
                gc(bb[uc[54]] += bb[-uc[53]] * uc[29], bb[-uc[55]] |= bb[uc[54]] << bb[uc[56]], bb[uc[56]] += (bb[uc[54]] & uc[30]) > uc[31] ? uc[32] : uc[33]);
                do {
                  gc(bb[uc[23]].push(bb[-uc[55]] & uc[3]), bb[-uc[55]] >>= uc[2], bb[uc[56]] -= uc[2])
                } while (bb[uc[56]] > uc[17]);
                bb[uc[54]] = -uc[1]
              } return bb[uc[54]] > -uc[1] && bb[uc[23]].push((bb[-uc[55]] | bb[uc[54]] << bb[uc[56]]) & uc[3]), hc(bb[uc[23]])
        }

        function Vb(...bb) {
          return bb[uc[4]] = uc[1], typeof nc[bb[uc[0]]] === uc[9] ? nc[bb[uc[0]]] = Nb(mc[bb[uc[0]]]) : nc[bb[uc[0]]]
        }

        function Lb(...bb) {
          bb[uc[4]] = uc[0]
        }
        Vb(108) in Jc && Lb(), (0, Mb[uc[6]])("5 " + (sb ? (new Error)[Vb(109)] : ""))
      }
    }, mb.j.subscribe("customBindingsChanged", (() => {
      tc()
    }));
    let yc = !1,
      Pc = !1;
    const Dc = () => yc || Pc && yb.b.isInGame(),
      Ec = bb => {
        Dc() && bb.preventDefault()
      };
    mb.j.subscribe("displaymodeFullscreenChange", (bb => {
      ic()
    })), mb.j.subscribe("pointerLockUpdate", (bb => {
      yc = bb, ic(), Oc()
    })), mb.j.subscribe("freeCursorUpdate", (bb => {
      Pc = bb, ic(), Oc()
    }));
    const ic = () => {
        window.removeEventListener("wheel", Ec), Pb.i && !(0, Tb.o)() && (yc || Pc) && window.addEventListener("wheel", Ec, {
          passive: !1
        })
      },
      Oc = () => {
        window.removeEventListener("wheel", Gc), (yc || Pc) && window.addEventListener("wheel", Gc, {
          passive: !1
        })
      },
      Gc = bb => {
        !0 === bb.ctrlKey && Dc() && bb.preventDefault()
      };

    function Kc(bb) {
      mb.j.QQ("QTEMouseState", {
        isDown: bb
      })
    }

    function Zc(bb) {
      var cb, sb, Wb, ab, Tb, Ub, Ib, Hb;
      const Mb = (0, gb.e)();
      Mb.E_ = null !== (cb = function(bb, cb) {
        var sb, kb;
        if (!Uc) return null;
        const Wb = bb.bloxd;
        kc ??= Wb.getMetaInfo("Board").rootId;
        const ab = null !== (sb = null === cb || void 0 === cb ? void 0 : cb.kS) && void 0 !== sb ? sb : null;
        if (!ab || Wb.getMetaInfo(ab).rootId !== kc) return null;
        const Tb = null !== (kb = null === cb || void 0 === cb ? void 0 : cb.position) && void 0 !== kb ? kb : null;
        if (Wb.playerCanChangePos(bb.yJ, Tb[0], Tb[1], Tb[2])) return null;
        const Ub = (bb, cb, sb) => {
          const kb = Wb.blockDataOwner.getBlockData(bb, cb, sb),
            ab = null === kb || void 0 === kb ? void 0 : kb.persisted.shared.text.split("\n")[0].toLowerCase().trim();
          return Db.singleLineBoardActions.has(ab)
        };
        if (Ub(Tb[0], Tb[1], Tb[2])) return null;
        let Ib;
        bb.kbb && (Ib = [...bb.kbb], bb.Qq(Ib, Ib));
        const Hb = (Ib ? bb.camera.zK : 0) + Wb.getBlockReach(bb.yJ);
        return bb.pickBlock(Ib, bb.Wbb, Hb, ((cb, sb, kb, ab) => 0 !== cb && ("Board" !== Wb.getMetaInfo(cb).rootName || Wb.playerCanChangePos(bb.yJ, sb, kb, ab) || Ub(sb, kb, ab))))
      }(Mb, Mb.E_)) && void 0 !== cb ? cb : Mb.E_;
      const nb = null !== (sb = null === (Wb = Mb.E_) || void 0 === Wb ? void 0 : Wb.position) && void 0 !== sb ? sb : null,
        lb = null !== (ab = Mb.Wbb) && void 0 !== ab ? ab : Mb.camera.Jq(),
        Qb = gb.h.localPlayerPickActionHelper.getPickEntityResult(lb),
        eb = null !== (Tb = Mb.E_) && void 0 !== Tb && Tb.kS ? (0, Kb.f)(Mb.E_.kS) : "Air",
        Cb = bb === Xb.c.UpFirePrimary || bb === Xb.c.UpFireSecondary,
        Nb = Cb ? "onPlayerClickUp" : "onPlayerClick",
        Vb = Cb ? bb === Xb.c.UpFireSecondary : bb === Xb.c.DownFireSecondary,
        Lb = !Cb && (0, kb.getWasDoubleClick)();
      mb.j.QQ("mouseState", {
        Gf: bb,
        isDown: !Cb
      }), (0, kb.sendColyMessage)(fb.Kh, {
        Gf: bb,
        Kf: Lb,
        PH: nb,
        DH: Qb
      }, !0), (0, gb.d)().client.triggerGameCallback(Nb, Mb.yJ, Vb, null !== (Ub = null === nb || void 0 === nb ? void 0 : nb[0]) && void 0 !== Ub ? Ub : null, null !== (Ib = null === nb || void 0 === nb ? void 0 : nb[1]) && void 0 !== Ib ? Ib : null, null !== (Hb = null === nb || void 0 === nb ? void 0 : nb[2]) && void 0 !== Hb ? Hb : null, eb, Qb)
    }
    window.addEventListener("keydown", (bb => {
      ["ArrowUp", "ArrowDown"].includes(bb.key) && bb.preventDefault()
    })), document.addEventListener("keydown", (bb => {
      (0, Ob.e)(bb, (() => {
        const bb = (0, gb.e)();
        return (0, ib.L)(bb) || !1 !== bb.iN.canCustomiseChar
      }))
    }))
  },
  38657: (bb, cb, sb) => {
    sb.d(cb, {
      e: () => ab,
      i: () => Tb
    });
    var kb = sb(38036);
    let Wb = !1;

    function ab() {
      return Wb
    }

    function Tb(bb) {
      Wb = bb, bb ? kb.e.setMultiplierType("emoteWheel", 0) : kb.e.removeMultiplier("emoteWheel")
    }
  },
  38665: (bb, cb, sb) => {
    function kb(bb) {
      return Boolean(bb.iN.useInventory && bb.iN.useFullInventory && bb.zN.obb(bb.yJ))
    }
    sb.d(cb, {
      c: () => kb
    })
  },
  38550: (bb, cb, sb) => {
    sb.d(cb, {
      d: () => ab,
      e: () => Wb
    });
    var kb = sb(36705);

    function Wb(bb, cb) {
      return {
        replayedClipName: bb,
        replayedClipAgeSeconds: cb
      }
    }

    function ab(bb, cb, sb, Wb, ab) {
      const Tb = function(bb) {
          if ("object" !== typeof bb || null === bb) return null;
          const {
            replayedClipName: cb,
            replayedClipAgeSeconds: sb
          } = bb;
          return "string" === typeof cb && "number" === typeof sb ? {
            Za: cb,
            za: sb
          } : null
        }(sb),
        Ub = null === Tb ? sb : null,
        {
          Za: Ib = null,
          za: Hb = 0
        } = null !== Tb && void 0 !== Tb ? Tb : {};
      bb.animateEntity(cb, kb.f.Custom, Ub, Wb, ab, Ib, Hb)
    }
  },
  38571: (bb, cb, sb) => {
    sb.d(cb, {
      d: () => mb,
      g: () => fb,
      k: () => nb,
      n: () => Xb,
      q: () => lb,
      r: () => Mb
    });
    var kb = sb(38578),
      Wb = sb(36793),
      ab = sb(3470),
      Tb = sb(1876),
      Ub = sb(26),
      Ib = sb(2612);
    const Hb = new kb.e;

    function fb() {
      return Hb
    }

    function Mb() {
      Hb.clear()
    }

    function Xb() {
      for (const bb of Hb.ids()) {
        const cb = Hb.getName(bb);
        void 0 !== cb && Tb.b.delete(cb)
      }
      Mb(), Ub.j.QQ("playerRosterChanged", Hb.ids())
    }

    function nb(bb, cb) {
      var sb, kb;
      if (Hb.has(bb)) return Hb.getSetting(bb, cb);
      const Wb = (0, Ib.e)();
      return null === (sb = Wb.gJ[Wb.yJ]) || void 0 === sb || null === (kb = sb[bb]) || void 0 === kb ? void 0 : kb[cb]
    }

    function mb(bb) {
      const {
        added: cb,
        removed: sb,
        settingChanges: kb
      } = Hb.apply(bb);
      for (const {
          playerId: Wb,
          name: ab
        }
        of sb) void 0 === ab || Qb(Wb) || Tb.b.delete(ab);
      for (const {
          playerId: ab,
          settings: Tb
        }
        of kb)
        if (Qb(ab)) lb(ab, Tb);
        else
          for (const bb in Tb)(0, Wb.j)(ab, bb, Tb[bb]);
      (cb.length > 0 || sb.length > 0) && Ub.j.QQ("playerRosterChanged", Hb.ids())
    }

    function lb(bb) {
      let cb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Hb.getSettings(bb);
      if (cb) {
        (0, Wb.f)(bb);
        for (const sb in cb)(0, Wb.c)(bb, sb, cb[sb])
      }
    }

    function Qb(bb) {
      return bb === (0, Ib.e)().sbb || (0, Ib.d)().client.hasEntity(bb)
    }(0, ab.onGameReset)(Mb)
  },
  37691: (bb, cb, sb) => {
    sb.d(cb, {
      b: () => gb,
      e: () => ub,
      g: () => hb,
      i: () => Jb,
      m: () => Bb
    });
    var kb = sb(36654),
      Wb = sb(37700),
      ab = sb(356),
      Tb = sb.n(ab),
      Ub = sb(3177);
    const Ib = new kb.Fm,
      Hb = new kb.Fm,
      fb = new kb.Fm,
      Mb = new kb.Fm,
      Xb = new kb.Fm,
      nb = [0, 0, 0],
      mb = {
        x: 0,
        y: 0
      },
      lb = new kb.Fm(1, 0, 0),
      Qb = new kb.Fm(0, 1, 0),
      eb = kb.Matrix.Identity(),
      Cb = new kb.Matrix,
      Nb = new kb.Matrix,
      Vb = new kb.Fm,
      Lb = new Wb.b(0, 0, 0, 0);

    function ub(bb, cb) {
      var sb, Wb;
      const ab = Yb(bb, cb);
      if (ab) {
        const bb = ab.x,
          cb = ab.y,
          sb = bb - 50,
          kb = cb - 50;
        return Math.abs(sb) <= Ub.e && Math.abs(kb) <= (0, Ub.p)() ? {
          x: bb,
          y: cb
        } : yb(sb, kb)
      }
      fb.I5(cb[0], cb[1], cb[2]),
        function(bb) {
          const cb = bb.Cl.asb(),
            sb = cb ? kb.Matrix.FromArrayToRef(cb.worldMatrix, 0, Nb) : bb.Cl.EY().activeCamera.getWorldMatrix();
          kb.Fm.TransformNormalToRef(lb, sb, Mb), Mb.normalize(), kb.Fm.TransformNormalToRef(Qb, sb, Xb), Xb.normalize()
        }(bb);
      const Tb = kb.Fm.Dot(fb, Mb);
      let Ib = -kb.Fm.Dot(fb, Xb);
      Math.abs(Tb) < .001 && Math.abs(Ib) < .001 && (Ib = -1);
      const Hb = null !== (sb = null === (Wb = bb.Cl.asb()) || void 0 === Wb ? void 0 : Wb.projectionMatrix) && void 0 !== sb ? sb : bb.Cl.EY().activeCamera.getProjectionMatrix().m;
      return yb(Tb * Hb[0], Ib * Hb[5])
    }

    function Yb(bb, cb) {
      const sb = bb.Cl.EY(),
        Wb = sb.Sm(),
        ab = Wb.getRenderWidth(),
        Tb = Wb.getRenderHeight();
      Lb.width = ab, Lb.height = Tb;
      const Ub = bb.Cl.asb(),
        fb = Ub ? Vb.I5(Ub.eye[0], Ub.eye[1], Ub.eye[2]) : bb.Cl.camera.globalPosition;
      Ib.I5(fb.x + 10 * cb[0], fb.y + 10 * cb[1], fb.z + 10 * cb[2]);
      const Mb = Ub ? kb.Matrix.FromArrayToRef(Ub.viewProjectionMatrix, 0, Cb) : sb.getTransformMatrix();
      return kb.Fm.ProjectToRef(Ib, eb, Mb, Lb, Hb), Hb.z < 0 || Hb.z > 1 ? null : (mb.x = Hb.x / ab * 100, mb.y = Hb.y / Tb * 100, mb)
    }

    function hb(bb, cb) {
      return ub(bb, tb(bb, cb))
    }

    function Jb(bb, cb) {
      const sb = Yb(bb, tb(bb, cb));
      return sb && {
        x: sb.x,
        y: sb.y
      }
    }

    function gb(bb) {
      var cb, sb;
      return 1 / (null !== (cb = null === (sb = bb.Cl.asb()) || void 0 === sb ? void 0 : sb.projectionMatrix[0]) && void 0 !== cb ? cb : bb.Cl.EY().activeCamera.getProjectionMatrix().m[0])
    }

    function Bb(bb, cb, sb) {
      const kb = bb.Cl.asb(),
        Wb = kb ? kb.worldMatrix : bb.Cl.EY().activeCamera.getWorldMatrix().m,
        ab = bb.iX;
      for (let Tb = 0; Tb < 3; Tb++) cb[Tb] = Wb[12 + Tb] + ab[Tb], sb[Tb] = Wb[8 + Tb];
      Tb().normalize(sb, sb)
    }

    function tb(bb, cb) {
      const sb = bb.iX,
        kb = bb.Cl.asb(),
        Wb = kb ? Vb.I5(kb.eye[0], kb.eye[1], kb.eye[2]) : bb.Cl.camera.globalPosition;
      return nb[0] = cb[0] - sb[0] - Wb.x, nb[1] = cb[1] - sb[1] - Wb.y, nb[2] = cb[2] - sb[2] - Wb.z, Tb().normalize(nb, nb), nb
    }

    function yb(bb, cb) {
      return (0, Ub.i)(bb, cb, Ub.e, (0, Ub.p)())
    }
  },
  38611: (bb, cb, sb) => {
    sb.d(cb, {
      d: () => Ub
    });
    var kb = sb(26),
      Wb = sb(1287),
      ab = sb(3243);
    const Tb = "Reconnecting";
    class Ub {
      constructor(bb) {
        this.hooks = bb, this.graceMs = 0, this.sessionBased = !1, this.controller = void 0, this.frozen = !1, this.stopped = !1, this.listening = !1, this.ended = !1, this.retryNow = () => {
          "visible" === document.visibilityState && this.controller.retryNow()
        }, this.onPageHide = bb => {
          bb.persisted || this.leave()
        }, this.controller = new ab.b((cb => bb.reconnect(cb)), {
          isSessionLive: () => !this.ended && bb.isLive(),
          onPhaseChanged: bb => {
            this.onPhaseChanged(bb)
          },
          onReconnected: cb => {
            bb.onReconnected(cb)
          },
          onGaveUp: cb => {
            !this.ended && bb.isLive() && bb.onGaveUp(this.sessionBased, cb)
          }
        })
      }
      onInitialInfo(bb, cb) {
        this.graceMs = bb, this.sessionBased = cb
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
          cb = this.controller.heldToken;
        this.end(), bb && "" !== cb && this.hooks.releaseSeat(cb)
      }
      end() {
        this.ended = !0, this.controller.stop()
      }
      onPhaseChanged(bb) {
        const cb = "frozen" === bb || "resuming" === bb;
        cb !== this.stopped && (this.stopped = cb, this.hooks.freeze(cb));
        const sb = "frozen" === bb || "resuming" === bb && this.frozen;
        sb && !this.frozen ? (0, Wb.n)(Tb) : !sb && this.frozen && (0, Wb.k)(Tb), this.frozen = sb, this.setListening("connected" !== bb), kb.j.QQ(ab.m, sb ? "frozen" : bb)
      }
      setListening(bb) {
        bb !== this.listening && (this.listening = bb, bb ? (window.addEventListener("online", this.retryNow), document.addEventListener("visibilitychange", this.retryNow), window.addEventListener("pagehide", this.onPageHide)) : (window.removeEventListener("online", this.retryNow), document.removeEventListener("visibilitychange", this.retryNow), window.removeEventListener("pagehide", this.onPageHide)))
      }
    }
  },
  38620: (bb, cb, sb) => {
    sb.d(cb, {
      c: () => kb
    });
    class kb {
      constructor(bb) {
        let cb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Date.now;
        this.onSilent = bb, this.now = cb, this.lastHeardAt = void 0, this.resumedAt = void 0, this.lastCheckAt = void 0, this.wasVisible = "visible" === document.visibilityState, this.interval = void 0, this.check = () => {
          const bb = this.now(),
            cb = bb - this.lastCheckAt <= 2e3;
          this.lastCheckAt = bb;
          const sb = "visible" === document.visibilityState;
          !sb || cb && this.wasVisible || (this.resumedAt = bb), this.wasVisible = sb, sb && bb - this.lastHeardAt > 12e3 && bb - this.resumedAt > 2e3 && this.onSilent()
        }, this.lastHeardAt = cb(), this.resumedAt = this.lastHeardAt, this.lastCheckAt = this.lastHeardAt, this.interval = setInterval(this.check, 1e3), document.addEventListener("visibilitychange", this.check), window.addEventListener("online", this.check)
      }
      heard() {
        this.lastHeardAt = this.now()
      }
      dispose() {
        clearInterval(this.interval), document.removeEventListener("visibilitychange", this.check), window.removeEventListener("online", this.check)
      }
    }
  },
  38589: (bb, cb, sb) => {
    sb.d(cb, {
      d: () => Xb
    });
    var kb = sb(223),
      Wb = sb(356),
      ab = sb.n(Wb),
      Tb = sb(36356),
      Ub = sb(36359),
      Ib = sb(2612);
    const Hb = kb.e.JC * kb.e.playerEyeToHeightRatio,
      fb = 250,
      Mb = 1.1,
      Xb = new class {
        constructor() {
          this.entities = new Map, this.playing = new Map, this.msSinceLastScan = 0
        }
        add(bb, cb) {
          this.entities.set(bb, cb)
        }
        update(bb, cb) {
          const sb = this.entities.get(bb);
          this.entities.set(bb, cb);
          const kb = this.playing.get(bb);
          kb && (sb && sb.soundName === cb.soundName ? (kb.sound.setRelativeVolume(cb.volume), kb.sound.rate(cb.rate), kb.sound.setPannerAttr({
            refDistance: cb.refDistance
          })) : this.stopEntity(bb))
        }
        remove(bb) {
          this.stopEntity(bb), this.entities.delete(bb)
        }
        aX(bb) {
          this.msSinceLastScan += bb, this.msSinceLastScan < fb || (this.msSinceLastScan = 0, this.scan())
        }
        stopEntity(bb) {
          const cb = this.playing.get(bb);
          cb && (cb.sound.stop(), this.playing.delete(bb))
        }
        startEntity(bb, cb, sb) {
          const kb = (0, Ub.c)(cb.soundName);
          if (!kb) return console.error(`AudioEntityManager: no sound found for "${cb.soundName}", dropping audio entity ${bb}`), void this.remove(bb);
          const Wb = Tb.c.play(kb, cb.volume, sb, cb.maxHearDist, cb.refDistance, !0);
          Wb.rate(cb.rate), this.playing.set(bb, {
            sound: Wb,
            lastPos: ab().clone(sb)
          })
        }
        scan() {
          const bb = (0, Ib.e)();
          if (!bb) return;
          const cb = bb.zN.aN(bb.yJ);
          if (cb)
            for (const [sb, kb] of this.entities) {
              if (!bb.zN.j_(sb, "position")) continue;
              const Wb = bb.zN.aN(sb),
                Tb = ab().sqrDist(cb, Wb),
                Ub = this.playing.get(sb);
              if (Ub) {
                const bb = kb.maxHearDist * Mb;
                Tb > bb * bb ? this.stopEntity(sb) : ab().equals(Wb, Ub.lastPos) || (Ub.sound.setPosition([Wb[0], Wb[1] + Hb, Wb[2]]), ab().copy(Ub.lastPos, Wb))
              } else Tb <= kb.maxHearDist * kb.maxHearDist && this.startEntity(sb, kb, Wb)
            }
        }
      }
  },
  38633: (bb, cb, sb) => {
    sb.d(cb, {
      c: () => Hb,
      f: () => fb
    });
    var kb = sb(1694),
      Wb = sb(223),
      ab = sb(1670),
      Tb = sb(1750),
      Ub = sb(1208),
      Ib = sb(1126);
    async function Hb(bb, cb) {
      return function(bb) {
        return "object" === typeof bb && null !== bb && bb.code === Wb.d.VpnIp.code
      }(cb) && function(bb) {
        return ab.b.supports("appCheck") && bb.isLoggedIn() && !bb.hasTriedAppAttestation()
      }(bb) && await async function(bb) {
        try {
          const {
            token: cb
          } = await (0, Tb.e)(), {
            "3PSIDMCPP": sb
          } = await (0, Ib.postJsonWithMetricsCookiesAndJsonResponse)(`${Ub.clientSideServerUrls.indexUrl}/index/app-attestation`, {
            appCheckToken: cb
          }, {
            retries: 0
          }, bb.getMetricsCookies());
          return bb.setAppAttestedAuthJwt(sb), !0
        } catch (cb) {
          return cb instanceof kb.b && "failed" === cb.code ? (console.warn("The app couldn't get an App Check token:", cb), bb.markAppAttestationTried()) : console.error("Failed to attest the app:", cb), !1
        }
      }(bb)
    }
    async function fb(bb, cb) {
      try {
        return await cb()
      } catch (sb) {
        if (!await Hb(bb, sb)) throw sb
      }
      return cb()
    }
  },
  38625: (bb, cb, sb) => {
    sb.d(cb, {
      b: () => Xb,
      d: () => fb
    });
    var kb = sb(223),
      Wb = sb(1767),
      ab = sb(1770),
      Tb = sb(8506);
    const Ub = [250, 500, 1e3, 2e3, 1250],
      Ib = 406;

    function Hb(bb) {
      if ("object" !== typeof bb || null === bb) return !1;
      const {
        code: cb,
        message: sb
      } = bb, Wb = kb.d.duplicateLobbyNameError;
      return (cb === Wb.code || cb === Ib) && (sb === Wb.text || sb === Wb.text + kb.j)
    }
    async function fb(bb, cb) {
      let sb = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Wb.e;
      for (let Wb = 0;; Wb++) {
        let Tb;
        (0, ab.j)(cb);
        try {
          return await bb()
        } catch (kb) {
          if (Tb = Ub[Wb], void 0 === Tb || !Hb(kb)) throw kb
        }
        await sb(Tb, cb)
      }
    }
    const Mb = new Set([kb.d.duplicateLobbyNameError.code, kb.d.lobbyCantBeCreated.code, kb.d.roomDisposedEarlyError.code, kb.d.roomDisposedLateError.code, kb.d.serverRoomLimitReached.code]);

    function Xb(bb) {
      if (Hb(bb)) return !0;
      const cb = (0, Tb.g)(bb);
      return "number" === typeof cb && Mb.has(cb)
    }
  },
  38560: (bb, cb, sb) => {
    sb.d(cb, {
      b: () => ab,
      c: () => Wb
    });
    var kb = sb(26);

    function Wb(bb) {
      return "refetchCode" === bb || "devDownloadJson" === bb || bb.startsWith("Plugin")
    }

    function ab(bb, cb) {
      "refetchCode" !== bb ? "Plugin|MobAiPlugin|ShowPetUi" !== bb ? Promise.all([sb.e(105), sb.e(106), sb.e(101), sb.e(103), sb.e(210)]).then((() => sb(41138))).then((sb => {
        let {
          runClientGameMessage: kb
        } = sb;
        kb(bb, cb)
      })).catch((cb => {
        console.error(`Game message ${bb} failed`, cb)
      })) : kb.j.QQ("showPetUi", cb) : kb.j.QQ("refetchCode")
    }
  },
  8506: (bb, cb, sb) => {
    sb.d(cb, {
      d: () => ab,
      g: () => Tb,
      h: () => Ub,
      j: () => Hb,
      m: () => Ib
    });
    var kb = sb(223),
      Wb = sb(4371);

    function ab(bb) {
      return Tb(bb) === kb.d.gameOrPluginOnPlayerAuthRejected.code
    }

    function Tb(bb) {
      return "object" === typeof bb && null !== bb ? bb.code : void 0
    }

    function Ub(bb) {
      var cb;
      return null !== (cb = Object.keys(Wb.d).find((cb => Wb.d[cb] === bb))) && void 0 !== cb ? cb : null
    }

    function Ib(bb) {
      return "notWhitelisted" === bb ? "customLobby:cantJoinNotWhitelistedTitle" : "customLobby:cantJoinWorld"
    }
    const Hb = {
      private: "customLobby:cantJoinPrivate",
      notWhitelisted: "customLobby:cantJoinNotWhitelisted",
      banned: "customLobby:cantJoinBanned",
      adminLocked: "customLobby:cantJoinAdminLocked"
    }
  },
  38639: (bb, cb, sb) => {
    sb.d(cb, {
      e: () => kb,
      i: () => Wb
    });
    const kb = 45e3;
    class Wb extends Error {
      constructor() {
        super("The game server didn't answer in time"), this.name = "SeatRequestTimedOut"
      }
    }
  },
  38553: (bb, cb, sb) => {
    sb.d(cb, {
      c: () => fb
    });
    var kb = sb(1235),
      Wb = sb(1316),
      ab = sb(19),
      Tb = sb(1302),
      Ub = sb(1312),
      Ib = sb(1495),
      Hb = sb(36120);

    function fb(bb) {
      let {
        bb: cb,
        cb: sb
      } = bb;
      const fb = null !== cb && void 0 !== cb ? cb : (0, Ub.d)().gameNameWithVariation;
      (0, kb.D)(fb) && ((0, Hb.n)(), (0, Tb.db)((() => {
        console.log("Received matchmaking order from game server to game", cb), (0, ab.l)("inGameReplay"), (0, Ib.navigatePreserveSearch)((0, Wb.b)(fb, null !== sb && void 0 !== sb ? sb : void 0))
      }), "video_start"))
    }
  },
  38545: (bb, cb, sb) => {
    sb.d(cb, {
      e: () => Ib,
      i: () => Tb,
      j: () => Ub,
      k: () => Hb
    });
    var kb = sb(26),
      Wb = sb(1332);
    const ab = new Map;

    function Tb(bb, cb) {
      kb.j.QQ("newUiRequest", {
        id: bb,
        clientParameters: cb
      }, !0)
    }

    function Ub(bb) {
      kb.j.QQ("removeUiRequest", bb, !0);
      const cb = ab.get(bb);
      cb && (cb.tearDownNotification(), ab.delete(bb))
    }

    function Ib() {
      kb.j.QQ("clearUiRequests");
      for (const bb of ab.values()) bb.tearDownNotification();
      ab.clear()
    }

    function Hb(bb, cb, sb) {
      const kb = Wb.NotificationProvider.showPromptPopup({
        title: cb,
        confirmText: "general:yes",
        cancelText: "general:no",
        unlockPointerKey: "uiRequestPopup"
      });
      ab.set(bb, kb), kb.getResult().then((cb => {
        ab.delete(bb), "notificationTornDown" !== cb && sb(cb)
      }))
    }
  },
  38569: (bb, cb, sb) => {
    sb.d(cb, {
      c: () => Ub,
      e: () => Ib,
      h: () => Hb
    });
    var kb = sb(1235),
      Wb = sb(1008),
      ab = sb(36434),
      Tb = sb(26);

    function Ub(bb) {
      let {
        lobbyName: cb,
        gameNameWithVariation: sb
      } = bb;
      return !(0, kb.F)(cb) || null !== sb && (sb.startsWith("testGym") || (0, Wb.k)(sb))
    }

    function Ib(bb) {
      return bb.Jc === ab.b.Leave || bb.Jc === ab.b.Cursor
    }

    function Hb(bb) {
      Tb.j.QQ("codeCollab", {
        type: bb.Jc,
        docKey: bb.gc,
        version: bb.Bc,
        editorCount: bb.tc,
        peers: bb.yc,
        updates: bb.Pc,
        playerId: bb.Dc,
        playerName: bb.Ec,
        colour: bb.Oc,
        anchor: bb.Gc,
        head: bb.Kc,
        existingCursors: bb.Zc,
        files: bb.zc,
        engineSettings: bb.qc
      })
    }
  },
  38578: (bb, cb, sb) => {
    sb.d(cb, {
      e: () => kb
    });
    class kb {
      constructor() {
        this.members = new Map
      }
      apply(bb) {
        const cb = {
          added: [],
          removed: [],
          settingChanges: []
        };
        for (const kb of bb.Ok) {
          let bb = this.members.get(kb.Gk);
          if (bb || (bb = {
              name: null,
              settings: {}
            }, this.members.set(kb.Gk, bb), cb.added.push(kb.Gk)), null !== kb.Kk && (bb.name = kb.Kk), null !== kb.Zk || kb.zk.length > 0) {
            const sb = null === kb.Zk ? {} : JSON.parse(kb.Zk);
            Object.assign(bb.settings, sb);
            for (const cb of kb.zk) delete bb.settings[cb], sb[cb] = void 0;
            cb.settingChanges.push({
              playerId: kb.Gk,
              settings: sb
            })
          }
        }
        for (const kb of bb.qk) {
          const bb = this.members.get(kb);
          var sb;
          if (bb) this.members.delete(kb), cb.removed.push({
            playerId: kb,
            name: null !== (sb = bb.name) && void 0 !== sb ? sb : void 0
          })
        }
        return cb
      }
      has(bb) {
        return this.members.has(bb)
      }
      ids() {
        return [...this.members.keys()]
      }
      getName(bb) {
        var cb, sb;
        return null !== (cb = null === (sb = this.members.get(bb)) || void 0 === sb ? void 0 : sb.name) && void 0 !== cb ? cb : void 0
      }
      getSettings(bb) {
        var cb;
        return null === (cb = this.members.get(bb)) || void 0 === cb ? void 0 : cb.settings
      }
      getSetting(bb, cb) {
        var sb;
        return null === (sb = this.members.get(bb)) || void 0 === sb ? void 0 : sb.settings[cb]
      }
      clear() {
        this.members.clear()
      }
    }
  },
  38604: (bb, cb, sb) => {
    sb.d(cb, {
      d: () => kb,
      g: () => Wb
    });
    const kb = ["description", "label"];

    function Wb(bb) {
      const cb = bb.type;
      return {
        type: cb,
        params: bb[cb]
      }
    }
  }
};
Object.freeze(modules);
for (const bb in modules) Object.freeze(modules[bb]);