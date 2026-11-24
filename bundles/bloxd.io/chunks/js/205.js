export const id = 205;
export const ids = [205];
export const modules = {
  34345: (TT, UT, mT) => {
    mT.r(UT), mT.d(UT, {
      packDisplayName: () => BT,
      packModelMessage: () => ZT,
      packModelSummary: () => vT,
      refusedPackModels: () => cT
    });
    var WT = mT(34350),
      zT = mT(34358);
    const MT = "DRACO",
      gT = 0,
      nT = 1,
      HT = 0,
      kT = 1,
      jT = 32768;

    function lT(TT) {
      const UT = new DataView(TT.buffer, TT.byteOffset, TT.byteLength);
      let mT = 0;
      const WT = () => {
          if (mT >= TT.byteLength) throw new RangeError("past the stream");
          return TT[mT++]
        },
        zT = () => {
          if (mT + 4 > TT.byteLength) throw new RangeError("past the stream");
          const WT = UT.getUint32(mT, !0);
          return mT += 4, WT
        },
        lT = () => {
          let TT = 0;
          for (let UT = 0; UT < 35; UT += 7) {
            const mT = WT();
            if (TT += (127 & mT) * 2 ** UT, 0 === (128 & mT)) return TT
          }
          throw new RangeError("varint too long")
        };
      try {
        for (let TT = 0; TT < MT.length; TT++)
          if (WT() !== MT.charCodeAt(TT)) return null;
        const UT = WT(),
          LT = WT(),
          pT = WT(),
          BT = WT(),
          ZT = WT() | WT() << 8;
        if (2 !== UT) return null;
        0 !== (ZT & jT) && function(TT, UT, mT) {
          const WT = () => {
              UT(mT())
            },
            zT = () => {
              let mT = 1,
                zT = !0;
              for (; mT > 0;) {
                mT--, zT || WT(), zT = !1;
                const MT = TT();
                for (let mT = 0; mT < MT; mT++) WT(), UT(TT());
                mT += TT()
              }
            },
            MT = TT();
          for (let gT = 0; gT < MT; gT++) TT(), zT();
          zT()
        }(lT, (UT => {
          if (mT + UT > TT.byteLength) throw new RangeError("past the stream");
          mT += UT
        }), WT);
        const cT = LT < 2 ? zT : lT;
        if (pT === gT) return {
          faces: 0,
          vertices: zT()
        };
        if (pT !== nT) return null;
        if (BT === HT) {
          return {
            faces: cT(),
            vertices: cT()
          }
        }
        if (BT !== kT) return null;
        WT(), LT < 2 && lT();
        const vT = lT();
        return {
          faces: lT(),
          vertices: vT
        }
      } catch {
        return null
      }
    }

    function LT(TT, UT, mT) {
      var WT, zT;
      if (null === (WT = null === (zT = TT.extensionsUsed) || void 0 === zT ? void 0 : zT.includes("KHR_draco_mesh_compression")) || void 0 === WT || !WT) return null;
      for (const BT of null !== (MT = TT.meshes) && void 0 !== MT ? MT : []) {
        var MT;
        for (const WT of BT.primitives) {
          var gT, nT, HT, kT, jT, LT;
          const zT = null === (gT = WT.extensions) || void 0 === gT ? void 0 : gT.KHR_draco_mesh_compression;
          if ("object" !== typeof zT || null === zT) continue;
          const MT = null === (nT = TT.bufferViews) || void 0 === nT ? void 0 : nT[zT.bufferView];
          if (null === UT || void 0 === MT) return pT;
          const BT = null !== (HT = MT.byteOffset) && void 0 !== HT ? HT : 0,
            ZT = lT(UT.subarray(BT, BT + MT.byteLength));
          if (null === ZT && !mT) continue;
          const cT = null !== (kT = TT.accessors) && void 0 !== kT ? kT : [],
            vT = null === (jT = cT[WT.attributes.POSITION]) || void 0 === jT ? void 0 : jT.count,
            fT = void 0 === WT.indices ? 0 : null === (LT = cT[WT.indices]) || void 0 === LT ? void 0 : LT.count;
          if (null === ZT || void 0 === vT || void 0 === fT || 3 * ZT.faces !== fT || ZT.vertices > vT) return pT
        }
      }
      return null
    }
    const pT = "has a Draco stream whose counts don't match its accessors";

    function BT(TT) {
      var UT;
      return null !== (UT = TT.name) && void 0 !== UT ? UT : TT.fromFolderName || TT.id
    }

    function ZT(TT, UT, mT) {
      return `Texture pack "${TT}": model "${UT}" was not loaded because it ${mT}. The default model is used instead.`
    }

    function cT(TT, UT, mT) {
      let {
        strictDraco: MT = !1
      } = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
      const gT = {};
      for (const [nT, HT] of Object.entries(UT)) {
        let UT;
        if (HT.startsWith("data:")) try {
          const TT = new Uint8Array((0, zT.m)(HT));
          if (UT = (0, WT.c)(TT), null === UT) {
            const {
              json: mT,
              bin: WT
            } = (0, zT.p)(TT);
            UT = LT(mT, WT, MT)
          }
        } catch {
          UT = "is not a binary glTF 2.0 file"
        } else UT = "loads data from outside the file";
        UT && (gT[nT] = UT, mT && console.warn(ZT(TT, nT, UT)))
      }
      return gT
    }

    function vT(TT, UT) {
      const mT = Object.keys(UT);
      if (0 === mT.length) return null;
      if (1 === mT.length) return ZT(TT, mT[0], UT[mT[0]]);
      const WT = mT.map((TT => `"${TT}" ${UT[TT]}`)).join("; ");
      return `Texture pack "${TT}": ${mT.length} models were not loaded (${WT}). The default models are used instead.`
    }
  }
};
Object.freeze(modules);
for (const TT in modules) Object.freeze(modules[TT]);