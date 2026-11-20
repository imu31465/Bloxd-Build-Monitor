export const id = 152;
export const ids = [152];
export const modules = {
  40554: (UU, RU, gU) => {
    gU.r(RU), gU.d(RU, {
      openCharacterPreview: () => zU
    });
    var tU = gU(37645),
      pU = gU(2551),
      EU = gU(562),
      PU = gU(36664),
      TU = gU(2061),
      qU = gU(36651),
      KU = gU(39196),
      cU = gU(39460),
      GU = gU(40464),
      jU = gU(36593),
      uU = gU(39636),
      CU = gU(36754),
      hU = gU(39648),
      QU = gU(40520),
      eU = gU(36586),
      WU = gU(1217),
      fU = gU(2053),
      xU = gU(36717),
      mU = gU(36813);
    class IU {
      constructor(UU, RU) {
        this.pose = UU, this.nodes = void 0, this.nodes = UU.boneNames.map((UU => RU.get(UU)))
      }
      write(UU) {
        this.pose.pose(UU);
        const {
          rotations: RU
        } = this.pose;
        for (let gU = 0; gU < this.nodes.length; gU++) {
          const UU = 4 * gU;
          this.nodes[gU].rotationQuaternion.set(RU[UU], RU[UU + 1], RU[UU + 2], RU[UU + 3])
        }
      }
    }

    function JU(UU) {
      UU.unfreezeWorldMatrix();
      for (const RU of UU.getChildren()) JU(RU)
    }

    function wU(UU, RU) {
      UU.isVisible = RU;
      for (const gU of UU.getChildMeshes()) gU.isVisible = RU
    }
    class nU {
      constructor(UU, RU, gU) {
        this.Zh = UU, this.thinInstMgr = RU, this.RY = gU, this.modelCache = {}, this.attachmentsByType = {}, this.shownBones = [], this.cosmeticNames = {}
      }
      loadModel(UU, RU, gU) {
        const tU = (0, xU.e)(UU, RU);
        return tU in this.modelCache || (this.modelCache[tU] = (async () => {
          try {
            const tU = await (0, xU.g)(UU, this.Zh),
              pU = new Map;
            for (const UU of tU.getNodes()) pU.set(UU.name, UU);
            const EU = (0, xU.c)(null !== RU && void 0 !== RU ? RU : UU, this.Zh);
            (0, xU.k)(tU, EU, {
              keepTransforms: void 0 !== gU,
              onProcessedMesh: UU => {
                (0, xU.n)(UU), this.Zh.HgU(UU, !1), UU.isVisible = !1
              }
            });
            for (const UU of tU.rootNodes) JU(UU);
            const PU = void 0 === gU ? null : (0, mU.i)(gU, (UU => {
              var RU, gU;
              return null !== (RU = null === (gU = pU.get(UU)) || void 0 === gU ? void 0 : gU.rotationQuaternion) && void 0 !== RU ? RU : null
            }));
            return {
              nodesByName: pU,
              bones: null === PU ? null : new IU(PU, pU)
            }
          } catch (pU) {
            throw delete this.modelCache[tU], console.error(`Failed to load preview attachment ${tU}:`, pU), pU
          }
        })()), this.modelCache[tU]
      }
      async update(UU, RU) {
        var gU;
        const {
          thinInstMgr: tU,
          RY: pU
        } = this;
        this.cosmeticNames[UU] = RU;
        const EU = this.attachmentsByType[UU];
        if (EU)
          for (const {
              mesh: TU,
              destNode: qU,
              bones: KU
            }
            of EU) {
            null !== KU && (0, WU.jb)(this.shownBones, KU), wU(TU, !1);
            const UU = tU.getNamedNode(pU, qU);
            tU.detachTransformNodeIfFound(TU, pU, UU)
          }
        this.attachmentsByType[UU] = [];
        const PU = (0, fU.j)(UU, RU);
        if (null !== PU && void 0 !== PU && null !== (gU = PU.attachments) && void 0 !== gU && gU.length)
          for (const TU of PU.attachments) {
            let gU;
            try {
              gU = await this.loadModel(TU.modelGlb, TU.texture, TU.animation)
            } catch {
              continue
            }
            if (this.cosmeticNames[UU] !== RU) return;
            const EU = gU.nodesByName.get(TU.modelNode);
            if (!EU) {
              console.error(`Preview attachment node ${TU.modelNode} not found in ${TU.modelGlb}`);
              continue
            }
            wU(EU, !0), (0, xU.r)(EU, TU.overlayColour);
            const PU = tU.getNamedNode(pU, TU.destNode);
            tU.attachTransformNode(EU, pU, PU), this.attachmentsByType[UU].push({
              mesh: EU,
              destNode: TU.destNode,
              bones: gU.bones
            }), null !== gU.bones && this.shownBones.push(gU.bones)
          }
      }
      writePoses(UU) {
        for (const RU of this.shownBones) RU.write(UU)
      }
    }
    var bU = gU(36668),
      oU = (gU(40494), gU(39864), gU(40497), gU(9030));
    let ZU, aU, YU, BU, VU, rU, XU, vU, dU, HU;
    const SU = document.createElement("canvas");
    async function sU() {
      await new Promise((UU => {
        setTimeout((() => {
          UU()
        }), 100)
      }))
    }
    SU.classList.add("CharCustomisationPreviewCanvas");
    const yU = {};

    function kU(UU, RU) {
      SU.width = UU, SU.height = RU, ZU.resize()
    }
    let FU = 0;
    class iU {
      constructor(UU, RU) {
        this.framing = RU, this.ready = HU, this.dev = {
          canvas: () => SU,
          isolateHead(UU) {
            const RU = rU.getNodeNames(XU);
            for (let gU = 0; gU < RU.length; gU++) "HeadMesh" !== RU[gU] && "__root__" !== RU[gU] && "TorsoNode" !== RU[gU] && rU.setNodeEnabled(XU, gU, !1);
            if (UU) {
              const UU = rU.getNamedNode(XU, "HeadMesh");
              rU.setNodeDisableColorWrite(XU, UU, !0, (UU => {
                const RU = new hU.StandardMaterial(`${UU.name}_depthOnly`, UU.aZ());
                return RU.disableColorWrite = !0, RU
              }))
            }
            rU.setPosition(XU, 0, -12, 0)
          }
        }, this.closed = !1, this.resetCamera();
        const gU = UU.getBoundingClientRect();
        kU(gU.width, gU.height), FU++, ZU.stopRenderLoop(), ZU.runRenderLoop((() => {
          var UU, RU;
          null === (UU = vU) || void 0 === UU || UU.render(ZU.getDeltaTime()), null === (RU = dU) || void 0 === RU || RU.writePoses(performance.now() / 1e3), YU.render()
        }))
      }
      isReady() {
        return !!BU
      }
      setCosmetic(UU, RU) {
        ! function(UU, RU) {
          if (!BU) return;
          const PU = (0, pU.g)();
          PU.HJ(!1), tU.b.Player.meshApi.updatePlayerCosmetic(PU.AY, XU, UU, RU, !0), "cape" === UU && (RU === EU.f ? VU.GJ(!1) : (VU.GJ(!0), VU.material.diffuseTexture = new QU.c(gU(38356)(`./cape_${RU}.png`), VU.aZ(), {
            invertY: !1,
            samplingMode: QU.c.NEAREST_NEAREST_MIPLINEAR
          })));
          yU[UU] = dU.update(UU, RU)
        }(UU, RU)
      }
      playEmote(UU) {
        if (!vU) return;
        if (!UU) return void vU.stopAnimation(qU.f.Emote);
        const RU = (0, PU.f)((0, TU.f)(UU).animation);
        vU.startAnimation(RU, qU.f.Emote, 0, TU.b)
      }
      async untilDrawn(UU) {
        if (await sU(), "cape" === UU && VU) {
          const UU = VU.material,
            RU = null === UU || void 0 === UU ? void 0 : UU.diffuseTexture;
          RU && !RU.isReady() && (await new Promise((UU => {
            RU.onLoadObservable.addOnce((() => {
              UU()
            }))
          })), await sU())
        }
        yU[UU] && (await yU[UU], await sU()), await YU.whenReadyAsync(), await new Promise((UU => {
          YU.onAfterRenderObservable.addOnce((() => {
            UU()
          }))
        }))
      }
      setOrbit(UU) {
        AU(UU)
      }
      resetCamera() {
        aU.inertialAlphaOffset = 0, aU.inertialBetaOffset = 0, aU.inertialRadiusOffset = 0, AU(oU.e[this.framing])
      }
      resize(UU, RU) {
        kU(UU, RU)
      }
      close() {
        this.closed || (this.closed = !0, FU--, 0 === FU && ZU.stopRenderLoop())
      }
    }

    function AU(UU) {
      let {
        yaw: RU,
        pitch: gU,
        radius: tU,
        target: pU
      } = UU;
      aU.alpha = RU, aU.beta = gU, tU && (aU.radius = tU), pU && aU.target.set(pU[0], pU[1], pU[2])
    }

    function zU(UU, RU) {
      return UU.appendChild(SU), ZU || function() {
        ZU = new KU.d(SU, !0, {
          preserveDrawingBuffer: !0
        });
        const UU = (0, pU.g)();
        ZU.VgU = UU.SC.engine.VgU, YU = new cU.b(ZU), YU.clearColor = new CU.c(0, 0, 0, 0), YU.ambientColor = new CU.Color3(1, 1, 1), aU = new GU.d("WQ", 0, 0, 1, jU.xC.Zero(), YU), aU.attachControl(SU, !0), aU.panningSensibility = 0, HU = (0, tU.r)("Player", YU, !0).then((RU => {
          BU = RU.meshApi, VU = RU.capeMesh, rU = UU.SC.iZ;
          const gU = 8.33;
          XU = (0, tU.h)("Player", gU, !0, !0), rU.setPosition(XU, 0, -8.33, 0);
          const pU = rU.getNamedNode(XU, "BodyMesh");
          rU.attachTransformNode(VU, XU, pU), rU.set(XU, "aOpacity", 1), rU.qB(XU, "aOpacity", 1), dU = new nU(YU, rU, XU), vU = new eU.AnimatorState, vU.LG = UU, vU.thinInstMgr = rU, vU.RY = XU, vU.pgU = rU.rgU(XU, 0), vU.modelLifeformType = "Player", vU.nodeNameAliases = (0, bU.b)("Player").nodeNameAliases;
          const EU = VU.lY().boundingBox;
          VU.position.y = ((24 - EU.maximum.y + EU.minimum.y) / 2 - 1 / 32) / gU, VU.position.z = -1 / gU, VU.rotationQuaternion = null;
          const PU = Math.PI / 18,
            TU = EU.maximum.y / gU;
          VU.rotation.x = PU;
          const qU = Math.cos(PU),
            KU = Math.sin(PU);
          VU.position.y += TU * (1 - qU) + 0 * KU, VU.position.z -= TU * KU + 0 * (1 - qU);
          const cU = new hU.StandardMaterial("capeMaterial", VU.aZ());
          VU.material = cU;
          const GU = new CU.Color3(1, 1, 1);
          cU.diffuseColor = new CU.Color3, cU.specularColor = new CU.Color3, cU.emissiveColor = new CU.Color3, cU.ambientColor = new CU.Color3, GU.scaleToRef(.43, cU.diffuseColor), GU.scaleToRef(1.75, cU.ambientColor), cU.freeze();
          const QU = new uU.e("light", new jU.xC(-.1, 1, -.3), YU);
          QU.diffuse = new CU.Color3(1, 1, 1), QU.specular = new CU.Color3(1, 1, 1), QU.groundColor = new CU.Color3(.5, .5, .5)
        }))
      }(), new iU(UU, RU)
    }
  },
  38350: (UU, RU, gU) => {
    gU.d(RU, {
      c: () => jU
    });
    var tU = gU(36675),
      pU = gU(36681),
      EU = gU(36939),
      PU = gU(36683),
      TU = gU(36678);

    function qU(UU) {
      return `\n\t\t\t\t${(0,TU.B)(UU,"mat2","rotate",[{name:"ang",type:"float"}],`\
      n\ t\ t\ t\ t\ t$ {
        (0, TU.G)(UU, "float", "s", "sin(ang)")
      }\
      n\ t\ t\ t\ t\ t$ {
        (0, TU.G)(UU, "float", "c", "cos(ang)")
      }\
      n\ t\ t\ t\ t\ treturn $ {
        (0, TU.m)(UU, "mat2", "c", "s", "-s", "c")
      };\
      n\ t\ t\ t\ t`)}\n\t\t\t`
    }

    function KU(UU, RU) {
      let gU = (0, TU.Hb)(UU, "skele" + (RU - 1));
      for (let pU = RU - 2; pU >= 0; pU--) gU = (0, TU.xb)(UU, `boneIdx == ${pU}`, (0, TU.Hb)(UU, `skele${pU}`), gU);
      const tU = "bone.yz + rotate(bone.x) * pivot - pivot";
      return `\n\t\t\t\t${(0,TU.G)(UU,"int","boneIdx",(0,TU.Db)(UU,"BLOXD_CAPE_MAX_Y - positionUpdated.y"))}\n\t\t\t\t${(0,TU.G)(UU,"vec3","bone",gU)}\n\t\t\t\t${(0,TU.G)(UU,"vec2","pivot",(0,TU.m)(UU,"vec2","0.0",`${(0,TU.Sb)(UU,"position")}.z`))}\n\t\t\t\t${(0,TU.bb)(UU)?`positionUpdated = vec3f(positionUpdated.x, positionUpdated.yz + (${tU}));`:`positionUpdated.yz += ${tU};`}\n\t\t`
    }

    function cU(UU) {
      return `\n\t\t\t\t#ifdef NORMAL\n\t\t\t\tnormalUpdated = ${(0,TU.m)(UU,"vec3","normalUpdated.x","rotate(bone.x) * normalUpdated.yz")};\n\t\t\t\t#endif\n\t\t`
    }
    const GU = {
        x: 0,
        y: 0,
        z: 0,
        bRU(UU, RU) {
          return this.x = UU[RU], this.y = UU[RU + 1], this.z = UU[RU + 2], this
        }
      },
      jU = {
        name: "Cape",
        className: "CapeMaterialPlugin",
        priority: 200,
        defines: (UU, RU) => ({
          ...(0, tU.e)("CAPE"),
          BLOXD_CAPE_BONES: `${UU}`,
          BLOXD_CAPE_MAX_Y: (0, pU.eb)(RU)
        }),
        getUniforms(UU) {
          return (0, EU.d)(function(UU) {
            const RU = [];
            for (let gU = 0; gU < UU; gU++) RU.push({
              name: `skele${gU}`,
              type: "highp vec3"
            });
            return RU
          }(this.skeleLen), "vertex", UU)
        },
        bind(UU) {
          for (let RU = 0; RU < this.skeleLen; RU++) UU.updateVector3(`skele${RU}`, GU.bRU(this.skele, 3 * RU))
        },
        uniformsVersion() {
          return this.bonesVersion
        },
        getCustomCode(UU, RU) {
          return "vertex" !== UU ? null : {
            CUSTOM_VERTEX_DEFINITIONS: qU(RU),
            CUSTOM_VERTEX_UPDATE_POSITION: KU(RU, this.skeleLen),
            CUSTOM_VERTEX_UPDATE_NORMAL: cU(RU)
          }
        }
      };
    (0, PU.l)(jU)
  },
  38247: (UU, RU, gU) => {
    gU.d(RU, {
      d: () => cU,
      g: () => GU
    });
    var tU = gU(36675),
      pU = gU(36939),
      EU = gU(36678),
      PU = gU(36683);
    const TU = "bloxdTextLodBias",
      qU = [{
        name: TU,
        type: "float"
      }],
      KU = "bloxdTextSample",
      cU = {
        planes: -.5,
        boards: -.5
      },
      GU = {
        name: "TextSampler",
        className: "TextSamplerMaterialPlugin",
        priority: 60,
        defines: () => (0, tU.e)("TEXT_SAMPLER"),
        getUniforms: UU => (0, pU.d)(qU, "fragment", UU),
        bind(UU) {
          UU.updateFloat(TU, this.lodBias)
        },
        uniformsVersion: () => 0,
        getCustomCode(UU, RU) {
          if ("fragment" !== UU) return null;
          const gU = (0, EU.N)(RU, `vec4 ${KU}(sampler2D s, vec2 uv, float bias)`, `fn ${KU}(t: texture_2d<f32>, ts: sampler, uv: vec2f, bias: f32) -> vec4f`),
            tU = (0, EU.N)(RU, "texture2D(s, uv, bias)", "textureSampleBias(t, ts, uv, bias)"),
            pU = `${(0,EU.V)(RU,"vDiffuseUV")} + uvOffset`,
            PU = (0, EU.N)(RU, `${KU}(diffuseSampler, ${pU}, ${(0,EU.Hb)(RU,TU)})`, `${KU}(diffuseSampler, diffuseSamplerSampler, ${pU}, ${(0,EU.Hb)(RU,TU)})`);
          return {
            CUSTOM_FRAGMENT_DEFINITIONS: `\n\t\t\t\t${gU} {\n\t\t\t\t\t${(0,EU.G)(RU,"vec4","texel",tU)}\n\t\t\t\t\t// 8-bit premultiplied rounding can put the quotient just over 1; only alpha 0 hits the floor,\n\t\t\t\t\t// where the colour is 0 anyway.\n\t\t\t\t\treturn ${(0,EU.m)(RU,"vec4",`clamp(texel.rgb / max(texel.a, 1.0 / 255.0), ${(0,EU.m)(RU,"vec3","0.0")}, ${(0,EU.m)(RU,"vec3","1.0")})`,"texel.a")};\n\t\t\t\t}\n\t\t\t`,
            [(0, EU.J)(RU)]: `baseColor = ${PU};`
          }
        }
      };
    (0, PU.l)(GU)
  },
  40497: (UU, RU, gU) => {
    gU.r(RU), gU.d(RU, {
      CapeMaterialPlugin: () => xU,
      HueTintMaterialPlugin: () => mU,
      LifeformMaterialPlugin: () => IU,
      OverlayMaterialPlugin: () => JU
    });
    var tU = gU(40505),
      pU = gU(37549);
    class EU extends((0, tU.f)(pU.d)) {}(0, tU.h)(pU.d, EU);
    var PU = gU(36670);
    class TU extends((0, tU.f)(PU.i)) {}(0, tU.h)(PU.i, TU);
    var qU = gU(37377);
    class KU extends((0, tU.f)(qU.f)) {}(0, tU.h)(qU.f, KU);
    var cU = gU(36925),
      GU = gU(39648),
      jU = gU(36921);
    class uU extends((0, tU.f)(jU.h)) {
      constructor(UU, RU, gU) {
        super(UU, RU, gU), (0, cU.h)(UU)
      }
      dispose(UU) {
        (0, cU.l)(this._material), super.dispose(UU)
      }
    }(0, tU.h)(jU.h, uU), (0, jU.i)({
      disableUnusedSpecularTerm: tU.d,
      isLightingDisabled: UU => UU instanceof GU.StandardMaterial && UU.disableLighting
    });
    var CU = gU(38247);
    class hU extends((0, tU.f)(CU.g)) {}(0, tU.h)(CU.g, hU);
    var QU = gU(38350),
      eU = gU(36765),
      WU = gU(37682),
      fU = gU(36712);
    class xU extends((0, tU.f)(QU.c)) {}(0, tU.h)(QU.c, xU);
    class mU extends((0, tU.f)(eU.d)) {}(0, tU.h)(eU.d, mU);
    class IU extends((0, tU.f)(WU.k)) {}(0, tU.h)(WU.k, IU);
    class JU extends((0, tU.f)(fU.b)) {}(0, tU.h)(fU.b, JU)
  },
  40505: (UU, RU, gU) => {
    gU.d(RU, {
      d: () => sU,
      f: () => WU,
      h: () => zU
    });
    var tU = gU(39648),
      pU = gU(40511),
      EU = gU(40546),
      PU = gU(40520),
      TU = gU(37346),
      qU = gU(37359),
      KU = gU(37363),
      cU = gU(37365),
      GU = gU(36703),
      jU = gU(36707),
      uU = gU(40522),
      CU = gU(36683),
      hU = gU(36689),
      QU = gU(36678);

    function eU(UU, RU) {
      return Object.assign((function(UU, gU, tU, pU) {
        return RU(this.featureState, UU, gU, tU, pU)
      }), {
        Au: UU
      })
    }

    function WU(UU) {
      const RU = class extends uU.b {
          constructor(RU, gU) {
            const tU = (0, hU.kb)(RU),
              pU = tU && (0, hU.D)(tU, UU.name);
            for (var EU = arguments.length, PU = new Array(EU > 2 ? EU - 2 : 0), TU = 2; TU < EU; TU++) PU[TU - 2] = arguments[TU];
            super(RU, UU.name, UU.priority, pU ? pU.defines : UU.defines(...PU), !1), this.featureState = void 0, this.featureState = gU, this._pluginManager._addPlugin(this), this._enable(!0), (0, hU.E)(this._material, UU, this.featureState, this._pluginDefineNames)
          }
          getClassName() {
            return UU.className
          }
          isCompatible(UU) {
            return UU === QU.d.GLSL || UU === QU.d.WGSL
          }
        },
        gU = (0, CU.j)(UU);
      for (const [tU, pU] of Object.entries(CU.b)) {
        const EU = UU[tU];
        if (EU) {
          const UU = gU[tU];
          Object.defineProperty(RU.prototype, pU, {
            value: eU(EU, UU),
            writable: !0,
            configurable: !0
          })
        }
      }
      return RU
    }
    class fU extends(WU(TU.e)) {}
    var xU = gU(39196),
      mU = gU(40525);
    const IU = new WeakMap;

    function JU(UU, RU, gU) {
      let tU = IU.get(gU);
      tU || (tU = new Map, IU.set(gU, tU));
      const {
        url: pU
      } = UU;
      let EU = tU.get(pU);
      return EU || (EU = async function(UU, RU, gU) {
        const {
          width: tU,
          height: pU
        } = UU.getSize(), EU = Math.round(pU / tU), TU = RU && RU.byteLength === tU * tU * EU * 4 ? RU : UU._readPixelsSync();
        return new mU.b(TU, tU, tU, EU, xU.d.TEXTUREFORMAT_RGBA, gU, !0, !1, PU.c.NEAREST_NEAREST_MIPLINEAR)
      }(UU, RU, gU), tU.set(pU, EU), EU.catch((() => {
        tU.delete(pU)
      }))), EU
    }
    var wU = gU(37374);
    class nU extends(WU(qU.h)) {
      constructor(UU, RU) {
        super(UU, RU), RU.textures.forEach(((UU, RU) => {
          UU.mirror.onLoadObservable.add((UU => {
            this.setTextureArrayData(UU, RU).catch((UU => {
              console.error(`Failed to build texture array for atlas ${RU}`, UU)
            }))
          }))
        })), (0, wU.j)(RU, UU.shaderLanguage)
      }
      async setTextureArrayData(UU, RU) {
        var gU, tU;
        const pU = this.featureState,
          {
            width: EU,
            height: PU
          } = UU.getSize(),
          TU = pU.useWebGL2 ? await JU(UU, null !== (gU = null === (tU = pU.sources.pixels) || void 0 === tU ? void 0 : tU[RU]) && void 0 !== gU ? gU : null, this._material.aZ()) : null;
        (0, wU.d)(this._material, pU, RU, TU, EU, Math.round(PU / EU), this._material.shaderLanguage)
      }
    }
    var bU = gU(40533),
      oU = gU(39698),
      ZU = gU(36593),
      aU = gU(40536),
      YU = gU(39792),
      BU = gU(39681),
      VU = gU(40488),
      rU = gU(37109),
      XU = gU(40543);
    class vU extends bU.c {
      getData() {
        return null
      }
      _rebuild() {}
      restore() {
        super._rebuild()
      }
    }
    const dU = {
      Mesh: aU.c,
      TransformNode: VU.d,
      tC: bU.c,
      VertexBuffer: bU.e,
      BoundingInfo: oU.d,
      xC: ZU.xC,
      ArenaBuffer: vU,
      SubMesh: BU.d,
      VertexData: YU.b,
      MirroredGeometry: XU.c,
      meshFromArrays: XU.e,
      plainMeshFromArrays: XU.h
    };
    (0, rU.g)(dU);
    var HU = gU(36925);
    class SU extends(WU(cU.k)) {
      constructor(UU, RU) {
        if (super(UU, RU), UU instanceof tU.StandardMaterial && RU.dirLightCount > 0) {
          const RU = UU,
            gU = RU._blockDirtyMechanism;
          RU._blockDirtyMechanism = !0, UU.disableLighting = !0, RU._blockDirtyMechanism = gU;
          const tU = (0, hU.kb)(UU);
          tU && (tU.disableLighting = !0, (0, hU.gb)(tU))
        }(0, HU.h)(UU)
      }
      dispose(UU) {
        (0, HU.l)(this._material), super.dispose(UU)
      }
    }

    function sU(UU, RU) {
      if (!(RU instanceof tU.StandardMaterial) || RU.specularTexture) return;
      const {
        r: gU,
        g: pU,
        b: EU
      } = RU.specularColor;
      0 === gU && 0 === pU && 0 === EU && (UU.SPECULARTERM = !1)
    }(0, cU.g)({
      disableUnusedSpecularTerm: sU
    });
    var yU = gU(36790),
      kU = gU(37114);
    const FU = new RegExp(`^#define ${KU.e}\\s*$`, "m");
    class iU extends(WU(KU.k)) {
      constructor(UU, RU) {
        super(UU, RU), this.pC = !1, RU.ditherOnlyWhileFading && (kU.d.add(UU), this.prewarmDitherTwins(UU))
      }
      prewarmDitherTwins(UU) {
        const RU = new WeakSet;
        UU.onEffectCreatedObservable.add((gU => {
          let {
            effect: tU,
            subMesh: pU
          } = gU;
          if (this.featureState.prewarmingDither || RU.has(tU)) return;
          RU.add(tU);
          const EU = null === pU || void 0 === pU ? void 0 : pU.getMesh();
          EU && !FU.test(tU.defines) && UU.aZ().onAfterRenderObservable.addOnce((() => {
            this.prewarmDither(EU) || RU.delete(tU)
          }))
        }))
      }
      prewarmDither(UU) {
        if (this.pC || UU.lRU()) return !1;
        const RU = new BU.d(0, 0, 0, 0, 0, UU, void 0, !1, !1);
        this.featureState.prewarmingDither = !0;
        try {
          this._material.isReadyForSubMesh(UU, RU)
        } finally {
          this.featureState.prewarmingDither = !1
        }
        return null !== RU.effect
      }
      dispose(UU) {
        this.pC = !0, super.dispose(UU)
      }
    }
    const AU = new Map;

    function zU(UU, RU) {
      AU.set(UU, RU)
    }
    zU(TU.e, fU), zU(qU.h, nU), zU(KU.k, iU), zU(cU.k, SU), (0, GU.d)({
      create: (UU, RU) => {
        const gU = new tU.StandardMaterial(UU.name, RU);
        return (0, yU.m)(UU, gU), gU.detailMap._pluginDefineNames
      },
      write: (UU, RU, gU) => {
        (0, yU.V)(UU.mirror, RU, gU)
      },
      addFeature: (UU, RU, gU) => {
        const tU = AU.get(RU.feature);
        if (!tU) throw new Error(`${RU.feature.name} has no plugin class (registerPluginClass)`);
        new tU(UU.mirror, RU.state, ...gU)
      },
      texture: (UU, RU, gU) => {
        let {
          url: tU,
          noMipmap: pU,
          invertY: EU,
          samplingMode: TU,
          data: qU,
          sets: KU
        } = gU;
        if (!qU) {
          const gU = new PU.c(tU, RU, pU, EU, TU);
          return Object.assign(gU, KU), void(0, jU.F)(UU, gU)
        }
        const cU = {},
          GU = new Promise(((UU, RU) => {
            cU.onLoad = UU, cU.onError = (UU, gU) => {
              RU(new Error(`${qU.context}: ${(null===gU||void 0===gU?void 0:gU.message)||UU||"Failed to load texture"}`))
            }
          })),
          {
            mimeType: uU,
            bytes: CU,
            label: hU
          } = qU,
          QU = {
            noMipmap: pU,
            invertY: !1,
            samplingMode: TU,
            ...cU,
            mimeType: uU,
            loaderOptions: void 0,
            useSRGBBuffer: !1
          },
          eU = new PU.c(null, RU, QU);
        yU.o.set(eU, GU), Object.assign(eU, KU), eU.updateURL(tU, CU);
        const WU = eU.getInternalTexture();
        WU && (WU.label = hU), UU.uvSet = eU.coordinatesIndex, UU.matrix.set((0, yU.M)(eU)), (0, jU.F)(UU, eU)
      },
      cube: (UU, RU, gU) => {
        let {
          rootUrl: tU,
          files: EU,
          noMipmap: TU,
          luminance: qU
        } = gU;
        const {
          samplingMode: KU
        } = UU.sampler, cU = KU === (0, jU.x)(TU) ? null : () => {
          (0, yU.K)(GU, KU)
        }, GU = new pU.d(tU, RU, null, TU, EU, cU, null, (0, jU.w)(qU));
        GU.coordinatesMode = PU.c.SKYBOX_MODE, (0, jU.F)(UU, GU)
      },
      canvas: (UU, RU, gU) => {
        let {
          width: tU,
          height: pU,
          mipmaps: TU,
          samplingMode: qU,
          hasAlpha: KU = !1,
          wrap: cU = PU.c.CLAMP_ADDRESSMODE
        } = gU;
        const GU = new EU.d(RU, {
          width: tU,
          height: pU
        }, UU, TU, qU);
        GU.hasAlpha = KU, GU.wrapU = cU, GU.wrapV = cU;
        const jU = (0, yU.w)(GU);
        return (0, yU.z)(jU, GU), jU
      }
    })
  },
  40543: (UU, RU, gU) => {
    gU.d(RU, {
      c: () => cU,
      e: () => GU,
      h: () => jU
    });
    var tU = gU(40533),
      pU = gU(39437),
      EU = gU(39698),
      PU = gU(39797),
      TU = gU(40536),
      qU = gU(39792),
      KU = gU(36988);
    class cU extends PU.b {
      constructor() {
        super(...arguments), this.model = null, this.onGeometryUpdated = (UU, RU) => {
          this.releaseUnlessInstanced(RU)
        }, this.onLinked = null
      }
      link(UU) {
        var RU;
        (0, KU.i)(UU), this.model = UU, null === (RU = this.onLinked) || void 0 === RU || RU.call(this, UU)
      }
      relink() {
        this.release();
        const UU = [];
        for (const pU of Object.values(this._vertexBuffers))
          if (!pU.getIsInstanced()) {
            const {
              byteOffset: RU,
              byteStride: gU,
              type: tU,
              normalized: EU
            } = pU;
            UU.push({
              kind: pU.getKind(),
              data: pU.getData(),
              offset: RU,
              stride: gU,
              components: pU.getSize(),
              glType: tU,
              isNormalized: EU
            })
          } const RU = this._indices.length ? this._indices : null,
          {
            minimum: gU,
            maximum: tU
          } = this.extend;
        this.link(new KU.e(UU, RU, this.getTotalVertices(), new Float64Array(gU.vgU()), new Float64Array(tU.vgU())))
      }
      copy(UU) {
        if (!this.model) return super.copy(UU);
        const RU = new cU(UU, this.aZ()),
          gU = this.dgU(void 0, !0);
        gU && RU.setIndices(gU);
        let PU = !1;
        for (const EU in this._vertexBuffers) {
          const UU = this._vertexBuffers[EU],
            gU = UU.getData();
          if (!gU) continue;
          const TU = UU.getSize(),
            {
              type: qU,
              byteOffset: KU,
              byteStride: cU,
              normalized: GU
            } = UU;
          PU ||= UU.isUpdatable();
          const jU = UU.getIsInstanced() ? (gU instanceof Array ? 4 * gU.length : gU.byteLength) / cU : this.getTotalVertices(),
            uU = (0, pU.r)(gU, TU, qU, KU, cU, jU, !0),
            CU = {
              updatable: UU.isUpdatable(),
              stride: TU,
              type: qU,
              normalized: GU,
              takeBufferOwnership: !0,
              instanced: UU.getIsInstanced()
            };
          RU.setVerticesBuffer(new tU.e(this.WC(), uU, EU, CU), jU)
        }
        return RU._updatable = PU, RU._boundingInfo = new EU.d(this.extend.minimum, this.extend.maximum), RU.relink(), RU
      }
      static mergeMeshes(UU, RU, gU, tU, pU, EU) {
        const qU = UU[0].aZ(),
          KU = new TU.c(UU[0].name + "_merged", qU),
          GU = new cU(PU.b.RandomId(), qU, void 0, !1, KU);
        try {
          if (!TU.c.MergeMeshes(UU, RU, gU, KU, pU, EU)) return KU.dispose(), null
        } catch (jU) {
          throw KU.dispose(), jU
        }
        return GU.relink(), KU
      }
      removeVerticesData(UU) {
        this.releaseUnlessInstanced(UU), super.removeVerticesData(UU)
      }
      dispose() {
        this.release(), super.dispose()
      }
      releaseUnlessInstanced(UU) {
        var RU;
        UU && null !== (RU = this.getVertexBuffer(UU)) && void 0 !== RU && RU.getIsInstanced() || this.release()
      }
      release() {
        this.model && ((0, KU.o)(this.model), this.model = null)
      }
    }

    function GU(UU, RU, gU) {
      let tU = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : new TU.c(UU, gU);
      const pU = (0, KU.g)(RU),
        {
          positions: EU,
          normals: GU,
          uvs: jU,
          indices: uU,
          named: CU = {}
        } = RU,
        hU = new qU.b;
      hU.positions = EU, hU.normals = null !== GU && void 0 !== GU ? GU : null, hU.uvs = null !== jU && void 0 !== jU ? jU : null, hU.indices = uU;
      const QU = new cU(PU.b.RandomId(), gU, hU, !1, tU);
      for (const {
          kind: PU,
          components: TU
        }
        of pU.vertexAttributes) PU in CU && tU.setVerticesData(PU, CU[PU], !1, TU);
      return QU.link(pU), tU
    }

    function jU(UU, RU, gU) {
      let tU = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
      const pU = new TU.c(UU, gU),
        {
          positions: EU,
          normals: PU,
          uvs: KU,
          indices: cU
        } = RU;
      return Object.assign(new qU.b, {
        positions: EU,
        normals: PU,
        uvs: KU,
        indices: cU
      }).applyToMesh(pU, tU), pU
    }
  },
  8447: (UU, RU, gU) => {
    gU.d(RU, {
      c: () => cU,
      f: () => TU,
      j: () => qU
    });
    var tU = gU(2053),
      pU = gU(1238),
      EU = gU(2061);
    const PU = ",";

    function TU(UU) {
      if (!UU) return [];
      const RU = new Set,
        gU = [];
      for (const tU of UU.split(PU)) {
        const UU = tU.trim();
        if ((0, EU.i)(UU) && !RU.has(UU) && (RU.add(UU), gU.push(UU), gU.length >= pU.j)) break
      }
      return gU
    }

    function qU(UU) {
      const RU = new Set,
        gU = [];
      for (const tU of UU)
        if ((0, EU.i)(tU) && !RU.has(tU) && (RU.add(tU), gU.push(tU), gU.length >= pU.j)) break;
      return gU.join(PU)
    }

    function KU() {
      return qU(EU.c)
    }

    function cU(UU) {
      var RU;
      return "emote" === UU ? KU() : null !== (RU = GU[UU][0]) && void 0 !== RU ? RU : jU[UU]
    }
    const GU = pU.r.reduce(((UU, RU) => {
        const gU = [];
        for (const EU in tU.f[RU]) {
          var pU;
          "default" === (null === (pU = (0, tU.j)(RU, EU)) || void 0 === pU ? void 0 : pU.cosmeticPack) && gU.push(EU)
        }
        return UU[RU] = gU, UU
      }), {}),
      jU = pU.r.reduce(((UU, RU) => (UU[RU] = Object.keys(tU.f[RU])[0], UU)), {})
  },
  38356: (UU, RU, gU) => {
    var tU = {
      "./cape_cow_cream.png": 27703,
      "./cape_cow_normal.png": 27707,
      "./cape_creator_level1.png": 27714,
      "./cape_creator_level2.png": 27720,
      "./cape_creator_level3.png": 27729,
      "./cape_none.png": 27731,
      "./cape_pig.png": 27734,
      "./cape_sheep.png": 27742,
      "./cape_super.png": 27746,
      "./cape_super_inverted.png": 27753,
      "./cape_youtuber.png": 27762
    };

    function pU(UU) {
      var RU = EU(UU);
      return gU(RU)
    }

    function EU(UU) {
      if (!gU.o(tU, UU)) {
        var RU = new Error("Cannot find module '" + UU + "'");
        throw RU.code = "MODULE_NOT_FOUND", RU
      }
      return tU[UU]
    }
    pU.keys = function() {
      return Object.keys(tU)
    }, pU.resolve = EU, UU.exports = pU, pU.id = 38356
  }
};
Object.freeze(modules);
for (const UU in modules) Object.freeze(modules[UU]);