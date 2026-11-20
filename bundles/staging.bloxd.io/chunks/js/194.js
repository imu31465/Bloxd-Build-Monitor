export const id = 194;
export const ids = [194];
export const modules = {
  9057: (UU, RU, gU) => {
    gU.r(RU), gU.d(RU, {
      packDisplayName: () => CU,
      packModelMessage: () => hU,
      packModelSummary: () => eU,
      refusedPackModels: () => QU
    });
    var tU = gU(9062),
      pU = gU(9067);
    const EU = "DRACO",
      PU = 0,
      TU = 1,
      qU = 0,
      KU = 1,
      cU = 32768;

    function GU(UU) {
      const RU = new DataView(UU.buffer, UU.byteOffset, UU.byteLength);
      let gU = 0;
      const tU = () => {
          if (gU >= UU.byteLength) throw new RangeError("past the stream");
          return UU[gU++]
        },
        pU = () => {
          if (gU + 4 > UU.byteLength) throw new RangeError("past the stream");
          const tU = RU.getUint32(gU, !0);
          return gU += 4, tU
        },
        GU = () => {
          let UU = 0;
          for (let RU = 0; RU < 35; RU += 7) {
            const gU = tU();
            if (UU += (127 & gU) * 2 ** RU, 0 === (128 & gU)) return UU
          }
          throw new RangeError("varint too long")
        };
      try {
        for (let UU = 0; UU < EU.length; UU++)
          if (tU() !== EU.charCodeAt(UU)) return null;
        const RU = tU(),
          jU = tU(),
          uU = tU(),
          CU = tU(),
          hU = tU() | tU() << 8;
        if (2 !== RU) return null;
        0 !== (hU & cU) && function(UU, RU, gU) {
          const tU = () => {
              RU(gU())
            },
            pU = () => {
              let gU = 1,
                pU = !0;
              for (; gU > 0;) {
                gU--, pU || tU(), pU = !1;
                const EU = UU();
                for (let gU = 0; gU < EU; gU++) tU(), RU(UU());
                gU += UU()
              }
            },
            EU = UU();
          for (let PU = 0; PU < EU; PU++) UU(), pU();
          pU()
        }(GU, (RU => {
          if (gU + RU > UU.byteLength) throw new RangeError("past the stream");
          gU += RU
        }), tU);
        const QU = jU < 2 ? pU : GU;
        if (uU === PU) return {
          faces: 0,
          vertices: pU()
        };
        if (uU !== TU) return null;
        if (CU === qU) {
          return {
            faces: QU(),
            vertices: QU()
          }
        }
        if (CU !== KU) return null;
        tU(), jU < 2 && GU();
        const eU = GU();
        return {
          faces: GU(),
          vertices: eU
        }
      } catch {
        return null
      }
    }

    function jU(UU, RU, gU) {
      var tU, pU;
      if (null === (tU = null === (pU = UU.extensionsUsed) || void 0 === pU ? void 0 : pU.includes("KHR_draco_mesh_compression")) || void 0 === tU || !tU) return null;
      for (const CU of null !== (EU = UU.meshes) && void 0 !== EU ? EU : []) {
        var EU;
        for (const tU of CU.primitives) {
          var PU, TU, qU, KU, cU, jU;
          const pU = null === (PU = tU.extensions) || void 0 === PU ? void 0 : PU.KHR_draco_mesh_compression;
          if ("object" !== typeof pU || null === pU) continue;
          const EU = null === (TU = UU.bufferViews) || void 0 === TU ? void 0 : TU[pU.bufferView];
          if (null === RU || void 0 === EU) return uU;
          const CU = null !== (qU = EU.byteOffset) && void 0 !== qU ? qU : 0,
            hU = GU(RU.subarray(CU, CU + EU.byteLength));
          if (null === hU && !gU) continue;
          const QU = null !== (KU = UU.accessors) && void 0 !== KU ? KU : [],
            eU = null === (cU = QU[tU.attributes.POSITION]) || void 0 === cU ? void 0 : cU.count,
            WU = void 0 === tU.indices ? 0 : null === (jU = QU[tU.indices]) || void 0 === jU ? void 0 : jU.count;
          if (null === hU || void 0 === eU || void 0 === WU || 3 * hU.faces !== WU || hU.vertices > eU) return uU
        }
      }
      return null
    }
    const uU = "has a Draco stream whose counts don't match its accessors";

    function CU(UU) {
      var RU;
      return null !== (RU = UU.name) && void 0 !== RU ? RU : UU.fromFolderName || UU.id
    }

    function hU(UU, RU, gU) {
      return `Texture pack "${UU}": model "${RU}" was not loaded because it ${gU}. The default model is used instead.`
    }

    function QU(UU, RU, gU) {
      let {
        strictDraco: EU = !1
      } = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
      const PU = {};
      for (const [TU, qU] of Object.entries(RU)) {
        let RU;
        if (qU.startsWith("data:")) try {
          const UU = new Uint8Array((0, pU.p)(qU));
          if (RU = (0, tU.b)(UU), null === RU) {
            const {
              json: gU,
              bin: tU
            } = (0, pU.u)(UU);
            RU = jU(gU, tU, EU)
          }
        } catch {
          RU = "is not a binary glTF 2.0 file"
        } else RU = "loads data from outside the file";
        RU && (PU[TU] = RU, gU && console.warn(hU(UU, TU, RU)))
      }
      return PU
    }

    function eU(UU, RU) {
      const gU = Object.keys(RU);
      if (0 === gU.length) return null;
      if (1 === gU.length) return hU(UU, gU[0], RU[gU[0]]);
      const tU = gU.map((UU => `"${UU}" ${RU[UU]}`)).join("; ");
      return `Texture pack "${UU}": ${gU.length} models were not loaded (${tU}). The default models are used instead.`
    }
  }
};
Object.freeze(modules);
for (const UU in modules) Object.freeze(modules[UU]);