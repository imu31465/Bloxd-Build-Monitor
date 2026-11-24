export const id = 59;
export const ids = [59];
export const modules = {
  36894: (TT, UT, mT) => {
    async function WT(TT) {
      const UT = await fetch(TT, {
        priority: "low"
      });
      if (!UT.ok) throw new Error(`Fetching ${TT} failed: HTTP ${UT.status}`);
      const mT = UT.body.getReader();
      for (; !(await mT.read()).done;);
    }
    mT.d(UT, {
      e: () => WT
    })
  },
  39207: (TT, UT, mT) => {
    mT.d(UT, {
      b: () => HT
    });
    var WT = mT(9025),
      zT = mT(36565),
      MT = mT(39216);
    const gT = {
        seat: "seat_timeout",
        socket_unopened: "socket_timeout_unopened",
        socket: "socket_timeout"
      },
      nT = {
        seat: "seat_lost",
        socket_unopened: "socket_unopened",
        socket: "socket_closed"
      };

    function HT(TT, UT) {
      if (TT instanceof zT.d) return {
        at: gT[UT],
        code: 0
      };
      const mT = (0, WT.e)(TT),
        HT = "number" === typeof mT ? mT : 0;
      return null !== (0, MT.o)(HT).name ? {
        at: "refused",
        code: HT
      } : {
        at: nT[UT],
        code: HT
      }
    }
  },
  9025: (TT, UT, mT) => {
    mT.d(UT, {
      b: () => MT,
      e: () => gT,
      i: () => nT,
      k: () => kT,
      o: () => HT
    });
    var WT = mT(208),
      zT = mT(4719);

    function MT(TT) {
      return gT(TT) === WT.e.gameOrPluginOnPlayerAuthRejected.code
    }

    function gT(TT) {
      return "object" === typeof TT && null !== TT ? TT.code : void 0
    }

    function nT(TT) {
      var UT;
      return null !== (UT = Object.keys(zT.c).find((UT => zT.c[UT] === TT))) && void 0 !== UT ? UT : null
    }

    function HT(TT) {
      return "notWhitelisted" === TT ? "customLobby:cantJoinNotWhitelistedTitle" : "customLobby:cantJoinWorld"
    }
    const kT = {
      private: "customLobby:cantJoinPrivate",
      notWhitelisted: "customLobby:cantJoinNotWhitelisted",
      banned: "customLobby:cantJoinBanned",
      adminLocked: "customLobby:cantJoinAdminLocked"
    }
  },
  41189: (TT, UT, mT) => {
    mT.r(UT), mT.d(UT, {
      prefetchWasmClient: () => OT,
      startJoinLoad: () => fT,
      startLoadAheadOfJoin: () => iT
    });
    var WT = mT(2992),
      zT = mT(36394),
      MT = mT(41009),
      gT = mT(1153),
      nT = mT(40860),
      HT = (mT(40912), mT(36894)),
      kT = mT(40855),
      jT = mT(41117),
      lT = mT(40991);
    const LT = "[bloxd-wasm-client]";
    let pT = null,
      BT = null,
      ZT = null,
      cT = null,
      vT = null;

    function fT() {
      return cT ??= (async () => {
        if ("undefined" === typeof WebAssembly) return;
        const TT = await (0, kT.R)();
        if (null === TT) return;
        if ((0, nT.n)(TT)) return (0, kT.U)("none"), void qT("none");
        (0, kT.U)(TT.backend);
        const UT = await TT.load();
        qT(UT.name);
        const mT = "unloaded" === (0, WT.A)();
        if (mT && (0, kT.o)(), !await (0, jT.d)(UT)) return void console.warn(`${LT} the join's early wasm load failed: the boot loads the client itself`);
        if (!mT) return;
        const MT = (0, zT.g)(UT.name);
        void 0 !== MT ? (0, gT.logClientMeasurement)("wasm_join_compile", {
          ms: Math.round(MT.ms)
        }, {
          path: MT.path,
          build: UT.name
        }) : console.warn(`${LT} the join's wasm load left no record of how it compiled ${UT.name}`)
      })().catch((TT => {
        console.warn(`${LT} the join's early wasm load did not start: the boot loads the client itself`, TT)
      })), cT
    }

    function qT(TT) {
      null !== vT && (0, gT.logClientMeasurement)("wasm_compile_ahead", {
        hit: vT === TT ? 1 : 0
      }, {
        guessed: vT,
        loaded: TT
      })
    }

    function iT() {
      let TT = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
      if (null === ZT) {
        var UT;
        const mT = null !== (UT = TT.joinStarted) && void 0 !== UT ? UT : () => !1;
        ZT = Promise.all([OT(TT), bT(mT)]).then((() => {}))
      }
      return ZT
    }

    function bT(TT) {
      return BT ??= (async () => {
        if ("undefined" === typeof WebAssembly) return;
        const UT = await (0, kT.i)();
        null === UT || TT() || "unloaded" !== (0, WT.A)() || (vT = UT.name, await (0, zT.d)([UT, MT.g], "low"))
      })().catch((TT => {
        console.warn(`${LT} the compile ahead of the join did not start: the join loads the client itself`, TT)
      })), BT
    }

    function OT() {
      let {
        joinStarted: TT = () => !1,
        language: UT = ""
      } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
      return pT ??= async function(TT, UT) {
        if (!await async function(TT) {
            if (TT()) return !1;
            let UT;
            try {
              var WT;
              const TT = await fetch(`${mT.p}static/js/yma3ej.wasmJoinFiles.json`, {
                priority: "low",
                cache: "no-cache"
              });
              if (!TT.ok) throw new Error(`HTTP ${TT.status}`);
              if (/\bno-store\b/.test(null !== (WT = TT.headers.get("Cache-Control")) && void 0 !== WT ? WT : "")) return !1;
              const zT = await TT.json();
              if (!Array.isArray(zT)) throw new Error("not a list");
              UT = zT
            } catch (MT) {
              return console.warn(`${LT} the join's chunk list did not load: the join downloads its chunks itself`, MT), !TT()
            }
            if (TT()) return !1;
            const zT = document.createElement("link").relList.supports("prefetch");
            for (const gT of UT) {
              const TT = `${mT.p}${gT}`;
              zT ? eT(TT) : (0, HT.e)(TT).catch((UT => {
                console.warn(`${LT} prefetching ${TT} failed`, UT)
              }))
            }
            return !0
          }(TT)) return;
        const WT = [(0, HT.e)((0, lT.h)())];
        (0, lT.e)(UT) && WT.push((0, HT.e)((0, lT.i)()));
        await Promise.all(WT)
      }(TT, UT).catch((TT => {
        console.warn(`${LT} the prefetch failed: the join downloads the client itself`, TT)
      })), pT
    }

    function eT(TT) {
      const UT = document.createElement("link");
      UT.rel = "prefetch", UT.href = TT, TT.endsWith(".js") && (UT.crossOrigin = "anonymous"), document.head.appendChild(UT)
    }
  },
  39216: (TT, UT, mT) => {
    mT.d(UT, {
      d: () => zT,
      g: () => MT,
      k: () => nT,
      o: () => jT,
      p: () => HT,
      s: () => gT
    });
    var WT = mT(208);
    const zT = 3e3,
      MT = 15e3;

    function gT(TT) {
      const UT = TT.endsWith(WT.l);
      return {
        text: (UT ? TT.slice(0, -WT.l.length) : TT) || null,
        dropsCache: UT
      }
    }
    const nT = "Either your internet isn't working or this is a bug.";

    function HT(TT, UT) {
      const mT = jT(TT);
      return null !== mT.name && "" === WT.e[mT.name].text && null !== UT ? UT : mT.reason
    }
    const kT = "You were removed from the game.";

    function jT(TT) {
      var UT;
      let mT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
      const zT = null !== (UT = Object.keys(WT.e).find((UT => WT.e[UT].code === TT))) && void 0 !== UT ? UT : null;
      if (null === zT) return {
        code: TT,
        name: zT,
        reason: null !== mT && void 0 !== mT ? mT : `${nT}\nCode: ${TT}`,
        canReconnect: !1,
        automaticallyReconnect: !1,
        requiresRefresh: !1
      };
      const {
        text: MT,
        canReconnect: gT = !1
      } = WT.e[zT], HT = TT === WT.e.outdatedVersion.code || TT === WT.e.loadRecaptchaError.code;
      return {
        code: TT,
        name: zT,
        reason: "" !== MT ? MT : null !== mT && void 0 !== mT ? mT : TT === WT.e.gameOrPluginKick.code ? kT : `Code: ${TT}`,
        canReconnect: gT,
        automaticallyReconnect: TT === WT.e.customGameUpdated.code || TT === WT.e.duplicateLobbyNameError.code,
        requiresRefresh: HT
      }
    }
  }
};
Object.freeze(modules);
for (const TT in modules) Object.freeze(modules[TT]);