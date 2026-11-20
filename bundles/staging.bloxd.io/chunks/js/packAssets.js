export const id = 44;
export const ids = [44, 194];
export const modules = {
  9127: (uu, Ru, yu) => {
    yu.r(Ru), yu.d(Ru, {
      packDisplayName: () => Su,
      packModelMessage: () => pu,
      packModelSummary: () => Wu,
      refusedPackModels: () => Tu
    });
    var Eu = yu(9135),
      Ku = yu(9143);
    const Qu = "DRACO",
      mu = 0,
      Ju = 1,
      Nu = 0,
      Xu = 1,
      Vu = 32768;

    function ru(uu) {
      const Ru = new DataView(uu.buffer, uu.byteOffset, uu.byteLength);
      let yu = 0;
      const Eu = () => {
          if (yu >= uu.byteLength) throw new RangeError("past the stream");
          return uu[yu++]
        },
        Ku = () => {
          if (yu + 4 > uu.byteLength) throw new RangeError("past the stream");
          const Eu = Ru.getUint32(yu, !0);
          return yu += 4, Eu
        },
        ru = () => {
          let uu = 0;
          for (let Ru = 0; Ru < 35; Ru += 7) {
            const yu = Eu();
            if (uu += (127 & yu) * 2 ** Ru, 0 === (128 & yu)) return uu
          }
          throw new RangeError("varint too long")
        };
      try {
        for (let uu = 0; uu < Qu.length; uu++)
          if (Eu() !== Qu.charCodeAt(uu)) return null;
        const Ru = Eu(),
          Bu = Eu(),
          xu = Eu(),
          Su = Eu(),
          pu = Eu() | Eu() << 8;
        if (2 !== Ru) return null;
        0 !== (pu & Vu) && function(uu, Ru, yu) {
          const Eu = () => {
              Ru(yu())
            },
            Ku = () => {
              let yu = 1,
                Ku = !0;
              for (; yu > 0;) {
                yu--, Ku || Eu(), Ku = !1;
                const Qu = uu();
                for (let yu = 0; yu < Qu; yu++) Eu(), Ru(uu());
                yu += uu()
              }
            },
            Qu = uu();
          for (let mu = 0; mu < Qu; mu++) uu(), Ku();
          Ku()
        }(ru, (Ru => {
          if (yu + Ru > uu.byteLength) throw new RangeError("past the stream");
          yu += Ru
        }), Eu);
        const Tu = Bu < 2 ? Ku : ru;
        if (xu === mu) return {
          faces: 0,
          vertices: Ku()
        };
        if (xu !== Ju) return null;
        if (Su === Nu) {
          return {
            faces: Tu(),
            vertices: Tu()
          }
        }
        if (Su !== Xu) return null;
        Eu(), Bu < 2 && ru();
        const Wu = ru();
        return {
          faces: ru(),
          vertices: Wu
        }
      } catch {
        return null
      }
    }

    function Bu(uu, Ru, yu) {
      var Eu, Ku;
      if (null === (Eu = null === (Ku = uu.extensionsUsed) || void 0 === Ku ? void 0 : Ku.includes("KHR_draco_mesh_compression")) || void 0 === Eu || !Eu) return null;
      for (const Su of null !== (Qu = uu.meshes) && void 0 !== Qu ? Qu : []) {
        var Qu;
        for (const Eu of Su.primitives) {
          var mu, Ju, Nu, Xu, Vu, Bu;
          const Ku = null === (mu = Eu.extensions) || void 0 === mu ? void 0 : mu.KHR_draco_mesh_compression;
          if ("object" !== typeof Ku || null === Ku) continue;
          const Qu = null === (Ju = uu.bufferViews) || void 0 === Ju ? void 0 : Ju[Ku.bufferView];
          if (null === Ru || void 0 === Qu) return xu;
          const Su = null !== (Nu = Qu.byteOffset) && void 0 !== Nu ? Nu : 0,
            pu = ru(Ru.subarray(Su, Su + Qu.byteLength));
          if (null === pu && !yu) continue;
          const Tu = null !== (Xu = uu.accessors) && void 0 !== Xu ? Xu : [],
            Wu = null === (Vu = Tu[Eu.attributes.POSITION]) || void 0 === Vu ? void 0 : Vu.count,
            ju = void 0 === Eu.indices ? 0 : null === (Bu = Tu[Eu.indices]) || void 0 === Bu ? void 0 : Bu.count;
          if (null === pu || void 0 === Wu || void 0 === ju || 3 * pu.faces !== ju || pu.vertices > Wu) return xu
        }
      }
      return null
    }
    const xu = "has a Draco stream whose counts don't match its accessors";

    function Su(uu) {
      var Ru;
      return null !== (Ru = uu.name) && void 0 !== Ru ? Ru : uu.fromFolderName || uu.id
    }

    function pu(uu, Ru, yu) {
      return `Texture pack "${uu}": model "${Ru}" was not loaded because it ${yu}. The default model is used instead.`
    }

    function Tu(uu, Ru, yu) {
      let {
        strictDraco: Qu = !1
      } = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
      const mu = {};
      for (const [Ju, Nu] of Object.entries(Ru)) {
        let Ru;
        if (Nu.startsWith("data:")) try {
          const uu = new Uint8Array((0, Ku.o)(Nu));
          if (Ru = (0, Eu.d)(uu), null === Ru) {
            const {
              json: yu,
              bin: Eu
            } = (0, Ku.y)(uu);
            Ru = Bu(yu, Eu, Qu)
          }
        } catch {
          Ru = "is not a binary glTF 2.0 file"
        } else Ru = "loads data from outside the file";
        Ru && (mu[Ju] = Ru, yu && console.warn(pu(uu, Ju, Ru)))
      }
      return mu
    }

    function Wu(uu, Ru) {
      const yu = Object.keys(Ru);
      if (0 === yu.length) return null;
      if (1 === yu.length) return pu(uu, yu[0], Ru[yu[0]]);
      const Eu = yu.map((uu => `"${uu}" ${Ru[uu]}`)).join("; ");
      return `Texture pack "${uu}": ${yu.length} models were not loaded (${Eu}). The default models are used instead.`
    }
  },
  61364: (uu, Ru, yu) => {
    yu.d(Ru, {
      packAssets: () => Wu
    });
    var Eu = yu(2950),
      Ku = yu(2990),
      Qu = yu(9127),
      mu = yu(3012),
      Ju = yu(3062);

    function Nu(uu, Ru, yu, Eu) {
      const Ku = `${(0,mu.c)(uu,Ru)}|sheets${yu}`;
      return Eu === Ju.b ? Ku : `${Ku}|layers${Eu}`
    }
    var Xu = yu(3069),
      Vu = yu(2971),
      ru = yu(2955),
      Bu = yu(3020);
    var xu = yu(42902);
    const Su = 256;
    let pu = null,
      Tu = null;

    function Wu(uu) {
      var Ru;
      let yu = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Ju.b;
      if ((null === (Ru = pu) || void 0 === Ru ? void 0 : Ru.pack) === uu.pack && pu.maxLayerWidth === yu) return pu.assets;
      const Wu = (0, xu.f)(uu.pack, (0, xu.h)(uu));
      if (null === Wu || !(0, Ku.g)(Wu)) return Promise.resolve(null);
      const Hu = async function(uu, Ru, yu) {
        var xu;
        const pu = null !== (xu = uu.textureOverrides) && void 0 !== xu ? xu : {},
          {
            id: Wu,
            version: Hu
          } = uu.metaData,
          du = Ru && Wu !== Eu.r.CUSTOM,
          bu = {};
        du && (Tu = bu);
        let Cu, ku, eu = du ? await async function(uu, Ru, yu, Eu) {
          const Ku = Nu(uu, Ru, yu, Ju.b),
            Qu = Nu(uu, Ru, yu, Eu),
            Xu = await (0, mu.g)((uu => uu === Ku || uu === Qu));
          return null !== Xu && (Eu === Ju.b || Xu.blockAtlasWidth <= Eu) ? Xu : null
        }(Wu, Hu, Su, yu): null;
        if (null === eu) {
          const {
            blockMetadata: uu,
            getDefaultTexture: Ru,
            textureNameToIndex: Qu
          } = await (0, Ku.k)(), Ju = (0, Vu.c)(uu, ((uu, yu) => ({
            url: ju(pu, Ru, uu, "block" === yu ? ru.f.BLOCK : ru.f.ITEM)
          }))), Xu = await
          function(uu, Ru, yu, Eu, Ku, Qu) {
            return (0, Bu.b)((mu => mu.WasmTextureWorker.generateRequired(uu, Ru, yu, Eu, Ku, Qu)))
          }(uu, Qu, Ju, Wu === Eu.e, yu, Su), xu = Xu.assets;
          eu = {
            ...xu,
            averageColors: {}
          }, Cu = Xu.averageColors(), du && (ku = Cu.then((async uu => {
            null !== uu && Tu === bu && await
            function(uu, Ru, yu, Eu, Ku) {
              return (0, mu.k)(Nu(uu, Ru, Eu, Ku), yu)
            }(Wu, Hu, {
              ...xu,
              averageColors: uu
            }, Su, Xu.layerCap)
          })))
        }
        return function(uu, Ru) {
          var yu, Eu;
          let Ku = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Promise.resolve((Ju = uu.averageColors, 0 === Object.keys(null !== Ju && void 0 !== Ju ? Ju : {}).length ? null : uu.averageColors)),
            mu = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : Promise.resolve();
          var Ju;
          const Nu = null !== (yu = Ru.textureOverrides) && void 0 !== yu ? yu : {},
            Vu = null !== (Eu = Ru.modelOverrides) && void 0 !== Eu ? Eu : {},
            ru = 0 === Object.keys(Vu).length ? {} : (0, Qu.refusedPackModels)((0, Qu.packDisplayName)(Ru.metaData), Vu, !0, {
              strictDraco: !0
            }),
            {
              animatedBlockTextures: Bu,
              rotatedBlockTextures: xu
            } = uu,
            Su = uu => {
              var Ru, yu;
              return null !== (Ru = null !== (yu = Bu[uu]) && void 0 !== yu ? yu : xu[uu]) && void 0 !== Ru ? Ru : null
            };
          return {
            terrain: {
              atlasSheets: uu.blockAtlasArr,
              texture: Su
            },
            sheetPixels: [...uu.blockAtlasPixels],
            heldUntil: mu,
            sheetLayout: uu.imagesPerAtlas,
            sheetWidth: uu.blockAtlasWidth,
            armourAtlasUrl: uu.armourAtlas,
            texture: uu => {
              var Ru, yu;
              return null !== (Ru = null !== (yu = Su(uu)) && void 0 !== yu ? yu : (0, Xu.d)(Nu, uu)) && void 0 !== Ru ? Ru : null
            },
            model: uu => void 0 === ru[uu] && Vu[uu] || null,
            averageColours: Ku
          }
        }(eu, uu, Cu, ku)
      }(Wu, null === uu.gameSource, yu), du = {
        pack: uu.pack,
        maxLayerWidth: yu,
        assets: Hu
      };
      return pu = du, Hu.catch((() => {
        pu === du && (pu = null)
      })), Hu
    }

    function ju(uu, Ru, Eu, Ku) {
      const Qu = (0, Xu.d)(uu, Eu);
      if (Qu) return Qu;
      try {
        return Ru(Eu, Ku).url
      } catch {
        return yu(3119)
      }
    }
  }
};
Object.freeze(modules);
for (const uu in modules) Object.freeze(modules[uu]);