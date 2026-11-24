export const id = 393;
export const ids = [393];
export const modules = {
  61983: (SS, HS, gS) => {
    gS.r(HS), gS.d(HS, {
      rebuildScenePbrPipelines: () => NS,
      rebuildSceneRenderables: () => qS
    });
    var tS = gS(41737),
      bS = (SS, HS) => SS.order - HS.order,
      XS = 8,
      xS = SS => qS(SS);
    async function NS(SS) {
      let HS = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
      await uS(SS, "pbr", HS)
    }
    async function qS(SS) {
      await uS(SS, void 0, !1)
    }
    async function uS(SS, HS, NS) {
      const qS = SS;
      if (!qS._built && !NS) return;
      const uS = qS._lightListVersion ?? 0,
        IS = qS.surface.engine,
        fS = SS => {
          qS._z ? SS.forEach((SS => SS())) : (0, tS.c)(IS, (() => SS.forEach((SS => SS()))))
        };
      let kS = !1,
        aS = !1,
        KS = !1,
        jS = !1;
      try {
        for (let SS = 1;; SS++) {
          if (void 0 !== HS) {
            await GS();
            break
          }
          if (nS(qS), await GS(), !CS(qS)) break;
          if (SS >= XS) {
            qS._rebuildHook = xS, jS = !0, aS = !0;
            break
          }
        }
        KS = !0
      } finally {
        if (kS && (qS._renderables.sort(bS), qS._renderableVersion++, qS._materialEpoch++, qS._built && qS._frameGraph.build()), void 0 === HS && KS && !aS && (qS._lightListVersion ?? 0) === uS) {
          const SS = qS._pendingTopologyRetirements?.splice(0);
          SS?.length && fS(SS), jS || (qS._rebuildHook = void 0)
        }
      }
      async function GS() {
        for (const [SS, tS] of qS._groups) {
          if (void 0 !== HS && SS._materialFamily !== HS) continue;
          if (0 === tS.length) {
            (tS.o || tS.r) && (PS(SS, tS), kS = !0);
            continue
          }
          const bS = qS._runtimeBuilds;
          await (bS?.wait(tS));
          let XS = !1;
          const NS = async () => {
            const HS = qS._runtimeBuilds,
              gS = [...tS].filter((HS => qS.meshes.includes(HS) && HS.material?._buildGroup === SS));
            if (0 === gS.length) return void PS(SS, tS);
            const xS = !!tS.r,
              NS = qS._disposables.length,
              uS = new Map,
              IS = new Map(gS.map((SS => [SS, SS.material])));
            for (const SS of gS) {
              const gS = qS._meshDisposables.get(SS);
              gS && (uS.set(SS, gS), qS._meshDisposables.delete(SS), HS?.holdPendingDisposers(SS, gS))
            }
            let kS, aS;
            qS._p = SS => (aS = SS, !0);
            try {
              kS = await SS(qS, gS)
            } catch (wS) {
              aS?.[1]();
              for (const bS of gS) {
                const gS = uS.get(bS),
                  XS = qS._meshDisposables.get(bS);
                if (XS && XS !== gS)
                  for (const SS of XS) SS();
                const xS = qS.meshes.includes(bS) && bS.material === IS.get(bS) && bS.material?._buildGroup === SS && tS.includes(bS);
                gS && xS ? qS._meshDisposables.set(bS, gS) : (qS._meshDisposables.delete(bS), gS && fS(gS)), gS && HS?.releasePendingDisposers(bS, gS)
              }
              throw wS
            } finally {
              delete qS._p
            }
            if (qS._z || bS?._d()) {
              aS?.[1]();
              for (const HS of gS) {
                const SS = qS._meshDisposables.get(HS),
                  gS = uS.get(HS);
                if (SS && SS !== gS)
                  for (const HS of SS) HS();
                qS._meshDisposables.delete(HS)
              }
              for (const HS of qS._disposables.splice(0)) HS();
              const SS = [...uS.values()].flat();
              fS(SS);
              for (const [gS, tS] of uS) HS?.releasePendingDisposers(gS, tS);
              return
            }
            aS?.[0](), SS._rebuildSingle = kS.rebuildSingle, tS.r = qS._runtimeBuilds?.base(SS, kS.rebuildSingle) ?? kS.rebuildSingle, "pbr" === SS._materialFamily && kS._G && (tS._w = null), xS && QS(qS, NS);
            const KS = new Set(gS.filter((HS => qS.meshes.includes(HS) && HS.material === IS.get(HS) && HS.material?._buildGroup === SS && tS.includes(HS))));
            if (KS.size !== gS.length && kS.renderables.some((SS => !SS.mesh))) {
              for (const SS of gS) {
                const gS = qS._meshDisposables.get(SS),
                  tS = uS.get(SS);
                if (gS && gS !== tS)
                  for (const SS of gS) SS();
                tS && qS.meshes.includes(SS) ? qS._meshDisposables.set(SS, tS) : (qS._meshDisposables.delete(SS), tS && fS(tS)), tS && HS?.releasePendingDisposers(SS, tS)
              }
              return void(XS = !0)
            }
            const jS = new Set;
            for (const SS of gS)
              if (KS.has(SS)) jS.add(SS.material), qS._runtimeBuilds?.reset(SS);
              else {
                const gS = uS.get(SS),
                  tS = qS._meshDisposables.get(SS);
                if (tS && tS !== gS)
                  for (const SS of tS) SS();
                gS && qS.meshes.includes(SS) ? (qS._meshDisposables.set(SS, gS), uS.delete(SS), HS?.releasePendingDisposers(SS, gS)) : qS._meshDisposables.delete(SS)
              } for (const SS of jS) SS._csmGen = (SS._csmGen ?? 0) + 1;
            const GS = tS.o,
              CS = GS?.length ? new Set(GS) : null;
            for (let SS = qS._renderables.length - 1; SS >= 0; SS--) {
              const HS = qS._renderables[SS];
              (KS.has(HS.mesh) || CS?.has(HS)) && qS._renderables.splice(SS, 1)
            }
            const nS = kS.renderables.filter((SS => !SS.mesh || KS.has(SS.mesh)));
            qS._renderables.push(...nS), tS.o = nS;
            const DS = [...uS.values()].flat();
            fS(DS);
            for (const [SS, tS] of uS) HS?.releasePendingDisposers(SS, tS)
          }, {
            X: uS
          } = await Promise.resolve().then((() => gS(61433))), IS = 3;
          for (let HS = 1;; HS++) {
            if (XS = !1, await uS(qS, SS, NS), qS._z || bS?._d()) return void(aS = !0);
            if (!XS) break;
            if (HS >= IS) {
              PS(SS, tS), qS._rebuildHook = xS, jS = !0, aS = !0;
              break
            }
          }
          XS ? kS = !0 : kS = !0
        }
      }

      function CS(SS) {
        for (const HS of SS.meshes) {
          const gS = HS.material?._buildGroup;
          if (gS && !SS._groups.get(gS)?.includes(HS)) return !0
        }
        return !1
      }

      function nS(SS) {
        const HS = new Map;
        for (const gS of SS.meshes) {
          const SS = gS.material?._buildGroup;
          if (!SS) continue;
          const tS = HS.get(SS);
          tS ? tS.push(gS) : HS.set(SS, [gS])
        }
        for (const [gS, tS] of SS._groups) {
          const SS = HS.get(gS) ?? [];
          (tS.length !== SS.length || SS.some(((SS, HS) => tS[HS] !== SS))) && (tS.length = 0, tS.push(...SS)), HS.delete(gS)
        }
        for (const [gS, tS] of HS) {
          const HS = tS;
          SS._groups.set(gS, HS)
        }
      }

      function PS(SS, HS) {
        const gS = HS.o;
        if (gS?.length) {
          const SS = new Set(gS);
          for (let HS = qS._renderables.length - 1; HS >= 0; HS--) SS.has(qS._renderables[HS]) && qS._renderables.splice(HS, 1)
        }
        HS.o = void 0, HS.r = void 0, qS._runtimeBuilds?.dropBase(SS), qS._rebuildHook = xS, jS = !0
      }

      function QS(SS, HS) {
        const gS = new Set(SS._disposables.slice(0, HS));
        for (let tS = SS._disposables.length - 1; tS >= HS; tS--) gS.has(SS._disposables[tS]) && SS._disposables.splice(tS, 1)
      }
    }
  }
};
Object.freeze(modules);
for (const SS in modules) Object.freeze(modules[SS]);