export const id = 76;
export const ids = [76];
export const modules = {
  4624: (kk, ek, ik) => {
    ik.d(ek, {
      c: () => Mk
    });
    var Dk = ik(22),
      fk = ik(26),
      Sk = ik(1273),
      bk = ik(2752);
    const rk = 3e4,
      Pk = 1e3;

    function mk() {
      return "visible" === document.visibilityState && "inGame" === Dk.b.get("gameState") && (0, Sk.w)()
    }

    function Mk(kk, ek) {
      (0, bk.t)() || function(kk, ek, ik) {
        let Dk = 0;
        const fk = setInterval((() => {
          ek() && (Dk += Pk, Dk >= kk && (clearInterval(fk), ik()))
        }), Pk)
      }(rk, mk, (() => {
        ek().then((() => {
          kk(`saved for the player after ${rk/1e3} s of play`), (0, bk.z)(), fk.j.tm("chat", {
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
  33640: (kk, ek, ik) => {
    function Dk(kk, ek) {
      return 0 === kk.length ? 0 : kk[Math.min(kk.length - 1, Math.floor(ek * kk.length))]
    }

    function fk(kk) {
      return kk.toFixed(1)
    }
    ik.d(ek, {
      c: () => fk,
      d: () => Dk
    })
  },
  37532: (kk, ek, ik) => {
    ik.d(ek, {
      e: () => mk,
      g: () => Mk,
      h: () => Yk,
      i: () => yk,
      m: () => pk
    });
    var Dk = ik(4624),
      fk = ik(33640),
      Sk = ik(2752);
    const bk = 20,
      rk = ["totalMs", "slotMs", "workerMs", "applyMs", "ahead", "inFlight", "vK", "jobMs"];

    function Pk(kk) {
      return [...kk].sort(((kk, ek) => kk - ek))
    }
    const mk = [];

    function Mk(kk, ek, ik) {
      return `${kk},${ek},${ik}`
    }
    class Kk {
      constructor() {
        this.pending = new Map, this.jobs = new Map, this.edits = [], this.nextEdit = 0, this.reported = 0, this.windowStart = performance.now(), this.frames = 0, this.lastFrameAt = 0, this.maxFrameMs = 0, this.jobsSent = 0, this.maxAhead = 0, this.maxCapacity = 0, this.roundTrips = [], this.windowEdits = [], this.outliers = 0, this.gaveUp = 0
      }
      edit(kk, ek) {
        var ik;
        const Dk = null !== (ik = this.pending.get(kk)) && void 0 !== ik ? ik : [];
        Dk.push({
          editAt: ek,
          meshJobId: 0
        }), this.pending.set(kk, Dk)
      }
      frame(kk) {
        this.lastFrameAt > 0 && (this.maxFrameMs = Math.max(this.maxFrameMs, kk - this.lastFrameAt)), this.lastFrameAt = kk, this.frames++, kk - this.windowStart >= 1e3 && this.summarise(kk)
      }
      sent(kk, ek, ik, Dk, fk, Sk, bk) {
        this.jobs.set(ek, {
          sentAt: bk,
          receivedAt: 0,
          ahead: ik,
          inFlight: Dk,
          vK: fk,
          jobMs: 0
        }), this.jobsSent++, this.maxAhead = Math.max(this.maxAhead, ik), this.maxCapacity = Math.max(this.maxCapacity, fk);
        for (const Pk of null !== (rk = this.pending.get(kk)) && void 0 !== rk ? rk : []) {
          var rk;
          Sk.includes(Pk.meshJobId) || (Pk.meshJobId = ek)
        }
      }
      received(kk, ek, ik) {
        const Dk = this.jobs.get(kk);
        void 0 !== Dk && (this.roundTrips.push(ik - Dk.sentAt), Dk.receivedAt = ik, Dk.jobMs = ek)
      }
      failed(kk) {
        this.jobs.delete(kk)
      }
      reassign(kk, ek, ik) {
        this.jobs.delete(ek);
        for (const fk of null !== (Dk = this.pending.get(kk)) && void 0 !== Dk ? Dk : []) {
          var Dk;
          fk.meshJobId === ek && (fk.meshJobId = ik)
        }
      }
      applied(kk, ek, ik) {
        const Dk = this.jobs.get(ek);
        this.jobs.delete(ek), void 0 !== Dk && this.show(kk, Dk, ik, (kk => kk.meshJobId === ek))
      }
      emptied(kk, ek) {
        const ik = {
          sentAt: ek,
          receivedAt: ek,
          ahead: 0,
          inFlight: 0,
          vK: 0,
          jobMs: 0
        };
        this.show(kk, ik, ek, (() => !0))
      }
      show(kk, ek, ik, Dk) {
        const fk = this.pending.get(kk);
        if (!fk) return;
        const Sk = fk.filter((fk => !Dk(fk) || (this.record(kk, fk.editAt, ek, ik), !1)));
        Sk.length > 0 ? this.pending.set(kk, Sk) : this.pending.delete(kk)
      }
      CU(kk) {
        this.reported += kk, this === nk && this.reported >= bk && null !== Uk && (Uk(), Uk = null)
      }
      record(kk, ek, ik, Dk) {
        const fk = {
          totalMs: Dk - ek,
          slotMs: ik.sentAt - ek,
          workerMs: ik.receivedAt - ik.sentAt,
          applyMs: Dk - ik.receivedAt,
          ahead: ik.ahead,
          inFlight: ik.inFlight,
          vK: ik.vK,
          jobMs: ik.jobMs
        };
        if (this.edits[this.nextEdit] = fk, this.nextEdit = (this.nextEdit + 1) % 500, this.windowEdits.push(fk.totalMs), this.CU(1), fk.totalMs < 100 || ++this.outliers > 5) return;
        const bk = kk => Math.round(kk);
        (0, Sk.l)("remesh", `slow edit (${kk}) shown in ${bk(fk.totalMs)} ms: slot ${bk(fk.slotMs)}, worker ${bk(fk.workerMs)} (${fk.ahead} ahead, ${fk.inFlight}/${fk.vK} in flight; job ${bk(fk.jobMs)}), apply ${bk(fk.applyMs)}`)
      }
      summarise(kk) {
        const ek = (kk - this.windowStart) / 1e3;
        for (const [ik, Dk] of this.pending) {
          const ek = Dk.filter((ek => kk - ek.editAt <= 1e4));
          this.gaveUp += Dk.length - ek.length, this.CU(Dk.length - ek.length), ek.length > 0 ? this.pending.set(ik, ek) : this.pending.delete(ik)
        }
        for (const [ik, Dk] of this.jobs) kk - Dk.sentAt > (Dk.receivedAt > 0 ? 1e4 : 6e4) && this.jobs.delete(ik);
        if (this.jobsSent > 0 || this.roundTrips.length > 0 || this.windowEdits.length > 0 || this.gaveUp > 0) {
          const kk = Pk(this.roundTrips),
            ik = Pk(this.windowEdits),
            Dk = Math.max(0, this.outliers - 5);
          (0, Sk.l)("remesh", `${Math.round(this.frames/ek)} fps (longest ${Math.round(this.maxFrameMs)} ms) | ${this.jobsSent} jobs sent, up to ${this.maxAhead} ahead on a worker, capacity ${this.maxCapacity} | round trip p50 ${Math.round((0,fk.d)(kk,.5))} max ${Math.round((0,fk.d)(kk,1))} ms | ${ik.length} edits shown, p50 ${Math.round((0,fk.d)(ik,.5))} max ${Math.round((0,fk.d)(ik,1))} ms${Dk>0?`, ${Dk} more slow`:""}${this.gaveUp>0?`, ${this.gaveUp} never shown`:""}`)
        }
        this.windowStart = kk, this.frames = 0, this.maxFrameMs = 0, this.jobsSent = 0, this.maxAhead = 0, this.maxCapacity = 0, this.roundTrips = [], this.windowEdits = [], this.outliers = 0, this.gaveUp = 0
      }
      stats() {
        const kk = rk.map((kk => {
          const ek = Pk(this.edits.map((ek => ek[kk])));
          return `${kk}: p50 ${Math.round((0,fk.d)(ek,.5))} p90 ${Math.round((0,fk.d)(ek,.9))} max ${Math.round((0,fk.d)(ek,1))}`
        }));
        return [`${this.edits.length} edits`, ...kk].join("\n")
      }
      dump() {
        const kk = this.edits.map((kk => rk.map((ek => Math.round(10 * kk[ek]) / 10)).join(",")));
        return [this.stats(), rk.join(","), ...kk].join("\n")
      }
    }
    class xk {
      constructor(kk, ek) {
        this.log = kk, this.Lx = ek
      }
      edit(kk, ek, ik) {
        const [Dk, fk, Sk] = this.Lx.Ux.tDk(kk, ek, ik), bk = this.Lx.Ux.aH.WH(Dk, fk, Sk);
        bk && bk.EH && this.log.edit(Mk(Dk, fk, Sk), performance.now())
      }
      sent(kk, ek, ik, Dk, fk) {
        this.log.sent(Mk(kk.i, kk.j, kk.k), ek, ik, Dk, fk, mk, performance.now())
      }
      received(kk) {
        this.log.received(kk.meshJobId, kk.jobMs, performance.now())
      }
      failed(kk) {
        this.log.failed(kk)
      }
      applied(kk, ek) {
        this.log.applied(Mk(kk.i, kk.j, kk.k), ek, performance.now())
      }
    }
    let nk = null,
      Uk = null,
      Hk = !1,
      wk = null;

    function lk() {
      return new Promise((kk => {
        null !== nk && nk.reported >= bk ? kk() : Uk = kk
      }))
    }

    function pk() {
      const kk = new Kk;
      return nk = kk, (0, Sk.k)("remesh", (() => kk.dump())), (0, Sk.e)("remeshStats", (() => {
        console.log(kk.stats())
      })), Hk || (Hk = !0, (0, Dk.c)((kk => {
        (0, Sk.l)("remesh", kk)
      }), lk)), kk
    }

    function yk(kk) {
      const ek = pk();
      wk = new xk(ek, kk), kk.qY.meshProbe = wk, kk.on("beforeRender", (() => {
        ek.frame(performance.now())
      }))
    }

    function Yk(kk, ek, ik) {
      var Dk;
      null === (Dk = wk) || void 0 === Dk || Dk.edit(kk, ek, ik)
    }
  },
  37292: (kk, ek, ik) => {
    ik.d(ek, {
      c: () => Dk
    });
    const Dk = {
      noaReady: null,
      chunkRequested: null,
      beforeServerListeners: null,
      wasmNetReady: null
    }
  },
  37339: (kk, ek, ik) => {
    function Dk(kk) {
      return "string" !== typeof kk || 2 !== kk.length && ":" !== kk[2] ? null : kk[0] + kk[1]
    }
    ik.d(ek, {
      C: () => Hk,
      e: () => wk,
      h: () => Ck,
      i: () => Lk,
      k: () => Ak,
      l: () => rk,
      p: () => bk,
      t: () => Sk,
      w: () => Pk,
      z: () => lk
    });
    const fk = ["op:ytInitialPlayerResponse.adPlacements", "op:ytInitialPlayerResponse.playerAds", "op:ytInitialPlayerResponse.adSlots", "op:playerResponse.adPlacements", "op:playerResponse.playerAds", "op:playerResponse.adSlots"];

    function Sk(kk) {
      if (function(kk) {
          for (let ek = 0; ek < fk.length; ek++)
            if (kk === fk[ek]) return !0;
          return !1
        }(kk)) return !1;
      const ek = Dk(kk);
      return "op" === ek || "ep" === ek || "wi" === ek || "pp" === ek || "fp:call" === kk || "fp:t" === kk
    }

    function bk(kk) {
      return "fp" === Dk(kk) && !Sk(kk)
    }

    function rk(kk) {
      if ("string" !== typeof kk) return !1;
      return "o" === kk[0] && "p" === kk[1] && (2 === kk.length || ":" === kk[2]) || "fp:call" === kk || "2" === kk || "t" === kk || "a" === kk
    }

    function Pk(kk, ek) {
      return `~${function(kk){return kk.length<2?kk:":"===kk[1]?kk[0]:kk[0]+kk[1]}(ek)}~${kk}`
    }
    const mk = 200;

    function Mk(kk) {
      let ek = kk.length - 1;
      for (let ik = 0; ik < 2; ik++) {
        const ik = ek;
        for (; ek >= 0 && kk[ek] >= "0" && kk[ek] <= "9";) ek--;
        if (ek < 0 || ek === ik || ":" !== kk[ek]) return -1;
        ek--
      }
      return ek + 1
    }

    function Kk(kk) {
      return "unknown" === kk || Mk(kk) >= 0
    }

    function xk(kk, ek) {
      return kk[ek] >= "\ud800" && kk[ek] <= "\udbff" && ek + 1 < kk.length && kk[ek + 1] >= "\udc00" && kk[ek + 1] <= "\udfff" ? 2 : 1
    }

    function nk(kk, ek, ik) {
      return 2 === ik ? 4 : kk[ek] <= "\x7f" ? 1 : kk[ek] <= "\u07ff" ? 2 : 3
    }

    function Uk(kk, ek, ik) {
      let Dk = 0;
      for (; Dk < ek;) {
        const ek = xk(kk, Dk),
          fk = nk(kk, Dk, ek);
        if (fk > ik) break;
        ik -= fk, Dk += ek
      }
      return Dk
    }

    function Hk(kk) {
      let ek = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1 / 0;
      if ("string" !== typeof kk || kk.length > mk || !Kk(kk)) return "t";
      let ik = 2;
      for (let rk = 0; rk < kk.length;) {
        const ek = xk(kk, rk);
        ik += nk(kk, rk, ek), rk += ek
      }
      if (ik <= ek) return `t ${kk}`;
      const Dk = Mk(kk),
        fk = ek - 2 - (kk.length - Dk);
      if (fk < 0) return "t";
      const Sk = Uk(kk, Dk, fk);
      let bk = "t ";
      for (let rk = 0; rk < Sk; rk++) bk += kk[rk];
      for (let rk = Dk; rk < kk.length; rk++) bk += kk[rk];
      return bk
    }
    const wk = 62;

    function lk(kk) {
      let ek = "so:";
      const ik = Uk(kk, kk.length, wk - ek.length);
      for (let Dk = 0; Dk < ik; Dk++) ek += kk[Dk];
      return ek
    }
    const pk = "BABYLON ",
      yk = "DECODE ",
      Yk = "BABYLON@ ";

    function Lk(kk) {
      return lk(pk + kk)
    }

    function Ck(kk, ek) {
      return lk(Yk + kk + " " + ek)
    }

    function Ak(kk) {
      return lk(yk + kk)
    }
  },
  37566: kk => {
    kk.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAAKUlEQVQYGWM8CwQMeAATHjmw1JBQwAh06v+LFy8yvH//noGXl/ccuq8A/vQKd00yOdIAAAAASUVORK5CYII="
  },
  37554: kk => {
    kk.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAALUlEQVQYGWM8CwQMeAATHjmw1JBQwAh06v8DBw4wCAoKMnBzczN8/PjxHLLPAORwCnfkvOdNAAAAAElFTkSuQmCC"
  },
  37571: kk => {
    kk.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAAKUlEQVQYGWM8CwQMeAATHjmw1JBQwAh06v8DBw4wCAoKMvz58+ccuq8A8vQKd2AxC9MAAAAASUVORK5CYII="
  },
  37550: kk => {
    kk.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAANUlEQVQYGWM8CwQMeAATHjmw1JBQAHLp/wMHDvy/ePHi/4CAgP937tz5Ly6u+5/P3uw/KAgAgjwWhHm22JoAAAAASUVORK5CYII="
  },
  37559: kk => {
    kk.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAAKUlEQVQYGWM8CwQMeAATHjmw1JBQwAh06v8DBw4wCAoKMvz58+ccuq8A8vQKd2AxC9MAAAAASUVORK5CYII="
  }
};
Object.freeze(modules);
for (const kk in modules) Object.freeze(modules[kk]);