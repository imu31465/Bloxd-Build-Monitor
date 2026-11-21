export const id = 133;
export const ids = [133];
export const modules = {
  36458: (dd, Jd, kd) => {
    kd.d(Jd, {
      d: () => Zd,
      f: () => Cd,
      h: () => Pd,
      j: () => od
    });
    var pd = kd(36448),
      Nd = kd(10);
    const Wd = /wasm-function\[\d+\]|wasm:\/\/|\[wasm code\]/;

    function Pd(dd) {
      if (dd instanceof WebAssembly.RuntimeError) return !0;
      const Jd = dd instanceof Error ? dd.stack : void 0;
      return "string" === typeof Jd && Wd.test(Jd)
    }

    function Zd(dd, Jd, kd) {
      var Nd;
      const Pd = dd instanceof Error ? dd.name : "thrown",
        Zd = (dd instanceof Error && null !== (Nd = dd.stack) && void 0 !== Nd ? Nd : "").split("\n").filter((dd => Wd.test(dd))).slice(0, 8).map((dd => dd.trim())),
        gd = null === Jd ? "wasm memory unknown" : `wasm memory ${Math.round(Jd/2**20)} MB`,
        Cd = null === kd.panic ? "" : `, panic: ${(0,pd.g)(kd.panic)}`,
        Kd = `${Pd}: ${dd instanceof Error?dd.message:String(dd)}`;
      return `${(0,pd.k)(kd.kind,kd.refusedBytes)} ${Kd} (${gd})${Cd}${Zd.length>0?` | ${Zd.join(" < ")}`:""}`
    }
    const gd = /on a detached ArrayBuffer|access detached ArrayBuffer|has been detached from the view/;

    function Cd(dd) {
      var Jd;
      let kd = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ArrayBuffer.prototype;
      if (!(dd instanceof Error) || !gd.test(dd.message)) return {};
      if (!("detached" in kd)) return {
        arrayBufferDetached: "absent"
      };
      return {
        arrayBufferDetached: (0, Nd.Y)(null === (Jd = (0, Nd.R)(kd, "detached")) || void 0 === Jd ? void 0 : Jd.get, /^function (get )?detached\(\) \{\s*\[native code\]\s*\}$/) ? "native" : "script"
      }
    }
    const Kd = 500;

    function od(dd) {
      let Jd = "[object Object]";
      try {
        Jd = String(dd)
      } catch {}
      if ("[object Object]" !== Jd) return Jd;
      try {
        var kd, pd;
        return null !== (kd = null === (pd = JSON.stringify(dd)) || void 0 === pd ? void 0 : pd.slice(0, Kd)) && void 0 !== kd ? kd : Jd
      } catch {
        return Jd
      }
    }
  },
  36480: (dd, Jd, kd) => {
    kd.d(Jd, {
      c: () => zd,
      d: () => dJ,
      g: () => wd,
      h: () => Vd
    });
    var pd = kd(2761),
      Nd = kd(2781),
      Wd = kd(6483),
      Pd = kd(4563),
      Zd = kd(2776),
      gd = kd(2770);
    const Cd = "bloxd-wasmDownloaded",
      Kd = 12;

    function od(dd) {
      return dd.pathname.slice(dd.pathname.lastIndexOf("/") + 1)
    }

    function ld() {
      try {
        if ("undefined" === typeof localStorage) return null;
        const dd = JSON.parse(localStorage.getItem(Cd) ?? "[]");
        return Array.isArray(dd) ? dd.filter((dd => "string" === typeof dd)) : []
      } catch (dd) {
        return console.warn("Bloxd wasm: the record of downloaded modules could not be read: asking the HTTP cache for none", dd), null
      }
    }
    const Qd = Reflect.apply,
      Ld = "undefined" === typeof Worker ? void 0 : Worker,
      Od = Ld?.prototype.postMessage,
      ed = Ld?.prototype.terminate,
      Rd = "undefined" === typeof EventTarget ? void 0 : EventTarget.prototype.addEventListener,
      Id = "undefined" === typeof MessageEvent ? void 0 : Object.getOwnPropertyDescriptor(MessageEvent.prototype, "data")?.get,
      Gd = Object.getOwnPropertyDescriptor(Object.getPrototypeOf(Uint8Array.prototype), "buffer").get,
      vd = function() {
        try {
          return (0, Pd.m)(Ld, "Worker", !0) && (0, Pd.m)(Od, "postMessage") && (0, Pd.m)(ed, "terminate") && (0, Pd.m)(Gd, "buffer") && void 0 !== Rd && void 0 !== Id
        } catch {
          return !1
        }
      }();
    let xd = !1;

    function qd() {
      return vd && !xd
    }
    class Bd {
      worker = null;
      failed = !1;
      constructor() {
        if (qd()) try {
          this.worker = ad(), Qd(Rd, this.worker, ["error", () => {
            this.failed = !0
          }])
        } catch {
          this.stop()
        }
      }
      take() {
        const dd = this.worker;
        if (this.worker = null, null !== dd && this.failed) throw Qd(ed, dd, []), new Error("it did not run");
        return dd
      }
      stop() {
        const dd = this.worker;
        this.worker = null, null !== dd && Qd(ed, dd, [])
      }
    }
    class sd {
      decoded;
      worker;
      reject;
      constructor(dd, Jd, kd, pd, Wd) {
        try {
          this.worker = Wd?.take() ?? ad()
        } catch (Cd) {
          throw xd = !0, new Error(`The zstd decoder's worker did not start: ${(0,Zd.e)(Cd)}`)
        }
        const Pd = this.worker;
        this.decoded = (0, Nd.h)(((Jd, Nd) => {
          this.reject = Nd;
          const Wd = (dd, Jd) => {
            Qd(Rd, Pd, [dd, Jd])
          };
          Wd("message", (dd => {
            pd();
            try {
              const pd = Qd(Id, dd, []);
              if (!0 === pd) Jd();
              else {
                if ("string" === typeof pd) throw pd.startsWith(Zd.d) && (xd = !0), new Error(pd);
                kd(pd, Qd(gd.s, pd, []))
              }
            } catch (Cd) {
              Nd(Cd)
            }
          })), Wd("error", (() => {
            xd = !0, Nd(new Error("The zstd decoder's worker did not run"))
          })), Wd("messageerror", (() => {
            Nd(new Error(`${dd}'s decoder sent a piece that could not be read`))
          }))
        })), (0, gd.T)(this.decoded), Qd(Od, Pd, [
          [dd, Jd]
        ])
      }
      push(dd) {
        Qd(Od, this.worker, [dd, [Qd(Gd, dd, [])]])
      }
      end() {
        Qd(Od, this.worker, [null])
      }
      markWorkerFailed() {
        xd = !0
      }
      fail(dd) {
        this.reject(dd), this.terminate()
      }
      terminate() {
        Qd(ed, this.worker, [])
      }
    }

    function ad() {
      if (globalThis.Worker !== Ld) throw new Error("Worker is not the one the page loaded with");
      return new Worker(new URL(kd.p + kd.u(65), kd.b), {
        name: "wasmZstdDecoder",
        type: "module"
      })
    }
    const Md = Reflect.apply,
      Fd = ArrayBuffer,
      Yd = "undefined" === typeof Response ? void 0 : Response,
      md = "undefined" === typeof ReadableStream ? void 0 : ReadableStream,
      bd = function() {
        let dd;
        void 0 !== md && new md({
          __proto__: null,
          start(Jd) {
            const {
              enqueue: kd,
              close: pd,
              error: Nd
            } = Object.getPrototypeOf(Jd);
            dd = {
              enqueue: kd,
              close: pd,
              error: Nd
            }
          }
        }, {
          __proto__: null
        });
        return dd
      }(),
      Sd = function() {
        try {
          return "undefined" !== typeof WebAssembly && "function" === typeof WebAssembly.compileStreaming && void 0 !== bd && (0, Pd.m)(Yd, "Response", !0) && (0, Pd.m)(md, "ReadableStream", !0) && (0, Pd.m)(bd.enqueue, "enqueue") && (0, Pd.m)(bd.close, "close") && (0, Pd.m)(bd.error, "error") && (0, Pd.m)(gd.V, "body") && (0, Pd.m)(gd.K, "getReader") && (0, Pd.m)(gd.U, "read")
        } catch {
          return !1
        }
      }();
    async function jd(dd, Jd, kd, pd, Wd, Pd, Cd) {
      const Kd = new Fd(Jd),
        {
          controller: od,
          compiled: ld
        } = function(dd) {
          try {
            let dd;
            const Jd = new md({
                __proto__: null,
                start(Jd) {
                  dd = Jd
                }
              }, {
                __proto__: null
              }),
              kd = new Yd(Jd, {
                __proto__: null,
                headers: {
                  __proto__: null,
                  "Content-Type": "application/wasm"
                }
              });
            return {
              controller: dd,
              compiled: (0, gd.T)((0, gd.x)((0, gd.db)(kd)))
            }
          } catch (Jd) {
            throw new Error(`${dd} could not be streamed into a compile: ${(0,Zd.e)(Jd)}`)
          }
        }(dd),
        {
          enqueue: Qd,
          close: Ld,
          error: Od
        } = bd,
        ed = dd => {
          try {
            Md(Od, od, [dd])
          } catch {}
        };
      let Rd = 0;
      const Id = (kd, pd) => {
        if (Rd + pd > Jd) throw new Error(`${dd} decoded past its module's ${Jd} bytes`);
        Md(gd.Y, new gd.k(Kd), [new gd.k(kd), Rd]);
        try {
          Md(Qd, od, [new gd.k(Kd, Rd, pd)])
        } catch {}
        Rd += pd
      };
      let Gd, vd;
      try {
        Gd = new sd(dd, Jd, Id, pd, Cd)
      } catch (ad) {
        throw ed(ad), ad
      }
      const xd = dd => {
        Gd.fail(dd), void 0 !== vd && Xd(vd)
      };
      let qd = !1;
      kd.addEventListener("abort", (() => {
        qd && Gd.markWorkerFailed(), xd(new Error(`${dd} stalled`))
      }), {
        once: !0
      }), (0, Nd.s)(ld, (() => {}), xd);
      try {
        let Pd;
        try {
          Pd = await fetch(dd, {
            signal: kd
          })
        } catch (ad) {
          throw new Error(`Fetching ${dd} failed: ${(0,Zd.e)(ad)}`)
        }
        const {
          ok: Cd,
          status: Kd,
          body: od
        } = function(dd, Jd) {
          try {
            const {
              ok: dd,
              status: kd
            } = Jd;
            return {
              ok: dd,
              status: kd,
              body: Md(gd.V, Jd, [])
            }
          } catch {
            throw new Error(`${dd} came in a response a page script made`)
          }
        }(dd, Pd);
        if (!Cd) throw new Error(`Fetching ${dd} failed: HTTP ${Kd}`);
        pd();
        const ld = Md(gd.K, od, []);
        vd = ld;
        const Qd = () => {
          Xd(ld)
        };
        for ((0, Nd.s)(Gd.decoded, Qd, Qd);;) {
          let Jd;
          try {
            Jd = await Md(gd.U, ld, [])
          } catch (ad) {
            throw new Error(`Downloading ${dd} failed: ${(0,Zd.e)(ad)}`)
          }
          if (Jd.done) break;
          pd(), Gd.push(Jd.value)
        }
        if (qd = !0, Gd.end(), await Gd.decoded, Wd(), Rd !== Jd) throw new Error(`${dd} ended before its module did`)
      } catch (ad) {
        throw ed(ad), xd(ad), ad
      }
      Gd.terminate();
      try {
        Md(Ld, od, [])
      } catch {}
      const Bd = await ld;
      return void 0 !== Pd && await (0, gd.v)(dd, new gd.k(Kd), {
        sha256: Pd.sha256,
        onMismatch: () => {}
      }), Bd
    }

    function Xd(dd) {
      try {
        (0, gd.T)(dd.cancel())
      } catch {}
    }
    const fd = ".zst.bin",
      nd = 1e3;
    let Ud = null;

    function yd(dd) {
      return Ud ??= function() {
        const dd = new Map,
          Jd = "bloxd_wasm_webgpu:5005524,bloxd_wasm_webgl:5369180,bloxd_wasm_webgl1:4769475,bloxd_wasm_workers:196044,bloxd_wasm_models:311680,bloxd_wasm_client:3671383";
        for (const kd of Jd?.split(",") ?? []) {
          const [Jd = "", pd] = kd.split(":"), Nd = Number(pd);
          Number.isInteger(Nd) && Nd > 0 && dd.set(Jd, Nd)
        }
        return dd
      }(), Ud.get(dd)
    }
    async function Dd(dd, Jd) {
      let kd = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
      const pd = yd(dd.name);
      if (void 0 === pd) return Td(await Ed(dd, Jd, kd), "cold-wasm");
      const Wd = Sd ? new Bd : null;
      let Pd;
      try {
        if (Cd = dd.url(), ld()?.includes(od(Cd)) && await async function(dd) {
            const Jd = new AbortController;
            let kd;
            const pd = (0, Nd.h)((dd => {
              kd = setTimeout((() => {
                Jd.abort(), dd(null)
              }), nd)
            }));
            try {
              const kd = fetch(dd.href, {
                  cache: "only-if-cached",
                  mode: "same-origin",
                  signal: Jd.signal
                }),
                Wd = await (0, Nd.r)([kd, pd]);
              return !!Wd?.ok && ((0, gd.T)(Wd.body.cancel()), !0)
            } catch {
              return !1
            } finally {
              clearTimeout(kd)
            }
          }(dd.url())) return Wd?.stop(), await async function(dd, Jd, kd, pd) {
          let Nd = !1;
          const Wd = kd && {
            sha256: kd.sha256,
            onMismatch: () => {
              Nd = !0
            }
          };
          try {
            return Td(await Ed(dd, Wd, pd), "warm")
          } catch (Pd) {
            const pd = await cd(dd, Jd, kd, null);
            if (null === pd) throw Nd && kd.onMismatch(), Pd;
            return console.warn(`${dd.url().href} from the HTTP cache failed: ${(0,Zd.e)(Pd)}: loaded its copy instead`), Td(pd, Nd ? "warm-refused" : "warm-broken")
          }
        }(dd, pd, Jd, kd);
        Pd = await cd(dd, pd, Jd, Wd)
      } finally {
        Wd?.stop()
      }
      var Cd;
      return null !== Pd ? Td(Pd, "cold-worker") : Td(await Ed(dd, Jd, kd), "cold-wasm")
    }

    function Td(dd, Jd) {
      return {
        __proto__: null,
        module: dd,
        path: Jd
      }
    }

    function Ed(dd, Jd, kd) {
      return void 0 === yd(dd.name) ? (0, gd.B)(dd.url(), Jd, kd) : (0, gd.B)(dd.url(), Jd, {
        ...kd,
        hideThen: !0,
        onDownloaded: () => {
          ! function(dd) {
            const Jd = ld();
            if (null === Jd) return;
            const kd = od(dd),
              pd = Jd.filter((dd => dd !== kd));
            pd.push(kd);
            try {
              localStorage.setItem(Cd, JSON.stringify(pd.slice(-Kd)))
            } catch (Nd) {
              console.warn(`Bloxd wasm: ${kd} could not be recorded as downloaded: a later join asks the HTTP cache nothing for it`, Nd)
            }
          }(dd.url()), kd.onDownloaded?.()
        }
      })
    }
    async function cd(dd, Jd, kd, pd) {
      if (!Sd || !qd()) return null;
      const Nd = dd.url(),
        Wd = `${Nd.href}${fd}`;
      try {
        return await (0, gd.$)(Wd, ((dd, Nd, Pd) => jd(Wd, Jd, dd, Nd, Pd, kd, pd)))
      } catch (Pd) {
        return console.warn(`${(0,Zd.e)(Pd)}: loading ${Nd.href} instead`), null
      }
    }
    let hd = null,
      rd = !1;
    const ud = new Map,
      td = new Map;

    function Vd(dd, Jd, kd) {
      return null === hd ? hd = Hd(dd, Jd) : dd !== hd.build ? console.warn(`Bloxd wasm: ${dd.name} was asked for after ${hd.build.name} started loading, which this thread keeps`) : Jd.name !== hd.workers.name && console.warn(`Bloxd wasm: ${Jd.name} was asked for workers after ${hd.workers.name}, which this thread keeps`), kd?.reloadFailedDownload && !rd && (0, pd.U)() && (rd = !0, hd = Hd(hd.build, hd.workers)), hd.loaded
    }

    function zd(dd, Jd) {
      if (null !== hd) return (0, Nd.e)([]);
      const kd = dd.filter((dd => !ud.has(dd.name))).map((dd => {
        const kd = new AbortController,
          pd = {
            compiled: Ed(dd, (0, Wd.e)(dd.name), {
              priority: Jd,
              CJ: kd.signal,
              onDownloaded: () => {
                pd.downloaded = !0
              },
              retries: {
                onRetry: () => {
                  pd.downloaded = !1, null !== hd && kd.abort()
                }
              }
            }),
            cancel: kd,
            downloaded: !1
          };
        return ud.set(dd.name, pd), (0, Nd.h)((Jd => {
          (0, Nd.s)(pd.compiled, (() => {
            pd.downloaded = !0, Jd()
          }), (pd => {
            kd.signal.aborted || console.warn(`Bloxd wasm: ${dd.name}'s compile ahead of the load failed: the load compiles it afresh`, pd), Jd()
          }))
        }))
      }));
      return (0, Nd.e)(kd)
    }

    function Hd(dd, Jd) {
      const kd = (0, pd.F)((async () => {
        (0, Pd.H)(), td.clear();
        const kd = Ad(dd),
          pd = Jd.name === dd.name ? kd : Ad(Jd);
        for (const {
            cancel: dd
          }
          of ud.values()) dd.abort();
        ud.clear(), await (0, Nd.e)([kd, pd]);
        const Wd = await kd,
          Zd = await pd;
        return (0, Pd.H)(), {
          module: Wd,
          workerModule: Zd
        }
      }), dd);
      return {
        build: dd,
        workers: Jd,
        loaded: kd
      }
    }

    function wd(dd) {
      return td.get(dd)
    }

    function Ad(dd) {
      const Jd = performance.now(),
        kd = ud.get(dd.name);
      ud.delete(dd.name);
      const pd = !0 === kd?.downloaded ? kd : void 0;
      return void 0 !== kd && void 0 === pd && kd.cancel.abort(), (0, Nd.h)(((kd, Wd) => {
        const Pd = (pd, Nd) => {
            td.set(dd.name, {
              path: Nd,
              ms: performance.now() - Jd
            }), kd(pd)
          },
          Zd = () => {
            (0, Nd.s)(JJ(dd), (dd => {
              let {
                module: Jd,
                path: kd
              } = dd;
              Pd(Jd, kd)
            }), Wd)
          };
        void 0 === pd ? Zd() : (0, Nd.s)(pd.compiled, (dd => {
          Pd(dd, "ahead")
        }), Zd)
      }))
    }
    async function dJ(dd, Jd) {
      const {
        module: kd
      } = await JJ(dd, {
        retries: Jd
      });
      return kd
    }
    async function JJ(dd) {
      let Jd = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
      return await Dd(dd, (0, Wd.e)(dd.name), Jd)
    }
  },
  6483: (dd, Jd, kd) => {
    kd.d(Jd, {
      e: () => Pd
    });
    var pd = kd(2770);
    const Nd = {
      bloxd_wasm: () => "67c6401d5811eb7b9cff2814a29f966a9dd1ab923e175fa19497af26b4502816",
      bloxd_wasm_client: () => "6258b24df63176123d93f549bb48f56da442317b3a5ee1b22458e2637caf578d",
      bloxd_wasm_workers: () => "be7c28fa29cbecc24e19062f2c6bc0a5894a203c3dda65452eccc860e930d821",
      bloxd_wasm_models: () => "6bdd581d4d0becff3e95b66a27a1a5da4e04f924bcd5bc0dd36e885168896016",
      bloxd_wasm_webgpu: () => "7696327997962eac9535a5b8094b153b4298d06883723f642562040590146af1",
      bloxd_wasm_webgl: () => "8873dc66cf374a905034792d179a1bc9e3d8a0d5138b511825a78d7a954240d0",
      bloxd_wasm_webgl1: () => "8397ed5ce5c8ac7579e7003101c4f8c9a1ce8368296cd2e41ac9a9b90beb7a65",
      bloxd_wasm_replay: () => "d71b023241834dbfc2db6804be33469db924450506350004c541b0b754121656",
      bloxd_wasm_recorder: () => "f2e9b9c8ae12c235b86b64a44b272450d96f214d5d6982878bbf330e3339f352",
      bloxd_wasm_anim: () => "3c8d34a5af00d244cdef6e97addab208455d3fad6df89d6004ea567630021fe8",
      bloxd_wasm_textures: () => "dfcd6892e79c79af74dba72d92f489620c1624d3bfcd825b670886933b48749c",
      bloxd_wasm_shader_pack: () => "ca7501d2ff0cccb80272a18641201d2ce4e4b1e9ec5a5ceca284d9a4fa45907f"
    };
    var Wd = kd(4563);

    function Pd(dd) {
      const Jd = Object.prototype.hasOwnProperty.call(Nd, dd) ? Nd[dd]() : void 0;
      if (void 0 !== Jd) return {
        sha256: Jd,
        onMismatch: Wd.G
      };
      throw new pd.f(`${dd} has no release digest, so this build refuses it`)
    }
  },
  36448: (dd, Jd, kd) => {
    kd.d(Jd, {
      c: () => pd,
      f: () => Wd,
      g: () => gd,
      h: () => Pd,
      k: () => Nd
    });
    const pd = /^alloc_failed (\d+) bytes$/;

    function Nd(dd, Jd) {
      return Wd(dd, Jd) ? `trap=alloc_failed ${Jd} bytes` : `trap=${dd}`
    }

    function Wd(dd, Jd) {
      return "unreachable" === dd && Jd > 0
    }

    function Pd(dd, Jd, kd) {
      const pd = function(dd) {
        return dd instanceof WebAssembly.RuntimeError ? /unreachable/i.test(dd.message) ? "unreachable" : /out of bounds/i.test(dd.message) ? "out_of_bounds" : "runtime_error" : (dd instanceof RangeError || dd instanceof Error && "InternalError" === dd.name) && /call stack|recursion/i.test(dd.message) ? "stack_overflow" : "js_error"
      }(dd);
      if ("unreachable" !== pd) return {
        kind: pd,
        panic: null,
        refusedBytes: 0
      };
      const Nd = Jd(),
        Wd = kd();
      return {
        kind: pd,
        panic: Wd > 0 ? null : Nd,
        refusedBytes: Wd
      }
    }
    const Zd = 300;

    function gd(dd) {
      return dd.replace(/\s*\n\s*/g, " / ").slice(0, Zd)
    }
  }
};
Object.freeze(modules);
for (const dd in modules) Object.freeze(modules[dd]);