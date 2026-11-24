export const id = 202;
export const ids = [202];
export const modules = {
  34269: (DD, zD, wD) => {
    wD.r(zD), wD.d(zD, {
      packDisplayName: () => ID,
      packModelMessage: () => BD,
      packModelSummary: () => hD,
      refusedPackModels: () => GD
    });
    var pD = wD(34278),
      sD = wD(34287);
    const KD = "DRACO",
      rD = 0,
      LD = 1,
      cD = 0,
      gD = 1,
      RD = 32768;

    function AD(DD) {
      const zD = new DataView(DD.buffer, DD.byteOffset, DD.byteLength);
      let wD = 0;
      const pD = () => {
          if (wD >= DD.byteLength) throw new RangeError("past the stream");
          return DD[wD++]
        },
        sD = () => {
          if (wD + 4 > DD.byteLength) throw new RangeError("past the stream");
          const pD = zD.getUint32(wD, !0);
          return wD += 4, pD
        },
        AD = () => {
          let DD = 0;
          for (let zD = 0; zD < 35; zD += 7) {
            const wD = pD();
            if (DD += (127 & wD) * 2 ** zD, 0 === (128 & wD)) return DD
          }
          throw new RangeError("varint too long")
        };
      try {
        for (let DD = 0; DD < KD.length; DD++)
          if (pD() !== KD.charCodeAt(DD)) return null;
        const zD = pD(),
          UD = pD(),
          fD = pD(),
          ID = pD(),
          BD = pD() | pD() << 8;
        if (2 !== zD) return null;
        0 !== (BD & RD) && function(DD, zD, wD) {
          const pD = () => {
              zD(wD())
            },
            sD = () => {
              let wD = 1,
                sD = !0;
              for (; wD > 0;) {
                wD--, sD || pD(), sD = !1;
                const KD = DD();
                for (let wD = 0; wD < KD; wD++) pD(), zD(DD());
                wD += DD()
              }
            },
            KD = DD();
          for (let rD = 0; rD < KD; rD++) DD(), sD();
          sD()
        }(AD, (zD => {
          if (wD + zD > DD.byteLength) throw new RangeError("past the stream");
          wD += zD
        }), pD);
        const GD = UD < 2 ? sD : AD;
        if (fD === rD) return {
          faces: 0,
          vertices: sD()
        };
        if (fD !== LD) return null;
        if (ID === cD) {
          return {
            faces: GD(),
            vertices: GD()
          }
        }
        if (ID !== gD) return null;
        pD(), UD < 2 && AD();
        const hD = AD();
        return {
          faces: AD(),
          vertices: hD
        }
      } catch {
        return null
      }
    }

    function UD(DD, zD, wD) {
      var pD, sD;
      if (null === (pD = null === (sD = DD.extensionsUsed) || void 0 === sD ? void 0 : sD.includes("KHR_draco_mesh_compression")) || void 0 === pD || !pD) return null;
      for (const ID of null !== (KD = DD.meshes) && void 0 !== KD ? KD : []) {
        var KD;
        for (const pD of ID.primitives) {
          var rD, LD, cD, gD, RD, UD;
          const sD = null === (rD = pD.extensions) || void 0 === rD ? void 0 : rD.KHR_draco_mesh_compression;
          if ("object" !== typeof sD || null === sD) continue;
          const KD = null === (LD = DD.bufferViews) || void 0 === LD ? void 0 : LD[sD.bufferView];
          if (null === zD || void 0 === KD) return fD;
          const ID = null !== (cD = KD.byteOffset) && void 0 !== cD ? cD : 0,
            BD = AD(zD.subarray(ID, ID + KD.byteLength));
          if (null === BD && !wD) continue;
          const GD = null !== (gD = DD.accessors) && void 0 !== gD ? gD : [],
            hD = null === (RD = GD[pD.attributes.POSITION]) || void 0 === RD ? void 0 : RD.count,
            nD = void 0 === pD.indices ? 0 : null === (UD = GD[pD.indices]) || void 0 === UD ? void 0 : UD.count;
          if (null === BD || void 0 === hD || void 0 === nD || 3 * BD.faces !== nD || BD.vertices > hD) return fD
        }
      }
      return null
    }
    const fD = "has a Draco stream whose counts don't match its accessors";

    function ID(DD) {
      var zD;
      return null !== (zD = DD.name) && void 0 !== zD ? zD : DD.fromFolderName || DD.id
    }

    function BD(DD, zD, wD) {
      return `Texture pack "${DD}": model "${zD}" was not loaded because it ${wD}. The default model is used instead.`
    }

    function GD(DD, zD, wD) {
      let {
        strictDraco: KD = !1
      } = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
      const rD = {};
      for (const [LD, cD] of Object.entries(zD)) {
        let zD;
        if (cD.startsWith("data:")) try {
          const DD = new Uint8Array((0, sD.s)(cD));
          if (zD = (0, pD.d)(DD), null === zD) {
            const {
              json: wD,
              bin: pD
            } = (0, sD.D)(DD);
            zD = UD(wD, pD, KD)
          }
        } catch {
          zD = "is not a binary glTF 2.0 file"
        } else zD = "loads data from outside the file";
        zD && (rD[LD] = zD, wD && console.warn(BD(DD, LD, zD)))
      }
      return rD
    }

    function hD(DD, zD) {
      const wD = Object.keys(zD);
      if (0 === wD.length) return null;
      if (1 === wD.length) return BD(DD, wD[0], zD[wD[0]]);
      const pD = wD.map((DD => `"${DD}" ${zD[DD]}`)).join("; ");
      return `Texture pack "${DD}": ${wD.length} models were not loaded (${pD}). The default models are used instead.`
    }
  }
};
Object.freeze(modules);
for (const DD in modules) Object.freeze(modules[DD]);