export const id = 155;
export const ids = [155];
export const modules = {
  40492: (QQ, FQ, wQ) => {
    wQ.r(FQ), wQ.d(FQ, {
      openMobLineupPreview: () => XQ,
      openMobPreview: () => aQ,
      openPetPreview: () => fQ
    });
    var LQ = wQ(39211),
      qQ = wQ(39491),
      oQ = wQ(40496),
      DQ = wQ(36870),
      kQ = wQ(36688),
      vQ = wQ(39678),
      mQ = wQ(40518),
      uQ = wQ(38009),
      HQ = wQ(36777),
      bQ = wQ(36753),
      YQ = wQ(36679),
      xQ = wQ(37911),
      AQ = wQ(37909),
      tQ = wQ(37639),
      eQ = wQ(37697),
      MQ = wQ(37665),
      GQ = wQ(37341),
      pQ = wQ(2676),
      cQ = wQ(37180);
    wQ(40526), wQ(39906), wQ(40532);
    const CQ = 22,
      SQ = 13,
      iQ = Math.PI - Math.PI / 16,
      WQ = 6,
      RQ = Math.PI / 4;
    let OQ = null;
    const sQ = {},
      rQ = new Map;

    function IQ() {
      if (null !== OQ) return OQ;
      const QQ = document.createElement("canvas");
      QQ.classList.add("MobPreviewCanvas");
      const FQ = new LQ.b(QQ, !0, {
        preserveDrawingBuffer: !0
      });
      FQ.SLQ = (0, pQ.d)().Zx.engine.SLQ;
      const wQ = new qQ.d(FQ);
      wQ.clearColor = new DQ.b(0, 0, 0, 0), wQ.ambientColor = new DQ.Color3(1, 1, 1);
      const mQ = new oQ.b("Tt", Math.PI / 2, Math.PI / 2, CQ, kQ.Ox.Zero(), wQ),
        uQ = new vQ.b("light", new kQ.Ox(-.1, 1, -.3), wQ);
      return uQ.diffuse = new DQ.Color3(1, 1, 1), uQ.specular = new DQ.Color3(1, 1, 1), uQ.groundColor = new DQ.Color3(.5, .5, .5), OQ = {
        engine: FQ,
        lA: wQ,
        canvas: QQ,
        camera: mQ
      }, OQ
    }

    function UQ(QQ) {
      return sQ[QQ] ??= (0, tQ.w)(QQ, IQ().lA, !0).catch((FQ => {
        throw delete sQ[QQ], FQ
      })), sQ[QQ]
    }

    function NQ(QQ) {
      let FQ = rQ.get(QQ);
      return FQ || (FQ = GQ.w[QQ].loadModel(IQ().lA, !1).then((QQ => (QQ.Qr(!1), QQ)), (FQ => {
        throw rQ.delete(QQ), FQ
      })), rQ.set(QQ, FQ)), FQ
    }

    function TQ(QQ) {
      var FQ, wQ, LQ;
      let {
        mobType: qQ,
        variation: oQ,
        animation: DQ
      } = QQ, vQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null, CQ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
      const WQ = null !== (FQ = null === vQ || void 0 === vQ ? void 0 : vQ.size) && void 0 !== FQ ? FQ : 1,
        RQ = null !== (wQ = null === vQ || void 0 === vQ ? void 0 : vQ.cosmetics) && void 0 !== wQ ? wQ : [],
        OQ = null !== (LQ = null === vQ || void 0 === vQ ? void 0 : vQ.nC) && void 0 !== LQ ? LQ : null;
      let sQ = !1,
        rQ = null,
        TQ = null;
      const {
        engine: KQ,
        lA: zQ
      } = IQ(), lQ = zQ.onBeforeRenderObservable.add((() => {
        var QQ;
        null === (QQ = TQ) || void 0 === QQ || QQ.render(KQ.getDeltaTime())
      })), jQ = null === OQ ? null : NQ(OQ).catch((QQ => (console.error(`Mob preview: could not load ${OQ}`, QQ), null)));
      return Promise.all([UQ(qQ), jQ]).then((QQ => {
        var FQ, wQ, LQ;
        let [vQ, UQ] = QQ;
        if (sQ) return;
        const NQ = (0, pQ.d)().Zx.aN,
          {
            hitBoxDimensions: KQ
          } = (0, uQ.b)(qQ),
          zQ = SQ / Math.max(KQ.height, KQ.width);
        if (rQ = (0, tQ.m)(qQ, zQ * WQ, !0, !0), NQ.setPosition(rQ, CQ, -KQ.height * zQ / 2, 0), NQ.setRotationEulerY(rQ, iQ), vQ.meshApi instanceof MQ.c && RQ.length > 0)
          for (const [qQ, oQ] of RQ) vQ.meshApi.updatePlayerCosmetic(null, rQ, qQ, oQ, !0);
        else vQ.meshApi.updateVariation(rQ, qQ, null !== oQ && void 0 !== oQ ? oQ : "default");
        null !== OQ && null !== UQ && function(QQ, FQ, wQ, LQ) {
          var qQ;
          const oQ = GQ.w[QQ],
            DQ = (0, xQ.k)();
          (0, xQ.e)(oQ, null === (qQ = (0, eQ.e)(wQ).meshMetadata.heldItemPositionParams) || void 0 === qQ ? void 0 : qQ.itemOffset, DQ);
          const vQ = cQ.b * DQ.ck.y,
            uQ = DQ.usesQuaternion ? DQ.quaternion : kQ.Quaternion.FromEulerVector(DQ.rotation),
            HQ = new mQ.e(`${FQ.name}Hand`, IQ().lA);
          HQ.position.Qs((0, AQ.c)(DQ.position, uQ, vQ, oQ.heldModelOffsetY())), HQ.rotationQuaternion = uQ, HQ.ck.set(DQ.ck.x, vQ, DQ.ck.z), FQ.clone(`${FQ.name}Held`, HQ).Qr(!0);
          const bQ = (0, pQ.d)().Zx.aN;
          bQ.attachTransformNode(HQ, LQ, bQ.getNamedNode(LQ, "ArmRightMesh"))
        }(OQ, UQ, qQ, rQ), NQ.set(rQ, "aOpacity", 1);
        const lQ = null !== (FQ = (0, eQ.e)(qQ).meshMetadata.lifeformTypeForModelOverride) && void 0 !== FQ ? FQ : qQ;
        TQ = new YQ.AnimatorState, TQ.thinInstMgr = NQ, TQ.XN = rQ, TQ.nwQ = NQ.iLQ(rQ, 0), TQ.modelLifeformType = lQ, TQ.nodeNameAliases = null !== (wQ = null === (LQ = (0, HQ.b)(lQ)) || void 0 === LQ ? void 0 : LQ.nodeNameAliases) && void 0 !== wQ ? wQ : null, TQ.startAnimation(DQ, bQ.h.Movement)
      })).catch((QQ => {
        console.error(`Mob preview: could not load ${qQ}`, QQ)
      })), () => {
        sQ = !0, zQ.onBeforeRenderObservable.remove(lQ), null !== rQ && (0, pQ.d)().Zx.aN.delete(rQ)
      }
    }

    function KQ(QQ, FQ) {
      return TQ({
        mobType: "NPC",
        variation: null,
        animation: QQ.animation
      }, QQ, FQ)
    }

    function zQ(QQ) {
      let {
        mobType: FQ,
        variation: wQ,
        metaInfo: LQ,
        tamed: qQ
      } = QQ, oQ = !1, DQ = null, kQ = 0;
      const vQ = (0, pQ.d)(),
        mQ = vQ.Zx.aN,
        uQ = QQ => {
          kQ += RQ * (QQ / 1e3) % (2 * Math.PI), mQ.setRotationEulerY(DQ, kQ)
        };
      return UQ(FQ).then((QQ => {
        if (oQ) return;
        DQ = (0, tQ.m)(FQ, WQ, !0, !0), mQ.setPosition(DQ, 0, -WQ, 0), QQ.meshApi.updateVariation(DQ, FQ, wQ);
        const kQ = {
          wool: "Sheared" !== LQ,
          saddle: "Saddled" === LQ,
          antlers: "Antlers" === LQ,
          collar: qQ
        };
        for (const [FQ, wQ] of Object.entries(kQ)) mQ.hasGroup(DQ, FQ) && QQ.meshApi.setMeshGroupVisibility(DQ, FQ, wQ);
        mQ.set(DQ, "aOpacity", 1), vQ.on("renderTickBegin", uQ)
      })).catch((QQ => {
        console.error(`Pet preview: could not load ${FQ}`, QQ)
      })), () => {
        oQ = !0, vQ.off("renderTickBegin", uQ), null !== DQ && mQ.delete(DQ)
      }
    }
    class lQ {
      constructor(QQ, FQ) {
        this.place = FQ, this.remove = null;
        const {
          engine: wQ,
          lA: LQ,
          canvas: qQ
        } = IQ();
        QQ.appendChild(qQ), wQ.resize(), wQ.runRenderLoop((() => {
          LQ.render()
        }))
      }
      show(QQ) {
        var FQ;
        null === (FQ = this.remove) || void 0 === FQ || FQ.call(this), this.remove = this.place(QQ)
      }
      resize(QQ, FQ) {
        const {
          engine: wQ,
          canvas: LQ
        } = IQ();
        LQ.width = QQ, LQ.height = FQ, wQ.resize()
      }
      close() {
        var QQ;
        IQ().engine.stopRenderLoop(), null === (QQ = this.remove) || void 0 === QQ || QQ.call(this), this.remove = null
      }
    }
    class jQ {
      constructor(QQ) {
        this.preview = void 0, this.view = {
          figures: [],
          shown: []
        }, this.aspect = 1, this.placed = [], this.preview = new lQ(QQ, (() => () => {}))
      }
      show(QQ) {
        QQ.figures !== this.view.figures && this.preload(QQ.figures), this.view = QQ, this.place()
      }
      resize(QQ, FQ) {
        this.preview.resize(QQ, FQ), this.aspect = QQ / FQ, this.place()
      }
      close() {
        this.preview.close();
        for (const QQ of this.placed) null === QQ || void 0 === QQ || QQ.remove();
        this.placed = []
      }
      preload(QQ) {
        const FQ = () => {};
        UQ("NPC").catch(FQ);
        for (const {
            nC: wQ
          }
          of QQ) null !== wQ && NQ(wQ).catch(FQ)
      }
      place() {
        const {
          figures: QQ,
          shown: FQ
        } = this.view, wQ = QQ.map(((wQ, LQ) => {
          var qQ;
          const oQ = null !== (qQ = this.placed[LQ]) && void 0 !== qQ ? qQ : null;
          if (!FQ[LQ]) return null === oQ || void 0 === oQ || oQ.remove(), null;
          const DQ = (kQ = (LQ + .5) / QQ.length, vQ = this.aspect, (.5 - kQ) * (2 * CQ * Math.tan(IQ().camera.fov / 2)) * vQ);
          var kQ, vQ;
          return null !== oQ && oQ.figure === wQ && oQ.x === DQ ? oQ : (null === oQ || void 0 === oQ || oQ.remove(), {
            figure: wQ,
            x: DQ,
            remove: KQ(wQ, DQ)
          })
        }));
        for (const LQ of this.placed.slice(QQ.length)) null === LQ || void 0 === LQ || LQ.remove();
        this.placed = wQ
      }
    }

    function aQ(QQ) {
      return new lQ(QQ, TQ)
    }

    function XQ(QQ) {
      return new jQ(QQ)
    }

    function fQ(QQ) {
      return new lQ(QQ, zQ)
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
  }
};
Object.freeze(modules);
for (const QQ in modules) Object.freeze(modules[QQ]);