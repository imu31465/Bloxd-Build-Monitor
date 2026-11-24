export const id = 68;
export const ids = [68];
export const modules = {
  36420: (DD, zD, wD) => {
    wD.r(zD), wD.d(zD, {
      noteJsEngine: () => WD,
      noteJsJoin: () => yD,
      noteWasmJoin: () => kD,
      noteWasmPick: () => ND,
      noteWebGpuLoss: () => mD,
      startWebGpuLossDebug: () => lD
    });
    var pD = wD(338),
      sD = wD(20),
      KD = wD(2779),
      rD = wD(3462),
      LD = wD(638),
      cD = wD(103),
      gD = wD(113),
      RD = wD(2788),
      AD = wD(35),
      UD = wD(119),
      fD = wD(323),
      ID = wD(2811),
      BD = wD(351),
      GD = wD(34145);
    const hD = 40,
      nD = 160;

    function MD(DD, zD) {
      return `"${(DD.length>zD?`${DD.slice(0,zD)}...`:DD).replace(/[^ -~]|["\\]/g,"?")}"`
    }

    function OD(DD) {
      return DD ? "yes" : "no"
    }

    function JD(DD) {
      var zD;
      const wD = DD.storedRenderer;
      return [`loss holds ${OD(DD.lossHolds)}`, `stops packs ${OD(DD.lossStopsPack)}`, `any loss ${OD(DD.anyLoss)}`, `old intel ${OD(DD.oldIntelDriver)}`, `default off for packs ${OD(DD.defaultOffForPacks)}`, `default off reason ${null!==(zD=DD.defaultOffReason)&&void 0!==zD?zD:"none"}`, `setting ${DD.setting?"on":"off"} (stored ${null===DD.settingStored?"unset":DD.settingStored?"on":"off"})`, `renderer url ${null===DD.urlRenderer?"none":MD(DD.urlRenderer,12)}, stored ${null===wD||void 0===wD?"none":MD(String(wD),12)}`].join(", ")
    }

    function ED(DD) {
      if (null === DD) return "no renderer settled";
      const {
        requested: zD,
        choice: wD,
        source: pD,
        fallbackReason: sD
      } = DD;
      return `renderer requested ${zD}, runs ${wD}, from ${pD}${null===sD?"":`, fell back: ${MD(sD,80)}`}`
    }

    function QD(DD, zD) {
      return DD ? `stopping packs: iOS, ${null!==zD&&void 0!==zD?zD:1} losses in a row within a day` : "stopping packs"
    }

    function XD(DD) {
      var zD, wD, pD;
      return `pick (wasm): backend ${null!==(zD=DD.backend)&&void 0!==zD?zD:"none"}, webgpu fallback ${null!==(wD=DD.reason)&&void 0!==wD?wD:"none"}, from ${null!==(pD=DD.source)&&void 0!==pD?pD:"none"}, storage pull breaks ${OD(DD.storagePullBreaks)}; packs run ${OD("webgpu"===DD.backend)}, else ${DD.noWebGpu}`
    }

    function VD(DD, zD, wD) {
      return `pack ${null===DD?"(name not read)":MD(DD,hD)} ${zD}${null===wD?"":`, ${wD} variants`}`
    }
    const PD = "shaderPack:failedWebGpuOff",
      CD = new class {
        constructor() {
          this.joins = 0, this.losses = 0, this.noPackSaid = !1
        }
        join() {
          return this.joins++, this.joins <= 5 ? "detail" : this.joins <= 30 ? "outcome" : 31 === this.joins ? "cap" : "none"
        }
        noPack() {
          const DD = !this.noPackSaid;
          return this.noPackSaid = !0, DD
        }
        loss() {
          return this.losses++, this.losses <= 10 ? "line" : 11 === this.losses ? "cap" : "none"
        }
      };
    let xD = null,
      TD = null,
      bD = 0;

    function jD(DD) {
      (0, ID.l)("webgpuloss", DD)
    }

    function dD() {
      return {
        lossHolds: (0, fD.A)(),
        lossStopsPack: (0, fD.G)(),
        anyLoss: (0, fD.i)(),
        oldIntelDriver: !0 === AD.h.getItem(UD.G),
        defaultOffForPacks: sD.e.isWebGpuDefaultOff(),
        defaultOffReason: sD.e.webGpuDefaultOffReason(),
        settingStored: AD.h.getItem(pD.Zb),
        setting: sD.e.get("clientEscMenuOptions").useWebGpu,
        urlRenderer: gD.currentUrl.getSearchParam(RD.b),
        storedRenderer: AD.h.getItem(RD.c)
      }
    }

    function SD(DD) {
      return function(DD, zD, wD) {
        if (null === DD || void 0 === DD) return "none";
        if ("object" !== typeof DD) return `unreadable (${typeof DD})`;
        const pD = DD,
          sD = "number" === typeof pD.at ? pD.at : null;
        return ["browser " + (zD ? "this one" : "another"), null === sD ? "no time" : `set ${((wD-sD)/BD.j).toFixed(1)} h ago`, `losses ${"number"===typeof pD.losses?pD.losses:"unset (1)"}${null!==sD&&wD-sD<BD.f?", the last within a day":""}`, `first page ${"hidden"===pD.firstPage||"visible"===pD.firstPage?pD.firstPage:"unset (visible)"}`, `hold step ${"number"===typeof pD.holdStep?pD.holdStep:"unset (1)"}`].join(", ")
      }(DD, function(DD) {
        try {
          return "object" === typeof DD && null !== DD && DD.browser === (0, fD.f)()
        } catch {
          return !1
        }
      }(DD), Date.now())
    }

    function iD() {
      const DD = (0, fD.o)().now;
      return "number" === typeof(null === DD || void 0 === DD ? void 0 : DD.losses) ? DD.losses : null
    }

    function lD() {
      const {
        atLoad: DD,
        now: zD,
        unreported: wD
      } = (0, fD.o)(), pD = JSON.stringify(DD) === JSON.stringify(zD) ? "Nf" : `now ${SD(zD)}`;
      jD(`load (${LD.v?"wasm":"js"}, os ${(0,cD.getOperatingSystem)()}): stored loss ${SD(DD)}; ${pD}; unreported ${function(DD,zD){if(null===DD||void 0===DD||"object"!==typeof DD)return"none";const wD=DD;return zD.map((DD=>`${DD} ${"number"===typeof wD[DD]?wD[DD]:0}`)).join(", ")}(wD,fD.b)}; webgpu_loss_page ${fD.D}`), jD(`load: ${JD(dD())}; pack expected ${(0,rD.h)(cD.featureFlags.settings.canUseShaderPacks)?"yes":"no"}; WebGPU API ${"gpu"in navigator?"yes":"no"}`)
    }

    function WD(DD) {
      xD = DD, jD(function(DD, zD, wD) {
        const pD = DD.setting ? "the setting is on" : (0, GD.c)(DD.packActive, DD.defaultOffForPacks) ? "the pack forces it" : DD.packActive ? "the pack can't force it: default off for packs" : "no active pack, setting off";
        return `engine (js): useWebGpu ${OD(DD.useWebGpu)} (${pD}); ${ED(zD)}; webgpu fallback ${null!==wD&&void 0!==wD?wD:"unset"}`
      }(DD, (0, KD.j)(), (0, cD.getWebGpuFallbackReason)()))
    }

    function ND(DD) {
      TD = DD, jD(XD(DD))
    }
    async function ZD(DD, zD, pD, sD) {
      const KD = ++bD,
        rD = await async function(DD) {
          var zD, pD;
          const [{
            shaderPackPage: sD,
            harnessShaderPackMode: KD
          }, {
            getShaderPackPolicy: rD
          }, {
            packRunsIn: LD
          }] = await Promise.all([wD.e(115).then((() => wD(39186))), wD.e(91).then((() => wD(41179))), wD.e(138).then((() => wD(41183)))]), cD = await sD.load();
          if ("none" === cD.status) return null;
          const gD = null !== (zD = KD()) && void 0 !== zD ? zD : rD(DD),
            RD = "active" === cD.status ? cD.pack.variants : cD.variants,
            AD = LD(RD, gD);
          return {
            text: `${"active"===cD.status?VD(cD.pack.name,"active",RD.length):VD(null,`blocked (${cD.messageKey})`,null!==(pD=null===RD||void 0===RD?void 0:RD.length)&&void 0!==pD?pD:null)}; game policy ${gD}, runs in it ${AD?"yes":"no"}`,
            runs: AD
          }
        }(DD);
      if (null === rD) return void(CD.noPack() && jD(`join ${KD}: no shader pack on this page (further joins without one not logged)`));
      const LD = CD.join();
      if ("none" === LD) return;
      if ("cap" === LD) return void jD(`join ${KD}: further joins not logged`);
      const cD = function(DD) {
          switch (DD.status) {
            case "ok":
              return void 0 === DD.couldntRun ? "joined" : `joined without the pack: ${DD.couldntRun}`;
            case "sw":
              return "sw";
            case "failed":
              return `failed: ${DD.messageKey}`
          }
        }(zD),
        gD = ("ok" === zD.status ? zD.couldntRun : "failed" === zD.status ? zD.messageKey : void 0) === PD ? `; cause: ${sD()}` : "";
      "outcome" !== LD ? (jD(`join ${KD}: ${rD.text}`), rD.runs && (jD(`join ${KD}: needs WebGPU; ${pD()}`), jD(`join ${KD}: ${JD(dD())}`)), jD(`join ${KD}: ${cD}${gD}`)) : jD(`join ${KD}: ${cD}${gD}`)
    }

    function yD(DD, zD, wD) {
      var pD;
      const sD = null !== (pD = null === zD || void 0 === zD ? void 0 : zD.isRunning()) && void 0 !== pD && pD;
      return ZD(DD, wD, (() => `Lite runtime ${null===zD?"no":"yes, running "+(sD?"yes":"no")}; ${ED((0,KD.j)())}`), (() => {
        return DD = xD, zD = dD(), wD = "ios" === (0, cD.getOperatingSystem)(), pD = iD(), null === DD ? "engine choice not seen" : DD.packActive ? (0, GD.c)(DD.packActive, DD.defaultOffForPacks) ? "the pack forced WebGPU, yet nothing asked for a renderer: unexpected" : zD.lossStopsPack ? `a loss ${QD(wD,pD)}` : "old Intel driver verdict, worded off as a loss is stored" : "no active pack when the engine was built, so nothing forced WebGPU; worded off as a loss is stored" + (zD.lossStopsPack ? "" : " (one that doesn't stop packs)");
        var DD, zD, wD, pD
      }))
    }

    function kD(DD, zD, wD) {
      return ZD(DD, null !== zD ? {
        status: "failed",
        messageKey: zD
      } : {
        status: "ok",
        couldntRun: null !== wD && void 0 !== wD ? wD : void 0
      }, (() => null === TD ? "pick not seen" : XD(TD)), (() => function(DD, zD, wD, pD) {
        var sD, KD, rD, LD;
        return null === DD ? "pick not seen" : "off_after_loss" === DD.reason ? `off after a loss, ${"pack"===DD.source?QD(wD,pD):`from ${null!==(LD=DD.source)&&void 0!==LD?LD:"none"}`}` : "not_requested" === DD.reason ? `not requested, from ${null!==(rD=DD.source)&&void 0!==rD?rD:"none"} (setting ${zD.setting?"on":"off"})` : `${null!==(sD=DD.reason)&&void 0!==sD?sD:"none"}, from ${null!==(KD=DD.source)&&void 0!==KD?KD:"none"}`
      }(TD, dD(), "ios" === (0, cD.getOperatingSystem)(), iD())))
    }

    function mD(DD, zD, wD) {
      const pD = CD.loss();
      if ("none" === pD) return;
      if ("cap" === pD) return void jD("further losses not logged");
      const sD = dD();
      jD(function(DD, zD, wD, pD) {
        return `loss (${DD}): ${zD}${null===wD?"":` ${MD(wD,nD)}`}; ${pD}`
      }(DD, zD, wD, `stored ${SD((0,fD.o)().now)}; holds ${sD.lossHolds?"yes":"no"}, stops packs ${sD.lossStopsPack?"yes":"no"}`))
    }
  },
  34145: (DD, zD, wD) => {
    function pD(DD, zD) {
      return DD && !zD
    }
    wD.d(zD, {
      c: () => pD
    })
  }
};
Object.freeze(modules);
for (const DD in modules) Object.freeze(modules[DD]);