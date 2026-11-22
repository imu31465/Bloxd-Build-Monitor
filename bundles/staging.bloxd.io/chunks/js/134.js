export const id = 134;
export const ids = [134];
export const modules = {
  35841: (kk, ek, ik) => {
    ik.d(ek, {
      e: () => Dk,
      h: () => fk,
      k: () => Sk,
      l: () => bk
    });
    const Dk = 1024,
      fk = 1024 * Dk;

    function Sk(kk) {
      return 2 ** Math.floor(Math.log2(Math.max(1, kk / fk)))
    }

    function bk(kk) {
      return (kk / fk).toFixed(1)
    }
  },
  35843: (kk, ek, ik) => {
    ik.d(ek, {
      d: () => rk,
      f: () => mk,
      i: () => bk,
      j: () => Kk
    });
    var Dk = ik(35836),
      fk = ik(11);
    const Sk = /wasm-function\[\d+\]|wasm:\/\/|\[wasm code\]/;

    function bk(kk) {
      if (kk instanceof WebAssembly.RuntimeError) return !0;
      const ek = kk instanceof Error ? kk.stack : void 0;
      return "string" === typeof ek && Sk.test(ek)
    }

    function rk(kk, ek, ik) {
      var fk;
      const bk = kk instanceof Error ? kk.name : "thrown",
        rk = (kk instanceof Error && null !== (fk = kk.stack) && void 0 !== fk ? fk : "").split("\n").filter((kk => Sk.test(kk))).slice(0, 8).map((kk => kk.trim())),
        Pk = null === ek ? "wasm memory unknown" : `wasm memory ${Math.round(ek/2**20)} MB`,
        mk = null === ik.panic ? "" : `, panic: ${(0,Dk.g)(ik.panic)}`,
        Mk = `${bk}: ${kk instanceof Error?kk.message:String(kk)}`;
      return `${(0,Dk.l)(ik.kind,ik.refusedBytes)} ${Mk} (${Pk})${mk}${rk.length>0?` | ${rk.join(" < ")}`:""}`
    }
    const Pk = /on a detached ArrayBuffer|access detached ArrayBuffer|has been detached from the view/;

    function mk(kk) {
      var ek;
      let ik = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ArrayBuffer.prototype;
      if (!(kk instanceof Error) || !Pk.test(kk.message)) return {};
      if (!("detached" in ik)) return {
        arrayBufferDetached: "absent"
      };
      return {
        arrayBufferDetached: (0, fk.Q)(null === (ek = (0, fk.J)(ik, "detached")) || void 0 === ek ? void 0 : ek.get, /^function (get )?detached\(\) \{\s*\[native code\]\s*\}$/) ? "native" : "script"
      }
    }
    const Mk = 500;

    function Kk(kk) {
      let ek = "[object Object]";
      try {
        ek = String(kk)
      } catch {}
      if ("[object Object]" !== ek) return ek;
      try {
        var ik, Dk;
        return null !== (ik = null === (Dk = JSON.stringify(kk)) || void 0 === Dk ? void 0 : Dk.slice(0, Mk)) && void 0 !== ik ? ik : ek
      } catch {
        return ek
      }
    }
  },
  35878: (kk, ek, ik) => {
    ik.d(ek, {
      b: () => Gk,
      e: () => ke,
      g: () => Rk,
      j: () => gk
    });
    var Dk = ik(2821),
      fk = ik(2835),
      Sk = ik(6459),
      bk = ik(4629),
      rk = ik(2831),
      Pk = ik(2823);
    const mk = "bloxd-wasmDownloaded",
      Mk = 12;

    function Kk(kk) {
      return kk.pathname.slice(kk.pathname.lastIndexOf("/") + 1)
    }

    function xk() {
      try {
        if ("undefined" === typeof localStorage) return null;
        const kk = JSON.parse(localStorage.getItem(mk) ?? "[]");
        return Array.isArray(kk) ? kk.filter((kk => "string" === typeof kk)) : []
      } catch (kk) {
        return console.warn("Bloxd wasm: the record of downloaded modules could not be read: asking the HTTP cache for none", kk), null
      }
    }
    const nk = Reflect.apply,
      Uk = "undefined" === typeof Worker ? void 0 : Worker,
      Hk = Uk?.prototype.postMessage,
      wk = Uk?.prototype.terminate,
      lk = "undefined" === typeof EventTarget ? void 0 : EventTarget.prototype.addEventListener,
      pk = "undefined" === typeof MessageEvent ? void 0 : Object.getOwnPropertyDescriptor(MessageEvent.prototype, "data")?.get,
      yk = Object.getOwnPropertyDescriptor(Object.getPrototypeOf(Uint8Array.prototype), "buffer").get,
      Yk = function() {
        try {
          return (0, bk.h)(Uk, "Worker", !0) && (0, bk.h)(Hk, "postMessage") && (0, bk.h)(wk, "terminate") && (0, bk.h)(yk, "buffer") && void 0 !== lk && void 0 !== pk
        } catch {
          return !1
        }
      }();
    let Lk = !1;

    function Ck() {
      return Yk && !Lk
    }
    class Ak {
      worker = null;
      failed = !1;
      constructor() {
        if (Ck()) try {
          this.worker = sk(), nk(lk, this.worker, ["error", () => {
            this.failed = !0
          }])
        } catch {
          this.stop()
        }
      }
      take() {
        const kk = this.worker;
        if (this.worker = null, null !== kk && this.failed) throw nk(wk, kk, []), new Error("it did not run");
        return kk
      }
      stop() {
        const kk = this.worker;
        this.worker = null, null !== kk && nk(wk, kk, [])
      }
    }
    class jk {
      decoded;
      worker;
      reject;
      constructor(kk, ek, ik, Dk, Sk) {
        try {
          this.worker = Sk?.take() ?? sk()
        } catch (mk) {
          throw Lk = !0, new Error(`The zstd decoder's worker did not start: ${(0,rk.e)(mk)}`)
        }
        const bk = this.worker;
        this.decoded = (0, fk.g)(((ek, fk) => {
          this.reject = fk;
          const Sk = (kk, ek) => {
            nk(lk, bk, [kk, ek])
          };
          Sk("message", (kk => {
            Dk();
            try {
              const Dk = nk(pk, kk, []);
              if (!0 === Dk) ek();
              else {
                if ("string" === typeof Dk) throw Dk.startsWith(rk.b) && (Lk = !0), new Error(Dk);
                ik(Dk, nk(Pk.x, Dk, []))
              }
            } catch (mk) {
              fk(mk)
            }
          })), Sk("error", (() => {
            Lk = !0, fk(new Error("The zstd decoder's worker did not run"))
          })), Sk("messageerror", (() => {
            fk(new Error(`${kk}'s decoder sent a piece that could not be read`))
          }))
        })), (0, Pk.Y)(this.decoded), nk(Hk, bk, [
          [kk, ek]
        ])
      }
      push(kk) {
        nk(Hk, this.worker, [kk, [nk(yk, kk, [])]])
      }
      end() {
        nk(Hk, this.worker, [null])
      }
      markWorkerFailed() {
        Lk = !0
      }
      fail(kk) {
        this.reject(kk), this.terminate()
      }
      terminate() {
        nk(wk, this.worker, [])
      }
    }

    function sk() {
      if (globalThis.Worker !== Uk) throw new Error("Worker is not the one the page loaded with");
      return new Worker(new URL(ik.p + ik.u(67), ik.b), {
        name: "wasmZstdDecoder",
        type: "module"
      })
    }
    const dk = Reflect.apply,
      Vk = ArrayBuffer,
      Fk = "undefined" === typeof Response ? void 0 : Response,
      uk = "undefined" === typeof ReadableStream ? void 0 : ReadableStream,
      qk = function() {
        let kk;
        void 0 !== uk && new uk({
          __proto__: null,
          start(ek) {
            const {
              enqueue: ik,
              close: Dk,
              error: fk
            } = Object.getPrototypeOf(ek);
            kk = {
              enqueue: ik,
              close: Dk,
              error: fk
            }
          }
        }, {
          __proto__: null
        });
        return kk
      }(),
      Ik = function() {
        try {
          return "undefined" !== typeof WebAssembly && "function" === typeof WebAssembly.compileStreaming && void 0 !== qk && (0, bk.h)(Fk, "Response", !0) && (0, bk.h)(uk, "ReadableStream", !0) && (0, bk.h)(qk.enqueue, "enqueue") && (0, bk.h)(qk.close, "close") && (0, bk.h)(qk.error, "error") && (0, bk.h)(Pk.cb, "body") && (0, bk.h)(Pk.R, "getReader") && (0, bk.h)(Pk.ab, "read")
        } catch {
          return !1
        }
      }();
    async function zk(kk, ek, ik, Dk, Sk, bk, mk) {
      const Mk = new Vk(ek),
        {
          controller: Kk,
          compiled: xk
        } = function(kk) {
          try {
            let kk;
            const ek = new uk({
                __proto__: null,
                start(ek) {
                  kk = ek
                }
              }, {
                __proto__: null
              }),
              ik = new Fk(ek, {
                __proto__: null,
                headers: {
                  __proto__: null,
                  "Content-Type": "application/wasm"
                }
              });
            return {
              controller: kk,
              compiled: (0, Pk.Y)((0, Pk.D)((0, Pk.jb)(ik)))
            }
          } catch (ek) {
            throw new Error(`${kk} could not be streamed into a compile: ${(0,rk.e)(ek)}`)
          }
        }(kk),
        {
          enqueue: nk,
          close: Uk,
          error: Hk
        } = qk,
        wk = kk => {
          try {
            dk(Hk, Kk, [kk])
          } catch {}
        };
      let lk = 0;
      const pk = (ik, Dk) => {
        if (lk + Dk > ek) throw new Error(`${kk} decoded past its module's ${ek} bytes`);
        dk(Pk.gb, new Pk.o(Mk), [new Pk.o(ik), lk]);
        try {
          dk(nk, Kk, [new Pk.o(Mk, lk, Dk)])
        } catch {}
        lk += Dk
      };
      let yk, Yk;
      try {
        yk = new jk(kk, ek, pk, Dk, mk)
      } catch (sk) {
        throw wk(sk), sk
      }
      const Lk = kk => {
        yk.fail(kk), void 0 !== Yk && Qk(Yk)
      };
      let Ck = !1;
      ik.addEventListener("abort", (() => {
        Ck && yk.markWorkerFailed(), Lk(new Error(`${kk} stalled`))
      }), {
        once: !0
      }), (0, fk.o)(xk, (() => {}), Lk);
      try {
        let bk;
        try {
          bk = await fetch(kk, {
            signal: ik
          })
        } catch (sk) {
          throw new Error(`Fetching ${kk} failed: ${(0,rk.e)(sk)}`)
        }
        const {
          ok: mk,
          status: Mk,
          body: Kk
        } = function(kk, ek) {
          try {
            const {
              ok: kk,
              status: ik
            } = ek;
            return {
              ok: kk,
              status: ik,
              body: dk(Pk.cb, ek, [])
            }
          } catch {
            throw new Error(`${kk} came in a response a page script made`)
          }
        }(kk, bk);
        if (!mk) throw new Error(`Fetching ${kk} failed: HTTP ${Mk}`);
        Dk();
        const xk = dk(Pk.R, Kk, []);
        Yk = xk;
        const nk = () => {
          Qk(xk)
        };
        for ((0, fk.o)(yk.decoded, nk, nk);;) {
          let ek;
          try {
            ek = await dk(Pk.ab, xk, [])
          } catch (sk) {
            throw new Error(`Downloading ${kk} failed: ${(0,rk.e)(sk)}`)
          }
          if (ek.done) break;
          Dk(), yk.push(ek.value)
        }
        if (Ck = !0, yk.end(), await yk.decoded, Sk(), lk !== ek) throw new Error(`${kk} ended before its module did`)
      } catch (sk) {
        throw wk(sk), Lk(sk), sk
      }
      yk.terminate();
      try {
        dk(Uk, Kk, [])
      } catch {}
      const Ak = await xk;
      return void 0 !== bk && await (0, Pk.z)(kk, new Pk.o(Mk), {
        sha256: bk.sha256,
        onMismatch: () => {}
      }), Ak
    }

    function Qk(kk) {
      try {
        (0, Pk.Y)(kk.cancel())
      } catch {}
    }
    const vk = ".zst.bin",
      Ek = 1e3;
    let hk = null;

    function ak(kk) {
      return hk ??= function() {
        const kk = new Map,
          ek = "bloxd_wasm_webgpu:5070732,bloxd_wasm_webgl:5451804,bloxd_wasm_webgl1:4821797,bloxd_wasm_workers:198965,bloxd_wasm_models:311680,bloxd_wasm_client:3699634";
        for (const ik of ek?.split(",") ?? []) {
          const [ek = "", Dk] = ik.split(":"), fk = Number(Dk);
          Number.isInteger(fk) && fk > 0 && kk.set(ek, fk)
        }
        return kk
      }(), hk.get(kk)
    }
    async function Wk(kk, ek) {
      let ik = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
      const Dk = ak(kk.name);
      if (void 0 === Dk) return tk(await Xk(kk, ek, ik), "cold-wasm");
      const Sk = Ik ? new Ak : null;
      let bk;
      try {
        if (mk = kk.url(), xk()?.includes(Kk(mk)) && await async function(kk) {
            const ek = new AbortController;
            let ik;
            const Dk = (0, fk.g)((kk => {
              ik = setTimeout((() => {
                ek.abort(), kk(null)
              }), Ek)
            }));
            try {
              const ik = fetch(kk.href, {
                  cache: "only-if-cached",
                  mode: "same-origin",
                  signal: ek.signal
                }),
                Sk = await (0, fk.n)([ik, Dk]);
              return !!Sk?.ok && ((0, Pk.Y)(Sk.body.cancel()), !0)
            } catch {
              return !1
            } finally {
              clearTimeout(ik)
            }
          }(kk.url())) return Sk?.stop(), await async function(kk, ek, ik, Dk) {
          let fk = !1;
          const Sk = ik && {
            sha256: ik.sha256,
            onMismatch: () => {
              fk = !0
            }
          };
          try {
            return tk(await Xk(kk, Sk, Dk), "warm")
          } catch (bk) {
            const Dk = await Bk(kk, ek, ik, null);
            if (null === Dk) throw fk && ik.onMismatch(), bk;
            return console.warn(`${kk.url().href} from the HTTP cache failed: ${(0,rk.e)(bk)}: loaded its copy instead`), tk(Dk, fk ? "warm-refused" : "warm-broken")
          }
        }(kk, Dk, ek, ik);
        bk = await Bk(kk, Dk, ek, Sk)
      } finally {
        Sk?.stop()
      }
      var mk;
      return null !== bk ? tk(bk, "cold-worker") : tk(await Xk(kk, ek, ik), "cold-wasm")
    }

    function tk(kk, ek) {
      return {
        __proto__: null,
        module: kk,
        path: ek
      }
    }

    function Xk(kk, ek, ik) {
      return void 0 === ak(kk.name) ? (0, Pk.I)(kk.url(), ek, ik) : (0, Pk.I)(kk.url(), ek, {
        ...ik,
        hideThen: !0,
        onDownloaded: () => {
          ! function(kk) {
            const ek = xk();
            if (null === ek) return;
            const ik = Kk(kk),
              Dk = ek.filter((kk => kk !== ik));
            Dk.push(ik);
            try {
              localStorage.setItem(mk, JSON.stringify(Dk.slice(-Mk)))
            } catch (fk) {
              console.warn(`Bloxd wasm: ${ik} could not be recorded as downloaded: a later join asks the HTTP cache nothing for it`, fk)
            }
          }(kk.url()), ik.onDownloaded?.()
        }
      })
    }
    async function Bk(kk, ek, ik, Dk) {
      if (!Ik || !Ck()) return null;
      const fk = kk.url(),
        Sk = `${fk.href}${vk}`;
      try {
        return await (0, Pk.hb)(Sk, ((kk, fk, bk) => zk(Sk, ek, kk, fk, bk, ik, Dk)))
      } catch (bk) {
        return console.warn(`${(0,rk.e)(bk)}: loading ${fk.href} instead`), null
      }
    }
    let ck = null,
      Tk = !1;
    const Zk = new Map,
      Ok = new Map;

    function gk(kk, ek, ik) {
      return null === ck ? ck = Nk(kk, ek) : kk !== ck.build ? console.warn(`Bloxd wasm: ${kk.name} was asked for after ${ck.build.name} started loading, which this thread keeps`) : ek.name !== ck.workers.name && console.warn(`Bloxd wasm: ${ek.name} was asked for workers after ${ck.workers.name}, which this thread keeps`), ik?.reloadFailedDownload && !Tk && (0, Dk.cb)() && (Tk = !0, ck = Nk(ck.build, ck.workers)), ck.loaded
    }

    function Gk(kk, ek) {
      if (null !== ck) return (0, fk.e)([]);
      const ik = kk.filter((kk => !Zk.has(kk.name))).map((kk => {
        const ik = new AbortController,
          Dk = {
            compiled: Xk(kk, (0, Sk.d)(kk.name), {
              priority: ek,
              Ji: ik.signal,
              onDownloaded: () => {
                Dk.downloaded = !0
              },
              retries: {
                onRetry: () => {
                  Dk.downloaded = !1, null !== ck && ik.abort()
                }
              }
            }),
            cancel: ik,
            downloaded: !1
          };
        return Zk.set(kk.name, Dk), (0, fk.g)((ek => {
          (0, fk.o)(Dk.compiled, (() => {
            Dk.downloaded = !0, ek()
          }), (Dk => {
            ik.signal.aborted || console.warn(`Bloxd wasm: ${kk.name}'s compile ahead of the load failed: the load compiles it afresh`, Dk), ek()
          }))
        }))
      }));
      return (0, fk.e)(ik)
    }

    function Nk(kk, ek) {
      const ik = (0, Dk.M)((async () => {
        (0, bk.v)(), Ok.clear();
        const ik = Jk(kk),
          Dk = ek.name === kk.name ? ik : Jk(ek);
        for (const {
            cancel: kk
          }
          of Zk.values()) kk.abort();
        Zk.clear(), await (0, fk.e)([ik, Dk]);
        const Sk = await ik,
          rk = await Dk;
        return (0, bk.v)(), {
          module: Sk,
          workerModule: rk
        }
      }), kk);
      return {
        build: kk,
        workers: ek,
        loaded: ik
      }
    }

    function Rk(kk) {
      return Ok.get(kk)
    }

    function Jk(kk) {
      const ek = performance.now(),
        ik = Zk.get(kk.name);
      Zk.delete(kk.name);
      const Dk = !0 === ik?.downloaded ? ik : void 0;
      return void 0 !== ik && void 0 === Dk && ik.cancel.abort(), (0, fk.g)(((ik, Sk) => {
        const bk = (Dk, fk) => {
            Ok.set(kk.name, {
              path: fk,
              ms: performance.now() - ek
            }), ik(Dk)
          },
          rk = () => {
            (0, fk.o)(ee(kk), (kk => {
              let {
                module: ek,
                path: ik
              } = kk;
              bk(ek, ik)
            }), Sk)
          };
        void 0 === Dk ? rk() : (0, fk.o)(Dk.compiled, (kk => {
          bk(kk, "ahead")
        }), rk)
      }))
    }
    async function ke(kk, ek) {
      const {
        module: ik
      } = await ee(kk, {
        retries: ek
      });
      return ik
    }
    async function ee(kk) {
      let ek = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
      return await Wk(kk, (0, Sk.d)(kk.name), ek)
    }
  },
  6459: (kk, ek, ik) => {
    ik.d(ek, {
      d: () => bk
    });
    var Dk = ik(2823);
    const fk = {
      bloxd_wasm: () => "295c5cd2cc27f19595e8622c000a7c41e60e485a07dbba504442890cbd24a8aa",
      bloxd_wasm_client: () => "416b91d2a16ae728bbeca95bbffddabc8a3a7b4a34aa66d1fe6f3b3eaf78245d",
      bloxd_wasm_workers: () => "1d7067ca0a5537d6f71a4946b88fe0f1c972f70665e18d64e4adb5d5285f18e2",
      bloxd_wasm_models: () => "867866320707b9f1ca78d6925955f07814ec1ca44420a0c7cde5311c04365e33",
      bloxd_wasm_webgpu: () => "9867480be13b90b64fe4abafb562dec31eaac1bd6f0fcc19b9bb76500d4fdc10",
      bloxd_wasm_webgl: () => "9f4c0bbaef65b13dad73d1ed314d3c8b192b18cfc30179c3542f3ca03efb48fd",
      bloxd_wasm_webgl1: () => "014507591fe08d6df7d489a19d8df0b9f54e5fadda2418f355e9f2ae9280bb00",
      bloxd_wasm_replay: () => "03359aae307812a1ddfe49365a61deb594b3a7b4fb670fa4cb1f3ee68976c741",
      bloxd_wasm_recorder: () => "0b07d8728842a235c0e7a2c268ef34837026080bff9775bbc59cb6b2df75da11",
      bloxd_wasm_anim: () => "39f782ac95bb53f159aa901360aa630676baa5e6c493e3edb2871e65cc6a978c",
      bloxd_wasm_textures: () => "ef551c40e5bb3fca12998cd42e0e4317f1aad8584357c16a578ec219fc254bcb",
      bloxd_wasm_shader_pack: () => "9f488776af56b7975c23b43dfcad2bdc3764d5025ab085512a39009b8882a5ef"
    };
    var Sk = ik(4629);

    function bk(kk) {
      const ek = Object.prototype.hasOwnProperty.call(fk, kk) ? fk[kk]() : void 0;
      if (void 0 !== ek) return {
        sha256: ek,
        onMismatch: Sk.s
      };
      throw new Dk.l(`${kk} has no release digest, so this build refuses it`)
    }
  },
  35836: (kk, ek, ik) => {
    ik.d(ek, {
      b: () => Dk,
      f: () => Sk,
      g: () => Pk,
      h: () => bk,
      l: () => fk
    });
    const Dk = /^alloc_failed (\d+) bytes$/;

    function fk(kk, ek) {
      return Sk(kk, ek) ? `trap=alloc_failed ${ek} bytes` : `trap=${kk}`
    }

    function Sk(kk, ek) {
      return "unreachable" === kk && ek > 0
    }

    function bk(kk, ek, ik) {
      const Dk = function(kk) {
        return kk instanceof WebAssembly.RuntimeError ? /unreachable/i.test(kk.message) ? "unreachable" : /out of bounds/i.test(kk.message) ? "out_of_bounds" : "runtime_error" : (kk instanceof RangeError || kk instanceof Error && "InternalError" === kk.name) && /call stack|recursion/i.test(kk.message) ? "stack_overflow" : "js_error"
      }(kk);
      if ("unreachable" !== Dk) return {
        kind: Dk,
        panic: null,
        refusedBytes: 0
      };
      const fk = ek(),
        Sk = ik();
      return {
        kind: Dk,
        panic: Sk > 0 ? null : fk,
        refusedBytes: Sk
      }
    }
    const rk = 300;

    function Pk(kk) {
      return kk.replace(/\s*\n\s*/g, " / ").slice(0, rk)
    }
  }
};
Object.freeze(modules);
for (const kk in modules) Object.freeze(modules[kk]);