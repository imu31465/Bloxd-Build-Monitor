export const id = 132;
export const ids = [132];
export const modules = {
  35852: (vv, zv, Pv) => {
    Pv.d(zv, {
      d: () => pv,
      g: () => Nv,
      h: () => gv,
      j: () => Tv
    });
    var hv = Pv(35847),
      Sv = Pv(11);
    const ev = /wasm-function\[\d+\]|wasm:\/\/|\[wasm code\]/;

    function gv(vv) {
      if (vv instanceof WebAssembly.RuntimeError) return !0;
      const zv = vv instanceof Error ? vv.stack : void 0;
      return "string" === typeof zv && ev.test(zv)
    }

    function pv(vv, zv, Pv) {
      var Sv;
      const gv = vv instanceof Error ? vv.name : "thrown",
        pv = (vv instanceof Error && null !== (Sv = vv.stack) && void 0 !== Sv ? Sv : "").split("\n").filter((vv => ev.test(vv))).slice(0, 8).map((vv => vv.trim())),
        dv = null === zv ? "wasm memory unknown" : `wasm memory ${Math.round(zv/2**20)} MB`,
        Nv = null === Pv.panic ? "" : `, panic: ${(0,hv.f)(Pv.panic)}`,
        lv = `${gv}: ${vv instanceof Error?vv.message:String(vv)}`;
      return `${(0,hv.i)(Pv.kind,Pv.refusedBytes)} ${lv} (${dv})${Nv}${pv.length>0?` | ${pv.join(" < ")}`:""}`
    }
    const dv = /on a detached ArrayBuffer|access detached ArrayBuffer|has been detached from the view/;

    function Nv(vv) {
      var zv;
      let Pv = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ArrayBuffer.prototype;
      if (!(vv instanceof Error) || !dv.test(vv.message)) return {};
      if (!("detached" in Pv)) return {
        arrayBufferDetached: "absent"
      };
      return {
        arrayBufferDetached: (0, Sv.U)(null === (zv = (0, Sv.Q)(Pv, "detached")) || void 0 === zv ? void 0 : zv.get, /^function (get )?detached\(\) \{\s*\[native code\]\s*\}$/) ? "native" : "script"
      }
    }
    const lv = 500;

    function Tv(vv) {
      let zv = "[object Object]";
      try {
        zv = String(vv)
      } catch {}
      if ("[object Object]" !== zv) return zv;
      try {
        var Pv, hv;
        return null !== (Pv = null === (hv = JSON.stringify(vv)) || void 0 === hv ? void 0 : hv.slice(0, lv)) && void 0 !== Pv ? Pv : zv
      } catch {
        return zv
      }
    }
  },
  35885: (vv, zv, Pv) => {
    Pv.d(zv, {
      d: () => bv,
      f: () => uv,
      g: () => kv,
      j: () => ov
    });
    var hv = Pv(3466),
      Sv = Pv(3488),
      ev = Pv(6343),
      gv = Pv(4451),
      pv = Pv(3479),
      dv = Pv(3473);
    const Nv = "bloxd-wasmDownloaded",
      lv = 12;

    function Tv(vv) {
      return vv.pathname.slice(vv.pathname.lastIndexOf("/") + 1)
    }

    function Wv() {
      try {
        if ("undefined" === typeof localStorage) return null;
        const vv = JSON.parse(localStorage.getItem(Nv) ?? "[]");
        return Array.isArray(vv) ? vv.filter((vv => "string" === typeof vv)) : []
      } catch (vv) {
        return console.warn("Bloxd wasm: the record of downloaded modules could not be read: asking the HTTP cache for none", vv), null
      }
    }
    const wv = Reflect.apply,
      av = "undefined" === typeof Worker ? void 0 : Worker,
      sv = av?.prototype.postMessage,
      Cv = av?.prototype.terminate,
      iv = "undefined" === typeof EventTarget ? void 0 : EventTarget.prototype.addEventListener,
      cv = "undefined" === typeof MessageEvent ? void 0 : Object.getOwnPropertyDescriptor(MessageEvent.prototype, "data")?.get,
      Gv = Object.getOwnPropertyDescriptor(Object.getPrototypeOf(Uint8Array.prototype), "buffer").get,
      mv = function() {
        try {
          return (0, gv.m)(av, "Worker", !0) && (0, gv.m)(sv, "postMessage") && (0, gv.m)(Cv, "terminate") && (0, gv.m)(Gv, "buffer") && void 0 !== iv && void 0 !== cv
        } catch {
          return !1
        }
      }();
    let jv = !1;

    function fv() {
      return mv && !jv
    }
    class Fv {
      worker = null;
      failed = !1;
      constructor() {
        if (fv()) try {
          this.worker = nv(), wv(iv, this.worker, ["error", () => {
            this.failed = !0
          }])
        } catch {
          this.stop()
        }
      }
      take() {
        const vv = this.worker;
        if (this.worker = null, null !== vv && this.failed) throw wv(Cv, vv, []), new Error("it did not run");
        return vv
      }
      stop() {
        const vv = this.worker;
        this.worker = null, null !== vv && wv(Cv, vv, [])
      }
    }
    class Yv {
      decoded;
      worker;
      reject;
      constructor(vv, zv, Pv, hv, ev) {
        try {
          this.worker = ev?.take() ?? nv()
        } catch (Nv) {
          throw jv = !0, new Error(`The zstd decoder's worker did not start: ${(0,pv.h)(Nv)}`)
        }
        const gv = this.worker;
        this.decoded = (0, Sv.g)(((zv, Sv) => {
          this.reject = Sv;
          const ev = (vv, zv) => {
            wv(iv, gv, [vv, zv])
          };
          ev("message", (vv => {
            hv();
            try {
              const hv = wv(cv, vv, []);
              if (!0 === hv) zv();
              else {
                if ("string" === typeof hv) throw hv.startsWith(pv.d) && (jv = !0), new Error(hv);
                Pv(hv, wv(dv.w, hv, []))
              }
            } catch (Nv) {
              Sv(Nv)
            }
          })), ev("error", (() => {
            jv = !0, Sv(new Error("The zstd decoder's worker did not run"))
          })), ev("messageerror", (() => {
            Sv(new Error(`${vv}'s decoder sent a piece that could not be read`))
          }))
        })), (0, dv.W)(this.decoded), wv(sv, gv, [
          [vv, zv]
        ])
      }
      push(vv) {
        wv(sv, this.worker, [vv, [wv(Gv, vv, [])]])
      }
      end() {
        wv(sv, this.worker, [null])
      }
      markWorkerFailed() {
        jv = !0
      }
      fail(vv) {
        this.reject(vv), this.terminate()
      }
      terminate() {
        wv(Cv, this.worker, [])
      }
    }

    function nv() {
      if (globalThis.Worker !== av) throw new Error("Worker is not the one the page loaded with");
      return new Worker(new URL(Pv.p + Pv.u(65), Pv.b), {
        name: "wasmZstdDecoder",
        type: "module"
      })
    }
    const Ov = Reflect.apply,
      Dv = ArrayBuffer,
      Kv = "undefined" === typeof Response ? void 0 : Response,
      Vv = "undefined" === typeof ReadableStream ? void 0 : ReadableStream,
      Uv = function() {
        let vv;
        void 0 !== Vv && new Vv({
          __proto__: null,
          start(zv) {
            const {
              enqueue: Pv,
              close: hv,
              error: Sv
            } = Object.getPrototypeOf(zv);
            vv = {
              enqueue: Pv,
              close: hv,
              error: Sv
            }
          }
        }, {
          __proto__: null
        });
        return vv
      }(),
      Rv = function() {
        try {
          return "undefined" !== typeof WebAssembly && "function" === typeof WebAssembly.compileStreaming && void 0 !== Uv && (0, gv.m)(Kv, "Response", !0) && (0, gv.m)(Vv, "ReadableStream", !0) && (0, gv.m)(Uv.enqueue, "enqueue") && (0, gv.m)(Uv.close, "close") && (0, gv.m)(Uv.error, "error") && (0, gv.m)(dv.Z, "body") && (0, gv.m)(dv.N, "getReader") && (0, gv.m)(dv.Y, "read")
        } catch {
          return !1
        }
      }();
    async function xv(vv, zv, Pv, hv, ev, gv, Nv) {
      const lv = new Dv(zv),
        {
          controller: Tv,
          compiled: Wv
        } = function(vv) {
          try {
            let vv;
            const zv = new Vv({
                __proto__: null,
                start(zv) {
                  vv = zv
                }
              }, {
                __proto__: null
              }),
              Pv = new Kv(zv, {
                __proto__: null,
                headers: {
                  __proto__: null,
                  "Content-Type": "application/wasm"
                }
              });
            return {
              controller: vv,
              compiled: (0, dv.W)((0, dv.A)((0, dv.fb)(Pv)))
            }
          } catch (zv) {
            throw new Error(`${vv} could not be streamed into a compile: ${(0,pv.h)(zv)}`)
          }
        }(vv),
        {
          enqueue: wv,
          close: av,
          error: sv
        } = Uv,
        Cv = vv => {
          try {
            Ov(sv, Tv, [vv])
          } catch {}
        };
      let iv = 0;
      const cv = (Pv, hv) => {
        if (iv + hv > zv) throw new Error(`${vv} decoded past its module's ${zv} bytes`);
        Ov(dv.ab, new dv.k(lv), [new dv.k(Pv), iv]);
        try {
          Ov(wv, Tv, [new dv.k(lv, iv, hv)])
        } catch {}
        iv += hv
      };
      let Gv, mv;
      try {
        Gv = new Yv(vv, zv, cv, hv, Nv)
      } catch (nv) {
        throw Cv(nv), nv
      }
      const jv = vv => {
        Gv.fail(vv), void 0 !== mv && tv(mv)
      };
      let fv = !1;
      Pv.addEventListener("abort", (() => {
        fv && Gv.markWorkerFailed(), jv(new Error(`${vv} stalled`))
      }), {
        once: !0
      }), (0, Sv.s)(Wv, (() => {}), jv);
      try {
        let gv;
        try {
          gv = await fetch(vv, {
            signal: Pv
          })
        } catch (nv) {
          throw new Error(`Fetching ${vv} failed: ${(0,pv.h)(nv)}`)
        }
        const {
          ok: Nv,
          status: lv,
          body: Tv
        } = function(vv, zv) {
          try {
            const {
              ok: vv,
              status: Pv
            } = zv;
            return {
              ok: vv,
              status: Pv,
              body: Ov(dv.Z, zv, [])
            }
          } catch {
            throw new Error(`${vv} came in a response a page script made`)
          }
        }(vv, gv);
        if (!Nv) throw new Error(`Fetching ${vv} failed: HTTP ${lv}`);
        hv();
        const Wv = Ov(dv.N, Tv, []);
        mv = Wv;
        const wv = () => {
          tv(Wv)
        };
        for ((0, Sv.s)(Gv.decoded, wv, wv);;) {
          let zv;
          try {
            zv = await Ov(dv.Y, Wv, [])
          } catch (nv) {
            throw new Error(`Downloading ${vv} failed: ${(0,pv.h)(nv)}`)
          }
          if (zv.done) break;
          hv(), Gv.push(zv.value)
        }
        if (fv = !0, Gv.end(), await Gv.decoded, ev(), iv !== zv) throw new Error(`${vv} ended before its module did`)
      } catch (nv) {
        throw Cv(nv), jv(nv), nv
      }
      Gv.terminate();
      try {
        Ov(av, Tv, [])
      } catch {}
      const Fv = await Wv;
      return void 0 !== gv && await (0, dv.x)(vv, new dv.k(lv), {
        sha256: gv.sha256,
        onMismatch: () => {}
      }), Fv
    }

    function tv(vv) {
      try {
        (0, dv.W)(vv.cancel())
      } catch {}
    }
    const qv = ".zst.bin",
      Iv = 1e3;
    let Qv = null;

    function Zv(vv) {
      return Qv ??= function() {
        const vv = new Map,
          zv = "bloxd_wasm_webgpu:5000423,bloxd_wasm_webgl:5362647,bloxd_wasm_webgl1:4761354,bloxd_wasm_workers:196044,bloxd_wasm_models:311680,bloxd_wasm_client:3667451";
        for (const Pv of zv?.split(",") ?? []) {
          const [zv = "", hv] = Pv.split(":"), Sv = Number(hv);
          Number.isInteger(Sv) && Sv > 0 && vv.set(zv, Sv)
        }
        return vv
      }(), Qv.get(vv)
    }
    async function Av(vv, zv) {
      let Pv = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
      const hv = Zv(vv.name);
      if (void 0 === hv) return Lv(await Hv(vv, zv, Pv), "cold-wasm");
      const ev = Rv ? new Fv : null;
      let gv;
      try {
        if (Nv = vv.url(), Wv()?.includes(Tv(Nv)) && await async function(vv) {
            const zv = new AbortController;
            let Pv;
            const hv = (0, Sv.g)((vv => {
              Pv = setTimeout((() => {
                zv.abort(), vv(null)
              }), Iv)
            }));
            try {
              const Pv = fetch(vv.href, {
                  cache: "only-if-cached",
                  mode: "same-origin",
                  signal: zv.signal
                }),
                ev = await (0, Sv.o)([Pv, hv]);
              return !!ev?.ok && ((0, dv.W)(ev.body.cancel()), !0)
            } catch {
              return !1
            } finally {
              clearTimeout(Pv)
            }
          }(vv.url())) return ev?.stop(), await async function(vv, zv, Pv, hv) {
          let Sv = !1;
          const ev = Pv && {
            sha256: Pv.sha256,
            onMismatch: () => {
              Sv = !0
            }
          };
          try {
            return Lv(await Hv(vv, ev, hv), "warm")
          } catch (gv) {
            const hv = await Mv(vv, zv, Pv, null);
            if (null === hv) throw Sv && Pv.onMismatch(), gv;
            return console.warn(`${vv.url().href} from the HTTP cache failed: ${(0,pv.h)(gv)}: loaded its copy instead`), Lv(hv, Sv ? "warm-refused" : "warm-broken")
          }
        }(vv, hv, zv, Pv);
        gv = await Mv(vv, hv, zv, ev)
      } finally {
        ev?.stop()
      }
      var Nv;
      return null !== gv ? Lv(gv, "cold-worker") : Lv(await Hv(vv, zv, Pv), "cold-wasm")
    }

    function Lv(vv, zv) {
      return {
        __proto__: null,
        module: vv,
        path: zv
      }
    }

    function Hv(vv, zv, Pv) {
      return void 0 === Zv(vv.name) ? (0, dv.F)(vv.url(), zv, Pv) : (0, dv.F)(vv.url(), zv, {
        ...Pv,
        hideThen: !0,
        onDownloaded: () => {
          ! function(vv) {
            const zv = Wv();
            if (null === zv) return;
            const Pv = Tv(vv),
              hv = zv.filter((vv => vv !== Pv));
            hv.push(Pv);
            try {
              localStorage.setItem(Nv, JSON.stringify(hv.slice(-lv)))
            } catch (Sv) {
              console.warn(`Bloxd wasm: ${Pv} could not be recorded as downloaded: a later join asks the HTTP cache nothing for it`, Sv)
            }
          }(vv.url()), Pv.onDownloaded?.()
        }
      })
    }
    async function Mv(vv, zv, Pv, hv) {
      if (!Rv || !fv()) return null;
      const Sv = vv.url(),
        ev = `${Sv.href}${qv}`;
      try {
        return await (0, dv.bb)(ev, ((vv, Sv, gv) => xv(ev, zv, vv, Sv, gv, Pv, hv)))
      } catch (gv) {
        return console.warn(`${(0,pv.h)(gv)}: loading ${Sv.href} instead`), null
      }
    }
    let yv = null,
      Bv = !1;
    const Jv = new Map,
      Ev = new Map;

    function ov(vv, zv, Pv) {
      return null === yv ? yv = rv(vv, zv) : vv !== yv.build ? console.warn(`Bloxd wasm: ${vv.name} was asked for after ${yv.build.name} started loading, which this thread keeps`) : zv.name !== yv.workers.name && console.warn(`Bloxd wasm: ${zv.name} was asked for workers after ${yv.workers.name}, which this thread keeps`), Pv?.reloadFailedDownload && !Bv && (0, hv.U)() && (Bv = !0, yv = rv(yv.build, yv.workers)), yv.loaded
    }

    function bv(vv, zv) {
      if (null !== yv) return (0, Sv.f)([]);
      const Pv = vv.filter((vv => !Jv.has(vv.name))).map((vv => {
        const Pv = new AbortController,
          hv = {
            compiled: Hv(vv, (0, ev.c)(vv.name), {
              priority: zv,
              ev: Pv.signal,
              onDownloaded: () => {
                hv.downloaded = !0
              },
              retries: {
                onRetry: () => {
                  hv.downloaded = !1, null !== yv && Pv.abort()
                }
              }
            }),
            cancel: Pv,
            downloaded: !1
          };
        return Jv.set(vv.name, hv), (0, Sv.g)((zv => {
          (0, Sv.s)(hv.compiled, (() => {
            hv.downloaded = !0, zv()
          }), (hv => {
            Pv.signal.aborted || console.warn(`Bloxd wasm: ${vv.name}'s compile ahead of the load failed: the load compiles it afresh`, hv), zv()
          }))
        }))
      }));
      return (0, Sv.f)(Pv)
    }

    function rv(vv, zv) {
      const Pv = (0, hv.F)((async () => {
        (0, gv.A)(), Ev.clear();
        const Pv = Xv(vv),
          hv = zv.name === vv.name ? Pv : Xv(zv);
        for (const {
            cancel: vv
          }
          of Jv.values()) vv.abort();
        Jv.clear(), await (0, Sv.f)([Pv, hv]);
        const ev = await Pv,
          pv = await hv;
        return (0, gv.A)(), {
          module: ev,
          workerModule: pv
        }
      }), vv);
      return {
        build: vv,
        workers: zv,
        loaded: Pv
      }
    }

    function kv(vv) {
      return Ev.get(vv)
    }

    function Xv(vv) {
      const zv = performance.now(),
        Pv = Jv.get(vv.name);
      Jv.delete(vv.name);
      const hv = !0 === Pv?.downloaded ? Pv : void 0;
      return void 0 !== Pv && void 0 === hv && Pv.cancel.abort(), (0, Sv.g)(((Pv, ev) => {
        const gv = (hv, Sv) => {
            Ev.set(vv.name, {
              path: Sv,
              ms: performance.now() - zv
            }), Pv(hv)
          },
          pv = () => {
            (0, Sv.s)(vz(vv), (vv => {
              let {
                module: zv,
                path: Pv
              } = vv;
              gv(zv, Pv)
            }), ev)
          };
        void 0 === hv ? pv() : (0, Sv.s)(hv.compiled, (vv => {
          gv(vv, "ahead")
        }), pv)
      }))
    }
    async function uv(vv, zv) {
      const {
        module: Pv
      } = await vz(vv, {
        retries: zv
      });
      return Pv
    }
    async function vz(vv) {
      let zv = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
      return await Av(vv, (0, ev.c)(vv.name), zv)
    }
  },
  6343: (vv, zv, Pv) => {
    Pv.d(zv, {
      c: () => gv
    });
    var hv = Pv(3473);
    const Sv = {
      bloxd_wasm: () => "242cfb746367816b85c0d450194bdff4c53a9ad8bf401630f6949cb63852d1be",
      bloxd_wasm_client: () => "d02ab3ff378e3cabdd07cd9c554ec471bb49ecb41d1bcfc8f9f48d000f552813",
      bloxd_wasm_workers: () => "8664088122d5b673ff7a8e8f0b71864091addbd11a22fd8877301ef2e1d7d7c6",
      bloxd_wasm_models: () => "0ce508e0c3797e4d2237f5b419263b9df4627372af441dcaec1b4b4938917dcb",
      bloxd_wasm_webgpu: () => "d02362ea4b01ac0b3094c90bd530e9d9541fd4d02dbb0cf37e62ce03b504586a",
      bloxd_wasm_webgl: () => "5587f4c12aefda662a798fa76f5ef5f0d26531308da330b663163a4a6a353686",
      bloxd_wasm_webgl1: () => "330ca93132b966b9f2d177baefcf1ec86106db4d42b6875043c867a4fbf8f714",
      bloxd_wasm_replay: () => "970290489bfdef049310fc4e3d6c024c9afee7381deeccf9925d9d2bf1ad0949",
      bloxd_wasm_recorder: () => "2118a197767ebdac164a9fab410a0150f76cd900eb0e711f4a60fc6e38ae5205",
      bloxd_wasm_anim: () => "fb2fc3b43abfd08ad961098c6784b1c03d7af35338bbd752b5df3af261972615",
      bloxd_wasm_textures: () => "ac6c8ff1da71e10b1ed9866e9a4eb70d166a36bb2f0e1c05cef1de7d9d6b6043",
      bloxd_wasm_shader_pack: () => "d571fee4d34b97756c8d2b36706fa9baf34990285d56aea5ea806d4682070476"
    };
    var ev = Pv(4451);

    function gv(vv) {
      const zv = Object.prototype.hasOwnProperty.call(Sv, vv) ? Sv[vv]() : void 0;
      if (void 0 !== zv) return {
        sha256: zv,
        onMismatch: ev.y
      };
      throw new hv.h(`${vv} has no release digest, so this build refuses it`)
    }
  },
  35847: (vv, zv, Pv) => {
    Pv.d(zv, {
      b: () => hv,
      d: () => ev,
      f: () => dv,
      h: () => gv,
      i: () => Sv
    });
    const hv = /^alloc_failed (\d+) bytes$/;

    function Sv(vv, zv) {
      return ev(vv, zv) ? `trap=alloc_failed ${zv} bytes` : `trap=${vv}`
    }

    function ev(vv, zv) {
      return "unreachable" === vv && zv > 0
    }

    function gv(vv, zv, Pv) {
      const hv = function(vv) {
        return vv instanceof WebAssembly.RuntimeError ? /unreachable/i.test(vv.message) ? "unreachable" : /out of bounds/i.test(vv.message) ? "out_of_bounds" : "runtime_error" : (vv instanceof RangeError || vv instanceof Error && "InternalError" === vv.name) && /call stack|recursion/i.test(vv.message) ? "stack_overflow" : "js_error"
      }(vv);
      if ("unreachable" !== hv) return {
        kind: hv,
        panic: null,
        refusedBytes: 0
      };
      const Sv = zv(),
        ev = Pv();
      return {
        kind: hv,
        panic: ev > 0 ? null : Sv,
        refusedBytes: ev
      }
    }
    const pv = 300;

    function dv(vv) {
      return vv.replace(/\s*\n\s*/g, " / ").slice(0, pv)
    }
  }
};
Object.freeze(modules);
for (const vv in modules) Object.freeze(modules[vv]);