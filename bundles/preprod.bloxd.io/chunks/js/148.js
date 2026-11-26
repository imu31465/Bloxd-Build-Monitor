export const id = 148;
export const ids = [148];
export const modules = {
  39586: (UU, XU, zU) => {
    zU.d(XU, {
      e: () => DU,
      h: () => NU,
      k: () => IU,
      m: () => tU,
      q: () => YU,
      r: () => EU,
      s: () => AU,
      v: () => pU
    });
    var cU = zU(318),
      yU = zU(1769);
    const QU = "A valid external Instance reference no longer exists.";

    function AU(UU) {
      return UU.includes(QU)
    }
    const FU = [
        [1e4, "<10s", "lt10s"],
        [6e4, "<1m", "lt1m"],
        [3e5, "<5m", "lt5m"],
        [18e5, "<30m", "lt30m"],
        [1 / 0, "30m+", "ge30m"]
      ],
      oU = [
        [1e3, "lt1s"],
        [2e3, "lt2s"],
        [5e3, "lt5s"],
        [1e4, "lt10s"],
        [3e4, "lt30s"],
        [1 / 0, "ge30s"]
      ];
    const DU = {
      WebGPU: "WebGPU device lost",
      WebGL2: "WebGL2 context lost"
    };

    function EU(UU, XU) {
      return UU ? "frames_refused" : arguments.length > 2 && void 0 !== arguments[2] && arguments[2] ? "browser_destroyed" : function(UU) {
        var XU;
        const zU = null !== (XU = /Device removed reason: (?!S_OK)([A-Z][A-Z0-9_]+)/.exec(UU)) && void 0 !== XU ? XU : /failed with ([A-Z][A-Z0-9_]+)/.exec(UU);
        return zU ? zU[1] : AU(UU) ? "gpu_process_lost" : "other"
      }(XU)
    }

    function YU(UU) {
      return `${(null===UU||void 0===UU?void 0:UU.vendor)||"unknown vendor"} ${(null===UU||void 0===UU?void 0:UU.architecture)||"unknown architecture"}`
    }

    function NU(UU) {
      return gU(UU)[1]
    }

    function IU(UU) {
      return gU(UU)[2]
    }

    function pU(UU, XU, zU) {
      const yU = (0, cU.e)(),
        QU = null !== yU && yU >= XU,
        AU = document.hidden ? "hidden" : QU ? "shown" : "visible",
        FU = QU ? zU - yU : null;
      return {
        page: null === FU ? AU : `${AU}${NU(FU)}`,
        code: `${UU}_${null===FU?AU:`${AU}_${IU(FU)}`}_${aU(zU)}`
      }
    }

    function aU(UU) {
      if ((0, yU.e)()) return "ad_open";
      const XU = (0, yU.b)();
      return null === XU ? "ad_none" : `ad_${IU(UU-XU.endedAt)}_${XU.pageHid?"h":"v"}`
    }

    function tU(UU) {
      return kU(oU, UU)[1]
    }

    function gU(UU) {
      return kU(FU, UU)
    }

    function kU(UU, XU) {
      var zU;
      return null !== (zU = UU.find((UU => {
        let [zU] = UU;
        return XU < zU
      }))) && void 0 !== zU ? zU : UU[UU.length - 1]
    }
  },
  39876: (UU, XU, zU) => {
    zU.d(XU, {
      e: () => oU
    });
    var cU = zU(9493),
      yU = zU(37201),
      QU = zU(39882);
    const AU = {
        seat: "seat_timeout",
        socket_unopened: "socket_timeout_unopened",
        socket: "socket_timeout"
      },
      FU = {
        seat: "seat_lost",
        socket_unopened: "socket_unopened",
        socket: "socket_closed"
      };

    function oU(UU, XU) {
      if (UU instanceof yU.c) return {
        at: AU[XU],
        code: 0
      };
      const zU = (0, cU.f)(UU),
        oU = "number" === typeof zU ? zU : 0;
      return null !== (0, QU.l)(oU).name ? {
        at: "refused",
        code: oU
      } : {
        at: FU[XU],
        code: oU
      }
    }
  },
  9493: (UU, XU, zU) => {
    zU.d(XU, {
      e: () => QU,
      f: () => AU,
      h: () => FU,
      j: () => DU,
      n: () => oU
    });
    var cU = zU(212),
      yU = zU(5057);

    function QU(UU) {
      return AU(UU) === cU.e.gameOrPluginOnPlayerAuthRejected.code
    }

    function AU(UU) {
      return "object" === typeof UU && null !== UU ? UU.code : void 0
    }

    function FU(UU) {
      var XU;
      return null !== (XU = Object.keys(yU.b).find((XU => yU.b[XU] === UU))) && void 0 !== XU ? XU : null
    }

    function oU(UU) {
      return "notWhitelisted" === UU ? "customLobby:cantJoinNotWhitelistedTitle" : "customLobby:cantJoinWorld"
    }
    const DU = {
      private: "customLobby:cantJoinPrivate",
      notWhitelisted: "customLobby:cantJoinNotWhitelisted",
      banned: "customLobby:cantJoinBanned",
      adminLocked: "customLobby:cantJoinAdminLocked"
    }
  },
  39882: (UU, XU, zU) => {
    zU.d(XU, {
      b: () => yU,
      f: () => QU,
      i: () => FU,
      l: () => EU,
      p: () => oU,
      r: () => AU
    });
    var cU = zU(212);
    const yU = 3e3,
      QU = 15e3;

    function AU(UU) {
      const XU = UU.endsWith(cU.m);
      return {
        text: (XU ? UU.slice(0, -cU.m.length) : UU) || null,
        dropsCache: XU
      }
    }
    const FU = "Either your internet isn't working or this is a bug.";

    function oU(UU, XU) {
      const zU = EU(UU);
      return null !== zU.name && "" === cU.e[zU.name].text && null !== XU ? XU : zU.reason
    }
    const DU = "You were removed from the game.";

    function EU(UU) {
      var XU;
      let zU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
      const yU = null !== (XU = Object.keys(cU.e).find((XU => cU.e[XU].code === UU))) && void 0 !== XU ? XU : null;
      if (null === yU) return {
        code: UU,
        name: yU,
        reason: null !== zU && void 0 !== zU ? zU : `${FU}\nCode: ${UU}`,
        canReconnect: !1,
        automaticallyReconnect: !1,
        requiresRefresh: !1
      };
      const {
        text: QU,
        canReconnect: AU = !1
      } = cU.e[yU], oU = UU === cU.e.outdatedVersion.code || UU === cU.e.loadRecaptchaError.code;
      return {
        code: UU,
        name: yU,
        reason: "" !== QU ? QU : null !== zU && void 0 !== zU ? zU : UU === cU.e.gameOrPluginKick.code ? DU : `Code: ${UU}`,
        canReconnect: AU,
        automaticallyReconnect: UU === cU.e.customGameUpdated.code || UU === cU.e.duplicateLobbyNameError.code,
        requiresRefresh: oU
      }
    }
  },
  37564: (UU, XU, zU) => {
    function cU(UU) {
      return "fetch" === UU || "timeout" === UU || "integrity" === UU ? "download" : "browser"
    }
    zU.d(XU, {
      e: () => yU,
      i: () => FU,
      k: () => DU,
      o: () => AU,
      r: () => oU,
      u: () => cU,
      v: () => QU
    });
    const yU = "https://discord.gg/playbloxd";

    function QU(UU) {
      return "download" === UU ? {
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

    function AU() {
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

    function FU(UU, XU) {
      return {
        icon: "face-dizzy",
        title: "wasmScreens:crashTitle",
        help: XU ? "wasmScreens:crashHelp" : "wasmScreens:crashHelpNoDiscord",
        helpValues: {
          code: UU.code
        },
        discordLink: XU,
        confirm: "general:reload",
        cancel: "general:back"
      }
    }

    function oU() {
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

    function DU(UU, XU, zU) {
      return {
        icon: "wifi",
        title: "wasmScreens:disconnectedTitle",
        help: zU ? "wasmScreens:reconnectingHelp" : "wasmScreens:disconnectedHelp",
        helpValues: {
          reason: UU.reason
        },
        discordLink: null === UU.name,
        confirm: XU ? "general:reconnect" : UU.requiresRefresh ? "general:reload" : "general:ok",
        cancel: null
      }
    }
  },
  37014: (UU, XU, zU) => {
    zU.d(XU, {
      e: () => hU,
      g: () => cX,
      i: () => KU,
      k: () => XX,
      n: () => bU,
      q: () => TU
    });
    var cU = zU(3169),
      yU = zU(3189),
      QU = zU(7213),
      AU = zU(5179),
      FU = zU(3182),
      oU = zU(3176);
    const DU = "bloxd-wasmDownloaded",
      EU = 12;

    function YU(UU) {
      return UU.pathname.slice(UU.pathname.lastIndexOf("/") + 1)
    }

    function NU() {
      try {
        if ("undefined" === typeof localStorage) return null;
        const UU = JSON.parse(localStorage.getItem(DU) ?? "[]");
        return Array.isArray(UU) ? UU.filter((UU => "string" === typeof UU)) : []
      } catch (UU) {
        return console.warn("Bloxd wasm: the record of downloaded modules could not be read: asking the HTTP cache for none", UU), null
      }
    }
    const IU = Reflect.apply,
      pU = "undefined" === typeof Worker ? void 0 : Worker,
      aU = pU?.prototype.postMessage,
      tU = pU?.prototype.terminate,
      gU = "undefined" === typeof EventTarget ? void 0 : EventTarget.prototype.addEventListener,
      kU = "undefined" === typeof MessageEvent ? void 0 : Object.getOwnPropertyDescriptor(MessageEvent.prototype, "data")?.get,
      GU = Object.getOwnPropertyDescriptor(Object.getPrototypeOf(Uint8Array.prototype), "buffer").get,
      BU = function() {
        try {
          return (0, AU.i)(pU, "Worker", !0) && (0, AU.i)(aU, "postMessage") && (0, AU.i)(tU, "terminate") && (0, AU.i)(GU, "buffer") && void 0 !== gU && void 0 !== kU
        } catch {
          return !1
        }
      }();
    let ZU = !1;

    function RU() {
      return BU && !ZU
    }
    class PU {
      worker = null;
      failed = !1;
      constructor() {
        if (RU()) try {
          this.worker = dU(), IU(gU, this.worker, ["error", () => {
            this.failed = !0
          }])
        } catch {
          this.stop()
        }
      }
      take() {
        const UU = this.worker;
        if (this.worker = null, null !== UU && this.failed) throw IU(tU, UU, []), new Error("it did not run");
        return UU
      }
      stop() {
        const UU = this.worker;
        this.worker = null, null !== UU && IU(tU, UU, [])
      }
    }
    class WU {
      decoded;
      worker;
      reject;
      constructor(UU, XU, zU, cU, QU) {
        try {
          this.worker = QU?.take() ?? dU()
        } catch (DU) {
          throw ZU = !0, new Error(`The zstd decoder's worker did not start: ${(0,FU.i)(DU)}`)
        }
        const AU = this.worker;
        this.decoded = (0, yU.l)(((XU, yU) => {
          this.reject = yU;
          const QU = (UU, XU) => {
            IU(gU, AU, [UU, XU])
          };
          QU("message", (UU => {
            cU();
            try {
              const cU = IU(kU, UU, []);
              if (!0 === cU) XU();
              else {
                if ("string" === typeof cU) throw cU.startsWith(FU.e) && (ZU = !0), new Error(cU);
                zU(cU, IU(oU.B, cU, []))
              }
            } catch (DU) {
              yU(DU)
            }
          })), QU("error", (() => {
            ZU = !0, yU(new Error("The zstd decoder's worker did not run"))
          })), QU("messageerror", (() => {
            yU(new Error(`${UU}'s decoder sent a piece that could not be read`))
          }))
        })), (0, oU.cb)(this.decoded), IU(aU, AU, [
          [UU, XU]
        ])
      }
      push(UU) {
        IU(aU, this.worker, [UU, [IU(GU, UU, [])]])
      }
      end() {
        IU(aU, this.worker, [null])
      }
      markWorkerFailed() {
        ZU = !0
      }
      fail(UU) {
        this.reject(UU), this.terminate()
      }
      terminate() {
        IU(tU, this.worker, [])
      }
    }

    function dU() {
      if (globalThis.Worker !== pU) throw new Error("Worker is not the one the page loaded with");
      return new Worker(new URL(zU.p + zU.u(79), zU.b), {
        name: "wasmZstdDecoder",
        type: "module"
      })
    }
    const LU = Reflect.apply,
      eU = ArrayBuffer,
      CU = "undefined" === typeof Response ? void 0 : Response,
      wU = "undefined" === typeof ReadableStream ? void 0 : ReadableStream,
      qU = function() {
        let UU;
        void 0 !== wU && new wU({
          __proto__: null,
          start(XU) {
            const {
              enqueue: zU,
              close: cU,
              error: yU
            } = Object.getPrototypeOf(XU);
            UU = {
              enqueue: zU,
              close: cU,
              error: yU
            }
          }
        }, {
          __proto__: null
        });
        return UU
      }(),
      OU = function() {
        try {
          return "undefined" !== typeof WebAssembly && "function" === typeof WebAssembly.compileStreaming && void 0 !== qU && (0, AU.i)(CU, "Response", !0) && (0, AU.i)(wU, "ReadableStream", !0) && (0, AU.i)(qU.enqueue, "enqueue") && (0, AU.i)(qU.close, "close") && (0, AU.i)(qU.error, "error") && (0, AU.i)(oU.fb, "body") && (0, AU.i)(oU.X, "getReader") && (0, AU.i)(oU.eb, "read")
        } catch {
          return !1
        }
      }();
    async function SU(UU, XU, zU, cU, QU, AU, DU) {
      const EU = new eU(XU),
        {
          controller: YU,
          compiled: NU
        } = function(UU) {
          try {
            let UU;
            const XU = new wU({
                __proto__: null,
                start(XU) {
                  UU = XU
                }
              }, {
                __proto__: null
              }),
              zU = new CU(XU, {
                __proto__: null,
                headers: {
                  __proto__: null,
                  "Content-Type": "application/wasm"
                }
              });
            return {
              controller: UU,
              compiled: (0, oU.cb)((0, oU.G)((0, oU.lb)(zU)))
            }
          } catch (XU) {
            throw new Error(`${UU} could not be streamed into a compile: ${(0,FU.i)(XU)}`)
          }
        }(UU),
        {
          enqueue: IU,
          close: pU,
          error: aU
        } = qU,
        tU = UU => {
          try {
            LU(aU, YU, [UU])
          } catch {}
        };
      let gU = 0;
      const kU = (zU, cU) => {
        if (gU + cU > XU) throw new Error(`${UU} decoded past its module's ${XU} bytes`);
        LU(oU.ib, new oU.l(EU), [new oU.l(zU), gU]);
        try {
          LU(IU, YU, [new oU.l(EU, gU, cU)])
        } catch {}
        gU += cU
      };
      let GU, BU;
      try {
        GU = new WU(UU, XU, kU, cU, DU)
      } catch (dU) {
        throw tU(dU), dU
      }
      const ZU = UU => {
        GU.fail(UU), void 0 !== BU && rU(BU)
      };
      let RU = !1;
      zU.addEventListener("abort", (() => {
        RU && GU.markWorkerFailed(), ZU(new Error(`${UU} stalled`))
      }), {
        once: !0
      }), (0, yU.x)(NU, (() => {}), ZU);
      try {
        let AU;
        try {
          AU = await fetch(UU, {
            signal: zU
          })
        } catch (dU) {
          throw new Error(`Fetching ${UU} failed: ${(0,FU.i)(dU)}`)
        }
        const {
          ok: DU,
          status: EU,
          body: YU
        } = function(UU, XU) {
          try {
            const {
              ok: UU,
              status: zU
            } = XU;
            return {
              ok: UU,
              status: zU,
              body: LU(oU.fb, XU, [])
            }
          } catch {
            throw new Error(`${UU} came in a response a page script made`)
          }
        }(UU, AU);
        if (!DU) throw new Error(`Fetching ${UU} failed: HTTP ${EU}`);
        cU();
        const NU = LU(oU.X, YU, []);
        BU = NU;
        const IU = () => {
          rU(NU)
        };
        for ((0, yU.x)(GU.decoded, IU, IU);;) {
          let XU;
          try {
            XU = await LU(oU.eb, NU, [])
          } catch (dU) {
            throw new Error(`Downloading ${UU} failed: ${(0,FU.i)(dU)}`)
          }
          if (XU.done) break;
          cU(), GU.push(XU.value)
        }
        if (RU = !0, GU.end(), await GU.decoded, QU(), gU !== XU) throw new Error(`${UU} ended before its module did`)
      } catch (dU) {
        throw tU(dU), ZU(dU), dU
      }
      GU.terminate();
      try {
        LU(pU, YU, [])
      } catch {}
      const PU = await NU;
      return void 0 !== AU && await (0, oU.D)(UU, new oU.l(EU), {
        sha256: AU.sha256,
        onMismatch: () => {}
      }), PU
    }

    function rU(UU) {
      try {
        (0, oU.cb)(UU.cancel())
      } catch {}
    }
    const uU = ".zst.bin",
      fU = 1e3;
    let iU = null;

    function HU(UU) {
      return iU ??= function() {
        const UU = new Map,
          XU = "bloxd_wasm_webgpu:5162616,bloxd_wasm_webgl:5545132,bloxd_wasm_webgl1:4878547,bloxd_wasm_workers:203635,bloxd_wasm_models:478484,bloxd_wasm_client:3732288";
        for (const zU of XU?.split(",") ?? []) {
          const [XU = "", cU] = zU.split(":"), yU = Number(cU);
          Number.isInteger(yU) && yU > 0 && UU.set(XU, yU)
        }
        return UU
      }(), iU.get(UU)
    }
    async function MU(UU, XU) {
      let zU = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
      const cU = HU(UU.name);
      if (void 0 === cU) return vU(await VU(UU, XU, zU), "cold-wasm");
      const QU = OU ? new PU : null;
      let AU;
      try {
        if (DU = UU.url(), NU()?.includes(YU(DU)) && await async function(UU) {
            const XU = new AbortController;
            let zU;
            const cU = (0, yU.l)((UU => {
              zU = setTimeout((() => {
                XU.abort(), UU(null)
              }), fU)
            }));
            try {
              const zU = fetch(UU.href, {
                  cache: "only-if-cached",
                  mode: "same-origin",
                  signal: XU.signal
                }),
                QU = await (0, yU.u)([zU, cU]);
              return !!QU?.ok && ((0, oU.cb)(QU.body.cancel()), !0)
            } catch {
              return !1
            } finally {
              clearTimeout(zU)
            }
          }(UU.url())) return QU?.stop(), await async function(UU, XU, zU, cU) {
          let yU = !1;
          const QU = zU && {
            sha256: zU.sha256,
            onMismatch: () => {
              yU = !0
            }
          };
          try {
            return vU(await VU(UU, QU, cU), "warm")
          } catch (AU) {
            const cU = await sU(UU, XU, zU, null);
            if (null === cU) throw yU && zU.onMismatch(), AU;
            return console.warn(`${UU.url().href} from the HTTP cache failed: ${(0,FU.i)(AU)}: loaded its copy instead`), vU(cU, yU ? "warm-refused" : "warm-broken")
          }
        }(UU, cU, XU, zU);
        AU = await sU(UU, cU, XU, QU)
      } finally {
        QU?.stop()
      }
      var DU;
      return null !== AU ? vU(AU, "cold-worker") : vU(await VU(UU, XU, zU), "cold-wasm")
    }

    function vU(UU, XU) {
      return {
        __proto__: null,
        module: UU,
        path: XU
      }
    }

    function VU(UU, XU, zU) {
      return void 0 === HU(UU.name) ? (0, oU.M)(UU.url(), XU, zU) : (0, oU.M)(UU.url(), XU, {
        ...zU,
        hideThen: !0,
        onDownloaded: () => {
          ! function(UU) {
            const XU = NU();
            if (null === XU) return;
            const zU = YU(UU),
              cU = XU.filter((UU => UU !== zU));
            cU.push(zU);
            try {
              localStorage.setItem(DU, JSON.stringify(cU.slice(-EU)))
            } catch (yU) {
              console.warn(`Bloxd wasm: ${zU} could not be recorded as downloaded: a later join asks the HTTP cache nothing for it`, yU)
            }
          }(UU.url()), zU.onDownloaded?.()
        }
      })
    }
    async function sU(UU, XU, zU, cU) {
      if (!OU || !RU()) return null;
      const yU = UU.url(),
        QU = `${yU.href}${uU}`;
      try {
        return await (0, oU.jb)(QU, ((UU, yU, AU) => SU(QU, XU, UU, yU, AU, zU, cU)))
      } catch (AU) {
        return console.warn(`${(0,FU.i)(AU)}: loading ${yU.href} instead`), null
      }
    }
    let nU = null,
      mU = !1;
    const lU = new Map,
      xU = new Map;
    let JU = null;

    function jU(UU) {
      const XU = XU => UU.filter((UU => lU.get(UU)?.state === XU)).length,
        zU = XU("compiled");
      return zU > 0 && zU === UU.length ? "compiled" : zU + XU("compiling") > 0 ? "compiling" : "none"
    }

    function KU() {
      return JU ?? jU([...lU.keys()])
    }

    function bU(UU, XU, zU) {
      return null === nU ? nU = UX(UU, XU, zU?.memoryMaximumBytes) : UU !== nU.build ? console.warn(`Bloxd wasm: ${UU.name} was asked for after ${nU.build.name} started loading, which this thread keeps`) : XU.name !== nU.workers.name && console.warn(`Bloxd wasm: ${XU.name} was asked for workers after ${nU.workers.name}, which this thread keeps`), zU?.reloadFailedDownload && !mU && (0, cU.gb)() && (mU = !0, nU = UX(nU.build, nU.workers, nU.memoryMaximumBytes)), nU.loaded
    }

    function TU(UU) {
      return null === nU ? (0, yU.l)((UU => {
        UU(!1)
      })) : ((0, cU.cb)() && (nU = UX(nU.build, nU.workers, UU ?? nU.memoryMaximumBytes)), nU.loaded)
    }

    function hU(UU, XU) {
      if (null !== nU) return (0, yU.h)([]);
      const zU = UU.filter((UU => !lU.has(UU.name))).map((UU => {
        const zU = new AbortController,
          cU = {
            compiled: VU(UU, (0, QU.e)(UU.name), {
              priority: XU,
              QU: zU.signal,
              onDownloaded: () => {
                cU.downloaded = !0
              },
              retries: {
                onRetry: () => {
                  cU.downloaded = !1, null !== nU && zU.abort()
                }
              }
            }),
            cancel: zU,
            downloaded: !1,
            state: "compiling"
          };
        return lU.set(UU.name, cU), (0, yU.l)((XU => {
          (0, yU.x)(cU.compiled, (() => {
            cU.downloaded = !0, cU.state = "compiled", XU()
          }), (yU => {
            cU.state = "failed", zU.signal.aborted || console.warn(`Bloxd wasm: ${UU.name}'s compile ahead of the load failed: the load compiles it afresh`, yU), XU()
          }))
        }))
      }));
      return (0, yU.h)(zU)
    }

    function UX(UU, XU, zU) {
      JU ??= jU(XU.name === UU.name ? [UU.name] : [UU.name, XU.name]);
      const QU = (0, cU.I)((async () => {
        (0, AU.z)(), xU.clear();
        const zU = zX(UU),
          cU = XU.name === UU.name ? zU : zX(XU);
        for (const {
            cancel: UU
          }
          of lU.values()) UU.abort();
        lU.clear(), await (0, yU.h)([zU, cU]);
        const QU = await zU,
          FU = await cU;
        return (0, AU.z)(), {
          module: QU,
          workerModule: FU
        }
      }), UU, zU);
      return {
        build: UU,
        workers: XU,
        memoryMaximumBytes: zU,
        loaded: QU
      }
    }

    function XX(UU) {
      return xU.get(UU)
    }

    function zX(UU) {
      const XU = performance.now(),
        zU = lU.get(UU.name);
      lU.delete(UU.name);
      const cU = !0 === zU?.downloaded ? zU : void 0;
      return void 0 !== zU && void 0 === cU && zU.cancel.abort(), (0, yU.l)(((zU, QU) => {
        const AU = (cU, yU) => {
            xU.set(UU.name, {
              path: yU,
              ms: performance.now() - XU
            }), zU(cU)
          },
          FU = () => {
            (0, yU.x)(yX(UU), (UU => {
              let {
                module: XU,
                path: zU
              } = UU;
              AU(XU, zU)
            }), QU)
          };
        void 0 === cU ? FU() : (0, yU.x)(cU.compiled, (UU => {
          AU(UU, "ahead")
        }), FU)
      }))
    }
    async function cX(UU, XU) {
      const {
        module: zU
      } = await yX(UU, {
        retries: XU
      });
      return zU
    }
    async function yX(UU) {
      let XU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
      return await MU(UU, (0, QU.e)(UU.name), XU)
    }
  },
  7213: (UU, XU, zU) => {
    zU.d(XU, {
      e: () => AU
    });
    var cU = zU(3176);
    const yU = {
      bloxd_wasm: () => "7f53022eec2cb692d1cd79c2eeeb6f8a7607270973e0f6e0c72df23cc86c2b9f",
      bloxd_wasm_client: () => "57b44b4e08ce6b959c851fa76e413083d1b9237ff788a96d3931877841e31e3b",
      bloxd_wasm_workers: () => "e095c7f514df56db3ce2e1ace2484bbfab4bed79f4fe2840e3f351e25bef8126",
      bloxd_wasm_models: () => "d264f0be9eaf7df40aab32e155f7170e6a2029f73e36b3aa879f2b238d2f98c1",
      bloxd_wasm_webgpu: () => "45fb92410826d4556fb1610a55c96252dff22810c6b27376d120613e28fb722d",
      bloxd_wasm_webgl: () => "b3808b20b91fd2d43a5bb7c9219998b24db293acd36599f3cfc217aa2f03b9ee",
      bloxd_wasm_webgl1: () => "955dabc5322d1e4788a42fc358c9d0d686dca5eaafd1809064b6bbdc73e56b76",
      bloxd_wasm_replay: () => "13f05b235e8455220553f84808d39e41289fbb259c59a2477b25fa31ba963b54",
      bloxd_wasm_recorder: () => "a55faba2add92e1697c15223e522d87ba7631a7aaeb806e24cd4da91de455075",
      bloxd_wasm_anim: () => "9fd10823eecbab78e8d130701ec44bc31691f897e4963312a2cef80080a0b854",
      bloxd_wasm_textures: () => "659ffb2c9bc8159fee909f52c433ec6a1a8921210ad3488ef78dfd6ff1c90774",
      bloxd_wasm_shader_pack: () => "adccd38b5fea7520e10f50666ef79fc0704d8a73746e668ac8e591ff0037f1dc"
    };
    var QU = zU(5179);

    function AU(UU) {
      const XU = Object.prototype.hasOwnProperty.call(yU, UU) ? yU[UU]() : void 0;
      if (void 0 !== XU) return {
        sha256: XU,
        onMismatch: QU.v
      };
      throw new cU.i(`${UU} has no release digest, so this build refuses it`)
    }
  },
  7233: (UU, XU, zU) => {
    zU.d(XU, {
      e: () => cU,
      f: () => AU,
      j: () => FU,
      k: () => yU,
      o: () => QU
    });
    const cU = ["terrain", "liquid", "model"];

    function yU() {
      const UU = [];
      for (const XU of [!1, !0])
        for (const zU of cU) UU.push({
          strict: XU,
          program: zU
        });
      return UU
    }

    function QU(UU) {
      return `${UU.strict?"strict":"allow"}.${UU.program}`
    }

    function AU(UU) {
      return !UU.hooks.vertex && !UU.hooks.surface && !UU.hooks.light
    }

    function FU(UU, XU) {
      return "off" !== XU && (null === UU || UU.some((UU => UU.key.strict === ("strict" === XU) && !AU(UU))))
    }
  }
};
Object.freeze(modules);
for (const UU in modules) Object.freeze(modules[UU]);