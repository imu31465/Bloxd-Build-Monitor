export const id = 134;
export const ids = [134];
export const modules = {
  38592: (CC, zC, ZC) => {
    ZC.d(zC, {
      c: () => oC,
      g: () => WC,
      k: () => SC,
      o: () => FC,
      r: () => qC,
      u: () => MC
    });
    var QC = ZC(304),
      wC = ZC(1637);
    const bC = "A valid external Instance reference no longer exists.",
      nC = [
        [1e4, "<10s", "lt10s"],
        [6e4, "<1m", "lt1m"],
        [3e5, "<5m", "lt5m"],
        [18e5, "<30m", "lt30m"],
        [1 / 0, "30m+", "ge30m"]
      ],
      fC = [
        [1e3, "lt1s"],
        [2e3, "lt2s"],
        [5e3, "lt5s"],
        [1e4, "lt10s"],
        [3e4, "lt30s"],
        [1 / 0, "ge30s"]
      ];
    const oC = {
      WebGPU: "WebGPU device lost",
      WebGL2: "WebGL2 context lost"
    };

    function qC(CC, zC) {
      return CC ? "frames_refused" : arguments.length > 2 && void 0 !== arguments[2] && arguments[2] ? "browser_destroyed" : function(CC) {
        var zC;
        const ZC = null !== (zC = /Device removed reason: (?!S_OK)([A-Z][A-Z0-9_]+)/.exec(CC)) && void 0 !== zC ? zC : /failed with ([A-Z][A-Z0-9_]+)/.exec(CC);
        return ZC ? ZC[1] : CC.includes(bC) ? "gpu_process_lost" : "other"
      }(zC)
    }

    function FC(CC) {
      return `${(null===CC||void 0===CC?void 0:CC.vendor)||"unknown vendor"} ${(null===CC||void 0===CC?void 0:CC.architecture)||"unknown architecture"}`
    }

    function WC(CC) {
      return pC(CC)[1]
    }

    function NC(CC) {
      return pC(CC)[2]
    }

    function MC(CC, zC, ZC) {
      const wC = (0, QC.f)(),
        bC = null !== wC && wC >= zC,
        nC = document.hidden ? "hidden" : bC ? "shown" : "visible",
        fC = bC ? ZC - wC : null;
      return {
        page: null === fC ? nC : `${nC}${WC(fC)}`,
        code: `${CC}_${null===fC?nC:`${nC}_${NC(fC)}`}_${gC(ZC)}`
      }
    }

    function gC(CC) {
      if ((0, wC.f)()) return "ad_open";
      const zC = (0, wC.b)();
      return null === zC ? "ad_none" : `ad_${NC(CC-zC.endedAt)}_${zC.pageHid?"h":"v"}`
    }

    function SC(CC) {
      return PC(fC, CC)[1]
    }

    function pC(CC) {
      return PC(nC, CC)
    }

    function PC(CC, zC) {
      var ZC;
      return null !== (ZC = CC.find((CC => {
        let [ZC] = CC;
        return zC < ZC
      }))) && void 0 !== ZC ? ZC : CC[CC.length - 1]
    }
  },
  38898: (CC, zC, ZC) => {
    ZC.d(zC, {
      d: () => oC
    });
    var QC = ZC(8897),
      wC = ZC(36369),
      bC = ZC(38907);
    const nC = {
        seat: "seat_timeout",
        socket_unopened: "socket_timeout_unopened",
        socket: "socket_timeout"
      },
      fC = {
        seat: "seat_lost",
        socket_unopened: "socket_unopened",
        socket: "socket_closed"
      };

    function oC(CC, zC) {
      if (CC instanceof wC.f) return {
        at: nC[zC],
        code: 0
      };
      const ZC = (0, QC.e)(CC),
        oC = "number" === typeof ZC ? ZC : 0;
      return null !== (0, bC.j)(oC).name ? {
        at: "refused",
        code: oC
      } : {
        at: fC[zC],
        code: oC
      }
    }
  },
  8897: (CC, zC, ZC) => {
    ZC.d(zC, {
      b: () => bC,
      e: () => nC,
      i: () => fC,
      m: () => qC,
      n: () => oC
    });
    var QC = ZC(184),
      wC = ZC(4562);

    function bC(CC) {
      return nC(CC) === QC.e.gameOrPluginOnPlayerAuthRejected.code
    }

    function nC(CC) {
      return "object" === typeof CC && null !== CC ? CC.code : void 0
    }

    function fC(CC) {
      var zC;
      return null !== (zC = Object.keys(wC.c).find((zC => wC.c[zC] === CC))) && void 0 !== zC ? zC : null
    }

    function oC(CC) {
      return "notWhitelisted" === CC ? "customLobby:cantJoinNotWhitelistedTitle" : "customLobby:cantJoinWorld"
    }
    const qC = {
      private: "customLobby:cantJoinPrivate",
      notWhitelisted: "customLobby:cantJoinNotWhitelisted",
      banned: "customLobby:cantJoinBanned",
      adminLocked: "customLobby:cantJoinAdminLocked"
    }
  },
  38907: (CC, zC, ZC) => {
    ZC.d(zC, {
      d: () => wC,
      e: () => bC,
      f: () => fC,
      j: () => FC,
      k: () => oC,
      o: () => nC
    });
    var QC = ZC(184);
    const wC = 3e3,
      bC = 15e3;

    function nC(CC) {
      const zC = CC.endsWith(QC.k);
      return {
        text: (zC ? CC.slice(0, -QC.k.length) : CC) || null,
        dropsCache: zC
      }
    }
    const fC = "Either your internet isn't working or this is a bug.";

    function oC(CC, zC) {
      const ZC = FC(CC);
      return null !== ZC.name && "" === QC.e[ZC.name].text && null !== zC ? zC : ZC.reason
    }
    const qC = "You were removed from the game.";

    function FC(CC) {
      var zC;
      let ZC = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
      const wC = null !== (zC = Object.keys(QC.e).find((zC => QC.e[zC].code === CC))) && void 0 !== zC ? zC : null;
      if (null === wC) return {
        code: CC,
        name: wC,
        reason: null !== ZC && void 0 !== ZC ? ZC : `${fC}\nCode: ${CC}`,
        canReconnect: !1,
        automaticallyReconnect: !1,
        requiresRefresh: !1
      };
      const {
        text: bC,
        canReconnect: nC = !1
      } = QC.e[wC], oC = CC === QC.e.outdatedVersion.code || CC === QC.e.loadRecaptchaError.code;
      return {
        code: CC,
        name: wC,
        reason: "" !== bC ? bC : null !== ZC && void 0 !== ZC ? ZC : CC === QC.e.gameOrPluginKick.code ? qC : `Code: ${CC}`,
        canReconnect: nC,
        automaticallyReconnect: CC === QC.e.customGameUpdated.code || CC === QC.e.duplicateLobbyNameError.code,
        requiresRefresh: oC
      }
    }
  },
  36712: (CC, zC, ZC) => {
    function QC(CC) {
      return "fetch" === CC || "timeout" === CC || "integrity" === CC ? "download" : "browser"
    }
    ZC.d(zC, {
      b: () => wC,
      c: () => nC,
      g: () => oC,
      j: () => fC,
      m: () => QC,
      p: () => bC
    });
    const wC = "https://discord.gg/playbloxd";

    function bC(CC) {
      return "download" === CC ? {
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

    function nC(CC, zC) {
      return {
        icon: "face-dizzy",
        title: "wasmScreens:crashTitle",
        help: zC ? "wasmScreens:crashHelp" : "wasmScreens:crashHelpNoDiscord",
        helpValues: {
          code: CC.code
        },
        discordLink: zC,
        confirm: "general:reload",
        cancel: "general:back"
      }
    }

    function fC() {
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

    function oC(CC, zC, ZC) {
      return {
        icon: "wifi",
        title: "wasmScreens:disconnectedTitle",
        help: ZC ? "wasmScreens:reconnectingHelp" : "wasmScreens:disconnectedHelp",
        helpValues: {
          reason: CC.reason
        },
        discordLink: null === CC.name,
        confirm: zC ? "general:reconnect" : CC.requiresRefresh ? "general:reload" : "general:ok",
        cancel: null
      }
    }
  },
  36201: (CC, zC, ZC) => {
    ZC.d(zC, {
      b: () => UC,
      d: () => VC,
      g: () => OC,
      h: () => LC
    });
    var QC = ZC(2848),
      wC = ZC(2871),
      bC = ZC(6616),
      nC = ZC(4635),
      fC = ZC(2862),
      oC = ZC(2856);
    const qC = "bloxd-wasmDownloaded",
      FC = 12;

    function WC(CC) {
      return CC.pathname.slice(CC.pathname.lastIndexOf("/") + 1)
    }

    function NC() {
      try {
        if ("undefined" === typeof localStorage) return null;
        const CC = JSON.parse(localStorage.getItem(qC) ?? "[]");
        return Array.isArray(CC) ? CC.filter((CC => "string" === typeof CC)) : []
      } catch (CC) {
        return console.warn("Bloxd wasm: the record of downloaded modules could not be read: asking the HTTP cache for none", CC), null
      }
    }
    const MC = Reflect.apply,
      gC = "undefined" === typeof Worker ? void 0 : Worker,
      SC = gC?.prototype.postMessage,
      pC = gC?.prototype.terminate,
      PC = "undefined" === typeof EventTarget ? void 0 : EventTarget.prototype.addEventListener,
      GC = "undefined" === typeof MessageEvent ? void 0 : Object.getOwnPropertyDescriptor(MessageEvent.prototype, "data")?.get,
      RC = Object.getOwnPropertyDescriptor(Object.getPrototypeOf(Uint8Array.prototype), "buffer").get,
      AC = function() {
        try {
          return (0, nC.k)(gC, "Worker", !0) && (0, nC.k)(SC, "postMessage") && (0, nC.k)(pC, "terminate") && (0, nC.k)(RC, "buffer") && void 0 !== PC && void 0 !== GC
        } catch {
          return !1
        }
      }();
    let xC = !1;

    function JC() {
      return AC && !xC
    }
    class IC {
      worker = null;
      failed = !1;
      constructor() {
        if (JC()) try {
          this.worker = vC(), MC(PC, this.worker, ["error", () => {
            this.failed = !0
          }])
        } catch {
          this.stop()
        }
      }
      take() {
        const CC = this.worker;
        if (this.worker = null, null !== CC && this.failed) throw MC(pC, CC, []), new Error("it did not run");
        return CC
      }
      stop() {
        const CC = this.worker;
        this.worker = null, null !== CC && MC(pC, CC, [])
      }
    }
    class iC {
      decoded;
      worker;
      reject;
      constructor(CC, zC, ZC, QC, bC) {
        try {
          this.worker = bC?.take() ?? vC()
        } catch (qC) {
          throw xC = !0, new Error(`The zstd decoder's worker did not start: ${(0,fC.f)(qC)}`)
        }
        const nC = this.worker;
        this.decoded = (0, wC.f)(((zC, wC) => {
          this.reject = wC;
          const bC = (CC, zC) => {
            MC(PC, nC, [CC, zC])
          };
          bC("message", (CC => {
            QC();
            try {
              const QC = MC(GC, CC, []);
              if (!0 === QC) zC();
              else {
                if ("string" === typeof QC) throw QC.startsWith(fC.d) && (xC = !0), new Error(QC);
                ZC(QC, MC(oC.w, QC, []))
              }
            } catch (qC) {
              wC(qC)
            }
          })), bC("error", (() => {
            xC = !0, wC(new Error("The zstd decoder's worker did not run"))
          })), bC("messageerror", (() => {
            wC(new Error(`${CC}'s decoder sent a piece that could not be read`))
          }))
        })), (0, oC.X)(this.decoded), MC(SC, nC, [
          [CC, zC]
        ])
      }
      push(CC) {
        MC(SC, this.worker, [CC, [MC(RC, CC, [])]])
      }
      end() {
        MC(SC, this.worker, [null])
      }
      markWorkerFailed() {
        xC = !0
      }
      fail(CC) {
        this.reject(CC), this.terminate()
      }
      terminate() {
        MC(pC, this.worker, [])
      }
    }

    function vC() {
      if (globalThis.Worker !== gC) throw new Error("Worker is not the one the page loaded with");
      return new Worker(new URL(ZC.p + ZC.u(67), ZC.b), {
        name: "wasmZstdDecoder",
        type: "module"
      })
    }
    const eC = Reflect.apply,
      hC = ArrayBuffer,
      KC = "undefined" === typeof Response ? void 0 : Response,
      YC = "undefined" === typeof ReadableStream ? void 0 : ReadableStream,
      dC = function() {
        let CC;
        void 0 !== YC && new YC({
          __proto__: null,
          start(zC) {
            const {
              enqueue: ZC,
              close: QC,
              error: wC
            } = Object.getPrototypeOf(zC);
            CC = {
              enqueue: ZC,
              close: QC,
              error: wC
            }
          }
        }, {
          __proto__: null
        });
        return CC
      }(),
      mC = function() {
        try {
          return "undefined" !== typeof WebAssembly && "function" === typeof WebAssembly.compileStreaming && void 0 !== dC && (0, nC.k)(KC, "Response", !0) && (0, nC.k)(YC, "ReadableStream", !0) && (0, nC.k)(dC.enqueue, "enqueue") && (0, nC.k)(dC.close, "close") && (0, nC.k)(dC.error, "error") && (0, nC.k)(oC.$, "body") && (0, nC.k)(oC.R, "getReader") && (0, nC.k)(oC.Y, "read")
        } catch {
          return !1
        }
      }();
    async function HC(CC, zC, ZC, QC, bC, nC, qC) {
      const FC = new hC(zC),
        {
          controller: WC,
          compiled: NC
        } = function(CC) {
          try {
            let CC;
            const zC = new YC({
                __proto__: null,
                start(zC) {
                  CC = zC
                }
              }, {
                __proto__: null
              }),
              ZC = new KC(zC, {
                __proto__: null,
                headers: {
                  __proto__: null,
                  "Content-Type": "application/wasm"
                }
              });
            return {
              controller: CC,
              compiled: (0, oC.X)((0, oC.C)((0, oC.db)(ZC)))
            }
          } catch (zC) {
            throw new Error(`${CC} could not be streamed into a compile: ${(0,fC.f)(zC)}`)
          }
        }(CC),
        {
          enqueue: MC,
          close: gC,
          error: SC
        } = dC,
        pC = CC => {
          try {
            eC(SC, WC, [CC])
          } catch {}
        };
      let PC = 0;
      const GC = (ZC, QC) => {
        if (PC + QC > zC) throw new Error(`${CC} decoded past its module's ${zC} bytes`);
        eC(oC.bb, new oC.l(FC), [new oC.l(ZC), PC]);
        try {
          eC(MC, WC, [new oC.l(FC, PC, QC)])
        } catch {}
        PC += QC
      };
      let RC, AC;
      try {
        RC = new iC(CC, zC, GC, QC, qC)
      } catch (vC) {
        throw pC(vC), vC
      }
      const xC = CC => {
        RC.fail(CC), void 0 !== AC && EC(AC)
      };
      let JC = !1;
      ZC.addEventListener("abort", (() => {
        JC && RC.markWorkerFailed(), xC(new Error(`${CC} stalled`))
      }), {
        once: !0
      }), (0, wC.r)(NC, (() => {}), xC);
      try {
        let nC;
        try {
          nC = await fetch(CC, {
            signal: ZC
          })
        } catch (vC) {
          throw new Error(`Fetching ${CC} failed: ${(0,fC.f)(vC)}`)
        }
        const {
          ok: qC,
          status: FC,
          body: WC
        } = function(CC, zC) {
          try {
            const {
              ok: CC,
              status: ZC
            } = zC;
            return {
              ok: CC,
              status: ZC,
              body: eC(oC.$, zC, [])
            }
          } catch {
            throw new Error(`${CC} came in a response a page script made`)
          }
        }(CC, nC);
        if (!qC) throw new Error(`Fetching ${CC} failed: HTTP ${FC}`);
        QC();
        const NC = eC(oC.R, WC, []);
        AC = NC;
        const MC = () => {
          EC(NC)
        };
        for ((0, wC.r)(RC.decoded, MC, MC);;) {
          let zC;
          try {
            zC = await eC(oC.Y, NC, [])
          } catch (vC) {
            throw new Error(`Downloading ${CC} failed: ${(0,fC.f)(vC)}`)
          }
          if (zC.done) break;
          QC(), RC.push(zC.value)
        }
        if (JC = !0, RC.end(), await RC.decoded, bC(), PC !== zC) throw new Error(`${CC} ended before its module did`)
      } catch (vC) {
        throw pC(vC), xC(vC), vC
      }
      RC.terminate();
      try {
        eC(gC, WC, [])
      } catch {}
      const IC = await NC;
      return void 0 !== nC && await (0, oC.y)(CC, new oC.l(FC), {
        sha256: nC.sha256,
        onMismatch: () => {}
      }), IC
    }

    function EC(CC) {
      try {
        (0, oC.X)(CC.cancel())
      } catch {}
    }
    const lC = ".zst.bin",
      XC = 1e3;
    let cC = null;

    function uC(CC) {
      return cC ??= function() {
        const CC = new Map,
          zC = "bloxd_wasm_webgpu:5121311,bloxd_wasm_webgl:5500808,bloxd_wasm_webgl1:4836347,bloxd_wasm_workers:201241,bloxd_wasm_models:311531,bloxd_wasm_client:3704284";
        for (const ZC of zC?.split(",") ?? []) {
          const [zC = "", QC] = ZC.split(":"), wC = Number(QC);
          Number.isInteger(wC) && wC > 0 && CC.set(zC, wC)
        }
        return CC
      }(), cC.get(CC)
    }
    async function rC(CC, zC) {
      let ZC = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
      const QC = uC(CC.name);
      if (void 0 === QC) return sC(await TC(CC, zC, ZC), "cold-wasm");
      const bC = mC ? new IC : null;
      let nC;
      try {
        if (qC = CC.url(), NC()?.includes(WC(qC)) && await async function(CC) {
            const zC = new AbortController;
            let ZC;
            const QC = (0, wC.f)((CC => {
              ZC = setTimeout((() => {
                zC.abort(), CC(null)
              }), XC)
            }));
            try {
              const ZC = fetch(CC.href, {
                  cache: "only-if-cached",
                  mode: "same-origin",
                  signal: zC.signal
                }),
                bC = await (0, wC.n)([ZC, QC]);
              return !!bC?.ok && ((0, oC.X)(bC.body.cancel()), !0)
            } catch {
              return !1
            } finally {
              clearTimeout(ZC)
            }
          }(CC.url())) return bC?.stop(), await async function(CC, zC, ZC, QC) {
          let wC = !1;
          const bC = ZC && {
            sha256: ZC.sha256,
            onMismatch: () => {
              wC = !0
            }
          };
          try {
            return sC(await TC(CC, bC, QC), "warm")
          } catch (nC) {
            const QC = await aC(CC, zC, ZC, null);
            if (null === QC) throw wC && ZC.onMismatch(), nC;
            return console.warn(`${CC.url().href} from the HTTP cache failed: ${(0,fC.f)(nC)}: loaded its copy instead`), sC(QC, wC ? "warm-refused" : "warm-broken")
          }
        }(CC, QC, zC, ZC);
        nC = await aC(CC, QC, zC, bC)
      } finally {
        bC?.stop()
      }
      var qC;
      return null !== nC ? sC(nC, "cold-worker") : sC(await TC(CC, zC, ZC), "cold-wasm")
    }

    function sC(CC, zC) {
      return {
        __proto__: null,
        module: CC,
        path: zC
      }
    }

    function TC(CC, zC, ZC) {
      return void 0 === uC(CC.name) ? (0, oC.I)(CC.url(), zC, ZC) : (0, oC.I)(CC.url(), zC, {
        ...ZC,
        hideThen: !0,
        onDownloaded: () => {
          ! function(CC) {
            const zC = NC();
            if (null === zC) return;
            const ZC = WC(CC),
              QC = zC.filter((CC => CC !== ZC));
            QC.push(ZC);
            try {
              localStorage.setItem(qC, JSON.stringify(QC.slice(-FC)))
            } catch (wC) {
              console.warn(`Bloxd wasm: ${ZC} could not be recorded as downloaded: a later join asks the HTTP cache nothing for it`, wC)
            }
          }(CC.url()), ZC.onDownloaded?.()
        }
      })
    }
    async function aC(CC, zC, ZC, QC) {
      if (!mC || !JC()) return null;
      const wC = CC.url(),
        bC = `${wC.href}${lC}`;
      try {
        return await (0, oC.cb)(bC, ((CC, wC, nC) => HC(bC, zC, CC, wC, nC, ZC, QC)))
      } catch (nC) {
        return console.warn(`${(0,fC.f)(nC)}: loading ${wC.href} instead`), null
      }
    }
    let tC = null,
      DC = !1;
    const jC = new Map,
      yC = new Map;

    function LC(CC, zC, ZC) {
      return null === tC ? tC = BC(CC, zC, ZC?.memoryMaximumBytes) : CC !== tC.build ? console.warn(`Bloxd wasm: ${CC.name} was asked for after ${tC.build.name} started loading, which this thread keeps`) : zC.name !== tC.workers.name && console.warn(`Bloxd wasm: ${zC.name} was asked for workers after ${tC.workers.name}, which this thread keeps`), ZC?.reloadFailedDownload && !DC && (0, QC.Y)() && (DC = !0, tC = BC(tC.build, tC.workers, tC.memoryMaximumBytes)), tC.loaded
    }

    function UC(CC, zC) {
      if (null !== tC) return (0, wC.d)([]);
      const ZC = CC.filter((CC => !jC.has(CC.name))).map((CC => {
        const ZC = new AbortController,
          QC = {
            compiled: TC(CC, (0, bC.e)(CC.name), {
              priority: zC,
              wZ: ZC.signal,
              onDownloaded: () => {
                QC.downloaded = !0
              },
              retries: {
                onRetry: () => {
                  QC.downloaded = !1, null !== tC && ZC.abort()
                }
              }
            }),
            cancel: ZC,
            downloaded: !1
          };
        return jC.set(CC.name, QC), (0, wC.f)((zC => {
          (0, wC.r)(QC.compiled, (() => {
            QC.downloaded = !0, zC()
          }), (QC => {
            ZC.signal.aborted || console.warn(`Bloxd wasm: ${CC.name}'s compile ahead of the load failed: the load compiles it afresh`, QC), zC()
          }))
        }))
      }));
      return (0, wC.d)(ZC)
    }

    function BC(CC, zC, ZC) {
      const bC = (0, QC.H)((async () => {
        (0, nC.A)(), yC.clear();
        const ZC = kC(CC),
          QC = zC.name === CC.name ? ZC : kC(zC);
        for (const {
            cancel: CC
          }
          of jC.values()) CC.abort();
        jC.clear(), await (0, wC.d)([ZC, QC]);
        const bC = await ZC,
          fC = await QC;
        return (0, nC.A)(), {
          module: bC,
          workerModule: fC
        }
      }), CC, ZC);
      return {
        build: CC,
        workers: zC,
        memoryMaximumBytes: ZC,
        loaded: bC
      }
    }

    function OC(CC) {
      return yC.get(CC)
    }

    function kC(CC) {
      const zC = performance.now(),
        ZC = jC.get(CC.name);
      jC.delete(CC.name);
      const QC = !0 === ZC?.downloaded ? ZC : void 0;
      return void 0 !== ZC && void 0 === QC && ZC.cancel.abort(), (0, wC.f)(((ZC, bC) => {
        const nC = (QC, wC) => {
            yC.set(CC.name, {
              path: wC,
              ms: performance.now() - zC
            }), ZC(QC)
          },
          fC = () => {
            (0, wC.r)(Cz(CC), (CC => {
              let {
                module: zC,
                path: ZC
              } = CC;
              nC(zC, ZC)
            }), bC)
          };
        void 0 === QC ? fC() : (0, wC.r)(QC.compiled, (CC => {
          nC(CC, "ahead")
        }), fC)
      }))
    }
    async function VC(CC, zC) {
      const {
        module: ZC
      } = await Cz(CC, {
        retries: zC
      });
      return ZC
    }
    async function Cz(CC) {
      let zC = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
      return await rC(CC, (0, bC.e)(CC.name), zC)
    }
  },
  6616: (CC, zC, ZC) => {
    ZC.d(zC, {
      e: () => nC
    });
    var QC = ZC(2856);
    const wC = {
      bloxd_wasm: () => "64213eca4658377ef00b2e8eca80917f662fb244ea5072aa932d693e87ee34a4",
      bloxd_wasm_client: () => "fc3cf04d5b7854fba80fd4d4a48c70cd5cfa75bed057ae2631f2eac809bb72d6",
      bloxd_wasm_workers: () => "6e4d4a97778a79d3d1539bba135e452823879ae247a4075c185762ab01e74bb8",
      bloxd_wasm_models: () => "a9e6377967b2efe08bc1c2c1ba7803c68faf84b1979c48237b60c2a5371ef6f0",
      bloxd_wasm_webgpu: () => "0c329bbf92b5e8dc40c9c50de71fa16d3214efd01ed90e0c806f70cc5dc4a678",
      bloxd_wasm_webgl: () => "1a61f36acda217637aa35c038c864802f4a597fe34b899397ecb8b3f7a6010d4",
      bloxd_wasm_webgl1: () => "fa07e900fdcc5ea52a844349243c3504ebaca1ebb1ff15c9d66db4fcc37f2404",
      bloxd_wasm_replay: () => "37f9a110c636f28820cc4bb4d1a11de7ceaafb9c9325a7fee4fe688876d19d67",
      bloxd_wasm_recorder: () => "2775bc33cdba5c03f27ade88929e4fdaf4b4c582cc3952198fb551b59541422e",
      bloxd_wasm_anim: () => "70063f4837211665774447f408deefe4678a8f5e792ddcf5187eb1ba64be142f",
      bloxd_wasm_textures: () => "6b2065e443e650047a940883eaf075d2749daed9964ef622b7e96432f1c0c8b1",
      bloxd_wasm_shader_pack: () => "90a9cbfbe256edc10cec287ff1dfdba1125031ab0d4dcf3f4270800ba2f9cb4a"
    };
    var bC = ZC(4635);

    function nC(CC) {
      const zC = Object.prototype.hasOwnProperty.call(wC, CC) ? wC[CC]() : void 0;
      if (void 0 !== zC) return {
        sha256: zC,
        onMismatch: bC.w
      };
      throw new QC.h(`${CC} has no release digest, so this build refuses it`)
    }
  },
  6646: (CC, zC, ZC) => {
    ZC.d(zC, {
      e: () => QC,
      i: () => nC,
      m: () => fC,
      n: () => wC,
      r: () => bC
    });
    const QC = ["terrain", "liquid", "model"];

    function wC() {
      const CC = [];
      for (const zC of [!1, !0])
        for (const ZC of QC) CC.push({
          strict: zC,
          program: ZC
        });
      return CC
    }

    function bC(CC) {
      return `${CC.strict?"strict":"allow"}.${CC.program}`
    }

    function nC(CC) {
      return !CC.hooks.vertex && !CC.hooks.surface && !CC.hooks.light
    }

    function fC(CC, zC) {
      return "off" !== zC && (null === CC || CC.some((CC => CC.key.strict === ("strict" === zC) && !nC(CC))))
    }
  }
};
Object.freeze(modules);
for (const CC in modules) Object.freeze(modules[CC]);