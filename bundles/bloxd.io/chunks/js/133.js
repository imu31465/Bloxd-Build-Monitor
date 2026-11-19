export const id = 133;
export const ids = [133];
export const modules = {
  35343: (TT, oT, IT) => {
    IT.d(oT, {
      c: () => vT,
      e: () => CT,
      h: () => uT
    });
    var iT = IT(3276),
      zT = IT(3286),
      kT = IT(6123),
      WT = IT(4191),
      XT = IT(3280);
    const BT = ".zst.bin",
      FT = Reflect.apply,
      ST = ArrayBuffer,
      DT = "undefined" === typeof Response ? void 0 : Response,
      LT = "undefined" === typeof ReadableStream ? void 0 : ReadableStream,
      xT = function() {
        let TT;
        void 0 !== LT && new LT({
          __proto__: null,
          start(oT) {
            const {
              enqueue: IT,
              close: iT,
              error: zT
            } = Object.getPrototypeOf(oT);
            TT = {
              enqueue: IT,
              close: iT,
              error: zT
            }
          }
        }, {
          __proto__: null
        });
        return TT
      }(),
      cT = function() {
        try {
          return "undefined" !== typeof WebAssembly && "function" === typeof WebAssembly.compileStreaming && void 0 !== xT && (0, WT.k)(DT, "Response", !0) && (0, WT.k)(LT, "ReadableStream", !0) && (0, WT.k)(xT.enqueue, "enqueue") && (0, WT.k)(xT.close, "close") && (0, WT.k)(xT.error, "error") && (0, WT.k)(XT.eb, "body") && (0, WT.k)(XT.Q, "getReader") && (0, WT.k)(XT.cb, "read")
        } catch {
          return !1
        }
      }();
    let KT = !1;

    function MT(TT) {
      for (const oT of "bloxd_wasm_webgpu:4988802,bloxd_wasm_webgl:5279981,bloxd_wasm_webgl1:4749662,bloxd_wasm_workers:196044,bloxd_wasm_models:311310,bloxd_wasm_client:3658957"?.split(",") ?? []) {
        const [IT, iT] = oT.split(":");
        if (IT === TT) {
          const TT = Number(iT);
          return Number.isInteger(TT) && TT > 0 ? TT : void 0
        }
      }
    }

    function rT(TT, oT) {
      let iT = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
      const kT = function(TT) {
        const oT = MT(TT.name);
        if (void 0 !== oT && cT && !KT) return {
          href: `${TT.url().href}${BT}`,
          length: oT
        }
      }(TT);
      return void 0 !== kT ? async function(TT, oT, iT, kT) {
        let {
          href: WT,
          length: BT
        } = oT;
        try {
          return await (0, XT.kb)(WT, ((TT, oT, kT) => async function(TT, oT, iT, kT, WT, BT) {
            const cT = new ST(oT);
            let MT;
            gT ??= (0, XT._)(IT.e(64).then((() => IT(39869))));
            try {
              MT = await fetch(TT, {
                signal: iT
              })
            } catch (aT) {
              throw new Error(`Fetching ${TT} failed: ${wT(aT)}`)
            }
            const {
              ok: rT,
              status: AT,
              body: mT
            } = function(TT, oT) {
              try {
                const {
                  ok: TT,
                  status: IT
                } = oT;
                return {
                  ok: TT,
                  status: IT,
                  body: FT(XT.eb, oT, [])
                }
              } catch {
                throw new Error(`${TT} came in a response a page script made`)
              }
            }(TT, MT);
            if (!rT) throw new Error(`Fetching ${TT} failed: HTTP ${AT}`);
            kT();
            const {
              reader: eT,
              controller: RT,
              compiled: uT
            } = function(TT, oT) {
              let IT;
              try {
                let TT;
                IT = FT(XT.Q, oT, []);
                const iT = new LT({
                    __proto__: null,
                    start(oT) {
                      TT = oT
                    }
                  }, {
                    __proto__: null
                  }),
                  zT = new DT(iT, {
                    __proto__: null,
                    headers: {
                      __proto__: null,
                      "Content-Type": "application/wasm"
                    }
                  });
                return {
                  reader: IT,
                  controller: TT,
                  compiled: (0, XT._)((0, XT.D)((0, XT.lb)(zT)))
                }
              } catch (aT) {
                throw void 0 !== IT && hT(IT), new Error(`${TT} could not be streamed into a compile: ${wT(aT)}`)
              }
            }(TT, mT), {
              enqueue: vT,
              close: ET,
              error: fT
            } = xT, CT = TT => {
              try {
                FT(fT, RT, [TT])
              } catch {} finally {
                hT(eT)
              }
            };
            iT.addEventListener("abort", (() => {
              CT(new Error(`${TT} stalled`))
            }), {
              once: !0
            });
            let jT = !1;
            (0, zT.q)(uT, (() => {}), (() => {
              jT = !0, hT(eT)
            }));
            let JT = 0;
            try {
              let IT;
              try {
                IT = await gT
              } catch (aT) {
                throw KT = !0, new Error(`The zstd decoder did not load: ${wT(aT)}`)
              }
              const {
                ZstdFrameDecoder: iT
              } = IT, zT = new iT(oT);
              for (; !zT.done && !jT;) {
                let oT;
                try {
                  oT = await FT(XT.cb, eT, [])
                } catch (aT) {
                  throw new Error(`Downloading ${TT} failed: ${wT(aT)}`)
                }
                if (oT.done || jT) break;
                kT();
                try {
                  zT.push(oT.value)
                } catch (aT) {
                  throw new Error(`${TT} did not decode: ${wT(aT)}`)
                }
                const {
                  output: IT,
                  decoded: iT
                } = zT;
                if (null !== IT && iT !== JT) {
                  FT(XT.ib, new XT.q(cT), [IT.subarray(JT, iT), JT]);
                  try {
                    FT(vT, RT, [new XT.q(cT, JT, iT - JT)])
                  } catch {
                    jT = !0
                  }
                  JT = iT
                }
              }
              if (WT(), jT) throw await uT, new Error(`${TT}'s compile stopped reading before its end`);
              if (!zT.done) throw new Error(`${TT} ended before its module did`);
              hT(eT);
              try {
                FT(ET, RT, [])
              } catch {}
            } catch (aT) {
              throw CT(aT), aT
            }
            const UT = await uT;
            void 0 !== BT && await (0, XT.C)(TT, new XT.q(cT), {
              sha256: BT.sha256,
              onMismatch: () => {}
            });
            return UT
          }(WT, BT, TT, oT, kT, iT)))
        } catch (MT) {
          console.warn(`${wT(MT)}: loading ${TT.href} instead`)
        }
        const cT = await (0, XT.J)(TT, iT, {
          ...kT,
          hideThen: !0
        });
        return cT
      }(TT.url(), kT, oT, iT): AT(TT, oT, iT)
    }

    function AT(TT, oT, IT) {
      return (0, XT.J)(TT.url(), oT, {
        ...IT,
        hideThen: void 0 !== MT(TT.name)
      })
    }
    let gT = null;

    function hT(TT) {
      try {
        (0, XT._)(TT.cancel())
      } catch {}
    }

    function wT(TT) {
      return TT instanceof Error ? TT.message : String(TT)
    }
    let mT = null,
      eT = !1;
    const RT = new Map;

    function uT(TT, oT, IT) {
      return null === mT ? mT = ET(TT, oT) : TT !== mT.build ? console.warn(`Bloxd wasm: ${TT.name} was asked for after ${mT.build.name} started loading, which this thread keeps`) : oT.name !== mT.workers.name && console.warn(`Bloxd wasm: ${oT.name} was asked for workers after ${mT.workers.name}, which this thread keeps`), IT?.reloadFailedDownload && !eT && (0, iT.W)() && (eT = !0, mT = ET(mT.build, mT.workers)), mT.loaded
    }

    function vT(TT, oT) {
      if (null !== mT) return (0, zT.f)([]);
      const IT = TT.filter((TT => !RT.has(TT.name))).map((TT => {
        const IT = new AbortController,
          iT = {
            compiled: AT(TT, (0, kT.c)(TT.name), {
              priority: oT,
              Jo: IT.signal,
              onDownloaded: () => {
                iT.downloaded = !0
              },
              retries: {
                onRetry: () => {
                  iT.downloaded = !1, null !== mT && IT.abort()
                }
              }
            }),
            cancel: IT,
            downloaded: !1
          };
        return RT.set(TT.name, iT), (0, zT.g)((oT => {
          (0, zT.q)(iT.compiled, (() => {
            iT.downloaded = !0, oT()
          }), (iT => {
            IT.signal.aborted || console.warn(`Bloxd wasm: ${TT.name}'s compile ahead of the load failed: the load compiles it afresh`, iT), oT()
          }))
        }))
      }));
      return (0, zT.f)(IT)
    }

    function ET(TT, oT) {
      const IT = (0, iT.F)((async () => {
        (0, WT.B)();
        const IT = fT(TT),
          iT = oT.name === TT.name ? IT : fT(oT);
        for (const {
            cancel: TT
          }
          of RT.values()) TT.abort();
        RT.clear(), await (0, zT.f)([IT, iT]);
        const kT = await IT,
          XT = await iT;
        return (0, WT.B)(), {
          module: kT,
          workerModule: XT
        }
      }), TT);
      return {
        build: TT,
        workers: oT,
        loaded: IT
      }
    }

    function fT(TT) {
      const oT = RT.get(TT.name);
      return oT?.downloaded ? (RT.delete(TT.name), (0, zT.g)(((IT, iT) => {
        (0, zT.q)(oT.compiled, IT, (() => {
          (0, zT.q)(jT(TT), IT, iT)
        }))
      }))) : jT(TT)
    }
    async function CT(TT, oT) {
      return jT(TT, {
        retries: oT
      })
    }

    function jT(TT) {
      let oT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
      return rT(TT, (0, kT.c)(TT.name), oT)
    }
  },
  6123: (TT, oT, IT) => {
    IT.d(oT, {
      c: () => WT
    });
    var iT = IT(3280);
    const zT = {
      bloxd_wasm: () => "891b125e1fa53c747db8046ca1a7828990783e6318b475060b2689b2c62ec64b",
      bloxd_wasm_client: () => "afe376ddb7e074ef28dc003cae65be2019ba85870176102f5c99327651531a90",
      bloxd_wasm_workers: () => "bdacf110fdd54ff050ae9c3d3c9c40fa9932196a316574c38050f09f93d5d4d0",
      bloxd_wasm_models: () => "d431807fb8651e0a5be03886feec149ab2c5d8f7292513bb4f5f6f8198ccd3fa",
      bloxd_wasm_webgpu: () => "36744cc13e8d59f3d9a2cc30379d81ca4b0e563c1ccd9032a15b3d5d2fd1f9b1",
      bloxd_wasm_webgl: () => "d7f8f069066a9513edfd41a54bdc46943132c54fd47d41226907a9c5957c5a3e",
      bloxd_wasm_webgl1: () => "1f274f498c33507fd74ae865400b574dec316d2e2535b8bdd60f2679aec71305",
      bloxd_wasm_replay: () => "308a6b9500ce1acc37831e57249009d9c05a3a9b3821582ea4fe8330d515270a",
      bloxd_wasm_recorder: () => "c2dd3c772eaa41d9a4cfcd9261204dae143353c48db7c49556d0089946997bff",
      bloxd_wasm_anim: () => "92da9dc930879a101e815385ac8673ac818daddd3cc10a9e6f242c32dd68abe8",
      bloxd_wasm_textures: () => "de7050a0a81f4523efadc506fed6ff11ef5e5819f30494428008fcaceee90545",
      bloxd_wasm_shader_pack: () => "012d029967fec4420d84f73dad4d7e807ec1901518f66edd03a82520f373fb43"
    };
    var kT = IT(4191);

    function WT(TT) {
      const oT = Object.prototype.hasOwnProperty.call(zT, TT) ? zT[TT]() : void 0;
      if (void 0 !== oT) return {
        sha256: oT,
        onMismatch: kT.y
      };
      throw new iT.k(`${TT} has no release digest, so this build refuses it`)
    }
  }
};
Object.freeze(modules);
for (const TT in modules) Object.freeze(modules[TT]);