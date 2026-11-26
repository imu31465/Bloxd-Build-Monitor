export const id = 701;
export const ids = [701];
export const modules = {
  64748: (HH, BH, LH) => {
    LH.r(BH), LH.d(BH, {
      rebuildScenePbrPipelines: () => tH,
      rebuildSceneRenderables: () => zH
    });
    var AH = LH(45204),
      rH = (HH, BH) => HH.order - BH.order,
      SH = 8,
      hH = HH => zH(HH);
    async function tH(HH) {
      let BH = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
      await CH(HH, "pbr", BH)
    }
    async function zH(HH) {
      await CH(HH, void 0, !1)
    }
    async function CH(HH, BH, tH) {
      const zH = HH;
      if (!zH._built && !tH) return;
      const CH = zH._lightListVersion ?? 0,
        EH = zH.surface.engine,
        XH = HH => {
          zH._z ? HH.forEach((HH => HH())) : (0, AH.f)(EH, (() => HH.forEach((HH => HH()))))
        };
      let GH = !1,
        YH = !1,
        uH = !1,
        QH = !1;
      try {
        for (let HH = 1;; HH++) {
          if (void 0 !== BH) {
            await WH();
            break
          }
          if (xH(zH), await WH(), !MH(zH)) break;
          if (HH >= SH) {
            zH._rebuildHook = hH, QH = !0, YH = !0;
            break
          }
        }
        uH = !0
      } finally {
        if (GH && (zH._renderables.sort(rH), zH._renderableVersion++, zH._materialEpoch++, zH._built && zH._frameGraph.build()), void 0 === BH && uH && !YH && (zH._lightListVersion ?? 0) === CH) {
          const HH = zH._pendingTopologyRetirements?.splice(0);
          HH?.length && XH(HH), QH || (zH._rebuildHook = void 0)
        }
      }
      async function WH() {
        for (const [HH, AH] of zH._groups) {
          if (void 0 !== BH && HH._materialFamily !== BH) continue;
          if (0 === AH.length) {
            (AH.o || AH.r) && (vH(HH, AH), GH = !0);
            continue
          }
          const rH = zH._runtimeBuilds;
          await (rH?.wait(AH));
          let SH = !1;
          const tH = async () => {
            const BH = zH._runtimeBuilds,
              LH = [...AH].filter((BH => zH.meshes.includes(BH) && BH.material?._buildGroup === HH));
            if (0 === LH.length) return void vH(HH, AH);
            const hH = !!AH.r,
              tH = zH._disposables.length,
              CH = new Map,
              EH = new Map(LH.map((HH => [HH, HH.material])));
            for (const HH of LH) {
              const LH = zH._meshDisposables.get(HH);
              LH && (CH.set(HH, LH), zH._meshDisposables.delete(HH), BH?.holdPendingDisposers(HH, LH))
            }
            let GH, YH;
            zH._p = HH => (YH = HH, !0);
            try {
              GH = await HH(zH, LH)
            } catch (UH) {
              YH?.[1]();
              for (const rH of LH) {
                const LH = CH.get(rH),
                  SH = zH._meshDisposables.get(rH);
                if (SH && SH !== LH)
                  for (const HH of SH) HH();
                const hH = zH.meshes.includes(rH) && rH.material === EH.get(rH) && rH.material?._buildGroup === HH && AH.includes(rH);
                LH && hH ? zH._meshDisposables.set(rH, LH) : (zH._meshDisposables.delete(rH), LH && XH(LH)), LH && BH?.releasePendingDisposers(rH, LH)
              }
              throw UH
            } finally {
              delete zH._p
            }
            if (zH._z || rH?._d()) {
              YH?.[1]();
              for (const BH of LH) {
                const HH = zH._meshDisposables.get(BH),
                  LH = CH.get(BH);
                if (HH && HH !== LH)
                  for (const BH of HH) BH();
                zH._meshDisposables.delete(BH)
              }
              for (const BH of zH._disposables.splice(0)) BH();
              const HH = [...CH.values()].flat();
              XH(HH);
              for (const [LH, AH] of CH) BH?.releasePendingDisposers(LH, AH);
              return
            }
            YH?.[0](), HH._rebuildSingle = GH.rebuildSingle, AH.r = zH._runtimeBuilds?.base(HH, GH.rebuildSingle) ?? GH.rebuildSingle, "pbr" === HH._materialFamily && GH._G && (AH._w = null), hH && PH(zH, tH);
            const uH = new Set(LH.filter((BH => zH.meshes.includes(BH) && BH.material === EH.get(BH) && BH.material?._buildGroup === HH && AH.includes(BH))));
            if (uH.size !== LH.length && GH.renderables.some((HH => !HH.mesh))) {
              for (const HH of LH) {
                const LH = zH._meshDisposables.get(HH),
                  AH = CH.get(HH);
                if (LH && LH !== AH)
                  for (const HH of LH) HH();
                AH && zH.meshes.includes(HH) ? zH._meshDisposables.set(HH, AH) : (zH._meshDisposables.delete(HH), AH && XH(AH)), AH && BH?.releasePendingDisposers(HH, AH)
              }
              return void(SH = !0)
            }
            const QH = new Set;
            for (const HH of LH)
              if (uH.has(HH)) QH.add(HH.material), zH._runtimeBuilds?.reset(HH);
              else {
                const LH = CH.get(HH),
                  AH = zH._meshDisposables.get(HH);
                if (AH && AH !== LH)
                  for (const HH of AH) HH();
                LH && zH.meshes.includes(HH) ? (zH._meshDisposables.set(HH, LH), CH.delete(HH), BH?.releasePendingDisposers(HH, LH)) : zH._meshDisposables.delete(HH)
              } for (const HH of QH) HH._csmGen = (HH._csmGen ?? 0) + 1;
            const WH = AH.o,
              MH = WH?.length ? new Set(WH) : null;
            for (let HH = zH._renderables.length - 1; HH >= 0; HH--) {
              const BH = zH._renderables[HH];
              (uH.has(BH.mesh) || MH?.has(BH)) && zH._renderables.splice(HH, 1)
            }
            const xH = GH.renderables.filter((HH => !HH.mesh || uH.has(HH.mesh)));
            zH._renderables.push(...xH), AH.o = xH;
            const TH = [...CH.values()].flat();
            XH(TH);
            for (const [HH, AH] of CH) BH?.releasePendingDisposers(HH, AH)
          }, {
            X: CH
          } = await Promise.resolve().then((() => LH(64216))), EH = 3;
          for (let BH = 1;; BH++) {
            if (SH = !1, await CH(zH, HH, tH), zH._z || rH?._d()) return void(YH = !0);
            if (!SH) break;
            if (BH >= EH) {
              vH(HH, AH), zH._rebuildHook = hH, QH = !0, YH = !0;
              break
            }
          }
          SH ? GH = !0 : GH = !0
        }
      }

      function MH(HH) {
        for (const BH of HH.meshes) {
          const LH = BH.material?._buildGroup;
          if (LH && !HH._groups.get(LH)?.includes(BH)) return !0
        }
        return !1
      }

      function xH(HH) {
        const BH = new Map;
        for (const LH of HH.meshes) {
          const HH = LH.material?._buildGroup;
          if (!HH) continue;
          const AH = BH.get(HH);
          AH ? AH.push(LH) : BH.set(HH, [LH])
        }
        for (const [LH, AH] of HH._groups) {
          const HH = BH.get(LH) ?? [];
          (AH.length !== HH.length || HH.some(((HH, BH) => AH[BH] !== HH))) && (AH.length = 0, AH.push(...HH)), BH.delete(LH)
        }
        for (const [LH, AH] of BH) {
          const BH = AH;
          HH._groups.set(LH, BH)
        }
      }

      function vH(HH, BH) {
        const LH = BH.o;
        if (LH?.length) {
          const HH = new Set(LH);
          for (let BH = zH._renderables.length - 1; BH >= 0; BH--) HH.has(zH._renderables[BH]) && zH._renderables.splice(BH, 1)
        }
        BH.o = void 0, BH.r = void 0, zH._runtimeBuilds?.dropBase(HH), zH._rebuildHook = hH, QH = !0
      }

      function PH(HH, BH) {
        const LH = new Set(HH._disposables.slice(0, BH));
        for (let AH = HH._disposables.length - 1; AH >= BH; AH--) LH.has(HH._disposables[AH]) && HH._disposables.splice(AH, 1)
      }
    }
  }
};
Object.freeze(modules);
for (const HH in modules) Object.freeze(modules[HH]);