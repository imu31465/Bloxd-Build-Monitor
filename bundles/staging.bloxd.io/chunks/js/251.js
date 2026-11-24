export const id = 251;
export const ids = [251];
export const modules = {
  41227: (TT, UT, mT) => {
    mT.r(UT), mT.d(UT, {
      openMobLineupPreview: () => uT,
      openMobPreview: () => VT,
      openPetPreview: () => CT
    });
    var WT = mT(39907),
      zT = mT(40192),
      MT = mT(41236),
      gT = mT(37364),
      nT = mT(37185),
      HT = mT(40362),
      kT = mT(41256),
      jT = mT(38598),
      lT = mT(37270),
      LT = mT(37253),
      pT = mT(37176),
      BT = mT(38508),
      ZT = mT(38499),
      cT = mT(38231),
      vT = mT(38286),
      fT = mT(38254),
      qT = mT(37911),
      iT = mT(2875),
      bT = mT(37740);
    mT(41265), mT(40611), mT(41267);
    const OT = 22,
      eT = 13,
      YT = Math.PI - Math.PI / 16,
      JT = 6,
      xT = Math.PI / 4;
    let dT = null;
    const wT = {},
      tT = new Map;

    function aT() {
      if (null !== dT) return dT;
      const TT = document.createElement("canvas");
      TT.classList.add("MobPreviewCanvas");
      const UT = new WT.b(TT, !0, {
        preserveDrawingBuffer: !0
      });
      UT.pWT = (0, iT.h)().GB.engine.pWT;
      const mT = new zT.b(UT);
      mT.clearColor = new gT.e(0, 0, 0, 0), mT.ambientColor = new gT.Color3(1, 1, 1);
      const kT = new MT.d("ac", Math.PI / 2, Math.PI / 2, OT, nT.JB.Zero(), mT),
        jT = new HT.b("light", new nT.JB(-.1, 1, -.3), mT);
      return jT.diffuse = new gT.Color3(1, 1, 1), jT.specular = new gT.Color3(1, 1, 1), jT.groundColor = new gT.Color3(.5, .5, .5), dT = {
        engine: UT,
        XZ: mT,
        canvas: TT,
        camera: kT
      }, dT
    }

    function yT(TT) {
      return wT[TT] ??= (0, cT.v)(TT, aT().XZ, !0).catch((UT => {
        throw delete wT[TT], UT
      })), wT[TT]
    }

    function XT(TT) {
      let UT = tT.get(TT);
      return UT || (UT = qT.y[TT].loadModel(aT().XZ, !1).then((TT => (TT.Qy(!1), TT)), (UT => {
        throw tT.delete(TT), UT
      })), tT.set(TT, UT)), UT
    }

    function IT(TT) {
      var UT, mT, WT;
      let {
        mobType: zT,
        variation: MT,
        animation: gT
      } = TT, HT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null, OT = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
      const JT = null !== (UT = null === HT || void 0 === HT ? void 0 : HT.size) && void 0 !== UT ? UT : 1,
        xT = null !== (mT = null === HT || void 0 === HT ? void 0 : HT.cosmetics) && void 0 !== mT ? mT : [],
        dT = null !== (WT = null === HT || void 0 === HT ? void 0 : HT.AY) && void 0 !== WT ? WT : null;
      let wT = !1,
        tT = null,
        IT = null;
      const {
        engine: QT,
        XZ: sT
      } = aT(), FT = sT.onBeforeRenderObservable.add((() => {
        var TT;
        null === (TT = IT) || void 0 === TT || TT.render(QT.getDeltaTime())
      })), PT = null === dT ? null : XT(dT).catch((TT => (console.error(`Mob preview: could not load ${dT}`, TT), null)));
      return Promise.all([yT(zT), PT]).then((TT => {
        var UT, mT, WT;
        let [HT, yT] = TT;
        if (wT) return;
        const XT = (0, iT.h)().GB.mV,
          {
            hitBoxDimensions: QT
          } = (0, jT.d)(zT),
          sT = eT / Math.max(QT.height, QT.width);
        if (tT = (0, cT.k)(zT, sT * JT, !0, !0), XT.setPosition(tT, OT, -QT.height * sT / 2, 0), XT.setRotationEulerY(tT, YT), HT.meshApi instanceof fT.e && xT.length > 0)
          for (const [zT, MT] of xT) HT.meshApi.updatePlayerCosmetic(null, tT, zT, MT, !0);
        else HT.meshApi.updateVariation(tT, zT, null !== MT && void 0 !== MT ? MT : "default");
        null !== dT && null !== yT && function(TT, UT, mT, WT) {
          var zT;
          const MT = qT.y[TT],
            gT = (0, BT.l)();
          (0, BT.g)(MT, null === (zT = (0, vT.d)(mT).meshMetadata.heldItemPositionParams) || void 0 === zT ? void 0 : zT.itemOffset, gT);
          const HT = bT.c * gT.gp.y,
            jT = gT.usesQuaternion ? gT.quaternion : nT.Quaternion.FromEulerVector(gT.rotation),
            lT = new kT.d(`${UT.name}Hand`, aT().XZ);
          lT.position.Gw((0, ZT.b)(gT.position, jT, HT, MT.heldModelOffsetY())), lT.rotationQuaternion = jT, lT.gp.set(gT.gp.x, HT, gT.gp.z), UT.clone(`${UT.name}Held`, lT).Qy(!0);
          const LT = (0, iT.h)().GB.mV;
          LT.attachTransformNode(lT, WT, LT.getNamedNode(WT, "ArmRightMesh"))
        }(dT, yT, zT, tT), XT.set(tT, "aOpacity", 1);
        const FT = null !== (UT = (0, vT.d)(zT).meshMetadata.lifeformTypeForModelOverride) && void 0 !== UT ? UT : zT;
        IT = new pT.AnimatorState, IT.thinInstMgr = XT, IT.zV = tT, IT.PmT = XT.BWT(tT, 0), IT.modelLifeformType = FT, IT.nodeNameAliases = null !== (mT = null === (WT = (0, lT.b)(FT)) || void 0 === WT ? void 0 : WT.nodeNameAliases) && void 0 !== mT ? mT : null, IT.startAnimation(gT, LT.g.Movement)
      })).catch((TT => {
        console.error(`Mob preview: could not load ${zT}`, TT)
      })), () => {
        wT = !0, sT.onBeforeRenderObservable.remove(FT), null !== tT && (0, iT.h)().GB.mV.delete(tT)
      }
    }

    function QT(TT, UT) {
      return IT({
        mobType: "NPC",
        variation: null,
        animation: TT.animation
      }, TT, UT)
    }

    function sT(TT) {
      let {
        mobType: UT,
        variation: mT,
        metaInfo: WT,
        tamed: zT
      } = TT, MT = !1, gT = null, nT = 0;
      const HT = (0, iT.h)(),
        kT = HT.GB.mV,
        jT = TT => {
          nT += xT * (TT / 1e3) % (2 * Math.PI), kT.setRotationEulerY(gT, nT)
        };
      return yT(UT).then((TT => {
        if (MT) return;
        gT = (0, cT.k)(UT, JT, !0, !0), kT.setPosition(gT, 0, -JT, 0), TT.meshApi.updateVariation(gT, UT, mT);
        const nT = {
          wool: "Sheared" !== WT,
          saddle: "Saddled" === WT,
          antlers: "Antlers" === WT,
          collar: zT
        };
        for (const [UT, mT] of Object.entries(nT)) kT.hasGroup(gT, UT) && TT.meshApi.setMeshGroupVisibility(gT, UT, mT);
        kT.set(gT, "aOpacity", 1), HT.on("renderTickBegin", jT)
      })).catch((TT => {
        console.error(`Pet preview: could not load ${UT}`, TT)
      })), () => {
        MT = !0, HT.off("renderTickBegin", jT), null !== gT && kT.delete(gT)
      }
    }
    class FT {
      constructor(TT, UT) {
        this.place = UT, this.remove = null;
        const {
          engine: mT,
          XZ: WT,
          canvas: zT
        } = aT();
        TT.appendChild(zT), mT.resize(), mT.runRenderLoop((() => {
          WT.render()
        }))
      }
      show(TT) {
        var UT;
        null === (UT = this.remove) || void 0 === UT || UT.call(this), this.remove = this.place(TT)
      }
      resize(TT, UT) {
        const {
          engine: mT,
          canvas: WT
        } = aT();
        WT.width = TT, WT.height = UT, mT.resize()
      }
      close() {
        var TT;
        aT().engine.stopRenderLoop(), null === (TT = this.remove) || void 0 === TT || TT.call(this), this.remove = null
      }
    }
    class PT {
      constructor(TT) {
        this.preview = void 0, this.view = {
          figures: [],
          shown: []
        }, this.aspect = 1, this.placed = [], this.preview = new FT(TT, (() => () => {}))
      }
      show(TT) {
        TT.figures !== this.view.figures && this.preload(TT.figures), this.view = TT, this.place()
      }
      resize(TT, UT) {
        this.preview.resize(TT, UT), this.aspect = TT / UT, this.place()
      }
      close() {
        this.preview.close();
        for (const TT of this.placed) null === TT || void 0 === TT || TT.remove();
        this.placed = []
      }
      preload(TT) {
        const UT = () => {};
        yT("NPC").catch(UT);
        for (const {
            AY: mT
          }
          of TT) null !== mT && XT(mT).catch(UT)
      }
      place() {
        const {
          figures: TT,
          shown: UT
        } = this.view, mT = TT.map(((mT, WT) => {
          var zT;
          const MT = null !== (zT = this.placed[WT]) && void 0 !== zT ? zT : null;
          if (!UT[WT]) return null === MT || void 0 === MT || MT.remove(), null;
          const gT = (nT = (WT + .5) / TT.length, HT = this.aspect, (.5 - nT) * (2 * OT * Math.tan(aT().camera.fov / 2)) * HT);
          var nT, HT;
          return null !== MT && MT.figure === mT && MT.x === gT ? MT : (null === MT || void 0 === MT || MT.remove(), {
            figure: mT,
            x: gT,
            remove: QT(mT, gT)
          })
        }));
        for (const WT of this.placed.slice(TT.length)) null === WT || void 0 === WT || WT.remove();
        this.placed = mT
      }
    }

    function VT(TT) {
      return new FT(TT, IT)
    }

    function uT(TT) {
      return new PT(TT)
    }

    function CT(TT) {
      return new FT(TT, sT)
    }
  },
  38914: (TT, UT, mT) => {
    mT.d(UT, {
      d: () => LT
    });
    var WT = mT(37281),
      zT = mT(37292),
      MT = mT(37549),
      gT = mT(37298),
      nT = mT(37288);

    function HT(TT) {
      return `\n\t\t\t\t${(0,nT.r)(TT,"mat2","rotate",[{name:"ang",type:"float"}],`\
      n\ t\ t\ t\ t\ t$ {
        (0, nT.w)(TT, "float", "s", "sin(ang)")
      }\
      n\ t\ t\ t\ t\ t$ {
        (0, nT.w)(TT, "float", "c", "cos(ang)")
      }\
      n\ t\ t\ t\ t\ treturn $ {
        (0, nT.k)(TT, "mat2", "c", "s", "-s", "c")
      };\
      n\ t\ t\ t\ t`)}\n\t\t\t`
    }

    function kT(TT, UT) {
      let mT = (0, nT.zb)(TT, "skele" + (UT - 1));
      for (let zT = UT - 2; zT >= 0; zT--) mT = (0, nT.pb)(TT, `boneIdx == ${zT}`, (0, nT.zb)(TT, `skele${zT}`), mT);
      const WT = "bone.yz + rotate(bone.x) * pivot - pivot";
      return `\n\t\t\t\t${(0,nT.w)(TT,"int","boneIdx",(0,nT.wb)(TT,"BLOXD_CAPE_MAX_Y - positionUpdated.y"))}\n\t\t\t\t${(0,nT.w)(TT,"vec3","bone",mT)}\n\t\t\t\t${(0,nT.w)(TT,"vec2","pivot",(0,nT.k)(TT,"vec2","0.0",`${(0,nT.Eb)(TT,"position")}.z`))}\n\t\t\t\t${(0,nT.$)(TT)?`positionUpdated = vec3f(positionUpdated.x, positionUpdated.yz + (${WT}));`:`positionUpdated.yz += ${WT};`}\n\t\t`
    }

    function jT(TT) {
      return `\n\t\t\t\t#ifdef NORMAL\n\t\t\t\tnormalUpdated = ${(0,nT.k)(TT,"vec3","normalUpdated.x","rotate(bone.x) * normalUpdated.yz")};\n\t\t\t\t#endif\n\t\t`
    }
    const lT = {
        x: 0,
        y: 0,
        z: 0,
        MmT(TT, UT) {
          return this.x = TT[UT], this.y = TT[UT + 1], this.z = TT[UT + 2], this
        }
      },
      LT = {
        name: "Cape",
        className: "CapeMaterialPlugin",
        priority: 200,
        defines: (TT, UT) => ({
          ...(0, WT.b)("CAPE"),
          BLOXD_CAPE_BONES: `${TT}`,
          BLOXD_CAPE_MAX_Y: (0, zT.nb)(UT)
        }),
        getUniforms(TT) {
          return (0, MT.c)(function(TT) {
            const UT = [];
            for (let mT = 0; mT < TT; mT++) UT.push({
              name: `skele${mT}`,
              type: "highp vec3"
            });
            return UT
          }(this.skeleLen), "vertex", TT)
        },
        bind(TT) {
          for (let UT = 0; UT < this.skeleLen; UT++) TT.updateVector3(`skele${UT}`, lT.MmT(this.skele, 3 * UT))
        },
        uniformsVersion() {
          return this.bonesVersion
        },
        getCustomCode(TT, UT) {
          return "vertex" !== TT ? null : {
            CUSTOM_VERTEX_DEFINITIONS: HT(UT),
            CUSTOM_VERTEX_UPDATE_POSITION: kT(UT, this.skeleLen),
            CUSTOM_VERTEX_UPDATE_NORMAL: jT(UT)
          }
        }
      };
    (0, gT.l)(LT)
  },
  38807: (TT, UT, mT) => {
    mT.d(UT, {
      d: () => jT,
      e: () => lT
    });
    var WT = mT(37281),
      zT = mT(37549),
      MT = mT(37288),
      gT = mT(37298);
    const nT = "bloxdTextLodBias",
      HT = [{
        name: nT,
        type: "float"
      }],
      kT = "bloxdTextSample",
      jT = {
        planes: -.5,
        boards: -.5
      },
      lT = {
        name: "TextSampler",
        className: "TextSamplerMaterialPlugin",
        priority: 60,
        defines: () => (0, WT.b)("TEXT_SAMPLER"),
        getUniforms: TT => (0, zT.c)(HT, "fragment", TT),
        bind(TT) {
          TT.updateFloat(nT, this.lodBias)
        },
        uniformsVersion: () => 0,
        getCustomCode(TT, UT) {
          if ("fragment" !== TT) return null;
          const mT = (0, MT.D)(UT, `vec4 ${kT}(sampler2D s, vec2 uv, float bias)`, `fn ${kT}(t: texture_2d<f32>, ts: sampler, uv: vec2f, bias: f32) -> vec4f`),
            WT = (0, MT.D)(UT, "texture2D(s, uv, bias)", "textureSampleBias(t, ts, uv, bias)"),
            zT = `${(0,MT.R)(UT,"vDiffuseUV")} + uvOffset`,
            gT = (0, MT.D)(UT, `${kT}(diffuseSampler, ${zT}, ${(0,MT.zb)(UT,nT)})`, `${kT}(diffuseSampler, diffuseSamplerSampler, ${zT}, ${(0,MT.zb)(UT,nT)})`);
          return {
            CUSTOM_FRAGMENT_DEFINITIONS: `\n\t\t\t\t${mT} {\n\t\t\t\t\t${(0,MT.w)(UT,"vec4","texel",WT)}\n\t\t\t\t\t// 8-bit premultiplied rounding can put the quotient just over 1; only alpha 0 hits the floor,\n\t\t\t\t\t// where the colour is 0 anyway.\n\t\t\t\t\treturn ${(0,MT.k)(UT,"vec4",`clamp(texel.rgb / max(texel.a, 1.0 / 255.0), ${(0,MT.k)(UT,"vec3","0.0")}, ${(0,MT.k)(UT,"vec3","1.0")})`,"texel.a")};\n\t\t\t\t}\n\t\t\t`,
            [(0, MT.z)(UT)]: `baseColor = ${gT};`
          }
        }
      };
    (0, gT.l)(lT)
  },
  41267: (TT, UT, mT) => {
    mT.r(UT), mT.d(UT, {
      CapeMaterialPlugin: () => iT,
      HueTintMaterialPlugin: () => bT,
      LifeformMaterialPlugin: () => OT,
      OverlayMaterialPlugin: () => eT
    });
    var WT = mT(41269),
      zT = mT(38142);
    class MT extends((0, WT.h)(zT.c)) {}(0, WT.i)(zT.c, MT);
    var gT = mT(37273);
    class nT extends((0, WT.h)(gT.e)) {}(0, WT.i)(gT.e, nT);
    var HT = mT(37976);
    class kT extends((0, WT.h)(HT.c)) {}(0, WT.i)(HT.c, kT);
    var jT = mT(37534),
      lT = mT(40379),
      LT = mT(37531);
    class pT extends((0, WT.h)(LT.h)) {
      constructor(TT, UT, mT) {
        super(TT, UT, mT), (0, jT.e)(TT)
      }
      dispose(TT) {
        (0, jT.g)(this._material), super.dispose(TT)
      }
    }(0, WT.i)(LT.h, pT), (0, LT.l)({
      disableUnusedSpecularTerm: WT.e,
      isLightingDisabled: TT => TT instanceof lT.StandardMaterial && TT.disableLighting
    });
    var BT = mT(38807);
    class ZT extends((0, WT.h)(BT.e)) {}(0, WT.i)(BT.e, ZT);
    var cT = mT(38914),
      vT = mT(37376),
      fT = mT(38266),
      qT = mT(37324);
    class iT extends((0, WT.h)(cT.d)) {}(0, WT.i)(cT.d, iT);
    class bT extends((0, WT.h)(vT.c)) {}(0, WT.i)(vT.c, bT);
    class OT extends((0, WT.h)(fT.i)) {}(0, WT.i)(fT.i, OT);
    class eT extends((0, WT.h)(qT.c)) {}(0, WT.i)(qT.c, eT)
  },
  41269: (TT, UT, mT) => {
    mT.d(UT, {
      e: () => CT,
      h: () => fT,
      i: () => ET
    });
    var WT = mT(40379),
      zT = mT(41277),
      MT = mT(41334),
      gT = mT(41284),
      nT = mT(37947),
      HT = mT(37959),
      kT = mT(37965),
      jT = mT(37972),
      lT = mT(37312),
      LT = mT(37321),
      pT = mT(41286),
      BT = mT(37298),
      ZT = mT(37302),
      cT = mT(37288);

    function vT(TT, UT) {
      return Object.assign((function(TT, mT, WT, zT) {
        return UT(this.featureState, TT, mT, WT, zT)
      }), {
        hp: TT
      })
    }

    function fT(TT) {
      const UT = class extends pT.d {
          constructor(UT, mT) {
            const WT = (0, ZT.R)(UT),
              zT = WT && (0, ZT.s)(WT, TT.name);
            for (var MT = arguments.length, gT = new Array(MT > 2 ? MT - 2 : 0), nT = 2; nT < MT; nT++) gT[nT - 2] = arguments[nT];
            super(UT, TT.name, TT.priority, zT ? zT.defines : TT.defines(...gT), !1), this.featureState = void 0, this.featureState = mT, this._pluginManager._addPlugin(this), this._enable(!0), (0, ZT.t)(this._material, TT, this.featureState, this._pluginDefineNames)
          }
          getClassName() {
            return TT.className
          }
          isCompatible(TT) {
            return TT === cT.e.GLSL || TT === cT.e.WGSL
          }
        },
        mT = (0, BT.g)(TT);
      for (const [WT, zT] of Object.entries(BT.c)) {
        const MT = TT[WT];
        if (MT) {
          const TT = mT[WT];
          Object.defineProperty(UT.prototype, zT, {
            value: vT(MT, TT),
            writable: !0,
            configurable: !0
          })
        }
      }
      return UT
    }
    class qT extends(fT(nT.b)) {}
    var iT = mT(39907),
      bT = mT(41291),
      OT = mT(41300);

    function eT(TT, UT, mT) {
      return (0, OT.h)(mT, UT.urls, (() => async function(TT, UT, mT) {
        const {
          width: WT
        } = TT[0].getSize(), zT = TT.map(((TT, mT) => {
          var zT;
          const MT = Math.round(TT.getSize().height / WT),
            gT = null === UT || void 0 === UT ? void 0 : UT[mT];
          return {
            pixels: gT && gT.byteLength === WT * WT * MT * 4 ? gT : null !== (zT = YT.get(TT.getInternalTexture())) && void 0 !== zT ? zT : TT._readPixelsSync(),
            layers: MT
          }
        })), MT = mT.eB().getCaps().texture2DArrayMaxLayerCount, nT = (0, OT.e)(zT, WT, MT).map((TT => {
          let {
            pixels: UT,
            layers: zT
          } = TT;
          return {
            atlas: new bT.e(UT, WT, WT, zT, iT.b.TEXTUREFORMAT_RGBA, mT, !0, !1, gT.e.NEAREST_NEAREST_MIPLINEAR),
            layers: zT
          }
        }));
        return TT.forEach(((TT, UT) => {
          const WT = TT.getInternalTexture();
          YT.has(WT) || (! function(TT, UT) {
            const mT = UT.createRawTexture(new Uint8Array(4), 1, 1, iT.b.TEXTUREFORMAT_RGBA, !1, !1, gT.e.NEAREST_SAMPLINGMODE);
            TT._hardwareTexture.release(), UT.unbindAllTextures(), mT._swapAndDie(TT, !1)
          }(WT, mT.eB()), YT.set(WT, zT[UT].pixels))
        })), nT
      }(TT, UT.pixels, mT)))
    }
    const YT = new WeakMap;
    var JT = mT(37974);
    class xT extends(fT(HT.i)) {
      constructor(TT, UT) {
        super(TT, UT), this.loaded = new Set, this.mirrors = void 0, this.mirrors = UT.textures.map((TT => TT.mirror)), this.mirrors.forEach(((TT, UT) => {
          TT.onLoadObservable.add((TT => {
            this.setTextureArrayData(TT, UT).catch((TT => {
              console.error(`Failed to build the texture arrays, at atlas ${UT}`, TT)
            }))
          }))
        })), (0, JT.n)(UT, TT.shaderLanguage)
      }
      async setTextureArrayData(TT, UT) {
        const mT = this.featureState,
          {
            width: WT,
            height: zT
          } = TT.getSize(),
          MT = this._material.shaderLanguage;
        if (!mT.useWebGL2) return void(0, JT.f)(this._material, mT, UT, WT, Math.round(zT / WT), MT);
        if (this.loaded.add(UT), this.loaded.size < this.mirrors.length) return;
        const gT = await eT(this.mirrors, mT.sources, this._material.KF());
        (0, JT.d)(this._material, mT, gT, WT, MT)
      }
    }
    var dT = mT(41309),
      wT = mT(40432),
      tT = mT(37185),
      aT = mT(41318),
      yT = mT(40546),
      XT = mT(40418),
      IT = mT(41256),
      QT = mT(37708),
      sT = mT(41327);
    class FT extends dT.e {
      getData() {
        return null
      }
      _rebuild() {}
      restore() {
        super._rebuild()
      }
    }
    const PT = {
      Mesh: aT.d,
      TransformNode: IT.d,
      HB: dT.e,
      VertexBuffer: dT.i,
      BoundingInfo: wT.e,
      JB: tT.JB,
      ArenaBuffer: FT,
      SubMesh: XT.e,
      VertexData: yT.d,
      MirroredGeometry: sT.b,
      meshFromArrays: sT.f,
      plainMeshFromArrays: sT.i
    };
    (0, QT.f)(PT);
    var VT = mT(37534);
    class uT extends(fT(jT.k)) {
      constructor(TT, UT) {
        if (super(TT, UT), TT instanceof WT.StandardMaterial && UT.dirLightCount > 0) {
          const UT = TT,
            mT = UT._blockDirtyMechanism;
          UT._blockDirtyMechanism = !0, TT.disableLighting = !0, UT._blockDirtyMechanism = mT;
          const WT = (0, ZT.R)(TT);
          WT && (WT.disableLighting = !0, (0, ZT.Q)(WT))
        }(0, VT.e)(TT)
      }
      dispose(TT) {
        (0, VT.g)(this._material), super.dispose(TT)
      }
    }

    function CT(TT, UT) {
      if (!(UT instanceof WT.StandardMaterial) || UT.specularTexture) return;
      const {
        r: mT,
        g: zT,
        b: MT
      } = UT.specularColor;
      0 === mT && 0 === zT && 0 === MT && (TT.SPECULARTERM = !1)
    }(0, jT.g)({
      disableUnusedSpecularTerm: CT
    });
    var rT = mT(37397),
      KT = mT(37721);
    const ST = new RegExp(`^#define ${kT.c}\\s*$`, "m");
    class GT extends(fT(kT.h)) {
      constructor(TT, UT) {
        super(TT, UT), this.kB = !1, UT.ditherOnlyWhileFading && (KT.f.add(TT), this.prewarmDitherTwins(TT))
      }
      prewarmDitherTwins(TT) {
        const UT = new WeakSet;
        TT.onEffectCreatedObservable.add((mT => {
          let {
            effect: WT,
            subMesh: zT
          } = mT;
          if (this.featureState.prewarmingDither || UT.has(WT)) return;
          UT.add(WT);
          const MT = null === zT || void 0 === zT ? void 0 : zT.getMesh();
          MT && !ST.test(WT.defines) && TT.KF().onAfterRenderObservable.addOnce((() => {
            this.prewarmDither(MT) || UT.delete(WT)
          }))
        }))
      }
      prewarmDither(TT) {
        if (this.kB || TT.bJ()) return !1;
        const UT = new XT.e(0, 0, 0, 0, 0, TT, void 0, !1, !1);
        this.featureState.prewarmingDither = !0;
        try {
          this._material.isReadyForSubMesh(TT, UT)
        } finally {
          this.featureState.prewarmingDither = !1
        }
        return null !== UT.effect
      }
      dispose(TT) {
        this.kB = !0, super.dispose(TT)
      }
    }
    const NT = new Map;

    function ET(TT, UT) {
      NT.set(TT, UT)
    }
    ET(nT.b, qT), ET(HT.i, xT), ET(kT.h, GT), ET(jT.k, uT), (0, lT.d)({
      create: (TT, UT) => {
        const mT = new WT.StandardMaterial(TT.name, UT);
        return (0, rT.o)(TT, mT), mT.detailMap._pluginDefineNames
      },
      write: (TT, UT, mT) => {
        (0, rT._)(TT.mirror, UT, mT)
      },
      addFeature: (TT, UT, mT) => {
        const WT = NT.get(UT.feature);
        if (!WT) throw new Error(`${UT.feature.name} has no plugin class (registerPluginClass)`);
        new WT(TT.mirror, UT.state, ...mT)
      },
      texture: (TT, UT, mT) => {
        let {
          url: WT,
          noMipmap: zT,
          invertY: MT,
          samplingMode: nT,
          data: HT,
          sets: kT
        } = mT;
        if (!HT) {
          const mT = new gT.e(WT, UT, zT, MT, nT);
          return Object.assign(mT, kT), void(0, LT.N)(TT, mT)
        }
        const jT = {},
          lT = new Promise(((TT, UT) => {
            jT.onLoad = TT, jT.onError = (TT, mT) => {
              UT(new Error(`${HT.context}: ${(null===mT||void 0===mT?void 0:mT.message)||TT||"Failed to load texture"}`))
            }
          })),
          {
            mimeType: pT,
            bytes: BT,
            label: ZT
          } = HT,
          cT = {
            noMipmap: zT,
            invertY: !1,
            samplingMode: nT,
            ...jT,
            mimeType: pT,
            loaderOptions: void 0,
            useSRGBBuffer: !1
          },
          vT = new gT.e(null, UT, cT);
        rT.q.set(vT, lT), Object.assign(vT, kT), vT.updateURL(WT, BT);
        const fT = vT.getInternalTexture();
        fT && (fT.label = ZT), TT.uvSet = vT.coordinatesIndex, TT.matrix.set((0, rT.Q)(vT)), (0, LT.N)(TT, vT)
      },
      cube: (TT, UT, mT) => {
        let {
          rootUrl: WT,
          files: MT,
          noMipmap: nT,
          luminance: HT
        } = mT;
        const {
          samplingMode: kT
        } = TT.sampler, jT = kT === (0, LT.G)(nT) ? null : () => {
          (0, rT.M)(lT, kT)
        }, lT = new zT.d(WT, UT, null, nT, MT, jT, null, (0, LT.C)(HT));
        lT.coordinatesMode = gT.e.SKYBOX_MODE, (0, LT.N)(TT, lT)
      },
      canvas: (TT, UT, mT) => {
        let {
          width: WT,
          height: zT,
          mipmaps: nT,
          samplingMode: HT,
          hasAlpha: kT = !1,
          wrap: jT = gT.e.CLAMP_ADDRESSMODE
        } = mT;
        const lT = new MT.b(UT, {
          width: WT,
          height: zT
        }, TT, nT, HT);
        lT.hasAlpha = kT, lT.wrapU = jT, lT.wrapV = jT;
        const LT = (0, rT.A)(lT);
        return (0, rT.E)(LT, lT), LT
      }
    })
  },
  41327: (TT, UT, mT) => {
    mT.d(UT, {
      b: () => jT,
      f: () => lT,
      i: () => LT
    });
    var WT = mT(41309),
      zT = mT(40171),
      MT = mT(40432),
      gT = mT(40550),
      nT = mT(41318),
      HT = mT(40546),
      kT = mT(37584);
    class jT extends gT.e {
      constructor() {
        super(...arguments), this.model = null, this.onGeometryUpdated = (TT, UT) => {
          this.releaseUnlessInstanced(UT)
        }, this.onLinked = null
      }
      link(TT) {
        var UT;
        (0, kT.m)(TT), this.model = TT, null === (UT = this.onLinked) || void 0 === UT || UT.call(this, TT)
      }
      relink() {
        this.release();
        const TT = [];
        for (const zT of Object.values(this._vertexBuffers))
          if (!zT.getIsInstanced()) {
            const {
              byteOffset: UT,
              byteStride: mT,
              type: WT,
              normalized: MT
            } = zT;
            TT.push({
              kind: zT.getKind(),
              data: zT.getData(),
              offset: UT,
              stride: mT,
              components: zT.getSize(),
              glType: WT,
              isNormalized: MT
            })
          } const UT = this._indices.length ? this._indices : null,
          {
            minimum: mT,
            maximum: WT
          } = this.extend;
        this.link(new kT.f(TT, UT, this.getTotalVertices(), new Float64Array(mT.cWT()), new Float64Array(WT.cWT())))
      }
      copy(TT) {
        if (!this.model) return super.copy(TT);
        const UT = new jT(TT, this.KF()),
          mT = this.vWT(void 0, !0);
        mT && UT.setIndices(mT);
        let gT = !1;
        for (const MT in this._vertexBuffers) {
          const TT = this._vertexBuffers[MT],
            mT = TT.getData();
          if (!mT) continue;
          const nT = TT.getSize(),
            {
              type: HT,
              byteOffset: kT,
              byteStride: jT,
              normalized: lT
            } = TT;
          gT ||= TT.isUpdatable();
          const LT = TT.getIsInstanced() ? (mT instanceof Array ? 4 * mT.length : mT.byteLength) / jT : this.getTotalVertices(),
            pT = (0, zT.v)(mT, nT, HT, kT, jT, LT, !0),
            BT = {
              updatable: TT.isUpdatable(),
              stride: nT,
              type: HT,
              normalized: lT,
              takeBufferOwnership: !0,
              instanced: TT.getIsInstanced()
            };
          UT.setVerticesBuffer(new WT.i(this.eB(), pT, MT, BT), LT)
        }
        return UT._updatable = gT, UT._boundingInfo = new MT.e(this.extend.minimum, this.extend.maximum), UT.relink(), UT
      }
      static mergeMeshes(TT, UT, mT, WT, zT, MT) {
        const HT = TT[0].KF(),
          kT = new nT.d(TT[0].name + "_merged", HT),
          lT = new jT(gT.e.RandomId(), HT, void 0, !1, kT);
        try {
          if (!nT.d.MergeMeshes(TT, UT, mT, kT, zT, MT)) return kT.dispose(), null
        } catch (LT) {
          throw kT.dispose(), LT
        }
        return lT.relink(), kT
      }
      removeVerticesData(TT) {
        this.releaseUnlessInstanced(TT), super.removeVerticesData(TT)
      }
      dispose() {
        this.release(), super.dispose()
      }
      releaseUnlessInstanced(TT) {
        var UT;
        TT && null !== (UT = this.getVertexBuffer(TT)) && void 0 !== UT && UT.getIsInstanced() || this.release()
      }
      release() {
        this.model && ((0, kT.s)(this.model), this.model = null)
      }
    }

    function lT(TT, UT, mT) {
      let WT = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : new nT.d(TT, mT);
      const zT = (0, kT.k)(UT),
        {
          positions: MT,
          normals: lT,
          uvs: LT,
          indices: pT,
          named: BT = {}
        } = UT,
        ZT = new HT.d;
      ZT.positions = MT, ZT.normals = null !== lT && void 0 !== lT ? lT : null, ZT.uvs = null !== LT && void 0 !== LT ? LT : null, ZT.indices = pT;
      const cT = new jT(gT.e.RandomId(), mT, ZT, !1, WT);
      for (const {
          kind: gT,
          components: nT
        }
        of zT.vertexAttributes) gT in BT && WT.setVerticesData(gT, BT[gT], !1, nT);
      return cT.link(zT), WT
    }

    function LT(TT, UT, mT) {
      let WT = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
      const zT = new nT.d(TT, mT),
        {
          positions: MT,
          normals: gT,
          uvs: kT,
          indices: jT
        } = UT;
      return Object.assign(new HT.d, {
        positions: MT,
        normals: gT,
        uvs: kT,
        indices: jT
      }).applyToMesh(zT, WT), zT
    }
  },
  41300: (TT, UT, mT) => {
    function WT(TT, UT, mT) {
      const WT = UT * UT * 4,
        zT = TT[0].layers,
        MT = zT * (TT.length - 1) + TT[TT.length - 1].layers,
        gT = new Uint8Array(MT * WT);
      TT.forEach(((UT, mT) => {
        const MT = mT + 1 < TT.length ? Math.min(UT.layers, zT) : UT.layers;
        gT.set(new Uint8Array(UT.pixels.buffer, UT.pixels.byteOffset, MT * WT), mT * zT * WT)
      }));
      const nT = Math.max(1, Math.min(MT, mT || MT));
      if (nT === MT) return [{
        pixels: gT,
        layers: MT
      }];
      const HT = [];
      for (let kT = 0; kT < MT; kT += nT) {
        const TT = Math.min(MT, kT + nT);
        HT.push({
          pixels: gT.slice(kT * WT, TT * WT),
          layers: TT - kT
        })
      }
      return HT
    }
    mT.d(UT, {
      e: () => WT,
      h: () => MT
    });
    const zT = new WeakMap;

    function MT(TT, UT, mT) {
      var WT, MT;
      const gT = null !== (WT = zT.get(TT)) && void 0 !== WT ? WT : new Map;
      zT.set(TT, gT);
      const nT = null !== (MT = gT.get(UT[0])) && void 0 !== MT ? MT : [];
      gT.set(UT[0], nT);
      const HT = nT.find((TT => TT.urls.length === UT.length && TT.urls.every(((TT, mT) => TT === UT[mT]))));
      if (HT) return HT.built;
      const kT = {
        urls: [...UT],
        built: mT()
      };
      return nT.push(kT), kT.built.catch((() => {
        nT.splice(nT.indexOf(kT), 1)
      })), kT.built
    }
  }
};
Object.freeze(modules);
for (const TT in modules) Object.freeze(modules[TT]);