export const id = 137;
export const ids = [137];
export const modules = {
  36387: (BB, jB, zB) => {
    zB.d(jB, {
      e: () => cB,
      f: () => OB,
      g: () => vB,
      i: () => CB
    });
    var QB = zB(2967),
      nB = zB(2992),
      dB = zB(6578),
      IB = zB(4782),
      NB = zB(2983),
      uB = zB(2974);
    const UB = "bloxd-wasmDownloaded",
      aB = 12;

    function pB(BB) {
      return BB.pathname.slice(BB.pathname.lastIndexOf("/") + 1)
    }

    function rB() {
      try {
        if ("undefined" === typeof localStorage) return null;
        const BB = JSON.parse(localStorage.getItem(UB) ?? "[]");
        return Array.isArray(BB) ? BB.filter((BB => "string" === typeof BB)) : []
      } catch (BB) {
        return console.warn("Bloxd wasm: the record of downloaded modules could not be read: asking the HTTP cache for none", BB), null
      }
    }
    const sB = Reflect.apply,
      JB = "undefined" === typeof Worker ? void 0 : Worker,
      mB = JB?.prototype.postMessage,
      yB = JB?.prototype.terminate,
      kB = "undefined" === typeof EventTarget ? void 0 : EventTarget.prototype.addEventListener,
      GB = "undefined" === typeof MessageEvent ? void 0 : Object.getOwnPropertyDescriptor(MessageEvent.prototype, "data")?.get,
      LB = Object.getOwnPropertyDescriptor(Object.getPrototypeOf(Uint8Array.prototype), "buffer").get,
      gB = function() {
        try {
          return (0, IB.h)(JB, "Worker", !0) && (0, IB.h)(mB, "postMessage") && (0, IB.h)(yB, "terminate") && (0, IB.h)(LB, "buffer") && void 0 !== kB && void 0 !== GB
        } catch {
          return !1
        }
      }();
    let tB = !1;

    function SB() {
      return gB && !tB
    }
    class MB {
      worker = null;
      failed = !1;
      constructor() {
        if (SB()) try {
          this.worker = iB(), sB(kB, this.worker, ["error", () => {
            this.failed = !0
          }])
        } catch {
          this.stop()
        }
      }
      take() {
        const BB = this.worker;
        if (this.worker = null, null !== BB && this.failed) throw sB(yB, BB, []), new Error("it did not run");
        return BB
      }
      stop() {
        const BB = this.worker;
        this.worker = null, null !== BB && sB(yB, BB, [])
      }
    }
    class EB {
      decoded;
      worker;
      reject;
      constructor(BB, jB, zB, QB, dB) {
        try {
          this.worker = dB?.take() ?? iB()
        } catch (UB) {
          throw tB = !0, new Error(`The zstd decoder's worker did not start: ${(0,NB.f)(UB)}`)
        }
        const IB = this.worker;
        this.decoded = (0, nB.j)(((jB, nB) => {
          this.reject = nB;
          const dB = (BB, jB) => {
            sB(kB, IB, [BB, jB])
          };
          dB("message", (BB => {
            QB();
            try {
              const QB = sB(GB, BB, []);
              if (!0 === QB) jB();
              else {
                if ("string" === typeof QB) throw QB.startsWith(NB.e) && (tB = !0), new Error(QB);
                zB(QB, sB(uB.x, QB, []))
              }
            } catch (UB) {
              nB(UB)
            }
          })), dB("error", (() => {
            tB = !0, nB(new Error("The zstd decoder's worker did not run"))
          })), dB("messageerror", (() => {
            nB(new Error(`${BB}'s decoder sent a piece that could not be read`))
          }))
        })), (0, uB.X)(this.decoded), sB(mB, IB, [
          [BB, jB]
        ])
      }
      push(BB) {
        sB(mB, this.worker, [BB, [sB(LB, BB, [])]])
      }
      end() {
        sB(mB, this.worker, [null])
      }
      markWorkerFailed() {
        tB = !0
      }
      fail(BB) {
        this.reject(BB), this.terminate()
      }
      terminate() {
        sB(yB, this.worker, [])
      }
    }

    function iB() {
      if (globalThis.Worker !== JB) throw new Error("Worker is not the one the page loaded with");
      return new Worker(new URL(zB.p + zB.u(68), zB.b), {
        name: "wasmZstdDecoder",
        type: "module"
      })
    }
    const qB = Reflect.apply,
      fB = ArrayBuffer,
      oB = "undefined" === typeof Response ? void 0 : Response,
      HB = "undefined" === typeof ReadableStream ? void 0 : ReadableStream,
      DB = function() {
        let BB;
        void 0 !== HB && new HB({
          __proto__: null,
          start(jB) {
            const {
              enqueue: zB,
              close: QB,
              error: nB
            } = Object.getPrototypeOf(jB);
            BB = {
              enqueue: zB,
              close: QB,
              error: nB
            }
          }
        }, {
          __proto__: null
        });
        return BB
      }(),
      FB = function() {
        try {
          return "undefined" !== typeof WebAssembly && "function" === typeof WebAssembly.compileStreaming && void 0 !== DB && (0, IB.h)(oB, "Response", !0) && (0, IB.h)(HB, "ReadableStream", !0) && (0, IB.h)(DB.enqueue, "enqueue") && (0, IB.h)(DB.close, "close") && (0, IB.h)(DB.error, "error") && (0, IB.h)(uB.$, "body") && (0, IB.h)(uB.O, "getReader") && (0, IB.h)(uB.Y, "read")
        } catch {
          return !1
        }
      }();
    async function YB(BB, jB, zB, QB, dB, IB, UB) {
      const aB = new fB(jB),
        {
          controller: pB,
          compiled: rB
        } = function(BB) {
          try {
            let BB;
            const jB = new HB({
                __proto__: null,
                start(jB) {
                  BB = jB
                }
              }, {
                __proto__: null
              }),
              zB = new oB(jB, {
                __proto__: null,
                headers: {
                  __proto__: null,
                  "Content-Type": "application/wasm"
                }
              });
            return {
              controller: BB,
              compiled: (0, uB.X)((0, uB.E)((0, uB.hb)(zB)))
            }
          } catch (jB) {
            throw new Error(`${BB} could not be streamed into a compile: ${(0,NB.f)(jB)}`)
          }
        }(BB),
        {
          enqueue: sB,
          close: JB,
          error: mB
        } = DB,
        yB = BB => {
          try {
            qB(mB, pB, [BB])
          } catch {}
        };
      let kB = 0;
      const GB = (zB, QB) => {
        if (kB + QB > jB) throw new Error(`${BB} decoded past its module's ${jB} bytes`);
        qB(uB.ab, new uB.n(aB), [new uB.n(zB), kB]);
        try {
          qB(sB, pB, [new uB.n(aB, kB, QB)])
        } catch {}
        kB += QB
      };
      let LB, gB;
      try {
        LB = new EB(BB, jB, GB, QB, UB)
      } catch (iB) {
        throw yB(iB), iB
      }
      const tB = BB => {
        LB.fail(BB), void 0 !== gB && VB(gB)
      };
      let SB = !1;
      zB.addEventListener("abort", (() => {
        SB && LB.markWorkerFailed(), tB(new Error(`${BB} stalled`))
      }), {
        once: !0
      }), (0, nB.u)(rB, (() => {}), tB);
      try {
        let IB;
        try {
          IB = await fetch(BB, {
            signal: zB
          })
        } catch (iB) {
          throw new Error(`Fetching ${BB} failed: ${(0,NB.f)(iB)}`)
        }
        const {
          ok: UB,
          status: aB,
          body: pB
        } = function(BB, jB) {
          try {
            const {
              ok: BB,
              status: zB
            } = jB;
            return {
              ok: BB,
              status: zB,
              body: qB(uB.$, jB, [])
            }
          } catch {
            throw new Error(`${BB} came in a response a page script made`)
          }
        }(BB, IB);
        if (!UB) throw new Error(`Fetching ${BB} failed: HTTP ${aB}`);
        QB();
        const rB = qB(uB.O, pB, []);
        gB = rB;
        const sB = () => {
          VB(rB)
        };
        for ((0, nB.u)(LB.decoded, sB, sB);;) {
          let jB;
          try {
            jB = await qB(uB.Y, rB, [])
          } catch (iB) {
            throw new Error(`Downloading ${BB} failed: ${(0,NB.f)(iB)}`)
          }
          if (jB.done) break;
          QB(), LB.push(jB.value)
        }
        if (SB = !0, LB.end(), await LB.decoded, dB(), kB !== jB) throw new Error(`${BB} ended before its module did`)
      } catch (iB) {
        throw yB(iB), tB(iB), iB
      }
      LB.terminate();
      try {
        qB(JB, pB, [])
      } catch {}
      const MB = await rB;
      return void 0 !== IB && await (0, uB.A)(BB, new uB.n(aB), {
        sha256: IB.sha256,
        onMismatch: () => {}
      }), MB
    }

    function VB(BB) {
      try {
        (0, uB.X)(BB.cancel())
      } catch {}
    }
    const hB = ".zst.bin",
      XB = 1e3;
    let ZB = null;

    function AB(BB) {
      return ZB ??= function() {
        const BB = new Map,
          jB = "bloxd_wasm_webgpu:5136608,bloxd_wasm_webgl:5516677,bloxd_wasm_webgl1:4851495,bloxd_wasm_workers:201241,bloxd_wasm_models:311531,bloxd_wasm_client:3713604";
        for (const zB of jB?.split(",") ?? []) {
          const [jB = "", QB] = zB.split(":"), nB = Number(QB);
          Number.isInteger(nB) && nB > 0 && BB.set(jB, nB)
        }
        return BB
      }(), ZB.get(BB)
    }
    async function TB(BB, jB) {
      let zB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
      const QB = AB(BB.name);
      if (void 0 === QB) return PB(await WB(BB, jB, zB), "cold-wasm");
      const dB = FB ? new MB : null;
      let IB;
      try {
        if (UB = BB.url(), rB()?.includes(pB(UB)) && await async function(BB) {
            const jB = new AbortController;
            let zB;
            const QB = (0, nB.j)((BB => {
              zB = setTimeout((() => {
                jB.abort(), BB(null)
              }), XB)
            }));
            try {
              const zB = fetch(BB.href, {
                  cache: "only-if-cached",
                  mode: "same-origin",
                  signal: jB.signal
                }),
                dB = await (0, nB.q)([zB, QB]);
              return !!dB?.ok && ((0, uB.X)(dB.body.cancel()), !0)
            } catch {
              return !1
            } finally {
              clearTimeout(zB)
            }
          }(BB.url())) return dB?.stop(), await async function(BB, jB, zB, QB) {
          let nB = !1;
          const dB = zB && {
            sha256: zB.sha256,
            onMismatch: () => {
              nB = !0
            }
          };
          try {
            return PB(await WB(BB, dB, QB), "warm")
          } catch (IB) {
            const QB = await eB(BB, jB, zB, null);
            if (null === QB) throw nB && zB.onMismatch(), IB;
            return console.warn(`${BB.url().href} from the HTTP cache failed: ${(0,NB.f)(IB)}: loaded its copy instead`), PB(QB, nB ? "warm-refused" : "warm-broken")
          }
        }(BB, QB, jB, zB);
        IB = await eB(BB, QB, jB, dB)
      } finally {
        dB?.stop()
      }
      var UB;
      return null !== IB ? PB(IB, "cold-worker") : PB(await WB(BB, jB, zB), "cold-wasm")
    }

    function PB(BB, jB) {
      return {
        __proto__: null,
        module: BB,
        path: jB
      }
    }

    function WB(BB, jB, zB) {
      return void 0 === AB(BB.name) ? (0, uB.I)(BB.url(), jB, zB) : (0, uB.I)(BB.url(), jB, {
        ...zB,
        hideThen: !0,
        onDownloaded: () => {
          ! function(BB) {
            const jB = rB();
            if (null === jB) return;
            const zB = pB(BB),
              QB = jB.filter((BB => BB !== zB));
            QB.push(zB);
            try {
              localStorage.setItem(UB, JSON.stringify(QB.slice(-aB)))
            } catch (nB) {
              console.warn(`Bloxd wasm: ${zB} could not be recorded as downloaded: a later join asks the HTTP cache nothing for it`, nB)
            }
          }(BB.url()), zB.onDownloaded?.()
        }
      })
    }
    async function eB(BB, jB, zB, QB) {
      if (!FB || !SB()) return null;
      const nB = BB.url(),
        dB = `${nB.href}${hB}`;
      try {
        return await (0, uB.eb)(dB, ((BB, nB, IB) => YB(dB, jB, BB, nB, IB, zB, QB)))
      } catch (IB) {
        return console.warn(`${(0,NB.f)(IB)}: loading ${nB.href} instead`), null
      }
    }
    let lB = null,
      wB = !1;
    const xB = new Map,
      KB = new Map;

    function CB(BB, jB, zB) {
      return null === lB ? lB = bB(BB, jB, zB?.memoryMaximumBytes) : BB !== lB.build ? console.warn(`Bloxd wasm: ${BB.name} was asked for after ${lB.build.name} started loading, which this thread keeps`) : jB.name !== lB.workers.name && console.warn(`Bloxd wasm: ${jB.name} was asked for workers after ${lB.workers.name}, which this thread keeps`), zB?.reloadFailedDownload && !wB && (0, QB.R)() && (wB = !0, lB = bB(lB.build, lB.workers, lB.memoryMaximumBytes)), lB.loaded
    }

    function cB(BB, jB) {
      if (null !== lB) return (0, nB.f)([]);
      const zB = BB.filter((BB => !xB.has(BB.name))).map((BB => {
        const zB = new AbortController,
          QB = {
            compiled: WB(BB, (0, dB.b)(BB.name), {
              priority: jB,
              xz: zB.signal,
              onDownloaded: () => {
                QB.downloaded = !0
              },
              retries: {
                onRetry: () => {
                  QB.downloaded = !1, null !== lB && zB.abort()
                }
              }
            }),
            cancel: zB,
            downloaded: !1
          };
        return xB.set(BB.name, QB), (0, nB.j)((jB => {
          (0, nB.u)(QB.compiled, (() => {
            QB.downloaded = !0, jB()
          }), (QB => {
            zB.signal.aborted || console.warn(`Bloxd wasm: ${BB.name}'s compile ahead of the load failed: the load compiles it afresh`, QB), jB()
          }))
        }))
      }));
      return (0, nB.f)(zB)
    }

    function bB(BB, jB, zB) {
      const dB = (0, QB.G)((async () => {
        (0, IB.w)(), KB.clear();
        const zB = RB(BB),
          QB = jB.name === BB.name ? zB : RB(jB);
        for (const {
            cancel: BB
          }
          of xB.values()) BB.abort();
        xB.clear(), await (0, nB.f)([zB, QB]);
        const dB = await zB,
          NB = await QB;
        return (0, IB.w)(), {
          module: dB,
          workerModule: NB
        }
      }), BB, zB);
      return {
        build: BB,
        workers: jB,
        memoryMaximumBytes: zB,
        loaded: dB
      }
    }

    function vB(BB) {
      return KB.get(BB)
    }

    function RB(BB) {
      const jB = performance.now(),
        zB = xB.get(BB.name);
      xB.delete(BB.name);
      const QB = !0 === zB?.downloaded ? zB : void 0;
      return void 0 !== zB && void 0 === QB && zB.cancel.abort(), (0, nB.j)(((zB, dB) => {
        const IB = (QB, nB) => {
            KB.set(BB.name, {
              path: nB,
              ms: performance.now() - jB
            }), zB(QB)
          },
          NB = () => {
            (0, nB.u)(Bj(BB), (BB => {
              let {
                module: jB,
                path: zB
              } = BB;
              IB(jB, zB)
            }), dB)
          };
        void 0 === QB ? NB() : (0, nB.u)(QB.compiled, (BB => {
          IB(BB, "ahead")
        }), NB)
      }))
    }
    async function OB(BB, jB) {
      const {
        module: zB
      } = await Bj(BB, {
        retries: jB
      });
      return zB
    }
    async function Bj(BB) {
      let jB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
      return await TB(BB, (0, dB.b)(BB.name), jB)
    }
  },
  6578: (BB, jB, zB) => {
    zB.d(jB, {
      b: () => IB
    });
    var QB = zB(2974);
    const nB = {
      bloxd_wasm: () => "7b09e9f186f5fba9951cb6b712084b2a283fca06a42be21f6449860d6e7dc573",
      bloxd_wasm_client: () => "c15f866f14080480fea14857b9de7e539e335dce452b3ac1f19f0e3e937c9012",
      bloxd_wasm_workers: () => "00de63c66aff71381fa14ebd2820bcc01d1f74d973a6e00204eb827cb328e85b",
      bloxd_wasm_models: () => "32d703ec0b794e85682ae80d087c7f2eff99230a39b9a0cb5be5c019534d7923",
      bloxd_wasm_webgpu: () => "1d41e428ff1a8bf8ab5a5da0e8d9f622575ba5f347bc8d40eb30b5fceef8b724",
      bloxd_wasm_webgl: () => "312dff8c1bb47e85d35f931d8977e1ee5f52f92a42fa20f9d0123d9376d1a917",
      bloxd_wasm_webgl1: () => "4855e300e3e615d0266ab5ac62961960b1300dfb8770375a7b598d1264a1830f",
      bloxd_wasm_replay: () => "5423fc1dc63ea74c6d9a1fac1b68ef8b53800a6e323e74b70ac272cca42c91f0",
      bloxd_wasm_recorder: () => "70b2547fb7560662bf26d9ee964aae4306b95745e4a8f6ad1533e65a931bfcbd",
      bloxd_wasm_anim: () => "a442a15413a6d8e2fce5f258c2ba4985529d8bf26cece64b09dc4584f043ade6",
      bloxd_wasm_textures: () => "e405dd767a5408e017f07c07979684ef0a0b2226e22378a714bcaf40408edfe9",
      bloxd_wasm_shader_pack: () => "98655291aac1601e5d21cb4017dab03da1e258471aa722674ba91fc68305d170"
    };
    var dB = zB(4782);

    function IB(BB) {
      const jB = Object.prototype.hasOwnProperty.call(nB, BB) ? nB[BB]() : void 0;
      if (void 0 !== jB) return {
        sha256: jB,
        onMismatch: dB.t
      };
      throw new QB.h(`${BB} has no release digest, so this build refuses it`)
    }
  }
};
Object.freeze(modules);
for (const BB in modules) Object.freeze(modules[BB]);