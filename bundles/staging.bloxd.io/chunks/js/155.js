export const id = 155;
export const ids = [155];
export const modules = {
  38441: (zz, uz, bz) => {
    bz.d(uz, {
      b: () => iz,
      d: () => lz
    });
    var Ez = bz(22);
    let nz = !1;

    function iz() {
      return nz
    }

    function lz(zz) {
      nz !== zz && (nz = zz, Ez.k.sK("replayViewer|videoExportChanged"))
    }
  },
  38334: (zz, uz, bz) => {
    bz.d(uz, {
      b: () => iz
    });
    var Ez = bz(22),
      nz = bz(1892);

    function iz(zz) {
      let {
        taskId: uz,
        progress: bz
      } = zz;
      const Ez = nz.b.get("_tasks");
      null !== Ez && void 0 !== Ez && Ez[uz] && nz.b.apply({
        _tasks: {
          ...Ez,
          [uz]: {
            ...Ez[uz],
            progress: bz
          }
        }
      })
    }
    Ez.k.subscribe("clientTaskProgress", (zz => {
      iz(zz)
    }))
  },
  38461: (zz, uz, bz) => {
    bz.d(uz, {
      e: () => Rz,
      g: () => Kz,
      j: () => Zz
    });
    var Ez = bz(2689);
    const nz = 0,
      iz = 2,
      lz = 3,
      Mz = 4;
    class tz {
      constructor(zz, uz) {
        this.width = zz, this.Bp = uz, this.data = void 0, this.next = 0, this.size = 0, this.data = new Float64Array(zz * uz)
      }
      push(zz) {
        let uz = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        const bz = this.data.subarray(this.next * this.width, (this.next + 1) * this.width);
        for (let Ez = 0; Ez < this.width; Ez++) bz[Ez] = zz[uz + Ez];
        return this.next = (this.next + 1) % this.Bp, this.size = Math.min(this.size + 1, this.Bp), bz
      }
      lines() {
        const zz = [],
          uz = (this.next - this.size + this.Bp) % this.Bp;
        for (let bz = 0; bz < this.size; bz++) {
          const Ez = (uz + bz) % this.Bp * this.width;
          zz.push(Array.from(this.data.subarray(Ez, Ez + this.width)).join(","))
        }
        return zz
      }
    }

    function Hz(zz) {
      return Number.isFinite(zz) ? String(Math.round(10 * zz) / 10) : String(zz)
    }

    function Oz(zz) {
      return Number.isFinite(zz) ? zz.toFixed(1) : String(zz)
    }
    class pz {
      constructor() {
        this.frames = 0, this.looked = 0, this.idle = 0, this.Aq = 0, this.pastLimit = 0, this.lockSkips = 0, this.AO = 0, this.lost = 0, this.dropped = 0, this.longFrames = 0, this.dtMin = 1 / 0, this.dtMax = 0, this.dtSum = 0, this.raw = [0, 0], this.turned = [0, 0], this.peakRate = 0, this.events = 0, this.eventMax = 0, this.bigEvents = 0, this.outliers = 0, this.eventLines = 0, this.suppressed = 0
      }
    }
    class dz {
      constructor() {
        var zz = this;
        this.tally = new pz, this.records = new tz(10, 3600), this.events = new tz(4, 12e3), this.event = new Float64Array(4), this.take = null, this.client = "js", this.started = !1, this.record = function(uz) {
          let bz = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
          const [Ez, tz, pz, dz, Fz, Zz, Rz, Kz, wz, Xz] = zz.records.push(uz, bz), fz = zz.tally;
          switch (fz.frames++, Rz) {
            case nz:
              return void fz.idle++;
            case Mz:
              return void fz.AO++;
            case lz:
              return fz.lockSkips++, void(0 === pz && 0 === dz || zz.outlier(`lock skip dropped raw (${Hz(pz)}, ${Hz(dz)}) at ${Oz(Ez)} ms`))
          }
          fz.looked++, Number.isFinite(tz) && (fz.dtMin = Math.min(fz.dtMin, tz), fz.dtMax = Math.max(fz.dtMax, tz), fz.dtSum += tz, tz > 0 && (fz.peakRate = Math.max(fz.peakRate, Math.hypot(Fz, Zz) / tz))), fz.raw[0] += pz, fz.raw[1] += dz, fz.turned[0] += Fz, fz.turned[1] += Zz;
          const sz = Math.abs(pz) > Xz || Math.abs(dz) > Xz,
            rz = `raw (${Hz(pz)}, ${Hz(dz)}) over ${Oz(tz)} ms, limit ${Hz(Xz)}, filter v (${Kz.toFixed(3)}, ${wz.toFixed(3)}) px/ms, at ${Oz(Ez)} ms`;
          Rz === iz ? (fz.Aq++, zz.outlier(`spike put right: ${rz} -> turned (${Hz(Fz)}, ${Hz(Zz)})`)) : sz ? (fz.pastLimit++, zz.outlier(`kept past limit: ${rz}`)) : tz > 50 && (fz.longFrames++, zz.outlier(`long frame: ${rz}, turned in full`))
        }, this.onMouseMove = zz => {
          const uz = this.tally,
            {
              movementX: bz,
              movementY: Ez
            } = zz;
          uz.events++;
          const nz = Math.max(Math.abs(bz), Math.abs(Ez));
          uz.eventMax = Math.max(uz.eventMax, nz);
          const iz = null !== document.pointerLockElement,
            lz = this.event;
          lz[0] = zz.timeStamp, lz[1] = bz, lz[2] = Ez, lz[3] = iz ? 1 : 0, this.events.push(lz), nz >= 200 && (uz.bigEvents++, this.eventOutlier(`big mousemove (${bz}, ${Ez}) at ${Oz(zz.timeStamp)} ms, lock ${iz?"yM":"free"}`))
        }, this.onLockChange = () => {
          const zz = document.pointerLockElement;
          (0, Ez.i)("look", `pointer lock ${zz?`gained (${zz.tagName.toLowerCase()})`:"lost"} at ${Oz(performance.now())} ms`)
        }, this.onLockError = () => {
          (0, Ez.i)("look", `pointer lock request failed at ${Oz(performance.now())} ms`)
        }, this.onVisibility = () => {
          (0, Ez.i)("look", `page ${document.visibilityState} at ${Oz(performance.now())} ms`)
        }, this.flush = () => {
          this.takeRecords();
          const zz = this.tally;
          if (this.tally = new pz, 0 === zz.events && 0 === zz.raw[0] && 0 === zz.raw[1] && 0 === zz.lockSkips && 0 === zz.Aq && 0 === zz.dropped) return;
          const uz = zz.looked > 0 ? zz.dtSum / zz.looked : NaN,
            bz = [`${zz.frames} frames (${zz.looked} looked, ${zz.idle} idle${"wasm"===this.client?`, ${zz.AO} carried`:""})`, `dt avg ${Oz(uz)} min ${Oz(zz.dtMin)} max ${Oz(zz.dtMax)}, ${zz.longFrames} long`, `${zz.events} mousemoves (max ${Hz(zz.eventMax)} px, ${zz.bigEvents} big)`, `raw (${Hz(zz.raw[0])}, ${Hz(zz.raw[1])}) turned (${Hz(zz.turned[0])}, ${Hz(zz.turned[1])})`, `peak ${zz.peakRate.toFixed(2)} px/ms`, `put right ${zz.Aq}, past limit ${zz.pastLimit}, lock skips ${zz.lockSkips}`, "lock " + (document.pointerLockElement ? "yM" : "free")];
          zz.dropped > 0 && bz.push(`${zz.dropped} doubled spike copies dropped`), zz.lost > 0 && bz.push(`${zz.lost} records lost`), zz.suppressed > 0 && bz.push(`${zz.suppressed} outlier lines not shown`), (0, Ez.i)("look", `1s: ${bz.join("; ")}`)
        }, this.dump = () => [`look records (${this.client}): nowMs,dtMs,rawX,rawY,turnedX,turnedY,outcome,vX,vY,limit`, ...this.records.lines(), "mousemove events: timeStamp,movementX,movementY,locked", ...this.events.lines()].join("\n")
      }
      start(zz, uz) {
        this.client = zz, this.take = uz;
        const {
          screen: bz
        } = window;
        (0, Ez.i)("look", `start: ${zz} client, dpr ${window.devicePixelRatio}, screen ${bz.width}x${bz.height}, pointer lock ${document.pointerLockElement?"yM":"free"}`), this.started || (this.started = !0, window.addEventListener("mousemove", this.onMouseMove, {
          capture: !0,
          passive: !0
        }), document.addEventListener("pointerlockchange", this.onLockChange), document.addEventListener("pointerlockerror", this.onLockError), document.addEventListener("visibilitychange", this.onVisibility), setInterval(this.flush, 1e3), (0, Ez.f)("look", this.dump))
      }
      outlier(zz) {
        const uz = this.tally;
        uz.outliers >= 20 ? uz.suppressed++ : (uz.outliers++, (0, Ez.i)("look", zz))
      }
      eventOutlier(zz) {
        const uz = this.tally;
        uz.eventLines >= 10 ? uz.suppressed++ : (uz.eventLines++, (0, Ez.i)("look", zz))
      }
      takeRecords() {
        var zz;
        const uz = null === (zz = this.take) || void 0 === zz ? void 0 : zz.call(this);
        if (uz && uz.length >= 2) {
          this.tally.lost += uz[0], this.tally.dropped += uz[1];
          for (let zz = 2; zz + 10 <= uz.length; zz += 10) this.record(uz, zz)
        }
      }
      droppedCopy() {
        this.tally.dropped++
      }
      endTake() {
        this.takeRecords(), this.take = null
      }
    }
    let Fz = null;

    function Zz(zz) {
      let uz = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
      return Fz ??= new dz, Fz.start(zz, uz), Fz.record
    }

    function Rz() {
      var zz;
      null === (zz = Fz) || void 0 === zz || zz.endTake()
    }

    function Kz() {
      var zz;
      null === (zz = Fz) || void 0 === zz || zz.droppedCopy()
    }
  },
  38326: (zz, uz, bz) => {
    bz.d(uz, {
      e: () => yu,
      h: () => gu,
      j: () => Su
    });
    var Ez = bz(3437),
      nz = bz(158),
      iz = bz(195),
      lz = bz(597),
      Mz = bz(33),
      tz = bz(2623),
      Hz = bz(3521),
      Oz = bz(3509),
      pz = bz(1212);
    const dz = new WeakMap;
    class Fz {
      constructor(zz, uz) {
        let bz = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {
          ktz: !0
        };
        this.callbacks = uz, this.options = bz, this.cuz = void 0, this.sessionId = void 0, this.vx = [], this.zHz = !1, this.SZ = !1, this.uHz = void 0, this.Xx = 0, this.hEz = 0, this.bHz = (zz, uz) => {
          if (this.SZ) return;
          const bz = Number(zz);
          this.zHz ? this.EHz(bz, uz) : this.vx.push({
            id: bz,
            payload: uz
          })
        }, this.dispose = () => {
          this.SZ || (this.SZ = !0, dz.delete(this), this.vx.length = 0, this.uHz())
        }, this.cuz = zz, this.sessionId = zz.sessionId, dz.set(this, []), this.uHz = this.nHz()
      }
      iHz(zz) {
        this.uHz(), this.cuz = zz, this.sessionId = zz.sessionId, this.Xx = 0, this.hEz = 0, this.uHz = this.nHz()
      }
      get Hx() {
        return this.hEz
      }
      nHz() {
        const zz = this.cuz.Ws("*", this.bHz);
        return this.options.ktz && this.cuz.Hr(this.dispose), zz
      }
      EHz(zz, uz) {
        try {
          (0, Hz.pc)(zz) && (uz = (0, Hz.d)(zz, Oz.gZ.from(uz)));
          const bz = dz.get(this)[zz];
          if ("function" !== typeof bz) {
            if (this.callbacks.lHz) return void this.callbacks.lHz(zz, uz);
            throw new Error(`No onMessage handler registered for message id ${zz}`)
          }
          bz(uz)
        } catch (bz) {
          this.callbacks.MHz(`Error in onMessage ${zz} with payload ${JSON.stringify(uz)}`, bz)
        } finally {
          this.Xx++
        }
      }
      tHz() {
        for (const {
            id: zz,
            payload: uz
          }
          of this.vx) {
          if (this.SZ) break;
          this.EHz(zz, uz)
        }
        this.vx.length = 0
      }
      Uuz() {
        return this.SZ
      }
      HHz() {
        if (this.zHz || this.SZ) throw new Error("Trying to getOnMessageRegistrationHandler after registration finished");
        return {
          Ws: (zz, uz) => {
            if (this.zHz || this.SZ) throw new Error("Trying to call onMessage after registration finished");
            this.Ws(zz, uz)
          },
          finishRegistration: () => {
            if (this.SZ) throw new Error("Cannot finish message registration after disposal");
            this.zHz = !0, this.tHz()
          }
        }
      }
      Ws(zz, uz) {
        var bz, Ez;
        null === (bz = (Ez = this.callbacks).OHz) || void 0 === bz || bz.call(Ez);
        const nz = dz.get(this);
        for (; zz > nz.length;) nz[nz.length] = null;
        nz[zz] = uz
      }
      send(zz, uz) {
        this.pHz(), (0, pz.D)(uz) ? this.cuz.MJ(zz, uz) : this.cuz.send(zz, uz)
      }
      pHz() {
        var zz, uz;
        (this.hEz++, 5 === Zz++) && (null === (zz = (uz = this.callbacks).OHz) || void 0 === zz || zz.call(uz), Zz = 0)
      }
      pw() {
        this.dispose(), this.cuz.pw()
      }
      leave() {
        this.dispose(), this.cuz.leave()
      }
    }
    let Zz = 0;
    var Rz = bz(3460);
    class Kz extends Fz {
      constructor(zz) {
        super(zz, {
          OHz: () => {
            (0, Mz.k)(!0) && (0, Ez.Qv)()
          },
          MHz: (zz, uz) => {
            var bz;
            null === (bz = (0, tz.g)()) || void 0 === bz || bz.DR(zz, uz)
          }
        }, {
          ktz: !1
        }), (0, Rz.c)(zz)
      }
      Ix(zz, uz) {
        return !!(0, Rz.h)((0, Rz.b)(), this.cuz, zz, uz) && (this.pHz(), !0)
      }
      iHz(zz) {
        this.dHz(), super.iHz(zz), (0, Rz.c)(zz)
      }
      pw() {
        super.pw(), this.dHz()
      }
      dHz() {
        this.cuz.Kw.LZ.rA = void 0
      }
    }
    var wz = bz(22),
      Xz = bz(1892),
      fz = bz(1673),
      sz = bz(35945);

    function rz(zz, uz, bz, Ez, nz) {
      let iz = arguments.length > 5 && void 0 !== arguments[5] && arguments[5];
      if (!zz.zN.mzz(zz.iG)) return console.log("Got resync inven but don't have inven component"), void uz.acknowledge(Ez);
      iz && console.error("Had to sync inven"), uz.L_(Ez, nz) && bz.sK("chestToggleFromServer", !1, !0), bz.sK("syncedInvenFromServer")
    }
    var oz = bz(38334),
      Nz = bz(38342),
      vz = bz(37455),
      xz = bz(37271),
      Jz = bz(588),
      Az = bz(37807);

    function Tz(zz, uz, bz) {
      const Ez = function(zz) {
          const uz = new Int32Array(zz.length * Az.d);
          return zz.forEach(((zz, bz) => {
            const Ez = bz * Az.d;
            if (4 === zz.length) {
              const [bz, nz, iz, lz] = zz;
              uz.set([bz, nz, iz, bz, nz, iz, lz], Ez)
            } else {
              const [bz, nz, iz, lz, Mz, tz, Hz] = zz;
              uz.set([bz, iz, Mz, nz, lz, tz, Hz], Ez)
            }
          })), uz
        }(bz),
        nz = (uz, bz, Ez, nz) => {
          zz.setBlockNoMulti(uz, bz, Ez, nz, !0)
        };
      zz.client.gameRecorder.isCapturing() ? (0, Az.nb)(Ez, (0, Az.kb)(Ez), nz) : zz.Gd.xd.bq(Ez, {
        Fq: nz,
        isHookId: uz => zz.blockChangeHasHooks(uz),
        watched: () => function(zz, uz, bz) {
          const Ez = [],
            nz = (zz, uz, bz) => {
              Ez.push(zz, uz, bz)
            },
            iz = new Set;
          for (let lz = 0; lz < bz.length; lz += Az.d)
            for (let uz = (0, Jz.P)(bz[lz]); uz <= (0, Jz.P)(bz[lz + 3]); uz++)
              for (let Ez = (0, Jz.P)(bz[lz + 1]); Ez <= (0, Jz.P)(bz[lz + 4]); Ez++)
                for (let Mz = (0, Jz.P)(bz[lz + 2]); Mz <= (0, Jz.P)(bz[lz + 5]); Mz++) {
                  const bz = `${uz}|${Ez}|${Mz}`;
                  iz.has(bz) || (iz.add(bz), zz.blockDataOwner.forEachDataCell(uz, Ez, Mz, nz))
                }
          return uz.forEachCell(nz), Int32Array.from(Ez)
        }(zz, uz, Ez)
      }), zz.Gd.B3()
    }
    var Lz = bz(36581),
      Pz = bz(38348),
      Gz = bz(38351),
      az = bz(994),
      Vz = bz(1901);
    var mz = bz(4274);

    function qz(zz) {
      const uz = zz.xd;
      let bz = 0,
        nz = -1,
        lz = -1 / 0,
        Mz = null,
        tz = !0;
      const Oz = () => {
        if (++bz % 10 !== 0) return;
        const Oz = (0, Ez.getLastReceivedPacketId)();
        if (Oz <= nz) return;
        const [pz, dz, Fz] = zz.zN.Gs(zz.iG), Zz = ! function(zz) {
          var uz;
          let bz = null === (uz = zz.zN.suz(zz.iG)) || void 0 === uz ? void 0 : uz.VZ;
          if (void 0 === bz) return !1;
          const Ez = new Set;
          for (; void 0 !== bz && !Ez.has(bz);) {
            var nz;
            Ez.add(bz);
            const uz = zz.zN.getState(bz, "smoothToServerPos"),
              iz = Array.isArray(uz) ? null : null === uz || void 0 === uz ? void 0 : uz.serverPosition;
            if (iz) {
              const uz = zz.zN.Gs(bz);
              if (Math.abs(uz[0] - iz[0]) > 10 || Math.abs(uz[1] - iz[1]) > 10 || Math.abs(uz[2] - iz[2]) > 10) return !0
            }
            bz = null === (nz = zz.zN.suz(bz)) || void 0 === nz ? void 0 : nz.VZ
          }
          return !1
        }(zz) && function(zz, uz, bz, Ez) {
          const nz = iz.e.IZ;
          for (let iz = 0; iz < zz.length; iz++) {
            const lz = zz[iz];
            if (!(0, mz.h)(uz, bz, Ez, lz[0] * nz, lz[1] * nz, lz[2] * nz)) return !1
          }
          return !0
        }(uz.fK.yZ, pz, dz, Fz), Rz = null === Mz || Math.abs(pz - Mz[0]) > 8 || Math.abs(dz - Mz[1]) > 8 || Math.abs(Fz - Mz[2]) > 8, Kz = !tz || Rz || performance.now() - lz >= 1e4;
        tz = Zz, Zz && Kz && (nz = Oz, lz = performance.now(), Mz = [pz, dz, Fz], (0, Ez.sendColyMessage)(Hz.Bg, {
          yH: Oz
        }))
      };
      return zz.on("sd", Oz), () => {
        zz.off("sd", Oz)
      }
    }
    var hz = bz(36197),
      Uz = bz(332),
      cz = bz.n(Uz),
      gz = bz(6204),
      Sz = bz(37493),
      yz = bz(37252),
      Dz = bz(37232),
      Qz = bz(4286),
      Wz = bz(37522),
      ez = bz(37343),
      jz = bz(36854),
      Iz = bz(37139),
      Bz = bz(38353),
      Cz = bz(36188),
      Yz = bz(36191),
      kz = bz(38361),
      zu = bz(38364),
      uu = bz(3398),
      bu = bz(1482),
      Eu = bz(2614),
      nu = bz(2709),
      iu = bz(37662),
      lu = bz(36500),
      Mu = bz(4540),
      tu = bz(38407),
      Hu = bz(37512),
      Ou = bz(4018),
      pu = bz(36577),
      du = bz(36677),
      Fu = bz(37525),
      Zu = bz(38369),
      Ru = bz(38381),
      Ku = bz(36852);
    class wu {
      constructor(zz, uz, bz, Ez) {
        this.gameNameWithVariation = zz, this.Gd = bz, this.connectionResume = Ez, this.stateReplicationHandler = void 0, this.stopChunkReports = () => {}, this.replayResume = null, this.stateReplicationHandler = new Ru.c(uz, this.Gd)
      }
      setupStateReplicationHandlers() {
        this.stateReplicationHandler.setup(), (0, Ez.onGameResetOnce)((() => {
          this.stateReplicationHandler.dispose()
        }))
      }
      iHz(zz) {
        this.stateReplicationHandler.dispose(), this.stateReplicationHandler = new Ru.c(zz, this.Gd), this.stateReplicationHandler.setup()
      }
      clearBlockRules() {
        const zz = this.Gd.xd;
        zz.Tuz = new Set, zz.Guz = new Set, zz.Luz = new Set, zz.auz = new Set, zz.Puz = [], zz.Vuz = [], zz.YV = new Set, zz.ul = [], zz.Om = []
      }
      clearUiRequestsAndQTEs() {
        Mu.d.reset(), (0, Nz.c)()
      }
      startChunkReports() {
        const zz = function(zz) {
            let uz = null,
              bz = -1 / 0,
              nz = null;
            const iz = () => {
                nz = null;
                const iz = Math.ceil(zz.KJ[0]),
                  lz = Math.ceil(zz.KJ[1]);
                uz && uz[0] === iz && uz[1] === lz || (uz = [iz, lz], bz = performance.now(), (0, Ez.sendColyMessage)(Hz.yg, {
                  xl: iz,
                  Jl: lz
                }))
              },
              lz = () => {
                null === nz && (nz = setTimeout(iz, Math.max(0, bz + 250 - performance.now())))
              };
            return iz(), zz.on("addRemoveDistanceChanged", lz), () => {
              zz.off("addRemoveDistanceChanged", lz), null !== nz && (clearTimeout(nz), nz = null)
            }
          }(this.Gd.xd),
          uz = qz(this.Gd);
        this.stopChunkReports = () => {
          zz(), uz()
        }
      }
      restartChunkStreaming() {
        (0, Iz.i)(this.Gd, (0, tz.d)().recentChunkEdits.chunksEditedSince(this.connectionResume.getDroppedAt() - Bz.c)), this.startChunkReports()
      }
      setupOnMessageListeners(zz, uz) {
        const bz = this.Gd,
          nz = this.gameNameWithVariation;
        zz.Ws(Hz.Ac, (zz => {
          let {
            lE: uz,
            ME: Ez,
            tE: nz,
            HE: iz,
            OE: lz,
            pE: Mz,
            dE: tz,
            FE: Hz,
            ZE: Oz
          } = zz;
          if (!bz.zN.U1(uz, "itemState")) return void(0, yz.n)(bz, uz, [lz, Mz, tz], Ez, {
            amount: nz,
            attributes: JSON.parse(iz),
            FE: Hz,
            size: Oz
          });
          const pz = bz.zN.getState(uz, "itemState");
          pz.amount = nz, pz.FE = Hz, pz.creationTime = Date.now(), (0, Dz.setServerPosition)(bz.zN.getState(uz, "smoothToServerPos"), lz, Mz, tz)
        })), zz.Ws(Hz.jb, (zz => {
          (0, Lz.b)(bz).setCantPickUp(zz, !0), bz.zN.U1(zz, "itemState") && (bz.zN.getState(zz, "itemState").FE = !0)
        })), zz.Ws(Hz.Xd, (zz => {
          (0, Lz.b)(bz).setCantPickUp(zz, !1), bz.zN.U1(zz, "itemState") && (bz.zN.getState(zz, "itemState").FE = !1)
        })), zz.Ws(Hz.cd, (zz => {
          Xz.b.applyNewClientOptions(zz)
        })), zz.Ws(Hz.ed, (zz => {
          let {
            eId: uz,
            settings: Ez
          } = zz;
          (0, du.d)(uz);
          for (const bz in Ez)(0, du.c)(uz, bz, Ez[bz]);
          if ("canSee" in Ez && bz.zN.U1(uz, "hidingMeshManager")) {
            const zz = bz.zN.getState(uz, "hidingMeshManager");
            zz.canSee = (0, Fu.b)("canSee", Ez.canSee), zz._forceUpdate = !0
          }
        })), zz.Ws(Hz.mf, (zz => {
          let {
            Ob: uz,
            pb: nz,
            Fb: iz,
            Zb: lz
          } = zz;
          const Mz = [nz, iz, lz];
          bz.zN.setPosition(bz.iG, Mz), (0, Ez.sendColyMessage)(Hz.dh, {
            SO: uz,
            yO: Qz.d
          }), wz.k.sK("localPlayerTeleported", {
            pos: Mz,
            isCorrection: !1
          })
        })), zz.Ws(Hz.pd, (zz => {
          let {
            sn: uz,
            rn: bz,
            Nn: Ez,
            vn: nz
          } = zz;
          this.stateReplicationHandler.setUpIfQueued(uz);
          const iz = [bz, Ez, nz];
          wz.k.sK(`otherPlayerTeleported|${uz}`, {
            pos: iz
          })
        })), zz.Ws(Hz.Dd, (zz => {
          let {
            en: uz,
            jn: nz,
            Bn: iz,
            Cn: lz,
            Yn: Mz,
            kn: tz,
            zi: Oz,
            bi: pz,
            ui: dz,
            ii: Fz
          } = zz;
          const Zz = [nz, iz, lz];
          bz.zN.setPosition(bz.iG, Zz);
          const Rz = bz.zN.tzz(bz.iG),
            Kz = bz.zN.Km(bz.iG);
          cz().set(Kz.JV, 0, 0, 0), cz().set(Kz.GV, 0, 0, 0), cz().set(Kz.ht, Mz, tz, Oz), Kz.VV(), Rz._flying = null !== Fz, Fz ? (Rz.flyAccel.li = Fz.li, Rz.flyAccel.Mi = Fz.Mi) : Rz.flyAccel.reset(), pz && Rz.movementType === gz.l.GLIDING && (Rz.Ei = pz.Ei, cz().copy(Rz.ni, pz.ni)), (0, Ez.sendColyMessage)(Hz.dh, {
            SO: uz,
            yO: Qz.d
          }), wz.k.sK("localPlayerTeleported", {
            pos: Zz,
            isCorrection: !0
          })
        }));

        function iz() {
          return bz.zN.hzz(bz.iG)
        }
        zz.Ws(Hz.ub, (zz => {
          let {
            chatMsgId: uz,
            content: bz,
            chatterEId: Ez
          } = zz;
          wz.k.sK("chat", {
            serverChatMsgId: uz,
            content: bz,
            chatterEId: Ez
          }, !0)
        })), zz.Ws(Hz.ud, (zz => {
          Eu.c.onReceiveColyseusPing(zz)
        })), zz.Ws(Hz.Ke, (zz => {
          let {
            key: uz,
            value: bz
          } = zz;
          (0, fz.setCookie)(nz, uz, bz)
        })), zz.Ws(Hz.Se, (zz => {
          wz.k.sK("setDiscordReportKey", zz)
        })), (0, Ez.onGameResetOnce)((() => {
          this.stopChunkReports()
        })), zz.Ws(Hz.qc, (uz => {
          const {
            Du: nz,
            Qu: iz
          } = uz;
          if ((0, Ez.setAdjustment)(iz), this.connectionResume.onInitialInfo(uz.Wu, uz.eu), Ez.offlineInputReplay.Zx(uz.ju), this.connectionResume.isResuming()) {
            console.log("Resumed the connection as eId", nz);
            try {
              null === uz.Iu && (0, tz.d)().client.inventoryPrediction.dropPending(), this.stopChunkReports(), this.clearBlockRules(), Xz.b.apply({
                shopInfo: null,
                _shopVersion: Vz.d
              });
              const Ez = bz.zN.Uzz(bz.iG);
              Ez.Ub && (Ez.chestClosed(), wz.k.sK("chestToggleFromServer", !1, !0)), this.clearUiRequestsAndQTEs(), wz.k.sK("initInfoReceived", zz)
            } finally {
              const zz = null === uz.Iu ? null : {
                sync: null,
                endSeq: null
              };
              this.replayResume = zz, this.connectionResume.onResumeInitialInfo(uz.Iu, (() => {
                zz.endSeq = (0, tz.d)().client.inventoryPrediction.lastActionSeq
              })), null === zz && this.restartChunkStreaming()
            }
          } else console.log("Local client is eId", nz), wz.k.sK("loadingScreenState", "loadingPage:loadingWorld"), bz.M6 = nz, bz.zN.U1(bz.iG, bz.zN.names.entityName) && bz.zN.fL(bz.iG, bz.zN.names.entityName), (0, tz.d)().setEntityName(bz.M6, (0, tz.d)().getRawEntityName(bz.iG)), bz.nG[bz.M6] = {}, bz.zN.wL(bz.iG, bz.zN.names.entityName), wz.k.sK("initInfoReceived", zz), this.startChunkReports(), lz.client.onServerConnectionFinalised()
        })), zz.Ws(Hz.pe, (() => {
          this.connectionResume.isResuming() ? this.connectionResume.onResumed((() => {
            const zz = this.replayResume;
            if (this.replayResume = null, !zz) return;
            this.restartChunkStreaming();
            const {
              inventoryPrediction: uz
            } = (0, tz.d)().client, {
              sync: nz
            } = zz, iz = new Set(Ez.offlineInputReplay.takeDroppedActions());
            if (nz) {
              var lz;
              const Ez = null !== (lz = zz.endSeq) && void 0 !== lz ? lz : uz.lastActionSeq;
              uz.forget((zz => zz > nz.Db && zz <= Ez || iz.has(zz))), rz(bz, uz, wz.k, nz.Db, nz.load)
            } else uz.dropPending(), uz.askForSnapshot()
          })) : console.warn("ResumeComplete arrived without a resume")
        })), zz.Ws(Hz.pf, (zz => {
          wz.k.sK("TopRightHelper", zz, !0)
        })), zz.Ws(Hz.Gd, (zz => {
          let {
            type: uz,
            location1: bz,
            location2: Ez,
            location3: nz,
            score: iz
          } = zz;
          (0, nu.A)({
            type: uz,
            location1: bz,
            location2: Ez,
            location3: nz,
            score: iz
          })
        })), zz.Ws(Hz.me, (zz => {
          let {
            type: uz,
            resourceType: bz,
            amount: Ez,
            category: nz,
            itemName: iz
          } = zz;
          (0, nu.B)({
            type: uz,
            resourceType: bz,
            amount: Ez,
            category: nz,
            itemName: iz
          })
        })), zz.Ws(Hz.Y, (zz => {
          bz.xd.Tuz.add(zz), bz.xd.Guz.delete(zz)
        })), zz.Ws(Hz.eb, (zz => {
          bz.xd.Guz.add(zz), bz.xd.Tuz.delete(zz)
        })), zz.Ws(Hz.$d, (zz => {
          bz.xd.Guz.delete(zz), bz.xd.Tuz.delete(zz)
        })), zz.Ws(Hz.cb, (zz => {
          bz.xd.Luz.add(zz), bz.xd.auz.delete(zz)
        })), zz.Ws(Hz.ib, (zz => {
          bz.xd.auz.add(zz), bz.xd.Luz.delete(zz)
        })), zz.Ws(Hz.ee, (zz => {
          bz.xd.auz.delete(zz), bz.xd.Luz.delete(zz)
        })), zz.Ws(Hz._, (zz => {
          (0, pz.lb)(zz, bz.xd.Vuz), (0, pz.lb)(zz, bz.xd.Puz), bz.xd.Puz.push(zz)
        })), zz.Ws(Hz.fb, (zz => {
          (0, pz.lb)(zz, bz.xd.Puz), (0, pz.lb)(zz, bz.xd.Vuz), bz.xd.Vuz.push(zz)
        })), zz.Ws(Hz.ae, (zz => {
          (0, pz.lb)(zz, bz.xd.Puz), (0, pz.lb)(zz, bz.xd.Vuz)
        })), zz.Ws(Hz.Gf, (zz => {
          let {
            uE: uz,
            bE: Ez
          } = zz;
          Ez ? bz.xd.YV.delete(uz) : bz.xd.YV.add(uz)
        })), zz.Ws(Hz.Ff, (zz => {
          let {
            ul: uz,
            El: Ez
          } = zz;
          lz.updateWalkThroughRect(bz.iG, uz, Ez)
        })), (0, Ez.onGameResetOnce)((() => {
          this.clearBlockRules()
        })), zz.Ws(Hz.lf, (zz => {
          (0, oz.b)(zz)
        })), zz.Ws(Hz.jc, (zz => {
          vz.b.applyServerUpdate(zz)
        })), zz.Ws(Hz.lb, (zz => {
          lz.applyServerBlocks((() => {
            ! function(zz, uz) {
              for (const {
                  nl: bz,
                  il: Ez
                }
                of uz) {
                const uz = xz.b[Ez];
                if (uz) {
                  const {
                    compX: Ez,
                    compY: nz,
                    compZ: iz,
                    mainMultiblock: lz
                  } = uz;
                  zz.qJ(bz[0] - Ez, bz[1] - nz, bz[2] - iz, lz)
                }
              }
              for (const {
                  nl: bz,
                  il: Ez,
                  Ml: nz
                }
                of uz) zz.setBlockNoMulti(bz[0], bz[1], bz[2], Ez, !0), zz.blockDataOwner.setBlockData(bz[0], bz[1], bz[2], null === nz ? void 0 : JSON.parse(nz)), zz.blockAdded(bz[0], bz[1], bz[2], Ez)
            }(lz, zz)
          })), wz.k.sK("changeBlockFail", zz), lz.client.triggerGameCallback("onChangeBlockFail", zz), wz.k.sK("EditBoard", {
            pos: null
          }), wz.k.sK("EditCodeBlock", {
            pos: null,
            canChangePos: null
          })
        })), zz.Ws(Hz.td, (zz => {
          let {
            pickUpItems: uz,
            pickUpAckSeq: bz
          } = zz;
          for (const {
              name: Ez,
              amount: nz,
              attributes: lz
            }
            of uz) iz().pickUpItem({
            name: Ez,
            amount: nz,
            typeObj: yz.F[Ez],
            attributes: lz
          });
          (0, tz.d)().client.inventoryPrediction.serverChangeApplied(bz)
        })), zz.Ws(Hz.Ve, (zz => {
          let {
            index: uz,
            name: Ez,
            amount: nz,
            attributes: iz,
            setSlotAckSeq: lz
          } = zz;
          const Mz = bz.zN.Uzz(bz.iG);
          (uz < Mz.playerInventory.numSlots || Mz.Ub || Mz.inCreative) && Mz.setItemSlot(uz, Ez, nz, iz), (0, tz.d)().client.inventoryPrediction.serverChangeApplied(lz)
        })), zz.Ws(Hz.jf, (zz => {
          let {
            Vb: uz,
            yb: Ez,
            Db: nz
          } = zz;
          const {
            inventoryPrediction: iz
          } = (0, tz.d)().client, lz = () => {
            bz.zN.Uzz(bz.iG).loadFromString(uz)
          };
          this.replayResume && (this.replayResume.sync = {
            Db: nz,
            load: lz
          }), rz(bz, iz, wz.k, nz, lz, Ez)
        })), zz.Ws(Hz.wc, (zz => {
          (0, tz.d)().client.inventoryPrediction.acknowledge(zz)
        })), zz.Ws(Hz.C, (zz => {
          let {
            xi: uz,
            Ji: bz,
            Ai: Ez,
            Ti: nz
          } = zz;
          (0, tz.d)().client.itemDropPrediction.onActionItemDrops(uz, bz, Ez, nz)
        })), zz.Ws(Hz.Bb, (zz => {
          iz().clearInventory(), (0, tz.d)().client.inventoryPrediction.serverChangeApplied(zz)
        })), zz.Ws(Hz.Lc, (zz => {
          let {
            leaveEventType: uz,
            category: bz,
            subCategory: Ez,
            value: nz
          } = zz;
          (0, nu.J)({
            leaveEventType: uz,
            category: bz,
            subCategory: Ez,
            value: nz
          })
        })), zz.Ws(Hz.Ob, (zz => {
          let {
            cat1: uz,
            cat2: bz,
            cat3: Ez,
            value: nz
          } = zz;
          (0, nu.s)({
            cat1: uz,
            cat2: bz,
            cat3: Ez,
            value: nz
          })
        }));
        const lz = (0, tz.d)();
        zz.Ws(Hz.Jb, (zz => {
          lz.applyServerBlocks((() => {
            Tz(lz, vz.b, zz)
          }))
        })), zz.Ws(Hz.Ze, (zz => {
          wz.k.sK("setSelectedInventorySlotI", zz, !0)
        })), zz.Ws(Hz.Jc, (zz => {
          let {
            category: uz,
            timeframe: bz,
            data: Ez
          } = zz;
          wz.k.sK("leaderboardResponse", {
            category: uz,
            timeframe: bz,
            data: Ez
          })
        })), zz.Ws(Hz.U, (zz => {
          let {
            Xi: uz,
            si: bz
          } = zz;
          this.stateReplicationHandler.setUpIfQueued(uz), uz = (0, hz.e)(uz), (0, tz.d)().client.gameRecorder.recordBulletShot(uz, bz), wz.k.sK(`bulletShot|${uz}`, {
            bulletDirections: bz
          })
        })), zz.Ws(Hz.lc, (zz => {
          let {
            nE: uz,
            iE: bz
          } = zz;
          wz.k.sK("damagedByOtherPlayer", {
            nE: uz,
            direction: bz
          }, !0)
        })), zz.Ws(Hz.Cd, (zz => {
          wz.k.sK("playerKilled", zz, !0), (0, tz.d)().client.gameRecorder.recordPlayerKilled(zz.deadEId, zz.killerEId, zz.withItem, zz.killstreak)
        })), zz.Ws(Hz.Sb, (zz => {
          wz.k.sK("customKillfeed", zz, !0), (0, tz.d)().client.gameRecorder.recordCustomKillfeed(zz.killer, zz.victim, zz.withItem)
        })), zz.Ws(Hz.Id, (zz => {
          let {
            tb: uz,
            Hb: Ez
          } = zz;
          this.stateReplicationHandler.setUpIfQueued(uz);
          const nz = bz.zN.luz(uz);
          null !== nz && void 0 !== nz && nz.isGun() && nz.reload(Date.now(), Ez)
        })), zz.Ws(Hz.gf, (() => {
          wz.k.sK("showShopTutorial", null, !0)
        })), zz.Ws(Hz.Fd, (zz => {
          wz.k.sK("progressBarUpdate", zz, !0)
        })), zz.Ws(Hz.tc, (zz => {
          wz.k.sK("middleScreenBarInitiate", {
            duration: zz.RE,
            KE: zz.KE,
            horizBarRemOffset: zz.wE
          }, !0)
        })), zz.Ws(Hz.Qd, (() => {
          wz.k.sK("middleScreenBarRemove", !0)
        })), zz.Ws(Hz.ve, (zz => {
          let {
            ib: uz,
            Mb: Ez
          } = zz;
          const nz = Ez ? (0, Hu.e)(bz, Ez) : void 0;
          wz.k.sK("sendHitmarker", {
            ib: uz,
            screenPos: nz
          }, !0)
        })), zz.Ws(Hz.Oe, (zz => {
          let {
            id: uz,
            position: bz,
            style: Ez,
            Zi: nz,
            Ki: iz
          } = zz;
          wz.k.sK("setDirectionArrow", {
            id: uz,
            position: bz,
            style: Ez,
            text: (0, Hz.r)(nz),
            Ki: iz
          }, !0)
        })), zz.Ws(Hz.Ab, (zz => {
          let {
            id: uz
          } = zz;
          wz.k.sK("clearDirectionArrow", {
            id: uz
          }, !0)
        })), zz.Ws(Hz.G, (zz => {
          let {
            Li: uz,
            Pi: Ez,
            animationScript: nz,
            Gi: iz,
            ai: lz,
            Vi: Mz,
            mi: Hz
          } = zz;
          uz = (0, hz.e)(uz);
          const Oz = null === nz && null !== Mz ? (0, Pz.f)(Mz, Hz) : nz;
          (0, tz.d)().client.gameRecorder.recordAnimateEntity(uz, Ez, Oz, iz, lz), (0, Lz.b)(bz).animations.animateEntity(uz, Ez, nz, iz, lz, Mz, Hz), null !== nz || uz === bz.iG && Ez === pu.g.Emote && (0, tz.d)().client.cameraController.endTemporaryThirdPerson()
        })), zz.Ws(Hz.yf, (zz => {
          let {
            Bb: uz,
            Cb: bz
          } = zz;
          if (lz.nS(uz[0], uz[1], uz[2])) {
            const zz = (0, tz.d)().BX(uz[0], uz[1], uz[2]);
            (0, tz.d)().updateMailboxContents(uz[0], uz[1], uz[2], zz, bz)
          }
        })), zz.Ws(Hz.wb, (zz => {
          let {
            tl: uz,
            Hl: Ez,
            Ol: nz,
            pl: iz,
            dl: lz,
            Fl: Mz,
            Zl: Hz,
            Rl: Oz
          } = zz;
          const pz = bz.zN.Uzz(bz.iG);
          if (Mz) {
            const {
              qb: zz,
              Db: uz
            } = Oz;
            return (0, tz.d)().client.inventoryPrediction.L_(uz, (() => {
              pz.chestRefreshed(Ez, nz, iz, Hz, zz)
            })) && wz.k.sK("chestToggleFromServer", !1, !0), void wz.k.sK("chestRefreshedFromServer")
          }(uz || pz.Ub) && (uz ? (pz.chestOpened(Ez, nz, iz, lz, Hz), null !== lz && (0, tz.d)().client.ironChestPasskeyCache.onChestOpened(iz, lz)) : pz.chestClosed(), wz.k.sK("chestToggleFromServer", uz, !0))
        })), zz.Ws(Hz.Wb, (zz => {
          let {
            craftingRecipeItemName: uz,
            recipesForItem: Ez
          } = zz;
          uz ? lz.craftingManager.editRecipesForPlayer(bz.iG, uz, Ez) : lz.craftingManager.resetAllPlayerRecipes(bz.iG), wz.k.sK("craftingRecipesEdited", {
            itemName: uz,
            recipesForItem: Ez
          })
        })), zz.Ws(Hz._e, (zz => {
          let {
            vehicleEId: uz,
            overrides: bz
          } = zz;
          (0, tz.d)().applyRiddenVehicleSettingOverrides(uz, bz)
        })), zz.Ws(Hz.Bf, (zz => {
          let {
            wu: uz,
            Xu: Ez,
            fu: nz
          } = zz;
          const iz = bz.zN.tzz(bz.iG).physicsState.type === gz.m.SLEEPING && uz === gz.m.DEFAULT;
          (0, tz.d)().updatePositionAndPhysics(bz.iG, {
            type: uz,
            tier: Ez
          }, !0, nz), iz && (0, tz.d)().updateHeldVehicleStatus()
        })), zz.Ws(Hz.pb, (zz => {
          let {
            Oi: uz,
            Fi: Ez
          } = zz;
          bz.zN.Vzz(bz.iG).setPose(uz, Ez)
        })), zz.Ws(Hz.se, (zz => {
          (0, Zu.e)(zz)
        })), zz.Ws(Hz.zd, (zz => {
          for (const uz of zz)(0, Wz.B)(uz);
          wz.k.sK("playerCosmeticsUpdated", zz, !0)
        })), zz.Ws(Hz.J, (zz => {
          for (const uz of zz)(0, lu.g)(bz, uz)
        })), zz.Ws(Hz.Tc, (zz => {
          let {
            Tn: uz,
            Ln: Ez,
            Gn: nz,
            Vn: iz,
            mn: Mz,
            qn: tz,
            hn: Hz
          } = zz;
          this.stateReplicationHandler.setUpIfQueued(uz), uz = (0, hz.e)(uz);
          const Oz = bz.zN.kzz(uz);
          if (Oz && (Oz.lastHurtTime = performance.now()), (0, Sz.playRigHurt)(bz, uz, tz), wz.k.sK("lifeformHurt", {
              eId: uz,
              hn: Hz
            }), Ez) {
            const zz = (0, Hu.e)(bz, Ez.Mb);
            wz.k.sK("yourAttackHit", {
              ib: iz,
              screenPos: zz,
              hitSelf: uz === bz.iG
            })
          }
          uz === bz.iG && (lz.shakePlayerCamera(uz, Mz / 40, 200), wz.k.sK("closeShopOnDamaged", null), wz.k.sK("damagedByOtherPlayer", {
            nE: null,
            direction: tz,
            mn: Mz
          }, !0));
          const pz = bz.zN.Gs(uz);
          if (pz && (nz || iz)) {
            const zz = [pz[0], pz[1] + 1, pz[2]];
            nz && (0, ez.i)(bz, ez.w, zz, 15), iz && (0, ez.i)(bz, ez.o, zz, 10)
          }
        })), zz.Ws(Hz.Pc, (zz => {
          let {
            qu: uz,
            Uu: Ez,
            cu: nz
          } = zz;
          (0, Lz.b)(bz).setHealthFrac((0, hz.e)(uz), nz), wz.k.sK("lifeformHealthChanged", {
            eId: (0, hz.e)(uz),
            Uu: Ez,
            cu: nz
          })
        })), zz.Ws(Hz.N, (zz => {
          let {
            oi: uz,
            Ni: Ez
          } = zz;
          (0, tz.d)().playerAttacked(bz.iG, uz, Ez)
        })), zz.Ws(Hz.Fc, (zz => {
          (0, tz.d)().client.leaveGameUnwanted({
            reason: zz,
            requiresRefresh: !1,
            canReconnect: !1,
            automaticallyReconnect: !1
          }), (0, bu.navigatePreserveSearch)("/")
        })), zz.Ws(Hz.Od, (zz => {
          let {
            gu: uz,
            Su: bz,
            yu: Ez
          } = zz;
          iz().removeItemName(uz, bz), (0, tz.d)().client.inventoryPrediction.serverChangeApplied(Ez)
        })), zz.Ws(Hz.Ee, (zz => {
          const {
            wi: uz,
            wuz: Ez
          } = (0, jz.f)([zz[0], zz[1], zz[2]]);
          Ku.c.setLookDirection(bz, uz, Ez), (0, Iz.r)(uz, Ez);
          const nz = bz.zN.Vzz(bz.iG);
          nz && (nz.heading = uz)
        })), zz.Ws(Hz.He, (zz => {
          lz.client.cameraController.setCameraZoom(zz)
        })), zz.Ws(Hz.df, (zz => {
          let {
            ku: uz,
            zb: Ez
          } = zz;
          lz.shakePlayerCamera(bz.iG, uz, Ez)
        })), zz.Ws(Hz.Lb, (zz => {
          (0, uu.onCosmeticPackGranted)(zz)
        })), zz.Ws(Hz.we, (zz => {
          wz.k.sK("serverUpdating", Date.now() + zz, !0)
        })), zz.Ws(Hz.$c, Gz.c), zz.Ws(Hz.kd, (zz => {
          let {
            id: uz,
            Lz: bz
          } = zz;
          const {
            type: nz,
            params: iz
          } = (0, tu.e)(bz), lz = {
            ...iz
          };
          for (const Ez of tu.b) Ez in lz && lz[Ez] && (lz[Ez] = (0, Hz.r)(lz[Ez]));
          Mu.d.queueQTE(uz, nz, lz).getResult().then((zz => {
            "boolean" === typeof zz && (0, Ez.sendColyMessage)(Hz.ui, {
              qteId: uz,
              qteResponse: zz
            })
          }))
        })), zz.Ws(Hz.Sd, (zz => {
          Mu.d.cancelQTE(zz)
        })), (0, Ez.onGameResetOnce)((() => {
          Mu.d.reset()
        })), zz.Ws(Hz.md, (zz => {
          let {
            id: uz,
            clientParameters: bz
          } = zz;
          (0, Nz.e)(uz, bz)
        })), zz.Ws(Hz.Wd, (zz => {
          (0, Nz.i)(zz)
        })), zz.Ws(Hz.vf, (zz => {
          let {
            text: uz,
            id: bz
          } = zz;
          (0, Nz.m)(bz, uz, (zz => {
            (0, Ez.sendColyMessage)(Hz.Wj, {
              QM: bz,
              WM: zz,
              eM: 5
            })
          }))
        })), zz.Ws(Hz.Yb, (zz => {
          let {
            tu: uz,
            Hu: bz,
            Ou: Ez,
            pu: nz,
            Fu: iz,
            Zu: lz
          } = zz;
          uz = (0, hz.e)(uz), (0, tz.d)().client.updateEffect(uz, bz, {
            displayName: Ez,
            icon: nz,
            duration: iz,
            level: lz
          })
        })), zz.Ws(Hz.Ld, (zz => {
          let {
            tu: uz,
            Hu: bz
          } = zz;
          uz = (0, hz.e)(uz), (0, tz.d)().client.removeEffect(uz, bz)
        })), zz.Ws(Hz.Ec, (zz => {
          bz.zN.Vzz(bz.iG).jumpMultiplier.setMultiplierType("jumpEffectAmount", zz)
        })), zz.Ws(Hz.tf, (zz => {
          wz.k.sK("ttbEffectMultiplier", zz)
        })), (0, Ez.onGameResetOnce)((() => {
          bz.zN.Vzz(bz.iG).jumpMultiplier.setMultiplierType("jumpEffectAmount", 1)
        })), zz.Ws(Hz.id, (zz => {
          (0, ez.l)(bz, (0, pz.r)(zz))
        })), zz.Ws(Hz.jd, (zz => {
          Ou.e[zz.Hi] ? (0, ez.l)(bz, {
            ...Ou.e[zz.Hi],
            pos1: zz.pos1,
            pos2: zz.pos2
          }) : console.error(`Unknown preset id: ${zz.Hi}`)
        })), zz.Ws(Hz.wd, (zz => {
          var uz, bz;
          let {
            cn: Ez,
            gn: nz,
            Sn: iz,
            yn: lz
          } = zz, {
            Qn: Mz,
            Wn: Hz
          } = null !== lz && void 0 !== lz ? lz : {};
          const {
            Dn: Oz
          } = null !== lz && void 0 !== lz ? lz : {};
          Mz = null !== (uz = Mz) && void 0 !== uz ? uz : void 0, Hz = null !== (bz = Hz) && void 0 !== bz ? bz : void 0, "string" === typeof Oz && this.stateReplicationHandler.setUpIfQueued(Oz), (0, tz.d)().client.gameRecorder.recordPlaySound(Ez, nz, iz, lz), Cz.d.play((0, Yz.d)(Ez), nz, Oz, Mz, Hz).rate(iz)
        })), zz.Ws(Hz.Ae, (zz => {
          let {
            pos: uz,
            data: bz
          } = zz;
          lz.blockDataOwner.setBlockData(uz[0], uz[1], uz[2], bz), lz.blockAdded(uz[0], uz[1], uz[2], lz.BX(uz[0], uz[1], uz[2]))
        })), zz.Ws(Hz.sd, (zz => {
          let {
            info: uz
          } = zz;
          wz.k.sK("overShopInfo", uz, !0)
        })), zz.Ws(Hz.fc, (zz => {
          let {
            Ru: Ez,
            Ku: nz
          } = zz;
          uz.openShop(bz.iG, Ez, nz)
        })), zz.Ws(Hz.H, (zz => {
          bz.zN.Km(bz.iG).applyImpulse(zz)
        })), zz.Ws(Hz.bf, (zz => {
          const uz = bz.zN.Km(bz.iG);
          cz().set(uz.JV, 0, 0, 0), cz().set(uz.GV, 0, 0, 0), cz().copy(uz.ht, zz), uz.VV()
        })), zz.Ws(Hz.Xc, (zz => {
          console.error(`[logErrorToConsole]: ${zz}`)
        })), zz.Ws(Hz.bc, (zz => {
          let {
            Yi: uz,
            ki: bz,
            zl: Ez
          } = zz;
          wz.k.sK("flyingMiddleMessage", {
            content: (0, Hz.r)(uz),
            ki: bz,
            zl: Ez
          }, !0)
        })), zz.Ws(Hz.Kf, (zz => {
          const uz = zz === az.e ? null : {
            message: `Currently loaded as variation: ${zz}`,
            type: "Warning"
          };
          wz.k.sK("showPermanentBottomMessage", uz, !0)
        })), zz.Ws(Hz.hc, (zz => {
          let {
            messageType: uz,
            data: bz
          } = zz;
          (0, kz.e)(uz) ? (0, kz.c)(uz, bz) : ("freeCamPerms" === uz && lz.client.freeCameraController.setPerms(bz.key, bz.value), lz.client.triggerGameCallback("onReceivedMessageFromServer", uz, bz))
        })), zz.Ws(Hz.rb, (() => {
          const zz = bz.zN.luz(bz.iG);
          null !== zz && void 0 !== zz && zz.isChargeable() && zz.finishCharging(!1, Date.now())
        })), zz.Ws(Hz.Nd, (zz => {
          let {
            Un: uz
          } = zz;
          lz.craftingManager.removeRecipes(bz.iG, uz), wz.k.sK("craftingRecipesEdited", {
            itemName: uz,
            recipesForItem: []
          })
        })), zz.Ws(Hz.Af, (zz => {
          for (const uz in zz) {
            const bz = zz[uz];
            for (const zz in bz) lz.client.meshCreator.handleParticleSystemUpdate(uz, zz, bz[zz])
          }
        })), (0, Ez.onGameResetOnce)((() => {
          (0, iu.setFloatingYValue)(bz.zN.getState(bz.iG, "physics"), bz.zN.Iy(bz.iG), null)
        })), zz.Ws(Hz._b, (zz => {
          let {
            ub: uz,
            bb: Ez,
            Eb: nz
          } = zz;
          const iz = (0, hz.e)(uz);
          if (iz === bz.iG) {
            const zz = bz.zN.Iy(bz.iG).position;
            nz ??= Math.floor(zz[1]) - 1, (0, iu.setFloatingYValue)(bz.zN.getState(bz.iG, "physics"), bz.zN.Iy(bz.iG), Ez ? nz : null)
          }(0, Lz.b)(bz).setFloating(iz, Ez, nz);
          const lz = bz.zN.getState(iz, "floating");
          lz && (lz.isFloating = Ez, lz.Eb = Ez ? nz : null)
        })), zz.Ws(Hz.Fb, zu.i)
      }
    }
    window.addEventListener("beforeunload", (() => {}));
    var Xu = bz(38411),
      fu = bz(38414),
      su = bz(627),
      ru = bz(2982);
    class ou {
      constructor(zz, uz, bz, Ez) {
        this.msgHandler = bz, this.listener = Ez, this.session = void 0, this.attachedRoom = null, this.detachRoomListeners = null, this.suspended = !1, this.droppedAt = 0, this.session = new Xu.d({
          reconnect: zz,
          isLive: () => Ez.isLive(),
          onReconnected: zz => {
            this.resumeOnRoom(zz)
          },
          onGaveUp: (zz, uz) => {
            Ez.onGaveUp(zz, uz)
          },
          freeze: uz,
          releaseSeat: uz => {
            zz(uz).then((zz => {
              zz.leave(!0)
            }), (zz => {
              console.warn("Couldn't release the held seat of a game left while reconnecting", zz)
            }))
          }
        })
      }
      onInitialInfo(zz, uz) {
        this.session.onInitialInfo(zz, uz)
      }
      isResuming() {
        return this.session.isResuming()
      }
      getDroppedAt() {
        return this.droppedAt
      }
      onResumeInitialInfo(zz, uz) {
        if (this.session.onResuming(), null === zz) {
          try {
            (0, tz.d)().client.itemDropPrediction.reset()
          } catch (bz) {
            console.error("Error dropping the item drop predictions on resuming", bz)
          }
          return Ez.offlineInputReplay.discard(), void this.setSuspended(!1)
        }(0, tz.d)().client.itemDropPrediction.onResumeReplayOffered(), Ez.offlineInputReplay.replayFrom(zz.Cu, uz)
      }
      onResumed(zz) {
        this.setSuspended(!1), (0, Ez.resendBeacons)();
        try {
          zz()
        } catch (uz) {
          console.error("Error completing the resume", uz)
        } finally {
          this.session.onResumed()
        }
      }
      attachRoom(zz) {
        const uz = (0, su.f)((() => zz.connection.isOpen));
        zz.Hr(uz);
        const bz = new fu.c((() => {
          this.session.canHoldSeat() && this.listener.isLive() && (console.warn("The game server went silent, reconnecting"), this.onConnectionDropped(zz, "silent"), zz.leave(!1))
        }));
        zz.onStateChange((() => {
          bz.heard()
        }));
        const Ez = uz => {
          uz.persisted || zz.leave(!0)
        };
        window.addEventListener("pagehide", Ez), zz.Hr(((uz, bz) => {
          if (zz === this.attachedRoom && this.listener.isLive()) return (0, iz.g)(uz) && this.session.canHoldSeat() ? (console.warn(`Connection to the game server dropped with code ${uz}, reconnecting`), this.listener.onDropped(uz, bz), void this.onConnectionDropped(zz, String(uz))) : void this.listener.onRoomLeft(uz, bz)
        })), this.attachedRoom = zz, this.detachRoomListeners = () => {
          uz(), bz.dispose(), window.removeEventListener("pagehide", Ez)
        }
      }
      dispose() {
        this.detachRoom(), this.session.leave(), this.setSuspended(!1)
      }
      setSuspended(zz) {
        zz !== this.suspended && (this.suspended = zz, (0, Ez.setConnectionSuspended)(zz), (0, tz.d)().client.itemDropPrediction.setSuspended(zz))
      }
      detachRoom() {
        var zz;
        null === (zz = this.detachRoomListeners) || void 0 === zz || zz.call(this), this.detachRoomListeners = null, this.attachedRoom = null
      }
      onConnectionDropped(zz, uz) {
        (0, ru.f)("disconnect", "Left room", uz), this.isResuming() || (this.droppedAt = Date.now()), this.detachRoom(), Ez.offlineInputReplay.onConnectionLost(), this.setSuspended(!0), this.session.onConnectionLost(zz.reconnectionToken)
      }
      resumeOnRoom(zz) {
        if (!this.listener.isLive()) return console.warn("Left the game while reconnecting, leaving the resumed room"), zz.leave(!0), void this.dispose();
        console.log("Reconnected to the game server, waiting for the game to resume"), (0, Zu.s)(), Ez.offlineInputReplay.onConnectionReplaced(), this.msgHandler.iHz(zz), this.listener.onReconnected(zz), this.attachRoom(zz)
      }
    }
    var Nu = bz(3216),
      vu = bz(3218),
      xu = bz(1296),
      Ju = bz(4425),
      Au = bz(2899),
      Tu = bz(1068),
      Lu = bz(37167),
      Pu = bz(38418),
      Gu = bz(8569),
      au = bz(38420),
      Vu = bz(1768),
      mu = bz(38429),
      qu = bz(1665),
      hu = bz(2632);

    function Uu(zz) {
      var uz, bz;
      if ("object" !== typeof zz || null === zz) return {
        errType: typeof zz
      };
      const Ez = zz;
      return {
        errType: null !== (uz = null === (bz = zz.constructor) || void 0 === bz ? void 0 : bz.name) && void 0 !== uz ? uz : "",
        errName: "string" === typeof Ez.name ? Ez.name : "",
        eventType: "string" === typeof Ez.type ? Ez.type : "",
        errStack: "string" === typeof Ez.stack ? Ez.stack.split("\n").slice(1).join(" | ") : ""
      }
    }

    function cu(zz) {
      if ("undefined" !== typeof ProgressEvent && zz instanceof ProgressEvent) return !0;
      if (!(zz instanceof Error)) return !1;
      const uz = zz.code;
      return "ServerError" === zz.name && void 0 === uz || "AbortError" === zz.name || "seat reservation expired." === zz.message || "early_leave" === zz.message
    }(0, Rz.i)((zz => {
      (0, ru.f)("wasm_net", zz)
    }));
    let gu = !0;

    function Su() {
      gu = !1
    }
    class yu {
      constructor(zz) {
        this.gameNameWithVariation = void 0, this.lobbyName = void 0, this.colyClient = void 0, this.userContext = void 0, this.joinedAt = null, this.checkSendPath = () => {}, this.Gd = void 0, this.connectionResume = void 0, this.incomingMsgInitialisor = void 0, this.gameNameWithVariation = zz.gameNameWithVariation, this.lobbyName = zz.lobbyName, this.colyClient = zz.colyClient, this.userContext = zz.userContext
      }
      async connectToServer(zz, uz, bz) {
        Xz.b.reset(), zz.nG = {
          [zz.iG]: {}
        }, zz.M6 = void 0, (0, Zu.s)(), (0, tz.d)().removeAllEntityNames(), (0, tz.d)().setEntityName(zz.iG, this.userContext.getPlayerName()), (0, xu.o)({
          lobbyName: this.lobbyName
        }), console.log("Waiting for clientConnection passed promise to resolve");
        const lz = (0, qu.g)();
        console.log("joining server with game", this.gameNameWithVariation, "lobbyName", this.lobbyName);
        const Mz = performance.now(),
          Hz = (0, au.c)(this.userContext, (() => {
            const {
              roomName: Ez,
              joinOptions: nz
            } = (0, sz.e)(this.userContext, this.gameNameWithVariation, this.lobbyName, uz, (zz => Au.e.isUsingCustomGameTexturePack(zz)));
            return nz.joinAdHold = lz, nz.renderBackend = (0, hu.e)(zz.oR), (0, Pu.d)((() => this.colyClient.joinOrCreate(Ez, nz)), bz)
          }));
        return wz.k.sK("loadingScreenState", "loadingPage:joiningLobby"), await Hz.then((uz => {
          if (this.joinedAt = performance.now(), this.Gd = zz, lz) {
            const zz = (0, qu.r)((() => {
              uz.send(nz.f)
            }));
            uz.Hr(zz), (0, Ez.onGameResetOnce)(zz)
          }
          const bz = new Kz(uz);
          this.connectionResume = new ou((zz => this.colyClient.reconnect(zz)), (uz => {
            zz.ZJ(uz)
          }), bz, {
            isLive: () => (0, tz.d)().client.getMsgHandler() === bz,
            onDropped: (zz, uz) => {
              (0, vu.h)(zz) || this.logUnrecognisedConnectionLoss(zz, void 0, {
                site: "drop",
                closeReason: null !== uz && void 0 !== uz ? uz : "",
                sinceJoined: this.sinceJoined()
              })
            },
            onRoomLeft: (zz, uz) => {
              this.onRoomLeft(zz, uz)
            },
            onReconnected: zz => {
              this.incomingMsgInitialisor.iHz(zz), this.checkSendPath = (0, Lu.h)(bz, zz, Rz.m)
            },
            onGaveUp: (zz, uz) => {
              this.onResumeGaveUp(zz, uz)
            }
          }), this.connectionResume.attachRoom(uz), (0, Ez.onGameResetOnce)((() => {
            this.connectionResume.dispose()
          }));
          const iz = bz.send,
            Mz = bz.Ws,
            Hz = bz.cuz.send,
            Oz = bz.cuz.Ws,
            pz = bz.EHz;
          this.checkSendPath = (0, Lu.h)(bz, uz, Rz.m);
          const dz = setInterval((() => {
            iz === bz.send && Mz === bz.Ws && Hz === bz.cuz.send && Oz === bz.cuz.Ws && pz === bz.EHz || Su(), this.checkSendPath()
          }), 1e4);
          return (0, Ez.onGameResetOnce)((() => {
            clearInterval(dz)
          })), {
            success: !0,
            successDetails: bz
          }
        })).catch((uz => {
          if (bz.aborted && uz === (0, Vu.g)(bz)) return {
            success: !1,
            failDetails: {
              reason: "Left the game while it loaded",
              requiresRefresh: !1,
              canReconnect: !1
            }
          };
          if (uz instanceof mu.d) return console.warn("Seat request timed out", this.lobbyName, this.gameNameWithVariation), {
            success: !1,
            failDetails: {
              reason: uz.message,
              requiresRefresh: !1,
              canReconnect: !1,
              gameServerUnreachable: "timedOut"
            }
          };
          zz.DR(`Failed to connect to bloxd room, check your internet connection. lobbyName: ${this.lobbyName}, gameNameWithVariation: ${this.gameNameWithVariation} code: ${uz.code}\n`, uz);
          const Ez = uz.code;
          return Ez === iz.b.serverUpdating.code ? (this.goToUpdateWaiting(), {
            success: !1,
            failDetails: {
              reason: iz.b.serverUpdating.text,
              requiresRefresh: !1,
              canReconnect: !0,
              goesToUpdateWaiting: !0
            }
          }) : {
            success: !1,
            failDetails: {
              ...this.onConnectionToServerLost(Ez, uz.message, {
                site: "join",
                sinceJoinStart: (0, vu.b)(performance.now() - Mz),
                ...Uu(uz)
              }, cu(uz)),
              rematch: (0, Pu.c)(uz),
              gameRefused: (0, Gu.d)(uz)
            }
          }
        }))
      }
      setupServerListeners(zz, uz, bz) {
        wz.k.sK("loadingScreenState", "loadingPage:loadingPlayerInfo"), this.incomingMsgInitialisor = new wu(this.gameNameWithVariation, uz.cuz, zz, this.connectionResume), this.incomingMsgInitialisor.setupStateReplicationHandlers();
        const nz = uz.HHz();
        this.incomingMsgInitialisor.setupOnMessageListeners(nz, bz), (0, Ez.onConnectionToServerReady)(nz, uz), nz.finishRegistration()
      }
      dispose() {
        this.connectionResume.dispose()
      }
      onResumeGaveUp(zz, uz) {
        (0, Tu.WR)(new Error("Reconnect failed"), {
          ...(0, Nu.k)(uz),
          game: this.gameNameWithVariation
        }), (0, ru.f)("disconnect", "Reconnect failed", uz.reason), (0, tz.d)().client.leaveGameUnwanted({
          reason: {
            translationKey: "general:lostConnection"
          },
          canReconnect: !zz,
          canPlayAgain: zz,
          requiresRefresh: !1,
          automaticallyReconnect: !1
        }), (0, bu.navigatePreserveSearch)("/")
      }
      sinceJoined() {
        return null === this.joinedAt ? "" : (0, vu.b)(performance.now() - this.joinedAt)
      }
      onRoomLeft(zz, uz) {
        var bz;
        if (zz === iz.b.gameOrPluginKick.code) return;
        if (console.log(`Left room with code ${zz}`), zz === iz.b.serverUpdating.code) return (0, ru.f)("disconnect", "Left room", "serverUpdating"), (0, tz.d)().client.leaveGame(this.getUpdateWaitingUrl()), void this.goToUpdateWaiting();
        this.Gd.DR(`Kicked from server with code ${zz}`, new Error);
        const Ez = Object.keys(iz.b).find((uz => iz.b[uz].code === zz));
        (0, ru.f)("disconnect", "Left room", null !== Ez && void 0 !== Ez ? Ez : String(zz));
        const nz = this.onConnectionToServerLost(zz, void 0, {
          site: "leave",
          closeReason: null !== uz && void 0 !== uz ? uz : "",
          sinceJoined: this.sinceJoined()
        });
        (0, tz.d)().client.leaveGameUnwanted({
          reason: `You have disconnected from the server.\n${nz.reason}`,
          canReconnect: nz.canReconnect,
          requiresRefresh: nz.requiresRefresh,
          automaticallyReconnect: null !== (bz = nz.automaticallyReconnect) && void 0 !== bz && bz
        }), (0, bu.navigatePreserveSearch)("/")
      }
      getUpdateWaitingUrl() {
        return (0, Ju.A)(this.gameNameWithVariation, this.lobbyName)
      }
      goToUpdateWaiting() {
        (0, bu.navigatePreserveSearch)(this.getUpdateWaitingUrl())
      }
      onConnectionToServerLost(zz, uz, bz) {
        var Ez;
        let nz = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        if (null !== (Ez = uz) && void 0 !== Ez && Ez.endsWith(iz.k) && (this.userContext.invalidateTrafficCode(), uz = uz.replace(iz.k, "")), zz === iz.b.outdatedVersion.code) return console.error("Outdated client with version ", lz.c, ", refreshing page"), (0, fz.reloadBloxd)(), {
          reason: "Outdated client",
          requiresRefresh: !0,
          canReconnect: !1
        };
        if (zz === iz.b.loadRecaptchaError.code) return console.error("Load recaptcha error, refreshing page"), (0, fz.reloadBloxd)(), {
          reason: "Failed to load recaptcha",
          requiresRefresh: !0,
          canReconnect: !1
        };
        for (const lz in iz.b) {
          const {
            code: bz,
            text: Ez,
            canReconnect: nz
          } = iz.b[lz];
          if (bz === zz) {
            console.log("matched known error", zz, "leaving game");
            return {
              reason: "" !== Ez ? Ez : uz || `Code: ${zz}`,
              requiresRefresh: !1,
              canReconnect: nz,
              automaticallyReconnect: bz === iz.b.customGameUpdated.code || bz === iz.b.duplicateLobbyNameError.code
            }
          }
        }
        return console.log("Didn't match known error, leaving game"), (0, vu.d)(zz) || nz ? console.warn("Connection lost", zz, uz) : this.logUnrecognisedConnectionLoss(zz, uz, bz), {
          reason: `Either your internet isn't working or this is a bug.\nCode: ${zz}`,
          requiresRefresh: !1,
          canReconnect: !1,
          gameServerUnreachable: nz ? "failed" : void 0
        }
      }
      logUnrecognisedConnectionLoss(zz, uz, bz) {
        (0, Tu.WR)(new Error("Unrecognised connection loss"), {
          code: String(zz),
          cause: null !== uz && void 0 !== uz ? uz : "",
          ...bz,
          game: this.gameNameWithVariation,
          ...(0, vu.k)()
        })
      }
    }
  },
  38381: (zz, uz, bz) => {
    bz.d(uz, {
      c: () => eb,
      g: () => kb
    });
    var Ez, nz, iz, lz, Mz, tz, Hz, Oz, pz, dz, Fz, Zz, Rz, Kz, wz, Xz, fz, sz, rz, oz, Nz, vz, xz, Jz, Az, Tz, Lz, Pz, Gz, az, Vz, mz, qz, hz, Uz, cz, gz, Sz, yz, Dz, Qz, Wz, ez, jz, Iz, Bz, Cz, Yz, kz, zu, uu, bu, Eu, nu, iu, lu, Mu, tu, Hu, Ou, pu, du, Fu, Zu, Ru, Ku, wu, Xu, fu, su, ru, ou, Nu, vu, xu, Ju, Au, Tu, Lu, Pu, Gu, au, Vu, mu, qu, hu, Uu, cu, gu, Su, yu, Du, Qu, Wu, eu, ju, Iu, Bu, Cu, Yu = bz(22),
      ku = bz(36581),
      zb = bz(38393),
      ub = bz(38401),
      bb = bz(8774),
      Eb = bz(586),
      nb = bz(584),
      ib = bz(36214);
    let lb = (Ez = (0, bb.type)("number"), nz = (0, bb.type)("number"), iz = (0, bb.type)("number"), lz = (0, bb.type)("number"), Mz = (0, bb.type)("number"), tz = (0, bb.type)("number"), Hz = (0, bb.type)("string"), Oz = class extends bb.Schema {
        constructor() {
          super(...arguments), (0, zb.c)(this, "id", pz, this), (0, zb.c)(this, "amount", dz, this), (0, zb.c)(this, "x", Fz, this), (0, zb.c)(this, "y", Zz, this), (0, zb.c)(this, "z", Rz, this), (0, zb.c)(this, "size", Kz, this), (0, zb.c)(this, "attributes", wz, this)
        }
      }, pz = (0, ub.d)(Oz.prototype, "id", [Ez], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return 0
        }
      }), dz = (0, ub.d)(Oz.prototype, "amount", [nz], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return 0
        }
      }), Fz = (0, ub.d)(Oz.prototype, "x", [iz], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return 0
        }
      }), Zz = (0, ub.d)(Oz.prototype, "y", [lz], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return 0
        }
      }), Rz = (0, ub.d)(Oz.prototype, "z", [Mz], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return 0
        }
      }), Kz = (0, ub.d)(Oz.prototype, "size", [tz], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return 1
        }
      }), wz = (0, ub.d)(Oz.prototype, "attributes", [Hz], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return "{}"
        }
      }), Oz),
      Mb = (Xz = (0, bb.type)("string"), fz = (0, bb.type)("string"), sz = class extends bb.Schema {
        constructor() {
          super(...arguments), (0, zb.c)(this, "itemName", rz, this), (0, zb.c)(this, "enchantmentTier", oz, this)
        }
      }, rz = (0, ub.d)(sz.prototype, "itemName", [Xz], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: null
      }), oz = (0, ub.d)(sz.prototype, "enchantmentTier", [fz], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: null
      }), sz),
      tb = (Nz = (0, bb.type)("string"), vz = (0, bb.type)("string"), xz = (0, bb.type)("number"), Jz = (0, bb.type)("number"), Az = (0, bb.type)("number"), Tz = (0, bb.type)("float32"), Lz = (0, bb.type)("float32"), Pz = (0, bb.type)("float32"), Gz = (0, bb.type)("string"), az = (0, bb.type)(["number"]), Vz = (0, bb.type)("boolean"), mz = class extends bb.Schema {
        constructor() {
          super(...arguments), (0, zb.c)(this, "type", qz, this), (0, zb.c)(this, "name", hz, this), (0, zb.c)(this, "x", Uz, this), (0, zb.c)(this, "y", cz, this), (0, zb.c)(this, "z", gz, this), (0, zb.c)(this, "xRotation", Sz, this), (0, zb.c)(this, "yRotation", yz, this), (0, zb.c)(this, "zRotation", Dz, this), (0, zb.c)(this, "followingEId", Qz, this), (0, zb.c)(this, "followingOffset", Wz, this), (0, zb.c)(this, "shouldMatchFollowingEntityRotation", ez, this)
        }
      }, qz = (0, ub.d)(mz.prototype, "type", [Nz], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: null
      }), hz = (0, ub.d)(mz.prototype, "name", [vz], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return ""
        }
      }), Uz = (0, ub.d)(mz.prototype, "x", [xz], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return 0
        }
      }), cz = (0, ub.d)(mz.prototype, "y", [Jz], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return 0
        }
      }), gz = (0, ub.d)(mz.prototype, "z", [Az], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return 0
        }
      }), Sz = (0, ub.d)(mz.prototype, "xRotation", [Tz], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return 0
        }
      }), yz = (0, ub.d)(mz.prototype, "yRotation", [Lz], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return 0
        }
      }), Dz = (0, ub.d)(mz.prototype, "zRotation", [Pz], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return 0
        }
      }), Qz = (0, ub.d)(mz.prototype, "followingEId", [Gz], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: null
      }), Wz = (0, ub.d)(mz.prototype, "followingOffset", [az], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return new bb.ArraySchema(0, 0, 0)
        }
      }), ez = (0, ub.d)(mz.prototype, "shouldMatchFollowingEntityRotation", [Vz], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return !0
        }
      }), mz),
      Hb = (jz = (0, bb.type)("float32"), Iz = (0, bb.type)("float32"), Bz = (0, bb.type)("boolean"), Cz = (0, bb.type)("boolean"), Yz = (0, bb.type)("float32"), kz = (0, bb.type)("boolean"), zu = (0, bb.type)("string"), uu = (0, bb.type)("string"), bu = (0, bb.type)("string"), Eu = (0, bb.type)("string"), nu = (0, bb.type)(["number"]), iu = (0, bb.type)("number"), lu = (0, bb.type)({
        map: Mb
      }), Mu = class extends tb {
        constructor() {
          super(...arguments), (0, zb.c)(this, "scale", tu, this), (0, zb.c)(this, "speed", Hu, this), (0, zb.c)(this, "jumping", Ou, this), (0, zb.c)(this, "crouching", pu, this), (0, zb.c)(this, "cameraPitch", du, this), (0, zb.c)(this, "armSwinging", Fu, this), (0, zb.c)(this, "heldItemName", Zu, this), (0, zb.c)(this, "heldItemEnchantmentTier", Ru, this), (0, zb.c)(this, "pose", Ku, this), (0, zb.c)(this, "ridingVehicleEId", wu, this), (0, zb.c)(this, "meshOffset", Xu, this), (0, zb.c)(this, "baseRenderHeading", fu, this), (0, zb.c)(this, "armour", su, this)
        }
      }, tu = (0, ub.d)(Mu.prototype, "scale", [jz], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return 1
        }
      }), Hu = (0, ub.d)(Mu.prototype, "speed", [Iz], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return 0
        }
      }), Ou = (0, ub.d)(Mu.prototype, "jumping", [Bz], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return !1
        }
      }), pu = (0, ub.d)(Mu.prototype, "crouching", [Cz], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return !1
        }
      }), du = (0, ub.d)(Mu.prototype, "cameraPitch", [Yz], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return 0
        }
      }), Fu = (0, ub.d)(Mu.prototype, "armSwinging", [kz], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return !1
        }
      }), Zu = (0, ub.d)(Mu.prototype, "heldItemName", [zu], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: null
      }), Ru = (0, ub.d)(Mu.prototype, "heldItemEnchantmentTier", [uu], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: null
      }), Ku = (0, ub.d)(Mu.prototype, "pose", [bu], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return "standing"
        }
      }), wu = (0, ub.d)(Mu.prototype, "ridingVehicleEId", [Eu], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return null
        }
      }), Xu = (0, ub.d)(Mu.prototype, "meshOffset", [nu], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return new bb.ArraySchema(0, 0, 0)
        }
      }), fu = (0, ub.d)(Mu.prototype, "baseRenderHeading", [iu], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return 0
        }
      }), su = (0, ub.d)(Mu.prototype, "armour", [lu], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return new bb.MapSchema
        }
      }), Mu),
      Ob = (ru = (0, bb.type)("string"), ou = (0, bb.type)("string"), Nu = (0, bb.type)("string"), vu = (0, bb.type)("uint8"), xu = class extends Hb {
        constructor() {
          super(...arguments), (0, zb.c)(this, "variation", Ju, this), (0, zb.c)(this, "ownerDbId", Au, this), (0, zb.c)(this, "metaInfo", Tu, this), (0, zb.c)(this, "aiState", Lu, this)
        }
      }, Ju = (0, ub.d)(xu.prototype, "variation", [ru], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return "default"
        }
      }), Au = (0, ub.d)(xu.prototype, "ownerDbId", [ou], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return null
        }
      }), Tu = (0, ub.d)(xu.prototype, "metaInfo", [Nu], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return ""
        }
      }), Lu = (0, ub.d)(xu.prototype, "aiState", [vu], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: function() {
          return 0
        }
      }), xu);
    Pu = (0, bb.type)("string"), Gu = (0, bb.type)("string"), au = (0, bb.type)("string"), Vu = (0, bb.type)("string"), mu = class extends tb {
      constructor() {
        super(...arguments), (0, zb.c)(this, "meshKind", qu, this), (0, zb.c)(this, "meshOpts", hu, this), (0, zb.c)(this, "pose", Uu, this), (0, zb.c)(this, "leaderboardTop", cu, this)
      }
    }, qu = (0, ub.d)(mu.prototype, "meshKind", [Pu], {
      configurable: !0,
      enumerable: !0,
      writable: !0,
      initializer: null
    }), hu = (0, ub.d)(mu.prototype, "meshOpts", [Gu], {
      configurable: !0,
      enumerable: !0,
      writable: !0,
      initializer: null
    }), Uu = (0, ub.d)(mu.prototype, "pose", [au], {
      configurable: !0,
      enumerable: !0,
      writable: !0,
      initializer: null
    }), cu = (0, ub.d)(mu.prototype, "leaderboardTop", [Vu], {
      configurable: !0,
      enumerable: !0,
      writable: !0,
      initializer: null
    });

    function pb(zz) {
      return Object.keys(bb.Metadata.getFields(zz))
    }
    const db = pb(Ob);
    for (const zE of Eb.q)
      if (!db.includes(zE)) throw new Error(`Mob Schema is missing a networked property: "${zE}"`);
    const Fb = pb((gu = (0, bb.type)("string"), Su = (0, bb.type)("float32"), yu = (0, bb.type)("float32"), Du = (0, bb.type)("float32"), Qu = (0, bb.type)("float32"), Wu = class extends tb {
      constructor() {
        super(...arguments), (0, zb.c)(this, "soundName", eu, this), (0, zb.c)(this, "volume", ju, this), (0, zb.c)(this, "refDistance", Iu, this), (0, zb.c)(this, "maxHearDist", Bu, this), (0, zb.c)(this, "rate", Cu, this)
      }
    }, eu = (0, ub.d)(Wu.prototype, "soundName", [gu], {
      configurable: !0,
      enumerable: !0,
      writable: !0,
      initializer: function() {
        return ""
      }
    }), ju = (0, ub.d)(Wu.prototype, "volume", [Su], {
      configurable: !0,
      enumerable: !0,
      writable: !0,
      initializer: function() {
        return 1
      }
    }), Iu = (0, ub.d)(Wu.prototype, "refDistance", [yu], {
      configurable: !0,
      enumerable: !0,
      writable: !0,
      initializer: function() {
        return ib.h
      }
    }), Bu = (0, ub.d)(Wu.prototype, "maxHearDist", [Du], {
      configurable: !0,
      enumerable: !0,
      writable: !0,
      initializer: function() {
        return ib.c
      }
    }), Cu = (0, ub.d)(Wu.prototype, "rate", [Qu], {
      configurable: !0,
      enumerable: !0,
      writable: !0,
      initializer: function() {
        return 1
      }
    }), Wu));
    for (const zE of nb.i)
      if (!Fb.includes(zE)) throw new Error(`AudioEntity Schema is missing a replicated property: "${zE}"`);
    var Zb = bz(37833),
      Rb = bz(1226),
      Kb = bz(588),
      wb = bz(37628),
      Xb = bz(4035),
      fb = bz(328),
      sb = bz(36709),
      rb = bz(37522),
      ob = bz(2132),
      Nb = bz(36677),
      vb = bz(37855),
      xb = bz(36837),
      Jb = bz(332),
      Ab = bz.n(Jb),
      Tb = bz(37369),
      Lb = bz(36503),
      Pb = bz(37499),
      Gb = bz(37535);
    class ab {
      constructor(zz, uz) {
        this.bloxd = zz, this.eId = uz, this.Gd = void 0, this.colyseusEntity = void 0, this.canSeeSub = void 0, this.canAttackSub = void 0, this.interactableSub = void 0, this.overlayColourSub = void 0, this.opacitySub = void 0, this.zIndexSub = void 0, this.multilineTextBoxSub = void 0, this.previousHidingMeshManagerState = void 0, this.meshKind = void 0, this.meshOpts = void 0, this.leaderboardTop = void 0, this.meshRebuildQueued = !1, this.SZ = !1, this.Gd = zz.Gd
      }
      initClient(zz) {
        var uz, bz, Ez;
        this.colyseusEntity = zz, this.meshKind = zz.meshKind, this.meshOpts = zz.meshOpts, this.leaderboardTop = zz.leaderboardTop, this.Gd.zN.add([zz.x, zz.y, zz.z], 1, 1, null, null, !1, !1, this.eId), this.Gd.zN.wL(this.eId, "smoothToServerPos");
        const nz = "Person" === this.meshKind;
        this.Gd.zN.wL(this.eId, "meshRotation", {
          isServerControlled: !0,
          ...nz ? {
            defaultRotationsPerSecond: .5
          } : {},
          childrenNodeParams: nz ? [{
            nodeName: "HeadMesh",
            softTolerance: vb.j,
            hardTolerance: null
          }] : []
        }), this.updateHidingMeshMgr(), this.canSeeSub = Yu.k.subscribe(`otherEntitySettings|${this.eId}|canSee`, (zz => {
          this.updateHidingMeshMgr()
        }));
        const iz = () => {
          const zz = this.Gd.zN.xzz(this.eId);
          if (!zz) return;
          const uz = (0, xb.i)(this.eId);
          if ("number" === typeof zz.eT) {
            var bz, Ez, nz, iz;
            const lz = null === (bz = (0, ob.m)("head", null === (nz = this.getSpec()) || void 0 === nz || null === (iz = nz.opts.textures) || void 0 === iz ? void 0 : iz.head)) || void 0 === bz || null === (Ez = bz.personModel) || void 0 === Ez ? void 0 : Ez.fullBody;
            return this.Gd.oR.hT.setPickable(zz.eT, uz && !lz), void(0, Lb.updatePersonAttachmentPickability)(this.Gd, this.eId, uz)
          }
          const lz = zz.mesh;
          if (lz)
            for (const Mz of [lz, ...lz.getChildMeshes(!1)]) "pK" in Mz && !Mz.name.startsWith("Cape|") && (Mz.pK = uz)
        };
        this.canAttackSub = Yu.k.subscribe(`otherEntitySettings|${this.eId}|canAttack`, iz), this.interactableSub = Yu.k.subscribe(`otherEntitySettings|${this.eId}|interactable`, iz), this.overlayColourSub = Yu.k.subscribe(`otherEntitySettingsClientifiedEId|${this.eId}|overlayColour`, (zz => {
          this.updateOverlayColour(zz)
        })), this.opacitySub = Yu.k.subscribe(`otherEntitySettingsClientifiedEId|${this.eId}|opacity`, (zz => {
          this.updateOpacity(zz)
        })), this.zIndexSub = Yu.k.subscribe(`otherEntitySettingsClientifiedEId|${this.eId}|zIndex`, (zz => {
          this.updateZIndex(zz)
        }));
        const lz = this.Gd.nG[this.Gd.iG][this.eId];
        this.updateOverlayColour(null !== (uz = null === lz || void 0 === lz ? void 0 : lz.overlayColour) && void 0 !== uz ? uz : null), this.updateOpacity(null !== (bz = null === lz || void 0 === lz ? void 0 : lz.opacity) && void 0 !== bz ? bz : 1), this.updateZIndex(null !== (Ez = null === lz || void 0 === lz ? void 0 : lz.zIndex) && void 0 !== Ez ? Ez : 0), this.multilineTextBoxSub = (0, Nb.u)(this.Gd, this.eId)
      }
      onChangeClient(zz, uz) {
        if ("xRotation" === zz || "yRotation" === zz || "zRotation" === zz)(0, Nb.x)(this.Gd, this.eId, zz, uz);
        else if ("pose" === zz) {
          const zz = this.Gd.zN.Vzz(this.eId);
          zz && (zz.pose = uz || "standing")
        } else "meshKind" === zz || "meshOpts" === zz ? (this[zz] = uz, this.queueMeshRebuild()) : "name" === zz && "" !== uz ? this.updateHidingMeshMgr() : "leaderboardTop" === zz && (this.leaderboardTop = uz, Yu.k.sK(`leaderboardTop|${this.eId}`, uz))
      }
      disposeClient() {
        this.SZ = !0, this.Gd.zN.deleteEntity(this.eId), Yu.k.unsubscribe(this.canSeeSub), Yu.k.unsubscribe(this.canAttackSub), Yu.k.unsubscribe(this.interactableSub), Yu.k.unsubscribe(this.overlayColourSub), Yu.k.unsubscribe(this.opacitySub), Yu.k.unsubscribe(this.zIndexSub), Yu.k.unsubscribe(this.multilineTextBoxSub)
      }
      getCurrentHidingMeshMgrState() {
        var zz, uz;
        return {
          canSee: null !== (zz = null === (uz = this.Gd.nG[this.Gd.iG][this.eId]) || void 0 === uz ? void 0 : uz.canSee) && void 0 !== zz && zz,
          name: this.colyseusEntity.name,
          meshKind: this.meshKind,
          meshOpts: this.meshOpts
        }
      }
      updateHidingMeshMgr() {
        var zz, uz, bz;
        const {
          Gd: Ez
        } = this, {
          zN: nz
        } = Ez, iz = this.getCurrentHidingMeshMgrState();
        if ((0, fb.be)(this.previousHidingMeshManagerState, iz)) return;
        if (this.previousHidingMeshManagerState = iz, nz.fL(this.eId, "hidingMeshManager"), null === (zz = Ez.nG[Ez.iG][this.eId]) || void 0 === zz || !zz.canSee) return;
        const lz = this.getSpec();
        if (!lz) return;
        const {
          type: Mz,
          opts: tz
        } = lz;
        "Person" === Mz && (tz.textures = (0, ob.o)(tz.textures)), tz.eId = this.eId, nz.wL(this.eId, "hidingMeshManager", {
          addMeshComponent: () => {
            var zz, uz, bz;
            "Leaderboard" === Mz && (tz.leaderboardTop = this.leaderboardTop);
            const iz = this.bloxd.client.meshCreator.getEntityMesh(Mz, tz, (zz => {
              var uz, bz;
              if ("number" === typeof zz) {
                var nz, iz, lz;
                const uz = Ez.oR.hT;
                uz.setEntityId(zz, this.eId);
                const bz = "Person" === Mz && (null === (nz = (0, ob.m)("head", null === (lz = tz.textures) || void 0 === lz ? void 0 : lz.head)) || void 0 === nz || null === (iz = nz.personModel) || void 0 === iz ? void 0 : iz.fullBody);
                return void uz.setPickable(zz, (0, xb.i)(this.eId) && !bz)
              }
              const Hz = zz;
              for (const Mz of [Hz, ...Hz.getChildMeshes(!1)]) void 0 === Mz.pK || Mz.name.startsWith("Cape|") || (Mz.pK = (0, xb.i)(this.eId), Mz.metadata ??= new Ez.oR.dK, Mz.metadata.eId = this.eId);
              this.updateOpacity(null !== (uz = null === (bz = Ez.nG[Ez.iG][this.eId]) || void 0 === bz ? void 0 : bz.opacity) && void 0 !== uz ? uz : 1)
            }));
            if (!iz) return;
            const {
              eT: lz,
              mesh: Hz,
              meshOffset: Oz,
              nameYOffset: pz,
              modelLoaded: dz
            } = iz;
            null === dz || void 0 === dz || dz.then((() => {
              var zz;
              (null === (zz = nz.xzz(this.eId)) || void 0 === zz ? void 0 : zz.mesh) === Hz && (this.previousHidingMeshManagerState = null, this.updateHidingMeshMgr())
            }));
            const Fz = null === lz ? null : Ez.oR.hT.sbz(lz, 0);
            if (nz.wL(this.eId, nz.names.mesh, {
                eT: lz,
                Quz: Fz,
                mesh: Hz,
                Klz: !1,
                juz: "Leaderboard" !== Mz,
                offset: Oz.slice(),
                Rlz: "ParticleEmitter" === Mz && tz.followTargetMeshOffset ? zz => {
                  var uz;
                  Ab().copy(zz, Oz);
                  const bz = null === (uz = nz.suz(this.eId)) || void 0 === uz ? void 0 : uz.VZ,
                    Ez = void 0 === bz ? null : nz.Vzz(bz);
                  if (Ez) {
                    var iz, lz;
                    const uz = this.bloxd.getEntityHeading(null !== (iz = Ez.ridingVehicleEId) && void 0 !== iz ? iz : bz, !0),
                      nz = Math.sin(uz),
                      Mz = Math.cos(uz);
                    zz[0] += Ez.meshOffset[0] * Mz + Ez.meshOffset[2] * nz, zz[1] += Ez.meshOffset[1], zz[2] += Ez.meshOffset[2] * Mz - Ez.meshOffset[0] * nz;
                    const tz = null !== (lz = Ez.ridingVehicleEId) && void 0 !== lz ? lz : null;
                    null !== tz && (0, Gb.d)(this.Gd, tz, zz)
                  }
                } : null
              }), "Person" === Mz) {
              var Zz, Rz, Kz, wz;
              nz.wL(this.eId, nz.names.meshAttachments, {
                personFullBody: null !== (Zz = null === (Rz = (0, ob.m)("head", null === (wz = tz.textures) || void 0 === wz ? void 0 : wz.head)) || void 0 === Rz || null === (Kz = Rz.personModel) || void 0 === Kz ? void 0 : Kz.fullBody) && void 0 !== Zz && Zz
              });
              for (const zz of Rb.u) {
                var Xz, fz, sz;
                const uz = null === (Xz = tz.textures) || void 0 === Xz ? void 0 : Xz[zz];
                uz && null !== (fz = (0, ob.m)(zz, uz)) && void 0 !== fz && null !== (sz = fz.attachments) && void 0 !== sz && sz.length && rb.e.Player.meshApi.updatePlayerCosmetic(this.eId, lz, zz, uz)
              }
              nz.wL(this.eId, nz.names.moveState), nz.wL(this.eId, "updateWalkingState", {
                eT: lz,
                Quz: Fz,
                walkingLegSwingDuration: vb.r
              }), nz.wL(this.eId, "humanoidMesh", {
                eT: lz,
                Quz: Fz,
                heldItemPositionParams: {},
                maxWalkingAngleOverride: null
              }), nz.wL(this.eId, "animator", {
                eT: lz,
                Quz: Fz,
                modelLifeformType: "Player"
              }), Pb.d.hasAnimation("Person") && nz.wL(this.eId, "rigAnimation", {
                target: "Person",
                eT: lz
              }), nz.Vzz(this.eId).pose = this.colyseusEntity.pose || "standing"
            } else if ("BloxdBlock" === Mz && null !== lz) {
              nz.wL(this.eId, "animator", {
                eT: lz,
                Quz: Fz,
                modelLifeformType: null
              });
              const zz = (0, wb.p)(tz.blockName);
              null !== zz && nz.wL(this.eId, "rigAnimation", {
                target: zz,
                eT: lz
              })
            }
            nz.jlz(this.eId, "entityName", {
              name: this.colyseusEntity.name,
              nameYOffset: pz
            }), this.bloxd.setEntityName(this.eId, this.colyseusEntity.name), !0 === tz.autoRotate && (nz.fL(this.eId, "meshRotation"), nz.wL(this.eId, "autoRotate"));
            const {
              lineToEId: rz
            } = tz;
            (0, Kb.F)(rz) || nz.wL(this.eId, "lineToEntity", {
              lineToEId: rz
            });
            const oz = Ez.nG[Ez.iG][this.eId];
            this.updateOverlayColour(null !== (zz = null === oz || void 0 === oz ? void 0 : oz.overlayColour) && void 0 !== zz ? zz : null), this.updateOpacity(null !== (uz = null === oz || void 0 === oz ? void 0 : oz.opacity) && void 0 !== uz ? uz : 1), this.updateZIndex(null !== (bz = null === oz || void 0 === oz ? void 0 : oz.zIndex) && void 0 !== bz ? bz : 0)
          },
          removeMeshComponent: () => {
            "Person" !== Mz && "BloxdBlock" !== Mz || nz.fL(this.eId, "rigAnimation"), nz.fL(this.eId, nz.names.mesh), nz.U1(this.eId, nz.names.meshAttachments) && nz.fL(this.eId, nz.names.meshAttachments), nz.fL(this.eId, "entityName"), nz.fL(this.eId, "autoRotate"), nz.fL(this.eId, "lineToEntity"), "Person" === Mz ? (nz.fL(this.eId, nz.names.moveState), nz.fL(this.eId, "updateWalkingState"), nz.fL(this.eId, "humanoidMesh"), nz.fL(this.eId, "animator")) : "BloxdBlock" === Mz && nz.fL(this.eId, "animator")
          },
          hideDist: null !== (uz = tz.hideDist) && void 0 !== uz ? uz : 80,
          movingHideDist: null !== (bz = tz.hideDist) && void 0 !== bz ? bz : 120,
          displayOutsideLoadedChunk: tz.hideDist > 100,
          immediatelyUpdate: !0,
          Zp: "BloxdBlock" === Mz ? tz.blockName : Mz
        })
      }
      queueMeshRebuild() {
        this.meshRebuildQueued || (this.meshRebuildQueued = !0, queueMicrotask((() => {
          this.meshRebuildQueued = !1, this.SZ || this.updateHidingMeshMgr()
        })))
      }
      getSpec() {
        return (0, Xb.h)({
          meshKind: this.meshKind,
          meshOpts: this.meshOpts
        })
      }
      updateOverlayColour(zz) {
        var uz, bz;
        if ("Person" !== this.meshKind) return;
        let Ez = new sb.d(0, 0, 0, 0);
        if (null !== zz) {
          const uz = (0, fb.ab)(zz);
          Ez = new sb.d(uz[0] / 255, uz[1] / 255, uz[2] / 255, .5)
        }
        const nz = null !== (uz = null === (bz = this.Gd.zN.xzz(this.eId)) || void 0 === bz ? void 0 : bz.eT) && void 0 !== uz ? uz : null;
        null !== nz && rb.e.Player.meshApi.updateMeshOverlayColour(nz, Ez)
      }
      updateZIndex(zz) {
        var uz;
        if ("Person" !== this.meshKind) return;
        const bz = null === (uz = this.Gd.zN.xzz(this.eId)) || void 0 === uz ? void 0 : uz.eT;
        "number" === typeof bz && this.Gd.oR.hT.setRenderingGroupId(bz, zz)
      }
      updateOpacity(zz) {
        const uz = this.Gd.zN.xzz(this.eId);
        uz && ("number" !== typeof uz.eT ? uz.mesh && "ParticleEmitter" !== this.meshKind && (0, Tb.e)(uz.mesh, zz) : rb.e.Player.meshApi.updateMeshOpacity(uz.eT, zz))
      }
    }
    var Vb = bz(38385);
    class mb {
      constructor(zz, uz) {
        this.eId = uz, this.Gd = void 0, this.schema = void 0, this.Gd = zz.Gd
      }
      initClient(zz) {
        this.schema = zz, this.Gd.zN.add([zz.x, zz.y, zz.z], .1, .1, null, null, !1, !1, this.eId), this.Gd.zN.wL(this.eId, "smoothToServerPos"), Vb.e.add(this.eId, this.copyOpts())
      }
      onChangeClient(zz) {
        nb.i.includes(zz) && Vb.e.update(this.eId, this.copyOpts())
      }
      disposeClient() {
        Vb.e.remove(this.eId), this.Gd.zN.deleteEntity(this.eId)
      }
      copyOpts() {
        const {
          soundName: zz,
          volume: uz,
          refDistance: bz,
          maxHearDist: Ez,
          rate: nz
        } = this.schema;
        return {
          soundName: zz,
          volume: uz,
          refDistance: bz,
          maxHearDist: Ez,
          rate: nz
        }
      }
    }
    var qb = bz(3437),
      hb = bz(36197),
      Ub = bz(6204),
      cb = bz(37252),
      gb = bz(2623),
      Sb = bz(37566),
      yb = bz(8731),
      Db = bz(37863),
      Qb = bz(37232),
      Wb = bz(2982);
    class eb {
      constructor(zz, uz) {
        let bz = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 4,
          Ez = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : () => performance.now();
        this.cuz = zz, this.Gd = uz, this.setupBudgetMs = bz, this.now = Ez, this.createStateCallbacks = void 0, this.roomStateCallbacks = void 0, this.allItems = {}, this.detachers = new Map, this.deferredSetups = new Map, this.queuedSetups = new Map, this.promotedSetups = new Set, this.setupBudgetLeftMs = void 0, this.lastRefillMs = void 0, this.roomState = void 0, this.SZ = !1, this.onFrame = () => {
          this.setUpQueuedEntities(!0)
        }, this.Hs = () => {
          this.setUpQueuedEntities(this.now() - this.lastRefillMs > 100)
        }, this.setUpPromoted = () => {
          for (const zz of this.promotedSetups) {
            this.promotedSetups.delete(zz);
            const uz = this.queuedSetups.get(zz);
            uz && (this.queuedSetups.delete(zz), this.timedSetup(uz, zz))
          }
        }, this.createStateCallbacks = (0, yb.getStateCallbacks)(zz), this.roomStateCallbacks = this.createStateCallbacks(zz.state), this.roomState = zz.state, this.setupBudgetLeftMs = bz, this.lastRefillMs = Ez()
      }
      setup() {
        this.setupEntityHandlers(), this.setupItemHandlers(), this.cuz.onStateChange(this.setUpPromoted), this.Gd.on("beforeInputs", this.onFrame), this.Gd.on("sd", this.Hs)
      }
      setUpQueuedEntities(zz) {
        var uz;
        if ((null === (uz = (0, gb.d)().client.getMsgHandler()) || void 0 === uz ? void 0 : uz.cuz) !== this.cuz) return this.Gd.off("beforeInputs", this.onFrame), this.Gd.off("sd", this.Hs), this.queuedSetups.clear(), void this.promotedSetups.clear();
        if (zz && (this.setupBudgetLeftMs = this.setupBudgetMs, this.lastRefillMs = this.now()), this.setUpPromoted(), 0 !== this.queuedSetups.size)
          for (Ab().copy(jb, this.Gd.zN.Gs(this.Gd.iG)); this.setupBudgetLeftMs > 0;) {
            const zz = this.nearestQueued(jb);
            if (null === zz) return;
            this.setUpIfQueued(zz), this.setUpPromoted()
          }
      }
      nearestQueued(zz) {
        let uz = null,
          bz = 1 / 0;
        return this.queuedSetups.forEach(((Ez, nz) => {
          const iz = function(zz, uz) {
            return (uz.x - zz[0]) ** 2 + (uz.y - zz[1]) ** 2 + (uz.z - zz[2]) ** 2
          }(zz, Ez);
          (null === uz || iz < bz) && (uz = nz, bz = iz)
        })), uz
      }
      setUpOrQueue(zz, uz) {
        0 === this.queuedSetups.size && this.setupBudgetLeftMs > 0 || this.mustSetUpNow(zz, uz) ? this.timedSetup(zz, uz) : this.queuedSetups.set(uz, zz)
      }
      mustSetUpNow(zz, uz) {
        const bz = this.Gd.M6;
        if (uz === bz) return !0;
        const Ez = this.roomState.entities.get(bz);
        return !(!Ez || Ez.ridingVehicleEId !== uz && Ez.followingEId !== uz) || (Ib(zz.type) === Zb.d || (0, gb.d)().getFollowingEntities(uz).length > 0)
      }
      setUpIfQueued(zz) {
        const uz = this.queuedSetups.get(zz);
        uz && (this.queuedSetups.delete(zz), this.timedSetup(uz, zz))
      }
      promoteIfQueued(zz) {
        null !== zz && this.queuedSetups.has(zz) && this.promotedSetups.add(zz)
      }
      timedSetup(zz, uz) {
        const bz = this.now();
        this.setupEntity(zz, uz), this.setupBudgetLeftMs -= this.now() - bz
      }
      setupEntityHandlers() {
        this.roomStateCallbacks.entities.Qr(((zz, uz) => {
          this.Gd.M6 ? this.setUpOrQueue(zz, uz) : this.deferEntitySetupUntilInitInfo(zz, uz)
        })), this.roomStateCallbacks.entities.aJ(((zz, uz) => {
          const bz = this.deferredSetups.get(uz);
          bz && (Yu.k.unsubscribe(bz), this.deferredSetups.delete(uz)), this.queuedSetups.delete(uz), this.detach(uz), (0, gb.d)().client.disposeEntity(uz)
        }))
      }
      deferEntitySetupUntilInitInfo(zz, uz) {
        const bz = Yu.k.IK("initInfoReceived", (() => {
          this.deferredSetups.delete(uz), this.setUpOrQueue(zz, uz)
        }));
        this.deferredSetups.set(uz, bz), (0, qb.onGameResetOnce)((() => {
          this.deferredSetups.get(uz) === bz && (Yu.k.unsubscribe(bz), this.deferredSetups.delete(uz)), (0, gb.d)().updatePositionAndPhysics(this.Gd.iG, {
            type: Ub.m.DEFAULT,
            tier: null
          }, !0), (0, gb.d)().takeHeldPlayerBodySize(this.Gd.iG);
          const zz = this.Gd.zN.tzz(this.Gd.iG);
          zz && (zz.movementType = Ub.l.NORMAL)
        }))
      }
      setupEntity(zz, uz) {
        const bz = uz === this.Gd.M6;
        if (bz)(0, gb.d)().client.jy(this.Gd.iG, null, null);
        else {
          const {
            type: bz
          } = zz, Ez = Ib(bz);
          if (void 0 === Ez) return void
          function(zz, uz) {
            const bz = String(zz);
            if (Bb.has(bz)) return;
            Bb.add(bz);
            const Ez = bz.length > 80 ? `${bz.slice(0,80)}...` : bz,
              nz = `No client handler for entity type ${JSON.stringify(Ez)}, so entity ${uz} is not set up`;
            console.warn(nz), (0, Wb.f)("uncaught", nz, "unknown_entity_type")
          }(bz, uz);
          (0, gb.d)().client.jy(uz, zz, new Ez((0, gb.d)(), uz, bz))
        }
        const Ez = this.createStateCallbacks(zz);
        if (bz) return this.setupMapSchemaCallbacks(uz, zz, Ez, "armour"), this.setupScalarField(uz, zz, Ez, "scale"), this.setupScalarField(uz, zz, Ez, "ridingVehicleEId"), this.setupScalarField(uz, zz, Ez, "followingEId"), this.setupScalarField(uz, zz, Ez, "followingOffset"), void this.setupScalarField(uz, zz, Ez, "shouldMatchFollowingEntityRotation");
        for (const nz of pb(zz.constructor)) zz[nz] instanceof bb.MapSchema ? this.setupMapSchemaCallbacks(uz, zz, Ez, nz) : this.setupScalarField(uz, zz, Ez, nz)
      }
      setupMapSchemaCallbacks(zz, uz, bz, Ez) {
        const nz = bz[Ez],
          iz = new Map;
        nz.Qr(((bz, nz) => {
          if (this.onEntityFieldChange(zz, uz, Ez, {
              key: nz,
              value: bz
            }), !(bz instanceof bb.Schema)) return;
          const lz = this.createStateCallbacks(bz),
            Mz = [];
          for (const iz of pb(bz.constructor)) Mz.push(this.listenForFutureChanges(lz, iz, (() => {
            this.onEntityFieldChange(zz, uz, Ez, {
              key: nz,
              value: bz
            })
          })));
          iz.set(nz, (() => {
            for (const zz of Mz) zz()
          }))
        })), nz.aJ(((bz, nz) => {
          var lz;
          null === (lz = iz.get(nz)) || void 0 === lz || lz(), iz.delete(nz), this.onEntityFieldChange(zz, uz, Ez, {
            key: nz,
            value: null
          })
        })), this.addDetacher(zz, (() => {
          for (const zz of iz.values()) zz();
          iz.clear()
        }))
      }
      setupScalarField(zz, uz, bz, Ez) {
        this.onEntityFieldChange(zz, uz, Ez, uz[Ez]);
        const nz = this.listenForFutureChanges(bz, Ez, (bz => {
          this.onEntityFieldChange(zz, uz, Ez, bz)
        }));
        this.addDetacher(zz, nz)
      }
      addDetacher(zz, uz) {
        let bz = this.detachers.get(zz);
        bz || (bz = [], this.detachers.set(zz, bz)), bz.push(uz)
      }
      detach(zz) {
        for (const bz of null !== (uz = this.detachers.get(zz)) && void 0 !== uz ? uz : []) {
          var uz;
          bz()
        }
        this.detachers.delete(zz)
      }
      listenForFutureChanges(zz, uz, bz) {
        return zz.listen(uz, bz, !1)
      }
      onEntityFieldChange(zz, uz, bz, Ez) {
        switch (bz) {
          case "ridingVehicleEId": {
            this.promoteIfQueued(Ez);
            const uz = this.Gd.zN.Vzz((0, hb.e)(zz));
            uz && (uz.ridingVehicleEId = Ez);
            break
          }
          case "armour":
            this.handleArmourChange(zz, Ez);
            break;
          case "followingEId":
            this.promoteIfQueued(Ez), this.handleFollowingEIdChange(zz, uz, Ez);
            break;
          case "xRotation":
          case "yRotation":
          case "zRotation":
            this.handleRotationChange(zz, bz, Ez);
            break;
          case "scale":
            this.handleScaleChange(zz, Ez);
            break;
          case "baseRenderHeading":
            this.handleBaseRenderHeadingChange(zz, Ez);
            break;
          case "followingOffset":
            this.handleFollowingOffsetChange(zz, Ez);
            break;
          case "shouldMatchFollowingEntityRotation":
            this.handleShouldMatchFollowingEntityRotationChange(zz, Ez);
            break;
          case "x":
          case "y":
          case "z":
            return void this.handlePositionChange(zz, bz, Ez)
        }(0, gb.d)().client.updateEntityField(zz, bz, Ez)
      }
      handleArmourChange(zz, uz) {
        var bz, Ez;
        const {
          key: nz,
          value: iz
        } = uz;
        (0, rb.y)(zz, nz, null !== (bz = null === iz || void 0 === iz ? void 0 : iz.itemName) && void 0 !== bz ? bz : null, null !== (Ez = null === iz || void 0 === iz ? void 0 : iz.enchantmentTier) && void 0 !== Ez ? Ez : null)
      }
      handleFollowingEIdChange(zz, uz, bz) {
        const Ez = (0, hb.e)(zz),
          nz = Ez === this.Gd.iG;
        if (this.Gd.zN.fL(Ez, this.Gd.zN.names.Av), bz) this.Gd.zN.fL(Ez, "smoothToServerPos"), this.Gd.zN.wL(Ez, this.Gd.zN.names.Av, {
          VZ: (0, hb.e)(bz),
          offset: Array.from(uz.followingOffset),
          ruz: uz.shouldMatchFollowingEntityRotation,
          xuz: !0,
          Juz: (zz, Ez) => {
            if (Ab().copy(zz, uz.followingOffset), uz.ridingVehicleEId === bz) {
              const uz = (0, hb.e)(bz),
                nz = (0, gb.d)().getEntityHeading(uz, Ez);
              Ab().rb(zz, zz, Ab().ZERO, nz)
            }
          }
        });
        else if (!nz) {
          this.Gd.zN.U1(Ez, "smoothToServerPos") || this.Gd.zN.wL(Ez, "smoothToServerPos");
          const zz = this.Gd.zN.getState(Ez, "smoothToServerPos"),
            uz = this.Gd.zN.Iy(Ez).position;
          (0, Qb.setServerPosition)(zz, uz[0], uz[1], uz[2])
        }
      }
      handleRotationChange(zz, uz, bz) {
        const Ez = "xRotation" === uz ? 0 : "yRotation" === uz ? 1 : 2;
        for (const nz of (0, gb.d)().getFollowingEntities(zz)) {
          const zz = this.Gd.zN.getState(nz, "meshRotation"),
            uz = this.Gd.zN.suz(nz);
          zz && uz.ruz && (zz.serverSetRotation[Ez] = bz)
        }
      }
      handleScaleChange(zz, uz) {
        const bz = (0, hb.e)(zz);
        if (Yu.k.sK(`entityScale|${bz}`, uz), bz === this.Gd.iG) {
          var Ez;
          (0, gb.d)().removeFromEyeHeightCache(bz);
          const zz = this.Gd.zN.tzz(this.Gd.iG),
            uz = null !== (Ez = null === zz || void 0 === zz ? void 0 : zz.physicsState) && void 0 !== Ez ? Ez : {
              type: Ub.m.DEFAULT,
              tier: null
            };
          return void(0, gb.d)().updatePositionAndPhysics(this.Gd.iG, uz, !1)
        }
        const nz = (0, gb.d)().getLifeformType(bz);
        if (null === nz) return;
        const {
          physicsBodyWidth: iz,
          physicsBodyHeight: lz
        } = (0, Db.f)(uz, nz);
        this.Gd.zN.Xuz(bz, iz, lz, iz)
      }
      handleBaseRenderHeadingChange(zz, uz) {
        const bz = this.Gd.zN.getState(zz, "meshRotation");
        bz && (bz.baseRenderRotation[1] = uz);
        for (const Ez of (0, gb.d)().getFollowingEntities(zz)) {
          const zz = this.Gd.zN.getState(Ez, "meshRotation"),
            bz = this.Gd.zN.suz(Ez);
          zz && bz.ruz && (zz.baseRenderRotation[1] = uz)
        }
      }
      handleFollowingOffsetChange(zz, uz) {
        const bz = this.Gd.zN.suz((0, hb.e)(zz));
        if (bz && bz.offset) {
          const zz = uz ? Array.from(uz) : Ab().ZERO;
          bz.offset[0] = zz[0], bz.offset[1] = zz[1], bz.offset[2] = zz[2]
        }
      }
      handleShouldMatchFollowingEntityRotationChange(zz, uz) {
        const bz = this.Gd.zN.suz((0, hb.e)(zz));
        bz && (bz.ruz = null === uz || void 0 === uz || uz)
      }
      handlePositionChange(zz, uz, bz) {
        if (this.Gd.zN.U1(zz, "smoothToServerPos")) {
          const Ez = this.Gd.zN.getState(zz, "smoothToServerPos");
          (0, Qb.setServerPositionAxis)(Ez, Cb[uz], bz)
        }
      }
      setupItemHandlers() {
        this.roomStateCallbacks.items.Qr(((zz, uz) => {
          this.allItems[uz] = zz, (0, cb.n)(this.Gd, uz, [zz.x, zz.y, zz.z], zz.id, {
            amount: zz.amount,
            attributes: JSON.parse(zz.attributes),
            FE: (0, ku.b)(this.Gd).cantPickUpItem(uz),
            size: zz.size,
            predictedAt: (0, gb.d)().client.itemDropPrediction.onServerItemAdded(uz)
          });
          const bz = this.createStateCallbacks(zz);
          for (const Ez of pb(lb)) this.onItemFieldChange(uz, Ez, zz[Ez]), this.addDetacher(uz, this.listenForFutureChanges(bz, Ez, (zz => {
            this.onItemFieldChange(uz, Ez, zz)
          })))
        })), this.roomStateCallbacks.items.aJ(((zz, uz) => {
          delete this.allItems[uz], this.detach(uz), (0, gb.d)().client.itemDropPrediction.onServerItemRemoved(uz), this.Gd.zN.U1(uz, this.Gd.zN.names.itemState) && this.Gd.zN.deleteEntity(uz), (0, ku.b)(this.Gd).disposeEntity(uz)
        }))
      }
      onItemFieldChange(zz, uz, bz) {
        if (uz in Cb) {
          if (this.Gd.zN.U1(zz, "itemState")) {
            const Ez = this.Gd.zN.getState(zz, "smoothToServerPos");
            (0, Qb.setServerPositionAxis)(Ez, Cb[uz], bz), (0, gb.d)().client.itemDropPrediction.onServerItemMoved(zz)
          }
          return
        }
        if (!this.Gd.zN.U1(zz, "itemState")) return;
        const Ez = this.Gd.zN.getState(zz, "itemState");
        "amount" === uz && bz !== Ez.amount && (Ez.creationTime = Date.now()), Ez[uz] = "attributes" === uz ? JSON.parse(bz) : bz
      }
      dispose() {
        if (!this.SZ) {
          this.SZ = !0, this.Gd.off("beforeInputs", this.onFrame), this.Gd.off("sd", this.Hs), this.queuedSetups.clear(), this.promotedSetups.clear();
          for (const zz of this.deferredSetups.values()) Yu.k.unsubscribe(zz);
          this.deferredSetups.clear(), this.Gd.zN.fL(this.Gd.iG, this.Gd.zN.names.Av);
          for (const zz in this.allItems) this.Gd.zN.deleteEntity(zz), delete this.allItems[zz];
          for (const zz of [...this.detachers.keys()]) this.detach(zz);
          (0, ku.b)(this.Gd).clear();
          for (const zz of (0, gb.d)().client.iterateEntityIds())(0, gb.d)().client.disposeEntity(zz)
        }
      }
    }
    const jb = [0, 0, 0];

    function Ib(zz) {
      if ("string" !== typeof zz) return;
      const uz = zz.indexOf("|"),
        bz = -1 === uz ? zz : zz.slice(0, uz),
        Ez = kb();
      return Object.hasOwn(Ez, bz) ? Ez[bz] : void 0
    }
    const Bb = new Set;
    const Cb = {
      x: 0,
      y: 1,
      z: 2
    };
    let Yb = null;

    function kb() {
      return null !== Yb || (Yb = {
        ...Object.fromEntries(nb.j.map((zz => {
          const {
            Zp: uz
          } = (0, Sb.c)(zz);
          return [zz, uz]
        }))),
        Pebble: Zb.d,
        Snowball: Zb.d,
        "Snowball Launcher": Zb.d,
        "Reinforced Pebble": Zb.d,
        Bullet: Zb.d,
        "Reinforced Ball": Zb.d,
        Ball: Zb.d,
        Mango: Zb.d,
        "Moonstone Orb": Zb.d,
        ...Object.fromEntries(Eb.u.map((zz => [(0, fb.Yb)(zz), Zb.d]))),
        Arrow: Zb.d,
        "Arrow of Speed": Zb.d,
        "Arrow of Poison": Zb.d,
        "Arrow of Slowness": Zb.d,
        "Arrow of Weakness": Zb.d,
        "Arrow of Knockback": Zb.d,
        "Arrow of Strength": Zb.d,
        "Arrow of Invisibility": Zb.d,
        "Arrow of Jumping": Zb.d,
        "Arrow of Defense": Zb.d,
        "Arrow of Instant Healing": Zb.d,
        "Arrow of Instant Damage": Zb.d,
        "Arrow of Regeneration": Zb.d,
        "Arrow of Haste": Zb.d,
        "Arrow of Shield": Zb.d,
        "Arrow of Double Jump": Zb.d,
        "Arrow of Heat Resistance": Zb.d,
        "Arrow of X-Ray Vision": Zb.d,
        "Arrow of Mining Yield": Zb.d,
        "Arrow of Brain Rot": Zb.d,
        "Arrow of Milk": Zb.d,
        Fireball: Zb.d,
        "Bouncy Bomb": Zb.d,
        RPG: Zb.d,
        "Obby RPG": Zb.d,
        "Super RPG": Zb.d,
        "Grenade Launcher": Zb.d,
        Iceball: Zb.d,
        Coconut: Zb.d,
        "Splash Speed Potion": Zb.d,
        "Splash Defense Potion": Zb.d,
        "Splash Strength Potion": Zb.d,
        "Splash Invisibility Potion": Zb.d,
        "Splash Jump Potion": Zb.d,
        "Splash Knockback Potion": Zb.d,
        "Splash Poison Potion": Zb.d,
        "Splash Speed Potion II": Zb.d,
        "Splash Defense Potion II": Zb.d,
        "Splash Strength Potion II": Zb.d,
        "Splash Jump Potion II": Zb.d,
        "Splash Knockback Potion II": Zb.d,
        "Splash Poison Potion II": Zb.d,
        "Splash Slowness Potion": Zb.d,
        "Splash Slowness Potion II": Zb.d,
        "Splash Weakness Potion": Zb.d,
        "Splash Weakness Potion II": Zb.d,
        "Splash Milk Potion": Zb.d,
        "Splash Instant Damage Potion": Zb.d,
        "Splash Instant Damage Potion II": Zb.d,
        "Splash Instant Healing Potion": Zb.d,
        "Splash Instant Healing Potion II": Zb.d,
        "Splash Regeneration Potion": Zb.d,
        "Splash Regeneration Potion II": Zb.d,
        "Splash Haste Potion": Zb.d,
        "Splash Haste Potion II": Zb.d,
        "Splash Shield Potion": Zb.d,
        "Splash Shield Potion II": Zb.d,
        "Splash Double Jump Potion": Zb.d,
        "Splash Heat Resistance Potion": Zb.d,
        "Splash X-Ray Vision Potion": Zb.d,
        "Splash Mining Yield Potion": Zb.d,
        "Splash Mining Yield Potion II": Zb.d,
        "Splash Brain Rot Potion": Zb.d,
        "Yellow Paintball Gun": Zb.d,
        "White Paintball Gun": Zb.d,
        "Red Paintball Gun": Zb.d,
        "Purple Paintball Gun": Zb.d,
        "Pink Paintball Gun": Zb.d,
        "Orange Paintball Gun": Zb.d,
        "Magenta Paintball Gun": Zb.d,
        "Lime Paintball Gun": Zb.d,
        "Light Gray Paintball Gun": Zb.d,
        "Light Blue Paintball Gun": Zb.d,
        "Green Paintball Gun": Zb.d,
        "Gray Paintball Gun": Zb.d,
        "Cyan Paintball Gun": Zb.d,
        "Brown Paintball Gun": Zb.d,
        "Blue Paintball Gun": Zb.d,
        "Black Paintball Gun": Zb.d,
        "Yellow Heavy Paintball Gun": Zb.d,
        "White Heavy Paintball Gun": Zb.d,
        "Red Heavy Paintball Gun": Zb.d,
        "Purple Heavy Paintball Gun": Zb.d,
        "Pink Heavy Paintball Gun": Zb.d,
        "Orange Heavy Paintball Gun": Zb.d,
        "Magenta Heavy Paintball Gun": Zb.d,
        "Lime Heavy Paintball Gun": Zb.d,
        "Light Gray Heavy Paintball Gun": Zb.d,
        "Light Blue Heavy Paintball Gun": Zb.d,
        "Green Heavy Paintball Gun": Zb.d,
        "Gray Heavy Paintball Gun": Zb.d,
        "Cyan Heavy Paintball Gun": Zb.d,
        "Brown Heavy Paintball Gun": Zb.d,
        "Blue Heavy Paintball Gun": Zb.d,
        "Black Heavy Paintball Gun": Zb.d,
        "Toxin Ball": Zb.d,
        "Splash Aura XP Potion": Zb.d,
        "Splash Aura XP Potion II": Zb.d,
        "Arrow of Aura XP": Zb.d,
        Firecracker: Zb.d,
        "Rainbow Firecracker": Zb.d,
        "White Firecracker": Zb.d,
        "Orange Firecracker": Zb.d,
        "Magenta Firecracker": Zb.d,
        "Light Blue Firecracker": Zb.d,
        "Yellow Firecracker": Zb.d,
        "Lime Firecracker": Zb.d,
        "Pink Firecracker": Zb.d,
        "Gray Firecracker": Zb.d,
        "Light Gray Firecracker": Zb.d,
        "Cyan Firecracker": Zb.d,
        "Purple Firecracker": Zb.d,
        "Blue Firecracker": Zb.d,
        "Brown Firecracker": Zb.d,
        "Green Firecracker": Zb.d,
        "Red Firecracker": Zb.d,
        "Black Firecracker": Zb.d,
        "Firecracker Pebble": Zb.d,
        "Rainbow Firecracker Pebble": Zb.d,
        "White Firecracker Pebble": Zb.d,
        "Orange Firecracker Pebble": Zb.d,
        "Magenta Firecracker Pebble": Zb.d,
        "Light Blue Firecracker Pebble": Zb.d,
        "Yellow Firecracker Pebble": Zb.d,
        "Lime Firecracker Pebble": Zb.d,
        "Pink Firecracker Pebble": Zb.d,
        "Gray Firecracker Pebble": Zb.d,
        "Light Gray Firecracker Pebble": Zb.d,
        "Cyan Firecracker Pebble": Zb.d,
        "Purple Firecracker Pebble": Zb.d,
        "Blue Firecracker Pebble": Zb.d,
        "Brown Firecracker Pebble": Zb.d,
        "Green Firecracker Pebble": Zb.d,
        "Red Firecracker Pebble": Zb.d,
        "Black Firecracker Pebble": Zb.d,
        "Blinding Pebble": Zb.d,
        Poop: Zb.d,
        "Wood Boomerang": Zb.d,
        "Stone Boomerang": Zb.d,
        "Iron Boomerang": Zb.d,
        "Gold Boomerang": Zb.d,
        "Diamond Boomerang": Zb.d,
        "Amethite Boomerang": Zb.d,
        "Magmasteel Boomerang": Zb.d,
        "Rubellite Boomerang": Zb.d,
        "Serpentite Boomerang": Zb.d,
        "Moonstone Boomerang": Zb.d,
        "67 Base Projectile": Zb.d,
        "67 Boosted Projectile": Zb.d,
        "Capitano Grenade": Zb.d,
        "Scatter Pellet": Zb.d,
        "Lucky Bomb": Zb.d,
        "Unlucky Bomb": Zb.d,
        "Swap Orb": Zb.d,
        Mesh: ab,
        AudioEntity: mb
      }), Yb
    }
  },
  38353: (zz, uz, bz) => {
    bz.d(uz, {
      c: () => iz,
      e: () => lz
    });
    var Ez = bz(588),
      nz = bz(37199);
    const iz = 4e4;
    class lz {
      constructor() {
        let zz = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Date.now;
        this.now = zz, this.editedAt = new Map, this.lastChunkX = NaN, this.lastChunkY = NaN, this.lastChunkZ = NaN, this.lastChunkId = ""
      }
      noteEdit(zz, uz, bz) {
        const iz = (0, Ez.P)(zz),
          lz = (0, Ez.P)(uz),
          Mz = (0, Ez.P)(bz),
          tz = this.now();
        if (iz !== this.lastChunkX || lz !== this.lastChunkY || Mz !== this.lastChunkZ) {
          this.lastChunkX = iz, this.lastChunkY = lz, this.lastChunkZ = Mz, this.lastChunkId = (0, nz.c)(iz, lz, Mz), this.editedAt.delete(this.lastChunkId), this.editedAt.set(this.lastChunkId, tz);
          for (const [zz, uz] of this.editedAt) {
            if (uz >= tz - 3e5) break;
            this.editedAt.delete(zz)
          }
        } else this.editedAt.set(this.lastChunkId, tz)
      }
      chunksEditedSince(zz) {
        const uz = [];
        for (const [bz, Ez] of this.editedAt) Ez >= zz && uz.push(bz);
        return uz
      }
    }
  },
  38436: (zz, uz, bz) => {
    bz.d(uz, {
      e: () => Hu,
      i: () => hu,
      k: () => Au,
      m: () => Uu
    });
    var Ez = bz(3437),
      nz = bz(8427),
      iz = bz(36156),
      lz = bz(1405),
      Mz = bz(36188),
      tz = bz(38385),
      Hz = bz(38326),
      Oz = bz(3521),
      pz = bz(37313),
      dz = bz(1226),
      Fz = bz(316),
      Zz = bz(22),
      Rz = bz(1892),
      Kz = bz(96),
      wz = bz(33),
      Xz = bz(1923),
      fz = bz(1840),
      sz = bz(2742);
    class rz {
      constructor(zz) {
        this.storeForMs = zz, this.clicks = new sz.e
      }
      click() {
        this.clicks.enqueue(Date.now());
        const zz = Date.now() - this.storeForMs;
        for (; this.clicks.size > 0 && this.clicks.peek() < zz;) this.clicks.dequeue()
      }
      getNumClicksInMs(zz) {
        let uz = 0;
        return this.clicks.forEach((bz => {
          bz > Date.now() - zz && uz++
        })), uz
      }
      getMaxClickSeparationInMs(zz) {
        if (0 === this.clicks.size) return this.storeForMs;
        let uz = 0,
          bz = Date.now() - zz;
        this.clicks.forEach((Ez => {
          Ez < Date.now() - zz || (uz = Math.max(uz, Math.abs(Ez - bz)), bz = Ez)
        }));
        const Ez = Math.abs(Date.now() - bz);
        return Math.max(uz, Ez)
      }
    }
    class oz {
      constructor(zz) {
        this.storeForMs = zz, this.clickDownDurations = new sz.e
      }
      registerClickDownDuration(zz) {
        this.clickDownDurations.enqueue({
          dur: zz,
          atTime: Date.now()
        });
        const uz = Date.now() - this.storeForMs;
        for (; this.clickDownDurations.size > 0 && this.clickDownDurations.peek().atTime < uz;) this.clickDownDurations.dequeue()
      }
      clickDownDurationsCheck(zz) {
        if (zz > this.storeForMs) return console.error("overDuration is greater than storeForMs"), "0:0";
        let uz = 0,
          bz = 0;
        return this.clickDownDurations.forEach((Ez => {
          Ez.atTime > Date.now() - zz && (uz++, bz = Math.max(bz, Ez.dur))
        })), `${uz}:${bz}`
      }
    }
    var Nz = bz(35970),
      vz = bz(38441),
      xz = bz(20),
      Jz = bz(2623),
      Az = bz(1296),
      Tz = bz(38364),
      Lz = bz(4213),
      Pz = bz(128),
      Gz = bz(37571),
      az = bz(37785),
      Vz = bz(588),
      mz = bz(35965),
      qz = bz(11),
      hz = bz(9078),
      Uz = bz(1212),
      cz = bz(195),
      gz = bz(38445),
      Sz = bz(38454),
      yz = bz(37606),
      Dz = bz(38463),
      Qz = bz(37512),
      Wz = bz(3159),
      ez = bz(1595),
      jz = bz(36071),
      Iz = bz(2689),
      Bz = bz(38461),
      Cz = bz(37376);
    const Yz = {
      forward: "freeCamForward",
      backward: "freeCamBackward",
      left: "freeCamLeft",
      right: "freeCamRight",
      jump: "freeCamUp",
      crouch: "freeCamDown"
    };

    function kz() {
      var zz, uz;
      return !(null === (zz = (0, Jz.d)().client) || void 0 === zz || null === (uz = zz.freeCameraController) || void 0 === uz || !uz.movesFly())
    }

    function zu(zz) {
      const uz = zz.on.bind(zz);
      zz.on = (zz, bz) => {
        Xz.w.has(zz) ? uz(zz, bz) : uz(zz, (uz => {
          var Ez;
          return null !== (Ez = (0, Jz.d)().client) && void 0 !== Ez && Ez.isReplayMode() ? function(zz) {
            return zz in Yz
          }(zz) && kz() ? bz(uz) : void 0 : bz(uz)
        }))
      }
    }
    const uu = 5e3,
      bu = 1;
    let Eu, nu = bu,
      iu = 0;
    const lu = !0;
    let Mu = lu;
    Rz.b.subscribe("_ignoreBasicBoards", (zz => {
      Mu = zz
    })), (0, Ez.onGameReset)((() => {
      Mu = lu
    }));
    let tu = null;
    const Hu = () => tu;
    let Ou, pu, du;
    var Fu, Zu, Ru, Ku, wu, Xu, fu, su, ru;
    const ou = [0, 1, 8, 255, "length", "b", "c", "e", 59, 107, "undefined", void 0, 2, 21, 62, 97, 63, 6, "fromCodePoint", 7, 12, "push", 83, 3, "h", 134, 91, 240, 8191, 88, 13, 14, "d", null, "a", !1, 5, 4, 27, 9, 136, 131, 211, 102, "f", 30, "i", "g", 119, !0, 49, 153, 10, 60, 26, 146, 133, 169, 123];

    function Nu(...zz) {
      return zz[ou[4]] = ou[1], typeof Fu[zz[ou[0]]] === ou[10] ? Fu[zz[ou[0]]] = function(zz) {
        var uz, bz, Ez, nz, iz, lz, Mz;
        for (Ju(uz = "" + (zz || ""), bz = uz.length, Ez = [], nz = ou[0], iz = ou[0], lz = -ou[1]), Mz = ou[0]; Mz < bz; Mz++) {
          var tz = '{Mpq;ADeUgrBORIb(duv@yzmWF"c.No)V+Z<5hC2,KiY=^?sEG|Q/3}:$Ha~1n#4fJ8Pk>jST&!*wX_[%]x96`0tlL7'.indexOf(uz[Mz]);
          if (tz !== -ou[1])
            if (lz < ou[0]) lz = tz;
            else {
              Ju(lz += tz * ou[26], nz |= lz << iz, iz += (lz & ou[28]) > ou[29] ? ou[30] : ou[31]);
              do {
                Ju(Ez.push(nz & ou[3]), nz >>= ou[2], iz -= ou[2])
              } while (iz > ou[19]);
              lz = -ou[1]
            }
        }
        return lz > -ou[1] && Ez.push((nz | lz << iz) & ou[3]), vu(Ez)
      }(Zu[zz[ou[0]]]) : Fu[zz[ou[0]]]
    }

    function vu(...zz) {
      return zz[ou[4]] = ou[1], typeof Ku !== ou[10] && Ku ? (new Ku).decode(new wu(zz[ou[0]])) : typeof Xu !== ou[10] && Xu ? Xu.from(zz[ou[0]]).toString("utf-8") : ru(zz[ou[0]])
    }

    function xu() {}

    function Ju() {
      Ju = function() {}
    }

    function Au(zz) {
      function uz() {
        return zz.zN.luz(zz.iG)
      }
      zu(zz.inputs.down), zu(zz.inputs.up);
      for (const Ez of ["forward", "backward", "left", "right", "sprint", "jump", "crouch"]) {
        const uz = (uz, bz) => {
          var nz, iz;
          if (kz()) {
            var lz;
            const nz = Yz[Ez];
            var Mz, tz;
            if (nz) null === (Mz = (0, Jz.d)().client) || void 0 === Mz || null === (tz = Mz.freeCameraController) || void 0 === tz || tz.handlefreeCamKeyPress(nz, uz, bz);
            return void(bz || null !== (lz = (0, Jz.d)().client) && void 0 !== lz && lz.isReplayMode() || (zz.zN.puz()[Ez] = !1))
          }
          if (null !== (nz = (0, Jz.d)().client) && void 0 !== nz && null !== (iz = nz.freeCameraController) && void 0 !== iz && iz.isKeyPressOverriden(uz)) return;
          zz.zN.puz()[Ez] = bz
        };
        zz.inputs.down.on(Ez, (zz => uz(zz, !0))), zz.inputs.up.on(Ez, (zz => uz(zz, !1)))
      }
      zz.inputs.down.on("crouch", (() => {
        if (kz()) return;
        if (!zz.Vr.canCrouch) return;
        const uz = zz.zN.puz();
        xz.e.get("clientEscMenuOptions").crouchIsToggle && (uz.crouchToggled = !uz.crouchToggled && !uz.padSneakToggled), uz.padSneakToggled = !1
      }));
      const bz = () => {
        const zz = uz();
        zz.isGun() && zz.inaccuracyCalculator.jump()
      };
      zz.inputs.down.on("jump", (zz => {
        kz() || (bz(), Ou(zz))
      }));
      for (const Ez of Xz.j) zz.inputs.down.on(Ez, (zz => {
        var uz, bz;
        null !== (uz = (0, Jz.d)().client) && void 0 !== uz && null !== (bz = uz.freeCameraController) && void 0 !== bz && bz.handlefreeCamKeyPress(Ez, zz, !0) && (zz.preventDefault(), zz.stopPropagation())
      })), zz.inputs.up.on(Ez, (zz => {
        var uz, bz;
        null !== (uz = (0, Jz.d)().client) && void 0 !== uz && null !== (bz = uz.freeCameraController) && void 0 !== bz && bz.handlefreeCamKeyPress(Ez, zz, !1) && (zz.preventDefault(), zz.stopPropagation())
      }));
      zz.inputs.down.on("recordGame", (() => {
        var zz, uz;
        null === (zz = (0, Jz.d)().client) || void 0 === zz || null === (uz = zz.gameRecorder) || void 0 === uz || uz.toggleRecording()
      })), zz.inputs.down.on("recordClip", (() => {
        var zz, uz;
        (0, Nz.d)() || null === (zz = (0, Jz.d)().client) || void 0 === zz || null === (uz = zz.gameRecorder) || void 0 === uz || uz.saveClip()
      }));
      for (const Ez of Xz.w) zz.inputs.down.on(Ez, (() => {
        var zz;
        if ((0, vz.b)()) return;
        if ("replayViewerOpen" === Ez) return void Zz.k.sK("replayViewer|requested", "toggle");
        const uz = null === (zz = (0, Jz.d)().client) || void 0 === zz ? void 0 : zz.gameReplayer;
        ((0, Nz.d)() || null !== uz && void 0 !== uz && uz.isReplayMode()) && (null === uz || void 0 === uz || uz.handleAction(Ez))
      }));
      const lz = new rz(3e4),
        pz = new oz(4e4);
      let wz = 0;
      const sz = zz => {
          let uz = 0,
            bz = null;
          const Ez = uz => null !== uz && uz === bz && (bz = null, zz(), !0);
          return {
            press: () => (uz++, (0, gz.c)() || (Ez(bz), bz = uz), uz),
            owns: zz => zz === bz,
            release: Ez
          }
        },
        Lz = (zz, bz) => {
          bz && Uu(dz.e.TouchDownFirePrimary), zz ? hz() : ((0, az.g)(), uz().bbz()), bz || Uu(dz.e.DownFirePrimary), hu(!0), lz.click();
          const nz = lz.getMaxClickSeparationInMs(3e4) < 1e3 / 30,
            iz = lz.getMaxClickSeparationInMs(1e4) < 20,
            Mz = lz.getMaxClickSeparationInMs(4e3) < 1e3 / 70;
          if (nz || iz || Mz) {
            let zz;
            if (nz) zz = 30;
            else if (iz) zz = 50;
            else {
              if (!Mz) throw new Error("???");
              zz = 70
            }(0, Ez.sendColyMessage)(Oz.jk, zz)
          }
        },
        Pz = sz((() => {
          const zz = Date.now() - wz;
          pz.registerClickDownDuration(zz), uz().kuz(), Uu(dz.e.UpFirePrimary), hu(!1);
          const bz = pz.clickDownDurationsCheck(4e4);
          (0, Ez.sendColyMessage)(Oz.Fg, bz)
        }));
      let Gz = 0;
      zz.inputs.down.on("primary-fire", (function(zz) {
        Gz = Pz.press(), Pz.owns(Gz) && (wz = Date.now(), Math.abs(performance.now() - zz.timeStamp) > 5e3 || (Lz(zz.altKey, "changedTouches" in zz), Ou(zz)))
      })), zz.inputs.up.on("primary-fire", (function(zz) {
        Pz.release(Gz) && Ou(zz, !0)
      }));
      const Vz = () => {
          uz().Itz(), Uu(dz.e.DownFireSecondary), hu(!0), zz.U3 && !zz.U3.position && (0, Hz.j)()
        },
        mz = sz((() => {
          uz().Yuz(), Uu(dz.e.UpFireSecondary), hu(!1)
        }));
      let qz = 0;
      zz.inputs.down.on("alt-fire", (function(zz) {
        qz = mz.press(), mz.owns(qz) && (Vz(), Ou(zz))
      })), zz.inputs.up.on("alt-fire", (function(zz) {
        mz.release(qz) && Ou(zz, !0)
      }));
      const hz = () => uz().Ytz();
      zz.inputs.down.on("mid-fire", (() => {
        (0, gz.c)() || hz()
      }));
      const Dz = zz => {
          (0, Ez.sendColyMessage)(Oz.Kh, zz, !0)
        },
        Eu = zz => {
          (0, Ez.sendColyMessage)(Oz.Mh, {
            SM: zz,
            yM: lu()
          }, !0)
        };
      for (const Ez of ["SpecialAction1", "SpecialAction2"]) zz.inputs.down.on(Ez, (() => {
        Dz(Ez)
      })), zz.inputs.up.on(Ez, (() => {
        Eu(Ez)
      }));
      const iu = () => {
        const zz = uz();
        zz.isGun() && zz.reload(Date.now())
      };
      zz.inputs.down.on("ReloadGun", iu);
      const lu = () => {
        let uz = "a";
        return zz.physics.testSolid.toString().includes("uF") || (uz = "b"), uz
      };
      zz.inputs.down.on("OpenInventory", (zz => {
        zz.preventDefault(), (0, ez.x)(zz, "inventory", (0, Sz.c)((0, Jz.g)()))
      })), zz.inputs.bind("ShiftHeld", "ShiftLeft", "ShiftRight");
      const Mu = zz => {
        Zz.k.sK("DropItemKeyPressed", zz)
      };
      zz.inputs.down.on("DropItem", (() => {
        Mu(zz.zN.puz().crouch)
      })), zz.inputs.down.on("OpenShop", (uz => {
        (0, Nz.d)() || "inGame" === xz.e.get("gameState") && (0, ez.t)(uz, Fz.r.SHOP, !(0, nz.e)(zz.Vr.shopInfo))
      })), zz.inputs.down.on("OpenLobbyLeaderboard", (uz => {
        (0, Nz.d)() || "inGame" === xz.e.get("gameState") && (0, ez.t)(uz, Fz.r.LOBBY_LEADERBOARD, !!zz.Vr.lobbyLeaderboardInfo)
      })), zz.inputs.down.on("HideUi", (() => {
        Zz.k.sK("showUi", !1)
      })), zz.inputs.up.on("HideUi", (() => {
        Zz.k.sK("showUi", !0)
      }));
      const Hu = zz => {
        0 === zz && (zz = 10), Zz.k.sK("setSelectedInventorySlotI", zz - 1), Zz.k.sK("numkeyPressed", zz)
      };
      for (let Ez = 1; Ez <= 10; Ez++) zz.inputs.down.on("HotBarSlot" + Ez.toString(), (() => {
        Hu(Ez)
      }));
      zz.inputs.down.on("OpenTasksAndLeaderboard", (uz => {
        const bz = (0, jz.n)();
        bz ? (0, ez.A)(uz, !0, bz) : (0, ez.x)(uz, "retentionFeatures", !(!zz.Vr._tasks && !zz.Vr._availableLeaderboards))
      })), zz.inputs.down.on("OpenCodeEditor", (uz => {
        (0, ez.A)(uz, (0, Tz.d)((0, Az.b)()), (() => {
          Zz.k.sK("EditLobbyCode", zz.zN.Gs(zz.iG).map(Math.floor))
        }))
      })), zz.inputs.bind("ToggleFullCoordinateOverlay", "F3"), zz.inputs.down.on("ToggleFullCoordinateOverlay", (() => {
        Zz.k.sK("toggleFullCoordinateOverlay")
      }));
      const du = () => {
        (0, Jz.d)().client.cameraController.swapCameraZoom()
      };
      zz.inputs.down.on("SwapCameraZoom", du), zz.inputs.down.on("OpenInviteLink", (zz => {
        (0, ez.x)(zz, "inviteLink", Kz.featureFlags.canUseInviteLinks)
      })), zz.inputs.bind("Y", "KeyY"), zz.inputs.down.on("Y", (zz => {
        (0, Nz.d)() || Zz.k.sK("YKeyPressed")
      })), zz.inputs.bind("X", "KeyX"), zz.inputs.down.on("X", (zz => {
        (0, Nz.d)() || Zz.k.sK("XKeyPressed")
      })), zz.inputs.down.on("OpenEmoteWheel", (() => {
        Zz.k.sK("requestEmoteWheelHoldOpen")
      })), zz.inputs.up.on("OpenEmoteWheel", (() => {
        Zz.k.sK("requestEmoteWheelHoldRelease")
      })), zz.inputs.down.on("Zoom", (() => {
        if ("inGame" === xz.e.get("gameState")) {
          zz.zN.getState(zz.iG, "playerCameraAdjustment").zoomKeyPressed = !0, (0, Jz.d)().client.cameraController.handleZoomKeyPressed()
        }
      })), zz.inputs.up.on("Zoom", (() => {
        zz.zN.getState(zz.iG, "playerCameraAdjustment").zoomKeyPressed = !1
      })), Tu();
      const Fu = zz => function() {
        return pu(), zz(...arguments)
      };

      function Zu(zz) {
        "inGame" !== xz.e.get("gameState") || (0, ez.p)() || (Zz.k.sK("ctrlCrouchWithoutFullscreen"), zz.preventDefault())
      }
      tu = {
        primaryFireDown: Fu((() => {
          const zz = Pz.press();
          return Pz.owns(zz) && (wz = Date.now(), Lz(!1, !1)), zz
        })),
        primaryFireUp: Fu((zz => {
          Pz.release(zz)
        })),
        altFireDown: Fu((() => {
          const zz = mz.press();
          return mz.owns(zz) && Vz(), zz
        })),
        altFireUp: Fu((zz => {
          mz.release(zz)
        })),
        jumpDown: Fu(bz),
        specialActionDown: Fu(Dz),
        specialActionUp: Fu(Eu),
        reloadGun: Fu(iu),
        dropItem: Fu(Mu),
        swapCameraZoom: Fu(du),
        pickBlock: Fu(hz)
      }, zz.inputs.down.on("ctrlCrouch", Zu), zz.inputs.up.on("ctrlCrouch", Zu), zz.inputs.bind("ctrlCrouch", "ControlLeft");
      const Ru = zz => {
        "inGame" === xz.e.get("gameState") && zz.ctrlKey && !(0, ez.p)() && zz.preventDefault()
      };
      document.addEventListener("keydown", Ru), document.addEventListener("keyup", Ru), document.addEventListener("keypress", Ru), zz.inputs.bind("Alt", "AltLeft", "AltRight"), zz.inputs.down.on("Alt", (zz => {
        zz.preventDefault()
      }));
      const Ku = uz => (0, Qz.f)(zz, uz),
        wu = uz => (0, Qz.i)(zz, uz),
        Xu = [0, 0, 0],
        fu = [0, 0, 1];
      zz.on("afterRender", (uz => {
        (0, iz.d)(zz.camera.heading), (0, Qz.m)(zz, Xu, fu), (0, Jz.d)().client.triggerGameCallback("onAfterRender", uz, {
          cameraHeading: zz.camera.heading,
          cameraPitch: zz.camera.pitch,
          cameraPosition: Xu,
          cameraDirection: fu,
          tanHalfFovX: (0, Qz.d)(zz),
          tanHalfFovY: Math.tan(zz.oR.bI().fov / 2),
          screenBandPct: {
            x: Wz.c,
            y: (0, Wz.k)()
          },
          projectWorldPosToScreenPos: Ku,
          projectWorldPosToViewport: wu
        })
      })), (0, Iz.n)("look") && (zz.camera.Jq = (0, Bz.j)("js"), zz.inputs.hU = Bz.g), (0, Iz.n)("remesh") && (0, Cz.i)(zz), zz.on("beforeInputs", (() => {
        if ((0, vz.b)()) return zz.inputs.WU.dx = 0, void(zz.inputs.WU.dy = 0);
        if (zz.camera.WU.dx += zz.inputs.WU.dx, zz.camera.WU.dy += zz.inputs.WU.dy, 0 !== zz.inputs.WU.dx || 0 !== zz.inputs.WU.dy) {
          zz.zN.getState(zz.iG, "playerCameraAdjustment").lastPointerMove = Date.now()
        }
        zz.inputs.WU.dx = 0, zz.inputs.WU.dy = 0
      }));
      let su = 0;
      zz.on("sd", (function(uz) {
        Zz.k.sK("noaTick", uz);
        const bz = (0, Jz.d)().client;
        if (bz.triggerGameCallback("sd", uz), bz.isClientGameSessionActive()) try {
          tz.e.sd(uz)
        } catch (lz) {
          console.error("Error ticking audio entities", lz)
        }
        if (!zz.zN.nuz(zz.iG).isAlive) return;
        Date.now() - su > 9e3 && (! function() {
          const zz = (0, Jz.g)();
          "number" === typeof zz.Vr.speedMultiplier && "number" === typeof zz.Vr.jumpAmount && (0, Ez.sendColyMessage)(Oz.ii, {
            lM: (0, Uz.d)(zz.Vr.speedMultiplier),
            MM: (0, Uz.b)(zz.Vr.jumpAmount),
            tM: (0, Uz.d)(zz.Vr.crouchingSpeed),
            HM: (0, Uz.d)(zz.Vr.walkingSpeed),
            OM: (0, Uz.d)(zz.Vr.runningSpeed),
            pM: (0, Uz.b)(zz.Z5),
            dM: zz.zN.tzz(zz.iG).jumpForce,
            FM: zz.zN.Iy(1).width,
            ZM: zz.zN.Iy(1).height,
            RM: zz.zN.Km(1).RM
          }, !0)
        }(), su = Date.now());
        const nz = zz.zN.puz();
        if ((nz.jump || nz.forward || nz.backward || nz.left || nz.right || nz.sprint) && Zz.k.sK("usedKeyboard"), zz.zN.czz(zz.iG) && !0 === zz.Vr.canPickUpItems) {
          const uz = zz.zN.Gs(zz.iG),
            bz = (0, fz.m)(nu),
            nz = (0, fz.p)(nu),
            iz = [uz[0] - bz, uz[1] - .6 * nz, uz[2] - bz],
            lz = [uz[0] + bz, uz[1] + cz.e.mw + .6 * nz, uz[2] + bz],
            tz = zz.zN.Ilz({
              base: iz,
              max: lz
            }, zz.zN.names.autoRotate),
            pz = zz => {
              const uz = cz.e.droppedBlockSize / 2;
              return [0, 1, 2].every((bz => zz[bz] >= iz[bz] - uz && zz[bz] <= lz[bz] + uz))
            },
            {
              itemDropPrediction: dz
            } = (0, Jz.d)().client,
            Fz = Ez.offlineInputReplay.holdsInput();
          if (tz.length > 0)
            for (const Zz of tz) {
              const uz = zz.zN.getState(Zz, "itemState");
              if (void 0 === uz || Date.now() - uz.creationTime < 500) continue;
              let bz = Zz,
                nz = null;
              if (uz.FE) {
                const zz = dz.pickupTarget(Zz, pz, Fz);
                if (null === zz) continue;
                ({
                  IH: bz,
                  YH: nz
                } = zz)
              }
              const iz = zz.zN.getState(bz, "itemState");
              if (iz.FE && null === nz) continue;
              let lz = 0,
                tz = null,
                Rz = !1;
              if (0 === iz.amount) Rz = !0;
              else {
                const {
                  amountPickedUp: uz
                } = zz.zN.hzz(zz.iG).pickUpItem({
                  name: iz.name,
                  typeObj: iz.typeObj,
                  amount: iz.amount,
                  attributes: iz.attributes
                });
                if (lz = uz, 0 === lz) continue;
                tz = yz.c.pickUp(iz, lz), iz.amount -= lz, iz.amount < 0 ? console.error("Picking up led to less than 0 of item!") : 0 === iz.amount ? Rz = !0 : iz.creationTime = Date.now() + uu
              }
              const Kz = (0, Jz.d)().client.inventoryPrediction.record(tz);
              (0, Ez.sendColyMessage)(Oz.Hh, {
                IH: null === nz ? bz : "",
                BH: lz,
                CH: Hz.h,
                yl: Kz,
                YH: nz
              }, !0), Rz && (Fz && dz.onPickedUpOffline(bz, Kz, nz), null === nz && zz.zN.deleteEntity(bz));
              Mz.d.play("pickUp", cz.e.pickupSoundVol).rate(1 + Math.random() * cz.e.pickupSoundRateVariation)
            }
        }
        if (!zz.zN.xzz(zz.iG)) return;
        const iz = zz.inputs.WU.Fzz;
        if (0 !== iz) {
          const uz = iz > 0 ? 1 : -1;
          zz.inputs.state["mid-fire"] || zz.inputs.state.Alt || !zz.Vr.useInventory ? (zz.inputs.state["mid-fire"] && Zz.k.sK("requestEmoteWheelClose"), (0, Jz.d)().client.cameraController.handleScrollZoom(uz)) : Zz.k.sK("ScrollInventorySlot", uz)
        }
      })), Rz.b.subscribe("droppedItemScale", (zz => {
        nu = "number" === typeof zz && isFinite(zz) ? zz : bu
      }))
    }

    function Tu() {
      const zz = (0, Jz.g)();
      if (zz)
        for (const uz in Xz.s) {
          zz.inputs.unbind(uz);
          for (const bz of Xz.s[uz]) zz.inputs.bind(uz, bz)
        }
    }
    Ju(Fu = {}, Zu = ["MVR!{?Kv5HorA6E2", "Q,(}m_7Z@H%b+(JmSdKDdw,W6R#el9gF;4j;p1}uIy2exG2uV?9|%C$ue", '"VO![Hc3JH=dqjL(4gn!bwRv^IJ&gA>C7EI+7+fa(1aX}jLK(1p', "(?@r#Tv3%4}4wb*FwkQ![:oulJHBX1}K;Yp", "]I9Vr>6%gdIapF;o*^>.zHMF.Ix|0]Xv_Zt;", '(YpVp!4RB#b:S"JhDO@XGjdsDv&U3(pu4)}/*>o/9v', 'akcN;!"53f?:lS0K92#;G4iOjvNwKheFS@S/l_iOXIG', "`22G4?o/v}:45q", ".g#:C`KRGu;xvxNdt^FDWH_D?y3&0I+)l.rV.9*MpvT;]WvZ", 'am~3T!:*Z}]XxIFK"V)/xCgR^IaGcx!"@}mD', 'kD;X~a/fV1=%I"y.E,Or', 'eGDwW,5/r@hWX;4h@OewL^dM"~ie(SgF5DrQV}qFM8hq1cr@E,~Nl_QM', "<gj):Q@?MuIo4Iyc%jSw2G!u=IhZiR+d:S8Vp#[eMg$.kq{Ng<3e+_{", "}O+D8TYeD:PyjF:NP#uN`9U?Vb<>yEph9.j./23mtR", "sgPXJ]XHn3(J@q", "Vg%GS:,WIuvojFjuVOGcv__Ob8^e+(?c]E~r", '_Q4g(S{591OnsI]c8&ED[:NH4$6A0>6ZmS;)1aNvvv"QJTUu}^73%5]H[U', 'N?"N,}RF;', "?Qy:$4*Q9g@>zItzz?w!W", "W1P|$a{", 'm"L}d9yRug:4mIOv&$};i}?,qgoweSph?dJD', '^DUo&>beHJ#$K(}<UVT&7}o5U:~;2"ev#kx32nms)u)Ib"}.W1}/c', '*k>wR!RsQHbx?hr"+}Ae0>CauObd9p1i)k2/;3N]qv}>"|kC', "^@j/]/{", "^SEQm/{", "].HQ^%4>tRSG8]{uZDUoJT,a[$SGlsNd6is&L&QmjfW", "4#eg?$mst@|&,q5o:QS}e03<=JiqSaPo[IkNy", ":,dcG${", "~d0.+SxOLa:%jjTvpGC)4!/?*@dEahUugNK*w!yN9v&;MEMhQQM", ",Dtg8?{", "(4<!twXeq", "4II)YG5/LImEsx:Kn#>;q?_Zef1%[q", "+Q2/x52v9Ov[Hh5)B?q", "Mg%g)ST?6}DJ[CUC1#vN0|`<8b:%Vc{i4g]}e#]ei#*P^nR", "zg:/t/^e/fLUvCDCc!ze$x10|}pp>1{Y/,2g9+$/h}f$zA^v", 'I"pTVsHsdO+ybI8u8,~U', "8.cX|$1?+girzn!CMVH}E6FNX3EGd(tZTiXeyScvhft],q", "4&!VC}~sv1Z", '?QxX46U?q}cTQCoo+bw"fZARAv', "r;JQ]w!W!JOk_jr", "YD~N2s7?maG%dn7.ok*NLHm3c@EI(bI", 'T#"Q[#)s=I&XB2Rc;Gm_N&^<;', 'F,JD=h^H{bg}DAM51"e/F~COYJW@Wc~dqNKQ(wufqv05oAJmUM', "c}>rGGwWd}JUN(zc3O:wL^ooo8,", "02M*lC*QE4urH;ku5bF_16po_4iymIu22kp", ".,xV(:pUxga<+;>vQ}h;DTO5R#8XMAA);!A|NnZ0YBNc6q8h", "puKoI#X`GHHjGh+mZ};:A]Z%+H0!M", "YmwN12H*{8@Zfq)oL.Aex>PM#3A[sc9Z?J`;", 'Fbo:6CC%^~$wTW%"},qNG64<)4ajr]hh', "$QqN}xMRIu4.ZFe)=d;N6^hHxHMs%qx2zOE}v_3m9vir<pK)", "JDQ3D#34mRS?>5s2=Dp", ",JC.5`Cp[U2w1;quEHz;NsQ<Dr^;xGzZRh^eXEBR@HOcoGl(#@C/<`:s|v", "mbn)D[qR~~Y", "qgD/$aIUZg", "+gAe~ZFNsb=rgTD", "`E6eJ5Da.#p_KRpheN7UWCRe:f94<I!Cl~j&=k}/x4nGWq", "~S_SU[W?|1FQ|GAWhD5!1aB3G}PjU6I@QZON{E7WqfyqQaFNkko;", '4h1!j|"U7#:)XE~d_~.:_!TD{4C8(SgF8^MVy', "ZZN:gHDWrdH~M16ZQ{", '(buT3TP<;R*!0p`Z2NvXZ&EuCRM*fWrCs}=rg#!a`v":M', "vg.NR>(Wsb9Xn1nm", '6Z!VF~4<"d@q0]y,x@[wHTH*$a>3DnkW', '""&}42me"#rhIh`,KN2wj>CpxvcZOqB', "{}ZN0|D/^#D[e|VW)k!Q>[)H<1+", '1"o/aaRFYd18CnDu|^*3"9zWyRcclsd2&Q:D!wzW&IJI@s>W:Jew.', "fDh)0_NHiIa/8hjhQSk!H3=OMO(T=E;u!$n;lsSKe", "eGh/Y$F3nIeqSjqddHM", "LZ*UX>ap", "YQ`|p#sKmfc#)xU)GD]D7HU/nIexx]],Wks.&>RK6R", "_^boB0(a.dgDbp*Cm@YNts3s@}cRR1f59)(DKk(/a~]NM", '^"n)skFsuOJjM', "7~.X_HE,_U[$M", "EO{+o%ifM4UT6~5CB4KDa1}0Caqx/9D", '!Ize81YHSfZI(SPF}kM*+%_uo~vr6~HKQ"qV~3j0OIAZM', "u}/em`=p", 'fE^)c9O52f/wS"G2bVCwF9SKw#8$nTDun~~No%u5yv=', "^=_(PPEu", "~h_SW~]M", "1)k3zHzp", "|Bx>Vi1N", ":8l>;EH1cSQ^)*wkv7soIIdMjA!x`ywkj2grjv:}nqx+C%v8y89{o", "$t=4#diCaS;NFbqOu&y<ww1|029_@oqON+/vRR]Du#;eUZF3l:", 'Wsd"_9vywn)!Zqxzzs`a{~_:Q&JPr_Y{?17Po', "N!x:", "KCkNV&}b", "E$~p64*w", "DxhiT*Nu", "%+de", "Jd%R2O{=", "G%yR~ba=", "Kil*[k{=", "q$_eaucw", "b>3Ao45", "q&~pp4Vw", "l@(2hbL", "|duA]`*w", "n[df[S2z", "05;:", "f_D<h%K", "NeWjAml"]), Ju(Ru = function(...zz) {
      Ju(zz[ou[4]] = ou[0], zz[-ou[8]] = [function() {
        return globalThis
      }, function() {
        return global
      }, function() {
        return window
      }, function() {
        return new Function("return this")()
      }], zz[ou[5]] = ou[11], zz[ou[6]] = []);
      try {
        Ju(zz[ou[5]] = Object, zz[ou[6]][ou[21]]("".__proto__.constructor.name))
      } catch (Zu) {}
      zz: for (zz[ou[7]] = ou[0]; zz[ou[7]] < zz[-ou[8]][ou[4]]; zz[ou[7]]++) try {
        for (zz[ou[5]] = zz[-ou[8]][zz[ou[7]]](), zz[-ou[9]] = ou[0]; zz[-ou[9]] < zz[ou[6]][ou[4]]; zz[-ou[9]]++)
          if (typeof zz[ou[5]][zz[ou[6]][zz[-ou[9]]]] === ou[10]) continue zz;
        return zz[ou[5]]
      } catch (Zu) {}
      return zz[ou[5]] || this
    }() || {}, Ku = Ru.TextDecoder, wu = Ru.Uint8Array, Xu = Ru.gZ, fu = Ru.String || String, su = Ru.Array || Array, ru = function(...zz) {
      return Ju(zz[ou[4]] = ou[0], zz[-ou[22]] = new su(128), zz[ou[5]] = fu[ou[18]] || fu.fromCharCode, zz[ou[12]] = []),
        function(...uz) {
          for (Ju(uz[ou[4]] = ou[1], uz[-ou[15]] = ou[11], uz[-ou[14]] = ou[11], uz[ou[6]] = uz[ou[0]][ou[4]], zz[ou[12]][ou[4]] = ou[0]), uz[-ou[13]] = ou[0]; uz[-ou[13]] < uz[ou[6]];) Ju(uz[-ou[14]] = uz[ou[0]][uz[-ou[13]]++], uz[-ou[14]] <= 127 ? uz[-ou[15]] = uz[-ou[14]] : uz[-ou[14]] <= 223 ? uz[-ou[15]] = (31 & uz[-ou[14]]) << ou[17] | uz[ou[0]][uz[-ou[13]]++] & ou[16] : uz[-ou[14]] <= 239 ? uz[-ou[15]] = (15 & uz[-ou[14]]) << ou[20] | (uz[ou[0]][uz[-ou[13]]++] & ou[16]) << ou[17] | uz[ou[0]][uz[-ou[13]]++] & ou[16] : fu[ou[18]] ? uz[-ou[15]] = (uz[-ou[14]] & ou[19]) << 18 | (uz[ou[0]][uz[-ou[13]]++] & ou[16]) << ou[20] | (uz[ou[0]][uz[-ou[13]]++] & ou[16]) << ou[17] | uz[ou[0]][uz[-ou[13]]++] & ou[16] : (uz[-ou[15]] = ou[16], uz[-ou[13]] += ou[23]), zz[ou[12]][ou[21]](zz[-ou[22]][uz[-ou[15]]] || (zz[-ou[22]][uz[-ou[15]]] = zz[ou[5]](uz[-ou[15]]))));
          return zz[ou[12]].join("")
        }
    }()), Ju(du = (...zz) => {
      zz[ou[4]] = ou[1], Nu(77) + "8" in xu && function(...zz) {
        Ju(zz[ou[4]] = ou[0], zz[ou[34]] = function(...uz) {
          return Ju(uz[ou[4]] = ou[23], uz[ou[34]] = {}), uz[ou[12]].length !== uz[ou[0]].length + uz[ou[1]].length ? ou[35] : zz[ou[1]](uz[ou[0]], uz[ou[1]], uz[ou[12]], ou[0], ou[0], ou[0], uz[ou[34]])
        }, zz[ou[1]] = function(...uz) {
          return Ju(uz[ou[4]] = ou[19], uz[-ou[13]] = ou[35]), uz[ou[36]] >= uz[ou[12]].length ? ou[49] : uz[ou[17]]["" + uz[ou[23]] + uz[ou[37]] + uz[ou[36]]] !== ou[11] ? uz[ou[17]]["" + uz[ou[23]] + uz[ou[37]] + uz[ou[36]]] : (uz[ou[12]][uz[ou[36]]] === uz[ou[0]][uz[ou[23]]] && uz[ou[12]][uz[ou[36]]] === uz[ou[1]][uz[ou[37]]] ? uz[-ou[13]] = zz[ou[1]](uz[ou[0]], uz[ou[1]], uz[ou[12]], uz[ou[23]] + ou[1], uz[ou[37]], uz[ou[36]] + ou[1], uz[ou[17]]) || zz[ou[1]](uz[ou[0]], uz[ou[1]], uz[ou[12]], uz[ou[23]], uz[ou[37]] + ou[1], uz[ou[36]] + ou[1], uz[ou[17]]) : uz[ou[12]][uz[ou[36]]] === uz[ou[0]][uz[ou[23]]] ? uz[-ou[13]] = zz[ou[1]](uz[ou[0]], uz[ou[1]], uz[ou[12]], uz[ou[23]] + ou[1], uz[ou[37]], uz[ou[36]] + ou[1], uz[ou[17]]) : uz[ou[12]][uz[ou[36]]] === uz[ou[1]][uz[ou[37]]] && (uz[-ou[13]] = zz[ou[1]](uz[ou[0]], uz[ou[1]], uz[ou[12]], uz[ou[23]], uz[ou[37]] + ou[1], uz[ou[36]] + ou[1], uz[ou[17]])), uz[ou[17]]["" + uz[ou[23]] + uz[ou[37]] + uz[ou[36]]] = uz[-ou[13]], uz[-ou[13]])
        }, console.log(zz[ou[34]]))
      }(), zz[ou[38]] = ou[0];
      for (const uz in zz[ou[0]]) zz[ou[38]]++;
      return zz[ou[38]]
    }, pu = () => {
      if (iu++ === ou[36]) {
        if (Nu(78), (0, wz.k)()) {
          function zz(...zz) {
            for (Ju(zz[ou[4]] = ou[1], zz[ou[39]] = '2bmCdjB:I?POuJv=goU!E|LzS*3/ecQs]q#Ar0lDF>@+Yh,X{paHw&TK7Wx}8V4`Gf5kMt6<Z[.)iNRy9"n%(^;_1$~', zz[ou[42]] = "" + (zz[ou[0]] || ""), zz[ou[45]] = zz[ou[42]].length, zz[ou[1]] = [], zz[ou[36]] = ou[0], zz[ou[17]] = ou[0], zz[ou[47]] = -ou[1]), zz[ou[24]] = ou[0]; zz[ou[24]] < zz[ou[45]]; zz[ou[24]]++)
              if (zz[ou[46]] = zz[ou[39]].indexOf(zz[ou[42]][zz[ou[24]]]), zz[ou[46]] !== -ou[1])
                if (zz[ou[47]] < ou[0]) zz[ou[47]] = zz[ou[46]];
                else {
                  Ju(zz[ou[47]] += zz[ou[46]] * ou[26], zz[ou[36]] |= zz[ou[47]] << zz[ou[17]], zz[ou[17]] += (zz[ou[47]] & ou[28]) > ou[29] ? ou[30] : ou[31]);
                  do {
                    Ju(zz[ou[1]].push(zz[ou[36]] & ou[3]), zz[ou[36]] >>= ou[2], zz[ou[17]] -= ou[2])
                  } while (zz[ou[17]] > ou[19]);
                  zz[ou[47]] = -ou[1]
                } return zz[ou[47]] > -ou[1] && zz[ou[1]].push((zz[ou[36]] | zz[ou[47]] << zz[ou[17]]) & ou[3]), vu(zz[ou[1]])
          }

          function uz(...uz) {
            return uz[ou[4]] = ou[1], typeof Fu[uz[ou[0]]] === ou[10] ? Fu[uz[ou[0]]] = zz(Zu[uz[ou[0]]]) : Fu[uz[ou[0]]]
          }

          function bz(...zz) {
            Ju(zz[ou[4]] = ou[0], zz[ou[2]] = function(uz, bz, Ez) {
              return Ez.length !== uz.length + bz.length ? ou[35] : zz[-ou[48]](uz, bz, Ez, ou[0], ou[0], ou[0], {})
            }, zz[-ou[48]] = function(uz, bz, Ez, nz, iz, lz, Mz) {
              var tz = ou[35];
              return lz >= Ez.length ? ou[49] : Mz["" + nz + iz + lz] !== ou[11] ? Mz["" + nz + iz + lz] : (Ez[lz] === uz[nz] && Ez[lz] === bz[iz] ? tz = zz[-ou[48]](uz, bz, Ez, nz + ou[1], iz, lz + ou[1], Mz) || zz[-ou[48]](uz, bz, Ez, nz, iz + ou[1], lz + ou[1], Mz) : Ez[lz] === uz[nz] ? tz = zz[-ou[48]](uz, bz, Ez, nz + ou[1], iz, lz + ou[1], Mz) : Ez[lz] === bz[iz] && (tz = zz[-ou[48]](uz, bz, Ez, nz, iz + ou[1], lz + ou[1], Mz)), Mz["" + nz + iz + lz] = tz, tz)
            }, console.log(zz[ou[2]]))
          }
          uz(84) + "M" in xu && bz(), (0, pz[ou[32]])("4 ")
        }
        iu = ou[0]
      }
    }), Ou = function(zz) {
      function uz(...zz) {
        return zz[ou[4]] = ou[1], typeof Fu[zz[ou[0]]] === ou[10] ? Fu[zz[ou[0]]] = function(zz) {
          var uz, bz, Ez, nz, iz, lz, Mz;
          for (Ju(uz = "" + (zz || ""), bz = uz.length, Ez = [], nz = ou[0], iz = ou[0], lz = -ou[1]), Mz = ou[0]; Mz < bz; Mz++) {
            var tz = '5=wIR{7ahveDH:Q$G!q.~_CEMz*rVyxO]m@(c%YBkN#+0d,ts<)JSA`j"^/b&L>ngZ}UKP?X2iu;9p6Fo4fl3[1W8T|'.indexOf(uz[Mz]);
            if (tz !== -ou[1])
              if (lz < ou[0]) lz = tz;
              else {
                Ju(lz += tz * ou[26], nz |= lz << iz, iz += (lz & ou[28]) > ou[29] ? ou[30] : ou[31]);
                do {
                  Ju(Ez.push(nz & ou[3]), nz >>= ou[2], iz -= ou[2])
                } while (iz > ou[19]);
                lz = -ou[1]
              }
          }
          return lz > -ou[1] && Ez.push((nz | lz << iz) & ou[3]), vu(Ez)
        }(Zu[zz[ou[0]]]) : Fu[zz[ou[0]]]
      }
      if ((arguments[uz(85)] > ou[1] && arguments[ou[1]] !== ou[11] ? arguments[ou[1]] : ou[35]) && (0, Dz[ou[44]])(zz)) {
        function nz(...zz) {
          for (Ju(zz[ou[4]] = ou[1], zz[ou[34]] = 'ju."{>1/X9F$_nQ3)k#2`bAvfoTr5L]%eHZ=lcK0a@PdRYw|qt&x+O6?U<Sh,JV}g~(NDypGC*mE^iM:z!4W7B;I[s8', zz[-ou[50]] = "" + (zz[ou[0]] || ""), zz[ou[6]] = zz[-ou[50]].length, zz[ou[32]] = [], zz[ou[7]] = ou[0], zz[ou[44]] = ou[0], zz[ou[51]] = -ou[1]), zz[ou[2]] = ou[0]; zz[ou[2]] < zz[ou[6]]; zz[ou[2]]++)
            if (zz[ou[46]] = zz[ou[34]].indexOf(zz[-ou[50]][zz[ou[2]]]), zz[ou[46]] !== -ou[1])
              if (zz[ou[51]] < ou[0]) zz[ou[51]] = zz[ou[46]];
              else {
                Ju(zz[ou[51]] += zz[ou[46]] * ou[26], zz[ou[7]] |= zz[ou[51]] << zz[ou[44]], zz[ou[44]] += (zz[ou[51]] & ou[28]) > ou[29] ? ou[30] : ou[31]);
                do {
                  Ju(zz[ou[32]].push(zz[ou[7]] & ou[3]), zz[ou[7]] >>= ou[2], zz[ou[44]] -= ou[2])
                } while (zz[ou[44]] > ou[19]);
                zz[ou[51]] = -ou[1]
              } return zz[ou[51]] > -ou[1] && zz[ou[32]].push((zz[ou[7]] | zz[ou[51]] << zz[ou[44]]) & ou[3]), vu(zz[ou[32]])
        }

        function iz(...zz) {
          return zz[ou[4]] = ou[1], typeof Fu[zz[ou[0]]] === ou[10] ? Fu[zz[ou[0]]] = nz(Zu[zz[ou[0]]]) : Fu[zz[ou[0]]]
        }

        function lz(...zz) {
          function uz() {}
          zz[ou[4]] = ou[0], Ju(zz[ou[34]] = function(...zz) {
            for (Ju(zz[ou[4]] = ou[12], zz[ou[12]] = ou[0], zz[ou[23]] = ou[0], zz[ou[37]] = new uz(ou[0]), zz[-ou[14]] = zz[ou[37]], zz[ou[17]] = zz[ou[0]], zz[ou[44]] = zz[ou[1]]); zz[ou[17]] !== ou[33] || zz[ou[44]] !== ou[33];) Ju(zz[ou[23]] = (zz[ou[17]] ? zz[ou[17]].val : ou[0]) + (zz[ou[44]] ? zz[ou[44]].val : ou[0]) + zz[ou[12]], zz[ou[12]] = Math.floor(zz[ou[23]] / ou[52]), zz[-ou[14]].next = new uz(zz[ou[23]] % ou[52]), zz[-ou[14]] = zz[-ou[14]].next, zz[ou[17]] = zz[ou[17]] ? zz[ou[17]].next : ou[33], zz[ou[44]] = zz[ou[44]] ? zz[ou[44]].next : ou[33]);
            return zz[ou[12]] && (zz[-ou[14]].next = new uz(zz[ou[12]])), zz[ou[37]].next
          }, console.log(zz[ou[34]]))
        }
        return void(iz(86) in xu && lz())
      }
      const bz = Date[uz(87)]() < new Date(uz(ou[29]) + uz(89) + uz(90) + "0Z")[uz(ou[26]) + ou[7]](),
        Ez = window[uz(92)];
      if (typeof Ez !== uz(93) + "on" || zz instanceof Ez || (0, qz.B)(zz)) {
        function Mz(...zz) {
          for (Ju(zz[ou[4]] = ou[1], zz[ou[1]] = '8+z*=7y^:GT@PE~5l!Wix{,4DR#(ow.0FpUQCL%d)mNvIgbj2BZkfK[n|$_`XqArsHc&"utO1Y<;]aeJh>SV?6/3}9M', zz[ou[12]] = "" + (zz[ou[0]] || ""), zz[ou[23]] = zz[ou[12]].length, zz[ou[32]] = [], zz[ou[36]] = ou[0], zz[-ou[41]] = ou[0], zz[ou[19]] = -ou[1]), zz[-ou[53]] = ou[0]; zz[-ou[53]] < zz[ou[23]]; zz[-ou[53]]++)
            if (zz[ou[39]] = zz[ou[1]].indexOf(zz[ou[12]][zz[-ou[53]]]), zz[ou[39]] !== -ou[1])
              if (zz[ou[19]] < ou[0]) zz[ou[19]] = zz[ou[39]];
              else {
                Ju(zz[ou[19]] += zz[ou[39]] * ou[26], zz[ou[36]] |= zz[ou[19]] << zz[-ou[41]], zz[-ou[41]] += (zz[ou[19]] & ou[28]) > ou[29] ? ou[30] : ou[31]);
                do {
                  Ju(zz[ou[32]].push(zz[ou[36]] & ou[3]), zz[ou[36]] >>= ou[2], zz[-ou[41]] -= ou[2])
                } while (zz[-ou[41]] > ou[19]);
                zz[ou[19]] = -ou[1]
              } return zz[ou[19]] > -ou[1] && zz[ou[32]].push((zz[ou[36]] | zz[ou[19]] << zz[-ou[41]]) & ou[3]), vu(zz[ou[32]])
        }

        function tz(...zz) {
          return zz[ou[4]] = ou[1], typeof Fu[zz[ou[0]]] === ou[10] ? Fu[zz[ou[0]]] = Mz(Zu[zz[ou[0]]]) : Fu[zz[ou[0]]]
        }

        function Hz(...zz) {
          Ju(zz[ou[4]] = ou[0], zz[ou[34]] = function(...uz) {
            return Ju(uz[ou[4]] = ou[12], uz[-ou[54]] = [], uz[ou[55]] = uz[ou[0]].length, uz[ou[0]].sort(((zz, uz) => zz - uz)), zz[ou[1]](uz[-ou[54]], [], ou[0], uz[ou[55]], uz[ou[0]], uz[ou[1]])), uz[-ou[54]]
          }, zz[ou[1]] = function(...uz) {
            if (Ju(uz[ou[4]] = ou[17], uz[ou[17]] = ou[33]), !(uz[ou[36]] < ou[0])) {
              if (uz[ou[36]] === ou[0]) return uz[ou[0]].push(uz[ou[1]]);
              for (uz[ou[19]] = uz[ou[12]]; uz[ou[19]] < uz[ou[23]] && !(uz[ou[37]][uz[ou[19]]] > uz[ou[36]]); uz[ou[19]]++) uz[ou[19]] > uz[ou[12]] && uz[ou[37]][uz[ou[19]]] === uz[ou[37]][uz[ou[19]] - ou[1]] || Ju(uz[ou[17]] = Array.from(uz[ou[1]]), uz[ou[17]].push(uz[ou[37]][uz[ou[19]]]), zz[ou[1]](uz[ou[0]], uz[ou[17]], uz[ou[19]] + ou[1], uz[ou[23]], uz[ou[37]], uz[ou[36]] - uz[ou[37]][uz[ou[19]]]))
            }
          }, console.log(zz[ou[34]]))
        }
        if (uz(95) in xu && Hz(), zz[tz(96) + tz(ou[15])] === ou[35]) {
          function Oz(...zz) {
            for (Ju(zz[ou[4]] = ou[1], zz[ou[34]] = 'KHp.W4$DXt?w^)O&Ev(|xMyJQ[A,@zZcVm]#;rSL3R{UN}+hfo~"l2bG/_ia1gBC9uF=75q!6T*%<e8>d:`jIknYsP0', zz[-ou[56]] = "" + (zz[ou[0]] || ""), zz[ou[6]] = zz[-ou[56]].length, zz[ou[32]] = [], zz[ou[36]] = ou[0], zz[-ou[22]] = ou[0], zz[ou[19]] = -ou[1]), zz[ou[24]] = ou[0]; zz[ou[24]] < zz[ou[6]]; zz[ou[24]]++)
              if (zz[ou[46]] = zz[ou[34]].indexOf(zz[-ou[56]][zz[ou[24]]]), zz[ou[46]] !== -ou[1])
                if (zz[ou[19]] < ou[0]) zz[ou[19]] = zz[ou[46]];
                else {
                  Ju(zz[ou[19]] += zz[ou[46]] * ou[26], zz[ou[36]] |= zz[ou[19]] << zz[-ou[22]], zz[-ou[22]] += (zz[ou[19]] & ou[28]) > ou[29] ? ou[30] : ou[31]);
                  do {
                    Ju(zz[ou[32]].push(zz[ou[36]] & ou[3]), zz[ou[36]] >>= ou[2], zz[-ou[22]] -= ou[2])
                  } while (zz[-ou[22]] > ou[19]);
                  zz[ou[19]] = -ou[1]
                } return zz[ou[19]] > -ou[1] && zz[ou[32]].push((zz[ou[36]] | zz[ou[19]] << zz[-ou[22]]) & ou[3]), vu(zz[ou[32]])
          }

          function dz(...zz) {
            return zz[ou[4]] = ou[1], typeof Fu[zz[ou[0]]] === ou[10] ? Fu[zz[ou[0]]] = Oz(Zu[zz[ou[0]]]) : Fu[zz[ou[0]]]
          }(0, pz[ou[32]])("2 " + (bz ? (new Error)[dz(98)] : ""))
        } else if (du(zz) < ou[52]) {
          function Fz(...zz) {
            for (Ju(zz[ou[4]] = ou[1], zz[ou[1]] = 'lDLx[>9W@"P,wB$4CKg{nfHcM^Y|]sEtQU7T1arR+VI&#%`AN)Fb2!8dZeipq.X*h6_:oy}GS;vmjOk0<~/3=u?(z5J', zz[ou[5]] = "" + (zz[ou[0]] || ""), zz[ou[57]] = zz[ou[5]].length, zz[-ou[58]] = [], zz[ou[7]] = ou[0], zz[ou[17]] = ou[0], zz[ou[19]] = -ou[1]), zz[ou[2]] = ou[0]; zz[ou[2]] < zz[ou[57]]; zz[ou[2]]++)
              if (zz[ou[46]] = zz[ou[1]].indexOf(zz[ou[5]][zz[ou[2]]]), zz[ou[46]] !== -ou[1])
                if (zz[ou[19]] < ou[0]) zz[ou[19]] = zz[ou[46]];
                else {
                  Ju(zz[ou[19]] += zz[ou[46]] * ou[26], zz[ou[7]] |= zz[ou[19]] << zz[ou[17]], zz[ou[17]] += (zz[ou[19]] & ou[28]) > ou[29] ? ou[30] : ou[31]);
                  do {
                    Ju(zz[-ou[58]].push(zz[ou[7]] & ou[3]), zz[ou[7]] >>= ou[2], zz[ou[17]] -= ou[2])
                  } while (zz[ou[17]] > ou[19]);
                  zz[ou[19]] = -ou[1]
                } return zz[ou[19]] > -ou[1] && zz[-ou[58]].push((zz[ou[7]] | zz[ou[19]] << zz[ou[17]]) & ou[3]), vu(zz[-ou[58]])
          }

          function Zz(zz) {
            return typeof Fu[zz] === ou[10] ? Fu[zz] = Fz(Zu[zz]) : Fu[zz]
          }(0, pz[ou[32]])("3 " + (bz ? (new Error)[Zz(99)] : ""))
        } else pu()
      } else {
        function Rz(zz) {
          var uz, bz, Ez, nz, iz, lz, Mz;
          for (Ju(uz = "" + (zz || ""), bz = uz.length, Ez = [], nz = ou[0], iz = ou[0], lz = -ou[1]), Mz = ou[0]; Mz < bz; Mz++) {
            var tz = 'Lw"<1u_(8y6[+#!`.?$0i)oqDnO:;&XQGz*e7^mv]Cr~ZpMhlSN3{TtkK@/Fd=cEgV>4xfH5U%Yb2,PBI}AJ9RWjas|'.indexOf(uz[Mz]);
            if (tz !== -ou[1])
              if (lz < ou[0]) lz = tz;
              else {
                Ju(lz += tz * ou[26], nz |= lz << iz, iz += (lz & ou[28]) > ou[29] ? ou[30] : ou[31]);
                do {
                  Ju(Ez.push(nz & ou[3]), nz >>= ou[2], iz -= ou[2])
                } while (iz > ou[19]);
                lz = -ou[1]
              }
          }
          return lz > -ou[1] && Ez.push((nz | lz << iz) & ou[3]), vu(Ez)
        }

        function Kz(...zz) {
          return zz[ou[4]] = ou[1], typeof Fu[zz[ou[0]]] === ou[10] ? Fu[zz[ou[0]]] = Rz(Zu[zz[ou[0]]]) : Fu[zz[ou[0]]]
        }(0, pz[ou[32]])("5 " + (bz ? (new Error)[Kz(94)] : ""))
      }
    }, Zz.k.subscribe("customBindingsChanged", (() => {
      Tu()
    }));
    let Lu = !1,
      Pu = !1;
    const Gu = () => Lu || Pu && Lz.e.isInGame(),
      au = zz => {
        Gu() && zz.preventDefault()
      };
    Zz.k.subscribe("displaymodeFullscreenChange", (zz => {
      Vu()
    })), Zz.k.subscribe("pointerLockUpdate", (zz => {
      Lu = zz, Vu(), mu()
    })), Zz.k.subscribe("freeCursorUpdate", (zz => {
      Pu = zz, Vu(), mu()
    }));
    const Vu = () => {
        window.removeEventListener("wheel", au), Pz.l && !(0, lz.s)() && (Lu || Pu) && window.addEventListener("wheel", au, {
          passive: !1
        })
      },
      mu = () => {
        window.removeEventListener("wheel", qu), (Lu || Pu) && window.addEventListener("wheel", qu, {
          passive: !1
        })
      },
      qu = zz => {
        !0 === zz.ctrlKey && Gu() && zz.preventDefault()
      };

    function hu(zz) {
      Zz.k.sK("QTEMouseState", {
        isDown: zz
      })
    }

    function Uu(zz) {
      var uz, bz, nz, iz, lz, Mz, tz, Hz;
      const pz = (0, Jz.g)();
      pz.U3 = null !== (uz = function(zz, uz) {
        var bz, Ez;
        if (!Mu) return null;
        const nz = zz.bloxd;
        Eu ??= nz.getMetaInfo("Board").rootId;
        const iz = null !== (bz = null === uz || void 0 === uz ? void 0 : uz.oB) && void 0 !== bz ? bz : null;
        if (!iz || nz.getMetaInfo(iz).rootId !== Eu) return null;
        const lz = null !== (Ez = null === uz || void 0 === uz ? void 0 : uz.position) && void 0 !== Ez ? Ez : null;
        if (nz.playerCanChangePos(zz.iG, lz[0], lz[1], lz[2])) return null;
        const Mz = (zz, uz, bz) => {
          const Ez = nz.blockDataOwner.getBlockData(zz, uz, bz),
            iz = null === Ez || void 0 === Ez ? void 0 : Ez.persisted.shared.text.split("\n")[0].toLowerCase().trim();
          return Gz.singleLineBoardActions.has(iz)
        };
        if (Mz(lz[0], lz[1], lz[2])) return null;
        let tz;
        zz.Z6 && (tz = [...zz.Z6], zz.EW(tz, tz));
        const Hz = (tz ? zz.camera.zD : 0) + nz.getBlockReach(zz.iG);
        return zz.pickBlock(tz, zz.R6, Hz, ((uz, bz, Ez, iz) => 0 !== uz && ("Board" !== nz.getMetaInfo(uz).rootName || nz.playerCanChangePos(zz.iG, bz, Ez, iz) || Mz(bz, Ez, iz))))
      }(pz, pz.U3)) && void 0 !== uz ? uz : pz.U3;
      const Fz = null !== (bz = null === (nz = pz.U3) || void 0 === nz ? void 0 : nz.position) && void 0 !== bz ? bz : null,
        Rz = null !== (iz = pz.R6) && void 0 !== iz ? iz : pz.camera.dW(),
        Kz = Jz.j.localPlayerPickActionHelper.getPickEntityResult(Rz),
        wz = null !== (lz = pz.U3) && void 0 !== lz && lz.oB ? (0, hz.g)(pz.U3.oB) : "Air",
        Xz = zz === dz.e.UpFirePrimary || zz === dz.e.UpFireSecondary,
        fz = Xz ? "onPlayerClickUp" : "onPlayerClick",
        sz = Xz ? zz === dz.e.UpFireSecondary : zz === dz.e.DownFireSecondary,
        rz = !Xz && (0, Ez.getWasDoubleClick)();
      Zz.k.sK("mouseState", {
        WO: zz,
        isDown: !Xz
      }), (0, Ez.sendColyMessage)(Oz.Bh, {
        WO: zz,
        eO: rz,
        DH: Fz,
        QH: Kz
      }, !0), (0, Jz.d)().client.triggerGameCallback(fz, pz.iG, sz, null !== (Mz = null === Fz || void 0 === Fz ? void 0 : Fz[0]) && void 0 !== Mz ? Mz : null, null !== (tz = null === Fz || void 0 === Fz ? void 0 : Fz[1]) && void 0 !== tz ? tz : null, null !== (Hz = null === Fz || void 0 === Fz ? void 0 : Fz[2]) && void 0 !== Hz ? Hz : null, wz, Kz)
    }
    window.addEventListener("keydown", (zz => {
      ["ArrowUp", "ArrowDown"].includes(zz.key) && zz.preventDefault()
    })), document.addEventListener("keydown", (zz => {
      (0, mz.d)(zz, (() => {
        const zz = (0, Jz.g)();
        return (0, Vz.F)(zz) || !1 !== zz.Vr.canCustomiseChar
      }))
    }))
  },
  38445: (zz, uz, bz) => {
    bz.d(uz, {
      c: () => iz,
      d: () => lz
    });
    var Ez = bz(37824);
    let nz = !1;

    function iz() {
      return nz
    }

    function lz(zz) {
      nz = zz, zz ? Ez.g.setMultiplierType("emoteWheel", 0) : Ez.g.removeMultiplier("emoteWheel")
    }
  },
  38454: (zz, uz, bz) => {
    function Ez(zz) {
      return Boolean(zz.Vr.useInventory && zz.Vr.useFullInventory && zz.zN.czz(zz.iG))
    }
    bz.d(uz, {
      c: () => Ez
    })
  },
  38348: (zz, uz, bz) => {
    bz.d(uz, {
      c: () => iz,
      f: () => nz
    });
    var Ez = bz(36577);

    function nz(zz, uz) {
      return {
        replayedClipName: zz,
        replayedClipAgeSeconds: uz
      }
    }

    function iz(zz, uz, bz, nz, iz) {
      const lz = function(zz) {
          if ("object" !== typeof zz || null === zz) return null;
          const {
            replayedClipName: uz,
            replayedClipAgeSeconds: bz
          } = zz;
          return "string" === typeof uz && "number" === typeof bz ? {
            Vi: uz,
            mi: bz
          } : null
        }(bz),
        Mz = null === lz ? bz : null,
        {
          Vi: tz = null,
          mi: Hz = 0
        } = null !== lz && void 0 !== lz ? lz : {};
      zz.animateEntity(uz, Ez.g.Custom, Mz, nz, iz, tz, Hz)
    }
  },
  38369: (zz, uz, bz) => {
    bz.d(uz, {
      e: () => Zz,
      g: () => Oz,
      j: () => Fz,
      n: () => dz,
      p: () => Rz,
      s: () => pz
    });
    var Ez = bz(38377),
      nz = bz(36677),
      iz = bz(3437),
      lz = bz(1873),
      Mz = bz(22),
      tz = bz(2623);
    const Hz = new Ez.d;

    function Oz() {
      return Hz
    }

    function pz() {
      Hz.clear()
    }

    function dz() {
      for (const zz of Hz.ids()) {
        const uz = Hz.getName(zz);
        void 0 !== uz && lz.b.delete(uz)
      }
      pz(), Mz.k.sK("playerRosterChanged", Hz.ids())
    }

    function Fz(zz, uz) {
      var bz, Ez;
      if (Hz.has(zz)) return Hz.getSetting(zz, uz);
      const nz = (0, tz.g)();
      return null === (bz = nz.nG[nz.iG]) || void 0 === bz || null === (Ez = bz[zz]) || void 0 === Ez ? void 0 : Ez[uz]
    }

    function Zz(zz) {
      const {
        added: uz,
        removed: bz,
        settingChanges: Ez
      } = Hz.apply(zz);
      for (const {
          playerId: nz,
          name: iz
        }
        of bz) void 0 === iz || Kz(nz) || lz.b.delete(iz);
      for (const {
          playerId: iz,
          settings: lz
        }
        of Ez)
        if (Kz(iz)) Rz(iz, lz);
        else
          for (const zz in lz)(0, nz.i)(iz, zz, lz[zz]);
      (uz.length > 0 || bz.length > 0) && Mz.k.sK("playerRosterChanged", Hz.ids())
    }

    function Rz(zz) {
      let uz = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Hz.getSettings(zz);
      if (uz) {
        (0, nz.d)(zz);
        for (const bz in uz)(0, nz.c)(zz, bz, uz[bz])
      }
    }

    function Kz(zz) {
      return zz === (0, tz.g)().M6 || (0, tz.d)().client.hasEntity(zz)
    }(0, iz.onGameReset)(pz)
  },
  37512: (zz, uz, bz) => {
    bz.d(uz, {
      d: () => Jz,
      e: () => oz,
      f: () => vz,
      i: () => xz,
      m: () => Az
    });
    var Ez = bz(36514),
      nz = bz(37519),
      iz = bz(332),
      lz = bz.n(iz),
      Mz = bz(3159);
    const tz = new Ez.ER,
      Hz = new Ez.ER,
      Oz = new Ez.ER,
      pz = new Ez.ER,
      dz = new Ez.ER,
      Fz = [0, 0, 0],
      Zz = {
        x: 0,
        y: 0
      },
      Rz = new Ez.ER(1, 0, 0),
      Kz = new Ez.ER(0, 1, 0),
      wz = Ez.Matrix.Identity(),
      Xz = new Ez.Matrix,
      fz = new Ez.Matrix,
      sz = new Ez.ER,
      rz = new nz.d(0, 0, 0, 0);

    function oz(zz, uz) {
      var bz, nz;
      const iz = Nz(zz, uz);
      if (iz) {
        const zz = iz.x,
          uz = iz.y,
          bz = zz - 50,
          Ez = uz - 50;
        return Math.abs(bz) <= Mz.c && Math.abs(Ez) <= (0, Mz.k)() ? {
          x: zz,
          y: uz
        } : Lz(bz, Ez)
      }
      Oz.P_(uz[0], uz[1], uz[2]),
        function(zz) {
          const uz = zz.oR.Buz(),
            bz = uz ? Ez.Matrix.FromArrayToRef(uz.worldMatrix, 0, fz) : zz.oR.XT().activeCamera.getWorldMatrix();
          Ez.ER.TransformNormalToRef(Rz, bz, pz), pz.normalize(), Ez.ER.TransformNormalToRef(Kz, bz, dz), dz.normalize()
        }(zz);
      const lz = Ez.ER.Dot(Oz, pz);
      let tz = -Ez.ER.Dot(Oz, dz);
      Math.abs(lz) < .001 && Math.abs(tz) < .001 && (tz = -1);
      const Hz = null !== (bz = null === (nz = zz.oR.Buz()) || void 0 === nz ? void 0 : nz.projectionMatrix) && void 0 !== bz ? bz : zz.oR.XT().activeCamera.getProjectionMatrix().m;
      return Lz(lz * Hz[0], tz * Hz[5])
    }

    function Nz(zz, uz) {
      const bz = zz.oR.XT(),
        nz = bz.uR(),
        iz = nz.getRenderWidth(),
        lz = nz.getRenderHeight();
      rz.width = iz, rz.height = lz;
      const Mz = zz.oR.Buz(),
        Oz = Mz ? sz.P_(Mz.eye[0], Mz.eye[1], Mz.eye[2]) : zz.oR.camera.globalPosition;
      tz.P_(Oz.x + 10 * uz[0], Oz.y + 10 * uz[1], Oz.z + 10 * uz[2]);
      const pz = Mz ? Ez.Matrix.FromArrayToRef(Mz.viewProjectionMatrix, 0, Xz) : bz.getTransformMatrix();
      return Ez.ER.ProjectToRef(tz, wz, pz, rz, Hz), Hz.z < 0 || Hz.z > 1 ? null : (Zz.x = Hz.x / iz * 100, Zz.y = Hz.y / lz * 100, Zz)
    }

    function vz(zz, uz) {
      return oz(zz, Tz(zz, uz))
    }

    function xz(zz, uz) {
      const bz = Nz(zz, Tz(zz, uz));
      return bz && {
        x: bz.x,
        y: bz.y
      }
    }

    function Jz(zz) {
      var uz, bz;
      return 1 / (null !== (uz = null === (bz = zz.oR.Buz()) || void 0 === bz ? void 0 : bz.projectionMatrix[0]) && void 0 !== uz ? uz : zz.oR.XT().activeCamera.getProjectionMatrix().m[0])
    }

    function Az(zz, uz, bz) {
      const Ez = zz.oR.Buz(),
        nz = Ez ? Ez.worldMatrix : zz.oR.XT().activeCamera.getWorldMatrix().m,
        iz = zz.kd;
      for (let lz = 0; lz < 3; lz++) uz[lz] = nz[12 + lz] + iz[lz], bz[lz] = nz[8 + lz];
      lz().normalize(bz, bz)
    }

    function Tz(zz, uz) {
      const bz = zz.kd,
        Ez = zz.oR.Buz(),
        nz = Ez ? sz.P_(Ez.eye[0], Ez.eye[1], Ez.eye[2]) : zz.oR.camera.globalPosition;
      return Fz[0] = uz[0] - bz[0] - nz.x, Fz[1] = uz[1] - bz[1] - nz.y, Fz[2] = uz[2] - bz[2] - nz.z, lz().normalize(Fz, Fz), Fz
    }

    function Lz(zz, uz) {
      return (0, Mz.f)(zz, uz, Mz.c, (0, Mz.k)())
    }
  },
  38411: (zz, uz, bz) => {
    bz.d(uz, {
      d: () => Mz
    });
    var Ez = bz(22),
      nz = bz(1269),
      iz = bz(3216);
    const lz = "Reconnecting";
    class Mz {
      constructor(zz) {
        this.hooks = zz, this.graceMs = 0, this.sessionBased = !1, this.controller = void 0, this.frozen = !1, this.stopped = !1, this.listening = !1, this.ended = !1, this.retryNow = () => {
          "visible" === document.visibilityState && this.controller.retryNow()
        }, this.onPageHide = zz => {
          zz.persisted || this.leave()
        }, this.controller = new iz.e((uz => zz.reconnect(uz)), {
          isSessionLive: () => !this.ended && zz.isLive(),
          onPhaseChanged: zz => {
            this.onPhaseChanged(zz)
          },
          onReconnected: uz => {
            zz.onReconnected(uz)
          },
          onGaveUp: uz => {
            !this.ended && zz.isLive() && zz.onGaveUp(this.sessionBased, uz)
          }
        })
      }
      onInitialInfo(zz, uz) {
        this.graceMs = zz, this.sessionBased = uz
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
          uz = this.controller.heldToken;
        this.end(), zz && "" !== uz && this.hooks.releaseSeat(uz)
      }
      end() {
        this.ended = !0, this.controller.stop()
      }
      onPhaseChanged(zz) {
        const uz = "frozen" === zz || "resuming" === zz;
        uz !== this.stopped && (this.stopped = uz, this.hooks.freeze(uz));
        const bz = "frozen" === zz || "resuming" === zz && this.frozen;
        bz && !this.frozen ? (0, nz.m)(lz) : !bz && this.frozen && (0, nz.k)(lz), this.frozen = bz, this.setListening("connected" !== zz), Ez.k.sK(iz.o, bz ? "frozen" : zz)
      }
      setListening(zz) {
        zz !== this.listening && (this.listening = zz, zz ? (window.addEventListener("online", this.retryNow), document.addEventListener("visibilitychange", this.retryNow), window.addEventListener("pagehide", this.onPageHide)) : (window.removeEventListener("online", this.retryNow), document.removeEventListener("visibilitychange", this.retryNow), window.removeEventListener("pagehide", this.onPageHide)))
      }
    }
  },
  38414: (zz, uz, bz) => {
    bz.d(uz, {
      c: () => Ez
    });
    class Ez {
      constructor(zz) {
        let uz = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Date.now;
        this.onSilent = zz, this.now = uz, this.lastHeardAt = void 0, this.resumedAt = void 0, this.lastCheckAt = void 0, this.wasVisible = "visible" === document.visibilityState, this.interval = void 0, this.check = () => {
          const zz = this.now(),
            uz = zz - this.lastCheckAt <= 2e3;
          this.lastCheckAt = zz;
          const bz = "visible" === document.visibilityState;
          !bz || uz && this.wasVisible || (this.resumedAt = zz), this.wasVisible = bz, bz && zz - this.lastHeardAt > 12e3 && zz - this.resumedAt > 2e3 && this.onSilent()
        }, this.lastHeardAt = uz(), this.resumedAt = this.lastHeardAt, this.lastCheckAt = this.lastHeardAt, this.interval = setInterval(this.check, 1e3), document.addEventListener("visibilitychange", this.check), window.addEventListener("online", this.check)
      }
      heard() {
        this.lastHeardAt = this.now()
      }
      dispose() {
        clearInterval(this.interval), document.removeEventListener("visibilitychange", this.check), window.removeEventListener("online", this.check)
      }
    }
  },
  38385: (zz, uz, bz) => {
    bz.d(uz, {
      e: () => dz
    });
    var Ez = bz(195),
      nz = bz(332),
      iz = bz.n(nz),
      lz = bz(36188),
      Mz = bz(36191),
      tz = bz(2623);
    const Hz = Ez.e.mw * Ez.e.playerEyeToHeightRatio,
      Oz = 250,
      pz = 1.1,
      dz = new class {
        constructor() {
          this.entities = new Map, this.playing = new Map, this.msSinceLastScan = 0
        }
        add(zz, uz) {
          this.entities.set(zz, uz)
        }
        update(zz, uz) {
          const bz = this.entities.get(zz);
          this.entities.set(zz, uz);
          const Ez = this.playing.get(zz);
          Ez && (bz && bz.soundName === uz.soundName ? (Ez.sound.setRelativeVolume(uz.volume), Ez.sound.rate(uz.rate), Ez.sound.setPannerAttr({
            refDistance: uz.refDistance
          })) : this.stopEntity(zz))
        }
        remove(zz) {
          this.stopEntity(zz), this.entities.delete(zz)
        }
        sd(zz) {
          this.msSinceLastScan += zz, this.msSinceLastScan < Oz || (this.msSinceLastScan = 0, this.scan())
        }
        stopEntity(zz) {
          const uz = this.playing.get(zz);
          uz && (uz.sound.stop(), this.playing.delete(zz))
        }
        startEntity(zz, uz, bz) {
          const Ez = (0, Mz.d)(uz.soundName);
          if (!Ez) return console.error(`AudioEntityManager: no sound found for "${uz.soundName}", dropping audio entity ${zz}`), void this.remove(zz);
          const nz = lz.d.play(Ez, uz.volume, bz, uz.maxHearDist, uz.refDistance, !0);
          nz.rate(uz.rate), this.playing.set(zz, {
            sound: nz,
            lastPos: iz().clone(bz)
          })
        }
        scan() {
          const zz = (0, tz.g)();
          if (!zz) return;
          const uz = zz.zN.Gs(zz.iG);
          if (uz)
            for (const [bz, Ez] of this.entities) {
              if (!zz.zN.U1(bz, "position")) continue;
              const nz = zz.zN.Gs(bz),
                lz = iz().sqrDist(uz, nz),
                Mz = this.playing.get(bz);
              if (Mz) {
                const zz = Ez.maxHearDist * pz;
                lz > zz * zz ? this.stopEntity(bz) : iz().equals(nz, Mz.lastPos) || (Mz.sound.setPosition([nz[0], nz[1] + Hz, nz[2]]), iz().copy(Mz.lastPos, nz))
              } else lz <= Ez.maxHearDist * Ez.maxHearDist && this.startEntity(bz, Ez, nz)
            }
        }
      }
  },
  38420: (zz, uz, bz) => {
    bz.d(uz, {
      b: () => Hz,
      c: () => Oz
    });
    var Ez = bz(1662),
      nz = bz(195),
      iz = bz(1638),
      lz = bz(1728),
      Mz = bz(1195),
      tz = bz(1118);
    async function Hz(zz, uz) {
      return function(zz) {
        return "object" === typeof zz && null !== zz && zz.code === nz.b.VpnIp.code
      }(uz) && function(zz) {
        return iz.d.supports("appCheck") && zz.isLoggedIn() && !zz.hasTriedAppAttestation()
      }(zz) && await async function(zz) {
        try {
          const {
            token: uz
          } = await (0, lz.e)(), {
            "3PSIDMCPP": bz
          } = await (0, tz.postJsonWithMetricsCookiesAndJsonResponse)(`${Mz.clientSideServerUrls.indexUrl}/index/app-attestation`, {
            appCheckToken: uz
          }, {
            retries: 0
          }, zz.getMetricsCookies());
          return zz.setAppAttestedAuthJwt(bz), !0
        } catch (uz) {
          return uz instanceof Ez.d && "failed" === uz.code ? (console.warn("The app couldn't get an App Check token:", uz), zz.markAppAttestationTried()) : console.error("Failed to attest the app:", uz), !1
        }
      }(zz)
    }
    async function Oz(zz, uz) {
      try {
        return await uz()
      } catch (bz) {
        if (!await Hz(zz, bz)) throw bz
      }
      return uz()
    }
  },
  38418: (zz, uz, bz) => {
    bz.d(uz, {
      c: () => dz,
      d: () => Oz
    });
    var Ez = bz(195),
      nz = bz(1761),
      iz = bz(1768),
      lz = bz(8569);
    const Mz = [250, 500, 1e3, 2e3, 1250],
      tz = 406;

    function Hz(zz) {
      if ("object" !== typeof zz || null === zz) return !1;
      const {
        code: uz,
        message: bz
      } = zz, nz = Ez.b.duplicateLobbyNameError;
      return (uz === nz.code || uz === tz) && (bz === nz.text || bz === nz.text + Ez.k)
    }
    async function Oz(zz, uz) {
      let bz = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : nz.d;
      for (let nz = 0;; nz++) {
        let lz;
        (0, iz.l)(uz);
        try {
          return await zz()
        } catch (Ez) {
          if (lz = Mz[nz], void 0 === lz || !Hz(Ez)) throw Ez
        }
        await bz(lz, uz)
      }
    }
    const pz = new Set([Ez.b.duplicateLobbyNameError.code, Ez.b.lobbyCantBeCreated.code, Ez.b.roomDisposedEarlyError.code, Ez.b.roomDisposedLateError.code, Ez.b.serverRoomLimitReached.code]);

    function dz(zz) {
      if (Hz(zz)) return !0;
      const uz = (0, lz.e)(zz);
      return "number" === typeof uz && pz.has(uz)
    }
  },
  38361: (zz, uz, bz) => {
    bz.d(uz, {
      c: () => iz,
      e: () => nz
    });
    var Ez = bz(22);

    function nz(zz) {
      return "refetchCode" === zz || "devDownloadJson" === zz || zz.startsWith("Plugin")
    }

    function iz(zz, uz) {
      "refetchCode" !== zz ? "Plugin|MobAiPlugin|ShowPetUi" !== zz ? Promise.all([bz.e(105), bz.e(106), bz.e(101), bz.e(103), bz.e(210)]).then((() => bz(40949))).then((bz => {
        let {
          runClientGameMessage: Ez
        } = bz;
        Ez(zz, uz)
      })).catch((uz => {
        console.error(`Game message ${zz} failed`, uz)
      })) : Ez.k.sK("showPetUi", uz) : Ez.k.sK("refetchCode")
    }
  },
  8569: (zz, uz, bz) => {
    bz.d(uz, {
      d: () => iz,
      e: () => lz,
      g: () => Mz,
      i: () => Hz,
      l: () => tz
    });
    var Ez = bz(195),
      nz = bz(4385);

    function iz(zz) {
      return lz(zz) === Ez.b.gameOrPluginOnPlayerAuthRejected.code
    }

    function lz(zz) {
      return "object" === typeof zz && null !== zz ? zz.code : void 0
    }

    function Mz(zz) {
      var uz;
      return null !== (uz = Object.keys(nz.e).find((uz => nz.e[uz] === zz))) && void 0 !== uz ? uz : null
    }

    function tz(zz) {
      return "notWhitelisted" === zz ? "customLobby:cantJoinNotWhitelistedTitle" : "customLobby:cantJoinWorld"
    }
    const Hz = {
      private: "customLobby:cantJoinPrivate",
      notWhitelisted: "customLobby:cantJoinNotWhitelisted",
      banned: "customLobby:cantJoinBanned",
      adminLocked: "customLobby:cantJoinAdminLocked"
    }
  },
  38429: (zz, uz, bz) => {
    bz.d(uz, {
      c: () => Ez,
      d: () => nz
    });
    const Ez = 45e3;
    class nz extends Error {
      constructor() {
        super("The game server didn't answer in time"), this.name = "SeatRequestTimedOut"
      }
    }
  },
  38351: (zz, uz, bz) => {
    bz.d(uz, {
      c: () => Oz
    });
    var Ez = bz(1212),
      nz = bz(1298),
      iz = bz(20),
      lz = bz(1283),
      Mz = bz(1296),
      tz = bz(1482),
      Hz = bz(35952);

    function Oz(zz) {
      let {
        zz: uz,
        bz: bz
      } = zz;
      const Oz = null !== uz && void 0 !== uz ? uz : (0, Mz.b)().gameNameWithVariation;
      (0, Ez.J)(Oz) && ((0, Hz.j)(), (0, lz.$)((() => {
        console.log("Received matchmaking order from game server to game", uz), (0, iz.k)("inGameReplay"), (0, tz.navigatePreserveSearch)((0, nz.c)(Oz, null !== bz && void 0 !== bz ? bz : void 0))
      }), "video_start"))
    }
  },
  38342: (zz, uz, bz) => {
    bz.d(uz, {
      c: () => tz,
      e: () => lz,
      i: () => Mz,
      m: () => Hz
    });
    var Ez = bz(22),
      nz = bz(1322);
    const iz = new Map;

    function lz(zz, uz) {
      Ez.k.sK("newUiRequest", {
        id: zz,
        clientParameters: uz
      }, !0)
    }

    function Mz(zz) {
      Ez.k.sK("removeUiRequest", zz, !0);
      const uz = iz.get(zz);
      uz && (uz.tearDownNotification(), iz.delete(zz))
    }

    function tz() {
      Ez.k.sK("clearUiRequests");
      for (const zz of iz.values()) zz.tearDownNotification();
      iz.clear()
    }

    function Hz(zz, uz, bz) {
      const Ez = nz.NotificationProvider.showPromptPopup({
        title: uz,
        confirmText: "general:yes",
        cancelText: "general:no",
        unlockPointerKey: "uiRequestPopup"
      });
      iz.set(zz, Ez), Ez.getResult().then((uz => {
        iz.delete(zz), "notificationTornDown" !== uz && bz(uz)
      }))
    }
  },
  38364: (zz, uz, bz) => {
    bz.d(uz, {
      d: () => Mz,
      f: () => tz,
      i: () => Hz
    });
    var Ez = bz(1212),
      nz = bz(994),
      iz = bz(36297),
      lz = bz(22);

    function Mz(zz) {
      let {
        lobbyName: uz,
        gameNameWithVariation: bz
      } = zz;
      return !(0, Ez.M)(uz) || null !== bz && (bz.startsWith("testGym") || (0, nz.k)(bz))
    }

    function tz(zz) {
      return zz.ru === iz.e.Leave || zz.ru === iz.e.Cursor
    }

    function Hz(zz) {
      lz.k.sK("codeCollab", {
        type: zz.ru,
        docKey: zz.ou,
        version: zz.Nu,
        editorCount: zz.vu,
        peers: zz.xu,
        updates: zz.Ju,
        playerId: zz.Au,
        playerName: zz.Tu,
        colour: zz.Lu,
        anchor: zz.Pu,
        head: zz.Gu,
        existingCursors: zz.au,
        files: zz.Vu,
        engineSettings: zz.mu
      })
    }
  },
  38377: (zz, uz, bz) => {
    bz.d(uz, {
      d: () => Ez
    });
    class Ez {
      constructor() {
        this.members = new Map
      }
      apply(zz) {
        const uz = {
          added: [],
          removed: [],
          settingChanges: []
        };
        for (const Ez of zz.XE) {
          let zz = this.members.get(Ez.fE);
          if (zz || (zz = {
              name: null,
              settings: {}
            }, this.members.set(Ez.fE, zz), uz.added.push(Ez.fE)), null !== Ez.sE && (zz.name = Ez.sE), null !== Ez.rE || Ez.oE.length > 0) {
            const bz = null === Ez.rE ? {} : JSON.parse(Ez.rE);
            Object.assign(zz.settings, bz);
            for (const uz of Ez.oE) delete zz.settings[uz], bz[uz] = void 0;
            uz.settingChanges.push({
              playerId: Ez.fE,
              settings: bz
            })
          }
        }
        for (const Ez of zz.NE) {
          const zz = this.members.get(Ez);
          var bz;
          if (zz) this.members.delete(Ez), uz.removed.push({
            playerId: Ez,
            name: null !== (bz = zz.name) && void 0 !== bz ? bz : void 0
          })
        }
        return uz
      }
      has(zz) {
        return this.members.has(zz)
      }
      ids() {
        return [...this.members.keys()]
      }
      getName(zz) {
        var uz, bz;
        return null !== (uz = null === (bz = this.members.get(zz)) || void 0 === bz ? void 0 : bz.name) && void 0 !== uz ? uz : void 0
      }
      getSettings(zz) {
        var uz;
        return null === (uz = this.members.get(zz)) || void 0 === uz ? void 0 : uz.settings
      }
      getSetting(zz, uz) {
        var bz;
        return null === (bz = this.members.get(zz)) || void 0 === bz ? void 0 : bz.settings[uz]
      }
      clear() {
        this.members.clear()
      }
    }
  },
  38407: (zz, uz, bz) => {
    bz.d(uz, {
      b: () => Ez,
      e: () => nz
    });
    const Ez = ["description", "label"];

    function nz(zz) {
      const uz = zz.type;
      return {
        type: uz,
        params: zz[uz]
      }
    }
  }
};
Object.freeze(modules);
for (const zz in modules) Object.freeze(modules[zz]);