export const id = 80;
export const ids = [80];
export const modules = {
  37098: (BB, OB, GB) => {
    GB.r(OB), GB.d(OB, {
      noteJsEngine: () => wB,
      noteJsJoin: () => hB,
      noteWasmJoin: () => aB,
      noteWasmPick: () => EB,
      noteWebGpuLoss: () => eB,
      startWebGpuLossDebug: () => XB
    });
    var YB = GB(331),
      DB = GB(16),
      QB = GB(3104),
      oB = GB(3885),
      jB = GB(662),
      yB = GB(92),
      JB = GB(98),
      MB = GB(3111),
      PB = GB(31),
      zB = GB(113),
      lB = GB(320),
      pB = GB(651),
      qB = GB(3136),
      ZB = GB(353),
      NB = GB(347),
      RB = GB(34717);
    const WB = 40,
      AB = 160;

    function VB(BB, OB) {
      return `"${(BB.length>OB?`${BB.slice(0,OB)}...`:BB).replace(/[^ -~]|["\\]/g,"?")}"`
    }

    function SB(BB) {
      return BB ? "yes" : "no"
    }

    function nB(BB) {
      var OB;
      const GB = BB.storedRenderer;
      return [`loss holds ${SB(BB.lossHolds)}`, `stops packs ${SB(BB.lossStopsPack)}`, `any loss ${SB(BB.anyLoss)}`, `old intel ${SB(BB.oldIntelDriver)}`, `default off for packs ${SB(BB.defaultOffForPacks)}`, `default off reason ${null!==(OB=BB.defaultOffReason)&&void 0!==OB?OB:"none"}`, `setting ${BB.setting?"on":"off"} (stored ${null===BB.settingStored?"unset":BB.settingStored?"on":"off"})`, `renderer url ${null===BB.urlRenderer?"none":VB(BB.urlRenderer,12)}, stored ${null===GB||void 0===GB?"none":VB(String(GB),12)}`].join(", ")
    }

    function UB(BB) {
      if (null === BB) return "no renderer settled";
      const {
        requested: OB,
        choice: GB,
        source: YB,
        fallbackReason: DB
      } = BB;
      return `renderer requested ${OB}, runs ${GB}, from ${YB}${null===DB?"":`, fell back: ${VB(DB,80)}`}`
    }

    function fB(BB, OB) {
      return BB ? `stopping packs: iOS, ${null!==OB&&void 0!==OB?OB:1} losses in a row within a day` : "stopping packs"
    }

    function kB(BB) {
      var OB, GB, YB;
      return `pick (wasm): backend ${null!==(OB=BB.backend)&&void 0!==OB?OB:"none"}, webgpu fallback ${null!==(GB=BB.reason)&&void 0!==GB?GB:"none"}, from ${null!==(YB=BB.source)&&void 0!==YB?YB:"none"}, storage pull breaks ${SB(BB.storagePullBreaks)}; packs run ${SB("webgpu"===BB.backend)}, else ${BB.noWebGpu}`
    }

    function dB(BB, OB, GB) {
      return `pack ${null===BB?"(name not read)":VB(BB,WB)} ${OB}${null===GB?"":`, ${GB} variants`}`
    }
    const KB = "shaderPack:failedWebGpuOff",
      uB = new class {
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
    let mB = null,
      IB = null,
      FB = 0;

    function iB(BB) {
      (0, qB.m)("webgpuloss", BB)
    }

    function LB() {
      return {
        lossHolds: (0, lB.y)(),
        lossStopsPack: (0, lB.E)(),
        anyLoss: (0, lB.l)(),
        oldIntelDriver: !0 === PB.g.getItem(zB.J),
        defaultOffForPacks: DB.c.isWebGpuDefaultOff(),
        defaultOffReason: DB.c.webGpuDefaultOffReason(),
        settingStored: PB.g.getItem(YB.nc),
        setting: DB.c.get("clientEscMenuOptions").useWebGpu,
        urlRenderer: JB.currentUrl.getSearchParam(MB.d),
        storedRenderer: PB.g.getItem(MB.f)
      }
    }

    function gB(BB) {
      return function(BB, OB, GB) {
        let YB = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        if (null === BB || void 0 === BB) return "none";
        if ("object" !== typeof BB) return `unreadable (${typeof BB})`;
        const DB = BB,
          QB = "number" === typeof DB.at ? DB.at : null,
          oB = ["browser " + (OB ? "this one" : "another"), null === QB ? "no time" : `set ${((GB-QB)/ZB.k).toFixed(1)} h ago`, `losses ${"number"===typeof DB.losses?DB.losses:"unset (1)"}${null!==QB&&GB-QB<ZB.g?", the last within a day":""}`, `first page ${"hidden"===DB.firstPage||"visible"===DB.firstPage?DB.firstPage:"unset (visible)"}`, `hold step ${"number"===typeof DB.holdStep?DB.holdStep:"unset (1)"}${YB?" (not read on iOS: a kept loss holds its whole life)":""}`];
        if (void 0 !== DB.reason || void 0 !== DB.message) {
          const BB = "string" === typeof DB.reason ? VB(DB.reason, NB.c) : "no reason";
          oB.push(`cause ${BB} ${!0===DB.causeSent?"reported":"unreported"}`)
        }
        return oB.join(", ")
      }(BB, function(BB) {
        try {
          return "object" === typeof BB && null !== BB && BB.browser === (0, lB.h)()
        } catch {
          return !1
        }
      }(BB), Date.now(), "ios" === (0, yB.getOperatingSystem)())
    }

    function rB() {
      const BB = (0, lB.t)().now;
      return "number" === typeof(null === BB || void 0 === BB ? void 0 : BB.losses) ? BB.losses : null
    }

    function XB() {
      const {
        atLoad: BB,
        now: OB,
        unreported: GB
      } = (0, lB.t)(), YB = JSON.stringify(BB) === JSON.stringify(OB) ? "GP" : `now ${gB(OB)}`;
      iB(`load (${jB.D?"wasm":"js"}, os ${(0,yB.getOperatingSystem)()}): stored loss ${gB(BB)}; ${YB}; cause kept apart ${function(BB,OB){if(null===BB||void 0===BB)return"none";const{reason:GB,at:YB}="object"===typeof BB?BB:{},DB="number"===typeof YB?`
        set $ {
          ((OB - YB) / ZB.k).toFixed(1)
        }
        h ago`:"no time";return`
        $ {
          "string" === typeof GB ? VB(GB, NB.c) : "no reason"
        }, $ {
          DB
        }
        `}((0,pB.h)(),Date.now())}; unreported ${function(BB,OB){if(null===BB||void 0===BB||"object"!==typeof BB)return"none";const GB=BB;return OB.map((BB=>`${BB} ${"number"===typeof GB[BB]?GB[BB]:0}`)).join(", ")}(GB,lB.e)}; webgpu_loss_page ${lB.B}`), iB(`load: ${nB(LB())}; pack expected ${(0,oB.f)(yB.featureFlags.settings.canUseShaderPacks)?"yes":"no"}; WebGPU API ${"gpu"in navigator?"yes":"no"}`)
    }

    function wB(BB) {
      mB = BB, iB(function(BB, OB, GB) {
        const YB = BB.setting ? "the setting is on" : (0, RB.b)(BB.packActive, BB.defaultOffForPacks) ? "the pack forces it" : BB.packActive ? "the pack can't force it: default off for packs" : "no active pack, setting off";
        return `engine (js): useWebGpu ${SB(BB.useWebGpu)} (${YB}); ${UB(OB)}; webgpu fallback ${null!==GB&&void 0!==GB?GB:"unset"}`
      }(BB, (0, QB.h)(), (0, yB.getWebGpuFallbackReason)()))
    }

    function EB(BB) {
      IB = BB, iB(kB(BB))
    }
    async function cB(BB, OB, YB, DB) {
      const QB = ++FB,
        oB = await async function(BB) {
          var OB, YB;
          const [{
            shaderPackPage: DB,
            harnessShaderPackMode: QB
          }, {
            getShaderPackPolicy: oB
          }, {
            packRunsIn: jB
          }] = await Promise.all([GB.e(130).then((() => GB(39925))), GB.e(106).then((() => GB(44437))), GB.e(154).then((() => GB(44442)))]), yB = await DB.load();
          if ("none" === yB.status) return null;
          const JB = null !== (OB = QB()) && void 0 !== OB ? OB : oB(BB),
            MB = "active" === yB.status ? yB.pack.variants : yB.variants,
            PB = jB(MB, JB);
          return {
            text: `${"active"===yB.status?dB(yB.pack.name,"active",MB.length):dB(null,`blocked (${yB.messageKey})`,null!==(YB=null===MB||void 0===MB?void 0:MB.length)&&void 0!==YB?YB:null)}; game policy ${JB}, runs in it ${PB?"yes":"no"}`,
            runs: PB
          }
        }(BB);
      if (null === oB) return void(uB.noPack() && iB(`join ${QB}: no shader pack on this page (further joins without one not logged)`));
      const jB = uB.join();
      if ("none" === jB) return;
      if ("cap" === jB) return void iB(`join ${QB}: further joins not logged`);
      const yB = function(BB) {
          switch (BB.status) {
            case "ok":
              return void 0 === BB.couldntRun ? "joined" : `joined without the pack: ${BB.couldntRun}`;
            case "rB":
              return "rB";
            case "failed":
              return `failed: ${BB.messageKey}`
          }
        }(OB),
        JB = ("ok" === OB.status ? OB.couldntRun : "failed" === OB.status ? OB.messageKey : void 0) === KB ? `; cause: ${DB()}` : "";
      "outcome" !== jB ? (iB(`join ${QB}: ${oB.text}`), oB.runs && (iB(`join ${QB}: needs WebGPU; ${YB()}`), iB(`join ${QB}: ${nB(LB())}`)), iB(`join ${QB}: ${yB}${JB}`)) : iB(`join ${QB}: ${yB}${JB}`)
    }

    function hB(BB, OB, GB) {
      var YB;
      const DB = null !== (YB = null === OB || void 0 === OB ? void 0 : OB.isRunning()) && void 0 !== YB && YB;
      return cB(BB, GB, (() => `Lite runtime ${null===OB?"no":"yes, running "+(DB?"yes":"no")}; ${UB((0,QB.h)())}`), (() => {
        return BB = mB, OB = LB(), GB = "ios" === (0, yB.getOperatingSystem)(), YB = rB(), null === BB ? "engine choice not seen" : BB.packActive ? (0, RB.b)(BB.packActive, BB.defaultOffForPacks) ? "the pack forced WebGPU, yet nothing asked for a renderer: unexpected" : OB.lossStopsPack ? `a loss ${fB(GB,YB)}` : "old Intel driver verdict, worded off as a loss is stored" : "no active pack when the engine was built, so nothing forced WebGPU; worded off as a loss is stored" + (OB.lossStopsPack ? "" : " (one that doesn't stop packs)");
        var BB, OB, GB, YB
      }))
    }

    function aB(BB, OB, GB) {
      return cB(BB, null !== OB ? {
        status: "failed",
        messageKey: OB
      } : {
        status: "ok",
        couldntRun: null !== GB && void 0 !== GB ? GB : void 0
      }, (() => null === IB ? "pick not seen" : kB(IB)), (() => function(BB, OB, GB, YB) {
        var DB, QB, oB, jB;
        return null === BB ? "pick not seen" : "off_after_loss" === BB.reason ? `off after a loss, ${"pack"===BB.source?fB(GB,YB):`from ${null!==(jB=BB.source)&&void 0!==jB?jB:"none"}`}` : "not_requested" === BB.reason ? `not requested, from ${null!==(oB=BB.source)&&void 0!==oB?oB:"none"} (setting ${OB.setting?"on":"off"})` : `${null!==(DB=BB.reason)&&void 0!==DB?DB:"none"}, from ${null!==(QB=BB.source)&&void 0!==QB?QB:"none"}`
      }(IB, LB(), "ios" === (0, yB.getOperatingSystem)(), rB())))
    }

    function eB(BB, OB, GB) {
      const YB = uB.loss();
      if ("none" === YB) return;
      if ("cap" === YB) return void iB("further losses not logged");
      const DB = LB();
      iB(function(BB, OB, GB, YB) {
        return `loss (${BB}): ${OB}${null===GB?"":` ${VB(GB,AB)}`}; ${YB}`
      }(BB, OB, GB, `stored ${gB((0,lB.t)().now)}; holds ${DB.lossHolds?"yes":"no"}, stops packs ${DB.lossStopsPack?"yes":"no"}`))
    }
  },
  34717: (BB, OB, GB) => {
    function YB(BB, OB) {
      return BB && !OB
    }
    GB.d(OB, {
      b: () => YB
    })
  }
};
Object.freeze(modules);
for (const BB in modules) Object.freeze(modules[BB]);