export const id = 245;
export const ids = [245];
export const modules = {
  39250: (DD, CD, cD) => {
    cD.d(CD, {
      b: () => iD
    });
    var ID = cD(38048),
      pD = cD(36488);
    class iD {
      static Instantiate(DD) {
        if (this.RegisteredExternalClasses && this.RegisteredExternalClasses[DD]) return this.RegisteredExternalClasses[DD];
        const CD = (0, pD.b)(DD);
        if (CD) return CD;
        ID.e.Warn(DD + " not found, you may have missed an import.");
        const cD = DD.split(".");
        let iD = "undefined" !== typeof window ? window : "undefined" !== typeof globalThis ? globalThis : this;
        for (let ID = 0, pD = cD.length; ID < pD; ID++) iD = iD[cD[ID]];
        return "function" !== typeof iD ? null : iD
      }
    }
    iD.RegisteredExternalClasses = {}
  },
  39054: (DD, CD, cD) => {
    cD.d(CD, {
      b: () => pD
    });
    var ID = cD(39010);
    class pD {
      static get Now() {
        return (0, ID.m)() && window.performance && window.performance.now ? window.performance.now() : Date.now()
      }
    }
  },
  39084: (DD, CD, cD) => {
    function ID(DD) {
      let CD = 1;
      do {
        CD *= 2
      } while (CD < DD);
      return CD === DD
    }

    function pD(DD, CD, cD) {
      return DD * (1 - cD) + CD * cD
    }

    function iD(DD) {
      const CD = fD(DD),
        cD = bD(DD);
      return CD - DD > DD - cD ? cD : CD
    }

    function fD(DD) {
      return DD--, DD |= DD >> 1, DD |= DD >> 2, DD |= DD >> 4, DD |= DD >> 8, DD |= DD >> 16, ++DD
    }

    function bD(DD) {
      return DD |= DD >> 1, DD |= DD >> 2, DD |= DD >> 4, DD |= DD >> 8, (DD |= DD >> 16) - (DD >> 1)
    }

    function QD(DD, CD) {
      let cD;
      switch (arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 2) {
        case 1:
          cD = bD(DD);
          break;
        case 2:
          cD = iD(DD);
          break;
        default:
          cD = fD(DD)
      }
      return Math.min(cD, CD)
    }
    cD.d(CD, {
      c: () => bD,
      e: () => QD,
      h: () => ID,
      k: () => pD,
      o: () => iD
    })
  },
  39245: (DD, CD, cD) => {
    cD.d(CD, {
      d: () => gD,
      e: () => mD,
      g: () => vD,
      h: () => ND
    });
    var ID, pD = cD(36473),
      iD = cD(39010),
      fD = cD(38048),
      bD = cD(38045),
      QD = cD(39054),
      wD = cD(39027),
      SD = cD(39198),
      BD = cD(36464),
      yD = cD(39193),
      MD = cD(39039),
      tD = cD(39250),
      ZD = cD(37290),
      oD = cD(39084);
    class vD {
      static get BaseUrl() {
        return yD.f.BaseUrl
      }
      static set BaseUrl(DD) {
        yD.f.BaseUrl = DD
      }
      static get CleanUrl() {
        return yD.f.CleanUrl
      }
      static set CleanUrl(DD) {
        yD.f.CleanUrl = DD
      }
      static IsAbsoluteUrl(DD) {
        return 0 === DD.indexOf("//") || -1 !== DD.indexOf("://") && (-1 !== DD.indexOf(".") && (-1 !== DD.indexOf("/") && (!(DD.indexOf(":") > DD.indexOf("/")) && (DD.indexOf("://") < DD.indexOf(".") || (0 === DD.indexOf("data:") || 0 === DD.indexOf("blob:"))))))
      }
      static set ScriptBaseUrl(DD) {
        yD.f.ScriptBaseUrl = DD
      }
      static get ScriptBaseUrl() {
        return yD.f.ScriptBaseUrl
      }
      static set CDNBaseUrl(DD) {
        ID.ScriptBaseUrl = DD, ID.AssetBaseUrl = DD
      }
      static set ScriptPreprocessUrl(DD) {
        yD.f.ScriptPreprocessUrl = DD
      }
      static get ScriptPreprocessUrl() {
        return yD.f.ScriptPreprocessUrl
      }
      static get DefaultRetryStrategy() {
        return yD.f.DefaultRetryStrategy
      }
      static set DefaultRetryStrategy(DD) {
        yD.f.DefaultRetryStrategy = DD
      }
      static get CorsBehavior() {
        return yD.f.CorsBehavior
      }
      static set CorsBehavior(DD) {
        yD.f.CorsBehavior = DD
      }
      static get UseFallbackTexture() {
        return BD.b.UseFallbackTexture
      }
      static set UseFallbackTexture(DD) {
        BD.b.UseFallbackTexture = DD
      }
      static get RegisteredExternalClasses() {
        return tD.b.RegisteredExternalClasses
      }
      static set RegisteredExternalClasses(DD) {
        tD.b.RegisteredExternalClasses = DD
      }
      static get fallbackTexture() {
        return BD.b.FallbackTexture
      }
      static set fallbackTexture(DD) {
        BD.b.FallbackTexture = DD
      }
      static FetchToRef(DD, CD, cD, ID, pD, iD) {
        const fD = 4 * ((Math.abs(DD) * cD % cD | 0) + (Math.abs(CD) * ID % ID | 0) * cD);
        iD.r = pD[fD] / 255, iD.g = pD[fD + 1] / 255, iD.b = pD[fD + 2] / 255, iD.a = pD[fD + 3] / 255
      }
      static Mix(DD, CD, cD) {
        return 0
      }
      static Instantiate(DD) {
        return tD.b.Instantiate(DD)
      }
      static SetImmediate(DD) {
        MD.d.SetImmediate(DD)
      }
      static IsExponentOfTwo(DD) {
        return !0
      }
      static FloatRound(DD) {
        return Math.fround(DD)
      }
      static GetFilename(DD) {
        const CD = DD.lastIndexOf("/");
        return CD < 0 ? DD : DD.substring(CD + 1)
      }
      static GetFolderPath(DD) {
        let CD = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        const cD = DD.lastIndexOf("/");
        return cD < 0 ? CD ? DD : "" : DD.substring(0, cD + 1)
      }
      static ToDegrees(DD) {
        return 180 * DD / Math.PI
      }
      static ToRadians(DD) {
        return DD * Math.PI / 180
      }
      static SmoothAngleChange(DD, CD) {
        let cD = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : .9;
        const ID = this.ToRadians(DD),
          pD = this.ToRadians(CD);
        return this.ToDegrees(Math.atan2((1 - cD) * Math.sin(pD) + cD * Math.sin(ID), (1 - cD) * Math.cos(pD) + cD * Math.cos(ID)))
      }
      static MakeArray(DD, CD) {
        return !0 === CD || void 0 !== DD && null != DD ? Array.isArray(DD) ? DD : [DD] : null
      }
      static GetPointerPrefix(DD) {
        return (0, iD.m)() && !window.PointerEvent ? "mouse" : "pointer"
      }
      static SetCorsBehavior(DD, CD) {
        (0, yD.v)(DD, CD)
      }
      static SetReferrerPolicyBehavior(DD, CD) {
        CD.referrerPolicy = DD
      }
      static get PreprocessUrl() {
        return yD.f.PreprocessUrl
      }
      static set PreprocessUrl(DD) {
        yD.f.PreprocessUrl = DD
      }
      static LoadImage(DD, CD, cD, ID, pD, iD) {
        return (0, yD.q)(DD, CD, cD, ID, pD, iD)
      }
      static LoadFile(DD, CD, cD, ID, pD, iD) {
        return (0, yD.n)(DD, CD, cD, ID, pD, iD)
      }
      static async LoadFileAsync(DD) {
        let CD = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        return await new Promise(((cD, ID) => {
          (0, yD.n)(DD, (DD => {
            cD(DD)
          }), void 0, void 0, CD, ((DD, CD) => {
            ID(CD)
          }))
        }))
      }
      static GetAssetUrl(DD) {
        if (!DD) return "";
        if (ID.AssetBaseUrl && DD.startsWith(ID._DefaultAssetsUrl)) {
          const CD = ID.AssetBaseUrl.endsWith("/") ? ID.AssetBaseUrl.slice(0, -1) : ID.AssetBaseUrl;
          return DD.replace(ID._DefaultAssetsUrl, CD)
        }
        return DD
      }
      static GetBabylonScriptURL(DD, CD) {
        if (!DD) return "";
        if (DD.startsWith(ID._DefaultCdnUrl))
          if (ID.ScriptBaseUrl) {
            const CD = ID.ScriptBaseUrl.endsWith("/") ? ID.ScriptBaseUrl.slice(0, -1) : ID.ScriptBaseUrl;
            DD = DD.replace(ID._DefaultCdnUrl, CD)
          } else if (ID._CdnVersion) {
          const CD = `${ID._DefaultCdnUrl}/v${ID._CdnVersion}`;
          DD.startsWith(CD) || (DD = DD.replace(ID._DefaultCdnUrl, CD))
        }
        return DD = ID.ScriptPreprocessUrl(DD), CD && !ID.IsAbsoluteUrl(DD) && (DD = ID.GetAbsoluteUrl(DD)), DD
      }
      static LoadBabylonScript(DD, CD, cD, pD) {
        DD = ID.GetBabylonScriptURL(DD), ID.LoadScript(DD, CD, cD)
      }
      static async LoadBabylonScriptAsync(DD) {
        return DD = ID.GetBabylonScriptURL(DD), await ID.LoadScriptAsync(DD)
      }
      static _LoadScriptNative(DD, CD, cD, pD) {
        if (_native) {
          if (arguments.length > 4 && void 0 !== arguments[4] && arguments[4]) {
            const DD = "Loading a script as an ES module is not supported in Babylon Native";
            return void cD?.(DD, new Error(DD))
          }
          ID.LoadFile(DD, (DD => {
            try {
              Function(DD).apply(null), CD && CD()
            } catch (ID) {
              cD && cD("LoadScript Error", ID)
            }
          }), void 0, void 0, !1, ((DD, CD) => {
            cD && cD("LoadScript Error", CD)
          }))
        }
      }
      static _LoadScriptWeb(DD, CD, cD, ID) {
        let pD = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
        if ("function" === typeof importScripts) {
          try {
            importScripts(DD), CD && CD()
          } catch (QD) {
            cD?.(`Unable to load script '${DD}' in worker`, QD)
          }
          return
        }
        if (!(0, iD.m)()) return void cD?.(`Cannot load script '${DD}' outside of a window or a worker`);
        const fD = document.getElementsByTagName("head")[0],
          bD = document.createElement("script");
        pD ? (bD.setAttribute("type", "module"), bD.innerText = DD) : (bD.setAttribute("type", "text/javascript"), bD.setAttribute("src", DD)), ID && (bD.id = ID), bD.onload = () => {
          CD && CD()
        }, bD.onerror = CD => {
          cD && cD(`Unable to load script '${DD}'`, CD)
        }, fD.appendChild(bD)
      }
      static async LoadScriptAsync(DD, CD) {
        return await new Promise(((cD, ID) => {
          this.LoadScript(DD, (() => {
            cD()
          }), ((DD, CD) => {
            ID(CD || new Error(DD))
          }), CD)
        }))
      }
      static ReadFileAsDataURL(DD, CD, cD) {
        const ID = new FileReader,
          iD = {
            onCompleteObservable: new pD.c,
            abort: () => ID.abort()
          };
        return ID.onloadend = () => {
          iD.onCompleteObservable.notifyObservers(iD)
        }, ID.onload = DD => {
          CD(DD.target.result)
        }, ID.onprogress = cD, ID.readAsDataURL(DD), iD
      }
      static ReadFile(DD, CD, cD, ID, pD) {
        return (0, yD.s)(DD, CD, cD, ID, pD)
      }
      static FileAsURL(DD) {
        const CD = new Blob([DD]);
        return window.URL.createObjectURL(CD)
      }
      static Format(DD) {
        let CD = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 2;
        return DD.toFixed(CD)
      }
      static DeepCopy(DD, CD, cD, ID) {
        bD.e.DeepCopy(DD, CD, cD, ID)
      }
      static IsEmpty(DD) {
        for (const CD in DD)
          if (Object.prototype.hasOwnProperty.call(DD, CD)) return !1;
        return !0
      }
      static RegisterTopRootEvents(DD, CD) {
        for (let ID = 0; ID < CD.length; ID++) {
          const pD = CD[ID];
          DD.addEventListener(pD.name, pD.handler, !1);
          try {
            window.parent && window.parent.addEventListener(pD.name, pD.handler, !1)
          } catch (cD) {}
        }
      }
      static UnregisterTopRootEvents(DD, CD) {
        for (let ID = 0; ID < CD.length; ID++) {
          const pD = CD[ID];
          DD.removeEventListener(pD.name, pD.handler);
          try {
            DD.parent && DD.parent.removeEventListener(pD.name, pD.handler)
          } catch (cD) {}
        }
      }
      static async DumpFramebuffer(DD, CD, cD, ID) {
        throw (0, wD.m)("DumpTools")
      }
      static DumpData(DD, CD, cD, ID) {
        throw (0, wD.m)("DumpTools")
      }
      static async DumpDataAsync(DD, CD, cD) {
        throw (0, wD.m)("DumpTools")
      }
      static _IsOffScreenCanvas(DD) {
        return void 0 !== DD.convertToBlob
      }
      static ToBlob(DD, CD) {
        let cD = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "image/png",
          pD = arguments.length > 3 ? arguments[3] : void 0;
        ID._IsOffScreenCanvas(DD) || DD.toBlob || (DD.toBlob = function(DD, CD, cD) {
          setTimeout((() => {
            const ID = atob(this.toDataURL(CD, cD).split(",")[1]),
              pD = ID.length,
              iD = new Uint8Array(pD);
            for (let DD = 0; DD < pD; DD++) iD[DD] = ID.charCodeAt(DD);
            DD(new Blob([iD]))
          }))
        }), ID._IsOffScreenCanvas(DD) ? DD.convertToBlob({
          type: cD,
          quality: pD
        }).then((DD => CD(DD))) : DD.toBlob((function(DD) {
          CD(DD)
        }), cD, pD)
      }
      static DownloadBlob(DD, CD) {
        if ("download" in document.createElement("a")) {
          if (!CD) {
            const DD = new Date;
            CD = "screenshot_" + ((DD.getFullYear() + "-" + (DD.getMonth() + 1)).slice(2) + "-" + DD.getDate() + "_" + DD.getHours() + "-" + ("0" + DD.getMinutes()).slice(-2)) + ".png"
          }
          ID.Download(DD, CD)
        } else if (DD && "undefined" !== typeof URL) {
          const CD = URL.createObjectURL(DD),
            cD = window.open("");
          if (!cD) return;
          const ID = cD.document.createElement("img");
          ID.onload = function() {
            URL.revokeObjectURL(CD)
          }, ID.src = CD, cD.document.body.appendChild(ID)
        }
      }
      static EncodeScreenshotCanvasData(DD, CD) {
        let cD = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "image/png",
          pD = arguments.length > 3 ? arguments[3] : void 0,
          iD = arguments.length > 4 ? arguments[4] : void 0;
        if ("string" !== typeof pD && CD) {
          if (CD) {
            if (ID._IsOffScreenCanvas(DD)) return void DD.convertToBlob({
              type: cD,
              quality: iD
            }).then((DD => {
              const cD = new FileReader;
              cD.readAsDataURL(DD), cD.onloadend = () => {
                const DD = cD.result;
                CD(DD)
              }
            }));
            const pD = DD.toDataURL(cD, iD);
            CD(pD)
          }
        } else this.ToBlob(DD, (function(DD) {
          DD && ID.DownloadBlob(DD, pD), CD && CD("")
        }), cD, iD)
      }
      static Download(DD, CD) {
        if ("undefined" === typeof URL) return;
        const cD = window.URL.createObjectURL(DD),
          ID = document.createElement("a");
        document.body.appendChild(ID), ID.style.display = "none", ID.href = cD, ID.download = CD, ID.addEventListener("click", (() => {
          ID.parentElement && ID.parentElement.removeChild(ID)
        })), ID.click(), window.URL.revokeObjectURL(cD)
      }
      static BackCompatCameraNoPreventDefault(DD) {
        return "boolean" === typeof DD[0] ? DD[0] : "boolean" === typeof DD[1] && DD[1]
      }
      static CreateScreenshot(DD, CD, cD, ID) {
        throw (0, wD.m)("ScreenshotTools")
      }
      static async CreateScreenshotAsync(DD, CD, cD) {
        throw (0, wD.m)("ScreenshotTools")
      }
      static CreateScreenshotUsingRenderTarget(DD, CD, cD, ID) {
        throw (0, wD.m)("ScreenshotTools")
      }
      static async CreateScreenshotUsingRenderTargetAsync(DD, CD, cD) {
        throw (0, wD.m)("ScreenshotTools")
      }
      static RandomId() {
        return (0, ZD.d)()
      }
      static IsBase64(DD) {
        return (0, yD.m)(DD)
      }
      static DecodeBase64(DD) {
        return (0, yD.d)(DD)
      }
      static get errorsCount() {
        return fD.e.errorsCount
      }
      static Log(DD) {
        fD.e.Log(DD)
      }
      static Warn(DD) {
        fD.e.Warn(DD)
      }
      static Error(DD) {
        fD.e.Error(DD)
      }
      static get LogCache() {
        return fD.e.LogCache
      }
      static ClearLogCache() {
        fD.e.ClearLogCache()
      }
      static set LogLevels(DD) {
        fD.e.LogLevels = DD
      }
      static set PerformanceLogLevel(DD) {
        (DD & ID.PerformanceUserMarkLogLevel) !== ID.PerformanceUserMarkLogLevel ? (DD & ID.PerformanceConsoleLogLevel) !== ID.PerformanceConsoleLogLevel ? (ID.StartPerformanceCounter = ID._StartPerformanceCounterDisabled, ID.EndPerformanceCounter = ID._EndPerformanceCounterDisabled, _native?.disablePerformanceLogging?.()) : _native?.enablePerformanceLogging ? (_native.enablePerformanceLogging(2), ID.StartPerformanceCounter = ID._StartMarkNative, ID.EndPerformanceCounter = ID._EndMarkNative) : (ID.StartPerformanceCounter = ID._StartPerformanceConsole, ID.EndPerformanceCounter = ID._EndPerformanceConsole) : _native?.enablePerformanceLogging ? (_native.enablePerformanceLogging(1), ID.StartPerformanceCounter = ID._StartMarkNative, ID.EndPerformanceCounter = ID._EndMarkNative) : (ID.StartPerformanceCounter = ID._StartUserMark, ID.EndPerformanceCounter = ID._EndUserMark)
      }
      static _StartPerformanceCounterDisabled(DD, CD) {}
      static _EndPerformanceCounterDisabled(DD, CD) {}
      static _StartUserMark(DD) {
        let CD = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        if (!ID._Performance) {
          if (!(0, iD.m)()) return;
          ID._Performance = window.performance
        }
        CD && ID._Performance.mark && ID._Performance.mark(DD + "-Begin")
      }
      static _EndUserMark(DD) {
        (!(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1]) && ID._Performance.mark && (ID._Performance.mark(DD + "-End"), ID._Performance.measure(DD, DD + "-Begin", DD + "-End"))
      }
      static _StartPerformanceConsole(DD) {
        let CD = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        CD && (ID._StartUserMark(DD, CD), console.time && console.time(DD))
      }
      static _EndPerformanceConsole(DD) {
        let CD = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        CD && (ID._EndUserMark(DD, CD), console.timeEnd(DD))
      }
      static _StartMarkNative(DD) {
        if ((!(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1]) && _native?.startPerformanceCounter)
          if (ID._NativePerformanceCounterHandles.has(DD)) ID.Warn(`Performance counter with name ${DD} is already started.`);
          else {
            const CD = _native.startPerformanceCounter(DD);
            ID._NativePerformanceCounterHandles.set(DD, CD)
          }
      }
      static _EndMarkNative(DD) {
        if ((!(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1]) && _native?.endPerformanceCounter) {
          const CD = ID._NativePerformanceCounterHandles.get(DD);
          CD ? (_native.endPerformanceCounter(CD), ID._NativePerformanceCounterHandles.delete(DD)) : ID.Warn(`Performance counter with name ${DD} was not started.`)
        }
      }
      static get Now() {
        return QD.b.Now
      }
      static GetClassName(DD) {
        let CD = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          cD = null;
        if (!CD && DD.getClassName) cD = DD.getClassName();
        else {
          if (DD instanceof Object) {
            cD = (CD ? DD : Object.getPrototypeOf(DD)).constructor.__bjsclassName__
          }
          cD || (cD = typeof DD)
        }
        return cD
      }
      static First(DD, CD) {
        for (const cD of DD)
          if (CD(cD)) return cD;
        return null
      }
      static getFullClassName(DD) {
        let CD = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          cD = null,
          ID = null;
        if (!CD && DD.getClassName) cD = DD.getClassName();
        else {
          if (DD instanceof Object) {
            const pD = CD ? DD : Object.getPrototypeOf(DD);
            cD = pD.constructor.__bjsclassName__, ID = pD.constructor.__bjsmoduleName__
          }
          cD || (cD = typeof DD)
        }
        return cD ? (null != ID ? ID + "." : "") + cD : null
      }
      static async DelayAsync(DD) {
        await new Promise((CD => {
          setTimeout((() => {
            CD()
          }), DD)
        }))
      }
      static IsSafari() {
        return !!(0, iD.i)() && /^((?!chrome|android).)*safari/i.test(navigator.userAgent)
      }
    }

    function ND(DD, CD) {
      return cD => {
        cD.__bjsclassName__ = DD, cD.__bjsmoduleName__ = null != CD ? CD : null
      }
    }
    ID = vD, vD.AssetBaseUrl = "", vD.UseCustomRequestHeaders = !1, vD.CustomRequestHeaders = SD.b.CustomRequestHeaders, vD.GetDOMTextContent = iD.c, vD._DefaultCdnUrl = "https://cdn.babylonjs.com", vD._CdnVersion = "9.28.0", vD._DefaultAssetsUrl = "https://assets.babylonjs.com/core", vD.LoadScript = "undefined" === typeof _native ? ID._LoadScriptWeb : ID._LoadScriptNative, vD.GetAbsoluteUrl = "object" === typeof document ? DD => {
      const CD = document.createElement("a");
      return CD.href = DD, CD.href
    } : "function" === typeof URL && "object" === typeof location ? DD => new URL(DD, location.origin).href : () => {
      throw new Error("Unable to get absolute URL. Override BABYLON.Tools.GetAbsoluteUrl to a custom implementation for the current context.")
    }, vD.NoneLogLevel = fD.e.NoneLogLevel, vD.MessageLogLevel = fD.e.MessageLogLevel, vD.WarningLogLevel = fD.e.WarningLogLevel, vD.ErrorLogLevel = fD.e.ErrorLogLevel, vD.AllLogLevel = fD.e.AllLogLevel, vD.IsWindowObjectExist = iD.m, vD.PerformanceNoneLogLevel = 0, vD.PerformanceUserMarkLogLevel = 1, vD.PerformanceConsoleLogLevel = 2, vD._NativePerformanceCounterHandles = new Map, vD.StartPerformanceCounter = ID._StartPerformanceCounterDisabled, vD.EndPerformanceCounter = ID._EndPerformanceCounterDisabled;
    class gD {
      constructor(DD, CD, cD) {
        let ID = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
        this.iterations = DD, this.index = ID - 1, this._done = !1, this._fn = CD, this._successCallback = cD
      }
      executeNext() {
        this._done || (this.index + 1 < this.iterations ? (++this.index, this._fn(this)) : this.breakLoop())
      }
      breakLoop() {
        this._done = !0, this._successCallback()
      }
      static Run(DD, CD, cD) {
        const ID = new gD(DD, CD, cD, arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0);
        return ID.executeNext(), ID
      }
      static SyncAsyncForLoop(DD, CD, cD, ID, pD) {
        let iD = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0;
        return gD.Run(Math.ceil(DD / CD), (ID => {
          pD && pD() ? ID.breakLoop() : setTimeout((() => {
            for (let iD = 0; iD < CD; ++iD) {
              const fD = ID.index * CD + iD;
              if (fD >= DD) break;
              if (cD(fD), pD && pD()) {
                ID.breakLoop();
                break
              }
            }
            ID.executeNext()
          }), iD)
        }), ID)
      }
    }
    let XD = !1;

    function mD() {
      XD || (XD = !0, vD.Mix = oD.k, vD.IsExponentOfTwo = oD.h, BD.b.FallbackTexture = "data:image/jpg;base64,/9j/4AAQSkZJRgABAQEAYABgAAD/4QBmRXhpZgAATU0AKgAAAAgABAEaAAUAAAABAAAAPgEbAAUAAAABAAAARgEoAAMAAAABAAIAAAExAAIAAAAQAAAATgAAAAAAAABgAAAAAQAAAGAAAAABcGFpbnQubmV0IDQuMC41AP/bAEMABAIDAwMCBAMDAwQEBAQFCQYFBQUFCwgIBgkNCw0NDQsMDA4QFBEODxMPDAwSGBITFRYXFxcOERkbGRYaFBYXFv/bAEMBBAQEBQUFCgYGChYPDA8WFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFv/AABEIAQABAAMBIgACEQEDEQH/xAAfAAABBQEBAQEBAQAAAAAAAAAAAQIDBAUGBwgJCgv/xAC1EAACAQMDAgQDBQUEBAAAAX0BAgMABBEFEiExQQYTUWEHInEUMoGRoQgjQrHBFVLR8CQzYnKCCQoWFxgZGiUmJygpKjQ1Njc4OTpDREVGR0hJSlNUVVZXWFlaY2RlZmdoaWpzdHV2d3h5eoOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4eLj5OXm5+jp6vHy8/T19vf4+fr/xAAfAQADAQEBAQEBAQEBAAAAAAAAAQIDBAUGBwgJCgv/xAC1EQACAQIEBAMEBwUEBAABAncAAQIDEQQFITEGEkFRB2FxEyIygQgUQpGhscEJIzNS8BVictEKFiQ04SXxFxgZGiYnKCkqNTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqCg4SFhoeIiYqSk5SVlpeYmZqio6Slpqeoqaqys7S1tre4ubrCw8TFxsfIycrS09TV1tfY2dri4+Tl5ufo6ery8/T19vf4+fr/2gAMAwEAAhEDEQA/APH6KKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FCiiigD6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++gooooA+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gUKKKKAPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76CiiigD5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BQooooA+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/voKKKKAPl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FCiiigD6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++gooooA+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gUKKKKAPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76CiiigD5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BQooooA+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/voKKKKAPl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FCiiigD6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++gooooA+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gUKKKKAPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76Pl+iiivuj+BT6gooor4U/vo+X6KKK+6P4FPqCiiivhT++j5fooor7o/gU+oKKKK+FP76P//Z")
    }
  }
};
Object.freeze(modules);
for (const DD in modules) Object.freeze(modules[DD]);