export const id = 65;
export const ids = [65];
export const modules = {
  36001: (UU, RU, gU) => {
    gU.r(RU), gU.d(RU, {
      noteJsEngine: () => HU,
      noteJsJoin: () => yU,
      noteWasmJoin: () => kU,
      noteWasmPick: () => SU,
      noteWebGpuLoss: () => FU,
      startWebGpuLossDebug: () => dU
    });
    var tU = gU(299),
      pU = gU(21),
      EU = gU(2569),
      PU = gU(3151),
      TU = gU(603),
      qU = gU(279),
      KU = gU(96),
      cU = gU(109),
      GU = gU(2577),
      jU = gU(34),
      uU = gU(122),
      CU = gU(274),
      hU = gU(2624),
      QU = gU(311),
      eU = gU(8902);
    const WU = 40,
      fU = 160;

    function xU(UU, RU) {
      return `"${(UU.length>RU?`${UU.slice(0,RU)}...`:UU).replace(/[^ -~]|["\\]/g,"?")}"`
    }

    function mU(UU) {
      return UU ? "yes" : "no"
    }

    function IU(UU) {
      var RU;
      const gU = UU.storedRenderer;
      return [`loss holds ${mU(UU.lossHolds)}`, `stops packs ${mU(UU.lossStopsPack)}`, `any loss ${mU(UU.anyLoss)}`, `old intel ${mU(UU.oldIntelDriver)}`, `default off for packs ${mU(UU.defaultOffForPacks)}`, `default off reason ${null!==(RU=UU.defaultOffReason)&&void 0!==RU?RU:"none"}`, `setting ${UU.setting?"on":"off"} (stored ${null===UU.settingStored?"unset":UU.settingStored?"on":"off"})`, `renderer url ${null===UU.urlRenderer?"none":xU(UU.urlRenderer,12)}, stored ${null===gU||void 0===gU?"none":xU(String(gU),12)}`, `hidden-loss arm ${UU.hiddenLossArm}`].join(", ")
    }

    function JU(UU) {
      if (null === UU) return "no renderer settled";
      const {
        requested: RU,
        choice: gU,
        source: tU,
        fallbackReason: pU
      } = UU;
      return `renderer requested ${RU}, runs ${gU}, from ${tU}${null===pU?"":`, fell back: ${xU(pU,80)}`}`
    }

    function wU(UU, RU) {
      return UU ? `stopping packs: iOS, ${null!==RU&&void 0!==RU?RU:1} losses in a row within a day` : "stopping packs"
    }

    function nU(UU) {
      var RU, gU, tU;
      return `pick (wasm): backend ${null!==(RU=UU.backend)&&void 0!==RU?RU:"none"}, webgpu fallback ${null!==(gU=UU.reason)&&void 0!==gU?gU:"none"}, from ${null!==(tU=UU.source)&&void 0!==tU?tU:"none"}, storage pull breaks ${mU(UU.storagePullBreaks)}; packs run ${mU("webgpu"===UU.backend&&!UU.storagePullBreaks)}, else ${UU.noWebGpu}`
    }

    function bU(UU, RU, gU) {
      return `pack ${null===UU?"(name not read)":xU(UU,WU)} ${RU}${null===gU?"":`, ${gU} variants`}`
    }
    const oU = "shaderPack:failedWebGpuOff",
      ZU = new class {
        constructor() {
          this.joins = 0, this.losses = 0, this.noPackSaid = !1
        }
        join() {
          return this.joins++, this.joins <= 5 ? "detail" : this.joins <= 30 ? "outcome" : 31 === this.joins ? "cap" : "none"
        }
        noPack() {
          const UU = !this.noPackSaid;
          return this.noPackSaid = !0, UU
        }
        loss() {
          return this.losses++, this.losses <= 10 ? "line" : 11 === this.losses ? "cap" : "none"
        }
      };
    let aU = null,
      YU = null,
      BU = 0;

    function VU(UU) {
      (0, hU.h)("webgpuloss", UU)
    }

    function rU() {
      return {
        lossHolds: (0, CU.t)(),
        lossStopsPack: (0, CU.x)(),
        anyLoss: (0, CU.c)(),
        oldIntelDriver: !0 === jU.k.getItem(uU.N),
        defaultOffForPacks: pU.b.isWebGpuDefaultOff(),
        defaultOffReason: pU.b.webGpuDefaultOffReason(),
        settingStored: jU.k.getItem(tU.gc),
        setting: pU.b.get("clientEscMenuOptions").useWebGpu,
        urlRenderer: cU.currentUrl.getSearchParam(GU.e),
        storedRenderer: jU.k.getItem(GU.i),
        hiddenLossArm: qU.c.webgpu_hidden_loss_v1
      }
    }

    function XU(UU) {
      return function(UU, RU, gU) {
        if (null === UU || void 0 === UU) return "none";
        if ("object" !== typeof UU) return `unreadable (${typeof UU})`;
        const tU = UU,
          pU = "number" === typeof tU.at ? tU.at : null;
        return ["browser " + (RU ? "this one" : "another"), null === pU ? "no time" : `set ${((gU-pU)/QU.i).toFixed(1)} h ago`, `losses ${"number"===typeof tU.losses?tU.losses:"unset (1)"}${null!==pU&&gU-pU<QU.f?", the last within a day":""}`, `hidden-only ${"number"===typeof tU.hiddenLosses?tU.hiddenLosses:"no"}`, `first page ${"hidden"===tU.firstPage||"visible"===tU.firstPage?tU.firstPage:"unset (visible)"}`].join(", ")
      }(UU, function(UU) {
        try {
          return "object" === typeof UU && null !== UU && UU.browser === (0, CU.b)()
        } catch {
          return !1
        }
      }(UU), Date.now())
    }

    function vU() {
      const UU = (0, CU.k)().now;
      return "number" === typeof(null === UU || void 0 === UU ? void 0 : UU.losses) ? UU.losses : null
    }

    function dU() {
      const {
        atLoad: UU,
        now: RU,
        unreported: gU
      } = (0, CU.k)(), tU = JSON.stringify(UU) === JSON.stringify(RU) ? "xu" : `now ${XU(RU)}`;
      VU(`load (${TU.u?"wasm":"js"}, os ${(0,KU.getOperatingSystem)()}): stored loss ${XU(UU)}; ${tU}; unreported ${function(UU){if(null===UU||void 0===UU||"object"!==typeof UU)return"none";const{hidden:RU,visible:gU}=UU;return`
        hidden $ {
          "number" === typeof RU ? RU : 0
        }, visible $ {
          "number" === typeof gU ? gU : 0
        }
        `}(gU)}; webgpu_loss_page ${CU.u}`), VU(`load: ${IU(rU())}; pack expected ${(0,PU.f)(KU.featureFlags.settings.canUseShaderPacks)?"yes":"no"}; WebGPU API ${"gpu"in navigator?"yes":"no"}`)
    }

    function HU(UU) {
      aU = UU, VU(function(UU, RU, gU) {
        const tU = UU.setting ? "the setting is on" : (0, eU.c)(UU.packActive, UU.defaultOffForPacks) ? "the pack forces it" : UU.packActive ? "the pack can't force it: default off for packs" : "no active pack, setting off";
        return `engine (js): useWebGpu ${mU(UU.useWebGpu)} (${tU}); ${JU(RU)}; webgpu fallback ${null!==gU&&void 0!==gU?gU:"unset"}`
      }(UU, (0, EU.l)(), (0, KU.getWebGpuFallbackReason)()))
    }

    function SU(UU) {
      YU = UU, VU(nU(UU))
    }
    async function sU(UU, RU, tU, pU) {
      const EU = ++BU,
        PU = await async function(UU) {
          var RU, tU;
          const [{
            shaderPackPage: pU,
            harnessShaderPackMode: EU
          }, {
            getShaderPackPolicy: PU
          }, {
            packRunsIn: TU
          }] = await Promise.all([gU.e(129).then((() => gU(38747))), gU.e(89).then((() => gU(40658))), gU.e(133).then((() => gU(40664)))]), qU = await pU.load();
          if ("none" === qU.status) return null;
          const KU = null !== (RU = EU()) && void 0 !== RU ? RU : PU(UU),
            cU = "active" === qU.status ? qU.pack.variants : qU.variants,
            GU = TU(cU, KU);
          return {
            text: `${"active"===qU.status?bU(qU.pack.name,"active",cU.length):bU(null,`blocked (${qU.messageKey})`,null!==(tU=null===cU||void 0===cU?void 0:cU.length)&&void 0!==tU?tU:null)}; game policy ${KU}, runs in it ${GU?"yes":"no"}`,
            runs: GU
          }
        }(UU);
      if (null === PU) return void(ZU.noPack() && VU(`join ${EU}: no shader pack on this page (further joins without one not logged)`));
      const TU = ZU.join();
      if ("none" === TU) return;
      if ("cap" === TU) return void VU(`join ${EU}: further joins not logged`);
      const qU = function(UU) {
          switch (UU.status) {
            case "ok":
              return void 0 === UU.couldntRun ? "joined" : `joined without the pack: ${UU.couldntRun}`;
            case "cg":
              return "cg";
            case "failed":
              return `failed: ${UU.messageKey}`
          }
        }(RU),
        KU = ("ok" === RU.status ? RU.couldntRun : "failed" === RU.status ? RU.messageKey : void 0) === oU ? `; cause: ${pU()}` : "";
      "outcome" !== TU ? (VU(`join ${EU}: ${PU.text}`), PU.runs && (VU(`join ${EU}: needs WebGPU; ${tU()}`), VU(`join ${EU}: ${IU(rU())}`)), VU(`join ${EU}: ${qU}${KU}`)) : VU(`join ${EU}: ${qU}${KU}`)
    }

    function yU(UU, RU, gU) {
      var tU;
      const pU = null !== (tU = null === RU || void 0 === RU ? void 0 : RU.isRunning()) && void 0 !== tU && tU;
      return sU(UU, gU, (() => `Lite runtime ${null===RU?"no":"yes, running "+(pU?"yes":"no")}; ${JU((0,EU.l)())}`), (() => {
        return UU = aU, RU = rU(), gU = "ios" === (0, KU.getOperatingSystem)(), tU = vU(), null === UU ? "engine choice not seen" : UU.packActive ? (0, eU.c)(UU.packActive, UU.defaultOffForPacks) ? "the pack forced WebGPU, yet nothing asked for a renderer: unexpected" : RU.lossStopsPack ? `a loss ${wU(gU,tU)}` : "old Intel driver verdict, worded off as a loss is stored" : "no active pack when the engine was built, so nothing forced WebGPU; worded off as a loss is stored" + (RU.lossStopsPack ? "" : " (one that doesn't stop packs)");
        var UU, RU, gU, tU
      }))
    }

    function kU(UU, RU, gU) {
      return sU(UU, null !== RU ? {
        status: "failed",
        messageKey: RU
      } : {
        status: "ok",
        couldntRun: null !== gU && void 0 !== gU ? gU : void 0
      }, (() => null === YU ? "pick not seen" : nU(YU)), (() => function(UU, RU, gU, tU) {
        var pU, EU, PU, TU;
        return null === UU ? "pick not seen" : "off_after_loss" === UU.reason ? `off after a loss, ${"pack"===UU.source?wU(gU,tU):`from ${null!==(TU=UU.source)&&void 0!==TU?TU:"none"}`}` : "not_requested" === UU.reason ? `not requested, from ${null!==(PU=UU.source)&&void 0!==PU?PU:"none"} (setting ${RU.setting?"on":"off"})` : `${null!==(pU=UU.reason)&&void 0!==pU?pU:"none"}, from ${null!==(EU=UU.source)&&void 0!==EU?EU:"none"}`
      }(YU, rU(), "ios" === (0, KU.getOperatingSystem)(), vU())))
    }

    function FU(UU, RU, gU) {
      const tU = ZU.loss();
      if ("none" === tU) return;
      if ("cap" === tU) return void VU("further losses not logged");
      const pU = rU();
      VU(function(UU, RU, gU, tU) {
        return `loss (${UU}): ${RU}${null===gU?"":` ${xU(gU,fU)}`}; ${tU}`
      }(UU, RU, gU, `stored ${XU((0,CU.k)().now)}; holds ${pU.lossHolds?"yes":"no"}, stops packs ${pU.lossStopsPack?"yes":"no"}`))
    }
  },
  8902: (UU, RU, gU) => {
    function tU(UU, RU) {
      return UU && !RU
    }
    gU.d(RU, {
      c: () => tU
    })
  }
};
Object.freeze(modules);
for (const UU in modules) Object.freeze(modules[UU]);