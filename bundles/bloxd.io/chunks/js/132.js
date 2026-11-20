export const id = 132;
export const ids = [132];
export const modules = {
  35945: (bb, cb, sb) => {
    sb.d(cb, {
      d: () => Tb,
      g: () => ab,
      h: () => Ib
    });
    var kb = sb(35941);
    const Wb = /wasm-function\[\d+\]|wasm:\/\/|\[wasm code\]/;

    function ab(bb) {
      if (bb instanceof WebAssembly.RuntimeError) return !0;
      const cb = bb instanceof Error ? bb.stack : void 0;
      return "string" === typeof cb && Wb.test(cb)
    }

    function Tb(bb, cb, sb) {
      var ab;
      const Tb = bb instanceof Error ? bb.name : "thrown",
        Ub = (bb instanceof Error && null !== (ab = bb.stack) && void 0 !== ab ? ab : "").split("\n").filter((bb => Wb.test(bb))).slice(0, 8).map((bb => bb.trim())),
        Ib = null === cb ? "wasm memory unknown" : `wasm memory ${Math.round(cb/2**20)} MB`,
        Hb = null === sb.panic ? "" : `, panic: ${(0,kb.k)(sb.panic)}`,
        fb = `${Tb}: ${bb instanceof Error?bb.message:String(bb)}`;
      return `${(0,kb.p)(sb.kind,sb.refusedBytes)} ${fb} (${Ib})${Hb}${Ub.length>0?` | ${Ub.join(" < ")}`:""}`
    }
    const Ub = 500;

    function Ib(bb) {
      let cb = "[object Object]";
      try {
        cb = String(bb)
      } catch {}
      if ("[object Object]" !== cb) return cb;
      try {
        var sb, kb;
        return null !== (sb = null === (kb = JSON.stringify(bb)) || void 0 === kb ? void 0 : kb.slice(0, Ub)) && void 0 !== sb ? sb : cb
      } catch {
        return cb
      }
    }
  },
  35976: (bb, cb, sb) => {
    sb.d(cb, {
      b: () => gb,
      f: () => yb,
      j: () => Jb
    });
    var kb = sb(3500),
      Wb = sb(3511),
      ab = sb(6285),
      Tb = sb(4425),
      Ub = sb(3505);
    const Ib = ".zst.bin",
      Hb = Reflect.apply,
      fb = ArrayBuffer,
      Mb = "undefined" === typeof Response ? void 0 : Response,
      Xb = "undefined" === typeof ReadableStream ? void 0 : ReadableStream,
      nb = function() {
        let bb;
        void 0 !== Xb && new Xb({
          __proto__: null,
          start(cb) {
            const {
              enqueue: sb,
              close: kb,
              error: Wb
            } = Object.getPrototypeOf(cb);
            bb = {
              enqueue: sb,
              close: kb,
              error: Wb
            }
          }
        }, {
          __proto__: null
        });
        return bb
      }(),
      mb = function() {
        try {
          return "undefined" !== typeof WebAssembly && "function" === typeof WebAssembly.compileStreaming && void 0 !== nb && (0, Tb.j)(Mb, "Response", !0) && (0, Tb.j)(Xb, "ReadableStream", !0) && (0, Tb.j)(nb.enqueue, "enqueue") && (0, Tb.j)(nb.close, "close") && (0, Tb.j)(nb.error, "error") && (0, Tb.j)(Ub.S, "body") && (0, Tb.j)(Ub.F, "getReader") && (0, Tb.j)(Ub.O, "read")
        } catch {
          return !1
        }
      }();
    let lb = !1;

    function Qb(bb) {
      for (const cb of "bloxd_wasm_webgpu:4997811,bloxd_wasm_webgl:5288982,bloxd_wasm_webgl1:4758542,bloxd_wasm_workers:196044,bloxd_wasm_models:311680,bloxd_wasm_client:3667474"?.split(",") ?? []) {
        const [sb, kb] = cb.split(":");
        if (sb === bb) {
          const bb = Number(kb);
          return Number.isInteger(bb) && bb > 0 ? bb : void 0
        }
      }
    }

    function eb(bb, cb) {
      let kb = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
      const ab = function(bb) {
        const cb = Qb(bb.name);
        if (void 0 !== cb && mb && !lb) return {
          href: `${bb.url().href}${Ib}`,
          length: cb
        }
      }(bb);
      return void 0 !== ab ? async function(bb, cb, kb, ab) {
        let {
          href: Tb,
          length: Ib
        } = cb;
        try {
          return await (0, Ub.X)(Tb, ((bb, cb, ab) => async function(bb, cb, kb, ab, Tb, Ib) {
            const mb = new fb(cb);
            let Qb;
            Nb ??= (0, Ub.N)(sb.e(64).then((() => sb(40600))));
            try {
              Qb = await fetch(bb, {
                signal: kb
              })
            } catch (ib) {
              throw new Error(`Fetching ${bb} failed: ${Lb(ib)}`)
            }
            const {
              ok: eb,
              status: Cb,
              body: ub
            } = function(bb, cb) {
              try {
                const {
                  ok: bb,
                  status: sb
                } = cb;
                return {
                  ok: bb,
                  status: sb,
                  body: Hb(Ub.S, cb, [])
                }
              } catch {
                throw new Error(`${bb} came in a response a page script made`)
              }
            }(bb, Qb);
            if (!eb) throw new Error(`Fetching ${bb} failed: HTTP ${Cb}`);
            ab();
            const {
              reader: Yb,
              controller: hb,
              compiled: Jb
            } = function(bb, cb) {
              let sb;
              try {
                let bb;
                sb = Hb(Ub.F, cb, []);
                const kb = new Xb({
                    __proto__: null,
                    start(cb) {
                      bb = cb
                    }
                  }, {
                    __proto__: null
                  }),
                  Wb = new Mb(kb, {
                    __proto__: null,
                    headers: {
                      __proto__: null,
                      "Content-Type": "application/wasm"
                    }
                  });
                return {
                  reader: sb,
                  controller: bb,
                  compiled: (0, Ub.N)((0, Ub.w)((0, Ub._)(Wb)))
                }
              } catch (ib) {
                throw void 0 !== sb && Vb(sb), new Error(`${bb} could not be streamed into a compile: ${Lb(ib)}`)
              }
            }(bb, ub), {
              enqueue: gb,
              close: Bb,
              error: tb
            } = nb, yb = bb => {
              try {
                Hb(tb, hb, [bb])
              } catch {} finally {
                Vb(Yb)
              }
            };
            kb.addEventListener("abort", (() => {
              yb(new Error(`${bb} stalled`))
            }), {
              once: !0
            });
            let Pb = !1;
            (0, Wb.k)(Jb, (() => {}), (() => {
              Pb = !0, Vb(Yb)
            }));
            let Db = 0;
            try {
              let sb;
              try {
                sb = await Nb
              } catch (ib) {
                throw lb = !0, new Error(`The zstd decoder did not load: ${Lb(ib)}`)
              }
              const {
                ZstdFrameDecoder: kb
              } = sb, Wb = new kb(cb);
              for (; !Wb.done && !Pb;) {
                let cb;
                try {
                  cb = await Hb(Ub.O, Yb, [])
                } catch (ib) {
                  throw new Error(`Downloading ${bb} failed: ${Lb(ib)}`)
                }
                if (cb.done || Pb) break;
                ab();
                try {
                  Wb.push(cb.value)
                } catch (ib) {
                  throw new Error(`${bb} did not decode: ${Lb(ib)}`)
                }
                const {
                  output: sb,
                  decoded: kb
                } = Wb;
                if (null !== sb && kb !== Db) {
                  Hb(Ub.U, new Ub.m(mb), [sb.subarray(Db, kb), Db]);
                  try {
                    Hb(gb, hb, [new Ub.m(mb, Db, kb - Db)])
                  } catch {
                    Pb = !0
                  }
                  Db = kb
                }
              }
              if (Tb(), Pb) throw await Jb, new Error(`${bb}'s compile stopped reading before its end`);
              if (!Wb.done) throw new Error(`${bb} ended before its module did`);
              Vb(Yb);
              try {
                Hb(Bb, hb, [])
              } catch {}
            } catch (ib) {
              throw yb(ib), ib
            }
            const Eb = await Jb;
            void 0 !== Ib && await (0, Ub.t)(bb, new Ub.m(mb), {
              sha256: Ib.sha256,
              onMismatch: () => {}
            });
            return Eb
          }(Tb, Ib, bb, cb, ab, kb)))
        } catch (Qb) {
          console.warn(`${Lb(Qb)}: loading ${bb.href} instead`)
        }
        const mb = await (0, Ub.A)(bb, kb, {
          ...ab,
          hideThen: !0
        });
        return mb
      }(bb.url(), ab, cb, kb): Cb(bb, cb, kb)
    }

    function Cb(bb, cb, sb) {
      return (0, Ub.A)(bb.url(), cb, {
        ...sb,
        hideThen: void 0 !== Qb(bb.name)
      })
    }
    let Nb = null;

    function Vb(bb) {
      try {
        (0, Ub.N)(bb.cancel())
      } catch {}
    }

    function Lb(bb) {
      return bb instanceof Error ? bb.message : String(bb)
    }
    let ub = null,
      Yb = !1;
    const hb = new Map;

    function Jb(bb, cb, sb) {
      return null === ub ? ub = Bb(bb, cb) : bb !== ub.build ? console.warn(`Bloxd wasm: ${bb.name} was asked for after ${ub.build.name} started loading, which this thread keeps`) : cb.name !== ub.workers.name && console.warn(`Bloxd wasm: ${cb.name} was asked for workers after ${ub.workers.name}, which this thread keeps`), sb?.reloadFailedDownload && !Yb && (0, kb.X)() && (Yb = !0, ub = Bb(ub.build, ub.workers)), ub.loaded
    }

    function gb(bb, cb) {
      if (null !== ub) return (0, Wb.f)([]);
      const sb = bb.filter((bb => !hb.has(bb.name))).map((bb => {
        const sb = new AbortController,
          kb = {
            compiled: Cb(bb, (0, ab.d)(bb.name), {
              priority: cb,
              Gs: sb.signal,
              onDownloaded: () => {
                kb.downloaded = !0
              },
              retries: {
                onRetry: () => {
                  kb.downloaded = !1, null !== ub && sb.abort()
                }
              }
            }),
            cancel: sb,
            downloaded: !1
          };
        return hb.set(bb.name, kb), (0, Wb.g)((cb => {
          (0, Wb.k)(kb.compiled, (() => {
            kb.downloaded = !0, cb()
          }), (kb => {
            sb.signal.aborted || console.warn(`Bloxd wasm: ${bb.name}'s compile ahead of the load failed: the load compiles it afresh`, kb), cb()
          }))
        }))
      }));
      return (0, Wb.f)(sb)
    }

    function Bb(bb, cb) {
      const sb = (0, kb.J)((async () => {
        (0, Tb.v)();
        const sb = tb(bb),
          kb = cb.name === bb.name ? sb : tb(cb);
        for (const {
            cancel: bb
          }
          of hb.values()) bb.abort();
        hb.clear(), await (0, Wb.f)([sb, kb]);
        const ab = await sb,
          Ub = await kb;
        return (0, Tb.v)(), {
          module: ab,
          workerModule: Ub
        }
      }), bb);
      return {
        build: bb,
        workers: cb,
        loaded: sb
      }
    }

    function tb(bb) {
      const cb = hb.get(bb.name);
      return cb?.downloaded ? (hb.delete(bb.name), (0, Wb.g)(((sb, kb) => {
        (0, Wb.k)(cb.compiled, sb, (() => {
          (0, Wb.k)(Pb(bb), sb, kb)
        }))
      }))) : Pb(bb)
    }
    async function yb(bb, cb) {
      return Pb(bb, {
        retries: cb
      })
    }

    function Pb(bb) {
      let cb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
      return eb(bb, (0, ab.d)(bb.name), cb)
    }
  },
  6285: (bb, cb, sb) => {
    sb.d(cb, {
      d: () => Tb
    });
    var kb = sb(3505);
    const Wb = {
      bloxd_wasm: () => "f2deac3a95fa77a1cc5890e21cb7e030da96c92da9c75cfa932f9a05cc40aedf",
      bloxd_wasm_client: () => "c6edcc46054cb735afeff08b33217275937707f8ac70cb8b5c7fe62e431251e6",
      bloxd_wasm_workers: () => "ee974f129bda12a85ed082f9b65c9090670a876bf96b379c144444c65ae2556f",
      bloxd_wasm_models: () => "be9aa9cb71680943564eddd1ec021aeec179278909b015f5d2a33e60342d2293",
      bloxd_wasm_webgpu: () => "1222801256cc2a9e528e331282389fe7d62a604e5a30a57b7e6ca38c959a97ce",
      bloxd_wasm_webgl: () => "a247bd9c10bbe2122d8318fff093620ecc23a8410aefd142dee1eb8008d469d7",
      bloxd_wasm_webgl1: () => "0cd01e4687f9eeba42a0db9058b3cf081f0505bd121d0557c726f14a96fb53d3",
      bloxd_wasm_replay: () => "f83c21ccc0c7a81aefe9fb3e9a587eed0f5383826de96ef3a2a1c8e928043141",
      bloxd_wasm_recorder: () => "277aa1b73dae5d8884eae1750f1cf9d8f869748ec3475a6969370783baa9a02b",
      bloxd_wasm_anim: () => "f46cab251d1e83f32e96bf21fb33222f8a75cffb040d22ef03fa834808ad9e4a",
      bloxd_wasm_textures: () => "907026c21e1eb3ae09c055455f18b265720f79b678cb47985a1937fd2ee774bc",
      bloxd_wasm_shader_pack: () => "0e34d623eecc459030b0abc5924b121a8566443bf7626c416308af84f6e66a00"
    };
    var ab = sb(4425);

    function Tb(bb) {
      const cb = Object.prototype.hasOwnProperty.call(Wb, bb) ? Wb[bb]() : void 0;
      if (void 0 !== cb) return {
        sha256: cb,
        onMismatch: ab.u
      };
      throw new kb.j(`${bb} has no release digest, so this build refuses it`)
    }
  },
  35941: (bb, cb, sb) => {
    sb.d(cb, {
      c: () => kb,
      g: () => ab,
      k: () => Ib,
      m: () => Tb,
      p: () => Wb
    });
    const kb = /^alloc_failed (\d+) bytes$/;

    function Wb(bb, cb) {
      return ab(bb, cb) ? `trap=alloc_failed ${cb} bytes` : `trap=${bb}`
    }

    function ab(bb, cb) {
      return "unreachable" === bb && cb > 0
    }

    function Tb(bb, cb, sb) {
      const kb = function(bb) {
        return bb instanceof WebAssembly.RuntimeError ? /unreachable/i.test(bb.message) ? "unreachable" : /out of bounds/i.test(bb.message) ? "out_of_bounds" : "runtime_error" : (bb instanceof RangeError || bb instanceof Error && "InternalError" === bb.name) && /call stack|recursion/i.test(bb.message) ? "stack_overflow" : "js_error"
      }(bb);
      if ("unreachable" !== kb) return {
        kind: kb,
        panic: null,
        refusedBytes: 0
      };
      const Wb = cb(),
        ab = sb();
      return {
        kind: kb,
        panic: ab > 0 ? null : Wb,
        refusedBytes: ab
      }
    }
    const Ub = 300;

    function Ib(bb) {
      return bb.replace(/\s*\n\s*/g, " / ").slice(0, Ub)
    }
  }
};
Object.freeze(modules);
for (const bb in modules) Object.freeze(modules[bb]);