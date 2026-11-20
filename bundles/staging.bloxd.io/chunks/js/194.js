export const id = 194;
export const ids = [194];
export const modules = {
  9423: (TT, kT, cT) => {
    cT.r(kT), cT.d(kT, {
      packDisplayName: () => vT,
      packModelMessage: () => tT,
      packModelSummary: () => NT,
      refusedPackModels: () => hT
    });
    var lT = cT(9429),
      MT = cT(9438);
    const KT = "DRACO",
      OT = 0,
      yT = 1,
      fT = 0,
      xT = 1,
      IT = 32768;

    function AT(TT) {
      const kT = new DataView(TT.buffer, TT.byteOffset, TT.byteLength);
      let cT = 0;
      const lT = () => {
          if (cT >= TT.byteLength) throw new RangeError("past the stream");
          return TT[cT++]
        },
        MT = () => {
          if (cT + 4 > TT.byteLength) throw new RangeError("past the stream");
          const lT = kT.getUint32(cT, !0);
          return cT += 4, lT
        },
        AT = () => {
          let TT = 0;
          for (let kT = 0; kT < 35; kT += 7) {
            const cT = lT();
            if (TT += (127 & cT) * 2 ** kT, 0 === (128 & cT)) return TT
          }
          throw new RangeError("varint too long")
        };
      try {
        for (let TT = 0; TT < KT.length; TT++)
          if (lT() !== KT.charCodeAt(TT)) return null;
        const kT = lT(),
          CT = lT(),
          jT = lT(),
          vT = lT(),
          tT = lT() | lT() << 8;
        if (2 !== kT) return null;
        0 !== (tT & IT) && function(TT, kT, cT) {
          const lT = () => {
              kT(cT())
            },
            MT = () => {
              let cT = 1,
                MT = !0;
              for (; cT > 0;) {
                cT--, MT || lT(), MT = !1;
                const KT = TT();
                for (let cT = 0; cT < KT; cT++) lT(), kT(TT());
                cT += TT()
              }
            },
            KT = TT();
          for (let OT = 0; OT < KT; OT++) TT(), MT();
          MT()
        }(AT, (kT => {
          if (cT + kT > TT.byteLength) throw new RangeError("past the stream");
          cT += kT
        }), lT);
        const hT = CT < 2 ? MT : AT;
        if (jT === OT) return {
          faces: 0,
          vertices: MT()
        };
        if (jT !== yT) return null;
        if (vT === fT) {
          return {
            faces: hT(),
            vertices: hT()
          }
        }
        if (vT !== xT) return null;
        lT(), CT < 2 && AT();
        const NT = AT();
        return {
          faces: AT(),
          vertices: NT
        }
      } catch {
        return null
      }
    }

    function CT(TT, kT, cT) {
      var lT, MT;
      if (null === (lT = null === (MT = TT.extensionsUsed) || void 0 === MT ? void 0 : MT.includes("KHR_draco_mesh_compression")) || void 0 === lT || !lT) return null;
      for (const vT of null !== (KT = TT.meshes) && void 0 !== KT ? KT : []) {
        var KT;
        for (const lT of vT.primitives) {
          var OT, yT, fT, xT, IT, CT;
          const MT = null === (OT = lT.extensions) || void 0 === OT ? void 0 : OT.KHR_draco_mesh_compression;
          if ("object" !== typeof MT || null === MT) continue;
          const KT = null === (yT = TT.bufferViews) || void 0 === yT ? void 0 : yT[MT.bufferView];
          if (null === kT || void 0 === KT) return jT;
          const vT = null !== (fT = KT.byteOffset) && void 0 !== fT ? fT : 0,
            tT = AT(kT.subarray(vT, vT + KT.byteLength));
          if (null === tT && !cT) continue;
          const hT = null !== (xT = TT.accessors) && void 0 !== xT ? xT : [],
            NT = null === (IT = hT[lT.attributes.POSITION]) || void 0 === IT ? void 0 : IT.count,
            QT = void 0 === lT.indices ? 0 : null === (CT = hT[lT.indices]) || void 0 === CT ? void 0 : CT.count;
          if (null === tT || void 0 === NT || void 0 === QT || 3 * tT.faces !== QT || tT.vertices > NT) return jT
        }
      }
      return null
    }
    const jT = "has a Draco stream whose counts don't match its accessors";

    function vT(TT) {
      var kT;
      return null !== (kT = TT.name) && void 0 !== kT ? kT : TT.fromFolderName || TT.id
    }

    function tT(TT, kT, cT) {
      return `Texture pack "${TT}": model "${kT}" was not loaded because it ${cT}. The default model is used instead.`
    }

    function hT(TT, kT, cT) {
      let {
        strictDraco: KT = !1
      } = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
      const OT = {};
      for (const [yT, fT] of Object.entries(kT)) {
        let kT;
        if (fT.startsWith("data:")) try {
          const TT = new Uint8Array((0, MT.t)(fT));
          if (kT = (0, lT.b)(TT), null === kT) {
            const {
              json: cT,
              bin: lT
            } = (0, MT.D)(TT);
            kT = CT(cT, lT, KT)
          }
        } catch {
          kT = "is not a binary glTF 2.0 file"
        } else kT = "loads data from outside the file";
        kT && (OT[yT] = kT, cT && console.warn(tT(TT, yT, kT)))
      }
      return OT
    }

    function NT(TT, kT) {
      const cT = Object.keys(kT);
      if (0 === cT.length) return null;
      if (1 === cT.length) return tT(TT, cT[0], kT[cT[0]]);
      const lT = cT.map((TT => `"${TT}" ${kT[TT]}`)).join("; ");
      return `Texture pack "${TT}": ${cT.length} models were not loaded (${lT}). The default models are used instead.`
    }
  }
};
Object.freeze(modules);
for (const TT in modules) Object.freeze(modules[TT]);