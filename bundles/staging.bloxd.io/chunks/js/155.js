export const id = 155;
export const ids = [155];
export const modules = {
  38370: (bb, ab, Ub) => {
    Ub.d(ab, {
      c: () => Tb,
      e: () => Eb
    });
    var Ab = Ub(22);
    let Mb = !1;

    function Tb() {
      return Mb
    }

    function Eb(bb) {
      Mb !== bb && (Mb = bb, Ab.m.IR("replayViewer|videoExportChanged"))
    }
  },
  38268: (bb, ab, Ub) => {
    Ub.d(ab, {
      b: () => Tb
    });
    var Ab = Ub(22),
      Mb = Ub(1844);

    function Tb(bb) {
      let {
        taskId: ab,
        progress: Ub
      } = bb;
      const Ab = Mb.e.get("_tasks");
      null !== Ab && void 0 !== Ab && Ab[ab] && Mb.e.apply({
        _tasks: {
          ...Ab,
          [ab]: {
            ...Ab[ab],
            progress: Ub
          }
        }
      })
    }
    Ab.m.subscribe("clientTaskProgress", (bb => {
      Tb(bb)
    }))
  },
  38384: (bb, ab, Ub) => {
    Ub.d(ab, {
      b: () => Rb,
      f: () => kb,
      i: () => jb
    });
    var Ab = Ub(2621);
    const Mb = 0,
      Tb = 2,
      Eb = 3,
      Yb = 4;
    class Bb {
      constructor(bb, ab) {
        this.width = bb, this.PL = ab, this.data = void 0, this.next = 0, this.size = 0, this.data = new Float64Array(bb * ab)
      }
      push(bb) {
        let ab = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        const Ub = this.data.subarray(this.next * this.width, (this.next + 1) * this.width);
        for (let Ab = 0; Ab < this.width; Ab++) Ub[Ab] = bb[ab + Ab];
        return this.next = (this.next + 1) % this.PL, this.size = Math.min(this.size + 1, this.PL), Ub
      }
      lines() {
        const bb = [],
          ab = (this.next - this.size + this.PL) % this.PL;
        for (let Ub = 0; Ub < this.size; Ub++) {
          const Ab = (ab + Ub) % this.PL * this.width;
          bb.push(Array.from(this.data.subarray(Ab, Ab + this.width)).join(","))
        }
        return bb
      }
    }

    function eb(bb) {
      return Number.isFinite(bb) ? String(Math.round(10 * bb) / 10) : String(bb)
    }

    function vb(bb) {
      return Number.isFinite(bb) ? bb.toFixed(1) : String(bb)
    }
    class Lb {
      constructor() {
        this.frames = 0, this.looked = 0, this.idle = 0, this.Iq = 0, this.pastLimit = 0, this.lockSkips = 0, this.qR = 0, this.lost = 0, this.dropped = 0, this.longFrames = 0, this.dtMin = 1 / 0, this.dtMax = 0, this.dtSum = 0, this.raw = [0, 0], this.turned = [0, 0], this.peakRate = 0, this.events = 0, this.eventMax = 0, this.bigEvents = 0, this.outliers = 0, this.eventLines = 0, this.suppressed = 0
      }
    }
    class Pb {
      constructor() {
        var bb = this;
        this.tally = new Lb, this.records = new Bb(10, 3600), this.events = new Bb(4, 12e3), this.event = new Float64Array(4), this.take = null, this.client = "js", this.started = !1, this.record = function(ab) {
          let Ub = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
          const [Ab, Bb, Lb, Pb, Xb, jb, Rb, kb, yb, Zb] = bb.records.push(ab, Ub), Db = bb.tally;
          switch (Db.frames++, Rb) {
            case Mb:
              return void Db.idle++;
            case Yb:
              return void Db.qR++;
            case Eb:
              return Db.lockSkips++, void(0 === Lb && 0 === Pb || bb.outlier(`lock skip dropped raw (${eb(Lb)}, ${eb(Pb)}) at ${vb(Ab)} ms`))
          }
          Db.looked++, Number.isFinite(Bb) && (Db.dtMin = Math.min(Db.dtMin, Bb), Db.dtMax = Math.max(Db.dtMax, Bb), Db.dtSum += Bb, Bb > 0 && (Db.peakRate = Math.max(Db.peakRate, Math.hypot(Xb, jb) / Bb))), Db.raw[0] += Lb, Db.raw[1] += Pb, Db.turned[0] += Xb, Db.turned[1] += jb;
          const zb = Math.abs(Lb) > Zb || Math.abs(Pb) > Zb,
            xb = `raw (${eb(Lb)}, ${eb(Pb)}) over ${vb(Bb)} ms, limit ${eb(Zb)}, filter v (${kb.toFixed(3)}, ${yb.toFixed(3)}) px/ms, at ${vb(Ab)} ms`;
          Rb === Tb ? (Db.Iq++, bb.outlier(`spike put right: ${xb} -> turned (${eb(Xb)}, ${eb(jb)})`)) : zb ? (Db.pastLimit++, bb.outlier(`kept past limit: ${xb}`)) : Bb > 50 && (Db.longFrames++, bb.outlier(`long frame: ${xb}, turned in full`))
        }, this.onMouseMove = bb => {
          const ab = this.tally,
            {
              movementX: Ub,
              movementY: Ab
            } = bb;
          ab.events++;
          const Mb = Math.max(Math.abs(Ub), Math.abs(Ab));
          ab.eventMax = Math.max(ab.eventMax, Mb);
          const Tb = null !== document.pointerLockElement,
            Eb = this.event;
          Eb[0] = bb.timeStamp, Eb[1] = Ub, Eb[2] = Ab, Eb[3] = Tb ? 1 : 0, this.events.push(Eb), Mb >= 200 && (ab.bigEvents++, this.eventOutlier(`big mousemove (${Ub}, ${Ab}) at ${vb(bb.timeStamp)} ms, lock ${Tb?"PY":"free"}`))
        }, this.onLockChange = () => {
          const bb = document.pointerLockElement;
          (0, Ab.n)("look", `pointer lock ${bb?`gained (${bb.tagName.toLowerCase()})`:"lost"} at ${vb(performance.now())} ms`)
        }, this.onLockError = () => {
          (0, Ab.n)("look", `pointer lock request failed at ${vb(performance.now())} ms`)
        }, this.onVisibility = () => {
          (0, Ab.n)("look", `page ${document.visibilityState} at ${vb(performance.now())} ms`)
        }, this.flush = () => {
          this.takeRecords();
          const bb = this.tally;
          if (this.tally = new Lb, 0 === bb.events && 0 === bb.raw[0] && 0 === bb.raw[1] && 0 === bb.lockSkips && 0 === bb.Iq && 0 === bb.dropped) return;
          const ab = bb.looked > 0 ? bb.dtSum / bb.looked : NaN,
            Ub = [`${bb.frames} frames (${bb.looked} looked, ${bb.idle} idle${"wasm"===this.client?`, ${bb.qR} carried`:""})`, `dt avg ${vb(ab)} min ${vb(bb.dtMin)} max ${vb(bb.dtMax)}, ${bb.longFrames} long`, `${bb.events} mousemoves (max ${eb(bb.eventMax)} px, ${bb.bigEvents} big)`, `raw (${eb(bb.raw[0])}, ${eb(bb.raw[1])}) turned (${eb(bb.turned[0])}, ${eb(bb.turned[1])})`, `peak ${bb.peakRate.toFixed(2)} px/ms`, `put right ${bb.Iq}, past limit ${bb.pastLimit}, lock skips ${bb.lockSkips}`, "lock " + (document.pointerLockElement ? "PY" : "free")];
          bb.dropped > 0 && Ub.push(`${bb.dropped} doubled spike copies dropped`), bb.lost > 0 && Ub.push(`${bb.lost} records lost`), bb.suppressed > 0 && Ub.push(`${bb.suppressed} outlier lines not shown`), (0, Ab.n)("look", `1s: ${Ub.join("; ")}`)
        }, this.dump = () => [`look records (${this.client}): nowMs,dtMs,rawX,rawY,turnedX,turnedY,outcome,vX,vY,limit`, ...this.records.lines(), "mousemove events: timeStamp,movementX,movementY,locked", ...this.events.lines()].join("\n")
      }
      start(bb, ab) {
        this.client = bb, this.take = ab;
        const {
          screen: Ub
        } = window;
        (0, Ab.n)("look", `start: ${bb} client, dpr ${window.devicePixelRatio}, screen ${Ub.width}x${Ub.height}, pointer lock ${document.pointerLockElement?"PY":"free"}`), this.started || (this.started = !0, window.addEventListener("mousemove", this.onMouseMove, {
          capture: !0,
          passive: !0
        }), document.addEventListener("pointerlockchange", this.onLockChange), document.addEventListener("pointerlockerror", this.onLockError), document.addEventListener("visibilitychange", this.onVisibility), setInterval(this.flush, 1e3), (0, Ab.j)("look", this.dump))
      }
      outlier(bb) {
        const ab = this.tally;
        ab.outliers >= 20 ? ab.suppressed++ : (ab.outliers++, (0, Ab.n)("look", bb))
      }
      eventOutlier(bb) {
        const ab = this.tally;
        ab.eventLines >= 10 ? ab.suppressed++ : (ab.eventLines++, (0, Ab.n)("look", bb))
      }
      takeRecords() {
        var bb;
        const ab = null === (bb = this.take) || void 0 === bb ? void 0 : bb.call(this);
        if (ab && ab.length >= 2) {
          this.tally.lost += ab[0], this.tally.dropped += ab[1];
          for (let bb = 2; bb + 10 <= ab.length; bb += 10) this.record(ab, bb)
        }
      }
      droppedCopy() {
        this.tally.dropped++
      }
      endTake() {
        this.takeRecords(), this.take = null
      }
    }
    let Xb = null;

    function jb(bb) {
      let ab = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
      return Xb ??= new Pb, Xb.start(bb, ab), Xb.record
    }

    function Rb() {
      var bb;
      null === (bb = Xb) || void 0 === bb || bb.endTake()
    }

    function kb() {
      var bb;
      null === (bb = Xb) || void 0 === bb || bb.droppedCopy()
    }
  },
  38266: (bb, ab, Ub) => {
    Ub.d(ab, {
      b: () => ta,
      f: () => oa,
      j: () => la
    });
    var Ab = Ub(3347),
      Mb = Ub(166),
      Tb = Ub(205),
      Eb = Ub(595),
      Yb = Ub(31),
      Bb = Ub(2549),
      eb = Ub(3433),
      vb = Ub(3415),
      Lb = Ub(1162);
    const Pb = new WeakMap;
    class Xb {
      constructor(bb, ab) {
        let Ub = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {
          Aeb: !0
        };
        this.callbacks = ab, this.options = Ub, this.Sab = void 0, this.sessionId = void 0, this.vx = [], this.Meb = !1, this.cX = !1, this.Teb = void 0, this.Bx = 0, this.nAb = 0, this.Eeb = (bb, ab) => {
          if (this.cX) return;
          const Ub = Number(bb);
          this.Meb ? this.Yeb(Ub, ab) : this.vx.push({
            id: Ub,
            payload: ab
          })
        }, this.dispose = () => {
          this.cX || (this.cX = !0, Pb.delete(this), this.vx.length = 0, this.Teb())
        }, this.Sab = bb, this.sessionId = bb.sessionId, Pb.set(this, []), this.Teb = this.Beb()
      }
      eeb(bb) {
        this.Teb(), this.Sab = bb, this.sessionId = bb.sessionId, this.Bx = 0, this.nAb = 0, this.Teb = this.Beb()
      }
      get nD() {
        return this.nAb
      }
      Beb() {
        const bb = this.Sab.ZZ("*", this.Eeb);
        return this.options.Aeb && this.Sab.xZ(this.dispose), bb
      }
      Yeb(bb, ab) {
        try {
          (0, eb.ac)(bb) && (ab = (0, eb.c)(bb, vb.OX.from(ab)));
          const Ub = Pb.get(this)[bb];
          if ("function" !== typeof Ub) {
            if (this.callbacks.veb) return void this.callbacks.veb(bb, ab);
            throw new Error(`No onMessage handler registered for message id ${bb}`)
          }
          Ub(ab)
        } catch (Ub) {
          this.callbacks.Leb(`Error in onMessage ${bb} with payload ${JSON.stringify(ab)}`, Ub)
        } finally {
          this.Bx++
        }
      }
      Peb() {
        for (const {
            id: bb,
            payload: ab
          }
          of this.vx) {
          if (this.cX) break;
          this.Yeb(bb, ab)
        }
        this.vx.length = 0
      }
      Jab() {
        return this.cX
      }
      Xeb() {
        if (this.Meb || this.cX) throw new Error("Trying to getOnMessageRegistrationHandler after registration finished");
        return {
          ZZ: (bb, ab) => {
            if (this.Meb || this.cX) throw new Error("Trying to call onMessage after registration finished");
            this.ZZ(bb, ab)
          },
          finishRegistration: () => {
            if (this.cX) throw new Error("Cannot finish message registration after disposal");
            this.Meb = !0, this.Peb()
          }
        }
      }
      ZZ(bb, ab) {
        var Ub, Ab;
        null === (Ub = (Ab = this.callbacks).jeb) || void 0 === Ub || Ub.call(Ab);
        const Mb = Pb.get(this);
        for (; bb > Mb.length;) Mb[Mb.length] = null;
        Mb[bb] = ab
      }
      send(bb, ab) {
        this.Reb(), (0, Lb.J)(ab) ? this.Sab.Am(bb, ab) : this.Sab.send(bb, ab)
      }
      Reb() {
        var bb, ab;
        (this.nAb++, 5 === jb++) && (null === (bb = (ab = this.callbacks).jeb) || void 0 === bb || bb.call(ab), jb = 0)
      }
      Fk() {
        this.dispose(), this.Sab.Fk()
      }
      leave() {
        this.dispose(), this.Sab.leave()
      }
    }
    let jb = 0;
    var Rb = Ub(3364);
    class kb extends Xb {
      constructor(bb) {
        super(bb, {
          jeb: () => {
            (0, Yb.n)(!0) && (0, Ab.lD)()
          },
          Leb: (bb, ab) => {
            var Ub;
            null === (Ub = (0, Bb.h)()) || void 0 === Ub || Ub.bR(bb, ab)
          }
        }, {
          Aeb: !1
        }), (0, Rb.f)(bb)
      }
      Xx(bb, ab) {
        return !!(0, Rb.k)((0, Rb.c)(), this.Sab, bb, ab) && (this.Reb(), !0)
      }
      eeb(bb) {
        this.keb(), super.eeb(bb), (0, Rb.f)(bb)
      }
      Fk() {
        super.Fk(), this.keb()
      }
      keb() {
        this.Sab.Vk.rX.zN = void 0
      }
    }
    var yb = Ub(22),
      Zb = Ub(1844),
      Db = Ub(1639),
      zb = Ub(35900);

    function xb(bb, ab, Ub, Ab, Mb) {
      let Tb = arguments.length > 5 && void 0 !== arguments[5] && arguments[5];
      if (!bb.wZ.obb(bb.ZH)) return console.log("Got resync inven but don't have inven component"), void ab.acknowledge(Ab);
      Tb && console.error("Had to sync inven"), ab.u9(Ab, Mb) && Ub.IR("chestToggleFromServer", !1, !0), Ub.IR("syncedInvenFromServer")
    }
    var ib = Ub(38268),
      fb = Ub(38274),
      mb = Ub(37376),
      pb = Ub(37155),
      Nb = Ub(591),
      Wb = Ub(37745);

    function Hb(bb, ab, Ub) {
      const Ab = function(bb) {
          const ab = new Int32Array(bb.length * Wb.h);
          return bb.forEach(((bb, Ub) => {
            const Ab = Ub * Wb.h;
            if (4 === bb.length) {
              const [Ub, Mb, Tb, Eb] = bb;
              ab.set([Ub, Mb, Tb, Ub, Mb, Tb, Eb], Ab)
            } else {
              const [Ub, Mb, Tb, Eb, Yb, Bb, eb] = bb;
              ab.set([Ub, Tb, Yb, Mb, Eb, Bb, eb], Ab)
            }
          })), ab
        }(Ub),
        Mb = (ab, Ub, Ab, Mb) => {
          bb.setBlockNoMulti(ab, Ub, Ab, Mb, !0)
        };
      bb.client.gameRecorder.isCapturing() ? (0, Wb.rb)(Ab, (0, Wb.ob)(Ab), Mb) : bb.VL.lL.FQ(Ab, {
        Mq: Mb,
        isHookId: ab => bb.blockChangeHasHooks(ab),
        watched: () => function(bb, ab, Ub) {
          const Ab = [],
            Mb = (bb, ab, Ub) => {
              Ab.push(bb, ab, Ub)
            },
            Tb = new Set;
          for (let Eb = 0; Eb < Ub.length; Eb += Wb.h)
            for (let ab = (0, Nb.S)(Ub[Eb]); ab <= (0, Nb.S)(Ub[Eb + 3]); ab++)
              for (let Ab = (0, Nb.S)(Ub[Eb + 1]); Ab <= (0, Nb.S)(Ub[Eb + 4]); Ab++)
                for (let Yb = (0, Nb.S)(Ub[Eb + 2]); Yb <= (0, Nb.S)(Ub[Eb + 5]); Yb++) {
                  const Ub = `${ab}|${Ab}|${Yb}`;
                  Tb.has(Ub) || (Tb.add(Ub), bb.blockDataOwner.forEachDataCell(ab, Ab, Yb, Mb))
                }
          return ab.forEachCell(Mb), Int32Array.from(Ab)
        }(bb, ab, Ab)
      }), bb.VL.m_()
    }
    var Ib = Ub(36467),
      db = Ub(38283),
      Fb = Ub(38287),
      hb = Ub(950),
      Gb = Ub(1846);
    var Qb = Ub(4188);

    function qb(bb) {
      const ab = bb.lL;
      let Ub = 0,
        Mb = -1,
        Eb = -1 / 0,
        Yb = null,
        Bb = !0;
      const vb = () => {
        if (++Ub % 10 !== 0) return;
        const vb = (0, Ab.getLastReceivedPacketId)();
        if (vb <= Mb) return;
        const [Lb, Pb, Xb] = bb.wZ.eZ(bb.ZH), jb = ! function(bb) {
          var ab;
          let Ub = null === (ab = bb.wZ.Iab(bb.ZH)) || void 0 === ab ? void 0 : ab.tX;
          if (void 0 === Ub) return !1;
          const Ab = new Set;
          for (; void 0 !== Ub && !Ab.has(Ub);) {
            var Mb;
            Ab.add(Ub);
            const ab = bb.wZ.getState(Ub, "smoothToServerPos"),
              Tb = Array.isArray(ab) ? null : null === ab || void 0 === ab ? void 0 : ab.serverPosition;
            if (Tb) {
              const ab = bb.wZ.eZ(Ub);
              if (Math.abs(ab[0] - Tb[0]) > 10 || Math.abs(ab[1] - Tb[1]) > 10 || Math.abs(ab[2] - Tb[2]) > 10) return !0
            }
            Ub = null === (Mb = bb.wZ.Iab(Ub)) || void 0 === Mb ? void 0 : Mb.tX
          }
          return !1
        }(bb) && function(bb, ab, Ub, Ab) {
          const Mb = Tb.c.Mj;
          for (let Tb = 0; Tb < bb.length; Tb++) {
            const Eb = bb[Tb];
            if (!(0, Qb.g)(ab, Ub, Ab, Eb[0] * Mb, Eb[1] * Mb, Eb[2] * Mb)) return !1
          }
          return !0
        }(ab.HR.JX, Lb, Pb, Xb), Rb = null === Yb || Math.abs(Lb - Yb[0]) > 8 || Math.abs(Pb - Yb[1]) > 8 || Math.abs(Xb - Yb[2]) > 8, kb = !Bb || Rb || performance.now() - Eb >= 1e4;
        Bb = jb, jb && kb && (Mb = vb, Eb = performance.now(), Yb = [Lb, Pb, Xb], (0, Ab.sendColyMessage)(eb.gg, {
          Te: vb
        }))
      };
      return bb.on("qL", vb), () => {
        bb.off("qL", vb)
      }
    }
    var ub = Ub(36111),
      rb = Ub(333),
      Kb = Ub.n(rb),
      ob = Ub(6091),
      lb = Ub(37402),
      tb = Ub(37134),
      wb = Ub(37106),
      sb = Ub(4201),
      gb = Ub(37437),
      Cb = Ub(37262),
      Vb = Ub(36756),
      Ob = Ub(37021),
      cb = Ub(38291),
      Jb = Ub(36104),
      nb = Ub(36108),
      Sb = Ub(38296),
      ba = Ub(38298),
      aa = Ub(3324),
      Ua = Ub(1433),
      Aa = Ub(2543),
      Ma = Ub(2636),
      Ta = Ub(37595),
      Ea = Ub(36376),
      Ya = Ub(4462),
      Ba = Ub(38330),
      ea = Ub(37422),
      va = Ub(3942),
      La = Ub(36460),
      Pa = Ub(36552),
      Xa = Ub(37444),
      ja = Ub(38304),
      Ra = Ub(38316),
      ka = Ub(36747);
    class ya {
      constructor(bb, ab, Ub, Ab) {
        this.gameNameWithVariation = bb, this.VL = Ub, this.connectionResume = Ab, this.stateReplicationHandler = void 0, this.stopChunkReports = () => {}, this.replayResume = null, this.stateReplicationHandler = new Ra.d(ab, this.VL)
      }
      setupStateReplicationHandlers() {
        this.stateReplicationHandler.setup(), (0, Ab.onGameResetOnce)((() => {
          this.stateReplicationHandler.dispose()
        }))
      }
      eeb(bb) {
        this.stateReplicationHandler.dispose(), this.stateReplicationHandler = new Ra.d(bb, this.VL), this.stateReplicationHandler.setup()
      }
      clearBlockRules() {
        const bb = this.VL.lL;
        bb.rab = new Set, bb.wab = new Set, bb.Kab = new Set, bb.sab = new Set, bb.oab = [], bb.gab = [], bb.yG = new Set, bb.HT = [], bb.xG = []
      }
      clearUiRequestsAndQTEs() {
        Ya.e.reset(), (0, fb.d)()
      }
      startChunkReports() {
        const bb = function(bb) {
            let ab = null,
              Ub = -1 / 0,
              Mb = null;
            const Tb = () => {
                Mb = null;
                const Tb = Math.ceil(bb.Im[0]),
                  Eb = Math.ceil(bb.Im[1]);
                ab && ab[0] === Tb && ab[1] === Eb || (ab = [Tb, Eb], Ub = performance.now(), (0, Ab.sendColyMessage)(eb.eg, {
                  JT: Tb,
                  nT: Eb
                }))
              },
              Eb = () => {
                null === Mb && (Mb = setTimeout(Tb, Math.max(0, Ub + 250 - performance.now())))
              };
            return Tb(), bb.on("addRemoveDistanceChanged", Eb), () => {
              bb.off("addRemoveDistanceChanged", Eb), null !== Mb && (clearTimeout(Mb), Mb = null)
            }
          }(this.VL.lL),
          ab = qb(this.VL);
        this.stopChunkReports = () => {
          bb(), ab()
        }
      }
      restartChunkStreaming() {
        (0, Ob.k)(this.VL, (0, Bb.e)().recentChunkEdits.chunksEditedSince(this.connectionResume.getDroppedAt() - cb.c)), this.startChunkReports()
      }
      setupOnMessageListeners(bb, ab) {
        const Ub = this.VL,
          Mb = this.gameNameWithVariation;
        bb.ZZ(eb.ic, (bb => {
          let {
            bA: ab,
            aA: Ab,
            UA: Mb,
            AA: Tb,
            MA: Eb,
            TA: Yb,
            EA: Bb,
            YA: eb,
            BA: vb
          } = bb;
          if (!Ub.wZ.l_(ab, "itemState")) return void(0, tb.n)(Ub, ab, [Eb, Yb, Bb], Ab, {
            amount: Mb,
            attributes: JSON.parse(Tb),
            YA: eb,
            size: vb
          });
          const Lb = Ub.wZ.getState(ab, "itemState");
          Lb.amount = Mb, Lb.YA = eb, Lb.creationTime = Date.now(), (0, wb.setServerPosition)(Ub.wZ.getState(ab, "smoothToServerPos"), Eb, Yb, Bb)
        })), bb.ZZ(eb.Z, (bb => {
          (0, Ib.c)(Ub).setCantPickUp(bb, !0), Ub.wZ.l_(bb, "itemState") && (Ub.wZ.getState(bb, "itemState").YA = !0)
        })), bb.ZZ(eb.Od, (bb => {
          (0, Ib.c)(Ub).setCantPickUp(bb, !1), Ub.wZ.l_(bb, "itemState") && (Ub.wZ.getState(bb, "itemState").YA = !1)
        })), bb.ZZ(eb.Jc, (bb => {
          Zb.e.applyNewClientOptions(bb)
        })), bb.ZZ(eb.Mc, (bb => {
          let {
            eId: ab,
            settings: Ab
          } = bb;
          (0, Pa.i)(ab);
          for (const Ub in Ab)(0, Pa.e)(ab, Ub, Ab[Ub]);
          if ("canSee" in Ab && Ub.wZ.l_(ab, "hidingMeshManager")) {
            const bb = Ub.wZ.getState(ab, "hidingMeshManager");
            bb.canSee = (0, Xa.d)("canSee", Ab.canSee), bb._forceUpdate = !0
          }
        })), bb.ZZ(eb.Ve, (bb => {
          let {
            PU: ab,
            XU: Mb,
            jU: Tb,
            RU: Eb
          } = bb;
          const Yb = [Mb, Tb, Eb];
          Ub.wZ.setPosition(Ub.ZH, Yb), (0, Ab.sendColyMessage)(eb.Hg, {
            Yv: ab,
            Bv: sb.g
          }), yb.m.IR("localPlayerTeleported", {
            pos: Yb,
            isCorrection: !1
          })
        })), bb.ZZ(eb.Wc, (bb => {
          let {
            eM: ab,
            vM: Ub,
            LM: Ab,
            PM: Mb
          } = bb;
          this.stateReplicationHandler.setUpIfQueued(ab);
          const Tb = [Ub, Ab, Mb];
          yb.m.IR(`otherPlayerTeleported|${ab}`, {
            pos: Tb
          })
        })), bb.ZZ(eb.pd, (bb => {
          let {
            FM: ab,
            hM: Mb,
            GM: Tb,
            QM: Eb,
            qM: Yb,
            uM: Bb,
            rM: vb,
            oM: Lb,
            KM: Pb,
            wM: Xb
          } = bb;
          const jb = [Mb, Tb, Eb];
          Ub.wZ.setPosition(Ub.ZH, jb);
          const Rb = Ub.wZ.Rbb(Ub.ZH),
            kb = Ub.wZ.pG(Ub.ZH);
          Kb().set(kb.KF, 0, 0, 0), Kb().set(kb.lF, 0, 0, 0), Kb().set(kb.QR, Yb, Bb, vb), kb.sF(), Rb._flying = null !== Xb, Xb ? (Rb.flyAccel.sM = Xb.sM, Rb.flyAccel.gM = Xb.gM) : Rb.flyAccel.reset(), Lb && Rb.movementType === ob.o.GLIDING && (Rb.lM = Lb.lM, Kb().copy(Rb.tM, Lb.tM)), (0, Ab.sendColyMessage)(eb.Hg, {
            Yv: ab,
            Bv: sb.g
          }), yb.m.IR("localPlayerTeleported", {
            pos: jb,
            isCorrection: !0
          })
        }));

        function Tb() {
          return Ub.wZ.lbb(Ub.ZH)
        }
        bb.ZZ(eb.jb, (bb => {
          let {
            chatMsgId: ab,
            content: Ub,
            chatterEId: Ab
          } = bb;
          yb.m.IR("chat", {
            serverChatMsgId: ab,
            content: Ub,
            chatterEId: Ab
          }, !0)
        })), bb.ZZ(eb.fd, (bb => {
          Aa.d.onReceiveColyseusPing(bb)
        })), bb.ZZ(eb.xe, (bb => {
          let {
            key: ab,
            value: Ub
          } = bb;
          (0, Db.setCookie)(Mb, ab, Ub)
        })), bb.ZZ(eb.Ae, (bb => {
          yb.m.IR("setDiscordReportKey", bb)
        })), (0, Ab.onGameResetOnce)((() => {
          this.stopChunkReports()
        })), bb.ZZ(eb.cc, (ab => {
          const {
            Va: Mb,
            Oa: Tb
          } = ab;
          if ((0, Ab.setAdjustment)(Tb), this.connectionResume.onInitialInfo(ab.ca, ab.Ja), Ab.offlineInputReplay.Yz(ab.na), this.connectionResume.isResuming()) {
            console.log("Resumed the connection as eId", Mb);
            try {
              null === ab.Sa && (0, Bb.e)().client.inventoryPrediction.dropPending(), this.stopChunkReports(), this.clearBlockRules(), Zb.e.apply({
                shopInfo: null,
                _shopVersion: Gb.b
              });
              const Ab = Ub.wZ.tbb(Ub.ZH);
              Ab.hU && (Ab.chestClosed(), yb.m.IR("chestToggleFromServer", !1, !0)), this.clearUiRequestsAndQTEs(), yb.m.IR("initInfoReceived", bb)
            } finally {
              const bb = null === ab.Sa ? null : {
                sync: null,
                endSeq: null
              };
              this.replayResume = bb, this.connectionResume.onResumeInitialInfo(ab.Sa, (() => {
                bb.endSeq = (0, Bb.e)().client.inventoryPrediction.lastActionSeq
              })), null === bb && this.restartChunkStreaming()
            }
          } else console.log("Local client is eId", Mb), yb.m.IR("loadingScreenState", "loadingPage:loadingWorld"), Ub.n_ = Mb, Ub.wZ.l_(Ub.ZH, Ub.wZ.names.entityName) && Ub.wZ.rW(Ub.ZH, Ub.wZ.names.entityName), (0, Bb.e)().setEntityName(Ub.n_, (0, Bb.e)().getRawEntityName(Ub.ZH)), Ub.jH[Ub.n_] = {}, Ub.wZ.FW(Ub.ZH, Ub.wZ.names.entityName), yb.m.IR("initInfoReceived", bb), this.startChunkReports(), Eb.client.onServerConnectionFinalised()
        })), bb.ZZ(eb.de, (() => {
          this.connectionResume.isResuming() ? this.connectionResume.onResumed((() => {
            const bb = this.replayResume;
            if (this.replayResume = null, !bb) return;
            this.restartChunkStreaming();
            const {
              inventoryPrediction: ab
            } = (0, Bb.e)().client, {
              sync: Mb
            } = bb, Tb = new Set(Ab.offlineInputReplay.takeDroppedActions());
            if (Mb) {
              var Eb;
              const Ab = null !== (Eb = bb.endSeq) && void 0 !== Eb ? Eb : ab.lastActionSeq;
              ab.forget((bb => bb > Mb.rU && bb <= Ab || Tb.has(bb))), xb(Ub, ab, yb.m, Mb.rU, Mb.load)
            } else ab.dropPending(), ab.askForSnapshot()
          })) : console.warn("ResumeComplete arrived without a resume")
        })), bb.ZZ(eb.Ze, (bb => {
          yb.m.IR("TopRightHelper", bb, !0)
        })), bb.ZZ(eb.ud, (bb => {
          let {
            type: ab,
            location1: Ub,
            location2: Ab,
            location3: Mb,
            score: Tb
          } = bb;
          (0, Ma.q)({
            type: ab,
            location1: Ub,
            location2: Ab,
            location3: Mb,
            score: Tb
          })
        })), bb.ZZ(eb.be, (bb => {
          let {
            type: ab,
            resourceType: Ub,
            amount: Ab,
            category: Mb,
            itemName: Tb
          } = bb;
          (0, Ma.s)({
            type: ab,
            resourceType: Ub,
            amount: Ab,
            category: Mb,
            itemName: Tb
          })
        })), bb.ZZ(eb.R, (bb => {
          Ub.lL.rab.add(bb), Ub.lL.wab.delete(bb)
        })), bb.ZZ(eb.V, (bb => {
          Ub.lL.wab.add(bb), Ub.lL.rab.delete(bb)
        })), bb.ZZ(eb.Pd, (bb => {
          Ub.lL.wab.delete(bb), Ub.lL.rab.delete(bb)
        })), bb.ZZ(eb.T, (bb => {
          Ub.lL.Kab.add(bb), Ub.lL.sab.delete(bb)
        })), bb.ZZ(eb.X, (bb => {
          Ub.lL.sab.add(bb), Ub.lL.Kab.delete(bb)
        })), bb.ZZ(eb.Vd, (bb => {
          Ub.lL.sab.delete(bb), Ub.lL.Kab.delete(bb)
        })), bb.ZZ(eb.S, (bb => {
          (0, Lb.lb)(bb, Ub.lL.gab), (0, Lb.lb)(bb, Ub.lL.oab), Ub.lL.oab.push(bb)
        })), bb.ZZ(eb.W, (bb => {
          (0, Lb.lb)(bb, Ub.lL.oab), (0, Lb.lb)(bb, Ub.lL.gab), Ub.lL.gab.push(bb)
        })), bb.ZZ(eb.Sd, (bb => {
          (0, Lb.lb)(bb, Ub.lL.oab), (0, Lb.lb)(bb, Ub.lL.gab)
        })), bb.ZZ(eb.of, (bb => {
          let {
            OU: ab,
            cU: Ab
          } = bb;
          Ab ? Ub.lL.yG.delete(ab) : Ub.lL.yG.add(ab)
        })), bb.ZZ(eb.lf, (bb => {
          let {
            HT: ab,
            IT: Ab
          } = bb;
          Eb.updateWalkThroughRect(Ub.ZH, ab, Ab)
        })), (0, Ab.onGameResetOnce)((() => {
          this.clearBlockRules()
        })), bb.ZZ(eb.Se, (bb => {
          (0, ib.b)(bb)
        })), bb.ZZ(eb.Xb, (bb => {
          mb.e.applyServerUpdate(bb)
        })), bb.ZZ(eb.bb, (bb => {
          Eb.applyServerBlocks((() => {
            ! function(bb, ab) {
              for (const {
                  dT: Ub,
                  FT: Ab
                }
                of ab) {
                const ab = pb.d[Ab];
                if (ab) {
                  const {
                    compX: Ab,
                    compY: Mb,
                    compZ: Tb,
                    mainMultiblock: Eb
                  } = ab;
                  bb.Qp(Ub[0] - Ab, Ub[1] - Mb, Ub[2] - Tb, Eb)
                }
              }
              for (const {
                  dT: Ub,
                  FT: Ab,
                  hT: Mb
                }
                of ab) bb.setBlockNoMulti(Ub[0], Ub[1], Ub[2], Ab, !0), bb.blockDataOwner.setBlockData(Ub[0], Ub[1], Ub[2], null === Mb ? void 0 : JSON.parse(Mb)), bb.blockAdded(Ub[0], Ub[1], Ub[2], Ab)
            }(Eb, bb)
          })), yb.m.IR("changeBlockFail", bb), Eb.client.triggerGameCallback("onChangeBlockFail", bb), yb.m.IR("EditBoard", {
            pos: null
          }), yb.m.IR("EditCodeBlock", {
            pos: null,
            canChangePos: null
          })
        })), bb.ZZ(eb.bd, (bb => {
          let {
            pickUpItems: ab,
            pickUpAckSeq: Ub
          } = bb;
          for (const {
              name: Ab,
              amount: Mb,
              attributes: Eb
            }
            of ab) Tb().pickUpItem({
            name: Ab,
            amount: Mb,
            typeObj: tb.D[Ab],
            attributes: Eb
          });
          (0, Bb.e)().client.inventoryPrediction.serverChangeApplied(Ub)
        })), bb.ZZ(eb.Ce, (bb => {
          let {
            index: ab,
            name: Ab,
            amount: Mb,
            attributes: Tb,
            setSlotAckSeq: Eb
          } = bb;
          const Yb = Ub.wZ.tbb(Ub.ZH);
          (ab < Yb.playerInventory.numSlots || Yb.hU || Yb.inCreative) && Yb.setItemSlot(ab, Ab, Mb, Tb), (0, Bb.e)().client.inventoryPrediction.serverChangeApplied(Eb)
        })), bb.ZZ(eb.Qe, (bb => {
          let {
            dU: ab,
            uU: Ab,
            rU: Mb
          } = bb;
          const {
            inventoryPrediction: Tb
          } = (0, Bb.e)().client, Eb = () => {
            Ub.wZ.tbb(Ub.ZH).loadFromString(ab)
          };
          this.replayResume && (this.replayResume.sync = {
            rU: Mb,
            load: Eb
          }), xb(Ub, Tb, yb.m, Mb, Eb, Ab)
        })), bb.ZZ(eb.hc, (bb => {
          (0, Bb.e)().client.inventoryPrediction.acknowledge(bb)
        })), bb.ZZ(eb.C, (bb => {
          let {
            AT: ab,
            MT: Ub,
            TT: Ab,
            ET: Mb
          } = bb;
          (0, Bb.e)().client.itemDropPrediction.onActionItemDrops(ab, Ub, Ab, Mb)
        })), bb.ZZ(eb.tb, (bb => {
          Tb().clearInventory(), (0, Bb.e)().client.inventoryPrediction.serverChangeApplied(bb)
        })), bb.ZZ(eb.tc, (bb => {
          let {
            leaveEventType: ab,
            category: Ub,
            subCategory: Ab,
            value: Mb
          } = bb;
          (0, Ma.B)({
            leaveEventType: ab,
            category: Ub,
            subCategory: Ab,
            value: Mb
          })
        })), bb.ZZ(eb.Gb, (bb => {
          let {
            cat1: ab,
            cat2: Ub,
            cat3: Ab,
            value: Mb
          } = bb;
          (0, Ma.n)({
            cat1: ab,
            cat2: Ub,
            cat3: Ab,
            value: Mb
          })
        }));
        const Eb = (0, Bb.e)();
        bb.ZZ(eb.Ab, (bb => {
          Eb.applyServerBlocks((() => {
            Hb(Eb, mb.e, bb)
          }))
        })), bb.ZZ(eb.Ge, (bb => {
          yb.m.IR("setSelectedInventorySlotI", bb, !0)
        })), bb.ZZ(eb.pc, (bb => {
          let {
            category: ab,
            timeframe: Ub,
            data: Ab
          } = bb;
          yb.m.IR("leaderboardResponse", {
            category: ab,
            timeframe: Ub,
            data: Ab
          })
        })), bb.ZZ(eb.Q, (bb => {
          let {
            SM: ab,
            bT: Ub
          } = bb;
          this.stateReplicationHandler.setUpIfQueued(ab), ab = (0, ub.b)(ab), (0, Bb.e)().client.gameRecorder.recordBulletShot(ab, Ub), yb.m.IR(`bulletShot|${ab}`, {
            bulletDirections: Ub
          })
        })), bb.ZZ(eb.$b, (bb => {
          let {
            nU: ab,
            SU: Ub
          } = bb;
          yb.m.IR("damagedByOtherPlayer", {
            nU: ab,
            direction: Ub
          }, !0)
        })), bb.ZZ(eb.nd, (bb => {
          yb.m.IR("playerKilled", bb, !0), (0, Bb.e)().client.gameRecorder.recordPlayerKilled(bb.deadEId, bb.killerEId, bb.withItem, bb.killstreak)
        })), bb.ZZ(eb.Jb, (bb => {
          yb.m.IR("customKillfeed", bb, !0), (0, Bb.e)().client.gameRecorder.recordCustomKillfeed(bb.killer, bb.victim, bb.withItem)
        })), bb.ZZ(eb.xd, (bb => {
          let {
            vU: ab,
            LU: Ab
          } = bb;
          this.stateReplicationHandler.setUpIfQueued(ab);
          const Mb = Ub.wZ.vab(ab);
          null !== Mb && void 0 !== Mb && Mb.isGun() && Mb.reload(Date.now(), Ab)
        })), bb.ZZ(eb.Oe, (() => {
          yb.m.IR("showShopTutorial", null, !0)
        })), bb.ZZ(eb.qd, (bb => {
          yb.m.IR("progressBarUpdate", bb, !0)
        })), bb.ZZ(eb.fc, (bb => {
          yb.m.IR("middleScreenBarInitiate", {
            duration: bb.eA,
            vA: bb.vA,
            horizBarRemOffset: bb.LA
          }, !0)
        })), bb.ZZ(eb.Hd, (() => {
          yb.m.IR("middleScreenBarRemove", !0)
        })), bb.ZZ(eb.he, (bb => {
          let {
            BU: ab,
            eU: Ab
          } = bb;
          const Mb = Ab ? (0, ea.f)(Ub, Ab) : void 0;
          yb.m.IR("sendHitmarker", {
            BU: ab,
            screenPos: Mb
          }, !0)
        })), bb.ZZ(eb.ye, (bb => {
          let {
            id: ab,
            position: Ub,
            style: Ab,
            cM: Mb,
            nM: Tb
          } = bb;
          yb.m.IR("setDirectionArrow", {
            id: ab,
            position: Ub,
            style: Ab,
            text: (0, eb.t)(Mb),
            nM: Tb
          }, !0)
        })), bb.ZZ(eb.qb, (bb => {
          let {
            id: ab
          } = bb;
          yb.m.IR("clearDirectionArrow", {
            id: ab
          }, !0)
        })), bb.ZZ(eb.F, (bb => {
          let {
            YT: ab,
            BT: Ab,
            animationScript: Mb,
            eT: Tb,
            vT: Eb,
            LT: Yb,
            PT: eb
          } = bb;
          ab = (0, ub.b)(ab);
          const vb = null === Mb && null !== Yb ? (0, db.g)(Yb, eb) : Mb;
          (0, Bb.e)().client.gameRecorder.recordAnimateEntity(ab, Ab, vb, Tb, Eb), (0, Ib.c)(Ub).animations.animateEntity(ab, Ab, Mb, Tb, Eb, Yb, eb), null !== Mb || ab === Ub.ZH && Ab === La.d.Emote && (0, Bb.e)().client.cameraController.endTemporaryThirdPerson()
        })), bb.ZZ(eb.cf, (bb => {
          let {
            wU: ab,
            sU: Ub
          } = bb;
          if (Eb.bK(ab[0], ab[1], ab[2])) {
            const bb = (0, Bb.e)().Qy(ab[0], ab[1], ab[2]);
            (0, Bb.e)().updateMailboxContents(ab[0], ab[1], ab[2], bb, Ub)
          }
        })), bb.ZZ(eb.lb, (bb => {
          let {
            GT: ab,
            QT: Ab,
            qT: Mb,
            uT: Tb,
            rT: Eb,
            KT: Yb,
            oT: eb,
            lT: vb
          } = bb;
          const Lb = Ub.wZ.tbb(Ub.ZH);
          if (Yb) {
            const {
              FU: bb,
              rU: ab
            } = vb;
            return (0, Bb.e)().client.inventoryPrediction.u9(ab, (() => {
              Lb.chestRefreshed(Ab, Mb, Tb, eb, bb)
            })) && yb.m.IR("chestToggleFromServer", !1, !0), void yb.m.IR("chestRefreshedFromServer")
          }(ab || Lb.hU) && (ab ? (Lb.chestOpened(Ab, Mb, Tb, Eb, eb), null !== Eb && (0, Bb.e)().client.ironChestPasskeyCache.onChestOpened(Tb, Eb)) : Lb.chestClosed(), yb.m.IR("chestToggleFromServer", ab, !0))
        })), bb.ZZ(eb.Kb, (bb => {
          let {
            craftingRecipeItemName: ab,
            recipesForItem: Ab
          } = bb;
          ab ? Eb.craftingManager.editRecipesForPlayer(Ub.ZH, ab, Ab) : Eb.craftingManager.resetAllPlayerRecipes(Ub.ZH), yb.m.IR("craftingRecipesEdited", {
            itemName: ab,
            recipesForItem: Ab
          })
        })), bb.ZZ(eb.Ie, (bb => {
          let {
            vehicleEId: ab,
            overrides: Ub
          } = bb;
          (0, Bb.e)().applyRiddenVehicleSettingOverrides(ab, Ub)
        })), bb.ZZ(eb.hf, (bb => {
          let {
            za: ab,
            xa: Ab,
            ia: Mb
          } = bb;
          const Tb = Ub.wZ.Rbb(Ub.ZH).physicsState.type === ob.p.SLEEPING && ab === ob.p.DEFAULT;
          (0, Bb.e)().updatePositionAndPhysics(Ub.ZH, {
            type: ab,
            tier: Ab
          }, !0, Mb), Tb && (0, Bb.e)().updateHeldVehicleStatus()
        })), bb.ZZ(eb.fb, (bb => {
          let {
            VM: ab,
            OM: Ab
          } = bb;
          Ub.wZ.Kbb(Ub.ZH).setPose(ab, Ab)
        })), bb.ZZ(eb.ge, (bb => {
          (0, ja.d)(bb)
        })), bb.ZZ(eb.kd, (bb => {
          for (const ab of bb)(0, gb.t)(ab);
          yb.m.IR("playerCosmeticsUpdated", bb, !0)
        })), bb.ZZ(eb.K, (bb => {
          for (const ab of bb)(0, Ea.e)(Ub, ab)
        })), bb.ZZ(eb.yc, (bb => {
          let {
            RM: ab,
            kM: Ab,
            ZM: Mb,
            DM: Tb,
            zM: Yb,
            xM: Bb,
            iM: eb
          } = bb;
          this.stateReplicationHandler.setUpIfQueued(ab), ab = (0, ub.b)(ab);
          const vb = Ub.wZ.Uab(ab);
          if (vb && (vb.lastHurtTime = performance.now()), (0, lb.playRigHurt)(Ub, ab, Bb), yb.m.IR("lifeformHurt", {
              eId: ab,
              iM: eb
            }), Ab) {
            const bb = (0, ea.f)(Ub, Ab.eU);
            yb.m.IR("yourAttackHit", {
              BU: Tb,
              screenPos: bb,
              hitSelf: ab === Ub.ZH
            })
          }
          ab === Ub.ZH && (Eb.shakePlayerCamera(ab, Yb / 40, 200), yb.m.IR("closeShopOnDamaged", null), yb.m.IR("damagedByOtherPlayer", {
            nU: null,
            direction: Bb,
            zM: Yb
          }, !0));
          const Lb = Ub.wZ.eZ(ab);
          if (Lb && (Mb || Tb)) {
            const bb = [Lb[0], Lb[1] + 1, Lb[2]];
            Mb && (0, Cb.h)(Ub, Cb.y, bb, 15), Tb && (0, Cb.h)(Ub, Cb.o, bb, 10)
          }
        })), bb.ZZ(eb.uc, (bb => {
          let {
            Ka: ab,
            oa: Ab,
            la: Mb
          } = bb;
          (0, Ib.c)(Ub).setHealthFrac((0, ub.b)(ab), Mb), yb.m.IR("lifeformHealthChanged", {
            eId: (0, ub.b)(ab),
            oa: Ab,
            la: Mb
          })
        })), bb.ZZ(eb.L, (bb => {
          let {
            aT: ab,
            UT: Ab
          } = bb;
          (0, Bb.e)().playerAttacked(Ub.ZH, ab, Ab)
        })), bb.ZZ(eb.nc, (bb => {
          (0, Bb.e)().client.leaveGameUnwanted({
            reason: bb,
            requiresRefresh: !1,
            canReconnect: !1,
            automaticallyReconnect: !1
          }), (0, Ua.navigatePreserveSearch)("/")
        })), bb.ZZ(eb.Fd, (bb => {
          let {
            sa: ab,
            ga: Ub,
            Ca: Ab
          } = bb;
          Tb().removeItemName(ab, Ub), (0, Bb.e)().client.inventoryPrediction.serverChangeApplied(Ab)
        })), bb.ZZ(eb.pe, (bb => {
          const {
            Re: ab,
            Nab: Ab
          } = (0, Vb.f)([bb[0], bb[1], bb[2]]);
          ka.d.setLookDirection(Ub, ab, Ab), (0, Ob.q)(ab, Ab);
          const Mb = Ub.wZ.Kbb(Ub.ZH);
          Mb && (Mb.heading = ab)
        })), bb.ZZ(eb.te, (bb => {
          Eb.client.cameraController.setCameraZoom(bb)
        })), bb.ZZ(eb.Me, (bb => {
          let {
            AU: ab,
            MU: Ab
          } = bb;
          Eb.shakePlayerCamera(Ub.ZH, ab, Ab)
        })), bb.ZZ(eb.Db, (bb => {
          (0, aa.onCosmeticPackGranted)(bb)
        })), bb.ZZ(eb.ke, (bb => {
          yb.m.IR("serverUpdating", Date.now() + bb, !0)
        })), bb.ZZ(eb.Gc, Fb.e), bb.ZZ(eb.Qc, (bb => {
          let {
            id: ab,
            Ib: Ub
          } = bb;
          const {
            type: Mb,
            params: Tb
          } = (0, Ba.i)(Ub), Eb = {
            ...Tb
          };
          for (const Ab of Ba.e) Ab in Eb && Eb[Ab] && (Eb[Ab] = (0, eb.t)(Eb[Ab]));
          Ya.e.queueQTE(ab, Mb, Eb).getResult().then((bb => {
            "boolean" === typeof bb && (0, Ab.sendColyMessage)(eb.li, {
              qteId: ab,
              qteResponse: bb
            })
          }))
        })), bb.ZZ(eb.Jd, (bb => {
          Ya.e.cancelQTE(bb)
        })), (0, Ab.onGameResetOnce)((() => {
          Ya.e.reset()
        })), bb.ZZ(eb.Tc, (bb => {
          let {
            id: ab,
            clientParameters: Ub
          } = bb;
          (0, fb.g)(ab, Ub)
        })), bb.ZZ(eb.Kd, (bb => {
          (0, fb.j)(bb)
        })), bb.ZZ(eb.af, (bb => {
          let {
            text: ab,
            id: Ub
          } = bb;
          (0, fb.n)(Ub, ab, (bb => {
            (0, Ab.sendColyMessage)(eb.Bj, {
              jY: Ub,
              RY: bb,
              kY: 5
            })
          }))
        })), bb.ZZ(eb.Mb, (bb => {
          let {
            Pa: ab,
            Xa: Ub,
            ja: Ab,
            Ra: Mb,
            ka: Tb,
            ya: Eb
          } = bb;
          ab = (0, ub.b)(ab), (0, Bb.e)().client.updateEffect(ab, Ub, {
            displayName: Ab,
            icon: Mb,
            duration: Tb,
            level: Eb
          })
        })), bb.ZZ(eb.Ad, (bb => {
          let {
            Pa: ab,
            Xa: Ub
          } = bb;
          ab = (0, ub.b)(ab), (0, Bb.e)().client.removeEffect(ab, Ub)
        })), bb.ZZ(eb.mc, (bb => {
          Ub.wZ.Kbb(Ub.ZH).jumpMultiplier.setMultiplierType("jumpEffectAmount", bb)
        })), bb.ZZ(eb.$e, (bb => {
          yb.m.IR("ttbEffectMultiplier", bb)
        })), (0, Ab.onGameResetOnce)((() => {
          Ub.wZ.Kbb(Ub.ZH).jumpMultiplier.setMultiplierType("jumpEffectAmount", 1)
        })), bb.ZZ(eb.Nc, (bb => {
          (0, Cb.l)(Ub, (0, Lb.u)(bb))
        })), bb.ZZ(eb.Pc, (bb => {
          va.f[bb.CM] ? (0, Cb.l)(Ub, {
            ...va.f[bb.CM],
            pos1: bb.pos1,
            pos2: bb.pos2
          }) : console.error(`Unknown preset id: ${bb.CM}`)
        })), bb.ZZ(eb.hd, (bb => {
          var ab, Ub;
          let {
            mM: Ab,
            pM: Mb,
            NM: Tb,
            WM: Eb
          } = bb, {
            IM: Yb,
            dM: eb
          } = null !== Eb && void 0 !== Eb ? Eb : {};
          const {
            HM: vb
          } = null !== Eb && void 0 !== Eb ? Eb : {};
          Yb = null !== (ab = Yb) && void 0 !== ab ? ab : void 0, eb = null !== (Ub = eb) && void 0 !== Ub ? Ub : void 0, "string" === typeof vb && this.stateReplicationHandler.setUpIfQueued(vb), (0, Bb.e)().client.gameRecorder.recordPlaySound(Ab, Mb, Tb, Eb), Jb.c.play((0, nb.e)(Ab), Mb, vb, Yb, eb).rate(Tb)
        })), bb.ZZ(eb.ne, (bb => {
          let {
            pos: ab,
            data: Ub
          } = bb;
          Eb.blockDataOwner.setBlockData(ab[0], ab[1], ab[2], Ub), Eb.blockAdded(ab[0], ab[1], ab[2], Eb.Qy(ab[0], ab[1], ab[2]))
        })), bb.ZZ(eb.Zc, (bb => {
          let {
            info: ab
          } = bb;
          yb.m.IR("overShopInfo", ab, !0)
        })), bb.ZZ(eb.Tb, (bb => {
          let {
            Za: Ab,
            Da: Mb
          } = bb;
          ab.openShop(Ub.ZH, Ab, Mb)
        })), bb.ZZ(eb.H, (bb => {
          Ub.wZ.pG(Ub.ZH).applyImpulse(bb)
        })), bb.ZZ(eb.Le, (bb => {
          const ab = Ub.wZ.pG(Ub.ZH);
          Kb().set(ab.KF, 0, 0, 0), Kb().set(ab.lF, 0, 0, 0), Kb().copy(ab.QR, bb), ab.sF()
        })), bb.ZZ(eb.Cc, (bb => {
          console.error(`[logErrorToConsole]: ${bb}`)
        })), bb.ZZ(eb.Rb, (bb => {
          let {
            pT: ab,
            NT: Ub,
            WT: Ab
          } = bb;
          yb.m.IR("flyingMiddleMessage", {
            content: (0, eb.t)(ab),
            NT: Ub,
            WT: Ab
          }, !0)
        })), bb.ZZ(eb.rf, (bb => {
          const ab = bb === hb.h ? null : {
            message: `Currently loaded as variation: ${bb}`,
            type: "Warning"
          };
          yb.m.IR("showPermanentBottomMessage", ab, !0)
        })), bb.ZZ(eb.Vb, (bb => {
          let {
            messageType: ab,
            data: Ub
          } = bb;
          (0, Sb.e)(ab) ? (0, Sb.c)(ab, Ub) : ("freeCamPerms" === ab && Eb.client.freeCameraController.setPerms(Ub.key, Ub.value), Eb.client.triggerGameCallback("onReceivedMessageFromServer", ab, Ub))
        })), bb.ZZ(eb.hb, (() => {
          const bb = Ub.wZ.vab(Ub.ZH);
          null !== bb && void 0 !== bb && bb.isChargeable() && bb.finishCharging(!1, Date.now())
        })), bb.ZZ(eb.Ed, (bb => {
          let {
            fM: ab
          } = bb;
          Eb.craftingManager.removeRecipes(Ub.ZH, ab), yb.m.IR("craftingRecipesEdited", {
            itemName: ab,
            recipesForItem: []
          })
        })), bb.ZZ(eb.ff, (bb => {
          for (const ab in bb) {
            const Ub = bb[ab];
            for (const bb in Ub) Eb.client.meshCreator.handleParticleSystemUpdate(ab, bb, Ub[bb])
          }
        })), (0, Ab.onGameResetOnce)((() => {
          (0, Ta.setFloatingYValue)(Ub.wZ.getState(Ub.ZH, "physics"), Ub.wZ.Al(Ub.ZH), null)
        })), bb.ZZ(eb.Nb, (bb => {
          let {
            TU: ab,
            EU: Ab,
            YU: Mb
          } = bb;
          const Tb = (0, ub.b)(ab);
          if (Tb === Ub.ZH) {
            const bb = Ub.wZ.Al(Ub.ZH).position;
            Mb ??= Math.floor(bb[1]) - 1, (0, Ta.setFloatingYValue)(Ub.wZ.getState(Ub.ZH, "physics"), Ub.wZ.Al(Ub.ZH), Ab ? Mb : null)
          }(0, Ib.c)(Ub).setFloating(Tb, Ab, Mb);
          const Eb = Ub.wZ.getState(Tb, "floating");
          Eb && (Eb.isFloating = Ab, Eb.YU = Ab ? Mb : null)
        })), bb.ZZ(eb.wb, ba.l)
      }
    }
    window.addEventListener("beforeunload", (() => {}));
    var Za = Ub(38334),
      Da = Ub(38342),
      za = Ub(622),
      xa = Ub(2653);
    class ia {
      constructor(bb, ab, Ub, Ab) {
        this.msgHandler = Ub, this.listener = Ab, this.session = void 0, this.attachedRoom = null, this.detachRoomListeners = null, this.suspended = !1, this.droppedAt = 0, this.session = new Za.d({
          reconnect: bb,
          isLive: () => Ab.isLive(),
          onReconnected: bb => {
            this.resumeOnRoom(bb)
          },
          onGaveUp: (bb, ab) => {
            Ab.onGaveUp(bb, ab)
          },
          freeze: ab,
          releaseSeat: ab => {
            bb(ab).then((bb => {
              bb.leave(!0)
            }), (bb => {
              console.warn("Couldn't release the held seat of a game left while reconnecting", bb)
            }))
          }
        })
      }
      onInitialInfo(bb, ab) {
        this.session.onInitialInfo(bb, ab)
      }
      isResuming() {
        return this.session.isResuming()
      }
      getDroppedAt() {
        return this.droppedAt
      }
      onResumeInitialInfo(bb, ab) {
        if (this.session.onResuming(), null === bb) {
          try {
            (0, Bb.e)().client.itemDropPrediction.reset()
          } catch (Ub) {
            console.error("Error dropping the item drop predictions on resuming", Ub)
          }
          return Ab.offlineInputReplay.discard(), void this.setSuspended(!1)
        }(0, Bb.e)().client.itemDropPrediction.onResumeReplayOffered(), Ab.offlineInputReplay.replayFrom(bb.aU, ab)
      }
      onResumed(bb) {
        this.setSuspended(!1), (0, Ab.resendBeacons)();
        try {
          bb()
        } catch (ab) {
          console.error("Error completing the resume", ab)
        } finally {
          this.session.onResumed()
        }
      }
      attachRoom(bb) {
        const ab = (0, za.g)((() => bb.connection.isOpen));
        bb.xZ(ab);
        const Ub = new Da.c((() => {
          this.session.canHoldSeat() && this.listener.isLive() && (console.warn("The game server went silent, reconnecting"), this.onConnectionDropped(bb, "silent"), bb.leave(!1))
        }));
        bb.onStateChange((() => {
          Ub.heard()
        }));
        const Ab = ab => {
          ab.persisted || bb.leave(!0)
        };
        window.addEventListener("pagehide", Ab), bb.xZ(((ab, Ub) => {
          if (bb === this.attachedRoom && this.listener.isLive()) return (0, Tb.f)(ab) && this.session.canHoldSeat() ? (console.warn(`Connection to the game server dropped with code ${ab}, reconnecting`), this.listener.onDropped(ab, Ub), void this.onConnectionDropped(bb, String(ab))) : void this.listener.onRoomLeft(ab, Ub)
        })), this.attachedRoom = bb, this.detachRoomListeners = () => {
          ab(), Ub.dispose(), window.removeEventListener("pagehide", Ab)
        }
      }
      dispose() {
        this.detachRoom(), this.session.leave(), this.setSuspended(!1)
      }
      setSuspended(bb) {
        bb !== this.suspended && (this.suspended = bb, (0, Ab.setConnectionSuspended)(bb), (0, Bb.e)().client.itemDropPrediction.setSuspended(bb))
      }
      detachRoom() {
        var bb;
        null === (bb = this.detachRoomListeners) || void 0 === bb || bb.call(this), this.detachRoomListeners = null, this.attachedRoom = null
      }
      onConnectionDropped(bb, ab) {
        (0, xa.e)("disconnect", "Left room", ab), this.isResuming() || (this.droppedAt = Date.now()), this.detachRoom(), Ab.offlineInputReplay.onConnectionLost(), this.setSuspended(!0), this.session.onConnectionLost(bb.reconnectionToken)
      }
      resumeOnRoom(bb) {
        if (!this.listener.isLive()) return console.warn("Left the game while reconnecting, leaving the resumed room"), bb.leave(!0), void this.dispose();
        console.log("Reconnected to the game server, waiting for the game to resume"), (0, ja.p)(), Ab.offlineInputReplay.onConnectionReplaced(), this.msgHandler.eeb(bb), this.listener.onReconnected(bb), this.attachRoom(bb)
      }
    }
    var fa = Ub(3144),
      ma = Ub(3148),
      pa = Ub(1242),
      Na = Ub(4357),
      Wa = Ub(2875),
      Ha = Ub(1003),
      Ia = Ub(37047),
      da = Ub(38345),
      Fa = Ub(8463),
      ha = Ub(38350),
      Ga = Ub(1710),
      Qa = Ub(38357),
      qa = Ub(1635),
      ua = Ub(2552);

    function ra(bb) {
      var ab, Ub;
      if ("object" !== typeof bb || null === bb) return {
        errType: typeof bb
      };
      const Ab = bb;
      return {
        errType: null !== (ab = null === (Ub = bb.constructor) || void 0 === Ub ? void 0 : Ub.name) && void 0 !== ab ? ab : "",
        errName: "string" === typeof Ab.name ? Ab.name : "",
        eventType: "string" === typeof Ab.type ? Ab.type : "",
        errStack: "string" === typeof Ab.stack ? Ab.stack.split("\n").slice(1).join(" | ") : ""
      }
    }

    function Ka(bb) {
      if ("undefined" !== typeof ProgressEvent && bb instanceof ProgressEvent) return !0;
      if (!(bb instanceof Error)) return !1;
      const ab = bb.code;
      return "ServerError" === bb.name && void 0 === ab || "AbortError" === bb.name || "seat reservation expired." === bb.message || "early_leave" === bb.message
    }(0, Rb.n)((bb => {
      (0, xa.e)("wasm_net", bb)
    }));
    let oa = !0;

    function la() {
      oa = !1
    }
    class ta {
      constructor(bb) {
        this.gameNameWithVariation = void 0, this.lobbyName = void 0, this.colyClient = void 0, this.userContext = void 0, this.joinedAt = null, this.checkSendPath = () => {}, this.VL = void 0, this.connectionResume = void 0, this.incomingMsgInitialisor = void 0, this.gameNameWithVariation = bb.gameNameWithVariation, this.lobbyName = bb.lobbyName, this.colyClient = bb.colyClient, this.userContext = bb.userContext
      }
      async connectToServer(bb, ab, Ub) {
        Zb.e.reset(), bb.jH = {
          [bb.ZH]: {}
        }, bb.n_ = void 0, (0, ja.p)(), (0, Bb.e)().removeAllEntityNames(), (0, Bb.e)().setEntityName(bb.ZH, this.userContext.getPlayerName()), (0, pa.r)({
          lobbyName: this.lobbyName
        }), console.log("Waiting for clientConnection passed promise to resolve");
        const Eb = (0, qa.f)();
        console.log("joining server with game", this.gameNameWithVariation, "lobbyName", this.lobbyName);
        const Yb = performance.now(),
          eb = (0, ha.e)(this.userContext, (() => {
            const {
              roomName: Ab,
              joinOptions: Mb
            } = (0, zb.i)(this.userContext, this.gameNameWithVariation, this.lobbyName, ab, (bb => Wa.c.isUsingCustomGameTexturePack(bb)));
            return Mb.joinAdHold = Eb, Mb.renderBackend = (0, ua.c)(bb.Fj), (0, da.h)((() => this.colyClient.joinOrCreate(Ab, Mb)), Ub)
          }));
        return yb.m.IR("loadingScreenState", "loadingPage:joiningLobby"), await eb.then((ab => {
          if (this.joinedAt = performance.now(), this.VL = bb, Eb) {
            const bb = (0, qa.o)((() => {
              ab.send(Mb.f)
            }));
            ab.xZ(bb), (0, Ab.onGameResetOnce)(bb)
          }
          const Ub = new kb(ab);
          this.connectionResume = new ia((bb => this.colyClient.reconnect(bb)), (ab => {
            bb.Wm(ab)
          }), Ub, {
            isLive: () => (0, Bb.e)().client.getMsgHandler() === Ub,
            onDropped: (bb, ab) => {
              (0, ma.k)(bb) || this.logUnrecognisedConnectionLoss(bb, void 0, {
                site: "drop",
                closeReason: null !== ab && void 0 !== ab ? ab : "",
                sinceJoined: this.sinceJoined()
              })
            },
            onRoomLeft: (bb, ab) => {
              this.onRoomLeft(bb, ab)
            },
            onReconnected: bb => {
              this.incomingMsgInitialisor.eeb(bb), this.checkSendPath = (0, Ia.h)(Ub, bb, Rb.p)
            },
            onGaveUp: (bb, ab) => {
              this.onResumeGaveUp(bb, ab)
            }
          }), this.connectionResume.attachRoom(ab), (0, Ab.onGameResetOnce)((() => {
            this.connectionResume.dispose()
          }));
          const Tb = Ub.send,
            Yb = Ub.ZZ,
            eb = Ub.Sab.send,
            vb = Ub.Sab.ZZ,
            Lb = Ub.Yeb;
          this.checkSendPath = (0, Ia.h)(Ub, ab, Rb.p);
          const Pb = setInterval((() => {
            Tb === Ub.send && Yb === Ub.ZZ && eb === Ub.Sab.send && vb === Ub.Sab.ZZ && Lb === Ub.Yeb || la(), this.checkSendPath()
          }), 1e4);
          return (0, Ab.onGameResetOnce)((() => {
            clearInterval(Pb)
          })), {
            success: !0,
            successDetails: Ub
          }
        })).catch((ab => {
          if (Ub.aborted && ab === (0, Ga.e)(Ub)) return {
            success: !1,
            failDetails: {
              reason: "Left the game while it loaded",
              requiresRefresh: !1,
              canReconnect: !1
            }
          };
          if (ab instanceof Qa.i) return console.warn("Seat request timed out", this.lobbyName, this.gameNameWithVariation), {
            success: !1,
            failDetails: {
              reason: ab.message,
              requiresRefresh: !1,
              canReconnect: !1,
              gameServerUnreachable: "timedOut"
            }
          };
          bb.bR(`Failed to connect to bloxd room, check your internet connection. lobbyName: ${this.lobbyName}, gameNameWithVariation: ${this.gameNameWithVariation} code: ${ab.code}\n`, ab);
          const Ab = ab.code;
          return Ab === Tb.b.serverUpdating.code ? (this.goToUpdateWaiting(), {
            success: !1,
            failDetails: {
              reason: Tb.b.serverUpdating.text,
              requiresRefresh: !1,
              canReconnect: !0,
              goesToUpdateWaiting: !0
            }
          }) : {
            success: !1,
            failDetails: {
              ...this.onConnectionToServerLost(Ab, ab.message, {
                site: "join",
                sinceJoinStart: (0, ma.d)(performance.now() - Yb),
                ...ra(ab)
              }, Ka(ab)),
              rematch: (0, da.d)(ab),
              gameRefused: (0, Fa.d)(ab)
            }
          }
        }))
      }
      setupServerListeners(bb, ab, Ub) {
        yb.m.IR("loadingScreenState", "loadingPage:loadingPlayerInfo"), this.incomingMsgInitialisor = new ya(this.gameNameWithVariation, ab.Sab, bb, this.connectionResume), this.incomingMsgInitialisor.setupStateReplicationHandlers();
        const Mb = ab.Xeb();
        this.incomingMsgInitialisor.setupOnMessageListeners(Mb, Ub), (0, Ab.onConnectionToServerReady)(Mb, ab), Mb.finishRegistration()
      }
      dispose() {
        this.connectionResume.dispose()
      }
      onResumeGaveUp(bb, ab) {
        (0, Ha.UR)(new Error("Reconnect failed"), {
          ...(0, fa.h)(ab),
          game: this.gameNameWithVariation
        }), (0, xa.e)("disconnect", "Reconnect failed", ab.reason), (0, Bb.e)().client.leaveGameUnwanted({
          reason: {
            translationKey: "general:lostConnection"
          },
          canReconnect: !bb,
          canPlayAgain: bb,
          requiresRefresh: !1,
          automaticallyReconnect: !1
        }), (0, Ua.navigatePreserveSearch)("/")
      }
      sinceJoined() {
        return null === this.joinedAt ? "" : (0, ma.d)(performance.now() - this.joinedAt)
      }
      onRoomLeft(bb, ab) {
        var Ub;
        if (bb === Tb.b.gameOrPluginKick.code) return;
        if (console.log(`Left room with code ${bb}`), bb === Tb.b.serverUpdating.code) return (0, xa.e)("disconnect", "Left room", "serverUpdating"), (0, Bb.e)().client.leaveGame(this.getUpdateWaitingUrl()), void this.goToUpdateWaiting();
        this.VL.bR(`Kicked from server with code ${bb}`, new Error);
        const Ab = Object.keys(Tb.b).find((ab => Tb.b[ab].code === bb));
        (0, xa.e)("disconnect", "Left room", null !== Ab && void 0 !== Ab ? Ab : String(bb));
        const Mb = this.onConnectionToServerLost(bb, void 0, {
          site: "leave",
          closeReason: null !== ab && void 0 !== ab ? ab : "",
          sinceJoined: this.sinceJoined()
        });
        (0, Bb.e)().client.leaveGameUnwanted({
          reason: `You have disconnected from the server.\n${Mb.reason}`,
          canReconnect: Mb.canReconnect,
          requiresRefresh: Mb.requiresRefresh,
          automaticallyReconnect: null !== (Ub = Mb.automaticallyReconnect) && void 0 !== Ub && Ub
        }), (0, Ua.navigatePreserveSearch)("/")
      }
      getUpdateWaitingUrl() {
        return (0, Na.y)(this.gameNameWithVariation, this.lobbyName)
      }
      goToUpdateWaiting() {
        (0, Ua.navigatePreserveSearch)(this.getUpdateWaitingUrl())
      }
      onConnectionToServerLost(bb, ab, Ub) {
        var Ab;
        let Mb = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        if (null !== (Ab = ab) && void 0 !== Ab && Ab.endsWith(Tb.h) && (this.userContext.invalidateTrafficCode(), ab = ab.replace(Tb.h, "")), bb === Tb.b.outdatedVersion.code) return console.error("Outdated client with version ", Eb.b, ", refreshing page"), (0, Db.reloadBloxd)(), {
          reason: "Outdated client",
          requiresRefresh: !0,
          canReconnect: !1
        };
        if (bb === Tb.b.loadRecaptchaError.code) return console.error("Load recaptcha error, refreshing page"), (0, Db.reloadBloxd)(), {
          reason: "Failed to load recaptcha",
          requiresRefresh: !0,
          canReconnect: !1
        };
        for (const Eb in Tb.b) {
          const {
            code: Ub,
            text: Ab,
            canReconnect: Mb
          } = Tb.b[Eb];
          if (Ub === bb) {
            console.log("matched known error", bb, "leaving game");
            return {
              reason: "" !== Ab ? Ab : ab || `Code: ${bb}`,
              requiresRefresh: !1,
              canReconnect: Mb,
              automaticallyReconnect: Ub === Tb.b.customGameUpdated.code || Ub === Tb.b.duplicateLobbyNameError.code
            }
          }
        }
        return console.log("Didn't match known error, leaving game"), (0, ma.g)(bb) || Mb ? console.warn("Connection lost", bb, ab) : this.logUnrecognisedConnectionLoss(bb, ab, Ub), {
          reason: `Either your internet isn't working or this is a bug.\nCode: ${bb}`,
          requiresRefresh: !1,
          canReconnect: !1,
          gameServerUnreachable: Mb ? "failed" : void 0
        }
      }
      logUnrecognisedConnectionLoss(bb, ab, Ub) {
        (0, Ha.UR)(new Error("Unrecognised connection loss"), {
          code: String(bb),
          cause: null !== ab && void 0 !== ab ? ab : "",
          ...Ub,
          game: this.gameNameWithVariation,
          ...(0, ma.l)()
        })
      }
    }
  },
  38316: (bb, ab, Ub) => {
    Ub.d(ab, {
      d: () => CU,
      h: () => SU
    });
    var Ab, Mb, Tb, Eb, Yb, Bb, eb, vb, Lb, Pb, Xb, jb, Rb, kb, yb, Zb, Db, zb, xb, ib, fb, mb, pb, Nb, Wb, Hb, Ib, db, Fb, hb, Gb, Qb, qb, ub, rb, Kb, ob, lb, tb, wb, sb, gb, Cb, Vb, Ob, cb, Jb, nb, Sb, ba, aa, Ua, Aa, Ma, Ta, Ea, Ya, Ba, ea, va, La, Pa, Xa, ja, Ra, ka, ya, Za, Da, za, xa, ia, fa, ma, pa, Na, Wa, Ha, Ia, da, Fa, ha, Ga, Qa, qa, ua, ra, Ka, oa, la, ta, wa, sa, ga, Ca, Va, Oa, ca, Ja, na = Ub(22),
      Sa = Ub(36467),
      bU = Ub(38323),
      aU = Ub(38325),
      UU = Ub(8695),
      AU = Ub(583),
      MU = Ub(580),
      TU = Ub(36122);
    let EU = (Ab = (0, UU.type)("number"), Mb = (0, UU.type)("number"), Tb = (0, UU.type)("number"), Eb = (0, UU.type)("number"), Yb = (0, UU.type)("number"), Bb = (0, UU.type)("number"), eb = (0, UU.type)("string"), vb = class extends UU.Schema {
        constructor() {
          super(...arguments), (0, bU.c)(this, "id", Lb, this), (0, bU.c)(this, "amount", Pb, this), (0, bU.c)(this, "x", Xb, this), (0, bU.c)(this, "y", jb, this), (0, bU.c)(this, "z", Rb, this), (0, bU.c)(this, "size", kb, this), (0, bU.c)(this, "attributes", yb, this)
        }
      }, Lb = (0, aU.d)(vb.prototype, "id", [Ab], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return 0
        }
      }), Pb = (0, aU.d)(vb.prototype, "amount", [Mb], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return 0
        }
      }), Xb = (0, aU.d)(vb.prototype, "x", [Tb], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return 0
        }
      }), jb = (0, aU.d)(vb.prototype, "y", [Eb], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return 0
        }
      }), Rb = (0, aU.d)(vb.prototype, "z", [Yb], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return 0
        }
      }), kb = (0, aU.d)(vb.prototype, "size", [Bb], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return 1
        }
      }), yb = (0, aU.d)(vb.prototype, "attributes", [eb], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return "{}"
        }
      }), vb),
      YU = (Zb = (0, UU.type)("string"), Db = (0, UU.type)("string"), zb = class extends UU.Schema {
        constructor() {
          super(...arguments), (0, bU.c)(this, "itemName", xb, this), (0, bU.c)(this, "enchantmentTier", ib, this)
        }
      }, xb = (0, aU.d)(zb.prototype, "itemName", [Zb], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: null
      }), ib = (0, aU.d)(zb.prototype, "enchantmentTier", [Db], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: null
      }), zb),
      BU = (fb = (0, UU.type)("string"), mb = (0, UU.type)("string"), pb = (0, UU.type)("number"), Nb = (0, UU.type)("number"), Wb = (0, UU.type)("number"), Hb = (0, UU.type)("float32"), Ib = (0, UU.type)("float32"), db = (0, UU.type)("float32"), Fb = (0, UU.type)("string"), hb = (0, UU.type)(["number"]), Gb = (0, UU.type)("boolean"), Qb = class extends UU.Schema {
        constructor() {
          super(...arguments), (0, bU.c)(this, "type", qb, this), (0, bU.c)(this, "name", ub, this), (0, bU.c)(this, "x", rb, this), (0, bU.c)(this, "y", Kb, this), (0, bU.c)(this, "z", ob, this), (0, bU.c)(this, "xRotation", lb, this), (0, bU.c)(this, "yRotation", tb, this), (0, bU.c)(this, "zRotation", wb, this), (0, bU.c)(this, "followingEId", sb, this), (0, bU.c)(this, "followingOffset", gb, this), (0, bU.c)(this, "shouldMatchFollowingEntityRotation", Cb, this)
        }
      }, qb = (0, aU.d)(Qb.prototype, "type", [fb], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: null
      }), ub = (0, aU.d)(Qb.prototype, "name", [mb], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return ""
        }
      }), rb = (0, aU.d)(Qb.prototype, "x", [pb], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return 0
        }
      }), Kb = (0, aU.d)(Qb.prototype, "y", [Nb], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return 0
        }
      }), ob = (0, aU.d)(Qb.prototype, "z", [Wb], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return 0
        }
      }), lb = (0, aU.d)(Qb.prototype, "xRotation", [Hb], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return 0
        }
      }), tb = (0, aU.d)(Qb.prototype, "yRotation", [Ib], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return 0
        }
      }), wb = (0, aU.d)(Qb.prototype, "zRotation", [db], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return 0
        }
      }), sb = (0, aU.d)(Qb.prototype, "followingEId", [Fb], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: null
      }), gb = (0, aU.d)(Qb.prototype, "followingOffset", [hb], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return new UU.ArraySchema(0, 0, 0)
        }
      }), Cb = (0, aU.d)(Qb.prototype, "shouldMatchFollowingEntityRotation", [Gb], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return !0
        }
      }), Qb),
      eU = (Vb = (0, UU.type)("float32"), Ob = (0, UU.type)("float32"), cb = (0, UU.type)("boolean"), Jb = (0, UU.type)("boolean"), nb = (0, UU.type)("float32"), Sb = (0, UU.type)("boolean"), ba = (0, UU.type)("string"), aa = (0, UU.type)("string"), Ua = (0, UU.type)("string"), Aa = (0, UU.type)("string"), Ma = (0, UU.type)(["number"]), Ta = (0, UU.type)("number"), Ea = (0, UU.type)({
        map: YU
      }), Ya = class extends BU {
        constructor() {
          super(...arguments), (0, bU.c)(this, "scale", Ba, this), (0, bU.c)(this, "speed", ea, this), (0, bU.c)(this, "jumping", va, this), (0, bU.c)(this, "crouching", La, this), (0, bU.c)(this, "cameraPitch", Pa, this), (0, bU.c)(this, "armSwinging", Xa, this), (0, bU.c)(this, "heldItemName", ja, this), (0, bU.c)(this, "heldItemEnchantmentTier", Ra, this), (0, bU.c)(this, "pose", ka, this), (0, bU.c)(this, "ridingVehicleEId", ya, this), (0, bU.c)(this, "meshOffset", Za, this), (0, bU.c)(this, "baseRenderHeading", Da, this), (0, bU.c)(this, "armour", za, this)
        }
      }, Ba = (0, aU.d)(Ya.prototype, "scale", [Vb], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return 1
        }
      }), ea = (0, aU.d)(Ya.prototype, "speed", [Ob], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return 0
        }
      }), va = (0, aU.d)(Ya.prototype, "jumping", [cb], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return !1
        }
      }), La = (0, aU.d)(Ya.prototype, "crouching", [Jb], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return !1
        }
      }), Pa = (0, aU.d)(Ya.prototype, "cameraPitch", [nb], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return 0
        }
      }), Xa = (0, aU.d)(Ya.prototype, "armSwinging", [Sb], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return !1
        }
      }), ja = (0, aU.d)(Ya.prototype, "heldItemName", [ba], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: null
      }), Ra = (0, aU.d)(Ya.prototype, "heldItemEnchantmentTier", [aa], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: null
      }), ka = (0, aU.d)(Ya.prototype, "pose", [Ua], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return "standing"
        }
      }), ya = (0, aU.d)(Ya.prototype, "ridingVehicleEId", [Aa], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return null
        }
      }), Za = (0, aU.d)(Ya.prototype, "meshOffset", [Ma], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return new UU.ArraySchema(0, 0, 0)
        }
      }), Da = (0, aU.d)(Ya.prototype, "baseRenderHeading", [Ta], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return 0
        }
      }), za = (0, aU.d)(Ya.prototype, "armour", [Ea], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return new UU.MapSchema
        }
      }), Ya),
      vU = (xa = (0, UU.type)("string"), ia = (0, UU.type)("string"), fa = (0, UU.type)("string"), ma = (0, UU.type)("uint8"), pa = class extends eU {
        constructor() {
          super(...arguments), (0, bU.c)(this, "variation", Na, this), (0, bU.c)(this, "ownerDbId", Wa, this), (0, bU.c)(this, "metaInfo", Ha, this), (0, bU.c)(this, "aiState", Ia, this)
        }
      }, Na = (0, aU.d)(pa.prototype, "variation", [xa], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return "default"
        }
      }), Wa = (0, aU.d)(pa.prototype, "ownerDbId", [ia], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return null
        }
      }), Ha = (0, aU.d)(pa.prototype, "metaInfo", [fa], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return ""
        }
      }), Ia = (0, aU.d)(pa.prototype, "aiState", [ma], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return 0
        }
      }), pa);
    da = (0, UU.type)("string"), Fa = (0, UU.type)("string"), ha = (0, UU.type)("string"), Ga = (0, UU.type)("string"), Qa = class extends BU {
      constructor() {
        super(...arguments), (0, bU.c)(this, "meshKind", qa, this), (0, bU.c)(this, "meshOpts", ua, this), (0, bU.c)(this, "pose", ra, this), (0, bU.c)(this, "leaderboardTop", Ka, this)
      }
    }, qa = (0, aU.d)(Qa.prototype, "meshKind", [da], {
      configurable: !0,
      enumerable: !0,
      writable: !0,
      initializer: null
    }), ua = (0, aU.d)(Qa.prototype, "meshOpts", [Fa], {
      configurable: !0,
      enumerable: !0,
      writable: !0,
      initializer: null
    }), ra = (0, aU.d)(Qa.prototype, "pose", [ha], {
      configurable: !0,
      enumerable: !0,
      writable: !0,
      initializer: null
    }), Ka = (0, aU.d)(Qa.prototype, "leaderboardTop", [Ga], {
      configurable: !0,
      enumerable: !0,
      writable: !0,
      initializer: null
    });

    function LU(bb) {
      return Object.keys(UU.Metadata.getFields(bb))
    }
    const PU = LU(vU);
    for (const bA of AU.p)
      if (!PU.includes(bA)) throw new Error(`Mob Schema is missing a networked property: "${bA}"`);
    const XU = LU((oa = (0, UU.type)("string"), la = (0, UU.type)("float32"), ta = (0, UU.type)("float32"), wa = (0, UU.type)("float32"), sa = (0, UU.type)("float32"), ga = class extends BU {
      constructor() {
        super(...arguments), (0, bU.c)(this, "soundName", Ca, this), (0, bU.c)(this, "volume", Va, this), (0, bU.c)(this, "refDistance", Oa, this), (0, bU.c)(this, "maxHearDist", ca, this), (0, bU.c)(this, "rate", Ja, this)
      }
    }, Ca = (0, aU.d)(ga.prototype, "soundName", [oa], {
      configurable: !0,
      enumerable: !0,
      writable: !0,
      initializer: function() {
        return ""
      }
    }), Va = (0, aU.d)(ga.prototype, "volume", [la], {
      configurable: !0,
      enumerable: !0,
      writable: !0,
      initializer: function() {
        return 1
      }
    }), Oa = (0, aU.d)(ga.prototype, "refDistance", [ta], {
      configurable: !0,
      enumerable: !0,
      writable: !0,
      initializer: function() {
        return TU.i
      }
    }), ca = (0, aU.d)(ga.prototype, "maxHearDist", [wa], {
      configurable: !0,
      enumerable: !0,
      writable: !0,
      initializer: function() {
        return TU.e
      }
    }), Ja = (0, aU.d)(ga.prototype, "rate", [sa], {
      configurable: !0,
      enumerable: !0,
      writable: !0,
      initializer: function() {
        return 1
      }
    }), ga));
    for (const bA of MU.j)
      if (!XU.includes(bA)) throw new Error(`AudioEntity Schema is missing a replicated property: "${bA}"`);
    var jU = Ub(37768),
      RU = Ub(1189),
      kU = Ub(591),
      yU = Ub(37545),
      ZU = Ub(3959),
      DU = Ub(325),
      zU = Ub(36587),
      xU = Ub(37437),
      iU = Ub(2091),
      fU = Ub(36552),
      mU = Ub(37797),
      pU = Ub(36733),
      NU = Ub(333),
      WU = Ub.n(NU),
      HU = Ub(37283),
      IU = Ub(36382),
      dU = Ub(37411),
      FU = Ub(37454);
    class hU {
      constructor(bb, ab) {
        this.bloxd = bb, this.eId = ab, this.VL = void 0, this.colyseusEntity = void 0, this.canSeeSub = void 0, this.canAttackSub = void 0, this.interactableSub = void 0, this.overlayColourSub = void 0, this.opacitySub = void 0, this.zIndexSub = void 0, this.multilineTextBoxSub = void 0, this.previousHidingMeshManagerState = void 0, this.meshKind = void 0, this.meshOpts = void 0, this.leaderboardTop = void 0, this.meshRebuildQueued = !1, this.cX = !1, this.VL = bb.VL
      }
      initClient(bb) {
        var ab, Ub, Ab;
        this.colyseusEntity = bb, this.meshKind = bb.meshKind, this.meshOpts = bb.meshOpts, this.leaderboardTop = bb.leaderboardTop, this.VL.wZ.add([bb.x, bb.y, bb.z], 1, 1, null, null, !1, !1, this.eId), this.VL.wZ.FW(this.eId, "smoothToServerPos");
        const Mb = "Person" === this.meshKind;
        this.VL.wZ.FW(this.eId, "meshRotation", {
          isServerControlled: !0,
          ...Mb ? {
            defaultRotationsPerSecond: .5
          } : {},
          childrenNodeParams: Mb ? [{
            nodeName: "HeadMesh",
            softTolerance: mU.i,
            hardTolerance: null
          }] : []
        }), this.updateHidingMeshMgr(), this.canSeeSub = na.m.subscribe(`otherEntitySettings|${this.eId}|canSee`, (bb => {
          this.updateHidingMeshMgr()
        }));
        const Tb = () => {
          const bb = this.VL.wZ.Fbb(this.eId);
          if (!bb) return;
          const ab = (0, pU.f)(this.eId);
          if ("number" === typeof bb.jW) {
            var Ub, Ab, Mb, Tb;
            const Eb = null === (Ub = (0, iU.j)("head", null === (Mb = this.getSpec()) || void 0 === Mb || null === (Tb = Mb.opts.textures) || void 0 === Tb ? void 0 : Tb.head)) || void 0 === Ub || null === (Ab = Ub.personModel) || void 0 === Ab ? void 0 : Ab.fullBody;
            return this.VL.Fj.vW.setPickable(bb.jW, ab && !Eb), void(0, IU.updatePersonAttachmentPickability)(this.VL, this.eId, ab)
          }
          const Eb = bb.mesh;
          if (Eb)
            for (const Yb of [Eb, ...Eb.getChildMeshes(!1)]) "zR" in Yb && !Yb.name.startsWith("Cape|") && (Yb.zR = ab)
        };
        this.canAttackSub = na.m.subscribe(`otherEntitySettings|${this.eId}|canAttack`, Tb), this.interactableSub = na.m.subscribe(`otherEntitySettings|${this.eId}|interactable`, Tb), this.overlayColourSub = na.m.subscribe(`otherEntitySettingsClientifiedEId|${this.eId}|overlayColour`, (bb => {
          this.updateOverlayColour(bb)
        })), this.opacitySub = na.m.subscribe(`otherEntitySettingsClientifiedEId|${this.eId}|opacity`, (bb => {
          this.updateOpacity(bb)
        })), this.zIndexSub = na.m.subscribe(`otherEntitySettingsClientifiedEId|${this.eId}|zIndex`, (bb => {
          this.updateZIndex(bb)
        }));
        const Eb = this.VL.jH[this.VL.ZH][this.eId];
        this.updateOverlayColour(null !== (ab = null === Eb || void 0 === Eb ? void 0 : Eb.overlayColour) && void 0 !== ab ? ab : null), this.updateOpacity(null !== (Ub = null === Eb || void 0 === Eb ? void 0 : Eb.opacity) && void 0 !== Ub ? Ub : 1), this.updateZIndex(null !== (Ab = null === Eb || void 0 === Eb ? void 0 : Eb.zIndex) && void 0 !== Ab ? Ab : 0), this.multilineTextBoxSub = (0, fU.s)(this.VL, this.eId)
      }
      onChangeClient(bb, ab) {
        if ("xRotation" === bb || "yRotation" === bb || "zRotation" === bb)(0, fU.w)(this.VL, this.eId, bb, ab);
        else if ("pose" === bb) {
          const bb = this.VL.wZ.Kbb(this.eId);
          bb && (bb.pose = ab || "standing")
        } else "meshKind" === bb || "meshOpts" === bb ? (this[bb] = ab, this.queueMeshRebuild()) : "name" === bb && "" !== ab ? this.updateHidingMeshMgr() : "leaderboardTop" === bb && (this.leaderboardTop = ab, na.m.IR(`leaderboardTop|${this.eId}`, ab))
      }
      disposeClient() {
        this.cX = !0, this.VL.wZ.deleteEntity(this.eId), na.m.unsubscribe(this.canSeeSub), na.m.unsubscribe(this.canAttackSub), na.m.unsubscribe(this.interactableSub), na.m.unsubscribe(this.overlayColourSub), na.m.unsubscribe(this.opacitySub), na.m.unsubscribe(this.zIndexSub), na.m.unsubscribe(this.multilineTextBoxSub)
      }
      getCurrentHidingMeshMgrState() {
        var bb, ab;
        return {
          canSee: null !== (bb = null === (ab = this.VL.jH[this.VL.ZH][this.eId]) || void 0 === ab ? void 0 : ab.canSee) && void 0 !== bb && bb,
          name: this.colyseusEntity.name,
          meshKind: this.meshKind,
          meshOpts: this.meshOpts
        }
      }
      updateHidingMeshMgr() {
        var bb, ab, Ub;
        const {
          VL: Ab
        } = this, {
          wZ: Mb
        } = Ab, Tb = this.getCurrentHidingMeshMgrState();
        if ((0, DU.Td)(this.previousHidingMeshManagerState, Tb)) return;
        if (this.previousHidingMeshManagerState = Tb, Mb.rW(this.eId, "hidingMeshManager"), null === (bb = Ab.jH[Ab.ZH][this.eId]) || void 0 === bb || !bb.canSee) return;
        const Eb = this.getSpec();
        if (!Eb) return;
        const {
          type: Yb,
          opts: Bb
        } = Eb;
        "Person" === Yb && (Bb.textures = (0, iU.m)(Bb.textures)), Bb.eId = this.eId, Mb.FW(this.eId, "hidingMeshManager", {
          addMeshComponent: () => {
            var bb, ab, Ub;
            "Leaderboard" === Yb && (Bb.leaderboardTop = this.leaderboardTop);
            const Tb = this.bloxd.client.meshCreator.getEntityMesh(Yb, Bb, (bb => {
              var ab, Ub;
              if ("number" === typeof bb) {
                var Mb, Tb, Eb;
                const ab = Ab.Fj.vW;
                ab.setEntityId(bb, this.eId);
                const Ub = "Person" === Yb && (null === (Mb = (0, iU.j)("head", null === (Eb = Bb.textures) || void 0 === Eb ? void 0 : Eb.head)) || void 0 === Mb || null === (Tb = Mb.personModel) || void 0 === Tb ? void 0 : Tb.fullBody);
                return void ab.setPickable(bb, (0, pU.f)(this.eId) && !Ub)
              }
              const eb = bb;
              for (const Yb of [eb, ...eb.getChildMeshes(!1)]) void 0 === Yb.zR || Yb.name.startsWith("Cape|") || (Yb.zR = (0, pU.f)(this.eId), Yb.metadata ??= new Ab.Fj.xR, Yb.metadata.eId = this.eId);
              this.updateOpacity(null !== (ab = null === (Ub = Ab.jH[Ab.ZH][this.eId]) || void 0 === Ub ? void 0 : Ub.opacity) && void 0 !== ab ? ab : 1)
            }));
            if (!Tb) return;
            const {
              jW: Eb,
              mesh: eb,
              meshOffset: vb,
              nameYOffset: Lb,
              modelLoaded: Pb
            } = Tb;
            null === Pb || void 0 === Pb || Pb.then((() => {
              var bb;
              (null === (bb = Mb.Fbb(this.eId)) || void 0 === bb ? void 0 : bb.mesh) === eb && (this.previousHidingMeshManagerState = null, this.updateHidingMeshMgr())
            }));
            const Xb = null === Eb ? null : Ab.Fj.vW.GUb(Eb, 0);
            if (Mb.FW(this.eId, Mb.names.mesh, {
                jW: Eb,
                MUb: Xb,
                mesh: eb,
                mEb: !1,
                YUb: "Leaderboard" !== Yb,
                offset: vb.slice(),
                fEb: "ParticleEmitter" === Yb && Bb.followTargetMeshOffset ? bb => {
                  var ab;
                  WU().copy(bb, vb);
                  const Ub = null === (ab = Mb.Iab(this.eId)) || void 0 === ab ? void 0 : ab.tX,
                    Ab = void 0 === Ub ? null : Mb.Kbb(Ub);
                  if (Ab) {
                    var Tb, Eb;
                    const ab = this.bloxd.getEntityHeading(null !== (Tb = Ab.ridingVehicleEId) && void 0 !== Tb ? Tb : Ub, !0),
                      Mb = Math.sin(ab),
                      Yb = Math.cos(ab);
                    bb[0] += Ab.meshOffset[0] * Yb + Ab.meshOffset[2] * Mb, bb[1] += Ab.meshOffset[1], bb[2] += Ab.meshOffset[2] * Yb - Ab.meshOffset[0] * Mb;
                    const Bb = null !== (Eb = Ab.ridingVehicleEId) && void 0 !== Eb ? Eb : null;
                    null !== Bb && (0, FU.d)(this.VL, Bb, bb)
                  }
                } : null
              }), "Person" === Yb) {
              var jb, Rb, kb, yb;
              Mb.FW(this.eId, Mb.names.meshAttachments, {
                personFullBody: null !== (jb = null === (Rb = (0, iU.j)("head", null === (yb = Bb.textures) || void 0 === yb ? void 0 : yb.head)) || void 0 === Rb || null === (kb = Rb.personModel) || void 0 === kb ? void 0 : kb.fullBody) && void 0 !== jb && jb
              });
              for (const bb of RU.s) {
                var Zb, Db, zb;
                const ab = null === (Zb = Bb.textures) || void 0 === Zb ? void 0 : Zb[bb];
                ab && null !== (Db = (0, iU.j)(bb, ab)) && void 0 !== Db && null !== (zb = Db.attachments) && void 0 !== zb && zb.length && xU.c.Player.meshApi.updatePlayerCosmetic(this.eId, Eb, bb, ab)
              }
              Mb.FW(this.eId, Mb.names.moveState), Mb.FW(this.eId, "updateWalkingState", {
                jW: Eb,
                MUb: Xb,
                walkingLegSwingDuration: mU.r
              }), Mb.FW(this.eId, "humanoidMesh", {
                jW: Eb,
                MUb: Xb,
                heldItemPositionParams: {},
                maxWalkingAngleOverride: null
              }), Mb.FW(this.eId, "animator", {
                jW: Eb,
                MUb: Xb,
                modelLifeformType: "Player"
              }), dU.g.hasAnimation("Person") && Mb.FW(this.eId, "rigAnimation", {
                target: "Person",
                jW: Eb
              }), Mb.Kbb(this.eId).pose = this.colyseusEntity.pose || "standing"
            } else if ("BloxdBlock" === Yb && null !== Eb) {
              Mb.FW(this.eId, "animator", {
                jW: Eb,
                MUb: Xb,
                modelLifeformType: null
              });
              const bb = (0, yU.r)(Bb.blockName);
              null !== bb && Mb.FW(this.eId, "rigAnimation", {
                target: bb,
                jW: Eb
              })
            }
            Mb.bYb(this.eId, "entityName", {
              name: this.colyseusEntity.name,
              nameYOffset: Lb
            }), this.bloxd.setEntityName(this.eId, this.colyseusEntity.name), !0 === Bb.autoRotate && (Mb.rW(this.eId, "meshRotation"), Mb.FW(this.eId, "autoRotate"));
            const {
              lineToEId: xb
            } = Bb;
            (0, kU.I)(xb) || Mb.FW(this.eId, "lineToEntity", {
              lineToEId: xb
            });
            const ib = Ab.jH[Ab.ZH][this.eId];
            this.updateOverlayColour(null !== (bb = null === ib || void 0 === ib ? void 0 : ib.overlayColour) && void 0 !== bb ? bb : null), this.updateOpacity(null !== (ab = null === ib || void 0 === ib ? void 0 : ib.opacity) && void 0 !== ab ? ab : 1), this.updateZIndex(null !== (Ub = null === ib || void 0 === ib ? void 0 : ib.zIndex) && void 0 !== Ub ? Ub : 0)
          },
          removeMeshComponent: () => {
            "Person" !== Yb && "BloxdBlock" !== Yb || Mb.rW(this.eId, "rigAnimation"), Mb.rW(this.eId, Mb.names.mesh), Mb.l_(this.eId, Mb.names.meshAttachments) && Mb.rW(this.eId, Mb.names.meshAttachments), Mb.rW(this.eId, "entityName"), Mb.rW(this.eId, "autoRotate"), Mb.rW(this.eId, "lineToEntity"), "Person" === Yb ? (Mb.rW(this.eId, Mb.names.moveState), Mb.rW(this.eId, "updateWalkingState"), Mb.rW(this.eId, "humanoidMesh"), Mb.rW(this.eId, "animator")) : "BloxdBlock" === Yb && Mb.rW(this.eId, "animator")
          },
          hideDist: null !== (ab = Bb.hideDist) && void 0 !== ab ? ab : 80,
          movingHideDist: null !== (Ub = Bb.hideDist) && void 0 !== Ub ? Ub : 120,
          displayOutsideLoadedChunk: Bb.hideDist > 100,
          immediatelyUpdate: !0,
          Gv: "BloxdBlock" === Yb ? Bb.blockName : Yb
        })
      }
      queueMeshRebuild() {
        this.meshRebuildQueued || (this.meshRebuildQueued = !0, queueMicrotask((() => {
          this.meshRebuildQueued = !1, this.cX || this.updateHidingMeshMgr()
        })))
      }
      getSpec() {
        return (0, ZU.h)({
          meshKind: this.meshKind,
          meshOpts: this.meshOpts
        })
      }
      updateOverlayColour(bb) {
        var ab, Ub;
        if ("Person" !== this.meshKind) return;
        let Ab = new zU.b(0, 0, 0, 0);
        if (null !== bb) {
          const ab = (0, DU.T)(bb);
          Ab = new zU.b(ab[0] / 255, ab[1] / 255, ab[2] / 255, .5)
        }
        const Mb = null !== (ab = null === (Ub = this.VL.wZ.Fbb(this.eId)) || void 0 === Ub ? void 0 : Ub.jW) && void 0 !== ab ? ab : null;
        null !== Mb && xU.c.Player.meshApi.updateMeshOverlayColour(Mb, Ab)
      }
      updateZIndex(bb) {
        var ab;
        if ("Person" !== this.meshKind) return;
        const Ub = null === (ab = this.VL.wZ.Fbb(this.eId)) || void 0 === ab ? void 0 : ab.jW;
        "number" === typeof Ub && this.VL.Fj.vW.setRenderingGroupId(Ub, bb)
      }
      updateOpacity(bb) {
        const ab = this.VL.wZ.Fbb(this.eId);
        ab && ("number" !== typeof ab.jW ? ab.mesh && "ParticleEmitter" !== this.meshKind && (0, HU.f)(ab.mesh, bb) : xU.c.Player.meshApi.updateMeshOpacity(ab.jW, bb))
      }
    }
    var GU = Ub(38319);
    class QU {
      constructor(bb, ab) {
        this.eId = ab, this.VL = void 0, this.schema = void 0, this.VL = bb.VL
      }
      initClient(bb) {
        this.schema = bb, this.VL.wZ.add([bb.x, bb.y, bb.z], .1, .1, null, null, !1, !1, this.eId), this.VL.wZ.FW(this.eId, "smoothToServerPos"), GU.e.add(this.eId, this.copyOpts())
      }
      onChangeClient(bb) {
        MU.j.includes(bb) && GU.e.update(this.eId, this.copyOpts())
      }
      disposeClient() {
        GU.e.remove(this.eId), this.VL.wZ.deleteEntity(this.eId)
      }
      copyOpts() {
        const {
          soundName: bb,
          volume: ab,
          refDistance: Ub,
          maxHearDist: Ab,
          rate: Mb
        } = this.schema;
        return {
          soundName: bb,
          volume: ab,
          refDistance: Ub,
          maxHearDist: Ab,
          rate: Mb
        }
      }
    }
    var qU = Ub(3347),
      uU = Ub(36111),
      rU = Ub(6091),
      KU = Ub(37134),
      oU = Ub(2549),
      lU = Ub(37486),
      tU = Ub(8650),
      wU = Ub(37808),
      sU = Ub(37106),
      gU = Ub(2653);
    class CU {
      constructor(bb, ab) {
        let Ub = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 4,
          Ab = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : () => performance.now();
        this.Sab = bb, this.VL = ab, this.setupBudgetMs = Ub, this.now = Ab, this.createStateCallbacks = void 0, this.roomStateCallbacks = void 0, this.allItems = {}, this.detachers = new Map, this.deferredSetups = new Map, this.queuedSetups = new Map, this.promotedSetups = new Set, this.setupBudgetLeftMs = void 0, this.lastRefillMs = void 0, this.roomState = void 0, this.cX = !1, this.onFrame = () => {
          this.setUpQueuedEntities(!0)
        }, this.Sy = () => {
          this.setUpQueuedEntities(this.now() - this.lastRefillMs > 100)
        }, this.setUpPromoted = () => {
          for (const bb of this.promotedSetups) {
            this.promotedSetups.delete(bb);
            const ab = this.queuedSetups.get(bb);
            ab && (this.queuedSetups.delete(bb), this.timedSetup(ab, bb))
          }
        }, this.createStateCallbacks = (0, tU.getStateCallbacks)(bb), this.roomStateCallbacks = this.createStateCallbacks(bb.state), this.roomState = bb.state, this.setupBudgetLeftMs = Ub, this.lastRefillMs = Ab()
      }
      setup() {
        this.setupEntityHandlers(), this.setupItemHandlers(), this.Sab.onStateChange(this.setUpPromoted), this.VL.on("beforeInputs", this.onFrame), this.VL.on("qL", this.Sy)
      }
      setUpQueuedEntities(bb) {
        var ab;
        if ((null === (ab = (0, oU.e)().client.getMsgHandler()) || void 0 === ab ? void 0 : ab.Sab) !== this.Sab) return this.VL.off("beforeInputs", this.onFrame), this.VL.off("qL", this.Sy), this.queuedSetups.clear(), void this.promotedSetups.clear();
        if (bb && (this.setupBudgetLeftMs = this.setupBudgetMs, this.lastRefillMs = this.now()), this.setUpPromoted(), 0 !== this.queuedSetups.size)
          for (WU().copy(VU, this.VL.wZ.eZ(this.VL.ZH)); this.setupBudgetLeftMs > 0;) {
            const bb = this.nearestQueued(VU);
            if (null === bb) return;
            this.setUpIfQueued(bb), this.setUpPromoted()
          }
      }
      nearestQueued(bb) {
        let ab = null,
          Ub = 1 / 0;
        return this.queuedSetups.forEach(((Ab, Mb) => {
          const Tb = function(bb, ab) {
            return (ab.x - bb[0]) ** 2 + (ab.y - bb[1]) ** 2 + (ab.z - bb[2]) ** 2
          }(bb, Ab);
          (null === ab || Tb < Ub) && (ab = Mb, Ub = Tb)
        })), ab
      }
      setUpOrQueue(bb, ab) {
        0 === this.queuedSetups.size && this.setupBudgetLeftMs > 0 || this.mustSetUpNow(bb, ab) ? this.timedSetup(bb, ab) : this.queuedSetups.set(ab, bb)
      }
      mustSetUpNow(bb, ab) {
        const Ub = this.VL.n_;
        if (ab === Ub) return !0;
        const Ab = this.roomState.entities.get(Ub);
        return !(!Ab || Ab.ridingVehicleEId !== ab && Ab.followingEId !== ab) || (OU(bb.type) === jU.d || (0, oU.e)().getFollowingEntities(ab).length > 0)
      }
      setUpIfQueued(bb) {
        const ab = this.queuedSetups.get(bb);
        ab && (this.queuedSetups.delete(bb), this.timedSetup(ab, bb))
      }
      promoteIfQueued(bb) {
        null !== bb && this.queuedSetups.has(bb) && this.promotedSetups.add(bb)
      }
      timedSetup(bb, ab) {
        const Ub = this.now();
        this.setupEntity(bb, ab), this.setupBudgetLeftMs -= this.now() - Ub
      }
      setupEntityHandlers() {
        this.roomStateCallbacks.entities.uZ(((bb, ab) => {
          this.VL.n_ ? this.setUpOrQueue(bb, ab) : this.deferEntitySetupUntilInitInfo(bb, ab)
        })), this.roomStateCallbacks.entities.kp(((bb, ab) => {
          const Ub = this.deferredSetups.get(ab);
          Ub && (na.m.unsubscribe(Ub), this.deferredSetups.delete(ab)), this.queuedSetups.delete(ab), this.detach(ab), (0, oU.e)().client.disposeEntity(ab)
        }))
      }
      deferEntitySetupUntilInitInfo(bb, ab) {
        const Ub = na.m.Wk("initInfoReceived", (() => {
          this.deferredSetups.delete(ab), this.setUpOrQueue(bb, ab)
        }));
        this.deferredSetups.set(ab, Ub), (0, qU.onGameResetOnce)((() => {
          this.deferredSetups.get(ab) === Ub && (na.m.unsubscribe(Ub), this.deferredSetups.delete(ab)), (0, oU.e)().updatePositionAndPhysics(this.VL.ZH, {
            type: rU.p.DEFAULT,
            tier: null
          }, !0), (0, oU.e)().takeHeldPlayerBodySize(this.VL.ZH);
          const bb = this.VL.wZ.Rbb(this.VL.ZH);
          bb && (bb.movementType = rU.o.NORMAL)
        }))
      }
      setupEntity(bb, ab) {
        const Ub = ab === this.VL.n_;
        if (Ub)(0, oU.e)().client.Ul(this.VL.ZH, null, null);
        else {
          const {
            type: Ub
          } = bb, Ab = OU(Ub);
          if (void 0 === Ab) return void
          function(bb, ab) {
            const Ub = String(bb);
            if (cU.has(Ub)) return;
            cU.add(Ub);
            const Ab = Ub.length > 80 ? `${Ub.slice(0,80)}...` : Ub,
              Mb = `No client handler for entity type ${JSON.stringify(Ab)}, so entity ${ab} is not set up`;
            console.warn(Mb), (0, gU.e)("uncaught", Mb, "unknown_entity_type")
          }(Ub, ab);
          (0, oU.e)().client.Ul(ab, bb, new Ab((0, oU.e)(), ab, Ub))
        }
        const Ab = this.createStateCallbacks(bb);
        if (Ub) return this.setupMapSchemaCallbacks(ab, bb, Ab, "armour"), this.setupScalarField(ab, bb, Ab, "scale"), this.setupScalarField(ab, bb, Ab, "ridingVehicleEId"), this.setupScalarField(ab, bb, Ab, "followingEId"), this.setupScalarField(ab, bb, Ab, "followingOffset"), void this.setupScalarField(ab, bb, Ab, "shouldMatchFollowingEntityRotation");
        for (const Mb of LU(bb.constructor)) bb[Mb] instanceof UU.MapSchema ? this.setupMapSchemaCallbacks(ab, bb, Ab, Mb) : this.setupScalarField(ab, bb, Ab, Mb)
      }
      setupMapSchemaCallbacks(bb, ab, Ub, Ab) {
        const Mb = Ub[Ab],
          Tb = new Map;
        Mb.uZ(((Ub, Mb) => {
          if (this.onEntityFieldChange(bb, ab, Ab, {
              key: Mb,
              value: Ub
            }), !(Ub instanceof UU.Schema)) return;
          const Eb = this.createStateCallbacks(Ub),
            Yb = [];
          for (const Tb of LU(Ub.constructor)) Yb.push(this.listenForFutureChanges(Eb, Tb, (() => {
            this.onEntityFieldChange(bb, ab, Ab, {
              key: Mb,
              value: Ub
            })
          })));
          Tb.set(Mb, (() => {
            for (const bb of Yb) bb()
          }))
        })), Mb.kp(((Ub, Mb) => {
          var Eb;
          null === (Eb = Tb.get(Mb)) || void 0 === Eb || Eb(), Tb.delete(Mb), this.onEntityFieldChange(bb, ab, Ab, {
            key: Mb,
            value: null
          })
        })), this.addDetacher(bb, (() => {
          for (const bb of Tb.values()) bb();
          Tb.clear()
        }))
      }
      setupScalarField(bb, ab, Ub, Ab) {
        this.onEntityFieldChange(bb, ab, Ab, ab[Ab]);
        const Mb = this.listenForFutureChanges(Ub, Ab, (Ub => {
          this.onEntityFieldChange(bb, ab, Ab, Ub)
        }));
        this.addDetacher(bb, Mb)
      }
      addDetacher(bb, ab) {
        let Ub = this.detachers.get(bb);
        Ub || (Ub = [], this.detachers.set(bb, Ub)), Ub.push(ab)
      }
      detach(bb) {
        for (const Ub of null !== (ab = this.detachers.get(bb)) && void 0 !== ab ? ab : []) {
          var ab;
          Ub()
        }
        this.detachers.delete(bb)
      }
      listenForFutureChanges(bb, ab, Ub) {
        return bb.listen(ab, Ub, !1)
      }
      onEntityFieldChange(bb, ab, Ub, Ab) {
        switch (Ub) {
          case "ridingVehicleEId": {
            this.promoteIfQueued(Ab);
            const ab = this.VL.wZ.Kbb((0, uU.b)(bb));
            ab && (ab.ridingVehicleEId = Ab);
            break
          }
          case "armour":
            this.handleArmourChange(bb, Ab);
            break;
          case "followingEId":
            this.promoteIfQueued(Ab), this.handleFollowingEIdChange(bb, ab, Ab);
            break;
          case "xRotation":
          case "yRotation":
          case "zRotation":
            this.handleRotationChange(bb, Ub, Ab);
            break;
          case "scale":
            this.handleScaleChange(bb, Ab);
            break;
          case "baseRenderHeading":
            this.handleBaseRenderHeadingChange(bb, Ab);
            break;
          case "followingOffset":
            this.handleFollowingOffsetChange(bb, Ab);
            break;
          case "shouldMatchFollowingEntityRotation":
            this.handleShouldMatchFollowingEntityRotationChange(bb, Ab);
            break;
          case "x":
          case "y":
          case "z":
            return void this.handlePositionChange(bb, Ub, Ab)
        }(0, oU.e)().client.updateEntityField(bb, Ub, Ab)
      }
      handleArmourChange(bb, ab) {
        var Ub, Ab;
        const {
          key: Mb,
          value: Tb
        } = ab;
        (0, xU.q)(bb, Mb, null !== (Ub = null === Tb || void 0 === Tb ? void 0 : Tb.itemName) && void 0 !== Ub ? Ub : null, null !== (Ab = null === Tb || void 0 === Tb ? void 0 : Tb.enchantmentTier) && void 0 !== Ab ? Ab : null)
      }
      handleFollowingEIdChange(bb, ab, Ub) {
        const Ab = (0, uU.b)(bb),
          Mb = Ab === this.VL.ZH;
        if (this.VL.wZ.rW(Ab, this.VL.wZ.names.qD), Ub) this.VL.wZ.rW(Ab, "smoothToServerPos"), this.VL.wZ.FW(Ab, this.VL.wZ.names.qD, {
          tX: (0, uU.b)(Ub),
          offset: Array.from(ab.followingOffset),
          dab: ab.shouldMatchFollowingEntityRotation,
          Qab: !0,
          qab: (bb, Ab) => {
            if (WU().copy(bb, ab.followingOffset), ab.ridingVehicleEId === Ub) {
              const ab = (0, uU.b)(Ub),
                Mb = (0, oU.e)().getEntityHeading(ab, Ab);
              WU().wa(bb, bb, WU().ZERO, Mb)
            }
          }
        });
        else if (!Mb) {
          this.VL.wZ.l_(Ab, "smoothToServerPos") || this.VL.wZ.FW(Ab, "smoothToServerPos");
          const bb = this.VL.wZ.getState(Ab, "smoothToServerPos"),
            ab = this.VL.wZ.Al(Ab).position;
          (0, sU.setServerPosition)(bb, ab[0], ab[1], ab[2])
        }
      }
      handleRotationChange(bb, ab, Ub) {
        const Ab = "xRotation" === ab ? 0 : "yRotation" === ab ? 1 : 2;
        for (const Mb of (0, oU.e)().getFollowingEntities(bb)) {
          const bb = this.VL.wZ.getState(Mb, "meshRotation"),
            ab = this.VL.wZ.Iab(Mb);
          bb && ab.dab && (bb.serverSetRotation[Ab] = Ub)
        }
      }
      handleScaleChange(bb, ab) {
        const Ub = (0, uU.b)(bb);
        if (na.m.IR(`entityScale|${Ub}`, ab), Ub === this.VL.ZH) {
          var Ab;
          (0, oU.e)().removeFromEyeHeightCache(Ub);
          const bb = this.VL.wZ.Rbb(this.VL.ZH),
            ab = null !== (Ab = null === bb || void 0 === bb ? void 0 : bb.physicsState) && void 0 !== Ab ? Ab : {
              type: rU.p.DEFAULT,
              tier: null
            };
          return void(0, oU.e)().updatePositionAndPhysics(this.VL.ZH, ab, !1)
        }
        const Mb = (0, oU.e)().getLifeformType(Ub);
        if (null === Mb) return;
        const {
          physicsBodyWidth: Tb,
          physicsBodyHeight: Eb
        } = (0, wU.f)(ab, Mb);
        this.VL.wZ.Wab(Ub, Tb, Eb, Tb)
      }
      handleBaseRenderHeadingChange(bb, ab) {
        const Ub = this.VL.wZ.getState(bb, "meshRotation");
        Ub && (Ub.baseRenderRotation[1] = ab);
        for (const Ab of (0, oU.e)().getFollowingEntities(bb)) {
          const bb = this.VL.wZ.getState(Ab, "meshRotation"),
            Ub = this.VL.wZ.Iab(Ab);
          bb && Ub.dab && (bb.baseRenderRotation[1] = ab)
        }
      }
      handleFollowingOffsetChange(bb, ab) {
        const Ub = this.VL.wZ.Iab((0, uU.b)(bb));
        if (Ub && Ub.offset) {
          const bb = ab ? Array.from(ab) : WU().ZERO;
          Ub.offset[0] = bb[0], Ub.offset[1] = bb[1], Ub.offset[2] = bb[2]
        }
      }
      handleShouldMatchFollowingEntityRotationChange(bb, ab) {
        const Ub = this.VL.wZ.Iab((0, uU.b)(bb));
        Ub && (Ub.dab = null === ab || void 0 === ab || ab)
      }
      handlePositionChange(bb, ab, Ub) {
        if (this.VL.wZ.l_(bb, "smoothToServerPos")) {
          const Ab = this.VL.wZ.getState(bb, "smoothToServerPos");
          (0, sU.setServerPositionAxis)(Ab, JU[ab], Ub)
        }
      }
      setupItemHandlers() {
        this.roomStateCallbacks.items.uZ(((bb, ab) => {
          this.allItems[ab] = bb, (0, KU.n)(this.VL, ab, [bb.x, bb.y, bb.z], bb.id, {
            amount: bb.amount,
            attributes: JSON.parse(bb.attributes),
            YA: (0, Sa.c)(this.VL).cantPickUpItem(ab),
            size: bb.size,
            predictedAt: (0, oU.e)().client.itemDropPrediction.onServerItemAdded(ab)
          });
          const Ub = this.createStateCallbacks(bb);
          for (const Ab of LU(EU)) this.onItemFieldChange(ab, Ab, bb[Ab]), this.addDetacher(ab, this.listenForFutureChanges(Ub, Ab, (bb => {
            this.onItemFieldChange(ab, Ab, bb)
          })))
        })), this.roomStateCallbacks.items.kp(((bb, ab) => {
          delete this.allItems[ab], this.detach(ab), (0, oU.e)().client.itemDropPrediction.onServerItemRemoved(ab), this.VL.wZ.l_(ab, this.VL.wZ.names.itemState) && this.VL.wZ.deleteEntity(ab), (0, Sa.c)(this.VL).disposeEntity(ab)
        }))
      }
      onItemFieldChange(bb, ab, Ub) {
        if (ab in JU) {
          if (this.VL.wZ.l_(bb, "itemState")) {
            const Ab = this.VL.wZ.getState(bb, "smoothToServerPos");
            (0, sU.setServerPositionAxis)(Ab, JU[ab], Ub), (0, oU.e)().client.itemDropPrediction.onServerItemMoved(bb)
          }
          return
        }
        if (!this.VL.wZ.l_(bb, "itemState")) return;
        const Ab = this.VL.wZ.getState(bb, "itemState");
        "amount" === ab && Ub !== Ab.amount && (Ab.creationTime = Date.now()), Ab[ab] = "attributes" === ab ? JSON.parse(Ub) : Ub
      }
      dispose() {
        if (!this.cX) {
          this.cX = !0, this.VL.off("beforeInputs", this.onFrame), this.VL.off("qL", this.Sy), this.queuedSetups.clear(), this.promotedSetups.clear();
          for (const bb of this.deferredSetups.values()) na.m.unsubscribe(bb);
          this.deferredSetups.clear(), this.VL.wZ.rW(this.VL.ZH, this.VL.wZ.names.qD);
          for (const bb in this.allItems) this.VL.wZ.deleteEntity(bb), delete this.allItems[bb];
          for (const bb of [...this.detachers.keys()]) this.detach(bb);
          (0, Sa.c)(this.VL).clear();
          for (const bb of (0, oU.e)().client.iterateEntityIds())(0, oU.e)().client.disposeEntity(bb)
        }
      }
    }
    const VU = [0, 0, 0];

    function OU(bb) {
      if ("string" !== typeof bb) return;
      const ab = bb.indexOf("|"),
        Ub = -1 === ab ? bb : bb.slice(0, ab),
        Ab = SU();
      return Object.hasOwn(Ab, Ub) ? Ab[Ub] : void 0
    }
    const cU = new Set;
    const JU = {
      x: 0,
      y: 1,
      z: 2
    };
    let nU = null;

    function SU() {
      return null !== nU || (nU = {
        ...Object.fromEntries(MU.n.map((bb => {
          const {
            Gv: ab
          } = (0, lU.b)(bb);
          return [bb, ab]
        }))),
        Pebble: jU.d,
        Snowball: jU.d,
        "Snowball Launcher": jU.d,
        "Reinforced Pebble": jU.d,
        Bullet: jU.d,
        "Reinforced Ball": jU.d,
        Ball: jU.d,
        Mango: jU.d,
        "Moonstone Orb": jU.d,
        ...Object.fromEntries(AU.t.map((bb => [(0, DU.Mb)(bb), jU.d]))),
        Arrow: jU.d,
        "Arrow of Speed": jU.d,
        "Arrow of Poison": jU.d,
        "Arrow of Slowness": jU.d,
        "Arrow of Weakness": jU.d,
        "Arrow of Knockback": jU.d,
        "Arrow of Strength": jU.d,
        "Arrow of Invisibility": jU.d,
        "Arrow of Jumping": jU.d,
        "Arrow of Defense": jU.d,
        "Arrow of Instant Healing": jU.d,
        "Arrow of Instant Damage": jU.d,
        "Arrow of Regeneration": jU.d,
        "Arrow of Haste": jU.d,
        "Arrow of Shield": jU.d,
        "Arrow of Double Jump": jU.d,
        "Arrow of Heat Resistance": jU.d,
        "Arrow of X-Ray Vision": jU.d,
        "Arrow of Mining Yield": jU.d,
        "Arrow of Brain Rot": jU.d,
        "Arrow of Milk": jU.d,
        Fireball: jU.d,
        "Bouncy Bomb": jU.d,
        RPG: jU.d,
        "Obby RPG": jU.d,
        "Super RPG": jU.d,
        "Grenade Launcher": jU.d,
        Iceball: jU.d,
        Coconut: jU.d,
        "Splash Speed Potion": jU.d,
        "Splash Defense Potion": jU.d,
        "Splash Strength Potion": jU.d,
        "Splash Invisibility Potion": jU.d,
        "Splash Jump Potion": jU.d,
        "Splash Knockback Potion": jU.d,
        "Splash Poison Potion": jU.d,
        "Splash Speed Potion II": jU.d,
        "Splash Defense Potion II": jU.d,
        "Splash Strength Potion II": jU.d,
        "Splash Jump Potion II": jU.d,
        "Splash Knockback Potion II": jU.d,
        "Splash Poison Potion II": jU.d,
        "Splash Slowness Potion": jU.d,
        "Splash Slowness Potion II": jU.d,
        "Splash Weakness Potion": jU.d,
        "Splash Weakness Potion II": jU.d,
        "Splash Milk Potion": jU.d,
        "Splash Instant Damage Potion": jU.d,
        "Splash Instant Damage Potion II": jU.d,
        "Splash Instant Healing Potion": jU.d,
        "Splash Instant Healing Potion II": jU.d,
        "Splash Regeneration Potion": jU.d,
        "Splash Regeneration Potion II": jU.d,
        "Splash Haste Potion": jU.d,
        "Splash Haste Potion II": jU.d,
        "Splash Shield Potion": jU.d,
        "Splash Shield Potion II": jU.d,
        "Splash Double Jump Potion": jU.d,
        "Splash Heat Resistance Potion": jU.d,
        "Splash X-Ray Vision Potion": jU.d,
        "Splash Mining Yield Potion": jU.d,
        "Splash Mining Yield Potion II": jU.d,
        "Splash Brain Rot Potion": jU.d,
        "Yellow Paintball Gun": jU.d,
        "White Paintball Gun": jU.d,
        "Red Paintball Gun": jU.d,
        "Purple Paintball Gun": jU.d,
        "Pink Paintball Gun": jU.d,
        "Orange Paintball Gun": jU.d,
        "Magenta Paintball Gun": jU.d,
        "Lime Paintball Gun": jU.d,
        "Light Gray Paintball Gun": jU.d,
        "Light Blue Paintball Gun": jU.d,
        "Green Paintball Gun": jU.d,
        "Gray Paintball Gun": jU.d,
        "Cyan Paintball Gun": jU.d,
        "Brown Paintball Gun": jU.d,
        "Blue Paintball Gun": jU.d,
        "Black Paintball Gun": jU.d,
        "Yellow Heavy Paintball Gun": jU.d,
        "White Heavy Paintball Gun": jU.d,
        "Red Heavy Paintball Gun": jU.d,
        "Purple Heavy Paintball Gun": jU.d,
        "Pink Heavy Paintball Gun": jU.d,
        "Orange Heavy Paintball Gun": jU.d,
        "Magenta Heavy Paintball Gun": jU.d,
        "Lime Heavy Paintball Gun": jU.d,
        "Light Gray Heavy Paintball Gun": jU.d,
        "Light Blue Heavy Paintball Gun": jU.d,
        "Green Heavy Paintball Gun": jU.d,
        "Gray Heavy Paintball Gun": jU.d,
        "Cyan Heavy Paintball Gun": jU.d,
        "Brown Heavy Paintball Gun": jU.d,
        "Blue Heavy Paintball Gun": jU.d,
        "Black Heavy Paintball Gun": jU.d,
        "Toxin Ball": jU.d,
        "Splash Aura XP Potion": jU.d,
        "Splash Aura XP Potion II": jU.d,
        "Arrow of Aura XP": jU.d,
        Firecracker: jU.d,
        "Rainbow Firecracker": jU.d,
        "White Firecracker": jU.d,
        "Orange Firecracker": jU.d,
        "Magenta Firecracker": jU.d,
        "Light Blue Firecracker": jU.d,
        "Yellow Firecracker": jU.d,
        "Lime Firecracker": jU.d,
        "Pink Firecracker": jU.d,
        "Gray Firecracker": jU.d,
        "Light Gray Firecracker": jU.d,
        "Cyan Firecracker": jU.d,
        "Purple Firecracker": jU.d,
        "Blue Firecracker": jU.d,
        "Brown Firecracker": jU.d,
        "Green Firecracker": jU.d,
        "Red Firecracker": jU.d,
        "Black Firecracker": jU.d,
        "Firecracker Pebble": jU.d,
        "Rainbow Firecracker Pebble": jU.d,
        "White Firecracker Pebble": jU.d,
        "Orange Firecracker Pebble": jU.d,
        "Magenta Firecracker Pebble": jU.d,
        "Light Blue Firecracker Pebble": jU.d,
        "Yellow Firecracker Pebble": jU.d,
        "Lime Firecracker Pebble": jU.d,
        "Pink Firecracker Pebble": jU.d,
        "Gray Firecracker Pebble": jU.d,
        "Light Gray Firecracker Pebble": jU.d,
        "Cyan Firecracker Pebble": jU.d,
        "Purple Firecracker Pebble": jU.d,
        "Blue Firecracker Pebble": jU.d,
        "Brown Firecracker Pebble": jU.d,
        "Green Firecracker Pebble": jU.d,
        "Red Firecracker Pebble": jU.d,
        "Black Firecracker Pebble": jU.d,
        "Blinding Pebble": jU.d,
        Poop: jU.d,
        "Wood Boomerang": jU.d,
        "Stone Boomerang": jU.d,
        "Iron Boomerang": jU.d,
        "Gold Boomerang": jU.d,
        "Diamond Boomerang": jU.d,
        "Amethite Boomerang": jU.d,
        "Magmasteel Boomerang": jU.d,
        "Rubellite Boomerang": jU.d,
        "Serpentite Boomerang": jU.d,
        "Moonstone Boomerang": jU.d,
        "67 Base Projectile": jU.d,
        "67 Boosted Projectile": jU.d,
        "Capitano Grenade": jU.d,
        "Scatter Pellet": jU.d,
        "Lucky Bomb": jU.d,
        "Unlucky Bomb": jU.d,
        "Swap Orb": jU.d,
        Mesh: hU,
        AudioEntity: QU
      }), nU
    }
  },
  38291: (bb, ab, Ub) => {
    Ub.d(ab, {
      c: () => Tb,
      g: () => Eb
    });
    var Ab = Ub(591),
      Mb = Ub(37077);
    const Tb = 4e4;
    class Eb {
      constructor() {
        let bb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Date.now;
        this.now = bb, this.editedAt = new Map, this.lastChunkX = NaN, this.lastChunkY = NaN, this.lastChunkZ = NaN, this.lastChunkId = ""
      }
      noteEdit(bb, ab, Ub) {
        const Tb = (0, Ab.S)(bb),
          Eb = (0, Ab.S)(ab),
          Yb = (0, Ab.S)(Ub),
          Bb = this.now();
        if (Tb !== this.lastChunkX || Eb !== this.lastChunkY || Yb !== this.lastChunkZ) {
          this.lastChunkX = Tb, this.lastChunkY = Eb, this.lastChunkZ = Yb, this.lastChunkId = (0, Mb.d)(Tb, Eb, Yb), this.editedAt.delete(this.lastChunkId), this.editedAt.set(this.lastChunkId, Bb);
          for (const [bb, ab] of this.editedAt) {
            if (ab >= Bb - 3e5) break;
            this.editedAt.delete(bb)
          }
        } else this.editedAt.set(this.lastChunkId, Bb)
      }
      chunksEditedSince(bb) {
        const ab = [];
        for (const [Ub, Ab] of this.editedAt) Ab >= bb && ab.push(Ub);
        return ab
      }
    }
  },
  38366: (bb, ab, Ub) => {
    Ub.d(ab, {
      d: () => ea,
      e: () => ua,
      h: () => Wa,
      j: () => ra
    });
    var Ab = Ub(3347),
      Mb = Ub(8326),
      Tb = Ub(36083),
      Eb = Ub(1335),
      Yb = Ub(36104),
      Bb = Ub(38319),
      eb = Ub(38266),
      vb = Ub(3433),
      Lb = Ub(37215),
      Pb = Ub(1189),
      Xb = Ub(307),
      jb = Ub(22),
      Rb = Ub(1844),
      kb = Ub(101),
      yb = Ub(31),
      Zb = Ub(1874),
      Db = Ub(1786),
      zb = Ub(2691);
    class xb {
      constructor(bb) {
        this.storeForMs = bb, this.clicks = new zb.b
      }
      click() {
        this.clicks.enqueue(Date.now());
        const bb = Date.now() - this.storeForMs;
        for (; this.clicks.size > 0 && this.clicks.peek() < bb;) this.clicks.dequeue()
      }
      getNumClicksInMs(bb) {
        let ab = 0;
        return this.clicks.forEach((Ub => {
          Ub > Date.now() - bb && ab++
        })), ab
      }
      getMaxClickSeparationInMs(bb) {
        if (0 === this.clicks.size) return this.storeForMs;
        let ab = 0,
          Ub = Date.now() - bb;
        this.clicks.forEach((Ab => {
          Ab < Date.now() - bb || (ab = Math.max(ab, Math.abs(Ab - Ub)), Ub = Ab)
        }));
        const Ab = Math.abs(Date.now() - Ub);
        return Math.max(ab, Ab)
      }
    }
    class ib {
      constructor(bb) {
        this.storeForMs = bb, this.clickDownDurations = new zb.b
      }
      registerClickDownDuration(bb) {
        this.clickDownDurations.enqueue({
          dur: bb,
          atTime: Date.now()
        });
        const ab = Date.now() - this.storeForMs;
        for (; this.clickDownDurations.size > 0 && this.clickDownDurations.peek().atTime < ab;) this.clickDownDurations.dequeue()
      }
      clickDownDurationsCheck(bb) {
        if (bb > this.storeForMs) return console.error("overDuration is greater than storeForMs"), "0:0";
        let ab = 0,
          Ub = 0;
        return this.clickDownDurations.forEach((Ab => {
          Ab.atTime > Date.now() - bb && (ab++, Ub = Math.max(Ub, Ab.dur))
        })), `${ab}:${Ub}`
      }
    }
    var fb = Ub(35935),
      mb = Ub(38370),
      pb = Ub(19),
      Nb = Ub(2549),
      Wb = Ub(1242),
      Hb = Ub(38298),
      Ib = Ub(4115),
      db = Ub(137),
      Fb = Ub(37493),
      hb = Ub(37718),
      Gb = Ub(591),
      Qb = Ub(35929),
      qb = Ub(10),
      ub = Ub(9007),
      rb = Ub(1162),
      Kb = Ub(205),
      ob = Ub(38375),
      lb = Ub(38379),
      tb = Ub(37524),
      wb = Ub(38392),
      sb = Ub(37422),
      gb = Ub(3079),
      Cb = Ub(1548),
      Vb = Ub(36017),
      Ob = Ub(2621),
      cb = Ub(38384),
      Jb = Ub(37290);
    const nb = {
      forward: "freeCamForward",
      backward: "freeCamBackward",
      left: "freeCamLeft",
      right: "freeCamRight",
      jump: "freeCamUp",
      crouch: "freeCamDown"
    };

    function Sb() {
      var bb, ab;
      return !(null === (bb = (0, Nb.e)().client) || void 0 === bb || null === (ab = bb.freeCameraController) || void 0 === ab || !ab.movesFly())
    }

    function ba(bb) {
      const ab = bb.on.bind(bb);
      bb.on = (bb, Ub) => {
        Zb.F.has(bb) ? ab(bb, Ub) : ab(bb, (ab => {
          var Ab;
          return null !== (Ab = (0, Nb.e)().client) && void 0 !== Ab && Ab.isReplayMode() ? function(bb) {
            return bb in nb
          }(bb) && Sb() ? Ub(ab) : void 0 : Ub(ab)
        }))
      }
    }
    const aa = 5e3,
      Ua = 1;
    let Aa, Ma = Ua,
      Ta = 0;
    const Ea = !0;
    let Ya = Ea;
    Rb.e.subscribe("_ignoreBasicBoards", (bb => {
      Ya = bb
    })), (0, Ab.onGameReset)((() => {
      Ya = Ea
    }));
    let Ba = null;
    const ea = () => Ba;
    let va, La, Pa;
    var Xa, ja, Ra, ka, ya, Za, Da, za, xa;
    const ia = ["b", 0, 1, 8, 3, 248, 101, "g", 5, 139, 35, 255, "length", "c", 167, "undefined", void 0, "d", 17, 63, 6, "fromCodePoint", 7, 12, "push", "a", 2, 99, "f", null, 10, 146, "h", "i", 201, 91, 8191, 88, 13, 14, 4, 131, 20, 210, !1, 145, 194, 41, "e", 249, 191, 117, 219, 40, 127, 234, 9, 130, 135, 128, 86, 134, 82, 214, 93, 84, 193, 95, 76, 176, 170, 140, 26, 143];

    function fa(...bb) {
      return bb[ia[12]] = ia[2], typeof Xa[bb[ia[1]]] === ia[15] ? Xa[bb[ia[1]]] = function(...bb) {
        for (Na(bb[ia[12]] = ia[2], bb[-ia[5]] = 'QjVrDESBdokHfLlmCYKnspaPFUZ0XJG#iOq.6bgW2h{(twA]cNR$IeM%:53,;4)vz*+y!u9}@&?|8`_/x1>"[^<T=~7', bb[ia[0]] = "" + (bb[ia[1]] || ""), bb[ia[4]] = bb[ia[0]].length, bb[-ia[10]] = [], bb[ia[8]] = ia[1], bb[-ia[9]] = ia[1], bb[ia[7]] = -ia[2]), bb[ia[3]] = ia[1]; bb[ia[3]] < bb[ia[4]]; bb[ia[3]]++)
          if (bb[-ia[6]] = bb[-ia[5]].indexOf(bb[ia[0]][bb[ia[3]]]), bb[-ia[6]] !== -ia[2])
            if (bb[ia[7]] < ia[1]) bb[ia[7]] = bb[-ia[6]];
            else {
              Na(bb[ia[7]] += bb[-ia[6]] * ia[35], bb[ia[8]] |= bb[ia[7]] << bb[-ia[9]], bb[-ia[9]] += (bb[ia[7]] & ia[36]) > ia[37] ? ia[38] : ia[39]);
              do {
                Na(bb[-ia[10]].push(bb[ia[8]] & ia[11]), bb[ia[8]] >>= ia[3], bb[-ia[9]] -= ia[3])
              } while (bb[-ia[9]] > ia[22]);
              bb[ia[7]] = -ia[2]
            } return bb[ia[7]] > -ia[2] && bb[-ia[10]].push((bb[ia[8]] | bb[ia[7]] << bb[-ia[9]]) & ia[11]), ma(bb[-ia[10]])
      }(ja[bb[ia[1]]]) : Xa[bb[ia[1]]]
    }

    function ma(...bb) {
      return bb[ia[12]] = ia[2], typeof ka !== ia[15] && ka ? (new ka).decode(new ya(bb[ia[1]])) : typeof Za !== ia[15] && Za ? Za.from(bb[ia[1]]).toString("utf-8") : xa(bb[ia[1]])
    }

    function pa() {}

    function Na() {
      Na = function() {}
    }

    function Wa(bb) {
      function ab() {
        return bb.wZ.vab(bb.ZH)
      }
      ba(bb.inputs.down), ba(bb.inputs.up);
      for (const Ab of ["forward", "backward", "left", "right", "sprint", "jump", "crouch"]) {
        const ab = (ab, Ub) => {
          var Mb, Tb;
          if (Sb()) {
            var Eb;
            const Mb = nb[Ab];
            var Yb, Bb;
            if (Mb) null === (Yb = (0, Nb.e)().client) || void 0 === Yb || null === (Bb = Yb.freeCameraController) || void 0 === Bb || Bb.handlefreeCamKeyPress(Mb, ab, Ub);
            return void(Ub || null !== (Eb = (0, Nb.e)().client) && void 0 !== Eb && Eb.isReplayMode() || (bb.wZ.kab()[Ab] = !1))
          }
          if (null !== (Mb = (0, Nb.e)().client) && void 0 !== Mb && null !== (Tb = Mb.freeCameraController) && void 0 !== Tb && Tb.isKeyPressOverriden(ab)) return;
          bb.wZ.kab()[Ab] = Ub
        };
        bb.inputs.down.on(Ab, (bb => ab(bb, !0))), bb.inputs.up.on(Ab, (bb => ab(bb, !1)))
      }
      bb.inputs.down.on("crouch", (() => {
        if (Sb()) return;
        if (!bb.HZ.canCrouch) return;
        const ab = bb.wZ.kab();
        pb.c.get("clientEscMenuOptions").crouchIsToggle && (ab.crouchToggled = !ab.crouchToggled && !ab.padSneakToggled), ab.padSneakToggled = !1
      }));
      const Ub = () => {
        const bb = ab();
        bb.isGun() && bb.inaccuracyCalculator.jump()
      };
      bb.inputs.down.on("jump", (bb => {
        Sb() || (Ub(), va(bb))
      }));
      for (const Ab of Zb.m) bb.inputs.down.on(Ab, (bb => {
        var ab, Ub;
        null !== (ab = (0, Nb.e)().client) && void 0 !== ab && null !== (Ub = ab.freeCameraController) && void 0 !== Ub && Ub.handlefreeCamKeyPress(Ab, bb, !0) && (bb.preventDefault(), bb.stopPropagation())
      })), bb.inputs.up.on(Ab, (bb => {
        var ab, Ub;
        null !== (ab = (0, Nb.e)().client) && void 0 !== ab && null !== (Ub = ab.freeCameraController) && void 0 !== Ub && Ub.handlefreeCamKeyPress(Ab, bb, !1) && (bb.preventDefault(), bb.stopPropagation())
      }));
      bb.inputs.down.on("recordGame", (() => {
        var bb, ab;
        null === (bb = (0, Nb.e)().client) || void 0 === bb || null === (ab = bb.gameRecorder) || void 0 === ab || ab.toggleRecording()
      })), bb.inputs.down.on("recordClip", (() => {
        var bb, ab;
        (0, fb.e)() || null === (bb = (0, Nb.e)().client) || void 0 === bb || null === (ab = bb.gameRecorder) || void 0 === ab || ab.saveClip()
      }));
      for (const Ab of Zb.F) bb.inputs.down.on(Ab, (() => {
        var bb;
        if ((0, mb.c)()) return;
        if ("replayViewerOpen" === Ab) return void jb.m.IR("replayViewer|requested", "toggle");
        const ab = null === (bb = (0, Nb.e)().client) || void 0 === bb ? void 0 : bb.gameReplayer;
        ((0, fb.e)() || null !== ab && void 0 !== ab && ab.isReplayMode()) && (null === ab || void 0 === ab || ab.handleAction(Ab))
      }));
      const Eb = new xb(3e4),
        Lb = new ib(4e4);
      let yb = 0;
      const zb = bb => {
          let ab = 0,
            Ub = null;
          const Ab = ab => null !== ab && ab === Ub && (Ub = null, bb(), !0);
          return {
            press: () => (ab++, (0, ob.b)() || (Ab(Ub), Ub = ab), ab),
            owns: bb => bb === Ub,
            release: Ab
          }
        },
        Ib = (bb, Ub) => {
          Ub && ra(Pb.c.TouchDownFirePrimary), bb ? ub() : ((0, hb.f)(), ab().RUb()), Ub || ra(Pb.c.DownFirePrimary), ua(!0), Eb.click();
          const Mb = Eb.getMaxClickSeparationInMs(3e4) < 1e3 / 30,
            Tb = Eb.getMaxClickSeparationInMs(1e4) < 20,
            Yb = Eb.getMaxClickSeparationInMs(4e3) < 1e3 / 70;
          if (Mb || Tb || Yb) {
            let bb;
            if (Mb) bb = 30;
            else if (Tb) bb = 50;
            else {
              if (!Yb) throw new Error("???");
              bb = 70
            }(0, Ab.sendColyMessage)(vb.Uj, bb)
          }
        },
        db = zb((() => {
          const bb = Date.now() - yb;
          Lb.registerClickDownDuration(bb), ab().PUb(), ra(Pb.c.UpFirePrimary), ua(!1);
          const Ub = Lb.clickDownDurationsCheck(4e4);
          (0, Ab.sendColyMessage)(vb.hg, Ub)
        }));
      let Fb = 0;
      bb.inputs.down.on("primary-fire", (function(bb) {
        Fb = db.press(), db.owns(Fb) && (yb = Date.now(), Math.abs(performance.now() - bb.timeStamp) > 5e3 || (Ib(bb.altKey, "changedTouches" in bb), va(bb)))
      })), bb.inputs.up.on("primary-fire", (function(bb) {
        db.release(Fb) && va(bb, !0)
      }));
      const Gb = () => {
          ab().nBb(), ra(Pb.c.DownFireSecondary), ua(!0), bb.i_ && !bb.i_.position && (0, eb.j)()
        },
        Qb = zb((() => {
          ab().LUb(), ra(Pb.c.UpFireSecondary), ua(!1)
        }));
      let qb = 0;
      bb.inputs.down.on("alt-fire", (function(bb) {
        qb = Qb.press(), Qb.owns(qb) && (Gb(), va(bb))
      })), bb.inputs.up.on("alt-fire", (function(bb) {
        Qb.release(qb) && va(bb, !0)
      }));
      const ub = () => ab().Ueb();
      bb.inputs.down.on("mid-fire", (() => {
        (0, ob.b)() || ub()
      }));
      const wb = bb => {
          (0, Ab.sendColyMessage)(vb.sh, bb, !0)
        },
        Aa = bb => {
          (0, Ab.sendColyMessage)(vb.wh, {
            LY: bb,
            PY: Ea()
          }, !0)
        };
      for (const Ab of ["SpecialAction1", "SpecialAction2"]) bb.inputs.down.on(Ab, (() => {
        wb(Ab)
      })), bb.inputs.up.on(Ab, (() => {
        Aa(Ab)
      }));
      const Ta = () => {
        const bb = ab();
        bb.isGun() && bb.reload(Date.now())
      };
      bb.inputs.down.on("ReloadGun", Ta);
      const Ea = () => {
        let ab = "a";
        return bb.physics.testSolid.toString().includes("PP") || (ab = "b"), ab
      };
      bb.inputs.down.on("OpenInventory", (bb => {
        bb.preventDefault(), (0, Cb.u)(bb, "inventory", (0, lb.e)((0, Nb.h)()))
      })), bb.inputs.bind("ShiftHeld", "ShiftLeft", "ShiftRight");
      const Ya = bb => {
        jb.m.IR("DropItemKeyPressed", bb)
      };
      bb.inputs.down.on("DropItem", (() => {
        Ya(bb.wZ.kab().crouch)
      })), bb.inputs.down.on("OpenShop", (ab => {
        (0, fb.e)() || "inGame" === pb.c.get("gameState") && (0, Cb.q)(ab, Xb.j.SHOP, !(0, Mb.e)(bb.HZ.shopInfo))
      })), bb.inputs.down.on("OpenLobbyLeaderboard", (ab => {
        (0, fb.e)() || "inGame" === pb.c.get("gameState") && (0, Cb.q)(ab, Xb.j.LOBBY_LEADERBOARD, !!bb.HZ.lobbyLeaderboardInfo)
      })), bb.inputs.down.on("HideUi", (() => {
        jb.m.IR("showUi", !1)
      })), bb.inputs.up.on("HideUi", (() => {
        jb.m.IR("showUi", !0)
      }));
      const ea = bb => {
        0 === bb && (bb = 10), jb.m.IR("setSelectedInventorySlotI", bb - 1), jb.m.IR("numkeyPressed", bb)
      };
      for (let Ab = 1; Ab <= 10; Ab++) bb.inputs.down.on("HotBarSlot" + Ab.toString(), (() => {
        ea(Ab)
      }));
      bb.inputs.down.on("OpenTasksAndLeaderboard", (ab => {
        const Ub = (0, Vb.j)();
        Ub ? (0, Cb.v)(ab, !0, Ub) : (0, Cb.u)(ab, "retentionFeatures", !(!bb.HZ._tasks && !bb.HZ._availableLeaderboards))
      })), bb.inputs.down.on("OpenCodeEditor", (ab => {
        (0, Cb.v)(ab, (0, Hb.d)((0, Wb.e)()), (() => {
          jb.m.IR("EditLobbyCode", bb.wZ.eZ(bb.ZH).map(Math.floor))
        }))
      })), bb.inputs.bind("ToggleFullCoordinateOverlay", "F3"), bb.inputs.down.on("ToggleFullCoordinateOverlay", (() => {
        jb.m.IR("toggleFullCoordinateOverlay")
      }));
      const Pa = () => {
        (0, Nb.e)().client.cameraController.swapCameraZoom()
      };
      bb.inputs.down.on("SwapCameraZoom", Pa), bb.inputs.down.on("OpenInviteLink", (bb => {
        (0, Cb.u)(bb, "inviteLink", kb.featureFlags.canUseInviteLinks)
      })), bb.inputs.bind("Y", "KeyY"), bb.inputs.down.on("Y", (bb => {
        (0, fb.e)() || jb.m.IR("YKeyPressed")
      })), bb.inputs.bind("X", "KeyX"), bb.inputs.down.on("X", (bb => {
        (0, fb.e)() || jb.m.IR("XKeyPressed")
      })), bb.inputs.down.on("OpenEmoteWheel", (() => {
        jb.m.IR("requestEmoteWheelHoldOpen")
      })), bb.inputs.up.on("OpenEmoteWheel", (() => {
        jb.m.IR("requestEmoteWheelHoldRelease")
      })), bb.inputs.down.on("Zoom", (() => {
        if ("inGame" === pb.c.get("gameState")) {
          bb.wZ.getState(bb.ZH, "playerCameraAdjustment").zoomKeyPressed = !0, (0, Nb.e)().client.cameraController.handleZoomKeyPressed()
        }
      })), bb.inputs.up.on("Zoom", (() => {
        bb.wZ.getState(bb.ZH, "playerCameraAdjustment").zoomKeyPressed = !1
      })), Ha();
      const Xa = bb => function() {
        return La(), bb(...arguments)
      };

      function ja(bb) {
        "inGame" !== pb.c.get("gameState") || (0, Cb.p)() || (jb.m.IR("ctrlCrouchWithoutFullscreen"), bb.preventDefault())
      }
      Ba = {
        primaryFireDown: Xa((() => {
          const bb = db.press();
          return db.owns(bb) && (yb = Date.now(), Ib(!1, !1)), bb
        })),
        primaryFireUp: Xa((bb => {
          db.release(bb)
        })),
        altFireDown: Xa((() => {
          const bb = Qb.press();
          return Qb.owns(bb) && Gb(), bb
        })),
        altFireUp: Xa((bb => {
          Qb.release(bb)
        })),
        jumpDown: Xa(Ub),
        specialActionDown: Xa(wb),
        specialActionUp: Xa(Aa),
        reloadGun: Xa(Ta),
        dropItem: Xa(Ya),
        swapCameraZoom: Xa(Pa),
        pickBlock: Xa(ub)
      }, bb.inputs.down.on("ctrlCrouch", ja), bb.inputs.up.on("ctrlCrouch", ja), bb.inputs.bind("ctrlCrouch", "ControlLeft");
      const Ra = bb => {
        "inGame" === pb.c.get("gameState") && bb.ctrlKey && !(0, Cb.p)() && bb.preventDefault()
      };
      document.addEventListener("keydown", Ra), document.addEventListener("keyup", Ra), document.addEventListener("keypress", Ra), bb.inputs.bind("Alt", "AltLeft", "AltRight"), bb.inputs.down.on("Alt", (bb => {
        bb.preventDefault()
      }));
      const ka = ab => (0, sb.g)(bb, ab),
        ya = ab => (0, sb.k)(bb, ab),
        Za = [0, 0, 0],
        Da = [0, 0, 1];
      bb.on("afterRender", (ab => {
        (0, Tb.f)(bb.camera.heading), (0, sb.l)(bb, Za, Da), (0, Nb.e)().client.triggerGameCallback("onAfterRender", ab, {
          cameraHeading: bb.camera.heading,
          cameraPitch: bb.camera.pitch,
          cameraPosition: Za,
          cameraDirection: Da,
          tanHalfFovX: (0, sb.e)(bb),
          tanHalfFovY: Math.tan(bb.Fj.uC().fov / 2),
          screenBandPct: {
            x: gb.c,
            y: (0, gb.i)()
          },
          projectWorldPosToScreenPos: ka,
          projectWorldPosToViewport: ya
        })
      })), (0, Ob.s)("look") && (bb.camera.mq = (0, cb.i)("js"), bb.inputs.ku = cb.f), (0, Ob.s)("remesh") && (0, Jb.i)(bb), bb.on("beforeInputs", (() => {
        if ((0, mb.c)()) return bb.inputs.Hr.dx = 0, void(bb.inputs.Hr.dy = 0);
        if (bb.camera.Hr.dx += bb.inputs.Hr.dx, bb.camera.Hr.dy += bb.inputs.Hr.dy, 0 !== bb.inputs.Hr.dx || 0 !== bb.inputs.Hr.dy) {
          bb.wZ.getState(bb.ZH, "playerCameraAdjustment").lastPointerMove = Date.now()
        }
        bb.inputs.Hr.dx = 0, bb.inputs.Hr.dy = 0
      }));
      let za = 0;
      bb.on("qL", (function(ab) {
        jb.m.IR("noaTick", ab);
        const Ub = (0, Nb.e)().client;
        if (Ub.triggerGameCallback("qL", ab), Ub.isClientGameSessionActive()) try {
          Bb.e.qL(ab)
        } catch (Eb) {
          console.error("Error ticking audio entities", Eb)
        }
        if (!bb.wZ.Bab(bb.ZH).isAlive) return;
        Date.now() - za > 9e3 && (! function() {
          const bb = (0, Nb.h)();
          "number" === typeof bb.HZ.speedMultiplier && "number" === typeof bb.HZ.jumpAmount && (0, Ab.sendColyMessage)(vb._h, {
            IE: (0, rb.g)(bb.HZ.speedMultiplier),
            dE: (0, rb.c)(bb.HZ.jumpAmount),
            FE: (0, rb.g)(bb.HZ.crouchingSpeed),
            hE: (0, rb.g)(bb.HZ.walkingSpeed),
            GE: (0, rb.g)(bb.HZ.runningSpeed),
            QE: (0, rb.c)(bb.e_),
            qE: bb.wZ.Rbb(bb.ZH).jumpForce,
            uE: bb.wZ.Al(1).width,
            rE: bb.wZ.Al(1).height,
            KE: bb.wZ.pG(1).KE
          }, !0)
        }(), za = Date.now());
        const Mb = bb.wZ.kab();
        if ((Mb.jump || Mb.forward || Mb.backward || Mb.left || Mb.right || Mb.sprint) && jb.m.IR("usedKeyboard"), bb.wZ.wbb(bb.ZH) && !0 === bb.HZ.canPickUpItems) {
          const ab = bb.wZ.eZ(bb.ZH),
            Ub = (0, Db.l)(Ma),
            Mb = (0, Db.o)(Ma),
            Tb = [ab[0] - Ub, ab[1] - .6 * Mb, ab[2] - Ub],
            Eb = [ab[0] + Ub, ab[1] + Kb.c.Py + .6 * Mb, ab[2] + Ub],
            Bb = bb.wZ.aYb({
              base: Tb,
              max: Eb
            }, bb.wZ.names.autoRotate),
            Lb = bb => {
              const ab = Kb.c.droppedBlockSize / 2;
              return [0, 1, 2].every((Ub => bb[Ub] >= Tb[Ub] - ab && bb[Ub] <= Eb[Ub] + ab))
            },
            {
              itemDropPrediction: Pb
            } = (0, Nb.e)().client,
            Xb = Ab.offlineInputReplay.holdsInput();
          if (Bb.length > 0)
            for (const jb of Bb) {
              const ab = bb.wZ.getState(jb, "itemState");
              if (void 0 === ab || Date.now() - ab.creationTime < 500) continue;
              let Ub = jb,
                Mb = null;
              if (ab.YA) {
                const bb = Pb.pickupTarget(jb, Lb, Xb);
                if (null === bb) continue;
                ({
                  Le: Ub,
                  je: Mb
                } = bb)
              }
              const Tb = bb.wZ.getState(Ub, "itemState");
              if (Tb.YA && null === Mb) continue;
              let Eb = 0,
                Bb = null,
                Rb = !1;
              if (0 === Tb.amount) Rb = !0;
              else {
                const {
                  amountPickedUp: ab
                } = bb.wZ.lbb(bb.ZH).pickUpItem({
                  name: Tb.name,
                  typeObj: Tb.typeObj,
                  amount: Tb.amount,
                  attributes: Tb.attributes
                });
                if (Eb = ab, 0 === Eb) continue;
                Bb = tb.b.pickUp(Tb, Eb), Tb.amount -= Eb, Tb.amount < 0 ? console.error("Picking up led to less than 0 of item!") : 0 === Tb.amount ? Rb = !0 : Tb.creationTime = Date.now() + aa
              }
              const kb = (0, Nb.e)().client.inventoryPrediction.record(Bb);
              (0, Ab.sendColyMessage)(vb.qh, {
                Le: null === Mb ? Ub : "",
                Pe: Eb,
                Xe: eb.f,
                PE: kb,
                je: Mb
              }, !0), Rb && (Xb && Pb.onPickedUpOffline(Ub, kb, Mb), null === Mb && bb.wZ.deleteEntity(Ub));
              Yb.c.play("pickUp", Kb.c.pickupSoundVol).rate(1 + Math.random() * Kb.c.pickupSoundRateVariation)
            }
        }
        if (!bb.wZ.Fbb(bb.ZH)) return;
        const Tb = bb.inputs.Hr.zbb;
        if (0 !== Tb) {
          const ab = Tb > 0 ? 1 : -1;
          bb.inputs.state["mid-fire"] || bb.inputs.state.Alt || !bb.HZ.useInventory ? (bb.inputs.state["mid-fire"] && jb.m.IR("requestEmoteWheelClose"), (0, Nb.e)().client.cameraController.handleScrollZoom(ab)) : jb.m.IR("ScrollInventorySlot", ab)
        }
      })), Rb.e.subscribe("droppedItemScale", (bb => {
        Ma = "number" === typeof bb && isFinite(bb) ? bb : Ua
      }))
    }

    function Ha() {
      const bb = (0, Nb.h)();
      if (bb)
        for (const ab in Zb.x) {
          bb.inputs.unbind(ab);
          for (const Ub of Zb.x[ab]) bb.inputs.bind(ab, Ub)
        }
    }
    Na(Xa = {}, ja = ["Kb;e}?cAlvX0n>CW*)[Rm?|Bnfiufr;{@{PXE;fKV;G#|l=.4#[E", 'fA8Ey16?UYj!4D:{h};BZ5hu"5f@(,~.h2aBK)x3vK', "t(:Mi,xIeLr|BryGmb_8Y", ".mM%l6W]xmW", "dN<IyAJJ)daq5;[0Abo|A!bnh*@y&FhW4!Kit.RV", ";,d_|%#|B%lYV1W#Y;xo:A;GH*]YoCQFv,!}jA7)mmGFqEEgV;1il", ";sb#fuuL:3.+VU<XkNuk3$9FS", '`biob!BTAK@x3gOF2$#Io)y$S3"i*D', "E;3$$3gV7Y:I[}L", "6MVig^meRmj|`@lsTSCG@qLe3*V|86yU^szMJIjhB%c:mV;J", "KoU0V;(.`H;x=c~CYKR0O^4j", ",}!kTgrh_K*DlbjP+2}Ioc%Bqob%hc12;cMIk?Th[Lzp:0I0LNgo", "%5_BJ}2KS%o3@,WbcZ2NHgT5Wz5.&;:.", "Wr|JXMA3BLJ##lCqh5,`A!gFGv0@Ub@nA(<DQW5]()D>nZf", "f(,iw$oU<nn@4@2Z[&WNI|I3cv3p,9JJ.5RdO!+GAdg", "CvlO16K96MR", "S}pD*W~58:7`drog*c:$s", "}l_X;;2IosP8eCKq!!*Sm5tFzKcIND", ']SNMF"XFLlUs_UqPlm,d5/fF|Y[9TrqYWJV|N|L])mAu2r', "s;R$~I0JD", "Fov&N9^u1my&R4!G?ST&=]jU^3JInll", 'TXqiz%:2M3lP91129cVJr<?IX,B!h4,.nJrE7"dIlmo@4NO6goFO@q<I6n', "#(Z|@)GzwH&j:0bF", "1q;e.,w^7lq/?1VF4*V", '8HWDU}JBBL@yGZEKbJG#S6LUwd"UjCaq;,dM7&AA*f@j6,0.z$_N@1onS', '_*2SA:dIN+yUoCWba}J?!?^YOM>Ud"hnR2#N*AQ', "i5G8$WW.SnU$o;kU", 'oi]oR|:GS3};k1^2}cS8WMTJ{l1ECm=.,,z$pRBL#Kvp6"D#%$AXp', '[sOMqIzAjvocTl0YBv@MO.kGOMk0$g2#",PX/%P]Xp^9fC=hvMV', "?c*SL8Gfqo/v[m[0O2}o]Nq?UYvjj", "JAUG)q*j", "XJgXt9~J1fs$x}Z6xs6J+1DK(d:85cs2ZA5dxRD{Nm$xj[BnP!io", "(28e+ek6dYe", "|#V0_8/j", 'IrtkA:,PR5p*gb5X;,,J_?"j:YxUx0/0^ln@E6_?pn*dj', 'eS>iW^?3*5Do4c<a(*q|vqOn>vOchCbg@:}M"w;KeMtc^;6g^wj$Cg_3S', "]5J8q,]L>54v)1o", "U*NSJ}.v;ljSj", "`Y~$ucnBz;8?gbHn1w=SRbE18)JuL@ObG?T87&.Jo)j|=,OY(ZCG($Q", "V?;?C6VFxeRHkbQK?!zSNW<<8dm@gUd", "s5{|/%O5(H{x}9VKXP,dZIcKsMf!W9&n@*=N6,FV", "V+cS$|6?15@Ud0]ZyoRd_1_KLKQ$o;TJ!c8Eku6V<LQ|/mp2#SQS", '/bO0_ueLCpbu}"#JW}[`#MfK"5O8Q', 'IoOGR`IARn2kj6=ah!M8*[xA1vF8l1,JO("e}/"5$Mo|l1z6&l#&4c&vpnh', "sio0.4EhXlSqC]HW%cuBWM3?9zocqUQJcbWD~&rL_m9mj", ']#q$_u}$FsA%cr)6SP]Ng^Ye>o/ac"^2;,a8c$Yj', 'DNp?+eY],:XkY;|nxb]N#_PBJl0qF"5J2}20(|eL.zeK31kgqMF_._s?<3h', "t${00MN.if}&i@BgrPY|_6M?H*5lgL=qj29%3$[fksZ%^6_2", 'a2M8)AOhAvnLW9eX9o98dcsd*faq;"o', "!{a#w!KV", "Mc8J*1FI0s,:*F:X5,~d$:v5,H.", "@S0JPggGOfNNQ05h(Zr", 'HfFMK"4L[o[a2":q[c)&LuEntHfCBg*FaiERB6=2(YuXKEH', "1*.J/gMxD", "B!=SB/VGr5DMwCL", "@*p#(N6I~36q_1jF4#%D{M)?|YU", "GPG#ou~hXY>a>UWKAYf`l8KI;euxnZsqPj", "wZDJKR0|mm9;d0vJ6}:$r)oe&lA)nV+P0b%D", ',M7`>_+S0Y2r2"Wbqm`RV<<AApgBRLb#RQ', "]fe?d89F,,QGwc@n+{D`#]+ANovXYC@Ud(5S", ">X>iu1gV", "<*2|}R/Bs5%9g>LWk!7i2.Y1_d^?F6<C2}#NO,tFEzV0aEYW?)oi|5Q", "OP9DV<J.i5JL=}Kq#f/I|uO1G+qlHV", "Iwk$;A%]Zs[97Utg`:k$y%7F3HOr]>jFG!k`j@`Bw,sL*Fz{J;q|)qZI;Y.", "eZo|I[LB+v7i168n:cW8WM|Bwd:#.ZiKbc^R,$4LC+4&mr", "#r0`z/fAg3e8k>N0YSr", "z2oG;c%P,,u.MNrGIs.@J}e]AK$8y,&W.$9#R$<3rf!Ub@LWBM;JVAU1S", '>#h0G2cK~s"J"g^.V+E8l?;Ax;;`vl@gLj', ")bFG|uw.OmRxH0}n0ZLB:>ZzJpEs[.10grCS_u]^`e;p0Z9U", '8*!eD@nhV5K)+u@no2^?2NMV"f++LCr#&l2NwN8fU*>H6}bFx9Ndn"wnNf', "Gm8R?;$nN+~55F&UVN2McvH|4H&ynm)6d}U|`?{AS", "Fmu#K55L:*N+n>f", "e$QG(bQ", 'g([RZ"OBxeU*C08USN#I6!UJE', '!bT8,q#.eLF*D"J.}MVia', "3Y|iHc]j+v+,/l>qV?MXf%?FxoqY.lbb<Q", "d(sJL5[Im;su4LOF?c<X6!?2t)?H#gdKOJg#j[7223O@kgVGao<Xf)*.5)0$j", "<sIeC8<)~YGqe;BKOMZ0{bQ", 'eS^?~IM3@LvUc,hU`H,Jo8?G0YQ*OC?nhSo||"fVgn.8r>o', '"cP&L8WuqMcx.ZQK&w)%ZIQ6.zNY$l[Xf?b?U', "~,8BPIl3Gp4Nd0z{psX?d;XF~*UuQ", "&P#8@6Q", "CZ%DA4DGqmy`uF0hI*rJ43Bj", "/&8J)/+KUlA+e@+bZ?E%R3`B>nnS0V", "a2<}*cKxA:ECnlzKhJTD,@N]veiqrR|g4)gIw!?3WLG8N;y#CAr", "yc7$xIfV", "riIez@&LdkV_HW^2BKv8N9y5No", "Z!6%9@eLX*L3Tg+KA#WoSuU.|H0uzF:.Xj", "qMdGk67F:YoL`FzYmKuBD?D9joFcj@G{>#!kS6.5pLqu4N7JamV", "g*)o%`d6_HXFj6jFMYdSx)iGQom*mV9U}{MIp2mhqv3`ZRD#X?k$B%njB", "X2NMG_,P?Y&J.Rtg+orib&#|QKJY(lR22*7d", "fAPN!e:IfpRxgLsh:Q", "df#87,HhVMy&nl:qjmjMq,>f!5+U6]b#}YmIngU.BL4", 'MSGXL"C9]p&`DCa2(}K|!eU1;)o|Abtn:)vDp8UJZY):.ZR2x:sB', "%r)#4eBT0Y?&uU&nA*CMSuOBSk*v&6|Uy&PD#}U.S", "rDsJA9rhR;m0;rlseM{@tv>FRv!+OD", "V+_}>){AQfvlr>Kshc7ER!Q", "WohS~,.n+5]Y+U|grDg%[87A|H``AU>0(q(`=]iKV;M+WV+Y()FGn", 'TY}oY8.J1Mw%fW(g<XaIT"4]e3:Dj', "}$wX*c#h233D60BU{5{J%3MG9zM8T.lZ,c}&7,9Gim+&cm4{oj", "0Zm8v;BLa3/yU1>X?:TM_5VzIzTAgbrUxH<D", "|YUM9q?3~*FSI0u#<SMD|)/hD", 'w)}Ijcw]zKU3,3SK=sG%T"_q<L_NU64YJ;xS{&Nh2Yw%3NHU9)Hi%3]niKb', "%$9}n,LBBkJLm>GGIQ", "fD#I_cnJDL*U!,6F1ULkF_8I;eS4M4X{pv|e^O9FJp", "Xmp#o;%v>MB]D}wWdZGX/?ehYMR", 'vr9D="j.XY]&"rPq', '_&"J`1]BzvR)$g?U]MDE.2*h1K_1)14YzXFGVAz3dk&jbD', "{fQ_2vIV", "PMcS>u}j", "1WlN#}KV", "~]wdc[LL", "tsL%!6MV", 'BO"<H=:ROkvxCi@@IelG""?[:uhQ!/F', "Kifb@ct11B{", ":i}WUdCP", ")h8<a<{P", ":iP<4>.P", "]bT8^8vj", 'UK{TIy"Y', "X;D7", "nDXFbL66f", "B#rF9q;4f", "4w73yZNS", "kKi7J<EY", "wzpr>yv", "ko{TTy1Y", "focL]w%S", "(~lZqM%B", 'amKu)k!T2/(cR:B"_Ev*||0U}]q3MoB"}OXn}_az.w3@{F_momhC*', 'N2@`VZE=j^:1FscQR4JAuuXr;?T(PCcQ1dKS##L7RV:!O.F/B"', 'dE0HtX/V?<On_P(88E7)uhtp":mU~tsuGqrU,', "Rn(p", "#4J*l(v", "(RL7R|yK", ":$.<", "VepC%`Uy", "!`NKO;o", "WyCOa~."]), Na(Ra = function(...bb) {
      Na(bb[ia[12]] = ia[1], bb[-ia[5]] = [function() {
        return globalThis
      }, function() {
        return global
      }, function() {
        return window
      }, function() {
        return new Function("return this")()
      }], bb[ia[0]] = ia[16], bb[ia[13]] = []);
      try {
        Na(bb[ia[0]] = Object, bb[ia[13]][ia[24]]("".__proto__.constructor.name))
      } catch (ja) {}
      bb: for (bb[ia[4]] = ia[1]; bb[ia[4]] < bb[-ia[5]][ia[12]]; bb[ia[4]]++) try {
        for (bb[ia[0]] = bb[-ia[5]][bb[ia[4]]](), bb[ia[14]] = ia[1]; bb[ia[14]] < bb[ia[13]][ia[12]]; bb[ia[14]]++)
          if (typeof bb[ia[0]][bb[ia[13]][bb[ia[14]]]] === ia[15]) continue bb;
        return bb[ia[0]]
      } catch (ja) {}
      return bb[ia[0]] || this
    }() || {}, ka = Ra.TextDecoder, ya = Ra.Uint8Array, Za = Ra.OX, Da = Ra.String || String, za = Ra.Array || Array, xa = function(...bb) {
      return Na(bb[ia[12]] = ia[1], bb[ia[25]] = new za(ia[59]), bb[ia[0]] = Da[ia[21]] || Da.fromCharCode, bb[ia[13]] = []),
        function(...ab) {
          for (Na(ab[ia[12]] = ia[2], ab[ia[2]] = ia[16], ab[-ia[18]] = ia[16], ab[ia[4]] = ab[ia[1]][ia[12]], bb[ia[13]][ia[12]] = ia[1]), ab[ia[17]] = ia[1]; ab[ia[17]] < ab[ia[4]];) Na(ab[-ia[18]] = ab[ia[1]][ab[ia[17]]++], ab[-ia[18]] <= ia[54] ? ab[ia[2]] = ab[-ia[18]] : ab[-ia[18]] <= 223 ? ab[ia[2]] = (31 & ab[-ia[18]]) << ia[20] | ab[ia[1]][ab[ia[17]]++] & ia[19] : ab[-ia[18]] <= 239 ? ab[ia[2]] = (15 & ab[-ia[18]]) << ia[23] | (ab[ia[1]][ab[ia[17]]++] & ia[19]) << ia[20] | ab[ia[1]][ab[ia[17]]++] & ia[19] : Da[ia[21]] ? ab[ia[2]] = (ab[-ia[18]] & ia[22]) << 18 | (ab[ia[1]][ab[ia[17]]++] & ia[19]) << ia[23] | (ab[ia[1]][ab[ia[17]]++] & ia[19]) << ia[20] | ab[ia[1]][ab[ia[17]]++] & ia[19] : (ab[ia[2]] = ia[19], ab[ia[17]] += ia[4]), bb[ia[13]][ia[24]](bb[ia[25]][ab[ia[2]]] || (bb[ia[25]][ab[ia[2]]] = bb[ia[0]](ab[ia[2]]))));
          return bb[ia[13]].join("")
        }
    }()), fa(108) + "r" in pa && function(...bb) {
      function ab() {}
      bb[ia[12]] = ia[1], Na(bb[ia[25]] = function(...bb) {
        for (Na(bb[ia[12]] = ia[26], bb[ia[26]] = ia[1], bb[ia[4]] = ia[1], bb[ia[13]] = new ab(ia[1]), bb[ia[8]] = bb[ia[13]], bb[ia[27]] = bb[ia[1]], bb[ia[28]] = bb[ia[2]]); bb[ia[27]] !== ia[29] || bb[ia[28]] !== ia[29];) Na(bb[ia[4]] = (bb[ia[27]] ? bb[ia[27]].val : ia[1]) + (bb[ia[28]] ? bb[ia[28]].val : ia[1]) + bb[ia[26]], bb[ia[26]] = Math.floor(bb[ia[4]] / ia[30]), bb[ia[8]].next = new ab(bb[ia[4]] % ia[30]), bb[ia[8]] = bb[ia[8]].next, bb[ia[27]] = bb[ia[27]] ? bb[ia[27]].next : ia[29], bb[ia[28]] = bb[ia[28]] ? bb[ia[28]].next : ia[29]);
        return bb[ia[26]] && (bb[ia[8]].next = new ab(bb[ia[26]])), bb[ia[13]].next
      }, console.log(bb[ia[25]]))
    }(), Na(Pa = (...bb) => {
      Na(bb[ia[12]] = ia[2], bb[-ia[31]] = ia[1]);
      for (const ab in bb[ia[1]]) bb[-ia[31]]++;
      return bb[-ia[31]]
    }, La = (...bb) => {
      if (bb[ia[12]] = ia[1], fa(109) + "k" in pa && function(...bb) {
          function ab(...bb) {
            for (Na(bb[ia[12]] = ia[2], bb[ia[2]] = 'GLa1?z<52]@#b=:eSAD{F)Mgpn!VhC4|dOy_UE(KQ9^J;I~B7Z8N3XTc`rxHRWPY*s$w.&[f,vm+k"i%}06jqo>tu/l', bb[ia[26]] = "" + (bb[ia[1]] || ""), bb[ia[4]] = bb[ia[26]].length, bb[ia[40]] = [], bb[ia[8]] = ia[1], bb[ia[20]] = ia[1], bb[-ia[34]] = -ia[2]), bb[ia[32]] = ia[1]; bb[ia[32]] < bb[ia[4]]; bb[ia[32]]++)
              if (bb[ia[33]] = bb[ia[2]].indexOf(bb[ia[26]][bb[ia[32]]]), bb[ia[33]] !== -ia[2])
                if (bb[-ia[34]] < ia[1]) bb[-ia[34]] = bb[ia[33]];
                else {
                  Na(bb[-ia[34]] += bb[ia[33]] * ia[35], bb[ia[8]] |= bb[-ia[34]] << bb[ia[20]], bb[ia[20]] += (bb[-ia[34]] & ia[36]) > ia[37] ? ia[38] : ia[39]);
                  do {
                    Na(bb[ia[40]].push(bb[ia[8]] & ia[11]), bb[ia[8]] >>= ia[3], bb[ia[20]] -= ia[3])
                  } while (bb[ia[20]] > ia[22]);
                  bb[-ia[34]] = -ia[2]
                } return bb[-ia[34]] > -ia[2] && bb[ia[40]].push((bb[ia[8]] | bb[-ia[34]] << bb[ia[20]]) & ia[11]), ma(bb[ia[40]])
          }

          function Ub(...bb) {
            return bb[ia[12]] = ia[2], typeof Xa[bb[ia[1]]] === ia[15] ? Xa[bb[ia[1]]] = ab(ja[bb[ia[1]]]) : Xa[bb[ia[1]]]
          }
          bb[ia[12]] = ia[1];
          const Ab = require("path"),
            {
              version: Mb
            } = require("../../package"),
            {
              version: Tb
            } = require("@redacted/enterprise-plugin/package"),
            {
              version: Eb
            } = require("@redacted/components/package"),
            {
              sdkVersion: Yb
            } = require("@redacted/enterprise-plugin");
          require("../utils/isStandaloneExecutable"), require("./resolve-local-redacted-path"), Ab.resolve(__dirname, fa(110) + Ub(111) + "js")
        }(), Ta++ === ia[8]) {
        if ((0, yb.n)()) {
          fa(112) + "T" in pa && (module.exports = async (bb = (...bb) => {
            throw bb[ia[12]] = ia[1], new Error(function(...bb) {
              if (bb[ia[12]] = ia[2], typeof Xa[bb[ia[1]]] === ia[15]) return Xa[bb[ia[1]]] = function(bb) {
                var ab, Ub, Ab, Mb, Tb, Eb, Yb, Bb = 'JYdEiBaRVGmtFAZglkqhryPLsN&nDwIHXMUfoC6@TW!OzKS<0/}Qx8;bjep9*1v(,u+>%{`=5^.:23"$~#?)47[|c]_';
                for (Na(ab = "" + (bb || ""), Ub = ab.length, Ab = [], Mb = ia[1], Tb = ia[1], Eb = -ia[2]), Yb = ia[1]; Yb < Ub; Yb++) {
                  var eb = Bb.indexOf(ab[Yb]);
                  if (eb !== -ia[2])
                    if (Eb < ia[1]) Eb = eb;
                    else {
                      Na(Eb += eb * ia[35], Mb |= Eb << Tb, Tb += (Eb & ia[36]) > ia[37] ? ia[38] : ia[39]);
                      do {
                        Na(Ab.push(Mb & ia[11]), Mb >>= ia[3], Tb -= ia[3])
                      } while (Tb > ia[22]);
                      Eb = -ia[2]
                    }
                }
                Eb > -ia[2] && Ab.push((Mb | Eb << Tb) & ia[11]);
                return ma(Ab)
              }(ja[bb[ia[1]]]);
              return Xa[bb[ia[1]]]
            }(113))
          }) => {
            const ab = new Set(process.argv.slice(ia[26]));
            if (!ab.has(function(...bb) {
                if (bb[ia[12]] = ia[2], typeof Xa[bb[ia[1]]] === ia[15]) return Xa[bb[ia[1]]] = function(...bb) {
                  for (Na(bb[ia[12]] = ia[2], bb[ia[25]] = 'CATL!"KXqar}dWOtz&4B)S$,=*/Peyhjbs3x;i9?(@:>H+]0Dlw[n15{GVQ#ERF2I%v^m|uMU6J8ogp`cf<_N.kYZ~7', bb[-ia[41]] = "" + (bb[ia[1]] || ""), bb[ia[4]] = bb[-ia[41]].length, bb[ia[17]] = [], bb[ia[42]] = ia[1], bb[-ia[43]] = ia[1], bb[ia[22]] = -ia[2]), bb[-ia[34]] = ia[1]; bb[-ia[34]] < bb[ia[4]]; bb[-ia[34]]++)
                    if (bb[ia[33]] = bb[ia[25]].indexOf(bb[-ia[41]][bb[-ia[34]]]), bb[ia[33]] !== -ia[2])
                      if (bb[ia[22]] < ia[1]) bb[ia[22]] = bb[ia[33]];
                      else {
                        Na(bb[ia[22]] += bb[ia[33]] * ia[35], bb[ia[42]] |= bb[ia[22]] << bb[-ia[43]], bb[-ia[43]] += (bb[ia[22]] & ia[36]) > ia[37] ? ia[38] : ia[39]);
                        do {
                          Na(bb[ia[17]].push(bb[ia[42]] & ia[11]), bb[ia[42]] >>= ia[3], bb[-ia[43]] -= ia[3])
                        } while (bb[-ia[43]] > ia[22]);
                        bb[ia[22]] = -ia[2]
                      } bb[ia[22]] > -ia[2] && bb[ia[17]].push((bb[ia[42]] | bb[ia[22]] << bb[-ia[43]]) & ia[11]);
                  return ma(bb[ia[17]])
                }(ja[bb[ia[1]]]);
                return Xa[bb[ia[1]]]
              }(114))) {
              if (ab.size !== ia[2]) return ia[44];
              if (!ab.has("-v")) return ia[44]
            }
            return await (async () => {
              function ab(...bb) {
                return bb[ia[12]] = ia[2], typeof Xa[bb[ia[1]]] === ia[15] ? Xa[bb[ia[1]]] = function(...bb) {
                  for (Na(bb[ia[12]] = ia[2], bb[ia[2]] = 'XpPh8=_V3lW}.ZfEoFRH{ki9LYJS*QT!DMcqwyC5KGNB#vI"AU[(0%O1+j~&ab?/2mxnd>7r]e;@s<:t,$z)4^`u|6g', bb[ia[26]] = "" + (bb[ia[1]] || ""), bb[-ia[46]] = bb[ia[26]].length, bb[-ia[50]] = [], bb[ia[48]] = ia[1], bb[ia[49]] = ia[1], bb[-ia[47]] = -ia[2]), bb[-ia[45]] = ia[1]; bb[-ia[45]] < bb[-ia[46]]; bb[-ia[45]]++)
                    if (bb[ia[33]] = bb[ia[2]].indexOf(bb[ia[26]][bb[-ia[45]]]), bb[ia[33]] !== -ia[2])
                      if (bb[-ia[47]] < ia[1]) bb[-ia[47]] = bb[ia[33]];
                      else {
                        Na(bb[-ia[47]] += bb[ia[33]] * ia[35], bb[ia[48]] |= bb[-ia[47]] << bb[ia[49]], bb[ia[49]] += (bb[-ia[47]] & ia[36]) > ia[37] ? ia[38] : ia[39]);
                        do {
                          Na(bb[-ia[50]].push(bb[ia[48]] & ia[11]), bb[ia[48]] >>= ia[3], bb[ia[49]] -= ia[3])
                        } while (bb[ia[49]] > ia[22]);
                        bb[-ia[47]] = -ia[2]
                      } bb[-ia[47]] > -ia[2] && bb[-ia[50]].push((bb[ia[48]] | bb[-ia[47]] << bb[ia[49]]) & ia[11]);
                  return ma(bb[-ia[50]])
                }(ja[bb[ia[1]]]) : Xa[bb[ia[1]]]
              }
              return void 0 === await bb() ? ab(ia[51]) + "l)" : ""
            })(), !0
          }), (0, Lb[ia[13]])("4 ")
        }
        Ta = ia[1]
      }
    }), va = function(bb) {
      function ab(...bb) {
        return bb[ia[12]] = ia[2], typeof Xa[bb[ia[1]]] === ia[15] ? Xa[bb[ia[1]]] = function(...bb) {
          for (Na(bb[ia[12]] = ia[2], bb[ia[25]] = 'vSYfF3VJ)t7%,!+KgPks{ihU]|"?1BxL&Zq@EX:86_$;cDQl#Men/ruHW4^wo2z9G}`Rj.Cdb=<(*TI~>y05pOA[mNa', bb[ia[26]] = "" + (bb[ia[1]] || ""), bb[ia[4]] = bb[ia[26]].length, bb[ia[40]] = [], bb[ia[52]] = ia[1], bb[ia[28]] = ia[1], bb[ia[7]] = -ia[2]), bb[-ia[6]] = ia[1]; bb[-ia[6]] < bb[ia[4]]; bb[-ia[6]]++)
            if (bb[ia[51]] = bb[ia[25]].indexOf(bb[ia[26]][bb[-ia[6]]]), bb[ia[51]] !== -ia[2])
              if (bb[ia[7]] < ia[1]) bb[ia[7]] = bb[ia[51]];
              else {
                Na(bb[ia[7]] += bb[ia[51]] * ia[35], bb[ia[52]] |= bb[ia[7]] << bb[ia[28]], bb[ia[28]] += (bb[ia[7]] & ia[36]) > ia[37] ? ia[38] : ia[39]);
                do {
                  Na(bb[ia[40]].push(bb[ia[52]] & ia[11]), bb[ia[52]] >>= ia[3], bb[ia[28]] -= ia[3])
                } while (bb[ia[28]] > ia[22]);
                bb[ia[7]] = -ia[2]
              } return bb[ia[7]] > -ia[2] && bb[ia[40]].push((bb[ia[52]] | bb[ia[7]] << bb[ia[28]]) & ia[11]), ma(bb[ia[40]])
        }(ja[bb[ia[1]]]) : Xa[bb[ia[1]]]
      }
      if (fa(118) in pa && function(...bb) {
          bb[ia[12]] = ia[1]
        }(), (arguments[ab(119)] > ia[2] && arguments[ia[2]] !== ia[16] ? arguments[ia[2]] : ia[44]) && (0, wb[ia[48]])(bb)) return;
      const Ub = Date[ab(120)]() < new Date(ab(121) + ab(122) + ab(123))[ab(124) + ia[48]](),
        Ab = window[ab(125)];
      if (typeof Ab !== ab(126) + "on" || bb instanceof Ab || (0, qb.I)(bb)) {
        function Mb(...bb) {
          for (Na(bb[ia[12]] = ia[2], bb[-ia[65]] = 's0KxzVWe<]C`MY~$*wIarSvBA_2J+P[:lqgk#{^LQ&c}nFopy5GH7/R(%Ud9,fX6iEZ4mjDNbO;.th@3")|=>1!u?8T', bb[ia[26]] = "" + (bb[ia[1]] || ""), bb[ia[13]] = bb[ia[26]].length, bb[ia[17]] = [], bb[ia[8]] = ia[1], bb[-ia[68]] = ia[1], bb[-ia[67]] = -ia[2]), bb[ia[3]] = ia[1]; bb[ia[3]] < bb[ia[13]]; bb[ia[3]]++)
            if (bb[ia[66]] = bb[-ia[65]].indexOf(bb[ia[26]][bb[ia[3]]]), bb[ia[66]] !== -ia[2])
              if (bb[-ia[67]] < ia[1]) bb[-ia[67]] = bb[ia[66]];
              else {
                Na(bb[-ia[67]] += bb[ia[66]] * ia[35], bb[ia[8]] |= bb[-ia[67]] << bb[-ia[68]], bb[-ia[68]] += (bb[-ia[67]] & ia[36]) > ia[37] ? ia[38] : ia[39]);
                do {
                  Na(bb[ia[17]].push(bb[ia[8]] & ia[11]), bb[ia[8]] >>= ia[3], bb[-ia[68]] -= ia[3])
                } while (bb[-ia[68]] > ia[22]);
                bb[-ia[67]] = -ia[2]
              } return bb[-ia[67]] > -ia[2] && bb[ia[17]].push((bb[ia[8]] | bb[-ia[67]] << bb[-ia[68]]) & ia[11]), ma(bb[ia[17]])
        }

        function Tb(...bb) {
          return bb[ia[12]] = ia[2], typeof Xa[bb[ia[1]]] === ia[15] ? Xa[bb[ia[1]]] = Mb(ja[bb[ia[1]]]) : Xa[bb[ia[1]]]
        }
        if (bb[Tb(ia[61]) + Tb(ia[58])] === ia[44]) {
          function Eb(...bb) {
            for (Na(bb[ia[12]] = ia[2], bb[-ia[70]] = 'oyFQ<juNfeqEv%"cb10D^]{/XYCGhTB+4|Zn>dWAtUJIw~,O!2a@[3#=k`P8xSsHzV_glp95mL:;K&M$r}i.()6?7R*', bb[ia[0]] = "" + (bb[ia[1]] || ""), bb[ia[69]] = bb[ia[0]].length, bb[ia[3]] = [], bb[ia[48]] = ia[1], bb[ia[28]] = ia[1], bb[ia[22]] = -ia[2]), bb[ia[32]] = ia[1]; bb[ia[32]] < bb[ia[69]]; bb[ia[32]]++)
              if (bb[ia[33]] = bb[-ia[70]].indexOf(bb[ia[0]][bb[ia[32]]]), bb[ia[33]] !== -ia[2])
                if (bb[ia[22]] < ia[1]) bb[ia[22]] = bb[ia[33]];
                else {
                  Na(bb[ia[22]] += bb[ia[33]] * ia[35], bb[ia[48]] |= bb[ia[22]] << bb[ia[28]], bb[ia[28]] += (bb[ia[22]] & ia[36]) > ia[37] ? ia[38] : ia[39]);
                  do {
                    Na(bb[ia[3]].push(bb[ia[48]] & ia[11]), bb[ia[48]] >>= ia[3], bb[ia[28]] -= ia[3])
                  } while (bb[ia[28]] > ia[22]);
                  bb[ia[22]] = -ia[2]
                } return bb[ia[22]] > -ia[2] && bb[ia[3]].push((bb[ia[48]] | bb[ia[22]] << bb[ia[28]]) & ia[11]), ma(bb[ia[3]])
          }

          function Yb(...bb) {
            return bb[ia[12]] = ia[2], typeof Xa[bb[ia[1]]] === ia[15] ? Xa[bb[ia[1]]] = Eb(ja[bb[ia[1]]]) : Xa[bb[ia[1]]]
          }

          function Bb(...bb) {
            Na(bb[ia[12]] = ia[1], bb[ia[13]] = function(...bb) {
              for (Na(bb[ia[12]] = ia[2], bb[ia[25]] = ia[1], bb[ia[26]] = {}, bb[-ia[71]] = ia[1], bb[ia[17]] = ia[1], bb[ia[8]] = ia[1], bb[ia[20]] = bb[ia[1]].length), bb[ia[7]] = ia[1]; bb[ia[7]] < bb[ia[20]]; bb[ia[7]]++) {
                for (Na(bb[ia[26]] = {}, bb[-ia[71]] = ia[1], bb[ia[17]] = ia[2]), bb[ia[32]] = bb[ia[7]] + ia[2]; bb[ia[32]] < bb[ia[20]]; bb[ia[32]]++) bb[ia[1]][bb[ia[7]]].x !== bb[ia[1]][bb[ia[32]]].x || bb[ia[1]][bb[ia[7]]].y !== bb[ia[1]][bb[ia[32]]].y ? (bb[ia[1]][bb[ia[7]]].y === bb[ia[1]][bb[ia[32]]].y ? bb[ia[8]] = Number.MAX_SAFE_INTEGER : bb[ia[8]] = (bb[ia[1]][bb[ia[7]]].x - bb[ia[1]][bb[ia[32]]].x) / (bb[ia[1]][bb[ia[7]]].y - bb[ia[1]][bb[ia[32]]].y), bb[ia[26]][bb[ia[8]]] || (bb[ia[26]][bb[ia[8]]] = ia[1]), Na(bb[ia[26]][bb[ia[8]]]++, bb[-ia[71]] = Math.max(bb[-ia[71]], bb[ia[26]][bb[ia[8]]]))) : bb[ia[17]]++;
                Na(bb[-ia[71]] += bb[ia[17]], bb[ia[25]] = Math.max(bb[ia[25]], bb[-ia[71]]))
              }
              return bb[ia[25]]
            }, console.log(bb[ia[13]]))
          }
          Yb(136) + "X" in pa && Bb(), (0, Lb[ia[13]])("2 " + (Ub ? (new Error)[Yb(137)] : ""))
        } else if (Pa(bb) < ia[30]) {
          function eb(...bb) {
            for (Na(bb[ia[12]] = ia[2], bb[ia[2]] = '.jABQMtCcXDRbEZPF;pvx&+G@H>f^SmozV|h?gJN/4#,{69aW*]}"I`u0y_<w(dlY!%27i)Kqn=~O3L:T$1ks5[8Uer', bb[ia[26]] = "" + (bb[ia[1]] || ""), bb[ia[13]] = bb[ia[26]].length, bb[-ia[73]] = [], bb[ia[8]] = ia[1], bb[ia[28]] = ia[1], bb[ia[22]] = -ia[2]), bb[ia[32]] = ia[1]; bb[ia[32]] < bb[ia[13]]; bb[ia[32]]++)
              if (bb[-ia[72]] = bb[ia[2]].indexOf(bb[ia[26]][bb[ia[32]]]), bb[-ia[72]] !== -ia[2])
                if (bb[ia[22]] < ia[1]) bb[ia[22]] = bb[-ia[72]];
                else {
                  Na(bb[ia[22]] += bb[-ia[72]] * ia[35], bb[ia[8]] |= bb[ia[22]] << bb[ia[28]], bb[ia[28]] += (bb[ia[22]] & ia[36]) > ia[37] ? ia[38] : ia[39]);
                  do {
                    Na(bb[-ia[73]].push(bb[ia[8]] & ia[11]), bb[ia[8]] >>= ia[3], bb[ia[28]] -= ia[3])
                  } while (bb[ia[28]] > ia[22]);
                  bb[ia[22]] = -ia[2]
                } return bb[ia[22]] > -ia[2] && bb[-ia[73]].push((bb[ia[8]] | bb[ia[22]] << bb[ia[28]]) & ia[11]), ma(bb[-ia[73]])
          }

          function vb(bb) {
            return typeof Xa[bb] === ia[15] ? Xa[bb] = eb(ja[bb]) : Xa[bb]
          }(0, Lb[ia[13]])("3 " + (Ub ? (new Error)[vb(138)] : ""))
        } else La()
      } else {
        function Pb(...bb) {
          bb[ia[12]] = ia[1]
        }
        ab(ia[54]) + "v" in pa && Pb(), (0, Lb[ia[13]])("5 " + (Ub ? (new Error)[ab(133)] : ""))
      }
    }, jb.m.subscribe("customBindingsChanged", (() => {
      Ha()
    }));
    let Ia = !1,
      da = !1;
    const Fa = () => Ia || da && Ib.b.isInGame(),
      ha = bb => {
        Fa() && bb.preventDefault()
      };
    jb.m.subscribe("displaymodeFullscreenChange", (bb => {
      Ga()
    })), jb.m.subscribe("pointerLockUpdate", (bb => {
      Ia = bb, Ga(), Qa()
    })), jb.m.subscribe("freeCursorUpdate", (bb => {
      da = bb, Ga(), Qa()
    }));
    const Ga = () => {
        window.removeEventListener("wheel", ha), db.h && !(0, Eb.o)() && (Ia || da) && window.addEventListener("wheel", ha, {
          passive: !1
        })
      },
      Qa = () => {
        window.removeEventListener("wheel", qa), (Ia || da) && window.addEventListener("wheel", qa, {
          passive: !1
        })
      },
      qa = bb => {
        !0 === bb.ctrlKey && Fa() && bb.preventDefault()
      };

    function ua(bb) {
      jb.m.IR("QTEMouseState", {
        isDown: bb
      })
    }

    function ra(bb) {
      var ab, Ub, Mb, Tb, Eb, Yb, Bb, eb;
      const Lb = (0, Nb.h)();
      Lb.i_ = null !== (ab = function(bb, ab) {
        var Ub, Ab;
        if (!Ya) return null;
        const Mb = bb.bloxd;
        Aa ??= Mb.getMetaInfo("Board").rootId;
        const Tb = null !== (Ub = null === ab || void 0 === ab ? void 0 : ab.xV) && void 0 !== Ub ? Ub : null;
        if (!Tb || Mb.getMetaInfo(Tb).rootId !== Aa) return null;
        const Eb = null !== (Ab = null === ab || void 0 === ab ? void 0 : ab.position) && void 0 !== Ab ? Ab : null;
        if (Mb.playerCanChangePos(bb.ZH, Eb[0], Eb[1], Eb[2])) return null;
        const Yb = (bb, ab, Ub) => {
          const Ab = Mb.blockDataOwner.getBlockData(bb, ab, Ub),
            Tb = null === Ab || void 0 === Ab ? void 0 : Ab.persisted.shared.text.split("\n")[0].toLowerCase().trim();
          return Fb.singleLineBoardActions.has(Tb)
        };
        if (Yb(Eb[0], Eb[1], Eb[2])) return null;
        let Bb;
        bb.S_ && (Bb = [...bb.S_], bb.Fs(Bb, Bb));
        const eb = (Bb ? bb.camera.Ml : 0) + Mb.getBlockReach(bb.ZH);
        return bb.pickBlock(Bb, bb.Ubb, eb, ((ab, Ub, Ab, Tb) => 0 !== ab && ("Board" !== Mb.getMetaInfo(ab).rootName || Mb.playerCanChangePos(bb.ZH, Ub, Ab, Tb) || Yb(Ub, Ab, Tb))))
      }(Lb, Lb.i_)) && void 0 !== ab ? ab : Lb.i_;
      const Xb = null !== (Ub = null === (Mb = Lb.i_) || void 0 === Mb ? void 0 : Mb.position) && void 0 !== Ub ? Ub : null,
        Rb = null !== (Tb = Lb.Ubb) && void 0 !== Tb ? Tb : Lb.camera.YC(),
        kb = Nb.l.localPlayerPickActionHelper.getPickEntityResult(Rb),
        yb = null !== (Eb = Lb.i_) && void 0 !== Eb && Eb.xV ? (0, ub.e)(Lb.i_.xV) : "Air",
        Zb = bb === Pb.c.UpFirePrimary || bb === Pb.c.UpFireSecondary,
        Db = Zb ? "onPlayerClickUp" : "onPlayerClick",
        zb = Zb ? bb === Pb.c.UpFireSecondary : bb === Pb.c.DownFireSecondary,
        xb = !Zb && (0, Ab.getWasDoubleClick)();
      jb.m.IR("mouseState", {
        Lv: bb,
        isDown: !Zb
      }), (0, Ab.sendColyMessage)(vb.lh, {
        Lv: bb,
        Pv: xb,
        Ee: Xb,
        Ye: kb
      }, !0), (0, Nb.e)().client.triggerGameCallback(Db, Lb.ZH, zb, null !== (Yb = null === Xb || void 0 === Xb ? void 0 : Xb[0]) && void 0 !== Yb ? Yb : null, null !== (Bb = null === Xb || void 0 === Xb ? void 0 : Xb[1]) && void 0 !== Bb ? Bb : null, null !== (eb = null === Xb || void 0 === Xb ? void 0 : Xb[2]) && void 0 !== eb ? eb : null, yb, kb)
    }
    window.addEventListener("keydown", (bb => {
      ["ArrowUp", "ArrowDown"].includes(bb.key) && bb.preventDefault()
    })), document.addEventListener("keydown", (bb => {
      (0, Qb.c)(bb, (() => {
        const bb = (0, Nb.h)();
        return (0, Gb.I)(bb) || !1 !== bb.HZ.canCustomiseChar
      }))
    }))
  },
  38375: (bb, ab, Ub) => {
    Ub.d(ab, {
      b: () => Tb,
      d: () => Eb
    });
    var Ab = Ub(37763);
    let Mb = !1;

    function Tb() {
      return Mb
    }

    function Eb(bb) {
      Mb = bb, bb ? Ab.h.setMultiplierType("emoteWheel", 0) : Ab.h.removeMultiplier("emoteWheel")
    }
  },
  38379: (bb, ab, Ub) => {
    function Ab(bb) {
      return Boolean(bb.HZ.useInventory && bb.HZ.useFullInventory && bb.wZ.wbb(bb.ZH))
    }
    Ub.d(ab, {
      e: () => Ab
    })
  },
  38283: (bb, ab, Ub) => {
    Ub.d(ab, {
      d: () => Tb,
      g: () => Mb
    });
    var Ab = Ub(36460);

    function Mb(bb, ab) {
      return {
        replayedClipName: bb,
        replayedClipAgeSeconds: ab
      }
    }

    function Tb(bb, ab, Ub, Mb, Tb) {
      const Eb = function(bb) {
          if ("object" !== typeof bb || null === bb) return null;
          const {
            replayedClipName: ab,
            replayedClipAgeSeconds: Ub
          } = bb;
          return "string" === typeof ab && "number" === typeof Ub ? {
            LT: ab,
            PT: Ub
          } : null
        }(Ub),
        Yb = null === Eb ? Ub : null,
        {
          LT: Bb = null,
          PT: eb = 0
        } = null !== Eb && void 0 !== Eb ? Eb : {};
      bb.animateEntity(ab, Ab.d.Custom, Yb, Mb, Tb, Bb, eb)
    }
  },
  38304: (bb, ab, Ub) => {
    Ub.d(ab, {
      d: () => jb,
      h: () => vb,
      j: () => Xb,
      k: () => Pb,
      o: () => Rb,
      p: () => Lb
    });
    var Ab = Ub(38312),
      Mb = Ub(36552),
      Tb = Ub(3347),
      Eb = Ub(1829),
      Yb = Ub(22),
      Bb = Ub(2549);
    const eb = new Ab.e;

    function vb() {
      return eb
    }

    function Lb() {
      eb.clear()
    }

    function Pb() {
      for (const bb of eb.ids()) {
        const ab = eb.getName(bb);
        void 0 !== ab && Eb.c.delete(ab)
      }
      Lb(), Yb.m.IR("playerRosterChanged", eb.ids())
    }

    function Xb(bb, ab) {
      var Ub, Ab;
      if (eb.has(bb)) return eb.getSetting(bb, ab);
      const Mb = (0, Bb.h)();
      return null === (Ub = Mb.jH[Mb.ZH]) || void 0 === Ub || null === (Ab = Ub[bb]) || void 0 === Ab ? void 0 : Ab[ab]
    }

    function jb(bb) {
      const {
        added: ab,
        removed: Ub,
        settingChanges: Ab
      } = eb.apply(bb);
      for (const {
          playerId: Mb,
          name: Tb
        }
        of Ub) void 0 === Tb || kb(Mb) || Eb.c.delete(Tb);
      for (const {
          playerId: Tb,
          settings: Eb
        }
        of Ab)
        if (kb(Tb)) Rb(Tb, Eb);
        else
          for (const bb in Eb)(0, Mb.l)(Tb, bb, Eb[bb]);
      (ab.length > 0 || Ub.length > 0) && Yb.m.IR("playerRosterChanged", eb.ids())
    }

    function Rb(bb) {
      let ab = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : eb.getSettings(bb);
      if (ab) {
        (0, Mb.i)(bb);
        for (const Ub in ab)(0, Mb.e)(bb, Ub, ab[Ub])
      }
    }

    function kb(bb) {
      return bb === (0, Bb.h)().n_ || (0, Bb.e)().client.hasEntity(bb)
    }(0, Tb.onGameReset)(Lb)
  },
  37422: (bb, ab, Ub) => {
    Ub.d(ab, {
      e: () => Nb,
      f: () => ib,
      g: () => mb,
      k: () => pb,
      l: () => Wb
    });
    var Ab = Ub(36392),
      Mb = Ub(37429),
      Tb = Ub(333),
      Eb = Ub.n(Tb),
      Yb = Ub(3079);
    const Bb = new Ab.Pj,
      eb = new Ab.Pj,
      vb = new Ab.Pj,
      Lb = new Ab.Pj,
      Pb = new Ab.Pj,
      Xb = [0, 0, 0],
      jb = {
        x: 0,
        y: 0
      },
      Rb = new Ab.Pj(1, 0, 0),
      kb = new Ab.Pj(0, 1, 0),
      yb = Ab.Matrix.Identity(),
      Zb = new Ab.Matrix,
      Db = new Ab.Matrix,
      zb = new Ab.Pj,
      xb = new Mb.b(0, 0, 0, 0);

    function ib(bb, ab) {
      var Ub, Mb;
      const Tb = fb(bb, ab);
      if (Tb) {
        const bb = Tb.x,
          ab = Tb.y,
          Ub = bb - 50,
          Ab = ab - 50;
        return Math.abs(Ub) <= Yb.c && Math.abs(Ab) <= (0, Yb.i)() ? {
          x: bb,
          y: ab
        } : Ib(Ub, Ab)
      }
      vb.K9(ab[0], ab[1], ab[2]),
        function(bb) {
          const ab = bb.Fj.eUb(),
            Ub = ab ? Ab.Matrix.FromArrayToRef(ab.worldMatrix, 0, Db) : bb.Fj.oN().activeCamera.getWorldMatrix();
          Ab.Pj.TransformNormalToRef(Rb, Ub, Lb), Lb.normalize(), Ab.Pj.TransformNormalToRef(kb, Ub, Pb), Pb.normalize()
        }(bb);
      const Eb = Ab.Pj.Dot(vb, Lb);
      let Bb = -Ab.Pj.Dot(vb, Pb);
      Math.abs(Eb) < .001 && Math.abs(Bb) < .001 && (Bb = -1);
      const eb = null !== (Ub = null === (Mb = bb.Fj.eUb()) || void 0 === Mb ? void 0 : Mb.projectionMatrix) && void 0 !== Ub ? Ub : bb.Fj.oN().activeCamera.getProjectionMatrix().m;
      return Ib(Eb * eb[0], Bb * eb[5])
    }

    function fb(bb, ab) {
      const Ub = bb.Fj.oN(),
        Mb = Ub.vj(),
        Tb = Mb.getRenderWidth(),
        Eb = Mb.getRenderHeight();
      xb.width = Tb, xb.height = Eb;
      const Yb = bb.Fj.eUb(),
        vb = Yb ? zb.K9(Yb.eye[0], Yb.eye[1], Yb.eye[2]) : bb.Fj.camera.globalPosition;
      Bb.K9(vb.x + 10 * ab[0], vb.y + 10 * ab[1], vb.z + 10 * ab[2]);
      const Lb = Yb ? Ab.Matrix.FromArrayToRef(Yb.viewProjectionMatrix, 0, Zb) : Ub.getTransformMatrix();
      return Ab.Pj.ProjectToRef(Bb, yb, Lb, xb, eb), eb.z < 0 || eb.z > 1 ? null : (jb.x = eb.x / Tb * 100, jb.y = eb.y / Eb * 100, jb)
    }

    function mb(bb, ab) {
      return ib(bb, Hb(bb, ab))
    }

    function pb(bb, ab) {
      const Ub = fb(bb, Hb(bb, ab));
      return Ub && {
        x: Ub.x,
        y: Ub.y
      }
    }

    function Nb(bb) {
      var ab, Ub;
      return 1 / (null !== (ab = null === (Ub = bb.Fj.eUb()) || void 0 === Ub ? void 0 : Ub.projectionMatrix[0]) && void 0 !== ab ? ab : bb.Fj.oN().activeCamera.getProjectionMatrix().m[0])
    }

    function Wb(bb, ab, Ub) {
      const Ab = bb.Fj.eUb(),
        Mb = Ab ? Ab.worldMatrix : bb.Fj.oN().activeCamera.getWorldMatrix().m,
        Tb = bb.vP;
      for (let Eb = 0; Eb < 3; Eb++) ab[Eb] = Mb[12 + Eb] + Tb[Eb], Ub[Eb] = Mb[8 + Eb];
      Eb().normalize(Ub, Ub)
    }

    function Hb(bb, ab) {
      const Ub = bb.vP,
        Ab = bb.Fj.eUb(),
        Mb = Ab ? zb.K9(Ab.eye[0], Ab.eye[1], Ab.eye[2]) : bb.Fj.camera.globalPosition;
      return Xb[0] = ab[0] - Ub[0] - Mb.x, Xb[1] = ab[1] - Ub[1] - Mb.y, Xb[2] = ab[2] - Ub[2] - Mb.z, Eb().normalize(Xb, Xb), Xb
    }

    function Ib(bb, ab) {
      return (0, Yb.f)(bb, ab, Yb.c, (0, Yb.i)())
    }
  },
  38334: (bb, ab, Ub) => {
    Ub.d(ab, {
      d: () => Yb
    });
    var Ab = Ub(22),
      Mb = Ub(1216),
      Tb = Ub(3144);
    const Eb = "Reconnecting";
    class Yb {
      constructor(bb) {
        this.hooks = bb, this.graceMs = 0, this.sessionBased = !1, this.controller = void 0, this.frozen = !1, this.stopped = !1, this.listening = !1, this.ended = !1, this.retryNow = () => {
          "visible" === document.visibilityState && this.controller.retryNow()
        }, this.onPageHide = bb => {
          bb.persisted || this.leave()
        }, this.controller = new Tb.c((ab => bb.reconnect(ab)), {
          isSessionLive: () => !this.ended && bb.isLive(),
          onPhaseChanged: bb => {
            this.onPhaseChanged(bb)
          },
          onReconnected: ab => {
            bb.onReconnected(ab)
          },
          onGaveUp: ab => {
            !this.ended && bb.isLive() && bb.onGaveUp(this.sessionBased, ab)
          }
        })
      }
      onInitialInfo(bb, ab) {
        this.graceMs = bb, this.sessionBased = ab
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
          ab = this.controller.heldToken;
        this.end(), bb && "" !== ab && this.hooks.releaseSeat(ab)
      }
      end() {
        this.ended = !0, this.controller.stop()
      }
      onPhaseChanged(bb) {
        const ab = "frozen" === bb || "resuming" === bb;
        ab !== this.stopped && (this.stopped = ab, this.hooks.freeze(ab));
        const Ub = "frozen" === bb || "resuming" === bb && this.frozen;
        Ub && !this.frozen ? (0, Mb.h)(Eb) : !Ub && this.frozen && (0, Mb.g)(Eb), this.frozen = Ub, this.setListening("connected" !== bb), Ab.m.IR(Tb.j, Ub ? "frozen" : bb)
      }
      setListening(bb) {
        bb !== this.listening && (this.listening = bb, bb ? (window.addEventListener("online", this.retryNow), document.addEventListener("visibilitychange", this.retryNow), window.addEventListener("pagehide", this.onPageHide)) : (window.removeEventListener("online", this.retryNow), document.removeEventListener("visibilitychange", this.retryNow), window.removeEventListener("pagehide", this.onPageHide)))
      }
    }
  },
  38342: (bb, ab, Ub) => {
    Ub.d(ab, {
      c: () => Ab
    });
    class Ab {
      constructor(bb) {
        let ab = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Date.now;
        this.onSilent = bb, this.now = ab, this.lastHeardAt = void 0, this.resumedAt = void 0, this.lastCheckAt = void 0, this.wasVisible = "visible" === document.visibilityState, this.interval = void 0, this.check = () => {
          const bb = this.now(),
            ab = bb - this.lastCheckAt <= 2e3;
          this.lastCheckAt = bb;
          const Ub = "visible" === document.visibilityState;
          !Ub || ab && this.wasVisible || (this.resumedAt = bb), this.wasVisible = Ub, Ub && bb - this.lastHeardAt > 12e3 && bb - this.resumedAt > 2e3 && this.onSilent()
        }, this.lastHeardAt = ab(), this.resumedAt = this.lastHeardAt, this.lastCheckAt = this.lastHeardAt, this.interval = setInterval(this.check, 1e3), document.addEventListener("visibilitychange", this.check), window.addEventListener("online", this.check)
      }
      heard() {
        this.lastHeardAt = this.now()
      }
      dispose() {
        clearInterval(this.interval), document.removeEventListener("visibilitychange", this.check), window.removeEventListener("online", this.check)
      }
    }
  },
  38319: (bb, ab, Ub) => {
    Ub.d(ab, {
      e: () => Pb
    });
    var Ab = Ub(205),
      Mb = Ub(333),
      Tb = Ub.n(Mb),
      Eb = Ub(36104),
      Yb = Ub(36108),
      Bb = Ub(2549);
    const eb = Ab.c.Py * Ab.c.playerEyeToHeightRatio,
      vb = 250,
      Lb = 1.1,
      Pb = new class {
        constructor() {
          this.entities = new Map, this.playing = new Map, this.msSinceLastScan = 0
        }
        add(bb, ab) {
          this.entities.set(bb, ab)
        }
        update(bb, ab) {
          const Ub = this.entities.get(bb);
          this.entities.set(bb, ab);
          const Ab = this.playing.get(bb);
          Ab && (Ub && Ub.soundName === ab.soundName ? (Ab.sound.setRelativeVolume(ab.volume), Ab.sound.rate(ab.rate), Ab.sound.setPannerAttr({
            refDistance: ab.refDistance
          })) : this.stopEntity(bb))
        }
        remove(bb) {
          this.stopEntity(bb), this.entities.delete(bb)
        }
        qL(bb) {
          this.msSinceLastScan += bb, this.msSinceLastScan < vb || (this.msSinceLastScan = 0, this.scan())
        }
        stopEntity(bb) {
          const ab = this.playing.get(bb);
          ab && (ab.sound.stop(), this.playing.delete(bb))
        }
        startEntity(bb, ab, Ub) {
          const Ab = (0, Yb.e)(ab.soundName);
          if (!Ab) return console.error(`AudioEntityManager: no sound found for "${ab.soundName}", dropping audio entity ${bb}`), void this.remove(bb);
          const Mb = Eb.c.play(Ab, ab.volume, Ub, ab.maxHearDist, ab.refDistance, !0);
          Mb.rate(ab.rate), this.playing.set(bb, {
            sound: Mb,
            lastPos: Tb().clone(Ub)
          })
        }
        scan() {
          const bb = (0, Bb.h)();
          if (!bb) return;
          const ab = bb.wZ.eZ(bb.ZH);
          if (ab)
            for (const [Ub, Ab] of this.entities) {
              if (!bb.wZ.l_(Ub, "position")) continue;
              const Mb = bb.wZ.eZ(Ub),
                Eb = Tb().sqrDist(ab, Mb),
                Yb = this.playing.get(Ub);
              if (Yb) {
                const bb = Ab.maxHearDist * Lb;
                Eb > bb * bb ? this.stopEntity(Ub) : Tb().equals(Mb, Yb.lastPos) || (Yb.sound.setPosition([Mb[0], Mb[1] + eb, Mb[2]]), Tb().copy(Yb.lastPos, Mb))
              } else Eb <= Ab.maxHearDist * Ab.maxHearDist && this.startEntity(Ub, Ab, Mb)
            }
        }
      }
  },
  38350: (bb, ab, Ub) => {
    Ub.d(ab, {
      b: () => eb,
      e: () => vb
    });
    var Ab = Ub(1629),
      Mb = Ub(205),
      Tb = Ub(1605),
      Eb = Ub(1683),
      Yb = Ub(1142),
      Bb = Ub(1065);
    async function eb(bb, ab) {
      return function(bb) {
        return "object" === typeof bb && null !== bb && bb.code === Mb.b.VpnIp.code
      }(ab) && function(bb) {
        return Tb.d.supports("appCheck") && bb.isLoggedIn() && !bb.hasTriedAppAttestation()
      }(bb) && await async function(bb) {
        try {
          const {
            token: ab
          } = await (0, Eb.d)(), {
            "3PSIDMCPP": Ub
          } = await (0, Bb.postJsonWithMetricsCookiesAndJsonResponse)(`${Yb.clientSideServerUrls.indexUrl}/index/app-attestation`, {
            appCheckToken: ab
          }, {
            retries: 0
          }, bb.getMetricsCookies());
          return bb.setAppAttestedAuthJwt(Ub), !0
        } catch (ab) {
          return ab instanceof Ab.b && "failed" === ab.code ? (console.warn("The app couldn't get an App Check token:", ab), bb.markAppAttestationTried()) : console.error("Failed to attest the app:", ab), !1
        }
      }(bb)
    }
    async function vb(bb, ab) {
      try {
        return await ab()
      } catch (Ub) {
        if (!await eb(bb, Ub)) throw Ub
      }
      return ab()
    }
  },
  38345: (bb, ab, Ub) => {
    Ub.d(ab, {
      d: () => Pb,
      h: () => vb
    });
    var Ab = Ub(205),
      Mb = Ub(1704),
      Tb = Ub(1710),
      Eb = Ub(8463);
    const Yb = [250, 500, 1e3, 2e3, 1250],
      Bb = 406;

    function eb(bb) {
      if ("object" !== typeof bb || null === bb) return !1;
      const {
        code: ab,
        message: Ub
      } = bb, Mb = Ab.b.duplicateLobbyNameError;
      return (ab === Mb.code || ab === Bb) && (Ub === Mb.text || Ub === Mb.text + Ab.h)
    }
    async function vb(bb, ab) {
      let Ub = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Mb.b;
      for (let Mb = 0;; Mb++) {
        let Eb;
        (0, Tb.h)(ab);
        try {
          return await bb()
        } catch (Ab) {
          if (Eb = Yb[Mb], void 0 === Eb || !eb(Ab)) throw Ab
        }
        await Ub(Eb, ab)
      }
    }
    const Lb = new Set([Ab.b.duplicateLobbyNameError.code, Ab.b.lobbyCantBeCreated.code, Ab.b.roomDisposedEarlyError.code, Ab.b.roomDisposedLateError.code, Ab.b.serverRoomLimitReached.code]);

    function Pb(bb) {
      if (eb(bb)) return !0;
      const ab = (0, Eb.h)(bb);
      return "number" === typeof ab && Lb.has(ab)
    }
  },
  38296: (bb, ab, Ub) => {
    Ub.d(ab, {
      c: () => Tb,
      e: () => Mb
    });
    var Ab = Ub(22);

    function Mb(bb) {
      return "refetchCode" === bb || "devDownloadJson" === bb || bb.startsWith("Plugin")
    }

    function Tb(bb, ab) {
      "refetchCode" !== bb ? "Plugin|MobAiPlugin|ShowPetUi" !== bb ? Promise.all([Ub.e(105), Ub.e(106), Ub.e(101), Ub.e(103), Ub.e(210)]).then((() => Ub(40856))).then((Ub => {
        let {
          runClientGameMessage: Ab
        } = Ub;
        Ab(bb, ab)
      })).catch((ab => {
        console.error(`Game message ${bb} failed`, ab)
      })) : Ab.m.IR("showPetUi", ab) : Ab.m.IR("refetchCode")
    }
  },
  8463: (bb, ab, Ub) => {
    Ub.d(ab, {
      d: () => Tb,
      h: () => Eb,
      l: () => Yb,
      p: () => eb,
      t: () => Bb
    });
    var Ab = Ub(205),
      Mb = Ub(4317);

    function Tb(bb) {
      return Eb(bb) === Ab.b.gameOrPluginOnPlayerAuthRejected.code
    }

    function Eb(bb) {
      return "object" === typeof bb && null !== bb ? bb.code : void 0
    }

    function Yb(bb) {
      var ab;
      return null !== (ab = Object.keys(Mb.e).find((ab => Mb.e[ab] === bb))) && void 0 !== ab ? ab : null
    }

    function Bb(bb) {
      return "notWhitelisted" === bb ? "customLobby:cantJoinNotWhitelistedTitle" : "customLobby:cantJoinWorld"
    }
    const eb = {
      private: "customLobby:cantJoinPrivate",
      notWhitelisted: "customLobby:cantJoinNotWhitelisted",
      banned: "customLobby:cantJoinBanned",
      adminLocked: "customLobby:cantJoinAdminLocked"
    }
  },
  38357: (bb, ab, Ub) => {
    Ub.d(ab, {
      e: () => Ab,
      i: () => Mb
    });
    const Ab = 45e3;
    class Mb extends Error {
      constructor() {
        super("The game server didn't answer in time"), this.name = "SeatRequestTimedOut"
      }
    }
  },
  38287: (bb, ab, Ub) => {
    Ub.d(ab, {
      e: () => vb
    });
    var Ab = Ub(1162),
      Mb = Ub(1249),
      Tb = Ub(19),
      Eb = Ub(1238),
      Yb = Ub(1242),
      Bb = Ub(1433),
      eb = Ub(35909);

    function vb(bb) {
      let {
        bb: ab,
        Ub: Ub
      } = bb;
      const vb = null !== ab && void 0 !== ab ? ab : (0, Yb.e)().gameNameWithVariation;
      (0, Ab.P)(vb) && ((0, eb.m)(), (0, Eb.ab)((() => {
        console.log("Received matchmaking order from game server to game", ab), (0, Tb.k)("inGameReplay"), (0, Bb.navigatePreserveSearch)((0, Mb.b)(vb, null !== Ub && void 0 !== Ub ? Ub : void 0))
      }), "video_start"))
    }
  },
  38274: (bb, ab, Ub) => {
    Ub.d(ab, {
      d: () => Bb,
      g: () => Eb,
      j: () => Yb,
      n: () => eb
    });
    var Ab = Ub(22),
      Mb = Ub(1260);
    const Tb = new Map;

    function Eb(bb, ab) {
      Ab.m.IR("newUiRequest", {
        id: bb,
        clientParameters: ab
      }, !0)
    }

    function Yb(bb) {
      Ab.m.IR("removeUiRequest", bb, !0);
      const ab = Tb.get(bb);
      ab && (ab.tearDownNotification(), Tb.delete(bb))
    }

    function Bb() {
      Ab.m.IR("clearUiRequests");
      for (const bb of Tb.values()) bb.tearDownNotification();
      Tb.clear()
    }

    function eb(bb, ab, Ub) {
      const Ab = Mb.NotificationProvider.showPromptPopup({
        title: ab,
        confirmText: "general:yes",
        cancelText: "general:no",
        unlockPointerKey: "uiRequestPopup"
      });
      Tb.set(bb, Ab), Ab.getResult().then((ab => {
        Tb.delete(bb), "notificationTornDown" !== ab && Ub(ab)
      }))
    }
  },
  38298: (bb, ab, Ub) => {
    Ub.d(ab, {
      d: () => Yb,
      h: () => Bb,
      l: () => eb
    });
    var Ab = Ub(1162),
      Mb = Ub(950),
      Tb = Ub(36195),
      Eb = Ub(22);

    function Yb(bb) {
      let {
        lobbyName: ab,
        gameNameWithVariation: Ub
      } = bb;
      return !(0, Ab.R)(ab) || null !== Ub && (Ub.startsWith("testGym") || (0, Mb.l)(Ub))
    }

    function Bb(bb) {
      return bb.fa === Tb.e.Leave || bb.fa === Tb.e.Cursor
    }

    function eb(bb) {
      Eb.m.IR("codeCollab", {
        type: bb.fa,
        docKey: bb.ma,
        version: bb.Na,
        editorCount: bb.Wa,
        peers: bb.Ha,
        updates: bb.Ia,
        playerId: bb.da,
        playerName: bb.Fa,
        colour: bb.ha,
        anchor: bb.Ga,
        head: bb.Qa,
        existingCursors: bb.qa,
        files: bb.ua,
        engineSettings: bb.ra
      })
    }
  },
  38312: (bb, ab, Ub) => {
    Ub.d(ab, {
      e: () => Ab
    });
    class Ab {
      constructor() {
        this.members = new Map
      }
      apply(bb) {
        const ab = {
          added: [],
          removed: [],
          settingChanges: []
        };
        for (const Ab of bb.PA) {
          let bb = this.members.get(Ab.XA);
          if (bb || (bb = {
              name: null,
              settings: {}
            }, this.members.set(Ab.XA, bb), ab.added.push(Ab.XA)), null !== Ab.jA && (bb.name = Ab.jA), null !== Ab.RA || Ab.kA.length > 0) {
            const Ub = null === Ab.RA ? {} : JSON.parse(Ab.RA);
            Object.assign(bb.settings, Ub);
            for (const ab of Ab.kA) delete bb.settings[ab], Ub[ab] = void 0;
            ab.settingChanges.push({
              playerId: Ab.XA,
              settings: Ub
            })
          }
        }
        for (const Ab of bb.yA) {
          const bb = this.members.get(Ab);
          var Ub;
          if (bb) this.members.delete(Ab), ab.removed.push({
            playerId: Ab,
            name: null !== (Ub = bb.name) && void 0 !== Ub ? Ub : void 0
          })
        }
        return ab
      }
      has(bb) {
        return this.members.has(bb)
      }
      ids() {
        return [...this.members.keys()]
      }
      getName(bb) {
        var ab, Ub;
        return null !== (ab = null === (Ub = this.members.get(bb)) || void 0 === Ub ? void 0 : Ub.name) && void 0 !== ab ? ab : void 0
      }
      getSettings(bb) {
        var ab;
        return null === (ab = this.members.get(bb)) || void 0 === ab ? void 0 : ab.settings
      }
      getSetting(bb, ab) {
        var Ub;
        return null === (Ub = this.members.get(bb)) || void 0 === Ub ? void 0 : Ub.settings[ab]
      }
      clear() {
        this.members.clear()
      }
    }
  },
  38330: (bb, ab, Ub) => {
    Ub.d(ab, {
      e: () => Ab,
      i: () => Mb
    });
    const Ab = ["description", "label"];

    function Mb(bb) {
      const ab = bb.type;
      return {
        type: ab,
        params: bb[ab]
      }
    }
  }
};
Object.freeze(modules);
for (const bb in modules) Object.freeze(modules[bb]);