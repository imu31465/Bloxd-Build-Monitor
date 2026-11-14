export const id = 365;
export const ids = [365];
export const modules = {
  59587: (FF, WF, SF) => {
    SF.r(WF), SF.d(WF, {
      rebuildScenePbrPipelines: () => bW,
      rebuildSceneRenderables: () => dF
    });
    var CF = SF(39588),
      AF = (FF, WF) => FF.order - WF.order,
      uF = 8,
      hF = FF => dF(FF);
    async function bW(FF) {
      let WF = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
      await PF(FF, "pbr", WF)
    }
    async function dF(FF) {
      await PF(FF, void 0, !1)
    }
    async function PF(FF, WF, bW) {
      const dF = FF;
      if (!dF._built && !bW) return;
      const PF = dF._lightListVersion ?? 0,
        RF = dF.surface.engine,
        iW = FF => {
          dF._z ? FF.forEach((FF => FF())) : (0, CF.b)(RF, (() => FF.forEach((FF => FF()))))
        };
      let eF = !1,
        EF = !1,
        QF = !1,
        rW = !1;
      try {
        for (let FF = 1;; FF++) {
          if (void 0 !== WF) {
            await gW();
            break
          }
          if (TF(dF), await gW(), !tW(dF)) break;
          if (FF >= uF) {
            dF._rebuildHook = hF, rW = !0, EF = !0;
            break
          }
        }
        QF = !0
      } finally {
        if (eF && (dF._renderables.sort(AF), dF._renderableVersion++, dF._materialEpoch++, dF._built && dF._frameGraph.build()), void 0 === WF && QF && !EF && (dF._lightListVersion ?? 0) === PF) {
          const FF = dF._pendingTopologyRetirements?.splice(0);
          FF?.length && iW(FF), rW || (dF._rebuildHook = void 0)
        }
      }
      async function gW() {
        for (const [FF, CF] of dF._groups) {
          if (void 0 !== WF && FF._materialFamily !== WF) continue;
          if (0 === CF.length) {
            (CF.o || CF.r) && (aW(FF, CF), eF = !0);
            continue
          }
          const AF = dF._runtimeBuilds;
          await (AF?.wait(CF));
          let uF = !1;
          const bW = async () => {
            const WF = dF._runtimeBuilds,
              SF = [...CF].filter((WF => dF.meshes.includes(WF) && WF.material?._buildGroup === FF));
            if (0 === SF.length) return void aW(FF, CF);
            const hF = !!CF.r,
              bW = dF._disposables.length,
              PF = new Map,
              RF = new Map(SF.map((FF => [FF, FF.material])));
            for (const FF of SF) {
              const SF = dF._meshDisposables.get(FF);
              SF && (PF.set(FF, SF), dF._meshDisposables.delete(FF), WF?.holdPendingDisposers(FF, SF))
            }
            let eF, EF;
            dF._p = FF => (EF = FF, !0);
            try {
              eF = await FF(dF, SF)
            } catch (VF) {
              EF?.[1]();
              for (const AF of SF) {
                const SF = PF.get(AF),
                  uF = dF._meshDisposables.get(AF);
                if (uF && uF !== SF)
                  for (const FF of uF) FF();
                const hF = dF.meshes.includes(AF) && AF.material === RF.get(AF) && AF.material?._buildGroup === FF && CF.includes(AF);
                SF && hF ? dF._meshDisposables.set(AF, SF) : (dF._meshDisposables.delete(AF), SF && iW(SF)), SF && WF?.releasePendingDisposers(AF, SF)
              }
              throw VF
            } finally {
              delete dF._p
            }
            if (dF._z || AF?._d()) {
              EF?.[1]();
              for (const WF of SF) {
                const FF = dF._meshDisposables.get(WF),
                  SF = PF.get(WF);
                if (FF && FF !== SF)
                  for (const WF of FF) WF();
                dF._meshDisposables.delete(WF)
              }
              for (const WF of dF._disposables.splice(0)) WF();
              const FF = [...PF.values()].flat();
              iW(FF);
              for (const [SF, CF] of PF) WF?.releasePendingDisposers(SF, CF);
              return
            }
            EF?.[0](), FF._rebuildSingle = eF.rebuildSingle, CF.r = dF._runtimeBuilds?.base(FF, eF.rebuildSingle) ?? eF.rebuildSingle, "pbr" === FF._materialFamily && eF._G && (CF._w = null), hF && kW(dF, bW);
            const QF = new Set(SF.filter((WF => dF.meshes.includes(WF) && WF.material === RF.get(WF) && WF.material?._buildGroup === FF && CF.includes(WF))));
            if (QF.size !== SF.length && eF.renderables.some((FF => !FF.mesh))) {
              for (const FF of SF) {
                const SF = dF._meshDisposables.get(FF),
                  CF = PF.get(FF);
                if (SF && SF !== CF)
                  for (const FF of SF) FF();
                CF && dF.meshes.includes(FF) ? dF._meshDisposables.set(FF, CF) : (dF._meshDisposables.delete(FF), CF && iW(CF)), CF && WF?.releasePendingDisposers(FF, CF)
              }
              return void(uF = !0)
            }
            const rW = new Set;
            for (const FF of SF)
              if (QF.has(FF)) rW.add(FF.material), dF._runtimeBuilds?.reset(FF);
              else {
                const SF = PF.get(FF),
                  CF = dF._meshDisposables.get(FF);
                if (CF && CF !== SF)
                  for (const FF of CF) FF();
                SF && dF.meshes.includes(FF) ? (dF._meshDisposables.set(FF, SF), PF.delete(FF), WF?.releasePendingDisposers(FF, SF)) : dF._meshDisposables.delete(FF)
              } for (const FF of rW) FF._csmGen = (FF._csmGen ?? 0) + 1;
            const gW = CF.o,
              tW = gW?.length ? new Set(gW) : null;
            for (let FF = dF._renderables.length - 1; FF >= 0; FF--) {
              const WF = dF._renderables[FF];
              (QF.has(WF.mesh) || tW?.has(WF)) && dF._renderables.splice(FF, 1)
            }
            const TF = eF.renderables.filter((FF => !FF.mesh || QF.has(FF.mesh)));
            dF._renderables.push(...TF), CF.o = TF;
            const qW = [...PF.values()].flat();
            iW(qW);
            for (const [FF, CF] of PF) WF?.releasePendingDisposers(FF, CF)
          }, {
            X: PF
          } = await Promise.resolve().then((() => SF(59019))), RF = 3;
          for (let WF = 1;; WF++) {
            if (uF = !1, await PF(dF, FF, bW), dF._z || AF?._d()) return void(EF = !0);
            if (!uF) break;
            if (WF >= RF) {
              aW(FF, CF), dF._rebuildHook = hF, rW = !0, EF = !0;
              break
            }
          }
          uF ? eF = !0 : eF = !0
        }
      }

      function tW(FF) {
        for (const WF of FF.meshes) {
          const SF = WF.material?._buildGroup;
          if (SF && !FF._groups.get(SF)?.includes(WF)) return !0
        }
        return !1
      }

      function TF(FF) {
        const WF = new Map;
        for (const SF of FF.meshes) {
          const FF = SF.material?._buildGroup;
          if (!FF) continue;
          const CF = WF.get(FF);
          CF ? CF.push(SF) : WF.set(FF, [SF])
        }
        for (const [SF, CF] of FF._groups) {
          const FF = WF.get(SF) ?? [];
          (CF.length !== FF.length || FF.some(((FF, WF) => CF[WF] !== FF))) && (CF.length = 0, CF.push(...FF)), WF.delete(SF)
        }
        for (const [SF, CF] of WF) {
          const WF = CF;
          FF._groups.set(SF, WF)
        }
      }

      function aW(FF, WF) {
        const SF = WF.o;
        if (SF?.length) {
          const FF = new Set(SF);
          for (let WF = dF._renderables.length - 1; WF >= 0; WF--) FF.has(dF._renderables[WF]) && dF._renderables.splice(WF, 1)
        }
        WF.o = void 0, WF.r = void 0, dF._runtimeBuilds?.dropBase(FF), dF._rebuildHook = hF, rW = !0
      }

      function kW(FF, WF) {
        const SF = new Set(FF._disposables.slice(0, WF));
        for (let CF = FF._disposables.length - 1; CF >= WF; CF--) SF.has(FF._disposables[CF]) && FF._disposables.splice(CF, 1)
      }
    }
  }
};
Object.freeze(modules);
for (const FF in modules) Object.freeze(modules[FF]);