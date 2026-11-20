export const id = 152;
export const ids = [152];
export const modules = {
  40755: (uu, Ru, yu) => {
    yu.r(Ru), yu.d(Ru, {
      openCharacterPreview: () => Yu
    });
    var Eu = yu(37846),
      Ku = yu(2632),
      Qu = yu(595),
      mu = yu(36889),
      Ju = yu(2132),
      Nu = yu(36882),
      Xu = yu(39380),
      Vu = yu(39643),
      ru = yu(40655),
      Bu = yu(36828),
      xu = yu(39808),
      Su = yu(36986),
      pu = yu(39827),
      Tu = yu(40709),
      Wu = yu(36819),
      ju = yu(1199),
      Hu = yu(2128),
      du = yu(36951),
      bu = yu(37045);
    class Cu {
      constructor(uu, Ru) {
        this.pose = uu, this.nodes = void 0, this.nodes = uu.boneNames.map((uu => Ru.get(uu)))
      }
      write(uu) {
        this.pose.pose(uu);
        const {
          rotations: Ru
        } = this.pose;
        for (let yu = 0; yu < this.nodes.length; yu++) {
          const uu = 4 * yu;
          this.nodes[yu].rotationQuaternion.set(Ru[uu], Ru[uu + 1], Ru[uu + 2], Ru[uu + 3])
        }
      }
    }

    function ku(uu) {
      uu.unfreezeWorldMatrix();
      for (const Ru of uu.getChildren()) ku(Ru)
    }

    function eu(uu, Ru) {
      uu.isVisible = Ru;
      for (const yu of uu.getChildMeshes()) yu.isVisible = Ru
    }
    class Au {
      constructor(uu, Ru, yu) {
        this.cp = uu, this.thinInstMgr = Ru, this.qD = yu, this.modelCache = {}, this.attachmentsByType = {}, this.shownBones = [], this.cosmeticNames = {}
      }
      loadModel(uu, Ru, yu) {
        const Eu = (0, du.f)(uu, Ru);
        return Eu in this.modelCache || (this.modelCache[Eu] = (async () => {
          try {
            const Eu = await (0, du.h)(uu, this.cp),
              Ku = new Map;
            for (const uu of Eu.getNodes()) Ku.set(uu.name, uu);
            const Qu = (0, du.e)(null !== Ru && void 0 !== Ru ? Ru : uu, this.cp);
            (0, du.k)(Eu, Qu, {
              keepTransforms: void 0 !== yu,
              onProcessedMesh: uu => {
                (0, du.l)(uu), this.cp.MEu(uu, !1), uu.isVisible = !1
              }
            });
            for (const uu of Eu.rootNodes) ku(uu);
            const mu = void 0 === yu ? null : (0, bu.e)(yu, (uu => {
              var Ru, yu;
              return null !== (Ru = null === (yu = Ku.get(uu)) || void 0 === yu ? void 0 : yu.rotationQuaternion) && void 0 !== Ru ? Ru : null
            }));
            return {
              nodesByName: Ku,
              bones: null === mu ? null : new Cu(mu, Ku)
            }
          } catch (Ku) {
            throw delete this.modelCache[Eu], console.error(`Failed to load preview attachment ${Eu}:`, Ku), Ku
          }
        })()), this.modelCache[Eu]
      }
      async update(uu, Ru) {
        var yu;
        const {
          thinInstMgr: Eu,
          qD: Ku
        } = this;
        this.cosmeticNames[uu] = Ru;
        const Qu = this.attachmentsByType[uu];
        if (Qu)
          for (const {
              mesh: Ju,
              destNode: Nu,
              bones: Xu
            }
            of Qu) {
            null !== Xu && (0, ju.mb)(this.shownBones, Xu), eu(Ju, !1);
            const uu = Eu.getNamedNode(Ku, Nu);
            Eu.detachTransformNodeIfFound(Ju, Ku, uu)
          }
        this.attachmentsByType[uu] = [];
        const mu = (0, Hu.k)(uu, Ru);
        if (null !== mu && void 0 !== mu && null !== (yu = mu.attachments) && void 0 !== yu && yu.length)
          for (const Ju of mu.attachments) {
            let yu;
            try {
              yu = await this.loadModel(Ju.modelGlb, Ju.texture, Ju.animation)
            } catch {
              continue
            }
            if (this.cosmeticNames[uu] !== Ru) return;
            const Qu = yu.nodesByName.get(Ju.modelNode);
            if (!Qu) {
              console.error(`Preview attachment node ${Ju.modelNode} not found in ${Ju.modelGlb}`);
              continue
            }
            eu(Qu, !0), (0, du.t)(Qu, Ju.overlayColour);
            const mu = Eu.getNamedNode(Ku, Ju.destNode);
            Eu.attachTransformNode(Qu, Ku, mu), this.attachmentsByType[uu].push({
              mesh: Qu,
              destNode: Ju.destNode,
              bones: yu.bones
            }), null !== yu.bones && this.shownBones.push(yu.bones)
          }
      }
      writePoses(uu) {
        for (const Ru of this.shownBones) Ru.write(uu)
      }
    }
    var Du = yu(36894),
      Mu = (yu(40692), yu(40057), yu(40701), yu(9100));
    let Iu, Gu, Uu, nu, su, tu, lu, gu, cu, Lu;
    const zu = document.createElement("canvas");
    async function Fu() {
      await new Promise((uu => {
        setTimeout((() => {
          uu()
        }), 100)
      }))
    }
    zu.classList.add("CharCustomisationPreviewCanvas");
    const wu = {};

    function Zu(uu, Ru) {
      zu.width = uu, zu.height = Ru, Iu.resize()
    }
    let hu = 0;
    class Pu {
      constructor(uu, Ru) {
        this.framing = Ru, this.ready = Lu, this.dev = {
          canvas: () => zu,
          isolateHead(uu) {
            const Ru = tu.getNodeNames(lu);
            for (let yu = 0; yu < Ru.length; yu++) "HeadMesh" !== Ru[yu] && "__root__" !== Ru[yu] && "TorsoNode" !== Ru[yu] && tu.setNodeEnabled(lu, yu, !1);
            if (uu) {
              const uu = tu.getNamedNode(lu, "HeadMesh");
              tu.setNodeDisableColorWrite(lu, uu, !0, (uu => {
                const Ru = new pu.StandardMaterial(`${uu.name}_depthOnly`, uu.lD());
                return Ru.disableColorWrite = !0, Ru
              }))
            }
            tu.setPosition(lu, 0, -12, 0)
          }
        }, this.closed = !1, this.resetCamera();
        const yu = uu.getBoundingClientRect();
        Zu(yu.width, yu.height), hu++, Iu.stopRenderLoop(), Iu.runRenderLoop((() => {
          var uu, Ru;
          null === (uu = gu) || void 0 === uu || uu.render(Iu.getDeltaTime()), null === (Ru = cu) || void 0 === Ru || Ru.writePoses(performance.now() / 1e3), Uu.render()
        }))
      }
      isReady() {
        return !!nu
      }
      setCosmetic(uu, Ru) {
        ! function(uu, Ru) {
          if (!nu) return;
          const mu = (0, Ku.h)();
          mu.Dk(!1), Eu.b.Player.meshApi.updatePlayerCosmetic(mu.ZI, lu, uu, Ru, !0), "cape" === uu && (Ru === Qu.c ? su.tC(!1) : (su.tC(!0), su.material.diffuseTexture = new Tu.e(yu(38564)(`./cape_${Ru}.png`), su.lD(), {
            invertY: !1,
            samplingMode: Tu.e.NEAREST_NEAREST_MIPLINEAR
          })));
          wu[uu] = cu.update(uu, Ru)
        }(uu, Ru)
      }
      playEmote(uu) {
        if (!gu) return;
        if (!uu) return void gu.stopAnimation(Nu.f.Emote);
        const Ru = (0, mu.e)((0, Ju.i)(uu).animation);
        gu.startAnimation(Ru, Nu.f.Emote, 0, Ju.d)
      }
      async untilDrawn(uu) {
        if (await Fu(), "cape" === uu && su) {
          const uu = su.material,
            Ru = null === uu || void 0 === uu ? void 0 : uu.diffuseTexture;
          Ru && !Ru.isReady() && (await new Promise((uu => {
            Ru.onLoadObservable.addOnce((() => {
              uu()
            }))
          })), await Fu())
        }
        wu[uu] && (await wu[uu], await Fu()), await Uu.whenReadyAsync(), await new Promise((uu => {
          Uu.onAfterRenderObservable.addOnce((() => {
            uu()
          }))
        }))
      }
      setOrbit(uu) {
        iu(uu)
      }
      resetCamera() {
        Gu.inertialAlphaOffset = 0, Gu.inertialBetaOffset = 0, Gu.inertialRadiusOffset = 0, iu(Mu.b[this.framing])
      }
      resize(uu, Ru) {
        Zu(uu, Ru)
      }
      close() {
        this.closed || (this.closed = !0, hu--, 0 === hu && Iu.stopRenderLoop())
      }
    }

    function iu(uu) {
      let {
        yaw: Ru,
        pitch: yu,
        radius: Eu,
        target: Ku
      } = uu;
      Gu.alpha = Ru, Gu.beta = yu, Eu && (Gu.radius = Eu), Ku && Gu.target.set(Ku[0], Ku[1], Ku[2])
    }

    function Yu(uu, Ru) {
      return uu.appendChild(zu), Iu || function() {
        Iu = new Xu.e(zu, !0, {
          preserveDrawingBuffer: !0
        });
        const uu = (0, Ku.h)();
        Iu.CEu = uu.oS.engine.CEu, Uu = new Vu.c(Iu), Uu.clearColor = new Su.c(0, 0, 0, 0), Uu.ambientColor = new Su.Color3(1, 1, 1), Gu = new ru.e("GT", 0, 0, 1, Bu.MS.Zero(), Uu), Gu.attachControl(zu, !0), Gu.panningSensibility = 0, Lu = (0, Eu.x)("Player", Uu, !0).then((Ru => {
          nu = Ru.meshApi, su = Ru.capeMesh, tu = uu.oS.PD;
          const yu = 8.33;
          lu = (0, Eu.j)("Player", yu, !0, !0), tu.setPosition(lu, 0, -8.33, 0);
          const Ku = tu.getNamedNode(lu, "BodyMesh");
          tu.attachTransformNode(su, lu, Ku), tu.set(lu, "aOpacity", 1), tu.yG(lu, "aOpacity", 1), cu = new Au(Uu, tu, lu), gu = new Wu.AnimatorState, gu.Yr = uu, gu.thinInstMgr = tu, gu.qD = lu, gu.oyu = tu.kEu(lu, 0), gu.modelLifeformType = "Player", gu.nodeNameAliases = (0, Du.b)("Player").nodeNameAliases;
          const Qu = su.vI().boundingBox;
          su.position.y = ((24 - Qu.maximum.y + Qu.minimum.y) / 2 - 1 / 32) / yu, su.position.z = -1 / yu, su.rotationQuaternion = null;
          const mu = Math.PI / 18,
            Ju = Qu.maximum.y / yu;
          su.rotation.x = mu;
          const Nu = Math.cos(mu),
            Xu = Math.sin(mu);
          su.position.y += Ju * (1 - Nu) + 0 * Xu, su.position.z -= Ju * Xu + 0 * (1 - Nu);
          const Vu = new pu.StandardMaterial("capeMaterial", su.lD());
          su.material = Vu;
          const ru = new Su.Color3(1, 1, 1);
          Vu.diffuseColor = new Su.Color3, Vu.specularColor = new Su.Color3, Vu.emissiveColor = new Su.Color3, Vu.ambientColor = new Su.Color3, ru.scaleToRef(.43, Vu.diffuseColor), ru.scaleToRef(1.75, Vu.ambientColor), Vu.freeze();
          const Tu = new xu.b("light", new Bu.MS(-.1, 1, -.3), Uu);
          Tu.diffuse = new Su.Color3(1, 1, 1), Tu.specular = new Su.Color3(1, 1, 1), Tu.groundColor = new Su.Color3(.5, .5, .5)
        }))
      }(), new Pu(uu, Ru)
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
  },
  38564: (uu, Ru, yu) => {
    var Eu = {
      "./cape_cow_cream.png": 27975,
      "./cape_cow_normal.png": 27979,
      "./cape_creator_level1.png": 27986,
      "./cape_creator_level2.png": 27994,
      "./cape_creator_level3.png": 27998,
      "./cape_none.png": 28004,
      "./cape_pig.png": 28009,
      "./cape_sheep.png": 28013,
      "./cape_super.png": 28020,
      "./cape_super_inverted.png": 28029,
      "./cape_youtuber.png": 28032
    };

    function Ku(uu) {
      var Ru = Qu(uu);
      return yu(Ru)
    }

    function Qu(uu) {
      if (!yu.o(Eu, uu)) {
        var Ru = new Error("Cannot find module '" + uu + "'");
        throw Ru.code = "MODULE_NOT_FOUND", Ru
      }
      return Eu[uu]
    }
    Ku.keys = function() {
      return Object.keys(Eu)
    }, Ku.resolve = Qu, uu.exports = Ku, Ku.id = 38564
  }
};
Object.freeze(modules);
for (const uu in modules) Object.freeze(modules[uu]);