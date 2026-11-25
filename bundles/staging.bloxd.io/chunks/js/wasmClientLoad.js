export const id = 59;
export const ids = [59];
export const modules = {
  37183: (uu, Eu, ju) => {
    async function su(uu) {
      const Eu = await fetch(uu, {
        priority: "low"
      });
      if (!Eu.ok) throw new Error(`Fetching ${uu} failed: HTTP ${Eu.status}`);
      const ju = Eu.body.getReader();
      for (; !(await ju.read()).done;);
    }
    ju.d(Eu, {
      e: () => su
    })
  },
  39371: (uu, Eu, ju) => {
    ju.d(Eu, {
      d: () => qu
    });
    var su = ju(9128),
      Uu = ju(36870),
      Zu = ju(39375);
    const Xu = {
        seat: "seat_timeout",
        socket_unopened: "socket_timeout_unopened",
        socket: "socket_timeout"
      },
      lu = {
        seat: "seat_lost",
        socket_unopened: "socket_unopened",
        socket: "socket_closed"
      };

    function qu(uu, Eu) {
      if (uu instanceof Uu.g) return {
        at: Xu[Eu],
        code: 0
      };
      const ju = (0, su.f)(uu),
        qu = "number" === typeof ju ? ju : 0;
      return null !== (0, Zu.k)(qu).name ? {
        at: "refused",
        code: qu
      } : {
        at: lu[Eu],
        code: qu
      }
    }
  },
  9128: (uu, Eu, ju) => {
    ju.d(Eu, {
      d: () => Zu,
      f: () => Xu,
      j: () => lu,
      n: () => fu,
      q: () => qu
    });
    var su = ju(202),
      Uu = ju(4809);

    function Zu(uu) {
      return Xu(uu) === su.b.gameOrPluginOnPlayerAuthRejected.code
    }

    function Xu(uu) {
      return "object" === typeof uu && null !== uu ? uu.code : void 0
    }

    function lu(uu) {
      var Eu;
      return null !== (Eu = Object.keys(Uu.b).find((Eu => Uu.b[Eu] === uu))) && void 0 !== Eu ? Eu : null
    }

    function qu(uu) {
      return "notWhitelisted" === uu ? "customLobby:cantJoinNotWhitelistedTitle" : "customLobby:cantJoinWorld"
    }
    const fu = {
      private: "customLobby:cantJoinPrivate",
      notWhitelisted: "customLobby:cantJoinNotWhitelisted",
      banned: "customLobby:cantJoinBanned",
      adminLocked: "customLobby:cantJoinAdminLocked"
    }
  },
  41269: (uu, Eu, ju) => {
    ju.r(Eu), ju.d(Eu, {
      prefetchWasmClient: () => pu,
      startJoinLoad: () => gu,
      startLoadAheadOfJoin: () => eu
    });
    var su = ju(3017),
      Uu = ju(36713),
      Zu = ju(41093),
      Xu = ju(1128),
      lu = ju(40963),
      qu = (ju(41017), ju(37183)),
      fu = ju(40960),
      Cu = ju(41199),
      bu = ju(41083);
    const cu = "[bloxd-wasm-client]";
    let Nu = null,
      Ou = null,
      Yu = null,
      hu = null,
      Du = null;

    function gu() {
      return hu ??= (async () => {
        if ("undefined" === typeof WebAssembly) return;
        const uu = await (0, fu.O)();
        if (null === uu) return;
        if ((0, lu.t)(uu)) return (0, fu.S)("none"), void Mu("none");
        (0, fu.S)(uu.backend);
        const Eu = await uu.load();
        Mu(Eu.name);
        const ju = "unloaded" === (0, su.C)();
        if (ju && (0, fu.p)(), !await (0, Cu.b)(Eu)) return void console.warn(`${cu} the join's early wasm load failed: the boot loads the client itself`);
        if (!ju) return;
        const Zu = (0, Uu.k)(Eu.name);
        void 0 !== Zu ? (0, Xu.logClientMeasurement)("wasm_join_compile", {
          ms: Math.round(Zu.ms)
        }, {
          path: Zu.path,
          build: Eu.name
        }) : console.warn(`${cu} the join's wasm load left no record of how it compiled ${Eu.name}`)
      })().catch((uu => {
        console.warn(`${cu} the join's early wasm load did not start: the boot loads the client itself`, uu)
      })), hu
    }

    function Mu(uu) {
      null !== Du && (0, Xu.logClientMeasurement)("wasm_compile_ahead", {
        hit: Du === uu ? 1 : 0
      }, {
        guessed: Du,
        loaded: uu
      })
    }

    function eu() {
      let uu = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
      if (null === Yu) {
        var Eu;
        const ju = null !== (Eu = uu.joinStarted) && void 0 !== Eu ? Eu : () => !1;
        Yu = Promise.all([pu(uu), Gu(ju)]).then((() => {}))
      }
      return Yu
    }

    function Gu(uu) {
      return Ou ??= (async () => {
        if ("undefined" === typeof WebAssembly) return;
        const Eu = await (0, fu.l)();
        null === Eu || uu() || "unloaded" !== (0, su.C)() || (Du = Eu.name, await (0, Uu.e)([Eu, Zu.g], "low"))
      })().catch((uu => {
        console.warn(`${cu} the compile ahead of the join did not start: the join loads the client itself`, uu)
      })), Ou
    }

    function pu() {
      let {
        joinStarted: uu = () => !1,
        language: Eu = ""
      } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
      return Nu ??= async function(uu, Eu) {
        if (!await async function(uu) {
            if (uu()) return !1;
            let Eu;
            try {
              var su;
              const uu = await fetch(`${ju.p}static/js/dz8ef.wasmJoinFiles.json`, {
                priority: "low",
                cache: "no-cache"
              });
              if (!uu.ok) throw new Error(`HTTP ${uu.status}`);
              if (/\bno-store\b/.test(null !== (su = uu.headers.get("Cache-Control")) && void 0 !== su ? su : "")) return !1;
              const Uu = await uu.json();
              if (!Array.isArray(Uu)) throw new Error("not a list");
              Eu = Uu
            } catch (Zu) {
              return console.warn(`${cu} the join's chunk list did not load: the join downloads its chunks itself`, Zu), !uu()
            }
            if (uu()) return !1;
            const Uu = document.createElement("link").relList.supports("prefetch");
            for (const Xu of Eu) {
              const uu = `${ju.p}${Xu}`;
              Uu ? wu(uu) : (0, qu.e)(uu).catch((Eu => {
                console.warn(`${cu} prefetching ${uu} failed`, Eu)
              }))
            }
            return !0
          }(uu)) return;
        const su = [(0, qu.e)((0, bu.f)())];
        (0, bu.b)(Eu) && su.push((0, qu.e)((0, bu.j)()));
        await Promise.all(su)
      }(uu, Eu).catch((uu => {
        console.warn(`${cu} the prefetch failed: the join downloads the client itself`, uu)
      })), Nu
    }

    function wu(uu) {
      const Eu = document.createElement("link");
      Eu.rel = "prefetch", Eu.href = uu, uu.endsWith(".js") && (Eu.crossOrigin = "anonymous"), document.head.appendChild(Eu)
    }
  },
  39375: (uu, Eu, ju) => {
    ju.d(Eu, {
      e: () => Uu,
      f: () => Zu,
      i: () => lu,
      k: () => Cu,
      m: () => qu,
      n: () => Xu
    });
    var su = ju(202);
    const Uu = 3e3,
      Zu = 15e3;

    function Xu(uu) {
      const Eu = uu.endsWith(su.l);
      return {
        text: (Eu ? uu.slice(0, -su.l.length) : uu) || null,
        dropsCache: Eu
      }
    }
    const lu = "Either your internet isn't working or this is a bug.";

    function qu(uu, Eu) {
      const ju = Cu(uu);
      return null !== ju.name && "" === su.b[ju.name].text && null !== Eu ? Eu : ju.reason
    }
    const fu = "You were removed from the game.";

    function Cu(uu) {
      var Eu;
      let ju = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
      const Uu = null !== (Eu = Object.keys(su.b).find((Eu => su.b[Eu].code === uu))) && void 0 !== Eu ? Eu : null;
      if (null === Uu) return {
        code: uu,
        name: Uu,
        reason: null !== ju && void 0 !== ju ? ju : `${lu}\nCode: ${uu}`,
        canReconnect: !1,
        automaticallyReconnect: !1,
        requiresRefresh: !1
      };
      const {
        text: Zu,
        canReconnect: Xu = !1
      } = su.b[Uu], qu = uu === su.b.outdatedVersion.code || uu === su.b.loadRecaptchaError.code;
      return {
        code: uu,
        name: Uu,
        reason: "" !== Zu ? Zu : null !== ju && void 0 !== ju ? ju : uu === su.b.gameOrPluginKick.code ? fu : `Code: ${uu}`,
        canReconnect: Xu,
        automaticallyReconnect: uu === su.b.customGameUpdated.code || uu === su.b.duplicateLobbyNameError.code,
        requiresRefresh: qu
      }
    }
  }
};
Object.freeze(modules);
for (const uu in modules) Object.freeze(modules[uu]);