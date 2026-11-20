export const id = 132;
export const ids = [132];
export const modules = {
  35889: (UU, RU, gU) => {
    gU.d(RU, {
      d: () => PU,
      h: () => EU,
      j: () => qU
    });
    var tU = gU(35886);
    const pU = /wasm-function\[\d+\]|wasm:\/\/|\[wasm code\]/;

    function EU(UU) {
      if (UU instanceof WebAssembly.RuntimeError) return !0;
      const RU = UU instanceof Error ? UU.stack : void 0;
      return "string" === typeof RU && pU.test(RU)
    }

    function PU(UU, RU, gU) {
      var EU;
      const PU = UU instanceof Error ? UU.name : "thrown",
        TU = (UU instanceof Error && null !== (EU = UU.stack) && void 0 !== EU ? EU : "").split("\n").filter((UU => pU.test(UU))).slice(0, 8).map((UU => UU.trim())),
        qU = null === RU ? "wasm memory unknown" : `wasm memory ${Math.round(RU/2**20)} MB`,
        KU = null === gU.panic ? "" : `, panic: ${(0,tU.j)(gU.panic)}`,
        cU = `${PU}: ${UU instanceof Error?UU.message:String(UU)}`;
      return `${(0,tU.n)(gU.kind,gU.refusedBytes)} ${cU} (${qU})${KU}${TU.length>0?` | ${TU.join(" < ")}`:""}`
    }
    const TU = 500;

    function qU(UU) {
      let RU = "[object Object]";
      try {
        RU = String(UU)
      } catch {}
      if ("[object Object]" !== RU) return RU;
      try {
        var gU, tU;
        return null !== (gU = null === (tU = JSON.stringify(UU)) || void 0 === tU ? void 0 : tU.slice(0, TU)) && void 0 !== gU ? gU : RU
      } catch {
        return RU
      }
    }
  },
  35912: (UU, RU, gU) => {
    gU.d(RU, {
      b: () => bU,
      c: () => aU,
      f: () => nU
    });
    var tU = gU(3372),
      pU = gU(3385),
      EU = gU(6297),
      PU = gU(4352),
      TU = gU(3377);
    const qU = ".zst.bin",
      KU = Reflect.apply,
      cU = ArrayBuffer,
      GU = "undefined" === typeof Response ? void 0 : Response,
      jU = "undefined" === typeof ReadableStream ? void 0 : ReadableStream,
      uU = function() {
        let UU;
        void 0 !== jU && new jU({
          __proto__: null,
          start(RU) {
            const {
              enqueue: gU,
              close: tU,
              error: pU
            } = Object.getPrototypeOf(RU);
            UU = {
              enqueue: gU,
              close: tU,
              error: pU
            }
          }
        }, {
          __proto__: null
        });
        return UU
      }(),
      CU = function() {
        try {
          return "undefined" !== typeof WebAssembly && "function" === typeof WebAssembly.compileStreaming && void 0 !== uU && (0, PU.m)(GU, "Response", !0) && (0, PU.m)(jU, "ReadableStream", !0) && (0, PU.m)(uU.enqueue, "enqueue") && (0, PU.m)(uU.close, "close") && (0, PU.m)(uU.error, "error") && (0, PU.m)(TU.W, "body") && (0, PU.m)(TU.L, "getReader") && (0, PU.m)(TU.U, "read")
        } catch {
          return !1
        }
      }();
    let hU = !1;

    function QU(UU) {
      for (const RU of "bloxd_wasm_webgpu:4997989,bloxd_wasm_webgl:5289170,bloxd_wasm_webgl1:4758837,bloxd_wasm_workers:196044,bloxd_wasm_models:311680,bloxd_wasm_client:3667712"?.split(",") ?? []) {
        const [gU, tU] = RU.split(":");
        if (gU === UU) {
          const UU = Number(tU);
          return Number.isInteger(UU) && UU > 0 ? UU : void 0
        }
      }
    }

    function eU(UU, RU) {
      let tU = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
      const EU = function(UU) {
        const RU = QU(UU.name);
        if (void 0 !== RU && CU && !hU) return {
          href: `${UU.url().href}${qU}`,
          length: RU
        }
      }(UU);
      return void 0 !== EU ? async function(UU, RU, tU, EU) {
        let {
          href: PU,
          length: qU
        } = RU;
        try {
          return await (0, TU._)(PU, ((UU, RU, EU) => async function(UU, RU, tU, EU, PU, qU) {
            const CU = new cU(RU);
            let QU;
            fU ??= (0, TU.R)(gU.e(64).then((() => gU(40561))));
            try {
              QU = await fetch(UU, {
                signal: tU
              })
            } catch (rU) {
              throw new Error(`Fetching ${UU} failed: ${mU(rU)}`)
            }
            const {
              ok: eU,
              status: WU,
              body: IU
            } = function(UU, RU) {
              try {
                const {
                  ok: UU,
                  status: gU
                } = RU;
                return {
                  ok: UU,
                  status: gU,
                  body: KU(TU.W, RU, [])
                }
              } catch {
                throw new Error(`${UU} came in a response a page script made`)
              }
            }(UU, QU);
            if (!eU) throw new Error(`Fetching ${UU} failed: HTTP ${WU}`);
            EU();
            const {
              reader: JU,
              controller: wU,
              compiled: nU
            } = function(UU, RU) {
              let gU;
              try {
                let UU;
                gU = KU(TU.L, RU, []);
                const tU = new jU({
                    __proto__: null,
                    start(RU) {
                      UU = RU
                    }
                  }, {
                    __proto__: null
                  }),
                  pU = new GU(tU, {
                    __proto__: null,
                    headers: {
                      __proto__: null,
                      "Content-Type": "application/wasm"
                    }
                  });
                return {
                  reader: gU,
                  controller: UU,
                  compiled: (0, TU.R)((0, TU.x)((0, TU.cb)(pU)))
                }
              } catch (rU) {
                throw void 0 !== gU && xU(gU), new Error(`${UU} could not be streamed into a compile: ${mU(rU)}`)
              }
            }(UU, IU), {
              enqueue: bU,
              close: oU,
              error: ZU
            } = uU, aU = UU => {
              try {
                KU(ZU, wU, [UU])
              } catch {} finally {
                xU(JU)
              }
            };
            tU.addEventListener("abort", (() => {
              aU(new Error(`${UU} stalled`))
            }), {
              once: !0
            });
            let YU = !1;
            (0, pU.p)(nU, (() => {}), (() => {
              YU = !0, xU(JU)
            }));
            let BU = 0;
            try {
              let gU;
              try {
                gU = await fU
              } catch (rU) {
                throw hU = !0, new Error(`The zstd decoder did not load: ${mU(rU)}`)
              }
              const {
                ZstdFrameDecoder: tU
              } = gU, pU = new tU(RU);
              for (; !pU.done && !YU;) {
                let RU;
                try {
                  RU = await KU(TU.U, JU, [])
                } catch (rU) {
                  throw new Error(`Downloading ${UU} failed: ${mU(rU)}`)
                }
                if (RU.done || YU) break;
                EU();
                try {
                  pU.push(RU.value)
                } catch (rU) {
                  throw new Error(`${UU} did not decode: ${mU(rU)}`)
                }
                const {
                  output: gU,
                  decoded: tU
                } = pU;
                if (null !== gU && tU !== BU) {
                  KU(TU.Y, new TU.o(CU), [gU.subarray(BU, tU), BU]);
                  try {
                    KU(bU, wU, [new TU.o(CU, BU, tU - BU)])
                  } catch {
                    YU = !0
                  }
                  BU = tU
                }
              }
              if (PU(), YU) throw await nU, new Error(`${UU}'s compile stopped reading before its end`);
              if (!pU.done) throw new Error(`${UU} ended before its module did`);
              xU(JU);
              try {
                KU(oU, wU, [])
              } catch {}
            } catch (rU) {
              throw aU(rU), rU
            }
            const VU = await nU;
            void 0 !== qU && await (0, TU.v)(UU, new TU.o(CU), {
              sha256: qU.sha256,
              onMismatch: () => {}
            });
            return VU
          }(PU, qU, UU, RU, EU, tU)))
        } catch (QU) {
          console.warn(`${mU(QU)}: loading ${UU.href} instead`)
        }
        const CU = await (0, TU.D)(UU, tU, {
          ...EU,
          hideThen: !0
        });
        return CU
      }(UU.url(), EU, RU, tU): WU(UU, RU, tU)
    }

    function WU(UU, RU, gU) {
      return (0, TU.D)(UU.url(), RU, {
        ...gU,
        hideThen: void 0 !== QU(UU.name)
      })
    }
    let fU = null;

    function xU(UU) {
      try {
        (0, TU.R)(UU.cancel())
      } catch {}
    }

    function mU(UU) {
      return UU instanceof Error ? UU.message : String(UU)
    }
    let IU = null,
      JU = !1;
    const wU = new Map;

    function nU(UU, RU, gU) {
      return null === IU ? IU = oU(UU, RU) : UU !== IU.build ? console.warn(`Bloxd wasm: ${UU.name} was asked for after ${IU.build.name} started loading, which this thread keeps`) : RU.name !== IU.workers.name && console.warn(`Bloxd wasm: ${RU.name} was asked for workers after ${IU.workers.name}, which this thread keeps`), gU?.reloadFailedDownload && !JU && (0, tU.T)() && (JU = !0, IU = oU(IU.build, IU.workers)), IU.loaded
    }

    function bU(UU, RU) {
      if (null !== IU) return (0, pU.d)([]);
      const gU = UU.filter((UU => !wU.has(UU.name))).map((UU => {
        const gU = new AbortController,
          tU = {
            compiled: WU(UU, (0, EU.b)(UU.name), {
              priority: RU,
              cg: gU.signal,
              onDownloaded: () => {
                tU.downloaded = !0
              },
              retries: {
                onRetry: () => {
                  tU.downloaded = !1, null !== IU && gU.abort()
                }
              }
            }),
            cancel: gU,
            downloaded: !1
          };
        return wU.set(UU.name, tU), (0, pU.e)((RU => {
          (0, pU.p)(tU.compiled, (() => {
            tU.downloaded = !0, RU()
          }), (tU => {
            gU.signal.aborted || console.warn(`Bloxd wasm: ${UU.name}'s compile ahead of the load failed: the load compiles it afresh`, tU), RU()
          }))
        }))
      }));
      return (0, pU.d)(gU)
    }

    function oU(UU, RU) {
      const gU = (0, tU.E)((async () => {
        (0, PU.G)();
        const gU = ZU(UU),
          tU = RU.name === UU.name ? gU : ZU(RU);
        for (const {
            cancel: UU
          }
          of wU.values()) UU.abort();
        wU.clear(), await (0, pU.d)([gU, tU]);
        const EU = await gU,
          TU = await tU;
        return (0, PU.G)(), {
          module: EU,
          workerModule: TU
        }
      }), UU);
      return {
        build: UU,
        workers: RU,
        loaded: gU
      }
    }

    function ZU(UU) {
      const RU = wU.get(UU.name);
      return RU?.downloaded ? (wU.delete(UU.name), (0, pU.e)(((gU, tU) => {
        (0, pU.p)(RU.compiled, gU, (() => {
          (0, pU.p)(YU(UU), gU, tU)
        }))
      }))) : YU(UU)
    }
    async function aU(UU, RU) {
      return YU(UU, {
        retries: RU
      })
    }

    function YU(UU) {
      let RU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
      return eU(UU, (0, EU.b)(UU.name), RU)
    }
  },
  6297: (UU, RU, gU) => {
    gU.d(RU, {
      b: () => PU
    });
    var tU = gU(3377);
    const pU = {
      bloxd_wasm: () => "9aea991b9dfc231682f5590d3cc7b71fdc8d10d57b6fc256a691170448cb241e",
      bloxd_wasm_client: () => "802e9a6883f55b00b2e9f994d468ef47c157db779d67da12a28169a4064f9ba2",
      bloxd_wasm_workers: () => "6e68db7fd51b5ae0bb150a4c2fcdf448b467f8cbd8e24efcf974a9654674f1d6",
      bloxd_wasm_models: () => "f3c8f0349e4b7cd2fe62824f818b019cb1ff9fda7d99058af5539dbe1c36e2ff",
      bloxd_wasm_webgpu: () => "7b8aba519ce147883d63480e46db11f2a6dd62b2bdebd6ff07895ba08f395e69",
      bloxd_wasm_webgl: () => "a107c8272b9d653c63376eb1e9164df07a85032e3f7cbbd1d972097394cfca11",
      bloxd_wasm_webgl1: () => "2c5aabca21f20977da3990bb0cf77633b2f229a640ab72f5a52f39d28d9e0fd9",
      bloxd_wasm_replay: () => "803e2c90d202bb5830af931fbeaac2469dcc5032d591607636dd72eecf9c8910",
      bloxd_wasm_recorder: () => "edcf2c59dbceafb4c90033bd8006f0358827a3de806838c1aa9aa5da84f115b3",
      bloxd_wasm_anim: () => "7a1e82ad213a41556d7866bfc1df7fce0247390479775e811f0b8f916b979482",
      bloxd_wasm_textures: () => "bc7a7de98d207f079e8f358dc014dee940cff8bd63182b40ac7fd19938da92d8",
      bloxd_wasm_shader_pack: () => "1e25de668a456adfdd95befe66a4ef213a16bedd08af3aac14531a1b656da9d3"
    };
    var EU = gU(4352);

    function PU(UU) {
      const RU = Object.prototype.hasOwnProperty.call(pU, UU) ? pU[UU]() : void 0;
      if (void 0 !== RU) return {
        sha256: RU,
        onMismatch: EU.E
      };
      throw new tU.j(`${UU} has no release digest, so this build refuses it`)
    }
  },
  35886: (UU, RU, gU) => {
    gU.d(RU, {
      d: () => tU,
      h: () => EU,
      j: () => qU,
      m: () => PU,
      n: () => pU
    });
    const tU = /^alloc_failed (\d+) bytes$/;

    function pU(UU, RU) {
      return EU(UU, RU) ? `trap=alloc_failed ${RU} bytes` : `trap=${UU}`
    }

    function EU(UU, RU) {
      return "unreachable" === UU && RU > 0
    }

    function PU(UU, RU, gU) {
      const tU = function(UU) {
        return UU instanceof WebAssembly.RuntimeError ? /unreachable/i.test(UU.message) ? "unreachable" : /out of bounds/i.test(UU.message) ? "out_of_bounds" : "runtime_error" : (UU instanceof RangeError || UU instanceof Error && "InternalError" === UU.name) && /call stack|recursion/i.test(UU.message) ? "stack_overflow" : "js_error"
      }(UU);
      if ("unreachable" !== tU) return {
        kind: tU,
        panic: null,
        refusedBytes: 0
      };
      const pU = RU(),
        EU = gU();
      return {
        kind: tU,
        panic: EU > 0 ? null : pU,
        refusedBytes: EU
      }
    }
    const TU = 300;

    function qU(UU) {
      return UU.replace(/\s*\n\s*/g, " / ").slice(0, TU)
    }
  }
};
Object.freeze(modules);
for (const UU in modules) Object.freeze(modules[UU]);