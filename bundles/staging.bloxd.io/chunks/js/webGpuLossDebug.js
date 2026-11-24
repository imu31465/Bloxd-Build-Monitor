export const id = 68;
export const ids = [68];
export const modules = {
  36432: (SS, HS, gS) => {
    gS.r(HS), gS.d(HS, {
      noteJsEngine: () => iS,
      noteJsJoin: () => US,
      noteWasmJoin: () => pS,
      noteWasmPick: () => WS,
      noteWebGpuLoss: () => sS,
      startWebGpuLossDebug: () => VS
    });
    var tS = gS(369),
      bS = gS(24),
      XS = gS(2922),
      xS = gS(3591),
      NS = gS(699),
      qS = gS(104),
      uS = gS(113),
      IS = gS(2924),
      fS = gS(45),
      kS = gS(122),
      aS = gS(362),
      KS = gS(2953),
      jS = gS(387),
      GS = gS(34156);
    const CS = 40,
      nS = 160;

    function PS(SS, HS) {
      return `"${(SS.length>HS?`${SS.slice(0,HS)}...`:SS).replace(/[^ -~]|["\\]/g,"?")}"`
    }

    function QS(SS) {
      return SS ? "yes" : "no"
    }

    function DS(SS) {
      var HS;
      const gS = SS.storedRenderer;
      return [`loss holds ${QS(SS.lossHolds)}`, `stops packs ${QS(SS.lossStopsPack)}`, `any loss ${QS(SS.anyLoss)}`, `old intel ${QS(SS.oldIntelDriver)}`, `default off for packs ${QS(SS.defaultOffForPacks)}`, `default off reason ${null!==(HS=SS.defaultOffReason)&&void 0!==HS?HS:"none"}`, `setting ${SS.setting?"on":"off"} (stored ${null===SS.settingStored?"unset":SS.settingStored?"on":"off"})`, `renderer url ${null===SS.urlRenderer?"none":PS(SS.urlRenderer,12)}, stored ${null===gS||void 0===gS?"none":PS(String(gS),12)}`].join(", ")
    }

    function wS(SS) {
      if (null === SS) return "no renderer settled";
      const {
        requested: HS,
        choice: gS,
        source: tS,
        fallbackReason: bS
      } = SS;
      return `renderer requested ${HS}, runs ${gS}, from ${tS}${null===bS?"":`, fell back: ${PS(bS,80)}`}`
    }

    function hS(SS, HS) {
      return SS ? `stopping packs: iOS, ${null!==HS&&void 0!==HS?HS:1} losses in a row within a day` : "stopping packs"
    }

    function ZS(SS) {
      var HS, gS, tS;
      return `pick (wasm): backend ${null!==(HS=SS.backend)&&void 0!==HS?HS:"none"}, webgpu fallback ${null!==(gS=SS.reason)&&void 0!==gS?gS:"none"}, from ${null!==(tS=SS.source)&&void 0!==tS?tS:"none"}, storage pull breaks ${QS(SS.storagePullBreaks)}; packs run ${QS("webgpu"===SS.backend)}, else ${SS.noWebGpu}`
    }

    function JS(SS, HS, gS) {
      return `pack ${null===SS?"(name not read)":PS(SS,CS)} ${HS}${null===gS?"":`, ${gS} variants`}`
    }
    const OS = "shaderPack:failedWebGpuOff",
      dS = new class {
        constructor() {
          this.joins = 0, this.losses = 0, this.noPackSaid = !1
        }
        join() {
          return this.joins++, this.joins <= 5 ? "detail" : this.joins <= 30 ? "outcome" : 31 === this.joins ? "cap" : "none"
        }
        noPack() {
          const SS = !this.noPackSaid;
          return this.noPackSaid = !0, SS
        }
        loss() {
          return this.losses++, this.losses <= 10 ? "line" : 11 === this.losses ? "cap" : "none"
        }
      };
    let cS = null,
      vS = null,
      ES = 0;

    function LS(SS) {
      (0, KS.i)("webgpuloss", SS)
    }

    function YS() {
      return {
        lossHolds: (0, aS.B)(),
        lossStopsPack: (0, aS.J)(),
        anyLoss: (0, aS.m)(),
        oldIntelDriver: !0 === fS.g.getItem(kS.I),
        defaultOffForPacks: bS.b.isWebGpuDefaultOff(),
        defaultOffReason: bS.b.webGpuDefaultOffReason(),
        settingStored: fS.g.getItem(tS.mc),
        setting: bS.b.get("clientEscMenuOptions").useWebGpu,
        urlRenderer: uS.currentUrl.getSearchParam(IS.e),
        storedRenderer: fS.g.getItem(IS.f)
      }
    }

    function AS(SS) {
      return function(SS, HS, gS) {
        if (null === SS || void 0 === SS) return "none";
        if ("object" !== typeof SS) return `unreadable (${typeof SS})`;
        const tS = SS,
          bS = "number" === typeof tS.at ? tS.at : null;
        return ["browser " + (HS ? "this one" : "another"), null === bS ? "no time" : `set ${((gS-bS)/jS.i).toFixed(1)} h ago`, `losses ${"number"===typeof tS.losses?tS.losses:"unset (1)"}${null!==bS&&gS-bS<jS.h?", the last within a day":""}`, `first page ${"hidden"===tS.firstPage||"visible"===tS.firstPage?tS.firstPage:"unset (visible)"}`, `hold step ${"number"===typeof tS.holdStep?tS.holdStep:"unset (1)"}`].join(", ")
      }(SS, function(SS) {
        try {
          return "object" === typeof SS && null !== SS && SS.browser === (0, aS.l)()
        } catch {
          return !1
        }
      }(SS), Date.now())
    }

    function yS() {
      const SS = (0, aS.v)().now;
      return "number" === typeof(null === SS || void 0 === SS ? void 0 : SS.losses) ? SS.losses : null
    }

    function VS() {
      const {
        atLoad: SS,
        now: HS,
        unreported: gS
      } = (0, aS.v)(), tS = JSON.stringify(SS) === JSON.stringify(HS) ? "ia" : `now ${AS(HS)}`;
      LS(`load (${NS.A?"wasm":"js"}, os ${(0,qS.getOperatingSystem)()}): stored loss ${AS(SS)}; ${tS}; unreported ${function(SS,HS){if(null===SS||void 0===SS||"object"!==typeof SS)return"none";const gS=SS;return HS.map((SS=>`${SS} ${"number"===typeof gS[SS]?gS[SS]:0}`)).join(", ")}(gS,aS.e)}; webgpu_loss_page ${aS.D}`), LS(`load: ${DS(YS())}; pack expected ${(0,xS.g)(qS.featureFlags.settings.canUseShaderPacks)?"yes":"no"}; WebGPU API ${"gpu"in navigator?"yes":"no"}`)
    }

    function iS(SS) {
      cS = SS, LS(function(SS, HS, gS) {
        const tS = SS.setting ? "the setting is on" : (0, GS.d)(SS.packActive, SS.defaultOffForPacks) ? "the pack forces it" : SS.packActive ? "the pack can't force it: default off for packs" : "no active pack, setting off";
        return `engine (js): useWebGpu ${QS(SS.useWebGpu)} (${tS}); ${wS(HS)}; webgpu fallback ${null!==gS&&void 0!==gS?gS:"unset"}`
      }(SS, (0, XS.i)(), (0, qS.getWebGpuFallbackReason)()))
    }

    function WS(SS) {
      vS = SS, LS(ZS(SS))
    }
    async function zS(SS, HS, tS, bS) {
      const XS = ++ES,
        xS = await async function(SS) {
          var HS, tS;
          const [{
            shaderPackPage: bS,
            harnessShaderPackMode: XS
          }, {
            getShaderPackPolicy: xS
          }, {
            packRunsIn: NS
          }] = await Promise.all([gS.e(115).then((() => gS(39226))), gS.e(91).then((() => gS(41274))), gS.e(138).then((() => gS(41278)))]), qS = await bS.load();
          if ("none" === qS.status) return null;
          const uS = null !== (HS = XS()) && void 0 !== HS ? HS : xS(SS),
            IS = "active" === qS.status ? qS.pack.variants : qS.variants,
            fS = NS(IS, uS);
          return {
            text: `${"active"===qS.status?JS(qS.pack.name,"active",IS.length):JS(null,`blocked (${qS.messageKey})`,null!==(tS=null===IS||void 0===IS?void 0:IS.length)&&void 0!==tS?tS:null)}; game policy ${uS}, runs in it ${fS?"yes":"no"}`,
            runs: fS
          }
        }(SS);
      if (null === xS) return void(dS.noPack() && LS(`join ${XS}: no shader pack on this page (further joins without one not logged)`));
      const NS = dS.join();
      if ("none" === NS) return;
      if ("cap" === NS) return void LS(`join ${XS}: further joins not logged`);
      const qS = function(SS) {
          switch (SS.status) {
            case "ok":
              return void 0 === SS.couldntRun ? "joined" : `joined without the pack: ${SS.couldntRun}`;
            case "Hg":
              return "Hg";
            case "failed":
              return `failed: ${SS.messageKey}`
          }
        }(HS),
        uS = ("ok" === HS.status ? HS.couldntRun : "failed" === HS.status ? HS.messageKey : void 0) === OS ? `; cause: ${bS()}` : "";
      "outcome" !== NS ? (LS(`join ${XS}: ${xS.text}`), xS.runs && (LS(`join ${XS}: needs WebGPU; ${tS()}`), LS(`join ${XS}: ${DS(YS())}`)), LS(`join ${XS}: ${qS}${uS}`)) : LS(`join ${XS}: ${qS}${uS}`)
    }

    function US(SS, HS, gS) {
      var tS;
      const bS = null !== (tS = null === HS || void 0 === HS ? void 0 : HS.isRunning()) && void 0 !== tS && tS;
      return zS(SS, gS, (() => `Lite runtime ${null===HS?"no":"yes, running "+(bS?"yes":"no")}; ${wS((0,XS.i)())}`), (() => {
        return SS = cS, HS = YS(), gS = "ios" === (0, qS.getOperatingSystem)(), tS = yS(), null === SS ? "engine choice not seen" : SS.packActive ? (0, GS.d)(SS.packActive, SS.defaultOffForPacks) ? "the pack forced WebGPU, yet nothing asked for a renderer: unexpected" : HS.lossStopsPack ? `a loss ${hS(gS,tS)}` : "old Intel driver verdict, worded off as a loss is stored" : "no active pack when the engine was built, so nothing forced WebGPU; worded off as a loss is stored" + (HS.lossStopsPack ? "" : " (one that doesn't stop packs)");
        var SS, HS, gS, tS
      }))
    }

    function pS(SS, HS, gS) {
      return zS(SS, null !== HS ? {
        status: "failed",
        messageKey: HS
      } : {
        status: "ok",
        couldntRun: null !== gS && void 0 !== gS ? gS : void 0
      }, (() => null === vS ? "pick not seen" : ZS(vS)), (() => function(SS, HS, gS, tS) {
        var bS, XS, xS, NS;
        return null === SS ? "pick not seen" : "off_after_loss" === SS.reason ? `off after a loss, ${"pack"===SS.source?hS(gS,tS):`from ${null!==(NS=SS.source)&&void 0!==NS?NS:"none"}`}` : "not_requested" === SS.reason ? `not requested, from ${null!==(xS=SS.source)&&void 0!==xS?xS:"none"} (setting ${HS.setting?"on":"off"})` : `${null!==(bS=SS.reason)&&void 0!==bS?bS:"none"}, from ${null!==(XS=SS.source)&&void 0!==XS?XS:"none"}`
      }(vS, YS(), "ios" === (0, qS.getOperatingSystem)(), yS())))
    }

    function sS(SS, HS, gS) {
      const tS = dS.loss();
      if ("none" === tS) return;
      if ("cap" === tS) return void LS("further losses not logged");
      const bS = YS();
      LS(function(SS, HS, gS, tS) {
        return `loss (${SS}): ${HS}${null===gS?"":` ${PS(gS,nS)}`}; ${tS}`
      }(SS, HS, gS, `stored ${AS((0,aS.v)().now)}; holds ${bS.lossHolds?"yes":"no"}, stops packs ${bS.lossStopsPack?"yes":"no"}`))
    }
  },
  34156: (SS, HS, gS) => {
    function tS(SS, HS) {
      return SS && !HS
    }
    gS.d(HS, {
      d: () => tS
    })
  }
};
Object.freeze(modules);
for (const SS in modules) Object.freeze(modules[SS]);