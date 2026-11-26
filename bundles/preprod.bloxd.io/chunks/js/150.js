export const id = 150;
export const ids = [150];
export const modules = {
  39470: (BB, OB, GB) => {
    GB.d(OB, {
      e: () => JB,
      g: () => zB,
      i: () => lB,
      l: () => ZB,
      n: () => PB,
      q: () => MB,
      s: () => oB,
      u: () => pB
    });
    var YB = GB(328),
      DB = GB(1790);
    const QB = "A valid external Instance reference no longer exists.";

    function oB(BB) {
      return BB.includes(QB)
    }
    const jB = [
        [1e4, "<10s", "lt10s"],
        [6e4, "<1m", "lt1m"],
        [3e5, "<5m", "lt5m"],
        [18e5, "<30m", "lt30m"],
        [1 / 0, "30m+", "ge30m"]
      ],
      yB = [
        [1e3, "lt1s"],
        [2e3, "lt2s"],
        [5e3, "lt5s"],
        [1e4, "lt10s"],
        [3e4, "lt30s"],
        [1 / 0, "ge30s"]
      ];
    const JB = {
      WebGPU: "WebGPU device lost",
      WebGL2: "WebGL2 context lost"
    };

    function MB(BB, OB) {
      return BB ? "frames_refused" : arguments.length > 2 && void 0 !== arguments[2] && arguments[2] ? "browser_destroyed" : function(BB) {
        var OB;
        const GB = null !== (OB = /Device removed reason: (?!S_OK)([A-Z][A-Z0-9_]+)/.exec(BB)) && void 0 !== OB ? OB : /failed with ([A-Z][A-Z0-9_]+)/.exec(BB);
        return GB ? GB[1] : oB(BB) ? "gpu_process_lost" : "other"
      }(OB)
    }

    function PB(BB) {
      return `${(null===BB||void 0===BB?void 0:BB.vendor)||"unknown vendor"} ${(null===BB||void 0===BB?void 0:BB.architecture)||"unknown architecture"}`
    }

    function zB(BB) {
      return NB(BB)[1]
    }

    function lB(BB) {
      return NB(BB)[2]
    }

    function pB(BB, OB, GB) {
      const DB = (0, YB.c)(),
        QB = null !== DB && DB >= OB,
        oB = document.hidden ? "hidden" : QB ? "shown" : "visible",
        jB = QB ? GB - DB : null;
      return {
        page: null === jB ? oB : `${oB}${zB(jB)}`,
        code: `${BB}_${null===jB?oB:`${oB}_${lB(jB)}`}_${qB(GB)}`
      }
    }

    function qB(BB) {
      if ((0, DB.g)()) return "ad_open";
      const OB = (0, DB.e)();
      return null === OB ? "ad_none" : `ad_${lB(BB-OB.endedAt)}_${OB.pageHid?"h":"v"}`
    }

    function ZB(BB) {
      return RB(yB, BB)[1]
    }

    function NB(BB) {
      return RB(jB, BB)
    }

    function RB(BB, OB) {
      var GB;
      return null !== (GB = BB.find((BB => {
        let [GB] = BB;
        return OB < GB
      }))) && void 0 !== GB ? GB : BB[BB.length - 1]
    }
  },
  39769: (BB, OB, GB) => {
    GB.d(OB, {
      c: () => yB
    });
    var YB = GB(9599),
      DB = GB(37160),
      QB = GB(39772);
    const oB = {
        seat: "seat_timeout",
        socket_unopened: "socket_timeout_unopened",
        socket: "socket_timeout"
      },
      jB = {
        seat: "seat_lost",
        socket_unopened: "socket_unopened",
        socket: "socket_closed"
      };

    function yB(BB, OB) {
      if (BB instanceof DB.d) return {
        at: oB[OB],
        code: 0
      };
      const GB = (0, YB.d)(BB),
        yB = "number" === typeof GB ? GB : 0;
      return null !== (0, QB.i)(yB).name ? {
        at: "refused",
        code: yB
      } : {
        at: jB[OB],
        code: yB
      }
    }
  },
  9599: (BB, OB, GB) => {
    GB.d(OB, {
      c: () => QB,
      d: () => oB,
      h: () => jB,
      k: () => JB,
      m: () => yB
    });
    var YB = GB(192),
      DB = GB(5047);

    function QB(BB) {
      return oB(BB) === YB.c.gameOrPluginOnPlayerAuthRejected.code
    }

    function oB(BB) {
      return "object" === typeof BB && null !== BB ? BB.code : void 0
    }

    function jB(BB) {
      var OB;
      return null !== (OB = Object.keys(DB.b).find((OB => DB.b[OB] === BB))) && void 0 !== OB ? OB : null
    }

    function yB(BB) {
      return "notWhitelisted" === BB ? "customLobby:cantJoinNotWhitelistedTitle" : "customLobby:cantJoinWorld"
    }
    const JB = {
      private: "customLobby:cantJoinPrivate",
      notWhitelisted: "customLobby:cantJoinNotWhitelisted",
      banned: "customLobby:cantJoinBanned",
      adminLocked: "customLobby:cantJoinAdminLocked"
    }
  },
  39772: (BB, OB, GB) => {
    GB.d(OB, {
      b: () => DB,
      e: () => QB,
      f: () => jB,
      i: () => MB,
      k: () => yB,
      m: () => oB
    });
    var YB = GB(192);
    const DB = 3e3,
      QB = 15e3;

    function oB(BB) {
      const OB = BB.endsWith(YB.m);
      return {
        text: (OB ? BB.slice(0, -YB.m.length) : BB) || null,
        dropsCache: OB
      }
    }
    const jB = "Either your internet isn't working or this is a bug.";

    function yB(BB, OB) {
      const GB = MB(BB);
      return null !== GB.name && "" === YB.c[GB.name].text && null !== OB ? OB : GB.reason
    }
    const JB = "You were removed from the game.";

    function MB(BB) {
      var OB;
      let GB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
      const DB = null !== (OB = Object.keys(YB.c).find((OB => YB.c[OB].code === BB))) && void 0 !== OB ? OB : null;
      if (null === DB) return {
        code: BB,
        name: DB,
        reason: null !== GB && void 0 !== GB ? GB : `${jB}\nCode: ${BB}`,
        canReconnect: !1,
        automaticallyReconnect: !1,
        requiresRefresh: !1
      };
      const {
        text: QB,
        canReconnect: oB = !1
      } = YB.c[DB], yB = BB === YB.c.outdatedVersion.code || BB === YB.c.loadRecaptchaError.code;
      return {
        code: BB,
        name: DB,
        reason: "" !== QB ? QB : null !== GB && void 0 !== GB ? GB : BB === YB.c.gameOrPluginKick.code ? JB : `Code: ${BB}`,
        canReconnect: oB,
        automaticallyReconnect: BB === YB.c.customGameUpdated.code || BB === YB.c.duplicateLobbyNameError.code,
        requiresRefresh: yB
      }
    }
  },
  37536: (BB, OB, GB) => {
    function YB(BB) {
      return "fetch" === BB || "timeout" === BB || "integrity" === BB ? "download" : "browser"
    }
    GB.d(OB, {
      b: () => DB,
      c: () => yB,
      g: () => MB,
      h: () => jB,
      l: () => oB,
      m: () => JB,
      p: () => YB,
      q: () => QB
    });
    const DB = "https://discord.gg/playbloxd";

    function QB(BB, OB) {
      return "download" === BB ? {
        icon: "wifi",
        title: "wasmScreens:downloadFailedTitle",
        help: "wasmScreens:downloadFailedHelp",
        helpValues: {},
        discordLink: !1,
        confirm: "general:tryAgain",
        cancel: "general:back"
      } : "memory" === BB || "noContext" === BB || "graphicsLost" === BB ? {
        icon: "face-dizzy",
        title: `wasmUnsupported:${BB}Title`,
        help: `wasmUnsupported:${BB}Help${OB?"App":""}`,
        helpValues: {},
        discordLink: !1,
        confirm: "general:tryAgain",
        cancel: "general:back"
      } : {
        icon: "face-dizzy",
        title: OB ? "wasmUnsupported:titleApp" : "wasmUnsupported:title",
        help: OB ? "wasmUnsupported:helpApp" : "wasmUnsupported:" + ("noWebAssembly" === BB ? "noWebAssemblyHelp" : "help"),
        helpValues: {},
        discordLink: !1,
        confirm: "general:ok",
        cancel: null
      }
    }

    function oB(BB, OB) {
      return {
        ...QB(BB, OB),
        help: OB ? "wasmUnsupported:stillBlockedHelpApp" : `wasmUnsupported:${BB}StillHelp`
      }
    }

    function jB() {
      return {
        icon: "face-dizzy",
        title: "wasmScreens:noContextTitle",
        help: "wasmScreens:noContextHelp",
        helpValues: {},
        discordLink: !1,
        confirm: "general:tryAgain",
        cancel: "general:back"
      }
    }

    function yB(BB, OB) {
      return {
        icon: "face-dizzy",
        title: "wasmScreens:crashTitle",
        help: OB ? "wasmScreens:crashHelp" : "wasmScreens:crashHelpNoDiscord",
        helpValues: {
          code: BB.code
        },
        discordLink: OB,
        confirm: "general:reload",
        cancel: "general:back"
      }
    }

    function JB() {
      return {
        icon: "face-dizzy",
        title: "wasmScreens:turnstilePageTitle",
        help: "wasmScreens:turnstilePageHelp",
        helpValues: {},
        discordLink: !1,
        confirm: "general:ok",
        cancel: null
      }
    }

    function MB(BB, OB, GB) {
      return {
        icon: "wifi",
        title: "wasmScreens:disconnectedTitle",
        help: GB ? "wasmScreens:reconnectingHelp" : "wasmScreens:disconnectedHelp",
        helpValues: {
          reason: BB.reason
        },
        discordLink: null === BB.name,
        confirm: OB ? "general:reconnect" : BB.requiresRefresh ? "general:reload" : "general:ok",
        cancel: null
      }
    }
  },
  36912: (BB, OB, GB) => {
    GB.d(OB, {
      e: () => tB,
      g: () => YO,
      h: () => vB,
      j: () => OO,
      m: () => sB,
      o: () => xB
    });
    var YB = GB(3206),
      DB = GB(3224),
      QB = GB(7161),
      oB = GB(5165),
      jB = GB(3219),
      yB = GB(3210);
    const JB = "bloxd-wasmDownloaded",
      MB = 12;

    function PB(BB) {
      return BB.pathname.slice(BB.pathname.lastIndexOf("/") + 1)
    }

    function zB() {
      try {
        if ("undefined" === typeof localStorage) return null;
        const BB = JSON.parse(localStorage.getItem(JB) ?? "[]");
        return Array.isArray(BB) ? BB.filter((BB => "string" === typeof BB)) : []
      } catch (BB) {
        return console.warn("Bloxd wasm: the record of downloaded modules could not be read: asking the HTTP cache for none", BB), null
      }
    }
    const lB = Reflect.apply,
      pB = "undefined" === typeof Worker ? void 0 : Worker,
      qB = pB?.prototype.postMessage,
      ZB = pB?.prototype.terminate,
      NB = "undefined" === typeof EventTarget ? void 0 : EventTarget.prototype.addEventListener,
      RB = "undefined" === typeof MessageEvent ? void 0 : Object.getOwnPropertyDescriptor(MessageEvent.prototype, "data")?.get,
      WB = Object.getOwnPropertyDescriptor(Object.getPrototypeOf(Uint8Array.prototype), "buffer").get,
      AB = function() {
        try {
          return (0, oB.i)(pB, "Worker", !0) && (0, oB.i)(qB, "postMessage") && (0, oB.i)(ZB, "terminate") && (0, oB.i)(WB, "buffer") && void 0 !== NB && void 0 !== RB
        } catch {
          return !1
        }
      }();
    let VB = !1;

    function SB() {
      return AB && !VB
    }
    class nB {
      worker = null;
      failed = !1;
      constructor() {
        if (SB()) try {
          this.worker = fB(), lB(NB, this.worker, ["error", () => {
            this.failed = !0
          }])
        } catch {
          this.stop()
        }
      }
      take() {
        const BB = this.worker;
        if (this.worker = null, null !== BB && this.failed) throw lB(ZB, BB, []), new Error("it did not run");
        return BB
      }
      stop() {
        const BB = this.worker;
        this.worker = null, null !== BB && lB(ZB, BB, [])
      }
    }
    class UB {
      decoded;
      worker;
      reject;
      constructor(BB, OB, GB, YB, QB) {
        try {
          this.worker = QB?.take() ?? fB()
        } catch (JB) {
          throw VB = !0, new Error(`The zstd decoder's worker did not start: ${(0,jB.h)(JB)}`)
        }
        const oB = this.worker;
        this.decoded = (0, DB.f)(((OB, DB) => {
          this.reject = DB;
          const QB = (BB, OB) => {
            lB(NB, oB, [BB, OB])
          };
          QB("message", (BB => {
            YB();
            try {
              const YB = lB(RB, BB, []);
              if (!0 === YB) OB();
              else {
                if ("string" === typeof YB) throw YB.startsWith(jB.d) && (VB = !0), new Error(YB);
                GB(YB, lB(yB.x, YB, []))
              }
            } catch (JB) {
              DB(JB)
            }
          })), QB("error", (() => {
            VB = !0, DB(new Error("The zstd decoder's worker did not run"))
          })), QB("messageerror", (() => {
            DB(new Error(`${BB}'s decoder sent a piece that could not be read`))
          }))
        })), (0, yB.X)(this.decoded), lB(qB, oB, [
          [BB, OB]
        ])
      }
      push(BB) {
        lB(qB, this.worker, [BB, [lB(WB, BB, [])]])
      }
      end() {
        lB(qB, this.worker, [null])
      }
      markWorkerFailed() {
        VB = !0
      }
      fail(BB) {
        this.reject(BB), this.terminate()
      }
      terminate() {
        lB(ZB, this.worker, [])
      }
    }

    function fB() {
      if (globalThis.Worker !== pB) throw new Error("Worker is not the one the page loaded with");
      return new Worker(new URL(GB.p + GB.u(79), GB.b), {
        name: "wasmZstdDecoder",
        type: "module"
      })
    }
    const kB = Reflect.apply,
      dB = ArrayBuffer,
      KB = "undefined" === typeof Response ? void 0 : Response,
      uB = "undefined" === typeof ReadableStream ? void 0 : ReadableStream,
      mB = function() {
        let BB;
        void 0 !== uB && new uB({
          __proto__: null,
          start(OB) {
            const {
              enqueue: GB,
              close: YB,
              error: DB
            } = Object.getPrototypeOf(OB);
            BB = {
              enqueue: GB,
              close: YB,
              error: DB
            }
          }
        }, {
          __proto__: null
        });
        return BB
      }(),
      IB = function() {
        try {
          return "undefined" !== typeof WebAssembly && "function" === typeof WebAssembly.compileStreaming && void 0 !== mB && (0, oB.i)(KB, "Response", !0) && (0, oB.i)(uB, "ReadableStream", !0) && (0, oB.i)(mB.enqueue, "enqueue") && (0, oB.i)(mB.close, "close") && (0, oB.i)(mB.error, "error") && (0, oB.i)(yB.ab, "body") && (0, oB.i)(yB.P, "getReader") && (0, oB.i)(yB.Z, "read")
        } catch {
          return !1
        }
      }();
    async function FB(BB, OB, GB, YB, QB, oB, JB) {
      const MB = new dB(OB),
        {
          controller: PB,
          compiled: zB
        } = function(BB) {
          try {
            let BB;
            const OB = new uB({
                __proto__: null,
                start(OB) {
                  BB = OB
                }
              }, {
                __proto__: null
              }),
              GB = new KB(OB, {
                __proto__: null,
                headers: {
                  __proto__: null,
                  "Content-Type": "application/wasm"
                }
              });
            return {
              controller: BB,
              compiled: (0, yB.X)((0, yB.B)((0, yB.hb)(GB)))
            }
          } catch (OB) {
            throw new Error(`${BB} could not be streamed into a compile: ${(0,jB.h)(OB)}`)
          }
        }(BB),
        {
          enqueue: lB,
          close: pB,
          error: qB
        } = mB,
        ZB = BB => {
          try {
            kB(qB, PB, [BB])
          } catch {}
        };
      let NB = 0;
      const RB = (GB, YB) => {
        if (NB + YB > OB) throw new Error(`${BB} decoded past its module's ${OB} bytes`);
        kB(yB.cb, new yB.k(MB), [new yB.k(GB), NB]);
        try {
          kB(lB, PB, [new yB.k(MB, NB, YB)])
        } catch {}
        NB += YB
      };
      let WB, AB;
      try {
        WB = new UB(BB, OB, RB, YB, JB)
      } catch (fB) {
        throw ZB(fB), fB
      }
      const VB = BB => {
        WB.fail(BB), void 0 !== AB && iB(AB)
      };
      let SB = !1;
      GB.addEventListener("abort", (() => {
        SB && WB.markWorkerFailed(), VB(new Error(`${BB} stalled`))
      }), {
        once: !0
      }), (0, DB.s)(zB, (() => {}), VB);
      try {
        let oB;
        try {
          oB = await fetch(BB, {
            signal: GB
          })
        } catch (fB) {
          throw new Error(`Fetching ${BB} failed: ${(0,jB.h)(fB)}`)
        }
        const {
          ok: JB,
          status: MB,
          body: PB
        } = function(BB, OB) {
          try {
            const {
              ok: BB,
              status: GB
            } = OB;
            return {
              ok: BB,
              status: GB,
              body: kB(yB.ab, OB, [])
            }
          } catch {
            throw new Error(`${BB} came in a response a page script made`)
          }
        }(BB, oB);
        if (!JB) throw new Error(`Fetching ${BB} failed: HTTP ${MB}`);
        YB();
        const zB = kB(yB.P, PB, []);
        AB = zB;
        const lB = () => {
          iB(zB)
        };
        for ((0, DB.s)(WB.decoded, lB, lB);;) {
          let OB;
          try {
            OB = await kB(yB.Z, zB, [])
          } catch (fB) {
            throw new Error(`Downloading ${BB} failed: ${(0,jB.h)(fB)}`)
          }
          if (OB.done) break;
          YB(), WB.push(OB.value)
        }
        if (SB = !0, WB.end(), await WB.decoded, QB(), NB !== OB) throw new Error(`${BB} ended before its module did`)
      } catch (fB) {
        throw ZB(fB), VB(fB), fB
      }
      WB.terminate();
      try {
        kB(pB, PB, [])
      } catch {}
      const nB = await zB;
      return void 0 !== oB && await (0, yB.y)(BB, new yB.k(MB), {
        sha256: oB.sha256,
        onMismatch: () => {}
      }), nB
    }

    function iB(BB) {
      try {
        (0, yB.X)(BB.cancel())
      } catch {}
    }
    const LB = ".zst.bin",
      gB = 1e3;
    let rB = null;

    function XB(BB) {
      return rB ??= function() {
        const BB = new Map,
          OB = "bloxd_wasm_webgpu:5162719,bloxd_wasm_webgl:5545853,bloxd_wasm_webgl1:4879367,bloxd_wasm_workers:203635,bloxd_wasm_models:478484,bloxd_wasm_client:3732388";
        for (const GB of OB?.split(",") ?? []) {
          const [OB = "", YB] = GB.split(":"), DB = Number(YB);
          Number.isInteger(DB) && DB > 0 && BB.set(OB, DB)
        }
        return BB
      }(), rB.get(BB)
    }
    async function wB(BB, OB) {
      let GB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
      const YB = XB(BB.name);
      if (void 0 === YB) return EB(await cB(BB, OB, GB), "cold-wasm");
      const QB = IB ? new nB : null;
      let oB;
      try {
        if (JB = BB.url(), zB()?.includes(PB(JB)) && await async function(BB) {
            const OB = new AbortController;
            let GB;
            const YB = (0, DB.f)((BB => {
              GB = setTimeout((() => {
                OB.abort(), BB(null)
              }), gB)
            }));
            try {
              const GB = fetch(BB.href, {
                  cache: "only-if-cached",
                  mode: "same-origin",
                  signal: OB.signal
                }),
                QB = await (0, DB.p)([GB, YB]);
              return !!QB?.ok && ((0, yB.X)(QB.body.cancel()), !0)
            } catch {
              return !1
            } finally {
              clearTimeout(GB)
            }
          }(BB.url())) return QB?.stop(), await async function(BB, OB, GB, YB) {
          let DB = !1;
          const QB = GB && {
            sha256: GB.sha256,
            onMismatch: () => {
              DB = !0
            }
          };
          try {
            return EB(await cB(BB, QB, YB), "warm")
          } catch (oB) {
            const YB = await hB(BB, OB, GB, null);
            if (null === YB) throw DB && GB.onMismatch(), oB;
            return console.warn(`${BB.url().href} from the HTTP cache failed: ${(0,jB.h)(oB)}: loaded its copy instead`), EB(YB, DB ? "warm-refused" : "warm-broken")
          }
        }(BB, YB, OB, GB);
        oB = await hB(BB, YB, OB, QB)
      } finally {
        QB?.stop()
      }
      var JB;
      return null !== oB ? EB(oB, "cold-worker") : EB(await cB(BB, OB, GB), "cold-wasm")
    }

    function EB(BB, OB) {
      return {
        __proto__: null,
        module: BB,
        path: OB
      }
    }

    function cB(BB, OB, GB) {
      return void 0 === XB(BB.name) ? (0, yB.G)(BB.url(), OB, GB) : (0, yB.G)(BB.url(), OB, {
        ...GB,
        hideThen: !0,
        onDownloaded: () => {
          ! function(BB) {
            const OB = zB();
            if (null === OB) return;
            const GB = PB(BB),
              YB = OB.filter((BB => BB !== GB));
            YB.push(GB);
            try {
              localStorage.setItem(JB, JSON.stringify(YB.slice(-MB)))
            } catch (DB) {
              console.warn(`Bloxd wasm: ${GB} could not be recorded as downloaded: a later join asks the HTTP cache nothing for it`, DB)
            }
          }(BB.url()), GB.onDownloaded?.()
        }
      })
    }
    async function hB(BB, OB, GB, YB) {
      if (!IB || !SB()) return null;
      const DB = BB.url(),
        QB = `${DB.href}${LB}`;
      try {
        return await (0, yB.gb)(QB, ((BB, DB, oB) => FB(QB, OB, BB, DB, oB, GB, YB)))
      } catch (oB) {
        return console.warn(`${(0,jB.h)(oB)}: loading ${DB.href} instead`), null
      }
    }
    let aB = null,
      eB = !1;
    const TB = new Map,
      bB = new Map;
    let CB = null;

    function HB(BB) {
      const OB = OB => BB.filter((BB => TB.get(BB)?.state === OB)).length,
        GB = OB("compiled");
      return GB > 0 && GB === BB.length ? "compiled" : GB + OB("compiling") > 0 ? "compiling" : "none"
    }

    function vB() {
      return CB ?? HB([...TB.keys()])
    }

    function sB(BB, OB, GB) {
      return null === aB ? aB = BO(BB, OB, GB?.memoryMaximumBytes) : BB !== aB.build ? console.warn(`Bloxd wasm: ${BB.name} was asked for after ${aB.build.name} started loading, which this thread keeps`) : OB.name !== aB.workers.name && console.warn(`Bloxd wasm: ${OB.name} was asked for workers after ${aB.workers.name}, which this thread keeps`), GB?.reloadFailedDownload && !eB && (0, YB.$)() && (eB = !0, aB = BO(aB.build, aB.workers, aB.memoryMaximumBytes)), aB.loaded
    }

    function xB(BB) {
      return null === aB ? (0, DB.f)((BB => {
        BB(!1)
      })) : ((0, YB._)() && (aB = BO(aB.build, aB.workers, BB ?? aB.memoryMaximumBytes)), aB.loaded)
    }

    function tB(BB, OB) {
      if (null !== aB) return (0, DB.d)([]);
      const GB = BB.filter((BB => !TB.has(BB.name))).map((BB => {
        const GB = new AbortController,
          YB = {
            compiled: cB(BB, (0, QB.d)(BB.name), {
              priority: OB,
              rB: GB.signal,
              onDownloaded: () => {
                YB.downloaded = !0
              },
              retries: {
                onRetry: () => {
                  YB.downloaded = !1, null !== aB && GB.abort()
                }
              }
            }),
            cancel: GB,
            downloaded: !1,
            state: "compiling"
          };
        return TB.set(BB.name, YB), (0, DB.f)((OB => {
          (0, DB.s)(YB.compiled, (() => {
            YB.downloaded = !0, YB.state = "compiled", OB()
          }), (DB => {
            YB.state = "failed", GB.signal.aborted || console.warn(`Bloxd wasm: ${BB.name}'s compile ahead of the load failed: the load compiles it afresh`, DB), OB()
          }))
        }))
      }));
      return (0, DB.d)(GB)
    }

    function BO(BB, OB, GB) {
      CB ??= HB(OB.name === BB.name ? [BB.name] : [BB.name, OB.name]);
      const QB = (0, YB.F)((async () => {
        (0, oB.w)(), bB.clear();
        const GB = GO(BB),
          YB = OB.name === BB.name ? GB : GO(OB);
        for (const {
            cancel: BB
          }
          of TB.values()) BB.abort();
        TB.clear(), await (0, DB.d)([GB, YB]);
        const QB = await GB,
          jB = await YB;
        return (0, oB.w)(), {
          module: QB,
          workerModule: jB
        }
      }), BB, GB);
      return {
        build: BB,
        workers: OB,
        memoryMaximumBytes: GB,
        loaded: QB
      }
    }

    function OO(BB) {
      return bB.get(BB)
    }

    function GO(BB) {
      const OB = performance.now(),
        GB = TB.get(BB.name);
      TB.delete(BB.name);
      const YB = !0 === GB?.downloaded ? GB : void 0;
      return void 0 !== GB && void 0 === YB && GB.cancel.abort(), (0, DB.f)(((GB, QB) => {
        const oB = (YB, DB) => {
            bB.set(BB.name, {
              path: DB,
              ms: performance.now() - OB
            }), GB(YB)
          },
          jB = () => {
            (0, DB.s)(DO(BB), (BB => {
              let {
                module: OB,
                path: GB
              } = BB;
              oB(OB, GB)
            }), QB)
          };
        void 0 === YB ? jB() : (0, DB.s)(YB.compiled, (BB => {
          oB(BB, "ahead")
        }), jB)
      }))
    }
    async function YO(BB, OB) {
      const {
        module: GB
      } = await DO(BB, {
        retries: OB
      });
      return GB
    }
    async function DO(BB) {
      let OB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
      return await wB(BB, (0, QB.d)(BB.name), OB)
    }
  },
  7161: (BB, OB, GB) => {
    GB.d(OB, {
      d: () => oB
    });
    var YB = GB(3210);
    const DB = {
      bloxd_wasm: () => "bbd4532b4204ac6b037d21981a0077e27c49bf77bad5ade13596319f1c6101a5",
      bloxd_wasm_client: () => "8365f73c3472844058a4a0f574b2102c245aef505acbb602a81be3847509c8fa",
      bloxd_wasm_workers: () => "8409ee2ec92a1f5bf3cf7df6088eeb4c89a7f9ab0b6c537ab5e6bee5e1c85a52",
      bloxd_wasm_models: () => "4297705d02ef7091b212436b1b1d90f181427336ab1bf97d3c1a2eebcb00ef44",
      bloxd_wasm_webgpu: () => "feb1e82520617426b733fd3101371d0a4d1be5eea8eb5f7115ad8b481c5ecc2a",
      bloxd_wasm_webgl: () => "ccc8a64ee7a944567fefa835e06af6da6175cc2ce9d8d4fb5fc2acb63861821b",
      bloxd_wasm_webgl1: () => "ef3b6328394821ae9f35e9d6eb203b2d9872f6911c2948b8b5bd2bd784af58be",
      bloxd_wasm_replay: () => "e6bfd69259d4961ba1c2eff287fb0493dd998b3af1045ea9988589f9c1c784a6",
      bloxd_wasm_recorder: () => "61e54a37d20be582fb8a73e1f48e79e660cbedc06e1fc696d3d52ad467693eb7",
      bloxd_wasm_anim: () => "412a9ead222a90865e84867e83bc25acfd52a0e1c584c793e1f272639ce5dc2c",
      bloxd_wasm_textures: () => "43d7ae101efe7b39af19b5e650a2896a40d167bca827906978d39975a015e416",
      bloxd_wasm_shader_pack: () => "072b43f08a8ed6ea1336897ed9d7881ce755636d8b8a8f34eaa208a897665b42"
    };
    var QB = GB(5165);

    function oB(BB) {
      const OB = Object.prototype.hasOwnProperty.call(DB, BB) ? DB[BB]() : void 0;
      if (void 0 !== OB) return {
        sha256: OB,
        onMismatch: QB.s
      };
      throw new YB.g(`${BB} has no release digest, so this build refuses it`)
    }
  },
  7179: (BB, OB, GB) => {
    GB.d(OB, {
      e: () => YB,
      g: () => oB,
      k: () => jB,
      o: () => DB,
      r: () => QB
    });
    const YB = ["terrain", "liquid", "model"];

    function DB() {
      const BB = [];
      for (const OB of [!1, !0])
        for (const GB of YB) BB.push({
          strict: OB,
          program: GB
        });
      return BB
    }

    function QB(BB) {
      return `${BB.strict?"strict":"allow"}.${BB.program}`
    }

    function oB(BB) {
      return !BB.hooks.vertex && !BB.hooks.surface && !BB.hooks.light
    }

    function jB(BB, OB) {
      return "off" !== OB && (null === BB || BB.some((BB => BB.key.strict === ("strict" === OB) && !oB(BB))))
    }
  }
};
Object.freeze(modules);
for (const BB in modules) Object.freeze(modules[BB]);