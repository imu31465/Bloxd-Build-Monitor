export const id = 69;
export const ids = [69];
export const modules = {
  36497: (BB, jB, zB) => {
    zB.r(jB), zB.d(jB, {
      noteJsEngine: () => TB,
      noteJsJoin: () => eB,
      noteWasmJoin: () => lB,
      noteWasmPick: () => PB,
      noteWebGpuLoss: () => wB,
      startWebGpuLossDebug: () => AB
    });
    var QB = zB(363),
      nB = zB(28),
      dB = zB(2885),
      IB = zB(3572),
      NB = zB(690),
      uB = zB(106),
      UB = zB(121),
      aB = zB(2887),
      pB = zB(41),
      rB = zB(128),
      sB = zB(348),
      JB = zB(681),
      mB = zB(2912),
      yB = zB(376),
      kB = zB(373),
      GB = zB(34171);
    const LB = 40,
      gB = 160;

    function tB(BB, jB) {
      return `"${(BB.length>jB?`${BB.slice(0,jB)}...`:BB).replace(/[^ -~]|["\\]/g,"?")}"`
    }

    function SB(BB) {
      return BB ? "yes" : "no"
    }

    function MB(BB) {
      var jB;
      const zB = BB.storedRenderer;
      return [`loss holds ${SB(BB.lossHolds)}`, `stops packs ${SB(BB.lossStopsPack)}`, `any loss ${SB(BB.anyLoss)}`, `old intel ${SB(BB.oldIntelDriver)}`, `default off for packs ${SB(BB.defaultOffForPacks)}`, `default off reason ${null!==(jB=BB.defaultOffReason)&&void 0!==jB?jB:"none"}`, `setting ${BB.setting?"on":"off"} (stored ${null===BB.settingStored?"unset":BB.settingStored?"on":"off"})`, `renderer url ${null===BB.urlRenderer?"none":tB(BB.urlRenderer,12)}, stored ${null===zB||void 0===zB?"none":tB(String(zB),12)}`].join(", ")
    }

    function EB(BB) {
      if (null === BB) return "no renderer settled";
      const {
        requested: jB,
        choice: zB,
        source: QB,
        fallbackReason: nB
      } = BB;
      return `renderer requested ${jB}, runs ${zB}, from ${QB}${null===nB?"":`, fell back: ${tB(nB,80)}`}`
    }

    function iB(BB, jB) {
      return BB ? `stopping packs: iOS, ${null!==jB&&void 0!==jB?jB:1} losses in a row within a day` : "stopping packs"
    }

    function qB(BB) {
      var jB, zB, QB;
      return `pick (wasm): backend ${null!==(jB=BB.backend)&&void 0!==jB?jB:"none"}, webgpu fallback ${null!==(zB=BB.reason)&&void 0!==zB?zB:"none"}, from ${null!==(QB=BB.source)&&void 0!==QB?QB:"none"}, storage pull breaks ${SB(BB.storagePullBreaks)}; packs run ${SB("webgpu"===BB.backend)}, else ${BB.noWebGpu}`
    }

    function fB(BB, jB, zB) {
      return `pack ${null===BB?"(name not read)":tB(BB,LB)} ${jB}${null===zB?"":`, ${zB} variants`}`
    }
    const oB = "shaderPack:failedWebGpuOff",
      HB = new class {
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
    let DB = null,
      FB = null,
      YB = 0;

    function VB(BB) {
      (0, mB.n)("webgpuloss", BB)
    }

    function hB() {
      return {
        lossHolds: (0, sB.D)(),
        lossStopsPack: (0, sB.J)(),
        anyLoss: (0, sB.l)(),
        oldIntelDriver: !0 === pB.j.getItem(rB.L),
        defaultOffForPacks: nB.c.isWebGpuDefaultOff(),
        defaultOffReason: nB.c.webGpuDefaultOffReason(),
        settingStored: pB.j.getItem(QB.Wb),
        setting: nB.c.get("clientEscMenuOptions").useWebGpu,
        urlRenderer: UB.currentUrl.getSearchParam(aB.c),
        storedRenderer: pB.j.getItem(aB.g)
      }
    }

    function XB(BB) {
      return function(BB, jB, zB) {
        if (null === BB || void 0 === BB) return "none";
        if ("object" !== typeof BB) return `unreadable (${typeof BB})`;
        const QB = BB,
          nB = "number" === typeof QB.at ? QB.at : null,
          dB = ["browser " + (jB ? "this one" : "another"), null === nB ? "no time" : `set ${((zB-nB)/yB.e).toFixed(1)} h ago`, `losses ${"number"===typeof QB.losses?QB.losses:"unset (1)"}${null!==nB&&zB-nB<yB.d?", the last within a day":""}`, `first page ${"hidden"===QB.firstPage||"visible"===QB.firstPage?QB.firstPage:"unset (visible)"}`, `hold step ${"number"===typeof QB.holdStep?QB.holdStep:"unset (1)"}`];
        if (void 0 !== QB.reason || void 0 !== QB.message) {
          const BB = "string" === typeof QB.reason ? tB(QB.reason, kB.b) : "no reason";
          dB.push(`cause ${BB} ${!0===QB.causeSent?"reported":"unreported"}`)
        }
        return dB.join(", ")
      }(BB, function(BB) {
        try {
          return "object" === typeof BB && null !== BB && BB.browser === (0, sB.h)()
        } catch {
          return !1
        }
      }(BB), Date.now())
    }

    function ZB() {
      const BB = (0, sB.s)().now;
      return "number" === typeof(null === BB || void 0 === BB ? void 0 : BB.losses) ? BB.losses : null
    }

    function AB() {
      const {
        atLoad: BB,
        now: jB,
        unreported: zB
      } = (0, sB.s)(), QB = JSON.stringify(BB) === JSON.stringify(jB) ? "Cs" : `now ${XB(jB)}`;
      VB(`load (${NB.E?"wasm":"js"}, os ${(0,uB.getOperatingSystem)()}): stored loss ${XB(BB)}; ${QB}; cause kept apart ${function(BB,jB){if(null===BB||void 0===BB)return"none";const{reason:zB,at:QB}="object"===typeof BB?BB:{},nB="number"===typeof QB?`
        set $ {
          ((jB - QB) / yB.e).toFixed(1)
        }
        h ago`:"no time";return`
        $ {
          "string" === typeof zB ? tB(zB, kB.b) : "no reason"
        }, $ {
          nB
        }
        `}((0,JB.l)(),Date.now())}; unreported ${function(BB,jB){if(null===BB||void 0===BB||"object"!==typeof BB)return"none";const zB=BB;return jB.map((BB=>`${BB} ${"number"===typeof zB[BB]?zB[BB]:0}`)).join(", ")}(zB,sB.e)}; webgpu_loss_page ${sB.F}`), VB(`load: ${MB(hB())}; pack expected ${(0,IB.g)(uB.featureFlags.settings.canUseShaderPacks)?"yes":"no"}; WebGPU API ${"gpu"in navigator?"yes":"no"}`)
    }

    function TB(BB) {
      DB = BB, VB(function(BB, jB, zB) {
        const QB = BB.setting ? "the setting is on" : (0, GB.d)(BB.packActive, BB.defaultOffForPacks) ? "the pack forces it" : BB.packActive ? "the pack can't force it: default off for packs" : "no active pack, setting off";
        return `engine (js): useWebGpu ${SB(BB.useWebGpu)} (${QB}); ${EB(jB)}; webgpu fallback ${null!==zB&&void 0!==zB?zB:"unset"}`
      }(BB, (0, dB.k)(), (0, uB.getWebGpuFallbackReason)()))
    }

    function PB(BB) {
      FB = BB, VB(qB(BB))
    }
    async function WB(BB, jB, QB, nB) {
      const dB = ++YB,
        IB = await async function(BB) {
          var jB, QB;
          const [{
            shaderPackPage: nB,
            harnessShaderPackMode: dB
          }, {
            getShaderPackPolicy: IB
          }, {
            packRunsIn: NB
          }] = await Promise.all([zB.e(117).then((() => zB(39307))), zB.e(93).then((() => zB(41362))), zB.e(141).then((() => zB(41369)))]), uB = await nB.load();
          if ("none" === uB.status) return null;
          const UB = null !== (jB = dB()) && void 0 !== jB ? jB : IB(BB),
            aB = "active" === uB.status ? uB.pack.variants : uB.variants,
            pB = NB(aB, UB);
          return {
            text: `${"active"===uB.status?fB(uB.pack.name,"active",aB.length):fB(null,`blocked (${uB.messageKey})`,null!==(QB=null===aB||void 0===aB?void 0:aB.length)&&void 0!==QB?QB:null)}; game policy ${UB}, runs in it ${pB?"yes":"no"}`,
            runs: pB
          }
        }(BB);
      if (null === IB) return void(HB.noPack() && VB(`join ${dB}: no shader pack on this page (further joins without one not logged)`));
      const NB = HB.join();
      if ("none" === NB) return;
      if ("cap" === NB) return void VB(`join ${dB}: further joins not logged`);
      const uB = function(BB) {
          switch (BB.status) {
            case "ok":
              return void 0 === BB.couldntRun ? "joined" : `joined without the pack: ${BB.couldntRun}`;
            case "xz":
              return "xz";
            case "failed":
              return `failed: ${BB.messageKey}`
          }
        }(jB),
        UB = ("ok" === jB.status ? jB.couldntRun : "failed" === jB.status ? jB.messageKey : void 0) === oB ? `; cause: ${nB()}` : "";
      "outcome" !== NB ? (VB(`join ${dB}: ${IB.text}`), IB.runs && (VB(`join ${dB}: needs WebGPU; ${QB()}`), VB(`join ${dB}: ${MB(hB())}`)), VB(`join ${dB}: ${uB}${UB}`)) : VB(`join ${dB}: ${uB}${UB}`)
    }

    function eB(BB, jB, zB) {
      var QB;
      const nB = null !== (QB = null === jB || void 0 === jB ? void 0 : jB.isRunning()) && void 0 !== QB && QB;
      return WB(BB, zB, (() => `Lite runtime ${null===jB?"no":"yes, running "+(nB?"yes":"no")}; ${EB((0,dB.k)())}`), (() => {
        return BB = DB, jB = hB(), zB = "ios" === (0, uB.getOperatingSystem)(), QB = ZB(), null === BB ? "engine choice not seen" : BB.packActive ? (0, GB.d)(BB.packActive, BB.defaultOffForPacks) ? "the pack forced WebGPU, yet nothing asked for a renderer: unexpected" : jB.lossStopsPack ? `a loss ${iB(zB,QB)}` : "old Intel driver verdict, worded off as a loss is stored" : "no active pack when the engine was built, so nothing forced WebGPU; worded off as a loss is stored" + (jB.lossStopsPack ? "" : " (one that doesn't stop packs)");
        var BB, jB, zB, QB
      }))
    }

    function lB(BB, jB, zB) {
      return WB(BB, null !== jB ? {
        status: "failed",
        messageKey: jB
      } : {
        status: "ok",
        couldntRun: null !== zB && void 0 !== zB ? zB : void 0
      }, (() => null === FB ? "pick not seen" : qB(FB)), (() => function(BB, jB, zB, QB) {
        var nB, dB, IB, NB;
        return null === BB ? "pick not seen" : "off_after_loss" === BB.reason ? `off after a loss, ${"pack"===BB.source?iB(zB,QB):`from ${null!==(NB=BB.source)&&void 0!==NB?NB:"none"}`}` : "not_requested" === BB.reason ? `not requested, from ${null!==(IB=BB.source)&&void 0!==IB?IB:"none"} (setting ${jB.setting?"on":"off"})` : `${null!==(nB=BB.reason)&&void 0!==nB?nB:"none"}, from ${null!==(dB=BB.source)&&void 0!==dB?dB:"none"}`
      }(FB, hB(), "ios" === (0, uB.getOperatingSystem)(), ZB())))
    }

    function wB(BB, jB, zB) {
      const QB = HB.loss();
      if ("none" === QB) return;
      if ("cap" === QB) return void VB("further losses not logged");
      const nB = hB();
      VB(function(BB, jB, zB, QB) {
        return `loss (${BB}): ${jB}${null===zB?"":` ${tB(zB,gB)}`}; ${QB}`
      }(BB, jB, zB, `stored ${XB((0,sB.s)().now)}; holds ${nB.lossHolds?"yes":"no"}, stops packs ${nB.lossStopsPack?"yes":"no"}`))
    }
  },
  34171: (BB, jB, zB) => {
    function QB(BB, jB) {
      return BB && !jB
    }
    zB.d(jB, {
      d: () => QB
    })
  }
};
Object.freeze(modules);
for (const BB in modules) Object.freeze(modules[BB]);