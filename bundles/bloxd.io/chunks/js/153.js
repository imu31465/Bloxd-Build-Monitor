export const id = 153;
export const ids = [153];
export const modules = {
  40089: (TT, oT, IT) => {
    IT.r(oT), IT.d(oT, {
      openCharacterPreview: () => pT
    });
    var iT = IT(37111),
      zT = IT(2465),
      kT = IT(2026),
      WT = IT(596),
      XT = IT(36510),
      BT = IT(2029),
      FT = IT(36501),
      ST = IT(38589),
      DT = IT(38874),
      LT = IT(4e4),
      xT = IT(36114),
      cT = IT(39021),
      KT = IT(36175),
      MT = IT(39038),
      rT = IT(40055),
      AT = IT(36089),
      gT = IT(36522),
      hT = IT(36539),
      wT = (IT(40029), IT(39273), IT(40038), IT(35801));
    let mT, eT, RT, uT, vT, ET, fT, CT, jT;
    const JT = document.createElement("canvas");
    async function UT() {
      await new Promise((TT => {
        setTimeout((() => {
          TT()
        }), 100)
      }))
    }
    JT.classList.add("CharCustomisationPreviewCanvas");
    const aT = {},
      YT = {},
      QT = {},
      OT = {};

    function HT(TT) {
      TT.unfreezeWorldMatrix();
      for (const oT of TT.getChildren()) HT(oT)
    }

    function nT(TT, oT) {
      const IT = (0, AT.c)(TT, oT);
      return IT in aT || (aT[IT] = (async () => {
        try {
          const IT = await (0, AT.e)(TT, RT),
            iT = new Map;
          for (const TT of IT.getNodes()) iT.set(TT.name, TT);
          const zT = (0, AT.b)(null !== oT && void 0 !== oT ? oT : TT, RT);
          (0, AT.i)(IT, zT, {
            onProcessedMesh: TT => {
              (0, AT.l)(TT), RT.tIT(TT, !1), TT.isVisible = !1
            }
          });
          for (const TT of IT.rootNodes) HT(TT);
          return iT
        } catch (iT) {
          throw delete aT[IT], console.error(`Failed to load preview attachment ${IT}:`, iT), iT
        }
      })()), aT[IT]
    }

    function qT(TT, oT) {
      TT.isVisible = oT;
      for (const IT of TT.getChildMeshes()) IT.isVisible = oT
    }

    function ZT(TT, oT) {
      if (!uT) return;
      const XT = (0, zT.i)();
      if (XT.OE(!1), iT.b.Player.meshApi.updatePlayerCosmetic(XT.ZJ, fT, TT, oT, !0), "cape" === TT)
        if (oT === WT.h) vT.Fv(!1);
        else {
          vT.Fv(!0);
          vT.material.diffuseTexture = new rT.d(IT(37779)(`./cape_${oT}.png`), vT.pC(), {
            invertY: !1,
            samplingMode: rT.d.NEAREST_NEAREST_MIPLINEAR
          })
        } OT[TT] = async function(TT, oT) {
        var IT;
        QT[TT] = oT;
        const iT = YT[TT];
        if (iT)
          for (const {
              mesh: kT,
              destNode: WT
            }
            of iT) {
            qT(kT, !1);
            const TT = ET.getNamedNode(fT, WT);
            ET.detachTransformNodeIfFound(kT, fT, TT)
          }
        YT[TT] = [];
        const zT = (0, kT.g)(TT, oT);
        if (null !== zT && void 0 !== zT && null !== (IT = zT.attachments) && void 0 !== IT && IT.length)
          for (const kT of zT.attachments) {
            let IT;
            try {
              IT = await nT(kT.modelGlb, kT.texture)
            } catch {
              continue
            }
            if (QT[TT] !== oT) return;
            const iT = IT.get(kT.modelNode);
            if (!iT) {
              console.error(`Preview attachment node ${kT.modelNode} not found in ${kT.modelGlb}`);
              continue
            }
            qT(iT, !0), (0, AT.r)(iT, kT.overlayColour);
            const zT = ET.getNamedNode(fT, kT.destNode);
            ET.attachTransformNode(iT, fT, zT), YT[TT].push({
              mesh: iT,
              destNode: kT.destNode
            })
          }
      }(TT, oT)
    }

    function lT(TT, oT) {
      JT.width = TT, JT.height = oT, mT.resize()
    }
    let sT = 0;
    class tT {
      constructor(TT, oT) {
        this.framing = oT, this.ready = jT, this.dev = {
          setCamera: GT,
          canvas: () => JT,
          isolateHead(TT) {
            const oT = ET.getNodeNames(fT);
            for (let IT = 0; IT < oT.length; IT++) "HeadMesh" !== oT[IT] && "__root__" !== oT[IT] && "TorsoNode" !== oT[IT] && ET.setNodeEnabled(fT, IT, !1);
            if (TT) {
              const TT = ET.getNamedNode(fT, "HeadMesh");
              ET.setNodeDisableColorWrite(fT, TT, !0, (TT => {
                const oT = new MT.StandardMaterial(`${TT.name}_depthOnly`, TT.pC());
                return oT.disableColorWrite = !0, oT
              }))
            }
            ET.setPosition(fT, 0, -12, 0)
          }
        }, this.closed = !1, this.resetCamera();
        const IT = TT.getBoundingClientRect();
        lT(IT.width, IT.height), sT++, mT.stopRenderLoop(), mT.runRenderLoop((() => {
          var TT;
          null === (TT = CT) || void 0 === TT || TT.render(mT.getDeltaTime()), RT.render()
        }))
      }
      isReady() {
        return !!uT
      }
      setCosmetic(TT, oT) {
        ZT(TT, oT)
      }
      playEmote(TT) {
        if (!CT) return;
        if (!TT) return void CT.stopAnimation(FT.e.Emote);
        const oT = (0, XT.e)((0, BT.g)(TT).animation);
        CT.startAnimation(oT, FT.e.Emote, 0, BT.c)
      }
      async untilDrawn(TT) {
        if (await UT(), "cape" === TT && vT) {
          const TT = vT.material,
            oT = null === TT || void 0 === TT ? void 0 : TT.diffuseTexture;
          oT && !oT.isReady() && (await new Promise((TT => {
            oT.onLoadObservable.addOnce((() => {
              TT()
            }))
          })), await UT())
        }
        OT[TT] && (await OT[TT], await UT()), await RT.whenReadyAsync(), await new Promise((TT => {
          RT.onAfterRenderObservable.addOnce((() => {
            TT()
          }))
        }))
      }
      resetCamera() {
        eT.inertialAlphaOffset = 0, eT.inertialBetaOffset = 0, eT.inertialRadiusOffset = 0, GT(wT.b[this.framing])
      }
      resize(TT, oT) {
        lT(TT, oT)
      }
      close() {
        this.closed || (this.closed = !0, sT--, 0 === sT && mT.stopRenderLoop())
      }
    }

    function GT(TT) {
      let {
        yaw: oT,
        pitch: IT,
        radius: iT,
        target: zT
      } = TT;
      eT.alpha = oT, eT.beta = IT, iT && (eT.radius = iT), zT && eT.target.set(zT[0], zT[1], zT[2])
    }

    function pT(TT, oT) {
      return TT.appendChild(JT), mT || function() {
        mT = new ST.c(JT, !0, {
          preserveDrawingBuffer: !0
        });
        const TT = (0, zT.i)();
        mT.lIT = TT.FK.engine.lIT, RT = new DT.d(mT), RT.clearColor = new KT.b(0, 0, 0, 0), RT.ambientColor = new KT.Color3(1, 1, 1), eT = new LT.c("jM", 0, 0, 1, xT.sc.Zero(), RT), eT.attachControl(JT, !0), eT.panningSensibility = 0, jT = (0, iT.u)("Player", RT, !0).then((oT => {
          uT = oT.meshApi, vT = oT.capeMesh, ET = TT.FK.iJ;
          const IT = 8.33;
          fT = (0, iT.l)("Player", IT, !0, !0), ET.setPosition(fT, 0, -8.33, 0);
          const zT = ET.getNamedNode(fT, "BodyMesh");
          ET.attachTransformNode(vT, fT, zT), ET.set(fT, "aOpacity", 1), ET.bJ(fT, "aOpacity", 1), CT = new gT.AnimatorState, CT.FL = TT, CT.thinInstMgr = ET, CT.WJ = fT, CT.BIT = ET.sIT(fT, 0), CT.modelLifeformType = "Player", CT.nodeNameAliases = (0, hT.e)("Player").nodeNameAliases;
          const kT = vT.GJ().boundingBox;
          vT.position.y = ((24 - kT.maximum.y + kT.minimum.y) / 2 - 1 / 32) / IT, vT.position.z = -1 / IT, vT.rotationQuaternion = null;
          const WT = Math.PI / 18,
            XT = kT.maximum.y / IT;
          vT.rotation.x = WT;
          const BT = Math.cos(WT),
            FT = Math.sin(WT);
          vT.position.y += XT * (1 - BT) + 0 * FT, vT.position.z -= XT * FT + 0 * (1 - BT);
          const ST = new MT.StandardMaterial("capeMaterial", vT.pC());
          vT.material = ST;
          const DT = new KT.Color3(1, 1, 1);
          ST.diffuseColor = new KT.Color3, ST.specularColor = new KT.Color3, ST.emissiveColor = new KT.Color3, ST.ambientColor = new KT.Color3, DT.scaleToRef(.43, ST.diffuseColor), DT.scaleToRef(1.75, ST.ambientColor), ST.freeze();
          const LT = new cT.d("light", new xT.sc(-.1, 1, -.3), RT);
          LT.diffuse = new KT.Color3(1, 1, 1), LT.specular = new KT.Color3(1, 1, 1), LT.groundColor = new KT.Color3(.5, .5, .5)
        }))
      }(), new tT(TT, oT)
    }
  },
  37777: (TT, oT, IT) => {
    IT.d(oT, {
      e: () => LT
    });
    var iT = IT(36040),
      zT = IT(36051),
      kT = IT(36280),
      WT = IT(36056),
      XT = IT(36047);

    function BT(TT) {
      return `\n\t\t\t\t${(0,XT.w)(TT,"mat2","rotate",[{name:"ang",type:"float"}],`\
      n\ t\ t\ t\ t\ t$ {
        (0, XT.D)(TT, "float", "s", "sin(ang)")
      }\
      n\ t\ t\ t\ t\ t$ {
        (0, XT.D)(TT, "float", "c", "cos(ang)")
      }\
      n\ t\ t\ t\ t\ treturn $ {
        (0, XT.l)(TT, "mat2", "c", "s", "-s", "c")
      };\
      n\ t\ t\ t\ t`)}\n\t\t\t`
    }

    function FT(TT, oT) {
      let IT = (0, XT.wb)(TT, "skele" + (oT - 1));
      for (let zT = oT - 2; zT >= 0; zT--) IT = (0, XT.ob)(TT, `boneIdx == ${zT}`, (0, XT.wb)(TT, `skele${zT}`), IT);
      const iT = "bone.yz + rotate(bone.x) * pivot - pivot";
      return `\n\t\t\t\t${(0,XT.D)(TT,"int","boneIdx",(0,XT.sb)(TT,"BLOXD_CAPE_MAX_Y - positionUpdated.y"))}\n\t\t\t\t${(0,XT.D)(TT,"vec3","bone",IT)}\n\t\t\t\t${(0,XT.D)(TT,"vec2","pivot",(0,XT.l)(TT,"vec2","0.0",`${(0,XT.Fb)(TT,"position")}.z`))}\n\t\t\t\t${(0,XT.Y)(TT)?`positionUpdated = vec3f(positionUpdated.x, positionUpdated.yz + (${iT}));`:`positionUpdated.yz += ${iT};`}\n\t\t`
    }

    function ST(TT) {
      return `\n\t\t\t\t#ifdef NORMAL\n\t\t\t\tnormalUpdated = ${(0,XT.l)(TT,"vec3","normalUpdated.x","rotate(bone.x) * normalUpdated.yz")};\n\t\t\t\t#endif\n\t\t`
    }
    const DT = {
        x: 0,
        y: 0,
        z: 0,
        joT(TT, oT) {
          return this.x = TT[oT], this.y = TT[oT + 1], this.z = TT[oT + 2], this
        }
      },
      LT = {
        name: "Cape",
        className: "CapeMaterialPlugin",
        priority: 200,
        defines: (TT, oT) => ({
          ...(0, iT.d)("CAPE"),
          BLOXD_CAPE_BONES: `${TT}`,
          BLOXD_CAPE_MAX_Y: (0, zT.nb)(oT)
        }),
        getUniforms(TT) {
          return (0, kT.d)(function(TT) {
            const oT = [];
            for (let IT = 0; IT < TT; IT++) oT.push({
              name: `skele${IT}`,
              type: "highp vec3"
            });
            return oT
          }(this.skeleLen), "vertex", TT)
        },
        bind(TT) {
          for (let oT = 0; oT < this.skeleLen; oT++) TT.updateVector3(`skele${oT}`, DT.joT(this.skele, 3 * oT))
        },
        uniformsVersion() {
          return this.bonesVersion
        },
        getCustomCode(TT, oT) {
          return "vertex" !== TT ? null : {
            CUSTOM_VERTEX_DEFINITIONS: BT(oT),
            CUSTOM_VERTEX_UPDATE_POSITION: FT(oT, this.skeleLen),
            CUSTOM_VERTEX_UPDATE_NORMAL: ST(oT)
          }
        }
      };
    (0, WT.n)(LT)
  },
  37671: (TT, oT, IT) => {
    IT.d(oT, {
      e: () => ST,
      h: () => DT
    });
    var iT = IT(36040),
      zT = IT(36280),
      kT = IT(36047),
      WT = IT(36056);
    const XT = "bloxdTextLodBias",
      BT = [{
        name: XT,
        type: "float"
      }],
      FT = "bloxdTextSample",
      ST = {
        planes: -.5,
        boards: -.5
      },
      DT = {
        name: "TextSampler",
        className: "TextSamplerMaterialPlugin",
        priority: 60,
        defines: () => (0, iT.d)("TEXT_SAMPLER"),
        getUniforms: TT => (0, zT.d)(BT, "fragment", TT),
        bind(TT) {
          TT.updateFloat(XT, this.lodBias)
        },
        uniformsVersion: () => 0,
        getCustomCode(TT, oT) {
          if ("fragment" !== TT) return null;
          const IT = (0, kT.I)(oT, `vec4 ${FT}(sampler2D s, vec2 uv, float bias)`, `fn ${FT}(t: texture_2d<f32>, ts: sampler, uv: vec2f, bias: f32) -> vec4f`),
            iT = (0, kT.I)(oT, "texture2D(s, uv, bias)", "textureSampleBias(t, ts, uv, bias)"),
            zT = `${(0,kT.R)(oT,"vDiffuseUV")} + uvOffset`,
            WT = (0, kT.I)(oT, `${FT}(diffuseSampler, ${zT}, ${(0,kT.wb)(oT,XT)})`, `${FT}(diffuseSampler, diffuseSamplerSampler, ${zT}, ${(0,kT.wb)(oT,XT)})`);
          return {
            CUSTOM_FRAGMENT_DEFINITIONS: `\n\t\t\t\t${IT} {\n\t\t\t\t\t${(0,kT.D)(oT,"vec4","texel",iT)}\n\t\t\t\t\t// 8-bit premultiplied rounding can put the quotient just over 1; only alpha 0 hits the floor,\n\t\t\t\t\t// where the colour is 0 anyway.\n\t\t\t\t\treturn ${(0,kT.l)(oT,"vec4",`clamp(texel.rgb / max(texel.a, 1.0 / 255.0), ${(0,kT.l)(oT,"vec3","0.0")}, ${(0,kT.l)(oT,"vec3","1.0")})`,"texel.a")};\n\t\t\t\t}\n\t\t\t`,
            [(0, kT.F)(oT)]: `baseColor = ${WT};`
          }
        }
      };
    (0, WT.n)(DT)
  },
  8248: (TT, oT, IT) => {
    IT.d(oT, {
      d: () => ST,
      h: () => XT,
      j: () => BT
    });
    var iT = IT(2026),
      zT = IT(1214),
      kT = IT(2029);
    const WT = ",";

    function XT(TT) {
      if (!TT) return [];
      const oT = new Set,
        IT = [];
      for (const iT of TT.split(WT)) {
        const TT = iT.trim();
        if ((0, kT.h)(TT) && !oT.has(TT) && (oT.add(TT), IT.push(TT), IT.length >= zT.k)) break
      }
      return IT
    }

    function BT(TT) {
      const oT = new Set,
        IT = [];
      for (const iT of TT)
        if ((0, kT.h)(iT) && !oT.has(iT) && (oT.add(iT), IT.push(iT), IT.length >= zT.k)) break;
      return IT.join(WT)
    }

    function FT() {
      return BT(kT.d)
    }

    function ST(TT) {
      var oT;
      return "emote" === TT ? FT() : null !== (oT = DT[TT][0]) && void 0 !== oT ? oT : LT[TT]
    }
    const DT = zT.v.reduce(((TT, oT) => {
        const IT = [];
        for (const kT in iT.c[oT]) {
          var zT;
          "default" === (null === (zT = (0, iT.g)(oT, kT)) || void 0 === zT ? void 0 : zT.cosmeticPack) && IT.push(kT)
        }
        return TT[oT] = IT, TT
      }), {}),
      LT = zT.v.reduce(((TT, oT) => (TT[oT] = Object.keys(iT.c[oT])[0], TT)), {})
  },
  37779: (TT, oT, IT) => {
    var iT = {
      "./cape_cow_cream.png": 27238,
      "./cape_cow_normal.png": 27240,
      "./cape_creator_level1.png": 27243,
      "./cape_creator_level2.png": 27250,
      "./cape_creator_level3.png": 27259,
      "./cape_none.png": 27264,
      "./cape_pig.png": 27271,
      "./cape_sheep.png": 27277,
      "./cape_super.png": 27285,
      "./cape_super_inverted.png": 27289,
      "./cape_youtuber.png": 27292
    };

    function zT(TT) {
      var oT = kT(TT);
      return IT(oT)
    }

    function kT(TT) {
      if (!IT.o(iT, TT)) {
        var oT = new Error("Cannot find module '" + TT + "'");
        throw oT.code = "MODULE_NOT_FOUND", oT
      }
      return iT[TT]
    }
    zT.keys = function() {
      return Object.keys(iT)
    }, zT.resolve = kT, TT.exports = zT, zT.id = 37779
  }
};
Object.freeze(modules);
for (const TT in modules) Object.freeze(modules[TT]);