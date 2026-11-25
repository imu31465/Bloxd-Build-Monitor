export const id = 54;
export const ids = [54];
export const modules = {
  38926: (QQ, WQ, XQ) => {
    XQ.r(WQ), XQ.d(WQ, {
      SkyblockEntityFacing: () => sQ,
      needsSkyblockEntityFacing: () => zQ
    });
    var wQ = XQ(658),
      qQ = XQ(4534),
      TQ = XQ(38928);

    function zQ(QQ, WQ) {
      if (QQ.metaInfo === wQ.b || "Iron Guardian" === QQ.type || "Gold Guardian" === QQ.type) return !0;
      if ("Pig" === QQ.type) return "sitting" === QQ.pose;
      if ("Person" !== QQ.meshKind || void 0 === QQ.meshOpts) return !1;
      let XQ = null === WQ || void 0 === WQ ? void 0 : WQ.get(QQ.meshOpts);
      if (void 0 === XQ) {
        var TQ, zQ;
        const wQ = (0, qQ.e)(QQ);
        XQ = !1, "pig_napoleon" === (null === wQ || void 0 === wQ || null === (TQ = wQ.opts.textures) || void 0 === TQ ? void 0 : TQ.head) ? XQ = !0 : "npc_pig_head" === (null === wQ || void 0 === wQ || null === (zQ = wQ.opts.textures) || void 0 === zQ ? void 0 : zQ.head) && (XQ = "sitting" === wQ.opts.pose || "sitting"), WQ && (WQ.size >= 256 && WQ.clear(), WQ.set(QQ.meshOpts, XQ))
      }
      return "sitting" === XQ ? "sitting" === QQ.pose : XQ
    }(0, TQ.e)("skyblock", ((QQ, WQ) => {
      WQ.setFacingTolerance(zQ(QQ) ? 0 : null)
    }));
    class sQ {
      constructor(QQ) {
        let WQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        this.api = QQ, this.alsoVisit = WQ, this.facing = new Set, this.nextFacing = new Set, this.meshFacingCache = new Map, this.visit = QQ => {
          var WQ;
          const XQ = this.api.getEntityInfo(QQ);
          XQ && (zQ(XQ, this.meshFacingCache) && (this.api.setFacingTolerance(QQ, 0), this.nextFacing.add(QQ)), null === (WQ = this.alsoVisit) || void 0 === WQ || WQ.call(this, QQ, XQ))
        }
      }
      fJ() {
        const {
          api: QQ
        } = this, WQ = this.nextFacing;
        QQ.forEachEntity(this.visit);
        for (const XQ of this.facing) WQ.has(XQ) || QQ.setFacingTolerance(XQ, null);
        this.facing.clear(), this.nextFacing = this.facing, this.facing = WQ
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