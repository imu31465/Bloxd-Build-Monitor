export const id = 245;
export const ids = [245];
export const modules = {
  39265: (zz, uz, bz) => {
    bz.d(uz, {
      d: () => iz
    });
    var Ez = bz(38060),
      nz = bz(36564);
    class iz {
      static Instantiate(zz) {
        if (this.RegisteredExternalClasses && this.RegisteredExternalClasses[zz]) return this.RegisteredExternalClasses[zz];
        const uz = (0, nz.b)(zz);
        if (uz) return uz;
        Ez.e.Warn(zz + " not found, you may have missed an import.");
        const bz = zz.split(".");
        let iz = "undefined" !== typeof window ? window : "undefined" !== typeof globalThis ? globalThis : this;
        for (let Ez = 0, nz = bz.length; Ez < nz; Ez++) iz = iz[bz[Ez]];
        return "function" !== typeof iz ? null : iz
      }
    }
    iz.RegisteredExternalClasses = {}
  },
  39085: (zz, uz, bz) => {
    bz.d(uz, {
      b: () => nz
    });
    var Ez = bz(39043);
    class nz {
      static get Now() {
        return (0, Ez.i)() && window.performance && window.performance.now ? window.performance.now() : Date.now()
      }
    }
  },
  39118: (zz, uz, bz) => {
    function Ez(zz) {
      let uz = 1;
      do {
        uz *= 2
      } while (uz < zz);
      return uz === zz
    }

    function nz(zz, uz, bz) {
      return zz * (1 - bz) + uz * bz
    }

    function iz(zz) {
      const uz = lz(zz),
        bz = Mz(zz);
      return uz - zz > zz - bz ? bz : uz
    }

    function lz(zz) {
      return zz--, zz |= zz >> 1, zz |= zz >> 2, zz |= zz >> 4, zz |= zz >> 8, zz |= zz >> 16, ++zz
    }

    function Mz(zz) {
      return zz |= zz >> 1, zz |= zz >> 2, zz |= zz >> 4, zz |= zz >> 8, (zz |= zz >> 16) - (zz >> 1)
    }

    function tz(zz, uz) {
      let bz;
      switch (arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 2) {
        case 1:
          bz = Mz(zz);
          break;
        case 2:
          bz = iz(zz);
          break;
        default:
          bz = lz(zz)
      }
      return Math.min(bz, uz)
    }
    bz.d(uz, {
      d: () => Mz,
      e: () => tz,
      i: () => Ez,
      k: () => nz,
      l: () => iz
    })
  },
  39258: (zz, uz, bz) => {
    bz.d(uz, {
      e: () => fz,
      g: () => rz,
      h: () => wz,
      k: () => Xz
    });
    var Ez, nz = bz(36547),
      iz = bz(39043),
      lz = bz(38060),
      Mz = bz(38054),
      tz = bz(39085),
      Hz = bz(39061),
      Oz = bz(39208),
      pz = bz(36543),
      dz = bz(39202),
      Fz = bz(39071),
      Zz = bz(39265),
      Rz = bz(37335),
      Kz = bz(39118);
    class wz {
      static get BaseUrl() {
        return dz.f.BaseUrl
      }
      static set BaseUrl(zz) {
        dz.f.BaseUrl = zz
      }
      static get CleanUrl() {
        return dz.f.CleanUrl
      }
      static set CleanUrl(zz) {
        dz.f.CleanUrl = zz
      }
      static IsAbsoluteUrl(zz) {
        return 0 === zz.indexOf("//") || -1 !== zz.indexOf("://") && (-1 !== zz.indexOf(".") && (-1 !== zz.indexOf("/") && (!(zz.indexOf(":") > zz.indexOf("/")) && (zz.indexOf("://") < zz.indexOf(".") || (0 === zz.indexOf("data:") || 0 === zz.indexOf("blob:"))))))
      }
      static set ScriptBaseUrl(zz) {
        dz.f.ScriptBaseUrl = zz
      }
      static get ScriptBaseUrl() {
        return dz.f.ScriptBaseUrl
      }
      static set CDNBaseUrl(zz) {
        Ez.ScriptBaseUrl = zz, Ez.AssetBaseUrl = zz
      }
      static set ScriptPreprocessUrl(zz) {
        dz.f.ScriptPreprocessUrl = zz
      }
      static get ScriptPreprocessUrl() {
        return dz.f.ScriptPreprocessUrl
      }
      static get DefaultRetryStrategy() {
        return dz.f.DefaultRetryStrategy
      }
      static set DefaultRetryStrategy(zz) {
        dz.f.DefaultRetryStrategy = zz
      }
      static get CorsBehavior() {
        return dz.f.CorsBehavior
      }
      static set CorsBehavior(zz) {
        dz.f.CorsBehavior = zz
      }
      static get UseFallbackTexture() {
        return pz.d.UseFallbackTexture
      }
      static set UseFallbackTexture(zz) {
        pz.d.UseFallbackTexture = zz
      }
      static get RegisteredExternalClasses() {
        return Zz.d.RegisteredExternalClasses
      }
      static set RegisteredExternalClasses(zz) {
        Zz.d.RegisteredExternalClasses = zz
      }
      static get fallbackTexture() {
        return pz.d.FallbackTexture
      }
      static set fallbackTexture(zz) {
        pz.d.FallbackTexture = zz
      }
      static FetchToRef(zz, uz, bz, Ez, nz, iz) {
        const lz = 4 * ((Math.abs(zz) * bz % bz | 0) + (Math.abs(uz) * Ez % Ez | 0) * bz);
        iz.r = nz[lz] / 255, iz.g = nz[lz + 1] / 255, iz.b = nz[lz + 2] / 255, iz.a = nz[lz + 3] / 255
      }
      static Mix(zz, uz, bz) {
        return 0
      }
      static Instantiate(zz) {
        return Zz.d.Instantiate(zz)
      }
      static SetImmediate(zz) {
        Fz.c.SetImmediate(zz)
      }
      static IsExponentOfTwo(zz) {
        return !0
      }
      static FloatRound(zz) {
        return Math.fround(zz)
      }
      static GetFilename(zz) {
        const uz = zz.lastIndexOf("/");
        return uz < 0 ? zz : zz.substring(uz + 1)
      }
      static GetFolderPath(zz) {
        let uz = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        const bz = zz.lastIndexOf("/");
        return bz < 0 ? uz ? zz : "" : zz.substring(0, bz + 1)
      }
      static ToDegrees(zz) {
        return 180 * zz / Math.PI
      }
      static ToRadians(zz) {
        return zz * Math.PI / 180
      }
      static SmoothAngleChange(zz, uz) {
        let bz = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : .9;
        const Ez = this.ToRadians(zz),
          nz = this.ToRadians(uz);
        return this.ToDegrees(Math.atan2((1 - bz) * Math.sin(nz) + bz * Math.sin(Ez), (1 - bz) * Math.cos(nz) + bz * Math.cos(Ez)))
      }
      static MakeArray(zz, uz) {
        return !0 === uz || void 0 !== zz && null != zz ? Array.isArray(zz) ? zz : [zz] : null
      }
      static GetPointerPrefix(zz) {
        return (0, iz.i)() && !window.PointerEvent ? "mouse" : "pointer"
      }
      static SetCorsBehavior(zz, uz) {
        (0, dz.B)(zz, uz)
      }
      static SetReferrerPolicyBehavior(zz, uz) {
        uz.referrerPolicy = zz
      }
      static get PreprocessUrl() {
        return dz.f.PreprocessUrl
      }
      static set PreprocessUrl(zz) {
        dz.f.PreprocessUrl = zz
      }
      static LoadImage(zz, uz, bz, Ez, nz, iz) {
        return (0, dz.t)(zz, uz, bz, Ez, nz, iz)
      }
      static LoadFile(zz, uz, bz, Ez, nz, iz) {
        return (0, dz.r)(zz, uz, bz, Ez, nz, iz)
      }
      static async LoadFileAsync(zz) {
        let uz = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        return await new Promise(((bz, Ez) => {
          (0, dz.r)(zz, (zz => {
            bz(zz)
          }), void 0, void 0, uz, ((zz, uz) => {
            Ez(uz)
          }))
        }))
      }
      static GetAssetUrl(zz) {
        if (!zz) return "";
        if (Ez.AssetBaseUrl && zz.startsWith(Ez._DefaultAssetsUrl)) {
          const uz = Ez.AssetBaseUrl.endsWith("/") ? Ez.AssetBaseUrl.slice(0, -1) : Ez.AssetBaseUrl;
          return zz.replace(Ez._DefaultAssetsUrl, uz)
        }
        return zz
      }
      static GetBabylonScriptURL(zz, uz) {
        if (!zz) return "";
        if (zz.startsWith(Ez._DefaultCdnUrl))
          if (Ez.ScriptBaseUrl) {
            const uz = Ez.ScriptBaseUrl.endsWith("/") ? Ez.ScriptBaseUrl.slice(0, -1) : Ez.ScriptBaseUrl;
            zz = zz.replace(Ez._DefaultCdnUrl, uz)
          } else if (Ez._CdnVersion) {
          const uz = `${Ez._DefaultCdnUrl}/v${Ez._CdnVersion}`;
          zz.startsWith(uz) || (zz = zz.replace(Ez._DefaultCdnUrl, uz))
        }
        return zz = Ez.ScriptPreprocessUrl(zz), uz && !Ez.IsAbsoluteUrl(zz) && (zz = Ez.GetAbsoluteUrl(zz)), zz
      }
      static LoadBabylonScript(zz, uz, bz, nz) {
        zz = Ez.GetBabylonScriptURL(zz), Ez.LoadScript(zz, uz, bz)
      }
      static async LoadBabylonScriptAsync(zz) {
        return zz = Ez.GetBabylonScriptURL(zz), await Ez.LoadScriptAsync(zz)
      }
      static _LoadScriptNative(zz, uz, bz, nz) {
        if (_native) {
          if (arguments.length > 4 && void 0 !== arguments[4] && arguments[4]) {
            const zz = "Loading a script as an ES module is not supported in Babylon Native";
            return void bz?.(zz, new Error(zz))
          }
          Ez.LoadFile(zz, (zz => {
            try {
              Function(zz).apply(null), uz && uz()
            } catch (Ez) {
              bz && bz("LoadScript Error", Ez)
            }
          }), void 0, void 0, !1, ((zz, uz) => {
            bz && bz("LoadScript Error", uz)
          }))
        }
      }
      static _LoadScriptWeb(zz, uz, bz, Ez) {
        let nz = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
        if ("function" === typeof importScripts) {
          try {
            importScripts(zz), uz && uz()
          } catch (tz) {
            bz?.(`Unable to load script '${zz}' in worker`, tz)
          }
          return
        }
        if (!(0, iz.i)()) return void bz?.(`Cannot load script '${zz}' outside of a window or a worker`);
        const lz = document.getElementsByTagName("head")[0],
          Mz = document.createElement("script");
        nz ? (Mz.setAttribute("type", "module"), Mz.innerText = zz) : (Mz.setAttribute("type", "text/javascript"), Mz.setAttribute("src", zz)), Ez && (Mz.id = Ez), Mz.onload = () => {
          uz && uz()
        }, Mz.onerror = uz => {
          bz && bz(`Unable to load script '${zz}'`, uz)
        }, lz.appendChild(Mz)
      }
      static async LoadScriptAsync(zz, uz) {
        return await new Promise(((bz, Ez) => {
          this.LoadScript(zz, (() => {
            bz()
          }), ((zz, uz) => {
            Ez(uz || new Error(zz))
          }), uz)
        }))
      }
      static ReadFileAsDataURL(zz, uz, bz) {
        const Ez = new FileReader,
          iz = {
            onCompleteObservable: new nz.b,
            abort: () => Ez.abort()
          };
        return Ez.onloadend = () => {
          iz.onCompleteObservable.notifyObservers(iz)
        }, Ez.onload = zz => {
          uz(zz.target.result)
        }, Ez.onprogress = bz, Ez.readAsDataURL(zz), iz
      }
      static ReadFile(zz, uz, bz, Ez, nz) {
        return (0, dz.v)(zz, uz, bz, Ez, nz)
      }
      static FileAsURL(zz) {
        const uz = new Blob([zz]);
        return window.URL.createObjectURL(uz)
      }
      static Format(zz) {
        let uz = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 2;
        return zz.toFixed(uz)
      }
      static DeepCopy(zz, uz, bz, Ez) {
        Mz.b.DeepCopy(zz, uz, bz, Ez)
      }
      static IsEmpty(zz) {
        for (const uz in zz)
          if (Object.prototype.hasOwnProperty.call(zz, uz)) return !1;
        return !0
      }
      static RegisterTopRootEvents(zz, uz) {
        for (let Ez = 0; Ez < uz.length; Ez++) {
          const nz = uz[Ez];
          zz.addEventListener(nz.name, nz.handler, !1);
          try {
            window.parent && window.parent.addEventListener(nz.name, nz.handler, !1)
          } catch (bz) {}
        }
      }
      static UnregisterTopRootEvents(zz, uz) {
        for (let Ez = 0; Ez < uz.length; Ez++) {
          const nz = uz[Ez];
          zz.removeEventListener(nz.name, nz.handler);
          try {
            zz.parent && zz.parent.removeEventListener(nz.name, nz.handler)
          } catch (bz) {}
        }
      }
      static async DumpFramebuffer(zz, uz, bz, Ez) {
        throw (0, Hz.l)("DumpTools")
      }
      static DumpData(zz, uz, bz, Ez) {
        throw (0, Hz.l)("DumpTools")
      }
      static async DumpDataAsync(zz, uz, bz) {
        throw (0, Hz.l)("DumpTools")
      }
      static _IsOffScreenCanvas(zz) {
        return void 0 !== zz.convertToBlob
      }
      static ToBlob(zz, uz) {
        let bz = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "image/png",
          nz = arguments.length > 3 ? arguments[3] : void 0;
        Ez._IsOffScreenCanvas(zz) || zz.toBlob || (zz.toBlob = function(zz, uz, bz) {
          setTimeout((() => {
            const Ez = atob(this.toDataURL(uz, bz).split(",")[1]),
              nz = Ez.length,
              iz = new Uint8Array(nz);
            for (let zz = 0; zz < nz; zz++) iz[zz] = Ez.charCodeAt(zz);
            zz(new Blob([iz]))
          }))
        }), Ez._IsOffScreenCanvas(zz) ? zz.convertToBlob({
          type: bz,
          quality: nz
        }).then((zz => uz(zz))) : zz.toBlob((function(zz) {
          uz(zz)
        }), bz, nz)
      }
      static DownloadBlob(zz, uz) {
        if ("download" in document.createElement("a")) {
          if (!uz) {
            const zz = new Date;
            uz = "screenshot_" + ((zz.getFullYear() + "-" + (zz.getMonth() + 1)).slice(2) + "-" + zz.getDate() + "_" + zz.getHours() + "-" + ("0" + zz.getMinutes()).slice(-2)) + ".png"
          }
          Ez.Download(zz, uz)
        } else if (zz && "undefined" !== typeof URL) {
          const uz = URL.createObjectURL(zz),
            bz = window.open("");
          if (!bz) return;
          const Ez = bz.document.createElement("img");
          Ez.onload = function() {
            URL.revokeObjectURL(uz)
          }, Ez.src = uz, bz.document.body.appendChild(Ez)
        }
      }
      static EncodeScreenshotCanvasData(zz, uz) {
        let bz = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "image/png",
          nz = arguments.length > 3 ? arguments[3] : void 0,
          iz = arguments.length > 4 ? arguments[4] : void 0;
        if ("string" !== typeof nz && uz) {
          if (uz) {
            if (Ez._IsOffScreenCanvas(zz)) return void zz.convertToBlob({
              type: bz,
              quality: iz
            }).then((zz => {
              const bz = new FileReader;
              bz.readAsDataURL(zz), bz.onloadend = () => {
                const zz = bz.result;
                uz(zz)
              }
            }));
            const nz = zz.toDataURL(bz, iz);
            uz(nz)
          }
        } else this.ToBlob(zz, (function(zz) {
          zz && Ez.DownloadBlob(zz, nz), uz && uz("")
        }), bz, iz)
      }
      static Download(zz, uz) {
        if ("undefined" === typeof URL) return;
        const bz = window.URL.createObjectURL(zz),
          Ez = document.createElement("a");
        document.body.appendChild(Ez), Ez.style.display = "none", Ez.href = bz, Ez.download = uz, Ez.addEventListener("click", (() => {
          Ez.parentElement && Ez.parentElement.removeChild(Ez)
        })), Ez.click(), window.URL.revokeObjectURL(bz)
      }
      static BackCompatCameraNoPreventDefault(zz) {
        return "boolean" === typeof zz[0] ? zz[0] : "boolean" === typeof zz[1] && zz[1]
      }
      static CreateScreenshot(zz, uz, bz, Ez) {
        throw (0, Hz.l)("ScreenshotTools")
      }
      static async CreateScreenshotAsync(zz, uz, bz) {
        throw (0, Hz.l)("ScreenshotTools")
      }
      static CreateScreenshotUsingRenderTarget(zz, uz, bz, Ez) {
        throw (0, Hz.l)("ScreenshotTools")
      }
      static async CreateScreenshotUsingRenderTargetAsync(zz, uz, bz) {
        throw (0, Hz.l)("ScreenshotTools")
      }
      static RandomId() {
        return (0, Rz.c)()
      }
      static IsBase64(zz) {
        return (0, dz.n)(zz)
      }
      static DecodeBase64(zz) {
        return (0, dz.e)(zz)
      }
      static get errorsCount() {
        return lz.e.errorsCount
      }
      static Log(zz) {
        lz.e.Log(zz)
      }
      static Warn(zz) {
        lz.e.Warn(zz)
      }
      static Error(zz) {
        lz.e.Error(zz)
      }
      static get LogCache() {
        return lz.e.LogCache
      }
      static ClearLogCache() {
        lz.e.ClearLogCache()
      }
      static set LogLevels(zz) {
        lz.e.LogLevels = zz
      }
      static set PerformanceLogLevel(zz) {
        (zz & Ez.PerformanceUserMarkLogLevel) !== Ez.PerformanceUserMarkLogLevel ? (zz & Ez.PerformanceConsoleLogLevel) !== Ez.PerformanceConsoleLogLevel ? (Ez.StartPerformanceCounter = Ez._StartPerformanceCounterDisabled, Ez.EndPerformanceCounter = Ez._EndPerformanceCounterDisabled, _native?.disablePerformanceLogging?.()) : _native?.enablePerformanceLogging ? (_native.enablePerformanceLogging(2), Ez.StartPerformanceCounter = Ez._StartMarkNative, Ez.EndPerformanceCounter = Ez._EndMarkNative) : (Ez.StartPerformanceCounter = Ez._StartPerformanceConsole, Ez.EndPerformanceCounter = Ez._EndPerformanceConsole) : _native?.enablePerformanceLogging ? (_native.enablePerformanceLogging(1), Ez.StartPerformanceCounter = Ez._StartMarkNative, Ez.EndPerformanceCounter = Ez._EndMarkNative) : (Ez.StartPerformanceCounter = Ez._StartUserMark, Ez.EndPerformanceCounter = Ez._EndUserMark)
      }
      static _StartPerformanceCounterDisabled(zz, uz) {}
      static _EndPerformanceCounterDisabled(zz, uz) {}
      static _StartUserMark(zz) {
        let uz = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        if (!Ez._Performance) {
          if (!(0, iz.i)()) return;
          Ez._Performance = window.performance
        }
        uz && Ez._Performance.mark && Ez._Performance.mark(zz + "-Begin")
      }
      static _EndUserMark(zz) {
        (!(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1]) && Ez._Performance.mark && (Ez._Performance.mark(zz + "-End"), Ez._Performance.measure(zz, zz + "-Begin", zz + "-End"))
      }
      static _StartPerformanceConsole(zz) {
        let uz = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        uz && (Ez._StartUserMark(zz, uz), console.time && console.time(zz))
      }
      static _EndPerformanceConsole(zz) {
        let uz = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        uz && (Ez._EndUserMark(zz, uz), console.timeEnd(zz))
      }
      static _StartMarkNative(zz) {
        if ((!(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1]) && _native?.startPerformanceCounter)
          if (Ez._NativePerformanceCounterHandles.has(zz)) Ez.Warn(`Performance counter with name ${zz} is already started.`);
          else {
            const uz = _native.startPerformanceCounter(zz);
            Ez._NativePerformanceCounterHandles.set(zz, uz)
          }
      }
      static _EndMarkNative(zz) {
        if ((!(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1]) && _native?.endPerformanceCounter) {
          const uz = Ez._NativePerformanceCounterHandles.get(zz);
          uz ? (_native.endPerformanceCounter(uz), Ez._NativePerformanceCounterHandles.delete(zz)) : Ez.Warn(`Performance counter with name ${zz} was not started.`)
        }
      }
      static get Now() {
        return tz.b.Now
      }
      static GetClassName(zz) {
        let uz = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          bz = null;
        if (!uz && zz.getClassName) bz = zz.getClassName();
        else {
          if (zz instanceof Object) {
            bz = (uz ? zz : Object.getPrototypeOf(zz)).constructor.__bjsclassName__
          }
          bz || (bz = typeof zz)
        }
        return bz
      }
      static First(zz, uz) {
        for (const bz of zz)
          if (uz(bz)) return bz;
        return null
      }
      static getFullClassName(zz) {
        let uz = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          bz = null,
          Ez = null;
        if (!uz && zz.getClassName) bz = zz.getClassName();
        else {
          if (zz instanceof Object) {
            const nz = uz ? zz : Object.getPrototypeOf(zz);
            bz = nz.constructor.__bjsclassName__, Ez = nz.constructor.__bjsmoduleName__
          }
          bz || (bz = typeof zz)
        }
        return bz ? (null != Ez ? Ez + "." : "") + bz : null
      }
      static async DelayAsync(zz) {
        await new Promise((uz => {
          setTimeout((() => {
            uz()
          }), zz)
        }))
      }
      static IsSafari() {
        return !!(0, iz.h)() && /^((?!chrome|android).)*safari/i.test(navigator.userAgent)
      }
    }

    function Xz(zz, uz) {
      return bz => {
        bz.__bjsclassName__ = zz, bz.__bjsmoduleName__ = null != uz ? uz : null
      }
    }
    Ez = wz, wz.AssetBaseUrl = "", wz.UseCustomRequestHeaders = !1, wz.CustomRequestHeaders = Oz.b.CustomRequestHeaders, wz.GetDOMTextContent = iz.d, wz._DefaultCdnUrl = "https://cdn.babylonjs.com", wz._CdnVersion = "9.28.0", wz._DefaultAssetsUrl = "https://assets.babylonjs.com/core", wz.LoadScript = "undefined" === typeof _native ? Ez._LoadScriptWeb : Ez._LoadScriptNative, wz.GetAbsoluteUrl = "object" === typeof document ? zz => {
      const uz = document.createElement("a");
      return uz.href = zz, uz.href
    } : "function" === typeof URL && "object" === typeof location ? zz => new URL(zz, location.origin).href : () => {
      throw new Error("Unable to get absolute URL. Override BABYLON.Tools.GetAbsoluteUrl to a custom implementation for the current context.")
    }, wz.NoneLogLevel = lz.e.NoneLogLevel, wz.MessageLogLevel = lz.e.MessageLogLevel, wz.WarningLogLevel = lz.e.WarningLogLevel, wz.ErrorLogLevel = lz.e.ErrorLogLevel, wz.AllLogLevel = lz.e.AllLogLevel, wz.IsWindowObjectExist = iz.i, wz.PerformanceNoneLogLevel = 0, wz.PerformanceUserMarkLogLevel = 1, wz.PerformanceConsoleLogLevel = 2, wz._NativePerformanceCounterHandles = new Map, wz.StartPerformanceCounter = Ez._StartPerformanceCounterDisabled, wz.EndPerformanceCounter = Ez._EndPerformanceCounterDisabled;
    class fz {
      constructor(zz, uz, bz) {
        let Ez = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
        this.iterations = zz, this.index = Ez - 1, this._done = !1, this._fn = uz, this._successCallback = bz
      }
      executeNext() {
        this._done || (this.index + 1 < this.iterations ? (++this.index, this._fn(this)) : this.breakLoop())
      }
      breakLoop() {
        this._done = !0, this._successCallback()
      }
      static Run(zz, uz, bz) {
        const Ez = new fz(zz, uz, bz, arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0);
        return Ez.executeNext(), Ez
      }
      static SyncAsyncForLoop(zz, uz, bz, Ez, nz) {
        let iz = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0;
        return fz.Run(Math.ceil(zz / uz), (Ez => {
          nz && nz() ? Ez.breakLoop() : setTimeout((() => {
            for (let iz = 0; iz < uz; ++iz) {
              const lz = Ez.index * uz + iz;
              if (lz >= zz) break;
              if (bz(lz), nz && nz()) {
                Ez.breakLoop();
                break
              }
            }
            Ez.executeNext()
          }), iz)
        }), Ez)
      }
    }
    let sz = !1;

    function rz() {
      sz || (sz = !0, wz.Mix = Kz.k, wz.IsExponentOfTwo = Kz.i, pz.d.FallbackTexture = "data:image/jpg;base64,/9j/4AAQSkZJRgABAQEAYABgAAD/4QBmRXhpZgAATU0AKgAAAAgABAEaAAUAAAABAAAAPgEbAAUAAAABAAAARgEoAAMAAAABAAIAAAExAAIAAAAQAAAATgAAAAAAAABgAAAAAQAAAGAAAAABcGFpbnQubmV0IDQuMC41AP/bAEMABAIDAwMCBAMDAwQEBAQFCQYFBQUFCwgIBgkNCw0NDQsMDA4QFBEODxMPDAwSGBITFRYXFxcOERkbGRYaFBYXFv/bAEMBBAQEBQUFCgYGChYPDA8WFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFv/AABEIAQABAAMBIgACEQEDEQH/xAAfAAABBQEBAQEBAQAAAAAAAAAAAQIDBAUGBwgJCgv/xAC1EAACAQMDAgQDBQUEBAAAAX0BAgMABBEFEiExQQYTUWEHInEUMoGRoQgjQrHBFVLR8CQzYnKCCQoWFxgZGiUmJygpKjQ1Njc4OTpDREVGR0hJSlNUVVZXWFlaY2RlZmdoaWpzdHV2d3h5eoOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4eLj5OXm5+jp6vHy8/T19vf4+fr/xAAfAQADAQEBAQEBAQEBAAAAAAAAAQIDBAUGBwgJCgv/xAC1EQACAQIEBAMEBwUEBAABAncAAQIDEQQFITEGEkFRB2FxEyIygQgUQpGhscEJIzNS8BVictEKFiQ04SXxFxgZGiYnKCkqNTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqCg4SFhoeIiYqSk5SVlpeYmZqio6Slpqeoqaqys7S1tre4ubrCw8TFxsfIycrS09TV1tfY2dri4+Tl5ufo6ery8/T19vf4+fr/2gAMAwEAAhEDEQA/APH6KKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FCiiigD6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++gooooA+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gUKKKKAPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76CiiigD5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BQooooA+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/voKKKKAPl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FCiiigD6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++gooooA+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gUKKKKAPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76CiiigD5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BQooooA+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/voKKKKAPl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FCiiigD6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++gooooA+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gUKKKKAPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76P//Z")
    }
  }
};
Object.freeze(modules);
for (const zz in modules) Object.freeze(modules[zz]);