export const id = 145;
export const ids = [145];
export const modules = {
  37761: (JJ, cJ, ZJ) => {
    var FJ = {
      "./cape_cow_cream.png": 27270,
      "./cape_cow_normal.png": 27273,
      "./cape_creator_level1.png": 27279,
      "./cape_creator_level2.png": 27287,
      "./cape_creator_level3.png": 27294,
      "./cape_none.png": 27299,
      "./cape_pig.png": 27308,
      "./cape_sheep.png": 27314,
      "./cape_super.png": 27323,
      "./cape_super_inverted.png": 27326,
      "./cape_youtuber.png": 27332
    };

    function UJ(JJ) {
      var cJ = eJ(JJ);
      return ZJ(cJ)
    }

    function eJ(JJ) {
      if (!ZJ.o(FJ, JJ)) {
        var cJ = new Error("Cannot find module '" + JJ + "'");
        throw cJ.code = "MODULE_NOT_FOUND", cJ
      }
      return FJ[JJ]
    }
    UJ.keys = function() {
      return Object.keys(FJ)
    }, UJ.resolve = eJ, JJ.exports = UJ, UJ.id = 37761
  },
  40040: (JJ, cJ, ZJ) => {
    ZJ.r(cJ), ZJ.d(cJ, {
      openCharacterPreview: () => RJ
    });
    var FJ = ZJ(37108),
      UJ = ZJ(2401),
      eJ = ZJ(1995),
      XJ = ZJ(521),
      AJ = ZJ(36562),
      qJ = ZJ(2001),
      jJ = ZJ(36555),
      YJ = ZJ(38624),
      hJ = ZJ(38872),
      DJ = ZJ(39952),
      sJ = ZJ(36165),
      nJ = ZJ(39009),
      GJ = ZJ(36229),
      fJ = ZJ(39029),
      xJ = ZJ(40004),
      rJ = ZJ(36138),
      vJ = ZJ(36578),
      mJ = ZJ(36588),
      QJ = (ZJ(39980), ZJ(39250), ZJ(39987), ZJ(35868));
    let EJ, VJ, KJ, yJ, SJ, IJ, MJ, bJ, wJ;
    const WJ = document.createElement("canvas");
    async function gJ() {
      await new Promise((JJ => {
        setTimeout((() => {
          JJ()
        }), 100)
      }))
    }
    WJ.classList.add("CharCustomisationPreviewCanvas");
    const HJ = {},
      PJ = {},
      kJ = {},
      pJ = {};

    function dJ(JJ) {
      JJ.unfreezeWorldMatrix();
      for (const cJ of JJ.getChildren()) dJ(cJ)
    }

    function zJ(JJ, cJ) {
      const ZJ = (0, rJ.d)(JJ, cJ);
      return ZJ in HJ || (HJ[ZJ] = (async () => {
        try {
          const ZJ = await (0, rJ.f)(JJ, KJ),
            FJ = new Map;
          for (const JJ of ZJ.getNodes()) FJ.set(JJ.name, JJ);
          const UJ = (0, rJ.c)(null !== cJ && void 0 !== cJ ? cJ : JJ, KJ);
          (0, rJ.g)(ZJ, UJ, {
            onProcessedMesh: JJ => {
              (0, rJ.k)(JJ), KJ.BZJ(JJ, !1), JJ.isVisible = !1
            }
          });
          for (const JJ of ZJ.rootNodes) dJ(JJ);
          return FJ
        } catch (FJ) {
          throw delete HJ[ZJ], console.error(`Failed to load preview attachment ${ZJ}:`, FJ), FJ
        }
      })()), HJ[ZJ]
    }

    function NJ(JJ, cJ) {
      JJ.isVisible = cJ;
      for (const ZJ of JJ.getChildMeshes()) ZJ.isVisible = cJ
    }

    function OJ(JJ, cJ) {
      if (!yJ) return;
      const AJ = (0, UJ.h)();
      if (AJ.HV(!1), FJ.e.Player.meshApi.updatePlayerCosmetic(AJ.XM, MJ, JJ, cJ, !0), "cape" === JJ)
        if (cJ === XJ.h) SJ.GV(!1);
        else {
          SJ.GV(!0);
          SJ.material.diffuseTexture = new xJ.b(ZJ(37761)(`./cape_${cJ}.png`), SJ.Qy(), {
            invertY: !1,
            samplingMode: xJ.b.NEAREST_NEAREST_MIPLINEAR
          })
        } pJ[JJ] = async function(JJ, cJ) {
        var ZJ;
        kJ[JJ] = cJ;
        const FJ = PJ[JJ];
        if (FJ)
          for (const {
              mesh: eJ,
              destNode: XJ
            }
            of FJ) {
            NJ(eJ, !1);
            const JJ = IJ.getNamedNode(MJ, XJ);
            IJ.detachTransformNodeIfFound(eJ, MJ, JJ)
          }
        PJ[JJ] = [];
        const UJ = (0, eJ.i)(JJ, cJ);
        if (null !== UJ && void 0 !== UJ && null !== (ZJ = UJ.attachments) && void 0 !== ZJ && ZJ.length)
          for (const eJ of UJ.attachments) {
            let ZJ;
            try {
              ZJ = await zJ(eJ.modelGlb, eJ.texture)
            } catch {
              continue
            }
            if (kJ[JJ] !== cJ) return;
            const FJ = ZJ.get(eJ.modelNode);
            if (!FJ) {
              console.error(`Preview attachment node ${eJ.modelNode} not found in ${eJ.modelGlb}`);
              continue
            }
            NJ(FJ, !0), (0, rJ.n)(FJ, eJ.overlayColour);
            const UJ = IJ.getNamedNode(MJ, eJ.destNode);
            IJ.attachTransformNode(FJ, MJ, UJ), PJ[JJ].push({
              mesh: FJ,
              destNode: eJ.destNode
            })
          }
      }(JJ, cJ)
    }

    function TJ(JJ, cJ) {
      WJ.width = JJ, WJ.height = cJ, EJ.resize()
    }
    let CJ = 0;
    class uJ {
      constructor(JJ, cJ) {
        this.framing = cJ, this.ready = wJ, this.dev = {
          setCamera: iJ,
          canvas: () => WJ,
          isolateHead(JJ) {
            const cJ = IJ.getNodeNames(MJ);
            for (let ZJ = 0; ZJ < cJ.length; ZJ++) "HeadMesh" !== cJ[ZJ] && "__root__" !== cJ[ZJ] && "TorsoNode" !== cJ[ZJ] && IJ.setNodeEnabled(MJ, ZJ, !1);
            if (JJ) {
              const JJ = IJ.getNamedNode(MJ, "HeadMesh");
              IJ.setNodeDisableColorWrite(MJ, JJ, !0, (JJ => {
                const cJ = new fJ.StandardMaterial(`${JJ.name}_depthOnly`, JJ.Qy());
                return cJ.disableColorWrite = !0, cJ
              }))
            }
            IJ.setPosition(MJ, 0, -12, 0)
          }
        }, this.closed = !1, this.resetCamera();
        const ZJ = JJ.getBoundingClientRect();
        TJ(ZJ.width, ZJ.height), CJ++, EJ.stopRenderLoop(), EJ.runRenderLoop((() => {
          var JJ;
          null === (JJ = bJ) || void 0 === JJ || JJ.render(EJ.getDeltaTime()), KJ.render()
        }))
      }
      isReady() {
        return !!yJ
      }
      setCosmetic(JJ, cJ) {
        OJ(JJ, cJ)
      }
      playEmote(JJ) {
        if (!bJ) return;
        if (!JJ) return void bJ.stopAnimation(jJ.f.Emote);
        const cJ = (0, AJ.g)((0, qJ.m)(JJ).animation);
        bJ.startAnimation(cJ, jJ.f.Emote, 0, qJ.e)
      }
      async untilDrawn(JJ) {
        if (await gJ(), "cape" === JJ && SJ) {
          const JJ = SJ.material,
            cJ = null === JJ || void 0 === JJ ? void 0 : JJ.diffuseTexture;
          cJ && !cJ.isReady() && (await new Promise((JJ => {
            cJ.onLoadObservable.addOnce((() => {
              JJ()
            }))
          })), await gJ())
        }
        pJ[JJ] && (await pJ[JJ], await gJ()), await KJ.whenReadyAsync(), await new Promise((JJ => {
          KJ.onAfterRenderObservable.addOnce((() => {
            JJ()
          }))
        }))
      }
      resetCamera() {
        VJ.inertialAlphaOffset = 0, VJ.inertialBetaOffset = 0, VJ.inertialRadiusOffset = 0, iJ(QJ.e[this.framing])
      }
      resize(JJ, cJ) {
        TJ(JJ, cJ)
      }
      close() {
        this.closed || (this.closed = !0, CJ--, 0 === CJ && EJ.stopRenderLoop())
      }
    }

    function iJ(JJ) {
      let {
        yaw: cJ,
        pitch: ZJ,
        radius: FJ,
        target: UJ
      } = JJ;
      VJ.alpha = cJ, VJ.beta = ZJ, FJ && (VJ.radius = FJ), UJ && VJ.target.set(UJ[0], UJ[1], UJ[2])
    }

    function RJ(JJ, cJ) {
      return JJ.appendChild(WJ), EJ || function() {
        EJ = new YJ.e(WJ, !0, {
          preserveDrawingBuffer: !0
        });
        const JJ = (0, UJ.h)();
        EJ.LZJ = JJ.XG.engine.LZJ, KJ = new hJ.b(EJ), KJ.clearColor = new GJ.e(0, 0, 0, 0), KJ.ambientColor = new GJ.Color3(1, 1, 1), VJ = new DJ.b("yf", 0, 0, 1, sJ.Pn.Zero(), KJ), VJ.attachControl(WJ, !0), VJ.panningSensibility = 0, wJ = (0, FJ.r)("Player", KJ, !0).then((cJ => {
          yJ = cJ.meshApi, SJ = cJ.capeMesh, IJ = JJ.XG.Wy;
          const ZJ = 8.33;
          MJ = (0, FJ.k)("Player", ZJ, !0, !0), IJ.setPosition(MJ, 0, -8.33, 0);
          const UJ = IJ.getNamedNode(MJ, "BodyMesh");
          IJ.attachTransformNode(SJ, MJ, UJ), IJ.set(MJ, "aOpacity", 1), IJ.bM(MJ, "aOpacity", 1), bJ = new vJ.AnimatorState, bJ.ih = JJ, bJ.thinInstMgr = IJ, bJ.Py = MJ, bJ.fZJ = IJ.aZJ(MJ, 0), bJ.modelLifeformType = "Player", bJ.nodeNameAliases = (0, mJ.b)("Player").nodeNameAliases;
          const eJ = SJ.rM().boundingBox;
          SJ.position.y = ((24 - eJ.maximum.y + eJ.minimum.y) / 2 - 1 / 32) / ZJ, SJ.position.z = -1 / ZJ, SJ.rotationQuaternion = null;
          const XJ = Math.PI / 18,
            AJ = eJ.maximum.y / ZJ;
          SJ.rotation.x = XJ;
          const qJ = Math.cos(XJ),
            jJ = Math.sin(XJ);
          SJ.position.y += AJ * (1 - qJ) + 0 * jJ, SJ.position.z -= AJ * jJ + 0 * (1 - qJ);
          const YJ = new fJ.StandardMaterial("capeMaterial", SJ.Qy());
          SJ.material = YJ;
          const hJ = new GJ.Color3(1, 1, 1);
          YJ.diffuseColor = new GJ.Color3, YJ.specularColor = new GJ.Color3, YJ.emissiveColor = new GJ.Color3, YJ.ambientColor = new GJ.Color3, hJ.scaleToRef(.43, YJ.diffuseColor), hJ.scaleToRef(1.75, YJ.ambientColor), YJ.freeze();
          const DJ = new nJ.b("light", new sJ.Pn(-.1, 1, -.3), KJ);
          DJ.diffuse = new GJ.Color3(1, 1, 1), DJ.specular = new GJ.Color3(1, 1, 1), DJ.groundColor = new GJ.Color3(.5, .5, .5)
        }))
      }(), new uJ(JJ, cJ)
    }
  },
  37754: (JJ, cJ, ZJ) => {
    ZJ.d(cJ, {
      d: () => DJ
    });
    var FJ = ZJ(36086),
      UJ = ZJ(36102),
      eJ = ZJ(36349),
      XJ = ZJ(36107),
      AJ = ZJ(36093);

    function qJ(JJ) {
      return `\n\t\t\t\t${(0,AJ.A)(JJ,"mat2","rotate",[{name:"ang",type:"float"}],`\
      n\ t\ t\ t\ t\ t$ {
        (0, AJ.H)(JJ, "float", "s", "sin(ang)")
      }\
      n\ t\ t\ t\ t\ t$ {
        (0, AJ.H)(JJ, "float", "c", "cos(ang)")
      }\
      n\ t\ t\ t\ t\ treturn $ {
        (0, AJ.p)(JJ, "mat2", "c", "s", "-s", "c")
      };\
      n\ t\ t\ t\ t`)}\n\t\t\t`
    }

    function jJ(JJ, cJ) {
      let ZJ = (0, AJ.Hb)(JJ, "skele" + (cJ - 1));
      for (let UJ = cJ - 2; UJ >= 0; UJ--) ZJ = (0, AJ.zb)(JJ, `boneIdx == ${UJ}`, (0, AJ.Hb)(JJ, `skele${UJ}`), ZJ);
      const FJ = "bone.yz + rotate(bone.x) * pivot - pivot";
      return `\n\t\t\t\t${(0,AJ.H)(JJ,"int","boneIdx",(0,AJ.Fb)(JJ,"BLOXD_CAPE_MAX_Y - positionUpdated.y"))}\n\t\t\t\t${(0,AJ.H)(JJ,"vec3","bone",ZJ)}\n\t\t\t\t${(0,AJ.H)(JJ,"vec2","pivot",(0,AJ.p)(JJ,"vec2","0.0",`${(0,AJ.Nb)(JJ,"position")}.z`))}\n\t\t\t\t${(0,AJ.gb)(JJ)?`positionUpdated = vec3f(positionUpdated.x, positionUpdated.yz + (${FJ}));`:`positionUpdated.yz += ${FJ};`}\n\t\t`
    }

    function YJ(JJ) {
      return `\n\t\t\t\t#ifdef NORMAL\n\t\t\t\tnormalUpdated = ${(0,AJ.p)(JJ,"vec3","normalUpdated.x","rotate(bone.x) * normalUpdated.yz")};\n\t\t\t\t#endif\n\t\t`
    }
    const hJ = {
        x: 0,
        y: 0,
        z: 0,
        zcJ(JJ, cJ) {
          return this.x = JJ[cJ], this.y = JJ[cJ + 1], this.z = JJ[cJ + 2], this
        }
      },
      DJ = {
        name: "Cape",
        className: "CapeMaterialPlugin",
        priority: 200,
        defines: (JJ, cJ) => ({
          ...(0, FJ.b)("CAPE"),
          BLOXD_CAPE_BONES: `${JJ}`,
          BLOXD_CAPE_MAX_Y: (0, UJ.ib)(cJ)
        }),
        getUniforms(JJ) {
          return (0, eJ.d)(function(JJ) {
            const cJ = [];
            for (let ZJ = 0; ZJ < JJ; ZJ++) cJ.push({
              name: `skele${ZJ}`,
              type: "highp vec3"
            });
            return cJ
          }(this.skeleLen), "vertex", JJ)
        },
        bind(JJ) {
          for (let cJ = 0; cJ < this.skeleLen; cJ++) JJ.updateVector3(`skele${cJ}`, hJ.zcJ(this.skele, 3 * cJ))
        },
        uniformsVersion() {
          return this.bonesVersion
        },
        getCustomCode(JJ, cJ) {
          return "vertex" !== JJ ? null : {
            CUSTOM_VERTEX_DEFINITIONS: qJ(cJ),
            CUSTOM_VERTEX_UPDATE_POSITION: jJ(cJ, this.skeleLen),
            CUSTOM_VERTEX_UPDATE_NORMAL: YJ(cJ)
          }
        }
      };
    (0, XJ.p)(DJ)
  },
  37667: (JJ, cJ, ZJ) => {
    ZJ.d(cJ, {
      c: () => YJ,
      g: () => hJ
    });
    var FJ = ZJ(36086),
      UJ = ZJ(36349),
      eJ = ZJ(36093),
      XJ = ZJ(36107);
    const AJ = "bloxdTextLodBias",
      qJ = [{
        name: AJ,
        type: "float"
      }],
      jJ = "bloxdTextSample",
      YJ = {
        planes: -.5,
        boards: -.5
      },
      hJ = {
        name: "TextSampler",
        className: "TextSamplerMaterialPlugin",
        priority: 60,
        defines: () => (0, FJ.b)("TEXT_SAMPLER"),
        getUniforms: JJ => (0, UJ.d)(qJ, "fragment", JJ),
        bind(JJ) {
          JJ.updateFloat(AJ, this.lodBias)
        },
        uniformsVersion: () => 0,
        getCustomCode(JJ, cJ) {
          if ("fragment" !== JJ) return null;
          const ZJ = (0, eJ.Q)(cJ, `vec4 ${jJ}(sampler2D s, vec2 uv, float bias)`, `fn ${jJ}(t: texture_2d<f32>, ts: sampler, uv: vec2f, bias: f32) -> vec4f`),
            FJ = (0, eJ.Q)(cJ, "texture2D(s, uv, bias)", "textureSampleBias(t, ts, uv, bias)"),
            UJ = `${(0,eJ.$)(cJ,"vDiffuseUV")} + uvOffset`,
            XJ = (0, eJ.Q)(cJ, `${jJ}(diffuseSampler, ${UJ}, ${(0,eJ.Hb)(cJ,AJ)})`, `${jJ}(diffuseSampler, diffuseSamplerSampler, ${UJ}, ${(0,eJ.Hb)(cJ,AJ)})`);
          return {
            CUSTOM_FRAGMENT_DEFINITIONS: `\n\t\t\t\t${ZJ} {\n\t\t\t\t\t${(0,eJ.H)(cJ,"vec4","texel",FJ)}\n\t\t\t\t\t// 8-bit premultiplied rounding can put the quotient just over 1; only alpha 0 hits the floor,\n\t\t\t\t\t// where the colour is 0 anyway.\n\t\t\t\t\treturn ${(0,eJ.p)(cJ,"vec4",`clamp(texel.rgb / max(texel.a, 1.0 / 255.0), ${(0,eJ.p)(cJ,"vec3","0.0")}, ${(0,eJ.p)(cJ,"vec3","1.0")})`,"texel.a")};\n\t\t\t\t}\n\t\t\t`,
            [(0, eJ.L)(cJ)]: `baseColor = ${XJ};`
          }
        }
      };
    (0, XJ.p)(hJ)
  },
  8114: (JJ, cJ, ZJ) => {
    ZJ.d(cJ, {
      e: () => YJ,
      i: () => AJ,
      j: () => qJ
    });
    var FJ = ZJ(1995),
      UJ = ZJ(1137),
      eJ = ZJ(2001);
    const XJ = ",";

    function AJ(JJ) {
      if (!JJ) return [];
      const cJ = new Set,
        ZJ = [];
      for (const FJ of JJ.split(XJ)) {
        const JJ = FJ.trim();
        if ((0, eJ.n)(JJ) && !cJ.has(JJ) && (cJ.add(JJ), ZJ.push(JJ), ZJ.length >= UJ.n)) break
      }
      return ZJ
    }

    function qJ(JJ) {
      const cJ = new Set,
        ZJ = [];
      for (const FJ of JJ)
        if ((0, eJ.n)(FJ) && !cJ.has(FJ) && (cJ.add(FJ), ZJ.push(FJ), ZJ.length >= UJ.n)) break;
      return ZJ.join(XJ)
    }

    function jJ() {
      return qJ(eJ.i)
    }

    function YJ(JJ) {
      var cJ;
      return "emote" === JJ ? jJ() : null !== (cJ = hJ[JJ][0]) && void 0 !== cJ ? cJ : DJ[JJ]
    }
    const hJ = UJ.s.reduce(((JJ, cJ) => {
        const ZJ = [];
        for (const eJ in FJ.g[cJ]) {
          var UJ;
          "default" === (null === (UJ = (0, FJ.i)(cJ, eJ)) || void 0 === UJ ? void 0 : UJ.cosmeticPack) && ZJ.push(eJ)
        }
        return JJ[cJ] = ZJ, JJ
      }), {}),
      DJ = UJ.s.reduce(((JJ, cJ) => (JJ[cJ] = Object.keys(FJ.g[cJ])[0], JJ)), {})
  }
};
Object.freeze(modules);
for (const JJ in modules) Object.freeze(modules[JJ]);