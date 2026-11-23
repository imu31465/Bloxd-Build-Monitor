export const id = 202;
export const ids = [202];
export const modules = {
  34221: (CC, zC, ZC) => {
    ZC.r(zC), ZC.d(zC, {
      packDisplayName: () => gC,
      packModelMessage: () => SC,
      packModelSummary: () => PC,
      refusedPackModels: () => pC
    });
    var QC = ZC(34223),
      wC = ZC(34228);
    const bC = "DRACO",
      nC = 0,
      fC = 1,
      oC = 0,
      qC = 1,
      FC = 32768;

    function WC(CC) {
      const zC = new DataView(CC.buffer, CC.byteOffset, CC.byteLength);
      let ZC = 0;
      const QC = () => {
          if (ZC >= CC.byteLength) throw new RangeError("past the stream");
          return CC[ZC++]
        },
        wC = () => {
          if (ZC + 4 > CC.byteLength) throw new RangeError("past the stream");
          const QC = zC.getUint32(ZC, !0);
          return ZC += 4, QC
        },
        WC = () => {
          let CC = 0;
          for (let zC = 0; zC < 35; zC += 7) {
            const ZC = QC();
            if (CC += (127 & ZC) * 2 ** zC, 0 === (128 & ZC)) return CC
          }
          throw new RangeError("varint too long")
        };
      try {
        for (let CC = 0; CC < bC.length; CC++)
          if (QC() !== bC.charCodeAt(CC)) return null;
        const zC = QC(),
          NC = QC(),
          MC = QC(),
          gC = QC(),
          SC = QC() | QC() << 8;
        if (2 !== zC) return null;
        0 !== (SC & FC) && function(CC, zC, ZC) {
          const QC = () => {
              zC(ZC())
            },
            wC = () => {
              let ZC = 1,
                wC = !0;
              for (; ZC > 0;) {
                ZC--, wC || QC(), wC = !1;
                const bC = CC();
                for (let ZC = 0; ZC < bC; ZC++) QC(), zC(CC());
                ZC += CC()
              }
            },
            bC = CC();
          for (let nC = 0; nC < bC; nC++) CC(), wC();
          wC()
        }(WC, (zC => {
          if (ZC + zC > CC.byteLength) throw new RangeError("past the stream");
          ZC += zC
        }), QC);
        const pC = NC < 2 ? wC : WC;
        if (MC === nC) return {
          faces: 0,
          vertices: wC()
        };
        if (MC !== fC) return null;
        if (gC === oC) {
          return {
            faces: pC(),
            vertices: pC()
          }
        }
        if (gC !== qC) return null;
        QC(), NC < 2 && WC();
        const PC = WC();
        return {
          faces: WC(),
          vertices: PC
        }
      } catch {
        return null
      }
    }

    function NC(CC, zC, ZC) {
      var QC, wC;
      if (null === (QC = null === (wC = CC.extensionsUsed) || void 0 === wC ? void 0 : wC.includes("KHR_draco_mesh_compression")) || void 0 === QC || !QC) return null;
      for (const gC of null !== (bC = CC.meshes) && void 0 !== bC ? bC : []) {
        var bC;
        for (const QC of gC.primitives) {
          var nC, fC, oC, qC, FC, NC;
          const wC = null === (nC = QC.extensions) || void 0 === nC ? void 0 : nC.KHR_draco_mesh_compression;
          if ("object" !== typeof wC || null === wC) continue;
          const bC = null === (fC = CC.bufferViews) || void 0 === fC ? void 0 : fC[wC.bufferView];
          if (null === zC || void 0 === bC) return MC;
          const gC = null !== (oC = bC.byteOffset) && void 0 !== oC ? oC : 0,
            SC = WC(zC.subarray(gC, gC + bC.byteLength));
          if (null === SC && !ZC) continue;
          const pC = null !== (qC = CC.accessors) && void 0 !== qC ? qC : [],
            PC = null === (FC = pC[QC.attributes.POSITION]) || void 0 === FC ? void 0 : FC.count,
            GC = void 0 === QC.indices ? 0 : null === (NC = pC[QC.indices]) || void 0 === NC ? void 0 : NC.count;
          if (null === SC || void 0 === PC || void 0 === GC || 3 * SC.faces !== GC || SC.vertices > PC) return MC
        }
      }
      return null
    }
    const MC = "has a Draco stream whose counts don't match its accessors";

    function gC(CC) {
      var zC;
      return null !== (zC = CC.name) && void 0 !== zC ? zC : CC.fromFolderName || CC.id
    }

    function SC(CC, zC, ZC) {
      return `Texture pack "${CC}": model "${zC}" was not loaded because it ${ZC}. The default model is used instead.`
    }

    function pC(CC, zC, ZC) {
      let {
        strictDraco: bC = !1
      } = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
      const nC = {};
      for (const [fC, oC] of Object.entries(zC)) {
        let zC;
        if (oC.startsWith("data:")) try {
          const CC = new Uint8Array((0, wC.s)(oC));
          if (zC = (0, QC.d)(CC), null === zC) {
            const {
              json: ZC,
              bin: QC
            } = (0, wC.x)(CC);
            zC = NC(ZC, QC, bC)
          }
        } catch {
          zC = "is not a binary glTF 2.0 file"
        } else zC = "loads data from outside the file";
        zC && (nC[fC] = zC, ZC && console.warn(SC(CC, fC, zC)))
      }
      return nC
    }

    function PC(CC, zC) {
      const ZC = Object.keys(zC);
      if (0 === ZC.length) return null;
      if (1 === ZC.length) return SC(CC, ZC[0], zC[ZC[0]]);
      const QC = ZC.map((CC => `"${CC}" ${zC[CC]}`)).join("; ");
      return `Texture pack "${CC}": ${ZC.length} models were not loaded (${QC}). The default models are used instead.`
    }
  }
};
Object.freeze(modules);
for (const CC in modules) Object.freeze(modules[CC]);