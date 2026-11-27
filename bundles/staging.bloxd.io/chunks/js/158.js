export const id = 158;
export const ids = [158];
export const modules = {
  37529: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      e: () => Ir,
      g: () => Er,
      k: () => jr,
      l: () => xr
    });
    var Zr = Qr(37514),
      Wr = Qr(13);
    const ar = /wasm-function\[\d+\]|wasm:\/\/|\[wasm code\]/;

    function jr(rr) {
      if (rr instanceof WebAssembly.RuntimeError) return !0;
      const Sr = rr instanceof Error ? rr.stack : void 0;
      return "string" === typeof Sr && ar.test(Sr)
    }

    function Ir(rr, Sr, Qr) {
      var Wr;
      const jr = rr instanceof Error ? rr.name : "thrown",
        Ir = (rr instanceof Error && null !== (Wr = rr.stack) && void 0 !== Wr ? Wr : "").split("\n").filter((rr => ar.test(rr))).slice(0, 8).map((rr => rr.trim())),
        fr = null === Sr ? "wasm memory unknown" : `wasm memory ${Math.round(Sr/2**20)} MB`,
        Er = null === Qr.panic ? "" : `, panic: ${(0,Zr.i)(Qr.panic)}`,
        pr = `${jr}: ${rr instanceof Error?rr.message:String(rr)}`;
      return `${(0,Zr.l)(Qr.kind,Qr.refusedBytes)} ${pr} (${fr})${Er}${Ir.length>0?` | ${Ir.join(" < ")}`:""}`
    }
    const fr = /on a detached ArrayBuffer|access detached ArrayBuffer|has been detached from the view/;

    function Er(rr) {
      var Sr;
      let Qr = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ArrayBuffer.prototype;
      if (!(rr instanceof Error) || !fr.test(rr.message)) return {};
      if (!("detached" in Qr)) return {
        arrayBufferDetached: "absent"
      };
      return {
        arrayBufferDetached: (0, Wr.V)(null === (Sr = (0, Wr.O)(Qr, "detached")) || void 0 === Sr ? void 0 : Sr.get, /^function (get )?detached\(\) \{\s*\[native code\]\s*\}$/) ? "native" : "script"
      }
    }
    const pr = 500;

    function xr(rr) {
      let Sr = "[object Object]";
      try {
        Sr = String(rr)
      } catch {}
      if ("[object Object]" !== Sr) return Sr;
      try {
        var Qr, Zr;
        return null !== (Qr = null === (Zr = JSON.stringify(rr)) || void 0 === Zr ? void 0 : Zr.slice(0, pr)) && void 0 !== Qr ? Qr : Sr
      } catch {
        return Sr
      }
    }
  },
  37566: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      e: () => ur,
      i: () => ZS,
      j: () => Dr,
      l: () => SS,
      n: () => dr,
      q: () => sr
    });
    var Zr = Qr(2396),
      Wr = Qr(2410),
      ar = Qr(7577),
      jr = Qr(5498),
      Ir = Qr(2402),
      fr = Qr(2398);
    const Er = "bloxd-wasmDownloaded",
      pr = 12;

    function xr(rr) {
      return rr.pathname.slice(rr.pathname.lastIndexOf("/") + 1)
    }

    function mr() {
      try {
        if ("undefined" === typeof localStorage) return null;
        const rr = JSON.parse(localStorage.getItem(Er) ?? "[]");
        return Array.isArray(rr) ? rr.filter((rr => "string" === typeof rr)) : []
      } catch (rr) {
        return console.warn("Bloxd wasm: the record of downloaded modules could not be read: asking the HTTP cache for none", rr), null
      }
    }
    const Nr = Reflect.apply,
      Ur = "undefined" === typeof Worker ? void 0 : Worker,
      tr = Ur?.prototype.postMessage,
      hr = Ur?.prototype.terminate,
      zr = "undefined" === typeof EventTarget ? void 0 : EventTarget.prototype.addEventListener,
      Yr = "undefined" === typeof MessageEvent ? void 0 : Object.getOwnPropertyDescriptor(MessageEvent.prototype, "data")?.get,
      nr = Object.getOwnPropertyDescriptor(Object.getPrototypeOf(Uint8Array.prototype), "buffer").get,
      er = function() {
        try {
          return (0, jr.o)(Ur, "Worker", !0) && (0, jr.o)(tr, "postMessage") && (0, jr.o)(hr, "terminate") && (0, jr.o)(nr, "buffer") && void 0 !== zr && void 0 !== Yr
        } catch {
          return !1
        }
      }();
    let Kr = !1;

    function yr() {
      return er && !Kr
    }
    class Br {
      worker = null;
      failed = !1;
      constructor() {
        if (yr()) try {
          this.worker = vr(), Nr(zr, this.worker, ["error", () => {
            this.failed = !0
          }])
        } catch {
          this.stop()
        }
      }
      take() {
        const rr = this.worker;
        if (this.worker = null, null !== rr && this.failed) throw Nr(hr, rr, []), new Error("it did not run");
        return rr
      }
      stop() {
        const rr = this.worker;
        this.worker = null, null !== rr && Nr(hr, rr, [])
      }
    }
    class Tr {
      decoded;
      worker;
      reject;
      constructor(rr, Sr, Qr, Zr, ar) {
        try {
          this.worker = ar?.take() ?? vr()
        } catch (Er) {
          throw Kr = !0, new Error(`The zstd decoder's worker did not start: ${(0,Ir.e)(Er)}`)
        }
        const jr = this.worker;
        this.decoded = (0, Wr.g)(((Sr, Wr) => {
          this.reject = Wr;
          const ar = (rr, Sr) => {
            Nr(zr, jr, [rr, Sr])
          };
          ar("message", (rr => {
            Zr();
            try {
              const Zr = Nr(Yr, rr, []);
              if (!0 === Zr) Sr();
              else {
                if ("string" === typeof Zr) throw Zr.startsWith(Ir.c) && (Kr = !0), new Error(Zr);
                Qr(Zr, Nr(fr.x, Zr, []))
              }
            } catch (Er) {
              Wr(Er)
            }
          })), ar("error", (() => {
            Kr = !0, Wr(new Error("The zstd decoder's worker did not run"))
          })), ar("messageerror", (() => {
            Wr(new Error(`${rr}'s decoder sent a piece that could not be read`))
          }))
        })), (0, fr.V)(this.decoded), Nr(tr, jr, [
          [rr, Sr]
        ])
      }
      push(rr) {
        Nr(tr, this.worker, [rr, [Nr(nr, rr, [])]])
      }
      end() {
        Nr(tr, this.worker, [null])
      }
      markWorkerFailed() {
        Kr = !0
      }
      fail(rr) {
        this.reject(rr), this.terminate()
      }
      terminate() {
        Nr(hr, this.worker, [])
      }
    }

    function vr() {
      if (globalThis.Worker !== Ur) throw new Error("Worker is not the one the page loaded with");
      return new Worker(new URL(Qr.p + Qr.u(80), Qr.b), {
        name: "wasmZstdDecoder",
        type: "module"
      })
    }
    const Or = Reflect.apply,
      Lr = ArrayBuffer,
      lr = "undefined" === typeof Response ? void 0 : Response,
      Xr = "undefined" === typeof ReadableStream ? void 0 : ReadableStream,
      Pr = function() {
        let rr;
        void 0 !== Xr && new Xr({
          __proto__: null,
          start(Sr) {
            const {
              enqueue: Qr,
              close: Zr,
              error: Wr
            } = Object.getPrototypeOf(Sr);
            rr = {
              enqueue: Qr,
              close: Zr,
              error: Wr
            }
          }
        }, {
          __proto__: null
        });
        return rr
      }(),
      Hr = function() {
        try {
          return "undefined" !== typeof WebAssembly && "function" === typeof WebAssembly.compileStreaming && void 0 !== Pr && (0, jr.o)(lr, "Response", !0) && (0, jr.o)(Xr, "ReadableStream", !0) && (0, jr.o)(Pr.enqueue, "enqueue") && (0, jr.o)(Pr.close, "close") && (0, jr.o)(Pr.error, "error") && (0, jr.o)(fr.$, "body") && (0, jr.o)(fr.N, "getReader") && (0, jr.o)(fr.X, "read")
        } catch {
          return !1
        }
      }();
    async function qr(rr, Sr, Qr, Zr, ar, jr, Er) {
      const pr = new Lr(Sr),
        {
          controller: xr,
          compiled: mr
        } = function(rr) {
          try {
            let rr;
            const Sr = new Xr({
                __proto__: null,
                start(Sr) {
                  rr = Sr
                }
              }, {
                __proto__: null
              }),
              Qr = new lr(Sr, {
                __proto__: null,
                headers: {
                  __proto__: null,
                  "Content-Type": "application/wasm"
                }
              });
            return {
              controller: rr,
              compiled: (0, fr.V)((0, fr.B)((0, fr.fb)(Qr)))
            }
          } catch (Sr) {
            throw new Error(`${rr} could not be streamed into a compile: ${(0,Ir.e)(Sr)}`)
          }
        }(rr),
        {
          enqueue: Nr,
          close: Ur,
          error: tr
        } = Pr,
        hr = rr => {
          try {
            Or(tr, xr, [rr])
          } catch {}
        };
      let zr = 0;
      const Yr = (Qr, Zr) => {
        if (zr + Zr > Sr) throw new Error(`${rr} decoded past its module's ${Sr} bytes`);
        Or(fr.ab, new fr.m(pr), [new fr.m(Qr), zr]);
        try {
          Or(Nr, xr, [new fr.m(pr, zr, Zr)])
        } catch {}
        zr += Zr
      };
      let nr, er;
      try {
        nr = new Tr(rr, Sr, Yr, Zr, Er)
      } catch (vr) {
        throw hr(vr), vr
      }
      const Kr = rr => {
        nr.fail(rr), void 0 !== er && Rr(er)
      };
      let yr = !1;
      Qr.addEventListener("abort", (() => {
        yr && nr.markWorkerFailed(), Kr(new Error(`${rr} stalled`))
      }), {
        once: !0
      }), (0, Wr.p)(mr, (() => {}), Kr);
      try {
        let jr;
        try {
          jr = await fetch(rr, {
            signal: Qr
          })
        } catch (vr) {
          throw new Error(`Fetching ${rr} failed: ${(0,Ir.e)(vr)}`)
        }
        const {
          ok: Er,
          status: pr,
          body: xr
        } = function(rr, Sr) {
          try {
            const {
              ok: rr,
              status: Qr
            } = Sr;
            return {
              ok: rr,
              status: Qr,
              body: Or(fr.$, Sr, [])
            }
          } catch {
            throw new Error(`${rr} came in a response a page script made`)
          }
        }(rr, jr);
        if (!Er) throw new Error(`Fetching ${rr} failed: HTTP ${pr}`);
        Zr();
        const mr = Or(fr.N, xr, []);
        er = mr;
        const Nr = () => {
          Rr(mr)
        };
        for ((0, Wr.p)(nr.decoded, Nr, Nr);;) {
          let Sr;
          try {
            Sr = await Or(fr.X, mr, [])
          } catch (vr) {
            throw new Error(`Downloading ${rr} failed: ${(0,Ir.e)(vr)}`)
          }
          if (Sr.done) break;
          Zr(), nr.push(Sr.value)
        }
        if (yr = !0, nr.end(), await nr.decoded, ar(), zr !== Sr) throw new Error(`${rr} ended before its module did`)
      } catch (vr) {
        throw hr(vr), Kr(vr), vr
      }
      nr.terminate();
      try {
        Or(Ur, xr, [])
      } catch {}
      const Br = await mr;
      return void 0 !== jr && await (0, fr.z)(rr, new fr.m(pr), {
        sha256: jr.sha256,
        onMismatch: () => {}
      }), Br
    }

    function Rr(rr) {
      try {
        (0, fr.V)(rr.cancel())
      } catch {}
    }
    const gr = ".zst.bin",
      Cr = 1e3;
    let Mr = null;

    function Gr(rr) {
      return Mr ??= function() {
        const rr = new Map,
          Sr = "bloxd_wasm_webgpu:5238928,bloxd_wasm_webgl:5662882,bloxd_wasm_webgl1:4934167,bloxd_wasm_workers:203635,bloxd_wasm_models:478484,bloxd_wasm_client:3741670";
        for (const Qr of Sr?.split(",") ?? []) {
          const [Sr = "", Zr] = Qr.split(":"), Wr = Number(Zr);
          Number.isInteger(Wr) && Wr > 0 && rr.set(Sr, Wr)
        }
        return rr
      }(), Mr.get(rr)
    }
    async function kr(rr, Sr) {
      let Qr = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
      const Zr = Gr(rr.name);
      if (void 0 === Zr) return Ar(await Vr(rr, Sr, Qr), "cold-wasm");
      const ar = Hr ? new Br : null;
      let jr;
      try {
        if (Er = rr.url(), mr()?.includes(xr(Er)) && await async function(rr) {
            const Sr = new AbortController;
            let Qr;
            const Zr = (0, Wr.g)((rr => {
              Qr = setTimeout((() => {
                Sr.abort(), rr(null)
              }), Cr)
            }));
            try {
              const Qr = fetch(rr.href, {
                  cache: "only-if-cached",
                  mode: "same-origin",
                  signal: Sr.signal
                }),
                ar = await (0, Wr.m)([Qr, Zr]);
              return !!ar?.ok && ((0, fr.V)(ar.body.cancel()), !0)
            } catch {
              return !1
            } finally {
              clearTimeout(Qr)
            }
          }(rr.url())) return ar?.stop(), await async function(rr, Sr, Qr, Zr) {
          let Wr = !1;
          const ar = Qr && {
            sha256: Qr.sha256,
            onMismatch: () => {
              Wr = !0
            }
          };
          try {
            return Ar(await Vr(rr, ar, Zr), "warm")
          } catch (jr) {
            const Zr = await ir(rr, Sr, Qr, null);
            if (null === Zr) throw Wr && Qr.onMismatch(), jr;
            return console.warn(`${rr.url().href} from the HTTP cache failed: ${(0,Ir.e)(jr)}: loaded its copy instead`), Ar(Zr, Wr ? "warm-refused" : "warm-broken")
          }
        }(rr, Zr, Sr, Qr);
        jr = await ir(rr, Zr, Sr, ar)
      } finally {
        ar?.stop()
      }
      var Er;
      return null !== jr ? Ar(jr, "cold-worker") : Ar(await Vr(rr, Sr, Qr), "cold-wasm")
    }

    function Ar(rr, Sr) {
      return {
        __proto__: null,
        module: rr,
        path: Sr
      }
    }

    function Vr(rr, Sr, Qr) {
      return void 0 === Gr(rr.name) ? (0, fr.I)(rr.url(), Sr, Qr) : (0, fr.I)(rr.url(), Sr, {
        ...Qr,
        hideThen: !0,
        onDownloaded: () => {
          ! function(rr) {
            const Sr = mr();
            if (null === Sr) return;
            const Qr = xr(rr),
              Zr = Sr.filter((rr => rr !== Qr));
            Zr.push(Qr);
            try {
              localStorage.setItem(Er, JSON.stringify(Zr.slice(-pr)))
            } catch (Wr) {
              console.warn(`Bloxd wasm: ${Qr} could not be recorded as downloaded: a later join asks the HTTP cache nothing for it`, Wr)
            }
          }(rr.url()), Qr.onDownloaded?.()
        }
      })
    }
    async function ir(rr, Sr, Qr, Zr) {
      if (!Hr || !yr()) return null;
      const Wr = rr.url(),
        ar = `${Wr.href}${gr}`;
      try {
        return await (0, fr.cb)(ar, ((rr, Wr, jr) => qr(ar, Sr, rr, Wr, jr, Qr, Zr)))
      } catch (jr) {
        return console.warn(`${(0,Ir.e)(jr)}: loading ${Wr.href} instead`), null
      }
    }
    let wr = null,
      cr = !1;
    const Fr = new Map,
      or = new Map;
    let br = null;

    function Jr(rr) {
      const Sr = Sr => rr.filter((rr => Fr.get(rr)?.state === Sr)).length,
        Qr = Sr("compiled");
      return Qr > 0 && Qr === rr.length ? "compiled" : Qr + Sr("compiling") > 0 ? "compiling" : "none"
    }

    function Dr() {
      return br ?? Jr([...Fr.keys()])
    }

    function dr(rr, Sr, Qr) {
      return null === wr ? wr = rS(rr, Sr, Qr?.memoryMaximumBytes) : rr !== wr.build ? console.warn(`Bloxd wasm: ${rr.name} was asked for after ${wr.build.name} started loading, which this thread keeps`) : Sr.name !== wr.workers.name && console.warn(`Bloxd wasm: ${Sr.name} was asked for workers after ${wr.workers.name}, which this thread keeps`), Qr?.reloadFailedDownload && !cr && (0, Zr.fb)() && (cr = !0, wr = rS(wr.build, wr.workers, wr.memoryMaximumBytes)), wr.loaded
    }

    function sr(rr) {
      return null === wr ? (0, Wr.g)((rr => {
        rr(!1)
      })) : ((0, Zr.bb)() && (wr = rS(wr.build, wr.workers, rr ?? wr.memoryMaximumBytes)), wr.loaded)
    }

    function ur(rr, Sr) {
      if (null !== wr) return (0, Wr.e)([]);
      const Qr = rr.filter((rr => !Fr.has(rr.name))).map((rr => {
        const Qr = new AbortController,
          Zr = {
            compiled: Vr(rr, (0, ar.c)(rr.name), {
              priority: Sr,
              Rr: Qr.signal,
              onDownloaded: () => {
                Zr.downloaded = !0
              },
              retries: {
                onRetry: () => {
                  Zr.downloaded = !1, null !== wr && Qr.abort()
                }
              }
            }),
            cancel: Qr,
            downloaded: !1,
            state: "compiling"
          };
        return Fr.set(rr.name, Zr), (0, Wr.g)((Sr => {
          (0, Wr.p)(Zr.compiled, (() => {
            Zr.downloaded = !0, Zr.state = "compiled", Sr()
          }), (Wr => {
            Zr.state = "failed", Qr.signal.aborted || console.warn(`Bloxd wasm: ${rr.name}'s compile ahead of the load failed: the load compiles it afresh`, Wr), Sr()
          }))
        }))
      }));
      return (0, Wr.e)(Qr)
    }

    function rS(rr, Sr, Qr) {
      br ??= Jr(Sr.name === rr.name ? [rr.name] : [rr.name, Sr.name]);
      const ar = (0, Zr.F)((async () => {
        (0, jr.H)(), or.clear();
        const Qr = QS(rr),
          Zr = Sr.name === rr.name ? Qr : QS(Sr);
        for (const {
            cancel: rr
          }
          of Fr.values()) rr.abort();
        Fr.clear(), await (0, Wr.e)([Qr, Zr]);
        const ar = await Qr,
          Ir = await Zr;
        return (0, jr.H)(), {
          module: ar,
          workerModule: Ir
        }
      }), rr, Qr);
      return {
        build: rr,
        workers: Sr,
        memoryMaximumBytes: Qr,
        loaded: ar
      }
    }

    function SS(rr) {
      return or.get(rr)
    }

    function QS(rr) {
      const Sr = performance.now(),
        Qr = Fr.get(rr.name);
      Fr.delete(rr.name);
      const Zr = !0 === Qr?.downloaded ? Qr : void 0;
      return void 0 !== Qr && void 0 === Zr && Qr.cancel.abort(), (0, Wr.g)(((Qr, ar) => {
        const jr = (Zr, Wr) => {
            or.set(rr.name, {
              path: Wr,
              ms: performance.now() - Sr
            }), Qr(Zr)
          },
          Ir = () => {
            (0, Wr.p)(WS(rr), (rr => {
              let {
                module: Sr,
                path: Qr
              } = rr;
              jr(Sr, Qr)
            }), ar)
          };
        void 0 === Zr ? Ir() : (0, Wr.p)(Zr.compiled, (rr => {
          jr(rr, "ahead")
        }), Ir)
      }))
    }
    async function ZS(rr, Sr) {
      const {
        module: Qr
      } = await WS(rr, {
        retries: Sr
      });
      return Qr
    }
    async function WS(rr) {
      let Sr = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
      return await kr(rr, (0, ar.c)(rr.name), Sr)
    }
  },
  7577: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      c: () => jr
    });
    var Zr = Qr(2398);
    const Wr = {
      bloxd_wasm: () => "0c8b86ea7f87e28f201c328dade5c6244d58a98edf5279fe5c0ea9b57062f385",
      bloxd_wasm_client: () => "299c35eb71d5d037788ea25f6b7287e40485e2a6ed22851efd5823593ae5be1b",
      bloxd_wasm_workers: () => "eaeeb1e1d8f554dcf56047201f83b3954f1d231f54df5846dca6de7c92e59bde",
      bloxd_wasm_models: () => "dc6d52b18d6afa3461a33750f7f1f0c757dbae6ea30bca3991affab56fad42de",
      bloxd_wasm_webgpu: () => "4397e4e2e7e494aef2a757d6873b432cca5ceac83c5a3e54dd330b4ece9ba81a",
      bloxd_wasm_webgl: () => "e3e0bf0da073da5cd2c55227a812527d1d5b4fd38f91e8c71b70364278ad47cf",
      bloxd_wasm_webgl1: () => "6b69ab072c5f9793e3fee3b1fa30c246fb689a2400aefd7f486fe41358e364e5",
      bloxd_wasm_replay: () => "f884251e5cfbdf122fa0e4c2746c9cc8bb3465ab2dcf3e9877f29ba5868851b0",
      bloxd_wasm_recorder: () => "92aabaf952eabf5eb693775f1095c77a6582e07a32896291ede0cd044a026b22",
      bloxd_wasm_anim: () => "74e18404f7ee650a703373595c2a2a131482e1a0dcb950788bac36e01714fec0",
      bloxd_wasm_textures: () => "4752f813d0338c3727c1127168df7e6c13b50988f32409a906ecc533947797ed",
      bloxd_wasm_shader_pack: () => "bc15fb00e7a581fb79301bdbfc659bdbc7ccbe7b0e189b588edf35cbec796fbe"
    };
    var ar = Qr(5498);

    function jr(rr) {
      const Sr = Object.prototype.hasOwnProperty.call(Wr, rr) ? Wr[rr]() : void 0;
      if (void 0 !== Sr) return {
        sha256: Sr,
        onMismatch: ar.F
      };
      throw new Zr.g(`${rr} has no release digest, so this build refuses it`)
    }
  },
  37514: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      d: () => Zr,
      e: () => ar,
      i: () => fr,
      j: () => jr,
      l: () => Wr
    });
    const Zr = /^alloc_failed (\d+) bytes$/;

    function Wr(rr, Sr) {
      return ar(rr, Sr) ? `trap=alloc_failed ${Sr} bytes` : `trap=${rr}`
    }

    function ar(rr, Sr) {
      return "unreachable" === rr && Sr > 0
    }

    function jr(rr, Sr, Qr) {
      const Zr = function(rr) {
        return rr instanceof WebAssembly.RuntimeError ? /unreachable/i.test(rr.message) ? "unreachable" : /out of bounds/i.test(rr.message) ? "out_of_bounds" : "runtime_error" : (rr instanceof RangeError || rr instanceof Error && "InternalError" === rr.name) && /call stack|recursion/i.test(rr.message) ? "stack_overflow" : "js_error"
      }(rr);
      if ("unreachable" !== Zr) return {
        kind: Zr,
        panic: null,
        refusedBytes: 0
      };
      const Wr = Sr(),
        ar = Qr();
      return {
        kind: Zr,
        panic: ar > 0 ? null : Wr,
        refusedBytes: ar
      }
    }
    const Ir = 300;

    function fr(rr) {
      return rr.replace(/\s*\n\s*/g, " / ").slice(0, Ir)
    }
  }
};
Object.freeze(modules);
for (const rr in modules) Object.freeze(modules[rr]);