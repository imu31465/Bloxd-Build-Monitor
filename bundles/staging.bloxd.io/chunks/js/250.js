export const id = 250;
export const ids = [250];
export const modules = {
  41402: (uu, Eu, ju) => {
    ju.r(Eu), ju.d(Eu, {
      openCharacterPreview: () => Tu
    });
    var su = ju(38462),
      Uu = ju(2893),
      Zu = ju(628),
      Xu = ju(37554),
      lu = ju(2338),
      qu = ju(37541),
      fu = ju(40092),
      Cu = ju(40346),
      bu = ju(41314),
      cu = ju(37488),
      Nu = ju(40503),
      Ou = ju(37671),
      Yu = ju(40514),
      hu = ju(41360),
      Du = ju(37482),
      gu = ju(1278),
      Mu = ju(2329),
      eu = ju(37644),
      Gu = ju(37731);
    class pu {
      constructor(uu, Eu) {
        this.pose = uu, this.nodes = void 0, this.nodes = uu.boneNames.map((uu => Eu.get(uu)))
      }
      write(uu) {
        this.pose.pose(uu);
        const {
          rotations: Eu
        } = this.pose;
        for (let ju = 0; ju < this.nodes.length; ju++) {
          const uu = 4 * ju;
          this.nodes[ju].rotationQuaternion.set(Eu[uu], Eu[uu + 1], Eu[uu + 2], Eu[uu + 3])
        }
      }
    }

    function wu(uu) {
      uu.unfreezeWorldMatrix();
      for (const Eu of uu.getChildren()) wu(Eu)
    }

    function Ju(uu, Eu) {
      uu.isVisible = Eu;
      for (const ju of uu.getChildMeshes()) ju.isVisible = Eu
    }
    class du {
      constructor(uu, Eu, ju) {
        this.vY = uu, this.thinInstMgr = Eu, this.mV = ju, this.modelCache = {}, this.attachmentsByType = {}, this.shownBones = [], this.cosmeticNames = {}
      }
      loadModel(uu, Eu, ju) {
        const su = (0, eu.f)(uu, Eu);
        return su in this.modelCache || (this.modelCache[su] = (async () => {
          try {
            const su = await (0, eu.j)(uu, this.vY),
              Uu = new Map;
            for (const uu of su.getNodes()) Uu.set(uu.name, uu);
            const Zu = (0, eu.b)(null !== Eu && void 0 !== Eu ? Eu : uu, this.vY);
            (0, eu.k)(su, Zu, {
              keepTransforms: void 0 !== ju,
              onProcessedMesh: uu => {
                (0, eu.l)(uu), this.vY.hsu(uu, !1), uu.isVisible = !1
              }
            });
            for (const uu of su.rootNodes) wu(uu);
            const Xu = void 0 === ju ? null : (0, Gu.g)(ju, (uu => {
              var Eu, ju;
              return null !== (Eu = null === (ju = Uu.get(uu)) || void 0 === ju ? void 0 : ju.rotationQuaternion) && void 0 !== Eu ? Eu : null
            }));
            return {
              nodesByName: Uu,
              bones: null === Xu ? null : new pu(Xu, Uu)
            }
          } catch (Uu) {
            throw delete this.modelCache[su], console.error(`Failed to load preview attachment ${su}:`, Uu), Uu
          }
        })()), this.modelCache[su]
      }
      async update(uu, Eu) {
        var ju;
        const {
          thinInstMgr: su,
          mV: Uu
        } = this;
        this.cosmeticNames[uu] = Eu;
        const Zu = this.attachmentsByType[uu];
        if (Zu)
          for (const {
              mesh: lu,
              destNode: qu,
              bones: fu
            }
            of Zu) {
            null !== fu && (0, gu.nb)(this.shownBones, fu), Ju(lu, !1);
            const uu = su.getNamedNode(Uu, qu);
            su.detachTransformNodeIfFound(lu, Uu, uu)
          }
        this.attachmentsByType[uu] = [];
        const Xu = (0, Mu.m)(uu, Eu);
        if (null !== Xu && void 0 !== Xu && null !== (ju = Xu.attachments) && void 0 !== ju && ju.length)
          for (const lu of Xu.attachments) {
            let ju;
            try {
              ju = await this.loadModel(lu.modelGlb, lu.texture, lu.animation)
            } catch {
              continue
            }
            if (this.cosmeticNames[uu] !== Eu) return;
            const Zu = ju.nodesByName.get(lu.modelNode);
            if (!Zu) {
              console.error(`Preview attachment node ${lu.modelNode} not found in ${lu.modelGlb}`);
              continue
            }
            Ju(Zu, !0), (0, eu.s)(Zu, lu.overlayColour);
            const Xu = su.getNamedNode(Uu, lu.destNode);
            su.attachTransformNode(Zu, Uu, Xu), this.attachmentsByType[uu].push({
              mesh: Zu,
              destNode: lu.destNode,
              bones: ju.bones
            }), null !== ju.bones && this.shownBones.push(ju.bones)
          }
      }
      writePoses(uu) {
        for (const Eu of this.shownBones) Eu.write(uu)
      }
    }
    var au = ju(37568),
      Pu = (ju(41335), ju(40742), ju(41338), ju(34588));
    let ou, ku, mu, vu, Ku, Vu, ru, Qu, iu, Wu;
    const Su = document.createElement("canvas");
    async function Iu() {
      await new Promise((uu => {
        setTimeout((() => {
          uu()
        }), 100)
      }))
    }
    Su.classList.add("CharCustomisationPreviewCanvas");
    const Fu = {};

    function Bu(uu, Eu) {
      Su.width = uu, Su.height = Eu, ou.resize()
    }
    let Lu = 0;
    class tu {
      constructor(uu, Eu) {
        this.framing = Eu, this.ready = Wu, this.dev = {
          canvas: () => Su,
          isolateHead(uu) {
            const Eu = Vu.getNodeNames(ru);
            for (let ju = 0; ju < Eu.length; ju++) "HeadMesh" !== Eu[ju] && "__root__" !== Eu[ju] && "TorsoNode" !== Eu[ju] && Vu.setNodeEnabled(ru, ju, !1);
            if (uu) {
              const uu = Vu.getNamedNode(ru, "HeadMesh");
              Vu.setNodeDisableColorWrite(ru, uu, !0, (uu => {
                const Eu = new Yu.StandardMaterial(`${uu.name}_depthOnly`, uu.hV());
                return Eu.disableColorWrite = !0, Eu
              }))
            }
            Vu.setPosition(ru, 0, -12, 0)
          }
        }, this.closed = !1, this.resetCamera();
        const ju = uu.getBoundingClientRect();
        Bu(ju.width, ju.height), Lu++, ou.stopRenderLoop(), ou.runRenderLoop((() => {
          var uu, Eu;
          null === (uu = Qu) || void 0 === uu || uu.render(ou.getDeltaTime()), null === (Eu = iu) || void 0 === Eu || Eu.writePoses(performance.now() / 1e3), mu.render()
        }))
      }
      isReady() {
        return !!vu
      }
      setCosmetic(uu, Eu) {
        ! function(uu, Eu) {
          if (!vu) return;
          const Xu = (0, Uu.c)();
          Xu.Wm(!1), su.b.Player.meshApi.updatePlayerCosmetic(Xu.FQ, ru, uu, Eu, !0), "cape" === uu && (Eu === Zu.h ? Ku.Wk(!1) : (Ku.Wk(!0), Ku.material.diffuseTexture = new hu.c(ju(39150)(`./cape_${Eu}.png`), Ku.hV(), {
            invertY: !1,
            samplingMode: hu.c.NEAREST_NEAREST_MIPLINEAR
          })));
          Fu[uu] = iu.update(uu, Eu)
        }(uu, Eu)
      }
      playEmote(uu) {
        if (!Qu) return;
        if (!uu) return void Qu.stopAnimation(qu.f.Emote);
        const Eu = (0, Xu.d)((0, lu.k)(uu).animation);
        Qu.startAnimation(Eu, qu.f.Emote, 0, lu.e)
      }
      async untilDrawn(uu) {
        if (await Iu(), "cape" === uu && Ku) {
          const uu = Ku.material,
            Eu = null === uu || void 0 === uu ? void 0 : uu.diffuseTexture;
          Eu && !Eu.isReady() && (await new Promise((uu => {
            Eu.onLoadObservable.addOnce((() => {
              uu()
            }))
          })), await Iu())
        }
        Fu[uu] && (await Fu[uu], await Iu()), await mu.whenReadyAsync(), await new Promise((uu => {
          mu.onAfterRenderObservable.addOnce((() => {
            uu()
          }))
        }))
      }
      setOrbit(uu) {
        xu(uu)
      }
      resetCamera() {
        ku.inertialAlphaOffset = 0, ku.inertialBetaOffset = 0, ku.inertialRadiusOffset = 0, xu(Pu.b[this.framing])
      }
      resize(uu, Eu) {
        Bu(uu, Eu)
      }
      close() {
        this.closed || (this.closed = !0, Lu--, 0 === Lu && ou.stopRenderLoop())
      }
    }

    function xu(uu) {
      let {
        yaw: Eu,
        pitch: ju,
        radius: su,
        target: Uu
      } = uu;
      ku.alpha = Eu, ku.beta = ju, su && (ku.radius = su), Uu && ku.target.set(Uu[0], Uu[1], Uu[2])
    }

    function Tu(uu, Eu) {
      return uu.appendChild(Su), ou || function() {
        ou = new fu.c(Su, !0, {
          preserveDrawingBuffer: !0
        });
        const uu = (0, Uu.c)();
        ou.bsu = uu.tO.engine.bsu, mu = new Cu.b(ou), mu.clearColor = new Ou.b(0, 0, 0, 0), mu.ambientColor = new Ou.Color3(1, 1, 1), ku = new bu.d("Vh", 0, 0, 1, cu.dO.Zero(), mu), ku.attachControl(Su, !0), ku.panningSensibility = 0, Wu = (0, su.t)("Player", mu, !0).then((Eu => {
          vu = Eu.meshApi, Ku = Eu.capeMesh, Vu = uu.tO.oV;
          const ju = 8.33;
          ru = (0, su.h)("Player", ju, !0, !0), Vu.setPosition(ru, 0, -8.33, 0);
          const Uu = Vu.getNamedNode(ru, "BodyMesh");
          Vu.attachTransformNode(Ku, ru, Uu), Vu.set(ru, "aOpacity", 1), Vu.jW(ru, "aOpacity", 1), iu = new du(mu, Vu, ru), Qu = new Du.AnimatorState, Qu.Uc = uu, Qu.thinInstMgr = Vu, Qu.mV = ru, Qu.rju = Vu.csu(ru, 0), Qu.modelLifeformType = "Player", Qu.nodeNameAliases = (0, au.d)("Player").nodeNameAliases;
          const Zu = Ku.EW().boundingBox;
          Ku.position.y = ((24 - Zu.maximum.y + Zu.minimum.y) / 2 - 1 / 32) / ju, Ku.position.z = -1 / ju, Ku.rotationQuaternion = null;
          const Xu = Math.PI / 18,
            lu = Zu.maximum.y / ju;
          Ku.rotation.x = Xu;
          const qu = Math.cos(Xu),
            fu = Math.sin(Xu);
          Ku.position.y += lu * (1 - qu) + 0 * fu, Ku.position.z -= lu * fu + 0 * (1 - qu);
          const Cu = new Yu.StandardMaterial("capeMaterial", Ku.hV());
          Ku.material = Cu;
          const bu = new Ou.Color3(1, 1, 1);
          Cu.diffuseColor = new Ou.Color3, Cu.specularColor = new Ou.Color3, Cu.emissiveColor = new Ou.Color3, Cu.ambientColor = new Ou.Color3, bu.scaleToRef(.43, Cu.diffuseColor), bu.scaleToRef(1.75, Cu.ambientColor), Cu.freeze();
          const hu = new Nu.c("light", new cu.dO(-.1, 1, -.3), mu);
          hu.diffuse = new Ou.Color3(1, 1, 1), hu.specular = new Ou.Color3(1, 1, 1), hu.groundColor = new Ou.Color3(.5, .5, .5)
        }))
      }(), new tu(uu, Eu)
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
  },
  39150: (uu, Eu, ju) => {
    var su = {
      "./cape_cow_cream.png": 28124,
      "./cape_cow_normal.png": 28133,
      "./cape_creator_level1.png": 28138,
      "./cape_creator_level2.png": 28147,
      "./cape_creator_level3.png": 28151,
      "./cape_none.png": 28154,
      "./cape_pig.png": 28163,
      "./cape_sheep.png": 28172,
      "./cape_super.png": 28176,
      "./cape_super_inverted.png": 28181,
      "./cape_youtuber.png": 28188
    };

    function Uu(uu) {
      var Eu = Zu(uu);
      return ju(Eu)
    }

    function Zu(uu) {
      if (!ju.o(su, uu)) {
        var Eu = new Error("Cannot find module '" + uu + "'");
        throw Eu.code = "MODULE_NOT_FOUND", Eu
      }
      return su[uu]
    }
    Uu.keys = function() {
      return Object.keys(su)
    }, Uu.resolve = Zu, uu.exports = Uu, Uu.id = 39150
  }
};
Object.freeze(modules);
for (const uu in modules) Object.freeze(modules[uu]);