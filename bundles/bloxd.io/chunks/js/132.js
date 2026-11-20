export const id = 132;
export const ids = [132];
export const modules = {
  36176: (uu, Ru, yu) => {
    yu.d(Ru, {
      d: () => mu,
      g: () => Qu,
      k: () => Nu
    });
    var Eu = yu(36170);
    const Ku = /wasm-function\[\d+\]|wasm:\/\/|\[wasm code\]/;

    function Qu(uu) {
      if (uu instanceof WebAssembly.RuntimeError) return !0;
      const Ru = uu instanceof Error ? uu.stack : void 0;
      return "string" === typeof Ru && Ku.test(Ru)
    }

    function mu(uu, Ru, yu) {
      var Qu;
      const mu = uu instanceof Error ? uu.name : "thrown",
        Ju = (uu instanceof Error && null !== (Qu = uu.stack) && void 0 !== Qu ? Qu : "").split("\n").filter((uu => Ku.test(uu))).slice(0, 8).map((uu => uu.trim())),
        Nu = null === Ru ? "wasm memory unknown" : `wasm memory ${Math.round(Ru/2**20)} MB`,
        Xu = null === yu.panic ? "" : `, panic: ${(0,Eu.i)(yu.panic)}`,
        Vu = `${mu}: ${uu instanceof Error?uu.message:String(uu)}`;
      return `${(0,Eu.o)(yu.kind,yu.refusedBytes)} ${Vu} (${Nu})${Xu}${Ju.length>0?` | ${Ju.join(" < ")}`:""}`
    }
    const Ju = 500;

    function Nu(uu) {
      let Ru = "[object Object]";
      try {
        Ru = String(uu)
      } catch {}
      if ("[object Object]" !== Ru) return Ru;
      try {
        var yu, Eu;
        return null !== (yu = null === (Eu = JSON.stringify(uu)) || void 0 === Eu ? void 0 : Eu.slice(0, Ju)) && void 0 !== yu ? yu : Ru
      } catch {
        return Ru
      }
    }
  },
  36199: (uu, Ru, yu) => {
    yu.d(Ru, {
      d: () => Du,
      g: () => Gu,
      h: () => Au
    });
    var Eu = yu(3510),
      Ku = yu(3517),
      Qu = yu(6401),
      mu = yu(4470),
      Ju = yu(3514);
    const Nu = ".zst.bin",
      Xu = Reflect.apply,
      Vu = ArrayBuffer,
      ru = "undefined" === typeof Response ? void 0 : Response,
      Bu = "undefined" === typeof ReadableStream ? void 0 : ReadableStream,
      xu = function() {
        let uu;
        void 0 !== Bu && new Bu({
          __proto__: null,
          start(Ru) {
            const {
              enqueue: yu,
              close: Eu,
              error: Ku
            } = Object.getPrototypeOf(Ru);
            uu = {
              enqueue: yu,
              close: Eu,
              error: Ku
            }
          }
        }, {
          __proto__: null
        });
        return uu
      }(),
      Su = function() {
        try {
          return "undefined" !== typeof WebAssembly && "function" === typeof WebAssembly.compileStreaming && void 0 !== xu && (0, mu.h)(ru, "Response", !0) && (0, mu.h)(Bu, "ReadableStream", !0) && (0, mu.h)(xu.enqueue, "enqueue") && (0, mu.h)(xu.close, "close") && (0, mu.h)(xu.error, "error") && (0, mu.h)(Ju.$, "body") && (0, mu.h)(Ju.M, "getReader") && (0, mu.h)(Ju.X, "read")
        } catch {
          return !1
        }
      }();
    let pu = !1;

    function Tu(uu) {
      for (const Ru of "bloxd_wasm_webgpu:4998106,bloxd_wasm_webgl:5289277,bloxd_wasm_webgl1:4758837,bloxd_wasm_workers:196044,bloxd_wasm_models:311680,bloxd_wasm_client:3667712"?.split(",") ?? []) {
        const [yu, Eu] = Ru.split(":");
        if (yu === uu) {
          const uu = Number(Eu);
          return Number.isInteger(uu) && uu > 0 ? uu : void 0
        }
      }
    }

    function Wu(uu, Ru) {
      let Eu = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
      const Qu = function(uu) {
        const Ru = Tu(uu.name);
        if (void 0 !== Ru && Su && !pu) return {
          href: `${uu.url().href}${Nu}`,
          length: Ru
        }
      }(uu);
      return void 0 !== Qu ? async function(uu, Ru, Eu, Qu) {
        let {
          href: mu,
          length: Nu
        } = Ru;
        try {
          return await (0, Ju.db)(mu, ((uu, Ru, Qu) => async function(uu, Ru, Eu, Qu, mu, Nu) {
            const Su = new Vu(Ru);
            let Tu;
            Hu ??= (0, Ju.T)(yu.e(64).then((() => yu(40762))));
            try {
              Tu = await fetch(uu, {
                signal: Eu
              })
            } catch (tu) {
              throw new Error(`Fetching ${uu} failed: ${bu(tu)}`)
            }
            const {
              ok: Wu,
              status: ju,
              body: Cu
            } = function(uu, Ru) {
              try {
                const {
                  ok: uu,
                  status: yu
                } = Ru;
                return {
                  ok: uu,
                  status: yu,
                  body: Xu(Ju.$, Ru, [])
                }
              } catch {
                throw new Error(`${uu} came in a response a page script made`)
              }
            }(uu, Tu);
            if (!Wu) throw new Error(`Fetching ${uu} failed: HTTP ${ju}`);
            Qu();
            const {
              reader: ku,
              controller: eu,
              compiled: Au
            } = function(uu, Ru) {
              let yu;
              try {
                let uu;
                yu = Xu(Ju.M, Ru, []);
                const Eu = new Bu({
                    __proto__: null,
                    start(Ru) {
                      uu = Ru
                    }
                  }, {
                    __proto__: null
                  }),
                  Ku = new ru(Eu, {
                    __proto__: null,
                    headers: {
                      __proto__: null,
                      "Content-Type": "application/wasm"
                    }
                  });
                return {
                  reader: yu,
                  controller: uu,
                  compiled: (0, Ju.T)((0, Ju.y)((0, Ju.hb)(Ku)))
                }
              } catch (tu) {
                throw void 0 !== yu && du(yu), new Error(`${uu} could not be streamed into a compile: ${bu(tu)}`)
              }
            }(uu, Cu), {
              enqueue: Du,
              close: Mu,
              error: Iu
            } = xu, Gu = uu => {
              try {
                Xu(Iu, eu, [uu])
              } catch {} finally {
                du(ku)
              }
            };
            Eu.addEventListener("abort", (() => {
              Gu(new Error(`${uu} stalled`))
            }), {
              once: !0
            });
            let Uu = !1;
            (0, Ku.w)(Au, (() => {}), (() => {
              Uu = !0, du(ku)
            }));
            let nu = 0;
            try {
              let yu;
              try {
                yu = await Hu
              } catch (tu) {
                throw pu = !0, new Error(`The zstd decoder did not load: ${bu(tu)}`)
              }
              const {
                ZstdFrameDecoder: Eu
              } = yu, Ku = new Eu(Ru);
              for (; !Ku.done && !Uu;) {
                let Ru;
                try {
                  Ru = await Xu(Ju.X, ku, [])
                } catch (tu) {
                  throw new Error(`Downloading ${uu} failed: ${bu(tu)}`)
                }
                if (Ru.done || Uu) break;
                Qu();
                try {
                  Ku.push(Ru.value)
                } catch (tu) {
                  throw new Error(`${uu} did not decode: ${bu(tu)}`)
                }
                const {
                  output: yu,
                  decoded: Eu
                } = Ku;
                if (null !== yu && Eu !== nu) {
                  Xu(Ju.cb, new Ju.m(Su), [yu.subarray(nu, Eu), nu]);
                  try {
                    Xu(Du, eu, [new Ju.m(Su, nu, Eu - nu)])
                  } catch {
                    Uu = !0
                  }
                  nu = Eu
                }
              }
              if (mu(), Uu) throw await Au, new Error(`${uu}'s compile stopped reading before its end`);
              if (!Ku.done) throw new Error(`${uu} ended before its module did`);
              du(ku);
              try {
                Xu(Mu, eu, [])
              } catch {}
            } catch (tu) {
              throw Gu(tu), tu
            }
            const su = await Au;
            void 0 !== Nu && await (0, Ju.v)(uu, new Ju.m(Su), {
              sha256: Nu.sha256,
              onMismatch: () => {}
            });
            return su
          }(mu, Nu, uu, Ru, Qu, Eu)))
        } catch (Tu) {
          console.warn(`${bu(Tu)}: loading ${uu.href} instead`)
        }
        const Su = await (0, Ju.D)(uu, Eu, {
          ...Qu,
          hideThen: !0
        });
        return Su
      }(uu.url(), Qu, Ru, Eu): ju(uu, Ru, Eu)
    }

    function ju(uu, Ru, yu) {
      return (0, Ju.D)(uu.url(), Ru, {
        ...yu,
        hideThen: void 0 !== Tu(uu.name)
      })
    }
    let Hu = null;

    function du(uu) {
      try {
        (0, Ju.T)(uu.cancel())
      } catch {}
    }

    function bu(uu) {
      return uu instanceof Error ? uu.message : String(uu)
    }
    let Cu = null,
      ku = !1;
    const eu = new Map;

    function Au(uu, Ru, yu) {
      return null === Cu ? Cu = Mu(uu, Ru) : uu !== Cu.build ? console.warn(`Bloxd wasm: ${uu.name} was asked for after ${Cu.build.name} started loading, which this thread keeps`) : Ru.name !== Cu.workers.name && console.warn(`Bloxd wasm: ${Ru.name} was asked for workers after ${Cu.workers.name}, which this thread keeps`), yu?.reloadFailedDownload && !ku && (0, Eu.Z)() && (ku = !0, Cu = Mu(Cu.build, Cu.workers)), Cu.loaded
    }

    function Du(uu, Ru) {
      if (null !== Cu) return (0, Ku.h)([]);
      const yu = uu.filter((uu => !eu.has(uu.name))).map((uu => {
        const yu = new AbortController,
          Eu = {
            compiled: ju(uu, (0, Qu.d)(uu.name), {
              priority: Ru,
              Ty: yu.signal,
              onDownloaded: () => {
                Eu.downloaded = !0
              },
              retries: {
                onRetry: () => {
                  Eu.downloaded = !1, null !== Cu && yu.abort()
                }
              }
            }),
            cancel: yu,
            downloaded: !1
          };
        return eu.set(uu.name, Eu), (0, Ku.k)((Ru => {
          (0, Ku.w)(Eu.compiled, (() => {
            Eu.downloaded = !0, Ru()
          }), (Eu => {
            yu.signal.aborted || console.warn(`Bloxd wasm: ${uu.name}'s compile ahead of the load failed: the load compiles it afresh`, Eu), Ru()
          }))
        }))
      }));
      return (0, Ku.h)(yu)
    }

    function Mu(uu, Ru) {
      const yu = (0, Eu.C)((async () => {
        (0, mu.C)();
        const yu = Iu(uu),
          Eu = Ru.name === uu.name ? yu : Iu(Ru);
        for (const {
            cancel: uu
          }
          of eu.values()) uu.abort();
        eu.clear(), await (0, Ku.h)([yu, Eu]);
        const Qu = await yu,
          Ju = await Eu;
        return (0, mu.C)(), {
          module: Qu,
          workerModule: Ju
        }
      }), uu);
      return {
        build: uu,
        workers: Ru,
        loaded: yu
      }
    }

    function Iu(uu) {
      const Ru = eu.get(uu.name);
      return Ru?.downloaded ? (eu.delete(uu.name), (0, Ku.k)(((yu, Eu) => {
        (0, Ku.w)(Ru.compiled, yu, (() => {
          (0, Ku.w)(Uu(uu), yu, Eu)
        }))
      }))) : Uu(uu)
    }
    async function Gu(uu, Ru) {
      return Uu(uu, {
        retries: Ru
      })
    }

    function Uu(uu) {
      let Ru = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
      return Wu(uu, (0, Qu.d)(uu.name), Ru)
    }
  },
  6401: (uu, Ru, yu) => {
    yu.d(Ru, {
      d: () => mu
    });
    var Eu = yu(3514);
    const Ku = {
      bloxd_wasm: () => "3ed1a084322ad3cb30f47a8b06ce739897d64e664873e8362bad69a4e0fce36c",
      bloxd_wasm_client: () => "a9917e573bede14f22b22d14f5e644f2e71fcc9a6e34c58bf3e57cb4d3b8dd2b",
      bloxd_wasm_workers: () => "ecdb0c80693ae8280b8bb13b956bc3d05f85f48abcbff37b3a125c9c9aeb9848",
      bloxd_wasm_models: () => "8616b4260206fb1a456630cc184280886bca0201d0f8f84810c3b788ec25c1df",
      bloxd_wasm_webgpu: () => "e1a74926aaf9a1691f5a3d8a06cc60f732a0a528f8f9aac762b2a2303d0da591",
      bloxd_wasm_webgl: () => "ecba4faf3200e609973474a28d49b8ef73a4138f5f8c0d78ca0483605b24a0a2",
      bloxd_wasm_webgl1: () => "abdfe5d3d9983581a3b06cba824de0a31dd1a1adb24080f819fc74a713dfff02",
      bloxd_wasm_replay: () => "5f179054ce214c3ba0c750b1416df152f42691008bf442f02c9d21149669f166",
      bloxd_wasm_recorder: () => "f2da278d1126f2da5d1768d8feca01c3d5ad046842ca42386086ad694791f414",
      bloxd_wasm_anim: () => "f3d3949e0ee8ede817bb5a787d7fe6321fd96ba9985c07ea9ebdff2066b61798",
      bloxd_wasm_textures: () => "1cc3b5ae23772c6447fc1490ff3e9e59019a9128a46b8927b277f7cf41150b52",
      bloxd_wasm_shader_pack: () => "2dacc1cc4dca547291848db95b089e90361aa09148df7a071edd232a8671549d"
    };
    var Qu = yu(4470);

    function mu(uu) {
      const Ru = Object.prototype.hasOwnProperty.call(Ku, uu) ? Ku[uu]() : void 0;
      if (void 0 !== Ru) return {
        sha256: Ru,
        onMismatch: Qu.A
      };
      throw new Eu.g(`${uu} has no release digest, so this build refuses it`)
    }
  },
  36170: (uu, Ru, yu) => {
    yu.d(Ru, {
      e: () => Eu,
      g: () => Qu,
      i: () => Nu,
      m: () => mu,
      o: () => Ku
    });
    const Eu = /^alloc_failed (\d+) bytes$/;

    function Ku(uu, Ru) {
      return Qu(uu, Ru) ? `trap=alloc_failed ${Ru} bytes` : `trap=${uu}`
    }

    function Qu(uu, Ru) {
      return "unreachable" === uu && Ru > 0
    }

    function mu(uu, Ru, yu) {
      const Eu = function(uu) {
        return uu instanceof WebAssembly.RuntimeError ? /unreachable/i.test(uu.message) ? "unreachable" : /out of bounds/i.test(uu.message) ? "out_of_bounds" : "runtime_error" : (uu instanceof RangeError || uu instanceof Error && "InternalError" === uu.name) && /call stack|recursion/i.test(uu.message) ? "stack_overflow" : "js_error"
      }(uu);
      if ("unreachable" !== Eu) return {
        kind: Eu,
        panic: null,
        refusedBytes: 0
      };
      const Ku = Ru(),
        Qu = yu();
      return {
        kind: Eu,
        panic: Qu > 0 ? null : Ku,
        refusedBytes: Qu
      }
    }
    const Ju = 300;

    function Nu(uu) {
      return uu.replace(/\s*\n\s*/g, " / ").slice(0, Ju)
    }
  }
};
Object.freeze(modules);
for (const uu in modules) Object.freeze(modules[uu]);