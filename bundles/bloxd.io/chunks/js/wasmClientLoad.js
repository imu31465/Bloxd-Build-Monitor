export const id = 58;
export const ids = [58];
export const modules = {
  36367: (kk, ek, ik) => {
    async function Dk(kk) {
      const ek = await fetch(kk, {
        priority: "low"
      });
      if (!ek.ok) throw new Error(`Fetching ${kk} failed: HTTP ${ek.status}`);
      const ik = ek.body.getReader();
      for (; !(await ik.read()).done;);
    }
    ik.d(ek, {
      e: () => Dk
    })
  },
  38644: (kk, ek, ik) => {
    ik.d(ek, {
      c: () => Pk
    });
    var Dk = ik(8718),
      fk = ik(36011),
      Sk = ik(38647);
    const bk = {
        seat: "seat_timeout",
        socket_unopened: "socket_timeout_unopened",
        socket: "socket_timeout"
      },
      rk = {
        seat: "seat_lost",
        socket_unopened: "socket_unopened",
        socket: "socket_closed"
      };

    function Pk(kk, ek) {
      if (kk instanceof fk.e) return {
        at: bk[ek],
        code: 0
      };
      const ik = (0, Dk.i)(kk),
        Pk = "number" === typeof ik ? ik : 0;
      return null !== (0, Sk.n)(Pk).name ? {
        at: "refused",
        code: Pk
      } : {
        at: rk[ek],
        code: Pk
      }
    }
  },
  8718: (kk, ek, ik) => {
    ik.d(ek, {
      e: () => Sk,
      i: () => bk,
      m: () => rk,
      n: () => mk,
      r: () => Pk
    });
    var Dk = ik(189),
      fk = ik(4563);

    function Sk(kk) {
      return bk(kk) === Dk.c.gameOrPluginOnPlayerAuthRejected.code
    }

    function bk(kk) {
      return "object" === typeof kk && null !== kk ? kk.code : void 0
    }

    function rk(kk) {
      var ek;
      return null !== (ek = Object.keys(fk.c).find((ek => fk.c[ek] === kk))) && void 0 !== ek ? ek : null
    }

    function Pk(kk) {
      return "notWhitelisted" === kk ? "customLobby:cantJoinNotWhitelistedTitle" : "customLobby:cantJoinWorld"
    }
    const mk = {
      private: "customLobby:cantJoinPrivate",
      notWhitelisted: "customLobby:cantJoinNotWhitelisted",
      banned: "customLobby:cantJoinBanned",
      adminLocked: "customLobby:cantJoinAdminLocked"
    }
  },
  36011: (kk, ek, ik) => {
    ik.d(ek, {
      b: () => bk,
      e: () => fk,
      g: () => Sk
    });
    var Dk = ik(1756);
    class fk extends Error {
      constructor(kk) {
        super("The game server didn't answer in time"), this.leg = kk, this.name = "SeatRequestTimedOut"
      }
    }
    const Sk = new class {
      constructor() {
        this.count = 0, this.answers = 0, this.waiting = new Set
      }
      get answered() {
        return this.answers
      }
      answer() {
        this.answers++
      }
      add() {
        this.count++;
        for (const kk of this.waiting) kk()
      }
      remove() {
        this.count--
      }
      whenSlow(kk) {
        return this.count > 0 || kk.aborted ? Promise.resolve(!kk.aborted) : new Promise((ek => {
          const ik = () => {
            this.waiting.delete(ik), ek(!kk.aborted)
          };
          this.waiting.add(ik), kk.addEventListener("abort", ik, {
            once: !0
          })
        }))
      }
    };
    class bk {
      constructor(kk) {
        this.timeout = void 0, this.slow = void 0, this.countedSlow = !1, this.timeout = new Dk.b(45e3, kk), this.slow = new Dk.b(8e3, (() => {
          this.countedSlow = !0, Sk.add()
        }))
      }
      restart() {
        Sk.answer(), this.uncountSlow(), this.timeout.restart(), this.slow.restart()
      }
      stop() {
        this.timeout.stop(), this.slow.stop(), this.uncountSlow()
      }
      answered() {
        this.stop(), Sk.answer()
      }
      socketOpened() {
        this.slow.stop(), this.uncountSlow(), Sk.answer()
      }
      uncountSlow() {
        this.countedSlow && (this.countedSlow = !1, Sk.remove())
      }
    }
  },
  36004: (kk, ek, ik) => {
    ik.d(ek, {
      d: () => Sk,
      h: () => rk,
      k: () => bk,
      o: () => Pk,
      r: () => mk,
      v: () => Mk
    });
    var Dk = ik(189);
    const fk = 32 * ik(35841).h,
      Sk = 6144,
      bk = 4608,
      rk = 512;

    function Pk(kk) {
      return Math.floor(fk * kk / Sk)
    }

    function mk(kk) {
      const ek = kk - Math.floor(kk / 6);
      let ik = Dk.g.maxChunkHorizAddDistance,
        fk = Dk.g.maxChunkVertAddDistance;
      if (Mk(ik + 1, fk + 1) <= ek) return null;
      for (; Mk(ik + 1, fk + 1) > ek && (ik > 0 || fk > 0);) ik > fk ? ik-- : fk--;
      return {
        horizontal: ik,
        vertical: fk
      }
    }

    function Mk(kk, ek) {
      const ik = Math.max(kk, ek);
      let Dk = 0;
      for (let fk = -ik; fk <= ik; fk++)
        for (let Sk = -ik; Sk <= ik; Sk++)
          for (let bk = -ik; bk <= ik; bk++) Kk(kk, ek, fk, Sk, bk) && Dk++;
      return Dk
    }

    function Kk(kk, ek, ik, Dk, fk) {
      const Sk = ik * ik + fk * fk;
      return kk === ek ? Sk + Dk * Dk <= kk * kk : kk > ek ? Math.abs(Dk) <= ek && Sk + Dk * Dk <= kk * kk : Sk <= kk * kk && Sk + Dk * Dk <= ek * ek
    }
  },
  40634: (kk, ek, ik) => {
    ik.r(ek), ik.d(ek, {
      prefetchWasmClient: () => Ak,
      startJoinLoad: () => yk,
      startLoadAheadOfJoin: () => Lk
    });
    var Dk = ik(2821),
      fk = ik(35878),
      Sk = ik(40452),
      bk = ik(1046),
      rk = ik(610),
      Pk = ik(40297),
      mk = (ik(40358), ik(36367)),
      Mk = ik(40311),
      Kk = ik(40294),
      xk = ik(40434);
    const nk = "[bloxd-wasm-client]";
    let Uk = null,
      Hk = null,
      wk = null,
      lk = null,
      pk = null;

    function yk() {
      return lk ??= (async () => {
        if ("undefined" === typeof WebAssembly) return;
        const kk = await (0, Kk.U)();
        if (null === kk) return;
        if ((0, Pk.m)(kk)) return (0, Kk.V)("none"), void Yk("none");
        if ("wasm" !== (0, rk.g)(window.location.search) && null !== (0, Mk.e)(kk, (0, Mk.i)(kk))) return (0, Kk.V)("none"), void Yk("none");
        (0, Kk.V)(kk.backend);
        const ek = await kk.load();
        Yk(ek.name);
        const ik = "unloaded" === (0, Dk.D)();
        if (ik && (0, Kk.p)(), !await (0, fk.j)(ek, Sk.h)) return void console.warn(`${nk} the join's early wasm load failed: the boot loads the client itself`);
        if (!ik) return;
        const mk = (0, fk.g)(ek.name);
        void 0 !== mk ? (0, bk.logClientMeasurement)("wasm_join_compile", {
          ms: Math.round(mk.ms)
        }, {
          path: mk.path,
          build: ek.name
        }) : console.warn(`${nk} the join's wasm load left no record of how it compiled ${ek.name}`)
      })().catch((kk => {
        console.warn(`${nk} the join's early wasm load did not start: the boot loads the client itself`, kk)
      })), lk
    }

    function Yk(kk) {
      null !== pk && (0, bk.logClientMeasurement)("wasm_compile_ahead", {
        hit: pk === kk ? 1 : 0
      }, {
        guessed: pk,
        loaded: kk
      })
    }

    function Lk() {
      let kk = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
      if (null === wk) {
        var ek;
        const ik = null !== (ek = kk.joinStarted) && void 0 !== ek ? ek : () => !1;
        wk = Promise.all([Ak(kk), Ck(ik)]).then((() => {}))
      }
      return wk
    }

    function Ck(kk) {
      return Hk ??= (async () => {
        if ("undefined" === typeof WebAssembly) return;
        const ek = await (0, Kk.i)();
        null === ek || kk() || "unloaded" !== (0, Dk.D)() || (pk = ek.name, await (0, fk.b)([ek, Sk.h], "low"))
      })().catch((kk => {
        console.warn(`${nk} the compile ahead of the join did not start: the join loads the client itself`, kk)
      })), Hk
    }

    function Ak() {
      let {
        joinStarted: kk = () => !1,
        language: ek = ""
      } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
      return Uk ??= async function(kk, ek) {
        if (!await async function(kk) {
            if (kk()) return !1;
            let ek;
            try {
              var Dk;
              const kk = await fetch(`${ik.p}static/js/3lwmg.wasmJoinFiles.json`, {
                priority: "low",
                cache: "no-cache"
              });
              if (!kk.ok) throw new Error(`HTTP ${kk.status}`);
              if (/\bno-store\b/.test(null !== (Dk = kk.headers.get("Cache-Control")) && void 0 !== Dk ? Dk : "")) return !1;
              const fk = await kk.json();
              if (!Array.isArray(fk)) throw new Error("not a list");
              ek = fk
            } catch (Sk) {
              return console.warn(`${nk} the join's chunk list did not load: the join downloads its chunks itself`, Sk), !kk()
            }
            if (kk()) return !1;
            const fk = document.createElement("link").relList.supports("prefetch");
            for (const bk of ek) {
              const kk = `${ik.p}${bk}`;
              fk ? jk(kk) : (0, mk.e)(kk).catch((ek => {
                console.warn(`${nk} prefetching ${kk} failed`, ek)
              }))
            }
            return !0
          }(kk)) return;
        const Dk = [(0, mk.e)((0, xk.i)())];
        (0, xk.e)(ek) && Dk.push((0, mk.e)((0, xk.j)()));
        await Promise.all(Dk)
      }(kk, ek).catch((kk => {
        console.warn(`${nk} the prefetch failed: the join downloads the client itself`, kk)
      })), Uk
    }

    function jk(kk) {
      const ek = document.createElement("link");
      ek.rel = "prefetch", ek.href = kk, kk.endsWith(".js") && (ek.crossOrigin = "anonymous"), document.head.appendChild(ek)
    }
  },
  38647: (kk, ek, ik) => {
    ik.d(ek, {
      c: () => fk,
      g: () => Sk,
      k: () => rk,
      n: () => Mk,
      p: () => Pk,
      s: () => bk
    });
    var Dk = ik(189);
    const fk = 3e3,
      Sk = 15e3;

    function bk(kk) {
      const ek = kk.endsWith(Dk.k);
      return {
        text: (ek ? kk.slice(0, -Dk.k.length) : kk) || null,
        dropsCache: ek
      }
    }
    const rk = "Either your internet isn't working or this is a bug.";

    function Pk(kk, ek) {
      const ik = Mk(kk);
      return null !== ik.name && "" === Dk.c[ik.name].text && null !== ek ? ek : ik.reason
    }
    const mk = "You were removed from the game.";

    function Mk(kk) {
      var ek;
      let ik = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
      const fk = null !== (ek = Object.keys(Dk.c).find((ek => Dk.c[ek].code === kk))) && void 0 !== ek ? ek : null;
      if (null === fk) return {
        code: kk,
        name: fk,
        reason: null !== ik && void 0 !== ik ? ik : `${rk}\nCode: ${kk}`,
        canReconnect: !1,
        automaticallyReconnect: !1,
        requiresRefresh: !1
      };
      const {
        text: Sk,
        canReconnect: bk = !1
      } = Dk.c[fk], Pk = kk === Dk.c.outdatedVersion.code || kk === Dk.c.loadRecaptchaError.code;
      return {
        code: kk,
        name: fk,
        reason: "" !== Sk ? Sk : null !== ik && void 0 !== ik ? ik : kk === Dk.c.gameOrPluginKick.code ? mk : `Code: ${kk}`,
        canReconnect: bk,
        automaticallyReconnect: kk === Dk.c.customGameUpdated.code || kk === Dk.c.duplicateLobbyNameError.code,
        requiresRefresh: Pk
      }
    }
  }
};
Object.freeze(modules);
for (const kk in modules) Object.freeze(modules[kk]);