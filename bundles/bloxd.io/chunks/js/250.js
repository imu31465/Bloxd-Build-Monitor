export const id = 250;
export const ids = [250];
export const modules = {
  41579: (GG, bG, ZG) => {
    ZG.r(bG), ZG.d(bG, {
      openCharacterPreview: () => HG
    });
    var wG = ZG(38503),
      SG = ZG(2751),
      LG = ZG(580),
      yG = ZG(37503),
      kG = ZG(2228),
      UG = ZG(37491),
      YG = ZG(40197),
      VG = ZG(40467),
      pG = ZG(41476),
      fG = ZG(37432),
      QG = ZG(40629),
      KG = ZG(37618),
      hG = ZG(40644),
      dG = ZG(41527),
      JG = ZG(37429),
      rG = ZG(1177),
      zG = ZG(2222),
      EG = ZG(37580),
      oG = ZG(37685);
    class XG {
      constructor(GG, bG) {
        this.pose = GG, this.nodes = void 0, this.nodes = GG.boneNames.map((GG => bG.get(GG)))
      }
      write(GG) {
        this.pose.pose(GG);
        const {
          rotations: bG
        } = this.pose;
        for (let ZG = 0; ZG < this.nodes.length; ZG++) {
          const GG = 4 * ZG;
          this.nodes[ZG].rotationQuaternion.set(bG[GG], bG[GG + 1], bG[GG + 2], bG[GG + 3])
        }
      }
    }

    function uG(GG) {
      GG.unfreezeWorldMatrix();
      for (const bG of GG.getChildren()) uG(bG)
    }

    function iG(GG, bG) {
      GG.isVisible = bG;
      for (const ZG of GG.getChildMeshes()) ZG.isVisible = bG
    }
    class CG {
      constructor(GG, bG, ZG) {
        this.Ah = GG, this.thinInstMgr = bG, this.Ql = ZG, this.modelCache = {}, this.attachmentsByType = {}, this.shownBones = [], this.cosmeticNames = {}
      }
      loadModel(GG, bG, ZG) {
        const wG = (0, EG.d)(GG, bG);
        return wG in this.modelCache || (this.modelCache[wG] = (async () => {
          try {
            const wG = await (0, EG.f)(GG, this.Ah),
              SG = new Map;
            for (const GG of wG.getNodes()) SG.set(GG.name, GG);
            const LG = (0, EG.c)(null !== bG && void 0 !== bG ? bG : GG, this.Ah);
            (0, EG.j)(wG, LG, {
              keepTransforms: void 0 !== ZG,
              onProcessedMesh: GG => {
                (0, EG.m)(GG), this.Ah.FwG(GG, !1), GG.isVisible = !1
              }
            });
            for (const GG of wG.rootNodes) uG(GG);
            const yG = void 0 === ZG ? null : (0, oG.g)(ZG, (GG => {
              var bG, ZG;
              return null !== (bG = null === (ZG = SG.get(GG)) || void 0 === ZG ? void 0 : ZG.rotationQuaternion) && void 0 !== bG ? bG : null
            }));
            return {
              nodesByName: SG,
              bones: null === yG ? null : new XG(yG, SG)
            }
          } catch (SG) {
            throw delete this.modelCache[wG], console.error(`Failed to load preview attachment ${wG}:`, SG), SG
          }
        })()), this.modelCache[wG]
      }
      async update(GG, bG) {
        var ZG;
        const {
          thinInstMgr: wG,
          Ql: SG
        } = this;
        this.cosmeticNames[GG] = bG;
        const LG = this.attachmentsByType[GG];
        if (LG)
          for (const {
              mesh: kG,
              destNode: UG,
              bones: YG
            }
            of LG) {
            null !== YG && (0, rG.lb)(this.shownBones, YG), iG(kG, !1);
            const GG = wG.getNamedNode(SG, UG);
            wG.detachTransformNodeIfFound(kG, SG, GG)
          }
        this.attachmentsByType[GG] = [];
        const yG = (0, zG.k)(GG, bG);
        if (null !== yG && void 0 !== yG && null !== (ZG = yG.attachments) && void 0 !== ZG && ZG.length)
          for (const kG of yG.attachments) {
            let ZG;
            try {
              ZG = await this.loadModel(kG.modelGlb, kG.texture, kG.animation)
            } catch {
              continue
            }
            if (this.cosmeticNames[GG] !== bG) return;
            const LG = ZG.nodesByName.get(kG.modelNode);
            if (!LG) {
              console.error(`Preview attachment node ${kG.modelNode} not found in ${kG.modelGlb}`);
              continue
            }
            iG(LG, !0), (0, EG.r)(LG, kG.overlayColour);
            const yG = wG.getNamedNode(SG, kG.destNode);
            wG.attachTransformNode(LG, SG, yG), this.attachmentsByType[GG].push({
              mesh: LG,
              destNode: kG.destNode,
              bones: ZG.bones
            }), null !== ZG.bones && this.shownBones.push(ZG.bones)
          }
      }
      writePoses(GG) {
        for (const bG of this.shownBones) bG.write(GG)
      }
    }
    var WG = ZG(37511),
      mG = (ZG(41502), ZG(40865), ZG(41509), ZG(34519));
    let IG, FG, vG, aG, cG, lG, jG, PG, MG, AG;
    const sG = document.createElement("canvas");
    async function qG() {
      await new Promise((GG => {
        setTimeout((() => {
          GG()
        }), 100)
      }))
    }
    sG.classList.add("CharCustomisationPreviewCanvas");
    const nG = {};

    function gG(GG, bG) {
      sG.width = GG, sG.height = bG, IG.resize()
    }
    let eG = 0;
    class RG {
      constructor(GG, bG) {
        this.framing = bG, this.ready = AG, this.dev = {
          canvas: () => sG,
          isolateHead(GG) {
            const bG = lG.getNodeNames(jG);
            for (let ZG = 0; ZG < bG.length; ZG++) "HeadMesh" !== bG[ZG] && "__root__" !== bG[ZG] && "TorsoNode" !== bG[ZG] && lG.setNodeEnabled(jG, ZG, !1);
            if (GG) {
              const GG = lG.getNamedNode(jG, "HeadMesh");
              lG.setNodeDisableColorWrite(jG, GG, !0, (GG => {
                const bG = new hG.StandardMaterial(`${GG.name}_depthOnly`, GG.Dv());
                return bG.disableColorWrite = !0, bG
              }))
            }
            lG.setPosition(jG, 0, -12, 0)
          }
        }, this.closed = !1, this.resetCamera();
        const ZG = GG.getBoundingClientRect();
        gG(ZG.width, ZG.height), eG++, IG.stopRenderLoop(), IG.runRenderLoop((() => {
          var GG, bG;
          null === (GG = PG) || void 0 === GG || GG.render(IG.getDeltaTime()), null === (bG = MG) || void 0 === bG || bG.writePoses(performance.now() / 1e3), vG.render()
        }))
      }
      isReady() {
        return !!aG
      }
      setCosmetic(GG, bG) {
        ! function(GG, bG) {
          if (!aG) return;
          const yG = (0, SG.i)();
          yG.Tm(!1), wG.d.Player.meshApi.updatePlayerCosmetic(yG.sA, jG, GG, bG, !0), "cape" === GG && (bG === LG.g ? cG.DW(!1) : (cG.DW(!0), cG.material.diffuseTexture = new dG.d(ZG(39198)(`./cape_${bG}.png`), cG.Dv(), {
            invertY: !1,
            samplingMode: dG.d.NEAREST_NEAREST_MIPLINEAR
          })));
          nG[GG] = MG.update(GG, bG)
        }(GG, bG)
      }
      playEmote(GG) {
        if (!PG) return;
        if (!GG) return void PG.stopAnimation(UG.h.Emote);
        const bG = (0, yG.i)((0, kG.j)(GG).animation);
        PG.startAnimation(bG, UG.h.Emote, 0, kG.d)
      }
      async untilDrawn(GG) {
        if (await qG(), "cape" === GG && cG) {
          const GG = cG.material,
            bG = null === GG || void 0 === GG ? void 0 : GG.diffuseTexture;
          bG && !bG.isReady() && (await new Promise((GG => {
            bG.onLoadObservable.addOnce((() => {
              GG()
            }))
          })), await qG())
        }
        nG[GG] && (await nG[GG], await qG()), await vG.whenReadyAsync(), await new Promise((GG => {
          vG.onAfterRenderObservable.addOnce((() => {
            GG()
          }))
        }))
      }
      setOrbit(GG) {
        TG(GG)
      }
      resetCamera() {
        FG.inertialAlphaOffset = 0, FG.inertialBetaOffset = 0, FG.inertialRadiusOffset = 0, TG(mG.b[this.framing])
      }
      resize(GG, bG) {
        gG(GG, bG)
      }
      close() {
        this.closed || (this.closed = !0, eG--, 0 === eG && IG.stopRenderLoop())
      }
    }

    function TG(GG) {
      let {
        yaw: bG,
        pitch: ZG,
        radius: wG,
        target: SG
      } = GG;
      FG.alpha = bG, FG.beta = ZG, wG && (FG.radius = wG), SG && FG.target.set(SG[0], SG[1], SG[2])
    }

    function HG(GG, bG) {
      return GG.appendChild(sG), IG || function() {
        IG = new YG.b(sG, !0, {
          preserveDrawingBuffer: !0
        });
        const GG = (0, SG.i)();
        IG.iwG = GG.HK.engine.iwG, vG = new VG.d(IG), vG.clearColor = new KG.e(0, 0, 0, 0), vG.ambientColor = new KG.Color3(1, 1, 1), FG = new pG.d("nd", 0, 0, 1, fG.mK.Zero(), vG), FG.attachControl(sG, !0), FG.panningSensibility = 0, AG = (0, wG.y)("Player", vG, !0).then((bG => {
          aG = bG.meshApi, cG = bG.capeMesh, lG = GG.HK.Vl;
          const ZG = 8.33;
          jG = (0, wG.l)("Player", ZG, !0, !0), lG.setPosition(jG, 0, -8.33, 0);
          const SG = lG.getNamedNode(jG, "BodyMesh");
          lG.attachTransformNode(cG, jG, SG), lG.set(jG, "aOpacity", 1), lG.Gs(jG, "aOpacity", 1), MG = new CG(vG, lG, jG), PG = new JG.AnimatorState, PG.wf = GG, PG.thinInstMgr = lG, PG.Ql = jG, PG.DZG = lG.CwG(jG, 0), PG.modelLifeformType = "Player", PG.nodeNameAliases = (0, WG.e)("Player").nodeNameAliases;
          const LG = cG.HA().boundingBox;
          cG.position.y = ((24 - LG.maximum.y + LG.minimum.y) / 2 - 1 / 32) / ZG, cG.position.z = -1 / ZG, cG.rotationQuaternion = null;
          const yG = Math.PI / 18,
            kG = LG.maximum.y / ZG;
          cG.rotation.x = yG;
          const UG = Math.cos(yG),
            YG = Math.sin(yG);
          cG.position.y += kG * (1 - UG) + 0 * YG, cG.position.z -= kG * YG + 0 * (1 - UG);
          const VG = new hG.StandardMaterial("capeMaterial", cG.Dv());
          cG.material = VG;
          const pG = new KG.Color3(1, 1, 1);
          VG.diffuseColor = new KG.Color3, VG.specularColor = new KG.Color3, VG.emissiveColor = new KG.Color3, VG.ambientColor = new KG.Color3, pG.scaleToRef(.43, VG.diffuseColor), pG.scaleToRef(1.75, VG.ambientColor), VG.freeze();
          const dG = new QG.d("light", new fG.mK(-.1, 1, -.3), vG);
          dG.diffuse = new KG.Color3(1, 1, 1), dG.specular = new KG.Color3(1, 1, 1), dG.groundColor = new KG.Color3(.5, .5, .5)
        }))
      }(), new RG(GG, bG)
    }
  },
  39195: (GG, bG, ZG) => {
    ZG.d(bG, {
      c: () => fG
    });
    var wG = ZG(37523),
      SG = ZG(37541),
      LG = ZG(37803),
      yG = ZG(37547),
      kG = ZG(37532);

    function UG(GG) {
      return `\n\t\t\t\t${(0,kG.z)(GG,"mat2","rotate",[{name:"ang",type:"float"}],`\
      n\ t\ t\ t\ t\ t$ {
        (0, kG.B)(GG, "float", "s", "sin(ang)")
      }\
      n\ t\ t\ t\ t\ t$ {
        (0, kG.B)(GG, "float", "c", "cos(ang)")
      }\
      n\ t\ t\ t\ t\ treturn $ {
        (0, kG.m)(GG, "mat2", "c", "s", "-s", "c")
      };\
      n\ t\ t\ t\ t`)}\n\t\t\t`
    }

    function YG(GG, bG) {
      let ZG = (0, kG.ub)(GG, "skele" + (bG - 1));
      for (let SG = bG - 2; SG >= 0; SG--) ZG = (0, kG.nb)(GG, `boneIdx == ${SG}`, (0, kG.ub)(GG, `skele${SG}`), ZG);
      const wG = "bone.yz + rotate(bone.x) * pivot - pivot";
      return `\n\t\t\t\t${(0,kG.B)(GG,"int","boneIdx",(0,kG.qb)(GG,"BLOXD_CAPE_MAX_Y - positionUpdated.y"))}\n\t\t\t\t${(0,kG.B)(GG,"vec3","bone",ZG)}\n\t\t\t\t${(0,kG.B)(GG,"vec2","pivot",(0,kG.m)(GG,"vec2","0.0",`${(0,kG.Cb)(GG,"position")}.z`))}\n\t\t\t\t${(0,kG.V)(GG)?`positionUpdated = vec3f(positionUpdated.x, positionUpdated.yz + (${wG}));`:`positionUpdated.yz += ${wG};`}\n\t\t`
    }

    function VG(GG) {
      return `\n\t\t\t\t#ifdef NORMAL\n\t\t\t\tnormalUpdated = ${(0,kG.m)(GG,"vec3","normalUpdated.x","rotate(bone.x) * normalUpdated.yz")};\n\t\t\t\t#endif\n\t\t`
    }
    const pG = {
        x: 0,
        y: 0,
        z: 0,
        hZG(GG, bG) {
          return this.x = GG[bG], this.y = GG[bG + 1], this.z = GG[bG + 2], this
        }
      },
      fG = {
        name: "Cape",
        className: "CapeMaterialPlugin",
        priority: 200,
        defines: (GG, bG) => ({
          ...(0, wG.c)("CAPE"),
          BLOXD_CAPE_BONES: `${GG}`,
          BLOXD_CAPE_MAX_Y: (0, SG.tb)(bG)
        }),
        getUniforms(GG) {
          return (0, LG.d)(function(GG) {
            const bG = [];
            for (let ZG = 0; ZG < GG; ZG++) bG.push({
              name: `skele${ZG}`,
              type: "highp vec3"
            });
            return bG
          }(this.skeleLen), "vertex", GG)
        },
        bind(GG) {
          for (let bG = 0; bG < this.skeleLen; bG++) GG.updateVector3(`skele${bG}`, pG.hZG(this.skele, 3 * bG))
        },
        uniformsVersion() {
          return this.bonesVersion
        },
        getCustomCode(GG, bG) {
          return "vertex" !== GG ? null : {
            CUSTOM_VERTEX_DEFINITIONS: UG(bG),
            CUSTOM_VERTEX_UPDATE_POSITION: YG(bG, this.skeleLen),
            CUSTOM_VERTEX_UPDATE_NORMAL: VG(bG)
          }
        }
      };
    (0, yG.n)(fG)
  },
  39097: (GG, bG, ZG) => {
    ZG.d(bG, {
      d: () => VG,
      f: () => pG
    });
    var wG = ZG(37523),
      SG = ZG(37803),
      LG = ZG(37532),
      yG = ZG(37547);
    const kG = "bloxdTextLodBias",
      UG = [{
        name: kG,
        type: "float"
      }],
      YG = "bloxdTextSample",
      VG = {
        planes: -.5,
        boards: -.5
      },
      pG = {
        name: "TextSampler",
        className: "TextSamplerMaterialPlugin",
        priority: 60,
        defines: () => (0, wG.c)("TEXT_SAMPLER"),
        getUniforms: GG => (0, SG.d)(UG, "fragment", GG),
        bind(GG) {
          GG.updateFloat(kG, this.lodBias)
        },
        uniformsVersion: () => 0,
        getCustomCode(GG, bG) {
          if ("fragment" !== GG) return null;
          const ZG = (0, LG.G)(bG, `vec4 ${YG}(sampler2D s, vec2 uv, float bias)`, `fn ${YG}(t: texture_2d<f32>, ts: sampler, uv: vec2f, bias: f32) -> vec4f`),
            wG = (0, LG.G)(bG, "texture2D(s, uv, bias)", "textureSampleBias(t, ts, uv, bias)"),
            SG = `${(0,LG.P)(bG,"vDiffuseUV")} + uvOffset`,
            yG = (0, LG.G)(bG, `${YG}(diffuseSampler, ${SG}, ${(0,LG.ub)(bG,kG)})`, `${YG}(diffuseSampler, diffuseSamplerSampler, ${SG}, ${(0,LG.ub)(bG,kG)})`);
          return {
            CUSTOM_FRAGMENT_DEFINITIONS: `\n\t\t\t\t${ZG} {\n\t\t\t\t\t${(0,LG.B)(bG,"vec4","texel",wG)}\n\t\t\t\t\t// 8-bit premultiplied rounding can put the quotient just over 1; only alpha 0 hits the floor,\n\t\t\t\t\t// where the colour is 0 anyway.\n\t\t\t\t\treturn ${(0,LG.m)(bG,"vec4",`clamp(texel.rgb / max(texel.a, 1.0 / 255.0), ${(0,LG.m)(bG,"vec3","0.0")}, ${(0,LG.m)(bG,"vec3","1.0")})`,"texel.a")};\n\t\t\t\t}\n\t\t\t`,
            [(0, LG.C)(bG)]: `baseColor = ${yG};`
          }
        }
      };
    (0, yG.n)(pG)
  },
  41509: (GG, bG, ZG) => {
    ZG.r(bG), ZG.d(bG, {
      CapeMaterialPlugin: () => EG,
      HueTintMaterialPlugin: () => oG,
      LifeformMaterialPlugin: () => XG,
      OverlayMaterialPlugin: () => uG
    });
    var wG = ZG(41515),
      SG = ZG(38416);
    class LG extends((0, wG.g)(SG.b)) {}(0, wG.i)(SG.b, LG);
    var yG = ZG(37518);
    class kG extends((0, wG.g)(yG.e)) {}(0, wG.i)(yG.e, kG);
    var UG = ZG(38256);
    class YG extends((0, wG.g)(UG.h)) {}(0, wG.i)(UG.h, YG);
    var VG = ZG(37788),
      pG = ZG(40644),
      fG = ZG(37782);
    class QG extends((0, wG.g)(fG.f)) {
      constructor(GG, bG, ZG) {
        super(GG, bG, ZG), (0, VG.h)(GG)
      }
      dispose(GG) {
        (0, VG.k)(this._material), super.dispose(GG)
      }
    }(0, wG.i)(fG.f, QG), (0, fG.h)({
      disableUnusedSpecularTerm: wG.e,
      isLightingDisabled: GG => GG instanceof pG.StandardMaterial && GG.disableLighting
    });
    var KG = ZG(39097);
    class hG extends((0, wG.g)(KG.f)) {}(0, wG.i)(KG.f, hG);
    var dG = ZG(39195),
      JG = ZG(37629),
      rG = ZG(38546),
      zG = ZG(37576);
    class EG extends((0, wG.g)(dG.c)) {}(0, wG.i)(dG.c, EG);
    class oG extends((0, wG.g)(JG.b)) {}(0, wG.i)(JG.b, oG);
    class XG extends((0, wG.g)(rG.o)) {}(0, wG.i)(rG.o, XG);
    class uG extends((0, wG.g)(zG.c)) {}(0, wG.i)(zG.c, uG)
  },
  41515: (GG, bG, ZG) => {
    ZG.d(bG, {
      e: () => nG,
      g: () => rG,
      i: () => tG
    });
    var wG = ZG(40644),
      SG = ZG(41519),
      LG = ZG(41574),
      yG = ZG(41527),
      kG = ZG(38218),
      UG = ZG(38234),
      YG = ZG(38238),
      VG = ZG(38243),
      pG = ZG(37559),
      fG = ZG(37567),
      QG = ZG(41531),
      KG = ZG(37547),
      hG = ZG(37550),
      dG = ZG(37532);

    function JG(GG, bG) {
      return Object.assign((function(GG, ZG, wG, SG) {
        return bG(this.featureState, GG, ZG, wG, SG)
      }), {
        BQ: GG
      })
    }

    function rG(GG) {
      const bG = class extends QG.b {
          constructor(bG, ZG) {
            const wG = (0, hG.eb)(bG),
              SG = wG && (0, hG.z)(wG, GG.name);
            for (var LG = arguments.length, yG = new Array(LG > 2 ? LG - 2 : 0), kG = 2; kG < LG; kG++) yG[kG - 2] = arguments[kG];
            super(bG, GG.name, GG.priority, SG ? SG.defines : GG.defines(...yG), !1), this.featureState = void 0, this.featureState = ZG, this._pluginManager._addPlugin(this), this._enable(!0), (0, hG.B)(this._material, GG, this.featureState, this._pluginDefineNames)
          }
          getClassName() {
            return GG.className
          }
          isCompatible(GG) {
            return GG === dG.c.GLSL || GG === dG.c.WGSL
          }
        },
        ZG = (0, KG.j)(GG);
      for (const [wG, SG] of Object.entries(KG.e)) {
        const LG = GG[wG];
        if (LG) {
          const GG = ZG[wG];
          Object.defineProperty(bG.prototype, SG, {
            value: JG(LG, GG),
            writable: !0,
            configurable: !0
          })
        }
      }
      return bG
    }
    class zG extends(rG(kG.c)) {}
    var EG = ZG(40197),
      oG = ZG(41539),
      XG = ZG(41544);

    function uG(GG, bG, ZG) {
      return (0, XG.g)(ZG, bG.urls, (() => async function(GG, bG, ZG) {
        const {
          width: wG
        } = GG[0].getSize(), SG = GG.map(((GG, ZG) => {
          var SG;
          const LG = Math.round(GG.getSize().height / wG),
            yG = null === bG || void 0 === bG ? void 0 : bG[ZG];
          return {
            pixels: yG && yG.byteLength === wG * wG * LG * 4 ? yG : null !== (SG = iG.get(GG.getInternalTexture())) && void 0 !== SG ? SG : GG._readPixelsSync(),
            layers: LG
          }
        })), LG = ZG.CK().getCaps().texture2DArrayMaxLayerCount, kG = (0, XG.c)(SG, wG, LG).map((GG => {
          let {
            pixels: bG,
            layers: SG
          } = GG;
          return {
            atlas: new oG.b(bG, wG, wG, SG, EG.b.TEXTUREFORMAT_RGBA, ZG, !0, !1, yG.d.NEAREST_NEAREST_MIPLINEAR),
            layers: SG
          }
        }));
        return GG.forEach(((GG, bG) => {
          const wG = GG.getInternalTexture();
          iG.has(wG) || (! function(GG, bG) {
            const ZG = bG.createRawTexture(new Uint8Array(4), 1, 1, EG.b.TEXTUREFORMAT_RGBA, !1, !1, yG.d.NEAREST_SAMPLINGMODE);
            GG._hardwareTexture.release(), bG.unbindAllTextures(), ZG._swapAndDie(GG, !1)
          }(wG, ZG.CK()), iG.set(wG, SG[bG].pixels))
        })), kG
      }(GG, bG.pixels, ZG)))
    }
    const iG = new WeakMap;
    var CG = ZG(38248);
    class WG extends(rG(UG.i)) {
      constructor(GG, bG) {
        super(GG, bG), this.loaded = new Set, this.mirrors = void 0, this.mirrors = bG.textures.map((GG => GG.mirror)), this.mirrors.forEach(((GG, bG) => {
          GG.onLoadObservable.add((GG => {
            this.setTextureArrayData(GG, bG).catch((GG => {
              console.error(`Failed to build the texture arrays, at atlas ${bG}`, GG)
            }))
          }))
        })), (0, CG.k)(bG, GG.shaderLanguage)
      }
      async setTextureArrayData(GG, bG) {
        const ZG = this.featureState,
          {
            width: wG,
            height: SG
          } = GG.getSize(),
          LG = this._material.shaderLanguage;
        if (!ZG.useWebGL2) return void(0, CG.f)(this._material, ZG, bG, wG, Math.round(SG / wG), LG);
        if (this.loaded.add(bG), this.loaded.size < this.mirrors.length) return;
        const yG = await uG(this.mirrors, ZG.sources, this._material.Dv());
        (0, CG.c)(this._material, ZG, yG, wG, LG)
      }
    }
    var mG = ZG(41552),
      IG = ZG(40681),
      FG = ZG(37432),
      vG = ZG(41560),
      aG = ZG(40795),
      cG = ZG(40673),
      lG = ZG(41498),
      jG = ZG(37962),
      PG = ZG(41565);
    class MG extends mG.b {
      getData() {
        return null
      }
      _rebuild() {}
      restore() {
        super._rebuild()
      }
    }
    const AG = {
      Mesh: vG.d,
      TransformNode: lG.d,
      VK: mG.b,
      VertexBuffer: mG.c,
      BoundingInfo: IG.c,
      mK: FG.mK,
      ArenaBuffer: MG,
      SubMesh: cG.c,
      VertexData: aG.e,
      MirroredGeometry: PG.e,
      meshFromArrays: PG.g,
      plainMeshFromArrays: PG.k
    };
    (0, jG.d)(AG);
    var sG = ZG(37788);
    class qG extends(rG(VG.l)) {
      constructor(GG, bG) {
        if (super(GG, bG), GG instanceof wG.StandardMaterial && bG.dirLightCount > 0) {
          const bG = GG,
            ZG = bG._blockDirtyMechanism;
          bG._blockDirtyMechanism = !0, GG.disableLighting = !0, bG._blockDirtyMechanism = ZG;
          const wG = (0, hG.eb)(GG);
          wG && (wG.disableLighting = !0, (0, hG.cb)(wG))
        }(0, sG.h)(GG)
      }
      dispose(GG) {
        (0, sG.k)(this._material), super.dispose(GG)
      }
    }

    function nG(GG, bG) {
      if (!(bG instanceof wG.StandardMaterial) || bG.specularTexture) return;
      const {
        r: ZG,
        g: SG,
        b: LG
      } = bG.specularColor;
      0 === ZG && 0 === SG && 0 === LG && (GG.SPECULARTERM = !1)
    }(0, VG.h)({
      disableUnusedSpecularTerm: nG
    });
    var gG = ZG(37647),
      eG = ZG(37980);
    const RG = new RegExp(`^#define ${YG.c}\\s*$`, "m");
    class TG extends(rG(YG.f)) {
      constructor(GG, bG) {
        super(GG, bG), this.pK = !1, bG.ditherOnlyWhileFading && (eG.f.add(GG), this.prewarmDitherTwins(GG))
      }
      prewarmDitherTwins(GG) {
        const bG = new WeakSet;
        GG.onEffectCreatedObservable.add((ZG => {
          let {
            effect: wG,
            subMesh: SG
          } = ZG;
          if (this.featureState.prewarmingDither || bG.has(wG)) return;
          bG.add(wG);
          const LG = null === SG || void 0 === SG ? void 0 : SG.getMesh();
          LG && !RG.test(wG.defines) && GG.Dv().onAfterRenderObservable.addOnce((() => {
            this.prewarmDither(LG) || bG.delete(wG)
          }))
        }))
      }
      prewarmDither(GG) {
        if (this.pK || GG.Tu()) return !1;
        const bG = new cG.c(0, 0, 0, 0, 0, GG, void 0, !1, !1);
        this.featureState.prewarmingDither = !0;
        try {
          this._material.isReadyForSubMesh(GG, bG)
        } finally {
          this.featureState.prewarmingDither = !1
        }
        return null !== bG.effect
      }
      dispose(GG) {
        this.pK = !0, super.dispose(GG)
      }
    }
    const HG = new Map;

    function tG(GG, bG) {
      HG.set(GG, bG)
    }
    tG(kG.c, zG), tG(UG.i, WG), tG(YG.f, TG), tG(VG.l, qG), (0, pG.c)({
      create: (GG, bG) => {
        const ZG = new wG.StandardMaterial(GG.name, bG);
        return (0, gG.r)(GG, ZG), ZG.detailMap._pluginDefineNames
      },
      write: (GG, bG, ZG) => {
        (0, gG.U)(GG.mirror, bG, ZG)
      },
      addFeature: (GG, bG, ZG) => {
        const wG = HG.get(bG.feature);
        if (!wG) throw new Error(`${bG.feature.name} has no plugin class (registerPluginClass)`);
        new wG(GG.mirror, bG.state, ...ZG)
      },
      texture: (GG, bG, ZG) => {
        let {
          url: wG,
          noMipmap: SG,
          invertY: LG,
          samplingMode: kG,
          data: UG,
          sets: YG
        } = ZG;
        if (!UG) {
          const ZG = new yG.d(wG, bG, SG, LG, kG);
          return Object.assign(ZG, YG), void(0, fG.G)(GG, ZG)
        }
        const VG = {},
          pG = new Promise(((GG, bG) => {
            VG.onLoad = GG, VG.onError = (GG, ZG) => {
              bG(new Error(`${UG.context}: ${(null===ZG||void 0===ZG?void 0:ZG.message)||GG||"Failed to load texture"}`))
            }
          })),
          {
            mimeType: QG,
            bytes: KG,
            label: hG
          } = UG,
          dG = {
            noMipmap: SG,
            invertY: !1,
            samplingMode: kG,
            ...VG,
            mimeType: QG,
            loaderOptions: void 0,
            useSRGBBuffer: !1
          },
          JG = new yG.d(null, bG, dG);
        gG.u.set(JG, pG), Object.assign(JG, YG), JG.updateURL(wG, KG);
        const rG = JG.getInternalTexture();
        rG && (rG.label = hG), GG.uvSet = JG.coordinatesIndex, GG.matrix.set((0, gG.M)(JG)), (0, fG.G)(GG, JG)
      },
      cube: (GG, bG, ZG) => {
        let {
          rootUrl: wG,
          files: LG,
          noMipmap: kG,
          luminance: UG
        } = ZG;
        const {
          samplingMode: YG
        } = GG.sampler, VG = YG === (0, fG.x)(kG) ? null : () => {
          (0, gG.K)(pG, YG)
        }, pG = new SG.b(wG, bG, null, kG, LG, VG, null, (0, fG.v)(UG));
        pG.coordinatesMode = yG.d.SKYBOX_MODE, (0, fG.G)(GG, pG)
      },
      canvas: (GG, bG, ZG) => {
        let {
          width: wG,
          height: SG,
          mipmaps: kG,
          samplingMode: UG,
          hasAlpha: YG = !1,
          wrap: VG = yG.d.CLAMP_ADDRESSMODE
        } = ZG;
        const pG = new LG.b(bG, {
          width: wG,
          height: SG
        }, GG, kG, UG);
        pG.hasAlpha = YG, pG.wrapU = VG, pG.wrapV = VG;
        const fG = (0, gG.B)(pG);
        return (0, gG.E)(fG, pG), fG
      }
    })
  },
  41565: (GG, bG, ZG) => {
    ZG.d(bG, {
      e: () => VG,
      g: () => pG,
      k: () => fG
    });
    var wG = ZG(41552),
      SG = ZG(40447),
      LG = ZG(40681),
      yG = ZG(40797),
      kG = ZG(41560),
      UG = ZG(40795),
      YG = ZG(37845);
    class VG extends yG.e {
      constructor() {
        super(...arguments), this.model = null, this.onGeometryUpdated = (GG, bG) => {
          this.releaseUnlessInstanced(bG)
        }, this.onLinked = null
      }
      link(GG) {
        var bG;
        (0, YG.n)(GG), this.model = GG, null === (bG = this.onLinked) || void 0 === bG || bG.call(this, GG)
      }
      relink() {
        this.release();
        const GG = [];
        for (const SG of Object.values(this._vertexBuffers))
          if (!SG.getIsInstanced()) {
            const {
              byteOffset: bG,
              byteStride: ZG,
              type: wG,
              normalized: LG
            } = SG;
            GG.push({
              kind: SG.getKind(),
              data: SG.getData(),
              offset: bG,
              stride: ZG,
              components: SG.getSize(),
              glType: wG,
              isNormalized: LG
            })
          } const bG = this._indices.length ? this._indices : null,
          {
            minimum: ZG,
            maximum: wG
          } = this.extend;
        this.link(new YG.f(GG, bG, this.getTotalVertices(), new Float64Array(ZG.mwG()), new Float64Array(wG.mwG())))
      }
      copy(GG) {
        if (!this.model) return super.copy(GG);
        const bG = new VG(GG, this.Dv()),
          ZG = this.IwG(void 0, !0);
        ZG && bG.setIndices(ZG);
        let yG = !1;
        for (const LG in this._vertexBuffers) {
          const GG = this._vertexBuffers[LG],
            ZG = GG.getData();
          if (!ZG) continue;
          const kG = GG.getSize(),
            {
              type: UG,
              byteOffset: YG,
              byteStride: VG,
              normalized: pG
            } = GG;
          yG ||= GG.isUpdatable();
          const fG = GG.getIsInstanced() ? (ZG instanceof Array ? 4 * ZG.length : ZG.byteLength) / VG : this.getTotalVertices(),
            QG = (0, SG.m)(ZG, kG, UG, YG, VG, fG, !0),
            KG = {
              updatable: GG.isUpdatable(),
              stride: kG,
              type: UG,
              normalized: pG,
              takeBufferOwnership: !0,
              instanced: GG.getIsInstanced()
            };
          bG.setVerticesBuffer(new wG.c(this.CK(), QG, LG, KG), fG)
        }
        return bG._updatable = yG, bG._boundingInfo = new LG.c(this.extend.minimum, this.extend.maximum), bG.relink(), bG
      }
      static mergeMeshes(GG, bG, ZG, wG, SG, LG) {
        const UG = GG[0].Dv(),
          YG = new kG.d(GG[0].name + "_merged", UG),
          pG = new VG(yG.e.RandomId(), UG, void 0, !1, YG);
        try {
          if (!kG.d.MergeMeshes(GG, bG, ZG, YG, SG, LG)) return YG.dispose(), null
        } catch (fG) {
          throw YG.dispose(), fG
        }
        return pG.relink(), YG
      }
      removeVerticesData(GG) {
        this.releaseUnlessInstanced(GG), super.removeVerticesData(GG)
      }
      dispose() {
        this.release(), super.dispose()
      }
      releaseUnlessInstanced(GG) {
        var bG;
        GG && null !== (bG = this.getVertexBuffer(GG)) && void 0 !== bG && bG.getIsInstanced() || this.release()
      }
      release() {
        this.model && ((0, YG.v)(this.model), this.model = null)
      }
    }

    function pG(GG, bG, ZG) {
      let wG = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : new kG.d(GG, ZG);
      const SG = (0, YG.k)(bG),
        {
          positions: LG,
          normals: pG,
          uvs: fG,
          indices: QG,
          named: KG = {}
        } = bG,
        hG = new UG.e;
      hG.positions = LG, hG.normals = null !== pG && void 0 !== pG ? pG : null, hG.uvs = null !== fG && void 0 !== fG ? fG : null, hG.indices = QG;
      const dG = new VG(yG.e.RandomId(), ZG, hG, !1, wG);
      for (const {
          kind: yG,
          components: kG
        }
        of SG.vertexAttributes) yG in KG && wG.setVerticesData(yG, KG[yG], !1, kG);
      return dG.link(SG), wG
    }

    function fG(GG, bG, ZG) {
      let wG = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
      const SG = new kG.d(GG, ZG),
        {
          positions: LG,
          normals: yG,
          uvs: YG,
          indices: VG
        } = bG;
      return Object.assign(new UG.e, {
        positions: LG,
        normals: yG,
        uvs: YG,
        indices: VG
      }).applyToMesh(SG, wG), SG
    }
  },
  41544: (GG, bG, ZG) => {
    function wG(GG, bG, ZG) {
      const wG = bG * bG * 4,
        SG = GG[0].layers,
        LG = SG * (GG.length - 1) + GG[GG.length - 1].layers,
        yG = new Uint8Array(LG * wG);
      GG.forEach(((bG, ZG) => {
        const LG = ZG + 1 < GG.length ? Math.min(bG.layers, SG) : bG.layers;
        yG.set(new Uint8Array(bG.pixels.buffer, bG.pixels.byteOffset, LG * wG), ZG * SG * wG)
      }));
      const kG = Math.max(1, Math.min(LG, ZG || LG));
      if (kG === LG) return [{
        pixels: yG,
        layers: LG
      }];
      const UG = [];
      for (let YG = 0; YG < LG; YG += kG) {
        const GG = Math.min(LG, YG + kG);
        UG.push({
          pixels: yG.slice(YG * wG, GG * wG),
          layers: GG - YG
        })
      }
      return UG
    }
    ZG.d(bG, {
      c: () => wG,
      g: () => LG
    });
    const SG = new WeakMap;

    function LG(GG, bG, ZG) {
      var wG, LG;
      const yG = null !== (wG = SG.get(GG)) && void 0 !== wG ? wG : new Map;
      SG.set(GG, yG);
      const kG = null !== (LG = yG.get(bG[0])) && void 0 !== LG ? LG : [];
      yG.set(bG[0], kG);
      const UG = kG.find((GG => GG.urls.length === bG.length && GG.urls.every(((GG, ZG) => GG === bG[ZG]))));
      if (UG) return UG.built;
      const YG = {
        urls: [...bG],
        built: ZG()
      };
      return kG.push(YG), YG.built.catch((() => {
        kG.splice(kG.indexOf(YG), 1)
      })), YG.built
    }
  },
  39198: (GG, bG, ZG) => {
    var wG = {
      "./cape_cow_cream.png": 28096,
      "./cape_cow_normal.png": 28105,
      "./cape_creator_level1.png": 28112,
      "./cape_creator_level2.png": 28120,
      "./cape_creator_level3.png": 28126,
      "./cape_none.png": 28135,
      "./cape_pig.png": 28140,
      "./cape_sheep.png": 28143,
      "./cape_super.png": 28146,
      "./cape_super_inverted.png": 28155,
      "./cape_youtuber.png": 28164
    };

    function SG(GG) {
      var bG = LG(GG);
      return ZG(bG)
    }

    function LG(GG) {
      if (!ZG.o(wG, GG)) {
        var bG = new Error("Cannot find module '" + GG + "'");
        throw bG.code = "MODULE_NOT_FOUND", bG
      }
      return wG[GG]
    }
    SG.keys = function() {
      return Object.keys(wG)
    }, SG.resolve = LG, GG.exports = SG, SG.id = 39198
  }
};
Object.freeze(modules);
for (const GG in modules) Object.freeze(modules[GG]);