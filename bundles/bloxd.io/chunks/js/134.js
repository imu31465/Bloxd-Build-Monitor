export const id = 134;
export const ids = [134];
export const modules = {
  38736: (DD, zD, wD) => {
    wD.d(zD, {
      b: () => cD,
      f: () => AD,
      i: () => UD,
      j: () => BD,
      k: () => RD,
      n: () => gD,
      p: () => fD
    });
    var pD = wD(330),
      sD = wD(1727);
    const KD = "A valid external Instance reference no longer exists.",
      rD = [
        [1e4, "<10s", "lt10s"],
        [6e4, "<1m", "lt1m"],
        [3e5, "<5m", "lt5m"],
        [18e5, "<30m", "lt30m"],
        [1 / 0, "30m+", "ge30m"]
      ],
      LD = [
        [1e3, "lt1s"],
        [2e3, "lt2s"],
        [5e3, "lt5s"],
        [1e4, "lt10s"],
        [3e4, "lt30s"],
        [1 / 0, "ge30s"]
      ];
    const cD = {
      WebGPU: "WebGPU device lost",
      WebGL2: "WebGL2 context lost"
    };

    function gD(DD, zD) {
      return DD ? "frames_refused" : arguments.length > 2 && void 0 !== arguments[2] && arguments[2] ? "browser_destroyed" : function(DD) {
        var zD;
        const wD = null !== (zD = /Device removed reason: (?!S_OK)([A-Z][A-Z0-9_]+)/.exec(DD)) && void 0 !== zD ? zD : /failed with ([A-Z][A-Z0-9_]+)/.exec(DD);
        return wD ? wD[1] : DD.includes(KD) ? "gpu_process_lost" : "other"
      }(zD)
    }

    function RD(DD) {
      return `${(null===DD||void 0===DD?void 0:DD.vendor)||"unknown vendor"} ${(null===DD||void 0===DD?void 0:DD.architecture)||"unknown architecture"}`
    }

    function AD(DD) {
      return GD(DD)[1]
    }

    function UD(DD) {
      return GD(DD)[2]
    }

    function fD(DD, zD, wD) {
      const sD = (0, pD.e)(),
        KD = null !== sD && sD >= zD,
        rD = document.hidden ? "hidden" : KD ? "shown" : "visible",
        LD = KD ? wD - sD : null;
      return {
        page: null === LD ? rD : `${rD}${AD(LD)}`,
        code: `${DD}_${null===LD?rD:`${rD}_${UD(LD)}`}_${ID(wD)}`
      }
    }

    function ID(DD) {
      if ((0, sD.e)()) return "ad_open";
      const zD = (0, sD.c)();
      return null === zD ? "ad_none" : `ad_${UD(DD-zD.endedAt)}_${zD.pageHid?"h":"v"}`
    }

    function BD(DD) {
      return hD(LD, DD)[1]
    }

    function GD(DD) {
      return hD(rD, DD)
    }

    function hD(DD, zD) {
      var wD;
      return null !== (wD = DD.find((DD => {
        let [wD] = DD;
        return zD < wD
      }))) && void 0 !== wD ? wD : DD[DD.length - 1]
    }
  },
  39038: (DD, zD, wD) => {
    wD.d(zD, {
      b: () => cD
    });
    var pD = wD(8901),
      sD = wD(36486),
      KD = wD(39042);
    const rD = {
        seat: "seat_timeout",
        socket_unopened: "socket_timeout_unopened",
        socket: "socket_timeout"
      },
      LD = {
        seat: "seat_lost",
        socket_unopened: "socket_unopened",
        socket: "socket_closed"
      };

    function cD(DD, zD) {
      if (DD instanceof sD.c) return {
        at: rD[zD],
        code: 0
      };
      const wD = (0, pD.g)(DD),
        cD = "number" === typeof wD ? wD : 0;
      return null !== (0, KD.j)(cD).name ? {
        at: "refused",
        code: cD
      } : {
        at: LD[zD],
        code: cD
      }
    }
  },
  8901: (DD, zD, wD) => {
    wD.d(zD, {
      e: () => KD,
      g: () => rD,
      i: () => LD,
      m: () => gD,
      q: () => cD
    });
    var pD = wD(197),
      sD = wD(4657);

    function KD(DD) {
      return rD(DD) === pD.e.gameOrPluginOnPlayerAuthRejected.code
    }

    function rD(DD) {
      return "object" === typeof DD && null !== DD ? DD.code : void 0
    }

    function LD(DD) {
      var zD;
      return null !== (zD = Object.keys(sD.b).find((zD => sD.b[zD] === DD))) && void 0 !== zD ? zD : null
    }

    function cD(DD) {
      return "notWhitelisted" === DD ? "customLobby:cantJoinNotWhitelistedTitle" : "customLobby:cantJoinWorld"
    }
    const gD = {
      private: "customLobby:cantJoinPrivate",
      notWhitelisted: "customLobby:cantJoinNotWhitelisted",
      banned: "customLobby:cantJoinBanned",
      adminLocked: "customLobby:cantJoinAdminLocked"
    }
  },
  39042: (DD, zD, wD) => {
    wD.d(zD, {
      b: () => sD,
      c: () => KD,
      g: () => LD,
      j: () => RD,
      n: () => cD,
      p: () => rD
    });
    var pD = wD(197);
    const sD = 3e3,
      KD = 15e3;

    function rD(DD) {
      const zD = DD.endsWith(pD.j);
      return {
        text: (zD ? DD.slice(0, -pD.j.length) : DD) || null,
        dropsCache: zD
      }
    }
    const LD = "Either your internet isn't working or this is a bug.";

    function cD(DD, zD) {
      const wD = RD(DD);
      return null !== wD.name && "" === pD.e[wD.name].text && null !== zD ? zD : wD.reason
    }
    const gD = "You were removed from the game.";

    function RD(DD) {
      var zD;
      let wD = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
      const sD = null !== (zD = Object.keys(pD.e).find((zD => pD.e[zD].code === DD))) && void 0 !== zD ? zD : null;
      if (null === sD) return {
        code: DD,
        name: sD,
        reason: null !== wD && void 0 !== wD ? wD : `${LD}\nCode: ${DD}`,
        canReconnect: !1,
        automaticallyReconnect: !1,
        requiresRefresh: !1
      };
      const {
        text: KD,
        canReconnect: rD = !1
      } = pD.e[sD], cD = DD === pD.e.outdatedVersion.code || DD === pD.e.loadRecaptchaError.code;
      return {
        code: DD,
        name: sD,
        reason: "" !== KD ? KD : null !== wD && void 0 !== wD ? wD : DD === pD.e.gameOrPluginKick.code ? gD : `Code: ${DD}`,
        canReconnect: rD,
        automaticallyReconnect: DD === pD.e.customGameUpdated.code || DD === pD.e.duplicateLobbyNameError.code,
        requiresRefresh: cD
      }
    }
  },
  36808: (DD, zD, wD) => {
    function pD(DD) {
      return "fetch" === DD || "timeout" === DD || "integrity" === DD ? "download" : "browser"
    }
    wD.d(zD, {
      b: () => sD,
      d: () => rD,
      h: () => cD,
      i: () => LD,
      k: () => pD,
      l: () => KD
    });
    const sD = "https://discord.gg/playbloxd";

    function KD(DD) {
      return "download" === DD ? {
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

    function rD(DD, zD) {
      return {
        icon: "face-dizzy",
        title: "wasmScreens:crashTitle",
        help: zD ? "wasmScreens:crashHelp" : "wasmScreens:crashHelpNoDiscord",
        helpValues: {
          code: DD.code
        },
        discordLink: zD,
        confirm: "general:reload",
        cancel: "general:back"
      }
    }

    function LD() {
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

    function cD(DD, zD, wD) {
      return {
        icon: "wifi",
        title: "wasmScreens:disconnectedTitle",
        help: wD ? "wasmScreens:reconnectingHelp" : "wasmScreens:disconnectedHelp",
        helpValues: {
          reason: DD.reason
        },
        discordLink: null === DD.name,
        confirm: zD ? "general:reconnect" : DD.requiresRefresh ? "general:reload" : "general:ok",
        cancel: null
      }
    }
  },
  36290: (DD, zD, wD) => {
    wD.d(zD, {
      b: () => tD,
      f: () => qD,
      j: () => YD,
      m: () => vD
    });
    var pD = wD(2861),
      sD = wD(2874),
      KD = wD(6653),
      rD = wD(4722),
      LD = wD(2872),
      cD = wD(2868);
    const gD = "bloxd-wasmDownloaded",
      RD = 12;

    function AD(DD) {
      return DD.pathname.slice(DD.pathname.lastIndexOf("/") + 1)
    }

    function UD() {
      try {
        if ("undefined" === typeof localStorage) return null;
        const DD = JSON.parse(localStorage.getItem(gD) ?? "[]");
        return Array.isArray(DD) ? DD.filter((DD => "string" === typeof DD)) : []
      } catch (DD) {
        return console.warn("Bloxd wasm: the record of downloaded modules could not be read: asking the HTTP cache for none", DD), null
      }
    }
    const fD = Reflect.apply,
      ID = "undefined" === typeof Worker ? void 0 : Worker,
      BD = ID?.prototype.postMessage,
      GD = ID?.prototype.terminate,
      hD = "undefined" === typeof EventTarget ? void 0 : EventTarget.prototype.addEventListener,
      nD = "undefined" === typeof MessageEvent ? void 0 : Object.getOwnPropertyDescriptor(MessageEvent.prototype, "data")?.get,
      MD = Object.getOwnPropertyDescriptor(Object.getPrototypeOf(Uint8Array.prototype), "buffer").get,
      OD = function() {
        try {
          return (0, rD.j)(ID, "Worker", !0) && (0, rD.j)(BD, "postMessage") && (0, rD.j)(GD, "terminate") && (0, rD.j)(MD, "buffer") && void 0 !== hD && void 0 !== nD
        } catch {
          return !1
        }
      }();
    let JD = !1;

    function ED() {
      return OD && !JD
    }
    class QD {
      worker = null;
      failed = !1;
      constructor() {
        if (ED()) try {
          this.worker = VD(), fD(hD, this.worker, ["error", () => {
            this.failed = !0
          }])
        } catch {
          this.stop()
        }
      }
      take() {
        const DD = this.worker;
        if (this.worker = null, null !== DD && this.failed) throw fD(GD, DD, []), new Error("it did not run");
        return DD
      }
      stop() {
        const DD = this.worker;
        this.worker = null, null !== DD && fD(GD, DD, [])
      }
    }
    class XD {
      decoded;
      worker;
      reject;
      constructor(DD, zD, wD, pD, KD) {
        try {
          this.worker = KD?.take() ?? VD()
        } catch (gD) {
          throw JD = !0, new Error(`The zstd decoder's worker did not start: ${(0,LD.d)(gD)}`)
        }
        const rD = this.worker;
        this.decoded = (0, sD.k)(((zD, sD) => {
          this.reject = sD;
          const KD = (DD, zD) => {
            fD(hD, rD, [DD, zD])
          };
          KD("message", (DD => {
            pD();
            try {
              const pD = fD(nD, DD, []);
              if (!0 === pD) zD();
              else {
                if ("string" === typeof pD) throw pD.startsWith(LD.c) && (JD = !0), new Error(pD);
                wD(pD, fD(cD.u, pD, []))
              }
            } catch (gD) {
              sD(gD)
            }
          })), KD("error", (() => {
            JD = !0, sD(new Error("The zstd decoder's worker did not run"))
          })), KD("messageerror", (() => {
            sD(new Error(`${DD}'s decoder sent a piece that could not be read`))
          }))
        })), (0, cD.R)(this.decoded), fD(BD, rD, [
          [DD, zD]
        ])
      }
      push(DD) {
        fD(BD, this.worker, [DD, [fD(MD, DD, [])]])
      }
      end() {
        fD(BD, this.worker, [null])
      }
      markWorkerFailed() {
        JD = !0
      }
      fail(DD) {
        this.reject(DD), this.terminate()
      }
      terminate() {
        fD(GD, this.worker, [])
      }
    }

    function VD() {
      if (globalThis.Worker !== ID) throw new Error("Worker is not the one the page loaded with");
      return new Worker(new URL(wD.p + wD.u(67), wD.b), {
        name: "wasmZstdDecoder",
        type: "module"
      })
    }
    const PD = Reflect.apply,
      CD = ArrayBuffer,
      xD = "undefined" === typeof Response ? void 0 : Response,
      TD = "undefined" === typeof ReadableStream ? void 0 : ReadableStream,
      bD = function() {
        let DD;
        void 0 !== TD && new TD({
          __proto__: null,
          start(zD) {
            const {
              enqueue: wD,
              close: pD,
              error: sD
            } = Object.getPrototypeOf(zD);
            DD = {
              enqueue: wD,
              close: pD,
              error: sD
            }
          }
        }, {
          __proto__: null
        });
        return DD
      }(),
      jD = function() {
        try {
          return "undefined" !== typeof WebAssembly && "function" === typeof WebAssembly.compileStreaming && void 0 !== bD && (0, rD.j)(xD, "Response", !0) && (0, rD.j)(TD, "ReadableStream", !0) && (0, rD.j)(bD.enqueue, "enqueue") && (0, rD.j)(bD.close, "close") && (0, rD.j)(bD.error, "error") && (0, rD.j)(cD.U, "body") && (0, rD.j)(cD.H, "getReader") && (0, rD.j)(cD.T, "read")
        } catch {
          return !1
        }
      }();
    async function dD(DD, zD, wD, pD, KD, rD, gD) {
      const RD = new CD(zD),
        {
          controller: AD,
          compiled: UD
        } = function(DD) {
          try {
            let DD;
            const zD = new TD({
                __proto__: null,
                start(zD) {
                  DD = zD
                }
              }, {
                __proto__: null
              }),
              wD = new xD(zD, {
                __proto__: null,
                headers: {
                  __proto__: null,
                  "Content-Type": "application/wasm"
                }
              });
            return {
              controller: DD,
              compiled: (0, cD.R)((0, cD.w)((0, cD.db)(wD)))
            }
          } catch (zD) {
            throw new Error(`${DD} could not be streamed into a compile: ${(0,LD.d)(zD)}`)
          }
        }(DD),
        {
          enqueue: fD,
          close: ID,
          error: BD
        } = bD,
        GD = DD => {
          try {
            PD(BD, AD, [DD])
          } catch {}
        };
      let hD = 0;
      const nD = (wD, pD) => {
        if (hD + pD > zD) throw new Error(`${DD} decoded past its module's ${zD} bytes`);
        PD(cD.Y, new cD.o(RD), [new cD.o(wD), hD]);
        try {
          PD(fD, AD, [new cD.o(RD, hD, pD)])
        } catch {}
        hD += pD
      };
      let MD, OD;
      try {
        MD = new XD(DD, zD, nD, pD, gD)
      } catch (VD) {
        throw GD(VD), VD
      }
      const JD = DD => {
        MD.fail(DD), void 0 !== OD && SD(OD)
      };
      let ED = !1;
      wD.addEventListener("abort", (() => {
        ED && MD.markWorkerFailed(), JD(new Error(`${DD} stalled`))
      }), {
        once: !0
      }), (0, sD.u)(UD, (() => {}), JD);
      try {
        let rD;
        try {
          rD = await fetch(DD, {
            signal: wD
          })
        } catch (VD) {
          throw new Error(`Fetching ${DD} failed: ${(0,LD.d)(VD)}`)
        }
        const {
          ok: gD,
          status: RD,
          body: AD
        } = function(DD, zD) {
          try {
            const {
              ok: DD,
              status: wD
            } = zD;
            return {
              ok: DD,
              status: wD,
              body: PD(cD.U, zD, [])
            }
          } catch {
            throw new Error(`${DD} came in a response a page script made`)
          }
        }(DD, rD);
        if (!gD) throw new Error(`Fetching ${DD} failed: HTTP ${RD}`);
        pD();
        const UD = PD(cD.H, AD, []);
        OD = UD;
        const fD = () => {
          SD(UD)
        };
        for ((0, sD.u)(MD.decoded, fD, fD);;) {
          let zD;
          try {
            zD = await PD(cD.T, UD, [])
          } catch (VD) {
            throw new Error(`Downloading ${DD} failed: ${(0,LD.d)(VD)}`)
          }
          if (zD.done) break;
          pD(), MD.push(zD.value)
        }
        if (ED = !0, MD.end(), await MD.decoded, KD(), hD !== zD) throw new Error(`${DD} ended before its module did`)
      } catch (VD) {
        throw GD(VD), JD(VD), VD
      }
      MD.terminate();
      try {
        PD(ID, AD, [])
      } catch {}
      const QD = await UD;
      return void 0 !== rD && await (0, cD.v)(DD, new cD.o(RD), {
        sha256: rD.sha256,
        onMismatch: () => {}
      }), QD
    }

    function SD(DD) {
      try {
        (0, cD.R)(DD.cancel())
      } catch {}
    }
    const iD = ".zst.bin",
      lD = 1e3;
    let WD = null;

    function ND(DD) {
      return WD ??= function() {
        const DD = new Map,
          zD = "bloxd_wasm_webgpu:5121192,bloxd_wasm_webgl:5503528,bloxd_wasm_webgl1:4839018,bloxd_wasm_workers:201241,bloxd_wasm_models:311531,bloxd_wasm_client:3704228";
        for (const wD of zD?.split(",") ?? []) {
          const [zD = "", pD] = wD.split(":"), sD = Number(pD);
          Number.isInteger(sD) && sD > 0 && DD.set(zD, sD)
        }
        return DD
      }(), WD.get(DD)
    }
    async function ZD(DD, zD) {
      let wD = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
      const pD = ND(DD.name);
      if (void 0 === pD) return yD(await kD(DD, zD, wD), "cold-wasm");
      const KD = jD ? new QD : null;
      let rD;
      try {
        if (gD = DD.url(), UD()?.includes(AD(gD)) && await async function(DD) {
            const zD = new AbortController;
            let wD;
            const pD = (0, sD.k)((DD => {
              wD = setTimeout((() => {
                zD.abort(), DD(null)
              }), lD)
            }));
            try {
              const wD = fetch(DD.href, {
                  cache: "only-if-cached",
                  mode: "same-origin",
                  signal: zD.signal
                }),
                KD = await (0, sD.r)([wD, pD]);
              return !!KD?.ok && ((0, cD.R)(KD.body.cancel()), !0)
            } catch {
              return !1
            } finally {
              clearTimeout(wD)
            }
          }(DD.url())) return KD?.stop(), await async function(DD, zD, wD, pD) {
          let sD = !1;
          const KD = wD && {
            sha256: wD.sha256,
            onMismatch: () => {
              sD = !0
            }
          };
          try {
            return yD(await kD(DD, KD, pD), "warm")
          } catch (rD) {
            const pD = await mD(DD, zD, wD, null);
            if (null === pD) throw sD && wD.onMismatch(), rD;
            return console.warn(`${DD.url().href} from the HTTP cache failed: ${(0,LD.d)(rD)}: loaded its copy instead`), yD(pD, sD ? "warm-refused" : "warm-broken")
          }
        }(DD, pD, zD, wD);
        rD = await mD(DD, pD, zD, KD)
      } finally {
        KD?.stop()
      }
      var gD;
      return null !== rD ? yD(rD, "cold-worker") : yD(await kD(DD, zD, wD), "cold-wasm")
    }

    function yD(DD, zD) {
      return {
        __proto__: null,
        module: DD,
        path: zD
      }
    }

    function kD(DD, zD, wD) {
      return void 0 === ND(DD.name) ? (0, cD.B)(DD.url(), zD, wD) : (0, cD.B)(DD.url(), zD, {
        ...wD,
        hideThen: !0,
        onDownloaded: () => {
          ! function(DD) {
            const zD = UD();
            if (null === zD) return;
            const wD = AD(DD),
              pD = zD.filter((DD => DD !== wD));
            pD.push(wD);
            try {
              localStorage.setItem(gD, JSON.stringify(pD.slice(-RD)))
            } catch (sD) {
              console.warn(`Bloxd wasm: ${wD} could not be recorded as downloaded: a later join asks the HTTP cache nothing for it`, sD)
            }
          }(DD.url()), wD.onDownloaded?.()
        }
      })
    }
    async function mD(DD, zD, wD, pD) {
      if (!jD || !ED()) return null;
      const sD = DD.url(),
        KD = `${sD.href}${iD}`;
      try {
        return await (0, cD.ab)(KD, ((DD, sD, rD) => dD(KD, zD, DD, sD, rD, wD, pD)))
      } catch (rD) {
        return console.warn(`${(0,LD.d)(rD)}: loading ${sD.href} instead`), null
      }
    }
    let eD = null,
      oD = !1;
    const aD = new Map,
      uD = new Map;

    function vD(DD, zD, wD) {
      return null === eD ? eD = FD(DD, zD, wD?.memoryMaximumBytes) : DD !== eD.build ? console.warn(`Bloxd wasm: ${DD.name} was asked for after ${eD.build.name} started loading, which this thread keeps`) : zD.name !== eD.workers.name && console.warn(`Bloxd wasm: ${zD.name} was asked for workers after ${eD.workers.name}, which this thread keeps`), wD?.reloadFailedDownload && !oD && (0, pD.$)() && (oD = !0, eD = FD(eD.build, eD.workers, eD.memoryMaximumBytes)), eD.loaded
    }

    function tD(DD, zD) {
      if (null !== eD) return (0, sD.h)([]);
      const wD = DD.filter((DD => !aD.has(DD.name))).map((DD => {
        const wD = new AbortController,
          pD = {
            compiled: kD(DD, (0, KD.d)(DD.name), {
              priority: zD,
              sw: wD.signal,
              onDownloaded: () => {
                pD.downloaded = !0
              },
              retries: {
                onRetry: () => {
                  pD.downloaded = !1, null !== eD && wD.abort()
                }
              }
            }),
            cancel: wD,
            downloaded: !1
          };
        return aD.set(DD.name, pD), (0, sD.k)((zD => {
          (0, sD.u)(pD.compiled, (() => {
            pD.downloaded = !0, zD()
          }), (pD => {
            wD.signal.aborted || console.warn(`Bloxd wasm: ${DD.name}'s compile ahead of the load failed: the load compiles it afresh`, pD), zD()
          }))
        }))
      }));
      return (0, sD.h)(wD)
    }

    function FD(DD, zD, wD) {
      const KD = (0, pD.F)((async () => {
        (0, rD.E)(), uD.clear();
        const wD = HD(DD),
          pD = zD.name === DD.name ? wD : HD(zD);
        for (const {
            cancel: DD
          }
          of aD.values()) DD.abort();
        aD.clear(), await (0, sD.h)([wD, pD]);
        const KD = await wD,
          LD = await pD;
        return (0, rD.E)(), {
          module: KD,
          workerModule: LD
        }
      }), DD, wD);
      return {
        build: DD,
        workers: zD,
        memoryMaximumBytes: wD,
        loaded: KD
      }
    }

    function YD(DD) {
      return uD.get(DD)
    }

    function HD(DD) {
      const zD = performance.now(),
        wD = aD.get(DD.name);
      aD.delete(DD.name);
      const pD = !0 === wD?.downloaded ? wD : void 0;
      return void 0 !== wD && void 0 === pD && wD.cancel.abort(), (0, sD.k)(((wD, KD) => {
        const rD = (pD, sD) => {
            uD.set(DD.name, {
              path: sD,
              ms: performance.now() - zD
            }), wD(pD)
          },
          LD = () => {
            (0, sD.u)(Dz(DD), (DD => {
              let {
                module: zD,
                path: wD
              } = DD;
              rD(zD, wD)
            }), KD)
          };
        void 0 === pD ? LD() : (0, sD.u)(pD.compiled, (DD => {
          rD(DD, "ahead")
        }), LD)
      }))
    }
    async function qD(DD, zD) {
      const {
        module: wD
      } = await Dz(DD, {
        retries: zD
      });
      return wD
    }
    async function Dz(DD) {
      let zD = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
      return await ZD(DD, (0, KD.d)(DD.name), zD)
    }
  },
  6653: (DD, zD, wD) => {
    wD.d(zD, {
      d: () => rD
    });
    var pD = wD(2868);
    const sD = {
      bloxd_wasm: () => "65e53edc5e3e962e1a92a587d8a28027f8eb8bbf9d122ae3c4664a5d1e3eeb52",
      bloxd_wasm_client: () => "8bc7382052570456e32df38bb06cf837a4cdcf0c6efeb71183c9d9d96efdecc2",
      bloxd_wasm_workers: () => "9d62ece3db9e2837185fc5cbad53d14e1aa611299a39cfe5dd4f80c692bc8153",
      bloxd_wasm_models: () => "d952d307f65587ac75621c390045d763a956e5786dbdece0affe80fd6c11a572",
      bloxd_wasm_webgpu: () => "aaf47b22bd97d7f9059c5cc77097acb8001c433a0191aa99b3b272ad0af40d0c",
      bloxd_wasm_webgl: () => "758269d3a7396a32bdaeee633b3c45cd4d1efb4fd30ca2bacc7ee762494718ff",
      bloxd_wasm_webgl1: () => "e473a9c2912b1b2ebd1af57ce23061b2484e5ad7c6b3bb8302c55025cbdc6150",
      bloxd_wasm_replay: () => "fb6a7b64a8768ff2eb5122b936925ed35cbdcfc5efaf1bf3b7d53b1f4d483eae",
      bloxd_wasm_recorder: () => "b5295674c11fb730f85cc5f9aef22b1971a45cc8f95ff014897be3749114a35e",
      bloxd_wasm_anim: () => "2108b3f685a0b7e36780befaa10a018b8b914c00b52465c4d8de81cd4aaad1b7",
      bloxd_wasm_textures: () => "441f3f36c1158de1a8f992401057b7b30a10760b00006c152617c9a76cf0dbfa",
      bloxd_wasm_shader_pack: () => "504138fb584a53bf18bce9d737fbad86034e70bedc89181a53adee1dec66ef20"
    };
    var KD = wD(4722);

    function rD(DD) {
      const zD = Object.prototype.hasOwnProperty.call(sD, DD) ? sD[DD]() : void 0;
      if (void 0 !== zD) return {
        sha256: zD,
        onMismatch: KD.B
      };
      throw new pD.l(`${DD} has no release digest, so this build refuses it`)
    }
  },
  6678: (DD, zD, wD) => {
    wD.d(zD, {
      c: () => pD,
      d: () => rD,
      f: () => LD,
      h: () => sD,
      l: () => KD
    });
    const pD = ["terrain", "liquid", "model"];

    function sD() {
      const DD = [];
      for (const zD of [!1, !0])
        for (const wD of pD) DD.push({
          strict: zD,
          program: wD
        });
      return DD
    }

    function KD(DD) {
      return `${DD.strict?"strict":"allow"}.${DD.program}`
    }

    function rD(DD) {
      return !DD.hooks.vertex && !DD.hooks.surface && !DD.hooks.light
    }

    function LD(DD, zD) {
      return "off" !== zD && (null === DD || DD.some((DD => DD.key.strict === ("strict" === zD) && !rD(DD))))
    }
  }
};
Object.freeze(modules);
for (const DD in modules) Object.freeze(modules[DD]);