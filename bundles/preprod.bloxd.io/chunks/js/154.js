export const id = 154;
export const ids = [154];
export const modules = {
  38757: (qq, Eq, gq) => {
    var Yq = {
      "./cape_cow_cream.png": 28352,
      "./cape_cow_normal.png": 28360,
      "./cape_creator_level1.png": 28369,
      "./cape_creator_level2.png": 28371,
      "./cape_creator_level3.png": 28377,
      "./cape_none.png": 28385,
      "./cape_pig.png": 28390,
      "./cape_sheep.png": 28392,
      "./cape_super.png": 28394,
      "./cape_super_inverted.png": 28399,
      "./cape_youtuber.png": 28404
    };

    function lq(qq) {
      var Eq = Oq(qq);
      return gq(Eq)
    }

    function Oq(qq) {
      if (!gq.o(Yq, qq)) {
        var Eq = new Error("Cannot find module '" + qq + "'");
        throw Eq.code = "MODULE_NOT_FOUND", Eq
      }
      return Yq[qq]
    }
    lq.keys = function() {
      return Object.keys(Yq)
    }, lq.resolve = Oq, qq.exports = lq, lq.id = 38757
  },
  40917: (qq, Eq, gq) => {
    gq.r(Eq), gq.d(Eq, {
      openCharacterPreview: () => Xq
    });
    var Yq = gq(38074),
      lq = gq(2668),
      Oq = gq(576),
      mq = gq(37195),
      xq = gq(2189),
      Aq = gq(37183),
      cq = gq(39585),
      uq = gq(39833),
      Bq = gq(40832),
      Wq = gq(37131),
      Nq = gq(39988),
      aq = gq(37286),
      Vq = gq(40003),
      dq = gq(40883),
      jq = gq(37125),
      Hq = gq(1214),
      oq = gq(2182),
      Pq = gq(37257),
      Qq = gq(37340);
    class yq {
      constructor(qq, Eq) {
        this.pose = qq, this.nodes = void 0, this.nodes = qq.boneNames.map((qq => Eq.get(qq)))
      }
      write(qq) {
        this.pose.pose(qq);
        const {
          rotations: Eq
        } = this.pose;
        for (let gq = 0; gq < this.nodes.length; gq++) {
          const qq = 4 * gq;
          this.nodes[gq].rotationQuaternion.set(Eq[qq], Eq[qq + 1], Eq[qq + 2], Eq[qq + 3])
        }
      }
    }

    function tq(qq) {
      qq.unfreezeWorldMatrix();
      for (const Eq of qq.getChildren()) tq(Eq)
    }

    function rq(qq, Eq) {
      qq.isVisible = Eq;
      for (const gq of qq.getChildMeshes()) gq.isVisible = Eq
    }
    class vq {
      constructor(qq, Eq, gq) {
        this.PV = qq, this.thinInstMgr = Eq, this.KJ = gq, this.modelCache = {}, this.attachmentsByType = {}, this.shownBones = [], this.cosmeticNames = {}
      }
      loadModel(qq, Eq, gq) {
        const Yq = (0, Pq.g)(qq, Eq);
        return Yq in this.modelCache || (this.modelCache[Yq] = (async () => {
          try {
            const Yq = await (0, Pq.j)(qq, this.PV),
              lq = new Map;
            for (const qq of Yq.getNodes()) lq.set(qq.name, qq);
            const Oq = (0, Pq.c)(null !== Eq && void 0 !== Eq ? Eq : qq, this.PV);
            (0, Pq.n)(Yq, Oq, {
              keepTransforms: void 0 !== gq,
              onProcessedMesh: qq => {
                (0, Pq.p)(qq), this.PV.ZYq(qq, !1), qq.isVisible = !1
              }
            });
            for (const qq of Yq.rootNodes) tq(qq);
            const mq = void 0 === gq ? null : (0, Qq.c)(gq, (qq => {
              var Eq, gq;
              return null !== (Eq = null === (gq = lq.get(qq)) || void 0 === gq ? void 0 : gq.rotationQuaternion) && void 0 !== Eq ? Eq : null
            }));
            return {
              nodesByName: lq,
              bones: null === mq ? null : new yq(mq, lq)
            }
          } catch (lq) {
            throw delete this.modelCache[Yq], console.error(`Failed to load preview attachment ${Yq}:`, lq), lq
          }
        })()), this.modelCache[Yq]
      }
      async update(qq, Eq) {
        var gq;
        const {
          thinInstMgr: Yq,
          KJ: lq
        } = this;
        this.cosmeticNames[qq] = Eq;
        const Oq = this.attachmentsByType[qq];
        if (Oq)
          for (const {
              mesh: xq,
              destNode: Aq,
              bones: cq
            }
            of Oq) {
            null !== cq && (0, Hq.vb)(this.shownBones, cq), rq(xq, !1);
            const qq = Yq.getNamedNode(lq, Aq);
            Yq.detachTransformNodeIfFound(xq, lq, qq)
          }
        this.attachmentsByType[qq] = [];
        const mq = (0, oq.l)(qq, Eq);
        if (null !== mq && void 0 !== mq && null !== (gq = mq.attachments) && void 0 !== gq && gq.length)
          for (const xq of mq.attachments) {
            let gq;
            try {
              gq = await this.loadModel(xq.modelGlb, xq.texture, xq.animation)
            } catch {
              continue
            }
            if (this.cosmeticNames[qq] !== Eq) return;
            const Oq = gq.nodesByName.get(xq.modelNode);
            if (!Oq) {
              console.error(`Preview attachment node ${xq.modelNode} not found in ${xq.modelGlb}`);
              continue
            }
            rq(Oq, !0), (0, Pq.x)(Oq, xq.overlayColour);
            const mq = Yq.getNamedNode(lq, xq.destNode);
            Yq.attachTransformNode(Oq, lq, mq), this.attachmentsByType[qq].push({
              mesh: Oq,
              destNode: xq.destNode,
              bones: gq.bones
            }), null !== gq.bones && this.shownBones.push(gq.bones)
          }
      }
      writePoses(qq) {
        for (const Eq of this.shownBones) Eq.write(qq)
      }
    }
    var hq = gq(37203),
      nq = (gq(40860), gq(40236), gq(40862), gq(9321));
    let bq, iq, Zq, fq, Mq, Tq, zq, Sq, pq, Gq;
    const Lq = document.createElement("canvas");
    async function Jq() {
      await new Promise((qq => {
        setTimeout((() => {
          qq()
        }), 100)
      }))
    }
    Lq.classList.add("CharCustomisationPreviewCanvas");
    const kq = {};

    function Rq(qq, Eq) {
      Lq.width = qq, Lq.height = Eq, bq.resize()
    }
    let Uq = 0;
    class Fq {
      constructor(qq, Eq) {
        this.framing = Eq, this.ready = Gq, this.dev = {
          canvas: () => Lq,
          isolateHead(qq) {
            const Eq = Tq.getNodeNames(zq);
            for (let gq = 0; gq < Eq.length; gq++) "HeadMesh" !== Eq[gq] && "__root__" !== Eq[gq] && "TorsoNode" !== Eq[gq] && Tq.setNodeEnabled(zq, gq, !1);
            if (qq) {
              const qq = Tq.getNamedNode(zq, "HeadMesh");
              Tq.setNodeDisableColorWrite(zq, qq, !0, (qq => {
                const Eq = new Vq.StandardMaterial(`${qq.name}_depthOnly`, qq.ZJ());
                return Eq.disableColorWrite = !0, Eq
              }))
            }
            Tq.setPosition(zq, 0, -12, 0)
          }
        }, this.closed = !1, this.resetCamera();
        const gq = qq.getBoundingClientRect();
        Rq(gq.width, gq.height), Uq++, bq.stopRenderLoop(), bq.runRenderLoop((() => {
          var qq, Eq;
          null === (qq = Sq) || void 0 === qq || qq.render(bq.getDeltaTime()), null === (Eq = pq) || void 0 === Eq || Eq.writePoses(performance.now() / 1e3), Zq.render()
        }))
      }
      isReady() {
        return !!fq
      }
      setCosmetic(qq, Eq) {
        ! function(qq, Eq) {
          if (!fq) return;
          const mq = (0, lq.e)();
          mq.uL(!1), Yq.d.Player.meshApi.updatePlayerCosmetic(mq.oR, zq, qq, Eq, !0), "cape" === qq && (Eq === Oq.f ? Mq.hG(!1) : (Mq.hG(!0), Mq.material.diffuseTexture = new dq.d(gq(38757)(`./cape_${Eq}.png`), Mq.ZJ(), {
            invertY: !1,
            samplingMode: dq.d.NEAREST_NEAREST_MIPLINEAR
          })));
          kq[qq] = pq.update(qq, Eq)
        }(qq, Eq)
      }
      playEmote(qq) {
        if (!Sq) return;
        if (!qq) return void Sq.stopAnimation(Aq.g.Emote);
        const Eq = (0, mq.g)((0, xq.i)(qq).animation);
        Sq.startAnimation(Eq, Aq.g.Emote, 0, xq.e)
      }
      async untilDrawn(qq) {
        if (await Jq(), "cape" === qq && Mq) {
          const qq = Mq.material,
            Eq = null === qq || void 0 === qq ? void 0 : qq.diffuseTexture;
          Eq && !Eq.isReady() && (await new Promise((qq => {
            Eq.onLoadObservable.addOnce((() => {
              qq()
            }))
          })), await Jq())
        }
        kq[qq] && (await kq[qq], await Jq()), await Zq.whenReadyAsync(), await new Promise((qq => {
          Zq.onAfterRenderObservable.addOnce((() => {
            qq()
          }))
        }))
      }
      setOrbit(qq) {
        sq(qq)
      }
      resetCamera() {
        iq.inertialAlphaOffset = 0, iq.inertialBetaOffset = 0, iq.inertialRadiusOffset = 0, sq(nq.c[this.framing])
      }
      resize(qq, Eq) {
        Rq(qq, Eq)
      }
      close() {
        this.closed || (this.closed = !0, Uq--, 0 === Uq && bq.stopRenderLoop())
      }
    }

    function sq(qq) {
      let {
        yaw: Eq,
        pitch: gq,
        radius: Yq,
        target: lq
      } = qq;
      iq.alpha = Eq, iq.beta = gq, Yq && (iq.radius = Yq), lq && iq.target.set(lq[0], lq[1], lq[2])
    }

    function Xq(qq, Eq) {
      return qq.appendChild(Lq), bq || function() {
        bq = new cq.b(Lq, !0, {
          preserveDrawingBuffer: !0
        });
        const qq = (0, lq.e)();
        bq.vYq = qq.Ma.engine.vYq, Zq = new uq.e(bq), Zq.clearColor = new aq.e(0, 0, 0, 0), Zq.ambientColor = new aq.Color3(1, 1, 1), iq = new Bq.b("td", 0, 0, 1, Wq.Na.Zero(), Zq), iq.attachControl(Lq, !0), iq.panningSensibility = 0, Gq = (0, Yq.u)("Player", Zq, !0).then((Eq => {
          fq = Eq.meshApi, Mq = Eq.capeMesh, Tq = qq.Ma.LJ;
          const gq = 8.33;
          zq = (0, Yq.j)("Player", gq, !0, !0), Tq.setPosition(zq, 0, -8.33, 0);
          const lq = Tq.getNamedNode(zq, "BodyMesh");
          Tq.attachTransformNode(Mq, zq, lq), Tq.set(zq, "aOpacity", 1), Tq.vR(zq, "aOpacity", 1), pq = new vq(Zq, Tq, zq), Sq = new jq.AnimatorState, Sq.wB = qq, Sq.thinInstMgr = Tq, Sq.KJ = zq, Sq.egq = Tq.hYq(zq, 0), Sq.modelLifeformType = "Player", Sq.nodeNameAliases = (0, hq.e)("Player").nodeNameAliases;
          const Oq = Mq.yR().boundingBox;
          Mq.position.y = ((24 - Oq.maximum.y + Oq.minimum.y) / 2 - 1 / 32) / gq, Mq.position.z = -1 / gq, Mq.rotationQuaternion = null;
          const mq = Math.PI / 18,
            xq = Oq.maximum.y / gq;
          Mq.rotation.x = mq;
          const Aq = Math.cos(mq),
            cq = Math.sin(mq);
          Mq.position.y += xq * (1 - Aq) + 0 * cq, Mq.position.z -= xq * cq + 0 * (1 - Aq);
          const uq = new Vq.StandardMaterial("capeMaterial", Mq.ZJ());
          Mq.material = uq;
          const Bq = new aq.Color3(1, 1, 1);
          uq.diffuseColor = new aq.Color3, uq.specularColor = new aq.Color3, uq.emissiveColor = new aq.Color3, uq.ambientColor = new aq.Color3, Bq.scaleToRef(.43, uq.diffuseColor), Bq.scaleToRef(1.75, uq.ambientColor), uq.freeze();
          const dq = new Nq.d("light", new Wq.Na(-.1, 1, -.3), Zq);
          dq.diffuse = new aq.Color3(1, 1, 1), dq.specular = new aq.Color3(1, 1, 1), dq.groundColor = new aq.Color3(.5, .5, .5)
        }))
      }(), new Fq(qq, Eq)
    }
  },
  38755: (qq, Eq, gq) => {
    gq.d(Eq, {
      d: () => Wq
    });
    var Yq = gq(37212),
      lq = gq(37228),
      Oq = gq(37443),
      mq = gq(37230),
      xq = gq(37220);

    function Aq(qq) {
      return `\n\t\t\t\t${(0,xq.t)(qq,"mat2","rotate",[{name:"ang",type:"float"}],`\
      n\ t\ t\ t\ t\ t$ {
        (0, xq.B)(qq, "float", "s", "sin(ang)")
      }\
      n\ t\ t\ t\ t\ t$ {
        (0, xq.B)(qq, "float", "c", "cos(ang)")
      }\
      n\ t\ t\ t\ t\ treturn $ {
        (0, xq.n)(qq, "mat2", "c", "s", "-s", "c")
      };\
      n\ t\ t\ t\ t`)}\n\t\t\t`
    }

    function cq(qq, Eq) {
      let gq = (0, xq.Eb)(qq, "skele" + (Eq - 1));
      for (let lq = Eq - 2; lq >= 0; lq--) gq = (0, xq.tb)(qq, `boneIdx == ${lq}`, (0, xq.Eb)(qq, `skele${lq}`), gq);
      const Yq = "bone.yz + rotate(bone.x) * pivot - pivot";
      return `\n\t\t\t\t${(0,xq.B)(qq,"int","boneIdx",(0,xq.xb)(qq,"BLOXD_CAPE_MAX_Y - positionUpdated.y"))}\n\t\t\t\t${(0,xq.B)(qq,"vec3","bone",gq)}\n\t\t\t\t${(0,xq.B)(qq,"vec2","pivot",(0,xq.n)(qq,"vec2","0.0",`${(0,xq.Ib)(qq,"position")}.z`))}\n\t\t\t\t${(0,xq.ab)(qq)?`positionUpdated = vec3f(positionUpdated.x, positionUpdated.yz + (${Yq}));`:`positionUpdated.yz += ${Yq};`}\n\t\t`
    }

    function uq(qq) {
      return `\n\t\t\t\t#ifdef NORMAL\n\t\t\t\tnormalUpdated = ${(0,xq.n)(qq,"vec3","normalUpdated.x","rotate(bone.x) * normalUpdated.yz")};\n\t\t\t\t#endif\n\t\t`
    }
    const Bq = {
        x: 0,
        y: 0,
        z: 0,
        ogq(qq, Eq) {
          return this.x = qq[Eq], this.y = qq[Eq + 1], this.z = qq[Eq + 2], this
        }
      },
      Wq = {
        name: "Cape",
        className: "CapeMaterialPlugin",
        priority: 200,
        defines: (qq, Eq) => ({
          ...(0, Yq.b)("CAPE"),
          BLOXD_CAPE_BONES: `${qq}`,
          BLOXD_CAPE_MAX_Y: (0, lq.ob)(Eq)
        }),
        getUniforms(qq) {
          return (0, Oq.c)(function(qq) {
            const Eq = [];
            for (let gq = 0; gq < qq; gq++) Eq.push({
              name: `skele${gq}`,
              type: "highp vec3"
            });
            return Eq
          }(this.skeleLen), "vertex", qq)
        },
        bind(qq) {
          for (let Eq = 0; Eq < this.skeleLen; Eq++) qq.updateVector3(`skele${Eq}`, Bq.ogq(this.skele, 3 * Eq))
        },
        uniformsVersion() {
          return this.bonesVersion
        },
        getCustomCode(qq, Eq) {
          return "vertex" !== qq ? null : {
            CUSTOM_VERTEX_DEFINITIONS: Aq(Eq),
            CUSTOM_VERTEX_UPDATE_POSITION: cq(Eq, this.skeleLen),
            CUSTOM_VERTEX_UPDATE_NORMAL: uq(Eq)
          }
        }
      };
    (0, mq.n)(Wq)
  },
  38662: (qq, Eq, gq) => {
    gq.d(Eq, {
      d: () => uq,
      e: () => Bq
    });
    var Yq = gq(37212),
      lq = gq(37443),
      Oq = gq(37220),
      mq = gq(37230);
    const xq = "bloxdTextLodBias",
      Aq = [{
        name: xq,
        type: "float"
      }],
      cq = "bloxdTextSample",
      uq = {
        planes: -.5,
        boards: -.5
      },
      Bq = {
        name: "TextSampler",
        className: "TextSamplerMaterialPlugin",
        priority: 60,
        defines: () => (0, Yq.b)("TEXT_SAMPLER"),
        getUniforms: qq => (0, lq.c)(Aq, "fragment", qq),
        bind(qq) {
          qq.updateFloat(xq, this.lodBias)
        },
        uniformsVersion: () => 0,
        getCustomCode(qq, Eq) {
          if ("fragment" !== qq) return null;
          const gq = (0, Oq.I)(Eq, `vec4 ${cq}(sampler2D s, vec2 uv, float bias)`, `fn ${cq}(t: texture_2d<f32>, ts: sampler, uv: vec2f, bias: f32) -> vec4f`),
            Yq = (0, Oq.I)(Eq, "texture2D(s, uv, bias)", "textureSampleBias(t, ts, uv, bias)"),
            lq = `${(0,Oq.U)(Eq,"vDiffuseUV")} + uvOffset`,
            mq = (0, Oq.I)(Eq, `${cq}(diffuseSampler, ${lq}, ${(0,Oq.Eb)(Eq,xq)})`, `${cq}(diffuseSampler, diffuseSamplerSampler, ${lq}, ${(0,Oq.Eb)(Eq,xq)})`);
          return {
            CUSTOM_FRAGMENT_DEFINITIONS: `\n\t\t\t\t${gq} {\n\t\t\t\t\t${(0,Oq.B)(Eq,"vec4","texel",Yq)}\n\t\t\t\t\t// 8-bit premultiplied rounding can put the quotient just over 1; only alpha 0 hits the floor,\n\t\t\t\t\t// where the colour is 0 anyway.\n\t\t\t\t\treturn ${(0,Oq.n)(Eq,"vec4",`clamp(texel.rgb / max(texel.a, 1.0 / 255.0), ${(0,Oq.n)(Eq,"vec3","0.0")}, ${(0,Oq.n)(Eq,"vec3","1.0")})`,"texel.a")};\n\t\t\t\t}\n\t\t\t`,
            [(0, Oq.C)(Eq)]: `baseColor = ${mq};`
          }
        }
      };
    (0, mq.n)(Bq)
  },
  40862: (qq, Eq, gq) => {
    gq.r(Eq), gq.d(Eq, {
      CapeMaterialPlugin: () => Pq,
      HueTintMaterialPlugin: () => Qq,
      LifeformMaterialPlugin: () => yq,
      OverlayMaterialPlugin: () => tq
    });
    var Yq = gq(40869),
      lq = gq(37987);
    class Oq extends((0, Yq.h)(lq.c)) {}(0, Yq.i)(lq.c, Oq);
    var mq = gq(37206);
    class xq extends((0, Yq.h)(mq.h)) {}(0, Yq.i)(mq.h, xq);
    var Aq = gq(37828);
    class cq extends((0, Yq.h)(Aq.e)) {}(0, Yq.i)(Aq.e, cq);
    var uq = gq(37429),
      Bq = gq(40003),
      Wq = gq(37421);
    class Nq extends((0, Yq.h)(Wq.f)) {
      constructor(qq, Eq, gq) {
        super(qq, Eq, gq), (0, uq.l)(qq)
      }
      dispose(qq) {
        (0, uq.n)(this._material), super.dispose(qq)
      }
    }(0, Yq.i)(Wq.f, Nq), (0, Wq.i)({
      disableUnusedSpecularTerm: Yq.e,
      isLightingDisabled: qq => qq instanceof Bq.StandardMaterial && qq.disableLighting
    });
    var aq = gq(38662);
    class Vq extends((0, Yq.h)(aq.e)) {}(0, Yq.i)(aq.e, Vq);
    var dq = gq(38755),
      jq = gq(37295),
      Hq = gq(38114),
      oq = gq(37253);
    class Pq extends((0, Yq.h)(dq.d)) {}(0, Yq.i)(dq.d, Pq);
    class Qq extends((0, Yq.h)(jq.d)) {}(0, Yq.i)(jq.d, Qq);
    class yq extends((0, Yq.h)(Hq.l)) {}(0, Yq.i)(Hq.l, yq);
    class tq extends((0, Yq.h)(oq.e)) {}(0, Yq.i)(oq.e, tq)
  },
  40869: (qq, Eq, gq) => {
    gq.d(Eq, {
      e: () => Jq,
      h: () => Hq,
      i: () => Xq
    });
    var Yq = gq(40003),
      lq = gq(40878),
      Oq = gq(40910),
      mq = gq(40883),
      xq = gq(37803),
      Aq = gq(37815),
      cq = gq(37818),
      uq = gq(37821),
      Bq = gq(37242),
      Wq = gq(37244),
      Nq = gq(40889),
      aq = gq(37230),
      Vq = gq(37233),
      dq = gq(37220);

    function jq(qq, Eq) {
      return Object.assign((function(qq, gq, Yq, lq) {
        return Eq(this.featureState, qq, gq, Yq, lq)
      }), {
        LN: qq
      })
    }

    function Hq(qq) {
      const Eq = class extends Nq.d {
          constructor(Eq, gq) {
            const Yq = (0, Vq.T)(Eq),
              lq = Yq && (0, Vq.u)(Yq, qq.name);
            for (var Oq = arguments.length, mq = new Array(Oq > 2 ? Oq - 2 : 0), xq = 2; xq < Oq; xq++) mq[xq - 2] = arguments[xq];
            super(Eq, qq.name, qq.priority, lq ? lq.defines : qq.defines(...mq), !1), this.featureState = void 0, this.featureState = gq, this._pluginManager._addPlugin(this), this._enable(!0), (0, Vq.w)(this._material, qq, this.featureState, this._pluginDefineNames)
          }
          getClassName() {
            return qq.className
          }
          isCompatible(qq) {
            return qq === dq.d.GLSL || qq === dq.d.WGSL
          }
        },
        gq = (0, aq.k)(qq);
      for (const [Yq, lq] of Object.entries(aq.d)) {
        const Oq = qq[Yq];
        if (Oq) {
          const qq = gq[Yq];
          Object.defineProperty(Eq.prototype, lq, {
            value: jq(Oq, qq),
            writable: !0,
            configurable: !0
          })
        }
      }
      return Eq
    }
    class oq extends(Hq(xq.e)) {}
    var Pq = gq(39585),
      Qq = gq(40898);
    const yq = new WeakMap;

    function tq(qq, Eq, gq) {
      let Yq = yq.get(gq);
      Yq || (Yq = new Map, yq.set(gq, Yq));
      const {
        url: lq
      } = qq;
      let Oq = Yq.get(lq);
      return Oq || (Oq = async function(qq, Eq, gq) {
        const {
          width: Yq,
          height: lq
        } = qq.getSize(), Oq = Math.round(lq / Yq), xq = Eq && Eq.byteLength === Yq * Yq * Oq * 4 ? Eq : qq._readPixelsSync();
        return new Qq.c(xq, Yq, Yq, Oq, Pq.b.TEXTUREFORMAT_RGBA, gq, !0, !1, mq.d.NEAREST_NEAREST_MIPLINEAR)
      }(qq, Eq, gq), Yq.set(lq, Oq), Oq.catch((() => {
        Yq.delete(lq)
      }))), Oq
    }
    var rq = gq(37823);
    class vq extends(Hq(Aq.j)) {
      constructor(qq, Eq) {
        super(qq, Eq), Eq.textures.forEach(((qq, Eq) => {
          qq.mirror.onLoadObservable.add((qq => {
            this.setTextureArrayData(qq, Eq).catch((qq => {
              console.error(`Failed to build texture array for atlas ${Eq}`, qq)
            }))
          }))
        })), (0, rq.h)(Eq, qq.shaderLanguage)
      }
      async setTextureArrayData(qq, Eq) {
        var gq, Yq;
        const lq = this.featureState,
          {
            width: Oq,
            height: mq
          } = qq.getSize(),
          xq = lq.useWebGL2 ? await tq(qq, null !== (gq = null === (Yq = lq.sources.pixels) || void 0 === Yq ? void 0 : Yq[Eq]) && void 0 !== gq ? gq : null, this._material.ZJ()) : null;
        (0, rq.e)(this._material, lq, Eq, xq, Oq, Math.round(mq / Oq), this._material.shaderLanguage)
      }
    }
    var hq = gq(40901),
      nq = gq(40055),
      bq = gq(37131),
      iq = gq(40905),
      Zq = gq(40176),
      fq = gq(40040),
      Mq = gq(40857),
      Tq = gq(37586),
      zq = gq(40908);
    class Sq extends hq.e {
      getData() {
        return null
      }
      _rebuild() {}
      restore() {
        super._rebuild()
      }
    }
    const pq = {
      Mesh: iq.c,
      TransformNode: Mq.e,
      IN: hq.e,
      VertexBuffer: hq.f,
      BoundingInfo: nq.d,
      Na: bq.Na,
      ArenaBuffer: Sq,
      SubMesh: fq.c,
      VertexData: Zq.d,
      MirroredGeometry: zq.b,
      meshFromArrays: zq.f,
      plainMeshFromArrays: zq.i
    };
    (0, Tq.e)(pq);
    var Gq = gq(37429);
    class Lq extends(Hq(uq.g)) {
      constructor(qq, Eq) {
        if (super(qq, Eq), qq instanceof Yq.StandardMaterial && Eq.dirLightCount > 0) {
          const Eq = qq,
            gq = Eq._blockDirtyMechanism;
          Eq._blockDirtyMechanism = !0, qq.disableLighting = !0, Eq._blockDirtyMechanism = gq;
          const Yq = (0, Vq.T)(qq);
          Yq && (Yq.disableLighting = !0, (0, Vq.Q)(Yq))
        }(0, Gq.l)(qq)
      }
      dispose(qq) {
        (0, Gq.n)(this._material), super.dispose(qq)
      }
    }

    function Jq(qq, Eq) {
      if (!(Eq instanceof Yq.StandardMaterial) || Eq.specularTexture) return;
      const {
        r: gq,
        g: lq,
        b: Oq
      } = Eq.specularColor;
      0 === gq && 0 === lq && 0 === Oq && (qq.SPECULARTERM = !1)
    }(0, uq.c)({
      disableUnusedSpecularTerm: Jq
    });
    var kq = gq(37313),
      Rq = gq(37601);
    const Uq = new RegExp(`^#define ${cq.c}\\s*$`, "m");
    class Fq extends(Hq(cq.j)) {
      constructor(qq, Eq) {
        super(qq, Eq), this.eN = !1, Eq.ditherOnlyWhileFading && (Rq.g.add(qq), this.prewarmDitherTwins(qq))
      }
      prewarmDitherTwins(qq) {
        const Eq = new WeakSet;
        qq.onEffectCreatedObservable.add((gq => {
          let {
            effect: Yq,
            subMesh: lq
          } = gq;
          if (this.featureState.prewarmingDither || Eq.has(Yq)) return;
          Eq.add(Yq);
          const Oq = null === lq || void 0 === lq ? void 0 : lq.getMesh();
          Oq && !Uq.test(Yq.defines) && qq.ZJ().onAfterRenderObservable.addOnce((() => {
            this.prewarmDither(Oq) || Eq.delete(Yq)
          }))
        }))
      }
      prewarmDither(qq) {
        if (this.eN || qq.bM()) return !1;
        const Eq = new fq.c(0, 0, 0, 0, 0, qq, void 0, !1, !1);
        this.featureState.prewarmingDither = !0;
        try {
          this._material.isReadyForSubMesh(qq, Eq)
        } finally {
          this.featureState.prewarmingDither = !1
        }
        return null !== Eq.effect
      }
      dispose(qq) {
        this.eN = !0, super.dispose(qq)
      }
    }
    const sq = new Map;

    function Xq(qq, Eq) {
      sq.set(qq, Eq)
    }
    Xq(xq.e, oq), Xq(Aq.j, vq), Xq(cq.j, Fq), Xq(uq.g, Lq), (0, Bq.e)({
      create: (qq, Eq) => {
        const gq = new Yq.StandardMaterial(qq.name, Eq);
        return (0, kq.t)(qq, gq), gq.detailMap._pluginDefineNames
      },
      write: (qq, Eq, gq) => {
        (0, kq.W)(qq.mirror, Eq, gq)
      },
      addFeature: (qq, Eq, gq) => {
        const Yq = sq.get(Eq.feature);
        if (!Yq) throw new Error(`${Eq.feature.name} has no plugin class (registerPluginClass)`);
        new Yq(qq.mirror, Eq.state, ...gq)
      },
      texture: (qq, Eq, gq) => {
        let {
          url: Yq,
          noMipmap: lq,
          invertY: Oq,
          samplingMode: xq,
          data: Aq,
          sets: cq
        } = gq;
        if (!Aq) {
          const gq = new mq.d(Yq, Eq, lq, Oq, xq);
          return Object.assign(gq, cq), void(0, Wq.B)(qq, gq)
        }
        const uq = {},
          Bq = new Promise(((qq, Eq) => {
            uq.onLoad = qq, uq.onError = (qq, gq) => {
              Eq(new Error(`${Aq.context}: ${(null===gq||void 0===gq?void 0:gq.message)||qq||"Failed to load texture"}`))
            }
          })),
          {
            mimeType: Nq,
            bytes: aq,
            label: Vq
          } = Aq,
          dq = {
            noMipmap: lq,
            invertY: !1,
            samplingMode: xq,
            ...uq,
            mimeType: Nq,
            loaderOptions: void 0,
            useSRGBBuffer: !1
          },
          jq = new mq.d(null, Eq, dq);
        kq.v.set(jq, Bq), Object.assign(jq, cq), jq.updateURL(Yq, aq);
        const Hq = jq.getInternalTexture();
        Hq && (Hq.label = Vq), qq.uvSet = jq.coordinatesIndex, qq.matrix.set((0, kq.R)(jq)), (0, Wq.B)(qq, jq)
      },
      cube: (qq, Eq, gq) => {
        let {
          rootUrl: Yq,
          files: Oq,
          noMipmap: xq,
          luminance: Aq
        } = gq;
        const {
          samplingMode: cq
        } = qq.sampler, uq = cq === (0, Wq.v)(xq) ? null : () => {
          (0, kq.Q)(Bq, cq)
        }, Bq = new lq.e(Yq, Eq, null, xq, Oq, uq, null, (0, Wq.u)(Aq));
        Bq.coordinatesMode = mq.d.SKYBOX_MODE, (0, Wq.B)(qq, Bq)
      },
      canvas: (qq, Eq, gq) => {
        let {
          width: Yq,
          height: lq,
          mipmaps: xq,
          samplingMode: Aq,
          hasAlpha: cq = !1,
          wrap: uq = mq.d.CLAMP_ADDRESSMODE
        } = gq;
        const Bq = new Oq.e(Eq, {
          width: Yq,
          height: lq
        }, qq, xq, Aq);
        Bq.hasAlpha = cq, Bq.wrapU = uq, Bq.wrapV = uq;
        const Wq = (0, kq.F)(Bq);
        return (0, kq.H)(Wq, Bq), Wq
      }
    })
  },
  40908: (qq, Eq, gq) => {
    gq.d(Eq, {
      b: () => uq,
      f: () => Bq,
      i: () => Wq
    });
    var Yq = gq(40901),
      lq = gq(39817),
      Oq = gq(40055),
      mq = gq(40180),
      xq = gq(40905),
      Aq = gq(40176),
      cq = gq(37481);
    class uq extends mq.d {
      constructor() {
        super(...arguments), this.model = null, this.onGeometryUpdated = (qq, Eq) => {
          this.releaseUnlessInstanced(Eq)
        }, this.onLinked = null
      }
      link(qq) {
        var Eq;
        (0, cq.q)(qq), this.model = qq, null === (Eq = this.onLinked) || void 0 === Eq || Eq.call(this, qq)
      }
      relink() {
        this.release();
        const qq = [];
        for (const lq of Object.values(this._vertexBuffers))
          if (!lq.getIsInstanced()) {
            const {
              byteOffset: Eq,
              byteStride: gq,
              type: Yq,
              normalized: Oq
            } = lq;
            qq.push({
              kind: lq.getKind(),
              data: lq.getData(),
              offset: Eq,
              stride: gq,
              components: lq.getSize(),
              glType: Yq,
              isNormalized: Oq
            })
          } const Eq = this._indices.length ? this._indices : null,
          {
            minimum: gq,
            maximum: Yq
          } = this.extend;
        this.link(new cq.h(qq, Eq, this.getTotalVertices(), new Float64Array(gq.bYq()), new Float64Array(Yq.bYq())))
      }
      copy(qq) {
        if (!this.model) return super.copy(qq);
        const Eq = new uq(qq, this.ZJ()),
          gq = this.iYq(void 0, !0);
        gq && Eq.setIndices(gq);
        let mq = !1;
        for (const Oq in this._vertexBuffers) {
          const qq = this._vertexBuffers[Oq],
            gq = qq.getData();
          if (!gq) continue;
          const xq = qq.getSize(),
            {
              type: Aq,
              byteOffset: cq,
              byteStride: uq,
              normalized: Bq
            } = qq;
          mq ||= qq.isUpdatable();
          const Wq = qq.getIsInstanced() ? (gq instanceof Array ? 4 * gq.length : gq.byteLength) / uq : this.getTotalVertices(),
            Nq = (0, lq.r)(gq, xq, Aq, cq, uq, Wq, !0),
            aq = {
              updatable: qq.isUpdatable(),
              stride: xq,
              type: Aq,
              normalized: Bq,
              takeBufferOwnership: !0,
              instanced: qq.getIsInstanced()
            };
          Eq.setVerticesBuffer(new Yq.f(this.Ba(), Nq, Oq, aq), Wq)
        }
        return Eq._updatable = mq, Eq._boundingInfo = new Oq.d(this.extend.minimum, this.extend.maximum), Eq.relink(), Eq
      }
      static mergeMeshes(qq, Eq, gq, Yq, lq, Oq) {
        const Aq = qq[0].ZJ(),
          cq = new xq.c(qq[0].name + "_merged", Aq),
          Bq = new uq(mq.d.RandomId(), Aq, void 0, !1, cq);
        try {
          if (!xq.c.MergeMeshes(qq, Eq, gq, cq, lq, Oq)) return cq.dispose(), null
        } catch (Wq) {
          throw cq.dispose(), Wq
        }
        return Bq.relink(), cq
      }
      removeVerticesData(qq) {
        this.releaseUnlessInstanced(qq), super.removeVerticesData(qq)
      }
      dispose() {
        this.release(), super.dispose()
      }
      releaseUnlessInstanced(qq) {
        var Eq;
        qq && null !== (Eq = this.getVertexBuffer(qq)) && void 0 !== Eq && Eq.getIsInstanced() || this.release()
      }
      release() {
        this.model && ((0, cq.x)(this.model), this.model = null)
      }
    }

    function Bq(qq, Eq, gq) {
      let Yq = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : new xq.c(qq, gq);
      const lq = (0, cq.n)(Eq),
        {
          positions: Oq,
          normals: Bq,
          uvs: Wq,
          indices: Nq,
          named: aq = {}
        } = Eq,
        Vq = new Aq.d;
      Vq.positions = Oq, Vq.normals = null !== Bq && void 0 !== Bq ? Bq : null, Vq.uvs = null !== Wq && void 0 !== Wq ? Wq : null, Vq.indices = Nq;
      const dq = new uq(mq.d.RandomId(), gq, Vq, !1, Yq);
      for (const {
          kind: mq,
          components: xq
        }
        of lq.vertexAttributes) mq in aq && Yq.setVerticesData(mq, aq[mq], !1, xq);
      return dq.link(lq), Yq
    }

    function Wq(qq, Eq, gq) {
      let Yq = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
      const lq = new xq.c(qq, gq),
        {
          positions: Oq,
          normals: mq,
          uvs: cq,
          indices: uq
        } = Eq;
      return Object.assign(new Aq.d, {
        positions: Oq,
        normals: mq,
        uvs: cq,
        indices: uq
      }).applyToMesh(lq, Yq), lq
    }
  },
  8794: (qq, Eq, gq) => {
    gq.d(Eq, {
      e: () => uq,
      g: () => xq,
      j: () => Aq
    });
    var Yq = gq(2182),
      lq = gq(1226),
      Oq = gq(2189);
    const mq = ",";

    function xq(qq) {
      if (!qq) return [];
      const Eq = new Set,
        gq = [];
      for (const Yq of qq.split(mq)) {
        const qq = Yq.trim();
        if ((0, Oq.k)(qq) && !Eq.has(qq) && (Eq.add(qq), gq.push(qq), gq.length >= lq.o)) break
      }
      return gq
    }

    function Aq(qq) {
      const Eq = new Set,
        gq = [];
      for (const Yq of qq)
        if ((0, Oq.k)(Yq) && !Eq.has(Yq) && (Eq.add(Yq), gq.push(Yq), gq.length >= lq.o)) break;
      return gq.join(mq)
    }

    function cq() {
      return Aq(Oq.f)
    }

    function uq(qq) {
      var Eq;
      return "emote" === qq ? cq() : null !== (Eq = Bq[qq][0]) && void 0 !== Eq ? Eq : Wq[qq]
    }
    const Bq = lq.w.reduce(((qq, Eq) => {
        const gq = [];
        for (const Oq in Yq.f[Eq]) {
          var lq;
          "default" === (null === (lq = (0, Yq.l)(Eq, Oq)) || void 0 === lq ? void 0 : lq.cosmeticPack) && gq.push(Oq)
        }
        return qq[Eq] = gq, qq
      }), {}),
      Wq = lq.w.reduce(((qq, Eq) => (qq[Eq] = Object.keys(Yq.f[Eq])[0], qq)), {})
  }
};
Object.freeze(modules);
for (const qq in modules) Object.freeze(modules[qq]);