export const id = 154;
export const ids = [154];
export const modules = {
  40583: (QQ, FQ, wQ) => {
    wQ.r(FQ), wQ.d(FQ, {
      openCharacterPreview: () => nQ
    });
    var LQ = wQ(37639),
      qQ = wQ(2676),
      oQ = wQ(600),
      DQ = wQ(36768),
      kQ = wQ(2153),
      vQ = wQ(36753),
      mQ = wQ(39211),
      uQ = wQ(39491),
      HQ = wQ(40496),
      bQ = wQ(36688),
      YQ = wQ(39678),
      xQ = wQ(36870),
      AQ = wQ(39692),
      tQ = wQ(40539),
      eQ = wQ(36679),
      MQ = wQ(1237),
      GQ = wQ(2148),
      pQ = wQ(36836),
      cQ = wQ(36924);
    class CQ {
      constructor(QQ, FQ) {
        this.pose = QQ, this.nodes = void 0, this.nodes = QQ.boneNames.map((QQ => FQ.get(QQ)))
      }
      write(QQ) {
        this.pose.pose(QQ);
        const {
          rotations: FQ
        } = this.pose;
        for (let wQ = 0; wQ < this.nodes.length; wQ++) {
          const QQ = 4 * wQ;
          this.nodes[wQ].rotationQuaternion.set(FQ[QQ], FQ[QQ + 1], FQ[QQ + 2], FQ[QQ + 3])
        }
      }
    }

    function SQ(QQ) {
      QQ.unfreezeWorldMatrix();
      for (const FQ of QQ.getChildren()) SQ(FQ)
    }

    function iQ(QQ, FQ) {
      QQ.isVisible = FQ;
      for (const wQ of QQ.getChildMeshes()) wQ.isVisible = FQ
    }
    class WQ {
      constructor(QQ, FQ, wQ) {
        this.lA = QQ, this.thinInstMgr = FQ, this.XN = wQ, this.modelCache = {}, this.attachmentsByType = {}, this.shownBones = [], this.cosmeticNames = {}
      }
      loadModel(QQ, FQ, wQ) {
        const LQ = (0, pQ.h)(QQ, FQ);
        return LQ in this.modelCache || (this.modelCache[LQ] = (async () => {
          try {
            const LQ = await (0, pQ.l)(QQ, this.lA),
              qQ = new Map;
            for (const QQ of LQ.getNodes()) qQ.set(QQ.name, QQ);
            const oQ = (0, pQ.d)(null !== FQ && void 0 !== FQ ? FQ : QQ, this.lA);
            (0, pQ.n)(LQ, oQ, {
              keepTransforms: void 0 !== wQ,
              onProcessedMesh: QQ => {
                (0, pQ.r)(QQ), this.lA.sLQ(QQ, !1), QQ.isVisible = !1
              }
            });
            for (const QQ of LQ.rootNodes) SQ(QQ);
            const DQ = void 0 === wQ ? null : (0, cQ.e)(wQ, (QQ => {
              var FQ, wQ;
              return null !== (FQ = null === (wQ = qQ.get(QQ)) || void 0 === wQ ? void 0 : wQ.rotationQuaternion) && void 0 !== FQ ? FQ : null
            }));
            return {
              nodesByName: qQ,
              bones: null === DQ ? null : new CQ(DQ, qQ)
            }
          } catch (qQ) {
            throw delete this.modelCache[LQ], console.error(`Failed to load preview attachment ${LQ}:`, qQ), qQ
          }
        })()), this.modelCache[LQ]
      }
      async update(QQ, FQ) {
        var wQ;
        const {
          thinInstMgr: LQ,
          XN: qQ
        } = this;
        this.cosmeticNames[QQ] = FQ;
        const oQ = this.attachmentsByType[QQ];
        if (oQ)
          for (const {
              mesh: kQ,
              destNode: vQ,
              bones: mQ
            }
            of oQ) {
            null !== mQ && (0, MQ.tb)(this.shownBones, mQ), iQ(kQ, !1);
            const QQ = LQ.getNamedNode(qQ, vQ);
            LQ.detachTransformNodeIfFound(kQ, qQ, QQ)
          }
        this.attachmentsByType[QQ] = [];
        const DQ = (0, GQ.i)(QQ, FQ);
        if (null !== DQ && void 0 !== DQ && null !== (wQ = DQ.attachments) && void 0 !== wQ && wQ.length)
          for (const kQ of DQ.attachments) {
            let wQ;
            try {
              wQ = await this.loadModel(kQ.modelGlb, kQ.texture, kQ.animation)
            } catch {
              continue
            }
            if (this.cosmeticNames[QQ] !== FQ) return;
            const oQ = wQ.nodesByName.get(kQ.modelNode);
            if (!oQ) {
              console.error(`Preview attachment node ${kQ.modelNode} not found in ${kQ.modelGlb}`);
              continue
            }
            iQ(oQ, !0), (0, pQ.x)(oQ, kQ.overlayColour);
            const DQ = LQ.getNamedNode(qQ, kQ.destNode);
            LQ.attachTransformNode(oQ, qQ, DQ), this.attachmentsByType[QQ].push({
              mesh: oQ,
              destNode: kQ.destNode,
              bones: wQ.bones
            }), null !== wQ.bones && this.shownBones.push(wQ.bones)
          }
      }
      writePoses(QQ) {
        for (const FQ of this.shownBones) FQ.write(QQ)
      }
    }
    var RQ = wQ(36777),
      OQ = (wQ(40526), wQ(39906), wQ(40532), wQ(9142));
    let sQ, rQ, IQ, UQ, NQ, TQ, KQ, zQ, lQ, jQ;
    const aQ = document.createElement("canvas");
    async function XQ() {
      await new Promise((QQ => {
        setTimeout((() => {
          QQ()
        }), 100)
      }))
    }
    aQ.classList.add("CharCustomisationPreviewCanvas");
    const fQ = {};

    function VQ(QQ, FQ) {
      aQ.width = QQ, aQ.height = FQ, sQ.resize()
    }
    let hQ = 0;
    class JQ {
      constructor(QQ, FQ) {
        this.framing = FQ, this.ready = jQ, this.dev = {
          canvas: () => aQ,
          isolateHead(QQ) {
            const FQ = TQ.getNodeNames(KQ);
            for (let wQ = 0; wQ < FQ.length; wQ++) "HeadMesh" !== FQ[wQ] && "__root__" !== FQ[wQ] && "TorsoNode" !== FQ[wQ] && TQ.setNodeEnabled(KQ, wQ, !1);
            if (QQ) {
              const QQ = TQ.getNamedNode(KQ, "HeadMesh");
              TQ.setNodeDisableColorWrite(KQ, QQ, !0, (QQ => {
                const FQ = new AQ.StandardMaterial(`${QQ.name}_depthOnly`, QQ.iN());
                return FQ.disableColorWrite = !0, FQ
              }))
            }
            TQ.setPosition(KQ, 0, -12, 0)
          }
        }, this.closed = !1, this.resetCamera();
        const wQ = QQ.getBoundingClientRect();
        VQ(wQ.width, wQ.height), hQ++, sQ.stopRenderLoop(), sQ.runRenderLoop((() => {
          var QQ, FQ;
          null === (QQ = zQ) || void 0 === QQ || QQ.render(sQ.getDeltaTime()), null === (FQ = lQ) || void 0 === FQ || FQ.writePoses(performance.now() / 1e3), IQ.render()
        }))
      }
      isReady() {
        return !!UQ
      }
      setCosmetic(QQ, FQ) {
        ! function(QQ, FQ) {
          if (!UQ) return;
          const DQ = (0, qQ.d)();
          DQ.pI(!1), LQ.d.Player.meshApi.updatePlayerCosmetic(DQ.WK, KQ, QQ, FQ, !0), "cape" === QQ && (FQ === oQ.h ? NQ.Qr(!1) : (NQ.Qr(!0), NQ.material.diffuseTexture = new tQ.b(wQ(38333)(`./cape_${FQ}.png`), NQ.iN(), {
            invertY: !1,
            samplingMode: tQ.b.NEAREST_NEAREST_MIPLINEAR
          })));
          fQ[QQ] = lQ.update(QQ, FQ)
        }(QQ, FQ)
      }
      playEmote(QQ) {
        if (!zQ) return;
        if (!QQ) return void zQ.stopAnimation(vQ.h.Emote);
        const FQ = (0, DQ.h)((0, kQ.f)(QQ).animation);
        zQ.startAnimation(FQ, vQ.h.Emote, 0, kQ.c)
      }
      async untilDrawn(QQ) {
        if (await XQ(), "cape" === QQ && NQ) {
          const QQ = NQ.material,
            FQ = null === QQ || void 0 === QQ ? void 0 : QQ.diffuseTexture;
          FQ && !FQ.isReady() && (await new Promise((QQ => {
            FQ.onLoadObservable.addOnce((() => {
              QQ()
            }))
          })), await XQ())
        }
        fQ[QQ] && (await fQ[QQ], await XQ()), await IQ.whenReadyAsync(), await new Promise((QQ => {
          IQ.onAfterRenderObservable.addOnce((() => {
            QQ()
          }))
        }))
      }
      setOrbit(QQ) {
        EQ(QQ)
      }
      resetCamera() {
        rQ.inertialAlphaOffset = 0, rQ.inertialBetaOffset = 0, rQ.inertialRadiusOffset = 0, EQ(OQ.b[this.framing])
      }
      resize(QQ, FQ) {
        VQ(QQ, FQ)
      }
      close() {
        this.closed || (this.closed = !0, hQ--, 0 === hQ && sQ.stopRenderLoop())
      }
    }

    function EQ(QQ) {
      let {
        yaw: FQ,
        pitch: wQ,
        radius: LQ,
        target: qQ
      } = QQ;
      rQ.alpha = FQ, rQ.beta = wQ, LQ && (rQ.radius = LQ), qQ && rQ.target.set(qQ[0], qQ[1], qQ[2])
    }

    function nQ(QQ, FQ) {
      return QQ.appendChild(aQ), sQ || function() {
        sQ = new mQ.b(aQ, !0, {
          preserveDrawingBuffer: !0
        });
        const QQ = (0, qQ.d)();
        sQ.SLQ = QQ.Zx.engine.SLQ, IQ = new uQ.d(sQ), IQ.clearColor = new xQ.b(0, 0, 0, 0), IQ.ambientColor = new xQ.Color3(1, 1, 1), rQ = new HQ.b("Tt", 0, 0, 1, bQ.Ox.Zero(), IQ), rQ.attachControl(aQ, !0), rQ.panningSensibility = 0, jQ = (0, LQ.w)("Player", IQ, !0).then((FQ => {
          UQ = FQ.meshApi, NQ = FQ.capeMesh, TQ = QQ.Zx.aN;
          const wQ = 8.33;
          KQ = (0, LQ.m)("Player", wQ, !0, !0), TQ.setPosition(KQ, 0, -8.33, 0);
          const qQ = TQ.getNamedNode(KQ, "BodyMesh");
          TQ.attachTransformNode(NQ, KQ, qQ), TQ.set(KQ, "aOpacity", 1), TQ.rK(KQ, "aOpacity", 1), lQ = new WQ(IQ, TQ, KQ), zQ = new eQ.AnimatorState, zQ.dH = QQ, zQ.thinInstMgr = TQ, zQ.XN = KQ, zQ.nwQ = TQ.iLQ(KQ, 0), zQ.modelLifeformType = "Player", zQ.nodeNameAliases = (0, RQ.b)("Player").nodeNameAliases;
          const oQ = NQ.sK().boundingBox;
          NQ.position.y = ((24 - oQ.maximum.y + oQ.minimum.y) / 2 - 1 / 32) / wQ, NQ.position.z = -1 / wQ, NQ.rotationQuaternion = null;
          const DQ = Math.PI / 18,
            kQ = oQ.maximum.y / wQ;
          NQ.rotation.x = DQ;
          const vQ = Math.cos(DQ),
            mQ = Math.sin(DQ);
          NQ.position.y += kQ * (1 - vQ) + 0 * mQ, NQ.position.z -= kQ * mQ + 0 * (1 - vQ);
          const uQ = new AQ.StandardMaterial("capeMaterial", NQ.iN());
          NQ.material = uQ;
          const HQ = new xQ.Color3(1, 1, 1);
          uQ.diffuseColor = new xQ.Color3, uQ.specularColor = new xQ.Color3, uQ.emissiveColor = new xQ.Color3, uQ.ambientColor = new xQ.Color3, HQ.scaleToRef(.43, uQ.diffuseColor), HQ.scaleToRef(1.75, uQ.ambientColor), uQ.freeze();
          const tQ = new YQ.b("light", new bQ.Ox(-.1, 1, -.3), IQ);
          tQ.diffuse = new xQ.Color3(1, 1, 1), tQ.specular = new xQ.Color3(1, 1, 1), tQ.groundColor = new xQ.Color3(.5, .5, .5)
        }))
      }(), new JQ(QQ, FQ)
    }
  },
  38328: (QQ, FQ, wQ) => {
    wQ.d(FQ, {
      e: () => bQ
    });
    var LQ = wQ(36786),
      qQ = wQ(36797),
      oQ = wQ(37032),
      DQ = wQ(36803),
      kQ = wQ(36795);

    function vQ(QQ) {
      return `\n\t\t\t\t${(0,kQ.E)(QQ,"mat2","rotate",[{name:"ang",type:"float"}],`\
      n\ t\ t\ t\ t\ t$ {
        (0, kQ.I)(QQ, "float", "s", "sin(ang)")
      }\
      n\ t\ t\ t\ t\ t$ {
        (0, kQ.I)(QQ, "float", "c", "cos(ang)")
      }\
      n\ t\ t\ t\ t\ treturn $ {
        (0, kQ.q)(QQ, "mat2", "c", "s", "-s", "c")
      };\
      n\ t\ t\ t\ t`)}\n\t\t\t`
    }

    function mQ(QQ, FQ) {
      let wQ = (0, kQ.Pb)(QQ, "skele" + (FQ - 1));
      for (let qQ = FQ - 2; qQ >= 0; qQ--) wQ = (0, kQ.Gb)(QQ, `boneIdx == ${qQ}`, (0, kQ.Pb)(QQ, `skele${qQ}`), wQ);
      const LQ = "bone.yz + rotate(bone.x) * pivot - pivot";
      return `\n\t\t\t\t${(0,kQ.I)(QQ,"int","boneIdx",(0,kQ.Kb)(QQ,"BLOXD_CAPE_MAX_Y - positionUpdated.y"))}\n\t\t\t\t${(0,kQ.I)(QQ,"vec3","bone",wQ)}\n\t\t\t\t${(0,kQ.I)(QQ,"vec2","pivot",(0,kQ.q)(QQ,"vec2","0.0",`${(0,kQ.Vb)(QQ,"position")}.z`))}\n\t\t\t\t${(0,kQ.ib)(QQ)?`positionUpdated = vec3f(positionUpdated.x, positionUpdated.yz + (${LQ}));`:`positionUpdated.yz += ${LQ};`}\n\t\t`
    }

    function uQ(QQ) {
      return `\n\t\t\t\t#ifdef NORMAL\n\t\t\t\tnormalUpdated = ${(0,kQ.q)(QQ,"vec3","normalUpdated.x","rotate(bone.x) * normalUpdated.yz")};\n\t\t\t\t#endif\n\t\t`
    }
    const HQ = {
        x: 0,
        y: 0,
        z: 0,
        bwQ(QQ, FQ) {
          return this.x = QQ[FQ], this.y = QQ[FQ + 1], this.z = QQ[FQ + 2], this
        }
      },
      bQ = {
        name: "Cape",
        className: "CapeMaterialPlugin",
        priority: 200,
        defines: (QQ, FQ) => ({
          ...(0, LQ.e)("CAPE"),
          BLOXD_CAPE_BONES: `${QQ}`,
          BLOXD_CAPE_MAX_Y: (0, qQ.rb)(FQ)
        }),
        getUniforms(QQ) {
          return (0, oQ.e)(function(QQ) {
            const FQ = [];
            for (let wQ = 0; wQ < QQ; wQ++) FQ.push({
              name: `skele${wQ}`,
              type: "highp vec3"
            });
            return FQ
          }(this.skeleLen), "vertex", QQ)
        },
        bind(QQ) {
          for (let FQ = 0; FQ < this.skeleLen; FQ++) QQ.updateVector3(`skele${FQ}`, HQ.bwQ(this.skele, 3 * FQ))
        },
        uniformsVersion() {
          return this.bonesVersion
        },
        getCustomCode(QQ, FQ) {
          return "vertex" !== QQ ? null : {
            CUSTOM_VERTEX_DEFINITIONS: vQ(FQ),
            CUSTOM_VERTEX_UPDATE_POSITION: mQ(FQ, this.skeleLen),
            CUSTOM_VERTEX_UPDATE_NORMAL: uQ(FQ)
          }
        }
      };
    (0, DQ.p)(bQ)
  },
  38220: (QQ, FQ, wQ) => {
    wQ.d(FQ, {
      d: () => uQ,
      e: () => HQ
    });
    var LQ = wQ(36786),
      qQ = wQ(37032),
      oQ = wQ(36795),
      DQ = wQ(36803);
    const kQ = "bloxdTextLodBias",
      vQ = [{
        name: kQ,
        type: "float"
      }],
      mQ = "bloxdTextSample",
      uQ = {
        planes: -.5,
        boards: -.5
      },
      HQ = {
        name: "TextSampler",
        className: "TextSamplerMaterialPlugin",
        priority: 60,
        defines: () => (0, LQ.e)("TEXT_SAMPLER"),
        getUniforms: QQ => (0, qQ.e)(vQ, "fragment", QQ),
        bind(QQ) {
          QQ.updateFloat(kQ, this.lodBias)
        },
        uniformsVersion: () => 0,
        getCustomCode(QQ, FQ) {
          if ("fragment" !== QQ) return null;
          const wQ = (0, oQ.T)(FQ, `vec4 ${mQ}(sampler2D s, vec2 uv, float bias)`, `fn ${mQ}(t: texture_2d<f32>, ts: sampler, uv: vec2f, bias: f32) -> vec4f`),
            LQ = (0, oQ.T)(FQ, "texture2D(s, uv, bias)", "textureSampleBias(t, ts, uv, bias)"),
            qQ = `${(0,oQ.bb)(FQ,"vDiffuseUV")} + uvOffset`,
            DQ = (0, oQ.T)(FQ, `${mQ}(diffuseSampler, ${qQ}, ${(0,oQ.Pb)(FQ,kQ)})`, `${mQ}(diffuseSampler, diffuseSamplerSampler, ${qQ}, ${(0,oQ.Pb)(FQ,kQ)})`);
          return {
            CUSTOM_FRAGMENT_DEFINITIONS: `\n\t\t\t\t${wQ} {\n\t\t\t\t\t${(0,oQ.I)(FQ,"vec4","texel",LQ)}\n\t\t\t\t\t// 8-bit premultiplied rounding can put the quotient just over 1; only alpha 0 hits the floor,\n\t\t\t\t\t// where the colour is 0 anyway.\n\t\t\t\t\treturn ${(0,oQ.q)(FQ,"vec4",`clamp(texel.rgb / max(texel.a, 1.0 / 255.0), ${(0,oQ.q)(FQ,"vec3","0.0")}, ${(0,oQ.q)(FQ,"vec3","1.0")})`,"texel.a")};\n\t\t\t\t}\n\t\t\t`,
            [(0, oQ.L)(FQ)]: `baseColor = ${DQ};`
          }
        }
      };
    (0, DQ.p)(HQ)
  },
  40532: (QQ, FQ, wQ) => {
    wQ.r(FQ), wQ.d(FQ, {
      CapeMaterialPlugin: () => pQ,
      HueTintMaterialPlugin: () => cQ,
      LifeformMaterialPlugin: () => CQ,
      OverlayMaterialPlugin: () => SQ
    });
    var LQ = wQ(40535),
      qQ = wQ(37557);
    class oQ extends((0, LQ.h)(qQ.c)) {}(0, LQ.j)(qQ.c, oQ);
    var DQ = wQ(36782);
    class kQ extends((0, LQ.h)(DQ.f)) {}(0, LQ.j)(DQ.f, kQ);
    var vQ = wQ(37401);
    class mQ extends((0, LQ.h)(vQ.e)) {}(0, LQ.j)(vQ.e, mQ);
    var uQ = wQ(37019),
      HQ = wQ(39692),
      bQ = wQ(37016);
    class YQ extends((0, LQ.h)(bQ.h)) {
      constructor(QQ, FQ, wQ) {
        super(QQ, FQ, wQ), (0, uQ.e)(QQ)
      }
      dispose(QQ) {
        (0, uQ.g)(this._material), super.dispose(QQ)
      }
    }(0, LQ.j)(bQ.h, YQ), (0, bQ.j)({
      disableUnusedSpecularTerm: LQ.d,
      isLightingDisabled: QQ => QQ instanceof HQ.StandardMaterial && QQ.disableLighting
    });
    var xQ = wQ(38220);
    class AQ extends((0, LQ.h)(xQ.e)) {}(0, LQ.j)(xQ.e, AQ);
    var tQ = wQ(38328),
      eQ = wQ(36881),
      MQ = wQ(37678),
      GQ = wQ(36831);
    class pQ extends((0, LQ.h)(tQ.e)) {}(0, LQ.j)(tQ.e, pQ);
    class cQ extends((0, LQ.h)(eQ.d)) {}(0, LQ.j)(eQ.d, cQ);
    class CQ extends((0, LQ.h)(MQ.o)) {}(0, LQ.j)(MQ.o, CQ);
    class SQ extends((0, LQ.h)(GQ.b)) {}(0, LQ.j)(GQ.b, SQ)
  },
  40535: (QQ, FQ, wQ) => {
    wQ.d(FQ, {
      d: () => XQ,
      h: () => MQ,
      j: () => nQ
    });
    var LQ = wQ(39692),
      qQ = wQ(40537),
      oQ = wQ(40575),
      DQ = wQ(40539),
      kQ = wQ(37368),
      vQ = wQ(37381),
      mQ = wQ(37389),
      uQ = wQ(37392),
      HQ = wQ(36820),
      bQ = wQ(36822),
      YQ = wQ(40544),
      xQ = wQ(36803),
      AQ = wQ(36809),
      tQ = wQ(36795);

    function eQ(QQ, FQ) {
      return Object.assign((function(QQ, wQ, LQ, qQ) {
        return FQ(this.featureState, QQ, wQ, LQ, qQ)
      }), {
        gY: QQ
      })
    }

    function MQ(QQ) {
      const FQ = class extends YQ.d {
          constructor(FQ, wQ) {
            const LQ = (0, AQ.jb)(FQ),
              qQ = LQ && (0, AQ.z)(LQ, QQ.name);
            for (var oQ = arguments.length, DQ = new Array(oQ > 2 ? oQ - 2 : 0), kQ = 2; kQ < oQ; kQ++) DQ[kQ - 2] = arguments[kQ];
            super(FQ, QQ.name, QQ.priority, qQ ? qQ.defines : QQ.defines(...DQ), !1), this.featureState = void 0, this.featureState = wQ, this._pluginManager._addPlugin(this), this._enable(!0), (0, AQ.C)(this._material, QQ, this.featureState, this._pluginDefineNames)
          }
          getClassName() {
            return QQ.className
          }
          isCompatible(QQ) {
            return QQ === tQ.d.GLSL || QQ === tQ.d.WGSL
          }
        },
        wQ = (0, xQ.j)(QQ);
      for (const [LQ, qQ] of Object.entries(xQ.e)) {
        const oQ = QQ[LQ];
        if (oQ) {
          const QQ = wQ[LQ];
          Object.defineProperty(FQ.prototype, qQ, {
            value: eQ(oQ, QQ),
            writable: !0,
            configurable: !0
          })
        }
      }
      return FQ
    }
    class GQ extends(MQ(kQ.e)) {}
    var pQ = wQ(39211),
      cQ = wQ(40551);
    const CQ = new WeakMap;

    function SQ(QQ, FQ, wQ) {
      let LQ = CQ.get(wQ);
      LQ || (LQ = new Map, CQ.set(wQ, LQ));
      const {
        url: qQ
      } = QQ;
      let oQ = LQ.get(qQ);
      return oQ || (oQ = async function(QQ, FQ, wQ) {
        const {
          width: LQ,
          height: qQ
        } = QQ.getSize(), oQ = Math.round(qQ / LQ), kQ = FQ && FQ.byteLength === LQ * LQ * oQ * 4 ? FQ : QQ._readPixelsSync();
        return new cQ.e(kQ, LQ, LQ, oQ, pQ.b.TEXTUREFORMAT_RGBA, wQ, !0, !1, DQ.b.NEAREST_NEAREST_MIPLINEAR)
      }(QQ, FQ, wQ), LQ.set(qQ, oQ), oQ.catch((() => {
        LQ.delete(qQ)
      }))), oQ
    }
    var iQ = wQ(37399);
    class WQ extends(MQ(vQ.l)) {
      constructor(QQ, FQ) {
        super(QQ, FQ), FQ.textures.forEach(((QQ, FQ) => {
          QQ.mirror.onLoadObservable.add((QQ => {
            this.setTextureArrayData(QQ, FQ).catch((QQ => {
              console.error(`Failed to build texture array for atlas ${FQ}`, QQ)
            }))
          }))
        })), (0, iQ.m)(FQ, QQ.shaderLanguage)
      }
      async setTextureArrayData(QQ, FQ) {
        var wQ, LQ;
        const qQ = this.featureState,
          {
            width: oQ,
            height: DQ
          } = QQ.getSize(),
          kQ = qQ.useWebGL2 ? await SQ(QQ, null !== (wQ = null === (LQ = qQ.sources.pixels) || void 0 === LQ ? void 0 : LQ[FQ]) && void 0 !== wQ ? wQ : null, this._material.iN()) : null;
        (0, iQ.e)(this._material, qQ, FQ, kQ, oQ, Math.round(DQ / oQ), this._material.shaderLanguage)
      }
    }
    var RQ = wQ(40554),
      OQ = wQ(39731),
      sQ = wQ(36688),
      rQ = wQ(40563),
      IQ = wQ(39835),
      UQ = wQ(39725),
      NQ = wQ(40518),
      TQ = wQ(37152),
      KQ = wQ(40571);
    class zQ extends RQ.c {
      getData() {
        return null
      }
      _rebuild() {}
      restore() {
        super._rebuild()
      }
    }
    const lQ = {
      Mesh: rQ.c,
      TransformNode: NQ.e,
      Dx: RQ.c,
      VertexBuffer: RQ.d,
      BoundingInfo: OQ.d,
      Ox: sQ.Ox,
      ArenaBuffer: zQ,
      SubMesh: UQ.c,
      VertexData: IQ.c,
      MirroredGeometry: KQ.e,
      meshFromArrays: KQ.i,
      plainMeshFromArrays: KQ.k
    };
    (0, TQ.d)(lQ);
    var jQ = wQ(37019);
    class aQ extends(MQ(uQ.h)) {
      constructor(QQ, FQ) {
        if (super(QQ, FQ), QQ instanceof LQ.StandardMaterial && FQ.dirLightCount > 0) {
          const FQ = QQ,
            wQ = FQ._blockDirtyMechanism;
          FQ._blockDirtyMechanism = !0, QQ.disableLighting = !0, FQ._blockDirtyMechanism = wQ;
          const LQ = (0, AQ.jb)(QQ);
          LQ && (LQ.disableLighting = !0, (0, AQ.fb)(LQ))
        }(0, jQ.e)(QQ)
      }
      dispose(QQ) {
        (0, jQ.g)(this._material), super.dispose(QQ)
      }
    }

    function XQ(QQ, FQ) {
      if (!(FQ instanceof LQ.StandardMaterial) || FQ.specularTexture) return;
      const {
        r: wQ,
        g: qQ,
        b: oQ
      } = FQ.specularColor;
      0 === wQ && 0 === qQ && 0 === oQ && (QQ.SPECULARTERM = !1)
    }(0, uQ.g)({
      disableUnusedSpecularTerm: XQ
    });
    var fQ = wQ(36897),
      VQ = wQ(37158);
    const hQ = new RegExp(`^#define ${mQ.c}\\s*$`, "m");
    class JQ extends(MQ(mQ.j)) {
      constructor(QQ, FQ) {
        super(QQ, FQ), this.kx = !1, FQ.ditherOnlyWhileFading && (VQ.f.add(QQ), this.prewarmDitherTwins(QQ))
      }
      prewarmDitherTwins(QQ) {
        const FQ = new WeakSet;
        QQ.onEffectCreatedObservable.add((wQ => {
          let {
            effect: LQ,
            subMesh: qQ
          } = wQ;
          if (this.featureState.prewarmingDither || FQ.has(LQ)) return;
          FQ.add(LQ);
          const oQ = null === qQ || void 0 === qQ ? void 0 : qQ.getMesh();
          oQ && !hQ.test(LQ.defines) && QQ.iN().onAfterRenderObservable.addOnce((() => {
            this.prewarmDither(oQ) || FQ.delete(LQ)
          }))
        }))
      }
      prewarmDither(QQ) {
        if (this.kx || QQ.vW()) return !1;
        const FQ = new UQ.c(0, 0, 0, 0, 0, QQ, void 0, !1, !1);
        this.featureState.prewarmingDither = !0;
        try {
          this._material.isReadyForSubMesh(QQ, FQ)
        } finally {
          this.featureState.prewarmingDither = !1
        }
        return null !== FQ.effect
      }
      dispose(QQ) {
        this.kx = !0, super.dispose(QQ)
      }
    }
    const EQ = new Map;

    function nQ(QQ, FQ) {
      EQ.set(QQ, FQ)
    }
    nQ(kQ.e, GQ), nQ(vQ.l, WQ), nQ(mQ.j, JQ), nQ(uQ.h, aQ), (0, HQ.d)({
      create: (QQ, FQ) => {
        const wQ = new LQ.StandardMaterial(QQ.name, FQ);
        return (0, fQ.p)(QQ, wQ), wQ.detailMap._pluginDefineNames
      },
      write: (QQ, FQ, wQ) => {
        (0, fQ.S)(QQ.mirror, FQ, wQ)
      },
      addFeature: (QQ, FQ, wQ) => {
        const LQ = EQ.get(FQ.feature);
        if (!LQ) throw new Error(`${FQ.feature.name} has no plugin class (registerPluginClass)`);
        new LQ(QQ.mirror, FQ.state, ...wQ)
      },
      texture: (QQ, FQ, wQ) => {
        let {
          url: LQ,
          noMipmap: qQ,
          invertY: oQ,
          samplingMode: kQ,
          data: vQ,
          sets: mQ
        } = wQ;
        if (!vQ) {
          const wQ = new DQ.b(LQ, FQ, qQ, oQ, kQ);
          return Object.assign(wQ, mQ), void(0, bQ.C)(QQ, wQ)
        }
        const uQ = {},
          HQ = new Promise(((QQ, FQ) => {
            uQ.onLoad = QQ, uQ.onError = (QQ, wQ) => {
              FQ(new Error(`${vQ.context}: ${(null===wQ||void 0===wQ?void 0:wQ.message)||QQ||"Failed to load texture"}`))
            }
          })),
          {
            mimeType: YQ,
            bytes: xQ,
            label: AQ
          } = vQ,
          tQ = {
            noMipmap: qQ,
            invertY: !1,
            samplingMode: kQ,
            ...uQ,
            mimeType: YQ,
            loaderOptions: void 0,
            useSRGBBuffer: !1
          },
          eQ = new DQ.b(null, FQ, tQ);
        fQ.r.set(eQ, HQ), Object.assign(eQ, mQ), eQ.updateURL(LQ, xQ);
        const MQ = eQ.getInternalTexture();
        MQ && (MQ.label = AQ), QQ.uvSet = eQ.coordinatesIndex, QQ.matrix.set((0, fQ.M)(eQ)), (0, bQ.C)(QQ, eQ)
      },
      cube: (QQ, FQ, wQ) => {
        let {
          rootUrl: LQ,
          files: oQ,
          noMipmap: kQ,
          luminance: vQ
        } = wQ;
        const {
          samplingMode: mQ
        } = QQ.sampler, uQ = mQ === (0, bQ.t)(kQ) ? null : () => {
          (0, fQ.J)(HQ, mQ)
        }, HQ = new qQ.d(LQ, FQ, null, kQ, oQ, uQ, null, (0, bQ.s)(vQ));
        HQ.coordinatesMode = DQ.b.SKYBOX_MODE, (0, bQ.C)(QQ, HQ)
      },
      canvas: (QQ, FQ, wQ) => {
        let {
          width: LQ,
          height: qQ,
          mipmaps: kQ,
          samplingMode: vQ,
          hasAlpha: mQ = !1,
          wrap: uQ = DQ.b.CLAMP_ADDRESSMODE
        } = wQ;
        const HQ = new oQ.e(FQ, {
          width: LQ,
          height: qQ
        }, QQ, kQ, vQ);
        HQ.hasAlpha = mQ, HQ.wrapU = uQ, HQ.wrapV = uQ;
        const bQ = (0, fQ.A)(HQ);
        return (0, fQ.E)(bQ, HQ), bQ
      }
    })
  },
  40571: (QQ, FQ, wQ) => {
    wQ.d(FQ, {
      e: () => uQ,
      i: () => HQ,
      k: () => bQ
    });
    var LQ = wQ(40554),
      qQ = wQ(39470),
      oQ = wQ(39731),
      DQ = wQ(39840),
      kQ = wQ(40563),
      vQ = wQ(39835),
      mQ = wQ(37065);
    class uQ extends DQ.c {
      constructor() {
        super(...arguments), this.model = null, this.onGeometryUpdated = (QQ, FQ) => {
          this.releaseUnlessInstanced(FQ)
        }, this.onLinked = null
      }
      link(QQ) {
        var FQ;
        (0, mQ.p)(QQ), this.model = QQ, null === (FQ = this.onLinked) || void 0 === FQ || FQ.call(this, QQ)
      }
      relink() {
        this.release();
        const QQ = [];
        for (const qQ of Object.values(this._vertexBuffers))
          if (!qQ.getIsInstanced()) {
            const {
              byteOffset: FQ,
              byteStride: wQ,
              type: LQ,
              normalized: oQ
            } = qQ;
            QQ.push({
              kind: qQ.getKind(),
              data: qQ.getData(),
              offset: FQ,
              stride: wQ,
              components: qQ.getSize(),
              glType: LQ,
              isNormalized: oQ
            })
          } const FQ = this._indices.length ? this._indices : null,
          {
            minimum: wQ,
            maximum: LQ
          } = this.extend;
        this.link(new mQ.h(QQ, FQ, this.getTotalVertices(), new Float64Array(wQ.RLQ()), new Float64Array(LQ.RLQ())))
      }
      copy(QQ) {
        if (!this.model) return super.copy(QQ);
        const FQ = new uQ(QQ, this.iN()),
          wQ = this.OLQ(void 0, !0);
        wQ && FQ.setIndices(wQ);
        let DQ = !1;
        for (const oQ in this._vertexBuffers) {
          const QQ = this._vertexBuffers[oQ],
            wQ = QQ.getData();
          if (!wQ) continue;
          const kQ = QQ.getSize(),
            {
              type: vQ,
              byteOffset: mQ,
              byteStride: uQ,
              normalized: HQ
            } = QQ;
          DQ ||= QQ.isUpdatable();
          const bQ = QQ.getIsInstanced() ? (wQ instanceof Array ? 4 * wQ.length : wQ.byteLength) / uQ : this.getTotalVertices(),
            YQ = (0, qQ.u)(wQ, kQ, vQ, mQ, uQ, bQ, !0),
            xQ = {
              updatable: QQ.isUpdatable(),
              stride: kQ,
              type: vQ,
              normalized: HQ,
              takeBufferOwnership: !0,
              instanced: QQ.getIsInstanced()
            };
          FQ.setVerticesBuffer(new LQ.d(this.Wx(), YQ, oQ, xQ), bQ)
        }
        return FQ._updatable = DQ, FQ._boundingInfo = new oQ.d(this.extend.minimum, this.extend.maximum), FQ.relink(), FQ
      }
      static mergeMeshes(QQ, FQ, wQ, LQ, qQ, oQ) {
        const vQ = QQ[0].iN(),
          mQ = new kQ.c(QQ[0].name + "_merged", vQ),
          HQ = new uQ(DQ.c.RandomId(), vQ, void 0, !1, mQ);
        try {
          if (!kQ.c.MergeMeshes(QQ, FQ, wQ, mQ, qQ, oQ)) return mQ.dispose(), null
        } catch (bQ) {
          throw mQ.dispose(), bQ
        }
        return HQ.relink(), mQ
      }
      removeVerticesData(QQ) {
        this.releaseUnlessInstanced(QQ), super.removeVerticesData(QQ)
      }
      dispose() {
        this.release(), super.dispose()
      }
      releaseUnlessInstanced(QQ) {
        var FQ;
        QQ && null !== (FQ = this.getVertexBuffer(QQ)) && void 0 !== FQ && FQ.getIsInstanced() || this.release()
      }
      release() {
        this.model && ((0, mQ.B)(this.model), this.model = null)
      }
    }

    function HQ(QQ, FQ, wQ) {
      let LQ = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : new kQ.c(QQ, wQ);
      const qQ = (0, mQ.m)(FQ),
        {
          positions: oQ,
          normals: HQ,
          uvs: bQ,
          indices: YQ,
          named: xQ = {}
        } = FQ,
        AQ = new vQ.c;
      AQ.positions = oQ, AQ.normals = null !== HQ && void 0 !== HQ ? HQ : null, AQ.uvs = null !== bQ && void 0 !== bQ ? bQ : null, AQ.indices = YQ;
      const tQ = new uQ(DQ.c.RandomId(), wQ, AQ, !1, LQ);
      for (const {
          kind: DQ,
          components: kQ
        }
        of qQ.vertexAttributes) DQ in xQ && LQ.setVerticesData(DQ, xQ[DQ], !1, kQ);
      return tQ.link(qQ), LQ
    }

    function bQ(QQ, FQ, wQ) {
      let LQ = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
      const qQ = new kQ.c(QQ, wQ),
        {
          positions: oQ,
          normals: DQ,
          uvs: mQ,
          indices: uQ
        } = FQ;
      return Object.assign(new vQ.c, {
        positions: oQ,
        normals: DQ,
        uvs: mQ,
        indices: uQ
      }).applyToMesh(qQ, LQ), qQ
    }
  },
  8582: (QQ, FQ, wQ) => {
    wQ.d(FQ, {
      e: () => uQ,
      g: () => kQ,
      h: () => vQ
    });
    var LQ = wQ(2148),
      qQ = wQ(1254),
      oQ = wQ(2153);
    const DQ = ",";

    function kQ(QQ) {
      if (!QQ) return [];
      const FQ = new Set,
        wQ = [];
      for (const LQ of QQ.split(DQ)) {
        const QQ = LQ.trim();
        if ((0, oQ.g)(QQ) && !FQ.has(QQ) && (FQ.add(QQ), wQ.push(QQ), wQ.length >= qQ.q)) break
      }
      return wQ
    }

    function vQ(QQ) {
      const FQ = new Set,
        wQ = [];
      for (const LQ of QQ)
        if ((0, oQ.g)(LQ) && !FQ.has(LQ) && (FQ.add(LQ), wQ.push(LQ), wQ.length >= qQ.q)) break;
      return wQ.join(DQ)
    }

    function mQ() {
      return vQ(oQ.d)
    }

    function uQ(QQ) {
      var FQ;
      return "emote" === QQ ? mQ() : null !== (FQ = HQ[QQ][0]) && void 0 !== FQ ? FQ : bQ[QQ]
    }
    const HQ = qQ.w.reduce(((QQ, FQ) => {
        const wQ = [];
        for (const oQ in LQ.d[FQ]) {
          var qQ;
          "default" === (null === (qQ = (0, LQ.i)(FQ, oQ)) || void 0 === qQ ? void 0 : qQ.cosmeticPack) && wQ.push(oQ)
        }
        return QQ[FQ] = wQ, QQ
      }), {}),
      bQ = qQ.w.reduce(((QQ, FQ) => (QQ[FQ] = Object.keys(LQ.d[FQ])[0], QQ)), {})
  },
  38333: (QQ, FQ, wQ) => {
    var LQ = {
      "./cape_cow_cream.png": 27876,
      "./cape_cow_normal.png": 27885,
      "./cape_creator_level1.png": 27887,
      "./cape_creator_level2.png": 27892,
      "./cape_creator_level3.png": 27895,
      "./cape_none.png": 27902,
      "./cape_pig.png": 27905,
      "./cape_sheep.png": 27908,
      "./cape_super.png": 27912,
      "./cape_super_inverted.png": 27914,
      "./cape_youtuber.png": 27919
    };

    function qQ(QQ) {
      var FQ = oQ(QQ);
      return wQ(FQ)
    }

    function oQ(QQ) {
      if (!wQ.o(LQ, QQ)) {
        var FQ = new Error("Cannot find module '" + QQ + "'");
        throw FQ.code = "MODULE_NOT_FOUND", FQ
      }
      return LQ[QQ]
    }
    qQ.keys = function() {
      return Object.keys(LQ)
    }, qQ.resolve = oQ, QQ.exports = qQ, qQ.id = 38333
  }
};
Object.freeze(modules);
for (const QQ in modules) Object.freeze(modules[QQ]);