export const id = 246;
export const ids = [246];
export const modules = {
  40923: (CC, zC, ZC) => {
    ZC.r(zC), ZC.d(zC, {
      openMobLineupPreview: () => sC,
      openMobPreview: () => rC,
      openPetPreview: () => TC
    });
    var QC = ZC(39635),
      wC = ZC(39902),
      bC = ZC(40925),
      nC = ZC(37138),
      fC = ZC(36961),
      oC = ZC(40076),
      qC = ZC(40946),
      FC = ZC(38300),
      WC = ZC(37032),
      NC = ZC(37014),
      MC = ZC(36952),
      gC = ZC(38206),
      SC = ZC(38201),
      pC = ZC(37934),
      PC = ZC(37988),
      GC = ZC(37959),
      RC = ZC(37609),
      AC = ZC(2753),
      xC = ZC(37473);
    ZC(40948), ZC(40308), ZC(40956);
    const JC = 22,
      IC = 13,
      iC = Math.PI - Math.PI / 16,
      vC = 6,
      eC = Math.PI / 4;
    let hC = null;
    const KC = {},
      YC = new Map;

    function dC() {
      if (null !== hC) return hC;
      const CC = document.createElement("canvas");
      CC.classList.add("MobPreviewCanvas");
      const zC = new QC.d(CC, !0, {
        preserveDrawingBuffer: !0
      });
      zC.BZC = (0, AC.e)().Vg.engine.BZC;
      const ZC = new wC.e(zC);
      ZC.clearColor = new nC.e(0, 0, 0, 0), ZC.ambientColor = new nC.Color3(1, 1, 1);
      const qC = new bC.d("cp", Math.PI / 2, Math.PI / 2, JC, fC.Eg.Zero(), ZC),
        FC = new oC.e("light", new fC.Eg(-.1, 1, -.3), ZC);
      return FC.diffuse = new nC.Color3(1, 1, 1), FC.specular = new nC.Color3(1, 1, 1), FC.groundColor = new nC.Color3(.5, .5, .5), hC = {
        engine: zC,
        sS: ZC,
        canvas: CC,
        camera: qC
      }, hC
    }

    function mC(CC) {
      return KC[CC] ??= (0, pC.t)(CC, dC().sS, !0).catch((zC => {
        throw delete KC[CC], zC
      })), KC[CC]
    }

    function HC(CC) {
      let zC = YC.get(CC);
      return zC || (zC = RC.x[CC].loadModel(dC().sS, !1).then((CC => (CC.IK(!1), CC)), (zC => {
        throw YC.delete(CC), zC
      })), YC.set(CC, zC)), zC
    }

    function EC(CC) {
      var zC, ZC, QC;
      let {
        mobType: wC,
        variation: bC,
        animation: nC
      } = CC, oC = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null, JC = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
      const vC = null !== (zC = null === oC || void 0 === oC ? void 0 : oC.size) && void 0 !== zC ? zC : 1,
        eC = null !== (ZC = null === oC || void 0 === oC ? void 0 : oC.cosmetics) && void 0 !== ZC ? ZC : [],
        hC = null !== (QC = null === oC || void 0 === oC ? void 0 : oC.Hx) && void 0 !== QC ? QC : null;
      let KC = !1,
        YC = null,
        EC = null;
      const {
        engine: lC,
        sS: XC
      } = dC(), cC = XC.onBeforeRenderObservable.add((() => {
        var CC;
        null === (CC = EC) || void 0 === CC || CC.render(lC.getDeltaTime())
      })), uC = null === hC ? null : HC(hC).catch((CC => (console.error(`Mob preview: could not load ${hC}`, CC), null)));
      return Promise.all([mC(wC), uC]).then((CC => {
        var zC, ZC, QC;
        let [oC, mC] = CC;
        if (KC) return;
        const HC = (0, AC.e)().Vg.nH,
          {
            hitBoxDimensions: lC
          } = (0, FC.e)(wC),
          XC = IC / Math.max(lC.height, lC.width);
        if (YC = (0, pC.l)(wC, XC * vC, !0, !0), HC.setPosition(YC, JC, -lC.height * XC / 2, 0), HC.setRotationEulerY(YC, iC), oC.meshApi instanceof GC.d && eC.length > 0)
          for (const [wC, bC] of eC) oC.meshApi.updatePlayerCosmetic(null, YC, wC, bC, !0);
        else oC.meshApi.updateVariation(YC, wC, null !== bC && void 0 !== bC ? bC : "default");
        null !== hC && null !== mC && function(CC, zC, ZC, QC) {
          var wC;
          const bC = RC.x[CC],
            nC = (0, gC.h)();
          (0, gC.d)(bC, null === (wC = (0, PC.b)(ZC).meshMetadata.heldItemPositionParams) || void 0 === wC ? void 0 : wC.itemOffset, nC);
          const oC = xC.c * nC.sq.y,
            FC = nC.usesQuaternion ? nC.quaternion : fC.Quaternion.FromEulerVector(nC.rotation),
            WC = new qC.c(`${zC.name}Hand`, dC().sS);
          WC.position.Av((0, SC.b)(nC.position, FC, oC, bC.heldModelOffsetY())), WC.rotationQuaternion = FC, WC.sq.set(nC.sq.x, oC, nC.sq.z), zC.clone(`${zC.name}Held`, WC).IK(!0);
          const NC = (0, AC.e)().Vg.nH;
          NC.attachTransformNode(WC, QC, NC.getNamedNode(QC, "ArmRightMesh"))
        }(hC, mC, wC, YC), HC.set(YC, "aOpacity", 1);
        const cC = null !== (zC = (0, PC.b)(wC).meshMetadata.lifeformTypeForModelOverride) && void 0 !== zC ? zC : wC;
        EC = new MC.AnimatorState, EC.thinInstMgr = HC, EC.WH = YC, EC.AZC = HC.OZC(YC, 0), EC.modelLifeformType = cC, EC.nodeNameAliases = null !== (ZC = null === (QC = (0, WC.b)(cC)) || void 0 === QC ? void 0 : QC.nodeNameAliases) && void 0 !== ZC ? ZC : null, EC.startAnimation(nC, NC.d.Movement)
      })).catch((CC => {
        console.error(`Mob preview: could not load ${wC}`, CC)
      })), () => {
        KC = !0, XC.onBeforeRenderObservable.remove(cC), null !== YC && (0, AC.e)().Vg.nH.delete(YC)
      }
    }

    function lC(CC, zC) {
      return EC({
        mobType: "NPC",
        variation: null,
        animation: CC.animation
      }, CC, zC)
    }

    function XC(CC) {
      let {
        mobType: zC,
        variation: ZC,
        metaInfo: QC,
        tamed: wC
      } = CC, bC = !1, nC = null, fC = 0;
      const oC = (0, AC.e)(),
        qC = oC.Vg.nH,
        FC = CC => {
          fC += eC * (CC / 1e3) % (2 * Math.PI), qC.setRotationEulerY(nC, fC)
        };
      return mC(zC).then((CC => {
        if (bC) return;
        nC = (0, pC.l)(zC, vC, !0, !0), qC.setPosition(nC, 0, -vC, 0), CC.meshApi.updateVariation(nC, zC, ZC);
        const fC = {
          wool: "Sheared" !== QC,
          saddle: "Saddled" === QC,
          antlers: "Antlers" === QC,
          collar: wC
        };
        for (const [zC, ZC] of Object.entries(fC)) qC.hasGroup(nC, zC) && CC.meshApi.setMeshGroupVisibility(nC, zC, ZC);
        qC.set(nC, "aOpacity", 1), oC.on("renderTickBegin", FC)
      })).catch((CC => {
        console.error(`Pet preview: could not load ${zC}`, CC)
      })), () => {
        bC = !0, oC.off("renderTickBegin", FC), null !== nC && qC.delete(nC)
      }
    }
    class cC {
      constructor(CC, zC) {
        this.place = zC, this.remove = null;
        const {
          engine: ZC,
          sS: QC,
          canvas: wC
        } = dC();
        CC.appendChild(wC), ZC.resize(), ZC.runRenderLoop((() => {
          QC.render()
        }))
      }
      show(CC) {
        var zC;
        null === (zC = this.remove) || void 0 === zC || zC.call(this), this.remove = this.place(CC)
      }
      resize(CC, zC) {
        const {
          engine: ZC,
          canvas: QC
        } = dC();
        QC.width = CC, QC.height = zC, ZC.resize()
      }
      close() {
        var CC;
        dC().engine.stopRenderLoop(), null === (CC = this.remove) || void 0 === CC || CC.call(this), this.remove = null
      }
    }
    class uC {
      constructor(CC) {
        this.preview = void 0, this.view = {
          figures: [],
          shown: []
        }, this.aspect = 1, this.placed = [], this.preview = new cC(CC, (() => () => {}))
      }
      show(CC) {
        CC.figures !== this.view.figures && this.preload(CC.figures), this.view = CC, this.place()
      }
      resize(CC, zC) {
        this.preview.resize(CC, zC), this.aspect = CC / zC, this.place()
      }
      close() {
        this.preview.close();
        for (const CC of this.placed) null === CC || void 0 === CC || CC.remove();
        this.placed = []
      }
      preload(CC) {
        const zC = () => {};
        mC("NPC").catch(zC);
        for (const {
            Hx: ZC
          }
          of CC) null !== ZC && HC(ZC).catch(zC)
      }
      place() {
        const {
          figures: CC,
          shown: zC
        } = this.view, ZC = CC.map(((ZC, QC) => {
          var wC;
          const bC = null !== (wC = this.placed[QC]) && void 0 !== wC ? wC : null;
          if (!zC[QC]) return null === bC || void 0 === bC || bC.remove(), null;
          const nC = (fC = (QC + .5) / CC.length, oC = this.aspect, (.5 - fC) * (2 * JC * Math.tan(dC().camera.fov / 2)) * oC);
          var fC, oC;
          return null !== bC && bC.figure === ZC && bC.x === nC ? bC : (null === bC || void 0 === bC || bC.remove(), {
            figure: ZC,
            x: nC,
            remove: lC(ZC, nC)
          })
        }));
        for (const QC of this.placed.slice(CC.length)) null === QC || void 0 === QC || QC.remove();
        this.placed = ZC
      }
    }

    function rC(CC) {
      return new cC(CC, EC)
    }

    function sC(CC) {
      return new uC(CC)
    }

    function TC(CC) {
      return new cC(CC, XC)
    }
  },
  38623: (CC, zC, ZC) => {
    ZC.d(zC, {
      e: () => NC
    });
    var QC = ZC(37044),
      wC = ZC(37059),
      bC = ZC(37301),
      nC = ZC(37061),
      fC = ZC(37050);

    function oC(CC) {
      return `\n\t\t\t\t${(0,fC.u)(CC,"mat2","rotate",[{name:"ang",type:"float"}],`\
      n\ t\ t\ t\ t\ t$ {
        (0, fC.w)(CC, "float", "s", "sin(ang)")
      }\
      n\ t\ t\ t\ t\ t$ {
        (0, fC.w)(CC, "float", "c", "cos(ang)")
      }\
      n\ t\ t\ t\ t\ treturn $ {
        (0, fC.l)(CC, "mat2", "c", "s", "-s", "c")
      };\
      n\ t\ t\ t\ t`)}\n\t\t\t`
    }

    function qC(CC, zC) {
      let ZC = (0, fC.ob)(CC, "skele" + (zC - 1));
      for (let wC = zC - 2; wC >= 0; wC--) ZC = (0, fC.fb)(CC, `boneIdx == ${wC}`, (0, fC.ob)(CC, `skele${wC}`), ZC);
      const QC = "bone.yz + rotate(bone.x) * pivot - pivot";
      return `\n\t\t\t\t${(0,fC.w)(CC,"int","boneIdx",(0,fC.jb)(CC,"BLOXD_CAPE_MAX_Y - positionUpdated.y"))}\n\t\t\t\t${(0,fC.w)(CC,"vec3","bone",ZC)}\n\t\t\t\t${(0,fC.w)(CC,"vec2","pivot",(0,fC.l)(CC,"vec2","0.0",`${(0,fC.wb)(CC,"position")}.z`))}\n\t\t\t\t${(0,fC.S)(CC)?`positionUpdated = vec3f(positionUpdated.x, positionUpdated.yz + (${QC}));`:`positionUpdated.yz += ${QC};`}\n\t\t`
    }

    function FC(CC) {
      return `\n\t\t\t\t#ifdef NORMAL\n\t\t\t\tnormalUpdated = ${(0,fC.l)(CC,"vec3","normalUpdated.x","rotate(bone.x) * normalUpdated.yz")};\n\t\t\t\t#endif\n\t\t`
    }
    const WC = {
        x: 0,
        y: 0,
        z: 0,
        azC(CC, zC) {
          return this.x = CC[zC], this.y = CC[zC + 1], this.z = CC[zC + 2], this
        }
      },
      NC = {
        name: "Cape",
        className: "CapeMaterialPlugin",
        priority: 200,
        defines: (CC, zC) => ({
          ...(0, QC.b)("CAPE"),
          BLOXD_CAPE_BONES: `${CC}`,
          BLOXD_CAPE_MAX_Y: (0, wC.vb)(zC)
        }),
        getUniforms(CC) {
          return (0, bC.d)(function(CC) {
            const zC = [];
            for (let ZC = 0; ZC < CC; ZC++) zC.push({
              name: `skele${ZC}`,
              type: "highp vec3"
            });
            return zC
          }(this.skeleLen), "vertex", CC)
        },
        bind(CC) {
          for (let zC = 0; zC < this.skeleLen; zC++) CC.updateVector3(`skele${zC}`, WC.azC(this.skele, 3 * zC))
        },
        uniformsVersion() {
          return this.bonesVersion
        },
        getCustomCode(CC, zC) {
          return "vertex" !== CC ? null : {
            CUSTOM_VERTEX_DEFINITIONS: oC(zC),
            CUSTOM_VERTEX_UPDATE_POSITION: qC(zC, this.skeleLen),
            CUSTOM_VERTEX_UPDATE_NORMAL: FC(zC)
          }
        }
      };
    (0, nC.o)(NC)
  },
  38517: (CC, zC, ZC) => {
    ZC.d(zC, {
      b: () => FC,
      c: () => WC
    });
    var QC = ZC(37044),
      wC = ZC(37301),
      bC = ZC(37050),
      nC = ZC(37061);
    const fC = "bloxdTextLodBias",
      oC = [{
        name: fC,
        type: "float"
      }],
      qC = "bloxdTextSample",
      FC = {
        planes: -.5,
        boards: -.5
      },
      WC = {
        name: "TextSampler",
        className: "TextSamplerMaterialPlugin",
        priority: 60,
        defines: () => (0, QC.b)("TEXT_SAMPLER"),
        getUniforms: CC => (0, wC.d)(oC, "fragment", CC),
        bind(CC) {
          CC.updateFloat(fC, this.lodBias)
        },
        uniformsVersion: () => 0,
        getCustomCode(CC, zC) {
          if ("fragment" !== CC) return null;
          const ZC = (0, bC.B)(zC, `vec4 ${qC}(sampler2D s, vec2 uv, float bias)`, `fn ${qC}(t: texture_2d<f32>, ts: sampler, uv: vec2f, bias: f32) -> vec4f`),
            QC = (0, bC.B)(zC, "texture2D(s, uv, bias)", "textureSampleBias(t, ts, uv, bias)"),
            wC = `${(0,bC.J)(zC,"vDiffuseUV")} + uvOffset`,
            nC = (0, bC.B)(zC, `${qC}(diffuseSampler, ${wC}, ${(0,bC.ob)(zC,fC)})`, `${qC}(diffuseSampler, diffuseSamplerSampler, ${wC}, ${(0,bC.ob)(zC,fC)})`);
          return {
            CUSTOM_FRAGMENT_DEFINITIONS: `\n\t\t\t\t${ZC} {\n\t\t\t\t\t${(0,bC.w)(zC,"vec4","texel",QC)}\n\t\t\t\t\t// 8-bit premultiplied rounding can put the quotient just over 1; only alpha 0 hits the floor,\n\t\t\t\t\t// where the colour is 0 anyway.\n\t\t\t\t\treturn ${(0,bC.l)(zC,"vec4",`clamp(texel.rgb / max(texel.a, 1.0 / 255.0), ${(0,bC.l)(zC,"vec3","0.0")}, ${(0,bC.l)(zC,"vec3","1.0")})`,"texel.a")};\n\t\t\t\t}\n\t\t\t`,
            [(0, bC.x)(zC)]: `baseColor = ${nC};`
          }
        }
      };
    (0, nC.o)(WC)
  },
  40956: (CC, zC, ZC) => {
    ZC.r(zC), ZC.d(zC, {
      CapeMaterialPlugin: () => AC,
      HueTintMaterialPlugin: () => xC,
      LifeformMaterialPlugin: () => JC,
      OverlayMaterialPlugin: () => IC
    });
    var QC = ZC(40958),
      wC = ZC(37849);
    class bC extends((0, QC.g)(wC.e)) {}(0, QC.i)(wC.e, bC);
    var nC = ZC(37040);
    class fC extends((0, QC.g)(nC.f)) {}(0, QC.i)(nC.f, fC);
    var oC = ZC(37677);
    class qC extends((0, QC.g)(oC.d)) {}(0, QC.i)(oC.d, qC);
    var FC = ZC(37290),
      WC = ZC(40092),
      NC = ZC(37285);
    class MC extends((0, QC.g)(NC.d)) {
      constructor(CC, zC, ZC) {
        super(CC, zC, ZC), (0, FC.g)(CC)
      }
      dispose(CC) {
        (0, FC.k)(this._material), super.dispose(CC)
      }
    }(0, QC.i)(NC.d, MC), (0, NC.f)({
      disableUnusedSpecularTerm: QC.c,
      isLightingDisabled: CC => CC instanceof WC.StandardMaterial && CC.disableLighting
    });
    var gC = ZC(38517);
    class SC extends((0, QC.g)(gC.c)) {}(0, QC.i)(gC.c, SC);
    var pC = ZC(38623),
      PC = ZC(37149),
      GC = ZC(37973),
      RC = ZC(37086);
    class AC extends((0, QC.g)(pC.e)) {}(0, QC.i)(pC.e, AC);
    class xC extends((0, QC.g)(PC.b)) {}(0, QC.i)(PC.b, xC);
    class JC extends((0, QC.g)(GC.q)) {}(0, QC.i)(GC.q, JC);
    class IC extends((0, QC.g)(RC.e)) {}(0, QC.i)(RC.e, IC)
  },
  40958: (CC, zC, ZC) => {
    ZC.d(zC, {
      c: () => TC,
      g: () => GC,
      i: () => LC
    });
    var QC = ZC(40092),
      wC = ZC(40963),
      bC = ZC(40994),
      nC = ZC(40968),
      fC = ZC(37648),
      oC = ZC(37660),
      qC = ZC(37666),
      FC = ZC(37670),
      WC = ZC(37076),
      NC = ZC(37083),
      MC = ZC(40970),
      gC = ZC(37061),
      SC = ZC(37063),
      pC = ZC(37050);

    function PC(CC, zC) {
      return Object.assign((function(CC, ZC, QC, wC) {
        return zC(this.featureState, CC, ZC, QC, wC)
      }), {
        Qg: CC
      })
    }

    function GC(CC) {
      const zC = class extends MC.e {
          constructor(zC, ZC) {
            const QC = (0, SC.Y)(zC),
              wC = QC && (0, SC.x)(QC, CC.name);
            for (var bC = arguments.length, nC = new Array(bC > 2 ? bC - 2 : 0), fC = 2; fC < bC; fC++) nC[fC - 2] = arguments[fC];
            super(zC, CC.name, CC.priority, wC ? wC.defines : CC.defines(...nC), !1), this.featureState = void 0, this.featureState = ZC, this._pluginManager._addPlugin(this), this._enable(!0), (0, SC.B)(this._material, CC, this.featureState, this._pluginDefineNames)
          }
          getClassName() {
            return CC.className
          }
          isCompatible(CC) {
            return CC === pC.e.GLSL || CC === pC.e.WGSL
          }
        },
        ZC = (0, gC.l)(CC);
      for (const [QC, wC] of Object.entries(gC.e)) {
        const bC = CC[QC];
        if (bC) {
          const CC = ZC[QC];
          Object.defineProperty(zC.prototype, wC, {
            value: PC(bC, CC),
            writable: !0,
            configurable: !0
          })
        }
      }
      return zC
    }
    class RC extends(GC(fC.d)) {}
    var AC = ZC(39635),
      xC = ZC(40977);
    const JC = new WeakMap;

    function IC(CC, zC, ZC) {
      let QC = JC.get(ZC);
      QC || (QC = new Map, JC.set(ZC, QC));
      const {
        url: wC
      } = CC;
      let bC = QC.get(wC);
      return bC || (bC = async function(CC, zC, ZC) {
        var QC;
        const {
          width: wC,
          height: bC
        } = CC.getSize(), fC = Math.round(bC / wC), oC = CC.getInternalTexture(), qC = zC && zC.byteLength === wC * wC * fC * 4 ? zC : null !== (QC = iC.get(oC)) && void 0 !== QC ? QC : CC._readPixelsSync(), FC = new xC.d(qC, wC, wC, fC, AC.d.TEXTUREFORMAT_RGBA, ZC, !0, !1, nC.e.NEAREST_NEAREST_MIPLINEAR);
        iC.has(oC) || (! function(CC, zC) {
          const ZC = zC.createRawTexture(new Uint8Array(4), 1, 1, AC.d.TEXTUREFORMAT_RGBA, !1, !1, nC.e.NEAREST_SAMPLINGMODE);
          CC._hardwareTexture.release(), zC.unbindAllTextures(), ZC._swapAndDie(CC, !1)
        }(oC, ZC.mg()), iC.set(oC, qC));
        return FC
      }(CC, zC, ZC), QC.set(wC, bC), bC.catch((() => {
        QC.delete(wC)
      }))), bC
    }
    const iC = new WeakMap;
    var vC = ZC(37673);
    class eC extends(GC(oC.j)) {
      constructor(CC, zC) {
        super(CC, zC), zC.textures.forEach(((CC, zC) => {
          CC.mirror.onLoadObservable.add((CC => {
            this.setTextureArrayData(CC, zC).catch((CC => {
              console.error(`Failed to build texture array for atlas ${zC}`, CC)
            }))
          }))
        })), (0, vC.k)(zC, CC.shaderLanguage)
      }
      async setTextureArrayData(CC, zC) {
        var ZC, QC;
        const wC = this.featureState,
          {
            width: bC,
            height: nC
          } = CC.getSize(),
          fC = wC.useWebGL2 ? await IC(CC, null !== (ZC = null === (QC = wC.sources.pixels) || void 0 === QC ? void 0 : QC[zC]) && void 0 !== ZC ? ZC : null, this._material.Km()) : null;
        (0, vC.d)(this._material, wC, zC, fC, bC, Math.round(nC / bC), this._material.shaderLanguage)
      }
    }
    var hC = ZC(40985),
      KC = ZC(40127),
      YC = ZC(36961),
      dC = ZC(40988),
      mC = ZC(40235),
      HC = ZC(40119),
      EC = ZC(40946),
      lC = ZC(37432),
      XC = ZC(40992);
    class cC extends hC.c {
      getData() {
        return null
      }
      _rebuild() {}
      restore() {
        super._rebuild()
      }
    }
    const uC = {
      Mesh: dC.e,
      TransformNode: EC.c,
      gg: hC.c,
      VertexBuffer: hC.f,
      BoundingInfo: KC.d,
      Eg: YC.Eg,
      ArenaBuffer: cC,
      SubMesh: HC.d,
      VertexData: mC.e,
      MirroredGeometry: XC.d,
      meshFromArrays: XC.e,
      plainMeshFromArrays: XC.f
    };
    (0, lC.e)(uC);
    var rC = ZC(37290);
    class sC extends(GC(FC.f)) {
      constructor(CC, zC) {
        if (super(CC, zC), CC instanceof QC.StandardMaterial && zC.dirLightCount > 0) {
          const zC = CC,
            ZC = zC._blockDirtyMechanism;
          zC._blockDirtyMechanism = !0, CC.disableLighting = !0, zC._blockDirtyMechanism = ZC;
          const QC = (0, SC.Y)(CC);
          QC && (QC.disableLighting = !0, (0, SC.W)(QC))
        }(0, rC.g)(CC)
      }
      dispose(CC) {
        (0, rC.k)(this._material), super.dispose(CC)
      }
    }

    function TC(CC, zC) {
      if (!(zC instanceof QC.StandardMaterial) || zC.specularTexture) return;
      const {
        r: ZC,
        g: wC,
        b: bC
      } = zC.specularColor;
      0 === ZC && 0 === wC && 0 === bC && (CC.SPECULARTERM = !1)
    }(0, FC.d)({
      disableUnusedSpecularTerm: TC
    });
    var aC = ZC(37175),
      tC = ZC(37450);
    const DC = new RegExp(`^#define ${qC.e}\\s*$`, "m");
    class jC extends(GC(qC.g)) {
      constructor(CC, zC) {
        super(CC, zC), this.Sg = !1, zC.ditherOnlyWhileFading && (tC.g.add(CC), this.prewarmDitherTwins(CC))
      }
      prewarmDitherTwins(CC) {
        const zC = new WeakSet;
        CC.onEffectCreatedObservable.add((ZC => {
          let {
            effect: QC,
            subMesh: wC
          } = ZC;
          if (this.featureState.prewarmingDither || zC.has(QC)) return;
          zC.add(QC);
          const bC = null === wC || void 0 === wC ? void 0 : wC.getMesh();
          bC && !DC.test(QC.defines) && CC.Km().onAfterRenderObservable.addOnce((() => {
            this.prewarmDither(bC) || zC.delete(QC)
          }))
        }))
      }
      prewarmDither(CC) {
        if (this.Sg || CC.GJ()) return !1;
        const zC = new HC.d(0, 0, 0, 0, 0, CC, void 0, !1, !1);
        this.featureState.prewarmingDither = !0;
        try {
          this._material.isReadyForSubMesh(CC, zC)
        } finally {
          this.featureState.prewarmingDither = !1
        }
        return null !== zC.effect
      }
      dispose(CC) {
        this.Sg = !0, super.dispose(CC)
      }
    }
    const yC = new Map;

    function LC(CC, zC) {
      yC.set(CC, zC)
    }
    LC(fC.d, RC), LC(oC.j, eC), LC(qC.g, jC), LC(FC.f, sC), (0, WC.c)({
      create: (CC, zC) => {
        const ZC = new QC.StandardMaterial(CC.name, zC);
        return (0, aC.u)(CC, ZC), ZC.detailMap._pluginDefineNames
      },
      write: (CC, zC, ZC) => {
        (0, aC.X)(CC.mirror, zC, ZC)
      },
      addFeature: (CC, zC, ZC) => {
        const QC = yC.get(zC.feature);
        if (!QC) throw new Error(`${zC.feature.name} has no plugin class (registerPluginClass)`);
        new QC(CC.mirror, zC.state, ...ZC)
      },
      texture: (CC, zC, ZC) => {
        let {
          url: QC,
          noMipmap: wC,
          invertY: bC,
          samplingMode: fC,
          data: oC,
          sets: qC
        } = ZC;
        if (!oC) {
          const ZC = new nC.e(QC, zC, wC, bC, fC);
          return Object.assign(ZC, qC), void(0, NC.L)(CC, ZC)
        }
        const FC = {},
          WC = new Promise(((CC, zC) => {
            FC.onLoad = CC, FC.onError = (CC, ZC) => {
              zC(new Error(`${oC.context}: ${(null===ZC||void 0===ZC?void 0:ZC.message)||CC||"Failed to load texture"}`))
            }
          })),
          {
            mimeType: MC,
            bytes: gC,
            label: SC
          } = oC,
          pC = {
            noMipmap: wC,
            invertY: !1,
            samplingMode: fC,
            ...FC,
            mimeType: MC,
            loaderOptions: void 0,
            useSRGBBuffer: !1
          },
          PC = new nC.e(null, zC, pC);
        aC.w.set(PC, WC), Object.assign(PC, qC), PC.updateURL(QC, gC);
        const GC = PC.getInternalTexture();
        GC && (GC.label = SC), CC.uvSet = PC.coordinatesIndex, CC.matrix.set((0, aC.P)(PC)), (0, NC.L)(CC, PC)
      },
      cube: (CC, zC, ZC) => {
        let {
          rootUrl: QC,
          files: bC,
          noMipmap: fC,
          luminance: oC
        } = ZC;
        const {
          samplingMode: qC
        } = CC.sampler, FC = qC === (0, NC.y)(fC) ? null : () => {
          (0, aC.L)(WC, qC)
        }, WC = new wC.c(QC, zC, null, fC, bC, FC, null, (0, NC.u)(oC));
        WC.coordinatesMode = nC.e.SKYBOX_MODE, (0, NC.L)(CC, WC)
      },
      canvas: (CC, zC, ZC) => {
        let {
          width: QC,
          height: wC,
          mipmaps: fC,
          samplingMode: oC,
          hasAlpha: qC = !1,
          wrap: FC = nC.e.CLAMP_ADDRESSMODE
        } = ZC;
        const WC = new bC.d(zC, {
          width: QC,
          height: wC
        }, CC, fC, oC);
        WC.hasAlpha = qC, WC.wrapU = FC, WC.wrapV = FC;
        const NC = (0, aC.C)(WC);
        return (0, aC.F)(NC, WC), NC
      }
    })
  },
  40992: (CC, zC, ZC) => {
    ZC.d(zC, {
      d: () => FC,
      e: () => WC,
      f: () => NC
    });
    var QC = ZC(40985),
      wC = ZC(39882),
      bC = ZC(40127),
      nC = ZC(40244),
      fC = ZC(40988),
      oC = ZC(40235),
      qC = ZC(37339);
    class FC extends nC.c {
      constructor() {
        super(...arguments), this.model = null, this.onGeometryUpdated = (CC, zC) => {
          this.releaseUnlessInstanced(zC)
        }, this.onLinked = null
      }
      link(CC) {
        var zC;
        (0, qC.n)(CC), this.model = CC, null === (zC = this.onLinked) || void 0 === zC || zC.call(this, CC)
      }
      relink() {
        this.release();
        const CC = [];
        for (const wC of Object.values(this._vertexBuffers))
          if (!wC.getIsInstanced()) {
            const {
              byteOffset: zC,
              byteStride: ZC,
              type: QC,
              normalized: bC
            } = wC;
            CC.push({
              kind: wC.getKind(),
              data: wC.getData(),
              offset: zC,
              stride: ZC,
              components: wC.getSize(),
              glType: QC,
              isNormalized: bC
            })
          } const zC = this._indices.length ? this._indices : null,
          {
            minimum: ZC,
            maximum: QC
          } = this.extend;
        this.link(new qC.f(CC, zC, this.getTotalVertices(), new Float64Array(ZC.VZC()), new Float64Array(QC.VZC())))
      }
      copy(CC) {
        if (!this.model) return super.copy(CC);
        const zC = new FC(CC, this.Km()),
          ZC = this.CQC(void 0, !0);
        ZC && zC.setIndices(ZC);
        let nC = !1;
        for (const bC in this._vertexBuffers) {
          const CC = this._vertexBuffers[bC],
            ZC = CC.getData();
          if (!ZC) continue;
          const fC = CC.getSize(),
            {
              type: oC,
              byteOffset: qC,
              byteStride: FC,
              normalized: WC
            } = CC;
          nC ||= CC.isUpdatable();
          const NC = CC.getIsInstanced() ? (ZC instanceof Array ? 4 * ZC.length : ZC.byteLength) / FC : this.getTotalVertices(),
            MC = (0, wC.o)(ZC, fC, oC, qC, FC, NC, !0),
            gC = {
              updatable: CC.isUpdatable(),
              stride: fC,
              type: oC,
              normalized: WC,
              takeBufferOwnership: !0,
              instanced: CC.getIsInstanced()
            };
          zC.setVerticesBuffer(new QC.f(this.mg(), MC, bC, gC), NC)
        }
        return zC._updatable = nC, zC._boundingInfo = new bC.d(this.extend.minimum, this.extend.maximum), zC.relink(), zC
      }
      static mergeMeshes(CC, zC, ZC, QC, wC, bC) {
        const oC = CC[0].Km(),
          qC = new fC.e(CC[0].name + "_merged", oC),
          WC = new FC(nC.c.RandomId(), oC, void 0, !1, qC);
        try {
          if (!fC.e.MergeMeshes(CC, zC, ZC, qC, wC, bC)) return qC.dispose(), null
        } catch (NC) {
          throw qC.dispose(), NC
        }
        return WC.relink(), qC
      }
      removeVerticesData(CC) {
        this.releaseUnlessInstanced(CC), super.removeVerticesData(CC)
      }
      dispose() {
        this.release(), super.dispose()
      }
      releaseUnlessInstanced(CC) {
        var zC;
        CC && null !== (zC = this.getVertexBuffer(CC)) && void 0 !== zC && zC.getIsInstanced() || this.release()
      }
      release() {
        this.model && ((0, qC.x)(this.model), this.model = null)
      }
    }

    function WC(CC, zC, ZC) {
      let QC = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : new fC.e(CC, ZC);
      const wC = (0, qC.j)(zC),
        {
          positions: bC,
          normals: WC,
          uvs: NC,
          indices: MC,
          named: gC = {}
        } = zC,
        SC = new oC.e;
      SC.positions = bC, SC.normals = null !== WC && void 0 !== WC ? WC : null, SC.uvs = null !== NC && void 0 !== NC ? NC : null, SC.indices = MC;
      const pC = new FC(nC.c.RandomId(), ZC, SC, !1, QC);
      for (const {
          kind: nC,
          components: fC
        }
        of wC.vertexAttributes) nC in gC && QC.setVerticesData(nC, gC[nC], !1, fC);
      return pC.link(wC), QC
    }

    function NC(CC, zC, ZC) {
      let QC = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
      const wC = new fC.e(CC, ZC),
        {
          positions: bC,
          normals: nC,
          uvs: qC,
          indices: FC
        } = zC;
      return Object.assign(new oC.e, {
        positions: bC,
        normals: nC,
        uvs: qC,
        indices: FC
      }).applyToMesh(wC, QC), wC
    }
  }
};
Object.freeze(modules);
for (const CC in modules) Object.freeze(modules[CC]);