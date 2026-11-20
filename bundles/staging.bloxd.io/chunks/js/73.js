export const id = 73;
export const ids = [73];
export const modules = {
  4421: (kk, Fk, Bk) => {
    Bk.d(Fk, {
      b: () => sk
    });
    var Rk = Bk(22),
      tk = Bk(29),
      ak = Bk(1239),
      Xk = Bk(2711);
    const bk = 3e4,
      wk = 1e3;

    function dk() {
      return "visible" === document.visibilityState && "inGame" === Rk.c.get("gameState") && (0, ak.o)()
    }

    function sk(kk, Fk) {
      (0, Xk.s)() || function(kk, Fk, Bk) {
        let Rk = 0;
        const tk = setInterval((() => {
          Fk() && (Rk += wk, Rk >= kk && (clearInterval(tk), Bk()))
        }), wk)
      }(bk, dk, (() => {
        Fk().then((() => {
          kk(`saved for the player after ${bk/1e3} s of play`), (0, Xk.B)(), tk.o.Hf("chat", {
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
  8878: (kk, Fk, Bk) => {
    function Rk(kk, Fk) {
      return 0 === kk.length ? 0 : kk[Math.min(kk.length - 1, Math.floor(Fk * kk.length))]
    }
    Bk.d(Fk, {
      c: () => Rk
    })
  },
  37625: (kk, Fk, Bk) => {
    Bk.d(Fk, {
      b: () => dk,
      f: () => sk,
      h: () => ik,
      l: () => vk,
      m: () => Wk
    });
    var Rk = Bk(4421),
      tk = Bk(8878),
      ak = Bk(2711);
    const Xk = 20,
      bk = ["totalMs", "slotMs", "workerMs", "applyMs", "ahead", "inFlight", "KV", "jobMs"];

    function wk(kk) {
      return [...kk].sort(((kk, Fk) => kk - Fk))
    }
    const dk = [];

    function sk(kk, Fk, Bk) {
      return `${kk},${Fk},${Bk}`
    }
    class Vk {
      constructor() {
        this.pending = new Map, this.jobs = new Map, this.edits = [], this.nextEdit = 0, this.reported = 0, this.windowStart = performance.now(), this.frames = 0, this.lastFrameAt = 0, this.maxFrameMs = 0, this.jobsSent = 0, this.maxAhead = 0, this.maxCapacity = 0, this.roundTrips = [], this.windowEdits = [], this.outliers = 0, this.gaveUp = 0
      }
      edit(kk, Fk) {
        var Bk;
        const Rk = null !== (Bk = this.pending.get(kk)) && void 0 !== Bk ? Bk : [];
        Rk.push({
          editAt: Fk,
          meshJobId: 0
        }), this.pending.set(kk, Rk)
      }
      frame(kk) {
        this.lastFrameAt > 0 && (this.maxFrameMs = Math.max(this.maxFrameMs, kk - this.lastFrameAt)), this.lastFrameAt = kk, this.frames++, kk - this.windowStart >= 1e3 && this.summarise(kk)
      }
      sent(kk, Fk, Bk, Rk, tk, ak, Xk) {
        this.jobs.set(Fk, {
          sentAt: Xk,
          receivedAt: 0,
          ahead: Bk,
          inFlight: Rk,
          KV: tk,
          jobMs: 0
        }), this.jobsSent++, this.maxAhead = Math.max(this.maxAhead, Bk), this.maxCapacity = Math.max(this.maxCapacity, tk);
        for (const wk of null !== (bk = this.pending.get(kk)) && void 0 !== bk ? bk : []) {
          var bk;
          ak.includes(wk.meshJobId) || (wk.meshJobId = Fk)
        }
      }
      received(kk, Fk, Bk) {
        const Rk = this.jobs.get(kk);
        void 0 !== Rk && (this.roundTrips.push(Bk - Rk.sentAt), Rk.receivedAt = Bk, Rk.jobMs = Fk)
      }
      failed(kk) {
        this.jobs.delete(kk)
      }
      reassign(kk, Fk, Bk) {
        this.jobs.delete(Fk);
        for (const tk of null !== (Rk = this.pending.get(kk)) && void 0 !== Rk ? Rk : []) {
          var Rk;
          tk.meshJobId === Fk && (tk.meshJobId = Bk)
        }
      }
      applied(kk, Fk, Bk) {
        const Rk = this.jobs.get(Fk);
        this.jobs.delete(Fk), void 0 !== Rk && this.show(kk, Rk, Bk, (kk => kk.meshJobId === Fk))
      }
      emptied(kk, Fk) {
        const Bk = {
          sentAt: Fk,
          receivedAt: Fk,
          ahead: 0,
          inFlight: 0,
          KV: 0,
          jobMs: 0
        };
        this.show(kk, Bk, Fk, (() => !0))
      }
      show(kk, Fk, Bk, Rk) {
        const tk = this.pending.get(kk);
        if (!tk) return;
        const ak = tk.filter((tk => !Rk(tk) || (this.record(kk, tk.editAt, Fk, Bk), !1)));
        ak.length > 0 ? this.pending.set(kk, ak) : this.pending.delete(kk)
      }
      ve(kk) {
        this.reported += kk, this === Ak && this.reported >= Xk && null !== ek && (ek(), ek = null)
      }
      record(kk, Fk, Bk, Rk) {
        const tk = {
          totalMs: Rk - Fk,
          slotMs: Bk.sentAt - Fk,
          workerMs: Bk.receivedAt - Bk.sentAt,
          applyMs: Rk - Bk.receivedAt,
          ahead: Bk.ahead,
          inFlight: Bk.inFlight,
          KV: Bk.KV,
          jobMs: Bk.jobMs
        };
        if (this.edits[this.nextEdit] = tk, this.nextEdit = (this.nextEdit + 1) % 500, this.windowEdits.push(tk.totalMs), this.ve(1), tk.totalMs < 100 || ++this.outliers > 5) return;
        const Xk = kk => Math.round(kk);
        (0, ak.k)("remesh", `slow edit (${kk}) shown in ${Xk(tk.totalMs)} ms: slot ${Xk(tk.slotMs)}, worker ${Xk(tk.workerMs)} (${tk.ahead} ahead, ${tk.inFlight}/${tk.KV} in flight; job ${Xk(tk.jobMs)}), apply ${Xk(tk.applyMs)}`)
      }
      summarise(kk) {
        const Fk = (kk - this.windowStart) / 1e3;
        for (const [Bk, Rk] of this.pending) {
          const Fk = Rk.filter((Fk => kk - Fk.editAt <= 1e4));
          this.gaveUp += Rk.length - Fk.length, this.ve(Rk.length - Fk.length), Fk.length > 0 ? this.pending.set(Bk, Fk) : this.pending.delete(Bk)
        }
        for (const [Bk, Rk] of this.jobs) kk - Rk.sentAt > (Rk.receivedAt > 0 ? 1e4 : 6e4) && this.jobs.delete(Bk);
        if (this.jobsSent > 0 || this.roundTrips.length > 0 || this.windowEdits.length > 0 || this.gaveUp > 0) {
          const kk = wk(this.roundTrips),
            Bk = wk(this.windowEdits),
            Rk = Math.max(0, this.outliers - 5);
          (0, ak.k)("remesh", `${Math.round(this.frames/Fk)} fps (longest ${Math.round(this.maxFrameMs)} ms) | ${this.jobsSent} jobs sent, up to ${this.maxAhead} ahead on a worker, capacity ${this.maxCapacity} | round trip p50 ${Math.round((0,tk.c)(kk,.5))} max ${Math.round((0,tk.c)(kk,1))} ms | ${Bk.length} edits shown, p50 ${Math.round((0,tk.c)(Bk,.5))} max ${Math.round((0,tk.c)(Bk,1))} ms${Rk>0?`, ${Rk} more slow`:""}${this.gaveUp>0?`, ${this.gaveUp} never shown`:""}`)
        }
        this.windowStart = kk, this.frames = 0, this.maxFrameMs = 0, this.jobsSent = 0, this.maxAhead = 0, this.maxCapacity = 0, this.roundTrips = [], this.windowEdits = [], this.outliers = 0, this.gaveUp = 0
      }
      stats() {
        const kk = bk.map((kk => {
          const Fk = wk(this.edits.map((Fk => Fk[kk])));
          return `${kk}: p50 ${Math.round((0,tk.c)(Fk,.5))} p90 ${Math.round((0,tk.c)(Fk,.9))} max ${Math.round((0,tk.c)(Fk,1))}`
        }));
        return [`${this.edits.length} edits`, ...kk].join("\n")
      }
      dump() {
        const kk = this.edits.map((kk => bk.map((Fk => Math.round(10 * kk[Fk]) / 10)).join(",")));
        return [this.stats(), bk.join(","), ...kk].join("\n")
      }
    }
    class Jk {
      constructor(kk, Fk) {
        this.log = kk, this.SJ = Fk
      }
      edit(kk, Fk, Bk) {
        const [Rk, tk, ak] = this.SJ.iJ.zRk(kk, Fk, Bk), Xk = this.SJ.iJ.Zy.py(Rk, tk, ak);
        Xk && Xk.qy && this.log.edit(sk(Rk, tk, ak), performance.now())
      }
      sent(kk, Fk, Bk, Rk, tk) {
        this.log.sent(sk(kk.i, kk.j, kk.k), Fk, Bk, Rk, tk, dk, performance.now())
      }
      received(kk) {
        this.log.received(kk.meshJobId, kk.jobMs, performance.now())
      }
      failed(kk) {
        this.log.failed(kk)
      }
      applied(kk, Fk) {
        this.log.applied(sk(kk.i, kk.j, kk.k), Fk, performance.now())
      }
    }
    let Ak = null,
      ek = null,
      yk = !1,
      fk = null;

    function mk() {
      return new Promise((kk => {
        null !== Ak && Ak.reported >= Xk ? kk() : ek = kk
      }))
    }

    function Wk() {
      const kk = new Vk;
      return Ak = kk, (0, ak.i)("remesh", (() => kk.dump())), (0, ak.d)("remeshStats", (() => {
        console.log(kk.stats())
      })), yk || (yk = !0, (0, Rk.b)((kk => {
        (0, ak.k)("remesh", kk)
      }), mk)), kk
    }

    function vk(kk) {
      const Fk = Wk();
      fk = new Jk(Fk, kk), kk.VY.meshProbe = fk, kk.on("beforeRender", (() => {
        Fk.frame(performance.now())
      }))
    }

    function ik(kk, Fk, Bk) {
      var Rk;
      null === (Rk = fk) || void 0 === Rk || Rk.edit(kk, Fk, Bk)
    }
  },
  37428: (kk, Fk, Bk) => {
    function Rk(kk) {
      return "string" !== typeof kk || 2 !== kk.length && ":" !== kk[2] ? null : kk[0] + kk[1]
    }
    Bk.d(Fk, {
      d: () => fk,
      h: () => vk,
      j: () => bk,
      n: () => Xk,
      q: () => ak,
      s: () => wk,
      u: () => mk,
      y: () => yk
    });
    const tk = ["op:ytInitialPlayerResponse.adPlacements", "op:ytInitialPlayerResponse.playerAds", "op:ytInitialPlayerResponse.adSlots", "op:playerResponse.adPlacements", "op:playerResponse.playerAds", "op:playerResponse.adSlots"];

    function ak(kk) {
      if (function(kk) {
          for (let Fk = 0; Fk < tk.length; Fk++)
            if (kk === tk[Fk]) return !0;
          return !1
        }(kk)) return !1;
      const Fk = Rk(kk);
      return "op" === Fk || "ep" === Fk || "wi" === Fk || "pp" === Fk || "fp:call" === kk || "fp:t" === kk
    }

    function Xk(kk) {
      return "fp" === Rk(kk) && !ak(kk)
    }

    function bk(kk) {
      if ("string" !== typeof kk) return !1;
      return "o" === kk[0] && "p" === kk[1] && (2 === kk.length || ":" === kk[2]) || "fp:call" === kk || "2" === kk || "t" === kk || "a" === kk
    }

    function wk(kk, Fk) {
      return `~${function(kk){return kk.length<2?kk:":"===kk[1]?kk[0]:kk[0]+kk[1]}(Fk)}~${kk}`
    }
    const dk = 200;

    function sk(kk) {
      let Fk = kk.length - 1;
      for (let Bk = 0; Bk < 2; Bk++) {
        const Bk = Fk;
        for (; Fk >= 0 && kk[Fk] >= "0" && kk[Fk] <= "9";) Fk--;
        if (Fk < 0 || Fk === Bk || ":" !== kk[Fk]) return -1;
        Fk--
      }
      return Fk + 1
    }

    function Vk(kk) {
      return "unknown" === kk || sk(kk) >= 0
    }

    function Jk(kk, Fk) {
      return kk[Fk] >= "\ud800" && kk[Fk] <= "\udbff" && Fk + 1 < kk.length && kk[Fk + 1] >= "\udc00" && kk[Fk + 1] <= "\udfff" ? 2 : 1
    }

    function Ak(kk, Fk, Bk) {
      return 2 === Bk ? 4 : kk[Fk] <= "\x7f" ? 1 : kk[Fk] <= "\u07ff" ? 2 : 3
    }

    function ek(kk, Fk, Bk) {
      let Rk = 0;
      for (; Rk < Fk;) {
        const Fk = Jk(kk, Rk),
          tk = Ak(kk, Rk, Fk);
        if (tk > Bk) break;
        Bk -= tk, Rk += Fk
      }
      return Rk
    }

    function yk(kk) {
      let Fk = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1 / 0;
      if ("string" !== typeof kk || kk.length > dk || !Vk(kk)) return "t";
      let Bk = 2;
      for (let bk = 0; bk < kk.length;) {
        const Fk = Jk(kk, bk);
        Bk += Ak(kk, bk, Fk), bk += Fk
      }
      if (Bk <= Fk) return `t ${kk}`;
      const Rk = sk(kk),
        tk = Fk - 2 - (kk.length - Rk);
      if (tk < 0) return "t";
      const ak = ek(kk, Rk, tk);
      let Xk = "t ";
      for (let bk = 0; bk < ak; bk++) Xk += kk[bk];
      for (let bk = Rk; bk < kk.length; bk++) Xk += kk[bk];
      return Xk
    }
    const fk = 62;

    function mk(kk) {
      let Fk = "so:";
      const Bk = ek(kk, kk.length, fk - Fk.length);
      for (let Rk = 0; Rk < Bk; Rk++) Fk += kk[Rk];
      return Fk
    }
    const Wk = "BABYLON ";

    function vk(kk) {
      return mk(Wk + kk)
    }
  },
  37657: kk => {
    kk.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAAKUlEQVQYGWM8CwQMeAATHjmw1JBQwAh06v+LFy8yvH//noGXl/ccuq8A/vQKd00yOdIAAAAASUVORK5CYII="
  },
  37649: kk => {
    kk.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAALUlEQVQYGWM8CwQMeAATHjmw1JBQwAh06v8DBw4wCAoKMnBzczN8/PjxHLLPAORwCnfkvOdNAAAAAElFTkSuQmCC"
  },
  37659: kk => {
    kk.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAAKUlEQVQYGWM8CwQMeAATHjmw1JBQwAh06v8DBw4wCAoKMvz58+ccuq8A8vQKd2AxC9MAAAAASUVORK5CYII="
  },
  37647: kk => {
    kk.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAANUlEQVQYGWM8CwQMeAATHjmw1JBQAHLp/wMHDvy/ePHi/4CAgP937tz5Ly6u+5/P3uw/KAgAgjwWhHm22JoAAAAASUVORK5CYII="
  },
  37651: kk => {
    kk.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAAKUlEQVQYGWM8CwQMeAATHjmw1JBQwAh06v8DBw4wCAoKMvz58+ccuq8A8vQKd2AxC9MAAAAASUVORK5CYII="
  }
};
Object.freeze(modules);
for (const kk in modules) Object.freeze(modules[kk]);