export const id = 150;
export const ids = [150];
export const modules = {
  37257: (MM, rM, iM) => {
    iM.d(rM, {
      d: () => KM,
      h: () => cM,
      j: () => TM,
      k: () => IM
    });
    var OM = iM(3185),
      SM = iM(3205),
      jM = iM(7116),
      aM = iM(5069),
      PM = iM(3196),
      nM = iM(3188);
    const QM = "bloxd-wasmDownloaded",
      zM = 12;

    function LM(MM) {
      return MM.pathname.slice(MM.pathname.lastIndexOf("/") + 1)
    }

    function mM() {
      try {
        if ("undefined" === typeof localStorage) return null;
        const MM = JSON.parse(localStorage.getItem(QM) ?? "[]");
        return Array.isArray(MM) ? MM.filter((MM => "string" === typeof MM)) : []
      } catch (MM) {
        return console.warn("Bloxd wasm: the record of downloaded modules could not be read: asking the HTTP cache for none", MM), null
      }
    }
    const HM = Reflect.apply,
      hM = "undefined" === typeof Worker ? void 0 : Worker,
      JM = hM?.prototype.postMessage,
      dM = hM?.prototype.terminate,
      yM = "undefined" === typeof EventTarget ? void 0 : EventTarget.prototype.addEventListener,
      lM = "undefined" === typeof MessageEvent ? void 0 : Object.getOwnPropertyDescriptor(MessageEvent.prototype, "data")?.get,
      EM = Object.getOwnPropertyDescriptor(Object.getPrototypeOf(Uint8Array.prototype), "buffer").get,
      UM = function() {
        try {
          return (0, aM.p)(hM, "Worker", !0) && (0, aM.p)(JM, "postMessage") && (0, aM.p)(dM, "terminate") && (0, aM.p)(EM, "buffer") && void 0 !== yM && void 0 !== lM
        } catch {
          return !1
        }
      }();
    let GM = !1;

    function CM() {
      return UM && !GM
    }
    class eM {
      worker = null;
      failed = !1;
      constructor() {
        if (CM()) try {
          this.worker = wM(), HM(yM, this.worker, ["error", () => {
            this.failed = !0
          }])
        } catch {
          this.stop()
        }
      }
      take() {
        const MM = this.worker;
        if (this.worker = null, null !== MM && this.failed) throw HM(dM, MM, []), new Error("it did not run");
        return MM
      }
      stop() {
        const MM = this.worker;
        this.worker = null, null !== MM && HM(dM, MM, [])
      }
    }
    class bM {
      decoded;
      worker;
      reject;
      constructor(MM, rM, iM, OM, jM) {
        try {
          this.worker = jM?.take() ?? wM()
        } catch (QM) {
          throw GM = !0, new Error(`The zstd decoder's worker did not start: ${(0,PM.g)(QM)}`)
        }
        const aM = this.worker;
        this.decoded = (0, SM.i)(((rM, SM) => {
          this.reject = SM;
          const jM = (MM, rM) => {
            HM(yM, aM, [MM, rM])
          };
          jM("message", (MM => {
            OM();
            try {
              const OM = HM(lM, MM, []);
              if (!0 === OM) rM();
              else {
                if ("string" === typeof OM) throw OM.startsWith(PM.e) && (GM = !0), new Error(OM);
                iM(OM, HM(nM.u, OM, []))
              }
            } catch (QM) {
              SM(QM)
            }
          })), jM("error", (() => {
            GM = !0, SM(new Error("The zstd decoder's worker did not run"))
          })), jM("messageerror", (() => {
            SM(new Error(`${MM}'s decoder sent a piece that could not be read`))
          }))
        })), (0, nM.V)(this.decoded), HM(JM, aM, [
          [MM, rM]
        ])
      }
      push(MM) {
        HM(JM, this.worker, [MM, [HM(EM, MM, [])]])
      }
      end() {
        HM(JM, this.worker, [null])
      }
      markWorkerFailed() {
        GM = !0
      }
      fail(MM) {
        this.reject(MM), this.terminate()
      }
      terminate() {
        HM(dM, this.worker, [])
      }
    }

    function wM() {
      if (globalThis.Worker !== hM) throw new Error("Worker is not the one the page loaded with");
      return new Worker(new URL(iM.p + iM.u(79), iM.b), {
        name: "wasmZstdDecoder",
        type: "module"
      })
    }
    const tM = Reflect.apply,
      gM = ArrayBuffer,
      uM = "undefined" === typeof Response ? void 0 : Response,
      RM = "undefined" === typeof ReadableStream ? void 0 : ReadableStream,
      pM = function() {
        let MM;
        void 0 !== RM && new RM({
          __proto__: null,
          start(rM) {
            const {
              enqueue: iM,
              close: OM,
              error: SM
            } = Object.getPrototypeOf(rM);
            MM = {
              enqueue: iM,
              close: OM,
              error: SM
            }
          }
        }, {
          __proto__: null
        });
        return MM
      }(),
      WM = function() {
        try {
          return "undefined" !== typeof WebAssembly && "function" === typeof WebAssembly.compileStreaming && void 0 !== pM && (0, aM.p)(uM, "Response", !0) && (0, aM.p)(RM, "ReadableStream", !0) && (0, aM.p)(pM.enqueue, "enqueue") && (0, aM.p)(pM.close, "close") && (0, aM.p)(pM.error, "error") && (0, aM.p)(nM._, "body") && (0, aM.p)(nM.N, "getReader") && (0, aM.p)(nM.Z, "read")
        } catch {
          return !1
        }
      }();
    async function sM(MM, rM, iM, OM, jM, aM, QM) {
      const zM = new gM(rM),
        {
          controller: LM,
          compiled: mM
        } = function(MM) {
          try {
            let MM;
            const rM = new RM({
                __proto__: null,
                start(rM) {
                  MM = rM
                }
              }, {
                __proto__: null
              }),
              iM = new uM(rM, {
                __proto__: null,
                headers: {
                  __proto__: null,
                  "Content-Type": "application/wasm"
                }
              });
            return {
              controller: MM,
              compiled: (0, nM.V)((0, nM.y)((0, nM.eb)(iM)))
            }
          } catch (rM) {
            throw new Error(`${MM} could not be streamed into a compile: ${(0,PM.g)(rM)}`)
          }
        }(MM),
        {
          enqueue: HM,
          close: hM,
          error: JM
        } = pM,
        dM = MM => {
          try {
            tM(JM, LM, [MM])
          } catch {}
        };
      let yM = 0;
      const lM = (iM, OM) => {
        if (yM + OM > rM) throw new Error(`${MM} decoded past its module's ${rM} bytes`);
        tM(nM.$, new nM.i(zM), [new nM.i(iM), yM]);
        try {
          tM(HM, LM, [new nM.i(zM, yM, OM)])
        } catch {}
        yM += OM
      };
      let EM, UM;
      try {
        EM = new bM(MM, rM, lM, OM, QM)
      } catch (wM) {
        throw dM(wM), wM
      }
      const GM = MM => {
        EM.fail(MM), void 0 !== UM && DM(UM)
      };
      let CM = !1;
      iM.addEventListener("abort", (() => {
        CM && EM.markWorkerFailed(), GM(new Error(`${MM} stalled`))
      }), {
        once: !0
      }), (0, SM.p)(mM, (() => {}), GM);
      try {
        let aM;
        try {
          aM = await fetch(MM, {
            signal: iM
          })
        } catch (wM) {
          throw new Error(`Fetching ${MM} failed: ${(0,PM.g)(wM)}`)
        }
        const {
          ok: QM,
          status: zM,
          body: LM
        } = function(MM, rM) {
          try {
            const {
              ok: MM,
              status: iM
            } = rM;
            return {
              ok: MM,
              status: iM,
              body: tM(nM._, rM, [])
            }
          } catch {
            throw new Error(`${MM} came in a response a page script made`)
          }
        }(MM, aM);
        if (!QM) throw new Error(`Fetching ${MM} failed: HTTP ${zM}`);
        OM();
        const mM = tM(nM.N, LM, []);
        UM = mM;
        const HM = () => {
          DM(mM)
        };
        for ((0, SM.p)(EM.decoded, HM, HM);;) {
          let rM;
          try {
            rM = await tM(nM.Z, mM, [])
          } catch (wM) {
            throw new Error(`Downloading ${MM} failed: ${(0,PM.g)(wM)}`)
          }
          if (rM.done) break;
          OM(), EM.push(rM.value)
        }
        if (CM = !0, EM.end(), await EM.decoded, jM(), yM !== rM) throw new Error(`${MM} ended before its module did`)
      } catch (wM) {
        throw dM(wM), GM(wM), wM
      }
      EM.terminate();
      try {
        tM(hM, LM, [])
      } catch {}
      const eM = await mM;
      return void 0 !== aM && await (0, nM.v)(MM, new nM.i(zM), {
        sha256: aM.sha256,
        onMismatch: () => {}
      }), eM
    }

    function DM(MM) {
      try {
        (0, nM.V)(MM.cancel())
      } catch {}
    }
    const kM = ".zst.bin",
      ZM = 1e3;
    let oM = null;

    function fM(MM) {
      return oM ??= function() {
        const MM = new Map,
          rM = "bloxd_wasm_webgpu:5157353,bloxd_wasm_webgl:5537354,bloxd_wasm_webgl1:4870652,bloxd_wasm_workers:201241,bloxd_wasm_models:311549,bloxd_wasm_client:3726896";
        for (const iM of rM?.split(",") ?? []) {
          const [rM = "", OM] = iM.split(":"), SM = Number(OM);
          Number.isInteger(SM) && SM > 0 && MM.set(rM, SM)
        }
        return MM
      }(), oM.get(MM)
    }
    async function YM(MM, rM) {
      let iM = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
      const OM = fM(MM.name);
      if (void 0 === OM) return NM(await AM(MM, rM, iM), "cold-wasm");
      const jM = WM ? new eM : null;
      let aM;
      try {
        if (QM = MM.url(), mM()?.includes(LM(QM)) && await async function(MM) {
            const rM = new AbortController;
            let iM;
            const OM = (0, SM.i)((MM => {
              iM = setTimeout((() => {
                rM.abort(), MM(null)
              }), ZM)
            }));
            try {
              const iM = fetch(MM.href, {
                  cache: "only-if-cached",
                  mode: "same-origin",
                  signal: rM.signal
                }),
                jM = await (0, SM.m)([iM, OM]);
              return !!jM?.ok && ((0, nM.V)(jM.body.cancel()), !0)
            } catch {
              return !1
            } finally {
              clearTimeout(iM)
            }
          }(MM.url())) return jM?.stop(), await async function(MM, rM, iM, OM) {
          let SM = !1;
          const jM = iM && {
            sha256: iM.sha256,
            onMismatch: () => {
              SM = !0
            }
          };
          try {
            return NM(await AM(MM, jM, OM), "warm")
          } catch (aM) {
            const OM = await xM(MM, rM, iM, null);
            if (null === OM) throw SM && iM.onMismatch(), aM;
            return console.warn(`${MM.url().href} from the HTTP cache failed: ${(0,PM.g)(aM)}: loaded its copy instead`), NM(OM, SM ? "warm-refused" : "warm-broken")
          }
        }(MM, OM, rM, iM);
        aM = await xM(MM, OM, rM, jM)
      } finally {
        jM?.stop()
      }
      var QM;
      return null !== aM ? NM(aM, "cold-worker") : NM(await AM(MM, rM, iM), "cold-wasm")
    }

    function NM(MM, rM) {
      return {
        __proto__: null,
        module: MM,
        path: rM
      }
    }

    function AM(MM, rM, iM) {
      return void 0 === fM(MM.name) ? (0, nM.E)(MM.url(), rM, iM) : (0, nM.E)(MM.url(), rM, {
        ...iM,
        hideThen: !0,
        onDownloaded: () => {
          ! function(MM) {
            const rM = mM();
            if (null === rM) return;
            const iM = LM(MM),
              OM = rM.filter((MM => MM !== iM));
            OM.push(iM);
            try {
              localStorage.setItem(QM, JSON.stringify(OM.slice(-zM)))
            } catch (SM) {
              console.warn(`Bloxd wasm: ${iM} could not be recorded as downloaded: a later join asks the HTTP cache nothing for it`, SM)
            }
          }(MM.url()), iM.onDownloaded?.()
        }
      })
    }
    async function xM(MM, rM, iM, OM) {
      if (!WM || !CM()) return null;
      const SM = MM.url(),
        jM = `${SM.href}${kM}`;
      try {
        return await (0, nM.ab)(jM, ((MM, SM, aM) => sM(jM, rM, MM, SM, aM, iM, OM)))
      } catch (aM) {
        return console.warn(`${(0,PM.g)(aM)}: loading ${SM.href} instead`), null
      }
    }
    let vM = null,
      FM = !1;
    const BM = new Map,
      XM = new Map;

    function IM(MM, rM, iM) {
      return null === vM ? vM = qM(MM, rM, iM?.memoryMaximumBytes) : MM !== vM.build ? console.warn(`Bloxd wasm: ${MM.name} was asked for after ${vM.build.name} started loading, which this thread keeps`) : rM.name !== vM.workers.name && console.warn(`Bloxd wasm: ${rM.name} was asked for workers after ${vM.workers.name}, which this thread keeps`), iM?.reloadFailedDownload && !FM && (0, OM.$)() && (FM = !0, vM = qM(vM.build, vM.workers, vM.memoryMaximumBytes)), vM.loaded
    }

    function KM(MM, rM) {
      if (null !== vM) return (0, SM.g)([]);
      const iM = MM.filter((MM => !BM.has(MM.name))).map((MM => {
        const iM = new AbortController,
          OM = {
            compiled: AM(MM, (0, jM.b)(MM.name), {
              priority: rM,
              Ti: iM.signal,
              onDownloaded: () => {
                OM.downloaded = !0
              },
              retries: {
                onRetry: () => {
                  OM.downloaded = !1, null !== vM && iM.abort()
                }
              }
            }),
            cancel: iM,
            downloaded: !1
          };
        return BM.set(MM.name, OM), (0, SM.i)((rM => {
          (0, SM.p)(OM.compiled, (() => {
            OM.downloaded = !0, rM()
          }), (OM => {
            iM.signal.aborted || console.warn(`Bloxd wasm: ${MM.name}'s compile ahead of the load failed: the load compiles it afresh`, OM), rM()
          }))
        }))
      }));
      return (0, SM.g)(iM)
    }

    function qM(MM, rM, iM) {
      const jM = (0, OM.K)((async () => {
        (0, aM.F)(), XM.clear();
        const iM = VM(MM),
          OM = rM.name === MM.name ? iM : VM(rM);
        for (const {
            cancel: MM
          }
          of BM.values()) MM.abort();
        BM.clear(), await (0, SM.g)([iM, OM]);
        const jM = await iM,
          PM = await OM;
        return (0, aM.F)(), {
          module: jM,
          workerModule: PM
        }
      }), MM, iM);
      return {
        build: MM,
        workers: rM,
        memoryMaximumBytes: iM,
        loaded: jM
      }
    }

    function TM(MM) {
      return XM.get(MM)
    }

    function VM(MM) {
      const rM = performance.now(),
        iM = BM.get(MM.name);
      BM.delete(MM.name);
      const OM = !0 === iM?.downloaded ? iM : void 0;
      return void 0 !== iM && void 0 === OM && iM.cancel.abort(), (0, SM.i)(((iM, jM) => {
        const aM = (OM, SM) => {
            XM.set(MM.name, {
              path: SM,
              ms: performance.now() - rM
            }), iM(OM)
          },
          PM = () => {
            (0, SM.p)(Mr(MM), (MM => {
              let {
                module: rM,
                path: iM
              } = MM;
              aM(rM, iM)
            }), jM)
          };
        void 0 === OM ? PM() : (0, SM.p)(OM.compiled, (MM => {
          aM(MM, "ahead")
        }), PM)
      }))
    }
    async function cM(MM, rM) {
      const {
        module: iM
      } = await Mr(MM, {
        retries: rM
      });
      return iM
    }
    async function Mr(MM) {
      let rM = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
      return await YM(MM, (0, jM.b)(MM.name), rM)
    }
  },
  7116: (MM, rM, iM) => {
    iM.d(rM, {
      b: () => aM
    });
    var OM = iM(3188);
    const SM = {
      bloxd_wasm: () => "9c356b3ab0e1dec8279681c51821e86b0c769cac263f9e0f7f99f79b8758e8b4",
      bloxd_wasm_client: () => "80b728e2e1c07ea01ac0480b86847c41501509afdc4dddbfb5c028d2bf09dee0",
      bloxd_wasm_workers: () => "d70704eca78df456ad3913c0adf79f8b52dba4340cd12a1b6bf933cca972741b",
      bloxd_wasm_models: () => "3ad7e1eadb9490d2eafb88cd8a1e2fa3b217bc686d0f647a926d3b3e45f346b2",
      bloxd_wasm_webgpu: () => "b23ee9a016abf7c07a51e4dd79c87b95e00f54293086e61b89ff00c5c3054e76",
      bloxd_wasm_webgl: () => "c7e113e0705d9817aa1ea95296a04ca341e8508395d22c3a7f94a5cdffba84cd",
      bloxd_wasm_webgl1: () => "153c631ef0614b6599a45ffada7f02f5904513286e82e789064544612e2e6f87",
      bloxd_wasm_replay: () => "05e5306bf37c51cb76f69bd76cd489a1e480f7bb5d6f9b73f5c592d1fcaea336",
      bloxd_wasm_recorder: () => "ef71649d3e6f52a30e3021925f1ba0c1225f7afb503bf09554b23ac481798d94",
      bloxd_wasm_anim: () => "9b12a80af4e0001e472a77f851e64ef000ea347ea6f87cc37b924c310c6e0847",
      bloxd_wasm_textures: () => "6d67beffabd1d2d1a22a74a0da90a6f5a26efadd82c32dec4de58168d5b38069",
      bloxd_wasm_shader_pack: () => "48a1189cb064654273445fd97d029cf7474ee7e14007e5ca8ff8bb20718ac5cb"
    };
    var jM = iM(5069);

    function aM(MM) {
      const rM = Object.prototype.hasOwnProperty.call(SM, MM) ? SM[MM]() : void 0;
      if (void 0 !== rM) return {
        sha256: rM,
        onMismatch: jM.B
      };
      throw new OM.f(`${MM} has no release digest, so this build refuses it`)
    }
  }
};
Object.freeze(modules);
for (const MM in modules) Object.freeze(modules[MM]);