export const id = 73;
export const ids = [73];
export const modules = {
  4466: (uu, Ru, yu) => {
    yu.d(Ru, {
      d: () => Vu
    });
    var Eu = yu(27),
      Ku = yu(34),
      Qu = yu(1250),
      mu = yu(2707);
    const Ju = 3e4,
      Nu = 1e3;

    function Xu() {
      return "visible" === document.visibilityState && "inGame" === Eu.d.get("gameState") && (0, Qu.r)()
    }

    function Vu(uu, Ru) {
      (0, mu.p)() || function(uu, Ru, yu) {
        let Eu = 0;
        const Ku = setInterval((() => {
          Ru() && (Eu += Nu, Eu >= uu && (clearInterval(Ku), yu()))
        }), Nu)
      }(Ju, Xu, (() => {
        Ru().then((() => {
          uu(`saved for the player after ${Ju/1e3} s of play`), (0, mu.w)(), Ku.k.Op("chat", {
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
  8924: (uu, Ru, yu) => {
    function Eu(uu, Ru) {
      return 0 === uu.length ? 0 : uu[Math.min(uu.length - 1, Math.floor(Ru * uu.length))]
    }
    yu.d(Ru, {
      c: () => Eu
    })
  },
  37692: (uu, Ru, yu) => {
    yu.d(Ru, {
      b: () => Xu,
      f: () => Vu,
      i: () => du,
      l: () => Hu,
      m: () => ju
    });
    var Eu = yu(4466),
      Ku = yu(8924),
      Qu = yu(2707);
    const mu = 20,
      Ju = ["totalMs", "slotMs", "workerMs", "applyMs", "ahead", "inFlight", "Nr", "jobMs"];

    function Nu(uu) {
      return [...uu].sort(((uu, Ru) => uu - Ru))
    }
    const Xu = [];

    function Vu(uu, Ru, yu) {
      return `${uu},${Ru},${yu}`
    }
    class ru {
      constructor() {
        this.pending = new Map, this.jobs = new Map, this.edits = [], this.nextEdit = 0, this.reported = 0, this.windowStart = performance.now(), this.frames = 0, this.lastFrameAt = 0, this.maxFrameMs = 0, this.jobsSent = 0, this.maxAhead = 0, this.maxCapacity = 0, this.roundTrips = [], this.windowEdits = [], this.outliers = 0, this.gaveUp = 0
      }
      edit(uu, Ru) {
        var yu;
        const Eu = null !== (yu = this.pending.get(uu)) && void 0 !== yu ? yu : [];
        Eu.push({
          editAt: Ru,
          meshJobId: 0
        }), this.pending.set(uu, Eu)
      }
      frame(uu) {
        this.lastFrameAt > 0 && (this.maxFrameMs = Math.max(this.maxFrameMs, uu - this.lastFrameAt)), this.lastFrameAt = uu, this.frames++, uu - this.windowStart >= 1e3 && this.summarise(uu)
      }
      sent(uu, Ru, yu, Eu, Ku, Qu, mu) {
        this.jobs.set(Ru, {
          sentAt: mu,
          receivedAt: 0,
          ahead: yu,
          inFlight: Eu,
          Nr: Ku,
          jobMs: 0
        }), this.jobsSent++, this.maxAhead = Math.max(this.maxAhead, yu), this.maxCapacity = Math.max(this.maxCapacity, Ku);
        for (const Nu of null !== (Ju = this.pending.get(uu)) && void 0 !== Ju ? Ju : []) {
          var Ju;
          Qu.includes(Nu.meshJobId) || (Nu.meshJobId = Ru)
        }
      }
      received(uu, Ru, yu) {
        const Eu = this.jobs.get(uu);
        void 0 !== Eu && (this.roundTrips.push(yu - Eu.sentAt), Eu.receivedAt = yu, Eu.jobMs = Ru)
      }
      failed(uu) {
        this.jobs.delete(uu)
      }
      reassign(uu, Ru, yu) {
        this.jobs.delete(Ru);
        for (const Ku of null !== (Eu = this.pending.get(uu)) && void 0 !== Eu ? Eu : []) {
          var Eu;
          Ku.meshJobId === Ru && (Ku.meshJobId = yu)
        }
      }
      applied(uu, Ru, yu) {
        const Eu = this.jobs.get(Ru);
        this.jobs.delete(Ru), void 0 !== Eu && this.show(uu, Eu, yu, (uu => uu.meshJobId === Ru))
      }
      emptied(uu, Ru) {
        const yu = {
          sentAt: Ru,
          receivedAt: Ru,
          ahead: 0,
          inFlight: 0,
          Nr: 0,
          jobMs: 0
        };
        this.show(uu, yu, Ru, (() => !0))
      }
      show(uu, Ru, yu, Eu) {
        const Ku = this.pending.get(uu);
        if (!Ku) return;
        const Qu = Ku.filter((Ku => !Eu(Ku) || (this.record(uu, Ku.editAt, Ru, yu), !1)));
        Qu.length > 0 ? this.pending.set(uu, Qu) : this.pending.delete(uu)
      }
      Px(uu) {
        this.reported += uu, this === xu && this.reported >= mu && null !== Su && (Su(), Su = null)
      }
      record(uu, Ru, yu, Eu) {
        const Ku = {
          totalMs: Eu - Ru,
          slotMs: yu.sentAt - Ru,
          workerMs: yu.receivedAt - yu.sentAt,
          applyMs: Eu - yu.receivedAt,
          ahead: yu.ahead,
          inFlight: yu.inFlight,
          Nr: yu.Nr,
          jobMs: yu.jobMs
        };
        if (this.edits[this.nextEdit] = Ku, this.nextEdit = (this.nextEdit + 1) % 500, this.windowEdits.push(Ku.totalMs), this.Px(1), Ku.totalMs < 100 || ++this.outliers > 5) return;
        const mu = uu => Math.round(uu);
        (0, Qu.i)("remesh", `slow edit (${uu}) shown in ${mu(Ku.totalMs)} ms: slot ${mu(Ku.slotMs)}, worker ${mu(Ku.workerMs)} (${Ku.ahead} ahead, ${Ku.inFlight}/${Ku.Nr} in flight; job ${mu(Ku.jobMs)}), apply ${mu(Ku.applyMs)}`)
      }
      summarise(uu) {
        const Ru = (uu - this.windowStart) / 1e3;
        for (const [yu, Eu] of this.pending) {
          const Ru = Eu.filter((Ru => uu - Ru.editAt <= 1e4));
          this.gaveUp += Eu.length - Ru.length, this.Px(Eu.length - Ru.length), Ru.length > 0 ? this.pending.set(yu, Ru) : this.pending.delete(yu)
        }
        for (const [yu, Eu] of this.jobs) uu - Eu.sentAt > (Eu.receivedAt > 0 ? 1e4 : 6e4) && this.jobs.delete(yu);
        if (this.jobsSent > 0 || this.roundTrips.length > 0 || this.windowEdits.length > 0 || this.gaveUp > 0) {
          const uu = Nu(this.roundTrips),
            yu = Nu(this.windowEdits),
            Eu = Math.max(0, this.outliers - 5);
          (0, Qu.i)("remesh", `${Math.round(this.frames/Ru)} fps (longest ${Math.round(this.maxFrameMs)} ms) | ${this.jobsSent} jobs sent, up to ${this.maxAhead} ahead on a worker, capacity ${this.maxCapacity} | round trip p50 ${Math.round((0,Ku.c)(uu,.5))} max ${Math.round((0,Ku.c)(uu,1))} ms | ${yu.length} edits shown, p50 ${Math.round((0,Ku.c)(yu,.5))} max ${Math.round((0,Ku.c)(yu,1))} ms${Eu>0?`, ${Eu} more slow`:""}${this.gaveUp>0?`, ${this.gaveUp} never shown`:""}`)
        }
        this.windowStart = uu, this.frames = 0, this.maxFrameMs = 0, this.jobsSent = 0, this.maxAhead = 0, this.maxCapacity = 0, this.roundTrips = [], this.windowEdits = [], this.outliers = 0, this.gaveUp = 0
      }
      stats() {
        const uu = Ju.map((uu => {
          const Ru = Nu(this.edits.map((Ru => Ru[uu])));
          return `${uu}: p50 ${Math.round((0,Ku.c)(Ru,.5))} p90 ${Math.round((0,Ku.c)(Ru,.9))} max ${Math.round((0,Ku.c)(Ru,1))}`
        }));
        return [`${this.edits.length} edits`, ...uu].join("\n")
      }
      dump() {
        const uu = this.edits.map((uu => Ju.map((Ru => Math.round(10 * uu[Ru]) / 10)).join(",")));
        return [this.stats(), Ju.join(","), ...uu].join("\n")
      }
    }
    class Bu {
      constructor(uu, Ru) {
        this.log = uu, this.Yr = Ru
      }
      edit(uu, Ru, yu) {
        const [Eu, Ku, Qu] = this.Yr.Fr.CKu(uu, Ru, yu), mu = this.Yr.Fr.Bp.xp(Eu, Ku, Qu);
        mu && mu.Vp && this.log.edit(Vu(Eu, Ku, Qu), performance.now())
      }
      sent(uu, Ru, yu, Eu, Ku) {
        this.log.sent(Vu(uu.i, uu.j, uu.k), Ru, yu, Eu, Ku, Xu, performance.now())
      }
      received(uu) {
        this.log.received(uu.meshJobId, uu.jobMs, performance.now())
      }
      failed(uu) {
        this.log.failed(uu)
      }
      applied(uu, Ru) {
        this.log.applied(Vu(uu.i, uu.j, uu.k), Ru, performance.now())
      }
    }
    let xu = null,
      Su = null,
      pu = !1,
      Tu = null;

    function Wu() {
      return new Promise((uu => {
        null !== xu && xu.reported >= mu ? uu() : Su = uu
      }))
    }

    function ju() {
      const uu = new ru;
      return xu = uu, (0, Qu.g)("remesh", (() => uu.dump())), (0, Qu.c)("remeshStats", (() => {
        console.log(uu.stats())
      })), pu || (pu = !0, (0, Eu.d)((uu => {
        (0, Qu.i)("remesh", uu)
      }), Wu)), uu
    }

    function Hu(uu) {
      const Ru = ju();
      Tu = new Bu(Ru, uu), uu.RC.meshProbe = Tu, uu.on("beforeRender", (() => {
        Ru.frame(performance.now())
      }))
    }

    function du(uu, Ru, yu) {
      var Eu;
      null === (Eu = Tu) || void 0 === Eu || Eu.edit(uu, Ru, yu)
    }
  },
  37507: (uu, Ru, yu) => {
    function Eu(uu) {
      return "string" !== typeof uu || 2 !== uu.length && ":" !== uu[2] ? null : uu[0] + uu[1]
    }
    yu.d(Ru, {
      e: () => Tu,
      h: () => Hu,
      j: () => Ju,
      k: () => mu,
      n: () => Qu,
      o: () => Nu,
      p: () => Wu,
      t: () => pu
    });
    const Ku = ["op:ytInitialPlayerResponse.adPlacements", "op:ytInitialPlayerResponse.playerAds", "op:ytInitialPlayerResponse.adSlots", "op:playerResponse.adPlacements", "op:playerResponse.playerAds", "op:playerResponse.adSlots"];

    function Qu(uu) {
      if (function(uu) {
          for (let Ru = 0; Ru < Ku.length; Ru++)
            if (uu === Ku[Ru]) return !0;
          return !1
        }(uu)) return !1;
      const Ru = Eu(uu);
      return "op" === Ru || "ep" === Ru || "wi" === Ru || "pp" === Ru || "fp:call" === uu || "fp:t" === uu
    }

    function mu(uu) {
      return "fp" === Eu(uu) && !Qu(uu)
    }

    function Ju(uu) {
      if ("string" !== typeof uu) return !1;
      return "o" === uu[0] && "p" === uu[1] && (2 === uu.length || ":" === uu[2]) || "fp:call" === uu || "2" === uu || "t" === uu || "a" === uu
    }

    function Nu(uu, Ru) {
      return `~${function(uu){return uu.length<2?uu:":"===uu[1]?uu[0]:uu[0]+uu[1]}(Ru)}~${uu}`
    }
    const Xu = 200;

    function Vu(uu) {
      let Ru = uu.length - 1;
      for (let yu = 0; yu < 2; yu++) {
        const yu = Ru;
        for (; Ru >= 0 && uu[Ru] >= "0" && uu[Ru] <= "9";) Ru--;
        if (Ru < 0 || Ru === yu || ":" !== uu[Ru]) return -1;
        Ru--
      }
      return Ru + 1
    }

    function ru(uu) {
      return "unknown" === uu || Vu(uu) >= 0
    }

    function Bu(uu, Ru) {
      return uu[Ru] >= "\ud800" && uu[Ru] <= "\udbff" && Ru + 1 < uu.length && uu[Ru + 1] >= "\udc00" && uu[Ru + 1] <= "\udfff" ? 2 : 1
    }

    function xu(uu, Ru, yu) {
      return 2 === yu ? 4 : uu[Ru] <= "\x7f" ? 1 : uu[Ru] <= "\u07ff" ? 2 : 3
    }

    function Su(uu, Ru, yu) {
      let Eu = 0;
      for (; Eu < Ru;) {
        const Ru = Bu(uu, Eu),
          Ku = xu(uu, Eu, Ru);
        if (Ku > yu) break;
        yu -= Ku, Eu += Ru
      }
      return Eu
    }

    function pu(uu) {
      let Ru = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1 / 0;
      if ("string" !== typeof uu || uu.length > Xu || !ru(uu)) return "t";
      let yu = 2;
      for (let Ju = 0; Ju < uu.length;) {
        const Ru = Bu(uu, Ju);
        yu += xu(uu, Ju, Ru), Ju += Ru
      }
      if (yu <= Ru) return `t ${uu}`;
      const Eu = Vu(uu),
        Ku = Ru - 2 - (uu.length - Eu);
      if (Ku < 0) return "t";
      const Qu = Su(uu, Eu, Ku);
      let mu = "t ";
      for (let Ju = 0; Ju < Qu; Ju++) mu += uu[Ju];
      for (let Ju = Eu; Ju < uu.length; Ju++) mu += uu[Ju];
      return mu
    }
    const Tu = 62;

    function Wu(uu) {
      let Ru = "so:";
      const yu = Su(uu, uu.length, Tu - Ru.length);
      for (let Eu = 0; Eu < yu; Eu++) Ru += uu[Eu];
      return Ru
    }
    const ju = "BABYLON ";

    function Hu(uu) {
      return Wu(ju + uu)
    }
  },
  37720: uu => {
    uu.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAAKUlEQVQYGWM8CwQMeAATHjmw1JBQwAh06v+LFy8yvH//noGXl/ccuq8A/vQKd00yOdIAAAAASUVORK5CYII="
  },
  37705: uu => {
    uu.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAALUlEQVQYGWM8CwQMeAATHjmw1JBQwAh06v8DBw4wCAoKMnBzczN8/PjxHLLPAORwCnfkvOdNAAAAAElFTkSuQmCC"
  },
  37723: uu => {
    uu.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAAKUlEQVQYGWM8CwQMeAATHjmw1JBQwAh06v8DBw4wCAoKMvz58+ccuq8A8vQKd2AxC9MAAAAASUVORK5CYII="
  },
  37703: uu => {
    uu.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAANUlEQVQYGWM8CwQMeAATHjmw1JBQAHLp/wMHDvy/ePHi/4CAgP937tz5Ly6u+5/P3uw/KAgAgjwWhHm22JoAAAAASUVORK5CYII="
  },
  37714: uu => {
    uu.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAAKUlEQVQYGWM8CwQMeAATHjmw1JBQwAh06v8DBw4wCAoKMvz58+ccuq8A8vQKd2AxC9MAAAAASUVORK5CYII="
  }
};
Object.freeze(modules);
for (const uu in modules) Object.freeze(modules[uu]);