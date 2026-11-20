export const id = 132;
export const ids = [132];
export const modules = {
  35745: (bb, ab, Ub) => {
    Ub.d(ab, {
      c: () => Eb,
      d: () => Tb,
      e: () => Bb
    });
    var Ab = Ub(35739);
    const Mb = /wasm-function\[\d+\]|wasm:\/\/|\[wasm code\]/;

    function Tb(bb) {
      if (bb instanceof WebAssembly.RuntimeError) return !0;
      const ab = bb instanceof Error ? bb.stack : void 0;
      return "string" === typeof ab && Mb.test(ab)
    }

    function Eb(bb, ab, Ub) {
      var Tb;
      const Eb = bb instanceof Error ? bb.name : "thrown",
        Yb = (bb instanceof Error && null !== (Tb = bb.stack) && void 0 !== Tb ? Tb : "").split("\n").filter((bb => Mb.test(bb))).slice(0, 8).map((bb => bb.trim())),
        Bb = null === ab ? "wasm memory unknown" : `wasm memory ${Math.round(ab/2**20)} MB`,
        eb = null === Ub.panic ? "" : `, panic: ${(0,Ab.f)(Ub.panic)}`,
        vb = `${Eb}: ${bb instanceof Error?bb.message:String(bb)}`;
      return `${(0,Ab.i)(Ub.kind,Ub.refusedBytes)} ${vb} (${Bb})${eb}${Yb.length>0?` | ${Yb.join(" < ")}`:""}`
    }
    const Yb = 500;

    function Bb(bb) {
      let ab = "[object Object]";
      try {
        ab = String(bb)
      } catch {}
      if ("[object Object]" !== ab) return ab;
      try {
        var Ub, Ab;
        return null !== (Ub = null === (Ab = JSON.stringify(bb)) || void 0 === Ab ? void 0 : Ab.slice(0, Yb)) && void 0 !== Ub ? Ub : ab
      } catch {
        return ab
      }
    }
  },
  35776: (bb, ab, Ub) => {
    Ub.d(ab, {
      d: () => Nb,
      g: () => Ib,
      k: () => pb
    });
    var Ab = Ub(3376),
      Mb = Ub(3384),
      Tb = Ub(6251),
      Eb = Ub(4376),
      Yb = Ub(3382);
    const Bb = ".zst.bin",
      eb = Reflect.apply,
      vb = ArrayBuffer,
      Lb = "undefined" === typeof Response ? void 0 : Response,
      Pb = "undefined" === typeof ReadableStream ? void 0 : ReadableStream,
      Xb = function() {
        let bb;
        void 0 !== Pb && new Pb({
          __proto__: null,
          start(ab) {
            const {
              enqueue: Ub,
              close: Ab,
              error: Mb
            } = Object.getPrototypeOf(ab);
            bb = {
              enqueue: Ub,
              close: Ab,
              error: Mb
            }
          }
        }, {
          __proto__: null
        });
        return bb
      }(),
      jb = function() {
        try {
          return "undefined" !== typeof WebAssembly && "function" === typeof WebAssembly.compileStreaming && void 0 !== Xb && (0, Eb.m)(Lb, "Response", !0) && (0, Eb.m)(Pb, "ReadableStream", !0) && (0, Eb.m)(Xb.enqueue, "enqueue") && (0, Eb.m)(Xb.close, "close") && (0, Eb.m)(Xb.error, "error") && (0, Eb.m)(Yb.Y, "body") && (0, Eb.m)(Yb.K, "getReader") && (0, Eb.m)(Yb.X, "read")
        } catch {
          return !1
        }
      }();
    let Rb = !1;

    function kb(bb) {
      for (const ab of "bloxd_wasm_webgpu:4997811,bloxd_wasm_webgl:5288982,bloxd_wasm_webgl1:4758542,bloxd_wasm_workers:196044,bloxd_wasm_models:311680,bloxd_wasm_client:3667474"?.split(",") ?? []) {
        const [Ub, Ab] = ab.split(":");
        if (Ub === bb) {
          const bb = Number(Ab);
          return Number.isInteger(bb) && bb > 0 ? bb : void 0
        }
      }
    }

    function yb(bb, ab) {
      let Ab = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
      const Tb = function(bb) {
        const ab = kb(bb.name);
        if (void 0 !== ab && jb && !Rb) return {
          href: `${bb.url().href}${Bb}`,
          length: ab
        }
      }(bb);
      return void 0 !== Tb ? async function(bb, ab, Ab, Tb) {
        let {
          href: Eb,
          length: Bb
        } = ab;
        try {
          return await (0, Yb.eb)(Eb, ((bb, ab, Tb) => async function(bb, ab, Ab, Tb, Eb, Bb) {
            const jb = new vb(ab);
            let kb;
            Db ??= (0, Yb.U)(Ub.e(64).then((() => Ub(40278))));
            try {
              kb = await fetch(bb, {
                signal: Ab
              })
            } catch (Gb) {
              throw new Error(`Fetching ${bb} failed: ${xb(Gb)}`)
            }
            const {
              ok: yb,
              status: Zb,
              body: ib
            } = function(bb, ab) {
              try {
                const {
                  ok: bb,
                  status: Ub
                } = ab;
                return {
                  ok: bb,
                  status: Ub,
                  body: eb(Yb.Y, ab, [])
                }
              } catch {
                throw new Error(`${bb} came in a response a page script made`)
              }
            }(bb, kb);
            if (!yb) throw new Error(`Fetching ${bb} failed: HTTP ${Zb}`);
            Tb();
            const {
              reader: fb,
              controller: mb,
              compiled: pb
            } = function(bb, ab) {
              let Ub;
              try {
                let bb;
                Ub = eb(Yb.K, ab, []);
                const Ab = new Pb({
                    __proto__: null,
                    start(ab) {
                      bb = ab
                    }
                  }, {
                    __proto__: null
                  }),
                  Mb = new Lb(Ab, {
                    __proto__: null,
                    headers: {
                      __proto__: null,
                      "Content-Type": "application/wasm"
                    }
                  });
                return {
                  reader: Ub,
                  controller: bb,
                  compiled: (0, Yb.U)((0, Yb.s)((0, Yb.gb)(Mb)))
                }
              } catch (Gb) {
                throw void 0 !== Ub && zb(Ub), new Error(`${bb} could not be streamed into a compile: ${xb(Gb)}`)
              }
            }(bb, ib), {
              enqueue: Nb,
              close: Wb,
              error: Hb
            } = Xb, Ib = bb => {
              try {
                eb(Hb, mb, [bb])
              } catch {} finally {
                zb(fb)
              }
            };
            Ab.addEventListener("abort", (() => {
              Ib(new Error(`${bb} stalled`))
            }), {
              once: !0
            });
            let db = !1;
            (0, Mb.q)(pb, (() => {}), (() => {
              db = !0, zb(fb)
            }));
            let Fb = 0;
            try {
              let Ub;
              try {
                Ub = await Db
              } catch (Gb) {
                throw Rb = !0, new Error(`The zstd decoder did not load: ${xb(Gb)}`)
              }
              const {
                ZstdFrameDecoder: Ab
              } = Ub, Mb = new Ab(ab);
              for (; !Mb.done && !db;) {
                let ab;
                try {
                  ab = await eb(Yb.X, fb, [])
                } catch (Gb) {
                  throw new Error(`Downloading ${bb} failed: ${xb(Gb)}`)
                }
                if (ab.done || db) break;
                Tb();
                try {
                  Mb.push(ab.value)
                } catch (Gb) {
                  throw new Error(`${bb} did not decode: ${xb(Gb)}`)
                }
                const {
                  output: Ub,
                  decoded: Ab
                } = Mb;
                if (null !== Ub && Ab !== Fb) {
                  eb(Yb.ab, new Yb.h(jb), [Ub.subarray(Fb, Ab), Fb]);
                  try {
                    eb(Nb, mb, [new Yb.h(jb, Fb, Ab - Fb)])
                  } catch {
                    db = !0
                  }
                  Fb = Ab
                }
              }
              if (Eb(), db) throw await pb, new Error(`${bb}'s compile stopped reading before its end`);
              if (!Mb.done) throw new Error(`${bb} ended before its module did`);
              zb(fb);
              try {
                eb(Wb, mb, [])
              } catch {}
            } catch (Gb) {
              throw Ib(Gb), Gb
            }
            const hb = await pb;
            void 0 !== Bb && await (0, Yb.q)(bb, new Yb.h(jb), {
              sha256: Bb.sha256,
              onMismatch: () => {}
            });
            return hb
          }(Eb, Bb, bb, ab, Tb, Ab)))
        } catch (kb) {
          console.warn(`${xb(kb)}: loading ${bb.href} instead`)
        }
        const jb = await (0, Yb.A)(bb, Ab, {
          ...Tb,
          hideThen: !0
        });
        return jb
      }(bb.url(), Tb, ab, Ab): Zb(bb, ab, Ab)
    }

    function Zb(bb, ab, Ub) {
      return (0, Yb.A)(bb.url(), ab, {
        ...Ub,
        hideThen: void 0 !== kb(bb.name)
      })
    }
    let Db = null;

    function zb(bb) {
      try {
        (0, Yb.U)(bb.cancel())
      } catch {}
    }

    function xb(bb) {
      return bb instanceof Error ? bb.message : String(bb)
    }
    let ib = null,
      fb = !1;
    const mb = new Map;

    function pb(bb, ab, Ub) {
      return null === ib ? ib = Wb(bb, ab) : bb !== ib.build ? console.warn(`Bloxd wasm: ${bb.name} was asked for after ${ib.build.name} started loading, which this thread keeps`) : ab.name !== ib.workers.name && console.warn(`Bloxd wasm: ${ab.name} was asked for workers after ${ib.workers.name}, which this thread keeps`), Ub?.reloadFailedDownload && !fb && (0, Ab.R)() && (fb = !0, ib = Wb(ib.build, ib.workers)), ib.loaded
    }

    function Nb(bb, ab) {
      if (null !== ib) return (0, Mb.e)([]);
      const Ub = bb.filter((bb => !mb.has(bb.name))).map((bb => {
        const Ub = new AbortController,
          Ab = {
            compiled: Zb(bb, (0, Tb.b)(bb.name), {
              priority: ab,
              xU: Ub.signal,
              onDownloaded: () => {
                Ab.downloaded = !0
              },
              retries: {
                onRetry: () => {
                  Ab.downloaded = !1, null !== ib && Ub.abort()
                }
              }
            }),
            cancel: Ub,
            downloaded: !1
          };
        return mb.set(bb.name, Ab), (0, Mb.g)((ab => {
          (0, Mb.q)(Ab.compiled, (() => {
            Ab.downloaded = !0, ab()
          }), (Ab => {
            Ub.signal.aborted || console.warn(`Bloxd wasm: ${bb.name}'s compile ahead of the load failed: the load compiles it afresh`, Ab), ab()
          }))
        }))
      }));
      return (0, Mb.e)(Ub)
    }

    function Wb(bb, ab) {
      const Ub = (0, Ab.D)((async () => {
        (0, Eb.I)();
        const Ub = Hb(bb),
          Ab = ab.name === bb.name ? Ub : Hb(ab);
        for (const {
            cancel: bb
          }
          of mb.values()) bb.abort();
        mb.clear(), await (0, Mb.e)([Ub, Ab]);
        const Tb = await Ub,
          Yb = await Ab;
        return (0, Eb.I)(), {
          module: Tb,
          workerModule: Yb
        }
      }), bb);
      return {
        build: bb,
        workers: ab,
        loaded: Ub
      }
    }

    function Hb(bb) {
      const ab = mb.get(bb.name);
      return ab?.downloaded ? (mb.delete(bb.name), (0, Mb.g)(((Ub, Ab) => {
        (0, Mb.q)(ab.compiled, Ub, (() => {
          (0, Mb.q)(db(bb), Ub, Ab)
        }))
      }))) : db(bb)
    }
    async function Ib(bb, ab) {
      return db(bb, {
        retries: ab
      })
    }

    function db(bb) {
      let ab = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
      return yb(bb, (0, Tb.b)(bb.name), ab)
    }
  },
  6251: (bb, ab, Ub) => {
    Ub.d(ab, {
      b: () => Eb
    });
    var Ab = Ub(3382);
    const Mb = {
      bloxd_wasm: () => "df1b903500ac83f65c5a12ae0334be78271c1261b3baef97884984177efc2869",
      bloxd_wasm_client: () => "ddba43704f4b51c2b9b5e92ffcaa509732e889b3b53b6c1830f73369267affe0",
      bloxd_wasm_workers: () => "668b24c55828dde98b17e59e8893929e323d32ef04dadc3f78b9ac5e28cbde92",
      bloxd_wasm_models: () => "8a1b9cd4204a64965dd8d06b574b18326dae4bff2cae212232f2bf0705ec3afc",
      bloxd_wasm_webgpu: () => "ab3a793e0fd1809915590d6cda9fe854833ed761936844d9006f3c2d1762ce81",
      bloxd_wasm_webgl: () => "8ae04686ca2b26d1c6c479775a829553f69bef25b7a02fb3caee127c21b6eadf",
      bloxd_wasm_webgl1: () => "f0ec2aa440ca05962fee255848703e54bf0da446fc7ef678f36cbb27fe626abf",
      bloxd_wasm_replay: () => "193eaac7b48b77e013cff0f1dcf90bc00cce15c5f029d1e2198b0dd324467273",
      bloxd_wasm_recorder: () => "d22122b8d2df98b8030d0fd0125ea9d4ed0bd919d0989f19e5b6bdcdf9376225",
      bloxd_wasm_anim: () => "b62ffaebae3ed7e68aaa528dd187235246f0fe0bdb4702b8d0334196ae51d05b",
      bloxd_wasm_textures: () => "fc6c03ba22ccf00e54dfe8ca9b3a0ef2dfd30c3397e1fc7ceac769892957ec5f",
      bloxd_wasm_shader_pack: () => "8381e40a377cb85dbad2bcff788fc083a71f4231d6c775dad91a853065eff4fe"
    };
    var Tb = Ub(4376);

    function Eb(bb) {
      const ab = Object.prototype.hasOwnProperty.call(Mb, bb) ? Mb[bb]() : void 0;
      if (void 0 !== ab) return {
        sha256: ab,
        onMismatch: Tb.G
      };
      throw new Ab.f(`${bb} has no release digest, so this build refuses it`)
    }
  },
  35739: (bb, ab, Ub) => {
    Ub.d(ab, {
      b: () => Ab,
      e: () => Tb,
      f: () => Bb,
      h: () => Eb,
      i: () => Mb
    });
    const Ab = /^alloc_failed (\d+) bytes$/;

    function Mb(bb, ab) {
      return Tb(bb, ab) ? `trap=alloc_failed ${ab} bytes` : `trap=${bb}`
    }

    function Tb(bb, ab) {
      return "unreachable" === bb && ab > 0
    }

    function Eb(bb, ab, Ub) {
      const Ab = function(bb) {
        return bb instanceof WebAssembly.RuntimeError ? /unreachable/i.test(bb.message) ? "unreachable" : /out of bounds/i.test(bb.message) ? "out_of_bounds" : "runtime_error" : (bb instanceof RangeError || bb instanceof Error && "InternalError" === bb.name) && /call stack|recursion/i.test(bb.message) ? "stack_overflow" : "js_error"
      }(bb);
      if ("unreachable" !== Ab) return {
        kind: Ab,
        panic: null,
        refusedBytes: 0
      };
      const Mb = ab(),
        Tb = Ub();
      return {
        kind: Ab,
        panic: Tb > 0 ? null : Mb,
        refusedBytes: Tb
      }
    }
    const Yb = 300;

    function Bb(bb) {
      return bb.replace(/\s*\n\s*/g, " / ").slice(0, Yb)
    }
  }
};
Object.freeze(modules);
for (const bb in modules) Object.freeze(modules[bb]);