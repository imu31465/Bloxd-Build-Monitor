export const id = 76;
export const ids = [76];
export const modules = {
  4684: (kk, Fk, Ik) => {
    Ik.d(Fk, {
      d: () => Lk
    });
    var Xk = Ik(25),
      Tk = Ik(34),
      ik = Ik(1270),
      yk = Ik(2744);
    const lk = 3e4,
      ak = 1e3;

    function qk() {
      return "visible" === document.visibilityState && "inGame" === Xk.d.get("gameState") && (0, ik.n)()
    }

    function Lk(kk, Fk) {
      (0, yk.p)() || function(kk, Fk, Ik) {
        let Xk = 0;
        const Tk = setInterval((() => {
          Fk() && (Xk += ak, Xk >= kk && (clearInterval(Tk), Ik()))
        }), ak)
      }(lk, qk, (() => {
        Fk().then((() => {
          kk(`saved for the player after ${lk/1e3} s of play`), (0, yk.y)(), Tk.g.GL("chat", {
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
  34020: (kk, Fk, Ik) => {
    function Xk(kk, Fk) {
      return 0 === kk.length ? 0 : kk[Math.min(kk.length - 1, Math.floor(Fk * kk.length))]
    }

    function Tk(kk) {
      return kk.toFixed(1)
    }
    Ik.d(Fk, {
      b: () => Tk,
      d: () => Xk
    })
  },
  37939: (kk, Fk, Ik) => {
    Ik.d(Fk, {
      d: () => qk,
      h: () => Lk,
      j: () => Kk,
      m: () => Pk,
      n: () => xk
    });
    var Xk = Ik(4684),
      Tk = Ik(34020),
      ik = Ik(2744);
    const yk = 20,
      lk = ["totalMs", "slotMs", "workerMs", "applyMs", "ahead", "inFlight", "St", "jobMs"];

    function ak(kk) {
      return [...kk].sort(((kk, Fk) => kk - Fk))
    }
    const qk = [];

    function Lk(kk, Fk, Ik) {
      return `${kk},${Fk},${Ik}`
    }
    class tk {
      constructor() {
        this.pending = new Map, this.jobs = new Map, this.edits = [], this.nextEdit = 0, this.reported = 0, this.windowStart = performance.now(), this.frames = 0, this.lastFrameAt = 0, this.maxFrameMs = 0, this.jobsSent = 0, this.maxAhead = 0, this.maxCapacity = 0, this.roundTrips = [], this.windowEdits = [], this.outliers = 0, this.gaveUp = 0
      }
      edit(kk, Fk) {
        var Ik;
        const Xk = null !== (Ik = this.pending.get(kk)) && void 0 !== Ik ? Ik : [];
        Xk.push({
          editAt: Fk,
          meshJobId: 0
        }), this.pending.set(kk, Xk)
      }
      frame(kk) {
        this.lastFrameAt > 0 && (this.maxFrameMs = Math.max(this.maxFrameMs, kk - this.lastFrameAt)), this.lastFrameAt = kk, this.frames++, kk - this.windowStart >= 1e3 && this.summarise(kk)
      }
      sent(kk, Fk, Ik, Xk, Tk, ik, yk) {
        this.jobs.set(Fk, {
          sentAt: yk,
          receivedAt: 0,
          ahead: Ik,
          inFlight: Xk,
          St: Tk,
          jobMs: 0
        }), this.jobsSent++, this.maxAhead = Math.max(this.maxAhead, Ik), this.maxCapacity = Math.max(this.maxCapacity, Tk);
        for (const ak of null !== (lk = this.pending.get(kk)) && void 0 !== lk ? lk : []) {
          var lk;
          ik.includes(ak.meshJobId) || (ak.meshJobId = Fk)
        }
      }
      received(kk, Fk, Ik) {
        const Xk = this.jobs.get(kk);
        void 0 !== Xk && (this.roundTrips.push(Ik - Xk.sentAt), Xk.receivedAt = Ik, Xk.jobMs = Fk)
      }
      failed(kk) {
        this.jobs.delete(kk)
      }
      reassign(kk, Fk, Ik) {
        this.jobs.delete(Fk);
        for (const Tk of null !== (Xk = this.pending.get(kk)) && void 0 !== Xk ? Xk : []) {
          var Xk;
          Tk.meshJobId === Fk && (Tk.meshJobId = Ik)
        }
      }
      applied(kk, Fk, Ik) {
        const Xk = this.jobs.get(Fk);
        this.jobs.delete(Fk), void 0 !== Xk && this.show(kk, Xk, Ik, (kk => kk.meshJobId === Fk))
      }
      emptied(kk, Fk) {
        const Ik = {
          sentAt: Fk,
          receivedAt: Fk,
          ahead: 0,
          inFlight: 0,
          St: 0,
          jobMs: 0
        };
        this.show(kk, Ik, Fk, (() => !0))
      }
      show(kk, Fk, Ik, Xk) {
        const Tk = this.pending.get(kk);
        if (!Tk) return;
        const ik = Tk.filter((Tk => !Xk(Tk) || (this.record(kk, Tk.editAt, Fk, Ik), !1)));
        ik.length > 0 ? this.pending.set(kk, ik) : this.pending.delete(kk)
      }
      Mj(kk) {
        this.reported += kk, this === jk && this.reported >= yk && null !== ek && (ek(), ek = null)
      }
      record(kk, Fk, Ik, Xk) {
        const Tk = {
          totalMs: Xk - Fk,
          slotMs: Ik.sentAt - Fk,
          workerMs: Ik.receivedAt - Ik.sentAt,
          applyMs: Xk - Ik.receivedAt,
          ahead: Ik.ahead,
          inFlight: Ik.inFlight,
          St: Ik.St,
          jobMs: Ik.jobMs
        };
        if (this.edits[this.nextEdit] = Tk, this.nextEdit = (this.nextEdit + 1) % 500, this.windowEdits.push(Tk.totalMs), this.Mj(1), Tk.totalMs < 100 || ++this.outliers > 5) return;
        const yk = kk => Math.round(kk);
        (0, ik.g)("remesh", `slow edit (${kk}) shown in ${yk(Tk.totalMs)} ms: slot ${yk(Tk.slotMs)}, worker ${yk(Tk.workerMs)} (${Tk.ahead} ahead, ${Tk.inFlight}/${Tk.St} in flight; job ${yk(Tk.jobMs)}), apply ${yk(Tk.applyMs)}`)
      }
      summarise(kk) {
        const Fk = (kk - this.windowStart) / 1e3;
        for (const [Ik, Xk] of this.pending) {
          const Fk = Xk.filter((Fk => kk - Fk.editAt <= 1e4));
          this.gaveUp += Xk.length - Fk.length, this.Mj(Xk.length - Fk.length), Fk.length > 0 ? this.pending.set(Ik, Fk) : this.pending.delete(Ik)
        }
        for (const [Ik, Xk] of this.jobs) kk - Xk.sentAt > (Xk.receivedAt > 0 ? 1e4 : 6e4) && this.jobs.delete(Ik);
        if (this.jobsSent > 0 || this.roundTrips.length > 0 || this.windowEdits.length > 0 || this.gaveUp > 0) {
          const kk = ak(this.roundTrips),
            Ik = ak(this.windowEdits),
            Xk = Math.max(0, this.outliers - 5);
          (0, ik.g)("remesh", `${Math.round(this.frames/Fk)} fps (longest ${Math.round(this.maxFrameMs)} ms) | ${this.jobsSent} jobs sent, up to ${this.maxAhead} ahead on a worker, capacity ${this.maxCapacity} | round trip p50 ${Math.round((0,Tk.d)(kk,.5))} max ${Math.round((0,Tk.d)(kk,1))} ms | ${Ik.length} edits shown, p50 ${Math.round((0,Tk.d)(Ik,.5))} max ${Math.round((0,Tk.d)(Ik,1))} ms${Xk>0?`, ${Xk} more slow`:""}${this.gaveUp>0?`, ${this.gaveUp} never shown`:""}`)
        }
        this.windowStart = kk, this.frames = 0, this.maxFrameMs = 0, this.jobsSent = 0, this.maxAhead = 0, this.maxCapacity = 0, this.roundTrips = [], this.windowEdits = [], this.outliers = 0, this.gaveUp = 0
      }
      stats() {
        const kk = lk.map((kk => {
          const Fk = ak(this.edits.map((Fk => Fk[kk])));
          return `${kk}: p50 ${Math.round((0,Tk.d)(Fk,.5))} p90 ${Math.round((0,Tk.d)(Fk,.9))} max ${Math.round((0,Tk.d)(Fk,1))}`
        }));
        return [`${this.edits.length} edits`, ...kk].join("\n")
      }
      dump() {
        const kk = this.edits.map((kk => lk.map((Fk => Math.round(10 * kk[Fk]) / 10)).join(",")));
        return [this.stats(), lk.join(","), ...kk].join("\n")
      }
    }
    class Zk {
      constructor(kk, Fk) {
        this.log = kk, this.qZ = Fk
      }
      edit(kk, Fk, Ik) {
        const [Xk, Tk, ik] = this.qZ.XZ.kTk(kk, Fk, Ik), yk = this.qZ.XZ.Qw.sw(Xk, Tk, ik);
        yk && yk.Pw && this.log.edit(Lk(Xk, Tk, ik), performance.now())
      }
      sent(kk, Fk, Ik, Xk, Tk) {
        this.log.sent(Lk(kk.i, kk.j, kk.k), Fk, Ik, Xk, Tk, qk, performance.now())
      }
      received(kk) {
        this.log.received(kk.meshJobId, kk.jobMs, performance.now())
      }
      failed(kk) {
        this.log.failed(kk)
      }
      applied(kk, Fk) {
        this.log.applied(Lk(kk.i, kk.j, kk.k), Fk, performance.now())
      }
    }
    let jk = null,
      ek = null,
      wk = !1,
      Hk = null;

    function Jk() {
      return new Promise((kk => {
        null !== jk && jk.reported >= yk ? kk() : ek = kk
      }))
    }

    function xk() {
      const kk = new tk;
      return jk = kk, (0, ik.f)("remesh", (() => kk.dump())), (0, ik.b)("remeshStats", (() => {
        console.log(kk.stats())
      })), wk || (wk = !0, (0, Xk.d)((kk => {
        (0, ik.g)("remesh", kk)
      }), Jk)), kk
    }

    function Pk(kk) {
      const Fk = xk();
      Hk = new Zk(Fk, kk), kk.Bx.meshProbe = Hk, kk.on("beforeRender", (() => {
        Fk.frame(performance.now())
      }))
    }

    function Kk(kk, Fk, Ik) {
      var Xk;
      null === (Xk = Hk) || void 0 === Xk || Xk.edit(kk, Fk, Ik)
    }
  },
  37718: (kk, Fk, Ik) => {
    Ik.d(Fk, {
      b: () => Xk
    });
    const Xk = {
      noaReady: null,
      chunkRequested: null,
      beforeServerListeners: null,
      wasmNetReady: null
    }
  },
  37760: (kk, Fk, Ik) => {
    function Xk(kk) {
      return "string" !== typeof kk || 2 !== kk.length && ":" !== kk[2] ? null : kk[0] + kk[1]
    }
    Ik.d(Fk, {
      d: () => Hk,
      g: () => sk,
      i: () => Qk,
      j: () => Vk,
      l: () => lk,
      m: () => yk,
      n: () => ik,
      q: () => ak,
      r: () => Jk,
      t: () => wk
    });
    const Tk = ["op:ytInitialPlayerResponse.adPlacements", "op:ytInitialPlayerResponse.playerAds", "op:ytInitialPlayerResponse.adSlots", "op:playerResponse.adPlacements", "op:playerResponse.playerAds", "op:playerResponse.adSlots"];

    function ik(kk) {
      if (function(kk) {
          for (let Fk = 0; Fk < Tk.length; Fk++)
            if (kk === Tk[Fk]) return !0;
          return !1
        }(kk)) return !1;
      const Fk = Xk(kk);
      return "op" === Fk || "ep" === Fk || "wi" === Fk || "pp" === Fk || "fp:call" === kk || "fp:t" === kk
    }

    function yk(kk) {
      return "fp" === Xk(kk) && !ik(kk)
    }

    function lk(kk) {
      if ("string" !== typeof kk) return !1;
      return "o" === kk[0] && "p" === kk[1] && (2 === kk.length || ":" === kk[2]) || "fp:call" === kk || "2" === kk || "t" === kk || "a" === kk
    }

    function ak(kk, Fk) {
      return `~${function(kk){return kk.length<2?kk:":"===kk[1]?kk[0]:kk[0]+kk[1]}(Fk)}~${kk}`
    }
    const qk = 200;

    function Lk(kk) {
      let Fk = kk.length - 1;
      for (let Ik = 0; Ik < 2; Ik++) {
        const Ik = Fk;
        for (; Fk >= 0 && kk[Fk] >= "0" && kk[Fk] <= "9";) Fk--;
        if (Fk < 0 || Fk === Ik || ":" !== kk[Fk]) return -1;
        Fk--
      }
      return Fk + 1
    }

    function tk(kk) {
      return "unknown" === kk || Lk(kk) >= 0
    }

    function Zk(kk, Fk) {
      return kk[Fk] >= "\ud800" && kk[Fk] <= "\udbff" && Fk + 1 < kk.length && kk[Fk + 1] >= "\udc00" && kk[Fk + 1] <= "\udfff" ? 2 : 1
    }

    function jk(kk, Fk, Ik) {
      return 2 === Ik ? 4 : kk[Fk] <= "\x7f" ? 1 : kk[Fk] <= "\u07ff" ? 2 : 3
    }

    function ek(kk, Fk, Ik) {
      let Xk = 0;
      for (; Xk < Fk;) {
        const Fk = Zk(kk, Xk),
          Tk = jk(kk, Xk, Fk);
        if (Tk > Ik) break;
        Ik -= Tk, Xk += Fk
      }
      return Xk
    }

    function wk(kk) {
      let Fk = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1 / 0;
      if ("string" !== typeof kk || kk.length > qk || !tk(kk)) return "t";
      let Ik = 2;
      for (let lk = 0; lk < kk.length;) {
        const Fk = Zk(kk, lk);
        Ik += jk(kk, lk, Fk), lk += Fk
      }
      if (Ik <= Fk) return `t ${kk}`;
      const Xk = Lk(kk),
        Tk = Fk - 2 - (kk.length - Xk);
      if (Tk < 0) return "t";
      const ik = ek(kk, Xk, Tk);
      let yk = "t ";
      for (let lk = 0; lk < ik; lk++) yk += kk[lk];
      for (let lk = Xk; lk < kk.length; lk++) yk += kk[lk];
      return yk
    }
    const Hk = 62;

    function Jk(kk) {
      let Fk = "so:";
      const Ik = ek(kk, kk.length, Hk - Fk.length);
      for (let Xk = 0; Xk < Ik; Xk++) Fk += kk[Xk];
      return Fk
    }
    const xk = "BABYLON ",
      Pk = "DECODE ",
      Kk = "BABYLON@ ";

    function Qk(kk) {
      return Jk(xk + kk)
    }

    function sk(kk, Fk) {
      return Jk(Kk + kk + " " + Fk)
    }

    function Vk(kk) {
      return Jk(Pk + kk)
    }
  },
  37984: kk => {
    kk.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAAKUlEQVQYGWM8CwQMeAATHjmw1JBQwAh06v+LFy8yvH//noGXl/ccuq8A/vQKd00yOdIAAAAASUVORK5CYII="
  },
  37968: kk => {
    kk.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAALUlEQVQYGWM8CwQMeAATHjmw1JBQwAh06v8DBw4wCAoKMnBzczN8/PjxHLLPAORwCnfkvOdNAAAAAElFTkSuQmCC"
  },
  37990: kk => {
    kk.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAAKUlEQVQYGWM8CwQMeAATHjmw1JBQwAh06v8DBw4wCAoKMvz58+ccuq8A8vQKd2AxC9MAAAAASUVORK5CYII="
  },
  37960: kk => {
    kk.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAANUlEQVQYGWM8CwQMeAATHjmw1JBQAHLp/wMHDvy/ePHi/4CAgP937tz5Ly6u+5/P3uw/KAgAgjwWhHm22JoAAAAASUVORK5CYII="
  },
  37975: kk => {
    kk.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAAKUlEQVQYGWM8CwQMeAATHjmw1JBQwAh06v8DBw4wCAoKMvz58+ccuq8A8vQKd2AxC9MAAAAASUVORK5CYII="
  }
};
Object.freeze(modules);
for (const kk in modules) Object.freeze(modules[kk]);