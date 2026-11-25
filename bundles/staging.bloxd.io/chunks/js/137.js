export const id = 137;
export const ids = [137];
export const modules = {
  36330: (BB, IB, ZB) => {
    ZB.d(IB, {
      b: () => EB,
      c: () => SB,
      e: () => KB,
      h: () => xB
    });
    var TB = ZB(3036),
      JB = ZB(3059),
      oB = ZB(6771),
      GB = ZB(4874),
      vB = ZB(3052),
      kB = ZB(3043);
    const cB = "bloxd-wasmDownloaded",
      nB = 12;

    function hB(BB) {
      return BB.pathname.slice(BB.pathname.lastIndexOf("/") + 1)
    }

    function zB() {
      try {
        if ("undefined" === typeof localStorage) return null;
        const BB = JSON.parse(localStorage.getItem(cB) ?? "[]");
        return Array.isArray(BB) ? BB.filter((BB => "string" === typeof BB)) : []
      } catch (BB) {
        return console.warn("Bloxd wasm: the record of downloaded modules could not be read: asking the HTTP cache for none", BB), null
      }
    }
    const FB = Reflect.apply,
      NB = "undefined" === typeof Worker ? void 0 : Worker,
      gB = NB?.prototype.postMessage,
      qB = NB?.prototype.terminate,
      yB = "undefined" === typeof EventTarget ? void 0 : EventTarget.prototype.addEventListener,
      UB = "undefined" === typeof MessageEvent ? void 0 : Object.getOwnPropertyDescriptor(MessageEvent.prototype, "data")?.get,
      WB = Object.getOwnPropertyDescriptor(Object.getPrototypeOf(Uint8Array.prototype), "buffer").get,
      dB = function() {
        try {
          return (0, GB.p)(NB, "Worker", !0) && (0, GB.p)(gB, "postMessage") && (0, GB.p)(qB, "terminate") && (0, GB.p)(WB, "buffer") && void 0 !== yB && void 0 !== UB
        } catch {
          return !1
        }
      }();
    let CB = !1;

    function QB() {
      return dB && !CB
    }
    class sB {
      worker = null;
      failed = !1;
      constructor() {
        if (QB()) try {
          this.worker = OB(), FB(yB, this.worker, ["error", () => {
            this.failed = !0
          }])
        } catch {
          this.stop()
        }
      }
      take() {
        const BB = this.worker;
        if (this.worker = null, null !== BB && this.failed) throw FB(qB, BB, []), new Error("it did not run");
        return BB
      }
      stop() {
        const BB = this.worker;
        this.worker = null, null !== BB && FB(qB, BB, [])
      }
    }
    class wB {
      decoded;
      worker;
      reject;
      constructor(BB, IB, ZB, TB, oB) {
        try {
          this.worker = oB?.take() ?? OB()
        } catch (cB) {
          throw CB = !0, new Error(`The zstd decoder's worker did not start: ${(0,vB.i)(cB)}`)
        }
        const GB = this.worker;
        this.decoded = (0, JB.g)(((IB, JB) => {
          this.reject = JB;
          const oB = (BB, IB) => {
            FB(yB, GB, [BB, IB])
          };
          oB("message", (BB => {
            TB();
            try {
              const TB = FB(UB, BB, []);
              if (!0 === TB) IB();
              else {
                if ("string" === typeof TB) throw TB.startsWith(vB.e) && (CB = !0), new Error(TB);
                ZB(TB, FB(kB.x, TB, []))
              }
            } catch (cB) {
              JB(cB)
            }
          })), oB("error", (() => {
            CB = !0, JB(new Error("The zstd decoder's worker did not run"))
          })), oB("messageerror", (() => {
            JB(new Error(`${BB}'s decoder sent a piece that could not be read`))
          }))
        })), (0, kB.V)(this.decoded), FB(gB, GB, [
          [BB, IB]
        ])
      }
      push(BB) {
        FB(gB, this.worker, [BB, [FB(WB, BB, [])]])
      }
      end() {
        FB(gB, this.worker, [null])
      }
      markWorkerFailed() {
        CB = !0
      }
      fail(BB) {
        this.reject(BB), this.terminate()
      }
      terminate() {
        FB(qB, this.worker, [])
      }
    }

    function OB() {
      if (globalThis.Worker !== NB) throw new Error("Worker is not the one the page loaded with");
      return new Worker(new URL(ZB.p + ZB.u(68), ZB.b), {
        name: "wasmZstdDecoder",
        type: "module"
      })
    }
    const YB = Reflect.apply,
      iB = ArrayBuffer,
      pB = "undefined" === typeof Response ? void 0 : Response,
      aB = "undefined" === typeof ReadableStream ? void 0 : ReadableStream,
      HB = function() {
        let BB;
        void 0 !== aB && new aB({
          __proto__: null,
          start(IB) {
            const {
              enqueue: ZB,
              close: TB,
              error: JB
            } = Object.getPrototypeOf(IB);
            BB = {
              enqueue: ZB,
              close: TB,
              error: JB
            }
          }
        }, {
          __proto__: null
        });
        return BB
      }(),
      MB = function() {
        try {
          return "undefined" !== typeof WebAssembly && "function" === typeof WebAssembly.compileStreaming && void 0 !== HB && (0, GB.p)(pB, "Response", !0) && (0, GB.p)(aB, "ReadableStream", !0) && (0, GB.p)(HB.enqueue, "enqueue") && (0, GB.p)(HB.close, "close") && (0, GB.p)(HB.error, "error") && (0, GB.p)(kB.Y, "body") && (0, GB.p)(kB.P, "getReader") && (0, GB.p)(kB.X, "read")
        } catch {
          return !1
        }
      }();
    async function jB(BB, IB, ZB, TB, oB, GB, cB) {
      const nB = new iB(IB),
        {
          controller: hB,
          compiled: zB
        } = function(BB) {
          try {
            let BB;
            const IB = new aB({
                __proto__: null,
                start(IB) {
                  BB = IB
                }
              }, {
                __proto__: null
              }),
              ZB = new pB(IB, {
                __proto__: null,
                headers: {
                  __proto__: null,
                  "Content-Type": "application/wasm"
                }
              });
            return {
              controller: BB,
              compiled: (0, kB.V)((0, kB.C)((0, kB.db)(ZB)))
            }
          } catch (IB) {
            throw new Error(`${BB} could not be streamed into a compile: ${(0,vB.i)(IB)}`)
          }
        }(BB),
        {
          enqueue: FB,
          close: NB,
          error: gB
        } = HB,
        qB = BB => {
          try {
            YB(gB, hB, [BB])
          } catch {}
        };
      let yB = 0;
      const UB = (ZB, TB) => {
        if (yB + TB > IB) throw new Error(`${BB} decoded past its module's ${IB} bytes`);
        YB(kB._, new kB.o(nB), [new kB.o(ZB), yB]);
        try {
          YB(FB, hB, [new kB.o(nB, yB, TB)])
        } catch {}
        yB += TB
      };
      let WB, dB;
      try {
        WB = new wB(BB, IB, UB, TB, cB)
      } catch (OB) {
        throw qB(OB), OB
      }
      const CB = BB => {
        WB.fail(BB), void 0 !== dB && PB(dB)
      };
      let QB = !1;
      ZB.addEventListener("abort", (() => {
        QB && WB.markWorkerFailed(), CB(new Error(`${BB} stalled`))
      }), {
        once: !0
      }), (0, JB.p)(zB, (() => {}), CB);
      try {
        let GB;
        try {
          GB = await fetch(BB, {
            signal: ZB
          })
        } catch (OB) {
          throw new Error(`Fetching ${BB} failed: ${(0,vB.i)(OB)}`)
        }
        const {
          ok: cB,
          status: nB,
          body: hB
        } = function(BB, IB) {
          try {
            const {
              ok: BB,
              status: ZB
            } = IB;
            return {
              ok: BB,
              status: ZB,
              body: YB(kB.Y, IB, [])
            }
          } catch {
            throw new Error(`${BB} came in a response a page script made`)
          }
        }(BB, GB);
        if (!cB) throw new Error(`Fetching ${BB} failed: HTTP ${nB}`);
        TB();
        const zB = YB(kB.P, hB, []);
        dB = zB;
        const FB = () => {
          PB(zB)
        };
        for ((0, JB.p)(WB.decoded, FB, FB);;) {
          let IB;
          try {
            IB = await YB(kB.X, zB, [])
          } catch (OB) {
            throw new Error(`Downloading ${BB} failed: ${(0,vB.i)(OB)}`)
          }
          if (IB.done) break;
          TB(), WB.push(IB.value)
        }
        if (QB = !0, WB.end(), await WB.decoded, oB(), yB !== IB) throw new Error(`${BB} ended before its module did`)
      } catch (OB) {
        throw qB(OB), CB(OB), OB
      }
      WB.terminate();
      try {
        YB(NB, hB, [])
      } catch {}
      const sB = await zB;
      return void 0 !== GB && await (0, kB.B)(BB, new kB.o(nB), {
        sha256: GB.sha256,
        onMismatch: () => {}
      }), sB
    }

    function PB(BB) {
      try {
        (0, kB.V)(BB.cancel())
      } catch {}
    }
    const RB = ".zst.bin",
      rB = 1e3;
    let mB = null;

    function XB(BB) {
      return mB ??= function() {
        const BB = new Map,
          IB = "bloxd_wasm_webgpu:5136471,bloxd_wasm_webgl:5516365,bloxd_wasm_webgl1:4851467,bloxd_wasm_workers:201241,bloxd_wasm_models:311531,bloxd_wasm_client:3712496";
        for (const ZB of IB?.split(",") ?? []) {
          const [IB = "", TB] = ZB.split(":"), JB = Number(TB);
          Number.isInteger(JB) && JB > 0 && BB.set(IB, JB)
        }
        return BB
      }(), mB.get(BB)
    }
    async function LB(BB, IB) {
      let ZB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
      const TB = XB(BB.name);
      if (void 0 === TB) return eB(await uB(BB, IB, ZB), "cold-wasm");
      const oB = MB ? new sB : null;
      let GB;
      try {
        if (cB = BB.url(), zB()?.includes(hB(cB)) && await async function(BB) {
            const IB = new AbortController;
            let ZB;
            const TB = (0, JB.g)((BB => {
              ZB = setTimeout((() => {
                IB.abort(), BB(null)
              }), rB)
            }));
            try {
              const ZB = fetch(BB.href, {
                  cache: "only-if-cached",
                  mode: "same-origin",
                  signal: IB.signal
                }),
                oB = await (0, JB.m)([ZB, TB]);
              return !!oB?.ok && ((0, kB.V)(oB.body.cancel()), !0)
            } catch {
              return !1
            } finally {
              clearTimeout(ZB)
            }
          }(BB.url())) return oB?.stop(), await async function(BB, IB, ZB, TB) {
          let JB = !1;
          const oB = ZB && {
            sha256: ZB.sha256,
            onMismatch: () => {
              JB = !0
            }
          };
          try {
            return eB(await uB(BB, oB, TB), "warm")
          } catch (GB) {
            const TB = await fB(BB, IB, ZB, null);
            if (null === TB) throw JB && ZB.onMismatch(), GB;
            return console.warn(`${BB.url().href} from the HTTP cache failed: ${(0,vB.i)(GB)}: loaded its copy instead`), eB(TB, JB ? "warm-refused" : "warm-broken")
          }
        }(BB, TB, IB, ZB);
        GB = await fB(BB, TB, IB, oB)
      } finally {
        oB?.stop()
      }
      var cB;
      return null !== GB ? eB(GB, "cold-worker") : eB(await uB(BB, IB, ZB), "cold-wasm")
    }

    function eB(BB, IB) {
      return {
        __proto__: null,
        module: BB,
        path: IB
      }
    }

    function uB(BB, IB, ZB) {
      return void 0 === XB(BB.name) ? (0, kB.J)(BB.url(), IB, ZB) : (0, kB.J)(BB.url(), IB, {
        ...ZB,
        hideThen: !0,
        onDownloaded: () => {
          ! function(BB) {
            const IB = zB();
            if (null === IB) return;
            const ZB = hB(BB),
              TB = IB.filter((BB => BB !== ZB));
            TB.push(ZB);
            try {
              localStorage.setItem(cB, JSON.stringify(TB.slice(-nB)))
            } catch (JB) {
              console.warn(`Bloxd wasm: ${ZB} could not be recorded as downloaded: a later join asks the HTTP cache nothing for it`, JB)
            }
          }(BB.url()), ZB.onDownloaded?.()
        }
      })
    }
    async function fB(BB, IB, ZB, TB) {
      if (!MB || !QB()) return null;
      const JB = BB.url(),
        oB = `${JB.href}${RB}`;
      try {
        return await (0, kB.ab)(oB, ((BB, JB, GB) => jB(oB, IB, BB, JB, GB, ZB, TB)))
      } catch (GB) {
        return console.warn(`${(0,vB.i)(GB)}: loading ${JB.href} instead`), null
      }
    }
    let lB = null,
      AB = !1;
    const tB = new Map,
      bB = new Map;

    function xB(BB, IB, ZB) {
      return null === lB ? lB = DB(BB, IB, ZB?.memoryMaximumBytes) : BB !== lB.build ? console.warn(`Bloxd wasm: ${BB.name} was asked for after ${lB.build.name} started loading, which this thread keeps`) : IB.name !== lB.workers.name && console.warn(`Bloxd wasm: ${IB.name} was asked for workers after ${lB.workers.name}, which this thread keeps`), ZB?.reloadFailedDownload && !AB && (0, TB.Y)() && (AB = !0, lB = DB(lB.build, lB.workers, lB.memoryMaximumBytes)), lB.loaded
    }

    function EB(BB, IB) {
      if (null !== lB) return (0, JB.e)([]);
      const ZB = BB.filter((BB => !tB.has(BB.name))).map((BB => {
        const ZB = new AbortController,
          TB = {
            compiled: uB(BB, (0, oB.e)(BB.name), {
              priority: IB,
              fZ: ZB.signal,
              onDownloaded: () => {
                TB.downloaded = !0
              },
              retries: {
                onRetry: () => {
                  TB.downloaded = !1, null !== lB && ZB.abort()
                }
              }
            }),
            cancel: ZB,
            downloaded: !1
          };
        return tB.set(BB.name, TB), (0, JB.g)((IB => {
          (0, JB.p)(TB.compiled, (() => {
            TB.downloaded = !0, IB()
          }), (TB => {
            ZB.signal.aborted || console.warn(`Bloxd wasm: ${BB.name}'s compile ahead of the load failed: the load compiles it afresh`, TB), IB()
          }))
        }))
      }));
      return (0, JB.e)(ZB)
    }

    function DB(BB, IB, ZB) {
      const oB = (0, TB.F)((async () => {
        (0, GB.F)(), bB.clear();
        const ZB = VB(BB),
          TB = IB.name === BB.name ? ZB : VB(IB);
        for (const {
            cancel: BB
          }
          of tB.values()) BB.abort();
        tB.clear(), await (0, JB.e)([ZB, TB]);
        const oB = await ZB,
          vB = await TB;
        return (0, GB.F)(), {
          module: oB,
          workerModule: vB
        }
      }), BB, ZB);
      return {
        build: BB,
        workers: IB,
        memoryMaximumBytes: ZB,
        loaded: oB
      }
    }

    function KB(BB) {
      return bB.get(BB)
    }

    function VB(BB) {
      const IB = performance.now(),
        ZB = tB.get(BB.name);
      tB.delete(BB.name);
      const TB = !0 === ZB?.downloaded ? ZB : void 0;
      return void 0 !== ZB && void 0 === TB && ZB.cancel.abort(), (0, JB.g)(((ZB, oB) => {
        const GB = (TB, JB) => {
            bB.set(BB.name, {
              path: JB,
              ms: performance.now() - IB
            }), ZB(TB)
          },
          vB = () => {
            (0, JB.p)(BI(BB), (BB => {
              let {
                module: IB,
                path: ZB
              } = BB;
              GB(IB, ZB)
            }), oB)
          };
        void 0 === TB ? vB() : (0, JB.p)(TB.compiled, (BB => {
          GB(BB, "ahead")
        }), vB)
      }))
    }
    async function SB(BB, IB) {
      const {
        module: ZB
      } = await BI(BB, {
        retries: IB
      });
      return ZB
    }
    async function BI(BB) {
      let IB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
      return await LB(BB, (0, oB.e)(BB.name), IB)
    }
  },
  6771: (BB, IB, ZB) => {
    ZB.d(IB, {
      e: () => GB
    });
    var TB = ZB(3043);
    const JB = {
      bloxd_wasm: () => "3929318ab85efbe7fbf015b7202f97f9213e396225d80b3db1d6eea98607e192",
      bloxd_wasm_client: () => "de8797e7a2073a4b84142d0cdd231107132c281529510d44e15de2b324a3a30f",
      bloxd_wasm_workers: () => "e392be22de1540260052c3350081c85739d1c5bc24a5222edf6de5771f9d53cc",
      bloxd_wasm_models: () => "18f455c31b6430161028848ff988084c6b16d32d8fa12d4af984837abfc3144f",
      bloxd_wasm_webgpu: () => "5526ae404536156accd26af71c2bbbeb37703fbb83da322278378d23a1e1d759",
      bloxd_wasm_webgl: () => "cbc2e38eabd8d787bc137c7584b67ac7d90d219065d8b2cfc013c2b7b96e44bf",
      bloxd_wasm_webgl1: () => "729c4755d993e2a2b24848672562e1cfcebc5f2cf7acaf33d9fc9440993d6ec7",
      bloxd_wasm_replay: () => "42d3e76b4bdf858378fb0fb477290e11c66f2e51aa3947bbbd34ee4a53e1e6c0",
      bloxd_wasm_recorder: () => "d9158108e4a445accd8d7aa1bf531832e077768eae0055f5cadb78f130f5884f",
      bloxd_wasm_anim: () => "1aac61a86d6f89bb60de30b43c299b746d630e8811ba65a52be7c2f8e04ccd3d",
      bloxd_wasm_textures: () => "24c39accf0c81e5ab4e85e999b876eef419c50c2e0b92783b293de227d550aeb",
      bloxd_wasm_shader_pack: () => "6ef135dd10de9c09f7158eff62c3ec8671e1706d2e1ff29eeda717db01789bd3"
    };
    var oB = ZB(4874);

    function GB(BB) {
      const IB = Object.prototype.hasOwnProperty.call(JB, BB) ? JB[BB]() : void 0;
      if (void 0 !== IB) return {
        sha256: IB,
        onMismatch: oB.D
      };
      throw new TB.g(`${BB} has no release digest, so this build refuses it`)
    }
  }
};
Object.freeze(modules);
for (const BB in modules) Object.freeze(modules[BB]);