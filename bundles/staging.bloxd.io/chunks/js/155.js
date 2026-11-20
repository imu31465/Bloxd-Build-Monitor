export const id = 155;
export const ids = [155];
export const modules = {
  38629: (vv, zv, Pv) => {
    function hv(vv) {
      return !(!vv.lobbyLeaderboardInfo && !vv.lobbyManage)
    }
    Pv.d(zv, {
      d: () => hv
    })
  },
  38613: (vv, zv, Pv) => {
    Pv.d(zv, {
      c: () => ev,
      e: () => gv
    });
    var hv = Pv(26);
    let Sv = !1;

    function ev() {
      return Sv
    }

    function gv(vv) {
      Sv !== vv && (Sv = vv, hv.j.zC("replayViewer|videoExportChanged"))
    }
  },
  38489: (vv, zv, Pv) => {
    Pv.d(zv, {
      b: () => ev
    });
    var hv = Pv(26),
      Sv = Pv(1903);

    function ev(vv) {
      let {
        taskId: zv,
        progress: Pv
      } = vv;
      const hv = Sv.c.get("_tasks");
      null !== hv && void 0 !== hv && hv[zv] && Sv.c.apply({
        _tasks: {
          ...hv,
          [zv]: {
            ...hv[zv],
            progress: Pv
          }
        }
      })
    }
    hv.j.subscribe("clientTaskProgress", (vv => {
      ev(vv)
    }))
  },
  38626: (vv, zv, Pv) => {
    Pv.d(zv, {
      b: () => sv,
      e: () => Cv,
      i: () => av
    });
    var hv = Pv(2682);
    const Sv = 0,
      ev = 2,
      gv = 3,
      pv = 4;
    class dv {
      constructor(vv, zv) {
        this.width = vv, this.GT = zv, this.data = void 0, this.next = 0, this.size = 0, this.data = new Float64Array(vv * zv)
      }
      push(vv) {
        let zv = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        const Pv = this.data.subarray(this.next * this.width, (this.next + 1) * this.width);
        for (let hv = 0; hv < this.width; hv++) Pv[hv] = vv[zv + hv];
        return this.next = (this.next + 1) % this.GT, this.size = Math.min(this.size + 1, this.GT), Pv
      }
      lines() {
        const vv = [],
          zv = (this.next - this.size + this.GT) % this.GT;
        for (let Pv = 0; Pv < this.size; Pv++) {
          const hv = (zv + Pv) % this.GT * this.width;
          vv.push(Array.from(this.data.subarray(hv, hv + this.width)).join(","))
        }
        return vv
      }
    }

    function Nv(vv) {
      return Number.isFinite(vv) ? String(Math.round(10 * vv) / 10) : String(vv)
    }

    function lv(vv) {
      return Number.isFinite(vv) ? vv.toFixed(1) : String(vv)
    }
    class Tv {
      constructor() {
        this.frames = 0, this.looked = 0, this.idle = 0, this.Jq = 0, this.pastLimit = 0, this.lockSkips = 0, this.dC = 0, this.lost = 0, this.dropped = 0, this.longFrames = 0, this.dtMin = 1 / 0, this.dtMax = 0, this.dtSum = 0, this.raw = [0, 0], this.turned = [0, 0], this.peakRate = 0, this.events = 0, this.eventMax = 0, this.bigEvents = 0, this.outliers = 0, this.eventLines = 0, this.suppressed = 0
      }
    }
    class Wv {
      constructor() {
        var vv = this;
        this.tally = new Tv, this.records = new dv(10, 3600), this.events = new dv(4, 12e3), this.event = new Float64Array(4), this.take = null, this.client = "js", this.started = !1, this.record = function(zv) {
          let Pv = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
          const [hv, dv, Tv, Wv, wv, av, sv, Cv, iv, cv] = vv.records.push(zv, Pv), Gv = vv.tally;
          switch (Gv.frames++, sv) {
            case Sv:
              return void Gv.idle++;
            case pv:
              return void Gv.dC++;
            case gv:
              return Gv.lockSkips++, void(0 === Tv && 0 === Wv || vv.outlier(`lock skip dropped raw (${Nv(Tv)}, ${Nv(Wv)}) at ${lv(hv)} ms`))
          }
          Gv.looked++, Number.isFinite(dv) && (Gv.dtMin = Math.min(Gv.dtMin, dv), Gv.dtMax = Math.max(Gv.dtMax, dv), Gv.dtSum += dv, dv > 0 && (Gv.peakRate = Math.max(Gv.peakRate, Math.hypot(wv, av) / dv))), Gv.raw[0] += Tv, Gv.raw[1] += Wv, Gv.turned[0] += wv, Gv.turned[1] += av;
          const mv = Math.abs(Tv) > cv || Math.abs(Wv) > cv,
            jv = `raw (${Nv(Tv)}, ${Nv(Wv)}) over ${lv(dv)} ms, limit ${Nv(cv)}, filter v (${Cv.toFixed(3)}, ${iv.toFixed(3)}) px/ms, at ${lv(hv)} ms`;
          sv === ev ? (Gv.Jq++, vv.outlier(`spike put right: ${jv} -> turned (${Nv(wv)}, ${Nv(av)})`)) : mv ? (Gv.pastLimit++, vv.outlier(`kept past limit: ${jv}`)) : dv > 50 && (Gv.longFrames++, vv.outlier(`long frame: ${jv}, turned in full`))
        }, this.onMouseMove = vv => {
          const zv = this.tally,
            {
              movementX: Pv,
              movementY: hv
            } = vv;
          zv.events++;
          const Sv = Math.max(Math.abs(Pv), Math.abs(hv));
          zv.eventMax = Math.max(zv.eventMax, Sv);
          const ev = null !== document.pointerLockElement,
            gv = this.event;
          gv[0] = vv.timeStamp, gv[1] = Pv, gv[2] = hv, gv[3] = ev ? 1 : 0, this.events.push(gv), Sv >= 200 && (zv.bigEvents++, this.eventOutlier(`big mousemove (${Pv}, ${hv}) at ${lv(vv.timeStamp)} ms, lock ${ev?"Vp":"free"}`))
        }, this.onLockChange = () => {
          const vv = document.pointerLockElement;
          (0, hv.i)("look", `pointer lock ${vv?`gained (${vv.tagName.toLowerCase()})`:"lost"} at ${lv(performance.now())} ms`)
        }, this.onLockError = () => {
          (0, hv.i)("look", `pointer lock request failed at ${lv(performance.now())} ms`)
        }, this.onVisibility = () => {
          (0, hv.i)("look", `page ${document.visibilityState} at ${lv(performance.now())} ms`)
        }, this.flush = () => {
          this.takeRecords();
          const vv = this.tally;
          if (this.tally = new Tv, 0 === vv.events && 0 === vv.raw[0] && 0 === vv.raw[1] && 0 === vv.lockSkips && 0 === vv.Jq && 0 === vv.dropped) return;
          const zv = vv.looked > 0 ? vv.dtSum / vv.looked : NaN,
            Pv = [`${vv.frames} frames (${vv.looked} looked, ${vv.idle} idle${"wasm"===this.client?`, ${vv.dC} carried`:""})`, `dt avg ${lv(zv)} min ${lv(vv.dtMin)} max ${lv(vv.dtMax)}, ${vv.longFrames} long`, `${vv.events} mousemoves (max ${Nv(vv.eventMax)} px, ${vv.bigEvents} big)`, `raw (${Nv(vv.raw[0])}, ${Nv(vv.raw[1])}) turned (${Nv(vv.turned[0])}, ${Nv(vv.turned[1])})`, `peak ${vv.peakRate.toFixed(2)} px/ms`, `put right ${vv.Jq}, past limit ${vv.pastLimit}, lock skips ${vv.lockSkips}`, "lock " + (document.pointerLockElement ? "Vp" : "free")];
          vv.dropped > 0 && Pv.push(`${vv.dropped} doubled spike copies dropped`), vv.lost > 0 && Pv.push(`${vv.lost} records lost`), vv.suppressed > 0 && Pv.push(`${vv.suppressed} outlier lines not shown`), (0, hv.i)("look", `1s: ${Pv.join("; ")}`)
        }, this.dump = () => [`look records (${this.client}): nowMs,dtMs,rawX,rawY,turnedX,turnedY,outcome,vX,vY,limit`, ...this.records.lines(), "mousemove events: timeStamp,movementX,movementY,locked", ...this.events.lines()].join("\n")
      }
      start(vv, zv) {
        this.client = vv, this.take = zv;
        const {
          screen: Pv
        } = window;
        (0, hv.i)("look", `start: ${vv} client, dpr ${window.devicePixelRatio}, screen ${Pv.width}x${Pv.height}, pointer lock ${document.pointerLockElement?"Vp":"free"}`), this.started || (this.started = !0, window.addEventListener("mousemove", this.onMouseMove, {
          capture: !0,
          passive: !0
        }), document.addEventListener("pointerlockchange", this.onLockChange), document.addEventListener("pointerlockerror", this.onLockError), document.addEventListener("visibilitychange", this.onVisibility), setInterval(this.flush, 1e3), (0, hv.f)("look", this.dump))
      }
      outlier(vv) {
        const zv = this.tally;
        zv.outliers >= 20 ? zv.suppressed++ : (zv.outliers++, (0, hv.i)("look", vv))
      }
      eventOutlier(vv) {
        const zv = this.tally;
        zv.eventLines >= 10 ? zv.suppressed++ : (zv.eventLines++, (0, hv.i)("look", vv))
      }
      takeRecords() {
        var vv;
        const zv = null === (vv = this.take) || void 0 === vv ? void 0 : vv.call(this);
        if (zv && zv.length >= 2) {
          this.tally.lost += zv[0], this.tally.dropped += zv[1];
          for (let vv = 2; vv + 10 <= zv.length; vv += 10) this.record(zv, vv)
        }
      }
      droppedCopy() {
        this.tally.dropped++
      }
      endTake() {
        this.takeRecords(), this.take = null
      }
    }
    let wv = null;

    function av(vv) {
      let zv = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
      return wv ??= new Wv, wv.start(vv, zv), wv.record
    }

    function sv() {
      var vv;
      null === (vv = wv) || void 0 === vv || vv.endTake()
    }

    function Cv() {
      var vv;
      null === (vv = wv) || void 0 === vv || vv.droppedCopy()
    }
  },
  38485: (vv, zv, Pv) => {
    Pv.d(zv, {
      e: () => yz,
      f: () => Hz,
      h: () => Mz
    });
    var hv = Pv(3438),
      Sv = Pv(144),
      ev = Pv(185),
      gv = Pv(628),
      pv = Pv(39),
      dv = Pv(2599),
      Nv = Pv(3539),
      lv = Pv(3521),
      Tv = Pv(1209);
    const Wv = new WeakMap;
    class wv {
      constructor(vv, zv) {
        let Pv = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {
          Ldv: !0
        };
        this.callbacks = zv, this.options = Pv, this.jzv = void 0, this.sessionId = void 0, this.pY = [], this.Hdv = !1, this.ea = !1, this.Mdv = void 0, this.hY = 0, this.Fhv = 0, this.ydv = (vv, zv) => {
          if (this.ea) return;
          const Pv = Number(vv);
          this.Hdv ? this.Jdv(Pv, zv) : this.pY.push({
            id: Pv,
            payload: zv
          })
        }, this.dispose = () => {
          this.ea || (this.ea = !0, Wv.delete(this), this.pY.length = 0, this.Mdv())
        }, this.jzv = vv, this.sessionId = vv.sessionId, Wv.set(this, []), this.Mdv = this.Edv()
      }
      odv(vv) {
        this.Mdv(), this.jzv = vv, this.sessionId = vv.sessionId, this.hY = 0, this.Fhv = 0, this.Mdv = this.Edv()
      }
      get XF() {
        return this.Fhv
      }
      Edv() {
        const vv = this.jzv.rG("*", this.ydv);
        return this.options.Ldv && this.jzv.Tm(this.dispose), vv
      }
      Jdv(vv, zv) {
        try {
          (0, Nv.Wb)(vv) && (zv = (0, Nv.b)(vv, lv.Sa.from(zv)));
          const Pv = Wv.get(this)[vv];
          if ("function" !== typeof Pv) {
            if (this.callbacks.bdv) return void this.callbacks.bdv(vv, zv);
            throw new Error(`No onMessage handler registered for message id ${vv}`)
          }
          Pv(zv)
        } catch (Pv) {
          this.callbacks.rdv(`Error in onMessage ${vv} with payload ${JSON.stringify(zv)}`, Pv)
        } finally {
          this.hY++
        }
      }
      Xdv() {
        for (const {
            id: vv,
            payload: zv
          }
          of this.pY) {
          if (this.ea) break;
          this.Jdv(vv, zv)
        }
        this.pY.length = 0
      }
      mzv() {
        return this.ea
      }
      udv() {
        if (this.Hdv || this.ea) throw new Error("Trying to getOnMessageRegistrationHandler after registration finished");
        return {
          rG: (vv, zv) => {
            if (this.Hdv || this.ea) throw new Error("Trying to call onMessage after registration finished");
            this.rG(vv, zv)
          },
          finishRegistration: () => {
            if (this.ea) throw new Error("Cannot finish message registration after disposal");
            this.Hdv = !0, this.Xdv()
          }
        }
      }
      rG(vv, zv) {
        var Pv, hv;
        null === (Pv = (hv = this.callbacks).vNv) || void 0 === Pv || Pv.call(hv);
        const Sv = Wv.get(this);
        for (; vv > Sv.length;) Sv[Sv.length] = null;
        Sv[vv] = zv
      }
      send(vv, zv) {
        this.zNv(), (0, Tv.J)(zv) ? this.jzv.FY(vv, zv) : this.jzv.send(vv, zv)
      }
      zNv() {
        var vv, zv;
        (this.Fhv++, 5 === av++) && (null === (vv = (zv = this.callbacks).vNv) || void 0 === vv || vv.call(zv), av = 0)
      }
      rC() {
        this.dispose(), this.jzv.rC()
      }
      leave() {
        this.dispose(), this.jzv.leave()
      }
    }
    let av = 0;
    var sv = Pv(3453);
    class Cv extends wv {
      constructor(vv) {
        super(vv, {
          vNv: () => {
            (0, pv.m)(!0) && (0, hv.kF)()
          },
          rdv: (vv, zv) => {
            var Pv;
            null === (Pv = (0, dv.g)()) || void 0 === Pv || Pv.Ws(vv, zv)
          }
        }, {
          Ldv: !1
        }), (0, sv.c)(vv)
      }
      lY(vv, zv) {
        return !!(0, sv.i)((0, sv.b)(), this.jzv, vv, zv) && (this.zNv(), !0)
      }
      odv(vv) {
        this.PNv(), super.odv(vv), (0, sv.c)(vv)
      }
      rC() {
        super.rC(), this.PNv()
      }
      PNv() {
        this.jzv.uC.ow.fD = void 0
      }
    }
    var iv = Pv(26),
      cv = Pv(1903),
      Gv = Pv(1692),
      mv = Pv(36003);

    function jv(vv, zv, Pv, hv, Sv) {
      let ev = arguments.length > 5 && void 0 !== arguments[5] && arguments[5];
      if (!vv.Rm.Cvv(vv.sV)) return console.log("Got resync inven but don't have inven component"), void zv.acknowledge(hv);
      ev && console.error("Had to sync inven"), zv.j_(hv, Sv) && Pv.zC("chestToggleFromServer", !1, !0), Pv.zC("syncedInvenFromServer")
    }
    var fv = Pv(38489),
      Fv = Pv(38496),
      Yv = Pv(37569),
      nv = Pv(37330),
      Ov = Pv(626),
      Dv = Pv(37932);

    function Kv(vv, zv, Pv) {
      const hv = function(vv) {
          const zv = new Int32Array(vv.length * Dv.e);
          return vv.forEach(((vv, Pv) => {
            const hv = Pv * Dv.e;
            if (4 === vv.length) {
              const [Pv, Sv, ev, gv] = vv;
              zv.set([Pv, Sv, ev, Pv, Sv, ev, gv], hv)
            } else {
              const [Pv, Sv, ev, gv, pv, dv, Nv] = vv;
              zv.set([Pv, ev, pv, Sv, gv, dv, Nv], hv)
            }
          })), zv
        }(Pv),
        Sv = (zv, Pv, hv, Sv) => {
          vv.setBlockNoMulti(zv, Pv, hv, Sv, !0)
        };
      vv.client.gameRecorder.isCapturing() ? (0, Dv.rb)(hv, (0, Dv.ob)(hv), Sv) : vv.vW.oT.mq(hv, {
        Iq: Sv,
        isHookId: zv => vv.blockChangeHasHooks(zv),
        watched: () => function(vv, zv, Pv) {
          const hv = [],
            Sv = (vv, zv, Pv) => {
              hv.push(vv, zv, Pv)
            },
            ev = new Set;
          for (let gv = 0; gv < Pv.length; gv += Dv.e)
            for (let zv = (0, Ov.Y)(Pv[gv]); zv <= (0, Ov.Y)(Pv[gv + 3]); zv++)
              for (let hv = (0, Ov.Y)(Pv[gv + 1]); hv <= (0, Ov.Y)(Pv[gv + 4]); hv++)
                for (let pv = (0, Ov.Y)(Pv[gv + 2]); pv <= (0, Ov.Y)(Pv[gv + 5]); pv++) {
                  const Pv = `${zv}|${hv}|${pv}`;
                  ev.has(Pv) || (ev.add(Pv), vv.blockDataOwner.forEachDataCell(zv, hv, pv, Sv))
                }
          return zv.forEachCell(Sv), Int32Array.from(hv)
        }(vv, zv, hv)
      }), vv.vW.K9()
    }
    var Vv = Pv(36645),
      Uv = Pv(38502),
      Rv = Pv(38505),
      xv = Pv(1002),
      tv = Pv(1908);
    var qv = Pv(4260);

    function Iv(vv) {
      const zv = vv.oT;
      let Pv = 0,
        Sv = -1,
        gv = -1 / 0,
        pv = null,
        dv = !0;
      const lv = () => {
        if (++Pv % 10 !== 0) return;
        const lv = (0, hv.getLastReceivedPacketId)();
        if (lv <= Sv) return;
        const [Tv, Wv, wv] = vv.Rm.yG(vv.sV), av = ! function(vv) {
          var zv;
          let Pv = null === (zv = vv.Rm.vzv(vv.sV)) || void 0 === zv ? void 0 : zv.Xw;
          if (void 0 === Pv) return !1;
          const hv = new Set;
          for (; void 0 !== Pv && !hv.has(Pv);) {
            var Sv;
            hv.add(Pv);
            const zv = vv.Rm.getState(Pv, "smoothToServerPos"),
              ev = Array.isArray(zv) ? null : null === zv || void 0 === zv ? void 0 : zv.serverPosition;
            if (ev) {
              const zv = vv.Rm.yG(Pv);
              if (Math.abs(zv[0] - ev[0]) > 10 || Math.abs(zv[1] - ev[1]) > 10 || Math.abs(zv[2] - ev[2]) > 10) return !0
            }
            Pv = null === (Sv = vv.Rm.vzv(Pv)) || void 0 === Sv ? void 0 : Sv.Xw
          }
          return !1
        }(vv) && function(vv, zv, Pv, hv) {
          const Sv = ev.f.aa;
          for (let ev = 0; ev < vv.length; ev++) {
            const gv = vv[ev];
            if (!(0, qv.i)(zv, Pv, hv, gv[0] * Sv, gv[1] * Sv, gv[2] * Sv)) return !1
          }
          return !0
        }(zv.bs.ga, Tv, Wv, wv), sv = null === pv || Math.abs(Tv - pv[0]) > 8 || Math.abs(Wv - pv[1]) > 8 || Math.abs(wv - pv[2]) > 8, Cv = !dv || sv || performance.now() - gv >= 1e4;
        dv = av, av && Cv && (Sv = lv, gv = performance.now(), pv = [Tv, Wv, wv], (0, hv.sendColyMessage)(Nv.ig, {
          zl: lv
        }))
      };
      return vv.on("MT", lv), () => {
        vv.off("MT", lv)
      }
    }
    var Qv = Pv(36284),
      Zv = Pv(327),
      Av = Pv.n(Zv),
      Lv = Pv(6192),
      Hv = Pv(37609),
      Mv = Pv(37304),
      yv = Pv(37281),
      Bv = Pv(4279),
      Jv = Pv(37637),
      Ev = Pv(37441),
      ov = Pv(36878),
      bv = Pv(37182),
      rv = Pv(38509),
      kv = Pv(36269),
      Xv = Pv(36271),
      uv = Pv(38511),
      vz = Pv(38515),
      zz = Pv(3407),
      Pz = Pv(1492),
      hz = Pv(2594),
      Sz = Pv(2702),
      ez = Pv(37789),
      gz = Pv(36574),
      pz = Pv(4525),
      dz = Pv(38566),
      Nz = Pv(37626),
      lz = Pv(3999),
      Tz = Pv(36639),
      Wz = Pv(36720),
      wz = Pv(37641),
      az = Pv(38522),
      sz = Pv(38540),
      Cz = Pv(36872);
    class iz {
      constructor(vv, zv, Pv, hv) {
        this.gameNameWithVariation = vv, this.vW = Pv, this.connectionResume = hv, this.stateReplicationHandler = void 0, this.stopChunkReports = () => {}, this.replayResume = null, this.stateReplicationHandler = new sz.e(zv, this.vW)
      }
      setupStateReplicationHandlers() {
        this.stateReplicationHandler.setup(), (0, hv.onGameResetOnce)((() => {
          this.stateReplicationHandler.dispose()
        }))
      }
      odv(vv) {
        this.stateReplicationHandler.dispose(), this.stateReplicationHandler = new sz.e(vv, this.vW), this.stateReplicationHandler.setup()
      }
      clearBlockRules() {
        const vv = this.vW.oT;
        vv.Nzv = new Set, vv.Wzv = new Set, vv.lzv = new Set, vv.wzv = new Set, vv.Tzv = [], vv.szv = [], vv.oR = new Set, vv.nP = [], vv.bR = []
      }
      clearUiRequestsAndQTEs() {
        pz.d.reset(), (0, Fv.b)()
      }
      startChunkReports() {
        const vv = function(vv) {
            let zv = null,
              Pv = -1 / 0,
              Sv = null;
            const ev = () => {
                Sv = null;
                const ev = Math.ceil(vv.AY[0]),
                  gv = Math.ceil(vv.AY[1]);
                zv && zv[0] === ev && zv[1] === gv || (zv = [ev, gv], Pv = performance.now(), (0, hv.sendColyMessage)(Nv.fg, {
                  Il: ev,
                  Ql: gv
                }))
              },
              gv = () => {
                null === Sv && (Sv = setTimeout(ev, Math.max(0, Pv + 250 - performance.now())))
              };
            return ev(), vv.on("addRemoveDistanceChanged", gv), () => {
              vv.off("addRemoveDistanceChanged", gv), null !== Sv && (clearTimeout(Sv), Sv = null)
            }
          }(this.vW.oT),
          zv = Iv(this.vW);
        this.stopChunkReports = () => {
          vv(), zv()
        }
      }
      restartChunkStreaming() {
        (0, bv.m)(this.vW, (0, dv.d)().recentChunkEdits.chunksEditedSince(this.connectionResume.getDroppedAt() - rv.b)), this.startChunkReports()
      }
      setupOnMessageListeners(vv, zv) {
        const Pv = this.vW,
          Sv = this.gameNameWithVariation;
        vv.rG(Nv.ec, (vv => {
          let {
            yh: zv,
            Bh: hv,
            Jh: Sv,
            Eh: ev,
            oh: gv,
            bh: pv,
            rh: dv,
            kh: Nv,
            Xh: lv
          } = vv;
          if (!Pv.Rm.R7(zv, "itemState")) return void(0, Mv.k)(Pv, zv, [gv, pv, dv], hv, {
            amount: Sv,
            attributes: JSON.parse(ev),
            kh: Nv,
            size: lv
          });
          const Tv = Pv.Rm.getState(zv, "itemState");
          Tv.amount = Sv, Tv.kh = Nv, Tv.creationTime = Date.now(), (0, yv.setServerPosition)(Pv.Rm.getState(zv, "smoothToServerPos"), gv, pv, dv)
        })), vv.rG(Nv.ab, (vv => {
          (0, Vv.c)(Pv).setCantPickUp(vv, !0), Pv.Rm.R7(vv, "itemState") && (Pv.Rm.getState(vv, "itemState").kh = !0)
        })), vv.rG(Nv.Gd, (vv => {
          (0, Vv.c)(Pv).setCantPickUp(vv, !1), Pv.Rm.R7(vv, "itemState") && (Pv.Rm.getState(vv, "itemState").kh = !1)
        })), vv.rG(Nv.Hc, (vv => {
          cv.c.applyNewClientOptions(vv)
        })), vv.rG(Nv.Lc, (vv => {
          let {
            eId: zv,
            settings: hv
          } = vv;
          (0, Wz.f)(zv);
          for (const Pv in hv)(0, Wz.b)(zv, Pv, hv[Pv]);
          if ("canSee" in hv && Pv.Rm.R7(zv, "hidingMeshManager")) {
            const vv = Pv.Rm.getState(zv, "hidingMeshManager");
            vv.canSee = (0, wz.e)("canSee", hv.canSee), vv._forceUpdate = !0
          }
        })), vv.rG(Nv.Re, (vv => {
          let {
            ZS: zv,
            AS: Sv,
            LS: ev,
            HS: gv
          } = vv;
          const pv = [Sv, ev, gv];
          Pv.Rm.setPosition(Pv.sV, pv), (0, hv.sendColyMessage)(Nv.Lg, {
            ip: zv,
            cp: Bv.f
          }), iv.j.zC("localPlayerTeleported", {
            pos: pv,
            isCorrection: !1
          })
        })), vv.rG(Nv.Vc, (vv => {
          let {
            dh: zv,
            Nh: Pv,
            Th: hv,
            Wh: Sv
          } = vv;
          this.stateReplicationHandler.setUpIfQueued(zv);
          const ev = [Pv, hv, Sv];
          iv.j.zC(`otherPlayerTeleported|${zv}`, {
            pos: ev
          })
        })), vv.rG(Nv.jd, (vv => {
          let {
            az: zv,
            sz: Sv,
            Cz: ev,
            iz: gv,
            Gz: pv,
            mz: dv,
            jz: lv,
            Fz: Tv,
            fz: Wv,
            Oz: wv
          } = vv;
          const av = [Sv, ev, gv];
          Pv.Rm.setPosition(Pv.sV, av);
          const sv = Pv.Rm.I3(Pv.sV),
            Cv = Pv.Rm.vx(Pv.sV);
          Av().set(Cv.vR, 0, 0, 0), Av().set(Cv.gR, 0, 0, 0), Av().set(Cv.pC, pv, dv, lv), Cv.pR(), sv._flying = null !== wv, wv ? (sv.flyAccel.Dz = wv.Dz, sv.flyAccel.Kz = wv.Kz) : sv.flyAccel.reset(), Tv && sv.movementType === Lv.p.GLIDING && (sv.Yz = Tv.Yz, Av().copy(sv.nz, Tv.nz)), (0, hv.sendColyMessage)(Nv.Lg, {
            ip: zv,
            cp: Bv.f
          }), iv.j.zC("localPlayerTeleported", {
            pos: av,
            isCorrection: !0
          })
        }));

        function ev() {
          return Pv.Rm.ivv(Pv.sV)
        }
        vv.rG(Nv.nb, (vv => {
          let {
            chatMsgId: zv,
            content: Pv,
            chatterEId: hv
          } = vv;
          iv.j.zC("chat", {
            serverChatMsgId: zv,
            content: Pv,
            chatterEId: hv
          }, !0)
        })), vv.rG(Nv.cd, (vv => {
          hz.d.onReceiveColyseusPing(vv)
        })), vv.rG(Nv.oe, (vv => {
          let {
            key: zv,
            value: Pv
          } = vv;
          (0, Gv.setCookie)(Sv, zv, Pv)
        })), vv.rG(Nv.re, (vv => {
          iv.j.zC("setDiscordReportKey", vv)
        })), (0, hv.onGameResetOnce)((() => {
          this.stopChunkReports()
        })), vv.rG(Nv.Yb, (zv => {
          const {
            LP: Sv,
            HP: ev
          } = zv;
          if ((0, hv.setAdjustment)(ev), this.connectionResume.onInitialInfo(zv.MP, zv.yP), hv.offlineInputReplay.uF(zv.BP), this.connectionResume.isResuming()) {
            console.log("Resumed the connection as eId", Sv);
            try {
              null === zv.JP && (0, dv.d)().client.inventoryPrediction.dropPending(), this.stopChunkReports(), this.clearBlockRules(), cv.c.apply({
                shopInfo: null,
                _shopVersion: tv.d
              });
              const hv = Pv.Rm.cvv(Pv.sV);
              hv.qh && (hv.chestClosed(), iv.j.zC("chestToggleFromServer", !1, !0)), this.clearUiRequestsAndQTEs(), iv.j.zC("initInfoReceived", vv)
            } finally {
              const vv = null === zv.JP ? null : {
                sync: null,
                endSeq: null
              };
              this.replayResume = vv, this.connectionResume.onResumeInitialInfo(zv.JP, (() => {
                vv.endSeq = (0, dv.d)().client.inventoryPrediction.lastActionSeq
              })), null === vv && this.restartChunkStreaming()
            }
          } else console.log("Local client is eId", Sv), iv.j.zC("loadingScreenState", "loadingPage:loadingWorld"), Pv.W8 = Sv, Pv.Rm.R7(Pv.sV, Pv.Rm.names.entityName) && Pv.Rm.bK(Pv.sV, Pv.Rm.names.entityName), (0, dv.d)().setEntityName(Pv.W8, (0, dv.d)().getRawEntityName(Pv.sV)), Pv.wV[Pv.W8] = {}, Pv.Rm.IK(Pv.sV, Pv.Rm.names.entityName), iv.j.zC("initInfoReceived", vv), this.startChunkReports(), gv.client.onServerConnectionFinalised()
        })), vv.rG(Nv.Xd, (() => {
          this.connectionResume.isResuming() ? this.connectionResume.onResumed((() => {
            const vv = this.replayResume;
            if (this.replayResume = null, !vv) return;
            this.restartChunkStreaming();
            const {
              inventoryPrediction: zv
            } = (0, dv.d)().client, {
              sync: Sv
            } = vv, ev = new Set(hv.offlineInputReplay.takeDroppedActions());
            if (Sv) {
              var gv;
              const hv = null !== (gv = vv.endSeq) && void 0 !== gv ? gv : zv.lastActionSeq;
              zv.forget((vv => vv > Sv.Lh && vv <= hv || ev.has(vv))), jv(Pv, zv, iv.j, Sv.Lh, Sv.load)
            } else zv.dropPending(), zv.askForSnapshot()
          })) : console.warn("ResumeComplete arrived without a resume")
        })), vv.rG(Nv.Te, (vv => {
          iv.j.zC("TopRightHelper", vv, !0)
        })), vv.rG(Nv.pd, (vv => {
          let {
            type: zv,
            location1: Pv,
            location2: hv,
            location3: Sv,
            score: ev
          } = vv;
          (0, Sz.z)({
            type: zv,
            location1: Pv,
            location2: hv,
            location3: Sv,
            score: ev
          })
        })), vv.rG(Nv.Ud, (vv => {
          let {
            type: zv,
            resourceType: Pv,
            amount: hv,
            category: Sv,
            itemName: ev
          } = vv;
          (0, Sz.D)({
            type: zv,
            resourceType: Pv,
            amount: hv,
            category: Sv,
            itemName: ev
          })
        })), vv.rG(Nv.Q, (vv => {
          Pv.oT.Nzv.add(vv), Pv.oT.Wzv.delete(vv)
        })), vv.rG(Nv.V, (vv => {
          Pv.oT.Wzv.add(vv), Pv.oT.Nzv.delete(vv)
        })), vv.rG(Nv.Id, (vv => {
          Pv.oT.Wzv.delete(vv), Pv.oT.Nzv.delete(vv)
        })), vv.rG(Nv.T, (vv => {
          Pv.oT.lzv.add(vv), Pv.oT.wzv.delete(vv)
        })), vv.rG(Nv.Z, (vv => {
          Pv.oT.wzv.add(vv), Pv.oT.lzv.delete(vv)
        })), vv.rG(Nv.Kd, (vv => {
          Pv.oT.wzv.delete(vv), Pv.oT.lzv.delete(vv)
        })), vv.rG(Nv.S, (vv => {
          (0, Tv.ib)(vv, Pv.oT.szv), (0, Tv.ib)(vv, Pv.oT.Tzv), Pv.oT.Tzv.push(vv)
        })), vv.rG(Nv.Y, (vv => {
          (0, Tv.ib)(vv, Pv.oT.Tzv), (0, Tv.ib)(vv, Pv.oT.szv), Pv.oT.szv.push(vv)
        })), vv.rG(Nv.Jd, (vv => {
          (0, Tv.ib)(vv, Pv.oT.Tzv), (0, Tv.ib)(vv, Pv.oT.szv)
        })), vv.rG(Nv.jf, (vv => {
          let {
            Vh: zv,
            Uh: hv
          } = vv;
          hv ? Pv.oT.oR.delete(zv) : Pv.oT.oR.add(zv)
        })), vv.rG(Nv.ff, (vv => {
          let {
            nP: zv,
            OP: hv
          } = vv;
          gv.updateWalkThroughRect(Pv.sV, zv, hv)
        })), (0, hv.onGameResetOnce)((() => {
          this.clearBlockRules()
        })), vv.rG(Nv.Oe, (vv => {
          (0, fv.b)(vv)
        })), vv.rG(Nv.Ub, (vv => {
          Yv.d.applyServerUpdate(vv)
        })), vv.rG(Nv.eb, (vv => {
          gv.applyServerBlocks((() => {
            ! function(vv, zv) {
              for (const {
                  rP: Pv,
                  kP: hv
                }
                of zv) {
                const zv = nv.c[hv];
                if (zv) {
                  const {
                    compX: hv,
                    compY: Sv,
                    compZ: ev,
                    mainMultiblock: gv
                  } = zv;
                  vv.eD(Pv[0] - hv, Pv[1] - Sv, Pv[2] - ev, gv)
                }
              }
              for (const {
                  rP: Pv,
                  kP: hv,
                  XP: Sv
                }
                of zv) vv.setBlockNoMulti(Pv[0], Pv[1], Pv[2], hv, !0), vv.blockDataOwner.setBlockData(Pv[0], Pv[1], Pv[2], null === Sv ? void 0 : JSON.parse(Sv)), vv.blockAdded(Pv[0], Pv[1], Pv[2], hv)
            }(gv, vv)
          })), iv.j.zC("changeBlockFail", vv), gv.client.triggerGameCallback("onChangeBlockFail", vv), iv.j.zC("EditBoard", {
            pos: null
          }), iv.j.zC("EditCodeBlock", {
            pos: null,
            canChangePos: null
          })
        })), vv.rG(Nv._c, (vv => {
          let {
            pickUpItems: zv,
            pickUpAckSeq: Pv
          } = vv;
          for (const {
              name: hv,
              amount: Sv,
              attributes: gv
            }
            of zv) ev().pickUpItem({
            name: hv,
            amount: Sv,
            typeObj: Mv.w[hv],
            attributes: gv
          });
          (0, dv.d)().client.inventoryPrediction.serverChangeApplied(Pv)
        })), vv.rG(Nv.ue, (vv => {
          let {
            index: zv,
            name: hv,
            amount: Sv,
            attributes: ev,
            setSlotAckSeq: gv
          } = vv;
          const pv = Pv.Rm.cvv(Pv.sV);
          (zv < pv.playerInventory.numSlots || pv.qh || pv.inCreative) && pv.setItemSlot(zv, hv, Sv, ev), (0, dv.d)().client.inventoryPrediction.serverChangeApplied(gv)
        })), vv.rG(Nv.Ke, (vv => {
          let {
            Rh: zv,
            Ah: hv,
            Lh: Sv
          } = vv;
          const {
            inventoryPrediction: ev
          } = (0, dv.d)().client, gv = () => {
            Pv.Rm.cvv(Pv.sV).loadFromString(zv)
          };
          this.replayResume && (this.replayResume.sync = {
            Lh: Sv,
            load: gv
          }), jv(Pv, ev, iv.j, Sv, gv, hv)
        })), vv.rG(Nv.bc, (vv => {
          (0, dv.d)().client.inventoryPrediction.acknowledge(vv)
        })), vv.rG(Nv.x, (vv => {
          let {
            IP: zv,
            QP: Pv,
            ZP: hv,
            AP: Sv
          } = vv;
          (0, dv.d)().client.itemDropPrediction.onActionItemDrops(zv, Pv, hv, Sv)
        })), vv.rG(Nv.sb, (vv => {
          ev().clearInventory(), (0, dv.d)().client.inventoryPrediction.serverChangeApplied(vv)
        })), vv.rG(Nv.qc, (vv => {
          let {
            leaveEventType: zv,
            category: Pv,
            subCategory: hv,
            value: Sv
          } = vv;
          (0, Sz.M)({
            leaveEventType: zv,
            category: Pv,
            subCategory: hv,
            value: Sv
          })
        })), vv.rG(Nv.Bb, (vv => {
          let {
            cat1: zv,
            cat2: Pv,
            cat3: hv,
            value: Sv
          } = vv;
          (0, Sz.t)({
            cat1: zv,
            cat2: Pv,
            cat3: hv,
            value: Sv
          })
        }));
        const gv = (0, dv.d)();
        vv.rG(Nv.xb, (vv => {
          gv.applyServerBlocks((() => {
            Kv(gv, Yv.d, vv)
          }))
        })), vv.rG(Nv.ve, (vv => {
          iv.j.zC("setSelectedInventorySlotI", vv, !0)
        })), vv.rG(Nv.nc, (vv => {
          let {
            category: zv,
            timeframe: Pv,
            data: hv
          } = vv;
          iv.j.zC("leaderboardResponse", {
            category: zv,
            timeframe: Pv,
            data: hv
          })
        })), vv.rG(Nv.M, (vv => {
          let {
            xz: zv,
            tz: Pv
          } = vv;
          this.stateReplicationHandler.setUpIfQueued(zv), zv = (0, Qv.b)(zv), (0, dv.d)().client.gameRecorder.recordBulletShot(zv, Pv), iv.j.zC(`bulletShot|${zv}`, {
            bulletDirections: Pv
          })
        })), vv.rG(Nv.Vb, (vv => {
          let {
            Je: zv,
            Ee: Pv
          } = vv;
          iv.j.zC("damagedByOtherPlayer", {
            Je: zv,
            direction: Pv
          }, !0)
        })), vv.rG(Nv.hd, (vv => {
          iv.j.zC("playerKilled", vv, !0), (0, dv.d)().client.gameRecorder.recordPlayerKilled(vv.deadEId, vv.killerEId, vv.withItem, vv.killstreak)
        })), vv.rG(Nv.Fb, (vv => {
          iv.j.zC("customKillfeed", vv, !0), (0, dv.d)().client.gameRecorder.recordCustomKillfeed(vv.killer, vv.victim, vv.withItem)
        })), vv.rG(Nv.td, (vv => {
          let {
            xS: zv,
            tS: hv
          } = vv;
          this.stateReplicationHandler.setUpIfQueued(zv);
          const Sv = Pv.Rm.Avv(zv);
          null !== Sv && void 0 !== Sv && Sv.isGun() && Sv.reload(Date.now(), hv)
        })), vv.rG(Nv.Ie, (() => {
          iv.j.zC("showShopTutorial", null, !0)
        })), vv.rG(Nv.md, (vv => {
          iv.j.zC("progressBarUpdate", vv, !0)
        })), vv.rG(Nv.ac, (vv => {
          iv.j.zC("middleScreenBarInitiate", {
            duration: vv.Rv,
            xv: vv.xv,
            horizBarRemOffset: vv.tv
          }, !0)
        })), vv.rG(Nv.Bd, (() => {
          iv.j.zC("middleScreenBarRemove", !0)
        })), vv.rG(Nv.ae, (vv => {
          let {
            WP: zv,
            nv: hv
          } = vv;
          const Sv = hv ? (0, Nz.f)(Pv, hv) : void 0;
          iv.j.zC("sendHitmarker", {
            WP: zv,
            screenPos: Sv
          }, !0)
        })), vv.rG(Nv.qe, (vv => {
          let {
            id: zv,
            position: Pv,
            style: hv,
            Tv: Sv,
            sv: ev
          } = vv;
          iv.j.zC("setDirectionArrow", {
            id: zv,
            position: Pv,
            style: hv,
            text: (0, Nv.p)(Sv),
            sv: ev
          }, !0)
        })), vv.rG(Nv.rb, (vv => {
          let {
            id: zv
          } = vv;
          iv.j.zC("clearDirectionArrow", {
            id: zv
          }, !0)
        })), vv.rG(Nv.A, (vv => {
          let {
            lS: zv,
            WS: hv,
            animationScript: Sv,
            wS: ev,
            aS: gv,
            sS: pv,
            CS: Nv
          } = vv;
          zv = (0, Qv.b)(zv);
          const lv = null === Sv && null !== pv ? (0, Uv.h)(pv, Nv) : Sv;
          (0, dv.d)().client.gameRecorder.recordAnimateEntity(zv, hv, lv, ev, gv), (0, Vv.c)(Pv).animations.animateEntity(zv, hv, Sv, ev, gv, pv, Nv), null !== Sv || zv === Pv.sV && hv === Tz.f.Emote && (0, dv.d)().client.cameraController.endTemporaryThirdPerson()
        })), vv.rG(Nv.Ye, (vv => {
          let {
            gv: zv,
            pv: Pv
          } = vv;
          if (gv.aZ(zv[0], zv[1], zv[2])) {
            const vv = (0, dv.d)().nG(zv[0], zv[1], zv[2]);
            (0, dv.d)().updateMailboxContents(zv[0], zv[1], zv[2], vv, Pv)
          }
        })), vv.rG(Nv.pb, (vv => {
          let {
            uh: zv,
            vS: hv,
            zS: Sv,
            PS: ev,
            hS: gv,
            SS: pv,
            eS: Nv,
            gS: lv
          } = vv;
          const Tv = Pv.Rm.cvv(Pv.sV);
          if (pv) {
            const {
              xh: vv,
              Lh: zv
            } = lv;
            return (0, dv.d)().client.inventoryPrediction.j_(zv, (() => {
              Tv.chestRefreshed(hv, Sv, ev, Nv, vv)
            })) && iv.j.zC("chestToggleFromServer", !1, !0), void iv.j.zC("chestRefreshedFromServer")
          }(zv || Tv.qh) && (zv ? (Tv.chestOpened(hv, Sv, ev, gv, Nv), null !== gv && (0, dv.d)().client.ironChestPasskeyCache.onChestOpened(ev, gv)) : Tv.chestClosed(), iv.j.zC("chestToggleFromServer", zv, !0))
        })), vv.rG(Nv.Gb, (vv => {
          let {
            craftingRecipeItemName: zv,
            recipesForItem: hv
          } = vv;
          zv ? gv.craftingManager.editRecipesForPlayer(Pv.sV, zv, hv) : gv.craftingManager.resetAllPlayerRecipes(Pv.sV), iv.j.zC("craftingRecipesEdited", {
            itemName: zv,
            recipesForItem: hv
          })
        })), vv.rG(Nv.ze, (vv => {
          let {
            vehicleEId: zv,
            overrides: Pv
          } = vv;
          (0, dv.d)().applyRiddenVehicleSettingOverrides(zv, Pv)
        })), vv.rG(Nv.bf, (vv => {
          let {
            qS: zv,
            IS: hv,
            QS: Sv
          } = vv;
          const ev = Pv.Rm.I3(Pv.sV).physicsState.type === Lv.s.SLEEPING && zv === Lv.s.DEFAULT;
          (0, dv.d)().updatePositionAndPhysics(Pv.sV, {
            type: zv,
            tier: hv
          }, !0, Sv), ev && (0, dv.d)().updateHeldVehicleStatus()
        })), vv.rG(Nv.ib, (vv => {
          let {
            Hh: zv,
            Mh: hv
          } = vv;
          Pv.Rm.svv(Pv.sV).setPose(zv, hv)
        })), vv.rG(Nv.$d, (vv => {
          (0, az.c)(vv)
        })), vv.rG(Nv.gd, (vv => {
          for (const zv of vv)(0, Jv.A)(zv);
          iv.j.zC("playerCosmeticsUpdated", vv, !0)
        })), vv.rG(Nv.G, (vv => {
          for (const zv of vv)(0, gz.g)(Pv, zv)
        })), vv.rG(Nv.vc, (vv => {
          let {
            fv: zv,
            Fv: hv,
            Ov: Sv,
            Dv: ev,
            Kv: pv,
            Vv: dv,
            Uv: Nv
          } = vv;
          this.stateReplicationHandler.setUpIfQueued(zv), zv = (0, Qv.b)(zv);
          const lv = Pv.Rm.Rvv(zv);
          if (lv && (lv.lastHurtTime = performance.now()), (0, Hv.playRigHurt)(Pv, zv, dv), iv.j.zC("lifeformHurt", {
              eId: zv,
              Uv: Nv
            }), hv) {
            const vv = (0, Nz.f)(Pv, hv.nv);
            iv.j.zC("yourAttackHit", {
              WP: ev,
              screenPos: vv,
              hitSelf: zv === Pv.sV
            })
          }
          zv === Pv.sV && (gv.shakePlayerCamera(zv, pv / 40, 200), iv.j.zC("closeShopOnDamaged", null), iv.j.zC("damagedByOtherPlayer", {
            Je: null,
            direction: dv,
            Kv: pv
          }, !0));
          const Tv = Pv.Rm.yG(zv);
          if (Tv && (Sv || ev)) {
            const vv = [Tv[0], Tv[1] + 1, Tv[2]];
            Sv && (0, Ev.i)(Pv, Ev.w, vv, 15), ev && (0, Ev.i)(Pv, Ev.o, vv, 10)
          }
        })), vv.rG(Nv.rc, (vv => {
          let {
            Vz: zv,
            Uz: hv,
            Rz: Sv
          } = vv;
          (0, Vv.c)(Pv).setHealthFrac((0, Qv.b)(zv), Sv), iv.j.zC("lifeformHealthChanged", {
            eId: (0, Qv.b)(zv),
            Uz: hv,
            Rz: Sv
          })
        })), vv.rG(Nv.H, (vv => {
          let {
            Nv: zv,
            lv: hv
          } = vv;
          (0, dv.d)().playerAttacked(Pv.sV, zv, hv)
        })), vv.rG(Nv.kc, (vv => {
          (0, dv.d)().client.leaveGameUnwanted({
            reason: vv,
            requiresRefresh: !1,
            canReconnect: !1,
            automaticallyReconnect: !1
          }), (0, Pz.navigatePreserveSearch)("/")
        })), vv.rG(Nv.Ad, (vv => {
          let {
            MS: zv,
            yS: Pv,
            BS: hv
          } = vv;
          ev().removeItemName(zv, Pv), (0, dv.d)().client.inventoryPrediction.serverChangeApplied(hv)
        })), vv.rG(Nv.ie, (vv => {
          const {
            fp: zv,
            kvv: hv
          } = (0, ov.f)([vv[0], vv[1], vv[2]]);
          Cz.c.setLookDirection(Pv, zv, hv), (0, bv.s)(zv, hv);
          const Sv = Pv.Rm.svv(Pv.sV);
          Sv && (Sv.heading = zv)
        })), vv.rG(Nv.ke, (vv => {
          gv.client.cameraController.setCameraZoom(vv)
        })), vv.rG(Nv.Ge, (vv => {
          let {
            Me: zv,
            ye: hv
          } = vv;
          gv.shakePlayerCamera(Pv.sV, zv, hv)
        })), vv.rG(Nv.yb, (vv => {
          (0, zz.onCosmeticPackGranted)(vv)
        })), vv.rG(Nv.de, (vv => {
          iv.j.zC("serverUpdating", Date.now() + vv, !0)
        })), vv.rG(Nv.Dc, Rv.c), vv.rG(Nv.Rc, (vv => {
          let {
            id: zv,
            qz: Pv
          } = vv;
          const {
            type: Sv,
            params: ev
          } = (0, dz.f)(Pv), gv = {
            ...ev
          };
          for (const hv of dz.c) hv in gv && gv[hv] && (gv[hv] = (0, Nv.p)(gv[hv]));
          pz.d.queueQTE(zv, Sv, gv).getResult().then((vv => {
            "boolean" === typeof vv && (0, hv.sendColyMessage)(Nv.ci, {
              qteId: zv,
              qteResponse: vv
            })
          }))
        })), vv.rG(Nv.Ed, (vv => {
          pz.d.cancelQTE(vv)
        })), (0, hv.onGameResetOnce)((() => {
          pz.d.reset()
        })), vv.rG(Nv.Tc, (vv => {
          let {
            id: zv,
            clientParameters: Pv
          } = vv;
          (0, Fv.d)(zv, Pv)
        })), vv.rG(Nv.Fd, (vv => {
          (0, Fv.g)(vv)
        })), vv.rG(Nv.Xe, (vv => {
          let {
            text: zv,
            id: Pv
          } = vv;
          (0, Fv.k)(Pv, zv, (vv => {
            (0, hv.sendColyMessage)(Nv.Bj, {
              Al: Pv,
              Ll: vv,
              Hl: 5
            })
          }))
        })), vv.rG(Nv.Ib, (vv => {
          let {
            Cv: zv,
            iv: Pv,
            cv: hv,
            Gv: Sv,
            mv: ev,
            jv: gv
          } = vv;
          zv = (0, Qv.b)(zv), (0, dv.d)().client.updateEffect(zv, Pv, {
            displayName: hv,
            icon: Sv,
            duration: ev,
            level: gv
          })
        })), vv.rG(Nv.ud, (vv => {
          let {
            Cv: zv,
            iv: Pv
          } = vv;
          zv = (0, Qv.b)(zv), (0, dv.d)().client.removeEffect(zv, Pv)
        })), vv.rG(Nv.ic, (vv => {
          Pv.Rm.svv(Pv.sV).jumpMultiplier.setMultiplierType("jumpEffectAmount", vv)
        })), vv.rG(Nv.We, (vv => {
          iv.j.zC("ttbEffectMultiplier", vv)
        })), (0, hv.onGameResetOnce)((() => {
          Pv.Rm.svv(Pv.sV).jumpMultiplier.setMultiplierType("jumpEffectAmount", 1)
        })), vv.rG(Nv.Mc, (vv => {
          (0, Ev.k)(Pv, (0, Tv.v)(vv))
        })), vv.rG(Nv.Qc, (vv => {
          lz.g[vv.He] ? (0, Ev.k)(Pv, {
            ...lz.g[vv.He],
            pos1: vv.pos1,
            pos2: vv.pos2
          }) : console.error(`Unknown preset id: ${vv.He}`)
        })), vv.rG(Nv.ed, (vv => {
          var zv, Pv;
          let {
            KP: hv,
            VP: Sv,
            UP: ev,
            RP: gv
          } = vv, {
            tP: pv,
            qP: Nv
          } = null !== gv && void 0 !== gv ? gv : {};
          const {
            xP: lv
          } = null !== gv && void 0 !== gv ? gv : {};
          pv = null !== (zv = pv) && void 0 !== zv ? zv : void 0, Nv = null !== (Pv = Nv) && void 0 !== Pv ? Pv : void 0, "string" === typeof lv && this.stateReplicationHandler.setUpIfQueued(lv), (0, dv.d)().client.gameRecorder.recordPlaySound(hv, Sv, ev, gv), kv.c.play((0, Xv.e)(hv), Sv, lv, pv, Nv).rate(ev)
        })), vv.rG(Nv.ee, (vv => {
          let {
            pos: zv,
            data: Pv
          } = vv;
          gv.blockDataOwner.setBlockData(zv[0], zv[1], zv[2], Pv), gv.blockAdded(zv[0], zv[1], zv[2], gv.nG(zv[0], zv[1], zv[2]))
        })), vv.rG(Nv.Yc, (vv => {
          let {
            info: zv
          } = vv;
          iv.j.zC("overShopInfo", zv, !0)
        })), vv.rG(Nv.Pb, (vv => {
          let {
            gz: hv,
            pz: Sv
          } = vv;
          zv.openShop(Pv.sV, hv, Sv)
        })), vv.rG(Nv.C, (vv => {
          Pv.Rm.vx(Pv.sV).applyImpulse(vv)
        })), vv.rG(Nv.De, (vv => {
          const zv = Pv.Rm.vx(Pv.sV);
          Av().set(zv.vR, 0, 0, 0), Av().set(zv.gR, 0, 0, 0), Av().copy(zv.pC, vv), zv.pR()
        })), vv.rG(Nv.yc, (vv => {
          console.error(`[logErrorToConsole]: ${vv}`)
        })), vv.rG(Nv.Nb, (vv => {
          let {
            wP: zv,
            aP: Pv,
            sP: hv
          } = vv;
          iv.j.zC("flyingMiddleMessage", {
            content: (0, Nv.p)(zv),
            aP: Pv,
            sP: hv
          }, !0)
        })), vv.rG(Nv.nf, (vv => {
          const zv = vv === xv.g ? null : {
            message: `Currently loaded as variation: ${vv}`,
            type: "Warning"
          };
          iv.j.zC("showPermanentBottomMessage", zv, !0)
        })), vv.rG(Nv.Qb, (vv => {
          let {
            messageType: zv,
            data: Pv
          } = vv;
          (0, uv.e)(zv) ? (0, uv.d)(zv, Pv) : ("freeCamPerms" === zv && gv.client.freeCameraController.setPerms(Pv.key, Pv.value), gv.client.triggerGameCallback("onReceivedMessageFromServer", zv, Pv))
        })), vv.rG(Nv.jb, (() => {
          const vv = Pv.Rm.Avv(Pv.sV);
          null !== vv && void 0 !== vv && vv.isChargeable() && vv.finishCharging(!1, Date.now())
        })), vv.rG(Nv.yd, (vv => {
          let {
            DP: zv
          } = vv;
          gv.craftingManager.removeRecipes(Pv.sV, zv), iv.j.zC("craftingRecipesEdited", {
            itemName: zv,
            recipesForItem: []
          })
        })), vv.rG(Nv.af, (vv => {
          for (const zv in vv) {
            const Pv = vv[zv];
            for (const vv in Pv) gv.client.meshCreator.handleParticleSystemUpdate(zv, vv, Pv[vv])
          }
        })), (0, hv.onGameResetOnce)((() => {
          (0, ez.setFloatingYValue)(Pv.Rm.getState(Pv.sV, "physics"), Pv.Rm.rA(Pv.sV), null)
        })), vv.rG(Nv.Lb, (vv => {
          let {
            VS: zv,
            US: hv,
            RS: Sv
          } = vv;
          const ev = (0, Qv.b)(zv);
          if (ev === Pv.sV) {
            const vv = Pv.Rm.rA(Pv.sV).position;
            Sv ??= Math.floor(vv[1]) - 1, (0, ez.setFloatingYValue)(Pv.Rm.getState(Pv.sV, "physics"), Pv.Rm.rA(Pv.sV), hv ? Sv : null)
          }(0, Vv.c)(Pv).setFloating(ev, hv, Sv);
          const gv = Pv.Rm.getState(ev, "floating");
          gv && (gv.isFloating = hv, gv.RS = hv ? Sv : null)
        })), vv.rG(Nv.vb, vz.h)
      }
    }
    window.addEventListener("beforeunload", (() => {}));
    var cz = Pv(38573),
      Gz = Pv(38579),
      mz = Pv(650),
      jz = Pv(2715);
    class fz {
      constructor(vv, zv, Pv, hv) {
        this.msgHandler = Pv, this.listener = hv, this.session = void 0, this.attachedRoom = null, this.detachRoomListeners = null, this.suspended = !1, this.droppedAt = 0, this.session = new cz.c({
          reconnect: vv,
          isLive: () => hv.isLive(),
          onReconnected: vv => {
            this.resumeOnRoom(vv)
          },
          onGaveUp: (vv, zv) => {
            hv.onGaveUp(vv, zv)
          },
          freeze: zv,
          releaseSeat: zv => {
            vv(zv).then((vv => {
              vv.leave(!0)
            }), (vv => {
              console.warn("Couldn't release the held seat of a game left while reconnecting", vv)
            }))
          }
        })
      }
      onInitialInfo(vv, zv) {
        this.session.onInitialInfo(vv, zv)
      }
      isResuming() {
        return this.session.isResuming()
      }
      getDroppedAt() {
        return this.droppedAt
      }
      onResumeInitialInfo(vv, zv) {
        if (this.session.onResuming(), null === vv) {
          try {
            (0, dv.d)().client.itemDropPrediction.reset()
          } catch (Pv) {
            console.error("Error dropping the item drop predictions on resuming", Pv)
          }
          return hv.offlineInputReplay.discard(), void this.setSuspended(!1)
        }(0, dv.d)().client.itemDropPrediction.onResumeReplayOffered(), hv.offlineInputReplay.replayFrom(vv.oP, zv)
      }
      onResumed(vv) {
        this.setSuspended(!1), (0, hv.resendBeacons)();
        try {
          vv()
        } catch (zv) {
          console.error("Error completing the resume", zv)
        } finally {
          this.session.onResumed()
        }
      }
      attachRoom(vv) {
        const zv = (0, mz.h)((() => vv.connection.isOpen));
        vv.Tm(zv);
        const Pv = new Gz.e((() => {
          this.session.canHoldSeat() && this.listener.isLive() && (console.warn("The game server went silent, reconnecting"), this.onConnectionDropped(vv, "silent"), vv.leave(!1))
        }));
        vv.onStateChange((() => {
          Pv.heard()
        }));
        const hv = zv => {
          zv.persisted || vv.leave(!0)
        };
        window.addEventListener("pagehide", hv), vv.Tm(((zv, Pv) => {
          if (vv === this.attachedRoom && this.listener.isLive()) return (0, ev.j)(zv) && this.session.canHoldSeat() ? (console.warn(`Connection to the game server dropped with code ${zv}, reconnecting`), this.listener.onDropped(zv, Pv), void this.onConnectionDropped(vv, String(zv))) : void this.listener.onRoomLeft(zv, Pv)
        })), this.attachedRoom = vv, this.detachRoomListeners = () => {
          zv(), Pv.dispose(), window.removeEventListener("pagehide", hv)
        }
      }
      dispose() {
        this.detachRoom(), this.session.leave(), this.setSuspended(!1)
      }
      setSuspended(vv) {
        vv !== this.suspended && (this.suspended = vv, (0, hv.setConnectionSuspended)(vv), (0, dv.d)().client.itemDropPrediction.setSuspended(vv))
      }
      detachRoom() {
        var vv;
        null === (vv = this.detachRoomListeners) || void 0 === vv || vv.call(this), this.detachRoomListeners = null, this.attachedRoom = null
      }
      onConnectionDropped(vv, zv) {
        (0, jz.e)("disconnect", "Left room", zv), this.isResuming() || (this.droppedAt = Date.now()), this.detachRoom(), hv.offlineInputReplay.onConnectionLost(), this.setSuspended(!0), this.session.onConnectionLost(vv.reconnectionToken)
      }
      resumeOnRoom(vv) {
        if (!this.listener.isLive()) return console.warn("Left the game while reconnecting, leaving the resumed room"), vv.leave(!0), void this.dispose();
        console.log("Reconnected to the game server, waiting for the game to resume"), (0, az.m)(), hv.offlineInputReplay.onConnectionReplaced(), this.msgHandler.odv(vv), this.listener.onReconnected(vv), this.attachRoom(vv)
      }
    }
    var Fz = Pv(3218),
      Yz = Pv(3224),
      nz = Pv(1306),
      Oz = Pv(1285),
      Dz = Pv(4444),
      Kz = Pv(2934),
      Vz = Pv(1056),
      Uz = Pv(37215),
      Rz = Pv(38587),
      xz = Pv(8572),
      tz = Pv(38596),
      qz = Pv(1779),
      Iz = Pv(38604),
      Qz = Pv(1684),
      Zz = Pv(2607);

    function Az(vv) {
      var zv, Pv;
      if ("object" !== typeof vv || null === vv) return {
        errType: typeof vv
      };
      const hv = vv;
      return {
        errType: null !== (zv = null === (Pv = vv.constructor) || void 0 === Pv ? void 0 : Pv.name) && void 0 !== zv ? zv : "",
        errName: "string" === typeof hv.name ? hv.name : "",
        eventType: "string" === typeof hv.type ? hv.type : "",
        errStack: "string" === typeof hv.stack ? hv.stack.split("\n").slice(1).join(" | ") : ""
      }
    }

    function Lz(vv) {
      if ("undefined" !== typeof ProgressEvent && vv instanceof ProgressEvent) return !0;
      if (!(vv instanceof Error)) return !1;
      const zv = vv.code;
      return "ServerError" === vv.name && void 0 === zv || "AbortError" === vv.name || "seat reservation expired." === vv.message || "early_leave" === vv.message
    }(0, sv.k)((vv => {
      (0, jz.e)("wasm_net", vv)
    }));
    let Hz = !0;

    function Mz() {
      Hz = !1
    }
    class yz {
      constructor(vv) {
        this.gameNameWithVariation = void 0, this.lobbyName = void 0, this.colyClient = void 0, this.userContext = void 0, this.joinedAt = null, this.checkSendPath = () => {}, this.vW = void 0, this.connectionResume = void 0, this.incomingMsgInitialisor = void 0, this.gameNameWithVariation = vv.gameNameWithVariation, this.lobbyName = vv.lobbyName, this.colyClient = vv.colyClient, this.userContext = vv.userContext
      }
      async connectToServer(vv, zv, Pv) {
        cv.c.reset(), vv.wV = {
          [vv.sV]: {}
        }, vv.W8 = void 0, (0, az.m)(), (0, dv.d)().removeAllEntityNames(), (0, dv.d)().setEntityName(vv.sV, this.userContext.getPlayerName()), (0, nz.o)({
          lobbyName: this.lobbyName
        }), console.log("Waiting for clientConnection passed promise to resolve");
        const gv = (0, Qz.g)();
        console.log("joining server with game", this.gameNameWithVariation, "lobbyName", this.lobbyName);
        const pv = performance.now(),
          Nv = (0, tz.h)(this.userContext, (() => {
            const {
              roomName: hv,
              joinOptions: Sv
            } = (0, mv.i)(this.userContext, this.gameNameWithVariation, this.lobbyName, zv, (vv => Kz.b.isUsingCustomGameTexturePack(vv)));
            return Sv.joinAdHold = gv, Sv.renderBackend = (0, Zz.b)(vv.Ma), (0, Rz.f)((() => this.colyClient.joinOrCreate(hv, Sv)), Pv)
          }));
        return iv.j.zC("loadingScreenState", "loadingPage:joiningLobby"), await Nv.then((zv => {
          if (this.joinedAt = performance.now(), this.vW = vv, gv) {
            const vv = (0, Qz.q)((() => {
              zv.send(Sv.g), (0, Oz.m)()
            }));
            zv.Tm(vv), (0, hv.onGameResetOnce)(vv)
          }
          const Pv = new Cv(zv);
          this.connectionResume = new fz((vv => this.colyClient.reconnect(vv)), (zv => {
            vv.ZY(zv)
          }), Pv, {
            isLive: () => (0, dv.d)().client.getMsgHandler() === Pv,
            onDropped: (vv, zv) => {
              (0, Yz.i)(vv) || this.logUnrecognisedConnectionLoss(vv, void 0, {
                site: "drop",
                closeReason: null !== zv && void 0 !== zv ? zv : "",
                sinceJoined: this.sinceJoined()
              })
            },
            onRoomLeft: (vv, zv) => {
              this.onRoomLeft(vv, zv)
            },
            onReconnected: vv => {
              this.incomingMsgInitialisor.odv(vv), this.checkSendPath = (0, Uz.i)(Pv, vv, sv.l)
            },
            onGaveUp: (vv, zv) => {
              this.onResumeGaveUp(vv, zv)
            }
          }), this.connectionResume.attachRoom(zv), (0, hv.onGameResetOnce)((() => {
            this.connectionResume.dispose()
          }));
          const ev = Pv.send,
            pv = Pv.rG,
            Nv = Pv.jzv.send,
            lv = Pv.jzv.rG,
            Tv = Pv.Jdv;
          this.checkSendPath = (0, Uz.i)(Pv, zv, sv.l);
          const Wv = setInterval((() => {
            ev === Pv.send && pv === Pv.rG && Nv === Pv.jzv.send && lv === Pv.jzv.rG && Tv === Pv.Jdv || Mz(), this.checkSendPath()
          }), 1e4);
          return (0, hv.onGameResetOnce)((() => {
            clearInterval(Wv)
          })), {
            success: !0,
            successDetails: Pv
          }
        })).catch((zv => {
          if (Pv.aborted && zv === (0, qz.g)(Pv)) return {
            success: !1,
            failDetails: {
              reason: "Left the game while it loaded",
              requiresRefresh: !1,
              canReconnect: !1
            }
          };
          if (zv instanceof Iz.g) return console.warn("Seat request timed out", this.lobbyName, this.gameNameWithVariation), {
            success: !1,
            failDetails: {
              reason: zv.message,
              requiresRefresh: !1,
              canReconnect: !1,
              gameServerUnreachable: "timedOut"
            }
          };
          vv.Ws(`Failed to connect to bloxd room, check your internet connection. lobbyName: ${this.lobbyName}, gameNameWithVariation: ${this.gameNameWithVariation} code: ${zv.code}\n`, zv);
          const hv = zv.code;
          return hv === ev.b.serverUpdating.code ? (this.goToUpdateWaiting(), {
            success: !1,
            failDetails: {
              reason: ev.b.serverUpdating.text,
              requiresRefresh: !1,
              canReconnect: !0,
              goesToUpdateWaiting: !0
            }
          }) : {
            success: !1,
            failDetails: {
              ...this.onConnectionToServerLost(hv, zv.message, {
                site: "join",
                sinceJoinStart: (0, Yz.d)(performance.now() - pv),
                ...Az(zv)
              }, Lz(zv)),
              rematch: (0, Rz.d)(zv),
              gameRefused: (0, xz.d)(zv)
            }
          }
        }))
      }
      setupServerListeners(vv, zv, Pv) {
        iv.j.zC("loadingScreenState", "loadingPage:loadingPlayerInfo"), this.incomingMsgInitialisor = new iz(this.gameNameWithVariation, zv.jzv, vv, this.connectionResume), this.incomingMsgInitialisor.setupStateReplicationHandlers();
        const Sv = zv.udv();
        this.incomingMsgInitialisor.setupOnMessageListeners(Sv, Pv), (0, hv.onConnectionToServerReady)(Sv, zv), Sv.finishRegistration()
      }
      dispose() {
        this.connectionResume.dispose()
      }
      onResumeGaveUp(vv, zv) {
        (0, Vz.ws)(new Error("Reconnect failed"), {
          ...(0, Fz.m)(zv),
          game: this.gameNameWithVariation
        }), (0, jz.e)("disconnect", "Reconnect failed", zv.reason), (0, dv.d)().client.leaveGameUnwanted({
          reason: {
            translationKey: "general:lostConnection"
          },
          canReconnect: !vv,
          canPlayAgain: vv,
          requiresRefresh: !1,
          automaticallyReconnect: !1
        }), (0, Pz.navigatePreserveSearch)("/")
      }
      sinceJoined() {
        return null === this.joinedAt ? "" : (0, Yz.d)(performance.now() - this.joinedAt)
      }
      onRoomLeft(vv, zv) {
        var Pv;
        if (vv === ev.b.gameOrPluginKick.code) return;
        if (console.log(`Left room with code ${vv}`), vv === ev.b.serverUpdating.code) return (0, jz.e)("disconnect", "Left room", "serverUpdating"), (0, dv.d)().client.leaveGame(this.getUpdateWaitingUrl()), void this.goToUpdateWaiting();
        this.vW.Ws(`Kicked from server with code ${vv}`, new Error);
        const hv = Object.keys(ev.b).find((zv => ev.b[zv].code === vv));
        (0, jz.e)("disconnect", "Left room", null !== hv && void 0 !== hv ? hv : String(vv));
        const Sv = this.onConnectionToServerLost(vv, void 0, {
          site: "leave",
          closeReason: null !== zv && void 0 !== zv ? zv : "",
          sinceJoined: this.sinceJoined()
        });
        (0, dv.d)().client.leaveGameUnwanted({
          reason: `You have disconnected from the server.\n${Sv.reason}`,
          canReconnect: Sv.canReconnect,
          requiresRefresh: Sv.requiresRefresh,
          automaticallyReconnect: null !== (Pv = Sv.automaticallyReconnect) && void 0 !== Pv && Pv
        }), (0, Pz.navigatePreserveSearch)("/")
      }
      getUpdateWaitingUrl() {
        return (0, Dz.A)(this.gameNameWithVariation, this.lobbyName)
      }
      goToUpdateWaiting() {
        (0, Pz.navigatePreserveSearch)(this.getUpdateWaitingUrl())
      }
      onConnectionToServerLost(vv, zv, Pv) {
        var hv;
        let Sv = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        if (null !== (hv = zv) && void 0 !== hv && hv.endsWith(ev.l) && (this.userContext.invalidateTrafficCode(), zv = zv.replace(ev.l, "")), vv === ev.b.outdatedVersion.code) return console.error("Outdated client with version ", gv.c, ", refreshing page"), (0, Gv.reloadBloxd)(), {
          reason: "Outdated client",
          requiresRefresh: !0,
          canReconnect: !1
        };
        if (vv === ev.b.loadRecaptchaError.code) return console.error("Load recaptcha error, refreshing page"), (0, Gv.reloadBloxd)(), {
          reason: "Failed to load recaptcha",
          requiresRefresh: !0,
          canReconnect: !1
        };
        for (const gv in ev.b) {
          const {
            code: Pv,
            text: hv,
            canReconnect: Sv
          } = ev.b[gv];
          if (Pv === vv) {
            console.log("matched known error", vv, "leaving game");
            return {
              reason: "" !== hv ? hv : zv || `Code: ${vv}`,
              requiresRefresh: !1,
              canReconnect: Sv,
              automaticallyReconnect: Pv === ev.b.customGameUpdated.code || Pv === ev.b.duplicateLobbyNameError.code
            }
          }
        }
        return console.log("Didn't match known error, leaving game"), (0, Yz.h)(vv) || Sv ? console.warn("Connection lost", vv, zv) : this.logUnrecognisedConnectionLoss(vv, zv, Pv), {
          reason: `Either your internet isn't working or this is a bug.\nCode: ${vv}`,
          requiresRefresh: !1,
          canReconnect: !1,
          gameServerUnreachable: Sv ? "failed" : void 0
        }
      }
      logUnrecognisedConnectionLoss(vv, zv, Pv) {
        (0, Vz.ws)(new Error("Unrecognised connection loss"), {
          code: String(vv),
          cause: null !== zv && void 0 !== zv ? zv : "",
          ...Pv,
          game: this.gameNameWithVariation,
          ...(0, Yz.k)()
        })
      }
    }
  },
  38540: (vv, zv, Pv) => {
    Pv.d(zv, {
      e: () => EP,
      g: () => uP
    });
    var hv, Sv, ev, gv, pv, dv, Nv, lv, Tv, Wv, wv, av, sv, Cv, iv, cv, Gv, mv, jv, fv, Fv, Yv, nv, Ov, Dv, Kv, Vv, Uv, Rv, xv, tv, qv, Iv, Qv, Zv, Av, Lv, Hv, Mv, yv, Bv, Jv, Ev, ov, bv, rv, kv, Xv, uv, vz, zz, Pz, hz, Sz, ez, gz, pz, dz, Nz, lz, Tz, Wz, wz, az, sz, Cz, iz, cz, Gz, mz, jz, fz, Fz, Yz, nz, Oz, Dz, Kz, Vz, Uz, Rz, xz, tz, qz, Iz, Qz, Zz, Az, Lz, Hz, Mz, yz, Bz, Jz, Ez, oz, bz, rz, kz, Xz = Pv(26),
      uz = Pv(36645),
      vP = Pv(38555),
      zP = Pv(38560),
      PP = Pv(8772),
      hP = Pv(618),
      SP = Pv(609),
      eP = Pv(36310);
    let gP = (hv = (0, PP.type)("number"), Sv = (0, PP.type)("number"), ev = (0, PP.type)("number"), gv = (0, PP.type)("number"), pv = (0, PP.type)("number"), dv = (0, PP.type)("number"), Nv = (0, PP.type)("string"), lv = class extends PP.Schema {
        constructor() {
          super(...arguments), (0, vP.b)(this, "id", Tv, this), (0, vP.b)(this, "amount", Wv, this), (0, vP.b)(this, "x", wv, this), (0, vP.b)(this, "y", av, this), (0, vP.b)(this, "z", sv, this), (0, vP.b)(this, "size", Cv, this), (0, vP.b)(this, "attributes", iv, this)
        }
      }, Tv = (0, zP.d)(lv.prototype, "id", [hv], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return 0
        }
      }), Wv = (0, zP.d)(lv.prototype, "amount", [Sv], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return 0
        }
      }), wv = (0, zP.d)(lv.prototype, "x", [ev], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return 0
        }
      }), av = (0, zP.d)(lv.prototype, "y", [gv], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return 0
        }
      }), sv = (0, zP.d)(lv.prototype, "z", [pv], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return 0
        }
      }), Cv = (0, zP.d)(lv.prototype, "size", [dv], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return 1
        }
      }), iv = (0, zP.d)(lv.prototype, "attributes", [Nv], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return "{}"
        }
      }), lv),
      pP = (cv = (0, PP.type)("string"), Gv = (0, PP.type)("string"), mv = class extends PP.Schema {
        constructor() {
          super(...arguments), (0, vP.b)(this, "itemName", jv, this), (0, vP.b)(this, "enchantmentTier", fv, this)
        }
      }, jv = (0, zP.d)(mv.prototype, "itemName", [cv], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: null
      }), fv = (0, zP.d)(mv.prototype, "enchantmentTier", [Gv], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: null
      }), mv),
      dP = (Fv = (0, PP.type)("string"), Yv = (0, PP.type)("string"), nv = (0, PP.type)("number"), Ov = (0, PP.type)("number"), Dv = (0, PP.type)("number"), Kv = (0, PP.type)("float32"), Vv = (0, PP.type)("float32"), Uv = (0, PP.type)("float32"), Rv = (0, PP.type)("string"), xv = (0, PP.type)(["number"]), tv = (0, PP.type)("boolean"), qv = class extends PP.Schema {
        constructor() {
          super(...arguments), (0, vP.b)(this, "type", Iv, this), (0, vP.b)(this, "name", Qv, this), (0, vP.b)(this, "x", Zv, this), (0, vP.b)(this, "y", Av, this), (0, vP.b)(this, "z", Lv, this), (0, vP.b)(this, "xRotation", Hv, this), (0, vP.b)(this, "yRotation", Mv, this), (0, vP.b)(this, "zRotation", yv, this), (0, vP.b)(this, "followingEId", Bv, this), (0, vP.b)(this, "followingOffset", Jv, this), (0, vP.b)(this, "shouldMatchFollowingEntityRotation", Ev, this)
        }
      }, Iv = (0, zP.d)(qv.prototype, "type", [Fv], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: null
      }), Qv = (0, zP.d)(qv.prototype, "name", [Yv], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return ""
        }
      }), Zv = (0, zP.d)(qv.prototype, "x", [nv], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return 0
        }
      }), Av = (0, zP.d)(qv.prototype, "y", [Ov], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return 0
        }
      }), Lv = (0, zP.d)(qv.prototype, "z", [Dv], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return 0
        }
      }), Hv = (0, zP.d)(qv.prototype, "xRotation", [Kv], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return 0
        }
      }), Mv = (0, zP.d)(qv.prototype, "yRotation", [Vv], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return 0
        }
      }), yv = (0, zP.d)(qv.prototype, "zRotation", [Uv], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return 0
        }
      }), Bv = (0, zP.d)(qv.prototype, "followingEId", [Rv], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: null
      }), Jv = (0, zP.d)(qv.prototype, "followingOffset", [xv], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return new PP.ArraySchema(0, 0, 0)
        }
      }), Ev = (0, zP.d)(qv.prototype, "shouldMatchFollowingEntityRotation", [tv], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return !0
        }
      }), qv),
      NP = (ov = (0, PP.type)("float32"), bv = (0, PP.type)("float32"), rv = (0, PP.type)("boolean"), kv = (0, PP.type)("boolean"), Xv = (0, PP.type)("float32"), uv = (0, PP.type)("boolean"), vz = (0, PP.type)("string"), zz = (0, PP.type)("string"), Pz = (0, PP.type)("string"), hz = (0, PP.type)("string"), Sz = (0, PP.type)(["number"]), ez = (0, PP.type)("number"), gz = (0, PP.type)({
        map: pP
      }), pz = class extends dP {
        constructor() {
          super(...arguments), (0, vP.b)(this, "scale", dz, this), (0, vP.b)(this, "speed", Nz, this), (0, vP.b)(this, "jumping", lz, this), (0, vP.b)(this, "crouching", Tz, this), (0, vP.b)(this, "cameraPitch", Wz, this), (0, vP.b)(this, "armSwinging", wz, this), (0, vP.b)(this, "heldItemName", az, this), (0, vP.b)(this, "heldItemEnchantmentTier", sz, this), (0, vP.b)(this, "pose", Cz, this), (0, vP.b)(this, "ridingVehicleEId", iz, this), (0, vP.b)(this, "meshOffset", cz, this), (0, vP.b)(this, "baseRenderHeading", Gz, this), (0, vP.b)(this, "armour", mz, this)
        }
      }, dz = (0, zP.d)(pz.prototype, "scale", [ov], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return 1
        }
      }), Nz = (0, zP.d)(pz.prototype, "speed", [bv], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return 0
        }
      }), lz = (0, zP.d)(pz.prototype, "jumping", [rv], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return !1
        }
      }), Tz = (0, zP.d)(pz.prototype, "crouching", [kv], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return !1
        }
      }), Wz = (0, zP.d)(pz.prototype, "cameraPitch", [Xv], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return 0
        }
      }), wz = (0, zP.d)(pz.prototype, "armSwinging", [uv], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return !1
        }
      }), az = (0, zP.d)(pz.prototype, "heldItemName", [vz], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: null
      }), sz = (0, zP.d)(pz.prototype, "heldItemEnchantmentTier", [zz], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: null
      }), Cz = (0, zP.d)(pz.prototype, "pose", [Pz], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return "standing"
        }
      }), iz = (0, zP.d)(pz.prototype, "ridingVehicleEId", [hz], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return null
        }
      }), cz = (0, zP.d)(pz.prototype, "meshOffset", [Sz], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return new PP.ArraySchema(0, 0, 0)
        }
      }), Gz = (0, zP.d)(pz.prototype, "baseRenderHeading", [ez], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return 0
        }
      }), mz = (0, zP.d)(pz.prototype, "armour", [gz], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return new PP.MapSchema
        }
      }), pz),
      lP = (jz = (0, PP.type)("string"), fz = (0, PP.type)("string"), Fz = (0, PP.type)("string"), Yz = (0, PP.type)("uint8"), nz = class extends NP {
        constructor() {
          super(...arguments), (0, vP.b)(this, "variation", Oz, this), (0, vP.b)(this, "ownerDbId", Dz, this), (0, vP.b)(this, "metaInfo", Kz, this), (0, vP.b)(this, "aiState", Vz, this)
        }
      }, Oz = (0, zP.d)(nz.prototype, "variation", [jz], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return "default"
        }
      }), Dz = (0, zP.d)(nz.prototype, "ownerDbId", [fz], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return null
        }
      }), Kz = (0, zP.d)(nz.prototype, "metaInfo", [Fz], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return ""
        }
      }), Vz = (0, zP.d)(nz.prototype, "aiState", [Yz], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return 0
        }
      }), nz);
    Uz = (0, PP.type)("string"), Rz = (0, PP.type)("string"), xz = (0, PP.type)("string"), tz = (0, PP.type)("string"), qz = class extends dP {
      constructor() {
        super(...arguments), (0, vP.b)(this, "meshKind", Iz, this), (0, vP.b)(this, "meshOpts", Qz, this), (0, vP.b)(this, "pose", Zz, this), (0, vP.b)(this, "leaderboardTop", Az, this)
      }
    }, Iz = (0, zP.d)(qz.prototype, "meshKind", [Uz], {
      configurable: !0,
      enumerable: !0,
      writable: !0,
      initializer: null
    }), Qz = (0, zP.d)(qz.prototype, "meshOpts", [Rz], {
      configurable: !0,
      enumerable: !0,
      writable: !0,
      initializer: null
    }), Zz = (0, zP.d)(qz.prototype, "pose", [xz], {
      configurable: !0,
      enumerable: !0,
      writable: !0,
      initializer: null
    }), Az = (0, zP.d)(qz.prototype, "leaderboardTop", [tz], {
      configurable: !0,
      enumerable: !0,
      writable: !0,
      initializer: null
    });

    function TP(vv) {
      return Object.keys(PP.Metadata.getFields(vv))
    }
    const WP = TP(lP);
    for (const vh of hP.v)
      if (!WP.includes(vh)) throw new Error(`Mob Schema is missing a networked property: "${vh}"`);
    const wP = TP((Lz = (0, PP.type)("string"), Hz = (0, PP.type)("float32"), Mz = (0, PP.type)("float32"), yz = (0, PP.type)("float32"), Bz = (0, PP.type)("float32"), Jz = class extends dP {
      constructor() {
        super(...arguments), (0, vP.b)(this, "soundName", Ez, this), (0, vP.b)(this, "volume", oz, this), (0, vP.b)(this, "refDistance", bz, this), (0, vP.b)(this, "maxHearDist", rz, this), (0, vP.b)(this, "rate", kz, this)
      }
    }, Ez = (0, zP.d)(Jz.prototype, "soundName", [Lz], {
      configurable: !0,
      enumerable: !0,
      writable: !0,
      initializer: function() {
        return ""
      }
    }), oz = (0, zP.d)(Jz.prototype, "volume", [Hz], {
      configurable: !0,
      enumerable: !0,
      writable: !0,
      initializer: function() {
        return 1
      }
    }), bz = (0, zP.d)(Jz.prototype, "refDistance", [Mz], {
      configurable: !0,
      enumerable: !0,
      writable: !0,
      initializer: function() {
        return eP.e
      }
    }), rz = (0, zP.d)(Jz.prototype, "maxHearDist", [yz], {
      configurable: !0,
      enumerable: !0,
      writable: !0,
      initializer: function() {
        return eP.c
      }
    }), kz = (0, zP.d)(Jz.prototype, "rate", [Bz], {
      configurable: !0,
      enumerable: !0,
      writable: !0,
      initializer: function() {
        return 1
      }
    }), Jz));
    for (const vh of SP.g)
      if (!wP.includes(vh)) throw new Error(`AudioEntity Schema is missing a replicated property: "${vh}"`);
    var aP = Pv(37956),
      sP = Pv(1226),
      CP = Pv(626),
      iP = Pv(37747),
      cP = Pv(4019),
      GP = Pv(312),
      mP = Pv(36745),
      jP = Pv(37637),
      fP = Pv(2160),
      FP = Pv(36720),
      YP = Pv(37986),
      nP = Pv(36861),
      OP = Pv(327),
      DP = Pv.n(OP),
      KP = Pv(37463),
      VP = Pv(36579),
      UP = Pv(37617),
      RP = Pv(37650);
    class xP {
      constructor(vv, zv) {
        this.bloxd = vv, this.eId = zv, this.vW = void 0, this.colyseusEntity = void 0, this.canSeeSub = void 0, this.canAttackSub = void 0, this.interactableSub = void 0, this.overlayColourSub = void 0, this.opacitySub = void 0, this.zIndexSub = void 0, this.multilineTextBoxSub = void 0, this.previousHidingMeshManagerState = void 0, this.meshKind = void 0, this.meshOpts = void 0, this.leaderboardTop = void 0, this.meshRebuildQueued = !1, this.ea = !1, this.vW = vv.vW
      }
      initClient(vv) {
        var zv, Pv, hv;
        this.colyseusEntity = vv, this.meshKind = vv.meshKind, this.meshOpts = vv.meshOpts, this.leaderboardTop = vv.leaderboardTop, this.vW.Rm.add([vv.x, vv.y, vv.z], 1, 1, null, null, !1, !1, this.eId), this.vW.Rm.IK(this.eId, "smoothToServerPos");
        const Sv = "Person" === this.meshKind;
        this.vW.Rm.IK(this.eId, "meshRotation", {
          isServerControlled: !0,
          ...Sv ? {
            defaultRotationsPerSecond: .5
          } : {},
          childrenNodeParams: Sv ? [{
            nodeName: "HeadMesh",
            softTolerance: YP.l,
            hardTolerance: null
          }] : []
        }), this.updateHidingMeshMgr(), this.canSeeSub = Xz.j.subscribe(`otherEntitySettings|${this.eId}|canSee`, (vv => {
          this.updateHidingMeshMgr()
        }));
        const ev = () => {
          const vv = this.vW.Rm.Nvv(this.eId);
          if (!vv) return;
          const zv = (0, nP.j)(this.eId);
          if ("number" === typeof vv.NK) {
            var Pv, hv, Sv, ev;
            const gv = null === (Pv = (0, fP.o)("head", null === (Sv = this.getSpec()) || void 0 === Sv || null === (ev = Sv.opts.textures) || void 0 === ev ? void 0 : ev.head)) || void 0 === Pv || null === (hv = Pv.personModel) || void 0 === hv ? void 0 : hv.fullBody;
            return this.vW.Ma.hK.setPickable(vv.NK, zv && !gv), void(0, VP.updatePersonAttachmentPickability)(this.vW, this.eId, zv)
          }
          const gv = vv.mesh;
          if (gv)
            for (const pv of [gv, ...gv.getChildMeshes(!1)]) "Zs" in pv && !pv.name.startsWith("Cape|") && (pv.Zs = zv)
        };
        this.canAttackSub = Xz.j.subscribe(`otherEntitySettings|${this.eId}|canAttack`, ev), this.interactableSub = Xz.j.subscribe(`otherEntitySettings|${this.eId}|interactable`, ev), this.overlayColourSub = Xz.j.subscribe(`otherEntitySettingsClientifiedEId|${this.eId}|overlayColour`, (vv => {
          this.updateOverlayColour(vv)
        })), this.opacitySub = Xz.j.subscribe(`otherEntitySettingsClientifiedEId|${this.eId}|opacity`, (vv => {
          this.updateOpacity(vv)
        })), this.zIndexSub = Xz.j.subscribe(`otherEntitySettingsClientifiedEId|${this.eId}|zIndex`, (vv => {
          this.updateZIndex(vv)
        }));
        const gv = this.vW.wV[this.vW.sV][this.eId];
        this.updateOverlayColour(null !== (zv = null === gv || void 0 === gv ? void 0 : gv.overlayColour) && void 0 !== zv ? zv : null), this.updateOpacity(null !== (Pv = null === gv || void 0 === gv ? void 0 : gv.opacity) && void 0 !== Pv ? Pv : 1), this.updateZIndex(null !== (hv = null === gv || void 0 === gv ? void 0 : gv.zIndex) && void 0 !== hv ? hv : 0), this.multilineTextBoxSub = (0, FP.q)(this.vW, this.eId)
      }
      onChangeClient(vv, zv) {
        if ("xRotation" === vv || "yRotation" === vv || "zRotation" === vv)(0, FP.t)(this.vW, this.eId, vv, zv);
        else if ("pose" === vv) {
          const vv = this.vW.Rm.svv(this.eId);
          vv && (vv.pose = zv || "standing")
        } else "meshKind" === vv || "meshOpts" === vv ? (this[vv] = zv, this.queueMeshRebuild()) : "name" === vv && "" !== zv ? this.updateHidingMeshMgr() : "leaderboardTop" === vv && (this.leaderboardTop = zv, Xz.j.zC(`leaderboardTop|${this.eId}`, zv))
      }
      disposeClient() {
        this.ea = !0, this.vW.Rm.deleteEntity(this.eId), Xz.j.unsubscribe(this.canSeeSub), Xz.j.unsubscribe(this.canAttackSub), Xz.j.unsubscribe(this.interactableSub), Xz.j.unsubscribe(this.overlayColourSub), Xz.j.unsubscribe(this.opacitySub), Xz.j.unsubscribe(this.zIndexSub), Xz.j.unsubscribe(this.multilineTextBoxSub)
      }
      getCurrentHidingMeshMgrState() {
        var vv, zv;
        return {
          canSee: null !== (vv = null === (zv = this.vW.wV[this.vW.sV][this.eId]) || void 0 === zv ? void 0 : zv.canSee) && void 0 !== vv && vv,
          name: this.colyseusEntity.name,
          meshKind: this.meshKind,
          meshOpts: this.meshOpts
        }
      }
      updateHidingMeshMgr() {
        var vv, zv, Pv;
        const {
          vW: hv
        } = this, {
          Rm: Sv
        } = hv, ev = this.getCurrentHidingMeshMgrState();
        if ((0, GP.Ud)(this.previousHidingMeshManagerState, ev)) return;
        if (this.previousHidingMeshManagerState = ev, Sv.bK(this.eId, "hidingMeshManager"), null === (vv = hv.wV[hv.sV][this.eId]) || void 0 === vv || !vv.canSee) return;
        const gv = this.getSpec();
        if (!gv) return;
        const {
          type: pv,
          opts: dv
        } = gv;
        "Person" === pv && (dv.textures = (0, fP.v)(dv.textures)), dv.eId = this.eId, Sv.IK(this.eId, "hidingMeshManager", {
          addMeshComponent: () => {
            var vv, zv, Pv;
            "Leaderboard" === pv && (dv.leaderboardTop = this.leaderboardTop);
            const ev = this.bloxd.client.meshCreator.getEntityMesh(pv, dv, (vv => {
              var zv, Pv;
              if ("number" === typeof vv) {
                var Sv, ev, gv;
                const zv = hv.Ma.hK;
                zv.setEntityId(vv, this.eId);
                const Pv = "Person" === pv && (null === (Sv = (0, fP.o)("head", null === (gv = dv.textures) || void 0 === gv ? void 0 : gv.head)) || void 0 === Sv || null === (ev = Sv.personModel) || void 0 === ev ? void 0 : ev.fullBody);
                return void zv.setPickable(vv, (0, nP.j)(this.eId) && !Pv)
              }
              const Nv = vv;
              for (const pv of [Nv, ...Nv.getChildMeshes(!1)]) void 0 === pv.Zs || pv.name.startsWith("Cape|") || (pv.Zs = (0, nP.j)(this.eId), pv.metadata ??= new hv.Ma.Ls, pv.metadata.eId = this.eId);
              this.updateOpacity(null !== (zv = null === (Pv = hv.wV[hv.sV][this.eId]) || void 0 === Pv ? void 0 : Pv.opacity) && void 0 !== zv ? zv : 1)
            }));
            if (!ev) return;
            const {
              NK: gv,
              mesh: Nv,
              meshOffset: lv,
              nameYOffset: Tv,
              modelLoaded: Wv
            } = ev;
            null === Wv || void 0 === Wv || Wv.then((() => {
              var vv;
              (null === (vv = Sv.Nvv(this.eId)) || void 0 === vv ? void 0 : vv.mesh) === Nv && (this.previousHidingMeshManagerState = null, this.updateHidingMeshMgr())
            }));
            const wv = null === gv ? null : hv.Ma.hK.ePv(gv, 0);
            if (Sv.IK(this.eId, Sv.names.mesh, {
                NK: gv,
                Ozv: wv,
                mesh: Nv,
                ggv: !1,
                Uzv: "Leaderboard" !== pv,
                offset: lv.slice(),
                egv: "ParticleEmitter" === pv && dv.followTargetMeshOffset ? vv => {
                  var zv;
                  DP().copy(vv, lv);
                  const Pv = null === (zv = Sv.vzv(this.eId)) || void 0 === zv ? void 0 : zv.Xw,
                    hv = void 0 === Pv ? null : Sv.svv(Pv);
                  if (hv) {
                    var ev, gv;
                    const zv = this.bloxd.getEntityHeading(null !== (ev = hv.ridingVehicleEId) && void 0 !== ev ? ev : Pv, !0),
                      Sv = Math.sin(zv),
                      pv = Math.cos(zv);
                    vv[0] += hv.meshOffset[0] * pv + hv.meshOffset[2] * Sv, vv[1] += hv.meshOffset[1], vv[2] += hv.meshOffset[2] * pv - hv.meshOffset[0] * Sv;
                    const dv = null !== (gv = hv.ridingVehicleEId) && void 0 !== gv ? gv : null;
                    null !== dv && (0, RP.b)(this.vW, dv, vv)
                  }
                } : null
              }), "Person" === pv) {
              var av, sv, Cv, iv;
              Sv.IK(this.eId, Sv.names.meshAttachments, {
                personFullBody: null !== (av = null === (sv = (0, fP.o)("head", null === (iv = dv.textures) || void 0 === iv ? void 0 : iv.head)) || void 0 === sv || null === (Cv = sv.personModel) || void 0 === Cv ? void 0 : Cv.fullBody) && void 0 !== av && av
              });
              for (const vv of sP.u) {
                var cv, Gv, mv;
                const zv = null === (cv = dv.textures) || void 0 === cv ? void 0 : cv[vv];
                zv && null !== (Gv = (0, fP.o)(vv, zv)) && void 0 !== Gv && null !== (mv = Gv.attachments) && void 0 !== mv && mv.length && jP.b.Player.meshApi.updatePlayerCosmetic(this.eId, gv, vv, zv)
              }
              Sv.IK(this.eId, Sv.names.moveState), Sv.IK(this.eId, "updateWalkingState", {
                NK: gv,
                Ozv: wv,
                walkingLegSwingDuration: YP.q
              }), Sv.IK(this.eId, "humanoidMesh", {
                NK: gv,
                Ozv: wv,
                heldItemPositionParams: {},
                maxWalkingAngleOverride: null
              }), Sv.IK(this.eId, "animator", {
                NK: gv,
                Ozv: wv,
                modelLifeformType: "Player"
              }), UP.i.hasAnimation("Person") && Sv.IK(this.eId, "rigAnimation", {
                target: "Person",
                NK: gv
              }), Sv.svv(this.eId).pose = this.colyseusEntity.pose || "standing"
            } else if ("BloxdBlock" === pv && null !== gv) {
              Sv.IK(this.eId, "animator", {
                NK: gv,
                Ozv: wv,
                modelLifeformType: null
              });
              const vv = (0, iP.s)(dv.blockName);
              null !== vv && Sv.IK(this.eId, "rigAnimation", {
                target: vv,
                NK: gv
              })
            }
            Sv.qgv(this.eId, "entityName", {
              name: this.colyseusEntity.name,
              nameYOffset: Tv
            }), this.bloxd.setEntityName(this.eId, this.colyseusEntity.name), !0 === dv.autoRotate && (Sv.bK(this.eId, "meshRotation"), Sv.IK(this.eId, "autoRotate"));
            const {
              lineToEId: jv
            } = dv;
            (0, CP.N)(jv) || Sv.IK(this.eId, "lineToEntity", {
              lineToEId: jv
            });
            const fv = hv.wV[hv.sV][this.eId];
            this.updateOverlayColour(null !== (vv = null === fv || void 0 === fv ? void 0 : fv.overlayColour) && void 0 !== vv ? vv : null), this.updateOpacity(null !== (zv = null === fv || void 0 === fv ? void 0 : fv.opacity) && void 0 !== zv ? zv : 1), this.updateZIndex(null !== (Pv = null === fv || void 0 === fv ? void 0 : fv.zIndex) && void 0 !== Pv ? Pv : 0)
          },
          removeMeshComponent: () => {
            "Person" !== pv && "BloxdBlock" !== pv || Sv.bK(this.eId, "rigAnimation"), Sv.bK(this.eId, Sv.names.mesh), Sv.R7(this.eId, Sv.names.meshAttachments) && Sv.bK(this.eId, Sv.names.meshAttachments), Sv.bK(this.eId, "entityName"), Sv.bK(this.eId, "autoRotate"), Sv.bK(this.eId, "lineToEntity"), "Person" === pv ? (Sv.bK(this.eId, Sv.names.moveState), Sv.bK(this.eId, "updateWalkingState"), Sv.bK(this.eId, "humanoidMesh"), Sv.bK(this.eId, "animator")) : "BloxdBlock" === pv && Sv.bK(this.eId, "animator")
          },
          hideDist: null !== (zv = dv.hideDist) && void 0 !== zv ? zv : 80,
          movingHideDist: null !== (Pv = dv.hideDist) && void 0 !== Pv ? Pv : 120,
          displayOutsideLoadedChunk: dv.hideDist > 100,
          immediatelyUpdate: !0,
          Kl: "BloxdBlock" === pv ? dv.blockName : pv
        })
      }
      queueMeshRebuild() {
        this.meshRebuildQueued || (this.meshRebuildQueued = !0, queueMicrotask((() => {
          this.meshRebuildQueued = !1, this.ea || this.updateHidingMeshMgr()
        })))
      }
      getSpec() {
        return (0, cP.g)({
          meshKind: this.meshKind,
          meshOpts: this.meshOpts
        })
      }
      updateOverlayColour(vv) {
        var zv, Pv;
        if ("Person" !== this.meshKind) return;
        let hv = new mP.d(0, 0, 0, 0);
        if (null !== vv) {
          const zv = (0, GP._)(vv);
          hv = new mP.d(zv[0] / 255, zv[1] / 255, zv[2] / 255, .5)
        }
        const Sv = null !== (zv = null === (Pv = this.vW.Rm.Nvv(this.eId)) || void 0 === Pv ? void 0 : Pv.NK) && void 0 !== zv ? zv : null;
        null !== Sv && jP.b.Player.meshApi.updateMeshOverlayColour(Sv, hv)
      }
      updateZIndex(vv) {
        var zv;
        if ("Person" !== this.meshKind) return;
        const Pv = null === (zv = this.vW.Rm.Nvv(this.eId)) || void 0 === zv ? void 0 : zv.NK;
        "number" === typeof Pv && this.vW.Ma.hK.setRenderingGroupId(Pv, vv)
      }
      updateOpacity(vv) {
        const zv = this.vW.Rm.Nvv(this.eId);
        zv && ("number" !== typeof zv.NK ? zv.mesh && "ParticleEmitter" !== this.meshKind && (0, KP.f)(zv.mesh, vv) : jP.b.Player.meshApi.updateMeshOpacity(zv.NK, vv))
      }
    }
    var tP = Pv(38547);
    class qP {
      constructor(vv, zv) {
        this.eId = zv, this.vW = void 0, this.schema = void 0, this.vW = vv.vW
      }
      initClient(vv) {
        this.schema = vv, this.vW.Rm.add([vv.x, vv.y, vv.z], .1, .1, null, null, !1, !1, this.eId), this.vW.Rm.IK(this.eId, "smoothToServerPos"), tP.e.add(this.eId, this.copyOpts())
      }
      onChangeClient(vv) {
        SP.g.includes(vv) && tP.e.update(this.eId, this.copyOpts())
      }
      disposeClient() {
        tP.e.remove(this.eId), this.vW.Rm.deleteEntity(this.eId)
      }
      copyOpts() {
        const {
          soundName: vv,
          volume: zv,
          refDistance: Pv,
          maxHearDist: hv,
          rate: Sv
        } = this.schema;
        return {
          soundName: vv,
          volume: zv,
          refDistance: Pv,
          maxHearDist: hv,
          rate: Sv
        }
      }
    }
    var IP = Pv(3438),
      QP = Pv(36284),
      ZP = Pv(6192),
      AP = Pv(37304),
      LP = Pv(2599),
      HP = Pv(37678),
      MP = Pv(8736),
      yP = Pv(37998),
      BP = Pv(37281),
      JP = Pv(2715);
    class EP {
      constructor(vv, zv) {
        let Pv = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 4,
          hv = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : () => performance.now();
        this.jzv = vv, this.vW = zv, this.setupBudgetMs = Pv, this.now = hv, this.createStateCallbacks = void 0, this.roomStateCallbacks = void 0, this.allItems = {}, this.detachers = new Map, this.deferredSetups = new Map, this.queuedSetups = new Map, this.promotedSetups = new Set, this.setupBudgetLeftMs = void 0, this.lastRefillMs = void 0, this.roomState = void 0, this.ea = !1, this.onFrame = () => {
          this.setUpQueuedEntities(!0)
        }, this.xG = () => {
          this.setUpQueuedEntities(this.now() - this.lastRefillMs > 100)
        }, this.setUpPromoted = () => {
          for (const vv of this.promotedSetups) {
            this.promotedSetups.delete(vv);
            const zv = this.queuedSetups.get(vv);
            zv && (this.queuedSetups.delete(vv), this.timedSetup(zv, vv))
          }
        }, this.createStateCallbacks = (0, MP.getStateCallbacks)(vv), this.roomStateCallbacks = this.createStateCallbacks(vv.state), this.roomState = vv.state, this.setupBudgetLeftMs = Pv, this.lastRefillMs = hv()
      }
      setup() {
        this.setupEntityHandlers(), this.setupItemHandlers(), this.jzv.onStateChange(this.setUpPromoted), this.vW.on("beforeInputs", this.onFrame), this.vW.on("MT", this.xG)
      }
      setUpQueuedEntities(vv) {
        var zv;
        if ((null === (zv = (0, LP.d)().client.getMsgHandler()) || void 0 === zv ? void 0 : zv.jzv) !== this.jzv) return this.vW.off("beforeInputs", this.onFrame), this.vW.off("MT", this.xG), this.queuedSetups.clear(), void this.promotedSetups.clear();
        if (vv && (this.setupBudgetLeftMs = this.setupBudgetMs, this.lastRefillMs = this.now()), this.setUpPromoted(), 0 !== this.queuedSetups.size)
          for (DP().copy(oP, this.vW.Rm.yG(this.vW.sV)); this.setupBudgetLeftMs > 0;) {
            const vv = this.nearestQueued(oP);
            if (null === vv) return;
            this.setUpIfQueued(vv), this.setUpPromoted()
          }
      }
      nearestQueued(vv) {
        let zv = null,
          Pv = 1 / 0;
        return this.queuedSetups.forEach(((hv, Sv) => {
          const ev = function(vv, zv) {
            return (zv.x - vv[0]) ** 2 + (zv.y - vv[1]) ** 2 + (zv.z - vv[2]) ** 2
          }(vv, hv);
          (null === zv || ev < Pv) && (zv = Sv, Pv = ev)
        })), zv
      }
      setUpOrQueue(vv, zv) {
        0 === this.queuedSetups.size && this.setupBudgetLeftMs > 0 || this.mustSetUpNow(vv, zv) ? this.timedSetup(vv, zv) : this.queuedSetups.set(zv, vv)
      }
      mustSetUpNow(vv, zv) {
        const Pv = this.vW.W8;
        if (zv === Pv) return !0;
        const hv = this.roomState.entities.get(Pv);
        return !(!hv || hv.ridingVehicleEId !== zv && hv.followingEId !== zv) || (bP(vv.type) === aP.b || (0, LP.d)().getFollowingEntities(zv).length > 0)
      }
      setUpIfQueued(vv) {
        const zv = this.queuedSetups.get(vv);
        zv && (this.queuedSetups.delete(vv), this.timedSetup(zv, vv))
      }
      promoteIfQueued(vv) {
        null !== vv && this.queuedSetups.has(vv) && this.promotedSetups.add(vv)
      }
      timedSetup(vv, zv) {
        const Pv = this.now();
        this.setupEntity(vv, zv), this.setupBudgetLeftMs -= this.now() - Pv
      }
      setupEntityHandlers() {
        this.roomStateCallbacks.entities.Km(((vv, zv) => {
          this.vW.W8 ? this.setUpOrQueue(vv, zv) : this.deferEntitySetupUntilInitInfo(vv, zv)
        })), this.roomStateCallbacks.entities.HO(((vv, zv) => {
          const Pv = this.deferredSetups.get(zv);
          Pv && (Xz.j.unsubscribe(Pv), this.deferredSetups.delete(zv)), this.queuedSetups.delete(zv), this.detach(zv), (0, LP.d)().client.disposeEntity(zv)
        }))
      }
      deferEntitySetupUntilInitInfo(vv, zv) {
        const Pv = Xz.j.JC("initInfoReceived", (() => {
          this.deferredSetups.delete(zv), this.setUpOrQueue(vv, zv)
        }));
        this.deferredSetups.set(zv, Pv), (0, IP.onGameResetOnce)((() => {
          this.deferredSetups.get(zv) === Pv && (Xz.j.unsubscribe(Pv), this.deferredSetups.delete(zv)), (0, LP.d)().updatePositionAndPhysics(this.vW.sV, {
            type: ZP.s.DEFAULT,
            tier: null
          }, !0), (0, LP.d)().takeHeldPlayerBodySize(this.vW.sV);
          const vv = this.vW.Rm.I3(this.vW.sV);
          vv && (vv.movementType = ZP.p.NORMAL)
        }))
      }
      setupEntity(vv, zv) {
        const Pv = zv === this.vW.W8;
        if (Pv)(0, LP.d)().client.JA(this.vW.sV, null, null);
        else {
          const {
            type: Pv
          } = vv, hv = bP(Pv);
          if (void 0 === hv) return void
          function(vv, zv) {
            const Pv = String(vv);
            if (rP.has(Pv)) return;
            rP.add(Pv);
            const hv = Pv.length > 80 ? `${Pv.slice(0,80)}...` : Pv,
              Sv = `No client handler for entity type ${JSON.stringify(hv)}, so entity ${zv} is not set up`;
            console.warn(Sv), (0, JP.e)("uncaught", Sv, "unknown_entity_type")
          }(Pv, zv);
          (0, LP.d)().client.JA(zv, vv, new hv((0, LP.d)(), zv, Pv))
        }
        const hv = this.createStateCallbacks(vv);
        if (Pv) return this.setupMapSchemaCallbacks(zv, vv, hv, "armour"), this.setupScalarField(zv, vv, hv, "scale"), this.setupScalarField(zv, vv, hv, "ridingVehicleEId"), this.setupScalarField(zv, vv, hv, "followingEId"), this.setupScalarField(zv, vv, hv, "followingOffset"), void this.setupScalarField(zv, vv, hv, "shouldMatchFollowingEntityRotation");
        for (const Sv of TP(vv.constructor)) vv[Sv] instanceof PP.MapSchema ? this.setupMapSchemaCallbacks(zv, vv, hv, Sv) : this.setupScalarField(zv, vv, hv, Sv)
      }
      setupMapSchemaCallbacks(vv, zv, Pv, hv) {
        const Sv = Pv[hv],
          ev = new Map;
        Sv.Km(((Pv, Sv) => {
          if (this.onEntityFieldChange(vv, zv, hv, {
              key: Sv,
              value: Pv
            }), !(Pv instanceof PP.Schema)) return;
          const gv = this.createStateCallbacks(Pv),
            pv = [];
          for (const ev of TP(Pv.constructor)) pv.push(this.listenForFutureChanges(gv, ev, (() => {
            this.onEntityFieldChange(vv, zv, hv, {
              key: Sv,
              value: Pv
            })
          })));
          ev.set(Sv, (() => {
            for (const vv of pv) vv()
          }))
        })), Sv.HO(((Pv, Sv) => {
          var gv;
          null === (gv = ev.get(Sv)) || void 0 === gv || gv(), ev.delete(Sv), this.onEntityFieldChange(vv, zv, hv, {
            key: Sv,
            value: null
          })
        })), this.addDetacher(vv, (() => {
          for (const vv of ev.values()) vv();
          ev.clear()
        }))
      }
      setupScalarField(vv, zv, Pv, hv) {
        this.onEntityFieldChange(vv, zv, hv, zv[hv]);
        const Sv = this.listenForFutureChanges(Pv, hv, (Pv => {
          this.onEntityFieldChange(vv, zv, hv, Pv)
        }));
        this.addDetacher(vv, Sv)
      }
      addDetacher(vv, zv) {
        let Pv = this.detachers.get(vv);
        Pv || (Pv = [], this.detachers.set(vv, Pv)), Pv.push(zv)
      }
      detach(vv) {
        for (const Pv of null !== (zv = this.detachers.get(vv)) && void 0 !== zv ? zv : []) {
          var zv;
          Pv()
        }
        this.detachers.delete(vv)
      }
      listenForFutureChanges(vv, zv, Pv) {
        return vv.listen(zv, Pv, !1)
      }
      onEntityFieldChange(vv, zv, Pv, hv) {
        switch (Pv) {
          case "ridingVehicleEId": {
            this.promoteIfQueued(hv);
            const zv = this.vW.Rm.svv((0, QP.b)(vv));
            zv && (zv.ridingVehicleEId = hv);
            break
          }
          case "armour":
            this.handleArmourChange(vv, hv);
            break;
          case "followingEId":
            this.promoteIfQueued(hv), this.handleFollowingEIdChange(vv, zv, hv);
            break;
          case "xRotation":
          case "yRotation":
          case "zRotation":
            this.handleRotationChange(vv, Pv, hv);
            break;
          case "scale":
            this.handleScaleChange(vv, hv);
            break;
          case "baseRenderHeading":
            this.handleBaseRenderHeadingChange(vv, hv);
            break;
          case "followingOffset":
            this.handleFollowingOffsetChange(vv, hv);
            break;
          case "shouldMatchFollowingEntityRotation":
            this.handleShouldMatchFollowingEntityRotationChange(vv, hv);
            break;
          case "x":
          case "y":
          case "z":
            return void this.handlePositionChange(vv, Pv, hv)
        }(0, LP.d)().client.updateEntityField(vv, Pv, hv)
      }
      handleArmourChange(vv, zv) {
        var Pv, hv;
        const {
          key: Sv,
          value: ev
        } = zv;
        (0, jP.w)(vv, Sv, null !== (Pv = null === ev || void 0 === ev ? void 0 : ev.itemName) && void 0 !== Pv ? Pv : null, null !== (hv = null === ev || void 0 === ev ? void 0 : ev.enchantmentTier) && void 0 !== hv ? hv : null)
      }
      handleFollowingEIdChange(vv, zv, Pv) {
        const hv = (0, QP.b)(vv),
          Sv = hv === this.vW.sV;
        if (this.vW.Rm.bK(hv, this.vW.Rm.names.KF), Pv) this.vW.Rm.bK(hv, "smoothToServerPos"), this.vW.Rm.IK(hv, this.vW.Rm.names.KF, {
          Xw: (0, QP.b)(Pv),
          offset: Array.from(zv.followingOffset),
          zzv: zv.shouldMatchFollowingEntityRotation,
          gzv: !0,
          pzv: (vv, hv) => {
            if (DP().copy(vv, zv.followingOffset), zv.ridingVehicleEId === Pv) {
              const zv = (0, QP.b)(Pv),
                Sv = (0, LP.d)().getEntityHeading(zv, hv);
              DP().ep(vv, vv, DP().ZERO, Sv)
            }
          }
        });
        else if (!Sv) {
          this.vW.Rm.R7(hv, "smoothToServerPos") || this.vW.Rm.IK(hv, "smoothToServerPos");
          const vv = this.vW.Rm.getState(hv, "smoothToServerPos"),
            zv = this.vW.Rm.rA(hv).position;
          (0, BP.setServerPosition)(vv, zv[0], zv[1], zv[2])
        }
      }
      handleRotationChange(vv, zv, Pv) {
        const hv = "xRotation" === zv ? 0 : "yRotation" === zv ? 1 : 2;
        for (const Sv of (0, LP.d)().getFollowingEntities(vv)) {
          const vv = this.vW.Rm.getState(Sv, "meshRotation"),
            zv = this.vW.Rm.vzv(Sv);
          vv && zv.zzv && (vv.serverSetRotation[hv] = Pv)
        }
      }
      handleScaleChange(vv, zv) {
        const Pv = (0, QP.b)(vv);
        if (Xz.j.zC(`entityScale|${Pv}`, zv), Pv === this.vW.sV) {
          var hv;
          (0, LP.d)().removeFromEyeHeightCache(Pv);
          const vv = this.vW.Rm.I3(this.vW.sV),
            zv = null !== (hv = null === vv || void 0 === vv ? void 0 : vv.physicsState) && void 0 !== hv ? hv : {
              type: ZP.s.DEFAULT,
              tier: null
            };
          return void(0, LP.d)().updatePositionAndPhysics(this.vW.sV, zv, !1)
        }
        const Sv = (0, LP.d)().getLifeformType(Pv);
        if (null === Sv) return;
        const {
          physicsBodyWidth: ev,
          physicsBodyHeight: gv
        } = (0, yP.f)(zv, Sv);
        this.vW.Rm.Xvv(Pv, ev, gv, ev)
      }
      handleBaseRenderHeadingChange(vv, zv) {
        const Pv = this.vW.Rm.getState(vv, "meshRotation");
        Pv && (Pv.baseRenderRotation[1] = zv);
        for (const hv of (0, LP.d)().getFollowingEntities(vv)) {
          const vv = this.vW.Rm.getState(hv, "meshRotation"),
            Pv = this.vW.Rm.vzv(hv);
          vv && Pv.zzv && (vv.baseRenderRotation[1] = zv)
        }
      }
      handleFollowingOffsetChange(vv, zv) {
        const Pv = this.vW.Rm.vzv((0, QP.b)(vv));
        if (Pv && Pv.offset) {
          const vv = zv ? Array.from(zv) : DP().ZERO;
          Pv.offset[0] = vv[0], Pv.offset[1] = vv[1], Pv.offset[2] = vv[2]
        }
      }
      handleShouldMatchFollowingEntityRotationChange(vv, zv) {
        const Pv = this.vW.Rm.vzv((0, QP.b)(vv));
        Pv && (Pv.zzv = null === zv || void 0 === zv || zv)
      }
      handlePositionChange(vv, zv, Pv) {
        if (this.vW.Rm.R7(vv, "smoothToServerPos")) {
          const hv = this.vW.Rm.getState(vv, "smoothToServerPos");
          (0, BP.setServerPositionAxis)(hv, kP[zv], Pv)
        }
      }
      setupItemHandlers() {
        this.roomStateCallbacks.items.Km(((vv, zv) => {
          this.allItems[zv] = vv, (0, AP.k)(this.vW, zv, [vv.x, vv.y, vv.z], vv.id, {
            amount: vv.amount,
            attributes: JSON.parse(vv.attributes),
            kh: (0, uz.c)(this.vW).cantPickUpItem(zv),
            size: vv.size,
            predictedAt: (0, LP.d)().client.itemDropPrediction.onServerItemAdded(zv)
          });
          const Pv = this.createStateCallbacks(vv);
          for (const hv of TP(gP)) this.onItemFieldChange(zv, hv, vv[hv]), this.addDetacher(zv, this.listenForFutureChanges(Pv, hv, (vv => {
            this.onItemFieldChange(zv, hv, vv)
          })))
        })), this.roomStateCallbacks.items.HO(((vv, zv) => {
          delete this.allItems[zv], this.detach(zv), (0, LP.d)().client.itemDropPrediction.onServerItemRemoved(zv), this.vW.Rm.R7(zv, this.vW.Rm.names.itemState) && this.vW.Rm.deleteEntity(zv), (0, uz.c)(this.vW).disposeEntity(zv)
        }))
      }
      onItemFieldChange(vv, zv, Pv) {
        if (zv in kP) {
          if (this.vW.Rm.R7(vv, "itemState")) {
            const hv = this.vW.Rm.getState(vv, "smoothToServerPos");
            (0, BP.setServerPositionAxis)(hv, kP[zv], Pv), (0, LP.d)().client.itemDropPrediction.onServerItemMoved(vv)
          }
          return
        }
        if (!this.vW.Rm.R7(vv, "itemState")) return;
        const hv = this.vW.Rm.getState(vv, "itemState");
        "amount" === zv && Pv !== hv.amount && (hv.creationTime = Date.now()), hv[zv] = "attributes" === zv ? JSON.parse(Pv) : Pv
      }
      dispose() {
        if (!this.ea) {
          this.ea = !0, this.vW.off("beforeInputs", this.onFrame), this.vW.off("MT", this.xG), this.queuedSetups.clear(), this.promotedSetups.clear();
          for (const vv of this.deferredSetups.values()) Xz.j.unsubscribe(vv);
          this.deferredSetups.clear(), this.vW.Rm.bK(this.vW.sV, this.vW.Rm.names.KF);
          for (const vv in this.allItems) this.vW.Rm.deleteEntity(vv), delete this.allItems[vv];
          for (const vv of [...this.detachers.keys()]) this.detach(vv);
          (0, uz.c)(this.vW).clear();
          for (const vv of (0, LP.d)().client.iterateEntityIds())(0, LP.d)().client.disposeEntity(vv)
        }
      }
    }
    const oP = [0, 0, 0];

    function bP(vv) {
      if ("string" !== typeof vv) return;
      const zv = vv.indexOf("|"),
        Pv = -1 === zv ? vv : vv.slice(0, zv),
        hv = uP();
      return Object.hasOwn(hv, Pv) ? hv[Pv] : void 0
    }
    const rP = new Set;
    const kP = {
      x: 0,
      y: 1,
      z: 2
    };
    let XP = null;

    function uP() {
      return null !== XP || (XP = {
        ...Object.fromEntries(SP.i.map((vv => {
          const {
            Kl: zv
          } = (0, HP.d)(vv);
          return [vv, zv]
        }))),
        Pebble: aP.b,
        Snowball: aP.b,
        "Snowball Launcher": aP.b,
        "Reinforced Pebble": aP.b,
        Bullet: aP.b,
        "Reinforced Ball": aP.b,
        Ball: aP.b,
        Mango: aP.b,
        "Moonstone Orb": aP.b,
        ...Object.fromEntries(hP.y.map((vv => [(0, GP.Tb)(vv), aP.b]))),
        Arrow: aP.b,
        "Arrow of Speed": aP.b,
        "Arrow of Poison": aP.b,
        "Arrow of Slowness": aP.b,
        "Arrow of Weakness": aP.b,
        "Arrow of Knockback": aP.b,
        "Arrow of Strength": aP.b,
        "Arrow of Invisibility": aP.b,
        "Arrow of Jumping": aP.b,
        "Arrow of Defense": aP.b,
        "Arrow of Instant Healing": aP.b,
        "Arrow of Instant Damage": aP.b,
        "Arrow of Regeneration": aP.b,
        "Arrow of Haste": aP.b,
        "Arrow of Shield": aP.b,
        "Arrow of Double Jump": aP.b,
        "Arrow of Heat Resistance": aP.b,
        "Arrow of X-Ray Vision": aP.b,
        "Arrow of Mining Yield": aP.b,
        "Arrow of Brain Rot": aP.b,
        "Arrow of Milk": aP.b,
        Fireball: aP.b,
        "Bouncy Bomb": aP.b,
        RPG: aP.b,
        "Obby RPG": aP.b,
        "Super RPG": aP.b,
        "Grenade Launcher": aP.b,
        Iceball: aP.b,
        Coconut: aP.b,
        "Splash Speed Potion": aP.b,
        "Splash Defense Potion": aP.b,
        "Splash Strength Potion": aP.b,
        "Splash Invisibility Potion": aP.b,
        "Splash Jump Potion": aP.b,
        "Splash Knockback Potion": aP.b,
        "Splash Poison Potion": aP.b,
        "Splash Speed Potion II": aP.b,
        "Splash Defense Potion II": aP.b,
        "Splash Strength Potion II": aP.b,
        "Splash Jump Potion II": aP.b,
        "Splash Knockback Potion II": aP.b,
        "Splash Poison Potion II": aP.b,
        "Splash Slowness Potion": aP.b,
        "Splash Slowness Potion II": aP.b,
        "Splash Weakness Potion": aP.b,
        "Splash Weakness Potion II": aP.b,
        "Splash Milk Potion": aP.b,
        "Splash Instant Damage Potion": aP.b,
        "Splash Instant Damage Potion II": aP.b,
        "Splash Instant Healing Potion": aP.b,
        "Splash Instant Healing Potion II": aP.b,
        "Splash Regeneration Potion": aP.b,
        "Splash Regeneration Potion II": aP.b,
        "Splash Haste Potion": aP.b,
        "Splash Haste Potion II": aP.b,
        "Splash Shield Potion": aP.b,
        "Splash Shield Potion II": aP.b,
        "Splash Double Jump Potion": aP.b,
        "Splash Heat Resistance Potion": aP.b,
        "Splash X-Ray Vision Potion": aP.b,
        "Splash Mining Yield Potion": aP.b,
        "Splash Mining Yield Potion II": aP.b,
        "Splash Brain Rot Potion": aP.b,
        "Yellow Paintball Gun": aP.b,
        "White Paintball Gun": aP.b,
        "Red Paintball Gun": aP.b,
        "Purple Paintball Gun": aP.b,
        "Pink Paintball Gun": aP.b,
        "Orange Paintball Gun": aP.b,
        "Magenta Paintball Gun": aP.b,
        "Lime Paintball Gun": aP.b,
        "Light Gray Paintball Gun": aP.b,
        "Light Blue Paintball Gun": aP.b,
        "Green Paintball Gun": aP.b,
        "Gray Paintball Gun": aP.b,
        "Cyan Paintball Gun": aP.b,
        "Brown Paintball Gun": aP.b,
        "Blue Paintball Gun": aP.b,
        "Black Paintball Gun": aP.b,
        "Yellow Heavy Paintball Gun": aP.b,
        "White Heavy Paintball Gun": aP.b,
        "Red Heavy Paintball Gun": aP.b,
        "Purple Heavy Paintball Gun": aP.b,
        "Pink Heavy Paintball Gun": aP.b,
        "Orange Heavy Paintball Gun": aP.b,
        "Magenta Heavy Paintball Gun": aP.b,
        "Lime Heavy Paintball Gun": aP.b,
        "Light Gray Heavy Paintball Gun": aP.b,
        "Light Blue Heavy Paintball Gun": aP.b,
        "Green Heavy Paintball Gun": aP.b,
        "Gray Heavy Paintball Gun": aP.b,
        "Cyan Heavy Paintball Gun": aP.b,
        "Brown Heavy Paintball Gun": aP.b,
        "Blue Heavy Paintball Gun": aP.b,
        "Black Heavy Paintball Gun": aP.b,
        "Toxin Ball": aP.b,
        "Splash Aura XP Potion": aP.b,
        "Splash Aura XP Potion II": aP.b,
        "Arrow of Aura XP": aP.b,
        Firecracker: aP.b,
        "Rainbow Firecracker": aP.b,
        "White Firecracker": aP.b,
        "Orange Firecracker": aP.b,
        "Magenta Firecracker": aP.b,
        "Light Blue Firecracker": aP.b,
        "Yellow Firecracker": aP.b,
        "Lime Firecracker": aP.b,
        "Pink Firecracker": aP.b,
        "Gray Firecracker": aP.b,
        "Light Gray Firecracker": aP.b,
        "Cyan Firecracker": aP.b,
        "Purple Firecracker": aP.b,
        "Blue Firecracker": aP.b,
        "Brown Firecracker": aP.b,
        "Green Firecracker": aP.b,
        "Red Firecracker": aP.b,
        "Black Firecracker": aP.b,
        "Firecracker Pebble": aP.b,
        "Rainbow Firecracker Pebble": aP.b,
        "White Firecracker Pebble": aP.b,
        "Orange Firecracker Pebble": aP.b,
        "Magenta Firecracker Pebble": aP.b,
        "Light Blue Firecracker Pebble": aP.b,
        "Yellow Firecracker Pebble": aP.b,
        "Lime Firecracker Pebble": aP.b,
        "Pink Firecracker Pebble": aP.b,
        "Gray Firecracker Pebble": aP.b,
        "Light Gray Firecracker Pebble": aP.b,
        "Cyan Firecracker Pebble": aP.b,
        "Purple Firecracker Pebble": aP.b,
        "Blue Firecracker Pebble": aP.b,
        "Brown Firecracker Pebble": aP.b,
        "Green Firecracker Pebble": aP.b,
        "Red Firecracker Pebble": aP.b,
        "Black Firecracker Pebble": aP.b,
        "Blinding Pebble": aP.b,
        Poop: aP.b,
        "Wood Boomerang": aP.b,
        "Stone Boomerang": aP.b,
        "Iron Boomerang": aP.b,
        "Gold Boomerang": aP.b,
        "Diamond Boomerang": aP.b,
        "Amethite Boomerang": aP.b,
        "Magmasteel Boomerang": aP.b,
        "Rubellite Boomerang": aP.b,
        "Serpentite Boomerang": aP.b,
        "Moonstone Boomerang": aP.b,
        "67 Base Projectile": aP.b,
        "67 Boosted Projectile": aP.b,
        "Capitano Grenade": aP.b,
        "Scatter Pellet": aP.b,
        "Lucky Bomb": aP.b,
        "Unlucky Bomb": aP.b,
        "Swap Orb": aP.b,
        Mesh: xP,
        AudioEntity: qP
      }), XP
    }
  },
  38509: (vv, zv, Pv) => {
    Pv.d(zv, {
      b: () => ev,
      d: () => gv
    });
    var hv = Pv(626),
      Sv = Pv(37255);
    const ev = 4e4;
    class gv {
      constructor() {
        let vv = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Date.now;
        this.now = vv, this.editedAt = new Map, this.lastChunkX = NaN, this.lastChunkY = NaN, this.lastChunkZ = NaN, this.lastChunkId = ""
      }
      noteEdit(vv, zv, Pv) {
        const ev = (0, hv.Y)(vv),
          gv = (0, hv.Y)(zv),
          pv = (0, hv.Y)(Pv),
          dv = this.now();
        if (ev !== this.lastChunkX || gv !== this.lastChunkY || pv !== this.lastChunkZ) {
          this.lastChunkX = ev, this.lastChunkY = gv, this.lastChunkZ = pv, this.lastChunkId = (0, Sv.c)(ev, gv, pv), this.editedAt.delete(this.lastChunkId), this.editedAt.set(this.lastChunkId, dv);
          for (const [vv, zv] of this.editedAt) {
            if (zv >= dv - 3e5) break;
            this.editedAt.delete(vv)
          }
        } else this.editedAt.set(this.lastChunkId, dv)
      }
      chunksEditedSince(vv) {
        const zv = [];
        for (const [Pv, hv] of this.editedAt) hv >= vv && zv.push(Pv);
        return zv
      }
    }
  },
  38610: (vv, zv, Pv) => {
    Pv.d(zv, {
      e: () => lz,
      f: () => Zz,
      i: () => Kz,
      j: () => Az
    });
    var hv = Pv(3438),
      Sv = Pv(8467),
      ev = Pv(36190),
      gv = Pv(1426),
      pv = Pv(36269),
      dv = Pv(38547),
      Nv = Pv(38485),
      lv = Pv(3539),
      Tv = Pv(37402),
      Wv = Pv(1226),
      wv = Pv(302),
      av = Pv(26),
      sv = Pv(1903),
      Cv = Pv(73),
      iv = Pv(39),
      cv = Pv(1934),
      Gv = Pv(1855),
      mv = Pv(2757);
    class jv {
      constructor(vv) {
        this.storeForMs = vv, this.clicks = new mv.d
      }
      click() {
        this.clicks.enqueue(Date.now());
        const vv = Date.now() - this.storeForMs;
        for (; this.clicks.size > 0 && this.clicks.peek() < vv;) this.clicks.dequeue()
      }
      getNumClicksInMs(vv) {
        let zv = 0;
        return this.clicks.forEach((Pv => {
          Pv > Date.now() - vv && zv++
        })), zv
      }
      getMaxClickSeparationInMs(vv) {
        if (0 === this.clicks.size) return this.storeForMs;
        let zv = 0,
          Pv = Date.now() - vv;
        this.clicks.forEach((hv => {
          hv < Date.now() - vv || (zv = Math.max(zv, Math.abs(hv - Pv)), Pv = hv)
        }));
        const hv = Math.abs(Date.now() - Pv);
        return Math.max(zv, hv)
      }
    }
    class fv {
      constructor(vv) {
        this.storeForMs = vv, this.clickDownDurations = new mv.d
      }
      registerClickDownDuration(vv) {
        this.clickDownDurations.enqueue({
          dur: vv,
          atTime: Date.now()
        });
        const zv = Date.now() - this.storeForMs;
        for (; this.clickDownDurations.size > 0 && this.clickDownDurations.peek().atTime < zv;) this.clickDownDurations.dequeue()
      }
      clickDownDurationsCheck(vv) {
        if (vv > this.storeForMs) return console.error("overDuration is greater than storeForMs"), "0:0";
        let zv = 0,
          Pv = 0;
        return this.clickDownDurations.forEach((hv => {
          hv.atTime > Date.now() - vv && (zv++, Pv = Math.max(Pv, hv.dur))
        })), `${zv}:${Pv}`
      }
    }
    var Fv = Pv(36031),
      Yv = Pv(38613),
      nv = Pv(22),
      Ov = Pv(2599),
      Dv = Pv(1306),
      Kv = Pv(38515),
      Vv = Pv(4190),
      Uv = Pv(108),
      Rv = Pv(37687),
      xv = Pv(37905),
      tv = Pv(626),
      qv = Pv(36027),
      Iv = Pv(11),
      Qv = Pv(9101),
      Zv = Pv(1209),
      Av = Pv(185),
      Lv = Pv(38615),
      Hv = Pv(38620),
      Mv = Pv(37722),
      yv = Pv(38631),
      Bv = Pv(37626),
      Jv = Pv(3142),
      Ev = Pv(1610),
      ov = Pv(36137),
      bv = Pv(2682),
      rv = Pv(38626),
      kv = Pv(38629),
      Xv = Pv(37465);
    const uv = {
      forward: "freeCamForward",
      backward: "freeCamBackward",
      left: "freeCamLeft",
      right: "freeCamRight",
      jump: "freeCamUp",
      crouch: "freeCamDown"
    };

    function vz() {
      var vv, zv;
      return !(null === (vv = (0, Ov.d)().client) || void 0 === vv || null === (zv = vv.freeCameraController) || void 0 === zv || !zv.movesFly())
    }

    function zz(vv) {
      const zv = vv.on.bind(vv);
      vv.on = (vv, Pv) => {
        cv.I.has(vv) ? zv(vv, Pv) : zv(vv, (zv => {
          var hv;
          return null !== (hv = (0, Ov.d)().client) && void 0 !== hv && hv.isReplayMode() ? function(vv) {
            return vv in uv
          }(vv) && vz() ? Pv(zv) : void 0 : Pv(zv)
        }))
      }
    }
    const Pz = 5e3,
      hz = 1;
    let Sz, ez = hz,
      gz = 0;
    const pz = !0;
    let dz = pz;
    sv.c.subscribe("_ignoreBasicBoards", (vv => {
      dz = vv
    })), (0, hv.onGameReset)((() => {
      dz = pz
    }));
    let Nz = null;
    const lz = () => Nz;
    let Tz, Wz, wz;
    var az, sz, Cz, iz, cz, Gz, mz, jz, fz;
    const Fz = [1, 26, 0, "h", 3, 16, "g", "e", 65, "d", 8, 255, "length", "b", 81, 41, 182, "undefined", void 0, "c", 2, 63, 6, "fromCodePoint", 7, 12, "push", "a", 98, 160, 9, 91, 8191, 88, 13, 14, !1, 5, 4, 204, 38, "i", "f", 165, !0, 124, 77, 68, 121, 111, null, 15, 118, 24, 194, 112, 123, 45, 144, 114, 100, 30, 60, 10, 132];

    function Yz(...vv) {
      return vv[Fz[12]] = Fz[0], typeof az[vv[Fz[2]]] === Fz[17] ? az[vv[Fz[2]]] = function(...vv) {
        for (Dz(vv[Fz[12]] = Fz[0], vv[Fz[0]] = 'f2"c8|zqVy3g/1.,&s}xrA:w*;O=UN$XFQhSEv`7P!T9YuW{dJe0In)45?bMaZ%BtC^l>D([@p_<6]Lk~Ho#+GKjRim', vv[Fz[1]] = "" + (vv[Fz[2]] || ""), vv[Fz[4]] = vv[Fz[1]].length, vv[Fz[9]] = [], vv[Fz[7]] = Fz[2], vv[Fz[8]] = Fz[2], vv[Fz[6]] = -Fz[0]), vv[Fz[3]] = Fz[2]; vv[Fz[3]] < vv[Fz[4]]; vv[Fz[3]]++)
          if (vv[-Fz[5]] = vv[Fz[0]].indexOf(vv[Fz[1]][vv[Fz[3]]]), vv[-Fz[5]] !== -Fz[0])
            if (vv[Fz[6]] < Fz[2]) vv[Fz[6]] = vv[-Fz[5]];
            else {
              Dz(vv[Fz[6]] += vv[-Fz[5]] * Fz[31], vv[Fz[7]] |= vv[Fz[6]] << vv[Fz[8]], vv[Fz[8]] += (vv[Fz[6]] & Fz[32]) > Fz[33] ? Fz[34] : Fz[35]);
              do {
                Dz(vv[Fz[9]].push(vv[Fz[7]] & Fz[11]), vv[Fz[7]] >>= Fz[10], vv[Fz[8]] -= Fz[10])
              } while (vv[Fz[8]] > Fz[24]);
              vv[Fz[6]] = -Fz[0]
            } return vv[Fz[6]] > -Fz[0] && vv[Fz[9]].push((vv[Fz[7]] | vv[Fz[6]] << vv[Fz[8]]) & Fz[11]), nz(vv[Fz[9]])
      }(sz[vv[Fz[2]]]) : az[vv[Fz[2]]]
    }

    function nz(vv) {
      return typeof iz !== Fz[17] && iz ? (new iz).decode(new cz(vv)) : typeof Gz !== Fz[17] && Gz ? Gz.from(vv).toString("utf-8") : fz(vv)
    }

    function Oz() {}

    function Dz() {
      Dz = function() {}
    }

    function Kz(vv) {
      function zv() {
        return vv.Rm.Avv(vv.sV)
      }
      zz(vv.inputs.down), zz(vv.inputs.up);
      for (const hv of ["forward", "backward", "left", "right", "sprint", "jump", "crouch"]) {
        const zv = (zv, Pv) => {
          var Sv, ev;
          if (vz()) {
            var gv;
            const Sv = uv[hv];
            var pv, dv;
            if (Sv) null === (pv = (0, Ov.d)().client) || void 0 === pv || null === (dv = pv.freeCameraController) || void 0 === dv || dv.handlefreeCamKeyPress(Sv, zv, Pv);
            return void(Pv || null !== (gv = (0, Ov.d)().client) && void 0 !== gv && gv.isReplayMode() || (vv.Rm.Bvv()[hv] = !1))
          }
          if (null !== (Sv = (0, Ov.d)().client) && void 0 !== Sv && null !== (ev = Sv.freeCameraController) && void 0 !== ev && ev.isKeyPressOverriden(zv)) return;
          vv.Rm.Bvv()[hv] = Pv
        };
        vv.inputs.down.on(hv, (vv => zv(vv, !0))), vv.inputs.up.on(hv, (vv => zv(vv, !1)))
      }
      vv.inputs.down.on("crouch", (() => {
        if (vz()) return;
        if (!vv.Om.canCrouch) return;
        const zv = vv.Rm.Bvv();
        nv.c.get("clientEscMenuOptions").crouchIsToggle && (zv.crouchToggled = !zv.crouchToggled && !zv.padSneakToggled), zv.padSneakToggled = !1
      }));
      const Pv = () => {
        const vv = zv();
        vv.isGun() && vv.inaccuracyCalculator.jump()
      };
      vv.inputs.down.on("jump", (vv => {
        vz() || (Pv(), Tz(vv))
      }));
      for (const hv of cv.n) vv.inputs.down.on(hv, (vv => {
        var zv, Pv;
        null !== (zv = (0, Ov.d)().client) && void 0 !== zv && null !== (Pv = zv.freeCameraController) && void 0 !== Pv && Pv.handlefreeCamKeyPress(hv, vv, !0) && (vv.preventDefault(), vv.stopPropagation())
      })), vv.inputs.up.on(hv, (vv => {
        var zv, Pv;
        null !== (zv = (0, Ov.d)().client) && void 0 !== zv && null !== (Pv = zv.freeCameraController) && void 0 !== Pv && Pv.handlefreeCamKeyPress(hv, vv, !1) && (vv.preventDefault(), vv.stopPropagation())
      }));
      vv.inputs.down.on("recordGame", (() => {
        var vv, zv;
        null === (vv = (0, Ov.d)().client) || void 0 === vv || null === (zv = vv.gameRecorder) || void 0 === zv || zv.toggleRecording()
      })), vv.inputs.down.on("recordClip", (() => {
        var vv, zv;
        (0, Fv.b)() || null === (vv = (0, Ov.d)().client) || void 0 === vv || null === (zv = vv.gameRecorder) || void 0 === zv || zv.saveClip()
      }));
      for (const hv of cv.I) vv.inputs.down.on(hv, (() => {
        var vv;
        if ((0, Yv.c)()) return;
        if ("replayViewerOpen" === hv) return void av.j.zC("replayViewer|requested", "toggle");
        const zv = null === (vv = (0, Ov.d)().client) || void 0 === vv ? void 0 : vv.gameReplayer;
        ((0, Fv.b)() || null !== zv && void 0 !== zv && zv.isReplayMode()) && (null === zv || void 0 === zv || zv.handleAction(hv))
      }));
      const gv = new jv(3e4),
        Tv = new fv(4e4);
      let iv = 0;
      const mv = vv => {
          let zv = 0,
            Pv = null;
          const hv = zv => null !== zv && zv === Pv && (Pv = null, vv(), !0);
          return {
            press: () => (zv++, (0, Lv.c)() || (hv(Pv), Pv = zv), zv),
            owns: vv => vv === Pv,
            release: hv
          }
        },
        Vv = (vv, Pv) => {
          Pv && Az(Wv.d.TouchDownFirePrimary), vv ? Qv() : ((0, xv.g)(), zv().Azv()), Pv || Az(Wv.d.DownFirePrimary), Zz(!0), gv.click();
          const Sv = gv.getMaxClickSeparationInMs(3e4) < 1e3 / 30,
            ev = gv.getMaxClickSeparationInMs(1e4) < 20,
            pv = gv.getMaxClickSeparationInMs(4e3) < 1e3 / 70;
          if (Sv || ev || pv) {
            let vv;
            if (Sv) vv = 30;
            else if (ev) vv = 50;
            else {
              if (!pv) throw new Error("???");
              vv = 70
            }(0, hv.sendColyMessage)(lv.Sj, vv)
          }
        },
        Uv = mv((() => {
          const vv = Date.now() - iv;
          Tv.registerClickDownDuration(vv), zv().Izv(), Az(Wv.d.UpFirePrimary), Zz(!1);
          const Pv = Tv.clickDownDurationsCheck(4e4);
          (0, hv.sendColyMessage)(lv.mg, Pv)
        }));
      let Rv = 0;
      vv.inputs.down.on("primary-fire", (function(vv) {
        Rv = Uv.press(), Uv.owns(Rv) && (iv = Date.now(), Math.abs(performance.now() - vv.timeStamp) > 5e3 || (Vv(vv.altKey, "changedTouches" in vv), Tz(vv)))
      })), vv.inputs.up.on("primary-fire", (function(vv) {
        Uv.release(Rv) && Tz(vv, !0)
      }));
      const tv = () => {
          zv().qdv(), Az(Wv.d.DownFireSecondary), Zz(!0), vv.N9 && !vv.N9.position && (0, Nv.h)()
        },
        qv = mv((() => {
          zv().qzv(), Az(Wv.d.UpFireSecondary), Zz(!1)
        }));
      let Iv = 0;
      vv.inputs.down.on("alt-fire", (function(vv) {
        Iv = qv.press(), qv.owns(Iv) && (tv(), Tz(vv))
      })), vv.inputs.up.on("alt-fire", (function(vv) {
        qv.release(Iv) && Tz(vv, !0)
      }));
      const Qv = () => zv().Adv();
      vv.inputs.down.on("mid-fire", (() => {
        (0, Lv.c)() || Qv()
      }));
      const yv = vv => {
          (0, hv.sendColyMessage)(lv.xh, vv, !0)
        },
        Sz = vv => {
          (0, hv.sendColyMessage)(lv.Bh, {
            Kp: vv,
            Vp: pz()
          }, !0)
        };
      for (const hv of ["SpecialAction1", "SpecialAction2"]) vv.inputs.down.on(hv, (() => {
        yv(hv)
      })), vv.inputs.up.on(hv, (() => {
        Sz(hv)
      }));
      const gz = () => {
        const vv = zv();
        vv.isGun() && vv.reload(Date.now())
      };
      vv.inputs.down.on("ReloadGun", gz);
      const pz = () => {
        let zv = "a";
        return vv.physics.testSolid.toString().includes("GW") || (zv = "b"), zv
      };
      vv.inputs.down.on("OpenInventory", (vv => {
        vv.preventDefault(), (0, Ev.v)(vv, "inventory", (0, Hv.b)((0, Ov.g)()))
      })), vv.inputs.bind("ShiftHeld", "ShiftLeft", "ShiftRight");
      const dz = vv => {
        av.j.zC("DropItemKeyPressed", vv)
      };
      vv.inputs.down.on("DropItem", (() => {
        dz(vv.Rm.Bvv().crouch)
      })), vv.inputs.down.on("OpenShop", (zv => {
        (0, Fv.b)() || "inGame" === nv.c.get("gameState") && (0, Ev.u)(zv, wv.o.SHOP, !(0, Sv.b)(vv.Om.shopInfo))
      })), vv.inputs.down.on("OpenLobbyLeaderboard", (zv => {
        (0, Fv.b)() || "inGame" === nv.c.get("gameState") && (0, Ev.u)(zv, wv.o.LOBBY_LEADERBOARD, (0, kv.d)(vv.Om))
      })), vv.inputs.down.on("HideUi", (() => {
        av.j.zC("showUi", !1)
      })), vv.inputs.up.on("HideUi", (() => {
        av.j.zC("showUi", !0)
      }));
      const lz = vv => {
        0 === vv && (vv = 10), av.j.zC("setSelectedInventorySlotI", vv - 1), av.j.zC("numkeyPressed", vv)
      };
      for (let hv = 1; hv <= 10; hv++) vv.inputs.down.on("HotBarSlot" + hv.toString(), (() => {
        lz(hv)
      }));
      vv.inputs.down.on("OpenTasksAndLeaderboard", (zv => {
        const Pv = (0, ov.m)();
        Pv ? (0, Ev.w)(zv, !0, Pv) : (0, Ev.v)(zv, "retentionFeatures", !(!vv.Om._tasks && !vv.Om._availableLeaderboards))
      })), vv.inputs.down.on("OpenCodeEditor", (zv => {
        (0, Ev.w)(zv, (0, Kv.c)((0, Dv.c)()), (() => {
          av.j.zC("EditLobbyCode", vv.Rm.yG(vv.sV).map(Math.floor))
        }))
      })), vv.inputs.bind("ToggleFullCoordinateOverlay", "F3"), vv.inputs.down.on("ToggleFullCoordinateOverlay", (() => {
        av.j.zC("toggleFullCoordinateOverlay")
      }));
      const wz = () => {
        (0, Ov.d)().client.cameraController.swapCameraZoom()
      };
      vv.inputs.down.on("SwapCameraZoom", wz), vv.inputs.down.on("OpenInviteLink", (vv => {
        (0, Ev.v)(vv, "inviteLink", Cv.featureFlags.canUseInviteLinks)
      })), vv.inputs.bind("Y", "KeyY"), vv.inputs.down.on("Y", (vv => {
        (0, Fv.b)() || av.j.zC("YKeyPressed")
      })), vv.inputs.bind("X", "KeyX"), vv.inputs.down.on("X", (vv => {
        (0, Fv.b)() || av.j.zC("XKeyPressed")
      })), vv.inputs.down.on("OpenEmoteWheel", (() => {
        av.j.zC("requestEmoteWheelHoldOpen")
      })), vv.inputs.up.on("OpenEmoteWheel", (() => {
        av.j.zC("requestEmoteWheelHoldRelease")
      })), vv.inputs.down.on("Zoom", (() => {
        if ("inGame" === nv.c.get("gameState")) {
          vv.Rm.getState(vv.sV, "playerCameraAdjustment").zoomKeyPressed = !0, (0, Ov.d)().client.cameraController.handleZoomKeyPressed()
        }
      })), vv.inputs.up.on("Zoom", (() => {
        vv.Rm.getState(vv.sV, "playerCameraAdjustment").zoomKeyPressed = !1
      })), Vz();
      const az = vv => function() {
        return Wz(), vv(...arguments)
      };

      function sz(vv) {
        "inGame" !== nv.c.get("gameState") || (0, Ev.p)() || (av.j.zC("ctrlCrouchWithoutFullscreen"), vv.preventDefault())
      }
      Nz = {
        primaryFireDown: az((() => {
          const vv = Uv.press();
          return Uv.owns(vv) && (iv = Date.now(), Vv(!1, !1)), vv
        })),
        primaryFireUp: az((vv => {
          Uv.release(vv)
        })),
        altFireDown: az((() => {
          const vv = qv.press();
          return qv.owns(vv) && tv(), vv
        })),
        altFireUp: az((vv => {
          qv.release(vv)
        })),
        jumpDown: az(Pv),
        specialActionDown: az(yv),
        specialActionUp: az(Sz),
        reloadGun: az(gz),
        dropItem: az(dz),
        swapCameraZoom: az(wz),
        pickBlock: az(Qv)
      }, vv.inputs.down.on("ctrlCrouch", sz), vv.inputs.up.on("ctrlCrouch", sz), vv.inputs.bind("ctrlCrouch", "ControlLeft");
      const Cz = vv => {
        "inGame" === nv.c.get("gameState") && vv.ctrlKey && !(0, Ev.p)() && vv.preventDefault()
      };
      document.addEventListener("keydown", Cz), document.addEventListener("keyup", Cz), document.addEventListener("keypress", Cz), vv.inputs.bind("Alt", "AltLeft", "AltRight"), vv.inputs.down.on("Alt", (vv => {
        vv.preventDefault()
      }));
      const iz = zv => (0, Bv.i)(vv, zv),
        cz = zv => (0, Bv.j)(vv, zv),
        Gz = [0, 0, 0],
        mz = [0, 0, 1];
      vv.on("afterRender", (zv => {
        (0, ev.f)(vv.camera.heading), (0, Bv.l)(vv, Gz, mz), (0, Ov.d)().client.triggerGameCallback("onAfterRender", zv, {
          cameraHeading: vv.camera.heading,
          cameraPitch: vv.camera.pitch,
          cameraPosition: Gz,
          cameraDirection: mz,
          tanHalfFovX: (0, Bv.d)(vv),
          tanHalfFovY: Math.tan(vv.Ma.Wy().fov / 2),
          screenBandPct: {
            x: Jv.e,
            y: (0, Jv.n)()
          },
          projectWorldPosToScreenPos: iz,
          projectWorldPosToViewport: cz
        })
      })), (0, bv.o)("look") && (vv.camera.Mq = (0, rv.i)("js"), vv.inputs.bI = rv.e), (0, bv.o)("remesh") && (0, Xv.i)(vv), vv.on("beforeInputs", (() => {
        if ((0, Yv.c)()) return vv.inputs.FQ.dx = 0, void(vv.inputs.FQ.dy = 0);
        if (vv.camera.FQ.dx += vv.inputs.FQ.dx, vv.camera.FQ.dy += vv.inputs.FQ.dy, 0 !== vv.inputs.FQ.dx || 0 !== vv.inputs.FQ.dy) {
          vv.Rm.getState(vv.sV, "playerCameraAdjustment").lastPointerMove = Date.now()
        }
        vv.inputs.FQ.dx = 0, vv.inputs.FQ.dy = 0
      }));
      let jz = 0;
      vv.on("MT", (function(zv) {
        av.j.zC("noaTick", zv);
        const Pv = (0, Ov.d)().client;
        if (Pv.triggerGameCallback("MT", zv), Pv.isClientGameSessionActive()) try {
          dv.e.MT(zv)
        } catch (gv) {
          console.error("Error ticking audio entities", gv)
        }
        if (!vv.Rm.Qvv(vv.sV).isAlive) return;
        Date.now() - jz > 9e3 && (! function() {
          const vv = (0, Ov.g)();
          "number" === typeof vv.Om.speedMultiplier && "number" === typeof vv.Om.jumpAmount && (0, hv.sendColyMessage)(lv.Vh, {
            cl: (0, Zv.g)(vv.Om.speedMultiplier),
            Gl: (0, Zv.d)(vv.Om.jumpAmount),
            ml: (0, Zv.g)(vv.Om.crouchingSpeed),
            jl: (0, Zv.g)(vv.Om.walkingSpeed),
            fl: (0, Zv.g)(vv.Om.runningSpeed),
            Fl: (0, Zv.d)(vv.y5),
            Yl: vv.Rm.I3(vv.sV).jumpForce,
            nl: vv.Rm.rA(1).width,
            Ol: vv.Rm.rA(1).height,
            Dl: vv.Rm.vx(1).Dl
          }, !0)
        }(), jz = Date.now());
        const Sv = vv.Rm.Bvv();
        if ((Sv.jump || Sv.forward || Sv.backward || Sv.left || Sv.right || Sv.sprint) && av.j.zC("usedKeyboard"), vv.Rm.Gvv(vv.sV) && !0 === vv.Om.canPickUpItems) {
          const zv = vv.Rm.yG(vv.sV),
            Pv = (0, Gv.o)(ez),
            Sv = (0, Gv.r)(ez),
            ev = [zv[0] - Pv, zv[1] - .6 * Sv, zv[2] - Pv],
            gv = [zv[0] + Pv, zv[1] + Av.f.lG + .6 * Sv, zv[2] + Pv],
            dv = vv.Rm.Igv({
              base: ev,
              max: gv
            }, vv.Rm.names.autoRotate),
            Tv = vv => {
              const zv = Av.f.droppedBlockSize / 2;
              return [0, 1, 2].every((Pv => vv[Pv] >= ev[Pv] - zv && vv[Pv] <= gv[Pv] + zv))
            },
            {
              itemDropPrediction: Wv
            } = (0, Ov.d)().client,
            wv = hv.offlineInputReplay.holdsInput();
          if (dv.length > 0)
            for (const av of dv) {
              const zv = vv.Rm.getState(av, "itemState");
              if (void 0 === zv || Date.now() - zv.creationTime < 500) continue;
              let Pv = av,
                Sv = null;
              if (zv.kh) {
                const vv = Wv.pickupTarget(av, Tv, wv);
                if (null === vv) continue;
                ({
                  oN: Pv,
                  kN: Sv
                } = vv)
              }
              const ev = vv.Rm.getState(Pv, "itemState");
              if (ev.kh && null === Sv) continue;
              let gv = 0,
                dv = null,
                sv = !1;
              if (0 === ev.amount) sv = !0;
              else {
                const {
                  amountPickedUp: zv
                } = vv.Rm.ivv(vv.sV).pickUpItem({
                  name: ev.name,
                  typeObj: ev.typeObj,
                  amount: ev.amount,
                  attributes: ev.attributes
                });
                if (gv = zv, 0 === gv) continue;
                dv = Mv.b.pickUp(ev, gv), ev.amount -= gv, ev.amount < 0 ? console.error("Picking up led to less than 0 of item!") : 0 === ev.amount ? sv = !0 : ev.creationTime = Date.now() + Pz
              }
              const Cv = (0, Ov.d)().client.inventoryPrediction.record(dv);
              (0, hv.sendColyMessage)(lv.rh, {
                oN: null === Sv ? Pv : "",
                bN: gv,
                rN: Nv.f,
                lg: Cv,
                kN: Sv
              }, !0), sv && (wv && Wv.onPickedUpOffline(Pv, Cv, Sv), null === Sv && vv.Rm.deleteEntity(Pv));
              pv.c.play("pickUp", Av.f.pickupSoundVol).rate(1 + Math.random() * Av.f.pickupSoundRateVariation)
            }
        }
        if (!vv.Rm.Nvv(vv.sV)) return;
        const ev = vv.inputs.FQ.zvv;
        if (0 !== ev) {
          const zv = ev > 0 ? 1 : -1;
          vv.inputs.state["mid-fire"] || vv.inputs.state.Alt || !vv.Om.useInventory ? (vv.inputs.state["mid-fire"] && av.j.zC("requestEmoteWheelClose"), (0, Ov.d)().client.cameraController.handleScrollZoom(zv)) : av.j.zC("ScrollInventorySlot", zv)
        }
      })), sv.c.subscribe("droppedItemScale", (vv => {
        ez = "number" === typeof vv && isFinite(vv) ? vv : hz
      }))
    }

    function Vz() {
      const vv = (0, Ov.g)();
      if (vv)
        for (const zv in cv.z) {
          vv.inputs.unbind(zv);
          for (const Pv of cv.z[zv]) vv.inputs.bind(zv, Pv)
        }
    }
    Dz(az = {}, sz = ['ONBJDHab~}H8A@aTjs6|&`T"Ex!*@,s=GXwUhMf', "&zlNHDZ2|)4S?&q;LuGX9o`bBn1>?vqv`vs<eJ12", "hd3=[_1;BaI^W1K!MdZ3/", "q>`6=MNNF/", "<zpzs4A!3sK]&[S;28I_reh/N}esf=e7T_>_PJP$%g", "OC^F@EfV1.9DyHI=CU46j[Jq{}AkIc8sS9%q", 'FwqIIvjs^?(^~#sr[g"', "3FlFhMu?:xIBwo;w0CO0|_]q5s=cRc&7*,CzZaC!T%Ur2", "`dt)qhOVM5j_&[,7^X+_+D>$&}OC/c8X?rL6^W>>)b`cM.a$FwH0(@Nqq", 'r}7yI(,1}yc1k.FTuwg]#`Qqf?fQ:Z7;"Szq/`{2', "j.~)^%P$<ge%6[x!L0KU3eCwqb{4Mbcvn?W6%_vScty0.|$s!_}F_`{2", "nC&0/402", 'l0@p[hhKd^3@Q&:URc<n$p|1br_lR*)=WPG_W]U}YnAbzH]x~c{p_d$"', 'cF=@iG:WA1"vg.{=}zc', "dhx]Y>Xq[bnX4ou=~r&zKGW~{BU*,ov;5d83PSqq&y.$kOj:+rk6yaHGaV4", "g_[pi6v18?{gTv&r", 'T?]Uqn"*"y?(j"]O=[$qAIXHk,2yr,QTPOdz,Ew2FAv4k"TXVJX)*{f', "op}=F>=SA)(~f", "]URJVHM{&a3&E[|;Y0`pe0HS71i]$eyXlya3(E/Ie,l]c=,rZX+O3H{1NMxo2", "WCXI%hP/QyJDI@NS7dhNFM?ws/z0.|AU:r=@QL{{F/{X1+S$(pD_i`VE{V", "GMRySM?w+xe5]di!1FLUcdcBA1&w#`hs$aRp}#t/rygw2", '!r,6x#1;6g"{V,Px.2', "|/VQ^_I_T.", 'Z.UN6eYtF^i|X"&7:?Q$~411(x^pn@G=x?O=e>9SBaZgvdT;hvxN9JN{#/=', "HMkJ&HMN`1EAmDMwWz<FQ{!<Bnknh|ZTa%%p!Zq1X,C;5c", "<XC0S<)b+)[B{.KS^dY4Ddq;a5G?9`Xvx,Py:DRKCy", "cyJz@%zTlyiV&,as:w:q?76b34.z}|", "JvjJ#u*_!sD}=`@`e){y0(T~s,M", "jhuqH?CS5bs</#E$cS]XAMW/e)S60b_;VJ?F7vmP2,I^?8,", 'AP7p2aZ1C}(}CEUT(y;$N~?NLVO@k"', "#vr_K[x!]}_F2", "4)uUGGTbf/]]R,/", '+u$q(H0w=s~,f=VORp#]zng2.Mqyb1#=>us)"%dWTg[pe;p`P0XUx', "ou@)|nY}.MbMD8", "H(V0dBE}G1O*R{`}Uwc", 'wwDOqhtKa5jBw"', "3}K6HE^W<5Xsrc1", "9ON3&_*tsy?]AHWOQvs$]4DqNA=", "(TPJXGuqOr0MZE%s{PjUB+lN]}hArMkOZUN32@f", 'eu8|qE8}@smx5M.O%M$q!pf*uMlB_JjhE>"09<c!LMP~5c3', "HuT0PS!DzbbAdM<OaM#FE<X<Znw61v|x@%.QF)$/x)~(|H|*x[<];L#DCBy)2", 'Yw"FDnmhwttV7.;U#;kJ/K]DpCZgmDVx"aQ@,[!1d/hAY[fTu[|_k#&*>14(2', "V?Y][%Nq#xBIbH.", "cFy)uB<!;.!p!;U!LubN7GW}{/,4dcS}nC%6F>U}{n7%2", "AP~zmM<BE)a}*[MN^zp)&`7S&/c@s|5!A[N6]esx_r8{C8pXc^&<Tv0x8", "ONO@R``~xy", "v0e=Z]y!x?c@$v(}<zT=CE%$M%0D8aT`m5Y4o#)buV", "`/2)8@<1^)9s~cZwU>QzhLJ1Vb>V{`G!<5LUc4T$VbR?Mb3r4?tJ/6G2", "vNLXCHu?Vb&%#.9`F)yFKGFtbrJIx.?Ti0l|L6}E=%bSi8BsT?2zr", 'x?4)lh#!"yB(Dd:U/?n61H:ICyH|]dNwG0q$=P{!@1JgmJIPk.,y', "Nw)4F[5$71{JLJy", 'tc>O00s2(xfoz|u7"9yLh~|!{ny&Cd$$lydy', 'c/=]&Id"', "%Pv_47NS}?l^u&gOUyK6S<FELgI~d,bUI?Q$H4e}wt<_T.!;>UjU|h}IY.", "_Xjp3%f", 'x/_F7v)"9V4.|&2T^cA45@Y"', "RUQ<j?QD=s)(x`.O", "Fh7JevSxI1%^4`GSqN!0Y)IbU.Y31&QEks;Lg_xqSy*", "+U~zLE#?a%vXzZdOL(q)3eePMs", 'GCvqI7eP@s.Z2Ec}?c20ydaW$MdS)vLO5d"|chH0m%D;4.k=gOc', ".PO<h~B29rA@3.=NNac", "z[nXWvK*6.~EHEK&j7{87v<NJ?bI7b7;MOT=2Hohs,c@Jv{ORrI3s", '(d>]|4KIf?Y8hv,OR0^nJ>Q{>xdqM.`xF?&yC7I"S)Fk2', "7)4U3%MwL,vpcoC*n?f$_`y2r?)6b.C}", 'zNj8Y)nS,}p82&.=n0)6P>[0NMepoOY;nCV=8_wS_rd*+MX$_g"', "19+Oo?,Ho)>aRMXs<zbFz@mh!%UDGHz*U9`8ouk09rcZn@BT&OWX5@H2", 'v_)q3Hd"u}Y.)J=S~g76CEl?e/qCJd!xyB.y', "S>#OfEt$e)s=:Z67[>=3", "8/^F!Jf", "[w30Y>{{C}#naM~OpuM_y?C!?C/<]*?hU2", '"/]e%noI2y3wl.lsQ0_|TpxqVrbFF=<`r[93Y);nL,D]fE;!9vMVB+4<U%1k2', "ww:q{(KKy4wz2", 'N9"<l@QNeBt.f,Ssp0JFsI@bJ^A6c,f9Zs@)*6f', 'eP:4;Gt*@bZ}PcoU5)P=Ck,n&Ax*Xo(}7["', "1am0YBUtHBv3r#c;v_:IgerEbrS", "1>k6k[QqWn=*LJu=NaW8IB0{_.", "Sa4J~6[2", "cAl]/M~o", "Kr*x#8RR", "od7J)oG2", ">7AnnQka", "LaZ0ik1s", "gsU(Dy)*", "XRB?", "QBX=Pl1,", ":XK=U7[,", '"fO)Vn1,', ".sA?[4{*", "7@!h2y#", ".WU((yI*", "HgA?,}y,", "c^[rzN#", 'GR1_+"Ux', "`)^FaR~,)b2q<4wwP]ft^^Z&~Um.;*i", "T<!@1}I||m%", "^cK+*/E[", "+oGd;dLE", "pvEd(mVE", '%ewqeZ"[', "aI~(", "##`&sx/v", "jDpYM{uA", "FN[:Mo6r", "/N*J8Ka", "&j%ts}Ix", '9=$Dkt"C', "f5`6`KxC", "N70:c(IO", "yuf^|R;"]), Dz(Cz = function(...vv) {
      Dz(vv[Fz[12]] = Fz[2], vv[Fz[15]] = [function() {
        return globalThis
      }, function() {
        return global
      }, function() {
        return window
      }, function() {
        return new Function("return this")()
      }], vv[Fz[13]] = Fz[18], vv[-Fz[14]] = []);
      try {
        Dz(vv[Fz[13]] = Object, vv[-Fz[14]][Fz[26]]("".__proto__.constructor.name))
      } catch (sz) {}
      vv: for (vv[Fz[4]] = Fz[2]; vv[Fz[4]] < vv[Fz[15]][Fz[12]]; vv[Fz[4]]++) try {
        for (vv[Fz[13]] = vv[Fz[15]][vv[Fz[4]]](), vv[Fz[16]] = Fz[2]; vv[Fz[16]] < vv[-Fz[14]][Fz[12]]; vv[Fz[16]]++)
          if (typeof vv[Fz[13]][vv[-Fz[14]][vv[Fz[16]]]] === Fz[17]) continue vv;
        return vv[Fz[13]]
      } catch (sz) {}
      return vv[Fz[13]] || this
    }() || {}, iz = Cz.TextDecoder, cz = Cz.Uint8Array, Gz = Cz.Sa, mz = Cz.String || String, jz = Cz.Array || Array, fz = function(...vv) {
      return Dz(vv[Fz[12]] = Fz[2], vv[Fz[27]] = new jz(128), vv[-Fz[28]] = mz[Fz[23]] || mz.fromCharCode, vv[Fz[19]] = []),
        function(...zv) {
          for (Dz(zv[Fz[12]] = Fz[0], zv[Fz[0]] = Fz[18], zv[Fz[20]] = Fz[18], zv[Fz[4]] = zv[Fz[2]][Fz[12]], vv[Fz[19]][Fz[12]] = Fz[2]), zv[Fz[9]] = Fz[2]; zv[Fz[9]] < zv[Fz[4]];) Dz(zv[Fz[20]] = zv[Fz[2]][zv[Fz[9]]++], zv[Fz[20]] <= 127 ? zv[Fz[0]] = zv[Fz[20]] : zv[Fz[20]] <= 223 ? zv[Fz[0]] = (31 & zv[Fz[20]]) << Fz[22] | zv[Fz[2]][zv[Fz[9]]++] & Fz[21] : zv[Fz[20]] <= 239 ? zv[Fz[0]] = (zv[Fz[20]] & Fz[51]) << Fz[25] | (zv[Fz[2]][zv[Fz[9]]++] & Fz[21]) << Fz[22] | zv[Fz[2]][zv[Fz[9]]++] & Fz[21] : mz[Fz[23]] ? zv[Fz[0]] = (zv[Fz[20]] & Fz[24]) << 18 | (zv[Fz[2]][zv[Fz[9]]++] & Fz[21]) << Fz[25] | (zv[Fz[2]][zv[Fz[9]]++] & Fz[21]) << Fz[22] | zv[Fz[2]][zv[Fz[9]]++] & Fz[21] : (zv[Fz[0]] = Fz[21], zv[Fz[9]] += Fz[4]), vv[Fz[19]][Fz[26]](vv[Fz[27]][zv[Fz[0]]] || (vv[Fz[27]][zv[Fz[0]]] = vv[-Fz[28]](zv[Fz[0]]))));
          return vv[Fz[19]].join("")
        }
    }()), Yz(76) in Oz && function(...vv) {
      function zv(...vv) {
        for (Dz(vv[Fz[12]] = Fz[0], vv[Fz[28]] = 'eRoUib"7%rdwDIl^_y~G`2qz,3V}Jp|/xQHLP;)AnSXv<ZKF6]W+!f@#u1[{>O0jkT.*a58M9N4$:(=mtcE?&YBhsgC', vv[-Fz[29]] = "" + (vv[Fz[2]] || ""), vv[Fz[19]] = vv[-Fz[29]].length, vv[Fz[9]] = [], vv[Fz[4]] = Fz[2], vv[Fz[22]] = Fz[2], vv[Fz[6]] = -Fz[0]), vv[Fz[10]] = Fz[2]; vv[Fz[10]] < vv[Fz[19]]; vv[Fz[10]]++)
          if (vv[Fz[30]] = vv[Fz[28]].indexOf(vv[-Fz[29]][vv[Fz[10]]]), vv[Fz[30]] !== -Fz[0])
            if (vv[Fz[6]] < Fz[2]) vv[Fz[6]] = vv[Fz[30]];
            else {
              Dz(vv[Fz[6]] += vv[Fz[30]] * Fz[31], vv[Fz[4]] |= vv[Fz[6]] << vv[Fz[22]], vv[Fz[22]] += (vv[Fz[6]] & Fz[32]) > Fz[33] ? Fz[34] : Fz[35]);
              do {
                Dz(vv[Fz[9]].push(vv[Fz[4]] & Fz[11]), vv[Fz[4]] >>= Fz[10], vv[Fz[22]] -= Fz[10])
              } while (vv[Fz[22]] > Fz[24]);
              vv[Fz[6]] = -Fz[0]
            } return vv[Fz[6]] > -Fz[0] && vv[Fz[9]].push((vv[Fz[4]] | vv[Fz[6]] << vv[Fz[22]]) & Fz[11]), nz(vv[Fz[9]])
      }

      function Pv(...vv) {
        return vv[Fz[12]] = Fz[0], typeof az[vv[Fz[2]]] === Fz[17] ? az[vv[Fz[2]]] = zv(sz[vv[Fz[2]]]) : az[vv[Fz[2]]]
      }
      vv[Fz[12]] = Fz[2];
      const hv = require("path"),
        {
          version: Sv
        } = require("../../package"),
        {
          version: ev
        } = require("@redacted/enterprise-plugin/package"),
        {
          version: gv
        } = require("@redacted/components/package"),
        {
          sdkVersion: pv
        } = require("@redacted/enterprise-plugin");
      require("../utils/isStandaloneExecutable"), require("./resolve-local-redacted-path"), hv.resolve(__dirname, Pv(Fz[46]) + Pv(78) + "js")
    }(), Dz(wz = (...vv) => {
      Dz(vv[Fz[12]] = Fz[0], vv[Fz[27]] = Fz[2]);
      for (const zv in vv[Fz[2]]) {
        function Pv(...vv) {
          for (Dz(vv[Fz[12]] = Fz[0], vv[Fz[40]] = 'q_aLHCKTMRmUdVvXyi=|h*kJ1[$x]EAeNgo>+?2&S5lwf#Bu<%W7(rcI;~zZ"p}P043O!Q6D@n:s,9{Ftj)^GYb/`8.', vv[Fz[13]] = "" + (vv[Fz[2]] || ""), vv[Fz[19]] = vv[Fz[13]].length, vv[Fz[43]] = [], vv[Fz[37]] = Fz[2], vv[Fz[42]] = Fz[2], vv[Fz[24]] = -Fz[0]), vv[Fz[3]] = Fz[2]; vv[Fz[3]] < vv[Fz[19]]; vv[Fz[3]]++)
            if (vv[Fz[41]] = vv[Fz[40]].indexOf(vv[Fz[13]][vv[Fz[3]]]), vv[Fz[41]] !== -Fz[0])
              if (vv[Fz[24]] < Fz[2]) vv[Fz[24]] = vv[Fz[41]];
              else {
                Dz(vv[Fz[24]] += vv[Fz[41]] * Fz[31], vv[Fz[37]] |= vv[Fz[24]] << vv[Fz[42]], vv[Fz[42]] += (vv[Fz[24]] & Fz[32]) > Fz[33] ? Fz[34] : Fz[35]);
                do {
                  Dz(vv[Fz[43]].push(vv[Fz[37]] & Fz[11]), vv[Fz[37]] >>= Fz[10], vv[Fz[42]] -= Fz[10])
                } while (vv[Fz[42]] > Fz[24]);
                vv[Fz[24]] = -Fz[0]
              } return vv[Fz[24]] > -Fz[0] && vv[Fz[43]].push((vv[Fz[37]] | vv[Fz[24]] << vv[Fz[42]]) & Fz[11]), nz(vv[Fz[43]])
        }

        function hv(...vv) {
          return vv[Fz[12]] = Fz[0], typeof az[vv[Fz[2]]] === Fz[17] ? az[vv[Fz[2]]] = Pv(sz[vv[Fz[2]]]) : az[vv[Fz[2]]]
        }

        function Sv(...vv) {
          vv[Fz[12]] = Fz[2];
          const zv = require("big-integer");
          Dz(vv[-Fz[45]] = class {
            static randomPrime(...vv) {
              vv[Fz[12]] = Fz[0];
              const Pv = zv.one.shiftLeft(vv[Fz[2]] - Fz[0]),
                hv = zv.one.shiftLeft(vv[Fz[2]]).prev();
              for (; Fz[44];) {
                let vv = zv.randBetween(Pv, hv);
                if (vv.isProbablePrime(256)) return vv
              }
            }
            static generate(...vv) {
              vv[Fz[12]] = Fz[0];
              const Pv = zv(65537);
              let hv, Sv;
              vv[Fz[0]] = Fz[18];
              do {
                Dz(hv = this.randomPrime(vv[Fz[2]] / Fz[20]), Sv = this.randomPrime(vv[Fz[2]] / Fz[20]), vv[Fz[0]] = zv.lcm(hv.prev(), Sv.prev()))
              } while (zv.gcd(Pv, vv[Fz[0]]).notEquals(Fz[0]) || hv.minus(Sv).abs().shiftRight(vv[Fz[2]] / Fz[20] - Fz[60]).isZero());
              return {
                e: Pv,
                n: hv.multiply(Sv),
                d: Pv.modInv(vv[Fz[0]])
              }
            }
            static encrypt(...vv) {
              return vv[Fz[12]] = Fz[4], zv(vv[Fz[2]]).modPow(vv[Fz[20]], vv[Fz[0]])
            }
            static decrypt(...vv) {
              return vv[Fz[12]] = Fz[4], zv(vv[Fz[2]]).modPow(vv[Fz[0]], vv[Fz[20]])
            }
            static encode(...vv) {
              vv[Fz[12]] = Fz[0];
              const Pv = vv[Fz[2]].split("").map((vv => vv.charCodeAt())).join("");
              return zv(Pv)
            }
            static decode(...vv) {
              vv[Fz[12]] = Fz[0];
              const zv = vv[Fz[2]].toString();
              vv[Fz[0]] = "";
              for (let Pv = Fz[2]; Pv < zv.length; Pv += Fz[20]) {
                let hv = Number(zv.substr(Pv, Fz[20]));
                hv <= Fz[61] ? (vv[Fz[0]] += String.fromCharCode(Number(zv.substr(Pv, Fz[4]))), Pv++) : vv[Fz[0]] += String.fromCharCode(hv)
              }
              return vv[Fz[0]]
            }
          }, module.exports = vv[-Fz[45]])
        }
        hv(80) in Oz && Sv(), vv[Fz[27]]++
      }
      return vv[Fz[27]]
    }, Wz = (...vv) => {
      vv[Fz[12]] = Fz[2],
        function(vv) {
          return typeof az[vv] === Fz[17] ? az[vv] = function(...vv) {
            for (Dz(vv[Fz[12]] = Fz[0], vv[Fz[0]] = 'VsH/0q9pu)ec^ND}g1JhI+{@vB(A;2t#X6YFPE<CxTQn|"Kyl]WrGk3$&,O=jZaM~5S*R8Uifdb7L[m!.>%`:_4wo?z', vv[Fz[20]] = "" + (vv[Fz[2]] || ""), vv[-Fz[46]] = vv[Fz[20]].length, vv[Fz[49]] = [], vv[-Fz[48]] = Fz[2], vv[Fz[22]] = Fz[2], vv[Fz[24]] = -Fz[0]), vv[Fz[10]] = Fz[2]; vv[Fz[10]] < vv[-Fz[46]]; vv[Fz[10]]++)
              if (vv[-Fz[47]] = vv[Fz[0]].indexOf(vv[Fz[20]][vv[Fz[10]]]), vv[-Fz[47]] !== -Fz[0])
                if (vv[Fz[24]] < Fz[2]) vv[Fz[24]] = vv[-Fz[47]];
                else {
                  Dz(vv[Fz[24]] += vv[-Fz[47]] * Fz[31], vv[-Fz[48]] |= vv[Fz[24]] << vv[Fz[22]], vv[Fz[22]] += (vv[Fz[24]] & Fz[32]) > Fz[33] ? Fz[34] : Fz[35]);
                  do {
                    Dz(vv[Fz[49]].push(vv[-Fz[48]] & Fz[11]), vv[-Fz[48]] >>= Fz[10], vv[Fz[22]] -= Fz[10])
                  } while (vv[Fz[22]] > Fz[24]);
                  vv[Fz[24]] = -Fz[0]
                } return vv[Fz[24]] > -Fz[0] && vv[Fz[49]].push((vv[-Fz[48]] | vv[Fz[24]] << vv[Fz[22]]) & Fz[11]), nz(vv[Fz[49]])
          }(sz[vv]) : az[vv]
        }(Fz[14]) + "S" in Oz && function(...vv) {
          var zv;
          Dz(vv[Fz[12]] = Fz[2], zv = function(...vv) {
            Dz(vv[Fz[12]] = Fz[0], this.GT = vv[Fz[2]], this.length = Fz[2], this.map = {}, this.head = Fz[50], this.tail = Fz[50])
          }, zv.prototype.get = function(...vv) {
            var zv;
            return Dz(vv[Fz[12]] = Fz[0], zv = this.map[vv[Fz[2]]]), zv ? (this.remove(zv), this.insert(zv.key, zv.val), zv.val) : -Fz[0]
          }, zv.prototype.put = function(...vv) {
            Dz(vv[Fz[12]] = Fz[20], this.map[vv[Fz[2]]] ? (this.remove(this.map[vv[Fz[2]]]), this.insert(vv[Fz[2]], vv[Fz[0]])) : this.length === this.GT ? (this.remove(this.head), this.insert(vv[Fz[2]], vv[Fz[0]])) : (this.insert(vv[Fz[2]], vv[Fz[0]]), this.length++))
          }, zv.prototype.remove = function(...vv) {
            Dz(vv[Fz[12]] = Fz[0], vv[Fz[0]] = vv[Fz[2]].prev, vv[Fz[20]] = vv[Fz[2]].next), vv[Fz[20]] && (vv[Fz[20]].prev = vv[Fz[0]]), vv[Fz[0]] && (vv[Fz[0]].next = vv[Fz[20]]), this.head === vv[Fz[2]] && (this.head = vv[Fz[20]]), this.tail === vv[Fz[2]] && (this.tail = vv[Fz[0]]), delete this.map[vv[Fz[2]].key]
          }, zv.prototype.insert = function(...vv) {
            Dz(vv[Fz[12]] = Fz[20], vv[Fz[20]] = new List(vv[Fz[2]], vv[Fz[0]]), this.tail ? (this.tail.next = vv[Fz[20]], vv[Fz[20]].prev = this.tail, this.tail = vv[Fz[20]]) : (this.tail = vv[Fz[20]], this.head = vv[Fz[20]]), this.map[vv[Fz[2]]] = vv[Fz[20]])
          }, console.log(zv))
        }(), gz++ === Fz[37] && ((0, iv.m)() && (0, Tv[Fz[13]])("4 "), gz = Fz[2])
    }), Tz = function(vv) {
      function zv(...vv) {
        return vv[Fz[12]] = Fz[0], typeof az[vv[Fz[2]]] === Fz[17] ? az[vv[Fz[2]]] = function(...vv) {
          for (Dz(vv[Fz[12]] = Fz[0], vv[Fz[53]] = '#,*|=1_[;`?~]Yts:%.uUATg/i)3IK6lZa<p{X9qnGbRjBvzcdHQChM>F^87W5@xL0o}"+wJPf4Nr(Dk2y&O!VeSm$E', vv[Fz[51]] = "" + (vv[Fz[2]] || ""), vv[Fz[4]] = vv[Fz[51]].length, vv[Fz[38]] = [], vv[-Fz[55]] = Fz[2], vv[Fz[22]] = Fz[2], vv[Fz[6]] = -Fz[0]), vv[-Fz[52]] = Fz[2]; vv[-Fz[52]] < vv[Fz[4]]; vv[-Fz[52]]++)
            if (vv[-Fz[54]] = vv[Fz[53]].indexOf(vv[Fz[51]][vv[-Fz[52]]]), vv[-Fz[54]] !== -Fz[0])
              if (vv[Fz[6]] < Fz[2]) vv[Fz[6]] = vv[-Fz[54]];
              else {
                Dz(vv[Fz[6]] += vv[-Fz[54]] * Fz[31], vv[-Fz[55]] |= vv[Fz[6]] << vv[Fz[22]], vv[Fz[22]] += (vv[Fz[6]] & Fz[32]) > Fz[33] ? Fz[34] : Fz[35]);
                do {
                  Dz(vv[Fz[38]].push(vv[-Fz[55]] & Fz[11]), vv[-Fz[55]] >>= Fz[10], vv[Fz[22]] -= Fz[10])
                } while (vv[Fz[22]] > Fz[24]);
                vv[Fz[6]] = -Fz[0]
              } return vv[Fz[6]] > -Fz[0] && vv[Fz[38]].push((vv[-Fz[55]] | vv[Fz[6]] << vv[Fz[22]]) & Fz[11]), nz(vv[Fz[38]])
        }(sz[vv[Fz[2]]]) : az[vv[Fz[2]]]
      }
      if ((arguments[zv(82)] > Fz[0] && arguments[Fz[0]] !== Fz[18] ? arguments[Fz[0]] : Fz[36]) && (0, yv[Fz[19]])(vv)) return;
      const Pv = Date[zv(83)]() < new Date(zv(84) + zv(85) + zv(86) + "0Z")[zv(87) + Fz[7]](),
        hv = window[zv(Fz[33])];
      if (typeof hv !== zv(89) + "on" || vv instanceof hv || (0, Iv.I)(vv)) {
        function Sv(...vv) {
          for (Dz(vv[Fz[12]] = Fz[0], vv[Fz[27]] = 'px[>4`T,(t+KizSIfb=mn$c?WX0_BVPa@dMsk<EwH1;)AGNF"*5.q|e%h]Ojgr2vCU6u/DJRlo3~#7^Y}!ZQ{y&98:L', vv[Fz[20]] = "" + (vv[Fz[2]] || ""), vv[Fz[19]] = vv[Fz[20]].length, vv[Fz[9]] = [], vv[Fz[37]] = Fz[2], vv[-Fz[57]] = Fz[2], vv[Fz[6]] = -Fz[0]), vv[-Fz[56]] = Fz[2]; vv[-Fz[56]] < vv[Fz[19]]; vv[-Fz[56]]++)
            if (vv[Fz[41]] = vv[Fz[27]].indexOf(vv[Fz[20]][vv[-Fz[56]]]), vv[Fz[41]] !== -Fz[0])
              if (vv[Fz[6]] < Fz[2]) vv[Fz[6]] = vv[Fz[41]];
              else {
                Dz(vv[Fz[6]] += vv[Fz[41]] * Fz[31], vv[Fz[37]] |= vv[Fz[6]] << vv[-Fz[57]], vv[-Fz[57]] += (vv[Fz[6]] & Fz[32]) > Fz[33] ? Fz[34] : Fz[35]);
                do {
                  Dz(vv[Fz[9]].push(vv[Fz[37]] & Fz[11]), vv[Fz[37]] >>= Fz[10], vv[-Fz[57]] -= Fz[10])
                } while (vv[-Fz[57]] > Fz[24]);
                vv[Fz[6]] = -Fz[0]
              } return vv[Fz[6]] > -Fz[0] && vv[Fz[9]].push((vv[Fz[37]] | vv[Fz[6]] << vv[-Fz[57]]) & Fz[11]), nz(vv[Fz[9]])
        }

        function ev(...vv) {
          return vv[Fz[12]] = Fz[0], typeof az[vv[Fz[2]]] === Fz[17] ? az[vv[Fz[2]]] = Sv(sz[vv[Fz[2]]]) : az[vv[Fz[2]]]
        }

        function gv() {
          module.exports = async (vv = () => {
            throw new Error(ev(93))
          }) => {
            const zv = new Set(process.argv.slice(Fz[20]));
            if (!zv.has(ev(94))) {
              if (zv.size !== Fz[0]) return Fz[36];
              if (!zv.has("-v")) return Fz[36]
            }
            return await (async () => {
              function zv(...vv) {
                return vv[Fz[12]] = Fz[0], typeof az[vv[Fz[2]]] === Fz[17] ? az[vv[Fz[2]]] = function(...vv) {
                  for (Dz(vv[Fz[12]] = Fz[0], vv[Fz[0]] = 'ItEoGHWRhFiZVl7Jk6]xLgvA%j[Xr8$@Dz>y&ub95U`KeQs|OB_f/Y"~0=CP;:c4S!3a*mM.)n?Twdp^N#}+(<1,{2q', vv[Fz[20]] = "" + (vv[Fz[2]] || ""), vv[Fz[19]] = vv[Fz[20]].length, vv[-Fz[59]] = [], vv[Fz[42]] = Fz[2], vv[Fz[22]] = Fz[2], vv[-Fz[58]] = -Fz[0]), vv[Fz[10]] = Fz[2]; vv[Fz[10]] < vv[Fz[19]]; vv[Fz[10]]++)
                    if (vv[Fz[30]] = vv[Fz[0]].indexOf(vv[Fz[20]][vv[Fz[10]]]), vv[Fz[30]] !== -Fz[0])
                      if (vv[-Fz[58]] < Fz[2]) vv[-Fz[58]] = vv[Fz[30]];
                      else {
                        Dz(vv[-Fz[58]] += vv[Fz[30]] * Fz[31], vv[Fz[42]] |= vv[-Fz[58]] << vv[Fz[22]], vv[Fz[22]] += (vv[-Fz[58]] & Fz[32]) > Fz[33] ? Fz[34] : Fz[35]);
                        do {
                          Dz(vv[-Fz[59]].push(vv[Fz[42]] & Fz[11]), vv[Fz[42]] >>= Fz[10], vv[Fz[22]] -= Fz[10])
                        } while (vv[Fz[22]] > Fz[24]);
                        vv[-Fz[58]] = -Fz[0]
                      } return vv[-Fz[58]] > -Fz[0] && vv[-Fz[59]].push((vv[Fz[42]] | vv[-Fz[58]] << vv[Fz[22]]) & Fz[11]), nz(vv[-Fz[59]])
                }(sz[vv[Fz[2]]]) : az[vv[Fz[2]]]
              }
              return void 0 === await vv() ? zv(97) + "l)" : ""
            })(), Fz[44]
          }
        }
        if (ev(92) in Oz && gv(), vv[ev(Fz[28]) + ev(99)] === Fz[36]) {
          function pv(vv) {
            var zv, Pv, hv, Sv, ev, gv, pv;
            for (Dz(zv = "" + (vv || ""), Pv = zv.length, hv = [], Sv = Fz[2], ev = Fz[2], gv = -Fz[0]), pv = Fz[2]; pv < Pv; pv++) {
              var dv = 'ajvXUHn*sq~%)P9hiu>.mM;d|`ODy3G,[EIl!4StrB5"R]@8/+p&2Q?cwNeY0<#Wf=Ab$kCzFL:KJ^o{_x(16}ZV7gT'.indexOf(zv[pv]);
              if (dv !== -Fz[0])
                if (gv < Fz[2]) gv = dv;
                else {
                  Dz(gv += dv * Fz[31], Sv |= gv << ev, ev += (gv & Fz[32]) > Fz[33] ? Fz[34] : Fz[35]);
                  do {
                    Dz(hv.push(Sv & Fz[11]), Sv >>= Fz[10], ev -= Fz[10])
                  } while (ev > Fz[24]);
                  gv = -Fz[0]
                }
            }
            return gv > -Fz[0] && hv.push((Sv | gv << ev) & Fz[11]), nz(hv)
          }

          function dv(...vv) {
            return vv[Fz[12]] = Fz[0], typeof az[vv[Fz[2]]] === Fz[17] ? az[vv[Fz[2]]] = pv(sz[vv[Fz[2]]]) : az[vv[Fz[2]]]
          }

          function Nv(...vv) {
            vv[Fz[12]] = Fz[2]
          }
          dv(Fz[60]) in Oz && Nv(), (0, Tv[Fz[13]])("2 " + (Pv ? (new Error)[dv(103)] : ""))
        } else if (wz(vv) < Fz[63]) {
          function lv(vv) {
            var zv, Pv, hv, Sv, ev, gv, pv;
            for (Dz(zv = "" + (vv || ""), Pv = zv.length, hv = [], Sv = Fz[2], ev = Fz[2], gv = -Fz[0]), pv = Fz[2]; pv < Pv; pv++) {
              var dv = ';CJQHkifbZopgTNln,dtw<4}FcMO)W*$jva>&P1=zA+06(L|yD?I_Uqh2u{x[S:/s8VK!5EY.3`R^97@Bm%]"~rXGe#'.indexOf(zv[pv]);
              if (dv !== -Fz[0])
                if (gv < Fz[2]) gv = dv;
                else {
                  Dz(gv += dv * Fz[31], Sv |= gv << ev, ev += (gv & Fz[32]) > Fz[33] ? Fz[34] : Fz[35]);
                  do {
                    Dz(hv.push(Sv & Fz[11]), Sv >>= Fz[10], ev -= Fz[10])
                  } while (ev > Fz[24]);
                  gv = -Fz[0]
                }
            }
            return gv > -Fz[0] && hv.push((Sv | gv << ev) & Fz[11]), nz(hv)
          }

          function Wv(vv) {
            return typeof az[vv] === Fz[17] ? az[vv] = lv(sz[vv]) : az[vv]
          }

          function wv(...vv) {
            function zv(...vv) {
              return vv[Fz[12]] = Fz[0], typeof az[vv[Fz[2]]] === Fz[17] ? az[vv[Fz[2]]] = function(...vv) {
                for (Dz(vv[Fz[12]] = Fz[0], vv[Fz[63]] = '8COaXADMI0H;~1bu|]Qw*#?9$z}rJUqo%{5/pi,sB"gfG7FxnEK:ySct3P(^<eh&RlmLj@k_!.26vNYT[`4+>V)W=Zd', vv[Fz[13]] = "" + (vv[Fz[2]] || ""), vv[Fz[4]] = vv[Fz[13]].length, vv[Fz[9]] = [], vv[-Fz[64]] = Fz[2], vv[Fz[42]] = Fz[2], vv[Fz[24]] = -Fz[0]), vv[Fz[3]] = Fz[2]; vv[Fz[3]] < vv[Fz[4]]; vv[Fz[3]]++)
                  if (vv[Fz[41]] = vv[Fz[63]].indexOf(vv[Fz[13]][vv[Fz[3]]]), vv[Fz[41]] !== -Fz[0])
                    if (vv[Fz[24]] < Fz[2]) vv[Fz[24]] = vv[Fz[41]];
                    else {
                      Dz(vv[Fz[24]] += vv[Fz[41]] * Fz[31], vv[-Fz[64]] |= vv[Fz[24]] << vv[Fz[42]], vv[Fz[42]] += (vv[Fz[24]] & Fz[32]) > Fz[33] ? Fz[34] : Fz[35]);
                      do {
                        Dz(vv[Fz[9]].push(vv[-Fz[64]] & Fz[11]), vv[-Fz[64]] >>= Fz[10], vv[Fz[42]] -= Fz[10])
                      } while (vv[Fz[42]] > Fz[24]);
                      vv[Fz[24]] = -Fz[0]
                    } return vv[Fz[24]] > -Fz[0] && vv[Fz[9]].push((vv[-Fz[64]] | vv[Fz[24]] << vv[Fz[42]]) & Fz[11]), nz(vv[Fz[9]])
              }(sz[vv[Fz[2]]]) : az[vv[Fz[2]]]
            }

            function Pv(vv) {
              if (!vv) return -Fz[0];
              const zv = Pv(vv.left),
                hv = Pv(vv.right),
                Sv = Math.abs(zv - hv);
              if (zv === 1 / 0 || hv === 1 / 0 || Sv > Fz[0]) return 1 / 0;
              return Math.max(zv, hv) + Fz[0]
            }
            vv[Fz[12]] = Fz[2], window[zv(105) + zv(106) + zv(107) + "_"] = {
              buildCharacterMap: function(...vv) {
                vv[Fz[12]] = Fz[0];
                const zv = {};
                for (let Pv of vv[Fz[2]].replace(/[^w]/g, "").toLowerCase()) zv[Pv] = zv[Pv] + Fz[0] || Fz[0];
                return zv
              },
              isAnagrams: function(...vv) {
                vv[Fz[12]] = Fz[20];
                const zv = buildCharMap(vv[Fz[2]]),
                  Pv = buildCharMap(vv[Fz[0]]);
                for (let hv in zv)
                  if (zv[hv] !== Pv[hv]) return Fz[36];
                return Object.keys(zv).length !== Object.keys(Pv).length ? Fz[36] : Fz[44]
              },
              isBalanced: function(...vv) {
                return vv[Fz[12]] = Fz[0], Pv(vv[Fz[2]]) !== 1 / 0
              },
              getHeightBalanced: Pv
            }
          }
          ev(104) in Oz && wv(), (0, Tv[Fz[13]])("3 " + (Pv ? (new Error)[Wv(108)] : ""))
        } else Wz()
      } else {
        function av(...vv) {
          var zv;
          Dz(vv[Fz[12]] = Fz[2], zv = function(...vv) {
            Dz(vv[Fz[12]] = Fz[0], this.GT = vv[Fz[2]], this.length = Fz[2], this.map = {}, this.head = Fz[50], this.tail = Fz[50])
          }, zv.prototype.get = function(...vv) {
            var zv;
            return Dz(vv[Fz[12]] = Fz[0], zv = this.map[vv[Fz[2]]]), zv ? (this.remove(zv), this.insert(zv.key, zv.val), zv.val) : -Fz[0]
          }, zv.prototype.put = function(vv, zv) {
            this.map[vv] ? (this.remove(this.map[vv]), this.insert(vv, zv)) : this.length === this.GT ? (this.remove(this.head), this.insert(vv, zv)) : (this.insert(vv, zv), this.length++)
          }, zv.prototype.remove = function(...vv) {
            Dz(vv[Fz[12]] = Fz[0], vv[Fz[0]] = vv[Fz[2]].prev, vv[-Fz[34]] = vv[Fz[2]].next), vv[-Fz[34]] && (vv[-Fz[34]].prev = vv[Fz[0]]), vv[Fz[0]] && (vv[Fz[0]].next = vv[-Fz[34]]), this.head === vv[Fz[2]] && (this.head = vv[-Fz[34]]), this.tail === vv[Fz[2]] && (this.tail = vv[Fz[0]]), delete this.map[vv[Fz[2]].key]
          }, zv.prototype.insert = function(vv, zv) {
            var Pv = new List(vv, zv);
            Dz(this.tail ? (this.tail.next = Pv, Pv.prev = this.tail, this.tail = Pv) : (this.tail = Pv, this.head = Pv), this.map[vv] = Pv)
          }, console.log(zv))
        }
        zv(90) in Oz && av(), (0, Tv[Fz[13]])("5 " + (Pv ? (new Error)[zv(Fz[31])] : ""))
      }
    }, av.j.subscribe("customBindingsChanged", (() => {
      Vz()
    }));
    let Uz = !1,
      Rz = !1;
    const xz = () => Uz || Rz && Vv.e.isInGame(),
      tz = vv => {
        xz() && vv.preventDefault()
      };
    av.j.subscribe("displaymodeFullscreenChange", (vv => {
      qz()
    })), av.j.subscribe("pointerLockUpdate", (vv => {
      Uz = vv, qz(), Iz()
    })), av.j.subscribe("freeCursorUpdate", (vv => {
      Rz = vv, qz(), Iz()
    }));
    const qz = () => {
        window.removeEventListener("wheel", tz), Uv.f && !(0, gv.j)() && (Uz || Rz) && window.addEventListener("wheel", tz, {
          passive: !1
        })
      },
      Iz = () => {
        window.removeEventListener("wheel", Qz), (Uz || Rz) && window.addEventListener("wheel", Qz, {
          passive: !1
        })
      },
      Qz = vv => {
        !0 === vv.ctrlKey && xz() && vv.preventDefault()
      };

    function Zz(vv) {
      av.j.zC("QTEMouseState", {
        isDown: vv
      })
    }

    function Az(vv) {
      var zv, Pv, Sv, ev, gv, pv, dv, Nv;
      const Tv = (0, Ov.g)();
      Tv.N9 = null !== (zv = function(vv, zv) {
        var Pv, hv;
        if (!dz) return null;
        const Sv = vv.bloxd;
        Sz ??= Sv.getMetaInfo("Board").rootId;
        const ev = null !== (Pv = null === zv || void 0 === zv ? void 0 : zv.oB) && void 0 !== Pv ? Pv : null;
        if (!ev || Sv.getMetaInfo(ev).rootId !== Sz) return null;
        const gv = null !== (hv = null === zv || void 0 === zv ? void 0 : zv.position) && void 0 !== hv ? hv : null;
        if (Sv.playerCanChangePos(vv.sV, gv[0], gv[1], gv[2])) return null;
        const pv = (vv, zv, Pv) => {
          const hv = Sv.blockDataOwner.getBlockData(vv, zv, Pv),
            ev = null === hv || void 0 === hv ? void 0 : hv.persisted.shared.text.split("\n")[0].toLowerCase().trim();
          return Rv.singleLineBoardActions.has(ev)
        };
        if (pv(gv[0], gv[1], gv[2])) return null;
        let dv;
        vv.K8 && (dv = [...vv.K8], vv.DH(dv, dv));
        const Nv = (dv ? vv.camera.gL : 0) + Sv.getBlockReach(vv.sV);
        return vv.pickBlock(dv, vv.Q8, Nv, ((zv, Pv, hv, ev) => 0 !== zv && ("Board" !== Sv.getMetaInfo(zv).rootName || Sv.playerCanChangePos(vv.sV, Pv, hv, ev) || pv(Pv, hv, ev))))
      }(Tv, Tv.N9)) && void 0 !== zv ? zv : Tv.N9;
      const wv = null !== (Pv = null === (Sv = Tv.N9) || void 0 === Sv ? void 0 : Sv.position) && void 0 !== Pv ? Pv : null,
        sv = null !== (ev = Tv.Q8) && void 0 !== ev ? ev : Tv.camera.ZH(),
        Cv = Ov.i.localPlayerPickActionHelper.getPickEntityResult(sv),
        iv = null !== (gv = Tv.N9) && void 0 !== gv && gv.oB ? (0, Qv.d)(Tv.N9.oB) : "Air",
        cv = vv === Wv.d.UpFirePrimary || vv === Wv.d.UpFireSecondary,
        Gv = cv ? "onPlayerClickUp" : "onPlayerClick",
        mv = cv ? vv === Wv.d.UpFireSecondary : vv === Wv.d.DownFireSecondary,
        jv = !cv && (0, hv.getWasDoubleClick)();
      av.j.zC("mouseState", {
        Gp: vv,
        isDown: !cv
      }), (0, hv.sendColyMessage)(lv.nh, {
        Gp: vv,
        mp: jv,
        ng: wv,
        Og: Cv
      }, !0), (0, Ov.d)().client.triggerGameCallback(Gv, Tv.sV, mv, null !== (pv = null === wv || void 0 === wv ? void 0 : wv[0]) && void 0 !== pv ? pv : null, null !== (dv = null === wv || void 0 === wv ? void 0 : wv[1]) && void 0 !== dv ? dv : null, null !== (Nv = null === wv || void 0 === wv ? void 0 : wv[2]) && void 0 !== Nv ? Nv : null, iv, Cv)
    }
    window.addEventListener("keydown", (vv => {
      ["ArrowUp", "ArrowDown"].includes(vv.key) && vv.preventDefault()
    })), document.addEventListener("keydown", (vv => {
      (0, qv.d)(vv, (() => {
        const vv = (0, Ov.g)();
        return (0, tv.N)(vv) || !1 !== vv.Om.canCustomiseChar
      }))
    }))
  },
  38615: (vv, zv, Pv) => {
    Pv.d(zv, {
      c: () => ev,
      e: () => gv
    });
    var hv = Pv(37950);
    let Sv = !1;

    function ev() {
      return Sv
    }

    function gv(vv) {
      Sv = vv, vv ? hv.f.setMultiplierType("emoteWheel", 0) : hv.f.removeMultiplier("emoteWheel")
    }
  },
  38620: (vv, zv, Pv) => {
    function hv(vv) {
      return Boolean(vv.Om.useInventory && vv.Om.useFullInventory && vv.Rm.Gvv(vv.sV))
    }
    Pv.d(zv, {
      b: () => hv
    })
  },
  38502: (vv, zv, Pv) => {
    Pv.d(zv, {
      d: () => ev,
      h: () => Sv
    });
    var hv = Pv(36639);

    function Sv(vv, zv) {
      return {
        replayedClipName: vv,
        replayedClipAgeSeconds: zv
      }
    }

    function ev(vv, zv, Pv, Sv, ev) {
      const gv = function(vv) {
          if ("object" !== typeof vv || null === vv) return null;
          const {
            replayedClipName: zv,
            replayedClipAgeSeconds: Pv
          } = vv;
          return "string" === typeof zv && "number" === typeof Pv ? {
            sS: zv,
            CS: Pv
          } : null
        }(Pv),
        pv = null === gv ? Pv : null,
        {
          sS: dv = null,
          CS: Nv = 0
        } = null !== gv && void 0 !== gv ? gv : {};
      vv.animateEntity(zv, hv.f.Custom, pv, Sv, ev, dv, Nv)
    }
  },
  38522: (vv, zv, Pv) => {
    Pv.d(zv, {
      c: () => av,
      f: () => lv,
      g: () => wv,
      i: () => Wv,
      j: () => sv,
      m: () => Tv
    });
    var hv = Pv(38531),
      Sv = Pv(36720),
      ev = Pv(3438),
      gv = Pv(1884),
      pv = Pv(26),
      dv = Pv(2599);
    const Nv = new hv.c;

    function lv() {
      return Nv
    }

    function Tv() {
      Nv.clear()
    }

    function Wv() {
      for (const vv of Nv.ids()) {
        const zv = Nv.getName(vv);
        void 0 !== zv && gv.b.delete(zv)
      }
      Tv(), pv.j.zC("playerRosterChanged", Nv.ids())
    }

    function wv(vv, zv) {
      var Pv, hv;
      if (Nv.has(vv)) return Nv.getSetting(vv, zv);
      const Sv = (0, dv.g)();
      return null === (Pv = Sv.wV[Sv.sV]) || void 0 === Pv || null === (hv = Pv[vv]) || void 0 === hv ? void 0 : hv[zv]
    }

    function av(vv) {
      const {
        added: zv,
        removed: Pv,
        settingChanges: hv
      } = Nv.apply(vv);
      for (const {
          playerId: Sv,
          name: ev
        }
        of Pv) void 0 === ev || Cv(Sv) || gv.b.delete(ev);
      for (const {
          playerId: ev,
          settings: gv
        }
        of hv)
        if (Cv(ev)) sv(ev, gv);
        else
          for (const vv in gv)(0, Sv.h)(ev, vv, gv[vv]);
      (zv.length > 0 || Pv.length > 0) && pv.j.zC("playerRosterChanged", Nv.ids())
    }

    function sv(vv) {
      let zv = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Nv.getSettings(vv);
      if (zv) {
        (0, Sv.f)(vv);
        for (const Pv in zv)(0, Sv.b)(vv, Pv, zv[Pv])
      }
    }

    function Cv(vv) {
      return vv === (0, dv.g)().W8 || (0, dv.d)().client.hasEntity(vv)
    }(0, ev.onGameReset)(Tv)
  },
  37626: (vv, zv, Pv) => {
    Pv.d(zv, {
      d: () => Ov,
      f: () => fv,
      i: () => Yv,
      j: () => nv,
      l: () => Dv
    });
    var hv = Pv(36591),
      Sv = Pv(37633),
      ev = Pv(327),
      gv = Pv.n(ev),
      pv = Pv(3142);
    const dv = new hv.fa,
      Nv = new hv.fa,
      lv = new hv.fa,
      Tv = new hv.fa,
      Wv = new hv.fa,
      wv = [0, 0, 0],
      av = {
        x: 0,
        y: 0
      },
      sv = new hv.fa(1, 0, 0),
      Cv = new hv.fa(0, 1, 0),
      iv = hv.Matrix.Identity(),
      cv = new hv.Matrix,
      Gv = new hv.Matrix,
      mv = new hv.fa,
      jv = new Sv.d(0, 0, 0, 0);

    function fv(vv, zv) {
      var Pv, Sv;
      const ev = Fv(vv, zv);
      if (ev) {
        const vv = ev.x,
          zv = ev.y,
          Pv = vv - 50,
          hv = zv - 50;
        return Math.abs(Pv) <= pv.e && Math.abs(hv) <= (0, pv.n)() ? {
          x: vv,
          y: zv
        } : Vv(Pv, hv)
      }
      lv.f_(zv[0], zv[1], zv[2]),
        function(vv) {
          const zv = vv.Ma.xzv(),
            Pv = zv ? hv.Matrix.FromArrayToRef(zv.worldMatrix, 0, Gv) : vv.Ma.rD().activeCamera.getWorldMatrix();
          hv.fa.TransformNormalToRef(sv, Pv, Tv), Tv.normalize(), hv.fa.TransformNormalToRef(Cv, Pv, Wv), Wv.normalize()
        }(vv);
      const gv = hv.fa.Dot(lv, Tv);
      let dv = -hv.fa.Dot(lv, Wv);
      Math.abs(gv) < .001 && Math.abs(dv) < .001 && (dv = -1);
      const Nv = null !== (Pv = null === (Sv = vv.Ma.xzv()) || void 0 === Sv ? void 0 : Sv.projectionMatrix) && void 0 !== Pv ? Pv : vv.Ma.rD().activeCamera.getProjectionMatrix().m;
      return Vv(gv * Nv[0], dv * Nv[5])
    }

    function Fv(vv, zv) {
      const Pv = vv.Ma.rD(),
        Sv = Pv.ma(),
        ev = Sv.getRenderWidth(),
        gv = Sv.getRenderHeight();
      jv.width = ev, jv.height = gv;
      const pv = vv.Ma.xzv(),
        lv = pv ? mv.f_(pv.eye[0], pv.eye[1], pv.eye[2]) : vv.Ma.camera.globalPosition;
      dv.f_(lv.x + 10 * zv[0], lv.y + 10 * zv[1], lv.z + 10 * zv[2]);
      const Tv = pv ? hv.Matrix.FromArrayToRef(pv.viewProjectionMatrix, 0, cv) : Pv.getTransformMatrix();
      return hv.fa.ProjectToRef(dv, iv, Tv, jv, Nv), Nv.z < 0 || Nv.z > 1 ? null : (av.x = Nv.x / ev * 100, av.y = Nv.y / gv * 100, av)
    }

    function Yv(vv, zv) {
      return fv(vv, Kv(vv, zv))
    }

    function nv(vv, zv) {
      const Pv = Fv(vv, Kv(vv, zv));
      return Pv && {
        x: Pv.x,
        y: Pv.y
      }
    }

    function Ov(vv) {
      var zv, Pv;
      return 1 / (null !== (zv = null === (Pv = vv.Ma.xzv()) || void 0 === Pv ? void 0 : Pv.projectionMatrix[0]) && void 0 !== zv ? zv : vv.Ma.rD().activeCamera.getProjectionMatrix().m[0])
    }

    function Dv(vv, zv, Pv) {
      const hv = vv.Ma.xzv(),
        Sv = hv ? hv.worldMatrix : vv.Ma.rD().activeCamera.getWorldMatrix().m,
        ev = vv.iW;
      for (let gv = 0; gv < 3; gv++) zv[gv] = Sv[12 + gv] + ev[gv], Pv[gv] = Sv[8 + gv];
      gv().normalize(Pv, Pv)
    }

    function Kv(vv, zv) {
      const Pv = vv.iW,
        hv = vv.Ma.xzv(),
        Sv = hv ? mv.f_(hv.eye[0], hv.eye[1], hv.eye[2]) : vv.Ma.camera.globalPosition;
      return wv[0] = zv[0] - Pv[0] - Sv.x, wv[1] = zv[1] - Pv[1] - Sv.y, wv[2] = zv[2] - Pv[2] - Sv.z, gv().normalize(wv, wv), wv
    }

    function Vv(vv, zv) {
      return (0, pv.i)(vv, zv, pv.e, (0, pv.n)())
    }
  },
  38573: (vv, zv, Pv) => {
    Pv.d(zv, {
      c: () => pv
    });
    var hv = Pv(26),
      Sv = Pv(1272),
      ev = Pv(3218);
    const gv = "Reconnecting";
    class pv {
      constructor(vv) {
        this.hooks = vv, this.graceMs = 0, this.sessionBased = !1, this.controller = void 0, this.frozen = !1, this.stopped = !1, this.listening = !1, this.ended = !1, this.retryNow = () => {
          "visible" === document.visibilityState && this.controller.retryNow()
        }, this.onPageHide = vv => {
          vv.persisted || this.leave()
        }, this.controller = new ev.b((zv => vv.reconnect(zv)), {
          isSessionLive: () => !this.ended && vv.isLive(),
          onPhaseChanged: vv => {
            this.onPhaseChanged(vv)
          },
          onReconnected: zv => {
            vv.onReconnected(zv)
          },
          onGaveUp: zv => {
            !this.ended && vv.isLive() && vv.onGaveUp(this.sessionBased, zv)
          }
        })
      }
      onInitialInfo(vv, zv) {
        this.graceMs = vv, this.sessionBased = zv
      }
      canHoldSeat() {
        return this.graceMs > 0 && !this.ended
      }
      isResuming() {
        return "connected" !== this.controller.phase
      }
      onConnectionLost(vv) {
        this.ended || this.controller.onConnectionLost(vv, this.graceMs)
      }
      onResuming() {
        this.ended || this.controller.onResuming()
      }
      onResumed() {
        this.controller.stop()
      }
      leave() {
        const vv = this.isResuming() && !this.controller.awaitingResumeOnRoom,
          zv = this.controller.heldToken;
        this.end(), vv && "" !== zv && this.hooks.releaseSeat(zv)
      }
      end() {
        this.ended = !0, this.controller.stop()
      }
      onPhaseChanged(vv) {
        const zv = "frozen" === vv || "resuming" === vv;
        zv !== this.stopped && (this.stopped = zv, this.hooks.freeze(zv));
        const Pv = "frozen" === vv || "resuming" === vv && this.frozen;
        Pv && !this.frozen ? (0, Sv.r)(gv) : !Pv && this.frozen && (0, Sv.q)(gv), this.frozen = Pv, this.setListening("connected" !== vv), hv.j.zC(ev.p, Pv ? "frozen" : vv)
      }
      setListening(vv) {
        vv !== this.listening && (this.listening = vv, vv ? (window.addEventListener("online", this.retryNow), document.addEventListener("visibilitychange", this.retryNow), window.addEventListener("pagehide", this.onPageHide)) : (window.removeEventListener("online", this.retryNow), document.removeEventListener("visibilitychange", this.retryNow), window.removeEventListener("pagehide", this.onPageHide)))
      }
    }
  },
  38579: (vv, zv, Pv) => {
    Pv.d(zv, {
      e: () => hv
    });
    class hv {
      constructor(vv) {
        let zv = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Date.now;
        this.onSilent = vv, this.now = zv, this.lastHeardAt = void 0, this.resumedAt = void 0, this.lastCheckAt = void 0, this.wasVisible = "visible" === document.visibilityState, this.interval = void 0, this.check = () => {
          const vv = this.now(),
            zv = vv - this.lastCheckAt <= 2e3;
          this.lastCheckAt = vv;
          const Pv = "visible" === document.visibilityState;
          !Pv || zv && this.wasVisible || (this.resumedAt = vv), this.wasVisible = Pv, Pv && vv - this.lastHeardAt > 12e3 && vv - this.resumedAt > 2e3 && this.onSilent()
        }, this.lastHeardAt = zv(), this.resumedAt = this.lastHeardAt, this.lastCheckAt = this.lastHeardAt, this.interval = setInterval(this.check, 1e3), document.addEventListener("visibilitychange", this.check), window.addEventListener("online", this.check)
      }
      heard() {
        this.lastHeardAt = this.now()
      }
      dispose() {
        clearInterval(this.interval), document.removeEventListener("visibilitychange", this.check), window.removeEventListener("online", this.check)
      }
    }
  },
  38547: (vv, zv, Pv) => {
    Pv.d(zv, {
      e: () => Wv
    });
    var hv = Pv(185),
      Sv = Pv(327),
      ev = Pv.n(Sv),
      gv = Pv(36269),
      pv = Pv(36271),
      dv = Pv(2599);
    const Nv = hv.f.lG * hv.f.playerEyeToHeightRatio,
      lv = 250,
      Tv = 1.1,
      Wv = new class {
        constructor() {
          this.entities = new Map, this.playing = new Map, this.msSinceLastScan = 0
        }
        add(vv, zv) {
          this.entities.set(vv, zv)
        }
        update(vv, zv) {
          const Pv = this.entities.get(vv);
          this.entities.set(vv, zv);
          const hv = this.playing.get(vv);
          hv && (Pv && Pv.soundName === zv.soundName ? (hv.sound.setRelativeVolume(zv.volume), hv.sound.rate(zv.rate), hv.sound.setPannerAttr({
            refDistance: zv.refDistance
          })) : this.stopEntity(vv))
        }
        remove(vv) {
          this.stopEntity(vv), this.entities.delete(vv)
        }
        MT(vv) {
          this.msSinceLastScan += vv, this.msSinceLastScan < lv || (this.msSinceLastScan = 0, this.scan())
        }
        stopEntity(vv) {
          const zv = this.playing.get(vv);
          zv && (zv.sound.stop(), this.playing.delete(vv))
        }
        startEntity(vv, zv, Pv) {
          const hv = (0, pv.e)(zv.soundName);
          if (!hv) return console.error(`AudioEntityManager: no sound found for "${zv.soundName}", dropping audio entity ${vv}`), void this.remove(vv);
          const Sv = gv.c.play(hv, zv.volume, Pv, zv.maxHearDist, zv.refDistance, !0);
          Sv.rate(zv.rate), this.playing.set(vv, {
            sound: Sv,
            lastPos: ev().clone(Pv)
          })
        }
        scan() {
          const vv = (0, dv.g)();
          if (!vv) return;
          const zv = vv.Rm.yG(vv.sV);
          if (zv)
            for (const [Pv, hv] of this.entities) {
              if (!vv.Rm.R7(Pv, "position")) continue;
              const Sv = vv.Rm.yG(Pv),
                gv = ev().sqrDist(zv, Sv),
                pv = this.playing.get(Pv);
              if (pv) {
                const vv = hv.maxHearDist * Tv;
                gv > vv * vv ? this.stopEntity(Pv) : ev().equals(Sv, pv.lastPos) || (pv.sound.setPosition([Sv[0], Sv[1] + Nv, Sv[2]]), ev().copy(pv.lastPos, Sv))
              } else gv <= hv.maxHearDist * hv.maxHearDist && this.startEntity(Pv, hv, Sv)
            }
        }
      }
  },
  38596: (vv, zv, Pv) => {
    Pv.d(zv, {
      e: () => Nv,
      h: () => lv
    });
    var hv = Pv(1676),
      Sv = Pv(185),
      ev = Pv(1657),
      gv = Pv(1741),
      pv = Pv(1184),
      dv = Pv(1114);
    async function Nv(vv, zv) {
      return function(vv) {
        return "object" === typeof vv && null !== vv && vv.code === Sv.b.VpnIp.code
      }(zv) && function(vv) {
        return ev.d.supports("appCheck") && vv.isLoggedIn() && !vv.hasTriedAppAttestation()
      }(vv) && await async function(vv) {
        try {
          const {
            token: zv
          } = await (0, gv.e)(), {
            "3PSIDMCPP": Pv
          } = await (0, dv.postJsonWithMetricsCookiesAndJsonResponse)(`${pv.clientSideServerUrls.indexUrl}/index/app-attestation`, {
            appCheckToken: zv
          }, {
            retries: 0
          }, vv.getMetricsCookies());
          return vv.setAppAttestedAuthJwt(Pv), !0
        } catch (zv) {
          return zv instanceof hv.b && "failed" === zv.code ? (console.warn("The app couldn't get an App Check token:", zv), vv.markAppAttestationTried()) : console.error("Failed to attest the app:", zv), !1
        }
      }(vv)
    }
    async function lv(vv, zv) {
      try {
        return await zv()
      } catch (Pv) {
        if (!await Nv(vv, Pv)) throw Pv
      }
      return zv()
    }
  },
  38587: (vv, zv, Pv) => {
    Pv.d(zv, {
      d: () => Wv,
      f: () => lv
    });
    var hv = Pv(185),
      Sv = Pv(1773),
      ev = Pv(1779),
      gv = Pv(8572);
    const pv = [250, 500, 1e3, 2e3, 1250],
      dv = 406;

    function Nv(vv) {
      if ("object" !== typeof vv || null === vv) return !1;
      const {
        code: zv,
        message: Pv
      } = vv, Sv = hv.b.duplicateLobbyNameError;
      return (zv === Sv.code || zv === dv) && (Pv === Sv.text || Pv === Sv.text + hv.l)
    }
    async function lv(vv, zv) {
      let Pv = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Sv.b;
      for (let Sv = 0;; Sv++) {
        let gv;
        (0, ev.p)(zv);
        try {
          return await vv()
        } catch (hv) {
          if (gv = pv[Sv], void 0 === gv || !Nv(hv)) throw hv
        }
        await Pv(gv, zv)
      }
    }
    const Tv = new Set([hv.b.duplicateLobbyNameError.code, hv.b.lobbyCantBeCreated.code, hv.b.roomDisposedEarlyError.code, hv.b.roomDisposedLateError.code, hv.b.serverRoomLimitReached.code]);

    function Wv(vv) {
      if (Nv(vv)) return !0;
      const zv = (0, gv.g)(vv);
      return "number" === typeof zv && Tv.has(zv)
    }
  },
  38511: (vv, zv, Pv) => {
    Pv.d(zv, {
      d: () => ev,
      e: () => Sv
    });
    var hv = Pv(26);

    function Sv(vv) {
      return "refetchCode" === vv || "devDownloadJson" === vv || vv.startsWith("Plugin")
    }

    function ev(vv, zv) {
      "refetchCode" !== vv ? "Plugin|MobAiPlugin|ShowPetUi" !== vv ? Promise.all([Pv.e(106), Pv.e(107), Pv.e(102), Pv.e(104), Pv.e(210)]).then((() => Pv(41044))).then((Pv => {
        let {
          runClientGameMessage: hv
        } = Pv;
        hv(vv, zv)
      })).catch((zv => {
        console.error(`Game message ${vv} failed`, zv)
      })) : hv.j.zC("showPetUi", zv) : hv.j.zC("refetchCode")
    }
  },
  8572: (vv, zv, Pv) => {
    Pv.d(zv, {
      d: () => ev,
      g: () => gv,
      h: () => pv,
      k: () => Nv,
      n: () => dv
    });
    var hv = Pv(185),
      Sv = Pv(4386);

    function ev(vv) {
      return gv(vv) === hv.b.gameOrPluginOnPlayerAuthRejected.code
    }

    function gv(vv) {
      return "object" === typeof vv && null !== vv ? vv.code : void 0
    }

    function pv(vv) {
      var zv;
      return null !== (zv = Object.keys(Sv.d).find((zv => Sv.d[zv] === vv))) && void 0 !== zv ? zv : null
    }

    function dv(vv) {
      return "notWhitelisted" === vv ? "customLobby:cantJoinNotWhitelistedTitle" : "customLobby:cantJoinWorld"
    }
    const Nv = {
      private: "customLobby:cantJoinPrivate",
      notWhitelisted: "customLobby:cantJoinNotWhitelisted",
      banned: "customLobby:cantJoinBanned",
      adminLocked: "customLobby:cantJoinAdminLocked"
    }
  },
  38604: (vv, zv, Pv) => {
    Pv.d(zv, {
      d: () => hv,
      g: () => Sv
    });
    const hv = 45e3;
    class Sv extends Error {
      constructor() {
        super("The game server didn't answer in time"), this.name = "SeatRequestTimedOut"
      }
    }
  },
  38505: (vv, zv, Pv) => {
    Pv.d(zv, {
      c: () => lv
    });
    var hv = Pv(1209),
      Sv = Pv(1311),
      ev = Pv(22),
      gv = Pv(1295),
      pv = Pv(1306),
      dv = Pv(1492),
      Nv = Pv(36010);

    function lv(vv) {
      let {
        CP: zv,
        iP: Pv
      } = vv;
      const lv = null !== zv && void 0 !== zv ? zv : (0, pv.c)().gameNameWithVariation;
      (0, hv.P)(lv) && ((0, Nv.m)(), (0, gv.eb)((() => {
        console.log("Received matchmaking order from game server to game", zv), (0, ev.g)("inGameReplay"), (0, dv.navigatePreserveSearch)((0, Sv.e)(lv, null !== Pv && void 0 !== Pv ? Pv : void 0))
      }), "video_start"))
    }
  },
  38496: (vv, zv, Pv) => {
    Pv.d(zv, {
      b: () => dv,
      d: () => gv,
      g: () => pv,
      k: () => Nv
    });
    var hv = Pv(26),
      Sv = Pv(1336);
    const ev = new Map;

    function gv(vv, zv) {
      hv.j.zC("newUiRequest", {
        id: vv,
        clientParameters: zv
      }, !0)
    }

    function pv(vv) {
      hv.j.zC("removeUiRequest", vv, !0);
      const zv = ev.get(vv);
      zv && (zv.tearDownNotification(), ev.delete(vv))
    }

    function dv() {
      hv.j.zC("clearUiRequests");
      for (const vv of ev.values()) vv.tearDownNotification();
      ev.clear()
    }

    function Nv(vv, zv, Pv) {
      const hv = Sv.NotificationProvider.showPromptPopup({
        title: zv,
        confirmText: "general:yes",
        cancelText: "general:no",
        unlockPointerKey: "uiRequestPopup"
      });
      ev.set(vv, hv), hv.getResult().then((zv => {
        ev.delete(vv), "notificationTornDown" !== zv && Pv(zv)
      }))
    }
  },
  38515: (vv, zv, Pv) => {
    Pv.d(zv, {
      c: () => pv,
      g: () => dv,
      h: () => Nv
    });
    var hv = Pv(1209),
      Sv = Pv(1002),
      ev = Pv(36372),
      gv = Pv(26);

    function pv(vv) {
      let {
        lobbyName: zv,
        gameNameWithVariation: Pv
      } = vv;
      return !(0, hv.S)(zv) || null !== Pv && (Pv.startsWith("testGym") || (0, Sv.l)(Pv))
    }

    function dv(vv) {
      return vv.ah === ev.b.Leave || vv.ah === ev.b.Cursor
    }

    function Nv(vv) {
      gv.j.zC("codeCollab", {
        type: vv.ah,
        docKey: vv.sh,
        version: vv.Ch,
        editorCount: vv.ih,
        peers: vv.Gh,
        updates: vv.mh,
        playerId: vv.jh,
        playerName: vv.fh,
        colour: vv.Fh,
        anchor: vv.Yh,
        head: vv.nh,
        existingCursors: vv.Oh,
        files: vv.Dh,
        engineSettings: vv.Kh
      })
    }
  },
  38531: (vv, zv, Pv) => {
    Pv.d(zv, {
      c: () => hv
    });
    class hv {
      constructor() {
        this.members = new Map
      }
      apply(vv) {
        const zv = {
          added: [],
          removed: [],
          settingChanges: []
        };
        for (const hv of vv.dz) {
          let vv = this.members.get(hv.Nz);
          if (vv || (vv = {
              name: null,
              settings: {}
            }, this.members.set(hv.Nz, vv), zv.added.push(hv.Nz)), null !== hv.lz && (vv.name = hv.lz), null !== hv.Tz || hv.Wz.length > 0) {
            const Pv = null === hv.Tz ? {} : JSON.parse(hv.Tz);
            Object.assign(vv.settings, Pv);
            for (const zv of hv.Wz) delete vv.settings[zv], Pv[zv] = void 0;
            zv.settingChanges.push({
              playerId: hv.Nz,
              settings: Pv
            })
          }
        }
        for (const hv of vv.wz) {
          const vv = this.members.get(hv);
          var Pv;
          if (vv) this.members.delete(hv), zv.removed.push({
            playerId: hv,
            name: null !== (Pv = vv.name) && void 0 !== Pv ? Pv : void 0
          })
        }
        return zv
      }
      has(vv) {
        return this.members.has(vv)
      }
      ids() {
        return [...this.members.keys()]
      }
      getName(vv) {
        var zv, Pv;
        return null !== (zv = null === (Pv = this.members.get(vv)) || void 0 === Pv ? void 0 : Pv.name) && void 0 !== zv ? zv : void 0
      }
      getSettings(vv) {
        var zv;
        return null === (zv = this.members.get(vv)) || void 0 === zv ? void 0 : zv.settings
      }
      getSetting(vv, zv) {
        var Pv;
        return null === (Pv = this.members.get(vv)) || void 0 === Pv ? void 0 : Pv.settings[zv]
      }
      clear() {
        this.members.clear()
      }
    }
  },
  38566: (vv, zv, Pv) => {
    Pv.d(zv, {
      c: () => hv,
      f: () => Sv
    });
    const hv = ["description", "label"];

    function Sv(vv) {
      const zv = vv.type;
      return {
        type: zv,
        params: vv[zv]
      }
    }
  }
};
Object.freeze(modules);
for (const vv in modules) Object.freeze(modules[vv]);