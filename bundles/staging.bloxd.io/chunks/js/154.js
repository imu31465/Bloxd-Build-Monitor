export const id = 154;
export const ids = [154];
export const modules = {
  40701: (TT, kT, cT) => {
    cT.r(kT), cT.d(kT, {
      openMobLineupPreview: () => dT,
      openMobPreview: () => XT,
      openPetPreview: () => LT
    });
    var lT = cT(39448),
      MT = cT(39716),
      KT = cT(40703),
      OT = cT(37086),
      yT = cT(36885),
      fT = cT(39868),
      xT = cT(40726),
      IT = cT(38304),
      AT = cT(36976),
      CT = cT(36955),
      jT = cT(36881),
      vT = cT(38214),
      tT = cT(38211),
      hT = cT(37943),
      NT = cT(38e3),
      QT = cT(37969),
      ST = cT(37650),
      DT = cT(2790),
      aT = cT(37474);
    cT(40734), cT(40120), cT(40739);
    const FT = 22,
      rT = 13,
      PT = Math.PI - Math.PI / 16,
      wT = 6,
      mT = Math.PI / 4;
    let bT = null;
    const zT = {},
      JT = new Map;

    function oT() {
      if (null !== bT) return bT;
      const TT = document.createElement("canvas");
      TT.classList.add("MobPreviewCanvas");
      const kT = new lT.d(TT, !0, {
        preserveDrawingBuffer: !0
      });
      kT.QcT = (0, DT.f)().gv.engine.QcT;
      const cT = new MT.c(kT);
      cT.clearColor = new OT.e(0, 0, 0, 0), cT.ambientColor = new OT.Color3(1, 1, 1);
      const xT = new KT.e("Eh", Math.PI / 2, Math.PI / 2, FT, yT.Fv.Zero(), cT),
        IT = new fT.b("light", new yT.Fv(-.1, 1, -.3), cT);
      return IT.diffuse = new OT.Color3(1, 1, 1), IT.specular = new OT.Color3(1, 1, 1), IT.groundColor = new OT.Color3(.5, .5, .5), bT = {
        engine: kT,
        et: cT,
        canvas: TT,
        camera: xT
      }, bT
    }

    function HT(TT) {
      return zT[TT] ??= (0, hT.v)(TT, oT().et, !0).catch((kT => {
        throw delete zT[TT], kT
      })), zT[TT]
    }

    function eT(TT) {
      let kT = JT.get(TT);
      return kT || (kT = ST.x[TT].loadModel(oT().et, !1).then((TT => (TT.PD(!1), TT)), (kT => {
        throw JT.delete(TT), kT
      })), JT.set(TT, kT)), kT
    }

    function GT(TT) {
      var kT, cT, lT;
      let {
        mobType: MT,
        variation: KT,
        animation: OT
      } = TT, fT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null, FT = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
      const wT = null !== (kT = null === fT || void 0 === fT ? void 0 : fT.size) && void 0 !== kT ? kT : 1,
        mT = null !== (cT = null === fT || void 0 === fT ? void 0 : fT.cosmetics) && void 0 !== cT ? cT : [],
        bT = null !== (lT = null === fT || void 0 === fT ? void 0 : fT.Gw) && void 0 !== lT ? lT : null;
      let zT = !1,
        JT = null,
        GT = null;
      const {
        engine: VT,
        et: ET
      } = oT(), ZT = ET.onBeforeRenderObservable.add((() => {
        var TT;
        null === (TT = GT) || void 0 === TT || TT.render(VT.getDeltaTime())
      })), uT = null === bT ? null : eT(bT).catch((TT => (console.error(`Mob preview: could not load ${bT}`, TT), null)));
      return Promise.all([HT(MT), uT]).then((TT => {
        var kT, cT, lT;
        let [fT, HT] = TT;
        if (zT) return;
        const eT = (0, DT.f)().gv.PJ,
          {
            hitBoxDimensions: VT
          } = (0, IT.d)(MT),
          ET = rT / Math.max(VT.height, VT.width);
        if (JT = (0, hT.j)(MT, ET * wT, !0, !0), eT.setPosition(JT, FT, -VT.height * ET / 2, 0), eT.setRotationEulerY(JT, PT), fT.meshApi instanceof QT.b && mT.length > 0)
          for (const [MT, KT] of mT) fT.meshApi.updatePlayerCosmetic(null, JT, MT, KT, !0);
        else fT.meshApi.updateVariation(JT, MT, null !== KT && void 0 !== KT ? KT : "default");
        null !== bT && null !== HT && function(TT, kT, cT, lT) {
          var MT;
          const KT = ST.x[TT],
            OT = (0, vT.l)();
          (0, vT.i)(KT, null === (MT = (0, NT.b)(cT).meshMetadata.heldItemPositionParams) || void 0 === MT ? void 0 : MT.itemOffset, OT);
          const fT = aT.d * OT.GA.y,
            IT = OT.usesQuaternion ? OT.quaternion : yT.Quaternion.FromEulerVector(OT.rotation),
            AT = new xT.b(`${kT.name}Hand`, oT().et);
          AT.position.UkT((0, tT.e)(OT.position, IT, fT, KT.heldModelOffsetY())), AT.rotationQuaternion = IT, AT.GA.set(OT.GA.x, fT, OT.GA.z), kT.clone(`${kT.name}Held`, AT).PD(!0);
          const CT = (0, DT.f)().gv.PJ;
          CT.attachTransformNode(AT, lT, CT.getNamedNode(lT, "ArmRightMesh"))
        }(bT, HT, MT, JT), eT.set(JT, "aOpacity", 1);
        const ZT = null !== (kT = (0, NT.b)(MT).meshMetadata.lifeformTypeForModelOverride) && void 0 !== kT ? kT : MT;
        GT = new jT.AnimatorState, GT.thinInstMgr = eT, GT.mJ = JT, GT.RkT = eT.ScT(JT, 0), GT.modelLifeformType = ZT, GT.nodeNameAliases = null !== (cT = null === (lT = (0, AT.e)(ZT)) || void 0 === lT ? void 0 : lT.nodeNameAliases) && void 0 !== cT ? cT : null, GT.startAnimation(OT, CT.g.Movement)
      })).catch((TT => {
        console.error(`Mob preview: could not load ${MT}`, TT)
      })), () => {
        zT = !0, ET.onBeforeRenderObservable.remove(ZT), null !== JT && (0, DT.f)().gv.PJ.delete(JT)
      }
    }

    function VT(TT, kT) {
      return GT({
        mobType: "NPC",
        variation: null,
        animation: TT.animation
      }, TT, kT)
    }

    function ET(TT) {
      let {
        mobType: kT,
        variation: cT,
        metaInfo: lT,
        tamed: MT
      } = TT, KT = !1, OT = null, yT = 0;
      const fT = (0, DT.f)(),
        xT = fT.gv.PJ,
        IT = TT => {
          yT += mT * (TT / 1e3) % (2 * Math.PI), xT.setRotationEulerY(OT, yT)
        };
      return HT(kT).then((TT => {
        if (KT) return;
        OT = (0, hT.j)(kT, wT, !0, !0), xT.setPosition(OT, 0, -wT, 0), TT.meshApi.updateVariation(OT, kT, cT);
        const yT = {
          wool: "Sheared" !== lT,
          saddle: "Saddled" === lT,
          antlers: "Antlers" === lT,
          collar: MT
        };
        for (const [kT, cT] of Object.entries(yT)) xT.hasGroup(OT, kT) && TT.meshApi.setMeshGroupVisibility(OT, kT, cT);
        xT.set(OT, "aOpacity", 1), fT.on("renderTickBegin", IT)
      })).catch((TT => {
        console.error(`Pet preview: could not load ${kT}`, TT)
      })), () => {
        KT = !0, fT.off("renderTickBegin", IT), null !== OT && xT.delete(OT)
      }
    }
    class ZT {
      constructor(TT, kT) {
        this.place = kT, this.remove = null;
        const {
          engine: cT,
          et: lT,
          canvas: MT
        } = oT();
        TT.appendChild(MT), cT.resize(), cT.runRenderLoop((() => {
          lT.render()
        }))
      }
      show(TT) {
        var kT;
        null === (kT = this.remove) || void 0 === kT || kT.call(this), this.remove = this.place(TT)
      }
      resize(TT, kT) {
        const {
          engine: cT,
          canvas: lT
        } = oT();
        lT.width = TT, lT.height = kT, cT.resize()
      }
      close() {
        var TT;
        oT().engine.stopRenderLoop(), null === (TT = this.remove) || void 0 === TT || TT.call(this), this.remove = null
      }
    }
    class uT {
      constructor(TT) {
        this.preview = void 0, this.view = {
          figures: [],
          shown: []
        }, this.aspect = 1, this.placed = [], this.preview = new ZT(TT, (() => () => {}))
      }
      show(TT) {
        TT.figures !== this.view.figures && this.preload(TT.figures), this.view = TT, this.place()
      }
      resize(TT, kT) {
        this.preview.resize(TT, kT), this.aspect = TT / kT, this.place()
      }
      close() {
        this.preview.close();
        for (const TT of this.placed) null === TT || void 0 === TT || TT.remove();
        this.placed = []
      }
      preload(TT) {
        const kT = () => {};
        HT("NPC").catch(kT);
        for (const {
            Gw: cT
          }
          of TT) null !== cT && eT(cT).catch(kT)
      }
      place() {
        const {
          figures: TT,
          shown: kT
        } = this.view, cT = TT.map(((cT, lT) => {
          var MT;
          const KT = null !== (MT = this.placed[lT]) && void 0 !== MT ? MT : null;
          if (!kT[lT]) return null === KT || void 0 === KT || KT.remove(), null;
          const OT = (yT = (lT + .5) / TT.length, fT = this.aspect, (.5 - yT) * (2 * FT * Math.tan(oT().camera.fov / 2)) * fT);
          var yT, fT;
          return null !== KT && KT.figure === cT && KT.x === OT ? KT : (null === KT || void 0 === KT || KT.remove(), {
            figure: cT,
            x: OT,
            remove: VT(cT, OT)
          })
        }));
        for (const lT of this.placed.slice(TT.length)) null === lT || void 0 === lT || lT.remove();
        this.placed = cT
      }
    }

    function XT(TT) {
      return new ZT(TT, GT)
    }

    function dT(TT) {
      return new uT(TT)
    }

    function LT(TT) {
      return new ZT(TT, ET)
    }
  },
  38624: (TT, kT, cT) => {
    cT.d(kT, {
      d: () => CT
    });
    var lT = cT(36994),
      MT = cT(37005),
      KT = cT(37269),
      OT = cT(37013),
      yT = cT(36996);

    function fT(TT) {
      return `\n\t\t\t\t${(0,yT.w)(TT,"mat2","rotate",[{name:"ang",type:"float"}],`\
      n\ t\ t\ t\ t\ t$ {
        (0, yT.y)(TT, "float", "s", "sin(ang)")
      }\
      n\ t\ t\ t\ t\ t$ {
        (0, yT.y)(TT, "float", "c", "cos(ang)")
      }\
      n\ t\ t\ t\ t\ treturn $ {
        (0, yT.l)(TT, "mat2", "c", "s", "-s", "c")
      };\
      n\ t\ t\ t\ t`)}\n\t\t\t`
    }

    function xT(TT, kT) {
      let cT = (0, yT.Db)(TT, "skele" + (kT - 1));
      for (let MT = kT - 2; MT >= 0; MT--) cT = (0, yT.xb)(TT, `boneIdx == ${MT}`, (0, yT.Db)(TT, `skele${MT}`), cT);
      const lT = "bone.yz + rotate(bone.x) * pivot - pivot";
      return `\n\t\t\t\t${(0,yT.y)(TT,"int","boneIdx",(0,yT.Ab)(TT,"BLOXD_CAPE_MAX_Y - positionUpdated.y"))}\n\t\t\t\t${(0,yT.y)(TT,"vec3","bone",cT)}\n\t\t\t\t${(0,yT.y)(TT,"vec2","pivot",(0,yT.l)(TT,"vec2","0.0",`${(0,yT.Kb)(TT,"position")}.z`))}\n\t\t\t\t${(0,yT.ab)(TT)?`positionUpdated = vec3f(positionUpdated.x, positionUpdated.yz + (${lT}));`:`positionUpdated.yz += ${lT};`}\n\t\t`
    }

    function IT(TT) {
      return `\n\t\t\t\t#ifdef NORMAL\n\t\t\t\tnormalUpdated = ${(0,yT.l)(TT,"vec3","normalUpdated.x","rotate(bone.x) * normalUpdated.yz")};\n\t\t\t\t#endif\n\t\t`
    }
    const AT = {
        x: 0,
        y: 0,
        z: 0,
        xkT(TT, kT) {
          return this.x = TT[kT], this.y = TT[kT + 1], this.z = TT[kT + 2], this
        }
      },
      CT = {
        name: "Cape",
        className: "CapeMaterialPlugin",
        priority: 200,
        defines: (TT, kT) => ({
          ...(0, lT.c)("CAPE"),
          BLOXD_CAPE_BONES: `${TT}`,
          BLOXD_CAPE_MAX_Y: (0, MT.qb)(kT)
        }),
        getUniforms(TT) {
          return (0, KT.b)(function(TT) {
            const kT = [];
            for (let cT = 0; cT < TT; cT++) kT.push({
              name: `skele${cT}`,
              type: "highp vec3"
            });
            return kT
          }(this.skeleLen), "vertex", TT)
        },
        bind(TT) {
          for (let kT = 0; kT < this.skeleLen; kT++) TT.updateVector3(`skele${kT}`, AT.xkT(this.skele, 3 * kT))
        },
        uniformsVersion() {
          return this.bonesVersion
        },
        getCustomCode(TT, kT) {
          return "vertex" !== TT ? null : {
            CUSTOM_VERTEX_DEFINITIONS: fT(kT),
            CUSTOM_VERTEX_UPDATE_POSITION: xT(kT, this.skeleLen),
            CUSTOM_VERTEX_UPDATE_NORMAL: IT(kT)
          }
        }
      };
    (0, OT.n)(CT)
  },
  38525: (TT, kT, cT) => {
    cT.d(kT, {
      c: () => IT,
      d: () => AT
    });
    var lT = cT(36994),
      MT = cT(37269),
      KT = cT(36996),
      OT = cT(37013);
    const yT = "bloxdTextLodBias",
      fT = [{
        name: yT,
        type: "float"
      }],
      xT = "bloxdTextSample",
      IT = {
        planes: -.5,
        boards: -.5
      },
      AT = {
        name: "TextSampler",
        className: "TextSamplerMaterialPlugin",
        priority: 60,
        defines: () => (0, lT.c)("TEXT_SAMPLER"),
        getUniforms: TT => (0, MT.b)(fT, "fragment", TT),
        bind(TT) {
          TT.updateFloat(yT, this.lodBias)
        },
        uniformsVersion: () => 0,
        getCustomCode(TT, kT) {
          if ("fragment" !== TT) return null;
          const cT = (0, KT.I)(kT, `vec4 ${xT}(sampler2D s, vec2 uv, float bias)`, `fn ${xT}(t: texture_2d<f32>, ts: sampler, uv: vec2f, bias: f32) -> vec4f`),
            lT = (0, KT.I)(kT, "texture2D(s, uv, bias)", "textureSampleBias(t, ts, uv, bias)"),
            MT = `${(0,KT.T)(kT,"vDiffuseUV")} + uvOffset`,
            OT = (0, KT.I)(kT, `${xT}(diffuseSampler, ${MT}, ${(0,KT.Db)(kT,yT)})`, `${xT}(diffuseSampler, diffuseSamplerSampler, ${MT}, ${(0,KT.Db)(kT,yT)})`);
          return {
            CUSTOM_FRAGMENT_DEFINITIONS: `\n\t\t\t\t${cT} {\n\t\t\t\t\t${(0,KT.y)(kT,"vec4","texel",lT)}\n\t\t\t\t\t// 8-bit premultiplied rounding can put the quotient just over 1; only alpha 0 hits the floor,\n\t\t\t\t\t// where the colour is 0 anyway.\n\t\t\t\t\treturn ${(0,KT.l)(kT,"vec4",`clamp(texel.rgb / max(texel.a, 1.0 / 255.0), ${(0,KT.l)(kT,"vec3","0.0")}, ${(0,KT.l)(kT,"vec3","1.0")})`,"texel.a")};\n\t\t\t\t}\n\t\t\t`,
            [(0, KT.C)(kT)]: `baseColor = ${OT};`
          }
        }
      };
    (0, OT.n)(AT)
  },
  40739: (TT, kT, cT) => {
    cT.r(kT), cT.d(kT, {
      CapeMaterialPlugin: () => DT,
      HueTintMaterialPlugin: () => aT,
      LifeformMaterialPlugin: () => FT,
      OverlayMaterialPlugin: () => rT
    });
    var lT = cT(40747),
      MT = cT(37868);
    class KT extends((0, lT.i)(MT.b)) {}(0, lT.j)(MT.b, KT);
    var OT = cT(36985);
    class yT extends((0, lT.i)(OT.h)) {}(0, lT.j)(OT.h, yT);
    var fT = cT(37709);
    class xT extends((0, lT.i)(fT.e)) {}(0, lT.j)(fT.e, xT);
    var IT = cT(37253),
      AT = cT(39889),
      CT = cT(37250);
    class jT extends((0, lT.i)(CT.g)) {
      constructor(TT, kT, cT) {
        super(TT, kT, cT), (0, IT.h)(TT)
      }
      dispose(TT) {
        (0, IT.i)(this._material), super.dispose(TT)
      }
    }(0, lT.j)(CT.g, jT), (0, CT.j)({
      disableUnusedSpecularTerm: lT.e,
      isLightingDisabled: TT => TT instanceof AT.StandardMaterial && TT.disableLighting
    });
    var vT = cT(38525);
    class tT extends((0, lT.i)(vT.d)) {}(0, lT.j)(vT.d, tT);
    var hT = cT(38624),
      NT = cT(37098),
      QT = cT(37982),
      ST = cT(37050);
    class DT extends((0, lT.i)(hT.d)) {}(0, lT.j)(hT.d, DT);
    class aT extends((0, lT.i)(NT.d)) {}(0, lT.j)(NT.d, aT);
    class FT extends((0, lT.i)(QT.j)) {}(0, lT.j)(QT.j, FT);
    class rT extends((0, lT.i)(ST.b)) {}(0, lT.j)(ST.b, rT)
  },
  40747: (TT, kT, cT) => {
    cT.d(kT, {
      e: () => dT,
      i: () => QT,
      j: () => BT
    });
    var lT = cT(39889),
      MT = cT(40749),
      KT = cT(40787),
      OT = cT(40752),
      yT = cT(37678),
      fT = cT(37686),
      xT = cT(37692),
      IT = cT(37695),
      AT = cT(37034),
      CT = cT(37041),
      jT = cT(40761),
      vT = cT(37013),
      tT = cT(37016),
      hT = cT(36996);

    function NT(TT, kT) {
      return Object.assign((function(TT, cT, lT, MT) {
        return kT(this.featureState, TT, cT, lT, MT)
      }), {
        nj: TT
      })
    }

    function QT(TT) {
      const kT = class extends jT.c {
          constructor(kT, cT) {
            const lT = (0, tT.cb)(kT),
              MT = lT && (0, tT.x)(lT, TT.name);
            for (var KT = arguments.length, OT = new Array(KT > 2 ? KT - 2 : 0), yT = 2; yT < KT; yT++) OT[yT - 2] = arguments[yT];
            super(kT, TT.name, TT.priority, MT ? MT.defines : TT.defines(...OT), !1), this.featureState = void 0, this.featureState = cT, this._pluginManager._addPlugin(this), this._enable(!0), (0, tT.B)(this._material, TT, this.featureState, this._pluginDefineNames)
          }
          getClassName() {
            return TT.className
          }
          isCompatible(TT) {
            return TT === hT.b.GLSL || TT === hT.b.WGSL
          }
        },
        cT = (0, vT.j)(TT);
      for (const [lT, MT] of Object.entries(vT.b)) {
        const KT = TT[lT];
        if (KT) {
          const TT = cT[lT];
          Object.defineProperty(kT.prototype, MT, {
            value: NT(KT, TT),
            writable: !0,
            configurable: !0
          })
        }
      }
      return kT
    }
    class ST extends(QT(yT.b)) {}
    var DT = cT(39448),
      aT = cT(40769);
    const FT = new WeakMap;

    function rT(TT, kT, cT) {
      let lT = FT.get(cT);
      lT || (lT = new Map, FT.set(cT, lT));
      const {
        url: MT
      } = TT;
      let KT = lT.get(MT);
      return KT || (KT = async function(TT, kT, cT) {
        const {
          width: lT,
          height: MT
        } = TT.getSize(), KT = Math.round(MT / lT), yT = kT && kT.byteLength === lT * lT * KT * 4 ? kT : TT._readPixelsSync();
        return new aT.d(yT, lT, lT, KT, DT.d.TEXTUREFORMAT_RGBA, cT, !0, !1, OT.c.NEAREST_NEAREST_MIPLINEAR)
      }(TT, kT, cT), lT.set(MT, KT), KT.catch((() => {
        lT.delete(MT)
      }))), KT
    }
    var PT = cT(37700);
    class wT extends(QT(fT.g)) {
      constructor(TT, kT) {
        super(TT, kT), kT.textures.forEach(((TT, kT) => {
          TT.mirror.onLoadObservable.add((TT => {
            this.setTextureArrayData(TT, kT).catch((TT => {
              console.error(`Failed to build texture array for atlas ${kT}`, TT)
            }))
          }))
        })), (0, PT.h)(kT, TT.shaderLanguage)
      }
      async setTextureArrayData(TT, kT) {
        var cT, lT;
        const MT = this.featureState,
          {
            width: KT,
            height: OT
          } = TT.getSize(),
          yT = MT.useWebGL2 ? await rT(TT, null !== (cT = null === (lT = MT.sources.pixels) || void 0 === lT ? void 0 : lT[kT]) && void 0 !== cT ? cT : null, this._material.NJ()) : null;
        (0, PT.d)(this._material, MT, kT, yT, KT, Math.round(OT / KT), this._material.shaderLanguage)
      }
    }
    var mT = cT(40774),
      bT = cT(39926),
      zT = cT(36885),
      JT = cT(40778),
      oT = cT(40038),
      HT = cT(39917),
      eT = cT(40726),
      GT = cT(37442),
      VT = cT(40781);
    class ET extends mT.e {
      getData() {
        return null
      }
      _rebuild() {}
      restore() {
        super._rebuild()
      }
    }
    const ZT = {
      Mesh: JT.c,
      TransformNode: eT.b,
      Ov: mT.e,
      VertexBuffer: mT.i,
      BoundingInfo: bT.e,
      Fv: zT.Fv,
      ArenaBuffer: ET,
      SubMesh: HT.c,
      VertexData: oT.d,
      MirroredGeometry: VT.d,
      meshFromArrays: VT.h,
      plainMeshFromArrays: VT.j
    };
    (0, GT.i)(ZT);
    var uT = cT(37253);
    class XT extends(QT(IT.h)) {
      constructor(TT, kT) {
        if (super(TT, kT), TT instanceof lT.StandardMaterial && kT.dirLightCount > 0) {
          const kT = TT,
            cT = kT._blockDirtyMechanism;
          kT._blockDirtyMechanism = !0, TT.disableLighting = !0, kT._blockDirtyMechanism = cT;
          const lT = (0, tT.cb)(TT);
          lT && (lT.disableLighting = !0, (0, tT.ab)(lT))
        }(0, uT.h)(TT)
      }
      dispose(TT) {
        (0, uT.i)(this._material), super.dispose(TT)
      }
    }

    function dT(TT, kT) {
      if (!(kT instanceof lT.StandardMaterial) || kT.specularTexture) return;
      const {
        r: cT,
        g: MT,
        b: KT
      } = kT.specularColor;
      0 === cT && 0 === MT && 0 === KT && (TT.SPECULARTERM = !1)
    }(0, IT.g)({
      disableUnusedSpecularTerm: dT
    });
    var LT = cT(37127),
      RT = cT(37452);
    const gT = new RegExp(`^#define ${xT.e}\\s*$`, "m");
    class UT extends(QT(xT.j)) {
      constructor(TT, kT) {
        super(TT, kT), this.yv = !1, kT.ditherOnlyWhileFading && (RT.e.add(TT), this.prewarmDitherTwins(TT))
      }
      prewarmDitherTwins(TT) {
        const kT = new WeakSet;
        TT.onEffectCreatedObservable.add((cT => {
          let {
            effect: lT,
            subMesh: MT
          } = cT;
          if (this.featureState.prewarmingDither || kT.has(lT)) return;
          kT.add(lT);
          const KT = null === MT || void 0 === MT ? void 0 : MT.getMesh();
          KT && !gT.test(lT.defines) && TT.NJ().onAfterRenderObservable.addOnce((() => {
            this.prewarmDither(KT) || kT.delete(lT)
          }))
        }))
      }
      prewarmDither(TT) {
        if (this.yv || TT.VkT()) return !1;
        const kT = new HT.c(0, 0, 0, 0, 0, TT, void 0, !1, !1);
        this.featureState.prewarmingDither = !0;
        try {
          this._material.isReadyForSubMesh(TT, kT)
        } finally {
          this.featureState.prewarmingDither = !1
        }
        return null !== kT.effect
      }
      dispose(TT) {
        this.yv = !0, super.dispose(TT)
      }
    }
    const YT = new Map;

    function BT(TT, kT) {
      YT.set(TT, kT)
    }
    BT(yT.b, ST), BT(fT.g, wT), BT(xT.j, UT), BT(IT.h, XT), (0, AT.c)({
      create: (TT, kT) => {
        const cT = new lT.StandardMaterial(TT.name, kT);
        return (0, LT.s)(TT, cT), cT.detailMap._pluginDefineNames
      },
      write: (TT, kT, cT) => {
        (0, LT.Y)(TT.mirror, kT, cT)
      },
      addFeature: (TT, kT, cT) => {
        const lT = YT.get(kT.feature);
        if (!lT) throw new Error(`${kT.feature.name} has no plugin class (registerPluginClass)`);
        new lT(TT.mirror, kT.state, ...cT)
      },
      texture: (TT, kT, cT) => {
        let {
          url: lT,
          noMipmap: MT,
          invertY: KT,
          samplingMode: yT,
          data: fT,
          sets: xT
        } = cT;
        if (!fT) {
          const cT = new OT.c(lT, kT, MT, KT, yT);
          return Object.assign(cT, xT), void(0, CT.M)(TT, cT)
        }
        const IT = {},
          AT = new Promise(((TT, kT) => {
            IT.onLoad = TT, IT.onError = (TT, cT) => {
              kT(new Error(`${fT.context}: ${(null===cT||void 0===cT?void 0:cT.message)||TT||"Failed to load texture"}`))
            }
          })),
          {
            mimeType: jT,
            bytes: vT,
            label: tT
          } = fT,
          hT = {
            noMipmap: MT,
            invertY: !1,
            samplingMode: yT,
            ...IT,
            mimeType: jT,
            loaderOptions: void 0,
            useSRGBBuffer: !1
          },
          NT = new OT.c(null, kT, hT);
        LT.v.set(NT, AT), Object.assign(NT, xT), NT.updateURL(lT, vT);
        const QT = NT.getInternalTexture();
        QT && (QT.label = tT), TT.uvSet = NT.coordinatesIndex, TT.matrix.set((0, LT.R)(NT)), (0, CT.M)(TT, NT)
      },
      cube: (TT, kT, cT) => {
        let {
          rootUrl: lT,
          files: KT,
          noMipmap: yT,
          luminance: fT
        } = cT;
        const {
          samplingMode: xT
        } = TT.sampler, IT = xT === (0, CT.B)(yT) ? null : () => {
          (0, LT.N)(AT, xT)
        }, AT = new MT.b(lT, kT, null, yT, KT, IT, null, (0, CT.x)(fT));
        AT.coordinatesMode = OT.c.SKYBOX_MODE, (0, CT.M)(TT, AT)
      },
      canvas: (TT, kT, cT) => {
        let {
          width: lT,
          height: MT,
          mipmaps: yT,
          samplingMode: fT,
          hasAlpha: xT = !1,
          wrap: IT = OT.c.CLAMP_ADDRESSMODE
        } = cT;
        const AT = new KT.d(kT, {
          width: lT,
          height: MT
        }, TT, yT, fT);
        AT.hasAlpha = xT, AT.wrapU = IT, AT.wrapV = IT;
        const CT = (0, LT.E)(AT);
        return (0, LT.H)(CT, AT), CT
      }
    })
  },
  40781: (TT, kT, cT) => {
    cT.d(kT, {
      d: () => IT,
      h: () => AT,
      j: () => CT
    });
    var lT = cT(40774),
      MT = cT(39689),
      KT = cT(39926),
      OT = cT(40042),
      yT = cT(40778),
      fT = cT(40038),
      xT = cT(37308);
    class IT extends OT.d {
      constructor() {
        super(...arguments), this.model = null, this.onGeometryUpdated = (TT, kT) => {
          this.releaseUnlessInstanced(kT)
        }, this.onLinked = null
      }
      link(TT) {
        var kT;
        (0, xT.i)(TT), this.model = TT, null === (kT = this.onLinked) || void 0 === kT || kT.call(this, TT)
      }
      relink() {
        this.release();
        const TT = [];
        for (const MT of Object.values(this._vertexBuffers))
          if (!MT.getIsInstanced()) {
            const {
              byteOffset: kT,
              byteStride: cT,
              type: lT,
              normalized: KT
            } = MT;
            TT.push({
              kind: MT.getKind(),
              data: MT.getData(),
              offset: kT,
              stride: cT,
              components: MT.getSize(),
              glType: lT,
              isNormalized: KT
            })
          } const kT = this._indices.length ? this._indices : null,
          {
            minimum: cT,
            maximum: lT
          } = this.extend;
        this.link(new xT.d(TT, kT, this.getTotalVertices(), new Float64Array(cT.acT()), new Float64Array(lT.acT())))
      }
      copy(TT) {
        if (!this.model) return super.copy(TT);
        const kT = new IT(TT, this.NJ()),
          cT = this.FcT(void 0, !0);
        cT && kT.setIndices(cT);
        let OT = !1;
        for (const KT in this._vertexBuffers) {
          const TT = this._vertexBuffers[KT],
            cT = TT.getData();
          if (!cT) continue;
          const yT = TT.getSize(),
            {
              type: fT,
              byteOffset: xT,
              byteStride: IT,
              normalized: AT
            } = TT;
          OT ||= TT.isUpdatable();
          const CT = TT.getIsInstanced() ? (cT instanceof Array ? 4 * cT.length : cT.byteLength) / IT : this.getTotalVertices(),
            jT = (0, MT.m)(cT, yT, fT, xT, IT, CT, !0),
            vT = {
              updatable: TT.isUpdatable(),
              stride: yT,
              type: fT,
              normalized: AT,
              takeBufferOwnership: !0,
              instanced: TT.getIsInstanced()
            };
          kT.setVerticesBuffer(new lT.i(this.Dv(), jT, KT, vT), CT)
        }
        return kT._updatable = OT, kT._boundingInfo = new KT.e(this.extend.minimum, this.extend.maximum), kT.relink(), kT
      }
      static mergeMeshes(TT, kT, cT, lT, MT, KT) {
        const fT = TT[0].NJ(),
          xT = new yT.c(TT[0].name + "_merged", fT),
          AT = new IT(OT.d.RandomId(), fT, void 0, !1, xT);
        try {
          if (!yT.c.MergeMeshes(TT, kT, cT, xT, MT, KT)) return xT.dispose(), null
        } catch (CT) {
          throw xT.dispose(), CT
        }
        return AT.relink(), xT
      }
      removeVerticesData(TT) {
        this.releaseUnlessInstanced(TT), super.removeVerticesData(TT)
      }
      dispose() {
        this.release(), super.dispose()
      }
      releaseUnlessInstanced(TT) {
        var kT;
        TT && null !== (kT = this.getVertexBuffer(TT)) && void 0 !== kT && kT.getIsInstanced() || this.release()
      }
      release() {
        this.model && ((0, xT.p)(this.model), this.model = null)
      }
    }

    function AT(TT, kT, cT) {
      let lT = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : new yT.c(TT, cT);
      const MT = (0, xT.h)(kT),
        {
          positions: KT,
          normals: AT,
          uvs: CT,
          indices: jT,
          named: vT = {}
        } = kT,
        tT = new fT.d;
      tT.positions = KT, tT.normals = null !== AT && void 0 !== AT ? AT : null, tT.uvs = null !== CT && void 0 !== CT ? CT : null, tT.indices = jT;
      const hT = new IT(OT.d.RandomId(), cT, tT, !1, lT);
      for (const {
          kind: OT,
          components: yT
        }
        of MT.vertexAttributes) OT in vT && lT.setVerticesData(OT, vT[OT], !1, yT);
      return hT.link(MT), lT
    }

    function CT(TT, kT, cT) {
      let lT = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
      const MT = new yT.c(TT, cT),
        {
          positions: KT,
          normals: OT,
          uvs: xT,
          indices: IT
        } = kT;
      return Object.assign(new fT.d, {
        positions: KT,
        normals: OT,
        uvs: xT,
        indices: IT
      }).applyToMesh(MT, lT), MT
    }
  },
  8855: (TT, kT, cT) => {
    cT.d(kT, {
      e: () => IT,
      f: () => yT,
      i: () => fT
    });
    var lT = cT(2260),
      MT = cT(1244),
      KT = cT(2268);
    const OT = ",";

    function yT(TT) {
      if (!TT) return [];
      const kT = new Set,
        cT = [];
      for (const lT of TT.split(OT)) {
        const TT = lT.trim();
        if ((0, KT.g)(TT) && !kT.has(TT) && (kT.add(TT), cT.push(TT), cT.length >= MT.n)) break
      }
      return cT
    }

    function fT(TT) {
      const kT = new Set,
        cT = [];
      for (const lT of TT)
        if ((0, KT.g)(lT) && !kT.has(lT) && (kT.add(lT), cT.push(lT), cT.length >= MT.n)) break;
      return cT.join(OT)
    }

    function xT() {
      return fT(KT.e)
    }

    function IT(TT) {
      var kT;
      return "emote" === TT ? xT() : null !== (kT = AT[TT][0]) && void 0 !== kT ? kT : CT[TT]
    }
    const AT = MT.u.reduce(((TT, kT) => {
        const cT = [];
        for (const KT in lT.e[kT]) {
          var MT;
          "default" === (null === (MT = (0, lT.j)(kT, KT)) || void 0 === MT ? void 0 : MT.cosmeticPack) && cT.push(KT)
        }
        return TT[kT] = cT, TT
      }), {}),
      CT = MT.u.reduce(((TT, kT) => (TT[kT] = Object.keys(lT.e[kT])[0], TT)), {})
  }
};
Object.freeze(modules);
for (const TT in modules) Object.freeze(modules[TT]);