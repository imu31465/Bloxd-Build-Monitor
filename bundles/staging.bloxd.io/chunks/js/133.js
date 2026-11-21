export const id = 133;
export const ids = [133];
export const modules = {
  35943: (QQ, FQ, wQ) => {
    wQ.d(FQ, {
      b: () => kQ,
      e: () => mQ,
      h: () => DQ,
      k: () => HQ
    });
    var LQ = wQ(35929),
      qQ = wQ(5);
    const oQ = /wasm-function\[\d+\]|wasm:\/\/|\[wasm code\]/;

    function DQ(QQ) {
      if (QQ instanceof WebAssembly.RuntimeError) return !0;
      const FQ = QQ instanceof Error ? QQ.stack : void 0;
      return "string" === typeof FQ && oQ.test(FQ)
    }

    function kQ(QQ, FQ, wQ) {
      var qQ;
      const DQ = QQ instanceof Error ? QQ.name : "thrown",
        kQ = (QQ instanceof Error && null !== (qQ = QQ.stack) && void 0 !== qQ ? qQ : "").split("\n").filter((QQ => oQ.test(QQ))).slice(0, 8).map((QQ => QQ.trim())),
        vQ = null === FQ ? "wasm memory unknown" : `wasm memory ${Math.round(FQ/2**20)} MB`,
        mQ = null === wQ.panic ? "" : `, panic: ${(0,LQ.k)(wQ.panic)}`,
        uQ = `${DQ}: ${QQ instanceof Error?QQ.message:String(QQ)}`;
      return `${(0,LQ.o)(wQ.kind,wQ.refusedBytes)} ${uQ} (${vQ})${mQ}${kQ.length>0?` | ${kQ.join(" < ")}`:""}`
    }
    const vQ = /on a detached ArrayBuffer|access detached ArrayBuffer|has been detached from the view/;

    function mQ(QQ) {
      var FQ;
      let wQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ArrayBuffer.prototype;
      if (!(QQ instanceof Error) || !vQ.test(QQ.message)) return {};
      if (!("detached" in wQ)) return {
        arrayBufferDetached: "absent"
      };
      return {
        arrayBufferDetached: (0, qQ.P)(null === (FQ = (0, qQ.K)(wQ, "detached")) || void 0 === FQ ? void 0 : FQ.get, /^function (get )?detached\(\) \{\s*\[native code\]\s*\}$/) ? "native" : "script"
      }
    }
    const uQ = 500;

    function HQ(QQ) {
      let FQ = "[object Object]";
      try {
        FQ = String(QQ)
      } catch {}
      if ("[object Object]" !== FQ) return FQ;
      try {
        var wQ, LQ;
        return null !== (wQ = null === (LQ = JSON.stringify(QQ)) || void 0 === LQ ? void 0 : LQ.slice(0, uQ)) && void 0 !== wQ ? wQ : FQ
      } catch {
        return FQ
      }
    }
  },
  35962: (QQ, FQ, wQ) => {
    wQ.d(FQ, {
      b: () => PQ,
      d: () => dQ,
      h: () => yQ,
      l: () => gQ
    });
    var LQ = wQ(2809),
      qQ = wQ(2820),
      oQ = wQ(6446),
      DQ = wQ(4540),
      kQ = wQ(2813),
      vQ = wQ(2811);
    const mQ = "bloxd-wasmDownloaded",
      uQ = 12;

    function HQ(QQ) {
      return QQ.pathname.slice(QQ.pathname.lastIndexOf("/") + 1)
    }

    function bQ() {
      try {
        if ("undefined" === typeof localStorage) return null;
        const QQ = JSON.parse(localStorage.getItem(mQ) ?? "[]");
        return Array.isArray(QQ) ? QQ.filter((QQ => "string" === typeof QQ)) : []
      } catch (QQ) {
        return console.warn("Bloxd wasm: the record of downloaded modules could not be read: asking the HTTP cache for none", QQ), null
      }
    }
    const YQ = Reflect.apply,
      xQ = "undefined" === typeof Worker ? void 0 : Worker,
      AQ = xQ?.prototype.postMessage,
      tQ = xQ?.prototype.terminate,
      eQ = "undefined" === typeof EventTarget ? void 0 : EventTarget.prototype.addEventListener,
      MQ = "undefined" === typeof MessageEvent ? void 0 : Object.getOwnPropertyDescriptor(MessageEvent.prototype, "data")?.get,
      GQ = Object.getOwnPropertyDescriptor(Object.getPrototypeOf(Uint8Array.prototype), "buffer").get,
      pQ = function() {
        try {
          return (0, DQ.g)(xQ, "Worker", !0) && (0, DQ.g)(AQ, "postMessage") && (0, DQ.g)(tQ, "terminate") && (0, DQ.g)(GQ, "buffer") && void 0 !== eQ && void 0 !== MQ
        } catch {
          return !1
        }
      }();
    let cQ = !1;

    function CQ() {
      return pQ && !cQ
    }
    class SQ {
      worker = null;
      failed = !1;
      constructor() {
        if (CQ()) try {
          this.worker = WQ(), YQ(eQ, this.worker, ["error", () => {
            this.failed = !0
          }])
        } catch {
          this.stop()
        }
      }
      take() {
        const QQ = this.worker;
        if (this.worker = null, null !== QQ && this.failed) throw YQ(tQ, QQ, []), new Error("it did not run");
        return QQ
      }
      stop() {
        const QQ = this.worker;
        this.worker = null, null !== QQ && YQ(tQ, QQ, [])
      }
    }
    class iQ {
      decoded;
      worker;
      reject;
      constructor(QQ, FQ, wQ, LQ, oQ) {
        try {
          this.worker = oQ?.take() ?? WQ()
        } catch (mQ) {
          throw cQ = !0, new Error(`The zstd decoder's worker did not start: ${(0,kQ.d)(mQ)}`)
        }
        const DQ = this.worker;
        this.decoded = (0, qQ.h)(((FQ, qQ) => {
          this.reject = qQ;
          const oQ = (QQ, FQ) => {
            YQ(eQ, DQ, [QQ, FQ])
          };
          oQ("message", (QQ => {
            LQ();
            try {
              const LQ = YQ(MQ, QQ, []);
              if (!0 === LQ) FQ();
              else {
                if ("string" === typeof LQ) throw LQ.startsWith(kQ.b) && (cQ = !0), new Error(LQ);
                wQ(LQ, YQ(vQ.C, LQ, []))
              }
            } catch (mQ) {
              qQ(mQ)
            }
          })), oQ("error", (() => {
            cQ = !0, qQ(new Error("The zstd decoder's worker did not run"))
          })), oQ("messageerror", (() => {
            qQ(new Error(`${QQ}'s decoder sent a piece that could not be read`))
          }))
        })), (0, vQ.hb)(this.decoded), YQ(AQ, DQ, [
          [QQ, FQ]
        ])
      }
      push(QQ) {
        YQ(AQ, this.worker, [QQ, [YQ(GQ, QQ, [])]])
      }
      end() {
        YQ(AQ, this.worker, [null])
      }
      markWorkerFailed() {
        cQ = !0
      }
      fail(QQ) {
        this.reject(QQ), this.terminate()
      }
      terminate() {
        YQ(tQ, this.worker, [])
      }
    }

    function WQ() {
      if (globalThis.Worker !== xQ) throw new Error("Worker is not the one the page loaded with");
      return new Worker(new URL(wQ.p + wQ.u(65), wQ.b), {
        name: "wasmZstdDecoder",
        type: "module"
      })
    }
    const RQ = Reflect.apply,
      OQ = ArrayBuffer,
      sQ = "undefined" === typeof Response ? void 0 : Response,
      rQ = "undefined" === typeof ReadableStream ? void 0 : ReadableStream,
      IQ = function() {
        let QQ;
        void 0 !== rQ && new rQ({
          __proto__: null,
          start(FQ) {
            const {
              enqueue: wQ,
              close: LQ,
              error: qQ
            } = Object.getPrototypeOf(FQ);
            QQ = {
              enqueue: wQ,
              close: LQ,
              error: qQ
            }
          }
        }, {
          __proto__: null
        });
        return QQ
      }(),
      UQ = function() {
        try {
          return "undefined" !== typeof WebAssembly && "function" === typeof WebAssembly.compileStreaming && void 0 !== IQ && (0, DQ.g)(sQ, "Response", !0) && (0, DQ.g)(rQ, "ReadableStream", !0) && (0, DQ.g)(IQ.enqueue, "enqueue") && (0, DQ.g)(IQ.close, "close") && (0, DQ.g)(IQ.error, "error") && (0, DQ.g)(vQ.mb, "body") && (0, DQ.g)(vQ.$, "getReader") && (0, DQ.g)(vQ.jb, "read")
        } catch {
          return !1
        }
      }();
    async function NQ(QQ, FQ, wQ, LQ, oQ, DQ, mQ) {
      const uQ = new OQ(FQ),
        {
          controller: HQ,
          compiled: bQ
        } = function(QQ) {
          try {
            let QQ;
            const FQ = new rQ({
                __proto__: null,
                start(FQ) {
                  QQ = FQ
                }
              }, {
                __proto__: null
              }),
              wQ = new sQ(FQ, {
                __proto__: null,
                headers: {
                  __proto__: null,
                  "Content-Type": "application/wasm"
                }
              });
            return {
              controller: QQ,
              compiled: (0, vQ.hb)((0, vQ.J)((0, vQ.wb)(wQ)))
            }
          } catch (FQ) {
            throw new Error(`${QQ} could not be streamed into a compile: ${(0,kQ.d)(FQ)}`)
          }
        }(QQ),
        {
          enqueue: YQ,
          close: xQ,
          error: AQ
        } = IQ,
        tQ = QQ => {
          try {
            RQ(AQ, HQ, [QQ])
          } catch {}
        };
      let eQ = 0;
      const MQ = (wQ, LQ) => {
        if (eQ + LQ > FQ) throw new Error(`${QQ} decoded past its module's ${FQ} bytes`);
        RQ(vQ.qb, new vQ.p(uQ), [new vQ.p(wQ), eQ]);
        try {
          RQ(YQ, HQ, [new vQ.p(uQ, eQ, LQ)])
        } catch {}
        eQ += LQ
      };
      let GQ, pQ;
      try {
        GQ = new iQ(QQ, FQ, MQ, LQ, mQ)
      } catch (WQ) {
        throw tQ(WQ), WQ
      }
      const cQ = QQ => {
        GQ.fail(QQ), void 0 !== pQ && TQ(pQ)
      };
      let CQ = !1;
      wQ.addEventListener("abort", (() => {
        CQ && GQ.markWorkerFailed(), cQ(new Error(`${QQ} stalled`))
      }), {
        once: !0
      }), (0, qQ.p)(bQ, (() => {}), cQ);
      try {
        let DQ;
        try {
          DQ = await fetch(QQ, {
            signal: wQ
          })
        } catch (WQ) {
          throw new Error(`Fetching ${QQ} failed: ${(0,kQ.d)(WQ)}`)
        }
        const {
          ok: mQ,
          status: uQ,
          body: HQ
        } = function(QQ, FQ) {
          try {
            const {
              ok: QQ,
              status: wQ
            } = FQ;
            return {
              ok: QQ,
              status: wQ,
              body: RQ(vQ.mb, FQ, [])
            }
          } catch {
            throw new Error(`${QQ} came in a response a page script made`)
          }
        }(QQ, DQ);
        if (!mQ) throw new Error(`Fetching ${QQ} failed: HTTP ${uQ}`);
        LQ();
        const bQ = RQ(vQ.$, HQ, []);
        pQ = bQ;
        const YQ = () => {
          TQ(bQ)
        };
        for ((0, qQ.p)(GQ.decoded, YQ, YQ);;) {
          let FQ;
          try {
            FQ = await RQ(vQ.jb, bQ, [])
          } catch (WQ) {
            throw new Error(`Downloading ${QQ} failed: ${(0,kQ.d)(WQ)}`)
          }
          if (FQ.done) break;
          LQ(), GQ.push(FQ.value)
        }
        if (CQ = !0, GQ.end(), await GQ.decoded, oQ(), eQ !== FQ) throw new Error(`${QQ} ended before its module did`)
      } catch (WQ) {
        throw tQ(WQ), cQ(WQ), WQ
      }
      GQ.terminate();
      try {
        RQ(xQ, HQ, [])
      } catch {}
      const SQ = await bQ;
      return void 0 !== DQ && await (0, vQ.F)(QQ, new vQ.p(uQ), {
        sha256: DQ.sha256,
        onMismatch: () => {}
      }), SQ
    }

    function TQ(QQ) {
      try {
        (0, vQ.hb)(QQ.cancel())
      } catch {}
    }
    const KQ = ".zst.bin",
      zQ = 1e3;
    let lQ = null;

    function jQ(QQ) {
      return lQ ??= function() {
        const QQ = new Map,
          FQ = "bloxd_wasm_webgpu:5006327,bloxd_wasm_webgl:5369983,bloxd_wasm_webgl1:4770278,bloxd_wasm_workers:196044,bloxd_wasm_models:311680,bloxd_wasm_client:3672186";
        for (const wQ of FQ?.split(",") ?? []) {
          const [FQ = "", LQ] = wQ.split(":"), qQ = Number(LQ);
          Number.isInteger(qQ) && qQ > 0 && QQ.set(FQ, qQ)
        }
        return QQ
      }(), lQ.get(QQ)
    }
    async function aQ(QQ, FQ) {
      let wQ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
      const LQ = jQ(QQ.name);
      if (void 0 === LQ) return XQ(await fQ(QQ, FQ, wQ), "cold-wasm");
      const oQ = UQ ? new SQ : null;
      let DQ;
      try {
        if (mQ = QQ.url(), bQ()?.includes(HQ(mQ)) && await async function(QQ) {
            const FQ = new AbortController;
            let wQ;
            const LQ = (0, qQ.h)((QQ => {
              wQ = setTimeout((() => {
                FQ.abort(), QQ(null)
              }), zQ)
            }));
            try {
              const wQ = fetch(QQ.href, {
                  cache: "only-if-cached",
                  mode: "same-origin",
                  signal: FQ.signal
                }),
                oQ = await (0, qQ.n)([wQ, LQ]);
              return !!oQ?.ok && ((0, vQ.hb)(oQ.body.cancel()), !0)
            } catch {
              return !1
            } finally {
              clearTimeout(wQ)
            }
          }(QQ.url())) return oQ?.stop(), await async function(QQ, FQ, wQ, LQ) {
          let qQ = !1;
          const oQ = wQ && {
            sha256: wQ.sha256,
            onMismatch: () => {
              qQ = !0
            }
          };
          try {
            return XQ(await fQ(QQ, oQ, LQ), "warm")
          } catch (DQ) {
            const LQ = await VQ(QQ, FQ, wQ, null);
            if (null === LQ) throw qQ && wQ.onMismatch(), DQ;
            return console.warn(`${QQ.url().href} from the HTTP cache failed: ${(0,kQ.d)(DQ)}: loaded its copy instead`), XQ(LQ, qQ ? "warm-refused" : "warm-broken")
          }
        }(QQ, LQ, FQ, wQ);
        DQ = await VQ(QQ, LQ, FQ, oQ)
      } finally {
        oQ?.stop()
      }
      var mQ;
      return null !== DQ ? XQ(DQ, "cold-worker") : XQ(await fQ(QQ, FQ, wQ), "cold-wasm")
    }

    function XQ(QQ, FQ) {
      return {
        __proto__: null,
        module: QQ,
        path: FQ
      }
    }

    function fQ(QQ, FQ, wQ) {
      return void 0 === jQ(QQ.name) ? (0, vQ.R)(QQ.url(), FQ, wQ) : (0, vQ.R)(QQ.url(), FQ, {
        ...wQ,
        hideThen: !0,
        onDownloaded: () => {
          ! function(QQ) {
            const FQ = bQ();
            if (null === FQ) return;
            const wQ = HQ(QQ),
              LQ = FQ.filter((QQ => QQ !== wQ));
            LQ.push(wQ);
            try {
              localStorage.setItem(mQ, JSON.stringify(LQ.slice(-uQ)))
            } catch (qQ) {
              console.warn(`Bloxd wasm: ${wQ} could not be recorded as downloaded: a later join asks the HTTP cache nothing for it`, qQ)
            }
          }(QQ.url()), wQ.onDownloaded?.()
        }
      })
    }
    async function VQ(QQ, FQ, wQ, LQ) {
      if (!UQ || !CQ()) return null;
      const qQ = QQ.url(),
        oQ = `${qQ.href}${KQ}`;
      try {
        return await (0, vQ.ub)(oQ, ((QQ, qQ, DQ) => NQ(oQ, FQ, QQ, qQ, DQ, wQ, LQ)))
      } catch (DQ) {
        return console.warn(`${(0,kQ.d)(DQ)}: loading ${qQ.href} instead`), null
      }
    }
    let hQ = null,
      JQ = !1;
    const EQ = new Map,
      nQ = new Map;

    function gQ(QQ, FQ, wQ) {
      return null === hQ ? hQ = ZQ(QQ, FQ) : QQ !== hQ.build ? console.warn(`Bloxd wasm: ${QQ.name} was asked for after ${hQ.build.name} started loading, which this thread keeps`) : FQ.name !== hQ.workers.name && console.warn(`Bloxd wasm: ${FQ.name} was asked for workers after ${hQ.workers.name}, which this thread keeps`), wQ?.reloadFailedDownload && !JQ && (0, LQ.R)() && (JQ = !0, hQ = ZQ(hQ.build, hQ.workers)), hQ.loaded
    }

    function PQ(QQ, FQ) {
      if (null !== hQ) return (0, qQ.e)([]);
      const wQ = QQ.filter((QQ => !EQ.has(QQ.name))).map((QQ => {
        const wQ = new AbortController,
          LQ = {
            compiled: fQ(QQ, (0, oQ.e)(QQ.name), {
              priority: FQ,
              wF: wQ.signal,
              onDownloaded: () => {
                LQ.downloaded = !0
              },
              retries: {
                onRetry: () => {
                  LQ.downloaded = !1, null !== hQ && wQ.abort()
                }
              }
            }),
            cancel: wQ,
            downloaded: !1
          };
        return EQ.set(QQ.name, LQ), (0, qQ.h)((FQ => {
          (0, qQ.p)(LQ.compiled, (() => {
            LQ.downloaded = !0, FQ()
          }), (LQ => {
            wQ.signal.aborted || console.warn(`Bloxd wasm: ${QQ.name}'s compile ahead of the load failed: the load compiles it afresh`, LQ), FQ()
          }))
        }))
      }));
      return (0, qQ.e)(wQ)
    }

    function ZQ(QQ, FQ) {
      const wQ = (0, LQ.E)((async () => {
        (0, DQ.q)(), nQ.clear();
        const wQ = BQ(QQ),
          LQ = FQ.name === QQ.name ? wQ : BQ(FQ);
        for (const {
            cancel: QQ
          }
          of EQ.values()) QQ.abort();
        EQ.clear(), await (0, qQ.e)([wQ, LQ]);
        const oQ = await wQ,
          kQ = await LQ;
        return (0, DQ.q)(), {
          module: oQ,
          workerModule: kQ
        }
      }), QQ);
      return {
        build: QQ,
        workers: FQ,
        loaded: wQ
      }
    }

    function yQ(QQ) {
      return nQ.get(QQ)
    }

    function BQ(QQ) {
      const FQ = performance.now(),
        wQ = EQ.get(QQ.name);
      EQ.delete(QQ.name);
      const LQ = !0 === wQ?.downloaded ? wQ : void 0;
      return void 0 !== wQ && void 0 === LQ && wQ.cancel.abort(), (0, qQ.h)(((wQ, oQ) => {
        const DQ = (LQ, qQ) => {
            nQ.set(QQ.name, {
              path: qQ,
              ms: performance.now() - FQ
            }), wQ(LQ)
          },
          kQ = () => {
            (0, qQ.p)(QF(QQ), (QQ => {
              let {
                module: FQ,
                path: wQ
              } = QQ;
              DQ(FQ, wQ)
            }), oQ)
          };
        void 0 === LQ ? kQ() : (0, qQ.p)(LQ.compiled, (QQ => {
          DQ(QQ, "ahead")
        }), kQ)
      }))
    }
    async function dQ(QQ, FQ) {
      const {
        module: wQ
      } = await QF(QQ, {
        retries: FQ
      });
      return wQ
    }
    async function QF(QQ) {
      let FQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
      return await aQ(QQ, (0, oQ.e)(QQ.name), FQ)
    }
  },
  6446: (QQ, FQ, wQ) => {
    wQ.d(FQ, {
      e: () => DQ
    });
    var LQ = wQ(2811);
    const qQ = {
      bloxd_wasm: () => "1dd71b260cf77c239728051b861ab33f1bc93c07cb4fd28db7884da2815d9fb7",
      bloxd_wasm_client: () => "3cfdd659c2eb8b6808b191f6b866ba4e169bdaee4701af255db5568969af1bb7",
      bloxd_wasm_workers: () => "e767134c25f99ed90bec9c0af92587618ddb83193667d16121760ce713ad3288",
      bloxd_wasm_models: () => "7efbd9cd4bdaa31a2b1cc79e297121e9fc854705c550b2f59e1da981f144f4cb",
      bloxd_wasm_webgpu: () => "5a2823876f9d5f8660104cc25ddeb02c3ddbc283e88525fa31e6d0deaa802210",
      bloxd_wasm_webgl: () => "08bd13fedb12bff9b9605ef44db652dccf2f7dcf60a963258385b5f773a6f220",
      bloxd_wasm_webgl1: () => "d6f63b1aa81b972a9480431e3334c89fc0648b9790fe3b5c8ff72a4945814f45",
      bloxd_wasm_replay: () => "225276b91dfdf588b8a1477982fd12458f6ce65cfbaf6a782c82ab32d22513fb",
      bloxd_wasm_recorder: () => "5fccb956d97b8d65d45cf6afb9a7042d1e4e4bad858c8aa1ec94da37e97ec72f",
      bloxd_wasm_anim: () => "3f5071fcbbd4cd73afc810a4abff7c2f49f86a8638003d25fa9521ff9c12ae28",
      bloxd_wasm_textures: () => "f13f878b8e801e1b7391eae5c539ceb75b7c99a88018bdad896fe7b520427f2f",
      bloxd_wasm_shader_pack: () => "e521fc18804ece0348d56f2c73e39ef69fee01e1ad9f9c53d92bd0fdbf472492"
    };
    var oQ = wQ(4540);

    function DQ(QQ) {
      const FQ = Object.prototype.hasOwnProperty.call(qQ, QQ) ? qQ[QQ]() : void 0;
      if (void 0 !== FQ) return {
        sha256: FQ,
        onMismatch: oQ.o
      };
      throw new LQ.j(`${QQ} has no release digest, so this build refuses it`)
    }
  },
  35929: (QQ, FQ, wQ) => {
    wQ.d(FQ, {
      c: () => LQ,
      g: () => oQ,
      k: () => vQ,
      m: () => DQ,
      o: () => qQ
    });
    const LQ = /^alloc_failed (\d+) bytes$/;

    function qQ(QQ, FQ) {
      return oQ(QQ, FQ) ? `trap=alloc_failed ${FQ} bytes` : `trap=${QQ}`
    }

    function oQ(QQ, FQ) {
      return "unreachable" === QQ && FQ > 0
    }

    function DQ(QQ, FQ, wQ) {
      const LQ = function(QQ) {
        return QQ instanceof WebAssembly.RuntimeError ? /unreachable/i.test(QQ.message) ? "unreachable" : /out of bounds/i.test(QQ.message) ? "out_of_bounds" : "runtime_error" : (QQ instanceof RangeError || QQ instanceof Error && "InternalError" === QQ.name) && /call stack|recursion/i.test(QQ.message) ? "stack_overflow" : "js_error"
      }(QQ);
      if ("unreachable" !== LQ) return {
        kind: LQ,
        panic: null,
        refusedBytes: 0
      };
      const qQ = FQ(),
        oQ = wQ();
      return {
        kind: LQ,
        panic: oQ > 0 ? null : qQ,
        refusedBytes: oQ
      }
    }
    const kQ = 300;

    function vQ(QQ) {
      return QQ.replace(/\s*\n\s*/g, " / ").slice(0, kQ)
    }
  }
};
Object.freeze(modules);
for (const QQ in modules) Object.freeze(modules[QQ]);