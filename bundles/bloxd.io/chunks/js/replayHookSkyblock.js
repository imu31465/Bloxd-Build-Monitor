export const id = 50;
export const ids = [50];
export const modules = {
  38166: (QQ, FQ, wQ) => {
    wQ.r(FQ), wQ.d(FQ, {
      SkyblockEntityFacing: () => kQ,
      needsSkyblockEntityFacing: () => DQ
    });
    var LQ = wQ(617),
      qQ = wQ(4119),
      oQ = wQ(38174);

    function DQ(QQ, FQ) {
      if (QQ.metaInfo === LQ.c || "Iron Guardian" === QQ.type || "Gold Guardian" === QQ.type) return !0;
      if ("Pig" === QQ.type) return "sitting" === QQ.pose;
      if ("Person" !== QQ.meshKind || void 0 === QQ.meshOpts) return !1;
      let wQ = null === FQ || void 0 === FQ ? void 0 : FQ.get(QQ.meshOpts);
      if (void 0 === wQ) {
        var oQ, DQ;
        const LQ = (0, qQ.i)(QQ);
        wQ = !1, "pig_napoleon" === (null === LQ || void 0 === LQ || null === (oQ = LQ.opts.textures) || void 0 === oQ ? void 0 : oQ.head) ? wQ = !0 : "npc_pig_head" === (null === LQ || void 0 === LQ || null === (DQ = LQ.opts.textures) || void 0 === DQ ? void 0 : DQ.head) && (wQ = "sitting" === LQ.opts.pose || "sitting"), FQ && (FQ.size >= 256 && FQ.clear(), FQ.set(QQ.meshOpts, wQ))
      }
      return "sitting" === wQ ? "sitting" === QQ.pose : wQ
    }(0, oQ.f)("skyblock", ((QQ, FQ) => {
      FQ.setFacingTolerance(DQ(QQ) ? 0 : null)
    }));
    class kQ {
      constructor(QQ) {
        let FQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        this.api = QQ, this.alsoVisit = FQ, this.facing = new Set, this.nextFacing = new Set, this.meshFacingCache = new Map, this.visit = QQ => {
          var FQ;
          const wQ = this.api.getEntityInfo(QQ);
          wQ && (DQ(wQ, this.meshFacingCache) && (this.api.setFacingTolerance(QQ, 0), this.nextFacing.add(QQ)), null === (FQ = this.alsoVisit) || void 0 === FQ || FQ.call(this, QQ, wQ))
        }
      }
      fH() {
        const {
          api: QQ
        } = this, FQ = this.nextFacing;
        QQ.forEachEntity(this.visit);
        for (const wQ of this.facing) FQ.has(wQ) || QQ.setFacingTolerance(wQ, null);
        this.facing.clear(), this.nextFacing = this.facing, this.facing = FQ
      }
      dispose() {
        for (const QQ of this.facing) this.api.setFacingTolerance(QQ, null);
        this.facing.clear(), this.meshFacingCache.clear()
      }
    }
  }
};
Object.freeze(modules);
for (const QQ in modules) Object.freeze(modules[QQ]);