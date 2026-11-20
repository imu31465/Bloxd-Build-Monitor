export const id = 66;
export const ids = [66];
export const modules = {
  36478: (qq, Eq, gq) => {
    gq.r(Eq), gq.d(Eq, {
      noteJsEngine: () => Gq,
      noteJsJoin: () => kq,
      noteWasmJoin: () => Rq,
      noteWasmPick: () => Lq,
      noteWebGpuLoss: () => Uq,
      startWebGpuLossDebug: () => pq
    });
    var Yq = gq(296),
      lq = gq(24),
      Oq = gq(2686),
      mq = gq(3324),
      xq = gq(611),
      Aq = gq(278),
      cq = gq(96),
      uq = gq(106),
      Bq = gq(2691),
      Wq = gq(38),
      Nq = gq(118),
      aq = gq(275),
      Vq = gq(2733),
      dq = gq(307),
      jq = gq(9185);
    const Hq = 40,
      oq = 160;

    function Pq(qq, Eq) {
      return `"${(qq.length>Eq?`${qq.slice(0,Eq)}...`:qq).replace(/[^ -~]|["\\]/g,"?")}"`
    }

    function Qq(qq) {
      return qq ? "yes" : "no"
    }

    function yq(qq) {
      var Eq;
      const gq = qq.storedRenderer;
      return [`loss holds ${Qq(qq.lossHolds)}`, `stops packs ${Qq(qq.lossStopsPack)}`, `any loss ${Qq(qq.anyLoss)}`, `old intel ${Qq(qq.oldIntelDriver)}`, `default off for packs ${Qq(qq.defaultOffForPacks)}`, `default off reason ${null!==(Eq=qq.defaultOffReason)&&void 0!==Eq?Eq:"none"}`, `setting ${qq.setting?"on":"off"} (stored ${null===qq.settingStored?"unset":qq.settingStored?"on":"off"})`, `renderer url ${null===qq.urlRenderer?"none":Pq(qq.urlRenderer,12)}, stored ${null===gq||void 0===gq?"none":Pq(String(gq),12)}`, `hidden-loss arm ${qq.hiddenLossArm}`].join(", ")
    }

    function tq(qq) {
      if (null === qq) return "no renderer settled";
      const {
        requested: Eq,
        choice: gq,
        source: Yq,
        fallbackReason: lq
      } = qq;
      return `renderer requested ${Eq}, runs ${gq}, from ${Yq}${null===lq?"":`, fell back: ${Pq(lq,80)}`}`
    }

    function rq(qq, Eq) {
      return qq ? `stopping packs: iOS, ${null!==Eq&&void 0!==Eq?Eq:1} losses in a row within a day` : "stopping packs"
    }

    function vq(qq) {
      var Eq, gq, Yq;
      return `pick (wasm): backend ${null!==(Eq=qq.backend)&&void 0!==Eq?Eq:"none"}, webgpu fallback ${null!==(gq=qq.reason)&&void 0!==gq?gq:"none"}, from ${null!==(Yq=qq.source)&&void 0!==Yq?Yq:"none"}, storage pull breaks ${Qq(qq.storagePullBreaks)}; packs run ${Qq("webgpu"===qq.backend&&!qq.storagePullBreaks)}, else ${qq.noWebGpu}`
    }

    function hq(qq, Eq, gq) {
      return `pack ${null===qq?"(name not read)":Pq(qq,Hq)} ${Eq}${null===gq?"":`, ${gq} variants`}`
    }
    const nq = "shaderPack:failedWebGpuOff",
      bq = new class {
        constructor() {
          this.joins = 0, this.losses = 0, this.noPackSaid = !1
        }
        join() {
          return this.joins++, this.joins <= 5 ? "detail" : this.joins <= 30 ? "outcome" : 31 === this.joins ? "cap" : "none"
        }
        noPack() {
          const qq = !this.noPackSaid;
          return this.noPackSaid = !0, qq
        }
        loss() {
          return this.losses++, this.losses <= 10 ? "line" : 11 === this.losses ? "cap" : "none"
        }
      };
    let iq = null,
      Zq = null,
      fq = 0;

    function Mq(qq) {
      (0, Vq.m)("webgpuloss", qq)
    }

    function Tq() {
      return {
        lossHolds: (0, aq.w)(),
        lossStopsPack: (0, aq.A)(),
        anyLoss: (0, aq.f)(),
        oldIntelDriver: !0 === Wq.i.getItem(Nq.I),
        defaultOffForPacks: lq.b.isWebGpuDefaultOff(),
        defaultOffReason: lq.b.webGpuDefaultOffReason(),
        settingStored: Wq.i.getItem(Yq.dc),
        setting: lq.b.get("clientEscMenuOptions").useWebGpu,
        urlRenderer: uq.currentUrl.getSearchParam(Bq.e),
        storedRenderer: Wq.i.getItem(Bq.f),
        hiddenLossArm: Aq.c.webgpu_hidden_loss_v1
      }
    }

    function zq(qq) {
      return function(qq, Eq, gq) {
        if (null === qq || void 0 === qq) return "none";
        if ("object" !== typeof qq) return `unreadable (${typeof qq})`;
        const Yq = qq,
          lq = "number" === typeof Yq.at ? Yq.at : null;
        return ["browser " + (Eq ? "this one" : "another"), null === lq ? "no time" : `set ${((gq-lq)/dq.m).toFixed(1)} h ago`, `losses ${"number"===typeof Yq.losses?Yq.losses:"unset (1)"}${null!==lq&&gq-lq<dq.k?", the last within a day":""}`, `hidden-only ${"number"===typeof Yq.hiddenLosses?Yq.hiddenLosses:"no"}`, `first page ${"hidden"===Yq.firstPage||"visible"===Yq.firstPage?Yq.firstPage:"unset (visible)"}`].join(", ")
      }(qq, function(qq) {
        try {
          return "object" === typeof qq && null !== qq && qq.browser === (0, aq.c)()
        } catch {
          return !1
        }
      }(qq), Date.now())
    }

    function Sq() {
      const qq = (0, aq.l)().now;
      return "number" === typeof(null === qq || void 0 === qq ? void 0 : qq.losses) ? qq.losses : null
    }

    function pq() {
      const {
        atLoad: qq,
        now: Eq,
        unreported: gq
      } = (0, aq.l)(), Yq = JSON.stringify(qq) === JSON.stringify(Eq) ? "jN" : `now ${zq(Eq)}`;
      Mq(`load (${xq.v?"wasm":"js"}, os ${(0,cq.getOperatingSystem)()}): stored loss ${zq(qq)}; ${Yq}; unreported ${function(qq){if(null===qq||void 0===qq||"object"!==typeof qq)return"none";const{hidden:Eq,visible:gq}=qq;return`
        hidden $ {
          "number" === typeof Eq ? Eq : 0
        }, visible $ {
          "number" === typeof gq ? gq : 0
        }
        `}(gq)}; webgpu_loss_page ${aq.z}`), Mq(`load: ${yq(Tq())}; pack expected ${(0,mq.d)(cq.featureFlags.settings.canUseShaderPacks)?"yes":"no"}; WebGPU API ${"gpu"in navigator?"yes":"no"}`)
    }

    function Gq(qq) {
      iq = qq, Mq(function(qq, Eq, gq) {
        const Yq = qq.setting ? "the setting is on" : (0, jq.b)(qq.packActive, qq.defaultOffForPacks) ? "the pack forces it" : qq.packActive ? "the pack can't force it: default off for packs" : "no active pack, setting off";
        return `engine (js): useWebGpu ${Qq(qq.useWebGpu)} (${Yq}); ${tq(Eq)}; webgpu fallback ${null!==gq&&void 0!==gq?gq:"unset"}`
      }(qq, (0, Oq.k)(), (0, cq.getWebGpuFallbackReason)()))
    }

    function Lq(qq) {
      Zq = qq, Mq(vq(qq))
    }
    async function Jq(qq, Eq, Yq, lq) {
      const Oq = ++fq,
        mq = await async function(qq) {
          var Eq, Yq;
          const [{
            shaderPackPage: lq,
            harnessShaderPackMode: Oq
          }, {
            getShaderPackPolicy: mq
          }, {
            packRunsIn: xq
          }] = await Promise.all([gq.e(130).then((() => gq(39158))), gq.e(90).then((() => gq(40997))), gq.e(134).then((() => gq(41004)))]), Aq = await lq.load();
          if ("none" === Aq.status) return null;
          const cq = null !== (Eq = Oq()) && void 0 !== Eq ? Eq : mq(qq),
            uq = "active" === Aq.status ? Aq.pack.variants : Aq.variants,
            Bq = xq(uq, cq);
          return {
            text: `${"active"===Aq.status?hq(Aq.pack.name,"active",uq.length):hq(null,`blocked (${Aq.messageKey})`,null!==(Yq=null===uq||void 0===uq?void 0:uq.length)&&void 0!==Yq?Yq:null)}; game policy ${cq}, runs in it ${Bq?"yes":"no"}`,
            runs: Bq
          }
        }(qq);
      if (null === mq) return void(bq.noPack() && Mq(`join ${Oq}: no shader pack on this page (further joins without one not logged)`));
      const xq = bq.join();
      if ("none" === xq) return;
      if ("cap" === xq) return void Mq(`join ${Oq}: further joins not logged`);
      const Aq = function(qq) {
          switch (qq.status) {
            case "ok":
              return void 0 === qq.couldntRun ? "joined" : `joined without the pack: ${qq.couldntRun}`;
            case "lE":
              return "lE";
            case "failed":
              return `failed: ${qq.messageKey}`
          }
        }(Eq),
        cq = ("ok" === Eq.status ? Eq.couldntRun : "failed" === Eq.status ? Eq.messageKey : void 0) === nq ? `; cause: ${lq()}` : "";
      "outcome" !== xq ? (Mq(`join ${Oq}: ${mq.text}`), mq.runs && (Mq(`join ${Oq}: needs WebGPU; ${Yq()}`), Mq(`join ${Oq}: ${yq(Tq())}`)), Mq(`join ${Oq}: ${Aq}${cq}`)) : Mq(`join ${Oq}: ${Aq}${cq}`)
    }

    function kq(qq, Eq, gq) {
      var Yq;
      const lq = null !== (Yq = null === Eq || void 0 === Eq ? void 0 : Eq.isRunning()) && void 0 !== Yq && Yq;
      return Jq(qq, gq, (() => `Lite runtime ${null===Eq?"no":"yes, running "+(lq?"yes":"no")}; ${tq((0,Oq.k)())}`), (() => {
        return qq = iq, Eq = Tq(), gq = "ios" === (0, cq.getOperatingSystem)(), Yq = Sq(), null === qq ? "engine choice not seen" : qq.packActive ? (0, jq.b)(qq.packActive, qq.defaultOffForPacks) ? "the pack forced WebGPU, yet nothing asked for a renderer: unexpected" : Eq.lossStopsPack ? `a loss ${rq(gq,Yq)}` : "old Intel driver verdict, worded off as a loss is stored" : "no active pack when the engine was built, so nothing forced WebGPU; worded off as a loss is stored" + (Eq.lossStopsPack ? "" : " (one that doesn't stop packs)");
        var qq, Eq, gq, Yq
      }))
    }

    function Rq(qq, Eq, gq) {
      return Jq(qq, null !== Eq ? {
        status: "failed",
        messageKey: Eq
      } : {
        status: "ok",
        couldntRun: null !== gq && void 0 !== gq ? gq : void 0
      }, (() => null === Zq ? "pick not seen" : vq(Zq)), (() => function(qq, Eq, gq, Yq) {
        var lq, Oq, mq, xq;
        return null === qq ? "pick not seen" : "off_after_loss" === qq.reason ? `off after a loss, ${"pack"===qq.source?rq(gq,Yq):`from ${null!==(xq=qq.source)&&void 0!==xq?xq:"none"}`}` : "not_requested" === qq.reason ? `not requested, from ${null!==(mq=qq.source)&&void 0!==mq?mq:"none"} (setting ${Eq.setting?"on":"off"})` : `${null!==(lq=qq.reason)&&void 0!==lq?lq:"none"}, from ${null!==(Oq=qq.source)&&void 0!==Oq?Oq:"none"}`
      }(Zq, Tq(), "ios" === (0, cq.getOperatingSystem)(), Sq())))
    }

    function Uq(qq, Eq, gq) {
      const Yq = bq.loss();
      if ("none" === Yq) return;
      if ("cap" === Yq) return void Mq("further losses not logged");
      const lq = Tq();
      Mq(function(qq, Eq, gq, Yq) {
        return `loss (${qq}): ${Eq}${null===gq?"":` ${Pq(gq,oq)}`}; ${Yq}`
      }(qq, Eq, gq, `stored ${zq((0,aq.l)().now)}; holds ${lq.lossHolds?"yes":"no"}, stops packs ${lq.lossStopsPack?"yes":"no"}`))
    }
  },
  9185: (qq, Eq, gq) => {
    function Yq(qq, Eq) {
      return qq && !Eq
    }
    gq.d(Eq, {
      b: () => Yq
    })
  }
};
Object.freeze(modules);
for (const qq in modules) Object.freeze(modules[qq]);