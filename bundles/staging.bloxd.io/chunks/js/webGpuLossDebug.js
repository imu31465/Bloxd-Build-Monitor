export const id = 65;
export const ids = [65];
export const modules = {
  35851: (YY, rY, DY) => {
    DY.r(rY), DY.d(rY, {
      noteJsEngine: () => JY,
      noteJsJoin: () => bY,
      noteWasmJoin: () => XY,
      noteWasmPick: () => MY,
      noteWebGpuLoss: () => qY,
      startWebGpuLossDebug: () => dY
    });
    var FY = DY(332),
      AY = DY(19),
      IY = DY(2517),
      RY = DY(3015),
      OY = DY(649),
      gY = DY(309),
      aY = DY(99),
      vY = DY(115),
      uY = DY(2521),
      sY = DY(40),
      iY = DY(121),
      yY = DY(307),
      QY = DY(2565),
      oY = DY(341),
      WY = DY(8655);
    const EY = 40,
      mY = 160;

    function VY(YY, rY) {
      return `"${(YY.length>rY?`${YY.slice(0,rY)}...`:YY).replace(/[^ -~]|["\\]/g,"?")}"`
    }

    function SY(YY) {
      return YY ? "yes" : "no"
    }

    function lY(YY) {
      var rY;
      const DY = YY.storedRenderer;
      return [`loss holds ${SY(YY.lossHolds)}`, `stops packs ${SY(YY.lossStopsPack)}`, `any loss ${SY(YY.anyLoss)}`, `old intel ${SY(YY.oldIntelDriver)}`, `default off for packs ${SY(YY.defaultOffForPacks)}`, `default off reason ${null!==(rY=YY.defaultOffReason)&&void 0!==rY?rY:"none"}`, `setting ${YY.setting?"on":"off"} (stored ${null===YY.settingStored?"unset":YY.settingStored?"on":"off"})`, `renderer url ${null===YY.urlRenderer?"none":VY(YY.urlRenderer,12)}, stored ${null===DY||void 0===DY?"none":VY(String(DY),12)}`, `hidden-loss arm ${YY.hiddenLossArm}`].join(", ")
    }

    function TY(YY) {
      if (null === YY) return "no renderer settled";
      const {
        requested: rY,
        choice: DY,
        source: FY,
        fallbackReason: AY
      } = YY;
      return `renderer requested ${rY}, runs ${DY}, from ${FY}${null===AY?"":`, fell back: ${VY(AY,80)}`}`
    }

    function eY(YY, rY) {
      return YY ? `stopping packs: iOS, ${null!==rY&&void 0!==rY?rY:1} losses in a row within a day` : "stopping packs"
    }

    function NY(YY) {
      var rY, DY, FY;
      return `pick (wasm): backend ${null!==(rY=YY.backend)&&void 0!==rY?rY:"none"}, webgpu fallback ${null!==(DY=YY.reason)&&void 0!==DY?DY:"none"}, from ${null!==(FY=YY.source)&&void 0!==FY?FY:"none"}, storage pull breaks ${SY(YY.storagePullBreaks)}; packs run ${SY("webgpu"===YY.backend&&!YY.storagePullBreaks)}, else ${YY.noWebGpu}`
    }

    function BY(YY, rY, DY) {
      return `pack ${null===YY?"(name not read)":VY(YY,EY)} ${rY}${null===DY?"":`, ${DY} variants`}`
    }
    const cY = "shaderPack:failedWebGpuOff",
      KY = new class {
        constructor() {
          this.joins = 0, this.losses = 0, this.noPackSaid = !1
        }
        join() {
          return this.joins++, this.joins <= 5 ? "detail" : this.joins <= 30 ? "outcome" : 31 === this.joins ? "cap" : "none"
        }
        noPack() {
          const YY = !this.noPackSaid;
          return this.noPackSaid = !0, YY
        }
        loss() {
          return this.losses++, this.losses <= 10 ? "line" : 11 === this.losses ? "cap" : "none"
        }
      };
    let HY = null,
      zY = null,
      ZY = 0;

    function CY(YY) {
      (0, QY.n)("webgpuloss", YY)
    }

    function fY() {
      return {
        lossHolds: (0, yY.v)(),
        lossStopsPack: (0, yY.A)(),
        anyLoss: (0, yY.i)(),
        oldIntelDriver: !0 === sY.m.getItem(iY.Q),
        defaultOffForPacks: AY.b.isWebGpuDefaultOff(),
        defaultOffReason: AY.b.webGpuDefaultOffReason(),
        settingStored: sY.m.getItem(FY.ic),
        setting: AY.b.get("clientEscMenuOptions").useWebGpu,
        urlRenderer: vY.currentUrl.getSearchParam(uY.e),
        storedRenderer: sY.m.getItem(uY.f),
        hiddenLossArm: gY.e.webgpu_hidden_loss_v1
      }
    }

    function jY(YY) {
      return function(YY, rY, DY) {
        if (null === YY || void 0 === YY) return "none";
        if ("object" !== typeof YY) return `unreadable (${typeof YY})`;
        const FY = YY,
          AY = "number" === typeof FY.at ? FY.at : null;
        return ["browser " + (rY ? "this one" : "another"), null === AY ? "no time" : `set ${((DY-AY)/oY.h).toFixed(1)} h ago`, `losses ${"number"===typeof FY.losses?FY.losses:"unset (1)"}${null!==AY&&DY-AY<oY.f?", the last within a day":""}`, `hidden-only ${"number"===typeof FY.hiddenLosses?FY.hiddenLosses:"no"}`, `first page ${"hidden"===FY.firstPage||"visible"===FY.firstPage?FY.firstPage:"unset (visible)"}`].join(", ")
      }(YY, function(YY) {
        try {
          return "object" === typeof YY && null !== YY && YY.browser === (0, yY.e)()
        } catch {
          return !1
        }
      }(YY), Date.now())
    }

    function hY() {
      const YY = (0, yY.l)().now;
      return "number" === typeof(null === YY || void 0 === YY ? void 0 : YY.losses) ? YY.losses : null
    }

    function dY() {
      const {
        atLoad: YY,
        now: rY,
        unreported: DY
      } = (0, yY.l)(), FY = JSON.stringify(YY) === JSON.stringify(rY) ? "Mi" : `now ${jY(rY)}`;
      CY(`load (${OY.r?"wasm":"js"}, os ${(0,aY.getOperatingSystem)()}): stored loss ${jY(YY)}; ${FY}; unreported ${function(YY){if(null===YY||void 0===YY||"object"!==typeof YY)return"none";const{hidden:rY,visible:DY}=YY;return`
        hidden $ {
          "number" === typeof rY ? rY : 0
        }, visible $ {
          "number" === typeof DY ? DY : 0
        }
        `}(DY)}; webgpu_loss_page ${yY.x}`), CY(`load: ${lY(fY())}; pack expected ${(0,RY.c)(aY.featureFlags.settings.canUseShaderPacks)?"yes":"no"}; WebGPU API ${"gpu"in navigator?"yes":"no"}`)
    }

    function JY(YY) {
      HY = YY, CY(function(YY, rY, DY) {
        const FY = YY.setting ? "the setting is on" : (0, WY.b)(YY.packActive, YY.defaultOffForPacks) ? "the pack forces it" : YY.packActive ? "the pack can't force it: default off for packs" : "no active pack, setting off";
        return `engine (js): useWebGpu ${SY(YY.useWebGpu)} (${FY}); ${TY(rY)}; webgpu fallback ${null!==DY&&void 0!==DY?DY:"unset"}`
      }(YY, (0, IY.h)(), (0, aY.getWebGpuFallbackReason)()))
    }

    function MY(YY) {
      zY = YY, CY(NY(YY))
    }
    async function wY(YY, rY, FY, AY) {
      const IY = ++ZY,
        RY = await async function(YY) {
          var rY, FY;
          const [{
            shaderPackPage: AY,
            harnessShaderPackMode: IY
          }, {
            getShaderPackPolicy: RY
          }, {
            packRunsIn: OY
          }] = await Promise.all([DY.e(130).then((() => DY(38553))), DY.e(89).then((() => DY(40254))), DY.e(134).then((() => DY(40263)))]), gY = await AY.load();
          if ("none" === gY.status) return null;
          const aY = null !== (rY = IY()) && void 0 !== rY ? rY : RY(YY),
            vY = "active" === gY.status ? gY.pack.variants : gY.variants,
            uY = OY(vY, aY);
          return {
            text: `${"active"===gY.status?BY(gY.pack.name,"active",vY.length):BY(null,`blocked (${gY.messageKey})`,null!==(FY=null===vY||void 0===vY?void 0:vY.length)&&void 0!==FY?FY:null)}; game policy ${aY}, runs in it ${uY?"yes":"no"}`,
            runs: uY
          }
        }(YY);
      if (null === RY) return void(KY.noPack() && CY(`join ${IY}: no shader pack on this page (further joins without one not logged)`));
      const OY = KY.join();
      if ("none" === OY) return;
      if ("cap" === OY) return void CY(`join ${IY}: further joins not logged`);
      const gY = function(YY) {
          switch (YY.status) {
            case "ok":
              return void 0 === YY.couldntRun ? "joined" : `joined without the pack: ${YY.couldntRun}`;
            case "Hr":
              return "Hr";
            case "failed":
              return `failed: ${YY.messageKey}`
          }
        }(rY),
        aY = ("ok" === rY.status ? rY.couldntRun : "failed" === rY.status ? rY.messageKey : void 0) === cY ? `; cause: ${AY()}` : "";
      "outcome" !== OY ? (CY(`join ${IY}: ${RY.text}`), RY.runs && (CY(`join ${IY}: needs WebGPU; ${FY()}`), CY(`join ${IY}: ${lY(fY())}`)), CY(`join ${IY}: ${gY}${aY}`)) : CY(`join ${IY}: ${gY}${aY}`)
    }

    function bY(YY, rY, DY) {
      var FY;
      const AY = null !== (FY = null === rY || void 0 === rY ? void 0 : rY.isRunning()) && void 0 !== FY && FY;
      return wY(YY, DY, (() => `Lite runtime ${null===rY?"no":"yes, running "+(AY?"yes":"no")}; ${TY((0,IY.h)())}`), (() => {
        return YY = HY, rY = fY(), DY = "ios" === (0, aY.getOperatingSystem)(), FY = hY(), null === YY ? "engine choice not seen" : YY.packActive ? (0, WY.b)(YY.packActive, YY.defaultOffForPacks) ? "the pack forced WebGPU, yet nothing asked for a renderer: unexpected" : rY.lossStopsPack ? `a loss ${eY(DY,FY)}` : "old Intel driver verdict, worded off as a loss is stored" : "no active pack when the engine was built, so nothing forced WebGPU; worded off as a loss is stored" + (rY.lossStopsPack ? "" : " (one that doesn't stop packs)");
        var YY, rY, DY, FY
      }))
    }

    function XY(YY, rY, DY) {
      return wY(YY, null !== rY ? {
        status: "failed",
        messageKey: rY
      } : {
        status: "ok",
        couldntRun: null !== DY && void 0 !== DY ? DY : void 0
      }, (() => null === zY ? "pick not seen" : NY(zY)), (() => function(YY, rY, DY, FY) {
        var AY, IY, RY, OY;
        return null === YY ? "pick not seen" : "off_after_loss" === YY.reason ? `off after a loss, ${"pack"===YY.source?eY(DY,FY):`from ${null!==(OY=YY.source)&&void 0!==OY?OY:"none"}`}` : "not_requested" === YY.reason ? `not requested, from ${null!==(RY=YY.source)&&void 0!==RY?RY:"none"} (setting ${rY.setting?"on":"off"})` : `${null!==(AY=YY.reason)&&void 0!==AY?AY:"none"}, from ${null!==(IY=YY.source)&&void 0!==IY?IY:"none"}`
      }(zY, fY(), "ios" === (0, aY.getOperatingSystem)(), hY())))
    }

    function qY(YY, rY, DY) {
      const FY = KY.loss();
      if ("none" === FY) return;
      if ("cap" === FY) return void CY("further losses not logged");
      const AY = fY();
      CY(function(YY, rY, DY, FY) {
        return `loss (${YY}): ${rY}${null===DY?"":` ${VY(DY,mY)}`}; ${FY}`
      }(YY, rY, DY, `stored ${jY((0,yY.l)().now)}; holds ${AY.lossHolds?"yes":"no"}, stops packs ${AY.lossStopsPack?"yes":"no"}`))
    }
  },
  8655: (YY, rY, DY) => {
    function FY(YY, rY) {
      return YY && !rY
    }
    DY.d(rY, {
      b: () => FY
    })
  }
};
Object.freeze(modules);
for (const YY in modules) Object.freeze(modules[YY]);