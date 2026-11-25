export const id = 59;
export const ids = [59];
export const modules = {
  37137: (GG, bG, ZG) => {
    async function wG(GG) {
      const bG = await fetch(GG, {
        priority: "low"
      });
      if (!bG.ok) throw new Error(`Fetching ${GG} failed: HTTP ${bG.status}`);
      const ZG = bG.body.getReader();
      for (; !(await ZG.read()).done;);
    }
    ZG.d(bG, {
      b: () => wG
    })
  },
  39470: (GG, bG, ZG) => {
    ZG.d(bG, {
      c: () => UG
    });
    var wG = ZG(8957),
      SG = ZG(36826),
      LG = ZG(39478);
    const yG = {
        seat: "seat_timeout",
        socket_unopened: "socket_timeout_unopened",
        socket: "socket_timeout"
      },
      kG = {
        seat: "seat_lost",
        socket_unopened: "socket_unopened",
        socket: "socket_closed"
      };

    function UG(GG, bG) {
      if (GG instanceof SG.g) return {
        at: yG[bG],
        code: 0
      };
      const ZG = (0, wG.h)(GG),
        UG = "number" === typeof ZG ? ZG : 0;
      return null !== (0, LG.k)(UG).name ? {
        at: "refused",
        code: UG
      } : {
        at: kG[bG],
        code: UG
      }
    }
  },
  8957: (GG, bG, ZG) => {
    ZG.d(bG, {
      e: () => LG,
      h: () => yG,
      j: () => kG,
      n: () => YG,
      q: () => UG
    });
    var wG = ZG(188),
      SG = ZG(4655);

    function LG(GG) {
      return yG(GG) === wG.b.gameOrPluginOnPlayerAuthRejected.code
    }

    function yG(GG) {
      return "object" === typeof GG && null !== GG ? GG.code : void 0
    }

    function kG(GG) {
      var bG;
      return null !== (bG = Object.keys(SG.b).find((bG => SG.b[bG] === GG))) && void 0 !== bG ? bG : null
    }

    function UG(GG) {
      return "notWhitelisted" === GG ? "customLobby:cantJoinNotWhitelistedTitle" : "customLobby:cantJoinWorld"
    }
    const YG = {
      private: "customLobby:cantJoinPrivate",
      notWhitelisted: "customLobby:cantJoinNotWhitelisted",
      banned: "customLobby:cantJoinBanned",
      adminLocked: "customLobby:cantJoinAdminLocked"
    }
  },
  41444: (GG, bG, ZG) => {
    ZG.r(bG), ZG.d(bG, {
      prefetchWasmClient: () => XG,
      startJoinLoad: () => rG,
      startLoadAheadOfJoin: () => EG
    });
    var wG = ZG(2868),
      SG = ZG(36643),
      LG = ZG(41248),
      yG = ZG(1032),
      kG = ZG(41100),
      UG = (ZG(41150), ZG(37137)),
      YG = ZG(41092),
      VG = ZG(41374),
      pG = ZG(41235);
    const fG = "[bloxd-wasm-client]";
    let QG = null,
      KG = null,
      hG = null,
      dG = null,
      JG = null;

    function rG() {
      return dG ??= (async () => {
        if ("undefined" === typeof WebAssembly) return;
        const GG = await (0, YG.N)();
        if (null === GG) return;
        if ((0, kG.q)(GG)) return (0, YG.P)("none"), void zG("none");
        (0, YG.P)(GG.backend);
        const bG = await GG.load();
        zG(bG.name);
        const ZG = "unloaded" === (0, wG.C)();
        if (ZG && (0, YG.l)(), !await (0, VG.d)(bG)) return void console.warn(`${fG} the join's early wasm load failed: the boot loads the client itself`);
        if (!ZG) return;
        const LG = (0, SG.j)(bG.name);
        void 0 !== LG ? (0, yG.logClientMeasurement)("wasm_join_compile", {
          ms: Math.round(LG.ms)
        }, {
          path: LG.path,
          build: bG.name
        }) : console.warn(`${fG} the join's wasm load left no record of how it compiled ${bG.name}`)
      })().catch((GG => {
        console.warn(`${fG} the join's early wasm load did not start: the boot loads the client itself`, GG)
      })), dG
    }

    function zG(GG) {
      null !== JG && (0, yG.logClientMeasurement)("wasm_compile_ahead", {
        hit: JG === GG ? 1 : 0
      }, {
        guessed: JG,
        loaded: GG
      })
    }

    function EG() {
      let GG = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
      if (null === hG) {
        var bG;
        const ZG = null !== (bG = GG.joinStarted) && void 0 !== bG ? bG : () => !1;
        hG = Promise.all([XG(GG), oG(ZG)]).then((() => {}))
      }
      return hG
    }

    function oG(GG) {
      return KG ??= (async () => {
        if ("undefined" === typeof WebAssembly) return;
        const bG = await (0, YG.i)();
        null === bG || GG() || "unloaded" !== (0, wG.C)() || (JG = bG.name, await (0, SG.d)([bG, LG.c], "low"))
      })().catch((GG => {
        console.warn(`${fG} the compile ahead of the join did not start: the join loads the client itself`, GG)
      })), KG
    }

    function XG() {
      let {
        joinStarted: GG = () => !1,
        language: bG = ""
      } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
      return QG ??= async function(GG, bG) {
        if (!await async function(GG) {
            if (GG()) return !1;
            let bG;
            try {
              var wG;
              const GG = await fetch(`${ZG.p}static/js/wp3j0a.wasmJoinFiles.json`, {
                priority: "low",
                cache: "no-cache"
              });
              if (!GG.ok) throw new Error(`HTTP ${GG.status}`);
              if (/\bno-store\b/.test(null !== (wG = GG.headers.get("Cache-Control")) && void 0 !== wG ? wG : "")) return !1;
              const SG = await GG.json();
              if (!Array.isArray(SG)) throw new Error("not a list");
              bG = SG
            } catch (LG) {
              return console.warn(`${fG} the join's chunk list did not load: the join downloads its chunks itself`, LG), !GG()
            }
            if (GG()) return !1;
            const SG = document.createElement("link").relList.supports("prefetch");
            for (const yG of bG) {
              const GG = `${ZG.p}${yG}`;
              SG ? uG(GG) : (0, UG.b)(GG).catch((bG => {
                console.warn(`${fG} prefetching ${GG} failed`, bG)
              }))
            }
            return !0
          }(GG)) return;
        const wG = [(0, UG.b)((0, pG.g)())];
        (0, pG.e)(bG) && wG.push((0, UG.b)((0, pG.j)()));
        await Promise.all(wG)
      }(GG, bG).catch((GG => {
        console.warn(`${fG} the prefetch failed: the join downloads the client itself`, GG)
      })), QG
    }

    function uG(GG) {
      const bG = document.createElement("link");
      bG.rel = "prefetch", bG.href = GG, GG.endsWith(".js") && (bG.crossOrigin = "anonymous"), document.head.appendChild(bG)
    }
  },
  39478: (GG, bG, ZG) => {
    ZG.d(bG, {
      c: () => SG,
      g: () => LG,
      i: () => kG,
      k: () => VG,
      o: () => UG,
      s: () => yG
    });
    var wG = ZG(188);
    const SG = 3e3,
      LG = 15e3;

    function yG(GG) {
      const bG = GG.endsWith(wG.j);
      return {
        text: (bG ? GG.slice(0, -wG.j.length) : GG) || null,
        dropsCache: bG
      }
    }
    const kG = "Either your internet isn't working or this is a bug.";

    function UG(GG, bG) {
      const ZG = VG(GG);
      return null !== ZG.name && "" === wG.b[ZG.name].text && null !== bG ? bG : ZG.reason
    }
    const YG = "You were removed from the game.";

    function VG(GG) {
      var bG;
      let ZG = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
      const SG = null !== (bG = Object.keys(wG.b).find((bG => wG.b[bG].code === GG))) && void 0 !== bG ? bG : null;
      if (null === SG) return {
        code: GG,
        name: SG,
        reason: null !== ZG && void 0 !== ZG ? ZG : `${kG}\nCode: ${GG}`,
        canReconnect: !1,
        automaticallyReconnect: !1,
        requiresRefresh: !1
      };
      const {
        text: LG,
        canReconnect: yG = !1
      } = wG.b[SG], UG = GG === wG.b.outdatedVersion.code || GG === wG.b.loadRecaptchaError.code;
      return {
        code: GG,
        name: SG,
        reason: "" !== LG ? LG : null !== ZG && void 0 !== ZG ? ZG : GG === wG.b.gameOrPluginKick.code ? YG : `Code: ${GG}`,
        canReconnect: yG,
        automaticallyReconnect: GG === wG.b.customGameUpdated.code || GG === wG.b.duplicateLobbyNameError.code,
        requiresRefresh: UG
      }
    }
  }
};
Object.freeze(modules);
for (const GG in modules) Object.freeze(modules[GG]);