export const id = 80;
export const ids = [80];
export const modules = {
  37577: (VV, eV, xV) => {
    xV.r(eV), xV.d(eV, {
      noteJsEngine: () => cV,
      noteJsJoin: () => LV,
      noteWasmJoin: () => fV,
      noteWasmPick: () => hV,
      noteWebGpuLoss: () => mV,
      startWebGpuLossDebug: () => oV
    });
    var JV = xV(364),
      YV = xV(27),
      UV = xV(3107),
      yV = xV(3907),
      pV = xV(686),
      QV = xV(99),
      nV = xV(110),
      wV = xV(3111),
      ZV = xV(40),
      vV = xV(124),
      rV = xV(348),
      kV = xV(670),
      bV = xV(3142),
      EV = xV(375),
      BV = xV(370),
      jV = xV(35238);
    const qV = 40,
      tV = 160;

    function FV(VV, eV) {
      return `"${(VV.length>eV?`${VV.slice(0,eV)}...`:VV).replace(/[^ -~]|["\\]/g,"?")}"`
    }

    function TV(VV) {
      return VV ? "yes" : "no"
    }

    function PV(VV) {
      var eV;
      const xV = VV.storedRenderer;
      return [`loss holds ${TV(VV.lossHolds)}`, `stops packs ${TV(VV.lossStopsPack)}`, `any loss ${TV(VV.anyLoss)}`, `old intel ${TV(VV.oldIntelDriver)}`, `default off for packs ${TV(VV.defaultOffForPacks)}`, `default off reason ${null!==(eV=VV.defaultOffReason)&&void 0!==eV?eV:"none"}`, `setting ${VV.setting?"on":"off"} (stored ${null===VV.settingStored?"unset":VV.settingStored?"on":"off"})`, `renderer url ${null===VV.urlRenderer?"none":FV(VV.urlRenderer,12)}, stored ${null===xV||void 0===xV?"none":FV(String(xV),12)}`].join(", ")
    }

    function AV(VV) {
      if (null === VV) return "no renderer settled";
      const {
        requested: eV,
        choice: xV,
        source: JV,
        fallbackReason: YV
      } = VV;
      return `renderer requested ${eV}, runs ${xV}, from ${JV}${null===YV?"":`, fell back: ${FV(YV,80)}`}`
    }

    function NV(VV, eV) {
      return VV ? `stopping packs: iOS, ${null!==eV&&void 0!==eV?eV:1} losses in a row within a day` : "stopping packs"
    }

    function XV(VV) {
      var eV, xV, JV;
      return `pick (wasm): backend ${null!==(eV=VV.backend)&&void 0!==eV?eV:"none"}, webgpu fallback ${null!==(xV=VV.reason)&&void 0!==xV?xV:"none"}, from ${null!==(JV=VV.source)&&void 0!==JV?JV:"none"}, storage pull breaks ${TV(VV.storagePullBreaks)}; packs run ${TV("webgpu"===VV.backend)}, else ${VV.noWebGpu}`
    }

    function MV(VV, eV, xV) {
      return `pack ${null===VV?"(name not read)":FV(VV,qV)} ${eV}${null===xV?"":`, ${xV} variants`}`
    }
    const zV = "shaderPack:failedWebGpuOff",
      GV = new class {
        constructor() {
          this.joins = 0, this.losses = 0, this.noPackSaid = !1
        }
        join() {
          return this.joins++, this.joins <= 5 ? "detail" : this.joins <= 30 ? "outcome" : 31 === this.joins ? "cap" : "none"
        }
        noPack() {
          const VV = !this.noPackSaid;
          return this.noPackSaid = !0, VV
        }
        loss() {
          return this.losses++, this.losses <= 10 ? "line" : 11 === this.losses ? "cap" : "none"
        }
      };
    let WV = null,
      RV = null,
      gV = 0;

    function DV(VV) {
      (0, bV.i)("webgpuloss", VV)
    }

    function iV() {
      return {
        lossHolds: (0, rV.y)(),
        lossStopsPack: (0, rV.H)(),
        anyLoss: (0, rV.l)(),
        oldIntelDriver: !0 === ZV.m.getItem(vV.G),
        defaultOffForPacks: YV.b.isWebGpuDefaultOff(),
        defaultOffReason: YV.b.webGpuDefaultOffReason(),
        settingStored: ZV.m.getItem(JV.jc),
        setting: YV.b.get("clientEscMenuOptions").useWebGpu,
        urlRenderer: nV.currentUrl.getSearchParam(wV.e),
        storedRenderer: ZV.m.getItem(wV.i)
      }
    }

    function CV(VV) {
      return function(VV, eV, xV) {
        if (null === VV || void 0 === VV) return "none";
        if ("object" !== typeof VV) return `unreadable (${typeof VV})`;
        const JV = VV,
          YV = "number" === typeof JV.at ? JV.at : null,
          UV = ["browser " + (eV ? "this one" : "another"), null === YV ? "no time" : `set ${((xV-YV)/EV.g).toFixed(1)} h ago`, `losses ${"number"===typeof JV.losses?JV.losses:"unset (1)"}${null!==YV&&xV-YV<EV.e?", the last within a day":""}`, `first page ${"hidden"===JV.firstPage||"visible"===JV.firstPage?JV.firstPage:"unset (visible)"}`, `hold step ${"number"===typeof JV.holdStep?JV.holdStep:"unset (1)"}`];
        if (void 0 !== JV.reason || void 0 !== JV.message) {
          const VV = "string" === typeof JV.reason ? FV(JV.reason, BV.b) : "no reason";
          UV.push(`cause ${VV} ${!0===JV.causeSent?"reported":"unreported"}`)
        }
        return UV.join(", ")
      }(VV, function(VV) {
        try {
          return "object" === typeof VV && null !== VV && VV.browser === (0, rV.h)()
        } catch {
          return !1
        }
      }(VV), Date.now())
    }

    function aV() {
      const VV = (0, rV.s)().now;
      return "number" === typeof(null === VV || void 0 === VV ? void 0 : VV.losses) ? VV.losses : null
    }

    function oV() {
      const {
        atLoad: VV,
        now: eV,
        unreported: xV
      } = (0, rV.s)(), JV = JSON.stringify(VV) === JSON.stringify(eV) ? "ZZ" : `now ${CV(eV)}`;
      DV(`load (${pV.I?"wasm":"js"}, os ${(0,QV.getOperatingSystem)()}): stored loss ${CV(VV)}; ${JV}; cause kept apart ${function(VV,eV){if(null===VV||void 0===VV)return"none";const{reason:xV,at:JV}="object"===typeof VV?VV:{},YV="number"===typeof JV?`
        set $ {
          ((eV - JV) / EV.g).toFixed(1)
        }
        h ago`:"no time";return`
        $ {
          "string" === typeof xV ? FV(xV, BV.b) : "no reason"
        }, $ {
          YV
        }
        `}((0,kV.j)(),Date.now())}; unreported ${function(VV,eV){if(null===VV||void 0===VV||"object"!==typeof VV)return"none";const xV=VV;return eV.map((VV=>`${VV} ${"number"===typeof xV[VV]?xV[VV]:0}`)).join(", ")}(xV,rV.e)}; webgpu_loss_page ${rV.C}`), DV(`load: ${PV(iV())}; pack expected ${(0,yV.e)(QV.featureFlags.settings.canUseShaderPacks)?"yes":"no"}; WebGPU API ${"gpu"in navigator?"yes":"no"}`)
    }

    function cV(VV) {
      WV = VV, DV(function(VV, eV, xV) {
        const JV = VV.setting ? "the setting is on" : (0, jV.e)(VV.packActive, VV.defaultOffForPacks) ? "the pack forces it" : VV.packActive ? "the pack can't force it: default off for packs" : "no active pack, setting off";
        return `engine (js): useWebGpu ${TV(VV.useWebGpu)} (${JV}); ${AV(eV)}; webgpu fallback ${null!==xV&&void 0!==xV?xV:"unset"}`
      }(VV, (0, UV.g)(), (0, QV.getWebGpuFallbackReason)()))
    }

    function hV(VV) {
      RV = VV, DV(XV(VV))
    }
    async function lV(VV, eV, JV, YV) {
      const UV = ++gV,
        yV = await async function(VV) {
          var eV, JV;
          const [{
            shaderPackPage: YV,
            harnessShaderPackMode: UV
          }, {
            getShaderPackPolicy: yV
          }, {
            packRunsIn: pV
          }] = await Promise.all([xV.e(129).then((() => xV(40443))), xV.e(106).then((() => xV(44193))), xV.e(154).then((() => xV(44201)))]), QV = await YV.load();
          if ("none" === QV.status) return null;
          const nV = null !== (eV = UV()) && void 0 !== eV ? eV : yV(VV),
            wV = "active" === QV.status ? QV.pack.variants : QV.variants,
            ZV = pV(wV, nV);
          return {
            text: `${"active"===QV.status?MV(QV.pack.name,"active",wV.length):MV(null,`blocked (${QV.messageKey})`,null!==(JV=null===wV||void 0===wV?void 0:wV.length)&&void 0!==JV?JV:null)}; game policy ${nV}, runs in it ${ZV?"yes":"no"}`,
            runs: ZV
          }
        }(VV);
      if (null === yV) return void(GV.noPack() && DV(`join ${UV}: no shader pack on this page (further joins without one not logged)`));
      const pV = GV.join();
      if ("none" === pV) return;
      if ("cap" === pV) return void DV(`join ${UV}: further joins not logged`);
      const QV = function(VV) {
          switch (VV.status) {
            case "ok":
              return void 0 === VV.couldntRun ? "joined" : `joined without the pack: ${VV.couldntRun}`;
            case "pJ":
              return "pJ";
            case "failed":
              return `failed: ${VV.messageKey}`
          }
        }(eV),
        nV = ("ok" === eV.status ? eV.couldntRun : "failed" === eV.status ? eV.messageKey : void 0) === zV ? `; cause: ${YV()}` : "";
      "outcome" !== pV ? (DV(`join ${UV}: ${yV.text}`), yV.runs && (DV(`join ${UV}: needs WebGPU; ${JV()}`), DV(`join ${UV}: ${PV(iV())}`)), DV(`join ${UV}: ${QV}${nV}`)) : DV(`join ${UV}: ${QV}${nV}`)
    }

    function LV(VV, eV, xV) {
      var JV;
      const YV = null !== (JV = null === eV || void 0 === eV ? void 0 : eV.isRunning()) && void 0 !== JV && JV;
      return lV(VV, xV, (() => `Lite runtime ${null===eV?"no":"yes, running "+(YV?"yes":"no")}; ${AV((0,UV.g)())}`), (() => {
        return VV = WV, eV = iV(), xV = "ios" === (0, QV.getOperatingSystem)(), JV = aV(), null === VV ? "engine choice not seen" : VV.packActive ? (0, jV.e)(VV.packActive, VV.defaultOffForPacks) ? "the pack forced WebGPU, yet nothing asked for a renderer: unexpected" : eV.lossStopsPack ? `a loss ${NV(xV,JV)}` : "old Intel driver verdict, worded off as a loss is stored" : "no active pack when the engine was built, so nothing forced WebGPU; worded off as a loss is stored" + (eV.lossStopsPack ? "" : " (one that doesn't stop packs)");
        var VV, eV, xV, JV
      }))
    }

    function fV(VV, eV, xV) {
      return lV(VV, null !== eV ? {
        status: "failed",
        messageKey: eV
      } : {
        status: "ok",
        couldntRun: null !== xV && void 0 !== xV ? xV : void 0
      }, (() => null === RV ? "pick not seen" : XV(RV)), (() => function(VV, eV, xV, JV) {
        var YV, UV, yV, pV;
        return null === VV ? "pick not seen" : "off_after_loss" === VV.reason ? `off after a loss, ${"pack"===VV.source?NV(xV,JV):`from ${null!==(pV=VV.source)&&void 0!==pV?pV:"none"}`}` : "not_requested" === VV.reason ? `not requested, from ${null!==(yV=VV.source)&&void 0!==yV?yV:"none"} (setting ${eV.setting?"on":"off"})` : `${null!==(YV=VV.reason)&&void 0!==YV?YV:"none"}, from ${null!==(UV=VV.source)&&void 0!==UV?UV:"none"}`
      }(RV, iV(), "ios" === (0, QV.getOperatingSystem)(), aV())))
    }

    function mV(VV, eV, xV) {
      const JV = GV.loss();
      if ("none" === JV) return;
      if ("cap" === JV) return void DV("further losses not logged");
      const YV = iV();
      DV(function(VV, eV, xV, JV) {
        return `loss (${VV}): ${eV}${null===xV?"":` ${FV(xV,tV)}`}; ${JV}`
      }(VV, eV, xV, `stored ${CV((0,rV.s)().now)}; holds ${YV.lossHolds?"yes":"no"}, stops packs ${YV.lossStopsPack?"yes":"no"}`))
    }
  },
  35238: (VV, eV, xV) => {
    function JV(VV, eV) {
      return VV && !eV
    }
    xV.d(eV, {
      e: () => JV
    })
  }
};
Object.freeze(modules);
for (const VV in modules) Object.freeze(modules[VV]);