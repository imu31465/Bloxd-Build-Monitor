export const id = 59;
export const ids = [59];
export const modules = {
  36871: (BB, jB, zB) => {
    async function QB(BB) {
      const jB = await fetch(BB, {
        priority: "low"
      });
      if (!jB.ok) throw new Error(`Fetching ${BB} failed: HTTP ${jB.status}`);
      const zB = jB.body.getReader();
      for (; !(await zB.read()).done;);
    }
    zB.d(jB, {
      e: () => QB
    })
  },
  39166: (BB, jB, zB) => {
    zB.d(jB, {
      b: () => uB
    });
    var QB = zB(8923),
      nB = zB(36568),
      dB = zB(39169);
    const IB = {
        seat: "seat_timeout",
        socket_unopened: "socket_timeout_unopened",
        socket: "socket_timeout"
      },
      NB = {
        seat: "seat_lost",
        socket_unopened: "socket_unopened",
        socket: "socket_closed"
      };

    function uB(BB, jB) {
      if (BB instanceof nB.h) return {
        at: IB[jB],
        code: 0
      };
      const zB = (0, QB.g)(BB),
        uB = "number" === typeof zB ? zB : 0;
      return null !== (0, dB.m)(uB).name ? {
        at: "refused",
        code: uB
      } : {
        at: NB[jB],
        code: uB
      }
    }
  },
  8923: (BB, jB, zB) => {
    zB.d(jB, {
      c: () => dB,
      g: () => IB,
      h: () => NB,
      l: () => UB,
      p: () => uB
    });
    var QB = zB(214),
      nB = zB(4729);

    function dB(BB) {
      return IB(BB) === QB.c.gameOrPluginOnPlayerAuthRejected.code
    }

    function IB(BB) {
      return "object" === typeof BB && null !== BB ? BB.code : void 0
    }

    function NB(BB) {
      var jB;
      return null !== (jB = Object.keys(nB.b).find((jB => nB.b[jB] === BB))) && void 0 !== jB ? jB : null
    }

    function uB(BB) {
      return "notWhitelisted" === BB ? "customLobby:cantJoinNotWhitelistedTitle" : "customLobby:cantJoinWorld"
    }
    const UB = {
      private: "customLobby:cantJoinPrivate",
      notWhitelisted: "customLobby:cantJoinNotWhitelisted",
      banned: "customLobby:cantJoinBanned",
      adminLocked: "customLobby:cantJoinAdminLocked"
    }
  },
  41142: (BB, jB, zB) => {
    zB.r(jB), zB.d(jB, {
      prefetchWasmClient: () => SB,
      startJoinLoad: () => GB,
      startLoadAheadOfJoin: () => gB
    });
    var QB = zB(2967),
      nB = zB(36387),
      dB = zB(40948),
      IB = zB(1121),
      NB = zB(40805),
      uB = (zB(40856), zB(36871)),
      UB = zB(40796),
      aB = zB(41054),
      pB = zB(40929);
    const rB = "[bloxd-wasm-client]";
    let sB = null,
      JB = null,
      mB = null,
      yB = null,
      kB = null;

    function GB() {
      return yB ??= (async () => {
        if ("undefined" === typeof WebAssembly) return;
        const BB = await (0, UB.M)();
        if (null === BB) return;
        if ((0, NB.r)(BB)) return (0, UB.N)("none"), void LB("none");
        (0, UB.N)(BB.backend);
        const jB = await BB.load();
        LB(jB.name);
        const zB = "unloaded" === (0, QB.z)();
        if (zB && (0, UB.p)(), !await (0, aB.b)(jB)) return void console.warn(`${rB} the join's early wasm load failed: the boot loads the client itself`);
        if (!zB) return;
        const dB = (0, nB.g)(jB.name);
        void 0 !== dB ? (0, IB.logClientMeasurement)("wasm_join_compile", {
          ms: Math.round(dB.ms)
        }, {
          path: dB.path,
          build: jB.name
        }) : console.warn(`${rB} the join's wasm load left no record of how it compiled ${jB.name}`)
      })().catch((BB => {
        console.warn(`${rB} the join's early wasm load did not start: the boot loads the client itself`, BB)
      })), yB
    }

    function LB(BB) {
      null !== kB && (0, IB.logClientMeasurement)("wasm_compile_ahead", {
        hit: kB === BB ? 1 : 0
      }, {
        guessed: kB,
        loaded: BB
      })
    }

    function gB() {
      let BB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
      if (null === mB) {
        var jB;
        const zB = null !== (jB = BB.joinStarted) && void 0 !== jB ? jB : () => !1;
        mB = Promise.all([SB(BB), tB(zB)]).then((() => {}))
      }
      return mB
    }

    function tB(BB) {
      return JB ??= (async () => {
        if ("undefined" === typeof WebAssembly) return;
        const jB = await (0, UB.k)();
        null === jB || BB() || "unloaded" !== (0, QB.z)() || (kB = jB.name, await (0, nB.e)([jB, dB.c], "low"))
      })().catch((BB => {
        console.warn(`${rB} the compile ahead of the join did not start: the join loads the client itself`, BB)
      })), JB
    }

    function SB() {
      let {
        joinStarted: BB = () => !1,
        language: jB = ""
      } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
      return sB ??= async function(BB, jB) {
        if (!await async function(BB) {
            if (BB()) return !1;
            let jB;
            try {
              var QB;
              const BB = await fetch(`${zB.p}static/js/7zvlu.wasmJoinFiles.json`, {
                priority: "low",
                cache: "no-cache"
              });
              if (!BB.ok) throw new Error(`HTTP ${BB.status}`);
              if (/\bno-store\b/.test(null !== (QB = BB.headers.get("Cache-Control")) && void 0 !== QB ? QB : "")) return !1;
              const nB = await BB.json();
              if (!Array.isArray(nB)) throw new Error("not a list");
              jB = nB
            } catch (dB) {
              return console.warn(`${rB} the join's chunk list did not load: the join downloads its chunks itself`, dB), !BB()
            }
            if (BB()) return !1;
            const nB = document.createElement("link").relList.supports("prefetch");
            for (const IB of jB) {
              const BB = `${zB.p}${IB}`;
              nB ? MB(BB) : (0, uB.e)(BB).catch((jB => {
                console.warn(`${rB} prefetching ${BB} failed`, jB)
              }))
            }
            return !0
          }(BB)) return;
        const QB = [(0, uB.e)((0, pB.g)())];
        (0, pB.c)(jB) && QB.push((0, uB.e)((0, pB.k)()));
        await Promise.all(QB)
      }(BB, jB).catch((BB => {
        console.warn(`${rB} the prefetch failed: the join downloads the client itself`, BB)
      })), sB
    }

    function MB(BB) {
      const jB = document.createElement("link");
      jB.rel = "prefetch", jB.href = BB, BB.endsWith(".js") && (jB.crossOrigin = "anonymous"), document.head.appendChild(jB)
    }
  },
  39169: (BB, jB, zB) => {
    zB.d(jB, {
      e: () => nB,
      h: () => dB,
      l: () => NB,
      m: () => aB,
      p: () => uB,
      t: () => IB
    });
    var QB = zB(214);
    const nB = 3e3,
      dB = 15e3;

    function IB(BB) {
      const jB = BB.endsWith(QB.g);
      return {
        text: (jB ? BB.slice(0, -QB.g.length) : BB) || null,
        dropsCache: jB
      }
    }
    const NB = "Either your internet isn't working or this is a bug.";

    function uB(BB, jB) {
      const zB = aB(BB);
      return null !== zB.name && "" === QB.c[zB.name].text && null !== jB ? jB : zB.reason
    }
    const UB = "You were removed from the game.";

    function aB(BB) {
      var jB;
      let zB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
      const nB = null !== (jB = Object.keys(QB.c).find((jB => QB.c[jB].code === BB))) && void 0 !== jB ? jB : null;
      if (null === nB) return {
        code: BB,
        name: nB,
        reason: null !== zB && void 0 !== zB ? zB : `${NB}\nCode: ${BB}`,
        canReconnect: !1,
        automaticallyReconnect: !1,
        requiresRefresh: !1
      };
      const {
        text: dB,
        canReconnect: IB = !1
      } = QB.c[nB], uB = BB === QB.c.outdatedVersion.code || BB === QB.c.loadRecaptchaError.code;
      return {
        code: BB,
        name: nB,
        reason: "" !== dB ? dB : null !== zB && void 0 !== zB ? zB : BB === QB.c.gameOrPluginKick.code ? UB : `Code: ${BB}`,
        canReconnect: IB,
        automaticallyReconnect: BB === QB.c.customGameUpdated.code || BB === QB.c.duplicateLobbyNameError.code,
        requiresRefresh: uB
      }
    }
  }
};
Object.freeze(modules);
for (const BB in modules) Object.freeze(modules[BB]);