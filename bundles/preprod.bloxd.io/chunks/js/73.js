export const id = 73;
export const ids = [73];
export const modules = {
  4439: (zz, uz, bz) => {
    bz.d(uz, {
      c: () => Oz
    });
    var Ez = bz(20),
      nz = bz(22),
      iz = bz(1269),
      lz = bz(2689);
    const Mz = 3e4,
      tz = 1e3;

    function Hz() {
      return "visible" === document.visibilityState && "inGame" === Ez.e.get("gameState") && (0, iz.q)()
    }

    function Oz(zz, uz) {
      (0, lz.q)() || function(zz, uz, bz) {
        let Ez = 0;
        const nz = setInterval((() => {
          uz() && (Ez += tz, Ez >= zz && (clearInterval(nz), bz()))
        }), tz)
      }(Mz, Hz, (() => {
        uz().then((() => {
          zz(`saved for the player after ${Mz/1e3} s of play`), (0, lz.y)(), nz.k.sK("chat", {
            content: [{
              str: "Saved a debug file to your downloads: please send it to us with a screenshot of the game.",
              style: {
                color: "#ffd84a"
              }
            }]
          })
        }))
      }))
    }
  },
  8867: (zz, uz, bz) => {
    function Ez(zz, uz) {
      return 0 === zz.length ? 0 : zz[Math.min(zz.length - 1, Math.floor(uz * zz.length))]
    }
    bz.d(uz, {
      c: () => Ez
    })
  },
  37376: (zz, uz, bz) => {
    bz.d(uz, {
      b: () => Hz,
      e: () => Oz,
      f: () => sz,
      i: () => fz,
      m: () => Xz
    });
    var Ez = bz(4439),
      nz = bz(8867),
      iz = bz(2689);
    const lz = 20,
      Mz = ["totalMs", "slotMs", "workerMs", "applyMs", "ahead", "inFlight", "Bp", "jobMs"];

    function tz(zz) {
      return [...zz].sort(((zz, uz) => zz - uz))
    }
    const Hz = [];

    function Oz(zz, uz, bz) {
      return `${zz},${uz},${bz}`
    }
    class pz {
      constructor() {
        this.pending = new Map, this.jobs = new Map, this.edits = [], this.nextEdit = 0, this.reported = 0, this.windowStart = performance.now(), this.frames = 0, this.lastFrameAt = 0, this.maxFrameMs = 0, this.jobsSent = 0, this.maxAhead = 0, this.maxCapacity = 0, this.roundTrips = [], this.windowEdits = [], this.outliers = 0, this.gaveUp = 0
      }
      edit(zz, uz) {
        var bz;
        const Ez = null !== (bz = this.pending.get(zz)) && void 0 !== bz ? bz : [];
        Ez.push({
          editAt: uz,
          meshJobId: 0
        }), this.pending.set(zz, Ez)
      }
      frame(zz) {
        this.lastFrameAt > 0 && (this.maxFrameMs = Math.max(this.maxFrameMs, zz - this.lastFrameAt)), this.lastFrameAt = zz, this.frames++, zz - this.windowStart >= 1e3 && this.summarise(zz)
      }
      sent(zz, uz, bz, Ez, nz, iz, lz) {
        this.jobs.set(uz, {
          sentAt: lz,
          receivedAt: 0,
          ahead: bz,
          inFlight: Ez,
          Bp: nz,
          jobMs: 0
        }), this.jobsSent++, this.maxAhead = Math.max(this.maxAhead, bz), this.maxCapacity = Math.max(this.maxCapacity, nz);
        for (const tz of null !== (Mz = this.pending.get(zz)) && void 0 !== Mz ? Mz : []) {
          var Mz;
          iz.includes(tz.meshJobId) || (tz.meshJobId = uz)
        }
      }
      received(zz, uz, bz) {
        const Ez = this.jobs.get(zz);
        void 0 !== Ez && (this.roundTrips.push(bz - Ez.sentAt), Ez.receivedAt = bz, Ez.jobMs = uz)
      }
      failed(zz) {
        this.jobs.delete(zz)
      }
      reassign(zz, uz, bz) {
        this.jobs.delete(uz);
        for (const nz of null !== (Ez = this.pending.get(zz)) && void 0 !== Ez ? Ez : []) {
          var Ez;
          nz.meshJobId === uz && (nz.meshJobId = bz)
        }
      }
      applied(zz, uz, bz) {
        const Ez = this.jobs.get(uz);
        this.jobs.delete(uz), void 0 !== Ez && this.show(zz, Ez, bz, (zz => zz.meshJobId === uz))
      }
      emptied(zz, uz) {
        const bz = {
          sentAt: uz,
          receivedAt: uz,
          ahead: 0,
          inFlight: 0,
          Bp: 0,
          jobMs: 0
        };
        this.show(zz, bz, uz, (() => !0))
      }
      show(zz, uz, bz, Ez) {
        const nz = this.pending.get(zz);
        if (!nz) return;
        const iz = nz.filter((nz => !Ez(nz) || (this.record(zz, nz.editAt, uz, bz), !1)));
        iz.length > 0 ? this.pending.set(zz, iz) : this.pending.delete(zz)
      }
      xZ(zz) {
        this.reported += zz, this === Fz && this.reported >= lz && null !== Zz && (Zz(), Zz = null)
      }
      record(zz, uz, bz, Ez) {
        const nz = {
          totalMs: Ez - uz,
          slotMs: bz.sentAt - uz,
          workerMs: bz.receivedAt - bz.sentAt,
          applyMs: Ez - bz.receivedAt,
          ahead: bz.ahead,
          inFlight: bz.inFlight,
          Bp: bz.Bp,
          jobMs: bz.jobMs
        };
        if (this.edits[this.nextEdit] = nz, this.nextEdit = (this.nextEdit + 1) % 500, this.windowEdits.push(nz.totalMs), this.xZ(1), nz.totalMs < 100 || ++this.outliers > 5) return;
        const lz = zz => Math.round(zz);
        (0, iz.i)("remesh", `slow edit (${zz}) shown in ${lz(nz.totalMs)} ms: slot ${lz(nz.slotMs)}, worker ${lz(nz.workerMs)} (${nz.ahead} ahead, ${nz.inFlight}/${nz.Bp} in flight; job ${lz(nz.jobMs)}), apply ${lz(nz.applyMs)}`)
      }
      summarise(zz) {
        const uz = (zz - this.windowStart) / 1e3;
        for (const [bz, Ez] of this.pending) {
          const uz = Ez.filter((uz => zz - uz.editAt <= 1e4));
          this.gaveUp += Ez.length - uz.length, this.xZ(Ez.length - uz.length), uz.length > 0 ? this.pending.set(bz, uz) : this.pending.delete(bz)
        }
        for (const [bz, Ez] of this.jobs) zz - Ez.sentAt > (Ez.receivedAt > 0 ? 1e4 : 6e4) && this.jobs.delete(bz);
        if (this.jobsSent > 0 || this.roundTrips.length > 0 || this.windowEdits.length > 0 || this.gaveUp > 0) {
          const zz = tz(this.roundTrips),
            bz = tz(this.windowEdits),
            Ez = Math.max(0, this.outliers - 5);
          (0, iz.i)("remesh", `${Math.round(this.frames/uz)} fps (longest ${Math.round(this.maxFrameMs)} ms) | ${this.jobsSent} jobs sent, up to ${this.maxAhead} ahead on a worker, capacity ${this.maxCapacity} | round trip p50 ${Math.round((0,nz.c)(zz,.5))} max ${Math.round((0,nz.c)(zz,1))} ms | ${bz.length} edits shown, p50 ${Math.round((0,nz.c)(bz,.5))} max ${Math.round((0,nz.c)(bz,1))} ms${Ez>0?`, ${Ez} more slow`:""}${this.gaveUp>0?`, ${this.gaveUp} never shown`:""}`)
        }
        this.windowStart = zz, this.frames = 0, this.maxFrameMs = 0, this.jobsSent = 0, this.maxAhead = 0, this.maxCapacity = 0, this.roundTrips = [], this.windowEdits = [], this.outliers = 0, this.gaveUp = 0
      }
      stats() {
        const zz = Mz.map((zz => {
          const uz = tz(this.edits.map((uz => uz[zz])));
          return `${zz}: p50 ${Math.round((0,nz.c)(uz,.5))} p90 ${Math.round((0,nz.c)(uz,.9))} max ${Math.round((0,nz.c)(uz,1))}`
        }));
        return [`${this.edits.length} edits`, ...zz].join("\n")
      }
      dump() {
        const zz = this.edits.map((zz => Mz.map((uz => Math.round(10 * zz[uz]) / 10)).join(",")));
        return [this.stats(), Mz.join(","), ...zz].join("\n")
      }
    }
    class dz {
      constructor(zz, uz) {
        this.log = zz, this.Gd = uz
      }
      edit(zz, uz, bz) {
        const [Ez, nz, iz] = this.Gd.xd.fEz(zz, uz, bz), lz = this.Gd.xd.gR.SR(Ez, nz, iz);
        lz && lz.UR && this.log.edit(Oz(Ez, nz, iz), performance.now())
      }
      sent(zz, uz, bz, Ez, nz) {
        this.log.sent(Oz(zz.i, zz.j, zz.k), uz, bz, Ez, nz, Hz, performance.now())
      }
      received(zz) {
        this.log.received(zz.meshJobId, zz.jobMs, performance.now())
      }
      failed(zz) {
        this.log.failed(zz)
      }
      applied(zz, uz) {
        this.log.applied(Oz(zz.i, zz.j, zz.k), uz, performance.now())
      }
    }
    let Fz = null,
      Zz = null,
      Rz = !1,
      Kz = null;

    function wz() {
      return new Promise((zz => {
        null !== Fz && Fz.reported >= lz ? zz() : Zz = zz
      }))
    }

    function Xz() {
      const zz = new pz;
      return Fz = zz, (0, iz.f)("remesh", (() => zz.dump())), (0, iz.c)("remeshStats", (() => {
        console.log(zz.stats())
      })), Rz || (Rz = !0, (0, Ez.c)((zz => {
        (0, iz.i)("remesh", zz)
      }), wz)), zz
    }

    function fz(zz) {
      const uz = Xz();
      Kz = new dz(uz, zz), zz.mN.meshProbe = Kz, zz.on("beforeRender", (() => {
        uz.frame(performance.now())
      }))
    }

    function sz(zz, uz, bz) {
      var Ez;
      null === (Ez = Kz) || void 0 === Ez || Ez.edit(zz, uz, bz)
    }
  },
  37215: (zz, uz, bz) => {
    function Ez(zz) {
      return "string" !== typeof zz || 2 !== zz.length && ":" !== zz[2] ? null : zz[0] + zz[1]
    }
    bz.d(uz, {
      e: () => Kz,
      i: () => fz,
      j: () => Mz,
      l: () => lz,
      o: () => iz,
      q: () => tz,
      u: () => wz,
      x: () => Rz
    });
    const nz = ["op:ytInitialPlayerResponse.adPlacements", "op:ytInitialPlayerResponse.playerAds", "op:ytInitialPlayerResponse.adSlots", "op:playerResponse.adPlacements", "op:playerResponse.playerAds", "op:playerResponse.adSlots"];

    function iz(zz) {
      if (function(zz) {
          for (let uz = 0; uz < nz.length; uz++)
            if (zz === nz[uz]) return !0;
          return !1
        }(zz)) return !1;
      const uz = Ez(zz);
      return "op" === uz || "ep" === uz || "wi" === uz || "pp" === uz || "fp:call" === zz || "fp:t" === zz
    }

    function lz(zz) {
      return "fp" === Ez(zz) && !iz(zz)
    }

    function Mz(zz) {
      if ("string" !== typeof zz) return !1;
      return "o" === zz[0] && "p" === zz[1] && (2 === zz.length || ":" === zz[2]) || "fp:call" === zz || "2" === zz || "t" === zz || "a" === zz
    }

    function tz(zz, uz) {
      return `~${function(zz){return zz.length<2?zz:":"===zz[1]?zz[0]:zz[0]+zz[1]}(uz)}~${zz}`
    }
    const Hz = 200;

    function Oz(zz) {
      let uz = zz.length - 1;
      for (let bz = 0; bz < 2; bz++) {
        const bz = uz;
        for (; uz >= 0 && zz[uz] >= "0" && zz[uz] <= "9";) uz--;
        if (uz < 0 || uz === bz || ":" !== zz[uz]) return -1;
        uz--
      }
      return uz + 1
    }

    function pz(zz) {
      return "unknown" === zz || Oz(zz) >= 0
    }

    function dz(zz, uz) {
      return zz[uz] >= "\ud800" && zz[uz] <= "\udbff" && uz + 1 < zz.length && zz[uz + 1] >= "\udc00" && zz[uz + 1] <= "\udfff" ? 2 : 1
    }

    function Fz(zz, uz, bz) {
      return 2 === bz ? 4 : zz[uz] <= "\x7f" ? 1 : zz[uz] <= "\u07ff" ? 2 : 3
    }

    function Zz(zz, uz, bz) {
      let Ez = 0;
      for (; Ez < uz;) {
        const uz = dz(zz, Ez),
          nz = Fz(zz, Ez, uz);
        if (nz > bz) break;
        bz -= nz, Ez += uz
      }
      return Ez
    }

    function Rz(zz) {
      let uz = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1 / 0;
      if ("string" !== typeof zz || zz.length > Hz || !pz(zz)) return "t";
      let bz = 2;
      for (let Mz = 0; Mz < zz.length;) {
        const uz = dz(zz, Mz);
        bz += Fz(zz, Mz, uz), Mz += uz
      }
      if (bz <= uz) return `t ${zz}`;
      const Ez = Oz(zz),
        nz = uz - 2 - (zz.length - Ez);
      if (nz < 0) return "t";
      const iz = Zz(zz, Ez, nz);
      let lz = "t ";
      for (let Mz = 0; Mz < iz; Mz++) lz += zz[Mz];
      for (let Mz = Ez; Mz < zz.length; Mz++) lz += zz[Mz];
      return lz
    }
    const Kz = 62;

    function wz(zz) {
      let uz = "so:";
      const bz = Zz(zz, zz.length, Kz - uz.length);
      for (let Ez = 0; Ez < bz; Ez++) uz += zz[Ez];
      return uz
    }
    const Xz = "BABYLON ";

    function fz(zz) {
      return wz(Xz + zz)
    }
  }
};
Object.freeze(modules);
for (const zz in modules) Object.freeze(modules[zz]);