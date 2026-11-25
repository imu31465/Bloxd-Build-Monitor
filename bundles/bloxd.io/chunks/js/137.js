export const id = 137;
export const ids = [137];
export const modules = {
  36713: (uu, Eu, ju) => {
    ju.d(Eu, {
      e: () => Au,
      i: () => Ru,
      k: () => yu,
      o: () => Hu
    });
    var su = ju(3017),
      Uu = ju(3038),
      Zu = ju(6818),
      Xu = ju(4874),
      lu = ju(3029),
      qu = ju(3020);
    const fu = "bloxd-wasmDownloaded",
      Cu = 12;

    function bu(uu) {
      return uu.pathname.slice(uu.pathname.lastIndexOf("/") + 1)
    }

    function cu() {
      try {
        if ("undefined" === typeof localStorage) return null;
        const uu = JSON.parse(localStorage.getItem(fu) ?? "[]");
        return Array.isArray(uu) ? uu.filter((uu => "string" === typeof uu)) : []
      } catch (uu) {
        return console.warn("Bloxd wasm: the record of downloaded modules could not be read: asking the HTTP cache for none", uu), null
      }
    }
    const Nu = Reflect.apply,
      Ou = "undefined" === typeof Worker ? void 0 : Worker,
      Yu = Ou?.prototype.postMessage,
      hu = Ou?.prototype.terminate,
      Du = "undefined" === typeof EventTarget ? void 0 : EventTarget.prototype.addEventListener,
      gu = "undefined" === typeof MessageEvent ? void 0 : Object.getOwnPropertyDescriptor(MessageEvent.prototype, "data")?.get,
      Mu = Object.getOwnPropertyDescriptor(Object.getPrototypeOf(Uint8Array.prototype), "buffer").get,
      eu = function() {
        try {
          return (0, Xu.m)(Ou, "Worker", !0) && (0, Xu.m)(Yu, "postMessage") && (0, Xu.m)(hu, "terminate") && (0, Xu.m)(Mu, "buffer") && void 0 !== Du && void 0 !== gu
        } catch {
          return !1
        }
      }();
    let Gu = !1;

    function pu() {
      return eu && !Gu
    }
    class wu {
      worker = null;
      failed = !1;
      constructor() {
        if (pu()) try {
          this.worker = du(), Nu(Du, this.worker, ["error", () => {
            this.failed = !0
          }])
        } catch {
          this.stop()
        }
      }
      take() {
        const uu = this.worker;
        if (this.worker = null, null !== uu && this.failed) throw Nu(hu, uu, []), new Error("it did not run");
        return uu
      }
      stop() {
        const uu = this.worker;
        this.worker = null, null !== uu && Nu(hu, uu, [])
      }
    }
    class Ju {
      decoded;
      worker;
      reject;
      constructor(uu, Eu, ju, su, Zu) {
        try {
          this.worker = Zu?.take() ?? du()
        } catch (fu) {
          throw Gu = !0, new Error(`The zstd decoder's worker did not start: ${(0,lu.d)(fu)}`)
        }
        const Xu = this.worker;
        this.decoded = (0, Uu.i)(((Eu, Uu) => {
          this.reject = Uu;
          const Zu = (uu, Eu) => {
            Nu(Du, Xu, [uu, Eu])
          };
          Zu("message", (uu => {
            su();
            try {
              const su = Nu(gu, uu, []);
              if (!0 === su) Eu();
              else {
                if ("string" === typeof su) throw su.startsWith(lu.c) && (Gu = !0), new Error(su);
                ju(su, Nu(qu.A, su, []))
              }
            } catch (fu) {
              Uu(fu)
            }
          })), Zu("error", (() => {
            Gu = !0, Uu(new Error("The zstd decoder's worker did not run"))
          })), Zu("messageerror", (() => {
            Uu(new Error(`${uu}'s decoder sent a piece that could not be read`))
          }))
        })), (0, qu.Y)(this.decoded), Nu(Yu, Xu, [
          [uu, Eu]
        ])
      }
      push(uu) {
        Nu(Yu, this.worker, [uu, [Nu(Mu, uu, [])]])
      }
      end() {
        Nu(Yu, this.worker, [null])
      }
      markWorkerFailed() {
        Gu = !0
      }
      fail(uu) {
        this.reject(uu), this.terminate()
      }
      terminate() {
        Nu(hu, this.worker, [])
      }
    }

    function du() {
      if (globalThis.Worker !== Ou) throw new Error("Worker is not the one the page loaded with");
      return new Worker(new URL(ju.p + ju.u(68), ju.b), {
        name: "wasmZstdDecoder",
        type: "module"
      })
    }
    const au = Reflect.apply,
      Pu = ArrayBuffer,
      ou = "undefined" === typeof Response ? void 0 : Response,
      ku = "undefined" === typeof ReadableStream ? void 0 : ReadableStream,
      mu = function() {
        let uu;
        void 0 !== ku && new ku({
          __proto__: null,
          start(Eu) {
            const {
              enqueue: ju,
              close: su,
              error: Uu
            } = Object.getPrototypeOf(Eu);
            uu = {
              enqueue: ju,
              close: su,
              error: Uu
            }
          }
        }, {
          __proto__: null
        });
        return uu
      }(),
      vu = function() {
        try {
          return "undefined" !== typeof WebAssembly && "function" === typeof WebAssembly.compileStreaming && void 0 !== mu && (0, Xu.m)(ou, "Response", !0) && (0, Xu.m)(ku, "ReadableStream", !0) && (0, Xu.m)(mu.enqueue, "enqueue") && (0, Xu.m)(mu.close, "close") && (0, Xu.m)(mu.error, "error") && (0, Xu.m)(qu.$, "body") && (0, Xu.m)(qu.P, "getReader") && (0, Xu.m)(qu._, "read")
        } catch {
          return !1
        }
      }();
    async function Ku(uu, Eu, ju, su, Zu, Xu, fu) {
      const Cu = new Pu(Eu),
        {
          controller: bu,
          compiled: cu
        } = function(uu) {
          try {
            let uu;
            const Eu = new ku({
                __proto__: null,
                start(Eu) {
                  uu = Eu
                }
              }, {
                __proto__: null
              }),
              ju = new ou(Eu, {
                __proto__: null,
                headers: {
                  __proto__: null,
                  "Content-Type": "application/wasm"
                }
              });
            return {
              controller: uu,
              compiled: (0, qu.Y)((0, qu.D)((0, qu.gb)(ju)))
            }
          } catch (Eu) {
            throw new Error(`${uu} could not be streamed into a compile: ${(0,lu.d)(Eu)}`)
          }
        }(uu),
        {
          enqueue: Nu,
          close: Ou,
          error: Yu
        } = mu,
        hu = uu => {
          try {
            au(Yu, bu, [uu])
          } catch {}
        };
      let Du = 0;
      const gu = (ju, su) => {
        if (Du + su > Eu) throw new Error(`${uu} decoded past its module's ${Eu} bytes`);
        au(qu.cb, new qu.o(Cu), [new qu.o(ju), Du]);
        try {
          au(Nu, bu, [new qu.o(Cu, Du, su)])
        } catch {}
        Du += su
      };
      let Mu, eu;
      try {
        Mu = new Ju(uu, Eu, gu, su, fu)
      } catch (du) {
        throw hu(du), du
      }
      const Gu = uu => {
        Mu.fail(uu), void 0 !== eu && Vu(eu)
      };
      let pu = !1;
      ju.addEventListener("abort", (() => {
        pu && Mu.markWorkerFailed(), Gu(new Error(`${uu} stalled`))
      }), {
        once: !0
      }), (0, Uu.s)(cu, (() => {}), Gu);
      try {
        let Xu;
        try {
          Xu = await fetch(uu, {
            signal: ju
          })
        } catch (du) {
          throw new Error(`Fetching ${uu} failed: ${(0,lu.d)(du)}`)
        }
        const {
          ok: fu,
          status: Cu,
          body: bu
        } = function(uu, Eu) {
          try {
            const {
              ok: uu,
              status: ju
            } = Eu;
            return {
              ok: uu,
              status: ju,
              body: au(qu.$, Eu, [])
            }
          } catch {
            throw new Error(`${uu} came in a response a page script made`)
          }
        }(uu, Xu);
        if (!fu) throw new Error(`Fetching ${uu} failed: HTTP ${Cu}`);
        su();
        const cu = au(qu.P, bu, []);
        eu = cu;
        const Nu = () => {
          Vu(cu)
        };
        for ((0, Uu.s)(Mu.decoded, Nu, Nu);;) {
          let Eu;
          try {
            Eu = await au(qu._, cu, [])
          } catch (du) {
            throw new Error(`Downloading ${uu} failed: ${(0,lu.d)(du)}`)
          }
          if (Eu.done) break;
          su(), Mu.push(Eu.value)
        }
        if (pu = !0, Mu.end(), await Mu.decoded, Zu(), Du !== Eu) throw new Error(`${uu} ended before its module did`)
      } catch (du) {
        throw hu(du), Gu(du), du
      }
      Mu.terminate();
      try {
        au(Ou, bu, [])
      } catch {}
      const wu = await cu;
      return void 0 !== Xu && await (0, qu.C)(uu, new qu.o(Cu), {
        sha256: Xu.sha256,
        onMismatch: () => {}
      }), wu
    }

    function Vu(uu) {
      try {
        (0, qu.Y)(uu.cancel())
      } catch {}
    }
    const ru = ".zst.bin",
      Qu = 1e3;
    let iu = null;

    function Wu(uu) {
      return iu ??= function() {
        const uu = new Map,
          Eu = "bloxd_wasm_webgpu:5137010,bloxd_wasm_webgl:5516404,bloxd_wasm_webgl1:4851467,bloxd_wasm_workers:201241,bloxd_wasm_models:311531,bloxd_wasm_client:3712496";
        for (const ju of Eu?.split(",") ?? []) {
          const [Eu = "", su] = ju.split(":"), Uu = Number(su);
          Number.isInteger(Uu) && Uu > 0 && uu.set(Eu, Uu)
        }
        return uu
      }(), iu.get(uu)
    }
    async function Su(uu, Eu) {
      let ju = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
      const su = Wu(uu.name);
      if (void 0 === su) return Iu(await Fu(uu, Eu, ju), "cold-wasm");
      const Zu = vu ? new wu : null;
      let Xu;
      try {
        if (fu = uu.url(), cu()?.includes(bu(fu)) && await async function(uu) {
            const Eu = new AbortController;
            let ju;
            const su = (0, Uu.i)((uu => {
              ju = setTimeout((() => {
                Eu.abort(), uu(null)
              }), Qu)
            }));
            try {
              const ju = fetch(uu.href, {
                  cache: "only-if-cached",
                  mode: "same-origin",
                  signal: Eu.signal
                }),
                Zu = await (0, Uu.o)([ju, su]);
              return !!Zu?.ok && ((0, qu.Y)(Zu.body.cancel()), !0)
            } catch {
              return !1
            } finally {
              clearTimeout(ju)
            }
          }(uu.url())) return Zu?.stop(), await async function(uu, Eu, ju, su) {
          let Uu = !1;
          const Zu = ju && {
            sha256: ju.sha256,
            onMismatch: () => {
              Uu = !0
            }
          };
          try {
            return Iu(await Fu(uu, Zu, su), "warm")
          } catch (Xu) {
            const su = await Bu(uu, Eu, ju, null);
            if (null === su) throw Uu && ju.onMismatch(), Xu;
            return console.warn(`${uu.url().href} from the HTTP cache failed: ${(0,lu.d)(Xu)}: loaded its copy instead`), Iu(su, Uu ? "warm-refused" : "warm-broken")
          }
        }(uu, su, Eu, ju);
        Xu = await Bu(uu, su, Eu, Zu)
      } finally {
        Zu?.stop()
      }
      var fu;
      return null !== Xu ? Iu(Xu, "cold-worker") : Iu(await Fu(uu, Eu, ju), "cold-wasm")
    }

    function Iu(uu, Eu) {
      return {
        __proto__: null,
        module: uu,
        path: Eu
      }
    }

    function Fu(uu, Eu, ju) {
      return void 0 === Wu(uu.name) ? (0, qu.I)(uu.url(), Eu, ju) : (0, qu.I)(uu.url(), Eu, {
        ...ju,
        hideThen: !0,
        onDownloaded: () => {
          ! function(uu) {
            const Eu = cu();
            if (null === Eu) return;
            const ju = bu(uu),
              su = Eu.filter((uu => uu !== ju));
            su.push(ju);
            try {
              localStorage.setItem(fu, JSON.stringify(su.slice(-Cu)))
            } catch (Uu) {
              console.warn(`Bloxd wasm: ${ju} could not be recorded as downloaded: a later join asks the HTTP cache nothing for it`, Uu)
            }
          }(uu.url()), ju.onDownloaded?.()
        }
      })
    }
    async function Bu(uu, Eu, ju, su) {
      if (!vu || !pu()) return null;
      const Uu = uu.url(),
        Zu = `${Uu.href}${ru}`;
      try {
        return await (0, qu.eb)(Zu, ((uu, Uu, Xu) => Ku(Zu, Eu, uu, Uu, Xu, ju, su)))
      } catch (Xu) {
        return console.warn(`${(0,lu.d)(Xu)}: loading ${Uu.href} instead`), null
      }
    }
    let Lu = null,
      tu = !1;
    const xu = new Map,
      Tu = new Map;

    function Hu(uu, Eu, ju) {
      return null === Lu ? Lu = nu(uu, Eu, ju?.memoryMaximumBytes) : uu !== Lu.build ? console.warn(`Bloxd wasm: ${uu.name} was asked for after ${Lu.build.name} started loading, which this thread keeps`) : Eu.name !== Lu.workers.name && console.warn(`Bloxd wasm: ${Eu.name} was asked for workers after ${Lu.workers.name}, which this thread keeps`), ju?.reloadFailedDownload && !tu && (0, su.$)() && (tu = !0, Lu = nu(Lu.build, Lu.workers, Lu.memoryMaximumBytes)), Lu.loaded
    }

    function Au(uu, Eu) {
      if (null !== Lu) return (0, Uu.h)([]);
      const ju = uu.filter((uu => !xu.has(uu.name))).map((uu => {
        const ju = new AbortController,
          su = {
            compiled: Fu(uu, (0, Zu.b)(uu.name), {
              priority: Eu,
              Lj: ju.signal,
              onDownloaded: () => {
                su.downloaded = !0
              },
              retries: {
                onRetry: () => {
                  su.downloaded = !1, null !== Lu && ju.abort()
                }
              }
            }),
            cancel: ju,
            downloaded: !1
          };
        return xu.set(uu.name, su), (0, Uu.i)((Eu => {
          (0, Uu.s)(su.compiled, (() => {
            su.downloaded = !0, Eu()
          }), (su => {
            ju.signal.aborted || console.warn(`Bloxd wasm: ${uu.name}'s compile ahead of the load failed: the load compiles it afresh`, su), Eu()
          }))
        }))
      }));
      return (0, Uu.h)(ju)
    }

    function nu(uu, Eu, ju) {
      const Zu = (0, su.N)((async () => {
        (0, Xu.C)(), Tu.clear();
        const ju = zu(uu),
          su = Eu.name === uu.name ? ju : zu(Eu);
        for (const {
            cancel: uu
          }
          of xu.values()) uu.abort();
        xu.clear(), await (0, Uu.h)([ju, su]);
        const Zu = await ju,
          lu = await su;
        return (0, Xu.C)(), {
          module: Zu,
          workerModule: lu
        }
      }), uu, ju);
      return {
        build: uu,
        workers: Eu,
        memoryMaximumBytes: ju,
        loaded: Zu
      }
    }

    function yu(uu) {
      return Tu.get(uu)
    }

    function zu(uu) {
      const Eu = performance.now(),
        ju = xu.get(uu.name);
      xu.delete(uu.name);
      const su = !0 === ju?.downloaded ? ju : void 0;
      return void 0 !== ju && void 0 === su && ju.cancel.abort(), (0, Uu.i)(((ju, Zu) => {
        const Xu = (su, Uu) => {
            Tu.set(uu.name, {
              path: Uu,
              ms: performance.now() - Eu
            }), ju(su)
          },
          lu = () => {
            (0, Uu.s)(uE(uu), (uu => {
              let {
                module: Eu,
                path: ju
              } = uu;
              Xu(Eu, ju)
            }), Zu)
          };
        void 0 === su ? lu() : (0, Uu.s)(su.compiled, (uu => {
          Xu(uu, "ahead")
        }), lu)
      }))
    }
    async function Ru(uu, Eu) {
      const {
        module: ju
      } = await uE(uu, {
        retries: Eu
      });
      return ju
    }
    async function uE(uu) {
      let Eu = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
      return await Su(uu, (0, Zu.b)(uu.name), Eu)
    }
  },
  6818: (uu, Eu, ju) => {
    ju.d(Eu, {
      b: () => Xu
    });
    var su = ju(3020);
    const Uu = {
      bloxd_wasm: () => "2517ea48b70adb2315dde407aac9f7771c8f8fed4679df16a67d4f64e16c0ca4",
      bloxd_wasm_client: () => "8e3f5c7e0ae9778e8a2bd555c9edea34e1d676dc84c47647f9c7991c78833b4b",
      bloxd_wasm_workers: () => "d314ffb1d191d7f6e9dac1c5f780237cb88fc08431e4e713d1c31afadf5b76c9",
      bloxd_wasm_models: () => "42b4348bfb4c39f2510c78f8a28323e13b143f72ae8226764cf2206b470c6fb3",
      bloxd_wasm_webgpu: () => "c94f0ae845af7c64763dcb834061b20260ad6971d870317f9bca33a9ff0b5ef7",
      bloxd_wasm_webgl: () => "38da11f9eab49b5d8f0185157a6a5ad6178e22840ff20a445e1f5249ac36cd91",
      bloxd_wasm_webgl1: () => "ab1532b525d3a2188fd7631f21987906e6be9fdd62b14c0c03f54625410b4948",
      bloxd_wasm_replay: () => "1c1690d0d143f51a770a1ac88fb427efc12cb7c4ca9f74446ee285cbe1e29b0f",
      bloxd_wasm_recorder: () => "97298cfd514093207f0c3863193df40fc2a4be3f5101bb93ee5a1dc7efa69233",
      bloxd_wasm_anim: () => "b0759d22815334552b8854b47c63eec9a03952d38dd1a922a5af613c34fa435b",
      bloxd_wasm_textures: () => "4f2ee2890c6dcabbc98355370ba732664c4dbb0f4dd616c0ecd33a7f045a54d2",
      bloxd_wasm_shader_pack: () => "920f59d8c3d7cd8bfe52d0c86bce310b93a17cac0f77c75edad8ee229808259a"
    };
    var Zu = ju(4874);

    function Xu(uu) {
      const Eu = Object.prototype.hasOwnProperty.call(Uu, uu) ? Uu[uu]() : void 0;
      if (void 0 !== Eu) return {
        sha256: Eu,
        onMismatch: Zu.B
      };
      throw new su.j(`${uu} has no release digest, so this build refuses it`)
    }
  }
};
Object.freeze(modules);
for (const uu in modules) Object.freeze(modules[uu]);