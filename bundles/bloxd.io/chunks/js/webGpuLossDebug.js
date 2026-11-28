export const id = 81;
export const ids = [81];
export const modules = {
  37719: (bb, wb, Mb) => {
    Mb.r(wb), Mb.d(wb, {
      noteJsEngine: () => Qb,
      noteJsJoin: () => ab,
      noteWasmJoin: () => ib,
      noteWasmPick: () => Gb,
      noteWebGpuLoss: () => ub,
      startWebGpuLossDebug: () => vb
    });
    var eb = Mb(366),
      Hb = Mb(26),
      pb = Mb(4028),
      Vb = Mb(4843),
      gb = Mb(698),
      lb = Mb(110),
      Lb = Mb(122),
      Ib = Mb(4034),
      Ob = Mb(43),
      Ub = Mb(135),
      tb = Mb(352),
      Cb = Mb(361),
      Eb = Mb(681),
      Fb = Mb(4060),
      Bb = Mb(382),
      sb = Mb(375),
      mb = Mb(35260);
    const hb = 40,
      zb = 160;

    function Xb(bb, wb) {
      return `"${(bb.length>wb?`${bb.slice(0,wb)}...`:bb).replace(/[^ -~]|["\\]/g,"?")}"`
    }

    function xb(bb) {
      return bb ? "yes" : "no"
    }

    function jb(bb) {
      var wb;
      const Mb = bb.storedRenderer;
      return [`loss holds ${xb(bb.lossHolds)}`, `stops packs ${xb(bb.lossStopsPack)}`, `any loss ${xb(bb.anyLoss)}`, `old intel ${xb(bb.oldIntelDriver)}`, `few wasm memories ${xb(bb.fewWasmMemories)}`, `default off for packs ${xb(bb.defaultOffForPacks)}`, `default off reason ${null!==(wb=bb.defaultOffReason)&&void 0!==wb?wb:"none"}`, `setting ${bb.setting?"on":"off"} (stored ${null===bb.settingStored?"unset":bb.settingStored?"on":"off"})`, `renderer url ${null===bb.urlRenderer?"none":Xb(bb.urlRenderer,12)}, stored ${null===Mb||void 0===Mb?"none":Xb(String(Mb),12)}`].join(", ")
    }

    function Kb(bb) {
      if (null === bb) return "no renderer settled";
      const {
        requested: wb,
        choice: Mb,
        source: eb,
        fallbackReason: Hb
      } = bb;
      return `renderer requested ${wb}, runs ${Mb}, from ${eb}${null===Hb?"":`, fell back: ${Xb(Hb,80)}`}`
    }

    function rb(bb, wb) {
      return bb ? `stopping packs: iOS, ${null!==wb&&void 0!==wb?wb:1} losses in a row within a day` : "stopping packs"
    }

    function Rb(bb) {
      var wb, Mb, eb;
      return `pick (wasm): backend ${null!==(wb=bb.backend)&&void 0!==wb?wb:"none"}, webgpu fallback ${null!==(Mb=bb.reason)&&void 0!==Mb?Mb:"none"}, from ${null!==(eb=bb.source)&&void 0!==eb?eb:"none"}, storage pull breaks ${xb(bb.storagePullBreaks)}; packs run ${xb("webgpu"===bb.backend)}, else ${bb.noWebGpu}`
    }

    function Db(bb, wb, Mb) {
      return `pack ${null===bb?"(name not read)":Xb(bb,hb)} ${wb}${null===Mb?"":`, ${Mb} variants`}`
    }
    const cb = "shaderPack:failedWebGpuOff",
      Yb = new class {
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
    let Zb = null,
      fb = null,
      Ab = 0;

    function Wb(bb) {
      (0, Fb.j)("webgpuloss", bb)
    }

    function Jb() {
      return {
        lossHolds: (0, Cb.x)(),
        lossStopsPack: (0, Cb.E)(),
        anyLoss: (0, Cb.j)(),
        oldIntelDriver: !0 === Ob.i.getItem(Ub.G),
        fewWasmMemories: (0, tb.c)(),
        defaultOffForPacks: Hb.c.isWebGpuDefaultOff(),
        defaultOffReason: Hb.c.webGpuDefaultOffReason(),
        settingStored: Ob.i.getItem(eb.mc),
        setting: Hb.c.get("clientEscMenuOptions").useWebGpu,
        urlRenderer: Lb.currentUrl.getSearchParam(Ib.c),
        storedRenderer: Ob.i.getItem(Ib.e)
      }
    }

    function Sb(bb) {
      return function(bb, wb, Mb) {
        let eb = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        if (null === bb || void 0 === bb) return "none";
        if ("object" !== typeof bb) return `unreadable (${typeof bb})`;
        const Hb = bb,
          pb = "number" === typeof Hb.at ? Hb.at : null,
          Vb = ["browser " + (wb ? "this one" : "another"), null === pb ? "no time" : `set ${((Mb-pb)/Bb.p).toFixed(1)} h ago`, `losses ${"number"===typeof Hb.losses?Hb.losses:"unset (1)"}${null!==pb&&Mb-pb<Bb.l?", the last within a day":""}`, `first page ${"hidden"===Hb.firstPage||"visible"===Hb.firstPage?Hb.firstPage:"unset (visible)"}`, `hold step ${"number"===typeof Hb.holdStep?Hb.holdStep:"unset (1)"}${eb?" (not read on iOS: a kept loss holds its whole life)":""}`];
        if (void 0 !== Hb.reason || void 0 !== Hb.message) {
          const bb = "string" === typeof Hb.reason ? Xb(Hb.reason, sb.e) : "no reason";
          Vb.push(`cause ${bb} ${!0===Hb.causeSent?"reported":"unreported"}`)
        }
        return Vb.join(", ")
      }(bb, function(bb) {
        try {
          return "object" === typeof bb && null !== bb && bb.browser === (0, Cb.g)()
        } catch {
          return !1
        }
      }(bb), Date.now(), "ios" === (0, lb.getOperatingSystem)())
    }

    function Nb() {
      const bb = (0, Cb.p)().now;
      return "number" === typeof(null === bb || void 0 === bb ? void 0 : bb.losses) ? bb.losses : null
    }

    function vb() {
      const {
        atLoad: bb,
        now: wb,
        unreported: Mb
      } = (0, Cb.p)(), eb = JSON.stringify(bb) === JSON.stringify(wb) ? "nI" : `now ${Sb(wb)}`;
      Wb(`load (${gb.I?"wasm":"js"}, os ${(0,lb.getOperatingSystem)()}): stored loss ${Sb(bb)}; ${eb}; cause kept apart ${function(bb,wb){if(null===bb||void 0===bb)return"none";const{reason:Mb,at:eb}="object"===typeof bb?bb:{},Hb="number"===typeof eb?`
        set $ {
          ((wb - eb) / Bb.p).toFixed(1)
        }
        h ago`:"no time";return`
        $ {
          "string" === typeof Mb ? Xb(Mb, sb.e) : "no reason"
        }, $ {
          Hb
        }
        `}((0,Eb.h)(),Date.now())}; unreported ${function(bb,wb){if(null===bb||void 0===bb||"object"!==typeof bb)return"none";const Mb=bb;return wb.map((bb=>`${bb} ${"number"===typeof Mb[bb]?Mb[bb]:0}`)).join(", ")}(Mb,Cb.f)}; webgpu_loss_page ${Cb.z}`), Wb(`load: ${jb(Jb())}; pack expected ${(0,Vb.g)(lb.featureFlags.settings.canUseShaderPacks)?"yes":"no"}; WebGPU API ${"gpu"in navigator?"yes":"no"}`)
    }

    function Qb(bb) {
      Zb = bb, Wb(function(bb, wb, Mb) {
        const eb = bb.setting ? "the setting is on" : (0, mb.e)(bb.packActive, bb.defaultOffForPacks) ? "the pack forces it" : bb.packActive ? "the pack can't force it: default off for packs" : "no active pack, setting off";
        return `engine (js): useWebGpu ${xb(bb.useWebGpu)} (${eb}); ${Kb(wb)}; webgpu fallback ${null!==Mb&&void 0!==Mb?Mb:"unset"}`
      }(bb, (0, pb.h)(), (0, lb.getWebGpuFallbackReason)()))
    }

    function Gb(bb) {
      fb = bb, Wb(Rb(bb))
    }
    async function qb(bb, wb, eb, Hb) {
      const pb = ++Ab,
        Vb = await async function(bb) {
          var wb, eb;
          const [{
            shaderPackPage: Hb,
            harnessShaderPackMode: pb
          }, {
            getShaderPackPolicy: Vb
          }, {
            packRunsIn: gb
          }] = await Promise.all([Mb.e(138).then((() => Mb(40569))), Mb.e(108).then((() => Mb(45128))), Mb.e(162).then((() => Mb(45136)))]), lb = await Hb.load();
          if ("none" === lb.status) return null;
          const Lb = null !== (wb = pb()) && void 0 !== wb ? wb : Vb(bb),
            Ib = "active" === lb.status ? lb.pack.variants : lb.variants,
            Ob = gb(Ib, Lb);
          return {
            text: `${"active"===lb.status?Db(lb.pack.name,"active",Ib.length):Db(null,`blocked (${lb.messageKey})`,null!==(eb=null===Ib||void 0===Ib?void 0:Ib.length)&&void 0!==eb?eb:null)}; game policy ${Lb}, runs in it ${Ob?"yes":"no"}`,
            runs: Ob
          }
        }(bb);
      if (null === Vb) return void(Yb.noPack() && Wb(`join ${pb}: no shader pack on this page (further joins without one not logged)`));
      const gb = Yb.join();
      if ("none" === gb) return;
      if ("cap" === gb) return void Wb(`join ${pb}: further joins not logged`);
      const lb = function(bb) {
          switch (bb.status) {
            case "ok":
              return void 0 === bb.couldntRun ? "joined" : `joined without the pack: ${bb.couldntRun}`;
            case "Yb":
              return "Yb";
            case "failed":
              return `failed: ${bb.messageKey}`
          }
        }(wb),
        Lb = ("ok" === wb.status ? wb.couldntRun : "failed" === wb.status ? wb.messageKey : void 0) === cb ? `; cause: ${Hb()}` : "";
      "outcome" !== gb ? (Wb(`join ${pb}: ${Vb.text}`), Vb.runs && (Wb(`join ${pb}: needs WebGPU; ${eb()}`), Wb(`join ${pb}: ${jb(Jb())}`)), Wb(`join ${pb}: ${lb}${Lb}`)) : Wb(`join ${pb}: ${lb}${Lb}`)
    }

    function ab(bb, wb, Mb) {
      var eb;
      const Hb = null !== (eb = null === wb || void 0 === wb ? void 0 : wb.isRunning()) && void 0 !== eb && eb;
      return qb(bb, Mb, (() => `Lite runtime ${null===wb?"no":"yes, running "+(Hb?"yes":"no")}; ${Kb((0,pb.h)())}`), (() => function(bb, wb, Mb, eb) {
        if (null === bb) return "engine choice not seen";
        if (!bb.packActive) return "no active pack when the engine was built, so nothing forced WebGPU; worded off as a loss is stored" + (wb.lossStopsPack ? "" : " (one that doesn't stop packs)");
        if ((0, mb.e)(bb.packActive, bb.defaultOffForPacks)) return "the pack forced WebGPU, yet nothing asked for a renderer: unexpected";
        if (!wb.lossStopsPack) return (wb.oldIntelDriver ? "old Intel driver verdict" : "few wasm memories or old Intel driver verdict, since cleared") + ", worded off as a loss is stored";
        return `a loss ${rb(Mb,eb)}`
      }(Zb, Jb(), "ios" === (0, lb.getOperatingSystem)(), Nb())))
    }

    function ib(bb, wb, Mb) {
      return qb(bb, null !== wb ? {
        status: "failed",
        messageKey: wb
      } : {
        status: "ok",
        couldntRun: null !== Mb && void 0 !== Mb ? Mb : void 0
      }, (() => null === fb ? "pick not seen" : Rb(fb)), (() => function(bb, wb, Mb, eb) {
        var Hb, pb, Vb, gb;
        return null === bb ? "pick not seen" : "off_after_loss" === bb.reason ? `off after a loss, ${"pack"===bb.source?rb(Mb,eb):`from ${null!==(gb=bb.source)&&void 0!==gb?gb:"none"}`}` : "not_requested" === bb.reason ? `not requested, from ${null!==(Vb=bb.source)&&void 0!==Vb?Vb:"none"} (setting ${wb.setting?"on":"off"})` : `${null!==(Hb=bb.reason)&&void 0!==Hb?Hb:"none"}, from ${null!==(pb=bb.source)&&void 0!==pb?pb:"none"}`
      }(fb, Jb(), "ios" === (0, lb.getOperatingSystem)(), Nb())))
    }

    function ub(bb, wb, Mb) {
      const eb = Yb.loss();
      if ("none" === eb) return;
      if ("cap" === eb) return void Wb("further losses not logged");
      const Hb = Jb();
      Wb(function(bb, wb, Mb, eb) {
        return `loss (${bb}): ${wb}${null===Mb?"":` ${Xb(Mb,zb)}`}; ${eb}`
      }(bb, wb, Mb, `stored ${Sb((0,Cb.p)().now)}; holds ${Hb.lossHolds?"yes":"no"}, stops packs ${Hb.lossStopsPack?"yes":"no"}`))
    }
  },
  35260: (bb, wb, Mb) => {
    function eb(bb, wb) {
      return bb && !wb
    }
    Mb.d(wb, {
      e: () => eb
    })
  }
};
Object.freeze(modules);
for (const bb in modules) Object.freeze(modules[bb]);