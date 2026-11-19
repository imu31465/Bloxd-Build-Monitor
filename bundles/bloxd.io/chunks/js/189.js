export const id = 189;
export const ids = [189];
export const modules = {
  8799: (TT, oT, IT) => {
    IT.r(oT), IT.d(oT, {
      packDisplayName: () => cT,
      packModelMessage: () => KT,
      packModelSummary: () => rT,
      refusedPackModels: () => MT
    });
    var iT = IT(8801),
      zT = IT(8805);
    const kT = "DRACO",
      WT = 0,
      XT = 1,
      BT = 0,
      FT = 1,
      ST = 32768;

    function DT(TT) {
      const oT = new DataView(TT.buffer, TT.byteOffset, TT.byteLength);
      let IT = 0;
      const iT = () => {
          if (IT >= TT.byteLength) throw new RangeError("past the stream");
          return TT[IT++]
        },
        zT = () => {
          if (IT + 4 > TT.byteLength) throw new RangeError("past the stream");
          const iT = oT.getUint32(IT, !0);
          return IT += 4, iT
        },
        DT = () => {
          let TT = 0;
          for (let oT = 0; oT < 35; oT += 7) {
            const IT = iT();
            if (TT += (127 & IT) * 2 ** oT, 0 === (128 & IT)) return TT
          }
          throw new RangeError("varint too long")
        };
      try {
        for (let TT = 0; TT < kT.length; TT++)
          if (iT() !== kT.charCodeAt(TT)) return null;
        const oT = iT(),
          LT = iT(),
          xT = iT(),
          cT = iT(),
          KT = iT() | iT() << 8;
        if (2 !== oT) return null;
        0 !== (KT & ST) && function(TT, oT, IT) {
          const iT = () => {
              oT(IT())
            },
            zT = () => {
              let IT = 1,
                zT = !0;
              for (; IT > 0;) {
                IT--, zT || iT(), zT = !1;
                const kT = TT();
                for (let IT = 0; IT < kT; IT++) iT(), oT(TT());
                IT += TT()
              }
            },
            kT = TT();
          for (let WT = 0; WT < kT; WT++) TT(), zT();
          zT()
        }(DT, (oT => {
          if (IT + oT > TT.byteLength) throw new RangeError("past the stream");
          IT += oT
        }), iT);
        const MT = LT < 2 ? zT : DT;
        if (xT === WT) return {
          faces: 0,
          vertices: zT()
        };
        if (xT !== XT) return null;
        if (cT === BT) {
          return {
            faces: MT(),
            vertices: MT()
          }
        }
        if (cT !== FT) return null;
        iT(), LT < 2 && DT();
        const rT = DT();
        return {
          faces: DT(),
          vertices: rT
        }
      } catch {
        return null
      }
    }

    function LT(TT, oT, IT) {
      var iT, zT;
      if (null === (iT = null === (zT = TT.extensionsUsed) || void 0 === zT ? void 0 : zT.includes("KHR_draco_mesh_compression")) || void 0 === iT || !iT) return null;
      for (const cT of null !== (kT = TT.meshes) && void 0 !== kT ? kT : []) {
        var kT;
        for (const iT of cT.primitives) {
          var WT, XT, BT, FT, ST, LT;
          const zT = null === (WT = iT.extensions) || void 0 === WT ? void 0 : WT.KHR_draco_mesh_compression;
          if ("object" !== typeof zT || null === zT) continue;
          const kT = null === (XT = TT.bufferViews) || void 0 === XT ? void 0 : XT[zT.bufferView];
          if (null === oT || void 0 === kT) return xT;
          const cT = null !== (BT = kT.byteOffset) && void 0 !== BT ? BT : 0,
            KT = DT(oT.subarray(cT, cT + kT.byteLength));
          if (null === KT && !IT) continue;
          const MT = null !== (FT = TT.accessors) && void 0 !== FT ? FT : [],
            rT = null === (ST = MT[iT.attributes.POSITION]) || void 0 === ST ? void 0 : ST.count,
            AT = void 0 === iT.indices ? 0 : null === (LT = MT[iT.indices]) || void 0 === LT ? void 0 : LT.count;
          if (null === KT || void 0 === rT || void 0 === AT || 3 * KT.faces !== AT || KT.vertices > rT) return xT
        }
      }
      return null
    }
    const xT = "has a Draco stream whose counts don't match its accessors";

    function cT(TT) {
      var oT;
      return null !== (oT = TT.name) && void 0 !== oT ? oT : TT.fromFolderName || TT.id
    }

    function KT(TT, oT, IT) {
      return `Texture pack "${TT}": model "${oT}" was not loaded because it ${IT}. The default model is used instead.`
    }

    function MT(TT, oT, IT) {
      let {
        strictDraco: kT = !1
      } = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
      const WT = {};
      for (const [XT, BT] of Object.entries(oT)) {
        let oT;
        if (BT.startsWith("data:")) try {
          const TT = new Uint8Array((0, zT.w)(BT));
          if (oT = (0, iT.d)(TT), null === oT) {
            const {
              json: IT,
              bin: iT
            } = (0, zT.B)(TT);
            oT = LT(IT, iT, kT)
          }
        } catch {
          oT = "is not a binary glTF 2.0 file"
        } else oT = "loads data from outside the file";
        oT && (WT[XT] = oT, IT && console.warn(KT(TT, XT, oT)))
      }
      return WT
    }

    function rT(TT, oT) {
      const IT = Object.keys(oT);
      if (0 === IT.length) return null;
      if (1 === IT.length) return KT(TT, IT[0], oT[IT[0]]);
      const iT = IT.map((TT => `"${TT}" ${oT[TT]}`)).join("; ");
      return `Texture pack "${TT}": ${IT.length} models were not loaded (${iT}). The default models are used instead.`
    }
  }
};
Object.freeze(modules);
for (const TT in modules) Object.freeze(modules[TT]);