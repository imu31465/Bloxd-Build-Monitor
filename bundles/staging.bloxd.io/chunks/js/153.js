export const id = 153;
export const ids = [153];
export const modules = {
  38163: (YY, rY, DY) => {
    var FY = {
      "./cape_cow_cream.png": 27660,
      "./cape_cow_normal.png": 27663,
      "./cape_creator_level1.png": 27667,
      "./cape_creator_level2.png": 27672,
      "./cape_creator_level3.png": 27681,
      "./cape_none.png": 27687,
      "./cape_pig.png": 27690,
      "./cape_sheep.png": 27698,
      "./cape_super.png": 27706,
      "./cape_super_inverted.png": 27711,
      "./cape_youtuber.png": 27717
    };

    function AY(YY) {
      var rY = IY(YY);
      return DY(rY)
    }

    function IY(YY) {
      if (!DY.o(FY, YY)) {
        var rY = new Error("Cannot find module '" + YY + "'");
        throw rY.code = "MODULE_NOT_FOUND", rY
      }
      return FY[YY]
    }
    AY.keys = function() {
      return Object.keys(FY)
    }, AY.resolve = IY, YY.exports = AY, AY.id = 38163
  },
  40376: (YY, rY, DY) => {
    DY.r(rY), DY.d(rY, {
      openCharacterPreview: () => GY
    });
    var FY = DY(37500),
      AY = DY(2501),
      IY = DY(2091),
      RY = DY(605),
      OY = DY(36896),
      gY = DY(2099),
      aY = DY(36894),
      vY = DY(38965),
      uY = DY(39209),
      sY = DY(40295),
      iY = DY(36518),
      yY = DY(39375),
      QY = DY(36586),
      oY = DY(39391),
      WY = DY(40338),
      EY = DY(36493),
      mY = DY(36914),
      VY = DY(36931),
      SY = (DY(40316), DY(39602), DY(40323), DY(36231));
    let lY, TY, eY, NY, BY, cY, KY, HY, zY;
    const ZY = document.createElement("canvas");
    async function CY() {
      await new Promise((YY => {
        setTimeout((() => {
          YY()
        }), 100)
      }))
    }
    ZY.classList.add("CharCustomisationPreviewCanvas");
    const fY = {},
      jY = {},
      hY = {},
      dY = {};

    function JY(YY) {
      YY.unfreezeWorldMatrix();
      for (const rY of YY.getChildren()) JY(rY)
    }

    function MY(YY, rY) {
      const DY = (0, EY.f)(YY, rY);
      return DY in fY || (fY[DY] = (async () => {
        try {
          const DY = await (0, EY.h)(YY, eY),
            FY = new Map;
          for (const YY of DY.getNodes()) FY.set(YY.name, YY);
          const AY = (0, EY.c)(null !== rY && void 0 !== rY ? rY : YY, eY);
          (0, EY.k)(DY, AY, {
            onProcessedMesh: YY => {
              (0, EY.m)(YY), eY.WDY(YY, !1), YY.isVisible = !1
            }
          });
          for (const YY of DY.rootNodes) JY(YY);
          return FY
        } catch (FY) {
          throw delete fY[DY], console.error(`Failed to load preview attachment ${DY}:`, FY), FY
        }
      })()), fY[DY]
    }

    function wY(YY, rY) {
      YY.isVisible = rY;
      for (const DY of YY.getChildMeshes()) DY.isVisible = rY
    }

    function bY(YY, rY) {
      if (!NY) return;
      const OY = (0, AY.e)();
      if (OY.wV(!1), FY.b.Player.meshApi.updatePlayerCosmetic(OY.yB, KY, YY, rY, !0), "cape" === YY)
        if (rY === RY.g) BY.mV(!1);
        else {
          BY.mV(!0);
          BY.material.diffuseTexture = new WY.d(DY(38163)(`./cape_${rY}.png`), BY.hT(), {
            invertY: !1,
            samplingMode: WY.d.NEAREST_NEAREST_MIPLINEAR
          })
        } dY[YY] = async function(YY, rY) {
        var DY;
        hY[YY] = rY;
        const FY = jY[YY];
        if (FY)
          for (const {
              mesh: IY,
              destNode: RY
            }
            of FY) {
            wY(IY, !1);
            const YY = cY.getNamedNode(KY, RY);
            cY.detachTransformNodeIfFound(IY, KY, YY)
          }
        jY[YY] = [];
        const AY = (0, IY.n)(YY, rY);
        if (null !== AY && void 0 !== AY && null !== (DY = AY.attachments) && void 0 !== DY && DY.length)
          for (const IY of AY.attachments) {
            let DY;
            try {
              DY = await MY(IY.modelGlb, IY.texture)
            } catch {
              continue
            }
            if (hY[YY] !== rY) return;
            const FY = DY.get(IY.modelNode);
            if (!FY) {
              console.error(`Preview attachment node ${IY.modelNode} not found in ${IY.modelGlb}`);
              continue
            }
            wY(FY, !0), (0, EY.r)(FY, IY.overlayColour);
            const AY = cY.getNamedNode(KY, IY.destNode);
            cY.attachTransformNode(FY, KY, AY), jY[YY].push({
              mesh: FY,
              destNode: IY.destNode
            })
          }
      }(YY, rY)
    }

    function XY(YY, rY) {
      ZY.width = YY, ZY.height = rY, lY.resize()
    }
    let qY = 0;
    class pY {
      constructor(YY, rY) {
        this.framing = rY, this.ready = zY, this.dev = {
          setCamera: kY,
          canvas: () => ZY,
          isolateHead(YY) {
            const rY = cY.getNodeNames(KY);
            for (let DY = 0; DY < rY.length; DY++) "HeadMesh" !== rY[DY] && "__root__" !== rY[DY] && "TorsoNode" !== rY[DY] && cY.setNodeEnabled(KY, DY, !1);
            if (YY) {
              const YY = cY.getNamedNode(KY, "HeadMesh");
              cY.setNodeDisableColorWrite(KY, YY, !0, (YY => {
                const rY = new oY.StandardMaterial(`${YY.name}_depthOnly`, YY.hT());
                return rY.disableColorWrite = !0, rY
              }))
            }
            cY.setPosition(KY, 0, -12, 0)
          }
        }, this.closed = !1, this.resetCamera();
        const DY = YY.getBoundingClientRect();
        XY(DY.width, DY.height), qY++, lY.stopRenderLoop(), lY.runRenderLoop((() => {
          var YY;
          null === (YY = HY) || void 0 === YY || YY.render(lY.getDeltaTime()), eY.render()
        }))
      }
      isReady() {
        return !!NY
      }
      setCosmetic(YY, rY) {
        bY(YY, rY)
      }
      playEmote(YY) {
        if (!HY) return;
        if (!YY) return void HY.stopAnimation(aY.d.Emote);
        const rY = (0, OY.f)((0, gY.h)(YY).animation);
        HY.startAnimation(rY, aY.d.Emote, 0, gY.c)
      }
      async untilDrawn(YY) {
        if (await CY(), "cape" === YY && BY) {
          const YY = BY.material,
            rY = null === YY || void 0 === YY ? void 0 : YY.diffuseTexture;
          rY && !rY.isReady() && (await new Promise((YY => {
            rY.onLoadObservable.addOnce((() => {
              YY()
            }))
          })), await CY())
        }
        dY[YY] && (await dY[YY], await CY()), await eY.whenReadyAsync(), await new Promise((YY => {
          eY.onAfterRenderObservable.addOnce((() => {
            YY()
          }))
        }))
      }
      resetCamera() {
        TY.inertialAlphaOffset = 0, TY.inertialBetaOffset = 0, TY.inertialRadiusOffset = 0, kY(SY.b[this.framing])
      }
      resize(YY, rY) {
        XY(YY, rY)
      }
      close() {
        this.closed || (this.closed = !0, qY--, 0 === qY && lY.stopRenderLoop())
      }
    }

    function kY(YY) {
      let {
        yaw: rY,
        pitch: DY,
        radius: FY,
        target: AY
      } = YY;
      TY.alpha = rY, TY.beta = DY, FY && (TY.radius = FY), AY && TY.target.set(AY[0], AY[1], AY[2])
    }

    function GY(YY, rY) {
      return YY.appendChild(ZY), lY || function() {
        lY = new vY.c(ZY, !0, {
          preserveDrawingBuffer: !0
        });
        const YY = (0, AY.e)();
        lY.QDY = YY.sQ.engine.QDY, eY = new uY.c(lY), eY.clearColor = new QY.c(0, 0, 0, 0), eY.ambientColor = new QY.Color3(1, 1, 1), TY = new sY.e("Co", 0, 0, 1, iY.xy.Zero(), eY), TY.attachControl(ZY, !0), TY.panningSensibility = 0, zY = (0, FY.v)("Player", eY, !0).then((rY => {
          NY = rY.meshApi, BY = rY.capeMesh, cY = YY.sQ.qT;
          const DY = 8.33;
          KY = (0, FY.j)("Player", DY, !0, !0), cY.setPosition(KY, 0, -8.33, 0);
          const AY = cY.getNamedNode(KY, "BodyMesh");
          cY.attachTransformNode(BY, KY, AY), cY.set(KY, "aOpacity", 1), cY.lB(KY, "aOpacity", 1), HY = new mY.AnimatorState, HY.Gu = YY, HY.thinInstMgr = cY, HY.pT = KY, HY.MrY = cY.oDY(KY, 0), HY.modelLifeformType = "Player", HY.nodeNameAliases = (0, VY.b)("Player").nodeNameAliases;
          const IY = BY.oB().boundingBox;
          BY.position.y = ((24 - IY.maximum.y + IY.minimum.y) / 2 - 1 / 32) / DY, BY.position.z = -1 / DY, BY.rotationQuaternion = null;
          const RY = Math.PI / 18,
            OY = IY.maximum.y / DY;
          BY.rotation.x = RY;
          const gY = Math.cos(RY),
            aY = Math.sin(RY);
          BY.position.y += OY * (1 - gY) + 0 * aY, BY.position.z -= OY * aY + 0 * (1 - gY);
          const vY = new oY.StandardMaterial("capeMaterial", BY.hT());
          BY.material = vY;
          const uY = new QY.Color3(1, 1, 1);
          vY.diffuseColor = new QY.Color3, vY.specularColor = new QY.Color3, vY.emissiveColor = new QY.Color3, vY.ambientColor = new QY.Color3, uY.scaleToRef(.43, vY.diffuseColor), uY.scaleToRef(1.75, vY.ambientColor), vY.freeze();
          const sY = new yY.e("light", new iY.xy(-.1, 1, -.3), eY);
          sY.diffuse = new QY.Color3(1, 1, 1), sY.specular = new QY.Color3(1, 1, 1), sY.groundColor = new QY.Color3(.5, .5, .5)
        }))
      }(), new pY(YY, rY)
    }
  },
  38154: (YY, rY, DY) => {
    DY.d(rY, {
      e: () => sY
    });
    var FY = DY(36450),
      AY = DY(36460),
      IY = DY(36691),
      RY = DY(36465),
      OY = DY(36454);

    function gY(YY) {
      return `\n\t\t\t\t${(0,OY.z)(YY,"mat2","rotate",[{name:"ang",type:"float"}],`\
      n\ t\ t\ t\ t\ t$ {
        (0, OY.F)(YY, "float", "s", "sin(ang)")
      }\
      n\ t\ t\ t\ t\ t$ {
        (0, OY.F)(YY, "float", "c", "cos(ang)")
      }\
      n\ t\ t\ t\ t\ treturn $ {
        (0, OY.n)(YY, "mat2", "c", "s", "-s", "c")
      };\
      n\ t\ t\ t\ t`)}\n\t\t\t`
    }

    function aY(YY, rY) {
      let DY = (0, OY.Ib)(YY, "skele" + (rY - 1));
      for (let AY = rY - 2; AY >= 0; AY--) DY = (0, OY.ub)(YY, `boneIdx == ${AY}`, (0, OY.Ib)(YY, `skele${AY}`), DY);
      const FY = "bone.yz + rotate(bone.x) * pivot - pivot";
      return `\n\t\t\t\t${(0,OY.F)(YY,"int","boneIdx",(0,OY.Ab)(YY,"BLOXD_CAPE_MAX_Y - positionUpdated.y"))}\n\t\t\t\t${(0,OY.F)(YY,"vec3","bone",DY)}\n\t\t\t\t${(0,OY.F)(YY,"vec2","pivot",(0,OY.n)(YY,"vec2","0.0",`${(0,OY.Ob)(YY,"position")}.z`))}\n\t\t\t\t${(0,OY.db)(YY)?`positionUpdated = vec3f(positionUpdated.x, positionUpdated.yz + (${FY}));`:`positionUpdated.yz += ${FY};`}\n\t\t`
    }

    function vY(YY) {
      return `\n\t\t\t\t#ifdef NORMAL\n\t\t\t\tnormalUpdated = ${(0,OY.n)(YY,"vec3","normalUpdated.x","rotate(bone.x) * normalUpdated.yz")};\n\t\t\t\t#endif\n\t\t`
    }
    const uY = {
        x: 0,
        y: 0,
        z: 0,
        grY(YY, rY) {
          return this.x = YY[rY], this.y = YY[rY + 1], this.z = YY[rY + 2], this
        }
      },
      sY = {
        name: "Cape",
        className: "CapeMaterialPlugin",
        priority: 200,
        defines: (YY, rY) => ({
          ...(0, FY.b)("CAPE"),
          BLOXD_CAPE_BONES: `${YY}`,
          BLOXD_CAPE_MAX_Y: (0, AY.lb)(rY)
        }),
        getUniforms(YY) {
          return (0, IY.e)(function(YY) {
            const rY = [];
            for (let DY = 0; DY < YY; DY++) rY.push({
              name: `skele${DY}`,
              type: "highp vec3"
            });
            return rY
          }(this.skeleLen), "vertex", YY)
        },
        bind(YY) {
          for (let rY = 0; rY < this.skeleLen; rY++) YY.updateVector3(`skele${rY}`, uY.grY(this.skele, 3 * rY))
        },
        uniformsVersion() {
          return this.bonesVersion
        },
        getCustomCode(YY, rY) {
          return "vertex" !== YY ? null : {
            CUSTOM_VERTEX_DEFINITIONS: gY(rY),
            CUSTOM_VERTEX_UPDATE_POSITION: aY(rY, this.skeleLen),
            CUSTOM_VERTEX_UPDATE_NORMAL: vY(rY)
          }
        }
      };
    (0, RY.l)(sY)
  },
  38050: (YY, rY, DY) => {
    DY.d(rY, {
      c: () => vY,
      f: () => uY
    });
    var FY = DY(36450),
      AY = DY(36691),
      IY = DY(36454),
      RY = DY(36465);
    const OY = "bloxdTextLodBias",
      gY = [{
        name: OY,
        type: "float"
      }],
      aY = "bloxdTextSample",
      vY = {
        planes: -.5,
        boards: -.5
      },
      uY = {
        name: "TextSampler",
        className: "TextSamplerMaterialPlugin",
        priority: 60,
        defines: () => (0, FY.b)("TEXT_SAMPLER"),
        getUniforms: YY => (0, AY.e)(gY, "fragment", YY),
        bind(YY) {
          YY.updateFloat(OY, this.lodBias)
        },
        uniformsVersion: () => 0,
        getCustomCode(YY, rY) {
          if ("fragment" !== YY) return null;
          const DY = (0, IY.M)(rY, `vec4 ${aY}(sampler2D s, vec2 uv, float bias)`, `fn ${aY}(t: texture_2d<f32>, ts: sampler, uv: vec2f, bias: f32) -> vec4f`),
            FY = (0, IY.M)(rY, "texture2D(s, uv, bias)", "textureSampleBias(t, ts, uv, bias)"),
            AY = `${(0,IY.U)(rY,"vDiffuseUV")} + uvOffset`,
            RY = (0, IY.M)(rY, `${aY}(diffuseSampler, ${AY}, ${(0,IY.Ib)(rY,OY)})`, `${aY}(diffuseSampler, diffuseSamplerSampler, ${AY}, ${(0,IY.Ib)(rY,OY)})`);
          return {
            CUSTOM_FRAGMENT_DEFINITIONS: `\n\t\t\t\t${DY} {\n\t\t\t\t\t${(0,IY.F)(rY,"vec4","texel",FY)}\n\t\t\t\t\t// 8-bit premultiplied rounding can put the quotient just over 1; only alpha 0 hits the floor,\n\t\t\t\t\t// where the colour is 0 anyway.\n\t\t\t\t\treturn ${(0,IY.n)(rY,"vec4",`clamp(texel.rgb / max(texel.a, 1.0 / 255.0), ${(0,IY.n)(rY,"vec3","0.0")}, ${(0,IY.n)(rY,"vec3","1.0")})`,"texel.a")};\n\t\t\t\t}\n\t\t\t`,
            [(0, IY.G)(rY)]: `baseColor = ${RY};`
          }
        }
      };
    (0, RY.l)(uY)
  },
  8236: (YY, rY, DY) => {
    DY.d(rY, {
      b: () => vY,
      f: () => OY,
      i: () => gY
    });
    var FY = DY(2091),
      AY = DY(1244),
      IY = DY(2099);
    const RY = ",";

    function OY(YY) {
      if (!YY) return [];
      const rY = new Set,
        DY = [];
      for (const FY of YY.split(RY)) {
        const YY = FY.trim();
        if ((0, IY.j)(YY) && !rY.has(YY) && (rY.add(YY), DY.push(YY), DY.length >= AY.m)) break
      }
      return DY
    }

    function gY(YY) {
      const rY = new Set,
        DY = [];
      for (const FY of YY)
        if ((0, IY.j)(FY) && !rY.has(FY) && (rY.add(FY), DY.push(FY), DY.length >= AY.m)) break;
      return DY.join(RY)
    }

    function aY() {
      return gY(IY.e)
    }

    function vY(YY) {
      var rY;
      return "emote" === YY ? aY() : null !== (rY = uY[YY][0]) && void 0 !== rY ? rY : sY[YY]
    }
    const uY = AY.u.reduce(((YY, rY) => {
        const DY = [];
        for (const IY in FY.g[rY]) {
          var AY;
          "default" === (null === (AY = (0, FY.n)(rY, IY)) || void 0 === AY ? void 0 : AY.cosmeticPack) && DY.push(IY)
        }
        return YY[rY] = DY, YY
      }), {}),
      sY = AY.u.reduce(((YY, rY) => (YY[rY] = Object.keys(FY.g[rY])[0], YY)), {})
  }
};
Object.freeze(modules);
for (const YY in modules) Object.freeze(modules[YY]);