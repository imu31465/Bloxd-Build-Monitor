export const id = 69;
export const ids = [69];
export const modules = {
  36758: (GG, bG, ZG) => {
    ZG.r(bG), ZG.d(bG, {
      noteJsEngine: () => sG,
      noteJsJoin: () => gG,
      noteWasmJoin: () => eG,
      noteWasmPick: () => qG,
      noteWebGpuLoss: () => RG,
      startWebGpuLossDebug: () => AG
    });
    var wG = ZG(333),
      SG = ZG(17),
      LG = ZG(2768),
      yG = ZG(3441),
      kG = ZG(631),
      UG = ZG(80),
      YG = ZG(86),
      VG = ZG(2773),
      pG = ZG(29),
      fG = ZG(101),
      QG = ZG(318),
      KG = ZG(620),
      hG = ZG(2801),
      dG = ZG(352),
      JG = ZG(346),
      rG = ZG(34405);
    const zG = 40,
      EG = 160;

    function oG(GG, bG) {
      return `"${(GG.length>bG?`${GG.slice(0,bG)}...`:GG).replace(/[^ -~]|["\\]/g,"?")}"`
    }

    function XG(GG) {
      return GG ? "yes" : "no"
    }

    function uG(GG) {
      var bG;
      const ZG = GG.storedRenderer;
      return [`loss holds ${XG(GG.lossHolds)}`, `stops packs ${XG(GG.lossStopsPack)}`, `any loss ${XG(GG.anyLoss)}`, `old intel ${XG(GG.oldIntelDriver)}`, `default off for packs ${XG(GG.defaultOffForPacks)}`, `default off reason ${null!==(bG=GG.defaultOffReason)&&void 0!==bG?bG:"none"}`, `setting ${GG.setting?"on":"off"} (stored ${null===GG.settingStored?"unset":GG.settingStored?"on":"off"})`, `renderer url ${null===GG.urlRenderer?"none":oG(GG.urlRenderer,12)}, stored ${null===ZG||void 0===ZG?"none":oG(String(ZG),12)}`].join(", ")
    }

    function iG(GG) {
      if (null === GG) return "no renderer settled";
      const {
        requested: bG,
        choice: ZG,
        source: wG,
        fallbackReason: SG
      } = GG;
      return `renderer requested ${bG}, runs ${ZG}, from ${wG}${null===SG?"":`, fell back: ${oG(SG,80)}`}`
    }

    function CG(GG, bG) {
      return GG ? `stopping packs: iOS, ${null!==bG&&void 0!==bG?bG:1} losses in a row within a day` : "stopping packs"
    }

    function WG(GG) {
      var bG, ZG, wG;
      return `pick (wasm): backend ${null!==(bG=GG.backend)&&void 0!==bG?bG:"none"}, webgpu fallback ${null!==(ZG=GG.reason)&&void 0!==ZG?ZG:"none"}, from ${null!==(wG=GG.source)&&void 0!==wG?wG:"none"}, storage pull breaks ${XG(GG.storagePullBreaks)}; packs run ${XG("webgpu"===GG.backend)}, else ${GG.noWebGpu}`
    }

    function mG(GG, bG, ZG) {
      return `pack ${null===GG?"(name not read)":oG(GG,zG)} ${bG}${null===ZG?"":`, ${ZG} variants`}`
    }
    const IG = "shaderPack:failedWebGpuOff",
      FG = new class {
        constructor() {
          this.joins = 0, this.losses = 0, this.noPackSaid = !1
        }
        join() {
          return this.joins++, this.joins <= 5 ? "detail" : this.joins <= 30 ? "outcome" : 31 === this.joins ? "cap" : "none"
        }
        noPack() {
          const GG = !this.noPackSaid;
          return this.noPackSaid = !0, GG
        }
        loss() {
          return this.losses++, this.losses <= 10 ? "line" : 11 === this.losses ? "cap" : "none"
        }
      };
    let vG = null,
      aG = null,
      cG = 0;

    function lG(GG) {
      (0, hG.j)("webgpuloss", GG)
    }

    function jG() {
      return {
        lossHolds: (0, QG.I)(),
        lossStopsPack: (0, QG.T)(),
        anyLoss: (0, QG.k)(),
        oldIntelDriver: !0 === pG.h.getItem(fG.B),
        defaultOffForPacks: SG.e.isWebGpuDefaultOff(),
        defaultOffReason: SG.e.webGpuDefaultOffReason(),
        settingStored: pG.h.getItem(wG.Cc),
        setting: SG.e.get("clientEscMenuOptions").useWebGpu,
        urlRenderer: YG.currentUrl.getSearchParam(VG.b),
        storedRenderer: pG.h.getItem(VG.c)
      }
    }

    function PG(GG) {
      return function(GG, bG, ZG) {
        if (null === GG || void 0 === GG) return "none";
        if ("object" !== typeof GG) return `unreadable (${typeof GG})`;
        const wG = GG,
          SG = "number" === typeof wG.at ? wG.at : null,
          LG = ["browser " + (bG ? "this one" : "another"), null === SG ? "no time" : `set ${((ZG-SG)/dG.m).toFixed(1)} h ago`, `losses ${"number"===typeof wG.losses?wG.losses:"unset (1)"}${null!==SG&&ZG-SG<dG.j?", the last within a day":""}`, `first page ${"hidden"===wG.firstPage||"visible"===wG.firstPage?wG.firstPage:"unset (visible)"}`, `hold step ${"number"===typeof wG.holdStep?wG.holdStep:"unset (1)"}`];
        if (void 0 !== wG.reason || void 0 !== wG.message) {
          const GG = "string" === typeof wG.reason ? oG(wG.reason, JG.e) : "no reason";
          LG.push(`cause ${GG} ${!0===wG.causeSent?"reported":"unreported"}`)
        }
        return LG.join(", ")
      }(GG, function(GG) {
        try {
          return "object" === typeof GG && null !== GG && GG.browser === (0, QG.g)()
        } catch {
          return !1
        }
      }(GG), Date.now())
    }

    function MG() {
      const GG = (0, QG.v)().now;
      return "number" === typeof(null === GG || void 0 === GG ? void 0 : GG.losses) ? GG.losses : null
    }

    function AG() {
      const {
        atLoad: GG,
        now: bG,
        unreported: ZG
      } = (0, QG.v)(), wG = JSON.stringify(GG) === JSON.stringify(bG) ? "vQ" : `now ${PG(bG)}`;
      lG(`load (${kG.B?"wasm":"js"}, os ${(0,UG.getOperatingSystem)()}): stored loss ${PG(GG)}; ${wG}; cause kept apart ${function(GG,bG){if(null===GG||void 0===GG)return"none";const{reason:ZG,at:wG}="object"===typeof GG?GG:{},SG="number"===typeof wG?`
        set $ {
          ((bG - wG) / dG.m).toFixed(1)
        }
        h ago`:"no time";return`
        $ {
          "string" === typeof ZG ? oG(ZG, JG.e) : "no reason"
        }, $ {
          SG
        }
        `}((0,KG.k)(),Date.now())}; unreported ${function(GG,bG){if(null===GG||void 0===GG||"object"!==typeof GG)return"none";const ZG=GG;return bG.map((GG=>`${GG} ${"number"===typeof ZG[GG]?ZG[GG]:0}`)).join(", ")}(ZG,QG.e)}; webgpu_loss_page ${QG.M}`), lG(`load: ${uG(jG())}; pack expected ${(0,yG.e)(UG.featureFlags.settings.canUseShaderPacks)?"yes":"no"}; WebGPU API ${"gpu"in navigator?"yes":"no"}`)
    }

    function sG(GG) {
      vG = GG, lG(function(GG, bG, ZG) {
        const wG = GG.setting ? "the setting is on" : (0, rG.b)(GG.packActive, GG.defaultOffForPacks) ? "the pack forces it" : GG.packActive ? "the pack can't force it: default off for packs" : "no active pack, setting off";
        return `engine (js): useWebGpu ${XG(GG.useWebGpu)} (${wG}); ${iG(bG)}; webgpu fallback ${null!==ZG&&void 0!==ZG?ZG:"unset"}`
      }(GG, (0, LG.k)(), (0, UG.getWebGpuFallbackReason)()))
    }

    function qG(GG) {
      aG = GG, lG(WG(GG))
    }
    async function nG(GG, bG, wG, SG) {
      const LG = ++cG,
        yG = await async function(GG) {
          var bG, wG;
          const [{
            shaderPackPage: SG,
            harnessShaderPackMode: LG
          }, {
            getShaderPackPolicy: yG
          }, {
            packRunsIn: kG
          }] = await Promise.all([ZG.e(117).then((() => ZG(39633))), ZG.e(93).then((() => ZG(41687))), ZG.e(141).then((() => ZG(41695)))]), UG = await SG.load();
          if ("none" === UG.status) return null;
          const YG = null !== (bG = LG()) && void 0 !== bG ? bG : yG(GG),
            VG = "active" === UG.status ? UG.pack.variants : UG.variants,
            pG = kG(VG, YG);
          return {
            text: `${"active"===UG.status?mG(UG.pack.name,"active",VG.length):mG(null,`blocked (${UG.messageKey})`,null!==(wG=null===VG||void 0===VG?void 0:VG.length)&&void 0!==wG?wG:null)}; game policy ${YG}, runs in it ${pG?"yes":"no"}`,
            runs: pG
          }
        }(GG);
      if (null === yG) return void(FG.noPack() && lG(`join ${LG}: no shader pack on this page (further joins without one not logged)`));
      const kG = FG.join();
      if ("none" === kG) return;
      if ("cap" === kG) return void lG(`join ${LG}: further joins not logged`);
      const UG = function(GG) {
          switch (GG.status) {
            case "ok":
              return void 0 === GG.couldntRun ? "joined" : `joined without the pack: ${GG.couldntRun}`;
            case "RZ":
              return "RZ";
            case "failed":
              return `failed: ${GG.messageKey}`
          }
        }(bG),
        YG = ("ok" === bG.status ? bG.couldntRun : "failed" === bG.status ? bG.messageKey : void 0) === IG ? `; cause: ${SG()}` : "";
      "outcome" !== kG ? (lG(`join ${LG}: ${yG.text}`), yG.runs && (lG(`join ${LG}: needs WebGPU; ${wG()}`), lG(`join ${LG}: ${uG(jG())}`)), lG(`join ${LG}: ${UG}${YG}`)) : lG(`join ${LG}: ${UG}${YG}`)
    }

    function gG(GG, bG, ZG) {
      var wG;
      const SG = null !== (wG = null === bG || void 0 === bG ? void 0 : bG.isRunning()) && void 0 !== wG && wG;
      return nG(GG, ZG, (() => `Lite runtime ${null===bG?"no":"yes, running "+(SG?"yes":"no")}; ${iG((0,LG.k)())}`), (() => {
        return GG = vG, bG = jG(), ZG = "ios" === (0, UG.getOperatingSystem)(), wG = MG(), null === GG ? "engine choice not seen" : GG.packActive ? (0, rG.b)(GG.packActive, GG.defaultOffForPacks) ? "the pack forced WebGPU, yet nothing asked for a renderer: unexpected" : bG.lossStopsPack ? `a loss ${CG(ZG,wG)}` : "old Intel driver verdict, worded off as a loss is stored" : "no active pack when the engine was built, so nothing forced WebGPU; worded off as a loss is stored" + (bG.lossStopsPack ? "" : " (one that doesn't stop packs)");
        var GG, bG, ZG, wG
      }))
    }

    function eG(GG, bG, ZG) {
      return nG(GG, null !== bG ? {
        status: "failed",
        messageKey: bG
      } : {
        status: "ok",
        couldntRun: null !== ZG && void 0 !== ZG ? ZG : void 0
      }, (() => null === aG ? "pick not seen" : WG(aG)), (() => function(GG, bG, ZG, wG) {
        var SG, LG, yG, kG;
        return null === GG ? "pick not seen" : "off_after_loss" === GG.reason ? `off after a loss, ${"pack"===GG.source?CG(ZG,wG):`from ${null!==(kG=GG.source)&&void 0!==kG?kG:"none"}`}` : "not_requested" === GG.reason ? `not requested, from ${null!==(yG=GG.source)&&void 0!==yG?yG:"none"} (setting ${bG.setting?"on":"off"})` : `${null!==(SG=GG.reason)&&void 0!==SG?SG:"none"}, from ${null!==(LG=GG.source)&&void 0!==LG?LG:"none"}`
      }(aG, jG(), "ios" === (0, UG.getOperatingSystem)(), MG())))
    }

    function RG(GG, bG, ZG) {
      const wG = FG.loss();
      if ("none" === wG) return;
      if ("cap" === wG) return void lG("further losses not logged");
      const SG = jG();
      lG(function(GG, bG, ZG, wG) {
        return `loss (${GG}): ${bG}${null===ZG?"":` ${oG(ZG,EG)}`}; ${wG}`
      }(GG, bG, ZG, `stored ${PG((0,QG.v)().now)}; holds ${SG.lossHolds?"yes":"no"}, stops packs ${SG.lossStopsPack?"yes":"no"}`))
    }
  },
  34405: (GG, bG, ZG) => {
    function wG(GG, bG) {
      return GG && !bG
    }
    ZG.d(bG, {
      b: () => wG
    })
  }
};
Object.freeze(modules);
for (const GG in modules) Object.freeze(modules[GG]);