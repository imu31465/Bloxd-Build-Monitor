export const id = 52;
export const ids = [52, 226];
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
  },
  64049: (ee, ie, He) => {
    He.d(ie, {
      packAssets: () => Xe
    });
    var ye = He(2181),
      be = He(2170),
      Me = He(34975),
      Ke = He(3532),
      Ue = He(3572);

    function Fe(ee, ie, He, ye) {
      const be = `${(0,Ke.e)(ee,ie)}|sheets${He}`;
      return ye === Ue.d ? be : `${be}|layers${ye}`
    }
    var Je = He(3574),
      oe = He(3502),
      Re = He(3488),
      ke = He(3540);
    var qe = He(54284);
    const fe = 256;
    let Te = null,
      pe = null;

    function Xe(ee) {
      var ie;
      let He = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Ue.d;
      if ((null === (ie = Te) || void 0 === ie ? void 0 : ie.pack) === ee.pack && Te.maxLayerWidth === He) return Te.assets;
      const Xe = (0, qe.g)(ee.pack, (0, qe.m)(ee));
      if (null === Xe || !(0, be.f)(Xe)) return Promise.resolve(null);
      const Be = async function(ee, ie, He) {
        var qe;
        const Te = null !== (qe = ee.textureOverrides) && void 0 !== qe ? qe : {},
          {
            id: Xe,
            version: Be
          } = ee.metaData,
          Ee = ie && Xe !== ye.o.CUSTOM,
          ge = {};
        Ee && (pe = ge);
        let Oe, de, We = Ee ? await async function(ee, ie, He, ye) {
          const be = Fe(ee, ie, He, Ue.d),
            Me = Fe(ee, ie, He, ye),
            Je = await (0, Ke.k)((ee => ee === be || ee === Me));
          return null !== Je && (ye === Ue.d || Je.blockAtlasWidth <= ye) ? Je : null
        }(Xe, Be, fe, He): null;
        if (null === We) {
          const {
            blockMetadata: ee,
            getDefaultTexture: ie,
            textureNameToIndex: Me
          } = await (0, be.k)(), Ue = (0, oe.e)(ee, ((ee, He) => ({
            url: ze(Te, ie, ee, "block" === He ? Re.f.BLOCK : Re.f.ITEM)
          }))), Je = await
          function(ee, ie, He, ye, be, Me) {
            return (0, ke.c)((Ke => Ke.WasmTextureWorker.generateRequired(ee, ie, He, ye, be, Me)))
          }(ee, Me, Ue, Xe === ye.b, He, fe), qe = Je.assets;
          We = {
            ...qe,
            averageColors: {}
          }, Oe = Je.averageColors(), Ee && (de = Oe.then((async ee => {
            null !== ee && pe === ge && await
            function(ee, ie, He, ye, be) {
              return (0, Ke.p)(Fe(ee, ie, ye, be), He)
            }(Xe, Be, {
              ...qe,
              averageColors: ee
            }, fe, Je.layerCap)
          })))
        }
        return function(ee, ie) {
          var He, ye;
          let be = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Promise.resolve((Ue = ee.averageColors, 0 === Object.keys(null !== Ue && void 0 !== Ue ? Ue : {}).length ? null : ee.averageColors)),
            Ke = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : Promise.resolve();
          var Ue;
          const Fe = null !== (He = ie.textureOverrides) && void 0 !== He ? He : {},
            oe = null !== (ye = ie.modelOverrides) && void 0 !== ye ? ye : {},
            Re = 0 === Object.keys(oe).length ? {} : (0, Me.refusedPackModels)((0, Me.packDisplayName)(ie.metaData), oe, !0, {
              strictDraco: !0
            }),
            {
              animatedBlockTextures: ke,
              rotatedBlockTextures: qe
            } = ee,
            fe = ee => {
              var ie, He;
              return null !== (ie = null !== (He = ke[ee]) && void 0 !== He ? He : qe[ee]) && void 0 !== ie ? ie : null
            };
          return {
            terrain: {
              atlasSheets: ee.blockAtlasArr,
              texture: fe
            },
            sheetPixels: [...ee.blockAtlasPixels],
            heldUntil: Ke,
            sheetLayout: ee.imagesPerAtlas,
            sheetWidth: ee.blockAtlasWidth,
            armourAtlasUrl: ee.armourAtlas,
            texture: ee => {
              var ie, He;
              return null !== (ie = null !== (He = fe(ee)) && void 0 !== He ? He : (0, Je.b)(Fe, ee)) && void 0 !== ie ? ie : null
            },
            model: ee => void 0 === Re[ee] && oe[ee] || null,
            averageColours: be
          }
        }(We, ee, Oe, de)
      }(Xe, null === ee.gameSource, He), Ee = {
        pack: ee.pack,
        maxLayerWidth: He,
        assets: Be
      };
      return Te = Ee, Be.catch((() => {
        Te === Ee && (Te = null)
      })), Be
    }

    function ze(ee, ie, ye, be) {
      const Me = (0, Je.b)(ee, ye);
      if (Me) return Me;
      try {
        return ie(ye, be).url
      } catch {
        return He(3629)
      }
    }
  }
};
Object.freeze(modules);
for (const ee in modules) Object.freeze(modules[ee]);