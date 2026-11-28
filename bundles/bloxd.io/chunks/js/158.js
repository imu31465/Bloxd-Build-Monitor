export const id = 158;
export const ids = [158];
export const modules = {
  37659: (dd, Od, md) => {
    md.d(Od, {
      b: () => Kd,
      e: () => vd,
      f: () => Xd,
      h: () => td
    });
    var Wd = md(37644),
      Fd = md(15);
    const Rd = /wasm-function\[\d+\]|wasm:\/\/|\[wasm code\]/;

    function Xd(dd) {
      if (dd instanceof WebAssembly.RuntimeError) return !0;
      const Od = dd instanceof Error ? dd.stack : void 0;
      return "string" === typeof Od && Rd.test(Od)
    }

    function Kd(dd, Od, md) {
      var Fd;
      const Xd = dd instanceof Error ? dd.name : "thrown",
        Kd = (dd instanceof Error && null !== (Fd = dd.stack) && void 0 !== Fd ? Fd : "").split("\n").filter((dd => Rd.test(dd))).slice(0, 8).map((dd => dd.trim())),
        hd = null === Od ? "wasm memory unknown" : `wasm memory ${Math.round(Od/2**20)} MB`,
        vd = null === md.panic ? "" : `, panic: ${(0,Wd.l)(md.panic)}`,
        Qd = `${Xd}: ${dd instanceof Error?dd.message:String(dd)}`;
      return `${(0,Wd.q)(md.kind,md.refusedBytes)} ${Qd} (${hd})${vd}${Kd.length>0?` | ${Kd.join(" < ")}`:""}`
    }
    const hd = /on a detached ArrayBuffer|access detached ArrayBuffer|has been detached from the view/;

    function vd(dd) {
      var Od;
      let md = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ArrayBuffer.prototype;
      if (!(dd instanceof Error) || !hd.test(dd.message)) return {};
      if (!("detached" in md)) return {
        arrayBufferDetached: "absent"
      };
      return {
        arrayBufferDetached: (0, Fd.K)(null === (Od = (0, Fd.C)(md, "detached")) || void 0 === Od ? void 0 : Od.get, /^function (get )?detached\(\) \{\s*\[native code\]\s*\}$/) ? "native" : "script"
      }
    }
    const Qd = 500;

    function td(dd) {
      let Od = "[object Object]";
      try {
        Od = String(dd)
      } catch {}
      if ("[object Object]" !== Od) return Od;
      try {
        var md, Wd;
        return null !== (md = null === (Wd = JSON.stringify(dd)) || void 0 === Wd ? void 0 : Wd.slice(0, Qd)) && void 0 !== md ? md : Od
      } catch {
        return Od
      }
    }
  },
  37688: (dd, Od, md) => {
    md.d(Od, {
      b: () => OO,
      e: () => RO,
      g: () => fd,
      j: () => WO,
      l: () => Md,
      n: () => dO
    });
    var Wd = md(2421),
      Fd = md(2433),
      Rd = md(7573),
      Xd = md(5426),
      Kd = md(2428),
      hd = md(2425);
    const vd = "bloxd-wasmDownloaded",
      Qd = 12;

    function td(dd) {
      return dd.pathname.slice(dd.pathname.lastIndexOf("/") + 1)
    }

    function od() {
      try {
        if ("undefined" === typeof localStorage) return null;
        const dd = JSON.parse(localStorage.getItem(vd) ?? "[]");
        return Array.isArray(dd) ? dd.filter((dd => "string" === typeof dd)) : []
      } catch (dd) {
        return console.warn("Bloxd wasm: the record of downloaded modules could not be read: asking the HTTP cache for none", dd), null
      }
    }
    const Nd = Reflect.apply,
      qd = "undefined" === typeof Worker ? void 0 : Worker,
      Hd = qd?.prototype.postMessage,
      yd = qd?.prototype.terminate,
      bd = "undefined" === typeof EventTarget ? void 0 : EventTarget.prototype.addEventListener,
      Td = "undefined" === typeof MessageEvent ? void 0 : Object.getOwnPropertyDescriptor(MessageEvent.prototype, "data")?.get,
      pd = Object.getOwnPropertyDescriptor(Object.getPrototypeOf(Uint8Array.prototype), "buffer").get,
      Yd = function() {
        try {
          return (0, Xd.i)(qd, "Worker", !0) && (0, Xd.i)(Hd, "postMessage") && (0, Xd.i)(yd, "terminate") && (0, Xd.i)(pd, "buffer") && void 0 !== bd && void 0 !== Td
        } catch {
          return !1
        }
      }();
    let gd = !1;

    function wd() {
      return Yd && !gd
    }
    class Ed {
      worker = null;
      failed = !1;
      constructor() {
        if (wd()) try {
          this.worker = Ud(), Nd(bd, this.worker, ["error", () => {
            this.failed = !0
          }])
        } catch {
          this.stop()
        }
      }
      take() {
        const dd = this.worker;
        if (this.worker = null, null !== dd && this.failed) throw Nd(yd, dd, []), new Error("it did not run");
        return dd
      }
      stop() {
        const dd = this.worker;
        this.worker = null, null !== dd && Nd(yd, dd, [])
      }
    }
    class Jd {
      decoded;
      worker;
      reject;
      constructor(dd, Od, md, Wd, Rd) {
        try {
          this.worker = Rd?.take() ?? Ud()
        } catch (vd) {
          throw gd = !0, new Error(`The zstd decoder's worker did not start: ${(0,Kd.i)(vd)}`)
        }
        const Xd = this.worker;
        this.decoded = (0, Fd.j)(((Od, Fd) => {
          this.reject = Fd;
          const Rd = (dd, Od) => {
            Nd(bd, Xd, [dd, Od])
          };
          Rd("message", (dd => {
            Wd();
            try {
              const Wd = Nd(Td, dd, []);
              if (!0 === Wd) Od();
              else {
                if ("string" === typeof Wd) throw Wd.startsWith(Kd.e) && (gd = !0), new Error(Wd);
                md(Wd, Nd(hd.u, Wd, []))
              }
            } catch (vd) {
              Fd(vd)
            }
          })), Rd("error", (() => {
            gd = !0, Fd(new Error("The zstd decoder's worker did not run"))
          })), Rd("messageerror", (() => {
            Fd(new Error(`${dd}'s decoder sent a piece that could not be read`))
          }))
        })), (0, hd.T)(this.decoded), Nd(Hd, Xd, [
          [dd, Od]
        ])
      }
      push(dd) {
        Nd(Hd, this.worker, [dd, [Nd(pd, dd, [])]])
      }
      end() {
        Nd(Hd, this.worker, [null])
      }
      markWorkerFailed() {
        gd = !0
      }
      fail(dd) {
        this.reject(dd), this.terminate()
      }
      terminate() {
        Nd(yd, this.worker, [])
      }
    }

    function Ud() {
      if (globalThis.Worker !== qd) throw new Error("Worker is not the one the page loaded with");
      return new Worker(new URL(md.p + md.u(80), md.b), {
        name: "wasmZstdDecoder",
        type: "module"
      })
    }
    const xd = Reflect.apply,
      Bd = ArrayBuffer,
      Sd = "undefined" === typeof Response ? void 0 : Response,
      sd = "undefined" === typeof ReadableStream ? void 0 : ReadableStream,
      ud = function() {
        let dd;
        void 0 !== sd && new sd({
          __proto__: null,
          start(Od) {
            const {
              enqueue: md,
              close: Wd,
              error: Fd
            } = Object.getPrototypeOf(Od);
            dd = {
              enqueue: md,
              close: Wd,
              error: Fd
            }
          }
        }, {
          __proto__: null
        });
        return dd
      }(),
      Vd = function() {
        try {
          return "undefined" !== typeof WebAssembly && "function" === typeof WebAssembly.compileStreaming && void 0 !== ud && (0, Xd.i)(Sd, "Response", !0) && (0, Xd.i)(sd, "ReadableStream", !0) && (0, Xd.i)(ud.enqueue, "enqueue") && (0, Xd.i)(ud.close, "close") && (0, Xd.i)(ud.error, "error") && (0, Xd.i)(hd.Y, "body") && (0, Xd.i)(hd.M, "getReader") && (0, Xd.i)(hd.V, "read")
        } catch {
          return !1
        }
      }();
    async function Ad(dd, Od, md, Wd, Rd, Xd, vd) {
      const Qd = new Bd(Od),
        {
          controller: td,
          compiled: od
        } = function(dd) {
          try {
            let dd;
            const Od = new sd({
                __proto__: null,
                start(Od) {
                  dd = Od
                }
              }, {
                __proto__: null
              }),
              md = new Sd(Od, {
                __proto__: null,
                headers: {
                  __proto__: null,
                  "Content-Type": "application/wasm"
                }
              });
            return {
              controller: dd,
              compiled: (0, hd.T)((0, hd.z)((0, hd.gb)(md)))
            }
          } catch (Od) {
            throw new Error(`${dd} could not be streamed into a compile: ${(0,Kd.i)(Od)}`)
          }
        }(dd),
        {
          enqueue: Nd,
          close: qd,
          error: Hd
        } = ud,
        yd = dd => {
          try {
            xd(Hd, td, [dd])
          } catch {}
        };
      let bd = 0;
      const Td = (md, Wd) => {
        if (bd + Wd > Od) throw new Error(`${dd} decoded past its module's ${Od} bytes`);
        xd(hd.$, new hd.l(Qd), [new hd.l(md), bd]);
        try {
          xd(Nd, td, [new hd.l(Qd, bd, Wd)])
        } catch {}
        bd += Wd
      };
      let pd, Yd;
      try {
        pd = new Jd(dd, Od, Td, Wd, vd)
      } catch (Ud) {
        throw yd(Ud), Ud
      }
      const gd = dd => {
        pd.fail(dd), void 0 !== Yd && rd(Yd)
      };
      let wd = !1;
      md.addEventListener("abort", (() => {
        wd && pd.markWorkerFailed(), gd(new Error(`${dd} stalled`))
      }), {
        once: !0
      }), (0, Fd.w)(od, (() => {}), gd);
      try {
        let Xd;
        try {
          Xd = await fetch(dd, {
            signal: md
          })
        } catch (Ud) {
          throw new Error(`Fetching ${dd} failed: ${(0,Kd.i)(Ud)}`)
        }
        const {
          ok: vd,
          status: Qd,
          body: td
        } = function(dd, Od) {
          try {
            const {
              ok: dd,
              status: md
            } = Od;
            return {
              ok: dd,
              status: md,
              body: xd(hd.Y, Od, [])
            }
          } catch {
            throw new Error(`${dd} came in a response a page script made`)
          }
        }(dd, Xd);
        if (!vd) throw new Error(`Fetching ${dd} failed: HTTP ${Qd}`);
        Wd();
        const od = xd(hd.M, td, []);
        Yd = od;
        const Nd = () => {
          rd(od)
        };
        for ((0, Fd.w)(pd.decoded, Nd, Nd);;) {
          let Od;
          try {
            Od = await xd(hd.V, od, [])
          } catch (Ud) {
            throw new Error(`Downloading ${dd} failed: ${(0,Kd.i)(Ud)}`)
          }
          if (Od.done) break;
          Wd(), pd.push(Od.value)
        }
        if (wd = !0, pd.end(), await pd.decoded, Rd(), bd !== Od) throw new Error(`${dd} ended before its module did`)
      } catch (Ud) {
        throw yd(Ud), gd(Ud), Ud
      }
      pd.terminate();
      try {
        xd(qd, td, [])
      } catch {}
      const Ed = await od;
      return void 0 !== Xd && await (0, hd.x)(dd, new hd.l(Qd), {
        sha256: Xd.sha256,
        onMismatch: () => {}
      }), Ed
    }

    function rd(dd) {
      try {
        (0, hd.T)(dd.cancel())
      } catch {}
    }
    const Gd = ".zst.bin",
      nd = 1e3;
    let Ld = null;

    function Pd(dd) {
      return Ld ??= function() {
        const dd = new Map,
          Od = "bloxd_wasm_webgpu:5239836,bloxd_wasm_webgl:5663636,bloxd_wasm_webgl1:4934921,bloxd_wasm_workers:203659,bloxd_wasm_models:478723,bloxd_wasm_client:3742267";
        for (const md of Od?.split(",") ?? []) {
          const [Od = "", Wd] = md.split(":"), Fd = Number(Wd);
          Number.isInteger(Fd) && Fd > 0 && dd.set(Od, Fd)
        }
        return dd
      }(), Ld.get(dd)
    }
    async function zd(dd, Od) {
      let md = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
      const Wd = Pd(dd.name);
      if (void 0 === Wd) return cd(await jd(dd, Od, md), "cold-wasm");
      const Rd = Vd ? new Ed : null;
      let Xd;
      try {
        if (vd = dd.url(), od()?.includes(td(vd)) && await async function(dd) {
            const Od = new AbortController;
            let md;
            const Wd = (0, Fd.j)((dd => {
              md = setTimeout((() => {
                Od.abort(), dd(null)
              }), nd)
            }));
            try {
              const md = fetch(dd.href, {
                  cache: "only-if-cached",
                  mode: "same-origin",
                  signal: Od.signal
                }),
                Rd = await (0, Fd.t)([md, Wd]);
              return !!Rd?.ok && ((0, hd.T)(Rd.body.cancel()), !0)
            } catch {
              return !1
            } finally {
              clearTimeout(md)
            }
          }(dd.url())) return Rd?.stop(), await async function(dd, Od, md, Wd) {
          let Fd = !1;
          const Rd = md && {
            sha256: md.sha256,
            onMismatch: () => {
              Fd = !0
            }
          };
          try {
            return cd(await jd(dd, Rd, Wd), "warm")
          } catch (Xd) {
            const Wd = await Dd(dd, Od, md, null);
            if (null === Wd) throw Fd && md.onMismatch(), Xd;
            return console.warn(`${dd.url().href} from the HTTP cache failed: ${(0,Kd.i)(Xd)}: loaded its copy instead`), cd(Wd, Fd ? "warm-refused" : "warm-broken")
          }
        }(dd, Wd, Od, md);
        Xd = await Dd(dd, Wd, Od, Rd)
      } finally {
        Rd?.stop()
      }
      var vd;
      return null !== Xd ? cd(Xd, "cold-worker") : cd(await jd(dd, Od, md), "cold-wasm")
    }

    function cd(dd, Od) {
      return {
        __proto__: null,
        module: dd,
        path: Od
      }
    }

    function jd(dd, Od, md) {
      return void 0 === Pd(dd.name) ? (0, hd.F)(dd.url(), Od, md) : (0, hd.F)(dd.url(), Od, {
        ...md,
        hideThen: !0,
        onDownloaded: () => {
          ! function(dd) {
            const Od = od();
            if (null === Od) return;
            const md = td(dd),
              Wd = Od.filter((dd => dd !== md));
            Wd.push(md);
            try {
              localStorage.setItem(vd, JSON.stringify(Wd.slice(-Qd)))
            } catch (Fd) {
              console.warn(`Bloxd wasm: ${md} could not be recorded as downloaded: a later join asks the HTTP cache nothing for it`, Fd)
            }
          }(dd.url()), md.onDownloaded?.()
        }
      })
    }
    async function Dd(dd, Od, md, Wd) {
      if (!Vd || !wd()) return null;
      const Fd = dd.url(),
        Rd = `${Fd.href}${Gd}`;
      try {
        return await (0, hd.db)(Rd, ((dd, Fd, Xd) => Ad(Rd, Od, dd, Fd, Xd, md, Wd)))
      } catch (Xd) {
        return console.warn(`${(0,Kd.i)(Xd)}: loading ${Fd.href} instead`), null
      }
    }
    let ed = null,
      Id = !1;
    const ld = new Map,
      Cd = new Map;
    let Zd = null;

    function kd(dd) {
      const Od = Od => dd.filter((dd => ld.get(dd)?.state === Od)).length,
        md = Od("compiled");
      return md > 0 && md === dd.length ? "compiled" : md + Od("compiling") > 0 ? "compiling" : "none"
    }

    function fd() {
      return Zd ?? kd([...ld.keys()])
    }

    function Md(dd, Od, md) {
      return null === ed ? ed = mO(dd, Od, md?.memoryMaximumBytes) : dd !== ed.build ? console.warn(`Bloxd wasm: ${dd.name} was asked for after ${ed.build.name} started loading, which this thread keeps`) : Od.name !== ed.workers.name && console.warn(`Bloxd wasm: ${Od.name} was asked for workers after ${ed.workers.name}, which this thread keeps`), md?.reloadFailedDownload && !Id && (0, Wd.eb)() && (Id = !0, ed = mO(ed.build, ed.workers, ed.memoryMaximumBytes)), ed.loaded
    }

    function dO(dd) {
      return null === ed ? (0, Fd.j)((dd => {
        dd(!1)
      })) : ((0, Wd.ab)() && (ed = mO(ed.build, ed.workers, dd ?? ed.memoryMaximumBytes)), ed.loaded)
    }

    function OO(dd, Od) {
      if (null !== ed) return (0, Fd.g)([]);
      const md = dd.filter((dd => !ld.has(dd.name))).map((dd => {
        const md = new AbortController,
          Wd = {
            compiled: jd(dd, (0, Rd.b)(dd.name), {
              priority: Od,
              Ad: md.signal,
              onDownloaded: () => {
                Wd.downloaded = !0
              },
              retries: {
                onRetry: () => {
                  Wd.downloaded = !1, null !== ed && md.abort()
                }
              }
            }),
            cancel: md,
            downloaded: !1,
            state: "compiling"
          };
        return ld.set(dd.name, Wd), (0, Fd.j)((Od => {
          (0, Fd.w)(Wd.compiled, (() => {
            Wd.downloaded = !0, Wd.state = "compiled", Od()
          }), (Fd => {
            Wd.state = "failed", md.signal.aborted || console.warn(`Bloxd wasm: ${dd.name}'s compile ahead of the load failed: the load compiles it afresh`, Fd), Od()
          }))
        }))
      }));
      return (0, Fd.g)(md)
    }

    function mO(dd, Od, md) {
      Zd ??= kd(Od.name === dd.name ? [dd.name] : [dd.name, Od.name]);
      const Rd = (0, Wd.E)((async () => {
        (0, Xd.z)(), Cd.clear();
        const md = FO(dd),
          Wd = Od.name === dd.name ? md : FO(Od);
        for (const {
            cancel: dd
          }
          of ld.values()) dd.abort();
        ld.clear(), await (0, Fd.g)([md, Wd]);
        const Rd = await md,
          Kd = await Wd;
        return (0, Xd.z)(), {
          module: Rd,
          workerModule: Kd
        }
      }), dd, md);
      return {
        build: dd,
        workers: Od,
        memoryMaximumBytes: md,
        loaded: Rd
      }
    }

    function WO(dd) {
      return Cd.get(dd)
    }

    function FO(dd) {
      const Od = performance.now(),
        md = ld.get(dd.name);
      ld.delete(dd.name);
      const Wd = !0 === md?.downloaded ? md : void 0;
      return void 0 !== md && void 0 === Wd && md.cancel.abort(), (0, Fd.j)(((md, Rd) => {
        const Xd = (Wd, Fd) => {
            Cd.set(dd.name, {
              path: Fd,
              ms: performance.now() - Od
            }), md(Wd)
          },
          Kd = () => {
            (0, Fd.w)(XO(dd), (dd => {
              let {
                module: Od,
                path: md
              } = dd;
              Xd(Od, md)
            }), Rd)
          };
        void 0 === Wd ? Kd() : (0, Fd.w)(Wd.compiled, (dd => {
          Xd(dd, "ahead")
        }), Kd)
      }))
    }
    async function RO(dd, Od) {
      const {
        module: md
      } = await XO(dd, {
        retries: Od
      });
      return md
    }
    async function XO(dd) {
      let Od = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
      return await zd(dd, (0, Rd.b)(dd.name), Od)
    }
  },
  7573: (dd, Od, md) => {
    md.d(Od, {
      b: () => Xd
    });
    var Wd = md(2425);
    const Fd = {
      bloxd_wasm: () => "39543e4ba6a42e25a6e9bcb2e34f530578c4ebc01c5184958515a8ca76d6b0a5",
      bloxd_wasm_client: () => "b20a5dcdeba23853bd4aefb57c26d920dc0384ea18796517bc3a29925c6ad1c2",
      bloxd_wasm_workers: () => "fffff5148e36b0bbe9b1ac57b88354ed0a2be82b12546b685c54f8d890ba1c25",
      bloxd_wasm_models: () => "fea8372a66374bbfe5d995df968eb0d6e1d729788522378129be977ab279b0f5",
      bloxd_wasm_webgpu: () => "d81a74bd0196aa7197896faff29d91d6cd561d3ccf553f86e40533cf05f94d54",
      bloxd_wasm_webgl: () => "c6b230e8190fad497320f1c2b3194c840fc84e84d2930037ce26bc2f7ffa73df",
      bloxd_wasm_webgl1: () => "53a0d02bf121cebe98d2e57ee9aff001fef877975331d07c3144e6a509444da7",
      bloxd_wasm_replay: () => "6fdc64e1f63d992be19559282023d659e1e193da38e2253f4b228bb2cf163a79",
      bloxd_wasm_recorder: () => "6c20921e31a8867aca13baae406b57fd8365b0ce30ef2ea114524fe3b407a11b",
      bloxd_wasm_anim: () => "40ced071a7948ecc9a2ebcc6399db3dd2db0b6c806b64d60ae581d410556b61e",
      bloxd_wasm_textures: () => "7d3511b9add4c1e220dc305c472d29d9de6a5e5dc0d699b160381f10cb169ea5",
      bloxd_wasm_shader_pack: () => "c6afc4ff72171aa4edf7f5ee6a093af43505cb0aad9dabc79f64bdf94eadada3"
    };
    var Rd = md(5426);

    function Xd(dd) {
      const Od = Object.prototype.hasOwnProperty.call(Fd, dd) ? Fd[dd]() : void 0;
      if (void 0 !== Od) return {
        sha256: Od,
        onMismatch: Rd.v
      };
      throw new Wd.h(`${dd} has no release digest, so this build refuses it`)
    }
  },
  37644: (dd, Od, md) => {
    md.d(Od, {
      e: () => Wd,
      h: () => Rd,
      l: () => hd,
      m: () => Xd,
      q: () => Fd
    });
    const Wd = /^alloc_failed (\d+) bytes$/;

    function Fd(dd, Od) {
      return Rd(dd, Od) ? `trap=alloc_failed ${Od} bytes` : `trap=${dd}`
    }

    function Rd(dd, Od) {
      return "unreachable" === dd && Od > 0
    }

    function Xd(dd, Od, md) {
      const Wd = function(dd) {
        return dd instanceof WebAssembly.RuntimeError ? /unreachable/i.test(dd.message) ? "unreachable" : /out of bounds/i.test(dd.message) ? "out_of_bounds" : "runtime_error" : (dd instanceof RangeError || dd instanceof Error && "InternalError" === dd.name) && /call stack|recursion/i.test(dd.message) ? "stack_overflow" : "js_error"
      }(dd);
      if ("unreachable" !== Wd) return {
        kind: Wd,
        panic: null,
        refusedBytes: 0
      };
      const Fd = Od(),
        Rd = md();
      return {
        kind: Wd,
        panic: Rd > 0 ? null : Fd,
        refusedBytes: Rd
      }
    }
    const Kd = 300;

    function hd(dd) {
      return dd.replace(/\s*\n\s*/g, " / ").slice(0, Kd)
    }
  }
};
Object.freeze(modules);
for (const dd in modules) Object.freeze(modules[dd]);