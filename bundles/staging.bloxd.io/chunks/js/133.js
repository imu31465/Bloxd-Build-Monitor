export const id = 133;
export const ids = [133];
export const modules = {
  35750: (YY, rY, DY) => {
    DY.d(rY, {
      b: () => BY,
      d: () => HY,
      h: () => NY
    });
    var FY = DY(3312),
      AY = DY(3324),
      IY = DY(6185),
      RY = DY(4269),
      OY = DY(3316);
    const gY = ".zst.bin",
      aY = Reflect.apply,
      vY = ArrayBuffer,
      uY = "undefined" === typeof Response ? void 0 : Response,
      sY = "undefined" === typeof ReadableStream ? void 0 : ReadableStream,
      iY = function() {
        let YY;
        void 0 !== sY && new sY({
          __proto__: null,
          start(rY) {
            const {
              enqueue: DY,
              close: FY,
              error: AY
            } = Object.getPrototypeOf(rY);
            YY = {
              enqueue: DY,
              close: FY,
              error: AY
            }
          }
        }, {
          __proto__: null
        });
        return YY
      }(),
      yY = function() {
        try {
          return "undefined" !== typeof WebAssembly && "function" === typeof WebAssembly.compileStreaming && void 0 !== iY && (0, RY.j)(uY, "Response", !0) && (0, RY.j)(sY, "ReadableStream", !0) && (0, RY.j)(iY.enqueue, "enqueue") && (0, RY.j)(iY.close, "close") && (0, RY.j)(iY.error, "error") && (0, RY.j)(OY.Z, "body") && (0, RY.j)(OY.I, "getReader") && (0, RY.j)(OY.V, "read")
        } catch {
          return !1
        }
      }();
    let QY = !1;

    function oY(YY) {
      for (const rY of "bloxd_wasm_webgpu:4988802,bloxd_wasm_webgl:5279981,bloxd_wasm_webgl1:4749662,bloxd_wasm_workers:196044,bloxd_wasm_models:311310,bloxd_wasm_client:3658957"?.split(",") ?? []) {
        const [DY, FY] = rY.split(":");
        if (DY === YY) {
          const YY = Number(FY);
          return Number.isInteger(YY) && YY > 0 ? YY : void 0
        }
      }
    }

    function WY(YY, rY) {
      let FY = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
      const IY = function(YY) {
        const rY = oY(YY.name);
        if (void 0 !== rY && yY && !QY) return {
          href: `${YY.url().href}${gY}`,
          length: rY
        }
      }(YY);
      return void 0 !== IY ? async function(YY, rY, FY, IY) {
        let {
          href: RY,
          length: gY
        } = rY;
        try {
          return await (0, OY.cb)(RY, ((YY, rY, IY) => async function(YY, rY, FY, IY, RY, gY) {
            const yY = new vY(rY);
            let oY;
            mY ??= (0, OY.S)(DY.e(64).then((() => DY(40167))));
            try {
              oY = await fetch(YY, {
                signal: FY
              })
            } catch (fY) {
              throw new Error(`Fetching ${YY} failed: ${SY(fY)}`)
            }
            const {
              ok: WY,
              status: EY,
              body: lY
            } = function(YY, rY) {
              try {
                const {
                  ok: YY,
                  status: DY
                } = rY;
                return {
                  ok: YY,
                  status: DY,
                  body: aY(OY.Z, rY, [])
                }
              } catch {
                throw new Error(`${YY} came in a response a page script made`)
              }
            }(YY, oY);
            if (!WY) throw new Error(`Fetching ${YY} failed: HTTP ${EY}`);
            IY();
            const {
              reader: TY,
              controller: eY,
              compiled: NY
            } = function(YY, rY) {
              let DY;
              try {
                let YY;
                DY = aY(OY.I, rY, []);
                const FY = new sY({
                    __proto__: null,
                    start(rY) {
                      YY = rY
                    }
                  }, {
                    __proto__: null
                  }),
                  AY = new uY(FY, {
                    __proto__: null,
                    headers: {
                      __proto__: null,
                      "Content-Type": "application/wasm"
                    }
                  });
                return {
                  reader: DY,
                  controller: YY,
                  compiled: (0, OY.S)((0, OY.y)((0, OY.eb)(AY)))
                }
              } catch (fY) {
                throw void 0 !== DY && VY(DY), new Error(`${YY} could not be streamed into a compile: ${SY(fY)}`)
              }
            }(YY, lY), {
              enqueue: BY,
              close: cY,
              error: KY
            } = iY, HY = YY => {
              try {
                aY(KY, eY, [YY])
              } catch {} finally {
                VY(TY)
              }
            };
            FY.addEventListener("abort", (() => {
              HY(new Error(`${YY} stalled`))
            }), {
              once: !0
            });
            let zY = !1;
            (0, AY.q)(NY, (() => {}), (() => {
              zY = !0, VY(TY)
            }));
            let ZY = 0;
            try {
              let DY;
              try {
                DY = await mY
              } catch (fY) {
                throw QY = !0, new Error(`The zstd decoder did not load: ${SY(fY)}`)
              }
              const {
                ZstdFrameDecoder: FY
              } = DY, AY = new FY(rY);
              for (; !AY.done && !zY;) {
                let rY;
                try {
                  rY = await aY(OY.V, TY, [])
                } catch (fY) {
                  throw new Error(`Downloading ${YY} failed: ${SY(fY)}`)
                }
                if (rY.done || zY) break;
                IY();
                try {
                  AY.push(rY.value)
                } catch (fY) {
                  throw new Error(`${YY} did not decode: ${SY(fY)}`)
                }
                const {
                  output: DY,
                  decoded: FY
                } = AY;
                if (null !== DY && FY !== ZY) {
                  aY(OY.$, new OY.l(yY), [DY.subarray(ZY, FY), ZY]);
                  try {
                    aY(BY, eY, [new OY.l(yY, ZY, FY - ZY)])
                  } catch {
                    zY = !0
                  }
                  ZY = FY
                }
              }
              if (RY(), zY) throw await NY, new Error(`${YY}'s compile stopped reading before its end`);
              if (!AY.done) throw new Error(`${YY} ended before its module did`);
              VY(TY);
              try {
                aY(cY, eY, [])
              } catch {}
            } catch (fY) {
              throw HY(fY), fY
            }
            const CY = await NY;
            void 0 !== gY && await (0, OY.v)(YY, new OY.l(yY), {
              sha256: gY.sha256,
              onMismatch: () => {}
            });
            return CY
          }(RY, gY, YY, rY, IY, FY)))
        } catch (oY) {
          console.warn(`${SY(oY)}: loading ${YY.href} instead`)
        }
        const yY = await (0, OY.C)(YY, FY, {
          ...IY,
          hideThen: !0
        });
        return yY
      }(YY.url(), IY, rY, FY): EY(YY, rY, FY)
    }

    function EY(YY, rY, DY) {
      return (0, OY.C)(YY.url(), rY, {
        ...DY,
        hideThen: void 0 !== oY(YY.name)
      })
    }
    let mY = null;

    function VY(YY) {
      try {
        (0, OY.S)(YY.cancel())
      } catch {}
    }

    function SY(YY) {
      return YY instanceof Error ? YY.message : String(YY)
    }
    let lY = null,
      TY = !1;
    const eY = new Map;

    function NY(YY, rY, DY) {
      return null === lY ? lY = cY(YY, rY) : YY !== lY.build ? console.warn(`Bloxd wasm: ${YY.name} was asked for after ${lY.build.name} started loading, which this thread keeps`) : rY.name !== lY.workers.name && console.warn(`Bloxd wasm: ${rY.name} was asked for workers after ${lY.workers.name}, which this thread keeps`), DY?.reloadFailedDownload && !TY && (0, FY.Z)() && (TY = !0, lY = cY(lY.build, lY.workers)), lY.loaded
    }

    function BY(YY, rY) {
      if (null !== lY) return (0, AY.e)([]);
      const DY = YY.filter((YY => !eY.has(YY.name))).map((YY => {
        const DY = new AbortController,
          FY = {
            compiled: EY(YY, (0, IY.d)(YY.name), {
              priority: rY,
              Hr: DY.signal,
              onDownloaded: () => {
                FY.downloaded = !0
              },
              retries: {
                onRetry: () => {
                  FY.downloaded = !1, null !== lY && DY.abort()
                }
              }
            }),
            cancel: DY,
            downloaded: !1
          };
        return eY.set(YY.name, FY), (0, AY.i)((rY => {
          (0, AY.q)(FY.compiled, (() => {
            FY.downloaded = !0, rY()
          }), (FY => {
            DY.signal.aborted || console.warn(`Bloxd wasm: ${YY.name}'s compile ahead of the load failed: the load compiles it afresh`, FY), rY()
          }))
        }))
      }));
      return (0, AY.e)(DY)
    }

    function cY(YY, rY) {
      const DY = (0, FY.L)((async () => {
        (0, RY.D)();
        const DY = KY(YY),
          FY = rY.name === YY.name ? DY : KY(rY);
        for (const {
            cancel: YY
          }
          of eY.values()) YY.abort();
        eY.clear(), await (0, AY.e)([DY, FY]);
        const IY = await DY,
          OY = await FY;
        return (0, RY.D)(), {
          module: IY,
          workerModule: OY
        }
      }), YY);
      return {
        build: YY,
        workers: rY,
        loaded: DY
      }
    }

    function KY(YY) {
      const rY = eY.get(YY.name);
      return rY?.downloaded ? (eY.delete(YY.name), (0, AY.i)(((DY, FY) => {
        (0, AY.q)(rY.compiled, DY, (() => {
          (0, AY.q)(zY(YY), DY, FY)
        }))
      }))) : zY(YY)
    }
    async function HY(YY, rY) {
      return zY(YY, {
        retries: rY
      })
    }

    function zY(YY) {
      let rY = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
      return WY(YY, (0, IY.d)(YY.name), rY)
    }
  },
  6185: (YY, rY, DY) => {
    DY.d(rY, {
      d: () => RY
    });
    var FY = DY(3316);
    const AY = {
      bloxd_wasm: () => "903337e90214806242ef5ad341398181be3c87ea5226f5d308c1f706cca47468",
      bloxd_wasm_client: () => "d9f45f5c46370841da4c8574a141121ea34c64a996f4d1841ecd95c2e1c42524",
      bloxd_wasm_workers: () => "e832a210d1a00892314a96a90d4a810c538ccaba01655c65f515d94a02133b57",
      bloxd_wasm_models: () => "2f768b4533240fc126cb3ccd5bdd269ed4498ed1fa63eed4e2b125cc3c87dc9b",
      bloxd_wasm_webgpu: () => "13ae76830081d62490819e5586d96d611b16f3d36319392e7684b387dbb9a0ed",
      bloxd_wasm_webgl: () => "75d934553815430308e568d5596dcf3cbeac88e44101ca29221bb1053d751211",
      bloxd_wasm_webgl1: () => "b26fe3e2f92ba241e60c4d5654b9403c8c421137a13bbf9dcd393877458f3414",
      bloxd_wasm_replay: () => "48557d8c4d7642abff5e313d857ceb9ccf1d9842abaebd08aa0b5e4cbb90872b",
      bloxd_wasm_recorder: () => "68796f2c46f67a890c7e7a667a741a45748b338eb4307c043ddd50d779195794",
      bloxd_wasm_anim: () => "64d4b11d72243c88f5656437b1d8dfffaf2dae8a64597e8568942258a1cd2cc6",
      bloxd_wasm_textures: () => "129a63db7ae9f368dd82ca48a44da3bbf65d4eca5fdba1989a22ec841eb964c3",
      bloxd_wasm_shader_pack: () => "907c252f98c6434be7b5e8e7e6ecbbf37da692dc3544d16a95f87d273dc21da1"
    };
    var IY = DY(4269);

    function RY(YY) {
      const rY = Object.prototype.hasOwnProperty.call(AY, YY) ? AY[YY]() : void 0;
      if (void 0 !== rY) return {
        sha256: rY,
        onMismatch: IY.z
      };
      throw new FY.h(`${YY} has no release digest, so this build refuses it`)
    }
  }
};
Object.freeze(modules);
for (const YY in modules) Object.freeze(modules[YY]);