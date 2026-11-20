export const id = 155;
export const ids = [155];
export const modules = {
  38492: (zz, tz, sz) => {
    sz.d(tz, {
      e: () => Xz,
      f: () => Oz
    });
    var Fz = sz(34);
    let Wz = !1;

    function Xz() {
      return Wz
    }

    function Oz(zz) {
      Wz !== zz && (Wz = zz, Fz.o.Yg("replayViewer|videoExportChanged"))
    }
  },
  38372: (zz, tz, sz) => {
    sz.d(tz, {
      d: () => Xz
    });
    var Fz = sz(34),
      Wz = sz(1884);

    function Xz(zz) {
      let {
        taskId: tz,
        progress: sz
      } = zz;
      const Fz = Wz.e.get("_tasks");
      null !== Fz && void 0 !== Fz && Fz[tz] && Wz.e.apply({
        _tasks: {
          ...Fz,
          [tz]: {
            ...Fz[tz],
            progress: sz
          }
        }
      })
    }
    Fz.o.subscribe("clientTaskProgress", (zz => {
      Xz(zz)
    }))
  },
  38514: (zz, tz, sz) => {
    sz.d(tz, {
      d: () => Dz,
      g: () => gz,
      i: () => wz
    });
    var Fz = sz(2637);
    const Wz = 0,
      Xz = 2,
      Oz = 3,
      oz = 4;
    class vz {
      constructor(zz, tz) {
        this.width = zz, this.au = tz, this.data = void 0, this.next = 0, this.size = 0, this.data = new Float64Array(zz * tz)
      }
      push(zz) {
        let tz = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        const sz = this.data.subarray(this.next * this.width, (this.next + 1) * this.width);
        for (let Fz = 0; Fz < this.width; Fz++) sz[Fz] = zz[tz + Fz];
        return this.next = (this.next + 1) % this.au, this.size = Math.min(this.size + 1, this.au), sz
      }
      lines() {
        const zz = [],
          tz = (this.next - this.size + this.au) % this.au;
        for (let sz = 0; sz < this.size; sz++) {
          const Fz = (tz + sz) % this.au * this.width;
          zz.push(Array.from(this.data.subarray(Fz, Fz + this.width)).join(","))
        }
        return zz
      }
    }

    function Uz(zz) {
      return Number.isFinite(zz) ? String(Math.round(10 * zz) / 10) : String(zz)
    }

    function Kz(zz) {
      return Number.isFinite(zz) ? zz.toFixed(1) : String(zz)
    }
    class uz {
      constructor() {
        this.frames = 0, this.looked = 0, this.idle = 0, this.Iy = 0, this.pastLimit = 0, this.lockSkips = 0, this.nb = 0, this.lost = 0, this.dropped = 0, this.longFrames = 0, this.dtMin = 1 / 0, this.dtMax = 0, this.dtSum = 0, this.raw = [0, 0], this.turned = [0, 0], this.peakRate = 0, this.events = 0, this.eventMax = 0, this.bigEvents = 0, this.outliers = 0, this.eventLines = 0, this.suppressed = 0
      }
    }
    class Nz {
      constructor() {
        var zz = this;
        this.tally = new uz, this.records = new vz(10, 3600), this.events = new vz(4, 12e3), this.event = new Float64Array(4), this.take = null, this.client = "js", this.started = !1, this.record = function(tz) {
          let sz = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
          const [Fz, vz, uz, Nz, bz, wz, Dz, gz, Hz, Bz] = zz.records.push(tz, sz), Pz = zz.tally;
          switch (Pz.frames++, Dz) {
            case Wz:
              return void Pz.idle++;
            case oz:
              return void Pz.nb++;
            case Oz:
              return Pz.lockSkips++, void(0 === uz && 0 === Nz || zz.outlier(`lock skip dropped raw (${Uz(uz)}, ${Uz(Nz)}) at ${Kz(Fz)} ms`))
          }
          Pz.looked++, Number.isFinite(vz) && (Pz.dtMin = Math.min(Pz.dtMin, vz), Pz.dtMax = Math.max(Pz.dtMax, vz), Pz.dtSum += vz, vz > 0 && (Pz.peakRate = Math.max(Pz.peakRate, Math.hypot(bz, wz) / vz))), Pz.raw[0] += uz, Pz.raw[1] += Nz, Pz.turned[0] += bz, Pz.turned[1] += wz;
          const rz = Math.abs(uz) > Bz || Math.abs(Nz) > Bz,
            Yz = `raw (${Uz(uz)}, ${Uz(Nz)}) over ${Kz(vz)} ms, limit ${Uz(Bz)}, filter v (${gz.toFixed(3)}, ${Hz.toFixed(3)}) px/ms, at ${Kz(Fz)} ms`;
          Dz === Xz ? (Pz.Iy++, zz.outlier(`spike put right: ${Yz} -> turned (${Uz(bz)}, ${Uz(wz)})`)) : rz ? (Pz.pastLimit++, zz.outlier(`kept past limit: ${Yz}`)) : vz > 50 && (Pz.longFrames++, zz.outlier(`long frame: ${Yz}, turned in full`))
        }, this.onMouseMove = zz => {
          const tz = this.tally,
            {
              movementX: sz,
              movementY: Fz
            } = zz;
          tz.events++;
          const Wz = Math.max(Math.abs(sz), Math.abs(Fz));
          tz.eventMax = Math.max(tz.eventMax, Wz);
          const Xz = null !== document.pointerLockElement,
            Oz = this.event;
          Oz[0] = zz.timeStamp, Oz[1] = sz, Oz[2] = Fz, Oz[3] = Xz ? 1 : 0, this.events.push(Oz), Wz >= 200 && (tz.bigEvents++, this.eventOutlier(`big mousemove (${sz}, ${Fz}) at ${Kz(zz.timeStamp)} ms, lock ${Xz?"po":"free"}`))
        }, this.onLockChange = () => {
          const zz = document.pointerLockElement;
          (0, Fz.g)("look", `pointer lock ${zz?`gained (${zz.tagName.toLowerCase()})`:"lost"} at ${Kz(performance.now())} ms`)
        }, this.onLockError = () => {
          (0, Fz.g)("look", `pointer lock request failed at ${Kz(performance.now())} ms`)
        }, this.onVisibility = () => {
          (0, Fz.g)("look", `page ${document.visibilityState} at ${Kz(performance.now())} ms`)
        }, this.flush = () => {
          this.takeRecords();
          const zz = this.tally;
          if (this.tally = new uz, 0 === zz.events && 0 === zz.raw[0] && 0 === zz.raw[1] && 0 === zz.lockSkips && 0 === zz.Iy && 0 === zz.dropped) return;
          const tz = zz.looked > 0 ? zz.dtSum / zz.looked : NaN,
            sz = [`${zz.frames} frames (${zz.looked} looked, ${zz.idle} idle${"wasm"===this.client?`, ${zz.nb} carried`:""})`, `dt avg ${Kz(tz)} min ${Kz(zz.dtMin)} max ${Kz(zz.dtMax)}, ${zz.longFrames} long`, `${zz.events} mousemoves (max ${Uz(zz.eventMax)} px, ${zz.bigEvents} big)`, `raw (${Uz(zz.raw[0])}, ${Uz(zz.raw[1])}) turned (${Uz(zz.turned[0])}, ${Uz(zz.turned[1])})`, `peak ${zz.peakRate.toFixed(2)} px/ms`, `put right ${zz.Iy}, past limit ${zz.pastLimit}, lock skips ${zz.lockSkips}`, "lock " + (document.pointerLockElement ? "po" : "free")];
          zz.dropped > 0 && sz.push(`${zz.dropped} doubled spike copies dropped`), zz.lost > 0 && sz.push(`${zz.lost} records lost`), zz.suppressed > 0 && sz.push(`${zz.suppressed} outlier lines not shown`), (0, Fz.g)("look", `1s: ${sz.join("; ")}`)
        }, this.dump = () => [`look records (${this.client}): nowMs,dtMs,rawX,rawY,turnedX,turnedY,outcome,vX,vY,limit`, ...this.records.lines(), "mousemove events: timeStamp,movementX,movementY,locked", ...this.events.lines()].join("\n")
      }
      start(zz, tz) {
        this.client = zz, this.take = tz;
        const {
          screen: sz
        } = window;
        (0, Fz.g)("look", `start: ${zz} client, dpr ${window.devicePixelRatio}, screen ${sz.width}x${sz.height}, pointer lock ${document.pointerLockElement?"po":"free"}`), this.started || (this.started = !0, window.addEventListener("mousemove", this.onMouseMove, {
          capture: !0,
          passive: !0
        }), document.addEventListener("pointerlockchange", this.onLockChange), document.addEventListener("pointerlockerror", this.onLockError), document.addEventListener("visibilitychange", this.onVisibility), setInterval(this.flush, 1e3), (0, Fz.f)("look", this.dump))
      }
      outlier(zz) {
        const tz = this.tally;
        tz.outliers >= 20 ? tz.suppressed++ : (tz.outliers++, (0, Fz.g)("look", zz))
      }
      eventOutlier(zz) {
        const tz = this.tally;
        tz.eventLines >= 10 ? tz.suppressed++ : (tz.eventLines++, (0, Fz.g)("look", zz))
      }
      takeRecords() {
        var zz;
        const tz = null === (zz = this.take) || void 0 === zz ? void 0 : zz.call(this);
        if (tz && tz.length >= 2) {
          this.tally.lost += tz[0], this.tally.dropped += tz[1];
          for (let zz = 2; zz + 10 <= tz.length; zz += 10) this.record(tz, zz)
        }
      }
      droppedCopy() {
        this.tally.dropped++
      }
      endTake() {
        this.takeRecords(), this.take = null
      }
    }
    let bz = null;

    function wz(zz) {
      let tz = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
      return bz ??= new Nz, bz.start(zz, tz), bz.record
    }

    function Dz() {
      var zz;
      null === (zz = bz) || void 0 === zz || zz.endTake()
    }

    function gz() {
      var zz;
      null === (zz = bz) || void 0 === zz || zz.droppedCopy()
    }
  },
  38364: (zz, tz, sz) => {
    sz.d(tz, {
      d: () => Lt,
      h: () => kt,
      k: () => it
    });
    var Fz = sz(3348),
      Wz = sz(161),
      Xz = sz(201),
      Oz = sz(585),
      oz = sz(44),
      vz = sz(2555),
      Uz = sz(3433),
      Kz = sz(3417),
      uz = sz(1213);
    const Nz = new WeakMap;
    class bz {
      constructor(zz, tz) {
        let sz = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {
          bUz: !0
        };
        this.callbacks = tz, this.options = sz, this.tsz = void 0, this.sessionId = void 0, this.Hx = [], this.wUz = !1, this.lw = !1, this.DUz = void 0, this.vx = 0, this.tWz = 0, this.gUz = (zz, tz) => {
          if (this.lw) return;
          const sz = Number(zz);
          this.wUz ? this.HUz(sz, tz) : this.Hx.push({
            id: sz,
            payload: tz
          })
        }, this.dispose = () => {
          this.lw || (this.lw = !0, Nz.delete(this), this.Hx.length = 0, this.DUz())
        }, this.tsz = zz, this.sessionId = zz.sessionId, Nz.set(this, []), this.DUz = this.BUz()
      }
      PUz(zz) {
        this.DUz(), this.tsz = zz, this.sessionId = zz.sessionId, this.vx = 0, this.tWz = 0, this.DUz = this.BUz()
      }
      get EY() {
        return this.tWz
      }
      BUz() {
        const zz = this.tsz.nB("*", this.gUz);
        return this.options.bUz && this.tsz.qB(this.dispose), zz
      }
      HUz(zz, tz) {
        try {
          (0, Uz.Zb)(zz) && (tz = (0, Uz.b)(zz, Kz.Lw.from(tz)));
          const sz = Nz.get(this)[zz];
          if ("function" !== typeof sz) {
            if (this.callbacks.rUz) return void this.callbacks.rUz(zz, tz);
            throw new Error(`No onMessage handler registered for message id ${zz}`)
          }
          sz(tz)
        } catch (sz) {
          this.callbacks.YUz(`Error in onMessage ${zz} with payload ${JSON.stringify(tz)}`, sz)
        } finally {
          this.vx++
        }
      }
      xUz() {
        for (const {
            id: zz,
            payload: tz
          }
          of this.Hx) {
          if (this.lw) break;
          this.HUz(zz, tz)
        }
        this.Hx.length = 0
      }
      zsz() {
        return this.lw
      }
      mUz() {
        if (this.wUz || this.lw) throw new Error("Trying to getOnMessageRegistrationHandler after registration finished");
        return {
          nB: (zz, tz) => {
            if (this.wUz || this.lw) throw new Error("Trying to call onMessage after registration finished");
            this.nB(zz, tz)
          },
          finishRegistration: () => {
            if (this.lw) throw new Error("Cannot finish message registration after disposal");
            this.wUz = !0, this.xUz()
          }
        }
      }
      nB(zz, tz) {
        var sz, Fz;
        null === (sz = (Fz = this.callbacks).JUz) || void 0 === sz || sz.call(Fz);
        const Wz = Nz.get(this);
        for (; zz > Wz.length;) Wz[Wz.length] = null;
        Wz[zz] = tz
      }
      send(zz, tz) {
        this.IUz(), (0, uz.F)(tz) ? this.tsz.Om(zz, tz) : this.tsz.send(zz, tz)
      }
      IUz() {
        var zz, tz;
        (this.tWz++, 5 === wz++) && (null === (zz = (tz = this.callbacks).JUz) || void 0 === zz || zz.call(tz), wz = 0)
      }
      YH() {
        this.dispose(), this.tsz.YH()
      }
      leave() {
        this.dispose(), this.tsz.leave()
      }
    }
    let wz = 0;
    var Dz = sz(3365);
    class gz extends bz {
      constructor(zz) {
        super(zz, {
          JUz: () => {
            (0, oz.l)(!0) && (0, Fz.fY)()
          },
          YUz: (zz, tz) => {
            var sz;
            null === (sz = (0, vz.e)()) || void 0 === sz || sz.aD(zz, tz)
          }
        }, {
          bUz: !1
        }), (0, Dz.e)(zz)
      }
      Bx(zz, tz) {
        return !!(0, Dz.i)((0, Dz.c)(), this.tsz, zz, tz) && (this.IUz(), !0)
      }
      PUz(zz) {
        this.CUz(), super.PUz(zz), (0, Dz.e)(zz)
      }
      YH() {
        super.YH(), this.CUz()
      }
      CUz() {
        this.tsz.xH.Gw.yJ = void 0
      }
    }
    var Hz = sz(34),
      Bz = sz(1884),
      Pz = sz(1664),
      rz = sz(35962);

    function Yz(zz, tz, sz, Fz, Wz) {
      let Xz = arguments.length > 5 && void 0 !== arguments[5] && arguments[5];
      if (!zz.Qr.Rzz(zz.gC)) return console.log("Got resync inven but don't have inven component"), void tz.acknowledge(Fz);
      Xz && console.error("Had to sync inven"), tz.x_(Fz, Wz) && sz.Yg("chestToggleFromServer", !1, !0), sz.Yg("syncedInvenFromServer")
    }
    var xz = sz(38372),
      mz = sz(38379),
      Jz = sz(37470),
      Iz = sz(37237),
      Cz = sz(580),
      ez = sz(37829);

    function Zz(zz, tz, sz) {
      const Fz = function(zz) {
          const tz = new Int32Array(zz.length * ez.f);
          return zz.forEach(((zz, sz) => {
            const Fz = sz * ez.f;
            if (4 === zz.length) {
              const [sz, Wz, Xz, Oz] = zz;
              tz.set([sz, Wz, Xz, sz, Wz, Xz, Oz], Fz)
            } else {
              const [sz, Wz, Xz, Oz, oz, vz, Uz] = zz;
              tz.set([sz, Xz, oz, Wz, Oz, vz, Uz], Fz)
            }
          })), tz
        }(sz),
        Wz = (tz, sz, Fz, Wz) => {
          zz.setBlockNoMulti(tz, sz, Fz, Wz, !0)
        };
      zz.client.gameRecorder.isCapturing() ? (0, ez.db)(Fz, (0, ez.cb)(Fz), Wz) : zz.CN.PN.JA(Fz, {
        Wy: Wz,
        isHookId: tz => zz.blockChangeHasHooks(tz),
        watched: () => function(zz, tz, sz) {
          const Fz = [],
            Wz = (zz, tz, sz) => {
              Fz.push(zz, tz, sz)
            },
            Xz = new Set;
          for (let Oz = 0; Oz < sz.length; Oz += ez.f)
            for (let tz = (0, Cz.N)(sz[Oz]); tz <= (0, Cz.N)(sz[Oz + 3]); tz++)
              for (let Fz = (0, Cz.N)(sz[Oz + 1]); Fz <= (0, Cz.N)(sz[Oz + 4]); Fz++)
                for (let oz = (0, Cz.N)(sz[Oz + 2]); oz <= (0, Cz.N)(sz[Oz + 5]); oz++) {
                  const sz = `${tz}|${Fz}|${oz}`;
                  Xz.has(sz) || (Xz.add(sz), zz.blockDataOwner.forEachDataCell(tz, Fz, oz, Wz))
                }
          return tz.forEachCell(Wz), Int32Array.from(Fz)
        }(zz, tz, Fz)
      }), zz.CN.o4()
    }
    var Gz = sz(36538),
      Tz = sz(38388),
      cz = sz(38391),
      jz = sz(991),
      Az = sz(1888);
    var yz = sz(4145);

    function Mz(zz) {
      const tz = zz.PN;
      let sz = 0,
        Wz = -1,
        Oz = -1 / 0,
        oz = null,
        vz = !0;
      const Kz = () => {
        if (++sz % 10 !== 0) return;
        const Kz = (0, Fz.getLastReceivedPacketId)();
        if (Kz <= Wz) return;
        const [uz, Nz, bz] = zz.Qr.yB(zz.gC), wz = ! function(zz) {
          var tz;
          let sz = null === (tz = zz.Qr.Mtz(zz.gC)) || void 0 === tz ? void 0 : tz.yw;
          if (void 0 === sz) return !1;
          const Fz = new Set;
          for (; void 0 !== sz && !Fz.has(sz);) {
            var Wz;
            Fz.add(sz);
            const tz = zz.Qr.getState(sz, "smoothToServerPos"),
              Xz = Array.isArray(tz) ? null : null === tz || void 0 === tz ? void 0 : tz.serverPosition;
            if (Xz) {
              const tz = zz.Qr.yB(sz);
              if (Math.abs(tz[0] - Xz[0]) > 10 || Math.abs(tz[1] - Xz[1]) > 10 || Math.abs(tz[2] - Xz[2]) > 10) return !0
            }
            sz = null === (Wz = zz.Qr.Mtz(sz)) || void 0 === Wz ? void 0 : Wz.yw
          }
          return !1
        }(zz) && function(zz, tz, sz, Fz) {
          const Wz = Xz.d.pw;
          for (let Xz = 0; Xz < zz.length; Xz++) {
            const Oz = zz[Xz];
            if (!(0, yz.g)(tz, sz, Fz, Oz[0] * Wz, Oz[1] * Wz, Oz[2] * Wz)) return !1
          }
          return !0
        }(tz.rg.nw, uz, Nz, bz), Dz = null === oz || Math.abs(uz - oz[0]) > 8 || Math.abs(Nz - oz[1]) > 8 || Math.abs(bz - oz[2]) > 8, gz = !vz || Dz || performance.now() - Oz >= 1e4;
        vz = wz, wz && gz && (Wz = Kz, Oz = performance.now(), oz = [uz, Nz, bz], (0, Fz.sendColyMessage)(Uz.eg, {
          LU: Kz
        }))
      };
      return zz.on("wN", Kz), () => {
        zz.off("wN", Kz)
      }
    }
    var dz = sz(36201),
      hz = sz(330),
      Qz = sz.n(hz),
      kz = sz(6057),
      iz = sz(37508),
      Lz = sz(37207),
      lz = sz(37188),
      nz = sz(4165),
      az = sz(37543),
      qz = sz(37340),
      Sz = sz(36785),
      Vz = sz(37070),
      Rz = sz(38393),
      pz = sz(36197),
      fz = sz(36199),
      Ez = sz(38399),
      zt = sz(38402),
      tt = sz(3319),
      st = sz(1483),
      Ft = sz(2549),
      Wt = sz(2662),
      Xt = sz(37703),
      Ot = sz(36458),
      ot = sz(4411),
      vt = sz(38450),
      Ut = sz(37528),
      Kt = sz(3913),
      ut = sz(36531),
      Nt = sz(36623),
      bt = sz(37550),
      wt = sz(38408),
      Dt = sz(38419),
      gt = sz(36782);
    class Ht {
      constructor(zz, tz, sz, Fz) {
        this.gameNameWithVariation = zz, this.CN = sz, this.connectionResume = Fz, this.stateReplicationHandler = void 0, this.stopChunkReports = () => {}, this.replayResume = null, this.stateReplicationHandler = new Dt.b(tz, this.CN)
      }
      setupStateReplicationHandlers() {
        this.stateReplicationHandler.setup(), (0, Fz.onGameResetOnce)((() => {
          this.stateReplicationHandler.dispose()
        }))
      }
      PUz(zz) {
        this.stateReplicationHandler.dispose(), this.stateReplicationHandler = new Dt.b(zz, this.CN), this.stateReplicationHandler.setup()
      }
      clearBlockRules() {
        const zz = this.CN.PN;
        zz.ntz = new Set, zz.Stz = new Set, zz.atz = new Set, zz.Vtz = new Set, zz.qtz = [], zz.Rtz = [], zz.aG = new Set, zz.EX = [], zz.pG = []
      }
      clearUiRequestsAndQTEs() {
        ot.e.reset(), (0, mz.c)()
      }
      startChunkReports() {
        const zz = function(zz) {
            let tz = null,
              sz = -1 / 0,
              Wz = null;
            const Xz = () => {
                Wz = null;
                const Xz = Math.ceil(zz.Tm[0]),
                  Oz = Math.ceil(zz.Tm[1]);
                tz && tz[0] === Xz && tz[1] === Oz || (tz = [Xz, Oz], sz = performance.now(), (0, Fz.sendColyMessage)(Uz.bg, {
                  YO: Xz,
                  xO: Oz
                }))
              },
              Oz = () => {
                null === Wz && (Wz = setTimeout(Xz, Math.max(0, sz + 250 - performance.now())))
              };
            return Xz(), zz.on("addRemoveDistanceChanged", Oz), () => {
              zz.off("addRemoveDistanceChanged", Oz), null !== Wz && (clearTimeout(Wz), Wz = null)
            }
          }(this.CN.PN),
          tz = Mz(this.CN);
        this.stopChunkReports = () => {
          zz(), tz()
        }
      }
      restartChunkStreaming() {
        (0, Vz.q)(this.CN, (0, vz.d)().recentChunkEdits.chunksEditedSince(this.connectionResume.getDroppedAt() - Rz.e)), this.startChunkReports()
      }
      setupOnMessageListeners(zz, tz) {
        const sz = this.CN,
          Wz = this.gameNameWithVariation;
        zz.nB(Uz.ic, (zz => {
          let {
            YF: tz,
            mF: Fz,
            JF: Wz,
            IF: Xz,
            CF: Oz,
            eF: oz,
            ZF: vz,
            GF: Uz,
            TF: Kz
          } = zz;
          if (!sz.Qr.Xzz(tz, "itemState")) return void(0, Lz.n)(sz, tz, [Oz, oz, vz], Fz, {
            amount: Wz,
            attributes: JSON.parse(Xz),
            GF: Uz,
            size: Kz
          });
          const uz = sz.Qr.getState(tz, "itemState");
          uz.amount = Wz, uz.GF = Uz, uz.creationTime = Date.now(), (0, lz.setServerPosition)(sz.Qr.getState(tz, "smoothToServerPos"), Oz, oz, vz)
        })), zz.nB(Uz.eb, (zz => {
          (0, Gz.b)(sz).setCantPickUp(zz, !0), sz.Qr.Xzz(zz, "itemState") && (sz.Qr.getState(zz, "itemState").GF = !0)
        })), zz.nB(Uz.Fd, (zz => {
          (0, Gz.b)(sz).setCantPickUp(zz, !1), sz.Qr.Xzz(zz, "itemState") && (sz.Qr.getState(zz, "itemState").GF = !1)
        })), zz.nB(Uz.Fc, (zz => {
          Bz.e.applyNewClientOptions(zz)
        })), zz.nB(Uz.Jc, (zz => {
          let {
            eId: tz,
            settings: Fz
          } = zz;
          (0, Nt.g)(tz);
          for (const sz in Fz)(0, Nt.e)(tz, sz, Fz[sz]);
          if ("canSee" in Fz && sz.Qr.Xzz(tz, "hidingMeshManager")) {
            const zz = sz.Qr.getState(tz, "hidingMeshManager");
            zz.canSee = (0, bt.c)("canSee", Fz.canSee), zz._forceUpdate = !0
          }
        })), zz.nB(Uz.Qe, (zz => {
          let {
            xs: tz,
            Is: Wz,
            Cs: Xz,
            es: Oz
          } = zz;
          const oz = [Wz, Xz, Oz];
          sz.Qr.setPosition(sz.gC, oz), (0, Fz.sendColyMessage)(Uz.zg, {
            QK: tz,
            kK: nz.e
          }), Hz.o.Yg("localPlayerTeleported", {
            pos: oz,
            isCorrection: !1
          })
        })), zz.nB(Uz.Uc, (zz => {
          let {
            cW: tz,
            jW: sz,
            AW: Fz,
            yW: Wz
          } = zz;
          this.stateReplicationHandler.setUpIfQueued(tz);
          const Xz = [sz, Fz, Wz];
          Hz.o.Yg(`otherPlayerTeleported|${tz}`, {
            pos: Xz
          })
        })), zz.nB(Uz.ld, (zz => {
          let {
            tX: tz,
            sX: Wz,
            FX: Xz,
            WX: Oz,
            XX: oz,
            OX: vz,
            oX: Kz,
            UX: uz,
            vX: Nz,
            NX: bz
          } = zz;
          const wz = [Wz, Xz, Oz];
          sz.Qr.setPosition(sz.gC, wz);
          const Dz = sz.Qr.mzz(sz.gC),
            gz = sz.Qr.eT(sz.gC);
          Qz().set(gz.mG, 0, 0, 0), Qz().set(gz.JG, 0, 0, 0), Qz().set(gz.hb, oz, vz, Kz), gz.yG(), Dz._flying = null !== bz, bz ? (Dz.flyAccel.bX = bz.bX, Dz.flyAccel.wX = bz.wX) : Dz.flyAccel.reset(), uz && Dz.movementType === kz.o.GLIDING && (Dz.KX = uz.KX, Qz().copy(Dz.uX, uz.uX)), (0, Fz.sendColyMessage)(Uz.zg, {
            QK: tz,
            kK: nz.e
          }), Hz.o.Yg("localPlayerTeleported", {
            pos: wz,
            isCorrection: !0
          })
        }));

        function Xz() {
          return sz.Qr.pzz(sz.gC)
        }
        zz.nB(Uz.nb, (zz => {
          let {
            chatMsgId: tz,
            content: sz,
            chatterEId: Fz
          } = zz;
          Hz.o.Yg("chat", {
            serverChatMsgId: tz,
            content: sz,
            chatterEId: Fz
          }, !0)
        })), zz.nB(Uz.ad, (zz => {
          Ft.c.onReceiveColyseusPing(zz)
        })), zz.nB(Uz.oe, (zz => {
          let {
            key: tz,
            value: sz
          } = zz;
          (0, Pz.setCookie)(Wz, tz, sz)
        })), zz.nB(Uz.te, (zz => {
          Hz.o.Yg("setDiscordReportKey", zz)
        })), (0, Fz.onGameResetOnce)((() => {
          this.stopChunkReports()
        })), zz.nB(Uz.bc, (tz => {
          const {
            Rt: Wz,
            ft: Xz
          } = tz;
          if ((0, Fz.setAdjustment)(Xz), this.connectionResume.onInitialInfo(tz.Et, tz.zs), Fz.offlineInputReplay.Xx(tz.Fs), this.connectionResume.isResuming()) {
            console.log("Resumed the connection as eId", Wz);
            try {
              null === tz.Ws && (0, vz.d)().client.inventoryPrediction.dropPending(), this.stopChunkReports(), this.clearBlockRules(), Bz.e.apply({
                shopInfo: null,
                _shopVersion: Az.e
              });
              const Fz = sz.Qr.Ezz(sz.gC);
              Fz.zF && (Fz.chestClosed(), Hz.o.Yg("chestToggleFromServer", !1, !0)), this.clearUiRequestsAndQTEs(), Hz.o.Yg("initInfoReceived", zz)
            } finally {
              const zz = null === tz.Ws ? null : {
                sync: null,
                endSeq: null
              };
              this.replayResume = zz, this.connectionResume.onResumeInitialInfo(tz.Ws, (() => {
                zz.endSeq = (0, vz.d)().client.inventoryPrediction.lastActionSeq
              })), null === zz && this.restartChunkStreaming()
            }
          } else console.log("Local client is eId", Wz), Hz.o.Yg("loadingScreenState", "loadingPage:loadingWorld"), sz.Uzz = Wz, sz.Qr.Xzz(sz.gC, sz.Qr.names.entityName) && sz.Qr.pI(sz.gC, sz.Qr.names.entityName), (0, vz.d)().setEntityName(sz.Uzz, (0, vz.d)().getRawEntityName(sz.gC)), sz.bC[sz.Uzz] = {}, sz.Qr.MI(sz.gC, sz.Qr.names.entityName), Hz.o.Yg("initInfoReceived", zz), this.startChunkReports(), Oz.client.onServerConnectionFinalised()
        })), zz.nB(Uz.Zd, (() => {
          this.connectionResume.isResuming() ? this.connectionResume.onResumed((() => {
            const zz = this.replayResume;
            if (this.replayResume = null, !zz) return;
            this.restartChunkStreaming();
            const {
              inventoryPrediction: tz
            } = (0, vz.d)().client, {
              sync: Wz
            } = zz, Xz = new Set(Fz.offlineInputReplay.takeDroppedActions());
            if (Wz) {
              var Oz;
              const Fz = null !== (Oz = zz.endSeq) && void 0 !== Oz ? Oz : tz.lastActionSeq;
              tz.forget((zz => zz > Wz.XF && zz <= Fz || Xz.has(zz))), Yz(sz, tz, Hz.o, Wz.XF, Wz.load)
            } else tz.dropPending(), tz.askForSnapshot()
          })) : console.warn("ResumeComplete arrived without a resume")
        })), zz.nB(Uz.Se, (zz => {
          Hz.o.Yg("TopRightHelper", zz, !0)
        })), zz.nB(Uz.pd, (zz => {
          let {
            type: tz,
            location1: sz,
            location2: Fz,
            location3: Wz,
            score: Xz
          } = zz;
          (0, Wt.u)({
            type: tz,
            location1: sz,
            location2: Fz,
            location3: Wz,
            score: Xz
          })
        })), zz.nB(Uz.Vd, (zz => {
          let {
            type: tz,
            resourceType: sz,
            amount: Fz,
            category: Wz,
            itemName: Xz
          } = zz;
          (0, Wt.v)({
            type: tz,
            resourceType: sz,
            amount: Fz,
            category: Wz,
            itemName: Xz
          })
        })), zz.nB(Uz.U, (zz => {
          sz.PN.ntz.add(zz), sz.PN.Stz.delete(zz)
        })), zz.nB(Uz.$, (zz => {
          sz.PN.Stz.add(zz), sz.PN.ntz.delete(zz)
        })), zz.nB(Uz.Hd, (zz => {
          sz.PN.Stz.delete(zz), sz.PN.ntz.delete(zz)
        })), zz.nB(Uz.Z, (zz => {
          sz.PN.atz.add(zz), sz.PN.Vtz.delete(zz)
        })), zz.nB(Uz.db, (zz => {
          sz.PN.Vtz.add(zz), sz.PN.atz.delete(zz)
        })), zz.nB(Uz.Nd, (zz => {
          sz.PN.Vtz.delete(zz), sz.PN.atz.delete(zz)
        })), zz.nB(Uz.W, (zz => {
          (0, uz.kb)(zz, sz.PN.Rtz), (0, uz.kb)(zz, sz.PN.qtz), sz.PN.qtz.push(zz)
        })), zz.nB(Uz.ab, (zz => {
          (0, uz.kb)(zz, sz.PN.qtz), (0, uz.kb)(zz, sz.PN.Rtz), sz.PN.Rtz.push(zz)
        })), zz.nB(Uz.Ld, (zz => {
          (0, uz.kb)(zz, sz.PN.qtz), (0, uz.kb)(zz, sz.PN.Rtz)
        })), zz.nB(Uz.hf, (zz => {
          let {
            gF: tz,
            HF: Fz
          } = zz;
          Fz ? sz.PN.aG.delete(tz) : sz.PN.aG.add(tz)
        })), zz.nB(Uz.ff, (zz => {
          let {
            EX: tz,
            zO: Fz
          } = zz;
          Oz.updateWalkThroughRect(sz.gC, tz, Fz)
        })), (0, Fz.onGameResetOnce)((() => {
          this.clearBlockRules()
        })), zz.nB(Uz.Ne, (zz => {
          (0, xz.d)(zz)
        })), zz.nB(Uz.Xb, (zz => {
          Jz.c.applyServerUpdate(zz)
        })), zz.nB(Uz.fb, (zz => {
          Oz.applyServerBlocks((() => {
            ! function(zz, tz) {
              for (const {
                  tO: sz,
                  sO: Fz
                }
                of tz) {
                const tz = Iz.b[Fz];
                if (tz) {
                  const {
                    compX: Fz,
                    compY: Wz,
                    compZ: Xz,
                    mainMultiblock: Oz
                  } = tz;
                  zz.HJ(sz[0] - Fz, sz[1] - Wz, sz[2] - Xz, Oz)
                }
              }
              for (const {
                  tO: sz,
                  sO: Fz,
                  FO: Wz
                }
                of tz) zz.setBlockNoMulti(sz[0], sz[1], sz[2], Fz, !0), zz.blockDataOwner.setBlockData(sz[0], sz[1], sz[2], null === Wz ? void 0 : JSON.parse(Wz)), zz.blockAdded(sz[0], sz[1], sz[2], Fz)
            }(Oz, zz)
          })), Hz.o.Yg("changeBlockFail", zz), Oz.client.triggerGameCallback("onChangeBlockFail", zz), Hz.o.Yg("EditBoard", {
            pos: null
          }), Hz.o.Yg("EditCodeBlock", {
            pos: null,
            canChangePos: null
          })
        })), zz.nB(Uz._c, (zz => {
          let {
            pickUpItems: tz,
            pickUpAckSeq: sz
          } = zz;
          for (const {
              name: Fz,
              amount: Wz,
              attributes: Oz
            }
            of tz) Xz().pickUpItem({
            name: Fz,
            amount: Wz,
            typeObj: Lz.D[Fz],
            attributes: Oz
          });
          (0, vz.d)().client.inventoryPrediction.serverChangeApplied(sz)
        })), zz.nB(Uz.ue, (zz => {
          let {
            index: tz,
            name: Fz,
            amount: Wz,
            attributes: Xz,
            setSlotAckSeq: Oz
          } = zz;
          const oz = sz.Qr.Ezz(sz.gC);
          (tz < oz.playerInventory.numSlots || oz.zF || oz.inCreative) && oz.setItemSlot(tz, Fz, Wz, Xz), (0, vz.d)().client.inventoryPrediction.serverChangeApplied(Oz)
        })), zz.nB(Uz.Ke, (zz => {
          let {
            fs: tz,
            WF: Fz,
            XF: Wz
          } = zz;
          const {
            inventoryPrediction: Xz
          } = (0, vz.d)().client, Oz = () => {
            sz.Qr.Ezz(sz.gC).loadFromString(tz)
          };
          this.replayResume && (this.replayResume.sync = {
            XF: Wz,
            load: Oz
          }), Yz(sz, Xz, Hz.o, Wz, Oz, Fz)
        })), zz.nB(Uz.hc, (zz => {
          (0, vz.d)().client.inventoryPrediction.acknowledge(zz)
        })), zz.nB(Uz.A, (zz => {
          let {
            IX: tz,
            CX: sz,
            eX: Fz,
            ZX: Wz
          } = zz;
          (0, vz.d)().client.itemDropPrediction.onActionItemDrops(tz, sz, Fz, Wz)
        })), zz.nB(Uz.wb, (zz => {
          Xz().clearInventory(), (0, vz.d)().client.inventoryPrediction.serverChangeApplied(zz)
        })), zz.nB(Uz.tc, (zz => {
          let {
            leaveEventType: tz,
            category: sz,
            subCategory: Fz,
            value: Wz
          } = zz;
          (0, Wt.H)({
            leaveEventType: tz,
            category: sz,
            subCategory: Fz,
            value: Wz
          })
        })), zz.nB(Uz.Gb, (zz => {
          let {
            cat1: tz,
            cat2: sz,
            cat3: Fz,
            value: Wz
          } = zz;
          (0, Wt.r)({
            cat1: tz,
            cat2: sz,
            cat3: Fz,
            value: Wz
          })
        }));
        const Oz = (0, vz.d)();
        zz.nB(Uz.Cb, (zz => {
          Oz.applyServerBlocks((() => {
            Zz(Oz, Jz.c, zz)
          }))
        })), zz.nB(Uz.ye, (zz => {
          Hz.o.Yg("setSelectedInventorySlotI", zz, !0)
        })), zz.nB(Uz.sc, (zz => {
          let {
            category: tz,
            timeframe: sz,
            data: Fz
          } = zz;
          Hz.o.Yg("leaderboardResponse", {
            category: tz,
            timeframe: sz,
            data: Fz
          })
        })), zz.nB(Uz.Q, (zz => {
          let {
            YX: tz,
            xX: sz
          } = zz;
          this.stateReplicationHandler.setUpIfQueued(tz), tz = (0, dz.d)(tz), (0, vz.d)().client.gameRecorder.recordBulletShot(tz, sz), Hz.o.Yg(`bulletShot|${tz}`, {
            bulletDirections: sz
          })
        })), zz.nB(Uz.Yb, (zz => {
          let {
            PF: tz,
            rF: sz
          } = zz;
          Hz.o.Yg("damagedByOtherPlayer", {
            PF: tz,
            direction: sz
          }, !0)
        })), zz.nB(Uz.jd, (zz => {
          Hz.o.Yg("playerKilled", zz, !0), (0, vz.d)().client.gameRecorder.recordPlayerKilled(zz.deadEId, zz.killerEId, zz.withItem, zz.killstreak)
        })), zz.nB(Uz.Kb, (zz => {
          Hz.o.Yg("customKillfeed", zz, !0), (0, vz.d)().client.gameRecorder.recordCustomKillfeed(zz.killer, zz.victim, zz.withItem)
        })), zz.nB(Uz.sd, (zz => {
          let {
            Ps: tz,
            Ys: Fz
          } = zz;
          this.stateReplicationHandler.setUpIfQueued(tz);
          const Wz = sz.Qr.rtz(tz);
          null !== Wz && void 0 !== Wz && Wz.isGun() && Wz.reload(Date.now(), Fz)
        })), zz.nB(Uz.He, (() => {
          Hz.o.Yg("showShopTutorial", null, !0)
        })), zz.nB(Uz.md, (zz => {
          Hz.o.Yg("progressBarUpdate", zz, !0)
        })), zz.nB(Uz.ec, (zz => {
          Hz.o.Yg("middleScreenBarInitiate", {
            duration: zz.cF,
            jF: zz.jF,
            horizBarRemOffset: zz.AF
          }, !0)
        })), zz.nB(Uz.Ad, (() => {
          Hz.o.Yg("middleScreenBarRemove", !0)
        })), zz.nB(Uz.ce, (zz => {
          let {
            Hs: tz,
            Bs: Fz
          } = zz;
          const Wz = Fz ? (0, Ut.g)(sz, Fz) : void 0;
          Hz.o.Yg("sendHitmarker", {
            Hs: tz,
            screenPos: Wz
          }, !0)
        })), zz.nB(Uz.pe, (zz => {
          let {
            id: tz,
            position: sz,
            style: Fz,
            BX: Wz,
            rX: Xz
          } = zz;
          Hz.o.Yg("setDirectionArrow", {
            id: tz,
            position: sz,
            style: Fz,
            text: (0, Uz.v)(Wz),
            rX: Xz
          }, !0)
        })), zz.nB(Uz.vb, (zz => {
          let {
            id: tz
          } = zz;
          Hz.o.Yg("clearDirectionArrow", {
            id: tz
          }, !0)
        })), zz.nB(Uz.B, (zz => {
          let {
            GX: tz,
            TX: Fz,
            animationScript: Wz,
            cX: Xz,
            jX: Oz,
            AX: oz,
            yX: Uz
          } = zz;
          tz = (0, dz.d)(tz);
          const Kz = null === Wz && null !== oz ? (0, Tz.h)(oz, Uz) : Wz;
          (0, vz.d)().client.gameRecorder.recordAnimateEntity(tz, Fz, Kz, Xz, Oz), (0, Gz.b)(sz).animations.animateEntity(tz, Fz, Wz, Xz, Oz, oz, Uz), null !== Wz || tz === sz.gC && Fz === ut.c.Emote && (0, vz.d)().client.cameraController.endTemporaryThirdPerson()
        })), zz.nB(Uz.$e, (zz => {
          let {
            uF: tz,
            NF: sz
          } = zz;
          if (Oz.Yk(tz[0], tz[1], tz[2])) {
            const zz = (0, vz.d)().oB(tz[0], tz[1], tz[2]);
            (0, vz.d)().updateMailboxContents(tz[0], tz[1], tz[2], zz, sz)
          }
        })), zz.nB(Uz.qb, (zz => {
          let {
            WO: tz,
            XO: Fz,
            OO: Wz,
            oO: Xz,
            vO: Oz,
            UO: oz,
            KO: Uz,
            uO: Kz
          } = zz;
          const uz = sz.Qr.Ezz(sz.gC);
          if (oz) {
            const {
              Es: zz,
              XF: tz
            } = Kz;
            return (0, vz.d)().client.inventoryPrediction.x_(tz, (() => {
              uz.chestRefreshed(Fz, Wz, Xz, Uz, zz)
            })) && Hz.o.Yg("chestToggleFromServer", !1, !0), void Hz.o.Yg("chestRefreshedFromServer")
          }(tz || uz.zF) && (tz ? (uz.chestOpened(Fz, Wz, Xz, Oz, Uz), null !== Oz && (0, vz.d)().client.ironChestPasskeyCache.onChestOpened(Xz, Oz)) : uz.chestClosed(), Hz.o.Yg("chestToggleFromServer", tz, !0))
        })), zz.nB(Uz.Lb, (zz => {
          let {
            craftingRecipeItemName: tz,
            recipesForItem: Fz
          } = zz;
          tz ? Oz.craftingManager.editRecipesForPlayer(sz.gC, tz, Fz) : Oz.craftingManager.resetAllPlayerRecipes(sz.gC), Hz.o.Yg("craftingRecipesEdited", {
            itemName: tz,
            recipesForItem: Fz
          })
        })), zz.nB(Uz.ze, (zz => {
          let {
            vehicleEId: tz,
            overrides: sz
          } = zz;
          (0, vz.d)().applyRiddenVehicleSettingOverrides(tz, sz)
        })), zz.nB(Uz.ef, (zz => {
          let {
            Bt: tz,
            Pt: Fz,
            rt: Wz
          } = zz;
          const Xz = sz.Qr.mzz(sz.gC).physicsState.type === kz.r.SLEEPING && tz === kz.r.DEFAULT;
          (0, vz.d)().updatePositionAndPhysics(sz.gC, {
            type: tz,
            tier: Fz
          }, !0, Wz), Xz && (0, vz.d)().updateHeldVehicleStatus()
        })), zz.nB(Uz.jb, (zz => {
          let {
            gX: tz,
            HX: Fz
          } = zz;
          sz.Qr.Vzz(sz.gC).setPose(tz, Fz)
        })), zz.nB(Uz.be, (zz => {
          (0, wt.e)(zz)
        })), zz.nB(Uz.hd, (zz => {
          for (const tz of zz)(0, az.x)(tz);
          Hz.o.Yg("playerCosmeticsUpdated", zz, !0)
        })), zz.nB(Uz.J, (zz => {
          for (const tz of zz)(0, Ot.e)(sz, tz)
        })), zz.nB(Uz.xc, (zz => {
          let {
            hW: tz,
            QW: Fz,
            iW: Wz,
            LW: Xz,
            lW: oz,
            nW: vz,
            aW: Uz
          } = zz;
          this.stateReplicationHandler.setUpIfQueued(tz), tz = (0, dz.d)(tz);
          const Kz = sz.Qr.btz(tz);
          if (Kz && (Kz.lastHurtTime = performance.now()), (0, iz.playRigHurt)(sz, tz, vz), Hz.o.Yg("lifeformHurt", {
              eId: tz,
              aW: Uz
            }), Fz) {
            const zz = (0, Ut.g)(sz, Fz.Bs);
            Hz.o.Yg("yourAttackHit", {
              Hs: Xz,
              screenPos: zz,
              hitSelf: tz === sz.gC
            })
          }
          tz === sz.gC && (Oz.shakePlayerCamera(tz, oz / 40, 200), Hz.o.Yg("closeShopOnDamaged", null), Hz.o.Yg("damagedByOtherPlayer", {
            PF: null,
            direction: vz,
            lW: oz
          }, !0));
          const uz = sz.Qr.yB(tz);
          if (uz && (Wz || Xz)) {
            const zz = [uz[0], uz[1] + 1, uz[2]];
            Wz && (0, qz.m)(sz, qz.F, zz, 15), Xz && (0, qz.m)(sz, qz.s, zz, 10)
          }
        })), zz.nB(Uz.wc, (zz => {
          let {
            kt: tz,
            Lt: Fz,
            lt: Wz
          } = zz;
          (0, Gz.b)(sz).setHealthFrac((0, dz.d)(tz), Wz), Hz.o.Yg("lifeformHealthChanged", {
            eId: (0, dz.d)(tz),
            Lt: Fz,
            lt: Wz
          })
        })), zz.nB(Uz.K, (zz => {
          let {
            mX: tz,
            JX: Fz
          } = zz;
          (0, vz.d)().playerAttacked(sz.gC, tz, Fz)
        })), zz.nB(Uz.qc, (zz => {
          (0, vz.d)().client.leaveGameUnwanted({
            reason: zz,
            requiresRefresh: !1,
            canReconnect: !1,
            automaticallyReconnect: !1
          }), (0, st.navigatePreserveSearch)("/")
        })), zz.nB(Uz.yd, (zz => {
          let {
            qt: tz,
            St: sz,
            Vt: Fz
          } = zz;
          Xz().removeItemName(tz, sz), (0, vz.d)().client.inventoryPrediction.serverChangeApplied(Fz)
        })), zz.nB(Uz.ke, (zz => {
          const {
            AO: tz,
            jtz: Fz
          } = (0, Sz.d)([zz[0], zz[1], zz[2]]);
          gt.b.setLookDirection(sz, tz, Fz), (0, Vz.x)(tz, Fz);
          const Wz = sz.Qr.Vzz(sz.gC);
          Wz && (Wz.heading = tz)
        })), zz.nB(Uz.me, (zz => {
          Oz.client.cameraController.setCameraZoom(zz)
        })), zz.nB(Uz.Ge, (zz => {
          let {
            Us: tz,
            Ks: Fz
          } = zz;
          Oz.shakePlayerCamera(sz.gC, tz, Fz)
        })), zz.nB(Uz.Db, (zz => {
          (0, tt.onCosmeticPackGranted)(zz)
        })), zz.nB(Uz.ge, (zz => {
          Hz.o.Yg("serverUpdating", Date.now() + zz, !0)
        })), zz.nB(Uz.Dc, cz.d), zz.nB(Uz.Qc, (zz => {
          let {
            id: tz,
            Gz: sz
          } = zz;
          const {
            type: Wz,
            params: Xz
          } = (0, vt.f)(sz), Oz = {
            ...Xz
          };
          for (const Fz of vt.e) Fz in Oz && Oz[Fz] && (Oz[Fz] = (0, Uz.v)(Oz[Fz]));
          ot.e.queueQTE(tz, Wz, Oz).getResult().then((zz => {
            "boolean" === typeof zz && (0, Fz.sendColyMessage)(Uz.$h, {
              qteId: tz,
              qteResponse: zz
            })
          }))
        })), zz.nB(Uz.Cd, (zz => {
          ot.e.cancelQTE(zz)
        })), (0, Fz.onGameResetOnce)((() => {
          ot.e.reset()
        })), zz.nB(Uz.Sc, (zz => {
          let {
            id: tz,
            clientParameters: sz
          } = zz;
          (0, mz.f)(tz, sz)
        })), zz.nB(Uz.Ed, (zz => {
          (0, mz.h)(zz)
        })), zz.nB(Uz.Ye, (zz => {
          let {
            text: tz,
            id: sz
          } = zz;
          (0, mz.i)(sz, tz, (zz => {
            (0, Fz.sendColyMessage)(Uz.oj, {
              Eo: sz,
              zv: zz,
              tv: 5
            })
          }))
        })), zz.nB(Uz.Mb, (zz => {
          let {
            vt: tz,
            Ut: sz,
            Kt: Fz,
            ut: Wz,
            Nt: Xz,
            Dt: Oz
          } = zz;
          tz = (0, dz.d)(tz), (0, vz.d)().client.updateEffect(tz, sz, {
            displayName: Fz,
            icon: Wz,
            duration: Xz,
            level: Oz
          })
        })), zz.nB(Uz.vd, (zz => {
          let {
            vt: tz,
            Ut: sz
          } = zz;
          tz = (0, dz.d)(tz), (0, vz.d)().client.removeEffect(tz, sz)
        })), zz.nB(Uz.mc, (zz => {
          sz.Qr.Vzz(sz.gC).jumpMultiplier.setMultiplierType("jumpEffectAmount", zz)
        })), zz.nB(Uz.Ue, (zz => {
          Hz.o.Yg("ttbEffectMultiplier", zz)
        })), (0, Fz.onGameResetOnce)((() => {
          sz.Qr.Vzz(sz.gC).jumpMultiplier.setMultiplierType("jumpEffectAmount", 1)
        })), zz.nB(Uz.Nc, (zz => {
          (0, qz.o)(sz, (0, uz.t)(zz))
        })), zz.nB(Uz.Pc, (zz => {
          Kt.e[zz.DX] ? (0, qz.o)(sz, {
            ...Kt.e[zz.DX],
            pos1: zz.pos1,
            pos2: zz.pos2
          }) : console.error(`Unknown preset id: ${zz.DX}`)
        })), zz.nB(Uz.ed, (zz => {
          var tz, sz;
          let {
            SW: Fz,
            VW: Wz,
            RW: Xz,
            pW: Oz
          } = zz, {
            EW: oz,
            zX: Uz
          } = null !== Oz && void 0 !== Oz ? Oz : {};
          const {
            fW: Kz
          } = null !== Oz && void 0 !== Oz ? Oz : {};
          oz = null !== (tz = oz) && void 0 !== tz ? tz : void 0, Uz = null !== (sz = Uz) && void 0 !== sz ? sz : void 0, "string" === typeof Kz && this.stateReplicationHandler.setUpIfQueued(Kz), (0, vz.d)().client.gameRecorder.recordPlaySound(Fz, Wz, Xz, Oz), pz.d.play((0, fz.b)(Fz), Wz, Kz, oz, Uz).rate(Xz)
        })), zz.nB(Uz.ie, (zz => {
          let {
            pos: tz,
            data: sz
          } = zz;
          Oz.blockDataOwner.setBlockData(tz[0], tz[1], tz[2], sz), Oz.blockAdded(tz[0], tz[1], tz[2], Oz.oB(tz[0], tz[1], tz[2]))
        })), zz.nB(Uz.Wc, (zz => {
          let {
            info: tz
          } = zz;
          Hz.o.Yg("overShopInfo", tz, !0)
        })), zz.nB(Uz.Sb, (zz => {
          let {
            gt: Fz,
            Ht: Wz
          } = zz;
          tz.openShop(sz.gC, Fz, Wz)
        })), zz.nB(Uz.F, (zz => {
          sz.Qr.eT(sz.gC).applyImpulse(zz)
        })), zz.nB(Uz.Ce, (zz => {
          const tz = sz.Qr.eT(sz.gC);
          Qz().set(tz.mG, 0, 0, 0), Qz().set(tz.JG, 0, 0, 0), Qz().copy(tz.hb, zz), tz.yG()
        })), zz.nB(Uz.Ac, (zz => {
          console.error(`[logErrorToConsole]: ${zz}`)
        })), zz.nB(Uz.Pb, (zz => {
          let {
            RX: tz,
            pX: sz,
            fX: Fz
          } = zz;
          Hz.o.Yg("flyingMiddleMessage", {
            content: (0, Uz.v)(tz),
            pX: sz,
            fX: Fz
          }, !0)
        })), zz.nB(Uz.if, (zz => {
          const tz = zz === jz.f ? null : {
            message: `Currently loaded as variation: ${zz}`,
            type: "Warning"
          };
          Hz.o.Yg("showPermanentBottomMessage", tz, !0)
        })), zz.nB(Uz.Wb, (zz => {
          let {
            messageType: tz,
            data: sz
          } = zz;
          (0, Ez.h)(tz) ? (0, Ez.e)(tz, sz) : ("freeCamPerms" === tz && Oz.client.freeCameraController.setPerms(sz.key, sz.value), Oz.client.triggerGameCallback("onReceivedMessageFromServer", tz, sz))
        })), zz.nB(Uz.lb, (() => {
          const zz = sz.Qr.rtz(sz.gC);
          null !== zz && void 0 !== zz && zz.isChargeable() && zz.finishCharging(!1, Date.now())
        })), zz.nB(Uz.xd, (zz => {
          let {
            qW: tz
          } = zz;
          Oz.craftingManager.removeRecipes(sz.gC, tz), Hz.o.Yg("craftingRecipesEdited", {
            itemName: tz,
            recipesForItem: []
          })
        })), zz.nB(Uz.af, (zz => {
          for (const tz in zz) {
            const sz = zz[tz];
            for (const zz in sz) Oz.client.meshCreator.handleParticleSystemUpdate(tz, zz, sz[zz])
          }
        })), (0, Fz.onGameResetOnce)((() => {
          (0, Xt.setFloatingYValue)(sz.Qr.getState(sz.gC, "physics"), sz.Qr.qL(sz.gC), null)
        })), zz.nB(Uz.Ob, (zz => {
          let {
            Ns: tz,
            Ds: Fz,
            gs: Wz
          } = zz;
          const Xz = (0, dz.d)(tz);
          if (Xz === sz.gC) {
            const zz = sz.Qr.qL(sz.gC).position;
            Wz ??= Math.floor(zz[1]) - 1, (0, Xt.setFloatingYValue)(sz.Qr.getState(sz.gC, "physics"), sz.Qr.qL(sz.gC), Fz ? Wz : null)
          }(0, Gz.b)(sz).setFloating(Xz, Fz, Wz);
          const Oz = sz.Qr.getState(Xz, "floating");
          Oz && (Oz.isFloating = Fz, Oz.gs = Fz ? Wz : null)
        })), zz.nB(Uz.Ab, zt.i)
      }
    }
    window.addEventListener("beforeunload", (() => {}));
    var Bt = sz(38455),
      Pt = sz(38462),
      rt = sz(624),
      Yt = sz(2689);
    class xt {
      constructor(zz, tz, sz, Fz) {
        this.msgHandler = sz, this.listener = Fz, this.session = void 0, this.attachedRoom = null, this.detachRoomListeners = null, this.suspended = !1, this.droppedAt = 0, this.session = new Bt.d({
          reconnect: zz,
          isLive: () => Fz.isLive(),
          onReconnected: zz => {
            this.resumeOnRoom(zz)
          },
          onGaveUp: (zz, tz) => {
            Fz.onGaveUp(zz, tz)
          },
          freeze: tz,
          releaseSeat: tz => {
            zz(tz).then((zz => {
              zz.leave(!0)
            }), (zz => {
              console.warn("Couldn't release the held seat of a game left while reconnecting", zz)
            }))
          }
        })
      }
      onInitialInfo(zz, tz) {
        this.session.onInitialInfo(zz, tz)
      }
      isResuming() {
        return this.session.isResuming()
      }
      getDroppedAt() {
        return this.droppedAt
      }
      onResumeInitialInfo(zz, tz) {
        if (this.session.onResuming(), null === zz) {
          try {
            (0, vz.d)().client.itemDropPrediction.reset()
          } catch (sz) {
            console.error("Error dropping the item drop predictions on resuming", sz)
          }
          return Fz.offlineInputReplay.discard(), void this.setSuspended(!1)
        }(0, vz.d)().client.itemDropPrediction.onResumeReplayOffered(), Fz.offlineInputReplay.replayFrom(zz.Os, tz)
      }
      onResumed(zz) {
        this.setSuspended(!1), (0, Fz.resendBeacons)();
        try {
          zz()
        } catch (tz) {
          console.error("Error completing the resume", tz)
        } finally {
          this.session.onResumed()
        }
      }
      attachRoom(zz) {
        const tz = (0, rt.f)((() => zz.connection.isOpen));
        zz.qB(tz);
        const sz = new Pt.d((() => {
          this.session.canHoldSeat() && this.listener.isLive() && (console.warn("The game server went silent, reconnecting"), this.onConnectionDropped(zz, "silent"), zz.leave(!1))
        }));
        zz.onStateChange((() => {
          sz.heard()
        }));
        const Fz = tz => {
          tz.persisted || zz.leave(!0)
        };
        window.addEventListener("pagehide", Fz), zz.qB(((tz, sz) => {
          if (zz === this.attachedRoom && this.listener.isLive()) return (0, Xz.f)(tz) && this.session.canHoldSeat() ? (console.warn(`Connection to the game server dropped with code ${tz}, reconnecting`), this.listener.onDropped(tz, sz), void this.onConnectionDropped(zz, String(tz))) : void this.listener.onRoomLeft(tz, sz)
        })), this.attachedRoom = zz, this.detachRoomListeners = () => {
          tz(), sz.dispose(), window.removeEventListener("pagehide", Fz)
        }
      }
      dispose() {
        this.detachRoom(), this.session.leave(), this.setSuspended(!1)
      }
      setSuspended(zz) {
        zz !== this.suspended && (this.suspended = zz, (0, Fz.setConnectionSuspended)(zz), (0, vz.d)().client.itemDropPrediction.setSuspended(zz))
      }
      detachRoom() {
        var zz;
        null === (zz = this.detachRoomListeners) || void 0 === zz || zz.call(this), this.detachRoomListeners = null, this.attachedRoom = null
      }
      onConnectionDropped(zz, tz) {
        (0, Yt.f)("disconnect", "Left room", tz), this.isResuming() || (this.droppedAt = Date.now()), this.detachRoom(), Fz.offlineInputReplay.onConnectionLost(), this.setSuspended(!0), this.session.onConnectionLost(zz.reconnectionToken)
      }
      resumeOnRoom(zz) {
        if (!this.listener.isLive()) return console.warn("Left the game while reconnecting, leaving the resumed room"), zz.leave(!0), void this.dispose();
        console.log("Reconnected to the game server, waiting for the game to resume"), (0, wt.r)(), Fz.offlineInputReplay.onConnectionReplaced(), this.msgHandler.PUz(zz), this.listener.onReconnected(zz), this.attachRoom(zz)
      }
    }
    var mt = sz(3145),
      Jt = sz(3149),
      It = sz(1293),
      Ct = sz(4328),
      et = sz(2873),
      Zt = sz(1060),
      Gt = sz(37111),
      Tt = sz(38469),
      ct = sz(8398),
      jt = sz(38473),
      At = sz(1750),
      yt = sz(38480),
      Mt = sz(1658),
      dt = sz(2561);

    function ht(zz) {
      var tz, sz;
      if ("object" !== typeof zz || null === zz) return {
        errType: typeof zz
      };
      const Fz = zz;
      return {
        errType: null !== (tz = null === (sz = zz.constructor) || void 0 === sz ? void 0 : sz.name) && void 0 !== tz ? tz : "",
        errName: "string" === typeof Fz.name ? Fz.name : "",
        eventType: "string" === typeof Fz.type ? Fz.type : "",
        errStack: "string" === typeof Fz.stack ? Fz.stack.split("\n").slice(1).join(" | ") : ""
      }
    }

    function Qt(zz) {
      if ("undefined" !== typeof ProgressEvent && zz instanceof ProgressEvent) return !0;
      if (!(zz instanceof Error)) return !1;
      const tz = zz.code;
      return "ServerError" === zz.name && void 0 === tz || "AbortError" === zz.name || "seat reservation expired." === zz.message || "early_leave" === zz.message
    }(0, Dz.m)((zz => {
      (0, Yt.f)("wasm_net", zz)
    }));
    let kt = !0;

    function it() {
      kt = !1
    }
    class Lt {
      constructor(zz) {
        this.gameNameWithVariation = void 0, this.lobbyName = void 0, this.colyClient = void 0, this.userContext = void 0, this.joinedAt = null, this.checkSendPath = () => {}, this.CN = void 0, this.connectionResume = void 0, this.incomingMsgInitialisor = void 0, this.gameNameWithVariation = zz.gameNameWithVariation, this.lobbyName = zz.lobbyName, this.colyClient = zz.colyClient, this.userContext = zz.userContext
      }
      async connectToServer(zz, tz, sz) {
        Bz.e.reset(), zz.bC = {
          [zz.gC]: {}
        }, zz.Uzz = void 0, (0, wt.r)(), (0, vz.d)().removeAllEntityNames(), (0, vz.d)().setEntityName(zz.gC, this.userContext.getPlayerName()), (0, It.q)({
          lobbyName: this.lobbyName
        }), console.log("Waiting for clientConnection passed promise to resolve");
        const Oz = (0, Mt.d)();
        console.log("joining server with game", this.gameNameWithVariation, "lobbyName", this.lobbyName);
        const oz = performance.now(),
          Uz = (0, jt.f)(this.userContext, (() => {
            const {
              roomName: Fz,
              joinOptions: Wz
            } = (0, rz.d)(this.userContext, this.gameNameWithVariation, this.lobbyName, tz, (zz => et.d.isUsingCustomGameTexturePack(zz)));
            return Wz.joinAdHold = Oz, Wz.renderBackend = (0, dt.c)(zz.mD), (0, Tt.f)((() => this.colyClient.joinOrCreate(Fz, Wz)), sz)
          }));
        return Hz.o.Yg("loadingScreenState", "loadingPage:joiningLobby"), await Uz.then((tz => {
          if (this.joinedAt = performance.now(), this.CN = zz, Oz) {
            const zz = (0, Mt.o)((() => {
              tz.send(Wz.i)
            }));
            tz.qB(zz), (0, Fz.onGameResetOnce)(zz)
          }
          const sz = new gz(tz);
          this.connectionResume = new xt((zz => this.colyClient.reconnect(zz)), (tz => {
            zz.Zm(tz)
          }), sz, {
            isLive: () => (0, vz.d)().client.getMsgHandler() === sz,
            onDropped: (zz, tz) => {
              (0, Jt.h)(zz) || this.logUnrecognisedConnectionLoss(zz, void 0, {
                site: "drop",
                closeReason: null !== tz && void 0 !== tz ? tz : "",
                sinceJoined: this.sinceJoined()
              })
            },
            onRoomLeft: (zz, tz) => {
              this.onRoomLeft(zz, tz)
            },
            onReconnected: zz => {
              this.incomingMsgInitialisor.PUz(zz), this.checkSendPath = (0, Gt.h)(sz, zz, Dz.p)
            },
            onGaveUp: (zz, tz) => {
              this.onResumeGaveUp(zz, tz)
            }
          }), this.connectionResume.attachRoom(tz), (0, Fz.onGameResetOnce)((() => {
            this.connectionResume.dispose()
          }));
          const Xz = sz.send,
            oz = sz.nB,
            Uz = sz.tsz.send,
            Kz = sz.tsz.nB,
            uz = sz.HUz;
          this.checkSendPath = (0, Gt.h)(sz, tz, Dz.p);
          const Nz = setInterval((() => {
            Xz === sz.send && oz === sz.nB && Uz === sz.tsz.send && Kz === sz.tsz.nB && uz === sz.HUz || it(), this.checkSendPath()
          }), 1e4);
          return (0, Fz.onGameResetOnce)((() => {
            clearInterval(Nz)
          })), {
            success: !0,
            successDetails: sz
          }
        })).catch((tz => {
          if (sz.aborted && tz === (0, At.f)(sz)) return {
            success: !1,
            failDetails: {
              reason: "Left the game while it loaded",
              requiresRefresh: !1,
              canReconnect: !1
            }
          };
          if (tz instanceof yt.e) return console.warn("Seat request timed out", this.lobbyName, this.gameNameWithVariation), {
            success: !1,
            failDetails: {
              reason: tz.message,
              requiresRefresh: !1,
              canReconnect: !1,
              gameServerUnreachable: "timedOut"
            }
          };
          zz.aD(`Failed to connect to bloxd room, check your internet connection. lobbyName: ${this.lobbyName}, gameNameWithVariation: ${this.gameNameWithVariation} code: ${tz.code}\n`, tz);
          const Fz = tz.code;
          return Fz === Xz.b.serverUpdating.code ? (this.goToUpdateWaiting(), {
            success: !1,
            failDetails: {
              reason: Xz.b.serverUpdating.text,
              requiresRefresh: !1,
              canReconnect: !0,
              goesToUpdateWaiting: !0
            }
          }) : {
            success: !1,
            failDetails: {
              ...this.onConnectionToServerLost(Fz, tz.message, {
                site: "join",
                sinceJoinStart: (0, Jt.d)(performance.now() - oz),
                ...ht(tz)
              }, Qt(tz)),
              rematch: (0, Tt.d)(tz),
              gameRefused: (0, ct.c)(tz)
            }
          }
        }))
      }
      setupServerListeners(zz, tz, sz) {
        Hz.o.Yg("loadingScreenState", "loadingPage:loadingPlayerInfo"), this.incomingMsgInitialisor = new Ht(this.gameNameWithVariation, tz.tsz, zz, this.connectionResume), this.incomingMsgInitialisor.setupStateReplicationHandlers();
        const Wz = tz.mUz();
        this.incomingMsgInitialisor.setupOnMessageListeners(Wz, sz), (0, Fz.onConnectionToServerReady)(Wz, tz), Wz.finishRegistration()
      }
      dispose() {
        this.connectionResume.dispose()
      }
      onResumeGaveUp(zz, tz) {
        (0, Zt.SD)(new Error("Reconnect failed"), {
          ...(0, mt.k)(tz),
          game: this.gameNameWithVariation
        }), (0, Yt.f)("disconnect", "Reconnect failed", tz.reason), (0, vz.d)().client.leaveGameUnwanted({
          reason: {
            translationKey: "general:lostConnection"
          },
          canReconnect: !zz,
          canPlayAgain: zz,
          requiresRefresh: !1,
          automaticallyReconnect: !1
        }), (0, st.navigatePreserveSearch)("/")
      }
      sinceJoined() {
        return null === this.joinedAt ? "" : (0, Jt.d)(performance.now() - this.joinedAt)
      }
      onRoomLeft(zz, tz) {
        var sz;
        if (zz === Xz.b.gameOrPluginKick.code) return;
        if (console.log(`Left room with code ${zz}`), zz === Xz.b.serverUpdating.code) return (0, Yt.f)("disconnect", "Left room", "serverUpdating"), (0, vz.d)().client.leaveGame(this.getUpdateWaitingUrl()), void this.goToUpdateWaiting();
        this.CN.aD(`Kicked from server with code ${zz}`, new Error);
        const Fz = Object.keys(Xz.b).find((tz => Xz.b[tz].code === zz));
        (0, Yt.f)("disconnect", "Left room", null !== Fz && void 0 !== Fz ? Fz : String(zz));
        const Wz = this.onConnectionToServerLost(zz, void 0, {
          site: "leave",
          closeReason: null !== tz && void 0 !== tz ? tz : "",
          sinceJoined: this.sinceJoined()
        });
        (0, vz.d)().client.leaveGameUnwanted({
          reason: `You have disconnected from the server.\n${Wz.reason}`,
          canReconnect: Wz.canReconnect,
          requiresRefresh: Wz.requiresRefresh,
          automaticallyReconnect: null !== (sz = Wz.automaticallyReconnect) && void 0 !== sz && sz
        }), (0, st.navigatePreserveSearch)("/")
      }
      getUpdateWaitingUrl() {
        return (0, Ct.A)(this.gameNameWithVariation, this.lobbyName)
      }
      goToUpdateWaiting() {
        (0, st.navigatePreserveSearch)(this.getUpdateWaitingUrl())
      }
      onConnectionToServerLost(zz, tz, sz) {
        var Fz;
        let Wz = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        if (null !== (Fz = tz) && void 0 !== Fz && Fz.endsWith(Xz.j) && (this.userContext.invalidateTrafficCode(), tz = tz.replace(Xz.j, "")), zz === Xz.b.outdatedVersion.code) return console.error("Outdated client with version ", Oz.e, ", refreshing page"), (0, Pz.reloadBloxd)(), {
          reason: "Outdated client",
          requiresRefresh: !0,
          canReconnect: !1
        };
        if (zz === Xz.b.loadRecaptchaError.code) return console.error("Load recaptcha error, refreshing page"), (0, Pz.reloadBloxd)(), {
          reason: "Failed to load recaptcha",
          requiresRefresh: !0,
          canReconnect: !1
        };
        for (const Oz in Xz.b) {
          const {
            code: sz,
            text: Fz,
            canReconnect: Wz
          } = Xz.b[Oz];
          if (sz === zz) {
            console.log("matched known error", zz, "leaving game");
            return {
              reason: "" !== Fz ? Fz : tz || `Code: ${zz}`,
              requiresRefresh: !1,
              canReconnect: Wz,
              automaticallyReconnect: sz === Xz.b.customGameUpdated.code || sz === Xz.b.duplicateLobbyNameError.code
            }
          }
        }
        return console.log("Didn't match known error, leaving game"), (0, Jt.e)(zz) || Wz ? console.warn("Connection lost", zz, tz) : this.logUnrecognisedConnectionLoss(zz, tz, sz), {
          reason: `Either your internet isn't working or this is a bug.\nCode: ${zz}`,
          requiresRefresh: !1,
          canReconnect: !1,
          gameServerUnreachable: Wz ? "failed" : void 0
        }
      }
      logUnrecognisedConnectionLoss(zz, tz, sz) {
        (0, Zt.SD)(new Error("Unrecognised connection loss"), {
          code: String(zz),
          cause: null !== tz && void 0 !== tz ? tz : "",
          ...sz,
          game: this.gameNameWithVariation,
          ...(0, Jt.i)()
        })
      }
    }
  },
  38419: (zz, tz, sz) => {
    sz.d(tz, {
      b: () => Rs,
      f: () => sF
    });
    var Fz, Wz, Xz, Oz, oz, vz, Uz, Kz, uz, Nz, bz, wz, Dz, gz, Hz, Bz, Pz, rz, Yz, xz, mz, Jz, Iz, Cz, ez, Zz, Gz, Tz, cz, jz, Az, yz, Mz, dz, hz, Qz, kz, iz, Lz, lz, nz, az, qz, Sz, Vz, Rz, pz, fz, Ez, zt, tt, st, Ft, Wt, Xt, Ot, ot, vt, Ut, Kt, ut, Nt, bt, wt, Dt, gt, Ht, Bt, Pt, rt, Yt, xt, mt, Jt, It, Ct, et, Zt, Gt, Tt, ct, jt, At, yt, Mt, dt, ht, Qt, kt, it, Lt, lt, nt, qt, St, Vt, Rt, pt, ft, Et = sz(34),
      zs = sz(36538),
      ts = sz(38437),
      ss = sz(38442),
      Fs = sz(8611),
      Ws = sz(577),
      Xs = sz(574),
      Os = sz(36210);
    let os = (Fz = (0, Fs.type)("number"), Wz = (0, Fs.type)("number"), Xz = (0, Fs.type)("number"), Oz = (0, Fs.type)("number"), oz = (0, Fs.type)("number"), vz = (0, Fs.type)("number"), Uz = (0, Fs.type)("string"), Kz = class extends Fs.Schema {
        constructor() {
          super(...arguments), (0, ts.e)(this, "id", uz, this), (0, ts.e)(this, "amount", Nz, this), (0, ts.e)(this, "x", bz, this), (0, ts.e)(this, "y", wz, this), (0, ts.e)(this, "z", Dz, this), (0, ts.e)(this, "size", gz, this), (0, ts.e)(this, "attributes", Hz, this)
        }
      }, uz = (0, ss.b)(Kz.prototype, "id", [Fz], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return 0
        }
      }), Nz = (0, ss.b)(Kz.prototype, "amount", [Wz], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return 0
        }
      }), bz = (0, ss.b)(Kz.prototype, "x", [Xz], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return 0
        }
      }), wz = (0, ss.b)(Kz.prototype, "y", [Oz], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return 0
        }
      }), Dz = (0, ss.b)(Kz.prototype, "z", [oz], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return 0
        }
      }), gz = (0, ss.b)(Kz.prototype, "size", [vz], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return 1
        }
      }), Hz = (0, ss.b)(Kz.prototype, "attributes", [Uz], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return "{}"
        }
      }), Kz),
      vs = (Bz = (0, Fs.type)("string"), Pz = (0, Fs.type)("string"), rz = class extends Fs.Schema {
        constructor() {
          super(...arguments), (0, ts.e)(this, "itemName", Yz, this), (0, ts.e)(this, "enchantmentTier", xz, this)
        }
      }, Yz = (0, ss.b)(rz.prototype, "itemName", [Bz], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: null
      }), xz = (0, ss.b)(rz.prototype, "enchantmentTier", [Pz], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: null
      }), rz),
      Us = (mz = (0, Fs.type)("string"), Jz = (0, Fs.type)("string"), Iz = (0, Fs.type)("number"), Cz = (0, Fs.type)("number"), ez = (0, Fs.type)("number"), Zz = (0, Fs.type)("float32"), Gz = (0, Fs.type)("float32"), Tz = (0, Fs.type)("float32"), cz = (0, Fs.type)("string"), jz = (0, Fs.type)(["number"]), Az = (0, Fs.type)("boolean"), yz = class extends Fs.Schema {
        constructor() {
          super(...arguments), (0, ts.e)(this, "type", Mz, this), (0, ts.e)(this, "name", dz, this), (0, ts.e)(this, "x", hz, this), (0, ts.e)(this, "y", Qz, this), (0, ts.e)(this, "z", kz, this), (0, ts.e)(this, "xRotation", iz, this), (0, ts.e)(this, "yRotation", Lz, this), (0, ts.e)(this, "zRotation", lz, this), (0, ts.e)(this, "followingEId", nz, this), (0, ts.e)(this, "followingOffset", az, this), (0, ts.e)(this, "shouldMatchFollowingEntityRotation", qz, this)
        }
      }, Mz = (0, ss.b)(yz.prototype, "type", [mz], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: null
      }), dz = (0, ss.b)(yz.prototype, "name", [Jz], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return ""
        }
      }), hz = (0, ss.b)(yz.prototype, "x", [Iz], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return 0
        }
      }), Qz = (0, ss.b)(yz.prototype, "y", [Cz], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return 0
        }
      }), kz = (0, ss.b)(yz.prototype, "z", [ez], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return 0
        }
      }), iz = (0, ss.b)(yz.prototype, "xRotation", [Zz], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return 0
        }
      }), Lz = (0, ss.b)(yz.prototype, "yRotation", [Gz], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return 0
        }
      }), lz = (0, ss.b)(yz.prototype, "zRotation", [Tz], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return 0
        }
      }), nz = (0, ss.b)(yz.prototype, "followingEId", [cz], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: null
      }), az = (0, ss.b)(yz.prototype, "followingOffset", [jz], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return new Fs.ArraySchema(0, 0, 0)
        }
      }), qz = (0, ss.b)(yz.prototype, "shouldMatchFollowingEntityRotation", [Az], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return !0
        }
      }), yz),
      Ks = (Sz = (0, Fs.type)("float32"), Vz = (0, Fs.type)("float32"), Rz = (0, Fs.type)("boolean"), pz = (0, Fs.type)("boolean"), fz = (0, Fs.type)("float32"), Ez = (0, Fs.type)("boolean"), zt = (0, Fs.type)("string"), tt = (0, Fs.type)("string"), st = (0, Fs.type)("string"), Ft = (0, Fs.type)("string"), Wt = (0, Fs.type)(["number"]), Xt = (0, Fs.type)("number"), Ot = (0, Fs.type)({
        map: vs
      }), ot = class extends Us {
        constructor() {
          super(...arguments), (0, ts.e)(this, "scale", vt, this), (0, ts.e)(this, "speed", Ut, this), (0, ts.e)(this, "jumping", Kt, this), (0, ts.e)(this, "crouching", ut, this), (0, ts.e)(this, "cameraPitch", Nt, this), (0, ts.e)(this, "armSwinging", bt, this), (0, ts.e)(this, "heldItemName", wt, this), (0, ts.e)(this, "heldItemEnchantmentTier", Dt, this), (0, ts.e)(this, "pose", gt, this), (0, ts.e)(this, "ridingVehicleEId", Ht, this), (0, ts.e)(this, "meshOffset", Bt, this), (0, ts.e)(this, "baseRenderHeading", Pt, this), (0, ts.e)(this, "armour", rt, this)
        }
      }, vt = (0, ss.b)(ot.prototype, "scale", [Sz], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return 1
        }
      }), Ut = (0, ss.b)(ot.prototype, "speed", [Vz], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return 0
        }
      }), Kt = (0, ss.b)(ot.prototype, "jumping", [Rz], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return !1
        }
      }), ut = (0, ss.b)(ot.prototype, "crouching", [pz], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return !1
        }
      }), Nt = (0, ss.b)(ot.prototype, "cameraPitch", [fz], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return 0
        }
      }), bt = (0, ss.b)(ot.prototype, "armSwinging", [Ez], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return !1
        }
      }), wt = (0, ss.b)(ot.prototype, "heldItemName", [zt], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: null
      }), Dt = (0, ss.b)(ot.prototype, "heldItemEnchantmentTier", [tt], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: null
      }), gt = (0, ss.b)(ot.prototype, "pose", [st], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return "standing"
        }
      }), Ht = (0, ss.b)(ot.prototype, "ridingVehicleEId", [Ft], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return null
        }
      }), Bt = (0, ss.b)(ot.prototype, "meshOffset", [Wt], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return new Fs.ArraySchema(0, 0, 0)
        }
      }), Pt = (0, ss.b)(ot.prototype, "baseRenderHeading", [Xt], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return 0
        }
      }), rt = (0, ss.b)(ot.prototype, "armour", [Ot], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return new Fs.MapSchema
        }
      }), ot),
      us = (Yt = (0, Fs.type)("string"), xt = (0, Fs.type)("string"), mt = (0, Fs.type)("string"), Jt = (0, Fs.type)("uint8"), It = class extends Ks {
        constructor() {
          super(...arguments), (0, ts.e)(this, "variation", Ct, this), (0, ts.e)(this, "ownerDbId", et, this), (0, ts.e)(this, "metaInfo", Zt, this), (0, ts.e)(this, "aiState", Gt, this)
        }
      }, Ct = (0, ss.b)(It.prototype, "variation", [Yt], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return "default"
        }
      }), et = (0, ss.b)(It.prototype, "ownerDbId", [xt], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return null
        }
      }), Zt = (0, ss.b)(It.prototype, "metaInfo", [mt], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return ""
        }
      }), Gt = (0, ss.b)(It.prototype, "aiState", [Jt], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return 0
        }
      }), It);
    Tt = (0, Fs.type)("string"), ct = (0, Fs.type)("string"), jt = (0, Fs.type)("string"), At = (0, Fs.type)("string"), yt = class extends Us {
      constructor() {
        super(...arguments), (0, ts.e)(this, "meshKind", Mt, this), (0, ts.e)(this, "meshOpts", dt, this), (0, ts.e)(this, "pose", ht, this), (0, ts.e)(this, "leaderboardTop", Qt, this)
      }
    }, Mt = (0, ss.b)(yt.prototype, "meshKind", [Tt], {
      configurable: !0,
      enumerable: !0,
      writable: !0,
      initializer: null
    }), dt = (0, ss.b)(yt.prototype, "meshOpts", [ct], {
      configurable: !0,
      enumerable: !0,
      writable: !0,
      initializer: null
    }), ht = (0, ss.b)(yt.prototype, "pose", [jt], {
      configurable: !0,
      enumerable: !0,
      writable: !0,
      initializer: null
    }), Qt = (0, ss.b)(yt.prototype, "leaderboardTop", [At], {
      configurable: !0,
      enumerable: !0,
      writable: !0,
      initializer: null
    });

    function Ns(zz) {
      return Object.keys(Fs.Metadata.getFields(zz))
    }
    const bs = Ns(us);
    for (const FF of Ws.s)
      if (!bs.includes(FF)) throw new Error(`Mob Schema is missing a networked property: "${FF}"`);
    const ws = Ns((kt = (0, Fs.type)("string"), it = (0, Fs.type)("float32"), Lt = (0, Fs.type)("float32"), lt = (0, Fs.type)("float32"), nt = (0, Fs.type)("float32"), qt = class extends Us {
      constructor() {
        super(...arguments), (0, ts.e)(this, "soundName", St, this), (0, ts.e)(this, "volume", Vt, this), (0, ts.e)(this, "refDistance", Rt, this), (0, ts.e)(this, "maxHearDist", pt, this), (0, ts.e)(this, "rate", ft, this)
      }
    }, St = (0, ss.b)(qt.prototype, "soundName", [kt], {
      configurable: !0,
      enumerable: !0,
      writable: !0,
      initializer: function() {
        return ""
      }
    }), Vt = (0, ss.b)(qt.prototype, "volume", [it], {
      configurable: !0,
      enumerable: !0,
      writable: !0,
      initializer: function() {
        return 1
      }
    }), Rt = (0, ss.b)(qt.prototype, "refDistance", [Lt], {
      configurable: !0,
      enumerable: !0,
      writable: !0,
      initializer: function() {
        return Os.f
      }
    }), pt = (0, ss.b)(qt.prototype, "maxHearDist", [lt], {
      configurable: !0,
      enumerable: !0,
      writable: !0,
      initializer: function() {
        return Os.b
      }
    }), ft = (0, ss.b)(qt.prototype, "rate", [nt], {
      configurable: !0,
      enumerable: !0,
      writable: !0,
      initializer: function() {
        return 1
      }
    }), qt));
    for (const FF of Xs.i)
      if (!ws.includes(FF)) throw new Error(`AudioEntity Schema is missing a replicated property: "${FF}"`);
    var Ds = sz(37861),
      gs = sz(1223),
      Hs = sz(580),
      Bs = sz(37654),
      Ps = sz(3926),
      rs = sz(321),
      Ys = sz(36652),
      xs = sz(37543),
      ms = sz(2140),
      Is = sz(36623),
      Cs = sz(37886),
      es = sz(36771),
      Zs = sz(330),
      Gs = sz.n(Zs),
      Ts = sz(37357),
      cs = sz(36461),
      As = sz(37516),
      ys = sz(37561);
    class Ms {
      constructor(zz, tz) {
        this.bloxd = zz, this.eId = tz, this.CN = void 0, this.colyseusEntity = void 0, this.canSeeSub = void 0, this.canAttackSub = void 0, this.interactableSub = void 0, this.overlayColourSub = void 0, this.opacitySub = void 0, this.zIndexSub = void 0, this.multilineTextBoxSub = void 0, this.previousHidingMeshManagerState = void 0, this.meshKind = void 0, this.meshOpts = void 0, this.leaderboardTop = void 0, this.meshRebuildQueued = !1, this.lw = !1, this.CN = zz.CN
      }
      initClient(zz) {
        var tz, sz, Fz;
        this.colyseusEntity = zz, this.meshKind = zz.meshKind, this.meshOpts = zz.meshOpts, this.leaderboardTop = zz.leaderboardTop, this.CN.Qr.add([zz.x, zz.y, zz.z], 1, 1, null, null, !1, !1, this.eId), this.CN.Qr.MI(this.eId, "smoothToServerPos");
        const Wz = "Person" === this.meshKind;
        this.CN.Qr.MI(this.eId, "meshRotation", {
          isServerControlled: !0,
          ...Wz ? {
            defaultRotationsPerSecond: .5
          } : {},
          childrenNodeParams: Wz ? [{
            nodeName: "HeadMesh",
            softTolerance: Cs.h,
            hardTolerance: null
          }] : []
        }), this.updateHidingMeshMgr(), this.canSeeSub = Et.o.subscribe(`otherEntitySettings|${this.eId}|canSee`, (zz => {
          this.updateHidingMeshMgr()
        }));
        const Xz = () => {
          const zz = this.CN.Qr.kzz(this.eId);
          if (!zz) return;
          const tz = (0, es.i)(this.eId);
          if ("number" === typeof zz.bI) {
            var sz, Fz, Wz, Xz;
            const Oz = null === (sz = (0, ms.n)("head", null === (Wz = this.getSpec()) || void 0 === Wz || null === (Xz = Wz.opts.textures) || void 0 === Xz ? void 0 : Xz.head)) || void 0 === sz || null === (Fz = sz.personModel) || void 0 === Fz ? void 0 : Fz.fullBody;
            return this.CN.mD.vI.setPickable(zz.bI, tz && !Oz), void(0, cs.updatePersonAttachmentPickability)(this.CN, this.eId, tz)
          }
          const Oz = zz.mesh;
          if (Oz)
            for (const oz of [Oz, ...Oz.getChildMeshes(!1)]) "Ng" in oz && !oz.name.startsWith("Cape|") && (oz.Ng = tz)
        };
        this.canAttackSub = Et.o.subscribe(`otherEntitySettings|${this.eId}|canAttack`, Xz), this.interactableSub = Et.o.subscribe(`otherEntitySettings|${this.eId}|interactable`, Xz), this.overlayColourSub = Et.o.subscribe(`otherEntitySettingsClientifiedEId|${this.eId}|overlayColour`, (zz => {
          this.updateOverlayColour(zz)
        })), this.opacitySub = Et.o.subscribe(`otherEntitySettingsClientifiedEId|${this.eId}|opacity`, (zz => {
          this.updateOpacity(zz)
        })), this.zIndexSub = Et.o.subscribe(`otherEntitySettingsClientifiedEId|${this.eId}|zIndex`, (zz => {
          this.updateZIndex(zz)
        }));
        const Oz = this.CN.bC[this.CN.gC][this.eId];
        this.updateOverlayColour(null !== (tz = null === Oz || void 0 === Oz ? void 0 : Oz.overlayColour) && void 0 !== tz ? tz : null), this.updateOpacity(null !== (sz = null === Oz || void 0 === Oz ? void 0 : Oz.opacity) && void 0 !== sz ? sz : 1), this.updateZIndex(null !== (Fz = null === Oz || void 0 === Oz ? void 0 : Oz.zIndex) && void 0 !== Fz ? Fz : 0), this.multilineTextBoxSub = (0, Is.r)(this.CN, this.eId)
      }
      onChangeClient(zz, tz) {
        if ("xRotation" === zz || "yRotation" === zz || "zRotation" === zz)(0, Is.v)(this.CN, this.eId, zz, tz);
        else if ("pose" === zz) {
          const zz = this.CN.Qr.Vzz(this.eId);
          zz && (zz.pose = tz || "standing")
        } else "meshKind" === zz || "meshOpts" === zz ? (this[zz] = tz, this.queueMeshRebuild()) : "name" === zz && "" !== tz ? this.updateHidingMeshMgr() : "leaderboardTop" === zz && (this.leaderboardTop = tz, Et.o.Yg(`leaderboardTop|${this.eId}`, tz))
      }
      disposeClient() {
        this.lw = !0, this.CN.Qr.deleteEntity(this.eId), Et.o.unsubscribe(this.canSeeSub), Et.o.unsubscribe(this.canAttackSub), Et.o.unsubscribe(this.interactableSub), Et.o.unsubscribe(this.overlayColourSub), Et.o.unsubscribe(this.opacitySub), Et.o.unsubscribe(this.zIndexSub), Et.o.unsubscribe(this.multilineTextBoxSub)
      }
      getCurrentHidingMeshMgrState() {
        var zz, tz;
        return {
          canSee: null !== (zz = null === (tz = this.CN.bC[this.CN.gC][this.eId]) || void 0 === tz ? void 0 : tz.canSee) && void 0 !== zz && zz,
          name: this.colyseusEntity.name,
          meshKind: this.meshKind,
          meshOpts: this.meshOpts
        }
      }
      updateHidingMeshMgr() {
        var zz, tz, sz;
        const {
          CN: Fz
        } = this, {
          Qr: Wz
        } = Fz, Xz = this.getCurrentHidingMeshMgrState();
        if ((0, rs.Zd)(this.previousHidingMeshManagerState, Xz)) return;
        if (this.previousHidingMeshManagerState = Xz, Wz.pI(this.eId, "hidingMeshManager"), null === (zz = Fz.bC[Fz.gC][this.eId]) || void 0 === zz || !zz.canSee) return;
        const Oz = this.getSpec();
        if (!Oz) return;
        const {
          type: oz,
          opts: vz
        } = Oz;
        "Person" === oz && (vz.textures = (0, ms.p)(vz.textures)), vz.eId = this.eId, Wz.MI(this.eId, "hidingMeshManager", {
          addMeshComponent: () => {
            var zz, tz, sz;
            "Leaderboard" === oz && (vz.leaderboardTop = this.leaderboardTop);
            const Xz = this.bloxd.client.meshCreator.getEntityMesh(oz, vz, (zz => {
              var tz, sz;
              if ("number" === typeof zz) {
                var Wz, Xz, Oz;
                const tz = Fz.mD.vI;
                tz.setEntityId(zz, this.eId);
                const sz = "Person" === oz && (null === (Wz = (0, ms.n)("head", null === (Oz = vz.textures) || void 0 === Oz ? void 0 : Oz.head)) || void 0 === Wz || null === (Xz = Wz.personModel) || void 0 === Xz ? void 0 : Xz.fullBody);
                return void tz.setPickable(zz, (0, es.i)(this.eId) && !sz)
              }
              const Uz = zz;
              for (const oz of [Uz, ...Uz.getChildMeshes(!1)]) void 0 === oz.Ng || oz.name.startsWith("Cape|") || (oz.Ng = (0, es.i)(this.eId), oz.metadata ??= new Fz.mD.bg, oz.metadata.eId = this.eId);
              this.updateOpacity(null !== (tz = null === (sz = Fz.bC[Fz.gC][this.eId]) || void 0 === sz ? void 0 : sz.opacity) && void 0 !== tz ? tz : 1)
            }));
            if (!Xz) return;
            const {
              bI: Oz,
              mesh: Uz,
              meshOffset: Kz,
              nameYOffset: uz,
              modelLoaded: Nz
            } = Xz;
            null === Nz || void 0 === Nz || Nz.then((() => {
              var zz;
              (null === (zz = Wz.kzz(this.eId)) || void 0 === zz ? void 0 : zz.mesh) === Uz && (this.previousHidingMeshManagerState = null, this.updateHidingMeshMgr())
            }));
            const bz = null === Oz ? null : Fz.mD.vI.Msz(Oz, 0);
            if (Wz.MI(this.eId, Wz.names.mesh, {
                bI: Oz,
                Osz: bz,
                mesh: Uz,
                cOz: !1,
                Usz: "Leaderboard" !== oz,
                offset: Kz.slice(),
                TOz: "ParticleEmitter" === oz && vz.followTargetMeshOffset ? zz => {
                  var tz;
                  Gs().copy(zz, Kz);
                  const sz = null === (tz = Wz.Mtz(this.eId)) || void 0 === tz ? void 0 : tz.yw,
                    Fz = void 0 === sz ? null : Wz.Vzz(sz);
                  if (Fz) {
                    var Xz, Oz;
                    const tz = this.bloxd.getEntityHeading(null !== (Xz = Fz.ridingVehicleEId) && void 0 !== Xz ? Xz : sz, !0),
                      Wz = Math.sin(tz),
                      oz = Math.cos(tz);
                    zz[0] += Fz.meshOffset[0] * oz + Fz.meshOffset[2] * Wz, zz[1] += Fz.meshOffset[1], zz[2] += Fz.meshOffset[2] * oz - Fz.meshOffset[0] * Wz;
                    const vz = null !== (Oz = Fz.ridingVehicleEId) && void 0 !== Oz ? Oz : null;
                    null !== vz && (0, ys.b)(this.CN, vz, zz)
                  }
                } : null
              }), "Person" === oz) {
              var wz, Dz, gz, Hz;
              Wz.MI(this.eId, Wz.names.meshAttachments, {
                personFullBody: null !== (wz = null === (Dz = (0, ms.n)("head", null === (Hz = vz.textures) || void 0 === Hz ? void 0 : Hz.head)) || void 0 === Dz || null === (gz = Dz.personModel) || void 0 === gz ? void 0 : gz.fullBody) && void 0 !== wz && wz
              });
              for (const zz of gs.u) {
                var Bz, Pz, rz;
                const tz = null === (Bz = vz.textures) || void 0 === Bz ? void 0 : Bz[zz];
                tz && null !== (Pz = (0, ms.n)(zz, tz)) && void 0 !== Pz && null !== (rz = Pz.attachments) && void 0 !== rz && rz.length && xs.c.Player.meshApi.updatePlayerCosmetic(this.eId, Oz, zz, tz)
              }
              Wz.MI(this.eId, Wz.names.moveState), Wz.MI(this.eId, "updateWalkingState", {
                bI: Oz,
                Osz: bz,
                walkingLegSwingDuration: Cs.n
              }), Wz.MI(this.eId, "humanoidMesh", {
                bI: Oz,
                Osz: bz,
                heldItemPositionParams: {},
                maxWalkingAngleOverride: null
              }), Wz.MI(this.eId, "animator", {
                bI: Oz,
                Osz: bz,
                modelLifeformType: "Player"
              }), As.h.hasAnimation("Person") && Wz.MI(this.eId, "rigAnimation", {
                target: "Person",
                bI: Oz
              }), Wz.Vzz(this.eId).pose = this.colyseusEntity.pose || "standing"
            } else if ("BloxdBlock" === oz && null !== Oz) {
              Wz.MI(this.eId, "animator", {
                bI: Oz,
                Osz: bz,
                modelLifeformType: null
              });
              const zz = (0, Bs.u)(vz.blockName);
              null !== zz && Wz.MI(this.eId, "rigAnimation", {
                target: zz,
                bI: Oz
              })
            }
            Wz.ooz(this.eId, "entityName", {
              name: this.colyseusEntity.name,
              nameYOffset: uz
            }), this.bloxd.setEntityName(this.eId, this.colyseusEntity.name), !0 === vz.autoRotate && (Wz.pI(this.eId, "meshRotation"), Wz.MI(this.eId, "autoRotate"));
            const {
              lineToEId: Yz
            } = vz;
            (0, Hs.G)(Yz) || Wz.MI(this.eId, "lineToEntity", {
              lineToEId: Yz
            });
            const xz = Fz.bC[Fz.gC][this.eId];
            this.updateOverlayColour(null !== (zz = null === xz || void 0 === xz ? void 0 : xz.overlayColour) && void 0 !== zz ? zz : null), this.updateOpacity(null !== (tz = null === xz || void 0 === xz ? void 0 : xz.opacity) && void 0 !== tz ? tz : 1), this.updateZIndex(null !== (sz = null === xz || void 0 === xz ? void 0 : xz.zIndex) && void 0 !== sz ? sz : 0)
          },
          removeMeshComponent: () => {
            "Person" !== oz && "BloxdBlock" !== oz || Wz.pI(this.eId, "rigAnimation"), Wz.pI(this.eId, Wz.names.mesh), Wz.Xzz(this.eId, Wz.names.meshAttachments) && Wz.pI(this.eId, Wz.names.meshAttachments), Wz.pI(this.eId, "entityName"), Wz.pI(this.eId, "autoRotate"), Wz.pI(this.eId, "lineToEntity"), "Person" === oz ? (Wz.pI(this.eId, Wz.names.moveState), Wz.pI(this.eId, "updateWalkingState"), Wz.pI(this.eId, "humanoidMesh"), Wz.pI(this.eId, "animator")) : "BloxdBlock" === oz && Wz.pI(this.eId, "animator")
          },
          hideDist: null !== (tz = vz.hideDist) && void 0 !== tz ? tz : 80,
          movingHideDist: null !== (sz = vz.hideDist) && void 0 !== sz ? sz : 120,
          displayOutsideLoadedChunk: vz.hideDist > 100,
          immediatelyUpdate: !0,
          uu: "BloxdBlock" === oz ? vz.blockName : oz
        })
      }
      queueMeshRebuild() {
        this.meshRebuildQueued || (this.meshRebuildQueued = !0, queueMicrotask((() => {
          this.meshRebuildQueued = !1, this.lw || this.updateHidingMeshMgr()
        })))
      }
      getSpec() {
        return (0, Ps.j)({
          meshKind: this.meshKind,
          meshOpts: this.meshOpts
        })
      }
      updateOverlayColour(zz) {
        var tz, sz;
        if ("Person" !== this.meshKind) return;
        let Fz = new Ys.c(0, 0, 0, 0);
        if (null !== zz) {
          const tz = (0, rs.W)(zz);
          Fz = new Ys.c(tz[0] / 255, tz[1] / 255, tz[2] / 255, .5)
        }
        const Wz = null !== (tz = null === (sz = this.CN.Qr.kzz(this.eId)) || void 0 === sz ? void 0 : sz.bI) && void 0 !== tz ? tz : null;
        null !== Wz && xs.c.Player.meshApi.updateMeshOverlayColour(Wz, Fz)
      }
      updateZIndex(zz) {
        var tz;
        if ("Person" !== this.meshKind) return;
        const sz = null === (tz = this.CN.Qr.kzz(this.eId)) || void 0 === tz ? void 0 : tz.bI;
        "number" === typeof sz && this.CN.mD.vI.setRenderingGroupId(sz, zz)
      }
      updateOpacity(zz) {
        const tz = this.CN.Qr.kzz(this.eId);
        tz && ("number" !== typeof tz.bI ? tz.mesh && "ParticleEmitter" !== this.meshKind && (0, Ts.d)(tz.mesh, zz) : xs.c.Player.meshApi.updateMeshOpacity(tz.bI, zz))
      }
    }
    var ds = sz(38428);
    class hs {
      constructor(zz, tz) {
        this.eId = tz, this.CN = void 0, this.schema = void 0, this.CN = zz.CN
      }
      initClient(zz) {
        this.schema = zz, this.CN.Qr.add([zz.x, zz.y, zz.z], .1, .1, null, null, !1, !1, this.eId), this.CN.Qr.MI(this.eId, "smoothToServerPos"), ds.b.add(this.eId, this.copyOpts())
      }
      onChangeClient(zz) {
        Xs.i.includes(zz) && ds.b.update(this.eId, this.copyOpts())
      }
      disposeClient() {
        ds.b.remove(this.eId), this.CN.Qr.deleteEntity(this.eId)
      }
      copyOpts() {
        const {
          soundName: zz,
          volume: tz,
          refDistance: sz,
          maxHearDist: Fz,
          rate: Wz
        } = this.schema;
        return {
          soundName: zz,
          volume: tz,
          refDistance: sz,
          maxHearDist: Fz,
          rate: Wz
        }
      }
    }
    var Qs = sz(3348),
      ks = sz(36201),
      is = sz(6057),
      Ls = sz(37207),
      ls = sz(2555),
      ns = sz(37600),
      as = sz(8570),
      qs = sz(37899),
      Ss = sz(37188),
      Vs = sz(2689);
    class Rs {
      constructor(zz, tz) {
        let sz = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 4,
          Fz = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : () => performance.now();
        this.tsz = zz, this.CN = tz, this.setupBudgetMs = sz, this.now = Fz, this.createStateCallbacks = void 0, this.roomStateCallbacks = void 0, this.allItems = {}, this.detachers = new Map, this.deferredSetups = new Map, this.queuedSetups = new Map, this.promotedSetups = new Set, this.setupBudgetLeftMs = void 0, this.lastRefillMs = void 0, this.roomState = void 0, this.lw = !1, this.onFrame = () => {
          this.setUpQueuedEntities(!0)
        }, this.uB = () => {
          this.setUpQueuedEntities(this.now() - this.lastRefillMs > 100)
        }, this.setUpPromoted = () => {
          for (const zz of this.promotedSetups) {
            this.promotedSetups.delete(zz);
            const tz = this.queuedSetups.get(zz);
            tz && (this.queuedSetups.delete(zz), this.timedSetup(tz, zz))
          }
        }, this.createStateCallbacks = (0, as.getStateCallbacks)(zz), this.roomStateCallbacks = this.createStateCallbacks(zz.state), this.roomState = zz.state, this.setupBudgetLeftMs = sz, this.lastRefillMs = Fz()
      }
      setup() {
        this.setupEntityHandlers(), this.setupItemHandlers(), this.tsz.onStateChange(this.setUpPromoted), this.CN.on("beforeInputs", this.onFrame), this.CN.on("wN", this.uB)
      }
      setUpQueuedEntities(zz) {
        var tz;
        if ((null === (tz = (0, ls.d)().client.getMsgHandler()) || void 0 === tz ? void 0 : tz.tsz) !== this.tsz) return this.CN.off("beforeInputs", this.onFrame), this.CN.off("wN", this.uB), this.queuedSetups.clear(), void this.promotedSetups.clear();
        if (zz && (this.setupBudgetLeftMs = this.setupBudgetMs, this.lastRefillMs = this.now()), this.setUpPromoted(), 0 !== this.queuedSetups.size)
          for (Gs().copy(ps, this.CN.Qr.yB(this.CN.gC)); this.setupBudgetLeftMs > 0;) {
            const zz = this.nearestQueued(ps);
            if (null === zz) return;
            this.setUpIfQueued(zz), this.setUpPromoted()
          }
      }
      nearestQueued(zz) {
        let tz = null,
          sz = 1 / 0;
        return this.queuedSetups.forEach(((Fz, Wz) => {
          const Xz = function(zz, tz) {
            return (tz.x - zz[0]) ** 2 + (tz.y - zz[1]) ** 2 + (tz.z - zz[2]) ** 2
          }(zz, Fz);
          (null === tz || Xz < sz) && (tz = Wz, sz = Xz)
        })), tz
      }
      setUpOrQueue(zz, tz) {
        0 === this.queuedSetups.size && this.setupBudgetLeftMs > 0 || this.mustSetUpNow(zz, tz) ? this.timedSetup(zz, tz) : this.queuedSetups.set(tz, zz)
      }
      mustSetUpNow(zz, tz) {
        const sz = this.CN.Uzz;
        if (tz === sz) return !0;
        const Fz = this.roomState.entities.get(sz);
        return !(!Fz || Fz.ridingVehicleEId !== tz && Fz.followingEId !== tz) || (fs(zz.type) === Ds.e || (0, ls.d)().getFollowingEntities(tz).length > 0)
      }
      setUpIfQueued(zz) {
        const tz = this.queuedSetups.get(zz);
        tz && (this.queuedSetups.delete(zz), this.timedSetup(tz, zz))
      }
      promoteIfQueued(zz) {
        null !== zz && this.queuedSetups.has(zz) && this.promotedSetups.add(zz)
      }
      timedSetup(zz, tz) {
        const sz = this.now();
        this.setupEntity(zz, tz), this.setupBudgetLeftMs -= this.now() - sz
      }
      setupEntityHandlers() {
        this.roomStateCallbacks.entities.Hr(((zz, tz) => {
          this.CN.Uzz ? this.setUpOrQueue(zz, tz) : this.deferEntitySetupUntilInitInfo(zz, tz)
        })), this.roomStateCallbacks.entities.NJ(((zz, tz) => {
          const sz = this.deferredSetups.get(tz);
          sz && (Et.o.unsubscribe(sz), this.deferredSetups.delete(tz)), this.queuedSetups.delete(tz), this.detach(tz), (0, ls.d)().client.disposeEntity(tz)
        }))
      }
      deferEntitySetupUntilInitInfo(zz, tz) {
        const sz = Et.o.DH("initInfoReceived", (() => {
          this.deferredSetups.delete(tz), this.setUpOrQueue(zz, tz)
        }));
        this.deferredSetups.set(tz, sz), (0, Qs.onGameResetOnce)((() => {
          this.deferredSetups.get(tz) === sz && (Et.o.unsubscribe(sz), this.deferredSetups.delete(tz)), (0, ls.d)().updatePositionAndPhysics(this.CN.gC, {
            type: is.r.DEFAULT,
            tier: null
          }, !0), (0, ls.d)().takeHeldPlayerBodySize(this.CN.gC);
          const zz = this.CN.Qr.mzz(this.CN.gC);
          zz && (zz.movementType = is.o.NORMAL)
        }))
      }
      setupEntity(zz, tz) {
        const sz = tz === this.CN.Uzz;
        if (sz)(0, ls.d)().client.lL(this.CN.gC, null, null);
        else {
          const {
            type: sz
          } = zz, Fz = fs(sz);
          if (void 0 === Fz) return void
          function(zz, tz) {
            const sz = String(zz);
            if (Es.has(sz)) return;
            Es.add(sz);
            const Fz = sz.length > 80 ? `${sz.slice(0,80)}...` : sz,
              Wz = `No client handler for entity type ${JSON.stringify(Fz)}, so entity ${tz} is not set up`;
            console.warn(Wz), (0, Vs.f)("uncaught", Wz, "unknown_entity_type")
          }(sz, tz);
          (0, ls.d)().client.lL(tz, zz, new Fz((0, ls.d)(), tz, sz))
        }
        const Fz = this.createStateCallbacks(zz);
        if (sz) return this.setupMapSchemaCallbacks(tz, zz, Fz, "armour"), this.setupScalarField(tz, zz, Fz, "scale"), this.setupScalarField(tz, zz, Fz, "ridingVehicleEId"), this.setupScalarField(tz, zz, Fz, "followingEId"), this.setupScalarField(tz, zz, Fz, "followingOffset"), void this.setupScalarField(tz, zz, Fz, "shouldMatchFollowingEntityRotation");
        for (const Wz of Ns(zz.constructor)) zz[Wz] instanceof Fs.MapSchema ? this.setupMapSchemaCallbacks(tz, zz, Fz, Wz) : this.setupScalarField(tz, zz, Fz, Wz)
      }
      setupMapSchemaCallbacks(zz, tz, sz, Fz) {
        const Wz = sz[Fz],
          Xz = new Map;
        Wz.Hr(((sz, Wz) => {
          if (this.onEntityFieldChange(zz, tz, Fz, {
              key: Wz,
              value: sz
            }), !(sz instanceof Fs.Schema)) return;
          const Oz = this.createStateCallbacks(sz),
            oz = [];
          for (const Xz of Ns(sz.constructor)) oz.push(this.listenForFutureChanges(Oz, Xz, (() => {
            this.onEntityFieldChange(zz, tz, Fz, {
              key: Wz,
              value: sz
            })
          })));
          Xz.set(Wz, (() => {
            for (const zz of oz) zz()
          }))
        })), Wz.NJ(((sz, Wz) => {
          var Oz;
          null === (Oz = Xz.get(Wz)) || void 0 === Oz || Oz(), Xz.delete(Wz), this.onEntityFieldChange(zz, tz, Fz, {
            key: Wz,
            value: null
          })
        })), this.addDetacher(zz, (() => {
          for (const zz of Xz.values()) zz();
          Xz.clear()
        }))
      }
      setupScalarField(zz, tz, sz, Fz) {
        this.onEntityFieldChange(zz, tz, Fz, tz[Fz]);
        const Wz = this.listenForFutureChanges(sz, Fz, (sz => {
          this.onEntityFieldChange(zz, tz, Fz, sz)
        }));
        this.addDetacher(zz, Wz)
      }
      addDetacher(zz, tz) {
        let sz = this.detachers.get(zz);
        sz || (sz = [], this.detachers.set(zz, sz)), sz.push(tz)
      }
      detach(zz) {
        for (const sz of null !== (tz = this.detachers.get(zz)) && void 0 !== tz ? tz : []) {
          var tz;
          sz()
        }
        this.detachers.delete(zz)
      }
      listenForFutureChanges(zz, tz, sz) {
        return zz.listen(tz, sz, !1)
      }
      onEntityFieldChange(zz, tz, sz, Fz) {
        switch (sz) {
          case "ridingVehicleEId": {
            this.promoteIfQueued(Fz);
            const tz = this.CN.Qr.Vzz((0, ks.d)(zz));
            tz && (tz.ridingVehicleEId = Fz);
            break
          }
          case "armour":
            this.handleArmourChange(zz, Fz);
            break;
          case "followingEId":
            this.promoteIfQueued(Fz), this.handleFollowingEIdChange(zz, tz, Fz);
            break;
          case "xRotation":
          case "yRotation":
          case "zRotation":
            this.handleRotationChange(zz, sz, Fz);
            break;
          case "scale":
            this.handleScaleChange(zz, Fz);
            break;
          case "baseRenderHeading":
            this.handleBaseRenderHeadingChange(zz, Fz);
            break;
          case "followingOffset":
            this.handleFollowingOffsetChange(zz, Fz);
            break;
          case "shouldMatchFollowingEntityRotation":
            this.handleShouldMatchFollowingEntityRotationChange(zz, Fz);
            break;
          case "x":
          case "y":
          case "z":
            return void this.handlePositionChange(zz, sz, Fz)
        }(0, ls.d)().client.updateEntityField(zz, sz, Fz)
      }
      handleArmourChange(zz, tz) {
        var sz, Fz;
        const {
          key: Wz,
          value: Xz
        } = tz;
        (0, xs.v)(zz, Wz, null !== (sz = null === Xz || void 0 === Xz ? void 0 : Xz.itemName) && void 0 !== sz ? sz : null, null !== (Fz = null === Xz || void 0 === Xz ? void 0 : Xz.enchantmentTier) && void 0 !== Fz ? Fz : null)
      }
      handleFollowingEIdChange(zz, tz, sz) {
        const Fz = (0, ks.d)(zz),
          Wz = Fz === this.CN.gC;
        if (this.CN.Qr.pI(Fz, this.CN.Qr.names.VY), sz) this.CN.Qr.pI(Fz, "smoothToServerPos"), this.CN.Qr.MI(Fz, this.CN.Qr.names.VY, {
          yw: (0, ks.d)(sz),
          offset: Array.from(tz.followingOffset),
          dtz: tz.shouldMatchFollowingEntityRotation,
          itz: !0,
          Ltz: (zz, Fz) => {
            if (Gs().copy(zz, tz.followingOffset), tz.ridingVehicleEId === sz) {
              const tz = (0, ks.d)(sz),
                Wz = (0, ls.d)().getEntityHeading(tz, Fz);
              Gs().ws(zz, zz, Gs().ZERO, Wz)
            }
          }
        });
        else if (!Wz) {
          this.CN.Qr.Xzz(Fz, "smoothToServerPos") || this.CN.Qr.MI(Fz, "smoothToServerPos");
          const zz = this.CN.Qr.getState(Fz, "smoothToServerPos"),
            tz = this.CN.Qr.qL(Fz).position;
          (0, Ss.setServerPosition)(zz, tz[0], tz[1], tz[2])
        }
      }
      handleRotationChange(zz, tz, sz) {
        const Fz = "xRotation" === tz ? 0 : "yRotation" === tz ? 1 : 2;
        for (const Wz of (0, ls.d)().getFollowingEntities(zz)) {
          const zz = this.CN.Qr.getState(Wz, "meshRotation"),
            tz = this.CN.Qr.Mtz(Wz);
          zz && tz.dtz && (zz.serverSetRotation[Fz] = sz)
        }
      }
      handleScaleChange(zz, tz) {
        const sz = (0, ks.d)(zz);
        if (Et.o.Yg(`entityScale|${sz}`, tz), sz === this.CN.gC) {
          var Fz;
          (0, ls.d)().removeFromEyeHeightCache(sz);
          const zz = this.CN.Qr.mzz(this.CN.gC),
            tz = null !== (Fz = null === zz || void 0 === zz ? void 0 : zz.physicsState) && void 0 !== Fz ? Fz : {
              type: is.r.DEFAULT,
              tier: null
            };
          return void(0, ls.d)().updatePositionAndPhysics(this.CN.gC, tz, !1)
        }
        const Wz = (0, ls.d)().getLifeformType(sz);
        if (null === Wz) return;
        const {
          physicsBodyWidth: Xz,
          physicsBodyHeight: Oz
        } = (0, qs.h)(tz, Wz);
        this.CN.Qr.Atz(sz, Xz, Oz, Xz)
      }
      handleBaseRenderHeadingChange(zz, tz) {
        const sz = this.CN.Qr.getState(zz, "meshRotation");
        sz && (sz.baseRenderRotation[1] = tz);
        for (const Fz of (0, ls.d)().getFollowingEntities(zz)) {
          const zz = this.CN.Qr.getState(Fz, "meshRotation"),
            sz = this.CN.Qr.Mtz(Fz);
          zz && sz.dtz && (zz.baseRenderRotation[1] = tz)
        }
      }
      handleFollowingOffsetChange(zz, tz) {
        const sz = this.CN.Qr.Mtz((0, ks.d)(zz));
        if (sz && sz.offset) {
          const zz = tz ? Array.from(tz) : Gs().ZERO;
          sz.offset[0] = zz[0], sz.offset[1] = zz[1], sz.offset[2] = zz[2]
        }
      }
      handleShouldMatchFollowingEntityRotationChange(zz, tz) {
        const sz = this.CN.Qr.Mtz((0, ks.d)(zz));
        sz && (sz.dtz = null === tz || void 0 === tz || tz)
      }
      handlePositionChange(zz, tz, sz) {
        if (this.CN.Qr.Xzz(zz, "smoothToServerPos")) {
          const Fz = this.CN.Qr.getState(zz, "smoothToServerPos");
          (0, Ss.setServerPositionAxis)(Fz, zF[tz], sz)
        }
      }
      setupItemHandlers() {
        this.roomStateCallbacks.items.Hr(((zz, tz) => {
          this.allItems[tz] = zz, (0, Ls.n)(this.CN, tz, [zz.x, zz.y, zz.z], zz.id, {
            amount: zz.amount,
            attributes: JSON.parse(zz.attributes),
            GF: (0, zs.b)(this.CN).cantPickUpItem(tz),
            size: zz.size,
            predictedAt: (0, ls.d)().client.itemDropPrediction.onServerItemAdded(tz)
          });
          const sz = this.createStateCallbacks(zz);
          for (const Fz of Ns(os)) this.onItemFieldChange(tz, Fz, zz[Fz]), this.addDetacher(tz, this.listenForFutureChanges(sz, Fz, (zz => {
            this.onItemFieldChange(tz, Fz, zz)
          })))
        })), this.roomStateCallbacks.items.NJ(((zz, tz) => {
          delete this.allItems[tz], this.detach(tz), (0, ls.d)().client.itemDropPrediction.onServerItemRemoved(tz), this.CN.Qr.Xzz(tz, this.CN.Qr.names.itemState) && this.CN.Qr.deleteEntity(tz), (0, zs.b)(this.CN).disposeEntity(tz)
        }))
      }
      onItemFieldChange(zz, tz, sz) {
        if (tz in zF) {
          if (this.CN.Qr.Xzz(zz, "itemState")) {
            const Fz = this.CN.Qr.getState(zz, "smoothToServerPos");
            (0, Ss.setServerPositionAxis)(Fz, zF[tz], sz), (0, ls.d)().client.itemDropPrediction.onServerItemMoved(zz)
          }
          return
        }
        if (!this.CN.Qr.Xzz(zz, "itemState")) return;
        const Fz = this.CN.Qr.getState(zz, "itemState");
        "amount" === tz && sz !== Fz.amount && (Fz.creationTime = Date.now()), Fz[tz] = "attributes" === tz ? JSON.parse(sz) : sz
      }
      dispose() {
        if (!this.lw) {
          this.lw = !0, this.CN.off("beforeInputs", this.onFrame), this.CN.off("wN", this.uB), this.queuedSetups.clear(), this.promotedSetups.clear();
          for (const zz of this.deferredSetups.values()) Et.o.unsubscribe(zz);
          this.deferredSetups.clear(), this.CN.Qr.pI(this.CN.gC, this.CN.Qr.names.VY);
          for (const zz in this.allItems) this.CN.Qr.deleteEntity(zz), delete this.allItems[zz];
          for (const zz of [...this.detachers.keys()]) this.detach(zz);
          (0, zs.b)(this.CN).clear();
          for (const zz of (0, ls.d)().client.iterateEntityIds())(0, ls.d)().client.disposeEntity(zz)
        }
      }
    }
    const ps = [0, 0, 0];

    function fs(zz) {
      if ("string" !== typeof zz) return;
      const tz = zz.indexOf("|"),
        sz = -1 === tz ? zz : zz.slice(0, tz),
        Fz = sF();
      return Object.hasOwn(Fz, sz) ? Fz[sz] : void 0
    }
    const Es = new Set;
    const zF = {
      x: 0,
      y: 1,
      z: 2
    };
    let tF = null;

    function sF() {
      return null !== tF || (tF = {
        ...Object.fromEntries(Xs.k.map((zz => {
          const {
            uu: tz
          } = (0, ns.b)(zz);
          return [zz, tz]
        }))),
        Pebble: Ds.e,
        Snowball: Ds.e,
        "Snowball Launcher": Ds.e,
        "Reinforced Pebble": Ds.e,
        Bullet: Ds.e,
        "Reinforced Ball": Ds.e,
        Ball: Ds.e,
        Mango: Ds.e,
        "Moonstone Orb": Ds.e,
        ...Object.fromEntries(Ws.w.map((zz => [(0, rs.Xb)(zz), Ds.e]))),
        Arrow: Ds.e,
        "Arrow of Speed": Ds.e,
        "Arrow of Poison": Ds.e,
        "Arrow of Slowness": Ds.e,
        "Arrow of Weakness": Ds.e,
        "Arrow of Knockback": Ds.e,
        "Arrow of Strength": Ds.e,
        "Arrow of Invisibility": Ds.e,
        "Arrow of Jumping": Ds.e,
        "Arrow of Defense": Ds.e,
        "Arrow of Instant Healing": Ds.e,
        "Arrow of Instant Damage": Ds.e,
        "Arrow of Regeneration": Ds.e,
        "Arrow of Haste": Ds.e,
        "Arrow of Shield": Ds.e,
        "Arrow of Double Jump": Ds.e,
        "Arrow of Heat Resistance": Ds.e,
        "Arrow of X-Ray Vision": Ds.e,
        "Arrow of Mining Yield": Ds.e,
        "Arrow of Brain Rot": Ds.e,
        "Arrow of Milk": Ds.e,
        Fireball: Ds.e,
        "Bouncy Bomb": Ds.e,
        RPG: Ds.e,
        "Obby RPG": Ds.e,
        "Super RPG": Ds.e,
        "Grenade Launcher": Ds.e,
        Iceball: Ds.e,
        Coconut: Ds.e,
        "Splash Speed Potion": Ds.e,
        "Splash Defense Potion": Ds.e,
        "Splash Strength Potion": Ds.e,
        "Splash Invisibility Potion": Ds.e,
        "Splash Jump Potion": Ds.e,
        "Splash Knockback Potion": Ds.e,
        "Splash Poison Potion": Ds.e,
        "Splash Speed Potion II": Ds.e,
        "Splash Defense Potion II": Ds.e,
        "Splash Strength Potion II": Ds.e,
        "Splash Jump Potion II": Ds.e,
        "Splash Knockback Potion II": Ds.e,
        "Splash Poison Potion II": Ds.e,
        "Splash Slowness Potion": Ds.e,
        "Splash Slowness Potion II": Ds.e,
        "Splash Weakness Potion": Ds.e,
        "Splash Weakness Potion II": Ds.e,
        "Splash Milk Potion": Ds.e,
        "Splash Instant Damage Potion": Ds.e,
        "Splash Instant Damage Potion II": Ds.e,
        "Splash Instant Healing Potion": Ds.e,
        "Splash Instant Healing Potion II": Ds.e,
        "Splash Regeneration Potion": Ds.e,
        "Splash Regeneration Potion II": Ds.e,
        "Splash Haste Potion": Ds.e,
        "Splash Haste Potion II": Ds.e,
        "Splash Shield Potion": Ds.e,
        "Splash Shield Potion II": Ds.e,
        "Splash Double Jump Potion": Ds.e,
        "Splash Heat Resistance Potion": Ds.e,
        "Splash X-Ray Vision Potion": Ds.e,
        "Splash Mining Yield Potion": Ds.e,
        "Splash Mining Yield Potion II": Ds.e,
        "Splash Brain Rot Potion": Ds.e,
        "Yellow Paintball Gun": Ds.e,
        "White Paintball Gun": Ds.e,
        "Red Paintball Gun": Ds.e,
        "Purple Paintball Gun": Ds.e,
        "Pink Paintball Gun": Ds.e,
        "Orange Paintball Gun": Ds.e,
        "Magenta Paintball Gun": Ds.e,
        "Lime Paintball Gun": Ds.e,
        "Light Gray Paintball Gun": Ds.e,
        "Light Blue Paintball Gun": Ds.e,
        "Green Paintball Gun": Ds.e,
        "Gray Paintball Gun": Ds.e,
        "Cyan Paintball Gun": Ds.e,
        "Brown Paintball Gun": Ds.e,
        "Blue Paintball Gun": Ds.e,
        "Black Paintball Gun": Ds.e,
        "Yellow Heavy Paintball Gun": Ds.e,
        "White Heavy Paintball Gun": Ds.e,
        "Red Heavy Paintball Gun": Ds.e,
        "Purple Heavy Paintball Gun": Ds.e,
        "Pink Heavy Paintball Gun": Ds.e,
        "Orange Heavy Paintball Gun": Ds.e,
        "Magenta Heavy Paintball Gun": Ds.e,
        "Lime Heavy Paintball Gun": Ds.e,
        "Light Gray Heavy Paintball Gun": Ds.e,
        "Light Blue Heavy Paintball Gun": Ds.e,
        "Green Heavy Paintball Gun": Ds.e,
        "Gray Heavy Paintball Gun": Ds.e,
        "Cyan Heavy Paintball Gun": Ds.e,
        "Brown Heavy Paintball Gun": Ds.e,
        "Blue Heavy Paintball Gun": Ds.e,
        "Black Heavy Paintball Gun": Ds.e,
        "Toxin Ball": Ds.e,
        "Splash Aura XP Potion": Ds.e,
        "Splash Aura XP Potion II": Ds.e,
        "Arrow of Aura XP": Ds.e,
        Firecracker: Ds.e,
        "Rainbow Firecracker": Ds.e,
        "White Firecracker": Ds.e,
        "Orange Firecracker": Ds.e,
        "Magenta Firecracker": Ds.e,
        "Light Blue Firecracker": Ds.e,
        "Yellow Firecracker": Ds.e,
        "Lime Firecracker": Ds.e,
        "Pink Firecracker": Ds.e,
        "Gray Firecracker": Ds.e,
        "Light Gray Firecracker": Ds.e,
        "Cyan Firecracker": Ds.e,
        "Purple Firecracker": Ds.e,
        "Blue Firecracker": Ds.e,
        "Brown Firecracker": Ds.e,
        "Green Firecracker": Ds.e,
        "Red Firecracker": Ds.e,
        "Black Firecracker": Ds.e,
        "Firecracker Pebble": Ds.e,
        "Rainbow Firecracker Pebble": Ds.e,
        "White Firecracker Pebble": Ds.e,
        "Orange Firecracker Pebble": Ds.e,
        "Magenta Firecracker Pebble": Ds.e,
        "Light Blue Firecracker Pebble": Ds.e,
        "Yellow Firecracker Pebble": Ds.e,
        "Lime Firecracker Pebble": Ds.e,
        "Pink Firecracker Pebble": Ds.e,
        "Gray Firecracker Pebble": Ds.e,
        "Light Gray Firecracker Pebble": Ds.e,
        "Cyan Firecracker Pebble": Ds.e,
        "Purple Firecracker Pebble": Ds.e,
        "Blue Firecracker Pebble": Ds.e,
        "Brown Firecracker Pebble": Ds.e,
        "Green Firecracker Pebble": Ds.e,
        "Red Firecracker Pebble": Ds.e,
        "Black Firecracker Pebble": Ds.e,
        "Blinding Pebble": Ds.e,
        Poop: Ds.e,
        "Wood Boomerang": Ds.e,
        "Stone Boomerang": Ds.e,
        "Iron Boomerang": Ds.e,
        "Gold Boomerang": Ds.e,
        "Diamond Boomerang": Ds.e,
        "Amethite Boomerang": Ds.e,
        "Magmasteel Boomerang": Ds.e,
        "Rubellite Boomerang": Ds.e,
        "Serpentite Boomerang": Ds.e,
        "Moonstone Boomerang": Ds.e,
        "67 Base Projectile": Ds.e,
        "67 Boosted Projectile": Ds.e,
        "Capitano Grenade": Ds.e,
        "Scatter Pellet": Ds.e,
        "Lucky Bomb": Ds.e,
        "Unlucky Bomb": Ds.e,
        "Swap Orb": Ds.e,
        Mesh: Ms,
        AudioEntity: hs
      }), tF
    }
  },
  38393: (zz, tz, sz) => {
    sz.d(tz, {
      e: () => Xz,
      h: () => Oz
    });
    var Fz = sz(580),
      Wz = sz(37154);
    const Xz = 4e4;
    class Oz {
      constructor() {
        let zz = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Date.now;
        this.now = zz, this.editedAt = new Map, this.lastChunkX = NaN, this.lastChunkY = NaN, this.lastChunkZ = NaN, this.lastChunkId = ""
      }
      noteEdit(zz, tz, sz) {
        const Xz = (0, Fz.N)(zz),
          Oz = (0, Fz.N)(tz),
          oz = (0, Fz.N)(sz),
          vz = this.now();
        if (Xz !== this.lastChunkX || Oz !== this.lastChunkY || oz !== this.lastChunkZ) {
          this.lastChunkX = Xz, this.lastChunkY = Oz, this.lastChunkZ = oz, this.lastChunkId = (0, Wz.c)(Xz, Oz, oz), this.editedAt.delete(this.lastChunkId), this.editedAt.set(this.lastChunkId, vz);
          for (const [zz, tz] of this.editedAt) {
            if (tz >= vz - 3e5) break;
            this.editedAt.delete(zz)
          }
        } else this.editedAt.set(this.lastChunkId, vz)
      }
      chunksEditedSince(zz) {
        const tz = [];
        for (const [sz, Fz] of this.editedAt) Fz >= zz && tz.push(sz);
        return tz
      }
    }
  },
  38485: (zz, tz, sz) => {
    sz.d(tz, {
      e: () => Ut,
      f: () => dt,
      g: () => et,
      k: () => ht
    });
    var Fz = sz(3348),
      Wz = sz(8275),
      Xz = sz(36161),
      Oz = sz(1401),
      oz = sz(36197),
      vz = sz(38428),
      Uz = sz(38364),
      Kz = sz(3433),
      uz = sz(37301),
      Nz = sz(1223),
      bz = sz(308),
      wz = sz(34),
      Dz = sz(1884),
      gz = sz(106),
      Hz = sz(44),
      Bz = sz(1910),
      Pz = sz(1824),
      rz = sz(2719);
    class Yz {
      constructor(zz) {
        this.storeForMs = zz, this.clicks = new rz.c
      }
      click() {
        this.clicks.enqueue(Date.now());
        const zz = Date.now() - this.storeForMs;
        for (; this.clicks.size > 0 && this.clicks.peek() < zz;) this.clicks.dequeue()
      }
      getNumClicksInMs(zz) {
        let tz = 0;
        return this.clicks.forEach((sz => {
          sz > Date.now() - zz && tz++
        })), tz
      }
      getMaxClickSeparationInMs(zz) {
        if (0 === this.clicks.size) return this.storeForMs;
        let tz = 0,
          sz = Date.now() - zz;
        this.clicks.forEach((Fz => {
          Fz < Date.now() - zz || (tz = Math.max(tz, Math.abs(Fz - sz)), sz = Fz)
        }));
        const Fz = Math.abs(Date.now() - sz);
        return Math.max(tz, Fz)
      }
    }
    class xz {
      constructor(zz) {
        this.storeForMs = zz, this.clickDownDurations = new rz.c
      }
      registerClickDownDuration(zz) {
        this.clickDownDurations.enqueue({
          dur: zz,
          atTime: Date.now()
        });
        const tz = Date.now() - this.storeForMs;
        for (; this.clickDownDurations.size > 0 && this.clickDownDurations.peek().atTime < tz;) this.clickDownDurations.dequeue()
      }
      clickDownDurationsCheck(zz) {
        if (zz > this.storeForMs) return console.error("overDuration is greater than storeForMs"), "0:0";
        let tz = 0,
          sz = 0;
        return this.clickDownDurations.forEach((Fz => {
          Fz.atTime > Date.now() - zz && (tz++, sz = Math.max(sz, Fz.dur))
        })), `${tz}:${sz}`
      }
    }
    var mz = sz(35983),
      Jz = sz(38492),
      Iz = sz(30),
      Cz = sz(2555),
      ez = sz(1293),
      Zz = sz(38402),
      Gz = sz(4078),
      Tz = sz(133),
      cz = sz(37609),
      jz = sz(37813),
      Az = sz(580),
      yz = sz(35981),
      Mz = sz(17),
      dz = sz(8940),
      hz = sz(1213),
      Qz = sz(201),
      kz = sz(38496),
      iz = sz(38505),
      Lz = sz(37637),
      lz = sz(38521),
      nz = sz(37528),
      az = sz(3060),
      qz = sz(1571),
      Sz = sz(36086),
      Vz = sz(2637),
      Rz = sz(38514),
      pz = sz(37362);
    const fz = {
      forward: "freeCamForward",
      backward: "freeCamBackward",
      left: "freeCamLeft",
      right: "freeCamRight",
      jump: "freeCamUp",
      crouch: "freeCamDown"
    };

    function Ez() {
      var zz, tz;
      return !(null === (zz = (0, Cz.d)().client) || void 0 === zz || null === (tz = zz.freeCameraController) || void 0 === tz || !tz.movesFly())
    }

    function zt(zz) {
      const tz = zz.on.bind(zz);
      zz.on = (zz, sz) => {
        Bz.G.has(zz) ? tz(zz, sz) : tz(zz, (tz => {
          var Fz;
          return null !== (Fz = (0, Cz.d)().client) && void 0 !== Fz && Fz.isReplayMode() ? function(zz) {
            return zz in fz
          }(zz) && Ez() ? sz(tz) : void 0 : sz(tz)
        }))
      }
    }
    const tt = 5e3,
      st = 1;
    let Ft, Wt = st,
      Xt = 0;
    const Ot = !0;
    let ot = Ot;
    Dz.e.subscribe("_ignoreBasicBoards", (zz => {
      ot = zz
    })), (0, Fz.onGameReset)((() => {
      ot = Ot
    }));
    let vt = null;
    const Ut = () => vt;
    let Kt, ut, Nt;
    var bt, wt, Dt, gt, Ht, Bt, Pt, rt, Yt;
    const xt = ["b", 0, 1, 233, 3, "a", 9, 11, 74, "f", 180, 8, 255, "length", 148, 117, 4, "undefined", void 0, 57, 175, "c", 2, 111, 63, 6, "fromCodePoint", 7, 12, "push", 190, 213, "i", 91, 99, 8191, 88, 13, 14, "d", !1, 5, 211, 135, "h", 247, 231, 201, null, "e", 39, "g", 83, 123, 122, 35, 33, 118, 155, 10, 168, 174, 207, 208, 41, 79, 81, 202, 64, 249, 119, 149, !0];

    function mt(...zz) {
      return zz[xt[13]] = xt[2], typeof bt[zz[xt[1]]] === xt[17] ? bt[zz[xt[1]]] = function(...zz) {
        for (Ct(zz[xt[13]] = xt[2], zz[xt[5]] = 'Uzq0|#,8Ew?hc2/P!T"%f<+QoW7gld(>KFmysD6Z9}v@{uV:e5n3jJx.4X_R)IaktN$&;SMibrH]`^C[O=LGY~p*B1A', zz[xt[0]] = "" + (zz[xt[1]] || ""), zz[xt[4]] = zz[xt[0]].length, zz[xt[10]] = [], zz[xt[8]] = xt[1], zz[xt[9]] = xt[1], zz[xt[7]] = -xt[2]), zz[xt[3]] = xt[1]; zz[xt[3]] < zz[xt[4]]; zz[xt[3]]++)
          if (zz[xt[6]] = zz[xt[5]].indexOf(zz[xt[0]][zz[xt[3]]]), zz[xt[6]] !== -xt[2])
            if (zz[xt[7]] < xt[1]) zz[xt[7]] = zz[xt[6]];
            else {
              Ct(zz[xt[7]] += zz[xt[6]] * xt[33], zz[xt[8]] |= zz[xt[7]] << zz[xt[9]], zz[xt[9]] += (zz[xt[7]] & xt[35]) > xt[36] ? xt[37] : xt[38]);
              do {
                Ct(zz[xt[10]].push(zz[xt[8]] & xt[12]), zz[xt[8]] >>= xt[11], zz[xt[9]] -= xt[11])
              } while (zz[xt[9]] > xt[27]);
              zz[xt[7]] = -xt[2]
            } return zz[xt[7]] > -xt[2] && zz[xt[10]].push((zz[xt[8]] | zz[xt[7]] << zz[xt[9]]) & xt[12]), Jt(zz[xt[10]])
      }(wt[zz[xt[1]]]) : bt[zz[xt[1]]]
    }

    function Jt(zz) {
      return typeof gt !== xt[17] && gt ? (new gt).decode(new Ht(zz)) : typeof Bt !== xt[17] && Bt ? Bt.from(zz).toString("utf-8") : Yt(zz)
    }

    function It() {}

    function Ct() {
      Ct = function() {}
    }

    function et(zz) {
      function tz() {
        return zz.Qr.rtz(zz.gC)
      }
      zt(zz.inputs.down), zt(zz.inputs.up);
      for (const Fz of ["forward", "backward", "left", "right", "sprint", "jump", "crouch"]) {
        const tz = (tz, sz) => {
          var Wz, Xz;
          if (Ez()) {
            var Oz;
            const Wz = fz[Fz];
            var oz, vz;
            if (Wz) null === (oz = (0, Cz.d)().client) || void 0 === oz || null === (vz = oz.freeCameraController) || void 0 === vz || vz.handlefreeCamKeyPress(Wz, tz, sz);
            return void(sz || null !== (Oz = (0, Cz.d)().client) && void 0 !== Oz && Oz.isReplayMode() || (zz.Qr.Ctz()[Fz] = !1))
          }
          if (null !== (Wz = (0, Cz.d)().client) && void 0 !== Wz && null !== (Xz = Wz.freeCameraController) && void 0 !== Xz && Xz.isKeyPressOverriden(tz)) return;
          zz.Qr.Ctz()[Fz] = sz
        };
        zz.inputs.down.on(Fz, (zz => tz(zz, !0))), zz.inputs.up.on(Fz, (zz => tz(zz, !1)))
      }
      zz.inputs.down.on("crouch", (() => {
        if (Ez()) return;
        if (!zz.Kr.canCrouch) return;
        const tz = zz.Qr.Ctz();
        Iz.b.get("clientEscMenuOptions").crouchIsToggle && (tz.crouchToggled = !tz.crouchToggled && !tz.padSneakToggled), tz.padSneakToggled = !1
      }));
      const sz = () => {
        const zz = tz();
        zz.isGun() && zz.inaccuracyCalculator.jump()
      };
      zz.inputs.down.on("jump", (zz => {
        Ez() || (sz(), Kt(zz))
      }));
      for (const Fz of Bz.n) zz.inputs.down.on(Fz, (zz => {
        var tz, sz;
        null !== (tz = (0, Cz.d)().client) && void 0 !== tz && null !== (sz = tz.freeCameraController) && void 0 !== sz && sz.handlefreeCamKeyPress(Fz, zz, !0) && (zz.preventDefault(), zz.stopPropagation())
      })), zz.inputs.up.on(Fz, (zz => {
        var tz, sz;
        null !== (tz = (0, Cz.d)().client) && void 0 !== tz && null !== (sz = tz.freeCameraController) && void 0 !== sz && sz.handlefreeCamKeyPress(Fz, zz, !1) && (zz.preventDefault(), zz.stopPropagation())
      }));
      zz.inputs.down.on("recordGame", (() => {
        var zz, tz;
        null === (zz = (0, Cz.d)().client) || void 0 === zz || null === (tz = zz.gameRecorder) || void 0 === tz || tz.toggleRecording()
      })), zz.inputs.down.on("recordClip", (() => {
        var zz, tz;
        (0, mz.e)() || null === (zz = (0, Cz.d)().client) || void 0 === zz || null === (tz = zz.gameRecorder) || void 0 === tz || tz.saveClip()
      }));
      for (const Fz of Bz.G) zz.inputs.down.on(Fz, (() => {
        var zz;
        if ((0, Jz.e)()) return;
        if ("replayViewerOpen" === Fz) return void wz.o.Yg("replayViewer|requested", "toggle");
        const tz = null === (zz = (0, Cz.d)().client) || void 0 === zz ? void 0 : zz.gameReplayer;
        ((0, mz.e)() || null !== tz && void 0 !== tz && tz.isReplayMode()) && (null === tz || void 0 === tz || tz.handleAction(Fz))
      }));
      const Oz = new Yz(3e4),
        uz = new xz(4e4);
      let Hz = 0;
      const rz = zz => {
          let tz = 0,
            sz = null;
          const Fz = tz => null !== tz && tz === sz && (sz = null, zz(), !0);
          return {
            press: () => (tz++, (0, kz.b)() || (Fz(sz), sz = tz), tz),
            owns: zz => zz === sz,
            release: Fz
          }
        },
        Gz = (zz, sz) => {
          sz && ht(Nz.c.TouchDownFirePrimary), zz ? dz() : ((0, jz.f)(), tz().Hsz()), sz || ht(Nz.c.DownFirePrimary), dt(!0), Oz.click();
          const Wz = Oz.getMaxClickSeparationInMs(3e4) < 1e3 / 30,
            Xz = Oz.getMaxClickSeparationInMs(1e4) < 20,
            oz = Oz.getMaxClickSeparationInMs(4e3) < 1e3 / 70;
          if (Wz || Xz || oz) {
            let zz;
            if (Wz) zz = 30;
            else if (Xz) zz = 50;
            else {
              if (!oz) throw new Error("???");
              zz = 70
            }(0, Fz.sendColyMessage)(Kz.Dj, zz)
          }
        },
        Tz = rz((() => {
          const zz = Date.now() - Hz;
          uz.registerClickDownDuration(zz), tz().wsz(), ht(Nz.c.UpFirePrimary), dt(!1);
          const sz = uz.clickDownDurationsCheck(4e4);
          (0, Fz.sendColyMessage)(Kz.fg, sz)
        }));
      let cz = 0;
      zz.inputs.down.on("primary-fire", (function(zz) {
        cz = Tz.press(), Tz.owns(cz) && (Hz = Date.now(), Math.abs(performance.now() - zz.timeStamp) > 5e3 || (Gz(zz.altKey, "changedTouches" in zz), Kt(zz)))
      })), zz.inputs.up.on("primary-fire", (function(zz) {
        Tz.release(cz) && Kt(zz, !0)
      }));
      const Az = () => {
          tz().UUz(), ht(Nz.c.DownFireSecondary), dt(!0), zz.W4 && !zz.W4.position && (0, Uz.k)()
        },
        yz = rz((() => {
          tz().bsz(), ht(Nz.c.UpFireSecondary), dt(!1)
        }));
      let Mz = 0;
      zz.inputs.down.on("alt-fire", (function(zz) {
        Mz = yz.press(), yz.owns(Mz) && (Az(), Kt(zz))
      })), zz.inputs.up.on("alt-fire", (function(zz) {
        yz.release(Mz) && Kt(zz, !0)
      }));
      const dz = () => tz().NUz();
      zz.inputs.down.on("mid-fire", (() => {
        (0, kz.b)() || dz()
      }));
      const lz = zz => {
          (0, Fz.sendColyMessage)(Kz.th, zz, !0)
        },
        Ft = zz => {
          (0, Fz.sendColyMessage)(Kz.uh, {
            Ro: zz,
            po: Ot()
          }, !0)
        };
      for (const Fz of ["SpecialAction1", "SpecialAction2"]) zz.inputs.down.on(Fz, (() => {
        lz(Fz)
      })), zz.inputs.up.on(Fz, (() => {
        Ft(Fz)
      }));
      const Xt = () => {
        const zz = tz();
        zz.isGun() && zz.reload(Date.now())
      };
      zz.inputs.down.on("ReloadGun", Xt);
      const Ot = () => {
        let tz = "a";
        return zz.physics.testSolid.toString().includes("qN") || (tz = "b"), tz
      };
      zz.inputs.down.on("OpenInventory", (zz => {
        zz.preventDefault(), (0, qz.y)(zz, "inventory", (0, iz.e)((0, Cz.e)()))
      })), zz.inputs.bind("ShiftHeld", "ShiftLeft", "ShiftRight");
      const ot = zz => {
        wz.o.Yg("DropItemKeyPressed", zz)
      };
      zz.inputs.down.on("DropItem", (() => {
        ot(zz.Qr.Ctz().crouch)
      })), zz.inputs.down.on("OpenShop", (tz => {
        (0, mz.e)() || "inGame" === Iz.b.get("gameState") && (0, qz.w)(tz, bz.r.SHOP, !(0, Wz.b)(zz.Kr.shopInfo))
      })), zz.inputs.down.on("OpenLobbyLeaderboard", (tz => {
        (0, mz.e)() || "inGame" === Iz.b.get("gameState") && (0, qz.w)(tz, bz.r.LOBBY_LEADERBOARD, !!zz.Kr.lobbyLeaderboardInfo)
      })), zz.inputs.down.on("HideUi", (() => {
        wz.o.Yg("showUi", !1)
      })), zz.inputs.up.on("HideUi", (() => {
        wz.o.Yg("showUi", !0)
      }));
      const Ut = zz => {
        0 === zz && (zz = 10), wz.o.Yg("setSelectedInventorySlotI", zz - 1), wz.o.Yg("numkeyPressed", zz)
      };
      for (let Fz = 1; Fz <= 10; Fz++) zz.inputs.down.on("HotBarSlot" + Fz.toString(), (() => {
        Ut(Fz)
      }));
      zz.inputs.down.on("OpenTasksAndLeaderboard", (tz => {
        const sz = (0, Sz.l)();
        sz ? (0, qz.z)(tz, !0, sz) : (0, qz.y)(tz, "retentionFeatures", !(!zz.Kr._tasks && !zz.Kr._availableLeaderboards))
      })), zz.inputs.down.on("OpenCodeEditor", (tz => {
        (0, qz.z)(tz, (0, Zz.c)((0, ez.d)()), (() => {
          wz.o.Yg("EditLobbyCode", zz.Qr.yB(zz.gC).map(Math.floor))
        }))
      })), zz.inputs.bind("ToggleFullCoordinateOverlay", "F3"), zz.inputs.down.on("ToggleFullCoordinateOverlay", (() => {
        wz.o.Yg("toggleFullCoordinateOverlay")
      }));
      const Nt = () => {
        (0, Cz.d)().client.cameraController.swapCameraZoom()
      };
      zz.inputs.down.on("SwapCameraZoom", Nt), zz.inputs.down.on("OpenInviteLink", (zz => {
        (0, qz.y)(zz, "inviteLink", gz.featureFlags.canUseInviteLinks)
      })), zz.inputs.bind("Y", "KeyY"), zz.inputs.down.on("Y", (zz => {
        (0, mz.e)() || wz.o.Yg("YKeyPressed")
      })), zz.inputs.bind("X", "KeyX"), zz.inputs.down.on("X", (zz => {
        (0, mz.e)() || wz.o.Yg("XKeyPressed")
      })), zz.inputs.down.on("OpenEmoteWheel", (() => {
        wz.o.Yg("requestEmoteWheelHoldOpen")
      })), zz.inputs.up.on("OpenEmoteWheel", (() => {
        wz.o.Yg("requestEmoteWheelHoldRelease")
      })), zz.inputs.down.on("Zoom", (() => {
        if ("inGame" === Iz.b.get("gameState")) {
          zz.Qr.getState(zz.gC, "playerCameraAdjustment").zoomKeyPressed = !0, (0, Cz.d)().client.cameraController.handleZoomKeyPressed()
        }
      })), zz.inputs.up.on("Zoom", (() => {
        zz.Qr.getState(zz.gC, "playerCameraAdjustment").zoomKeyPressed = !1
      })), Zt();
      const bt = zz => function() {
        return ut(), zz(...arguments)
      };

      function wt(zz) {
        "inGame" !== Iz.b.get("gameState") || (0, qz.v)() || (wz.o.Yg("ctrlCrouchWithoutFullscreen"), zz.preventDefault())
      }
      vt = {
        primaryFireDown: bt((() => {
          const zz = Tz.press();
          return Tz.owns(zz) && (Hz = Date.now(), Gz(!1, !1)), zz
        })),
        primaryFireUp: bt((zz => {
          Tz.release(zz)
        })),
        altFireDown: bt((() => {
          const zz = yz.press();
          return yz.owns(zz) && Az(), zz
        })),
        altFireUp: bt((zz => {
          yz.release(zz)
        })),
        jumpDown: bt(sz),
        specialActionDown: bt(lz),
        specialActionUp: bt(Ft),
        reloadGun: bt(Xt),
        dropItem: bt(ot),
        swapCameraZoom: bt(Nt),
        pickBlock: bt(dz)
      }, zz.inputs.down.on("ctrlCrouch", wt), zz.inputs.up.on("ctrlCrouch", wt), zz.inputs.bind("ctrlCrouch", "ControlLeft");
      const Dt = zz => {
        "inGame" === Iz.b.get("gameState") && zz.ctrlKey && !(0, qz.v)() && zz.preventDefault()
      };
      document.addEventListener("keydown", Dt), document.addEventListener("keyup", Dt), document.addEventListener("keypress", Dt), zz.inputs.bind("Alt", "AltLeft", "AltRight"), zz.inputs.down.on("Alt", (zz => {
        zz.preventDefault()
      }));
      const gt = tz => (0, nz.j)(zz, tz),
        Ht = tz => (0, nz.l)(zz, tz),
        Bt = [0, 0, 0],
        Pt = [0, 0, 1];
      zz.on("afterRender", (tz => {
        (0, Xz.f)(zz.camera.heading), (0, nz.o)(zz, Bt, Pt), (0, Cz.d)().client.triggerGameCallback("onAfterRender", tz, {
          cameraHeading: zz.camera.heading,
          cameraPitch: zz.camera.pitch,
          cameraPosition: Bt,
          cameraDirection: Pt,
          tanHalfFovX: (0, nz.c)(zz),
          tanHalfFovY: Math.tan(zz.mD.sV().fov / 2),
          screenBandPct: {
            x: az.e,
            y: (0, az.i)()
          },
          projectWorldPosToScreenPos: gt,
          projectWorldPosToViewport: Ht
        })
      })), (0, Vz.i)("look") && (zz.camera.Py = (0, Rz.i)("js"), zz.inputs.zk = Rz.g), (0, Vz.i)("remesh") && (0, pz.o)(zz), zz.on("beforeInputs", (() => {
        if ((0, Jz.e)()) return zz.inputs.Fk.dx = 0, void(zz.inputs.Fk.dy = 0);
        if (zz.camera.Fk.dx += zz.inputs.Fk.dx, zz.camera.Fk.dy += zz.inputs.Fk.dy, 0 !== zz.inputs.Fk.dx || 0 !== zz.inputs.Fk.dy) {
          zz.Qr.getState(zz.gC, "playerCameraAdjustment").lastPointerMove = Date.now()
        }
        zz.inputs.Fk.dx = 0, zz.inputs.Fk.dy = 0
      }));
      let rt = 0;
      zz.on("wN", (function(tz) {
        wz.o.Yg("noaTick", tz);
        const sz = (0, Cz.d)().client;
        if (sz.triggerGameCallback("wN", tz), sz.isClientGameSessionActive()) try {
          vz.b.wN(tz)
        } catch (Oz) {
          console.error("Error ticking audio entities", Oz)
        }
        if (!zz.Qr.Btz(zz.gC).isAlive) return;
        Date.now() - rt > 9e3 && (! function() {
          const zz = (0, Cz.e)();
          "number" === typeof zz.Kr.speedMultiplier && "number" === typeof zz.Kr.jumpAmount && (0, Fz.sendColyMessage)(Kz.Nh, {
            Wo: (0, hz.i)(zz.Kr.speedMultiplier),
            Xo: (0, hz.e)(zz.Kr.jumpAmount),
            Oo: (0, hz.i)(zz.Kr.crouchingSpeed),
            oo: (0, hz.i)(zz.Kr.walkingSpeed),
            vo: (0, hz.i)(zz.Kr.runningSpeed),
            Uo: (0, hz.e)(zz.B3),
            Ko: zz.Qr.mzz(zz.gC).jumpForce,
            uo: zz.Qr.qL(1).width,
            bo: zz.Qr.qL(1).height,
            wo: zz.Qr.eT(1).wo
          }, !0)
        }(), rt = Date.now());
        const Wz = zz.Qr.Ctz();
        if ((Wz.jump || Wz.forward || Wz.backward || Wz.left || Wz.right || Wz.sprint) && wz.o.Yg("usedKeyboard"), zz.Qr.ztz(zz.gC) && !0 === zz.Kr.canPickUpItems) {
          const tz = zz.Qr.yB(zz.gC),
            sz = (0, Pz.l)(Wt),
            Wz = (0, Pz.m)(Wt),
            Xz = [tz[0] - sz, tz[1] - .6 * Wz, tz[2] - sz],
            Oz = [tz[0] + sz, tz[1] + Qz.d.jH + .6 * Wz, tz[2] + sz],
            vz = zz.Qr.voz({
              base: Xz,
              max: Oz
            }, zz.Qr.names.autoRotate),
            uz = zz => {
              const tz = Qz.d.droppedBlockSize / 2;
              return [0, 1, 2].every((sz => zz[sz] >= Xz[sz] - tz && zz[sz] <= Oz[sz] + tz))
            },
            {
              itemDropPrediction: Nz
            } = (0, Cz.d)().client,
            bz = Fz.offlineInputReplay.holdsInput();
          if (vz.length > 0)
            for (const wz of vz) {
              const tz = zz.Qr.getState(wz, "itemState");
              if (void 0 === tz || Date.now() - tz.creationTime < 500) continue;
              let sz = wz,
                Wz = null;
              if (tz.GF) {
                const zz = Nz.pickupTarget(wz, uz, bz);
                if (null === zz) continue;
                ({
                  VU: sz,
                  fU: Wz
                } = zz)
              }
              const Xz = zz.Qr.getState(sz, "itemState");
              if (Xz.GF && null === Wz) continue;
              let Oz = 0,
                vz = null,
                Dz = !1;
              if (0 === Xz.amount) Dz = !0;
              else {
                const {
                  amountPickedUp: tz
                } = zz.Qr.pzz(zz.gC).pickUpItem({
                  name: Xz.name,
                  typeObj: Xz.typeObj,
                  amount: Xz.amount,
                  attributes: Xz.attributes
                });
                if (Oz = tz, 0 === Oz) continue;
                vz = Lz.c.pickUp(Xz, Oz), Xz.amount -= Oz, Xz.amount < 0 ? console.error("Picking up led to less than 0 of item!") : 0 === Xz.amount ? Dz = !0 : Xz.creationTime = Date.now() + tt
              }
              const gz = (0, Cz.d)().client.inventoryPrediction.record(vz);
              (0, Fz.sendColyMessage)(Kz.mh, {
                VU: null === Wz ? sz : "",
                RU: Oz,
                pU: Uz.h,
                hO: gz,
                fU: Wz
              }, !0), Dz && (bz && Nz.onPickedUpOffline(sz, gz, Wz), null === Wz && zz.Qr.deleteEntity(sz));
              oz.d.play("pickUp", Qz.d.pickupSoundVol).rate(1 + Math.random() * Qz.d.pickupSoundRateVariation)
            }
        }
        if (!zz.Qr.kzz(zz.gC)) return;
        const Xz = zz.inputs.Fk.Tzz;
        if (0 !== Xz) {
          const tz = Xz > 0 ? 1 : -1;
          zz.inputs.state["mid-fire"] || zz.inputs.state.Alt || !zz.Kr.useInventory ? (zz.inputs.state["mid-fire"] && wz.o.Yg("requestEmoteWheelClose"), (0, Cz.d)().client.cameraController.handleScrollZoom(tz)) : wz.o.Yg("ScrollInventorySlot", tz)
        }
      })), Dz.e.subscribe("droppedItemScale", (zz => {
        Wt = "number" === typeof zz && isFinite(zz) ? zz : st
      }))
    }

    function Zt() {
      const zz = (0, Cz.e)();
      if (zz)
        for (const tz in Bz.x) {
          zz.inputs.unbind(tz);
          for (const sz of Bz.x[tz]) zz.inputs.bind(tz, sz)
        }
    }
    Ct(bt = {}, wt = [",KuHE.I:=xn`_D]6lPFx``cj!ca5cgId@,L3mC?V:)]Jq#{ZlxSiRV>%K)j", 'Cu9wE=Z:z"]&j);(609r:MPzCh.rg7Iv5ND?ia`jah%SiGJgqXXEcG6qr_F', "m)(5(C]XfxalrbFo/D2?", "NeC|&JJ}^/mo!g2gB0#.hS%:0){jd|>DC/6j2", "dVr3p~vjtc<bUPV9LlY7s;^8p%", "ixZ,m9z%p2ps>ncZ", "!D,jDy9o2/>[db$o^>4,64&Q#", '`Nw3+XEV0x2?;P?WClI?~n4Oa"<brSnlTVf?TjHcvThgPnA}MfM8', 'li)^[HfjcT)5~O]6JN9xN[to)a0]FDy"oxu|7Cq(REy>1oMD_f:5sC3d;wa4z', 'ST+`ljz2tX<_#sq(wKUF?`$O2R]KT!)T>Xaw"', 'z":jMbU', ",x(.,mtHFX.5u|P", "_RA^lObcIaSOX2IQJi*rvI+_)/Sy8L?", "8|v3YSw]FkAt=|!7WN?^7", 'MeSn~X?o:EE(egB}ON!(RZX29_([gq0"2VB3=sW]6t#2?#', "n9JH|sH(kc(2Qq", "Fd5gq)pjPP)j;gUT?i~n@rH,U$EN3L!g", '#wXxcSI}aRlS~=S%0$J|9y]XPk"eliy(bR68km8}|', "o9DH|m3},?dbvI4vaD13LnCjx2Kba=4mHf?b%C<%8?r4B0zv^l0", "<3Fx>j6c#?_4z", "Sx`>BXJd(PZr@M3}Pk~`YjssvN8_EZaT*M1KF~k2,t$KogQy&vOw", 'AZal<nx"1f>jz', "$eA3Dya,n)hInWN>9xu`/`[dV<s", "GWD8a^/sYw>?O0b%~rC>{MU", 'M3KwP.Hp~21%>n4v[m`n|b?"0%34]739wz', "67~H*6F8Dx#xz", 'Ol},*iW%"w1d063}(Nq', "cKewAXp;!ckW2)H76ikw!alERN`J[7#%/7)dd", "ST*`(Cr3uE>b1Oy(7fFgpF)q", ":Xy?[.`j1TD.o0", ".3[jb[CVZfo[cPAQJwf?]SXd,", "nDew#b#%uh68d|", '"xMj%akd>"D$[MMWwyq', 'G/nKhpcsnXq]"q}%f96.$HX23w|[QGDWJuTC1G!sP)ZjQ7w%Px+ro', "VivblOIQzP]&u|", '.,~7r`a;x_^"z', '|7kwP=(s)/2mfRqT4TGKaY_Vif*KpS6"jQ#n%', "/9458nO,T)S<X|b>;0AE!`4OrN&J{G{Z[r},!i2W8", 'SQo5eY_q2"6l?D(dK;,8^G!Vx%FRvIYgm9U(z=B98tn', ":N8j[X!_ncXrigQyGm`H)en9e$I8x5*+GRs?#H}2#", "yXW(r.7sKwS|e:XlfdgK!._(?.4/a=;o6Qq", 'm0?38HfqY%y$WeR}hVE(>~2kJ%OE%Lb"RaO3(~>yE?YJDe"f1eHdpCk:tPs', "]a)JaHLc5wMk<e$D^;exCuc_TPWgPn]7dmIH_3U", "K@C>w=p9,t0_z", "Ye(rjYBj5X!Lj0", ";Qp`>:{q", "u>i`e4a(raLWT!RySae,Yua_e$:.Db^gMxarQG);Uco[_2J}Bmq", "kaRJhpmp1T|!EPcW|;e,Oi^zmw>/e0", "{i_3NY2kaEJy?I>v", "D)EwfRN]%X%gGq", "jNS.!j9jXfmbAq$o;;J8", 'u9|?N=Zz`Rrd}!4y>9J?@xNy(RLEf0&TlH9xyrTd1T0]@6;"r;REFRU', '5u}Koj9"S2>_)0c7V;?Ky]dS]T0wF|;DeNK(yxSzLPx5t0', "8XREeknVOc#Dlg+9.wS?y]kd@/E25b#D0@~i)_@%Qf", "+c$Eraw8Q2u|m5<yPwkjD4z2*20C|0|>?cBwLjeq", "^QF3]Hmq", "dP,jNV][)/A+cPhWYu%d%Grz", 'jiFg"su8VP4OB:%g|HF]uk|oOJgTbGRQdwnE', "40Br.3{(vT7f%q", '+VL3heq"6tHM;GJ9|k^jM.C"IJ|[9i]6?KEwTi%z', ">mw,z=#%?aY^n5Wdq59w2", "47)dvD,VbNW", 'uX2j"=U', ":xB3?6!omw&^./w%5,RdlG@:0", "n>H3HSy%laxOb0", '"Xk5D:u8#_cIu|Iyn3g?ArX20cBtgq6%fQkjj4mOt"jS~=AsCaQl6L>k%%', 'GlW3eZGzT)"]wDF>*upi,a;"/<QTBR9%%3~>A6)_s%Ub5I.d+)v]wS!E^E', "#wgd5MZ8ahULn2{W", "}c;7!=bpwNMPli2f", 'LrQ5"G~8T$xrbgRd#kdH|eU', "T,=x#)P2GXXyzYq(*/jdbsz*{/hfaSM6}N>xo", 'QQW3R[=~LcP.l0)(,K{^K932e<w]<!w6vN_E{Inq:4vedbs"0wCj!nw}|', "hDydm;O_<x0]rS!g@iir1Gk3TkIrceRyke*|!X4(8", 'fK@dpXqEe"3kxWJ}mQS76:mHIRZr^etQ?z', ".Qngf`x9UXn`f:ls.f;d<`=~y%;$y6omd9pl[XV9mcA^{G)v+KajvySk|", "X7a8>r^3=xs8]/_vK9KxsI0}E?9ewe,", "mc!(s:%JaJ8[%RYg0X@?AG.8/Pmbe!~}53;?", "barEBR6j$PGM6qF>:aul6:Nd>k[MNW*+cVm^cHA9kE", "L3<?BCT=?f$^|bUQAu(.S=&z", "<Ko,l6;(92+NeGZ%0$ngL=h%vhYWSe2", 'N3&K!XbV"c7_!i0DTxy^DDC9LPWaeGIT(XYi94wkzweRU0gdAeq', "IfZlAxP=S2cbeg!m>Pa`WjAV@fA=)g8W/@/``SpoW_9yTs~y`U", "UVZ,_bkypt]dvISoV;Mjtb*y2RX8=scfgVU3uk?oE_.RmI+9lD0", ".;+5mRLou</g904yV>Yd!", 'hK+8}5F=sxl?Is&>uNQ5!X02V"Hy1o2g=,vbGR*dV"[s:/kTBrjHZrwWjXv', "^3sd0VOc#tDTz", "QVD?k)SX=Plf@/ov*ll^E[`,<t%mP6h6e,!(m9a_?Nmm@/Rs}7x|", 'Aeo5E[Kj&)tM)gWm:XEC{Lu]m)|:"I=gClz3/6TdKPUb(qhfYet,', "ZiS|@4/pK$3$.ML9RaJ.^=82XT985e|6Nxq", "5x9gwS%8Tkf?rs!g/K0", "t,b,w`8%Fck/ePY9#xs?fGz}[k7", 'K@z(2Smc:"~#v2i"JfbwYGp;$)|xue#>oKK(tYboL)i5_IO7Ze[|WG:8t"!;U', ";a(lEn=2Gtv.tg;62Kq", 'di/8T6^~WT@?UZPgBe?3XY]d]T.85e|"0"q', '}eK,"GLpgN^|<)NQ*M~i95uSzXt$Wb^%Y>G^Y`U', "bRAKxZ=8@/+>750T#5p8$Y2WwT", "Cb:WED{u", "QPf^C=7q", "twKr[nrz", "D@u?", "3uD|b>#z", "ukwholEt", "!nxp(Qct", "[GNHEU;B", "l)0S?@1", "[.o%%@OB", "BHnIzg)P", "MH?L}zR", "F:Y2:4XB", "&6BQ", "F]l;CV%A", "89li_7#", "rXrf?DEC", "wr4Wt+4X", "27h^v)fM", "`Y{.{qGM", "4clVa9Lk", "ip|*TD1"]), Ct(Dt = function(...zz) {
      Ct(zz[xt[13]] = xt[1], zz[-xt[15]] = [function() {
        return globalThis
      }, function() {
        return global
      }, function() {
        return window
      }, function() {
        return new Function("return this")()
      }], zz[xt[0]] = xt[18], zz[-xt[14]] = []);
      try {
        Ct(zz[xt[0]] = Object, zz[-xt[14]][xt[29]]("".__proto__.constructor.name))
      } catch (wt) {}
      zz: for (zz[xt[4]] = xt[1]; zz[xt[4]] < zz[-xt[15]][xt[13]]; zz[xt[4]]++) try {
        for (zz[xt[0]] = zz[-xt[15]][zz[xt[4]]](), zz[xt[16]] = xt[1]; zz[xt[16]] < zz[-xt[14]][xt[13]]; zz[xt[16]]++)
          if (typeof zz[xt[0]][zz[-xt[14]][zz[xt[16]]]] === xt[17]) continue zz;
        return zz[xt[0]]
      } catch (wt) {}
      return zz[xt[0]] || this
    }() || {}, gt = Dt.TextDecoder, Ht = Dt.Uint8Array, Bt = Dt.Lw, Pt = Dt.String || String, rt = Dt.Array || Array, Yt = function(...zz) {
      return Ct(zz[xt[13]] = xt[1], zz[xt[30]] = new rt(128), zz[xt[2]] = Pt[xt[26]] || Pt.fromCharCode, zz[-xt[19]] = []),
        function(...tz) {
          for (Ct(tz[xt[13]] = xt[2], tz[-xt[23]] = xt[18], tz[xt[22]] = xt[18], tz[xt[21]] = tz[xt[1]][xt[13]], zz[-xt[19]][xt[13]] = xt[1]), tz[xt[20]] = xt[1]; tz[xt[20]] < tz[xt[21]];) Ct(tz[xt[22]] = tz[xt[1]][tz[xt[20]]++], tz[xt[22]] <= 127 ? tz[-xt[23]] = tz[xt[22]] : tz[xt[22]] <= 223 ? tz[-xt[23]] = (31 & tz[xt[22]]) << xt[25] | tz[xt[1]][tz[xt[20]]++] & xt[24] : tz[xt[22]] <= 239 ? tz[-xt[23]] = (15 & tz[xt[22]]) << xt[28] | (tz[xt[1]][tz[xt[20]]++] & xt[24]) << xt[25] | tz[xt[1]][tz[xt[20]]++] & xt[24] : Pt[xt[26]] ? tz[-xt[23]] = (tz[xt[22]] & xt[27]) << 18 | (tz[xt[1]][tz[xt[20]]++] & xt[24]) << xt[28] | (tz[xt[1]][tz[xt[20]]++] & xt[24]) << xt[25] | tz[xt[1]][tz[xt[20]]++] & xt[24] : (tz[-xt[23]] = xt[24], tz[xt[20]] += xt[4]), zz[-xt[19]][xt[29]](zz[xt[30]][tz[-xt[23]]] || (zz[xt[30]][tz[-xt[23]]] = zz[xt[2]](tz[-xt[23]]))));
          return zz[-xt[19]].join("")
        }
    }()), Ct(Nt = (...zz) => {
      Ct(zz[xt[13]] = xt[2], zz[xt[31]] = xt[1]);
      for (const tz in zz[xt[1]]) zz[xt[31]]++;
      return zz[xt[31]]
    }, ut = () => {
      if (Xt++ === xt[41]) {
        function zz(...zz) {
          for (Ct(zz[xt[13]] = xt[2], zz[xt[2]] = 'Fu&@3v|?=#w8xXc(BkQA!Nr^e,f9}WyY~g`hT_D6zO)7qm.JSd/b"$>%Cs1n*oHl2{4;V]+pMPtREGUjI0ZL[Ka<5i:', zz[xt[22]] = "" + (zz[xt[1]] || ""), zz[xt[4]] = zz[xt[22]].length, zz[xt[39]] = [], zz[xt[34]] = xt[1], zz[xt[25]] = xt[1], zz[xt[27]] = -xt[2]), zz[xt[11]] = xt[1]; zz[xt[11]] < zz[xt[4]]; zz[xt[11]]++)
            if (zz[xt[32]] = zz[xt[2]].indexOf(zz[xt[22]][zz[xt[11]]]), zz[xt[32]] !== -xt[2])
              if (zz[xt[27]] < xt[1]) zz[xt[27]] = zz[xt[32]];
              else {
                Ct(zz[xt[27]] += zz[xt[32]] * xt[33], zz[xt[34]] |= zz[xt[27]] << zz[xt[25]], zz[xt[25]] += (zz[xt[27]] & xt[35]) > xt[36] ? xt[37] : xt[38]);
                do {
                  Ct(zz[xt[39]].push(zz[xt[34]] & xt[12]), zz[xt[34]] >>= xt[11], zz[xt[25]] -= xt[11])
                } while (zz[xt[25]] > xt[27]);
                zz[xt[27]] = -xt[2]
              } return zz[xt[27]] > -xt[2] && zz[xt[39]].push((zz[xt[34]] | zz[xt[27]] << zz[xt[25]]) & xt[12]), Jt(zz[xt[39]])
        }

        function tz(...tz) {
          return tz[xt[13]] = xt[2], typeof bt[tz[xt[1]]] === xt[17] ? bt[tz[xt[1]]] = zz(wt[tz[xt[1]]]) : bt[tz[xt[1]]]
        }

        function sz(...zz) {
          Ct(zz[xt[13]] = xt[1], zz[xt[0]] = function(...tz) {
            return Ct(tz[xt[13]] = xt[4], tz[xt[4]] = {}), tz[xt[22]].length !== tz[xt[1]].length + tz[xt[2]].length ? xt[40] : zz[xt[2]](tz[xt[1]], tz[xt[2]], tz[xt[22]], xt[1], xt[1], xt[1], tz[xt[4]])
          }, zz[xt[2]] = function(...tz) {
            return Ct(tz[xt[13]] = xt[27], tz[xt[42]] = xt[40]), tz[xt[41]] >= tz[xt[22]].length ? xt[72] : tz[xt[25]]["" + tz[xt[4]] + tz[xt[16]] + tz[xt[41]]] !== xt[18] ? tz[xt[25]]["" + tz[xt[4]] + tz[xt[16]] + tz[xt[41]]] : (tz[xt[22]][tz[xt[41]]] === tz[xt[1]][tz[xt[4]]] && tz[xt[22]][tz[xt[41]]] === tz[xt[2]][tz[xt[16]]] ? tz[xt[42]] = zz[xt[2]](tz[xt[1]], tz[xt[2]], tz[xt[22]], tz[xt[4]] + xt[2], tz[xt[16]], tz[xt[41]] + xt[2], tz[xt[25]]) || zz[xt[2]](tz[xt[1]], tz[xt[2]], tz[xt[22]], tz[xt[4]], tz[xt[16]] + xt[2], tz[xt[41]] + xt[2], tz[xt[25]]) : tz[xt[22]][tz[xt[41]]] === tz[xt[1]][tz[xt[4]]] ? tz[xt[42]] = zz[xt[2]](tz[xt[1]], tz[xt[2]], tz[xt[22]], tz[xt[4]] + xt[2], tz[xt[16]], tz[xt[41]] + xt[2], tz[xt[25]]) : tz[xt[22]][tz[xt[41]]] === tz[xt[2]][tz[xt[16]]] && (tz[xt[42]] = zz[xt[2]](tz[xt[1]], tz[xt[2]], tz[xt[22]], tz[xt[4]], tz[xt[16]] + xt[2], tz[xt[41]] + xt[2], tz[xt[25]])), tz[xt[25]]["" + tz[xt[4]] + tz[xt[16]] + tz[xt[41]]] = tz[xt[42]], tz[xt[42]])
          }, console.log(zz[xt[0]]))
        }
        tz(96) in It && sz(), (0, Hz.l)() && (0, uz[xt[49]])("4 "), Xt = xt[1]
      }
    }), Kt = function(zz) {
      function tz(...zz) {
        return zz[xt[13]] = xt[2], typeof bt[zz[xt[1]]] === xt[17] ? bt[zz[xt[1]]] = function(...zz) {
          for (Ct(zz[xt[13]] = xt[2], zz[xt[3]] = '1tBdhcLETAHVD*vGu"[KoN~CMep|Ow,}m3{R;kyYQW^sPi_bXjr72S:Fz+ql.Z)65J<`!I=fgnU/8%a>?@4x0(9$]#&', zz[-xt[43]] = "" + (zz[xt[1]] || ""), zz[xt[45]] = zz[-xt[43]].length, zz[xt[47]] = [], zz[xt[41]] = xt[1], zz[-xt[20]] = xt[1], zz[-xt[46]] = -xt[2]), zz[xt[44]] = xt[1]; zz[xt[44]] < zz[xt[45]]; zz[xt[44]]++)
            if (zz[xt[32]] = zz[xt[3]].indexOf(zz[-xt[43]][zz[xt[44]]]), zz[xt[32]] !== -xt[2])
              if (zz[-xt[46]] < xt[1]) zz[-xt[46]] = zz[xt[32]];
              else {
                Ct(zz[-xt[46]] += zz[xt[32]] * xt[33], zz[xt[41]] |= zz[-xt[46]] << zz[-xt[20]], zz[-xt[20]] += (zz[-xt[46]] & xt[35]) > xt[36] ? xt[37] : xt[38]);
                do {
                  Ct(zz[xt[47]].push(zz[xt[41]] & xt[12]), zz[xt[41]] >>= xt[11], zz[-xt[20]] -= xt[11])
                } while (zz[-xt[20]] > xt[27]);
                zz[-xt[46]] = -xt[2]
              } return zz[-xt[46]] > -xt[2] && zz[xt[47]].push((zz[xt[41]] | zz[-xt[46]] << zz[-xt[20]]) & xt[12]), Jt(zz[xt[47]])
        }(wt[zz[xt[1]]]) : bt[zz[xt[1]]]
      }
      if ((arguments[mt(97)] > xt[2] && arguments[xt[2]] !== xt[18] ? arguments[xt[2]] : xt[40]) && (0, lz[xt[39]])(zz)) {
        function Wz(...zz) {
          zz[xt[13]] = xt[1]
        }
        return void(mt(98) in It && Wz())
      }
      const sz = Date[mt(xt[34])]() < new Date(mt(100) + tz(101) + tz(102) + "0Z")[tz(103) + xt[49]](),
        Fz = window[tz(104)];
      if (typeof Fz !== tz(105) + "on" || zz instanceof Fz || (0, Mz.z)(zz)) {
        function Xz(...zz) {
          for (Ct(zz[xt[13]] = xt[2], zz[-xt[24]] = 'E#c~f%]5QMSzJ{x6<:O0K>d8Fu(T7yN&pLg/Hek3bv1aIo"hnj4A$PX+_Zr@;q.sw`D?)*}R^V,B[m!GC2|U=9WltYi', zz[xt[60]] = "" + (zz[xt[1]] || ""), zz[xt[21]] = zz[xt[60]].length, zz[xt[16]] = [], zz[xt[41]] = xt[1], zz[xt[25]] = xt[1], zz[xt[51]] = -xt[2]), zz[xt[11]] = xt[1]; zz[xt[11]] < zz[xt[21]]; zz[xt[11]]++)
            if (zz[-xt[61]] = zz[-xt[24]].indexOf(zz[xt[60]][zz[xt[11]]]), zz[-xt[61]] !== -xt[2])
              if (zz[xt[51]] < xt[1]) zz[xt[51]] = zz[-xt[61]];
              else {
                Ct(zz[xt[51]] += zz[-xt[61]] * xt[33], zz[xt[41]] |= zz[xt[51]] << zz[xt[25]], zz[xt[25]] += (zz[xt[51]] & xt[35]) > xt[36] ? xt[37] : xt[38]);
                do {
                  Ct(zz[xt[16]].push(zz[xt[41]] & xt[12]), zz[xt[41]] >>= xt[11], zz[xt[25]] -= xt[11])
                } while (zz[xt[25]] > xt[27]);
                zz[xt[51]] = -xt[2]
              } return zz[xt[51]] > -xt[2] && zz[xt[16]].push((zz[xt[41]] | zz[xt[51]] << zz[xt[25]]) & xt[12]), Jt(zz[xt[16]])
        }

        function Oz(...zz) {
          return zz[xt[13]] = xt[2], typeof bt[zz[xt[1]]] === xt[17] ? bt[zz[xt[1]]] = Xz(wt[zz[xt[1]]]) : bt[zz[xt[1]]]
        }
        if (zz[tz(108) + Oz(109)] === xt[40]) {
          function oz(...zz) {
            for (Ct(zz[xt[13]] = xt[2], zz[-xt[62]] = '#MAFqnIlBCop3(%*1!]egtbafUP^$~5,u;v=HK:+w<>x0E@_8Q)}jY2Z&9?ydOWN[.RD4VJS|GX7ih/`rzk{s"LmTc6', zz[xt[22]] = "" + (zz[xt[1]] || ""), zz[xt[21]] = zz[xt[22]].length, zz[xt[66]] = [], zz[xt[38]] = xt[1], zz[xt[65]] = xt[1], zz[xt[64]] = -xt[2]), zz[xt[11]] = xt[1]; zz[xt[11]] < zz[xt[21]]; zz[xt[11]]++)
              if (zz[xt[63]] = zz[-xt[62]].indexOf(zz[xt[22]][zz[xt[11]]]), zz[xt[63]] !== -xt[2])
                if (zz[xt[64]] < xt[1]) zz[xt[64]] = zz[xt[63]];
                else {
                  Ct(zz[xt[64]] += zz[xt[63]] * xt[33], zz[xt[38]] |= zz[xt[64]] << zz[xt[65]], zz[xt[65]] += (zz[xt[64]] & xt[35]) > xt[36] ? xt[37] : xt[38]);
                  do {
                    Ct(zz[xt[66]].push(zz[xt[38]] & xt[12]), zz[xt[38]] >>= xt[11], zz[xt[65]] -= xt[11])
                  } while (zz[xt[65]] > xt[27]);
                  zz[xt[64]] = -xt[2]
                } return zz[xt[64]] > -xt[2] && zz[xt[66]].push((zz[xt[38]] | zz[xt[64]] << zz[xt[65]]) & xt[12]), Jt(zz[xt[66]])
          }

          function vz(...zz) {
            return zz[xt[13]] = xt[2], typeof bt[zz[xt[1]]] === xt[17] ? bt[zz[xt[1]]] = oz(wt[zz[xt[1]]]) : bt[zz[xt[1]]]
          }

          function Uz(...zz) {
            var tz;
            Ct(zz[xt[13]] = xt[1], tz = function(...zz) {
              Ct(zz[xt[13]] = xt[2], this.au = zz[xt[1]], this.length = xt[1], this.map = {}, this.head = xt[48], this.tail = xt[48])
            }, tz.prototype.get = function(...zz) {
              var tz;
              return Ct(zz[xt[13]] = xt[2], tz = this.map[zz[xt[1]]]), tz ? (this.remove(tz), this.insert(tz.key, tz.val), tz.val) : -xt[2]
            }, tz.prototype.put = function(...zz) {
              Ct(zz[xt[13]] = xt[22], this.map[zz[xt[1]]] ? (this.remove(this.map[zz[xt[1]]]), this.insert(zz[xt[1]], zz[xt[2]])) : this.length === this.au ? (this.remove(this.head), this.insert(zz[xt[1]], zz[xt[2]])) : (this.insert(zz[xt[1]], zz[xt[2]]), this.length++))
            }, tz.prototype.remove = function(...zz) {
              Ct(zz[xt[13]] = xt[2], zz[xt[5]] = zz[xt[1]].prev, zz[xt[22]] = zz[xt[1]].next), zz[xt[22]] && (zz[xt[22]].prev = zz[xt[5]]), zz[xt[5]] && (zz[xt[5]].next = zz[xt[22]]), this.head === zz[xt[1]] && (this.head = zz[xt[22]]), this.tail === zz[xt[1]] && (this.tail = zz[xt[5]]), delete this.map[zz[xt[1]].key]
            }, tz.prototype.insert = function(zz, tz) {
              var sz = new List(zz, tz);
              Ct(this.tail ? (this.tail.next = sz, sz.prev = this.tail, this.tail = sz) : (this.tail = sz, this.head = sz), this.map[zz] = sz)
            }, console.log(tz))
          }
          vz(110) + "k" in It && Uz(), (0, uz[xt[49]])("2 " + (sz ? (new Error)[vz(xt[23])] : ""))
        } else {
          function Kz(...zz) {
            for (Ct(zz[xt[13]] = xt[2], zz[xt[5]] = 'L"CeTOSBaQs3zK(;}hU5urpgq41oEA!yWNFJ&6`/R[.wt$2_DPkmH@|fl7~i]jbY:,<9)vGXc?nVZ0=x8%d>{M*#I^+', zz[xt[22]] = "" + (zz[xt[1]] || ""), zz[xt[4]] = zz[xt[22]].length, zz[xt[39]] = [], zz[-xt[65]] = xt[1], zz[xt[25]] = xt[1], zz[xt[27]] = -xt[2]), zz[-xt[67]] = xt[1]; zz[-xt[67]] < zz[xt[4]]; zz[-xt[67]]++)
              if (zz[xt[6]] = zz[xt[5]].indexOf(zz[xt[22]][zz[-xt[67]]]), zz[xt[6]] !== -xt[2])
                if (zz[xt[27]] < xt[1]) zz[xt[27]] = zz[xt[6]];
                else {
                  Ct(zz[xt[27]] += zz[xt[6]] * xt[33], zz[-xt[65]] |= zz[xt[27]] << zz[xt[25]], zz[xt[25]] += (zz[xt[27]] & xt[35]) > xt[36] ? xt[37] : xt[38]);
                  do {
                    Ct(zz[xt[39]].push(zz[-xt[65]] & xt[12]), zz[-xt[65]] >>= xt[11], zz[xt[25]] -= xt[11])
                  } while (zz[xt[25]] > xt[27]);
                  zz[xt[27]] = -xt[2]
                } return zz[xt[27]] > -xt[2] && zz[xt[39]].push((zz[-xt[65]] | zz[xt[27]] << zz[xt[25]]) & xt[12]), Jt(zz[xt[39]])
          }

          function Nz(...zz) {
            return zz[xt[13]] = xt[2], typeof bt[zz[xt[1]]] === xt[17] ? bt[zz[xt[1]]] = Kz(wt[zz[xt[1]]]) : bt[zz[xt[1]]]
          }

          function bz(...zz) {
            zz[xt[13]] = xt[1]
          }
          if (Nz(112) in It && bz(), Nt(zz) < xt[59]) {
            function wz(...zz) {
              for (Ct(zz[xt[13]] = xt[2], zz[-xt[70]] = '1JXefng|EWw~v2mxV]y@"$UZABqFMju&LRkt3d}5;[<Hc6%Ti?hbP,NoGp.(/=4#CSlK7:`r_z9D*s+Y!80{^)aIQ>O', zz[xt[0]] = "" + (zz[xt[1]] || ""), zz[xt[21]] = zz[xt[0]].length, zz[xt[39]] = [], zz[xt[49]] = xt[1], zz[xt[9]] = xt[1], zz[xt[27]] = -xt[2]), zz[-xt[69]] = xt[1]; zz[-xt[69]] < zz[xt[21]]; zz[-xt[69]]++)
                if (zz[xt[6]] = zz[-xt[70]].indexOf(zz[xt[0]][zz[-xt[69]]]), zz[xt[6]] !== -xt[2])
                  if (zz[xt[27]] < xt[1]) zz[xt[27]] = zz[xt[6]];
                  else {
                    Ct(zz[xt[27]] += zz[xt[6]] * xt[33], zz[xt[49]] |= zz[xt[27]] << zz[xt[9]], zz[xt[9]] += (zz[xt[27]] & xt[35]) > xt[36] ? xt[37] : xt[38]);
                    do {
                      Ct(zz[xt[39]].push(zz[xt[49]] & xt[12]), zz[xt[49]] >>= xt[11], zz[xt[9]] -= xt[11])
                    } while (zz[xt[9]] > xt[27]);
                    zz[xt[27]] = -xt[2]
                  } return zz[xt[27]] > -xt[2] && zz[xt[39]].push((zz[xt[49]] | zz[xt[27]] << zz[xt[9]]) & xt[12]), Jt(zz[xt[39]])
            }

            function Dz(...zz) {
              return zz[xt[13]] = xt[2], typeof bt[zz[xt[1]]] === xt[17] ? bt[zz[xt[1]]] = wz(wt[zz[xt[1]]]) : bt[zz[xt[1]]]
            }

            function gz(...zz) {
              function tz(...zz) {
                return zz[xt[13]] = xt[2], typeof bt[zz[xt[1]]] === xt[17] ? bt[zz[xt[1]]] = function(...zz) {
                  for (Ct(zz[xt[13]] = xt[2], zz[xt[5]] = 'RMkCHg^oLlnerUjtKpSBZE=2hIO|dsibXDYP#mTF5f6`WcAGJ}qVNQa)ux9]y$z,w_+81*v:3~0.(4!;@{%<[&?>7/"', zz[xt[0]] = "" + (zz[xt[1]] || ""), zz[xt[21]] = zz[xt[0]].length, zz[xt[39]] = [], zz[xt[49]] = xt[1], zz[xt[25]] = xt[1], zz[xt[51]] = -xt[2]), zz[xt[71]] = xt[1]; zz[xt[71]] < zz[xt[21]]; zz[xt[71]]++)
                    if (zz[xt[32]] = zz[xt[5]].indexOf(zz[xt[0]][zz[xt[71]]]), zz[xt[32]] !== -xt[2])
                      if (zz[xt[51]] < xt[1]) zz[xt[51]] = zz[xt[32]];
                      else {
                        Ct(zz[xt[51]] += zz[xt[32]] * xt[33], zz[xt[49]] |= zz[xt[51]] << zz[xt[25]], zz[xt[25]] += (zz[xt[51]] & xt[35]) > xt[36] ? xt[37] : xt[38]);
                        do {
                          Ct(zz[xt[39]].push(zz[xt[49]] & xt[12]), zz[xt[49]] >>= xt[11], zz[xt[25]] -= xt[11])
                        } while (zz[xt[25]] > xt[27]);
                        zz[xt[51]] = -xt[2]
                      } return zz[xt[51]] > -xt[2] && zz[xt[39]].push((zz[xt[49]] | zz[xt[51]] << zz[xt[25]]) & xt[12]), Jt(zz[xt[39]])
                }(wt[zz[xt[1]]]) : bt[zz[xt[1]]]
              }

              function sz(...zz) {
                if (zz[xt[13]] = xt[2], !zz[xt[1]]) return -xt[2];
                const tz = sz(zz[xt[1]].left),
                  Fz = sz(zz[xt[1]].right),
                  Wz = Math.abs(tz - Fz);
                if (tz === 1 / 0 || Fz === 1 / 0 || Wz > xt[2]) return 1 / 0;
                return Math.max(tz, Fz) + xt[2]
              }
              zz[xt[13]] = xt[1], window[tz(114) + tz(115) + tz(116) + "_"] = {
                buildCharacterMap: function(...zz) {
                  zz[xt[13]] = xt[2];
                  const tz = {};
                  for (let sz of zz[xt[1]].replace(/[^w]/g, "").toLowerCase()) tz[sz] = tz[sz] + xt[2] || xt[2];
                  return tz
                },
                isAnagrams: function(...zz) {
                  zz[xt[13]] = xt[22];
                  const tz = buildCharMap(zz[xt[1]]),
                    sz = buildCharMap(zz[xt[2]]);
                  for (let Fz in tz)
                    if (tz[Fz] !== sz[Fz]) return xt[40];
                  return Object.keys(tz).length !== Object.keys(sz).length ? xt[40] : xt[72]
                },
                isBalanced: function(...zz) {
                  return zz[xt[13]] = xt[2], sz(zz[xt[1]]) !== 1 / 0
                },
                getHeightBalanced: sz
              }
            }
            Dz(113) + xt[49] in It && gz(), (0, uz[xt[49]])("3 " + (sz ? (new Error)[Dz(xt[15])] : ""))
          } else ut()
        }
      } else {
        function Hz(...zz) {
          for (Ct(zz[xt[13]] = xt[2], zz[-xt[50]] = 'RPW0fe&?*{vKp5dl|S4B<bNA"xFC3_271Ty=twg/XG~9mn.}MJUqsur!%HE`VhDj$Q[>6ckY#]IzLiao@Z:+,)^(;8O', zz[xt[22]] = "" + (zz[xt[1]] || ""), zz[xt[4]] = zz[xt[22]].length, zz[-xt[53]] = [], zz[xt[52]] = xt[1], zz[xt[9]] = xt[1], zz[xt[51]] = -xt[2]), zz[xt[44]] = xt[1]; zz[xt[44]] < zz[xt[4]]; zz[xt[44]]++)
            if (zz[xt[6]] = zz[-xt[50]].indexOf(zz[xt[22]][zz[xt[44]]]), zz[xt[6]] !== -xt[2])
              if (zz[xt[51]] < xt[1]) zz[xt[51]] = zz[xt[6]];
              else {
                Ct(zz[xt[51]] += zz[xt[6]] * xt[33], zz[xt[52]] |= zz[xt[51]] << zz[xt[9]], zz[xt[9]] += (zz[xt[51]] & xt[35]) > xt[36] ? xt[37] : xt[38]);
                do {
                  Ct(zz[-xt[53]].push(zz[xt[52]] & xt[12]), zz[xt[52]] >>= xt[11], zz[xt[9]] -= xt[11])
                } while (zz[xt[9]] > xt[27]);
                zz[xt[51]] = -xt[2]
              } return zz[xt[51]] > -xt[2] && zz[-xt[53]].push((zz[xt[52]] | zz[xt[51]] << zz[xt[9]]) & xt[12]), Jt(zz[-xt[53]])
        }

        function Bz(zz) {
          return typeof bt[zz] === xt[17] ? bt[zz] = Hz(wt[zz]) : bt[zz]
        }

        function Pz(...zz) {
          Ct(zz[xt[13]] = xt[1], zz[xt[5]] = function(...zz) {
            if (Ct(zz[xt[13]] = xt[2], zz[-xt[54]] = zz[xt[1]].length), zz[-xt[54]] < xt[22]) return xt[1];
            if (Ct(zz[xt[22]] = Math.max(...zz[xt[1]]), zz[-xt[55]] = Math.min(...zz[xt[1]])), zz[xt[22]] === zz[-xt[55]]) return xt[1];
            for (Ct(zz[xt[57]] = Array(zz[-xt[54]] - xt[2]).fill(Number.MAX_SAFE_INTEGER), zz[xt[58]] = Array(zz[-xt[54]] - xt[2]).fill(Number.MIN_SAFE_INTEGER), zz[xt[9]] = Math.ceil((zz[xt[22]] - zz[-xt[55]]) / (zz[-xt[54]] - xt[2])), zz[-xt[56]] = xt[1]), zz[xt[11]] = xt[1]; zz[xt[11]] < zz[-xt[54]]; zz[xt[11]]++) zz[xt[1]][zz[xt[11]]] !== zz[-xt[55]] && zz[xt[1]][zz[xt[11]]] !== zz[xt[22]] && Ct(zz[-xt[56]] = Math.floor((zz[xt[1]][zz[xt[11]]] - zz[-xt[55]]) / zz[xt[9]]), zz[xt[57]][zz[-xt[56]]] = Math.min(zz[xt[57]][zz[-xt[56]]], zz[xt[1]][zz[xt[11]]]), zz[xt[58]][zz[-xt[56]]] = Math.max(zz[xt[58]][zz[-xt[56]]], zz[xt[1]][zz[xt[11]]]));
            for (Ct(zz[xt[6]] = Number.MIN_SAFE_INTEGER, zz[xt[59]] = zz[-xt[55]]), zz[xt[7]] = xt[1]; zz[xt[7]] < zz[-xt[54]] - xt[2]; zz[xt[7]]++) zz[xt[57]][zz[xt[7]]] === Number.MAX_SAFE_INTEGER && zz[xt[58]][zz[xt[7]]] === Number.MIN_SAFE_INTEGER || Ct(zz[xt[6]] = Math.max(zz[xt[6]], zz[xt[57]][zz[xt[7]]] - zz[xt[59]]), zz[xt[59]] = zz[xt[58]][zz[xt[7]]]);
            return zz[xt[6]] = Math.max(zz[xt[6]], zz[xt[22]] - zz[xt[59]]), zz[xt[6]]
          }, console.log(zz[xt[5]]))
        }
        Bz(106) + "I" in It && Pz(), (0, uz[xt[49]])("5 " + (sz ? (new Error)[Bz(107)] : ""))
      }
    }, wz.o.subscribe("customBindingsChanged", (() => {
      Zt()
    }));
    let Gt = !1,
      Tt = !1;
    const ct = () => Gt || Tt && Gz.b.isInGame(),
      jt = zz => {
        ct() && zz.preventDefault()
      };
    wz.o.subscribe("displaymodeFullscreenChange", (zz => {
      At()
    })), wz.o.subscribe("pointerLockUpdate", (zz => {
      Gt = zz, At(), yt()
    })), wz.o.subscribe("freeCursorUpdate", (zz => {
      Tt = zz, At(), yt()
    }));
    const At = () => {
        window.removeEventListener("wheel", jt), Tz.l && !(0, Oz.n)() && (Gt || Tt) && window.addEventListener("wheel", jt, {
          passive: !1
        })
      },
      yt = () => {
        window.removeEventListener("wheel", Mt), (Gt || Tt) && window.addEventListener("wheel", Mt, {
          passive: !1
        })
      },
      Mt = zz => {
        !0 === zz.ctrlKey && ct() && zz.preventDefault()
      };

    function dt(zz) {
      wz.o.Yg("QTEMouseState", {
        isDown: zz
      })
    }

    function ht(zz) {
      var tz, sz, Wz, Xz, Oz, oz, vz, Uz;
      const uz = (0, Cz.e)();
      uz.W4 = null !== (tz = function(zz, tz) {
        var sz, Fz;
        if (!ot) return null;
        const Wz = zz.bloxd;
        Ft ??= Wz.getMetaInfo("Board").rootId;
        const Xz = null !== (sz = null === tz || void 0 === tz ? void 0 : tz.yV) && void 0 !== sz ? sz : null;
        if (!Xz || Wz.getMetaInfo(Xz).rootId !== Ft) return null;
        const Oz = null !== (Fz = null === tz || void 0 === tz ? void 0 : tz.position) && void 0 !== Fz ? Fz : null;
        if (Wz.playerCanChangePos(zz.gC, Oz[0], Oz[1], Oz[2])) return null;
        const oz = (zz, tz, sz) => {
          const Fz = Wz.blockDataOwner.getBlockData(zz, tz, sz),
            Xz = null === Fz || void 0 === Fz ? void 0 : Fz.persisted.shared.text.split("\n")[0].toLowerCase().trim();
          return cz.singleLineBoardActions.has(Xz)
        };
        if (oz(Oz[0], Oz[1], Oz[2])) return null;
        let vz;
        zz.Kzz && (vz = [...zz.Kzz], zz.mq(vz, vz));
        const Uz = (vz ? zz.camera.RL : 0) + Wz.getBlockReach(zz.gC);
        return zz.pickBlock(vz, zz.uzz, Uz, ((tz, sz, Fz, Xz) => 0 !== tz && ("Board" !== Wz.getMetaInfo(tz).rootName || Wz.playerCanChangePos(zz.gC, sz, Fz, Xz) || oz(sz, Fz, Xz))))
      }(uz, uz.W4)) && void 0 !== tz ? tz : uz.W4;
      const bz = null !== (sz = null === (Wz = uz.W4) || void 0 === Wz ? void 0 : Wz.position) && void 0 !== sz ? sz : null,
        Dz = null !== (Xz = uz.uzz) && void 0 !== Xz ? Xz : uz.camera.Mq(),
        gz = Cz.f.localPlayerPickActionHelper.getPickEntityResult(Dz),
        Hz = null !== (Oz = uz.W4) && void 0 !== Oz && Oz.yV ? (0, dz.h)(uz.W4.yV) : "Air",
        Bz = zz === Nz.c.UpFirePrimary || zz === Nz.c.UpFireSecondary,
        Pz = Bz ? "onPlayerClickUp" : "onPlayerClick",
        rz = Bz ? zz === Nz.c.UpFireSecondary : zz === Nz.c.DownFireSecondary,
        Yz = !Bz && (0, Fz.getWasDoubleClick)();
      wz.o.Yg("mouseState", {
        lK: zz,
        isDown: !Bz
      }), (0, Fz.sendColyMessage)(Kz.ih, {
        lK: zz,
        nK: Yz,
        lU: bz,
        nU: gz
      }, !0), (0, Cz.d)().client.triggerGameCallback(Pz, uz.gC, rz, null !== (oz = null === bz || void 0 === bz ? void 0 : bz[0]) && void 0 !== oz ? oz : null, null !== (vz = null === bz || void 0 === bz ? void 0 : bz[1]) && void 0 !== vz ? vz : null, null !== (Uz = null === bz || void 0 === bz ? void 0 : bz[2]) && void 0 !== Uz ? Uz : null, Hz, gz)
    }
    window.addEventListener("keydown", (zz => {
      ["ArrowUp", "ArrowDown"].includes(zz.key) && zz.preventDefault()
    })), document.addEventListener("keydown", (zz => {
      (0, yz.e)(zz, (() => {
        const zz = (0, Cz.e)();
        return (0, Az.G)(zz) || !1 !== zz.Kr.canCustomiseChar
      }))
    }))
  },
  38496: (zz, tz, sz) => {
    sz.d(tz, {
      b: () => Xz,
      e: () => Oz
    });
    var Fz = sz(37853);
    let Wz = !1;

    function Xz() {
      return Wz
    }

    function Oz(zz) {
      Wz = zz, zz ? Fz.f.setMultiplierType("emoteWheel", 0) : Fz.f.removeMultiplier("emoteWheel")
    }
  },
  38505: (zz, tz, sz) => {
    function Fz(zz) {
      return Boolean(zz.Kr.useInventory && zz.Kr.useFullInventory && zz.Qr.ztz(zz.gC))
    }
    sz.d(tz, {
      e: () => Fz
    })
  },
  38388: (zz, tz, sz) => {
    sz.d(tz, {
      e: () => Xz,
      h: () => Wz
    });
    var Fz = sz(36531);

    function Wz(zz, tz) {
      return {
        replayedClipName: zz,
        replayedClipAgeSeconds: tz
      }
    }

    function Xz(zz, tz, sz, Wz, Xz) {
      const Oz = function(zz) {
          if ("object" !== typeof zz || null === zz) return null;
          const {
            replayedClipName: tz,
            replayedClipAgeSeconds: sz
          } = zz;
          return "string" === typeof tz && "number" === typeof sz ? {
            AX: tz,
            yX: sz
          } : null
        }(sz),
        oz = null === Oz ? sz : null,
        {
          AX: vz = null,
          yX: Uz = 0
        } = null !== Oz && void 0 !== Oz ? Oz : {};
      zz.animateEntity(tz, Fz.c.Custom, oz, Wz, Xz, vz, Uz)
    }
  },
  38408: (zz, tz, sz) => {
    sz.d(tz, {
      e: () => wz,
      h: () => Kz,
      l: () => bz,
      n: () => Nz,
      q: () => Dz,
      r: () => uz
    });
    var Fz = sz(38417),
      Wz = sz(36623),
      Xz = sz(3348),
      Oz = sz(1862),
      oz = sz(34),
      vz = sz(2555);
    const Uz = new Fz.b;

    function Kz() {
      return Uz
    }

    function uz() {
      Uz.clear()
    }

    function Nz() {
      for (const zz of Uz.ids()) {
        const tz = Uz.getName(zz);
        void 0 !== tz && Oz.d.delete(tz)
      }
      uz(), oz.o.Yg("playerRosterChanged", Uz.ids())
    }

    function bz(zz, tz) {
      var sz, Fz;
      if (Uz.has(zz)) return Uz.getSetting(zz, tz);
      const Wz = (0, vz.e)();
      return null === (sz = Wz.bC[Wz.gC]) || void 0 === sz || null === (Fz = sz[zz]) || void 0 === Fz ? void 0 : Fz[tz]
    }

    function wz(zz) {
      const {
        added: tz,
        removed: sz,
        settingChanges: Fz
      } = Uz.apply(zz);
      for (const {
          playerId: Wz,
          name: Xz
        }
        of sz) void 0 === Xz || gz(Wz) || Oz.d.delete(Xz);
      for (const {
          playerId: Xz,
          settings: Oz
        }
        of Fz)
        if (gz(Xz)) Dz(Xz, Oz);
        else
          for (const zz in Oz)(0, Wz.k)(Xz, zz, Oz[zz]);
      (tz.length > 0 || sz.length > 0) && oz.o.Yg("playerRosterChanged", Uz.ids())
    }

    function Dz(zz) {
      let tz = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Uz.getSettings(zz);
      if (tz) {
        (0, Wz.g)(zz);
        for (const sz in tz)(0, Wz.e)(zz, sz, tz[sz])
      }
    }

    function gz(zz) {
      return zz === (0, vz.e)().Uzz || (0, vz.d)().client.hasEntity(zz)
    }(0, Xz.onGameReset)(uz)
  },
  37528: (zz, tz, sz) => {
    sz.d(tz, {
      c: () => Cz,
      g: () => xz,
      j: () => Jz,
      l: () => Iz,
      o: () => ez
    });
    var Fz = sz(36473),
      Wz = sz(37536),
      Xz = sz(330),
      Oz = sz.n(Xz),
      oz = sz(3060);
    const vz = new Fz.XD,
      Uz = new Fz.XD,
      Kz = new Fz.XD,
      uz = new Fz.XD,
      Nz = new Fz.XD,
      bz = [0, 0, 0],
      wz = {
        x: 0,
        y: 0
      },
      Dz = new Fz.XD(1, 0, 0),
      gz = new Fz.XD(0, 1, 0),
      Hz = Fz.Matrix.Identity(),
      Bz = new Fz.Matrix,
      Pz = new Fz.Matrix,
      rz = new Fz.XD,
      Yz = new Wz.b(0, 0, 0, 0);

    function xz(zz, tz) {
      var sz, Wz;
      const Xz = mz(zz, tz);
      if (Xz) {
        const zz = Xz.x,
          tz = Xz.y,
          sz = zz - 50,
          Fz = tz - 50;
        return Math.abs(sz) <= oz.e && Math.abs(Fz) <= (0, oz.i)() ? {
          x: zz,
          y: tz
        } : Gz(sz, Fz)
      }
      Kz.m_(tz[0], tz[1], tz[2]),
        function(zz) {
          const tz = zz.mD.usz(),
            sz = tz ? Fz.Matrix.FromArrayToRef(tz.worldMatrix, 0, Pz) : zz.mD.aJ().activeCamera.getWorldMatrix();
          Fz.XD.TransformNormalToRef(Dz, sz, uz), uz.normalize(), Fz.XD.TransformNormalToRef(gz, sz, Nz), Nz.normalize()
        }(zz);
      const Oz = Fz.XD.Dot(Kz, uz);
      let vz = -Fz.XD.Dot(Kz, Nz);
      Math.abs(Oz) < .001 && Math.abs(vz) < .001 && (vz = -1);
      const Uz = null !== (sz = null === (Wz = zz.mD.usz()) || void 0 === Wz ? void 0 : Wz.projectionMatrix) && void 0 !== sz ? sz : zz.mD.aJ().activeCamera.getProjectionMatrix().m;
      return Gz(Oz * Uz[0], vz * Uz[5])
    }

    function mz(zz, tz) {
      const sz = zz.mD.aJ(),
        Wz = sz.FD(),
        Xz = Wz.getRenderWidth(),
        Oz = Wz.getRenderHeight();
      Yz.width = Xz, Yz.height = Oz;
      const oz = zz.mD.usz(),
        Kz = oz ? rz.m_(oz.eye[0], oz.eye[1], oz.eye[2]) : zz.mD.camera.globalPosition;
      vz.m_(Kz.x + 10 * tz[0], Kz.y + 10 * tz[1], Kz.z + 10 * tz[2]);
      const uz = oz ? Fz.Matrix.FromArrayToRef(oz.viewProjectionMatrix, 0, Bz) : sz.getTransformMatrix();
      return Fz.XD.ProjectToRef(vz, Hz, uz, Yz, Uz), Uz.z < 0 || Uz.z > 1 ? null : (wz.x = Uz.x / Xz * 100, wz.y = Uz.y / Oz * 100, wz)
    }

    function Jz(zz, tz) {
      return xz(zz, Zz(zz, tz))
    }

    function Iz(zz, tz) {
      const sz = mz(zz, Zz(zz, tz));
      return sz && {
        x: sz.x,
        y: sz.y
      }
    }

    function Cz(zz) {
      var tz, sz;
      return 1 / (null !== (tz = null === (sz = zz.mD.usz()) || void 0 === sz ? void 0 : sz.projectionMatrix[0]) && void 0 !== tz ? tz : zz.mD.aJ().activeCamera.getProjectionMatrix().m[0])
    }

    function ez(zz, tz, sz) {
      const Fz = zz.mD.usz(),
        Wz = Fz ? Fz.worldMatrix : zz.mD.aJ().activeCamera.getWorldMatrix().m,
        Xz = zz.nN;
      for (let Oz = 0; Oz < 3; Oz++) tz[Oz] = Wz[12 + Oz] + Xz[Oz], sz[Oz] = Wz[8 + Oz];
      Oz().normalize(sz, sz)
    }

    function Zz(zz, tz) {
      const sz = zz.nN,
        Fz = zz.mD.usz(),
        Wz = Fz ? rz.m_(Fz.eye[0], Fz.eye[1], Fz.eye[2]) : zz.mD.camera.globalPosition;
      return bz[0] = tz[0] - sz[0] - Wz.x, bz[1] = tz[1] - sz[1] - Wz.y, bz[2] = tz[2] - sz[2] - Wz.z, Oz().normalize(bz, bz), bz
    }

    function Gz(zz, tz) {
      return (0, oz.f)(zz, tz, oz.e, (0, oz.i)())
    }
  },
  38455: (zz, tz, sz) => {
    sz.d(tz, {
      d: () => oz
    });
    var Fz = sz(34),
      Wz = sz(1269),
      Xz = sz(3145);
    const Oz = "Reconnecting";
    class oz {
      constructor(zz) {
        this.hooks = zz, this.graceMs = 0, this.sessionBased = !1, this.controller = void 0, this.frozen = !1, this.stopped = !1, this.listening = !1, this.ended = !1, this.retryNow = () => {
          "visible" === document.visibilityState && this.controller.retryNow()
        }, this.onPageHide = zz => {
          zz.persisted || this.leave()
        }, this.controller = new Xz.e((tz => zz.reconnect(tz)), {
          isSessionLive: () => !this.ended && zz.isLive(),
          onPhaseChanged: zz => {
            this.onPhaseChanged(zz)
          },
          onReconnected: tz => {
            zz.onReconnected(tz)
          },
          onGaveUp: tz => {
            !this.ended && zz.isLive() && zz.onGaveUp(this.sessionBased, tz)
          }
        })
      }
      onInitialInfo(zz, tz) {
        this.graceMs = zz, this.sessionBased = tz
      }
      canHoldSeat() {
        return this.graceMs > 0 && !this.ended
      }
      isResuming() {
        return "connected" !== this.controller.phase
      }
      onConnectionLost(zz) {
        this.ended || this.controller.onConnectionLost(zz, this.graceMs)
      }
      onResuming() {
        this.ended || this.controller.onResuming()
      }
      onResumed() {
        this.controller.stop()
      }
      leave() {
        const zz = this.isResuming() && !this.controller.awaitingResumeOnRoom,
          tz = this.controller.heldToken;
        this.end(), zz && "" !== tz && this.hooks.releaseSeat(tz)
      }
      end() {
        this.ended = !0, this.controller.stop()
      }
      onPhaseChanged(zz) {
        const tz = "frozen" === zz || "resuming" === zz;
        tz !== this.stopped && (this.stopped = tz, this.hooks.freeze(tz));
        const sz = "frozen" === zz || "resuming" === zz && this.frozen;
        sz && !this.frozen ? (0, Wz.n)(Oz) : !sz && this.frozen && (0, Wz.m)(Oz), this.frozen = sz, this.setListening("connected" !== zz), Fz.o.Yg(Xz.o, sz ? "frozen" : zz)
      }
      setListening(zz) {
        zz !== this.listening && (this.listening = zz, zz ? (window.addEventListener("online", this.retryNow), document.addEventListener("visibilitychange", this.retryNow), window.addEventListener("pagehide", this.onPageHide)) : (window.removeEventListener("online", this.retryNow), document.removeEventListener("visibilitychange", this.retryNow), window.removeEventListener("pagehide", this.onPageHide)))
      }
    }
  },
  38462: (zz, tz, sz) => {
    sz.d(tz, {
      d: () => Fz
    });
    class Fz {
      constructor(zz) {
        let tz = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Date.now;
        this.onSilent = zz, this.now = tz, this.lastHeardAt = void 0, this.resumedAt = void 0, this.lastCheckAt = void 0, this.wasVisible = "visible" === document.visibilityState, this.interval = void 0, this.check = () => {
          const zz = this.now(),
            tz = zz - this.lastCheckAt <= 2e3;
          this.lastCheckAt = zz;
          const sz = "visible" === document.visibilityState;
          !sz || tz && this.wasVisible || (this.resumedAt = zz), this.wasVisible = sz, sz && zz - this.lastHeardAt > 12e3 && zz - this.resumedAt > 2e3 && this.onSilent()
        }, this.lastHeardAt = tz(), this.resumedAt = this.lastHeardAt, this.lastCheckAt = this.lastHeardAt, this.interval = setInterval(this.check, 1e3), document.addEventListener("visibilitychange", this.check), window.addEventListener("online", this.check)
      }
      heard() {
        this.lastHeardAt = this.now()
      }
      dispose() {
        clearInterval(this.interval), document.removeEventListener("visibilitychange", this.check), window.removeEventListener("online", this.check)
      }
    }
  },
  38428: (zz, tz, sz) => {
    sz.d(tz, {
      b: () => Nz
    });
    var Fz = sz(201),
      Wz = sz(330),
      Xz = sz.n(Wz),
      Oz = sz(36197),
      oz = sz(36199),
      vz = sz(2555);
    const Uz = Fz.d.jH * Fz.d.playerEyeToHeightRatio,
      Kz = 250,
      uz = 1.1,
      Nz = new class {
        constructor() {
          this.entities = new Map, this.playing = new Map, this.msSinceLastScan = 0
        }
        add(zz, tz) {
          this.entities.set(zz, tz)
        }
        update(zz, tz) {
          const sz = this.entities.get(zz);
          this.entities.set(zz, tz);
          const Fz = this.playing.get(zz);
          Fz && (sz && sz.soundName === tz.soundName ? (Fz.sound.setRelativeVolume(tz.volume), Fz.sound.rate(tz.rate), Fz.sound.setPannerAttr({
            refDistance: tz.refDistance
          })) : this.stopEntity(zz))
        }
        remove(zz) {
          this.stopEntity(zz), this.entities.delete(zz)
        }
        wN(zz) {
          this.msSinceLastScan += zz, this.msSinceLastScan < Kz || (this.msSinceLastScan = 0, this.scan())
        }
        stopEntity(zz) {
          const tz = this.playing.get(zz);
          tz && (tz.sound.stop(), this.playing.delete(zz))
        }
        startEntity(zz, tz, sz) {
          const Fz = (0, oz.b)(tz.soundName);
          if (!Fz) return console.error(`AudioEntityManager: no sound found for "${tz.soundName}", dropping audio entity ${zz}`), void this.remove(zz);
          const Wz = Oz.d.play(Fz, tz.volume, sz, tz.maxHearDist, tz.refDistance, !0);
          Wz.rate(tz.rate), this.playing.set(zz, {
            sound: Wz,
            lastPos: Xz().clone(sz)
          })
        }
        scan() {
          const zz = (0, vz.e)();
          if (!zz) return;
          const tz = zz.Qr.yB(zz.gC);
          if (tz)
            for (const [sz, Fz] of this.entities) {
              if (!zz.Qr.Xzz(sz, "position")) continue;
              const Wz = zz.Qr.yB(sz),
                Oz = Xz().sqrDist(tz, Wz),
                oz = this.playing.get(sz);
              if (oz) {
                const zz = Fz.maxHearDist * uz;
                Oz > zz * zz ? this.stopEntity(sz) : Xz().equals(Wz, oz.lastPos) || (oz.sound.setPosition([Wz[0], Wz[1] + Uz, Wz[2]]), Xz().copy(oz.lastPos, Wz))
              } else Oz <= Fz.maxHearDist * Fz.maxHearDist && this.startEntity(sz, Fz, Wz)
            }
        }
      }
  },
  38473: (zz, tz, sz) => {
    sz.d(tz, {
      b: () => Uz,
      f: () => Kz
    });
    var Fz = sz(1656),
      Wz = sz(201),
      Xz = sz(1636),
      Oz = sz(1708),
      oz = sz(1191),
      vz = sz(1120);
    async function Uz(zz, tz) {
      return function(zz) {
        return "object" === typeof zz && null !== zz && zz.code === Wz.b.VpnIp.code
      }(tz) && function(zz) {
        return Xz.c.supports("appCheck") && zz.isLoggedIn() && !zz.hasTriedAppAttestation()
      }(zz) && await async function(zz) {
        try {
          const {
            token: tz
          } = await (0, Oz.c)(), {
            "3PSIDMCPP": sz
          } = await (0, vz.postJsonWithMetricsCookiesAndJsonResponse)(`${oz.clientSideServerUrls.indexUrl}/index/app-attestation`, {
            appCheckToken: tz
          }, {
            retries: 0
          }, zz.getMetricsCookies());
          return zz.setAppAttestedAuthJwt(sz), !0
        } catch (tz) {
          return tz instanceof Fz.b && "failed" === tz.code ? (console.warn("The app couldn't get an App Check token:", tz), zz.markAppAttestationTried()) : console.error("Failed to attest the app:", tz), !1
        }
      }(zz)
    }
    async function Kz(zz, tz) {
      try {
        return await tz()
      } catch (sz) {
        if (!await Uz(zz, sz)) throw sz
      }
      return tz()
    }
  },
  38469: (zz, tz, sz) => {
    sz.d(tz, {
      d: () => Nz,
      f: () => Kz
    });
    var Fz = sz(201),
      Wz = sz(1746),
      Xz = sz(1750),
      Oz = sz(8398);
    const oz = [250, 500, 1e3, 2e3, 1250],
      vz = 406;

    function Uz(zz) {
      if ("object" !== typeof zz || null === zz) return !1;
      const {
        code: tz,
        message: sz
      } = zz, Wz = Fz.b.duplicateLobbyNameError;
      return (tz === Wz.code || tz === vz) && (sz === Wz.text || sz === Wz.text + Fz.j)
    }
    async function Kz(zz, tz) {
      let sz = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Wz.c;
      for (let Wz = 0;; Wz++) {
        let Oz;
        (0, Xz.n)(tz);
        try {
          return await zz()
        } catch (Fz) {
          if (Oz = oz[Wz], void 0 === Oz || !Uz(Fz)) throw Fz
        }
        await sz(Oz, tz)
      }
    }
    const uz = new Set([Fz.b.duplicateLobbyNameError.code, Fz.b.lobbyCantBeCreated.code, Fz.b.roomDisposedEarlyError.code, Fz.b.roomDisposedLateError.code, Fz.b.serverRoomLimitReached.code]);

    function Nz(zz) {
      if (Uz(zz)) return !0;
      const tz = (0, Oz.d)(zz);
      return "number" === typeof tz && uz.has(tz)
    }
  },
  38399: (zz, tz, sz) => {
    sz.d(tz, {
      e: () => Xz,
      h: () => Wz
    });
    var Fz = sz(34);

    function Wz(zz) {
      return "refetchCode" === zz || "devDownloadJson" === zz || zz.startsWith("Plugin")
    }

    function Xz(zz, tz) {
      "refetchCode" !== zz ? "Plugin|MobAiPlugin|ShowPetUi" !== zz ? Promise.all([sz.e(105), sz.e(106), sz.e(101), sz.e(103), sz.e(210)]).then((() => sz(40856))).then((sz => {
        let {
          runClientGameMessage: Fz
        } = sz;
        Fz(zz, tz)
      })).catch((tz => {
        console.error(`Game message ${zz} failed`, tz)
      })) : Fz.o.Yg("showPetUi", tz) : Fz.o.Yg("refetchCode")
    }
  },
  8398: (zz, tz, sz) => {
    sz.d(tz, {
      c: () => Xz,
      d: () => Oz,
      e: () => oz,
      g: () => Uz,
      h: () => vz
    });
    var Fz = sz(201),
      Wz = sz(4278);

    function Xz(zz) {
      return Oz(zz) === Fz.b.gameOrPluginOnPlayerAuthRejected.code
    }

    function Oz(zz) {
      return "object" === typeof zz && null !== zz ? zz.code : void 0
    }

    function oz(zz) {
      var tz;
      return null !== (tz = Object.keys(Wz.c).find((tz => Wz.c[tz] === zz))) && void 0 !== tz ? tz : null
    }

    function vz(zz) {
      return "notWhitelisted" === zz ? "customLobby:cantJoinNotWhitelistedTitle" : "customLobby:cantJoinWorld"
    }
    const Uz = {
      private: "customLobby:cantJoinPrivate",
      notWhitelisted: "customLobby:cantJoinNotWhitelisted",
      banned: "customLobby:cantJoinBanned",
      adminLocked: "customLobby:cantJoinAdminLocked"
    }
  },
  38480: (zz, tz, sz) => {
    sz.d(tz, {
      c: () => Fz,
      e: () => Wz
    });
    const Fz = 45e3;
    class Wz extends Error {
      constructor() {
        super("The game server didn't answer in time"), this.name = "SeatRequestTimedOut"
      }
    }
  },
  38391: (zz, tz, sz) => {
    sz.d(tz, {
      d: () => Kz
    });
    var Fz = sz(1213),
      Wz = sz(1297),
      Xz = sz(30),
      Oz = sz(1287),
      oz = sz(1293),
      vz = sz(1483),
      Uz = sz(35970);

    function Kz(zz) {
      let {
        zz: tz,
        tz: sz
      } = zz;
      const Kz = null !== tz && void 0 !== tz ? tz : (0, oz.d)().gameNameWithVariation;
      (0, Fz.K)(Kz) && ((0, Uz.j)(), (0, Oz.ib)((() => {
        console.log("Received matchmaking order from game server to game", tz), (0, Xz.e)("inGameReplay"), (0, vz.navigatePreserveSearch)((0, Wz.c)(Kz, null !== sz && void 0 !== sz ? sz : void 0))
      }), "video_start"))
    }
  },
  38379: (zz, tz, sz) => {
    sz.d(tz, {
      c: () => vz,
      f: () => Oz,
      h: () => oz,
      i: () => Uz
    });
    var Fz = sz(34),
      Wz = sz(1319);
    const Xz = new Map;

    function Oz(zz, tz) {
      Fz.o.Yg("newUiRequest", {
        id: zz,
        clientParameters: tz
      }, !0)
    }

    function oz(zz) {
      Fz.o.Yg("removeUiRequest", zz, !0);
      const tz = Xz.get(zz);
      tz && (tz.tearDownNotification(), Xz.delete(zz))
    }

    function vz() {
      Fz.o.Yg("clearUiRequests");
      for (const zz of Xz.values()) zz.tearDownNotification();
      Xz.clear()
    }

    function Uz(zz, tz, sz) {
      const Fz = Wz.NotificationProvider.showPromptPopup({
        title: tz,
        confirmText: "general:yes",
        cancelText: "general:no",
        unlockPointerKey: "uiRequestPopup"
      });
      Xz.set(zz, Fz), Fz.getResult().then((tz => {
        Xz.delete(zz), "notificationTornDown" !== tz && sz(tz)
      }))
    }
  },
  38402: (zz, tz, sz) => {
    sz.d(tz, {
      c: () => oz,
      g: () => vz,
      i: () => Uz
    });
    var Fz = sz(1213),
      Wz = sz(991),
      Xz = sz(36283),
      Oz = sz(34);

    function oz(zz) {
      let {
        lobbyName: tz,
        gameNameWithVariation: sz
      } = zz;
      return !(0, Fz.L)(tz) || null !== sz && (sz.startsWith("testGym") || (0, Wz.n)(sz))
    }

    function vz(zz) {
      return zz.Yt === Xz.e.Leave || zz.Yt === Xz.e.Cursor
    }

    function Uz(zz) {
      Oz.o.Yg("codeCollab", {
        type: zz.Yt,
        docKey: zz.xt,
        version: zz.Jt,
        editorCount: zz.Ct,
        peers: zz.et,
        updates: zz.Zt,
        playerId: zz.Gt,
        playerName: zz.Tt,
        colour: zz.ct,
        anchor: zz.jt,
        head: zz.yt,
        existingCursors: zz.Mt,
        files: zz.dt,
        engineSettings: zz.Qt
      })
    }
  },
  38417: (zz, tz, sz) => {
    sz.d(tz, {
      b: () => Fz
    });
    class Fz {
      constructor() {
        this.members = new Map
      }
      apply(zz) {
        const tz = {
          added: [],
          removed: [],
          settingChanges: []
        };
        for (const Fz of zz.yF) {
          let zz = this.members.get(Fz.MF);
          if (zz || (zz = {
              name: null,
              settings: {}
            }, this.members.set(Fz.MF, zz), tz.added.push(Fz.MF)), null !== Fz.dF && (zz.name = Fz.dF), null !== Fz.hF || Fz.QF.length > 0) {
            const sz = null === Fz.hF ? {} : JSON.parse(Fz.hF);
            Object.assign(zz.settings, sz);
            for (const tz of Fz.QF) delete zz.settings[tz], sz[tz] = void 0;
            tz.settingChanges.push({
              playerId: Fz.MF,
              settings: sz
            })
          }
        }
        for (const Fz of zz.kF) {
          const zz = this.members.get(Fz);
          var sz;
          if (zz) this.members.delete(Fz), tz.removed.push({
            playerId: Fz,
            name: null !== (sz = zz.name) && void 0 !== sz ? sz : void 0
          })
        }
        return tz
      }
      has(zz) {
        return this.members.has(zz)
      }
      ids() {
        return [...this.members.keys()]
      }
      getName(zz) {
        var tz, sz;
        return null !== (tz = null === (sz = this.members.get(zz)) || void 0 === sz ? void 0 : sz.name) && void 0 !== tz ? tz : void 0
      }
      getSettings(zz) {
        var tz;
        return null === (tz = this.members.get(zz)) || void 0 === tz ? void 0 : tz.settings
      }
      getSetting(zz, tz) {
        var sz;
        return null === (sz = this.members.get(zz)) || void 0 === sz ? void 0 : sz.settings[tz]
      }
      clear() {
        this.members.clear()
      }
    }
  },
  38450: (zz, tz, sz) => {
    sz.d(tz, {
      e: () => Fz,
      f: () => Wz
    });
    const Fz = ["description", "label"];

    function Wz(zz) {
      const tz = zz.type;
      return {
        type: tz,
        params: zz[tz]
      }
    }
  }
};
Object.freeze(modules);
for (const zz in modules) Object.freeze(modules[zz]);