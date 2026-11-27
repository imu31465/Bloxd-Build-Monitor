export const id = 226;
export const ids = [226];
export const modules = {
  34975: (ee, ie, He) => {
    He.r(ie), He.d(ie, {
      packDisplayName: () => Te,
      packModelMessage: () => pe,
      packModelSummary: () => ze,
      refusedPackModels: () => Xe
    });
    var ye = He(34984),
      be = He(34988);
    const Me = "DRACO",
      Ke = 0,
      Ue = 1,
      Fe = 0,
      Je = 1,
      oe = 32768;

    function Re(ee) {
      const ie = new DataView(ee.buffer, ee.byteOffset, ee.byteLength);
      let He = 0;
      const ye = () => {
          if (He >= ee.byteLength) throw new RangeError("past the stream");
          return ee[He++]
        },
        be = () => {
          if (He + 4 > ee.byteLength) throw new RangeError("past the stream");
          const ye = ie.getUint32(He, !0);
          return He += 4, ye
        },
        Re = () => {
          let ee = 0;
          for (let ie = 0; ie < 35; ie += 7) {
            const He = ye();
            if (ee += (127 & He) * 2 ** ie, 0 === (128 & He)) return ee
          }
          throw new RangeError("varint too long")
        };
      try {
        for (let ee = 0; ee < Me.length; ee++)
          if (ye() !== Me.charCodeAt(ee)) return null;
        const ie = ye(),
          ke = ye(),
          qe = ye(),
          fe = ye(),
          Te = ye() | ye() << 8;
        if (2 !== ie) return null;
        0 !== (Te & oe) && function(ee, ie, He) {
          const ye = () => {
              ie(He())
            },
            be = () => {
              let He = 1,
                be = !0;
              for (; He > 0;) {
                He--, be || ye(), be = !1;
                const Me = ee();
                for (let He = 0; He < Me; He++) ye(), ie(ee());
                He += ee()
              }
            },
            Me = ee();
          for (let Ke = 0; Ke < Me; Ke++) ee(), be();
          be()
        }(Re, (ie => {
          if (He + ie > ee.byteLength) throw new RangeError("past the stream");
          He += ie
        }), ye);
        const pe = ke < 2 ? be : Re;
        if (qe === Ke) return {
          faces: 0,
          vertices: be(),
          minor: ke
        };
        if (qe !== Ue) return null;
        if (fe === Fe) {
          return {
            faces: pe(),
            vertices: pe(),
            minor: ke
          }
        }
        if (fe !== Je) return null;
        ye(), ke < 2 && Re();
        const Xe = Re();
        return {
          faces: Re(),
          vertices: Xe,
          minor: ke
        }
      } catch {
        return null
      }
    }

    function ke(ee, ie, He) {
      var ye, be;
      if (null === (ye = null === (be = ee.extensionsUsed) || void 0 === be ? void 0 : be.includes("KHR_draco_mesh_compression")) || void 0 === ye || !ye) return null;
      for (const Te of null !== (Me = ee.meshes) && void 0 !== Me ? Me : []) {
        var Me;
        for (const ye of Te.primitives) {
          var Ke, Ue, Fe, Je, oe, ke;
          const be = null === (Ke = ye.extensions) || void 0 === Ke ? void 0 : Ke.KHR_draco_mesh_compression;
          if ("object" !== typeof be || null === be) continue;
          const Me = null === (Ue = ee.bufferViews) || void 0 === Ue ? void 0 : Ue[be.bufferView];
          if (null === ie || void 0 === Me) return qe;
          const Te = null !== (Fe = Me.byteOffset) && void 0 !== Fe ? Fe : 0,
            pe = Re(ie.subarray(Te, Te + Me.byteLength));
          if (null === pe && !He) continue;
          const Xe = null !== (Je = ee.accessors) && void 0 !== Je ? Je : [],
            ze = null === (oe = Xe[ye.attributes.POSITION]) || void 0 === oe ? void 0 : oe.count,
            Be = void 0 === ye.indices ? 0 : null === (ke = Xe[ye.indices]) || void 0 === ke ? void 0 : ke.count;
          if (null === pe || void 0 === ze || void 0 === Be || 3 * pe.faces !== Be || pe.vertices > ze) return qe;
          if (He && pe.minor < 2) return fe
        }
      }
      return null
    }
    const qe = "has a Draco stream whose counts don't match its accessors",
      fe = "has a Draco stream too old to decode: export it again";

    function Te(ee) {
      var ie;
      return null !== (ie = ee.name) && void 0 !== ie ? ie : ee.fromFolderName || ee.id
    }

    function pe(ee, ie, He) {
      return `Texture pack "${ee}": model "${ie}" was not loaded because it ${He}. The default model is used instead.`
    }

    function Xe(ee, ie, He) {
      let {
        strictDraco: Me = !1
      } = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
      const Ke = {};
      for (const [Ue, Fe] of Object.entries(ie)) {
        let ie;
        if (Fe.startsWith("data:")) try {
          const ee = new Uint8Array((0, be.p)(Fe));
          if (ie = (0, ye.e)(ee), null === ie) {
            const {
              json: He,
              bin: ye
            } = (0, be.y)(ee);
            ie = ke(He, ye, Me)
          }
        } catch {
          ie = "is not a binary glTF 2.0 file"
        } else ie = "loads data from outside the file";
        ie && (Ke[Ue] = ie, He && console.warn(pe(ee, Ue, ie)))
      }
      return Ke
    }

    function ze(ee, ie) {
      const He = Object.keys(ie);
      if (0 === He.length) return null;
      if (1 === He.length) return pe(ee, He[0], ie[He[0]]);
      const ye = He.map((ee => `"${ee}" ${ie[ee]}`)).join("; ");
      return `Texture pack "${ee}": ${He.length} models were not loaded (${ye}). The default models are used instead.`
    }
  }
};
Object.freeze(modules);
for (const ee in modules) Object.freeze(modules[ee]);