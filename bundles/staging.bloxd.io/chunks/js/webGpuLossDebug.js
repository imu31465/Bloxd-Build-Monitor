export const id = 69;
export const ids = [69];
export const modules = {
  36446: (BB, IB, ZB) => {
    ZB.r(IB), ZB.d(IB, {
      noteJsEngine: () => LB,
      noteJsJoin: () => fB,
      noteWasmJoin: () => lB,
      noteWasmPick: () => eB,
      noteWebGpuLoss: () => AB,
      startWebGpuLossDebug: () => XB
    });
    var TB = ZB(342),
      JB = ZB(20),
      oB = ZB(2935),
      GB = ZB(3640),
      vB = ZB(684),
      kB = ZB(105),
      cB = ZB(118),
      nB = ZB(2941),
      hB = ZB(36),
      zB = ZB(129),
      FB = ZB(331),
      NB = ZB(680),
      gB = ZB(2973),
      qB = ZB(360),
      yB = ZB(357),
      UB = ZB(34095);
    const WB = 40,
      dB = 160;

    function CB(BB, IB) {
      return `"${(BB.length>IB?`${BB.slice(0,IB)}...`:BB).replace(/[^ -~]|["\\]/g,"?")}"`
    }

    function QB(BB) {
      return BB ? "yes" : "no"
    }

    function sB(BB) {
      var IB;
      const ZB = BB.storedRenderer;
      return [`loss holds ${QB(BB.lossHolds)}`, `stops packs ${QB(BB.lossStopsPack)}`, `any loss ${QB(BB.anyLoss)}`, `old intel ${QB(BB.oldIntelDriver)}`, `default off for packs ${QB(BB.defaultOffForPacks)}`, `default off reason ${null!==(IB=BB.defaultOffReason)&&void 0!==IB?IB:"none"}`, `setting ${BB.setting?"on":"off"} (stored ${null===BB.settingStored?"unset":BB.settingStored?"on":"off"})`, `renderer url ${null===BB.urlRenderer?"none":CB(BB.urlRenderer,12)}, stored ${null===ZB||void 0===ZB?"none":CB(String(ZB),12)}`].join(", ")
    }

    function wB(BB) {
      if (null === BB) return "no renderer settled";
      const {
        requested: IB,
        choice: ZB,
        source: TB,
        fallbackReason: JB
      } = BB;
      return `renderer requested ${IB}, runs ${ZB}, from ${TB}${null===JB?"":`, fell back: ${CB(JB,80)}`}`
    }

    function OB(BB, IB) {
      return BB ? `stopping packs: iOS, ${null!==IB&&void 0!==IB?IB:1} losses in a row within a day` : "stopping packs"
    }

    function YB(BB) {
      var IB, ZB, TB;
      return `pick (wasm): backend ${null!==(IB=BB.backend)&&void 0!==IB?IB:"none"}, webgpu fallback ${null!==(ZB=BB.reason)&&void 0!==ZB?ZB:"none"}, from ${null!==(TB=BB.source)&&void 0!==TB?TB:"none"}, storage pull breaks ${QB(BB.storagePullBreaks)}; packs run ${QB("webgpu"===BB.backend)}, else ${BB.noWebGpu}`
    }

    function iB(BB, IB, ZB) {
      return `pack ${null===BB?"(name not read)":CB(BB,WB)} ${IB}${null===ZB?"":`, ${ZB} variants`}`
    }
    const pB = "shaderPack:failedWebGpuOff",
      aB = new class {
        constructor() {
          this.joins = 0, this.losses = 0, this.noPackSaid = !1
        }
        join() {
          return this.joins++, this.joins <= 5 ? "detail" : this.joins <= 30 ? "outcome" : 31 === this.joins ? "cap" : "none"
        }
        noPack() {
          const BB = !this.noPackSaid;
          return this.noPackSaid = !0, BB
        }
        loss() {
          return this.losses++, this.losses <= 10 ? "line" : 11 === this.losses ? "cap" : "none"
        }
      };
    let HB = null,
      MB = null,
      jB = 0;

    function PB(BB) {
      (0, gB.o)("webgpuloss", BB)
    }

    function RB() {
      return {
        lossHolds: (0, FB.D)(),
        lossStopsPack: (0, FB.K)(),
        anyLoss: (0, FB.l)(),
        oldIntelDriver: !0 === hB.m.getItem(zB.H),
        defaultOffForPacks: JB.d.isWebGpuDefaultOff(),
        defaultOffReason: JB.d.webGpuDefaultOffReason(),
        settingStored: hB.m.getItem(TB.wc),
        setting: JB.d.get("clientEscMenuOptions").useWebGpu,
        urlRenderer: cB.currentUrl.getSearchParam(nB.b),
        storedRenderer: hB.m.getItem(nB.c)
      }
    }

    function rB(BB) {
      return function(BB, IB, ZB) {
        if (null === BB || void 0 === BB) return "none";
        if ("object" !== typeof BB) return `unreadable (${typeof BB})`;
        const TB = BB,
          JB = "number" === typeof TB.at ? TB.at : null,
          oB = ["browser " + (IB ? "this one" : "another"), null === JB ? "no time" : `set ${((ZB-JB)/qB.p).toFixed(1)} h ago`, `losses ${"number"===typeof TB.losses?TB.losses:"unset (1)"}${null!==JB&&ZB-JB<qB.l?", the last within a day":""}`, `first page ${"hidden"===TB.firstPage||"visible"===TB.firstPage?TB.firstPage:"unset (visible)"}`, `hold step ${"number"===typeof TB.holdStep?TB.holdStep:"unset (1)"}`];
        if (void 0 !== TB.reason || void 0 !== TB.message) {
          const BB = "string" === typeof TB.reason ? CB(TB.reason, yB.e) : "no reason";
          oB.push(`cause ${BB} ${!0===TB.causeSent?"reported":"unreported"}`)
        }
        return oB.join(", ")
      }(BB, function(BB) {
        try {
          return "object" === typeof BB && null !== BB && BB.browser === (0, FB.h)()
        } catch {
          return !1
        }
      }(BB), Date.now())
    }

    function mB() {
      const BB = (0, FB.s)().now;
      return "number" === typeof(null === BB || void 0 === BB ? void 0 : BB.losses) ? BB.losses : null
    }

    function XB() {
      const {
        atLoad: BB,
        now: IB,
        unreported: ZB
      } = (0, FB.s)(), TB = JSON.stringify(BB) === JSON.stringify(IB) ? "XF" : `now ${rB(IB)}`;
      PB(`load (${vB.B?"wasm":"js"}, os ${(0,kB.getOperatingSystem)()}): stored loss ${rB(BB)}; ${TB}; cause kept apart ${function(BB,IB){if(null===BB||void 0===BB)return"none";const{reason:ZB,at:TB}="object"===typeof BB?BB:{},JB="number"===typeof TB?`
        set $ {
          ((IB - TB) / qB.p).toFixed(1)
        }
        h ago`:"no time";return`
        $ {
          "string" === typeof ZB ? CB(ZB, yB.e) : "no reason"
        }, $ {
          JB
        }
        `}((0,NB.i)(),Date.now())}; unreported ${function(BB,IB){if(null===BB||void 0===BB||"object"!==typeof BB)return"none";const ZB=BB;return IB.map((BB=>`${BB} ${"number"===typeof ZB[BB]?ZB[BB]:0}`)).join(", ")}(ZB,FB.e)}; webgpu_loss_page ${FB.G}`), PB(`load: ${sB(RB())}; pack expected ${(0,GB.g)(kB.featureFlags.settings.canUseShaderPacks)?"yes":"no"}; WebGPU API ${"gpu"in navigator?"yes":"no"}`)
    }

    function LB(BB) {
      HB = BB, PB(function(BB, IB, ZB) {
        const TB = BB.setting ? "the setting is on" : (0, UB.e)(BB.packActive, BB.defaultOffForPacks) ? "the pack forces it" : BB.packActive ? "the pack can't force it: default off for packs" : "no active pack, setting off";
        return `engine (js): useWebGpu ${QB(BB.useWebGpu)} (${TB}); ${wB(IB)}; webgpu fallback ${null!==ZB&&void 0!==ZB?ZB:"unset"}`
      }(BB, (0, oB.f)(), (0, kB.getWebGpuFallbackReason)()))
    }

    function eB(BB) {
      MB = BB, PB(YB(BB))
    }
    async function uB(BB, IB, TB, JB) {
      const oB = ++jB,
        GB = await async function(BB) {
          var IB, TB;
          const [{
            shaderPackPage: JB,
            harnessShaderPackMode: oB
          }, {
            getShaderPackPolicy: GB
          }, {
            packRunsIn: vB
          }] = await Promise.all([ZB.e(117).then((() => ZB(39281))), ZB.e(93).then((() => ZB(41304))), ZB.e(141).then((() => ZB(41308)))]), kB = await JB.load();
          if ("none" === kB.status) return null;
          const cB = null !== (IB = oB()) && void 0 !== IB ? IB : GB(BB),
            nB = "active" === kB.status ? kB.pack.variants : kB.variants,
            hB = vB(nB, cB);
          return {
            text: `${"active"===kB.status?iB(kB.pack.name,"active",nB.length):iB(null,`blocked (${kB.messageKey})`,null!==(TB=null===nB||void 0===nB?void 0:nB.length)&&void 0!==TB?TB:null)}; game policy ${cB}, runs in it ${hB?"yes":"no"}`,
            runs: hB
          }
        }(BB);
      if (null === GB) return void(aB.noPack() && PB(`join ${oB}: no shader pack on this page (further joins without one not logged)`));
      const vB = aB.join();
      if ("none" === vB) return;
      if ("cap" === vB) return void PB(`join ${oB}: further joins not logged`);
      const kB = function(BB) {
          switch (BB.status) {
            case "ok":
              return void 0 === BB.couldntRun ? "joined" : `joined without the pack: ${BB.couldntRun}`;
            case "fZ":
              return "fZ";
            case "failed":
              return `failed: ${BB.messageKey}`
          }
        }(IB),
        cB = ("ok" === IB.status ? IB.couldntRun : "failed" === IB.status ? IB.messageKey : void 0) === pB ? `; cause: ${JB()}` : "";
      "outcome" !== vB ? (PB(`join ${oB}: ${GB.text}`), GB.runs && (PB(`join ${oB}: needs WebGPU; ${TB()}`), PB(`join ${oB}: ${sB(RB())}`)), PB(`join ${oB}: ${kB}${cB}`)) : PB(`join ${oB}: ${kB}${cB}`)
    }

    function fB(BB, IB, ZB) {
      var TB;
      const JB = null !== (TB = null === IB || void 0 === IB ? void 0 : IB.isRunning()) && void 0 !== TB && TB;
      return uB(BB, ZB, (() => `Lite runtime ${null===IB?"no":"yes, running "+(JB?"yes":"no")}; ${wB((0,oB.f)())}`), (() => {
        return BB = HB, IB = RB(), ZB = "ios" === (0, kB.getOperatingSystem)(), TB = mB(), null === BB ? "engine choice not seen" : BB.packActive ? (0, UB.e)(BB.packActive, BB.defaultOffForPacks) ? "the pack forced WebGPU, yet nothing asked for a renderer: unexpected" : IB.lossStopsPack ? `a loss ${OB(ZB,TB)}` : "old Intel driver verdict, worded off as a loss is stored" : "no active pack when the engine was built, so nothing forced WebGPU; worded off as a loss is stored" + (IB.lossStopsPack ? "" : " (one that doesn't stop packs)");
        var BB, IB, ZB, TB
      }))
    }

    function lB(BB, IB, ZB) {
      return uB(BB, null !== IB ? {
        status: "failed",
        messageKey: IB
      } : {
        status: "ok",
        couldntRun: null !== ZB && void 0 !== ZB ? ZB : void 0
      }, (() => null === MB ? "pick not seen" : YB(MB)), (() => function(BB, IB, ZB, TB) {
        var JB, oB, GB, vB;
        return null === BB ? "pick not seen" : "off_after_loss" === BB.reason ? `off after a loss, ${"pack"===BB.source?OB(ZB,TB):`from ${null!==(vB=BB.source)&&void 0!==vB?vB:"none"}`}` : "not_requested" === BB.reason ? `not requested, from ${null!==(GB=BB.source)&&void 0!==GB?GB:"none"} (setting ${IB.setting?"on":"off"})` : `${null!==(JB=BB.reason)&&void 0!==JB?JB:"none"}, from ${null!==(oB=BB.source)&&void 0!==oB?oB:"none"}`
      }(MB, RB(), "ios" === (0, kB.getOperatingSystem)(), mB())))
    }

    function AB(BB, IB, ZB) {
      const TB = aB.loss();
      if ("none" === TB) return;
      if ("cap" === TB) return void PB("further losses not logged");
      const JB = RB();
      PB(function(BB, IB, ZB, TB) {
        return `loss (${BB}): ${IB}${null===ZB?"":` ${CB(ZB,dB)}`}; ${TB}`
      }(BB, IB, ZB, `stored ${rB((0,FB.s)().now)}; holds ${JB.lossHolds?"yes":"no"}, stops packs ${JB.lossStopsPack?"yes":"no"}`))
    }
  },
  34095: (BB, IB, ZB) => {
    function TB(BB, IB) {
      return BB && !IB
    }
    ZB.d(IB, {
      e: () => TB
    })
  }
};
Object.freeze(modules);
for (const BB in modules) Object.freeze(modules[BB]);