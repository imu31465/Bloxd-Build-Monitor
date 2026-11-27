export const id = 158;
export const ids = [158];
export const modules = {
  37265: (WW, iW, OW) => {
    OW.d(iW, {
      b: () => LW,
      e: () => wW,
      i: () => PW,
      m: () => ZW
    });
    var mW = OW(37257),
      EW = OW(13);
    const NW = /wasm-function\[\d+\]|wasm:\/\/|\[wasm code\]/;

    function PW(WW) {
      if (WW instanceof WebAssembly.RuntimeError) return !0;
      const iW = WW instanceof Error ? WW.stack : void 0;
      return "string" === typeof iW && NW.test(iW)
    }

    function LW(WW, iW, OW) {
      var EW;
      const PW = WW instanceof Error ? WW.name : "thrown",
        LW = (WW instanceof Error && null !== (EW = WW.stack) && void 0 !== EW ? EW : "").split("\n").filter((WW => NW.test(WW))).slice(0, 8).map((WW => WW.trim())),
        cW = null === iW ? "wasm memory unknown" : `wasm memory ${Math.round(iW/2**20)} MB`,
        wW = null === OW.panic ? "" : `, panic: ${(0,mW.h)(OW.panic)}`,
        tW = `${PW}: ${WW instanceof Error?WW.message:String(WW)}`;
      return `${(0,mW.o)(OW.kind,OW.refusedBytes)} ${tW} (${cW})${wW}${LW.length>0?` | ${LW.join(" < ")}`:""}`
    }
    const cW = /on a detached ArrayBuffer|access detached ArrayBuffer|has been detached from the view/;

    function wW(WW) {
      var iW;
      let OW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ArrayBuffer.prototype;
      if (!(WW instanceof Error) || !cW.test(WW.message)) return {};
      if (!("detached" in OW)) return {
        arrayBufferDetached: "absent"
      };
      return {
        arrayBufferDetached: (0, EW.W)(null === (iW = (0, EW.O)(OW, "detached")) || void 0 === iW ? void 0 : iW.get, /^function (get )?detached\(\) \{\s*\[native code\]\s*\}$/) ? "native" : "script"
      }
    }
    const tW = 500;

    function ZW(WW) {
      let iW = "[object Object]";
      try {
        iW = String(WW)
      } catch {}
      if ("[object Object]" !== iW) return iW;
      try {
        var OW, mW;
        return null !== (OW = null === (mW = JSON.stringify(WW)) || void 0 === mW ? void 0 : mW.slice(0, tW)) && void 0 !== OW ? OW : iW
      } catch {
        return iW
      }
    }
  },
  37297: (WW, iW, OW) => {
    OW.d(iW, {
      e: () => QW,
      f: () => mi,
      j: () => rW,
      n: () => ii,
      o: () => zW,
      s: () => FW
    });
    var mW = OW(2381),
      EW = OW(2401),
      NW = OW(7625),
      PW = OW(5427),
      LW = OW(2393),
      cW = OW(2388);
    const wW = "bloxd-wasmDownloaded",
      tW = 12;

    function ZW(WW) {
      return WW.pathname.slice(WW.pathname.lastIndexOf("/") + 1)
    }

    function xW() {
      try {
        if ("undefined" === typeof localStorage) return null;
        const WW = JSON.parse(localStorage.getItem(wW) ?? "[]");
        return Array.isArray(WW) ? WW.filter((WW => "string" === typeof WW)) : []
      } catch (WW) {
        return console.warn("Bloxd wasm: the record of downloaded modules could not be read: asking the HTTP cache for none", WW), null
      }
    }
    const lW = Reflect.apply,
      AW = "undefined" === typeof Worker ? void 0 : Worker,
      bW = AW?.prototype.postMessage,
      jW = AW?.prototype.terminate,
      UW = "undefined" === typeof EventTarget ? void 0 : EventTarget.prototype.addEventListener,
      kW = "undefined" === typeof MessageEvent ? void 0 : Object.getOwnPropertyDescriptor(MessageEvent.prototype, "data")?.get,
      sW = Object.getOwnPropertyDescriptor(Object.getPrototypeOf(Uint8Array.prototype), "buffer").get,
      MW = function() {
        try {
          return (0, PW.j)(AW, "Worker", !0) && (0, PW.j)(bW, "postMessage") && (0, PW.j)(jW, "terminate") && (0, PW.j)(sW, "buffer") && void 0 !== UW && void 0 !== kW
        } catch {
          return !1
        }
      }();
    let KW = !1;

    function SW() {
      return MW && !KW
    }
    class YW {
      worker = null;
      failed = !1;
      constructor() {
        if (SW()) try {
          this.worker = TW(), lW(UW, this.worker, ["error", () => {
            this.failed = !0
          }])
        } catch {
          this.stop()
        }
      }
      take() {
        const WW = this.worker;
        if (this.worker = null, null !== WW && this.failed) throw lW(jW, WW, []), new Error("it did not run");
        return WW
      }
      stop() {
        const WW = this.worker;
        this.worker = null, null !== WW && lW(jW, WW, [])
      }
    }
    class yW {
      decoded;
      worker;
      reject;
      constructor(WW, iW, OW, mW, NW) {
        try {
          this.worker = NW?.take() ?? TW()
        } catch (wW) {
          throw KW = !0, new Error(`The zstd decoder's worker did not start: ${(0,LW.h)(wW)}`)
        }
        const PW = this.worker;
        this.decoded = (0, EW.l)(((iW, EW) => {
          this.reject = EW;
          const NW = (WW, iW) => {
            lW(UW, PW, [WW, iW])
          };
          NW("message", (WW => {
            mW();
            try {
              const mW = lW(kW, WW, []);
              if (!0 === mW) iW();
              else {
                if ("string" === typeof mW) throw mW.startsWith(LW.d) && (KW = !0), new Error(mW);
                OW(mW, lW(cW.v, mW, []))
              }
            } catch (wW) {
              EW(wW)
            }
          })), NW("error", (() => {
            KW = !0, EW(new Error("The zstd decoder's worker did not run"))
          })), NW("messageerror", (() => {
            EW(new Error(`${WW}'s decoder sent a piece that could not be read`))
          }))
        })), (0, cW.P)(this.decoded), lW(bW, PW, [
          [WW, iW]
        ])
      }
      push(WW) {
        lW(bW, this.worker, [WW, [lW(sW, WW, [])]])
      }
      end() {
        lW(bW, this.worker, [null])
      }
      markWorkerFailed() {
        KW = !0
      }
      fail(WW) {
        this.reject(WW), this.terminate()
      }
      terminate() {
        lW(jW, this.worker, [])
      }
    }

    function TW() {
      if (globalThis.Worker !== AW) throw new Error("Worker is not the one the page loaded with");
      return new Worker(new URL(OW.p + OW.u(80), OW.b), {
        name: "wasmZstdDecoder",
        type: "module"
      })
    }
    const JW = Reflect.apply,
      hW = ArrayBuffer,
      HW = "undefined" === typeof Response ? void 0 : Response,
      nW = "undefined" === typeof ReadableStream ? void 0 : ReadableStream,
      uW = function() {
        let WW;
        void 0 !== nW && new nW({
          __proto__: null,
          start(iW) {
            const {
              enqueue: OW,
              close: mW,
              error: EW
            } = Object.getPrototypeOf(iW);
            WW = {
              enqueue: OW,
              close: mW,
              error: EW
            }
          }
        }, {
          __proto__: null
        });
        return WW
      }(),
      oW = function() {
        try {
          return "undefined" !== typeof WebAssembly && "function" === typeof WebAssembly.compileStreaming && void 0 !== uW && (0, PW.j)(HW, "Response", !0) && (0, PW.j)(nW, "ReadableStream", !0) && (0, PW.j)(uW.enqueue, "enqueue") && (0, PW.j)(uW.close, "close") && (0, PW.j)(uW.error, "error") && (0, PW.j)(cW.S, "body") && (0, PW.j)(cW.G, "getReader") && (0, PW.j)(cW.Q, "read")
        } catch {
          return !1
        }
      }();
    async function dW(WW, iW, OW, mW, NW, PW, wW) {
      const tW = new hW(iW),
        {
          controller: ZW,
          compiled: xW
        } = function(WW) {
          try {
            let WW;
            const iW = new nW({
                __proto__: null,
                start(iW) {
                  WW = iW
                }
              }, {
                __proto__: null
              }),
              OW = new HW(iW, {
                __proto__: null,
                headers: {
                  __proto__: null,
                  "Content-Type": "application/wasm"
                }
              });
            return {
              controller: WW,
              compiled: (0, cW.P)((0, cW.y)((0, cW.bb)(OW)))
            }
          } catch (iW) {
            throw new Error(`${WW} could not be streamed into a compile: ${(0,LW.h)(iW)}`)
          }
        }(WW),
        {
          enqueue: lW,
          close: AW,
          error: bW
        } = uW,
        jW = WW => {
          try {
            JW(bW, ZW, [WW])
          } catch {}
        };
      let UW = 0;
      const kW = (OW, mW) => {
        if (UW + mW > iW) throw new Error(`${WW} decoded past its module's ${iW} bytes`);
        JW(cW.V, new cW.o(tW), [new cW.o(OW), UW]);
        try {
          JW(lW, ZW, [new cW.o(tW, UW, mW)])
        } catch {}
        UW += mW
      };
      let sW, MW;
      try {
        sW = new yW(WW, iW, kW, mW, wW)
      } catch (TW) {
        throw jW(TW), TW
      }
      const KW = WW => {
        sW.fail(WW), void 0 !== MW && eW(MW)
      };
      let SW = !1;
      OW.addEventListener("abort", (() => {
        SW && sW.markWorkerFailed(), KW(new Error(`${WW} stalled`))
      }), {
        once: !0
      }), (0, EW.v)(xW, (() => {}), KW);
      try {
        let PW;
        try {
          PW = await fetch(WW, {
            signal: OW
          })
        } catch (TW) {
          throw new Error(`Fetching ${WW} failed: ${(0,LW.h)(TW)}`)
        }
        const {
          ok: wW,
          status: tW,
          body: ZW
        } = function(WW, iW) {
          try {
            const {
              ok: WW,
              status: OW
            } = iW;
            return {
              ok: WW,
              status: OW,
              body: JW(cW.S, iW, [])
            }
          } catch {
            throw new Error(`${WW} came in a response a page script made`)
          }
        }(WW, PW);
        if (!wW) throw new Error(`Fetching ${WW} failed: HTTP ${tW}`);
        mW();
        const xW = JW(cW.G, ZW, []);
        MW = xW;
        const lW = () => {
          eW(xW)
        };
        for ((0, EW.v)(sW.decoded, lW, lW);;) {
          let iW;
          try {
            iW = await JW(cW.Q, xW, [])
          } catch (TW) {
            throw new Error(`Downloading ${WW} failed: ${(0,LW.h)(TW)}`)
          }
          if (iW.done) break;
          mW(), sW.push(iW.value)
        }
        if (SW = !0, sW.end(), await sW.decoded, NW(), UW !== iW) throw new Error(`${WW} ended before its module did`)
      } catch (TW) {
        throw jW(TW), KW(TW), TW
      }
      sW.terminate();
      try {
        JW(AW, ZW, [])
      } catch {}
      const YW = await xW;
      return void 0 !== PW && await (0, cW.x)(WW, new cW.o(tW), {
        sha256: PW.sha256,
        onMismatch: () => {}
      }), YW
    }

    function eW(WW) {
      try {
        (0, cW.P)(WW.cancel())
      } catch {}
    }
    const vW = ".zst.bin",
      gW = 1e3;
    let DW = null;

    function VW(WW) {
      return DW ??= function() {
        const WW = new Map,
          iW = "bloxd_wasm_webgpu:5238928,bloxd_wasm_webgl:5662882,bloxd_wasm_webgl1:4934167,bloxd_wasm_workers:203635,bloxd_wasm_models:478484,bloxd_wasm_client:3741670";
        for (const OW of iW?.split(",") ?? []) {
          const [iW = "", mW] = OW.split(":"), EW = Number(mW);
          Number.isInteger(EW) && EW > 0 && WW.set(iW, EW)
        }
        return WW
      }(), DW.get(WW)
    }
    async function pW(WW, iW) {
      let OW = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
      const mW = VW(WW.name);
      if (void 0 === mW) return fW(await CW(WW, iW, OW), "cold-wasm");
      const NW = oW ? new YW : null;
      let PW;
      try {
        if (wW = WW.url(), xW()?.includes(ZW(wW)) && await async function(WW) {
            const iW = new AbortController;
            let OW;
            const mW = (0, EW.l)((WW => {
              OW = setTimeout((() => {
                iW.abort(), WW(null)
              }), gW)
            }));
            try {
              const OW = fetch(WW.href, {
                  cache: "only-if-cached",
                  mode: "same-origin",
                  signal: iW.signal
                }),
                NW = await (0, EW.t)([OW, mW]);
              return !!NW?.ok && ((0, cW.P)(NW.body.cancel()), !0)
            } catch {
              return !1
            } finally {
              clearTimeout(OW)
            }
          }(WW.url())) return NW?.stop(), await async function(WW, iW, OW, mW) {
          let EW = !1;
          const NW = OW && {
            sha256: OW.sha256,
            onMismatch: () => {
              EW = !0
            }
          };
          try {
            return fW(await CW(WW, NW, mW), "warm")
          } catch (PW) {
            const mW = await XW(WW, iW, OW, null);
            if (null === mW) throw EW && OW.onMismatch(), PW;
            return console.warn(`${WW.url().href} from the HTTP cache failed: ${(0,LW.h)(PW)}: loaded its copy instead`), fW(mW, EW ? "warm-refused" : "warm-broken")
          }
        }(WW, mW, iW, OW);
        PW = await XW(WW, mW, iW, NW)
      } finally {
        NW?.stop()
      }
      var wW;
      return null !== PW ? fW(PW, "cold-worker") : fW(await CW(WW, iW, OW), "cold-wasm")
    }

    function fW(WW, iW) {
      return {
        __proto__: null,
        module: WW,
        path: iW
      }
    }

    function CW(WW, iW, OW) {
      return void 0 === VW(WW.name) ? (0, cW.B)(WW.url(), iW, OW) : (0, cW.B)(WW.url(), iW, {
        ...OW,
        hideThen: !0,
        onDownloaded: () => {
          ! function(WW) {
            const iW = xW();
            if (null === iW) return;
            const OW = ZW(WW),
              mW = iW.filter((WW => WW !== OW));
            mW.push(OW);
            try {
              localStorage.setItem(wW, JSON.stringify(mW.slice(-tW)))
            } catch (EW) {
              console.warn(`Bloxd wasm: ${OW} could not be recorded as downloaded: a later join asks the HTTP cache nothing for it`, EW)
            }
          }(WW.url()), OW.onDownloaded?.()
        }
      })
    }
    async function XW(WW, iW, OW, mW) {
      if (!oW || !SW()) return null;
      const EW = WW.url(),
        NW = `${EW.href}${vW}`;
      try {
        return await (0, cW.Z)(NW, ((WW, EW, PW) => dW(NW, iW, WW, EW, PW, OW, mW)))
      } catch (PW) {
        return console.warn(`${(0,LW.h)(PW)}: loading ${EW.href} instead`), null
      }
    }
    let BW = null,
      qW = !1;
    const RW = new Map,
      GW = new Map;
    let IW = null;

    function aW(WW) {
      const iW = iW => WW.filter((WW => RW.get(WW)?.state === iW)).length,
        OW = iW("compiled");
      return OW > 0 && OW === WW.length ? "compiled" : OW + iW("compiling") > 0 ? "compiling" : "none"
    }

    function rW() {
      return IW ?? aW([...RW.keys()])
    }

    function zW(WW, iW, OW) {
      return null === BW ? BW = Wi(WW, iW, OW?.memoryMaximumBytes) : WW !== BW.build ? console.warn(`Bloxd wasm: ${WW.name} was asked for after ${BW.build.name} started loading, which this thread keeps`) : iW.name !== BW.workers.name && console.warn(`Bloxd wasm: ${iW.name} was asked for workers after ${BW.workers.name}, which this thread keeps`), OW?.reloadFailedDownload && !qW && (0, mW.ab)() && (qW = !0, BW = Wi(BW.build, BW.workers, BW.memoryMaximumBytes)), BW.loaded
    }

    function FW(WW) {
      return null === BW ? (0, EW.l)((WW => {
        WW(!1)
      })) : ((0, mW.$)() && (BW = Wi(BW.build, BW.workers, WW ?? BW.memoryMaximumBytes)), BW.loaded)
    }

    function QW(WW, iW) {
      if (null !== BW) return (0, EW.h)([]);
      const OW = WW.filter((WW => !RW.has(WW.name))).map((WW => {
        const OW = new AbortController,
          mW = {
            compiled: CW(WW, (0, NW.c)(WW.name), {
              priority: iW,
              uW: OW.signal,
              onDownloaded: () => {
                mW.downloaded = !0
              },
              retries: {
                onRetry: () => {
                  mW.downloaded = !1, null !== BW && OW.abort()
                }
              }
            }),
            cancel: OW,
            downloaded: !1,
            state: "compiling"
          };
        return RW.set(WW.name, mW), (0, EW.l)((iW => {
          (0, EW.v)(mW.compiled, (() => {
            mW.downloaded = !0, mW.state = "compiled", iW()
          }), (EW => {
            mW.state = "failed", OW.signal.aborted || console.warn(`Bloxd wasm: ${WW.name}'s compile ahead of the load failed: the load compiles it afresh`, EW), iW()
          }))
        }))
      }));
      return (0, EW.h)(OW)
    }

    function Wi(WW, iW, OW) {
      IW ??= aW(iW.name === WW.name ? [WW.name] : [WW.name, iW.name]);
      const NW = (0, mW.K)((async () => {
        (0, PW.C)(), GW.clear();
        const OW = Oi(WW),
          mW = iW.name === WW.name ? OW : Oi(iW);
        for (const {
            cancel: WW
          }
          of RW.values()) WW.abort();
        RW.clear(), await (0, EW.h)([OW, mW]);
        const NW = await OW,
          LW = await mW;
        return (0, PW.C)(), {
          module: NW,
          workerModule: LW
        }
      }), WW, OW);
      return {
        build: WW,
        workers: iW,
        memoryMaximumBytes: OW,
        loaded: NW
      }
    }

    function ii(WW) {
      return GW.get(WW)
    }

    function Oi(WW) {
      const iW = performance.now(),
        OW = RW.get(WW.name);
      RW.delete(WW.name);
      const mW = !0 === OW?.downloaded ? OW : void 0;
      return void 0 !== OW && void 0 === mW && OW.cancel.abort(), (0, EW.l)(((OW, NW) => {
        const PW = (mW, EW) => {
            GW.set(WW.name, {
              path: EW,
              ms: performance.now() - iW
            }), OW(mW)
          },
          LW = () => {
            (0, EW.v)(Ei(WW), (WW => {
              let {
                module: iW,
                path: OW
              } = WW;
              PW(iW, OW)
            }), NW)
          };
        void 0 === mW ? LW() : (0, EW.v)(mW.compiled, (WW => {
          PW(WW, "ahead")
        }), LW)
      }))
    }
    async function mi(WW, iW) {
      const {
        module: OW
      } = await Ei(WW, {
        retries: iW
      });
      return OW
    }
    async function Ei(WW) {
      let iW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
      return await pW(WW, (0, NW.c)(WW.name), iW)
    }
  },
  7625: (WW, iW, OW) => {
    OW.d(iW, {
      c: () => PW
    });
    var mW = OW(2388);
    const EW = {
      bloxd_wasm: () => "102e63c69ba1846a7ef3e4f3119d9407d849792a77d386b77d132cbd19000baf",
      bloxd_wasm_client: () => "828553d657b63b8b78489e1c312c1521bbff4059679c6442f668bd5b77b44d26",
      bloxd_wasm_workers: () => "c3e0f9c9d3450b1b58eeeabddc49241fbc8ffeffe05a0e2cd8e7c4d8847442a4",
      bloxd_wasm_models: () => "77704cdcef014d8f1aa72c519a652297b25e80d6cafc34478014bd291b97f37e",
      bloxd_wasm_webgpu: () => "603e3bc645f5c3d0c95d7f24327b193ab3d090814bbdb68c6ad2438495025f9d",
      bloxd_wasm_webgl: () => "8157beb90345cb7dcaa6d28e4816f7951234731f38d297579b1de22172034862",
      bloxd_wasm_webgl1: () => "ac00e7c2f783046413779c397bcab25db7aaf3ceb5743e39ab05f2fc699b197b",
      bloxd_wasm_replay: () => "a585d75239773f442a258771a295653a54d6e99e4b872f0a2a4512a7fceaca4a",
      bloxd_wasm_recorder: () => "1c3da6ac9b656d482455def4919768325136d09e94b6b18afdb7ecc55287a265",
      bloxd_wasm_anim: () => "95aba8d7de72cdcce081f679def0f8248e845944fba77b065315103503401e53",
      bloxd_wasm_textures: () => "378f24688349d1dc6f860f72e8fafaf79ead5d9fccc14eb96ca959801b415d82",
      bloxd_wasm_shader_pack: () => "fa64ff9ddba4399ee91af4ff8bb1c0cc63df7e9ee2ebb4a275be7918ce6cdefd"
    };
    var NW = OW(5427);

    function PW(WW) {
      const iW = Object.prototype.hasOwnProperty.call(EW, WW) ? EW[WW]() : void 0;
      if (void 0 !== iW) return {
        sha256: iW,
        onMismatch: NW.y
      };
      throw new mW.k(`${WW} has no release digest, so this build refuses it`)
    }
  },
  37257: (WW, iW, OW) => {
    OW.d(iW, {
      c: () => mW,
      e: () => NW,
      h: () => cW,
      l: () => PW,
      o: () => EW
    });
    const mW = /^alloc_failed (\d+) bytes$/;

    function EW(WW, iW) {
      return NW(WW, iW) ? `trap=alloc_failed ${iW} bytes` : `trap=${WW}`
    }

    function NW(WW, iW) {
      return "unreachable" === WW && iW > 0
    }

    function PW(WW, iW, OW) {
      const mW = function(WW) {
        return WW instanceof WebAssembly.RuntimeError ? /unreachable/i.test(WW.message) ? "unreachable" : /out of bounds/i.test(WW.message) ? "out_of_bounds" : "runtime_error" : (WW instanceof RangeError || WW instanceof Error && "InternalError" === WW.name) && /call stack|recursion/i.test(WW.message) ? "stack_overflow" : "js_error"
      }(WW);
      if ("unreachable" !== mW) return {
        kind: mW,
        panic: null,
        refusedBytes: 0
      };
      const EW = iW(),
        NW = OW();
      return {
        kind: mW,
        panic: NW > 0 ? null : EW,
        refusedBytes: NW
      }
    }
    const LW = 300;

    function cW(WW) {
      return WW.replace(/\s*\n\s*/g, " / ").slice(0, LW)
    }
  }
};
Object.freeze(modules);
for (const WW in modules) Object.freeze(modules[WW]);