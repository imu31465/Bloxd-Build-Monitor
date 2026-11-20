export const id = 132;
export const ids = [132];
export const modules = {
  36089: (TT, kT, cT) => {
    cT.d(kT, {
      e: () => yT,
      g: () => xT,
      h: () => OT,
      k: () => AT
    });
    var lT = cT(36077),
      MT = cT(15);
    const KT = /wasm-function\[\d+\]|wasm:\/\/|\[wasm code\]/;

    function OT(TT) {
      if (TT instanceof WebAssembly.RuntimeError) return !0;
      const kT = TT instanceof Error ? TT.stack : void 0;
      return "string" === typeof kT && KT.test(kT)
    }

    function yT(TT, kT, cT) {
      var MT;
      const OT = TT instanceof Error ? TT.name : "thrown",
        yT = (TT instanceof Error && null !== (MT = TT.stack) && void 0 !== MT ? MT : "").split("\n").filter((TT => KT.test(TT))).slice(0, 8).map((TT => TT.trim())),
        fT = null === kT ? "wasm memory unknown" : `wasm memory ${Math.round(kT/2**20)} MB`,
        xT = null === cT.panic ? "" : `, panic: ${(0,lT.i)(cT.panic)}`,
        IT = `${OT}: ${TT instanceof Error?TT.message:String(TT)}`;
      return `${(0,lT.m)(cT.kind,cT.refusedBytes)} ${IT} (${fT})${xT}${yT.length>0?` | ${yT.join(" < ")}`:""}`
    }
    const fT = /on a detached ArrayBuffer|access detached ArrayBuffer|has been detached from the view/;

    function xT(TT) {
      var kT;
      let cT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ArrayBuffer.prototype;
      if (!(TT instanceof Error) || !fT.test(TT.message)) return {};
      if (!("detached" in cT)) return {
        arrayBufferDetached: "absent"
      };
      return {
        arrayBufferDetached: (0, MT.U)(null === (kT = (0, MT.R)(cT, "detached")) || void 0 === kT ? void 0 : kT.get, /^function (get )?detached\(\) \{\s*\[native code\]\s*\}$/) ? "native" : "script"
      }
    }
    const IT = 500;

    function AT(TT) {
      let kT = "[object Object]";
      try {
        kT = String(TT)
      } catch {}
      if ("[object Object]" !== kT) return kT;
      try {
        var cT, lT;
        return null !== (cT = null === (lT = JSON.stringify(TT)) || void 0 === lT ? void 0 : lT.slice(0, IT)) && void 0 !== cT ? cT : kT
      } catch {
        return kT
      }
    }
  },
  36113: (TT, kT, cT) => {
    cT.d(kT, {
      b: () => nT,
      d: () => sT,
      e: () => iT,
      h: () => WT
    });
    var lT = cT(3679),
      MT = cT(3692),
      KT = cT(6609),
      OT = cT(4681),
      yT = cT(3687),
      fT = cT(3684);
    const xT = "bloxd-wasmDownloaded",
      IT = 12;

    function AT(TT) {
      return TT.pathname.slice(TT.pathname.lastIndexOf("/") + 1)
    }

    function CT() {
      try {
        if ("undefined" === typeof localStorage) return null;
        const TT = JSON.parse(localStorage.getItem(xT) ?? "[]");
        return Array.isArray(TT) ? TT.filter((TT => "string" === typeof TT)) : []
      } catch (TT) {
        return console.warn("Bloxd wasm: the record of downloaded modules could not be read: asking the HTTP cache for none", TT), null
      }
    }
    const jT = Reflect.apply,
      vT = "undefined" === typeof Worker ? void 0 : Worker,
      tT = vT?.prototype.postMessage,
      hT = vT?.prototype.terminate,
      NT = "undefined" === typeof EventTarget ? void 0 : EventTarget.prototype.addEventListener,
      QT = "undefined" === typeof MessageEvent ? void 0 : Object.getOwnPropertyDescriptor(MessageEvent.prototype, "data")?.get,
      ST = Object.getOwnPropertyDescriptor(Object.getPrototypeOf(Uint8Array.prototype), "buffer").get,
      DT = function() {
        try {
          return (0, OT.j)(vT, "Worker", !0) && (0, OT.j)(tT, "postMessage") && (0, OT.j)(hT, "terminate") && (0, OT.j)(ST, "buffer") && void 0 !== NT && void 0 !== QT
        } catch {
          return !1
        }
      }();
    let aT = !1;

    function FT() {
      return DT && !aT
    }
    class rT {
      worker = null;
      failed = !1;
      constructor() {
        if (FT()) try {
          this.worker = wT(), jT(NT, this.worker, ["error", () => {
            this.failed = !0
          }])
        } catch {
          this.stop()
        }
      }
      take() {
        const TT = this.worker;
        if (this.worker = null, null !== TT && this.failed) throw jT(hT, TT, []), new Error("it did not run");
        return TT
      }
      stop() {
        const TT = this.worker;
        this.worker = null, null !== TT && jT(hT, TT, [])
      }
    }
    class PT {
      decoded;
      worker;
      reject;
      constructor(TT, kT, cT, lT, KT) {
        try {
          this.worker = KT?.take() ?? wT()
        } catch (xT) {
          throw aT = !0, new Error(`The zstd decoder's worker did not start: ${(0,yT.f)(xT)}`)
        }
        const OT = this.worker;
        this.decoded = (0, MT.j)(((kT, MT) => {
          this.reject = MT;
          const KT = (TT, kT) => {
            jT(NT, OT, [TT, kT])
          };
          KT("message", (TT => {
            lT();
            try {
              const lT = jT(QT, TT, []);
              if (!0 === lT) kT();
              else {
                if ("string" === typeof lT) throw lT.startsWith(yT.c) && (aT = !0), new Error(lT);
                cT(lT, jT(fT.x, lT, []))
              }
            } catch (xT) {
              MT(xT)
            }
          })), KT("error", (() => {
            aT = !0, MT(new Error("The zstd decoder's worker did not run"))
          })), KT("messageerror", (() => {
            MT(new Error(`${TT}'s decoder sent a piece that could not be read`))
          }))
        })), (0, fT.bb)(this.decoded), jT(tT, OT, [
          [TT, kT]
        ])
      }
      push(TT) {
        jT(tT, this.worker, [TT, [jT(ST, TT, [])]])
      }
      end() {
        jT(tT, this.worker, [null])
      }
      markWorkerFailed() {
        aT = !0
      }
      fail(TT) {
        this.reject(TT), this.terminate()
      }
      terminate() {
        jT(hT, this.worker, [])
      }
    }

    function wT() {
      if (globalThis.Worker !== vT) throw new Error("Worker is not the one the page loaded with");
      return new Worker(new URL(cT.p + cT.u(65), cT.b), {
        name: "wasmZstdDecoder",
        type: "module"
      })
    }
    const mT = Reflect.apply,
      bT = ArrayBuffer,
      zT = "undefined" === typeof Response ? void 0 : Response,
      JT = "undefined" === typeof ReadableStream ? void 0 : ReadableStream,
      oT = function() {
        let TT;
        void 0 !== JT && new JT({
          __proto__: null,
          start(kT) {
            const {
              enqueue: cT,
              close: lT,
              error: MT
            } = Object.getPrototypeOf(kT);
            TT = {
              enqueue: cT,
              close: lT,
              error: MT
            }
          }
        }, {
          __proto__: null
        });
        return TT
      }(),
      HT = function() {
        try {
          return "undefined" !== typeof WebAssembly && "function" === typeof WebAssembly.compileStreaming && void 0 !== oT && (0, OT.j)(zT, "Response", !0) && (0, OT.j)(JT, "ReadableStream", !0) && (0, OT.j)(oT.enqueue, "enqueue") && (0, OT.j)(oT.close, "close") && (0, OT.j)(oT.error, "error") && (0, OT.j)(fT.hb, "body") && (0, OT.j)(fT.U, "getReader") && (0, OT.j)(fT.eb, "read")
        } catch {
          return !1
        }
      }();
    async function eT(TT, kT, cT, lT, KT, OT, xT) {
      const IT = new bT(kT),
        {
          controller: AT,
          compiled: CT
        } = function(TT) {
          try {
            let TT;
            const kT = new JT({
                __proto__: null,
                start(kT) {
                  TT = kT
                }
              }, {
                __proto__: null
              }),
              cT = new zT(kT, {
                __proto__: null,
                headers: {
                  __proto__: null,
                  "Content-Type": "application/wasm"
                }
              });
            return {
              controller: TT,
              compiled: (0, fT.bb)((0, fT.B)((0, fT.qb)(cT)))
            }
          } catch (kT) {
            throw new Error(`${TT} could not be streamed into a compile: ${(0,yT.f)(kT)}`)
          }
        }(TT),
        {
          enqueue: jT,
          close: vT,
          error: tT
        } = oT,
        hT = TT => {
          try {
            mT(tT, AT, [TT])
          } catch {}
        };
      let NT = 0;
      const QT = (cT, lT) => {
        if (NT + lT > kT) throw new Error(`${TT} decoded past its module's ${kT} bytes`);
        mT(fT.kb, new fT.k(IT), [new fT.k(cT), NT]);
        try {
          mT(jT, AT, [new fT.k(IT, NT, lT)])
        } catch {}
        NT += lT
      };
      let ST, DT;
      try {
        ST = new PT(TT, kT, QT, lT, xT)
      } catch (wT) {
        throw hT(wT), wT
      }
      const aT = TT => {
        ST.fail(TT), void 0 !== DT && GT(DT)
      };
      let FT = !1;
      cT.addEventListener("abort", (() => {
        FT && ST.markWorkerFailed(), aT(new Error(`${TT} stalled`))
      }), {
        once: !0
      }), (0, MT.v)(CT, (() => {}), aT);
      try {
        let OT;
        try {
          OT = await fetch(TT, {
            signal: cT
          })
        } catch (wT) {
          throw new Error(`Fetching ${TT} failed: ${(0,yT.f)(wT)}`)
        }
        const {
          ok: xT,
          status: IT,
          body: AT
        } = function(TT, kT) {
          try {
            const {
              ok: TT,
              status: cT
            } = kT;
            return {
              ok: TT,
              status: cT,
              body: mT(fT.hb, kT, [])
            }
          } catch {
            throw new Error(`${TT} came in a response a page script made`)
          }
        }(TT, OT);
        if (!xT) throw new Error(`Fetching ${TT} failed: HTTP ${IT}`);
        lT();
        const CT = mT(fT.U, AT, []);
        DT = CT;
        const jT = () => {
          GT(CT)
        };
        for ((0, MT.v)(ST.decoded, jT, jT);;) {
          let kT;
          try {
            kT = await mT(fT.eb, CT, [])
          } catch (wT) {
            throw new Error(`Downloading ${TT} failed: ${(0,yT.f)(wT)}`)
          }
          if (kT.done) break;
          lT(), ST.push(kT.value)
        }
        if (FT = !0, ST.end(), await ST.decoded, KT(), NT !== kT) throw new Error(`${TT} ended before its module did`)
      } catch (wT) {
        throw hT(wT), aT(wT), wT
      }
      ST.terminate();
      try {
        mT(vT, AT, [])
      } catch {}
      const rT = await CT;
      return void 0 !== OT && await (0, fT.y)(TT, new fT.k(IT), {
        sha256: OT.sha256,
        onMismatch: () => {}
      }), rT
    }

    function GT(TT) {
      try {
        (0, fT.bb)(TT.cancel())
      } catch {}
    }
    const VT = ".zst.bin",
      ET = 1e3;
    let ZT = null;

    function uT(TT) {
      return ZT ??= function() {
        const TT = new Map,
          kT = "bloxd_wasm_webgpu:5000472,bloxd_wasm_webgl:5362696,bloxd_wasm_webgl1:4763369,bloxd_wasm_workers:196044,bloxd_wasm_models:311680,bloxd_wasm_client:3667451";
        for (const cT of kT?.split(",") ?? []) {
          const [kT = "", lT] = cT.split(":"), MT = Number(lT);
          Number.isInteger(MT) && MT > 0 && TT.set(kT, MT)
        }
        return TT
      }(), ZT.get(TT)
    }
    async function XT(TT, kT) {
      let cT = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
      const lT = uT(TT.name);
      if (void 0 === lT) return dT(await LT(TT, kT, cT), "cold-wasm");
      const KT = HT ? new rT : null;
      let OT;
      try {
        if (xT = TT.url(), CT()?.includes(AT(xT)) && await async function(TT) {
            const kT = new AbortController;
            let cT;
            const lT = (0, MT.j)((TT => {
              cT = setTimeout((() => {
                kT.abort(), TT(null)
              }), ET)
            }));
            try {
              const cT = fetch(TT.href, {
                  cache: "only-if-cached",
                  mode: "same-origin",
                  signal: kT.signal
                }),
                KT = await (0, MT.s)([cT, lT]);
              return !!KT?.ok && ((0, fT.bb)(KT.body.cancel()), !0)
            } catch {
              return !1
            } finally {
              clearTimeout(cT)
            }
          }(TT.url())) return KT?.stop(), await async function(TT, kT, cT, lT) {
          let MT = !1;
          const KT = cT && {
            sha256: cT.sha256,
            onMismatch: () => {
              MT = !0
            }
          };
          try {
            return dT(await LT(TT, KT, lT), "warm")
          } catch (OT) {
            const lT = await RT(TT, kT, cT, null);
            if (null === lT) throw MT && cT.onMismatch(), OT;
            return console.warn(`${TT.url().href} from the HTTP cache failed: ${(0,yT.f)(OT)}: loaded its copy instead`), dT(lT, MT ? "warm-refused" : "warm-broken")
          }
        }(TT, lT, kT, cT);
        OT = await RT(TT, lT, kT, KT)
      } finally {
        KT?.stop()
      }
      var xT;
      return null !== OT ? dT(OT, "cold-worker") : dT(await LT(TT, kT, cT), "cold-wasm")
    }

    function dT(TT, kT) {
      return {
        __proto__: null,
        module: TT,
        path: kT
      }
    }

    function LT(TT, kT, cT) {
      return void 0 === uT(TT.name) ? (0, fT.J)(TT.url(), kT, cT) : (0, fT.J)(TT.url(), kT, {
        ...cT,
        hideThen: !0,
        onDownloaded: () => {
          ! function(TT) {
            const kT = CT();
            if (null === kT) return;
            const cT = AT(TT),
              lT = kT.filter((TT => TT !== cT));
            lT.push(cT);
            try {
              localStorage.setItem(xT, JSON.stringify(lT.slice(-IT)))
            } catch (MT) {
              console.warn(`Bloxd wasm: ${cT} could not be recorded as downloaded: a later join asks the HTTP cache nothing for it`, MT)
            }
          }(TT.url()), cT.onDownloaded?.()
        }
      })
    }
    async function RT(TT, kT, cT, lT) {
      if (!HT || !FT()) return null;
      const MT = TT.url(),
        KT = `${MT.href}${VT}`;
      try {
        return await (0, fT.nb)(KT, ((TT, MT, OT) => eT(KT, kT, TT, MT, OT, cT, lT)))
      } catch (OT) {
        return console.warn(`${(0,yT.f)(OT)}: loading ${MT.href} instead`), null
      }
    }
    let gT = null,
      UT = !1;
    const YT = new Map,
      BT = new Map;

    function WT(TT, kT, cT) {
      return null === gT ? gT = pT(TT, kT) : TT !== gT.build ? console.warn(`Bloxd wasm: ${TT.name} was asked for after ${gT.build.name} started loading, which this thread keeps`) : kT.name !== gT.workers.name && console.warn(`Bloxd wasm: ${kT.name} was asked for workers after ${gT.workers.name}, which this thread keeps`), cT?.reloadFailedDownload && !UT && (0, lT.T)() && (UT = !0, gT = pT(gT.build, gT.workers)), gT.loaded
    }

    function nT(TT, kT) {
      if (null !== gT) return (0, MT.f)([]);
      const cT = TT.filter((TT => !YT.has(TT.name))).map((TT => {
        const cT = new AbortController,
          lT = {
            compiled: LT(TT, (0, KT.e)(TT.name), {
              priority: kT,
              KT: cT.signal,
              onDownloaded: () => {
                lT.downloaded = !0
              },
              retries: {
                onRetry: () => {
                  lT.downloaded = !1, null !== gT && cT.abort()
                }
              }
            }),
            cancel: cT,
            downloaded: !1
          };
        return YT.set(TT.name, lT), (0, MT.j)((kT => {
          (0, MT.v)(lT.compiled, (() => {
            lT.downloaded = !0, kT()
          }), (lT => {
            cT.signal.aborted || console.warn(`Bloxd wasm: ${TT.name}'s compile ahead of the load failed: the load compiles it afresh`, lT), kT()
          }))
        }))
      }));
      return (0, MT.f)(cT)
    }

    function pT(TT, kT) {
      const cT = (0, lT.D)((async () => {
        (0, OT.y)(), BT.clear();
        const cT = qT(TT),
          lT = kT.name === TT.name ? cT : qT(kT);
        for (const {
            cancel: TT
          }
          of YT.values()) TT.abort();
        YT.clear(), await (0, MT.f)([cT, lT]);
        const KT = await cT,
          yT = await lT;
        return (0, OT.y)(), {
          module: KT,
          workerModule: yT
        }
      }), TT);
      return {
        build: TT,
        workers: kT,
        loaded: cT
      }
    }

    function iT(TT) {
      return BT.get(TT)
    }

    function qT(TT) {
      const kT = performance.now(),
        cT = YT.get(TT.name);
      YT.delete(TT.name);
      const lT = !0 === cT?.downloaded ? cT : void 0;
      return void 0 !== cT && void 0 === lT && cT.cancel.abort(), (0, MT.j)(((cT, KT) => {
        const OT = (lT, MT) => {
            BT.set(TT.name, {
              path: MT,
              ms: performance.now() - kT
            }), cT(lT)
          },
          yT = () => {
            (0, MT.v)(Tk(TT), (TT => {
              let {
                module: kT,
                path: cT
              } = TT;
              OT(kT, cT)
            }), KT)
          };
        void 0 === lT ? yT() : (0, MT.v)(lT.compiled, (TT => {
          OT(TT, "ahead")
        }), yT)
      }))
    }
    async function sT(TT, kT) {
      const {
        module: cT
      } = await Tk(TT, {
        retries: kT
      });
      return cT
    }
    async function Tk(TT) {
      let kT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
      return await XT(TT, (0, KT.e)(TT.name), kT)
    }
  },
  6609: (TT, kT, cT) => {
    cT.d(kT, {
      e: () => OT
    });
    var lT = cT(3684);
    const MT = {
      bloxd_wasm: () => "a0f424b25368d6393787ae0cadc74c38a79bf45853cbc8fe0d3b4b00ed2f3987",
      bloxd_wasm_client: () => "0848a1ad8f1a6acd15190097c16d6c8cee3ea20961c9a5135fb70c8e5a3a8765",
      bloxd_wasm_workers: () => "70acc026337513cb3482a9557a18f648e482d0083d7e5e1b6fe3e07bdcb2f8e3",
      bloxd_wasm_models: () => "634d37ef8cef3ee4f695383ddf3aede7e518819fda02f111669a55711db8829c",
      bloxd_wasm_webgpu: () => "af696a84742b4427e456975c7e2c98397cd27946ad3057ca6a41701cfdd49270",
      bloxd_wasm_webgl: () => "47a865a6f0812bc9a2a7d464d212069d989bfc60e391a5b004c51ed9559d1e27",
      bloxd_wasm_webgl1: () => "5aba3664c214844c153b620384afd9cea74130cc607a9c685d1bcb6b1c27c0ab",
      bloxd_wasm_replay: () => "e3dd0cd7ff45dd407891c5abf1fcf21a49472dcaf48a1de94d52bdc122668ccb",
      bloxd_wasm_recorder: () => "2ae924a7cec0f9372a697abc3ae0b17fe0bb9ee6dd19eec21dc29e9750c477ef",
      bloxd_wasm_anim: () => "430af23f79668b6e0629c901770a89c5c28880e27fbfff3d39abec128e94239a",
      bloxd_wasm_textures: () => "b21f3145552327388bc76ac1444ca300a6882c320fa905c6294cbf6b199edb5f",
      bloxd_wasm_shader_pack: () => "8971c80e16c937b8809bd65766732ac5b19a0f1e03dd98d4cfc7cc2bf271b324"
    };
    var KT = cT(4681);

    function OT(TT) {
      const kT = Object.prototype.hasOwnProperty.call(MT, TT) ? MT[TT]() : void 0;
      if (void 0 !== kT) return {
        sha256: kT,
        onMismatch: KT.x
      };
      throw new lT.f(`${TT} has no release digest, so this build refuses it`)
    }
  },
  36077: (TT, kT, cT) => {
    cT.d(kT, {
      d: () => lT,
      g: () => KT,
      i: () => fT,
      l: () => OT,
      m: () => MT
    });
    const lT = /^alloc_failed (\d+) bytes$/;

    function MT(TT, kT) {
      return KT(TT, kT) ? `trap=alloc_failed ${kT} bytes` : `trap=${TT}`
    }

    function KT(TT, kT) {
      return "unreachable" === TT && kT > 0
    }

    function OT(TT, kT, cT) {
      const lT = function(TT) {
        return TT instanceof WebAssembly.RuntimeError ? /unreachable/i.test(TT.message) ? "unreachable" : /out of bounds/i.test(TT.message) ? "out_of_bounds" : "runtime_error" : (TT instanceof RangeError || TT instanceof Error && "InternalError" === TT.name) && /call stack|recursion/i.test(TT.message) ? "stack_overflow" : "js_error"
      }(TT);
      if ("unreachable" !== lT) return {
        kind: lT,
        panic: null,
        refusedBytes: 0
      };
      const MT = kT(),
        KT = cT();
      return {
        kind: lT,
        panic: KT > 0 ? null : MT,
        refusedBytes: KT
      }
    }
    const yT = 300;

    function fT(TT) {
      return TT.replace(/\s*\n\s*/g, " / ").slice(0, yT)
    }
  }
};
Object.freeze(modules);
for (const TT in modules) Object.freeze(modules[TT]);