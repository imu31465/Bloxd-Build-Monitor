export const id = 65;
export const ids = [65];
export const modules = {
  36081: (bb, cb, sb) => {
    sb.r(cb), sb.d(cb, {
      noteJsEngine: () => Zb,
      noteJsJoin: () => db,
      noteWasmJoin: () => Ab,
      noteWasmPick: () => zb,
      noteWebGpuLoss: () => wb,
      startWebGpuLossDebug: () => Kb
    });
    var kb = sb(334),
      Wb = sb(19),
      ab = sb(2631),
      Tb = sb(3222),
      Ub = sb(649),
      Ib = sb(316),
      Hb = sb(117),
      fb = sb(131),
      Mb = sb(2637),
      Xb = sb(37),
      nb = sb(145),
      mb = sb(312),
      lb = sb(2680),
      Qb = sb(344),
      eb = sb(8840);
    const Cb = 40,
      Nb = 160;

    function Vb(bb, cb) {
      return `"${(bb.length>cb?`${bb.slice(0,cb)}...`:bb).replace(/[^ -~]|["\\]/g,"?")}"`
    }

    function Lb(bb) {
      return bb ? "yes" : "no"
    }

    function ub(bb) {
      var cb;
      const sb = bb.storedRenderer;
      return [`loss holds ${Lb(bb.lossHolds)}`, `stops packs ${Lb(bb.lossStopsPack)}`, `any loss ${Lb(bb.anyLoss)}`, `old intel ${Lb(bb.oldIntelDriver)}`, `default off for packs ${Lb(bb.defaultOffForPacks)}`, `default off reason ${null!==(cb=bb.defaultOffReason)&&void 0!==cb?cb:"none"}`, `setting ${bb.setting?"on":"off"} (stored ${null===bb.settingStored?"unset":bb.settingStored?"on":"off"})`, `renderer url ${null===bb.urlRenderer?"none":Vb(bb.urlRenderer,12)}, stored ${null===sb||void 0===sb?"none":Vb(String(sb),12)}`, `hidden-loss arm ${bb.hiddenLossArm}`].join(", ")
    }

    function Yb(bb) {
      if (null === bb) return "no renderer settled";
      const {
        requested: cb,
        choice: sb,
        source: kb,
        fallbackReason: Wb
      } = bb;
      return `renderer requested ${cb}, runs ${sb}, from ${kb}${null===Wb?"":`, fell back: ${Vb(Wb,80)}`}`
    }

    function hb(bb, cb) {
      return bb ? `stopping packs: iOS, ${null!==cb&&void 0!==cb?cb:1} losses in a row within a day` : "stopping packs"
    }

    function Jb(bb) {
      var cb, sb, kb;
      return `pick (wasm): backend ${null!==(cb=bb.backend)&&void 0!==cb?cb:"none"}, webgpu fallback ${null!==(sb=bb.reason)&&void 0!==sb?sb:"none"}, from ${null!==(kb=bb.source)&&void 0!==kb?kb:"none"}, storage pull breaks ${Lb(bb.storagePullBreaks)}; packs run ${Lb("webgpu"===bb.backend&&!bb.storagePullBreaks)}, else ${bb.noWebGpu}`
    }

    function gb(bb, cb, sb) {
      return `pack ${null===bb?"(name not read)":Vb(bb,Cb)} ${cb}${null===sb?"":`, ${sb} variants`}`
    }
    const Bb = "shaderPack:failedWebGpuOff",
      tb = new class {
        constructor() {
          this.joins = 0, this.losses = 0, this.noPackSaid = !1
        }
        join() {
          return this.joins++, this.joins <= 5 ? "detail" : this.joins <= 30 ? "outcome" : 31 === this.joins ? "cap" : "none"
        }
        noPack() {
          const bb = !this.noPackSaid;
          return this.noPackSaid = !0, bb
        }
        loss() {
          return this.losses++, this.losses <= 10 ? "line" : 11 === this.losses ? "cap" : "none"
        }
      };
    let yb = null,
      Pb = null,
      Db = 0;

    function Eb(bb) {
      (0, lb.m)("webgpuloss", bb)
    }

    function ib() {
      return {
        lossHolds: (0, mb.u)(),
        lossStopsPack: (0, mb.A)(),
        anyLoss: (0, mb.g)(),
        oldIntelDriver: !0 === Xb.h.getItem(nb.F),
        defaultOffForPacks: Wb.d.isWebGpuDefaultOff(),
        defaultOffReason: Wb.d.webGpuDefaultOffReason(),
        settingStored: Xb.h.getItem(kb.nc),
        setting: Wb.d.get("clientEscMenuOptions").useWebGpu,
        urlRenderer: fb.currentUrl.getSearchParam(Mb.c),
        storedRenderer: Xb.h.getItem(Mb.f),
        hiddenLossArm: Ib.b.webgpu_hidden_loss_v1
      }
    }

    function Ob(bb) {
      return function(bb, cb, sb) {
        if (null === bb || void 0 === bb) return "none";
        if ("object" !== typeof bb) return `unreadable (${typeof bb})`;
        const kb = bb,
          Wb = "number" === typeof kb.at ? kb.at : null;
        return ["browser " + (cb ? "this one" : "another"), null === Wb ? "no time" : `set ${((sb-Wb)/Qb.n).toFixed(1)} h ago`, `losses ${"number"===typeof kb.losses?kb.losses:"unset (1)"}${null!==Wb&&sb-Wb<Qb.j?", the last within a day":""}`, `hidden-only ${"number"===typeof kb.hiddenLosses?kb.hiddenLosses:"no"}`, `first page ${"hidden"===kb.firstPage||"visible"===kb.firstPage?kb.firstPage:"unset (visible)"}`].join(", ")
      }(bb, function(bb) {
        try {
          return "object" === typeof bb && null !== bb && bb.browser === (0, mb.c)()
        } catch {
          return !1
        }
      }(bb), Date.now())
    }

    function Gb() {
      const bb = (0, mb.k)().now;
      return "number" === typeof(null === bb || void 0 === bb ? void 0 : bb.losses) ? bb.losses : null
    }

    function Kb() {
      const {
        atLoad: bb,
        now: cb,
        unreported: sb
      } = (0, mb.k)(), kb = JSON.stringify(bb) === JSON.stringify(cb) ? "vn" : `now ${Ob(cb)}`;
      Eb(`load (${Ub.s?"wasm":"js"}, os ${(0,Hb.getOperatingSystem)()}): stored loss ${Ob(bb)}; ${kb}; unreported ${function(bb){if(null===bb||void 0===bb||"object"!==typeof bb)return"none";const{hidden:cb,visible:sb}=bb;return`
        hidden $ {
          "number" === typeof cb ? cb : 0
        }, visible $ {
          "number" === typeof sb ? sb : 0
        }
        `}(sb)}; webgpu_loss_page ${mb.x}`), Eb(`load: ${ub(ib())}; pack expected ${(0,Tb.e)(Hb.featureFlags.settings.canUseShaderPacks)?"yes":"no"}; WebGPU API ${"gpu"in navigator?"yes":"no"}`)
    }

    function Zb(bb) {
      yb = bb, Eb(function(bb, cb, sb) {
        const kb = bb.setting ? "the setting is on" : (0, eb.c)(bb.packActive, bb.defaultOffForPacks) ? "the pack forces it" : bb.packActive ? "the pack can't force it: default off for packs" : "no active pack, setting off";
        return `engine (js): useWebGpu ${Lb(bb.useWebGpu)} (${kb}); ${Yb(cb)}; webgpu fallback ${null!==sb&&void 0!==sb?sb:"unset"}`
      }(bb, (0, ab.g)(), (0, Hb.getWebGpuFallbackReason)()))
    }

    function zb(bb) {
      Pb = bb, Eb(Jb(bb))
    }
    async function qb(bb, cb, kb, Wb) {
      const ab = ++Db,
        Tb = await async function(bb) {
          var cb, kb;
          const [{
            shaderPackPage: Wb,
            harnessShaderPackMode: ab
          }, {
            getShaderPackPolicy: Tb
          }, {
            packRunsIn: Ub
          }] = await Promise.all([sb.e(129).then((() => sb(38787))), sb.e(89).then((() => sb(40700))), sb.e(133).then((() => sb(40704)))]), Ib = await Wb.load();
          if ("none" === Ib.status) return null;
          const Hb = null !== (cb = ab()) && void 0 !== cb ? cb : Tb(bb),
            fb = "active" === Ib.status ? Ib.pack.variants : Ib.variants,
            Mb = Ub(fb, Hb);
          return {
            text: `${"active"===Ib.status?gb(Ib.pack.name,"active",fb.length):gb(null,`blocked (${Ib.messageKey})`,null!==(kb=null===fb||void 0===fb?void 0:fb.length)&&void 0!==kb?kb:null)}; game policy ${Hb}, runs in it ${Mb?"yes":"no"}`,
            runs: Mb
          }
        }(bb);
      if (null === Tb) return void(tb.noPack() && Eb(`join ${ab}: no shader pack on this page (further joins without one not logged)`));
      const Ub = tb.join();
      if ("none" === Ub) return;
      if ("cap" === Ub) return void Eb(`join ${ab}: further joins not logged`);
      const Ib = function(bb) {
          switch (bb.status) {
            case "ok":
              return void 0 === bb.couldntRun ? "joined" : `joined without the pack: ${bb.couldntRun}`;
            case "Gs":
              return "Gs";
            case "failed":
              return `failed: ${bb.messageKey}`
          }
        }(cb),
        Hb = ("ok" === cb.status ? cb.couldntRun : "failed" === cb.status ? cb.messageKey : void 0) === Bb ? `; cause: ${Wb()}` : "";
      "outcome" !== Ub ? (Eb(`join ${ab}: ${Tb.text}`), Tb.runs && (Eb(`join ${ab}: needs WebGPU; ${kb()}`), Eb(`join ${ab}: ${ub(ib())}`)), Eb(`join ${ab}: ${Ib}${Hb}`)) : Eb(`join ${ab}: ${Ib}${Hb}`)
    }

    function db(bb, cb, sb) {
      var kb;
      const Wb = null !== (kb = null === cb || void 0 === cb ? void 0 : cb.isRunning()) && void 0 !== kb && kb;
      return qb(bb, sb, (() => `Lite runtime ${null===cb?"no":"yes, running "+(Wb?"yes":"no")}; ${Yb((0,ab.g)())}`), (() => {
        return bb = yb, cb = ib(), sb = "ios" === (0, Hb.getOperatingSystem)(), kb = Gb(), null === bb ? "engine choice not seen" : bb.packActive ? (0, eb.c)(bb.packActive, bb.defaultOffForPacks) ? "the pack forced WebGPU, yet nothing asked for a renderer: unexpected" : cb.lossStopsPack ? `a loss ${hb(sb,kb)}` : "old Intel driver verdict, worded off as a loss is stored" : "no active pack when the engine was built, so nothing forced WebGPU; worded off as a loss is stored" + (cb.lossStopsPack ? "" : " (one that doesn't stop packs)");
        var bb, cb, sb, kb
      }))
    }

    function Ab(bb, cb, sb) {
      return qb(bb, null !== cb ? {
        status: "failed",
        messageKey: cb
      } : {
        status: "ok",
        couldntRun: null !== sb && void 0 !== sb ? sb : void 0
      }, (() => null === Pb ? "pick not seen" : Jb(Pb)), (() => function(bb, cb, sb, kb) {
        var Wb, ab, Tb, Ub;
        return null === bb ? "pick not seen" : "off_after_loss" === bb.reason ? `off after a loss, ${"pack"===bb.source?hb(sb,kb):`from ${null!==(Ub=bb.source)&&void 0!==Ub?Ub:"none"}`}` : "not_requested" === bb.reason ? `not requested, from ${null!==(Tb=bb.source)&&void 0!==Tb?Tb:"none"} (setting ${cb.setting?"on":"off"})` : `${null!==(Wb=bb.reason)&&void 0!==Wb?Wb:"none"}, from ${null!==(ab=bb.source)&&void 0!==ab?ab:"none"}`
      }(Pb, ib(), "ios" === (0, Hb.getOperatingSystem)(), Gb())))
    }

    function wb(bb, cb, sb) {
      const kb = tb.loss();
      if ("none" === kb) return;
      if ("cap" === kb) return void Eb("further losses not logged");
      const Wb = ib();
      Eb(function(bb, cb, sb, kb) {
        return `loss (${bb}): ${cb}${null===sb?"":` ${Vb(sb,Nb)}`}; ${kb}`
      }(bb, cb, sb, `stored ${Ob((0,mb.k)().now)}; holds ${Wb.lossHolds?"yes":"no"}, stops packs ${Wb.lossStopsPack?"yes":"no"}`))
    }
  },
  8840: (bb, cb, sb) => {
    function kb(bb, cb) {
      return bb && !cb
    }
    sb.d(cb, {
      c: () => kb
    })
  }
};
Object.freeze(modules);
for (const bb in modules) Object.freeze(modules[bb]);