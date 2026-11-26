export const id = 150;
export const ids = [150];
export const modules = {
  39689: (HH, BH, LH) => {
    LH.d(BH, {
      d: () => CH,
      e: () => GH,
      f: () => YH,
      j: () => WH,
      l: () => XH,
      p: () => EH,
      q: () => hH,
      r: () => uH
    });
    var AH = LH(297),
      rH = LH(1757);
    const SH = "A valid external Instance reference no longer exists.";

    function hH(HH) {
      return HH.includes(SH)
    }
    const tH = [
        [1e4, "<10s", "lt10s"],
        [6e4, "<1m", "lt1m"],
        [3e5, "<5m", "lt5m"],
        [18e5, "<30m", "lt30m"],
        [1 / 0, "30m+", "ge30m"]
      ],
      zH = [
        [1e3, "lt1s"],
        [2e3, "lt2s"],
        [5e3, "lt5s"],
        [1e4, "lt10s"],
        [3e4, "lt30s"],
        [1 / 0, "ge30s"]
      ];
    const CH = {
      WebGPU: "WebGPU device lost",
      WebGL2: "WebGL2 context lost"
    };

    function EH(HH, BH) {
      return HH ? "frames_refused" : arguments.length > 2 && void 0 !== arguments[2] && arguments[2] ? "browser_destroyed" : function(HH) {
        var BH;
        const LH = null !== (BH = /Device removed reason: (?!S_OK)([A-Z][A-Z0-9_]+)/.exec(HH)) && void 0 !== BH ? BH : /failed with ([A-Z][A-Z0-9_]+)/.exec(HH);
        return LH ? LH[1] : hH(HH) ? "gpu_process_lost" : "other"
      }(BH)
    }

    function XH(HH) {
      return `${(null===HH||void 0===HH?void 0:HH.vendor)||"unknown vendor"} ${(null===HH||void 0===HH?void 0:HH.architecture)||"unknown architecture"}`
    }

    function GH(HH) {
      return MH(HH)[1]
    }

    function YH(HH) {
      return MH(HH)[2]
    }

    function uH(HH, BH, LH) {
      const rH = (0, AH.g)(),
        SH = null !== rH && rH >= BH,
        hH = document.hidden ? "hidden" : SH ? "shown" : "visible",
        tH = SH ? LH - rH : null;
      return {
        page: null === tH ? hH : `${hH}${GH(tH)}`,
        code: `${HH}_${null===tH?hH:`${hH}_${YH(tH)}`}_${QH(LH)}`
      }
    }

    function QH(HH) {
      if ((0, rH.e)()) return "ad_open";
      const BH = (0, rH.c)();
      return null === BH ? "ad_none" : `ad_${YH(HH-BH.endedAt)}_${BH.pageHid?"h":"v"}`
    }

    function WH(HH) {
      return xH(zH, HH)[1]
    }

    function MH(HH) {
      return xH(tH, HH)
    }

    function xH(HH, BH) {
      var LH;
      return null !== (LH = HH.find((HH => {
        let [LH] = HH;
        return BH < LH
      }))) && void 0 !== LH ? LH : HH[HH.length - 1]
    }
  },
  39983: (HH, BH, LH) => {
    LH.d(BH, {
      b: () => zH
    });
    var AH = LH(9627),
      rH = LH(37366),
      SH = LH(39991);
    const hH = {
        seat: "seat_timeout",
        socket_unopened: "socket_timeout_unopened",
        socket: "socket_timeout"
      },
      tH = {
        seat: "seat_lost",
        socket_unopened: "socket_unopened",
        socket: "socket_closed"
      };

    function zH(HH, BH) {
      if (HH instanceof rH.c) return {
        at: hH[BH],
        code: 0
      };
      const LH = (0, AH.e)(HH),
        zH = "number" === typeof LH ? LH : 0;
      return null !== (0, SH.l)(zH).name ? {
        at: "refused",
        code: zH
      } : {
        at: tH[BH],
        code: zH
      }
    }
  },
  9627: (HH, BH, LH) => {
    LH.d(BH, {
      d: () => SH,
      e: () => hH,
      f: () => tH,
      j: () => CH,
      l: () => zH
    });
    var AH = LH(176),
      rH = LH(5037);

    function SH(HH) {
      return hH(HH) === AH.e.gameOrPluginOnPlayerAuthRejected.code
    }

    function hH(HH) {
      return "object" === typeof HH && null !== HH ? HH.code : void 0
    }

    function tH(HH) {
      var BH;
      return null !== (BH = Object.keys(rH.d).find((BH => rH.d[BH] === HH))) && void 0 !== BH ? BH : null
    }

    function zH(HH) {
      return "notWhitelisted" === HH ? "customLobby:cantJoinNotWhitelistedTitle" : "customLobby:cantJoinWorld"
    }
    const CH = {
      private: "customLobby:cantJoinPrivate",
      notWhitelisted: "customLobby:cantJoinNotWhitelisted",
      banned: "customLobby:cantJoinBanned",
      adminLocked: "customLobby:cantJoinAdminLocked"
    }
  },
  39991: (HH, BH, LH) => {
    LH.d(BH, {
      b: () => rH,
      e: () => SH,
      h: () => tH,
      l: () => EH,
      p: () => zH,
      t: () => hH
    });
    var AH = LH(176);
    const rH = 3e3,
      SH = 15e3;

    function hH(HH) {
      const BH = HH.endsWith(AH.n);
      return {
        text: (BH ? HH.slice(0, -AH.n.length) : HH) || null,
        dropsCache: BH
      }
    }
    const tH = "Either your internet isn't working or this is a bug.";

    function zH(HH, BH) {
      const LH = EH(HH);
      return null !== LH.name && "" === AH.e[LH.name].text && null !== BH ? BH : LH.reason
    }
    const CH = "You were removed from the game.";

    function EH(HH) {
      var BH;
      let LH = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
      const rH = null !== (BH = Object.keys(AH.e).find((BH => AH.e[BH].code === HH))) && void 0 !== BH ? BH : null;
      if (null === rH) return {
        code: HH,
        name: rH,
        reason: null !== LH && void 0 !== LH ? LH : `${tH}\nCode: ${HH}`,
        canReconnect: !1,
        automaticallyReconnect: !1,
        requiresRefresh: !1
      };
      const {
        text: SH,
        canReconnect: hH = !1
      } = AH.e[rH], zH = HH === AH.e.outdatedVersion.code || HH === AH.e.loadRecaptchaError.code;
      return {
        code: HH,
        name: rH,
        reason: "" !== SH ? SH : null !== LH && void 0 !== LH ? LH : HH === AH.e.gameOrPluginKick.code ? CH : `Code: ${HH}`,
        canReconnect: hH,
        automaticallyReconnect: HH === AH.e.customGameUpdated.code || HH === AH.e.duplicateLobbyNameError.code,
        requiresRefresh: zH
      }
    }
  },
  37702: (HH, BH, LH) => {
    function AH(HH) {
      return "fetch" === HH || "timeout" === HH || "integrity" === HH ? "download" : "browser"
    }
    LH.d(BH, {
      d: () => rH,
      e: () => zH,
      g: () => EH,
      h: () => tH,
      l: () => hH,
      n: () => CH,
      o: () => AH,
      r: () => SH
    });
    const rH = "https://discord.gg/playbloxd";

    function SH(HH, BH) {
      return "download" === HH ? {
        icon: "wifi",
        title: "wasmScreens:downloadFailedTitle",
        help: "wasmScreens:downloadFailedHelp",
        helpValues: {},
        discordLink: !1,
        confirm: "general:tryAgain",
        cancel: "general:back"
      } : "memory" === HH || "noContext" === HH || "graphicsLost" === HH ? {
        icon: "face-dizzy",
        title: `wasmUnsupported:${HH}Title`,
        help: `wasmUnsupported:${HH}Help${BH?"App":""}`,
        helpValues: {},
        discordLink: !1,
        confirm: "general:tryAgain",
        cancel: "general:back"
      } : {
        icon: "face-dizzy",
        title: BH ? "wasmUnsupported:titleApp" : "wasmUnsupported:title",
        help: BH ? "wasmUnsupported:helpApp" : "wasmUnsupported:" + ("noWebAssembly" === HH ? "noWebAssemblyHelp" : "help"),
        helpValues: {},
        discordLink: !1,
        confirm: "general:ok",
        cancel: null
      }
    }

    function hH(HH, BH) {
      return {
        ...SH(HH, BH),
        help: BH ? "wasmUnsupported:stillBlockedHelpApp" : `wasmUnsupported:${HH}StillHelp`
      }
    }

    function tH() {
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

    function zH(HH, BH) {
      return {
        icon: "face-dizzy",
        title: "wasmScreens:crashTitle",
        help: BH ? "wasmScreens:crashHelp" : "wasmScreens:crashHelpNoDiscord",
        helpValues: {
          code: HH.code
        },
        discordLink: BH,
        confirm: "general:reload",
        cancel: "general:back"
      }
    }

    function CH() {
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

    function EH(HH, BH, LH) {
      return {
        icon: "wifi",
        title: "wasmScreens:disconnectedTitle",
        help: LH ? "wasmScreens:reconnectingHelp" : "wasmScreens:disconnectedHelp",
        helpValues: {
          reason: HH.reason
        },
        discordLink: null === HH.name,
        confirm: BH ? "general:reconnect" : HH.requiresRefresh ? "general:reload" : "general:ok",
        cancel: null
      }
    }
  },
  37083: (HH, BH, LH) => {
    LH.d(BH, {
      d: () => yH,
      e: () => AB,
      i: () => JH,
      k: () => BB,
      l: () => iH,
      m: () => pH
    });
    var AH = LH(3168),
      rH = LH(3178),
      SH = LH(7172),
      hH = LH(5143),
      tH = LH(3176),
      zH = LH(3171);
    const CH = "bloxd-wasmDownloaded",
      EH = 12;

    function XH(HH) {
      return HH.pathname.slice(HH.pathname.lastIndexOf("/") + 1)
    }

    function GH() {
      try {
        if ("undefined" === typeof localStorage) return null;
        const HH = JSON.parse(localStorage.getItem(CH) ?? "[]");
        return Array.isArray(HH) ? HH.filter((HH => "string" === typeof HH)) : []
      } catch (HH) {
        return console.warn("Bloxd wasm: the record of downloaded modules could not be read: asking the HTTP cache for none", HH), null
      }
    }
    const YH = Reflect.apply,
      uH = "undefined" === typeof Worker ? void 0 : Worker,
      QH = uH?.prototype.postMessage,
      WH = uH?.prototype.terminate,
      MH = "undefined" === typeof EventTarget ? void 0 : EventTarget.prototype.addEventListener,
      xH = "undefined" === typeof MessageEvent ? void 0 : Object.getOwnPropertyDescriptor(MessageEvent.prototype, "data")?.get,
      vH = Object.getOwnPropertyDescriptor(Object.getPrototypeOf(Uint8Array.prototype), "buffer").get,
      PH = function() {
        try {
          return (0, hH.h)(uH, "Worker", !0) && (0, hH.h)(QH, "postMessage") && (0, hH.h)(WH, "terminate") && (0, hH.h)(vH, "buffer") && void 0 !== MH && void 0 !== xH
        } catch {
          return !1
        }
      }();
    let TH = !1;

    function UH() {
      return PH && !TH
    }
    class VH {
      worker = null;
      failed = !1;
      constructor() {
        if (UH()) try {
          this.worker = bH(), YH(MH, this.worker, ["error", () => {
            this.failed = !0
          }])
        } catch {
          this.stop()
        }
      }
      take() {
        const HH = this.worker;
        if (this.worker = null, null !== HH && this.failed) throw YH(WH, HH, []), new Error("it did not run");
        return HH
      }
      stop() {
        const HH = this.worker;
        this.worker = null, null !== HH && YH(WH, HH, [])
      }
    }
    class OH {
      decoded;
      worker;
      reject;
      constructor(HH, BH, LH, AH, SH) {
        try {
          this.worker = SH?.take() ?? bH()
        } catch (CH) {
          throw TH = !0, new Error(`The zstd decoder's worker did not start: ${(0,tH.f)(CH)}`)
        }
        const hH = this.worker;
        this.decoded = (0, rH.i)(((BH, rH) => {
          this.reject = rH;
          const SH = (HH, BH) => {
            YH(MH, hH, [HH, BH])
          };
          SH("message", (HH => {
            AH();
            try {
              const AH = YH(xH, HH, []);
              if (!0 === AH) BH();
              else {
                if ("string" === typeof AH) throw AH.startsWith(tH.c) && (TH = !0), new Error(AH);
                LH(AH, YH(zH.z, AH, []))
              }
            } catch (CH) {
              rH(CH)
            }
          })), SH("error", (() => {
            TH = !0, rH(new Error("The zstd decoder's worker did not run"))
          })), SH("messageerror", (() => {
            rH(new Error(`${HH}'s decoder sent a piece that could not be read`))
          }))
        })), (0, zH.W)(this.decoded), YH(QH, hH, [
          [HH, BH]
        ])
      }
      push(HH) {
        YH(QH, this.worker, [HH, [YH(vH, HH, [])]])
      }
      end() {
        YH(QH, this.worker, [null])
      }
      markWorkerFailed() {
        TH = !0
      }
      fail(HH) {
        this.reject(HH), this.terminate()
      }
      terminate() {
        YH(WH, this.worker, [])
      }
    }

    function bH() {
      if (globalThis.Worker !== uH) throw new Error("Worker is not the one the page loaded with");
      return new Worker(new URL(LH.p + LH.u(79), LH.b), {
        name: "wasmZstdDecoder",
        type: "module"
      })
    }
    const kH = Reflect.apply,
      mH = ArrayBuffer,
      oH = "undefined" === typeof Response ? void 0 : Response,
      IH = "undefined" === typeof ReadableStream ? void 0 : ReadableStream,
      fH = function() {
        let HH;
        void 0 !== IH && new IH({
          __proto__: null,
          start(BH) {
            const {
              enqueue: LH,
              close: AH,
              error: rH
            } = Object.getPrototypeOf(BH);
            HH = {
              enqueue: LH,
              close: AH,
              error: rH
            }
          }
        }, {
          __proto__: null
        });
        return HH
      }(),
      lH = function() {
        try {
          return "undefined" !== typeof WebAssembly && "function" === typeof WebAssembly.compileStreaming && void 0 !== fH && (0, hH.h)(oH, "Response", !0) && (0, hH.h)(IH, "ReadableStream", !0) && (0, hH.h)(fH.enqueue, "enqueue") && (0, hH.h)(fH.close, "close") && (0, hH.h)(fH.error, "error") && (0, hH.h)(zH.$, "body") && (0, hH.h)(zH.R, "getReader") && (0, hH.h)(zH.X, "read")
        } catch {
          return !1
        }
      }();
    async function KH(HH, BH, LH, AH, SH, hH, CH) {
      const EH = new mH(BH),
        {
          controller: XH,
          compiled: GH
        } = function(HH) {
          try {
            let HH;
            const BH = new IH({
                __proto__: null,
                start(BH) {
                  HH = BH
                }
              }, {
                __proto__: null
              }),
              LH = new oH(BH, {
                __proto__: null,
                headers: {
                  __proto__: null,
                  "Content-Type": "application/wasm"
                }
              });
            return {
              controller: HH,
              compiled: (0, zH.W)((0, zH.C)((0, zH.hb)(LH)))
            }
          } catch (BH) {
            throw new Error(`${HH} could not be streamed into a compile: ${(0,tH.f)(BH)}`)
          }
        }(HH),
        {
          enqueue: YH,
          close: uH,
          error: QH
        } = fH,
        WH = HH => {
          try {
            kH(QH, XH, [HH])
          } catch {}
        };
      let MH = 0;
      const xH = (LH, AH) => {
        if (MH + AH > BH) throw new Error(`${HH} decoded past its module's ${BH} bytes`);
        kH(zH.cb, new zH.p(EH), [new zH.p(LH), MH]);
        try {
          kH(YH, XH, [new zH.p(EH, MH, AH)])
        } catch {}
        MH += AH
      };
      let vH, PH;
      try {
        vH = new OH(HH, BH, xH, AH, CH)
      } catch (bH) {
        throw WH(bH), bH
      }
      const TH = HH => {
        vH.fail(HH), void 0 !== PH && cH(PH)
      };
      let UH = !1;
      LH.addEventListener("abort", (() => {
        UH && vH.markWorkerFailed(), TH(new Error(`${HH} stalled`))
      }), {
        once: !0
      }), (0, rH.u)(GH, (() => {}), TH);
      try {
        let hH;
        try {
          hH = await fetch(HH, {
            signal: LH
          })
        } catch (bH) {
          throw new Error(`Fetching ${HH} failed: ${(0,tH.f)(bH)}`)
        }
        const {
          ok: CH,
          status: EH,
          body: XH
        } = function(HH, BH) {
          try {
            const {
              ok: HH,
              status: LH
            } = BH;
            return {
              ok: HH,
              status: LH,
              body: kH(zH.$, BH, [])
            }
          } catch {
            throw new Error(`${HH} came in a response a page script made`)
          }
        }(HH, hH);
        if (!CH) throw new Error(`Fetching ${HH} failed: HTTP ${EH}`);
        AH();
        const GH = kH(zH.R, XH, []);
        PH = GH;
        const YH = () => {
          cH(GH)
        };
        for ((0, rH.u)(vH.decoded, YH, YH);;) {
          let BH;
          try {
            BH = await kH(zH.X, GH, [])
          } catch (bH) {
            throw new Error(`Downloading ${HH} failed: ${(0,tH.f)(bH)}`)
          }
          if (BH.done) break;
          AH(), vH.push(BH.value)
        }
        if (UH = !0, vH.end(), await vH.decoded, SH(), MH !== BH) throw new Error(`${HH} ended before its module did`)
      } catch (bH) {
        throw WH(bH), TH(bH), bH
      }
      vH.terminate();
      try {
        kH(uH, XH, [])
      } catch {}
      const VH = await GH;
      return void 0 !== hH && await (0, zH.A)(HH, new zH.p(EH), {
        sha256: hH.sha256,
        onMismatch: () => {}
      }), VH
    }

    function cH(HH) {
      try {
        (0, zH.W)(HH.cancel())
      } catch {}
    }
    const eH = ".zst.bin",
      qH = 1e3;
    let gH = null;

    function NH(HH) {
      return gH ??= function() {
        const HH = new Map,
          BH = "bloxd_wasm_webgpu:5163087,bloxd_wasm_webgl:5546226,bloxd_wasm_webgl1:4879736,bloxd_wasm_workers:203635,bloxd_wasm_models:478484,bloxd_wasm_client:3732760";
        for (const LH of BH?.split(",") ?? []) {
          const [BH = "", AH] = LH.split(":"), rH = Number(AH);
          Number.isInteger(rH) && rH > 0 && HH.set(BH, rH)
        }
        return HH
      }(), gH.get(HH)
    }
    async function RH(HH, BH) {
      let LH = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
      const AH = NH(HH.name);
      if (void 0 === AH) return jH(await nH(HH, BH, LH), "cold-wasm");
      const SH = lH ? new VH : null;
      let hH;
      try {
        if (CH = HH.url(), GH()?.includes(XH(CH)) && await async function(HH) {
            const BH = new AbortController;
            let LH;
            const AH = (0, rH.i)((HH => {
              LH = setTimeout((() => {
                BH.abort(), HH(null)
              }), qH)
            }));
            try {
              const LH = fetch(HH.href, {
                  cache: "only-if-cached",
                  mode: "same-origin",
                  signal: BH.signal
                }),
                SH = await (0, rH.s)([LH, AH]);
              return !!SH?.ok && ((0, zH.W)(SH.body.cancel()), !0)
            } catch {
              return !1
            } finally {
              clearTimeout(LH)
            }
          }(HH.url())) return SH?.stop(), await async function(HH, BH, LH, AH) {
          let rH = !1;
          const SH = LH && {
            sha256: LH.sha256,
            onMismatch: () => {
              rH = !0
            }
          };
          try {
            return jH(await nH(HH, SH, AH), "warm")
          } catch (hH) {
            const AH = await FH(HH, BH, LH, null);
            if (null === AH) throw rH && LH.onMismatch(), hH;
            return console.warn(`${HH.url().href} from the HTTP cache failed: ${(0,tH.f)(hH)}: loaded its copy instead`), jH(AH, rH ? "warm-refused" : "warm-broken")
          }
        }(HH, AH, BH, LH);
        hH = await FH(HH, AH, BH, SH)
      } finally {
        SH?.stop()
      }
      var CH;
      return null !== hH ? jH(hH, "cold-worker") : jH(await nH(HH, BH, LH), "cold-wasm")
    }

    function jH(HH, BH) {
      return {
        __proto__: null,
        module: HH,
        path: BH
      }
    }

    function nH(HH, BH, LH) {
      return void 0 === NH(HH.name) ? (0, zH.J)(HH.url(), BH, LH) : (0, zH.J)(HH.url(), BH, {
        ...LH,
        hideThen: !0,
        onDownloaded: () => {
          ! function(HH) {
            const BH = GH();
            if (null === BH) return;
            const LH = XH(HH),
              AH = BH.filter((HH => HH !== LH));
            AH.push(LH);
            try {
              localStorage.setItem(CH, JSON.stringify(AH.slice(-EH)))
            } catch (rH) {
              console.warn(`Bloxd wasm: ${LH} could not be recorded as downloaded: a later join asks the HTTP cache nothing for it`, rH)
            }
          }(HH.url()), LH.onDownloaded?.()
        }
      })
    }
    async function FH(HH, BH, LH, AH) {
      if (!lH || !UH()) return null;
      const rH = HH.url(),
        SH = `${rH.href}${eH}`;
      try {
        return await (0, zH.gb)(SH, ((HH, rH, hH) => KH(SH, BH, HH, rH, hH, LH, AH)))
      } catch (hH) {
        return console.warn(`${(0,tH.f)(hH)}: loading ${rH.href} instead`), null
      }
    }
    let DH = null,
      wH = !1;
    const ZH = new Map,
      dH = new Map;
    let aH = null;

    function sH(HH) {
      const BH = BH => HH.filter((HH => ZH.get(HH)?.state === BH)).length,
        LH = BH("compiled");
      return LH > 0 && LH === HH.length ? "compiled" : LH + BH("compiling") > 0 ? "compiling" : "none"
    }

    function JH() {
      return aH ?? sH([...ZH.keys()])
    }

    function iH(HH, BH, LH) {
      return null === DH ? DH = HB(HH, BH, LH?.memoryMaximumBytes) : HH !== DH.build ? console.warn(`Bloxd wasm: ${HH.name} was asked for after ${DH.build.name} started loading, which this thread keeps`) : BH.name !== DH.workers.name && console.warn(`Bloxd wasm: ${BH.name} was asked for workers after ${DH.workers.name}, which this thread keeps`), LH?.reloadFailedDownload && !wH && (0, AH.db)() && (wH = !0, DH = HB(DH.build, DH.workers, DH.memoryMaximumBytes)), DH.loaded
    }

    function pH(HH) {
      return null === DH ? (0, rH.i)((HH => {
        HH(!1)
      })) : ((0, AH.$)() && (DH = HB(DH.build, DH.workers, HH ?? DH.memoryMaximumBytes)), DH.loaded)
    }

    function yH(HH, BH) {
      if (null !== DH) return (0, rH.g)([]);
      const LH = HH.filter((HH => !ZH.has(HH.name))).map((HH => {
        const LH = new AbortController,
          AH = {
            compiled: nH(HH, (0, SH.c)(HH.name), {
              priority: BH,
              xB: LH.signal,
              onDownloaded: () => {
                AH.downloaded = !0
              },
              retries: {
                onRetry: () => {
                  AH.downloaded = !1, null !== DH && LH.abort()
                }
              }
            }),
            cancel: LH,
            downloaded: !1,
            state: "compiling"
          };
        return ZH.set(HH.name, AH), (0, rH.i)((BH => {
          (0, rH.u)(AH.compiled, (() => {
            AH.downloaded = !0, AH.state = "compiled", BH()
          }), (rH => {
            AH.state = "failed", LH.signal.aborted || console.warn(`Bloxd wasm: ${HH.name}'s compile ahead of the load failed: the load compiles it afresh`, rH), BH()
          }))
        }))
      }));
      return (0, rH.g)(LH)
    }

    function HB(HH, BH, LH) {
      aH ??= sH(BH.name === HH.name ? [HH.name] : [HH.name, BH.name]);
      const SH = (0, AH.K)((async () => {
        (0, hH.x)(), dH.clear();
        const LH = LB(HH),
          AH = BH.name === HH.name ? LH : LB(BH);
        for (const {
            cancel: HH
          }
          of ZH.values()) HH.abort();
        ZH.clear(), await (0, rH.g)([LH, AH]);
        const SH = await LH,
          tH = await AH;
        return (0, hH.x)(), {
          module: SH,
          workerModule: tH
        }
      }), HH, LH);
      return {
        build: HH,
        workers: BH,
        memoryMaximumBytes: LH,
        loaded: SH
      }
    }

    function BB(HH) {
      return dH.get(HH)
    }

    function LB(HH) {
      const BH = performance.now(),
        LH = ZH.get(HH.name);
      ZH.delete(HH.name);
      const AH = !0 === LH?.downloaded ? LH : void 0;
      return void 0 !== LH && void 0 === AH && LH.cancel.abort(), (0, rH.i)(((LH, SH) => {
        const hH = (AH, rH) => {
            dH.set(HH.name, {
              path: rH,
              ms: performance.now() - BH
            }), LH(AH)
          },
          tH = () => {
            (0, rH.u)(rB(HH), (HH => {
              let {
                module: BH,
                path: LH
              } = HH;
              hH(BH, LH)
            }), SH)
          };
        void 0 === AH ? tH() : (0, rH.u)(AH.compiled, (HH => {
          hH(HH, "ahead")
        }), tH)
      }))
    }
    async function AB(HH, BH) {
      const {
        module: LH
      } = await rB(HH, {
        retries: BH
      });
      return LH
    }
    async function rB(HH) {
      let BH = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
      return await RH(HH, (0, SH.c)(HH.name), BH)
    }
  },
  7172: (HH, BH, LH) => {
    LH.d(BH, {
      c: () => hH
    });
    var AH = LH(3171);
    const rH = {
      bloxd_wasm: () => "1a9ca3a508835437adb51fd7003f50a214824ce5852e2706a91af532afe51adc",
      bloxd_wasm_client: () => "9f302fa35bb62365f9d32f95a5401b1d28709799cd2ce60e443d8f43994a3e3d",
      bloxd_wasm_workers: () => "fea049daed4444b474b0db1a8bf4826a6e48ef50100b13d23f4bea2aa2ef7dbb",
      bloxd_wasm_models: () => "dafa53585131db414c9c059dee3ad89ee833dbd1a487c182d99120934368408f",
      bloxd_wasm_webgpu: () => "f7305e0c5434bf6438e555b6ebd02438a4b33e9ec1a95ef795555746fdd24844",
      bloxd_wasm_webgl: () => "ee0b380f26fef18564acf325d228b72d1e1361881cb2e2f9686c33d7b9b28c2e",
      bloxd_wasm_webgl1: () => "0cfbcf815fae6493c502153cc3696123db8dd68ba708a3ebe5ed4c9bdf52dd9d",
      bloxd_wasm_replay: () => "00749a68df89480806d66c2caa0106222009fc9d980e99c298088093c5266723",
      bloxd_wasm_recorder: () => "fff4e7dd116ddac14614d11c6efe68b0beab86dd32f03cf09d2d291dd715dbc1",
      bloxd_wasm_anim: () => "e06ab9bfc1a83b6498470d65996c60a55117dc9e341e17cb44260cad0fe8d434",
      bloxd_wasm_textures: () => "bea12b411e2841e721547a8f34b2e2c8d67c134acf1aabfafa9f47d2dce32aca",
      bloxd_wasm_shader_pack: () => "153845fdc736fc7d3f35302c98089348c2e3d0550da1ed6cc5e35905a2a723c3"
    };
    var SH = LH(5143);

    function hH(HH) {
      const BH = Object.prototype.hasOwnProperty.call(rH, HH) ? rH[HH]() : void 0;
      if (void 0 !== BH) return {
        sha256: BH,
        onMismatch: SH.v
      };
      throw new AH.j(`${HH} has no release digest, so this build refuses it`)
    }
  },
  7189: (HH, BH, LH) => {
    LH.d(BH, {
      d: () => AH,
      g: () => hH,
      i: () => tH,
      j: () => rH,
      k: () => SH
    });
    const AH = ["terrain", "liquid", "model"];

    function rH() {
      const HH = [];
      for (const BH of [!1, !0])
        for (const LH of AH) HH.push({
          strict: BH,
          program: LH
        });
      return HH
    }

    function SH(HH) {
      return `${HH.strict?"strict":"allow"}.${HH.program}`
    }

    function hH(HH) {
      return !HH.hooks.vertex && !HH.hooks.surface && !HH.hooks.light
    }

    function tH(HH, BH) {
      return "off" !== BH && (null === HH || HH.some((HH => HH.key.strict === ("strict" === BH) && !hH(HH))))
    }
  }
};
Object.freeze(modules);
for (const HH in modules) Object.freeze(modules[HH]);