export const id = 180;
export const ids = [180];
export const modules = {
  8623: (BB, TB, dB) => {
    dB.r(TB), dB.d(TB, {
      packDisplayName: () => DB,
      packModelMessage: () => uB,
      packModelSummary: () => EB,
      refusedPackModels: () => HB
    });
    var VB = dB(8629),
      yB = dB(8634);
    const pB = "DRACO",
      lB = 0,
      JB = 1,
      YB = 0,
      gB = 1,
      oB = 32768;

    function kB(BB) {
      const TB = new DataView(BB.buffer, BB.byteOffset, BB.byteLength);
      let dB = 0;
      const VB = () => {
          if (dB >= BB.byteLength) throw new RangeError("past the stream");
          return BB[dB++]
        },
        yB = () => {
          if (dB + 4 > BB.byteLength) throw new RangeError("past the stream");
          const VB = TB.getUint32(dB, !0);
          return dB += 4, VB
        },
        kB = () => {
          let BB = 0;
          for (let TB = 0; TB < 35; TB += 7) {
            const dB = VB();
            if (BB += (127 & dB) * 2 ** TB, 0 === (128 & dB)) return BB
          }
          throw new RangeError("varint too long")
        };
      try {
        for (let BB = 0; BB < pB.length; BB++)
          if (VB() !== pB.charCodeAt(BB)) return null;
        const TB = VB(),
          LB = VB(),
          OB = VB(),
          DB = VB(),
          uB = VB() | VB() << 8;
        if (2 !== TB) return null;
        0 !== (uB & oB) && function(BB, TB, dB) {
          const VB = () => {
              TB(dB())
            },
            yB = () => {
              let dB = 1,
                yB = !0;
              for (; dB > 0;) {
                dB--, yB || VB(), yB = !1;
                const pB = BB();
                for (let dB = 0; dB < pB; dB++) VB(), TB(BB());
                dB += BB()
              }
            },
            pB = BB();
          for (let lB = 0; lB < pB; lB++) BB(), yB();
          yB()
        }(kB, (TB => {
          if (dB + TB > BB.byteLength) throw new RangeError("past the stream");
          dB += TB
        }), VB);
        const HB = LB < 2 ? yB : kB;
        if (OB === lB) return {
          faces: 0,
          vertices: yB()
        };
        if (OB !== JB) return null;
        if (DB === YB) {
          return {
            faces: HB(),
            vertices: HB()
          }
        }
        if (DB !== gB) return null;
        VB(), LB < 2 && kB();
        const EB = kB();
        return {
          faces: kB(),
          vertices: EB
        }
      } catch {
        return null
      }
    }

    function LB(BB, TB, dB) {
      var VB, yB;
      if (null === (VB = null === (yB = BB.extensionsUsed) || void 0 === yB ? void 0 : yB.includes("KHR_draco_mesh_compression")) || void 0 === VB || !VB) return null;
      for (const DB of null !== (pB = BB.meshes) && void 0 !== pB ? pB : []) {
        var pB;
        for (const VB of DB.primitives) {
          var lB, JB, YB, gB, oB, LB;
          const yB = null === (lB = VB.extensions) || void 0 === lB ? void 0 : lB.KHR_draco_mesh_compression;
          if ("object" !== typeof yB || null === yB) continue;
          const pB = null === (JB = BB.bufferViews) || void 0 === JB ? void 0 : JB[yB.bufferView];
          if (null === TB || void 0 === pB) return OB;
          const DB = null !== (YB = pB.byteOffset) && void 0 !== YB ? YB : 0,
            uB = kB(TB.subarray(DB, DB + pB.byteLength));
          if (null === uB && !dB) continue;
          const HB = null !== (gB = BB.accessors) && void 0 !== gB ? gB : [],
            EB = null === (oB = HB[VB.attributes.POSITION]) || void 0 === oB ? void 0 : oB.count,
            vB = void 0 === VB.indices ? 0 : null === (LB = HB[VB.indices]) || void 0 === LB ? void 0 : LB.count;
          if (null === uB || void 0 === EB || void 0 === vB || 3 * uB.faces !== vB || uB.vertices > EB) return OB
        }
      }
      return null
    }
    const OB = "has a Draco stream whose counts don't match its accessors";

    function DB(BB) {
      var TB;
      return null !== (TB = BB.name) && void 0 !== TB ? TB : BB.fromFolderName || BB.id
    }

    function uB(BB, TB, dB) {
      return `Texture pack "${BB}": model "${TB}" was not loaded because it ${dB}. The default model is used instead.`
    }

    function HB(BB, TB, dB) {
      let {
        strictDraco: pB = !1
      } = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
      const lB = {};
      for (const [JB, YB] of Object.entries(TB)) {
        let TB;
        if (YB.startsWith("data:")) try {
          const BB = new Uint8Array((0, yB.u)(YB));
          if (TB = (0, VB.d)(BB), null === TB) {
            const {
              json: dB,
              bin: VB
            } = (0, yB.y)(BB);
            TB = LB(dB, VB, pB)
          }
        } catch {
          TB = "is not a binary glTF 2.0 file"
        } else TB = "loads data from outside the file";
        TB && (lB[JB] = TB, dB && console.warn(uB(BB, JB, TB)))
      }
      return lB
    }

    function EB(BB, TB) {
      const dB = Object.keys(TB);
      if (0 === dB.length) return null;
      if (1 === dB.length) return uB(BB, dB[0], TB[dB[0]]);
      const VB = dB.map((BB => `"${BB}" ${TB[BB]}`)).join("; ");
      return `Texture pack "${BB}": ${dB.length} models were not loaded (${VB}). The default models are used instead.`
    }
  }
};
Object.freeze(modules);
for (const BB in modules) Object.freeze(modules[BB]);