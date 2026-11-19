export const id = 194;
export const ids = [194];
export const modules = {
  9113: (DD, CD, cD) => {
    cD.r(CD), cD.d(CD, {
      packDisplayName: () => tD,
      packModelMessage: () => ZD,
      packModelSummary: () => vD,
      refusedPackModels: () => oD
    });
    var ID = cD(9116),
      pD = cD(9125);
    const iD = "DRACO",
      fD = 0,
      bD = 1,
      QD = 0,
      wD = 1,
      SD = 32768;

    function BD(DD) {
      const CD = new DataView(DD.buffer, DD.byteOffset, DD.byteLength);
      let cD = 0;
      const ID = () => {
          if (cD >= DD.byteLength) throw new RangeError("past the stream");
          return DD[cD++]
        },
        pD = () => {
          if (cD + 4 > DD.byteLength) throw new RangeError("past the stream");
          const ID = CD.getUint32(cD, !0);
          return cD += 4, ID
        },
        BD = () => {
          let DD = 0;
          for (let CD = 0; CD < 35; CD += 7) {
            const cD = ID();
            if (DD += (127 & cD) * 2 ** CD, 0 === (128 & cD)) return DD
          }
          throw new RangeError("varint too long")
        };
      try {
        for (let DD = 0; DD < iD.length; DD++)
          if (ID() !== iD.charCodeAt(DD)) return null;
        const CD = ID(),
          yD = ID(),
          MD = ID(),
          tD = ID(),
          ZD = ID() | ID() << 8;
        if (2 !== CD) return null;
        0 !== (ZD & SD) && function(DD, CD, cD) {
          const ID = () => {
              CD(cD())
            },
            pD = () => {
              let cD = 1,
                pD = !0;
              for (; cD > 0;) {
                cD--, pD || ID(), pD = !1;
                const iD = DD();
                for (let cD = 0; cD < iD; cD++) ID(), CD(DD());
                cD += DD()
              }
            },
            iD = DD();
          for (let fD = 0; fD < iD; fD++) DD(), pD();
          pD()
        }(BD, (CD => {
          if (cD + CD > DD.byteLength) throw new RangeError("past the stream");
          cD += CD
        }), ID);
        const oD = yD < 2 ? pD : BD;
        if (MD === fD) return {
          faces: 0,
          vertices: pD()
        };
        if (MD !== bD) return null;
        if (tD === QD) {
          return {
            faces: oD(),
            vertices: oD()
          }
        }
        if (tD !== wD) return null;
        ID(), yD < 2 && BD();
        const vD = BD();
        return {
          faces: BD(),
          vertices: vD
        }
      } catch {
        return null
      }
    }

    function yD(DD, CD, cD) {
      var ID, pD;
      if (null === (ID = null === (pD = DD.extensionsUsed) || void 0 === pD ? void 0 : pD.includes("KHR_draco_mesh_compression")) || void 0 === ID || !ID) return null;
      for (const tD of null !== (iD = DD.meshes) && void 0 !== iD ? iD : []) {
        var iD;
        for (const ID of tD.primitives) {
          var fD, bD, QD, wD, SD, yD;
          const pD = null === (fD = ID.extensions) || void 0 === fD ? void 0 : fD.KHR_draco_mesh_compression;
          if ("object" !== typeof pD || null === pD) continue;
          const iD = null === (bD = DD.bufferViews) || void 0 === bD ? void 0 : bD[pD.bufferView];
          if (null === CD || void 0 === iD) return MD;
          const tD = null !== (QD = iD.byteOffset) && void 0 !== QD ? QD : 0,
            ZD = BD(CD.subarray(tD, tD + iD.byteLength));
          if (null === ZD && !cD) continue;
          const oD = null !== (wD = DD.accessors) && void 0 !== wD ? wD : [],
            vD = null === (SD = oD[ID.attributes.POSITION]) || void 0 === SD ? void 0 : SD.count,
            ND = void 0 === ID.indices ? 0 : null === (yD = oD[ID.indices]) || void 0 === yD ? void 0 : yD.count;
          if (null === ZD || void 0 === vD || void 0 === ND || 3 * ZD.faces !== ND || ZD.vertices > vD) return MD
        }
      }
      return null
    }
    const MD = "has a Draco stream whose counts don't match its accessors";

    function tD(DD) {
      var CD;
      return null !== (CD = DD.name) && void 0 !== CD ? CD : DD.fromFolderName || DD.id
    }

    function ZD(DD, CD, cD) {
      return `Texture pack "${DD}": model "${CD}" was not loaded because it ${cD}. The default model is used instead.`
    }

    function oD(DD, CD, cD) {
      let {
        strictDraco: iD = !1
      } = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
      const fD = {};
      for (const [bD, QD] of Object.entries(CD)) {
        let CD;
        if (QD.startsWith("data:")) try {
          const DD = new Uint8Array((0, pD.t)(QD));
          if (CD = (0, ID.e)(DD), null === CD) {
            const {
              json: cD,
              bin: ID
            } = (0, pD.x)(DD);
            CD = yD(cD, ID, iD)
          }
        } catch {
          CD = "is not a binary glTF 2.0 file"
        } else CD = "loads data from outside the file";
        CD && (fD[bD] = CD, cD && console.warn(ZD(DD, bD, CD)))
      }
      return fD
    }

    function vD(DD, CD) {
      const cD = Object.keys(CD);
      if (0 === cD.length) return null;
      if (1 === cD.length) return ZD(DD, cD[0], CD[cD[0]]);
      const ID = cD.map((DD => `"${DD}" ${CD[DD]}`)).join("; ");
      return `Texture pack "${DD}": ${cD.length} models were not loaded (${ID}). The default models are used instead.`
    }
  }
};
Object.freeze(modules);
for (const DD in modules) Object.freeze(modules[DD]);