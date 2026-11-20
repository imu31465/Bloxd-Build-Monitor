export const id = 133;
export const ids = [133];
export const modules = {
  36356: (qq, Eq, gq) => {
    gq.d(Eq, {
      b: () => xq,
      e: () => cq,
      i: () => mq,
      j: () => Bq
    });
    var Yq = gq(36345),
      lq = gq(15);
    const Oq = /wasm-function\[\d+\]|wasm:\/\/|\[wasm code\]/;

    function mq(qq) {
      if (qq instanceof WebAssembly.RuntimeError) return !0;
      const Eq = qq instanceof Error ? qq.stack : void 0;
      return "string" === typeof Eq && Oq.test(Eq)
    }

    function xq(qq, Eq, gq) {
      var lq;
      const mq = qq instanceof Error ? qq.name : "thrown",
        xq = (qq instanceof Error && null !== (lq = qq.stack) && void 0 !== lq ? lq : "").split("\n").filter((qq => Oq.test(qq))).slice(0, 8).map((qq => qq.trim())),
        Aq = null === Eq ? "wasm memory unknown" : `wasm memory ${Math.round(Eq/2**20)} MB`,
        cq = null === gq.panic ? "" : `, panic: ${(0,Yq.j)(gq.panic)}`,
        uq = `${mq}: ${qq instanceof Error?qq.message:String(qq)}`;
      return `${(0,Yq.l)(gq.kind,gq.refusedBytes)} ${uq} (${Aq})${cq}${xq.length>0?` | ${xq.join(" < ")}`:""}`
    }
    const Aq = /on a detached ArrayBuffer|access detached ArrayBuffer|has been detached from the view/;

    function cq(qq) {
      var Eq;
      let gq = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ArrayBuffer.prototype;
      if (!(qq instanceof Error) || !Aq.test(qq.message)) return {};
      if (!("detached" in gq)) return {
        arrayBufferDetached: "absent"
      };
      return {
        arrayBufferDetached: (0, lq.V)(null === (Eq = (0, lq.P)(gq, "detached")) || void 0 === Eq ? void 0 : Eq.get, /^function (get )?detached\(\) \{\s*\[native code\]\s*\}$/) ? "native" : "script"
      }
    }
    const uq = 500;

    function Bq(qq) {
      let Eq = "[object Object]";
      try {
        Eq = String(qq)
      } catch {}
      if ("[object Object]" !== Eq) return Eq;
      try {
        var gq, Yq;
        return null !== (gq = null === (Yq = JSON.stringify(qq)) || void 0 === Yq ? void 0 : Yq.slice(0, uq)) && void 0 !== gq ? gq : Eq
      } catch {
        return Eq
      }
    }
  },
  36380: (qq, Eq, gq) => {
    gq.d(Eq, {
      b: () => Kq,
      f: () => Dq,
      j: () => Iq,
      n: () => wq
    });
    var Yq = gq(2797),
      lq = gq(2815),
      Oq = gq(6500),
      mq = gq(4524),
      xq = gq(2812),
      Aq = gq(2805);
    const cq = "bloxd-wasmDownloaded",
      uq = 12;

    function Bq(qq) {
      return qq.pathname.slice(qq.pathname.lastIndexOf("/") + 1)
    }

    function Wq() {
      try {
        if ("undefined" === typeof localStorage) return null;
        const qq = JSON.parse(localStorage.getItem(cq) ?? "[]");
        return Array.isArray(qq) ? qq.filter((qq => "string" === typeof qq)) : []
      } catch (qq) {
        return console.warn("Bloxd wasm: the record of downloaded modules could not be read: asking the HTTP cache for none", qq), null
      }
    }
    const Nq = Reflect.apply,
      aq = "undefined" === typeof Worker ? void 0 : Worker,
      Vq = aq?.prototype.postMessage,
      dq = aq?.prototype.terminate,
      jq = "undefined" === typeof EventTarget ? void 0 : EventTarget.prototype.addEventListener,
      Hq = "undefined" === typeof MessageEvent ? void 0 : Object.getOwnPropertyDescriptor(MessageEvent.prototype, "data")?.get,
      oq = Object.getOwnPropertyDescriptor(Object.getPrototypeOf(Uint8Array.prototype), "buffer").get,
      Pq = function() {
        try {
          return (0, mq.n)(aq, "Worker", !0) && (0, mq.n)(Vq, "postMessage") && (0, mq.n)(dq, "terminate") && (0, mq.n)(oq, "buffer") && void 0 !== jq && void 0 !== Hq
        } catch {
          return !1
        }
      }();
    let Qq = !1;

    function yq() {
      return Pq && !Qq
    }
    class tq {
      worker = null;
      failed = !1;
      constructor() {
        if (yq()) try {
          this.worker = vq(), Nq(jq, this.worker, ["error", () => {
            this.failed = !0
          }])
        } catch {
          this.stop()
        }
      }
      take() {
        const qq = this.worker;
        if (this.worker = null, null !== qq && this.failed) throw Nq(dq, qq, []), new Error("it did not run");
        return qq
      }
      stop() {
        const qq = this.worker;
        this.worker = null, null !== qq && Nq(dq, qq, [])
      }
    }
    class rq {
      decoded;
      worker;
      reject;
      constructor(qq, Eq, gq, Yq, Oq) {
        try {
          this.worker = Oq?.take() ?? vq()
        } catch (cq) {
          throw Qq = !0, new Error(`The zstd decoder's worker did not start: ${(0,xq.i)(cq)}`)
        }
        const mq = this.worker;
        this.decoded = (0, lq.f)(((Eq, lq) => {
          this.reject = lq;
          const Oq = (qq, Eq) => {
            Nq(jq, mq, [qq, Eq])
          };
          Oq("message", (qq => {
            Yq();
            try {
              const Yq = Nq(Hq, qq, []);
              if (!0 === Yq) Eq();
              else {
                if ("string" === typeof Yq) throw Yq.startsWith(xq.e) && (Qq = !0), new Error(Yq);
                gq(Yq, Nq(Aq.G, Yq, []))
              }
            } catch (cq) {
              lq(cq)
            }
          })), Oq("error", (() => {
            Qq = !0, lq(new Error("The zstd decoder's worker did not run"))
          })), Oq("messageerror", (() => {
            lq(new Error(`${qq}'s decoder sent a piece that could not be read`))
          }))
        })), (0, Aq._)(this.decoded), Nq(Vq, mq, [
          [qq, Eq]
        ])
      }
      push(qq) {
        Nq(Vq, this.worker, [qq, [Nq(oq, qq, [])]])
      }
      end() {
        Nq(Vq, this.worker, [null])
      }
      markWorkerFailed() {
        Qq = !0
      }
      fail(qq) {
        this.reject(qq), this.terminate()
      }
      terminate() {
        Nq(dq, this.worker, [])
      }
    }

    function vq() {
      if (globalThis.Worker !== aq) throw new Error("Worker is not the one the page loaded with");
      return new Worker(new URL(gq.p + gq.u(65), gq.b), {
        name: "wasmZstdDecoder",
        type: "module"
      })
    }
    const hq = Reflect.apply,
      nq = ArrayBuffer,
      bq = "undefined" === typeof Response ? void 0 : Response,
      iq = "undefined" === typeof ReadableStream ? void 0 : ReadableStream,
      Zq = function() {
        let qq;
        void 0 !== iq && new iq({
          __proto__: null,
          start(Eq) {
            const {
              enqueue: gq,
              close: Yq,
              error: lq
            } = Object.getPrototypeOf(Eq);
            qq = {
              enqueue: gq,
              close: Yq,
              error: lq
            }
          }
        }, {
          __proto__: null
        });
        return qq
      }(),
      fq = function() {
        try {
          return "undefined" !== typeof WebAssembly && "function" === typeof WebAssembly.compileStreaming && void 0 !== Zq && (0, mq.n)(bq, "Response", !0) && (0, mq.n)(iq, "ReadableStream", !0) && (0, mq.n)(Zq.enqueue, "enqueue") && (0, mq.n)(Zq.close, "close") && (0, mq.n)(Zq.error, "error") && (0, mq.n)(Aq.eb, "body") && (0, mq.n)(Aq.U, "getReader") && (0, mq.n)(Aq.ab, "read")
        } catch {
          return !1
        }
      }();
    async function Mq(qq, Eq, gq, Yq, Oq, mq, cq) {
      const uq = new nq(Eq),
        {
          controller: Bq,
          compiled: Wq
        } = function(qq) {
          try {
            let qq;
            const Eq = new iq({
                __proto__: null,
                start(Eq) {
                  qq = Eq
                }
              }, {
                __proto__: null
              }),
              gq = new bq(Eq, {
                __proto__: null,
                headers: {
                  __proto__: null,
                  "Content-Type": "application/wasm"
                }
              });
            return {
              controller: qq,
              compiled: (0, Aq._)((0, Aq.I)((0, Aq.jb)(gq)))
            }
          } catch (Eq) {
            throw new Error(`${qq} could not be streamed into a compile: ${(0,xq.i)(Eq)}`)
          }
        }(qq),
        {
          enqueue: Nq,
          close: aq,
          error: Vq
        } = Zq,
        dq = qq => {
          try {
            hq(Vq, Bq, [qq])
          } catch {}
        };
      let jq = 0;
      const Hq = (gq, Yq) => {
        if (jq + Yq > Eq) throw new Error(`${qq} decoded past its module's ${Eq} bytes`);
        hq(Aq.fb, new Aq.r(uq), [new Aq.r(gq), jq]);
        try {
          hq(Nq, Bq, [new Aq.r(uq, jq, Yq)])
        } catch {}
        jq += Yq
      };
      let oq, Pq;
      try {
        oq = new rq(qq, Eq, Hq, Yq, cq)
      } catch (vq) {
        throw dq(vq), vq
      }
      const Qq = qq => {
        oq.fail(qq), void 0 !== Pq && Tq(Pq)
      };
      let yq = !1;
      gq.addEventListener("abort", (() => {
        yq && oq.markWorkerFailed(), Qq(new Error(`${qq} stalled`))
      }), {
        once: !0
      }), (0, lq.u)(Wq, (() => {}), Qq);
      try {
        let mq;
        try {
          mq = await fetch(qq, {
            signal: gq
          })
        } catch (vq) {
          throw new Error(`Fetching ${qq} failed: ${(0,xq.i)(vq)}`)
        }
        const {
          ok: cq,
          status: uq,
          body: Bq
        } = function(qq, Eq) {
          try {
            const {
              ok: qq,
              status: gq
            } = Eq;
            return {
              ok: qq,
              status: gq,
              body: hq(Aq.eb, Eq, [])
            }
          } catch {
            throw new Error(`${qq} came in a response a page script made`)
          }
        }(qq, mq);
        if (!cq) throw new Error(`Fetching ${qq} failed: HTTP ${uq}`);
        Yq();
        const Wq = hq(Aq.U, Bq, []);
        Pq = Wq;
        const Nq = () => {
          Tq(Wq)
        };
        for ((0, lq.u)(oq.decoded, Nq, Nq);;) {
          let Eq;
          try {
            Eq = await hq(Aq.ab, Wq, [])
          } catch (vq) {
            throw new Error(`Downloading ${qq} failed: ${(0,xq.i)(vq)}`)
          }
          if (Eq.done) break;
          Yq(), oq.push(Eq.value)
        }
        if (yq = !0, oq.end(), await oq.decoded, Oq(), jq !== Eq) throw new Error(`${qq} ended before its module did`)
      } catch (vq) {
        throw dq(vq), Qq(vq), vq
      }
      oq.terminate();
      try {
        hq(aq, Bq, [])
      } catch {}
      const tq = await Wq;
      return void 0 !== mq && await (0, Aq.H)(qq, new Aq.r(uq), {
        sha256: mq.sha256,
        onMismatch: () => {}
      }), tq
    }

    function Tq(qq) {
      try {
        (0, Aq._)(qq.cancel())
      } catch {}
    }
    const zq = ".zst.bin",
      Sq = 1e3;
    let pq = null;

    function Gq(qq) {
      return pq ??= function() {
        const qq = new Map,
          Eq = "bloxd_wasm_webgpu:5005524,bloxd_wasm_webgl:5368803,bloxd_wasm_webgl1:4769492,bloxd_wasm_workers:196044,bloxd_wasm_models:311680,bloxd_wasm_client:3671383";
        for (const gq of Eq?.split(",") ?? []) {
          const [Eq = "", Yq] = gq.split(":"), lq = Number(Yq);
          Number.isInteger(lq) && lq > 0 && qq.set(Eq, lq)
        }
        return qq
      }(), pq.get(qq)
    }
    async function Lq(qq, Eq) {
      let gq = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
      const Yq = Gq(qq.name);
      if (void 0 === Yq) return Jq(await kq(qq, Eq, gq), "cold-wasm");
      const Oq = fq ? new tq : null;
      let mq;
      try {
        if (cq = qq.url(), Wq()?.includes(Bq(cq)) && await async function(qq) {
            const Eq = new AbortController;
            let gq;
            const Yq = (0, lq.f)((qq => {
              gq = setTimeout((() => {
                Eq.abort(), qq(null)
              }), Sq)
            }));
            try {
              const gq = fetch(qq.href, {
                  cache: "only-if-cached",
                  mode: "same-origin",
                  signal: Eq.signal
                }),
                Oq = await (0, lq.q)([gq, Yq]);
              return !!Oq?.ok && ((0, Aq._)(Oq.body.cancel()), !0)
            } catch {
              return !1
            } finally {
              clearTimeout(gq)
            }
          }(qq.url())) return Oq?.stop(), await async function(qq, Eq, gq, Yq) {
          let lq = !1;
          const Oq = gq && {
            sha256: gq.sha256,
            onMismatch: () => {
              lq = !0
            }
          };
          try {
            return Jq(await kq(qq, Oq, Yq), "warm")
          } catch (mq) {
            const Yq = await Rq(qq, Eq, gq, null);
            if (null === Yq) throw lq && gq.onMismatch(), mq;
            return console.warn(`${qq.url().href} from the HTTP cache failed: ${(0,xq.i)(mq)}: loaded its copy instead`), Jq(Yq, lq ? "warm-refused" : "warm-broken")
          }
        }(qq, Yq, Eq, gq);
        mq = await Rq(qq, Yq, Eq, Oq)
      } finally {
        Oq?.stop()
      }
      var cq;
      return null !== mq ? Jq(mq, "cold-worker") : Jq(await kq(qq, Eq, gq), "cold-wasm")
    }

    function Jq(qq, Eq) {
      return {
        __proto__: null,
        module: qq,
        path: Eq
      }
    }

    function kq(qq, Eq, gq) {
      return void 0 === Gq(qq.name) ? (0, Aq.N)(qq.url(), Eq, gq) : (0, Aq.N)(qq.url(), Eq, {
        ...gq,
        hideThen: !0,
        onDownloaded: () => {
          ! function(qq) {
            const Eq = Wq();
            if (null === Eq) return;
            const gq = Bq(qq),
              Yq = Eq.filter((qq => qq !== gq));
            Yq.push(gq);
            try {
              localStorage.setItem(cq, JSON.stringify(Yq.slice(-uq)))
            } catch (lq) {
              console.warn(`Bloxd wasm: ${gq} could not be recorded as downloaded: a later join asks the HTTP cache nothing for it`, lq)
            }
          }(qq.url()), gq.onDownloaded?.()
        }
      })
    }
    async function Rq(qq, Eq, gq, Yq) {
      if (!fq || !yq()) return null;
      const lq = qq.url(),
        Oq = `${lq.href}${zq}`;
      try {
        return await (0, Aq.gb)(Oq, ((qq, lq, mq) => Mq(Oq, Eq, qq, lq, mq, gq, Yq)))
      } catch (mq) {
        return console.warn(`${(0,xq.i)(mq)}: loading ${lq.href} instead`), null
      }
    }
    let Uq = null,
      Fq = !1;
    const sq = new Map,
      Xq = new Map;

    function wq(qq, Eq, gq) {
      return null === Uq ? Uq = Cq(qq, Eq) : qq !== Uq.build ? console.warn(`Bloxd wasm: ${qq.name} was asked for after ${Uq.build.name} started loading, which this thread keeps`) : Eq.name !== Uq.workers.name && console.warn(`Bloxd wasm: ${Eq.name} was asked for workers after ${Uq.workers.name}, which this thread keeps`), gq?.reloadFailedDownload && !Fq && (0, Yq.W)() && (Fq = !0, Uq = Cq(Uq.build, Uq.workers)), Uq.loaded
    }

    function Kq(qq, Eq) {
      if (null !== Uq) return (0, lq.e)([]);
      const gq = qq.filter((qq => !sq.has(qq.name))).map((qq => {
        const gq = new AbortController,
          Yq = {
            compiled: kq(qq, (0, Oq.d)(qq.name), {
              priority: Eq,
              lE: gq.signal,
              onDownloaded: () => {
                Yq.downloaded = !0
              },
              retries: {
                onRetry: () => {
                  Yq.downloaded = !1, null !== Uq && gq.abort()
                }
              }
            }),
            cancel: gq,
            downloaded: !1
          };
        return sq.set(qq.name, Yq), (0, lq.f)((Eq => {
          (0, lq.u)(Yq.compiled, (() => {
            Yq.downloaded = !0, Eq()
          }), (Yq => {
            gq.signal.aborted || console.warn(`Bloxd wasm: ${qq.name}'s compile ahead of the load failed: the load compiles it afresh`, Yq), Eq()
          }))
        }))
      }));
      return (0, lq.e)(gq)
    }

    function Cq(qq, Eq) {
      const gq = (0, Yq.H)((async () => {
        (0, mq.E)(), Xq.clear();
        const gq = eq(qq),
          Yq = Eq.name === qq.name ? gq : eq(Eq);
        for (const {
            cancel: qq
          }
          of sq.values()) qq.abort();
        sq.clear(), await (0, lq.e)([gq, Yq]);
        const Oq = await gq,
          xq = await Yq;
        return (0, mq.E)(), {
          module: Oq,
          workerModule: xq
        }
      }), qq);
      return {
        build: qq,
        workers: Eq,
        loaded: gq
      }
    }

    function Iq(qq) {
      return Xq.get(qq)
    }

    function eq(qq) {
      const Eq = performance.now(),
        gq = sq.get(qq.name);
      sq.delete(qq.name);
      const Yq = !0 === gq?.downloaded ? gq : void 0;
      return void 0 !== gq && void 0 === Yq && gq.cancel.abort(), (0, lq.f)(((gq, Oq) => {
        const mq = (Yq, lq) => {
            Xq.set(qq.name, {
              path: lq,
              ms: performance.now() - Eq
            }), gq(Yq)
          },
          xq = () => {
            (0, lq.u)(qE(qq), (qq => {
              let {
                module: Eq,
                path: gq
              } = qq;
              mq(Eq, gq)
            }), Oq)
          };
        void 0 === Yq ? xq() : (0, lq.u)(Yq.compiled, (qq => {
          mq(qq, "ahead")
        }), xq)
      }))
    }
    async function Dq(qq, Eq) {
      const {
        module: gq
      } = await qE(qq, {
        retries: Eq
      });
      return gq
    }
    async function qE(qq) {
      let Eq = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
      return await Lq(qq, (0, Oq.d)(qq.name), Eq)
    }
  },
  6500: (qq, Eq, gq) => {
    gq.d(Eq, {
      d: () => mq
    });
    var Yq = gq(2805);
    const lq = {
      bloxd_wasm: () => "6d78896f037d6c3dd2ec91f53e012efc14d4c7478e36fc57749ae14be1df3096",
      bloxd_wasm_client: () => "132c78fe4d5d985a39aef9cb5338e6d40926f1581f341ef925ca4f1b873982cf",
      bloxd_wasm_workers: () => "9fa00e1e679c4b317e391d15a0e20bcce764b10ac53881c003b3245b86db6cf5",
      bloxd_wasm_models: () => "9dd9f9fb8ff600ad7045604d8a17da38690a8b012f1e8b7f578a1a671baf7185",
      bloxd_wasm_webgpu: () => "72b5e9034b38cfcfd84eb4e4b1607ea3fedbb7078518766dd27ac431c9922848",
      bloxd_wasm_webgl: () => "a5cefc5390d0e4cf10eab192e6d4403fc337fb14cfe0e3164c3430a7c721595d",
      bloxd_wasm_webgl1: () => "3cb76bb92c5501eb795864d943ed2c567c8b5ff7777cd5f2c08b0940197979c9",
      bloxd_wasm_replay: () => "f8132694ecb3c07d332a67ad7dab19d035d58dc2cea1ddbf2ca6dc7ec556cd0c",
      bloxd_wasm_recorder: () => "166b4da1bfa19d1d90b1f2d66b23de17c858096a88eb92fe87a8c9e58f77c3bb",
      bloxd_wasm_anim: () => "11dd5bcc2c7323ae0a5b9e4cd8b8c81d457a9ea85d6e339c6454ed1bb80a27c4",
      bloxd_wasm_textures: () => "2ba4917ae218104948db870865715dacd8571878aedd4fece740312291892fac",
      bloxd_wasm_shader_pack: () => "dfb97693642c8a1ee7219f62c2557fcfb1c20ef622361f5b18389c544478cae6"
    };
    var Oq = gq(4524);

    function mq(qq) {
      const Eq = Object.prototype.hasOwnProperty.call(lq, qq) ? lq[qq]() : void 0;
      if (void 0 !== Eq) return {
        sha256: Eq,
        onMismatch: Oq.C
      };
      throw new Yq.j(`${qq} has no release digest, so this build refuses it`)
    }
  },
  36345: (qq, Eq, gq) => {
    gq.d(Eq, {
      c: () => Yq,
      g: () => Oq,
      j: () => Aq,
      k: () => mq,
      l: () => lq
    });
    const Yq = /^alloc_failed (\d+) bytes$/;

    function lq(qq, Eq) {
      return Oq(qq, Eq) ? `trap=alloc_failed ${Eq} bytes` : `trap=${qq}`
    }

    function Oq(qq, Eq) {
      return "unreachable" === qq && Eq > 0
    }

    function mq(qq, Eq, gq) {
      const Yq = function(qq) {
        return qq instanceof WebAssembly.RuntimeError ? /unreachable/i.test(qq.message) ? "unreachable" : /out of bounds/i.test(qq.message) ? "out_of_bounds" : "runtime_error" : (qq instanceof RangeError || qq instanceof Error && "InternalError" === qq.name) && /call stack|recursion/i.test(qq.message) ? "stack_overflow" : "js_error"
      }(qq);
      if ("unreachable" !== Yq) return {
        kind: Yq,
        panic: null,
        refusedBytes: 0
      };
      const lq = Eq(),
        Oq = gq();
      return {
        kind: Yq,
        panic: Oq > 0 ? null : lq,
        refusedBytes: Oq
      }
    }
    const xq = 300;

    function Aq(qq) {
      return qq.replace(/\s*\n\s*/g, " / ").slice(0, xq)
    }
  }
};
Object.freeze(modules);
for (const qq in modules) Object.freeze(modules[qq]);