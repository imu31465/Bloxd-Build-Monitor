export const id = 153;
export const ids = [153];
export const modules = {
  40647: (uu, Ru, yu) => {
    yu.r(Ru), yu.d(Ru, {
      openMobLineupPreview: () => Fu,
      openMobPreview: () => zu,
      openPetPreview: () => wu
    });
    var Eu = yu(39380),
      Ku = yu(39643),
      Qu = yu(40655),
      mu = yu(36986),
      Ju = yu(36828),
      Nu = yu(39808),
      Xu = yu(40683),
      Vu = yu(38241),
      ru = yu(36894),
      Bu = yu(36882),
      xu = yu(36819),
      Su = yu(38144),
      pu = yu(38139),
      Tu = yu(37846),
      Wu = yu(37900),
      ju = yu(37861),
      Hu = yu(37541),
      du = yu(2632),
      bu = yu(37345);
    yu(40692), yu(40057), yu(40701);
    const Cu = 22,
      ku = 13,
      eu = Math.PI - Math.PI / 16,
      Au = 6,
      Du = Math.PI / 4;
    let Mu = null;
    const Iu = {},
      Gu = new Map;

    function Uu() {
      if (null !== Mu) return Mu;
      const uu = document.createElement("canvas");
      uu.classList.add("MobPreviewCanvas");
      const Ru = new Eu.e(uu, !0, {
        preserveDrawingBuffer: !0
      });
      Ru.CEu = (0, du.h)().oS.engine.CEu;
      const yu = new Ku.c(Ru);
      yu.clearColor = new mu.c(0, 0, 0, 0), yu.ambientColor = new mu.Color3(1, 1, 1);
      const Xu = new Qu.e("GT", Math.PI / 2, Math.PI / 2, Cu, Ju.MS.Zero(), yu),
        Vu = new Nu.b("light", new Ju.MS(-.1, 1, -.3), yu);
      return Vu.diffuse = new mu.Color3(1, 1, 1), Vu.specular = new mu.Color3(1, 1, 1), Vu.groundColor = new mu.Color3(.5, .5, .5), Mu = {
        engine: Ru,
        cp: yu,
        canvas: uu,
        camera: Xu
      }, Mu
    }

    function nu(uu) {
      return Iu[uu] ??= (0, Tu.x)(uu, Uu().cp, !0).catch((Ru => {
        throw delete Iu[uu], Ru
      })), Iu[uu]
    }

    function su(uu) {
      let Ru = Gu.get(uu);
      return Ru || (Ru = Hu.u[uu].loadModel(Uu().cp, !1).then((uu => (uu.tC(!1), uu)), (Ru => {
        throw Gu.delete(uu), Ru
      })), Gu.set(uu, Ru)), Ru
    }

    function tu(uu) {
      var Ru, yu, Eu;
      let {
        mobType: Ku,
        variation: Qu,
        animation: mu
      } = uu, Nu = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null, Cu = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
      const Au = null !== (Ru = null === Nu || void 0 === Nu ? void 0 : Nu.size) && void 0 !== Ru ? Ru : 1,
        Du = null !== (yu = null === Nu || void 0 === Nu ? void 0 : Nu.cosmetics) && void 0 !== yu ? yu : [],
        Mu = null !== (Eu = null === Nu || void 0 === Nu ? void 0 : Nu.pC) && void 0 !== Eu ? Eu : null;
      let Iu = !1,
        Gu = null,
        tu = null;
      const {
        engine: lu,
        cp: gu
      } = Uu(), cu = gu.onBeforeRenderObservable.add((() => {
        var uu;
        null === (uu = tu) || void 0 === uu || uu.render(lu.getDeltaTime())
      })), Lu = null === Mu ? null : su(Mu).catch((uu => (console.error(`Mob preview: could not load ${Mu}`, uu), null)));
      return Promise.all([nu(Ku), Lu]).then((uu => {
        var Ru, yu, Eu;
        let [Nu, nu] = uu;
        if (Iu) return;
        const su = (0, du.h)().oS.PD,
          {
            hitBoxDimensions: lu
          } = (0, Vu.c)(Ku),
          gu = ku / Math.max(lu.height, lu.width);
        if (Gu = (0, Tu.j)(Ku, gu * Au, !0, !0), su.setPosition(Gu, Cu, -lu.height * gu / 2, 0), su.setRotationEulerY(Gu, eu), Nu.meshApi instanceof ju.d && Du.length > 0)
          for (const [Ku, Qu] of Du) Nu.meshApi.updatePlayerCosmetic(null, Gu, Ku, Qu, !0);
        else Nu.meshApi.updateVariation(Gu, Ku, null !== Qu && void 0 !== Qu ? Qu : "default");
        null !== Mu && null !== nu && function(uu, Ru, yu, Eu) {
          var Ku;
          const Qu = Hu.u[uu],
            mu = (0, Su.h)();
          (0, Su.e)(Qu, null === (Ku = (0, Wu.b)(yu).meshMetadata.heldItemPositionParams) || void 0 === Ku ? void 0 : Ku.itemOffset, mu);
          const Nu = bu.c * mu.pp.y,
            Vu = mu.usesQuaternion ? mu.quaternion : Ju.Quaternion.FromEulerVector(mu.rotation),
            ru = new Xu.c(`${Ru.name}Hand`, Uu().cp);
          ru.position.Oyu((0, pu.b)(mu.position, Vu, Nu, Qu.heldModelOffsetY())), ru.rotationQuaternion = Vu, ru.pp.set(mu.pp.x, Nu, mu.pp.z), Ru.clone(`${Ru.name}Held`, ru).tC(!0);
          const Bu = (0, du.h)().oS.PD;
          Bu.attachTransformNode(ru, Eu, Bu.getNamedNode(Eu, "ArmRightMesh"))
        }(Mu, nu, Ku, Gu), su.set(Gu, "aOpacity", 1);
        const cu = null !== (Ru = (0, Wu.b)(Ku).meshMetadata.lifeformTypeForModelOverride) && void 0 !== Ru ? Ru : Ku;
        tu = new xu.AnimatorState, tu.thinInstMgr = su, tu.qD = Gu, tu.oyu = su.kEu(Gu, 0), tu.modelLifeformType = cu, tu.nodeNameAliases = null !== (yu = null === (Eu = (0, ru.b)(cu)) || void 0 === Eu ? void 0 : Eu.nodeNameAliases) && void 0 !== yu ? yu : null, tu.startAnimation(mu, Bu.f.Movement)
      })).catch((uu => {
        console.error(`Mob preview: could not load ${Ku}`, uu)
      })), () => {
        Iu = !0, gu.onBeforeRenderObservable.remove(cu), null !== Gu && (0, du.h)().oS.PD.delete(Gu)
      }
    }

    function lu(uu, Ru) {
      return tu({
        mobType: "NPC",
        variation: null,
        animation: uu.animation
      }, uu, Ru)
    }

    function gu(uu) {
      let {
        mobType: Ru,
        variation: yu,
        metaInfo: Eu,
        tamed: Ku
      } = uu, Qu = !1, mu = null, Ju = 0;
      const Nu = (0, du.h)(),
        Xu = Nu.oS.PD,
        Vu = uu => {
          Ju += Du * (uu / 1e3) % (2 * Math.PI), Xu.setRotationEulerY(mu, Ju)
        };
      return nu(Ru).then((uu => {
        if (Qu) return;
        mu = (0, Tu.j)(Ru, Au, !0, !0), Xu.setPosition(mu, 0, -Au, 0), uu.meshApi.updateVariation(mu, Ru, yu);
        const Ju = {
          wool: "Sheared" !== Eu,
          saddle: "Saddled" === Eu,
          antlers: "Antlers" === Eu,
          collar: Ku
        };
        for (const [Ru, yu] of Object.entries(Ju)) Xu.hasGroup(mu, Ru) && uu.meshApi.setMeshGroupVisibility(mu, Ru, yu);
        Xu.set(mu, "aOpacity", 1), Nu.on("renderTickBegin", Vu)
      })).catch((uu => {
        console.error(`Pet preview: could not load ${Ru}`, uu)
      })), () => {
        Qu = !0, Nu.off("renderTickBegin", Vu), null !== mu && Xu.delete(mu)
      }
    }
    class cu {
      constructor(uu, Ru) {
        this.place = Ru, this.remove = null;
        const {
          engine: yu,
          cp: Eu,
          canvas: Ku
        } = Uu();
        uu.appendChild(Ku), yu.resize(), yu.runRenderLoop((() => {
          Eu.render()
        }))
      }
      show(uu) {
        var Ru;
        null === (Ru = this.remove) || void 0 === Ru || Ru.call(this), this.remove = this.place(uu)
      }
      resize(uu, Ru) {
        const {
          engine: yu,
          canvas: Eu
        } = Uu();
        Eu.width = uu, Eu.height = Ru, yu.resize()
      }
      close() {
        var uu;
        Uu().engine.stopRenderLoop(), null === (uu = this.remove) || void 0 === uu || uu.call(this), this.remove = null
      }
    }
    class Lu {
      constructor(uu) {
        this.preview = void 0, this.view = {
          figures: [],
          shown: []
        }, this.aspect = 1, this.placed = [], this.preview = new cu(uu, (() => () => {}))
      }
      show(uu) {
        uu.figures !== this.view.figures && this.preload(uu.figures), this.view = uu, this.place()
      }
      resize(uu, Ru) {
        this.preview.resize(uu, Ru), this.aspect = uu / Ru, this.place()
      }
      close() {
        this.preview.close();
        for (const uu of this.placed) null === uu || void 0 === uu || uu.remove();
        this.placed = []
      }
      preload(uu) {
        const Ru = () => {};
        nu("NPC").catch(Ru);
        for (const {
            pC: yu
          }
          of uu) null !== yu && su(yu).catch(Ru)
      }
      place() {
        const {
          figures: uu,
          shown: Ru
        } = this.view, yu = uu.map(((yu, Eu) => {
          var Ku;
          const Qu = null !== (Ku = this.placed[Eu]) && void 0 !== Ku ? Ku : null;
          if (!Ru[Eu]) return null === Qu || void 0 === Qu || Qu.remove(), null;
          const mu = (Ju = (Eu + .5) / uu.length, Nu = this.aspect, (.5 - Ju) * (2 * Cu * Math.tan(Uu().camera.fov / 2)) * Nu);
          var Ju, Nu;
          return null !== Qu && Qu.figure === yu && Qu.x === mu ? Qu : (null === Qu || void 0 === Qu || Qu.remove(), {
            figure: yu,
            x: mu,
            remove: lu(yu, mu)
          })
        }));
        for (const Eu of this.placed.slice(uu.length)) null === Eu || void 0 === Eu || Eu.remove();
        this.placed = yu
      }
    }

    function zu(uu) {
      return new cu(uu, tu)
    }

    function Fu(uu) {
      return new Lu(uu)
    }

    function wu(uu) {
      return new cu(uu, gu)
    }
  },
  38558: (uu, Ru, yu) => {
    yu.d(Ru, {
      d: () => Bu
    });
    var Eu = yu(36900),
      Ku = yu(36909),
      Qu = yu(37168),
      mu = yu(36915),
      Ju = yu(36906);

    function Nu(uu) {
      return `\n\t\t\t\t${(0,Ju.v)(uu,"mat2","rotate",[{name:"ang",type:"float"}],`\
      n\ t\ t\ t\ t\ t$ {
        (0, Ju.D)(uu, "float", "s", "sin(ang)")
      }\
      n\ t\ t\ t\ t\ t$ {
        (0, Ju.D)(uu, "float", "c", "cos(ang)")
      }\
      n\ t\ t\ t\ t\ treturn $ {
        (0, Ju.k)(uu, "mat2", "c", "s", "-s", "c")
      };\
      n\ t\ t\ t\ t`)}\n\t\t\t`
    }

    function Xu(uu, Ru) {
      let yu = (0, Ju.Db)(uu, "skele" + (Ru - 1));
      for (let Ku = Ru - 2; Ku >= 0; Ku--) yu = (0, Ju.vb)(uu, `boneIdx == ${Ku}`, (0, Ju.Db)(uu, `skele${Ku}`), yu);
      const Eu = "bone.yz + rotate(bone.x) * pivot - pivot";
      return `\n\t\t\t\t${(0,Ju.D)(uu,"int","boneIdx",(0,Ju.zb)(uu,"BLOXD_CAPE_MAX_Y - positionUpdated.y"))}\n\t\t\t\t${(0,Ju.D)(uu,"vec3","bone",yu)}\n\t\t\t\t${(0,Ju.D)(uu,"vec2","pivot",(0,Ju.k)(uu,"vec2","0.0",`${(0,Ju.Jb)(uu,"position")}.z`))}\n\t\t\t\t${(0,Ju._)(uu)?`positionUpdated = vec3f(positionUpdated.x, positionUpdated.yz + (${Eu}));`:`positionUpdated.yz += ${Eu};`}\n\t\t`
    }

    function Vu(uu) {
      return `\n\t\t\t\t#ifdef NORMAL\n\t\t\t\tnormalUpdated = ${(0,Ju.k)(uu,"vec3","normalUpdated.x","rotate(bone.x) * normalUpdated.yz")};\n\t\t\t\t#endif\n\t\t`
    }
    const ru = {
        x: 0,
        y: 0,
        z: 0,
        Tyu(uu, Ru) {
          return this.x = uu[Ru], this.y = uu[Ru + 1], this.z = uu[Ru + 2], this
        }
      },
      Bu = {
        name: "Cape",
        className: "CapeMaterialPlugin",
        priority: 200,
        defines: (uu, Ru) => ({
          ...(0, Eu.e)("CAPE"),
          BLOXD_CAPE_BONES: `${uu}`,
          BLOXD_CAPE_MAX_Y: (0, Ku.mb)(Ru)
        }),
        getUniforms(uu) {
          return (0, Qu.b)(function(uu) {
            const Ru = [];
            for (let yu = 0; yu < uu; yu++) Ru.push({
              name: `skele${yu}`,
              type: "highp vec3"
            });
            return Ru
          }(this.skeleLen), "vertex", uu)
        },
        bind(uu) {
          for (let Ru = 0; Ru < this.skeleLen; Ru++) uu.updateVector3(`skele${Ru}`, ru.Tyu(this.skele, 3 * Ru))
        },
        uniformsVersion() {
          return this.bonesVersion
        },
        getCustomCode(uu, Ru) {
          return "vertex" !== uu ? null : {
            CUSTOM_VERTEX_DEFINITIONS: Nu(Ru),
            CUSTOM_VERTEX_UPDATE_POSITION: Xu(Ru, this.skeleLen),
            CUSTOM_VERTEX_UPDATE_NORMAL: Vu(Ru)
          }
        }
      };
    (0, mu.r)(Bu)
  },
  38458: (uu, Ru, yu) => {
    yu.d(Ru, {
      b: () => Vu,
      f: () => ru
    });
    var Eu = yu(36900),
      Ku = yu(37168),
      Qu = yu(36906),
      mu = yu(36915);
    const Ju = "bloxdTextLodBias",
      Nu = [{
        name: Ju,
        type: "float"
      }],
      Xu = "bloxdTextSample",
      Vu = {
        planes: -.5,
        boards: -.5
      },
      ru = {
        name: "TextSampler",
        className: "TextSamplerMaterialPlugin",
        priority: 60,
        defines: () => (0, Eu.e)("TEXT_SAMPLER"),
        getUniforms: uu => (0, Ku.b)(Nu, "fragment", uu),
        bind(uu) {
          uu.updateFloat(Ju, this.lodBias)
        },
        uniformsVersion: () => 0,
        getCustomCode(uu, Ru) {
          if ("fragment" !== uu) return null;
          const yu = (0, Qu.M)(Ru, `vec4 ${Xu}(sampler2D s, vec2 uv, float bias)`, `fn ${Xu}(t: texture_2d<f32>, ts: sampler, uv: vec2f, bias: f32) -> vec4f`),
            Eu = (0, Qu.M)(Ru, "texture2D(s, uv, bias)", "textureSampleBias(t, ts, uv, bias)"),
            Ku = `${(0,Qu.T)(Ru,"vDiffuseUV")} + uvOffset`,
            mu = (0, Qu.M)(Ru, `${Xu}(diffuseSampler, ${Ku}, ${(0,Qu.Db)(Ru,Ju)})`, `${Xu}(diffuseSampler, diffuseSamplerSampler, ${Ku}, ${(0,Qu.Db)(Ru,Ju)})`);
          return {
            CUSTOM_FRAGMENT_DEFINITIONS: `\n\t\t\t\t${yu} {\n\t\t\t\t\t${(0,Qu.D)(Ru,"vec4","texel",Eu)}\n\t\t\t\t\t// 8-bit premultiplied rounding can put the quotient just over 1; only alpha 0 hits the floor,\n\t\t\t\t\t// where the colour is 0 anyway.\n\t\t\t\t\treturn ${(0,Qu.k)(Ru,"vec4",`clamp(texel.rgb / max(texel.a, 1.0 / 255.0), ${(0,Qu.k)(Ru,"vec3","0.0")}, ${(0,Qu.k)(Ru,"vec3","1.0")})`,"texel.a")};\n\t\t\t\t}\n\t\t\t`,
            [(0, Qu.E)(Ru)]: `baseColor = ${mu};`
          }
        }
      };
    (0, mu.r)(ru)
  },
  40701: (uu, Ru, yu) => {
    yu.r(Ru), yu.d(Ru, {
      CapeMaterialPlugin: () => du,
      HueTintMaterialPlugin: () => bu,
      LifeformMaterialPlugin: () => Cu,
      OverlayMaterialPlugin: () => ku
    });
    var Eu = yu(40703),
      Ku = yu(37757);
    class Qu extends((0, Eu.h)(Ku.b)) {}(0, Eu.k)(Ku.b, Qu);
    var mu = yu(36898);
    class Ju extends((0, Eu.h)(mu.i)) {}(0, Eu.k)(mu.i, Ju);
    var Nu = yu(37617);
    class Xu extends((0, Eu.h)(Nu.g)) {}(0, Eu.k)(Nu.g, Xu);
    var Vu = yu(37150),
      ru = yu(39827),
      Bu = yu(37141);
    class xu extends((0, Eu.h)(Bu.c)) {
      constructor(uu, Ru, yu) {
        super(uu, Ru, yu), (0, Vu.l)(uu)
      }
      dispose(uu) {
        (0, Vu.n)(this._material), super.dispose(uu)
      }
    }(0, Eu.k)(Bu.c, xu), (0, Bu.g)({
      disableUnusedSpecularTerm: Eu.e,
      isLightingDisabled: uu => uu instanceof ru.StandardMaterial && uu.disableLighting
    });
    var Su = yu(38458);
    class pu extends((0, Eu.h)(Su.f)) {}(0, Eu.k)(Su.f, pu);
    var Tu = yu(38558),
      Wu = yu(36994),
      ju = yu(37876),
      Hu = yu(36943);
    class du extends((0, Eu.h)(Tu.d)) {}(0, Eu.k)(Tu.d, du);
    class bu extends((0, Eu.h)(Wu.d)) {}(0, Eu.k)(Wu.d, bu);
    class Cu extends((0, Eu.h)(ju.j)) {}(0, Eu.k)(ju.j, Cu);
    class ku extends((0, Eu.h)(Hu.b)) {}(0, Eu.k)(Hu.b, ku)
  },
  40703: (uu, Ru, yu) => {
    yu.d(Ru, {
      e: () => Fu,
      h: () => ju,
      k: () => Yu
    });
    var Eu = yu(39827),
      Ku = yu(40707),
      Qu = yu(40750),
      mu = yu(40709),
      Ju = yu(37581),
      Nu = yu(37590),
      Xu = yu(37598),
      Vu = yu(37605),
      ru = yu(36932),
      Bu = yu(36934),
      xu = yu(40718),
      Su = yu(36915),
      pu = yu(36923),
      Tu = yu(36906);

    function Wu(uu, Ru) {
      return Object.assign((function(uu, yu, Eu, Ku) {
        return Ru(this.featureState, uu, yu, Eu, Ku)
      }), {
        qx: uu
      })
    }

    function ju(uu) {
      const Ru = class extends xu.e {
          constructor(Ru, yu) {
            const Eu = (0, pu.U)(Ru),
              Ku = Eu && (0, pu.u)(Eu, uu.name);
            for (var Qu = arguments.length, mu = new Array(Qu > 2 ? Qu - 2 : 0), Ju = 2; Ju < Qu; Ju++) mu[Ju - 2] = arguments[Ju];
            super(Ru, uu.name, uu.priority, Ku ? Ku.defines : uu.defines(...mu), !1), this.featureState = void 0, this.featureState = yu, this._pluginManager._addPlugin(this), this._enable(!0), (0, pu.x)(this._material, uu, this.featureState, this._pluginDefineNames)
          }
          getClassName() {
            return uu.className
          }
          isCompatible(uu) {
            return uu === Tu.c.GLSL || uu === Tu.c.WGSL
          }
        },
        yu = (0, Su.l)(uu);
      for (const [Eu, Ku] of Object.entries(Su.e)) {
        const Qu = uu[Eu];
        if (Qu) {
          const uu = yu[Eu];
          Object.defineProperty(Ru.prototype, Ku, {
            value: Wu(Qu, uu),
            writable: !0,
            configurable: !0
          })
        }
      }
      return Ru
    }
    class Hu extends(ju(Ju.b)) {}
    var du = yu(39380),
      bu = yu(40723);
    const Cu = new WeakMap;

    function ku(uu, Ru, yu) {
      let Eu = Cu.get(yu);
      Eu || (Eu = new Map, Cu.set(yu, Eu));
      const {
        url: Ku
      } = uu;
      let Qu = Eu.get(Ku);
      return Qu || (Qu = async function(uu, Ru, yu) {
        const {
          width: Eu,
          height: Ku
        } = uu.getSize(), Qu = Math.round(Ku / Eu), Ju = Ru && Ru.byteLength === Eu * Eu * Qu * 4 ? Ru : uu._readPixelsSync();
        return new bu.e(Ju, Eu, Eu, Qu, du.e.TEXTUREFORMAT_RGBA, yu, !0, !1, mu.e.NEAREST_NEAREST_MIPLINEAR)
      }(uu, Ru, yu), Eu.set(Ku, Qu), Qu.catch((() => {
        Eu.delete(Ku)
      }))), Qu
    }
    var eu = yu(37612);
    class Au extends(ju(Nu.j)) {
      constructor(uu, Ru) {
        super(uu, Ru), Ru.textures.forEach(((uu, Ru) => {
          uu.mirror.onLoadObservable.add((uu => {
            this.setTextureArrayData(uu, Ru).catch((uu => {
              console.error(`Failed to build texture array for atlas ${Ru}`, uu)
            }))
          }))
        })), (0, eu.g)(Ru, uu.shaderLanguage)
      }
      async setTextureArrayData(uu, Ru) {
        var yu, Eu;
        const Ku = this.featureState,
          {
            width: Qu,
            height: mu
          } = uu.getSize(),
          Ju = Ku.useWebGL2 ? await ku(uu, null !== (yu = null === (Eu = Ku.sources.pixels) || void 0 === Eu ? void 0 : Eu[Ru]) && void 0 !== yu ? yu : null, this._material.lD()) : null;
        (0, eu.d)(this._material, Ku, Ru, Ju, Qu, Math.round(mu / Qu), this._material.shaderLanguage)
      }
    }
    var Du = yu(40732),
      Mu = yu(39877),
      Iu = yu(36828),
      Gu = yu(40741),
      Uu = yu(39990),
      nu = yu(39866),
      su = yu(40683),
      tu = yu(37306),
      lu = yu(40744);
    class gu extends Du.c {
      getData() {
        return null
      }
      _rebuild() {}
      restore() {
        super._rebuild()
      }
    }
    const cu = {
      Mesh: Gu.b,
      TransformNode: su.c,
      XS: Du.c,
      VertexBuffer: Du.d,
      BoundingInfo: Mu.c,
      MS: Iu.MS,
      ArenaBuffer: gu,
      SubMesh: nu.c,
      VertexData: Uu.e,
      MirroredGeometry: lu.d,
      meshFromArrays: lu.g,
      plainMeshFromArrays: lu.i
    };
    (0, tu.f)(cu);
    var Lu = yu(37150);
    class zu extends(ju(Vu.j)) {
      constructor(uu, Ru) {
        if (super(uu, Ru), uu instanceof Eu.StandardMaterial && Ru.dirLightCount > 0) {
          const Ru = uu,
            yu = Ru._blockDirtyMechanism;
          Ru._blockDirtyMechanism = !0, uu.disableLighting = !0, Ru._blockDirtyMechanism = yu;
          const Eu = (0, pu.U)(uu);
          Eu && (Eu.disableLighting = !0, (0, pu.S)(Eu))
        }(0, Lu.l)(uu)
      }
      dispose(uu) {
        (0, Lu.n)(this._material), super.dispose(uu)
      }
    }

    function Fu(uu, Ru) {
      if (!(Ru instanceof Eu.StandardMaterial) || Ru.specularTexture) return;
      const {
        r: yu,
        g: Ku,
        b: Qu
      } = Ru.specularColor;
      0 === yu && 0 === Ku && 0 === Qu && (uu.SPECULARTERM = !1)
    }(0, Vu.g)({
      disableUnusedSpecularTerm: Fu
    });
    var wu = yu(37019),
      Zu = yu(37324);
    const hu = new RegExp(`^#define ${Xu.c}\\s*$`, "m");
    class Pu extends(ju(Xu.e)) {
      constructor(uu, Ru) {
        super(uu, Ru), this.VS = !1, Ru.ditherOnlyWhileFading && (Zu.d.add(uu), this.prewarmDitherTwins(uu))
      }
      prewarmDitherTwins(uu) {
        const Ru = new WeakSet;
        uu.onEffectCreatedObservable.add((yu => {
          let {
            effect: Eu,
            subMesh: Ku
          } = yu;
          if (this.featureState.prewarmingDither || Ru.has(Eu)) return;
          Ru.add(Eu);
          const Qu = null === Ku || void 0 === Ku ? void 0 : Ku.getMesh();
          Qu && !hu.test(Eu.defines) && uu.lD().onAfterRenderObservable.addOnce((() => {
            this.prewarmDither(Qu) || Ru.delete(Eu)
          }))
        }))
      }
      prewarmDither(uu) {
        if (this.VS || uu.wyu()) return !1;
        const Ru = new nu.c(0, 0, 0, 0, 0, uu, void 0, !1, !1);
        this.featureState.prewarmingDither = !0;
        try {
          this._material.isReadyForSubMesh(uu, Ru)
        } finally {
          this.featureState.prewarmingDither = !1
        }
        return null !== Ru.effect
      }
      dispose(uu) {
        this.VS = !0, super.dispose(uu)
      }
    }
    const iu = new Map;

    function Yu(uu, Ru) {
      iu.set(uu, Ru)
    }
    Yu(Ju.b, Hu), Yu(Nu.j, Au), Yu(Xu.e, Pu), Yu(Vu.j, zu), (0, ru.c)({
      create: (uu, Ru) => {
        const yu = new Eu.StandardMaterial(uu.name, Ru);
        return (0, wu.p)(uu, yu), yu.detailMap._pluginDefineNames
      },
      write: (uu, Ru, yu) => {
        (0, wu.T)(uu.mirror, Ru, yu)
      },
      addFeature: (uu, Ru, yu) => {
        const Eu = iu.get(Ru.feature);
        if (!Eu) throw new Error(`${Ru.feature.name} has no plugin class (registerPluginClass)`);
        new Eu(uu.mirror, Ru.state, ...yu)
      },
      texture: (uu, Ru, yu) => {
        let {
          url: Eu,
          noMipmap: Ku,
          invertY: Qu,
          samplingMode: Ju,
          data: Nu,
          sets: Xu
        } = yu;
        if (!Nu) {
          const yu = new mu.e(Eu, Ru, Ku, Qu, Ju);
          return Object.assign(yu, Xu), void(0, Bu.M)(uu, yu)
        }
        const Vu = {},
          ru = new Promise(((uu, Ru) => {
            Vu.onLoad = uu, Vu.onError = (uu, yu) => {
              Ru(new Error(`${Nu.context}: ${(null===yu||void 0===yu?void 0:yu.message)||uu||"Failed to load texture"}`))
            }
          })),
          {
            mimeType: xu,
            bytes: Su,
            label: pu
          } = Nu,
          Tu = {
            noMipmap: Ku,
            invertY: !1,
            samplingMode: Ju,
            ...Vu,
            mimeType: xu,
            loaderOptions: void 0,
            useSRGBBuffer: !1
          },
          Wu = new mu.e(null, Ru, Tu);
        wu.t.set(Wu, ru), Object.assign(Wu, Xu), Wu.updateURL(Eu, Su);
        const ju = Wu.getInternalTexture();
        ju && (ju.label = pu), uu.uvSet = Wu.coordinatesIndex, uu.matrix.set((0, wu.L)(Wu)), (0, Bu.M)(uu, Wu)
      },
      cube: (uu, Ru, yu) => {
        let {
          rootUrl: Eu,
          files: Qu,
          noMipmap: Ju,
          luminance: Nu
        } = yu;
        const {
          samplingMode: Xu
        } = uu.sampler, Vu = Xu === (0, Bu.F)(Ju) ? null : () => {
          (0, wu.J)(ru, Xu)
        }, ru = new Ku.e(Eu, Ru, null, Ju, Qu, Vu, null, (0, Bu.C)(Nu));
        ru.coordinatesMode = mu.e.SKYBOX_MODE, (0, Bu.M)(uu, ru)
      },
      canvas: (uu, Ru, yu) => {
        let {
          width: Eu,
          height: Ku,
          mipmaps: Ju,
          samplingMode: Nu,
          hasAlpha: Xu = !1,
          wrap: Vu = mu.e.CLAMP_ADDRESSMODE
        } = yu;
        const ru = new Qu.c(Ru, {
          width: Eu,
          height: Ku
        }, uu, Ju, Nu);
        ru.hasAlpha = Xu, ru.wrapU = Vu, ru.wrapV = Vu;
        const Bu = (0, wu.B)(ru);
        return (0, wu.D)(Bu, ru), Bu
      }
    })
  },
  40744: (uu, Ru, yu) => {
    yu.d(Ru, {
      d: () => Vu,
      g: () => ru,
      i: () => Bu
    });
    var Eu = yu(40732),
      Ku = yu(39625),
      Qu = yu(39877),
      mu = yu(39994),
      Ju = yu(40741),
      Nu = yu(39990),
      Xu = yu(37203);
    class Vu extends mu.b {
      constructor() {
        super(...arguments), this.model = null, this.onGeometryUpdated = (uu, Ru) => {
          this.releaseUnlessInstanced(Ru)
        }, this.onLinked = null
      }
      link(uu) {
        var Ru;
        (0, Xu.r)(uu), this.model = uu, null === (Ru = this.onLinked) || void 0 === Ru || Ru.call(this, uu)
      }
      relink() {
        this.release();
        const uu = [];
        for (const Ku of Object.values(this._vertexBuffers))
          if (!Ku.getIsInstanced()) {
            const {
              byteOffset: Ru,
              byteStride: yu,
              type: Eu,
              normalized: Qu
            } = Ku;
            uu.push({
              kind: Ku.getKind(),
              data: Ku.getData(),
              offset: Ru,
              stride: yu,
              components: Ku.getSize(),
              glType: Eu,
              isNormalized: Qu
            })
          } const Ru = this._indices.length ? this._indices : null,
          {
            minimum: yu,
            maximum: Eu
          } = this.extend;
        this.link(new Xu.h(uu, Ru, this.getTotalVertices(), new Float64Array(yu.AEu()), new Float64Array(Eu.AEu())))
      }
      copy(uu) {
        if (!this.model) return super.copy(uu);
        const Ru = new Vu(uu, this.lD()),
          yu = this.DEu(void 0, !0);
        yu && Ru.setIndices(yu);
        let mu = !1;
        for (const Qu in this._vertexBuffers) {
          const uu = this._vertexBuffers[Qu],
            yu = uu.getData();
          if (!yu) continue;
          const Ju = uu.getSize(),
            {
              type: Nu,
              byteOffset: Xu,
              byteStride: Vu,
              normalized: ru
            } = uu;
          mu ||= uu.isUpdatable();
          const Bu = uu.getIsInstanced() ? (yu instanceof Array ? 4 * yu.length : yu.byteLength) / Vu : this.getTotalVertices(),
            xu = (0, Ku.u)(yu, Ju, Nu, Xu, Vu, Bu, !0),
            Su = {
              updatable: uu.isUpdatable(),
              stride: Ju,
              type: Nu,
              normalized: ru,
              takeBufferOwnership: !0,
              instanced: uu.getIsInstanced()
            };
          Ru.setVerticesBuffer(new Eu.d(this.eS(), xu, Qu, Su), Bu)
        }
        return Ru._updatable = mu, Ru._boundingInfo = new Qu.c(this.extend.minimum, this.extend.maximum), Ru.relink(), Ru
      }
      static mergeMeshes(uu, Ru, yu, Eu, Ku, Qu) {
        const Nu = uu[0].lD(),
          Xu = new Ju.b(uu[0].name + "_merged", Nu),
          ru = new Vu(mu.b.RandomId(), Nu, void 0, !1, Xu);
        try {
          if (!Ju.b.MergeMeshes(uu, Ru, yu, Xu, Ku, Qu)) return Xu.dispose(), null
        } catch (Bu) {
          throw Xu.dispose(), Bu
        }
        return ru.relink(), Xu
      }
      removeVerticesData(uu) {
        this.releaseUnlessInstanced(uu), super.removeVerticesData(uu)
      }
      dispose() {
        this.release(), super.dispose()
      }
      releaseUnlessInstanced(uu) {
        var Ru;
        uu && null !== (Ru = this.getVertexBuffer(uu)) && void 0 !== Ru && Ru.getIsInstanced() || this.release()
      }
      release() {
        this.model && ((0, Xu.B)(this.model), this.model = null)
      }
    }

    function ru(uu, Ru, yu) {
      let Eu = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : new Ju.b(uu, yu);
      const Ku = (0, Xu.o)(Ru),
        {
          positions: Qu,
          normals: ru,
          uvs: Bu,
          indices: xu,
          named: Su = {}
        } = Ru,
        pu = new Nu.e;
      pu.positions = Qu, pu.normals = null !== ru && void 0 !== ru ? ru : null, pu.uvs = null !== Bu && void 0 !== Bu ? Bu : null, pu.indices = xu;
      const Tu = new Vu(mu.b.RandomId(), yu, pu, !1, Eu);
      for (const {
          kind: mu,
          components: Ju
        }
        of Ku.vertexAttributes) mu in Su && Eu.setVerticesData(mu, Su[mu], !1, Ju);
      return Tu.link(Ku), Eu
    }

    function Bu(uu, Ru, yu) {
      let Eu = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
      const Ku = new Ju.b(uu, yu),
        {
          positions: Qu,
          normals: mu,
          uvs: Xu,
          indices: Vu
        } = Ru;
      return Object.assign(new Nu.e, {
        positions: Qu,
        normals: mu,
        uvs: Xu,
        indices: Vu
      }).applyToMesh(Ku, Eu), Ku
    }
  },
  8555: (uu, Ru, yu) => {
    yu.d(Ru, {
      b: () => Vu,
      d: () => Ju,
      e: () => Nu
    });
    var Eu = yu(2128),
      Ku = yu(1215),
      Qu = yu(2132);
    const mu = ",";

    function Ju(uu) {
      if (!uu) return [];
      const Ru = new Set,
        yu = [];
      for (const Eu of uu.split(mu)) {
        const uu = Eu.trim();
        if ((0, Qu.k)(uu) && !Ru.has(uu) && (Ru.add(uu), yu.push(uu), yu.length >= Ku.p)) break
      }
      return yu
    }

    function Nu(uu) {
      const Ru = new Set,
        yu = [];
      for (const Eu of uu)
        if ((0, Qu.k)(Eu) && !Ru.has(Eu) && (Ru.add(Eu), yu.push(Eu), yu.length >= Ku.p)) break;
      return yu.join(mu)
    }

    function Xu() {
      return Nu(Qu.h)
    }

    function Vu(uu) {
      var Ru;
      return "emote" === uu ? Xu() : null !== (Ru = ru[uu][0]) && void 0 !== Ru ? Ru : Bu[uu]
    }
    const ru = Ku.w.reduce(((uu, Ru) => {
        const yu = [];
        for (const Qu in Eu.f[Ru]) {
          var Ku;
          "default" === (null === (Ku = (0, Eu.k)(Ru, Qu)) || void 0 === Ku ? void 0 : Ku.cosmeticPack) && yu.push(Qu)
        }
        return uu[Ru] = yu, uu
      }), {}),
      Bu = Ku.w.reduce(((uu, Ru) => (uu[Ru] = Object.keys(Eu.f[Ru])[0], uu)), {})
  }
};
Object.freeze(modules);
for (const uu in modules) Object.freeze(modules[uu]);