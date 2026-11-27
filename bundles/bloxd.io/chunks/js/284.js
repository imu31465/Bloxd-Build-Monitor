export const id = 284;
export const ids = [284];
export const modules = {
  41212: (ee, ie, He) => {
    He.d(ie, {
      d: () => Me
    });
    var ye = He(39467),
      be = He(37949);
    class Me {
      static Instantiate(ee) {
        if (this.RegisteredExternalClasses && this.RegisteredExternalClasses[ee]) return this.RegisteredExternalClasses[ee];
        const ie = (0, be.c)(ee);
        if (ie) return ie;
        ye.e.Warn(ee + " not found, you may have missed an import.");
        const He = ee.split(".");
        let Me = "undefined" !== typeof window ? window : "undefined" !== typeof globalThis ? globalThis : this;
        for (let ye = 0, be = He.length; ye < be; ye++) Me = Me[He[ye]];
        return "function" !== typeof Me ? null : Me
      }
    }
    Me.RegisteredExternalClasses = {}
  },
  41005: (ee, ie, He) => {
    He.d(ie, {
      e: () => be
    });
    var ye = He(40968);
    class be {
      static get Now() {
        return (0, ye.m)() && window.performance && window.performance.now ? window.performance.now() : Date.now()
      }
    }
  },
  41044: (ee, ie, He) => {
    function ye(ee) {
      let ie = 1;
      do {
        ie *= 2
      } while (ie < ee);
      return ie === ee
    }

    function be(ee, ie, He) {
      return ee * (1 - He) + ie * He
    }

    function Me(ee) {
      const ie = Ke(ee),
        He = Ue(ee);
      return ie - ee > ee - He ? He : ie
    }

    function Ke(ee) {
      return ee--, ee |= ee >> 1, ee |= ee >> 2, ee |= ee >> 4, ee |= ee >> 8, ee |= ee >> 16, ++ee
    }

    function Ue(ee) {
      return ee |= ee >> 1, ee |= ee >> 2, ee |= ee >> 4, ee |= ee >> 8, (ee |= ee >> 16) - (ee >> 1)
    }

    function Fe(ee, ie) {
      let He;
      switch (arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 2) {
        case 1:
          He = Ue(ee);
          break;
        case 2:
          He = Me(ee);
          break;
        default:
          He = Ke(ee)
      }
      return Math.min(He, ie)
    }
    He.d(ie, {
      d: () => Ue,
      h: () => Fe,
      l: () => ye,
      m: () => be,
      q: () => Me
    })
  },
  41203: (ee, ie, He) => {
    He.d(ie, {
      c: () => Be,
      g: () => ge,
      h: () => Xe,
      k: () => ze
    });
    var ye, be = He(37931),
      Me = He(40968),
      Ke = He(39467),
      Ue = He(39463),
      Fe = He(41005),
      Je = He(40985),
      oe = He(41161),
      Re = He(37929),
      ke = He(41159),
      qe = He(40995),
      fe = He(41212),
      Te = He(38745),
      pe = He(41044);
    class Xe {
      static get BaseUrl() {
        return ke.f.BaseUrl
      }
      static set BaseUrl(ee) {
        ke.f.BaseUrl = ee
      }
      static get CleanUrl() {
        return ke.f.CleanUrl
      }
      static set CleanUrl(ee) {
        ke.f.CleanUrl = ee
      }
      static IsAbsoluteUrl(ee) {
        return 0 === ee.indexOf("//") || -1 !== ee.indexOf("://") && (-1 !== ee.indexOf(".") && (-1 !== ee.indexOf("/") && (!(ee.indexOf(":") > ee.indexOf("/")) && (ee.indexOf("://") < ee.indexOf(".") || (0 === ee.indexOf("data:") || 0 === ee.indexOf("blob:"))))))
      }
      static set ScriptBaseUrl(ee) {
        ke.f.ScriptBaseUrl = ee
      }
      static get ScriptBaseUrl() {
        return ke.f.ScriptBaseUrl
      }
      static set CDNBaseUrl(ee) {
        ye.ScriptBaseUrl = ee, ye.AssetBaseUrl = ee
      }
      static set ScriptPreprocessUrl(ee) {
        ke.f.ScriptPreprocessUrl = ee
      }
      static get ScriptPreprocessUrl() {
        return ke.f.ScriptPreprocessUrl
      }
      static get DefaultRetryStrategy() {
        return ke.f.DefaultRetryStrategy
      }
      static set DefaultRetryStrategy(ee) {
        ke.f.DefaultRetryStrategy = ee
      }
      static get CorsBehavior() {
        return ke.f.CorsBehavior
      }
      static set CorsBehavior(ee) {
        ke.f.CorsBehavior = ee
      }
      static get UseFallbackTexture() {
        return Re.b.UseFallbackTexture
      }
      static set UseFallbackTexture(ee) {
        Re.b.UseFallbackTexture = ee
      }
      static get RegisteredExternalClasses() {
        return fe.d.RegisteredExternalClasses
      }
      static set RegisteredExternalClasses(ee) {
        fe.d.RegisteredExternalClasses = ee
      }
      static get fallbackTexture() {
        return Re.b.FallbackTexture
      }
      static set fallbackTexture(ee) {
        Re.b.FallbackTexture = ee
      }
      static FetchToRef(ee, ie, He, ye, be, Me) {
        const Ke = 4 * ((Math.abs(ee) * He % He | 0) + (Math.abs(ie) * ye % ye | 0) * He);
        Me.r = be[Ke] / 255, Me.g = be[Ke + 1] / 255, Me.b = be[Ke + 2] / 255, Me.a = be[Ke + 3] / 255
      }
      static Mix(ee, ie, He) {
        return 0
      }
      static Instantiate(ee) {
        return fe.d.Instantiate(ee)
      }
      static SetImmediate(ee) {
        qe.c.SetImmediate(ee)
      }
      static IsExponentOfTwo(ee) {
        return !0
      }
      static FloatRound(ee) {
        return Math.fround(ee)
      }
      static GetFilename(ee) {
        const ie = ee.lastIndexOf("/");
        return ie < 0 ? ee : ee.substring(ie + 1)
      }
      static GetFolderPath(ee) {
        let ie = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        const He = ee.lastIndexOf("/");
        return He < 0 ? ie ? ee : "" : ee.substring(0, He + 1)
      }
      static ToDegrees(ee) {
        return 180 * ee / Math.PI
      }
      static ToRadians(ee) {
        return ee * Math.PI / 180
      }
      static SmoothAngleChange(ee, ie) {
        let He = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : .9;
        const ye = this.ToRadians(ee),
          be = this.ToRadians(ie);
        return this.ToDegrees(Math.atan2((1 - He) * Math.sin(be) + He * Math.sin(ye), (1 - He) * Math.cos(be) + He * Math.cos(ye)))
      }
      static MakeArray(ee, ie) {
        return !0 === ie || void 0 !== ee && null != ee ? Array.isArray(ee) ? ee : [ee] : null
      }
      static GetPointerPrefix(ee) {
        return (0, Me.m)() && !window.PointerEvent ? "mouse" : "pointer"
      }
      static SetCorsBehavior(ee, ie) {
        (0, ke.z)(ee, ie)
      }
      static SetReferrerPolicyBehavior(ee, ie) {
        ie.referrerPolicy = ee
      }
      static get PreprocessUrl() {
        return ke.f.PreprocessUrl
      }
      static set PreprocessUrl(ee) {
        ke.f.PreprocessUrl = ee
      }
      static LoadImage(ee, ie, He, ye, be, Me) {
        return (0, ke.r)(ee, ie, He, ye, be, Me)
      }
      static LoadFile(ee, ie, He, ye, be, Me) {
        return (0, ke.o)(ee, ie, He, ye, be, Me)
      }
      static async LoadFileAsync(ee) {
        let ie = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        return await new Promise(((He, ye) => {
          (0, ke.o)(ee, (ee => {
            He(ee)
          }), void 0, void 0, ie, ((ee, ie) => {
            ye(ie)
          }))
        }))
      }
      static GetAssetUrl(ee) {
        if (!ee) return "";
        if (ye.AssetBaseUrl && ee.startsWith(ye._DefaultAssetsUrl)) {
          const ie = ye.AssetBaseUrl.endsWith("/") ? ye.AssetBaseUrl.slice(0, -1) : ye.AssetBaseUrl;
          return ee.replace(ye._DefaultAssetsUrl, ie)
        }
        return ee
      }
      static GetBabylonScriptURL(ee, ie) {
        if (!ee) return "";
        if (ee.startsWith(ye._DefaultCdnUrl))
          if (ye.ScriptBaseUrl) {
            const ie = ye.ScriptBaseUrl.endsWith("/") ? ye.ScriptBaseUrl.slice(0, -1) : ye.ScriptBaseUrl;
            ee = ee.replace(ye._DefaultCdnUrl, ie)
          } else if (ye._CdnVersion) {
          const ie = `${ye._DefaultCdnUrl}/v${ye._CdnVersion}`;
          ee.startsWith(ie) || (ee = ee.replace(ye._DefaultCdnUrl, ie))
        }
        return ee = ye.ScriptPreprocessUrl(ee), ie && !ye.IsAbsoluteUrl(ee) && (ee = ye.GetAbsoluteUrl(ee)), ee
      }
      static LoadBabylonScript(ee, ie, He, be) {
        ee = ye.GetBabylonScriptURL(ee), ye.LoadScript(ee, ie, He)
      }
      static async LoadBabylonScriptAsync(ee) {
        return ee = ye.GetBabylonScriptURL(ee), await ye.LoadScriptAsync(ee)
      }
      static _LoadScriptNative(ee, ie, He, be) {
        if (_native) {
          if (arguments.length > 4 && void 0 !== arguments[4] && arguments[4]) {
            const ee = "Loading a script as an ES module is not supported in Babylon Native";
            return void He?.(ee, new Error(ee))
          }
          ye.LoadFile(ee, (ee => {
            try {
              Function(ee).apply(null), ie && ie()
            } catch (ye) {
              He && He("LoadScript Error", ye)
            }
          }), void 0, void 0, !1, ((ee, ie) => {
            He && He("LoadScript Error", ie)
          }))
        }
      }
      static _LoadScriptWeb(ee, ie, He, ye) {
        let be = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
        if ("function" === typeof importScripts) {
          try {
            importScripts(ee), ie && ie()
          } catch (Fe) {
            He?.(`Unable to load script '${ee}' in worker`, Fe)
          }
          return
        }
        if (!(0, Me.m)()) return void He?.(`Cannot load script '${ee}' outside of a window or a worker`);
        const Ke = document.getElementsByTagName("head")[0],
          Ue = document.createElement("script");
        be ? (Ue.setAttribute("type", "module"), Ue.innerText = ee) : (Ue.setAttribute("type", "text/javascript"), Ue.setAttribute("src", ee)), ye && (Ue.id = ye), Ue.onload = () => {
          ie && ie()
        }, Ue.onerror = ie => {
          He && He(`Unable to load script '${ee}'`, ie)
        }, Ke.appendChild(Ue)
      }
      static async LoadScriptAsync(ee, ie) {
        return await new Promise(((He, ye) => {
          this.LoadScript(ee, (() => {
            He()
          }), ((ee, ie) => {
            ye(ie || new Error(ee))
          }), ie)
        }))
      }
      static ReadFileAsDataURL(ee, ie, He) {
        const ye = new FileReader,
          Me = {
            onCompleteObservable: new be.d,
            abort: () => ye.abort()
          };
        return ye.onloadend = () => {
          Me.onCompleteObservable.notifyObservers(Me)
        }, ye.onload = ee => {
          ie(ee.target.result)
        }, ye.onprogress = He, ye.readAsDataURL(ee), Me
      }
      static ReadFile(ee, ie, He, ye, be) {
        return (0, ke.s)(ee, ie, He, ye, be)
      }
      static FileAsURL(ee) {
        const ie = new Blob([ee]);
        return window.URL.createObjectURL(ie)
      }
      static Format(ee) {
        let ie = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 2;
        return ee.toFixed(ie)
      }
      static DeepCopy(ee, ie, He, ye) {
        Ue.b.DeepCopy(ee, ie, He, ye)
      }
      static IsEmpty(ee) {
        for (const ie in ee)
          if (Object.prototype.hasOwnProperty.call(ee, ie)) return !1;
        return !0
      }
      static RegisterTopRootEvents(ee, ie) {
        for (let ye = 0; ye < ie.length; ye++) {
          const be = ie[ye];
          ee.addEventListener(be.name, be.handler, !1);
          try {
            window.parent && window.parent.addEventListener(be.name, be.handler, !1)
          } catch (He) {}
        }
      }
      static UnregisterTopRootEvents(ee, ie) {
        for (let ye = 0; ye < ie.length; ye++) {
          const be = ie[ye];
          ee.removeEventListener(be.name, be.handler);
          try {
            ee.parent && ee.parent.removeEventListener(be.name, be.handler)
          } catch (He) {}
        }
      }
      static async DumpFramebuffer(ee, ie, He, ye) {
        throw (0, Je.l)("DumpTools")
      }
      static DumpData(ee, ie, He, ye) {
        throw (0, Je.l)("DumpTools")
      }
      static async DumpDataAsync(ee, ie, He) {
        throw (0, Je.l)("DumpTools")
      }
      static _IsOffScreenCanvas(ee) {
        return void 0 !== ee.convertToBlob
      }
      static ToBlob(ee, ie) {
        let He = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "image/png",
          be = arguments.length > 3 ? arguments[3] : void 0;
        ye._IsOffScreenCanvas(ee) || ee.toBlob || (ee.toBlob = function(ee, ie, He) {
          setTimeout((() => {
            const ye = atob(this.toDataURL(ie, He).split(",")[1]),
              be = ye.length,
              Me = new Uint8Array(be);
            for (let ee = 0; ee < be; ee++) Me[ee] = ye.charCodeAt(ee);
            ee(new Blob([Me]))
          }))
        }), ye._IsOffScreenCanvas(ee) ? ee.convertToBlob({
          type: He,
          quality: be
        }).then((ee => ie(ee))) : ee.toBlob((function(ee) {
          ie(ee)
        }), He, be)
      }
      static DownloadBlob(ee, ie) {
        if ("download" in document.createElement("a")) {
          if (!ie) {
            const ee = new Date;
            ie = "screenshot_" + ((ee.getFullYear() + "-" + (ee.getMonth() + 1)).slice(2) + "-" + ee.getDate() + "_" + ee.getHours() + "-" + ("0" + ee.getMinutes()).slice(-2)) + ".png"
          }
          ye.Download(ee, ie)
        } else if (ee && "undefined" !== typeof URL) {
          const ie = URL.createObjectURL(ee),
            He = window.open("");
          if (!He) return;
          const ye = He.document.createElement("img");
          ye.onload = function() {
            URL.revokeObjectURL(ie)
          }, ye.src = ie, He.document.body.appendChild(ye)
        }
      }
      static EncodeScreenshotCanvasData(ee, ie) {
        let He = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "image/png",
          be = arguments.length > 3 ? arguments[3] : void 0,
          Me = arguments.length > 4 ? arguments[4] : void 0;
        if ("string" !== typeof be && ie) {
          if (ie) {
            if (ye._IsOffScreenCanvas(ee)) return void ee.convertToBlob({
              type: He,
              quality: Me
            }).then((ee => {
              const He = new FileReader;
              He.readAsDataURL(ee), He.onloadend = () => {
                const ee = He.result;
                ie(ee)
              }
            }));
            const be = ee.toDataURL(He, Me);
            ie(be)
          }
        } else this.ToBlob(ee, (function(ee) {
          ee && ye.DownloadBlob(ee, be), ie && ie("")
        }), He, Me)
      }
      static Download(ee, ie) {
        if ("undefined" === typeof URL) return;
        const He = window.URL.createObjectURL(ee),
          ye = document.createElement("a");
        document.body.appendChild(ye), ye.style.display = "none", ye.href = He, ye.download = ie, ye.addEventListener("click", (() => {
          ye.parentElement && ye.parentElement.removeChild(ye)
        })), ye.click(), window.URL.revokeObjectURL(He)
      }
      static BackCompatCameraNoPreventDefault(ee) {
        return "boolean" === typeof ee[0] ? ee[0] : "boolean" === typeof ee[1] && ee[1]
      }
      static CreateScreenshot(ee, ie, He, ye) {
        throw (0, Je.l)("ScreenshotTools")
      }
      static async CreateScreenshotAsync(ee, ie, He) {
        throw (0, Je.l)("ScreenshotTools")
      }
      static CreateScreenshotUsingRenderTarget(ee, ie, He, ye) {
        throw (0, Je.l)("ScreenshotTools")
      }
      static async CreateScreenshotUsingRenderTargetAsync(ee, ie, He) {
        throw (0, Je.l)("ScreenshotTools")
      }
      static RandomId() {
        return (0, Te.d)()
      }
      static IsBase64(ee) {
        return (0, ke.m)(ee)
      }
      static DecodeBase64(ee) {
        return (0, ke.d)(ee)
      }
      static get errorsCount() {
        return Ke.e.errorsCount
      }
      static Log(ee) {
        Ke.e.Log(ee)
      }
      static Warn(ee) {
        Ke.e.Warn(ee)
      }
      static Error(ee) {
        Ke.e.Error(ee)
      }
      static get LogCache() {
        return Ke.e.LogCache
      }
      static ClearLogCache() {
        Ke.e.ClearLogCache()
      }
      static set LogLevels(ee) {
        Ke.e.LogLevels = ee
      }
      static set PerformanceLogLevel(ee) {
        (ee & ye.PerformanceUserMarkLogLevel) !== ye.PerformanceUserMarkLogLevel ? (ee & ye.PerformanceConsoleLogLevel) !== ye.PerformanceConsoleLogLevel ? (ye.StartPerformanceCounter = ye._StartPerformanceCounterDisabled, ye.EndPerformanceCounter = ye._EndPerformanceCounterDisabled, _native?.disablePerformanceLogging?.()) : _native?.enablePerformanceLogging ? (_native.enablePerformanceLogging(2), ye.StartPerformanceCounter = ye._StartMarkNative, ye.EndPerformanceCounter = ye._EndMarkNative) : (ye.StartPerformanceCounter = ye._StartPerformanceConsole, ye.EndPerformanceCounter = ye._EndPerformanceConsole) : _native?.enablePerformanceLogging ? (_native.enablePerformanceLogging(1), ye.StartPerformanceCounter = ye._StartMarkNative, ye.EndPerformanceCounter = ye._EndMarkNative) : (ye.StartPerformanceCounter = ye._StartUserMark, ye.EndPerformanceCounter = ye._EndUserMark)
      }
      static _StartPerformanceCounterDisabled(ee, ie) {}
      static _EndPerformanceCounterDisabled(ee, ie) {}
      static _StartUserMark(ee) {
        let ie = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        if (!ye._Performance) {
          if (!(0, Me.m)()) return;
          ye._Performance = window.performance
        }
        ie && ye._Performance.mark && ye._Performance.mark(ee + "-Begin")
      }
      static _EndUserMark(ee) {
        (!(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1]) && ye._Performance.mark && (ye._Performance.mark(ee + "-End"), ye._Performance.measure(ee, ee + "-Begin", ee + "-End"))
      }
      static _StartPerformanceConsole(ee) {
        let ie = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        ie && (ye._StartUserMark(ee, ie), console.time && console.time(ee))
      }
      static _EndPerformanceConsole(ee) {
        let ie = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        ie && (ye._EndUserMark(ee, ie), console.timeEnd(ee))
      }
      static _StartMarkNative(ee) {
        if ((!(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1]) && _native?.startPerformanceCounter)
          if (ye._NativePerformanceCounterHandles.has(ee)) ye.Warn(`Performance counter with name ${ee} is already started.`);
          else {
            const ie = _native.startPerformanceCounter(ee);
            ye._NativePerformanceCounterHandles.set(ee, ie)
          }
      }
      static _EndMarkNative(ee) {
        if ((!(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1]) && _native?.endPerformanceCounter) {
          const ie = ye._NativePerformanceCounterHandles.get(ee);
          ie ? (_native.endPerformanceCounter(ie), ye._NativePerformanceCounterHandles.delete(ee)) : ye.Warn(`Performance counter with name ${ee} was not started.`)
        }
      }
      static get Now() {
        return Fe.e.Now
      }
      static GetClassName(ee) {
        let ie = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          He = null;
        if (!ie && ee.getClassName) He = ee.getClassName();
        else {
          if (ee instanceof Object) {
            He = (ie ? ee : Object.getPrototypeOf(ee)).constructor.__bjsclassName__
          }
          He || (He = typeof ee)
        }
        return He
      }
      static First(ee, ie) {
        for (const He of ee)
          if (ie(He)) return He;
        return null
      }
      static getFullClassName(ee) {
        let ie = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          He = null,
          ye = null;
        if (!ie && ee.getClassName) He = ee.getClassName();
        else {
          if (ee instanceof Object) {
            const be = ie ? ee : Object.getPrototypeOf(ee);
            He = be.constructor.__bjsclassName__, ye = be.constructor.__bjsmoduleName__
          }
          He || (He = typeof ee)
        }
        return He ? (null != ye ? ye + "." : "") + He : null
      }
      static async DelayAsync(ee) {
        await new Promise((ie => {
          setTimeout((() => {
            ie()
          }), ee)
        }))
      }
      static IsSafari() {
        return !!(0, Me.k)() && /^((?!chrome|android).)*safari/i.test(navigator.userAgent)
      }
    }

    function ze(ee, ie) {
      return He => {
        He.__bjsclassName__ = ee, He.__bjsmoduleName__ = null != ie ? ie : null
      }
    }
    ye = Xe, Xe.AssetBaseUrl = "", Xe.UseCustomRequestHeaders = !1, Xe.CustomRequestHeaders = oe.c.CustomRequestHeaders, Xe.GetDOMTextContent = Me.e, Xe._DefaultCdnUrl = "https://cdn.babylonjs.com", Xe._CdnVersion = "9.28.0", Xe._DefaultAssetsUrl = "https://assets.babylonjs.com/core", Xe.LoadScript = "undefined" === typeof _native ? ye._LoadScriptWeb : ye._LoadScriptNative, Xe.GetAbsoluteUrl = "object" === typeof document ? ee => {
      const ie = document.createElement("a");
      return ie.href = ee, ie.href
    } : "function" === typeof URL && "object" === typeof location ? ee => new URL(ee, location.origin).href : () => {
      throw new Error("Unable to get absolute URL. Override BABYLON.Tools.GetAbsoluteUrl to a custom implementation for the current context.")
    }, Xe.NoneLogLevel = Ke.e.NoneLogLevel, Xe.MessageLogLevel = Ke.e.MessageLogLevel, Xe.WarningLogLevel = Ke.e.WarningLogLevel, Xe.ErrorLogLevel = Ke.e.ErrorLogLevel, Xe.AllLogLevel = Ke.e.AllLogLevel, Xe.IsWindowObjectExist = Me.m, Xe.PerformanceNoneLogLevel = 0, Xe.PerformanceUserMarkLogLevel = 1, Xe.PerformanceConsoleLogLevel = 2, Xe._NativePerformanceCounterHandles = new Map, Xe.StartPerformanceCounter = ye._StartPerformanceCounterDisabled, Xe.EndPerformanceCounter = ye._EndPerformanceCounterDisabled;
    class Be {
      constructor(ee, ie, He) {
        let ye = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
        this.iterations = ee, this.index = ye - 1, this._done = !1, this._fn = ie, this._successCallback = He
      }
      executeNext() {
        this._done || (this.index + 1 < this.iterations ? (++this.index, this._fn(this)) : this.breakLoop())
      }
      breakLoop() {
        this._done = !0, this._successCallback()
      }
      static Run(ee, ie, He) {
        const ye = new Be(ee, ie, He, arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0);
        return ye.executeNext(), ye
      }
      static SyncAsyncForLoop(ee, ie, He, ye, be) {
        let Me = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0;
        return Be.Run(Math.ceil(ee / ie), (ye => {
          be && be() ? ye.breakLoop() : setTimeout((() => {
            for (let Me = 0; Me < ie; ++Me) {
              const Ke = ye.index * ie + Me;
              if (Ke >= ee) break;
              if (He(Ke), be && be()) {
                ye.breakLoop();
                break
              }
            }
            ye.executeNext()
          }), Me)
        }), ye)
      }
    }
    let Ee = !1;

    function ge() {
      Ee || (Ee = !0, Xe.Mix = pe.m, Xe.IsExponentOfTwo = pe.l, Re.b.FallbackTexture = "data:image/jpg;base64,/9j/4AAQSkZJRgABAQEAYABgAAD/4QBmRXhpZgAATU0AKgAAAAgABAEaAAUAAAABAAAAPgEbAAUAAAABAAAARgEoAAMAAAABAAIAAAExAAIAAAAQAAAATgAAAAAAAABgAAAAAQAAAGAAAAABcGFpbnQubmV0IDQuMC41AP/bAEMABAIDAwMCBAMDAwQEBAQFCQYFBQUFCwgIBgkNCw0NDQsMDA4QFBEODxMPDAwSGBITFRYXFxcOERkbGRYaFBYXFv/bAEMBBAQEBQUFCgYGChYPDA8WFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFv/AABEIAQABAAMBIgACEQEDEQH/xAAfAAABBQEBAQEBAQAAAAAAAAAAAQIDBAUGBwgJCgv/xAC1EAACAQMDAgQDBQUEBAAAAX0BAgMABBEFEiExQQYTUWEHInEUMoGRoQgjQrHBFVLR8CQzYnKCCQoWFxgZGiUmJygpKjQ1Njc4OTpDREVGR0hJSlNUVVZXWFlaY2RlZmdoaWpzdHV2d3h5eoOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4eLj5OXm5+jp6vHy8/T19vf4+fr/xAAfAQADAQEBAQEBAQEBAAAAAAAAAQIDBAUGBwgJCgv/xAC1EQACAQIEBAMEBwUEBAABAncAAQIDEQQFITEGEkFRB2FxEyIygQgUQpGhscEJIzNS8BVictEKFiQ04SXxFxgZGiYnKCkqNTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqCg4SFhoeIiYqSk5SVlpeYmZqio6Slpqeoqaqys7S1tre4ubrCw8TFxsfIycrS09TV1tfY2dri4+Tl5ufo6ery8/T19vf4+fr/2gAMAwEAAhEDEQA/APH6KKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FCiiigD6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++gooooA+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gUKKKKAPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76CiiigD5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BQooooA+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/voKKKKAPl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FCiiigD6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++gooooA+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gUKKKKAPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76CiiigD5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BQooooA+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/voKKKKAPl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FCiiigD6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++gooooA+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gUKKKKAPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76P//Z")
    }
  }
};
Object.freeze(modules);
for (const ee in modules) Object.freeze(modules[ee]);