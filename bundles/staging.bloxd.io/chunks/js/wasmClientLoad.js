export const id = 59;
export const ids = [59];
export const modules = {
  36821: (BB, IB, ZB) => {
    async function TB(BB) {
      const IB = await fetch(BB, {
        priority: "low"
      });
      if (!IB.ok) throw new Error(`Fetching ${BB} failed: HTTP ${IB.status}`);
      const ZB = IB.body.getReader();
      for (; !(await ZB.read()).done;);
    }
    ZB.d(IB, {
      e: () => TB
    })
  },
  39126: (BB, IB, ZB) => {
    ZB.d(IB, {
      b: () => kB
    });
    var TB = ZB(9011),
      JB = ZB(36516),
      oB = ZB(39129);
    const GB = {
        seat: "seat_timeout",
        socket_unopened: "socket_timeout_unopened",
        socket: "socket_timeout"
      },
      vB = {
        seat: "seat_lost",
        socket_unopened: "socket_unopened",
        socket: "socket_closed"
      };

    function kB(BB, IB) {
      if (BB instanceof JB.f) return {
        at: GB[IB],
        code: 0
      };
      const ZB = (0, TB.h)(BB),
        kB = "number" === typeof ZB ? ZB : 0;
      return null !== (0, oB.f)(kB).name ? {
        at: "refused",
        code: kB
      } : {
        at: vB[IB],
        code: kB
      }
    }
  },
  9011: (BB, IB, ZB) => {
    ZB.d(IB, {
      e: () => oB,
      h: () => GB,
      i: () => vB,
      k: () => cB,
      l: () => kB
    });
    var TB = ZB(201),
      JB = ZB(4802);

    function oB(BB) {
      return GB(BB) === TB.c.gameOrPluginOnPlayerAuthRejected.code
    }

    function GB(BB) {
      return "object" === typeof BB && null !== BB ? BB.code : void 0
    }

    function vB(BB) {
      var IB;
      return null !== (IB = Object.keys(JB.c).find((IB => JB.c[IB] === BB))) && void 0 !== IB ? IB : null
    }

    function kB(BB) {
      return "notWhitelisted" === BB ? "customLobby:cantJoinNotWhitelistedTitle" : "customLobby:cantJoinWorld"
    }
    const cB = {
      private: "customLobby:cantJoinPrivate",
      notWhitelisted: "customLobby:cantJoinNotWhitelisted",
      banned: "customLobby:cantJoinBanned",
      adminLocked: "customLobby:cantJoinAdminLocked"
    }
  },
  41074: (BB, IB, ZB) => {
    ZB.r(IB), ZB.d(IB, {
      prefetchWasmClient: () => QB,
      startJoinLoad: () => UB,
      startLoadAheadOfJoin: () => dB
    });
    var TB = ZB(3036),
      JB = ZB(36330),
      oB = ZB(40884),
      GB = ZB(1125),
      vB = ZB(40759),
      kB = (ZB(40804), ZB(36821)),
      cB = ZB(40751),
      nB = ZB(41008),
      hB = ZB(40876);
    const zB = "[bloxd-wasm-client]";
    let FB = null,
      NB = null,
      gB = null,
      qB = null,
      yB = null;

    function UB() {
      return qB ??= (async () => {
        if ("undefined" === typeof WebAssembly) return;
        const BB = await (0, cB.T)();
        if (null === BB) return;
        if ((0, vB.o)(BB)) return (0, cB.X)("none"), void WB("none");
        (0, cB.X)(BB.backend);
        const IB = await BB.load();
        WB(IB.name);
        const ZB = "unloaded" === (0, TB.u)();
        if (ZB && (0, cB.m)(), !await (0, nB.b)(IB)) return void console.warn(`${zB} the join's early wasm load failed: the boot loads the client itself`);
        if (!ZB) return;
        const oB = (0, JB.e)(IB.name);
        void 0 !== oB ? (0, GB.logClientMeasurement)("wasm_join_compile", {
          ms: Math.round(oB.ms)
        }, {
          path: oB.path,
          build: IB.name
        }) : console.warn(`${zB} the join's wasm load left no record of how it compiled ${IB.name}`)
      })().catch((BB => {
        console.warn(`${zB} the join's early wasm load did not start: the boot loads the client itself`, BB)
      })), qB
    }

    function WB(BB) {
      null !== yB && (0, GB.logClientMeasurement)("wasm_compile_ahead", {
        hit: yB === BB ? 1 : 0
      }, {
        guessed: yB,
        loaded: BB
      })
    }

    function dB() {
      let BB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
      if (null === gB) {
        var IB;
        const ZB = null !== (IB = BB.joinStarted) && void 0 !== IB ? IB : () => !1;
        gB = Promise.all([QB(BB), CB(ZB)]).then((() => {}))
      }
      return gB
    }

    function CB(BB) {
      return NB ??= (async () => {
        if ("undefined" === typeof WebAssembly) return;
        const IB = await (0, cB.g)();
        null === IB || BB() || "unloaded" !== (0, TB.u)() || (yB = IB.name, await (0, JB.b)([IB, oB.h], "low"))
      })().catch((BB => {
        console.warn(`${zB} the compile ahead of the join did not start: the join loads the client itself`, BB)
      })), NB
    }

    function QB() {
      let {
        joinStarted: BB = () => !1,
        language: IB = ""
      } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
      return FB ??= async function(BB, IB) {
        if (!await async function(BB) {
            if (BB()) return !1;
            let IB;
            try {
              var TB;
              const BB = await fetch(`${ZB.p}static/js/c6gaap.wasmJoinFiles.json`, {
                priority: "low",
                cache: "no-cache"
              });
              if (!BB.ok) throw new Error(`HTTP ${BB.status}`);
              if (/\bno-store\b/.test(null !== (TB = BB.headers.get("Cache-Control")) && void 0 !== TB ? TB : "")) return !1;
              const JB = await BB.json();
              if (!Array.isArray(JB)) throw new Error("not a list");
              IB = JB
            } catch (oB) {
              return console.warn(`${zB} the join's chunk list did not load: the join downloads its chunks itself`, oB), !BB()
            }
            if (BB()) return !1;
            const JB = document.createElement("link").relList.supports("prefetch");
            for (const GB of IB) {
              const BB = `${ZB.p}${GB}`;
              JB ? sB(BB) : (0, kB.e)(BB).catch((IB => {
                console.warn(`${zB} prefetching ${BB} failed`, IB)
              }))
            }
            return !0
          }(BB)) return;
        const TB = [(0, kB.e)((0, hB.e)())];
        (0, hB.c)(IB) && TB.push((0, kB.e)((0, hB.h)()));
        await Promise.all(TB)
      }(BB, IB).catch((BB => {
        console.warn(`${zB} the prefetch failed: the join downloads the client itself`, BB)
      })), FB
    }

    function sB(BB) {
      const IB = document.createElement("link");
      IB.rel = "prefetch", IB.href = BB, BB.endsWith(".js") && (IB.crossOrigin = "anonymous"), document.head.appendChild(IB)
    }
  },
  39129: (BB, IB, ZB) => {
    ZB.d(IB, {
      b: () => JB,
      c: () => oB,
      e: () => vB,
      f: () => nB,
      j: () => kB,
      l: () => GB
    });
    var TB = ZB(201);
    const JB = 3e3,
      oB = 15e3;

    function GB(BB) {
      const IB = BB.endsWith(TB.k);
      return {
        text: (IB ? BB.slice(0, -TB.k.length) : BB) || null,
        dropsCache: IB
      }
    }
    const vB = "Either your internet isn't working or this is a bug.";

    function kB(BB, IB) {
      const ZB = nB(BB);
      return null !== ZB.name && "" === TB.c[ZB.name].text && null !== IB ? IB : ZB.reason
    }
    const cB = "You were removed from the game.";

    function nB(BB) {
      var IB;
      let ZB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
      const JB = null !== (IB = Object.keys(TB.c).find((IB => TB.c[IB].code === BB))) && void 0 !== IB ? IB : null;
      if (null === JB) return {
        code: BB,
        name: JB,
        reason: null !== ZB && void 0 !== ZB ? ZB : `${vB}\nCode: ${BB}`,
        canReconnect: !1,
        automaticallyReconnect: !1,
        requiresRefresh: !1
      };
      const {
        text: oB,
        canReconnect: GB = !1
      } = TB.c[JB], kB = BB === TB.c.outdatedVersion.code || BB === TB.c.loadRecaptchaError.code;
      return {
        code: BB,
        name: JB,
        reason: "" !== oB ? oB : null !== ZB && void 0 !== ZB ? ZB : BB === TB.c.gameOrPluginKick.code ? cB : `Code: ${BB}`,
        canReconnect: GB,
        automaticallyReconnect: BB === TB.c.customGameUpdated.code || BB === TB.c.duplicateLobbyNameError.code,
        requiresRefresh: kB
      }
    }
  }
};
Object.freeze(modules);
for (const BB in modules) Object.freeze(modules[BB]);