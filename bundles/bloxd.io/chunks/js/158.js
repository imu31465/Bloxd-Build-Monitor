export const id = 158;
export const ids = [158];
export const modules = {
  37406: (bb, wb, Mb) => {
    Mb.d(wb, {
      e: () => gb,
      g: () => Lb,
      h: () => Vb,
      j: () => Ob
    });
    var eb = Mb(37398),
      Hb = Mb(13);
    const pb = /wasm-function\[\d+\]|wasm:\/\/|\[wasm code\]/;

    function Vb(bb) {
      if (bb instanceof WebAssembly.RuntimeError) return !0;
      const wb = bb instanceof Error ? bb.stack : void 0;
      return "string" === typeof wb && pb.test(wb)
    }

    function gb(bb, wb, Mb) {
      var Hb;
      const Vb = bb instanceof Error ? bb.name : "thrown",
        gb = (bb instanceof Error && null !== (Hb = bb.stack) && void 0 !== Hb ? Hb : "").split("\n").filter((bb => pb.test(bb))).slice(0, 8).map((bb => bb.trim())),
        lb = null === wb ? "wasm memory unknown" : `wasm memory ${Math.round(wb/2**20)} MB`,
        Lb = null === Mb.panic ? "" : `, panic: ${(0,eb.h)(Mb.panic)}`,
        Ib = `${Vb}: ${bb instanceof Error?bb.message:String(bb)}`;
      return `${(0,eb.o)(Mb.kind,Mb.refusedBytes)} ${Ib} (${lb})${Lb}${gb.length>0?` | ${gb.join(" < ")}`:""}`
    }
    const lb = /on a detached ArrayBuffer|access detached ArrayBuffer|has been detached from the view/;

    function Lb(bb) {
      var wb;
      let Mb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ArrayBuffer.prototype;
      if (!(bb instanceof Error) || !lb.test(bb.message)) return {};
      if (!("detached" in Mb)) return {
        arrayBufferDetached: "absent"
      };
      return {
        arrayBufferDetached: (0, Hb.T)(null === (wb = (0, Hb.J)(Mb, "detached")) || void 0 === wb ? void 0 : wb.get, /^function (get )?detached\(\) \{\s*\[native code\]\s*\}$/) ? "native" : "script"
      }
    }
    const Ib = 500;

    function Ob(bb) {
      let wb = "[object Object]";
      try {
        wb = String(bb)
      } catch {}
      if ("[object Object]" !== wb) return wb;
      try {
        var Mb, eb;
        return null !== (Mb = null === (eb = JSON.stringify(bb)) || void 0 === eb ? void 0 : eb.slice(0, Ib)) && void 0 !== Mb ? Mb : wb
      } catch {
        return wb
      }
    }
  },
  37435: (bb, wb, Mb) => {
    Mb.d(wb, {
      d: () => kb,
      g: () => ew,
      i: () => yb,
      m: () => ww,
      o: () => ob,
      r: () => Tb
    });
    var eb = Mb(2463),
      Hb = Mb(2478),
      pb = Mb(7804),
      Vb = Mb(5587),
      gb = Mb(2476),
      lb = Mb(2471);
    const Lb = "bloxd-wasmDownloaded",
      Ib = 12;

    function Ob(bb) {
      return bb.pathname.slice(bb.pathname.lastIndexOf("/") + 1)
    }

    function Ub() {
      try {
        if ("undefined" === typeof localStorage) return null;
        const bb = JSON.parse(localStorage.getItem(Lb) ?? "[]");
        return Array.isArray(bb) ? bb.filter((bb => "string" === typeof bb)) : []
      } catch (bb) {
        return console.warn("Bloxd wasm: the record of downloaded modules could not be read: asking the HTTP cache for none", bb), null
      }
    }
    const tb = Reflect.apply,
      Cb = "undefined" === typeof Worker ? void 0 : Worker,
      Eb = Cb?.prototype.postMessage,
      Fb = Cb?.prototype.terminate,
      Bb = "undefined" === typeof EventTarget ? void 0 : EventTarget.prototype.addEventListener,
      sb = "undefined" === typeof MessageEvent ? void 0 : Object.getOwnPropertyDescriptor(MessageEvent.prototype, "data")?.get,
      mb = Object.getOwnPropertyDescriptor(Object.getPrototypeOf(Uint8Array.prototype), "buffer").get,
      hb = function() {
        try {
          return (0, Vb.m)(Cb, "Worker", !0) && (0, Vb.m)(Eb, "postMessage") && (0, Vb.m)(Fb, "terminate") && (0, Vb.m)(mb, "buffer") && void 0 !== Bb && void 0 !== sb
        } catch {
          return !1
        }
      }();
    let zb = !1;

    function Xb() {
      return hb && !zb
    }
    class xb {
      worker = null;
      failed = !1;
      constructor() {
        if (Xb()) try {
          this.worker = Kb(), tb(Bb, this.worker, ["error", () => {
            this.failed = !0
          }])
        } catch {
          this.stop()
        }
      }
      take() {
        const bb = this.worker;
        if (this.worker = null, null !== bb && this.failed) throw tb(Fb, bb, []), new Error("it did not run");
        return bb
      }
      stop() {
        const bb = this.worker;
        this.worker = null, null !== bb && tb(Fb, bb, [])
      }
    }
    class jb {
      decoded;
      worker;
      reject;
      constructor(bb, wb, Mb, eb, pb) {
        try {
          this.worker = pb?.take() ?? Kb()
        } catch (Lb) {
          throw zb = !0, new Error(`The zstd decoder's worker did not start: ${(0,gb.h)(Lb)}`)
        }
        const Vb = this.worker;
        this.decoded = (0, Hb.g)(((wb, Hb) => {
          this.reject = Hb;
          const pb = (bb, wb) => {
            tb(Bb, Vb, [bb, wb])
          };
          pb("message", (bb => {
            eb();
            try {
              const eb = tb(sb, bb, []);
              if (!0 === eb) wb();
              else {
                if ("string" === typeof eb) throw eb.startsWith(gb.d) && (zb = !0), new Error(eb);
                Mb(eb, tb(lb.t, eb, []))
              }
            } catch (Lb) {
              Hb(Lb)
            }
          })), pb("error", (() => {
            zb = !0, Hb(new Error("The zstd decoder's worker did not run"))
          })), pb("messageerror", (() => {
            Hb(new Error(`${bb}'s decoder sent a piece that could not be read`))
          }))
        })), (0, lb.Q)(this.decoded), tb(Eb, Vb, [
          [bb, wb]
        ])
      }
      push(bb) {
        tb(Eb, this.worker, [bb, [tb(mb, bb, [])]])
      }
      end() {
        tb(Eb, this.worker, [null])
      }
      markWorkerFailed() {
        zb = !0
      }
      fail(bb) {
        this.reject(bb), this.terminate()
      }
      terminate() {
        tb(Fb, this.worker, [])
      }
    }

    function Kb() {
      if (globalThis.Worker !== Cb) throw new Error("Worker is not the one the page loaded with");
      return new Worker(new URL(Mb.p + Mb.u(80), Mb.b), {
        name: "wasmZstdDecoder",
        type: "module"
      })
    }
    const rb = Reflect.apply,
      Rb = ArrayBuffer,
      Db = "undefined" === typeof Response ? void 0 : Response,
      cb = "undefined" === typeof ReadableStream ? void 0 : ReadableStream,
      Yb = function() {
        let bb;
        void 0 !== cb && new cb({
          __proto__: null,
          start(wb) {
            const {
              enqueue: Mb,
              close: eb,
              error: Hb
            } = Object.getPrototypeOf(wb);
            bb = {
              enqueue: Mb,
              close: eb,
              error: Hb
            }
          }
        }, {
          __proto__: null
        });
        return bb
      }(),
      Zb = function() {
        try {
          return "undefined" !== typeof WebAssembly && "function" === typeof WebAssembly.compileStreaming && void 0 !== Yb && (0, Vb.m)(Db, "Response", !0) && (0, Vb.m)(cb, "ReadableStream", !0) && (0, Vb.m)(Yb.enqueue, "enqueue") && (0, Vb.m)(Yb.close, "close") && (0, Vb.m)(Yb.error, "error") && (0, Vb.m)(lb.U, "body") && (0, Vb.m)(lb.F, "getReader") && (0, Vb.m)(lb.S, "read")
        } catch {
          return !1
        }
      }();
    async function fb(bb, wb, Mb, eb, pb, Vb, Lb) {
      const Ib = new Rb(wb),
        {
          controller: Ob,
          compiled: Ub
        } = function(bb) {
          try {
            let bb;
            const wb = new cb({
                __proto__: null,
                start(wb) {
                  bb = wb
                }
              }, {
                __proto__: null
              }),
              Mb = new Db(wb, {
                __proto__: null,
                headers: {
                  __proto__: null,
                  "Content-Type": "application/wasm"
                }
              });
            return {
              controller: bb,
              compiled: (0, lb.Q)((0, lb.v)((0, lb.Y)(Mb)))
            }
          } catch (wb) {
            throw new Error(`${bb} could not be streamed into a compile: ${(0,gb.h)(wb)}`)
          }
        }(bb),
        {
          enqueue: tb,
          close: Cb,
          error: Eb
        } = Yb,
        Fb = bb => {
          try {
            rb(Eb, Ob, [bb])
          } catch {}
        };
      let Bb = 0;
      const sb = (Mb, eb) => {
        if (Bb + eb > wb) throw new Error(`${bb} decoded past its module's ${wb} bytes`);
        rb(lb.V, new lb.m(Ib), [new lb.m(Mb), Bb]);
        try {
          rb(tb, Ob, [new lb.m(Ib, Bb, eb)])
        } catch {}
        Bb += eb
      };
      let mb, hb;
      try {
        mb = new jb(bb, wb, sb, eb, Lb)
      } catch (Kb) {
        throw Fb(Kb), Kb
      }
      const zb = bb => {
        mb.fail(bb), void 0 !== hb && Ab(hb)
      };
      let Xb = !1;
      Mb.addEventListener("abort", (() => {
        Xb && mb.markWorkerFailed(), zb(new Error(`${bb} stalled`))
      }), {
        once: !0
      }), (0, Hb.m)(Ub, (() => {}), zb);
      try {
        let Vb;
        try {
          Vb = await fetch(bb, {
            signal: Mb
          })
        } catch (Kb) {
          throw new Error(`Fetching ${bb} failed: ${(0,gb.h)(Kb)}`)
        }
        const {
          ok: Lb,
          status: Ib,
          body: Ob
        } = function(bb, wb) {
          try {
            const {
              ok: bb,
              status: Mb
            } = wb;
            return {
              ok: bb,
              status: Mb,
              body: rb(lb.U, wb, [])
            }
          } catch {
            throw new Error(`${bb} came in a response a page script made`)
          }
        }(bb, Vb);
        if (!Lb) throw new Error(`Fetching ${bb} failed: HTTP ${Ib}`);
        eb();
        const Ub = rb(lb.F, Ob, []);
        hb = Ub;
        const tb = () => {
          Ab(Ub)
        };
        for ((0, Hb.m)(mb.decoded, tb, tb);;) {
          let wb;
          try {
            wb = await rb(lb.S, Ub, [])
          } catch (Kb) {
            throw new Error(`Downloading ${bb} failed: ${(0,gb.h)(Kb)}`)
          }
          if (wb.done) break;
          eb(), mb.push(wb.value)
        }
        if (Xb = !0, mb.end(), await mb.decoded, pb(), Bb !== wb) throw new Error(`${bb} ended before its module did`)
      } catch (Kb) {
        throw Fb(Kb), zb(Kb), Kb
      }
      mb.terminate();
      try {
        rb(Cb, Ob, [])
      } catch {}
      const xb = await Ub;
      return void 0 !== Vb && await (0, lb.u)(bb, new lb.m(Ib), {
        sha256: Vb.sha256,
        onMismatch: () => {}
      }), xb
    }

    function Ab(bb) {
      try {
        (0, lb.Q)(bb.cancel())
      } catch {}
    }
    const Wb = ".zst.bin",
      Jb = 1e3;
    let Sb = null;

    function Nb(bb) {
      return Sb ??= function() {
        const bb = new Map,
          wb = "bloxd_wasm_webgpu:5238928,bloxd_wasm_webgl:5662882,bloxd_wasm_webgl1:4934167,bloxd_wasm_workers:203635,bloxd_wasm_models:478484,bloxd_wasm_client:3741670";
        for (const Mb of wb?.split(",") ?? []) {
          const [wb = "", eb] = Mb.split(":"), Hb = Number(eb);
          Number.isInteger(Hb) && Hb > 0 && bb.set(wb, Hb)
        }
        return bb
      }(), Sb.get(bb)
    }
    async function vb(bb, wb) {
      let Mb = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
      const eb = Nb(bb.name);
      if (void 0 === eb) return Qb(await Gb(bb, wb, Mb), "cold-wasm");
      const pb = Zb ? new xb : null;
      let Vb;
      try {
        if (Lb = bb.url(), Ub()?.includes(Ob(Lb)) && await async function(bb) {
            const wb = new AbortController;
            let Mb;
            const eb = (0, Hb.g)((bb => {
              Mb = setTimeout((() => {
                wb.abort(), bb(null)
              }), Jb)
            }));
            try {
              const Mb = fetch(bb.href, {
                  cache: "only-if-cached",
                  mode: "same-origin",
                  signal: wb.signal
                }),
                pb = await (0, Hb.k)([Mb, eb]);
              return !!pb?.ok && ((0, lb.Q)(pb.body.cancel()), !0)
            } catch {
              return !1
            } finally {
              clearTimeout(Mb)
            }
          }(bb.url())) return pb?.stop(), await async function(bb, wb, Mb, eb) {
          let Hb = !1;
          const pb = Mb && {
            sha256: Mb.sha256,
            onMismatch: () => {
              Hb = !0
            }
          };
          try {
            return Qb(await Gb(bb, pb, eb), "warm")
          } catch (Vb) {
            const eb = await qb(bb, wb, Mb, null);
            if (null === eb) throw Hb && Mb.onMismatch(), Vb;
            return console.warn(`${bb.url().href} from the HTTP cache failed: ${(0,gb.h)(Vb)}: loaded its copy instead`), Qb(eb, Hb ? "warm-refused" : "warm-broken")
          }
        }(bb, eb, wb, Mb);
        Vb = await qb(bb, eb, wb, pb)
      } finally {
        pb?.stop()
      }
      var Lb;
      return null !== Vb ? Qb(Vb, "cold-worker") : Qb(await Gb(bb, wb, Mb), "cold-wasm")
    }

    function Qb(bb, wb) {
      return {
        __proto__: null,
        module: bb,
        path: wb
      }
    }

    function Gb(bb, wb, Mb) {
      return void 0 === Nb(bb.name) ? (0, lb.y)(bb.url(), wb, Mb) : (0, lb.y)(bb.url(), wb, {
        ...Mb,
        hideThen: !0,
        onDownloaded: () => {
          ! function(bb) {
            const wb = Ub();
            if (null === wb) return;
            const Mb = Ob(bb),
              eb = wb.filter((bb => bb !== Mb));
            eb.push(Mb);
            try {
              localStorage.setItem(Lb, JSON.stringify(eb.slice(-Ib)))
            } catch (Hb) {
              console.warn(`Bloxd wasm: ${Mb} could not be recorded as downloaded: a later join asks the HTTP cache nothing for it`, Hb)
            }
          }(bb.url()), Mb.onDownloaded?.()
        }
      })
    }
    async function qb(bb, wb, Mb, eb) {
      if (!Zb || !Xb()) return null;
      const Hb = bb.url(),
        pb = `${Hb.href}${Wb}`;
      try {
        return await (0, lb.X)(pb, ((bb, Hb, Vb) => fb(pb, wb, bb, Hb, Vb, Mb, eb)))
      } catch (Vb) {
        return console.warn(`${(0,gb.h)(Vb)}: loading ${Hb.href} instead`), null
      }
    }
    let ab = null,
      ib = !1;
    const ub = new Map,
      db = new Map;
    let Pb = null;

    function nb(bb) {
      const wb = wb => bb.filter((bb => ub.get(bb)?.state === wb)).length,
        Mb = wb("compiled");
      return Mb > 0 && Mb === bb.length ? "compiled" : Mb + wb("compiling") > 0 ? "compiling" : "none"
    }

    function yb() {
      return Pb ?? nb([...ub.keys()])
    }

    function ob(bb, wb, Mb) {
      return null === ab ? ab = bw(bb, wb, Mb?.memoryMaximumBytes) : bb !== ab.build ? console.warn(`Bloxd wasm: ${bb.name} was asked for after ${ab.build.name} started loading, which this thread keeps`) : wb.name !== ab.workers.name && console.warn(`Bloxd wasm: ${wb.name} was asked for workers after ${ab.workers.name}, which this thread keeps`), Mb?.reloadFailedDownload && !ib && (0, eb.X)() && (ib = !0, ab = bw(ab.build, ab.workers, ab.memoryMaximumBytes)), ab.loaded
    }

    function Tb(bb) {
      return null === ab ? (0, Hb.g)((bb => {
        bb(!1)
      })) : ((0, eb.U)() && (ab = bw(ab.build, ab.workers, bb ?? ab.memoryMaximumBytes)), ab.loaded)
    }

    function kb(bb, wb) {
      if (null !== ab) return (0, Hb.f)([]);
      const Mb = bb.filter((bb => !ub.has(bb.name))).map((bb => {
        const Mb = new AbortController,
          eb = {
            compiled: Gb(bb, (0, pb.e)(bb.name), {
              priority: wb,
              Yb: Mb.signal,
              onDownloaded: () => {
                eb.downloaded = !0
              },
              retries: {
                onRetry: () => {
                  eb.downloaded = !1, null !== ab && Mb.abort()
                }
              }
            }),
            cancel: Mb,
            downloaded: !1,
            state: "compiling"
          };
        return ub.set(bb.name, eb), (0, Hb.g)((wb => {
          (0, Hb.m)(eb.compiled, (() => {
            eb.downloaded = !0, eb.state = "compiled", wb()
          }), (Hb => {
            eb.state = "failed", Mb.signal.aborted || console.warn(`Bloxd wasm: ${bb.name}'s compile ahead of the load failed: the load compiles it afresh`, Hb), wb()
          }))
        }))
      }));
      return (0, Hb.f)(Mb)
    }

    function bw(bb, wb, Mb) {
      Pb ??= nb(wb.name === bb.name ? [bb.name] : [bb.name, wb.name]);
      const pb = (0, eb.y)((async () => {
        (0, Vb.E)(), db.clear();
        const Mb = Mw(bb),
          eb = wb.name === bb.name ? Mb : Mw(wb);
        for (const {
            cancel: bb
          }
          of ub.values()) bb.abort();
        ub.clear(), await (0, Hb.f)([Mb, eb]);
        const pb = await Mb,
          gb = await eb;
        return (0, Vb.E)(), {
          module: pb,
          workerModule: gb
        }
      }), bb, Mb);
      return {
        build: bb,
        workers: wb,
        memoryMaximumBytes: Mb,
        loaded: pb
      }
    }

    function ww(bb) {
      return db.get(bb)
    }

    function Mw(bb) {
      const wb = performance.now(),
        Mb = ub.get(bb.name);
      ub.delete(bb.name);
      const eb = !0 === Mb?.downloaded ? Mb : void 0;
      return void 0 !== Mb && void 0 === eb && Mb.cancel.abort(), (0, Hb.g)(((Mb, pb) => {
        const Vb = (eb, Hb) => {
            db.set(bb.name, {
              path: Hb,
              ms: performance.now() - wb
            }), Mb(eb)
          },
          gb = () => {
            (0, Hb.m)(Hw(bb), (bb => {
              let {
                module: wb,
                path: Mb
              } = bb;
              Vb(wb, Mb)
            }), pb)
          };
        void 0 === eb ? gb() : (0, Hb.m)(eb.compiled, (bb => {
          Vb(bb, "ahead")
        }), gb)
      }))
    }
    async function ew(bb, wb) {
      const {
        module: Mb
      } = await Hw(bb, {
        retries: wb
      });
      return Mb
    }
    async function Hw(bb) {
      let wb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
      return await vb(bb, (0, pb.e)(bb.name), wb)
    }
  },
  7804: (bb, wb, Mb) => {
    Mb.d(wb, {
      e: () => Vb
    });
    var eb = Mb(2471);
    const Hb = {
      bloxd_wasm: () => "0021d096c0b495869173e1bf089a555fc306fc598e02546bb9c216172e53332d",
      bloxd_wasm_client: () => "6a63b6c47ad21756d57227bbac24ae049881afbff210f713c0b0aeaceae2e102",
      bloxd_wasm_workers: () => "68ec8fbb485ec5b7fcde94a988fa5914ddd0a7f0de80b29453220567a879b36d",
      bloxd_wasm_models: () => "6bd85ee20b75ed8b1a8a698da23b9eff9236c4776496360982bd2c00ace99b99",
      bloxd_wasm_webgpu: () => "d8909c14a3b536315fb7502719927466cd7873d70297d564639a12b8734d8f30",
      bloxd_wasm_webgl: () => "c49c3dd2ef01f7ca5d6fe08e3373b8ab934ecbd11c01d27eab1ada606f835e3e",
      bloxd_wasm_webgl1: () => "d98f1a2e5f8bf52c5604e5bd19ba8dfbee684e74c8841277cf32d7be7bdc3226",
      bloxd_wasm_replay: () => "5a90bae27ebce9aceafb0b6ee704660127b6865c72068e5cc9c9ddbab78d8239",
      bloxd_wasm_recorder: () => "4a0b3b1fe1477637cddb48ba5d0f06c50cb40ec42c31a1b963b0e14a086c2590",
      bloxd_wasm_anim: () => "c4812501582860f01a67ad5cb5cac665ddfc865a422d1a2d38caef1ad60a0c73",
      bloxd_wasm_textures: () => "4df5cb3be0ab097262d9f7d404625e34c0cb698b3c1c16687afeb13ba867808d",
      bloxd_wasm_shader_pack: () => "ce62ad8f961659fd0f926ef62c3463ae7aefa972b86660e6c0f3e3f0bab25ee6"
    };
    var pb = Mb(5587);

    function Vb(bb) {
      const wb = Object.prototype.hasOwnProperty.call(Hb, bb) ? Hb[bb]() : void 0;
      if (void 0 !== wb) return {
        sha256: wb,
        onMismatch: pb.B
      };
      throw new eb.j(`${bb} has no release digest, so this build refuses it`)
    }
  },
  37398: (bb, wb, Mb) => {
    Mb.d(wb, {
      b: () => eb,
      d: () => pb,
      h: () => lb,
      k: () => Vb,
      o: () => Hb
    });
    const eb = /^alloc_failed (\d+) bytes$/;

    function Hb(bb, wb) {
      return pb(bb, wb) ? `trap=alloc_failed ${wb} bytes` : `trap=${bb}`
    }

    function pb(bb, wb) {
      return "unreachable" === bb && wb > 0
    }

    function Vb(bb, wb, Mb) {
      const eb = function(bb) {
        return bb instanceof WebAssembly.RuntimeError ? /unreachable/i.test(bb.message) ? "unreachable" : /out of bounds/i.test(bb.message) ? "out_of_bounds" : "runtime_error" : (bb instanceof RangeError || bb instanceof Error && "InternalError" === bb.name) && /call stack|recursion/i.test(bb.message) ? "stack_overflow" : "js_error"
      }(bb);
      if ("unreachable" !== eb) return {
        kind: eb,
        panic: null,
        refusedBytes: 0
      };
      const Hb = wb(),
        pb = Mb();
      return {
        kind: eb,
        panic: pb > 0 ? null : Hb,
        refusedBytes: pb
      }
    }
    const gb = 300;

    function lb(bb) {
      return bb.replace(/\s*\n\s*/g, " / ").slice(0, gb)
    }
  }
};
Object.freeze(modules);
for (const bb in modules) Object.freeze(modules[bb]);