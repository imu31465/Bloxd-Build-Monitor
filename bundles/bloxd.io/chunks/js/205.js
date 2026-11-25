export const id = 205;
export const ids = [205];
export const modules = {
  34549: (GG, bG, ZG) => {
    ZG.r(bG), ZG.d(bG, {
      packDisplayName: () => KG,
      packModelMessage: () => hG,
      packModelSummary: () => JG,
      refusedPackModels: () => dG
    });
    var wG = ZG(34555),
      SG = ZG(34560);
    const LG = "DRACO",
      yG = 0,
      kG = 1,
      UG = 0,
      YG = 1,
      VG = 32768;

    function pG(GG) {
      const bG = new DataView(GG.buffer, GG.byteOffset, GG.byteLength);
      let ZG = 0;
      const wG = () => {
          if (ZG >= GG.byteLength) throw new RangeError("past the stream");
          return GG[ZG++]
        },
        SG = () => {
          if (ZG + 4 > GG.byteLength) throw new RangeError("past the stream");
          const wG = bG.getUint32(ZG, !0);
          return ZG += 4, wG
        },
        pG = () => {
          let GG = 0;
          for (let bG = 0; bG < 35; bG += 7) {
            const ZG = wG();
            if (GG += (127 & ZG) * 2 ** bG, 0 === (128 & ZG)) return GG
          }
          throw new RangeError("varint too long")
        };
      try {
        for (let GG = 0; GG < LG.length; GG++)
          if (wG() !== LG.charCodeAt(GG)) return null;
        const bG = wG(),
          fG = wG(),
          QG = wG(),
          KG = wG(),
          hG = wG() | wG() << 8;
        if (2 !== bG) return null;
        0 !== (hG & VG) && function(GG, bG, ZG) {
          const wG = () => {
              bG(ZG())
            },
            SG = () => {
              let ZG = 1,
                SG = !0;
              for (; ZG > 0;) {
                ZG--, SG || wG(), SG = !1;
                const LG = GG();
                for (let ZG = 0; ZG < LG; ZG++) wG(), bG(GG());
                ZG += GG()
              }
            },
            LG = GG();
          for (let yG = 0; yG < LG; yG++) GG(), SG();
          SG()
        }(pG, (bG => {
          if (ZG + bG > GG.byteLength) throw new RangeError("past the stream");
          ZG += bG
        }), wG);
        const dG = fG < 2 ? SG : pG;
        if (QG === yG) return {
          faces: 0,
          vertices: SG()
        };
        if (QG !== kG) return null;
        if (KG === UG) {
          return {
            faces: dG(),
            vertices: dG()
          }
        }
        if (KG !== YG) return null;
        wG(), fG < 2 && pG();
        const JG = pG();
        return {
          faces: pG(),
          vertices: JG
        }
      } catch {
        return null
      }
    }

    function fG(GG, bG, ZG) {
      var wG, SG;
      if (null === (wG = null === (SG = GG.extensionsUsed) || void 0 === SG ? void 0 : SG.includes("KHR_draco_mesh_compression")) || void 0 === wG || !wG) return null;
      for (const KG of null !== (LG = GG.meshes) && void 0 !== LG ? LG : []) {
        var LG;
        for (const wG of KG.primitives) {
          var yG, kG, UG, YG, VG, fG;
          const SG = null === (yG = wG.extensions) || void 0 === yG ? void 0 : yG.KHR_draco_mesh_compression;
          if ("object" !== typeof SG || null === SG) continue;
          const LG = null === (kG = GG.bufferViews) || void 0 === kG ? void 0 : kG[SG.bufferView];
          if (null === bG || void 0 === LG) return QG;
          const KG = null !== (UG = LG.byteOffset) && void 0 !== UG ? UG : 0,
            hG = pG(bG.subarray(KG, KG + LG.byteLength));
          if (null === hG && !ZG) continue;
          const dG = null !== (YG = GG.accessors) && void 0 !== YG ? YG : [],
            JG = null === (VG = dG[wG.attributes.POSITION]) || void 0 === VG ? void 0 : VG.count,
            rG = void 0 === wG.indices ? 0 : null === (fG = dG[wG.indices]) || void 0 === fG ? void 0 : fG.count;
          if (null === hG || void 0 === JG || void 0 === rG || 3 * hG.faces !== rG || hG.vertices > JG) return QG
        }
      }
      return null
    }
    const QG = "has a Draco stream whose counts don't match its accessors";

    function KG(GG) {
      var bG;
      return null !== (bG = GG.name) && void 0 !== bG ? bG : GG.fromFolderName || GG.id
    }

    function hG(GG, bG, ZG) {
      return `Texture pack "${GG}": model "${bG}" was not loaded because it ${ZG}. The default model is used instead.`
    }

    function dG(GG, bG, ZG) {
      let {
        strictDraco: LG = !1
      } = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
      const yG = {};
      for (const [kG, UG] of Object.entries(bG)) {
        let bG;
        if (UG.startsWith("data:")) try {
          const GG = new Uint8Array((0, SG.s)(UG));
          if (bG = (0, wG.c)(GG), null === bG) {
            const {
              json: ZG,
              bin: wG
            } = (0, SG.w)(GG);
            bG = fG(ZG, wG, LG)
          }
        } catch {
          bG = "is not a binary glTF 2.0 file"
        } else bG = "loads data from outside the file";
        bG && (yG[kG] = bG, ZG && console.warn(hG(GG, kG, bG)))
      }
      return yG
    }

    function JG(GG, bG) {
      const ZG = Object.keys(bG);
      if (0 === ZG.length) return null;
      if (1 === ZG.length) return hG(GG, ZG[0], bG[ZG[0]]);
      const wG = ZG.map((GG => `"${GG}" ${bG[GG]}`)).join("; ");
      return `Texture pack "${GG}": ${ZG.length} models were not loaded (${wG}). The default models are used instead.`
    }
  }
};
Object.freeze(modules);
for (const GG in modules) Object.freeze(modules[GG]);