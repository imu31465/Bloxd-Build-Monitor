export const id = 65;
export const ids = [65];
export const modules = {
  35903: (zz, uz, bz) => {
    bz.r(uz), bz.d(uz, {
      noteJsEngine: () => Uz,
      noteJsJoin: () => Sz,
      noteWasmJoin: () => yz,
      noteWasmPick: () => cz,
      noteWebGpuLoss: () => Dz,
      startWebGpuLossDebug: () => hz
    });
    var Ez = bz(316),
      nz = bz(20),
      iz = bz(2639),
      lz = bz(3198),
      Mz = bz(606),
      tz = bz(301),
      Hz = bz(96),
      Oz = bz(104),
      pz = bz(2644),
      dz = bz(33),
      Fz = bz(115),
      Zz = bz(298),
      Rz = bz(2689),
      Kz = bz(328),
      wz = bz(8902);
    const Xz = 40,
      fz = 160;

    function sz(zz, uz) {
      return `"${(zz.length>uz?`${zz.slice(0,uz)}...`:zz).replace(/[^ -~]|["\\]/g,"?")}"`
    }

    function rz(zz) {
      return zz ? "yes" : "no"
    }

    function oz(zz) {
      var uz;
      const bz = zz.storedRenderer;
      return [`loss holds ${rz(zz.lossHolds)}`, `stops packs ${rz(zz.lossStopsPack)}`, `any loss ${rz(zz.anyLoss)}`, `old intel ${rz(zz.oldIntelDriver)}`, `default off for packs ${rz(zz.defaultOffForPacks)}`, `default off reason ${null!==(uz=zz.defaultOffReason)&&void 0!==uz?uz:"none"}`, `setting ${zz.setting?"on":"off"} (stored ${null===zz.settingStored?"unset":zz.settingStored?"on":"off"})`, `renderer url ${null===zz.urlRenderer?"none":sz(zz.urlRenderer,12)}, stored ${null===bz||void 0===bz?"none":sz(String(bz),12)}`, `hidden-loss arm ${zz.hiddenLossArm}`].join(", ")
    }

    function Nz(zz) {
      if (null === zz) return "no renderer settled";
      const {
        requested: uz,
        choice: bz,
        source: Ez,
        fallbackReason: nz
      } = zz;
      return `renderer requested ${uz}, runs ${bz}, from ${Ez}${null===nz?"":`, fell back: ${sz(nz,80)}`}`
    }

    function vz(zz, uz) {
      return zz ? `stopping packs: iOS, ${null!==uz&&void 0!==uz?uz:1} losses in a row within a day` : "stopping packs"
    }

    function xz(zz) {
      var uz, bz, Ez;
      return `pick (wasm): backend ${null!==(uz=zz.backend)&&void 0!==uz?uz:"none"}, webgpu fallback ${null!==(bz=zz.reason)&&void 0!==bz?bz:"none"}, from ${null!==(Ez=zz.source)&&void 0!==Ez?Ez:"none"}, storage pull breaks ${rz(zz.storagePullBreaks)}; packs run ${rz("webgpu"===zz.backend&&!zz.storagePullBreaks)}, else ${zz.noWebGpu}`
    }

    function Jz(zz, uz, bz) {
      return `pack ${null===zz?"(name not read)":sz(zz,Xz)} ${uz}${null===bz?"":`, ${bz} variants`}`
    }
    const Az = "shaderPack:failedWebGpuOff",
      Tz = new class {
        constructor() {
          this.joins = 0, this.losses = 0, this.noPackSaid = !1
        }
        join() {
          return this.joins++, this.joins <= 5 ? "detail" : this.joins <= 30 ? "outcome" : 31 === this.joins ? "cap" : "none"
        }
        noPack() {
          const zz = !this.noPackSaid;
          return this.noPackSaid = !0, zz
        }
        loss() {
          return this.losses++, this.losses <= 10 ? "line" : 11 === this.losses ? "cap" : "none"
        }
      };
    let Lz = null,
      Pz = null,
      Gz = 0;

    function az(zz) {
      (0, Rz.i)("webgpuloss", zz)
    }

    function Vz() {
      return {
        lossHolds: (0, Zz.q)(),
        lossStopsPack: (0, Zz.w)(),
        anyLoss: (0, Zz.g)(),
        oldIntelDriver: !0 === dz.g.getItem(Fz.F),
        defaultOffForPacks: nz.e.isWebGpuDefaultOff(),
        defaultOffReason: nz.e.webGpuDefaultOffReason(),
        settingStored: dz.g.getItem(Ez.zc),
        setting: nz.e.get("clientEscMenuOptions").useWebGpu,
        urlRenderer: Oz.currentUrl.getSearchParam(pz.c),
        storedRenderer: dz.g.getItem(pz.e),
        hiddenLossArm: tz.d.webgpu_hidden_loss_v1
      }
    }

    function mz(zz) {
      return function(zz, uz, bz) {
        if (null === zz || void 0 === zz) return "none";
        if ("object" !== typeof zz) return `unreadable (${typeof zz})`;
        const Ez = zz,
          nz = "number" === typeof Ez.at ? Ez.at : null;
        return ["browser " + (uz ? "this one" : "another"), null === nz ? "no time" : `set ${((bz-nz)/Kz.k).toFixed(1)} h ago`, `losses ${"number"===typeof Ez.losses?Ez.losses:"unset (1)"}${null!==nz&&bz-nz<Kz.j?", the last within a day":""}`, `hidden-only ${"number"===typeof Ez.hiddenLosses?Ez.hiddenLosses:"no"}`, `first page ${"hidden"===Ez.firstPage||"visible"===Ez.firstPage?Ez.firstPage:"unset (visible)"}`].join(", ")
      }(zz, function(zz) {
        try {
          return "object" === typeof zz && null !== zz && zz.browser === (0, Zz.d)()
        } catch {
          return !1
        }
      }(zz), Date.now())
    }

    function qz() {
      const zz = (0, Zz.j)().now;
      return "number" === typeof(null === zz || void 0 === zz ? void 0 : zz.losses) ? zz.losses : null
    }

    function hz() {
      const {
        atLoad: zz,
        now: uz,
        unreported: bz
      } = (0, Zz.j)(), Ez = JSON.stringify(zz) === JSON.stringify(uz) ? "MZ" : `now ${mz(uz)}`;
      az(`load (${Mz.x?"wasm":"js"}, os ${(0,Hz.getOperatingSystem)()}): stored loss ${mz(zz)}; ${Ez}; unreported ${function(zz){if(null===zz||void 0===zz||"object"!==typeof zz)return"none";const{hidden:uz,visible:bz}=zz;return`
        hidden $ {
          "number" === typeof uz ? uz : 0
        }, visible $ {
          "number" === typeof bz ? bz : 0
        }
        `}(bz)}; webgpu_loss_page ${Zz.t}`), az(`load: ${oz(Vz())}; pack expected ${(0,lz.c)(Hz.featureFlags.settings.canUseShaderPacks)?"yes":"no"}; WebGPU API ${"gpu"in navigator?"yes":"no"}`)
    }

    function Uz(zz) {
      Lz = zz, az(function(zz, uz, bz) {
        const Ez = zz.setting ? "the setting is on" : (0, wz.b)(zz.packActive, zz.defaultOffForPacks) ? "the pack forces it" : zz.packActive ? "the pack can't force it: default off for packs" : "no active pack, setting off";
        return `engine (js): useWebGpu ${rz(zz.useWebGpu)} (${Ez}); ${Nz(uz)}; webgpu fallback ${null!==bz&&void 0!==bz?bz:"unset"}`
      }(zz, (0, iz.k)(), (0, Hz.getWebGpuFallbackReason)()))
    }

    function cz(zz) {
      Pz = zz, az(xz(zz))
    }
    async function gz(zz, uz, Ez, nz) {
      const iz = ++Gz,
        lz = await async function(zz) {
          var uz, Ez;
          const [{
            shaderPackPage: nz,
            harnessShaderPackMode: iz
          }, {
            getShaderPackPolicy: lz
          }, {
            packRunsIn: Mz
          }] = await Promise.all([bz.e(129).then((() => bz(38566))), bz.e(89).then((() => bz(40479))), bz.e(133).then((() => bz(40487)))]), tz = await nz.load();
          if ("none" === tz.status) return null;
          const Hz = null !== (uz = iz()) && void 0 !== uz ? uz : lz(zz),
            Oz = "active" === tz.status ? tz.pack.variants : tz.variants,
            pz = Mz(Oz, Hz);
          return {
            text: `${"active"===tz.status?Jz(tz.pack.name,"active",Oz.length):Jz(null,`blocked (${tz.messageKey})`,null!==(Ez=null===Oz||void 0===Oz?void 0:Oz.length)&&void 0!==Ez?Ez:null)}; game policy ${Hz}, runs in it ${pz?"yes":"no"}`,
            runs: pz
          }
        }(zz);
      if (null === lz) return void(Tz.noPack() && az(`join ${iz}: no shader pack on this page (further joins without one not logged)`));
      const Mz = Tz.join();
      if ("none" === Mz) return;
      if ("cap" === Mz) return void az(`join ${iz}: further joins not logged`);
      const tz = function(zz) {
          switch (zz.status) {
            case "ok":
              return void 0 === zz.couldntRun ? "joined" : `joined without the pack: ${zz.couldntRun}`;
            case "ob":
              return "ob";
            case "failed":
              return `failed: ${zz.messageKey}`
          }
        }(uz),
        Hz = ("ok" === uz.status ? uz.couldntRun : "failed" === uz.status ? uz.messageKey : void 0) === Az ? `; cause: ${nz()}` : "";
      "outcome" !== Mz ? (az(`join ${iz}: ${lz.text}`), lz.runs && (az(`join ${iz}: needs WebGPU; ${Ez()}`), az(`join ${iz}: ${oz(Vz())}`)), az(`join ${iz}: ${tz}${Hz}`)) : az(`join ${iz}: ${tz}${Hz}`)
    }

    function Sz(zz, uz, bz) {
      var Ez;
      const nz = null !== (Ez = null === uz || void 0 === uz ? void 0 : uz.isRunning()) && void 0 !== Ez && Ez;
      return gz(zz, bz, (() => `Lite runtime ${null===uz?"no":"yes, running "+(nz?"yes":"no")}; ${Nz((0,iz.k)())}`), (() => {
        return zz = Lz, uz = Vz(), bz = "ios" === (0, Hz.getOperatingSystem)(), Ez = qz(), null === zz ? "engine choice not seen" : zz.packActive ? (0, wz.b)(zz.packActive, zz.defaultOffForPacks) ? "the pack forced WebGPU, yet nothing asked for a renderer: unexpected" : uz.lossStopsPack ? `a loss ${vz(bz,Ez)}` : "old Intel driver verdict, worded off as a loss is stored" : "no active pack when the engine was built, so nothing forced WebGPU; worded off as a loss is stored" + (uz.lossStopsPack ? "" : " (one that doesn't stop packs)");
        var zz, uz, bz, Ez
      }))
    }

    function yz(zz, uz, bz) {
      return gz(zz, null !== uz ? {
        status: "failed",
        messageKey: uz
      } : {
        status: "ok",
        couldntRun: null !== bz && void 0 !== bz ? bz : void 0
      }, (() => null === Pz ? "pick not seen" : xz(Pz)), (() => function(zz, uz, bz, Ez) {
        var nz, iz, lz, Mz;
        return null === zz ? "pick not seen" : "off_after_loss" === zz.reason ? `off after a loss, ${"pack"===zz.source?vz(bz,Ez):`from ${null!==(Mz=zz.source)&&void 0!==Mz?Mz:"none"}`}` : "not_requested" === zz.reason ? `not requested, from ${null!==(lz=zz.source)&&void 0!==lz?lz:"none"} (setting ${uz.setting?"on":"off"})` : `${null!==(nz=zz.reason)&&void 0!==nz?nz:"none"}, from ${null!==(iz=zz.source)&&void 0!==iz?iz:"none"}`
      }(Pz, Vz(), "ios" === (0, Hz.getOperatingSystem)(), qz())))
    }

    function Dz(zz, uz, bz) {
      const Ez = Tz.loss();
      if ("none" === Ez) return;
      if ("cap" === Ez) return void az("further losses not logged");
      const nz = Vz();
      az(function(zz, uz, bz, Ez) {
        return `loss (${zz}): ${uz}${null===bz?"":` ${sz(bz,fz)}`}; ${Ez}`
      }(zz, uz, bz, `stored ${mz((0,Zz.j)().now)}; holds ${nz.lossHolds?"yes":"no"}, stops packs ${nz.lossStopsPack?"yes":"no"}`))
    }
  },
  8902: (zz, uz, bz) => {
    function Ez(zz, uz) {
      return zz && !uz
    }
    bz.d(uz, {
      b: () => Ez
    })
  }
};
Object.freeze(modules);
for (const zz in modules) Object.freeze(modules[zz]);