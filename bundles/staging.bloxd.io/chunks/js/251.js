export const id = 251;
export const ids = [251];
export const modules = {
  41307: (uu, Eu, ju) => {
    ju.r(Eu), ju.d(Eu, {
      openMobLineupPreview: () => Iu,
      openMobPreview: () => Su,
      openPetPreview: () => Fu
    });
    var su = ju(40092),
      Uu = ju(40346),
      Zu = ju(41314),
      Xu = ju(37671),
      lu = ju(37488),
      qu = ju(40503),
      fu = ju(41329),
      Cu = ju(38795),
      bu = ju(37568),
      cu = ju(37541),
      Nu = ju(37482),
      Ou = ju(38714),
      Yu = ju(38705),
      hu = ju(38462),
      Du = ju(38505),
      gu = ju(38482),
      Mu = ju(38178),
      eu = ju(2893),
      Gu = ju(38009);
    ju(41335), ju(40742), ju(41338);
    const pu = 22,
      wu = 13,
      Ju = Math.PI - Math.PI / 16,
      du = 6,
      au = Math.PI / 4;
    let Pu = null;
    const ou = {},
      ku = new Map;

    function mu() {
      if (null !== Pu) return Pu;
      const uu = document.createElement("canvas");
      uu.classList.add("MobPreviewCanvas");
      const Eu = new su.c(uu, !0, {
        preserveDrawingBuffer: !0
      });
      Eu.bsu = (0, eu.c)().tO.engine.bsu;
      const ju = new Uu.b(Eu);
      ju.clearColor = new Xu.b(0, 0, 0, 0), ju.ambientColor = new Xu.Color3(1, 1, 1);
      const fu = new Zu.d("Vh", Math.PI / 2, Math.PI / 2, pu, lu.dO.Zero(), ju),
        Cu = new qu.c("light", new lu.dO(-.1, 1, -.3), ju);
      return Cu.diffuse = new Xu.Color3(1, 1, 1), Cu.specular = new Xu.Color3(1, 1, 1), Cu.groundColor = new Xu.Color3(.5, .5, .5), Pu = {
        engine: Eu,
        vY: ju,
        canvas: uu,
        camera: fu
      }, Pu
    }

    function vu(uu) {
      return ou[uu] ??= (0, hu.t)(uu, mu().vY, !0).catch((Eu => {
        throw delete ou[uu], Eu
      })), ou[uu]
    }

    function Ku(uu) {
      let Eu = ku.get(uu);
      return Eu || (Eu = Mu.y[uu].loadModel(mu().vY, !1).then((uu => (uu.Wk(!1), uu)), (Eu => {
        throw ku.delete(uu), Eu
      })), ku.set(uu, Eu)), Eu
    }

    function Vu(uu) {
      var Eu, ju, su;
      let {
        mobType: Uu,
        variation: Zu,
        animation: Xu
      } = uu, qu = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null, pu = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
      const du = null !== (Eu = null === qu || void 0 === qu ? void 0 : qu.size) && void 0 !== Eu ? Eu : 1,
        au = null !== (ju = null === qu || void 0 === qu ? void 0 : qu.cosmetics) && void 0 !== ju ? ju : [],
        Pu = null !== (su = null === qu || void 0 === qu ? void 0 : qu.nG) && void 0 !== su ? su : null;
      let ou = !1,
        ku = null,
        Vu = null;
      const {
        engine: ru,
        vY: Qu
      } = mu(), iu = Qu.onBeforeRenderObservable.add((() => {
        var uu;
        null === (uu = Vu) || void 0 === uu || uu.render(ru.getDeltaTime())
      })), Wu = null === Pu ? null : Ku(Pu).catch((uu => (console.error(`Mob preview: could not load ${Pu}`, uu), null)));
      return Promise.all([vu(Uu), Wu]).then((uu => {
        var Eu, ju, su;
        let [qu, vu] = uu;
        if (ou) return;
        const Ku = (0, eu.c)().tO.oV,
          {
            hitBoxDimensions: ru
          } = (0, Cu.b)(Uu),
          Qu = wu / Math.max(ru.height, ru.width);
        if (ku = (0, hu.h)(Uu, Qu * du, !0, !0), Ku.setPosition(ku, pu, -ru.height * Qu / 2, 0), Ku.setRotationEulerY(ku, Ju), qu.meshApi instanceof gu.c && au.length > 0)
          for (const [Uu, Zu] of au) qu.meshApi.updatePlayerCosmetic(null, ku, Uu, Zu, !0);
        else qu.meshApi.updateVariation(ku, Uu, null !== Zu && void 0 !== Zu ? Zu : "default");
        null !== Pu && null !== vu && function(uu, Eu, ju, su) {
          var Uu;
          const Zu = Mu.y[uu],
            Xu = (0, Ou.i)();
          (0, Ou.e)(Zu, null === (Uu = (0, Du.e)(ju).meshMetadata.heldItemPositionParams) || void 0 === Uu ? void 0 : Uu.itemOffset, Xu);
          const qu = Gu.c * Xu.Of.y,
            Cu = Xu.usesQuaternion ? Xu.quaternion : lu.Quaternion.FromEulerVector(Xu.rotation),
            bu = new fu.e(`${Eu.name}Hand`, mu().vY);
          bu.position.yJ((0, Yu.b)(Xu.position, Cu, qu, Zu.heldModelOffsetY())), bu.rotationQuaternion = Cu, bu.Of.set(Xu.Of.x, qu, Xu.Of.z), Eu.clone(`${Eu.name}Held`, bu).Wk(!0);
          const cu = (0, eu.c)().tO.oV;
          cu.attachTransformNode(bu, su, cu.getNamedNode(su, "ArmRightMesh"))
        }(Pu, vu, Uu, ku), Ku.set(ku, "aOpacity", 1);
        const iu = null !== (Eu = (0, Du.e)(Uu).meshMetadata.lifeformTypeForModelOverride) && void 0 !== Eu ? Eu : Uu;
        Vu = new Nu.AnimatorState, Vu.thinInstMgr = Ku, Vu.mV = ku, Vu.rju = Ku.csu(ku, 0), Vu.modelLifeformType = iu, Vu.nodeNameAliases = null !== (ju = null === (su = (0, bu.d)(iu)) || void 0 === su ? void 0 : su.nodeNameAliases) && void 0 !== ju ? ju : null, Vu.startAnimation(Xu, cu.f.Movement)
      })).catch((uu => {
        console.error(`Mob preview: could not load ${Uu}`, uu)
      })), () => {
        ou = !0, Qu.onBeforeRenderObservable.remove(iu), null !== ku && (0, eu.c)().tO.oV.delete(ku)
      }
    }

    function ru(uu, Eu) {
      return Vu({
        mobType: "NPC",
        variation: null,
        animation: uu.animation
      }, uu, Eu)
    }

    function Qu(uu) {
      let {
        mobType: Eu,
        variation: ju,
        metaInfo: su,
        tamed: Uu
      } = uu, Zu = !1, Xu = null, lu = 0;
      const qu = (0, eu.c)(),
        fu = qu.tO.oV,
        Cu = uu => {
          lu += au * (uu / 1e3) % (2 * Math.PI), fu.setRotationEulerY(Xu, lu)
        };
      return vu(Eu).then((uu => {
        if (Zu) return;
        Xu = (0, hu.h)(Eu, du, !0, !0), fu.setPosition(Xu, 0, -du, 0), uu.meshApi.updateVariation(Xu, Eu, ju);
        const lu = {
          wool: "Sheared" !== su,
          saddle: "Saddled" === su,
          antlers: "Antlers" === su,
          collar: Uu
        };
        for (const [Eu, ju] of Object.entries(lu)) fu.hasGroup(Xu, Eu) && uu.meshApi.setMeshGroupVisibility(Xu, Eu, ju);
        fu.set(Xu, "aOpacity", 1), qu.on("renderTickBegin", Cu)
      })).catch((uu => {
        console.error(`Pet preview: could not load ${Eu}`, uu)
      })), () => {
        Zu = !0, qu.off("renderTickBegin", Cu), null !== Xu && fu.delete(Xu)
      }
    }
    class iu {
      constructor(uu, Eu) {
        this.place = Eu, this.remove = null;
        const {
          engine: ju,
          vY: su,
          canvas: Uu
        } = mu();
        uu.appendChild(Uu), ju.resize(), ju.runRenderLoop((() => {
          su.render()
        }))
      }
      show(uu) {
        var Eu;
        null === (Eu = this.remove) || void 0 === Eu || Eu.call(this), this.remove = this.place(uu)
      }
      resize(uu, Eu) {
        const {
          engine: ju,
          canvas: su
        } = mu();
        su.width = uu, su.height = Eu, ju.resize()
      }
      close() {
        var uu;
        mu().engine.stopRenderLoop(), null === (uu = this.remove) || void 0 === uu || uu.call(this), this.remove = null
      }
    }
    class Wu {
      constructor(uu) {
        this.preview = void 0, this.view = {
          figures: [],
          shown: []
        }, this.aspect = 1, this.placed = [], this.preview = new iu(uu, (() => () => {}))
      }
      show(uu) {
        uu.figures !== this.view.figures && this.preload(uu.figures), this.view = uu, this.place()
      }
      resize(uu, Eu) {
        this.preview.resize(uu, Eu), this.aspect = uu / Eu, this.place()
      }
      close() {
        this.preview.close();
        for (const uu of this.placed) null === uu || void 0 === uu || uu.remove();
        this.placed = []
      }
      preload(uu) {
        const Eu = () => {};
        vu("NPC").catch(Eu);
        for (const {
            nG: ju
          }
          of uu) null !== ju && Ku(ju).catch(Eu)
      }
      place() {
        const {
          figures: uu,
          shown: Eu
        } = this.view, ju = uu.map(((ju, su) => {
          var Uu;
          const Zu = null !== (Uu = this.placed[su]) && void 0 !== Uu ? Uu : null;
          if (!Eu[su]) return null === Zu || void 0 === Zu || Zu.remove(), null;
          const Xu = (lu = (su + .5) / uu.length, qu = this.aspect, (.5 - lu) * (2 * pu * Math.tan(mu().camera.fov / 2)) * qu);
          var lu, qu;
          return null !== Zu && Zu.figure === ju && Zu.x === Xu ? Zu : (null === Zu || void 0 === Zu || Zu.remove(), {
            figure: ju,
            x: Xu,
            remove: ru(ju, Xu)
          })
        }));
        for (const su of this.placed.slice(uu.length)) null === su || void 0 === su || su.remove();
        this.placed = ju
      }
    }

    function Su(uu) {
      return new iu(uu, Vu)
    }

    function Iu(uu) {
      return new Wu(uu)
    }

    function Fu(uu) {
      return new iu(uu, Qu)
    }
  },
  39141: (uu, Eu, ju) => {
    ju.d(Eu, {
      d: () => cu
    });
    var su = ju(37577),
      Uu = ju(37589),
      Zu = ju(37833),
      Xu = ju(37595),
      lu = ju(37582);

    function qu(uu) {
      return `\n\t\t\t\t${(0,lu.D)(uu,"mat2","rotate",[{name:"ang",type:"float"}],`\
      n\ t\ t\ t\ t\ t$ {
        (0, lu.I)(uu, "float", "s", "sin(ang)")
      }\
      n\ t\ t\ t\ t\ t$ {
        (0, lu.I)(uu, "float", "c", "cos(ang)")
      }\
      n\ t\ t\ t\ t\ treturn $ {
        (0, lu.r)(uu, "mat2", "c", "s", "-s", "c")
      };\
      n\ t\ t\ t\ t`)}\n\t\t\t`
    }

    function fu(uu, Eu) {
      let ju = (0, lu.Ab)(uu, "skele" + (Eu - 1));
      for (let Uu = Eu - 2; Uu >= 0; Uu--) ju = (0, lu.ub)(uu, `boneIdx == ${Uu}`, (0, lu.Ab)(uu, `skele${Uu}`), ju);
      const su = "bone.yz + rotate(bone.x) * pivot - pivot";
      return `\n\t\t\t\t${(0,lu.I)(uu,"int","boneIdx",(0,lu.xb)(uu,"BLOXD_CAPE_MAX_Y - positionUpdated.y"))}\n\t\t\t\t${(0,lu.I)(uu,"vec3","bone",ju)}\n\t\t\t\t${(0,lu.I)(uu,"vec2","pivot",(0,lu.r)(uu,"vec2","0.0",`${(0,lu.Fb)(uu,"position")}.z`))}\n\t\t\t\t${(0,lu.bb)(uu)?`positionUpdated = vec3f(positionUpdated.x, positionUpdated.yz + (${su}));`:`positionUpdated.yz += ${su};`}\n\t\t`
    }

    function Cu(uu) {
      return `\n\t\t\t\t#ifdef NORMAL\n\t\t\t\tnormalUpdated = ${(0,lu.r)(uu,"vec3","normalUpdated.x","rotate(bone.x) * normalUpdated.yz")};\n\t\t\t\t#endif\n\t\t`
    }
    const bu = {
        x: 0,
        y: 0,
        z: 0,
        sju(uu, Eu) {
          return this.x = uu[Eu], this.y = uu[Eu + 1], this.z = uu[Eu + 2], this
        }
      },
      cu = {
        name: "Cape",
        className: "CapeMaterialPlugin",
        priority: 200,
        defines: (uu, Eu) => ({
          ...(0, su.b)("CAPE"),
          BLOXD_CAPE_BONES: `${uu}`,
          BLOXD_CAPE_MAX_Y: (0, Uu.fb)(Eu)
        }),
        getUniforms(uu) {
          return (0, Zu.b)(function(uu) {
            const Eu = [];
            for (let ju = 0; ju < uu; ju++) Eu.push({
              name: `skele${ju}`,
              type: "highp vec3"
            });
            return Eu
          }(this.skeleLen), "vertex", uu)
        },
        bind(uu) {
          for (let Eu = 0; Eu < this.skeleLen; Eu++) uu.updateVector3(`skele${Eu}`, bu.sju(this.skele, 3 * Eu))
        },
        uniformsVersion() {
          return this.bonesVersion
        },
        getCustomCode(uu, Eu) {
          return "vertex" !== uu ? null : {
            CUSTOM_VERTEX_DEFINITIONS: qu(Eu),
            CUSTOM_VERTEX_UPDATE_POSITION: fu(Eu, this.skeleLen),
            CUSTOM_VERTEX_UPDATE_NORMAL: Cu(Eu)
          }
        }
      };
    (0, Xu.m)(cu)
  },
  39038: (uu, Eu, ju) => {
    ju.d(Eu, {
      d: () => Cu,
      e: () => bu
    });
    var su = ju(37577),
      Uu = ju(37833),
      Zu = ju(37582),
      Xu = ju(37595);
    const lu = "bloxdTextLodBias",
      qu = [{
        name: lu,
        type: "float"
      }],
      fu = "bloxdTextSample",
      Cu = {
        planes: -.5,
        boards: -.5
      },
      bu = {
        name: "TextSampler",
        className: "TextSamplerMaterialPlugin",
        priority: 60,
        defines: () => (0, su.b)("TEXT_SAMPLER"),
        getUniforms: uu => (0, Uu.b)(qu, "fragment", uu),
        bind(uu) {
          uu.updateFloat(lu, this.lodBias)
        },
        uniformsVersion: () => 0,
        getCustomCode(uu, Eu) {
          if ("fragment" !== uu) return null;
          const ju = (0, Zu.M)(Eu, `vec4 ${fu}(sampler2D s, vec2 uv, float bias)`, `fn ${fu}(t: texture_2d<f32>, ts: sampler, uv: vec2f, bias: f32) -> vec4f`),
            su = (0, Zu.M)(Eu, "texture2D(s, uv, bias)", "textureSampleBias(t, ts, uv, bias)"),
            Uu = `${(0,Zu.V)(Eu,"vDiffuseUV")} + uvOffset`,
            Xu = (0, Zu.M)(Eu, `${fu}(diffuseSampler, ${Uu}, ${(0,Zu.Ab)(Eu,lu)})`, `${fu}(diffuseSampler, diffuseSamplerSampler, ${Uu}, ${(0,Zu.Ab)(Eu,lu)})`);
          return {
            CUSTOM_FRAGMENT_DEFINITIONS: `\n\t\t\t\t${ju} {\n\t\t\t\t\t${(0,Zu.I)(Eu,"vec4","texel",su)}\n\t\t\t\t\t// 8-bit premultiplied rounding can put the quotient just over 1; only alpha 0 hits the floor,\n\t\t\t\t\t// where the colour is 0 anyway.\n\t\t\t\t\treturn ${(0,Zu.r)(Eu,"vec4",`clamp(texel.rgb / max(texel.a, 1.0 / 255.0), ${(0,Zu.r)(Eu,"vec3","0.0")}, ${(0,Zu.r)(Eu,"vec3","1.0")})`,"texel.a")};\n\t\t\t\t}\n\t\t\t`,
            [(0, Zu.J)(Eu)]: `baseColor = ${Xu};`
          }
        }
      };
    (0, Xu.m)(bu)
  },
  41338: (uu, Eu, ju) => {
    ju.r(Eu), ju.d(Eu, {
      CapeMaterialPlugin: () => eu,
      HueTintMaterialPlugin: () => Gu,
      LifeformMaterialPlugin: () => pu,
      OverlayMaterialPlugin: () => wu
    });
    var su = ju(41346),
      Uu = ju(38386);
    class Zu extends((0, su.g)(Uu.e)) {}(0, su.k)(Uu.e, Zu);
    var Xu = ju(37571);
    class lu extends((0, su.g)(Xu.g)) {}(0, su.k)(Xu.g, lu);
    var qu = ju(38236);
    class fu extends((0, su.g)(qu.f)) {}(0, su.k)(qu.f, fu);
    var Cu = ju(37816),
      bu = ju(40514),
      cu = ju(37811);
    class Nu extends((0, su.g)(cu.e)) {
      constructor(uu, Eu, ju) {
        super(uu, Eu, ju), (0, Cu.h)(uu)
      }
      dispose(uu) {
        (0, Cu.k)(this._material), super.dispose(uu)
      }
    }(0, su.k)(cu.e, Nu), (0, cu.g)({
      disableUnusedSpecularTerm: su.e,
      isLightingDisabled: uu => uu instanceof bu.StandardMaterial && uu.disableLighting
    });
    var Ou = ju(39038);
    class Yu extends((0, su.g)(Ou.e)) {}(0, su.k)(Ou.e, Yu);
    var hu = ju(39141),
      Du = ju(37684),
      gu = ju(38494),
      Mu = ju(37637);
    class eu extends((0, su.g)(hu.d)) {}(0, su.k)(hu.d, eu);
    class Gu extends((0, su.g)(Du.b)) {}(0, su.k)(Du.b, Gu);
    class pu extends((0, su.g)(gu.m)) {}(0, su.k)(gu.m, pu);
    class wu extends((0, su.g)(Mu.b)) {}(0, su.k)(Mu.b, wu)
  },
  41346: (uu, Eu, ju) => {
    ju.d(Eu, {
      e: () => Fu,
      g: () => gu,
      k: () => Hu
    });
    var su = ju(40514),
      Uu = ju(41353),
      Zu = ju(41400),
      Xu = ju(41360),
      lu = ju(38209),
      qu = ju(38218),
      fu = ju(38220),
      Cu = ju(38226),
      bu = ju(37621),
      cu = ju(37630),
      Nu = ju(41364),
      Ou = ju(37595),
      Yu = ju(37603),
      hu = ju(37582);

    function Du(uu, Eu) {
      return Object.assign((function(uu, ju, su, Uu) {
        return Eu(this.featureState, uu, ju, su, Uu)
      }), {
        yN: uu
      })
    }

    function gu(uu) {
      const Eu = class extends Nu.e {
          constructor(Eu, ju) {
            const su = (0, Yu.$)(Eu),
              Uu = su && (0, Yu.z)(su, uu.name);
            for (var Zu = arguments.length, Xu = new Array(Zu > 2 ? Zu - 2 : 0), lu = 2; lu < Zu; lu++) Xu[lu - 2] = arguments[lu];
            super(Eu, uu.name, uu.priority, Uu ? Uu.defines : uu.defines(...Xu), !1), this.featureState = void 0, this.featureState = ju, this._pluginManager._addPlugin(this), this._enable(!0), (0, Yu.D)(this._material, uu, this.featureState, this._pluginDefineNames)
          }
          getClassName() {
            return uu.className
          }
          isCompatible(uu) {
            return uu === hu.c.GLSL || uu === hu.c.WGSL
          }
        },
        ju = (0, Ou.h)(uu);
      for (const [su, Uu] of Object.entries(Ou.b)) {
        const Zu = uu[su];
        if (Zu) {
          const uu = ju[su];
          Object.defineProperty(Eu.prototype, Uu, {
            value: Du(Zu, uu),
            writable: !0,
            configurable: !0
          })
        }
      }
      return Eu
    }
    class Mu extends(gu(lu.c)) {}
    var eu = ju(40092),
      Gu = ju(41366),
      pu = ju(41373);

    function wu(uu, Eu, ju) {
      return (0, pu.g)(ju, Eu.urls, (() => async function(uu, Eu, ju) {
        const {
          width: su
        } = uu[0].getSize(), Uu = uu.map(((uu, ju) => {
          var Uu;
          const Zu = Math.round(uu.getSize().height / su),
            Xu = null === Eu || void 0 === Eu ? void 0 : Eu[ju];
          return {
            pixels: Xu && Xu.byteLength === su * su * Zu * 4 ? Xu : null !== (Uu = Ju.get(uu.getInternalTexture())) && void 0 !== Uu ? Uu : uu._readPixelsSync(),
            layers: Zu
          }
        })), Zu = ju.wO().getCaps().texture2DArrayMaxLayerCount, lu = (0, pu.e)(Uu, su, Zu).map((uu => {
          let {
            pixels: Eu,
            layers: Uu
          } = uu;
          return {
            atlas: new Gu.d(Eu, su, su, Uu, eu.c.TEXTUREFORMAT_RGBA, ju, !0, !1, Xu.c.NEAREST_NEAREST_MIPLINEAR),
            layers: Uu
          }
        }));
        return uu.forEach(((uu, Eu) => {
          const su = uu.getInternalTexture();
          Ju.has(su) || (! function(uu, Eu) {
            const ju = Eu.createRawTexture(new Uint8Array(4), 1, 1, eu.c.TEXTUREFORMAT_RGBA, !1, !1, Xu.c.NEAREST_SAMPLINGMODE);
            uu._hardwareTexture.release(), Eu.unbindAllTextures(), ju._swapAndDie(uu, !1)
          }(su, ju.wO()), Ju.set(su, Uu[Eu].pixels))
        })), lu
      }(uu, Eu.pixels, ju)))
    }
    const Ju = new WeakMap;
    var du = ju(38232);
    class au extends(gu(qu.h)) {
      constructor(uu, Eu) {
        super(uu, Eu), this.loaded = new Set, this.mirrors = void 0, this.mirrors = Eu.textures.map((uu => uu.mirror)), this.mirrors.forEach(((uu, Eu) => {
          uu.onLoadObservable.add((uu => {
            this.setTextureArrayData(uu, Eu).catch((uu => {
              console.error(`Failed to build the texture arrays, at atlas ${Eu}`, uu)
            }))
          }))
        })), (0, du.i)(Eu, uu.shaderLanguage)
      }
      async setTextureArrayData(uu, Eu) {
        const ju = this.featureState,
          {
            width: su,
            height: Uu
          } = uu.getSize(),
          Zu = this._material.shaderLanguage;
        if (!ju.useWebGL2) return void(0, du.e)(this._material, ju, Eu, su, Math.round(Uu / su), Zu);
        if (this.loaded.add(Eu), this.loaded.size < this.mirrors.length) return;
        const Xu = await wu(this.mirrors, ju.sources, this._material.hV());
        (0, du.b)(this._material, ju, Xu, su, Zu)
      }
    }
    var Pu = ju(41378),
      ou = ju(40574),
      ku = ju(37488),
      mu = ju(41387),
      vu = ju(40668),
      Ku = ju(40556),
      Vu = ju(41329),
      ru = ju(37969),
      Qu = ju(41394);
    class iu extends Pu.d {
      getData() {
        return null
      }
      _rebuild() {}
      restore() {
        super._rebuild()
      }
    }
    const Wu = {
      Mesh: mu.d,
      TransformNode: Vu.e,
      qO: Pu.d,
      VertexBuffer: Pu.e,
      BoundingInfo: ou.c,
      dO: ku.dO,
      ArenaBuffer: iu,
      SubMesh: Ku.e,
      VertexData: vu.b,
      MirroredGeometry: Qu.e,
      meshFromArrays: Qu.h,
      plainMeshFromArrays: Qu.k
    };
    (0, ru.d)(Wu);
    var Su = ju(37816);
    class Iu extends(gu(Cu.h)) {
      constructor(uu, Eu) {
        if (super(uu, Eu), uu instanceof su.StandardMaterial && Eu.dirLightCount > 0) {
          const Eu = uu,
            ju = Eu._blockDirtyMechanism;
          Eu._blockDirtyMechanism = !0, uu.disableLighting = !0, Eu._blockDirtyMechanism = ju;
          const su = (0, Yu.$)(uu);
          su && (su.disableLighting = !0, (0, Yu.Z)(su))
        }(0, Su.h)(uu)
      }
      dispose(uu) {
        (0, Su.k)(this._material), super.dispose(uu)
      }
    }

    function Fu(uu, Eu) {
      if (!(Eu instanceof su.StandardMaterial) || Eu.specularTexture) return;
      const {
        r: ju,
        g: Uu,
        b: Zu
      } = Eu.specularColor;
      0 === ju && 0 === Uu && 0 === Zu && (uu.SPECULARTERM = !1)
    }(0, Cu.d)({
      disableUnusedSpecularTerm: Fu
    });
    var Bu = ju(37704),
      Lu = ju(37977);
    const tu = new RegExp(`^#define ${fu.c}\\s*$`, "m");
    class xu extends(gu(fu.f)) {
      constructor(uu, Eu) {
        super(uu, Eu), this.fO = !1, Eu.ditherOnlyWhileFading && (Lu.h.add(uu), this.prewarmDitherTwins(uu))
      }
      prewarmDitherTwins(uu) {
        const Eu = new WeakSet;
        uu.onEffectCreatedObservable.add((ju => {
          let {
            effect: su,
            subMesh: Uu
          } = ju;
          if (this.featureState.prewarmingDither || Eu.has(su)) return;
          Eu.add(su);
          const Zu = null === Uu || void 0 === Uu ? void 0 : Uu.getMesh();
          Zu && !tu.test(su.defines) && uu.hV().onAfterRenderObservable.addOnce((() => {
            this.prewarmDither(Zu) || Eu.delete(su)
          }))
        }))
      }
      prewarmDither(uu) {
        if (this.fO || uu.Gw()) return !1;
        const Eu = new Ku.e(0, 0, 0, 0, 0, uu, void 0, !1, !1);
        this.featureState.prewarmingDither = !0;
        try {
          this._material.isReadyForSubMesh(uu, Eu)
        } finally {
          this.featureState.prewarmingDither = !1
        }
        return null !== Eu.effect
      }
      dispose(uu) {
        this.fO = !0, super.dispose(uu)
      }
    }
    const Tu = new Map;

    function Hu(uu, Eu) {
      Tu.set(uu, Eu)
    }
    Hu(lu.c, Mu), Hu(qu.h, au), Hu(fu.f, xu), Hu(Cu.h, Iu), (0, bu.b)({
      create: (uu, Eu) => {
        const ju = new su.StandardMaterial(uu.name, Eu);
        return (0, Bu.s)(uu, ju), ju.detailMap._pluginDefineNames
      },
      write: (uu, Eu, ju) => {
        (0, Bu.Y)(uu.mirror, Eu, ju)
      },
      addFeature: (uu, Eu, ju) => {
        const su = Tu.get(Eu.feature);
        if (!su) throw new Error(`${Eu.feature.name} has no plugin class (registerPluginClass)`);
        new su(uu.mirror, Eu.state, ...ju)
      },
      texture: (uu, Eu, ju) => {
        let {
          url: su,
          noMipmap: Uu,
          invertY: Zu,
          samplingMode: lu,
          data: qu,
          sets: fu
        } = ju;
        if (!qu) {
          const ju = new Xu.c(su, Eu, Uu, Zu, lu);
          return Object.assign(ju, fu), void(0, cu.G)(uu, ju)
        }
        const Cu = {},
          bu = new Promise(((uu, Eu) => {
            Cu.onLoad = uu, Cu.onError = (uu, ju) => {
              Eu(new Error(`${qu.context}: ${(null===ju||void 0===ju?void 0:ju.message)||uu||"Failed to load texture"}`))
            }
          })),
          {
            mimeType: Nu,
            bytes: Ou,
            label: Yu
          } = qu,
          hu = {
            noMipmap: Uu,
            invertY: !1,
            samplingMode: lu,
            ...Cu,
            mimeType: Nu,
            loaderOptions: void 0,
            useSRGBBuffer: !1
          },
          Du = new Xu.c(null, Eu, hu);
        Bu.v.set(Du, bu), Object.assign(Du, fu), Du.updateURL(su, Ou);
        const gu = Du.getInternalTexture();
        gu && (gu.label = Yu), uu.uvSet = Du.coordinatesIndex, uu.matrix.set((0, Bu.Q)(Du)), (0, cu.G)(uu, Du)
      },
      cube: (uu, Eu, ju) => {
        let {
          rootUrl: su,
          files: Zu,
          noMipmap: lu,
          luminance: qu
        } = ju;
        const {
          samplingMode: fu
        } = uu.sampler, Cu = fu === (0, cu.z)(lu) ? null : () => {
          (0, Bu.O)(bu, fu)
        }, bu = new Uu.e(su, Eu, null, lu, Zu, Cu, null, (0, cu.x)(qu));
        bu.coordinatesMode = Xu.c.SKYBOX_MODE, (0, cu.G)(uu, bu)
      },
      canvas: (uu, Eu, ju) => {
        let {
          width: su,
          height: Uu,
          mipmaps: lu,
          samplingMode: qu,
          hasAlpha: fu = !1,
          wrap: Cu = Xu.c.CLAMP_ADDRESSMODE
        } = ju;
        const bu = new Zu.d(Eu, {
          width: su,
          height: Uu
        }, uu, lu, qu);
        bu.hasAlpha = fu, bu.wrapU = Cu, bu.wrapV = Cu;
        const cu = (0, Bu.G)(bu);
        return (0, Bu.I)(cu, bu), cu
      }
    })
  },
  41394: (uu, Eu, ju) => {
    ju.d(Eu, {
      e: () => Cu,
      h: () => bu,
      k: () => cu
    });
    var su = ju(41378),
      Uu = ju(40319),
      Zu = ju(40574),
      Xu = ju(40676),
      lu = ju(41387),
      qu = ju(40668),
      fu = ju(37867);
    class Cu extends Xu.b {
      constructor() {
        super(...arguments), this.model = null, this.onGeometryUpdated = (uu, Eu) => {
          this.releaseUnlessInstanced(Eu)
        }, this.onLinked = null
      }
      link(uu) {
        var Eu;
        (0, fu.p)(uu), this.model = uu, null === (Eu = this.onLinked) || void 0 === Eu || Eu.call(this, uu)
      }
      relink() {
        this.release();
        const uu = [];
        for (const Uu of Object.values(this._vertexBuffers))
          if (!Uu.getIsInstanced()) {
            const {
              byteOffset: Eu,
              byteStride: ju,
              type: su,
              normalized: Zu
            } = Uu;
            uu.push({
              kind: Uu.getKind(),
              data: Uu.getData(),
              offset: Eu,
              stride: ju,
              components: Uu.getSize(),
              glType: su,
              isNormalized: Zu
            })
          } const Eu = this._indices.length ? this._indices : null,
          {
            minimum: ju,
            maximum: su
          } = this.extend;
        this.link(new fu.f(uu, Eu, this.getTotalVertices(), new Float64Array(ju.Osu()), new Float64Array(su.Osu())))
      }
      copy(uu) {
        if (!this.model) return super.copy(uu);
        const Eu = new Cu(uu, this.hV()),
          ju = this.Ysu(void 0, !0);
        ju && Eu.setIndices(ju);
        let Xu = !1;
        for (const Zu in this._vertexBuffers) {
          const uu = this._vertexBuffers[Zu],
            ju = uu.getData();
          if (!ju) continue;
          const lu = uu.getSize(),
            {
              type: qu,
              byteOffset: fu,
              byteStride: Cu,
              normalized: bu
            } = uu;
          Xu ||= uu.isUpdatable();
          const cu = uu.getIsInstanced() ? (ju instanceof Array ? 4 * ju.length : ju.byteLength) / Cu : this.getTotalVertices(),
            Nu = (0, Uu.s)(ju, lu, qu, fu, Cu, cu, !0),
            Ou = {
              updatable: uu.isUpdatable(),
              stride: lu,
              type: qu,
              normalized: bu,
              takeBufferOwnership: !0,
              instanced: uu.getIsInstanced()
            };
          Eu.setVerticesBuffer(new su.e(this.wO(), Nu, Zu, Ou), cu)
        }
        return Eu._updatable = Xu, Eu._boundingInfo = new Zu.c(this.extend.minimum, this.extend.maximum), Eu.relink(), Eu
      }
      static mergeMeshes(uu, Eu, ju, su, Uu, Zu) {
        const qu = uu[0].hV(),
          fu = new lu.d(uu[0].name + "_merged", qu),
          bu = new Cu(Xu.b.RandomId(), qu, void 0, !1, fu);
        try {
          if (!lu.d.MergeMeshes(uu, Eu, ju, fu, Uu, Zu)) return fu.dispose(), null
        } catch (cu) {
          throw fu.dispose(), cu
        }
        return bu.relink(), fu
      }
      removeVerticesData(uu) {
        this.releaseUnlessInstanced(uu), super.removeVerticesData(uu)
      }
      dispose() {
        this.release(), super.dispose()
      }
      releaseUnlessInstanced(uu) {
        var Eu;
        uu && null !== (Eu = this.getVertexBuffer(uu)) && void 0 !== Eu && Eu.getIsInstanced() || this.release()
      }
      release() {
        this.model && ((0, fu.x)(this.model), this.model = null)
      }
    }

    function bu(uu, Eu, ju) {
      let su = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : new lu.d(uu, ju);
      const Uu = (0, fu.n)(Eu),
        {
          positions: Zu,
          normals: bu,
          uvs: cu,
          indices: Nu,
          named: Ou = {}
        } = Eu,
        Yu = new qu.b;
      Yu.positions = Zu, Yu.normals = null !== bu && void 0 !== bu ? bu : null, Yu.uvs = null !== cu && void 0 !== cu ? cu : null, Yu.indices = Nu;
      const hu = new Cu(Xu.b.RandomId(), ju, Yu, !1, su);
      for (const {
          kind: Xu,
          components: lu
        }
        of Uu.vertexAttributes) Xu in Ou && su.setVerticesData(Xu, Ou[Xu], !1, lu);
      return hu.link(Uu), su
    }

    function cu(uu, Eu, ju) {
      let su = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
      const Uu = new lu.d(uu, ju),
        {
          positions: Zu,
          normals: Xu,
          uvs: fu,
          indices: Cu
        } = Eu;
      return Object.assign(new qu.b, {
        positions: Zu,
        normals: Xu,
        uvs: fu,
        indices: Cu
      }).applyToMesh(Uu, su), Uu
    }
  },
  41373: (uu, Eu, ju) => {
    function su(uu, Eu, ju) {
      const su = Eu * Eu * 4,
        Uu = uu[0].layers,
        Zu = Uu * (uu.length - 1) + uu[uu.length - 1].layers,
        Xu = new Uint8Array(Zu * su);
      uu.forEach(((Eu, ju) => {
        const Zu = ju + 1 < uu.length ? Math.min(Eu.layers, Uu) : Eu.layers;
        Xu.set(new Uint8Array(Eu.pixels.buffer, Eu.pixels.byteOffset, Zu * su), ju * Uu * su)
      }));
      const lu = Math.max(1, Math.min(Zu, ju || Zu));
      if (lu === Zu) return [{
        pixels: Xu,
        layers: Zu
      }];
      const qu = [];
      for (let fu = 0; fu < Zu; fu += lu) {
        const uu = Math.min(Zu, fu + lu);
        qu.push({
          pixels: Xu.slice(fu * su, uu * su),
          layers: uu - fu
        })
      }
      return qu
    }
    ju.d(Eu, {
      e: () => su,
      g: () => Zu
    });
    const Uu = new WeakMap;

    function Zu(uu, Eu, ju) {
      var su, Zu;
      const Xu = null !== (su = Uu.get(uu)) && void 0 !== su ? su : new Map;
      Uu.set(uu, Xu);
      const lu = null !== (Zu = Xu.get(Eu[0])) && void 0 !== Zu ? Zu : [];
      Xu.set(Eu[0], lu);
      const qu = lu.find((uu => uu.urls.length === Eu.length && uu.urls.every(((uu, ju) => uu === Eu[ju]))));
      if (qu) return qu.built;
      const fu = {
        urls: [...Eu],
        built: ju()
      };
      return lu.push(fu), fu.built.catch((() => {
        lu.splice(lu.indexOf(fu), 1)
      })), fu.built
    }
  }
};
Object.freeze(modules);
for (const uu in modules) Object.freeze(modules[uu]);