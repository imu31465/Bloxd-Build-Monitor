export const id = 291;
export const ids = [291];
export const modules = {
  41773: (bb, wb, Mb) => {
    Mb.d(wb, {
      e: () => pb
    });
    var eb = Mb(39971),
      Hb = Mb(38333);
    class pb {
      static Instantiate(bb) {
        if (this.RegisteredExternalClasses && this.RegisteredExternalClasses[bb]) return this.RegisteredExternalClasses[bb];
        const wb = (0, Hb.c)(bb);
        if (wb) return wb;
        eb.b.Warn(bb + " not found, you may have missed an import.");
        const Mb = bb.split(".");
        let pb = "undefined" !== typeof window ? window : "undefined" !== typeof globalThis ? globalThis : this;
        for (let eb = 0, Hb = Mb.length; eb < Hb; eb++) pb = pb[Mb[eb]];
        return "function" !== typeof pb ? null : pb
      }
    }
    pb.RegisteredExternalClasses = {}
  },
  41581: (bb, wb, Mb) => {
    Mb.d(wb, {
      e: () => Hb
    });
    var eb = Mb(41535);
    class Hb {
      static get Now() {
        return (0, eb.j)() && window.performance && window.performance.now ? window.performance.now() : Date.now()
      }
    }
  },
  41611: (bb, wb, Mb) => {
    function eb(bb) {
      let wb = 1;
      do {
        wb *= 2
      } while (wb < bb);
      return wb === bb
    }

    function Hb(bb, wb, Mb) {
      return bb * (1 - Mb) + wb * Mb
    }

    function pb(bb) {
      const wb = Vb(bb),
        Mb = gb(bb);
      return wb - bb > bb - Mb ? Mb : wb
    }

    function Vb(bb) {
      return bb--, bb |= bb >> 1, bb |= bb >> 2, bb |= bb >> 4, bb |= bb >> 8, bb |= bb >> 16, ++bb
    }

    function gb(bb) {
      return bb |= bb >> 1, bb |= bb >> 2, bb |= bb >> 4, bb |= bb >> 8, (bb |= bb >> 16) - (bb >> 1)
    }

    function lb(bb, wb) {
      let Mb;
      switch (arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 2) {
        case 1:
          Mb = gb(bb);
          break;
        case 2:
          Mb = pb(bb);
          break;
        default:
          Mb = Vb(bb)
      }
      return Math.min(Mb, wb)
    }
    Mb.d(wb, {
      b: () => gb,
      e: () => lb,
      i: () => eb,
      k: () => Hb,
      l: () => pb
    })
  },
  41771: (bb, wb, Mb) => {
    Mb.d(wb, {
      b: () => mb,
      d: () => zb,
      e: () => Bb,
      h: () => sb
    });
    var eb, Hb = Mb(38318),
      pb = Mb(41535),
      Vb = Mb(39971),
      gb = Mb(39966),
      lb = Mb(41581),
      Lb = Mb(41554),
      Ib = Mb(41727),
      Ob = Mb(38313),
      Ub = Mb(41722),
      tb = Mb(41565),
      Cb = Mb(41773),
      Eb = Mb(39148),
      Fb = Mb(41611);
    class Bb {
      static get BaseUrl() {
        return Ub.c.BaseUrl
      }
      static set BaseUrl(bb) {
        Ub.c.BaseUrl = bb
      }
      static get CleanUrl() {
        return Ub.c.CleanUrl
      }
      static set CleanUrl(bb) {
        Ub.c.CleanUrl = bb
      }
      static IsAbsoluteUrl(bb) {
        return 0 === bb.indexOf("//") || -1 !== bb.indexOf("://") && (-1 !== bb.indexOf(".") && (-1 !== bb.indexOf("/") && (!(bb.indexOf(":") > bb.indexOf("/")) && (bb.indexOf("://") < bb.indexOf(".") || (0 === bb.indexOf("data:") || 0 === bb.indexOf("blob:"))))))
      }
      static set ScriptBaseUrl(bb) {
        Ub.c.ScriptBaseUrl = bb
      }
      static get ScriptBaseUrl() {
        return Ub.c.ScriptBaseUrl
      }
      static set CDNBaseUrl(bb) {
        eb.ScriptBaseUrl = bb, eb.AssetBaseUrl = bb
      }
      static set ScriptPreprocessUrl(bb) {
        Ub.c.ScriptPreprocessUrl = bb
      }
      static get ScriptPreprocessUrl() {
        return Ub.c.ScriptPreprocessUrl
      }
      static get DefaultRetryStrategy() {
        return Ub.c.DefaultRetryStrategy
      }
      static set DefaultRetryStrategy(bb) {
        Ub.c.DefaultRetryStrategy = bb
      }
      static get CorsBehavior() {
        return Ub.c.CorsBehavior
      }
      static set CorsBehavior(bb) {
        Ub.c.CorsBehavior = bb
      }
      static get UseFallbackTexture() {
        return Ob.e.UseFallbackTexture
      }
      static set UseFallbackTexture(bb) {
        Ob.e.UseFallbackTexture = bb
      }
      static get RegisteredExternalClasses() {
        return Cb.e.RegisteredExternalClasses
      }
      static set RegisteredExternalClasses(bb) {
        Cb.e.RegisteredExternalClasses = bb
      }
      static get fallbackTexture() {
        return Ob.e.FallbackTexture
      }
      static set fallbackTexture(bb) {
        Ob.e.FallbackTexture = bb
      }
      static FetchToRef(bb, wb, Mb, eb, Hb, pb) {
        const Vb = 4 * ((Math.abs(bb) * Mb % Mb | 0) + (Math.abs(wb) * eb % eb | 0) * Mb);
        pb.r = Hb[Vb] / 255, pb.g = Hb[Vb + 1] / 255, pb.b = Hb[Vb + 2] / 255, pb.a = Hb[Vb + 3] / 255
      }
      static Mix(bb, wb, Mb) {
        return 0
      }
      static Instantiate(bb) {
        return Cb.e.Instantiate(bb)
      }
      static SetImmediate(bb) {
        tb.d.SetImmediate(bb)
      }
      static IsExponentOfTwo(bb) {
        return !0
      }
      static FloatRound(bb) {
        return Math.fround(bb)
      }
      static GetFilename(bb) {
        const wb = bb.lastIndexOf("/");
        return wb < 0 ? bb : bb.substring(wb + 1)
      }
      static GetFolderPath(bb) {
        let wb = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        const Mb = bb.lastIndexOf("/");
        return Mb < 0 ? wb ? bb : "" : bb.substring(0, Mb + 1)
      }
      static ToDegrees(bb) {
        return 180 * bb / Math.PI
      }
      static ToRadians(bb) {
        return bb * Math.PI / 180
      }
      static SmoothAngleChange(bb, wb) {
        let Mb = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : .9;
        const eb = this.ToRadians(bb),
          Hb = this.ToRadians(wb);
        return this.ToDegrees(Math.atan2((1 - Mb) * Math.sin(Hb) + Mb * Math.sin(eb), (1 - Mb) * Math.cos(Hb) + Mb * Math.cos(eb)))
      }
      static MakeArray(bb, wb) {
        return !0 === wb || void 0 !== bb && null != bb ? Array.isArray(bb) ? bb : [bb] : null
      }
      static GetPointerPrefix(bb) {
        return (0, pb.j)() && !window.PointerEvent ? "mouse" : "pointer"
      }
      static SetCorsBehavior(bb, wb) {
        (0, Ub.x)(bb, wb)
      }
      static SetReferrerPolicyBehavior(bb, wb) {
        wb.referrerPolicy = bb
      }
      static get PreprocessUrl() {
        return Ub.c.PreprocessUrl
      }
      static set PreprocessUrl(bb) {
        Ub.c.PreprocessUrl = bb
      }
      static LoadImage(bb, wb, Mb, eb, Hb, pb) {
        return (0, Ub.o)(bb, wb, Mb, eb, Hb, pb)
      }
      static LoadFile(bb, wb, Mb, eb, Hb, pb) {
        return (0, Ub.k)(bb, wb, Mb, eb, Hb, pb)
      }
      static async LoadFileAsync(bb) {
        let wb = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        return await new Promise(((Mb, eb) => {
          (0, Ub.k)(bb, (bb => {
            Mb(bb)
          }), void 0, void 0, wb, ((bb, wb) => {
            eb(wb)
          }))
        }))
      }
      static GetAssetUrl(bb) {
        if (!bb) return "";
        if (eb.AssetBaseUrl && bb.startsWith(eb._DefaultAssetsUrl)) {
          const wb = eb.AssetBaseUrl.endsWith("/") ? eb.AssetBaseUrl.slice(0, -1) : eb.AssetBaseUrl;
          return bb.replace(eb._DefaultAssetsUrl, wb)
        }
        return bb
      }
      static GetBabylonScriptURL(bb, wb) {
        if (!bb) return "";
        if (bb.startsWith(eb._DefaultCdnUrl))
          if (eb.ScriptBaseUrl) {
            const wb = eb.ScriptBaseUrl.endsWith("/") ? eb.ScriptBaseUrl.slice(0, -1) : eb.ScriptBaseUrl;
            bb = bb.replace(eb._DefaultCdnUrl, wb)
          } else if (eb._CdnVersion) {
          const wb = `${eb._DefaultCdnUrl}/v${eb._CdnVersion}`;
          bb.startsWith(wb) || (bb = bb.replace(eb._DefaultCdnUrl, wb))
        }
        return bb = eb.ScriptPreprocessUrl(bb), wb && !eb.IsAbsoluteUrl(bb) && (bb = eb.GetAbsoluteUrl(bb)), bb
      }
      static LoadBabylonScript(bb, wb, Mb, Hb) {
        bb = eb.GetBabylonScriptURL(bb), eb.LoadScript(bb, wb, Mb)
      }
      static async LoadBabylonScriptAsync(bb) {
        return bb = eb.GetBabylonScriptURL(bb), await eb.LoadScriptAsync(bb)
      }
      static _LoadScriptNative(bb, wb, Mb, Hb) {
        if (_native) {
          if (arguments.length > 4 && void 0 !== arguments[4] && arguments[4]) {
            const bb = "Loading a script as an ES module is not supported in Babylon Native";
            return void Mb?.(bb, new Error(bb))
          }
          eb.LoadFile(bb, (bb => {
            try {
              Function(bb).apply(null), wb && wb()
            } catch (eb) {
              Mb && Mb("LoadScript Error", eb)
            }
          }), void 0, void 0, !1, ((bb, wb) => {
            Mb && Mb("LoadScript Error", wb)
          }))
        }
      }
      static _LoadScriptWeb(bb, wb, Mb, eb) {
        let Hb = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
        if ("function" === typeof importScripts) {
          try {
            importScripts(bb), wb && wb()
          } catch (lb) {
            Mb?.(`Unable to load script '${bb}' in worker`, lb)
          }
          return
        }
        if (!(0, pb.j)()) return void Mb?.(`Cannot load script '${bb}' outside of a window or a worker`);
        const Vb = document.getElementsByTagName("head")[0],
          gb = document.createElement("script");
        Hb ? (gb.setAttribute("type", "module"), gb.innerText = bb) : (gb.setAttribute("type", "text/javascript"), gb.setAttribute("src", bb)), eb && (gb.id = eb), gb.onload = () => {
          wb && wb()
        }, gb.onerror = wb => {
          Mb && Mb(`Unable to load script '${bb}'`, wb)
        }, Vb.appendChild(gb)
      }
      static async LoadScriptAsync(bb, wb) {
        return await new Promise(((Mb, eb) => {
          this.LoadScript(bb, (() => {
            Mb()
          }), ((bb, wb) => {
            eb(wb || new Error(bb))
          }), wb)
        }))
      }
      static ReadFileAsDataURL(bb, wb, Mb) {
        const eb = new FileReader,
          pb = {
            onCompleteObservable: new Hb.b,
            abort: () => eb.abort()
          };
        return eb.onloadend = () => {
          pb.onCompleteObservable.notifyObservers(pb)
        }, eb.onload = bb => {
          wb(bb.target.result)
        }, eb.onprogress = Mb, eb.readAsDataURL(bb), pb
      }
      static ReadFile(bb, wb, Mb, eb, Hb) {
        return (0, Ub.p)(bb, wb, Mb, eb, Hb)
      }
      static FileAsURL(bb) {
        const wb = new Blob([bb]);
        return window.URL.createObjectURL(wb)
      }
      static Format(bb) {
        let wb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 2;
        return bb.toFixed(wb)
      }
      static DeepCopy(bb, wb, Mb, eb) {
        gb.e.DeepCopy(bb, wb, Mb, eb)
      }
      static IsEmpty(bb) {
        for (const wb in bb)
          if (Object.prototype.hasOwnProperty.call(bb, wb)) return !1;
        return !0
      }
      static RegisterTopRootEvents(bb, wb) {
        for (let eb = 0; eb < wb.length; eb++) {
          const Hb = wb[eb];
          bb.addEventListener(Hb.name, Hb.handler, !1);
          try {
            window.parent && window.parent.addEventListener(Hb.name, Hb.handler, !1)
          } catch (Mb) {}
        }
      }
      static UnregisterTopRootEvents(bb, wb) {
        for (let eb = 0; eb < wb.length; eb++) {
          const Hb = wb[eb];
          bb.removeEventListener(Hb.name, Hb.handler);
          try {
            bb.parent && bb.parent.removeEventListener(Hb.name, Hb.handler)
          } catch (Mb) {}
        }
      }
      static async DumpFramebuffer(bb, wb, Mb, eb) {
        throw (0, Lb.k)("DumpTools")
      }
      static DumpData(bb, wb, Mb, eb) {
        throw (0, Lb.k)("DumpTools")
      }
      static async DumpDataAsync(bb, wb, Mb) {
        throw (0, Lb.k)("DumpTools")
      }
      static _IsOffScreenCanvas(bb) {
        return void 0 !== bb.convertToBlob
      }
      static ToBlob(bb, wb) {
        let Mb = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "image/png",
          Hb = arguments.length > 3 ? arguments[3] : void 0;
        eb._IsOffScreenCanvas(bb) || bb.toBlob || (bb.toBlob = function(bb, wb, Mb) {
          setTimeout((() => {
            const eb = atob(this.toDataURL(wb, Mb).split(",")[1]),
              Hb = eb.length,
              pb = new Uint8Array(Hb);
            for (let bb = 0; bb < Hb; bb++) pb[bb] = eb.charCodeAt(bb);
            bb(new Blob([pb]))
          }))
        }), eb._IsOffScreenCanvas(bb) ? bb.convertToBlob({
          type: Mb,
          quality: Hb
        }).then((bb => wb(bb))) : bb.toBlob((function(bb) {
          wb(bb)
        }), Mb, Hb)
      }
      static DownloadBlob(bb, wb) {
        if ("download" in document.createElement("a")) {
          if (!wb) {
            const bb = new Date;
            wb = "screenshot_" + ((bb.getFullYear() + "-" + (bb.getMonth() + 1)).slice(2) + "-" + bb.getDate() + "_" + bb.getHours() + "-" + ("0" + bb.getMinutes()).slice(-2)) + ".png"
          }
          eb.Download(bb, wb)
        } else if (bb && "undefined" !== typeof URL) {
          const wb = URL.createObjectURL(bb),
            Mb = window.open("");
          if (!Mb) return;
          const eb = Mb.document.createElement("img");
          eb.onload = function() {
            URL.revokeObjectURL(wb)
          }, eb.src = wb, Mb.document.body.appendChild(eb)
        }
      }
      static EncodeScreenshotCanvasData(bb, wb) {
        let Mb = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "image/png",
          Hb = arguments.length > 3 ? arguments[3] : void 0,
          pb = arguments.length > 4 ? arguments[4] : void 0;
        if ("string" !== typeof Hb && wb) {
          if (wb) {
            if (eb._IsOffScreenCanvas(bb)) return void bb.convertToBlob({
              type: Mb,
              quality: pb
            }).then((bb => {
              const Mb = new FileReader;
              Mb.readAsDataURL(bb), Mb.onloadend = () => {
                const bb = Mb.result;
                wb(bb)
              }
            }));
            const Hb = bb.toDataURL(Mb, pb);
            wb(Hb)
          }
        } else this.ToBlob(bb, (function(bb) {
          bb && eb.DownloadBlob(bb, Hb), wb && wb("")
        }), Mb, pb)
      }
      static Download(bb, wb) {
        if ("undefined" === typeof URL) return;
        const Mb = window.URL.createObjectURL(bb),
          eb = document.createElement("a");
        document.body.appendChild(eb), eb.style.display = "none", eb.href = Mb, eb.download = wb, eb.addEventListener("click", (() => {
          eb.parentElement && eb.parentElement.removeChild(eb)
        })), eb.click(), window.URL.revokeObjectURL(Mb)
      }
      static BackCompatCameraNoPreventDefault(bb) {
        return "boolean" === typeof bb[0] ? bb[0] : "boolean" === typeof bb[1] && bb[1]
      }
      static CreateScreenshot(bb, wb, Mb, eb) {
        throw (0, Lb.k)("ScreenshotTools")
      }
      static async CreateScreenshotAsync(bb, wb, Mb) {
        throw (0, Lb.k)("ScreenshotTools")
      }
      static CreateScreenshotUsingRenderTarget(bb, wb, Mb, eb) {
        throw (0, Lb.k)("ScreenshotTools")
      }
      static async CreateScreenshotUsingRenderTargetAsync(bb, wb, Mb) {
        throw (0, Lb.k)("ScreenshotTools")
      }
      static RandomId() {
        return (0, Eb.c)()
      }
      static IsBase64(bb) {
        return (0, Ub.g)(bb)
      }
      static DecodeBase64(bb) {
        return (0, Ub.b)(bb)
      }
      static get errorsCount() {
        return Vb.b.errorsCount
      }
      static Log(bb) {
        Vb.b.Log(bb)
      }
      static Warn(bb) {
        Vb.b.Warn(bb)
      }
      static Error(bb) {
        Vb.b.Error(bb)
      }
      static get LogCache() {
        return Vb.b.LogCache
      }
      static ClearLogCache() {
        Vb.b.ClearLogCache()
      }
      static set LogLevels(bb) {
        Vb.b.LogLevels = bb
      }
      static set PerformanceLogLevel(bb) {
        (bb & eb.PerformanceUserMarkLogLevel) !== eb.PerformanceUserMarkLogLevel ? (bb & eb.PerformanceConsoleLogLevel) !== eb.PerformanceConsoleLogLevel ? (eb.StartPerformanceCounter = eb._StartPerformanceCounterDisabled, eb.EndPerformanceCounter = eb._EndPerformanceCounterDisabled, _native?.disablePerformanceLogging?.()) : _native?.enablePerformanceLogging ? (_native.enablePerformanceLogging(2), eb.StartPerformanceCounter = eb._StartMarkNative, eb.EndPerformanceCounter = eb._EndMarkNative) : (eb.StartPerformanceCounter = eb._StartPerformanceConsole, eb.EndPerformanceCounter = eb._EndPerformanceConsole) : _native?.enablePerformanceLogging ? (_native.enablePerformanceLogging(1), eb.StartPerformanceCounter = eb._StartMarkNative, eb.EndPerformanceCounter = eb._EndMarkNative) : (eb.StartPerformanceCounter = eb._StartUserMark, eb.EndPerformanceCounter = eb._EndUserMark)
      }
      static _StartPerformanceCounterDisabled(bb, wb) {}
      static _EndPerformanceCounterDisabled(bb, wb) {}
      static _StartUserMark(bb) {
        let wb = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        if (!eb._Performance) {
          if (!(0, pb.j)()) return;
          eb._Performance = window.performance
        }
        wb && eb._Performance.mark && eb._Performance.mark(bb + "-Begin")
      }
      static _EndUserMark(bb) {
        (!(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1]) && eb._Performance.mark && (eb._Performance.mark(bb + "-End"), eb._Performance.measure(bb, bb + "-Begin", bb + "-End"))
      }
      static _StartPerformanceConsole(bb) {
        let wb = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        wb && (eb._StartUserMark(bb, wb), console.time && console.time(bb))
      }
      static _EndPerformanceConsole(bb) {
        let wb = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        wb && (eb._EndUserMark(bb, wb), console.timeEnd(bb))
      }
      static _StartMarkNative(bb) {
        if ((!(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1]) && _native?.startPerformanceCounter)
          if (eb._NativePerformanceCounterHandles.has(bb)) eb.Warn(`Performance counter with name ${bb} is already started.`);
          else {
            const wb = _native.startPerformanceCounter(bb);
            eb._NativePerformanceCounterHandles.set(bb, wb)
          }
      }
      static _EndMarkNative(bb) {
        if ((!(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1]) && _native?.endPerformanceCounter) {
          const wb = eb._NativePerformanceCounterHandles.get(bb);
          wb ? (_native.endPerformanceCounter(wb), eb._NativePerformanceCounterHandles.delete(bb)) : eb.Warn(`Performance counter with name ${bb} was not started.`)
        }
      }
      static get Now() {
        return lb.e.Now
      }
      static GetClassName(bb) {
        let wb = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          Mb = null;
        if (!wb && bb.getClassName) Mb = bb.getClassName();
        else {
          if (bb instanceof Object) {
            Mb = (wb ? bb : Object.getPrototypeOf(bb)).constructor.__bjsclassName__
          }
          Mb || (Mb = typeof bb)
        }
        return Mb
      }
      static First(bb, wb) {
        for (const Mb of bb)
          if (wb(Mb)) return Mb;
        return null
      }
      static getFullClassName(bb) {
        let wb = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          Mb = null,
          eb = null;
        if (!wb && bb.getClassName) Mb = bb.getClassName();
        else {
          if (bb instanceof Object) {
            const Hb = wb ? bb : Object.getPrototypeOf(bb);
            Mb = Hb.constructor.__bjsclassName__, eb = Hb.constructor.__bjsmoduleName__
          }
          Mb || (Mb = typeof bb)
        }
        return Mb ? (null != eb ? eb + "." : "") + Mb : null
      }
      static async DelayAsync(bb) {
        await new Promise((wb => {
          setTimeout((() => {
            wb()
          }), bb)
        }))
      }
      static IsSafari() {
        return !!(0, pb.g)() && /^((?!chrome|android).)*safari/i.test(navigator.userAgent)
      }
    }

    function sb(bb, wb) {
      return Mb => {
        Mb.__bjsclassName__ = bb, Mb.__bjsmoduleName__ = null != wb ? wb : null
      }
    }
    eb = Bb, Bb.AssetBaseUrl = "", Bb.UseCustomRequestHeaders = !1, Bb.CustomRequestHeaders = Ib.b.CustomRequestHeaders, Bb.GetDOMTextContent = pb.e, Bb._DefaultCdnUrl = "https://cdn.babylonjs.com", Bb._CdnVersion = "9.28.0", Bb._DefaultAssetsUrl = "https://assets.babylonjs.com/core", Bb.LoadScript = "undefined" === typeof _native ? eb._LoadScriptWeb : eb._LoadScriptNative, Bb.GetAbsoluteUrl = "object" === typeof document ? bb => {
      const wb = document.createElement("a");
      return wb.href = bb, wb.href
    } : "function" === typeof URL && "object" === typeof location ? bb => new URL(bb, location.origin).href : () => {
      throw new Error("Unable to get absolute URL. Override BABYLON.Tools.GetAbsoluteUrl to a custom implementation for the current context.")
    }, Bb.NoneLogLevel = Vb.b.NoneLogLevel, Bb.MessageLogLevel = Vb.b.MessageLogLevel, Bb.WarningLogLevel = Vb.b.WarningLogLevel, Bb.ErrorLogLevel = Vb.b.ErrorLogLevel, Bb.AllLogLevel = Vb.b.AllLogLevel, Bb.IsWindowObjectExist = pb.j, Bb.PerformanceNoneLogLevel = 0, Bb.PerformanceUserMarkLogLevel = 1, Bb.PerformanceConsoleLogLevel = 2, Bb._NativePerformanceCounterHandles = new Map, Bb.StartPerformanceCounter = eb._StartPerformanceCounterDisabled, Bb.EndPerformanceCounter = eb._EndPerformanceCounterDisabled;
    class mb {
      constructor(bb, wb, Mb) {
        let eb = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
        this.iterations = bb, this.index = eb - 1, this._done = !1, this._fn = wb, this._successCallback = Mb
      }
      executeNext() {
        this._done || (this.index + 1 < this.iterations ? (++this.index, this._fn(this)) : this.breakLoop())
      }
      breakLoop() {
        this._done = !0, this._successCallback()
      }
      static Run(bb, wb, Mb) {
        const eb = new mb(bb, wb, Mb, arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0);
        return eb.executeNext(), eb
      }
      static SyncAsyncForLoop(bb, wb, Mb, eb, Hb) {
        let pb = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0;
        return mb.Run(Math.ceil(bb / wb), (eb => {
          Hb && Hb() ? eb.breakLoop() : setTimeout((() => {
            for (let pb = 0; pb < wb; ++pb) {
              const Vb = eb.index * wb + pb;
              if (Vb >= bb) break;
              if (Mb(Vb), Hb && Hb()) {
                eb.breakLoop();
                break
              }
            }
            eb.executeNext()
          }), pb)
        }), eb)
      }
    }
    let hb = !1;

    function zb() {
      hb || (hb = !0, Bb.Mix = Fb.k, Bb.IsExponentOfTwo = Fb.i, Ob.e.FallbackTexture = "data:image/jpg;base64,/9j/4AAQSkZJRgABAQEAYABgAAD/4QBmRXhpZgAATU0AKgAAAAgABAEaAAUAAAABAAAAPgEbAAUAAAABAAAARgEoAAMAAAABAAIAAAExAAIAAAAQAAAATgAAAAAAAABgAAAAAQAAAGAAAAABcGFpbnQubmV0IDQuMC41AP/bAEMABAIDAwMCBAMDAwQEBAQFCQYFBQUFCwgIBgkNCw0NDQsMDA4QFBEODxMPDAwSGBITFRYXFxcOERkbGRYaFBYXFv/bAEMBBAQEBQUFCgYGChYPDA8WFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFv/AABEIAQABAAMBIgACEQEDEQH/xAAfAAABBQEBAQEBAQAAAAAAAAAAAQIDBAUGBwgJCgv/xAC1EAACAQMDAgQDBQUEBAAAAX0BAgMABBEFEiExQQYTUWEHInEUMoGRoQgjQrHBFVLR8CQzYnKCCQoWFxgZGiUmJygpKjQ1Njc4OTpDREVGR0hJSlNUVVZXWFlaY2RlZmdoaWpzdHV2d3h5eoOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4eLj5OXm5+jp6vHy8/T19vf4+fr/xAAfAQADAQEBAQEBAQEBAAAAAAAAAQIDBAUGBwgJCgv/xAC1EQACAQIEBAMEBwUEBAABAncAAQIDEQQFITEGEkFRB2FxEyIygQgUQpGhscEJIzNS8BVictEKFiQ04SXxFxgZGiYnKCkqNTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqCg4SFhoeIiYqSk5SVlpeYmZqio6Slpqeoqaqys7S1tre4ubrCw8TFxsfIycrS09TV1tfY2dri4+Tl5ufo6ery8/T19vf4+fr/2gAMAwEAAhEDEQA/APH6KKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FCiiigD6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++gooooA+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gUKKKKAPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76CiiigD5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BQooooA+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/voKKKKAPl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FCiiigD6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++gooooA+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gUKKKKAPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76CiiigD5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BQooooA+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/voKKKKAPl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FCiiigD6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++gooooA+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gUKKKKAPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76P//Z")
    }
  }
};
Object.freeze(modules);
for (const bb in modules) Object.freeze(modules[bb]);