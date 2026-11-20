export const id = 66;
export const ids = [66];
export const modules = {
  36030: (bb, ub, hb) => {
    hb.r(ub), hb.d(ub, {
      noteJsEngine: () => Mb,
      noteJsJoin: () => Pb,
      noteWasmJoin: () => qb,
      noteWasmPick: () => mb,
      noteWebGpuLoss: () => Eb,
      startWebGpuLossDebug: () => sb
    });
    var Bb = hb(298),
      Ob = hb(13),
      Gb = hb(2580),
      Ub = hb(3237),
      Lb = hb(599),
      Yb = hb(275),
      Sb = hb(86),
      ab = hb(94),
      Hb = hb(2585),
      wb = hb(29),
      Zb = hb(104),
      Xb = hb(270),
      pb = hb(2633),
      ob = hb(314),
      Ab = hb(8992);
    const lb = 40,
      Kb = 160;

    function Wb(bb, ub) {
      return `"${(bb.length>ub?`${bb.slice(0,ub)}...`:bb).replace(/[^ -~]|["\\]/g,"?")}"`
    }

    function Cb(bb) {
      return bb ? "yes" : "no"
    }

    function db(bb) {
      var ub;
      const hb = bb.storedRenderer;
      return [`loss holds ${Cb(bb.lossHolds)}`, `stops packs ${Cb(bb.lossStopsPack)}`, `any loss ${Cb(bb.anyLoss)}`, `old intel ${Cb(bb.oldIntelDriver)}`, `default off for packs ${Cb(bb.defaultOffForPacks)}`, `default off reason ${null!==(ub=bb.defaultOffReason)&&void 0!==ub?ub:"none"}`, `setting ${bb.setting?"on":"off"} (stored ${null===bb.settingStored?"unset":bb.settingStored?"on":"off"})`, `renderer url ${null===bb.urlRenderer?"none":Wb(bb.urlRenderer,12)}, stored ${null===hb||void 0===hb?"none":Wb(String(hb),12)}`, `hidden-loss arm ${bb.hiddenLossArm}`].join(", ")
    }

    function rb(bb) {
      if (null === bb) return "no renderer settled";
      const {
        requested: ub,
        choice: hb,
        source: Bb,
        fallbackReason: Ob
      } = bb;
      return `renderer requested ${ub}, runs ${hb}, from ${Bb}${null===Ob?"":`, fell back: ${Wb(Ob,80)}`}`
    }

    function jb(bb, ub) {
      return bb ? `stopping packs: iOS, ${null!==ub&&void 0!==ub?ub:1} losses in a row within a day` : "stopping packs"
    }

    function nb(bb) {
      var ub, hb, Bb;
      return `pick (wasm): backend ${null!==(ub=bb.backend)&&void 0!==ub?ub:"none"}, webgpu fallback ${null!==(hb=bb.reason)&&void 0!==hb?hb:"none"}, from ${null!==(Bb=bb.source)&&void 0!==Bb?Bb:"none"}, storage pull breaks ${Cb(bb.storagePullBreaks)}; packs run ${Cb("webgpu"===bb.backend&&!bb.storagePullBreaks)}, else ${bb.noWebGpu}`
    }

    function Db(bb, ub, hb) {
      return `pack ${null===bb?"(name not read)":Wb(bb,lb)} ${ub}${null===hb?"":`, ${hb} variants`}`
    }
    const xb = "shaderPack:failedWebGpuOff",
      zb = new class {
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
    let gb = null,
      ib = null,
      vb = 0;

    function tb(bb) {
      (0, pb.l)("webgpuloss", bb)
    }

    function Jb() {
      return {
        lossHolds: (0, Xb.w)(),
        lossStopsPack: (0, Xb.A)(),
        anyLoss: (0, Xb.g)(),
        oldIntelDriver: !0 === wb.j.getItem(Zb.J),
        defaultOffForPacks: Ob.d.isWebGpuDefaultOff(),
        defaultOffReason: Ob.d.webGpuDefaultOffReason(),
        settingStored: wb.j.getItem(Bb.tc),
        setting: Ob.d.get("clientEscMenuOptions").useWebGpu,
        urlRenderer: ab.currentUrl.getSearchParam(Hb.b),
        storedRenderer: wb.j.getItem(Hb.f),
        hiddenLossArm: Yb.b.webgpu_hidden_loss_v1
      }
    }

    function eb(bb) {
      return function(bb, ub, hb) {
        if (null === bb || void 0 === bb) return "none";
        if ("object" !== typeof bb) return `unreadable (${typeof bb})`;
        const Bb = bb,
          Ob = "number" === typeof Bb.at ? Bb.at : null;
        return ["browser " + (ub ? "this one" : "another"), null === Ob ? "no time" : `set ${((hb-Ob)/ob.i).toFixed(1)} h ago`, `losses ${"number"===typeof Bb.losses?Bb.losses:"unset (1)"}${null!==Ob&&hb-Ob<ob.g?", the last within a day":""}`, `hidden-only ${"number"===typeof Bb.hiddenLosses?Bb.hiddenLosses:"no"}`, `first page ${"hidden"===Bb.firstPage||"visible"===Bb.firstPage?Bb.firstPage:"unset (visible)"}`].join(", ")
      }(bb, function(bb) {
        try {
          return "object" === typeof bb && null !== bb && bb.browser === (0, Xb.e)()
        } catch {
          return !1
        }
      }(bb), Date.now())
    }

    function Nb() {
      const bb = (0, Xb.m)().now;
      return "number" === typeof(null === bb || void 0 === bb ? void 0 : bb.losses) ? bb.losses : null
    }

    function sb() {
      const {
        atLoad: bb,
        now: ub,
        unreported: hb
      } = (0, Xb.m)(), Bb = JSON.stringify(bb) === JSON.stringify(ub) ? "HZ" : `now ${eb(ub)}`;
      tb(`load (${Lb.o?"wasm":"js"}, os ${(0,Sb.getOperatingSystem)()}): stored loss ${eb(bb)}; ${Bb}; unreported ${function(bb){if(null===bb||void 0===bb||"object"!==typeof bb)return"none";const{hidden:ub,visible:hb}=bb;return`
        hidden $ {
          "number" === typeof ub ? ub : 0
        }, visible $ {
          "number" === typeof hb ? hb : 0
        }
        `}(hb)}; webgpu_loss_page ${Xb.y}`), tb(`load: ${db(Jb())}; pack expected ${(0,Ub.e)(Sb.featureFlags.settings.canUseShaderPacks)?"yes":"no"}; WebGPU API ${"gpu"in navigator?"yes":"no"}`)
    }

    function Mb(bb) {
      gb = bb, tb(function(bb, ub, hb) {
        const Bb = bb.setting ? "the setting is on" : (0, Ab.b)(bb.packActive, bb.defaultOffForPacks) ? "the pack forces it" : bb.packActive ? "the pack can't force it: default off for packs" : "no active pack, setting off";
        return `engine (js): useWebGpu ${Cb(bb.useWebGpu)} (${Bb}); ${rb(ub)}; webgpu fallback ${null!==hb&&void 0!==hb?hb:"unset"}`
      }(bb, (0, Gb.g)(), (0, Sb.getWebGpuFallbackReason)()))
    }

    function mb(bb) {
      ib = bb, tb(nb(bb))
    }
    async function Ib(bb, ub, Bb, Ob) {
      const Gb = ++vb,
        Ub = await async function(bb) {
          var ub, Bb;
          const [{
            shaderPackPage: Ob,
            harnessShaderPackMode: Gb
          }, {
            getShaderPackPolicy: Ub
          }, {
            packRunsIn: Lb
          }] = await Promise.all([hb.e(130).then((() => hb(38833))), hb.e(90).then((() => hb(40720))), hb.e(134).then((() => hb(40728)))]), Yb = await Ob.load();
          if ("none" === Yb.status) return null;
          const Sb = null !== (ub = Gb()) && void 0 !== ub ? ub : Ub(bb),
            ab = "active" === Yb.status ? Yb.pack.variants : Yb.variants,
            Hb = Lb(ab, Sb);
          return {
            text: `${"active"===Yb.status?Db(Yb.pack.name,"active",ab.length):Db(null,`blocked (${Yb.messageKey})`,null!==(Bb=null===ab||void 0===ab?void 0:ab.length)&&void 0!==Bb?Bb:null)}; game policy ${Sb}, runs in it ${Hb?"yes":"no"}`,
            runs: Hb
          }
        }(bb);
      if (null === Ub) return void(zb.noPack() && tb(`join ${Gb}: no shader pack on this page (further joins without one not logged)`));
      const Lb = zb.join();
      if ("none" === Lb) return;
      if ("cap" === Lb) return void tb(`join ${Gb}: further joins not logged`);
      const Yb = function(bb) {
          switch (bb.status) {
            case "ok":
              return void 0 === bb.couldntRun ? "joined" : `joined without the pack: ${bb.couldntRun}`;
            case "Lu":
              return "Lu";
            case "failed":
              return `failed: ${bb.messageKey}`
          }
        }(ub),
        Sb = ("ok" === ub.status ? ub.couldntRun : "failed" === ub.status ? ub.messageKey : void 0) === xb ? `; cause: ${Ob()}` : "";
      "outcome" !== Lb ? (tb(`join ${Gb}: ${Ub.text}`), Ub.runs && (tb(`join ${Gb}: needs WebGPU; ${Bb()}`), tb(`join ${Gb}: ${db(Jb())}`)), tb(`join ${Gb}: ${Yb}${Sb}`)) : tb(`join ${Gb}: ${Yb}${Sb}`)
    }

    function Pb(bb, ub, hb) {
      var Bb;
      const Ob = null !== (Bb = null === ub || void 0 === ub ? void 0 : ub.isRunning()) && void 0 !== Bb && Bb;
      return Ib(bb, hb, (() => `Lite runtime ${null===ub?"no":"yes, running "+(Ob?"yes":"no")}; ${rb((0,Gb.g)())}`), (() => {
        return bb = gb, ub = Jb(), hb = "ios" === (0, Sb.getOperatingSystem)(), Bb = Nb(), null === bb ? "engine choice not seen" : bb.packActive ? (0, Ab.b)(bb.packActive, bb.defaultOffForPacks) ? "the pack forced WebGPU, yet nothing asked for a renderer: unexpected" : ub.lossStopsPack ? `a loss ${jb(hb,Bb)}` : "old Intel driver verdict, worded off as a loss is stored" : "no active pack when the engine was built, so nothing forced WebGPU; worded off as a loss is stored" + (ub.lossStopsPack ? "" : " (one that doesn't stop packs)");
        var bb, ub, hb, Bb
      }))
    }

    function qb(bb, ub, hb) {
      return Ib(bb, null !== ub ? {
        status: "failed",
        messageKey: ub
      } : {
        status: "ok",
        couldntRun: null !== hb && void 0 !== hb ? hb : void 0
      }, (() => null === ib ? "pick not seen" : nb(ib)), (() => function(bb, ub, hb, Bb) {
        var Ob, Gb, Ub, Lb;
        return null === bb ? "pick not seen" : "off_after_loss" === bb.reason ? `off after a loss, ${"pack"===bb.source?jb(hb,Bb):`from ${null!==(Lb=bb.source)&&void 0!==Lb?Lb:"none"}`}` : "not_requested" === bb.reason ? `not requested, from ${null!==(Ub=bb.source)&&void 0!==Ub?Ub:"none"} (setting ${ub.setting?"on":"off"})` : `${null!==(Ob=bb.reason)&&void 0!==Ob?Ob:"none"}, from ${null!==(Gb=bb.source)&&void 0!==Gb?Gb:"none"}`
      }(ib, Jb(), "ios" === (0, Sb.getOperatingSystem)(), Nb())))
    }

    function Eb(bb, ub, hb) {
      const Bb = zb.loss();
      if ("none" === Bb) return;
      if ("cap" === Bb) return void tb("further losses not logged");
      const Ob = Jb();
      tb(function(bb, ub, hb, Bb) {
        return `loss (${bb}): ${ub}${null===hb?"":` ${Wb(hb,Kb)}`}; ${Bb}`
      }(bb, ub, hb, `stored ${eb((0,Xb.m)().now)}; holds ${Ob.lossHolds?"yes":"no"}, stops packs ${Ob.lossStopsPack?"yes":"no"}`))
    }
  },
  8992: (bb, ub, hb) => {
    function Bb(bb, ub) {
      return bb && !ub
    }
    hb.d(ub, {
      b: () => Bb
    })
  }
};
Object.freeze(modules);
for (const bb in modules) Object.freeze(modules[bb]);