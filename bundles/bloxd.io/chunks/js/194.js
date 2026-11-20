export const id = 194;
export const ids = [194];
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
  }
};
Object.freeze(modules);
for (const uu in modules) Object.freeze(modules[uu]);