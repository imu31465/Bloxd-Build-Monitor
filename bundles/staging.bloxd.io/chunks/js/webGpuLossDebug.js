export const id = 65;
export const ids = [65];
export const modules = {
  35843: (DD, CD, cD) => {
    cD.r(CD), cD.d(CD, {
      noteJsEngine: () => TD,
      noteJsJoin: () => kD,
      noteWasmJoin: () => dD,
      noteWasmPick: () => GD,
      noteWebGpuLoss: () => YD,
      startWebGpuLossDebug: () => LD
    });
    var ID = cD(312),
      pD = cD(16),
      iD = cD(2660),
      fD = cD(3255),
      bD = cD(646),
      QD = cD(300),
      wD = cD(90),
      SD = cD(101),
      BD = cD(2668),
      yD = cD(36),
      MD = cD(110),
      tD = cD(298),
      ZD = cD(2727),
      oD = cD(326),
      vD = cD(8950);
    const ND = 40,
      gD = 160;

    function XD(DD, CD) {
      return `"${(DD.length>CD?`${DD.slice(0,CD)}...`:DD).replace(/[^ -~]|["\\]/g,"?")}"`
    }

    function mD(DD) {
      return DD ? "yes" : "no"
    }

    function nD(DD) {
      var CD;
      const cD = DD.storedRenderer;
      return [`loss holds ${mD(DD.lossHolds)}`, `stops packs ${mD(DD.lossStopsPack)}`, `any loss ${mD(DD.anyLoss)}`, `old intel ${mD(DD.oldIntelDriver)}`, `default off for packs ${mD(DD.defaultOffForPacks)}`, `default off reason ${null!==(CD=DD.defaultOffReason)&&void 0!==CD?CD:"none"}`, `setting ${DD.setting?"on":"off"} (stored ${null===DD.settingStored?"unset":DD.settingStored?"on":"off"})`, `renderer url ${null===DD.urlRenderer?"none":XD(DD.urlRenderer,12)}, stored ${null===cD||void 0===cD?"none":XD(String(cD),12)}`, `hidden-loss arm ${DD.hiddenLossArm}`].join(", ")
    }

    function OD(DD) {
      if (null === DD) return "no renderer settled";
      const {
        requested: CD,
        choice: cD,
        source: ID,
        fallbackReason: pD
      } = DD;
      return `renderer requested ${CD}, runs ${cD}, from ${ID}${null===pD?"":`, fell back: ${XD(pD,80)}`}`
    }

    function PD(DD, CD) {
      return DD ? `stopping packs: iOS, ${null!==CD&&void 0!==CD?CD:1} losses in a row within a day` : "stopping packs"
    }

    function HD(DD) {
      var CD, cD, ID;
      return `pick (wasm): backend ${null!==(CD=DD.backend)&&void 0!==CD?CD:"none"}, webgpu fallback ${null!==(cD=DD.reason)&&void 0!==cD?cD:"none"}, from ${null!==(ID=DD.source)&&void 0!==ID?ID:"none"}, storage pull breaks ${mD(DD.storagePullBreaks)}; packs run ${mD("webgpu"===DD.backend&&!DD.storagePullBreaks)}, else ${DD.noWebGpu}`
    }

    function UD(DD, CD, cD) {
      return `pack ${null===DD?"(name not read)":XD(DD,ND)} ${CD}${null===cD?"":`, ${cD} variants`}`
    }
    const xD = "shaderPack:failedWebGpuOff",
      qD = new class {
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
    let JD = null,
      KD = null,
      aD = 0;

    function VD(DD) {
      (0, ZD.j)("webgpuloss", DD)
    }

    function zD() {
      return {
        lossHolds: (0, tD.s)(),
        lossStopsPack: (0, tD.x)(),
        anyLoss: (0, tD.f)(),
        oldIntelDriver: !0 === yD.h.getItem(MD.M),
        defaultOffForPacks: pD.d.isWebGpuDefaultOff(),
        defaultOffReason: pD.d.webGpuDefaultOffReason(),
        settingStored: yD.h.getItem(ID.jc),
        setting: pD.d.get("clientEscMenuOptions").useWebGpu,
        urlRenderer: SD.currentUrl.getSearchParam(BD.d),
        storedRenderer: yD.h.getItem(BD.f),
        hiddenLossArm: QD.b.webgpu_hidden_loss_v1
      }
    }

    function jD(DD) {
      return function(DD, CD, cD) {
        if (null === DD || void 0 === DD) return "none";
        if ("object" !== typeof DD) return `unreadable (${typeof DD})`;
        const ID = DD,
          pD = "number" === typeof ID.at ? ID.at : null;
        return ["browser " + (CD ? "this one" : "another"), null === pD ? "no time" : `set ${((cD-pD)/oD.k).toFixed(1)} h ago`, `losses ${"number"===typeof ID.losses?ID.losses:"unset (1)"}${null!==pD&&cD-pD<oD.i?", the last within a day":""}`, `hidden-only ${"number"===typeof ID.hiddenLosses?ID.hiddenLosses:"no"}`, `first page ${"hidden"===ID.firstPage||"visible"===ID.firstPage?ID.firstPage:"unset (visible)"}`].join(", ")
      }(DD, function(DD) {
        try {
          return "object" === typeof DD && null !== DD && DD.browser === (0, tD.e)()
        } catch {
          return !1
        }
      }(DD), Date.now())
    }

    function lD() {
      const DD = (0, tD.m)().now;
      return "number" === typeof(null === DD || void 0 === DD ? void 0 : DD.losses) ? DD.losses : null
    }

    function LD() {
      const {
        atLoad: DD,
        now: CD,
        unreported: cD
      } = (0, tD.m)(), ID = JSON.stringify(DD) === JSON.stringify(CD) ? "uM" : `now ${jD(CD)}`;
      VD(`load (${bD.q?"wasm":"js"}, os ${(0,wD.getOperatingSystem)()}): stored loss ${jD(DD)}; ${ID}; unreported ${function(DD){if(null===DD||void 0===DD||"object"!==typeof DD)return"none";const{hidden:CD,visible:cD}=DD;return`
        hidden $ {
          "number" === typeof CD ? CD : 0
        }, visible $ {
          "number" === typeof cD ? cD : 0
        }
        `}(cD)}; webgpu_loss_page ${tD.u}`), VD(`load: ${nD(zD())}; pack expected ${(0,fD.g)(wD.featureFlags.settings.canUseShaderPacks)?"yes":"no"}; WebGPU API ${"gpu"in navigator?"yes":"no"}`)
    }

    function TD(DD) {
      JD = DD, VD(function(DD, CD, cD) {
        const ID = DD.setting ? "the setting is on" : (0, vD.e)(DD.packActive, DD.defaultOffForPacks) ? "the pack forces it" : DD.packActive ? "the pack can't force it: default off for packs" : "no active pack, setting off";
        return `engine (js): useWebGpu ${mD(DD.useWebGpu)} (${ID}); ${OD(CD)}; webgpu fallback ${null!==cD&&void 0!==cD?cD:"unset"}`
      }(DD, (0, iD.j)(), (0, wD.getWebGpuFallbackReason)()))
    }

    function GD(DD) {
      KD = DD, VD(HD(DD))
    }
    async function RD(DD, CD, ID, pD) {
      const iD = ++aD,
        fD = await async function(DD) {
          var CD, ID;
          const [{
            shaderPackPage: pD,
            harnessShaderPackMode: iD
          }, {
            getShaderPackPolicy: fD
          }, {
            packRunsIn: bD
          }] = await Promise.all([cD.e(129).then((() => cD(38527))), cD.e(89).then((() => cD(40329))), cD.e(133).then((() => cD(40338)))]), QD = await pD.load();
          if ("none" === QD.status) return null;
          const wD = null !== (CD = iD()) && void 0 !== CD ? CD : fD(DD),
            SD = "active" === QD.status ? QD.pack.variants : QD.variants,
            BD = bD(SD, wD);
          return {
            text: `${"active"===QD.status?UD(QD.pack.name,"active",SD.length):UD(null,`blocked (${QD.messageKey})`,null!==(ID=null===SD||void 0===SD?void 0:SD.length)&&void 0!==ID?ID:null)}; game policy ${wD}, runs in it ${BD?"yes":"no"}`,
            runs: BD
          }
        }(DD);
      if (null === fD) return void(qD.noPack() && VD(`join ${iD}: no shader pack on this page (further joins without one not logged)`));
      const bD = qD.join();
      if ("none" === bD) return;
      if ("cap" === bD) return void VD(`join ${iD}: further joins not logged`);
      const QD = function(DD) {
          switch (DD.status) {
            case "ok":
              return void 0 === DD.couldntRun ? "joined" : `joined without the pack: ${DD.couldntRun}`;
            case "tc":
              return "tc";
            case "failed":
              return `failed: ${DD.messageKey}`
          }
        }(CD),
        wD = ("ok" === CD.status ? CD.couldntRun : "failed" === CD.status ? CD.messageKey : void 0) === xD ? `; cause: ${pD()}` : "";
      "outcome" !== bD ? (VD(`join ${iD}: ${fD.text}`), fD.runs && (VD(`join ${iD}: needs WebGPU; ${ID()}`), VD(`join ${iD}: ${nD(zD())}`)), VD(`join ${iD}: ${QD}${wD}`)) : VD(`join ${iD}: ${QD}${wD}`)
    }

    function kD(DD, CD, cD) {
      var ID;
      const pD = null !== (ID = null === CD || void 0 === CD ? void 0 : CD.isRunning()) && void 0 !== ID && ID;
      return RD(DD, cD, (() => `Lite runtime ${null===CD?"no":"yes, running "+(pD?"yes":"no")}; ${OD((0,iD.j)())}`), (() => {
        return DD = JD, CD = zD(), cD = "ios" === (0, wD.getOperatingSystem)(), ID = lD(), null === DD ? "engine choice not seen" : DD.packActive ? (0, vD.e)(DD.packActive, DD.defaultOffForPacks) ? "the pack forced WebGPU, yet nothing asked for a renderer: unexpected" : CD.lossStopsPack ? `a loss ${PD(cD,ID)}` : "old Intel driver verdict, worded off as a loss is stored" : "no active pack when the engine was built, so nothing forced WebGPU; worded off as a loss is stored" + (CD.lossStopsPack ? "" : " (one that doesn't stop packs)");
        var DD, CD, cD, ID
      }))
    }

    function dD(DD, CD, cD) {
      return RD(DD, null !== CD ? {
        status: "failed",
        messageKey: CD
      } : {
        status: "ok",
        couldntRun: null !== cD && void 0 !== cD ? cD : void 0
      }, (() => null === KD ? "pick not seen" : HD(KD)), (() => function(DD, CD, cD, ID) {
        var pD, iD, fD, bD;
        return null === DD ? "pick not seen" : "off_after_loss" === DD.reason ? `off after a loss, ${"pack"===DD.source?PD(cD,ID):`from ${null!==(bD=DD.source)&&void 0!==bD?bD:"none"}`}` : "not_requested" === DD.reason ? `not requested, from ${null!==(fD=DD.source)&&void 0!==fD?fD:"none"} (setting ${CD.setting?"on":"off"})` : `${null!==(pD=DD.reason)&&void 0!==pD?pD:"none"}, from ${null!==(iD=DD.source)&&void 0!==iD?iD:"none"}`
      }(KD, zD(), "ios" === (0, wD.getOperatingSystem)(), lD())))
    }

    function YD(DD, CD, cD) {
      const ID = qD.loss();
      if ("none" === ID) return;
      if ("cap" === ID) return void VD("further losses not logged");
      const pD = zD();
      VD(function(DD, CD, cD, ID) {
        return `loss (${DD}): ${CD}${null===cD?"":` ${XD(cD,gD)}`}; ${ID}`
      }(DD, CD, cD, `stored ${jD((0,tD.m)().now)}; holds ${pD.lossHolds?"yes":"no"}, stops packs ${pD.lossStopsPack?"yes":"no"}`))
    }
  },
  8950: (DD, CD, cD) => {
    function ID(DD, CD) {
      return DD && !CD
    }
    cD.d(CD, {
      e: () => ID
    })
  }
};
Object.freeze(modules);
for (const DD in modules) Object.freeze(modules[DD]);