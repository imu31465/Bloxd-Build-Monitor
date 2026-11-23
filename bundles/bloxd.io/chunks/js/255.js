export const id = 255;
export const ids = [255];
export const modules = {
  39921: (CC, zC, ZC) => {
    ZC.d(zC, {
      d: () => bC
    });
    var QC = ZC(38507),
      wC = ZC(37002);
    class bC {
      static Instantiate(CC) {
        if (this.RegisteredExternalClasses && this.RegisteredExternalClasses[CC]) return this.RegisteredExternalClasses[CC];
        const zC = (0, wC.c)(CC);
        if (zC) return zC;
        QC.c.Warn(CC + " not found, you may have missed an import.");
        const ZC = CC.split(".");
        let bC = "undefined" !== typeof window ? window : "undefined" !== typeof globalThis ? globalThis : this;
        for (let QC = 0, wC = ZC.length; QC < wC; QC++) bC = bC[ZC[QC]];
        return "function" !== typeof bC ? null : bC
      }
    }
    bC.RegisteredExternalClasses = {}
  },
  39730: (CC, zC, ZC) => {
    ZC.d(zC, {
      b: () => wC
    });
    var QC = ZC(39680);
    class wC {
      static get Now() {
        return (0, QC.k)() && window.performance && window.performance.now ? window.performance.now() : Date.now()
      }
    }
  },
  39747: (CC, zC, ZC) => {
    function QC(CC) {
      let zC = 1;
      do {
        zC *= 2
      } while (zC < CC);
      return zC === CC
    }

    function wC(CC, zC, ZC) {
      return CC * (1 - ZC) + zC * ZC
    }

    function bC(CC) {
      const zC = nC(CC),
        ZC = fC(CC);
      return zC - CC > CC - ZC ? ZC : zC
    }

    function nC(CC) {
      return CC--, CC |= CC >> 1, CC |= CC >> 2, CC |= CC >> 4, CC |= CC >> 8, CC |= CC >> 16, ++CC
    }

    function fC(CC) {
      return CC |= CC >> 1, CC |= CC >> 2, CC |= CC >> 4, CC |= CC >> 8, (CC |= CC >> 16) - (CC >> 1)
    }

    function oC(CC, zC) {
      let ZC;
      switch (arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 2) {
        case 1:
          ZC = fC(CC);
          break;
        case 2:
          ZC = bC(CC);
          break;
        default:
          ZC = nC(CC)
      }
      return Math.min(ZC, zC)
    }
    ZC.d(zC, {
      c: () => fC,
      e: () => oC,
      h: () => QC,
      i: () => wC,
      j: () => bC
    })
  },
  39913: (CC, zC, ZC) => {
    ZC.d(zC, {
      d: () => RC,
      e: () => xC,
      g: () => PC,
      i: () => GC
    });
    var QC, wC = ZC(36987),
      bC = ZC(39680),
      nC = ZC(38507),
      fC = ZC(38501),
      oC = ZC(39730),
      qC = ZC(39694),
      FC = ZC(39867),
      WC = ZC(36985),
      NC = ZC(39865),
      MC = ZC(39712),
      gC = ZC(39921),
      SC = ZC(37731),
      pC = ZC(39747);
    class PC {
      static get BaseUrl() {
        return NC.e.BaseUrl
      }
      static set BaseUrl(CC) {
        NC.e.BaseUrl = CC
      }
      static get CleanUrl() {
        return NC.e.CleanUrl
      }
      static set CleanUrl(CC) {
        NC.e.CleanUrl = CC
      }
      static IsAbsoluteUrl(CC) {
        return 0 === CC.indexOf("//") || -1 !== CC.indexOf("://") && (-1 !== CC.indexOf(".") && (-1 !== CC.indexOf("/") && (!(CC.indexOf(":") > CC.indexOf("/")) && (CC.indexOf("://") < CC.indexOf(".") || (0 === CC.indexOf("data:") || 0 === CC.indexOf("blob:"))))))
      }
      static set ScriptBaseUrl(CC) {
        NC.e.ScriptBaseUrl = CC
      }
      static get ScriptBaseUrl() {
        return NC.e.ScriptBaseUrl
      }
      static set CDNBaseUrl(CC) {
        QC.ScriptBaseUrl = CC, QC.AssetBaseUrl = CC
      }
      static set ScriptPreprocessUrl(CC) {
        NC.e.ScriptPreprocessUrl = CC
      }
      static get ScriptPreprocessUrl() {
        return NC.e.ScriptPreprocessUrl
      }
      static get DefaultRetryStrategy() {
        return NC.e.DefaultRetryStrategy
      }
      static set DefaultRetryStrategy(CC) {
        NC.e.DefaultRetryStrategy = CC
      }
      static get CorsBehavior() {
        return NC.e.CorsBehavior
      }
      static set CorsBehavior(CC) {
        NC.e.CorsBehavior = CC
      }
      static get UseFallbackTexture() {
        return WC.c.UseFallbackTexture
      }
      static set UseFallbackTexture(CC) {
        WC.c.UseFallbackTexture = CC
      }
      static get RegisteredExternalClasses() {
        return gC.d.RegisteredExternalClasses
      }
      static set RegisteredExternalClasses(CC) {
        gC.d.RegisteredExternalClasses = CC
      }
      static get fallbackTexture() {
        return WC.c.FallbackTexture
      }
      static set fallbackTexture(CC) {
        WC.c.FallbackTexture = CC
      }
      static FetchToRef(CC, zC, ZC, QC, wC, bC) {
        const nC = 4 * ((Math.abs(CC) * ZC % ZC | 0) + (Math.abs(zC) * QC % QC | 0) * ZC);
        bC.r = wC[nC] / 255, bC.g = wC[nC + 1] / 255, bC.b = wC[nC + 2] / 255, bC.a = wC[nC + 3] / 255
      }
      static Mix(CC, zC, ZC) {
        return 0
      }
      static Instantiate(CC) {
        return gC.d.Instantiate(CC)
      }
      static SetImmediate(CC) {
        MC.d.SetImmediate(CC)
      }
      static IsExponentOfTwo(CC) {
        return !0
      }
      static FloatRound(CC) {
        return Math.fround(CC)
      }
      static GetFilename(CC) {
        const zC = CC.lastIndexOf("/");
        return zC < 0 ? CC : CC.substring(zC + 1)
      }
      static GetFolderPath(CC) {
        let zC = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        const ZC = CC.lastIndexOf("/");
        return ZC < 0 ? zC ? CC : "" : CC.substring(0, ZC + 1)
      }
      static ToDegrees(CC) {
        return 180 * CC / Math.PI
      }
      static ToRadians(CC) {
        return CC * Math.PI / 180
      }
      static SmoothAngleChange(CC, zC) {
        let ZC = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : .9;
        const QC = this.ToRadians(CC),
          wC = this.ToRadians(zC);
        return this.ToDegrees(Math.atan2((1 - ZC) * Math.sin(wC) + ZC * Math.sin(QC), (1 - ZC) * Math.cos(wC) + ZC * Math.cos(QC)))
      }
      static MakeArray(CC, zC) {
        return !0 === zC || void 0 !== CC && null != CC ? Array.isArray(CC) ? CC : [CC] : null
      }
      static GetPointerPrefix(CC) {
        return (0, bC.k)() && !window.PointerEvent ? "mouse" : "pointer"
      }
      static SetCorsBehavior(CC, zC) {
        (0, NC.v)(CC, zC)
      }
      static SetReferrerPolicyBehavior(CC, zC) {
        zC.referrerPolicy = CC
      }
      static get PreprocessUrl() {
        return NC.e.PreprocessUrl
      }
      static set PreprocessUrl(CC) {
        NC.e.PreprocessUrl = CC
      }
      static LoadImage(CC, zC, ZC, QC, wC, bC) {
        return (0, NC.m)(CC, zC, ZC, QC, wC, bC)
      }
      static LoadFile(CC, zC, ZC, QC, wC, bC) {
        return (0, NC.i)(CC, zC, ZC, QC, wC, bC)
      }
      static async LoadFileAsync(CC) {
        let zC = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        return await new Promise(((ZC, QC) => {
          (0, NC.i)(CC, (CC => {
            ZC(CC)
          }), void 0, void 0, zC, ((CC, zC) => {
            QC(zC)
          }))
        }))
      }
      static GetAssetUrl(CC) {
        if (!CC) return "";
        if (QC.AssetBaseUrl && CC.startsWith(QC._DefaultAssetsUrl)) {
          const zC = QC.AssetBaseUrl.endsWith("/") ? QC.AssetBaseUrl.slice(0, -1) : QC.AssetBaseUrl;
          return CC.replace(QC._DefaultAssetsUrl, zC)
        }
        return CC
      }
      static GetBabylonScriptURL(CC, zC) {
        if (!CC) return "";
        if (CC.startsWith(QC._DefaultCdnUrl))
          if (QC.ScriptBaseUrl) {
            const zC = QC.ScriptBaseUrl.endsWith("/") ? QC.ScriptBaseUrl.slice(0, -1) : QC.ScriptBaseUrl;
            CC = CC.replace(QC._DefaultCdnUrl, zC)
          } else if (QC._CdnVersion) {
          const zC = `${QC._DefaultCdnUrl}/v${QC._CdnVersion}`;
          CC.startsWith(zC) || (CC = CC.replace(QC._DefaultCdnUrl, zC))
        }
        return CC = QC.ScriptPreprocessUrl(CC), zC && !QC.IsAbsoluteUrl(CC) && (CC = QC.GetAbsoluteUrl(CC)), CC
      }
      static LoadBabylonScript(CC, zC, ZC, wC) {
        CC = QC.GetBabylonScriptURL(CC), QC.LoadScript(CC, zC, ZC)
      }
      static async LoadBabylonScriptAsync(CC) {
        return CC = QC.GetBabylonScriptURL(CC), await QC.LoadScriptAsync(CC)
      }
      static _LoadScriptNative(CC, zC, ZC, wC) {
        if (_native) {
          if (arguments.length > 4 && void 0 !== arguments[4] && arguments[4]) {
            const CC = "Loading a script as an ES module is not supported in Babylon Native";
            return void ZC?.(CC, new Error(CC))
          }
          QC.LoadFile(CC, (CC => {
            try {
              Function(CC).apply(null), zC && zC()
            } catch (QC) {
              ZC && ZC("LoadScript Error", QC)
            }
          }), void 0, void 0, !1, ((CC, zC) => {
            ZC && ZC("LoadScript Error", zC)
          }))
        }
      }
      static _LoadScriptWeb(CC, zC, ZC, QC) {
        let wC = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
        if ("function" === typeof importScripts) {
          try {
            importScripts(CC), zC && zC()
          } catch (oC) {
            ZC?.(`Unable to load script '${CC}' in worker`, oC)
          }
          return
        }
        if (!(0, bC.k)()) return void ZC?.(`Cannot load script '${CC}' outside of a window or a worker`);
        const nC = document.getElementsByTagName("head")[0],
          fC = document.createElement("script");
        wC ? (fC.setAttribute("type", "module"), fC.innerText = CC) : (fC.setAttribute("type", "text/javascript"), fC.setAttribute("src", CC)), QC && (fC.id = QC), fC.onload = () => {
          zC && zC()
        }, fC.onerror = zC => {
          ZC && ZC(`Unable to load script '${CC}'`, zC)
        }, nC.appendChild(fC)
      }
      static async LoadScriptAsync(CC, zC) {
        return await new Promise(((ZC, QC) => {
          this.LoadScript(CC, (() => {
            ZC()
          }), ((CC, zC) => {
            QC(zC || new Error(CC))
          }), zC)
        }))
      }
      static ReadFileAsDataURL(CC, zC, ZC) {
        const QC = new FileReader,
          bC = {
            onCompleteObservable: new wC.d,
            abort: () => QC.abort()
          };
        return QC.onloadend = () => {
          bC.onCompleteObservable.notifyObservers(bC)
        }, QC.onload = CC => {
          zC(CC.target.result)
        }, QC.onprogress = ZC, QC.readAsDataURL(CC), bC
      }
      static ReadFile(CC, zC, ZC, QC, wC) {
        return (0, NC.o)(CC, zC, ZC, QC, wC)
      }
      static FileAsURL(CC) {
        const zC = new Blob([CC]);
        return window.URL.createObjectURL(zC)
      }
      static Format(CC) {
        let zC = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 2;
        return CC.toFixed(zC)
      }
      static DeepCopy(CC, zC, ZC, QC) {
        fC.e.DeepCopy(CC, zC, ZC, QC)
      }
      static IsEmpty(CC) {
        for (const zC in CC)
          if (Object.prototype.hasOwnProperty.call(CC, zC)) return !1;
        return !0
      }
      static RegisterTopRootEvents(CC, zC) {
        for (let QC = 0; QC < zC.length; QC++) {
          const wC = zC[QC];
          CC.addEventListener(wC.name, wC.handler, !1);
          try {
            window.parent && window.parent.addEventListener(wC.name, wC.handler, !1)
          } catch (ZC) {}
        }
      }
      static UnregisterTopRootEvents(CC, zC) {
        for (let QC = 0; QC < zC.length; QC++) {
          const wC = zC[QC];
          CC.removeEventListener(wC.name, wC.handler);
          try {
            CC.parent && CC.parent.removeEventListener(wC.name, wC.handler)
          } catch (ZC) {}
        }
      }
      static async DumpFramebuffer(CC, zC, ZC, QC) {
        throw (0, qC.i)("DumpTools")
      }
      static DumpData(CC, zC, ZC, QC) {
        throw (0, qC.i)("DumpTools")
      }
      static async DumpDataAsync(CC, zC, ZC) {
        throw (0, qC.i)("DumpTools")
      }
      static _IsOffScreenCanvas(CC) {
        return void 0 !== CC.convertToBlob
      }
      static ToBlob(CC, zC) {
        let ZC = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "image/png",
          wC = arguments.length > 3 ? arguments[3] : void 0;
        QC._IsOffScreenCanvas(CC) || CC.toBlob || (CC.toBlob = function(CC, zC, ZC) {
          setTimeout((() => {
            const QC = atob(this.toDataURL(zC, ZC).split(",")[1]),
              wC = QC.length,
              bC = new Uint8Array(wC);
            for (let CC = 0; CC < wC; CC++) bC[CC] = QC.charCodeAt(CC);
            CC(new Blob([bC]))
          }))
        }), QC._IsOffScreenCanvas(CC) ? CC.convertToBlob({
          type: ZC,
          quality: wC
        }).then((CC => zC(CC))) : CC.toBlob((function(CC) {
          zC(CC)
        }), ZC, wC)
      }
      static DownloadBlob(CC, zC) {
        if ("download" in document.createElement("a")) {
          if (!zC) {
            const CC = new Date;
            zC = "screenshot_" + ((CC.getFullYear() + "-" + (CC.getMonth() + 1)).slice(2) + "-" + CC.getDate() + "_" + CC.getHours() + "-" + ("0" + CC.getMinutes()).slice(-2)) + ".png"
          }
          QC.Download(CC, zC)
        } else if (CC && "undefined" !== typeof URL) {
          const zC = URL.createObjectURL(CC),
            ZC = window.open("");
          if (!ZC) return;
          const QC = ZC.document.createElement("img");
          QC.onload = function() {
            URL.revokeObjectURL(zC)
          }, QC.src = zC, ZC.document.body.appendChild(QC)
        }
      }
      static EncodeScreenshotCanvasData(CC, zC) {
        let ZC = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "image/png",
          wC = arguments.length > 3 ? arguments[3] : void 0,
          bC = arguments.length > 4 ? arguments[4] : void 0;
        if ("string" !== typeof wC && zC) {
          if (zC) {
            if (QC._IsOffScreenCanvas(CC)) return void CC.convertToBlob({
              type: ZC,
              quality: bC
            }).then((CC => {
              const ZC = new FileReader;
              ZC.readAsDataURL(CC), ZC.onloadend = () => {
                const CC = ZC.result;
                zC(CC)
              }
            }));
            const wC = CC.toDataURL(ZC, bC);
            zC(wC)
          }
        } else this.ToBlob(CC, (function(CC) {
          CC && QC.DownloadBlob(CC, wC), zC && zC("")
        }), ZC, bC)
      }
      static Download(CC, zC) {
        if ("undefined" === typeof URL) return;
        const ZC = window.URL.createObjectURL(CC),
          QC = document.createElement("a");
        document.body.appendChild(QC), QC.style.display = "none", QC.href = ZC, QC.download = zC, QC.addEventListener("click", (() => {
          QC.parentElement && QC.parentElement.removeChild(QC)
        })), QC.click(), window.URL.revokeObjectURL(ZC)
      }
      static BackCompatCameraNoPreventDefault(CC) {
        return "boolean" === typeof CC[0] ? CC[0] : "boolean" === typeof CC[1] && CC[1]
      }
      static CreateScreenshot(CC, zC, ZC, QC) {
        throw (0, qC.i)("ScreenshotTools")
      }
      static async CreateScreenshotAsync(CC, zC, ZC) {
        throw (0, qC.i)("ScreenshotTools")
      }
      static CreateScreenshotUsingRenderTarget(CC, zC, ZC, QC) {
        throw (0, qC.i)("ScreenshotTools")
      }
      static async CreateScreenshotUsingRenderTargetAsync(CC, zC, ZC) {
        throw (0, qC.i)("ScreenshotTools")
      }
      static RandomId() {
        return (0, SC.b)()
      }
      static IsBase64(CC) {
        return (0, NC.h)(CC)
      }
      static DecodeBase64(CC) {
        return (0, NC.d)(CC)
      }
      static get errorsCount() {
        return nC.c.errorsCount
      }
      static Log(CC) {
        nC.c.Log(CC)
      }
      static Warn(CC) {
        nC.c.Warn(CC)
      }
      static Error(CC) {
        nC.c.Error(CC)
      }
      static get LogCache() {
        return nC.c.LogCache
      }
      static ClearLogCache() {
        nC.c.ClearLogCache()
      }
      static set LogLevels(CC) {
        nC.c.LogLevels = CC
      }
      static set PerformanceLogLevel(CC) {
        (CC & QC.PerformanceUserMarkLogLevel) !== QC.PerformanceUserMarkLogLevel ? (CC & QC.PerformanceConsoleLogLevel) !== QC.PerformanceConsoleLogLevel ? (QC.StartPerformanceCounter = QC._StartPerformanceCounterDisabled, QC.EndPerformanceCounter = QC._EndPerformanceCounterDisabled, _native?.disablePerformanceLogging?.()) : _native?.enablePerformanceLogging ? (_native.enablePerformanceLogging(2), QC.StartPerformanceCounter = QC._StartMarkNative, QC.EndPerformanceCounter = QC._EndMarkNative) : (QC.StartPerformanceCounter = QC._StartPerformanceConsole, QC.EndPerformanceCounter = QC._EndPerformanceConsole) : _native?.enablePerformanceLogging ? (_native.enablePerformanceLogging(1), QC.StartPerformanceCounter = QC._StartMarkNative, QC.EndPerformanceCounter = QC._EndMarkNative) : (QC.StartPerformanceCounter = QC._StartUserMark, QC.EndPerformanceCounter = QC._EndUserMark)
      }
      static _StartPerformanceCounterDisabled(CC, zC) {}
      static _EndPerformanceCounterDisabled(CC, zC) {}
      static _StartUserMark(CC) {
        let zC = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        if (!QC._Performance) {
          if (!(0, bC.k)()) return;
          QC._Performance = window.performance
        }
        zC && QC._Performance.mark && QC._Performance.mark(CC + "-Begin")
      }
      static _EndUserMark(CC) {
        (!(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1]) && QC._Performance.mark && (QC._Performance.mark(CC + "-End"), QC._Performance.measure(CC, CC + "-Begin", CC + "-End"))
      }
      static _StartPerformanceConsole(CC) {
        let zC = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        zC && (QC._StartUserMark(CC, zC), console.time && console.time(CC))
      }
      static _EndPerformanceConsole(CC) {
        let zC = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        zC && (QC._EndUserMark(CC, zC), console.timeEnd(CC))
      }
      static _StartMarkNative(CC) {
        if ((!(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1]) && _native?.startPerformanceCounter)
          if (QC._NativePerformanceCounterHandles.has(CC)) QC.Warn(`Performance counter with name ${CC} is already started.`);
          else {
            const zC = _native.startPerformanceCounter(CC);
            QC._NativePerformanceCounterHandles.set(CC, zC)
          }
      }
      static _EndMarkNative(CC) {
        if ((!(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1]) && _native?.endPerformanceCounter) {
          const zC = QC._NativePerformanceCounterHandles.get(CC);
          zC ? (_native.endPerformanceCounter(zC), QC._NativePerformanceCounterHandles.delete(CC)) : QC.Warn(`Performance counter with name ${CC} was not started.`)
        }
      }
      static get Now() {
        return oC.b.Now
      }
      static GetClassName(CC) {
        let zC = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          ZC = null;
        if (!zC && CC.getClassName) ZC = CC.getClassName();
        else {
          if (CC instanceof Object) {
            ZC = (zC ? CC : Object.getPrototypeOf(CC)).constructor.__bjsclassName__
          }
          ZC || (ZC = typeof CC)
        }
        return ZC
      }
      static First(CC, zC) {
        for (const ZC of CC)
          if (zC(ZC)) return ZC;
        return null
      }
      static getFullClassName(CC) {
        let zC = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          ZC = null,
          QC = null;
        if (!zC && CC.getClassName) ZC = CC.getClassName();
        else {
          if (CC instanceof Object) {
            const wC = zC ? CC : Object.getPrototypeOf(CC);
            ZC = wC.constructor.__bjsclassName__, QC = wC.constructor.__bjsmoduleName__
          }
          ZC || (ZC = typeof CC)
        }
        return ZC ? (null != QC ? QC + "." : "") + ZC : null
      }
      static async DelayAsync(CC) {
        await new Promise((zC => {
          setTimeout((() => {
            zC()
          }), CC)
        }))
      }
      static IsSafari() {
        return !!(0, bC.h)() && /^((?!chrome|android).)*safari/i.test(navigator.userAgent)
      }
    }

    function GC(CC, zC) {
      return ZC => {
        ZC.__bjsclassName__ = CC, ZC.__bjsmoduleName__ = null != zC ? zC : null
      }
    }
    QC = PC, PC.AssetBaseUrl = "", PC.UseCustomRequestHeaders = !1, PC.CustomRequestHeaders = FC.d.CustomRequestHeaders, PC.GetDOMTextContent = bC.e, PC._DefaultCdnUrl = "https://cdn.babylonjs.com", PC._CdnVersion = "9.28.0", PC._DefaultAssetsUrl = "https://assets.babylonjs.com/core", PC.LoadScript = "undefined" === typeof _native ? QC._LoadScriptWeb : QC._LoadScriptNative, PC.GetAbsoluteUrl = "object" === typeof document ? CC => {
      const zC = document.createElement("a");
      return zC.href = CC, zC.href
    } : "function" === typeof URL && "object" === typeof location ? CC => new URL(CC, location.origin).href : () => {
      throw new Error("Unable to get absolute URL. Override BABYLON.Tools.GetAbsoluteUrl to a custom implementation for the current context.")
    }, PC.NoneLogLevel = nC.c.NoneLogLevel, PC.MessageLogLevel = nC.c.MessageLogLevel, PC.WarningLogLevel = nC.c.WarningLogLevel, PC.ErrorLogLevel = nC.c.ErrorLogLevel, PC.AllLogLevel = nC.c.AllLogLevel, PC.IsWindowObjectExist = bC.k, PC.PerformanceNoneLogLevel = 0, PC.PerformanceUserMarkLogLevel = 1, PC.PerformanceConsoleLogLevel = 2, PC._NativePerformanceCounterHandles = new Map, PC.StartPerformanceCounter = QC._StartPerformanceCounterDisabled, PC.EndPerformanceCounter = QC._EndPerformanceCounterDisabled;
    class RC {
      constructor(CC, zC, ZC) {
        let QC = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
        this.iterations = CC, this.index = QC - 1, this._done = !1, this._fn = zC, this._successCallback = ZC
      }
      executeNext() {
        this._done || (this.index + 1 < this.iterations ? (++this.index, this._fn(this)) : this.breakLoop())
      }
      breakLoop() {
        this._done = !0, this._successCallback()
      }
      static Run(CC, zC, ZC) {
        const QC = new RC(CC, zC, ZC, arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0);
        return QC.executeNext(), QC
      }
      static SyncAsyncForLoop(CC, zC, ZC, QC, wC) {
        let bC = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0;
        return RC.Run(Math.ceil(CC / zC), (QC => {
          wC && wC() ? QC.breakLoop() : setTimeout((() => {
            for (let bC = 0; bC < zC; ++bC) {
              const nC = QC.index * zC + bC;
              if (nC >= CC) break;
              if (ZC(nC), wC && wC()) {
                QC.breakLoop();
                break
              }
            }
            QC.executeNext()
          }), bC)
        }), QC)
      }
    }
    let AC = !1;

    function xC() {
      AC || (AC = !0, PC.Mix = pC.i, PC.IsExponentOfTwo = pC.h, WC.c.FallbackTexture = "data:image/jpg;base64,/9j/4AAQSkZJRgABAQEAYABgAAD/4QBmRXhpZgAATU0AKgAAAAgABAEaAAUAAAABAAAAPgEbAAUAAAABAAAARgEoAAMAAAABAAIAAAExAAIAAAAQAAAATgAAAAAAAABgAAAAAQAAAGAAAAABcGFpbnQubmV0IDQuMC41AP/bAEMABAIDAwMCBAMDAwQEBAQFCQYFBQUFCwgIBgkNCw0NDQsMDA4QFBEODxMPDAwSGBITFRYXFxcOERkbGRYaFBYXFv/bAEMBBAQEBQUFCgYGChYPDA8WFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFv/AABEIAQABAAMBIgACEQEDEQH/xAAfAAABBQEBAQEBAQAAAAAAAAAAAQIDBAUGBwgJCgv/xAC1EAACAQMDAgQDBQUEBAAAAX0BAgMABBEFEiExQQYTUWEHInEUMoGRoQgjQrHBFVLR8CQzYnKCCQoWFxgZGiUmJygpKjQ1Njc4OTpDREVGR0hJSlNUVVZXWFlaY2RlZmdoaWpzdHV2d3h5eoOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4eLj5OXm5+jp6vHy8/T19vf4+fr/xAAfAQADAQEBAQEBAQEBAAAAAAAAAQIDBAUGBwgJCgv/xAC1EQACAQIEBAMEBwUEBAABAncAAQIDEQQFITEGEkFRB2FxEyIygQgUQpGhscEJIzNS8BVictEKFiQ04SXxFxgZGiYnKCkqNTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqCg4SFhoeIiYqSk5SVlpeYmZqio6Slpqeoqaqys7S1tre4ubrCw8TFxsfIycrS09TV1tfY2dri4+Tl5ufo6ery8/T19vf4+fr/2gAMAwEAAhEDEQA/APH6KKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FCiiigD6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++gooooA+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gUKKKKAPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76CiiigD5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BQooooA+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/voKKKKAPl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FCiiigD6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++gooooA+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gUKKKKAPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76CiiigD5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BQooooA+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/voKKKKAPl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FCiiigD6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++gooooA+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gUKKKKAPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76P//Z")
    }
  }
};
Object.freeze(modules);
for (const CC in modules) Object.freeze(modules[CC]);