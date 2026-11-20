export const id = 73;
export const ids = [73];
export const modules = {
  4335: (zz, tz, sz) => {
    sz.d(tz, {
      c: () => Kz
    });
    var Fz = sz(30),
      Wz = sz(34),
      Xz = sz(1269),
      Oz = sz(2637);
    const oz = 3e4,
      vz = 1e3;

    function Uz() {
      return "visible" === document.visibilityState && "inGame" === Fz.b.get("gameState") && (0, Xz.o)()
    }

    function Kz(zz, tz) {
      (0, Oz.j)() || function(zz, tz, sz) {
        let Fz = 0;
        const Wz = setInterval((() => {
          tz() && (Fz += vz, Fz >= zz && (clearInterval(Wz), sz()))
        }), vz)
      }(oz, Uz, (() => {
        tz().then((() => {
          zz(`saved for the player after ${oz/1e3} s of play`), (0, Oz.q)(), Wz.o.Yg("chat", {
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
  8710: (zz, tz, sz) => {
    function Fz(zz, tz) {
      return 0 === zz.length ? 0 : zz[Math.min(zz.length - 1, Math.floor(tz * zz.length))]
    }
    sz.d(tz, {
      e: () => Fz
    })
  },
  37362: (zz, tz, sz) => {
    sz.d(tz, {
      e: () => Uz,
      i: () => Kz,
      m: () => rz,
      o: () => Pz,
      r: () => Bz
    });
    var Fz = sz(4335),
      Wz = sz(8710),
      Xz = sz(2637);
    const Oz = 20,
      oz = ["totalMs", "slotMs", "workerMs", "applyMs", "ahead", "inFlight", "au", "jobMs"];

    function vz(zz) {
      return [...zz].sort(((zz, tz) => zz - tz))
    }
    const Uz = [];

    function Kz(zz, tz, sz) {
      return `${zz},${tz},${sz}`
    }
    class uz {
      constructor() {
        this.pending = new Map, this.jobs = new Map, this.edits = [], this.nextEdit = 0, this.reported = 0, this.windowStart = performance.now(), this.frames = 0, this.lastFrameAt = 0, this.maxFrameMs = 0, this.jobsSent = 0, this.maxAhead = 0, this.maxCapacity = 0, this.roundTrips = [], this.windowEdits = [], this.outliers = 0, this.gaveUp = 0
      }
      edit(zz, tz) {
        var sz;
        const Fz = null !== (sz = this.pending.get(zz)) && void 0 !== sz ? sz : [];
        Fz.push({
          editAt: tz,
          meshJobId: 0
        }), this.pending.set(zz, Fz)
      }
      frame(zz) {
        this.lastFrameAt > 0 && (this.maxFrameMs = Math.max(this.maxFrameMs, zz - this.lastFrameAt)), this.lastFrameAt = zz, this.frames++, zz - this.windowStart >= 1e3 && this.summarise(zz)
      }
      sent(zz, tz, sz, Fz, Wz, Xz, Oz) {
        this.jobs.set(tz, {
          sentAt: Oz,
          receivedAt: 0,
          ahead: sz,
          inFlight: Fz,
          au: Wz,
          jobMs: 0
        }), this.jobsSent++, this.maxAhead = Math.max(this.maxAhead, sz), this.maxCapacity = Math.max(this.maxCapacity, Wz);
        for (const vz of null !== (oz = this.pending.get(zz)) && void 0 !== oz ? oz : []) {
          var oz;
          Xz.includes(vz.meshJobId) || (vz.meshJobId = tz)
        }
      }
      received(zz, tz, sz) {
        const Fz = this.jobs.get(zz);
        void 0 !== Fz && (this.roundTrips.push(sz - Fz.sentAt), Fz.receivedAt = sz, Fz.jobMs = tz)
      }
      failed(zz) {
        this.jobs.delete(zz)
      }
      reassign(zz, tz, sz) {
        this.jobs.delete(tz);
        for (const Wz of null !== (Fz = this.pending.get(zz)) && void 0 !== Fz ? Fz : []) {
          var Fz;
          Wz.meshJobId === tz && (Wz.meshJobId = sz)
        }
      }
      applied(zz, tz, sz) {
        const Fz = this.jobs.get(tz);
        this.jobs.delete(tz), void 0 !== Fz && this.show(zz, Fz, sz, (zz => zz.meshJobId === tz))
      }
      emptied(zz, tz) {
        const sz = {
          sentAt: tz,
          receivedAt: tz,
          ahead: 0,
          inFlight: 0,
          au: 0,
          jobMs: 0
        };
        this.show(zz, sz, tz, (() => !0))
      }
      show(zz, tz, sz, Fz) {
        const Wz = this.pending.get(zz);
        if (!Wz) return;
        const Xz = Wz.filter((Wz => !Fz(Wz) || (this.record(zz, Wz.editAt, tz, sz), !1)));
        Xz.length > 0 ? this.pending.set(zz, Xz) : this.pending.delete(zz)
      }
      Iw(zz) {
        this.reported += zz, this === bz && this.reported >= Oz && null !== wz && (wz(), wz = null)
      }
      record(zz, tz, sz, Fz) {
        const Wz = {
          totalMs: Fz - tz,
          slotMs: sz.sentAt - tz,
          workerMs: sz.receivedAt - sz.sentAt,
          applyMs: Fz - sz.receivedAt,
          ahead: sz.ahead,
          inFlight: sz.inFlight,
          au: sz.au,
          jobMs: sz.jobMs
        };
        if (this.edits[this.nextEdit] = Wz, this.nextEdit = (this.nextEdit + 1) % 500, this.windowEdits.push(Wz.totalMs), this.Iw(1), Wz.totalMs < 100 || ++this.outliers > 5) return;
        const Oz = zz => Math.round(zz);
        (0, Xz.g)("remesh", `slow edit (${zz}) shown in ${Oz(Wz.totalMs)} ms: slot ${Oz(Wz.slotMs)}, worker ${Oz(Wz.workerMs)} (${Wz.ahead} ahead, ${Wz.inFlight}/${Wz.au} in flight; job ${Oz(Wz.jobMs)}), apply ${Oz(Wz.applyMs)}`)
      }
      summarise(zz) {
        const tz = (zz - this.windowStart) / 1e3;
        for (const [sz, Fz] of this.pending) {
          const tz = Fz.filter((tz => zz - tz.editAt <= 1e4));
          this.gaveUp += Fz.length - tz.length, this.Iw(Fz.length - tz.length), tz.length > 0 ? this.pending.set(sz, tz) : this.pending.delete(sz)
        }
        for (const [sz, Fz] of this.jobs) zz - Fz.sentAt > (Fz.receivedAt > 0 ? 1e4 : 6e4) && this.jobs.delete(sz);
        if (this.jobsSent > 0 || this.roundTrips.length > 0 || this.windowEdits.length > 0 || this.gaveUp > 0) {
          const zz = vz(this.roundTrips),
            sz = vz(this.windowEdits),
            Fz = Math.max(0, this.outliers - 5);
          (0, Xz.g)("remesh", `${Math.round(this.frames/tz)} fps (longest ${Math.round(this.maxFrameMs)} ms) | ${this.jobsSent} jobs sent, up to ${this.maxAhead} ahead on a worker, capacity ${this.maxCapacity} | round trip p50 ${Math.round((0,Wz.e)(zz,.5))} max ${Math.round((0,Wz.e)(zz,1))} ms | ${sz.length} edits shown, p50 ${Math.round((0,Wz.e)(sz,.5))} max ${Math.round((0,Wz.e)(sz,1))} ms${Fz>0?`, ${Fz} more slow`:""}${this.gaveUp>0?`, ${this.gaveUp} never shown`:""}`)
        }
        this.windowStart = zz, this.frames = 0, this.maxFrameMs = 0, this.jobsSent = 0, this.maxAhead = 0, this.maxCapacity = 0, this.roundTrips = [], this.windowEdits = [], this.outliers = 0, this.gaveUp = 0
      }
      stats() {
        const zz = oz.map((zz => {
          const tz = vz(this.edits.map((tz => tz[zz])));
          return `${zz}: p50 ${Math.round((0,Wz.e)(tz,.5))} p90 ${Math.round((0,Wz.e)(tz,.9))} max ${Math.round((0,Wz.e)(tz,1))}`
        }));
        return [`${this.edits.length} edits`, ...zz].join("\n")
      }
      dump() {
        const zz = this.edits.map((zz => oz.map((tz => Math.round(10 * zz[tz]) / 10)).join(",")));
        return [this.stats(), oz.join(","), ...zz].join("\n")
      }
    }
    class Nz {
      constructor(zz, tz) {
        this.log = zz, this.CN = tz
      }
      edit(zz, tz, sz) {
        const [Fz, Wz, Xz] = this.CN.PN.MFz(zz, tz, sz), Oz = this.CN.PN.LD.lD(Fz, Wz, Xz);
        Oz && Oz.kD && this.log.edit(Kz(Fz, Wz, Xz), performance.now())
      }
      sent(zz, tz, sz, Fz, Wz) {
        this.log.sent(Kz(zz.i, zz.j, zz.k), tz, sz, Fz, Wz, Uz, performance.now())
      }
      received(zz) {
        this.log.received(zz.meshJobId, zz.jobMs, performance.now())
      }
      failed(zz) {
        this.log.failed(zz)
      }
      applied(zz, tz) {
        this.log.applied(Kz(zz.i, zz.j, zz.k), tz, performance.now())
      }
    }
    let bz = null,
      wz = null,
      Dz = !1,
      gz = null;

    function Hz() {
      return new Promise((zz => {
        null !== bz && bz.reported >= Oz ? zz() : wz = zz
      }))
    }

    function Bz() {
      const zz = new uz;
      return bz = zz, (0, Xz.f)("remesh", (() => zz.dump())), (0, Xz.b)("remeshStats", (() => {
        console.log(zz.stats())
      })), Dz || (Dz = !0, (0, Fz.c)((zz => {
        (0, Xz.g)("remesh", zz)
      }), Hz)), zz
    }

    function Pz(zz) {
      const tz = Bz();
      gz = new Nz(tz, zz), zz.AY.meshProbe = gz, zz.on("beforeRender", (() => {
        tz.frame(performance.now())
      }))
    }

    function rz(zz, tz, sz) {
      var Fz;
      null === (Fz = gz) || void 0 === Fz || Fz.edit(zz, tz, sz)
    }
  },
  37173: (zz, tz, sz) => {
    function Fz(zz) {
      return "string" !== typeof zz || 2 !== zz.length && ":" !== zz[2] ? null : zz[0] + zz[1]
    }
    sz.d(tz, {
      A: () => Dz,
      e: () => gz,
      g: () => Pz,
      j: () => oz,
      n: () => Oz,
      q: () => Xz,
      u: () => vz,
      w: () => Hz
    });
    const Wz = ["op:ytInitialPlayerResponse.adPlacements", "op:ytInitialPlayerResponse.playerAds", "op:ytInitialPlayerResponse.adSlots", "op:playerResponse.adPlacements", "op:playerResponse.playerAds", "op:playerResponse.adSlots"];

    function Xz(zz) {
      if (function(zz) {
          for (let tz = 0; tz < Wz.length; tz++)
            if (zz === Wz[tz]) return !0;
          return !1
        }(zz)) return !1;
      const tz = Fz(zz);
      return "op" === tz || "ep" === tz || "wi" === tz || "pp" === tz || "fp:call" === zz || "fp:t" === zz
    }

    function Oz(zz) {
      return "fp" === Fz(zz) && !Xz(zz)
    }

    function oz(zz) {
      if ("string" !== typeof zz) return !1;
      return "o" === zz[0] && "p" === zz[1] && (2 === zz.length || ":" === zz[2]) || "fp:call" === zz || "2" === zz || "t" === zz || "a" === zz
    }

    function vz(zz, tz) {
      return `~${function(zz){return zz.length<2?zz:":"===zz[1]?zz[0]:zz[0]+zz[1]}(tz)}~${zz}`
    }
    const Uz = 200;

    function Kz(zz) {
      let tz = zz.length - 1;
      for (let sz = 0; sz < 2; sz++) {
        const sz = tz;
        for (; tz >= 0 && zz[tz] >= "0" && zz[tz] <= "9";) tz--;
        if (tz < 0 || tz === sz || ":" !== zz[tz]) return -1;
        tz--
      }
      return tz + 1
    }

    function uz(zz) {
      return "unknown" === zz || Kz(zz) >= 0
    }

    function Nz(zz, tz) {
      return zz[tz] >= "\ud800" && zz[tz] <= "\udbff" && tz + 1 < zz.length && zz[tz + 1] >= "\udc00" && zz[tz + 1] <= "\udfff" ? 2 : 1
    }

    function bz(zz, tz, sz) {
      return 2 === sz ? 4 : zz[tz] <= "\x7f" ? 1 : zz[tz] <= "\u07ff" ? 2 : 3
    }

    function wz(zz, tz, sz) {
      let Fz = 0;
      for (; Fz < tz;) {
        const tz = Nz(zz, Fz),
          Wz = bz(zz, Fz, tz);
        if (Wz > sz) break;
        sz -= Wz, Fz += tz
      }
      return Fz
    }

    function Dz(zz) {
      let tz = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1 / 0;
      if ("string" !== typeof zz || zz.length > Uz || !uz(zz)) return "t";
      let sz = 2;
      for (let oz = 0; oz < zz.length;) {
        const tz = Nz(zz, oz);
        sz += bz(zz, oz, tz), oz += tz
      }
      if (sz <= tz) return `t ${zz}`;
      const Fz = Kz(zz),
        Wz = tz - 2 - (zz.length - Fz);
      if (Wz < 0) return "t";
      const Xz = wz(zz, Fz, Wz);
      let Oz = "t ";
      for (let oz = 0; oz < Xz; oz++) Oz += zz[oz];
      for (let oz = Fz; oz < zz.length; oz++) Oz += zz[oz];
      return Oz
    }
    const gz = 62;

    function Hz(zz) {
      let tz = "so:";
      const sz = wz(zz, zz.length, gz - tz.length);
      for (let Fz = 0; Fz < sz; Fz++) tz += zz[Fz];
      return tz
    }
    const Bz = "BABYLON ";

    function Pz(zz) {
      return Hz(Bz + zz)
    }
  },
  37399: zz => {
    zz.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAAKUlEQVQYGWM8CwQMeAATHjmw1JBQwAh06v+LFy8yvH//noGXl/ccuq8A/vQKd00yOdIAAAAASUVORK5CYII="
  },
  37386: zz => {
    zz.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAALUlEQVQYGWM8CwQMeAATHjmw1JBQwAh06v8DBw4wCAoKMnBzczN8/PjxHLLPAORwCnfkvOdNAAAAAElFTkSuQmCC"
  },
  37407: zz => {
    zz.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAAKUlEQVQYGWM8CwQMeAATHjmw1JBQwAh06v8DBw4wCAoKMvz58+ccuq8A8vQKd2AxC9MAAAAASUVORK5CYII="
  },
  37379: zz => {
    zz.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAANUlEQVQYGWM8CwQMeAATHjmw1JBQAHLp/wMHDvy/ePHi/4CAgP937tz5Ly6u+5/P3uw/KAgAgjwWhHm22JoAAAAASUVORK5CYII="
  },
  37395: zz => {
    zz.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAAKUlEQVQYGWM8CwQMeAATHjmw1JBQwAh06v8DBw4wCAoKMvz58+ccuq8A8vQKd2AxC9MAAAAASUVORK5CYII="
  }
};
Object.freeze(modules);
for (const zz in modules) Object.freeze(modules[zz]);