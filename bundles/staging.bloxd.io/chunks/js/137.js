export const id = 137;
export const ids = [137];
export const modules = {
  36643: (GG, bG, ZG) => {
    ZG.d(bG, {
      d: () => DG,
      h: () => BG,
      j: () => OG,
      l: () => tG
    });
    var wG = ZG(2868),
      SG = ZG(2881),
      LG = ZG(6617),
      yG = ZG(4708),
      kG = ZG(2878),
      UG = ZG(2872);
    const YG = "bloxd-wasmDownloaded",
      VG = 12;

    function pG(GG) {
      return GG.pathname.slice(GG.pathname.lastIndexOf("/") + 1)
    }

    function fG() {
      try {
        if ("undefined" === typeof localStorage) return null;
        const GG = JSON.parse(localStorage.getItem(YG) ?? "[]");
        return Array.isArray(GG) ? GG.filter((GG => "string" === typeof GG)) : []
      } catch (GG) {
        return console.warn("Bloxd wasm: the record of downloaded modules could not be read: asking the HTTP cache for none", GG), null
      }
    }
    const QG = Reflect.apply,
      KG = "undefined" === typeof Worker ? void 0 : Worker,
      hG = KG?.prototype.postMessage,
      dG = KG?.prototype.terminate,
      JG = "undefined" === typeof EventTarget ? void 0 : EventTarget.prototype.addEventListener,
      rG = "undefined" === typeof MessageEvent ? void 0 : Object.getOwnPropertyDescriptor(MessageEvent.prototype, "data")?.get,
      zG = Object.getOwnPropertyDescriptor(Object.getPrototypeOf(Uint8Array.prototype), "buffer").get,
      EG = function() {
        try {
          return (0, yG.i)(KG, "Worker", !0) && (0, yG.i)(hG, "postMessage") && (0, yG.i)(dG, "terminate") && (0, yG.i)(zG, "buffer") && void 0 !== JG && void 0 !== rG
        } catch {
          return !1
        }
      }();
    let oG = !1;

    function XG() {
      return EG && !oG
    }
    class uG {
      worker = null;
      failed = !1;
      constructor() {
        if (XG()) try {
          this.worker = CG(), QG(JG, this.worker, ["error", () => {
            this.failed = !0
          }])
        } catch {
          this.stop()
        }
      }
      take() {
        const GG = this.worker;
        if (this.worker = null, null !== GG && this.failed) throw QG(dG, GG, []), new Error("it did not run");
        return GG
      }
      stop() {
        const GG = this.worker;
        this.worker = null, null !== GG && QG(dG, GG, [])
      }
    }
    class iG {
      decoded;
      worker;
      reject;
      constructor(GG, bG, ZG, wG, LG) {
        try {
          this.worker = LG?.take() ?? CG()
        } catch (YG) {
          throw oG = !0, new Error(`The zstd decoder's worker did not start: ${(0,kG.f)(YG)}`)
        }
        const yG = this.worker;
        this.decoded = (0, SG.i)(((bG, SG) => {
          this.reject = SG;
          const LG = (GG, bG) => {
            QG(JG, yG, [GG, bG])
          };
          LG("message", (GG => {
            wG();
            try {
              const wG = QG(rG, GG, []);
              if (!0 === wG) bG();
              else {
                if ("string" === typeof wG) throw wG.startsWith(kG.e) && (oG = !0), new Error(wG);
                ZG(wG, QG(UG.w, wG, []))
              }
            } catch (YG) {
              SG(YG)
            }
          })), LG("error", (() => {
            oG = !0, SG(new Error("The zstd decoder's worker did not run"))
          })), LG("messageerror", (() => {
            SG(new Error(`${GG}'s decoder sent a piece that could not be read`))
          }))
        })), (0, UG.X)(this.decoded), QG(hG, yG, [
          [GG, bG]
        ])
      }
      push(GG) {
        QG(hG, this.worker, [GG, [QG(zG, GG, [])]])
      }
      end() {
        QG(hG, this.worker, [null])
      }
      markWorkerFailed() {
        oG = !0
      }
      fail(GG) {
        this.reject(GG), this.terminate()
      }
      terminate() {
        QG(dG, this.worker, [])
      }
    }

    function CG() {
      if (globalThis.Worker !== KG) throw new Error("Worker is not the one the page loaded with");
      return new Worker(new URL(ZG.p + ZG.u(68), ZG.b), {
        name: "wasmZstdDecoder",
        type: "module"
      })
    }
    const WG = Reflect.apply,
      mG = ArrayBuffer,
      IG = "undefined" === typeof Response ? void 0 : Response,
      FG = "undefined" === typeof ReadableStream ? void 0 : ReadableStream,
      vG = function() {
        let GG;
        void 0 !== FG && new FG({
          __proto__: null,
          start(bG) {
            const {
              enqueue: ZG,
              close: wG,
              error: SG
            } = Object.getPrototypeOf(bG);
            GG = {
              enqueue: ZG,
              close: wG,
              error: SG
            }
          }
        }, {
          __proto__: null
        });
        return GG
      }(),
      aG = function() {
        try {
          return "undefined" !== typeof WebAssembly && "function" === typeof WebAssembly.compileStreaming && void 0 !== vG && (0, yG.i)(IG, "Response", !0) && (0, yG.i)(FG, "ReadableStream", !0) && (0, yG.i)(vG.enqueue, "enqueue") && (0, yG.i)(vG.close, "close") && (0, yG.i)(vG.error, "error") && (0, yG.i)(UG.$, "body") && (0, yG.i)(UG.N, "getReader") && (0, yG.i)(UG._, "read")
        } catch {
          return !1
        }
      }();
    async function cG(GG, bG, ZG, wG, LG, yG, YG) {
      const VG = new mG(bG),
        {
          controller: pG,
          compiled: fG
        } = function(GG) {
          try {
            let GG;
            const bG = new FG({
                __proto__: null,
                start(bG) {
                  GG = bG
                }
              }, {
                __proto__: null
              }),
              ZG = new IG(bG, {
                __proto__: null,
                headers: {
                  __proto__: null,
                  "Content-Type": "application/wasm"
                }
              });
            return {
              controller: GG,
              compiled: (0, UG.X)((0, UG.B)((0, UG.db)(ZG)))
            }
          } catch (bG) {
            throw new Error(`${GG} could not be streamed into a compile: ${(0,kG.f)(bG)}`)
          }
        }(GG),
        {
          enqueue: QG,
          close: KG,
          error: hG
        } = vG,
        dG = GG => {
          try {
            WG(hG, pG, [GG])
          } catch {}
        };
      let JG = 0;
      const rG = (ZG, wG) => {
        if (JG + wG > bG) throw new Error(`${GG} decoded past its module's ${bG} bytes`);
        WG(UG.ab, new UG.q(VG), [new UG.q(ZG), JG]);
        try {
          WG(QG, pG, [new UG.q(VG, JG, wG)])
        } catch {}
        JG += wG
      };
      let zG, EG;
      try {
        zG = new iG(GG, bG, rG, wG, YG)
      } catch (CG) {
        throw dG(CG), CG
      }
      const oG = GG => {
        zG.fail(GG), void 0 !== EG && lG(EG)
      };
      let XG = !1;
      ZG.addEventListener("abort", (() => {
        XG && zG.markWorkerFailed(), oG(new Error(`${GG} stalled`))
      }), {
        once: !0
      }), (0, SG.u)(fG, (() => {}), oG);
      try {
        let yG;
        try {
          yG = await fetch(GG, {
            signal: ZG
          })
        } catch (CG) {
          throw new Error(`Fetching ${GG} failed: ${(0,kG.f)(CG)}`)
        }
        const {
          ok: YG,
          status: VG,
          body: pG
        } = function(GG, bG) {
          try {
            const {
              ok: GG,
              status: ZG
            } = bG;
            return {
              ok: GG,
              status: ZG,
              body: WG(UG.$, bG, [])
            }
          } catch {
            throw new Error(`${GG} came in a response a page script made`)
          }
        }(GG, yG);
        if (!YG) throw new Error(`Fetching ${GG} failed: HTTP ${VG}`);
        wG();
        const fG = WG(UG.N, pG, []);
        EG = fG;
        const QG = () => {
          lG(fG)
        };
        for ((0, SG.u)(zG.decoded, QG, QG);;) {
          let bG;
          try {
            bG = await WG(UG._, fG, [])
          } catch (CG) {
            throw new Error(`Downloading ${GG} failed: ${(0,kG.f)(CG)}`)
          }
          if (bG.done) break;
          wG(), zG.push(bG.value)
        }
        if (XG = !0, zG.end(), await zG.decoded, LG(), JG !== bG) throw new Error(`${GG} ended before its module did`)
      } catch (CG) {
        throw dG(CG), oG(CG), CG
      }
      zG.terminate();
      try {
        WG(KG, pG, [])
      } catch {}
      const uG = await fG;
      return void 0 !== yG && await (0, UG.y)(GG, new UG.q(VG), {
        sha256: yG.sha256,
        onMismatch: () => {}
      }), uG
    }

    function lG(GG) {
      try {
        (0, UG.X)(GG.cancel())
      } catch {}
    }
    const jG = ".zst.bin",
      PG = 1e3;
    let MG = null;

    function AG(GG) {
      return MG ??= function() {
        const GG = new Map,
          bG = "bloxd_wasm_webgpu:5136886,bloxd_wasm_webgl:5516433,bloxd_wasm_webgl1:4851485,bloxd_wasm_workers:201241,bloxd_wasm_models:311531,bloxd_wasm_client:3712496";
        for (const ZG of bG?.split(",") ?? []) {
          const [bG = "", wG] = ZG.split(":"), SG = Number(wG);
          Number.isInteger(SG) && SG > 0 && GG.set(bG, SG)
        }
        return GG
      }(), MG.get(GG)
    }
    async function sG(GG, bG) {
      let ZG = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
      const wG = AG(GG.name);
      if (void 0 === wG) return qG(await nG(GG, bG, ZG), "cold-wasm");
      const LG = aG ? new uG : null;
      let yG;
      try {
        if (YG = GG.url(), fG()?.includes(pG(YG)) && await async function(GG) {
            const bG = new AbortController;
            let ZG;
            const wG = (0, SG.i)((GG => {
              ZG = setTimeout((() => {
                bG.abort(), GG(null)
              }), PG)
            }));
            try {
              const ZG = fetch(GG.href, {
                  cache: "only-if-cached",
                  mode: "same-origin",
                  signal: bG.signal
                }),
                LG = await (0, SG.r)([ZG, wG]);
              return !!LG?.ok && ((0, UG.X)(LG.body.cancel()), !0)
            } catch {
              return !1
            } finally {
              clearTimeout(ZG)
            }
          }(GG.url())) return LG?.stop(), await async function(GG, bG, ZG, wG) {
          let SG = !1;
          const LG = ZG && {
            sha256: ZG.sha256,
            onMismatch: () => {
              SG = !0
            }
          };
          try {
            return qG(await nG(GG, LG, wG), "warm")
          } catch (yG) {
            const wG = await gG(GG, bG, ZG, null);
            if (null === wG) throw SG && ZG.onMismatch(), yG;
            return console.warn(`${GG.url().href} from the HTTP cache failed: ${(0,kG.f)(yG)}: loaded its copy instead`), qG(wG, SG ? "warm-refused" : "warm-broken")
          }
        }(GG, wG, bG, ZG);
        yG = await gG(GG, wG, bG, LG)
      } finally {
        LG?.stop()
      }
      var YG;
      return null !== yG ? qG(yG, "cold-worker") : qG(await nG(GG, bG, ZG), "cold-wasm")
    }

    function qG(GG, bG) {
      return {
        __proto__: null,
        module: GG,
        path: bG
      }
    }

    function nG(GG, bG, ZG) {
      return void 0 === AG(GG.name) ? (0, UG.G)(GG.url(), bG, ZG) : (0, UG.G)(GG.url(), bG, {
        ...ZG,
        hideThen: !0,
        onDownloaded: () => {
          ! function(GG) {
            const bG = fG();
            if (null === bG) return;
            const ZG = pG(GG),
              wG = bG.filter((GG => GG !== ZG));
            wG.push(ZG);
            try {
              localStorage.setItem(YG, JSON.stringify(wG.slice(-VG)))
            } catch (SG) {
              console.warn(`Bloxd wasm: ${ZG} could not be recorded as downloaded: a later join asks the HTTP cache nothing for it`, SG)
            }
          }(GG.url()), ZG.onDownloaded?.()
        }
      })
    }
    async function gG(GG, bG, ZG, wG) {
      if (!aG || !XG()) return null;
      const SG = GG.url(),
        LG = `${SG.href}${jG}`;
      try {
        return await (0, UG.cb)(LG, ((GG, SG, yG) => cG(LG, bG, GG, SG, yG, ZG, wG)))
      } catch (yG) {
        return console.warn(`${(0,kG.f)(yG)}: loading ${SG.href} instead`), null
      }
    }
    let eG = null,
      RG = !1;
    const TG = new Map,
      HG = new Map;

    function tG(GG, bG, ZG) {
      return null === eG ? eG = NG(GG, bG, ZG?.memoryMaximumBytes) : GG !== eG.build ? console.warn(`Bloxd wasm: ${GG.name} was asked for after ${eG.build.name} started loading, which this thread keeps`) : bG.name !== eG.workers.name && console.warn(`Bloxd wasm: ${bG.name} was asked for workers after ${eG.workers.name}, which this thread keeps`), ZG?.reloadFailedDownload && !RG && (0, wG.bb)() && (RG = !0, eG = NG(eG.build, eG.workers, eG.memoryMaximumBytes)), eG.loaded
    }

    function DG(GG, bG) {
      if (null !== eG) return (0, SG.e)([]);
      const ZG = GG.filter((GG => !TG.has(GG.name))).map((GG => {
        const ZG = new AbortController,
          wG = {
            compiled: nG(GG, (0, LG.e)(GG.name), {
              priority: bG,
              RZ: ZG.signal,
              onDownloaded: () => {
                wG.downloaded = !0
              },
              retries: {
                onRetry: () => {
                  wG.downloaded = !1, null !== eG && ZG.abort()
                }
              }
            }),
            cancel: ZG,
            downloaded: !1
          };
        return TG.set(GG.name, wG), (0, SG.i)((bG => {
          (0, SG.u)(wG.compiled, (() => {
            wG.downloaded = !0, bG()
          }), (wG => {
            ZG.signal.aborted || console.warn(`Bloxd wasm: ${GG.name}'s compile ahead of the load failed: the load compiles it afresh`, wG), bG()
          }))
        }))
      }));
      return (0, SG.e)(ZG)
    }

    function NG(GG, bG, ZG) {
      const LG = (0, wG.J)((async () => {
        (0, yG.C)(), HG.clear();
        const ZG = xG(GG),
          wG = bG.name === GG.name ? ZG : xG(bG);
        for (const {
            cancel: GG
          }
          of TG.values()) GG.abort();
        TG.clear(), await (0, SG.e)([ZG, wG]);
        const LG = await ZG,
          kG = await wG;
        return (0, yG.C)(), {
          module: LG,
          workerModule: kG
        }
      }), GG, ZG);
      return {
        build: GG,
        workers: bG,
        memoryMaximumBytes: ZG,
        loaded: LG
      }
    }

    function OG(GG) {
      return HG.get(GG)
    }

    function xG(GG) {
      const bG = performance.now(),
        ZG = TG.get(GG.name);
      TG.delete(GG.name);
      const wG = !0 === ZG?.downloaded ? ZG : void 0;
      return void 0 !== ZG && void 0 === wG && ZG.cancel.abort(), (0, SG.i)(((ZG, LG) => {
        const yG = (wG, SG) => {
            HG.set(GG.name, {
              path: SG,
              ms: performance.now() - bG
            }), ZG(wG)
          },
          kG = () => {
            (0, SG.u)(Gb(GG), (GG => {
              let {
                module: bG,
                path: ZG
              } = GG;
              yG(bG, ZG)
            }), LG)
          };
        void 0 === wG ? kG() : (0, SG.u)(wG.compiled, (GG => {
          yG(GG, "ahead")
        }), kG)
      }))
    }
    async function BG(GG, bG) {
      const {
        module: ZG
      } = await Gb(GG, {
        retries: bG
      });
      return ZG
    }
    async function Gb(GG) {
      let bG = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
      return await sG(GG, (0, LG.e)(GG.name), bG)
    }
  },
  6617: (GG, bG, ZG) => {
    ZG.d(bG, {
      e: () => yG
    });
    var wG = ZG(2872);
    const SG = {
      bloxd_wasm: () => "227276669bc81789ae0877e56ad1fa5148b881f36403e765502d7e555a33087b",
      bloxd_wasm_client: () => "fde6efab397f5d28c36c7f7a90c3f8e1e62ec9f2af8488ddf98fdaa9b2cebcf1",
      bloxd_wasm_workers: () => "a8f5ca009ba569fbb81d001dc1c9c7b54b8e4226097b17169475b4bb5e1b6f99",
      bloxd_wasm_models: () => "097716d2f3ac493be1328cd23cfea825beae0b4d004cb4793fdff4648d25e301",
      bloxd_wasm_webgpu: () => "67fd54aabb1d4d6967e430405453b87c364949978d0f7829b088145aae1e9ce5",
      bloxd_wasm_webgl: () => "cdb0cf8160692e68dd70a2abf12e1128a08d64229d0469d4cc325cafd535e3d2",
      bloxd_wasm_webgl1: () => "e8028f55daf732b5703910fe0886408ee732d8fa1e0480d554692849ab6badfa",
      bloxd_wasm_replay: () => "218045edbe3647b06370037bf62e2cd5b77074e838aa33d42c210d12a23e3077",
      bloxd_wasm_recorder: () => "8c52d908a7d9cbdccb92ee77564b71599d585f3b620f197e3396dcac8eca4f39",
      bloxd_wasm_anim: () => "4aa0ad1549e0d5c6e1e816ef89f5c6c760fcacd619ca992ecbfbe1cf2f199e59",
      bloxd_wasm_textures: () => "e5d65888cff795e87fa902109722e0986a22a654053de444a1b316ec7c6a343f",
      bloxd_wasm_shader_pack: () => "1379c312c4022055abc387da5e4950082e1556f2bea4656a45cd7e8eb7e7ab66"
    };
    var LG = ZG(4708);

    function yG(GG) {
      const bG = Object.prototype.hasOwnProperty.call(SG, GG) ? SG[GG]() : void 0;
      if (void 0 !== bG) return {
        sha256: bG,
        onMismatch: LG.y
      };
      throw new wG.k(`${GG} has no release digest, so this build refuses it`)
    }
  }
};
Object.freeze(modules);
for (const GG in modules) Object.freeze(modules[GG]);