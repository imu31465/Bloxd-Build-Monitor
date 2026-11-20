export const id = 133;
export const ids = [133];
export const modules = {
  35925: (bb, ub, hb) => {
    hb.d(ub, {
      b: () => Lb,
      f: () => Sb,
      i: () => Ub,
      l: () => Hb
    });
    var Bb = hb(35912),
      Ob = hb(6);
    const Gb = /wasm-function\[\d+\]|wasm:\/\/|\[wasm code\]/;

    function Ub(bb) {
      if (bb instanceof WebAssembly.RuntimeError) return !0;
      const ub = bb instanceof Error ? bb.stack : void 0;
      return "string" === typeof ub && Gb.test(ub)
    }

    function Lb(bb, ub, hb) {
      var Ob;
      const Ub = bb instanceof Error ? bb.name : "thrown",
        Lb = (bb instanceof Error && null !== (Ob = bb.stack) && void 0 !== Ob ? Ob : "").split("\n").filter((bb => Gb.test(bb))).slice(0, 8).map((bb => bb.trim())),
        Yb = null === ub ? "wasm memory unknown" : `wasm memory ${Math.round(ub/2**20)} MB`,
        Sb = null === hb.panic ? "" : `, panic: ${(0,Bb.f)(hb.panic)}`,
        ab = `${Ub}: ${bb instanceof Error?bb.message:String(bb)}`;
      return `${(0,Bb.l)(hb.kind,hb.refusedBytes)} ${ab} (${Yb})${Sb}${Lb.length>0?` | ${Lb.join(" < ")}`:""}`
    }
    const Yb = /on a detached ArrayBuffer|access detached ArrayBuffer|has been detached from the view/;

    function Sb(bb) {
      var ub;
      let hb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ArrayBuffer.prototype;
      if (!(bb instanceof Error) || !Yb.test(bb.message)) return {};
      if (!("detached" in hb)) return {
        arrayBufferDetached: "absent"
      };
      return {
        arrayBufferDetached: (0, Ob.Q)(null === (ub = (0, Ob.K)(hb, "detached")) || void 0 === ub ? void 0 : ub.get, /^function (get )?detached\(\) \{\s*\[native code\]\s*\}$/) ? "native" : "script"
      }
    }
    const ab = 500;

    function Hb(bb) {
      let ub = "[object Object]";
      try {
        ub = String(bb)
      } catch {}
      if ("[object Object]" !== ub) return ub;
      try {
        var hb, Bb;
        return null !== (hb = null === (Bb = JSON.stringify(bb)) || void 0 === Bb ? void 0 : Bb.slice(0, ab)) && void 0 !== hb ? hb : ub
      } catch {
        return ub
      }
    }
  },
  35948: (bb, ub, hb) => {
    hb.d(ub, {
      c: () => kb,
      g: () => Rb,
      h: () => cb,
      k: () => fb
    });
    var Bb = hb(2683),
      Ob = hb(2693),
      Gb = hb(6358),
      Ub = hb(4466),
      Lb = hb(2690),
      Yb = hb(2688);
    const Sb = "bloxd-wasmDownloaded",
      ab = 12;

    function Hb(bb) {
      return bb.pathname.slice(bb.pathname.lastIndexOf("/") + 1)
    }

    function wb() {
      try {
        if ("undefined" === typeof localStorage) return null;
        const bb = JSON.parse(localStorage.getItem(Sb) ?? "[]");
        return Array.isArray(bb) ? bb.filter((bb => "string" === typeof bb)) : []
      } catch (bb) {
        return console.warn("Bloxd wasm: the record of downloaded modules could not be read: asking the HTTP cache for none", bb), null
      }
    }
    const Zb = Reflect.apply,
      Xb = "undefined" === typeof Worker ? void 0 : Worker,
      pb = Xb?.prototype.postMessage,
      ob = Xb?.prototype.terminate,
      Ab = "undefined" === typeof EventTarget ? void 0 : EventTarget.prototype.addEventListener,
      lb = "undefined" === typeof MessageEvent ? void 0 : Object.getOwnPropertyDescriptor(MessageEvent.prototype, "data")?.get,
      Kb = Object.getOwnPropertyDescriptor(Object.getPrototypeOf(Uint8Array.prototype), "buffer").get,
      Wb = function() {
        try {
          return (0, Ub.k)(Xb, "Worker", !0) && (0, Ub.k)(pb, "postMessage") && (0, Ub.k)(ob, "terminate") && (0, Ub.k)(Kb, "buffer") && void 0 !== Ab && void 0 !== lb
        } catch {
          return !1
        }
      }();
    let Cb = !1;

    function db() {
      return Wb && !Cb
    }
    class rb {
      worker = null;
      failed = !1;
      constructor() {
        if (db()) try {
          this.worker = nb(), Zb(Ab, this.worker, ["error", () => {
            this.failed = !0
          }])
        } catch {
          this.stop()
        }
      }
      take() {
        const bb = this.worker;
        if (this.worker = null, null !== bb && this.failed) throw Zb(ob, bb, []), new Error("it did not run");
        return bb
      }
      stop() {
        const bb = this.worker;
        this.worker = null, null !== bb && Zb(ob, bb, [])
      }
    }
    class jb {
      decoded;
      worker;
      reject;
      constructor(bb, ub, hb, Bb, Gb) {
        try {
          this.worker = Gb?.take() ?? nb()
        } catch (Sb) {
          throw Cb = !0, new Error(`The zstd decoder's worker did not start: ${(0,Lb.e)(Sb)}`)
        }
        const Ub = this.worker;
        this.decoded = (0, Ob.k)(((ub, Ob) => {
          this.reject = Ob;
          const Gb = (bb, ub) => {
            Zb(Ab, Ub, [bb, ub])
          };
          Gb("message", (bb => {
            Bb();
            try {
              const Bb = Zb(lb, bb, []);
              if (!0 === Bb) ub();
              else {
                if ("string" === typeof Bb) throw Bb.startsWith(Lb.b) && (Cb = !0), new Error(Bb);
                hb(Bb, Zb(Yb.u, Bb, []))
              }
            } catch (Sb) {
              Ob(Sb)
            }
          })), Gb("error", (() => {
            Cb = !0, Ob(new Error("The zstd decoder's worker did not run"))
          })), Gb("messageerror", (() => {
            Ob(new Error(`${bb}'s decoder sent a piece that could not be read`))
          }))
        })), (0, Yb.X)(this.decoded), Zb(pb, Ub, [
          [bb, ub]
        ])
      }
      push(bb) {
        Zb(pb, this.worker, [bb, [Zb(Kb, bb, [])]])
      }
      end() {
        Zb(pb, this.worker, [null])
      }
      markWorkerFailed() {
        Cb = !0
      }
      fail(bb) {
        this.reject(bb), this.terminate()
      }
      terminate() {
        Zb(ob, this.worker, [])
      }
    }

    function nb() {
      if (globalThis.Worker !== Xb) throw new Error("Worker is not the one the page loaded with");
      return new Worker(new URL(hb.p + hb.u(65), hb.b), {
        name: "wasmZstdDecoder",
        type: "module"
      })
    }
    const Db = Reflect.apply,
      xb = ArrayBuffer,
      zb = "undefined" === typeof Response ? void 0 : Response,
      gb = "undefined" === typeof ReadableStream ? void 0 : ReadableStream,
      ib = function() {
        let bb;
        void 0 !== gb && new gb({
          __proto__: null,
          start(ub) {
            const {
              enqueue: hb,
              close: Bb,
              error: Ob
            } = Object.getPrototypeOf(ub);
            bb = {
              enqueue: hb,
              close: Bb,
              error: Ob
            }
          }
        }, {
          __proto__: null
        });
        return bb
      }(),
      vb = function() {
        try {
          return "undefined" !== typeof WebAssembly && "function" === typeof WebAssembly.compileStreaming && void 0 !== ib && (0, Ub.k)(zb, "Response", !0) && (0, Ub.k)(gb, "ReadableStream", !0) && (0, Ub.k)(ib.enqueue, "enqueue") && (0, Ub.k)(ib.close, "close") && (0, Ub.k)(ib.error, "error") && (0, Ub.k)(Yb._, "body") && (0, Ub.k)(Yb.M, "getReader") && (0, Ub.k)(Yb.Z, "read")
        } catch {
          return !1
        }
      }();
    async function tb(bb, ub, hb, Bb, Gb, Ub, Sb) {
      const ab = new xb(ub),
        {
          controller: Hb,
          compiled: wb
        } = function(bb) {
          try {
            let bb;
            const ub = new gb({
                __proto__: null,
                start(ub) {
                  bb = ub
                }
              }, {
                __proto__: null
              }),
              hb = new zb(ub, {
                __proto__: null,
                headers: {
                  __proto__: null,
                  "Content-Type": "application/wasm"
                }
              });
            return {
              controller: bb,
              compiled: (0, Yb.X)((0, Yb.w)((0, Yb.cb)(hb)))
            }
          } catch (ub) {
            throw new Error(`${bb} could not be streamed into a compile: ${(0,Lb.e)(ub)}`)
          }
        }(bb),
        {
          enqueue: Zb,
          close: Xb,
          error: pb
        } = ib,
        ob = bb => {
          try {
            Db(pb, Hb, [bb])
          } catch {}
        };
      let Ab = 0;
      const lb = (hb, Bb) => {
        if (Ab + Bb > ub) throw new Error(`${bb} decoded past its module's ${ub} bytes`);
        Db(Yb.$, new Yb.m(ab), [new Yb.m(hb), Ab]);
        try {
          Db(Zb, Hb, [new Yb.m(ab, Ab, Bb)])
        } catch {}
        Ab += Bb
      };
      let Kb, Wb;
      try {
        Kb = new jb(bb, ub, lb, Bb, Sb)
      } catch (nb) {
        throw ob(nb), nb
      }
      const Cb = bb => {
        Kb.fail(bb), void 0 !== Wb && Jb(Wb)
      };
      let db = !1;
      hb.addEventListener("abort", (() => {
        db && Kb.markWorkerFailed(), Cb(new Error(`${bb} stalled`))
      }), {
        once: !0
      }), (0, Ob.u)(wb, (() => {}), Cb);
      try {
        let Ub;
        try {
          Ub = await fetch(bb, {
            signal: hb
          })
        } catch (nb) {
          throw new Error(`Fetching ${bb} failed: ${(0,Lb.e)(nb)}`)
        }
        const {
          ok: Sb,
          status: ab,
          body: Hb
        } = function(bb, ub) {
          try {
            const {
              ok: bb,
              status: hb
            } = ub;
            return {
              ok: bb,
              status: hb,
              body: Db(Yb._, ub, [])
            }
          } catch {
            throw new Error(`${bb} came in a response a page script made`)
          }
        }(bb, Ub);
        if (!Sb) throw new Error(`Fetching ${bb} failed: HTTP ${ab}`);
        Bb();
        const wb = Db(Yb.M, Hb, []);
        Wb = wb;
        const Zb = () => {
          Jb(wb)
        };
        for ((0, Ob.u)(Kb.decoded, Zb, Zb);;) {
          let ub;
          try {
            ub = await Db(Yb.Z, wb, [])
          } catch (nb) {
            throw new Error(`Downloading ${bb} failed: ${(0,Lb.e)(nb)}`)
          }
          if (ub.done) break;
          Bb(), Kb.push(ub.value)
        }
        if (db = !0, Kb.end(), await Kb.decoded, Gb(), Ab !== ub) throw new Error(`${bb} ended before its module did`)
      } catch (nb) {
        throw ob(nb), Cb(nb), nb
      }
      Kb.terminate();
      try {
        Db(Xb, Hb, [])
      } catch {}
      const rb = await wb;
      return void 0 !== Ub && await (0, Yb.v)(bb, new Yb.m(ab), {
        sha256: Ub.sha256,
        onMismatch: () => {}
      }), rb
    }

    function Jb(bb) {
      try {
        (0, Yb.X)(bb.cancel())
      } catch {}
    }
    const eb = ".zst.bin",
      Nb = 1e3;
    let sb = null;

    function Mb(bb) {
      return sb ??= function() {
        const bb = new Map,
          ub = "bloxd_wasm_webgpu:5005524,bloxd_wasm_webgl:5368803,bloxd_wasm_webgl1:4769492,bloxd_wasm_workers:196044,bloxd_wasm_models:311680,bloxd_wasm_client:3671383";
        for (const hb of ub?.split(",") ?? []) {
          const [ub = "", Bb] = hb.split(":"), Ob = Number(Bb);
          Number.isInteger(Ob) && Ob > 0 && bb.set(ub, Ob)
        }
        return bb
      }(), sb.get(bb)
    }
    async function mb(bb, ub) {
      let hb = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
      const Bb = Mb(bb.name);
      if (void 0 === Bb) return Ib(await Pb(bb, ub, hb), "cold-wasm");
      const Gb = vb ? new rb : null;
      let Ub;
      try {
        if (Sb = bb.url(), wb()?.includes(Hb(Sb)) && await async function(bb) {
            const ub = new AbortController;
            let hb;
            const Bb = (0, Ob.k)((bb => {
              hb = setTimeout((() => {
                ub.abort(), bb(null)
              }), Nb)
            }));
            try {
              const hb = fetch(bb.href, {
                  cache: "only-if-cached",
                  mode: "same-origin",
                  signal: ub.signal
                }),
                Gb = await (0, Ob.r)([hb, Bb]);
              return !!Gb?.ok && ((0, Yb.X)(Gb.body.cancel()), !0)
            } catch {
              return !1
            } finally {
              clearTimeout(hb)
            }
          }(bb.url())) return Gb?.stop(), await async function(bb, ub, hb, Bb) {
          let Ob = !1;
          const Gb = hb && {
            sha256: hb.sha256,
            onMismatch: () => {
              Ob = !0
            }
          };
          try {
            return Ib(await Pb(bb, Gb, Bb), "warm")
          } catch (Ub) {
            const Bb = await qb(bb, ub, hb, null);
            if (null === Bb) throw Ob && hb.onMismatch(), Ub;
            return console.warn(`${bb.url().href} from the HTTP cache failed: ${(0,Lb.e)(Ub)}: loaded its copy instead`), Ib(Bb, Ob ? "warm-refused" : "warm-broken")
          }
        }(bb, Bb, ub, hb);
        Ub = await qb(bb, Bb, ub, Gb)
      } finally {
        Gb?.stop()
      }
      var Sb;
      return null !== Ub ? Ib(Ub, "cold-worker") : Ib(await Pb(bb, ub, hb), "cold-wasm")
    }

    function Ib(bb, ub) {
      return {
        __proto__: null,
        module: bb,
        path: ub
      }
    }

    function Pb(bb, ub, hb) {
      return void 0 === Mb(bb.name) ? (0, Yb.C)(bb.url(), ub, hb) : (0, Yb.C)(bb.url(), ub, {
        ...hb,
        hideThen: !0,
        onDownloaded: () => {
          ! function(bb) {
            const ub = wb();
            if (null === ub) return;
            const hb = Hb(bb),
              Bb = ub.filter((bb => bb !== hb));
            Bb.push(hb);
            try {
              localStorage.setItem(Sb, JSON.stringify(Bb.slice(-ab)))
            } catch (Ob) {
              console.warn(`Bloxd wasm: ${hb} could not be recorded as downloaded: a later join asks the HTTP cache nothing for it`, Ob)
            }
          }(bb.url()), hb.onDownloaded?.()
        }
      })
    }
    async function qb(bb, ub, hb, Bb) {
      if (!vb || !db()) return null;
      const Ob = bb.url(),
        Gb = `${Ob.href}${eb}`;
      try {
        return await (0, Yb.bb)(Gb, ((bb, Ob, Ub) => tb(Gb, ub, bb, Ob, Ub, hb, Bb)))
      } catch (Ub) {
        return console.warn(`${(0,Lb.e)(Ub)}: loading ${Ob.href} instead`), null
      }
    }
    let Eb = null,
      yb = !1;
    const Vb = new Map,
      Fb = new Map;

    function fb(bb, ub, hb) {
      return null === Eb ? Eb = Tb(bb, ub) : bb !== Eb.build ? console.warn(`Bloxd wasm: ${bb.name} was asked for after ${Eb.build.name} started loading, which this thread keeps`) : ub.name !== Eb.workers.name && console.warn(`Bloxd wasm: ${ub.name} was asked for workers after ${Eb.workers.name}, which this thread keeps`), hb?.reloadFailedDownload && !yb && (0, Bb.S)() && (yb = !0, Eb = Tb(Eb.build, Eb.workers)), Eb.loaded
    }

    function kb(bb, ub) {
      if (null !== Eb) return (0, Ob.h)([]);
      const hb = bb.filter((bb => !Vb.has(bb.name))).map((bb => {
        const hb = new AbortController,
          Bb = {
            compiled: Pb(bb, (0, Gb.d)(bb.name), {
              priority: ub,
              Lu: hb.signal,
              onDownloaded: () => {
                Bb.downloaded = !0
              },
              retries: {
                onRetry: () => {
                  Bb.downloaded = !1, null !== Eb && hb.abort()
                }
              }
            }),
            cancel: hb,
            downloaded: !1
          };
        return Vb.set(bb.name, Bb), (0, Ob.k)((ub => {
          (0, Ob.u)(Bb.compiled, (() => {
            Bb.downloaded = !0, ub()
          }), (Bb => {
            hb.signal.aborted || console.warn(`Bloxd wasm: ${bb.name}'s compile ahead of the load failed: the load compiles it afresh`, Bb), ub()
          }))
        }))
      }));
      return (0, Ob.h)(hb)
    }

    function Tb(bb, ub) {
      const hb = (0, Bb.E)((async () => {
        (0, Ub.w)(), Fb.clear();
        const hb = Qb(bb),
          Bb = ub.name === bb.name ? hb : Qb(ub);
        for (const {
            cancel: bb
          }
          of Vb.values()) bb.abort();
        Vb.clear(), await (0, Ob.h)([hb, Bb]);
        const Gb = await hb,
          Lb = await Bb;
        return (0, Ub.w)(), {
          module: Gb,
          workerModule: Lb
        }
      }), bb);
      return {
        build: bb,
        workers: ub,
        loaded: hb
      }
    }

    function cb(bb) {
      return Fb.get(bb)
    }

    function Qb(bb) {
      const ub = performance.now(),
        hb = Vb.get(bb.name);
      Vb.delete(bb.name);
      const Bb = !0 === hb?.downloaded ? hb : void 0;
      return void 0 !== hb && void 0 === Bb && hb.cancel.abort(), (0, Ob.k)(((hb, Gb) => {
        const Ub = (Bb, Ob) => {
            Fb.set(bb.name, {
              path: Ob,
              ms: performance.now() - ub
            }), hb(Bb)
          },
          Lb = () => {
            (0, Ob.u)(bu(bb), (bb => {
              let {
                module: ub,
                path: hb
              } = bb;
              Ub(ub, hb)
            }), Gb)
          };
        void 0 === Bb ? Lb() : (0, Ob.u)(Bb.compiled, (bb => {
          Ub(bb, "ahead")
        }), Lb)
      }))
    }
    async function Rb(bb, ub) {
      const {
        module: hb
      } = await bu(bb, {
        retries: ub
      });
      return hb
    }
    async function bu(bb) {
      let ub = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
      return await mb(bb, (0, Gb.d)(bb.name), ub)
    }
  },
  6358: (bb, ub, hb) => {
    hb.d(ub, {
      d: () => Ub
    });
    var Bb = hb(2688);
    const Ob = {
      bloxd_wasm: () => "3b91fa895928d8c20ebf400bda89ab044ad7bc6b888817ddf1222f7c57feeb9c",
      bloxd_wasm_client: () => "f8fce5947f2faa12e1ab09590f42ab320ab7503a3faa2b92511d0c8b5961045e",
      bloxd_wasm_workers: () => "97913e9056cda526c2dc8ccbbbd9e745eb1ac954c2c44cba6c7873fc1747a23c",
      bloxd_wasm_models: () => "c8d7121eb692beab251440772c33579d323be2e080195d116336055405d68c6b",
      bloxd_wasm_webgpu: () => "19061547ec948fcba5a47bac197b276e7d2b5e59be20d2aaff03a98029648a35",
      bloxd_wasm_webgl: () => "368a1de884ceea9044ed27e803110479e191485e8237c1d5316b43218c30116d",
      bloxd_wasm_webgl1: () => "5a9131e0f012a1be4913bc2fcccdbb8d2fa9e6060e384fce80f6463266a8c00a",
      bloxd_wasm_replay: () => "2682ec56a7ca06252a5e84c7b45e4853cfe028e5944d11f804b256bb15d9e0af",
      bloxd_wasm_recorder: () => "4b50bdb382eedb09ed05f5762ed2c0dc0736e9ab3343761cacc34ca07ef84644",
      bloxd_wasm_anim: () => "e9760697ea51a31a4ccfa90e459f7ee2ef0e9d3e3212f5f9bdc92eccc7a75ce1",
      bloxd_wasm_textures: () => "435e32982ee604bfb0a866d92a90abb139a38b2cd93d29123f4edbda32e26fc0",
      bloxd_wasm_shader_pack: () => "752c76e3c73a60bbf217aaaf2e581c1eeace9b5713c141db27df430f66cfe32d"
    };
    var Gb = hb(4466);

    function Ub(bb) {
      const ub = Object.prototype.hasOwnProperty.call(Ob, bb) ? Ob[bb]() : void 0;
      if (void 0 !== ub) return {
        sha256: ub,
        onMismatch: Gb.v
      };
      throw new Bb.i(`${bb} has no release digest, so this build refuses it`)
    }
  },
  35912: (bb, ub, hb) => {
    hb.d(ub, {
      c: () => Bb,
      d: () => Gb,
      f: () => Yb,
      j: () => Ub,
      l: () => Ob
    });
    const Bb = /^alloc_failed (\d+) bytes$/;

    function Ob(bb, ub) {
      return Gb(bb, ub) ? `trap=alloc_failed ${ub} bytes` : `trap=${bb}`
    }

    function Gb(bb, ub) {
      return "unreachable" === bb && ub > 0
    }

    function Ub(bb, ub, hb) {
      const Bb = function(bb) {
        return bb instanceof WebAssembly.RuntimeError ? /unreachable/i.test(bb.message) ? "unreachable" : /out of bounds/i.test(bb.message) ? "out_of_bounds" : "runtime_error" : (bb instanceof RangeError || bb instanceof Error && "InternalError" === bb.name) && /call stack|recursion/i.test(bb.message) ? "stack_overflow" : "js_error"
      }(bb);
      if ("unreachable" !== Bb) return {
        kind: Bb,
        panic: null,
        refusedBytes: 0
      };
      const Ob = ub(),
        Gb = hb();
      return {
        kind: Bb,
        panic: Gb > 0 ? null : Ob,
        refusedBytes: Gb
      }
    }
    const Lb = 300;

    function Yb(bb) {
      return bb.replace(/\s*\n\s*/g, " / ").slice(0, Lb)
    }
  }
};
Object.freeze(modules);
for (const bb in modules) Object.freeze(modules[bb]);