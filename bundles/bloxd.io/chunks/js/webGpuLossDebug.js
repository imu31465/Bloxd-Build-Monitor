export const id = 66;
export const ids = [66];
export const modules = {
  35960: (vv, zv, Pv) => {
    Pv.r(zv), Pv.d(zv, {
      noteJsEngine: () => Zv,
      noteJsJoin: () => Hv,
      noteWasmJoin: () => Mv,
      noteWasmPick: () => Av,
      noteWebGpuLoss: () => yv,
      startWebGpuLossDebug: () => Qv
    });
    var hv = Pv(302),
      Sv = Pv(22),
      ev = Pv(2618),
      gv = Pv(3201),
      pv = Pv(635),
      dv = Pv(284),
      Nv = Pv(73),
      lv = Pv(81),
      Tv = Pv(2623),
      Wv = Pv(39),
      wv = Pv(90),
      av = Pv(278),
      sv = Pv(2682),
      Cv = Pv(312),
      iv = Pv(8904);
    const cv = 40,
      Gv = 160;

    function mv(vv, zv) {
      return `"${(vv.length>zv?`${vv.slice(0,zv)}...`:vv).replace(/[^ -~]|["\\]/g,"?")}"`
    }

    function jv(vv) {
      return vv ? "yes" : "no"
    }

    function fv(vv) {
      var zv;
      const Pv = vv.storedRenderer;
      return [`loss holds ${jv(vv.lossHolds)}`, `stops packs ${jv(vv.lossStopsPack)}`, `any loss ${jv(vv.anyLoss)}`, `old intel ${jv(vv.oldIntelDriver)}`, `default off for packs ${jv(vv.defaultOffForPacks)}`, `default off reason ${null!==(zv=vv.defaultOffReason)&&void 0!==zv?zv:"none"}`, `setting ${vv.setting?"on":"off"} (stored ${null===vv.settingStored?"unset":vv.settingStored?"on":"off"})`, `renderer url ${null===vv.urlRenderer?"none":mv(vv.urlRenderer,12)}, stored ${null===Pv||void 0===Pv?"none":mv(String(Pv),12)}`, `hidden-loss arm ${vv.hiddenLossArm}`].join(", ")
    }

    function Fv(vv) {
      if (null === vv) return "no renderer settled";
      const {
        requested: zv,
        choice: Pv,
        source: hv,
        fallbackReason: Sv
      } = vv;
      return `renderer requested ${zv}, runs ${Pv}, from ${hv}${null===Sv?"":`, fell back: ${mv(Sv,80)}`}`
    }

    function Yv(vv, zv) {
      return vv ? `stopping packs: iOS, ${null!==zv&&void 0!==zv?zv:1} losses in a row within a day` : "stopping packs"
    }

    function nv(vv) {
      var zv, Pv, hv;
      return `pick (wasm): backend ${null!==(zv=vv.backend)&&void 0!==zv?zv:"none"}, webgpu fallback ${null!==(Pv=vv.reason)&&void 0!==Pv?Pv:"none"}, from ${null!==(hv=vv.source)&&void 0!==hv?hv:"none"}, storage pull breaks ${jv(vv.storagePullBreaks)}; packs run ${jv("webgpu"===vv.backend&&!vv.storagePullBreaks)}, else ${vv.noWebGpu}`
    }

    function Ov(vv, zv, Pv) {
      return `pack ${null===vv?"(name not read)":mv(vv,cv)} ${zv}${null===Pv?"":`, ${Pv} variants`}`
    }
    const Dv = "shaderPack:failedWebGpuOff",
      Kv = new class {
        constructor() {
          this.joins = 0, this.losses = 0, this.noPackSaid = !1
        }
        join() {
          return this.joins++, this.joins <= 5 ? "detail" : this.joins <= 30 ? "outcome" : 31 === this.joins ? "cap" : "none"
        }
        noPack() {
          const vv = !this.noPackSaid;
          return this.noPackSaid = !0, vv
        }
        loss() {
          return this.losses++, this.losses <= 10 ? "line" : 11 === this.losses ? "cap" : "none"
        }
      };
    let Vv = null,
      Uv = null,
      Rv = 0;

    function xv(vv) {
      (0, sv.i)("webgpuloss", vv)
    }

    function tv() {
      return {
        lossHolds: (0, av.w)(),
        lossStopsPack: (0, av.C)(),
        anyLoss: (0, av.g)(),
        oldIntelDriver: !0 === Wv.h.getItem(wv.A),
        defaultOffForPacks: Sv.c.isWebGpuDefaultOff(),
        defaultOffReason: Sv.c.webGpuDefaultOffReason(),
        settingStored: Wv.h.getItem(hv.bc),
        setting: Sv.c.get("clientEscMenuOptions").useWebGpu,
        urlRenderer: lv.currentUrl.getSearchParam(Tv.c),
        storedRenderer: Wv.h.getItem(Tv.g),
        hiddenLossArm: dv.d.webgpu_hidden_loss_v1
      }
    }

    function qv(vv) {
      return function(vv, zv, Pv) {
        if (null === vv || void 0 === vv) return "none";
        if ("object" !== typeof vv) return `unreadable (${typeof vv})`;
        const hv = vv,
          Sv = "number" === typeof hv.at ? hv.at : null;
        return ["browser " + (zv ? "this one" : "another"), null === Sv ? "no time" : `set ${((Pv-Sv)/Cv.m).toFixed(1)} h ago`, `losses ${"number"===typeof hv.losses?hv.losses:"unset (1)"}${null!==Sv&&Pv-Sv<Cv.k?", the last within a day":""}`, `hidden-only ${"number"===typeof hv.hiddenLosses?hv.hiddenLosses:"no"}`, `first page ${"hidden"===hv.firstPage||"visible"===hv.firstPage?hv.firstPage:"unset (visible)"}`].join(", ")
      }(vv, function(vv) {
        try {
          return "object" === typeof vv && null !== vv && vv.browser === (0, av.d)()
        } catch {
          return !1
        }
      }(vv), Date.now())
    }

    function Iv() {
      const vv = (0, av.l)().now;
      return "number" === typeof(null === vv || void 0 === vv ? void 0 : vv.losses) ? vv.losses : null
    }

    function Qv() {
      const {
        atLoad: vv,
        now: zv,
        unreported: Pv
      } = (0, av.l)(), hv = JSON.stringify(vv) === JSON.stringify(zv) ? "Yw" : `now ${qv(zv)}`;
      xv(`load (${pv.r?"wasm":"js"}, os ${(0,Nv.getOperatingSystem)()}): stored loss ${qv(vv)}; ${hv}; unreported ${function(vv){if(null===vv||void 0===vv||"object"!==typeof vv)return"none";const{hidden:zv,visible:Pv}=vv;return`
        hidden $ {
          "number" === typeof zv ? zv : 0
        }, visible $ {
          "number" === typeof Pv ? Pv : 0
        }
        `}(Pv)}; webgpu_loss_page ${av.z}`), xv(`load: ${fv(tv())}; pack expected ${(0,gv.e)(Nv.featureFlags.settings.canUseShaderPacks)?"yes":"no"}; WebGPU API ${"gpu"in navigator?"yes":"no"}`)
    }

    function Zv(vv) {
      Vv = vv, xv(function(vv, zv, Pv) {
        const hv = vv.setting ? "the setting is on" : (0, iv.e)(vv.packActive, vv.defaultOffForPacks) ? "the pack forces it" : vv.packActive ? "the pack can't force it: default off for packs" : "no active pack, setting off";
        return `engine (js): useWebGpu ${jv(vv.useWebGpu)} (${hv}); ${Fv(zv)}; webgpu fallback ${null!==Pv&&void 0!==Pv?Pv:"unset"}`
      }(vv, (0, ev.g)(), (0, Nv.getWebGpuFallbackReason)()))
    }

    function Av(vv) {
      Uv = vv, xv(nv(vv))
    }
    async function Lv(vv, zv, hv, Sv) {
      const ev = ++Rv,
        gv = await async function(vv) {
          var zv, hv;
          const [{
            shaderPackPage: Sv,
            harnessShaderPackMode: ev
          }, {
            getShaderPackPolicy: gv
          }, {
            packRunsIn: pv
          }] = await Promise.all([Pv.e(129).then((() => Pv(38715))), Pv.e(90).then((() => Pv(40562))), Pv.e(133).then((() => Pv(40567)))]), dv = await Sv.load();
          if ("none" === dv.status) return null;
          const Nv = null !== (zv = ev()) && void 0 !== zv ? zv : gv(vv),
            lv = "active" === dv.status ? dv.pack.variants : dv.variants,
            Tv = pv(lv, Nv);
          return {
            text: `${"active"===dv.status?Ov(dv.pack.name,"active",lv.length):Ov(null,`blocked (${dv.messageKey})`,null!==(hv=null===lv||void 0===lv?void 0:lv.length)&&void 0!==hv?hv:null)}; game policy ${Nv}, runs in it ${Tv?"yes":"no"}`,
            runs: Tv
          }
        }(vv);
      if (null === gv) return void(Kv.noPack() && xv(`join ${ev}: no shader pack on this page (further joins without one not logged)`));
      const pv = Kv.join();
      if ("none" === pv) return;
      if ("cap" === pv) return void xv(`join ${ev}: further joins not logged`);
      const dv = function(vv) {
          switch (vv.status) {
            case "ok":
              return void 0 === vv.couldntRun ? "joined" : `joined without the pack: ${vv.couldntRun}`;
            case "ev":
              return "ev";
            case "failed":
              return `failed: ${vv.messageKey}`
          }
        }(zv),
        Nv = ("ok" === zv.status ? zv.couldntRun : "failed" === zv.status ? zv.messageKey : void 0) === Dv ? `; cause: ${Sv()}` : "";
      "outcome" !== pv ? (xv(`join ${ev}: ${gv.text}`), gv.runs && (xv(`join ${ev}: needs WebGPU; ${hv()}`), xv(`join ${ev}: ${fv(tv())}`)), xv(`join ${ev}: ${dv}${Nv}`)) : xv(`join ${ev}: ${dv}${Nv}`)
    }

    function Hv(vv, zv, Pv) {
      var hv;
      const Sv = null !== (hv = null === zv || void 0 === zv ? void 0 : zv.isRunning()) && void 0 !== hv && hv;
      return Lv(vv, Pv, (() => `Lite runtime ${null===zv?"no":"yes, running "+(Sv?"yes":"no")}; ${Fv((0,ev.g)())}`), (() => {
        return vv = Vv, zv = tv(), Pv = "ios" === (0, Nv.getOperatingSystem)(), hv = Iv(), null === vv ? "engine choice not seen" : vv.packActive ? (0, iv.e)(vv.packActive, vv.defaultOffForPacks) ? "the pack forced WebGPU, yet nothing asked for a renderer: unexpected" : zv.lossStopsPack ? `a loss ${Yv(Pv,hv)}` : "old Intel driver verdict, worded off as a loss is stored" : "no active pack when the engine was built, so nothing forced WebGPU; worded off as a loss is stored" + (zv.lossStopsPack ? "" : " (one that doesn't stop packs)");
        var vv, zv, Pv, hv
      }))
    }

    function Mv(vv, zv, Pv) {
      return Lv(vv, null !== zv ? {
        status: "failed",
        messageKey: zv
      } : {
        status: "ok",
        couldntRun: null !== Pv && void 0 !== Pv ? Pv : void 0
      }, (() => null === Uv ? "pick not seen" : nv(Uv)), (() => function(vv, zv, Pv, hv) {
        var Sv, ev, gv, pv;
        return null === vv ? "pick not seen" : "off_after_loss" === vv.reason ? `off after a loss, ${"pack"===vv.source?Yv(Pv,hv):`from ${null!==(pv=vv.source)&&void 0!==pv?pv:"none"}`}` : "not_requested" === vv.reason ? `not requested, from ${null!==(gv=vv.source)&&void 0!==gv?gv:"none"} (setting ${zv.setting?"on":"off"})` : `${null!==(Sv=vv.reason)&&void 0!==Sv?Sv:"none"}, from ${null!==(ev=vv.source)&&void 0!==ev?ev:"none"}`
      }(Uv, tv(), "ios" === (0, Nv.getOperatingSystem)(), Iv())))
    }

    function yv(vv, zv, Pv) {
      const hv = Kv.loss();
      if ("none" === hv) return;
      if ("cap" === hv) return void xv("further losses not logged");
      const Sv = tv();
      xv(function(vv, zv, Pv, hv) {
        return `loss (${vv}): ${zv}${null===Pv?"":` ${mv(Pv,Gv)}`}; ${hv}`
      }(vv, zv, Pv, `stored ${qv((0,av.l)().now)}; holds ${Sv.lossHolds?"yes":"no"}, stops packs ${Sv.lossStopsPack?"yes":"no"}`))
    }
  },
  8904: (vv, zv, Pv) => {
    function hv(vv, zv) {
      return vv && !zv
    }
    Pv.d(zv, {
      e: () => hv
    })
  }
};
Object.freeze(modules);
for (const vv in modules) Object.freeze(modules[vv]);