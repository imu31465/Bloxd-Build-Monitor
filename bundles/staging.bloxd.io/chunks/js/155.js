export const id = 155;
export const ids = [155];
export const modules = {
  40829: (qq, Eq, gq) => {
    gq.r(Eq), gq.d(Eq, {
      openMobLineupPreview: () => Jq,
      openMobPreview: () => Lq,
      openPetPreview: () => kq
    });
    var Yq = gq(39585),
      lq = gq(39833),
      Oq = gq(40832),
      mq = gq(37286),
      xq = gq(37131),
      Aq = gq(39988),
      cq = gq(40857),
      uq = gq(38455),
      Bq = gq(37203),
      Wq = gq(37183),
      Nq = gq(37125),
      aq = gq(38366),
      Vq = gq(38364),
      dq = gq(38074),
      jq = gq(38130),
      Hq = gq(38102),
      oq = gq(37776),
      Pq = gq(2668),
      Qq = gq(37624);
    gq(40860), gq(40236), gq(40862);
    const yq = 22,
      tq = 13,
      rq = Math.PI - Math.PI / 16,
      vq = 6,
      hq = Math.PI / 4;
    let nq = null;
    const bq = {},
      iq = new Map;

    function Zq() {
      if (null !== nq) return nq;
      const qq = document.createElement("canvas");
      qq.classList.add("MobPreviewCanvas");
      const Eq = new Yq.b(qq, !0, {
        preserveDrawingBuffer: !0
      });
      Eq.vYq = (0, Pq.e)().Ma.engine.vYq;
      const gq = new lq.e(Eq);
      gq.clearColor = new mq.e(0, 0, 0, 0), gq.ambientColor = new mq.Color3(1, 1, 1);
      const cq = new Oq.b("td", Math.PI / 2, Math.PI / 2, yq, xq.Na.Zero(), gq),
        uq = new Aq.d("light", new xq.Na(-.1, 1, -.3), gq);
      return uq.diffuse = new mq.Color3(1, 1, 1), uq.specular = new mq.Color3(1, 1, 1), uq.groundColor = new mq.Color3(.5, .5, .5), nq = {
        engine: Eq,
        PV: gq,
        canvas: qq,
        camera: cq
      }, nq
    }

    function fq(qq) {
      return bq[qq] ??= (0, dq.u)(qq, Zq().PV, !0).catch((Eq => {
        throw delete bq[qq], Eq
      })), bq[qq]
    }

    function Mq(qq) {
      let Eq = iq.get(qq);
      return Eq || (Eq = oq.C[qq].loadModel(Zq().PV, !1).then((qq => (qq.hG(!1), qq)), (Eq => {
        throw iq.delete(qq), Eq
      })), iq.set(qq, Eq)), Eq
    }

    function Tq(qq) {
      var Eq, gq, Yq;
      let {
        mobType: lq,
        variation: Oq,
        animation: mq
      } = qq, Aq = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null, yq = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
      const vq = null !== (Eq = null === Aq || void 0 === Aq ? void 0 : Aq.size) && void 0 !== Eq ? Eq : 1,
        hq = null !== (gq = null === Aq || void 0 === Aq ? void 0 : Aq.cosmetics) && void 0 !== gq ? gq : [],
        nq = null !== (Yq = null === Aq || void 0 === Aq ? void 0 : Aq.aZ) && void 0 !== Yq ? Yq : null;
      let bq = !1,
        iq = null,
        Tq = null;
      const {
        engine: zq,
        PV: Sq
      } = Zq(), pq = Sq.onBeforeRenderObservable.add((() => {
        var qq;
        null === (qq = Tq) || void 0 === qq || qq.render(zq.getDeltaTime())
      })), Gq = null === nq ? null : Mq(nq).catch((qq => (console.error(`Mob preview: could not load ${nq}`, qq), null)));
      return Promise.all([fq(lq), Gq]).then((qq => {
        var Eq, gq, Yq;
        let [Aq, fq] = qq;
        if (bq) return;
        const Mq = (0, Pq.e)().Ma.LJ,
          {
            hitBoxDimensions: zq
          } = (0, uq.c)(lq),
          Sq = tq / Math.max(zq.height, zq.width);
        if (iq = (0, dq.j)(lq, Sq * vq, !0, !0), Mq.setPosition(iq, yq, -zq.height * Sq / 2, 0), Mq.setRotationEulerY(iq, rq), Aq.meshApi instanceof Hq.b && hq.length > 0)
          for (const [lq, Oq] of hq) Aq.meshApi.updatePlayerCosmetic(null, iq, lq, Oq, !0);
        else Aq.meshApi.updateVariation(iq, lq, null !== Oq && void 0 !== Oq ? Oq : "default");
        null !== nq && null !== fq && function(qq, Eq, gq, Yq) {
          var lq;
          const Oq = oq.C[qq],
            mq = (0, aq.k)();
          (0, aq.d)(Oq, null === (lq = (0, jq.e)(gq).meshMetadata.heldItemPositionParams) || void 0 === lq ? void 0 : lq.itemOffset, mq);
          const Aq = Qq.d * mq.rc.y,
            uq = mq.usesQuaternion ? mq.quaternion : xq.Quaternion.FromEulerVector(mq.rotation),
            Bq = new cq.e(`${Eq.name}Hand`, Zq().PV);
          Bq.position.WG((0, Vq.b)(mq.position, uq, Aq, Oq.heldModelOffsetY())), Bq.rotationQuaternion = uq, Bq.rc.set(mq.rc.x, Aq, mq.rc.z), Eq.clone(`${Eq.name}Held`, Bq).hG(!0);
          const Wq = (0, Pq.e)().Ma.LJ;
          Wq.attachTransformNode(Bq, Yq, Wq.getNamedNode(Yq, "ArmRightMesh"))
        }(nq, fq, lq, iq), Mq.set(iq, "aOpacity", 1);
        const pq = null !== (Eq = (0, jq.e)(lq).meshMetadata.lifeformTypeForModelOverride) && void 0 !== Eq ? Eq : lq;
        Tq = new Nq.AnimatorState, Tq.thinInstMgr = Mq, Tq.KJ = iq, Tq.egq = Mq.hYq(iq, 0), Tq.modelLifeformType = pq, Tq.nodeNameAliases = null !== (gq = null === (Yq = (0, Bq.e)(pq)) || void 0 === Yq ? void 0 : Yq.nodeNameAliases) && void 0 !== gq ? gq : null, Tq.startAnimation(mq, Wq.g.Movement)
      })).catch((qq => {
        console.error(`Mob preview: could not load ${lq}`, qq)
      })), () => {
        bq = !0, Sq.onBeforeRenderObservable.remove(pq), null !== iq && (0, Pq.e)().Ma.LJ.delete(iq)
      }
    }

    function zq(qq, Eq) {
      return Tq({
        mobType: "NPC",
        variation: null,
        animation: qq.animation
      }, qq, Eq)
    }

    function Sq(qq) {
      let {
        mobType: Eq,
        variation: gq,
        metaInfo: Yq,
        tamed: lq
      } = qq, Oq = !1, mq = null, xq = 0;
      const Aq = (0, Pq.e)(),
        cq = Aq.Ma.LJ,
        uq = qq => {
          xq += hq * (qq / 1e3) % (2 * Math.PI), cq.setRotationEulerY(mq, xq)
        };
      return fq(Eq).then((qq => {
        if (Oq) return;
        mq = (0, dq.j)(Eq, vq, !0, !0), cq.setPosition(mq, 0, -vq, 0), qq.meshApi.updateVariation(mq, Eq, gq);
        const xq = {
          wool: "Sheared" !== Yq,
          saddle: "Saddled" === Yq,
          antlers: "Antlers" === Yq,
          collar: lq
        };
        for (const [Eq, gq] of Object.entries(xq)) cq.hasGroup(mq, Eq) && qq.meshApi.setMeshGroupVisibility(mq, Eq, gq);
        cq.set(mq, "aOpacity", 1), Aq.on("renderTickBegin", uq)
      })).catch((qq => {
        console.error(`Pet preview: could not load ${Eq}`, qq)
      })), () => {
        Oq = !0, Aq.off("renderTickBegin", uq), null !== mq && cq.delete(mq)
      }
    }
    class pq {
      constructor(qq, Eq) {
        this.place = Eq, this.remove = null;
        const {
          engine: gq,
          PV: Yq,
          canvas: lq
        } = Zq();
        qq.appendChild(lq), gq.resize(), gq.runRenderLoop((() => {
          Yq.render()
        }))
      }
      show(qq) {
        var Eq;
        null === (Eq = this.remove) || void 0 === Eq || Eq.call(this), this.remove = this.place(qq)
      }
      resize(qq, Eq) {
        const {
          engine: gq,
          canvas: Yq
        } = Zq();
        Yq.width = qq, Yq.height = Eq, gq.resize()
      }
      close() {
        var qq;
        Zq().engine.stopRenderLoop(), null === (qq = this.remove) || void 0 === qq || qq.call(this), this.remove = null
      }
    }
    class Gq {
      constructor(qq) {
        this.preview = void 0, this.view = {
          figures: [],
          shown: []
        }, this.aspect = 1, this.placed = [], this.preview = new pq(qq, (() => () => {}))
      }
      show(qq) {
        qq.figures !== this.view.figures && this.preload(qq.figures), this.view = qq, this.place()
      }
      resize(qq, Eq) {
        this.preview.resize(qq, Eq), this.aspect = qq / Eq, this.place()
      }
      close() {
        this.preview.close();
        for (const qq of this.placed) null === qq || void 0 === qq || qq.remove();
        this.placed = []
      }
      preload(qq) {
        const Eq = () => {};
        fq("NPC").catch(Eq);
        for (const {
            aZ: gq
          }
          of qq) null !== gq && Mq(gq).catch(Eq)
      }
      place() {
        const {
          figures: qq,
          shown: Eq
        } = this.view, gq = qq.map(((gq, Yq) => {
          var lq;
          const Oq = null !== (lq = this.placed[Yq]) && void 0 !== lq ? lq : null;
          if (!Eq[Yq]) return null === Oq || void 0 === Oq || Oq.remove(), null;
          const mq = (xq = (Yq + .5) / qq.length, Aq = this.aspect, (.5 - xq) * (2 * yq * Math.tan(Zq().camera.fov / 2)) * Aq);
          var xq, Aq;
          return null !== Oq && Oq.figure === gq && Oq.x === mq ? Oq : (null === Oq || void 0 === Oq || Oq.remove(), {
            figure: gq,
            x: mq,
            remove: zq(gq, mq)
          })
        }));
        for (const Yq of this.placed.slice(qq.length)) null === Yq || void 0 === Yq || Yq.remove();
        this.placed = gq
      }
    }

    function Lq(qq) {
      return new pq(qq, Tq)
    }

    function Jq(qq) {
      return new Gq(qq)
    }

    function kq(qq) {
      return new pq(qq, Sq)
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