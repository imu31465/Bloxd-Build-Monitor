export const id = 81;
export const ids = [81];
export const modules = {
  37958: (rr, Sr, Qr) => {
    Qr.r(Sr), Qr.d(Sr, {
      noteJsEngine: () => Ar,
      noteJsJoin: () => wr,
      noteWasmJoin: () => cr,
      noteWasmPick: () => Vr,
      noteWebGpuLoss: () => Fr,
      startWebGpuLossDebug: () => kr
    });
    var Zr = Qr(360),
      Wr = Qr(26),
      ar = Qr(3884),
      jr = Qr(4690),
      Ir = Qr(712),
      fr = Qr(109),
      Er = Qr(120),
      pr = Qr(3886),
      xr = Qr(43),
      mr = Qr(127),
      Nr = Qr(335),
      Ur = Qr(345),
      tr = Qr(703),
      hr = Qr(3909),
      zr = Qr(379),
      Yr = Qr(374),
      nr = Qr(35378);
    const er = 40,
      Kr = 160;

    function yr(rr, Sr) {
      return `"${(rr.length>Sr?`${rr.slice(0,Sr)}...`:rr).replace(/[^ -~]|["\\]/g,"?")}"`
    }

    function Br(rr) {
      return rr ? "yes" : "no"
    }

    function Tr(rr) {
      var Sr;
      const Qr = rr.storedRenderer;
      return [`loss holds ${Br(rr.lossHolds)}`, `stops packs ${Br(rr.lossStopsPack)}`, `any loss ${Br(rr.anyLoss)}`, `old intel ${Br(rr.oldIntelDriver)}`, `few wasm memories ${Br(rr.fewWasmMemories)}`, `default off for packs ${Br(rr.defaultOffForPacks)}`, `default off reason ${null!==(Sr=rr.defaultOffReason)&&void 0!==Sr?Sr:"none"}`, `setting ${rr.setting?"on":"off"} (stored ${null===rr.settingStored?"unset":rr.settingStored?"on":"off"})`, `renderer url ${null===rr.urlRenderer?"none":yr(rr.urlRenderer,12)}, stored ${null===Qr||void 0===Qr?"none":yr(String(Qr),12)}`].join(", ")
    }

    function vr(rr) {
      if (null === rr) return "no renderer settled";
      const {
        requested: Sr,
        choice: Qr,
        source: Zr,
        fallbackReason: Wr
      } = rr;
      return `renderer requested ${Sr}, runs ${Qr}, from ${Zr}${null===Wr?"":`, fell back: ${yr(Wr,80)}`}`
    }

    function Or(rr, Sr) {
      return rr ? `stopping packs: iOS, ${null!==Sr&&void 0!==Sr?Sr:1} losses in a row within a day` : "stopping packs"
    }

    function Lr(rr) {
      var Sr, Qr, Zr;
      return `pick (wasm): backend ${null!==(Sr=rr.backend)&&void 0!==Sr?Sr:"none"}, webgpu fallback ${null!==(Qr=rr.reason)&&void 0!==Qr?Qr:"none"}, from ${null!==(Zr=rr.source)&&void 0!==Zr?Zr:"none"}, storage pull breaks ${Br(rr.storagePullBreaks)}; packs run ${Br("webgpu"===rr.backend)}, else ${rr.noWebGpu}`
    }

    function lr(rr, Sr, Qr) {
      return `pack ${null===rr?"(name not read)":yr(rr,er)} ${Sr}${null===Qr?"":`, ${Qr} variants`}`
    }
    const Xr = "shaderPack:failedWebGpuOff",
      Pr = new class {
        constructor() {
          this.joins = 0, this.losses = 0, this.noPackSaid = !1
        }
        join() {
          return this.joins++, this.joins <= 5 ? "detail" : this.joins <= 30 ? "outcome" : 31 === this.joins ? "cap" : "none"
        }
        noPack() {
          const rr = !this.noPackSaid;
          return this.noPackSaid = !0, rr
        }
        loss() {
          return this.losses++, this.losses <= 10 ? "line" : 11 === this.losses ? "cap" : "none"
        }
      };
    let Hr = null,
      qr = null,
      Rr = 0;

    function gr(rr) {
      (0, hr.l)("webgpuloss", rr)
    }

    function Cr() {
      return {
        lossHolds: (0, Ur.y)(),
        lossStopsPack: (0, Ur.C)(),
        anyLoss: (0, Ur.l)(),
        oldIntelDriver: !0 === xr.j.getItem(mr.F),
        fewWasmMemories: (0, Nr.i)(),
        defaultOffForPacks: Wr.c.isWebGpuDefaultOff(),
        defaultOffReason: Wr.c.webGpuDefaultOffReason(),
        settingStored: xr.j.getItem(Zr.mc),
        setting: Wr.c.get("clientEscMenuOptions").useWebGpu,
        urlRenderer: Er.currentUrl.getSearchParam(pr.b),
        storedRenderer: xr.j.getItem(pr.f)
      }
    }

    function Mr(rr) {
      return function(rr, Sr, Qr) {
        let Zr = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        if (null === rr || void 0 === rr) return "none";
        if ("object" !== typeof rr) return `unreadable (${typeof rr})`;
        const Wr = rr,
          ar = "number" === typeof Wr.at ? Wr.at : null,
          jr = ["browser " + (Sr ? "this one" : "another"), null === ar ? "no time" : `set ${((Qr-ar)/zr.h).toFixed(1)} h ago`, `losses ${"number"===typeof Wr.losses?Wr.losses:"unset (1)"}${null!==ar&&Qr-ar<zr.d?", the last within a day":""}`, `first page ${"hidden"===Wr.firstPage||"visible"===Wr.firstPage?Wr.firstPage:"unset (visible)"}`, `hold step ${"number"===typeof Wr.holdStep?Wr.holdStep:"unset (1)"}${Zr?" (not read on iOS: a kept loss holds its whole life)":""}`];
        if (void 0 !== Wr.reason || void 0 !== Wr.message) {
          const rr = "string" === typeof Wr.reason ? yr(Wr.reason, Yr.d) : "no reason";
          jr.push(`cause ${rr} ${!0===Wr.causeSent?"reported":"unreported"}`)
        }
        return jr.join(", ")
      }(rr, function(rr) {
        try {
          return "object" === typeof rr && null !== rr && rr.browser === (0, Ur.j)()
        } catch {
          return !1
        }
      }(rr), Date.now(), "ios" === (0, fr.getOperatingSystem)())
    }

    function Gr() {
      const rr = (0, Ur.q)().now;
      return "number" === typeof(null === rr || void 0 === rr ? void 0 : rr.losses) ? rr.losses : null
    }

    function kr() {
      const {
        atLoad: rr,
        now: Sr,
        unreported: Qr
      } = (0, Ur.q)(), Zr = JSON.stringify(rr) === JSON.stringify(Sr) ? "sp" : `now ${Mr(Sr)}`;
      gr(`load (${Ir.I?"wasm":"js"}, os ${(0,fr.getOperatingSystem)()}): stored loss ${Mr(rr)}; ${Zr}; cause kept apart ${function(rr,Sr){if(null===rr||void 0===rr)return"none";const{reason:Qr,at:Zr}="object"===typeof rr?rr:{},Wr="number"===typeof Zr?`
        set $ {
          ((Sr - Zr) / zr.h).toFixed(1)
        }
        h ago`:"no time";return`
        $ {
          "string" === typeof Qr ? yr(Qr, Yr.d) : "no reason"
        }, $ {
          Wr
        }
        `}((0,tr.g)(),Date.now())}; unreported ${function(rr,Sr){if(null===rr||void 0===rr||"object"!==typeof rr)return"none";const Qr=rr;return Sr.map((rr=>`${rr} ${"number"===typeof Qr[rr]?Qr[rr]:0}`)).join(", ")}(Qr,Ur.g)}; webgpu_loss_page ${Ur.z}`), gr(`load: ${Tr(Cr())}; pack expected ${(0,jr.d)(fr.featureFlags.settings.canUseShaderPacks)?"yes":"no"}; WebGPU API ${"gpu"in navigator?"yes":"no"}`)
    }

    function Ar(rr) {
      Hr = rr, gr(function(rr, Sr, Qr) {
        const Zr = rr.setting ? "the setting is on" : (0, nr.d)(rr.packActive, rr.defaultOffForPacks) ? "the pack forces it" : rr.packActive ? "the pack can't force it: default off for packs" : "no active pack, setting off";
        return `engine (js): useWebGpu ${Br(rr.useWebGpu)} (${Zr}); ${vr(Sr)}; webgpu fallback ${null!==Qr&&void 0!==Qr?Qr:"unset"}`
      }(rr, (0, ar.j)(), (0, fr.getWebGpuFallbackReason)()))
    }

    function Vr(rr) {
      qr = rr, gr(Lr(rr))
    }
    async function ir(rr, Sr, Zr, Wr) {
      const ar = ++Rr,
        jr = await async function(rr) {
          var Sr, Zr;
          const [{
            shaderPackPage: Wr,
            harnessShaderPackMode: ar
          }, {
            getShaderPackPolicy: jr
          }, {
            packRunsIn: Ir
          }] = await Promise.all([Qr.e(138).then((() => Qr(40792))), Qr.e(108).then((() => Qr(45277))), Qr.e(162).then((() => Qr(45279)))]), fr = await Wr.load();
          if ("none" === fr.status) return null;
          const Er = null !== (Sr = ar()) && void 0 !== Sr ? Sr : jr(rr),
            pr = "active" === fr.status ? fr.pack.variants : fr.variants,
            xr = Ir(pr, Er);
          return {
            text: `${"active"===fr.status?lr(fr.pack.name,"active",pr.length):lr(null,`blocked (${fr.messageKey})`,null!==(Zr=null===pr||void 0===pr?void 0:pr.length)&&void 0!==Zr?Zr:null)}; game policy ${Er}, runs in it ${xr?"yes":"no"}`,
            runs: xr
          }
        }(rr);
      if (null === jr) return void(Pr.noPack() && gr(`join ${ar}: no shader pack on this page (further joins without one not logged)`));
      const Ir = Pr.join();
      if ("none" === Ir) return;
      if ("cap" === Ir) return void gr(`join ${ar}: further joins not logged`);
      const fr = function(rr) {
          switch (rr.status) {
            case "ok":
              return void 0 === rr.couldntRun ? "joined" : `joined without the pack: ${rr.couldntRun}`;
            case "Rr":
              return "Rr";
            case "failed":
              return `failed: ${rr.messageKey}`
          }
        }(Sr),
        Er = ("ok" === Sr.status ? Sr.couldntRun : "failed" === Sr.status ? Sr.messageKey : void 0) === Xr ? `; cause: ${Wr()}` : "";
      "outcome" !== Ir ? (gr(`join ${ar}: ${jr.text}`), jr.runs && (gr(`join ${ar}: needs WebGPU; ${Zr()}`), gr(`join ${ar}: ${Tr(Cr())}`)), gr(`join ${ar}: ${fr}${Er}`)) : gr(`join ${ar}: ${fr}${Er}`)
    }

    function wr(rr, Sr, Qr) {
      var Zr;
      const Wr = null !== (Zr = null === Sr || void 0 === Sr ? void 0 : Sr.isRunning()) && void 0 !== Zr && Zr;
      return ir(rr, Qr, (() => `Lite runtime ${null===Sr?"no":"yes, running "+(Wr?"yes":"no")}; ${vr((0,ar.j)())}`), (() => function(rr, Sr, Qr, Zr) {
        if (null === rr) return "engine choice not seen";
        if (!rr.packActive) return "no active pack when the engine was built, so nothing forced WebGPU; worded off as a loss is stored" + (Sr.lossStopsPack ? "" : " (one that doesn't stop packs)");
        if ((0, nr.d)(rr.packActive, rr.defaultOffForPacks)) return "the pack forced WebGPU, yet nothing asked for a renderer: unexpected";
        if (!Sr.lossStopsPack) return (Sr.oldIntelDriver ? "old Intel driver verdict" : "few wasm memories or old Intel driver verdict, since cleared") + ", worded off as a loss is stored";
        return `a loss ${Or(Qr,Zr)}`
      }(Hr, Cr(), "ios" === (0, fr.getOperatingSystem)(), Gr())))
    }

    function cr(rr, Sr, Qr) {
      return ir(rr, null !== Sr ? {
        status: "failed",
        messageKey: Sr
      } : {
        status: "ok",
        couldntRun: null !== Qr && void 0 !== Qr ? Qr : void 0
      }, (() => null === qr ? "pick not seen" : Lr(qr)), (() => function(rr, Sr, Qr, Zr) {
        var Wr, ar, jr, Ir;
        return null === rr ? "pick not seen" : "off_after_loss" === rr.reason ? `off after a loss, ${"pack"===rr.source?Or(Qr,Zr):`from ${null!==(Ir=rr.source)&&void 0!==Ir?Ir:"none"}`}` : "not_requested" === rr.reason ? `not requested, from ${null!==(jr=rr.source)&&void 0!==jr?jr:"none"} (setting ${Sr.setting?"on":"off"})` : `${null!==(Wr=rr.reason)&&void 0!==Wr?Wr:"none"}, from ${null!==(ar=rr.source)&&void 0!==ar?ar:"none"}`
      }(qr, Cr(), "ios" === (0, fr.getOperatingSystem)(), Gr())))
    }

    function Fr(rr, Sr, Qr) {
      const Zr = Pr.loss();
      if ("none" === Zr) return;
      if ("cap" === Zr) return void gr("further losses not logged");
      const Wr = Cr();
      gr(function(rr, Sr, Qr, Zr) {
        return `loss (${rr}): ${Sr}${null===Qr?"":` ${yr(Qr,Kr)}`}; ${Zr}`
      }(rr, Sr, Qr, `stored ${Mr((0,Ur.q)().now)}; holds ${Wr.lossHolds?"yes":"no"}, stops packs ${Wr.lossStopsPack?"yes":"no"}`))
    }
  },
  35378: (rr, Sr, Qr) => {
    function Zr(rr, Sr) {
      return rr && !Sr
    }
    Qr.d(Sr, {
      d: () => Zr
    })
  }
};
Object.freeze(modules);
for (const rr in modules) Object.freeze(modules[rr]);