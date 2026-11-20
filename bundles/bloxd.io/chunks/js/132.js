export const id = 132;
export const ids = [132];
export const modules = {
  36019: (kk, Fk, Bk) => {
    Bk.d(Fk, {
      e: () => Xk,
      f: () => ak,
      j: () => wk
    });
    var Rk = Bk(36011);
    const tk = /wasm-function\[\d+\]|wasm:\/\/|\[wasm code\]/;

    function ak(kk) {
      if (kk instanceof WebAssembly.RuntimeError) return !0;
      const Fk = kk instanceof Error ? kk.stack : void 0;
      return "string" === typeof Fk && tk.test(Fk)
    }

    function Xk(kk, Fk, Bk) {
      var ak;
      const Xk = kk instanceof Error ? kk.name : "thrown",
        bk = (kk instanceof Error && null !== (ak = kk.stack) && void 0 !== ak ? ak : "").split("\n").filter((kk => tk.test(kk))).slice(0, 8).map((kk => kk.trim())),
        wk = null === Fk ? "wasm memory unknown" : `wasm memory ${Math.round(Fk/2**20)} MB`,
        dk = null === Bk.panic ? "" : `, panic: ${(0,Rk.g)(Bk.panic)}`,
        sk = `${Xk}: ${kk instanceof Error?kk.message:String(kk)}`;
      return `${(0,Rk.n)(Bk.kind,Bk.refusedBytes)} ${sk} (${wk})${dk}${bk.length>0?` | ${bk.join(" < ")}`:""}`
    }
    const bk = 500;

    function wk(kk) {
      let Fk = "[object Object]";
      try {
        Fk = String(kk)
      } catch {}
      if ("[object Object]" !== Fk) return Fk;
      try {
        var Bk, Rk;
        return null !== (Bk = null === (Rk = JSON.stringify(kk)) || void 0 === Rk ? void 0 : Rk.slice(0, bk)) && void 0 !== Bk ? Bk : Fk
      } catch {
        return Fk
      }
    }
  },
  36046: (kk, Fk, Bk) => {
    Bk.d(Fk, {
      c: () => Nk,
      d: () => Mk,
      f: () => Sk
    });
    var Rk = Bk(3502),
      tk = Bk(3508),
      ak = Bk(6325),
      Xk = Bk(4425),
      bk = Bk(3506);
    const wk = ".zst.bin",
      dk = Reflect.apply,
      sk = ArrayBuffer,
      Vk = "undefined" === typeof Response ? void 0 : Response,
      Jk = "undefined" === typeof ReadableStream ? void 0 : ReadableStream,
      Ak = function() {
        let kk;
        void 0 !== Jk && new Jk({
          __proto__: null,
          start(Fk) {
            const {
              enqueue: Bk,
              close: Rk,
              error: tk
            } = Object.getPrototypeOf(Fk);
            kk = {
              enqueue: Bk,
              close: Rk,
              error: tk
            }
          }
        }, {
          __proto__: null
        });
        return kk
      }(),
      ek = function() {
        try {
          return "undefined" !== typeof WebAssembly && "function" === typeof WebAssembly.compileStreaming && void 0 !== Ak && (0, Xk.j)(Vk, "Response", !0) && (0, Xk.j)(Jk, "ReadableStream", !0) && (0, Xk.j)(Ak.enqueue, "enqueue") && (0, Xk.j)(Ak.close, "close") && (0, Xk.j)(Ak.error, "error") && (0, Xk.j)(bk.cb, "body") && (0, Xk.j)(bk.R, "getReader") && (0, Xk.j)(bk._, "read")
        } catch {
          return !1
        }
      }();
    let yk = !1;

    function fk(kk) {
      for (const Fk of "bloxd_wasm_webgpu:4998106,bloxd_wasm_webgl:5289277,bloxd_wasm_webgl1:4758837,bloxd_wasm_workers:196044,bloxd_wasm_models:311680,bloxd_wasm_client:3667712"?.split(",") ?? []) {
        const [Bk, Rk] = Fk.split(":");
        if (Bk === kk) {
          const kk = Number(Rk);
          return Number.isInteger(kk) && kk > 0 ? kk : void 0
        }
      }
    }

    function mk(kk, Fk) {
      let Rk = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
      const ak = function(kk) {
        const Fk = fk(kk.name);
        if (void 0 !== Fk && ek && !yk) return {
          href: `${kk.url().href}${wk}`,
          length: Fk
        }
      }(kk);
      return void 0 !== ak ? async function(kk, Fk, Rk, ak) {
        let {
          href: Xk,
          length: wk
        } = Fk;
        try {
          return await (0, bk.hb)(Xk, ((kk, Fk, ak) => async function(kk, Fk, Rk, ak, Xk, wk) {
            const ek = new sk(Fk);
            let fk;
            vk ??= (0, bk.Y)(Bk.e(64).then((() => Bk(40615))));
            try {
              fk = await fetch(kk, {
                signal: Rk
              })
            } catch (Gk) {
              throw new Error(`Fetching ${kk} failed: ${Yk(Gk)}`)
            }
            const {
              ok: mk,
              status: Wk,
              body: Lk
            } = function(kk, Fk) {
              try {
                const {
                  ok: kk,
                  status: Bk
                } = Fk;
                return {
                  ok: kk,
                  status: Bk,
                  body: dk(bk.cb, Fk, [])
                }
              } catch {
                throw new Error(`${kk} came in a response a page script made`)
              }
            }(kk, fk);
            if (!mk) throw new Error(`Fetching ${kk} failed: HTTP ${Wk}`);
            ak();
            const {
              reader: Ok,
              controller: Ek,
              compiled: Sk
            } = function(kk, Fk) {
              let Bk;
              try {
                let kk;
                Bk = dk(bk.R, Fk, []);
                const Rk = new Jk({
                    __proto__: null,
                    start(Fk) {
                      kk = Fk
                    }
                  }, {
                    __proto__: null
                  }),
                  tk = new Vk(Rk, {
                    __proto__: null,
                    headers: {
                      __proto__: null,
                      "Content-Type": "application/wasm"
                    }
                  });
                return {
                  reader: Bk,
                  controller: kk,
                  compiled: (0, bk.Y)((0, bk.D)((0, bk.kb)(tk)))
                }
              } catch (Gk) {
                throw void 0 !== Bk && ik(Bk), new Error(`${kk} could not be streamed into a compile: ${Yk(Gk)}`)
              }
            }(kk, Lk), {
              enqueue: Nk,
              close: Hk,
              error: uk
            } = Ak, Mk = kk => {
              try {
                dk(uk, Ek, [kk])
              } catch {} finally {
                ik(Ok)
              }
            };
            Rk.addEventListener("abort", (() => {
              Mk(new Error(`${kk} stalled`))
            }), {
              once: !0
            });
            let gk = !1;
            (0, tk.r)(Sk, (() => {}), (() => {
              gk = !0, ik(Ok)
            }));
            let Uk = 0;
            try {
              let Bk;
              try {
                Bk = await vk
              } catch (Gk) {
                throw yk = !0, new Error(`The zstd decoder did not load: ${Yk(Gk)}`)
              }
              const {
                ZstdFrameDecoder: Rk
              } = Bk, tk = new Rk(Fk);
              for (; !tk.done && !gk;) {
                let Fk;
                try {
                  Fk = await dk(bk._, Ok, [])
                } catch (Gk) {
                  throw new Error(`Downloading ${kk} failed: ${Yk(Gk)}`)
                }
                if (Fk.done || gk) break;
                ak();
                try {
                  tk.push(Fk.value)
                } catch (Gk) {
                  throw new Error(`${kk} did not decode: ${Yk(Gk)}`)
                }
                const {
                  output: Bk,
                  decoded: Rk
                } = tk;
                if (null !== Bk && Rk !== Uk) {
                  dk(bk.eb, new bk.n(ek), [Bk.subarray(Uk, Rk), Uk]);
                  try {
                    dk(Nk, Ek, [new bk.n(ek, Uk, Rk - Uk)])
                  } catch {
                    gk = !0
                  }
                  Uk = Rk
                }
              }
              if (Xk(), gk) throw await Sk, new Error(`${kk}'s compile stopped reading before its end`);
              if (!tk.done) throw new Error(`${kk} ended before its module did`);
              ik(Ok);
              try {
                dk(Hk, Ek, [])
              } catch {}
            } catch (Gk) {
              throw Mk(Gk), Gk
            }
            const ck = await Sk;
            void 0 !== wk && await (0, bk.A)(kk, new bk.n(ek), {
              sha256: wk.sha256,
              onMismatch: () => {}
            });
            return ck
          }(Xk, wk, kk, Fk, ak, Rk)))
        } catch (fk) {
          console.warn(`${Yk(fk)}: loading ${kk.href} instead`)
        }
        const ek = await (0, bk.J)(kk, Rk, {
          ...ak,
          hideThen: !0
        });
        return ek
      }(kk.url(), ak, Fk, Rk): Wk(kk, Fk, Rk)
    }

    function Wk(kk, Fk, Bk) {
      return (0, bk.J)(kk.url(), Fk, {
        ...Bk,
        hideThen: void 0 !== fk(kk.name)
      })
    }
    let vk = null;

    function ik(kk) {
      try {
        (0, bk.Y)(kk.cancel())
      } catch {}
    }

    function Yk(kk) {
      return kk instanceof Error ? kk.message : String(kk)
    }
    let Lk = null,
      Ok = !1;
    const Ek = new Map;

    function Sk(kk, Fk, Bk) {
      return null === Lk ? Lk = Hk(kk, Fk) : kk !== Lk.build ? console.warn(`Bloxd wasm: ${kk.name} was asked for after ${Lk.build.name} started loading, which this thread keeps`) : Fk.name !== Lk.workers.name && console.warn(`Bloxd wasm: ${Fk.name} was asked for workers after ${Lk.workers.name}, which this thread keeps`), Bk?.reloadFailedDownload && !Ok && (0, Rk.X)() && (Ok = !0, Lk = Hk(Lk.build, Lk.workers)), Lk.loaded
    }

    function Nk(kk, Fk) {
      if (null !== Lk) return (0, tk.e)([]);
      const Bk = kk.filter((kk => !Ek.has(kk.name))).map((kk => {
        const Bk = new AbortController,
          Rk = {
            compiled: Wk(kk, (0, ak.d)(kk.name), {
              priority: Fk,
              yB: Bk.signal,
              onDownloaded: () => {
                Rk.downloaded = !0
              },
              retries: {
                onRetry: () => {
                  Rk.downloaded = !1, null !== Lk && Bk.abort()
                }
              }
            }),
            cancel: Bk,
            downloaded: !1
          };
        return Ek.set(kk.name, Rk), (0, tk.f)((Fk => {
          (0, tk.r)(Rk.compiled, (() => {
            Rk.downloaded = !0, Fk()
          }), (Rk => {
            Bk.signal.aborted || console.warn(`Bloxd wasm: ${kk.name}'s compile ahead of the load failed: the load compiles it afresh`, Rk), Fk()
          }))
        }))
      }));
      return (0, tk.e)(Bk)
    }

    function Hk(kk, Fk) {
      const Bk = (0, Rk.E)((async () => {
        (0, Xk.x)();
        const Bk = uk(kk),
          Rk = Fk.name === kk.name ? Bk : uk(Fk);
        for (const {
            cancel: kk
          }
          of Ek.values()) kk.abort();
        Ek.clear(), await (0, tk.e)([Bk, Rk]);
        const ak = await Bk,
          bk = await Rk;
        return (0, Xk.x)(), {
          module: ak,
          workerModule: bk
        }
      }), kk);
      return {
        build: kk,
        workers: Fk,
        loaded: Bk
      }
    }

    function uk(kk) {
      const Fk = Ek.get(kk.name);
      return Fk?.downloaded ? (Ek.delete(kk.name), (0, tk.f)(((Bk, Rk) => {
        (0, tk.r)(Fk.compiled, Bk, (() => {
          (0, tk.r)(gk(kk), Bk, Rk)
        }))
      }))) : gk(kk)
    }
    async function Mk(kk, Fk) {
      return gk(kk, {
        retries: Fk
      })
    }

    function gk(kk) {
      let Fk = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
      return mk(kk, (0, ak.d)(kk.name), Fk)
    }
  },
  6325: (kk, Fk, Bk) => {
    Bk.d(Fk, {
      d: () => Xk
    });
    var Rk = Bk(3506);
    const tk = {
      bloxd_wasm: () => "0a084eabef9950ab2a7e71c5d9de42289fbfae2d87a10d8ea83b0d640034d04e",
      bloxd_wasm_client: () => "670064b0efa28d20ee2652f560d980392b14b8f575d78dbc148a398783212dd9",
      bloxd_wasm_workers: () => "e54ffb745a3a64b4eff08d3acff88bafa819b4a1d24982975989975b8c465d7c",
      bloxd_wasm_models: () => "3510593bc144c34047bb046244d4f79681313b64dc4db62f262e4940cf2ac935",
      bloxd_wasm_webgpu: () => "7227c7fb095ae833899f1bc6083c6fd008f81638c2024bb597f02a7221b8b9f3",
      bloxd_wasm_webgl: () => "5973cccff624afdd2d9ac129d6f0410128c5eb760d9c1d374fcacade730af5c8",
      bloxd_wasm_webgl1: () => "2ea465bc1bd601e27e7b5fa0838d1029260ab0f8117b76b80379a1022f1bc97f",
      bloxd_wasm_replay: () => "5250a6be4ccaa643dd55bed731d226b43b001447adaac84ccb3f3d6e643166e0",
      bloxd_wasm_recorder: () => "c25abb16c2b998f3635848bcd240bb48a3dcf3a54feacc8db2b427a87519c394",
      bloxd_wasm_anim: () => "f47375bb802972bde149d1e0bb1d06c729d525fa6881c46c5ac4757224208b36",
      bloxd_wasm_textures: () => "a81b39f82de7af92548359d4ee9d763c26ee7b3342018c2571590a49dd51e093",
      bloxd_wasm_shader_pack: () => "b47f8831d78bff4de588686f88a8db44a0115f8cadda219f585be50545eff9c2"
    };
    var ak = Bk(4425);

    function Xk(kk) {
      const Fk = Object.prototype.hasOwnProperty.call(tk, kk) ? tk[kk]() : void 0;
      if (void 0 !== Fk) return {
        sha256: Fk,
        onMismatch: ak.v
      };
      throw new Rk.k(`${kk} has no release digest, so this build refuses it`)
    }
  },
  36011: (kk, Fk, Bk) => {
    Bk.d(Fk, {
      c: () => Rk,
      e: () => ak,
      g: () => wk,
      j: () => Xk,
      n: () => tk
    });
    const Rk = /^alloc_failed (\d+) bytes$/;

    function tk(kk, Fk) {
      return ak(kk, Fk) ? `trap=alloc_failed ${Fk} bytes` : `trap=${kk}`
    }

    function ak(kk, Fk) {
      return "unreachable" === kk && Fk > 0
    }

    function Xk(kk, Fk, Bk) {
      const Rk = function(kk) {
        return kk instanceof WebAssembly.RuntimeError ? /unreachable/i.test(kk.message) ? "unreachable" : /out of bounds/i.test(kk.message) ? "out_of_bounds" : "runtime_error" : (kk instanceof RangeError || kk instanceof Error && "InternalError" === kk.name) && /call stack|recursion/i.test(kk.message) ? "stack_overflow" : "js_error"
      }(kk);
      if ("unreachable" !== Rk) return {
        kind: Rk,
        panic: null,
        refusedBytes: 0
      };
      const tk = Fk(),
        ak = Bk();
      return {
        kind: Rk,
        panic: ak > 0 ? null : tk,
        refusedBytes: ak
      }
    }
    const bk = 300;

    function wk(kk) {
      return kk.replace(/\s*\n\s*/g, " / ").slice(0, bk)
    }
  }
};
Object.freeze(modules);
for (const kk in modules) Object.freeze(modules[kk]);