export const id = 150;
export const ids = [150];
export const modules = {
  37469: (VV, eV, xV) => {
    xV.d(eV, {
      b: () => sV,
      c: () => OV,
      d: () => IV,
      h: () => uV
    });
    var JV = xV(3194),
      YV = xV(3208),
      UV = xV(7178),
      yV = xV(5180),
      pV = xV(3202),
      QV = xV(3196);
    const nV = "bloxd-wasmDownloaded",
      wV = 12;

    function ZV(VV) {
      return VV.pathname.slice(VV.pathname.lastIndexOf("/") + 1)
    }

    function vV() {
      try {
        if ("undefined" === typeof localStorage) return null;
        const VV = JSON.parse(localStorage.getItem(nV) ?? "[]");
        return Array.isArray(VV) ? VV.filter((VV => "string" === typeof VV)) : []
      } catch (VV) {
        return console.warn("Bloxd wasm: the record of downloaded modules could not be read: asking the HTTP cache for none", VV), null
      }
    }
    const rV = Reflect.apply,
      kV = "undefined" === typeof Worker ? void 0 : Worker,
      bV = kV?.prototype.postMessage,
      EV = kV?.prototype.terminate,
      BV = "undefined" === typeof EventTarget ? void 0 : EventTarget.prototype.addEventListener,
      jV = "undefined" === typeof MessageEvent ? void 0 : Object.getOwnPropertyDescriptor(MessageEvent.prototype, "data")?.get,
      qV = Object.getOwnPropertyDescriptor(Object.getPrototypeOf(Uint8Array.prototype), "buffer").get,
      tV = function() {
        try {
          return (0, yV.e)(kV, "Worker", !0) && (0, yV.e)(bV, "postMessage") && (0, yV.e)(EV, "terminate") && (0, yV.e)(qV, "buffer") && void 0 !== BV && void 0 !== jV
        } catch {
          return !1
        }
      }();
    let FV = !1;

    function TV() {
      return tV && !FV
    }
    class PV {
      worker = null;
      failed = !1;
      constructor() {
        if (TV()) try {
          this.worker = NV(), rV(BV, this.worker, ["error", () => {
            this.failed = !0
          }])
        } catch {
          this.stop()
        }
      }
      take() {
        const VV = this.worker;
        if (this.worker = null, null !== VV && this.failed) throw rV(EV, VV, []), new Error("it did not run");
        return VV
      }
      stop() {
        const VV = this.worker;
        this.worker = null, null !== VV && rV(EV, VV, [])
      }
    }
    class AV {
      decoded;
      worker;
      reject;
      constructor(VV, eV, xV, JV, UV) {
        try {
          this.worker = UV?.take() ?? NV()
        } catch (nV) {
          throw FV = !0, new Error(`The zstd decoder's worker did not start: ${(0,pV.f)(nV)}`)
        }
        const yV = this.worker;
        this.decoded = (0, YV.j)(((eV, YV) => {
          this.reject = YV;
          const UV = (VV, eV) => {
            rV(BV, yV, [VV, eV])
          };
          UV("message", (VV => {
            JV();
            try {
              const JV = rV(jV, VV, []);
              if (!0 === JV) eV();
              else {
                if ("string" === typeof JV) throw JV.startsWith(pV.c) && (FV = !0), new Error(JV);
                xV(JV, rV(QV.t, JV, []))
              }
            } catch (nV) {
              YV(nV)
            }
          })), UV("error", (() => {
            FV = !0, YV(new Error("The zstd decoder's worker did not run"))
          })), UV("messageerror", (() => {
            YV(new Error(`${VV}'s decoder sent a piece that could not be read`))
          }))
        })), (0, QV.U)(this.decoded), rV(bV, yV, [
          [VV, eV]
        ])
      }
      push(VV) {
        rV(bV, this.worker, [VV, [rV(qV, VV, [])]])
      }
      end() {
        rV(bV, this.worker, [null])
      }
      markWorkerFailed() {
        FV = !0
      }
      fail(VV) {
        this.reject(VV), this.terminate()
      }
      terminate() {
        rV(EV, this.worker, [])
      }
    }

    function NV() {
      if (globalThis.Worker !== kV) throw new Error("Worker is not the one the page loaded with");
      return new Worker(new URL(xV.p + xV.u(79), xV.b), {
        name: "wasmZstdDecoder",
        type: "module"
      })
    }
    const XV = Reflect.apply,
      MV = ArrayBuffer,
      zV = "undefined" === typeof Response ? void 0 : Response,
      GV = "undefined" === typeof ReadableStream ? void 0 : ReadableStream,
      WV = function() {
        let VV;
        void 0 !== GV && new GV({
          __proto__: null,
          start(eV) {
            const {
              enqueue: xV,
              close: JV,
              error: YV
            } = Object.getPrototypeOf(eV);
            VV = {
              enqueue: xV,
              close: JV,
              error: YV
            }
          }
        }, {
          __proto__: null
        });
        return VV
      }(),
      RV = function() {
        try {
          return "undefined" !== typeof WebAssembly && "function" === typeof WebAssembly.compileStreaming && void 0 !== WV && (0, yV.e)(zV, "Response", !0) && (0, yV.e)(GV, "ReadableStream", !0) && (0, yV.e)(WV.enqueue, "enqueue") && (0, yV.e)(WV.close, "close") && (0, yV.e)(WV.error, "error") && (0, yV.e)(QV.Z, "body") && (0, yV.e)(QV.K, "getReader") && (0, yV.e)(QV.W, "read")
        } catch {
          return !1
        }
      }();
    async function gV(VV, eV, xV, JV, UV, yV, nV) {
      const wV = new MV(eV),
        {
          controller: ZV,
          compiled: vV
        } = function(VV) {
          try {
            let VV;
            const eV = new GV({
                __proto__: null,
                start(eV) {
                  VV = eV
                }
              }, {
                __proto__: null
              }),
              xV = new zV(eV, {
                __proto__: null,
                headers: {
                  __proto__: null,
                  "Content-Type": "application/wasm"
                }
              });
            return {
              controller: VV,
              compiled: (0, QV.U)((0, QV.A)((0, QV.hb)(xV)))
            }
          } catch (eV) {
            throw new Error(`${VV} could not be streamed into a compile: ${(0,pV.f)(eV)}`)
          }
        }(VV),
        {
          enqueue: rV,
          close: kV,
          error: bV
        } = WV,
        EV = VV => {
          try {
            XV(bV, ZV, [VV])
          } catch {}
        };
      let BV = 0;
      const jV = (xV, JV) => {
        if (BV + JV > eV) throw new Error(`${VV} decoded past its module's ${eV} bytes`);
        XV(QV.bb, new QV.i(wV), [new QV.i(xV), BV]);
        try {
          XV(rV, ZV, [new QV.i(wV, BV, JV)])
        } catch {}
        BV += JV
      };
      let qV, tV;
      try {
        qV = new AV(VV, eV, jV, JV, nV)
      } catch (NV) {
        throw EV(NV), NV
      }
      const FV = VV => {
        qV.fail(VV), void 0 !== tV && DV(tV)
      };
      let TV = !1;
      xV.addEventListener("abort", (() => {
        TV && qV.markWorkerFailed(), FV(new Error(`${VV} stalled`))
      }), {
        once: !0
      }), (0, YV.t)(vV, (() => {}), FV);
      try {
        let yV;
        try {
          yV = await fetch(VV, {
            signal: xV
          })
        } catch (NV) {
          throw new Error(`Fetching ${VV} failed: ${(0,pV.f)(NV)}`)
        }
        const {
          ok: nV,
          status: wV,
          body: ZV
        } = function(VV, eV) {
          try {
            const {
              ok: VV,
              status: xV
            } = eV;
            return {
              ok: VV,
              status: xV,
              body: XV(QV.Z, eV, [])
            }
          } catch {
            throw new Error(`${VV} came in a response a page script made`)
          }
        }(VV, yV);
        if (!nV) throw new Error(`Fetching ${VV} failed: HTTP ${wV}`);
        JV();
        const vV = XV(QV.K, ZV, []);
        tV = vV;
        const rV = () => {
          DV(vV)
        };
        for ((0, YV.t)(qV.decoded, rV, rV);;) {
          let eV;
          try {
            eV = await XV(QV.W, vV, [])
          } catch (NV) {
            throw new Error(`Downloading ${VV} failed: ${(0,pV.f)(NV)}`)
          }
          if (eV.done) break;
          JV(), qV.push(eV.value)
        }
        if (TV = !0, qV.end(), await qV.decoded, UV(), BV !== eV) throw new Error(`${VV} ended before its module did`)
      } catch (NV) {
        throw EV(NV), FV(NV), NV
      }
      qV.terminate();
      try {
        XV(kV, ZV, [])
      } catch {}
      const PV = await vV;
      return void 0 !== yV && await (0, QV.x)(VV, new QV.i(wV), {
        sha256: yV.sha256,
        onMismatch: () => {}
      }), PV
    }

    function DV(VV) {
      try {
        (0, QV.U)(VV.cancel())
      } catch {}
    }
    const iV = ".zst.bin",
      CV = 1e3;
    let aV = null;

    function oV(VV) {
      return aV ??= function() {
        const VV = new Map,
          eV = "bloxd_wasm_webgpu:5157353,bloxd_wasm_webgl:5537354,bloxd_wasm_webgl1:4870652,bloxd_wasm_workers:201241,bloxd_wasm_models:311549,bloxd_wasm_client:3726896";
        for (const xV of eV?.split(",") ?? []) {
          const [eV = "", JV] = xV.split(":"), YV = Number(JV);
          Number.isInteger(YV) && YV > 0 && VV.set(eV, YV)
        }
        return VV
      }(), aV.get(VV)
    }
    async function cV(VV, eV) {
      let xV = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
      const JV = oV(VV.name);
      if (void 0 === JV) return hV(await lV(VV, eV, xV), "cold-wasm");
      const UV = RV ? new PV : null;
      let yV;
      try {
        if (nV = VV.url(), vV()?.includes(ZV(nV)) && await async function(VV) {
            const eV = new AbortController;
            let xV;
            const JV = (0, YV.j)((VV => {
              xV = setTimeout((() => {
                eV.abort(), VV(null)
              }), CV)
            }));
            try {
              const xV = fetch(VV.href, {
                  cache: "only-if-cached",
                  mode: "same-origin",
                  signal: eV.signal
                }),
                UV = await (0, YV.s)([xV, JV]);
              return !!UV?.ok && ((0, QV.U)(UV.body.cancel()), !0)
            } catch {
              return !1
            } finally {
              clearTimeout(xV)
            }
          }(VV.url())) return UV?.stop(), await async function(VV, eV, xV, JV) {
          let YV = !1;
          const UV = xV && {
            sha256: xV.sha256,
            onMismatch: () => {
              YV = !0
            }
          };
          try {
            return hV(await lV(VV, UV, JV), "warm")
          } catch (yV) {
            const JV = await LV(VV, eV, xV, null);
            if (null === JV) throw YV && xV.onMismatch(), yV;
            return console.warn(`${VV.url().href} from the HTTP cache failed: ${(0,pV.f)(yV)}: loaded its copy instead`), hV(JV, YV ? "warm-refused" : "warm-broken")
          }
        }(VV, JV, eV, xV);
        yV = await LV(VV, JV, eV, UV)
      } finally {
        UV?.stop()
      }
      var nV;
      return null !== yV ? hV(yV, "cold-worker") : hV(await lV(VV, eV, xV), "cold-wasm")
    }

    function hV(VV, eV) {
      return {
        __proto__: null,
        module: VV,
        path: eV
      }
    }

    function lV(VV, eV, xV) {
      return void 0 === oV(VV.name) ? (0, QV.G)(VV.url(), eV, xV) : (0, QV.G)(VV.url(), eV, {
        ...xV,
        hideThen: !0,
        onDownloaded: () => {
          ! function(VV) {
            const eV = vV();
            if (null === eV) return;
            const xV = ZV(VV),
              JV = eV.filter((VV => VV !== xV));
            JV.push(xV);
            try {
              localStorage.setItem(nV, JSON.stringify(JV.slice(-wV)))
            } catch (YV) {
              console.warn(`Bloxd wasm: ${xV} could not be recorded as downloaded: a later join asks the HTTP cache nothing for it`, YV)
            }
          }(VV.url()), xV.onDownloaded?.()
        }
      })
    }
    async function LV(VV, eV, xV, JV) {
      if (!RV || !TV()) return null;
      const YV = VV.url(),
        UV = `${YV.href}${iV}`;
      try {
        return await (0, QV.fb)(UV, ((VV, YV, yV) => gV(UV, eV, VV, YV, yV, xV, JV)))
      } catch (yV) {
        return console.warn(`${(0,pV.f)(yV)}: loading ${YV.href} instead`), null
      }
    }
    let fV = null,
      mV = !1;
    const KV = new Map,
      HV = new Map;

    function uV(VV, eV, xV) {
      return null === fV ? fV = SV(VV, eV, xV?.memoryMaximumBytes) : VV !== fV.build ? console.warn(`Bloxd wasm: ${VV.name} was asked for after ${fV.build.name} started loading, which this thread keeps`) : eV.name !== fV.workers.name && console.warn(`Bloxd wasm: ${eV.name} was asked for workers after ${fV.workers.name}, which this thread keeps`), xV?.reloadFailedDownload && !mV && (0, JV._)() && (mV = !0, fV = SV(fV.build, fV.workers, fV.memoryMaximumBytes)), fV.loaded
    }

    function sV(VV, eV) {
      if (null !== fV) return (0, YV.g)([]);
      const xV = VV.filter((VV => !KV.has(VV.name))).map((VV => {
        const xV = new AbortController,
          JV = {
            compiled: lV(VV, (0, UV.e)(VV.name), {
              priority: eV,
              pJ: xV.signal,
              onDownloaded: () => {
                JV.downloaded = !0
              },
              retries: {
                onRetry: () => {
                  JV.downloaded = !1, null !== fV && xV.abort()
                }
              }
            }),
            cancel: xV,
            downloaded: !1
          };
        return KV.set(VV.name, JV), (0, YV.j)((eV => {
          (0, YV.t)(JV.compiled, (() => {
            JV.downloaded = !0, eV()
          }), (JV => {
            xV.signal.aborted || console.warn(`Bloxd wasm: ${VV.name}'s compile ahead of the load failed: the load compiles it afresh`, JV), eV()
          }))
        }))
      }));
      return (0, YV.g)(xV)
    }

    function SV(VV, eV, xV) {
      const UV = (0, JV.K)((async () => {
        (0, yV.u)(), HV.clear();
        const xV = dV(VV),
          JV = eV.name === VV.name ? xV : dV(eV);
        for (const {
            cancel: VV
          }
          of KV.values()) VV.abort();
        KV.clear(), await (0, YV.g)([xV, JV]);
        const UV = await xV,
          pV = await JV;
        return (0, yV.u)(), {
          module: UV,
          workerModule: pV
        }
      }), VV, xV);
      return {
        build: VV,
        workers: eV,
        memoryMaximumBytes: xV,
        loaded: UV
      }
    }

    function IV(VV) {
      return HV.get(VV)
    }

    function dV(VV) {
      const eV = performance.now(),
        xV = KV.get(VV.name);
      KV.delete(VV.name);
      const JV = !0 === xV?.downloaded ? xV : void 0;
      return void 0 !== xV && void 0 === JV && xV.cancel.abort(), (0, YV.j)(((xV, UV) => {
        const yV = (JV, YV) => {
            HV.set(VV.name, {
              path: YV,
              ms: performance.now() - eV
            }), xV(JV)
          },
          pV = () => {
            (0, YV.t)(Ve(VV), (VV => {
              let {
                module: eV,
                path: xV
              } = VV;
              yV(eV, xV)
            }), UV)
          };
        void 0 === JV ? pV() : (0, YV.t)(JV.compiled, (VV => {
          yV(VV, "ahead")
        }), pV)
      }))
    }
    async function OV(VV, eV) {
      const {
        module: xV
      } = await Ve(VV, {
        retries: eV
      });
      return xV
    }
    async function Ve(VV) {
      let eV = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
      return await cV(VV, (0, UV.e)(VV.name), eV)
    }
  },
  7178: (VV, eV, xV) => {
    xV.d(eV, {
      e: () => yV
    });
    var JV = xV(3196);
    const YV = {
      bloxd_wasm: () => "252eb0d4c25474c8ad4eedf49004824c66703891664dd105e8794514617b7f66",
      bloxd_wasm_client: () => "7d6fde0515183a27a75873490042de1a4ba89b2e110e23a73dd1b0a6c9643676",
      bloxd_wasm_workers: () => "d67514a22eb408f1aa31cbe700bb4786d51175017304bdd7b210068eb0444558",
      bloxd_wasm_models: () => "ef6a73a4745ccf7e34691c3afee6fa9f99e6383b8fa5cf54fb92602667233184",
      bloxd_wasm_webgpu: () => "521647906e693662a3fe235faa1fd10bc894b8262cf1aa2d92b9fd61655213ad",
      bloxd_wasm_webgl: () => "8949c301acb6ad07ffdca2e65da52eac203d542b3e4f2ecc1ec9728f497abcbd",
      bloxd_wasm_webgl1: () => "754597f08f30bb2090c1ad6eba2f662bc59ddd22c4dab79825c05b56182ca41a",
      bloxd_wasm_replay: () => "002aa8718ff84386b563189fea7dc48bc338240f8c60b0a1a8b237119fa415be",
      bloxd_wasm_recorder: () => "91cd6139184ce88ce1821f44e757e3a98b4345a6aa284548ac90d569468cc690",
      bloxd_wasm_anim: () => "5103a8e3223ec1405249b583a0c62ec033bf746a8c1e88c9772c98fe9fa16dcf",
      bloxd_wasm_textures: () => "dd0b3d60ccc8abf434697177c01310ef60bf4e3cdd6a8df8e70c5bd6a119e75c",
      bloxd_wasm_shader_pack: () => "7db3262527f10754728edb61693c584b0ace05ec24f1ee479bdc61cebd73439a"
    };
    var UV = xV(5180);

    function yV(VV) {
      const eV = Object.prototype.hasOwnProperty.call(YV, VV) ? YV[VV]() : void 0;
      if (void 0 !== eV) return {
        sha256: eV,
        onMismatch: UV.t
      };
      throw new JV.g(`${VV} has no release digest, so this build refuses it`)
    }
  }
};
Object.freeze(modules);
for (const VV in modules) Object.freeze(modules[VV]);