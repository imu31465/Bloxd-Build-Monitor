export const id = 45;
export const ids = [45, 205];
export const modules = {
  34615: (uu, Eu, ju) => {
    ju.r(Eu), ju.d(Eu, {
      packDisplayName: () => Ou,
      packModelMessage: () => Yu,
      packModelSummary: () => Du,
      refusedPackModels: () => hu
    });
    var su = ju(34617),
      Uu = ju(34621);
    const Zu = "DRACO",
      Xu = 0,
      lu = 1,
      qu = 0,
      fu = 1,
      Cu = 32768;

    function bu(uu) {
      const Eu = new DataView(uu.buffer, uu.byteOffset, uu.byteLength);
      let ju = 0;
      const su = () => {
          if (ju >= uu.byteLength) throw new RangeError("past the stream");
          return uu[ju++]
        },
        Uu = () => {
          if (ju + 4 > uu.byteLength) throw new RangeError("past the stream");
          const su = Eu.getUint32(ju, !0);
          return ju += 4, su
        },
        bu = () => {
          let uu = 0;
          for (let Eu = 0; Eu < 35; Eu += 7) {
            const ju = su();
            if (uu += (127 & ju) * 2 ** Eu, 0 === (128 & ju)) return uu
          }
          throw new RangeError("varint too long")
        };
      try {
        for (let uu = 0; uu < Zu.length; uu++)
          if (su() !== Zu.charCodeAt(uu)) return null;
        const Eu = su(),
          cu = su(),
          Nu = su(),
          Ou = su(),
          Yu = su() | su() << 8;
        if (2 !== Eu) return null;
        0 !== (Yu & Cu) && function(uu, Eu, ju) {
          const su = () => {
              Eu(ju())
            },
            Uu = () => {
              let ju = 1,
                Uu = !0;
              for (; ju > 0;) {
                ju--, Uu || su(), Uu = !1;
                const Zu = uu();
                for (let ju = 0; ju < Zu; ju++) su(), Eu(uu());
                ju += uu()
              }
            },
            Zu = uu();
          for (let Xu = 0; Xu < Zu; Xu++) uu(), Uu();
          Uu()
        }(bu, (Eu => {
          if (ju + Eu > uu.byteLength) throw new RangeError("past the stream");
          ju += Eu
        }), su);
        const hu = cu < 2 ? Uu : bu;
        if (Nu === Xu) return {
          faces: 0,
          vertices: Uu()
        };
        if (Nu !== lu) return null;
        if (Ou === qu) {
          return {
            faces: hu(),
            vertices: hu()
          }
        }
        if (Ou !== fu) return null;
        su(), cu < 2 && bu();
        const Du = bu();
        return {
          faces: bu(),
          vertices: Du
        }
      } catch {
        return null
      }
    }

    function cu(uu, Eu, ju) {
      var su, Uu;
      if (null === (su = null === (Uu = uu.extensionsUsed) || void 0 === Uu ? void 0 : Uu.includes("KHR_draco_mesh_compression")) || void 0 === su || !su) return null;
      for (const Ou of null !== (Zu = uu.meshes) && void 0 !== Zu ? Zu : []) {
        var Zu;
        for (const su of Ou.primitives) {
          var Xu, lu, qu, fu, Cu, cu;
          const Uu = null === (Xu = su.extensions) || void 0 === Xu ? void 0 : Xu.KHR_draco_mesh_compression;
          if ("object" !== typeof Uu || null === Uu) continue;
          const Zu = null === (lu = uu.bufferViews) || void 0 === lu ? void 0 : lu[Uu.bufferView];
          if (null === Eu || void 0 === Zu) return Nu;
          const Ou = null !== (qu = Zu.byteOffset) && void 0 !== qu ? qu : 0,
            Yu = bu(Eu.subarray(Ou, Ou + Zu.byteLength));
          if (null === Yu && !ju) continue;
          const hu = null !== (fu = uu.accessors) && void 0 !== fu ? fu : [],
            Du = null === (Cu = hu[su.attributes.POSITION]) || void 0 === Cu ? void 0 : Cu.count,
            gu = void 0 === su.indices ? 0 : null === (cu = hu[su.indices]) || void 0 === cu ? void 0 : cu.count;
          if (null === Yu || void 0 === Du || void 0 === gu || 3 * Yu.faces !== gu || Yu.vertices > Du) return Nu
        }
      }
      return null
    }
    const Nu = "has a Draco stream whose counts don't match its accessors";

    function Ou(uu) {
      var Eu;
      return null !== (Eu = uu.name) && void 0 !== Eu ? Eu : uu.fromFolderName || uu.id
    }

    function Yu(uu, Eu, ju) {
      return `Texture pack "${uu}": model "${Eu}" was not loaded because it ${ju}. The default model is used instead.`
    }

    function hu(uu, Eu, ju) {
      let {
        strictDraco: Zu = !1
      } = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
      const Xu = {};
      for (const [lu, qu] of Object.entries(Eu)) {
        let Eu;
        if (qu.startsWith("data:")) try {
          const uu = new Uint8Array((0, Uu.u)(qu));
          if (Eu = (0, su.e)(uu), null === Eu) {
            const {
              json: ju,
              bin: su
            } = (0, Uu.C)(uu);
            Eu = cu(ju, su, Zu)
          }
        } catch {
          Eu = "is not a binary glTF 2.0 file"
        } else Eu = "loads data from outside the file";
        Eu && (Xu[lu] = Eu, ju && console.warn(Yu(uu, lu, Eu)))
      }
      return Xu
    }

    function Du(uu, Eu) {
      const ju = Object.keys(Eu);
      if (0 === ju.length) return null;
      if (1 === ju.length) return Yu(uu, ju[0], Eu[ju[0]]);
      const su = ju.map((uu => `"${uu}" ${Eu[uu]}`)).join("; ");
      return `Texture pack "${uu}": ${ju.length} models were not loaded (${su}). The default models are used instead.`
    }
  },
  61713: (uu, Eu, ju) => {
    ju.d(Eu, {
      packAssets: () => Du
    });
    var su = ju(2239),
      Uu = ju(2222),
      Zu = ju(34615),
      Xu = ju(3383),
      lu = ju(3416);

    function qu(uu, Eu, ju, su) {
      const Uu = `${(0,Xu.c)(uu,Eu)}|sheets${ju}`;
      return su === lu.c ? Uu : `${Uu}|layers${su}`
    }
    var fu = ju(3420),
      Cu = ju(3354),
      bu = ju(3346),
      cu = ju(3391);
    var Nu = ju(51278);
    const Ou = 256;
    let Yu = null,
      hu = null;

    function Du(uu) {
      var Eu;
      let ju = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : lu.c;
      if ((null === (Eu = Yu) || void 0 === Eu ? void 0 : Eu.pack) === uu.pack && Yu.maxLayerWidth === ju) return Yu.assets;
      const Du = (0, Nu.g)(uu.pack, (0, Nu.k)(uu));
      if (null === Du || !(0, Uu.f)(Du)) return Promise.resolve(null);
      const Mu = async function(uu, Eu, ju) {
        var Nu;
        const Yu = null !== (Nu = uu.textureOverrides) && void 0 !== Nu ? Nu : {},
          {
            id: Du,
            version: Mu
          } = uu.metaData,
          eu = Eu && Du !== su.p.CUSTOM,
          Gu = {};
        eu && (hu = Gu);
        let pu, wu, Ju = eu ? await async function(uu, Eu, ju, su) {
          const Uu = qu(uu, Eu, ju, lu.c),
            Zu = qu(uu, Eu, ju, su),
            fu = await (0, Xu.f)((uu => uu === Uu || uu === Zu));
          return null !== fu && (su === lu.c || fu.blockAtlasWidth <= su) ? fu : null
        }(Du, Mu, Ou, ju): null;
        if (null === Ju) {
          const {
            blockMetadata: uu,
            getDefaultTexture: Eu,
            textureNameToIndex: Zu
          } = await (0, Uu.k)(), lu = (0, Cu.d)(uu, ((uu, ju) => ({
            url: gu(Yu, Eu, uu, "block" === ju ? bu.e.BLOCK : bu.e.ITEM)
          }))), fu = await
          function(uu, Eu, ju, su, Uu, Zu) {
            return (0, cu.e)((Xu => Xu.WasmTextureWorker.generateRequired(uu, Eu, ju, su, Uu, Zu)))
          }(uu, Zu, lu, Du === su.e, ju, Ou), Nu = fu.assets;
          Ju = {
            ...Nu,
            averageColors: {}
          }, pu = fu.averageColors(), eu && (wu = pu.then((async uu => {
            null !== uu && hu === Gu && await
            function(uu, Eu, ju, su, Uu) {
              return (0, Xu.l)(qu(uu, Eu, su, Uu), ju)
            }(Du, Mu, {
              ...Nu,
              averageColors: uu
            }, Ou, fu.layerCap)
          })))
        }
        return function(uu, Eu) {
          var ju, su;
          let Uu = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Promise.resolve((lu = uu.averageColors, 0 === Object.keys(null !== lu && void 0 !== lu ? lu : {}).length ? null : uu.averageColors)),
            Xu = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : Promise.resolve();
          var lu;
          const qu = null !== (ju = Eu.textureOverrides) && void 0 !== ju ? ju : {},
            Cu = null !== (su = Eu.modelOverrides) && void 0 !== su ? su : {},
            bu = 0 === Object.keys(Cu).length ? {} : (0, Zu.refusedPackModels)((0, Zu.packDisplayName)(Eu.metaData), Cu, !0, {
              strictDraco: !0
            }),
            {
              animatedBlockTextures: cu,
              rotatedBlockTextures: Nu
            } = uu,
            Ou = uu => {
              var Eu, ju;
              return null !== (Eu = null !== (ju = cu[uu]) && void 0 !== ju ? ju : Nu[uu]) && void 0 !== Eu ? Eu : null
            };
          return {
            terrain: {
              atlasSheets: uu.blockAtlasArr,
              texture: Ou
            },
            sheetPixels: [...uu.blockAtlasPixels],
            heldUntil: Xu,
            sheetLayout: uu.imagesPerAtlas,
            sheetWidth: uu.blockAtlasWidth,
            armourAtlasUrl: uu.armourAtlas,
            texture: uu => {
              var Eu, ju;
              return null !== (Eu = null !== (ju = Ou(uu)) && void 0 !== ju ? ju : (0, fu.c)(qu, uu)) && void 0 !== Eu ? Eu : null
            },
            model: uu => void 0 === bu[uu] && Cu[uu] || null,
            averageColours: Uu
          }
        }(Ju, uu, pu, wu)
      }(Du, null === uu.gameSource, ju), eu = {
        pack: uu.pack,
        maxLayerWidth: ju,
        assets: Mu
      };
      return Yu = eu, Mu.catch((() => {
        Yu === eu && (Yu = null)
      })), Mu
    }

    function gu(uu, Eu, su, Uu) {
      const Zu = (0, fu.c)(uu, su);
      if (Zu) return Zu;
      try {
        return Eu(su, Uu).url
      } catch {
        return ju(3500)
      }
    }
  }
};
Object.freeze(modules);
for (const uu in modules) Object.freeze(modules[uu]);