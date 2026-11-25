export const id = 59;
export const ids = [59];
export const modules = {
  37021: (tt, et, Vt) => {
    async function Ot(tt) {
      const et = await fetch(tt, {
        priority: "low"
      });
      if (!et.ok) throw new Error(`Fetching ${tt} failed: HTTP ${et.status}`);
      const Vt = et.body.getReader();
      for (; !(await Vt.read()).done;);
    }
    Vt.d(et, {
      c: () => Ot
    })
  },
  39263: (tt, et, Vt) => {
    Vt.d(et, {
      b: () => jt
    });
    var Ot = Vt(9133),
      qt = Vt(36738),
      Dt = Vt(39271);
    const mt = {
        seat: "seat_timeout",
        socket_unopened: "socket_timeout_unopened",
        socket: "socket_timeout"
      },
      dt = {
        seat: "seat_lost",
        socket_unopened: "socket_unopened",
        socket: "socket_closed"
      };

    function jt(tt, et) {
      if (tt instanceof qt.c) return {
        at: mt[et],
        code: 0
      };
      const Vt = (0, Ot.i)(tt),
        jt = "number" === typeof Vt ? Vt : 0;
      return null !== (0, Dt.l)(jt).name ? {
        at: "refused",
        code: jt
      } : {
        at: dt[et],
        code: jt
      }
    }
  },
  9133: (tt, et, Vt) => {
    Vt.d(et, {
      e: () => Dt,
      i: () => mt,
      j: () => dt,
      k: () => Ht,
      n: () => jt
    });
    var Ot = Vt(229),
      qt = Vt(4771);

    function Dt(tt) {
      return mt(tt) === Ot.b.gameOrPluginOnPlayerAuthRejected.code
    }

    function mt(tt) {
      return "object" === typeof tt && null !== tt ? tt.code : void 0
    }

    function dt(tt) {
      var et;
      return null !== (et = Object.keys(qt.e).find((et => qt.e[et] === tt))) && void 0 !== et ? et : null
    }

    function jt(tt) {
      return "notWhitelisted" === tt ? "customLobby:cantJoinNotWhitelistedTitle" : "customLobby:cantJoinWorld"
    }
    const Ht = {
      private: "customLobby:cantJoinPrivate",
      notWhitelisted: "customLobby:cantJoinNotWhitelisted",
      banned: "customLobby:cantJoinBanned",
      adminLocked: "customLobby:cantJoinAdminLocked"
    }
  },
  41248: (tt, et, Vt) => {
    Vt.r(et), Vt.d(et, {
      prefetchWasmClient: () => ut,
      startJoinLoad: () => Mt,
      startLoadAheadOfJoin: () => Jt
    });
    var Ot = Vt(2961),
      qt = Vt(36535),
      Dt = Vt(41057),
      mt = Vt(1167),
      dt = Vt(40905),
      jt = (Vt(40960), Vt(37021)),
      Ht = Vt(40903),
      Xt = Vt(41167),
      Qt = Vt(41037);
    const lt = "[bloxd-wasm-client]";
    let Et = null,
      ft = null,
      wt = null,
      yt = null,
      Nt = null;

    function Mt() {
      return yt ??= (async () => {
        if ("undefined" === typeof WebAssembly) return;
        const tt = await (0, Ht.Q)();
        if (null === tt) return;
        if ((0, dt.l)(tt)) return (0, Ht.S)("none"), void bt("none");
        (0, Ht.S)(tt.backend);
        const et = await tt.load();
        bt(et.name);
        const Vt = "unloaded" === (0, Ot.D)();
        if (Vt && (0, Ht.o)(), !await (0, Xt.e)(et)) return void console.warn(`${lt} the join's early wasm load failed: the boot loads the client itself`);
        if (!Vt) return;
        const Dt = (0, qt.k)(et.name);
        void 0 !== Dt ? (0, mt.logClientMeasurement)("wasm_join_compile", {
          ms: Math.round(Dt.ms)
        }, {
          path: Dt.path,
          build: et.name
        }) : console.warn(`${lt} the join's wasm load left no record of how it compiled ${et.name}`)
      })().catch((tt => {
        console.warn(`${lt} the join's early wasm load did not start: the boot loads the client itself`, tt)
      })), yt
    }

    function bt(tt) {
      null !== Nt && (0, mt.logClientMeasurement)("wasm_compile_ahead", {
        hit: Nt === tt ? 1 : 0
      }, {
        guessed: Nt,
        loaded: tt
      })
    }

    function Jt() {
      let tt = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
      if (null === wt) {
        var et;
        const Vt = null !== (et = tt.joinStarted) && void 0 !== et ? et : () => !1;
        wt = Promise.all([ut(tt), Ct(Vt)]).then((() => {}))
      }
      return wt
    }

    function Ct(tt) {
      return ft ??= (async () => {
        if ("undefined" === typeof WebAssembly) return;
        const et = await (0, Ht.k)();
        null === et || tt() || "unloaded" !== (0, Ot.D)() || (Nt = et.name, await (0, qt.d)([et, Dt.d], "low"))
      })().catch((tt => {
        console.warn(`${lt} the compile ahead of the join did not start: the join loads the client itself`, tt)
      })), ft
    }

    function ut() {
      let {
        joinStarted: tt = () => !1,
        language: et = ""
      } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
      return Et ??= async function(tt, et) {
        if (!await async function(tt) {
            if (tt()) return !1;
            let et;
            try {
              var Ot;
              const tt = await fetch(`${Vt.p}static/js/igzsf.wasmJoinFiles.json`, {
                priority: "low",
                cache: "no-cache"
              });
              if (!tt.ok) throw new Error(`HTTP ${tt.status}`);
              if (/\bno-store\b/.test(null !== (Ot = tt.headers.get("Cache-Control")) && void 0 !== Ot ? Ot : "")) return !1;
              const qt = await tt.json();
              if (!Array.isArray(qt)) throw new Error("not a list");
              et = qt
            } catch (Dt) {
              return console.warn(`${lt} the join's chunk list did not load: the join downloads its chunks itself`, Dt), !tt()
            }
            if (tt()) return !1;
            const qt = document.createElement("link").relList.supports("prefetch");
            for (const mt of et) {
              const tt = `${Vt.p}${mt}`;
              qt ? Kt(tt) : (0, jt.c)(tt).catch((et => {
                console.warn(`${lt} prefetching ${tt} failed`, et)
              }))
            }
            return !0
          }(tt)) return;
        const Ot = [(0, jt.c)((0, Qt.d)())];
        (0, Qt.c)(et) && Ot.push((0, jt.c)((0, Qt.g)()));
        await Promise.all(Ot)
      }(tt, et).catch((tt => {
        console.warn(`${lt} the prefetch failed: the join downloads the client itself`, tt)
      })), Et
    }

    function Kt(tt) {
      const et = document.createElement("link");
      et.rel = "prefetch", et.href = tt, tt.endsWith(".js") && (et.crossOrigin = "anonymous"), document.head.appendChild(et)
    }
  },
  39271: (tt, et, Vt) => {
    Vt.d(et, {
      c: () => qt,
      f: () => Dt,
      j: () => dt,
      l: () => Xt,
      p: () => jt,
      q: () => mt
    });
    var Ot = Vt(229);
    const qt = 3e3,
      Dt = 15e3;

    function mt(tt) {
      const et = tt.endsWith(Ot.l);
      return {
        text: (et ? tt.slice(0, -Ot.l.length) : tt) || null,
        dropsCache: et
      }
    }
    const dt = "Either your internet isn't working or this is a bug.";

    function jt(tt, et) {
      const Vt = Xt(tt);
      return null !== Vt.name && "" === Ot.b[Vt.name].text && null !== et ? et : Vt.reason
    }
    const Ht = "You were removed from the game.";

    function Xt(tt) {
      var et;
      let Vt = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
      const qt = null !== (et = Object.keys(Ot.b).find((et => Ot.b[et].code === tt))) && void 0 !== et ? et : null;
      if (null === qt) return {
        code: tt,
        name: qt,
        reason: null !== Vt && void 0 !== Vt ? Vt : `${dt}\nCode: ${tt}`,
        canReconnect: !1,
        automaticallyReconnect: !1,
        requiresRefresh: !1
      };
      const {
        text: Dt,
        canReconnect: mt = !1
      } = Ot.b[qt], jt = tt === Ot.b.outdatedVersion.code || tt === Ot.b.loadRecaptchaError.code;
      return {
        code: tt,
        name: qt,
        reason: "" !== Dt ? Dt : null !== Vt && void 0 !== Vt ? Vt : tt === Ot.b.gameOrPluginKick.code ? Ht : `Code: ${tt}`,
        canReconnect: mt,
        automaticallyReconnect: tt === Ot.b.customGameUpdated.code || tt === Ot.b.duplicateLobbyNameError.code,
        requiresRefresh: jt
      }
    }
  }
};
Object.freeze(modules);
for (const tt in modules) Object.freeze(modules[tt]);