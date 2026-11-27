export const id = 158;
export const ids = [158];
export const modules = {
  37183: (RR, JR, GR) => {
    GR.d(JR, {
      e: () => qR,
      h: () => fR,
      i: () => ZR,
      k: () => KR
    });
    var yR = GR(37169),
      tR = GR(14);
    const uR = /wasm-function\[\d+\]|wasm:\/\/|\[wasm code\]/;

    function ZR(RR) {
      if (RR instanceof WebAssembly.RuntimeError) return !0;
      const JR = RR instanceof Error ? RR.stack : void 0;
      return "string" === typeof JR && uR.test(JR)
    }

    function qR(RR, JR, GR) {
      var tR;
      const ZR = RR instanceof Error ? RR.name : "thrown",
        qR = (RR instanceof Error && null !== (tR = RR.stack) && void 0 !== tR ? tR : "").split("\n").filter((RR => uR.test(RR))).slice(0, 8).map((RR => RR.trim())),
        iR = null === JR ? "wasm memory unknown" : `wasm memory ${Math.round(JR/2**20)} MB`,
        fR = null === GR.panic ? "" : `, panic: ${(0,yR.e)(GR.panic)}`,
        VR = `${ZR}: ${RR instanceof Error?RR.message:String(RR)}`;
      return `${(0,yR.k)(GR.kind,GR.refusedBytes)} ${VR} (${iR})${fR}${qR.length>0?` | ${qR.join(" < ")}`:""}`
    }
    const iR = /on a detached ArrayBuffer|access detached ArrayBuffer|has been detached from the view/;

    function fR(RR) {
      var JR;
      let GR = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ArrayBuffer.prototype;
      if (!(RR instanceof Error) || !iR.test(RR.message)) return {};
      if (!("detached" in GR)) return {
        arrayBufferDetached: "absent"
      };
      return {
        arrayBufferDetached: (0, tR.R)(null === (JR = (0, tR.I)(GR, "detached")) || void 0 === JR ? void 0 : JR.get, /^function (get )?detached\(\) \{\s*\[native code\]\s*\}$/) ? "native" : "script"
      }
    }
    const VR = 500;

    function KR(RR) {
      let JR = "[object Object]";
      try {
        JR = String(RR)
      } catch {}
      if ("[object Object]" !== JR) return JR;
      try {
        var GR, yR;
        return null !== (GR = null === (yR = JSON.stringify(RR)) || void 0 === yR ? void 0 : yR.slice(0, VR)) && void 0 !== GR ? GR : JR
      } catch {
        return JR
      }
    }
  },
  37213: (RR, JR, GR) => {
    GR.d(JR, {
      e: () => hR,
      h: () => yJ,
      k: () => FR,
      o: () => JJ,
      r: () => TR,
      s: () => sR
    });
    var yR = GR(2448),
      tR = GR(2470),
      uR = GR(7762),
      ZR = GR(5554),
      qR = GR(2466),
      iR = GR(2457);
    const fR = "bloxd-wasmDownloaded",
      VR = 12;

    function KR(RR) {
      return RR.pathname.slice(RR.pathname.lastIndexOf("/") + 1)
    }

    function wR() {
      try {
        if ("undefined" === typeof localStorage) return null;
        const RR = JSON.parse(localStorage.getItem(fR) ?? "[]");
        return Array.isArray(RR) ? RR.filter((RR => "string" === typeof RR)) : []
      } catch (RR) {
        return console.warn("Bloxd wasm: the record of downloaded modules could not be read: asking the HTTP cache for none", RR), null
      }
    }
    const rR = Reflect.apply,
      eR = "undefined" === typeof Worker ? void 0 : Worker,
      aR = eR?.prototype.postMessage,
      LR = eR?.prototype.terminate,
      nR = "undefined" === typeof EventTarget ? void 0 : EventTarget.prototype.addEventListener,
      UR = "undefined" === typeof MessageEvent ? void 0 : Object.getOwnPropertyDescriptor(MessageEvent.prototype, "data")?.get,
      WR = Object.getOwnPropertyDescriptor(Object.getPrototypeOf(Uint8Array.prototype), "buffer").get,
      AR = function() {
        try {
          return (0, ZR.p)(eR, "Worker", !0) && (0, ZR.p)(aR, "postMessage") && (0, ZR.p)(LR, "terminate") && (0, ZR.p)(WR, "buffer") && void 0 !== nR && void 0 !== UR
        } catch {
          return !1
        }
      }();
    let CR = !1;

    function XR() {
      return AR && !CR
    }
    class MR {
      worker = null;
      failed = !1;
      constructor() {
        if (XR()) try {
          this.worker = lR(), rR(nR, this.worker, ["error", () => {
            this.failed = !0
          }])
        } catch {
          this.stop()
        }
      }
      take() {
        const RR = this.worker;
        if (this.worker = null, null !== RR && this.failed) throw rR(LR, RR, []), new Error("it did not run");
        return RR
      }
      stop() {
        const RR = this.worker;
        this.worker = null, null !== RR && rR(LR, RR, [])
      }
    }
    class BR {
      decoded;
      worker;
      reject;
      constructor(RR, JR, GR, yR, uR) {
        try {
          this.worker = uR?.take() ?? lR()
        } catch (fR) {
          throw CR = !0, new Error(`The zstd decoder's worker did not start: ${(0,qR.f)(fR)}`)
        }
        const ZR = this.worker;
        this.decoded = (0, tR.h)(((JR, tR) => {
          this.reject = tR;
          const uR = (RR, JR) => {
            rR(nR, ZR, [RR, JR])
          };
          uR("message", (RR => {
            yR();
            try {
              const yR = rR(UR, RR, []);
              if (!0 === yR) JR();
              else {
                if ("string" === typeof yR) throw yR.startsWith(qR.b) && (CR = !0), new Error(yR);
                GR(yR, rR(iR.t, yR, []))
              }
            } catch (fR) {
              tR(fR)
            }
          })), uR("error", (() => {
            CR = !0, tR(new Error("The zstd decoder's worker did not run"))
          })), uR("messageerror", (() => {
            tR(new Error(`${RR}'s decoder sent a piece that could not be read`))
          }))
        })), (0, iR.P)(this.decoded), rR(aR, ZR, [
          [RR, JR]
        ])
      }
      push(RR) {
        rR(aR, this.worker, [RR, [rR(WR, RR, [])]])
      }
      end() {
        rR(aR, this.worker, [null])
      }
      markWorkerFailed() {
        CR = !0
      }
      fail(RR) {
        this.reject(RR), this.terminate()
      }
      terminate() {
        rR(LR, this.worker, [])
      }
    }

    function lR() {
      if (globalThis.Worker !== eR) throw new Error("Worker is not the one the page loaded with");
      return new Worker(new URL(GR.p + GR.u(80), GR.b), {
        name: "wasmZstdDecoder",
        type: "module"
      })
    }
    const pR = Reflect.apply,
      gR = ArrayBuffer,
      bR = "undefined" === typeof Response ? void 0 : Response,
      vR = "undefined" === typeof ReadableStream ? void 0 : ReadableStream,
      OR = function() {
        let RR;
        void 0 !== vR && new vR({
          __proto__: null,
          start(JR) {
            const {
              enqueue: GR,
              close: yR,
              error: tR
            } = Object.getPrototypeOf(JR);
            RR = {
              enqueue: GR,
              close: yR,
              error: tR
            }
          }
        }, {
          __proto__: null
        });
        return RR
      }(),
      xR = function() {
        try {
          return "undefined" !== typeof WebAssembly && "function" === typeof WebAssembly.compileStreaming && void 0 !== OR && (0, ZR.p)(bR, "Response", !0) && (0, ZR.p)(vR, "ReadableStream", !0) && (0, ZR.p)(OR.enqueue, "enqueue") && (0, ZR.p)(OR.close, "close") && (0, ZR.p)(OR.error, "error") && (0, ZR.p)(iR.T, "body") && (0, ZR.p)(iR.G, "getReader") && (0, ZR.p)(iR.Q, "read")
        } catch {
          return !1
        }
      }();
    async function NR(RR, JR, GR, yR, uR, ZR, fR) {
      const VR = new gR(JR),
        {
          controller: KR,
          compiled: wR
        } = function(RR) {
          try {
            let RR;
            const JR = new vR({
                __proto__: null,
                start(JR) {
                  RR = JR
                }
              }, {
                __proto__: null
              }),
              GR = new bR(JR, {
                __proto__: null,
                headers: {
                  __proto__: null,
                  "Content-Type": "application/wasm"
                }
              });
            return {
              controller: RR,
              compiled: (0, iR.P)((0, iR.x)((0, iR._)(GR)))
            }
          } catch (JR) {
            throw new Error(`${RR} could not be streamed into a compile: ${(0,qR.f)(JR)}`)
          }
        }(RR),
        {
          enqueue: rR,
          close: eR,
          error: aR
        } = OR,
        LR = RR => {
          try {
            pR(aR, KR, [RR])
          } catch {}
        };
      let nR = 0;
      const UR = (GR, yR) => {
        if (nR + yR > JR) throw new Error(`${RR} decoded past its module's ${JR} bytes`);
        pR(iR.V, new iR.l(VR), [new iR.l(GR), nR]);
        try {
          pR(rR, KR, [new iR.l(VR, nR, yR)])
        } catch {}
        nR += yR
      };
      let WR, AR;
      try {
        WR = new BR(RR, JR, UR, yR, fR)
      } catch (lR) {
        throw LR(lR), lR
      }
      const CR = RR => {
        WR.fail(RR), void 0 !== AR && DR(AR)
      };
      let XR = !1;
      GR.addEventListener("abort", (() => {
        XR && WR.markWorkerFailed(), CR(new Error(`${RR} stalled`))
      }), {
        once: !0
      }), (0, tR.u)(wR, (() => {}), CR);
      try {
        let ZR;
        try {
          ZR = await fetch(RR, {
            signal: GR
          })
        } catch (lR) {
          throw new Error(`Fetching ${RR} failed: ${(0,qR.f)(lR)}`)
        }
        const {
          ok: fR,
          status: VR,
          body: KR
        } = function(RR, JR) {
          try {
            const {
              ok: RR,
              status: GR
            } = JR;
            return {
              ok: RR,
              status: GR,
              body: pR(iR.T, JR, [])
            }
          } catch {
            throw new Error(`${RR} came in a response a page script made`)
          }
        }(RR, ZR);
        if (!fR) throw new Error(`Fetching ${RR} failed: HTTP ${VR}`);
        yR();
        const wR = pR(iR.G, KR, []);
        AR = wR;
        const rR = () => {
          DR(wR)
        };
        for ((0, tR.u)(WR.decoded, rR, rR);;) {
          let JR;
          try {
            JR = await pR(iR.Q, wR, [])
          } catch (lR) {
            throw new Error(`Downloading ${RR} failed: ${(0,qR.f)(lR)}`)
          }
          if (JR.done) break;
          yR(), WR.push(JR.value)
        }
        if (XR = !0, WR.end(), await WR.decoded, uR(), nR !== JR) throw new Error(`${RR} ended before its module did`)
      } catch (lR) {
        throw LR(lR), CR(lR), lR
      }
      WR.terminate();
      try {
        pR(eR, KR, [])
      } catch {}
      const MR = await wR;
      return void 0 !== ZR && await (0, iR.u)(RR, new iR.l(VR), {
        sha256: ZR.sha256,
        onMismatch: () => {}
      }), MR
    }

    function DR(RR) {
      try {
        (0, iR.P)(RR.cancel())
      } catch {}
    }
    const HR = ".zst.bin",
      oR = 1e3;
    let cR = null;

    function PR(RR) {
      return cR ??= function() {
        const RR = new Map,
          JR = "bloxd_wasm_webgpu:5238928,bloxd_wasm_webgl:5662882,bloxd_wasm_webgl1:4934167,bloxd_wasm_workers:203635,bloxd_wasm_models:478484,bloxd_wasm_client:3741670";
        for (const GR of JR?.split(",") ?? []) {
          const [JR = "", yR] = GR.split(":"), tR = Number(yR);
          Number.isInteger(tR) && tR > 0 && RR.set(JR, tR)
        }
        return RR
      }(), cR.get(RR)
    }
    async function IR(RR, JR) {
      let GR = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
      const yR = PR(RR.name);
      if (void 0 === yR) return mR(await zR(RR, JR, GR), "cold-wasm");
      const uR = xR ? new MR : null;
      let ZR;
      try {
        if (fR = RR.url(), wR()?.includes(KR(fR)) && await async function(RR) {
            const JR = new AbortController;
            let GR;
            const yR = (0, tR.h)((RR => {
              GR = setTimeout((() => {
                JR.abort(), RR(null)
              }), oR)
            }));
            try {
              const GR = fetch(RR.href, {
                  cache: "only-if-cached",
                  mode: "same-origin",
                  signal: JR.signal
                }),
                uR = await (0, tR.s)([GR, yR]);
              return !!uR?.ok && ((0, iR.P)(uR.body.cancel()), !0)
            } catch {
              return !1
            } finally {
              clearTimeout(GR)
            }
          }(RR.url())) return uR?.stop(), await async function(RR, JR, GR, yR) {
          let tR = !1;
          const uR = GR && {
            sha256: GR.sha256,
            onMismatch: () => {
              tR = !0
            }
          };
          try {
            return mR(await zR(RR, uR, yR), "warm")
          } catch (ZR) {
            const yR = await SR(RR, JR, GR, null);
            if (null === yR) throw tR && GR.onMismatch(), ZR;
            return console.warn(`${RR.url().href} from the HTTP cache failed: ${(0,qR.f)(ZR)}: loaded its copy instead`), mR(yR, tR ? "warm-refused" : "warm-broken")
          }
        }(RR, yR, JR, GR);
        ZR = await SR(RR, yR, JR, uR)
      } finally {
        uR?.stop()
      }
      var fR;
      return null !== ZR ? mR(ZR, "cold-worker") : mR(await zR(RR, JR, GR), "cold-wasm")
    }

    function mR(RR, JR) {
      return {
        __proto__: null,
        module: RR,
        path: JR
      }
    }

    function zR(RR, JR, GR) {
      return void 0 === PR(RR.name) ? (0, iR.A)(RR.url(), JR, GR) : (0, iR.A)(RR.url(), JR, {
        ...GR,
        hideThen: !0,
        onDownloaded: () => {
          ! function(RR) {
            const JR = wR();
            if (null === JR) return;
            const GR = KR(RR),
              yR = JR.filter((RR => RR !== GR));
            yR.push(GR);
            try {
              localStorage.setItem(fR, JSON.stringify(yR.slice(-VR)))
            } catch (tR) {
              console.warn(`Bloxd wasm: ${GR} could not be recorded as downloaded: a later join asks the HTTP cache nothing for it`, tR)
            }
          }(RR.url()), GR.onDownloaded?.()
        }
      })
    }
    async function SR(RR, JR, GR, yR) {
      if (!xR || !XR()) return null;
      const tR = RR.url(),
        uR = `${tR.href}${HR}`;
      try {
        return await (0, iR.X)(uR, ((RR, tR, ZR) => NR(uR, JR, RR, tR, ZR, GR, yR)))
      } catch (ZR) {
        return console.warn(`${(0,qR.f)(ZR)}: loading ${tR.href} instead`), null
      }
    }
    let jR = null,
      dR = !1;
    const ER = new Map,
      YR = new Map;
    let kR = null;

    function QR(RR) {
      const JR = JR => RR.filter((RR => ER.get(RR)?.state === JR)).length,
        GR = JR("compiled");
      return GR > 0 && GR === RR.length ? "compiled" : GR + JR("compiling") > 0 ? "compiling" : "none"
    }

    function FR() {
      return kR ?? QR([...ER.keys()])
    }

    function TR(RR, JR, GR) {
      return null === jR ? jR = RJ(RR, JR, GR?.memoryMaximumBytes) : RR !== jR.build ? console.warn(`Bloxd wasm: ${RR.name} was asked for after ${jR.build.name} started loading, which this thread keeps`) : JR.name !== jR.workers.name && console.warn(`Bloxd wasm: ${JR.name} was asked for workers after ${jR.workers.name}, which this thread keeps`), GR?.reloadFailedDownload && !dR && (0, yR.V)() && (dR = !0, jR = RJ(jR.build, jR.workers, jR.memoryMaximumBytes)), jR.loaded
    }

    function sR(RR) {
      return null === jR ? (0, tR.h)((RR => {
        RR(!1)
      })) : ((0, yR.S)() && (jR = RJ(jR.build, jR.workers, RR ?? jR.memoryMaximumBytes)), jR.loaded)
    }

    function hR(RR, JR) {
      if (null !== jR) return (0, tR.e)([]);
      const GR = RR.filter((RR => !ER.has(RR.name))).map((RR => {
        const GR = new AbortController,
          yR = {
            compiled: zR(RR, (0, uR.c)(RR.name), {
              priority: JR,
              xR: GR.signal,
              onDownloaded: () => {
                yR.downloaded = !0
              },
              retries: {
                onRetry: () => {
                  yR.downloaded = !1, null !== jR && GR.abort()
                }
              }
            }),
            cancel: GR,
            downloaded: !1,
            state: "compiling"
          };
        return ER.set(RR.name, yR), (0, tR.h)((JR => {
          (0, tR.u)(yR.compiled, (() => {
            yR.downloaded = !0, yR.state = "compiled", JR()
          }), (tR => {
            yR.state = "failed", GR.signal.aborted || console.warn(`Bloxd wasm: ${RR.name}'s compile ahead of the load failed: the load compiles it afresh`, tR), JR()
          }))
        }))
      }));
      return (0, tR.e)(GR)
    }

    function RJ(RR, JR, GR) {
      kR ??= QR(JR.name === RR.name ? [RR.name] : [RR.name, JR.name]);
      const uR = (0, yR.y)((async () => {
        (0, ZR.F)(), YR.clear();
        const GR = GJ(RR),
          yR = JR.name === RR.name ? GR : GJ(JR);
        for (const {
            cancel: RR
          }
          of ER.values()) RR.abort();
        ER.clear(), await (0, tR.e)([GR, yR]);
        const uR = await GR,
          qR = await yR;
        return (0, ZR.F)(), {
          module: uR,
          workerModule: qR
        }
      }), RR, GR);
      return {
        build: RR,
        workers: JR,
        memoryMaximumBytes: GR,
        loaded: uR
      }
    }

    function JJ(RR) {
      return YR.get(RR)
    }

    function GJ(RR) {
      const JR = performance.now(),
        GR = ER.get(RR.name);
      ER.delete(RR.name);
      const yR = !0 === GR?.downloaded ? GR : void 0;
      return void 0 !== GR && void 0 === yR && GR.cancel.abort(), (0, tR.h)(((GR, uR) => {
        const ZR = (yR, tR) => {
            YR.set(RR.name, {
              path: tR,
              ms: performance.now() - JR
            }), GR(yR)
          },
          qR = () => {
            (0, tR.u)(tJ(RR), (RR => {
              let {
                module: JR,
                path: GR
              } = RR;
              ZR(JR, GR)
            }), uR)
          };
        void 0 === yR ? qR() : (0, tR.u)(yR.compiled, (RR => {
          ZR(RR, "ahead")
        }), qR)
      }))
    }
    async function yJ(RR, JR) {
      const {
        module: GR
      } = await tJ(RR, {
        retries: JR
      });
      return GR
    }
    async function tJ(RR) {
      let JR = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
      return await IR(RR, (0, uR.c)(RR.name), JR)
    }
  },
  7762: (RR, JR, GR) => {
    GR.d(JR, {
      c: () => ZR
    });
    var yR = GR(2457);
    const tR = {
      bloxd_wasm: () => "31dc7d689c00e0ba537ee7f626a34d0004a848135d46f08eb518035abee4bd78",
      bloxd_wasm_client: () => "3b6f626c672c16835e48be6eda2b8710ce7ef029c244b4a5763ca9c72afd1b15",
      bloxd_wasm_workers: () => "57abc294db658237bc7d99b35bd3f29743c220eedebc8ac3f7feffe93ef605d9",
      bloxd_wasm_models: () => "91848043cbb1596bc2da50dc271a4cd1d5748938f8eaa4bb6e2a97c3115313e3",
      bloxd_wasm_webgpu: () => "f945f7dfcd84e1c2443e02ed24bd7fc26f3a25462a20b367dbcf6b52367ae837",
      bloxd_wasm_webgl: () => "9fbafd6231ee584775c304827d74014f8c15cff0854a0975bc3b6d00259cb13b",
      bloxd_wasm_webgl1: () => "23c52ed9fe5a4512122e2f73d5ee88fdaeeb108903994541446badd1fee1bb4c",
      bloxd_wasm_replay: () => "972e1c6128c0d1cd8598ec680bedb57345cf87b953e82efa23119df1c888426d",
      bloxd_wasm_recorder: () => "c168224dbeb3a34221482e3a0ad41a3c0ebe14db31539da9b26d296033e9fb3d",
      bloxd_wasm_anim: () => "3cc08cf0d193225c4efab3299a0dd42815a95a9b8b44e2d5957de0a151ae7db3",
      bloxd_wasm_textures: () => "78779f7faa55b7ab66454ef9cac79a3b6156f91b60fc795d24d615f3dca40e19",
      bloxd_wasm_shader_pack: () => "2aca035dd9675be55a94be3cc38a846b93983e04d5e35b062d6e7f0e268c5303"
    };
    var uR = GR(5554);

    function ZR(RR) {
      const JR = Object.prototype.hasOwnProperty.call(tR, RR) ? tR[RR]() : void 0;
      if (void 0 !== JR) return {
        sha256: JR,
        onMismatch: uR.E
      };
      throw new yR.g(`${RR} has no release digest, so this build refuses it`)
    }
  },
  37169: (RR, JR, GR) => {
    GR.d(JR, {
      b: () => yR,
      c: () => uR,
      e: () => iR,
      h: () => ZR,
      k: () => tR
    });
    const yR = /^alloc_failed (\d+) bytes$/;

    function tR(RR, JR) {
      return uR(RR, JR) ? `trap=alloc_failed ${JR} bytes` : `trap=${RR}`
    }

    function uR(RR, JR) {
      return "unreachable" === RR && JR > 0
    }

    function ZR(RR, JR, GR) {
      const yR = function(RR) {
        return RR instanceof WebAssembly.RuntimeError ? /unreachable/i.test(RR.message) ? "unreachable" : /out of bounds/i.test(RR.message) ? "out_of_bounds" : "runtime_error" : (RR instanceof RangeError || RR instanceof Error && "InternalError" === RR.name) && /call stack|recursion/i.test(RR.message) ? "stack_overflow" : "js_error"
      }(RR);
      if ("unreachable" !== yR) return {
        kind: yR,
        panic: null,
        refusedBytes: 0
      };
      const tR = JR(),
        uR = GR();
      return {
        kind: yR,
        panic: uR > 0 ? null : tR,
        refusedBytes: uR
      }
    }
    const qR = 300;

    function iR(RR) {
      return RR.replace(/\s*\n\s*/g, " / ").slice(0, qR)
    }
  }
};
Object.freeze(modules);
for (const RR in modules) Object.freeze(modules[RR]);