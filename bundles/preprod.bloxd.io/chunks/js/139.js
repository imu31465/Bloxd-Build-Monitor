export const id = 139;
export const ids = [139];
export const modules = {
  36608: (QQ, WQ, XQ) => {
    XQ.d(WQ, {
      c: () => ZQ,
      g: () => MQ,
      h: () => KQ,
      k: () => NQ
    });
    var wQ = XQ(3107),
      qQ = XQ(3122),
      TQ = XQ(6987),
      zQ = XQ(5002),
      sQ = XQ(3117),
      FQ = XQ(3110);
    const PQ = "bloxd-wasmDownloaded",
      gQ = 12;

    function JQ(QQ) {
      return QQ.pathname.slice(QQ.pathname.lastIndexOf("/") + 1)
    }

    function rQ() {
      try {
        if ("undefined" === typeof localStorage) return null;
        const QQ = JSON.parse(localStorage.getItem(PQ) ?? "[]");
        return Array.isArray(QQ) ? QQ.filter((QQ => "string" === typeof QQ)) : []
      } catch (QQ) {
        return console.warn("Bloxd wasm: the record of downloaded modules could not be read: asking the HTTP cache for none", QQ), null
      }
    }
    const IQ = Reflect.apply,
      jQ = "undefined" === typeof Worker ? void 0 : Worker,
      BQ = jQ?.prototype.postMessage,
      yQ = jQ?.prototype.terminate,
      VQ = "undefined" === typeof EventTarget ? void 0 : EventTarget.prototype.addEventListener,
      DQ = "undefined" === typeof MessageEvent ? void 0 : Object.getOwnPropertyDescriptor(MessageEvent.prototype, "data")?.get,
      pQ = Object.getOwnPropertyDescriptor(Object.getPrototypeOf(Uint8Array.prototype), "buffer").get,
      GQ = function() {
        try {
          return (0, zQ.k)(jQ, "Worker", !0) && (0, zQ.k)(BQ, "postMessage") && (0, zQ.k)(yQ, "terminate") && (0, zQ.k)(pQ, "buffer") && void 0 !== VQ && void 0 !== DQ
        } catch {
          return !1
        }
      }();
    let UQ = !1;

    function bQ() {
      return GQ && !UQ
    }
    class vQ {
      worker = null;
      failed = !1;
      constructor() {
        if (bQ()) try {
          this.worker = HQ(), IQ(VQ, this.worker, ["error", () => {
            this.failed = !0
          }])
        } catch {
          this.stop()
        }
      }
      take() {
        const QQ = this.worker;
        if (this.worker = null, null !== QQ && this.failed) throw IQ(yQ, QQ, []), new Error("it did not run");
        return QQ
      }
      stop() {
        const QQ = this.worker;
        this.worker = null, null !== QQ && IQ(yQ, QQ, [])
      }
    }
    class dQ {
      decoded;
      worker;
      reject;
      constructor(QQ, WQ, XQ, wQ, TQ) {
        try {
          this.worker = TQ?.take() ?? HQ()
        } catch (PQ) {
          throw UQ = !0, new Error(`The zstd decoder's worker did not start: ${(0,sQ.g)(PQ)}`)
        }
        const zQ = this.worker;
        this.decoded = (0, qQ.i)(((WQ, qQ) => {
          this.reject = qQ;
          const TQ = (QQ, WQ) => {
            IQ(VQ, zQ, [QQ, WQ])
          };
          TQ("message", (QQ => {
            wQ();
            try {
              const wQ = IQ(DQ, QQ, []);
              if (!0 === wQ) WQ();
              else {
                if ("string" === typeof wQ) throw wQ.startsWith(sQ.c) && (UQ = !0), new Error(wQ);
                XQ(wQ, IQ(FQ.x, wQ, []))
              }
            } catch (PQ) {
              qQ(PQ)
            }
          })), TQ("error", (() => {
            UQ = !0, qQ(new Error("The zstd decoder's worker did not run"))
          })), TQ("messageerror", (() => {
            qQ(new Error(`${QQ}'s decoder sent a piece that could not be read`))
          }))
        })), (0, FQ.V)(this.decoded), IQ(BQ, zQ, [
          [QQ, WQ]
        ])
      }
      push(QQ) {
        IQ(BQ, this.worker, [QQ, [IQ(pQ, QQ, [])]])
      }
      end() {
        IQ(BQ, this.worker, [null])
      }
      markWorkerFailed() {
        UQ = !0
      }
      fail(QQ) {
        this.reject(QQ), this.terminate()
      }
      terminate() {
        IQ(yQ, this.worker, [])
      }
    }

    function HQ() {
      if (globalThis.Worker !== jQ) throw new Error("Worker is not the one the page loaded with");
      return new Worker(new URL(XQ.p + XQ.u(70), XQ.b), {
        name: "wasmZstdDecoder",
        type: "module"
      })
    }
    const aQ = Reflect.apply,
      lQ = ArrayBuffer,
      hQ = "undefined" === typeof Response ? void 0 : Response,
      iQ = "undefined" === typeof ReadableStream ? void 0 : ReadableStream,
      cQ = function() {
        let QQ;
        void 0 !== iQ && new iQ({
          __proto__: null,
          start(WQ) {
            const {
              enqueue: XQ,
              close: wQ,
              error: qQ
            } = Object.getPrototypeOf(WQ);
            QQ = {
              enqueue: XQ,
              close: wQ,
              error: qQ
            }
          }
        }, {
          __proto__: null
        });
        return QQ
      }(),
      AQ = function() {
        try {
          return "undefined" !== typeof WebAssembly && "function" === typeof WebAssembly.compileStreaming && void 0 !== cQ && (0, zQ.k)(hQ, "Response", !0) && (0, zQ.k)(iQ, "ReadableStream", !0) && (0, zQ.k)(cQ.enqueue, "enqueue") && (0, zQ.k)(cQ.close, "close") && (0, zQ.k)(cQ.error, "error") && (0, zQ.k)(FQ.$, "body") && (0, zQ.k)(FQ.O, "getReader") && (0, zQ.k)(FQ.X, "read")
        } catch {
          return !1
        }
      }();
    async function RQ(QQ, WQ, XQ, wQ, TQ, zQ, PQ) {
      const gQ = new lQ(WQ),
        {
          controller: JQ,
          compiled: rQ
        } = function(QQ) {
          try {
            let QQ;
            const WQ = new iQ({
                __proto__: null,
                start(WQ) {
                  QQ = WQ
                }
              }, {
                __proto__: null
              }),
              XQ = new hQ(WQ, {
                __proto__: null,
                headers: {
                  __proto__: null,
                  "Content-Type": "application/wasm"
                }
              });
            return {
              controller: QQ,
              compiled: (0, FQ.V)((0, FQ.C)((0, FQ.fb)(XQ)))
            }
          } catch (WQ) {
            throw new Error(`${QQ} could not be streamed into a compile: ${(0,sQ.g)(WQ)}`)
          }
        }(QQ),
        {
          enqueue: IQ,
          close: jQ,
          error: BQ
        } = cQ,
        yQ = QQ => {
          try {
            aQ(BQ, JQ, [QQ])
          } catch {}
        };
      let VQ = 0;
      const DQ = (XQ, wQ) => {
        if (VQ + wQ > WQ) throw new Error(`${QQ} decoded past its module's ${WQ} bytes`);
        aQ(FQ.db, new FQ.m(gQ), [new FQ.m(XQ), VQ]);
        try {
          aQ(IQ, JQ, [new FQ.m(gQ, VQ, wQ)])
        } catch {}
        VQ += wQ
      };
      let pQ, GQ;
      try {
        pQ = new dQ(QQ, WQ, DQ, wQ, PQ)
      } catch (HQ) {
        throw yQ(HQ), HQ
      }
      const UQ = QQ => {
        pQ.fail(QQ), void 0 !== GQ && EQ(GQ)
      };
      let bQ = !1;
      XQ.addEventListener("abort", (() => {
        bQ && pQ.markWorkerFailed(), UQ(new Error(`${QQ} stalled`))
      }), {
        once: !0
      }), (0, qQ.v)(rQ, (() => {}), UQ);
      try {
        let zQ;
        try {
          zQ = await fetch(QQ, {
            signal: XQ
          })
        } catch (HQ) {
          throw new Error(`Fetching ${QQ} failed: ${(0,sQ.g)(HQ)}`)
        }
        const {
          ok: PQ,
          status: gQ,
          body: JQ
        } = function(QQ, WQ) {
          try {
            const {
              ok: QQ,
              status: XQ
            } = WQ;
            return {
              ok: QQ,
              status: XQ,
              body: aQ(FQ.$, WQ, [])
            }
          } catch {
            throw new Error(`${QQ} came in a response a page script made`)
          }
        }(QQ, zQ);
        if (!PQ) throw new Error(`Fetching ${QQ} failed: HTTP ${gQ}`);
        wQ();
        const rQ = aQ(FQ.O, JQ, []);
        GQ = rQ;
        const IQ = () => {
          EQ(rQ)
        };
        for ((0, qQ.v)(pQ.decoded, IQ, IQ);;) {
          let WQ;
          try {
            WQ = await aQ(FQ.X, rQ, [])
          } catch (HQ) {
            throw new Error(`Downloading ${QQ} failed: ${(0,sQ.g)(HQ)}`)
          }
          if (WQ.done) break;
          wQ(), pQ.push(WQ.value)
        }
        if (bQ = !0, pQ.end(), await pQ.decoded, TQ(), VQ !== WQ) throw new Error(`${QQ} ended before its module did`)
      } catch (HQ) {
        throw yQ(HQ), UQ(HQ), HQ
      }
      pQ.terminate();
      try {
        aQ(jQ, JQ, [])
      } catch {}
      const vQ = await rQ;
      return void 0 !== zQ && await (0, FQ.z)(QQ, new FQ.m(gQ), {
        sha256: zQ.sha256,
        onMismatch: () => {}
      }), vQ
    }

    function EQ(QQ) {
      try {
        (0, FQ.V)(QQ.cancel())
      } catch {}
    }
    const CQ = ".zst.bin",
      uQ = 1e3;
    let LQ = null;

    function kQ(QQ) {
      return LQ ??= function() {
        const QQ = new Map,
          WQ = "bloxd_wasm_webgpu:5139786,bloxd_wasm_webgl:5519906,bloxd_wasm_webgl1:4855035,bloxd_wasm_workers:201241,bloxd_wasm_models:311531,bloxd_wasm_client:3715459";
        for (const XQ of WQ?.split(",") ?? []) {
          const [WQ = "", wQ] = XQ.split(":"), qQ = Number(wQ);
          Number.isInteger(qQ) && qQ > 0 && QQ.set(WQ, qQ)
        }
        return QQ
      }(), LQ.get(QQ)
    }
    async function fQ(QQ, WQ) {
      let XQ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
      const wQ = kQ(QQ.name);
      if (void 0 === wQ) return SQ(await tQ(QQ, WQ, XQ), "cold-wasm");
      const TQ = AQ ? new vQ : null;
      let zQ;
      try {
        if (PQ = QQ.url(), rQ()?.includes(JQ(PQ)) && await async function(QQ) {
            const WQ = new AbortController;
            let XQ;
            const wQ = (0, qQ.i)((QQ => {
              XQ = setTimeout((() => {
                WQ.abort(), QQ(null)
              }), uQ)
            }));
            try {
              const XQ = fetch(QQ.href, {
                  cache: "only-if-cached",
                  mode: "same-origin",
                  signal: WQ.signal
                }),
                TQ = await (0, qQ.s)([XQ, wQ]);
              return !!TQ?.ok && ((0, FQ.V)(TQ.body.cancel()), !0)
            } catch {
              return !1
            } finally {
              clearTimeout(XQ)
            }
          }(QQ.url())) return TQ?.stop(), await async function(QQ, WQ, XQ, wQ) {
          let qQ = !1;
          const TQ = XQ && {
            sha256: XQ.sha256,
            onMismatch: () => {
              qQ = !0
            }
          };
          try {
            return SQ(await tQ(QQ, TQ, wQ), "warm")
          } catch (zQ) {
            const wQ = await oQ(QQ, WQ, XQ, null);
            if (null === wQ) throw qQ && XQ.onMismatch(), zQ;
            return console.warn(`${QQ.url().href} from the HTTP cache failed: ${(0,sQ.g)(zQ)}: loaded its copy instead`), SQ(wQ, qQ ? "warm-refused" : "warm-broken")
          }
        }(QQ, wQ, WQ, XQ);
        zQ = await oQ(QQ, wQ, WQ, TQ)
      } finally {
        TQ?.stop()
      }
      var PQ;
      return null !== zQ ? SQ(zQ, "cold-worker") : SQ(await tQ(QQ, WQ, XQ), "cold-wasm")
    }

    function SQ(QQ, WQ) {
      return {
        __proto__: null,
        module: QQ,
        path: WQ
      }
    }

    function tQ(QQ, WQ, XQ) {
      return void 0 === kQ(QQ.name) ? (0, FQ.H)(QQ.url(), WQ, XQ) : (0, FQ.H)(QQ.url(), WQ, {
        ...XQ,
        hideThen: !0,
        onDownloaded: () => {
          ! function(QQ) {
            const WQ = rQ();
            if (null === WQ) return;
            const XQ = JQ(QQ),
              wQ = WQ.filter((QQ => QQ !== XQ));
            wQ.push(XQ);
            try {
              localStorage.setItem(PQ, JSON.stringify(wQ.slice(-gQ)))
            } catch (qQ) {
              console.warn(`Bloxd wasm: ${XQ} could not be recorded as downloaded: a later join asks the HTTP cache nothing for it`, qQ)
            }
          }(QQ.url()), XQ.onDownloaded?.()
        }
      })
    }
    async function oQ(QQ, WQ, XQ, wQ) {
      if (!AQ || !bQ()) return null;
      const qQ = QQ.url(),
        TQ = `${qQ.href}${CQ}`;
      try {
        return await (0, FQ.eb)(TQ, ((QQ, qQ, zQ) => RQ(TQ, WQ, QQ, qQ, zQ, XQ, wQ)))
      } catch (zQ) {
        return console.warn(`${(0,sQ.g)(zQ)}: loading ${qQ.href} instead`), null
      }
    }
    let eQ = null,
      nQ = !1;
    const xQ = new Map,
      YQ = new Map;

    function NQ(QQ, WQ, XQ) {
      return null === eQ ? eQ = OQ(QQ, WQ, XQ?.memoryMaximumBytes) : QQ !== eQ.build ? console.warn(`Bloxd wasm: ${QQ.name} was asked for after ${eQ.build.name} started loading, which this thread keeps`) : WQ.name !== eQ.workers.name && console.warn(`Bloxd wasm: ${WQ.name} was asked for workers after ${eQ.workers.name}, which this thread keeps`), XQ?.reloadFailedDownload && !nQ && (0, wQ.Y)() && (nQ = !0, eQ = OQ(eQ.build, eQ.workers, eQ.memoryMaximumBytes)), eQ.loaded
    }

    function ZQ(QQ, WQ) {
      if (null !== eQ) return (0, qQ.g)([]);
      const XQ = QQ.filter((QQ => !xQ.has(QQ.name))).map((QQ => {
        const XQ = new AbortController,
          wQ = {
            compiled: tQ(QQ, (0, TQ.b)(QQ.name), {
              priority: WQ,
              fX: XQ.signal,
              onDownloaded: () => {
                wQ.downloaded = !0
              },
              retries: {
                onRetry: () => {
                  wQ.downloaded = !1, null !== eQ && XQ.abort()
                }
              }
            }),
            cancel: XQ,
            downloaded: !1
          };
        return xQ.set(QQ.name, wQ), (0, qQ.i)((WQ => {
          (0, qQ.v)(wQ.compiled, (() => {
            wQ.downloaded = !0, WQ()
          }), (wQ => {
            XQ.signal.aborted || console.warn(`Bloxd wasm: ${QQ.name}'s compile ahead of the load failed: the load compiles it afresh`, wQ), WQ()
          }))
        }))
      }));
      return (0, qQ.g)(XQ)
    }

    function OQ(QQ, WQ, XQ) {
      const TQ = (0, wQ.E)((async () => {
        (0, zQ.z)(), YQ.clear();
        const XQ = mQ(QQ),
          wQ = WQ.name === QQ.name ? XQ : mQ(WQ);
        for (const {
            cancel: QQ
          }
          of xQ.values()) QQ.abort();
        xQ.clear(), await (0, qQ.g)([XQ, wQ]);
        const TQ = await XQ,
          sQ = await wQ;
        return (0, zQ.z)(), {
          module: TQ,
          workerModule: sQ
        }
      }), QQ, XQ);
      return {
        build: QQ,
        workers: WQ,
        memoryMaximumBytes: XQ,
        loaded: TQ
      }
    }

    function KQ(QQ) {
      return YQ.get(QQ)
    }

    function mQ(QQ) {
      const WQ = performance.now(),
        XQ = xQ.get(QQ.name);
      xQ.delete(QQ.name);
      const wQ = !0 === XQ?.downloaded ? XQ : void 0;
      return void 0 !== XQ && void 0 === wQ && XQ.cancel.abort(), (0, qQ.i)(((XQ, TQ) => {
        const zQ = (wQ, qQ) => {
            YQ.set(QQ.name, {
              path: qQ,
              ms: performance.now() - WQ
            }), XQ(wQ)
          },
          sQ = () => {
            (0, qQ.v)(QW(QQ), (QQ => {
              let {
                module: WQ,
                path: XQ
              } = QQ;
              zQ(WQ, XQ)
            }), TQ)
          };
        void 0 === wQ ? sQ() : (0, qQ.v)(wQ.compiled, (QQ => {
          zQ(QQ, "ahead")
        }), sQ)
      }))
    }
    async function MQ(QQ, WQ) {
      const {
        module: XQ
      } = await QW(QQ, {
        retries: WQ
      });
      return XQ
    }
    async function QW(QQ) {
      let WQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
      return await fQ(QQ, (0, TQ.b)(QQ.name), WQ)
    }
  },
  6987: (QQ, WQ, XQ) => {
    XQ.d(WQ, {
      b: () => zQ
    });
    var wQ = XQ(3110);
    const qQ = {
      bloxd_wasm: () => "dd6e97ff3b2ac0a551c961b09c612a1b6271d0ab071405556ca4b01f3a262e0b",
      bloxd_wasm_client: () => "309a75346eaeb0a0c6deb9ff417655a1f3ee1a732c70d146d55d1c0cf5938364",
      bloxd_wasm_workers: () => "f608ea61c1af12b7c05879fbd8d0c7dde303a5fb75c7292bfa3f906e24d19907",
      bloxd_wasm_models: () => "8aee95f905bbb58656a61d4cb8ab4dca70f9ee4de220b91c74ac1451d8a4d903",
      bloxd_wasm_webgpu: () => "3c90d3c6f2962d9b5dbc4704e4401368dd2e64ffff3b397e17ca0c23f7e81811",
      bloxd_wasm_webgl: () => "86975f768364e7fdc9b4410826b72db14bfcdef06238e83f58fc072aa970e79d",
      bloxd_wasm_webgl1: () => "1a777fd3f8c3daff218cd0b04a37e914343ce24b2285e695360ed70c5f3d7401",
      bloxd_wasm_replay: () => "02dd750a1ef9276da71ab3efedc1f9f3a09a0cd04fd27e9c08a2cfb8afc9f088",
      bloxd_wasm_recorder: () => "7d5897572629ab0f11d0a09f7f26094a57d854f2017607c5867966529d26eb57",
      bloxd_wasm_anim: () => "ebd7588e63ea2f9db7dec89f47c29d3ec897ec93ad35765845ce0571e06ef572",
      bloxd_wasm_textures: () => "34f98c6b670b35fb03e92023855c94bf914433162196e0949956d65fec8cb777",
      bloxd_wasm_shader_pack: () => "ec75c18af246de94ce930f2606184b35eb764513f5853fb54dabe73873305b16"
    };
    var TQ = XQ(5002);

    function zQ(QQ) {
      const WQ = Object.prototype.hasOwnProperty.call(qQ, QQ) ? qQ[QQ]() : void 0;
      if (void 0 !== WQ) return {
        sha256: WQ,
        onMismatch: TQ.v
      };
      throw new wQ.i(`${QQ} has no release digest, so this build refuses it`)
    }
  }
};
Object.freeze(modules);
for (const QQ in modules) Object.freeze(modules[QQ]);