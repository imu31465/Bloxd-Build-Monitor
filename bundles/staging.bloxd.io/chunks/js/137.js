export const id = 137;
export const ids = [137];
export const modules = {
  36394: (TT, UT, mT) => {
    mT.d(UT, {
      d: () => hT,
      f: () => RT,
      g: () => oT,
      h: () => ET
    });
    var WT = mT(2992),
      zT = mT(3015),
      MT = mT(6688),
      gT = mT(4780),
      nT = mT(3007),
      HT = mT(3001);
    const kT = "bloxd-wasmDownloaded",
      jT = 12;

    function lT(TT) {
      return TT.pathname.slice(TT.pathname.lastIndexOf("/") + 1)
    }

    function LT() {
      try {
        if ("undefined" === typeof localStorage) return null;
        const TT = JSON.parse(localStorage.getItem(kT) ?? "[]");
        return Array.isArray(TT) ? TT.filter((TT => "string" === typeof TT)) : []
      } catch (TT) {
        return console.warn("Bloxd wasm: the record of downloaded modules could not be read: asking the HTTP cache for none", TT), null
      }
    }
    const pT = Reflect.apply,
      BT = "undefined" === typeof Worker ? void 0 : Worker,
      ZT = BT?.prototype.postMessage,
      cT = BT?.prototype.terminate,
      vT = "undefined" === typeof EventTarget ? void 0 : EventTarget.prototype.addEventListener,
      fT = "undefined" === typeof MessageEvent ? void 0 : Object.getOwnPropertyDescriptor(MessageEvent.prototype, "data")?.get,
      qT = Object.getOwnPropertyDescriptor(Object.getPrototypeOf(Uint8Array.prototype), "buffer").get,
      iT = function() {
        try {
          return (0, gT.j)(BT, "Worker", !0) && (0, gT.j)(ZT, "postMessage") && (0, gT.j)(cT, "terminate") && (0, gT.j)(qT, "buffer") && void 0 !== vT && void 0 !== fT
        } catch {
          return !1
        }
      }();
    let bT = !1;

    function OT() {
      return iT && !bT
    }
    class eT {
      worker = null;
      failed = !1;
      constructor() {
        if (OT()) try {
          this.worker = JT(), pT(vT, this.worker, ["error", () => {
            this.failed = !0
          }])
        } catch {
          this.stop()
        }
      }
      take() {
        const TT = this.worker;
        if (this.worker = null, null !== TT && this.failed) throw pT(cT, TT, []), new Error("it did not run");
        return TT
      }
      stop() {
        const TT = this.worker;
        this.worker = null, null !== TT && pT(cT, TT, [])
      }
    }
    class YT {
      decoded;
      worker;
      reject;
      constructor(TT, UT, mT, WT, MT) {
        try {
          this.worker = MT?.take() ?? JT()
        } catch (kT) {
          throw bT = !0, new Error(`The zstd decoder's worker did not start: ${(0,nT.e)(kT)}`)
        }
        const gT = this.worker;
        this.decoded = (0, zT.i)(((UT, zT) => {
          this.reject = zT;
          const MT = (TT, UT) => {
            pT(vT, gT, [TT, UT])
          };
          MT("message", (TT => {
            WT();
            try {
              const WT = pT(fT, TT, []);
              if (!0 === WT) UT();
              else {
                if ("string" === typeof WT) throw WT.startsWith(nT.d) && (bT = !0), new Error(WT);
                mT(WT, pT(HT.w, WT, []))
              }
            } catch (kT) {
              zT(kT)
            }
          })), MT("error", (() => {
            bT = !0, zT(new Error("The zstd decoder's worker did not run"))
          })), MT("messageerror", (() => {
            zT(new Error(`${TT}'s decoder sent a piece that could not be read`))
          }))
        })), (0, HT.Z)(this.decoded), pT(ZT, gT, [
          [TT, UT]
        ])
      }
      push(TT) {
        pT(ZT, this.worker, [TT, [pT(qT, TT, [])]])
      }
      end() {
        pT(ZT, this.worker, [null])
      }
      markWorkerFailed() {
        bT = !0
      }
      fail(TT) {
        this.reject(TT), this.terminate()
      }
      terminate() {
        pT(cT, this.worker, [])
      }
    }

    function JT() {
      if (globalThis.Worker !== BT) throw new Error("Worker is not the one the page loaded with");
      return new Worker(new URL(mT.p + mT.u(68), mT.b), {
        name: "wasmZstdDecoder",
        type: "module"
      })
    }
    const xT = Reflect.apply,
      dT = ArrayBuffer,
      wT = "undefined" === typeof Response ? void 0 : Response,
      tT = "undefined" === typeof ReadableStream ? void 0 : ReadableStream,
      aT = function() {
        let TT;
        void 0 !== tT && new tT({
          __proto__: null,
          start(UT) {
            const {
              enqueue: mT,
              close: WT,
              error: zT
            } = Object.getPrototypeOf(UT);
            TT = {
              enqueue: mT,
              close: WT,
              error: zT
            }
          }
        }, {
          __proto__: null
        });
        return TT
      }(),
      yT = function() {
        try {
          return "undefined" !== typeof WebAssembly && "function" === typeof WebAssembly.compileStreaming && void 0 !== aT && (0, gT.j)(wT, "Response", !0) && (0, gT.j)(tT, "ReadableStream", !0) && (0, gT.j)(aT.enqueue, "enqueue") && (0, gT.j)(aT.close, "close") && (0, gT.j)(aT.error, "error") && (0, gT.j)(HT.db, "body") && (0, gT.j)(HT.Q, "getReader") && (0, gT.j)(HT.$, "read")
        } catch {
          return !1
        }
      }();
    async function XT(TT, UT, mT, WT, MT, gT, kT) {
      const jT = new dT(UT),
        {
          controller: lT,
          compiled: LT
        } = function(TT) {
          try {
            let TT;
            const UT = new tT({
                __proto__: null,
                start(UT) {
                  TT = UT
                }
              }, {
                __proto__: null
              }),
              mT = new wT(UT, {
                __proto__: null,
                headers: {
                  __proto__: null,
                  "Content-Type": "application/wasm"
                }
              });
            return {
              controller: TT,
              compiled: (0, HT.Z)((0, HT.D)((0, HT.kb)(mT)))
            }
          } catch (UT) {
            throw new Error(`${TT} could not be streamed into a compile: ${(0,nT.e)(UT)}`)
          }
        }(TT),
        {
          enqueue: pT,
          close: BT,
          error: ZT
        } = aT,
        cT = TT => {
          try {
            xT(ZT, lT, [TT])
          } catch {}
        };
      let vT = 0;
      const fT = (mT, WT) => {
        if (vT + WT > UT) throw new Error(`${TT} decoded past its module's ${UT} bytes`);
        xT(HT.eb, new HT.m(jT), [new HT.m(mT), vT]);
        try {
          xT(pT, lT, [new HT.m(jT, vT, WT)])
        } catch {}
        vT += WT
      };
      let qT, iT;
      try {
        qT = new YT(TT, UT, fT, WT, kT)
      } catch (JT) {
        throw cT(JT), JT
      }
      const bT = TT => {
        qT.fail(TT), void 0 !== iT && IT(iT)
      };
      let OT = !1;
      mT.addEventListener("abort", (() => {
        OT && qT.markWorkerFailed(), bT(new Error(`${TT} stalled`))
      }), {
        once: !0
      }), (0, zT.s)(LT, (() => {}), bT);
      try {
        let gT;
        try {
          gT = await fetch(TT, {
            signal: mT
          })
        } catch (JT) {
          throw new Error(`Fetching ${TT} failed: ${(0,nT.e)(JT)}`)
        }
        const {
          ok: kT,
          status: jT,
          body: lT
        } = function(TT, UT) {
          try {
            const {
              ok: TT,
              status: mT
            } = UT;
            return {
              ok: TT,
              status: mT,
              body: xT(HT.db, UT, [])
            }
          } catch {
            throw new Error(`${TT} came in a response a page script made`)
          }
        }(TT, gT);
        if (!kT) throw new Error(`Fetching ${TT} failed: HTTP ${jT}`);
        WT();
        const LT = xT(HT.Q, lT, []);
        iT = LT;
        const pT = () => {
          IT(LT)
        };
        for ((0, zT.s)(qT.decoded, pT, pT);;) {
          let UT;
          try {
            UT = await xT(HT.$, LT, [])
          } catch (JT) {
            throw new Error(`Downloading ${TT} failed: ${(0,nT.e)(JT)}`)
          }
          if (UT.done) break;
          WT(), qT.push(UT.value)
        }
        if (OT = !0, qT.end(), await qT.decoded, MT(), vT !== UT) throw new Error(`${TT} ended before its module did`)
      } catch (JT) {
        throw cT(JT), bT(JT), JT
      }
      qT.terminate();
      try {
        xT(BT, lT, [])
      } catch {}
      const eT = await LT;
      return void 0 !== gT && await (0, HT.z)(TT, new HT.m(jT), {
        sha256: gT.sha256,
        onMismatch: () => {}
      }), eT
    }

    function IT(TT) {
      try {
        (0, HT.Z)(TT.cancel())
      } catch {}
    }
    const QT = ".zst.bin",
      sT = 1e3;
    let FT = null;

    function PT(TT) {
      return FT ??= function() {
        const TT = new Map,
          UT = "bloxd_wasm_webgpu:5136608,bloxd_wasm_webgl:5516677,bloxd_wasm_webgl1:4851495,bloxd_wasm_workers:201241,bloxd_wasm_models:311531,bloxd_wasm_client:3713604";
        for (const mT of UT?.split(",") ?? []) {
          const [UT = "", WT] = mT.split(":"), zT = Number(WT);
          Number.isInteger(zT) && zT > 0 && TT.set(UT, zT)
        }
        return TT
      }(), FT.get(TT)
    }
    async function VT(TT, UT) {
      let mT = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
      const WT = PT(TT.name);
      if (void 0 === WT) return uT(await CT(TT, UT, mT), "cold-wasm");
      const MT = yT ? new eT : null;
      let gT;
      try {
        if (kT = TT.url(), LT()?.includes(lT(kT)) && await async function(TT) {
            const UT = new AbortController;
            let mT;
            const WT = (0, zT.i)((TT => {
              mT = setTimeout((() => {
                UT.abort(), TT(null)
              }), sT)
            }));
            try {
              const mT = fetch(TT.href, {
                  cache: "only-if-cached",
                  mode: "same-origin",
                  signal: UT.signal
                }),
                MT = await (0, zT.p)([mT, WT]);
              return !!MT?.ok && ((0, HT.Z)(MT.body.cancel()), !0)
            } catch {
              return !1
            } finally {
              clearTimeout(mT)
            }
          }(TT.url())) return MT?.stop(), await async function(TT, UT, mT, WT) {
          let zT = !1;
          const MT = mT && {
            sha256: mT.sha256,
            onMismatch: () => {
              zT = !0
            }
          };
          try {
            return uT(await CT(TT, MT, WT), "warm")
          } catch (gT) {
            const WT = await rT(TT, UT, mT, null);
            if (null === WT) throw zT && mT.onMismatch(), gT;
            return console.warn(`${TT.url().href} from the HTTP cache failed: ${(0,nT.e)(gT)}: loaded its copy instead`), uT(WT, zT ? "warm-refused" : "warm-broken")
          }
        }(TT, WT, UT, mT);
        gT = await rT(TT, WT, UT, MT)
      } finally {
        MT?.stop()
      }
      var kT;
      return null !== gT ? uT(gT, "cold-worker") : uT(await CT(TT, UT, mT), "cold-wasm")
    }

    function uT(TT, UT) {
      return {
        __proto__: null,
        module: TT,
        path: UT
      }
    }

    function CT(TT, UT, mT) {
      return void 0 === PT(TT.name) ? (0, HT.I)(TT.url(), UT, mT) : (0, HT.I)(TT.url(), UT, {
        ...mT,
        hideThen: !0,
        onDownloaded: () => {
          ! function(TT) {
            const UT = LT();
            if (null === UT) return;
            const mT = lT(TT),
              WT = UT.filter((TT => TT !== mT));
            WT.push(mT);
            try {
              localStorage.setItem(kT, JSON.stringify(WT.slice(-jT)))
            } catch (zT) {
              console.warn(`Bloxd wasm: ${mT} could not be recorded as downloaded: a later join asks the HTTP cache nothing for it`, zT)
            }
          }(TT.url()), mT.onDownloaded?.()
        }
      })
    }
    async function rT(TT, UT, mT, WT) {
      if (!yT || !OT()) return null;
      const zT = TT.url(),
        MT = `${zT.href}${QT}`;
      try {
        return await (0, HT.gb)(MT, ((TT, zT, gT) => XT(MT, UT, TT, zT, gT, mT, WT)))
      } catch (gT) {
        return console.warn(`${(0,nT.e)(gT)}: loading ${zT.href} instead`), null
      }
    }
    let KT = null,
      ST = !1;
    const GT = new Map,
      NT = new Map;

    function ET(TT, UT, mT) {
      return null === KT ? KT = DT(TT, UT, mT?.memoryMaximumBytes) : TT !== KT.build ? console.warn(`Bloxd wasm: ${TT.name} was asked for after ${KT.build.name} started loading, which this thread keeps`) : UT.name !== KT.workers.name && console.warn(`Bloxd wasm: ${UT.name} was asked for workers after ${KT.workers.name}, which this thread keeps`), mT?.reloadFailedDownload && !ST && (0, WT._)() && (ST = !0, KT = DT(KT.build, KT.workers, KT.memoryMaximumBytes)), KT.loaded
    }

    function hT(TT, UT) {
      if (null !== KT) return (0, zT.h)([]);
      const mT = TT.filter((TT => !GT.has(TT.name))).map((TT => {
        const mT = new AbortController,
          WT = {
            compiled: CT(TT, (0, MT.b)(TT.name), {
              priority: UT,
              Km: mT.signal,
              onDownloaded: () => {
                WT.downloaded = !0
              },
              retries: {
                onRetry: () => {
                  WT.downloaded = !1, null !== KT && mT.abort()
                }
              }
            }),
            cancel: mT,
            downloaded: !1
          };
        return GT.set(TT.name, WT), (0, zT.i)((UT => {
          (0, zT.s)(WT.compiled, (() => {
            WT.downloaded = !0, UT()
          }), (WT => {
            mT.signal.aborted || console.warn(`Bloxd wasm: ${TT.name}'s compile ahead of the load failed: the load compiles it afresh`, WT), UT()
          }))
        }))
      }));
      return (0, zT.h)(mT)
    }

    function DT(TT, UT, mT) {
      const MT = (0, WT.I)((async () => {
        (0, gT.C)(), NT.clear();
        const mT = AT(TT),
          WT = UT.name === TT.name ? mT : AT(UT);
        for (const {
            cancel: TT
          }
          of GT.values()) TT.abort();
        GT.clear(), await (0, zT.h)([mT, WT]);
        const MT = await mT,
          nT = await WT;
        return (0, gT.C)(), {
          module: MT,
          workerModule: nT
        }
      }), TT, mT);
      return {
        build: TT,
        workers: UT,
        memoryMaximumBytes: mT,
        loaded: MT
      }
    }

    function oT(TT) {
      return NT.get(TT)
    }

    function AT(TT) {
      const UT = performance.now(),
        mT = GT.get(TT.name);
      GT.delete(TT.name);
      const WT = !0 === mT?.downloaded ? mT : void 0;
      return void 0 !== mT && void 0 === WT && mT.cancel.abort(), (0, zT.i)(((mT, MT) => {
        const gT = (WT, zT) => {
            NT.set(TT.name, {
              path: zT,
              ms: performance.now() - UT
            }), mT(WT)
          },
          nT = () => {
            (0, zT.s)(TU(TT), (TT => {
              let {
                module: UT,
                path: mT
              } = TT;
              gT(UT, mT)
            }), MT)
          };
        void 0 === WT ? nT() : (0, zT.s)(WT.compiled, (TT => {
          gT(TT, "ahead")
        }), nT)
      }))
    }
    async function RT(TT, UT) {
      const {
        module: mT
      } = await TU(TT, {
        retries: UT
      });
      return mT
    }
    async function TU(TT) {
      let UT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
      return await VT(TT, (0, MT.b)(TT.name), UT)
    }
  },
  6688: (TT, UT, mT) => {
    mT.d(UT, {
      b: () => gT
    });
    var WT = mT(3001);
    const zT = {
      bloxd_wasm: () => "f27f4f7ab88718881db9d78f55a901cbbb02cd6bf05768435c5f2febd84d596d",
      bloxd_wasm_client: () => "fe788e9625b49e5678303f11a8ccc6a8c723d74fb00195130bf800992df44145",
      bloxd_wasm_workers: () => "9fb7dbb4f3017c2cc6380a2c767b44a4b54fa9ed16a4abd92a7532b57861043e",
      bloxd_wasm_models: () => "c20178931ac19cee58b7771522bf0ba147ea1510835a2c987e0b1db7fea6ed31",
      bloxd_wasm_webgpu: () => "35eb5bbeecb540e751c7772a16e8c673eae334d8012cb03c16848cbcaead6ddb",
      bloxd_wasm_webgl: () => "cec6d5fa8c55e39d3e1d139626227ac277edded615c086119498fb33675206ab",
      bloxd_wasm_webgl1: () => "74b3f9f1c13416de2df904cf4e4ab62ffa42eac861f93b0a1bccb4d2143350c5",
      bloxd_wasm_replay: () => "f779c38a59848818069249dcb1a8196265b0837c473149c9b69b1b4da8202e06",
      bloxd_wasm_recorder: () => "51a9fb786a0c5f3456cd21a32d84b845b2ae56e9d50089027c682f1bd37ca3f5",
      bloxd_wasm_anim: () => "9afb84ad58982f160166f83214a1898ab627c7d097478d5712c0084c9f41f151",
      bloxd_wasm_textures: () => "4cb0448cd98b7a67e67215005f76b27fa8e465345a667579443082f00c6c20a6",
      bloxd_wasm_shader_pack: () => "b8b683214f5ac4a8b9de92714a869aeb3ab931c2e3e084bdd9355b16df02f922"
    };
    var MT = mT(4780);

    function gT(TT) {
      const UT = Object.prototype.hasOwnProperty.call(zT, TT) ? zT[TT]() : void 0;
      if (void 0 !== UT) return {
        sha256: UT,
        onMismatch: MT.z
      };
      throw new WT.i(`${TT} has no release digest, so this build refuses it`)
    }
  }
};
Object.freeze(modules);
for (const TT in modules) Object.freeze(modules[TT]);