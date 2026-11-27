export const id = 150;
export const ids = [150];
export const modules = {
  39553: (ee, ie, He) => {
    He.d(ie, {
      d: () => Je,
      e: () => ke,
      f: () => qe,
      i: () => pe,
      j: () => Re,
      k: () => oe,
      m: () => Ke,
      n: () => fe
    });
    var ye = He(330),
      be = He(1728);
    const Me = "A valid external Instance reference no longer exists.";

    function Ke(ee) {
      return ee.includes(Me)
    }
    const Ue = [
        [1e4, "<10s", "lt10s"],
        [6e4, "<1m", "lt1m"],
        [3e5, "<5m", "lt5m"],
        [18e5, "<30m", "lt30m"],
        [1 / 0, "30m+", "ge30m"]
      ],
      Fe = [
        [1e3, "lt1s"],
        [2e3, "lt2s"],
        [5e3, "lt5s"],
        [1e4, "lt10s"],
        [3e4, "lt30s"],
        [1 / 0, "ge30s"]
      ];
    const Je = {
      WebGPU: "WebGPU device lost",
      WebGL2: "WebGL2 context lost"
    };

    function oe(ee, ie) {
      return ee ? "frames_refused" : arguments.length > 2 && void 0 !== arguments[2] && arguments[2] ? "browser_destroyed" : function(ee) {
        var ie;
        const He = null !== (ie = /Device removed reason: (?!S_OK)([A-Z][A-Z0-9_]+)/.exec(ee)) && void 0 !== ie ? ie : /failed with ([A-Z][A-Z0-9_]+)/.exec(ee);
        return He ? He[1] : Ke(ee) ? "gpu_process_lost" : "other"
      }(ie)
    }

    function Re(ee) {
      return `${(null===ee||void 0===ee?void 0:ee.vendor)||"unknown vendor"} ${(null===ee||void 0===ee?void 0:ee.architecture)||"unknown architecture"}`
    }

    function ke(ee) {
      return Xe(ee)[1]
    }

    function qe(ee) {
      return Xe(ee)[2]
    }

    function fe(ee, ie, He) {
      const be = (0, ye.f)(),
        Me = null !== be && be >= ie,
        Ke = document.hidden ? "hidden" : Me ? "shown" : "visible",
        Ue = Me ? He - be : null;
      return {
        page: null === Ue ? Ke : `${Ke}${ke(Ue)}`,
        code: `${ee}_${null===Ue?Ke:`${Ke}_${qe(Ue)}`}_${Te(He)}`
      }
    }

    function Te(ee) {
      if ((0, be.g)()) return "ad_open";
      const ie = (0, be.e)();
      return null === ie ? "ad_none" : `ad_${qe(ee-ie.endedAt)}_${ie.pageHid?"h":"v"}`
    }

    function pe(ee) {
      return ze(Fe, ee)[1]
    }

    function Xe(ee) {
      return ze(Ue, ee)
    }

    function ze(ee, ie) {
      var He;
      return null !== (He = ee.find((ee => {
        let [He] = ee;
        return ie < He
      }))) && void 0 !== He ? He : ee[ee.length - 1]
    }
  },
  39845: (ee, ie, He) => {
    He.d(ie, {
      e: () => Fe
    });
    var ye = He(9669),
      be = He(37286),
      Me = He(39854);
    const Ke = {
        seat: "seat_timeout",
        socket_unopened: "socket_timeout_unopened",
        socket: "socket_timeout"
      },
      Ue = {
        seat: "seat_lost",
        socket_unopened: "socket_unopened",
        socket: "socket_closed"
      };

    function Fe(ee, ie) {
      if (ee instanceof be.d) return {
        at: Ke[ie],
        code: 0
      };
      const He = (0, ye.h)(ee),
        Fe = "number" === typeof He ? He : 0;
      return null !== (0, Me.g)(Fe).name ? {
        at: "refused",
        code: Fe
      } : {
        at: Ue[ie],
        code: Fe
      }
    }
  },
  9669: (ee, ie, He) => {
    He.d(ie, {
      d: () => Me,
      h: () => Ke,
      l: () => Ue,
      n: () => Je,
      o: () => Fe
    });
    var ye = He(186),
      be = He(5018);

    function Me(ee) {
      return Ke(ee) === ye.c.gameOrPluginOnPlayerAuthRejected.code
    }

    function Ke(ee) {
      return "object" === typeof ee && null !== ee ? ee.code : void 0
    }

    function Ue(ee) {
      var ie;
      return null !== (ie = Object.keys(be.e).find((ie => be.e[ie] === ee))) && void 0 !== ie ? ie : null
    }

    function Fe(ee) {
      return "notWhitelisted" === ee ? "customLobby:cantJoinNotWhitelistedTitle" : "customLobby:cantJoinWorld"
    }
    const Je = {
      private: "customLobby:cantJoinPrivate",
      notWhitelisted: "customLobby:cantJoinNotWhitelisted",
      banned: "customLobby:cantJoinBanned",
      adminLocked: "customLobby:cantJoinAdminLocked"
    }
  },
  39854: (ee, ie, He) => {
    He.d(ie, {
      b: () => be,
      d: () => Me,
      e: () => Ue,
      g: () => oe,
      h: () => Fe,
      k: () => Ke
    });
    var ye = He(186);
    const be = 3e3,
      Me = 15e3;

    function Ke(ee) {
      const ie = ee.endsWith(ye.l);
      return {
        text: (ie ? ee.slice(0, -ye.l.length) : ee) || null,
        dropsCache: ie
      }
    }
    const Ue = "Either your internet isn't working or this is a bug.";

    function Fe(ee, ie) {
      const He = oe(ee);
      return null !== He.name && "" === ye.c[He.name].text && null !== ie ? ie : He.reason
    }
    const Je = "You were removed from the game.";

    function oe(ee) {
      var ie;
      let He = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
      const be = null !== (ie = Object.keys(ye.c).find((ie => ye.c[ie].code === ee))) && void 0 !== ie ? ie : null;
      if (null === be) return {
        code: ee,
        name: be,
        reason: null !== He && void 0 !== He ? He : `${Ue}\nCode: ${ee}`,
        canReconnect: !1,
        automaticallyReconnect: !1,
        requiresRefresh: !1
      };
      const {
        text: Me,
        canReconnect: Ke = !1
      } = ye.c[be], Fe = ee === ye.c.outdatedVersion.code || ee === ye.c.loadRecaptchaError.code;
      return {
        code: ee,
        name: be,
        reason: "" !== Me ? Me : null !== He && void 0 !== He ? He : ee === ye.c.gameOrPluginKick.code ? Je : `Code: ${ee}`,
        canReconnect: Ke,
        automaticallyReconnect: ee === ye.c.customGameUpdated.code || ee === ye.c.duplicateLobbyNameError.code,
        requiresRefresh: Fe
      }
    }
  },
  37669: (ee, ie, He) => {
    function ye(ee) {
      return "fetch" === ee || "timeout" === ee || "integrity" === ee ? "download" : "browser"
    }
    He.d(ie, {
      c: () => be,
      g: () => Fe,
      i: () => oe,
      j: () => Ue,
      m: () => Ke,
      o: () => Je,
      s: () => ye,
      u: () => Me
    });
    const be = "https://discord.gg/playbloxd";

    function Me(ee, ie) {
      return "download" === ee ? {
        icon: "wifi",
        title: "wasmScreens:downloadFailedTitle",
        help: "wasmScreens:downloadFailedHelp",
        helpValues: {},
        discordLink: !1,
        confirm: "general:tryAgain",
        cancel: "general:back"
      } : "memory" === ee || "noContext" === ee || "graphicsLost" === ee ? {
        icon: "face-dizzy",
        title: `wasmUnsupported:${ee}Title`,
        help: `wasmUnsupported:${ee}Help${ie?"App":""}`,
        helpValues: {},
        discordLink: !1,
        confirm: "general:tryAgain",
        cancel: "general:back"
      } : {
        icon: "face-dizzy",
        title: ie ? "wasmUnsupported:titleApp" : "wasmUnsupported:title",
        help: ie ? "wasmUnsupported:helpApp" : "wasmUnsupported:" + ("noWebAssembly" === ee ? "noWebAssemblyHelp" : "help"),
        helpValues: {},
        discordLink: !1,
        confirm: "general:ok",
        cancel: null
      }
    }

    function Ke(ee, ie) {
      return {
        ...Me(ee, ie),
        help: ie ? "wasmUnsupported:stillBlockedHelpApp" : `wasmUnsupported:${ee}StillHelp`
      }
    }

    function Ue(ee) {
      return {
        icon: "face-dizzy",
        title: `wasmUnsupported:${ee}Title`,
        help: "wasmScreens:noContextHelp",
        helpValues: {},
        discordLink: !1,
        confirm: "general:tryAgain",
        cancel: "general:back"
      }
    }

    function Fe(ee, ie) {
      return {
        icon: "face-dizzy",
        title: "wasmScreens:crashTitle",
        help: ie ? "wasmScreens:crashHelp" : "wasmScreens:crashHelpNoDiscord",
        helpValues: {
          code: ee.code
        },
        discordLink: ie,
        confirm: "general:reload",
        cancel: "general:back"
      }
    }

    function Je() {
      return {
        icon: "face-dizzy",
        title: "wasmScreens:turnstilePageTitle",
        help: "wasmScreens:turnstilePageHelp",
        helpValues: {},
        discordLink: !1,
        confirm: "general:ok",
        cancel: null
      }
    }

    function oe(ee, ie, He) {
      return {
        icon: "wifi",
        title: "wasmScreens:disconnectedTitle",
        help: He ? "wasmScreens:reconnectingHelp" : "wasmScreens:disconnectedHelp",
        helpValues: {
          reason: ee.reason
        },
        discordLink: null === ee.name,
        confirm: ie ? "general:reconnect" : ee.requiresRefresh ? "general:reload" : "general:ok",
        cancel: null
      }
    }
  },
  37003: (ee, ie, He) => {
    He.d(ie, {
      e: () => Qe,
      g: () => yi,
      i: () => Ne,
      j: () => ii,
      m: () => Ge,
      q: () => re
    });
    var ye = He(3094),
      be = He(3105),
      Me = He(7251),
      Ke = He(5153),
      Ue = He(3103),
      Fe = He(3101);
    const Je = "bloxd-wasmDownloaded",
      oe = 12;

    function Re(ee) {
      return ee.pathname.slice(ee.pathname.lastIndexOf("/") + 1)
    }

    function ke() {
      try {
        if ("undefined" === typeof localStorage) return null;
        const ee = JSON.parse(localStorage.getItem(Je) ?? "[]");
        return Array.isArray(ee) ? ee.filter((ee => "string" === typeof ee)) : []
      } catch (ee) {
        return console.warn("Bloxd wasm: the record of downloaded modules could not be read: asking the HTTP cache for none", ee), null
      }
    }
    const qe = Reflect.apply,
      fe = "undefined" === typeof Worker ? void 0 : Worker,
      Te = fe?.prototype.postMessage,
      pe = fe?.prototype.terminate,
      Xe = "undefined" === typeof EventTarget ? void 0 : EventTarget.prototype.addEventListener,
      ze = "undefined" === typeof MessageEvent ? void 0 : Object.getOwnPropertyDescriptor(MessageEvent.prototype, "data")?.get,
      Be = Object.getOwnPropertyDescriptor(Object.getPrototypeOf(Uint8Array.prototype), "buffer").get,
      Ee = function() {
        try {
          return (0, Ke.l)(fe, "Worker", !0) && (0, Ke.l)(Te, "postMessage") && (0, Ke.l)(pe, "terminate") && (0, Ke.l)(Be, "buffer") && void 0 !== Xe && void 0 !== ze
        } catch {
          return !1
        }
      }();
    let ge = !1;

    function Oe() {
      return Ee && !ge
    }
    class de {
      worker = null;
      failed = !1;
      constructor() {
        if (Oe()) try {
          this.worker = te(), qe(Xe, this.worker, ["error", () => {
            this.failed = !0
          }])
        } catch {
          this.stop()
        }
      }
      take() {
        const ee = this.worker;
        if (this.worker = null, null !== ee && this.failed) throw qe(pe, ee, []), new Error("it did not run");
        return ee
      }
      stop() {
        const ee = this.worker;
        this.worker = null, null !== ee && qe(pe, ee, [])
      }
    }
    class We {
      decoded;
      worker;
      reject;
      constructor(ee, ie, He, ye, Me) {
        try {
          this.worker = Me?.take() ?? te()
        } catch (Je) {
          throw ge = !0, new Error(`The zstd decoder's worker did not start: ${(0,Ue.e)(Je)}`)
        }
        const Ke = this.worker;
        this.decoded = (0, be.h)(((ie, be) => {
          this.reject = be;
          const Me = (ee, ie) => {
            qe(Xe, Ke, [ee, ie])
          };
          Me("message", (ee => {
            ye();
            try {
              const ye = qe(ze, ee, []);
              if (!0 === ye) ie();
              else {
                if ("string" === typeof ye) throw ye.startsWith(Ue.b) && (ge = !0), new Error(ye);
                He(ye, qe(Fe.s, ye, []))
              }
            } catch (Je) {
              be(Je)
            }
          })), Me("error", (() => {
            ge = !0, be(new Error("The zstd decoder's worker did not run"))
          })), Me("messageerror", (() => {
            be(new Error(`${ee}'s decoder sent a piece that could not be read`))
          }))
        })), (0, Fe.U)(this.decoded), qe(Te, Ke, [
          [ee, ie]
        ])
      }
      push(ee) {
        qe(Te, this.worker, [ee, [qe(Be, ee, [])]])
      }
      end() {
        qe(Te, this.worker, [null])
      }
      markWorkerFailed() {
        ge = !0
      }
      fail(ee) {
        this.reject(ee), this.terminate()
      }
      terminate() {
        qe(pe, this.worker, [])
      }
    }

    function te() {
      if (globalThis.Worker !== fe) throw new Error("Worker is not the one the page loaded with");
      return new Worker(new URL(He.p + He.u(79), He.b), {
        name: "wasmZstdDecoder",
        type: "module"
      })
    }
    const Ze = Reflect.apply,
      we = ArrayBuffer,
      De = "undefined" === typeof Response ? void 0 : Response,
      Pe = "undefined" === typeof ReadableStream ? void 0 : ReadableStream,
      Ae = function() {
        let ee;
        void 0 !== Pe && new Pe({
          __proto__: null,
          start(ie) {
            const {
              enqueue: He,
              close: ye,
              error: be
            } = Object.getPrototypeOf(ie);
            ee = {
              enqueue: He,
              close: ye,
              error: be
            }
          }
        }, {
          __proto__: null
        });
        return ee
      }(),
      Ye = function() {
        try {
          return "undefined" !== typeof WebAssembly && "function" === typeof WebAssembly.compileStreaming && void 0 !== Ae && (0, Ke.l)(De, "Response", !0) && (0, Ke.l)(Pe, "ReadableStream", !0) && (0, Ke.l)(Ae.enqueue, "enqueue") && (0, Ke.l)(Ae.close, "close") && (0, Ke.l)(Ae.error, "error") && (0, Ke.l)(Fe.X, "body") && (0, Ke.l)(Fe.K, "getReader") && (0, Ke.l)(Fe.W, "read")
        } catch {
          return !1
        }
      }();
    async function Ve(ee, ie, He, ye, Me, Ke, Je) {
      const oe = new we(ie),
        {
          controller: Re,
          compiled: ke
        } = function(ee) {
          try {
            let ee;
            const ie = new Pe({
                __proto__: null,
                start(ie) {
                  ee = ie
                }
              }, {
                __proto__: null
              }),
              He = new De(ie, {
                __proto__: null,
                headers: {
                  __proto__: null,
                  "Content-Type": "application/wasm"
                }
              });
            return {
              controller: ee,
              compiled: (0, Fe.U)((0, Fe.x)((0, Fe.eb)(He)))
            }
          } catch (ie) {
            throw new Error(`${ee} could not be streamed into a compile: ${(0,Ue.e)(ie)}`)
          }
        }(ee),
        {
          enqueue: qe,
          close: fe,
          error: Te
        } = Ae,
        pe = ee => {
          try {
            Ze(Te, Re, [ee])
          } catch {}
        };
      let Xe = 0;
      const ze = (He, ye) => {
        if (Xe + ye > ie) throw new Error(`${ee} decoded past its module's ${ie} bytes`);
        Ze(Fe.Z, new Fe.l(oe), [new Fe.l(He), Xe]);
        try {
          Ze(qe, Re, [new Fe.l(oe, Xe, ye)])
        } catch {}
        Xe += ye
      };
      let Be, Ee;
      try {
        Be = new We(ee, ie, ze, ye, Je)
      } catch (te) {
        throw pe(te), te
      }
      const ge = ee => {
        Be.fail(ee), void 0 !== Ee && ae(Ee)
      };
      let Oe = !1;
      He.addEventListener("abort", (() => {
        Oe && Be.markWorkerFailed(), ge(new Error(`${ee} stalled`))
      }), {
        once: !0
      }), (0, be.r)(ke, (() => {}), ge);
      try {
        let Ke;
        try {
          Ke = await fetch(ee, {
            signal: He
          })
        } catch (te) {
          throw new Error(`Fetching ${ee} failed: ${(0,Ue.e)(te)}`)
        }
        const {
          ok: Je,
          status: oe,
          body: Re
        } = function(ee, ie) {
          try {
            const {
              ok: ee,
              status: He
            } = ie;
            return {
              ok: ee,
              status: He,
              body: Ze(Fe.X, ie, [])
            }
          } catch {
            throw new Error(`${ee} came in a response a page script made`)
          }
        }(ee, Ke);
        if (!Je) throw new Error(`Fetching ${ee} failed: HTTP ${oe}`);
        ye();
        const ke = Ze(Fe.K, Re, []);
        Ee = ke;
        const qe = () => {
          ae(ke)
        };
        for ((0, be.r)(Be.decoded, qe, qe);;) {
          let ie;
          try {
            ie = await Ze(Fe.W, ke, [])
          } catch (te) {
            throw new Error(`Downloading ${ee} failed: ${(0,Ue.e)(te)}`)
          }
          if (ie.done) break;
          ye(), Be.push(ie.value)
        }
        if (Oe = !0, Be.end(), await Be.decoded, Me(), Xe !== ie) throw new Error(`${ee} ended before its module did`)
      } catch (te) {
        throw pe(te), ge(te), te
      }
      Be.terminate();
      try {
        Ze(fe, Re, [])
      } catch {}
      const de = await ke;
      return void 0 !== Ke && await (0, Fe.t)(ee, new Fe.l(oe), {
        sha256: Ke.sha256,
        onMismatch: () => {}
      }), de
    }

    function ae(ee) {
      try {
        (0, Fe.U)(ee.cancel())
      } catch {}
    }
    const ce = ".zst.bin",
      xe = 1e3;
    let Le = null;

    function Ce(ee) {
      return Le ??= function() {
        const ee = new Map,
          ie = "bloxd_wasm_webgpu:5162719,bloxd_wasm_webgl:5545853,bloxd_wasm_webgl1:4879367,bloxd_wasm_workers:203635,bloxd_wasm_models:478484,bloxd_wasm_client:3732388";
        for (const He of ie?.split(",") ?? []) {
          const [ie = "", ye] = He.split(":"), be = Number(ye);
          Number.isInteger(be) && be > 0 && ee.set(ie, be)
        }
        return ee
      }(), Le.get(ee)
    }
    async function ve(ee, ie) {
      let He = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
      const ye = Ce(ee.name);
      if (void 0 === ye) return ue(await me(ee, ie, He), "cold-wasm");
      const Me = Ye ? new de : null;
      let Ke;
      try {
        if (Je = ee.url(), ke()?.includes(Re(Je)) && await async function(ee) {
            const ie = new AbortController;
            let He;
            const ye = (0, be.h)((ee => {
              He = setTimeout((() => {
                ie.abort(), ee(null)
              }), xe)
            }));
            try {
              const He = fetch(ee.href, {
                  cache: "only-if-cached",
                  mode: "same-origin",
                  signal: ie.signal
                }),
                Me = await (0, be.q)([He, ye]);
              return !!Me?.ok && ((0, Fe.U)(Me.body.cancel()), !0)
            } catch {
              return !1
            } finally {
              clearTimeout(He)
            }
          }(ee.url())) return Me?.stop(), await async function(ee, ie, He, ye) {
          let be = !1;
          const Me = He && {
            sha256: He.sha256,
            onMismatch: () => {
              be = !0
            }
          };
          try {
            return ue(await me(ee, Me, ye), "warm")
          } catch (Ke) {
            const ye = await le(ee, ie, He, null);
            if (null === ye) throw be && He.onMismatch(), Ke;
            return console.warn(`${ee.url().href} from the HTTP cache failed: ${(0,Ue.e)(Ke)}: loaded its copy instead`), ue(ye, be ? "warm-refused" : "warm-broken")
          }
        }(ee, ye, ie, He);
        Ke = await le(ee, ye, ie, Me)
      } finally {
        Me?.stop()
      }
      var Je;
      return null !== Ke ? ue(Ke, "cold-worker") : ue(await me(ee, ie, He), "cold-wasm")
    }

    function ue(ee, ie) {
      return {
        __proto__: null,
        module: ee,
        path: ie
      }
    }

    function me(ee, ie, He) {
      return void 0 === Ce(ee.name) ? (0, Fe.B)(ee.url(), ie, He) : (0, Fe.B)(ee.url(), ie, {
        ...He,
        hideThen: !0,
        onDownloaded: () => {
          ! function(ee) {
            const ie = ke();
            if (null === ie) return;
            const He = Re(ee),
              ye = ie.filter((ee => ee !== He));
            ye.push(He);
            try {
              localStorage.setItem(Je, JSON.stringify(ye.slice(-oe)))
            } catch (be) {
              console.warn(`Bloxd wasm: ${He} could not be recorded as downloaded: a later join asks the HTTP cache nothing for it`, be)
            }
          }(ee.url()), He.onDownloaded?.()
        }
      })
    }
    async function le(ee, ie, He, ye) {
      if (!Ye || !Oe()) return null;
      const be = ee.url(),
        Me = `${be.href}${ce}`;
      try {
        return await (0, Fe.bb)(Me, ((ee, be, Ke) => Ve(Me, ie, ee, be, Ke, He, ye)))
      } catch (Ke) {
        return console.warn(`${(0,Ue.e)(Ke)}: loading ${be.href} instead`), null
      }
    }
    let Se = null,
      ne = !1;
    const je = new Map,
      se = new Map;
    let Ie = null;

    function he(ee) {
      const ie = ie => ee.filter((ee => je.get(ee)?.state === ie)).length,
        He = ie("compiled");
      return He > 0 && He === ee.length ? "compiled" : He + ie("compiling") > 0 ? "compiling" : "none"
    }

    function Ne() {
      return Ie ?? he([...je.keys()])
    }

    function Ge(ee, ie, He) {
      return null === Se ? Se = ei(ee, ie, He?.memoryMaximumBytes) : ee !== Se.build ? console.warn(`Bloxd wasm: ${ee.name} was asked for after ${Se.build.name} started loading, which this thread keeps`) : ie.name !== Se.workers.name && console.warn(`Bloxd wasm: ${ie.name} was asked for workers after ${Se.workers.name}, which this thread keeps`), He?.reloadFailedDownload && !ne && (0, ye.hb)() && (ne = !0, Se = ei(Se.build, Se.workers, Se.memoryMaximumBytes)), Se.loaded
    }

    function re(ee) {
      return null === Se ? (0, be.h)((ee => {
        ee(!1)
      })) : ((0, ye.gb)() && (Se = ei(Se.build, Se.workers, ee ?? Se.memoryMaximumBytes)), Se.loaded)
    }

    function Qe(ee, ie) {
      if (null !== Se) return (0, be.g)([]);
      const He = ee.filter((ee => !je.has(ee.name))).map((ee => {
        const He = new AbortController,
          ye = {
            compiled: me(ee, (0, Me.d)(ee.name), {
              priority: ie,
              Ce: He.signal,
              onDownloaded: () => {
                ye.downloaded = !0
              },
              retries: {
                onRetry: () => {
                  ye.downloaded = !1, null !== Se && He.abort()
                }
              }
            }),
            cancel: He,
            downloaded: !1,
            state: "compiling"
          };
        return je.set(ee.name, ye), (0, be.h)((ie => {
          (0, be.r)(ye.compiled, (() => {
            ye.downloaded = !0, ye.state = "compiled", ie()
          }), (be => {
            ye.state = "failed", He.signal.aborted || console.warn(`Bloxd wasm: ${ee.name}'s compile ahead of the load failed: the load compiles it afresh`, be), ie()
          }))
        }))
      }));
      return (0, be.g)(He)
    }

    function ei(ee, ie, He) {
      Ie ??= he(ie.name === ee.name ? [ee.name] : [ee.name, ie.name]);
      const Me = (0, ye.M)((async () => {
        (0, Ke.E)(), se.clear();
        const He = Hi(ee),
          ye = ie.name === ee.name ? He : Hi(ie);
        for (const {
            cancel: ee
          }
          of je.values()) ee.abort();
        je.clear(), await (0, be.g)([He, ye]);
        const Me = await He,
          Ue = await ye;
        return (0, Ke.E)(), {
          module: Me,
          workerModule: Ue
        }
      }), ee, He);
      return {
        build: ee,
        workers: ie,
        memoryMaximumBytes: He,
        loaded: Me
      }
    }

    function ii(ee) {
      return se.get(ee)
    }

    function Hi(ee) {
      const ie = performance.now(),
        He = je.get(ee.name);
      je.delete(ee.name);
      const ye = !0 === He?.downloaded ? He : void 0;
      return void 0 !== He && void 0 === ye && He.cancel.abort(), (0, be.h)(((He, Me) => {
        const Ke = (ye, be) => {
            se.set(ee.name, {
              path: be,
              ms: performance.now() - ie
            }), He(ye)
          },
          Ue = () => {
            (0, be.r)(bi(ee), (ee => {
              let {
                module: ie,
                path: He
              } = ee;
              Ke(ie, He)
            }), Me)
          };
        void 0 === ye ? Ue() : (0, be.r)(ye.compiled, (ee => {
          Ke(ee, "ahead")
        }), Ue)
      }))
    }
    async function yi(ee, ie) {
      const {
        module: He
      } = await bi(ee, {
        retries: ie
      });
      return He
    }
    async function bi(ee) {
      let ie = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
      return await ve(ee, (0, Me.d)(ee.name), ie)
    }
  },
  7251: (ee, ie, He) => {
    He.d(ie, {
      d: () => Ke
    });
    var ye = He(3101);
    const be = {
      bloxd_wasm: () => "e02d54b065b2f499b180e1b3347d16df55a2947d0e605d2078a3d3b6da48d9a9",
      bloxd_wasm_client: () => "c679f6743194014168c148d06b29ff43ac2ebd65af96551ab04742237da2cbc0",
      bloxd_wasm_workers: () => "64996202cfa4b1e69476b5072e56b0cfcea62edff120e603bbcded9c0cc2f2b2",
      bloxd_wasm_models: () => "d8940e8e7ccbe7fea2cc7bbf2297c0d75ddbf7e4f7faf3d9bb2ad0765fbba5c2",
      bloxd_wasm_webgpu: () => "cf5aebafb7e2919918851e5ade65769e47a6978ba139ea29c093aa7d03105200",
      bloxd_wasm_webgl: () => "8ae617ef40b6df6e9c6b2b4fb13fbb620e731d320ec11ddc75acee07da832d88",
      bloxd_wasm_webgl1: () => "5541e97c52b53f4d16d1e55f9d8eb127812f263b741e67830d3bb080322b1915",
      bloxd_wasm_replay: () => "fa06c4ee5e806830b3ad4c2e2323335346c04bf67f500d15ce0c53d3a6cad80e",
      bloxd_wasm_recorder: () => "f6eb834fb863f1cd66bacc3bb3d9505f0a66acb7d26cea69ffc0ae9f1664e920",
      bloxd_wasm_anim: () => "b7f47661c5c9230379971e76cc8f09962d7323de4ff12c8fdf43c1fd62033f90",
      bloxd_wasm_textures: () => "5c62f6a16c856ae74984e597d42471c5a63fb99862f370b47f78d95328e7a101",
      bloxd_wasm_shader_pack: () => "e3e6a3571f741530e11f118b8afcc85da15081a89450db4b464665c2ed09dc09"
    };
    var Me = He(5153);

    function Ke(ee) {
      const ie = Object.prototype.hasOwnProperty.call(be, ee) ? be[ee]() : void 0;
      if (void 0 !== ie) return {
        sha256: ie,
        onMismatch: Me.B
      };
      throw new ye.i(`${ee} has no release digest, so this build refuses it`)
    }
  },
  7276: (ee, ie, He) => {
    He.d(ie, {
      d: () => ye,
      h: () => Ke,
      l: () => Ue,
      m: () => be,
      o: () => Me
    });
    const ye = ["terrain", "liquid", "model"];

    function be() {
      const ee = [];
      for (const ie of [!1, !0])
        for (const He of ye) ee.push({
          strict: ie,
          program: He
        });
      return ee
    }

    function Me(ee) {
      return `${ee.strict?"strict":"allow"}.${ee.program}`
    }

    function Ke(ee) {
      return !ee.hooks.vertex && !ee.hooks.surface && !ee.hooks.light
    }

    function Ue(ee, ie) {
      return "off" !== ie && (null === ee || ee.some((ee => ee.key.strict === ("strict" === ie) && !Ke(ee))))
    }
  }
};
Object.freeze(modules);
for (const ee in modules) Object.freeze(modules[ee]);