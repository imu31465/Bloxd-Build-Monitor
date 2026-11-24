export const id = 134;
export const ids = [134];
export const modules = {
  38784: (SS, HS, gS) => {
    gS.d(HS, {
      c: () => qS,
      e: () => fS,
      i: () => jS,
      k: () => IS,
      n: () => uS,
      r: () => aS
    });
    var tS = gS(364),
      bS = gS(1830);
    const XS = "A valid external Instance reference no longer exists.",
      xS = [
        [1e4, "<10s", "lt10s"],
        [6e4, "<1m", "lt1m"],
        [3e5, "<5m", "lt5m"],
        [18e5, "<30m", "lt30m"],
        [1 / 0, "30m+", "ge30m"]
      ],
      NS = [
        [1e3, "lt1s"],
        [2e3, "lt2s"],
        [5e3, "lt5s"],
        [1e4, "lt10s"],
        [3e4, "lt30s"],
        [1 / 0, "ge30s"]
      ];
    const qS = {
      WebGPU: "WebGPU device lost",
      WebGL2: "WebGL2 context lost"
    };

    function uS(SS, HS) {
      return SS ? "frames_refused" : arguments.length > 2 && void 0 !== arguments[2] && arguments[2] ? "browser_destroyed" : function(SS) {
        var HS;
        const gS = null !== (HS = /Device removed reason: (?!S_OK)([A-Z][A-Z0-9_]+)/.exec(SS)) && void 0 !== HS ? HS : /failed with ([A-Z][A-Z0-9_]+)/.exec(SS);
        return gS ? gS[1] : SS.includes(XS) ? "gpu_process_lost" : "other"
      }(HS)
    }

    function IS(SS) {
      return `${(null===SS||void 0===SS?void 0:SS.vendor)||"unknown vendor"} ${(null===SS||void 0===SS?void 0:SS.architecture)||"unknown architecture"}`
    }

    function fS(SS) {
      return GS(SS)[1]
    }

    function kS(SS) {
      return GS(SS)[2]
    }

    function aS(SS, HS, gS) {
      const bS = (0, tS.f)(),
        XS = null !== bS && bS >= HS,
        xS = document.hidden ? "hidden" : XS ? "shown" : "visible",
        NS = XS ? gS - bS : null;
      return {
        page: null === NS ? xS : `${xS}${fS(NS)}`,
        code: `${SS}_${null===NS?xS:`${xS}_${kS(NS)}`}_${KS(gS)}`
      }
    }

    function KS(SS) {
      if ((0, bS.g)()) return "ad_open";
      const HS = (0, bS.c)();
      return null === HS ? "ad_none" : `ad_${kS(SS-HS.endedAt)}_${HS.pageHid?"h":"v"}`
    }

    function jS(SS) {
      return CS(NS, SS)[1]
    }

    function GS(SS) {
      return CS(xS, SS)
    }

    function CS(SS, HS) {
      var gS;
      return null !== (gS = SS.find((SS => {
        let [gS] = SS;
        return HS < gS
      }))) && void 0 !== gS ? gS : SS[SS.length - 1]
    }
  },
  39083: (SS, HS, gS) => {
    gS.d(HS, {
      d: () => qS
    });
    var tS = gS(9093),
      bS = gS(36503),
      XS = gS(39087);
    const xS = {
        seat: "seat_timeout",
        socket_unopened: "socket_timeout_unopened",
        socket: "socket_timeout"
      },
      NS = {
        seat: "seat_lost",
        socket_unopened: "socket_unopened",
        socket: "socket_closed"
      };

    function qS(SS, HS) {
      if (SS instanceof bS.e) return {
        at: xS[HS],
        code: 0
      };
      const gS = (0, tS.i)(SS),
        qS = "number" === typeof gS ? gS : 0;
      return null !== (0, XS.k)(qS).name ? {
        at: "refused",
        code: qS
      } : {
        at: NS[HS],
        code: qS
      }
    }
  },
  9093: (SS, HS, gS) => {
    gS.d(HS, {
      e: () => XS,
      i: () => xS,
      j: () => NS,
      l: () => uS,
      m: () => qS
    });
    var tS = gS(198),
      bS = gS(4749);

    function XS(SS) {
      return xS(SS) === tS.c.gameOrPluginOnPlayerAuthRejected.code
    }

    function xS(SS) {
      return "object" === typeof SS && null !== SS ? SS.code : void 0
    }

    function NS(SS) {
      var HS;
      return null !== (HS = Object.keys(bS.e).find((HS => bS.e[HS] === SS))) && void 0 !== HS ? HS : null
    }

    function qS(SS) {
      return "notWhitelisted" === SS ? "customLobby:cantJoinNotWhitelistedTitle" : "customLobby:cantJoinWorld"
    }
    const uS = {
      private: "customLobby:cantJoinPrivate",
      notWhitelisted: "customLobby:cantJoinNotWhitelisted",
      banned: "customLobby:cantJoinBanned",
      adminLocked: "customLobby:cantJoinAdminLocked"
    }
  },
  39087: (SS, HS, gS) => {
    gS.d(HS, {
      c: () => bS,
      d: () => XS,
      g: () => NS,
      k: () => IS,
      l: () => qS,
      m: () => xS
    });
    var tS = gS(198);
    const bS = 3e3,
      XS = 15e3;

    function xS(SS) {
      const HS = SS.endsWith(tS.g);
      return {
        text: (HS ? SS.slice(0, -tS.g.length) : SS) || null,
        dropsCache: HS
      }
    }
    const NS = "Either your internet isn't working or this is a bug.";

    function qS(SS, HS) {
      const gS = IS(SS);
      return null !== gS.name && "" === tS.c[gS.name].text && null !== HS ? HS : gS.reason
    }
    const uS = "You were removed from the game.";

    function IS(SS) {
      var HS;
      let gS = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
      const bS = null !== (HS = Object.keys(tS.c).find((HS => tS.c[HS].code === SS))) && void 0 !== HS ? HS : null;
      if (null === bS) return {
        code: SS,
        name: bS,
        reason: null !== gS && void 0 !== gS ? gS : `${NS}\nCode: ${SS}`,
        canReconnect: !1,
        automaticallyReconnect: !1,
        requiresRefresh: !1
      };
      const {
        text: XS,
        canReconnect: xS = !1
      } = tS.c[bS], qS = SS === tS.c.outdatedVersion.code || SS === tS.c.loadRecaptchaError.code;
      return {
        code: SS,
        name: bS,
        reason: "" !== XS ? XS : null !== gS && void 0 !== gS ? gS : SS === tS.c.gameOrPluginKick.code ? uS : `Code: ${SS}`,
        canReconnect: xS,
        automaticallyReconnect: SS === tS.c.customGameUpdated.code || SS === tS.c.duplicateLobbyNameError.code,
        requiresRefresh: qS
      }
    }
  },
  36877: (SS, HS, gS) => {
    function tS(SS) {
      return "fetch" === SS || "timeout" === SS || "integrity" === SS ? "download" : "browser"
    }
    gS.d(HS, {
      b: () => bS,
      e: () => xS,
      i: () => qS,
      m: () => NS,
      n: () => tS,
      p: () => XS
    });
    const bS = "https://discord.gg/playbloxd";

    function XS(SS) {
      return "download" === SS ? {
        icon: "wifi",
        title: "wasmScreens:downloadFailedTitle",
        help: "wasmScreens:downloadFailedHelp",
        helpValues: {},
        discordLink: !1,
        confirm: "general:tryAgain",
        cancel: "general:back"
      } : {
        icon: "face-dizzy",
        title: "wasmScreens:unsupportedTitle",
        help: "wasmScreens:unsupportedHelp",
        helpValues: {},
        discordLink: !1,
        confirm: "general:ok",
        cancel: null
      }
    }

    function xS(SS, HS) {
      return {
        icon: "face-dizzy",
        title: "wasmScreens:crashTitle",
        help: HS ? "wasmScreens:crashHelp" : "wasmScreens:crashHelpNoDiscord",
        helpValues: {
          code: SS.code
        },
        discordLink: HS,
        confirm: "general:reload",
        cancel: "general:back"
      }
    }

    function NS() {
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

    function qS(SS, HS, gS) {
      return {
        icon: "wifi",
        title: "wasmScreens:disconnectedTitle",
        help: gS ? "wasmScreens:reconnectingHelp" : "wasmScreens:disconnectedHelp",
        helpValues: {
          reason: SS.reason
        },
        discordLink: null === SS.name,
        confirm: HS ? "general:reconnect" : SS.requiresRefresh ? "general:reload" : "general:ok",
        cancel: null
      }
    }
  },
  36322: (SS, HS, gS) => {
    gS.d(HS, {
      b: () => oS,
      e: () => rS,
      g: () => mS,
      i: () => TS
    });
    var tS = gS(3021),
      bS = gS(3035),
      XS = gS(6819),
      xS = gS(4812),
      NS = gS(3033),
      qS = gS(3030);
    const uS = "bloxd-wasmDownloaded",
      IS = 12;

    function fS(SS) {
      return SS.pathname.slice(SS.pathname.lastIndexOf("/") + 1)
    }

    function kS() {
      try {
        if ("undefined" === typeof localStorage) return null;
        const SS = JSON.parse(localStorage.getItem(uS) ?? "[]");
        return Array.isArray(SS) ? SS.filter((SS => "string" === typeof SS)) : []
      } catch (SS) {
        return console.warn("Bloxd wasm: the record of downloaded modules could not be read: asking the HTTP cache for none", SS), null
      }
    }
    const aS = Reflect.apply,
      KS = "undefined" === typeof Worker ? void 0 : Worker,
      jS = KS?.prototype.postMessage,
      GS = KS?.prototype.terminate,
      CS = "undefined" === typeof EventTarget ? void 0 : EventTarget.prototype.addEventListener,
      nS = "undefined" === typeof MessageEvent ? void 0 : Object.getOwnPropertyDescriptor(MessageEvent.prototype, "data")?.get,
      PS = Object.getOwnPropertyDescriptor(Object.getPrototypeOf(Uint8Array.prototype), "buffer").get,
      QS = function() {
        try {
          return (0, xS.m)(KS, "Worker", !0) && (0, xS.m)(jS, "postMessage") && (0, xS.m)(GS, "terminate") && (0, xS.m)(PS, "buffer") && void 0 !== CS && void 0 !== nS
        } catch {
          return !1
        }
      }();
    let DS = !1;

    function wS() {
      return QS && !DS
    }
    class hS {
      worker = null;
      failed = !1;
      constructor() {
        if (wS()) try {
          this.worker = JS(), aS(CS, this.worker, ["error", () => {
            this.failed = !0
          }])
        } catch {
          this.stop()
        }
      }
      take() {
        const SS = this.worker;
        if (this.worker = null, null !== SS && this.failed) throw aS(GS, SS, []), new Error("it did not run");
        return SS
      }
      stop() {
        const SS = this.worker;
        this.worker = null, null !== SS && aS(GS, SS, [])
      }
    }
    class ZS {
      decoded;
      worker;
      reject;
      constructor(SS, HS, gS, tS, XS) {
        try {
          this.worker = XS?.take() ?? JS()
        } catch (uS) {
          throw DS = !0, new Error(`The zstd decoder's worker did not start: ${(0,NS.f)(uS)}`)
        }
        const xS = this.worker;
        this.decoded = (0, bS.i)(((HS, bS) => {
          this.reject = bS;
          const XS = (SS, HS) => {
            aS(CS, xS, [SS, HS])
          };
          XS("message", (SS => {
            tS();
            try {
              const tS = aS(nS, SS, []);
              if (!0 === tS) HS();
              else {
                if ("string" === typeof tS) throw tS.startsWith(NS.d) && (DS = !0), new Error(tS);
                gS(tS, aS(qS.A, tS, []))
              }
            } catch (uS) {
              bS(uS)
            }
          })), XS("error", (() => {
            DS = !0, bS(new Error("The zstd decoder's worker did not run"))
          })), XS("messageerror", (() => {
            bS(new Error(`${SS}'s decoder sent a piece that could not be read`))
          }))
        })), (0, qS.U)(this.decoded), aS(jS, xS, [
          [SS, HS]
        ])
      }
      push(SS) {
        aS(jS, this.worker, [SS, [aS(PS, SS, [])]])
      }
      end() {
        aS(jS, this.worker, [null])
      }
      markWorkerFailed() {
        DS = !0
      }
      fail(SS) {
        this.reject(SS), this.terminate()
      }
      terminate() {
        aS(GS, this.worker, [])
      }
    }

    function JS() {
      if (globalThis.Worker !== KS) throw new Error("Worker is not the one the page loaded with");
      return new Worker(new URL(gS.p + gS.u(67), gS.b), {
        name: "wasmZstdDecoder",
        type: "module"
      })
    }
    const OS = Reflect.apply,
      dS = ArrayBuffer,
      cS = "undefined" === typeof Response ? void 0 : Response,
      vS = "undefined" === typeof ReadableStream ? void 0 : ReadableStream,
      ES = function() {
        let SS;
        void 0 !== vS && new vS({
          __proto__: null,
          start(HS) {
            const {
              enqueue: gS,
              close: tS,
              error: bS
            } = Object.getPrototypeOf(HS);
            SS = {
              enqueue: gS,
              close: tS,
              error: bS
            }
          }
        }, {
          __proto__: null
        });
        return SS
      }(),
      LS = function() {
        try {
          return "undefined" !== typeof WebAssembly && "function" === typeof WebAssembly.compileStreaming && void 0 !== ES && (0, xS.m)(cS, "Response", !0) && (0, xS.m)(vS, "ReadableStream", !0) && (0, xS.m)(ES.enqueue, "enqueue") && (0, xS.m)(ES.close, "close") && (0, xS.m)(ES.error, "error") && (0, xS.m)(qS.Z, "body") && (0, xS.m)(qS.O, "getReader") && (0, xS.m)(qS.W, "read")
        } catch {
          return !1
        }
      }();
    async function YS(SS, HS, gS, tS, XS, xS, uS) {
      const IS = new dS(HS),
        {
          controller: fS,
          compiled: kS
        } = function(SS) {
          try {
            let SS;
            const HS = new vS({
                __proto__: null,
                start(HS) {
                  SS = HS
                }
              }, {
                __proto__: null
              }),
              gS = new cS(HS, {
                __proto__: null,
                headers: {
                  __proto__: null,
                  "Content-Type": "application/wasm"
                }
              });
            return {
              controller: SS,
              compiled: (0, qS.U)((0, qS.D)((0, qS.gb)(gS)))
            }
          } catch (HS) {
            throw new Error(`${SS} could not be streamed into a compile: ${(0,NS.f)(HS)}`)
          }
        }(SS),
        {
          enqueue: aS,
          close: KS,
          error: jS
        } = ES,
        GS = SS => {
          try {
            OS(jS, fS, [SS])
          } catch {}
        };
      let CS = 0;
      const nS = (gS, tS) => {
        if (CS + tS > HS) throw new Error(`${SS} decoded past its module's ${HS} bytes`);
        OS(qS.$, new qS.p(IS), [new qS.p(gS), CS]);
        try {
          OS(aS, fS, [new qS.p(IS, CS, tS)])
        } catch {}
        CS += tS
      };
      let PS, QS;
      try {
        PS = new ZS(SS, HS, nS, tS, uS)
      } catch (JS) {
        throw GS(JS), JS
      }
      const DS = SS => {
        PS.fail(SS), void 0 !== QS && AS(QS)
      };
      let wS = !1;
      gS.addEventListener("abort", (() => {
        wS && PS.markWorkerFailed(), DS(new Error(`${SS} stalled`))
      }), {
        once: !0
      }), (0, bS.s)(kS, (() => {}), DS);
      try {
        let xS;
        try {
          xS = await fetch(SS, {
            signal: gS
          })
        } catch (JS) {
          throw new Error(`Fetching ${SS} failed: ${(0,NS.f)(JS)}`)
        }
        const {
          ok: uS,
          status: IS,
          body: fS
        } = function(SS, HS) {
          try {
            const {
              ok: SS,
              status: gS
            } = HS;
            return {
              ok: SS,
              status: gS,
              body: OS(qS.Z, HS, [])
            }
          } catch {
            throw new Error(`${SS} came in a response a page script made`)
          }
        }(SS, xS);
        if (!uS) throw new Error(`Fetching ${SS} failed: HTTP ${IS}`);
        tS();
        const kS = OS(qS.O, fS, []);
        QS = kS;
        const aS = () => {
          AS(kS)
        };
        for ((0, bS.s)(PS.decoded, aS, aS);;) {
          let HS;
          try {
            HS = await OS(qS.W, kS, [])
          } catch (JS) {
            throw new Error(`Downloading ${SS} failed: ${(0,NS.f)(JS)}`)
          }
          if (HS.done) break;
          tS(), PS.push(HS.value)
        }
        if (wS = !0, PS.end(), await PS.decoded, XS(), CS !== HS) throw new Error(`${SS} ended before its module did`)
      } catch (JS) {
        throw GS(JS), DS(JS), JS
      }
      PS.terminate();
      try {
        OS(KS, fS, [])
      } catch {}
      const hS = await kS;
      return void 0 !== xS && await (0, qS.C)(SS, new qS.p(IS), {
        sha256: xS.sha256,
        onMismatch: () => {}
      }), hS
    }

    function AS(SS) {
      try {
        (0, qS.U)(SS.cancel())
      } catch {}
    }
    const yS = ".zst.bin",
      VS = 1e3;
    let iS = null;

    function WS(SS) {
      return iS ??= function() {
        const SS = new Map,
          HS = "bloxd_wasm_webgpu:5121239,bloxd_wasm_webgl:5500736,bloxd_wasm_webgl1:4836275,bloxd_wasm_workers:201241,bloxd_wasm_models:311531,bloxd_wasm_client:3704228";
        for (const gS of HS?.split(",") ?? []) {
          const [HS = "", tS] = gS.split(":"), bS = Number(tS);
          Number.isInteger(bS) && bS > 0 && SS.set(HS, bS)
        }
        return SS
      }(), iS.get(SS)
    }
    async function zS(SS, HS) {
      let gS = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
      const tS = WS(SS.name);
      if (void 0 === tS) return US(await pS(SS, HS, gS), "cold-wasm");
      const XS = LS ? new hS : null;
      let xS;
      try {
        if (uS = SS.url(), kS()?.includes(fS(uS)) && await async function(SS) {
            const HS = new AbortController;
            let gS;
            const tS = (0, bS.i)((SS => {
              gS = setTimeout((() => {
                HS.abort(), SS(null)
              }), VS)
            }));
            try {
              const gS = fetch(SS.href, {
                  cache: "only-if-cached",
                  mode: "same-origin",
                  signal: HS.signal
                }),
                XS = await (0, bS.r)([gS, tS]);
              return !!XS?.ok && ((0, qS.U)(XS.body.cancel()), !0)
            } catch {
              return !1
            } finally {
              clearTimeout(gS)
            }
          }(SS.url())) return XS?.stop(), await async function(SS, HS, gS, tS) {
          let bS = !1;
          const XS = gS && {
            sha256: gS.sha256,
            onMismatch: () => {
              bS = !0
            }
          };
          try {
            return US(await pS(SS, XS, tS), "warm")
          } catch (xS) {
            const tS = await sS(SS, HS, gS, null);
            if (null === tS) throw bS && gS.onMismatch(), xS;
            return console.warn(`${SS.url().href} from the HTTP cache failed: ${(0,NS.f)(xS)}: loaded its copy instead`), US(tS, bS ? "warm-refused" : "warm-broken")
          }
        }(SS, tS, HS, gS);
        xS = await sS(SS, tS, HS, XS)
      } finally {
        XS?.stop()
      }
      var uS;
      return null !== xS ? US(xS, "cold-worker") : US(await pS(SS, HS, gS), "cold-wasm")
    }

    function US(SS, HS) {
      return {
        __proto__: null,
        module: SS,
        path: HS
      }
    }

    function pS(SS, HS, gS) {
      return void 0 === WS(SS.name) ? (0, qS.F)(SS.url(), HS, gS) : (0, qS.F)(SS.url(), HS, {
        ...gS,
        hideThen: !0,
        onDownloaded: () => {
          ! function(SS) {
            const HS = kS();
            if (null === HS) return;
            const gS = fS(SS),
              tS = HS.filter((SS => SS !== gS));
            tS.push(gS);
            try {
              localStorage.setItem(uS, JSON.stringify(tS.slice(-IS)))
            } catch (bS) {
              console.warn(`Bloxd wasm: ${gS} could not be recorded as downloaded: a later join asks the HTTP cache nothing for it`, bS)
            }
          }(SS.url()), gS.onDownloaded?.()
        }
      })
    }
    async function sS(SS, HS, gS, tS) {
      if (!LS || !wS()) return null;
      const bS = SS.url(),
        XS = `${bS.href}${yS}`;
      try {
        return await (0, qS.cb)(XS, ((SS, bS, xS) => YS(XS, HS, SS, bS, xS, gS, tS)))
      } catch (xS) {
        return console.warn(`${(0,NS.f)(xS)}: loading ${bS.href} instead`), null
      }
    }
    let BS = null,
      MS = !1;
    const FS = new Map,
      RS = new Map;

    function TS(SS, HS, gS) {
      return null === BS ? BS = lS(SS, HS, gS?.memoryMaximumBytes) : SS !== BS.build ? console.warn(`Bloxd wasm: ${SS.name} was asked for after ${BS.build.name} started loading, which this thread keeps`) : HS.name !== BS.workers.name && console.warn(`Bloxd wasm: ${HS.name} was asked for workers after ${BS.workers.name}, which this thread keeps`), gS?.reloadFailedDownload && !MS && (0, tS.$)() && (MS = !0, BS = lS(BS.build, BS.workers, BS.memoryMaximumBytes)), BS.loaded
    }

    function oS(SS, HS) {
      if (null !== BS) return (0, bS.g)([]);
      const gS = SS.filter((SS => !FS.has(SS.name))).map((SS => {
        const gS = new AbortController,
          tS = {
            compiled: pS(SS, (0, XS.c)(SS.name), {
              priority: HS,
              Hg: gS.signal,
              onDownloaded: () => {
                tS.downloaded = !0
              },
              retries: {
                onRetry: () => {
                  tS.downloaded = !1, null !== BS && gS.abort()
                }
              }
            }),
            cancel: gS,
            downloaded: !1
          };
        return FS.set(SS.name, tS), (0, bS.i)((HS => {
          (0, bS.s)(tS.compiled, (() => {
            tS.downloaded = !0, HS()
          }), (tS => {
            gS.signal.aborted || console.warn(`Bloxd wasm: ${SS.name}'s compile ahead of the load failed: the load compiles it afresh`, tS), HS()
          }))
        }))
      }));
      return (0, bS.g)(gS)
    }

    function lS(SS, HS, gS) {
      const XS = (0, tS.M)((async () => {
        (0, xS.H)(), RS.clear();
        const gS = eS(SS),
          tS = HS.name === SS.name ? gS : eS(HS);
        for (const {
            cancel: SS
          }
          of FS.values()) SS.abort();
        FS.clear(), await (0, bS.g)([gS, tS]);
        const XS = await gS,
          NS = await tS;
        return (0, xS.H)(), {
          module: XS,
          workerModule: NS
        }
      }), SS, gS);
      return {
        build: SS,
        workers: HS,
        memoryMaximumBytes: gS,
        loaded: XS
      }
    }

    function mS(SS) {
      return RS.get(SS)
    }

    function eS(SS) {
      const HS = performance.now(),
        gS = FS.get(SS.name);
      FS.delete(SS.name);
      const tS = !0 === gS?.downloaded ? gS : void 0;
      return void 0 !== gS && void 0 === tS && gS.cancel.abort(), (0, bS.i)(((gS, XS) => {
        const xS = (tS, bS) => {
            RS.set(SS.name, {
              path: bS,
              ms: performance.now() - HS
            }), gS(tS)
          },
          NS = () => {
            (0, bS.s)(SH(SS), (SS => {
              let {
                module: HS,
                path: gS
              } = SS;
              xS(HS, gS)
            }), XS)
          };
        void 0 === tS ? NS() : (0, bS.s)(tS.compiled, (SS => {
          xS(SS, "ahead")
        }), NS)
      }))
    }
    async function rS(SS, HS) {
      const {
        module: gS
      } = await SH(SS, {
        retries: HS
      });
      return gS
    }
    async function SH(SS) {
      let HS = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
      return await zS(SS, (0, XS.c)(SS.name), HS)
    }
  },
  6819: (SS, HS, gS) => {
    gS.d(HS, {
      c: () => xS
    });
    var tS = gS(3030);
    const bS = {
      bloxd_wasm: () => "ca276a159dbc87fa5fb24bce01c600e017686becb2aec4d2d8c3ce9d9be10286",
      bloxd_wasm_client: () => "78d650a75a894f26dfff12d13178b3b18625b3ca51d6ff43ca76c7c6a545160e",
      bloxd_wasm_workers: () => "141545174c96a6a56bdd55b96874db592d9aa0421d29d01fc5f13e010772908e",
      bloxd_wasm_models: () => "f9978bc5a15af3d00b08cdd71f12902b1d7af465ab38552c337a8dbca894f2ad",
      bloxd_wasm_webgpu: () => "b036ba0a8b10236966685420835363e85775cab4add8bde3fee2aab6dab3eedc",
      bloxd_wasm_webgl: () => "f94a6bd176e034f73eb9d8633ef96f3a4c2ba3c58f8f946158bfc25489809a0e",
      bloxd_wasm_webgl1: () => "e1bef365f7d6b4c1345c3d7a59fb7d8e9059890b44c25962f6eefa2875a0d8ba",
      bloxd_wasm_replay: () => "1cd9ae019549ed07be1080a40e72119ca1530d917a5e7c4bff7919777b0d7cc7",
      bloxd_wasm_recorder: () => "9bf6273ff6c7cd97e192adea241330701cc74623c7e79a51cf18981bf754ac45",
      bloxd_wasm_anim: () => "e9f60e55d6a938bae2c0cab139b5bc6a9a4c4b1abe3489fe2eaff4a7709eea4a",
      bloxd_wasm_textures: () => "b1d909a0a1a9dae74a5159a0e981ac598963b92321ef4cc808ac39c91a481383",
      bloxd_wasm_shader_pack: () => "2cc8a962c1c16c3304b235a366c2decc6556fba05a1b6ce886e0064dd54faac6"
    };
    var XS = gS(4812);

    function xS(SS) {
      const HS = Object.prototype.hasOwnProperty.call(bS, SS) ? bS[SS]() : void 0;
      if (void 0 !== HS) return {
        sha256: HS,
        onMismatch: XS.D
      };
      throw new tS.h(`${SS} has no release digest, so this build refuses it`)
    }
  },
  6832: (SS, HS, gS) => {
    gS.d(HS, {
      c: () => tS,
      d: () => xS,
      e: () => NS,
      f: () => bS,
      h: () => XS
    });
    const tS = ["terrain", "liquid", "model"];

    function bS() {
      const SS = [];
      for (const HS of [!1, !0])
        for (const gS of tS) SS.push({
          strict: HS,
          program: gS
        });
      return SS
    }

    function XS(SS) {
      return `${SS.strict?"strict":"allow"}.${SS.program}`
    }

    function xS(SS) {
      return !SS.hooks.vertex && !SS.hooks.surface && !SS.hooks.light
    }

    function NS(SS, HS) {
      return "off" !== HS && (null === SS || SS.some((SS => SS.key.strict === ("strict" === HS) && !xS(SS))))
    }
  }
};
Object.freeze(modules);
for (const SS in modules) Object.freeze(modules[SS]);