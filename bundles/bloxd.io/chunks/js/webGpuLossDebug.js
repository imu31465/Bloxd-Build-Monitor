export const id = 69;
export const ids = [69];
export const modules = {
  36662: (tt, et, Vt) => {
    Vt.r(et), Vt.d(et, {
      noteJsEngine: () => ot,
      noteJsJoin: () => At,
      noteWasmJoin: () => it,
      noteWasmPick: () => rt,
      noteWebGpuLoss: () => Yt,
      startWebGpuLossDebug: () => zt
    });
    var Ot = Vt(377),
      qt = Vt(26),
      Dt = Vt(2865),
      mt = Vt(3524),
      dt = Vt(725),
      jt = Vt(106),
      Ht = Vt(121),
      Xt = Vt(2872),
      Qt = Vt(39),
      lt = Vt(133),
      Et = Vt(366),
      ft = Vt(720),
      wt = Vt(2902),
      yt = Vt(391),
      Nt = Vt(388),
      Mt = Vt(34305);
    const bt = 40,
      Jt = 160;

    function Ct(tt, et) {
      return `"${(tt.length>et?`${tt.slice(0,et)}...`:tt).replace(/[^ -~]|["\\]/g,"?")}"`
    }

    function ut(tt) {
      return tt ? "yes" : "no"
    }

    function Kt(tt) {
      var et;
      const Vt = tt.storedRenderer;
      return [`loss holds ${ut(tt.lossHolds)}`, `stops packs ${ut(tt.lossStopsPack)}`, `any loss ${ut(tt.anyLoss)}`, `old intel ${ut(tt.oldIntelDriver)}`, `default off for packs ${ut(tt.defaultOffForPacks)}`, `default off reason ${null!==(et=tt.defaultOffReason)&&void 0!==et?et:"none"}`, `setting ${tt.setting?"on":"off"} (stored ${null===tt.settingStored?"unset":tt.settingStored?"on":"off"})`, `renderer url ${null===tt.urlRenderer?"none":Ct(tt.urlRenderer,12)}, stored ${null===Vt||void 0===Vt?"none":Ct(String(Vt),12)}`].join(", ")
    }

    function ht(tt) {
      if (null === tt) return "no renderer settled";
      const {
        requested: et,
        choice: Vt,
        source: Ot,
        fallbackReason: qt
      } = tt;
      return `renderer requested ${et}, runs ${Vt}, from ${Ot}${null===qt?"":`, fell back: ${Ct(qt,80)}`}`
    }

    function vt(tt, et) {
      return tt ? `stopping packs: iOS, ${null!==et&&void 0!==et?et:1} losses in a row within a day` : "stopping packs"
    }

    function Wt(tt) {
      var et, Vt, Ot;
      return `pick (wasm): backend ${null!==(et=tt.backend)&&void 0!==et?et:"none"}, webgpu fallback ${null!==(Vt=tt.reason)&&void 0!==Vt?Vt:"none"}, from ${null!==(Ot=tt.source)&&void 0!==Ot?Ot:"none"}, storage pull breaks ${ut(tt.storagePullBreaks)}; packs run ${ut("webgpu"===tt.backend)}, else ${tt.noWebGpu}`
    }

    function St(tt, et, Vt) {
      return `pack ${null===tt?"(name not read)":Ct(tt,bt)} ${et}${null===Vt?"":`, ${Vt} variants`}`
    }
    const ct = "shaderPack:failedWebGpuOff",
      Rt = new class {
        constructor() {
          this.joins = 0, this.losses = 0, this.noPackSaid = !1
        }
        join() {
          return this.joins++, this.joins <= 5 ? "detail" : this.joins <= 30 ? "outcome" : 31 === this.joins ? "cap" : "none"
        }
        noPack() {
          const tt = !this.noPackSaid;
          return this.noPackSaid = !0, tt
        }
        loss() {
          return this.losses++, this.losses <= 10 ? "line" : 11 === this.losses ? "cap" : "none"
        }
      };
    let It = null,
      Pt = null,
      Zt = 0;

    function Lt(tt) {
      (0, wt.n)("webgpuloss", tt)
    }

    function Ft() {
      return {
        lossHolds: (0, Et.z)(),
        lossStopsPack: (0, Et.F)(),
        anyLoss: (0, Et.g)(),
        oldIntelDriver: !0 === Qt.e.getItem(lt.F),
        defaultOffForPacks: qt.b.isWebGpuDefaultOff(),
        defaultOffReason: qt.b.webGpuDefaultOffReason(),
        settingStored: Qt.e.getItem(Ot.Rb),
        setting: qt.b.get("clientEscMenuOptions").useWebGpu,
        urlRenderer: Ht.currentUrl.getSearchParam(Xt.c),
        storedRenderer: Qt.e.getItem(Xt.e)
      }
    }

    function kt(tt) {
      return function(tt, et, Vt) {
        if (null === tt || void 0 === tt) return "none";
        if ("object" !== typeof tt) return `unreadable (${typeof tt})`;
        const Ot = tt,
          qt = "number" === typeof Ot.at ? Ot.at : null,
          Dt = ["browser " + (et ? "this one" : "another"), null === qt ? "no time" : `set ${((Vt-qt)/yt.o).toFixed(1)} h ago`, `losses ${"number"===typeof Ot.losses?Ot.losses:"unset (1)"}${null!==qt&&Vt-qt<yt.l?", the last within a day":""}`, `first page ${"hidden"===Ot.firstPage||"visible"===Ot.firstPage?Ot.firstPage:"unset (visible)"}`, `hold step ${"number"===typeof Ot.holdStep?Ot.holdStep:"unset (1)"}`];
        if (void 0 !== Ot.reason || void 0 !== Ot.message) {
          const tt = "string" === typeof Ot.reason ? Ct(Ot.reason, Nt.d) : "no reason";
          Dt.push(`cause ${tt} ${!0===Ot.causeSent?"reported":"unreported"}`)
        }
        return Dt.join(", ")
      }(tt, function(tt) {
        try {
          return "object" === typeof tt && null !== tt && tt.browser === (0, Et.f)()
        } catch {
          return !1
        }
      }(tt), Date.now())
    }

    function Gt() {
      const tt = (0, Et.p)().now;
      return "number" === typeof(null === tt || void 0 === tt ? void 0 : tt.losses) ? tt.losses : null
    }

    function zt() {
      const {
        atLoad: tt,
        now: et,
        unreported: Vt
      } = (0, Et.p)(), Ot = JSON.stringify(tt) === JSON.stringify(et) ? "hE" : `now ${kt(et)}`;
      Lt(`load (${dt.K?"wasm":"js"}, os ${(0,jt.getOperatingSystem)()}): stored loss ${kt(tt)}; ${Ot}; cause kept apart ${function(tt,et){if(null===tt||void 0===tt)return"none";const{reason:Vt,at:Ot}="object"===typeof tt?tt:{},qt="number"===typeof Ot?`
        set $ {
          ((et - Ot) / yt.o).toFixed(1)
        }
        h ago`:"no time";return`
        $ {
          "string" === typeof Vt ? Ct(Vt, Nt.d) : "no reason"
        }, $ {
          qt
        }
        `}((0,ft.j)(),Date.now())}; unreported ${function(tt,et){if(null===tt||void 0===tt||"object"!==typeof tt)return"none";const Vt=tt;return et.map((tt=>`${tt} ${"number"===typeof Vt[tt]?Vt[tt]:0}`)).join(", ")}(Vt,Et.c)}; webgpu_loss_page ${Et.A}`), Lt(`load: ${Kt(Ft())}; pack expected ${(0,mt.g)(jt.featureFlags.settings.canUseShaderPacks)?"yes":"no"}; WebGPU API ${"gpu"in navigator?"yes":"no"}`)
    }

    function ot(tt) {
      It = tt, Lt(function(tt, et, Vt) {
        const Ot = tt.setting ? "the setting is on" : (0, Mt.e)(tt.packActive, tt.defaultOffForPacks) ? "the pack forces it" : tt.packActive ? "the pack can't force it: default off for packs" : "no active pack, setting off";
        return `engine (js): useWebGpu ${ut(tt.useWebGpu)} (${Ot}); ${ht(et)}; webgpu fallback ${null!==Vt&&void 0!==Vt?Vt:"unset"}`
      }(tt, (0, Dt.k)(), (0, jt.getWebGpuFallbackReason)()))
    }

    function rt(tt) {
      Pt = tt, Lt(Wt(tt))
    }
    async function Ut(tt, et, Ot, qt) {
      const Dt = ++Zt,
        mt = await async function(tt) {
          var et, Ot;
          const [{
            shaderPackPage: qt,
            harnessShaderPackMode: Dt
          }, {
            getShaderPackPolicy: mt
          }, {
            packRunsIn: dt
          }] = await Promise.all([Vt.e(117).then((() => Vt(39419))), Vt.e(93).then((() => Vt(41494))), Vt.e(141).then((() => Vt(41503)))]), jt = await qt.load();
          if ("none" === jt.status) return null;
          const Ht = null !== (et = Dt()) && void 0 !== et ? et : mt(tt),
            Xt = "active" === jt.status ? jt.pack.variants : jt.variants,
            Qt = dt(Xt, Ht);
          return {
            text: `${"active"===jt.status?St(jt.pack.name,"active",Xt.length):St(null,`blocked (${jt.messageKey})`,null!==(Ot=null===Xt||void 0===Xt?void 0:Xt.length)&&void 0!==Ot?Ot:null)}; game policy ${Ht}, runs in it ${Qt?"yes":"no"}`,
            runs: Qt
          }
        }(tt);
      if (null === mt) return void(Rt.noPack() && Lt(`join ${Dt}: no shader pack on this page (further joins without one not logged)`));
      const dt = Rt.join();
      if ("none" === dt) return;
      if ("cap" === dt) return void Lt(`join ${Dt}: further joins not logged`);
      const jt = function(tt) {
          switch (tt.status) {
            case "ok":
              return void 0 === tt.couldntRun ? "joined" : `joined without the pack: ${tt.couldntRun}`;
            case "nV":
              return "nV";
            case "failed":
              return `failed: ${tt.messageKey}`
          }
        }(et),
        Ht = ("ok" === et.status ? et.couldntRun : "failed" === et.status ? et.messageKey : void 0) === ct ? `; cause: ${qt()}` : "";
      "outcome" !== dt ? (Lt(`join ${Dt}: ${mt.text}`), mt.runs && (Lt(`join ${Dt}: needs WebGPU; ${Ot()}`), Lt(`join ${Dt}: ${Kt(Ft())}`)), Lt(`join ${Dt}: ${jt}${Ht}`)) : Lt(`join ${Dt}: ${jt}${Ht}`)
    }

    function At(tt, et, Vt) {
      var Ot;
      const qt = null !== (Ot = null === et || void 0 === et ? void 0 : et.isRunning()) && void 0 !== Ot && Ot;
      return Ut(tt, Vt, (() => `Lite runtime ${null===et?"no":"yes, running "+(qt?"yes":"no")}; ${ht((0,Dt.k)())}`), (() => {
        return tt = It, et = Ft(), Vt = "ios" === (0, jt.getOperatingSystem)(), Ot = Gt(), null === tt ? "engine choice not seen" : tt.packActive ? (0, Mt.e)(tt.packActive, tt.defaultOffForPacks) ? "the pack forced WebGPU, yet nothing asked for a renderer: unexpected" : et.lossStopsPack ? `a loss ${vt(Vt,Ot)}` : "old Intel driver verdict, worded off as a loss is stored" : "no active pack when the engine was built, so nothing forced WebGPU; worded off as a loss is stored" + (et.lossStopsPack ? "" : " (one that doesn't stop packs)");
        var tt, et, Vt, Ot
      }))
    }

    function it(tt, et, Vt) {
      return Ut(tt, null !== et ? {
        status: "failed",
        messageKey: et
      } : {
        status: "ok",
        couldntRun: null !== Vt && void 0 !== Vt ? Vt : void 0
      }, (() => null === Pt ? "pick not seen" : Wt(Pt)), (() => function(tt, et, Vt, Ot) {
        var qt, Dt, mt, dt;
        return null === tt ? "pick not seen" : "off_after_loss" === tt.reason ? `off after a loss, ${"pack"===tt.source?vt(Vt,Ot):`from ${null!==(dt=tt.source)&&void 0!==dt?dt:"none"}`}` : "not_requested" === tt.reason ? `not requested, from ${null!==(mt=tt.source)&&void 0!==mt?mt:"none"} (setting ${et.setting?"on":"off"})` : `${null!==(qt=tt.reason)&&void 0!==qt?qt:"none"}, from ${null!==(Dt=tt.source)&&void 0!==Dt?Dt:"none"}`
      }(Pt, Ft(), "ios" === (0, jt.getOperatingSystem)(), Gt())))
    }

    function Yt(tt, et, Vt) {
      const Ot = Rt.loss();
      if ("none" === Ot) return;
      if ("cap" === Ot) return void Lt("further losses not logged");
      const qt = Ft();
      Lt(function(tt, et, Vt, Ot) {
        return `loss (${tt}): ${et}${null===Vt?"":` ${Ct(Vt,Jt)}`}; ${Ot}`
      }(tt, et, Vt, `stored ${kt((0,Et.p)().now)}; holds ${qt.lossHolds?"yes":"no"}, stops packs ${qt.lossStopsPack?"yes":"no"}`))
    }
  },
  34305: (tt, et, Vt) => {
    function Ot(tt, et) {
      return tt && !et
    }
    Vt.d(et, {
      e: () => Ot
    })
  }
};
Object.freeze(modules);
for (const tt in modules) Object.freeze(modules[tt]);