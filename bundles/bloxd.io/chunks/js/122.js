export const id = 122;
export const ids = [122];
export const modules = {
  42653: (RR, JR, GR) => {
    GR.d(JR, {
      d: () => rR,
      f: () => fR,
      h: () => KR,
      k: () => VR,
      o: () => wR
    });
    var yR = GR(1317),
      tR = GR(3178),
      uR = GR(38287),
      ZR = GR(38686);
    class qR {
      constructor(RR, JR) {
        this.pose = RR, this.nodes = void 0, this.nodes = RR.boneNames.map((RR => JR.get(RR)))
      }
      write(RR) {
        this.pose.pose(RR), (0, ZR.p)(this.pose, this.nodes)
      }
    }

    function iR(RR) {
      RR.unfreezeWorldMatrix();
      for (const JR of RR.getChildren()) iR(JR)
    }
    async function fR(RR, JR, GR, yR) {
      let {
        keepTransforms: tR,
        backFaceCulling: ZR
      } = yR;
      const qR = await (0, uR.k)(JR, RR),
        fR = (0, uR.f)(null !== GR && void 0 !== GR ? GR : JR, RR, void 0, ZR);
      (0, uR.m)(qR, fR, {
        keepTransforms: tR,
        backFaceCulling: ZR,
        onProcessedMesh: JR => {
          RR.stR(JR, !1), JR.isVisible = !1
        }
      });
      for (const uR of qR.rootNodes) iR(uR);
      return qR
    }

    function VR(RR, JR) {
      RR.isVisible = JR;
      for (const GR of RR.getChildMeshes()) GR.isVisible = JR
    }

    function KR(RR) {
      const JR = new Map;
      for (const GR of RR.getNodes()) JR.set(GR.name, GR);
      return JR
    }

    function wR(RR, JR, GR, yR) {
      VR(RR, !0), (0, uR.r)(RR, JR.overlayColour), GR.attachTransformNode(RR, yR, GR.getNamedNode(yR, JR.destNode))
    }
    class rR {
      constructor(RR, JR, GR) {
        this.tL = RR, this.thinInstMgr = JR, this.JI = GR, this.modelCache = {}, this.attachmentsByType = {}, this.shownBones = [], this.cosmeticNames = {}
      }
      loadModel(RR, JR, GR) {
        const yR = (0, uR.i)(RR, JR);
        return yR in this.modelCache || (this.modelCache[yR] = (async () => {
          try {
            const yR = KR(await fR(this.tL, RR, JR, {
                keepTransforms: void 0 !== GR,
                backFaceCulling: !1
              })),
              tR = void 0 === GR ? null : (0, ZR.i)(GR, (RR => {
                const JR = yR.get(RR);
                return JR ? (0, ZR.h)(JR) : null
              }));
            return {
              nodesByName: yR,
              bones: null === tR ? null : new qR(tR, yR)
            }
          } catch (tR) {
            throw delete this.modelCache[yR], console.error(`Failed to load preview attachment ${yR}:`, tR), tR
          }
        })()), this.modelCache[yR]
      }
      async update(RR, JR) {
        var GR;
        const {
          thinInstMgr: uR,
          JI: ZR
        } = this;
        this.cosmeticNames[RR] = JR;
        const qR = this.attachmentsByType[RR];
        if (qR)
          for (const {
              mesh: tR,
              destNode: fR,
              bones: KR
            }
            of qR) {
            null !== KR && (0, yR.bb)(this.shownBones, KR), VR(tR, !1);
            const RR = uR.getNamedNode(ZR, fR);
            uR.detachTransformNodeIfFound(tR, ZR, RR)
          }
        this.attachmentsByType[RR] = [];
        const iR = (0, tR.m)(RR, JR);
        if (null !== iR && void 0 !== iR && null !== (GR = iR.attachments) && void 0 !== GR && GR.length)
          for (const yR of iR.attachments) {
            let GR;
            try {
              GR = await this.loadModel(yR.modelGlb, yR.texture, yR.animation)
            } catch {
              continue
            }
            if (this.cosmeticNames[RR] !== JR) return;
            const tR = GR.nodesByName.get(yR.modelNode);
            tR ? (wR(tR, yR, uR, ZR), this.attachmentsByType[RR].push({
              mesh: tR,
              destNode: yR.destNode,
              bones: GR.bones
            }), null !== GR.bones && this.shownBones.push(GR.bones)) : console.error(`Preview attachment node ${yR.modelNode} not found in ${yR.modelGlb}`)
          }
      }
      writePoses(RR) {
        for (const JR of this.shownBones) JR.write(RR)
      }
    }
  },
  40035: (RR, JR, GR) => {
    GR.d(JR, {
      c: () => wR
    });
    var yR = GR(38349),
      tR = GR(38456),
      uR = GR(38437),
      ZR = GR(38366),
      qR = GR(38358);

    function iR(RR) {
      return `\n\t\t\t\t${(0,qR.y)(RR,"mat2","rotate",[{name:"ang",type:"float"}],`\
      n\ t\ t\ t\ t\ t$ {
        (0, qR.G)(RR, "float", "s", "sin(ang)")
      }\
      n\ t\ t\ t\ t\ t$ {
        (0, qR.G)(RR, "float", "c", "cos(ang)")
      }\
      n\ t\ t\ t\ t\ treturn $ {
        (0, qR.n)(RR, "mat2", "c", "s", "-s", "c")
      };\
      n\ t\ t\ t\ t`)}\n\t\t\t`
    }

    function fR(RR, JR) {
      let GR = (0, qR.Jb)(RR, "skele" + (JR - 1));
      for (let tR = JR - 2; tR >= 0; tR--) GR = (0, qR.Ab)(RR, `boneIdx == ${tR}`, (0, qR.Jb)(RR, `skele${tR}`), GR);
      const yR = "bone.yz + rotate(bone.x) * pivot - pivot";
      return `\n\t\t\t\t${(0,qR.G)(RR,"int","boneIdx",(0,qR.Fb)(RR,"BLOXD_CAPE_MAX_Y - positionUpdated.y"))}\n\t\t\t\t${(0,qR.G)(RR,"vec3","bone",GR)}\n\t\t\t\t${(0,qR.G)(RR,"vec2","pivot",(0,qR.n)(RR,"vec2","0.0",`${(0,qR.Nb)(RR,"position")}.z`))}\n\t\t\t\t${(0,qR.db)(RR)?`positionUpdated = vec3f(positionUpdated.x, positionUpdated.yz + (${yR}));`:`positionUpdated.yz += ${yR};`}\n\t\t`
    }

    function VR(RR) {
      return `\n\t\t\t\t#ifdef NORMAL\n\t\t\t\tnormalUpdated = ${(0,qR.n)(RR,"vec3","normalUpdated.x","rotate(bone.x) * normalUpdated.yz")};\n\t\t\t\t#endif\n\t\t`
    }
    const KR = {
        x: 0,
        y: 0,
        z: 0,
        yK(RR, JR) {
          return this.x = RR[JR], this.y = RR[JR + 1], this.z = RR[JR + 2], this
        }
      },
      wR = {
        name: "Cape",
        className: "CapeMaterialPlugin",
        priority: 200,
        defines: (RR, JR) => ({
          ...(0, yR.e)("CAPE"),
          BLOXD_CAPE_BONES: `${RR}`,
          BLOXD_CAPE_MAX_Y: (0, tR.eb)(JR)
        }),
        getUniforms(RR) {
          return (0, uR.e)(function(RR) {
            const JR = [];
            for (let GR = 0; GR < RR; GR++) JR.push({
              name: `skele${GR}`,
              type: "highp vec3"
            });
            return JR
          }(this.skeleLen), "vertex", RR)
        },
        bind(RR) {
          for (let JR = 0; JR < this.skeleLen; JR++) RR.updateVector3(`skele${JR}`, KR.yK(this.skele, 3 * JR))
        },
        uniformsVersion() {
          return this.bonesVersion
        },
        getCustomCode(RR, JR) {
          return "vertex" !== RR ? null : {
            CUSTOM_VERTEX_DEFINITIONS: iR(JR),
            CUSTOM_VERTEX_UPDATE_POSITION: fR(JR, this.skeleLen),
            CUSTOM_VERTEX_UPDATE_NORMAL: VR(JR)
          }
        }
      };
    (0, ZR.n)(wR)
  },
  39922: (RR, JR, GR) => {
    GR.d(JR, {
      e: () => VR,
      f: () => KR
    });
    var yR = GR(38349),
      tR = GR(38437),
      uR = GR(38358),
      ZR = GR(38366);
    const qR = "bloxdTextLodBias",
      iR = [{
        name: qR,
        type: "float"
      }],
      fR = "bloxdTextSample",
      VR = {
        planes: -.5,
        boards: -.5
      },
      KR = {
        name: "TextSampler",
        className: "TextSamplerMaterialPlugin",
        priority: 60,
        defines: () => (0, yR.e)("TEXT_SAMPLER"),
        getUniforms: RR => (0, tR.e)(iR, "fragment", RR),
        bind(RR) {
          RR.updateFloat(qR, this.lodBias)
        },
        uniformsVersion: () => 0,
        getCustomCode(RR, JR) {
          if ("fragment" !== RR) return null;
          const GR = (0, uR.M)(JR, `vec4 ${fR}(sampler2D s, vec2 uv, float bias)`, `fn ${fR}(t: texture_2d<f32>, ts: sampler, uv: vec2f, bias: f32) -> vec4f`),
            yR = (0, uR.M)(JR, "texture2D(s, uv, bias)", "textureSampleBias(t, ts, uv, bias)"),
            tR = `${(0,uR.V)(JR,"vDiffuseUV")} + uvOffset`,
            ZR = (0, uR.M)(JR, `${fR}(diffuseSampler, ${tR}, ${(0,uR.Jb)(JR,qR)})`, `${fR}(diffuseSampler, diffuseSamplerSampler, ${tR}, ${(0,uR.Jb)(JR,qR)})`);
          return {
            CUSTOM_FRAGMENT_DEFINITIONS: `\n\t\t\t\t${GR} {\n\t\t\t\t\t${(0,uR.G)(JR,"vec4","texel",yR)}\n\t\t\t\t\t// 8-bit premultiplied rounding can put the quotient just over 1; only alpha 0 hits the floor,\n\t\t\t\t\t// where the colour is 0 anyway.\n\t\t\t\t\treturn ${(0,uR.n)(JR,"vec4",`clamp(texel.rgb / max(texel.a, 1.0 / 255.0), ${(0,uR.n)(JR,"vec3","0.0")}, ${(0,uR.n)(JR,"vec3","1.0")})`,"texel.a")};\n\t\t\t\t}\n\t\t\t`,
            [(0, uR.I)(JR)]: `baseColor = ${ZR};`
          }
        }
      };
    (0, ZR.n)(KR)
  },
  42663: (RR, JR, GR) => {
    GR.r(JR), GR.d(JR, {
      CapeMaterialPlugin: () => AR,
      HueTintMaterialPlugin: () => CR,
      LifeformMaterialPlugin: () => XR,
      OverlayMaterialPlugin: () => MR
    });
    var yR = GR(42671),
      tR = GR(39172);
    class uR extends((0, yR.d)(tR.e)) {}(0, yR.e)(tR.e, uR);
    var ZR = GR(38453);
    class qR extends((0, yR.d)(ZR.f)) {}(0, yR.e)(ZR.f, qR);
    var iR = GR(39010);
    class fR extends((0, yR.d)(iR.f)) {}(0, yR.e)(iR.f, fR);
    var VR = GR(38475),
      KR = GR(41781),
      wR = GR(38466);
    class rR extends((0, yR.d)(wR.e)) {
      constructor(RR, JR, GR) {
        super(RR, JR, GR), (0, VR.j)(RR)
      }
      dispose(RR) {
        (0, VR.l)(this._material), super.dispose(RR)
      }
    }(0, yR.e)(wR.e, rR), (0, wR.i)({
      disableUnusedSpecularTerm: yR.b,
      isLightingDisabled: RR => RR instanceof KR.StandardMaterial && RR.disableLighting
    });
    var eR = GR(39922);
    class aR extends((0, yR.d)(eR.f)) {}(0, yR.e)(eR.f, aR);
    var LR = GR(40035),
      nR = GR(38340),
      UR = GR(39288),
      WR = GR(38460);
    class AR extends((0, yR.d)(LR.c)) {}(0, yR.e)(LR.c, AR);
    class CR extends((0, yR.d)(nR.c)) {}(0, yR.e)(nR.c, CR);
    class XR extends((0, yR.d)(UR.q)) {}(0, yR.e)(UR.q, XR);
    class MR extends((0, yR.d)(WR.b)) {}(0, yR.e)(WR.b, MR)
  },
  10234: (RR, JR, GR) => {
    GR.d(JR, {
      d: () => tR,
      g: () => ZR,
      j: () => qR,
      l: () => iR
    });
    var yR = GR(32);
    const tR = "touchSprintChanged";
    let uR = !0;

    function ZR() {
      return uR
    }

    function qR(RR) {
      RR !== uR && (uR = RR, yR.n.JK(tR, RR))
    }

    function iR(RR, JR) {
      return null !== RR && null !== JR && RR > JR
    }
  },
  42671: (RR, JR, GR) => {
    GR.d(JR, {
      b: () => SR,
      d: () => WR,
      e: () => FR
    });
    var yR = GR(41781),
      tR = GR(42677),
      uR = GR(42722),
      ZR = GR(42685),
      qR = GR(38986),
      iR = GR(38988),
      fR = GR(38995),
      VR = GR(38998),
      KR = GR(38424),
      wR = GR(38391),
      rR = GR(38397),
      eR = GR(42693),
      aR = GR(38366),
      LR = GR(38382),
      nR = GR(38358);

    function UR(RR, JR) {
      return Object.assign((function(RR, GR, yR, tR) {
        return JR(this.featureState, RR, GR, yR, tR)
      }), {
        iK: RR
      })
    }

    function WR(RR) {
      const JR = class extends eR.e {
          constructor(JR, GR) {
            const yR = (0, LR.bb)(JR),
              tR = yR && (0, LR.E)(yR, RR.name);
            for (var uR = arguments.length, ZR = new Array(uR > 2 ? uR - 2 : 0), qR = 2; qR < uR; qR++) ZR[qR - 2] = arguments[qR];
            super(JR, RR.name, RR.priority, tR ? tR.defines : RR.defines(...ZR), !1), this.featureState = void 0, this.featureState = GR, this._pluginManager._addPlugin(this), this._enable(!0), (0, LR.H)(this._material, RR, this.featureState, this._pluginDefineNames)
          }
          getClassName() {
            return RR.className
          }
          isCompatible(RR) {
            return RR === nR.c.GLSL || RR === nR.c.WGSL
          }
        },
        GR = (0, aR.i)(RR);
      for (const [yR, tR] of Object.entries(aR.e)) {
        const uR = RR[yR];
        if (uR) {
          const RR = GR[yR];
          Object.defineProperty(JR.prototype, tR, {
            value: UR(uR, RR),
            writable: !0,
            configurable: !0
          })
        }
      }
      return JR
    }
    class AR extends(WR(qR.c)) {}
    var CR = GR(41352),
      XR = GR(42697),
      MR = GR(42704);

    function BR(RR, JR, GR) {
      return (0, MR.c)(GR, JR.urls, (() => async function(RR, JR, GR) {
        const {
          width: yR
        } = RR[0].getSize(), tR = RR.map(((RR, GR) => {
          var tR;
          const uR = Math.round(RR.getSize().height / yR),
            ZR = null === JR || void 0 === JR ? void 0 : JR[GR];
          return {
            pixels: ZR && ZR.byteLength === yR * yR * uR * 4 ? ZR : null !== (tR = lR.get(RR.getInternalTexture())) && void 0 !== tR ? tR : RR._readPixelsSync(),
            layers: uR
          }
        })), uR = Math.min(GR.ke().getCaps().texture2DArrayMaxLayerCount, 256), qR = (0, MR.b)(tR, yR, uR).map((RR => {
          let {
            pixels: JR,
            layers: tR
          } = RR;
          return {
            atlas: new XR.d(JR, yR, yR, tR, CR.c.TEXTUREFORMAT_RGBA, GR, !0, !1, ZR.c.NEAREST_NEAREST_MIPLINEAR),
            layers: tR
          }
        }));
        return RR.forEach(((RR, JR) => {
          const yR = RR.getInternalTexture();
          lR.has(yR) || (! function(RR, JR) {
            const GR = JR.createRawTexture(new Uint8Array(4), 1, 1, CR.c.TEXTUREFORMAT_RGBA, !1, !1, ZR.c.NEAREST_SAMPLINGMODE);
            RR._hardwareTexture.release(), JR.unbindAllTextures(), GR._swapAndDie(RR, !1)
          }(yR, GR.ke()), lR.set(yR, tR[JR].pixels))
        })), qR
      }(RR, JR.pixels, GR)))
    }
    const lR = new WeakMap;
    var pR = GR(39007);
    class gR extends(WR(iR.j)) {
      constructor(RR, JR) {
        super(RR, JR), this.loaded = new Set, this.mirrors = void 0, this.mirrors = JR.textures.map((RR => RR.mirror)), JR.useWebGL2 && !JR.imagesPerAtlas.length && JR.textureAtlases.splice(0, JR.textureAtlases.length, ...this.mirrors.map((() => null))), this.mirrors.forEach(((RR, JR) => {
          RR.onLoadObservable.add((RR => {
            this.setTextureArrayData(RR, JR).catch((RR => {
              console.error(`Failed to build the texture arrays, at atlas ${JR}`, RR)
            }))
          }))
        })), (0, pR.l)(JR, RR.shaderLanguage)
      }
      async setTextureArrayData(RR, JR) {
        const GR = this.featureState,
          {
            width: yR,
            height: tR
          } = RR.getSize(),
          uR = this._material.shaderLanguage;
        if (!GR.useWebGL2) return void(0, pR.g)(this._material, GR, JR, yR, Math.round(tR / yR), uR);
        if (this.loaded.add(JR), this.loaded.size < this.mirrors.length) return;
        const ZR = await BR(this.mirrors, GR.sources, this._material.jH());
        (0, pR.e)(this._material, GR, ZR, yR, uR)
      }
    }
    var bR = GR(42711),
      vR = GR(41822),
      OR = GR(38195),
      xR = GR(42714),
      NR = GR(41951),
      DR = GR(41813),
      HR = GR(42644),
      oR = GR(38650),
      cR = GR(42716);
    class PR extends bR.b {
      getData() {
        return null
      }
      _rebuild() {}
      restore() {
        super._rebuild()
      }
    }
    const IR = {
      Mesh: xR.b,
      TransformNode: HR.c,
      GK: bR.b,
      VertexBuffer: bR.c,
      BoundingInfo: vR.c,
      Fe: OR.Fe,
      ArenaBuffer: PR,
      SubMesh: DR.b,
      VertexData: NR.c,
      MirroredGeometry: cR.b,
      meshFromArrays: cR.e,
      plainMeshFromArrays: cR.i
    };
    (0, oR.g)(IR);
    var mR = GR(38475);
    class zR extends(WR(VR.h)) {
      constructor(RR, JR) {
        if (super(RR, JR), RR instanceof yR.StandardMaterial && JR.dirLightCount > 0) {
          const JR = RR,
            GR = JR._blockDirtyMechanism;
          JR._blockDirtyMechanism = !0, RR.disableLighting = !0, JR._blockDirtyMechanism = GR;
          const yR = (0, LR.bb)(RR);
          yR && (yR.disableLighting = !0, (0, LR._)(yR))
        }(0, mR.j)(RR)
      }
      dispose(RR) {
        (0, mR.l)(this._material), super.dispose(RR)
      }
    }

    function SR(RR, JR) {
      if (!(JR instanceof yR.StandardMaterial) || JR.specularTexture) return;
      const {
        r: GR,
        g: tR,
        b: uR
      } = JR.specularColor;
      0 === GR && 0 === tR && 0 === uR && (RR.SPECULARTERM = !1)
    }(0, VR.f)({
      disableUnusedSpecularTerm: SR
    });
    var jR = GR(38406),
      dR = GR(38666);
    const ER = new RegExp(`^#define ${fR.e}\\s*$`, "m");
    class YR extends(WR(fR.j)) {
      constructor(RR, JR) {
        super(RR, JR), this.He = !1, JR.ditherOnlyWhileFading && (dR.f.add(RR), this.prewarmDitherTwins(RR))
      }
      prewarmDitherTwins(RR) {
        const JR = new WeakSet;
        RR.onEffectCreatedObservable.add((GR => {
          let {
            effect: yR,
            subMesh: tR
          } = GR;
          if (this.featureState.prewarmingDither || JR.has(yR)) return;
          JR.add(yR);
          const uR = null === tR || void 0 === tR ? void 0 : tR.getMesh();
          uR && !ER.test(yR.defines) && RR.jH().onAfterRenderObservable.addOnce((() => {
            this.prewarmDither(uR) || JR.delete(yR)
          }))
        }))
      }
      prewarmDither(RR) {
        if (this.He || RR.oB()) return !1;
        const JR = new DR.b(0, 0, 0, 0, 0, RR, void 0, !1, !1);
        this.featureState.prewarmingDither = !0;
        try {
          this._material.isReadyForSubMesh(RR, JR)
        } finally {
          this.featureState.prewarmingDither = !1
        }
        return null !== JR.effect
      }
      dispose(RR) {
        this.He = !0, super.dispose(RR)
      }
    }
    class kR extends(WR(KR.e)) {}
    const QR = new Map;

    function FR(RR, JR) {
      QR.set(RR, JR)
    }
    FR(qR.c, AR), FR(iR.j, gR), FR(fR.j, YR), FR(VR.h, zR), FR(KR.e, kR), (0, wR.b)({
      create: (RR, JR) => {
        const GR = new yR.StandardMaterial(RR.name, JR);
        return (0, jR.t)(RR, GR), GR.detailMap._pluginDefineNames
      },
      write: (RR, JR, GR) => {
        (0, jR.ab)(RR.mirror, JR, GR)
      },
      addFeature: (RR, JR, GR) => {
        const yR = QR.get(JR.feature);
        if (!yR) throw new Error(`${JR.feature.name} has no plugin class (registerPluginClass)`);
        new yR(RR.mirror, JR.state, ...GR)
      },
      texture: (RR, JR, GR) => {
        let {
          url: yR,
          noMipmap: tR,
          invertY: uR,
          samplingMode: qR,
          data: iR,
          sets: fR
        } = GR;
        if (!iR) {
          const GR = new ZR.c(yR, JR, tR, uR, qR);
          return Object.assign(GR, fR), void(0, rR.J)(RR, GR)
        }
        const VR = {},
          KR = new Promise(((RR, JR) => {
            VR.onLoad = RR, VR.onError = (RR, GR) => {
              JR(new Error(`${iR.context}: ${(null===GR||void 0===GR?void 0:GR.message)||RR||"Failed to load texture"}`))
            }
          })),
          {
            mimeType: wR,
            bytes: eR,
            label: aR
          } = iR,
          LR = {
            noMipmap: tR,
            invertY: !1,
            samplingMode: qR,
            ...VR,
            mimeType: wR,
            loaderOptions: void 0,
            useSRGBBuffer: !1
          },
          nR = new ZR.c(null, JR, LR);
        jR.v.set(nR, KR), Object.assign(nR, fR), nR.updateURL(yR, eR);
        const UR = nR.getInternalTexture();
        UR && (UR.label = aR), RR.uvSet = nR.coordinatesIndex, RR.matrix.set((0, jR.T)(nR)), (0, rR.J)(RR, nR)
      },
      cube: (RR, JR, GR) => {
        let {
          rootUrl: yR,
          files: uR,
          noMipmap: qR,
          luminance: iR
        } = GR;
        const {
          samplingMode: fR
        } = RR.sampler, VR = fR === (0, rR.A)(qR) ? null : () => {
          (0, jR.P)(KR, fR)
        }, KR = new tR.d(yR, JR, null, qR, uR, VR, null, (0, rR.w)(iR));
        KR.coordinatesMode = ZR.c.SKYBOX_MODE, (0, rR.J)(RR, KR)
      },
      canvas: (RR, JR, GR) => {
        let {
          width: yR,
          height: tR,
          mipmaps: qR,
          samplingMode: iR,
          hasAlpha: fR = !1,
          wrap: VR = ZR.c.CLAMP_ADDRESSMODE
        } = GR;
        const KR = new uR.b(JR, {
          width: yR,
          height: tR
        }, RR, qR, iR);
        KR.hasAlpha = fR, KR.wrapU = VR, KR.wrapV = VR;
        const wR = (0, jR.D)(KR);
        return (0, jR.G)(wR, KR), wR
      }
    })
  },
  42716: (RR, JR, GR) => {
    GR.d(JR, {
      b: () => VR,
      e: () => KR,
      i: () => wR
    });
    var yR = GR(42711),
      tR = GR(41586),
      uR = GR(41822),
      ZR = GR(41957),
      qR = GR(42714),
      iR = GR(41951),
      fR = GR(38532);
    class VR extends ZR.e {
      constructor() {
        super(...arguments), this.model = null, this.onGeometryUpdated = (RR, JR) => {
          this.releaseUnlessInstanced(JR)
        }, this.onLinked = null
      }
      link(RR) {
        var JR;
        (0, fR.m)(RR), this.model = RR, null === (JR = this.onLinked) || void 0 === JR || JR.call(this, RR)
      }
      relink() {
        this.release();
        const RR = [];
        for (const tR of Object.values(this._vertexBuffers))
          if (!tR.getIsInstanced()) {
            const {
              byteOffset: JR,
              byteStride: GR,
              type: yR,
              normalized: uR
            } = tR;
            RR.push({
              kind: tR.getKind(),
              data: tR.getData(),
              offset: JR,
              stride: GR,
              components: tR.getSize(),
              glType: yR,
              isNormalized: uR
            })
          } const JR = this._indices.length ? this._indices : null,
          {
            minimum: GR,
            maximum: yR
          } = this.extend;
        this.link(new fR.e(RR, JR, this.getTotalVertices(), new Float64Array(GR.QtR()), new Float64Array(yR.QtR())))
      }
      copy(RR) {
        if (!this.model) return super.copy(RR);
        const JR = new VR(RR, this.jH()),
          GR = this.NuR(void 0, !0);
        GR && JR.setIndices(GR);
        let ZR = !1;
        for (const uR in this._vertexBuffers) {
          const RR = this._vertexBuffers[uR],
            GR = RR.getData();
          if (!GR) continue;
          const qR = RR.getSize(),
            {
              type: iR,
              byteOffset: fR,
              byteStride: VR,
              normalized: KR
            } = RR;
          ZR ||= RR.isUpdatable();
          const wR = RR.getIsInstanced() ? (GR instanceof Array ? 4 * GR.length : GR.byteLength) / VR : this.getTotalVertices(),
            rR = (0, tR.l)(GR, qR, iR, fR, VR, wR, !0),
            eR = {
              updatable: RR.isUpdatable(),
              stride: qR,
              type: iR,
              normalized: KR,
              takeBufferOwnership: !0,
              instanced: RR.getIsInstanced()
            };
          JR.setVerticesBuffer(new yR.c(this.ke(), rR, uR, eR), wR)
        }
        return JR._updatable = ZR, JR._boundingInfo = new uR.c(this.extend.minimum, this.extend.maximum), JR.relink(), JR
      }
      static mergeMeshes(RR, JR, GR, yR, tR, uR) {
        const iR = RR[0].jH(),
          fR = new qR.b(RR[0].name + "_merged", iR),
          KR = new VR(ZR.e.RandomId(), iR, void 0, !1, fR);
        try {
          if (!qR.b.MergeMeshes(RR, JR, GR, fR, tR, uR)) return fR.dispose(), null
        } catch (wR) {
          throw fR.dispose(), wR
        }
        return KR.relink(), fR
      }
      removeVerticesData(RR) {
        this.releaseUnlessInstanced(RR), super.removeVerticesData(RR)
      }
      dispose() {
        this.release(), super.dispose()
      }
      releaseUnlessInstanced(RR) {
        var JR;
        RR && null !== (JR = this.getVertexBuffer(RR)) && void 0 !== JR && JR.getIsInstanced() || this.release()
      }
      release() {
        this.model && ((0, fR.s)(this.model), this.model = null)
      }
    }

    function KR(RR, JR, GR) {
      let yR = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : new qR.b(RR, GR);
      const tR = (0, fR.j)(JR),
        {
          positions: uR,
          normals: KR,
          uvs: wR,
          indices: rR,
          named: eR = {}
        } = JR,
        aR = new iR.c;
      aR.positions = uR, aR.normals = null !== KR && void 0 !== KR ? KR : null, aR.uvs = null !== wR && void 0 !== wR ? wR : null, aR.indices = rR;
      const LR = new VR(ZR.e.RandomId(), GR, aR, !1, yR);
      for (const {
          kind: ZR,
          components: qR
        }
        of tR.vertexAttributes) ZR in eR && yR.setVerticesData(ZR, eR[ZR], !1, qR);
      return LR.link(tR), yR
    }

    function wR(RR, JR, GR) {
      let yR = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
      const tR = new qR.b(RR, GR),
        {
          positions: uR,
          normals: ZR,
          uvs: fR,
          indices: VR
        } = JR;
      return Object.assign(new iR.c, {
        positions: uR,
        normals: ZR,
        uvs: fR,
        indices: VR
      }).applyToMesh(tR, yR), tR
    }
  },
  42704: (RR, JR, GR) => {
    function yR(RR, JR, GR) {
      const yR = JR * JR * 4,
        tR = RR[0].layers,
        uR = tR * (RR.length - 1) + RR[RR.length - 1].layers,
        ZR = new Uint8Array(uR * yR);
      RR.forEach(((JR, GR) => {
        const uR = GR + 1 < RR.length ? Math.min(JR.layers, tR) : JR.layers;
        ZR.set(new Uint8Array(JR.pixels.buffer, JR.pixels.byteOffset, uR * yR), GR * tR * yR)
      }));
      const qR = Math.max(1, Math.min(uR, GR || uR));
      if (qR === uR) return [{
        pixels: ZR,
        layers: uR
      }];
      const iR = [];
      for (let fR = 0; fR < uR; fR += qR) {
        const RR = Math.min(uR, fR + qR);
        iR.push({
          pixels: ZR.slice(fR * yR, RR * yR),
          layers: RR - fR
        })
      }
      return iR
    }
    GR.d(JR, {
      b: () => yR,
      c: () => uR
    });
    const tR = new WeakMap;

    function uR(RR, JR, GR) {
      var yR, uR;
      const ZR = null !== (yR = tR.get(RR)) && void 0 !== yR ? yR : new Map;
      tR.set(RR, ZR);
      const qR = null !== (uR = ZR.get(JR[0])) && void 0 !== uR ? uR : [];
      ZR.set(JR[0], qR);
      const iR = qR.find((RR => RR.urls.length === JR.length && RR.urls.every(((RR, GR) => RR === JR[GR]))));
      if (iR) return iR.built;
      const fR = {
        urls: [...JR],
        built: GR()
      };
      return qR.push(fR), fR.built.catch((() => {
        qR.splice(qR.indexOf(fR), 1)
      })), fR.built
    }
  },
  5836: (RR, JR, GR) => {
    GR.d(JR, {
      c: () => uR,
      f: () => wR,
      g: () => iR,
      i: () => eR,
      j: () => fR,
      k: () => rR
    });
    var yR = GR(5839),
      tR = GR(5844);
    const uR = !1,
      ZR = yR.j.map((RR => {
        const JR = [];
        for (let uR = 1; uR <= RR.reach; uR++) JR.push(tR.l[(0, yR.h)(RR.source, uR)].id);
        const GR = "water" === RR.family;
        return Object.freeze({
          name: RR.kind,
          family: RR.family,
          reach: RR.reach,
          stepTicks: GR ? 5 : 10,
          slopeDistance: GR ? 4 : 2,
          sourceId: tR.l[RR.source].id,
          fallingId: tR.l[(0, yR.d)(RR.source)].id,
          flowingIds: Object.freeze(JR),
          makesSources: GR,
          stillId: tR.l[RR.still].id
        })
      })),
      qR = new Map;
    for (const aR of ZR) qR.set(aR.sourceId, Object.freeze({
      kind: aR,
      state: "source",
      distance: 0
    })), qR.set(aR.fallingId, Object.freeze({
      kind: aR,
      state: "falling",
      distance: 0
    })), aR.flowingIds.forEach(((RR, JR) => {
      qR.set(RR, Object.freeze({
        kind: aR,
        state: "flowing",
        distance: JR + 1
      }))
    }));

    function iR(RR) {
      return ZR.find((JR => JR.name === RR))
    }

    function fR(RR) {
      return null === RR ? void 0 : qR.get(RR)
    }
    const VR = new Uint8Array(65536);
    for (const [aR, LR] of qR) VR[aR] = "source" === LR.state ? 1 : 2;
    const KR = new Map;
    for (const aR of ZR) KR.set(aR.stillId, aR.family);

    function wR(RR) {
      var JR, GR;
      return null !== (JR = null === (GR = fR(RR)) || void 0 === GR ? void 0 : GR.kind.family) && void 0 !== JR ? JR : rR(RR)
    }

    function rR(RR) {
      var JR;
      return null === RR ? null : null !== (JR = KR.get(RR)) && void 0 !== JR ? JR : null
    }
    tR.l.Obsidian.id, tR.l["Messy Stone"].id;

    function eR() {
      let RR = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : function() {
        let RR = 0;
        for (const JR of ZR) RR = Math.max(RR, JR.stillId, JR.sourceId, JR.fallingId, ...JR.flowingIds);
        return RR
      }() + 1;
      const JR = new Uint8Array(RR);
      for (const GR of ZR) {
        const yR = ("water" === GR.family ? 1 : 2) << 4;
        for (const tR of [GR.stillId, GR.sourceId, GR.fallingId, ...GR.flowingIds]) tR < RR && (JR[tR] = yR)
      }
      return JR
    }
  }
};
Object.freeze(modules);
for (const RR in modules) Object.freeze(modules[RR]);