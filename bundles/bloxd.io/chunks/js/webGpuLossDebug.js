export const id = 66;
export const ids = [66];
export const modules = {
  36585: (dd, Jd, kd) => {
    kd.r(Jd), kd.d(Jd, {
      noteJsEngine: () => yd,
      noteJsJoin: () => Ed,
      noteWasmJoin: () => cd,
      noteWasmPick: () => Dd,
      noteWebGpuLoss: () => hd,
      startWebGpuLossDebug: () => Ud
    });
    var pd = kd(300),
      Nd = kd(22),
      Wd = kd(2646),
      Pd = kd(3282),
      Zd = kd(626),
      gd = kd(284),
      Cd = kd(95),
      Kd = kd(103),
      od = kd(2651),
      ld = kd(33),
      Qd = kd(111),
      Ld = kd(282),
      Od = kd(2704),
      ed = kd(313),
      Rd = kd(9151);
    const Id = 40,
      Gd = 160;

    function vd(dd, Jd) {
      return `"${(dd.length>Jd?`${dd.slice(0,Jd)}...`:dd).replace(/[^ -~]|["\\]/g,"?")}"`
    }

    function xd(dd) {
      return dd ? "yes" : "no"
    }

    function qd(dd) {
      var Jd;
      const kd = dd.storedRenderer;
      return [`loss holds ${xd(dd.lossHolds)}`, `stops packs ${xd(dd.lossStopsPack)}`, `any loss ${xd(dd.anyLoss)}`, `old intel ${xd(dd.oldIntelDriver)}`, `default off for packs ${xd(dd.defaultOffForPacks)}`, `default off reason ${null!==(Jd=dd.defaultOffReason)&&void 0!==Jd?Jd:"none"}`, `setting ${dd.setting?"on":"off"} (stored ${null===dd.settingStored?"unset":dd.settingStored?"on":"off"})`, `renderer url ${null===dd.urlRenderer?"none":vd(dd.urlRenderer,12)}, stored ${null===kd||void 0===kd?"none":vd(String(kd),12)}`, `hidden-loss arm ${dd.hiddenLossArm}`].join(", ")
    }

    function Bd(dd) {
      if (null === dd) return "no renderer settled";
      const {
        requested: Jd,
        choice: kd,
        source: pd,
        fallbackReason: Nd
      } = dd;
      return `renderer requested ${Jd}, runs ${kd}, from ${pd}${null===Nd?"":`, fell back: ${vd(Nd,80)}`}`
    }

    function sd(dd, Jd) {
      return dd ? `stopping packs: iOS, ${null!==Jd&&void 0!==Jd?Jd:1} losses in a row within a day` : "stopping packs"
    }

    function ad(dd) {
      var Jd, kd, pd;
      return `pick (wasm): backend ${null!==(Jd=dd.backend)&&void 0!==Jd?Jd:"none"}, webgpu fallback ${null!==(kd=dd.reason)&&void 0!==kd?kd:"none"}, from ${null!==(pd=dd.source)&&void 0!==pd?pd:"none"}, storage pull breaks ${xd(dd.storagePullBreaks)}; packs run ${xd("webgpu"===dd.backend&&!dd.storagePullBreaks)}, else ${dd.noWebGpu}`
    }

    function Md(dd, Jd, kd) {
      return `pack ${null===dd?"(name not read)":vd(dd,Id)} ${Jd}${null===kd?"":`, ${kd} variants`}`
    }
    const Fd = "shaderPack:failedWebGpuOff",
      Yd = new class {
        constructor() {
          this.joins = 0, this.losses = 0, this.noPackSaid = !1
        }
        join() {
          return this.joins++, this.joins <= 5 ? "detail" : this.joins <= 30 ? "outcome" : 31 === this.joins ? "cap" : "none"
        }
        noPack() {
          const dd = !this.noPackSaid;
          return this.noPackSaid = !0, dd
        }
        loss() {
          return this.losses++, this.losses <= 10 ? "line" : 11 === this.losses ? "cap" : "none"
        }
      };
    let md = null,
      bd = null,
      Sd = 0;

    function jd(dd) {
      (0, Od.h)("webgpuloss", dd)
    }

    function Xd() {
      return {
        lossHolds: (0, Ld.z)(),
        lossStopsPack: (0, Ld.G)(),
        anyLoss: (0, Ld.i)(),
        oldIntelDriver: !0 === ld.i.getItem(Qd.D),
        defaultOffForPacks: Nd.d.isWebGpuDefaultOff(),
        defaultOffReason: Nd.d.webGpuDefaultOffReason(),
        settingStored: ld.i.getItem(pd._b),
        setting: Nd.d.get("clientEscMenuOptions").useWebGpu,
        urlRenderer: Kd.currentUrl.getSearchParam(od.d),
        storedRenderer: ld.i.getItem(od.h),
        hiddenLossArm: gd.c.webgpu_hidden_loss_v1
      }
    }

    function fd(dd) {
      return function(dd, Jd, kd) {
        if (null === dd || void 0 === dd) return "none";
        if ("object" !== typeof dd) return `unreadable (${typeof dd})`;
        const pd = dd,
          Nd = "number" === typeof pd.at ? pd.at : null;
        return ["browser " + (Jd ? "this one" : "another"), null === Nd ? "no time" : `set ${((kd-Nd)/ed.j).toFixed(1)} h ago`, `losses ${"number"===typeof pd.losses?pd.losses:"unset (1)"}${null!==Nd&&kd-Nd<ed.i?", the last within a day":""}`, `hidden-only ${"number"===typeof pd.hiddenLosses?pd.hiddenLosses:"no"}`, `first page ${"hidden"===pd.firstPage||"visible"===pd.firstPage?pd.firstPage:"unset (visible)"}`].join(", ")
      }(dd, function(dd) {
        try {
          return "object" === typeof dd && null !== dd && dd.browser === (0, Ld.e)()
        } catch {
          return !1
        }
      }(dd), Date.now())
    }

    function nd() {
      const dd = (0, Ld.p)().now;
      return "number" === typeof(null === dd || void 0 === dd ? void 0 : dd.losses) ? dd.losses : null
    }

    function Ud() {
      const {
        atLoad: dd,
        now: Jd,
        unreported: kd
      } = (0, Ld.p)(), pd = JSON.stringify(dd) === JSON.stringify(Jd) ? "qQ" : `now ${fd(Jd)}`;
      jd(`load (${Zd.x?"wasm":"js"}, os ${(0,Cd.getOperatingSystem)()}): stored loss ${fd(dd)}; ${pd}; unreported ${function(dd){if(null===dd||void 0===dd||"object"!==typeof dd)return"none";const{hidden:Jd,visible:kd}=dd;return`
        hidden $ {
          "number" === typeof Jd ? Jd : 0
        }, visible $ {
          "number" === typeof kd ? kd : 0
        }
        `}(kd)}; webgpu_loss_page ${Ld.D}`), jd(`load: ${qd(Xd())}; pack expected ${(0,Pd.d)(Cd.featureFlags.settings.canUseShaderPacks)?"yes":"no"}; WebGPU API ${"gpu"in navigator?"yes":"no"}`)
    }

    function yd(dd) {
      md = dd, jd(function(dd, Jd, kd) {
        const pd = dd.setting ? "the setting is on" : (0, Rd.d)(dd.packActive, dd.defaultOffForPacks) ? "the pack forces it" : dd.packActive ? "the pack can't force it: default off for packs" : "no active pack, setting off";
        return `engine (js): useWebGpu ${xd(dd.useWebGpu)} (${pd}); ${Bd(Jd)}; webgpu fallback ${null!==kd&&void 0!==kd?kd:"unset"}`
      }(dd, (0, Wd.m)(), (0, Cd.getWebGpuFallbackReason)()))
    }

    function Dd(dd) {
      bd = dd, jd(ad(dd))
    }
    async function Td(dd, Jd, pd, Nd) {
      const Wd = ++Sd,
        Pd = await async function(dd) {
          var Jd, pd;
          const [{
            shaderPackPage: Nd,
            harnessShaderPackMode: Wd
          }, {
            getShaderPackPolicy: Pd
          }, {
            packRunsIn: Zd
          }] = await Promise.all([kd.e(130).then((() => kd(39347))), kd.e(90).then((() => kd(41237))), kd.e(134).then((() => kd(41242)))]), gd = await Nd.load();
          if ("none" === gd.status) return null;
          const Cd = null !== (Jd = Wd()) && void 0 !== Jd ? Jd : Pd(dd),
            Kd = "active" === gd.status ? gd.pack.variants : gd.variants,
            od = Zd(Kd, Cd);
          return {
            text: `${"active"===gd.status?Md(gd.pack.name,"active",Kd.length):Md(null,`blocked (${gd.messageKey})`,null!==(pd=null===Kd||void 0===Kd?void 0:Kd.length)&&void 0!==pd?pd:null)}; game policy ${Cd}, runs in it ${od?"yes":"no"}`,
            runs: od
          }
        }(dd);
      if (null === Pd) return void(Yd.noPack() && jd(`join ${Wd}: no shader pack on this page (further joins without one not logged)`));
      const Zd = Yd.join();
      if ("none" === Zd) return;
      if ("cap" === Zd) return void jd(`join ${Wd}: further joins not logged`);
      const gd = function(dd) {
          switch (dd.status) {
            case "ok":
              return void 0 === dd.couldntRun ? "joined" : `joined without the pack: ${dd.couldntRun}`;
            case "CJ":
              return "CJ";
            case "failed":
              return `failed: ${dd.messageKey}`
          }
        }(Jd),
        Cd = ("ok" === Jd.status ? Jd.couldntRun : "failed" === Jd.status ? Jd.messageKey : void 0) === Fd ? `; cause: ${Nd()}` : "";
      "outcome" !== Zd ? (jd(`join ${Wd}: ${Pd.text}`), Pd.runs && (jd(`join ${Wd}: needs WebGPU; ${pd()}`), jd(`join ${Wd}: ${qd(Xd())}`)), jd(`join ${Wd}: ${gd}${Cd}`)) : jd(`join ${Wd}: ${gd}${Cd}`)
    }

    function Ed(dd, Jd, kd) {
      var pd;
      const Nd = null !== (pd = null === Jd || void 0 === Jd ? void 0 : Jd.isRunning()) && void 0 !== pd && pd;
      return Td(dd, kd, (() => `Lite runtime ${null===Jd?"no":"yes, running "+(Nd?"yes":"no")}; ${Bd((0,Wd.m)())}`), (() => {
        return dd = md, Jd = Xd(), kd = "ios" === (0, Cd.getOperatingSystem)(), pd = nd(), null === dd ? "engine choice not seen" : dd.packActive ? (0, Rd.d)(dd.packActive, dd.defaultOffForPacks) ? "the pack forced WebGPU, yet nothing asked for a renderer: unexpected" : Jd.lossStopsPack ? `a loss ${sd(kd,pd)}` : "old Intel driver verdict, worded off as a loss is stored" : "no active pack when the engine was built, so nothing forced WebGPU; worded off as a loss is stored" + (Jd.lossStopsPack ? "" : " (one that doesn't stop packs)");
        var dd, Jd, kd, pd
      }))
    }

    function cd(dd, Jd, kd) {
      return Td(dd, null !== Jd ? {
        status: "failed",
        messageKey: Jd
      } : {
        status: "ok",
        couldntRun: null !== kd && void 0 !== kd ? kd : void 0
      }, (() => null === bd ? "pick not seen" : ad(bd)), (() => function(dd, Jd, kd, pd) {
        var Nd, Wd, Pd, Zd;
        return null === dd ? "pick not seen" : "off_after_loss" === dd.reason ? `off after a loss, ${"pack"===dd.source?sd(kd,pd):`from ${null!==(Zd=dd.source)&&void 0!==Zd?Zd:"none"}`}` : "not_requested" === dd.reason ? `not requested, from ${null!==(Pd=dd.source)&&void 0!==Pd?Pd:"none"} (setting ${Jd.setting?"on":"off"})` : `${null!==(Nd=dd.reason)&&void 0!==Nd?Nd:"none"}, from ${null!==(Wd=dd.source)&&void 0!==Wd?Wd:"none"}`
      }(bd, Xd(), "ios" === (0, Cd.getOperatingSystem)(), nd())))
    }

    function hd(dd, Jd, kd) {
      const pd = Yd.loss();
      if ("none" === pd) return;
      if ("cap" === pd) return void jd("further losses not logged");
      const Nd = Xd();
      jd(function(dd, Jd, kd, pd) {
        return `loss (${dd}): ${Jd}${null===kd?"":` ${vd(kd,Gd)}`}; ${pd}`
      }(dd, Jd, kd, `stored ${fd((0,Ld.p)().now)}; holds ${Nd.lossHolds?"yes":"no"}, stops packs ${Nd.lossStopsPack?"yes":"no"}`))
    }
  },
  9151: (dd, Jd, kd) => {
    function pd(dd, Jd) {
      return dd && !Jd
    }
    kd.d(Jd, {
      d: () => pd
    })
  }
};
Object.freeze(modules);
for (const dd in modules) Object.freeze(modules[dd]);