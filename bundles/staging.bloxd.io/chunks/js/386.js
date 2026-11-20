export const id = 386;
export const ids = [386];
export const modules = {
  61853: (qq, Eq, gq) => {
    gq.r(Eq), gq.d(Eq, {
      rebuildScenePbrPipelines: () => xq,
      rebuildSceneRenderables: () => Aq
    });
    var Yq = gq(41489),
      lq = (qq, Eq) => qq.order - Eq.order,
      Oq = 8,
      mq = qq => Aq(qq);
    async function xq(qq) {
      let Eq = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
      await cq(qq, "pbr", Eq)
    }
    async function Aq(qq) {
      await cq(qq, void 0, !1)
    }
    async function cq(qq, Eq, xq) {
      const Aq = qq;
      if (!Aq._built && !xq) return;
      const cq = Aq._lightListVersion ?? 0,
        uq = Aq.surface.engine,
        Bq = qq => {
          Aq._z ? qq.forEach((qq => qq())) : (0, Yq.c)(uq, (() => qq.forEach((qq => qq()))))
        };
      let Wq = !1,
        Nq = !1,
        aq = !1,
        Vq = !1;
      try {
        for (let qq = 1;; qq++) {
          if (void 0 !== Eq) {
            await dq();
            break
          }
          if (Hq(Aq), await dq(), !jq(Aq)) break;
          if (qq >= Oq) {
            Aq._rebuildHook = mq, Vq = !0, Nq = !0;
            break
          }
        }
        aq = !0
      } finally {
        if (Wq && (Aq._renderables.sort(lq), Aq._renderableVersion++, Aq._materialEpoch++, Aq._built && Aq._frameGraph.build()), void 0 === Eq && aq && !Nq && (Aq._lightListVersion ?? 0) === cq) {
          const qq = Aq._pendingTopologyRetirements?.splice(0);
          qq?.length && Bq(qq), Vq || (Aq._rebuildHook = void 0)
        }
      }
      async function dq() {
        for (const [qq, Yq] of Aq._groups) {
          if (void 0 !== Eq && qq._materialFamily !== Eq) continue;
          if (0 === Yq.length) {
            (Yq.o || Yq.r) && (oq(qq, Yq), Wq = !0);
            continue
          }
          const lq = Aq._runtimeBuilds;
          await (lq?.wait(Yq));
          let Oq = !1;
          const xq = async () => {
            const Eq = Aq._runtimeBuilds,
              gq = [...Yq].filter((Eq => Aq.meshes.includes(Eq) && Eq.material?._buildGroup === qq));
            if (0 === gq.length) return void oq(qq, Yq);
            const mq = !!Yq.r,
              xq = Aq._disposables.length,
              cq = new Map,
              uq = new Map(gq.map((qq => [qq, qq.material])));
            for (const qq of gq) {
              const gq = Aq._meshDisposables.get(qq);
              gq && (cq.set(qq, gq), Aq._meshDisposables.delete(qq), Eq?.holdPendingDisposers(qq, gq))
            }
            let Wq, Nq;
            Aq._p = qq => (Nq = qq, !0);
            try {
              Wq = await qq(Aq, gq)
            } catch (yq) {
              Nq?.[1]();
              for (const lq of gq) {
                const gq = cq.get(lq),
                  Oq = Aq._meshDisposables.get(lq);
                if (Oq && Oq !== gq)
                  for (const qq of Oq) qq();
                const mq = Aq.meshes.includes(lq) && lq.material === uq.get(lq) && lq.material?._buildGroup === qq && Yq.includes(lq);
                gq && mq ? Aq._meshDisposables.set(lq, gq) : (Aq._meshDisposables.delete(lq), gq && Bq(gq)), gq && Eq?.releasePendingDisposers(lq, gq)
              }
              throw yq
            } finally {
              delete Aq._p
            }
            if (Aq._z || lq?._d()) {
              Nq?.[1]();
              for (const Eq of gq) {
                const qq = Aq._meshDisposables.get(Eq),
                  gq = cq.get(Eq);
                if (qq && qq !== gq)
                  for (const Eq of qq) Eq();
                Aq._meshDisposables.delete(Eq)
              }
              for (const Eq of Aq._disposables.splice(0)) Eq();
              const qq = [...cq.values()].flat();
              Bq(qq);
              for (const [gq, Yq] of cq) Eq?.releasePendingDisposers(gq, Yq);
              return
            }
            Nq?.[0](), qq._rebuildSingle = Wq.rebuildSingle, Yq.r = Aq._runtimeBuilds?.base(qq, Wq.rebuildSingle) ?? Wq.rebuildSingle, "pbr" === qq._materialFamily && Wq._G && (Yq._w = null), mq && Pq(Aq, xq);
            const aq = new Set(gq.filter((Eq => Aq.meshes.includes(Eq) && Eq.material === uq.get(Eq) && Eq.material?._buildGroup === qq && Yq.includes(Eq))));
            if (aq.size !== gq.length && Wq.renderables.some((qq => !qq.mesh))) {
              for (const qq of gq) {
                const gq = Aq._meshDisposables.get(qq),
                  Yq = cq.get(qq);
                if (gq && gq !== Yq)
                  for (const qq of gq) qq();
                Yq && Aq.meshes.includes(qq) ? Aq._meshDisposables.set(qq, Yq) : (Aq._meshDisposables.delete(qq), Yq && Bq(Yq)), Yq && Eq?.releasePendingDisposers(qq, Yq)
              }
              return void(Oq = !0)
            }
            const Vq = new Set;
            for (const qq of gq)
              if (aq.has(qq)) Vq.add(qq.material), Aq._runtimeBuilds?.reset(qq);
              else {
                const gq = cq.get(qq),
                  Yq = Aq._meshDisposables.get(qq);
                if (Yq && Yq !== gq)
                  for (const qq of Yq) qq();
                gq && Aq.meshes.includes(qq) ? (Aq._meshDisposables.set(qq, gq), cq.delete(qq), Eq?.releasePendingDisposers(qq, gq)) : Aq._meshDisposables.delete(qq)
              } for (const qq of Vq) qq._csmGen = (qq._csmGen ?? 0) + 1;
            const dq = Yq.o,
              jq = dq?.length ? new Set(dq) : null;
            for (let qq = Aq._renderables.length - 1; qq >= 0; qq--) {
              const Eq = Aq._renderables[qq];
              (aq.has(Eq.mesh) || jq?.has(Eq)) && Aq._renderables.splice(qq, 1)
            }
            const Hq = Wq.renderables.filter((qq => !qq.mesh || aq.has(qq.mesh)));
            Aq._renderables.push(...Hq), Yq.o = Hq;
            const Qq = [...cq.values()].flat();
            Bq(Qq);
            for (const [qq, Yq] of cq) Eq?.releasePendingDisposers(qq, Yq)
          }, {
            X: cq
          } = await Promise.resolve().then((() => gq(61241))), uq = 3;
          for (let Eq = 1;; Eq++) {
            if (Oq = !1, await cq(Aq, qq, xq), Aq._z || lq?._d()) return void(Nq = !0);
            if (!Oq) break;
            if (Eq >= uq) {
              oq(qq, Yq), Aq._rebuildHook = mq, Vq = !0, Nq = !0;
              break
            }
          }
          Oq ? Wq = !0 : Wq = !0
        }
      }

      function jq(qq) {
        for (const Eq of qq.meshes) {
          const gq = Eq.material?._buildGroup;
          if (gq && !qq._groups.get(gq)?.includes(Eq)) return !0
        }
        return !1
      }

      function Hq(qq) {
        const Eq = new Map;
        for (const gq of qq.meshes) {
          const qq = gq.material?._buildGroup;
          if (!qq) continue;
          const Yq = Eq.get(qq);
          Yq ? Yq.push(gq) : Eq.set(qq, [gq])
        }
        for (const [gq, Yq] of qq._groups) {
          const qq = Eq.get(gq) ?? [];
          (Yq.length !== qq.length || qq.some(((qq, Eq) => Yq[Eq] !== qq))) && (Yq.length = 0, Yq.push(...qq)), Eq.delete(gq)
        }
        for (const [gq, Yq] of Eq) {
          const Eq = Yq;
          qq._groups.set(gq, Eq)
        }
      }

      function oq(qq, Eq) {
        const gq = Eq.o;
        if (gq?.length) {
          const qq = new Set(gq);
          for (let Eq = Aq._renderables.length - 1; Eq >= 0; Eq--) qq.has(Aq._renderables[Eq]) && Aq._renderables.splice(Eq, 1)
        }
        Eq.o = void 0, Eq.r = void 0, Aq._runtimeBuilds?.dropBase(qq), Aq._rebuildHook = mq, Vq = !0
      }

      function Pq(qq, Eq) {
        const gq = new Set(qq._disposables.slice(0, Eq));
        for (let Yq = qq._disposables.length - 1; Yq >= Eq; Yq--) gq.has(qq._disposables[Yq]) && qq._disposables.splice(Yq, 1)
      }
    }
  }
};
Object.freeze(modules);
for (const qq in modules) Object.freeze(modules[qq]);