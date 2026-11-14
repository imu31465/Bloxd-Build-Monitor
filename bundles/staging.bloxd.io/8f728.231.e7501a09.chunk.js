export const id = 231;
export const ids = [231];
export const modules = {
  38153: (cB, Bc, nc) => {
    nc.d(Bc, {
      c: () => rB
    });
    var Vc = nc(37191),
      Ic = nc(35799);
    class rB {
      static Instantiate(cB) {
        if (this.RegisteredExternalClasses && this.RegisteredExternalClasses[cB]) return this.RegisteredExternalClasses[cB];
        const Bc = (0, Ic.b)(cB);
        if (Bc) return Bc;
        Vc.c.Warn(cB + " not found, you may have missed an import.");
        const nc = cB.split(".");
        let rB = "undefined" !== typeof window ? window : "undefined" !== typeof globalThis ? globalThis : this;
        for (let Vc = 0, Ic = nc.length; Vc < Ic; Vc++) rB = rB[nc[Vc]];
        return "function" !== typeof rB ? null : rB
      }
    }
    rB.RegisteredExternalClasses = {}
  },
  37968: (cB, Bc, nc) => {
    nc.d(Bc, {
      c: () => Ic
    });
    var Vc = nc(37937);
    class Ic {
      static get Now() {
        return (0, Vc.k)() && window.performance && window.performance.now ? window.performance.now() : Date.now()
      }
    }
  },
  37992: (cB, Bc, nc) => {
    function Vc(cB) {
      let Bc = 1;
      do {
        Bc *= 2
      } while (Bc < cB);
      return Bc === cB
    }

    function Ic(cB, Bc, nc) {
      return cB * (1 - nc) + Bc * nc
    }

    function rB(cB) {
      const Bc = uc(cB),
        nc = sc(cB);
      return Bc - cB > cB - nc ? nc : Bc
    }

    function uc(cB) {
      return cB--, cB |= cB >> 1, cB |= cB >> 2, cB |= cB >> 4, cB |= cB >> 8, cB |= cB >> 16, ++cB
    }

    function sc(cB) {
      return cB |= cB >> 1, cB |= cB >> 2, cB |= cB >> 4, cB |= cB >> 8, (cB |= cB >> 16) - (cB >> 1)
    }

    function Mc(cB, Bc) {
      let nc;
      switch (arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 2) {
        case 1:
          nc = sc(cB);
          break;
        case 2:
          nc = rB(cB);
          break;
        default:
          nc = uc(cB)
      }
      return Math.min(nc, Bc)
    }
    nc.d(Bc, {
      b: () => sc,
      f: () => Mc,
      g: () => Vc,
      h: () => Ic,
      i: () => rB
    })
  },
  38146: (cB, Bc, nc) => {
    nc.d(Bc, {
      c: () => zB,
      e: () => hc,
      g: () => Sc,
      k: () => yB
    });
    var Vc, Ic = nc(35783),
      rB = nc(37937),
      uc = nc(37191),
      sc = nc(37185),
      Mc = nc(37968),
      Pc = nc(37953),
      qB = nc(38099),
      Oc = nc(35780),
      Tc = nc(38090),
      fc = nc(37963),
      mB = nc(38153),
      ec = nc(36472),
      tB = nc(37992);
    class Sc {
      static get BaseUrl() {
        return Tc.f.BaseUrl
      }
      static set BaseUrl(cB) {
        Tc.f.BaseUrl = cB
      }
      static get CleanUrl() {
        return Tc.f.CleanUrl
      }
      static set CleanUrl(cB) {
        Tc.f.CleanUrl = cB
      }
      static IsAbsoluteUrl(cB) {
        return 0 === cB.indexOf("//") || -1 !== cB.indexOf("://") && (-1 !== cB.indexOf(".") && (-1 !== cB.indexOf("/") && (!(cB.indexOf(":") > cB.indexOf("/")) && (cB.indexOf("://") < cB.indexOf(".") || (0 === cB.indexOf("data:") || 0 === cB.indexOf("blob:"))))))
      }
      static set ScriptBaseUrl(cB) {
        Tc.f.ScriptBaseUrl = cB
      }
      static get ScriptBaseUrl() {
        return Tc.f.ScriptBaseUrl
      }
      static set CDNBaseUrl(cB) {
        Vc.ScriptBaseUrl = cB, Vc.AssetBaseUrl = cB
      }
      static set ScriptPreprocessUrl(cB) {
        Tc.f.ScriptPreprocessUrl = cB
      }
      static get ScriptPreprocessUrl() {
        return Tc.f.ScriptPreprocessUrl
      }
      static get DefaultRetryStrategy() {
        return Tc.f.DefaultRetryStrategy
      }
      static set DefaultRetryStrategy(cB) {
        Tc.f.DefaultRetryStrategy = cB
      }
      static get CorsBehavior() {
        return Tc.f.CorsBehavior
      }
      static set CorsBehavior(cB) {
        Tc.f.CorsBehavior = cB
      }
      static get UseFallbackTexture() {
        return Oc.d.UseFallbackTexture
      }
      static set UseFallbackTexture(cB) {
        Oc.d.UseFallbackTexture = cB
      }
      static get RegisteredExternalClasses() {
        return mB.c.RegisteredExternalClasses
      }
      static set RegisteredExternalClasses(cB) {
        mB.c.RegisteredExternalClasses = cB
      }
      static get fallbackTexture() {
        return Oc.d.FallbackTexture
      }
      static set fallbackTexture(cB) {
        Oc.d.FallbackTexture = cB
      }
      static FetchToRef(cB, Bc, nc, Vc, Ic, rB) {
        const uc = 4 * ((Math.abs(cB) * nc % nc | 0) + (Math.abs(Bc) * Vc % Vc | 0) * nc);
        rB.r = Ic[uc] / 255, rB.g = Ic[uc + 1] / 255, rB.b = Ic[uc + 2] / 255, rB.a = Ic[uc + 3] / 255
      }
      static Mix(cB, Bc, nc) {
        return 0
      }
      static Instantiate(cB) {
        return mB.c.Instantiate(cB)
      }
      static SetImmediate(cB) {
        fc.e.SetImmediate(cB)
      }
      static IsExponentOfTwo(cB) {
        return !0
      }
      static FloatRound(cB) {
        return Math.fround(cB)
      }
      static GetFilename(cB) {
        const Bc = cB.lastIndexOf("/");
        return Bc < 0 ? cB : cB.substring(Bc + 1)
      }
      static GetFolderPath(cB) {
        let Bc = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        const nc = cB.lastIndexOf("/");
        return nc < 0 ? Bc ? cB : "" : cB.substring(0, nc + 1)
      }
      static ToDegrees(cB) {
        return 180 * cB / Math.PI
      }
      static ToRadians(cB) {
        return cB * Math.PI / 180
      }
      static SmoothAngleChange(cB, Bc) {
        let nc = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : .9;
        const Vc = this.ToRadians(cB),
          Ic = this.ToRadians(Bc);
        return this.ToDegrees(Math.atan2((1 - nc) * Math.sin(Ic) + nc * Math.sin(Vc), (1 - nc) * Math.cos(Ic) + nc * Math.cos(Vc)))
      }
      static MakeArray(cB, Bc) {
        return !0 === Bc || void 0 !== cB && null != cB ? Array.isArray(cB) ? cB : [cB] : null
      }
      static GetPointerPrefix(cB) {
        return (0, rB.k)() && !window.PointerEvent ? "mouse" : "pointer"
      }
      static SetCorsBehavior(cB, Bc) {
        (0, Tc.y)(cB, Bc)
      }
      static SetReferrerPolicyBehavior(cB, Bc) {
        Bc.referrerPolicy = cB
      }
      static get PreprocessUrl() {
        return Tc.f.PreprocessUrl
      }
      static set PreprocessUrl(cB) {
        Tc.f.PreprocessUrl = cB
      }
      static LoadImage(cB, Bc, nc, Vc, Ic, rB) {
        return (0, Tc.p)(cB, Bc, nc, Vc, Ic, rB)
      }
      static LoadFile(cB, Bc, nc, Vc, Ic, rB) {
        return (0, Tc.n)(cB, Bc, nc, Vc, Ic, rB)
      }
      static async LoadFileAsync(cB) {
        let Bc = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        return await new Promise(((nc, Vc) => {
          (0, Tc.n)(cB, (cB => {
            nc(cB)
          }), void 0, void 0, Bc, ((cB, Bc) => {
            Vc(Bc)
          }))
        }))
      }
      static GetAssetUrl(cB) {
        if (!cB) return "";
        if (Vc.AssetBaseUrl && cB.startsWith(Vc._DefaultAssetsUrl)) {
          const Bc = Vc.AssetBaseUrl.endsWith("/") ? Vc.AssetBaseUrl.slice(0, -1) : Vc.AssetBaseUrl;
          return cB.replace(Vc._DefaultAssetsUrl, Bc)
        }
        return cB
      }
      static GetBabylonScriptURL(cB, Bc) {
        if (!cB) return "";
        if (cB.startsWith(Vc._DefaultCdnUrl))
          if (Vc.ScriptBaseUrl) {
            const Bc = Vc.ScriptBaseUrl.endsWith("/") ? Vc.ScriptBaseUrl.slice(0, -1) : Vc.ScriptBaseUrl;
            cB = cB.replace(Vc._DefaultCdnUrl, Bc)
          } else if (Vc._CdnVersion) {
          const Bc = `${Vc._DefaultCdnUrl}/v${Vc._CdnVersion}`;
          cB.startsWith(Bc) || (cB = cB.replace(Vc._DefaultCdnUrl, Bc))
        }
        return cB = Vc.ScriptPreprocessUrl(cB), Bc && !Vc.IsAbsoluteUrl(cB) && (cB = Vc.GetAbsoluteUrl(cB)), cB
      }
      static LoadBabylonScript(cB, Bc, nc, Ic) {
        cB = Vc.GetBabylonScriptURL(cB), Vc.LoadScript(cB, Bc, nc)
      }
      static async LoadBabylonScriptAsync(cB) {
        return cB = Vc.GetBabylonScriptURL(cB), await Vc.LoadScriptAsync(cB)
      }
      static _LoadScriptNative(cB, Bc, nc, Ic) {
        if (_native) {
          if (arguments.length > 4 && void 0 !== arguments[4] && arguments[4]) {
            const cB = "Loading a script as an ES module is not supported in Babylon Native";
            return void nc?.(cB, new Error(cB))
          }
          Vc.LoadFile(cB, (cB => {
            try {
              Function(cB).apply(null), Bc && Bc()
            } catch (Vc) {
              nc && nc("LoadScript Error", Vc)
            }
          }), void 0, void 0, !1, ((cB, Bc) => {
            nc && nc("LoadScript Error", Bc)
          }))
        }
      }
      static _LoadScriptWeb(cB, Bc, nc, Vc) {
        let Ic = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
        if ("function" === typeof importScripts) {
          try {
            importScripts(cB), Bc && Bc()
          } catch (Mc) {
            nc?.(`Unable to load script '${cB}' in worker`, Mc)
          }
          return
        }
        if (!(0, rB.k)()) return void nc?.(`Cannot load script '${cB}' outside of a window or a worker`);
        const uc = document.getElementsByTagName("head")[0],
          sc = document.createElement("script");
        Ic ? (sc.setAttribute("type", "module"), sc.innerText = cB) : (sc.setAttribute("type", "text/javascript"), sc.setAttribute("src", cB)), Vc && (sc.id = Vc), sc.onload = () => {
          Bc && Bc()
        }, sc.onerror = Bc => {
          nc && nc(`Unable to load script '${cB}'`, Bc)
        }, uc.appendChild(sc)
      }
      static async LoadScriptAsync(cB, Bc) {
        return await new Promise(((nc, Vc) => {
          this.LoadScript(cB, (() => {
            nc()
          }), ((cB, Bc) => {
            Vc(Bc || new Error(cB))
          }), Bc)
        }))
      }
      static ReadFileAsDataURL(cB, Bc, nc) {
        const Vc = new FileReader,
          rB = {
            onCompleteObservable: new Ic.c,
            abort: () => Vc.abort()
          };
        return Vc.onloadend = () => {
          rB.onCompleteObservable.notifyObservers(rB)
        }, Vc.onload = cB => {
          Bc(cB.target.result)
        }, Vc.onprogress = nc, Vc.readAsDataURL(cB), rB
      }
      static ReadFile(cB, Bc, nc, Vc, Ic) {
        return (0, Tc.q)(cB, Bc, nc, Vc, Ic)
      }
      static FileAsURL(cB) {
        const Bc = new Blob([cB]);
        return window.URL.createObjectURL(Bc)
      }
      static Format(cB) {
        let Bc = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 2;
        return cB.toFixed(Bc)
      }
      static DeepCopy(cB, Bc, nc, Vc) {
        sc.b.DeepCopy(cB, Bc, nc, Vc)
      }
      static IsEmpty(cB) {
        for (const Bc in cB)
          if (Object.prototype.hasOwnProperty.call(cB, Bc)) return !1;
        return !0
      }
      static RegisterTopRootEvents(cB, Bc) {
        for (let Vc = 0; Vc < Bc.length; Vc++) {
          const Ic = Bc[Vc];
          cB.addEventListener(Ic.name, Ic.handler, !1);
          try {
            window.parent && window.parent.addEventListener(Ic.name, Ic.handler, !1)
          } catch (nc) {}
        }
      }
      static UnregisterTopRootEvents(cB, Bc) {
        for (let Vc = 0; Vc < Bc.length; Vc++) {
          const Ic = Bc[Vc];
          cB.removeEventListener(Ic.name, Ic.handler);
          try {
            cB.parent && cB.parent.removeEventListener(Ic.name, Ic.handler)
          } catch (nc) {}
        }
      }
      static async DumpFramebuffer(cB, Bc, nc, Vc) {
        throw (0, Pc.k)("DumpTools")
      }
      static DumpData(cB, Bc, nc, Vc) {
        throw (0, Pc.k)("DumpTools")
      }
      static async DumpDataAsync(cB, Bc, nc) {
        throw (0, Pc.k)("DumpTools")
      }
      static _IsOffScreenCanvas(cB) {
        return void 0 !== cB.convertToBlob
      }
      static ToBlob(cB, Bc) {
        let nc = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "image/png",
          Ic = arguments.length > 3 ? arguments[3] : void 0;
        Vc._IsOffScreenCanvas(cB) || cB.toBlob || (cB.toBlob = function(cB, Bc, nc) {
          setTimeout((() => {
            const Vc = atob(this.toDataURL(Bc, nc).split(",")[1]),
              Ic = Vc.length,
              rB = new Uint8Array(Ic);
            for (let cB = 0; cB < Ic; cB++) rB[cB] = Vc.charCodeAt(cB);
            cB(new Blob([rB]))
          }))
        }), Vc._IsOffScreenCanvas(cB) ? cB.convertToBlob({
          type: nc,
          quality: Ic
        }).then((cB => Bc(cB))) : cB.toBlob((function(cB) {
          Bc(cB)
        }), nc, Ic)
      }
      static DownloadBlob(cB, Bc) {
        if ("download" in document.createElement("a")) {
          if (!Bc) {
            const cB = new Date;
            Bc = "screenshot_" + ((cB.getFullYear() + "-" + (cB.getMonth() + 1)).slice(2) + "-" + cB.getDate() + "_" + cB.getHours() + "-" + ("0" + cB.getMinutes()).slice(-2)) + ".png"
          }
          Vc.Download(cB, Bc)
        } else if (cB && "undefined" !== typeof URL) {
          const Bc = URL.createObjectURL(cB),
            nc = window.open("");
          if (!nc) return;
          const Vc = nc.document.createElement("img");
          Vc.onload = function() {
            URL.revokeObjectURL(Bc)
          }, Vc.src = Bc, nc.document.body.appendChild(Vc)
        }
      }
      static EncodeScreenshotCanvasData(cB, Bc) {
        let nc = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "image/png",
          Ic = arguments.length > 3 ? arguments[3] : void 0,
          rB = arguments.length > 4 ? arguments[4] : void 0;
        if ("string" !== typeof Ic && Bc) {
          if (Bc) {
            if (Vc._IsOffScreenCanvas(cB)) return void cB.convertToBlob({
              type: nc,
              quality: rB
            }).then((cB => {
              const nc = new FileReader;
              nc.readAsDataURL(cB), nc.onloadend = () => {
                const cB = nc.result;
                Bc(cB)
              }
            }));
            const Ic = cB.toDataURL(nc, rB);
            Bc(Ic)
          }
        } else this.ToBlob(cB, (function(cB) {
          cB && Vc.DownloadBlob(cB, Ic), Bc && Bc("")
        }), nc, rB)
      }
      static Download(cB, Bc) {
        if ("undefined" === typeof URL) return;
        const nc = window.URL.createObjectURL(cB),
          Vc = document.createElement("a");
        document.body.appendChild(Vc), Vc.style.display = "none", Vc.href = nc, Vc.download = Bc, Vc.addEventListener("click", (() => {
          Vc.parentElement && Vc.parentElement.removeChild(Vc)
        })), Vc.click(), window.URL.revokeObjectURL(nc)
      }
      static BackCompatCameraNoPreventDefault(cB) {
        return "boolean" === typeof cB[0] ? cB[0] : "boolean" === typeof cB[1] && cB[1]
      }
      static CreateScreenshot(cB, Bc, nc, Vc) {
        throw (0, Pc.k)("ScreenshotTools")
      }
      static async CreateScreenshotAsync(cB, Bc, nc) {
        throw (0, Pc.k)("ScreenshotTools")
      }
      static CreateScreenshotUsingRenderTarget(cB, Bc, nc, Vc) {
        throw (0, Pc.k)("ScreenshotTools")
      }
      static async CreateScreenshotUsingRenderTargetAsync(cB, Bc, nc) {
        throw (0, Pc.k)("ScreenshotTools")
      }
      static RandomId() {
        return (0, ec.d)()
      }
      static IsBase64(cB) {
        return (0, Tc.l)(cB)
      }
      static DecodeBase64(cB) {
        return (0, Tc.d)(cB)
      }
      static get errorsCount() {
        return uc.c.errorsCount
      }
      static Log(cB) {
        uc.c.Log(cB)
      }
      static Warn(cB) {
        uc.c.Warn(cB)
      }
      static Error(cB) {
        uc.c.Error(cB)
      }
      static get LogCache() {
        return uc.c.LogCache
      }
      static ClearLogCache() {
        uc.c.ClearLogCache()
      }
      static set LogLevels(cB) {
        uc.c.LogLevels = cB
      }
      static set PerformanceLogLevel(cB) {
        (cB & Vc.PerformanceUserMarkLogLevel) !== Vc.PerformanceUserMarkLogLevel ? (cB & Vc.PerformanceConsoleLogLevel) !== Vc.PerformanceConsoleLogLevel ? (Vc.StartPerformanceCounter = Vc._StartPerformanceCounterDisabled, Vc.EndPerformanceCounter = Vc._EndPerformanceCounterDisabled, _native?.disablePerformanceLogging?.()) : _native?.enablePerformanceLogging ? (_native.enablePerformanceLogging(2), Vc.StartPerformanceCounter = Vc._StartMarkNative, Vc.EndPerformanceCounter = Vc._EndMarkNative) : (Vc.StartPerformanceCounter = Vc._StartPerformanceConsole, Vc.EndPerformanceCounter = Vc._EndPerformanceConsole) : _native?.enablePerformanceLogging ? (_native.enablePerformanceLogging(1), Vc.StartPerformanceCounter = Vc._StartMarkNative, Vc.EndPerformanceCounter = Vc._EndMarkNative) : (Vc.StartPerformanceCounter = Vc._StartUserMark, Vc.EndPerformanceCounter = Vc._EndUserMark)
      }
      static _StartPerformanceCounterDisabled(cB, Bc) {}
      static _EndPerformanceCounterDisabled(cB, Bc) {}
      static _StartUserMark(cB) {
        let Bc = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        if (!Vc._Performance) {
          if (!(0, rB.k)()) return;
          Vc._Performance = window.performance
        }
        Bc && Vc._Performance.mark && Vc._Performance.mark(cB + "-Begin")
      }
      static _EndUserMark(cB) {
        (!(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1]) && Vc._Performance.mark && (Vc._Performance.mark(cB + "-End"), Vc._Performance.measure(cB, cB + "-Begin", cB + "-End"))
      }
      static _StartPerformanceConsole(cB) {
        let Bc = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        Bc && (Vc._StartUserMark(cB, Bc), console.time && console.time(cB))
      }
      static _EndPerformanceConsole(cB) {
        let Bc = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        Bc && (Vc._EndUserMark(cB, Bc), console.timeEnd(cB))
      }
      static _StartMarkNative(cB) {
        if ((!(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1]) && _native?.startPerformanceCounter)
          if (Vc._NativePerformanceCounterHandles.has(cB)) Vc.Warn(`Performance counter with name ${cB} is already started.`);
          else {
            const Bc = _native.startPerformanceCounter(cB);
            Vc._NativePerformanceCounterHandles.set(cB, Bc)
          }
      }
      static _EndMarkNative(cB) {
        if ((!(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1]) && _native?.endPerformanceCounter) {
          const Bc = Vc._NativePerformanceCounterHandles.get(cB);
          Bc ? (_native.endPerformanceCounter(Bc), Vc._NativePerformanceCounterHandles.delete(cB)) : Vc.Warn(`Performance counter with name ${cB} was not started.`)
        }
      }
      static get Now() {
        return Mc.c.Now
      }
      static GetClassName(cB) {
        let Bc = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          nc = null;
        if (!Bc && cB.getClassName) nc = cB.getClassName();
        else {
          if (cB instanceof Object) {
            nc = (Bc ? cB : Object.getPrototypeOf(cB)).constructor.__bjsclassName__
          }
          nc || (nc = typeof cB)
        }
        return nc
      }
      static First(cB, Bc) {
        for (const nc of cB)
          if (Bc(nc)) return nc;
        return null
      }
      static getFullClassName(cB) {
        let Bc = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          nc = null,
          Vc = null;
        if (!Bc && cB.getClassName) nc = cB.getClassName();
        else {
          if (cB instanceof Object) {
            const Ic = Bc ? cB : Object.getPrototypeOf(cB);
            nc = Ic.constructor.__bjsclassName__, Vc = Ic.constructor.__bjsmoduleName__
          }
          nc || (nc = typeof cB)
        }
        return nc ? (null != Vc ? Vc + "." : "") + nc : null
      }
      static async DelayAsync(cB) {
        await new Promise((Bc => {
          setTimeout((() => {
            Bc()
          }), cB)
        }))
      }
      static IsSafari() {
        return !!(0, rB.h)() && /^((?!chrome|android).)*safari/i.test(navigator.userAgent)
      }
    }

    function yB(cB, Bc) {
      return nc => {
        nc.__bjsclassName__ = cB, nc.__bjsmoduleName__ = null != Bc ? Bc : null
      }
    }
    Vc = Sc, Sc.AssetBaseUrl = "", Sc.UseCustomRequestHeaders = !1, Sc.CustomRequestHeaders = qB.c.CustomRequestHeaders, Sc.GetDOMTextContent = rB.d, Sc._DefaultCdnUrl = "https://cdn.babylonjs.com", Sc._CdnVersion = "9.28.0", Sc._DefaultAssetsUrl = "https://assets.babylonjs.com/core", Sc.LoadScript = "undefined" === typeof _native ? Vc._LoadScriptWeb : Vc._LoadScriptNative, Sc.GetAbsoluteUrl = "object" === typeof document ? cB => {
      const Bc = document.createElement("a");
      return Bc.href = cB, Bc.href
    } : "function" === typeof URL && "object" === typeof location ? cB => new URL(cB, location.origin).href : () => {
      throw new Error("Unable to get absolute URL. Override BABYLON.Tools.GetAbsoluteUrl to a custom implementation for the current context.")
    }, Sc.NoneLogLevel = uc.c.NoneLogLevel, Sc.MessageLogLevel = uc.c.MessageLogLevel, Sc.WarningLogLevel = uc.c.WarningLogLevel, Sc.ErrorLogLevel = uc.c.ErrorLogLevel, Sc.AllLogLevel = uc.c.AllLogLevel, Sc.IsWindowObjectExist = rB.k, Sc.PerformanceNoneLogLevel = 0, Sc.PerformanceUserMarkLogLevel = 1, Sc.PerformanceConsoleLogLevel = 2, Sc._NativePerformanceCounterHandles = new Map, Sc.StartPerformanceCounter = Vc._StartPerformanceCounterDisabled, Sc.EndPerformanceCounter = Vc._EndPerformanceCounterDisabled;
    class zB {
      constructor(cB, Bc, nc) {
        let Vc = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
        this.iterations = cB, this.index = Vc - 1, this._done = !1, this._fn = Bc, this._successCallback = nc
      }
      executeNext() {
        this._done || (this.index + 1 < this.iterations ? (++this.index, this._fn(this)) : this.breakLoop())
      }
      breakLoop() {
        this._done = !0, this._successCallback()
      }
      static Run(cB, Bc, nc) {
        const Vc = new zB(cB, Bc, nc, arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0);
        return Vc.executeNext(), Vc
      }
      static SyncAsyncForLoop(cB, Bc, nc, Vc, Ic) {
        let rB = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0;
        return zB.Run(Math.ceil(cB / Bc), (Vc => {
          Ic && Ic() ? Vc.breakLoop() : setTimeout((() => {
            for (let rB = 0; rB < Bc; ++rB) {
              const uc = Vc.index * Bc + rB;
              if (uc >= cB) break;
              if (nc(uc), Ic && Ic()) {
                Vc.breakLoop();
                break
              }
            }
            Vc.executeNext()
          }), rB)
        }), Vc)
      }
    }
    let pc = !1;

    function hc() {
      pc || (pc = !0, Sc.Mix = tB.h, Sc.IsExponentOfTwo = tB.g, Oc.d.FallbackTexture = "data:image/jpg;base64,/9j/4AAQSkZJRgABAQEAYABgAAD/4QBmRXhpZgAATU0AKgAAAAgABAEaAAUAAAABAAAAPgEbAAUAAAABAAAARgEoAAMAAAABAAIAAAExAAIAAAAQAAAATgAAAAAAAABgAAAAAQAAAGAAAAABcGFpbnQubmV0IDQuMC41AP/bAEMABAIDAwMCBAMDAwQEBAQFCQYFBQUFCwgIBgkNCw0NDQsMDA4QFBEODxMPDAwSGBITFRYXFxcOERkbGRYaFBYXFv/bAEMBBAQEBQUFCgYGChYPDA8WFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFv/AABEIAQABAAMBIgACEQEDEQH/xAAfAAABBQEBAQEBAQAAAAAAAAAAAQIDBAUGBwgJCgv/xAC1EAACAQMDAgQDBQUEBAAAAX0BAgMABBEFEiExQQYTUWEHInEUMoGRoQgjQrHBFVLR8CQzYnKCCQoWFxgZGiUmJygpKjQ1Njc4OTpDREVGR0hJSlNUVVZXWFlaY2RlZmdoaWpzdHV2d3h5eoOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4eLj5OXm5+jp6vHy8/T19vf4+fr/xAAfAQADAQEBAQEBAQEBAAAAAAAAAQIDBAUGBwgJCgv/xAC1EQACAQIEBAMEBwUEBAABAncAAQIDEQQFITEGEkFRB2FxEyIygQgUQpGhscEJIzNS8BVictEKFiQ04SXxFxgZGiYnKCkqNTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqCg4SFhoeIiYqSk5SVlpeYmZqio6Slpqeoqaqys7S1tre4ubrCw8TFxsfIycrS09TV1tfY2dri4+Tl5ufo6ery8/T19vf4+fr/2gAMAwEAAhEDEQA/APH6KKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FCiiigD6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++gooooA+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gUKKKKAPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76CiiigD5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BQooooA+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/voKKKKAPl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FCiiigD6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++gooooA+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gUKKKKAPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76CiiigD5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BQooooA+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/voKKKKAPl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FCiiigD6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++gooooA+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gUKKKKAPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76P//Z")
    }
  }
};
Object.freeze(modules);
for (const cB in modules) Object.freeze(modules[cB]);