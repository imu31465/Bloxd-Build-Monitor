export const id = 229;
export const ids = [229];
export const modules = {
  35402: (VV, eV, xV) => {
    xV.r(eV), xV.d(eV, {
      packDisplayName: () => kV,
      packModelMessage: () => bV,
      packModelSummary: () => BV,
      refusedPackModels: () => EV
    });
    var JV = xV(35408),
      YV = xV(35415);
    const UV = "DRACO",
      yV = 0,
      pV = 1,
      QV = 0,
      nV = 1,
      wV = 32768;

    function ZV(VV) {
      const eV = new DataView(VV.buffer, VV.byteOffset, VV.byteLength);
      let xV = 0;
      const JV = () => {
          if (xV >= VV.byteLength) throw new RangeError("past the stream");
          return VV[xV++]
        },
        YV = () => {
          if (xV + 4 > VV.byteLength) throw new RangeError("past the stream");
          const JV = eV.getUint32(xV, !0);
          return xV += 4, JV
        },
        ZV = () => {
          let VV = 0;
          for (let eV = 0; eV < 35; eV += 7) {
            const xV = JV();
            if (VV += (127 & xV) * 2 ** eV, 0 === (128 & xV)) return VV
          }
          throw new RangeError("varint too long")
        };
      try {
        for (let VV = 0; VV < UV.length; VV++)
          if (JV() !== UV.charCodeAt(VV)) return null;
        const eV = JV(),
          vV = JV(),
          rV = JV(),
          kV = JV(),
          bV = JV() | JV() << 8;
        if (2 !== eV) return null;
        0 !== (bV & wV) && function(VV, eV, xV) {
          const JV = () => {
              eV(xV())
            },
            YV = () => {
              let xV = 1,
                YV = !0;
              for (; xV > 0;) {
                xV--, YV || JV(), YV = !1;
                const UV = VV();
                for (let xV = 0; xV < UV; xV++) JV(), eV(VV());
                xV += VV()
              }
            },
            UV = VV();
          for (let yV = 0; yV < UV; yV++) VV(), YV();
          YV()
        }(ZV, (eV => {
          if (xV + eV > VV.byteLength) throw new RangeError("past the stream");
          xV += eV
        }), JV);
        const EV = vV < 2 ? YV : ZV;
        if (rV === yV) return {
          faces: 0,
          vertices: YV()
        };
        if (rV !== pV) return null;
        if (kV === QV) {
          return {
            faces: EV(),
            vertices: EV()
          }
        }
        if (kV !== nV) return null;
        JV(), vV < 2 && ZV();
        const BV = ZV();
        return {
          faces: ZV(),
          vertices: BV
        }
      } catch {
        return null
      }
    }

    function vV(VV, eV, xV) {
      var JV, YV;
      if (null === (JV = null === (YV = VV.extensionsUsed) || void 0 === YV ? void 0 : YV.includes("KHR_draco_mesh_compression")) || void 0 === JV || !JV) return null;
      for (const kV of null !== (UV = VV.meshes) && void 0 !== UV ? UV : []) {
        var UV;
        for (const JV of kV.primitives) {
          var yV, pV, QV, nV, wV, vV;
          const YV = null === (yV = JV.extensions) || void 0 === yV ? void 0 : yV.KHR_draco_mesh_compression;
          if ("object" !== typeof YV || null === YV) continue;
          const UV = null === (pV = VV.bufferViews) || void 0 === pV ? void 0 : pV[YV.bufferView];
          if (null === eV || void 0 === UV) return rV;
          const kV = null !== (QV = UV.byteOffset) && void 0 !== QV ? QV : 0,
            bV = ZV(eV.subarray(kV, kV + UV.byteLength));
          if (null === bV && !xV) continue;
          const EV = null !== (nV = VV.accessors) && void 0 !== nV ? nV : [],
            BV = null === (wV = EV[JV.attributes.POSITION]) || void 0 === wV ? void 0 : wV.count,
            jV = void 0 === JV.indices ? 0 : null === (vV = EV[JV.indices]) || void 0 === vV ? void 0 : vV.count;
          if (null === bV || void 0 === BV || void 0 === jV || 3 * bV.faces !== jV || bV.vertices > BV) return rV
        }
      }
      return null
    }
    const rV = "has a Draco stream whose counts don't match its accessors";

    function kV(VV) {
      var eV;
      return null !== (eV = VV.name) && void 0 !== eV ? eV : VV.fromFolderName || VV.id
    }

    function bV(VV, eV, xV) {
      return `Texture pack "${VV}": model "${eV}" was not loaded because it ${xV}. The default model is used instead.`
    }

    function EV(VV, eV, xV) {
      let {
        strictDraco: UV = !1
      } = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
      const yV = {};
      for (const [pV, QV] of Object.entries(eV)) {
        let eV;
        if (QV.startsWith("data:")) try {
          const VV = new Uint8Array((0, YV.o)(QV));
          if (eV = (0, JV.d)(VV), null === eV) {
            const {
              json: xV,
              bin: JV
            } = (0, YV.v)(VV);
            eV = vV(xV, JV, UV)
          }
        } catch {
          eV = "is not a binary glTF 2.0 file"
        } else eV = "loads data from outside the file";
        eV && (yV[pV] = eV, xV && console.warn(bV(VV, pV, eV)))
      }
      return yV
    }

    function BV(VV, eV) {
      const xV = Object.keys(eV);
      if (0 === xV.length) return null;
      if (1 === xV.length) return bV(VV, xV[0], eV[xV[0]]);
      const JV = xV.map((VV => `"${VV}" ${eV[VV]}`)).join("; ");
      return `Texture pack "${VV}": ${xV.length} models were not loaded (${JV}). The default models are used instead.`
    }
  }
};
Object.freeze(modules);
for (const VV in modules) Object.freeze(modules[VV]);