export const id = 68;
export const ids = [68];
export const modules = {
  36497: (mm, Tm, fm) => {
    fm.r(Tm), fm.d(Tm, {
      noteJsEngine: () => ym,
      noteJsJoin: () => sm,
      noteWasmJoin: () => lm,
      noteWasmPick: () => Cm,
      noteWebGpuLoss: () => Mm,
      startWebGpuLossDebug: () => Hm
    });
    var hm = fm(339),
      Am = fm(23),
      am = fm(2780),
      xm = fm(3461),
      wm = fm(675),
      Dm = fm(105),
      im = fm(112),
      Rm = fm(2785),
      pm = fm(37),
      Em = fm(118),
      om = fm(330),
      Om = fm(2813),
      Ym = fm(354),
      qm = fm(34209);
    const jm = 40,
      Vm = 160;

    function Im(mm, Tm) {
      return `"${(mm.length>Tm?`${mm.slice(0,Tm)}...`:mm).replace(/[^ -~]|["\\]/g,"?")}"`
    }

    function Km(mm) {
      return mm ? "yes" : "no"
    }

    function Qm(mm) {
      var Tm;
      const fm = mm.storedRenderer;
      return [`loss holds ${Km(mm.lossHolds)}`, `stops packs ${Km(mm.lossStopsPack)}`, `any loss ${Km(mm.anyLoss)}`, `old intel ${Km(mm.oldIntelDriver)}`, `default off for packs ${Km(mm.defaultOffForPacks)}`, `default off reason ${null!==(Tm=mm.defaultOffReason)&&void 0!==Tm?Tm:"none"}`, `setting ${mm.setting?"on":"off"} (stored ${null===mm.settingStored?"unset":mm.settingStored?"on":"off"})`, `renderer url ${null===mm.urlRenderer?"none":Im(mm.urlRenderer,12)}, stored ${null===fm||void 0===fm?"none":Im(String(fm),12)}`].join(", ")
    }

    function nm(mm) {
      if (null === mm) return "no renderer settled";
      const {
        requested: Tm,
        choice: fm,
        source: hm,
        fallbackReason: Am
      } = mm;
      return `renderer requested ${Tm}, runs ${fm}, from ${hm}${null===Am?"":`, fell back: ${Im(Am,80)}`}`
    }

    function Jm(mm, Tm) {
      return mm ? `stopping packs: iOS, ${null!==Tm&&void 0!==Tm?Tm:1} losses in a row within a day` : "stopping packs"
    }

    function cm(mm) {
      var Tm, fm, hm;
      return `pick (wasm): backend ${null!==(Tm=mm.backend)&&void 0!==Tm?Tm:"none"}, webgpu fallback ${null!==(fm=mm.reason)&&void 0!==fm?fm:"none"}, from ${null!==(hm=mm.source)&&void 0!==hm?hm:"none"}, storage pull breaks ${Km(mm.storagePullBreaks)}; packs run ${Km("webgpu"===mm.backend)}, else ${mm.noWebGpu}`
    }

    function zm(mm, Tm, fm) {
      return `pack ${null===mm?"(name not read)":Im(mm,jm)} ${Tm}${null===fm?"":`, ${fm} variants`}`
    }
    const Zm = "shaderPack:failedWebGpuOff",
      km = new class {
        constructor() {
          this.joins = 0, this.losses = 0, this.noPackSaid = !1
        }
        join() {
          return this.joins++, this.joins <= 5 ? "detail" : this.joins <= 30 ? "outcome" : 31 === this.joins ? "cap" : "none"
        }
        noPack() {
          const mm = !this.noPackSaid;
          return this.noPackSaid = !0, mm
        }
        loss() {
          return this.losses++, this.losses <= 10 ? "line" : 11 === this.losses ? "cap" : "none"
        }
      };
    let bm = null,
      Sm = null,
      em = 0;

    function Nm(mm) {
      (0, Om.g)("webgpuloss", mm)
    }

    function Gm() {
      return {
        lossHolds: (0, om.y)(),
        lossStopsPack: (0, om.F)(),
        anyLoss: (0, om.h)(),
        oldIntelDriver: !0 === pm.g.getItem(Em.J),
        defaultOffForPacks: Am.c.isWebGpuDefaultOff(),
        defaultOffReason: Am.c.webGpuDefaultOffReason(),
        settingStored: pm.g.getItem(hm.dc),
        setting: Am.c.get("clientEscMenuOptions").useWebGpu,
        urlRenderer: im.currentUrl.getSearchParam(Rm.d),
        storedRenderer: pm.g.getItem(Rm.f)
      }
    }

    function Xm(mm) {
      return function(mm, Tm, fm) {
        if (null === mm || void 0 === mm) return "none";
        if ("object" !== typeof mm) return `unreadable (${typeof mm})`;
        const hm = mm,
          Am = "number" === typeof hm.at ? hm.at : null;
        return ["browser " + (Tm ? "this one" : "another"), null === Am ? "no time" : `set ${((fm-Am)/Ym.o).toFixed(1)} h ago`, `losses ${"number"===typeof hm.losses?hm.losses:"unset (1)"}${null!==Am&&fm-Am<Ym.k?", the last within a day":""}`, `first page ${"hidden"===hm.firstPage||"visible"===hm.firstPage?hm.firstPage:"unset (visible)"}`, `hold step ${"number"===typeof hm.holdStep?hm.holdStep:"unset (1)"}`].join(", ")
      }(mm, function(mm) {
        try {
          return "object" === typeof mm && null !== mm && mm.browser === (0, om.e)()
        } catch {
          return !1
        }
      }(mm), Date.now())
    }

    function Pm() {
      const mm = (0, om.n)().now;
      return "number" === typeof(null === mm || void 0 === mm ? void 0 : mm.losses) ? mm.losses : null
    }

    function Hm() {
      const {
        atLoad: mm,
        now: Tm,
        unreported: fm
      } = (0, om.n)(), hm = JSON.stringify(mm) === JSON.stringify(Tm) ? "mO" : `now ${Xm(Tm)}`;
      Nm(`load (${wm.A?"wasm":"js"}, os ${(0,Dm.getOperatingSystem)()}): stored loss ${Xm(mm)}; ${hm}; unreported ${function(mm,Tm){if(null===mm||void 0===mm||"object"!==typeof mm)return"none";const fm=mm;return Tm.map((mm=>`${mm} ${"number"===typeof fm[mm]?fm[mm]:0}`)).join(", ")}(fm,om.b)}; webgpu_loss_page ${om.z}`), Nm(`load: ${Qm(Gm())}; pack expected ${(0,xm.e)(Dm.featureFlags.settings.canUseShaderPacks)?"yes":"no"}; WebGPU API ${"gpu"in navigator?"yes":"no"}`)
    }

    function ym(mm) {
      bm = mm, Nm(function(mm, Tm, fm) {
        const hm = mm.setting ? "the setting is on" : (0, qm.c)(mm.packActive, mm.defaultOffForPacks) ? "the pack forces it" : mm.packActive ? "the pack can't force it: default off for packs" : "no active pack, setting off";
        return `engine (js): useWebGpu ${Km(mm.useWebGpu)} (${hm}); ${nm(Tm)}; webgpu fallback ${null!==fm&&void 0!==fm?fm:"unset"}`
      }(mm, (0, am.j)(), (0, Dm.getWebGpuFallbackReason)()))
    }

    function Cm(mm) {
      Sm = mm, Nm(cm(mm))
    }
    async function rm(mm, Tm, hm, Am) {
      const am = ++em,
        xm = await async function(mm) {
          var Tm, hm;
          const [{
            shaderPackPage: Am,
            harnessShaderPackMode: am
          }, {
            getShaderPackPolicy: xm
          }, {
            packRunsIn: wm
          }] = await Promise.all([fm.e(115).then((() => fm(39342))), fm.e(91).then((() => fm(41314))), fm.e(138).then((() => fm(41323)))]), Dm = await Am.load();
          if ("none" === Dm.status) return null;
          const im = null !== (Tm = am()) && void 0 !== Tm ? Tm : xm(mm),
            Rm = "active" === Dm.status ? Dm.pack.variants : Dm.variants,
            pm = wm(Rm, im);
          return {
            text: `${"active"===Dm.status?zm(Dm.pack.name,"active",Rm.length):zm(null,`blocked (${Dm.messageKey})`,null!==(hm=null===Rm||void 0===Rm?void 0:Rm.length)&&void 0!==hm?hm:null)}; game policy ${im}, runs in it ${pm?"yes":"no"}`,
            runs: pm
          }
        }(mm);
      if (null === xm) return void(km.noPack() && Nm(`join ${am}: no shader pack on this page (further joins without one not logged)`));
      const wm = km.join();
      if ("none" === wm) return;
      if ("cap" === wm) return void Nm(`join ${am}: further joins not logged`);
      const Dm = function(mm) {
          switch (mm.status) {
            case "ok":
              return void 0 === mm.couldntRun ? "joined" : `joined without the pack: ${mm.couldntRun}`;
            case "Af":
              return "Af";
            case "failed":
              return `failed: ${mm.messageKey}`
          }
        }(Tm),
        im = ("ok" === Tm.status ? Tm.couldntRun : "failed" === Tm.status ? Tm.messageKey : void 0) === Zm ? `; cause: ${Am()}` : "";
      "outcome" !== wm ? (Nm(`join ${am}: ${xm.text}`), xm.runs && (Nm(`join ${am}: needs WebGPU; ${hm()}`), Nm(`join ${am}: ${Qm(Gm())}`)), Nm(`join ${am}: ${Dm}${im}`)) : Nm(`join ${am}: ${Dm}${im}`)
    }

    function sm(mm, Tm, fm) {
      var hm;
      const Am = null !== (hm = null === Tm || void 0 === Tm ? void 0 : Tm.isRunning()) && void 0 !== hm && hm;
      return rm(mm, fm, (() => `Lite runtime ${null===Tm?"no":"yes, running "+(Am?"yes":"no")}; ${nm((0,am.j)())}`), (() => {
        return mm = bm, Tm = Gm(), fm = "ios" === (0, Dm.getOperatingSystem)(), hm = Pm(), null === mm ? "engine choice not seen" : mm.packActive ? (0, qm.c)(mm.packActive, mm.defaultOffForPacks) ? "the pack forced WebGPU, yet nothing asked for a renderer: unexpected" : Tm.lossStopsPack ? `a loss ${Jm(fm,hm)}` : "old Intel driver verdict, worded off as a loss is stored" : "no active pack when the engine was built, so nothing forced WebGPU; worded off as a loss is stored" + (Tm.lossStopsPack ? "" : " (one that doesn't stop packs)");
        var mm, Tm, fm, hm
      }))
    }

    function lm(mm, Tm, fm) {
      return rm(mm, null !== Tm ? {
        status: "failed",
        messageKey: Tm
      } : {
        status: "ok",
        couldntRun: null !== fm && void 0 !== fm ? fm : void 0
      }, (() => null === Sm ? "pick not seen" : cm(Sm)), (() => function(mm, Tm, fm, hm) {
        var Am, am, xm, wm;
        return null === mm ? "pick not seen" : "off_after_loss" === mm.reason ? `off after a loss, ${"pack"===mm.source?Jm(fm,hm):`from ${null!==(wm=mm.source)&&void 0!==wm?wm:"none"}`}` : "not_requested" === mm.reason ? `not requested, from ${null!==(xm=mm.source)&&void 0!==xm?xm:"none"} (setting ${Tm.setting?"on":"off"})` : `${null!==(Am=mm.reason)&&void 0!==Am?Am:"none"}, from ${null!==(am=mm.source)&&void 0!==am?am:"none"}`
      }(Sm, Gm(), "ios" === (0, Dm.getOperatingSystem)(), Pm())))
    }

    function Mm(mm, Tm, fm) {
      const hm = km.loss();
      if ("none" === hm) return;
      if ("cap" === hm) return void Nm("further losses not logged");
      const Am = Gm();
      Nm(function(mm, Tm, fm, hm) {
        return `loss (${mm}): ${Tm}${null===fm?"":` ${Im(fm,Vm)}`}; ${hm}`
      }(mm, Tm, fm, `stored ${Xm((0,om.n)().now)}; holds ${Am.lossHolds?"yes":"no"}, stops packs ${Am.lossStopsPack?"yes":"no"}`))
    }
  },
  34209: (mm, Tm, fm) => {
    function hm(mm, Tm) {
      return mm && !Tm
    }
    fm.d(Tm, {
      c: () => hm
    })
  }
};
Object.freeze(modules);
for (const mm in modules) Object.freeze(modules[mm]);