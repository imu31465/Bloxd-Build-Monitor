export const id = 229;
export const ids = [229];
export const modules = {
  35106: (MM, rM, iM) => {
    iM.r(rM), iM.d(rM, {
      packDisplayName: () => hM,
      packModelMessage: () => JM,
      packModelSummary: () => yM,
      refusedPackModels: () => dM
    });
    var OM = iM(35113),
      SM = iM(35120);
    const jM = "DRACO",
      aM = 0,
      PM = 1,
      nM = 0,
      QM = 1,
      zM = 32768;

    function LM(MM) {
      const rM = new DataView(MM.buffer, MM.byteOffset, MM.byteLength);
      let iM = 0;
      const OM = () => {
          if (iM >= MM.byteLength) throw new RangeError("past the stream");
          return MM[iM++]
        },
        SM = () => {
          if (iM + 4 > MM.byteLength) throw new RangeError("past the stream");
          const OM = rM.getUint32(iM, !0);
          return iM += 4, OM
        },
        LM = () => {
          let MM = 0;
          for (let rM = 0; rM < 35; rM += 7) {
            const iM = OM();
            if (MM += (127 & iM) * 2 ** rM, 0 === (128 & iM)) return MM
          }
          throw new RangeError("varint too long")
        };
      try {
        for (let MM = 0; MM < jM.length; MM++)
          if (OM() !== jM.charCodeAt(MM)) return null;
        const rM = OM(),
          mM = OM(),
          HM = OM(),
          hM = OM(),
          JM = OM() | OM() << 8;
        if (2 !== rM) return null;
        0 !== (JM & zM) && function(MM, rM, iM) {
          const OM = () => {
              rM(iM())
            },
            SM = () => {
              let iM = 1,
                SM = !0;
              for (; iM > 0;) {
                iM--, SM || OM(), SM = !1;
                const jM = MM();
                for (let iM = 0; iM < jM; iM++) OM(), rM(MM());
                iM += MM()
              }
            },
            jM = MM();
          for (let aM = 0; aM < jM; aM++) MM(), SM();
          SM()
        }(LM, (rM => {
          if (iM + rM > MM.byteLength) throw new RangeError("past the stream");
          iM += rM
        }), OM);
        const dM = mM < 2 ? SM : LM;
        if (HM === aM) return {
          faces: 0,
          vertices: SM()
        };
        if (HM !== PM) return null;
        if (hM === nM) {
          return {
            faces: dM(),
            vertices: dM()
          }
        }
        if (hM !== QM) return null;
        OM(), mM < 2 && LM();
        const yM = LM();
        return {
          faces: LM(),
          vertices: yM
        }
      } catch {
        return null
      }
    }

    function mM(MM, rM, iM) {
      var OM, SM;
      if (null === (OM = null === (SM = MM.extensionsUsed) || void 0 === SM ? void 0 : SM.includes("KHR_draco_mesh_compression")) || void 0 === OM || !OM) return null;
      for (const hM of null !== (jM = MM.meshes) && void 0 !== jM ? jM : []) {
        var jM;
        for (const OM of hM.primitives) {
          var aM, PM, nM, QM, zM, mM;
          const SM = null === (aM = OM.extensions) || void 0 === aM ? void 0 : aM.KHR_draco_mesh_compression;
          if ("object" !== typeof SM || null === SM) continue;
          const jM = null === (PM = MM.bufferViews) || void 0 === PM ? void 0 : PM[SM.bufferView];
          if (null === rM || void 0 === jM) return HM;
          const hM = null !== (nM = jM.byteOffset) && void 0 !== nM ? nM : 0,
            JM = LM(rM.subarray(hM, hM + jM.byteLength));
          if (null === JM && !iM) continue;
          const dM = null !== (QM = MM.accessors) && void 0 !== QM ? QM : [],
            yM = null === (zM = dM[OM.attributes.POSITION]) || void 0 === zM ? void 0 : zM.count,
            lM = void 0 === OM.indices ? 0 : null === (mM = dM[OM.indices]) || void 0 === mM ? void 0 : mM.count;
          if (null === JM || void 0 === yM || void 0 === lM || 3 * JM.faces !== lM || JM.vertices > yM) return HM
        }
      }
      return null
    }
    const HM = "has a Draco stream whose counts don't match its accessors";

    function hM(MM) {
      var rM;
      return null !== (rM = MM.name) && void 0 !== rM ? rM : MM.fromFolderName || MM.id
    }

    function JM(MM, rM, iM) {
      return `Texture pack "${MM}": model "${rM}" was not loaded because it ${iM}. The default model is used instead.`
    }

    function dM(MM, rM, iM) {
      let {
        strictDraco: jM = !1
      } = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
      const aM = {};
      for (const [PM, nM] of Object.entries(rM)) {
        let rM;
        if (nM.startsWith("data:")) try {
          const MM = new Uint8Array((0, SM.v)(nM));
          if (rM = (0, OM.c)(MM), null === rM) {
            const {
              json: iM,
              bin: OM
            } = (0, SM.E)(MM);
            rM = mM(iM, OM, jM)
          }
        } catch {
          rM = "is not a binary glTF 2.0 file"
        } else rM = "loads data from outside the file";
        rM && (aM[PM] = rM, iM && console.warn(JM(MM, PM, rM)))
      }
      return aM
    }

    function yM(MM, rM) {
      const iM = Object.keys(rM);
      if (0 === iM.length) return null;
      if (1 === iM.length) return JM(MM, iM[0], rM[iM[0]]);
      const OM = iM.map((MM => `"${MM}" ${rM[MM]}`)).join("; ");
      return `Texture pack "${MM}": ${iM.length} models were not loaded (${OM}). The default models are used instead.`
    }
  }
};
Object.freeze(modules);
for (const MM in modules) Object.freeze(modules[MM]);